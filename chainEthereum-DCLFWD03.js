import { a as Xa, c as Te, g as $a } from './lodash-aFjP5OGs.js';
import {
  K as oe,
  a8 as tf,
  Z as $r,
  a9 as ef,
  aa as rf,
  ab as Co,
  ac as nf,
  V as Ln,
  B as F,
  r as sf,
  N as Lo,
  ad as of,
  U as Oo,
} from './metaplex-DKWSQMdM.js';
import {
  L as z,
  i as af,
  h as $t,
  b as De,
  c as re,
  d as xs,
  s as si,
  e as er,
  f as vr,
  g as je,
  j as ur,
  k as nn,
  l as Ai,
  m as ff,
  n as Es,
  o as qs,
} from './chainSolana-C0WbUUwF.js';
const uf = 'bignumber/5.7.0';
var _n = oe.BN;
const ti = new z(uf),
  Wn = {},
  Fs = 9007199254740991;
let Hs = !1;
class ut {
  constructor(t, e) {
    t !== Wn &&
      ti.throwError(
        'cannot call constructor directly; use BigNumber.from',
        z.errors.UNSUPPORTED_OPERATION,
        { operation: 'new (BigNumber)' }
      ),
      (this._hex = e),
      (this._isBigNumber = !0),
      Object.freeze(this);
  }
  fromTwos(t) {
    return or(ge(this).fromTwos(t));
  }
  toTwos(t) {
    return or(ge(this).toTwos(t));
  }
  abs() {
    return this._hex[0] === '-' ? ut.from(this._hex.substring(1)) : this;
  }
  add(t) {
    return or(ge(this).add(ge(t)));
  }
  sub(t) {
    return or(ge(this).sub(ge(t)));
  }
  div(t) {
    return ut.from(t).isZero() && xr('division-by-zero', 'div'), or(ge(this).div(ge(t)));
  }
  mul(t) {
    return or(ge(this).mul(ge(t)));
  }
  mod(t) {
    const e = ge(t);
    return e.isNeg() && xr('division-by-zero', 'mod'), or(ge(this).umod(e));
  }
  pow(t) {
    const e = ge(t);
    return e.isNeg() && xr('negative-power', 'pow'), or(ge(this).pow(e));
  }
  and(t) {
    const e = ge(t);
    return (
      (this.isNegative() || e.isNeg()) && xr('unbound-bitwise-result', 'and'), or(ge(this).and(e))
    );
  }
  or(t) {
    const e = ge(t);
    return (
      (this.isNegative() || e.isNeg()) && xr('unbound-bitwise-result', 'or'), or(ge(this).or(e))
    );
  }
  xor(t) {
    const e = ge(t);
    return (
      (this.isNegative() || e.isNeg()) && xr('unbound-bitwise-result', 'xor'), or(ge(this).xor(e))
    );
  }
  mask(t) {
    return (this.isNegative() || t < 0) && xr('negative-width', 'mask'), or(ge(this).maskn(t));
  }
  shl(t) {
    return (this.isNegative() || t < 0) && xr('negative-width', 'shl'), or(ge(this).shln(t));
  }
  shr(t) {
    return (this.isNegative() || t < 0) && xr('negative-width', 'shr'), or(ge(this).shrn(t));
  }
  eq(t) {
    return ge(this).eq(ge(t));
  }
  lt(t) {
    return ge(this).lt(ge(t));
  }
  lte(t) {
    return ge(this).lte(ge(t));
  }
  gt(t) {
    return ge(this).gt(ge(t));
  }
  gte(t) {
    return ge(this).gte(ge(t));
  }
  isNegative() {
    return this._hex[0] === '-';
  }
  isZero() {
    return ge(this).isZero();
  }
  toNumber() {
    try {
      return ge(this).toNumber();
    } catch {
      xr('overflow', 'toNumber', this.toString());
    }
    return null;
  }
  toBigInt() {
    try {
      return BigInt(this.toString());
    } catch {}
    return ti.throwError('this platform does not support BigInt', z.errors.UNSUPPORTED_OPERATION, {
      value: this.toString(),
    });
  }
  toString() {
    return (
      arguments.length > 0 &&
        (arguments[0] === 10
          ? Hs ||
            ((Hs = !0),
            ti.warn('BigNumber.toString does not accept any parameters; base-10 is assumed'))
          : arguments[0] === 16
            ? ti.throwError(
                'BigNumber.toString does not accept any parameters; use bigNumber.toHexString()',
                z.errors.UNEXPECTED_ARGUMENT,
                {}
              )
            : ti.throwError(
                'BigNumber.toString does not accept parameters',
                z.errors.UNEXPECTED_ARGUMENT,
                {}
              )),
      ge(this).toString(10)
    );
  }
  toHexString() {
    return this._hex;
  }
  toJSON(t) {
    return { type: 'BigNumber', hex: this.toHexString() };
  }
  static from(t) {
    if (t instanceof ut) return t;
    if (typeof t == 'string')
      return t.match(/^-?0x[0-9a-f]+$/i)
        ? new ut(Wn, Yi(t))
        : t.match(/^-?[0-9]+$/)
          ? new ut(Wn, Yi(new _n(t)))
          : ti.throwArgumentError('invalid BigNumber string', 'value', t);
    if (typeof t == 'number')
      return (
        t % 1 && xr('underflow', 'BigNumber.from', t),
        (t >= Fs || t <= -Fs) && xr('overflow', 'BigNumber.from', t),
        ut.from(String(t))
      );
    const e = t;
    if (typeof e == 'bigint') return ut.from(e.toString());
    if (af(e)) return ut.from($t(e));
    if (e)
      if (e.toHexString) {
        const i = e.toHexString();
        if (typeof i == 'string') return ut.from(i);
      } else {
        let i = e._hex;
        if (
          (i == null && e.type === 'BigNumber' && (i = e.hex),
          typeof i == 'string' && (De(i) || (i[0] === '-' && De(i.substring(1)))))
        )
          return ut.from(i);
      }
    return ti.throwArgumentError('invalid BigNumber value', 'value', t);
  }
  static isBigNumber(t) {
    return !!(t && t._isBigNumber);
  }
}
function Yi(r) {
  if (typeof r != 'string') return Yi(r.toString(16));
  if (r[0] === '-')
    return (
      (r = r.substring(1)),
      r[0] === '-' && ti.throwArgumentError('invalid hex', 'value', r),
      (r = Yi(r)),
      r === '0x00' ? r : '-' + r
    );
  if ((r.substring(0, 2) !== '0x' && (r = '0x' + r), r === '0x')) return '0x00';
  for (r.length % 2 && (r = '0x0' + r.substring(2)); r.length > 4 && r.substring(0, 4) === '0x00'; )
    r = '0x' + r.substring(4);
  return r;
}
function or(r) {
  return ut.from(Yi(r));
}
function ge(r) {
  const t = ut.from(r).toHexString();
  return t[0] === '-' ? new _n('-' + t.substring(3), 16) : new _n(t.substring(2), 16);
}
function xr(r, t, e) {
  const i = { fault: r, operation: t };
  return e != null && (i.value = e), ti.throwError(r, z.errors.NUMERIC_FAULT, i);
}
function hf(r) {
  return new _n(r, 36).toString(16);
}
function He(r) {
  return '0x' + tf.keccak_256(re(r));
}
const lf = 'rlp/5.7.0',
  qr = new z(lf);
function Gs(r) {
  const t = [];
  for (; r; ) t.unshift(r & 255), (r >>= 8);
  return t;
}
function js(r, t, e) {
  let i = 0;
  for (let n = 0; n < e; n++) i = i * 256 + r[t + n];
  return i;
}
function Uo(r) {
  if (Array.isArray(r)) {
    let i = [];
    if (
      (r.forEach(function (s) {
        i = i.concat(Uo(s));
      }),
      i.length <= 55)
    )
      return i.unshift(192 + i.length), i;
    const n = Gs(i.length);
    return n.unshift(247 + n.length), n.concat(i);
  }
  xs(r) || qr.throwArgumentError('RLP object must be BytesLike', 'object', r);
  const t = Array.prototype.slice.call(re(r));
  if (t.length === 1 && t[0] <= 127) return t;
  if (t.length <= 55) return t.unshift(128 + t.length), t;
  const e = Gs(t.length);
  return e.unshift(183 + e.length), e.concat(t);
}
function Ri(r) {
  return $t(Uo(r));
}
function Vs(r, t, e, i) {
  const n = [];
  for (; e < t + 1 + i; ) {
    const s = Do(r, e);
    n.push(s.result),
      (e += s.consumed),
      e > t + 1 + i && qr.throwError('child data too short', z.errors.BUFFER_OVERRUN, {});
  }
  return { consumed: 1 + i, result: n };
}
function Do(r, t) {
  if (
    (r.length === 0 && qr.throwError('data too short', z.errors.BUFFER_OVERRUN, {}), r[t] >= 248)
  ) {
    const e = r[t] - 247;
    t + 1 + e > r.length &&
      qr.throwError('data short segment too short', z.errors.BUFFER_OVERRUN, {});
    const i = js(r, t + 1, e);
    return (
      t + 1 + e + i > r.length &&
        qr.throwError('data long segment too short', z.errors.BUFFER_OVERRUN, {}),
      Vs(r, t, t + 1 + e, e + i)
    );
  } else if (r[t] >= 192) {
    const e = r[t] - 192;
    return (
      t + 1 + e > r.length && qr.throwError('data array too short', z.errors.BUFFER_OVERRUN, {}),
      Vs(r, t, t + 1, e)
    );
  } else if (r[t] >= 184) {
    const e = r[t] - 183;
    t + 1 + e > r.length && qr.throwError('data array too short', z.errors.BUFFER_OVERRUN, {});
    const i = js(r, t + 1, e);
    t + 1 + e + i > r.length && qr.throwError('data array too short', z.errors.BUFFER_OVERRUN, {});
    const n = $t(r.slice(t + 1 + e, t + 1 + e + i));
    return { consumed: 1 + e + i, result: n };
  } else if (r[t] >= 128) {
    const e = r[t] - 128;
    t + 1 + e > r.length && qr.throwError('data too short', z.errors.BUFFER_OVERRUN, {});
    const i = $t(r.slice(t + 1, t + 1 + e));
    return { consumed: 1 + e, result: i };
  }
  return { consumed: 1, result: $t(r[t]) };
}
function Ms(r) {
  const t = re(r),
    e = Do(t, 0);
  return e.consumed !== t.length && qr.throwArgumentError('invalid rlp data', 'data', r), e.result;
}
const cf = 'address/5.7.0',
  Ni = new z(cf);
function Js(r) {
  De(r, 20) || Ni.throwArgumentError('invalid address', 'address', r), (r = r.toLowerCase());
  const t = r.substring(2).split(''),
    e = new Uint8Array(40);
  for (let n = 0; n < 40; n++) e[n] = t[n].charCodeAt(0);
  const i = re(He(e));
  for (let n = 0; n < 40; n += 2)
    i[n >> 1] >> 4 >= 8 && (t[n] = t[n].toUpperCase()),
      (i[n >> 1] & 15) >= 8 && (t[n + 1] = t[n + 1].toUpperCase());
  return '0x' + t.join('');
}
const df = 9007199254740991;
function gf(r) {
  return Math.log10 ? Math.log10(r) : Math.log(r) / Math.LN10;
}
const _s = {};
for (let r = 0; r < 10; r++) _s[String(r)] = String(r);
for (let r = 0; r < 26; r++) _s[String.fromCharCode(65 + r)] = String(10 + r);
const Ys = Math.floor(gf(df));
function pf(r) {
  (r = r.toUpperCase()), (r = r.substring(4) + r.substring(0, 2) + '00');
  let t = r
    .split('')
    .map((i) => _s[i])
    .join('');
  for (; t.length >= Ys; ) {
    let i = t.substring(0, Ys);
    t = (parseInt(i, 10) % 97) + t.substring(i.length);
  }
  let e = String(98 - (parseInt(t, 10) % 97));
  for (; e.length < 2; ) e = '0' + e;
  return e;
}
function Je(r) {
  let t = null;
  if (
    (typeof r != 'string' && Ni.throwArgumentError('invalid address', 'address', r),
    r.match(/^(0x)?[0-9a-fA-F]{40}$/))
  )
    r.substring(0, 2) !== '0x' && (r = '0x' + r),
      (t = Js(r)),
      r.match(/([A-F].*[a-f])|([a-f].*[A-F])/) &&
        t !== r &&
        Ni.throwArgumentError('bad address checksum', 'address', r);
  else if (r.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    for (
      r.substring(2, 4) !== pf(r) && Ni.throwArgumentError('bad icap checksum', 'address', r),
        t = hf(r.substring(4));
      t.length < 40;

    )
      t = '0' + t;
    t = Js('0x' + t);
  } else Ni.throwArgumentError('invalid address', 'address', r);
  return t;
}
function v0(r) {
  try {
    return Je(r), !0;
  } catch {}
  return !1;
}
function zo(r) {
  let t = null;
  try {
    t = Je(r.from);
  } catch {
    Ni.throwArgumentError('missing from address', 'transaction', r);
  }
  const e = si(re(ut.from(r.nonce).toHexString()));
  return Je(er(He(Ri([t, e])), 12));
}
const mf = 'properties/5.7.0';
var vf = function (r, t, e, i) {
  function n(s) {
    return s instanceof e
      ? s
      : new e(function (u) {
          u(s);
        });
  }
  return new (e || (e = Promise))(function (s, u) {
    function d(S) {
      try {
        E(i.next(S));
      } catch (P) {
        u(P);
      }
    }
    function v(S) {
      try {
        E(i.throw(S));
      } catch (P) {
        u(P);
      }
    }
    function E(S) {
      S.done ? s(S.value) : n(S.value).then(d, v);
    }
    E((i = i.apply(r, t || [])).next());
  });
};
const Sn = new z(mf);
function $(r, t, e) {
  Object.defineProperty(r, t, { enumerable: !0, value: e, writable: !1 });
}
function Vr(r, t) {
  for (let e = 0; e < 32; e++) {
    if (r[t]) return r[t];
    if (!r.prototype || typeof r.prototype != 'object') break;
    r = Object.getPrototypeOf(r.prototype).constructor;
  }
  return null;
}
function ze(r) {
  return vf(this, void 0, void 0, function* () {
    const t = Object.keys(r).map((i) => {
      const n = r[i];
      return Promise.resolve(n).then((s) => ({ key: i, value: s }));
    });
    return (yield Promise.all(t)).reduce((i, n) => ((i[n.key] = n.value), i), {});
  });
}
function Ko(r, t) {
  (!r || typeof r != 'object') && Sn.throwArgumentError('invalid object', 'object', r),
    Object.keys(r).forEach((e) => {
      t[e] || Sn.throwArgumentError('invalid object key - ' + e, 'transaction:' + e, r);
    });
}
function Ge(r) {
  const t = {};
  for (const e in r) t[e] = r[e];
  return t;
}
const yf = { bigint: !0, boolean: !0, function: !0, number: !0, string: !0 };
function qo(r) {
  if (r == null || yf[typeof r]) return !0;
  if (Array.isArray(r) || typeof r == 'object') {
    if (!Object.isFrozen(r)) return !1;
    const t = Object.keys(r);
    for (let e = 0; e < t.length; e++) {
      let i = null;
      try {
        i = r[t[e]];
      } catch {
        continue;
      }
      if (!qo(i)) return !1;
    }
    return !0;
  }
  return Sn.throwArgumentError(`Cannot deepCopy ${typeof r}`, 'object', r);
}
function wf(r) {
  if (qo(r)) return r;
  if (Array.isArray(r)) return Object.freeze(r.map((t) => oi(t)));
  if (typeof r == 'object') {
    const t = {};
    for (const e in r) {
      const i = r[e];
      i !== void 0 && $(t, e, oi(i));
    }
    return t;
  }
  return Sn.throwArgumentError(`Cannot deepCopy ${typeof r}`, 'object', r);
}
function oi(r) {
  return wf(r);
}
class sn {
  constructor(t) {
    for (const e in t) this[e] = oi(t[e]);
  }
}
const bf = 'abstract-provider/5.7.0';
var Af = function (r, t, e, i) {
  function n(s) {
    return s instanceof e
      ? s
      : new e(function (u) {
          u(s);
        });
  }
  return new (e || (e = Promise))(function (s, u) {
    function d(S) {
      try {
        E(i.next(S));
      } catch (P) {
        u(P);
      }
    }
    function v(S) {
      try {
        E(i.throw(S));
      } catch (P) {
        u(P);
      }
    }
    function E(S) {
      S.done ? s(S.value) : n(S.value).then(d, v);
    }
    E((i = i.apply(r, t || [])).next());
  });
};
const xf = new z(bf);
class Ef extends sn {
  static isForkEvent(t) {
    return !!(t && t._isForkEvent);
  }
}
class On {
  constructor() {
    xf.checkAbstract(new.target, On), $(this, '_isProvider', !0);
  }
  getFeeData() {
    return Af(this, void 0, void 0, function* () {
      const { block: t, gasPrice: e } = yield ze({
        block: this.getBlock('latest'),
        gasPrice: this.getGasPrice().catch((u) => null),
      });
      let i = null,
        n = null,
        s = null;
      return (
        t &&
          t.baseFeePerGas &&
          ((i = t.baseFeePerGas), (s = ut.from('1500000000')), (n = t.baseFeePerGas.mul(2).add(s))),
        { lastBaseFeePerGas: i, maxFeePerGas: n, maxPriorityFeePerGas: s, gasPrice: e }
      );
    });
  }
  addListener(t, e) {
    return this.on(t, e);
  }
  removeListener(t, e) {
    return this.off(t, e);
  }
  static isProvider(t) {
    return !!(t && t._isProvider);
  }
}
const Mf = 'abstract-signer/5.7.0';
var Rr = function (r, t, e, i) {
  function n(s) {
    return s instanceof e
      ? s
      : new e(function (u) {
          u(s);
        });
  }
  return new (e || (e = Promise))(function (s, u) {
    function d(S) {
      try {
        E(i.next(S));
      } catch (P) {
        u(P);
      }
    }
    function v(S) {
      try {
        E(i.throw(S));
      } catch (P) {
        u(P);
      }
    }
    function E(S) {
      S.done ? s(S.value) : n(S.value).then(d, v);
    }
    E((i = i.apply(r, t || [])).next());
  });
};
const Er = new z(Mf),
  _f = [
    'accessList',
    'ccipReadEnabled',
    'chainId',
    'customData',
    'data',
    'from',
    'gasLimit',
    'gasPrice',
    'maxFeePerGas',
    'maxPriorityFeePerGas',
    'nonce',
    'to',
    'type',
    'value',
  ],
  Sf = [z.errors.INSUFFICIENT_FUNDS, z.errors.NONCE_EXPIRED, z.errors.REPLACEMENT_UNDERPRICED];
class on {
  constructor() {
    Er.checkAbstract(new.target, on), $(this, '_isSigner', !0);
  }
  getBalance(t) {
    return Rr(this, void 0, void 0, function* () {
      return (
        this._checkProvider('getBalance'), yield this.provider.getBalance(this.getAddress(), t)
      );
    });
  }
  getTransactionCount(t) {
    return Rr(this, void 0, void 0, function* () {
      return (
        this._checkProvider('getTransactionCount'),
        yield this.provider.getTransactionCount(this.getAddress(), t)
      );
    });
  }
  estimateGas(t) {
    return Rr(this, void 0, void 0, function* () {
      this._checkProvider('estimateGas');
      const e = yield ze(this.checkTransaction(t));
      return yield this.provider.estimateGas(e);
    });
  }
  call(t, e) {
    return Rr(this, void 0, void 0, function* () {
      this._checkProvider('call');
      const i = yield ze(this.checkTransaction(t));
      return yield this.provider.call(i, e);
    });
  }
  sendTransaction(t) {
    return Rr(this, void 0, void 0, function* () {
      this._checkProvider('sendTransaction');
      const e = yield this.populateTransaction(t),
        i = yield this.signTransaction(e);
      return yield this.provider.sendTransaction(i);
    });
  }
  getChainId() {
    return Rr(this, void 0, void 0, function* () {
      return this._checkProvider('getChainId'), (yield this.provider.getNetwork()).chainId;
    });
  }
  getGasPrice() {
    return Rr(this, void 0, void 0, function* () {
      return this._checkProvider('getGasPrice'), yield this.provider.getGasPrice();
    });
  }
  getFeeData() {
    return Rr(this, void 0, void 0, function* () {
      return this._checkProvider('getFeeData'), yield this.provider.getFeeData();
    });
  }
  resolveName(t) {
    return Rr(this, void 0, void 0, function* () {
      return this._checkProvider('resolveName'), yield this.provider.resolveName(t);
    });
  }
  checkTransaction(t) {
    for (const i in t)
      _f.indexOf(i) === -1 &&
        Er.throwArgumentError('invalid transaction key: ' + i, 'transaction', t);
    const e = Ge(t);
    return (
      e.from == null
        ? (e.from = this.getAddress())
        : (e.from = Promise.all([Promise.resolve(e.from), this.getAddress()]).then(
            (i) => (
              i[0].toLowerCase() !== i[1].toLowerCase() &&
                Er.throwArgumentError('from address mismatch', 'transaction', t),
              i[0]
            )
          )),
      e
    );
  }
  populateTransaction(t) {
    return Rr(this, void 0, void 0, function* () {
      const e = yield ze(this.checkTransaction(t));
      e.to != null &&
        ((e.to = Promise.resolve(e.to).then((n) =>
          Rr(this, void 0, void 0, function* () {
            if (n == null) return null;
            const s = yield this.resolveName(n);
            return (
              s == null && Er.throwArgumentError('provided ENS name resolves to null', 'tx.to', n),
              s
            );
          })
        )),
        e.to.catch((n) => {}));
      const i = e.maxFeePerGas != null || e.maxPriorityFeePerGas != null;
      if (
        (e.gasPrice != null && (e.type === 2 || i)
          ? Er.throwArgumentError('eip-1559 transaction do not support gasPrice', 'transaction', t)
          : (e.type === 0 || e.type === 1) &&
            i &&
            Er.throwArgumentError(
              'pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas',
              'transaction',
              t
            ),
        (e.type === 2 || e.type == null) &&
          e.maxFeePerGas != null &&
          e.maxPriorityFeePerGas != null)
      )
        e.type = 2;
      else if (e.type === 0 || e.type === 1)
        e.gasPrice == null && (e.gasPrice = this.getGasPrice());
      else {
        const n = yield this.getFeeData();
        if (e.type == null)
          if (n.maxFeePerGas != null && n.maxPriorityFeePerGas != null)
            if (((e.type = 2), e.gasPrice != null)) {
              const s = e.gasPrice;
              delete e.gasPrice, (e.maxFeePerGas = s), (e.maxPriorityFeePerGas = s);
            } else
              e.maxFeePerGas == null && (e.maxFeePerGas = n.maxFeePerGas),
                e.maxPriorityFeePerGas == null && (e.maxPriorityFeePerGas = n.maxPriorityFeePerGas);
          else
            n.gasPrice != null
              ? (i &&
                  Er.throwError(
                    'network does not support EIP-1559',
                    z.errors.UNSUPPORTED_OPERATION,
                    { operation: 'populateTransaction' }
                  ),
                e.gasPrice == null && (e.gasPrice = n.gasPrice),
                (e.type = 0))
              : Er.throwError('failed to get consistent fee data', z.errors.UNSUPPORTED_OPERATION, {
                  operation: 'signer.getFeeData',
                });
        else
          e.type === 2 &&
            (e.maxFeePerGas == null && (e.maxFeePerGas = n.maxFeePerGas),
            e.maxPriorityFeePerGas == null && (e.maxPriorityFeePerGas = n.maxPriorityFeePerGas));
      }
      return (
        e.nonce == null && (e.nonce = this.getTransactionCount('pending')),
        e.gasLimit == null &&
          (e.gasLimit = this.estimateGas(e).catch((n) => {
            if (Sf.indexOf(n.code) >= 0) throw n;
            return Er.throwError(
              'cannot estimate gas; transaction may fail or may require manual gas limit',
              z.errors.UNPREDICTABLE_GAS_LIMIT,
              { error: n, tx: e }
            );
          })),
        e.chainId == null
          ? (e.chainId = this.getChainId())
          : (e.chainId = Promise.all([Promise.resolve(e.chainId), this.getChainId()]).then(
              (n) => (
                n[1] !== 0 &&
                  n[0] !== n[1] &&
                  Er.throwArgumentError('chainId address mismatch', 'transaction', t),
                n[0]
              )
            )),
        yield ze(e)
      );
    });
  }
  _checkProvider(t) {
    this.provider ||
      Er.throwError('missing provider', z.errors.UNSUPPORTED_OPERATION, {
        operation: t || '_checkProvider',
      });
  }
  static isSigner(t) {
    return !!(t && t._isSigner);
  }
}
class Ss extends on {
  constructor(t, e) {
    super(), $(this, 'address', t), $(this, 'provider', e || null);
  }
  getAddress() {
    return Promise.resolve(this.address);
  }
  _fail(t, e) {
    return Promise.resolve().then(() => {
      Er.throwError(t, z.errors.UNSUPPORTED_OPERATION, { operation: e });
    });
  }
  signMessage(t) {
    return this._fail('VoidSigner cannot sign messages', 'signMessage');
  }
  signTransaction(t) {
    return this._fail('VoidSigner cannot sign transactions', 'signTransaction');
  }
  _signTypedData(t, e, i) {
    return this._fail('VoidSigner cannot sign typed data', 'signTypedData');
  }
  connect(t) {
    return new Ss(this.address, t);
  }
}
const Pf = '0x0000000000000000000000000000000000000000',
  Nf = ut.from(-1),
  Fo = ut.from(0),
  kf = ut.from(1),
  If = ut.from('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
  Bf = '0x0000000000000000000000000000000000000000000000000000000000000000',
  Tf = 'strings/5.7.0',
  Ho = new z(Tf);
var Zi;
(function (r) {
  (r.current = ''), (r.NFC = 'NFC'), (r.NFD = 'NFD'), (r.NFKC = 'NFKC'), (r.NFKD = 'NFKD');
})(Zi || (Zi = {}));
var pr;
(function (r) {
  (r.UNEXPECTED_CONTINUE = 'unexpected continuation byte'),
    (r.BAD_PREFIX = 'bad codepoint prefix'),
    (r.OVERRUN = 'string overrun'),
    (r.MISSING_CONTINUE = 'missing continuation byte'),
    (r.OUT_OF_RANGE = 'out of UTF-8 range'),
    (r.UTF16_SURROGATE = 'UTF-16 surrogate'),
    (r.OVERLONG = 'overlong representation');
})(pr || (pr = {}));
function Rf(r, t, e, i, n) {
  return Ho.throwArgumentError(`invalid codepoint at offset ${t}; ${r}`, 'bytes', e);
}
function Go(r, t, e, i, n) {
  if (r === pr.BAD_PREFIX || r === pr.UNEXPECTED_CONTINUE) {
    let s = 0;
    for (let u = t + 1; u < e.length && e[u] >> 6 === 2; u++) s++;
    return s;
  }
  return r === pr.OVERRUN ? e.length - t - 1 : 0;
}
function Cf(r, t, e, i, n) {
  return r === pr.OVERLONG ? (i.push(n), 0) : (i.push(65533), Go(r, t, e));
}
const Lf = Object.freeze({ error: Rf, ignore: Go, replace: Cf });
function jo(r, t) {
  t == null && (t = Lf.error), (r = re(r));
  const e = [];
  let i = 0;
  for (; i < r.length; ) {
    const n = r[i++];
    if (!(n >> 7)) {
      e.push(n);
      continue;
    }
    let s = null,
      u = null;
    if ((n & 224) === 192) (s = 1), (u = 127);
    else if ((n & 240) === 224) (s = 2), (u = 2047);
    else if ((n & 248) === 240) (s = 3), (u = 65535);
    else {
      (n & 192) === 128
        ? (i += t(pr.UNEXPECTED_CONTINUE, i - 1, r, e))
        : (i += t(pr.BAD_PREFIX, i - 1, r, e));
      continue;
    }
    if (i - 1 + s >= r.length) {
      i += t(pr.OVERRUN, i - 1, r, e);
      continue;
    }
    let d = n & ((1 << (8 - s - 1)) - 1);
    for (let v = 0; v < s; v++) {
      let E = r[i];
      if ((E & 192) != 128) {
        (i += t(pr.MISSING_CONTINUE, i, r, e)), (d = null);
        break;
      }
      (d = (d << 6) | (E & 63)), i++;
    }
    if (d !== null) {
      if (d > 1114111) {
        i += t(pr.OUT_OF_RANGE, i - 1 - s, r, e, d);
        continue;
      }
      if (d >= 55296 && d <= 57343) {
        i += t(pr.UTF16_SURROGATE, i - 1 - s, r, e, d);
        continue;
      }
      if (d <= u) {
        i += t(pr.OVERLONG, i - 1 - s, r, e, d);
        continue;
      }
      e.push(d);
    }
  }
  return e;
}
function Wr(r, t = Zi.current) {
  t != Zi.current && (Ho.checkNormalize(), (r = r.normalize(t)));
  let e = [];
  for (let i = 0; i < r.length; i++) {
    const n = r.charCodeAt(i);
    if (n < 128) e.push(n);
    else if (n < 2048) e.push((n >> 6) | 192), e.push((n & 63) | 128);
    else if ((n & 64512) == 55296) {
      i++;
      const s = r.charCodeAt(i);
      if (i >= r.length || (s & 64512) !== 56320) throw new Error('invalid utf-8 string');
      const u = 65536 + ((n & 1023) << 10) + (s & 1023);
      e.push((u >> 18) | 240),
        e.push(((u >> 12) & 63) | 128),
        e.push(((u >> 6) & 63) | 128),
        e.push((u & 63) | 128);
    } else e.push((n >> 12) | 224), e.push(((n >> 6) & 63) | 128), e.push((n & 63) | 128);
  }
  return re(e);
}
function Of(r) {
  return r
    .map((t) =>
      t <= 65535
        ? String.fromCharCode(t)
        : ((t -= 65536), String.fromCharCode(((t >> 10) & 1023) + 55296, (t & 1023) + 56320))
    )
    .join('');
}
function an(r, t) {
  return Of(jo(r, t));
}
function Uf(r, t = Zi.current) {
  return jo(Wr(r, t));
}
function ki(r) {
  return He(Wr(r));
}
const Vo = 'hash/5.7.0';
function Jo(r) {
  r = atob(r);
  const t = [];
  for (let e = 0; e < r.length; e++) t.push(r.charCodeAt(e));
  return re(t);
}
function Yo(r) {
  r = re(r);
  let t = '';
  for (let e = 0; e < r.length; e++) t += String.fromCharCode(r[e]);
  return btoa(t);
}
function Zo(r, t) {
  t == null && (t = 1);
  const e = [],
    i = e.forEach,
    n = function (s, u) {
      i.call(s, function (d) {
        u > 0 && Array.isArray(d) ? n(d, u - 1) : e.push(d);
      });
    };
  return n(r, t), e;
}
function Df(r) {
  const t = {};
  for (let e = 0; e < r.length; e++) {
    const i = r[e];
    t[i[0]] = i[1];
  }
  return t;
}
function zf(r) {
  let t = 0;
  function e() {
    return (r[t++] << 8) | r[t++];
  }
  let i = e(),
    n = 1,
    s = [0, 1];
  for (let tt = 1; tt < i; tt++) s.push((n += e()));
  let u = e(),
    d = t;
  t += u;
  let v = 0,
    E = 0;
  function S() {
    return v == 0 && ((E = (E << 8) | r[t++]), (v = 8)), (E >> --v) & 1;
  }
  const P = 31,
    I = Math.pow(2, P),
    R = I >>> 1,
    C = R >> 1,
    j = I - 1;
  let ct = 0;
  for (let tt = 0; tt < P; tt++) ct = (ct << 1) | S();
  let W = [],
    B = 0,
    Z = I;
  for (;;) {
    let tt = Math.floor(((ct - B + 1) * n - 1) / Z),
      xt = 0,
      se = i;
    for (; se - xt > 1; ) {
      let be = (xt + se) >>> 1;
      tt < s[be] ? (se = be) : (xt = be);
    }
    if (xt == 0) break;
    W.push(xt);
    let de = B + Math.floor((Z * s[xt]) / n),
      at = B + Math.floor((Z * s[xt + 1]) / n) - 1;
    for (; !((de ^ at) & R); )
      (ct = ((ct << 1) & j) | S()), (de = (de << 1) & j), (at = ((at << 1) & j) | 1);
    for (; de & ~at & C; )
      (ct = (ct & R) | ((ct << 1) & (j >>> 1)) | S()),
        (de = (de << 1) ^ R),
        (at = ((at ^ R) << 1) | R | 1);
    (B = de), (Z = 1 + at - de);
  }
  let Y = i - 4;
  return W.map((tt) => {
    switch (tt - Y) {
      case 3:
        return Y + 65792 + ((r[d++] << 16) | (r[d++] << 8) | r[d++]);
      case 2:
        return Y + 256 + ((r[d++] << 8) | r[d++]);
      case 1:
        return Y + r[d++];
      default:
        return tt - 1;
    }
  });
}
function Kf(r) {
  let t = 0;
  return () => r[t++];
}
function qf(r) {
  return Kf(zf(r));
}
function Ff(r) {
  return r & 1 ? ~r >> 1 : r >> 1;
}
function Hf(r, t) {
  let e = Array(r);
  for (let i = 0; i < r; i++) e[i] = 1 + t();
  return e;
}
function Zs(r, t) {
  let e = Array(r);
  for (let i = 0, n = -1; i < r; i++) e[i] = n += 1 + t();
  return e;
}
function Gf(r, t) {
  let e = Array(r);
  for (let i = 0, n = 0; i < r; i++) e[i] = n += Ff(t());
  return e;
}
function Pn(r, t) {
  let e = Zs(r(), r),
    i = r(),
    n = Zs(i, r),
    s = Hf(i, r);
  for (let u = 0; u < i; u++) for (let d = 0; d < s[u]; d++) e.push(n[u] + d);
  return t ? e.map((u) => t[u]) : e;
}
function jf(r) {
  let t = [];
  for (;;) {
    let e = r();
    if (e == 0) break;
    t.push(Jf(e, r));
  }
  for (;;) {
    let e = r() - 1;
    if (e < 0) break;
    t.push(Yf(e, r));
  }
  return Df(Zo(t));
}
function Vf(r) {
  let t = [];
  for (;;) {
    let e = r();
    if (e == 0) break;
    t.push(e);
  }
  return t;
}
function Qo(r, t, e) {
  let i = Array(r)
    .fill(void 0)
    .map(() => []);
  for (let n = 0; n < t; n++) Gf(r, e).forEach((s, u) => i[u].push(s));
  return i;
}
function Jf(r, t) {
  let e = 1 + t(),
    i = t(),
    n = Vf(t),
    s = Qo(n.length, 1 + r, t);
  return Zo(
    s.map((u, d) => {
      const v = u[0],
        E = u.slice(1);
      return Array(n[d])
        .fill(void 0)
        .map((S, P) => {
          let I = P * i;
          return [v + P * e, E.map((R) => R + I)];
        });
    })
  );
}
function Yf(r, t) {
  let e = 1 + t();
  return Qo(e, 1 + r, t).map((n) => [n[0], n.slice(1)]);
}
function Zf(r) {
  let t = Pn(r).sort((i, n) => i - n);
  return e();
  function e() {
    let i = [];
    for (;;) {
      let E = Pn(r, t);
      if (E.length == 0) break;
      i.push({ set: new Set(E), node: e() });
    }
    i.sort((E, S) => S.set.size - E.set.size);
    let n = r(),
      s = n % 3;
    n = (n / 3) | 0;
    let u = !!(n & 1);
    n >>= 1;
    let d = n == 1,
      v = n == 2;
    return { branches: i, valid: s, fe0f: u, save: d, check: v };
  }
}
function Qf() {
  return qf(
    Jo(
      'AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=='
    )
  );
}
const Un = Qf(),
  Wf = new Set(Pn(Un)),
  Xf = new Set(Pn(Un)),
  $f = jf(Un),
  tu = Zf(Un),
  Qs = 45,
  Ws = 95;
function Wo(r) {
  return Uf(r);
}
function eu(r) {
  return r.filter((t) => t != 65039);
}
function Xo(r) {
  for (let t of r.split('.')) {
    let e = Wo(t);
    try {
      for (let i = e.lastIndexOf(Ws) - 1; i >= 0; i--)
        if (e[i] !== Ws) throw new Error('underscore only allowed at start');
      if (e.length >= 4 && e.every((i) => i < 128) && e[2] === Qs && e[3] === Qs)
        throw new Error('invalid label extension');
    } catch (i) {
      throw new Error(`Invalid label "${t}": ${i.message}`);
    }
  }
  return r;
}
function ru(r) {
  return Xo(iu(r, eu));
}
function iu(r, t) {
  let e = Wo(r).reverse(),
    i = [];
  for (; e.length; ) {
    let n = su(e);
    if (n) {
      i.push(...t(n));
      continue;
    }
    let s = e.pop();
    if (Wf.has(s)) {
      i.push(s);
      continue;
    }
    if (Xf.has(s)) continue;
    let u = $f[s];
    if (u) {
      i.push(...u);
      continue;
    }
    throw new Error(`Disallowed codepoint: 0x${s.toString(16).toUpperCase()}`);
  }
  return Xo(nu(String.fromCodePoint(...i)));
}
function nu(r) {
  return r.normalize('NFC');
}
function su(r, t) {
  var e;
  let i = tu,
    n,
    s,
    u = [],
    d = r.length;
  for (t && (t.length = 0); d; ) {
    let v = r[--d];
    if (
      ((i = (e = i.branches.find((E) => E.set.has(v))) === null || e === void 0 ? void 0 : e.node),
      !i)
    )
      break;
    if (i.save) s = v;
    else if (i.check && v === s) break;
    u.push(v),
      i.fe0f && (u.push(65039), d > 0 && r[d - 1] == 65039 && d--),
      i.valid &&
        ((n = u.slice()),
        i.valid == 2 && n.splice(1, 1),
        t && t.push(...r.slice(d).reverse()),
        (r.length = d));
  }
  return n;
}
const ou = new z(Vo),
  $o = new Uint8Array(32);
$o.fill(0);
function Xs(r) {
  if (r.length === 0) throw new Error('invalid ENS name; empty component');
  return r;
}
function ta(r) {
  const t = Wr(ru(r)),
    e = [];
  if (r.length === 0) return e;
  let i = 0;
  for (let n = 0; n < t.length; n++) t[n] === 46 && (e.push(Xs(t.slice(i, n))), (i = n + 1));
  if (i >= t.length) throw new Error('invalid ENS name; empty component');
  return e.push(Xs(t.slice(i))), e;
}
function wn(r) {
  typeof r != 'string' && ou.throwArgumentError('invalid ENS name; not a string', 'name', r);
  let t = $o;
  const e = ta(r);
  for (; e.length; ) t = He(vr([t, He(e.pop())]));
  return $t(t);
}
function au(r) {
  return (
    $t(
      vr(
        ta(r).map((t) => {
          if (t.length > 63) throw new Error('invalid DNS encoded entry; length exceeds 63 bytes');
          const e = new Uint8Array(t.length + 1);
          return e.set(t, 1), (e[0] = e.length - 1), e;
        })
      )
    ) + '00'
  );
}
var fu = function (r, t, e, i) {
  function n(s) {
    return s instanceof e
      ? s
      : new e(function (u) {
          u(s);
        });
  }
  return new (e || (e = Promise))(function (s, u) {
    function d(S) {
      try {
        E(i.next(S));
      } catch (P) {
        u(P);
      }
    }
    function v(S) {
      try {
        E(i.throw(S));
      } catch (P) {
        u(P);
      }
    }
    function E(S) {
      S.done ? s(S.value) : n(S.value).then(d, v);
    }
    E((i = i.apply(r, t || [])).next());
  });
};
const Ie = new z(Vo),
  ea = new Uint8Array(32);
ea.fill(0);
const uu = ut.from(-1),
  ra = ut.from(0),
  ia = ut.from(1),
  hu = ut.from('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
function lu(r) {
  const t = re(r),
    e = t.length % 32;
  return e ? ur([t, ea.slice(e)]) : $t(t);
}
const cu = je(ia.toHexString(), 32),
  du = je(ra.toHexString(), 32),
  $s = {
    name: 'string',
    version: 'string',
    chainId: 'uint256',
    verifyingContract: 'address',
    salt: 'bytes32',
  },
  Xn = ['name', 'version', 'chainId', 'verifyingContract', 'salt'];
function to(r) {
  return function (t) {
    return (
      typeof t != 'string' &&
        Ie.throwArgumentError(`invalid domain value for ${JSON.stringify(r)}`, `domain.${r}`, t),
      t
    );
  };
}
const gu = {
  name: to('name'),
  version: to('version'),
  chainId: function (r) {
    try {
      return ut.from(r).toString();
    } catch {}
    return Ie.throwArgumentError('invalid domain value for "chainId"', 'domain.chainId', r);
  },
  verifyingContract: function (r) {
    try {
      return Je(r).toLowerCase();
    } catch {}
    return Ie.throwArgumentError(
      'invalid domain value "verifyingContract"',
      'domain.verifyingContract',
      r
    );
  },
  salt: function (r) {
    try {
      const t = re(r);
      if (t.length !== 32) throw new Error('bad length');
      return $t(t);
    } catch {}
    return Ie.throwArgumentError('invalid domain value "salt"', 'domain.salt', r);
  },
};
function $n(r) {
  {
    const t = r.match(/^(u?)int(\d*)$/);
    if (t) {
      const e = t[1] === '',
        i = parseInt(t[2] || '256');
      (i % 8 !== 0 || i > 256 || (t[2] && t[2] !== String(i))) &&
        Ie.throwArgumentError('invalid numeric width', 'type', r);
      const n = hu.mask(e ? i - 1 : i),
        s = e ? n.add(ia).mul(uu) : ra;
      return function (u) {
        const d = ut.from(u);
        return (
          (d.lt(s) || d.gt(n)) && Ie.throwArgumentError(`value out-of-bounds for ${r}`, 'value', u),
          je(d.toTwos(256).toHexString(), 32)
        );
      };
    }
  }
  {
    const t = r.match(/^bytes(\d+)$/);
    if (t) {
      const e = parseInt(t[1]);
      return (
        (e === 0 || e > 32 || t[1] !== String(e)) &&
          Ie.throwArgumentError('invalid bytes width', 'type', r),
        function (i) {
          return (
            re(i).length !== e && Ie.throwArgumentError(`invalid length for ${r}`, 'value', i),
            lu(i)
          );
        }
      );
    }
  }
  switch (r) {
    case 'address':
      return function (t) {
        return je(Je(t), 32);
      };
    case 'bool':
      return function (t) {
        return t ? cu : du;
      };
    case 'bytes':
      return function (t) {
        return He(t);
      };
    case 'string':
      return function (t) {
        return ki(t);
      };
  }
  return null;
}
function eo(r, t) {
  return `${r}(${t.map(({ name: e, type: i }) => i + ' ' + e).join(',')})`;
}
class gr {
  constructor(t) {
    $(this, 'types', Object.freeze(oi(t))), $(this, '_encoderCache', {}), $(this, '_types', {});
    const e = {},
      i = {},
      n = {};
    Object.keys(t).forEach((d) => {
      (e[d] = {}), (i[d] = []), (n[d] = {});
    });
    for (const d in t) {
      const v = {};
      t[d].forEach((E) => {
        v[E.name] &&
          Ie.throwArgumentError(
            `duplicate variable name ${JSON.stringify(E.name)} in ${JSON.stringify(d)}`,
            'types',
            t
          ),
          (v[E.name] = !0);
        const S = E.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
        S === d &&
          Ie.throwArgumentError(`circular type reference to ${JSON.stringify(S)}`, 'types', t),
          !$n(S) &&
            (i[S] || Ie.throwArgumentError(`unknown type ${JSON.stringify(S)}`, 'types', t),
            i[S].push(d),
            (e[d][S] = !0));
      });
    }
    const s = Object.keys(i).filter((d) => i[d].length === 0);
    s.length === 0
      ? Ie.throwArgumentError('missing primary type', 'types', t)
      : s.length > 1 &&
        Ie.throwArgumentError(
          `ambiguous primary types or unused types: ${s.map((d) => JSON.stringify(d)).join(', ')}`,
          'types',
          t
        ),
      $(this, 'primaryType', s[0]);
    function u(d, v) {
      v[d] && Ie.throwArgumentError(`circular type reference to ${JSON.stringify(d)}`, 'types', t),
        (v[d] = !0),
        Object.keys(e[d]).forEach((E) => {
          i[E] &&
            (u(E, v),
            Object.keys(v).forEach((S) => {
              n[S][E] = !0;
            }));
        }),
        delete v[d];
    }
    u(this.primaryType, {});
    for (const d in n) {
      const v = Object.keys(n[d]);
      v.sort(), (this._types[d] = eo(d, t[d]) + v.map((E) => eo(E, t[E])).join(''));
    }
  }
  getEncoder(t) {
    let e = this._encoderCache[t];
    return e || (e = this._encoderCache[t] = this._getEncoder(t)), e;
  }
  _getEncoder(t) {
    {
      const n = $n(t);
      if (n) return n;
    }
    const e = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
    if (e) {
      const n = e[1],
        s = this.getEncoder(n),
        u = parseInt(e[3]);
      return (d) => {
        u >= 0 &&
          d.length !== u &&
          Ie.throwArgumentError(
            'array length mismatch; expected length ${ arrayLength }',
            'value',
            d
          );
        let v = d.map(s);
        return this._types[n] && (v = v.map(He)), He(ur(v));
      };
    }
    const i = this.types[t];
    if (i) {
      const n = ki(this._types[t]);
      return (s) => {
        const u = i.map(({ name: d, type: v }) => {
          const E = this.getEncoder(v)(s[d]);
          return this._types[v] ? He(E) : E;
        });
        return u.unshift(n), ur(u);
      };
    }
    return Ie.throwArgumentError(`unknown type: ${t}`, 'type', t);
  }
  encodeType(t) {
    const e = this._types[t];
    return e || Ie.throwArgumentError(`unknown type: ${JSON.stringify(t)}`, 'name', t), e;
  }
  encodeData(t, e) {
    return this.getEncoder(t)(e);
  }
  hashStruct(t, e) {
    return He(this.encodeData(t, e));
  }
  encode(t) {
    return this.encodeData(this.primaryType, t);
  }
  hash(t) {
    return this.hashStruct(this.primaryType, t);
  }
  _visit(t, e, i) {
    if ($n(t)) return i(t, e);
    const n = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
    if (n) {
      const u = n[1],
        d = parseInt(n[3]);
      return (
        d >= 0 &&
          e.length !== d &&
          Ie.throwArgumentError(
            'array length mismatch; expected length ${ arrayLength }',
            'value',
            e
          ),
        e.map((v) => this._visit(u, v, i))
      );
    }
    const s = this.types[t];
    return s
      ? s.reduce((u, { name: d, type: v }) => ((u[d] = this._visit(v, e[d], i)), u), {})
      : Ie.throwArgumentError(`unknown type: ${t}`, 'type', t);
  }
  visit(t, e) {
    return this._visit(this.primaryType, t, e);
  }
  static from(t) {
    return new gr(t);
  }
  static getPrimaryType(t) {
    return gr.from(t).primaryType;
  }
  static hashStruct(t, e, i) {
    return gr.from(e).hashStruct(t, i);
  }
  static hashDomain(t) {
    const e = [];
    for (const i in t) {
      const n = $s[i];
      n ||
        Ie.throwArgumentError(`invalid typed-data domain key: ${JSON.stringify(i)}`, 'domain', t),
        e.push({ name: i, type: n });
    }
    return (
      e.sort((i, n) => Xn.indexOf(i.name) - Xn.indexOf(n.name)),
      gr.hashStruct('EIP712Domain', { EIP712Domain: e }, t)
    );
  }
  static encode(t, e, i) {
    return ur(['0x1901', gr.hashDomain(t), gr.from(e).hash(i)]);
  }
  static hash(t, e, i) {
    return He(gr.encode(t, e, i));
  }
  static resolveNames(t, e, i, n) {
    return fu(this, void 0, void 0, function* () {
      t = Ge(t);
      const s = {};
      t.verifyingContract && !De(t.verifyingContract, 20) && (s[t.verifyingContract] = '0x');
      const u = gr.from(e);
      u.visit(i, (d, v) => (d === 'address' && !De(v, 20) && (s[v] = '0x'), v));
      for (const d in s) s[d] = yield n(d);
      return (
        t.verifyingContract &&
          s[t.verifyingContract] &&
          (t.verifyingContract = s[t.verifyingContract]),
        (i = u.visit(i, (d, v) => (d === 'address' && s[v] ? s[v] : v))),
        { domain: t, value: i }
      );
    });
  }
  static getPayload(t, e, i) {
    gr.hashDomain(t);
    const n = {},
      s = [];
    Xn.forEach((v) => {
      const E = t[v];
      E != null && ((n[v] = gu[v](E)), s.push({ name: v, type: $s[v] }));
    });
    const u = gr.from(e),
      d = Ge(e);
    return (
      d.EIP712Domain
        ? Ie.throwArgumentError('types must not contain EIP712Domain type', 'types.EIP712Domain', e)
        : (d.EIP712Domain = s),
      u.encode(i),
      {
        types: d,
        domain: n,
        primaryType: u.primaryType,
        message: u.visit(i, (v, E) => {
          if (v.match(/^bytes(\d*)/)) return $t(re(E));
          if (v.match(/^u?int/)) return ut.from(E).toString();
          switch (v) {
            case 'address':
              return E.toLowerCase();
            case 'bool':
              return !!E;
            case 'string':
              return typeof E != 'string' && Ie.throwArgumentError('invalid string', 'value', E), E;
          }
          return Ie.throwArgumentError('unsupported type', 'type', v);
        }),
      }
    );
  }
}
class na {
  constructor(t) {
    $(this, 'alphabet', t),
      $(this, 'base', t.length),
      $(this, '_alphabetMap', {}),
      $(this, '_leader', t.charAt(0));
    for (let e = 0; e < t.length; e++) this._alphabetMap[t.charAt(e)] = e;
  }
  encode(t) {
    let e = re(t);
    if (e.length === 0) return '';
    let i = [0];
    for (let s = 0; s < e.length; ++s) {
      let u = e[s];
      for (let d = 0; d < i.length; ++d)
        (u += i[d] << 8), (i[d] = u % this.base), (u = (u / this.base) | 0);
      for (; u > 0; ) i.push(u % this.base), (u = (u / this.base) | 0);
    }
    let n = '';
    for (let s = 0; e[s] === 0 && s < e.length - 1; ++s) n += this._leader;
    for (let s = i.length - 1; s >= 0; --s) n += this.alphabet[i[s]];
    return n;
  }
  decode(t) {
    if (typeof t != 'string') throw new TypeError('Expected String');
    let e = [];
    if (t.length === 0) return new Uint8Array(e);
    e.push(0);
    for (let i = 0; i < t.length; i++) {
      let n = this._alphabetMap[t[i]];
      if (n === void 0) throw new Error('Non-base' + this.base + ' character');
      let s = n;
      for (let u = 0; u < e.length; ++u) (s += e[u] * this.base), (e[u] = s & 255), (s >>= 8);
      for (; s > 0; ) e.push(s & 255), (s >>= 8);
    }
    for (let i = 0; t[i] === this._leader && i < t.length - 1; ++i) e.push(0);
    return re(new Uint8Array(e.reverse()));
  }
}
new na('abcdefghijklmnopqrstuvwxyz234567');
const fs = new na('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');
function Li(r, t, e) {
  return (
    (e = {
      path: t,
      exports: {},
      require: function (i, n) {
        return pu(i, n ?? e.path);
      },
    }),
    r(e, e.exports),
    e.exports
  );
}
function pu() {
  throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}
var Ps = sa;
function sa(r, t) {
  if (!r) throw new Error(t || 'Assertion failed');
}
sa.equal = function (t, e, i) {
  if (t != e) throw new Error(i || 'Assertion failed: ' + t + ' != ' + e);
};
var Dr = Li(function (r, t) {
    var e = t;
    function i(u, d) {
      if (Array.isArray(u)) return u.slice();
      if (!u) return [];
      var v = [];
      if (typeof u != 'string') {
        for (var E = 0; E < u.length; E++) v[E] = u[E] | 0;
        return v;
      }
      if (d === 'hex') {
        (u = u.replace(/[^a-z0-9]+/gi, '')), u.length % 2 !== 0 && (u = '0' + u);
        for (var E = 0; E < u.length; E += 2) v.push(parseInt(u[E] + u[E + 1], 16));
      } else
        for (var E = 0; E < u.length; E++) {
          var S = u.charCodeAt(E),
            P = S >> 8,
            I = S & 255;
          P ? v.push(P, I) : v.push(I);
        }
      return v;
    }
    e.toArray = i;
    function n(u) {
      return u.length === 1 ? '0' + u : u;
    }
    e.zero2 = n;
    function s(u) {
      for (var d = '', v = 0; v < u.length; v++) d += n(u[v].toString(16));
      return d;
    }
    (e.toHex = s),
      (e.encode = function (d, v) {
        return v === 'hex' ? s(d) : d;
      });
  }),
  yr = Li(function (r, t) {
    var e = t;
    (e.assert = Ps),
      (e.toArray = Dr.toArray),
      (e.zero2 = Dr.zero2),
      (e.toHex = Dr.toHex),
      (e.encode = Dr.encode);
    function i(v, E, S) {
      var P = new Array(Math.max(v.bitLength(), S) + 1);
      P.fill(0);
      for (var I = 1 << (E + 1), R = v.clone(), C = 0; C < P.length; C++) {
        var j,
          ct = R.andln(I - 1);
        R.isOdd() ? (ct > (I >> 1) - 1 ? (j = (I >> 1) - ct) : (j = ct), R.isubn(j)) : (j = 0),
          (P[C] = j),
          R.iushrn(1);
      }
      return P;
    }
    e.getNAF = i;
    function n(v, E) {
      var S = [[], []];
      (v = v.clone()), (E = E.clone());
      for (var P = 0, I = 0, R; v.cmpn(-P) > 0 || E.cmpn(-I) > 0; ) {
        var C = (v.andln(3) + P) & 3,
          j = (E.andln(3) + I) & 3;
        C === 3 && (C = -1), j === 3 && (j = -1);
        var ct;
        C & 1
          ? ((R = (v.andln(7) + P) & 7), (R === 3 || R === 5) && j === 2 ? (ct = -C) : (ct = C))
          : (ct = 0),
          S[0].push(ct);
        var W;
        j & 1
          ? ((R = (E.andln(7) + I) & 7), (R === 3 || R === 5) && C === 2 ? (W = -j) : (W = j))
          : (W = 0),
          S[1].push(W),
          2 * P === ct + 1 && (P = 1 - P),
          2 * I === W + 1 && (I = 1 - I),
          v.iushrn(1),
          E.iushrn(1);
      }
      return S;
    }
    e.getJSF = n;
    function s(v, E, S) {
      var P = '_' + E;
      v.prototype[E] = function () {
        return this[P] !== void 0 ? this[P] : (this[P] = S.call(this));
      };
    }
    e.cachedProperty = s;
    function u(v) {
      return typeof v == 'string' ? e.toArray(v, 'hex') : v;
    }
    e.parseBytes = u;
    function d(v) {
      return new oe(v, 'hex', 'le');
    }
    e.intFromLE = d;
  }),
  Nn = yr.getNAF,
  mu = yr.getJSF,
  kn = yr.assert;
function gi(r, t) {
  (this.type = r),
    (this.p = new oe(t.p, 16)),
    (this.red = t.prime ? oe.red(t.prime) : oe.mont(this.p)),
    (this.zero = new oe(0).toRed(this.red)),
    (this.one = new oe(1).toRed(this.red)),
    (this.two = new oe(2).toRed(this.red)),
    (this.n = t.n && new oe(t.n, 16)),
    (this.g = t.g && this.pointFromJSON(t.g, t.gRed)),
    (this._wnafT1 = new Array(4)),
    (this._wnafT2 = new Array(4)),
    (this._wnafT3 = new Array(4)),
    (this._wnafT4 = new Array(4)),
    (this._bitLength = this.n ? this.n.bitLength() : 0);
  var e = this.n && this.p.div(this.n);
  !e || e.cmpn(100) > 0
    ? (this.redN = null)
    : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
}
var Mi = gi;
gi.prototype.point = function () {
  throw new Error('Not implemented');
};
gi.prototype.validate = function () {
  throw new Error('Not implemented');
};
gi.prototype._fixedNafMul = function (t, e) {
  kn(t.precomputed);
  var i = t._getDoubles(),
    n = Nn(e, 1, this._bitLength),
    s = (1 << (i.step + 1)) - (i.step % 2 === 0 ? 2 : 1);
  s /= 3;
  var u = [],
    d,
    v;
  for (d = 0; d < n.length; d += i.step) {
    v = 0;
    for (var E = d + i.step - 1; E >= d; E--) v = (v << 1) + n[E];
    u.push(v);
  }
  for (
    var S = this.jpoint(null, null, null), P = this.jpoint(null, null, null), I = s;
    I > 0;
    I--
  ) {
    for (d = 0; d < u.length; d++)
      (v = u[d]),
        v === I ? (P = P.mixedAdd(i.points[d])) : v === -I && (P = P.mixedAdd(i.points[d].neg()));
    S = S.add(P);
  }
  return S.toP();
};
gi.prototype._wnafMul = function (t, e) {
  var i = 4,
    n = t._getNAFPoints(i);
  i = n.wnd;
  for (
    var s = n.points,
      u = Nn(e, i, this._bitLength),
      d = this.jpoint(null, null, null),
      v = u.length - 1;
    v >= 0;
    v--
  ) {
    for (var E = 0; v >= 0 && u[v] === 0; v--) E++;
    if ((v >= 0 && E++, (d = d.dblp(E)), v < 0)) break;
    var S = u[v];
    kn(S !== 0),
      t.type === 'affine'
        ? S > 0
          ? (d = d.mixedAdd(s[(S - 1) >> 1]))
          : (d = d.mixedAdd(s[(-S - 1) >> 1].neg()))
        : S > 0
          ? (d = d.add(s[(S - 1) >> 1]))
          : (d = d.add(s[(-S - 1) >> 1].neg()));
  }
  return t.type === 'affine' ? d.toP() : d;
};
gi.prototype._wnafMulAdd = function (t, e, i, n, s) {
  var u = this._wnafT1,
    d = this._wnafT2,
    v = this._wnafT3,
    E = 0,
    S,
    P,
    I;
  for (S = 0; S < n; S++) {
    I = e[S];
    var R = I._getNAFPoints(t);
    (u[S] = R.wnd), (d[S] = R.points);
  }
  for (S = n - 1; S >= 1; S -= 2) {
    var C = S - 1,
      j = S;
    if (u[C] !== 1 || u[j] !== 1) {
      (v[C] = Nn(i[C], u[C], this._bitLength)),
        (v[j] = Nn(i[j], u[j], this._bitLength)),
        (E = Math.max(v[C].length, E)),
        (E = Math.max(v[j].length, E));
      continue;
    }
    var ct = [e[C], null, null, e[j]];
    e[C].y.cmp(e[j].y) === 0
      ? ((ct[1] = e[C].add(e[j])), (ct[2] = e[C].toJ().mixedAdd(e[j].neg())))
      : e[C].y.cmp(e[j].y.redNeg()) === 0
        ? ((ct[1] = e[C].toJ().mixedAdd(e[j])), (ct[2] = e[C].add(e[j].neg())))
        : ((ct[1] = e[C].toJ().mixedAdd(e[j])), (ct[2] = e[C].toJ().mixedAdd(e[j].neg())));
    var W = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
      B = mu(i[C], i[j]);
    for (
      E = Math.max(B[0].length, E), v[C] = new Array(E), v[j] = new Array(E), P = 0;
      P < E;
      P++
    ) {
      var Z = B[0][P] | 0,
        Y = B[1][P] | 0;
      (v[C][P] = W[(Z + 1) * 3 + (Y + 1)]), (v[j][P] = 0), (d[C] = ct);
    }
  }
  var tt = this.jpoint(null, null, null),
    xt = this._wnafT4;
  for (S = E; S >= 0; S--) {
    for (var se = 0; S >= 0; ) {
      var de = !0;
      for (P = 0; P < n; P++) (xt[P] = v[P][S] | 0), xt[P] !== 0 && (de = !1);
      if (!de) break;
      se++, S--;
    }
    if ((S >= 0 && se++, (tt = tt.dblp(se)), S < 0)) break;
    for (P = 0; P < n; P++) {
      var at = xt[P];
      at !== 0 &&
        (at > 0 ? (I = d[P][(at - 1) >> 1]) : at < 0 && (I = d[P][(-at - 1) >> 1].neg()),
        I.type === 'affine' ? (tt = tt.mixedAdd(I)) : (tt = tt.add(I)));
    }
  }
  for (S = 0; S < n; S++) d[S] = null;
  return s ? tt : tt.toP();
};
function Nr(r, t) {
  (this.curve = r), (this.type = t), (this.precomputed = null);
}
gi.BasePoint = Nr;
Nr.prototype.eq = function () {
  throw new Error('Not implemented');
};
Nr.prototype.validate = function () {
  return this.curve.validate(this);
};
gi.prototype.decodePoint = function (t, e) {
  t = yr.toArray(t, e);
  var i = this.p.byteLength();
  if ((t[0] === 4 || t[0] === 6 || t[0] === 7) && t.length - 1 === 2 * i) {
    t[0] === 6 ? kn(t[t.length - 1] % 2 === 0) : t[0] === 7 && kn(t[t.length - 1] % 2 === 1);
    var n = this.point(t.slice(1, 1 + i), t.slice(1 + i, 1 + 2 * i));
    return n;
  } else if ((t[0] === 2 || t[0] === 3) && t.length - 1 === i)
    return this.pointFromX(t.slice(1, 1 + i), t[0] === 3);
  throw new Error('Unknown point format');
};
Nr.prototype.encodeCompressed = function (t) {
  return this.encode(t, !0);
};
Nr.prototype._encode = function (t) {
  var e = this.curve.p.byteLength(),
    i = this.getX().toArray('be', e);
  return t ? [this.getY().isEven() ? 2 : 3].concat(i) : [4].concat(i, this.getY().toArray('be', e));
};
Nr.prototype.encode = function (t, e) {
  return yr.encode(this._encode(e), t);
};
Nr.prototype.precompute = function (t) {
  if (this.precomputed) return this;
  var e = { doubles: null, naf: null, beta: null };
  return (
    (e.naf = this._getNAFPoints(8)),
    (e.doubles = this._getDoubles(4, t)),
    (e.beta = this._getBeta()),
    (this.precomputed = e),
    this
  );
};
Nr.prototype._hasDoubles = function (t) {
  if (!this.precomputed) return !1;
  var e = this.precomputed.doubles;
  return e ? e.points.length >= Math.ceil((t.bitLength() + 1) / e.step) : !1;
};
Nr.prototype._getDoubles = function (t, e) {
  if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
  for (var i = [this], n = this, s = 0; s < e; s += t) {
    for (var u = 0; u < t; u++) n = n.dbl();
    i.push(n);
  }
  return { step: t, points: i };
};
Nr.prototype._getNAFPoints = function (t) {
  if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
  for (var e = [this], i = (1 << t) - 1, n = i === 1 ? null : this.dbl(), s = 1; s < i; s++)
    e[s] = e[s - 1].add(n);
  return { wnd: t, points: e };
};
Nr.prototype._getBeta = function () {
  return null;
};
Nr.prototype.dblp = function (t) {
  for (var e = this, i = 0; i < t; i++) e = e.dbl();
  return e;
};
var Ns = Li(function (r) {
    typeof Object.create == 'function'
      ? (r.exports = function (e, i) {
          i &&
            ((e.super_ = i),
            (e.prototype = Object.create(i.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })));
        })
      : (r.exports = function (e, i) {
          if (i) {
            e.super_ = i;
            var n = function () {};
            (n.prototype = i.prototype), (e.prototype = new n()), (e.prototype.constructor = e);
          }
        });
  }),
  vu = yr.assert;
function kr(r) {
  Mi.call(this, 'short', r),
    (this.a = new oe(r.a, 16).toRed(this.red)),
    (this.b = new oe(r.b, 16).toRed(this.red)),
    (this.tinv = this.two.redInvm()),
    (this.zeroA = this.a.fromRed().cmpn(0) === 0),
    (this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0),
    (this.endo = this._getEndomorphism(r)),
    (this._endoWnafT1 = new Array(4)),
    (this._endoWnafT2 = new Array(4));
}
Ns(kr, Mi);
var yu = kr;
kr.prototype._getEndomorphism = function (t) {
  if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) {
    var e, i;
    if (t.beta) e = new oe(t.beta, 16).toRed(this.red);
    else {
      var n = this._getEndoRoots(this.p);
      (e = n[0].cmp(n[1]) < 0 ? n[0] : n[1]), (e = e.toRed(this.red));
    }
    if (t.lambda) i = new oe(t.lambda, 16);
    else {
      var s = this._getEndoRoots(this.n);
      this.g.mul(s[0]).x.cmp(this.g.x.redMul(e)) === 0
        ? (i = s[0])
        : ((i = s[1]), vu(this.g.mul(i).x.cmp(this.g.x.redMul(e)) === 0));
    }
    var u;
    return (
      t.basis
        ? (u = t.basis.map(function (d) {
            return { a: new oe(d.a, 16), b: new oe(d.b, 16) };
          }))
        : (u = this._getEndoBasis(i)),
      { beta: e, lambda: i, basis: u }
    );
  }
};
kr.prototype._getEndoRoots = function (t) {
  var e = t === this.p ? this.red : oe.mont(t),
    i = new oe(2).toRed(e).redInvm(),
    n = i.redNeg(),
    s = new oe(3).toRed(e).redNeg().redSqrt().redMul(i),
    u = n.redAdd(s).fromRed(),
    d = n.redSub(s).fromRed();
  return [u, d];
};
kr.prototype._getEndoBasis = function (t) {
  for (
    var e = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
      i = t,
      n = this.n.clone(),
      s = new oe(1),
      u = new oe(0),
      d = new oe(0),
      v = new oe(1),
      E,
      S,
      P,
      I,
      R,
      C,
      j,
      ct = 0,
      W,
      B;
    i.cmpn(0) !== 0;

  ) {
    var Z = n.div(i);
    (W = n.sub(Z.mul(i))), (B = d.sub(Z.mul(s)));
    var Y = v.sub(Z.mul(u));
    if (!P && W.cmp(e) < 0) (E = j.neg()), (S = s), (P = W.neg()), (I = B);
    else if (P && ++ct === 2) break;
    (j = W), (n = i), (i = W), (d = s), (s = B), (v = u), (u = Y);
  }
  (R = W.neg()), (C = B);
  var tt = P.sqr().add(I.sqr()),
    xt = R.sqr().add(C.sqr());
  return (
    xt.cmp(tt) >= 0 && ((R = E), (C = S)),
    P.negative && ((P = P.neg()), (I = I.neg())),
    R.negative && ((R = R.neg()), (C = C.neg())),
    [
      { a: P, b: I },
      { a: R, b: C },
    ]
  );
};
kr.prototype._endoSplit = function (t) {
  var e = this.endo.basis,
    i = e[0],
    n = e[1],
    s = n.b.mul(t).divRound(this.n),
    u = i.b.neg().mul(t).divRound(this.n),
    d = s.mul(i.a),
    v = u.mul(n.a),
    E = s.mul(i.b),
    S = u.mul(n.b),
    P = t.sub(d).sub(v),
    I = E.add(S).neg();
  return { k1: P, k2: I };
};
kr.prototype.pointFromX = function (t, e) {
  (t = new oe(t, 16)), t.red || (t = t.toRed(this.red));
  var i = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),
    n = i.redSqrt();
  if (n.redSqr().redSub(i).cmp(this.zero) !== 0) throw new Error('invalid point');
  var s = n.fromRed().isOdd();
  return ((e && !s) || (!e && s)) && (n = n.redNeg()), this.point(t, n);
};
kr.prototype.validate = function (t) {
  if (t.inf) return !0;
  var e = t.x,
    i = t.y,
    n = this.a.redMul(e),
    s = e.redSqr().redMul(e).redIAdd(n).redIAdd(this.b);
  return i.redSqr().redISub(s).cmpn(0) === 0;
};
kr.prototype._endoWnafMulAdd = function (t, e, i) {
  for (var n = this._endoWnafT1, s = this._endoWnafT2, u = 0; u < t.length; u++) {
    var d = this._endoSplit(e[u]),
      v = t[u],
      E = v._getBeta();
    d.k1.negative && (d.k1.ineg(), (v = v.neg(!0))),
      d.k2.negative && (d.k2.ineg(), (E = E.neg(!0))),
      (n[u * 2] = v),
      (n[u * 2 + 1] = E),
      (s[u * 2] = d.k1),
      (s[u * 2 + 1] = d.k2);
  }
  for (var S = this._wnafMulAdd(1, n, s, u * 2, i), P = 0; P < u * 2; P++)
    (n[P] = null), (s[P] = null);
  return S;
};
function Ye(r, t, e, i) {
  Mi.BasePoint.call(this, r, 'affine'),
    t === null && e === null
      ? ((this.x = null), (this.y = null), (this.inf = !0))
      : ((this.x = new oe(t, 16)),
        (this.y = new oe(e, 16)),
        i && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)),
        this.x.red || (this.x = this.x.toRed(this.curve.red)),
        this.y.red || (this.y = this.y.toRed(this.curve.red)),
        (this.inf = !1));
}
Ns(Ye, Mi.BasePoint);
kr.prototype.point = function (t, e, i) {
  return new Ye(this, t, e, i);
};
kr.prototype.pointFromJSON = function (t, e) {
  return Ye.fromJSON(this, t, e);
};
Ye.prototype._getBeta = function () {
  if (this.curve.endo) {
    var t = this.precomputed;
    if (t && t.beta) return t.beta;
    var e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
    if (t) {
      var i = this.curve,
        n = function (s) {
          return i.point(s.x.redMul(i.endo.beta), s.y);
        };
      (t.beta = e),
        (e.precomputed = {
          beta: null,
          naf: t.naf && { wnd: t.naf.wnd, points: t.naf.points.map(n) },
          doubles: t.doubles && { step: t.doubles.step, points: t.doubles.points.map(n) },
        });
    }
    return e;
  }
};
Ye.prototype.toJSON = function () {
  return this.precomputed
    ? [
        this.x,
        this.y,
        this.precomputed && {
          doubles: this.precomputed.doubles && {
            step: this.precomputed.doubles.step,
            points: this.precomputed.doubles.points.slice(1),
          },
          naf: this.precomputed.naf && {
            wnd: this.precomputed.naf.wnd,
            points: this.precomputed.naf.points.slice(1),
          },
        },
      ]
    : [this.x, this.y];
};
Ye.fromJSON = function (t, e, i) {
  typeof e == 'string' && (e = JSON.parse(e));
  var n = t.point(e[0], e[1], i);
  if (!e[2]) return n;
  function s(d) {
    return t.point(d[0], d[1], i);
  }
  var u = e[2];
  return (
    (n.precomputed = {
      beta: null,
      doubles: u.doubles && { step: u.doubles.step, points: [n].concat(u.doubles.points.map(s)) },
      naf: u.naf && { wnd: u.naf.wnd, points: [n].concat(u.naf.points.map(s)) },
    }),
    n
  );
};
Ye.prototype.inspect = function () {
  return this.isInfinity()
    ? '<EC Point Infinity>'
    : '<EC Point x: ' +
        this.x.fromRed().toString(16, 2) +
        ' y: ' +
        this.y.fromRed().toString(16, 2) +
        '>';
};
Ye.prototype.isInfinity = function () {
  return this.inf;
};
Ye.prototype.add = function (t) {
  if (this.inf) return t;
  if (t.inf) return this;
  if (this.eq(t)) return this.dbl();
  if (this.neg().eq(t)) return this.curve.point(null, null);
  if (this.x.cmp(t.x) === 0) return this.curve.point(null, null);
  var e = this.y.redSub(t.y);
  e.cmpn(0) !== 0 && (e = e.redMul(this.x.redSub(t.x).redInvm()));
  var i = e.redSqr().redISub(this.x).redISub(t.x),
    n = e.redMul(this.x.redSub(i)).redISub(this.y);
  return this.curve.point(i, n);
};
Ye.prototype.dbl = function () {
  if (this.inf) return this;
  var t = this.y.redAdd(this.y);
  if (t.cmpn(0) === 0) return this.curve.point(null, null);
  var e = this.curve.a,
    i = this.x.redSqr(),
    n = t.redInvm(),
    s = i.redAdd(i).redIAdd(i).redIAdd(e).redMul(n),
    u = s.redSqr().redISub(this.x.redAdd(this.x)),
    d = s.redMul(this.x.redSub(u)).redISub(this.y);
  return this.curve.point(u, d);
};
Ye.prototype.getX = function () {
  return this.x.fromRed();
};
Ye.prototype.getY = function () {
  return this.y.fromRed();
};
Ye.prototype.mul = function (t) {
  return (
    (t = new oe(t, 16)),
    this.isInfinity()
      ? this
      : this._hasDoubles(t)
        ? this.curve._fixedNafMul(this, t)
        : this.curve.endo
          ? this.curve._endoWnafMulAdd([this], [t])
          : this.curve._wnafMul(this, t)
  );
};
Ye.prototype.mulAdd = function (t, e, i) {
  var n = [this, e],
    s = [t, i];
  return this.curve.endo ? this.curve._endoWnafMulAdd(n, s) : this.curve._wnafMulAdd(1, n, s, 2);
};
Ye.prototype.jmulAdd = function (t, e, i) {
  var n = [this, e],
    s = [t, i];
  return this.curve.endo
    ? this.curve._endoWnafMulAdd(n, s, !0)
    : this.curve._wnafMulAdd(1, n, s, 2, !0);
};
Ye.prototype.eq = function (t) {
  return (
    this === t ||
    (this.inf === t.inf && (this.inf || (this.x.cmp(t.x) === 0 && this.y.cmp(t.y) === 0)))
  );
};
Ye.prototype.neg = function (t) {
  if (this.inf) return this;
  var e = this.curve.point(this.x, this.y.redNeg());
  if (t && this.precomputed) {
    var i = this.precomputed,
      n = function (s) {
        return s.neg();
      };
    e.precomputed = {
      naf: i.naf && { wnd: i.naf.wnd, points: i.naf.points.map(n) },
      doubles: i.doubles && { step: i.doubles.step, points: i.doubles.points.map(n) },
    };
  }
  return e;
};
Ye.prototype.toJ = function () {
  if (this.inf) return this.curve.jpoint(null, null, null);
  var t = this.curve.jpoint(this.x, this.y, this.curve.one);
  return t;
};
function Qe(r, t, e, i) {
  Mi.BasePoint.call(this, r, 'jacobian'),
    t === null && e === null && i === null
      ? ((this.x = this.curve.one), (this.y = this.curve.one), (this.z = new oe(0)))
      : ((this.x = new oe(t, 16)), (this.y = new oe(e, 16)), (this.z = new oe(i, 16))),
    this.x.red || (this.x = this.x.toRed(this.curve.red)),
    this.y.red || (this.y = this.y.toRed(this.curve.red)),
    this.z.red || (this.z = this.z.toRed(this.curve.red)),
    (this.zOne = this.z === this.curve.one);
}
Ns(Qe, Mi.BasePoint);
kr.prototype.jpoint = function (t, e, i) {
  return new Qe(this, t, e, i);
};
Qe.prototype.toP = function () {
  if (this.isInfinity()) return this.curve.point(null, null);
  var t = this.z.redInvm(),
    e = t.redSqr(),
    i = this.x.redMul(e),
    n = this.y.redMul(e).redMul(t);
  return this.curve.point(i, n);
};
Qe.prototype.neg = function () {
  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
};
Qe.prototype.add = function (t) {
  if (this.isInfinity()) return t;
  if (t.isInfinity()) return this;
  var e = t.z.redSqr(),
    i = this.z.redSqr(),
    n = this.x.redMul(e),
    s = t.x.redMul(i),
    u = this.y.redMul(e.redMul(t.z)),
    d = t.y.redMul(i.redMul(this.z)),
    v = n.redSub(s),
    E = u.redSub(d);
  if (v.cmpn(0) === 0) return E.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var S = v.redSqr(),
    P = S.redMul(v),
    I = n.redMul(S),
    R = E.redSqr().redIAdd(P).redISub(I).redISub(I),
    C = E.redMul(I.redISub(R)).redISub(u.redMul(P)),
    j = this.z.redMul(t.z).redMul(v);
  return this.curve.jpoint(R, C, j);
};
Qe.prototype.mixedAdd = function (t) {
  if (this.isInfinity()) return t.toJ();
  if (t.isInfinity()) return this;
  var e = this.z.redSqr(),
    i = this.x,
    n = t.x.redMul(e),
    s = this.y,
    u = t.y.redMul(e).redMul(this.z),
    d = i.redSub(n),
    v = s.redSub(u);
  if (d.cmpn(0) === 0) return v.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var E = d.redSqr(),
    S = E.redMul(d),
    P = i.redMul(E),
    I = v.redSqr().redIAdd(S).redISub(P).redISub(P),
    R = v.redMul(P.redISub(I)).redISub(s.redMul(S)),
    C = this.z.redMul(d);
  return this.curve.jpoint(I, R, C);
};
Qe.prototype.dblp = function (t) {
  if (t === 0) return this;
  if (this.isInfinity()) return this;
  if (!t) return this.dbl();
  var e;
  if (this.curve.zeroA || this.curve.threeA) {
    var i = this;
    for (e = 0; e < t; e++) i = i.dbl();
    return i;
  }
  var n = this.curve.a,
    s = this.curve.tinv,
    u = this.x,
    d = this.y,
    v = this.z,
    E = v.redSqr().redSqr(),
    S = d.redAdd(d);
  for (e = 0; e < t; e++) {
    var P = u.redSqr(),
      I = S.redSqr(),
      R = I.redSqr(),
      C = P.redAdd(P).redIAdd(P).redIAdd(n.redMul(E)),
      j = u.redMul(I),
      ct = C.redSqr().redISub(j.redAdd(j)),
      W = j.redISub(ct),
      B = C.redMul(W);
    B = B.redIAdd(B).redISub(R);
    var Z = S.redMul(v);
    e + 1 < t && (E = E.redMul(R)), (u = ct), (v = Z), (S = B);
  }
  return this.curve.jpoint(u, S.redMul(s), v);
};
Qe.prototype.dbl = function () {
  return this.isInfinity()
    ? this
    : this.curve.zeroA
      ? this._zeroDbl()
      : this.curve.threeA
        ? this._threeDbl()
        : this._dbl();
};
Qe.prototype._zeroDbl = function () {
  var t, e, i;
  if (this.zOne) {
    var n = this.x.redSqr(),
      s = this.y.redSqr(),
      u = s.redSqr(),
      d = this.x.redAdd(s).redSqr().redISub(n).redISub(u);
    d = d.redIAdd(d);
    var v = n.redAdd(n).redIAdd(n),
      E = v.redSqr().redISub(d).redISub(d),
      S = u.redIAdd(u);
    (S = S.redIAdd(S)),
      (S = S.redIAdd(S)),
      (t = E),
      (e = v.redMul(d.redISub(E)).redISub(S)),
      (i = this.y.redAdd(this.y));
  } else {
    var P = this.x.redSqr(),
      I = this.y.redSqr(),
      R = I.redSqr(),
      C = this.x.redAdd(I).redSqr().redISub(P).redISub(R);
    C = C.redIAdd(C);
    var j = P.redAdd(P).redIAdd(P),
      ct = j.redSqr(),
      W = R.redIAdd(R);
    (W = W.redIAdd(W)),
      (W = W.redIAdd(W)),
      (t = ct.redISub(C).redISub(C)),
      (e = j.redMul(C.redISub(t)).redISub(W)),
      (i = this.y.redMul(this.z)),
      (i = i.redIAdd(i));
  }
  return this.curve.jpoint(t, e, i);
};
Qe.prototype._threeDbl = function () {
  var t, e, i;
  if (this.zOne) {
    var n = this.x.redSqr(),
      s = this.y.redSqr(),
      u = s.redSqr(),
      d = this.x.redAdd(s).redSqr().redISub(n).redISub(u);
    d = d.redIAdd(d);
    var v = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
      E = v.redSqr().redISub(d).redISub(d);
    t = E;
    var S = u.redIAdd(u);
    (S = S.redIAdd(S)),
      (S = S.redIAdd(S)),
      (e = v.redMul(d.redISub(E)).redISub(S)),
      (i = this.y.redAdd(this.y));
  } else {
    var P = this.z.redSqr(),
      I = this.y.redSqr(),
      R = this.x.redMul(I),
      C = this.x.redSub(P).redMul(this.x.redAdd(P));
    C = C.redAdd(C).redIAdd(C);
    var j = R.redIAdd(R);
    j = j.redIAdd(j);
    var ct = j.redAdd(j);
    (t = C.redSqr().redISub(ct)), (i = this.y.redAdd(this.z).redSqr().redISub(I).redISub(P));
    var W = I.redSqr();
    (W = W.redIAdd(W)),
      (W = W.redIAdd(W)),
      (W = W.redIAdd(W)),
      (e = C.redMul(j.redISub(t)).redISub(W));
  }
  return this.curve.jpoint(t, e, i);
};
Qe.prototype._dbl = function () {
  var t = this.curve.a,
    e = this.x,
    i = this.y,
    n = this.z,
    s = n.redSqr().redSqr(),
    u = e.redSqr(),
    d = i.redSqr(),
    v = u.redAdd(u).redIAdd(u).redIAdd(t.redMul(s)),
    E = e.redAdd(e);
  E = E.redIAdd(E);
  var S = E.redMul(d),
    P = v.redSqr().redISub(S.redAdd(S)),
    I = S.redISub(P),
    R = d.redSqr();
  (R = R.redIAdd(R)), (R = R.redIAdd(R)), (R = R.redIAdd(R));
  var C = v.redMul(I).redISub(R),
    j = i.redAdd(i).redMul(n);
  return this.curve.jpoint(P, C, j);
};
Qe.prototype.trpl = function () {
  if (!this.curve.zeroA) return this.dbl().add(this);
  var t = this.x.redSqr(),
    e = this.y.redSqr(),
    i = this.z.redSqr(),
    n = e.redSqr(),
    s = t.redAdd(t).redIAdd(t),
    u = s.redSqr(),
    d = this.x.redAdd(e).redSqr().redISub(t).redISub(n);
  (d = d.redIAdd(d)), (d = d.redAdd(d).redIAdd(d)), (d = d.redISub(u));
  var v = d.redSqr(),
    E = n.redIAdd(n);
  (E = E.redIAdd(E)), (E = E.redIAdd(E)), (E = E.redIAdd(E));
  var S = s.redIAdd(d).redSqr().redISub(u).redISub(v).redISub(E),
    P = e.redMul(S);
  (P = P.redIAdd(P)), (P = P.redIAdd(P));
  var I = this.x.redMul(v).redISub(P);
  (I = I.redIAdd(I)), (I = I.redIAdd(I));
  var R = this.y.redMul(S.redMul(E.redISub(S)).redISub(d.redMul(v)));
  (R = R.redIAdd(R)), (R = R.redIAdd(R)), (R = R.redIAdd(R));
  var C = this.z.redAdd(d).redSqr().redISub(i).redISub(v);
  return this.curve.jpoint(I, R, C);
};
Qe.prototype.mul = function (t, e) {
  return (t = new oe(t, e)), this.curve._wnafMul(this, t);
};
Qe.prototype.eq = function (t) {
  if (t.type === 'affine') return this.eq(t.toJ());
  if (this === t) return !0;
  var e = this.z.redSqr(),
    i = t.z.redSqr();
  if (this.x.redMul(i).redISub(t.x.redMul(e)).cmpn(0) !== 0) return !1;
  var n = e.redMul(this.z),
    s = i.redMul(t.z);
  return this.y.redMul(s).redISub(t.y.redMul(n)).cmpn(0) === 0;
};
Qe.prototype.eqXToP = function (t) {
  var e = this.z.redSqr(),
    i = t.toRed(this.curve.red).redMul(e);
  if (this.x.cmp(i) === 0) return !0;
  for (var n = t.clone(), s = this.curve.redN.redMul(e); ; ) {
    if ((n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0)) return !1;
    if ((i.redIAdd(s), this.x.cmp(i) === 0)) return !0;
  }
};
Qe.prototype.inspect = function () {
  return this.isInfinity()
    ? '<EC JPoint Infinity>'
    : '<EC JPoint x: ' +
        this.x.toString(16, 2) +
        ' y: ' +
        this.y.toString(16, 2) +
        ' z: ' +
        this.z.toString(16, 2) +
        '>';
};
Qe.prototype.isInfinity = function () {
  return this.z.cmpn(0) === 0;
};
var bn = Li(function (r, t) {
    var e = t;
    (e.base = Mi), (e.short = yu), (e.mont = null), (e.edwards = null);
  }),
  An = Li(function (r, t) {
    var e = t,
      i = yr.assert;
    function n(d) {
      d.type === 'short'
        ? (this.curve = new bn.short(d))
        : d.type === 'edwards'
          ? (this.curve = new bn.edwards(d))
          : (this.curve = new bn.mont(d)),
        (this.g = this.curve.g),
        (this.n = this.curve.n),
        (this.hash = d.hash),
        i(this.g.validate(), 'Invalid curve'),
        i(this.g.mul(this.n).isInfinity(), 'Invalid curve, G*N != O');
    }
    e.PresetCurve = n;
    function s(d, v) {
      Object.defineProperty(e, d, {
        configurable: !0,
        enumerable: !0,
        get: function () {
          var E = new n(v);
          return Object.defineProperty(e, d, { configurable: !0, enumerable: !0, value: E }), E;
        },
      });
    }
    s('p192', {
      type: 'short',
      prime: 'p192',
      p: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff',
      a: 'ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc',
      b: '64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1',
      n: 'ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831',
      hash: $r.sha256,
      gRed: !1,
      g: [
        '188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012',
        '07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811',
      ],
    }),
      s('p224', {
        type: 'short',
        prime: 'p224',
        p: 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001',
        a: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe',
        b: 'b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4',
        n: 'ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d',
        hash: $r.sha256,
        gRed: !1,
        g: [
          'b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21',
          'bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34',
        ],
      }),
      s('p256', {
        type: 'short',
        prime: null,
        p: 'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff',
        a: 'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc',
        b: '5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b',
        n: 'ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551',
        hash: $r.sha256,
        gRed: !1,
        g: [
          '6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296',
          '4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5',
        ],
      }),
      s('p384', {
        type: 'short',
        prime: null,
        p: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff',
        a: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc',
        b: 'b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef',
        n: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973',
        hash: $r.sha384,
        gRed: !1,
        g: [
          'aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7',
          '3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f',
        ],
      }),
      s('p521', {
        type: 'short',
        prime: null,
        p: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff',
        a: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc',
        b: '00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00',
        n: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409',
        hash: $r.sha512,
        gRed: !1,
        g: [
          '000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66',
          '00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650',
        ],
      }),
      s('curve25519', {
        type: 'mont',
        prime: 'p25519',
        p: '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
        a: '76d06',
        b: '1',
        n: '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
        hash: $r.sha256,
        gRed: !1,
        g: ['9'],
      }),
      s('ed25519', {
        type: 'edwards',
        prime: 'p25519',
        p: '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
        a: '-1',
        c: '1',
        d: '52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3',
        n: '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
        hash: $r.sha256,
        gRed: !1,
        g: [
          '216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a',
          '6666666666666666666666666666666666666666666666666666666666666658',
        ],
      });
    var u;
    try {
      u = null.crash();
    } catch {
      u = void 0;
    }
    s('secp256k1', {
      type: 'short',
      prime: 'k256',
      p: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f',
      a: '0',
      b: '7',
      n: 'ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141',
      h: '1',
      hash: $r.sha256,
      beta: '7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee',
      lambda: '5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72',
      basis: [
        { a: '3086d221a7d46bcde86c90e49284eb15', b: '-e4437ed6010e88286f547fa90abfe4c3' },
        { a: '114ca50f7a8e2f3f657c1108d9d44cfd8', b: '3086d221a7d46bcde86c90e49284eb15' },
      ],
      gRed: !1,
      g: [
        '79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798',
        '483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8',
        u,
      ],
    });
  });
function di(r) {
  if (!(this instanceof di)) return new di(r);
  (this.hash = r.hash),
    (this.predResist = !!r.predResist),
    (this.outLen = this.hash.outSize),
    (this.minEntropy = r.minEntropy || this.hash.hmacStrength),
    (this._reseed = null),
    (this.reseedInterval = null),
    (this.K = null),
    (this.V = null);
  var t = Dr.toArray(r.entropy, r.entropyEnc || 'hex'),
    e = Dr.toArray(r.nonce, r.nonceEnc || 'hex'),
    i = Dr.toArray(r.pers, r.persEnc || 'hex');
  Ps(
    t.length >= this.minEntropy / 8,
    'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits'
  ),
    this._init(t, e, i);
}
var oa = di;
di.prototype._init = function (t, e, i) {
  var n = t.concat(e).concat(i);
  (this.K = new Array(this.outLen / 8)), (this.V = new Array(this.outLen / 8));
  for (var s = 0; s < this.V.length; s++) (this.K[s] = 0), (this.V[s] = 1);
  this._update(n), (this._reseed = 1), (this.reseedInterval = 281474976710656);
};
di.prototype._hmac = function () {
  return new $r.hmac(this.hash, this.K);
};
di.prototype._update = function (t) {
  var e = this._hmac().update(this.V).update([0]);
  t && (e = e.update(t)),
    (this.K = e.digest()),
    (this.V = this._hmac().update(this.V).digest()),
    t &&
      ((this.K = this._hmac().update(this.V).update([1]).update(t).digest()),
      (this.V = this._hmac().update(this.V).digest()));
};
di.prototype.reseed = function (t, e, i, n) {
  typeof e != 'string' && ((n = i), (i = e), (e = null)),
    (t = Dr.toArray(t, e)),
    (i = Dr.toArray(i, n)),
    Ps(
      t.length >= this.minEntropy / 8,
      'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits'
    ),
    this._update(t.concat(i || [])),
    (this._reseed = 1);
};
di.prototype.generate = function (t, e, i, n) {
  if (this._reseed > this.reseedInterval) throw new Error('Reseed is required');
  typeof e != 'string' && ((n = i), (i = e), (e = null)),
    i && ((i = Dr.toArray(i, n || 'hex')), this._update(i));
  for (var s = []; s.length < t; )
    (this.V = this._hmac().update(this.V).digest()), (s = s.concat(this.V));
  var u = s.slice(0, t);
  return this._update(i), this._reseed++, Dr.encode(u, e);
};
var us = yr.assert;
function nr(r, t) {
  (this.ec = r),
    (this.priv = null),
    (this.pub = null),
    t.priv && this._importPrivate(t.priv, t.privEnc),
    t.pub && this._importPublic(t.pub, t.pubEnc);
}
var ks = nr;
nr.fromPublic = function (t, e, i) {
  return e instanceof nr ? e : new nr(t, { pub: e, pubEnc: i });
};
nr.fromPrivate = function (t, e, i) {
  return e instanceof nr ? e : new nr(t, { priv: e, privEnc: i });
};
nr.prototype.validate = function () {
  var t = this.getPublic();
  return t.isInfinity()
    ? { result: !1, reason: 'Invalid public key' }
    : t.validate()
      ? t.mul(this.ec.curve.n).isInfinity()
        ? { result: !0, reason: null }
        : { result: !1, reason: 'Public key * N != O' }
      : { result: !1, reason: 'Public key is not a point' };
};
nr.prototype.getPublic = function (t, e) {
  return (
    typeof t == 'string' && ((e = t), (t = null)),
    this.pub || (this.pub = this.ec.g.mul(this.priv)),
    e ? this.pub.encode(e, t) : this.pub
  );
};
nr.prototype.getPrivate = function (t) {
  return t === 'hex' ? this.priv.toString(16, 2) : this.priv;
};
nr.prototype._importPrivate = function (t, e) {
  (this.priv = new oe(t, e || 16)), (this.priv = this.priv.umod(this.ec.curve.n));
};
nr.prototype._importPublic = function (t, e) {
  if (t.x || t.y) {
    this.ec.curve.type === 'mont'
      ? us(t.x, 'Need x coordinate')
      : (this.ec.curve.type === 'short' || this.ec.curve.type === 'edwards') &&
        us(t.x && t.y, 'Need both x and y coordinate'),
      (this.pub = this.ec.curve.point(t.x, t.y));
    return;
  }
  this.pub = this.ec.curve.decodePoint(t, e);
};
nr.prototype.derive = function (t) {
  return t.validate() || us(t.validate(), 'public point not validated'), t.mul(this.priv).getX();
};
nr.prototype.sign = function (t, e, i) {
  return this.ec.sign(t, this, e, i);
};
nr.prototype.verify = function (t, e) {
  return this.ec.verify(t, e, this);
};
nr.prototype.inspect = function () {
  return (
    '<Key priv: ' +
    (this.priv && this.priv.toString(16, 2)) +
    ' pub: ' +
    (this.pub && this.pub.inspect()) +
    ' >'
  );
};
var wu = yr.assert;
function Dn(r, t) {
  if (r instanceof Dn) return r;
  this._importDER(r, t) ||
    (wu(r.r && r.s, 'Signature without r or s'),
    (this.r = new oe(r.r, 16)),
    (this.s = new oe(r.s, 16)),
    r.recoveryParam === void 0
      ? (this.recoveryParam = null)
      : (this.recoveryParam = r.recoveryParam));
}
var zn = Dn;
function bu() {
  this.place = 0;
}
function ts(r, t) {
  var e = r[t.place++];
  if (!(e & 128)) return e;
  var i = e & 15;
  if (i === 0 || i > 4) return !1;
  for (var n = 0, s = 0, u = t.place; s < i; s++, u++) (n <<= 8), (n |= r[u]), (n >>>= 0);
  return n <= 127 ? !1 : ((t.place = u), n);
}
function ro(r) {
  for (var t = 0, e = r.length - 1; !r[t] && !(r[t + 1] & 128) && t < e; ) t++;
  return t === 0 ? r : r.slice(t);
}
Dn.prototype._importDER = function (t, e) {
  t = yr.toArray(t, e);
  var i = new bu();
  if (t[i.place++] !== 48) return !1;
  var n = ts(t, i);
  if (n === !1 || n + i.place !== t.length || t[i.place++] !== 2) return !1;
  var s = ts(t, i);
  if (s === !1) return !1;
  var u = t.slice(i.place, s + i.place);
  if (((i.place += s), t[i.place++] !== 2)) return !1;
  var d = ts(t, i);
  if (d === !1 || t.length !== d + i.place) return !1;
  var v = t.slice(i.place, d + i.place);
  if (u[0] === 0)
    if (u[1] & 128) u = u.slice(1);
    else return !1;
  if (v[0] === 0)
    if (v[1] & 128) v = v.slice(1);
    else return !1;
  return (this.r = new oe(u)), (this.s = new oe(v)), (this.recoveryParam = null), !0;
};
function es(r, t) {
  if (t < 128) {
    r.push(t);
    return;
  }
  var e = 1 + ((Math.log(t) / Math.LN2) >>> 3);
  for (r.push(e | 128); --e; ) r.push((t >>> (e << 3)) & 255);
  r.push(t);
}
Dn.prototype.toDER = function (t) {
  var e = this.r.toArray(),
    i = this.s.toArray();
  for (
    e[0] & 128 && (e = [0].concat(e)), i[0] & 128 && (i = [0].concat(i)), e = ro(e), i = ro(i);
    !i[0] && !(i[1] & 128);

  )
    i = i.slice(1);
  var n = [2];
  es(n, e.length), (n = n.concat(e)), n.push(2), es(n, i.length);
  var s = n.concat(i),
    u = [48];
  return es(u, s.length), (u = u.concat(s)), yr.encode(u, t);
};
var Au = function () {
    throw new Error('unsupported');
  },
  aa = yr.assert;
function Pr(r) {
  if (!(this instanceof Pr)) return new Pr(r);
  typeof r == 'string' &&
    (aa(Object.prototype.hasOwnProperty.call(An, r), 'Unknown curve ' + r), (r = An[r])),
    r instanceof An.PresetCurve && (r = { curve: r }),
    (this.curve = r.curve.curve),
    (this.n = this.curve.n),
    (this.nh = this.n.ushrn(1)),
    (this.g = this.curve.g),
    (this.g = r.curve.g),
    this.g.precompute(r.curve.n.bitLength() + 1),
    (this.hash = r.hash || r.curve.hash);
}
var xu = Pr;
Pr.prototype.keyPair = function (t) {
  return new ks(this, t);
};
Pr.prototype.keyFromPrivate = function (t, e) {
  return ks.fromPrivate(this, t, e);
};
Pr.prototype.keyFromPublic = function (t, e) {
  return ks.fromPublic(this, t, e);
};
Pr.prototype.genKeyPair = function (t) {
  t || (t = {});
  for (
    var e = new oa({
        hash: this.hash,
        pers: t.pers,
        persEnc: t.persEnc || 'utf8',
        entropy: t.entropy || Au(this.hash.hmacStrength),
        entropyEnc: (t.entropy && t.entropyEnc) || 'utf8',
        nonce: this.n.toArray(),
      }),
      i = this.n.byteLength(),
      n = this.n.sub(new oe(2));
    ;

  ) {
    var s = new oe(e.generate(i));
    if (!(s.cmp(n) > 0)) return s.iaddn(1), this.keyFromPrivate(s);
  }
};
Pr.prototype._truncateToN = function (t, e) {
  var i = t.byteLength() * 8 - this.n.bitLength();
  return i > 0 && (t = t.ushrn(i)), !e && t.cmp(this.n) >= 0 ? t.sub(this.n) : t;
};
Pr.prototype.sign = function (t, e, i, n) {
  typeof i == 'object' && ((n = i), (i = null)),
    n || (n = {}),
    (e = this.keyFromPrivate(e, i)),
    (t = this._truncateToN(new oe(t, 16)));
  for (
    var s = this.n.byteLength(),
      u = e.getPrivate().toArray('be', s),
      d = t.toArray('be', s),
      v = new oa({
        hash: this.hash,
        entropy: u,
        nonce: d,
        pers: n.pers,
        persEnc: n.persEnc || 'utf8',
      }),
      E = this.n.sub(new oe(1)),
      S = 0;
    ;
    S++
  ) {
    var P = n.k ? n.k(S) : new oe(v.generate(this.n.byteLength()));
    if (((P = this._truncateToN(P, !0)), !(P.cmpn(1) <= 0 || P.cmp(E) >= 0))) {
      var I = this.g.mul(P);
      if (!I.isInfinity()) {
        var R = I.getX(),
          C = R.umod(this.n);
        if (C.cmpn(0) !== 0) {
          var j = P.invm(this.n).mul(C.mul(e.getPrivate()).iadd(t));
          if (((j = j.umod(this.n)), j.cmpn(0) !== 0)) {
            var ct = (I.getY().isOdd() ? 1 : 0) | (R.cmp(C) !== 0 ? 2 : 0);
            return (
              n.canonical && j.cmp(this.nh) > 0 && ((j = this.n.sub(j)), (ct ^= 1)),
              new zn({ r: C, s: j, recoveryParam: ct })
            );
          }
        }
      }
    }
  }
};
Pr.prototype.verify = function (t, e, i, n) {
  (t = this._truncateToN(new oe(t, 16))), (i = this.keyFromPublic(i, n)), (e = new zn(e, 'hex'));
  var s = e.r,
    u = e.s;
  if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0 || u.cmpn(1) < 0 || u.cmp(this.n) >= 0) return !1;
  var d = u.invm(this.n),
    v = d.mul(t).umod(this.n),
    E = d.mul(s).umod(this.n),
    S;
  return this.curve._maxwellTrick
    ? ((S = this.g.jmulAdd(v, i.getPublic(), E)), S.isInfinity() ? !1 : S.eqXToP(s))
    : ((S = this.g.mulAdd(v, i.getPublic(), E)),
      S.isInfinity() ? !1 : S.getX().umod(this.n).cmp(s) === 0);
};
Pr.prototype.recoverPubKey = function (r, t, e, i) {
  aa((3 & e) === e, 'The recovery param is more than two bits'), (t = new zn(t, i));
  var n = this.n,
    s = new oe(r),
    u = t.r,
    d = t.s,
    v = e & 1,
    E = e >> 1;
  if (u.cmp(this.curve.p.umod(this.curve.n)) >= 0 && E)
    throw new Error('Unable to find sencond key candinate');
  E ? (u = this.curve.pointFromX(u.add(this.curve.n), v)) : (u = this.curve.pointFromX(u, v));
  var S = t.r.invm(n),
    P = n.sub(s).mul(S).umod(n),
    I = d.mul(S).umod(n);
  return this.g.mulAdd(P, u, I);
};
Pr.prototype.getKeyRecoveryParam = function (r, t, e, i) {
  if (((t = new zn(t, i)), t.recoveryParam !== null)) return t.recoveryParam;
  for (var n = 0; n < 4; n++) {
    var s;
    try {
      s = this.recoverPubKey(r, t, n);
    } catch {
      continue;
    }
    if (s.eq(e)) return n;
  }
  throw new Error('Unable to find valid recovery factor');
};
var Eu = Li(function (r, t) {
    var e = t;
    (e.version = '6.5.4'),
      (e.utils = yr),
      (e.rand = function () {
        throw new Error('unsupported');
      }),
      (e.curve = bn),
      (e.curves = An),
      (e.ec = xu),
      (e.eddsa = null);
  }),
  Mu = Eu.ec;
const _u = 'signing-key/5.7.0',
  hs = new z(_u);
let rs = null;
function Hr() {
  return rs || (rs = new Mu('secp256k1')), rs;
}
class Su {
  constructor(t) {
    $(this, 'curve', 'secp256k1'),
      $(this, 'privateKey', $t(t)),
      Ai(this.privateKey) !== 32 &&
        hs.throwArgumentError('invalid private key', 'privateKey', '[[ REDACTED ]]');
    const e = Hr().keyFromPrivate(re(this.privateKey));
    $(this, 'publicKey', '0x' + e.getPublic(!1, 'hex')),
      $(this, 'compressedPublicKey', '0x' + e.getPublic(!0, 'hex')),
      $(this, '_isSigningKey', !0);
  }
  _addPoint(t) {
    const e = Hr().keyFromPublic(re(this.publicKey)),
      i = Hr().keyFromPublic(re(t));
    return '0x' + e.pub.add(i.pub).encodeCompressed('hex');
  }
  signDigest(t) {
    const e = Hr().keyFromPrivate(re(this.privateKey)),
      i = re(t);
    i.length !== 32 && hs.throwArgumentError('bad digest length', 'digest', t);
    const n = e.sign(i, { canonical: !0 });
    return nn({
      recoveryParam: n.recoveryParam,
      r: je('0x' + n.r.toString(16), 32),
      s: je('0x' + n.s.toString(16), 32),
    });
  }
  computeSharedSecret(t) {
    const e = Hr().keyFromPrivate(re(this.privateKey)),
      i = Hr().keyFromPublic(re(fa(t)));
    return je('0x' + e.derive(i.getPublic()).toString(16), 32);
  }
  static isSigningKey(t) {
    return !!(t && t._isSigningKey);
  }
}
function Pu(r, t) {
  const e = nn(t),
    i = { r: re(e.r), s: re(e.s) };
  return '0x' + Hr().recoverPubKey(re(r), i, e.recoveryParam).encode('hex', !1);
}
function fa(r, t) {
  const e = re(r);
  if (e.length === 32) {
    const i = new Su(e);
    return t ? '0x' + Hr().keyFromPrivate(e).getPublic(!0, 'hex') : i.publicKey;
  } else {
    if (e.length === 33) return t ? $t(e) : '0x' + Hr().keyFromPublic(e).getPublic(!1, 'hex');
    if (e.length === 65) return t ? '0x' + Hr().keyFromPublic(e).getPublic(!0, 'hex') : $t(e);
  }
  return hs.throwArgumentError('invalid public or private key', 'key', '[REDACTED]');
}
const Nu = 'transactions/5.7.0',
  ir = new z(Nu);
var io;
(function (r) {
  (r[(r.legacy = 0)] = 'legacy'),
    (r[(r.eip2930 = 1)] = 'eip2930'),
    (r[(r.eip1559 = 2)] = 'eip1559');
})(io || (io = {}));
function Is(r) {
  return r === '0x' ? null : Je(r);
}
function rr(r) {
  return r === '0x' ? Fo : ut.from(r);
}
const ku = [
    { name: 'nonce', maxLength: 32, numeric: !0 },
    { name: 'gasPrice', maxLength: 32, numeric: !0 },
    { name: 'gasLimit', maxLength: 32, numeric: !0 },
    { name: 'to', length: 20 },
    { name: 'value', maxLength: 32, numeric: !0 },
    { name: 'data' },
  ],
  Iu = {
    chainId: !0,
    data: !0,
    gasLimit: !0,
    gasPrice: !0,
    nonce: !0,
    to: !0,
    type: !0,
    value: !0,
  };
function Bu(r) {
  const t = fa(r);
  return Je(er(He(er(t, 1)), 12));
}
function ua(r, t) {
  return Bu(Pu(re(r), t));
}
function mr(r, t) {
  const e = si(ut.from(r).toHexString());
  return (
    e.length > 32 && ir.throwArgumentError('invalid length for ' + t, 'transaction:' + t, r), e
  );
}
function is(r, t) {
  return {
    address: Je(r),
    storageKeys: (t || []).map(
      (e, i) => (
        Ai(e) !== 32 &&
          ir.throwArgumentError('invalid access list storageKey', `accessList[${r}:${i}]`, e),
        e.toLowerCase()
      )
    ),
  };
}
function Oi(r) {
  if (Array.isArray(r))
    return r.map((e, i) =>
      Array.isArray(e)
        ? (e.length > 2 &&
            ir.throwArgumentError(
              'access list expected to be [ address, storageKeys[] ]',
              `value[${i}]`,
              e
            ),
          is(e[0], e[1]))
        : is(e.address, e.storageKeys)
    );
  const t = Object.keys(r).map((e) => {
    const i = r[e].reduce((n, s) => ((n[s] = !0), n), {});
    return is(e, Object.keys(i).sort());
  });
  return t.sort((e, i) => e.address.localeCompare(i.address)), t;
}
function ha(r) {
  return Oi(r).map((t) => [t.address, t.storageKeys]);
}
function la(r, t) {
  if (r.gasPrice != null) {
    const i = ut.from(r.gasPrice),
      n = ut.from(r.maxFeePerGas || 0);
    i.eq(n) ||
      ir.throwArgumentError('mismatch EIP-1559 gasPrice != maxFeePerGas', 'tx', {
        gasPrice: i,
        maxFeePerGas: n,
      });
  }
  const e = [
    mr(r.chainId || 0, 'chainId'),
    mr(r.nonce || 0, 'nonce'),
    mr(r.maxPriorityFeePerGas || 0, 'maxPriorityFeePerGas'),
    mr(r.maxFeePerGas || 0, 'maxFeePerGas'),
    mr(r.gasLimit || 0, 'gasLimit'),
    r.to != null ? Je(r.to) : '0x',
    mr(r.value || 0, 'value'),
    r.data || '0x',
    ha(r.accessList || []),
  ];
  if (t) {
    const i = nn(t);
    e.push(mr(i.recoveryParam, 'recoveryParam')), e.push(si(i.r)), e.push(si(i.s));
  }
  return ur(['0x02', Ri(e)]);
}
function ca(r, t) {
  const e = [
    mr(r.chainId || 0, 'chainId'),
    mr(r.nonce || 0, 'nonce'),
    mr(r.gasPrice || 0, 'gasPrice'),
    mr(r.gasLimit || 0, 'gasLimit'),
    r.to != null ? Je(r.to) : '0x',
    mr(r.value || 0, 'value'),
    r.data || '0x',
    ha(r.accessList || []),
  ];
  if (t) {
    const i = nn(t);
    e.push(mr(i.recoveryParam, 'recoveryParam')), e.push(si(i.r)), e.push(si(i.s));
  }
  return ur(['0x01', Ri(e)]);
}
function Tu(r, t) {
  Ko(r, Iu);
  const e = [];
  ku.forEach(function (u) {
    let d = r[u.name] || [];
    const v = {};
    u.numeric && (v.hexPad = 'left'),
      (d = re($t(d, v))),
      u.length &&
        d.length !== u.length &&
        d.length > 0 &&
        ir.throwArgumentError('invalid length for ' + u.name, 'transaction:' + u.name, d),
      u.maxLength &&
        ((d = si(d)),
        d.length > u.maxLength &&
          ir.throwArgumentError('invalid length for ' + u.name, 'transaction:' + u.name, d)),
      e.push($t(d));
  });
  let i = 0;
  if (
    (r.chainId != null
      ? ((i = r.chainId),
        typeof i != 'number' &&
          ir.throwArgumentError('invalid transaction.chainId', 'transaction', r))
      : t && !xs(t) && t.v > 28 && (i = Math.floor((t.v - 35) / 2)),
    i !== 0 && (e.push($t(i)), e.push('0x'), e.push('0x')),
    !t)
  )
    return Ri(e);
  const n = nn(t);
  let s = 27 + n.recoveryParam;
  return (
    i !== 0
      ? (e.pop(),
        e.pop(),
        e.pop(),
        (s += i * 2 + 8),
        n.v > 28 &&
          n.v !== s &&
          ir.throwArgumentError('transaction.chainId/signature.v mismatch', 'signature', t))
      : n.v !== s &&
        ir.throwArgumentError('transaction.chainId/signature.v mismatch', 'signature', t),
    e.push($t(s)),
    e.push(si(re(n.r))),
    e.push(si(re(n.s))),
    Ri(e)
  );
}
function y0(r, t) {
  if (r.type == null || r.type === 0)
    return (
      r.accessList != null &&
        ir.throwArgumentError(
          'untyped transactions do not support accessList; include type: 1',
          'transaction',
          r
        ),
      Tu(r, t)
    );
  switch (r.type) {
    case 1:
      return ca(r, t);
    case 2:
      return la(r, t);
  }
  return ir.throwError(`unsupported transaction type: ${r.type}`, z.errors.UNSUPPORTED_OPERATION, {
    operation: 'serializeTransaction',
    transactionType: r.type,
  });
}
function da(r, t, e) {
  try {
    const i = rr(t[0]).toNumber();
    if (i !== 0 && i !== 1) throw new Error('bad recid');
    r.v = i;
  } catch {
    ir.throwArgumentError('invalid v for transaction type: 1', 'v', t[0]);
  }
  (r.r = je(t[1], 32)), (r.s = je(t[2], 32));
  try {
    const i = He(e(r));
    r.from = ua(i, { r: r.r, s: r.s, recoveryParam: r.v });
  } catch {}
}
function Ru(r) {
  const t = Ms(r.slice(1));
  t.length !== 9 &&
    t.length !== 12 &&
    ir.throwArgumentError('invalid component count for transaction type: 2', 'payload', $t(r));
  const e = rr(t[2]),
    i = rr(t[3]),
    n = {
      type: 2,
      chainId: rr(t[0]).toNumber(),
      nonce: rr(t[1]).toNumber(),
      maxPriorityFeePerGas: e,
      maxFeePerGas: i,
      gasPrice: null,
      gasLimit: rr(t[4]),
      to: Is(t[5]),
      value: rr(t[6]),
      data: t[7],
      accessList: Oi(t[8]),
    };
  return t.length === 9 || ((n.hash = He(r)), da(n, t.slice(9), la)), n;
}
function Cu(r) {
  const t = Ms(r.slice(1));
  t.length !== 8 &&
    t.length !== 11 &&
    ir.throwArgumentError('invalid component count for transaction type: 1', 'payload', $t(r));
  const e = {
    type: 1,
    chainId: rr(t[0]).toNumber(),
    nonce: rr(t[1]).toNumber(),
    gasPrice: rr(t[2]),
    gasLimit: rr(t[3]),
    to: Is(t[4]),
    value: rr(t[5]),
    data: t[6],
    accessList: Oi(t[7]),
  };
  return t.length === 8 || ((e.hash = He(r)), da(e, t.slice(8), ca)), e;
}
function Lu(r) {
  const t = Ms(r);
  t.length !== 9 &&
    t.length !== 6 &&
    ir.throwArgumentError('invalid raw transaction', 'rawTransaction', r);
  const e = {
    nonce: rr(t[0]).toNumber(),
    gasPrice: rr(t[1]),
    gasLimit: rr(t[2]),
    to: Is(t[3]),
    value: rr(t[4]),
    data: t[5],
    chainId: 0,
  };
  if (t.length === 6) return e;
  try {
    e.v = ut.from(t[6]).toNumber();
  } catch {
    return e;
  }
  if (((e.r = je(t[7], 32)), (e.s = je(t[8], 32)), ut.from(e.r).isZero() && ut.from(e.s).isZero()))
    (e.chainId = e.v), (e.v = 0);
  else {
    (e.chainId = Math.floor((e.v - 35) / 2)), e.chainId < 0 && (e.chainId = 0);
    let i = e.v - 27;
    const n = t.slice(0, 6);
    e.chainId !== 0 &&
      (n.push($t(e.chainId)), n.push('0x'), n.push('0x'), (i -= e.chainId * 2 + 8));
    const s = He(Ri(n));
    try {
      e.from = ua(s, { r: $t(e.r), s: $t(e.s), recoveryParam: i });
    } catch {}
    e.hash = He(r);
  }
  return (e.type = null), e;
}
function Ou(r) {
  const t = re(r);
  if (t[0] > 127) return Lu(t);
  switch (t[0]) {
    case 1:
      return Cu(t);
    case 2:
      return Ru(t);
  }
  return ir.throwError(`unsupported transaction type: ${t[0]}`, z.errors.UNSUPPORTED_OPERATION, {
    operation: 'parseTransaction',
    transactionType: t[0],
  });
}
var ga = { exports: {} };
(function (r) {
  (function (t) {
    var e = function (y) {
        var x,
          b = new Float64Array(16);
        if (y) for (x = 0; x < y.length; x++) b[x] = y[x];
        return b;
      },
      i = function () {
        throw new Error('no PRNG');
      },
      n = new Uint8Array(16),
      s = new Uint8Array(32);
    s[0] = 9;
    var u = e(),
      d = e([1]),
      v = e([56129, 1]),
      E = e([
        30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139,
        11119, 27886, 20995,
      ]),
      S = e([
        61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239,
        55772, 9222,
      ]),
      P = e([
        54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502,
        52590, 14035, 8553,
      ]),
      I = e([
        26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
        26214, 26214, 26214,
      ]),
      R = e([
        41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099,
        20417, 9344, 11139,
      ]);
    function C(y, x, b, l) {
      (y[x] = (b >> 24) & 255),
        (y[x + 1] = (b >> 16) & 255),
        (y[x + 2] = (b >> 8) & 255),
        (y[x + 3] = b & 255),
        (y[x + 4] = (l >> 24) & 255),
        (y[x + 5] = (l >> 16) & 255),
        (y[x + 6] = (l >> 8) & 255),
        (y[x + 7] = l & 255);
    }
    function j(y, x, b, l, M) {
      var k,
        T = 0;
      for (k = 0; k < M; k++) T |= y[x + k] ^ b[l + k];
      return (1 & ((T - 1) >>> 8)) - 1;
    }
    function ct(y, x, b, l) {
      return j(y, x, b, l, 16);
    }
    function W(y, x, b, l) {
      return j(y, x, b, l, 32);
    }
    function B(y, x, b, l) {
      for (
        var M = (l[0] & 255) | ((l[1] & 255) << 8) | ((l[2] & 255) << 16) | ((l[3] & 255) << 24),
          k = (b[0] & 255) | ((b[1] & 255) << 8) | ((b[2] & 255) << 16) | ((b[3] & 255) << 24),
          T = (b[4] & 255) | ((b[5] & 255) << 8) | ((b[6] & 255) << 16) | ((b[7] & 255) << 24),
          L = (b[8] & 255) | ((b[9] & 255) << 8) | ((b[10] & 255) << 16) | ((b[11] & 255) << 24),
          D = (b[12] & 255) | ((b[13] & 255) << 8) | ((b[14] & 255) << 16) | ((b[15] & 255) << 24),
          lt = (l[4] & 255) | ((l[5] & 255) << 8) | ((l[6] & 255) << 16) | ((l[7] & 255) << 24),
          et = (x[0] & 255) | ((x[1] & 255) << 8) | ((x[2] & 255) << 16) | ((x[3] & 255) << 24),
          ie = (x[4] & 255) | ((x[5] & 255) << 8) | ((x[6] & 255) << 16) | ((x[7] & 255) << 24),
          nt = (x[8] & 255) | ((x[9] & 255) << 8) | ((x[10] & 255) << 16) | ((x[11] & 255) << 24),
          yt = (x[12] & 255) | ((x[13] & 255) << 8) | ((x[14] & 255) << 16) | ((x[15] & 255) << 24),
          wt = (l[8] & 255) | ((l[9] & 255) << 8) | ((l[10] & 255) << 16) | ((l[11] & 255) << 24),
          St = (b[16] & 255) | ((b[17] & 255) << 8) | ((b[18] & 255) << 16) | ((b[19] & 255) << 24),
          _t = (b[20] & 255) | ((b[21] & 255) << 8) | ((b[22] & 255) << 16) | ((b[23] & 255) << 24),
          bt = (b[24] & 255) | ((b[25] & 255) << 8) | ((b[26] & 255) << 16) | ((b[27] & 255) << 24),
          Mt = (b[28] & 255) | ((b[29] & 255) << 8) | ((b[30] & 255) << 16) | ((b[31] & 255) << 24),
          At = (l[12] & 255) | ((l[13] & 255) << 8) | ((l[14] & 255) << 16) | ((l[15] & 255) << 24),
          ot = M,
          dt = k,
          rt = T,
          ft = L,
          ht = D,
          it = lt,
          O = et,
          U = ie,
          Q = nt,
          V = yt,
          J = wt,
          X = St,
          It = _t,
          ae = bt,
          ue = Mt,
          fe = At,
          N,
          le = 0;
        le < 20;
        le += 2
      )
        (N = (ot + It) | 0),
          (ht ^= (N << 7) | (N >>> 25)),
          (N = (ht + ot) | 0),
          (Q ^= (N << 9) | (N >>> 23)),
          (N = (Q + ht) | 0),
          (It ^= (N << 13) | (N >>> 19)),
          (N = (It + Q) | 0),
          (ot ^= (N << 18) | (N >>> 14)),
          (N = (it + dt) | 0),
          (V ^= (N << 7) | (N >>> 25)),
          (N = (V + it) | 0),
          (ae ^= (N << 9) | (N >>> 23)),
          (N = (ae + V) | 0),
          (dt ^= (N << 13) | (N >>> 19)),
          (N = (dt + ae) | 0),
          (it ^= (N << 18) | (N >>> 14)),
          (N = (J + O) | 0),
          (ue ^= (N << 7) | (N >>> 25)),
          (N = (ue + J) | 0),
          (rt ^= (N << 9) | (N >>> 23)),
          (N = (rt + ue) | 0),
          (O ^= (N << 13) | (N >>> 19)),
          (N = (O + rt) | 0),
          (J ^= (N << 18) | (N >>> 14)),
          (N = (fe + X) | 0),
          (ft ^= (N << 7) | (N >>> 25)),
          (N = (ft + fe) | 0),
          (U ^= (N << 9) | (N >>> 23)),
          (N = (U + ft) | 0),
          (X ^= (N << 13) | (N >>> 19)),
          (N = (X + U) | 0),
          (fe ^= (N << 18) | (N >>> 14)),
          (N = (ot + ft) | 0),
          (dt ^= (N << 7) | (N >>> 25)),
          (N = (dt + ot) | 0),
          (rt ^= (N << 9) | (N >>> 23)),
          (N = (rt + dt) | 0),
          (ft ^= (N << 13) | (N >>> 19)),
          (N = (ft + rt) | 0),
          (ot ^= (N << 18) | (N >>> 14)),
          (N = (it + ht) | 0),
          (O ^= (N << 7) | (N >>> 25)),
          (N = (O + it) | 0),
          (U ^= (N << 9) | (N >>> 23)),
          (N = (U + O) | 0),
          (ht ^= (N << 13) | (N >>> 19)),
          (N = (ht + U) | 0),
          (it ^= (N << 18) | (N >>> 14)),
          (N = (J + V) | 0),
          (X ^= (N << 7) | (N >>> 25)),
          (N = (X + J) | 0),
          (Q ^= (N << 9) | (N >>> 23)),
          (N = (Q + X) | 0),
          (V ^= (N << 13) | (N >>> 19)),
          (N = (V + Q) | 0),
          (J ^= (N << 18) | (N >>> 14)),
          (N = (fe + ue) | 0),
          (It ^= (N << 7) | (N >>> 25)),
          (N = (It + fe) | 0),
          (ae ^= (N << 9) | (N >>> 23)),
          (N = (ae + It) | 0),
          (ue ^= (N << 13) | (N >>> 19)),
          (N = (ue + ae) | 0),
          (fe ^= (N << 18) | (N >>> 14));
      (ot = (ot + M) | 0),
        (dt = (dt + k) | 0),
        (rt = (rt + T) | 0),
        (ft = (ft + L) | 0),
        (ht = (ht + D) | 0),
        (it = (it + lt) | 0),
        (O = (O + et) | 0),
        (U = (U + ie) | 0),
        (Q = (Q + nt) | 0),
        (V = (V + yt) | 0),
        (J = (J + wt) | 0),
        (X = (X + St) | 0),
        (It = (It + _t) | 0),
        (ae = (ae + bt) | 0),
        (ue = (ue + Mt) | 0),
        (fe = (fe + At) | 0),
        (y[0] = (ot >>> 0) & 255),
        (y[1] = (ot >>> 8) & 255),
        (y[2] = (ot >>> 16) & 255),
        (y[3] = (ot >>> 24) & 255),
        (y[4] = (dt >>> 0) & 255),
        (y[5] = (dt >>> 8) & 255),
        (y[6] = (dt >>> 16) & 255),
        (y[7] = (dt >>> 24) & 255),
        (y[8] = (rt >>> 0) & 255),
        (y[9] = (rt >>> 8) & 255),
        (y[10] = (rt >>> 16) & 255),
        (y[11] = (rt >>> 24) & 255),
        (y[12] = (ft >>> 0) & 255),
        (y[13] = (ft >>> 8) & 255),
        (y[14] = (ft >>> 16) & 255),
        (y[15] = (ft >>> 24) & 255),
        (y[16] = (ht >>> 0) & 255),
        (y[17] = (ht >>> 8) & 255),
        (y[18] = (ht >>> 16) & 255),
        (y[19] = (ht >>> 24) & 255),
        (y[20] = (it >>> 0) & 255),
        (y[21] = (it >>> 8) & 255),
        (y[22] = (it >>> 16) & 255),
        (y[23] = (it >>> 24) & 255),
        (y[24] = (O >>> 0) & 255),
        (y[25] = (O >>> 8) & 255),
        (y[26] = (O >>> 16) & 255),
        (y[27] = (O >>> 24) & 255),
        (y[28] = (U >>> 0) & 255),
        (y[29] = (U >>> 8) & 255),
        (y[30] = (U >>> 16) & 255),
        (y[31] = (U >>> 24) & 255),
        (y[32] = (Q >>> 0) & 255),
        (y[33] = (Q >>> 8) & 255),
        (y[34] = (Q >>> 16) & 255),
        (y[35] = (Q >>> 24) & 255),
        (y[36] = (V >>> 0) & 255),
        (y[37] = (V >>> 8) & 255),
        (y[38] = (V >>> 16) & 255),
        (y[39] = (V >>> 24) & 255),
        (y[40] = (J >>> 0) & 255),
        (y[41] = (J >>> 8) & 255),
        (y[42] = (J >>> 16) & 255),
        (y[43] = (J >>> 24) & 255),
        (y[44] = (X >>> 0) & 255),
        (y[45] = (X >>> 8) & 255),
        (y[46] = (X >>> 16) & 255),
        (y[47] = (X >>> 24) & 255),
        (y[48] = (It >>> 0) & 255),
        (y[49] = (It >>> 8) & 255),
        (y[50] = (It >>> 16) & 255),
        (y[51] = (It >>> 24) & 255),
        (y[52] = (ae >>> 0) & 255),
        (y[53] = (ae >>> 8) & 255),
        (y[54] = (ae >>> 16) & 255),
        (y[55] = (ae >>> 24) & 255),
        (y[56] = (ue >>> 0) & 255),
        (y[57] = (ue >>> 8) & 255),
        (y[58] = (ue >>> 16) & 255),
        (y[59] = (ue >>> 24) & 255),
        (y[60] = (fe >>> 0) & 255),
        (y[61] = (fe >>> 8) & 255),
        (y[62] = (fe >>> 16) & 255),
        (y[63] = (fe >>> 24) & 255);
    }
    function Z(y, x, b, l) {
      for (
        var M = (l[0] & 255) | ((l[1] & 255) << 8) | ((l[2] & 255) << 16) | ((l[3] & 255) << 24),
          k = (b[0] & 255) | ((b[1] & 255) << 8) | ((b[2] & 255) << 16) | ((b[3] & 255) << 24),
          T = (b[4] & 255) | ((b[5] & 255) << 8) | ((b[6] & 255) << 16) | ((b[7] & 255) << 24),
          L = (b[8] & 255) | ((b[9] & 255) << 8) | ((b[10] & 255) << 16) | ((b[11] & 255) << 24),
          D = (b[12] & 255) | ((b[13] & 255) << 8) | ((b[14] & 255) << 16) | ((b[15] & 255) << 24),
          lt = (l[4] & 255) | ((l[5] & 255) << 8) | ((l[6] & 255) << 16) | ((l[7] & 255) << 24),
          et = (x[0] & 255) | ((x[1] & 255) << 8) | ((x[2] & 255) << 16) | ((x[3] & 255) << 24),
          ie = (x[4] & 255) | ((x[5] & 255) << 8) | ((x[6] & 255) << 16) | ((x[7] & 255) << 24),
          nt = (x[8] & 255) | ((x[9] & 255) << 8) | ((x[10] & 255) << 16) | ((x[11] & 255) << 24),
          yt = (x[12] & 255) | ((x[13] & 255) << 8) | ((x[14] & 255) << 16) | ((x[15] & 255) << 24),
          wt = (l[8] & 255) | ((l[9] & 255) << 8) | ((l[10] & 255) << 16) | ((l[11] & 255) << 24),
          St = (b[16] & 255) | ((b[17] & 255) << 8) | ((b[18] & 255) << 16) | ((b[19] & 255) << 24),
          _t = (b[20] & 255) | ((b[21] & 255) << 8) | ((b[22] & 255) << 16) | ((b[23] & 255) << 24),
          bt = (b[24] & 255) | ((b[25] & 255) << 8) | ((b[26] & 255) << 16) | ((b[27] & 255) << 24),
          Mt = (b[28] & 255) | ((b[29] & 255) << 8) | ((b[30] & 255) << 16) | ((b[31] & 255) << 24),
          At = (l[12] & 255) | ((l[13] & 255) << 8) | ((l[14] & 255) << 16) | ((l[15] & 255) << 24),
          ot = M,
          dt = k,
          rt = T,
          ft = L,
          ht = D,
          it = lt,
          O = et,
          U = ie,
          Q = nt,
          V = yt,
          J = wt,
          X = St,
          It = _t,
          ae = bt,
          ue = Mt,
          fe = At,
          N,
          le = 0;
        le < 20;
        le += 2
      )
        (N = (ot + It) | 0),
          (ht ^= (N << 7) | (N >>> 25)),
          (N = (ht + ot) | 0),
          (Q ^= (N << 9) | (N >>> 23)),
          (N = (Q + ht) | 0),
          (It ^= (N << 13) | (N >>> 19)),
          (N = (It + Q) | 0),
          (ot ^= (N << 18) | (N >>> 14)),
          (N = (it + dt) | 0),
          (V ^= (N << 7) | (N >>> 25)),
          (N = (V + it) | 0),
          (ae ^= (N << 9) | (N >>> 23)),
          (N = (ae + V) | 0),
          (dt ^= (N << 13) | (N >>> 19)),
          (N = (dt + ae) | 0),
          (it ^= (N << 18) | (N >>> 14)),
          (N = (J + O) | 0),
          (ue ^= (N << 7) | (N >>> 25)),
          (N = (ue + J) | 0),
          (rt ^= (N << 9) | (N >>> 23)),
          (N = (rt + ue) | 0),
          (O ^= (N << 13) | (N >>> 19)),
          (N = (O + rt) | 0),
          (J ^= (N << 18) | (N >>> 14)),
          (N = (fe + X) | 0),
          (ft ^= (N << 7) | (N >>> 25)),
          (N = (ft + fe) | 0),
          (U ^= (N << 9) | (N >>> 23)),
          (N = (U + ft) | 0),
          (X ^= (N << 13) | (N >>> 19)),
          (N = (X + U) | 0),
          (fe ^= (N << 18) | (N >>> 14)),
          (N = (ot + ft) | 0),
          (dt ^= (N << 7) | (N >>> 25)),
          (N = (dt + ot) | 0),
          (rt ^= (N << 9) | (N >>> 23)),
          (N = (rt + dt) | 0),
          (ft ^= (N << 13) | (N >>> 19)),
          (N = (ft + rt) | 0),
          (ot ^= (N << 18) | (N >>> 14)),
          (N = (it + ht) | 0),
          (O ^= (N << 7) | (N >>> 25)),
          (N = (O + it) | 0),
          (U ^= (N << 9) | (N >>> 23)),
          (N = (U + O) | 0),
          (ht ^= (N << 13) | (N >>> 19)),
          (N = (ht + U) | 0),
          (it ^= (N << 18) | (N >>> 14)),
          (N = (J + V) | 0),
          (X ^= (N << 7) | (N >>> 25)),
          (N = (X + J) | 0),
          (Q ^= (N << 9) | (N >>> 23)),
          (N = (Q + X) | 0),
          (V ^= (N << 13) | (N >>> 19)),
          (N = (V + Q) | 0),
          (J ^= (N << 18) | (N >>> 14)),
          (N = (fe + ue) | 0),
          (It ^= (N << 7) | (N >>> 25)),
          (N = (It + fe) | 0),
          (ae ^= (N << 9) | (N >>> 23)),
          (N = (ae + It) | 0),
          (ue ^= (N << 13) | (N >>> 19)),
          (N = (ue + ae) | 0),
          (fe ^= (N << 18) | (N >>> 14));
      (y[0] = (ot >>> 0) & 255),
        (y[1] = (ot >>> 8) & 255),
        (y[2] = (ot >>> 16) & 255),
        (y[3] = (ot >>> 24) & 255),
        (y[4] = (it >>> 0) & 255),
        (y[5] = (it >>> 8) & 255),
        (y[6] = (it >>> 16) & 255),
        (y[7] = (it >>> 24) & 255),
        (y[8] = (J >>> 0) & 255),
        (y[9] = (J >>> 8) & 255),
        (y[10] = (J >>> 16) & 255),
        (y[11] = (J >>> 24) & 255),
        (y[12] = (fe >>> 0) & 255),
        (y[13] = (fe >>> 8) & 255),
        (y[14] = (fe >>> 16) & 255),
        (y[15] = (fe >>> 24) & 255),
        (y[16] = (O >>> 0) & 255),
        (y[17] = (O >>> 8) & 255),
        (y[18] = (O >>> 16) & 255),
        (y[19] = (O >>> 24) & 255),
        (y[20] = (U >>> 0) & 255),
        (y[21] = (U >>> 8) & 255),
        (y[22] = (U >>> 16) & 255),
        (y[23] = (U >>> 24) & 255),
        (y[24] = (Q >>> 0) & 255),
        (y[25] = (Q >>> 8) & 255),
        (y[26] = (Q >>> 16) & 255),
        (y[27] = (Q >>> 24) & 255),
        (y[28] = (V >>> 0) & 255),
        (y[29] = (V >>> 8) & 255),
        (y[30] = (V >>> 16) & 255),
        (y[31] = (V >>> 24) & 255);
    }
    function Y(y, x, b, l) {
      B(y, x, b, l);
    }
    function tt(y, x, b, l) {
      Z(y, x, b, l);
    }
    var xt = new Uint8Array([
      101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107,
    ]);
    function se(y, x, b, l, M, k, T) {
      var L = new Uint8Array(16),
        D = new Uint8Array(64),
        lt,
        et;
      for (et = 0; et < 16; et++) L[et] = 0;
      for (et = 0; et < 8; et++) L[et] = k[et];
      for (; M >= 64; ) {
        for (Y(D, L, T, xt), et = 0; et < 64; et++) y[x + et] = b[l + et] ^ D[et];
        for (lt = 1, et = 8; et < 16; et++)
          (lt = (lt + (L[et] & 255)) | 0), (L[et] = lt & 255), (lt >>>= 8);
        (M -= 64), (x += 64), (l += 64);
      }
      if (M > 0) for (Y(D, L, T, xt), et = 0; et < M; et++) y[x + et] = b[l + et] ^ D[et];
      return 0;
    }
    function de(y, x, b, l, M) {
      var k = new Uint8Array(16),
        T = new Uint8Array(64),
        L,
        D;
      for (D = 0; D < 16; D++) k[D] = 0;
      for (D = 0; D < 8; D++) k[D] = l[D];
      for (; b >= 64; ) {
        for (Y(T, k, M, xt), D = 0; D < 64; D++) y[x + D] = T[D];
        for (L = 1, D = 8; D < 16; D++) (L = (L + (k[D] & 255)) | 0), (k[D] = L & 255), (L >>>= 8);
        (b -= 64), (x += 64);
      }
      if (b > 0) for (Y(T, k, M, xt), D = 0; D < b; D++) y[x + D] = T[D];
      return 0;
    }
    function at(y, x, b, l, M) {
      var k = new Uint8Array(32);
      tt(k, l, M, xt);
      for (var T = new Uint8Array(8), L = 0; L < 8; L++) T[L] = l[L + 16];
      return de(y, x, b, T, k);
    }
    function be(y, x, b, l, M, k, T) {
      var L = new Uint8Array(32);
      tt(L, k, T, xt);
      for (var D = new Uint8Array(8), lt = 0; lt < 8; lt++) D[lt] = k[lt + 16];
      return se(y, x, b, l, M, D, L);
    }
    var w = function (y) {
      (this.buffer = new Uint8Array(16)),
        (this.r = new Uint16Array(10)),
        (this.h = new Uint16Array(10)),
        (this.pad = new Uint16Array(8)),
        (this.leftover = 0),
        (this.fin = 0);
      var x, b, l, M, k, T, L, D;
      (x = (y[0] & 255) | ((y[1] & 255) << 8)),
        (this.r[0] = x & 8191),
        (b = (y[2] & 255) | ((y[3] & 255) << 8)),
        (this.r[1] = ((x >>> 13) | (b << 3)) & 8191),
        (l = (y[4] & 255) | ((y[5] & 255) << 8)),
        (this.r[2] = ((b >>> 10) | (l << 6)) & 7939),
        (M = (y[6] & 255) | ((y[7] & 255) << 8)),
        (this.r[3] = ((l >>> 7) | (M << 9)) & 8191),
        (k = (y[8] & 255) | ((y[9] & 255) << 8)),
        (this.r[4] = ((M >>> 4) | (k << 12)) & 255),
        (this.r[5] = (k >>> 1) & 8190),
        (T = (y[10] & 255) | ((y[11] & 255) << 8)),
        (this.r[6] = ((k >>> 14) | (T << 2)) & 8191),
        (L = (y[12] & 255) | ((y[13] & 255) << 8)),
        (this.r[7] = ((T >>> 11) | (L << 5)) & 8065),
        (D = (y[14] & 255) | ((y[15] & 255) << 8)),
        (this.r[8] = ((L >>> 8) | (D << 8)) & 8191),
        (this.r[9] = (D >>> 5) & 127),
        (this.pad[0] = (y[16] & 255) | ((y[17] & 255) << 8)),
        (this.pad[1] = (y[18] & 255) | ((y[19] & 255) << 8)),
        (this.pad[2] = (y[20] & 255) | ((y[21] & 255) << 8)),
        (this.pad[3] = (y[22] & 255) | ((y[23] & 255) << 8)),
        (this.pad[4] = (y[24] & 255) | ((y[25] & 255) << 8)),
        (this.pad[5] = (y[26] & 255) | ((y[27] & 255) << 8)),
        (this.pad[6] = (y[28] & 255) | ((y[29] & 255) << 8)),
        (this.pad[7] = (y[30] & 255) | ((y[31] & 255) << 8));
    };
    (w.prototype.blocks = function (y, x, b) {
      for (
        var l = this.fin ? 0 : 2048,
          M,
          k,
          T,
          L,
          D,
          lt,
          et,
          ie,
          nt,
          yt,
          wt,
          St,
          _t,
          bt,
          Mt,
          At,
          ot,
          dt,
          rt,
          ft = this.h[0],
          ht = this.h[1],
          it = this.h[2],
          O = this.h[3],
          U = this.h[4],
          Q = this.h[5],
          V = this.h[6],
          J = this.h[7],
          X = this.h[8],
          It = this.h[9],
          ae = this.r[0],
          ue = this.r[1],
          fe = this.r[2],
          N = this.r[3],
          le = this.r[4],
          Ae = this.r[5],
          xe = this.r[6],
          he = this.r[7],
          ve = this.r[8],
          ye = this.r[9];
        b >= 16;

      )
        (M = (y[x + 0] & 255) | ((y[x + 1] & 255) << 8)),
          (ft += M & 8191),
          (k = (y[x + 2] & 255) | ((y[x + 3] & 255) << 8)),
          (ht += ((M >>> 13) | (k << 3)) & 8191),
          (T = (y[x + 4] & 255) | ((y[x + 5] & 255) << 8)),
          (it += ((k >>> 10) | (T << 6)) & 8191),
          (L = (y[x + 6] & 255) | ((y[x + 7] & 255) << 8)),
          (O += ((T >>> 7) | (L << 9)) & 8191),
          (D = (y[x + 8] & 255) | ((y[x + 9] & 255) << 8)),
          (U += ((L >>> 4) | (D << 12)) & 8191),
          (Q += (D >>> 1) & 8191),
          (lt = (y[x + 10] & 255) | ((y[x + 11] & 255) << 8)),
          (V += ((D >>> 14) | (lt << 2)) & 8191),
          (et = (y[x + 12] & 255) | ((y[x + 13] & 255) << 8)),
          (J += ((lt >>> 11) | (et << 5)) & 8191),
          (ie = (y[x + 14] & 255) | ((y[x + 15] & 255) << 8)),
          (X += ((et >>> 8) | (ie << 8)) & 8191),
          (It += (ie >>> 5) | l),
          (nt = 0),
          (yt = nt),
          (yt += ft * ae),
          (yt += ht * (5 * ye)),
          (yt += it * (5 * ve)),
          (yt += O * (5 * he)),
          (yt += U * (5 * xe)),
          (nt = yt >>> 13),
          (yt &= 8191),
          (yt += Q * (5 * Ae)),
          (yt += V * (5 * le)),
          (yt += J * (5 * N)),
          (yt += X * (5 * fe)),
          (yt += It * (5 * ue)),
          (nt += yt >>> 13),
          (yt &= 8191),
          (wt = nt),
          (wt += ft * ue),
          (wt += ht * ae),
          (wt += it * (5 * ye)),
          (wt += O * (5 * ve)),
          (wt += U * (5 * he)),
          (nt = wt >>> 13),
          (wt &= 8191),
          (wt += Q * (5 * xe)),
          (wt += V * (5 * Ae)),
          (wt += J * (5 * le)),
          (wt += X * (5 * N)),
          (wt += It * (5 * fe)),
          (nt += wt >>> 13),
          (wt &= 8191),
          (St = nt),
          (St += ft * fe),
          (St += ht * ue),
          (St += it * ae),
          (St += O * (5 * ye)),
          (St += U * (5 * ve)),
          (nt = St >>> 13),
          (St &= 8191),
          (St += Q * (5 * he)),
          (St += V * (5 * xe)),
          (St += J * (5 * Ae)),
          (St += X * (5 * le)),
          (St += It * (5 * N)),
          (nt += St >>> 13),
          (St &= 8191),
          (_t = nt),
          (_t += ft * N),
          (_t += ht * fe),
          (_t += it * ue),
          (_t += O * ae),
          (_t += U * (5 * ye)),
          (nt = _t >>> 13),
          (_t &= 8191),
          (_t += Q * (5 * ve)),
          (_t += V * (5 * he)),
          (_t += J * (5 * xe)),
          (_t += X * (5 * Ae)),
          (_t += It * (5 * le)),
          (nt += _t >>> 13),
          (_t &= 8191),
          (bt = nt),
          (bt += ft * le),
          (bt += ht * N),
          (bt += it * fe),
          (bt += O * ue),
          (bt += U * ae),
          (nt = bt >>> 13),
          (bt &= 8191),
          (bt += Q * (5 * ye)),
          (bt += V * (5 * ve)),
          (bt += J * (5 * he)),
          (bt += X * (5 * xe)),
          (bt += It * (5 * Ae)),
          (nt += bt >>> 13),
          (bt &= 8191),
          (Mt = nt),
          (Mt += ft * Ae),
          (Mt += ht * le),
          (Mt += it * N),
          (Mt += O * fe),
          (Mt += U * ue),
          (nt = Mt >>> 13),
          (Mt &= 8191),
          (Mt += Q * ae),
          (Mt += V * (5 * ye)),
          (Mt += J * (5 * ve)),
          (Mt += X * (5 * he)),
          (Mt += It * (5 * xe)),
          (nt += Mt >>> 13),
          (Mt &= 8191),
          (At = nt),
          (At += ft * xe),
          (At += ht * Ae),
          (At += it * le),
          (At += O * N),
          (At += U * fe),
          (nt = At >>> 13),
          (At &= 8191),
          (At += Q * ue),
          (At += V * ae),
          (At += J * (5 * ye)),
          (At += X * (5 * ve)),
          (At += It * (5 * he)),
          (nt += At >>> 13),
          (At &= 8191),
          (ot = nt),
          (ot += ft * he),
          (ot += ht * xe),
          (ot += it * Ae),
          (ot += O * le),
          (ot += U * N),
          (nt = ot >>> 13),
          (ot &= 8191),
          (ot += Q * fe),
          (ot += V * ue),
          (ot += J * ae),
          (ot += X * (5 * ye)),
          (ot += It * (5 * ve)),
          (nt += ot >>> 13),
          (ot &= 8191),
          (dt = nt),
          (dt += ft * ve),
          (dt += ht * he),
          (dt += it * xe),
          (dt += O * Ae),
          (dt += U * le),
          (nt = dt >>> 13),
          (dt &= 8191),
          (dt += Q * N),
          (dt += V * fe),
          (dt += J * ue),
          (dt += X * ae),
          (dt += It * (5 * ye)),
          (nt += dt >>> 13),
          (dt &= 8191),
          (rt = nt),
          (rt += ft * ye),
          (rt += ht * ve),
          (rt += it * he),
          (rt += O * xe),
          (rt += U * Ae),
          (nt = rt >>> 13),
          (rt &= 8191),
          (rt += Q * le),
          (rt += V * N),
          (rt += J * fe),
          (rt += X * ue),
          (rt += It * ae),
          (nt += rt >>> 13),
          (rt &= 8191),
          (nt = ((nt << 2) + nt) | 0),
          (nt = (nt + yt) | 0),
          (yt = nt & 8191),
          (nt = nt >>> 13),
          (wt += nt),
          (ft = yt),
          (ht = wt),
          (it = St),
          (O = _t),
          (U = bt),
          (Q = Mt),
          (V = At),
          (J = ot),
          (X = dt),
          (It = rt),
          (x += 16),
          (b -= 16);
      (this.h[0] = ft),
        (this.h[1] = ht),
        (this.h[2] = it),
        (this.h[3] = O),
        (this.h[4] = U),
        (this.h[5] = Q),
        (this.h[6] = V),
        (this.h[7] = J),
        (this.h[8] = X),
        (this.h[9] = It);
    }),
      (w.prototype.finish = function (y, x) {
        var b = new Uint16Array(10),
          l,
          M,
          k,
          T;
        if (this.leftover) {
          for (T = this.leftover, this.buffer[T++] = 1; T < 16; T++) this.buffer[T] = 0;
          (this.fin = 1), this.blocks(this.buffer, 0, 16);
        }
        for (l = this.h[1] >>> 13, this.h[1] &= 8191, T = 2; T < 10; T++)
          (this.h[T] += l), (l = this.h[T] >>> 13), (this.h[T] &= 8191);
        for (
          this.h[0] += l * 5,
            l = this.h[0] >>> 13,
            this.h[0] &= 8191,
            this.h[1] += l,
            l = this.h[1] >>> 13,
            this.h[1] &= 8191,
            this.h[2] += l,
            b[0] = this.h[0] + 5,
            l = b[0] >>> 13,
            b[0] &= 8191,
            T = 1;
          T < 10;
          T++
        )
          (b[T] = this.h[T] + l), (l = b[T] >>> 13), (b[T] &= 8191);
        for (b[9] -= 8192, M = (l ^ 1) - 1, T = 0; T < 10; T++) b[T] &= M;
        for (M = ~M, T = 0; T < 10; T++) this.h[T] = (this.h[T] & M) | b[T];
        for (
          this.h[0] = (this.h[0] | (this.h[1] << 13)) & 65535,
            this.h[1] = ((this.h[1] >>> 3) | (this.h[2] << 10)) & 65535,
            this.h[2] = ((this.h[2] >>> 6) | (this.h[3] << 7)) & 65535,
            this.h[3] = ((this.h[3] >>> 9) | (this.h[4] << 4)) & 65535,
            this.h[4] = ((this.h[4] >>> 12) | (this.h[5] << 1) | (this.h[6] << 14)) & 65535,
            this.h[5] = ((this.h[6] >>> 2) | (this.h[7] << 11)) & 65535,
            this.h[6] = ((this.h[7] >>> 5) | (this.h[8] << 8)) & 65535,
            this.h[7] = ((this.h[8] >>> 8) | (this.h[9] << 5)) & 65535,
            k = this.h[0] + this.pad[0],
            this.h[0] = k & 65535,
            T = 1;
          T < 8;
          T++
        )
          (k = (((this.h[T] + this.pad[T]) | 0) + (k >>> 16)) | 0), (this.h[T] = k & 65535);
        (y[x + 0] = (this.h[0] >>> 0) & 255),
          (y[x + 1] = (this.h[0] >>> 8) & 255),
          (y[x + 2] = (this.h[1] >>> 0) & 255),
          (y[x + 3] = (this.h[1] >>> 8) & 255),
          (y[x + 4] = (this.h[2] >>> 0) & 255),
          (y[x + 5] = (this.h[2] >>> 8) & 255),
          (y[x + 6] = (this.h[3] >>> 0) & 255),
          (y[x + 7] = (this.h[3] >>> 8) & 255),
          (y[x + 8] = (this.h[4] >>> 0) & 255),
          (y[x + 9] = (this.h[4] >>> 8) & 255),
          (y[x + 10] = (this.h[5] >>> 0) & 255),
          (y[x + 11] = (this.h[5] >>> 8) & 255),
          (y[x + 12] = (this.h[6] >>> 0) & 255),
          (y[x + 13] = (this.h[6] >>> 8) & 255),
          (y[x + 14] = (this.h[7] >>> 0) & 255),
          (y[x + 15] = (this.h[7] >>> 8) & 255);
      }),
      (w.prototype.update = function (y, x, b) {
        var l, M;
        if (this.leftover) {
          for (M = 16 - this.leftover, M > b && (M = b), l = 0; l < M; l++)
            this.buffer[this.leftover + l] = y[x + l];
          if (((b -= M), (x += M), (this.leftover += M), this.leftover < 16)) return;
          this.blocks(this.buffer, 0, 16), (this.leftover = 0);
        }
        if ((b >= 16 && ((M = b - (b % 16)), this.blocks(y, x, M), (x += M), (b -= M)), b)) {
          for (l = 0; l < b; l++) this.buffer[this.leftover + l] = y[x + l];
          this.leftover += b;
        }
      });
    function o(y, x, b, l, M, k) {
      var T = new w(k);
      return T.update(b, l, M), T.finish(y, x), 0;
    }
    function f(y, x, b, l, M, k) {
      var T = new Uint8Array(16);
      return o(T, 0, b, l, M, k), ct(y, x, T, 0);
    }
    function h(y, x, b, l, M) {
      var k;
      if (b < 32) return -1;
      for (be(y, 0, x, 0, b, l, M), o(y, 16, y, 32, b - 32, y), k = 0; k < 16; k++) y[k] = 0;
      return 0;
    }
    function c(y, x, b, l, M) {
      var k,
        T = new Uint8Array(32);
      if (b < 32 || (at(T, 0, 32, l, M), f(x, 16, x, 32, b - 32, T) !== 0)) return -1;
      for (be(y, 0, x, 0, b, l, M), k = 0; k < 32; k++) y[k] = 0;
      return 0;
    }
    function p(y, x) {
      var b;
      for (b = 0; b < 16; b++) y[b] = x[b] | 0;
    }
    function A(y) {
      var x,
        b,
        l = 1;
      for (x = 0; x < 16; x++)
        (b = y[x] + l + 65535), (l = Math.floor(b / 65536)), (y[x] = b - l * 65536);
      y[0] += l - 1 + 37 * (l - 1);
    }
    function _(y, x, b) {
      for (var l, M = ~(b - 1), k = 0; k < 16; k++)
        (l = M & (y[k] ^ x[k])), (y[k] ^= l), (x[k] ^= l);
    }
    function g(y, x) {
      var b,
        l,
        M,
        k = e(),
        T = e();
      for (b = 0; b < 16; b++) T[b] = x[b];
      for (A(T), A(T), A(T), l = 0; l < 2; l++) {
        for (k[0] = T[0] - 65517, b = 1; b < 15; b++)
          (k[b] = T[b] - 65535 - ((k[b - 1] >> 16) & 1)), (k[b - 1] &= 65535);
        (k[15] = T[15] - 32767 - ((k[14] >> 16) & 1)),
          (M = (k[15] >> 16) & 1),
          (k[14] &= 65535),
          _(T, k, 1 - M);
      }
      for (b = 0; b < 16; b++) (y[2 * b] = T[b] & 255), (y[2 * b + 1] = T[b] >> 8);
    }
    function a(y, x) {
      var b = new Uint8Array(32),
        l = new Uint8Array(32);
      return g(b, y), g(l, x), W(b, 0, l, 0);
    }
    function m(y) {
      var x = new Uint8Array(32);
      return g(x, y), x[0] & 1;
    }
    function q(y, x) {
      var b;
      for (b = 0; b < 16; b++) y[b] = x[2 * b] + (x[2 * b + 1] << 8);
      y[15] &= 32767;
    }
    function K(y, x, b) {
      for (var l = 0; l < 16; l++) y[l] = x[l] + b[l];
    }
    function H(y, x, b) {
      for (var l = 0; l < 16; l++) y[l] = x[l] - b[l];
    }
    function G(y, x, b) {
      var l,
        M,
        k = 0,
        T = 0,
        L = 0,
        D = 0,
        lt = 0,
        et = 0,
        ie = 0,
        nt = 0,
        yt = 0,
        wt = 0,
        St = 0,
        _t = 0,
        bt = 0,
        Mt = 0,
        At = 0,
        ot = 0,
        dt = 0,
        rt = 0,
        ft = 0,
        ht = 0,
        it = 0,
        O = 0,
        U = 0,
        Q = 0,
        V = 0,
        J = 0,
        X = 0,
        It = 0,
        ae = 0,
        ue = 0,
        fe = 0,
        N = b[0],
        le = b[1],
        Ae = b[2],
        xe = b[3],
        he = b[4],
        ve = b[5],
        ye = b[6],
        Oe = b[7],
        _e = b[8],
        Re = b[9],
        Ce = b[10],
        Le = b[11],
        Fe = b[12],
        Xe = b[13],
        $e = b[14],
        tr = b[15];
      (l = x[0]),
        (k += l * N),
        (T += l * le),
        (L += l * Ae),
        (D += l * xe),
        (lt += l * he),
        (et += l * ve),
        (ie += l * ye),
        (nt += l * Oe),
        (yt += l * _e),
        (wt += l * Re),
        (St += l * Ce),
        (_t += l * Le),
        (bt += l * Fe),
        (Mt += l * Xe),
        (At += l * $e),
        (ot += l * tr),
        (l = x[1]),
        (T += l * N),
        (L += l * le),
        (D += l * Ae),
        (lt += l * xe),
        (et += l * he),
        (ie += l * ve),
        (nt += l * ye),
        (yt += l * Oe),
        (wt += l * _e),
        (St += l * Re),
        (_t += l * Ce),
        (bt += l * Le),
        (Mt += l * Fe),
        (At += l * Xe),
        (ot += l * $e),
        (dt += l * tr),
        (l = x[2]),
        (L += l * N),
        (D += l * le),
        (lt += l * Ae),
        (et += l * xe),
        (ie += l * he),
        (nt += l * ve),
        (yt += l * ye),
        (wt += l * Oe),
        (St += l * _e),
        (_t += l * Re),
        (bt += l * Ce),
        (Mt += l * Le),
        (At += l * Fe),
        (ot += l * Xe),
        (dt += l * $e),
        (rt += l * tr),
        (l = x[3]),
        (D += l * N),
        (lt += l * le),
        (et += l * Ae),
        (ie += l * xe),
        (nt += l * he),
        (yt += l * ve),
        (wt += l * ye),
        (St += l * Oe),
        (_t += l * _e),
        (bt += l * Re),
        (Mt += l * Ce),
        (At += l * Le),
        (ot += l * Fe),
        (dt += l * Xe),
        (rt += l * $e),
        (ft += l * tr),
        (l = x[4]),
        (lt += l * N),
        (et += l * le),
        (ie += l * Ae),
        (nt += l * xe),
        (yt += l * he),
        (wt += l * ve),
        (St += l * ye),
        (_t += l * Oe),
        (bt += l * _e),
        (Mt += l * Re),
        (At += l * Ce),
        (ot += l * Le),
        (dt += l * Fe),
        (rt += l * Xe),
        (ft += l * $e),
        (ht += l * tr),
        (l = x[5]),
        (et += l * N),
        (ie += l * le),
        (nt += l * Ae),
        (yt += l * xe),
        (wt += l * he),
        (St += l * ve),
        (_t += l * ye),
        (bt += l * Oe),
        (Mt += l * _e),
        (At += l * Re),
        (ot += l * Ce),
        (dt += l * Le),
        (rt += l * Fe),
        (ft += l * Xe),
        (ht += l * $e),
        (it += l * tr),
        (l = x[6]),
        (ie += l * N),
        (nt += l * le),
        (yt += l * Ae),
        (wt += l * xe),
        (St += l * he),
        (_t += l * ve),
        (bt += l * ye),
        (Mt += l * Oe),
        (At += l * _e),
        (ot += l * Re),
        (dt += l * Ce),
        (rt += l * Le),
        (ft += l * Fe),
        (ht += l * Xe),
        (it += l * $e),
        (O += l * tr),
        (l = x[7]),
        (nt += l * N),
        (yt += l * le),
        (wt += l * Ae),
        (St += l * xe),
        (_t += l * he),
        (bt += l * ve),
        (Mt += l * ye),
        (At += l * Oe),
        (ot += l * _e),
        (dt += l * Re),
        (rt += l * Ce),
        (ft += l * Le),
        (ht += l * Fe),
        (it += l * Xe),
        (O += l * $e),
        (U += l * tr),
        (l = x[8]),
        (yt += l * N),
        (wt += l * le),
        (St += l * Ae),
        (_t += l * xe),
        (bt += l * he),
        (Mt += l * ve),
        (At += l * ye),
        (ot += l * Oe),
        (dt += l * _e),
        (rt += l * Re),
        (ft += l * Ce),
        (ht += l * Le),
        (it += l * Fe),
        (O += l * Xe),
        (U += l * $e),
        (Q += l * tr),
        (l = x[9]),
        (wt += l * N),
        (St += l * le),
        (_t += l * Ae),
        (bt += l * xe),
        (Mt += l * he),
        (At += l * ve),
        (ot += l * ye),
        (dt += l * Oe),
        (rt += l * _e),
        (ft += l * Re),
        (ht += l * Ce),
        (it += l * Le),
        (O += l * Fe),
        (U += l * Xe),
        (Q += l * $e),
        (V += l * tr),
        (l = x[10]),
        (St += l * N),
        (_t += l * le),
        (bt += l * Ae),
        (Mt += l * xe),
        (At += l * he),
        (ot += l * ve),
        (dt += l * ye),
        (rt += l * Oe),
        (ft += l * _e),
        (ht += l * Re),
        (it += l * Ce),
        (O += l * Le),
        (U += l * Fe),
        (Q += l * Xe),
        (V += l * $e),
        (J += l * tr),
        (l = x[11]),
        (_t += l * N),
        (bt += l * le),
        (Mt += l * Ae),
        (At += l * xe),
        (ot += l * he),
        (dt += l * ve),
        (rt += l * ye),
        (ft += l * Oe),
        (ht += l * _e),
        (it += l * Re),
        (O += l * Ce),
        (U += l * Le),
        (Q += l * Fe),
        (V += l * Xe),
        (J += l * $e),
        (X += l * tr),
        (l = x[12]),
        (bt += l * N),
        (Mt += l * le),
        (At += l * Ae),
        (ot += l * xe),
        (dt += l * he),
        (rt += l * ve),
        (ft += l * ye),
        (ht += l * Oe),
        (it += l * _e),
        (O += l * Re),
        (U += l * Ce),
        (Q += l * Le),
        (V += l * Fe),
        (J += l * Xe),
        (X += l * $e),
        (It += l * tr),
        (l = x[13]),
        (Mt += l * N),
        (At += l * le),
        (ot += l * Ae),
        (dt += l * xe),
        (rt += l * he),
        (ft += l * ve),
        (ht += l * ye),
        (it += l * Oe),
        (O += l * _e),
        (U += l * Re),
        (Q += l * Ce),
        (V += l * Le),
        (J += l * Fe),
        (X += l * Xe),
        (It += l * $e),
        (ae += l * tr),
        (l = x[14]),
        (At += l * N),
        (ot += l * le),
        (dt += l * Ae),
        (rt += l * xe),
        (ft += l * he),
        (ht += l * ve),
        (it += l * ye),
        (O += l * Oe),
        (U += l * _e),
        (Q += l * Re),
        (V += l * Ce),
        (J += l * Le),
        (X += l * Fe),
        (It += l * Xe),
        (ae += l * $e),
        (ue += l * tr),
        (l = x[15]),
        (ot += l * N),
        (dt += l * le),
        (rt += l * Ae),
        (ft += l * xe),
        (ht += l * he),
        (it += l * ve),
        (O += l * ye),
        (U += l * Oe),
        (Q += l * _e),
        (V += l * Re),
        (J += l * Ce),
        (X += l * Le),
        (It += l * Fe),
        (ae += l * Xe),
        (ue += l * $e),
        (fe += l * tr),
        (k += 38 * dt),
        (T += 38 * rt),
        (L += 38 * ft),
        (D += 38 * ht),
        (lt += 38 * it),
        (et += 38 * O),
        (ie += 38 * U),
        (nt += 38 * Q),
        (yt += 38 * V),
        (wt += 38 * J),
        (St += 38 * X),
        (_t += 38 * It),
        (bt += 38 * ae),
        (Mt += 38 * ue),
        (At += 38 * fe),
        (M = 1),
        (l = k + M + 65535),
        (M = Math.floor(l / 65536)),
        (k = l - M * 65536),
        (l = T + M + 65535),
        (M = Math.floor(l / 65536)),
        (T = l - M * 65536),
        (l = L + M + 65535),
        (M = Math.floor(l / 65536)),
        (L = l - M * 65536),
        (l = D + M + 65535),
        (M = Math.floor(l / 65536)),
        (D = l - M * 65536),
        (l = lt + M + 65535),
        (M = Math.floor(l / 65536)),
        (lt = l - M * 65536),
        (l = et + M + 65535),
        (M = Math.floor(l / 65536)),
        (et = l - M * 65536),
        (l = ie + M + 65535),
        (M = Math.floor(l / 65536)),
        (ie = l - M * 65536),
        (l = nt + M + 65535),
        (M = Math.floor(l / 65536)),
        (nt = l - M * 65536),
        (l = yt + M + 65535),
        (M = Math.floor(l / 65536)),
        (yt = l - M * 65536),
        (l = wt + M + 65535),
        (M = Math.floor(l / 65536)),
        (wt = l - M * 65536),
        (l = St + M + 65535),
        (M = Math.floor(l / 65536)),
        (St = l - M * 65536),
        (l = _t + M + 65535),
        (M = Math.floor(l / 65536)),
        (_t = l - M * 65536),
        (l = bt + M + 65535),
        (M = Math.floor(l / 65536)),
        (bt = l - M * 65536),
        (l = Mt + M + 65535),
        (M = Math.floor(l / 65536)),
        (Mt = l - M * 65536),
        (l = At + M + 65535),
        (M = Math.floor(l / 65536)),
        (At = l - M * 65536),
        (l = ot + M + 65535),
        (M = Math.floor(l / 65536)),
        (ot = l - M * 65536),
        (k += M - 1 + 37 * (M - 1)),
        (M = 1),
        (l = k + M + 65535),
        (M = Math.floor(l / 65536)),
        (k = l - M * 65536),
        (l = T + M + 65535),
        (M = Math.floor(l / 65536)),
        (T = l - M * 65536),
        (l = L + M + 65535),
        (M = Math.floor(l / 65536)),
        (L = l - M * 65536),
        (l = D + M + 65535),
        (M = Math.floor(l / 65536)),
        (D = l - M * 65536),
        (l = lt + M + 65535),
        (M = Math.floor(l / 65536)),
        (lt = l - M * 65536),
        (l = et + M + 65535),
        (M = Math.floor(l / 65536)),
        (et = l - M * 65536),
        (l = ie + M + 65535),
        (M = Math.floor(l / 65536)),
        (ie = l - M * 65536),
        (l = nt + M + 65535),
        (M = Math.floor(l / 65536)),
        (nt = l - M * 65536),
        (l = yt + M + 65535),
        (M = Math.floor(l / 65536)),
        (yt = l - M * 65536),
        (l = wt + M + 65535),
        (M = Math.floor(l / 65536)),
        (wt = l - M * 65536),
        (l = St + M + 65535),
        (M = Math.floor(l / 65536)),
        (St = l - M * 65536),
        (l = _t + M + 65535),
        (M = Math.floor(l / 65536)),
        (_t = l - M * 65536),
        (l = bt + M + 65535),
        (M = Math.floor(l / 65536)),
        (bt = l - M * 65536),
        (l = Mt + M + 65535),
        (M = Math.floor(l / 65536)),
        (Mt = l - M * 65536),
        (l = At + M + 65535),
        (M = Math.floor(l / 65536)),
        (At = l - M * 65536),
        (l = ot + M + 65535),
        (M = Math.floor(l / 65536)),
        (ot = l - M * 65536),
        (k += M - 1 + 37 * (M - 1)),
        (y[0] = k),
        (y[1] = T),
        (y[2] = L),
        (y[3] = D),
        (y[4] = lt),
        (y[5] = et),
        (y[6] = ie),
        (y[7] = nt),
        (y[8] = yt),
        (y[9] = wt),
        (y[10] = St),
        (y[11] = _t),
        (y[12] = bt),
        (y[13] = Mt),
        (y[14] = At),
        (y[15] = ot);
    }
    function st(y, x) {
      G(y, x, x);
    }
    function mt(y, x) {
      var b = e(),
        l;
      for (l = 0; l < 16; l++) b[l] = x[l];
      for (l = 253; l >= 0; l--) st(b, b), l !== 2 && l !== 4 && G(b, b, x);
      for (l = 0; l < 16; l++) y[l] = b[l];
    }
    function Ne(y, x) {
      var b = e(),
        l;
      for (l = 0; l < 16; l++) b[l] = x[l];
      for (l = 250; l >= 0; l--) st(b, b), l !== 1 && G(b, b, x);
      for (l = 0; l < 16; l++) y[l] = b[l];
    }
    function pt(y, x, b) {
      var l = new Uint8Array(32),
        M = new Float64Array(80),
        k,
        T,
        L = e(),
        D = e(),
        lt = e(),
        et = e(),
        ie = e(),
        nt = e();
      for (T = 0; T < 31; T++) l[T] = x[T];
      for (l[31] = (x[31] & 127) | 64, l[0] &= 248, q(M, b), T = 0; T < 16; T++)
        (D[T] = M[T]), (et[T] = L[T] = lt[T] = 0);
      for (L[0] = et[0] = 1, T = 254; T >= 0; --T)
        (k = (l[T >>> 3] >>> (T & 7)) & 1),
          _(L, D, k),
          _(lt, et, k),
          K(ie, L, lt),
          H(L, L, lt),
          K(lt, D, et),
          H(D, D, et),
          st(et, ie),
          st(nt, L),
          G(L, lt, L),
          G(lt, D, ie),
          K(ie, L, lt),
          H(L, L, lt),
          st(D, L),
          H(lt, et, nt),
          G(L, lt, v),
          K(L, L, et),
          G(lt, lt, L),
          G(L, et, nt),
          G(et, D, M),
          st(D, ie),
          _(L, D, k),
          _(lt, et, k);
      for (T = 0; T < 16; T++)
        (M[T + 16] = L[T]), (M[T + 32] = lt[T]), (M[T + 48] = D[T]), (M[T + 64] = et[T]);
      var yt = M.subarray(32),
        wt = M.subarray(16);
      return mt(yt, yt), G(wt, wt, yt), g(y, wt), 0;
    }
    function Et(y, x) {
      return pt(y, x, s);
    }
    function Ir(y, x) {
      return i(x, 32), Et(y, x);
    }
    function Ot(y, x, b) {
      var l = new Uint8Array(32);
      return pt(l, b, x), tt(y, n, l, xt);
    }
    var Jt = h,
      zr = c;
    function te(y, x, b, l, M, k) {
      var T = new Uint8Array(32);
      return Ot(T, M, k), Jt(y, x, b, l, T);
    }
    function ee(y, x, b, l, M, k) {
      var T = new Uint8Array(32);
      return Ot(T, M, k), zr(y, x, b, l, T);
    }
    var Br = [
      1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548,
      961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560,
      3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
      1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868,
      3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933,
      770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
      2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956,
      3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936,
      666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
      1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627,
      2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008,
      3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
      430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280,
      958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899,
      1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
      2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427,
      3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992,
      116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
      685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676,
      1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591,
    ];
    function Yt(y, x, b, l) {
      for (
        var M = new Int32Array(16),
          k = new Int32Array(16),
          T,
          L,
          D,
          lt,
          et,
          ie,
          nt,
          yt,
          wt,
          St,
          _t,
          bt,
          Mt,
          At,
          ot,
          dt,
          rt,
          ft,
          ht,
          it,
          O,
          U,
          Q,
          V,
          J,
          X,
          It = y[0],
          ae = y[1],
          ue = y[2],
          fe = y[3],
          N = y[4],
          le = y[5],
          Ae = y[6],
          xe = y[7],
          he = x[0],
          ve = x[1],
          ye = x[2],
          Oe = x[3],
          _e = x[4],
          Re = x[5],
          Ce = x[6],
          Le = x[7],
          Fe = 0;
        l >= 128;

      ) {
        for (ht = 0; ht < 16; ht++)
          (it = 8 * ht + Fe),
            (M[ht] = (b[it + 0] << 24) | (b[it + 1] << 16) | (b[it + 2] << 8) | b[it + 3]),
            (k[ht] = (b[it + 4] << 24) | (b[it + 5] << 16) | (b[it + 6] << 8) | b[it + 7]);
        for (ht = 0; ht < 80; ht++)
          if (
            ((T = It),
            (L = ae),
            (D = ue),
            (lt = fe),
            (et = N),
            (ie = le),
            (nt = Ae),
            (yt = xe),
            (wt = he),
            (St = ve),
            (_t = ye),
            (bt = Oe),
            (Mt = _e),
            (At = Re),
            (ot = Ce),
            (dt = Le),
            (O = xe),
            (U = Le),
            (Q = U & 65535),
            (V = U >>> 16),
            (J = O & 65535),
            (X = O >>> 16),
            (O = ((N >>> 14) | (_e << 18)) ^ ((N >>> 18) | (_e << 14)) ^ ((_e >>> 9) | (N << 23))),
            (U = ((_e >>> 14) | (N << 18)) ^ ((_e >>> 18) | (N << 14)) ^ ((N >>> 9) | (_e << 23))),
            (Q += U & 65535),
            (V += U >>> 16),
            (J += O & 65535),
            (X += O >>> 16),
            (O = (N & le) ^ (~N & Ae)),
            (U = (_e & Re) ^ (~_e & Ce)),
            (Q += U & 65535),
            (V += U >>> 16),
            (J += O & 65535),
            (X += O >>> 16),
            (O = Br[ht * 2]),
            (U = Br[ht * 2 + 1]),
            (Q += U & 65535),
            (V += U >>> 16),
            (J += O & 65535),
            (X += O >>> 16),
            (O = M[ht % 16]),
            (U = k[ht % 16]),
            (Q += U & 65535),
            (V += U >>> 16),
            (J += O & 65535),
            (X += O >>> 16),
            (V += Q >>> 16),
            (J += V >>> 16),
            (X += J >>> 16),
            (rt = (J & 65535) | (X << 16)),
            (ft = (Q & 65535) | (V << 16)),
            (O = rt),
            (U = ft),
            (Q = U & 65535),
            (V = U >>> 16),
            (J = O & 65535),
            (X = O >>> 16),
            (O = ((It >>> 28) | (he << 4)) ^ ((he >>> 2) | (It << 30)) ^ ((he >>> 7) | (It << 25))),
            (U = ((he >>> 28) | (It << 4)) ^ ((It >>> 2) | (he << 30)) ^ ((It >>> 7) | (he << 25))),
            (Q += U & 65535),
            (V += U >>> 16),
            (J += O & 65535),
            (X += O >>> 16),
            (O = (It & ae) ^ (It & ue) ^ (ae & ue)),
            (U = (he & ve) ^ (he & ye) ^ (ve & ye)),
            (Q += U & 65535),
            (V += U >>> 16),
            (J += O & 65535),
            (X += O >>> 16),
            (V += Q >>> 16),
            (J += V >>> 16),
            (X += J >>> 16),
            (yt = (J & 65535) | (X << 16)),
            (dt = (Q & 65535) | (V << 16)),
            (O = lt),
            (U = bt),
            (Q = U & 65535),
            (V = U >>> 16),
            (J = O & 65535),
            (X = O >>> 16),
            (O = rt),
            (U = ft),
            (Q += U & 65535),
            (V += U >>> 16),
            (J += O & 65535),
            (X += O >>> 16),
            (V += Q >>> 16),
            (J += V >>> 16),
            (X += J >>> 16),
            (lt = (J & 65535) | (X << 16)),
            (bt = (Q & 65535) | (V << 16)),
            (ae = T),
            (ue = L),
            (fe = D),
            (N = lt),
            (le = et),
            (Ae = ie),
            (xe = nt),
            (It = yt),
            (ve = wt),
            (ye = St),
            (Oe = _t),
            (_e = bt),
            (Re = Mt),
            (Ce = At),
            (Le = ot),
            (he = dt),
            ht % 16 === 15)
          )
            for (it = 0; it < 16; it++)
              (O = M[it]),
                (U = k[it]),
                (Q = U & 65535),
                (V = U >>> 16),
                (J = O & 65535),
                (X = O >>> 16),
                (O = M[(it + 9) % 16]),
                (U = k[(it + 9) % 16]),
                (Q += U & 65535),
                (V += U >>> 16),
                (J += O & 65535),
                (X += O >>> 16),
                (rt = M[(it + 1) % 16]),
                (ft = k[(it + 1) % 16]),
                (O = ((rt >>> 1) | (ft << 31)) ^ ((rt >>> 8) | (ft << 24)) ^ (rt >>> 7)),
                (U =
                  ((ft >>> 1) | (rt << 31)) ^
                  ((ft >>> 8) | (rt << 24)) ^
                  ((ft >>> 7) | (rt << 25))),
                (Q += U & 65535),
                (V += U >>> 16),
                (J += O & 65535),
                (X += O >>> 16),
                (rt = M[(it + 14) % 16]),
                (ft = k[(it + 14) % 16]),
                (O = ((rt >>> 19) | (ft << 13)) ^ ((ft >>> 29) | (rt << 3)) ^ (rt >>> 6)),
                (U =
                  ((ft >>> 19) | (rt << 13)) ^
                  ((rt >>> 29) | (ft << 3)) ^
                  ((ft >>> 6) | (rt << 26))),
                (Q += U & 65535),
                (V += U >>> 16),
                (J += O & 65535),
                (X += O >>> 16),
                (V += Q >>> 16),
                (J += V >>> 16),
                (X += J >>> 16),
                (M[it] = (J & 65535) | (X << 16)),
                (k[it] = (Q & 65535) | (V << 16));
        (O = It),
          (U = he),
          (Q = U & 65535),
          (V = U >>> 16),
          (J = O & 65535),
          (X = O >>> 16),
          (O = y[0]),
          (U = x[0]),
          (Q += U & 65535),
          (V += U >>> 16),
          (J += O & 65535),
          (X += O >>> 16),
          (V += Q >>> 16),
          (J += V >>> 16),
          (X += J >>> 16),
          (y[0] = It = (J & 65535) | (X << 16)),
          (x[0] = he = (Q & 65535) | (V << 16)),
          (O = ae),
          (U = ve),
          (Q = U & 65535),
          (V = U >>> 16),
          (J = O & 65535),
          (X = O >>> 16),
          (O = y[1]),
          (U = x[1]),
          (Q += U & 65535),
          (V += U >>> 16),
          (J += O & 65535),
          (X += O >>> 16),
          (V += Q >>> 16),
          (J += V >>> 16),
          (X += J >>> 16),
          (y[1] = ae = (J & 65535) | (X << 16)),
          (x[1] = ve = (Q & 65535) | (V << 16)),
          (O = ue),
          (U = ye),
          (Q = U & 65535),
          (V = U >>> 16),
          (J = O & 65535),
          (X = O >>> 16),
          (O = y[2]),
          (U = x[2]),
          (Q += U & 65535),
          (V += U >>> 16),
          (J += O & 65535),
          (X += O >>> 16),
          (V += Q >>> 16),
          (J += V >>> 16),
          (X += J >>> 16),
          (y[2] = ue = (J & 65535) | (X << 16)),
          (x[2] = ye = (Q & 65535) | (V << 16)),
          (O = fe),
          (U = Oe),
          (Q = U & 65535),
          (V = U >>> 16),
          (J = O & 65535),
          (X = O >>> 16),
          (O = y[3]),
          (U = x[3]),
          (Q += U & 65535),
          (V += U >>> 16),
          (J += O & 65535),
          (X += O >>> 16),
          (V += Q >>> 16),
          (J += V >>> 16),
          (X += J >>> 16),
          (y[3] = fe = (J & 65535) | (X << 16)),
          (x[3] = Oe = (Q & 65535) | (V << 16)),
          (O = N),
          (U = _e),
          (Q = U & 65535),
          (V = U >>> 16),
          (J = O & 65535),
          (X = O >>> 16),
          (O = y[4]),
          (U = x[4]),
          (Q += U & 65535),
          (V += U >>> 16),
          (J += O & 65535),
          (X += O >>> 16),
          (V += Q >>> 16),
          (J += V >>> 16),
          (X += J >>> 16),
          (y[4] = N = (J & 65535) | (X << 16)),
          (x[4] = _e = (Q & 65535) | (V << 16)),
          (O = le),
          (U = Re),
          (Q = U & 65535),
          (V = U >>> 16),
          (J = O & 65535),
          (X = O >>> 16),
          (O = y[5]),
          (U = x[5]),
          (Q += U & 65535),
          (V += U >>> 16),
          (J += O & 65535),
          (X += O >>> 16),
          (V += Q >>> 16),
          (J += V >>> 16),
          (X += J >>> 16),
          (y[5] = le = (J & 65535) | (X << 16)),
          (x[5] = Re = (Q & 65535) | (V << 16)),
          (O = Ae),
          (U = Ce),
          (Q = U & 65535),
          (V = U >>> 16),
          (J = O & 65535),
          (X = O >>> 16),
          (O = y[6]),
          (U = x[6]),
          (Q += U & 65535),
          (V += U >>> 16),
          (J += O & 65535),
          (X += O >>> 16),
          (V += Q >>> 16),
          (J += V >>> 16),
          (X += J >>> 16),
          (y[6] = Ae = (J & 65535) | (X << 16)),
          (x[6] = Ce = (Q & 65535) | (V << 16)),
          (O = xe),
          (U = Le),
          (Q = U & 65535),
          (V = U >>> 16),
          (J = O & 65535),
          (X = O >>> 16),
          (O = y[7]),
          (U = x[7]),
          (Q += U & 65535),
          (V += U >>> 16),
          (J += O & 65535),
          (X += O >>> 16),
          (V += Q >>> 16),
          (J += V >>> 16),
          (X += J >>> 16),
          (y[7] = xe = (J & 65535) | (X << 16)),
          (x[7] = Le = (Q & 65535) | (V << 16)),
          (Fe += 128),
          (l -= 128);
      }
      return l;
    }
    function Nt(y, x, b) {
      var l = new Int32Array(8),
        M = new Int32Array(8),
        k = new Uint8Array(256),
        T,
        L = b;
      for (
        l[0] = 1779033703,
          l[1] = 3144134277,
          l[2] = 1013904242,
          l[3] = 2773480762,
          l[4] = 1359893119,
          l[5] = 2600822924,
          l[6] = 528734635,
          l[7] = 1541459225,
          M[0] = 4089235720,
          M[1] = 2227873595,
          M[2] = 4271175723,
          M[3] = 1595750129,
          M[4] = 2917565137,
          M[5] = 725511199,
          M[6] = 4215389547,
          M[7] = 327033209,
          Yt(l, M, x, b),
          b %= 128,
          T = 0;
        T < b;
        T++
      )
        k[T] = x[L - b + T];
      for (
        k[b] = 128,
          b = 256 - 128 * (b < 112 ? 1 : 0),
          k[b - 9] = 0,
          C(k, b - 8, (L / 536870912) | 0, L << 3),
          Yt(l, M, k, b),
          T = 0;
        T < 8;
        T++
      )
        C(y, 8 * T, l[T], M[T]);
      return 0;
    }
    function hr(y, x) {
      var b = e(),
        l = e(),
        M = e(),
        k = e(),
        T = e(),
        L = e(),
        D = e(),
        lt = e(),
        et = e();
      H(b, y[1], y[0]),
        H(et, x[1], x[0]),
        G(b, b, et),
        K(l, y[0], y[1]),
        K(et, x[0], x[1]),
        G(l, l, et),
        G(M, y[3], x[3]),
        G(M, M, S),
        G(k, y[2], x[2]),
        K(k, k, k),
        H(T, l, b),
        H(L, k, M),
        K(D, k, M),
        K(lt, l, b),
        G(y[0], T, L),
        G(y[1], lt, D),
        G(y[2], D, L),
        G(y[3], T, lt);
    }
    function Zt(y, x, b) {
      var l;
      for (l = 0; l < 4; l++) _(y[l], x[l], b);
    }
    function Ft(y, x) {
      var b = e(),
        l = e(),
        M = e();
      mt(M, x[2]), G(b, x[0], M), G(l, x[1], M), g(y, l), (y[31] ^= m(b) << 7);
    }
    function wr(y, x, b) {
      var l, M;
      for (p(y[0], u), p(y[1], d), p(y[2], d), p(y[3], u), M = 255; M >= 0; --M)
        (l = (b[(M / 8) | 0] >> (M & 7)) & 1), Zt(y, x, l), hr(x, y), hr(y, y), Zt(y, x, l);
    }
    function Ut(y, x) {
      var b = [e(), e(), e(), e()];
      p(b[0], P), p(b[1], I), p(b[2], d), G(b[3], P, I), wr(y, b, x);
    }
    function Ht(y, x, b) {
      var l = new Uint8Array(64),
        M = [e(), e(), e(), e()],
        k;
      for (
        b || i(x, 32),
          Nt(l, x, 32),
          l[0] &= 248,
          l[31] &= 127,
          l[31] |= 64,
          Ut(M, l),
          Ft(y, M),
          k = 0;
        k < 32;
        k++
      )
        x[k + 32] = y[k];
      return 0;
    }
    var lr = new Float64Array([
      237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 16,
    ]);
    function Gt(y, x) {
      var b, l, M, k;
      for (l = 63; l >= 32; --l) {
        for (b = 0, M = l - 32, k = l - 12; M < k; ++M)
          (x[M] += b - 16 * x[l] * lr[M - (l - 32)]),
            (b = Math.floor((x[M] + 128) / 256)),
            (x[M] -= b * 256);
        (x[M] += b), (x[l] = 0);
      }
      for (b = 0, M = 0; M < 32; M++)
        (x[M] += b - (x[31] >> 4) * lr[M]), (b = x[M] >> 8), (x[M] &= 255);
      for (M = 0; M < 32; M++) x[M] -= b * lr[M];
      for (l = 0; l < 32; l++) (x[l + 1] += x[l] >> 8), (y[l] = x[l] & 255);
    }
    function Dt(y) {
      var x = new Float64Array(64),
        b;
      for (b = 0; b < 64; b++) x[b] = y[b];
      for (b = 0; b < 64; b++) y[b] = 0;
      Gt(y, x);
    }
    function br(y, x, b, l) {
      var M = new Uint8Array(64),
        k = new Uint8Array(64),
        T = new Uint8Array(64),
        L,
        D,
        lt = new Float64Array(64),
        et = [e(), e(), e(), e()];
      Nt(M, l, 32), (M[0] &= 248), (M[31] &= 127), (M[31] |= 64);
      var ie = b + 64;
      for (L = 0; L < b; L++) y[64 + L] = x[L];
      for (L = 0; L < 32; L++) y[32 + L] = M[32 + L];
      for (Nt(T, y.subarray(32), b + 32), Dt(T), Ut(et, T), Ft(y, et), L = 32; L < 64; L++)
        y[L] = l[L];
      for (Nt(k, y, b + 64), Dt(k), L = 0; L < 64; L++) lt[L] = 0;
      for (L = 0; L < 32; L++) lt[L] = T[L];
      for (L = 0; L < 32; L++) for (D = 0; D < 32; D++) lt[L + D] += k[L] * M[D];
      return Gt(y.subarray(32), lt), ie;
    }
    function Qt(y, x) {
      var b = e(),
        l = e(),
        M = e(),
        k = e(),
        T = e(),
        L = e(),
        D = e();
      return (
        p(y[2], d),
        q(y[1], x),
        st(M, y[1]),
        G(k, M, E),
        H(M, M, y[2]),
        K(k, y[2], k),
        st(T, k),
        st(L, T),
        G(D, L, T),
        G(b, D, M),
        G(b, b, k),
        Ne(b, b),
        G(b, b, M),
        G(b, b, k),
        G(b, b, k),
        G(y[0], b, k),
        st(l, y[0]),
        G(l, l, k),
        a(l, M) && G(y[0], y[0], R),
        st(l, y[0]),
        G(l, l, k),
        a(l, M) ? -1 : (m(y[0]) === x[31] >> 7 && H(y[0], u, y[0]), G(y[3], y[0], y[1]), 0)
      );
    }
    function zt(y, x, b, l) {
      var M,
        k = new Uint8Array(32),
        T = new Uint8Array(64),
        L = [e(), e(), e(), e()],
        D = [e(), e(), e(), e()];
      if (b < 64 || Qt(D, l)) return -1;
      for (M = 0; M < b; M++) y[M] = x[M];
      for (M = 0; M < 32; M++) y[M + 32] = l[M];
      if (
        (Nt(T, y, b),
        Dt(T),
        wr(L, D, T),
        Ut(D, x.subarray(32)),
        hr(L, D),
        Ft(k, L),
        (b -= 64),
        W(x, 0, k, 0))
      ) {
        for (M = 0; M < b; M++) y[M] = 0;
        return -1;
      }
      for (M = 0; M < b; M++) y[M] = x[M + 64];
      return b;
    }
    var cr = 32,
      Ct = 24,
      Bt = 32,
      We = 16,
      Tt = 32,
      Lt = 32,
      sr = 32,
      Rt = 32,
      Kt = 32,
      Ar = Ct,
      Wt = Bt,
      Xt = We,
      qe = 64,
      Pt = 32,
      kt = 64,
      dr = 32,
      qt = 64;
    t.lowlevel = {
      crypto_core_hsalsa20: tt,
      crypto_stream_xor: be,
      crypto_stream: at,
      crypto_stream_salsa20_xor: se,
      crypto_stream_salsa20: de,
      crypto_onetimeauth: o,
      crypto_onetimeauth_verify: f,
      crypto_verify_16: ct,
      crypto_verify_32: W,
      crypto_secretbox: h,
      crypto_secretbox_open: c,
      crypto_scalarmult: pt,
      crypto_scalarmult_base: Et,
      crypto_box_beforenm: Ot,
      crypto_box_afternm: Jt,
      crypto_box: te,
      crypto_box_open: ee,
      crypto_box_keypair: Ir,
      crypto_hash: Nt,
      crypto_sign: br,
      crypto_sign_keypair: Ht,
      crypto_sign_open: zt,
      crypto_secretbox_KEYBYTES: cr,
      crypto_secretbox_NONCEBYTES: Ct,
      crypto_secretbox_ZEROBYTES: Bt,
      crypto_secretbox_BOXZEROBYTES: We,
      crypto_scalarmult_BYTES: Tt,
      crypto_scalarmult_SCALARBYTES: Lt,
      crypto_box_PUBLICKEYBYTES: sr,
      crypto_box_SECRETKEYBYTES: Rt,
      crypto_box_BEFORENMBYTES: Kt,
      crypto_box_NONCEBYTES: Ar,
      crypto_box_ZEROBYTES: Wt,
      crypto_box_BOXZEROBYTES: Xt,
      crypto_sign_BYTES: qe,
      crypto_sign_PUBLICKEYBYTES: Pt,
      crypto_sign_SECRETKEYBYTES: kt,
      crypto_sign_SEEDBYTES: dr,
      crypto_hash_BYTES: qt,
      gf: e,
      D: E,
      L: lr,
      pack25519: g,
      unpack25519: q,
      M: G,
      A: K,
      S: st,
      Z: H,
      pow2523: Ne,
      add: hr,
      set25519: p,
      modL: Gt,
      scalarmult: wr,
      scalarbase: Ut,
    };
    function jt(y, x) {
      if (y.length !== cr) throw new Error('bad key size');
      if (x.length !== Ct) throw new Error('bad nonce size');
    }
    function Tr(y, x) {
      if (y.length !== sr) throw new Error('bad public key size');
      if (x.length !== Rt) throw new Error('bad secret key size');
    }
    function vt() {
      for (var y = 0; y < arguments.length; y++)
        if (!(arguments[y] instanceof Uint8Array))
          throw new TypeError('unexpected type, use Uint8Array');
    }
    function Vt(y) {
      for (var x = 0; x < y.length; x++) y[x] = 0;
    }
    (t.randomBytes = function (y) {
      var x = new Uint8Array(y);
      return i(x, y), x;
    }),
      (t.secretbox = function (y, x, b) {
        vt(y, x, b), jt(b, x);
        for (
          var l = new Uint8Array(Bt + y.length), M = new Uint8Array(l.length), k = 0;
          k < y.length;
          k++
        )
          l[k + Bt] = y[k];
        return h(M, l, l.length, x, b), M.subarray(We);
      }),
      (t.secretbox.open = function (y, x, b) {
        vt(y, x, b), jt(b, x);
        for (
          var l = new Uint8Array(We + y.length), M = new Uint8Array(l.length), k = 0;
          k < y.length;
          k++
        )
          l[k + We] = y[k];
        return l.length < 32 || c(M, l, l.length, x, b) !== 0 ? null : M.subarray(Bt);
      }),
      (t.secretbox.keyLength = cr),
      (t.secretbox.nonceLength = Ct),
      (t.secretbox.overheadLength = We),
      (t.scalarMult = function (y, x) {
        if ((vt(y, x), y.length !== Lt)) throw new Error('bad n size');
        if (x.length !== Tt) throw new Error('bad p size');
        var b = new Uint8Array(Tt);
        return pt(b, y, x), b;
      }),
      (t.scalarMult.base = function (y) {
        if ((vt(y), y.length !== Lt)) throw new Error('bad n size');
        var x = new Uint8Array(Tt);
        return Et(x, y), x;
      }),
      (t.scalarMult.scalarLength = Lt),
      (t.scalarMult.groupElementLength = Tt),
      (t.box = function (y, x, b, l) {
        var M = t.box.before(b, l);
        return t.secretbox(y, x, M);
      }),
      (t.box.before = function (y, x) {
        vt(y, x), Tr(y, x);
        var b = new Uint8Array(Kt);
        return Ot(b, y, x), b;
      }),
      (t.box.after = t.secretbox),
      (t.box.open = function (y, x, b, l) {
        var M = t.box.before(b, l);
        return t.secretbox.open(y, x, M);
      }),
      (t.box.open.after = t.secretbox.open),
      (t.box.keyPair = function () {
        var y = new Uint8Array(sr),
          x = new Uint8Array(Rt);
        return Ir(y, x), { publicKey: y, secretKey: x };
      }),
      (t.box.keyPair.fromSecretKey = function (y) {
        if ((vt(y), y.length !== Rt)) throw new Error('bad secret key size');
        var x = new Uint8Array(sr);
        return Et(x, y), { publicKey: x, secretKey: new Uint8Array(y) };
      }),
      (t.box.publicKeyLength = sr),
      (t.box.secretKeyLength = Rt),
      (t.box.sharedKeyLength = Kt),
      (t.box.nonceLength = Ar),
      (t.box.overheadLength = t.secretbox.overheadLength),
      (t.sign = function (y, x) {
        if ((vt(y, x), x.length !== kt)) throw new Error('bad secret key size');
        var b = new Uint8Array(qe + y.length);
        return br(b, y, y.length, x), b;
      }),
      (t.sign.open = function (y, x) {
        if ((vt(y, x), x.length !== Pt)) throw new Error('bad public key size');
        var b = new Uint8Array(y.length),
          l = zt(b, y, y.length, x);
        if (l < 0) return null;
        for (var M = new Uint8Array(l), k = 0; k < M.length; k++) M[k] = b[k];
        return M;
      }),
      (t.sign.detached = function (y, x) {
        for (var b = t.sign(y, x), l = new Uint8Array(qe), M = 0; M < l.length; M++) l[M] = b[M];
        return l;
      }),
      (t.sign.detached.verify = function (y, x, b) {
        if ((vt(y, x, b), x.length !== qe)) throw new Error('bad signature size');
        if (b.length !== Pt) throw new Error('bad public key size');
        var l = new Uint8Array(qe + y.length),
          M = new Uint8Array(qe + y.length),
          k;
        for (k = 0; k < qe; k++) l[k] = x[k];
        for (k = 0; k < y.length; k++) l[k + qe] = y[k];
        return zt(M, l, l.length, b) >= 0;
      }),
      (t.sign.keyPair = function () {
        var y = new Uint8Array(Pt),
          x = new Uint8Array(kt);
        return Ht(y, x), { publicKey: y, secretKey: x };
      }),
      (t.sign.keyPair.fromSecretKey = function (y) {
        if ((vt(y), y.length !== kt)) throw new Error('bad secret key size');
        for (var x = new Uint8Array(Pt), b = 0; b < x.length; b++) x[b] = y[32 + b];
        return { publicKey: x, secretKey: new Uint8Array(y) };
      }),
      (t.sign.keyPair.fromSeed = function (y) {
        if ((vt(y), y.length !== dr)) throw new Error('bad seed size');
        for (var x = new Uint8Array(Pt), b = new Uint8Array(kt), l = 0; l < 32; l++) b[l] = y[l];
        return Ht(x, b, !0), { publicKey: x, secretKey: b };
      }),
      (t.sign.publicKeyLength = Pt),
      (t.sign.secretKeyLength = kt),
      (t.sign.seedLength = dr),
      (t.sign.signatureLength = qe),
      (t.hash = function (y) {
        vt(y);
        var x = new Uint8Array(qt);
        return Nt(x, y, y.length), x;
      }),
      (t.hash.hashLength = qt),
      (t.verify = function (y, x) {
        return (
          vt(y, x),
          y.length === 0 || x.length === 0 || y.length !== x.length
            ? !1
            : j(y, 0, x, 0, y.length) === 0
        );
      }),
      (t.setPRNG = function (y) {
        i = y;
      }),
      (function () {
        var y = typeof globalThis < 'u' ? globalThis.crypto || globalThis.msCrypto : null;
        if (y && y.getRandomValues) {
          var x = 65536;
          t.setPRNG(function (b, l) {
            var M,
              k = new Uint8Array(l);
            for (M = 0; M < l; M += x) y.getRandomValues(k.subarray(M, M + Math.min(l - M, x)));
            for (M = 0; M < l; M++) b[M] = k[M];
            Vt(k);
          });
        } else
          typeof ff < 'u' &&
            ((y = ef()),
            y &&
              y.randomBytes &&
              t.setPRNG(function (b, l) {
                var M,
                  k = y.randomBytes(l);
                for (M = 0; M < l; M++) b[M] = k[M];
                Vt(k);
              }));
      })();
  })(r.exports ? r.exports : (globalThis.nacl = globalThis.nacl || {}));
})(ga);
var Uu = ga.exports;
const w0 = Xa(rf);
var Du = {},
  li = {},
  fn = {},
  Kn = {},
  pa = {};
const Ee = {
  IMPOSSIBLE_CASE: 'Impossible case. Please create issue.',
  TWEAK_ADD: 'The tweak was out of range or the resulted private key is invalid',
  TWEAK_MUL: 'The tweak was out of range or equal to zero',
  CONTEXT_RANDOMIZE_UNKNOW: 'Unknow error on context randomization',
  SECKEY_INVALID: 'Private Key is invalid',
  PUBKEY_PARSE: 'Public Key could not be parsed',
  PUBKEY_SERIALIZE: 'Public Key serialization error',
  PUBKEY_COMBINE: 'The sum of the public keys is not valid',
  SIG_PARSE: 'Signature could not be parsed',
  SIGN: 'The nonce generation function failed, or the private key was invalid',
  RECOVER: 'Public key could not be recover',
  ECDH: 'Scalar was invalid (zero or overflow)',
};
function Mr(r, t) {
  if (!r) throw new Error(t);
}
function we(r, t, e) {
  if ((Mr(t instanceof Uint8Array, `Expected ${r} to be an Uint8Array`), e !== void 0))
    if (Array.isArray(e)) {
      const i = e.join(', '),
        n = `Expected ${r} to be an Uint8Array with length [${i}]`;
      Mr(e.includes(t.length), n);
    } else {
      const i = `Expected ${r} to be an Uint8Array with length ${e}`;
      Mr(t.length === e, i);
    }
}
function pi(r) {
  Mr(Si(r) === 'Boolean', 'Expected compressed to be a Boolean');
}
function Cr(r = (e) => new Uint8Array(e), t) {
  return typeof r == 'function' && (r = r(t)), we('output', r, t), r;
}
function Si(r) {
  return Object.prototype.toString.call(r).slice(8, -1);
}
var zu = (r) => ({
  contextRandomize(t) {
    switch (
      (Mr(t === null || t instanceof Uint8Array, 'Expected seed to be an Uint8Array or null'),
      t !== null && we('seed', t, 32),
      r.contextRandomize(t))
    ) {
      case 1:
        throw new Error(Ee.CONTEXT_RANDOMIZE_UNKNOW);
    }
  },
  privateKeyVerify(t) {
    return we('private key', t, 32), r.privateKeyVerify(t) === 0;
  },
  privateKeyNegate(t) {
    switch ((we('private key', t, 32), r.privateKeyNegate(t))) {
      case 0:
        return t;
      case 1:
        throw new Error(Ee.IMPOSSIBLE_CASE);
    }
  },
  privateKeyTweakAdd(t, e) {
    switch ((we('private key', t, 32), we('tweak', e, 32), r.privateKeyTweakAdd(t, e))) {
      case 0:
        return t;
      case 1:
        throw new Error(Ee.TWEAK_ADD);
    }
  },
  privateKeyTweakMul(t, e) {
    switch ((we('private key', t, 32), we('tweak', e, 32), r.privateKeyTweakMul(t, e))) {
      case 0:
        return t;
      case 1:
        throw new Error(Ee.TWEAK_MUL);
    }
  },
  publicKeyVerify(t) {
    return we('public key', t, [33, 65]), r.publicKeyVerify(t) === 0;
  },
  publicKeyCreate(t, e = !0, i) {
    switch ((we('private key', t, 32), pi(e), (i = Cr(i, e ? 33 : 65)), r.publicKeyCreate(i, t))) {
      case 0:
        return i;
      case 1:
        throw new Error(Ee.SECKEY_INVALID);
      case 2:
        throw new Error(Ee.PUBKEY_SERIALIZE);
    }
  },
  publicKeyConvert(t, e = !0, i) {
    switch (
      (we('public key', t, [33, 65]), pi(e), (i = Cr(i, e ? 33 : 65)), r.publicKeyConvert(i, t))
    ) {
      case 0:
        return i;
      case 1:
        throw new Error(Ee.PUBKEY_PARSE);
      case 2:
        throw new Error(Ee.PUBKEY_SERIALIZE);
    }
  },
  publicKeyNegate(t, e = !0, i) {
    switch (
      (we('public key', t, [33, 65]), pi(e), (i = Cr(i, e ? 33 : 65)), r.publicKeyNegate(i, t))
    ) {
      case 0:
        return i;
      case 1:
        throw new Error(Ee.PUBKEY_PARSE);
      case 2:
        throw new Error(Ee.IMPOSSIBLE_CASE);
      case 3:
        throw new Error(Ee.PUBKEY_SERIALIZE);
    }
  },
  publicKeyCombine(t, e = !0, i) {
    Mr(Array.isArray(t), 'Expected public keys to be an Array'),
      Mr(t.length > 0, 'Expected public keys array will have more than zero items');
    for (const n of t) we('public key', n, [33, 65]);
    switch ((pi(e), (i = Cr(i, e ? 33 : 65)), r.publicKeyCombine(i, t))) {
      case 0:
        return i;
      case 1:
        throw new Error(Ee.PUBKEY_PARSE);
      case 2:
        throw new Error(Ee.PUBKEY_COMBINE);
      case 3:
        throw new Error(Ee.PUBKEY_SERIALIZE);
    }
  },
  publicKeyTweakAdd(t, e, i = !0, n) {
    switch (
      (we('public key', t, [33, 65]),
      we('tweak', e, 32),
      pi(i),
      (n = Cr(n, i ? 33 : 65)),
      r.publicKeyTweakAdd(n, t, e))
    ) {
      case 0:
        return n;
      case 1:
        throw new Error(Ee.PUBKEY_PARSE);
      case 2:
        throw new Error(Ee.TWEAK_ADD);
    }
  },
  publicKeyTweakMul(t, e, i = !0, n) {
    switch (
      (we('public key', t, [33, 65]),
      we('tweak', e, 32),
      pi(i),
      (n = Cr(n, i ? 33 : 65)),
      r.publicKeyTweakMul(n, t, e))
    ) {
      case 0:
        return n;
      case 1:
        throw new Error(Ee.PUBKEY_PARSE);
      case 2:
        throw new Error(Ee.TWEAK_MUL);
    }
  },
  signatureNormalize(t) {
    switch ((we('signature', t, 64), r.signatureNormalize(t))) {
      case 0:
        return t;
      case 1:
        throw new Error(Ee.SIG_PARSE);
    }
  },
  signatureExport(t, e) {
    we('signature', t, 64), (e = Cr(e, 72));
    const i = { output: e, outputlen: 72 };
    switch (r.signatureExport(i, t)) {
      case 0:
        return e.slice(0, i.outputlen);
      case 1:
        throw new Error(Ee.SIG_PARSE);
      case 2:
        throw new Error(Ee.IMPOSSIBLE_CASE);
    }
  },
  signatureImport(t, e) {
    switch ((we('signature', t), (e = Cr(e, 64)), r.signatureImport(e, t))) {
      case 0:
        return e;
      case 1:
        throw new Error(Ee.SIG_PARSE);
      case 2:
        throw new Error(Ee.IMPOSSIBLE_CASE);
    }
  },
  ecdsaSign(t, e, i = {}, n) {
    we('message', t, 32),
      we('private key', e, 32),
      Mr(Si(i) === 'Object', 'Expected options to be an Object'),
      i.data !== void 0 && we('options.data', i.data),
      i.noncefn !== void 0 &&
        Mr(Si(i.noncefn) === 'Function', 'Expected options.noncefn to be a Function'),
      (n = Cr(n, 64));
    const s = { signature: n, recid: null };
    switch (r.ecdsaSign(s, t, e, i.data, i.noncefn)) {
      case 0:
        return s;
      case 1:
        throw new Error(Ee.SIGN);
      case 2:
        throw new Error(Ee.IMPOSSIBLE_CASE);
    }
  },
  ecdsaVerify(t, e, i) {
    switch (
      (we('signature', t, 64),
      we('message', e, 32),
      we('public key', i, [33, 65]),
      r.ecdsaVerify(t, e, i))
    ) {
      case 0:
        return !0;
      case 3:
        return !1;
      case 1:
        throw new Error(Ee.SIG_PARSE);
      case 2:
        throw new Error(Ee.PUBKEY_PARSE);
    }
  },
  ecdsaRecover(t, e, i, n = !0, s) {
    switch (
      (we('signature', t, 64),
      Mr(
        Si(e) === 'Number' && e >= 0 && e <= 3,
        'Expected recovery id to be a Number within interval [0, 3]'
      ),
      we('message', i, 32),
      pi(n),
      (s = Cr(s, n ? 33 : 65)),
      r.ecdsaRecover(s, t, e, i))
    ) {
      case 0:
        return s;
      case 1:
        throw new Error(Ee.SIG_PARSE);
      case 2:
        throw new Error(Ee.RECOVER);
      case 3:
        throw new Error(Ee.IMPOSSIBLE_CASE);
    }
  },
  ecdh(t, e, i = {}, n) {
    switch (
      (we('public key', t, [33, 65]),
      we('private key', e, 32),
      Mr(Si(i) === 'Object', 'Expected options to be an Object'),
      i.data !== void 0 && we('options.data', i.data),
      i.hashfn !== void 0
        ? (Mr(Si(i.hashfn) === 'Function', 'Expected options.hashfn to be a Function'),
          i.xbuf !== void 0 && we('options.xbuf', i.xbuf, 32),
          i.ybuf !== void 0 && we('options.ybuf', i.ybuf, 32),
          we('output', n))
        : (n = Cr(n, 32)),
      r.ecdh(n, t, e, i.data, i.hashfn, i.xbuf, i.ybuf))
    ) {
      case 0:
        return n;
      case 1:
        throw new Error(Ee.PUBKEY_PARSE);
      case 2:
        throw new Error(Ee.ECDH);
    }
  },
});
const Ku = Co().ec,
  Fr = new Ku('secp256k1'),
  pe = Fr.curve,
  Se = pe.n.constructor;
function qu(r, t) {
  let e = new Se(t);
  if (e.cmp(pe.p) >= 0) return null;
  e = e.toRed(pe.red);
  let i = e.redSqr().redIMul(e).redIAdd(pe.b).redSqrt();
  return (r === 3) !== i.isOdd() && (i = i.redNeg()), Fr.keyPair({ pub: { x: e, y: i } });
}
function Fu(r, t, e) {
  let i = new Se(t),
    n = new Se(e);
  if (
    i.cmp(pe.p) >= 0 ||
    n.cmp(pe.p) >= 0 ||
    ((i = i.toRed(pe.red)), (n = n.toRed(pe.red)), (r === 6 || r === 7) && n.isOdd() !== (r === 7))
  )
    return null;
  const s = i.redSqr().redIMul(i);
  return n.redSqr().redISub(s.redIAdd(pe.b)).isZero() ? Fr.keyPair({ pub: { x: i, y: n } }) : null;
}
function fi(r) {
  const t = r[0];
  switch (t) {
    case 2:
    case 3:
      return r.length !== 33 ? null : qu(t, r.subarray(1, 33));
    case 4:
    case 6:
    case 7:
      return r.length !== 65 ? null : Fu(t, r.subarray(1, 33), r.subarray(33, 65));
    default:
      return null;
  }
}
function mi(r, t) {
  const e = t.encode(null, r.length === 33);
  for (let i = 0; i < r.length; ++i) r[i] = e[i];
}
var Hu = {
    contextRandomize() {
      return 0;
    },
    privateKeyVerify(r) {
      const t = new Se(r);
      return t.cmp(pe.n) < 0 && !t.isZero() ? 0 : 1;
    },
    privateKeyNegate(r) {
      const t = new Se(r),
        e = pe.n.sub(t).umod(pe.n).toArrayLike(Uint8Array, 'be', 32);
      return r.set(e), 0;
    },
    privateKeyTweakAdd(r, t) {
      const e = new Se(t);
      if (e.cmp(pe.n) >= 0 || (e.iadd(new Se(r)), e.cmp(pe.n) >= 0 && e.isub(pe.n), e.isZero()))
        return 1;
      const i = e.toArrayLike(Uint8Array, 'be', 32);
      return r.set(i), 0;
    },
    privateKeyTweakMul(r, t) {
      let e = new Se(t);
      if (e.cmp(pe.n) >= 0 || e.isZero()) return 1;
      e.imul(new Se(r)), e.cmp(pe.n) >= 0 && (e = e.umod(pe.n));
      const i = e.toArrayLike(Uint8Array, 'be', 32);
      return r.set(i), 0;
    },
    publicKeyVerify(r) {
      return fi(r) === null ? 1 : 0;
    },
    publicKeyCreate(r, t) {
      const e = new Se(t);
      if (e.cmp(pe.n) >= 0 || e.isZero()) return 1;
      const i = Fr.keyFromPrivate(t).getPublic();
      return mi(r, i), 0;
    },
    publicKeyConvert(r, t) {
      const e = fi(t);
      if (e === null) return 1;
      const i = e.getPublic();
      return mi(r, i), 0;
    },
    publicKeyNegate(r, t) {
      const e = fi(t);
      if (e === null) return 1;
      const i = e.getPublic();
      return (i.y = i.y.redNeg()), mi(r, i), 0;
    },
    publicKeyCombine(r, t) {
      const e = new Array(t.length);
      for (let n = 0; n < t.length; ++n) if (((e[n] = fi(t[n])), e[n] === null)) return 1;
      let i = e[0].getPublic();
      for (let n = 1; n < e.length; ++n) i = i.add(e[n].pub);
      return i.isInfinity() ? 2 : (mi(r, i), 0);
    },
    publicKeyTweakAdd(r, t, e) {
      const i = fi(t);
      if (i === null) return 1;
      if (((e = new Se(e)), e.cmp(pe.n) >= 0)) return 2;
      const n = i.getPublic().add(pe.g.mul(e));
      return n.isInfinity() ? 2 : (mi(r, n), 0);
    },
    publicKeyTweakMul(r, t, e) {
      const i = fi(t);
      if (i === null) return 1;
      if (((e = new Se(e)), e.cmp(pe.n) >= 0 || e.isZero())) return 2;
      const n = i.getPublic().mul(e);
      return mi(r, n), 0;
    },
    signatureNormalize(r) {
      const t = new Se(r.subarray(0, 32)),
        e = new Se(r.subarray(32, 64));
      return t.cmp(pe.n) >= 0 || e.cmp(pe.n) >= 0
        ? 1
        : (e.cmp(Fr.nh) === 1 && r.set(pe.n.sub(e).toArrayLike(Uint8Array, 'be', 32), 32), 0);
    },
    signatureExport(r, t) {
      const e = t.subarray(0, 32),
        i = t.subarray(32, 64);
      if (new Se(e).cmp(pe.n) >= 0 || new Se(i).cmp(pe.n) >= 0) return 1;
      const { output: n } = r;
      let s = n.subarray(4, 37);
      (s[0] = 0), s.set(e, 1);
      let u = 33,
        d = 0;
      for (; u > 1 && s[d] === 0 && !(s[d + 1] & 128); --u, ++d);
      if (((s = s.subarray(d)), s[0] & 128 || (u > 1 && s[0] === 0 && !(s[1] & 128)))) return 1;
      let v = n.subarray(39, 72);
      (v[0] = 0), v.set(i, 1);
      let E = 33,
        S = 0;
      for (; E > 1 && v[S] === 0 && !(v[S + 1] & 128); --E, ++S);
      return (
        (v = v.subarray(S)),
        v[0] & 128 || (E > 1 && v[0] === 0 && !(v[1] & 128))
          ? 1
          : ((r.outputlen = 6 + u + E),
            (n[0] = 48),
            (n[1] = r.outputlen - 2),
            (n[2] = 2),
            (n[3] = s.length),
            n.set(s, 4),
            (n[4 + u] = 2),
            (n[5 + u] = v.length),
            n.set(v, 6 + u),
            0)
      );
    },
    signatureImport(r, t) {
      if (t.length < 8 || t.length > 72 || t[0] !== 48 || t[1] !== t.length - 2 || t[2] !== 2)
        return 1;
      const e = t[3];
      if (e === 0 || 5 + e >= t.length || t[4 + e] !== 2) return 1;
      const i = t[5 + e];
      if (
        i === 0 ||
        6 + e + i !== t.length ||
        t[4] & 128 ||
        (e > 1 && t[4] === 0 && !(t[5] & 128)) ||
        t[e + 6] & 128 ||
        (i > 1 && t[e + 6] === 0 && !(t[e + 7] & 128))
      )
        return 1;
      let n = t.subarray(4, 4 + e);
      if ((n.length === 33 && n[0] === 0 && (n = n.subarray(1)), n.length > 32)) return 1;
      let s = t.subarray(6 + e);
      if ((s.length === 33 && s[0] === 0 && (s = s.slice(1)), s.length > 32))
        throw new Error('S length is too long');
      let u = new Se(n);
      u.cmp(pe.n) >= 0 && (u = new Se(0));
      let d = new Se(t.subarray(6 + e));
      return (
        d.cmp(pe.n) >= 0 && (d = new Se(0)),
        r.set(u.toArrayLike(Uint8Array, 'be', 32), 0),
        r.set(d.toArrayLike(Uint8Array, 'be', 32), 32),
        0
      );
    },
    ecdsaSign(r, t, e, i, n) {
      if (n) {
        const d = n;
        n = (v) => {
          const E = d(t, e, null, i, v);
          if (!(E instanceof Uint8Array && E.length === 32)) throw new Error('This is the way');
          return new Se(E);
        };
      }
      const s = new Se(e);
      if (s.cmp(pe.n) >= 0 || s.isZero()) return 1;
      let u;
      try {
        u = Fr.sign(t, e, { canonical: !0, k: n, pers: i });
      } catch {
        return 1;
      }
      return (
        r.signature.set(u.r.toArrayLike(Uint8Array, 'be', 32), 0),
        r.signature.set(u.s.toArrayLike(Uint8Array, 'be', 32), 32),
        (r.recid = u.recoveryParam),
        0
      );
    },
    ecdsaVerify(r, t, e) {
      const i = { r: r.subarray(0, 32), s: r.subarray(32, 64) },
        n = new Se(i.r),
        s = new Se(i.s);
      if (n.cmp(pe.n) >= 0 || s.cmp(pe.n) >= 0) return 1;
      if (s.cmp(Fr.nh) === 1 || n.isZero() || s.isZero()) return 3;
      const u = fi(e);
      if (u === null) return 2;
      const d = u.getPublic();
      return Fr.verify(t, i, d) ? 0 : 3;
    },
    ecdsaRecover(r, t, e, i) {
      const n = { r: t.slice(0, 32), s: t.slice(32, 64) },
        s = new Se(n.r),
        u = new Se(n.s);
      if (s.cmp(pe.n) >= 0 || u.cmp(pe.n) >= 0) return 1;
      if (s.isZero() || u.isZero()) return 2;
      let d;
      try {
        d = Fr.recoverPubKey(i, n, e);
      } catch {
        return 2;
      }
      return mi(r, d), 0;
    },
    ecdh(r, t, e, i, n, s, u) {
      const d = fi(t);
      if (d === null) return 1;
      const v = new Se(e);
      if (v.cmp(pe.n) >= 0 || v.isZero()) return 2;
      const E = d.getPublic().mul(v);
      if (n === void 0) {
        const S = E.encode(null, !0),
          P = Fr.hash().update(S).digest();
        for (let I = 0; I < 32; ++I) r[I] = P[I];
      } else {
        s || (s = new Uint8Array(32));
        const S = E.getX().toArray('be', 32);
        for (let C = 0; C < 32; ++C) s[C] = S[C];
        u || (u = new Uint8Array(32));
        const P = E.getY().toArray('be', 32);
        for (let C = 0; C < 32; ++C) u[C] = P[C];
        const I = n(s, u, i);
        if (!(I instanceof Uint8Array && I.length === r.length)) return 2;
        r.set(I);
      }
      return 0;
    },
  },
  no = zu(Hu),
  qn = {};
Object.defineProperty(qn, '__esModule', { value: !0 });
var ma = nf();
function Gu(r) {
  return new Promise(function (t, e) {
    ma(r, function (i, n) {
      if (i) {
        e(i);
        return;
      }
      t(n);
    });
  });
}
qn.getRandomBytes = Gu;
function ju(r) {
  return ma(r);
}
qn.getRandomBytesSync = ju;
(function (r) {
  var t =
      (Te && Te.__awaiter) ||
      function (E, S, P, I) {
        function R(C) {
          return C instanceof P
            ? C
            : new P(function (j) {
                j(C);
              });
        }
        return new (P || (P = Promise))(function (C, j) {
          function ct(Z) {
            try {
              B(I.next(Z));
            } catch (Y) {
              j(Y);
            }
          }
          function W(Z) {
            try {
              B(I.throw(Z));
            } catch (Y) {
              j(Y);
            }
          }
          function B(Z) {
            Z.done ? C(Z.value) : R(Z.value).then(ct, W);
          }
          B((I = I.apply(E, S || [])).next());
        });
      },
    e =
      (Te && Te.__generator) ||
      function (E, S) {
        var P = {
            label: 0,
            sent: function () {
              if (C[0] & 1) throw C[1];
              return C[1];
            },
            trys: [],
            ops: [],
          },
          I,
          R,
          C,
          j;
        return (
          (j = { next: ct(0), throw: ct(1), return: ct(2) }),
          typeof Symbol == 'function' &&
            (j[Symbol.iterator] = function () {
              return this;
            }),
          j
        );
        function ct(B) {
          return function (Z) {
            return W([B, Z]);
          };
        }
        function W(B) {
          if (I) throw new TypeError('Generator is already executing.');
          for (; P; )
            try {
              if (
                ((I = 1),
                R &&
                  (C =
                    B[0] & 2
                      ? R.return
                      : B[0]
                        ? R.throw || ((C = R.return) && C.call(R), 0)
                        : R.next) &&
                  !(C = C.call(R, B[1])).done)
              )
                return C;
              switch (((R = 0), C && (B = [B[0] & 2, C.value]), B[0])) {
                case 0:
                case 1:
                  C = B;
                  break;
                case 4:
                  return P.label++, { value: B[1], done: !1 };
                case 5:
                  P.label++, (R = B[1]), (B = [0]);
                  continue;
                case 7:
                  (B = P.ops.pop()), P.trys.pop();
                  continue;
                default:
                  if (
                    ((C = P.trys),
                    !(C = C.length > 0 && C[C.length - 1]) && (B[0] === 6 || B[0] === 2))
                  ) {
                    P = 0;
                    continue;
                  }
                  if (B[0] === 3 && (!C || (B[1] > C[0] && B[1] < C[3]))) {
                    P.label = B[1];
                    break;
                  }
                  if (B[0] === 6 && P.label < C[1]) {
                    (P.label = C[1]), (C = B);
                    break;
                  }
                  if (C && P.label < C[2]) {
                    (P.label = C[2]), P.ops.push(B);
                    break;
                  }
                  C[2] && P.ops.pop(), P.trys.pop();
                  continue;
              }
              B = S.call(E, P);
            } catch (Z) {
              (B = [6, Z]), (R = 0);
            } finally {
              I = C = 0;
            }
          if (B[0] & 5) throw B[1];
          return { value: B[0] ? B[1] : void 0, done: !0 };
        }
      };
  function i(E) {
    for (var S in E) r.hasOwnProperty(S) || (r[S] = E[S]);
  }
  Object.defineProperty(r, '__esModule', { value: !0 });
  var n = no,
    s = qn,
    u = 32;
  function d() {
    return t(this, void 0, void 0, function () {
      var E;
      return e(this, function (S) {
        switch (S.label) {
          case 0:
            return [4, s.getRandomBytes(u)];
          case 1:
            return (E = S.sent()), n.privateKeyVerify(E) ? [2, E] : [3, 0];
          case 2:
            return [2];
        }
      });
    });
  }
  r.createPrivateKey = d;
  function v() {
    for (;;) {
      var E = s.getRandomBytesSync(u);
      if (n.privateKeyVerify(E)) return E;
    }
  }
  (r.createPrivateKeySync = v), i(no);
})(pa);
var Ui = {},
  Bs = { exports: {} };
Bs.exports;
(function (r) {
  (function (t, e) {
    function i(w, o) {
      if (!w) throw new Error(o || 'Assertion failed');
    }
    function n(w, o) {
      w.super_ = o;
      var f = function () {};
      (f.prototype = o.prototype), (w.prototype = new f()), (w.prototype.constructor = w);
    }
    function s(w, o, f) {
      if (s.isBN(w)) return w;
      (this.negative = 0),
        (this.words = null),
        (this.length = 0),
        (this.red = null),
        w !== null &&
          ((o === 'le' || o === 'be') && ((f = o), (o = 10)),
          this._init(w || 0, o || 10, f || 'be'));
    }
    typeof t == 'object' ? (t.exports = s) : (e.BN = s), (s.BN = s), (s.wordSize = 26);
    var u;
    try {
      typeof window < 'u' && typeof window.Buffer < 'u' ? (u = window.Buffer) : (u = Ln.Buffer);
    } catch {}
    (s.isBN = function (o) {
      return o instanceof s
        ? !0
        : o !== null &&
            typeof o == 'object' &&
            o.constructor.wordSize === s.wordSize &&
            Array.isArray(o.words);
    }),
      (s.max = function (o, f) {
        return o.cmp(f) > 0 ? o : f;
      }),
      (s.min = function (o, f) {
        return o.cmp(f) < 0 ? o : f;
      }),
      (s.prototype._init = function (o, f, h) {
        if (typeof o == 'number') return this._initNumber(o, f, h);
        if (typeof o == 'object') return this._initArray(o, f, h);
        f === 'hex' && (f = 16),
          i(f === (f | 0) && f >= 2 && f <= 36),
          (o = o.toString().replace(/\s+/g, ''));
        var c = 0;
        o[0] === '-' && (c++, (this.negative = 1)),
          c < o.length &&
            (f === 16
              ? this._parseHex(o, c, h)
              : (this._parseBase(o, f, c), h === 'le' && this._initArray(this.toArray(), f, h)));
      }),
      (s.prototype._initNumber = function (o, f, h) {
        o < 0 && ((this.negative = 1), (o = -o)),
          o < 67108864
            ? ((this.words = [o & 67108863]), (this.length = 1))
            : o < 4503599627370496
              ? ((this.words = [o & 67108863, (o / 67108864) & 67108863]), (this.length = 2))
              : (i(o < 9007199254740992),
                (this.words = [o & 67108863, (o / 67108864) & 67108863, 1]),
                (this.length = 3)),
          h === 'le' && this._initArray(this.toArray(), f, h);
      }),
      (s.prototype._initArray = function (o, f, h) {
        if ((i(typeof o.length == 'number'), o.length <= 0))
          return (this.words = [0]), (this.length = 1), this;
        (this.length = Math.ceil(o.length / 3)), (this.words = new Array(this.length));
        for (var c = 0; c < this.length; c++) this.words[c] = 0;
        var p,
          A,
          _ = 0;
        if (h === 'be')
          for (c = o.length - 1, p = 0; c >= 0; c -= 3)
            (A = o[c] | (o[c - 1] << 8) | (o[c - 2] << 16)),
              (this.words[p] |= (A << _) & 67108863),
              (this.words[p + 1] = (A >>> (26 - _)) & 67108863),
              (_ += 24),
              _ >= 26 && ((_ -= 26), p++);
        else if (h === 'le')
          for (c = 0, p = 0; c < o.length; c += 3)
            (A = o[c] | (o[c + 1] << 8) | (o[c + 2] << 16)),
              (this.words[p] |= (A << _) & 67108863),
              (this.words[p + 1] = (A >>> (26 - _)) & 67108863),
              (_ += 24),
              _ >= 26 && ((_ -= 26), p++);
        return this.strip();
      });
    function d(w, o) {
      var f = w.charCodeAt(o);
      return f >= 65 && f <= 70 ? f - 55 : f >= 97 && f <= 102 ? f - 87 : (f - 48) & 15;
    }
    function v(w, o, f) {
      var h = d(w, f);
      return f - 1 >= o && (h |= d(w, f - 1) << 4), h;
    }
    s.prototype._parseHex = function (o, f, h) {
      (this.length = Math.ceil((o.length - f) / 6)), (this.words = new Array(this.length));
      for (var c = 0; c < this.length; c++) this.words[c] = 0;
      var p = 0,
        A = 0,
        _;
      if (h === 'be')
        for (c = o.length - 1; c >= f; c -= 2)
          (_ = v(o, f, c) << p),
            (this.words[A] |= _ & 67108863),
            p >= 18 ? ((p -= 18), (A += 1), (this.words[A] |= _ >>> 26)) : (p += 8);
      else {
        var g = o.length - f;
        for (c = g % 2 === 0 ? f + 1 : f; c < o.length; c += 2)
          (_ = v(o, f, c) << p),
            (this.words[A] |= _ & 67108863),
            p >= 18 ? ((p -= 18), (A += 1), (this.words[A] |= _ >>> 26)) : (p += 8);
      }
      this.strip();
    };
    function E(w, o, f, h) {
      for (var c = 0, p = Math.min(w.length, f), A = o; A < p; A++) {
        var _ = w.charCodeAt(A) - 48;
        (c *= h), _ >= 49 ? (c += _ - 49 + 10) : _ >= 17 ? (c += _ - 17 + 10) : (c += _);
      }
      return c;
    }
    (s.prototype._parseBase = function (o, f, h) {
      (this.words = [0]), (this.length = 1);
      for (var c = 0, p = 1; p <= 67108863; p *= f) c++;
      c--, (p = (p / f) | 0);
      for (var A = o.length - h, _ = A % c, g = Math.min(A, A - _) + h, a = 0, m = h; m < g; m += c)
        (a = E(o, m, m + c, f)),
          this.imuln(p),
          this.words[0] + a < 67108864 ? (this.words[0] += a) : this._iaddn(a);
      if (_ !== 0) {
        var q = 1;
        for (a = E(o, m, o.length, f), m = 0; m < _; m++) q *= f;
        this.imuln(q), this.words[0] + a < 67108864 ? (this.words[0] += a) : this._iaddn(a);
      }
      this.strip();
    }),
      (s.prototype.copy = function (o) {
        o.words = new Array(this.length);
        for (var f = 0; f < this.length; f++) o.words[f] = this.words[f];
        (o.length = this.length), (o.negative = this.negative), (o.red = this.red);
      }),
      (s.prototype.clone = function () {
        var o = new s(null);
        return this.copy(o), o;
      }),
      (s.prototype._expand = function (o) {
        for (; this.length < o; ) this.words[this.length++] = 0;
        return this;
      }),
      (s.prototype.strip = function () {
        for (; this.length > 1 && this.words[this.length - 1] === 0; ) this.length--;
        return this._normSign();
      }),
      (s.prototype._normSign = function () {
        return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
      }),
      (s.prototype.inspect = function () {
        return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
      });
    var S = [
        '',
        '0',
        '00',
        '000',
        '0000',
        '00000',
        '000000',
        '0000000',
        '00000000',
        '000000000',
        '0000000000',
        '00000000000',
        '000000000000',
        '0000000000000',
        '00000000000000',
        '000000000000000',
        '0000000000000000',
        '00000000000000000',
        '000000000000000000',
        '0000000000000000000',
        '00000000000000000000',
        '000000000000000000000',
        '0000000000000000000000',
        '00000000000000000000000',
        '000000000000000000000000',
        '0000000000000000000000000',
      ],
      P = [
        0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5,
        5, 5, 5, 5, 5, 5, 5, 5,
      ],
      I = [
        0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7,
        19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881,
        64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149,
        243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176,
      ];
    (s.prototype.toString = function (o, f) {
      (o = o || 10), (f = f | 0 || 1);
      var h;
      if (o === 16 || o === 'hex') {
        h = '';
        for (var c = 0, p = 0, A = 0; A < this.length; A++) {
          var _ = this.words[A],
            g = (((_ << c) | p) & 16777215).toString(16);
          (p = (_ >>> (24 - c)) & 16777215),
            p !== 0 || A !== this.length - 1 ? (h = S[6 - g.length] + g + h) : (h = g + h),
            (c += 2),
            c >= 26 && ((c -= 26), A--);
        }
        for (p !== 0 && (h = p.toString(16) + h); h.length % f !== 0; ) h = '0' + h;
        return this.negative !== 0 && (h = '-' + h), h;
      }
      if (o === (o | 0) && o >= 2 && o <= 36) {
        var a = P[o],
          m = I[o];
        h = '';
        var q = this.clone();
        for (q.negative = 0; !q.isZero(); ) {
          var K = q.modn(m).toString(o);
          (q = q.idivn(m)), q.isZero() ? (h = K + h) : (h = S[a - K.length] + K + h);
        }
        for (this.isZero() && (h = '0' + h); h.length % f !== 0; ) h = '0' + h;
        return this.negative !== 0 && (h = '-' + h), h;
      }
      i(!1, 'Base should be between 2 and 36');
    }),
      (s.prototype.toNumber = function () {
        var o = this.words[0];
        return (
          this.length === 2
            ? (o += this.words[1] * 67108864)
            : this.length === 3 && this.words[2] === 1
              ? (o += 4503599627370496 + this.words[1] * 67108864)
              : this.length > 2 && i(!1, 'Number can only safely store up to 53 bits'),
          this.negative !== 0 ? -o : o
        );
      }),
      (s.prototype.toJSON = function () {
        return this.toString(16);
      }),
      (s.prototype.toBuffer = function (o, f) {
        return i(typeof u < 'u'), this.toArrayLike(u, o, f);
      }),
      (s.prototype.toArray = function (o, f) {
        return this.toArrayLike(Array, o, f);
      }),
      (s.prototype.toArrayLike = function (o, f, h) {
        var c = this.byteLength(),
          p = h || Math.max(1, c);
        i(c <= p, 'byte array longer than desired length'),
          i(p > 0, 'Requested array length <= 0'),
          this.strip();
        var A = f === 'le',
          _ = new o(p),
          g,
          a,
          m = this.clone();
        if (A) {
          for (a = 0; !m.isZero(); a++) (g = m.andln(255)), m.iushrn(8), (_[a] = g);
          for (; a < p; a++) _[a] = 0;
        } else {
          for (a = 0; a < p - c; a++) _[a] = 0;
          for (a = 0; !m.isZero(); a++) (g = m.andln(255)), m.iushrn(8), (_[p - a - 1] = g);
        }
        return _;
      }),
      Math.clz32
        ? (s.prototype._countBits = function (o) {
            return 32 - Math.clz32(o);
          })
        : (s.prototype._countBits = function (o) {
            var f = o,
              h = 0;
            return (
              f >= 4096 && ((h += 13), (f >>>= 13)),
              f >= 64 && ((h += 7), (f >>>= 7)),
              f >= 8 && ((h += 4), (f >>>= 4)),
              f >= 2 && ((h += 2), (f >>>= 2)),
              h + f
            );
          }),
      (s.prototype._zeroBits = function (o) {
        if (o === 0) return 26;
        var f = o,
          h = 0;
        return (
          f & 8191 || ((h += 13), (f >>>= 13)),
          f & 127 || ((h += 7), (f >>>= 7)),
          f & 15 || ((h += 4), (f >>>= 4)),
          f & 3 || ((h += 2), (f >>>= 2)),
          f & 1 || h++,
          h
        );
      }),
      (s.prototype.bitLength = function () {
        var o = this.words[this.length - 1],
          f = this._countBits(o);
        return (this.length - 1) * 26 + f;
      });
    function R(w) {
      for (var o = new Array(w.bitLength()), f = 0; f < o.length; f++) {
        var h = (f / 26) | 0,
          c = f % 26;
        o[f] = (w.words[h] & (1 << c)) >>> c;
      }
      return o;
    }
    (s.prototype.zeroBits = function () {
      if (this.isZero()) return 0;
      for (var o = 0, f = 0; f < this.length; f++) {
        var h = this._zeroBits(this.words[f]);
        if (((o += h), h !== 26)) break;
      }
      return o;
    }),
      (s.prototype.byteLength = function () {
        return Math.ceil(this.bitLength() / 8);
      }),
      (s.prototype.toTwos = function (o) {
        return this.negative !== 0 ? this.abs().inotn(o).iaddn(1) : this.clone();
      }),
      (s.prototype.fromTwos = function (o) {
        return this.testn(o - 1) ? this.notn(o).iaddn(1).ineg() : this.clone();
      }),
      (s.prototype.isNeg = function () {
        return this.negative !== 0;
      }),
      (s.prototype.neg = function () {
        return this.clone().ineg();
      }),
      (s.prototype.ineg = function () {
        return this.isZero() || (this.negative ^= 1), this;
      }),
      (s.prototype.iuor = function (o) {
        for (; this.length < o.length; ) this.words[this.length++] = 0;
        for (var f = 0; f < o.length; f++) this.words[f] = this.words[f] | o.words[f];
        return this.strip();
      }),
      (s.prototype.ior = function (o) {
        return i((this.negative | o.negative) === 0), this.iuor(o);
      }),
      (s.prototype.or = function (o) {
        return this.length > o.length ? this.clone().ior(o) : o.clone().ior(this);
      }),
      (s.prototype.uor = function (o) {
        return this.length > o.length ? this.clone().iuor(o) : o.clone().iuor(this);
      }),
      (s.prototype.iuand = function (o) {
        var f;
        this.length > o.length ? (f = o) : (f = this);
        for (var h = 0; h < f.length; h++) this.words[h] = this.words[h] & o.words[h];
        return (this.length = f.length), this.strip();
      }),
      (s.prototype.iand = function (o) {
        return i((this.negative | o.negative) === 0), this.iuand(o);
      }),
      (s.prototype.and = function (o) {
        return this.length > o.length ? this.clone().iand(o) : o.clone().iand(this);
      }),
      (s.prototype.uand = function (o) {
        return this.length > o.length ? this.clone().iuand(o) : o.clone().iuand(this);
      }),
      (s.prototype.iuxor = function (o) {
        var f, h;
        this.length > o.length ? ((f = this), (h = o)) : ((f = o), (h = this));
        for (var c = 0; c < h.length; c++) this.words[c] = f.words[c] ^ h.words[c];
        if (this !== f) for (; c < f.length; c++) this.words[c] = f.words[c];
        return (this.length = f.length), this.strip();
      }),
      (s.prototype.ixor = function (o) {
        return i((this.negative | o.negative) === 0), this.iuxor(o);
      }),
      (s.prototype.xor = function (o) {
        return this.length > o.length ? this.clone().ixor(o) : o.clone().ixor(this);
      }),
      (s.prototype.uxor = function (o) {
        return this.length > o.length ? this.clone().iuxor(o) : o.clone().iuxor(this);
      }),
      (s.prototype.inotn = function (o) {
        i(typeof o == 'number' && o >= 0);
        var f = Math.ceil(o / 26) | 0,
          h = o % 26;
        this._expand(f), h > 0 && f--;
        for (var c = 0; c < f; c++) this.words[c] = ~this.words[c] & 67108863;
        return h > 0 && (this.words[c] = ~this.words[c] & (67108863 >> (26 - h))), this.strip();
      }),
      (s.prototype.notn = function (o) {
        return this.clone().inotn(o);
      }),
      (s.prototype.setn = function (o, f) {
        i(typeof o == 'number' && o >= 0);
        var h = (o / 26) | 0,
          c = o % 26;
        return (
          this._expand(h + 1),
          f
            ? (this.words[h] = this.words[h] | (1 << c))
            : (this.words[h] = this.words[h] & ~(1 << c)),
          this.strip()
        );
      }),
      (s.prototype.iadd = function (o) {
        var f;
        if (this.negative !== 0 && o.negative === 0)
          return (this.negative = 0), (f = this.isub(o)), (this.negative ^= 1), this._normSign();
        if (this.negative === 0 && o.negative !== 0)
          return (o.negative = 0), (f = this.isub(o)), (o.negative = 1), f._normSign();
        var h, c;
        this.length > o.length ? ((h = this), (c = o)) : ((h = o), (c = this));
        for (var p = 0, A = 0; A < c.length; A++)
          (f = (h.words[A] | 0) + (c.words[A] | 0) + p),
            (this.words[A] = f & 67108863),
            (p = f >>> 26);
        for (; p !== 0 && A < h.length; A++)
          (f = (h.words[A] | 0) + p), (this.words[A] = f & 67108863), (p = f >>> 26);
        if (((this.length = h.length), p !== 0)) (this.words[this.length] = p), this.length++;
        else if (h !== this) for (; A < h.length; A++) this.words[A] = h.words[A];
        return this;
      }),
      (s.prototype.add = function (o) {
        var f;
        return o.negative !== 0 && this.negative === 0
          ? ((o.negative = 0), (f = this.sub(o)), (o.negative ^= 1), f)
          : o.negative === 0 && this.negative !== 0
            ? ((this.negative = 0), (f = o.sub(this)), (this.negative = 1), f)
            : this.length > o.length
              ? this.clone().iadd(o)
              : o.clone().iadd(this);
      }),
      (s.prototype.isub = function (o) {
        if (o.negative !== 0) {
          o.negative = 0;
          var f = this.iadd(o);
          return (o.negative = 1), f._normSign();
        } else if (this.negative !== 0)
          return (this.negative = 0), this.iadd(o), (this.negative = 1), this._normSign();
        var h = this.cmp(o);
        if (h === 0) return (this.negative = 0), (this.length = 1), (this.words[0] = 0), this;
        var c, p;
        h > 0 ? ((c = this), (p = o)) : ((c = o), (p = this));
        for (var A = 0, _ = 0; _ < p.length; _++)
          (f = (c.words[_] | 0) - (p.words[_] | 0) + A),
            (A = f >> 26),
            (this.words[_] = f & 67108863);
        for (; A !== 0 && _ < c.length; _++)
          (f = (c.words[_] | 0) + A), (A = f >> 26), (this.words[_] = f & 67108863);
        if (A === 0 && _ < c.length && c !== this)
          for (; _ < c.length; _++) this.words[_] = c.words[_];
        return (
          (this.length = Math.max(this.length, _)), c !== this && (this.negative = 1), this.strip()
        );
      }),
      (s.prototype.sub = function (o) {
        return this.clone().isub(o);
      });
    function C(w, o, f) {
      f.negative = o.negative ^ w.negative;
      var h = (w.length + o.length) | 0;
      (f.length = h), (h = (h - 1) | 0);
      var c = w.words[0] | 0,
        p = o.words[0] | 0,
        A = c * p,
        _ = A & 67108863,
        g = (A / 67108864) | 0;
      f.words[0] = _;
      for (var a = 1; a < h; a++) {
        for (
          var m = g >>> 26,
            q = g & 67108863,
            K = Math.min(a, o.length - 1),
            H = Math.max(0, a - w.length + 1);
          H <= K;
          H++
        ) {
          var G = (a - H) | 0;
          (c = w.words[G] | 0),
            (p = o.words[H] | 0),
            (A = c * p + q),
            (m += (A / 67108864) | 0),
            (q = A & 67108863);
        }
        (f.words[a] = q | 0), (g = m | 0);
      }
      return g !== 0 ? (f.words[a] = g | 0) : f.length--, f.strip();
    }
    var j = function (o, f, h) {
      var c = o.words,
        p = f.words,
        A = h.words,
        _ = 0,
        g,
        a,
        m,
        q = c[0] | 0,
        K = q & 8191,
        H = q >>> 13,
        G = c[1] | 0,
        st = G & 8191,
        mt = G >>> 13,
        Ne = c[2] | 0,
        pt = Ne & 8191,
        Et = Ne >>> 13,
        Ir = c[3] | 0,
        Ot = Ir & 8191,
        Jt = Ir >>> 13,
        zr = c[4] | 0,
        te = zr & 8191,
        ee = zr >>> 13,
        Br = c[5] | 0,
        Yt = Br & 8191,
        Nt = Br >>> 13,
        hr = c[6] | 0,
        Zt = hr & 8191,
        Ft = hr >>> 13,
        wr = c[7] | 0,
        Ut = wr & 8191,
        Ht = wr >>> 13,
        lr = c[8] | 0,
        Gt = lr & 8191,
        Dt = lr >>> 13,
        br = c[9] | 0,
        Qt = br & 8191,
        zt = br >>> 13,
        cr = p[0] | 0,
        Ct = cr & 8191,
        Bt = cr >>> 13,
        We = p[1] | 0,
        Tt = We & 8191,
        Lt = We >>> 13,
        sr = p[2] | 0,
        Rt = sr & 8191,
        Kt = sr >>> 13,
        Ar = p[3] | 0,
        Wt = Ar & 8191,
        Xt = Ar >>> 13,
        qe = p[4] | 0,
        Pt = qe & 8191,
        kt = qe >>> 13,
        dr = p[5] | 0,
        qt = dr & 8191,
        jt = dr >>> 13,
        Tr = p[6] | 0,
        vt = Tr & 8191,
        Vt = Tr >>> 13,
        y = p[7] | 0,
        x = y & 8191,
        b = y >>> 13,
        l = p[8] | 0,
        M = l & 8191,
        k = l >>> 13,
        T = p[9] | 0,
        L = T & 8191,
        D = T >>> 13;
      (h.negative = o.negative ^ f.negative),
        (h.length = 19),
        (g = Math.imul(K, Ct)),
        (a = Math.imul(K, Bt)),
        (a = (a + Math.imul(H, Ct)) | 0),
        (m = Math.imul(H, Bt));
      var lt = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (lt >>> 26)) | 0),
        (lt &= 67108863),
        (g = Math.imul(st, Ct)),
        (a = Math.imul(st, Bt)),
        (a = (a + Math.imul(mt, Ct)) | 0),
        (m = Math.imul(mt, Bt)),
        (g = (g + Math.imul(K, Tt)) | 0),
        (a = (a + Math.imul(K, Lt)) | 0),
        (a = (a + Math.imul(H, Tt)) | 0),
        (m = (m + Math.imul(H, Lt)) | 0);
      var et = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (et >>> 26)) | 0),
        (et &= 67108863),
        (g = Math.imul(pt, Ct)),
        (a = Math.imul(pt, Bt)),
        (a = (a + Math.imul(Et, Ct)) | 0),
        (m = Math.imul(Et, Bt)),
        (g = (g + Math.imul(st, Tt)) | 0),
        (a = (a + Math.imul(st, Lt)) | 0),
        (a = (a + Math.imul(mt, Tt)) | 0),
        (m = (m + Math.imul(mt, Lt)) | 0),
        (g = (g + Math.imul(K, Rt)) | 0),
        (a = (a + Math.imul(K, Kt)) | 0),
        (a = (a + Math.imul(H, Rt)) | 0),
        (m = (m + Math.imul(H, Kt)) | 0);
      var ie = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (ie >>> 26)) | 0),
        (ie &= 67108863),
        (g = Math.imul(Ot, Ct)),
        (a = Math.imul(Ot, Bt)),
        (a = (a + Math.imul(Jt, Ct)) | 0),
        (m = Math.imul(Jt, Bt)),
        (g = (g + Math.imul(pt, Tt)) | 0),
        (a = (a + Math.imul(pt, Lt)) | 0),
        (a = (a + Math.imul(Et, Tt)) | 0),
        (m = (m + Math.imul(Et, Lt)) | 0),
        (g = (g + Math.imul(st, Rt)) | 0),
        (a = (a + Math.imul(st, Kt)) | 0),
        (a = (a + Math.imul(mt, Rt)) | 0),
        (m = (m + Math.imul(mt, Kt)) | 0),
        (g = (g + Math.imul(K, Wt)) | 0),
        (a = (a + Math.imul(K, Xt)) | 0),
        (a = (a + Math.imul(H, Wt)) | 0),
        (m = (m + Math.imul(H, Xt)) | 0);
      var nt = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (nt >>> 26)) | 0),
        (nt &= 67108863),
        (g = Math.imul(te, Ct)),
        (a = Math.imul(te, Bt)),
        (a = (a + Math.imul(ee, Ct)) | 0),
        (m = Math.imul(ee, Bt)),
        (g = (g + Math.imul(Ot, Tt)) | 0),
        (a = (a + Math.imul(Ot, Lt)) | 0),
        (a = (a + Math.imul(Jt, Tt)) | 0),
        (m = (m + Math.imul(Jt, Lt)) | 0),
        (g = (g + Math.imul(pt, Rt)) | 0),
        (a = (a + Math.imul(pt, Kt)) | 0),
        (a = (a + Math.imul(Et, Rt)) | 0),
        (m = (m + Math.imul(Et, Kt)) | 0),
        (g = (g + Math.imul(st, Wt)) | 0),
        (a = (a + Math.imul(st, Xt)) | 0),
        (a = (a + Math.imul(mt, Wt)) | 0),
        (m = (m + Math.imul(mt, Xt)) | 0),
        (g = (g + Math.imul(K, Pt)) | 0),
        (a = (a + Math.imul(K, kt)) | 0),
        (a = (a + Math.imul(H, Pt)) | 0),
        (m = (m + Math.imul(H, kt)) | 0);
      var yt = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (yt >>> 26)) | 0),
        (yt &= 67108863),
        (g = Math.imul(Yt, Ct)),
        (a = Math.imul(Yt, Bt)),
        (a = (a + Math.imul(Nt, Ct)) | 0),
        (m = Math.imul(Nt, Bt)),
        (g = (g + Math.imul(te, Tt)) | 0),
        (a = (a + Math.imul(te, Lt)) | 0),
        (a = (a + Math.imul(ee, Tt)) | 0),
        (m = (m + Math.imul(ee, Lt)) | 0),
        (g = (g + Math.imul(Ot, Rt)) | 0),
        (a = (a + Math.imul(Ot, Kt)) | 0),
        (a = (a + Math.imul(Jt, Rt)) | 0),
        (m = (m + Math.imul(Jt, Kt)) | 0),
        (g = (g + Math.imul(pt, Wt)) | 0),
        (a = (a + Math.imul(pt, Xt)) | 0),
        (a = (a + Math.imul(Et, Wt)) | 0),
        (m = (m + Math.imul(Et, Xt)) | 0),
        (g = (g + Math.imul(st, Pt)) | 0),
        (a = (a + Math.imul(st, kt)) | 0),
        (a = (a + Math.imul(mt, Pt)) | 0),
        (m = (m + Math.imul(mt, kt)) | 0),
        (g = (g + Math.imul(K, qt)) | 0),
        (a = (a + Math.imul(K, jt)) | 0),
        (a = (a + Math.imul(H, qt)) | 0),
        (m = (m + Math.imul(H, jt)) | 0);
      var wt = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (wt >>> 26)) | 0),
        (wt &= 67108863),
        (g = Math.imul(Zt, Ct)),
        (a = Math.imul(Zt, Bt)),
        (a = (a + Math.imul(Ft, Ct)) | 0),
        (m = Math.imul(Ft, Bt)),
        (g = (g + Math.imul(Yt, Tt)) | 0),
        (a = (a + Math.imul(Yt, Lt)) | 0),
        (a = (a + Math.imul(Nt, Tt)) | 0),
        (m = (m + Math.imul(Nt, Lt)) | 0),
        (g = (g + Math.imul(te, Rt)) | 0),
        (a = (a + Math.imul(te, Kt)) | 0),
        (a = (a + Math.imul(ee, Rt)) | 0),
        (m = (m + Math.imul(ee, Kt)) | 0),
        (g = (g + Math.imul(Ot, Wt)) | 0),
        (a = (a + Math.imul(Ot, Xt)) | 0),
        (a = (a + Math.imul(Jt, Wt)) | 0),
        (m = (m + Math.imul(Jt, Xt)) | 0),
        (g = (g + Math.imul(pt, Pt)) | 0),
        (a = (a + Math.imul(pt, kt)) | 0),
        (a = (a + Math.imul(Et, Pt)) | 0),
        (m = (m + Math.imul(Et, kt)) | 0),
        (g = (g + Math.imul(st, qt)) | 0),
        (a = (a + Math.imul(st, jt)) | 0),
        (a = (a + Math.imul(mt, qt)) | 0),
        (m = (m + Math.imul(mt, jt)) | 0),
        (g = (g + Math.imul(K, vt)) | 0),
        (a = (a + Math.imul(K, Vt)) | 0),
        (a = (a + Math.imul(H, vt)) | 0),
        (m = (m + Math.imul(H, Vt)) | 0);
      var St = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (St >>> 26)) | 0),
        (St &= 67108863),
        (g = Math.imul(Ut, Ct)),
        (a = Math.imul(Ut, Bt)),
        (a = (a + Math.imul(Ht, Ct)) | 0),
        (m = Math.imul(Ht, Bt)),
        (g = (g + Math.imul(Zt, Tt)) | 0),
        (a = (a + Math.imul(Zt, Lt)) | 0),
        (a = (a + Math.imul(Ft, Tt)) | 0),
        (m = (m + Math.imul(Ft, Lt)) | 0),
        (g = (g + Math.imul(Yt, Rt)) | 0),
        (a = (a + Math.imul(Yt, Kt)) | 0),
        (a = (a + Math.imul(Nt, Rt)) | 0),
        (m = (m + Math.imul(Nt, Kt)) | 0),
        (g = (g + Math.imul(te, Wt)) | 0),
        (a = (a + Math.imul(te, Xt)) | 0),
        (a = (a + Math.imul(ee, Wt)) | 0),
        (m = (m + Math.imul(ee, Xt)) | 0),
        (g = (g + Math.imul(Ot, Pt)) | 0),
        (a = (a + Math.imul(Ot, kt)) | 0),
        (a = (a + Math.imul(Jt, Pt)) | 0),
        (m = (m + Math.imul(Jt, kt)) | 0),
        (g = (g + Math.imul(pt, qt)) | 0),
        (a = (a + Math.imul(pt, jt)) | 0),
        (a = (a + Math.imul(Et, qt)) | 0),
        (m = (m + Math.imul(Et, jt)) | 0),
        (g = (g + Math.imul(st, vt)) | 0),
        (a = (a + Math.imul(st, Vt)) | 0),
        (a = (a + Math.imul(mt, vt)) | 0),
        (m = (m + Math.imul(mt, Vt)) | 0),
        (g = (g + Math.imul(K, x)) | 0),
        (a = (a + Math.imul(K, b)) | 0),
        (a = (a + Math.imul(H, x)) | 0),
        (m = (m + Math.imul(H, b)) | 0);
      var _t = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (_t >>> 26)) | 0),
        (_t &= 67108863),
        (g = Math.imul(Gt, Ct)),
        (a = Math.imul(Gt, Bt)),
        (a = (a + Math.imul(Dt, Ct)) | 0),
        (m = Math.imul(Dt, Bt)),
        (g = (g + Math.imul(Ut, Tt)) | 0),
        (a = (a + Math.imul(Ut, Lt)) | 0),
        (a = (a + Math.imul(Ht, Tt)) | 0),
        (m = (m + Math.imul(Ht, Lt)) | 0),
        (g = (g + Math.imul(Zt, Rt)) | 0),
        (a = (a + Math.imul(Zt, Kt)) | 0),
        (a = (a + Math.imul(Ft, Rt)) | 0),
        (m = (m + Math.imul(Ft, Kt)) | 0),
        (g = (g + Math.imul(Yt, Wt)) | 0),
        (a = (a + Math.imul(Yt, Xt)) | 0),
        (a = (a + Math.imul(Nt, Wt)) | 0),
        (m = (m + Math.imul(Nt, Xt)) | 0),
        (g = (g + Math.imul(te, Pt)) | 0),
        (a = (a + Math.imul(te, kt)) | 0),
        (a = (a + Math.imul(ee, Pt)) | 0),
        (m = (m + Math.imul(ee, kt)) | 0),
        (g = (g + Math.imul(Ot, qt)) | 0),
        (a = (a + Math.imul(Ot, jt)) | 0),
        (a = (a + Math.imul(Jt, qt)) | 0),
        (m = (m + Math.imul(Jt, jt)) | 0),
        (g = (g + Math.imul(pt, vt)) | 0),
        (a = (a + Math.imul(pt, Vt)) | 0),
        (a = (a + Math.imul(Et, vt)) | 0),
        (m = (m + Math.imul(Et, Vt)) | 0),
        (g = (g + Math.imul(st, x)) | 0),
        (a = (a + Math.imul(st, b)) | 0),
        (a = (a + Math.imul(mt, x)) | 0),
        (m = (m + Math.imul(mt, b)) | 0),
        (g = (g + Math.imul(K, M)) | 0),
        (a = (a + Math.imul(K, k)) | 0),
        (a = (a + Math.imul(H, M)) | 0),
        (m = (m + Math.imul(H, k)) | 0);
      var bt = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (bt >>> 26)) | 0),
        (bt &= 67108863),
        (g = Math.imul(Qt, Ct)),
        (a = Math.imul(Qt, Bt)),
        (a = (a + Math.imul(zt, Ct)) | 0),
        (m = Math.imul(zt, Bt)),
        (g = (g + Math.imul(Gt, Tt)) | 0),
        (a = (a + Math.imul(Gt, Lt)) | 0),
        (a = (a + Math.imul(Dt, Tt)) | 0),
        (m = (m + Math.imul(Dt, Lt)) | 0),
        (g = (g + Math.imul(Ut, Rt)) | 0),
        (a = (a + Math.imul(Ut, Kt)) | 0),
        (a = (a + Math.imul(Ht, Rt)) | 0),
        (m = (m + Math.imul(Ht, Kt)) | 0),
        (g = (g + Math.imul(Zt, Wt)) | 0),
        (a = (a + Math.imul(Zt, Xt)) | 0),
        (a = (a + Math.imul(Ft, Wt)) | 0),
        (m = (m + Math.imul(Ft, Xt)) | 0),
        (g = (g + Math.imul(Yt, Pt)) | 0),
        (a = (a + Math.imul(Yt, kt)) | 0),
        (a = (a + Math.imul(Nt, Pt)) | 0),
        (m = (m + Math.imul(Nt, kt)) | 0),
        (g = (g + Math.imul(te, qt)) | 0),
        (a = (a + Math.imul(te, jt)) | 0),
        (a = (a + Math.imul(ee, qt)) | 0),
        (m = (m + Math.imul(ee, jt)) | 0),
        (g = (g + Math.imul(Ot, vt)) | 0),
        (a = (a + Math.imul(Ot, Vt)) | 0),
        (a = (a + Math.imul(Jt, vt)) | 0),
        (m = (m + Math.imul(Jt, Vt)) | 0),
        (g = (g + Math.imul(pt, x)) | 0),
        (a = (a + Math.imul(pt, b)) | 0),
        (a = (a + Math.imul(Et, x)) | 0),
        (m = (m + Math.imul(Et, b)) | 0),
        (g = (g + Math.imul(st, M)) | 0),
        (a = (a + Math.imul(st, k)) | 0),
        (a = (a + Math.imul(mt, M)) | 0),
        (m = (m + Math.imul(mt, k)) | 0),
        (g = (g + Math.imul(K, L)) | 0),
        (a = (a + Math.imul(K, D)) | 0),
        (a = (a + Math.imul(H, L)) | 0),
        (m = (m + Math.imul(H, D)) | 0);
      var Mt = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (Mt >>> 26)) | 0),
        (Mt &= 67108863),
        (g = Math.imul(Qt, Tt)),
        (a = Math.imul(Qt, Lt)),
        (a = (a + Math.imul(zt, Tt)) | 0),
        (m = Math.imul(zt, Lt)),
        (g = (g + Math.imul(Gt, Rt)) | 0),
        (a = (a + Math.imul(Gt, Kt)) | 0),
        (a = (a + Math.imul(Dt, Rt)) | 0),
        (m = (m + Math.imul(Dt, Kt)) | 0),
        (g = (g + Math.imul(Ut, Wt)) | 0),
        (a = (a + Math.imul(Ut, Xt)) | 0),
        (a = (a + Math.imul(Ht, Wt)) | 0),
        (m = (m + Math.imul(Ht, Xt)) | 0),
        (g = (g + Math.imul(Zt, Pt)) | 0),
        (a = (a + Math.imul(Zt, kt)) | 0),
        (a = (a + Math.imul(Ft, Pt)) | 0),
        (m = (m + Math.imul(Ft, kt)) | 0),
        (g = (g + Math.imul(Yt, qt)) | 0),
        (a = (a + Math.imul(Yt, jt)) | 0),
        (a = (a + Math.imul(Nt, qt)) | 0),
        (m = (m + Math.imul(Nt, jt)) | 0),
        (g = (g + Math.imul(te, vt)) | 0),
        (a = (a + Math.imul(te, Vt)) | 0),
        (a = (a + Math.imul(ee, vt)) | 0),
        (m = (m + Math.imul(ee, Vt)) | 0),
        (g = (g + Math.imul(Ot, x)) | 0),
        (a = (a + Math.imul(Ot, b)) | 0),
        (a = (a + Math.imul(Jt, x)) | 0),
        (m = (m + Math.imul(Jt, b)) | 0),
        (g = (g + Math.imul(pt, M)) | 0),
        (a = (a + Math.imul(pt, k)) | 0),
        (a = (a + Math.imul(Et, M)) | 0),
        (m = (m + Math.imul(Et, k)) | 0),
        (g = (g + Math.imul(st, L)) | 0),
        (a = (a + Math.imul(st, D)) | 0),
        (a = (a + Math.imul(mt, L)) | 0),
        (m = (m + Math.imul(mt, D)) | 0);
      var At = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (At >>> 26)) | 0),
        (At &= 67108863),
        (g = Math.imul(Qt, Rt)),
        (a = Math.imul(Qt, Kt)),
        (a = (a + Math.imul(zt, Rt)) | 0),
        (m = Math.imul(zt, Kt)),
        (g = (g + Math.imul(Gt, Wt)) | 0),
        (a = (a + Math.imul(Gt, Xt)) | 0),
        (a = (a + Math.imul(Dt, Wt)) | 0),
        (m = (m + Math.imul(Dt, Xt)) | 0),
        (g = (g + Math.imul(Ut, Pt)) | 0),
        (a = (a + Math.imul(Ut, kt)) | 0),
        (a = (a + Math.imul(Ht, Pt)) | 0),
        (m = (m + Math.imul(Ht, kt)) | 0),
        (g = (g + Math.imul(Zt, qt)) | 0),
        (a = (a + Math.imul(Zt, jt)) | 0),
        (a = (a + Math.imul(Ft, qt)) | 0),
        (m = (m + Math.imul(Ft, jt)) | 0),
        (g = (g + Math.imul(Yt, vt)) | 0),
        (a = (a + Math.imul(Yt, Vt)) | 0),
        (a = (a + Math.imul(Nt, vt)) | 0),
        (m = (m + Math.imul(Nt, Vt)) | 0),
        (g = (g + Math.imul(te, x)) | 0),
        (a = (a + Math.imul(te, b)) | 0),
        (a = (a + Math.imul(ee, x)) | 0),
        (m = (m + Math.imul(ee, b)) | 0),
        (g = (g + Math.imul(Ot, M)) | 0),
        (a = (a + Math.imul(Ot, k)) | 0),
        (a = (a + Math.imul(Jt, M)) | 0),
        (m = (m + Math.imul(Jt, k)) | 0),
        (g = (g + Math.imul(pt, L)) | 0),
        (a = (a + Math.imul(pt, D)) | 0),
        (a = (a + Math.imul(Et, L)) | 0),
        (m = (m + Math.imul(Et, D)) | 0);
      var ot = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (ot >>> 26)) | 0),
        (ot &= 67108863),
        (g = Math.imul(Qt, Wt)),
        (a = Math.imul(Qt, Xt)),
        (a = (a + Math.imul(zt, Wt)) | 0),
        (m = Math.imul(zt, Xt)),
        (g = (g + Math.imul(Gt, Pt)) | 0),
        (a = (a + Math.imul(Gt, kt)) | 0),
        (a = (a + Math.imul(Dt, Pt)) | 0),
        (m = (m + Math.imul(Dt, kt)) | 0),
        (g = (g + Math.imul(Ut, qt)) | 0),
        (a = (a + Math.imul(Ut, jt)) | 0),
        (a = (a + Math.imul(Ht, qt)) | 0),
        (m = (m + Math.imul(Ht, jt)) | 0),
        (g = (g + Math.imul(Zt, vt)) | 0),
        (a = (a + Math.imul(Zt, Vt)) | 0),
        (a = (a + Math.imul(Ft, vt)) | 0),
        (m = (m + Math.imul(Ft, Vt)) | 0),
        (g = (g + Math.imul(Yt, x)) | 0),
        (a = (a + Math.imul(Yt, b)) | 0),
        (a = (a + Math.imul(Nt, x)) | 0),
        (m = (m + Math.imul(Nt, b)) | 0),
        (g = (g + Math.imul(te, M)) | 0),
        (a = (a + Math.imul(te, k)) | 0),
        (a = (a + Math.imul(ee, M)) | 0),
        (m = (m + Math.imul(ee, k)) | 0),
        (g = (g + Math.imul(Ot, L)) | 0),
        (a = (a + Math.imul(Ot, D)) | 0),
        (a = (a + Math.imul(Jt, L)) | 0),
        (m = (m + Math.imul(Jt, D)) | 0);
      var dt = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (dt >>> 26)) | 0),
        (dt &= 67108863),
        (g = Math.imul(Qt, Pt)),
        (a = Math.imul(Qt, kt)),
        (a = (a + Math.imul(zt, Pt)) | 0),
        (m = Math.imul(zt, kt)),
        (g = (g + Math.imul(Gt, qt)) | 0),
        (a = (a + Math.imul(Gt, jt)) | 0),
        (a = (a + Math.imul(Dt, qt)) | 0),
        (m = (m + Math.imul(Dt, jt)) | 0),
        (g = (g + Math.imul(Ut, vt)) | 0),
        (a = (a + Math.imul(Ut, Vt)) | 0),
        (a = (a + Math.imul(Ht, vt)) | 0),
        (m = (m + Math.imul(Ht, Vt)) | 0),
        (g = (g + Math.imul(Zt, x)) | 0),
        (a = (a + Math.imul(Zt, b)) | 0),
        (a = (a + Math.imul(Ft, x)) | 0),
        (m = (m + Math.imul(Ft, b)) | 0),
        (g = (g + Math.imul(Yt, M)) | 0),
        (a = (a + Math.imul(Yt, k)) | 0),
        (a = (a + Math.imul(Nt, M)) | 0),
        (m = (m + Math.imul(Nt, k)) | 0),
        (g = (g + Math.imul(te, L)) | 0),
        (a = (a + Math.imul(te, D)) | 0),
        (a = (a + Math.imul(ee, L)) | 0),
        (m = (m + Math.imul(ee, D)) | 0);
      var rt = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (rt >>> 26)) | 0),
        (rt &= 67108863),
        (g = Math.imul(Qt, qt)),
        (a = Math.imul(Qt, jt)),
        (a = (a + Math.imul(zt, qt)) | 0),
        (m = Math.imul(zt, jt)),
        (g = (g + Math.imul(Gt, vt)) | 0),
        (a = (a + Math.imul(Gt, Vt)) | 0),
        (a = (a + Math.imul(Dt, vt)) | 0),
        (m = (m + Math.imul(Dt, Vt)) | 0),
        (g = (g + Math.imul(Ut, x)) | 0),
        (a = (a + Math.imul(Ut, b)) | 0),
        (a = (a + Math.imul(Ht, x)) | 0),
        (m = (m + Math.imul(Ht, b)) | 0),
        (g = (g + Math.imul(Zt, M)) | 0),
        (a = (a + Math.imul(Zt, k)) | 0),
        (a = (a + Math.imul(Ft, M)) | 0),
        (m = (m + Math.imul(Ft, k)) | 0),
        (g = (g + Math.imul(Yt, L)) | 0),
        (a = (a + Math.imul(Yt, D)) | 0),
        (a = (a + Math.imul(Nt, L)) | 0),
        (m = (m + Math.imul(Nt, D)) | 0);
      var ft = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (ft >>> 26)) | 0),
        (ft &= 67108863),
        (g = Math.imul(Qt, vt)),
        (a = Math.imul(Qt, Vt)),
        (a = (a + Math.imul(zt, vt)) | 0),
        (m = Math.imul(zt, Vt)),
        (g = (g + Math.imul(Gt, x)) | 0),
        (a = (a + Math.imul(Gt, b)) | 0),
        (a = (a + Math.imul(Dt, x)) | 0),
        (m = (m + Math.imul(Dt, b)) | 0),
        (g = (g + Math.imul(Ut, M)) | 0),
        (a = (a + Math.imul(Ut, k)) | 0),
        (a = (a + Math.imul(Ht, M)) | 0),
        (m = (m + Math.imul(Ht, k)) | 0),
        (g = (g + Math.imul(Zt, L)) | 0),
        (a = (a + Math.imul(Zt, D)) | 0),
        (a = (a + Math.imul(Ft, L)) | 0),
        (m = (m + Math.imul(Ft, D)) | 0);
      var ht = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (ht >>> 26)) | 0),
        (ht &= 67108863),
        (g = Math.imul(Qt, x)),
        (a = Math.imul(Qt, b)),
        (a = (a + Math.imul(zt, x)) | 0),
        (m = Math.imul(zt, b)),
        (g = (g + Math.imul(Gt, M)) | 0),
        (a = (a + Math.imul(Gt, k)) | 0),
        (a = (a + Math.imul(Dt, M)) | 0),
        (m = (m + Math.imul(Dt, k)) | 0),
        (g = (g + Math.imul(Ut, L)) | 0),
        (a = (a + Math.imul(Ut, D)) | 0),
        (a = (a + Math.imul(Ht, L)) | 0),
        (m = (m + Math.imul(Ht, D)) | 0);
      var it = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (it >>> 26)) | 0),
        (it &= 67108863),
        (g = Math.imul(Qt, M)),
        (a = Math.imul(Qt, k)),
        (a = (a + Math.imul(zt, M)) | 0),
        (m = Math.imul(zt, k)),
        (g = (g + Math.imul(Gt, L)) | 0),
        (a = (a + Math.imul(Gt, D)) | 0),
        (a = (a + Math.imul(Dt, L)) | 0),
        (m = (m + Math.imul(Dt, D)) | 0);
      var O = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (O >>> 26)) | 0),
        (O &= 67108863),
        (g = Math.imul(Qt, L)),
        (a = Math.imul(Qt, D)),
        (a = (a + Math.imul(zt, L)) | 0),
        (m = Math.imul(zt, D));
      var U = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      return (
        (_ = (((m + (a >>> 13)) | 0) + (U >>> 26)) | 0),
        (U &= 67108863),
        (A[0] = lt),
        (A[1] = et),
        (A[2] = ie),
        (A[3] = nt),
        (A[4] = yt),
        (A[5] = wt),
        (A[6] = St),
        (A[7] = _t),
        (A[8] = bt),
        (A[9] = Mt),
        (A[10] = At),
        (A[11] = ot),
        (A[12] = dt),
        (A[13] = rt),
        (A[14] = ft),
        (A[15] = ht),
        (A[16] = it),
        (A[17] = O),
        (A[18] = U),
        _ !== 0 && ((A[19] = _), h.length++),
        h
      );
    };
    Math.imul || (j = C);
    function ct(w, o, f) {
      (f.negative = o.negative ^ w.negative), (f.length = w.length + o.length);
      for (var h = 0, c = 0, p = 0; p < f.length - 1; p++) {
        var A = c;
        c = 0;
        for (
          var _ = h & 67108863, g = Math.min(p, o.length - 1), a = Math.max(0, p - w.length + 1);
          a <= g;
          a++
        ) {
          var m = p - a,
            q = w.words[m] | 0,
            K = o.words[a] | 0,
            H = q * K,
            G = H & 67108863;
          (A = (A + ((H / 67108864) | 0)) | 0),
            (G = (G + _) | 0),
            (_ = G & 67108863),
            (A = (A + (G >>> 26)) | 0),
            (c += A >>> 26),
            (A &= 67108863);
        }
        (f.words[p] = _), (h = A), (A = c);
      }
      return h !== 0 ? (f.words[p] = h) : f.length--, f.strip();
    }
    function W(w, o, f) {
      var h = new B();
      return h.mulp(w, o, f);
    }
    s.prototype.mulTo = function (o, f) {
      var h,
        c = this.length + o.length;
      return (
        this.length === 10 && o.length === 10
          ? (h = j(this, o, f))
          : c < 63
            ? (h = C(this, o, f))
            : c < 1024
              ? (h = ct(this, o, f))
              : (h = W(this, o, f)),
        h
      );
    };
    function B(w, o) {
      (this.x = w), (this.y = o);
    }
    (B.prototype.makeRBT = function (o) {
      for (var f = new Array(o), h = s.prototype._countBits(o) - 1, c = 0; c < o; c++)
        f[c] = this.revBin(c, h, o);
      return f;
    }),
      (B.prototype.revBin = function (o, f, h) {
        if (o === 0 || o === h - 1) return o;
        for (var c = 0, p = 0; p < f; p++) (c |= (o & 1) << (f - p - 1)), (o >>= 1);
        return c;
      }),
      (B.prototype.permute = function (o, f, h, c, p, A) {
        for (var _ = 0; _ < A; _++) (c[_] = f[o[_]]), (p[_] = h[o[_]]);
      }),
      (B.prototype.transform = function (o, f, h, c, p, A) {
        this.permute(A, o, f, h, c, p);
        for (var _ = 1; _ < p; _ <<= 1)
          for (
            var g = _ << 1, a = Math.cos((2 * Math.PI) / g), m = Math.sin((2 * Math.PI) / g), q = 0;
            q < p;
            q += g
          )
            for (var K = a, H = m, G = 0; G < _; G++) {
              var st = h[q + G],
                mt = c[q + G],
                Ne = h[q + G + _],
                pt = c[q + G + _],
                Et = K * Ne - H * pt;
              (pt = K * pt + H * Ne),
                (Ne = Et),
                (h[q + G] = st + Ne),
                (c[q + G] = mt + pt),
                (h[q + G + _] = st - Ne),
                (c[q + G + _] = mt - pt),
                G !== g && ((Et = a * K - m * H), (H = a * H + m * K), (K = Et));
            }
      }),
      (B.prototype.guessLen13b = function (o, f) {
        var h = Math.max(f, o) | 1,
          c = h & 1,
          p = 0;
        for (h = (h / 2) | 0; h; h = h >>> 1) p++;
        return 1 << (p + 1 + c);
      }),
      (B.prototype.conjugate = function (o, f, h) {
        if (!(h <= 1))
          for (var c = 0; c < h / 2; c++) {
            var p = o[c];
            (o[c] = o[h - c - 1]),
              (o[h - c - 1] = p),
              (p = f[c]),
              (f[c] = -f[h - c - 1]),
              (f[h - c - 1] = -p);
          }
      }),
      (B.prototype.normalize13b = function (o, f) {
        for (var h = 0, c = 0; c < f / 2; c++) {
          var p = Math.round(o[2 * c + 1] / f) * 8192 + Math.round(o[2 * c] / f) + h;
          (o[c] = p & 67108863), p < 67108864 ? (h = 0) : (h = (p / 67108864) | 0);
        }
        return o;
      }),
      (B.prototype.convert13b = function (o, f, h, c) {
        for (var p = 0, A = 0; A < f; A++)
          (p = p + (o[A] | 0)),
            (h[2 * A] = p & 8191),
            (p = p >>> 13),
            (h[2 * A + 1] = p & 8191),
            (p = p >>> 13);
        for (A = 2 * f; A < c; ++A) h[A] = 0;
        i(p === 0), i((p & -8192) === 0);
      }),
      (B.prototype.stub = function (o) {
        for (var f = new Array(o), h = 0; h < o; h++) f[h] = 0;
        return f;
      }),
      (B.prototype.mulp = function (o, f, h) {
        var c = 2 * this.guessLen13b(o.length, f.length),
          p = this.makeRBT(c),
          A = this.stub(c),
          _ = new Array(c),
          g = new Array(c),
          a = new Array(c),
          m = new Array(c),
          q = new Array(c),
          K = new Array(c),
          H = h.words;
        (H.length = c),
          this.convert13b(o.words, o.length, _, c),
          this.convert13b(f.words, f.length, m, c),
          this.transform(_, A, g, a, c, p),
          this.transform(m, A, q, K, c, p);
        for (var G = 0; G < c; G++) {
          var st = g[G] * q[G] - a[G] * K[G];
          (a[G] = g[G] * K[G] + a[G] * q[G]), (g[G] = st);
        }
        return (
          this.conjugate(g, a, c),
          this.transform(g, a, H, A, c, p),
          this.conjugate(H, A, c),
          this.normalize13b(H, c),
          (h.negative = o.negative ^ f.negative),
          (h.length = o.length + f.length),
          h.strip()
        );
      }),
      (s.prototype.mul = function (o) {
        var f = new s(null);
        return (f.words = new Array(this.length + o.length)), this.mulTo(o, f);
      }),
      (s.prototype.mulf = function (o) {
        var f = new s(null);
        return (f.words = new Array(this.length + o.length)), W(this, o, f);
      }),
      (s.prototype.imul = function (o) {
        return this.clone().mulTo(o, this);
      }),
      (s.prototype.imuln = function (o) {
        i(typeof o == 'number'), i(o < 67108864);
        for (var f = 0, h = 0; h < this.length; h++) {
          var c = (this.words[h] | 0) * o,
            p = (c & 67108863) + (f & 67108863);
          (f >>= 26), (f += (c / 67108864) | 0), (f += p >>> 26), (this.words[h] = p & 67108863);
        }
        return f !== 0 && ((this.words[h] = f), this.length++), this;
      }),
      (s.prototype.muln = function (o) {
        return this.clone().imuln(o);
      }),
      (s.prototype.sqr = function () {
        return this.mul(this);
      }),
      (s.prototype.isqr = function () {
        return this.imul(this.clone());
      }),
      (s.prototype.pow = function (o) {
        var f = R(o);
        if (f.length === 0) return new s(1);
        for (var h = this, c = 0; c < f.length && f[c] === 0; c++, h = h.sqr());
        if (++c < f.length)
          for (var p = h.sqr(); c < f.length; c++, p = p.sqr()) f[c] !== 0 && (h = h.mul(p));
        return h;
      }),
      (s.prototype.iushln = function (o) {
        i(typeof o == 'number' && o >= 0);
        var f = o % 26,
          h = (o - f) / 26,
          c = (67108863 >>> (26 - f)) << (26 - f),
          p;
        if (f !== 0) {
          var A = 0;
          for (p = 0; p < this.length; p++) {
            var _ = this.words[p] & c,
              g = ((this.words[p] | 0) - _) << f;
            (this.words[p] = g | A), (A = _ >>> (26 - f));
          }
          A && ((this.words[p] = A), this.length++);
        }
        if (h !== 0) {
          for (p = this.length - 1; p >= 0; p--) this.words[p + h] = this.words[p];
          for (p = 0; p < h; p++) this.words[p] = 0;
          this.length += h;
        }
        return this.strip();
      }),
      (s.prototype.ishln = function (o) {
        return i(this.negative === 0), this.iushln(o);
      }),
      (s.prototype.iushrn = function (o, f, h) {
        i(typeof o == 'number' && o >= 0);
        var c;
        f ? (c = (f - (f % 26)) / 26) : (c = 0);
        var p = o % 26,
          A = Math.min((o - p) / 26, this.length),
          _ = 67108863 ^ ((67108863 >>> p) << p),
          g = h;
        if (((c -= A), (c = Math.max(0, c)), g)) {
          for (var a = 0; a < A; a++) g.words[a] = this.words[a];
          g.length = A;
        }
        if (A !== 0)
          if (this.length > A)
            for (this.length -= A, a = 0; a < this.length; a++) this.words[a] = this.words[a + A];
          else (this.words[0] = 0), (this.length = 1);
        var m = 0;
        for (a = this.length - 1; a >= 0 && (m !== 0 || a >= c); a--) {
          var q = this.words[a] | 0;
          (this.words[a] = (m << (26 - p)) | (q >>> p)), (m = q & _);
        }
        return (
          g && m !== 0 && (g.words[g.length++] = m),
          this.length === 0 && ((this.words[0] = 0), (this.length = 1)),
          this.strip()
        );
      }),
      (s.prototype.ishrn = function (o, f, h) {
        return i(this.negative === 0), this.iushrn(o, f, h);
      }),
      (s.prototype.shln = function (o) {
        return this.clone().ishln(o);
      }),
      (s.prototype.ushln = function (o) {
        return this.clone().iushln(o);
      }),
      (s.prototype.shrn = function (o) {
        return this.clone().ishrn(o);
      }),
      (s.prototype.ushrn = function (o) {
        return this.clone().iushrn(o);
      }),
      (s.prototype.testn = function (o) {
        i(typeof o == 'number' && o >= 0);
        var f = o % 26,
          h = (o - f) / 26,
          c = 1 << f;
        if (this.length <= h) return !1;
        var p = this.words[h];
        return !!(p & c);
      }),
      (s.prototype.imaskn = function (o) {
        i(typeof o == 'number' && o >= 0);
        var f = o % 26,
          h = (o - f) / 26;
        if ((i(this.negative === 0, 'imaskn works only with positive numbers'), this.length <= h))
          return this;
        if ((f !== 0 && h++, (this.length = Math.min(h, this.length)), f !== 0)) {
          var c = 67108863 ^ ((67108863 >>> f) << f);
          this.words[this.length - 1] &= c;
        }
        return this.strip();
      }),
      (s.prototype.maskn = function (o) {
        return this.clone().imaskn(o);
      }),
      (s.prototype.iaddn = function (o) {
        return (
          i(typeof o == 'number'),
          i(o < 67108864),
          o < 0
            ? this.isubn(-o)
            : this.negative !== 0
              ? this.length === 1 && (this.words[0] | 0) < o
                ? ((this.words[0] = o - (this.words[0] | 0)), (this.negative = 0), this)
                : ((this.negative = 0), this.isubn(o), (this.negative = 1), this)
              : this._iaddn(o)
        );
      }),
      (s.prototype._iaddn = function (o) {
        this.words[0] += o;
        for (var f = 0; f < this.length && this.words[f] >= 67108864; f++)
          (this.words[f] -= 67108864),
            f === this.length - 1 ? (this.words[f + 1] = 1) : this.words[f + 1]++;
        return (this.length = Math.max(this.length, f + 1)), this;
      }),
      (s.prototype.isubn = function (o) {
        if ((i(typeof o == 'number'), i(o < 67108864), o < 0)) return this.iaddn(-o);
        if (this.negative !== 0)
          return (this.negative = 0), this.iaddn(o), (this.negative = 1), this;
        if (((this.words[0] -= o), this.length === 1 && this.words[0] < 0))
          (this.words[0] = -this.words[0]), (this.negative = 1);
        else
          for (var f = 0; f < this.length && this.words[f] < 0; f++)
            (this.words[f] += 67108864), (this.words[f + 1] -= 1);
        return this.strip();
      }),
      (s.prototype.addn = function (o) {
        return this.clone().iaddn(o);
      }),
      (s.prototype.subn = function (o) {
        return this.clone().isubn(o);
      }),
      (s.prototype.iabs = function () {
        return (this.negative = 0), this;
      }),
      (s.prototype.abs = function () {
        return this.clone().iabs();
      }),
      (s.prototype._ishlnsubmul = function (o, f, h) {
        var c = o.length + h,
          p;
        this._expand(c);
        var A,
          _ = 0;
        for (p = 0; p < o.length; p++) {
          A = (this.words[p + h] | 0) + _;
          var g = (o.words[p] | 0) * f;
          (A -= g & 67108863),
            (_ = (A >> 26) - ((g / 67108864) | 0)),
            (this.words[p + h] = A & 67108863);
        }
        for (; p < this.length - h; p++)
          (A = (this.words[p + h] | 0) + _), (_ = A >> 26), (this.words[p + h] = A & 67108863);
        if (_ === 0) return this.strip();
        for (i(_ === -1), _ = 0, p = 0; p < this.length; p++)
          (A = -(this.words[p] | 0) + _), (_ = A >> 26), (this.words[p] = A & 67108863);
        return (this.negative = 1), this.strip();
      }),
      (s.prototype._wordDiv = function (o, f) {
        var h = this.length - o.length,
          c = this.clone(),
          p = o,
          A = p.words[p.length - 1] | 0,
          _ = this._countBits(A);
        (h = 26 - _), h !== 0 && ((p = p.ushln(h)), c.iushln(h), (A = p.words[p.length - 1] | 0));
        var g = c.length - p.length,
          a;
        if (f !== 'mod') {
          (a = new s(null)), (a.length = g + 1), (a.words = new Array(a.length));
          for (var m = 0; m < a.length; m++) a.words[m] = 0;
        }
        var q = c.clone()._ishlnsubmul(p, 1, g);
        q.negative === 0 && ((c = q), a && (a.words[g] = 1));
        for (var K = g - 1; K >= 0; K--) {
          var H = (c.words[p.length + K] | 0) * 67108864 + (c.words[p.length + K - 1] | 0);
          for (H = Math.min((H / A) | 0, 67108863), c._ishlnsubmul(p, H, K); c.negative !== 0; )
            H--, (c.negative = 0), c._ishlnsubmul(p, 1, K), c.isZero() || (c.negative ^= 1);
          a && (a.words[K] = H);
        }
        return (
          a && a.strip(),
          c.strip(),
          f !== 'div' && h !== 0 && c.iushrn(h),
          { div: a || null, mod: c }
        );
      }),
      (s.prototype.divmod = function (o, f, h) {
        if ((i(!o.isZero()), this.isZero())) return { div: new s(0), mod: new s(0) };
        var c, p, A;
        return this.negative !== 0 && o.negative === 0
          ? ((A = this.neg().divmod(o, f)),
            f !== 'mod' && (c = A.div.neg()),
            f !== 'div' && ((p = A.mod.neg()), h && p.negative !== 0 && p.iadd(o)),
            { div: c, mod: p })
          : this.negative === 0 && o.negative !== 0
            ? ((A = this.divmod(o.neg(), f)),
              f !== 'mod' && (c = A.div.neg()),
              { div: c, mod: A.mod })
            : this.negative & o.negative
              ? ((A = this.neg().divmod(o.neg(), f)),
                f !== 'div' && ((p = A.mod.neg()), h && p.negative !== 0 && p.isub(o)),
                { div: A.div, mod: p })
              : o.length > this.length || this.cmp(o) < 0
                ? { div: new s(0), mod: this }
                : o.length === 1
                  ? f === 'div'
                    ? { div: this.divn(o.words[0]), mod: null }
                    : f === 'mod'
                      ? { div: null, mod: new s(this.modn(o.words[0])) }
                      : { div: this.divn(o.words[0]), mod: new s(this.modn(o.words[0])) }
                  : this._wordDiv(o, f);
      }),
      (s.prototype.div = function (o) {
        return this.divmod(o, 'div', !1).div;
      }),
      (s.prototype.mod = function (o) {
        return this.divmod(o, 'mod', !1).mod;
      }),
      (s.prototype.umod = function (o) {
        return this.divmod(o, 'mod', !0).mod;
      }),
      (s.prototype.divRound = function (o) {
        var f = this.divmod(o);
        if (f.mod.isZero()) return f.div;
        var h = f.div.negative !== 0 ? f.mod.isub(o) : f.mod,
          c = o.ushrn(1),
          p = o.andln(1),
          A = h.cmp(c);
        return A < 0 || (p === 1 && A === 0)
          ? f.div
          : f.div.negative !== 0
            ? f.div.isubn(1)
            : f.div.iaddn(1);
      }),
      (s.prototype.modn = function (o) {
        i(o <= 67108863);
        for (var f = (1 << 26) % o, h = 0, c = this.length - 1; c >= 0; c--)
          h = (f * h + (this.words[c] | 0)) % o;
        return h;
      }),
      (s.prototype.idivn = function (o) {
        i(o <= 67108863);
        for (var f = 0, h = this.length - 1; h >= 0; h--) {
          var c = (this.words[h] | 0) + f * 67108864;
          (this.words[h] = (c / o) | 0), (f = c % o);
        }
        return this.strip();
      }),
      (s.prototype.divn = function (o) {
        return this.clone().idivn(o);
      }),
      (s.prototype.egcd = function (o) {
        i(o.negative === 0), i(!o.isZero());
        var f = this,
          h = o.clone();
        f.negative !== 0 ? (f = f.umod(o)) : (f = f.clone());
        for (
          var c = new s(1), p = new s(0), A = new s(0), _ = new s(1), g = 0;
          f.isEven() && h.isEven();

        )
          f.iushrn(1), h.iushrn(1), ++g;
        for (var a = h.clone(), m = f.clone(); !f.isZero(); ) {
          for (var q = 0, K = 1; !(f.words[0] & K) && q < 26; ++q, K <<= 1);
          if (q > 0)
            for (f.iushrn(q); q-- > 0; )
              (c.isOdd() || p.isOdd()) && (c.iadd(a), p.isub(m)), c.iushrn(1), p.iushrn(1);
          for (var H = 0, G = 1; !(h.words[0] & G) && H < 26; ++H, G <<= 1);
          if (H > 0)
            for (h.iushrn(H); H-- > 0; )
              (A.isOdd() || _.isOdd()) && (A.iadd(a), _.isub(m)), A.iushrn(1), _.iushrn(1);
          f.cmp(h) >= 0 ? (f.isub(h), c.isub(A), p.isub(_)) : (h.isub(f), A.isub(c), _.isub(p));
        }
        return { a: A, b: _, gcd: h.iushln(g) };
      }),
      (s.prototype._invmp = function (o) {
        i(o.negative === 0), i(!o.isZero());
        var f = this,
          h = o.clone();
        f.negative !== 0 ? (f = f.umod(o)) : (f = f.clone());
        for (var c = new s(1), p = new s(0), A = h.clone(); f.cmpn(1) > 0 && h.cmpn(1) > 0; ) {
          for (var _ = 0, g = 1; !(f.words[0] & g) && _ < 26; ++_, g <<= 1);
          if (_ > 0) for (f.iushrn(_); _-- > 0; ) c.isOdd() && c.iadd(A), c.iushrn(1);
          for (var a = 0, m = 1; !(h.words[0] & m) && a < 26; ++a, m <<= 1);
          if (a > 0) for (h.iushrn(a); a-- > 0; ) p.isOdd() && p.iadd(A), p.iushrn(1);
          f.cmp(h) >= 0 ? (f.isub(h), c.isub(p)) : (h.isub(f), p.isub(c));
        }
        var q;
        return f.cmpn(1) === 0 ? (q = c) : (q = p), q.cmpn(0) < 0 && q.iadd(o), q;
      }),
      (s.prototype.gcd = function (o) {
        if (this.isZero()) return o.abs();
        if (o.isZero()) return this.abs();
        var f = this.clone(),
          h = o.clone();
        (f.negative = 0), (h.negative = 0);
        for (var c = 0; f.isEven() && h.isEven(); c++) f.iushrn(1), h.iushrn(1);
        do {
          for (; f.isEven(); ) f.iushrn(1);
          for (; h.isEven(); ) h.iushrn(1);
          var p = f.cmp(h);
          if (p < 0) {
            var A = f;
            (f = h), (h = A);
          } else if (p === 0 || h.cmpn(1) === 0) break;
          f.isub(h);
        } while (!0);
        return h.iushln(c);
      }),
      (s.prototype.invm = function (o) {
        return this.egcd(o).a.umod(o);
      }),
      (s.prototype.isEven = function () {
        return (this.words[0] & 1) === 0;
      }),
      (s.prototype.isOdd = function () {
        return (this.words[0] & 1) === 1;
      }),
      (s.prototype.andln = function (o) {
        return this.words[0] & o;
      }),
      (s.prototype.bincn = function (o) {
        i(typeof o == 'number');
        var f = o % 26,
          h = (o - f) / 26,
          c = 1 << f;
        if (this.length <= h) return this._expand(h + 1), (this.words[h] |= c), this;
        for (var p = c, A = h; p !== 0 && A < this.length; A++) {
          var _ = this.words[A] | 0;
          (_ += p), (p = _ >>> 26), (_ &= 67108863), (this.words[A] = _);
        }
        return p !== 0 && ((this.words[A] = p), this.length++), this;
      }),
      (s.prototype.isZero = function () {
        return this.length === 1 && this.words[0] === 0;
      }),
      (s.prototype.cmpn = function (o) {
        var f = o < 0;
        if (this.negative !== 0 && !f) return -1;
        if (this.negative === 0 && f) return 1;
        this.strip();
        var h;
        if (this.length > 1) h = 1;
        else {
          f && (o = -o), i(o <= 67108863, 'Number is too big');
          var c = this.words[0] | 0;
          h = c === o ? 0 : c < o ? -1 : 1;
        }
        return this.negative !== 0 ? -h | 0 : h;
      }),
      (s.prototype.cmp = function (o) {
        if (this.negative !== 0 && o.negative === 0) return -1;
        if (this.negative === 0 && o.negative !== 0) return 1;
        var f = this.ucmp(o);
        return this.negative !== 0 ? -f | 0 : f;
      }),
      (s.prototype.ucmp = function (o) {
        if (this.length > o.length) return 1;
        if (this.length < o.length) return -1;
        for (var f = 0, h = this.length - 1; h >= 0; h--) {
          var c = this.words[h] | 0,
            p = o.words[h] | 0;
          if (c !== p) {
            c < p ? (f = -1) : c > p && (f = 1);
            break;
          }
        }
        return f;
      }),
      (s.prototype.gtn = function (o) {
        return this.cmpn(o) === 1;
      }),
      (s.prototype.gt = function (o) {
        return this.cmp(o) === 1;
      }),
      (s.prototype.gten = function (o) {
        return this.cmpn(o) >= 0;
      }),
      (s.prototype.gte = function (o) {
        return this.cmp(o) >= 0;
      }),
      (s.prototype.ltn = function (o) {
        return this.cmpn(o) === -1;
      }),
      (s.prototype.lt = function (o) {
        return this.cmp(o) === -1;
      }),
      (s.prototype.lten = function (o) {
        return this.cmpn(o) <= 0;
      }),
      (s.prototype.lte = function (o) {
        return this.cmp(o) <= 0;
      }),
      (s.prototype.eqn = function (o) {
        return this.cmpn(o) === 0;
      }),
      (s.prototype.eq = function (o) {
        return this.cmp(o) === 0;
      }),
      (s.red = function (o) {
        return new at(o);
      }),
      (s.prototype.toRed = function (o) {
        return (
          i(!this.red, 'Already a number in reduction context'),
          i(this.negative === 0, 'red works only with positives'),
          o.convertTo(this)._forceRed(o)
        );
      }),
      (s.prototype.fromRed = function () {
        return (
          i(this.red, 'fromRed works only with numbers in reduction context'),
          this.red.convertFrom(this)
        );
      }),
      (s.prototype._forceRed = function (o) {
        return (this.red = o), this;
      }),
      (s.prototype.forceRed = function (o) {
        return i(!this.red, 'Already a number in reduction context'), this._forceRed(o);
      }),
      (s.prototype.redAdd = function (o) {
        return i(this.red, 'redAdd works only with red numbers'), this.red.add(this, o);
      }),
      (s.prototype.redIAdd = function (o) {
        return i(this.red, 'redIAdd works only with red numbers'), this.red.iadd(this, o);
      }),
      (s.prototype.redSub = function (o) {
        return i(this.red, 'redSub works only with red numbers'), this.red.sub(this, o);
      }),
      (s.prototype.redISub = function (o) {
        return i(this.red, 'redISub works only with red numbers'), this.red.isub(this, o);
      }),
      (s.prototype.redShl = function (o) {
        return i(this.red, 'redShl works only with red numbers'), this.red.shl(this, o);
      }),
      (s.prototype.redMul = function (o) {
        return (
          i(this.red, 'redMul works only with red numbers'),
          this.red._verify2(this, o),
          this.red.mul(this, o)
        );
      }),
      (s.prototype.redIMul = function (o) {
        return (
          i(this.red, 'redMul works only with red numbers'),
          this.red._verify2(this, o),
          this.red.imul(this, o)
        );
      }),
      (s.prototype.redSqr = function () {
        return (
          i(this.red, 'redSqr works only with red numbers'),
          this.red._verify1(this),
          this.red.sqr(this)
        );
      }),
      (s.prototype.redISqr = function () {
        return (
          i(this.red, 'redISqr works only with red numbers'),
          this.red._verify1(this),
          this.red.isqr(this)
        );
      }),
      (s.prototype.redSqrt = function () {
        return (
          i(this.red, 'redSqrt works only with red numbers'),
          this.red._verify1(this),
          this.red.sqrt(this)
        );
      }),
      (s.prototype.redInvm = function () {
        return (
          i(this.red, 'redInvm works only with red numbers'),
          this.red._verify1(this),
          this.red.invm(this)
        );
      }),
      (s.prototype.redNeg = function () {
        return (
          i(this.red, 'redNeg works only with red numbers'),
          this.red._verify1(this),
          this.red.neg(this)
        );
      }),
      (s.prototype.redPow = function (o) {
        return (
          i(this.red && !o.red, 'redPow(normalNum)'), this.red._verify1(this), this.red.pow(this, o)
        );
      });
    var Z = { k256: null, p224: null, p192: null, p25519: null };
    function Y(w, o) {
      (this.name = w),
        (this.p = new s(o, 16)),
        (this.n = this.p.bitLength()),
        (this.k = new s(1).iushln(this.n).isub(this.p)),
        (this.tmp = this._tmp());
    }
    (Y.prototype._tmp = function () {
      var o = new s(null);
      return (o.words = new Array(Math.ceil(this.n / 13))), o;
    }),
      (Y.prototype.ireduce = function (o) {
        var f = o,
          h;
        do
          this.split(f, this.tmp), (f = this.imulK(f)), (f = f.iadd(this.tmp)), (h = f.bitLength());
        while (h > this.n);
        var c = h < this.n ? -1 : f.ucmp(this.p);
        return (
          c === 0
            ? ((f.words[0] = 0), (f.length = 1))
            : c > 0
              ? f.isub(this.p)
              : f.strip !== void 0
                ? f.strip()
                : f._strip(),
          f
        );
      }),
      (Y.prototype.split = function (o, f) {
        o.iushrn(this.n, 0, f);
      }),
      (Y.prototype.imulK = function (o) {
        return o.imul(this.k);
      });
    function tt() {
      Y.call(
        this,
        'k256',
        'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f'
      );
    }
    n(tt, Y),
      (tt.prototype.split = function (o, f) {
        for (var h = 4194303, c = Math.min(o.length, 9), p = 0; p < c; p++) f.words[p] = o.words[p];
        if (((f.length = c), o.length <= 9)) {
          (o.words[0] = 0), (o.length = 1);
          return;
        }
        var A = o.words[9];
        for (f.words[f.length++] = A & h, p = 10; p < o.length; p++) {
          var _ = o.words[p] | 0;
          (o.words[p - 10] = ((_ & h) << 4) | (A >>> 22)), (A = _);
        }
        (A >>>= 22),
          (o.words[p - 10] = A),
          A === 0 && o.length > 10 ? (o.length -= 10) : (o.length -= 9);
      }),
      (tt.prototype.imulK = function (o) {
        (o.words[o.length] = 0), (o.words[o.length + 1] = 0), (o.length += 2);
        for (var f = 0, h = 0; h < o.length; h++) {
          var c = o.words[h] | 0;
          (f += c * 977), (o.words[h] = f & 67108863), (f = c * 64 + ((f / 67108864) | 0));
        }
        return (
          o.words[o.length - 1] === 0 && (o.length--, o.words[o.length - 1] === 0 && o.length--), o
        );
      });
    function xt() {
      Y.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
    }
    n(xt, Y);
    function se() {
      Y.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
    }
    n(se, Y);
    function de() {
      Y.call(this, '25519', '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
    }
    n(de, Y),
      (de.prototype.imulK = function (o) {
        for (var f = 0, h = 0; h < o.length; h++) {
          var c = (o.words[h] | 0) * 19 + f,
            p = c & 67108863;
          (c >>>= 26), (o.words[h] = p), (f = c);
        }
        return f !== 0 && (o.words[o.length++] = f), o;
      }),
      (s._prime = function (o) {
        if (Z[o]) return Z[o];
        var f;
        if (o === 'k256') f = new tt();
        else if (o === 'p224') f = new xt();
        else if (o === 'p192') f = new se();
        else if (o === 'p25519') f = new de();
        else throw new Error('Unknown prime ' + o);
        return (Z[o] = f), f;
      });
    function at(w) {
      if (typeof w == 'string') {
        var o = s._prime(w);
        (this.m = o.p), (this.prime = o);
      } else i(w.gtn(1), 'modulus must be greater than 1'), (this.m = w), (this.prime = null);
    }
    (at.prototype._verify1 = function (o) {
      i(o.negative === 0, 'red works only with positives'),
        i(o.red, 'red works only with red numbers');
    }),
      (at.prototype._verify2 = function (o, f) {
        i((o.negative | f.negative) === 0, 'red works only with positives'),
          i(o.red && o.red === f.red, 'red works only with red numbers');
      }),
      (at.prototype.imod = function (o) {
        return this.prime ? this.prime.ireduce(o)._forceRed(this) : o.umod(this.m)._forceRed(this);
      }),
      (at.prototype.neg = function (o) {
        return o.isZero() ? o.clone() : this.m.sub(o)._forceRed(this);
      }),
      (at.prototype.add = function (o, f) {
        this._verify2(o, f);
        var h = o.add(f);
        return h.cmp(this.m) >= 0 && h.isub(this.m), h._forceRed(this);
      }),
      (at.prototype.iadd = function (o, f) {
        this._verify2(o, f);
        var h = o.iadd(f);
        return h.cmp(this.m) >= 0 && h.isub(this.m), h;
      }),
      (at.prototype.sub = function (o, f) {
        this._verify2(o, f);
        var h = o.sub(f);
        return h.cmpn(0) < 0 && h.iadd(this.m), h._forceRed(this);
      }),
      (at.prototype.isub = function (o, f) {
        this._verify2(o, f);
        var h = o.isub(f);
        return h.cmpn(0) < 0 && h.iadd(this.m), h;
      }),
      (at.prototype.shl = function (o, f) {
        return this._verify1(o), this.imod(o.ushln(f));
      }),
      (at.prototype.imul = function (o, f) {
        return this._verify2(o, f), this.imod(o.imul(f));
      }),
      (at.prototype.mul = function (o, f) {
        return this._verify2(o, f), this.imod(o.mul(f));
      }),
      (at.prototype.isqr = function (o) {
        return this.imul(o, o.clone());
      }),
      (at.prototype.sqr = function (o) {
        return this.mul(o, o);
      }),
      (at.prototype.sqrt = function (o) {
        if (o.isZero()) return o.clone();
        var f = this.m.andln(3);
        if ((i(f % 2 === 1), f === 3)) {
          var h = this.m.add(new s(1)).iushrn(2);
          return this.pow(o, h);
        }
        for (var c = this.m.subn(1), p = 0; !c.isZero() && c.andln(1) === 0; ) p++, c.iushrn(1);
        i(!c.isZero());
        var A = new s(1).toRed(this),
          _ = A.redNeg(),
          g = this.m.subn(1).iushrn(1),
          a = this.m.bitLength();
        for (a = new s(2 * a * a).toRed(this); this.pow(a, g).cmp(_) !== 0; ) a.redIAdd(_);
        for (
          var m = this.pow(a, c), q = this.pow(o, c.addn(1).iushrn(1)), K = this.pow(o, c), H = p;
          K.cmp(A) !== 0;

        ) {
          for (var G = K, st = 0; G.cmp(A) !== 0; st++) G = G.redSqr();
          i(st < H);
          var mt = this.pow(m, new s(1).iushln(H - st - 1));
          (q = q.redMul(mt)), (m = mt.redSqr()), (K = K.redMul(m)), (H = st);
        }
        return q;
      }),
      (at.prototype.invm = function (o) {
        var f = o._invmp(this.m);
        return f.negative !== 0 ? ((f.negative = 0), this.imod(f).redNeg()) : this.imod(f);
      }),
      (at.prototype.pow = function (o, f) {
        if (f.isZero()) return new s(1).toRed(this);
        if (f.cmpn(1) === 0) return o.clone();
        var h = 4,
          c = new Array(1 << h);
        (c[0] = new s(1).toRed(this)), (c[1] = o);
        for (var p = 2; p < c.length; p++) c[p] = this.mul(c[p - 1], o);
        var A = c[0],
          _ = 0,
          g = 0,
          a = f.bitLength() % 26;
        for (a === 0 && (a = 26), p = f.length - 1; p >= 0; p--) {
          for (var m = f.words[p], q = a - 1; q >= 0; q--) {
            var K = (m >> q) & 1;
            if ((A !== c[0] && (A = this.sqr(A)), K === 0 && _ === 0)) {
              g = 0;
              continue;
            }
            (_ <<= 1),
              (_ |= K),
              g++,
              !(g !== h && (p !== 0 || q !== 0)) && ((A = this.mul(A, c[_])), (g = 0), (_ = 0));
          }
          a = 26;
        }
        return A;
      }),
      (at.prototype.convertTo = function (o) {
        var f = o.umod(this.m);
        return f === o ? f.clone() : f;
      }),
      (at.prototype.convertFrom = function (o) {
        var f = o.clone();
        return (f.red = null), f;
      }),
      (s.mont = function (o) {
        return new be(o);
      });
    function be(w) {
      at.call(this, w),
        (this.shift = this.m.bitLength()),
        this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
        (this.r = new s(1).iushln(this.shift)),
        (this.r2 = this.imod(this.r.sqr())),
        (this.rinv = this.r._invmp(this.m)),
        (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
        (this.minv = this.minv.umod(this.r)),
        (this.minv = this.r.sub(this.minv));
    }
    n(be, at),
      (be.prototype.convertTo = function (o) {
        return this.imod(o.ushln(this.shift));
      }),
      (be.prototype.convertFrom = function (o) {
        var f = this.imod(o.mul(this.rinv));
        return (f.red = null), f;
      }),
      (be.prototype.imul = function (o, f) {
        if (o.isZero() || f.isZero()) return (o.words[0] = 0), (o.length = 1), o;
        var h = o.imul(f),
          c = h.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          p = h.isub(c).iushrn(this.shift),
          A = p;
        return (
          p.cmp(this.m) >= 0 ? (A = p.isub(this.m)) : p.cmpn(0) < 0 && (A = p.iadd(this.m)),
          A._forceRed(this)
        );
      }),
      (be.prototype.mul = function (o, f) {
        if (o.isZero() || f.isZero()) return new s(0)._forceRed(this);
        var h = o.mul(f),
          c = h.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          p = h.isub(c).iushrn(this.shift),
          A = p;
        return (
          p.cmp(this.m) >= 0 ? (A = p.isub(this.m)) : p.cmpn(0) < 0 && (A = p.iadd(this.m)),
          A._forceRed(this)
        );
      }),
      (be.prototype.invm = function (o) {
        var f = this.imod(o._invmp(this.m).mul(this.r2));
        return f._forceRed(this);
      });
  })(r, Te);
})(Bs);
var Di = Bs.exports;
Object.defineProperty(Ui, '__esModule', { value: !0 });
var yi = Di,
  Vu = Co().ec,
  Ts = new Vu('secp256k1'),
  Ci = Ts.curve;
Ui.privateKeyExport = function (r, t) {
  t === void 0 && (t = !0);
  var e = new yi(r);
  if (e.ucmp(Ci.n) >= 0) throw new Error("couldn't export to DER format");
  var i = Ts.g.mul(e);
  return va(i.getX(), i.getY(), t);
};
Ui.privateKeyModInverse = function (r) {
  var t = new yi(r);
  if (t.ucmp(Ci.n) >= 0 || t.isZero()) throw new Error('private key range is invalid');
  return t.invm(Ci.n).toArrayLike(F, 'be', 32);
};
Ui.signatureImport = function (r) {
  var t = new yi(r.r);
  t.ucmp(Ci.n) >= 0 && (t = new yi(0));
  var e = new yi(r.s);
  return (
    e.ucmp(Ci.n) >= 0 && (e = new yi(0)),
    F.concat([t.toArrayLike(F, 'be', 32), e.toArrayLike(F, 'be', 32)])
  );
};
Ui.ecdhUnsafe = function (r, t, e) {
  e === void 0 && (e = !0);
  var i = Ts.keyFromPublic(r),
    n = new yi(t);
  if (n.ucmp(Ci.n) >= 0 || n.isZero()) throw new Error('scalar was invalid (zero or overflow)');
  var s = i.pub.mul(n);
  return va(s.getX(), s.getY(), e);
};
var va = function (r, t, e) {
    var i;
    return (
      e
        ? ((i = F.alloc(33)), (i[0] = t.isOdd() ? 3 : 2), r.toArrayLike(F, 'be', 32).copy(i, 1))
        : ((i = F.alloc(65)),
          (i[0] = 4),
          r.toArrayLike(F, 'be', 32).copy(i, 1),
          t.toArrayLike(F, 'be', 32).copy(i, 33)),
      i
    );
  },
  un = {};
Object.defineProperty(un, '__esModule', { value: !0 });
const { Buffer: Qi } = Ln;
var Ju = Qi.from([
    48, 129, 211, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 133, 48, 129, 130, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72,
    206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
    255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6,
    4, 1, 0, 4, 1, 7, 4, 33, 2, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135,
    11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 2, 33, 0, 255,
    255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230,
    175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 36, 3, 34, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]),
  Yu = Qi.from([
    48, 130, 1, 19, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 165, 48, 129, 162, 2, 1, 1, 48, 44, 6, 7, 42, 134,
    72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
    255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47,
    48, 6, 4, 1, 0, 4, 1, 7, 4, 65, 4, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149,
    206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 72, 58,
    218, 119, 38, 163, 196, 101, 93, 164, 251, 252, 14, 17, 8, 168, 253, 23, 180, 72, 166, 133, 84,
    25, 156, 71, 208, 143, 251, 16, 212, 184, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255,
    255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208,
    54, 65, 65, 2, 1, 1, 161, 68, 3, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
un.privateKeyExport = function (r, t, e) {
  e === void 0 && (e = !0);
  var i = Qi.from(e ? Ju : Yu);
  return r.copy(i, e ? 8 : 9), t.copy(i, e ? 181 : 214), i;
};
un.privateKeyImport = function (r) {
  var t = r.length,
    e = 0;
  if (t < e + 1 || r[e] !== 48 || ((e += 1), t < e + 1 || !(r[e] & 128))) return null;
  var i = r[e] & 127;
  if (((e += 1), i < 1 || i > 2 || t < e + i)) return null;
  var n = r[e + i - 1] | (i > 1 ? r[e + i - 2] << 8 : 0);
  return (
    (e += i),
    t < e + n ||
    t < e + 3 ||
    r[e] !== 2 ||
    r[e + 1] !== 1 ||
    r[e + 2] !== 1 ||
    ((e += 3), t < e + 2 || r[e] !== 4 || r[e + 1] > 32 || t < e + 2 + r[e + 1])
      ? null
      : r.slice(e + 2, e + 2 + r[e + 1])
  );
};
un.signatureImportLax = function (r) {
  var t = Qi.alloc(32, 0),
    e = Qi.alloc(32, 0),
    i = r.length,
    n = 0;
  if (r[n++] !== 48) return null;
  var s = r[n++];
  if ((s & 128 && ((n += s - 128), n > i)) || r[n++] !== 2) return null;
  var u = r[n++];
  if (u & 128) {
    if (((s = u - 128), n + s > i)) return null;
    for (; s > 0 && r[n] === 0; n += 1, s -= 1);
    for (u = 0; s > 0; n += 1, s -= 1) u = (u << 8) + r[n];
  }
  if (u > i - n) return null;
  var d = n;
  if (((n += u), r[n++] !== 2)) return null;
  var v = r[n++];
  if (v & 128) {
    if (((s = v - 128), n + s > i)) return null;
    for (; s > 0 && r[n] === 0; n += 1, s -= 1);
    for (v = 0; s > 0; n += 1, s -= 1) v = (v << 8) + r[n];
  }
  if (v > i - n) return null;
  var E = n;
  for (n += v; u > 0 && r[d] === 0; u -= 1, d += 1);
  if (u > 32) return null;
  var S = r.slice(d, d + u);
  for (S.copy(t, 32 - S.length); v > 0 && r[E] === 0; v -= 1, E += 1);
  if (v > 32) return null;
  var P = r.slice(E, E + v);
  return P.copy(e, 32 - P.length), { r: t, s: e };
};
(function (r) {
  Object.defineProperty(r, '__esModule', { value: !0 }),
    (r.ecdhUnsafe =
      r.ecdh =
      r.recover =
      r.verify =
      r.sign =
      r.signatureImportLax =
      r.signatureImport =
      r.signatureExport =
      r.signatureNormalize =
      r.publicKeyCombine =
      r.publicKeyTweakMul =
      r.publicKeyTweakAdd =
      r.publicKeyVerify =
      r.publicKeyConvert =
      r.publicKeyCreate =
      r.privateKeyTweakMul =
      r.privateKeyTweakAdd =
      r.privateKeyModInverse =
      r.privateKeyNegate =
      r.privateKeyImport =
      r.privateKeyExport =
      r.privateKeyVerify =
        void 0);
  var t = pa,
    e = Ui,
    i = un;
  (r.privateKeyVerify = function (n) {
    return n.length !== 32 ? !1 : t.privateKeyVerify(Uint8Array.from(n));
  }),
    (r.privateKeyExport = function (n, s) {
      if (n.length !== 32) throw new RangeError('private key length is invalid');
      var u = e.privateKeyExport(n, s);
      return i.privateKeyExport(n, u, s);
    }),
    (r.privateKeyImport = function (n) {
      if (((n = i.privateKeyImport(n)), n !== null && n.length === 32 && r.privateKeyVerify(n)))
        return n;
      throw new Error("couldn't import from DER format");
    }),
    (r.privateKeyNegate = function (n) {
      return F.from(t.privateKeyNegate(Uint8Array.from(n)));
    }),
    (r.privateKeyModInverse = function (n) {
      if (n.length !== 32) throw new Error('private key length is invalid');
      return F.from(e.privateKeyModInverse(Uint8Array.from(n)));
    }),
    (r.privateKeyTweakAdd = function (n, s) {
      return F.from(t.privateKeyTweakAdd(Uint8Array.from(n), s));
    }),
    (r.privateKeyTweakMul = function (n, s) {
      return F.from(t.privateKeyTweakMul(Uint8Array.from(n), Uint8Array.from(s)));
    }),
    (r.publicKeyCreate = function (n, s) {
      return F.from(t.publicKeyCreate(Uint8Array.from(n), s));
    }),
    (r.publicKeyConvert = function (n, s) {
      return F.from(t.publicKeyConvert(Uint8Array.from(n), s));
    }),
    (r.publicKeyVerify = function (n) {
      return n.length !== 33 && n.length !== 65 ? !1 : t.publicKeyVerify(Uint8Array.from(n));
    }),
    (r.publicKeyTweakAdd = function (n, s, u) {
      return F.from(t.publicKeyTweakAdd(Uint8Array.from(n), Uint8Array.from(s), u));
    }),
    (r.publicKeyTweakMul = function (n, s, u) {
      return F.from(t.publicKeyTweakMul(Uint8Array.from(n), Uint8Array.from(s), u));
    }),
    (r.publicKeyCombine = function (n, s) {
      var u = [];
      return (
        n.forEach(function (d) {
          u.push(Uint8Array.from(d));
        }),
        F.from(t.publicKeyCombine(u, s))
      );
    }),
    (r.signatureNormalize = function (n) {
      return F.from(t.signatureNormalize(Uint8Array.from(n)));
    }),
    (r.signatureExport = function (n) {
      return F.from(t.signatureExport(Uint8Array.from(n)));
    }),
    (r.signatureImport = function (n) {
      return F.from(t.signatureImport(Uint8Array.from(n)));
    }),
    (r.signatureImportLax = function (n) {
      if (n.length === 0) throw new RangeError('signature length is invalid');
      var s = i.signatureImportLax(n);
      if (s === null) throw new Error("couldn't parse DER signature");
      return e.signatureImport(s);
    }),
    (r.sign = function (n, s, u) {
      if (u === null) throw new TypeError('options should be an Object');
      var d = void 0;
      if (u) {
        if (((d = {}), u.data === null)) throw new TypeError('options.data should be a Buffer');
        if (u.data) {
          if (u.data.length != 32) throw new RangeError('options.data length is invalid');
          d.data = new Uint8Array(u.data);
        }
        if (u.noncefn === null) throw new TypeError('options.noncefn should be a Function');
        u.noncefn &&
          (d.noncefn = function (E, S, P, I, R) {
            var C = P != null ? F.from(P) : null,
              j = I != null ? F.from(I) : null,
              ct = F.from('');
            return u.noncefn && (ct = u.noncefn(F.from(E), F.from(S), C, j, R)), new Uint8Array(ct);
          });
      }
      var v = t.ecdsaSign(Uint8Array.from(n), Uint8Array.from(s), d);
      return { signature: F.from(v.signature), recovery: v.recid };
    }),
    (r.verify = function (n, s, u) {
      return t.ecdsaVerify(Uint8Array.from(s), Uint8Array.from(n), u);
    }),
    (r.recover = function (n, s, u, d) {
      return F.from(t.ecdsaRecover(Uint8Array.from(s), u, Uint8Array.from(n), d));
    }),
    (r.ecdh = function (n, s) {
      return F.from(t.ecdh(Uint8Array.from(n), Uint8Array.from(s), {}));
    }),
    (r.ecdhUnsafe = function (n, s, u) {
      if (n.length !== 33 && n.length !== 65) throw new RangeError('public key length is invalid');
      if (s.length !== 32) throw new RangeError('private key length is invalid');
      return F.from(e.ecdhUnsafe(Uint8Array.from(n), Uint8Array.from(s), u));
    });
})(Kn);
var ya = function (t) {
    if (typeof t != 'string')
      throw new Error(
        "[is-hex-prefixed] value must be type 'string', is currently type " +
          typeof t +
          ', while checking isHexPrefixed.'
      );
    return t.slice(0, 2) === '0x';
  },
  Zu = ya,
  Qu = function (t) {
    return typeof t != 'string' ? t : Zu(t) ? t.slice(2) : t;
  },
  Wu = ya,
  wa = Qu;
function Fn(r) {
  var t = r;
  if (typeof t != 'string')
    throw new Error(
      '[ethjs-util] while padding to even, value must be string, is currently ' +
        typeof t +
        ', while padToEven.'
    );
  return t.length % 2 && (t = '0' + t), t;
}
function ba(r) {
  var t = r.toString(16);
  return '0x' + t;
}
function Xu(r) {
  var t = ba(r);
  return new F(Fn(t.slice(2)), 'hex');
}
function $u(r) {
  if (typeof r != 'string')
    throw new Error(
      "[ethjs-util] while getting binary size, method getBinarySize requires input 'str' to be type String, got '" +
        typeof r +
        "'."
    );
  return F.byteLength(r, 'utf8');
}
function th(r, t, e) {
  if (Array.isArray(r) !== !0)
    throw new Error(
      "[ethjs-util] method arrayContainsArray requires input 'superset' to be an array got type '" +
        typeof r +
        "'"
    );
  if (Array.isArray(t) !== !0)
    throw new Error(
      "[ethjs-util] method arrayContainsArray requires input 'subset' to be an array got type '" +
        typeof t +
        "'"
    );
  return t[(!!e && 'some') || 'every'](function (i) {
    return r.indexOf(i) >= 0;
  });
}
function eh(r) {
  var t = new F(Fn(wa(r).replace(/^0+|0+$/g, '')), 'hex');
  return t.toString('utf8');
}
function rh(r) {
  var t = '',
    e = 0,
    i = r.length;
  for (r.substring(0, 2) === '0x' && (e = 2); e < i; e += 2) {
    var n = parseInt(r.substr(e, 2), 16);
    t += String.fromCharCode(n);
  }
  return t;
}
function ih(r) {
  var t = new F(r, 'utf8');
  return '0x' + Fn(t.toString('hex')).replace(/^0+|0+$/g, '');
}
function nh(r) {
  for (var t = '', e = 0; e < r.length; e++) {
    var i = r.charCodeAt(e),
      n = i.toString(16);
    t += n.length < 2 ? '0' + n : n;
  }
  return '0x' + t;
}
function sh(r, t, e) {
  if (!Array.isArray(r))
    throw new Error(
      "[ethjs-util] method getKeys expecting type Array as 'params' input, got '" + typeof r + "'"
    );
  if (typeof t != 'string')
    throw new Error(
      "[ethjs-util] method getKeys expecting type String for input 'key' got '" + typeof t + "'."
    );
  for (var i = [], n = 0; n < r.length; n++) {
    var s = r[n][t];
    if (e && !s) s = '';
    else if (typeof s != 'string') throw new Error('invalid abi');
    i.push(s);
  }
  return i;
}
function oh(r, t) {
  return !(typeof r != 'string' || !r.match(/^0x[0-9A-Fa-f]*$/) || (t && r.length !== 2 + 2 * t));
}
var zi = {
    arrayContainsArray: th,
    intToBuffer: Xu,
    getBinarySize: $u,
    isHexPrefixed: Wu,
    stripHexPrefix: wa,
    padToEven: Fn,
    intToHex: ba,
    fromAscii: nh,
    fromUtf8: ih,
    toAscii: rh,
    toUtf8: eh,
    getKeys: sh,
    isHexString: oh,
  },
  Zr = {},
  ah =
    (Te && Te.__importDefault) ||
    function (r) {
      return r && r.__esModule ? r : { default: r };
    };
Object.defineProperty(Zr, '__esModule', { value: !0 });
Zr.getLength = Zr.decode = Zr.encode = void 0;
var fh = ah(sf());
function Aa(r) {
  if (Array.isArray(r)) {
    for (var t = [], e = 0; e < r.length; e++) t.push(Aa(r[e]));
    var i = F.concat(t);
    return F.concat([so(i.length, 192), i]);
  } else {
    var n = Rs(r);
    return n.length === 1 && n[0] < 128 ? n : F.concat([so(n.length, 128), n]);
  }
}
Zr.encode = Aa;
function ls(r, t) {
  if (r[0] === '0' && r[1] === '0') throw new Error('invalid RLP: extra zeros');
  return parseInt(r, t);
}
function so(r, t) {
  if (r < 56) return F.from([r + t]);
  var e = ds(r),
    i = e.length / 2,
    n = ds(t + 55 + i);
  return F.from(n + e, 'hex');
}
function uh(r, t) {
  if ((t === void 0 && (t = !1), !r || r.length === 0)) return F.from([]);
  var e = Rs(r),
    i = cs(e);
  if (t) return i;
  if (i.remainder.length !== 0) throw new Error('invalid remainder');
  return i.data;
}
Zr.decode = uh;
function hh(r) {
  if (!r || r.length === 0) return F.from([]);
  var t = Rs(r),
    e = t[0];
  if (e <= 127) return t.length;
  if (e <= 183) return e - 127;
  if (e <= 191) return e - 182;
  if (e <= 247) return e - 191;
  var i = e - 246,
    n = ls(t.slice(1, i).toString('hex'), 16);
  return i + n;
}
Zr.getLength = hh;
function cs(r) {
  var t,
    e,
    i,
    n,
    s,
    u = [],
    d = r[0];
  if (d <= 127) return { data: r.slice(0, 1), remainder: r.slice(1) };
  if (d <= 183) {
    if (((t = d - 127), d === 128 ? (i = F.from([])) : (i = r.slice(1, t)), t === 2 && i[0] < 128))
      throw new Error('invalid rlp encoding: byte must be less 0x80');
    return { data: i, remainder: r.slice(t) };
  } else if (d <= 191) {
    if (((e = d - 182), r.length - 1 < e))
      throw new Error('invalid RLP: not enough bytes for string length');
    if (((t = ls(r.slice(1, e).toString('hex'), 16)), t <= 55))
      throw new Error('invalid RLP: expected string length to be greater than 55');
    if (((i = r.slice(e, t + e)), i.length < t))
      throw new Error('invalid RLP: not enough bytes for string');
    return { data: i, remainder: r.slice(t + e) };
  } else if (d <= 247) {
    for (t = d - 191, n = r.slice(1, t); n.length; ) (s = cs(n)), u.push(s.data), (n = s.remainder);
    return { data: u, remainder: r.slice(t) };
  } else {
    (e = d - 246), (t = ls(r.slice(1, e).toString('hex'), 16));
    var v = e + t;
    if (v > r.length) throw new Error('invalid rlp: total length is larger than the data');
    if (((n = r.slice(e, v)), n.length === 0))
      throw new Error('invalid rlp, List has a invalid length');
    for (; n.length; ) (s = cs(n)), u.push(s.data), (n = s.remainder);
    return { data: u, remainder: r.slice(v) };
  }
}
function xa(r) {
  return r.slice(0, 2) === '0x';
}
function lh(r) {
  return typeof r != 'string' ? r : xa(r) ? r.slice(2) : r;
}
function ds(r) {
  if (r < 0) throw new Error('Invalid integer as argument, must be unsigned!');
  var t = r.toString(16);
  return t.length % 2 ? '0' + t : t;
}
function ch(r) {
  return r.length % 2 ? '0' + r : r;
}
function dh(r) {
  var t = ds(r);
  return F.from(t, 'hex');
}
function Rs(r) {
  if (!F.isBuffer(r)) {
    if (typeof r == 'string') return xa(r) ? F.from(ch(lh(r)), 'hex') : F.from(r);
    if (typeof r == 'number' || typeof r == 'bigint') return r ? dh(r) : F.from([]);
    if (r == null) return F.from([]);
    if (r instanceof Uint8Array) return F.from(r);
    if (fh.default.isBN(r)) return F.from(r.toArray());
    throw new Error('invalid type');
  }
  return r;
}
var Ea = {};
(function (r) {
  Object.defineProperty(r, '__esModule', { value: !0 }),
    (r.KECCAK256_RLP =
      r.KECCAK256_RLP_S =
      r.KECCAK256_RLP_ARRAY =
      r.KECCAK256_RLP_ARRAY_S =
      r.KECCAK256_NULL =
      r.KECCAK256_NULL_S =
      r.TWO_POW256 =
      r.MAX_INTEGER =
        void 0);
  var t = Di;
  const { Buffer: e } = Ln;
  (r.MAX_INTEGER = new t('ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', 16)),
    (r.TWO_POW256 = new t('10000000000000000000000000000000000000000000000000000000000000000', 16)),
    (r.KECCAK256_NULL_S = 'c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470'),
    (r.KECCAK256_NULL = e.from(r.KECCAK256_NULL_S, 'hex')),
    (r.KECCAK256_RLP_ARRAY_S = '1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347'),
    (r.KECCAK256_RLP_ARRAY = e.from(r.KECCAK256_RLP_ARRAY_S, 'hex')),
    (r.KECCAK256_RLP_S = '56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421'),
    (r.KECCAK256_RLP = e.from(r.KECCAK256_RLP_S, 'hex'));
})(Ea);
var Ma = {},
  Ki = {};
(function (r) {
  Object.defineProperty(r, '__esModule', { value: !0 }),
    (r.baToJSON =
      r.addHexPrefix =
      r.toUnsigned =
      r.fromSigned =
      r.bufferToHex =
      r.bufferToInt =
      r.toBuffer =
      r.stripZeros =
      r.unpad =
      r.setLengthRight =
      r.setLength =
      r.setLengthLeft =
      r.zeros =
        void 0);
  var t = zi,
    e = Di;
  (r.zeros = function (i) {
    return F.allocUnsafe(i).fill(0);
  }),
    (r.setLengthLeft = function (i, n, s) {
      s === void 0 && (s = !1);
      var u = r.zeros(n);
      return (
        (i = r.toBuffer(i)),
        s
          ? i.length < n
            ? (i.copy(u), u)
            : i.slice(0, n)
          : i.length < n
            ? (i.copy(u, n - i.length), u)
            : i.slice(-n)
      );
    }),
    (r.setLength = r.setLengthLeft),
    (r.setLengthRight = function (i, n) {
      return r.setLength(i, n, !0);
    }),
    (r.unpad = function (i) {
      i = t.stripHexPrefix(i);
      for (var n = i[0]; i.length > 0 && n.toString() === '0'; ) (i = i.slice(1)), (n = i[0]);
      return i;
    }),
    (r.stripZeros = r.unpad),
    (r.toBuffer = function (i) {
      if (!F.isBuffer(i))
        if (Array.isArray(i)) i = F.from(i);
        else if (typeof i == 'string')
          if (t.isHexString(i)) i = F.from(t.padToEven(t.stripHexPrefix(i)), 'hex');
          else
            throw new Error(
              'Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: ' +
                i
            );
        else if (typeof i == 'number') i = t.intToBuffer(i);
        else if (i == null) i = F.allocUnsafe(0);
        else if (e.isBN(i)) i = i.toArrayLike(F);
        else if (i.toArray) i = F.from(i.toArray());
        else throw new Error('invalid type');
      return i;
    }),
    (r.bufferToInt = function (i) {
      return new e(r.toBuffer(i)).toNumber();
    }),
    (r.bufferToHex = function (i) {
      return (i = r.toBuffer(i)), '0x' + i.toString('hex');
    }),
    (r.fromSigned = function (i) {
      return new e(i).fromTwos(256);
    }),
    (r.toUnsigned = function (i) {
      return F.from(i.toTwos(256).toArray());
    }),
    (r.addHexPrefix = function (i) {
      return typeof i != 'string' || t.isHexPrefixed(i) ? i : '0x' + i;
    }),
    (r.baToJSON = function (i) {
      if (F.isBuffer(i)) return '0x' + i.toString('hex');
      if (i instanceof Array) {
        for (var n = [], s = 0; s < i.length; s++) n.push(r.baToJSON(i[s]));
        return n;
      }
    });
})(Ki);
var Hn = {},
  qi = {},
  Cs = {};
Object.defineProperty(Cs, '__esModule', { value: !0 });
function gh(r) {
  return function (t) {
    var e = r();
    return e.update(t), F.from(e.digest());
  };
}
Cs.createHashFunction = gh;
const { Transform: ph } = Lo;
var mh = (r) =>
  class _a extends ph {
    constructor(e, i, n, s, u) {
      super(u),
        (this._rate = e),
        (this._capacity = i),
        (this._delimitedSuffix = n),
        (this._hashBitLength = s),
        (this._options = u),
        (this._state = new r()),
        this._state.initialize(e, i),
        (this._finalized = !1);
    }
    _transform(e, i, n) {
      let s = null;
      try {
        this.update(e, i);
      } catch (u) {
        s = u;
      }
      n(s);
    }
    _flush(e) {
      let i = null;
      try {
        this.push(this.digest());
      } catch (n) {
        i = n;
      }
      e(i);
    }
    update(e, i) {
      if (!F.isBuffer(e) && typeof e != 'string')
        throw new TypeError('Data must be a string or a buffer');
      if (this._finalized) throw new Error('Digest already called');
      return F.isBuffer(e) || (e = F.from(e, i)), this._state.absorb(e), this;
    }
    digest(e) {
      if (this._finalized) throw new Error('Digest already called');
      (this._finalized = !0),
        this._delimitedSuffix && this._state.absorbLastFewBits(this._delimitedSuffix);
      let i = this._state.squeeze(this._hashBitLength / 8);
      return e !== void 0 && (i = i.toString(e)), this._resetState(), i;
    }
    _resetState() {
      return this._state.initialize(this._rate, this._capacity), this;
    }
    _clone() {
      const e = new _a(
        this._rate,
        this._capacity,
        this._delimitedSuffix,
        this._hashBitLength,
        this._options
      );
      return this._state.copy(e._state), (e._finalized = this._finalized), e;
    }
  };
const { Transform: vh } = Lo;
var yh = (r) =>
  class Sa extends vh {
    constructor(e, i, n, s) {
      super(s),
        (this._rate = e),
        (this._capacity = i),
        (this._delimitedSuffix = n),
        (this._options = s),
        (this._state = new r()),
        this._state.initialize(e, i),
        (this._finalized = !1);
    }
    _transform(e, i, n) {
      let s = null;
      try {
        this.update(e, i);
      } catch (u) {
        s = u;
      }
      n(s);
    }
    _flush() {}
    _read(e) {
      this.push(this.squeeze(e));
    }
    update(e, i) {
      if (!F.isBuffer(e) && typeof e != 'string')
        throw new TypeError('Data must be a string or a buffer');
      if (this._finalized) throw new Error('Squeeze already called');
      return F.isBuffer(e) || (e = F.from(e, i)), this._state.absorb(e), this;
    }
    squeeze(e, i) {
      this._finalized ||
        ((this._finalized = !0), this._state.absorbLastFewBits(this._delimitedSuffix));
      let n = this._state.squeeze(e);
      return i !== void 0 && (n = n.toString(i)), n;
    }
    _resetState() {
      return this._state.initialize(this._rate, this._capacity), this;
    }
    _clone() {
      const e = new Sa(this._rate, this._capacity, this._delimitedSuffix, this._options);
      return this._state.copy(e._state), (e._finalized = this._finalized), e;
    }
  };
const wh = mh,
  bh = yh;
var Ah = function (r) {
    const t = wh(r),
      e = bh(r);
    return function (i, n) {
      switch (typeof i == 'string' ? i.toLowerCase() : i) {
        case 'keccak224':
          return new t(1152, 448, null, 224, n);
        case 'keccak256':
          return new t(1088, 512, null, 256, n);
        case 'keccak384':
          return new t(832, 768, null, 384, n);
        case 'keccak512':
          return new t(576, 1024, null, 512, n);
        case 'sha3-224':
          return new t(1152, 448, 6, 224, n);
        case 'sha3-256':
          return new t(1088, 512, 6, 256, n);
        case 'sha3-384':
          return new t(832, 768, 6, 384, n);
        case 'sha3-512':
          return new t(576, 1024, 6, 512, n);
        case 'shake128':
          return new e(1344, 256, 31, n);
        case 'shake256':
          return new e(1088, 512, 31, n);
        default:
          throw new Error('Invald algorithm: ' + i);
      }
    };
  },
  Pa = {};
const oo = [
  1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545,
  2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139,
  2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0,
  2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424,
  2147483648,
];
Pa.p1600 = function (r) {
  for (let t = 0; t < 24; ++t) {
    const e = r[0] ^ r[10] ^ r[20] ^ r[30] ^ r[40],
      i = r[1] ^ r[11] ^ r[21] ^ r[31] ^ r[41],
      n = r[2] ^ r[12] ^ r[22] ^ r[32] ^ r[42],
      s = r[3] ^ r[13] ^ r[23] ^ r[33] ^ r[43],
      u = r[4] ^ r[14] ^ r[24] ^ r[34] ^ r[44],
      d = r[5] ^ r[15] ^ r[25] ^ r[35] ^ r[45],
      v = r[6] ^ r[16] ^ r[26] ^ r[36] ^ r[46],
      E = r[7] ^ r[17] ^ r[27] ^ r[37] ^ r[47],
      S = r[8] ^ r[18] ^ r[28] ^ r[38] ^ r[48],
      P = r[9] ^ r[19] ^ r[29] ^ r[39] ^ r[49];
    let I = S ^ ((n << 1) | (s >>> 31)),
      R = P ^ ((s << 1) | (n >>> 31));
    const C = r[0] ^ I,
      j = r[1] ^ R,
      ct = r[10] ^ I,
      W = r[11] ^ R,
      B = r[20] ^ I,
      Z = r[21] ^ R,
      Y = r[30] ^ I,
      tt = r[31] ^ R,
      xt = r[40] ^ I,
      se = r[41] ^ R;
    (I = e ^ ((u << 1) | (d >>> 31))), (R = i ^ ((d << 1) | (u >>> 31)));
    const de = r[2] ^ I,
      at = r[3] ^ R,
      be = r[12] ^ I,
      w = r[13] ^ R,
      o = r[22] ^ I,
      f = r[23] ^ R,
      h = r[32] ^ I,
      c = r[33] ^ R,
      p = r[42] ^ I,
      A = r[43] ^ R;
    (I = n ^ ((v << 1) | (E >>> 31))), (R = s ^ ((E << 1) | (v >>> 31)));
    const _ = r[4] ^ I,
      g = r[5] ^ R,
      a = r[14] ^ I,
      m = r[15] ^ R,
      q = r[24] ^ I,
      K = r[25] ^ R,
      H = r[34] ^ I,
      G = r[35] ^ R,
      st = r[44] ^ I,
      mt = r[45] ^ R;
    (I = u ^ ((S << 1) | (P >>> 31))), (R = d ^ ((P << 1) | (S >>> 31)));
    const Ne = r[6] ^ I,
      pt = r[7] ^ R,
      Et = r[16] ^ I,
      Ir = r[17] ^ R,
      Ot = r[26] ^ I,
      Jt = r[27] ^ R,
      zr = r[36] ^ I,
      te = r[37] ^ R,
      ee = r[46] ^ I,
      Br = r[47] ^ R;
    (I = v ^ ((e << 1) | (i >>> 31))), (R = E ^ ((i << 1) | (e >>> 31)));
    const Yt = r[8] ^ I,
      Nt = r[9] ^ R,
      hr = r[18] ^ I,
      Zt = r[19] ^ R,
      Ft = r[28] ^ I,
      wr = r[29] ^ R,
      Ut = r[38] ^ I,
      Ht = r[39] ^ R,
      lr = r[48] ^ I,
      Gt = r[49] ^ R,
      Dt = C,
      br = j,
      Qt = (W << 4) | (ct >>> 28),
      zt = (ct << 4) | (W >>> 28),
      cr = (B << 3) | (Z >>> 29),
      Ct = (Z << 3) | (B >>> 29),
      Bt = (tt << 9) | (Y >>> 23),
      We = (Y << 9) | (tt >>> 23),
      Tt = (xt << 18) | (se >>> 14),
      Lt = (se << 18) | (xt >>> 14),
      sr = (de << 1) | (at >>> 31),
      Rt = (at << 1) | (de >>> 31),
      Kt = (w << 12) | (be >>> 20),
      Ar = (be << 12) | (w >>> 20),
      Wt = (o << 10) | (f >>> 22),
      Xt = (f << 10) | (o >>> 22),
      qe = (c << 13) | (h >>> 19),
      Pt = (h << 13) | (c >>> 19),
      kt = (p << 2) | (A >>> 30),
      dr = (A << 2) | (p >>> 30),
      qt = (g << 30) | (_ >>> 2),
      jt = (_ << 30) | (g >>> 2),
      Tr = (a << 6) | (m >>> 26),
      vt = (m << 6) | (a >>> 26),
      Vt = (K << 11) | (q >>> 21),
      y = (q << 11) | (K >>> 21),
      x = (H << 15) | (G >>> 17),
      b = (G << 15) | (H >>> 17),
      l = (mt << 29) | (st >>> 3),
      M = (st << 29) | (mt >>> 3),
      k = (Ne << 28) | (pt >>> 4),
      T = (pt << 28) | (Ne >>> 4),
      L = (Ir << 23) | (Et >>> 9),
      D = (Et << 23) | (Ir >>> 9),
      lt = (Ot << 25) | (Jt >>> 7),
      et = (Jt << 25) | (Ot >>> 7),
      ie = (zr << 21) | (te >>> 11),
      nt = (te << 21) | (zr >>> 11),
      yt = (Br << 24) | (ee >>> 8),
      wt = (ee << 24) | (Br >>> 8),
      St = (Yt << 27) | (Nt >>> 5),
      _t = (Nt << 27) | (Yt >>> 5),
      bt = (hr << 20) | (Zt >>> 12),
      Mt = (Zt << 20) | (hr >>> 12),
      At = (wr << 7) | (Ft >>> 25),
      ot = (Ft << 7) | (wr >>> 25),
      dt = (Ut << 8) | (Ht >>> 24),
      rt = (Ht << 8) | (Ut >>> 24),
      ft = (lr << 14) | (Gt >>> 18),
      ht = (Gt << 14) | (lr >>> 18);
    (r[0] = Dt ^ (~Kt & Vt)),
      (r[1] = br ^ (~Ar & y)),
      (r[10] = k ^ (~bt & cr)),
      (r[11] = T ^ (~Mt & Ct)),
      (r[20] = sr ^ (~Tr & lt)),
      (r[21] = Rt ^ (~vt & et)),
      (r[30] = St ^ (~Qt & Wt)),
      (r[31] = _t ^ (~zt & Xt)),
      (r[40] = qt ^ (~L & At)),
      (r[41] = jt ^ (~D & ot)),
      (r[2] = Kt ^ (~Vt & ie)),
      (r[3] = Ar ^ (~y & nt)),
      (r[12] = bt ^ (~cr & qe)),
      (r[13] = Mt ^ (~Ct & Pt)),
      (r[22] = Tr ^ (~lt & dt)),
      (r[23] = vt ^ (~et & rt)),
      (r[32] = Qt ^ (~Wt & x)),
      (r[33] = zt ^ (~Xt & b)),
      (r[42] = L ^ (~At & Bt)),
      (r[43] = D ^ (~ot & We)),
      (r[4] = Vt ^ (~ie & ft)),
      (r[5] = y ^ (~nt & ht)),
      (r[14] = cr ^ (~qe & l)),
      (r[15] = Ct ^ (~Pt & M)),
      (r[24] = lt ^ (~dt & Tt)),
      (r[25] = et ^ (~rt & Lt)),
      (r[34] = Wt ^ (~x & yt)),
      (r[35] = Xt ^ (~b & wt)),
      (r[44] = At ^ (~Bt & kt)),
      (r[45] = ot ^ (~We & dr)),
      (r[6] = ie ^ (~ft & Dt)),
      (r[7] = nt ^ (~ht & br)),
      (r[16] = qe ^ (~l & k)),
      (r[17] = Pt ^ (~M & T)),
      (r[26] = dt ^ (~Tt & sr)),
      (r[27] = rt ^ (~Lt & Rt)),
      (r[36] = x ^ (~yt & St)),
      (r[37] = b ^ (~wt & _t)),
      (r[46] = Bt ^ (~kt & qt)),
      (r[47] = We ^ (~dr & jt)),
      (r[8] = ft ^ (~Dt & Kt)),
      (r[9] = ht ^ (~br & Ar)),
      (r[18] = l ^ (~k & bt)),
      (r[19] = M ^ (~T & Mt)),
      (r[28] = Tt ^ (~sr & Tr)),
      (r[29] = Lt ^ (~Rt & vt)),
      (r[38] = yt ^ (~St & Qt)),
      (r[39] = wt ^ (~_t & zt)),
      (r[48] = kt ^ (~qt & L)),
      (r[49] = dr ^ (~jt & D)),
      (r[0] ^= oo[t * 2]),
      (r[1] ^= oo[t * 2 + 1]);
  }
};
const In = Pa;
function Fi() {
  (this.state = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
    (this.blockSize = null),
    (this.count = 0),
    (this.squeezing = !1);
}
Fi.prototype.initialize = function (r, t) {
  for (let e = 0; e < 50; ++e) this.state[e] = 0;
  (this.blockSize = r / 8), (this.count = 0), (this.squeezing = !1);
};
Fi.prototype.absorb = function (r) {
  for (let t = 0; t < r.length; ++t)
    (this.state[~~(this.count / 4)] ^= r[t] << (8 * (this.count % 4))),
      (this.count += 1),
      this.count === this.blockSize && (In.p1600(this.state), (this.count = 0));
};
Fi.prototype.absorbLastFewBits = function (r) {
  (this.state[~~(this.count / 4)] ^= r << (8 * (this.count % 4))),
    r & 128 && this.count === this.blockSize - 1 && In.p1600(this.state),
    (this.state[~~((this.blockSize - 1) / 4)] ^= 128 << (8 * ((this.blockSize - 1) % 4))),
    In.p1600(this.state),
    (this.count = 0),
    (this.squeezing = !0);
};
Fi.prototype.squeeze = function (r) {
  this.squeezing || this.absorbLastFewBits(1);
  const t = F.alloc(r);
  for (let e = 0; e < r; ++e)
    (t[e] = (this.state[~~(this.count / 4)] >>> (8 * (this.count % 4))) & 255),
      (this.count += 1),
      this.count === this.blockSize && (In.p1600(this.state), (this.count = 0));
  return t;
};
Fi.prototype.copy = function (r) {
  for (let t = 0; t < 50; ++t) r.state[t] = this.state[t];
  (r.blockSize = this.blockSize), (r.count = this.count), (r.squeezing = this.squeezing);
};
var xh = Fi,
  Eh = Ah(xh);
Object.defineProperty(qi, '__esModule', { value: !0 });
var Gn = Cs,
  jn = Eh;
qi.keccak224 = Gn.createHashFunction(function () {
  return jn('keccak224');
});
qi.keccak256 = Gn.createHashFunction(function () {
  return jn('keccak256');
});
qi.keccak384 = Gn.createHashFunction(function () {
  return jn('keccak384');
});
qi.keccak512 = Gn.createHashFunction(function () {
  return jn('keccak512');
});
(function (r) {
  Object.defineProperty(r, '__esModule', { value: !0 }),
    (r.rlphash = r.ripemd160 = r.sha256 = r.keccak256 = r.keccak = void 0);
  var t = qi,
    e = t.keccak224,
    i = t.keccak384,
    n = t.keccak256,
    s = t.keccak512,
    u = of,
    d = zi,
    v = Zr,
    E = Ki;
  (r.keccak = function (S, P) {
    switch (
      (P === void 0 && (P = 256),
      typeof S == 'string' && !d.isHexString(S) ? (S = F.from(S, 'utf8')) : (S = E.toBuffer(S)),
      P || (P = 256),
      P)
    ) {
      case 224:
        return e(S);
      case 256:
        return n(S);
      case 384:
        return i(S);
      case 512:
        return s(S);
      default:
        throw new Error('Invald algorithm: keccak' + P);
    }
  }),
    (r.keccak256 = function (S) {
      return r.keccak(S);
    }),
    (r.sha256 = function (S) {
      return (S = E.toBuffer(S)), u('sha256').update(S).digest();
    }),
    (r.ripemd160 = function (S, P) {
      S = E.toBuffer(S);
      var I = u('rmd160').update(S).digest();
      return P === !0 ? E.setLength(I, 32) : I;
    }),
    (r.rlphash = function (S) {
      return r.keccak(v.encode(S));
    });
})(Hn);
(function (r) {
  Object.defineProperty(r, '__esModule', { value: !0 }),
    (r.importPublic =
      r.privateToPublic =
      r.privateToAddress =
      r.publicToAddress =
      r.pubToAddress =
      r.isValidPublic =
      r.isValidPrivate =
      r.isPrecompiled =
      r.generateAddress2 =
      r.generateAddress =
      r.isValidChecksumAddress =
      r.toChecksumAddress =
      r.isZeroAddress =
      r.isValidAddress =
      r.zeroAddress =
        void 0);
  var t = Oo(),
    e = zi,
    i = Kn,
    n = Di,
    s = Ki,
    u = Hn;
  (r.zeroAddress = function () {
    var d = 20,
      v = s.zeros(d);
    return s.bufferToHex(v);
  }),
    (r.isValidAddress = function (d) {
      return /^0x[0-9a-fA-F]{40}$/.test(d);
    }),
    (r.isZeroAddress = function (d) {
      var v = r.zeroAddress();
      return v === s.addHexPrefix(d);
    }),
    (r.toChecksumAddress = function (d, v) {
      d = e.stripHexPrefix(d).toLowerCase();
      for (
        var E = v !== void 0 ? v.toString() + '0x' : '',
          S = u.keccak(E + d).toString('hex'),
          P = '0x',
          I = 0;
        I < d.length;
        I++
      )
        parseInt(S[I], 16) >= 8 ? (P += d[I].toUpperCase()) : (P += d[I]);
      return P;
    }),
    (r.isValidChecksumAddress = function (d, v) {
      return r.isValidAddress(d) && r.toChecksumAddress(d, v) === d;
    }),
    (r.generateAddress = function (d, v) {
      d = s.toBuffer(d);
      var E = new n(v);
      return E.isZero()
        ? u.rlphash([d, null]).slice(-20)
        : u.rlphash([d, F.from(E.toArray())]).slice(-20);
    }),
    (r.generateAddress2 = function (d, v, E) {
      var S = s.toBuffer(d),
        P = s.toBuffer(v),
        I = s.toBuffer(E);
      t(S.length === 20), t(P.length === 32);
      var R = u.keccak256(F.concat([F.from('ff', 'hex'), S, P, u.keccak256(I)]));
      return R.slice(-20);
    }),
    (r.isPrecompiled = function (d) {
      var v = s.unpad(d);
      return v.length === 1 && v[0] >= 1 && v[0] <= 8;
    }),
    (r.isValidPrivate = function (d) {
      return i.privateKeyVerify(d);
    }),
    (r.isValidPublic = function (d, v) {
      return (
        v === void 0 && (v = !1),
        d.length === 64
          ? i.publicKeyVerify(F.concat([F.from([4]), d]))
          : v
            ? i.publicKeyVerify(d)
            : !1
      );
    }),
    (r.pubToAddress = function (d, v) {
      return (
        v === void 0 && (v = !1),
        (d = s.toBuffer(d)),
        v && d.length !== 64 && (d = i.publicKeyConvert(d, !1).slice(1)),
        t(d.length === 64),
        u.keccak(d).slice(-20)
      );
    }),
    (r.publicToAddress = r.pubToAddress),
    (r.privateToAddress = function (d) {
      return r.publicToAddress(r.privateToPublic(d));
    }),
    (r.privateToPublic = function (d) {
      return (d = s.toBuffer(d)), i.publicKeyCreate(d, !1).slice(1);
    }),
    (r.importPublic = function (d) {
      return (d = s.toBuffer(d)), d.length !== 64 && (d = i.publicKeyConvert(d, !1).slice(1)), d;
    });
})(Ma);
var fr = {};
Object.defineProperty(fr, '__esModule', { value: !0 });
fr.hashPersonalMessage =
  fr.isValidSignature =
  fr.fromRpcSig =
  fr.toRpcSig =
  fr.ecrecover =
  fr.ecsign =
    void 0;
var gs = Kn,
  cn = Di,
  wi = Ki,
  Mh = Hn;
fr.ecsign = function (r, t, e) {
  var i = gs.sign(r, t),
    n = i.recovery,
    s = {
      r: i.signature.slice(0, 32),
      s: i.signature.slice(32, 64),
      v: e ? n + (e * 2 + 35) : n + 27,
    };
  return s;
};
fr.ecrecover = function (r, t, e, i, n) {
  var s = F.concat([wi.setLength(e, 32), wi.setLength(i, 32)], 64),
    u = Ls(t, n);
  if (!Os(u)) throw new Error('Invalid signature v value');
  var d = gs.recover(r, s, u);
  return gs.publicKeyConvert(d, !1).slice(1);
};
fr.toRpcSig = function (r, t, e, i) {
  var n = Ls(r, i);
  if (!Os(n)) throw new Error('Invalid signature v value');
  return wi.bufferToHex(
    F.concat([wi.setLengthLeft(t, 32), wi.setLengthLeft(e, 32), wi.toBuffer(r)])
  );
};
fr.fromRpcSig = function (r) {
  var t = wi.toBuffer(r);
  if (t.length !== 65) throw new Error('Invalid signature length');
  var e = t[64];
  return e < 27 && (e += 27), { v: e, r: t.slice(0, 32), s: t.slice(32, 64) };
};
fr.isValidSignature = function (r, t, e, i, n) {
  i === void 0 && (i = !0);
  var s = new cn('7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0', 16),
    u = new cn('fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141', 16);
  if (t.length !== 32 || e.length !== 32 || !Os(Ls(r, n))) return !1;
  var d = new cn(t),
    v = new cn(e);
  return !(d.isZero() || d.gt(u) || v.isZero() || v.gt(u) || (i && v.cmp(s) === 1));
};
fr.hashPersonalMessage = function (r) {
  var t = F.from(
    `Ethereum Signed Message:
` + r.length.toString(),
    'utf-8'
  );
  return Mh.keccak(F.concat([t, r]));
};
function Ls(r, t) {
  return t ? r - (2 * t + 35) : r - 27;
}
function Os(r) {
  return r === 0 || r === 1;
}
var Vn = {};
Object.defineProperty(Vn, '__esModule', { value: !0 });
Vn.defineProperties = void 0;
var ao = Oo(),
  _h = zi,
  fo = Zr,
  dn = Ki;
Vn.defineProperties = function (r, t, e) {
  if (
    ((r.raw = []),
    (r._fields = []),
    (r.toJSON = function (n) {
      if ((n === void 0 && (n = !1), n)) {
        var s = {};
        return (
          r._fields.forEach(function (u) {
            s[u] = '0x' + r[u].toString('hex');
          }),
          s
        );
      }
      return dn.baToJSON(r.raw);
    }),
    (r.serialize = function () {
      return fo.encode(r.raw);
    }),
    t.forEach(function (n, s) {
      r._fields.push(n.name);
      function u() {
        return r.raw[s];
      }
      function d(v) {
        (v = dn.toBuffer(v)),
          v.toString('hex') === '00' && !n.allowZero && (v = F.allocUnsafe(0)),
          n.allowLess && n.length
            ? ((v = dn.stripZeros(v)),
              ao(
                n.length >= v.length,
                'The field ' + n.name + ' must not have more ' + n.length + ' bytes'
              ))
            : !(n.allowZero && v.length === 0) &&
              n.length &&
              ao(
                n.length === v.length,
                'The field ' + n.name + ' must have byte length of ' + n.length
              ),
          (r.raw[s] = v);
      }
      Object.defineProperty(r, n.name, { enumerable: !0, configurable: !0, get: u, set: d }),
        n.default && (r[n.name] = n.default),
        n.alias &&
          Object.defineProperty(r, n.alias, { enumerable: !1, configurable: !0, set: d, get: u });
    }),
    e)
  )
    if (
      (typeof e == 'string' && (e = F.from(_h.stripHexPrefix(e), 'hex')),
      F.isBuffer(e) && (e = fo.decode(e)),
      Array.isArray(e))
    ) {
      if (e.length > r._fields.length) throw new Error('wrong number of fields in data');
      e.forEach(function (n, s) {
        r[r._fields[s]] = dn.toBuffer(n);
      });
    } else if (typeof e == 'object') {
      var i = Object.keys(e);
      t.forEach(function (n) {
        i.indexOf(n.name) !== -1 && (r[n.name] = e[n.name]),
          i.indexOf(n.alias) !== -1 && (r[n.alias] = e[n.alias]);
      });
    } else throw new Error('invalid data');
};
(function (r) {
  var t =
      (Te && Te.__createBinding) ||
      (Object.create
        ? function (d, v, E, S) {
            S === void 0 && (S = E),
              Object.defineProperty(d, S, {
                enumerable: !0,
                get: function () {
                  return v[E];
                },
              });
          }
        : function (d, v, E, S) {
            S === void 0 && (S = E), (d[S] = v[E]);
          }),
    e =
      (Te && Te.__exportStar) ||
      function (d, v) {
        for (var E in d) E !== 'default' && !v.hasOwnProperty(E) && t(v, d, E);
      };
  Object.defineProperty(r, '__esModule', { value: !0 }), (r.secp256k1 = r.rlp = r.BN = void 0);
  var i = Kn;
  r.secp256k1 = i;
  var n = zi,
    s = Di;
  r.BN = s;
  var u = Zr;
  (r.rlp = u), Object.assign(r, n), e(Ea, r), e(Ma, r), e(Hn, r), e(fr, r), e(Ki, r), e(Vn, r);
})(fn);
var Ze = {};
Object.defineProperty(Ze, '__esModule', { value: !0 });
Ze.normalize =
  Ze.recoverPublicKey =
  Ze.concatSig =
  Ze.legacyToBuffer =
  Ze.isNullish =
  Ze.padWithZeroes =
    void 0;
const _r = fn,
  ps = zi;
function ms(r, t) {
  if (r !== '' && !/^[a-f0-9]+$/iu.test(r))
    throw new Error(`Expected an unprefixed hex string. Received: ${r}`);
  if (t < 0) throw new Error(`Expected a non-negative integer target length. Received: ${t}`);
  return String.prototype.padStart.call(r, t, '0');
}
Ze.padWithZeroes = ms;
function Sh(r) {
  return r == null;
}
Ze.isNullish = Sh;
function Ph(r) {
  return typeof r == 'string' && !ps.isHexString(r) ? F.from(r) : _r.toBuffer(r);
}
Ze.legacyToBuffer = Ph;
function Nh(r, t, e) {
  const i = _r.fromSigned(t),
    n = _r.fromSigned(e),
    s = _r.bufferToInt(r),
    u = ms(_r.toUnsigned(i).toString('hex'), 64),
    d = ms(_r.toUnsigned(n).toString('hex'), 64),
    v = ps.stripHexPrefix(ps.intToHex(s));
  return _r.addHexPrefix(u.concat(d, v));
}
Ze.concatSig = Nh;
function kh(r, t) {
  const e = _r.fromRpcSig(t);
  return _r.ecrecover(r, e.v, e.r, e.s);
}
Ze.recoverPublicKey = kh;
function Ih(r) {
  if (r) {
    if (typeof r == 'number') {
      const t = _r.toBuffer(r);
      r = _r.bufferToHex(t);
    }
    if (typeof r != 'string') {
      let t = 'eth-sig-util.normalize() requires hex string or integer input.';
      throw ((t += ` received ${typeof r}: ${r}`), new Error(t));
    }
    return _r.addHexPrefix(r.toLowerCase());
  }
}
Ze.normalize = Ih;
Object.defineProperty(li, '__esModule', { value: !0 });
li.extractPublicKey = li.recoverPersonalSignature = li.personalSign = void 0;
const Bi = fn,
  Jr = Ze;
function Bh({ privateKey: r, data: t }) {
  if (Jr.isNullish(t)) throw new Error('Missing data parameter');
  if (Jr.isNullish(r)) throw new Error('Missing privateKey parameter');
  const e = Jr.legacyToBuffer(t),
    i = Bi.hashPersonalMessage(e),
    n = Bi.ecsign(i, r);
  return Jr.concatSig(Bi.toBuffer(n.v), n.r, n.s);
}
li.personalSign = Bh;
function Th({ data: r, signature: t }) {
  if (Jr.isNullish(r)) throw new Error('Missing data parameter');
  if (Jr.isNullish(t)) throw new Error('Missing signature parameter');
  const e = Na(r, t),
    i = Bi.publicToAddress(e);
  return Bi.bufferToHex(i);
}
li.recoverPersonalSignature = Th;
function Rh({ data: r, signature: t }) {
  if (Jr.isNullish(r)) throw new Error('Missing data parameter');
  if (Jr.isNullish(t)) throw new Error('Missing signature parameter');
  return `0x${Na(r, t).toString('hex')}`;
}
li.extractPublicKey = Rh;
function Na(r, t) {
  const e = Bi.hashPersonalMessage(Jr.legacyToBuffer(r));
  return Jr.recoverPublicKey(e, t);
}
var ka = {},
  Us = { exports: {} };
Us.exports;
(function (r) {
  (function (t, e) {
    function i(w, o) {
      if (!w) throw new Error(o || 'Assertion failed');
    }
    function n(w, o) {
      w.super_ = o;
      var f = function () {};
      (f.prototype = o.prototype), (w.prototype = new f()), (w.prototype.constructor = w);
    }
    function s(w, o, f) {
      if (s.isBN(w)) return w;
      (this.negative = 0),
        (this.words = null),
        (this.length = 0),
        (this.red = null),
        w !== null &&
          ((o === 'le' || o === 'be') && ((f = o), (o = 10)),
          this._init(w || 0, o || 10, f || 'be'));
    }
    typeof t == 'object' ? (t.exports = s) : (e.BN = s), (s.BN = s), (s.wordSize = 26);
    var u;
    try {
      typeof window < 'u' && typeof window.Buffer < 'u' ? (u = window.Buffer) : (u = Ln.Buffer);
    } catch {}
    (s.isBN = function (o) {
      return o instanceof s
        ? !0
        : o !== null &&
            typeof o == 'object' &&
            o.constructor.wordSize === s.wordSize &&
            Array.isArray(o.words);
    }),
      (s.max = function (o, f) {
        return o.cmp(f) > 0 ? o : f;
      }),
      (s.min = function (o, f) {
        return o.cmp(f) < 0 ? o : f;
      }),
      (s.prototype._init = function (o, f, h) {
        if (typeof o == 'number') return this._initNumber(o, f, h);
        if (typeof o == 'object') return this._initArray(o, f, h);
        f === 'hex' && (f = 16),
          i(f === (f | 0) && f >= 2 && f <= 36),
          (o = o.toString().replace(/\s+/g, ''));
        var c = 0;
        o[0] === '-' && (c++, (this.negative = 1)),
          c < o.length &&
            (f === 16
              ? this._parseHex(o, c, h)
              : (this._parseBase(o, f, c), h === 'le' && this._initArray(this.toArray(), f, h)));
      }),
      (s.prototype._initNumber = function (o, f, h) {
        o < 0 && ((this.negative = 1), (o = -o)),
          o < 67108864
            ? ((this.words = [o & 67108863]), (this.length = 1))
            : o < 4503599627370496
              ? ((this.words = [o & 67108863, (o / 67108864) & 67108863]), (this.length = 2))
              : (i(o < 9007199254740992),
                (this.words = [o & 67108863, (o / 67108864) & 67108863, 1]),
                (this.length = 3)),
          h === 'le' && this._initArray(this.toArray(), f, h);
      }),
      (s.prototype._initArray = function (o, f, h) {
        if ((i(typeof o.length == 'number'), o.length <= 0))
          return (this.words = [0]), (this.length = 1), this;
        (this.length = Math.ceil(o.length / 3)), (this.words = new Array(this.length));
        for (var c = 0; c < this.length; c++) this.words[c] = 0;
        var p,
          A,
          _ = 0;
        if (h === 'be')
          for (c = o.length - 1, p = 0; c >= 0; c -= 3)
            (A = o[c] | (o[c - 1] << 8) | (o[c - 2] << 16)),
              (this.words[p] |= (A << _) & 67108863),
              (this.words[p + 1] = (A >>> (26 - _)) & 67108863),
              (_ += 24),
              _ >= 26 && ((_ -= 26), p++);
        else if (h === 'le')
          for (c = 0, p = 0; c < o.length; c += 3)
            (A = o[c] | (o[c + 1] << 8) | (o[c + 2] << 16)),
              (this.words[p] |= (A << _) & 67108863),
              (this.words[p + 1] = (A >>> (26 - _)) & 67108863),
              (_ += 24),
              _ >= 26 && ((_ -= 26), p++);
        return this.strip();
      });
    function d(w, o) {
      var f = w.charCodeAt(o);
      return f >= 65 && f <= 70 ? f - 55 : f >= 97 && f <= 102 ? f - 87 : (f - 48) & 15;
    }
    function v(w, o, f) {
      var h = d(w, f);
      return f - 1 >= o && (h |= d(w, f - 1) << 4), h;
    }
    s.prototype._parseHex = function (o, f, h) {
      (this.length = Math.ceil((o.length - f) / 6)), (this.words = new Array(this.length));
      for (var c = 0; c < this.length; c++) this.words[c] = 0;
      var p = 0,
        A = 0,
        _;
      if (h === 'be')
        for (c = o.length - 1; c >= f; c -= 2)
          (_ = v(o, f, c) << p),
            (this.words[A] |= _ & 67108863),
            p >= 18 ? ((p -= 18), (A += 1), (this.words[A] |= _ >>> 26)) : (p += 8);
      else {
        var g = o.length - f;
        for (c = g % 2 === 0 ? f + 1 : f; c < o.length; c += 2)
          (_ = v(o, f, c) << p),
            (this.words[A] |= _ & 67108863),
            p >= 18 ? ((p -= 18), (A += 1), (this.words[A] |= _ >>> 26)) : (p += 8);
      }
      this.strip();
    };
    function E(w, o, f, h) {
      for (var c = 0, p = Math.min(w.length, f), A = o; A < p; A++) {
        var _ = w.charCodeAt(A) - 48;
        (c *= h), _ >= 49 ? (c += _ - 49 + 10) : _ >= 17 ? (c += _ - 17 + 10) : (c += _);
      }
      return c;
    }
    (s.prototype._parseBase = function (o, f, h) {
      (this.words = [0]), (this.length = 1);
      for (var c = 0, p = 1; p <= 67108863; p *= f) c++;
      c--, (p = (p / f) | 0);
      for (var A = o.length - h, _ = A % c, g = Math.min(A, A - _) + h, a = 0, m = h; m < g; m += c)
        (a = E(o, m, m + c, f)),
          this.imuln(p),
          this.words[0] + a < 67108864 ? (this.words[0] += a) : this._iaddn(a);
      if (_ !== 0) {
        var q = 1;
        for (a = E(o, m, o.length, f), m = 0; m < _; m++) q *= f;
        this.imuln(q), this.words[0] + a < 67108864 ? (this.words[0] += a) : this._iaddn(a);
      }
      this.strip();
    }),
      (s.prototype.copy = function (o) {
        o.words = new Array(this.length);
        for (var f = 0; f < this.length; f++) o.words[f] = this.words[f];
        (o.length = this.length), (o.negative = this.negative), (o.red = this.red);
      }),
      (s.prototype.clone = function () {
        var o = new s(null);
        return this.copy(o), o;
      }),
      (s.prototype._expand = function (o) {
        for (; this.length < o; ) this.words[this.length++] = 0;
        return this;
      }),
      (s.prototype.strip = function () {
        for (; this.length > 1 && this.words[this.length - 1] === 0; ) this.length--;
        return this._normSign();
      }),
      (s.prototype._normSign = function () {
        return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
      }),
      (s.prototype.inspect = function () {
        return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
      });
    var S = [
        '',
        '0',
        '00',
        '000',
        '0000',
        '00000',
        '000000',
        '0000000',
        '00000000',
        '000000000',
        '0000000000',
        '00000000000',
        '000000000000',
        '0000000000000',
        '00000000000000',
        '000000000000000',
        '0000000000000000',
        '00000000000000000',
        '000000000000000000',
        '0000000000000000000',
        '00000000000000000000',
        '000000000000000000000',
        '0000000000000000000000',
        '00000000000000000000000',
        '000000000000000000000000',
        '0000000000000000000000000',
      ],
      P = [
        0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5,
        5, 5, 5, 5, 5, 5, 5, 5,
      ],
      I = [
        0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7,
        19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881,
        64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149,
        243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176,
      ];
    (s.prototype.toString = function (o, f) {
      (o = o || 10), (f = f | 0 || 1);
      var h;
      if (o === 16 || o === 'hex') {
        h = '';
        for (var c = 0, p = 0, A = 0; A < this.length; A++) {
          var _ = this.words[A],
            g = (((_ << c) | p) & 16777215).toString(16);
          (p = (_ >>> (24 - c)) & 16777215),
            p !== 0 || A !== this.length - 1 ? (h = S[6 - g.length] + g + h) : (h = g + h),
            (c += 2),
            c >= 26 && ((c -= 26), A--);
        }
        for (p !== 0 && (h = p.toString(16) + h); h.length % f !== 0; ) h = '0' + h;
        return this.negative !== 0 && (h = '-' + h), h;
      }
      if (o === (o | 0) && o >= 2 && o <= 36) {
        var a = P[o],
          m = I[o];
        h = '';
        var q = this.clone();
        for (q.negative = 0; !q.isZero(); ) {
          var K = q.modn(m).toString(o);
          (q = q.idivn(m)), q.isZero() ? (h = K + h) : (h = S[a - K.length] + K + h);
        }
        for (this.isZero() && (h = '0' + h); h.length % f !== 0; ) h = '0' + h;
        return this.negative !== 0 && (h = '-' + h), h;
      }
      i(!1, 'Base should be between 2 and 36');
    }),
      (s.prototype.toNumber = function () {
        var o = this.words[0];
        return (
          this.length === 2
            ? (o += this.words[1] * 67108864)
            : this.length === 3 && this.words[2] === 1
              ? (o += 4503599627370496 + this.words[1] * 67108864)
              : this.length > 2 && i(!1, 'Number can only safely store up to 53 bits'),
          this.negative !== 0 ? -o : o
        );
      }),
      (s.prototype.toJSON = function () {
        return this.toString(16);
      }),
      (s.prototype.toBuffer = function (o, f) {
        return i(typeof u < 'u'), this.toArrayLike(u, o, f);
      }),
      (s.prototype.toArray = function (o, f) {
        return this.toArrayLike(Array, o, f);
      }),
      (s.prototype.toArrayLike = function (o, f, h) {
        var c = this.byteLength(),
          p = h || Math.max(1, c);
        i(c <= p, 'byte array longer than desired length'),
          i(p > 0, 'Requested array length <= 0'),
          this.strip();
        var A = f === 'le',
          _ = new o(p),
          g,
          a,
          m = this.clone();
        if (A) {
          for (a = 0; !m.isZero(); a++) (g = m.andln(255)), m.iushrn(8), (_[a] = g);
          for (; a < p; a++) _[a] = 0;
        } else {
          for (a = 0; a < p - c; a++) _[a] = 0;
          for (a = 0; !m.isZero(); a++) (g = m.andln(255)), m.iushrn(8), (_[p - a - 1] = g);
        }
        return _;
      }),
      Math.clz32
        ? (s.prototype._countBits = function (o) {
            return 32 - Math.clz32(o);
          })
        : (s.prototype._countBits = function (o) {
            var f = o,
              h = 0;
            return (
              f >= 4096 && ((h += 13), (f >>>= 13)),
              f >= 64 && ((h += 7), (f >>>= 7)),
              f >= 8 && ((h += 4), (f >>>= 4)),
              f >= 2 && ((h += 2), (f >>>= 2)),
              h + f
            );
          }),
      (s.prototype._zeroBits = function (o) {
        if (o === 0) return 26;
        var f = o,
          h = 0;
        return (
          f & 8191 || ((h += 13), (f >>>= 13)),
          f & 127 || ((h += 7), (f >>>= 7)),
          f & 15 || ((h += 4), (f >>>= 4)),
          f & 3 || ((h += 2), (f >>>= 2)),
          f & 1 || h++,
          h
        );
      }),
      (s.prototype.bitLength = function () {
        var o = this.words[this.length - 1],
          f = this._countBits(o);
        return (this.length - 1) * 26 + f;
      });
    function R(w) {
      for (var o = new Array(w.bitLength()), f = 0; f < o.length; f++) {
        var h = (f / 26) | 0,
          c = f % 26;
        o[f] = (w.words[h] & (1 << c)) >>> c;
      }
      return o;
    }
    (s.prototype.zeroBits = function () {
      if (this.isZero()) return 0;
      for (var o = 0, f = 0; f < this.length; f++) {
        var h = this._zeroBits(this.words[f]);
        if (((o += h), h !== 26)) break;
      }
      return o;
    }),
      (s.prototype.byteLength = function () {
        return Math.ceil(this.bitLength() / 8);
      }),
      (s.prototype.toTwos = function (o) {
        return this.negative !== 0 ? this.abs().inotn(o).iaddn(1) : this.clone();
      }),
      (s.prototype.fromTwos = function (o) {
        return this.testn(o - 1) ? this.notn(o).iaddn(1).ineg() : this.clone();
      }),
      (s.prototype.isNeg = function () {
        return this.negative !== 0;
      }),
      (s.prototype.neg = function () {
        return this.clone().ineg();
      }),
      (s.prototype.ineg = function () {
        return this.isZero() || (this.negative ^= 1), this;
      }),
      (s.prototype.iuor = function (o) {
        for (; this.length < o.length; ) this.words[this.length++] = 0;
        for (var f = 0; f < o.length; f++) this.words[f] = this.words[f] | o.words[f];
        return this.strip();
      }),
      (s.prototype.ior = function (o) {
        return i((this.negative | o.negative) === 0), this.iuor(o);
      }),
      (s.prototype.or = function (o) {
        return this.length > o.length ? this.clone().ior(o) : o.clone().ior(this);
      }),
      (s.prototype.uor = function (o) {
        return this.length > o.length ? this.clone().iuor(o) : o.clone().iuor(this);
      }),
      (s.prototype.iuand = function (o) {
        var f;
        this.length > o.length ? (f = o) : (f = this);
        for (var h = 0; h < f.length; h++) this.words[h] = this.words[h] & o.words[h];
        return (this.length = f.length), this.strip();
      }),
      (s.prototype.iand = function (o) {
        return i((this.negative | o.negative) === 0), this.iuand(o);
      }),
      (s.prototype.and = function (o) {
        return this.length > o.length ? this.clone().iand(o) : o.clone().iand(this);
      }),
      (s.prototype.uand = function (o) {
        return this.length > o.length ? this.clone().iuand(o) : o.clone().iuand(this);
      }),
      (s.prototype.iuxor = function (o) {
        var f, h;
        this.length > o.length ? ((f = this), (h = o)) : ((f = o), (h = this));
        for (var c = 0; c < h.length; c++) this.words[c] = f.words[c] ^ h.words[c];
        if (this !== f) for (; c < f.length; c++) this.words[c] = f.words[c];
        return (this.length = f.length), this.strip();
      }),
      (s.prototype.ixor = function (o) {
        return i((this.negative | o.negative) === 0), this.iuxor(o);
      }),
      (s.prototype.xor = function (o) {
        return this.length > o.length ? this.clone().ixor(o) : o.clone().ixor(this);
      }),
      (s.prototype.uxor = function (o) {
        return this.length > o.length ? this.clone().iuxor(o) : o.clone().iuxor(this);
      }),
      (s.prototype.inotn = function (o) {
        i(typeof o == 'number' && o >= 0);
        var f = Math.ceil(o / 26) | 0,
          h = o % 26;
        this._expand(f), h > 0 && f--;
        for (var c = 0; c < f; c++) this.words[c] = ~this.words[c] & 67108863;
        return h > 0 && (this.words[c] = ~this.words[c] & (67108863 >> (26 - h))), this.strip();
      }),
      (s.prototype.notn = function (o) {
        return this.clone().inotn(o);
      }),
      (s.prototype.setn = function (o, f) {
        i(typeof o == 'number' && o >= 0);
        var h = (o / 26) | 0,
          c = o % 26;
        return (
          this._expand(h + 1),
          f
            ? (this.words[h] = this.words[h] | (1 << c))
            : (this.words[h] = this.words[h] & ~(1 << c)),
          this.strip()
        );
      }),
      (s.prototype.iadd = function (o) {
        var f;
        if (this.negative !== 0 && o.negative === 0)
          return (this.negative = 0), (f = this.isub(o)), (this.negative ^= 1), this._normSign();
        if (this.negative === 0 && o.negative !== 0)
          return (o.negative = 0), (f = this.isub(o)), (o.negative = 1), f._normSign();
        var h, c;
        this.length > o.length ? ((h = this), (c = o)) : ((h = o), (c = this));
        for (var p = 0, A = 0; A < c.length; A++)
          (f = (h.words[A] | 0) + (c.words[A] | 0) + p),
            (this.words[A] = f & 67108863),
            (p = f >>> 26);
        for (; p !== 0 && A < h.length; A++)
          (f = (h.words[A] | 0) + p), (this.words[A] = f & 67108863), (p = f >>> 26);
        if (((this.length = h.length), p !== 0)) (this.words[this.length] = p), this.length++;
        else if (h !== this) for (; A < h.length; A++) this.words[A] = h.words[A];
        return this;
      }),
      (s.prototype.add = function (o) {
        var f;
        return o.negative !== 0 && this.negative === 0
          ? ((o.negative = 0), (f = this.sub(o)), (o.negative ^= 1), f)
          : o.negative === 0 && this.negative !== 0
            ? ((this.negative = 0), (f = o.sub(this)), (this.negative = 1), f)
            : this.length > o.length
              ? this.clone().iadd(o)
              : o.clone().iadd(this);
      }),
      (s.prototype.isub = function (o) {
        if (o.negative !== 0) {
          o.negative = 0;
          var f = this.iadd(o);
          return (o.negative = 1), f._normSign();
        } else if (this.negative !== 0)
          return (this.negative = 0), this.iadd(o), (this.negative = 1), this._normSign();
        var h = this.cmp(o);
        if (h === 0) return (this.negative = 0), (this.length = 1), (this.words[0] = 0), this;
        var c, p;
        h > 0 ? ((c = this), (p = o)) : ((c = o), (p = this));
        for (var A = 0, _ = 0; _ < p.length; _++)
          (f = (c.words[_] | 0) - (p.words[_] | 0) + A),
            (A = f >> 26),
            (this.words[_] = f & 67108863);
        for (; A !== 0 && _ < c.length; _++)
          (f = (c.words[_] | 0) + A), (A = f >> 26), (this.words[_] = f & 67108863);
        if (A === 0 && _ < c.length && c !== this)
          for (; _ < c.length; _++) this.words[_] = c.words[_];
        return (
          (this.length = Math.max(this.length, _)), c !== this && (this.negative = 1), this.strip()
        );
      }),
      (s.prototype.sub = function (o) {
        return this.clone().isub(o);
      });
    function C(w, o, f) {
      f.negative = o.negative ^ w.negative;
      var h = (w.length + o.length) | 0;
      (f.length = h), (h = (h - 1) | 0);
      var c = w.words[0] | 0,
        p = o.words[0] | 0,
        A = c * p,
        _ = A & 67108863,
        g = (A / 67108864) | 0;
      f.words[0] = _;
      for (var a = 1; a < h; a++) {
        for (
          var m = g >>> 26,
            q = g & 67108863,
            K = Math.min(a, o.length - 1),
            H = Math.max(0, a - w.length + 1);
          H <= K;
          H++
        ) {
          var G = (a - H) | 0;
          (c = w.words[G] | 0),
            (p = o.words[H] | 0),
            (A = c * p + q),
            (m += (A / 67108864) | 0),
            (q = A & 67108863);
        }
        (f.words[a] = q | 0), (g = m | 0);
      }
      return g !== 0 ? (f.words[a] = g | 0) : f.length--, f.strip();
    }
    var j = function (o, f, h) {
      var c = o.words,
        p = f.words,
        A = h.words,
        _ = 0,
        g,
        a,
        m,
        q = c[0] | 0,
        K = q & 8191,
        H = q >>> 13,
        G = c[1] | 0,
        st = G & 8191,
        mt = G >>> 13,
        Ne = c[2] | 0,
        pt = Ne & 8191,
        Et = Ne >>> 13,
        Ir = c[3] | 0,
        Ot = Ir & 8191,
        Jt = Ir >>> 13,
        zr = c[4] | 0,
        te = zr & 8191,
        ee = zr >>> 13,
        Br = c[5] | 0,
        Yt = Br & 8191,
        Nt = Br >>> 13,
        hr = c[6] | 0,
        Zt = hr & 8191,
        Ft = hr >>> 13,
        wr = c[7] | 0,
        Ut = wr & 8191,
        Ht = wr >>> 13,
        lr = c[8] | 0,
        Gt = lr & 8191,
        Dt = lr >>> 13,
        br = c[9] | 0,
        Qt = br & 8191,
        zt = br >>> 13,
        cr = p[0] | 0,
        Ct = cr & 8191,
        Bt = cr >>> 13,
        We = p[1] | 0,
        Tt = We & 8191,
        Lt = We >>> 13,
        sr = p[2] | 0,
        Rt = sr & 8191,
        Kt = sr >>> 13,
        Ar = p[3] | 0,
        Wt = Ar & 8191,
        Xt = Ar >>> 13,
        qe = p[4] | 0,
        Pt = qe & 8191,
        kt = qe >>> 13,
        dr = p[5] | 0,
        qt = dr & 8191,
        jt = dr >>> 13,
        Tr = p[6] | 0,
        vt = Tr & 8191,
        Vt = Tr >>> 13,
        y = p[7] | 0,
        x = y & 8191,
        b = y >>> 13,
        l = p[8] | 0,
        M = l & 8191,
        k = l >>> 13,
        T = p[9] | 0,
        L = T & 8191,
        D = T >>> 13;
      (h.negative = o.negative ^ f.negative),
        (h.length = 19),
        (g = Math.imul(K, Ct)),
        (a = Math.imul(K, Bt)),
        (a = (a + Math.imul(H, Ct)) | 0),
        (m = Math.imul(H, Bt));
      var lt = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (lt >>> 26)) | 0),
        (lt &= 67108863),
        (g = Math.imul(st, Ct)),
        (a = Math.imul(st, Bt)),
        (a = (a + Math.imul(mt, Ct)) | 0),
        (m = Math.imul(mt, Bt)),
        (g = (g + Math.imul(K, Tt)) | 0),
        (a = (a + Math.imul(K, Lt)) | 0),
        (a = (a + Math.imul(H, Tt)) | 0),
        (m = (m + Math.imul(H, Lt)) | 0);
      var et = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (et >>> 26)) | 0),
        (et &= 67108863),
        (g = Math.imul(pt, Ct)),
        (a = Math.imul(pt, Bt)),
        (a = (a + Math.imul(Et, Ct)) | 0),
        (m = Math.imul(Et, Bt)),
        (g = (g + Math.imul(st, Tt)) | 0),
        (a = (a + Math.imul(st, Lt)) | 0),
        (a = (a + Math.imul(mt, Tt)) | 0),
        (m = (m + Math.imul(mt, Lt)) | 0),
        (g = (g + Math.imul(K, Rt)) | 0),
        (a = (a + Math.imul(K, Kt)) | 0),
        (a = (a + Math.imul(H, Rt)) | 0),
        (m = (m + Math.imul(H, Kt)) | 0);
      var ie = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (ie >>> 26)) | 0),
        (ie &= 67108863),
        (g = Math.imul(Ot, Ct)),
        (a = Math.imul(Ot, Bt)),
        (a = (a + Math.imul(Jt, Ct)) | 0),
        (m = Math.imul(Jt, Bt)),
        (g = (g + Math.imul(pt, Tt)) | 0),
        (a = (a + Math.imul(pt, Lt)) | 0),
        (a = (a + Math.imul(Et, Tt)) | 0),
        (m = (m + Math.imul(Et, Lt)) | 0),
        (g = (g + Math.imul(st, Rt)) | 0),
        (a = (a + Math.imul(st, Kt)) | 0),
        (a = (a + Math.imul(mt, Rt)) | 0),
        (m = (m + Math.imul(mt, Kt)) | 0),
        (g = (g + Math.imul(K, Wt)) | 0),
        (a = (a + Math.imul(K, Xt)) | 0),
        (a = (a + Math.imul(H, Wt)) | 0),
        (m = (m + Math.imul(H, Xt)) | 0);
      var nt = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (nt >>> 26)) | 0),
        (nt &= 67108863),
        (g = Math.imul(te, Ct)),
        (a = Math.imul(te, Bt)),
        (a = (a + Math.imul(ee, Ct)) | 0),
        (m = Math.imul(ee, Bt)),
        (g = (g + Math.imul(Ot, Tt)) | 0),
        (a = (a + Math.imul(Ot, Lt)) | 0),
        (a = (a + Math.imul(Jt, Tt)) | 0),
        (m = (m + Math.imul(Jt, Lt)) | 0),
        (g = (g + Math.imul(pt, Rt)) | 0),
        (a = (a + Math.imul(pt, Kt)) | 0),
        (a = (a + Math.imul(Et, Rt)) | 0),
        (m = (m + Math.imul(Et, Kt)) | 0),
        (g = (g + Math.imul(st, Wt)) | 0),
        (a = (a + Math.imul(st, Xt)) | 0),
        (a = (a + Math.imul(mt, Wt)) | 0),
        (m = (m + Math.imul(mt, Xt)) | 0),
        (g = (g + Math.imul(K, Pt)) | 0),
        (a = (a + Math.imul(K, kt)) | 0),
        (a = (a + Math.imul(H, Pt)) | 0),
        (m = (m + Math.imul(H, kt)) | 0);
      var yt = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (yt >>> 26)) | 0),
        (yt &= 67108863),
        (g = Math.imul(Yt, Ct)),
        (a = Math.imul(Yt, Bt)),
        (a = (a + Math.imul(Nt, Ct)) | 0),
        (m = Math.imul(Nt, Bt)),
        (g = (g + Math.imul(te, Tt)) | 0),
        (a = (a + Math.imul(te, Lt)) | 0),
        (a = (a + Math.imul(ee, Tt)) | 0),
        (m = (m + Math.imul(ee, Lt)) | 0),
        (g = (g + Math.imul(Ot, Rt)) | 0),
        (a = (a + Math.imul(Ot, Kt)) | 0),
        (a = (a + Math.imul(Jt, Rt)) | 0),
        (m = (m + Math.imul(Jt, Kt)) | 0),
        (g = (g + Math.imul(pt, Wt)) | 0),
        (a = (a + Math.imul(pt, Xt)) | 0),
        (a = (a + Math.imul(Et, Wt)) | 0),
        (m = (m + Math.imul(Et, Xt)) | 0),
        (g = (g + Math.imul(st, Pt)) | 0),
        (a = (a + Math.imul(st, kt)) | 0),
        (a = (a + Math.imul(mt, Pt)) | 0),
        (m = (m + Math.imul(mt, kt)) | 0),
        (g = (g + Math.imul(K, qt)) | 0),
        (a = (a + Math.imul(K, jt)) | 0),
        (a = (a + Math.imul(H, qt)) | 0),
        (m = (m + Math.imul(H, jt)) | 0);
      var wt = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (wt >>> 26)) | 0),
        (wt &= 67108863),
        (g = Math.imul(Zt, Ct)),
        (a = Math.imul(Zt, Bt)),
        (a = (a + Math.imul(Ft, Ct)) | 0),
        (m = Math.imul(Ft, Bt)),
        (g = (g + Math.imul(Yt, Tt)) | 0),
        (a = (a + Math.imul(Yt, Lt)) | 0),
        (a = (a + Math.imul(Nt, Tt)) | 0),
        (m = (m + Math.imul(Nt, Lt)) | 0),
        (g = (g + Math.imul(te, Rt)) | 0),
        (a = (a + Math.imul(te, Kt)) | 0),
        (a = (a + Math.imul(ee, Rt)) | 0),
        (m = (m + Math.imul(ee, Kt)) | 0),
        (g = (g + Math.imul(Ot, Wt)) | 0),
        (a = (a + Math.imul(Ot, Xt)) | 0),
        (a = (a + Math.imul(Jt, Wt)) | 0),
        (m = (m + Math.imul(Jt, Xt)) | 0),
        (g = (g + Math.imul(pt, Pt)) | 0),
        (a = (a + Math.imul(pt, kt)) | 0),
        (a = (a + Math.imul(Et, Pt)) | 0),
        (m = (m + Math.imul(Et, kt)) | 0),
        (g = (g + Math.imul(st, qt)) | 0),
        (a = (a + Math.imul(st, jt)) | 0),
        (a = (a + Math.imul(mt, qt)) | 0),
        (m = (m + Math.imul(mt, jt)) | 0),
        (g = (g + Math.imul(K, vt)) | 0),
        (a = (a + Math.imul(K, Vt)) | 0),
        (a = (a + Math.imul(H, vt)) | 0),
        (m = (m + Math.imul(H, Vt)) | 0);
      var St = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (St >>> 26)) | 0),
        (St &= 67108863),
        (g = Math.imul(Ut, Ct)),
        (a = Math.imul(Ut, Bt)),
        (a = (a + Math.imul(Ht, Ct)) | 0),
        (m = Math.imul(Ht, Bt)),
        (g = (g + Math.imul(Zt, Tt)) | 0),
        (a = (a + Math.imul(Zt, Lt)) | 0),
        (a = (a + Math.imul(Ft, Tt)) | 0),
        (m = (m + Math.imul(Ft, Lt)) | 0),
        (g = (g + Math.imul(Yt, Rt)) | 0),
        (a = (a + Math.imul(Yt, Kt)) | 0),
        (a = (a + Math.imul(Nt, Rt)) | 0),
        (m = (m + Math.imul(Nt, Kt)) | 0),
        (g = (g + Math.imul(te, Wt)) | 0),
        (a = (a + Math.imul(te, Xt)) | 0),
        (a = (a + Math.imul(ee, Wt)) | 0),
        (m = (m + Math.imul(ee, Xt)) | 0),
        (g = (g + Math.imul(Ot, Pt)) | 0),
        (a = (a + Math.imul(Ot, kt)) | 0),
        (a = (a + Math.imul(Jt, Pt)) | 0),
        (m = (m + Math.imul(Jt, kt)) | 0),
        (g = (g + Math.imul(pt, qt)) | 0),
        (a = (a + Math.imul(pt, jt)) | 0),
        (a = (a + Math.imul(Et, qt)) | 0),
        (m = (m + Math.imul(Et, jt)) | 0),
        (g = (g + Math.imul(st, vt)) | 0),
        (a = (a + Math.imul(st, Vt)) | 0),
        (a = (a + Math.imul(mt, vt)) | 0),
        (m = (m + Math.imul(mt, Vt)) | 0),
        (g = (g + Math.imul(K, x)) | 0),
        (a = (a + Math.imul(K, b)) | 0),
        (a = (a + Math.imul(H, x)) | 0),
        (m = (m + Math.imul(H, b)) | 0);
      var _t = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (_t >>> 26)) | 0),
        (_t &= 67108863),
        (g = Math.imul(Gt, Ct)),
        (a = Math.imul(Gt, Bt)),
        (a = (a + Math.imul(Dt, Ct)) | 0),
        (m = Math.imul(Dt, Bt)),
        (g = (g + Math.imul(Ut, Tt)) | 0),
        (a = (a + Math.imul(Ut, Lt)) | 0),
        (a = (a + Math.imul(Ht, Tt)) | 0),
        (m = (m + Math.imul(Ht, Lt)) | 0),
        (g = (g + Math.imul(Zt, Rt)) | 0),
        (a = (a + Math.imul(Zt, Kt)) | 0),
        (a = (a + Math.imul(Ft, Rt)) | 0),
        (m = (m + Math.imul(Ft, Kt)) | 0),
        (g = (g + Math.imul(Yt, Wt)) | 0),
        (a = (a + Math.imul(Yt, Xt)) | 0),
        (a = (a + Math.imul(Nt, Wt)) | 0),
        (m = (m + Math.imul(Nt, Xt)) | 0),
        (g = (g + Math.imul(te, Pt)) | 0),
        (a = (a + Math.imul(te, kt)) | 0),
        (a = (a + Math.imul(ee, Pt)) | 0),
        (m = (m + Math.imul(ee, kt)) | 0),
        (g = (g + Math.imul(Ot, qt)) | 0),
        (a = (a + Math.imul(Ot, jt)) | 0),
        (a = (a + Math.imul(Jt, qt)) | 0),
        (m = (m + Math.imul(Jt, jt)) | 0),
        (g = (g + Math.imul(pt, vt)) | 0),
        (a = (a + Math.imul(pt, Vt)) | 0),
        (a = (a + Math.imul(Et, vt)) | 0),
        (m = (m + Math.imul(Et, Vt)) | 0),
        (g = (g + Math.imul(st, x)) | 0),
        (a = (a + Math.imul(st, b)) | 0),
        (a = (a + Math.imul(mt, x)) | 0),
        (m = (m + Math.imul(mt, b)) | 0),
        (g = (g + Math.imul(K, M)) | 0),
        (a = (a + Math.imul(K, k)) | 0),
        (a = (a + Math.imul(H, M)) | 0),
        (m = (m + Math.imul(H, k)) | 0);
      var bt = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (bt >>> 26)) | 0),
        (bt &= 67108863),
        (g = Math.imul(Qt, Ct)),
        (a = Math.imul(Qt, Bt)),
        (a = (a + Math.imul(zt, Ct)) | 0),
        (m = Math.imul(zt, Bt)),
        (g = (g + Math.imul(Gt, Tt)) | 0),
        (a = (a + Math.imul(Gt, Lt)) | 0),
        (a = (a + Math.imul(Dt, Tt)) | 0),
        (m = (m + Math.imul(Dt, Lt)) | 0),
        (g = (g + Math.imul(Ut, Rt)) | 0),
        (a = (a + Math.imul(Ut, Kt)) | 0),
        (a = (a + Math.imul(Ht, Rt)) | 0),
        (m = (m + Math.imul(Ht, Kt)) | 0),
        (g = (g + Math.imul(Zt, Wt)) | 0),
        (a = (a + Math.imul(Zt, Xt)) | 0),
        (a = (a + Math.imul(Ft, Wt)) | 0),
        (m = (m + Math.imul(Ft, Xt)) | 0),
        (g = (g + Math.imul(Yt, Pt)) | 0),
        (a = (a + Math.imul(Yt, kt)) | 0),
        (a = (a + Math.imul(Nt, Pt)) | 0),
        (m = (m + Math.imul(Nt, kt)) | 0),
        (g = (g + Math.imul(te, qt)) | 0),
        (a = (a + Math.imul(te, jt)) | 0),
        (a = (a + Math.imul(ee, qt)) | 0),
        (m = (m + Math.imul(ee, jt)) | 0),
        (g = (g + Math.imul(Ot, vt)) | 0),
        (a = (a + Math.imul(Ot, Vt)) | 0),
        (a = (a + Math.imul(Jt, vt)) | 0),
        (m = (m + Math.imul(Jt, Vt)) | 0),
        (g = (g + Math.imul(pt, x)) | 0),
        (a = (a + Math.imul(pt, b)) | 0),
        (a = (a + Math.imul(Et, x)) | 0),
        (m = (m + Math.imul(Et, b)) | 0),
        (g = (g + Math.imul(st, M)) | 0),
        (a = (a + Math.imul(st, k)) | 0),
        (a = (a + Math.imul(mt, M)) | 0),
        (m = (m + Math.imul(mt, k)) | 0),
        (g = (g + Math.imul(K, L)) | 0),
        (a = (a + Math.imul(K, D)) | 0),
        (a = (a + Math.imul(H, L)) | 0),
        (m = (m + Math.imul(H, D)) | 0);
      var Mt = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (Mt >>> 26)) | 0),
        (Mt &= 67108863),
        (g = Math.imul(Qt, Tt)),
        (a = Math.imul(Qt, Lt)),
        (a = (a + Math.imul(zt, Tt)) | 0),
        (m = Math.imul(zt, Lt)),
        (g = (g + Math.imul(Gt, Rt)) | 0),
        (a = (a + Math.imul(Gt, Kt)) | 0),
        (a = (a + Math.imul(Dt, Rt)) | 0),
        (m = (m + Math.imul(Dt, Kt)) | 0),
        (g = (g + Math.imul(Ut, Wt)) | 0),
        (a = (a + Math.imul(Ut, Xt)) | 0),
        (a = (a + Math.imul(Ht, Wt)) | 0),
        (m = (m + Math.imul(Ht, Xt)) | 0),
        (g = (g + Math.imul(Zt, Pt)) | 0),
        (a = (a + Math.imul(Zt, kt)) | 0),
        (a = (a + Math.imul(Ft, Pt)) | 0),
        (m = (m + Math.imul(Ft, kt)) | 0),
        (g = (g + Math.imul(Yt, qt)) | 0),
        (a = (a + Math.imul(Yt, jt)) | 0),
        (a = (a + Math.imul(Nt, qt)) | 0),
        (m = (m + Math.imul(Nt, jt)) | 0),
        (g = (g + Math.imul(te, vt)) | 0),
        (a = (a + Math.imul(te, Vt)) | 0),
        (a = (a + Math.imul(ee, vt)) | 0),
        (m = (m + Math.imul(ee, Vt)) | 0),
        (g = (g + Math.imul(Ot, x)) | 0),
        (a = (a + Math.imul(Ot, b)) | 0),
        (a = (a + Math.imul(Jt, x)) | 0),
        (m = (m + Math.imul(Jt, b)) | 0),
        (g = (g + Math.imul(pt, M)) | 0),
        (a = (a + Math.imul(pt, k)) | 0),
        (a = (a + Math.imul(Et, M)) | 0),
        (m = (m + Math.imul(Et, k)) | 0),
        (g = (g + Math.imul(st, L)) | 0),
        (a = (a + Math.imul(st, D)) | 0),
        (a = (a + Math.imul(mt, L)) | 0),
        (m = (m + Math.imul(mt, D)) | 0);
      var At = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (At >>> 26)) | 0),
        (At &= 67108863),
        (g = Math.imul(Qt, Rt)),
        (a = Math.imul(Qt, Kt)),
        (a = (a + Math.imul(zt, Rt)) | 0),
        (m = Math.imul(zt, Kt)),
        (g = (g + Math.imul(Gt, Wt)) | 0),
        (a = (a + Math.imul(Gt, Xt)) | 0),
        (a = (a + Math.imul(Dt, Wt)) | 0),
        (m = (m + Math.imul(Dt, Xt)) | 0),
        (g = (g + Math.imul(Ut, Pt)) | 0),
        (a = (a + Math.imul(Ut, kt)) | 0),
        (a = (a + Math.imul(Ht, Pt)) | 0),
        (m = (m + Math.imul(Ht, kt)) | 0),
        (g = (g + Math.imul(Zt, qt)) | 0),
        (a = (a + Math.imul(Zt, jt)) | 0),
        (a = (a + Math.imul(Ft, qt)) | 0),
        (m = (m + Math.imul(Ft, jt)) | 0),
        (g = (g + Math.imul(Yt, vt)) | 0),
        (a = (a + Math.imul(Yt, Vt)) | 0),
        (a = (a + Math.imul(Nt, vt)) | 0),
        (m = (m + Math.imul(Nt, Vt)) | 0),
        (g = (g + Math.imul(te, x)) | 0),
        (a = (a + Math.imul(te, b)) | 0),
        (a = (a + Math.imul(ee, x)) | 0),
        (m = (m + Math.imul(ee, b)) | 0),
        (g = (g + Math.imul(Ot, M)) | 0),
        (a = (a + Math.imul(Ot, k)) | 0),
        (a = (a + Math.imul(Jt, M)) | 0),
        (m = (m + Math.imul(Jt, k)) | 0),
        (g = (g + Math.imul(pt, L)) | 0),
        (a = (a + Math.imul(pt, D)) | 0),
        (a = (a + Math.imul(Et, L)) | 0),
        (m = (m + Math.imul(Et, D)) | 0);
      var ot = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (ot >>> 26)) | 0),
        (ot &= 67108863),
        (g = Math.imul(Qt, Wt)),
        (a = Math.imul(Qt, Xt)),
        (a = (a + Math.imul(zt, Wt)) | 0),
        (m = Math.imul(zt, Xt)),
        (g = (g + Math.imul(Gt, Pt)) | 0),
        (a = (a + Math.imul(Gt, kt)) | 0),
        (a = (a + Math.imul(Dt, Pt)) | 0),
        (m = (m + Math.imul(Dt, kt)) | 0),
        (g = (g + Math.imul(Ut, qt)) | 0),
        (a = (a + Math.imul(Ut, jt)) | 0),
        (a = (a + Math.imul(Ht, qt)) | 0),
        (m = (m + Math.imul(Ht, jt)) | 0),
        (g = (g + Math.imul(Zt, vt)) | 0),
        (a = (a + Math.imul(Zt, Vt)) | 0),
        (a = (a + Math.imul(Ft, vt)) | 0),
        (m = (m + Math.imul(Ft, Vt)) | 0),
        (g = (g + Math.imul(Yt, x)) | 0),
        (a = (a + Math.imul(Yt, b)) | 0),
        (a = (a + Math.imul(Nt, x)) | 0),
        (m = (m + Math.imul(Nt, b)) | 0),
        (g = (g + Math.imul(te, M)) | 0),
        (a = (a + Math.imul(te, k)) | 0),
        (a = (a + Math.imul(ee, M)) | 0),
        (m = (m + Math.imul(ee, k)) | 0),
        (g = (g + Math.imul(Ot, L)) | 0),
        (a = (a + Math.imul(Ot, D)) | 0),
        (a = (a + Math.imul(Jt, L)) | 0),
        (m = (m + Math.imul(Jt, D)) | 0);
      var dt = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (dt >>> 26)) | 0),
        (dt &= 67108863),
        (g = Math.imul(Qt, Pt)),
        (a = Math.imul(Qt, kt)),
        (a = (a + Math.imul(zt, Pt)) | 0),
        (m = Math.imul(zt, kt)),
        (g = (g + Math.imul(Gt, qt)) | 0),
        (a = (a + Math.imul(Gt, jt)) | 0),
        (a = (a + Math.imul(Dt, qt)) | 0),
        (m = (m + Math.imul(Dt, jt)) | 0),
        (g = (g + Math.imul(Ut, vt)) | 0),
        (a = (a + Math.imul(Ut, Vt)) | 0),
        (a = (a + Math.imul(Ht, vt)) | 0),
        (m = (m + Math.imul(Ht, Vt)) | 0),
        (g = (g + Math.imul(Zt, x)) | 0),
        (a = (a + Math.imul(Zt, b)) | 0),
        (a = (a + Math.imul(Ft, x)) | 0),
        (m = (m + Math.imul(Ft, b)) | 0),
        (g = (g + Math.imul(Yt, M)) | 0),
        (a = (a + Math.imul(Yt, k)) | 0),
        (a = (a + Math.imul(Nt, M)) | 0),
        (m = (m + Math.imul(Nt, k)) | 0),
        (g = (g + Math.imul(te, L)) | 0),
        (a = (a + Math.imul(te, D)) | 0),
        (a = (a + Math.imul(ee, L)) | 0),
        (m = (m + Math.imul(ee, D)) | 0);
      var rt = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (rt >>> 26)) | 0),
        (rt &= 67108863),
        (g = Math.imul(Qt, qt)),
        (a = Math.imul(Qt, jt)),
        (a = (a + Math.imul(zt, qt)) | 0),
        (m = Math.imul(zt, jt)),
        (g = (g + Math.imul(Gt, vt)) | 0),
        (a = (a + Math.imul(Gt, Vt)) | 0),
        (a = (a + Math.imul(Dt, vt)) | 0),
        (m = (m + Math.imul(Dt, Vt)) | 0),
        (g = (g + Math.imul(Ut, x)) | 0),
        (a = (a + Math.imul(Ut, b)) | 0),
        (a = (a + Math.imul(Ht, x)) | 0),
        (m = (m + Math.imul(Ht, b)) | 0),
        (g = (g + Math.imul(Zt, M)) | 0),
        (a = (a + Math.imul(Zt, k)) | 0),
        (a = (a + Math.imul(Ft, M)) | 0),
        (m = (m + Math.imul(Ft, k)) | 0),
        (g = (g + Math.imul(Yt, L)) | 0),
        (a = (a + Math.imul(Yt, D)) | 0),
        (a = (a + Math.imul(Nt, L)) | 0),
        (m = (m + Math.imul(Nt, D)) | 0);
      var ft = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (ft >>> 26)) | 0),
        (ft &= 67108863),
        (g = Math.imul(Qt, vt)),
        (a = Math.imul(Qt, Vt)),
        (a = (a + Math.imul(zt, vt)) | 0),
        (m = Math.imul(zt, Vt)),
        (g = (g + Math.imul(Gt, x)) | 0),
        (a = (a + Math.imul(Gt, b)) | 0),
        (a = (a + Math.imul(Dt, x)) | 0),
        (m = (m + Math.imul(Dt, b)) | 0),
        (g = (g + Math.imul(Ut, M)) | 0),
        (a = (a + Math.imul(Ut, k)) | 0),
        (a = (a + Math.imul(Ht, M)) | 0),
        (m = (m + Math.imul(Ht, k)) | 0),
        (g = (g + Math.imul(Zt, L)) | 0),
        (a = (a + Math.imul(Zt, D)) | 0),
        (a = (a + Math.imul(Ft, L)) | 0),
        (m = (m + Math.imul(Ft, D)) | 0);
      var ht = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (ht >>> 26)) | 0),
        (ht &= 67108863),
        (g = Math.imul(Qt, x)),
        (a = Math.imul(Qt, b)),
        (a = (a + Math.imul(zt, x)) | 0),
        (m = Math.imul(zt, b)),
        (g = (g + Math.imul(Gt, M)) | 0),
        (a = (a + Math.imul(Gt, k)) | 0),
        (a = (a + Math.imul(Dt, M)) | 0),
        (m = (m + Math.imul(Dt, k)) | 0),
        (g = (g + Math.imul(Ut, L)) | 0),
        (a = (a + Math.imul(Ut, D)) | 0),
        (a = (a + Math.imul(Ht, L)) | 0),
        (m = (m + Math.imul(Ht, D)) | 0);
      var it = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (it >>> 26)) | 0),
        (it &= 67108863),
        (g = Math.imul(Qt, M)),
        (a = Math.imul(Qt, k)),
        (a = (a + Math.imul(zt, M)) | 0),
        (m = Math.imul(zt, k)),
        (g = (g + Math.imul(Gt, L)) | 0),
        (a = (a + Math.imul(Gt, D)) | 0),
        (a = (a + Math.imul(Dt, L)) | 0),
        (m = (m + Math.imul(Dt, D)) | 0);
      var O = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (O >>> 26)) | 0),
        (O &= 67108863),
        (g = Math.imul(Qt, L)),
        (a = Math.imul(Qt, D)),
        (a = (a + Math.imul(zt, L)) | 0),
        (m = Math.imul(zt, D));
      var U = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      return (
        (_ = (((m + (a >>> 13)) | 0) + (U >>> 26)) | 0),
        (U &= 67108863),
        (A[0] = lt),
        (A[1] = et),
        (A[2] = ie),
        (A[3] = nt),
        (A[4] = yt),
        (A[5] = wt),
        (A[6] = St),
        (A[7] = _t),
        (A[8] = bt),
        (A[9] = Mt),
        (A[10] = At),
        (A[11] = ot),
        (A[12] = dt),
        (A[13] = rt),
        (A[14] = ft),
        (A[15] = ht),
        (A[16] = it),
        (A[17] = O),
        (A[18] = U),
        _ !== 0 && ((A[19] = _), h.length++),
        h
      );
    };
    Math.imul || (j = C);
    function ct(w, o, f) {
      (f.negative = o.negative ^ w.negative), (f.length = w.length + o.length);
      for (var h = 0, c = 0, p = 0; p < f.length - 1; p++) {
        var A = c;
        c = 0;
        for (
          var _ = h & 67108863, g = Math.min(p, o.length - 1), a = Math.max(0, p - w.length + 1);
          a <= g;
          a++
        ) {
          var m = p - a,
            q = w.words[m] | 0,
            K = o.words[a] | 0,
            H = q * K,
            G = H & 67108863;
          (A = (A + ((H / 67108864) | 0)) | 0),
            (G = (G + _) | 0),
            (_ = G & 67108863),
            (A = (A + (G >>> 26)) | 0),
            (c += A >>> 26),
            (A &= 67108863);
        }
        (f.words[p] = _), (h = A), (A = c);
      }
      return h !== 0 ? (f.words[p] = h) : f.length--, f.strip();
    }
    function W(w, o, f) {
      var h = new B();
      return h.mulp(w, o, f);
    }
    s.prototype.mulTo = function (o, f) {
      var h,
        c = this.length + o.length;
      return (
        this.length === 10 && o.length === 10
          ? (h = j(this, o, f))
          : c < 63
            ? (h = C(this, o, f))
            : c < 1024
              ? (h = ct(this, o, f))
              : (h = W(this, o, f)),
        h
      );
    };
    function B(w, o) {
      (this.x = w), (this.y = o);
    }
    (B.prototype.makeRBT = function (o) {
      for (var f = new Array(o), h = s.prototype._countBits(o) - 1, c = 0; c < o; c++)
        f[c] = this.revBin(c, h, o);
      return f;
    }),
      (B.prototype.revBin = function (o, f, h) {
        if (o === 0 || o === h - 1) return o;
        for (var c = 0, p = 0; p < f; p++) (c |= (o & 1) << (f - p - 1)), (o >>= 1);
        return c;
      }),
      (B.prototype.permute = function (o, f, h, c, p, A) {
        for (var _ = 0; _ < A; _++) (c[_] = f[o[_]]), (p[_] = h[o[_]]);
      }),
      (B.prototype.transform = function (o, f, h, c, p, A) {
        this.permute(A, o, f, h, c, p);
        for (var _ = 1; _ < p; _ <<= 1)
          for (
            var g = _ << 1, a = Math.cos((2 * Math.PI) / g), m = Math.sin((2 * Math.PI) / g), q = 0;
            q < p;
            q += g
          )
            for (var K = a, H = m, G = 0; G < _; G++) {
              var st = h[q + G],
                mt = c[q + G],
                Ne = h[q + G + _],
                pt = c[q + G + _],
                Et = K * Ne - H * pt;
              (pt = K * pt + H * Ne),
                (Ne = Et),
                (h[q + G] = st + Ne),
                (c[q + G] = mt + pt),
                (h[q + G + _] = st - Ne),
                (c[q + G + _] = mt - pt),
                G !== g && ((Et = a * K - m * H), (H = a * H + m * K), (K = Et));
            }
      }),
      (B.prototype.guessLen13b = function (o, f) {
        var h = Math.max(f, o) | 1,
          c = h & 1,
          p = 0;
        for (h = (h / 2) | 0; h; h = h >>> 1) p++;
        return 1 << (p + 1 + c);
      }),
      (B.prototype.conjugate = function (o, f, h) {
        if (!(h <= 1))
          for (var c = 0; c < h / 2; c++) {
            var p = o[c];
            (o[c] = o[h - c - 1]),
              (o[h - c - 1] = p),
              (p = f[c]),
              (f[c] = -f[h - c - 1]),
              (f[h - c - 1] = -p);
          }
      }),
      (B.prototype.normalize13b = function (o, f) {
        for (var h = 0, c = 0; c < f / 2; c++) {
          var p = Math.round(o[2 * c + 1] / f) * 8192 + Math.round(o[2 * c] / f) + h;
          (o[c] = p & 67108863), p < 67108864 ? (h = 0) : (h = (p / 67108864) | 0);
        }
        return o;
      }),
      (B.prototype.convert13b = function (o, f, h, c) {
        for (var p = 0, A = 0; A < f; A++)
          (p = p + (o[A] | 0)),
            (h[2 * A] = p & 8191),
            (p = p >>> 13),
            (h[2 * A + 1] = p & 8191),
            (p = p >>> 13);
        for (A = 2 * f; A < c; ++A) h[A] = 0;
        i(p === 0), i((p & -8192) === 0);
      }),
      (B.prototype.stub = function (o) {
        for (var f = new Array(o), h = 0; h < o; h++) f[h] = 0;
        return f;
      }),
      (B.prototype.mulp = function (o, f, h) {
        var c = 2 * this.guessLen13b(o.length, f.length),
          p = this.makeRBT(c),
          A = this.stub(c),
          _ = new Array(c),
          g = new Array(c),
          a = new Array(c),
          m = new Array(c),
          q = new Array(c),
          K = new Array(c),
          H = h.words;
        (H.length = c),
          this.convert13b(o.words, o.length, _, c),
          this.convert13b(f.words, f.length, m, c),
          this.transform(_, A, g, a, c, p),
          this.transform(m, A, q, K, c, p);
        for (var G = 0; G < c; G++) {
          var st = g[G] * q[G] - a[G] * K[G];
          (a[G] = g[G] * K[G] + a[G] * q[G]), (g[G] = st);
        }
        return (
          this.conjugate(g, a, c),
          this.transform(g, a, H, A, c, p),
          this.conjugate(H, A, c),
          this.normalize13b(H, c),
          (h.negative = o.negative ^ f.negative),
          (h.length = o.length + f.length),
          h.strip()
        );
      }),
      (s.prototype.mul = function (o) {
        var f = new s(null);
        return (f.words = new Array(this.length + o.length)), this.mulTo(o, f);
      }),
      (s.prototype.mulf = function (o) {
        var f = new s(null);
        return (f.words = new Array(this.length + o.length)), W(this, o, f);
      }),
      (s.prototype.imul = function (o) {
        return this.clone().mulTo(o, this);
      }),
      (s.prototype.imuln = function (o) {
        i(typeof o == 'number'), i(o < 67108864);
        for (var f = 0, h = 0; h < this.length; h++) {
          var c = (this.words[h] | 0) * o,
            p = (c & 67108863) + (f & 67108863);
          (f >>= 26), (f += (c / 67108864) | 0), (f += p >>> 26), (this.words[h] = p & 67108863);
        }
        return f !== 0 && ((this.words[h] = f), this.length++), this;
      }),
      (s.prototype.muln = function (o) {
        return this.clone().imuln(o);
      }),
      (s.prototype.sqr = function () {
        return this.mul(this);
      }),
      (s.prototype.isqr = function () {
        return this.imul(this.clone());
      }),
      (s.prototype.pow = function (o) {
        var f = R(o);
        if (f.length === 0) return new s(1);
        for (var h = this, c = 0; c < f.length && f[c] === 0; c++, h = h.sqr());
        if (++c < f.length)
          for (var p = h.sqr(); c < f.length; c++, p = p.sqr()) f[c] !== 0 && (h = h.mul(p));
        return h;
      }),
      (s.prototype.iushln = function (o) {
        i(typeof o == 'number' && o >= 0);
        var f = o % 26,
          h = (o - f) / 26,
          c = (67108863 >>> (26 - f)) << (26 - f),
          p;
        if (f !== 0) {
          var A = 0;
          for (p = 0; p < this.length; p++) {
            var _ = this.words[p] & c,
              g = ((this.words[p] | 0) - _) << f;
            (this.words[p] = g | A), (A = _ >>> (26 - f));
          }
          A && ((this.words[p] = A), this.length++);
        }
        if (h !== 0) {
          for (p = this.length - 1; p >= 0; p--) this.words[p + h] = this.words[p];
          for (p = 0; p < h; p++) this.words[p] = 0;
          this.length += h;
        }
        return this.strip();
      }),
      (s.prototype.ishln = function (o) {
        return i(this.negative === 0), this.iushln(o);
      }),
      (s.prototype.iushrn = function (o, f, h) {
        i(typeof o == 'number' && o >= 0);
        var c;
        f ? (c = (f - (f % 26)) / 26) : (c = 0);
        var p = o % 26,
          A = Math.min((o - p) / 26, this.length),
          _ = 67108863 ^ ((67108863 >>> p) << p),
          g = h;
        if (((c -= A), (c = Math.max(0, c)), g)) {
          for (var a = 0; a < A; a++) g.words[a] = this.words[a];
          g.length = A;
        }
        if (A !== 0)
          if (this.length > A)
            for (this.length -= A, a = 0; a < this.length; a++) this.words[a] = this.words[a + A];
          else (this.words[0] = 0), (this.length = 1);
        var m = 0;
        for (a = this.length - 1; a >= 0 && (m !== 0 || a >= c); a--) {
          var q = this.words[a] | 0;
          (this.words[a] = (m << (26 - p)) | (q >>> p)), (m = q & _);
        }
        return (
          g && m !== 0 && (g.words[g.length++] = m),
          this.length === 0 && ((this.words[0] = 0), (this.length = 1)),
          this.strip()
        );
      }),
      (s.prototype.ishrn = function (o, f, h) {
        return i(this.negative === 0), this.iushrn(o, f, h);
      }),
      (s.prototype.shln = function (o) {
        return this.clone().ishln(o);
      }),
      (s.prototype.ushln = function (o) {
        return this.clone().iushln(o);
      }),
      (s.prototype.shrn = function (o) {
        return this.clone().ishrn(o);
      }),
      (s.prototype.ushrn = function (o) {
        return this.clone().iushrn(o);
      }),
      (s.prototype.testn = function (o) {
        i(typeof o == 'number' && o >= 0);
        var f = o % 26,
          h = (o - f) / 26,
          c = 1 << f;
        if (this.length <= h) return !1;
        var p = this.words[h];
        return !!(p & c);
      }),
      (s.prototype.imaskn = function (o) {
        i(typeof o == 'number' && o >= 0);
        var f = o % 26,
          h = (o - f) / 26;
        if ((i(this.negative === 0, 'imaskn works only with positive numbers'), this.length <= h))
          return this;
        if ((f !== 0 && h++, (this.length = Math.min(h, this.length)), f !== 0)) {
          var c = 67108863 ^ ((67108863 >>> f) << f);
          this.words[this.length - 1] &= c;
        }
        return this.strip();
      }),
      (s.prototype.maskn = function (o) {
        return this.clone().imaskn(o);
      }),
      (s.prototype.iaddn = function (o) {
        return (
          i(typeof o == 'number'),
          i(o < 67108864),
          o < 0
            ? this.isubn(-o)
            : this.negative !== 0
              ? this.length === 1 && (this.words[0] | 0) < o
                ? ((this.words[0] = o - (this.words[0] | 0)), (this.negative = 0), this)
                : ((this.negative = 0), this.isubn(o), (this.negative = 1), this)
              : this._iaddn(o)
        );
      }),
      (s.prototype._iaddn = function (o) {
        this.words[0] += o;
        for (var f = 0; f < this.length && this.words[f] >= 67108864; f++)
          (this.words[f] -= 67108864),
            f === this.length - 1 ? (this.words[f + 1] = 1) : this.words[f + 1]++;
        return (this.length = Math.max(this.length, f + 1)), this;
      }),
      (s.prototype.isubn = function (o) {
        if ((i(typeof o == 'number'), i(o < 67108864), o < 0)) return this.iaddn(-o);
        if (this.negative !== 0)
          return (this.negative = 0), this.iaddn(o), (this.negative = 1), this;
        if (((this.words[0] -= o), this.length === 1 && this.words[0] < 0))
          (this.words[0] = -this.words[0]), (this.negative = 1);
        else
          for (var f = 0; f < this.length && this.words[f] < 0; f++)
            (this.words[f] += 67108864), (this.words[f + 1] -= 1);
        return this.strip();
      }),
      (s.prototype.addn = function (o) {
        return this.clone().iaddn(o);
      }),
      (s.prototype.subn = function (o) {
        return this.clone().isubn(o);
      }),
      (s.prototype.iabs = function () {
        return (this.negative = 0), this;
      }),
      (s.prototype.abs = function () {
        return this.clone().iabs();
      }),
      (s.prototype._ishlnsubmul = function (o, f, h) {
        var c = o.length + h,
          p;
        this._expand(c);
        var A,
          _ = 0;
        for (p = 0; p < o.length; p++) {
          A = (this.words[p + h] | 0) + _;
          var g = (o.words[p] | 0) * f;
          (A -= g & 67108863),
            (_ = (A >> 26) - ((g / 67108864) | 0)),
            (this.words[p + h] = A & 67108863);
        }
        for (; p < this.length - h; p++)
          (A = (this.words[p + h] | 0) + _), (_ = A >> 26), (this.words[p + h] = A & 67108863);
        if (_ === 0) return this.strip();
        for (i(_ === -1), _ = 0, p = 0; p < this.length; p++)
          (A = -(this.words[p] | 0) + _), (_ = A >> 26), (this.words[p] = A & 67108863);
        return (this.negative = 1), this.strip();
      }),
      (s.prototype._wordDiv = function (o, f) {
        var h = this.length - o.length,
          c = this.clone(),
          p = o,
          A = p.words[p.length - 1] | 0,
          _ = this._countBits(A);
        (h = 26 - _), h !== 0 && ((p = p.ushln(h)), c.iushln(h), (A = p.words[p.length - 1] | 0));
        var g = c.length - p.length,
          a;
        if (f !== 'mod') {
          (a = new s(null)), (a.length = g + 1), (a.words = new Array(a.length));
          for (var m = 0; m < a.length; m++) a.words[m] = 0;
        }
        var q = c.clone()._ishlnsubmul(p, 1, g);
        q.negative === 0 && ((c = q), a && (a.words[g] = 1));
        for (var K = g - 1; K >= 0; K--) {
          var H = (c.words[p.length + K] | 0) * 67108864 + (c.words[p.length + K - 1] | 0);
          for (H = Math.min((H / A) | 0, 67108863), c._ishlnsubmul(p, H, K); c.negative !== 0; )
            H--, (c.negative = 0), c._ishlnsubmul(p, 1, K), c.isZero() || (c.negative ^= 1);
          a && (a.words[K] = H);
        }
        return (
          a && a.strip(),
          c.strip(),
          f !== 'div' && h !== 0 && c.iushrn(h),
          { div: a || null, mod: c }
        );
      }),
      (s.prototype.divmod = function (o, f, h) {
        if ((i(!o.isZero()), this.isZero())) return { div: new s(0), mod: new s(0) };
        var c, p, A;
        return this.negative !== 0 && o.negative === 0
          ? ((A = this.neg().divmod(o, f)),
            f !== 'mod' && (c = A.div.neg()),
            f !== 'div' && ((p = A.mod.neg()), h && p.negative !== 0 && p.iadd(o)),
            { div: c, mod: p })
          : this.negative === 0 && o.negative !== 0
            ? ((A = this.divmod(o.neg(), f)),
              f !== 'mod' && (c = A.div.neg()),
              { div: c, mod: A.mod })
            : this.negative & o.negative
              ? ((A = this.neg().divmod(o.neg(), f)),
                f !== 'div' && ((p = A.mod.neg()), h && p.negative !== 0 && p.isub(o)),
                { div: A.div, mod: p })
              : o.length > this.length || this.cmp(o) < 0
                ? { div: new s(0), mod: this }
                : o.length === 1
                  ? f === 'div'
                    ? { div: this.divn(o.words[0]), mod: null }
                    : f === 'mod'
                      ? { div: null, mod: new s(this.modn(o.words[0])) }
                      : { div: this.divn(o.words[0]), mod: new s(this.modn(o.words[0])) }
                  : this._wordDiv(o, f);
      }),
      (s.prototype.div = function (o) {
        return this.divmod(o, 'div', !1).div;
      }),
      (s.prototype.mod = function (o) {
        return this.divmod(o, 'mod', !1).mod;
      }),
      (s.prototype.umod = function (o) {
        return this.divmod(o, 'mod', !0).mod;
      }),
      (s.prototype.divRound = function (o) {
        var f = this.divmod(o);
        if (f.mod.isZero()) return f.div;
        var h = f.div.negative !== 0 ? f.mod.isub(o) : f.mod,
          c = o.ushrn(1),
          p = o.andln(1),
          A = h.cmp(c);
        return A < 0 || (p === 1 && A === 0)
          ? f.div
          : f.div.negative !== 0
            ? f.div.isubn(1)
            : f.div.iaddn(1);
      }),
      (s.prototype.modn = function (o) {
        i(o <= 67108863);
        for (var f = (1 << 26) % o, h = 0, c = this.length - 1; c >= 0; c--)
          h = (f * h + (this.words[c] | 0)) % o;
        return h;
      }),
      (s.prototype.idivn = function (o) {
        i(o <= 67108863);
        for (var f = 0, h = this.length - 1; h >= 0; h--) {
          var c = (this.words[h] | 0) + f * 67108864;
          (this.words[h] = (c / o) | 0), (f = c % o);
        }
        return this.strip();
      }),
      (s.prototype.divn = function (o) {
        return this.clone().idivn(o);
      }),
      (s.prototype.egcd = function (o) {
        i(o.negative === 0), i(!o.isZero());
        var f = this,
          h = o.clone();
        f.negative !== 0 ? (f = f.umod(o)) : (f = f.clone());
        for (
          var c = new s(1), p = new s(0), A = new s(0), _ = new s(1), g = 0;
          f.isEven() && h.isEven();

        )
          f.iushrn(1), h.iushrn(1), ++g;
        for (var a = h.clone(), m = f.clone(); !f.isZero(); ) {
          for (var q = 0, K = 1; !(f.words[0] & K) && q < 26; ++q, K <<= 1);
          if (q > 0)
            for (f.iushrn(q); q-- > 0; )
              (c.isOdd() || p.isOdd()) && (c.iadd(a), p.isub(m)), c.iushrn(1), p.iushrn(1);
          for (var H = 0, G = 1; !(h.words[0] & G) && H < 26; ++H, G <<= 1);
          if (H > 0)
            for (h.iushrn(H); H-- > 0; )
              (A.isOdd() || _.isOdd()) && (A.iadd(a), _.isub(m)), A.iushrn(1), _.iushrn(1);
          f.cmp(h) >= 0 ? (f.isub(h), c.isub(A), p.isub(_)) : (h.isub(f), A.isub(c), _.isub(p));
        }
        return { a: A, b: _, gcd: h.iushln(g) };
      }),
      (s.prototype._invmp = function (o) {
        i(o.negative === 0), i(!o.isZero());
        var f = this,
          h = o.clone();
        f.negative !== 0 ? (f = f.umod(o)) : (f = f.clone());
        for (var c = new s(1), p = new s(0), A = h.clone(); f.cmpn(1) > 0 && h.cmpn(1) > 0; ) {
          for (var _ = 0, g = 1; !(f.words[0] & g) && _ < 26; ++_, g <<= 1);
          if (_ > 0) for (f.iushrn(_); _-- > 0; ) c.isOdd() && c.iadd(A), c.iushrn(1);
          for (var a = 0, m = 1; !(h.words[0] & m) && a < 26; ++a, m <<= 1);
          if (a > 0) for (h.iushrn(a); a-- > 0; ) p.isOdd() && p.iadd(A), p.iushrn(1);
          f.cmp(h) >= 0 ? (f.isub(h), c.isub(p)) : (h.isub(f), p.isub(c));
        }
        var q;
        return f.cmpn(1) === 0 ? (q = c) : (q = p), q.cmpn(0) < 0 && q.iadd(o), q;
      }),
      (s.prototype.gcd = function (o) {
        if (this.isZero()) return o.abs();
        if (o.isZero()) return this.abs();
        var f = this.clone(),
          h = o.clone();
        (f.negative = 0), (h.negative = 0);
        for (var c = 0; f.isEven() && h.isEven(); c++) f.iushrn(1), h.iushrn(1);
        do {
          for (; f.isEven(); ) f.iushrn(1);
          for (; h.isEven(); ) h.iushrn(1);
          var p = f.cmp(h);
          if (p < 0) {
            var A = f;
            (f = h), (h = A);
          } else if (p === 0 || h.cmpn(1) === 0) break;
          f.isub(h);
        } while (!0);
        return h.iushln(c);
      }),
      (s.prototype.invm = function (o) {
        return this.egcd(o).a.umod(o);
      }),
      (s.prototype.isEven = function () {
        return (this.words[0] & 1) === 0;
      }),
      (s.prototype.isOdd = function () {
        return (this.words[0] & 1) === 1;
      }),
      (s.prototype.andln = function (o) {
        return this.words[0] & o;
      }),
      (s.prototype.bincn = function (o) {
        i(typeof o == 'number');
        var f = o % 26,
          h = (o - f) / 26,
          c = 1 << f;
        if (this.length <= h) return this._expand(h + 1), (this.words[h] |= c), this;
        for (var p = c, A = h; p !== 0 && A < this.length; A++) {
          var _ = this.words[A] | 0;
          (_ += p), (p = _ >>> 26), (_ &= 67108863), (this.words[A] = _);
        }
        return p !== 0 && ((this.words[A] = p), this.length++), this;
      }),
      (s.prototype.isZero = function () {
        return this.length === 1 && this.words[0] === 0;
      }),
      (s.prototype.cmpn = function (o) {
        var f = o < 0;
        if (this.negative !== 0 && !f) return -1;
        if (this.negative === 0 && f) return 1;
        this.strip();
        var h;
        if (this.length > 1) h = 1;
        else {
          f && (o = -o), i(o <= 67108863, 'Number is too big');
          var c = this.words[0] | 0;
          h = c === o ? 0 : c < o ? -1 : 1;
        }
        return this.negative !== 0 ? -h | 0 : h;
      }),
      (s.prototype.cmp = function (o) {
        if (this.negative !== 0 && o.negative === 0) return -1;
        if (this.negative === 0 && o.negative !== 0) return 1;
        var f = this.ucmp(o);
        return this.negative !== 0 ? -f | 0 : f;
      }),
      (s.prototype.ucmp = function (o) {
        if (this.length > o.length) return 1;
        if (this.length < o.length) return -1;
        for (var f = 0, h = this.length - 1; h >= 0; h--) {
          var c = this.words[h] | 0,
            p = o.words[h] | 0;
          if (c !== p) {
            c < p ? (f = -1) : c > p && (f = 1);
            break;
          }
        }
        return f;
      }),
      (s.prototype.gtn = function (o) {
        return this.cmpn(o) === 1;
      }),
      (s.prototype.gt = function (o) {
        return this.cmp(o) === 1;
      }),
      (s.prototype.gten = function (o) {
        return this.cmpn(o) >= 0;
      }),
      (s.prototype.gte = function (o) {
        return this.cmp(o) >= 0;
      }),
      (s.prototype.ltn = function (o) {
        return this.cmpn(o) === -1;
      }),
      (s.prototype.lt = function (o) {
        return this.cmp(o) === -1;
      }),
      (s.prototype.lten = function (o) {
        return this.cmpn(o) <= 0;
      }),
      (s.prototype.lte = function (o) {
        return this.cmp(o) <= 0;
      }),
      (s.prototype.eqn = function (o) {
        return this.cmpn(o) === 0;
      }),
      (s.prototype.eq = function (o) {
        return this.cmp(o) === 0;
      }),
      (s.red = function (o) {
        return new at(o);
      }),
      (s.prototype.toRed = function (o) {
        return (
          i(!this.red, 'Already a number in reduction context'),
          i(this.negative === 0, 'red works only with positives'),
          o.convertTo(this)._forceRed(o)
        );
      }),
      (s.prototype.fromRed = function () {
        return (
          i(this.red, 'fromRed works only with numbers in reduction context'),
          this.red.convertFrom(this)
        );
      }),
      (s.prototype._forceRed = function (o) {
        return (this.red = o), this;
      }),
      (s.prototype.forceRed = function (o) {
        return i(!this.red, 'Already a number in reduction context'), this._forceRed(o);
      }),
      (s.prototype.redAdd = function (o) {
        return i(this.red, 'redAdd works only with red numbers'), this.red.add(this, o);
      }),
      (s.prototype.redIAdd = function (o) {
        return i(this.red, 'redIAdd works only with red numbers'), this.red.iadd(this, o);
      }),
      (s.prototype.redSub = function (o) {
        return i(this.red, 'redSub works only with red numbers'), this.red.sub(this, o);
      }),
      (s.prototype.redISub = function (o) {
        return i(this.red, 'redISub works only with red numbers'), this.red.isub(this, o);
      }),
      (s.prototype.redShl = function (o) {
        return i(this.red, 'redShl works only with red numbers'), this.red.shl(this, o);
      }),
      (s.prototype.redMul = function (o) {
        return (
          i(this.red, 'redMul works only with red numbers'),
          this.red._verify2(this, o),
          this.red.mul(this, o)
        );
      }),
      (s.prototype.redIMul = function (o) {
        return (
          i(this.red, 'redMul works only with red numbers'),
          this.red._verify2(this, o),
          this.red.imul(this, o)
        );
      }),
      (s.prototype.redSqr = function () {
        return (
          i(this.red, 'redSqr works only with red numbers'),
          this.red._verify1(this),
          this.red.sqr(this)
        );
      }),
      (s.prototype.redISqr = function () {
        return (
          i(this.red, 'redISqr works only with red numbers'),
          this.red._verify1(this),
          this.red.isqr(this)
        );
      }),
      (s.prototype.redSqrt = function () {
        return (
          i(this.red, 'redSqrt works only with red numbers'),
          this.red._verify1(this),
          this.red.sqrt(this)
        );
      }),
      (s.prototype.redInvm = function () {
        return (
          i(this.red, 'redInvm works only with red numbers'),
          this.red._verify1(this),
          this.red.invm(this)
        );
      }),
      (s.prototype.redNeg = function () {
        return (
          i(this.red, 'redNeg works only with red numbers'),
          this.red._verify1(this),
          this.red.neg(this)
        );
      }),
      (s.prototype.redPow = function (o) {
        return (
          i(this.red && !o.red, 'redPow(normalNum)'), this.red._verify1(this), this.red.pow(this, o)
        );
      });
    var Z = { k256: null, p224: null, p192: null, p25519: null };
    function Y(w, o) {
      (this.name = w),
        (this.p = new s(o, 16)),
        (this.n = this.p.bitLength()),
        (this.k = new s(1).iushln(this.n).isub(this.p)),
        (this.tmp = this._tmp());
    }
    (Y.prototype._tmp = function () {
      var o = new s(null);
      return (o.words = new Array(Math.ceil(this.n / 13))), o;
    }),
      (Y.prototype.ireduce = function (o) {
        var f = o,
          h;
        do
          this.split(f, this.tmp), (f = this.imulK(f)), (f = f.iadd(this.tmp)), (h = f.bitLength());
        while (h > this.n);
        var c = h < this.n ? -1 : f.ucmp(this.p);
        return (
          c === 0
            ? ((f.words[0] = 0), (f.length = 1))
            : c > 0
              ? f.isub(this.p)
              : f.strip !== void 0
                ? f.strip()
                : f._strip(),
          f
        );
      }),
      (Y.prototype.split = function (o, f) {
        o.iushrn(this.n, 0, f);
      }),
      (Y.prototype.imulK = function (o) {
        return o.imul(this.k);
      });
    function tt() {
      Y.call(
        this,
        'k256',
        'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f'
      );
    }
    n(tt, Y),
      (tt.prototype.split = function (o, f) {
        for (var h = 4194303, c = Math.min(o.length, 9), p = 0; p < c; p++) f.words[p] = o.words[p];
        if (((f.length = c), o.length <= 9)) {
          (o.words[0] = 0), (o.length = 1);
          return;
        }
        var A = o.words[9];
        for (f.words[f.length++] = A & h, p = 10; p < o.length; p++) {
          var _ = o.words[p] | 0;
          (o.words[p - 10] = ((_ & h) << 4) | (A >>> 22)), (A = _);
        }
        (A >>>= 22),
          (o.words[p - 10] = A),
          A === 0 && o.length > 10 ? (o.length -= 10) : (o.length -= 9);
      }),
      (tt.prototype.imulK = function (o) {
        (o.words[o.length] = 0), (o.words[o.length + 1] = 0), (o.length += 2);
        for (var f = 0, h = 0; h < o.length; h++) {
          var c = o.words[h] | 0;
          (f += c * 977), (o.words[h] = f & 67108863), (f = c * 64 + ((f / 67108864) | 0));
        }
        return (
          o.words[o.length - 1] === 0 && (o.length--, o.words[o.length - 1] === 0 && o.length--), o
        );
      });
    function xt() {
      Y.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
    }
    n(xt, Y);
    function se() {
      Y.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
    }
    n(se, Y);
    function de() {
      Y.call(this, '25519', '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
    }
    n(de, Y),
      (de.prototype.imulK = function (o) {
        for (var f = 0, h = 0; h < o.length; h++) {
          var c = (o.words[h] | 0) * 19 + f,
            p = c & 67108863;
          (c >>>= 26), (o.words[h] = p), (f = c);
        }
        return f !== 0 && (o.words[o.length++] = f), o;
      }),
      (s._prime = function (o) {
        if (Z[o]) return Z[o];
        var f;
        if (o === 'k256') f = new tt();
        else if (o === 'p224') f = new xt();
        else if (o === 'p192') f = new se();
        else if (o === 'p25519') f = new de();
        else throw new Error('Unknown prime ' + o);
        return (Z[o] = f), f;
      });
    function at(w) {
      if (typeof w == 'string') {
        var o = s._prime(w);
        (this.m = o.p), (this.prime = o);
      } else i(w.gtn(1), 'modulus must be greater than 1'), (this.m = w), (this.prime = null);
    }
    (at.prototype._verify1 = function (o) {
      i(o.negative === 0, 'red works only with positives'),
        i(o.red, 'red works only with red numbers');
    }),
      (at.prototype._verify2 = function (o, f) {
        i((o.negative | f.negative) === 0, 'red works only with positives'),
          i(o.red && o.red === f.red, 'red works only with red numbers');
      }),
      (at.prototype.imod = function (o) {
        return this.prime ? this.prime.ireduce(o)._forceRed(this) : o.umod(this.m)._forceRed(this);
      }),
      (at.prototype.neg = function (o) {
        return o.isZero() ? o.clone() : this.m.sub(o)._forceRed(this);
      }),
      (at.prototype.add = function (o, f) {
        this._verify2(o, f);
        var h = o.add(f);
        return h.cmp(this.m) >= 0 && h.isub(this.m), h._forceRed(this);
      }),
      (at.prototype.iadd = function (o, f) {
        this._verify2(o, f);
        var h = o.iadd(f);
        return h.cmp(this.m) >= 0 && h.isub(this.m), h;
      }),
      (at.prototype.sub = function (o, f) {
        this._verify2(o, f);
        var h = o.sub(f);
        return h.cmpn(0) < 0 && h.iadd(this.m), h._forceRed(this);
      }),
      (at.prototype.isub = function (o, f) {
        this._verify2(o, f);
        var h = o.isub(f);
        return h.cmpn(0) < 0 && h.iadd(this.m), h;
      }),
      (at.prototype.shl = function (o, f) {
        return this._verify1(o), this.imod(o.ushln(f));
      }),
      (at.prototype.imul = function (o, f) {
        return this._verify2(o, f), this.imod(o.imul(f));
      }),
      (at.prototype.mul = function (o, f) {
        return this._verify2(o, f), this.imod(o.mul(f));
      }),
      (at.prototype.isqr = function (o) {
        return this.imul(o, o.clone());
      }),
      (at.prototype.sqr = function (o) {
        return this.mul(o, o);
      }),
      (at.prototype.sqrt = function (o) {
        if (o.isZero()) return o.clone();
        var f = this.m.andln(3);
        if ((i(f % 2 === 1), f === 3)) {
          var h = this.m.add(new s(1)).iushrn(2);
          return this.pow(o, h);
        }
        for (var c = this.m.subn(1), p = 0; !c.isZero() && c.andln(1) === 0; ) p++, c.iushrn(1);
        i(!c.isZero());
        var A = new s(1).toRed(this),
          _ = A.redNeg(),
          g = this.m.subn(1).iushrn(1),
          a = this.m.bitLength();
        for (a = new s(2 * a * a).toRed(this); this.pow(a, g).cmp(_) !== 0; ) a.redIAdd(_);
        for (
          var m = this.pow(a, c), q = this.pow(o, c.addn(1).iushrn(1)), K = this.pow(o, c), H = p;
          K.cmp(A) !== 0;

        ) {
          for (var G = K, st = 0; G.cmp(A) !== 0; st++) G = G.redSqr();
          i(st < H);
          var mt = this.pow(m, new s(1).iushln(H - st - 1));
          (q = q.redMul(mt)), (m = mt.redSqr()), (K = K.redMul(m)), (H = st);
        }
        return q;
      }),
      (at.prototype.invm = function (o) {
        var f = o._invmp(this.m);
        return f.negative !== 0 ? ((f.negative = 0), this.imod(f).redNeg()) : this.imod(f);
      }),
      (at.prototype.pow = function (o, f) {
        if (f.isZero()) return new s(1).toRed(this);
        if (f.cmpn(1) === 0) return o.clone();
        var h = 4,
          c = new Array(1 << h);
        (c[0] = new s(1).toRed(this)), (c[1] = o);
        for (var p = 2; p < c.length; p++) c[p] = this.mul(c[p - 1], o);
        var A = c[0],
          _ = 0,
          g = 0,
          a = f.bitLength() % 26;
        for (a === 0 && (a = 26), p = f.length - 1; p >= 0; p--) {
          for (var m = f.words[p], q = a - 1; q >= 0; q--) {
            var K = (m >> q) & 1;
            if ((A !== c[0] && (A = this.sqr(A)), K === 0 && _ === 0)) {
              g = 0;
              continue;
            }
            (_ <<= 1),
              (_ |= K),
              g++,
              !(g !== h && (p !== 0 || q !== 0)) && ((A = this.mul(A, c[_])), (g = 0), (_ = 0));
          }
          a = 26;
        }
        return A;
      }),
      (at.prototype.convertTo = function (o) {
        var f = o.umod(this.m);
        return f === o ? f.clone() : f;
      }),
      (at.prototype.convertFrom = function (o) {
        var f = o.clone();
        return (f.red = null), f;
      }),
      (s.mont = function (o) {
        return new be(o);
      });
    function be(w) {
      at.call(this, w),
        (this.shift = this.m.bitLength()),
        this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
        (this.r = new s(1).iushln(this.shift)),
        (this.r2 = this.imod(this.r.sqr())),
        (this.rinv = this.r._invmp(this.m)),
        (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
        (this.minv = this.minv.umod(this.r)),
        (this.minv = this.r.sub(this.minv));
    }
    n(be, at),
      (be.prototype.convertTo = function (o) {
        return this.imod(o.ushln(this.shift));
      }),
      (be.prototype.convertFrom = function (o) {
        var f = this.imod(o.mul(this.rinv));
        return (f.red = null), f;
      }),
      (be.prototype.imul = function (o, f) {
        if (o.isZero() || f.isZero()) return (o.words[0] = 0), (o.length = 1), o;
        var h = o.imul(f),
          c = h.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          p = h.isub(c).iushrn(this.shift),
          A = p;
        return (
          p.cmp(this.m) >= 0 ? (A = p.isub(this.m)) : p.cmpn(0) < 0 && (A = p.iadd(this.m)),
          A._forceRed(this)
        );
      }),
      (be.prototype.mul = function (o, f) {
        if (o.isZero() || f.isZero()) return new s(0)._forceRed(this);
        var h = o.mul(f),
          c = h.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          p = h.isub(c).iushrn(this.shift),
          A = p;
        return (
          p.cmp(this.m) >= 0 ? (A = p.isub(this.m)) : p.cmpn(0) < 0 && (A = p.iadd(this.m)),
          A._forceRed(this)
        );
      }),
      (be.prototype.invm = function (o) {
        var f = this.imod(o._invmp(this.m).mul(this.r2));
        return f._forceRed(this);
      });
  })(r, Te);
})(Us);
var Ch = Us.exports;
const Xr = fn,
  ar = Ch;
var Pe = function () {};
function Jn(r) {
  return r.startsWith('int[')
    ? 'int256' + r.slice(3)
    : r === 'int'
      ? 'int256'
      : r.startsWith('uint[')
        ? 'uint256' + r.slice(4)
        : r === 'uint'
          ? 'uint256'
          : r.startsWith('fixed[')
            ? 'fixed128x128' + r.slice(5)
            : r === 'fixed'
              ? 'fixed128x128'
              : r.startsWith('ufixed[')
                ? 'ufixed128x128' + r.slice(6)
                : r === 'ufixed'
                  ? 'ufixed128x128'
                  : r;
}
Pe.eventID = function (r, t) {
  var e = r + '(' + t.map(Jn).join(',') + ')';
  return Xr.keccak256(F.from(e));
};
Pe.methodID = function (r, t) {
  return Pe.eventID(r, t).slice(0, 4);
};
function ci(r) {
  return parseInt(/^\D+(\d+)$/.exec(r)[1], 10);
}
function vs(r) {
  var t = /^\D+(\d+)x(\d+)$/.exec(r);
  return [parseInt(t[1], 10), parseInt(t[2], 10)];
}
function hn(r) {
  var t = r.match(/(.*)\[(.*?)\]$/);
  return t ? (t[2] === '' ? 'dynamic' : parseInt(t[2], 10)) : null;
}
function vi(r) {
  var t = typeof r;
  if (t === 'string') return Xr.isHexPrefixed(r) ? new ar(Xr.stripHexPrefix(r), 16) : new ar(r, 10);
  if (t === 'number') return new ar(r);
  if (r.toArray) return r;
  throw new Error('Argument is not a number');
}
function Ia(r) {
  var t = /^(\w+)\((.*)\)$/.exec(r);
  if (t.length !== 3) throw new Error('Invalid method signature');
  var e = /^(.+)\):\((.+)$/.exec(t[2]);
  if (e !== null && e.length === 3)
    return { method: t[1], args: e[1].split(','), retargs: e[2].split(',') };
  var i = t[2].split(',');
  return i.length === 1 && i[0] === '' && (i = []), { method: t[1], args: i };
}
function Kr(r, t) {
  var e, i, n, s;
  if (r === 'address') return Kr('uint160', vi(t));
  if (r === 'bool') return Kr('uint8', t ? 1 : 0);
  if (r === 'string') return Kr('bytes', F.from(t, 'utf8'));
  if (Wi(r)) {
    if (typeof t.length > 'u') throw new Error('Not an array?');
    if (((e = hn(r)), e !== 'dynamic' && e !== 0 && t.length > e))
      throw new Error('Elements exceed array size: ' + e);
    (n = []), (r = r.slice(0, r.lastIndexOf('['))), typeof t == 'string' && (t = JSON.parse(t));
    for (s in t) n.push(Kr(r, t[s]));
    if (e === 'dynamic') {
      var u = Kr('uint256', t.length);
      n.unshift(u);
    }
    return F.concat(n);
  } else {
    if (r === 'bytes')
      return (
        (t = F.from(t)),
        (n = F.concat([Kr('uint256', t.length), t])),
        t.length % 32 !== 0 && (n = F.concat([n, Xr.zeros(32 - (t.length % 32))])),
        n
      );
    if (r.startsWith('bytes')) {
      if (((e = ci(r)), e < 1 || e > 32)) throw new Error('Invalid bytes<N> width: ' + e);
      return Xr.setLengthRight(t, 32);
    } else if (r.startsWith('uint')) {
      if (((e = ci(r)), e % 8 || e < 8 || e > 256)) throw new Error('Invalid uint<N> width: ' + e);
      if (((i = vi(t)), i.bitLength() > e))
        throw new Error('Supplied uint exceeds width: ' + e + ' vs ' + i.bitLength());
      if (i < 0) throw new Error('Supplied uint is negative');
      return i.toArrayLike(F, 'be', 32);
    } else if (r.startsWith('int')) {
      if (((e = ci(r)), e % 8 || e < 8 || e > 256)) throw new Error('Invalid int<N> width: ' + e);
      if (((i = vi(t)), i.bitLength() > e))
        throw new Error('Supplied int exceeds width: ' + e + ' vs ' + i.bitLength());
      return i.toTwos(256).toArrayLike(F, 'be', 32);
    } else if (r.startsWith('ufixed')) {
      if (((e = vs(r)), (i = vi(t)), i < 0)) throw new Error('Supplied ufixed is negative');
      return Kr('uint256', i.mul(new ar(2).pow(new ar(e[1]))));
    } else if (r.startsWith('fixed'))
      return (e = vs(r)), Kr('int256', vi(t).mul(new ar(2).pow(new ar(e[1]))));
  }
  throw new Error('Unsupported or invalid type: ' + r);
}
function Lr(r, t, e) {
  typeof r == 'string' && (r = Ds(r));
  var i, n, s, u;
  if (r.name === 'address') return Lr(r.rawType, t, e).toArrayLike(F, 'be', 20).toString('hex');
  if (r.name === 'bool') return Lr(r.rawType, t, e).toString() === new ar(1).toString();
  if (r.name === 'string') {
    var d = Lr(r.rawType, t, e);
    return F.from(d, 'utf8').toString();
  } else if (r.isArray) {
    for (
      s = [],
        i = r.size,
        r.size === 'dynamic' &&
          ((e = Lr('uint256', t, e).toNumber()),
          (i = Lr('uint256', t, e).toNumber()),
          (e = e + 32)),
        u = 0;
      u < i;
      u++
    ) {
      var v = Lr(r.subArray, t, e);
      s.push(v), (e += r.subArray.memoryUsage);
    }
    return s;
  } else {
    if (r.name === 'bytes')
      return (
        (e = Lr('uint256', t, e).toNumber()),
        (i = Lr('uint256', t, e).toNumber()),
        t.slice(e + 32, e + 32 + i)
      );
    if (r.name.startsWith('bytes')) return t.slice(e, e + r.size);
    if (r.name.startsWith('uint')) {
      if (((n = new ar(t.slice(e, e + 32), 16, 'be')), n.bitLength() > r.size))
        throw new Error('Decoded int exceeds width: ' + r.size + ' vs ' + n.bitLength());
      return n;
    } else if (r.name.startsWith('int')) {
      if (((n = new ar(t.slice(e, e + 32), 16, 'be').fromTwos(256)), n.bitLength() > r.size))
        throw new Error('Decoded uint exceeds width: ' + r.size + ' vs ' + n.bitLength());
      return n;
    } else if (r.name.startsWith('ufixed')) {
      if (((i = new ar(2).pow(new ar(r.size[1]))), (n = Lr('uint256', t, e)), !n.mod(i).isZero()))
        throw new Error('Decimals not supported yet');
      return n.div(i);
    } else if (r.name.startsWith('fixed')) {
      if (((i = new ar(2).pow(new ar(r.size[1]))), (n = Lr('int256', t, e)), !n.mod(i).isZero()))
        throw new Error('Decimals not supported yet');
      return n.div(i);
    }
  }
  throw new Error('Unsupported or invalid type: ' + r.name);
}
function Ds(r) {
  var t, e;
  if (Wi(r)) {
    t = hn(r);
    var i = r.slice(0, r.lastIndexOf('['));
    return (
      (i = Ds(i)),
      (e = {
        isArray: !0,
        name: r,
        size: t,
        memoryUsage: t === 'dynamic' ? 32 : i.memoryUsage * t,
        subArray: i,
      }),
      e
    );
  } else {
    var n;
    switch (r) {
      case 'address':
        n = 'uint160';
        break;
      case 'bool':
        n = 'uint8';
        break;
      case 'string':
        n = 'bytes';
        break;
    }
    if (
      ((e = { rawType: n, name: r, memoryUsage: 32 }),
      (r.startsWith('bytes') && r !== 'bytes') || r.startsWith('uint') || r.startsWith('int')
        ? (e.size = ci(r))
        : (r.startsWith('ufixed') || r.startsWith('fixed')) && (e.size = vs(r)),
      r.startsWith('bytes') && r !== 'bytes' && (e.size < 1 || e.size > 32))
    )
      throw new Error('Invalid bytes<N> width: ' + e.size);
    if ((r.startsWith('uint') || r.startsWith('int')) && (e.size % 8 || e.size < 8 || e.size > 256))
      throw new Error('Invalid int/uint<N> width: ' + e.size);
    return e;
  }
}
function Lh(r) {
  return r === 'string' || r === 'bytes' || hn(r) === 'dynamic';
}
function Wi(r) {
  return r.lastIndexOf(']') === r.length - 1;
}
Pe.rawEncode = function (r, t) {
  var e = [],
    i = [],
    n = 0;
  r.forEach(function (E) {
    if (Wi(E)) {
      var S = hn(E);
      S !== 'dynamic' ? (n += 32 * S) : (n += 32);
    } else n += 32;
  });
  for (var s = 0; s < r.length; s++) {
    var u = Jn(r[s]),
      d = t[s],
      v = Kr(u, d);
    Lh(u) ? (e.push(Kr('uint256', n)), i.push(v), (n += v.length)) : e.push(v);
  }
  return F.concat(e.concat(i));
};
Pe.rawDecode = function (r, t) {
  var e = [];
  t = F.from(t);
  for (var i = 0, n = 0; n < r.length; n++) {
    var s = Jn(r[n]),
      u = Ds(s),
      d = Lr(u, t, i);
    (i += u.memoryUsage), e.push(d);
  }
  return e;
};
Pe.simpleEncode = function (r) {
  var t = Array.prototype.slice.call(arguments).slice(1),
    e = Ia(r);
  if (t.length !== e.args.length) throw new Error('Argument count mismatch');
  return F.concat([Pe.methodID(e.method, e.args), Pe.rawEncode(e.args, t)]);
};
Pe.simpleDecode = function (r, t) {
  var e = Ia(r);
  if (!e.retargs) throw new Error('No return values in method');
  return Pe.rawDecode(e.retargs, t);
};
function uo(r, t) {
  return r.startsWith('address') || r.startsWith('bytes') ? '0x' + t.toString('hex') : t.toString();
}
Pe.stringify = function (r, t) {
  var e = [];
  for (var i in r) {
    var n = r[i],
      s = t[i];
    /^[^\[]+\[.*\]$/.test(n)
      ? (s = s
          .map(function (u) {
            return uo(n, u);
          })
          .join(', '))
      : (s = uo(n, s)),
      e.push(s);
  }
  return e;
};
Pe.solidityHexValue = function (r, t, e) {
  var i, n;
  if (Wi(r)) {
    var s = r.replace(/\[.*?\]/, '');
    if (!Wi(s)) {
      var u = hn(r);
      if (u !== 'dynamic' && u !== 0 && t.length > u)
        throw new Error('Elements exceed array size: ' + u);
    }
    var d = t.map(function (S) {
      return Pe.solidityHexValue(s, S, 256);
    });
    return F.concat(d);
  } else {
    if (r === 'bytes') return t;
    if (r === 'string') return F.from(t, 'utf8');
    if (r === 'bool') {
      e = e || 8;
      var v = Array(e / 4).join('0');
      return F.from(t ? v + '1' : v + '0', 'hex');
    } else if (r === 'address') {
      var E = 20;
      return e && (E = e / 8), Xr.setLengthLeft(t, E);
    } else if (r.startsWith('bytes')) {
      if (((i = ci(r)), i < 1 || i > 32)) throw new Error('Invalid bytes<N> width: ' + i);
      return Xr.setLengthRight(t, i);
    } else if (r.startsWith('uint')) {
      if (((i = ci(r)), i % 8 || i < 8 || i > 256)) throw new Error('Invalid uint<N> width: ' + i);
      if (((n = vi(t)), n.bitLength() > i))
        throw new Error('Supplied uint exceeds width: ' + i + ' vs ' + n.bitLength());
      return (e = e || i), n.toArrayLike(F, 'be', e / 8);
    } else if (r.startsWith('int')) {
      if (((i = ci(r)), i % 8 || i < 8 || i > 256)) throw new Error('Invalid int<N> width: ' + i);
      if (((n = vi(t)), n.bitLength() > i))
        throw new Error('Supplied int exceeds width: ' + i + ' vs ' + n.bitLength());
      return (e = e || i), n.toTwos(i).toArrayLike(F, 'be', e / 8);
    } else throw new Error('Unsupported or invalid type: ' + r);
  }
};
Pe.solidityPack = function (r, t) {
  if (r.length !== t.length) throw new Error('Number of types are not matching the values');
  for (var e = [], i = 0; i < r.length; i++) {
    var n = Jn(r[i]),
      s = t[i];
    e.push(Pe.solidityHexValue(n, s, null));
  }
  return F.concat(e);
};
Pe.soliditySHA3 = function (r, t) {
  return Xr.keccak256(Pe.solidityPack(r, t));
};
Pe.soliditySHA256 = function (r, t) {
  return Xr.sha256(Pe.solidityPack(r, t));
};
Pe.solidityRIPEMD160 = function (r, t) {
  return Xr.ripemd160(Pe.solidityPack(r, t), !0);
};
function Oh(r) {
  return r >= '0' && r <= '9';
}
Pe.fromSerpent = function (r) {
  for (var t = [], e = 0; e < r.length; e++) {
    var i = r[e];
    if (i === 's') t.push('bytes');
    else if (i === 'b') {
      for (var n = 'bytes', s = e + 1; s < r.length && Oh(r[s]); ) (n += r[s] - '0'), s++;
      (e = s - 1), t.push(n);
    } else if (i === 'i') t.push('int256');
    else if (i === 'a') t.push('int256[]');
    else throw new Error('Unsupported or invalid type: ' + i);
  }
  return t;
};
Pe.toSerpent = function (r) {
  for (var t = [], e = 0; e < r.length; e++) {
    var i = r[e];
    if (i === 'bytes') t.push('s');
    else if (i.startsWith('bytes')) t.push('b' + ci(i));
    else if (i === 'int256') t.push('i');
    else if (i === 'int256[]') t.push('a');
    else throw new Error('Unsupported or invalid type: ' + i);
  }
  return t.join('');
};
var Uh = Pe,
  Dh = Uh;
(function (r) {
  Object.defineProperty(r, '__esModule', { value: !0 }),
    (r.recoverTypedSignature =
      r.signTypedData =
      r.typedSignatureHash =
      r.TypedDataUtils =
      r.TYPED_MESSAGE_SCHEMA =
      r.SignTypedDataVersion =
        void 0);
  const t = fn,
    e = Dh,
    i = Ze;
  var n;
  (function (B) {
    (B.V1 = 'V1'), (B.V3 = 'V3'), (B.V4 = 'V4');
  })((n = r.SignTypedDataVersion || (r.SignTypedDataVersion = {}))),
    (r.TYPED_MESSAGE_SCHEMA = {
      type: 'object',
      properties: {
        types: {
          type: 'object',
          additionalProperties: {
            type: 'array',
            items: {
              type: 'object',
              properties: { name: { type: 'string' }, type: { type: 'string' } },
              required: ['name', 'type'],
            },
          },
        },
        primaryType: { type: 'string' },
        domain: { type: 'object' },
        message: { type: 'object' },
      },
      required: ['types', 'primaryType', 'domain', 'message'],
    });
  function s(B, Z) {
    if (Object.keys(n).includes(B)) {
      if (Z && !Z.includes(B))
        throw new Error(
          `SignTypedDataVersion not allowed: '${B}'. Allowed versions are: ${Z.join(', ')}`
        );
    } else throw new Error(`Invalid version: '${B}'`);
  }
  function u(B, Z, Y, tt, xt) {
    if ((s(xt, [n.V3, n.V4]), B[Y] !== void 0))
      return [
        'bytes32',
        xt === n.V4 && tt == null
          ? '0x0000000000000000000000000000000000000000000000000000000000000000'
          : t.keccak(d(Y, tt, B, xt)),
      ];
    if (tt === void 0) throw new Error(`missing value for field ${Z} of type ${Y}`);
    if (Y === 'bytes') return ['bytes32', t.keccak(tt)];
    if (Y === 'string')
      return typeof tt == 'string' && (tt = F.from(tt, 'utf8')), ['bytes32', t.keccak(tt)];
    if (Y.lastIndexOf(']') === Y.length - 1) {
      if (xt === n.V3) throw new Error('Arrays are unimplemented in encodeData; use V4 extension');
      const se = Y.slice(0, Y.lastIndexOf('[')),
        de = tt.map((at) => u(B, Z, se, at, xt));
      return [
        'bytes32',
        t.keccak(
          e.rawEncode(
            de.map(([at]) => at),
            de.map(([, at]) => at)
          )
        ),
      ];
    }
    return [Y, tt];
  }
  function d(B, Z, Y, tt) {
    s(tt, [n.V3, n.V4]);
    const xt = ['bytes32'],
      se = [P(B, Y)];
    for (const de of Y[B]) {
      if (tt === n.V3 && Z[de.name] === void 0) continue;
      const [at, be] = u(Y, de.name, de.type, Z[de.name], tt);
      xt.push(at), se.push(be);
    }
    return e.rawEncode(xt, se);
  }
  function v(B, Z) {
    let Y = '';
    const tt = E(B, Z);
    tt.delete(B);
    const xt = [B, ...Array.from(tt).sort()];
    for (const se of xt) {
      if (!Z[se]) throw new Error(`No type definition specified: ${se}`);
      Y += `${se}(${Z[se].map(({ name: at, type: be }) => `${be} ${at}`).join(',')})`;
    }
    return Y;
  }
  function E(B, Z, Y = new Set()) {
    if ((([B] = B.match(/^\w*/u)), Y.has(B) || Z[B] === void 0)) return Y;
    Y.add(B);
    for (const tt of Z[B]) E(tt.type, Z, Y);
    return Y;
  }
  function S(B, Z, Y, tt) {
    return s(tt, [n.V3, n.V4]), t.keccak(d(B, Z, Y, tt));
  }
  function P(B, Z) {
    return t.keccak(v(B, Z));
  }
  function I(B) {
    const Z = {};
    for (const Y in r.TYPED_MESSAGE_SCHEMA.properties) B[Y] && (Z[Y] = B[Y]);
    return 'types' in Z && (Z.types = Object.assign({ EIP712Domain: [] }, Z.types)), Z;
  }
  function R(B, Z) {
    s(Z, [n.V3, n.V4]);
    const Y = I(B),
      tt = [F.from('1901', 'hex')];
    return (
      tt.push(S('EIP712Domain', Y.domain, Y.types, Z)),
      Y.primaryType !== 'EIP712Domain' && tt.push(S(Y.primaryType, Y.message, Y.types, Z)),
      t.keccak(F.concat(tt))
    );
  }
  r.TypedDataUtils = {
    encodeData: d,
    encodeType: v,
    findTypeDependencies: E,
    hashStruct: S,
    hashType: P,
    sanitizeData: I,
    eip712Hash: R,
  };
  function C(B) {
    const Z = j(B);
    return t.bufferToHex(Z);
  }
  r.typedSignatureHash = C;
  function j(B) {
    const Z = new Error('Expect argument to be non-empty array');
    if (typeof B != 'object' || !('length' in B) || !B.length) throw Z;
    const Y = B.map(function (se) {
        return se.type !== 'bytes' ? se.value : i.legacyToBuffer(se.value);
      }),
      tt = B.map(function (se) {
        return se.type;
      }),
      xt = B.map(function (se) {
        if (!se.name) throw Z;
        return `${se.type} ${se.name}`;
      });
    return e.soliditySHA3(
      ['bytes32', 'bytes32'],
      [e.soliditySHA3(new Array(B.length).fill('string'), xt), e.soliditySHA3(tt, Y)]
    );
  }
  function ct({ privateKey: B, data: Z, version: Y }) {
    if ((s(Y), i.isNullish(Z))) throw new Error('Missing data parameter');
    if (i.isNullish(B)) throw new Error('Missing private key parameter');
    const tt = Y === n.V1 ? j(Z) : r.TypedDataUtils.eip712Hash(Z, Y),
      xt = t.ecsign(tt, B);
    return i.concatSig(t.toBuffer(xt.v), xt.r, xt.s);
  }
  r.signTypedData = ct;
  function W({ data: B, signature: Z, version: Y }) {
    if ((s(Y), i.isNullish(B))) throw new Error('Missing data parameter');
    if (i.isNullish(Z)) throw new Error('Missing signature parameter');
    const tt = Y === n.V1 ? j(B) : r.TypedDataUtils.eip712Hash(B, Y),
      xt = i.recoverPublicKey(tt, Z),
      se = t.publicToAddress(xt);
    return t.bufferToHex(se);
  }
  r.recoverTypedSignature = W;
})(ka);
var Sr = {},
  Ba = { exports: {} };
(function (r) {
  (function (t, e) {
    r.exports ? (r.exports = e()) : (t.nacl || (t.nacl = {}), (t.nacl.util = e()));
  })(Te, function () {
    var t = {};
    function e(i) {
      if (
        !/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(
          i
        )
      )
        throw new TypeError('invalid encoding');
    }
    return (
      (t.decodeUTF8 = function (i) {
        if (typeof i != 'string') throw new TypeError('expected string');
        var n,
          s = unescape(encodeURIComponent(i)),
          u = new Uint8Array(s.length);
        for (n = 0; n < s.length; n++) u[n] = s.charCodeAt(n);
        return u;
      }),
      (t.encodeUTF8 = function (i) {
        var n,
          s = [];
        for (n = 0; n < i.length; n++) s.push(String.fromCharCode(i[n]));
        return decodeURIComponent(escape(s.join('')));
      }),
      typeof atob > 'u'
        ? typeof F.from < 'u'
          ? ((t.encodeBase64 = function (i) {
              return F.from(i).toString('base64');
            }),
            (t.decodeBase64 = function (i) {
              return e(i), new Uint8Array(Array.prototype.slice.call(F.from(i, 'base64'), 0));
            }))
          : ((t.encodeBase64 = function (i) {
              return new F(i).toString('base64');
            }),
            (t.decodeBase64 = function (i) {
              return e(i), new Uint8Array(Array.prototype.slice.call(new F(i, 'base64'), 0));
            }))
        : ((t.encodeBase64 = function (i) {
            var n,
              s = [],
              u = i.length;
            for (n = 0; n < u; n++) s.push(String.fromCharCode(i[n]));
            return btoa(s.join(''));
          }),
          (t.decodeBase64 = function (i) {
            e(i);
            var n,
              s = atob(i),
              u = new Uint8Array(s.length);
            for (n = 0; n < s.length; n++) u[n] = s.charCodeAt(n);
            return u;
          })),
      t
    );
  });
})(Ba);
var zh = Ba.exports,
  Kh =
    (Te && Te.__createBinding) ||
    (Object.create
      ? function (r, t, e, i) {
          i === void 0 && (i = e),
            Object.defineProperty(r, i, {
              enumerable: !0,
              get: function () {
                return t[e];
              },
            });
        }
      : function (r, t, e, i) {
          i === void 0 && (i = e), (r[i] = t[e]);
        }),
  qh =
    (Te && Te.__setModuleDefault) ||
    (Object.create
      ? function (r, t) {
          Object.defineProperty(r, 'default', { enumerable: !0, value: t });
        }
      : function (r, t) {
          r.default = t;
        }),
  Ta =
    (Te && Te.__importStar) ||
    function (r) {
      if (r && r.__esModule) return r;
      var t = {};
      if (r != null)
        for (var e in r)
          e !== 'default' && Object.prototype.hasOwnProperty.call(r, e) && Kh(t, r, e);
      return qh(t, r), t;
    };
Object.defineProperty(Sr, '__esModule', { value: !0 });
Sr.getEncryptionPublicKey = Sr.decryptSafely = Sr.decrypt = Sr.encryptSafely = Sr.encrypt = void 0;
const bi = Ta(Uu),
  Ur = Ta(zh),
  Qr = Ze;
function Ra({ publicKey: r, data: t, version: e }) {
  if (Qr.isNullish(r)) throw new Error('Missing publicKey parameter');
  if (Qr.isNullish(t)) throw new Error('Missing data parameter');
  if (Qr.isNullish(e)) throw new Error('Missing version parameter');
  switch (e) {
    case 'x25519-xsalsa20-poly1305': {
      if (typeof t != 'string') throw new Error('Message data must be given as a string');
      const i = bi.box.keyPair();
      let n;
      try {
        n = Ur.decodeBase64(r);
      } catch {
        throw new Error('Bad public key');
      }
      const s = Ur.decodeUTF8(t),
        u = bi.randomBytes(bi.box.nonceLength),
        d = bi.box(s, u, n, i.secretKey);
      return {
        version: 'x25519-xsalsa20-poly1305',
        nonce: Ur.encodeBase64(u),
        ephemPublicKey: Ur.encodeBase64(i.publicKey),
        ciphertext: Ur.encodeBase64(d),
      };
    }
    default:
      throw new Error('Encryption type/version not supported');
  }
}
Sr.encrypt = Ra;
function Fh({ publicKey: r, data: t, version: e }) {
  if (Qr.isNullish(r)) throw new Error('Missing publicKey parameter');
  if (Qr.isNullish(t)) throw new Error('Missing data parameter');
  if (Qr.isNullish(e)) throw new Error('Missing version parameter');
  const i = 2 ** 11,
    n = 16;
  if (typeof t == 'object' && 'toJSON' in t)
    throw new Error('Cannot encrypt with toJSON property.  Please remove toJSON property');
  const s = { data: t, padding: '' },
    d = F.byteLength(JSON.stringify(s), 'utf-8') % i;
  let v = 0;
  d > 0 && (v = i - d - n), (s.padding = '0'.repeat(v));
  const E = JSON.stringify(s);
  return Ra({ publicKey: r, data: E, version: e });
}
Sr.encryptSafely = Fh;
function Ca({ encryptedData: r, privateKey: t }) {
  if (Qr.isNullish(r)) throw new Error('Missing encryptedData parameter');
  if (Qr.isNullish(t)) throw new Error('Missing privateKey parameter');
  switch (r.version) {
    case 'x25519-xsalsa20-poly1305': {
      const e = La(t),
        i = bi.box.keyPair.fromSecretKey(e).secretKey,
        n = Ur.decodeBase64(r.nonce),
        s = Ur.decodeBase64(r.ciphertext),
        u = Ur.decodeBase64(r.ephemPublicKey),
        d = bi.box.open(s, n, u, i);
      let v;
      try {
        v = Ur.encodeUTF8(d);
      } catch {
        throw new Error('Decryption failed.');
      }
      if (v) return v;
      throw new Error('Decryption failed.');
    }
    default:
      throw new Error('Encryption type/version not supported.');
  }
}
Sr.decrypt = Ca;
function Hh({ encryptedData: r, privateKey: t }) {
  if (Qr.isNullish(r)) throw new Error('Missing encryptedData parameter');
  if (Qr.isNullish(t)) throw new Error('Missing privateKey parameter');
  return JSON.parse(Ca({ encryptedData: r, privateKey: t })).data;
}
Sr.decryptSafely = Hh;
function Gh(r) {
  const t = La(r),
    e = bi.box.keyPair.fromSecretKey(t).publicKey;
  return Ur.encodeBase64(e);
}
Sr.getEncryptionPublicKey = Gh;
function La(r) {
  const t = F.from(r, 'hex').toString('base64');
  return Ur.decodeBase64(t);
}
(function (r) {
  var t =
      (Te && Te.__createBinding) ||
      (Object.create
        ? function (n, s, u, d) {
            d === void 0 && (d = u),
              Object.defineProperty(n, d, {
                enumerable: !0,
                get: function () {
                  return s[u];
                },
              });
          }
        : function (n, s, u, d) {
            d === void 0 && (d = u), (n[d] = s[u]);
          }),
    e =
      (Te && Te.__exportStar) ||
      function (n, s) {
        for (var u in n)
          u !== 'default' && !Object.prototype.hasOwnProperty.call(s, u) && t(s, n, u);
      };
  Object.defineProperty(r, '__esModule', { value: !0 }),
    (r.normalize = r.concatSig = void 0),
    e(li, r),
    e(ka, r),
    e(Sr, r);
  var i = Ze;
  Object.defineProperty(r, 'concatSig', {
    enumerable: !0,
    get: function () {
      return i.concatSig;
    },
  }),
    Object.defineProperty(r, 'normalize', {
      enumerable: !0,
      get: function () {
        return i.normalize;
      },
    });
})(Du);
const jh = 'networks/5.7.1',
  ho = new z(jh);
function Vh(r) {
  return r && typeof r.renetwork == 'function';
}
function ri(r) {
  const t = function (e, i) {
    i == null && (i = {});
    const n = [];
    if (e.InfuraProvider && i.infura !== '-')
      try {
        n.push(new e.InfuraProvider(r, i.infura));
      } catch {}
    if (e.EtherscanProvider && i.etherscan !== '-')
      try {
        n.push(new e.EtherscanProvider(r, i.etherscan));
      } catch {}
    if (e.AlchemyProvider && i.alchemy !== '-')
      try {
        n.push(new e.AlchemyProvider(r, i.alchemy));
      } catch {}
    if (e.PocketProvider && i.pocket !== '-') {
      const s = ['goerli', 'ropsten', 'rinkeby', 'sepolia'];
      try {
        const u = new e.PocketProvider(r, i.pocket);
        u.network && s.indexOf(u.network.name) === -1 && n.push(u);
      } catch {}
    }
    if (e.CloudflareProvider && i.cloudflare !== '-')
      try {
        n.push(new e.CloudflareProvider(r));
      } catch {}
    if (e.AnkrProvider && i.ankr !== '-')
      try {
        const s = ['ropsten'],
          u = new e.AnkrProvider(r, i.ankr);
        u.network && s.indexOf(u.network.name) === -1 && n.push(u);
      } catch {}
    if (n.length === 0) return null;
    if (e.FallbackProvider) {
      let s = 1;
      return (
        i.quorum != null ? (s = i.quorum) : r === 'homestead' && (s = 2),
        new e.FallbackProvider(n, s)
      );
    }
    return n[0];
  };
  return (
    (t.renetwork = function (e) {
      return ri(e);
    }),
    t
  );
}
function Bn(r, t) {
  const e = function (i, n) {
    return i.JsonRpcProvider ? new i.JsonRpcProvider(r, t) : null;
  };
  return (
    (e.renetwork = function (i) {
      return Bn(r, i);
    }),
    e
  );
}
const lo = {
    chainId: 1,
    ensAddress: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    name: 'homestead',
    _defaultProvider: ri('homestead'),
  },
  co = {
    chainId: 3,
    ensAddress: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    name: 'ropsten',
    _defaultProvider: ri('ropsten'),
  },
  go = {
    chainId: 63,
    name: 'classicMordor',
    _defaultProvider: Bn('https://www.ethercluster.com/mordor', 'classicMordor'),
  },
  gn = {
    unspecified: { chainId: 0, name: 'unspecified' },
    homestead: lo,
    mainnet: lo,
    morden: { chainId: 2, name: 'morden' },
    ropsten: co,
    testnet: co,
    rinkeby: {
      chainId: 4,
      ensAddress: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
      name: 'rinkeby',
      _defaultProvider: ri('rinkeby'),
    },
    kovan: { chainId: 42, name: 'kovan', _defaultProvider: ri('kovan') },
    goerli: {
      chainId: 5,
      ensAddress: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
      name: 'goerli',
      _defaultProvider: ri('goerli'),
    },
    kintsugi: { chainId: 1337702, name: 'kintsugi' },
    sepolia: { chainId: 11155111, name: 'sepolia', _defaultProvider: ri('sepolia') },
    classic: {
      chainId: 61,
      name: 'classic',
      _defaultProvider: Bn('https://www.ethercluster.com/etc', 'classic'),
    },
    classicMorden: { chainId: 62, name: 'classicMorden' },
    classicMordor: go,
    classicTestnet: go,
    classicKotti: {
      chainId: 6,
      name: 'classicKotti',
      _defaultProvider: Bn('https://www.ethercluster.com/kotti', 'classicKotti'),
    },
    xdai: { chainId: 100, name: 'xdai' },
    matic: { chainId: 137, name: 'matic', _defaultProvider: ri('matic') },
    maticmum: { chainId: 80001, name: 'maticmum' },
    optimism: { chainId: 10, name: 'optimism', _defaultProvider: ri('optimism') },
    'optimism-kovan': { chainId: 69, name: 'optimism-kovan' },
    'optimism-goerli': { chainId: 420, name: 'optimism-goerli' },
    arbitrum: { chainId: 42161, name: 'arbitrum' },
    'arbitrum-rinkeby': { chainId: 421611, name: 'arbitrum-rinkeby' },
    'arbitrum-goerli': { chainId: 421613, name: 'arbitrum-goerli' },
    bnb: { chainId: 56, name: 'bnb' },
    bnbt: { chainId: 97, name: 'bnbt' },
  };
function Jh(r) {
  if (r == null) return null;
  if (typeof r == 'number') {
    for (const i in gn) {
      const n = gn[i];
      if (n.chainId === r)
        return {
          name: n.name,
          chainId: n.chainId,
          ensAddress: n.ensAddress || null,
          _defaultProvider: n._defaultProvider || null,
        };
    }
    return { chainId: r, name: 'unknown' };
  }
  if (typeof r == 'string') {
    const i = gn[r];
    return i == null
      ? null
      : {
          name: i.name,
          chainId: i.chainId,
          ensAddress: i.ensAddress,
          _defaultProvider: i._defaultProvider || null,
        };
  }
  const t = gn[r.name];
  if (!t)
    return (
      typeof r.chainId != 'number' &&
        ho.throwArgumentError('invalid network chainId', 'network', r),
      r
    );
  r.chainId !== 0 &&
    r.chainId !== t.chainId &&
    ho.throwArgumentError('network chainId mismatch', 'network', r);
  let e = r._defaultProvider || null;
  return (
    e == null &&
      t._defaultProvider &&
      (Vh(t._defaultProvider) ? (e = t._defaultProvider.renetwork(r)) : (e = t._defaultProvider)),
    {
      name: r.name,
      chainId: t.chainId,
      ensAddress: r.ensAddress || t.ensAddress || null,
      _defaultProvider: e,
    }
  );
}
const Yh = 'web/5.7.1';
var Zh = function (r, t, e, i) {
  function n(s) {
    return s instanceof e
      ? s
      : new e(function (u) {
          u(s);
        });
  }
  return new (e || (e = Promise))(function (s, u) {
    function d(S) {
      try {
        E(i.next(S));
      } catch (P) {
        u(P);
      }
    }
    function v(S) {
      try {
        E(i.throw(S));
      } catch (P) {
        u(P);
      }
    }
    function E(S) {
      S.done ? s(S.value) : n(S.value).then(d, v);
    }
    E((i = i.apply(r, t || [])).next());
  });
};
function Qh(r, t) {
  return Zh(this, void 0, void 0, function* () {
    t == null && (t = {});
    const e = { method: t.method || 'GET', headers: t.headers || {}, body: t.body || void 0 };
    if (
      (t.skipFetchSetup !== !0 &&
        ((e.mode = 'cors'),
        (e.cache = 'no-cache'),
        (e.credentials = 'same-origin'),
        (e.redirect = 'follow'),
        (e.referrer = 'client')),
      t.fetchOptions != null)
    ) {
      const u = t.fetchOptions;
      u.mode && (e.mode = u.mode),
        u.cache && (e.cache = u.cache),
        u.credentials && (e.credentials = u.credentials),
        u.redirect && (e.redirect = u.redirect),
        u.referrer && (e.referrer = u.referrer);
    }
    const i = yield fetch(r, e),
      n = yield i.arrayBuffer(),
      s = {};
    return (
      i.headers.forEach
        ? i.headers.forEach((u, d) => {
            s[d.toLowerCase()] = u;
          })
        : i.headers.keys().forEach((u) => {
            s[u.toLowerCase()] = i.headers.get(u);
          }),
      { headers: s, statusCode: i.status, statusMessage: i.statusText, body: re(new Uint8Array(n)) }
    );
  });
}
var Wh = function (r, t, e, i) {
  function n(s) {
    return s instanceof e
      ? s
      : new e(function (u) {
          u(s);
        });
  }
  return new (e || (e = Promise))(function (s, u) {
    function d(S) {
      try {
        E(i.next(S));
      } catch (P) {
        u(P);
      }
    }
    function v(S) {
      try {
        E(i.throw(S));
      } catch (P) {
        u(P);
      }
    }
    function E(S) {
      S.done ? s(S.value) : n(S.value).then(d, v);
    }
    E((i = i.apply(r, t || [])).next());
  });
};
const Or = new z(Yh);
function po(r) {
  return new Promise((t) => {
    setTimeout(t, r);
  });
}
function ui(r, t) {
  if (r == null) return null;
  if (typeof r == 'string') return r;
  if (xs(r)) {
    if (t && (t.split('/')[0] === 'text' || t.split(';')[0].trim() === 'application/json'))
      try {
        return an(r);
      } catch {}
    return $t(r);
  }
  return r;
}
function Xh(r) {
  return Wr(r.replace(/%([0-9a-f][0-9a-f])/gi, (t, e) => String.fromCharCode(parseInt(e, 16))));
}
function $h(r, t, e) {
  const i = typeof r == 'object' && r.throttleLimit != null ? r.throttleLimit : 12;
  Or.assertArgument(
    i > 0 && i % 1 === 0,
    'invalid connection throttle limit',
    'connection.throttleLimit',
    i
  );
  const n = typeof r == 'object' ? r.throttleCallback : null,
    s =
      typeof r == 'object' && typeof r.throttleSlotInterval == 'number'
        ? r.throttleSlotInterval
        : 100;
  Or.assertArgument(
    s > 0 && s % 1 === 0,
    'invalid connection throttle slot interval',
    'connection.throttleSlotInterval',
    s
  );
  const u = typeof r == 'object' ? !!r.errorPassThrough : !1,
    d = {};
  let v = null;
  const E = { method: 'GET' };
  let S = !1,
    P = 2 * 60 * 1e3;
  if (typeof r == 'string') v = r;
  else if (typeof r == 'object') {
    if (
      ((r == null || r.url == null) && Or.throwArgumentError('missing URL', 'connection.url', r),
      (v = r.url),
      typeof r.timeout == 'number' && r.timeout > 0 && (P = r.timeout),
      r.headers)
    )
      for (const W in r.headers)
        (d[W.toLowerCase()] = { key: W, value: String(r.headers[W]) }),
          ['if-none-match', 'if-modified-since'].indexOf(W.toLowerCase()) >= 0 && (S = !0);
    if (((E.allowGzip = !!r.allowGzip), r.user != null && r.password != null)) {
      v.substring(0, 6) !== 'https:' &&
        r.allowInsecureAuthentication !== !0 &&
        Or.throwError(
          'basic authentication requires a secure https url',
          z.errors.INVALID_ARGUMENT,
          { argument: 'url', url: v, user: r.user, password: '[REDACTED]' }
        );
      const W = r.user + ':' + r.password;
      d.authorization = { key: 'Authorization', value: 'Basic ' + Yo(Wr(W)) };
    }
    r.skipFetchSetup != null && (E.skipFetchSetup = !!r.skipFetchSetup),
      r.fetchOptions != null && (E.fetchOptions = Ge(r.fetchOptions));
  }
  const I = new RegExp('^data:([^;:]*)?(;base64)?,(.*)$', 'i'),
    R = v ? v.match(I) : null;
  if (R)
    try {
      const W = {
        statusCode: 200,
        statusMessage: 'OK',
        headers: { 'content-type': R[1] || 'text/plain' },
        body: R[2] ? Jo(R[3]) : Xh(R[3]),
      };
      let B = W.body;
      return e && (B = e(W.body, W)), Promise.resolve(B);
    } catch (W) {
      Or.throwError('processing response error', z.errors.SERVER_ERROR, {
        body: ui(R[1], R[2]),
        error: W,
        requestBody: null,
        requestMethod: 'GET',
        url: v,
      });
    }
  t &&
    ((E.method = 'POST'),
    (E.body = t),
    d['content-type'] == null &&
      (d['content-type'] = { key: 'Content-Type', value: 'application/octet-stream' }),
    d['content-length'] == null &&
      (d['content-length'] = { key: 'Content-Length', value: String(t.length) }));
  const C = {};
  Object.keys(d).forEach((W) => {
    const B = d[W];
    C[B.key] = B.value;
  }),
    (E.headers = C);
  const j = (function () {
      let W = null;
      return {
        promise: new Promise(function (Y, tt) {
          P &&
            (W = setTimeout(() => {
              W != null &&
                ((W = null),
                tt(
                  Or.makeError('timeout', z.errors.TIMEOUT, {
                    requestBody: ui(E.body, C['content-type']),
                    requestMethod: E.method,
                    timeout: P,
                    url: v,
                  })
                ));
            }, P));
        }),
        cancel: function () {
          W != null && (clearTimeout(W), (W = null));
        },
      };
    })(),
    ct = (function () {
      return Wh(this, void 0, void 0, function* () {
        for (let W = 0; W < i; W++) {
          let B = null;
          try {
            if (((B = yield Qh(v, E)), W < i)) {
              if (B.statusCode === 301 || B.statusCode === 302) {
                const Y = B.headers.location || '';
                if (E.method === 'GET' && Y.match(/^https:/)) {
                  v = B.headers.location;
                  continue;
                }
              } else if (B.statusCode === 429) {
                let Y = !0;
                if ((n && (Y = yield n(W, v)), Y)) {
                  let tt = 0;
                  const xt = B.headers['retry-after'];
                  typeof xt == 'string' && xt.match(/^[1-9][0-9]*$/)
                    ? (tt = parseInt(xt) * 1e3)
                    : (tt = s * parseInt(String(Math.random() * Math.pow(2, W)))),
                    yield po(tt);
                  continue;
                }
              }
            }
          } catch (Y) {
            (B = Y.response),
              B == null &&
                (j.cancel(),
                Or.throwError('missing response', z.errors.SERVER_ERROR, {
                  requestBody: ui(E.body, C['content-type']),
                  requestMethod: E.method,
                  serverError: Y,
                  url: v,
                }));
          }
          let Z = B.body;
          if (
            (S && B.statusCode === 304
              ? (Z = null)
              : !u &&
                (B.statusCode < 200 || B.statusCode >= 300) &&
                (j.cancel(),
                Or.throwError('bad response', z.errors.SERVER_ERROR, {
                  status: B.statusCode,
                  headers: B.headers,
                  body: ui(Z, B.headers ? B.headers['content-type'] : null),
                  requestBody: ui(E.body, C['content-type']),
                  requestMethod: E.method,
                  url: v,
                })),
            e)
          )
            try {
              const Y = yield e(Z, B);
              return j.cancel(), Y;
            } catch (Y) {
              if (Y.throttleRetry && W < i) {
                let tt = !0;
                if ((n && (tt = yield n(W, v)), tt)) {
                  const xt = s * parseInt(String(Math.random() * Math.pow(2, W)));
                  yield po(xt);
                  continue;
                }
              }
              j.cancel(),
                Or.throwError('processing response error', z.errors.SERVER_ERROR, {
                  body: ui(Z, B.headers ? B.headers['content-type'] : null),
                  error: Y,
                  requestBody: ui(E.body, C['content-type']),
                  requestMethod: E.method,
                  url: v,
                });
            }
          return j.cancel(), Z;
        }
        return Or.throwError('failed response', z.errors.SERVER_ERROR, {
          requestBody: ui(E.body, C['content-type']),
          requestMethod: E.method,
          url: v,
        });
      });
    })();
  return Promise.race([j.promise, ct]);
}
function zs(r, t, e) {
  let i = (s, u) => {
      let d = null;
      if (s != null)
        try {
          d = JSON.parse(an(s));
        } catch (v) {
          Or.throwError('invalid JSON', z.errors.SERVER_ERROR, { body: s, error: v });
        }
      return e && (d = e(d, u)), d;
    },
    n = null;
  if (t != null) {
    n = Wr(t);
    const s = typeof r == 'string' ? { url: r } : Ge(r);
    s.headers
      ? Object.keys(s.headers).filter((d) => d.toLowerCase() === 'content-type').length !== 0 ||
        ((s.headers = Ge(s.headers)), (s.headers['content-type'] = 'application/json'))
      : (s.headers = { 'content-type': 'application/json' }),
      (r = s);
  }
  return $h(r, n, i);
}
function Vi(r, t) {
  return (
    t || (t = {}),
    (t = Ge(t)),
    t.floor == null && (t.floor = 0),
    t.ceiling == null && (t.ceiling = 1e4),
    t.interval == null && (t.interval = 250),
    new Promise(function (e, i) {
      let n = null,
        s = !1;
      const u = () => (s ? !1 : ((s = !0), n && clearTimeout(n), !0));
      t.timeout &&
        (n = setTimeout(() => {
          u() && i(new Error('timeout'));
        }, t.timeout));
      const d = t.retryLimit;
      let v = 0;
      function E() {
        return r().then(
          function (S) {
            if (S !== void 0) u() && e(S);
            else if (t.oncePoll) t.oncePoll.once('poll', E);
            else if (t.onceBlock) t.onceBlock.once('block', E);
            else if (!s) {
              if ((v++, v > d)) {
                u() && i(new Error('retry limit reached'));
                return;
              }
              let P = t.interval * parseInt(String(Math.random() * Math.pow(2, v)));
              P < t.floor && (P = t.floor), P > t.ceiling && (P = t.ceiling), setTimeout(E, P);
            }
            return null;
          },
          function (S) {
            u() && i(S);
          }
        );
      }
      E();
    })
  );
}
var Tn = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l',
  ys = {};
for (var pn = 0; pn < Tn.length; pn++) {
  var ns = Tn.charAt(pn);
  if (ys[ns] !== void 0) throw new TypeError(ns + ' is ambiguous');
  ys[ns] = pn;
}
function Ti(r) {
  var t = r >> 25;
  return (
    ((r & 33554431) << 5) ^
    (-((t >> 0) & 1) & 996825010) ^
    (-((t >> 1) & 1) & 642813549) ^
    (-((t >> 2) & 1) & 513874426) ^
    (-((t >> 3) & 1) & 1027748829) ^
    (-((t >> 4) & 1) & 705979059)
  );
}
function Oa(r) {
  for (var t = 1, e = 0; e < r.length; ++e) {
    var i = r.charCodeAt(e);
    if (i < 33 || i > 126) return 'Invalid prefix (' + r + ')';
    t = Ti(t) ^ (i >> 5);
  }
  for (t = Ti(t), e = 0; e < r.length; ++e) {
    var n = r.charCodeAt(e);
    t = Ti(t) ^ (n & 31);
  }
  return t;
}
function tl(r, t, e) {
  if (((e = e || 90), r.length + 7 + t.length > e)) throw new TypeError('Exceeds length limit');
  r = r.toLowerCase();
  var i = Oa(r);
  if (typeof i == 'string') throw new Error(i);
  for (var n = r + '1', s = 0; s < t.length; ++s) {
    var u = t[s];
    if (u >> 5) throw new Error('Non 5-bit word');
    (i = Ti(i) ^ u), (n += Tn.charAt(u));
  }
  for (s = 0; s < 6; ++s) i = Ti(i);
  for (i ^= 1, s = 0; s < 6; ++s) {
    var d = (i >> ((5 - s) * 5)) & 31;
    n += Tn.charAt(d);
  }
  return n;
}
function Ua(r, t) {
  if (((t = t || 90), r.length < 8)) return r + ' too short';
  if (r.length > t) return 'Exceeds length limit';
  var e = r.toLowerCase(),
    i = r.toUpperCase();
  if (r !== e && r !== i) return 'Mixed-case string ' + r;
  r = e;
  var n = r.lastIndexOf('1');
  if (n === -1) return 'No separator character for ' + r;
  if (n === 0) return 'Missing prefix for ' + r;
  var s = r.slice(0, n),
    u = r.slice(n + 1);
  if (u.length < 6) return 'Data too short';
  var d = Oa(s);
  if (typeof d == 'string') return d;
  for (var v = [], E = 0; E < u.length; ++E) {
    var S = u.charAt(E),
      P = ys[S];
    if (P === void 0) return 'Unknown character ' + S;
    (d = Ti(d) ^ P), !(E + 6 >= u.length) && v.push(P);
  }
  return d !== 1 ? 'Invalid checksum for ' + r : { prefix: s, words: v };
}
function el() {
  var r = Ua.apply(null, arguments);
  if (typeof r == 'object') return r;
}
function rl(r) {
  var t = Ua.apply(null, arguments);
  if (typeof t == 'object') return t;
  throw new Error(t);
}
function Yn(r, t, e, i) {
  for (var n = 0, s = 0, u = (1 << e) - 1, d = [], v = 0; v < r.length; ++v)
    for (n = (n << t) | r[v], s += t; s >= e; ) (s -= e), d.push((n >> s) & u);
  if (i) s > 0 && d.push((n << (e - s)) & u);
  else {
    if (s >= t) return 'Excess padding';
    if ((n << (e - s)) & u) return 'Non-zero padding';
  }
  return d;
}
function il(r) {
  var t = Yn(r, 8, 5, !0);
  if (Array.isArray(t)) return t;
}
function nl(r) {
  var t = Yn(r, 8, 5, !0);
  if (Array.isArray(t)) return t;
  throw new Error(t);
}
function sl(r) {
  var t = Yn(r, 5, 8, !1);
  if (Array.isArray(t)) return t;
}
function ol(r) {
  var t = Yn(r, 5, 8, !1);
  if (Array.isArray(t)) return t;
  throw new Error(t);
}
var al = {
  decodeUnsafe: el,
  decode: rl,
  encode: tl,
  toWordsUnsafe: il,
  toWords: nl,
  fromWordsUnsafe: sl,
  fromWords: ol,
};
const mo = $a(al),
  Zn = 'providers/5.7.2',
  Hi = new z(Zn);
class gt {
  constructor() {
    this.formats = this.getDefaultFormats();
  }
  getDefaultFormats() {
    const t = {},
      e = this.address.bind(this),
      i = this.bigNumber.bind(this),
      n = this.blockTag.bind(this),
      s = this.data.bind(this),
      u = this.hash.bind(this),
      d = this.hex.bind(this),
      v = this.number.bind(this),
      E = this.type.bind(this),
      S = (P) => this.data(P, !0);
    return (
      (t.transaction = {
        hash: u,
        type: E,
        accessList: gt.allowNull(this.accessList.bind(this), null),
        blockHash: gt.allowNull(u, null),
        blockNumber: gt.allowNull(v, null),
        transactionIndex: gt.allowNull(v, null),
        confirmations: gt.allowNull(v, null),
        from: e,
        gasPrice: gt.allowNull(i),
        maxPriorityFeePerGas: gt.allowNull(i),
        maxFeePerGas: gt.allowNull(i),
        gasLimit: i,
        to: gt.allowNull(e, null),
        value: i,
        nonce: v,
        data: s,
        r: gt.allowNull(this.uint256),
        s: gt.allowNull(this.uint256),
        v: gt.allowNull(v),
        creates: gt.allowNull(e, null),
        raw: gt.allowNull(s),
      }),
      (t.transactionRequest = {
        from: gt.allowNull(e),
        nonce: gt.allowNull(v),
        gasLimit: gt.allowNull(i),
        gasPrice: gt.allowNull(i),
        maxPriorityFeePerGas: gt.allowNull(i),
        maxFeePerGas: gt.allowNull(i),
        to: gt.allowNull(e),
        value: gt.allowNull(i),
        data: gt.allowNull(S),
        type: gt.allowNull(v),
        accessList: gt.allowNull(this.accessList.bind(this), null),
      }),
      (t.receiptLog = {
        transactionIndex: v,
        blockNumber: v,
        transactionHash: u,
        address: e,
        topics: gt.arrayOf(u),
        data: s,
        logIndex: v,
        blockHash: u,
      }),
      (t.receipt = {
        to: gt.allowNull(this.address, null),
        from: gt.allowNull(this.address, null),
        contractAddress: gt.allowNull(e, null),
        transactionIndex: v,
        root: gt.allowNull(d),
        gasUsed: i,
        logsBloom: gt.allowNull(s),
        blockHash: u,
        transactionHash: u,
        logs: gt.arrayOf(this.receiptLog.bind(this)),
        blockNumber: v,
        confirmations: gt.allowNull(v, null),
        cumulativeGasUsed: i,
        effectiveGasPrice: gt.allowNull(i),
        status: gt.allowNull(v),
        type: E,
      }),
      (t.block = {
        hash: gt.allowNull(u),
        parentHash: u,
        number: v,
        timestamp: v,
        nonce: gt.allowNull(d),
        difficulty: this.difficulty.bind(this),
        gasLimit: i,
        gasUsed: i,
        miner: gt.allowNull(e),
        extraData: s,
        transactions: gt.allowNull(gt.arrayOf(u)),
        baseFeePerGas: gt.allowNull(i),
      }),
      (t.blockWithTransactions = Ge(t.block)),
      (t.blockWithTransactions.transactions = gt.allowNull(
        gt.arrayOf(this.transactionResponse.bind(this))
      )),
      (t.filter = {
        fromBlock: gt.allowNull(n, void 0),
        toBlock: gt.allowNull(n, void 0),
        blockHash: gt.allowNull(u, void 0),
        address: gt.allowNull(e, void 0),
        topics: gt.allowNull(this.topics.bind(this), void 0),
      }),
      (t.filterLog = {
        blockNumber: gt.allowNull(v),
        blockHash: gt.allowNull(u),
        transactionIndex: v,
        removed: gt.allowNull(this.boolean.bind(this)),
        address: e,
        data: gt.allowFalsish(s, '0x'),
        topics: gt.arrayOf(u),
        transactionHash: u,
        logIndex: v,
      }),
      t
    );
  }
  accessList(t) {
    return Oi(t || []);
  }
  number(t) {
    return t === '0x' ? 0 : ut.from(t).toNumber();
  }
  type(t) {
    return t === '0x' || t == null ? 0 : ut.from(t).toNumber();
  }
  bigNumber(t) {
    return ut.from(t);
  }
  boolean(t) {
    if (typeof t == 'boolean') return t;
    if (typeof t == 'string') {
      if (((t = t.toLowerCase()), t === 'true')) return !0;
      if (t === 'false') return !1;
    }
    throw new Error('invalid boolean - ' + t);
  }
  hex(t, e) {
    return typeof t == 'string' && (!e && t.substring(0, 2) !== '0x' && (t = '0x' + t), De(t))
      ? t.toLowerCase()
      : Hi.throwArgumentError('invalid hash', 'value', t);
  }
  data(t, e) {
    const i = this.hex(t, e);
    if (i.length % 2 !== 0) throw new Error('invalid data; odd-length - ' + t);
    return i;
  }
  address(t) {
    return Je(t);
  }
  callAddress(t) {
    if (!De(t, 32)) return null;
    const e = Je(er(t, 12));
    return e === Pf ? null : e;
  }
  contractAddress(t) {
    return zo(t);
  }
  blockTag(t) {
    if (t == null) return 'latest';
    if (t === 'earliest') return '0x0';
    switch (t) {
      case 'earliest':
        return '0x0';
      case 'latest':
      case 'pending':
      case 'safe':
      case 'finalized':
        return t;
    }
    if (typeof t == 'number' || De(t)) return Es(t);
    throw new Error('invalid blockTag');
  }
  hash(t, e) {
    const i = this.hex(t, e);
    return Ai(i) !== 32 ? Hi.throwArgumentError('invalid hash', 'value', t) : i;
  }
  difficulty(t) {
    if (t == null) return null;
    const e = ut.from(t);
    try {
      return e.toNumber();
    } catch {}
    return null;
  }
  uint256(t) {
    if (!De(t)) throw new Error('invalid uint256');
    return je(t, 32);
  }
  _block(t, e) {
    t.author != null && t.miner == null && (t.miner = t.author);
    const i = t._difficulty != null ? t._difficulty : t.difficulty,
      n = gt.check(e, t);
    return (n._difficulty = i == null ? null : ut.from(i)), n;
  }
  block(t) {
    return this._block(t, this.formats.block);
  }
  blockWithTransactions(t) {
    return this._block(t, this.formats.blockWithTransactions);
  }
  transactionRequest(t) {
    return gt.check(this.formats.transactionRequest, t);
  }
  transactionResponse(t) {
    t.gas != null && t.gasLimit == null && (t.gasLimit = t.gas),
      t.to && ut.from(t.to).isZero() && (t.to = '0x0000000000000000000000000000000000000000'),
      t.input != null && t.data == null && (t.data = t.input),
      t.to == null && t.creates == null && (t.creates = this.contractAddress(t)),
      (t.type === 1 || t.type === 2) && t.accessList == null && (t.accessList = []);
    const e = gt.check(this.formats.transaction, t);
    if (t.chainId != null) {
      let i = t.chainId;
      De(i) && (i = ut.from(i).toNumber()), (e.chainId = i);
    } else {
      let i = t.networkId;
      i == null && e.v == null && (i = t.chainId),
        De(i) && (i = ut.from(i).toNumber()),
        typeof i != 'number' &&
          e.v != null &&
          ((i = (e.v - 35) / 2), i < 0 && (i = 0), (i = parseInt(i))),
        typeof i != 'number' && (i = 0),
        (e.chainId = i);
    }
    return e.blockHash && e.blockHash.replace(/0/g, '') === 'x' && (e.blockHash = null), e;
  }
  transaction(t) {
    return Ou(t);
  }
  receiptLog(t) {
    return gt.check(this.formats.receiptLog, t);
  }
  receipt(t) {
    const e = gt.check(this.formats.receipt, t);
    if (e.root != null)
      if (e.root.length <= 4) {
        const i = ut.from(e.root).toNumber();
        i === 0 || i === 1
          ? (e.status != null &&
              e.status !== i &&
              Hi.throwArgumentError('alt-root-status/status mismatch', 'value', {
                root: e.root,
                status: e.status,
              }),
            (e.status = i),
            delete e.root)
          : Hi.throwArgumentError('invalid alt-root-status', 'value.root', e.root);
      } else
        e.root.length !== 66 && Hi.throwArgumentError('invalid root hash', 'value.root', e.root);
    return e.status != null && (e.byzantium = !0), e;
  }
  topics(t) {
    return Array.isArray(t) ? t.map((e) => this.topics(e)) : t != null ? this.hash(t, !0) : null;
  }
  filter(t) {
    return gt.check(this.formats.filter, t);
  }
  filterLog(t) {
    return gt.check(this.formats.filterLog, t);
  }
  static check(t, e) {
    const i = {};
    for (const n in t)
      try {
        const s = t[n](e[n]);
        s !== void 0 && (i[n] = s);
      } catch (s) {
        throw ((s.checkKey = n), (s.checkValue = e[n]), s);
      }
    return i;
  }
  static allowNull(t, e) {
    return function (i) {
      return i == null ? e : t(i);
    };
  }
  static allowFalsish(t, e) {
    return function (i) {
      return i ? t(i) : e;
    };
  }
  static arrayOf(t) {
    return function (e) {
      if (!Array.isArray(e)) throw new Error('not an array');
      const i = [];
      return (
        e.forEach(function (n) {
          i.push(t(n));
        }),
        i
      );
    };
  }
}
var ne = function (r, t, e, i) {
  function n(s) {
    return s instanceof e
      ? s
      : new e(function (u) {
          u(s);
        });
  }
  return new (e || (e = Promise))(function (s, u) {
    function d(S) {
      try {
        E(i.next(S));
      } catch (P) {
        u(P);
      }
    }
    function v(S) {
      try {
        E(i.throw(S));
      } catch (P) {
        u(P);
      }
    }
    function E(S) {
      S.done ? s(S.value) : n(S.value).then(d, v);
    }
    E((i = i.apply(r, t || [])).next());
  });
};
const ce = new z(Zn),
  fl = 10;
function vo(r) {
  return r == null
    ? 'null'
    : (Ai(r) !== 32 && ce.throwArgumentError('invalid topic', 'topic', r), r.toLowerCase());
}
function yo(r) {
  for (r = r.slice(); r.length > 0 && r[r.length - 1] == null; ) r.pop();
  return r
    .map((t) => {
      if (Array.isArray(t)) {
        const e = {};
        t.forEach((n) => {
          e[vo(n)] = !0;
        });
        const i = Object.keys(e);
        return i.sort(), i.join('|');
      } else return vo(t);
    })
    .join('&');
}
function ul(r) {
  return r === ''
    ? []
    : r.split(/&/g).map((t) => {
        if (t === '') return [];
        const e = t.split('|').map((i) => (i === 'null' ? null : i));
        return e.length === 1 ? e[0] : e;
      });
}
function _i(r) {
  if (typeof r == 'string') {
    if (((r = r.toLowerCase()), Ai(r) === 32)) return 'tx:' + r;
    if (r.indexOf(':') === -1) return r;
  } else {
    if (Array.isArray(r)) return 'filter:*:' + yo(r);
    if (Ef.isForkEvent(r)) throw (ce.warn('not implemented'), new Error('not implemented'));
    if (r && typeof r == 'object') return 'filter:' + (r.address || '*') + ':' + yo(r.topics || []);
  }
  throw new Error('invalid event - ' + r);
}
function Gi() {
  return new Date().getTime();
}
function wo(r) {
  return new Promise((t) => {
    setTimeout(t, r);
  });
}
const hl = ['block', 'network', 'pending', 'poll'];
class ll {
  constructor(t, e, i) {
    $(this, 'tag', t),
      $(this, 'listener', e),
      $(this, 'once', i),
      (this._lastBlockNumber = -2),
      (this._inflight = !1);
  }
  get event() {
    switch (this.type) {
      case 'tx':
        return this.hash;
      case 'filter':
        return this.filter;
    }
    return this.tag;
  }
  get type() {
    return this.tag.split(':')[0];
  }
  get hash() {
    const t = this.tag.split(':');
    return t[0] !== 'tx' ? null : t[1];
  }
  get filter() {
    const t = this.tag.split(':');
    if (t[0] !== 'filter') return null;
    const e = t[1],
      i = ul(t[2]),
      n = {};
    return i.length > 0 && (n.topics = i), e && e !== '*' && (n.address = e), n;
  }
  pollable() {
    return this.tag.indexOf(':') >= 0 || hl.indexOf(this.tag) >= 0;
  }
}
const cl = {
  0: { symbol: 'btc', p2pkh: 0, p2sh: 5, prefix: 'bc' },
  2: { symbol: 'ltc', p2pkh: 48, p2sh: 50, prefix: 'ltc' },
  3: { symbol: 'doge', p2pkh: 30, p2sh: 22 },
  60: { symbol: 'eth', ilk: 'eth' },
  61: { symbol: 'etc', ilk: 'eth' },
  700: { symbol: 'xdai', ilk: 'eth' },
};
function ss(r) {
  return je(ut.from(r).toHexString(), 32);
}
function bo(r) {
  return fs.encode(vr([r, er(qs(qs(r)), 0, 4)]));
}
const Da = new RegExp('^(ipfs)://(.*)$', 'i'),
  Ao = [
    new RegExp('^(https)://(.*)$', 'i'),
    new RegExp('^(data):(.*)$', 'i'),
    Da,
    new RegExp('^eip155:[0-9]+/(erc[0-9]+):(.*)$', 'i'),
  ];
function xn(r, t) {
  try {
    return an(Xi(r, t));
  } catch {}
  return null;
}
function Xi(r, t) {
  if (r === '0x') return null;
  const e = ut.from(er(r, t, t + 32)).toNumber(),
    i = ut.from(er(r, e, e + 32)).toNumber();
  return er(r, e + 32, e + 32 + i);
}
function os(r) {
  return (
    r.match(/^ipfs:\/\/ipfs\//i)
      ? (r = r.substring(12))
      : r.match(/^ipfs:\/\//i)
        ? (r = r.substring(7))
        : ce.throwArgumentError('unsupported IPFS format', 'link', r),
    `https://gateway.ipfs.io/ipfs/${r}`
  );
}
function xo(r) {
  const t = re(r);
  if (t.length > 32) throw new Error('internal; should not happen');
  const e = new Uint8Array(32);
  return e.set(t, 32 - t.length), e;
}
function dl(r) {
  if (r.length % 32 === 0) return r;
  const t = new Uint8Array(Math.ceil(r.length / 32) * 32);
  return t.set(r), t;
}
function za(r) {
  const t = [];
  let e = 0;
  for (let i = 0; i < r.length; i++) t.push(null), (e += 32);
  for (let i = 0; i < r.length; i++) {
    const n = re(r[i]);
    (t[i] = xo(e)), t.push(xo(n.length)), t.push(dl(n)), (e += 32 + Math.ceil(n.length / 32) * 32);
  }
  return ur(t);
}
class Eo {
  constructor(t, e, i, n) {
    $(this, 'provider', t),
      $(this, 'name', i),
      $(this, 'address', t.formatter.address(e)),
      $(this, '_resolvedAddress', n);
  }
  supportsWildcard() {
    return (
      this._supportsEip2544 ||
        (this._supportsEip2544 = this.provider
          .call({
            to: this.address,
            data: '0x01ffc9a79061b92300000000000000000000000000000000000000000000000000000000',
          })
          .then((t) => ut.from(t).eq(1))
          .catch((t) => {
            if (t.code === z.errors.CALL_EXCEPTION) return !1;
            throw ((this._supportsEip2544 = null), t);
          })),
      this._supportsEip2544
    );
  }
  _fetch(t, e) {
    return ne(this, void 0, void 0, function* () {
      const i = { to: this.address, ccipReadEnabled: !0, data: ur([t, wn(this.name), e || '0x']) };
      let n = !1;
      (yield this.supportsWildcard()) &&
        ((n = !0), (i.data = ur(['0x9061b923', za([au(this.name), i.data])])));
      try {
        let s = yield this.provider.call(i);
        return (
          re(s).length % 32 === 4 &&
            ce.throwError('resolver threw error', z.errors.CALL_EXCEPTION, {
              transaction: i,
              data: s,
            }),
          n && (s = Xi(s, 0)),
          s
        );
      } catch (s) {
        if (s.code === z.errors.CALL_EXCEPTION) return null;
        throw s;
      }
    });
  }
  _fetchBytes(t, e) {
    return ne(this, void 0, void 0, function* () {
      const i = yield this._fetch(t, e);
      return i != null ? Xi(i, 0) : null;
    });
  }
  _getAddress(t, e) {
    const i = cl[String(t)];
    if (
      (i == null &&
        ce.throwError(`unsupported coin type: ${t}`, z.errors.UNSUPPORTED_OPERATION, {
          operation: `getAddress(${t})`,
        }),
      i.ilk === 'eth')
    )
      return this.provider.formatter.address(e);
    const n = re(e);
    if (i.p2pkh != null) {
      const s = e.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);
      if (s) {
        const u = parseInt(s[1], 16);
        if (s[2].length === u * 2 && u >= 1 && u <= 75) return bo(vr([[i.p2pkh], '0x' + s[2]]));
      }
    }
    if (i.p2sh != null) {
      const s = e.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);
      if (s) {
        const u = parseInt(s[1], 16);
        if (s[2].length === u * 2 && u >= 1 && u <= 75) return bo(vr([[i.p2sh], '0x' + s[2]]));
      }
    }
    if (i.prefix != null) {
      const s = n[1];
      let u = n[0];
      if (
        (u === 0 ? s !== 20 && s !== 32 && (u = -1) : (u = -1),
        u >= 0 && n.length === 2 + s && s >= 1 && s <= 75)
      ) {
        const d = mo.toWords(n.slice(2));
        return d.unshift(u), mo.encode(i.prefix, d);
      }
    }
    return null;
  }
  getAddress(t) {
    return ne(this, void 0, void 0, function* () {
      if ((t == null && (t = 60), t === 60))
        try {
          const n = yield this._fetch('0x3b3b57de');
          return n === '0x' || n === Bf ? null : this.provider.formatter.callAddress(n);
        } catch (n) {
          if (n.code === z.errors.CALL_EXCEPTION) return null;
          throw n;
        }
      const e = yield this._fetchBytes('0xf1cb7e06', ss(t));
      if (e == null || e === '0x') return null;
      const i = this._getAddress(t, e);
      return (
        i == null &&
          ce.throwError('invalid or unsupported coin data', z.errors.UNSUPPORTED_OPERATION, {
            operation: `getAddress(${t})`,
            coinType: t,
            data: e,
          }),
        i
      );
    });
  }
  getAvatar() {
    return ne(this, void 0, void 0, function* () {
      const t = [{ type: 'name', content: this.name }];
      try {
        const e = yield this.getText('avatar');
        if (e == null) return null;
        for (let i = 0; i < Ao.length; i++) {
          const n = e.match(Ao[i]);
          if (n == null) continue;
          const s = n[1].toLowerCase();
          switch (s) {
            case 'https':
              return t.push({ type: 'url', content: e }), { linkage: t, url: e };
            case 'data':
              return t.push({ type: 'data', content: e }), { linkage: t, url: e };
            case 'ipfs':
              return t.push({ type: 'ipfs', content: e }), { linkage: t, url: os(e) };
            case 'erc721':
            case 'erc1155': {
              const u = s === 'erc721' ? '0xc87b56dd' : '0x0e89341c';
              t.push({ type: s, content: e });
              const d = this._resolvedAddress || (yield this.getAddress()),
                v = (n[2] || '').split('/');
              if (v.length !== 2) return null;
              const E = yield this.provider.formatter.address(v[0]),
                S = je(ut.from(v[1]).toHexString(), 32);
              if (s === 'erc721') {
                const j = this.provider.formatter.callAddress(
                  yield this.provider.call({ to: E, data: ur(['0x6352211e', S]) })
                );
                if (d !== j) return null;
                t.push({ type: 'owner', content: j });
              } else if (s === 'erc1155') {
                const j = ut.from(
                  yield this.provider.call({ to: E, data: ur(['0x00fdd58e', je(d, 32), S]) })
                );
                if (j.isZero()) return null;
                t.push({ type: 'balance', content: j.toString() });
              }
              const P = { to: this.provider.formatter.address(v[0]), data: ur([u, S]) };
              let I = xn(yield this.provider.call(P), 0);
              if (I == null) return null;
              t.push({ type: 'metadata-url-base', content: I }),
                s === 'erc1155' &&
                  ((I = I.replace('{id}', S.substring(2))),
                  t.push({ type: 'metadata-url-expanded', content: I })),
                I.match(/^ipfs:/i) && (I = os(I)),
                t.push({ type: 'metadata-url', content: I });
              const R = yield zs(I);
              if (!R) return null;
              t.push({ type: 'metadata', content: JSON.stringify(R) });
              let C = R.image;
              if (typeof C != 'string') return null;
              if (!C.match(/^(https:\/\/|data:)/i)) {
                if (C.match(Da) == null) return null;
                t.push({ type: 'url-ipfs', content: C }), (C = os(C));
              }
              return t.push({ type: 'url', content: C }), { linkage: t, url: C };
            }
          }
        }
      } catch {}
      return null;
    });
  }
  getContentHash() {
    return ne(this, void 0, void 0, function* () {
      const t = yield this._fetchBytes('0xbc1c58d1');
      if (t == null || t === '0x') return null;
      const e = t.match(/^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
      if (e) {
        const u = parseInt(e[3], 16);
        if (e[4].length === u * 2) return 'ipfs://' + fs.encode('0x' + e[1]);
      }
      const i = t.match(/^0xe5010172(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
      if (i) {
        const u = parseInt(i[3], 16);
        if (i[4].length === u * 2) return 'ipns://' + fs.encode('0x' + i[1]);
      }
      const n = t.match(/^0xe40101fa011b20([0-9a-f]*)$/);
      if (n && n[1].length === 32 * 2) return 'bzz://' + n[1];
      const s = t.match(/^0x90b2c605([0-9a-f]*)$/);
      if (s && s[1].length === 34 * 2) {
        const u = { '=': '', '+': '-', '/': '_' };
        return 'sia://' + Yo('0x' + s[1]).replace(/[=+\/]/g, (v) => u[v]);
      }
      return ce.throwError(
        'invalid or unsupported content hash data',
        z.errors.UNSUPPORTED_OPERATION,
        { operation: 'getContentHash()', data: t }
      );
    });
  }
  getText(t) {
    return ne(this, void 0, void 0, function* () {
      let e = Wr(t);
      (e = vr([ss(64), ss(e.length), e])),
        e.length % 32 !== 0 && (e = vr([e, je('0x', 32 - (t.length % 32))]));
      const i = yield this._fetchBytes('0x59d1d43c', $t(e));
      return i == null || i === '0x' ? null : an(i);
    });
  }
}
let as = null,
  gl = 1;
class pl extends On {
  constructor(t) {
    if (
      (super(),
      (this._events = []),
      (this._emitted = { block: -2 }),
      (this.disableCcipRead = !1),
      (this.formatter = new.target.getFormatter()),
      $(this, 'anyNetwork', t === 'any'),
      this.anyNetwork && (t = this.detectNetwork()),
      t instanceof Promise)
    )
      (this._networkPromise = t), t.catch((e) => {}), this._ready().catch((e) => {});
    else {
      const e = Vr(new.target, 'getNetwork')(t);
      e
        ? ($(this, '_network', e), this.emit('network', e, null))
        : ce.throwArgumentError('invalid network', 'network', t);
    }
    (this._maxInternalBlockNumber = -1024),
      (this._lastBlockNumber = -2),
      (this._maxFilterBlockRange = 10),
      (this._pollingInterval = 4e3),
      (this._fastQueryDate = 0);
  }
  _ready() {
    return ne(this, void 0, void 0, function* () {
      if (this._network == null) {
        let t = null;
        if (this._networkPromise)
          try {
            t = yield this._networkPromise;
          } catch {}
        t == null && (t = yield this.detectNetwork()),
          t || ce.throwError('no network detected', z.errors.UNKNOWN_ERROR, {}),
          this._network == null &&
            (this.anyNetwork ? (this._network = t) : $(this, '_network', t),
            this.emit('network', t, null));
      }
      return this._network;
    });
  }
  get ready() {
    return Vi(() =>
      this._ready().then(
        (t) => t,
        (t) => {
          if (!(t.code === z.errors.NETWORK_ERROR && t.event === 'noNetwork')) throw t;
        }
      )
    );
  }
  static getFormatter() {
    return as == null && (as = new gt()), as;
  }
  static getNetwork(t) {
    return Jh(t ?? 'homestead');
  }
  ccipReadFetch(t, e, i) {
    return ne(this, void 0, void 0, function* () {
      if (this.disableCcipRead || i.length === 0) return null;
      const n = t.to.toLowerCase(),
        s = e.toLowerCase(),
        u = [];
      for (let d = 0; d < i.length; d++) {
        const v = i[d],
          E = v.replace('{sender}', n).replace('{data}', s),
          S = v.indexOf('{data}') >= 0 ? null : JSON.stringify({ data: s, sender: n }),
          P = yield zs(
            { url: E, errorPassThrough: !0 },
            S,
            (R, C) => ((R.status = C.statusCode), R)
          );
        if (P.data) return P.data;
        const I = P.message || 'unknown error';
        if (P.status >= 400 && P.status < 500)
          return ce.throwError(
            `response not found during CCIP fetch: ${I}`,
            z.errors.SERVER_ERROR,
            { url: v, errorMessage: I }
          );
        u.push(I);
      }
      return ce.throwError(
        `error encountered during CCIP fetch: ${u.map((d) => JSON.stringify(d)).join(', ')}`,
        z.errors.SERVER_ERROR,
        { urls: i, errorMessages: u }
      );
    });
  }
  _getInternalBlockNumber(t) {
    return ne(this, void 0, void 0, function* () {
      if ((yield this._ready(), t > 0))
        for (; this._internalBlockNumber; ) {
          const n = this._internalBlockNumber;
          try {
            const s = yield n;
            if (Gi() - s.respTime <= t) return s.blockNumber;
            break;
          } catch {
            if (this._internalBlockNumber === n) break;
          }
        }
      const e = Gi(),
        i = ze({
          blockNumber: this.perform('getBlockNumber', {}),
          networkError: this.getNetwork().then(
            (n) => null,
            (n) => n
          ),
        }).then(({ blockNumber: n, networkError: s }) => {
          if (s) throw (this._internalBlockNumber === i && (this._internalBlockNumber = null), s);
          const u = Gi();
          return (
            (n = ut.from(n).toNumber()),
            n < this._maxInternalBlockNumber && (n = this._maxInternalBlockNumber),
            (this._maxInternalBlockNumber = n),
            this._setFastBlockNumber(n),
            { blockNumber: n, reqTime: e, respTime: u }
          );
        });
      return (
        (this._internalBlockNumber = i),
        i.catch((n) => {
          this._internalBlockNumber === i && (this._internalBlockNumber = null);
        }),
        (yield i).blockNumber
      );
    });
  }
  poll() {
    return ne(this, void 0, void 0, function* () {
      const t = gl++,
        e = [];
      let i = null;
      try {
        i = yield this._getInternalBlockNumber(100 + this.pollingInterval / 2);
      } catch (n) {
        this.emit('error', n);
        return;
      }
      if ((this._setFastBlockNumber(i), this.emit('poll', t, i), i === this._lastBlockNumber)) {
        this.emit('didPoll', t);
        return;
      }
      if (
        (this._emitted.block === -2 && (this._emitted.block = i - 1),
        Math.abs(this._emitted.block - i) > 1e3)
      )
        ce.warn(
          `network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${i})`
        ),
          this.emit(
            'error',
            ce.makeError('network block skew detected', z.errors.NETWORK_ERROR, {
              blockNumber: i,
              event: 'blockSkew',
              previousBlockNumber: this._emitted.block,
            })
          ),
          this.emit('block', i);
      else for (let n = this._emitted.block + 1; n <= i; n++) this.emit('block', n);
      this._emitted.block !== i &&
        ((this._emitted.block = i),
        Object.keys(this._emitted).forEach((n) => {
          if (n === 'block') return;
          const s = this._emitted[n];
          s !== 'pending' && i - s > 12 && delete this._emitted[n];
        })),
        this._lastBlockNumber === -2 && (this._lastBlockNumber = i - 1),
        this._events.forEach((n) => {
          switch (n.type) {
            case 'tx': {
              const s = n.hash;
              let u = this.getTransactionReceipt(s)
                .then(
                  (d) => (
                    !d ||
                      d.blockNumber == null ||
                      ((this._emitted['t:' + s] = d.blockNumber), this.emit(s, d)),
                    null
                  )
                )
                .catch((d) => {
                  this.emit('error', d);
                });
              e.push(u);
              break;
            }
            case 'filter': {
              if (!n._inflight) {
                (n._inflight = !0), n._lastBlockNumber === -2 && (n._lastBlockNumber = i - 1);
                const s = n.filter;
                (s.fromBlock = n._lastBlockNumber + 1), (s.toBlock = i);
                const u = s.toBlock - this._maxFilterBlockRange;
                u > s.fromBlock && (s.fromBlock = u), s.fromBlock < 0 && (s.fromBlock = 0);
                const d = this.getLogs(s)
                  .then((v) => {
                    (n._inflight = !1),
                      v.length !== 0 &&
                        v.forEach((E) => {
                          E.blockNumber > n._lastBlockNumber &&
                            (n._lastBlockNumber = E.blockNumber),
                            (this._emitted['b:' + E.blockHash] = E.blockNumber),
                            (this._emitted['t:' + E.transactionHash] = E.blockNumber),
                            this.emit(s, E);
                        });
                  })
                  .catch((v) => {
                    this.emit('error', v), (n._inflight = !1);
                  });
                e.push(d);
              }
              break;
            }
          }
        }),
        (this._lastBlockNumber = i),
        Promise.all(e)
          .then(() => {
            this.emit('didPoll', t);
          })
          .catch((n) => {
            this.emit('error', n);
          });
    });
  }
  resetEventsBlock(t) {
    (this._lastBlockNumber = t - 1), this.polling && this.poll();
  }
  get network() {
    return this._network;
  }
  detectNetwork() {
    return ne(this, void 0, void 0, function* () {
      return ce.throwError(
        'provider does not support network detection',
        z.errors.UNSUPPORTED_OPERATION,
        { operation: 'provider.detectNetwork' }
      );
    });
  }
  getNetwork() {
    return ne(this, void 0, void 0, function* () {
      const t = yield this._ready(),
        e = yield this.detectNetwork();
      if (t.chainId !== e.chainId) {
        if (this.anyNetwork)
          return (
            (this._network = e),
            (this._lastBlockNumber = -2),
            (this._fastBlockNumber = null),
            (this._fastBlockNumberPromise = null),
            (this._fastQueryDate = 0),
            (this._emitted.block = -2),
            (this._maxInternalBlockNumber = -1024),
            (this._internalBlockNumber = null),
            this.emit('network', e, t),
            yield wo(0),
            this._network
          );
        const i = ce.makeError('underlying network changed', z.errors.NETWORK_ERROR, {
          event: 'changed',
          network: t,
          detectedNetwork: e,
        });
        throw (this.emit('error', i), i);
      }
      return t;
    });
  }
  get blockNumber() {
    return (
      this._getInternalBlockNumber(100 + this.pollingInterval / 2).then(
        (t) => {
          this._setFastBlockNumber(t);
        },
        (t) => {}
      ),
      this._fastBlockNumber != null ? this._fastBlockNumber : -1
    );
  }
  get polling() {
    return this._poller != null;
  }
  set polling(t) {
    t && !this._poller
      ? ((this._poller = setInterval(() => {
          this.poll();
        }, this.pollingInterval)),
        this._bootstrapPoll ||
          (this._bootstrapPoll = setTimeout(() => {
            this.poll(),
              (this._bootstrapPoll = setTimeout(() => {
                this._poller || this.poll(), (this._bootstrapPoll = null);
              }, this.pollingInterval));
          }, 0)))
      : !t && this._poller && (clearInterval(this._poller), (this._poller = null));
  }
  get pollingInterval() {
    return this._pollingInterval;
  }
  set pollingInterval(t) {
    if (typeof t != 'number' || t <= 0 || parseInt(String(t)) != t)
      throw new Error('invalid polling interval');
    (this._pollingInterval = t),
      this._poller &&
        (clearInterval(this._poller),
        (this._poller = setInterval(() => {
          this.poll();
        }, this._pollingInterval)));
  }
  _getFastBlockNumber() {
    const t = Gi();
    return (
      t - this._fastQueryDate > 2 * this._pollingInterval &&
        ((this._fastQueryDate = t),
        (this._fastBlockNumberPromise = this.getBlockNumber().then(
          (e) => (
            (this._fastBlockNumber == null || e > this._fastBlockNumber) &&
              (this._fastBlockNumber = e),
            this._fastBlockNumber
          )
        ))),
      this._fastBlockNumberPromise
    );
  }
  _setFastBlockNumber(t) {
    (this._fastBlockNumber != null && t < this._fastBlockNumber) ||
      ((this._fastQueryDate = Gi()),
      (this._fastBlockNumber == null || t > this._fastBlockNumber) &&
        ((this._fastBlockNumber = t), (this._fastBlockNumberPromise = Promise.resolve(t))));
  }
  waitForTransaction(t, e, i) {
    return ne(this, void 0, void 0, function* () {
      return this._waitForTransaction(t, e ?? 1, i || 0, null);
    });
  }
  _waitForTransaction(t, e, i, n) {
    return ne(this, void 0, void 0, function* () {
      const s = yield this.getTransactionReceipt(t);
      return (s ? s.confirmations : 0) >= e
        ? s
        : new Promise((u, d) => {
            const v = [];
            let E = !1;
            const S = function () {
                return E
                  ? !0
                  : ((E = !0),
                    v.forEach((I) => {
                      I();
                    }),
                    !1);
              },
              P = (I) => {
                I.confirmations < e || S() || u(I);
              };
            if (
              (this.on(t, P),
              v.push(() => {
                this.removeListener(t, P);
              }),
              n)
            ) {
              let I = n.startBlock,
                R = null;
              const C = (j) =>
                ne(this, void 0, void 0, function* () {
                  E ||
                    (yield wo(1e3),
                    this.getTransactionCount(n.from).then(
                      (ct) =>
                        ne(this, void 0, void 0, function* () {
                          if (!E) {
                            if (ct <= n.nonce) I = j;
                            else {
                              {
                                const W = yield this.getTransaction(t);
                                if (W && W.blockNumber != null) return;
                              }
                              for (
                                R == null && ((R = I - 3), R < n.startBlock && (R = n.startBlock));
                                R <= j;

                              ) {
                                if (E) return;
                                const W = yield this.getBlockWithTransactions(R);
                                for (let B = 0; B < W.transactions.length; B++) {
                                  const Z = W.transactions[B];
                                  if (Z.hash === t) return;
                                  if (Z.from === n.from && Z.nonce === n.nonce) {
                                    if (E) return;
                                    const Y = yield this.waitForTransaction(Z.hash, e);
                                    if (S()) return;
                                    let tt = 'replaced';
                                    Z.data === n.data && Z.to === n.to && Z.value.eq(n.value)
                                      ? (tt = 'repriced')
                                      : Z.data === '0x' &&
                                        Z.from === Z.to &&
                                        Z.value.isZero() &&
                                        (tt = 'cancelled'),
                                      d(
                                        ce.makeError(
                                          'transaction was replaced',
                                          z.errors.TRANSACTION_REPLACED,
                                          {
                                            cancelled: tt === 'replaced' || tt === 'cancelled',
                                            reason: tt,
                                            replacement: this._wrapTransaction(Z),
                                            hash: t,
                                            receipt: Y,
                                          }
                                        )
                                      );
                                    return;
                                  }
                                }
                                R++;
                              }
                            }
                            E || this.once('block', C);
                          }
                        }),
                      (ct) => {
                        E || this.once('block', C);
                      }
                    ));
                });
              if (E) return;
              this.once('block', C),
                v.push(() => {
                  this.removeListener('block', C);
                });
            }
            if (typeof i == 'number' && i > 0) {
              const I = setTimeout(() => {
                S() || d(ce.makeError('timeout exceeded', z.errors.TIMEOUT, { timeout: i }));
              }, i);
              I.unref && I.unref(),
                v.push(() => {
                  clearTimeout(I);
                });
            }
          });
    });
  }
  getBlockNumber() {
    return ne(this, void 0, void 0, function* () {
      return this._getInternalBlockNumber(0);
    });
  }
  getGasPrice() {
    return ne(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const t = yield this.perform('getGasPrice', {});
      try {
        return ut.from(t);
      } catch (e) {
        return ce.throwError('bad result from backend', z.errors.SERVER_ERROR, {
          method: 'getGasPrice',
          result: t,
          error: e,
        });
      }
    });
  }
  getBalance(t, e) {
    return ne(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const i = yield ze({ address: this._getAddress(t), blockTag: this._getBlockTag(e) }),
        n = yield this.perform('getBalance', i);
      try {
        return ut.from(n);
      } catch (s) {
        return ce.throwError('bad result from backend', z.errors.SERVER_ERROR, {
          method: 'getBalance',
          params: i,
          result: n,
          error: s,
        });
      }
    });
  }
  getTransactionCount(t, e) {
    return ne(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const i = yield ze({ address: this._getAddress(t), blockTag: this._getBlockTag(e) }),
        n = yield this.perform('getTransactionCount', i);
      try {
        return ut.from(n).toNumber();
      } catch (s) {
        return ce.throwError('bad result from backend', z.errors.SERVER_ERROR, {
          method: 'getTransactionCount',
          params: i,
          result: n,
          error: s,
        });
      }
    });
  }
  getCode(t, e) {
    return ne(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const i = yield ze({ address: this._getAddress(t), blockTag: this._getBlockTag(e) }),
        n = yield this.perform('getCode', i);
      try {
        return $t(n);
      } catch (s) {
        return ce.throwError('bad result from backend', z.errors.SERVER_ERROR, {
          method: 'getCode',
          params: i,
          result: n,
          error: s,
        });
      }
    });
  }
  getStorageAt(t, e, i) {
    return ne(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const n = yield ze({
          address: this._getAddress(t),
          blockTag: this._getBlockTag(i),
          position: Promise.resolve(e).then((u) => Es(u)),
        }),
        s = yield this.perform('getStorageAt', n);
      try {
        return $t(s);
      } catch (u) {
        return ce.throwError('bad result from backend', z.errors.SERVER_ERROR, {
          method: 'getStorageAt',
          params: n,
          result: s,
          error: u,
        });
      }
    });
  }
  _wrapTransaction(t, e, i) {
    if (e != null && Ai(e) !== 32) throw new Error('invalid response - sendTransaction');
    const n = t;
    return (
      e != null &&
        t.hash !== e &&
        ce.throwError(
          'Transaction hash mismatch from Provider.sendTransaction.',
          z.errors.UNKNOWN_ERROR,
          { expectedHash: t.hash, returnedHash: e }
        ),
      (n.wait = (s, u) =>
        ne(this, void 0, void 0, function* () {
          s == null && (s = 1), u == null && (u = 0);
          let d;
          s !== 0 &&
            i != null &&
            (d = {
              data: t.data,
              from: t.from,
              nonce: t.nonce,
              to: t.to,
              value: t.value,
              startBlock: i,
            });
          const v = yield this._waitForTransaction(t.hash, s, u, d);
          return v == null && s === 0
            ? null
            : ((this._emitted['t:' + t.hash] = v.blockNumber),
              v.status === 0 &&
                ce.throwError('transaction failed', z.errors.CALL_EXCEPTION, {
                  transactionHash: t.hash,
                  transaction: t,
                  receipt: v,
                }),
              v);
        })),
      n
    );
  }
  sendTransaction(t) {
    return ne(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const e = yield Promise.resolve(t).then((s) => $t(s)),
        i = this.formatter.transaction(t);
      i.confirmations == null && (i.confirmations = 0);
      const n = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
      try {
        const s = yield this.perform('sendTransaction', { signedTransaction: e });
        return this._wrapTransaction(i, s, n);
      } catch (s) {
        throw ((s.transaction = i), (s.transactionHash = i.hash), s);
      }
    });
  }
  _getTransactionRequest(t) {
    return ne(this, void 0, void 0, function* () {
      const e = yield t,
        i = {};
      return (
        ['from', 'to'].forEach((n) => {
          e[n] != null &&
            (i[n] = Promise.resolve(e[n]).then((s) => (s ? this._getAddress(s) : null)));
        }),
        ['gasLimit', 'gasPrice', 'maxFeePerGas', 'maxPriorityFeePerGas', 'value'].forEach((n) => {
          e[n] != null && (i[n] = Promise.resolve(e[n]).then((s) => (s ? ut.from(s) : null)));
        }),
        ['type'].forEach((n) => {
          e[n] != null && (i[n] = Promise.resolve(e[n]).then((s) => s ?? null));
        }),
        e.accessList && (i.accessList = this.formatter.accessList(e.accessList)),
        ['data'].forEach((n) => {
          e[n] != null && (i[n] = Promise.resolve(e[n]).then((s) => (s ? $t(s) : null)));
        }),
        this.formatter.transactionRequest(yield ze(i))
      );
    });
  }
  _getFilter(t) {
    return ne(this, void 0, void 0, function* () {
      t = yield t;
      const e = {};
      return (
        t.address != null && (e.address = this._getAddress(t.address)),
        ['blockHash', 'topics'].forEach((i) => {
          t[i] != null && (e[i] = t[i]);
        }),
        ['fromBlock', 'toBlock'].forEach((i) => {
          t[i] != null && (e[i] = this._getBlockTag(t[i]));
        }),
        this.formatter.filter(yield ze(e))
      );
    });
  }
  _call(t, e, i) {
    return ne(this, void 0, void 0, function* () {
      i >= fl &&
        ce.throwError('CCIP read exceeded maximum redirections', z.errors.SERVER_ERROR, {
          redirects: i,
          transaction: t,
        });
      const n = t.to,
        s = yield this.perform('call', { transaction: t, blockTag: e });
      if (
        i >= 0 &&
        e === 'latest' &&
        n != null &&
        s.substring(0, 10) === '0x556f1830' &&
        Ai(s) % 32 === 4
      )
        try {
          const u = er(s, 4),
            d = er(u, 0, 32);
          ut.from(d).eq(n) ||
            ce.throwError('CCIP Read sender did not match', z.errors.CALL_EXCEPTION, {
              name: 'OffchainLookup',
              signature: 'OffchainLookup(address,string[],bytes,bytes4,bytes)',
              transaction: t,
              data: s,
            });
          const v = [],
            E = ut.from(er(u, 32, 64)).toNumber(),
            S = ut.from(er(u, E, E + 32)).toNumber(),
            P = er(u, E + 32);
          for (let W = 0; W < S; W++) {
            const B = xn(P, W * 32);
            B == null &&
              ce.throwError('CCIP Read contained corrupt URL string', z.errors.CALL_EXCEPTION, {
                name: 'OffchainLookup',
                signature: 'OffchainLookup(address,string[],bytes,bytes4,bytes)',
                transaction: t,
                data: s,
              }),
              v.push(B);
          }
          const I = Xi(u, 64);
          ut.from(er(u, 100, 128)).isZero() ||
            ce.throwError('CCIP Read callback selector included junk', z.errors.CALL_EXCEPTION, {
              name: 'OffchainLookup',
              signature: 'OffchainLookup(address,string[],bytes,bytes4,bytes)',
              transaction: t,
              data: s,
            });
          const R = er(u, 96, 100),
            C = Xi(u, 128),
            j = yield this.ccipReadFetch(t, I, v);
          j == null &&
            ce.throwError('CCIP Read disabled or provided no URLs', z.errors.CALL_EXCEPTION, {
              name: 'OffchainLookup',
              signature: 'OffchainLookup(address,string[],bytes,bytes4,bytes)',
              transaction: t,
              data: s,
            });
          const ct = { to: n, data: ur([R, za([j, C])]) };
          return this._call(ct, e, i + 1);
        } catch (u) {
          if (u.code === z.errors.SERVER_ERROR) throw u;
        }
      try {
        return $t(s);
      } catch (u) {
        return ce.throwError('bad result from backend', z.errors.SERVER_ERROR, {
          method: 'call',
          params: { transaction: t, blockTag: e },
          result: s,
          error: u,
        });
      }
    });
  }
  call(t, e) {
    return ne(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const i = yield ze({
        transaction: this._getTransactionRequest(t),
        blockTag: this._getBlockTag(e),
        ccipReadEnabled: Promise.resolve(t.ccipReadEnabled),
      });
      return this._call(i.transaction, i.blockTag, i.ccipReadEnabled ? 0 : -1);
    });
  }
  estimateGas(t) {
    return ne(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const e = yield ze({ transaction: this._getTransactionRequest(t) }),
        i = yield this.perform('estimateGas', e);
      try {
        return ut.from(i);
      } catch (n) {
        return ce.throwError('bad result from backend', z.errors.SERVER_ERROR, {
          method: 'estimateGas',
          params: e,
          result: i,
          error: n,
        });
      }
    });
  }
  _getAddress(t) {
    return ne(this, void 0, void 0, function* () {
      (t = yield t),
        typeof t != 'string' && ce.throwArgumentError('invalid address or ENS name', 'name', t);
      const e = yield this.resolveName(t);
      return (
        e == null &&
          ce.throwError('ENS name not configured', z.errors.UNSUPPORTED_OPERATION, {
            operation: `resolveName(${JSON.stringify(t)})`,
          }),
        e
      );
    });
  }
  _getBlock(t, e) {
    return ne(this, void 0, void 0, function* () {
      yield this.getNetwork(), (t = yield t);
      let i = -128;
      const n = { includeTransactions: !!e };
      if (De(t, 32)) n.blockHash = t;
      else
        try {
          (n.blockTag = yield this._getBlockTag(t)),
            De(n.blockTag) && (i = parseInt(n.blockTag.substring(2), 16));
        } catch {
          ce.throwArgumentError('invalid block hash or block tag', 'blockHashOrBlockTag', t);
        }
      return Vi(
        () =>
          ne(this, void 0, void 0, function* () {
            const s = yield this.perform('getBlock', n);
            if (s == null)
              return (n.blockHash != null && this._emitted['b:' + n.blockHash] == null) ||
                (n.blockTag != null && i > this._emitted.block)
                ? null
                : void 0;
            if (e) {
              let u = null;
              for (let v = 0; v < s.transactions.length; v++) {
                const E = s.transactions[v];
                if (E.blockNumber == null) E.confirmations = 0;
                else if (E.confirmations == null) {
                  u == null &&
                    (u = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval));
                  let S = u - E.blockNumber + 1;
                  S <= 0 && (S = 1), (E.confirmations = S);
                }
              }
              const d = this.formatter.blockWithTransactions(s);
              return (d.transactions = d.transactions.map((v) => this._wrapTransaction(v))), d;
            }
            return this.formatter.block(s);
          }),
        { oncePoll: this }
      );
    });
  }
  getBlock(t) {
    return this._getBlock(t, !1);
  }
  getBlockWithTransactions(t) {
    return this._getBlock(t, !0);
  }
  getTransaction(t) {
    return ne(this, void 0, void 0, function* () {
      yield this.getNetwork(), (t = yield t);
      const e = { transactionHash: this.formatter.hash(t, !0) };
      return Vi(
        () =>
          ne(this, void 0, void 0, function* () {
            const i = yield this.perform('getTransaction', e);
            if (i == null) return this._emitted['t:' + t] == null ? null : void 0;
            const n = this.formatter.transactionResponse(i);
            if (n.blockNumber == null) n.confirmations = 0;
            else if (n.confirmations == null) {
              let u =
                (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) -
                n.blockNumber +
                1;
              u <= 0 && (u = 1), (n.confirmations = u);
            }
            return this._wrapTransaction(n);
          }),
        { oncePoll: this }
      );
    });
  }
  getTransactionReceipt(t) {
    return ne(this, void 0, void 0, function* () {
      yield this.getNetwork(), (t = yield t);
      const e = { transactionHash: this.formatter.hash(t, !0) };
      return Vi(
        () =>
          ne(this, void 0, void 0, function* () {
            const i = yield this.perform('getTransactionReceipt', e);
            if (i == null) return this._emitted['t:' + t] == null ? null : void 0;
            if (i.blockHash == null) return;
            const n = this.formatter.receipt(i);
            if (n.blockNumber == null) n.confirmations = 0;
            else if (n.confirmations == null) {
              let u =
                (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) -
                n.blockNumber +
                1;
              u <= 0 && (u = 1), (n.confirmations = u);
            }
            return n;
          }),
        { oncePoll: this }
      );
    });
  }
  getLogs(t) {
    return ne(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const e = yield ze({ filter: this._getFilter(t) }),
        i = yield this.perform('getLogs', e);
      return (
        i.forEach((n) => {
          n.removed == null && (n.removed = !1);
        }),
        gt.arrayOf(this.formatter.filterLog.bind(this.formatter))(i)
      );
    });
  }
  getEtherPrice() {
    return ne(this, void 0, void 0, function* () {
      return yield this.getNetwork(), this.perform('getEtherPrice', {});
    });
  }
  _getBlockTag(t) {
    return ne(this, void 0, void 0, function* () {
      if (((t = yield t), typeof t == 'number' && t < 0)) {
        t % 1 && ce.throwArgumentError('invalid BlockTag', 'blockTag', t);
        let e = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
        return (e += t), e < 0 && (e = 0), this.formatter.blockTag(e);
      }
      return this.formatter.blockTag(t);
    });
  }
  getResolver(t) {
    return ne(this, void 0, void 0, function* () {
      let e = t;
      for (;;) {
        if (e === '' || e === '.' || (t !== 'eth' && e === 'eth')) return null;
        const i = yield this._getResolver(e, 'getResolver');
        if (i != null) {
          const n = new Eo(this, i, t);
          return e !== t && !(yield n.supportsWildcard()) ? null : n;
        }
        e = e.split('.').slice(1).join('.');
      }
    });
  }
  _getResolver(t, e) {
    return ne(this, void 0, void 0, function* () {
      e == null && (e = 'ENS');
      const i = yield this.getNetwork();
      i.ensAddress ||
        ce.throwError('network does not support ENS', z.errors.UNSUPPORTED_OPERATION, {
          operation: e,
          network: i.name,
        });
      try {
        const n = yield this.call({ to: i.ensAddress, data: '0x0178b8bf' + wn(t).substring(2) });
        return this.formatter.callAddress(n);
      } catch {}
      return null;
    });
  }
  resolveName(t) {
    return ne(this, void 0, void 0, function* () {
      t = yield t;
      try {
        return Promise.resolve(this.formatter.address(t));
      } catch (i) {
        if (De(t)) throw i;
      }
      typeof t != 'string' && ce.throwArgumentError('invalid ENS name', 'name', t);
      const e = yield this.getResolver(t);
      return e ? yield e.getAddress() : null;
    });
  }
  lookupAddress(t) {
    return ne(this, void 0, void 0, function* () {
      (t = yield t), (t = this.formatter.address(t));
      const e = t.substring(2).toLowerCase() + '.addr.reverse',
        i = yield this._getResolver(e, 'lookupAddress');
      if (i == null) return null;
      const n = xn(yield this.call({ to: i, data: '0x691f3431' + wn(e).substring(2) }), 0);
      return (yield this.resolveName(n)) != t ? null : n;
    });
  }
  getAvatar(t) {
    return ne(this, void 0, void 0, function* () {
      let e = null;
      if (De(t)) {
        const s = this.formatter.address(t).substring(2).toLowerCase() + '.addr.reverse',
          u = yield this._getResolver(s, 'getAvatar');
        if (!u) return null;
        e = new Eo(this, u, s);
        try {
          const d = yield e.getAvatar();
          if (d) return d.url;
        } catch (d) {
          if (d.code !== z.errors.CALL_EXCEPTION) throw d;
        }
        try {
          const d = xn(yield this.call({ to: u, data: '0x691f3431' + wn(s).substring(2) }), 0);
          e = yield this.getResolver(d);
        } catch (d) {
          if (d.code !== z.errors.CALL_EXCEPTION) throw d;
          return null;
        }
      } else if (((e = yield this.getResolver(t)), !e)) return null;
      const i = yield e.getAvatar();
      return i == null ? null : i.url;
    });
  }
  perform(t, e) {
    return ce.throwError(t + ' not implemented', z.errors.NOT_IMPLEMENTED, { operation: t });
  }
  _startEvent(t) {
    this.polling = this._events.filter((e) => e.pollable()).length > 0;
  }
  _stopEvent(t) {
    this.polling = this._events.filter((e) => e.pollable()).length > 0;
  }
  _addEventListener(t, e, i) {
    const n = new ll(_i(t), e, i);
    return this._events.push(n), this._startEvent(n), this;
  }
  on(t, e) {
    return this._addEventListener(t, e, !1);
  }
  once(t, e) {
    return this._addEventListener(t, e, !0);
  }
  emit(t, ...e) {
    let i = !1,
      n = [],
      s = _i(t);
    return (
      (this._events = this._events.filter((u) =>
        u.tag !== s
          ? !0
          : (setTimeout(() => {
              u.listener.apply(this, e);
            }, 0),
            (i = !0),
            u.once ? (n.push(u), !1) : !0)
      )),
      n.forEach((u) => {
        this._stopEvent(u);
      }),
      i
    );
  }
  listenerCount(t) {
    if (!t) return this._events.length;
    let e = _i(t);
    return this._events.filter((i) => i.tag === e).length;
  }
  listeners(t) {
    if (t == null) return this._events.map((i) => i.listener);
    let e = _i(t);
    return this._events.filter((i) => i.tag === e).map((i) => i.listener);
  }
  off(t, e) {
    if (e == null) return this.removeAllListeners(t);
    const i = [];
    let n = !1,
      s = _i(t);
    return (
      (this._events = this._events.filter((u) =>
        u.tag !== s || u.listener != e || n ? !0 : ((n = !0), i.push(u), !1)
      )),
      i.forEach((u) => {
        this._stopEvent(u);
      }),
      this
    );
  }
  removeAllListeners(t) {
    let e = [];
    if (t == null) (e = this._events), (this._events = []);
    else {
      const i = _i(t);
      this._events = this._events.filter((n) => (n.tag !== i ? !0 : (e.push(n), !1)));
    }
    return (
      e.forEach((i) => {
        this._stopEvent(i);
      }),
      this
    );
  }
}
var ei = function (r, t, e, i) {
  function n(s) {
    return s instanceof e
      ? s
      : new e(function (u) {
          u(s);
        });
  }
  return new (e || (e = Promise))(function (s, u) {
    function d(S) {
      try {
        E(i.next(S));
      } catch (P) {
        u(P);
      }
    }
    function v(S) {
      try {
        E(i.throw(S));
      } catch (P) {
        u(P);
      }
    }
    function E(S) {
      S.done ? s(S.value) : n(S.value).then(d, v);
    }
    E((i = i.apply(r, t || [])).next());
  });
};
const Ke = new z(Zn),
  ml = ['call', 'estimateGas'];
function Ji(r, t) {
  if (r == null) return null;
  if (typeof r.message == 'string' && r.message.match('reverted')) {
    const e = De(r.data) ? r.data : null;
    if (!t || e) return { message: r.message, data: e };
  }
  if (typeof r == 'object') {
    for (const e in r) {
      const i = Ji(r[e], t);
      if (i) return i;
    }
    return null;
  }
  if (typeof r == 'string')
    try {
      return Ji(JSON.parse(r), t);
    } catch {}
  return null;
}
function Ka(r, t, e) {
  const i = e.transaction || e.signedTransaction;
  if (r === 'call') {
    const s = Ji(t, !0);
    if (s) return s.data;
    Ke.throwError(
      'missing revert data in call exception; Transaction reverted without a reason string',
      z.errors.CALL_EXCEPTION,
      { data: '0x', transaction: i, error: t }
    );
  }
  if (r === 'estimateGas') {
    let s = Ji(t.body, !1);
    s == null && (s = Ji(t, !1)),
      s &&
        Ke.throwError(
          'cannot estimate gas; transaction may fail or may require manual gas limit',
          z.errors.UNPREDICTABLE_GAS_LIMIT,
          { reason: s.message, method: r, transaction: i, error: t }
        );
  }
  let n = t.message;
  throw (
    (t.code === z.errors.SERVER_ERROR && t.error && typeof t.error.message == 'string'
      ? (n = t.error.message)
      : typeof t.body == 'string'
        ? (n = t.body)
        : typeof t.responseText == 'string' && (n = t.responseText),
    (n = (n || '').toLowerCase()),
    n.match(/insufficient funds|base fee exceeds gas limit|InsufficientFunds/i) &&
      Ke.throwError(
        'insufficient funds for intrinsic transaction cost',
        z.errors.INSUFFICIENT_FUNDS,
        { error: t, method: r, transaction: i }
      ),
    n.match(/nonce (is )?too low/i) &&
      Ke.throwError('nonce has already been used', z.errors.NONCE_EXPIRED, {
        error: t,
        method: r,
        transaction: i,
      }),
    n.match(/replacement transaction underpriced|transaction gas price.*too low/i) &&
      Ke.throwError('replacement fee too low', z.errors.REPLACEMENT_UNDERPRICED, {
        error: t,
        method: r,
        transaction: i,
      }),
    n.match(/only replay-protected/i) &&
      Ke.throwError(
        'legacy pre-eip-155 transactions not supported',
        z.errors.UNSUPPORTED_OPERATION,
        { error: t, method: r, transaction: i }
      ),
    ml.indexOf(r) >= 0 &&
      n.match(
        /gas required exceeds allowance|always failing transaction|execution reverted|revert/
      ) &&
      Ke.throwError(
        'cannot estimate gas; transaction may fail or may require manual gas limit',
        z.errors.UNPREDICTABLE_GAS_LIMIT,
        { error: t, method: r, transaction: i }
      ),
    t)
  );
}
function Mo(r) {
  return new Promise(function (t) {
    setTimeout(t, r);
  });
}
function vl(r) {
  if (r.error) {
    const t = new Error(r.error.message);
    throw ((t.code = r.error.code), (t.data = r.error.data), t);
  }
  return r.result;
}
function ji(r) {
  return r && r.toLowerCase();
}
const ws = {};
class qa extends on {
  constructor(t, e, i) {
    if ((super(), t !== ws))
      throw new Error('do not call the JsonRpcSigner constructor directly; use provider.getSigner');
    $(this, 'provider', e),
      i == null && (i = 0),
      typeof i == 'string'
        ? ($(this, '_address', this.provider.formatter.address(i)), $(this, '_index', null))
        : typeof i == 'number'
          ? ($(this, '_index', i), $(this, '_address', null))
          : Ke.throwArgumentError('invalid address or index', 'addressOrIndex', i);
  }
  connect(t) {
    return Ke.throwError(
      'cannot alter JSON-RPC Signer connection',
      z.errors.UNSUPPORTED_OPERATION,
      { operation: 'connect' }
    );
  }
  connectUnchecked() {
    return new yl(ws, this.provider, this._address || this._index);
  }
  getAddress() {
    return this._address
      ? Promise.resolve(this._address)
      : this.provider
          .send('eth_accounts', [])
          .then(
            (t) => (
              t.length <= this._index &&
                Ke.throwError('unknown account #' + this._index, z.errors.UNSUPPORTED_OPERATION, {
                  operation: 'getAddress',
                }),
              this.provider.formatter.address(t[this._index])
            )
          );
  }
  sendUncheckedTransaction(t) {
    t = Ge(t);
    const e = this.getAddress().then((i) => (i && (i = i.toLowerCase()), i));
    if (t.gasLimit == null) {
      const i = Ge(t);
      (i.from = e), (t.gasLimit = this.provider.estimateGas(i));
    }
    return (
      t.to != null &&
        (t.to = Promise.resolve(t.to).then((i) =>
          ei(this, void 0, void 0, function* () {
            if (i == null) return null;
            const n = yield this.provider.resolveName(i);
            return (
              n == null && Ke.throwArgumentError('provided ENS name resolves to null', 'tx.to', i),
              n
            );
          })
        )),
      ze({ tx: ze(t), sender: e }).then(({ tx: i, sender: n }) => {
        i.from != null
          ? i.from.toLowerCase() !== n &&
            Ke.throwArgumentError('from address mismatch', 'transaction', t)
          : (i.from = n);
        const s = this.provider.constructor.hexlifyTransaction(i, { from: !0 });
        return this.provider.send('eth_sendTransaction', [s]).then(
          (u) => u,
          (u) => (
            typeof u.message == 'string' &&
              u.message.match(/user denied/i) &&
              Ke.throwError('user rejected transaction', z.errors.ACTION_REJECTED, {
                action: 'sendTransaction',
                transaction: i,
              }),
            Ka('sendTransaction', u, s)
          )
        );
      })
    );
  }
  signTransaction(t) {
    return Ke.throwError('signing transactions is unsupported', z.errors.UNSUPPORTED_OPERATION, {
      operation: 'signTransaction',
    });
  }
  sendTransaction(t) {
    return ei(this, void 0, void 0, function* () {
      const e = yield this.provider._getInternalBlockNumber(
          100 + 2 * this.provider.pollingInterval
        ),
        i = yield this.sendUncheckedTransaction(t);
      try {
        return yield Vi(
          () =>
            ei(this, void 0, void 0, function* () {
              const n = yield this.provider.getTransaction(i);
              if (n !== null) return this.provider._wrapTransaction(n, i, e);
            }),
          { oncePoll: this.provider }
        );
      } catch (n) {
        throw ((n.transactionHash = i), n);
      }
    });
  }
  signMessage(t) {
    return ei(this, void 0, void 0, function* () {
      const e = typeof t == 'string' ? Wr(t) : t,
        i = yield this.getAddress();
      try {
        return yield this.provider.send('personal_sign', [$t(e), i.toLowerCase()]);
      } catch (n) {
        throw (
          (typeof n.message == 'string' &&
            n.message.match(/user denied/i) &&
            Ke.throwError('user rejected signing', z.errors.ACTION_REJECTED, {
              action: 'signMessage',
              from: i,
              messageData: t,
            }),
          n)
        );
      }
    });
  }
  _legacySignMessage(t) {
    return ei(this, void 0, void 0, function* () {
      const e = typeof t == 'string' ? Wr(t) : t,
        i = yield this.getAddress();
      try {
        return yield this.provider.send('eth_sign', [i.toLowerCase(), $t(e)]);
      } catch (n) {
        throw (
          (typeof n.message == 'string' &&
            n.message.match(/user denied/i) &&
            Ke.throwError('user rejected signing', z.errors.ACTION_REJECTED, {
              action: '_legacySignMessage',
              from: i,
              messageData: t,
            }),
          n)
        );
      }
    });
  }
  _signTypedData(t, e, i) {
    return ei(this, void 0, void 0, function* () {
      const n = yield gr.resolveNames(t, e, i, (u) => this.provider.resolveName(u)),
        s = yield this.getAddress();
      try {
        return yield this.provider.send('eth_signTypedData_v4', [
          s.toLowerCase(),
          JSON.stringify(gr.getPayload(n.domain, e, n.value)),
        ]);
      } catch (u) {
        throw (
          (typeof u.message == 'string' &&
            u.message.match(/user denied/i) &&
            Ke.throwError('user rejected signing', z.errors.ACTION_REJECTED, {
              action: '_signTypedData',
              from: s,
              messageData: { domain: n.domain, types: e, value: n.value },
            }),
          u)
        );
      }
    });
  }
  unlock(t) {
    return ei(this, void 0, void 0, function* () {
      const e = this.provider,
        i = yield this.getAddress();
      return e.send('personal_unlockAccount', [i.toLowerCase(), t, null]);
    });
  }
}
class yl extends qa {
  sendTransaction(t) {
    return this.sendUncheckedTransaction(t).then((e) => ({
      hash: e,
      nonce: null,
      gasLimit: null,
      gasPrice: null,
      data: null,
      value: null,
      chainId: null,
      confirmations: 0,
      from: null,
      wait: (i) => this.provider.waitForTransaction(e, i),
    }));
  }
}
const wl = {
  chainId: !0,
  data: !0,
  gasLimit: !0,
  gasPrice: !0,
  nonce: !0,
  to: !0,
  value: !0,
  type: !0,
  accessList: !0,
  maxFeePerGas: !0,
  maxPriorityFeePerGas: !0,
};
class bl extends pl {
  constructor(t, e) {
    let i = e;
    i == null &&
      (i = new Promise((n, s) => {
        setTimeout(() => {
          this.detectNetwork().then(
            (u) => {
              n(u);
            },
            (u) => {
              s(u);
            }
          );
        }, 0);
      })),
      super(i),
      t || (t = Vr(this.constructor, 'defaultUrl')()),
      typeof t == 'string'
        ? $(this, 'connection', Object.freeze({ url: t }))
        : $(this, 'connection', Object.freeze(Ge(t))),
      (this._nextId = 42);
  }
  get _cache() {
    return this._eventLoopCache == null && (this._eventLoopCache = {}), this._eventLoopCache;
  }
  static defaultUrl() {
    return 'http://localhost:8545';
  }
  detectNetwork() {
    return (
      this._cache.detectNetwork ||
        ((this._cache.detectNetwork = this._uncachedDetectNetwork()),
        setTimeout(() => {
          this._cache.detectNetwork = null;
        }, 0)),
      this._cache.detectNetwork
    );
  }
  _uncachedDetectNetwork() {
    return ei(this, void 0, void 0, function* () {
      yield Mo(0);
      let t = null;
      try {
        t = yield this.send('eth_chainId', []);
      } catch {
        try {
          t = yield this.send('net_version', []);
        } catch {}
      }
      if (t != null) {
        const e = Vr(this.constructor, 'getNetwork');
        try {
          return e(ut.from(t).toNumber());
        } catch (i) {
          return Ke.throwError('could not detect network', z.errors.NETWORK_ERROR, {
            chainId: t,
            event: 'invalidNetwork',
            serverError: i,
          });
        }
      }
      return Ke.throwError('could not detect network', z.errors.NETWORK_ERROR, {
        event: 'noNetwork',
      });
    });
  }
  getSigner(t) {
    return new qa(ws, this, t);
  }
  getUncheckedSigner(t) {
    return this.getSigner(t).connectUnchecked();
  }
  listAccounts() {
    return this.send('eth_accounts', []).then((t) => t.map((e) => this.formatter.address(e)));
  }
  send(t, e) {
    const i = { method: t, params: e, id: this._nextId++, jsonrpc: '2.0' };
    this.emit('debug', { action: 'request', request: oi(i), provider: this });
    const n = ['eth_chainId', 'eth_blockNumber'].indexOf(t) >= 0;
    if (n && this._cache[t]) return this._cache[t];
    const s = zs(this.connection, JSON.stringify(i), vl).then(
      (u) => (
        this.emit('debug', { action: 'response', request: i, response: u, provider: this }), u
      ),
      (u) => {
        throw (this.emit('debug', { action: 'response', error: u, request: i, provider: this }), u);
      }
    );
    return (
      n &&
        ((this._cache[t] = s),
        setTimeout(() => {
          this._cache[t] = null;
        }, 0)),
      s
    );
  }
  prepareRequest(t, e) {
    switch (t) {
      case 'getBlockNumber':
        return ['eth_blockNumber', []];
      case 'getGasPrice':
        return ['eth_gasPrice', []];
      case 'getBalance':
        return ['eth_getBalance', [ji(e.address), e.blockTag]];
      case 'getTransactionCount':
        return ['eth_getTransactionCount', [ji(e.address), e.blockTag]];
      case 'getCode':
        return ['eth_getCode', [ji(e.address), e.blockTag]];
      case 'getStorageAt':
        return ['eth_getStorageAt', [ji(e.address), je(e.position, 32), e.blockTag]];
      case 'sendTransaction':
        return ['eth_sendRawTransaction', [e.signedTransaction]];
      case 'getBlock':
        return e.blockTag
          ? ['eth_getBlockByNumber', [e.blockTag, !!e.includeTransactions]]
          : e.blockHash
            ? ['eth_getBlockByHash', [e.blockHash, !!e.includeTransactions]]
            : null;
      case 'getTransaction':
        return ['eth_getTransactionByHash', [e.transactionHash]];
      case 'getTransactionReceipt':
        return ['eth_getTransactionReceipt', [e.transactionHash]];
      case 'call':
        return [
          'eth_call',
          [Vr(this.constructor, 'hexlifyTransaction')(e.transaction, { from: !0 }), e.blockTag],
        ];
      case 'estimateGas':
        return [
          'eth_estimateGas',
          [Vr(this.constructor, 'hexlifyTransaction')(e.transaction, { from: !0 })],
        ];
      case 'getLogs':
        return (
          e.filter && e.filter.address != null && (e.filter.address = ji(e.filter.address)),
          ['eth_getLogs', [e.filter]]
        );
    }
    return null;
  }
  perform(t, e) {
    return ei(this, void 0, void 0, function* () {
      if (t === 'call' || t === 'estimateGas') {
        const n = e.transaction;
        if (
          n &&
          n.type != null &&
          ut.from(n.type).isZero() &&
          n.maxFeePerGas == null &&
          n.maxPriorityFeePerGas == null
        ) {
          const s = yield this.getFeeData();
          s.maxFeePerGas == null &&
            s.maxPriorityFeePerGas == null &&
            ((e = Ge(e)), (e.transaction = Ge(n)), delete e.transaction.type);
        }
      }
      const i = this.prepareRequest(t, e);
      i == null &&
        Ke.throwError(t + ' not implemented', z.errors.NOT_IMPLEMENTED, { operation: t });
      try {
        return yield this.send(i[0], i[1]);
      } catch (n) {
        return Ka(t, n, e);
      }
    });
  }
  _startEvent(t) {
    t.tag === 'pending' && this._startPending(), super._startEvent(t);
  }
  _startPending() {
    if (this._pendingFilter != null) return;
    const t = this,
      e = this.send('eth_newPendingTransactionFilter', []);
    (this._pendingFilter = e),
      e
        .then(function (i) {
          function n() {
            t.send('eth_getFilterChanges', [i])
              .then(function (s) {
                if (t._pendingFilter != e) return null;
                let u = Promise.resolve();
                return (
                  s.forEach(function (d) {
                    (t._emitted['t:' + d.toLowerCase()] = 'pending'),
                      (u = u.then(function () {
                        return t.getTransaction(d).then(function (v) {
                          return t.emit('pending', v), null;
                        });
                      }));
                  }),
                  u.then(function () {
                    return Mo(1e3);
                  })
                );
              })
              .then(function () {
                if (t._pendingFilter != e) {
                  t.send('eth_uninstallFilter', [i]);
                  return;
                }
                return (
                  setTimeout(function () {
                    n();
                  }, 0),
                  null
                );
              })
              .catch((s) => {});
          }
          return n(), i;
        })
        .catch((i) => {});
  }
  _stopEvent(t) {
    t.tag === 'pending' && this.listenerCount('pending') === 0 && (this._pendingFilter = null),
      super._stopEvent(t);
  }
  static hexlifyTransaction(t, e) {
    const i = Ge(wl);
    if (e) for (const s in e) e[s] && (i[s] = !0);
    Ko(t, i);
    const n = {};
    return (
      [
        'chainId',
        'gasLimit',
        'gasPrice',
        'type',
        'maxFeePerGas',
        'maxPriorityFeePerGas',
        'nonce',
        'value',
      ].forEach(function (s) {
        if (t[s] == null) return;
        const u = Es(ut.from(t[s]));
        s === 'gasLimit' && (s = 'gas'), (n[s] = u);
      }),
      ['from', 'to', 'data'].forEach(function (s) {
        t[s] != null && (n[s] = $t(t[s]));
      }),
      t.accessList && (n.accessList = Oi(t.accessList)),
      n
    );
  }
}
const _o = new z(Zn);
let Al = 1;
function So(r, t) {
  const e = 'Web3LegacyFetcher';
  return function (i, n) {
    const s = { method: i, params: n, id: Al++, jsonrpc: '2.0' };
    return new Promise((u, d) => {
      this.emit('debug', { action: 'request', fetcher: e, request: oi(s), provider: this }),
        t(s, (v, E) => {
          if (v)
            return (
              this.emit('debug', {
                action: 'response',
                fetcher: e,
                error: v,
                request: s,
                provider: this,
              }),
              d(v)
            );
          if (
            (this.emit('debug', {
              action: 'response',
              fetcher: e,
              request: s,
              response: E,
              provider: this,
            }),
            E.error)
          ) {
            const S = new Error(E.error.message);
            return (S.code = E.error.code), (S.data = E.error.data), d(S);
          }
          u(E.result);
        });
    });
  };
}
function xl(r) {
  return function (t, e) {
    e == null && (e = []);
    const i = { method: t, params: e };
    return (
      this.emit('debug', {
        action: 'request',
        fetcher: 'Eip1193Fetcher',
        request: oi(i),
        provider: this,
      }),
      r.request(i).then(
        (n) => (
          this.emit('debug', {
            action: 'response',
            fetcher: 'Eip1193Fetcher',
            request: i,
            response: n,
            provider: this,
          }),
          n
        ),
        (n) => {
          throw (
            (this.emit('debug', {
              action: 'response',
              fetcher: 'Eip1193Fetcher',
              request: i,
              error: n,
              provider: this,
            }),
            n)
          );
        }
      )
    );
  };
}
class b0 extends bl {
  constructor(t, e) {
    t == null && _o.throwArgumentError('missing provider', 'provider', t);
    let i = null,
      n = null,
      s = null;
    typeof t == 'function'
      ? ((i = 'unknown:'), (n = t))
      : ((i = t.host || t.path || ''),
        !i && t.isMetaMask && (i = 'metamask'),
        (s = t),
        t.request
          ? (i === '' && (i = 'eip-1193:'), (n = xl(t)))
          : t.sendAsync
            ? (n = So(t, t.sendAsync.bind(t)))
            : t.send
              ? (n = So(t, t.send.bind(t)))
              : _o.throwArgumentError('unsupported provider', 'provider', t),
        i || (i = 'unknown:')),
      super(i, e),
      $(this, 'jsonRpcFetchFunc', n),
      $(this, 'provider', s);
  }
  send(t, e) {
    return this.jsonRpcFetchFunc(t, e);
  }
}
const ln = 'abi/5.7.0',
  me = new z(ln),
  xi = {};
let Po = { calldata: !0, memory: !0, storage: !0 },
  El = { calldata: !0, memory: !0 };
function mn(r, t) {
  if (r === 'bytes' || r === 'string') {
    if (Po[t]) return !0;
  } else if (r === 'address') {
    if (t === 'payable') return !0;
  } else if ((r.indexOf('[') >= 0 || r === 'tuple') && El[t]) return !0;
  return (Po[t] || t === 'payable') && me.throwArgumentError('invalid modifier', 'name', t), !1;
}
function Ml(r, t) {
  let e = r;
  function i(d) {
    me.throwArgumentError(`unexpected character at position ${d}`, 'param', r);
  }
  r = r.replace(/\s/g, ' ');
  function n(d) {
    let v = { type: '', name: '', parent: d, state: { allowType: !0 } };
    return t && (v.indexed = !1), v;
  }
  let s = { type: '', name: '', state: { allowType: !0 } },
    u = s;
  for (let d = 0; d < r.length; d++) {
    let v = r[d];
    switch (v) {
      case '(':
        u.state.allowType && u.type === '' ? (u.type = 'tuple') : u.state.allowParams || i(d),
          (u.state.allowType = !1),
          (u.type = Pi(u.type)),
          (u.components = [n(u)]),
          (u = u.components[0]);
        break;
      case ')':
        delete u.state,
          u.name === 'indexed' && (t || i(d), (u.indexed = !0), (u.name = '')),
          mn(u.type, u.name) && (u.name = ''),
          (u.type = Pi(u.type));
        let E = u;
        (u = u.parent),
          u || i(d),
          delete E.parent,
          (u.state.allowParams = !1),
          (u.state.allowName = !0),
          (u.state.allowArray = !0);
        break;
      case ',':
        delete u.state,
          u.name === 'indexed' && (t || i(d), (u.indexed = !0), (u.name = '')),
          mn(u.type, u.name) && (u.name = ''),
          (u.type = Pi(u.type));
        let S = n(u.parent);
        u.parent.components.push(S), delete u.parent, (u = S);
        break;
      case ' ':
        u.state.allowType &&
          u.type !== '' &&
          ((u.type = Pi(u.type)),
          delete u.state.allowType,
          (u.state.allowName = !0),
          (u.state.allowParams = !0)),
          u.state.allowName &&
            u.name !== '' &&
            (u.name === 'indexed'
              ? (t || i(d), u.indexed && i(d), (u.indexed = !0), (u.name = ''))
              : mn(u.type, u.name)
                ? (u.name = '')
                : (u.state.allowName = !1));
        break;
      case '[':
        u.state.allowArray || i(d),
          (u.type += v),
          (u.state.allowArray = !1),
          (u.state.allowName = !1),
          (u.state.readArray = !0);
        break;
      case ']':
        u.state.readArray || i(d),
          (u.type += v),
          (u.state.readArray = !1),
          (u.state.allowArray = !0),
          (u.state.allowName = !0);
        break;
      default:
        u.state.allowType
          ? ((u.type += v), (u.state.allowParams = !0), (u.state.allowArray = !0))
          : u.state.allowName
            ? ((u.name += v), delete u.state.allowArray)
            : u.state.readArray
              ? (u.type += v)
              : i(d);
    }
  }
  return (
    u.parent && me.throwArgumentError('unexpected eof', 'param', r),
    delete s.state,
    u.name === 'indexed'
      ? (t || i(e.length - 7), u.indexed && i(e.length - 7), (u.indexed = !0), (u.name = ''))
      : mn(u.type, u.name) && (u.name = ''),
    (s.type = Pi(s.type)),
    s
  );
}
function En(r, t) {
  for (let e in t) $(r, e, t[e]);
}
const Me = Object.freeze({ sighash: 'sighash', minimal: 'minimal', full: 'full', json: 'json' }),
  _l = new RegExp(/^(.*)\[([0-9]*)\]$/);
class Ve {
  constructor(t, e) {
    t !== xi &&
      me.throwError('use fromString', z.errors.UNSUPPORTED_OPERATION, {
        operation: 'new ParamType()',
      }),
      En(this, e);
    let i = this.type.match(_l);
    i
      ? En(this, {
          arrayLength: parseInt(i[2] || '-1'),
          arrayChildren: Ve.fromObject({ type: i[1], components: this.components }),
          baseType: 'array',
        })
      : En(this, {
          arrayLength: null,
          arrayChildren: null,
          baseType: this.components != null ? 'tuple' : this.type,
        }),
      (this._isParamType = !0),
      Object.freeze(this);
  }
  format(t) {
    if (
      (t || (t = Me.sighash),
      Me[t] || me.throwArgumentError('invalid format type', 'format', t),
      t === Me.json)
    ) {
      let i = { type: this.baseType === 'tuple' ? 'tuple' : this.type, name: this.name || void 0 };
      return (
        typeof this.indexed == 'boolean' && (i.indexed = this.indexed),
        this.components && (i.components = this.components.map((n) => JSON.parse(n.format(t)))),
        JSON.stringify(i)
      );
    }
    let e = '';
    return (
      this.baseType === 'array'
        ? ((e += this.arrayChildren.format(t)),
          (e += '[' + (this.arrayLength < 0 ? '' : String(this.arrayLength)) + ']'))
        : this.baseType === 'tuple'
          ? (t !== Me.sighash && (e += this.type),
            (e +=
              '(' + this.components.map((i) => i.format(t)).join(t === Me.full ? ', ' : ',') + ')'))
          : (e += this.type),
      t !== Me.sighash &&
        (this.indexed === !0 && (e += ' indexed'),
        t === Me.full && this.name && (e += ' ' + this.name)),
      e
    );
  }
  static from(t, e) {
    return typeof t == 'string' ? Ve.fromString(t, e) : Ve.fromObject(t);
  }
  static fromObject(t) {
    return Ve.isParamType(t)
      ? t
      : new Ve(xi, {
          name: t.name || null,
          type: Pi(t.type),
          indexed: t.indexed == null ? null : !!t.indexed,
          components: t.components ? t.components.map(Ve.fromObject) : null,
        });
  }
  static fromString(t, e) {
    function i(n) {
      return Ve.fromObject({
        name: n.name,
        type: n.type,
        indexed: n.indexed,
        components: n.components,
      });
    }
    return i(Ml(t, !!e));
  }
  static isParamType(t) {
    return !!(t != null && t._isParamType);
  }
}
function $i(r, t) {
  return Pl(r).map((e) => Ve.fromString(e, t));
}
class ni {
  constructor(t, e) {
    t !== xi &&
      me.throwError('use a static from method', z.errors.UNSUPPORTED_OPERATION, {
        operation: 'new Fragment()',
      }),
      En(this, e),
      (this._isFragment = !0),
      Object.freeze(this);
  }
  static from(t) {
    return ni.isFragment(t) ? t : typeof t == 'string' ? ni.fromString(t) : ni.fromObject(t);
  }
  static fromObject(t) {
    if (ni.isFragment(t)) return t;
    switch (t.type) {
      case 'function':
        return jr.fromObject(t);
      case 'event':
        return ii.fromObject(t);
      case 'constructor':
        return Gr.fromObject(t);
      case 'error':
        return hi.fromObject(t);
      case 'fallback':
      case 'receive':
        return null;
    }
    return me.throwArgumentError('invalid fragment object', 'value', t);
  }
  static fromString(t) {
    return (
      (t = t.replace(/\s/g, ' ')),
      (t = t.replace(/\(/g, ' (').replace(/\)/g, ') ').replace(/\s+/g, ' ')),
      (t = t.trim()),
      t.split(' ')[0] === 'event'
        ? ii.fromString(t.substring(5).trim())
        : t.split(' ')[0] === 'function'
          ? jr.fromString(t.substring(8).trim())
          : t.split('(')[0].trim() === 'constructor'
            ? Gr.fromString(t.trim())
            : t.split(' ')[0] === 'error'
              ? hi.fromString(t.substring(5).trim())
              : me.throwArgumentError('unsupported fragment', 'value', t)
    );
  }
  static isFragment(t) {
    return !!(t && t._isFragment);
  }
}
class ii extends ni {
  format(t) {
    if (
      (t || (t = Me.sighash),
      Me[t] || me.throwArgumentError('invalid format type', 'format', t),
      t === Me.json)
    )
      return JSON.stringify({
        type: 'event',
        anonymous: this.anonymous,
        name: this.name,
        inputs: this.inputs.map((i) => JSON.parse(i.format(t))),
      });
    let e = '';
    return (
      t !== Me.sighash && (e += 'event '),
      (e +=
        this.name +
        '(' +
        this.inputs.map((i) => i.format(t)).join(t === Me.full ? ', ' : ',') +
        ') '),
      t !== Me.sighash && this.anonymous && (e += 'anonymous '),
      e.trim()
    );
  }
  static from(t) {
    return typeof t == 'string' ? ii.fromString(t) : ii.fromObject(t);
  }
  static fromObject(t) {
    if (ii.isEventFragment(t)) return t;
    t.type !== 'event' && me.throwArgumentError('invalid event object', 'value', t);
    const e = {
      name: tn(t.name),
      anonymous: t.anonymous,
      inputs: t.inputs ? t.inputs.map(Ve.fromObject) : [],
      type: 'event',
    };
    return new ii(xi, e);
  }
  static fromString(t) {
    let e = t.match(en);
    e || me.throwArgumentError('invalid event string', 'value', t);
    let i = !1;
    return (
      e[3].split(' ').forEach((n) => {
        switch (n.trim()) {
          case 'anonymous':
            i = !0;
            break;
          case '':
            break;
          default:
            me.warn('unknown modifier: ' + n);
        }
      }),
      ii.fromObject({ name: e[1].trim(), anonymous: i, inputs: $i(e[2], !0), type: 'event' })
    );
  }
  static isEventFragment(t) {
    return t && t._isFragment && t.type === 'event';
  }
}
function Fa(r, t) {
  t.gas = null;
  let e = r.split('@');
  return e.length !== 1
    ? (e.length > 2 && me.throwArgumentError('invalid human-readable ABI signature', 'value', r),
      e[1].match(/^[0-9]+$/) ||
        me.throwArgumentError('invalid human-readable ABI signature gas', 'value', r),
      (t.gas = ut.from(e[1])),
      e[0])
    : r;
}
function Ha(r, t) {
  (t.constant = !1),
    (t.payable = !1),
    (t.stateMutability = 'nonpayable'),
    r.split(' ').forEach((e) => {
      switch (e.trim()) {
        case 'constant':
          t.constant = !0;
          break;
        case 'payable':
          (t.payable = !0), (t.stateMutability = 'payable');
          break;
        case 'nonpayable':
          (t.payable = !1), (t.stateMutability = 'nonpayable');
          break;
        case 'pure':
          (t.constant = !0), (t.stateMutability = 'pure');
          break;
        case 'view':
          (t.constant = !0), (t.stateMutability = 'view');
          break;
        case 'external':
        case 'public':
        case '':
          break;
        default:
          console.log('unknown modifier: ' + e);
      }
    });
}
function Ga(r) {
  let t = { constant: !1, payable: !0, stateMutability: 'payable' };
  return (
    r.stateMutability != null
      ? ((t.stateMutability = r.stateMutability),
        (t.constant = t.stateMutability === 'view' || t.stateMutability === 'pure'),
        r.constant != null &&
          !!r.constant !== t.constant &&
          me.throwArgumentError(
            'cannot have constant function with mutability ' + t.stateMutability,
            'value',
            r
          ),
        (t.payable = t.stateMutability === 'payable'),
        r.payable != null &&
          !!r.payable !== t.payable &&
          me.throwArgumentError(
            'cannot have payable function with mutability ' + t.stateMutability,
            'value',
            r
          ))
      : r.payable != null
        ? ((t.payable = !!r.payable),
          r.constant == null &&
            !t.payable &&
            r.type !== 'constructor' &&
            me.throwArgumentError('unable to determine stateMutability', 'value', r),
          (t.constant = !!r.constant),
          t.constant
            ? (t.stateMutability = 'view')
            : (t.stateMutability = t.payable ? 'payable' : 'nonpayable'),
          t.payable &&
            t.constant &&
            me.throwArgumentError('cannot have constant payable function', 'value', r))
        : r.constant != null
          ? ((t.constant = !!r.constant),
            (t.payable = !t.constant),
            (t.stateMutability = t.constant ? 'view' : 'payable'))
          : r.type !== 'constructor' &&
            me.throwArgumentError('unable to determine stateMutability', 'value', r),
    t
  );
}
class Gr extends ni {
  format(t) {
    if (
      (t || (t = Me.sighash),
      Me[t] || me.throwArgumentError('invalid format type', 'format', t),
      t === Me.json)
    )
      return JSON.stringify({
        type: 'constructor',
        stateMutability: this.stateMutability !== 'nonpayable' ? this.stateMutability : void 0,
        payable: this.payable,
        gas: this.gas ? this.gas.toNumber() : void 0,
        inputs: this.inputs.map((i) => JSON.parse(i.format(t))),
      });
    t === Me.sighash &&
      me.throwError('cannot format a constructor for sighash', z.errors.UNSUPPORTED_OPERATION, {
        operation: 'format(sighash)',
      });
    let e =
      'constructor(' + this.inputs.map((i) => i.format(t)).join(t === Me.full ? ', ' : ',') + ') ';
    return (
      this.stateMutability &&
        this.stateMutability !== 'nonpayable' &&
        (e += this.stateMutability + ' '),
      e.trim()
    );
  }
  static from(t) {
    return typeof t == 'string' ? Gr.fromString(t) : Gr.fromObject(t);
  }
  static fromObject(t) {
    if (Gr.isConstructorFragment(t)) return t;
    t.type !== 'constructor' && me.throwArgumentError('invalid constructor object', 'value', t);
    let e = Ga(t);
    e.constant && me.throwArgumentError('constructor cannot be constant', 'value', t);
    const i = {
      name: null,
      type: t.type,
      inputs: t.inputs ? t.inputs.map(Ve.fromObject) : [],
      payable: e.payable,
      stateMutability: e.stateMutability,
      gas: t.gas ? ut.from(t.gas) : null,
    };
    return new Gr(xi, i);
  }
  static fromString(t) {
    let e = { type: 'constructor' };
    t = Fa(t, e);
    let i = t.match(en);
    return (
      (!i || i[1].trim() !== 'constructor') &&
        me.throwArgumentError('invalid constructor string', 'value', t),
      (e.inputs = $i(i[2].trim(), !1)),
      Ha(i[3].trim(), e),
      Gr.fromObject(e)
    );
  }
  static isConstructorFragment(t) {
    return t && t._isFragment && t.type === 'constructor';
  }
}
class jr extends Gr {
  format(t) {
    if (
      (t || (t = Me.sighash),
      Me[t] || me.throwArgumentError('invalid format type', 'format', t),
      t === Me.json)
    )
      return JSON.stringify({
        type: 'function',
        name: this.name,
        constant: this.constant,
        stateMutability: this.stateMutability !== 'nonpayable' ? this.stateMutability : void 0,
        payable: this.payable,
        gas: this.gas ? this.gas.toNumber() : void 0,
        inputs: this.inputs.map((i) => JSON.parse(i.format(t))),
        outputs: this.outputs.map((i) => JSON.parse(i.format(t))),
      });
    let e = '';
    return (
      t !== Me.sighash && (e += 'function '),
      (e +=
        this.name +
        '(' +
        this.inputs.map((i) => i.format(t)).join(t === Me.full ? ', ' : ',') +
        ') '),
      t !== Me.sighash &&
        (this.stateMutability
          ? this.stateMutability !== 'nonpayable' && (e += this.stateMutability + ' ')
          : this.constant && (e += 'view '),
        this.outputs &&
          this.outputs.length &&
          (e += 'returns (' + this.outputs.map((i) => i.format(t)).join(', ') + ') '),
        this.gas != null && (e += '@' + this.gas.toString() + ' ')),
      e.trim()
    );
  }
  static from(t) {
    return typeof t == 'string' ? jr.fromString(t) : jr.fromObject(t);
  }
  static fromObject(t) {
    if (jr.isFunctionFragment(t)) return t;
    t.type !== 'function' && me.throwArgumentError('invalid function object', 'value', t);
    let e = Ga(t);
    const i = {
      type: t.type,
      name: tn(t.name),
      constant: e.constant,
      inputs: t.inputs ? t.inputs.map(Ve.fromObject) : [],
      outputs: t.outputs ? t.outputs.map(Ve.fromObject) : [],
      payable: e.payable,
      stateMutability: e.stateMutability,
      gas: t.gas ? ut.from(t.gas) : null,
    };
    return new jr(xi, i);
  }
  static fromString(t) {
    let e = { type: 'function' };
    t = Fa(t, e);
    let i = t.split(' returns ');
    i.length > 2 && me.throwArgumentError('invalid function string', 'value', t);
    let n = i[0].match(en);
    if (
      (n || me.throwArgumentError('invalid function signature', 'value', t),
      (e.name = n[1].trim()),
      e.name && tn(e.name),
      (e.inputs = $i(n[2], !1)),
      Ha(n[3].trim(), e),
      i.length > 1)
    ) {
      let s = i[1].match(en);
      (s[1].trim() != '' || s[3].trim() != '') &&
        me.throwArgumentError('unexpected tokens', 'value', t),
        (e.outputs = $i(s[2], !1));
    } else e.outputs = [];
    return jr.fromObject(e);
  }
  static isFunctionFragment(t) {
    return t && t._isFragment && t.type === 'function';
  }
}
function No(r) {
  const t = r.format();
  return (
    (t === 'Error(string)' || t === 'Panic(uint256)') &&
      me.throwArgumentError(`cannot specify user defined ${t} error`, 'fragment', r),
    r
  );
}
class hi extends ni {
  format(t) {
    if (
      (t || (t = Me.sighash),
      Me[t] || me.throwArgumentError('invalid format type', 'format', t),
      t === Me.json)
    )
      return JSON.stringify({
        type: 'error',
        name: this.name,
        inputs: this.inputs.map((i) => JSON.parse(i.format(t))),
      });
    let e = '';
    return (
      t !== Me.sighash && (e += 'error '),
      (e +=
        this.name +
        '(' +
        this.inputs.map((i) => i.format(t)).join(t === Me.full ? ', ' : ',') +
        ') '),
      e.trim()
    );
  }
  static from(t) {
    return typeof t == 'string' ? hi.fromString(t) : hi.fromObject(t);
  }
  static fromObject(t) {
    if (hi.isErrorFragment(t)) return t;
    t.type !== 'error' && me.throwArgumentError('invalid error object', 'value', t);
    const e = {
      type: t.type,
      name: tn(t.name),
      inputs: t.inputs ? t.inputs.map(Ve.fromObject) : [],
    };
    return No(new hi(xi, e));
  }
  static fromString(t) {
    let e = { type: 'error' },
      i = t.match(en);
    return (
      i || me.throwArgumentError('invalid error signature', 'value', t),
      (e.name = i[1].trim()),
      e.name && tn(e.name),
      (e.inputs = $i(i[2], !1)),
      No(hi.fromObject(e))
    );
  }
  static isErrorFragment(t) {
    return t && t._isFragment && t.type === 'error';
  }
}
function Pi(r) {
  return (
    r.match(/^uint($|[^1-9])/)
      ? (r = 'uint256' + r.substring(4))
      : r.match(/^int($|[^1-9])/) && (r = 'int256' + r.substring(3)),
    r
  );
}
const Sl = new RegExp('^[a-zA-Z$_][a-zA-Z0-9$_]*$');
function tn(r) {
  return (!r || !r.match(Sl)) && me.throwArgumentError(`invalid identifier "${r}"`, 'value', r), r;
}
const en = new RegExp('^([^)(]*)\\((.*)\\)([^)(]*)$');
function Pl(r) {
  r = r.trim();
  let t = [],
    e = '',
    i = 0;
  for (let n = 0; n < r.length; n++) {
    let s = r[n];
    s === ',' && i === 0
      ? (t.push(e), (e = ''))
      : ((e += s),
        s === '('
          ? i++
          : s === ')' &&
            (i--, i === -1 && me.throwArgumentError('unbalanced parenthesis', 'value', r)));
  }
  return e && t.push(e), t;
}
const Ks = new z(ln);
function Nl(r) {
  const t = [],
    e = function (i, n) {
      if (Array.isArray(n))
        for (let s in n) {
          const u = i.slice();
          u.push(s);
          try {
            e(u, n[s]);
          } catch (d) {
            t.push({ path: u, error: d });
          }
        }
    };
  return e([], r), t;
}
class ai {
  constructor(t, e, i, n) {
    (this.name = t), (this.type = e), (this.localName = i), (this.dynamic = n);
  }
  _throwError(t, e) {
    Ks.throwArgumentError(t, this.localName, e);
  }
}
class bs {
  constructor(t) {
    $(this, 'wordSize', t || 32),
      (this._data = []),
      (this._dataLength = 0),
      (this._padding = new Uint8Array(t));
  }
  get data() {
    return ur(this._data);
  }
  get length() {
    return this._dataLength;
  }
  _writeData(t) {
    return this._data.push(t), (this._dataLength += t.length), t.length;
  }
  appendWriter(t) {
    return this._writeData(vr(t._data));
  }
  writeBytes(t) {
    let e = re(t);
    const i = e.length % this.wordSize;
    return i && (e = vr([e, this._padding.slice(i)])), this._writeData(e);
  }
  _getValue(t) {
    let e = re(ut.from(t));
    return (
      e.length > this.wordSize &&
        Ks.throwError('value out-of-bounds', z.errors.BUFFER_OVERRUN, {
          length: this.wordSize,
          offset: e.length,
        }),
      e.length % this.wordSize && (e = vr([this._padding.slice(e.length % this.wordSize), e])),
      e
    );
  }
  writeValue(t) {
    return this._writeData(this._getValue(t));
  }
  writeUpdatableValue() {
    const t = this._data.length;
    return (
      this._data.push(this._padding),
      (this._dataLength += this.wordSize),
      (e) => {
        this._data[t] = this._getValue(e);
      }
    );
  }
}
class Rn {
  constructor(t, e, i, n) {
    $(this, '_data', re(t)),
      $(this, 'wordSize', e || 32),
      $(this, '_coerceFunc', i),
      $(this, 'allowLoose', n),
      (this._offset = 0);
  }
  get data() {
    return $t(this._data);
  }
  get consumed() {
    return this._offset;
  }
  static coerce(t, e) {
    let i = t.match('^u?int([0-9]+)$');
    return i && parseInt(i[1]) <= 48 && (e = e.toNumber()), e;
  }
  coerce(t, e) {
    return this._coerceFunc ? this._coerceFunc(t, e) : Rn.coerce(t, e);
  }
  _peekBytes(t, e, i) {
    let n = Math.ceil(e / this.wordSize) * this.wordSize;
    return (
      this._offset + n > this._data.length &&
        (this.allowLoose && i && this._offset + e <= this._data.length
          ? (n = e)
          : Ks.throwError('data out-of-bounds', z.errors.BUFFER_OVERRUN, {
              length: this._data.length,
              offset: this._offset + n,
            })),
      this._data.slice(this._offset, this._offset + n)
    );
  }
  subReader(t) {
    return new Rn(
      this._data.slice(this._offset + t),
      this.wordSize,
      this._coerceFunc,
      this.allowLoose
    );
  }
  readBytes(t, e) {
    let i = this._peekBytes(0, t, !!e);
    return (this._offset += i.length), i.slice(0, t);
  }
  readValue() {
    return ut.from(this.readBytes(this.wordSize));
  }
}
class kl extends ai {
  constructor(t) {
    super('address', 'address', t, !1);
  }
  defaultValue() {
    return '0x0000000000000000000000000000000000000000';
  }
  encode(t, e) {
    try {
      e = Je(e);
    } catch (i) {
      this._throwError(i.message, e);
    }
    return t.writeValue(e);
  }
  decode(t) {
    return Je(je(t.readValue().toHexString(), 20));
  }
}
class Il extends ai {
  constructor(t) {
    super(t.name, t.type, void 0, t.dynamic), (this.coder = t);
  }
  defaultValue() {
    return this.coder.defaultValue();
  }
  encode(t, e) {
    return this.coder.encode(t, e);
  }
  decode(t) {
    return this.coder.decode(t);
  }
}
const Ii = new z(ln);
function ja(r, t, e) {
  let i = null;
  if (Array.isArray(e)) i = e;
  else if (e && typeof e == 'object') {
    let v = {};
    i = t.map((E) => {
      const S = E.localName;
      return (
        S ||
          Ii.throwError(
            'cannot encode object for signature with missing names',
            z.errors.INVALID_ARGUMENT,
            { argument: 'values', coder: E, value: e }
          ),
        v[S] &&
          Ii.throwError(
            'cannot encode object for signature with duplicate names',
            z.errors.INVALID_ARGUMENT,
            { argument: 'values', coder: E, value: e }
          ),
        (v[S] = !0),
        e[S]
      );
    });
  } else Ii.throwArgumentError('invalid tuple value', 'tuple', e);
  t.length !== i.length && Ii.throwArgumentError('types/value length mismatch', 'tuple', e);
  let n = new bs(r.wordSize),
    s = new bs(r.wordSize),
    u = [];
  t.forEach((v, E) => {
    let S = i[E];
    if (v.dynamic) {
      let P = s.length;
      v.encode(s, S);
      let I = n.writeUpdatableValue();
      u.push((R) => {
        I(R + P);
      });
    } else v.encode(n, S);
  }),
    u.forEach((v) => {
      v(n.length);
    });
  let d = r.appendWriter(n);
  return (d += r.appendWriter(s)), d;
}
function Va(r, t) {
  let e = [],
    i = r.subReader(0);
  t.forEach((s) => {
    let u = null;
    if (s.dynamic) {
      let d = r.readValue(),
        v = i.subReader(d.toNumber());
      try {
        u = s.decode(v);
      } catch (E) {
        if (E.code === z.errors.BUFFER_OVERRUN) throw E;
        (u = E), (u.baseType = s.name), (u.name = s.localName), (u.type = s.type);
      }
    } else
      try {
        u = s.decode(r);
      } catch (d) {
        if (d.code === z.errors.BUFFER_OVERRUN) throw d;
        (u = d), (u.baseType = s.name), (u.name = s.localName), (u.type = s.type);
      }
    u != null && e.push(u);
  });
  const n = t.reduce((s, u) => {
    const d = u.localName;
    return d && (s[d] || (s[d] = 0), s[d]++), s;
  }, {});
  t.forEach((s, u) => {
    let d = s.localName;
    if (!d || n[d] !== 1 || (d === 'length' && (d = '_length'), e[d] != null)) return;
    const v = e[u];
    v instanceof Error
      ? Object.defineProperty(e, d, {
          enumerable: !0,
          get: () => {
            throw v;
          },
        })
      : (e[d] = v);
  });
  for (let s = 0; s < e.length; s++) {
    const u = e[s];
    u instanceof Error &&
      Object.defineProperty(e, s, {
        enumerable: !0,
        get: () => {
          throw u;
        },
      });
  }
  return Object.freeze(e);
}
class Bl extends ai {
  constructor(t, e, i) {
    const n = t.type + '[' + (e >= 0 ? e : '') + ']',
      s = e === -1 || t.dynamic;
    super('array', n, i, s), (this.coder = t), (this.length = e);
  }
  defaultValue() {
    const t = this.coder.defaultValue(),
      e = [];
    for (let i = 0; i < this.length; i++) e.push(t);
    return e;
  }
  encode(t, e) {
    Array.isArray(e) || this._throwError('expected array value', e);
    let i = this.length;
    i === -1 && ((i = e.length), t.writeValue(e.length)),
      Ii.checkArgumentCount(
        e.length,
        i,
        'coder array' + (this.localName ? ' ' + this.localName : '')
      );
    let n = [];
    for (let s = 0; s < e.length; s++) n.push(this.coder);
    return ja(t, n, e);
  }
  decode(t) {
    let e = this.length;
    e === -1 &&
      ((e = t.readValue().toNumber()),
      e * 32 > t._data.length &&
        Ii.throwError('insufficient data length', z.errors.BUFFER_OVERRUN, {
          length: t._data.length,
          count: e,
        }));
    let i = [];
    for (let n = 0; n < e; n++) i.push(new Il(this.coder));
    return t.coerce(this.name, Va(t, i));
  }
}
class Tl extends ai {
  constructor(t) {
    super('bool', 'bool', t, !1);
  }
  defaultValue() {
    return !1;
  }
  encode(t, e) {
    return t.writeValue(e ? 1 : 0);
  }
  decode(t) {
    return t.coerce(this.type, !t.readValue().isZero());
  }
}
class Ja extends ai {
  constructor(t, e) {
    super(t, t, e, !0);
  }
  defaultValue() {
    return '0x';
  }
  encode(t, e) {
    e = re(e);
    let i = t.writeValue(e.length);
    return (i += t.writeBytes(e)), i;
  }
  decode(t) {
    return t.readBytes(t.readValue().toNumber(), !0);
  }
}
class Rl extends Ja {
  constructor(t) {
    super('bytes', t);
  }
  decode(t) {
    return t.coerce(this.name, $t(super.decode(t)));
  }
}
class Cl extends ai {
  constructor(t, e) {
    let i = 'bytes' + String(t);
    super(i, i, e, !1), (this.size = t);
  }
  defaultValue() {
    return '0x0000000000000000000000000000000000000000000000000000000000000000'.substring(
      0,
      2 + this.size * 2
    );
  }
  encode(t, e) {
    let i = re(e);
    return i.length !== this.size && this._throwError('incorrect data length', e), t.writeBytes(i);
  }
  decode(t) {
    return t.coerce(this.name, $t(t.readBytes(this.size)));
  }
}
class Ll extends ai {
  constructor(t) {
    super('null', '', t, !1);
  }
  defaultValue() {
    return null;
  }
  encode(t, e) {
    return e != null && this._throwError('not null', e), t.writeBytes([]);
  }
  decode(t) {
    return t.readBytes(0), t.coerce(this.name, null);
  }
}
class Ol extends ai {
  constructor(t, e, i) {
    const n = (e ? 'int' : 'uint') + t * 8;
    super(n, n, i, !1), (this.size = t), (this.signed = e);
  }
  defaultValue() {
    return 0;
  }
  encode(t, e) {
    let i = ut.from(e),
      n = If.mask(t.wordSize * 8);
    if (this.signed) {
      let s = n.mask(this.size * 8 - 1);
      (i.gt(s) || i.lt(s.add(kf).mul(Nf))) && this._throwError('value out-of-bounds', e);
    } else (i.lt(Fo) || i.gt(n.mask(this.size * 8))) && this._throwError('value out-of-bounds', e);
    return (
      (i = i.toTwos(this.size * 8).mask(this.size * 8)),
      this.signed && (i = i.fromTwos(this.size * 8).toTwos(8 * t.wordSize)),
      t.writeValue(i)
    );
  }
  decode(t) {
    let e = t.readValue().mask(this.size * 8);
    return this.signed && (e = e.fromTwos(this.size * 8)), t.coerce(this.name, e);
  }
}
class Ul extends Ja {
  constructor(t) {
    super('string', t);
  }
  defaultValue() {
    return '';
  }
  encode(t, e) {
    return super.encode(t, Wr(e));
  }
  decode(t) {
    return an(super.decode(t));
  }
}
class vn extends ai {
  constructor(t, e) {
    let i = !1;
    const n = [];
    t.forEach((u) => {
      u.dynamic && (i = !0), n.push(u.type);
    });
    const s = 'tuple(' + n.join(',') + ')';
    super('tuple', s, e, i), (this.coders = t);
  }
  defaultValue() {
    const t = [];
    this.coders.forEach((i) => {
      t.push(i.defaultValue());
    });
    const e = this.coders.reduce((i, n) => {
      const s = n.localName;
      return s && (i[s] || (i[s] = 0), i[s]++), i;
    }, {});
    return (
      this.coders.forEach((i, n) => {
        let s = i.localName;
        !s || e[s] !== 1 || (s === 'length' && (s = '_length'), t[s] == null && (t[s] = t[n]));
      }),
      Object.freeze(t)
    );
  }
  encode(t, e) {
    return ja(t, this.coders, e);
  }
  decode(t) {
    return t.coerce(this.name, Va(t, this.coders));
  }
}
const yn = new z(ln),
  Dl = new RegExp(/^bytes([0-9]*)$/),
  zl = new RegExp(/^(u?int)([0-9]*)$/);
class Kl {
  constructor(t) {
    $(this, 'coerceFunc', t || null);
  }
  _getCoder(t) {
    switch (t.baseType) {
      case 'address':
        return new kl(t.name);
      case 'bool':
        return new Tl(t.name);
      case 'string':
        return new Ul(t.name);
      case 'bytes':
        return new Rl(t.name);
      case 'array':
        return new Bl(this._getCoder(t.arrayChildren), t.arrayLength, t.name);
      case 'tuple':
        return new vn(
          (t.components || []).map((i) => this._getCoder(i)),
          t.name
        );
      case '':
        return new Ll(t.name);
    }
    let e = t.type.match(zl);
    if (e) {
      let i = parseInt(e[2] || '256');
      return (
        (i === 0 || i > 256 || i % 8 !== 0) &&
          yn.throwArgumentError('invalid ' + e[1] + ' bit length', 'param', t),
        new Ol(i / 8, e[1] === 'int', t.name)
      );
    }
    if (((e = t.type.match(Dl)), e)) {
      let i = parseInt(e[1]);
      return (
        (i === 0 || i > 32) && yn.throwArgumentError('invalid bytes length', 'param', t),
        new Cl(i, t.name)
      );
    }
    return yn.throwArgumentError('invalid type', 'type', t.type);
  }
  _getWordSize() {
    return 32;
  }
  _getReader(t, e) {
    return new Rn(t, this._getWordSize(), this.coerceFunc, e);
  }
  _getWriter() {
    return new bs(this._getWordSize());
  }
  getDefaultValue(t) {
    const e = t.map((n) => this._getCoder(Ve.from(n)));
    return new vn(e, '_').defaultValue();
  }
  encode(t, e) {
    t.length !== e.length &&
      yn.throwError('types/values length mismatch', z.errors.INVALID_ARGUMENT, {
        count: { types: t.length, values: e.length },
        value: { types: t, values: e },
      });
    const i = t.map((u) => this._getCoder(Ve.from(u))),
      n = new vn(i, '_'),
      s = this._getWriter();
    return n.encode(s, e), s.data;
  }
  decode(t, e, i) {
    const n = t.map((u) => this._getCoder(Ve.from(u)));
    return new vn(n, '_').decode(this._getReader(re(e), i));
  }
}
const ql = new Kl(),
  ke = new z(ln);
class Fl extends sn {}
class Hl extends sn {}
class Gl extends sn {}
class As extends sn {
  static isIndexed(t) {
    return !!(t && t._isIndexed);
  }
}
const jl = {
  '0x08c379a0': { signature: 'Error(string)', name: 'Error', inputs: ['string'], reason: !0 },
  '0x4e487b71': { signature: 'Panic(uint256)', name: 'Panic', inputs: ['uint256'] },
};
function ko(r, t) {
  const e = new Error(`deferred error during ABI decoding triggered accessing ${r}`);
  return (e.error = t), e;
}
class Io {
  constructor(t) {
    let e = [];
    typeof t == 'string' ? (e = JSON.parse(t)) : (e = t),
      $(
        this,
        'fragments',
        e.map((i) => ni.from(i)).filter((i) => i != null)
      ),
      $(this, '_abiCoder', Vr(new.target, 'getAbiCoder')()),
      $(this, 'functions', {}),
      $(this, 'errors', {}),
      $(this, 'events', {}),
      $(this, 'structs', {}),
      this.fragments.forEach((i) => {
        let n = null;
        switch (i.type) {
          case 'constructor':
            if (this.deploy) {
              ke.warn('duplicate definition - constructor');
              return;
            }
            $(this, 'deploy', i);
            return;
          case 'function':
            n = this.functions;
            break;
          case 'event':
            n = this.events;
            break;
          case 'error':
            n = this.errors;
            break;
          default:
            return;
        }
        let s = i.format();
        if (n[s]) {
          ke.warn('duplicate definition - ' + s);
          return;
        }
        n[s] = i;
      }),
      this.deploy || $(this, 'deploy', Gr.from({ payable: !1, type: 'constructor' })),
      $(this, '_isInterface', !0);
  }
  format(t) {
    t || (t = Me.full),
      t === Me.sighash &&
        ke.throwArgumentError('interface does not support formatting sighash', 'format', t);
    const e = this.fragments.map((i) => i.format(t));
    return t === Me.json ? JSON.stringify(e.map((i) => JSON.parse(i))) : e;
  }
  static getAbiCoder() {
    return ql;
  }
  static getAddress(t) {
    return Je(t);
  }
  static getSighash(t) {
    return er(ki(t.format()), 0, 4);
  }
  static getEventTopic(t) {
    return ki(t.format());
  }
  getFunction(t) {
    if (De(t)) {
      for (const i in this.functions) if (t === this.getSighash(i)) return this.functions[i];
      ke.throwArgumentError('no matching function', 'sighash', t);
    }
    if (t.indexOf('(') === -1) {
      const i = t.trim(),
        n = Object.keys(this.functions).filter((s) => s.split('(')[0] === i);
      return (
        n.length === 0
          ? ke.throwArgumentError('no matching function', 'name', i)
          : n.length > 1 && ke.throwArgumentError('multiple matching functions', 'name', i),
        this.functions[n[0]]
      );
    }
    const e = this.functions[jr.fromString(t).format()];
    return e || ke.throwArgumentError('no matching function', 'signature', t), e;
  }
  getEvent(t) {
    if (De(t)) {
      const i = t.toLowerCase();
      for (const n in this.events) if (i === this.getEventTopic(n)) return this.events[n];
      ke.throwArgumentError('no matching event', 'topichash', i);
    }
    if (t.indexOf('(') === -1) {
      const i = t.trim(),
        n = Object.keys(this.events).filter((s) => s.split('(')[0] === i);
      return (
        n.length === 0
          ? ke.throwArgumentError('no matching event', 'name', i)
          : n.length > 1 && ke.throwArgumentError('multiple matching events', 'name', i),
        this.events[n[0]]
      );
    }
    const e = this.events[ii.fromString(t).format()];
    return e || ke.throwArgumentError('no matching event', 'signature', t), e;
  }
  getError(t) {
    if (De(t)) {
      const i = Vr(this.constructor, 'getSighash');
      for (const n in this.errors) {
        const s = this.errors[n];
        if (t === i(s)) return this.errors[n];
      }
      ke.throwArgumentError('no matching error', 'sighash', t);
    }
    if (t.indexOf('(') === -1) {
      const i = t.trim(),
        n = Object.keys(this.errors).filter((s) => s.split('(')[0] === i);
      return (
        n.length === 0
          ? ke.throwArgumentError('no matching error', 'name', i)
          : n.length > 1 && ke.throwArgumentError('multiple matching errors', 'name', i),
        this.errors[n[0]]
      );
    }
    const e = this.errors[jr.fromString(t).format()];
    return e || ke.throwArgumentError('no matching error', 'signature', t), e;
  }
  getSighash(t) {
    if (typeof t == 'string')
      try {
        t = this.getFunction(t);
      } catch (e) {
        try {
          t = this.getError(t);
        } catch {
          throw e;
        }
      }
    return Vr(this.constructor, 'getSighash')(t);
  }
  getEventTopic(t) {
    return typeof t == 'string' && (t = this.getEvent(t)), Vr(this.constructor, 'getEventTopic')(t);
  }
  _decodeParams(t, e) {
    return this._abiCoder.decode(t, e);
  }
  _encodeParams(t, e) {
    return this._abiCoder.encode(t, e);
  }
  encodeDeploy(t) {
    return this._encodeParams(this.deploy.inputs, t || []);
  }
  decodeErrorResult(t, e) {
    typeof t == 'string' && (t = this.getError(t));
    const i = re(e);
    return (
      $t(i.slice(0, 4)) !== this.getSighash(t) &&
        ke.throwArgumentError(`data signature does not match error ${t.name}.`, 'data', $t(i)),
      this._decodeParams(t.inputs, i.slice(4))
    );
  }
  encodeErrorResult(t, e) {
    return (
      typeof t == 'string' && (t = this.getError(t)),
      $t(vr([this.getSighash(t), this._encodeParams(t.inputs, e || [])]))
    );
  }
  decodeFunctionData(t, e) {
    typeof t == 'string' && (t = this.getFunction(t));
    const i = re(e);
    return (
      $t(i.slice(0, 4)) !== this.getSighash(t) &&
        ke.throwArgumentError(`data signature does not match function ${t.name}.`, 'data', $t(i)),
      this._decodeParams(t.inputs, i.slice(4))
    );
  }
  encodeFunctionData(t, e) {
    return (
      typeof t == 'string' && (t = this.getFunction(t)),
      $t(vr([this.getSighash(t), this._encodeParams(t.inputs, e || [])]))
    );
  }
  decodeFunctionResult(t, e) {
    typeof t == 'string' && (t = this.getFunction(t));
    let i = re(e),
      n = null,
      s = '',
      u = null,
      d = null,
      v = null;
    switch (i.length % this._abiCoder._getWordSize()) {
      case 0:
        try {
          return this._abiCoder.decode(t.outputs, i);
        } catch {}
        break;
      case 4: {
        const E = $t(i.slice(0, 4)),
          S = jl[E];
        if (S)
          (u = this._abiCoder.decode(S.inputs, i.slice(4))),
            (d = S.name),
            (v = S.signature),
            S.reason && (n = u[0]),
            d === 'Error'
              ? (s = `; VM Exception while processing transaction: reverted with reason string ${JSON.stringify(u[0])}`)
              : d === 'Panic' &&
                (s = `; VM Exception while processing transaction: reverted with panic code ${u[0]}`);
        else
          try {
            const P = this.getError(E);
            (u = this._abiCoder.decode(P.inputs, i.slice(4))), (d = P.name), (v = P.format());
          } catch {}
        break;
      }
    }
    return ke.throwError('call revert exception' + s, z.errors.CALL_EXCEPTION, {
      method: t.format(),
      data: $t(e),
      errorArgs: u,
      errorName: d,
      errorSignature: v,
      reason: n,
    });
  }
  encodeFunctionResult(t, e) {
    return (
      typeof t == 'string' && (t = this.getFunction(t)),
      $t(this._abiCoder.encode(t.outputs, e || []))
    );
  }
  encodeFilterTopics(t, e) {
    typeof t == 'string' && (t = this.getEvent(t)),
      e.length > t.inputs.length &&
        ke.throwError('too many arguments for ' + t.format(), z.errors.UNEXPECTED_ARGUMENT, {
          argument: 'values',
          value: e,
        });
    let i = [];
    t.anonymous || i.push(this.getEventTopic(t));
    const n = (s, u) =>
      s.type === 'string'
        ? ki(u)
        : s.type === 'bytes'
          ? He($t(u))
          : (s.type === 'bool' && typeof u == 'boolean' && (u = u ? '0x01' : '0x00'),
            s.type.match(/^u?int/) && (u = ut.from(u).toHexString()),
            s.type === 'address' && this._abiCoder.encode(['address'], [u]),
            je($t(u), 32));
    for (
      e.forEach((s, u) => {
        let d = t.inputs[u];
        if (!d.indexed) {
          s != null &&
            ke.throwArgumentError(
              'cannot filter non-indexed parameters; must be null',
              'contract.' + d.name,
              s
            );
          return;
        }
        s == null
          ? i.push(null)
          : d.baseType === 'array' || d.baseType === 'tuple'
            ? ke.throwArgumentError(
                'filtering with tuples or arrays not supported',
                'contract.' + d.name,
                s
              )
            : Array.isArray(s)
              ? i.push(s.map((v) => n(d, v)))
              : i.push(n(d, s));
      });
      i.length && i[i.length - 1] === null;

    )
      i.pop();
    return i;
  }
  encodeEventLog(t, e) {
    typeof t == 'string' && (t = this.getEvent(t));
    const i = [],
      n = [],
      s = [];
    return (
      t.anonymous || i.push(this.getEventTopic(t)),
      e.length !== t.inputs.length &&
        ke.throwArgumentError('event arguments/values mismatch', 'values', e),
      t.inputs.forEach((u, d) => {
        const v = e[d];
        if (u.indexed)
          if (u.type === 'string') i.push(ki(v));
          else if (u.type === 'bytes') i.push(He(v));
          else {
            if (u.baseType === 'tuple' || u.baseType === 'array')
              throw new Error('not implemented');
            i.push(this._abiCoder.encode([u.type], [v]));
          }
        else n.push(u), s.push(v);
      }),
      { data: this._abiCoder.encode(n, s), topics: i }
    );
  }
  decodeEventLog(t, e, i) {
    if ((typeof t == 'string' && (t = this.getEvent(t)), i != null && !t.anonymous)) {
      let I = this.getEventTopic(t);
      (!De(i[0], 32) || i[0].toLowerCase() !== I) &&
        ke.throwError('fragment/topic mismatch', z.errors.INVALID_ARGUMENT, {
          argument: 'topics[0]',
          expected: I,
          value: i[0],
        }),
        (i = i.slice(1));
    }
    let n = [],
      s = [],
      u = [];
    t.inputs.forEach((I, R) => {
      I.indexed
        ? I.type === 'string' ||
          I.type === 'bytes' ||
          I.baseType === 'tuple' ||
          I.baseType === 'array'
          ? (n.push(Ve.fromObject({ type: 'bytes32', name: I.name })), u.push(!0))
          : (n.push(I), u.push(!1))
        : (s.push(I), u.push(!1));
    });
    let d = i != null ? this._abiCoder.decode(n, vr(i)) : null,
      v = this._abiCoder.decode(s, e, !0),
      E = [],
      S = 0,
      P = 0;
    t.inputs.forEach((I, R) => {
      if (I.indexed)
        if (d == null) E[R] = new As({ _isIndexed: !0, hash: null });
        else if (u[R]) E[R] = new As({ _isIndexed: !0, hash: d[P++] });
        else
          try {
            E[R] = d[P++];
          } catch (C) {
            E[R] = C;
          }
      else
        try {
          E[R] = v[S++];
        } catch (C) {
          E[R] = C;
        }
      if (I.name && E[I.name] == null) {
        const C = E[R];
        C instanceof Error
          ? Object.defineProperty(E, I.name, {
              enumerable: !0,
              get: () => {
                throw ko(`property ${JSON.stringify(I.name)}`, C);
              },
            })
          : (E[I.name] = C);
      }
    });
    for (let I = 0; I < E.length; I++) {
      const R = E[I];
      R instanceof Error &&
        Object.defineProperty(E, I, {
          enumerable: !0,
          get: () => {
            throw ko(`index ${I}`, R);
          },
        });
    }
    return Object.freeze(E);
  }
  parseTransaction(t) {
    let e = this.getFunction(t.data.substring(0, 10).toLowerCase());
    return e
      ? new Hl({
          args: this._abiCoder.decode(e.inputs, '0x' + t.data.substring(10)),
          functionFragment: e,
          name: e.name,
          signature: e.format(),
          sighash: this.getSighash(e),
          value: ut.from(t.value || '0'),
        })
      : null;
  }
  parseLog(t) {
    let e = this.getEvent(t.topics[0]);
    return !e || e.anonymous
      ? null
      : new Fl({
          eventFragment: e,
          name: e.name,
          signature: e.format(),
          topic: this.getEventTopic(e),
          args: this.decodeEventLog(e, t.data, t.topics),
        });
  }
  parseError(t) {
    const e = $t(t);
    let i = this.getError(e.substring(0, 10).toLowerCase());
    return i
      ? new Gl({
          args: this._abiCoder.decode(i.inputs, '0x' + e.substring(10)),
          errorFragment: i,
          name: i.name,
          signature: i.format(),
          sighash: this.getSighash(i),
        })
      : null;
  }
  static isInterface(t) {
    return !!(t && t._isInterface);
  }
}
const Vl = 'contracts/5.7.0';
var Ei = function (r, t, e, i) {
  function n(s) {
    return s instanceof e
      ? s
      : new e(function (u) {
          u(s);
        });
  }
  return new (e || (e = Promise))(function (s, u) {
    function d(S) {
      try {
        E(i.next(S));
      } catch (P) {
        u(P);
      }
    }
    function v(S) {
      try {
        E(i.throw(S));
      } catch (P) {
        u(P);
      }
    }
    function E(S) {
      S.done ? s(S.value) : n(S.value).then(d, v);
    }
    E((i = i.apply(r, t || [])).next());
  });
};
const Ue = new z(Vl);
function Cn(r, t) {
  return Ei(this, void 0, void 0, function* () {
    const e = yield t;
    typeof e != 'string' && Ue.throwArgumentError('invalid address or ENS name', 'name', e);
    try {
      return Je(e);
    } catch {}
    r ||
      Ue.throwError(
        'a provider or signer is needed to resolve ENS names',
        z.errors.UNSUPPORTED_OPERATION,
        { operation: 'resolveName' }
      );
    const i = yield r.resolveName(e);
    return (
      i == null &&
        Ue.throwArgumentError('resolver or addr is not configured for ENS name', 'name', e),
      i
    );
  });
}
function Mn(r, t, e) {
  return Ei(this, void 0, void 0, function* () {
    return Array.isArray(e)
      ? yield Promise.all(e.map((i, n) => Mn(r, Array.isArray(t) ? t[n] : t[i.name], i)))
      : e.type === 'address'
        ? yield Cn(r, t)
        : e.type === 'tuple'
          ? yield Mn(r, t, e.components)
          : e.baseType === 'array'
            ? Array.isArray(t)
              ? yield Promise.all(t.map((i) => Mn(r, i, e.arrayChildren)))
              : Promise.reject(
                  Ue.makeError('invalid value for array', z.errors.INVALID_ARGUMENT, {
                    argument: 'value',
                    value: t,
                  })
                )
            : t;
  });
}
function Qn(r, t, e) {
  return Ei(this, void 0, void 0, function* () {
    let i = {};
    e.length === t.inputs.length + 1 && typeof e[e.length - 1] == 'object' && (i = Ge(e.pop())),
      Ue.checkArgumentCount(e.length, t.inputs.length, 'passed to contract'),
      r.signer
        ? i.from
          ? (i.from = ze({ override: Cn(r.signer, i.from), signer: r.signer.getAddress() }).then(
              (E) =>
                Ei(this, void 0, void 0, function* () {
                  return (
                    Je(E.signer) !== E.override &&
                      Ue.throwError(
                        'Contract with a Signer cannot override from',
                        z.errors.UNSUPPORTED_OPERATION,
                        { operation: 'overrides.from' }
                      ),
                    E.override
                  );
                })
            ))
          : (i.from = r.signer.getAddress())
        : i.from && (i.from = Cn(r.provider, i.from));
    const n = yield ze({
        args: Mn(r.signer || r.provider, e, t.inputs),
        address: r.resolvedAddress,
        overrides: ze(i) || {},
      }),
      s = r.interface.encodeFunctionData(t, n.args),
      u = { data: s, to: n.address },
      d = n.overrides;
    if (
      (d.nonce != null && (u.nonce = ut.from(d.nonce).toNumber()),
      d.gasLimit != null && (u.gasLimit = ut.from(d.gasLimit)),
      d.gasPrice != null && (u.gasPrice = ut.from(d.gasPrice)),
      d.maxFeePerGas != null && (u.maxFeePerGas = ut.from(d.maxFeePerGas)),
      d.maxPriorityFeePerGas != null && (u.maxPriorityFeePerGas = ut.from(d.maxPriorityFeePerGas)),
      d.from != null && (u.from = d.from),
      d.type != null && (u.type = d.type),
      d.accessList != null && (u.accessList = Oi(d.accessList)),
      u.gasLimit == null && t.gas != null)
    ) {
      let E = 21e3;
      const S = re(s);
      for (let P = 0; P < S.length; P++) (E += 4), S[P] && (E += 64);
      u.gasLimit = ut.from(t.gas).add(E);
    }
    if (d.value) {
      const E = ut.from(d.value);
      !E.isZero() &&
        !t.payable &&
        Ue.throwError('non-payable method cannot override value', z.errors.UNSUPPORTED_OPERATION, {
          operation: 'overrides.value',
          value: i.value,
        }),
        (u.value = E);
    }
    d.customData && (u.customData = Ge(d.customData)),
      d.ccipReadEnabled && (u.ccipReadEnabled = !!d.ccipReadEnabled),
      delete i.nonce,
      delete i.gasLimit,
      delete i.gasPrice,
      delete i.from,
      delete i.value,
      delete i.type,
      delete i.accessList,
      delete i.maxFeePerGas,
      delete i.maxPriorityFeePerGas,
      delete i.customData,
      delete i.ccipReadEnabled;
    const v = Object.keys(i).filter((E) => i[E] != null);
    return (
      v.length &&
        Ue.throwError(
          `cannot override ${v.map((E) => JSON.stringify(E)).join(',')}`,
          z.errors.UNSUPPORTED_OPERATION,
          { operation: 'overrides', overrides: v }
        ),
      u
    );
  });
}
function Jl(r, t) {
  return function (...e) {
    return Qn(r, t, e);
  };
}
function Yl(r, t) {
  const e = r.signer || r.provider;
  return function (...i) {
    return Ei(this, void 0, void 0, function* () {
      e ||
        Ue.throwError('estimate require a provider or signer', z.errors.UNSUPPORTED_OPERATION, {
          operation: 'estimateGas',
        });
      const n = yield Qn(r, t, i);
      return yield e.estimateGas(n);
    });
  };
}
function Zl(r, t) {
  const e = t.wait.bind(t);
  t.wait = (i) =>
    e(i).then(
      (n) => (
        (n.events = n.logs.map((s) => {
          let u = oi(s),
            d = null;
          try {
            d = r.interface.parseLog(s);
          } catch {}
          return (
            d &&
              ((u.args = d.args),
              (u.decode = (v, E) => r.interface.decodeEventLog(d.eventFragment, v, E)),
              (u.event = d.name),
              (u.eventSignature = d.signature)),
            (u.removeListener = () => r.provider),
            (u.getBlock = () => r.provider.getBlock(n.blockHash)),
            (u.getTransaction = () => r.provider.getTransaction(n.transactionHash)),
            (u.getTransactionReceipt = () => Promise.resolve(n)),
            u
          );
        })),
        n
      )
    );
}
function Ya(r, t, e) {
  const i = r.signer || r.provider;
  return function (...n) {
    return Ei(this, void 0, void 0, function* () {
      let s;
      if (n.length === t.inputs.length + 1 && typeof n[n.length - 1] == 'object') {
        const v = Ge(n.pop());
        v.blockTag != null && (s = yield v.blockTag), delete v.blockTag, n.push(v);
      }
      r.deployTransaction != null && (yield r._deployed(s));
      const u = yield Qn(r, t, n),
        d = yield i.call(u, s);
      try {
        let v = r.interface.decodeFunctionResult(t, d);
        return e && t.outputs.length === 1 && (v = v[0]), v;
      } catch (v) {
        throw (
          (v.code === z.errors.CALL_EXCEPTION &&
            ((v.address = r.address), (v.args = n), (v.transaction = u)),
          v)
        );
      }
    });
  };
}
function Ql(r, t) {
  return function (...e) {
    return Ei(this, void 0, void 0, function* () {
      r.signer ||
        Ue.throwError('sending a transaction requires a signer', z.errors.UNSUPPORTED_OPERATION, {
          operation: 'sendTransaction',
        }),
        r.deployTransaction != null && (yield r._deployed());
      const i = yield Qn(r, t, e),
        n = yield r.signer.sendTransaction(i);
      return Zl(r, n), n;
    });
  };
}
function Bo(r, t, e) {
  return t.constant ? Ya(r, t, e) : Ql(r, t);
}
function Za(r) {
  return r.address && (r.topics == null || r.topics.length === 0)
    ? '*'
    : (r.address || '*') +
        '@' +
        (r.topics ? r.topics.map((t) => (Array.isArray(t) ? t.join('|') : t)).join(':') : '');
}
class rn {
  constructor(t, e) {
    $(this, 'tag', t), $(this, 'filter', e), (this._listeners = []);
  }
  addListener(t, e) {
    this._listeners.push({ listener: t, once: e });
  }
  removeListener(t) {
    let e = !1;
    this._listeners = this._listeners.filter((i) => (e || i.listener !== t ? !0 : ((e = !0), !1)));
  }
  removeAllListeners() {
    this._listeners = [];
  }
  listeners() {
    return this._listeners.map((t) => t.listener);
  }
  listenerCount() {
    return this._listeners.length;
  }
  run(t) {
    const e = this.listenerCount();
    return (
      (this._listeners = this._listeners.filter((i) => {
        const n = t.slice();
        return (
          setTimeout(() => {
            i.listener.apply(this, n);
          }, 0),
          !i.once
        );
      })),
      e
    );
  }
  prepareEvent(t) {}
  getEmit(t) {
    return [t];
  }
}
class Wl extends rn {
  constructor() {
    super('error', null);
  }
}
class To extends rn {
  constructor(t, e, i, n) {
    const s = { address: t };
    let u = e.getEventTopic(i);
    n
      ? (u !== n[0] && Ue.throwArgumentError('topic mismatch', 'topics', n), (s.topics = n.slice()))
      : (s.topics = [u]),
      super(Za(s), s),
      $(this, 'address', t),
      $(this, 'interface', e),
      $(this, 'fragment', i);
  }
  prepareEvent(t) {
    super.prepareEvent(t),
      (t.event = this.fragment.name),
      (t.eventSignature = this.fragment.format()),
      (t.decode = (e, i) => this.interface.decodeEventLog(this.fragment, e, i));
    try {
      t.args = this.interface.decodeEventLog(this.fragment, t.data, t.topics);
    } catch (e) {
      (t.args = null), (t.decodeError = e);
    }
  }
  getEmit(t) {
    const e = Nl(t.args);
    if (e.length) throw e[0].error;
    const i = (t.args || []).slice();
    return i.push(t), i;
  }
}
class Ro extends rn {
  constructor(t, e) {
    super('*', { address: t }), $(this, 'address', t), $(this, 'interface', e);
  }
  prepareEvent(t) {
    super.prepareEvent(t);
    try {
      const e = this.interface.parseLog(t);
      (t.event = e.name),
        (t.eventSignature = e.signature),
        (t.decode = (i, n) => this.interface.decodeEventLog(e.eventFragment, i, n)),
        (t.args = e.args);
    } catch {}
  }
}
class Xl {
  constructor(t, e, i) {
    $(this, 'interface', Vr(new.target, 'getInterface')(e)),
      i == null
        ? ($(this, 'provider', null), $(this, 'signer', null))
        : on.isSigner(i)
          ? ($(this, 'provider', i.provider || null), $(this, 'signer', i))
          : On.isProvider(i)
            ? ($(this, 'provider', i), $(this, 'signer', null))
            : Ue.throwArgumentError('invalid signer or provider', 'signerOrProvider', i),
      $(this, 'callStatic', {}),
      $(this, 'estimateGas', {}),
      $(this, 'functions', {}),
      $(this, 'populateTransaction', {}),
      $(this, 'filters', {});
    {
      const u = {};
      Object.keys(this.interface.events).forEach((d) => {
        const v = this.interface.events[d];
        $(this.filters, d, (...E) => ({
          address: this.address,
          topics: this.interface.encodeFilterTopics(v, E),
        })),
          u[v.name] || (u[v.name] = []),
          u[v.name].push(d);
      }),
        Object.keys(u).forEach((d) => {
          const v = u[d];
          v.length === 1
            ? $(this.filters, d, this.filters[v[0]])
            : Ue.warn(`Duplicate definition of ${d} (${v.join(', ')})`);
        });
    }
    if (
      ($(this, '_runningEvents', {}),
      $(this, '_wrappedEmits', {}),
      t == null &&
        Ue.throwArgumentError('invalid contract address or ENS name', 'addressOrName', t),
      $(this, 'address', t),
      this.provider)
    )
      $(this, 'resolvedAddress', Cn(this.provider, t));
    else
      try {
        $(this, 'resolvedAddress', Promise.resolve(Je(t)));
      } catch {
        Ue.throwError(
          'provider is required to use ENS name as contract address',
          z.errors.UNSUPPORTED_OPERATION,
          { operation: 'new Contract' }
        );
      }
    this.resolvedAddress.catch((u) => {});
    const n = {},
      s = {};
    Object.keys(this.interface.functions).forEach((u) => {
      const d = this.interface.functions[u];
      if (s[u]) {
        Ue.warn(`Duplicate ABI entry for ${JSON.stringify(u)}`);
        return;
      }
      s[u] = !0;
      {
        const v = d.name;
        n[`%${v}`] || (n[`%${v}`] = []), n[`%${v}`].push(u);
      }
      this[u] == null && $(this, u, Bo(this, d, !0)),
        this.functions[u] == null && $(this.functions, u, Bo(this, d, !1)),
        this.callStatic[u] == null && $(this.callStatic, u, Ya(this, d, !0)),
        this.populateTransaction[u] == null && $(this.populateTransaction, u, Jl(this, d)),
        this.estimateGas[u] == null && $(this.estimateGas, u, Yl(this, d));
    }),
      Object.keys(n).forEach((u) => {
        const d = n[u];
        if (d.length > 1) return;
        u = u.substring(1);
        const v = d[0];
        try {
          this[u] == null && $(this, u, this[v]);
        } catch {}
        this.functions[u] == null && $(this.functions, u, this.functions[v]),
          this.callStatic[u] == null && $(this.callStatic, u, this.callStatic[v]),
          this.populateTransaction[u] == null &&
            $(this.populateTransaction, u, this.populateTransaction[v]),
          this.estimateGas[u] == null && $(this.estimateGas, u, this.estimateGas[v]);
      });
  }
  static getContractAddress(t) {
    return zo(t);
  }
  static getInterface(t) {
    return Io.isInterface(t) ? t : new Io(t);
  }
  deployed() {
    return this._deployed();
  }
  _deployed(t) {
    return (
      this._deployedPromise ||
        (this.deployTransaction
          ? (this._deployedPromise = this.deployTransaction.wait().then(() => this))
          : (this._deployedPromise = this.provider
              .getCode(this.address, t)
              .then(
                (e) => (
                  e === '0x' &&
                    Ue.throwError('contract not deployed', z.errors.UNSUPPORTED_OPERATION, {
                      contractAddress: this.address,
                      operation: 'getDeployed',
                    }),
                  this
                )
              ))),
      this._deployedPromise
    );
  }
  fallback(t) {
    this.signer ||
      Ue.throwError('sending a transactions require a signer', z.errors.UNSUPPORTED_OPERATION, {
        operation: 'sendTransaction(fallback)',
      });
    const e = Ge(t || {});
    return (
      ['from', 'to'].forEach(function (i) {
        e[i] != null &&
          Ue.throwError('cannot override ' + i, z.errors.UNSUPPORTED_OPERATION, { operation: i });
      }),
      (e.to = this.resolvedAddress),
      this.deployed().then(() => this.signer.sendTransaction(e))
    );
  }
  connect(t) {
    typeof t == 'string' && (t = new Ss(t, this.provider));
    const e = new this.constructor(this.address, this.interface, t);
    return this.deployTransaction && $(e, 'deployTransaction', this.deployTransaction), e;
  }
  attach(t) {
    return new this.constructor(t, this.interface, this.signer || this.provider);
  }
  static isIndexed(t) {
    return As.isIndexed(t);
  }
  _normalizeRunningEvent(t) {
    return this._runningEvents[t.tag] ? this._runningEvents[t.tag] : t;
  }
  _getRunningEvent(t) {
    if (typeof t == 'string') {
      if (t === 'error') return this._normalizeRunningEvent(new Wl());
      if (t === 'event') return this._normalizeRunningEvent(new rn('event', null));
      if (t === '*') return this._normalizeRunningEvent(new Ro(this.address, this.interface));
      const e = this.interface.getEvent(t);
      return this._normalizeRunningEvent(new To(this.address, this.interface, e));
    }
    if (t.topics && t.topics.length > 0) {
      try {
        const i = t.topics[0];
        if (typeof i != 'string') throw new Error('invalid topic');
        const n = this.interface.getEvent(i);
        return this._normalizeRunningEvent(new To(this.address, this.interface, n, t.topics));
      } catch {}
      const e = { address: this.address, topics: t.topics };
      return this._normalizeRunningEvent(new rn(Za(e), e));
    }
    return this._normalizeRunningEvent(new Ro(this.address, this.interface));
  }
  _checkRunningEvents(t) {
    if (t.listenerCount() === 0) {
      delete this._runningEvents[t.tag];
      const e = this._wrappedEmits[t.tag];
      e && t.filter && (this.provider.off(t.filter, e), delete this._wrappedEmits[t.tag]);
    }
  }
  _wrapEvent(t, e, i) {
    const n = oi(e);
    return (
      (n.removeListener = () => {
        i && (t.removeListener(i), this._checkRunningEvents(t));
      }),
      (n.getBlock = () => this.provider.getBlock(e.blockHash)),
      (n.getTransaction = () => this.provider.getTransaction(e.transactionHash)),
      (n.getTransactionReceipt = () => this.provider.getTransactionReceipt(e.transactionHash)),
      t.prepareEvent(n),
      n
    );
  }
  _addEventListener(t, e, i) {
    if (
      (this.provider ||
        Ue.throwError(
          'events require a provider or a signer with a provider',
          z.errors.UNSUPPORTED_OPERATION,
          { operation: 'once' }
        ),
      t.addListener(e, i),
      (this._runningEvents[t.tag] = t),
      !this._wrappedEmits[t.tag])
    ) {
      const n = (s) => {
        let u = this._wrapEvent(t, s, e);
        if (u.decodeError == null)
          try {
            const d = t.getEmit(u);
            this.emit(t.filter, ...d);
          } catch (d) {
            u.decodeError = d.error;
          }
        t.filter != null && this.emit('event', u),
          u.decodeError != null && this.emit('error', u.decodeError, u);
      };
      (this._wrappedEmits[t.tag] = n), t.filter != null && this.provider.on(t.filter, n);
    }
  }
  queryFilter(t, e, i) {
    const n = this._getRunningEvent(t),
      s = Ge(n.filter);
    return (
      typeof e == 'string' && De(e, 32)
        ? (i != null &&
            Ue.throwArgumentError('cannot specify toBlock with blockhash', 'toBlock', i),
          (s.blockHash = e))
        : ((s.fromBlock = e ?? 0), (s.toBlock = i ?? 'latest')),
      this.provider.getLogs(s).then((u) => u.map((d) => this._wrapEvent(n, d, null)))
    );
  }
  on(t, e) {
    return this._addEventListener(this._getRunningEvent(t), e, !1), this;
  }
  once(t, e) {
    return this._addEventListener(this._getRunningEvent(t), e, !0), this;
  }
  emit(t, ...e) {
    if (!this.provider) return !1;
    const i = this._getRunningEvent(t),
      n = i.run(e) > 0;
    return this._checkRunningEvents(i), n;
  }
  listenerCount(t) {
    return this.provider
      ? t == null
        ? Object.keys(this._runningEvents).reduce(
            (e, i) => e + this._runningEvents[i].listenerCount(),
            0
          )
        : this._getRunningEvent(t).listenerCount()
      : 0;
  }
  listeners(t) {
    if (!this.provider) return [];
    if (t == null) {
      const e = [];
      for (let i in this._runningEvents)
        this._runningEvents[i].listeners().forEach((n) => {
          e.push(n);
        });
      return e;
    }
    return this._getRunningEvent(t).listeners();
  }
  removeAllListeners(t) {
    if (!this.provider) return this;
    if (t == null) {
      for (const i in this._runningEvents) {
        const n = this._runningEvents[i];
        n.removeAllListeners(), this._checkRunningEvents(n);
      }
      return this;
    }
    const e = this._getRunningEvent(t);
    return e.removeAllListeners(), this._checkRunningEvents(e), this;
  }
  off(t, e) {
    if (!this.provider) return this;
    const i = this._getRunningEvent(t);
    return i.removeListener(e), this._checkRunningEvents(i), this;
  }
  removeListener(t, e) {
    return this.off(t, e);
  }
}
class A0 extends Xl {}
var $l = {},
  Yr = {},
  Be = {};
Object.defineProperty(Be, '__esModule', { value: !0 });
Be.isHexString =
  Be.getKeys =
  Be.fromAscii =
  Be.fromUtf8 =
  Be.toAscii =
  Be.arrayContainsArray =
  Be.getBinarySize =
  Be.padToEven =
  e0 =
  Be.stripHexPrefix =
  Be.isHexPrefixed =
    void 0;
function Qa(r) {
  if (typeof r != 'string')
    throw new Error(`[isHexPrefixed] input must be type 'string', received type ${typeof r}`);
  return r[0] === '0' && r[1] === 'x';
}
Be.isHexPrefixed = Qa;
const t0 = (r) => {
  if (typeof r != 'string')
    throw new Error(`[stripHexPrefix] input must be type 'string', received ${typeof r}`);
  return Qa(r) ? r.slice(2) : r;
};
var e0 = (Be.stripHexPrefix = t0);
function Wa(r) {
  let t = r;
  if (typeof t != 'string')
    throw new Error(`[padToEven] value must be type 'string', received ${typeof t}`);
  return t.length % 2 && (t = `0${t}`), t;
}
Be.padToEven = Wa;
function r0(r) {
  if (typeof r != 'string')
    throw new Error(`[getBinarySize] method requires input type 'string', received ${typeof r}`);
  return F.byteLength(r, 'utf8');
}
Be.getBinarySize = r0;
function i0(r, t, e) {
  if (Array.isArray(r) !== !0)
    throw new Error(
      `[arrayContainsArray] method requires input 'superset' to be an array, got type '${typeof r}'`
    );
  if (Array.isArray(t) !== !0)
    throw new Error(
      `[arrayContainsArray] method requires input 'subset' to be an array, got type '${typeof t}'`
    );
  return t[e === !0 ? 'some' : 'every']((i) => r.indexOf(i) >= 0);
}
Be.arrayContainsArray = i0;
function n0(r) {
  let t = '',
    e = 0;
  const i = r.length;
  for (r.substring(0, 2) === '0x' && (e = 2); e < i; e += 2) {
    const n = parseInt(r.substr(e, 2), 16);
    t += String.fromCharCode(n);
  }
  return t;
}
Be.toAscii = n0;
function s0(r) {
  const t = F.from(r, 'utf8');
  return `0x${Wa(t.toString('hex')).replace(/^0+|0+$/g, '')}`;
}
Be.fromUtf8 = s0;
function o0(r) {
  let t = '';
  for (let e = 0; e < r.length; e++) {
    const n = r.charCodeAt(e).toString(16);
    t += n.length < 2 ? `0${n}` : n;
  }
  return `0x${t}`;
}
Be.fromAscii = o0;
function a0(r, t, e) {
  if (!Array.isArray(r))
    throw new Error(`[getKeys] method expects input 'params' to be an array, got ${typeof r}`);
  if (typeof t != 'string')
    throw new Error(`[getKeys] method expects input 'key' to be type 'string', got ${typeof r}`);
  const i = [];
  for (let n = 0; n < r.length; n++) {
    let s = r[n][t];
    if (e === !0 && !s) s = '';
    else if (typeof s != 'string')
      throw new Error(`invalid abi - expected type 'string', received ${typeof s}`);
    i.push(s);
  }
  return i;
}
Be.getKeys = a0;
function f0(r, t) {
  return !(
    typeof r != 'string' ||
    !r.match(/^0x[0-9A-Fa-f]*$/) ||
    (typeof t < 'u' && t > 0 && r.length !== 2 + 2 * t)
  );
}
Be.isHexString = f0;
Object.defineProperty(Yr, '__esModule', { value: !0 });
Yr.assertIsString = Yr.assertIsArray = Yr.assertIsBuffer = Yr.assertIsHexString = void 0;
const u0 = Be,
  h0 = function (r) {
    if (!(0, u0.isHexString)(r)) {
      const t = `This method only supports 0x-prefixed hex strings but input was: ${r}`;
      throw new Error(t);
    }
  };
Yr.assertIsHexString = h0;
const l0 = function (r) {
  if (!F.isBuffer(r)) {
    const t = `This method only supports Buffer but input was: ${r}`;
    throw new Error(t);
  }
};
Yr.assertIsBuffer = l0;
const c0 = function (r) {
  if (!Array.isArray(r)) {
    const t = `This method only supports number arrays but input was: ${r}`;
    throw new Error(t);
  }
};
Yr.assertIsArray = c0;
const d0 = function (r) {
  if (typeof r != 'string') {
    const t = `This method only supports strings but input was: ${r}`;
    throw new Error(t);
  }
};
Yr.assertIsString = d0;
(function (r) {
  Object.defineProperty(r, '__esModule', { value: !0 }),
    (r.intToUnpaddedBuffer =
      r.bigIntToUnpaddedBuffer =
      r.bigIntToHex =
      r.bufArrToArr =
      r.arrToBufArr =
      r.validateNoLeadingZeroes =
      r.baToJSON =
      r.toUtf8 =
      r.short =
      r.addHexPrefix =
      r.toUnsigned =
      r.fromSigned =
      r.bufferToInt =
      r.bigIntToBuffer =
      r.bufferToBigInt =
      r.bufferToHex =
      r.toBuffer =
      r.unpadHexString =
      r.unpadArray =
      r.unpadBuffer =
      r.setLengthRight =
      r.setLengthLeft =
      r.zeros =
      r.intToBuffer =
      r.intToHex =
        void 0);
  const t = Yr,
    e = Be,
    i = function (h) {
      if (!Number.isSafeInteger(h) || h < 0)
        throw new Error(`Received an invalid integer type: ${h}`);
      return `0x${h.toString(16)}`;
    };
  r.intToHex = i;
  const n = function (h) {
    const c = (0, r.intToHex)(h);
    return F.from((0, e.padToEven)(c.slice(2)), 'hex');
  };
  r.intToBuffer = n;
  const s = function (h) {
    return F.allocUnsafe(h).fill(0);
  };
  r.zeros = s;
  const u = function (h, c, p) {
      const A = (0, r.zeros)(c);
      return p
        ? h.length < c
          ? (h.copy(A), A)
          : h.slice(0, c)
        : h.length < c
          ? (h.copy(A, c - h.length), A)
          : h.slice(-c);
    },
    d = function (h, c) {
      return (0, t.assertIsBuffer)(h), u(h, c, !1);
    };
  r.setLengthLeft = d;
  const v = function (h, c) {
    return (0, t.assertIsBuffer)(h), u(h, c, !0);
  };
  r.setLengthRight = v;
  const E = function (h) {
      let c = h[0];
      for (; h.length > 0 && c.toString() === '0'; ) (h = h.slice(1)), (c = h[0]);
      return h;
    },
    S = function (h) {
      return (0, t.assertIsBuffer)(h), E(h);
    };
  r.unpadBuffer = S;
  const P = function (h) {
    return (0, t.assertIsArray)(h), E(h);
  };
  r.unpadArray = P;
  const I = function (h) {
    return (0, t.assertIsHexString)(h), (h = (0, e.stripHexPrefix)(h)), '0x' + E(h);
  };
  r.unpadHexString = I;
  const R = function (h) {
    if (h == null) return F.allocUnsafe(0);
    if (F.isBuffer(h)) return F.from(h);
    if (Array.isArray(h) || h instanceof Uint8Array) return F.from(h);
    if (typeof h == 'string') {
      if (!(0, e.isHexString)(h))
        throw new Error(
          `Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: ${h}`
        );
      return F.from((0, e.padToEven)((0, e.stripHexPrefix)(h)), 'hex');
    }
    if (typeof h == 'number') return (0, r.intToBuffer)(h);
    if (typeof h == 'bigint') {
      if (h < BigInt(0)) throw new Error(`Cannot convert negative bigint to buffer. Given: ${h}`);
      let c = h.toString(16);
      return c.length % 2 && (c = '0' + c), F.from(c, 'hex');
    }
    if (h.toArray) return F.from(h.toArray());
    if (h.toBuffer) return F.from(h.toBuffer());
    throw new Error('invalid type');
  };
  r.toBuffer = R;
  const C = function (h) {
    return (h = (0, r.toBuffer)(h)), '0x' + h.toString('hex');
  };
  r.bufferToHex = C;
  function j(h) {
    const c = (0, r.bufferToHex)(h);
    return BigInt(c === '0x' ? 0 : c);
  }
  r.bufferToBigInt = j;
  function ct(h) {
    return (0, r.toBuffer)('0x' + h.toString(16));
  }
  r.bigIntToBuffer = ct;
  const W = function (h) {
    const c = Number(j(h));
    if (!Number.isSafeInteger(c)) throw new Error('Number exceeds 53 bits');
    return c;
  };
  r.bufferToInt = W;
  const B = function (h) {
    return BigInt.asIntN(256, j(h));
  };
  r.fromSigned = B;
  const Z = function (h) {
    return ct(BigInt.asUintN(256, h));
  };
  r.toUnsigned = Z;
  const Y = function (h) {
    return typeof h != 'string' || (0, e.isHexPrefixed)(h) ? h : '0x' + h;
  };
  r.addHexPrefix = Y;
  function tt(h, c = 50) {
    const p = F.isBuffer(h) ? h.toString('hex') : h;
    return p.length <= c ? p : p.slice(0, c) + '…';
  }
  r.short = tt;
  const xt = function (h) {
    const c = /^(00)+|(00)+$/g;
    if (((h = (0, e.stripHexPrefix)(h)), h.length % 2 !== 0))
      throw new Error('Invalid non-even hex string input for toUtf8() provided');
    return F.from(h.replace(c, ''), 'hex').toString('utf8');
  };
  r.toUtf8 = xt;
  const se = function (h) {
    if (F.isBuffer(h)) return `0x${h.toString('hex')}`;
    if (h instanceof Array) {
      const c = [];
      for (let p = 0; p < h.length; p++) c.push((0, r.baToJSON)(h[p]));
      return c;
    }
  };
  r.baToJSON = se;
  const de = function (h) {
    for (const [c, p] of Object.entries(h))
      if (p !== void 0 && p.length > 0 && p[0] === 0)
        throw new Error(`${c} cannot have leading zeroes, received: ${p.toString('hex')}`);
  };
  r.validateNoLeadingZeroes = de;
  function at(h) {
    return Array.isArray(h) ? h.map((c) => at(c)) : F.from(h);
  }
  r.arrToBufArr = at;
  function be(h) {
    return Array.isArray(h) ? h.map((c) => be(c)) : Uint8Array.from(h ?? []);
  }
  r.bufArrToArr = be;
  const w = (h) => '0x' + h.toString(16);
  r.bigIntToHex = w;
  function o(h) {
    return (0, r.unpadBuffer)(ct(h));
  }
  r.bigIntToUnpaddedBuffer = o;
  function f(h) {
    return (0, r.unpadBuffer)((0, r.intToBuffer)(h));
  }
  r.intToUnpaddedBuffer = f;
})($l);
export { ut as B, A0 as C, Ss as V, b0 as W, e0 as a, $l as b, v0 as i, Uu as n, w0 as r, y0 as s };
