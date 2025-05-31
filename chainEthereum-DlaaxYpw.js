import {
  L as D,
  i as bu,
  h as vt,
  a as De,
  b as mt,
  c as Rs,
  s as si,
  d as je,
  e as Qe,
  f as Fe,
  g as hr,
  j as Rn,
  k as xi,
  l as ln,
  r as Au,
  m as Mi,
  S as to,
  n as Eu,
  o as Ls,
} from './chainSolana-DAiUp22G.js';
import { g as Qo, a as xu, c as Ce } from './lodash-aFjP5OGs.js';
import {
  K as oe,
  X as Mu,
  M as Xr,
  Y as Su,
  Z as _u,
  _ as $o,
  $ as Pu,
  a0 as jn,
  B as H,
  r as ku,
  a1 as Xo,
  a2 as Tu,
  a3 as ta,
} from './metaplex-81r3lICz.js';
const Bu = 'bignumber/5.7.0';
var Ln = oe.BN;
const ti = new D(Bu),
  us = {},
  eo = 9007199254740991;
let ro = !1;
class st {
  constructor(t, e) {
    t !== us &&
      ti.throwError(
        'cannot call constructor directly; use BigNumber.from',
        D.errors.UNSUPPORTED_OPERATION,
        { operation: 'new (BigNumber)' }
      ),
      (this._hex = e),
      (this._isBigNumber = !0),
      Object.freeze(this);
  }
  fromTwos(t) {
    return ur(ge(this).fromTwos(t));
  }
  toTwos(t) {
    return ur(ge(this).toTwos(t));
  }
  abs() {
    return this._hex[0] === '-' ? st.from(this._hex.substring(1)) : this;
  }
  add(t) {
    return ur(ge(this).add(ge(t)));
  }
  sub(t) {
    return ur(ge(this).sub(ge(t)));
  }
  div(t) {
    return st.from(t).isZero() && xr('division-by-zero', 'div'), ur(ge(this).div(ge(t)));
  }
  mul(t) {
    return ur(ge(this).mul(ge(t)));
  }
  mod(t) {
    const e = ge(t);
    return e.isNeg() && xr('division-by-zero', 'mod'), ur(ge(this).umod(e));
  }
  pow(t) {
    const e = ge(t);
    return e.isNeg() && xr('negative-power', 'pow'), ur(ge(this).pow(e));
  }
  and(t) {
    const e = ge(t);
    return (
      (this.isNegative() || e.isNeg()) && xr('unbound-bitwise-result', 'and'), ur(ge(this).and(e))
    );
  }
  or(t) {
    const e = ge(t);
    return (
      (this.isNegative() || e.isNeg()) && xr('unbound-bitwise-result', 'or'), ur(ge(this).or(e))
    );
  }
  xor(t) {
    const e = ge(t);
    return (
      (this.isNegative() || e.isNeg()) && xr('unbound-bitwise-result', 'xor'), ur(ge(this).xor(e))
    );
  }
  mask(t) {
    return (this.isNegative() || t < 0) && xr('negative-width', 'mask'), ur(ge(this).maskn(t));
  }
  shl(t) {
    return (this.isNegative() || t < 0) && xr('negative-width', 'shl'), ur(ge(this).shln(t));
  }
  shr(t) {
    return (this.isNegative() || t < 0) && xr('negative-width', 'shr'), ur(ge(this).shrn(t));
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
    return ti.throwError('this platform does not support BigInt', D.errors.UNSUPPORTED_OPERATION, {
      value: this.toString(),
    });
  }
  toString() {
    return (
      arguments.length > 0 &&
        (arguments[0] === 10
          ? ro ||
            ((ro = !0),
            ti.warn('BigNumber.toString does not accept any parameters; base-10 is assumed'))
          : arguments[0] === 16
            ? ti.throwError(
                'BigNumber.toString does not accept any parameters; use bigNumber.toHexString()',
                D.errors.UNEXPECTED_ARGUMENT,
                {}
              )
            : ti.throwError(
                'BigNumber.toString does not accept parameters',
                D.errors.UNEXPECTED_ARGUMENT,
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
    if (t instanceof st) return t;
    if (typeof t == 'string')
      return t.match(/^-?0x[0-9a-f]+$/i)
        ? new st(us, tn(t))
        : t.match(/^-?[0-9]+$/)
          ? new st(us, tn(new Ln(t)))
          : ti.throwArgumentError('invalid BigNumber string', 'value', t);
    if (typeof t == 'number')
      return (
        t % 1 && xr('underflow', 'BigNumber.from', t),
        (t >= eo || t <= -eo) && xr('overflow', 'BigNumber.from', t),
        st.from(String(t))
      );
    const e = t;
    if (typeof e == 'bigint') return st.from(e.toString());
    if (bu(e)) return st.from(vt(e));
    if (e)
      if (e.toHexString) {
        const i = e.toHexString();
        if (typeof i == 'string') return st.from(i);
      } else {
        let i = e._hex;
        if (
          (i == null && e.type === 'BigNumber' && (i = e.hex),
          typeof i == 'string' && (De(i) || (i[0] === '-' && De(i.substring(1)))))
        )
          return st.from(i);
      }
    return ti.throwArgumentError('invalid BigNumber value', 'value', t);
  }
  static isBigNumber(t) {
    return !!(t && t._isBigNumber);
  }
}
function tn(r) {
  if (typeof r != 'string') return tn(r.toString(16));
  if (r[0] === '-')
    return (
      (r = r.substring(1)),
      r[0] === '-' && ti.throwArgumentError('invalid hex', 'value', r),
      (r = tn(r)),
      r === '0x00' ? r : '-' + r
    );
  if ((r.substring(0, 2) !== '0x' && (r = '0x' + r), r === '0x')) return '0x00';
  for (r.length % 2 && (r = '0x0' + r.substring(2)); r.length > 4 && r.substring(0, 4) === '0x00'; )
    r = '0x' + r.substring(4);
  return r;
}
function ur(r) {
  return st.from(tn(r));
}
function ge(r) {
  const t = st.from(r).toHexString();
  return t[0] === '-' ? new Ln('-' + t.substring(3), 16) : new Ln(t.substring(2), 16);
}
function xr(r, t, e) {
  const i = { fault: r, operation: t };
  return e != null && (i.value = e), ti.throwError(r, D.errors.NUMERIC_FAULT, i);
}
function Nu(r) {
  return new Ln(r, 36).toString(16);
}
function He(r) {
  return '0x' + Mu.keccak_256(mt(r));
}
const Cu = 'rlp/5.7.0',
  Hr = new D(Cu);
function io(r) {
  const t = [];
  for (; r; ) t.unshift(r & 255), (r >>= 8);
  return t;
}
function no(r, t, e) {
  let i = 0;
  for (let n = 0; n < e; n++) i = i * 256 + r[t + n];
  return i;
}
function ea(r) {
  if (Array.isArray(r)) {
    let i = [];
    if (
      (r.forEach(function (s) {
        i = i.concat(ea(s));
      }),
      i.length <= 55)
    )
      return i.unshift(192 + i.length), i;
    const n = io(i.length);
    return n.unshift(247 + n.length), n.concat(i);
  }
  Rs(r) || Hr.throwArgumentError('RLP object must be BytesLike', 'object', r);
  const t = Array.prototype.slice.call(mt(r));
  if (t.length === 1 && t[0] <= 127) return t;
  if (t.length <= 55) return t.unshift(128 + t.length), t;
  const e = io(t.length);
  return e.unshift(183 + e.length), e.concat(t);
}
function Ui(r) {
  return vt(ea(r));
}
function so(r, t, e, i) {
  const n = [];
  for (; e < t + 1 + i; ) {
    const s = ra(r, e);
    n.push(s.result),
      (e += s.consumed),
      e > t + 1 + i && Hr.throwError('child data too short', D.errors.BUFFER_OVERRUN, {});
  }
  return { consumed: 1 + i, result: n };
}
function ra(r, t) {
  if (
    (r.length === 0 && Hr.throwError('data too short', D.errors.BUFFER_OVERRUN, {}), r[t] >= 248)
  ) {
    const e = r[t] - 247;
    t + 1 + e > r.length &&
      Hr.throwError('data short segment too short', D.errors.BUFFER_OVERRUN, {});
    const i = no(r, t + 1, e);
    return (
      t + 1 + e + i > r.length &&
        Hr.throwError('data long segment too short', D.errors.BUFFER_OVERRUN, {}),
      so(r, t, t + 1 + e, e + i)
    );
  } else if (r[t] >= 192) {
    const e = r[t] - 192;
    return (
      t + 1 + e > r.length && Hr.throwError('data array too short', D.errors.BUFFER_OVERRUN, {}),
      so(r, t, t + 1, e)
    );
  } else if (r[t] >= 184) {
    const e = r[t] - 183;
    t + 1 + e > r.length && Hr.throwError('data array too short', D.errors.BUFFER_OVERRUN, {});
    const i = no(r, t + 1, e);
    t + 1 + e + i > r.length && Hr.throwError('data array too short', D.errors.BUFFER_OVERRUN, {});
    const n = vt(r.slice(t + 1 + e, t + 1 + e + i));
    return { consumed: 1 + e + i, result: n };
  } else if (r[t] >= 128) {
    const e = r[t] - 128;
    t + 1 + e > r.length && Hr.throwError('data too short', D.errors.BUFFER_OVERRUN, {});
    const i = vt(r.slice(t + 1, t + 1 + e));
    return { consumed: 1 + e, result: i };
  }
  return { consumed: 1, result: vt(r[t]) };
}
function Os(r) {
  const t = mt(r),
    e = ra(t, 0);
  return e.consumed !== t.length && Hr.throwArgumentError('invalid rlp data', 'data', r), e.result;
}
const Iu = 'address/5.7.0',
  Ii = new D(Iu);
function oo(r) {
  De(r, 20) || Ii.throwArgumentError('invalid address', 'address', r), (r = r.toLowerCase());
  const t = r.substring(2).split(''),
    e = new Uint8Array(40);
  for (let n = 0; n < 40; n++) e[n] = t[n].charCodeAt(0);
  const i = mt(He(e));
  for (let n = 0; n < 40; n += 2)
    i[n >> 1] >> 4 >= 8 && (t[n] = t[n].toUpperCase()),
      (i[n >> 1] & 15) >= 8 && (t[n + 1] = t[n + 1].toUpperCase());
  return '0x' + t.join('');
}
const Ru = 9007199254740991;
function Lu(r) {
  return Math.log10 ? Math.log10(r) : Math.log(r) / Math.LN10;
}
const Us = {};
for (let r = 0; r < 10; r++) Us[String(r)] = String(r);
for (let r = 0; r < 26; r++) Us[String.fromCharCode(65 + r)] = String(10 + r);
const ao = Math.floor(Lu(Ru));
function Ou(r) {
  (r = r.toUpperCase()), (r = r.substring(4) + r.substring(0, 2) + '00');
  let t = r
    .split('')
    .map((i) => Us[i])
    .join('');
  for (; t.length >= ao; ) {
    let i = t.substring(0, ao);
    t = (parseInt(i, 10) % 97) + t.substring(i.length);
  }
  let e = String(98 - (parseInt(t, 10) % 97));
  for (; e.length < 2; ) e = '0' + e;
  return e;
}
function Je(r) {
  let t = null;
  if (
    (typeof r != 'string' && Ii.throwArgumentError('invalid address', 'address', r),
    r.match(/^(0x)?[0-9a-fA-F]{40}$/))
  )
    r.substring(0, 2) !== '0x' && (r = '0x' + r),
      (t = oo(r)),
      r.match(/([A-F].*[a-f])|([a-f].*[A-F])/) &&
        t !== r &&
        Ii.throwArgumentError('bad address checksum', 'address', r);
  else if (r.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    for (
      r.substring(2, 4) !== Ou(r) && Ii.throwArgumentError('bad icap checksum', 'address', r),
        t = Nu(r.substring(4));
      t.length < 40;

    )
      t = '0' + t;
    t = oo('0x' + t);
  } else Ii.throwArgumentError('invalid address', 'address', r);
  return t;
}
function Qc(r) {
  try {
    return Je(r), !0;
  } catch {}
  return !1;
}
function ia(r) {
  let t = null;
  try {
    t = Je(r.from);
  } catch {
    Ii.throwArgumentError('missing from address', 'transaction', r);
  }
  const e = si(mt(st.from(r.nonce).toHexString()));
  return Je(je(He(Ui([t, e])), 12));
}
const Uu = 'properties/5.7.0';
var Du = function (r, t, e, i) {
  function n(s) {
    return s instanceof e
      ? s
      : new e(function (f) {
          f(s);
        });
  }
  return new (e || (e = Promise))(function (s, f) {
    function c(S) {
      try {
        b(i.next(S));
      } catch (P) {
        f(P);
      }
    }
    function v(S) {
      try {
        b(i.throw(S));
      } catch (P) {
        f(P);
      }
    }
    function b(S) {
      S.done ? s(S.value) : n(S.value).then(c, v);
    }
    b((i = i.apply(r, t || [])).next());
  });
};
const On = new D(Uu);
function Y(r, t, e) {
  Object.defineProperty(r, t, { enumerable: !0, value: e, writable: !1 });
}
function Wr(r, t) {
  for (let e = 0; e < 32; e++) {
    if (r[t]) return r[t];
    if (!r.prototype || typeof r.prototype != 'object') break;
    r = Object.getPrototypeOf(r.prototype).constructor;
  }
  return null;
}
function Ke(r) {
  return Du(this, void 0, void 0, function* () {
    const t = Object.keys(r).map((i) => {
      const n = r[i];
      return Promise.resolve(n).then((s) => ({ key: i, value: s }));
    });
    return (yield Promise.all(t)).reduce((i, n) => ((i[n.key] = n.value), i), {});
  });
}
function na(r, t) {
  (!r || typeof r != 'object') && On.throwArgumentError('invalid object', 'object', r),
    Object.keys(r).forEach((e) => {
      t[e] || On.throwArgumentError('invalid object key - ' + e, 'transaction:' + e, r);
    });
}
function Ve(r) {
  const t = {};
  for (const e in r) t[e] = r[e];
  return t;
}
const Fu = { bigint: !0, boolean: !0, function: !0, number: !0, string: !0 };
function sa(r) {
  if (r == null || Fu[typeof r]) return !0;
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
      if (!sa(i)) return !1;
    }
    return !0;
  }
  return On.throwArgumentError(`Cannot deepCopy ${typeof r}`, 'object', r);
}
function Ku(r) {
  if (sa(r)) return r;
  if (Array.isArray(r)) return Object.freeze(r.map((t) => oi(t)));
  if (typeof r == 'object') {
    const t = {};
    for (const e in r) {
      const i = r[e];
      i !== void 0 && Y(t, e, oi(i));
    }
    return t;
  }
  return On.throwArgumentError(`Cannot deepCopy ${typeof r}`, 'object', r);
}
function oi(r) {
  return Ku(r);
}
class hn {
  constructor(t) {
    for (const e in t) this[e] = oi(t[e]);
  }
}
const zu = 'abstract-provider/5.7.0';
var Hu = function (r, t, e, i) {
  function n(s) {
    return s instanceof e
      ? s
      : new e(function (f) {
          f(s);
        });
  }
  return new (e || (e = Promise))(function (s, f) {
    function c(S) {
      try {
        b(i.next(S));
      } catch (P) {
        f(P);
      }
    }
    function v(S) {
      try {
        b(i.throw(S));
      } catch (P) {
        f(P);
      }
    }
    function b(S) {
      S.done ? s(S.value) : n(S.value).then(c, v);
    }
    b((i = i.apply(r, t || [])).next());
  });
};
const qu = new D(zu);
class Gu extends hn {
  static isForkEvent(t) {
    return !!(t && t._isForkEvent);
  }
}
class Wn {
  constructor() {
    qu.checkAbstract(new.target, Wn), Y(this, '_isProvider', !0);
  }
  getFeeData() {
    return Hu(this, void 0, void 0, function* () {
      const { block: t, gasPrice: e } = yield Ke({
        block: this.getBlock('latest'),
        gasPrice: this.getGasPrice().catch((f) => null),
      });
      let i = null,
        n = null,
        s = null;
      return (
        t &&
          t.baseFeePerGas &&
          ((i = t.baseFeePerGas), (s = st.from('1500000000')), (n = t.baseFeePerGas.mul(2).add(s))),
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
const Vu = 'abstract-signer/5.7.0';
var Rr = function (r, t, e, i) {
  function n(s) {
    return s instanceof e
      ? s
      : new e(function (f) {
          f(s);
        });
  }
  return new (e || (e = Promise))(function (s, f) {
    function c(S) {
      try {
        b(i.next(S));
      } catch (P) {
        f(P);
      }
    }
    function v(S) {
      try {
        b(i.throw(S));
      } catch (P) {
        f(P);
      }
    }
    function b(S) {
      S.done ? s(S.value) : n(S.value).then(c, v);
    }
    b((i = i.apply(r, t || [])).next());
  });
};
const Mr = new D(Vu),
  ju = [
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
  Wu = [D.errors.INSUFFICIENT_FUNDS, D.errors.NONCE_EXPIRED, D.errors.REPLACEMENT_UNDERPRICED];
class cn {
  constructor() {
    Mr.checkAbstract(new.target, cn), Y(this, '_isSigner', !0);
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
      const e = yield Ke(this.checkTransaction(t));
      return yield this.provider.estimateGas(e);
    });
  }
  call(t, e) {
    return Rr(this, void 0, void 0, function* () {
      this._checkProvider('call');
      const i = yield Ke(this.checkTransaction(t));
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
      ju.indexOf(i) === -1 &&
        Mr.throwArgumentError('invalid transaction key: ' + i, 'transaction', t);
    const e = Ve(t);
    return (
      e.from == null
        ? (e.from = this.getAddress())
        : (e.from = Promise.all([Promise.resolve(e.from), this.getAddress()]).then(
            (i) => (
              i[0].toLowerCase() !== i[1].toLowerCase() &&
                Mr.throwArgumentError('from address mismatch', 'transaction', t),
              i[0]
            )
          )),
      e
    );
  }
  populateTransaction(t) {
    return Rr(this, void 0, void 0, function* () {
      const e = yield Ke(this.checkTransaction(t));
      e.to != null &&
        ((e.to = Promise.resolve(e.to).then((n) =>
          Rr(this, void 0, void 0, function* () {
            if (n == null) return null;
            const s = yield this.resolveName(n);
            return (
              s == null && Mr.throwArgumentError('provided ENS name resolves to null', 'tx.to', n),
              s
            );
          })
        )),
        e.to.catch((n) => {}));
      const i = e.maxFeePerGas != null || e.maxPriorityFeePerGas != null;
      if (
        (e.gasPrice != null && (e.type === 2 || i)
          ? Mr.throwArgumentError('eip-1559 transaction do not support gasPrice', 'transaction', t)
          : (e.type === 0 || e.type === 1) &&
            i &&
            Mr.throwArgumentError(
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
                  Mr.throwError(
                    'network does not support EIP-1559',
                    D.errors.UNSUPPORTED_OPERATION,
                    { operation: 'populateTransaction' }
                  ),
                e.gasPrice == null && (e.gasPrice = n.gasPrice),
                (e.type = 0))
              : Mr.throwError('failed to get consistent fee data', D.errors.UNSUPPORTED_OPERATION, {
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
            if (Wu.indexOf(n.code) >= 0) throw n;
            return Mr.throwError(
              'cannot estimate gas; transaction may fail or may require manual gas limit',
              D.errors.UNPREDICTABLE_GAS_LIMIT,
              { error: n, tx: e }
            );
          })),
        e.chainId == null
          ? (e.chainId = this.getChainId())
          : (e.chainId = Promise.all([Promise.resolve(e.chainId), this.getChainId()]).then(
              (n) => (
                n[1] !== 0 &&
                  n[0] !== n[1] &&
                  Mr.throwArgumentError('chainId address mismatch', 'transaction', t),
                n[0]
              )
            )),
        yield Ke(e)
      );
    });
  }
  _checkProvider(t) {
    this.provider ||
      Mr.throwError('missing provider', D.errors.UNSUPPORTED_OPERATION, {
        operation: t || '_checkProvider',
      });
  }
  static isSigner(t) {
    return !!(t && t._isSigner);
  }
}
class Ds extends cn {
  constructor(t, e) {
    super(), Y(this, 'address', t), Y(this, 'provider', e || null);
  }
  getAddress() {
    return Promise.resolve(this.address);
  }
  _fail(t, e) {
    return Promise.resolve().then(() => {
      Mr.throwError(t, D.errors.UNSUPPORTED_OPERATION, { operation: e });
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
    return new Ds(this.address, t);
  }
}
const Ju = '0x0000000000000000000000000000000000000000',
  Yu = st.from(-1),
  oa = st.from(0),
  Zu = st.from(1),
  Qu = st.from('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
  $u = '0x0000000000000000000000000000000000000000000000000000000000000000',
  Xu = 'strings/5.7.0',
  aa = new D(Xu);
var Si;
(function (r) {
  (r.current = ''), (r.NFC = 'NFC'), (r.NFD = 'NFD'), (r.NFKC = 'NFKC'), (r.NFKD = 'NFKD');
})(Si || (Si = {}));
var vr;
(function (r) {
  (r.UNEXPECTED_CONTINUE = 'unexpected continuation byte'),
    (r.BAD_PREFIX = 'bad codepoint prefix'),
    (r.OVERRUN = 'string overrun'),
    (r.MISSING_CONTINUE = 'missing continuation byte'),
    (r.OUT_OF_RANGE = 'out of UTF-8 range'),
    (r.UTF16_SURROGATE = 'UTF-16 surrogate'),
    (r.OVERLONG = 'overlong representation');
})(vr || (vr = {}));
function tf(r, t, e, i, n) {
  return aa.throwArgumentError(`invalid codepoint at offset ${t}; ${r}`, 'bytes', e);
}
function ua(r, t, e, i, n) {
  if (r === vr.BAD_PREFIX || r === vr.UNEXPECTED_CONTINUE) {
    let s = 0;
    for (let f = t + 1; f < e.length && e[f] >> 6 === 2; f++) s++;
    return s;
  }
  return r === vr.OVERRUN ? e.length - t - 1 : 0;
}
function ef(r, t, e, i, n) {
  return r === vr.OVERLONG ? (i.push(n), 0) : (i.push(65533), ua(r, t, e));
}
const rf = Object.freeze({ error: tf, ignore: ua, replace: ef });
function fa(r, t) {
  t == null && (t = rf.error), (r = mt(r));
  const e = [];
  let i = 0;
  for (; i < r.length; ) {
    const n = r[i++];
    if (!(n >> 7)) {
      e.push(n);
      continue;
    }
    let s = null,
      f = null;
    if ((n & 224) === 192) (s = 1), (f = 127);
    else if ((n & 240) === 224) (s = 2), (f = 2047);
    else if ((n & 248) === 240) (s = 3), (f = 65535);
    else {
      (n & 192) === 128
        ? (i += t(vr.UNEXPECTED_CONTINUE, i - 1, r, e))
        : (i += t(vr.BAD_PREFIX, i - 1, r, e));
      continue;
    }
    if (i - 1 + s >= r.length) {
      i += t(vr.OVERRUN, i - 1, r, e);
      continue;
    }
    let c = n & ((1 << (8 - s - 1)) - 1);
    for (let v = 0; v < s; v++) {
      let b = r[i];
      if ((b & 192) != 128) {
        (i += t(vr.MISSING_CONTINUE, i, r, e)), (c = null);
        break;
      }
      (c = (c << 6) | (b & 63)), i++;
    }
    if (c !== null) {
      if (c > 1114111) {
        i += t(vr.OUT_OF_RANGE, i - 1 - s, r, e, c);
        continue;
      }
      if (c >= 55296 && c <= 57343) {
        i += t(vr.UTF16_SURROGATE, i - 1 - s, r, e, c);
        continue;
      }
      if (c <= f) {
        i += t(vr.OVERLONG, i - 1 - s, r, e, c);
        continue;
      }
      e.push(c);
    }
  }
  return e;
}
function sr(r, t = Si.current) {
  t != Si.current && (aa.checkNormalize(), (r = r.normalize(t)));
  let e = [];
  for (let i = 0; i < r.length; i++) {
    const n = r.charCodeAt(i);
    if (n < 128) e.push(n);
    else if (n < 2048) e.push((n >> 6) | 192), e.push((n & 63) | 128);
    else if ((n & 64512) == 55296) {
      i++;
      const s = r.charCodeAt(i);
      if (i >= r.length || (s & 64512) !== 56320) throw new Error('invalid utf-8 string');
      const f = 65536 + ((n & 1023) << 10) + (s & 1023);
      e.push((f >> 18) | 240),
        e.push(((f >> 12) & 63) | 128),
        e.push(((f >> 6) & 63) | 128),
        e.push((f & 63) | 128);
    } else e.push((n >> 12) | 224), e.push(((n >> 6) & 63) | 128), e.push((n & 63) | 128);
  }
  return mt(e);
}
function nf(r) {
  return r
    .map((t) =>
      t <= 65535
        ? String.fromCharCode(t)
        : ((t -= 65536), String.fromCharCode(((t >> 10) & 1023) + 55296, (t & 1023) + 56320))
    )
    .join('');
}
function dn(r, t) {
  return nf(fa(r, t));
}
function sf(r, t = Si.current) {
  return fa(sr(r, t));
}
function wi(r) {
  return He(sr(r));
}
const la = 'hash/5.7.0';
function ha(r) {
  r = atob(r);
  const t = [];
  for (let e = 0; e < r.length; e++) t.push(r.charCodeAt(e));
  return mt(t);
}
function ca(r) {
  r = mt(r);
  let t = '';
  for (let e = 0; e < r.length; e++) t += String.fromCharCode(r[e]);
  return btoa(t);
}
function da(r, t) {
  t == null && (t = 1);
  const e = [],
    i = e.forEach,
    n = function (s, f) {
      i.call(s, function (c) {
        f > 0 && Array.isArray(c) ? n(c, f - 1) : e.push(c);
      });
    };
  return n(r, t), e;
}
function of(r) {
  const t = {};
  for (let e = 0; e < r.length; e++) {
    const i = r[e];
    t[i[0]] = i[1];
  }
  return t;
}
function af(r) {
  let t = 0;
  function e() {
    return (r[t++] << 8) | r[t++];
  }
  let i = e(),
    n = 1,
    s = [0, 1];
  for (let tt = 1; tt < i; tt++) s.push((n += e()));
  let f = e(),
    c = t;
  t += f;
  let v = 0,
    b = 0;
  function S() {
    return v == 0 && ((b = (b << 8) | r[t++]), (v = 8)), (b >> --v) & 1;
  }
  const P = 31,
    B = Math.pow(2, P),
    N = B >>> 1,
    R = N >> 1,
    V = B - 1;
  let lt = 0;
  for (let tt = 0; tt < P; tt++) lt = (lt << 1) | S();
  let $ = [],
    C = 0,
    Z = B;
  for (;;) {
    let tt = Math.floor(((lt - C + 1) * n - 1) / Z),
      Mt = 0,
      se = i;
    for (; se - Mt > 1; ) {
      let be = (Mt + se) >>> 1;
      tt < s[be] ? (se = be) : (Mt = be);
    }
    if (Mt == 0) break;
    $.push(Mt);
    let de = C + Math.floor((Z * s[Mt]) / n),
      ut = C + Math.floor((Z * s[Mt + 1]) / n) - 1;
    for (; !((de ^ ut) & N); )
      (lt = ((lt << 1) & V) | S()), (de = (de << 1) & V), (ut = ((ut << 1) & V) | 1);
    for (; de & ~ut & R; )
      (lt = (lt & N) | ((lt << 1) & (V >>> 1)) | S()),
        (de = (de << 1) ^ N),
        (ut = ((ut ^ N) << 1) | N | 1);
    (C = de), (Z = 1 + ut - de);
  }
  let J = i - 4;
  return $.map((tt) => {
    switch (tt - J) {
      case 3:
        return J + 65792 + ((r[c++] << 16) | (r[c++] << 8) | r[c++]);
      case 2:
        return J + 256 + ((r[c++] << 8) | r[c++]);
      case 1:
        return J + r[c++];
      default:
        return tt - 1;
    }
  });
}
function uf(r) {
  let t = 0;
  return () => r[t++];
}
function ff(r) {
  return uf(af(r));
}
function lf(r) {
  return r & 1 ? ~r >> 1 : r >> 1;
}
function hf(r, t) {
  let e = Array(r);
  for (let i = 0; i < r; i++) e[i] = 1 + t();
  return e;
}
function uo(r, t) {
  let e = Array(r);
  for (let i = 0, n = -1; i < r; i++) e[i] = n += 1 + t();
  return e;
}
function cf(r, t) {
  let e = Array(r);
  for (let i = 0, n = 0; i < r; i++) e[i] = n += lf(t());
  return e;
}
function Un(r, t) {
  let e = uo(r(), r),
    i = r(),
    n = uo(i, r),
    s = hf(i, r);
  for (let f = 0; f < i; f++) for (let c = 0; c < s[f]; c++) e.push(n[f] + c);
  return t ? e.map((f) => t[f]) : e;
}
function df(r) {
  let t = [];
  for (;;) {
    let e = r();
    if (e == 0) break;
    t.push(pf(e, r));
  }
  for (;;) {
    let e = r() - 1;
    if (e < 0) break;
    t.push(mf(e, r));
  }
  return of(da(t));
}
function gf(r) {
  let t = [];
  for (;;) {
    let e = r();
    if (e == 0) break;
    t.push(e);
  }
  return t;
}
function ga(r, t, e) {
  let i = Array(r)
    .fill(void 0)
    .map(() => []);
  for (let n = 0; n < t; n++) cf(r, e).forEach((s, f) => i[f].push(s));
  return i;
}
function pf(r, t) {
  let e = 1 + t(),
    i = t(),
    n = gf(t),
    s = ga(n.length, 1 + r, t);
  return da(
    s.map((f, c) => {
      const v = f[0],
        b = f.slice(1);
      return Array(n[c])
        .fill(void 0)
        .map((S, P) => {
          let B = P * i;
          return [v + P * e, b.map((N) => N + B)];
        });
    })
  );
}
function mf(r, t) {
  let e = 1 + t();
  return ga(e, 1 + r, t).map((n) => [n[0], n.slice(1)]);
}
function vf(r) {
  let t = Un(r).sort((i, n) => i - n);
  return e();
  function e() {
    let i = [];
    for (;;) {
      let b = Un(r, t);
      if (b.length == 0) break;
      i.push({ set: new Set(b), node: e() });
    }
    i.sort((b, S) => S.set.size - b.set.size);
    let n = r(),
      s = n % 3;
    n = (n / 3) | 0;
    let f = !!(n & 1);
    n >>= 1;
    let c = n == 1,
      v = n == 2;
    return { branches: i, valid: s, fe0f: f, save: c, check: v };
  }
}
function yf() {
  return ff(
    ha(
      'AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=='
    )
  );
}
const Jn = yf(),
  wf = new Set(Un(Jn)),
  bf = new Set(Un(Jn)),
  Af = df(Jn),
  Ef = vf(Jn),
  fo = 45,
  lo = 95;
function pa(r) {
  return sf(r);
}
function xf(r) {
  return r.filter((t) => t != 65039);
}
function ma(r) {
  for (let t of r.split('.')) {
    let e = pa(t);
    try {
      for (let i = e.lastIndexOf(lo) - 1; i >= 0; i--)
        if (e[i] !== lo) throw new Error('underscore only allowed at start');
      if (e.length >= 4 && e.every((i) => i < 128) && e[2] === fo && e[3] === fo)
        throw new Error('invalid label extension');
    } catch (i) {
      throw new Error(`Invalid label "${t}": ${i.message}`);
    }
  }
  return r;
}
function Mf(r) {
  return ma(Sf(r, xf));
}
function Sf(r, t) {
  let e = pa(r).reverse(),
    i = [];
  for (; e.length; ) {
    let n = Pf(e);
    if (n) {
      i.push(...t(n));
      continue;
    }
    let s = e.pop();
    if (wf.has(s)) {
      i.push(s);
      continue;
    }
    if (bf.has(s)) continue;
    let f = Af[s];
    if (f) {
      i.push(...f);
      continue;
    }
    throw new Error(`Disallowed codepoint: 0x${s.toString(16).toUpperCase()}`);
  }
  return ma(_f(String.fromCodePoint(...i)));
}
function _f(r) {
  return r.normalize('NFC');
}
function Pf(r, t) {
  var e;
  let i = Ef,
    n,
    s,
    f = [],
    c = r.length;
  for (t && (t.length = 0); c; ) {
    let v = r[--c];
    if (
      ((i = (e = i.branches.find((b) => b.set.has(v))) === null || e === void 0 ? void 0 : e.node),
      !i)
    )
      break;
    if (i.save) s = v;
    else if (i.check && v === s) break;
    f.push(v),
      i.fe0f && (f.push(65039), c > 0 && r[c - 1] == 65039 && c--),
      i.valid &&
        ((n = f.slice()),
        i.valid == 2 && n.splice(1, 1),
        t && t.push(...r.slice(c).reverse()),
        (r.length = c));
  }
  return n;
}
const kf = new D(la),
  va = new Uint8Array(32);
va.fill(0);
function ho(r) {
  if (r.length === 0) throw new Error('invalid ENS name; empty component');
  return r;
}
function ya(r) {
  const t = sr(Mf(r)),
    e = [];
  if (r.length === 0) return e;
  let i = 0;
  for (let n = 0; n < t.length; n++) t[n] === 46 && (e.push(ho(t.slice(i, n))), (i = n + 1));
  if (i >= t.length) throw new Error('invalid ENS name; empty component');
  return e.push(ho(t.slice(i))), e;
}
function Pn(r) {
  typeof r != 'string' && kf.throwArgumentError('invalid ENS name; not a string', 'name', r);
  let t = va;
  const e = ya(r);
  for (; e.length; ) t = He(Qe([t, He(e.pop())]));
  return vt(t);
}
function Tf(r) {
  return (
    vt(
      Qe(
        ya(r).map((t) => {
          if (t.length > 63) throw new Error('invalid DNS encoded entry; length exceeds 63 bytes');
          const e = new Uint8Array(t.length + 1);
          return e.set(t, 1), (e[0] = e.length - 1), e;
        })
      )
    ) + '00'
  );
}
const Bf = `Ethereum Signed Message:
`;
function $c(r) {
  return typeof r == 'string' && (r = sr(r)), He(Qe([sr(Bf), sr(String(r.length)), r]));
}
var Nf = function (r, t, e, i) {
  function n(s) {
    return s instanceof e
      ? s
      : new e(function (f) {
          f(s);
        });
  }
  return new (e || (e = Promise))(function (s, f) {
    function c(S) {
      try {
        b(i.next(S));
      } catch (P) {
        f(P);
      }
    }
    function v(S) {
      try {
        b(i.throw(S));
      } catch (P) {
        f(P);
      }
    }
    function b(S) {
      S.done ? s(S.value) : n(S.value).then(c, v);
    }
    b((i = i.apply(r, t || [])).next());
  });
};
const Be = new D(la),
  wa = new Uint8Array(32);
wa.fill(0);
const Cf = st.from(-1),
  ba = st.from(0),
  Aa = st.from(1),
  If = st.from('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
function Rf(r) {
  const t = mt(r),
    e = t.length % 32;
  return e ? hr([t, wa.slice(e)]) : vt(t);
}
const Lf = Fe(Aa.toHexString(), 32),
  Of = Fe(ba.toHexString(), 32),
  co = {
    name: 'string',
    version: 'string',
    chainId: 'uint256',
    verifyingContract: 'address',
    salt: 'bytes32',
  },
  fs = ['name', 'version', 'chainId', 'verifyingContract', 'salt'];
function go(r) {
  return function (t) {
    return (
      typeof t != 'string' &&
        Be.throwArgumentError(`invalid domain value for ${JSON.stringify(r)}`, `domain.${r}`, t),
      t
    );
  };
}
const Uf = {
  name: go('name'),
  version: go('version'),
  chainId: function (r) {
    try {
      return st.from(r).toString();
    } catch {}
    return Be.throwArgumentError('invalid domain value for "chainId"', 'domain.chainId', r);
  },
  verifyingContract: function (r) {
    try {
      return Je(r).toLowerCase();
    } catch {}
    return Be.throwArgumentError(
      'invalid domain value "verifyingContract"',
      'domain.verifyingContract',
      r
    );
  },
  salt: function (r) {
    try {
      const t = mt(r);
      if (t.length !== 32) throw new Error('bad length');
      return vt(t);
    } catch {}
    return Be.throwArgumentError('invalid domain value "salt"', 'domain.salt', r);
  },
};
function ls(r) {
  {
    const t = r.match(/^(u?)int(\d*)$/);
    if (t) {
      const e = t[1] === '',
        i = parseInt(t[2] || '256');
      (i % 8 !== 0 || i > 256 || (t[2] && t[2] !== String(i))) &&
        Be.throwArgumentError('invalid numeric width', 'type', r);
      const n = If.mask(e ? i - 1 : i),
        s = e ? n.add(Aa).mul(Cf) : ba;
      return function (f) {
        const c = st.from(f);
        return (
          (c.lt(s) || c.gt(n)) && Be.throwArgumentError(`value out-of-bounds for ${r}`, 'value', f),
          Fe(c.toTwos(256).toHexString(), 32)
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
          Be.throwArgumentError('invalid bytes width', 'type', r),
        function (i) {
          return (
            mt(i).length !== e && Be.throwArgumentError(`invalid length for ${r}`, 'value', i),
            Rf(i)
          );
        }
      );
    }
  }
  switch (r) {
    case 'address':
      return function (t) {
        return Fe(Je(t), 32);
      };
    case 'bool':
      return function (t) {
        return t ? Lf : Of;
      };
    case 'bytes':
      return function (t) {
        return He(t);
      };
    case 'string':
      return function (t) {
        return wi(t);
      };
  }
  return null;
}
function po(r, t) {
  return `${r}(${t.map(({ name: e, type: i }) => i + ' ' + e).join(',')})`;
}
class mr {
  constructor(t) {
    Y(this, 'types', Object.freeze(oi(t))), Y(this, '_encoderCache', {}), Y(this, '_types', {});
    const e = {},
      i = {},
      n = {};
    Object.keys(t).forEach((c) => {
      (e[c] = {}), (i[c] = []), (n[c] = {});
    });
    for (const c in t) {
      const v = {};
      t[c].forEach((b) => {
        v[b.name] &&
          Be.throwArgumentError(
            `duplicate variable name ${JSON.stringify(b.name)} in ${JSON.stringify(c)}`,
            'types',
            t
          ),
          (v[b.name] = !0);
        const S = b.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
        S === c &&
          Be.throwArgumentError(`circular type reference to ${JSON.stringify(S)}`, 'types', t),
          !ls(S) &&
            (i[S] || Be.throwArgumentError(`unknown type ${JSON.stringify(S)}`, 'types', t),
            i[S].push(c),
            (e[c][S] = !0));
      });
    }
    const s = Object.keys(i).filter((c) => i[c].length === 0);
    s.length === 0
      ? Be.throwArgumentError('missing primary type', 'types', t)
      : s.length > 1 &&
        Be.throwArgumentError(
          `ambiguous primary types or unused types: ${s.map((c) => JSON.stringify(c)).join(', ')}`,
          'types',
          t
        ),
      Y(this, 'primaryType', s[0]);
    function f(c, v) {
      v[c] && Be.throwArgumentError(`circular type reference to ${JSON.stringify(c)}`, 'types', t),
        (v[c] = !0),
        Object.keys(e[c]).forEach((b) => {
          i[b] &&
            (f(b, v),
            Object.keys(v).forEach((S) => {
              n[S][b] = !0;
            }));
        }),
        delete v[c];
    }
    f(this.primaryType, {});
    for (const c in n) {
      const v = Object.keys(n[c]);
      v.sort(), (this._types[c] = po(c, t[c]) + v.map((b) => po(b, t[b])).join(''));
    }
  }
  getEncoder(t) {
    let e = this._encoderCache[t];
    return e || (e = this._encoderCache[t] = this._getEncoder(t)), e;
  }
  _getEncoder(t) {
    {
      const n = ls(t);
      if (n) return n;
    }
    const e = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
    if (e) {
      const n = e[1],
        s = this.getEncoder(n),
        f = parseInt(e[3]);
      return (c) => {
        f >= 0 &&
          c.length !== f &&
          Be.throwArgumentError(
            'array length mismatch; expected length ${ arrayLength }',
            'value',
            c
          );
        let v = c.map(s);
        return this._types[n] && (v = v.map(He)), He(hr(v));
      };
    }
    const i = this.types[t];
    if (i) {
      const n = wi(this._types[t]);
      return (s) => {
        const f = i.map(({ name: c, type: v }) => {
          const b = this.getEncoder(v)(s[c]);
          return this._types[v] ? He(b) : b;
        });
        return f.unshift(n), hr(f);
      };
    }
    return Be.throwArgumentError(`unknown type: ${t}`, 'type', t);
  }
  encodeType(t) {
    const e = this._types[t];
    return e || Be.throwArgumentError(`unknown type: ${JSON.stringify(t)}`, 'name', t), e;
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
    if (ls(t)) return i(t, e);
    const n = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
    if (n) {
      const f = n[1],
        c = parseInt(n[3]);
      return (
        c >= 0 &&
          e.length !== c &&
          Be.throwArgumentError(
            'array length mismatch; expected length ${ arrayLength }',
            'value',
            e
          ),
        e.map((v) => this._visit(f, v, i))
      );
    }
    const s = this.types[t];
    return s
      ? s.reduce((f, { name: c, type: v }) => ((f[c] = this._visit(v, e[c], i)), f), {})
      : Be.throwArgumentError(`unknown type: ${t}`, 'type', t);
  }
  visit(t, e) {
    return this._visit(this.primaryType, t, e);
  }
  static from(t) {
    return new mr(t);
  }
  static getPrimaryType(t) {
    return mr.from(t).primaryType;
  }
  static hashStruct(t, e, i) {
    return mr.from(e).hashStruct(t, i);
  }
  static hashDomain(t) {
    const e = [];
    for (const i in t) {
      const n = co[i];
      n ||
        Be.throwArgumentError(`invalid typed-data domain key: ${JSON.stringify(i)}`, 'domain', t),
        e.push({ name: i, type: n });
    }
    return (
      e.sort((i, n) => fs.indexOf(i.name) - fs.indexOf(n.name)),
      mr.hashStruct('EIP712Domain', { EIP712Domain: e }, t)
    );
  }
  static encode(t, e, i) {
    return hr(['0x1901', mr.hashDomain(t), mr.from(e).hash(i)]);
  }
  static hash(t, e, i) {
    return He(mr.encode(t, e, i));
  }
  static resolveNames(t, e, i, n) {
    return Nf(this, void 0, void 0, function* () {
      t = Ve(t);
      const s = {};
      t.verifyingContract && !De(t.verifyingContract, 20) && (s[t.verifyingContract] = '0x');
      const f = mr.from(e);
      f.visit(i, (c, v) => (c === 'address' && !De(v, 20) && (s[v] = '0x'), v));
      for (const c in s) s[c] = yield n(c);
      return (
        t.verifyingContract &&
          s[t.verifyingContract] &&
          (t.verifyingContract = s[t.verifyingContract]),
        (i = f.visit(i, (c, v) => (c === 'address' && s[v] ? s[v] : v))),
        { domain: t, value: i }
      );
    });
  }
  static getPayload(t, e, i) {
    mr.hashDomain(t);
    const n = {},
      s = [];
    fs.forEach((v) => {
      const b = t[v];
      b != null && ((n[v] = Uf[v](b)), s.push({ name: v, type: co[v] }));
    });
    const f = mr.from(e),
      c = Ve(e);
    return (
      c.EIP712Domain
        ? Be.throwArgumentError('types must not contain EIP712Domain type', 'types.EIP712Domain', e)
        : (c.EIP712Domain = s),
      f.encode(i),
      {
        types: c,
        domain: n,
        primaryType: f.primaryType,
        message: f.visit(i, (v, b) => {
          if (v.match(/^bytes(\d*)/)) return vt(mt(b));
          if (v.match(/^u?int/)) return st.from(b).toString();
          switch (v) {
            case 'address':
              return b.toLowerCase();
            case 'bool':
              return !!b;
            case 'string':
              return typeof b != 'string' && Be.throwArgumentError('invalid string', 'value', b), b;
          }
          return Be.throwArgumentError('unsupported type', 'type', v);
        }),
      }
    );
  }
}
class Ea {
  constructor(t) {
    Y(this, 'alphabet', t),
      Y(this, 'base', t.length),
      Y(this, '_alphabetMap', {}),
      Y(this, '_leader', t.charAt(0));
    for (let e = 0; e < t.length; e++) this._alphabetMap[t.charAt(e)] = e;
  }
  encode(t) {
    let e = mt(t);
    if (e.length === 0) return '';
    let i = [0];
    for (let s = 0; s < e.length; ++s) {
      let f = e[s];
      for (let c = 0; c < i.length; ++c)
        (f += i[c] << 8), (i[c] = f % this.base), (f = (f / this.base) | 0);
      for (; f > 0; ) i.push(f % this.base), (f = (f / this.base) | 0);
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
      for (let f = 0; f < e.length; ++f) (s += e[f] * this.base), (e[f] = s & 255), (s >>= 8);
      for (; s > 0; ) e.push(s & 255), (s >>= 8);
    }
    for (let i = 0; t[i] === this._leader && i < t.length - 1; ++i) e.push(0);
    return mt(new Uint8Array(e.reverse()));
  }
}
new Ea('abcdefghijklmnopqrstuvwxyz234567');
const en = new Ea('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');
function Df(r, t, e, i, n) {
  (r = mt(r)), (t = mt(t));
  let s,
    f = 1;
  const c = new Uint8Array(i),
    v = new Uint8Array(t.length + 4);
  v.set(t);
  let b, S;
  for (let P = 1; P <= f; P++) {
    (v[t.length] = (P >> 24) & 255),
      (v[t.length + 1] = (P >> 16) & 255),
      (v[t.length + 2] = (P >> 8) & 255),
      (v[t.length + 3] = P & 255);
    let B = mt(Rn(n, r, v));
    s || ((s = B.length), (S = new Uint8Array(s)), (f = Math.ceil(i / s)), (b = i - (f - 1) * s)),
      S.set(B);
    for (let V = 1; V < e; V++) {
      B = mt(Rn(n, r, B));
      for (let lt = 0; lt < s; lt++) S[lt] ^= B[lt];
    }
    const N = (P - 1) * s,
      R = P === f ? b : s;
    c.set(mt(S).slice(0, R), N);
  }
  return vt(c);
}
function Fi(r, t, e) {
  return (
    (e = {
      path: t,
      exports: {},
      require: function (i, n) {
        return Ff(i, n ?? e.path);
      },
    }),
    r(e, e.exports),
    e.exports
  );
}
function Ff() {
  throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}
var Fs = xa;
function xa(r, t) {
  if (!r) throw new Error(t || 'Assertion failed');
}
xa.equal = function (t, e, i) {
  if (t != e) throw new Error(i || 'Assertion failed: ' + t + ' != ' + e);
};
var Fr = Fi(function (r, t) {
    var e = t;
    function i(f, c) {
      if (Array.isArray(f)) return f.slice();
      if (!f) return [];
      var v = [];
      if (typeof f != 'string') {
        for (var b = 0; b < f.length; b++) v[b] = f[b] | 0;
        return v;
      }
      if (c === 'hex') {
        (f = f.replace(/[^a-z0-9]+/gi, '')), f.length % 2 !== 0 && (f = '0' + f);
        for (var b = 0; b < f.length; b += 2) v.push(parseInt(f[b] + f[b + 1], 16));
      } else
        for (var b = 0; b < f.length; b++) {
          var S = f.charCodeAt(b),
            P = S >> 8,
            B = S & 255;
          P ? v.push(P, B) : v.push(B);
        }
      return v;
    }
    e.toArray = i;
    function n(f) {
      return f.length === 1 ? '0' + f : f;
    }
    e.zero2 = n;
    function s(f) {
      for (var c = '', v = 0; v < f.length; v++) c += n(f[v].toString(16));
      return c;
    }
    (e.toHex = s),
      (e.encode = function (c, v) {
        return v === 'hex' ? s(c) : c;
      });
  }),
  wr = Fi(function (r, t) {
    var e = t;
    (e.assert = Fs),
      (e.toArray = Fr.toArray),
      (e.zero2 = Fr.zero2),
      (e.toHex = Fr.toHex),
      (e.encode = Fr.encode);
    function i(v, b, S) {
      var P = new Array(Math.max(v.bitLength(), S) + 1);
      P.fill(0);
      for (var B = 1 << (b + 1), N = v.clone(), R = 0; R < P.length; R++) {
        var V,
          lt = N.andln(B - 1);
        N.isOdd() ? (lt > (B >> 1) - 1 ? (V = (B >> 1) - lt) : (V = lt), N.isubn(V)) : (V = 0),
          (P[R] = V),
          N.iushrn(1);
      }
      return P;
    }
    e.getNAF = i;
    function n(v, b) {
      var S = [[], []];
      (v = v.clone()), (b = b.clone());
      for (var P = 0, B = 0, N; v.cmpn(-P) > 0 || b.cmpn(-B) > 0; ) {
        var R = (v.andln(3) + P) & 3,
          V = (b.andln(3) + B) & 3;
        R === 3 && (R = -1), V === 3 && (V = -1);
        var lt;
        R & 1
          ? ((N = (v.andln(7) + P) & 7), (N === 3 || N === 5) && V === 2 ? (lt = -R) : (lt = R))
          : (lt = 0),
          S[0].push(lt);
        var $;
        V & 1
          ? ((N = (b.andln(7) + B) & 7), (N === 3 || N === 5) && R === 2 ? ($ = -V) : ($ = V))
          : ($ = 0),
          S[1].push($),
          2 * P === lt + 1 && (P = 1 - P),
          2 * B === $ + 1 && (B = 1 - B),
          v.iushrn(1),
          b.iushrn(1);
      }
      return S;
    }
    e.getJSF = n;
    function s(v, b, S) {
      var P = '_' + b;
      v.prototype[b] = function () {
        return this[P] !== void 0 ? this[P] : (this[P] = S.call(this));
      };
    }
    e.cachedProperty = s;
    function f(v) {
      return typeof v == 'string' ? e.toArray(v, 'hex') : v;
    }
    e.parseBytes = f;
    function c(v) {
      return new oe(v, 'hex', 'le');
    }
    e.intFromLE = c;
  }),
  Dn = wr.getNAF,
  Kf = wr.getJSF,
  Fn = wr.assert;
function pi(r, t) {
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
var ki = pi;
pi.prototype.point = function () {
  throw new Error('Not implemented');
};
pi.prototype.validate = function () {
  throw new Error('Not implemented');
};
pi.prototype._fixedNafMul = function (t, e) {
  Fn(t.precomputed);
  var i = t._getDoubles(),
    n = Dn(e, 1, this._bitLength),
    s = (1 << (i.step + 1)) - (i.step % 2 === 0 ? 2 : 1);
  s /= 3;
  var f = [],
    c,
    v;
  for (c = 0; c < n.length; c += i.step) {
    v = 0;
    for (var b = c + i.step - 1; b >= c; b--) v = (v << 1) + n[b];
    f.push(v);
  }
  for (
    var S = this.jpoint(null, null, null), P = this.jpoint(null, null, null), B = s;
    B > 0;
    B--
  ) {
    for (c = 0; c < f.length; c++)
      (v = f[c]),
        v === B ? (P = P.mixedAdd(i.points[c])) : v === -B && (P = P.mixedAdd(i.points[c].neg()));
    S = S.add(P);
  }
  return S.toP();
};
pi.prototype._wnafMul = function (t, e) {
  var i = 4,
    n = t._getNAFPoints(i);
  i = n.wnd;
  for (
    var s = n.points,
      f = Dn(e, i, this._bitLength),
      c = this.jpoint(null, null, null),
      v = f.length - 1;
    v >= 0;
    v--
  ) {
    for (var b = 0; v >= 0 && f[v] === 0; v--) b++;
    if ((v >= 0 && b++, (c = c.dblp(b)), v < 0)) break;
    var S = f[v];
    Fn(S !== 0),
      t.type === 'affine'
        ? S > 0
          ? (c = c.mixedAdd(s[(S - 1) >> 1]))
          : (c = c.mixedAdd(s[(-S - 1) >> 1].neg()))
        : S > 0
          ? (c = c.add(s[(S - 1) >> 1]))
          : (c = c.add(s[(-S - 1) >> 1].neg()));
  }
  return t.type === 'affine' ? c.toP() : c;
};
pi.prototype._wnafMulAdd = function (t, e, i, n, s) {
  var f = this._wnafT1,
    c = this._wnafT2,
    v = this._wnafT3,
    b = 0,
    S,
    P,
    B;
  for (S = 0; S < n; S++) {
    B = e[S];
    var N = B._getNAFPoints(t);
    (f[S] = N.wnd), (c[S] = N.points);
  }
  for (S = n - 1; S >= 1; S -= 2) {
    var R = S - 1,
      V = S;
    if (f[R] !== 1 || f[V] !== 1) {
      (v[R] = Dn(i[R], f[R], this._bitLength)),
        (v[V] = Dn(i[V], f[V], this._bitLength)),
        (b = Math.max(v[R].length, b)),
        (b = Math.max(v[V].length, b));
      continue;
    }
    var lt = [e[R], null, null, e[V]];
    e[R].y.cmp(e[V].y) === 0
      ? ((lt[1] = e[R].add(e[V])), (lt[2] = e[R].toJ().mixedAdd(e[V].neg())))
      : e[R].y.cmp(e[V].y.redNeg()) === 0
        ? ((lt[1] = e[R].toJ().mixedAdd(e[V])), (lt[2] = e[R].add(e[V].neg())))
        : ((lt[1] = e[R].toJ().mixedAdd(e[V])), (lt[2] = e[R].toJ().mixedAdd(e[V].neg())));
    var $ = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
      C = Kf(i[R], i[V]);
    for (
      b = Math.max(C[0].length, b), v[R] = new Array(b), v[V] = new Array(b), P = 0;
      P < b;
      P++
    ) {
      var Z = C[0][P] | 0,
        J = C[1][P] | 0;
      (v[R][P] = $[(Z + 1) * 3 + (J + 1)]), (v[V][P] = 0), (c[R] = lt);
    }
  }
  var tt = this.jpoint(null, null, null),
    Mt = this._wnafT4;
  for (S = b; S >= 0; S--) {
    for (var se = 0; S >= 0; ) {
      var de = !0;
      for (P = 0; P < n; P++) (Mt[P] = v[P][S] | 0), Mt[P] !== 0 && (de = !1);
      if (!de) break;
      se++, S--;
    }
    if ((S >= 0 && se++, (tt = tt.dblp(se)), S < 0)) break;
    for (P = 0; P < n; P++) {
      var ut = Mt[P];
      ut !== 0 &&
        (ut > 0 ? (B = c[P][(ut - 1) >> 1]) : ut < 0 && (B = c[P][(-ut - 1) >> 1].neg()),
        B.type === 'affine' ? (tt = tt.mixedAdd(B)) : (tt = tt.add(B)));
    }
  }
  for (S = 0; S < n; S++) c[S] = null;
  return s ? tt : tt.toP();
};
function Tr(r, t) {
  (this.curve = r), (this.type = t), (this.precomputed = null);
}
pi.BasePoint = Tr;
Tr.prototype.eq = function () {
  throw new Error('Not implemented');
};
Tr.prototype.validate = function () {
  return this.curve.validate(this);
};
pi.prototype.decodePoint = function (t, e) {
  t = wr.toArray(t, e);
  var i = this.p.byteLength();
  if ((t[0] === 4 || t[0] === 6 || t[0] === 7) && t.length - 1 === 2 * i) {
    t[0] === 6 ? Fn(t[t.length - 1] % 2 === 0) : t[0] === 7 && Fn(t[t.length - 1] % 2 === 1);
    var n = this.point(t.slice(1, 1 + i), t.slice(1 + i, 1 + 2 * i));
    return n;
  } else if ((t[0] === 2 || t[0] === 3) && t.length - 1 === i)
    return this.pointFromX(t.slice(1, 1 + i), t[0] === 3);
  throw new Error('Unknown point format');
};
Tr.prototype.encodeCompressed = function (t) {
  return this.encode(t, !0);
};
Tr.prototype._encode = function (t) {
  var e = this.curve.p.byteLength(),
    i = this.getX().toArray('be', e);
  return t ? [this.getY().isEven() ? 2 : 3].concat(i) : [4].concat(i, this.getY().toArray('be', e));
};
Tr.prototype.encode = function (t, e) {
  return wr.encode(this._encode(e), t);
};
Tr.prototype.precompute = function (t) {
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
Tr.prototype._hasDoubles = function (t) {
  if (!this.precomputed) return !1;
  var e = this.precomputed.doubles;
  return e ? e.points.length >= Math.ceil((t.bitLength() + 1) / e.step) : !1;
};
Tr.prototype._getDoubles = function (t, e) {
  if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
  for (var i = [this], n = this, s = 0; s < e; s += t) {
    for (var f = 0; f < t; f++) n = n.dbl();
    i.push(n);
  }
  return { step: t, points: i };
};
Tr.prototype._getNAFPoints = function (t) {
  if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
  for (var e = [this], i = (1 << t) - 1, n = i === 1 ? null : this.dbl(), s = 1; s < i; s++)
    e[s] = e[s - 1].add(n);
  return { wnd: t, points: e };
};
Tr.prototype._getBeta = function () {
  return null;
};
Tr.prototype.dblp = function (t) {
  for (var e = this, i = 0; i < t; i++) e = e.dbl();
  return e;
};
var Ks = Fi(function (r) {
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
  zf = wr.assert;
function Br(r) {
  ki.call(this, 'short', r),
    (this.a = new oe(r.a, 16).toRed(this.red)),
    (this.b = new oe(r.b, 16).toRed(this.red)),
    (this.tinv = this.two.redInvm()),
    (this.zeroA = this.a.fromRed().cmpn(0) === 0),
    (this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0),
    (this.endo = this._getEndomorphism(r)),
    (this._endoWnafT1 = new Array(4)),
    (this._endoWnafT2 = new Array(4));
}
Ks(Br, ki);
var Hf = Br;
Br.prototype._getEndomorphism = function (t) {
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
        : ((i = s[1]), zf(this.g.mul(i).x.cmp(this.g.x.redMul(e)) === 0));
    }
    var f;
    return (
      t.basis
        ? (f = t.basis.map(function (c) {
            return { a: new oe(c.a, 16), b: new oe(c.b, 16) };
          }))
        : (f = this._getEndoBasis(i)),
      { beta: e, lambda: i, basis: f }
    );
  }
};
Br.prototype._getEndoRoots = function (t) {
  var e = t === this.p ? this.red : oe.mont(t),
    i = new oe(2).toRed(e).redInvm(),
    n = i.redNeg(),
    s = new oe(3).toRed(e).redNeg().redSqrt().redMul(i),
    f = n.redAdd(s).fromRed(),
    c = n.redSub(s).fromRed();
  return [f, c];
};
Br.prototype._getEndoBasis = function (t) {
  for (
    var e = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
      i = t,
      n = this.n.clone(),
      s = new oe(1),
      f = new oe(0),
      c = new oe(0),
      v = new oe(1),
      b,
      S,
      P,
      B,
      N,
      R,
      V,
      lt = 0,
      $,
      C;
    i.cmpn(0) !== 0;

  ) {
    var Z = n.div(i);
    ($ = n.sub(Z.mul(i))), (C = c.sub(Z.mul(s)));
    var J = v.sub(Z.mul(f));
    if (!P && $.cmp(e) < 0) (b = V.neg()), (S = s), (P = $.neg()), (B = C);
    else if (P && ++lt === 2) break;
    (V = $), (n = i), (i = $), (c = s), (s = C), (v = f), (f = J);
  }
  (N = $.neg()), (R = C);
  var tt = P.sqr().add(B.sqr()),
    Mt = N.sqr().add(R.sqr());
  return (
    Mt.cmp(tt) >= 0 && ((N = b), (R = S)),
    P.negative && ((P = P.neg()), (B = B.neg())),
    N.negative && ((N = N.neg()), (R = R.neg())),
    [
      { a: P, b: B },
      { a: N, b: R },
    ]
  );
};
Br.prototype._endoSplit = function (t) {
  var e = this.endo.basis,
    i = e[0],
    n = e[1],
    s = n.b.mul(t).divRound(this.n),
    f = i.b.neg().mul(t).divRound(this.n),
    c = s.mul(i.a),
    v = f.mul(n.a),
    b = s.mul(i.b),
    S = f.mul(n.b),
    P = t.sub(c).sub(v),
    B = b.add(S).neg();
  return { k1: P, k2: B };
};
Br.prototype.pointFromX = function (t, e) {
  (t = new oe(t, 16)), t.red || (t = t.toRed(this.red));
  var i = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),
    n = i.redSqrt();
  if (n.redSqr().redSub(i).cmp(this.zero) !== 0) throw new Error('invalid point');
  var s = n.fromRed().isOdd();
  return ((e && !s) || (!e && s)) && (n = n.redNeg()), this.point(t, n);
};
Br.prototype.validate = function (t) {
  if (t.inf) return !0;
  var e = t.x,
    i = t.y,
    n = this.a.redMul(e),
    s = e.redSqr().redMul(e).redIAdd(n).redIAdd(this.b);
  return i.redSqr().redISub(s).cmpn(0) === 0;
};
Br.prototype._endoWnafMulAdd = function (t, e, i) {
  for (var n = this._endoWnafT1, s = this._endoWnafT2, f = 0; f < t.length; f++) {
    var c = this._endoSplit(e[f]),
      v = t[f],
      b = v._getBeta();
    c.k1.negative && (c.k1.ineg(), (v = v.neg(!0))),
      c.k2.negative && (c.k2.ineg(), (b = b.neg(!0))),
      (n[f * 2] = v),
      (n[f * 2 + 1] = b),
      (s[f * 2] = c.k1),
      (s[f * 2 + 1] = c.k2);
  }
  for (var S = this._wnafMulAdd(1, n, s, f * 2, i), P = 0; P < f * 2; P++)
    (n[P] = null), (s[P] = null);
  return S;
};
function Ye(r, t, e, i) {
  ki.BasePoint.call(this, r, 'affine'),
    t === null && e === null
      ? ((this.x = null), (this.y = null), (this.inf = !0))
      : ((this.x = new oe(t, 16)),
        (this.y = new oe(e, 16)),
        i && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)),
        this.x.red || (this.x = this.x.toRed(this.curve.red)),
        this.y.red || (this.y = this.y.toRed(this.curve.red)),
        (this.inf = !1));
}
Ks(Ye, ki.BasePoint);
Br.prototype.point = function (t, e, i) {
  return new Ye(this, t, e, i);
};
Br.prototype.pointFromJSON = function (t, e) {
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
  function s(c) {
    return t.point(c[0], c[1], i);
  }
  var f = e[2];
  return (
    (n.precomputed = {
      beta: null,
      doubles: f.doubles && { step: f.doubles.step, points: [n].concat(f.doubles.points.map(s)) },
      naf: f.naf && { wnd: f.naf.wnd, points: [n].concat(f.naf.points.map(s)) },
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
    f = s.redSqr().redISub(this.x.redAdd(this.x)),
    c = s.redMul(this.x.redSub(f)).redISub(this.y);
  return this.curve.point(f, c);
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
function $e(r, t, e, i) {
  ki.BasePoint.call(this, r, 'jacobian'),
    t === null && e === null && i === null
      ? ((this.x = this.curve.one), (this.y = this.curve.one), (this.z = new oe(0)))
      : ((this.x = new oe(t, 16)), (this.y = new oe(e, 16)), (this.z = new oe(i, 16))),
    this.x.red || (this.x = this.x.toRed(this.curve.red)),
    this.y.red || (this.y = this.y.toRed(this.curve.red)),
    this.z.red || (this.z = this.z.toRed(this.curve.red)),
    (this.zOne = this.z === this.curve.one);
}
Ks($e, ki.BasePoint);
Br.prototype.jpoint = function (t, e, i) {
  return new $e(this, t, e, i);
};
$e.prototype.toP = function () {
  if (this.isInfinity()) return this.curve.point(null, null);
  var t = this.z.redInvm(),
    e = t.redSqr(),
    i = this.x.redMul(e),
    n = this.y.redMul(e).redMul(t);
  return this.curve.point(i, n);
};
$e.prototype.neg = function () {
  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
};
$e.prototype.add = function (t) {
  if (this.isInfinity()) return t;
  if (t.isInfinity()) return this;
  var e = t.z.redSqr(),
    i = this.z.redSqr(),
    n = this.x.redMul(e),
    s = t.x.redMul(i),
    f = this.y.redMul(e.redMul(t.z)),
    c = t.y.redMul(i.redMul(this.z)),
    v = n.redSub(s),
    b = f.redSub(c);
  if (v.cmpn(0) === 0) return b.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var S = v.redSqr(),
    P = S.redMul(v),
    B = n.redMul(S),
    N = b.redSqr().redIAdd(P).redISub(B).redISub(B),
    R = b.redMul(B.redISub(N)).redISub(f.redMul(P)),
    V = this.z.redMul(t.z).redMul(v);
  return this.curve.jpoint(N, R, V);
};
$e.prototype.mixedAdd = function (t) {
  if (this.isInfinity()) return t.toJ();
  if (t.isInfinity()) return this;
  var e = this.z.redSqr(),
    i = this.x,
    n = t.x.redMul(e),
    s = this.y,
    f = t.y.redMul(e).redMul(this.z),
    c = i.redSub(n),
    v = s.redSub(f);
  if (c.cmpn(0) === 0) return v.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var b = c.redSqr(),
    S = b.redMul(c),
    P = i.redMul(b),
    B = v.redSqr().redIAdd(S).redISub(P).redISub(P),
    N = v.redMul(P.redISub(B)).redISub(s.redMul(S)),
    R = this.z.redMul(c);
  return this.curve.jpoint(B, N, R);
};
$e.prototype.dblp = function (t) {
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
    f = this.x,
    c = this.y,
    v = this.z,
    b = v.redSqr().redSqr(),
    S = c.redAdd(c);
  for (e = 0; e < t; e++) {
    var P = f.redSqr(),
      B = S.redSqr(),
      N = B.redSqr(),
      R = P.redAdd(P).redIAdd(P).redIAdd(n.redMul(b)),
      V = f.redMul(B),
      lt = R.redSqr().redISub(V.redAdd(V)),
      $ = V.redISub(lt),
      C = R.redMul($);
    C = C.redIAdd(C).redISub(N);
    var Z = S.redMul(v);
    e + 1 < t && (b = b.redMul(N)), (f = lt), (v = Z), (S = C);
  }
  return this.curve.jpoint(f, S.redMul(s), v);
};
$e.prototype.dbl = function () {
  return this.isInfinity()
    ? this
    : this.curve.zeroA
      ? this._zeroDbl()
      : this.curve.threeA
        ? this._threeDbl()
        : this._dbl();
};
$e.prototype._zeroDbl = function () {
  var t, e, i;
  if (this.zOne) {
    var n = this.x.redSqr(),
      s = this.y.redSqr(),
      f = s.redSqr(),
      c = this.x.redAdd(s).redSqr().redISub(n).redISub(f);
    c = c.redIAdd(c);
    var v = n.redAdd(n).redIAdd(n),
      b = v.redSqr().redISub(c).redISub(c),
      S = f.redIAdd(f);
    (S = S.redIAdd(S)),
      (S = S.redIAdd(S)),
      (t = b),
      (e = v.redMul(c.redISub(b)).redISub(S)),
      (i = this.y.redAdd(this.y));
  } else {
    var P = this.x.redSqr(),
      B = this.y.redSqr(),
      N = B.redSqr(),
      R = this.x.redAdd(B).redSqr().redISub(P).redISub(N);
    R = R.redIAdd(R);
    var V = P.redAdd(P).redIAdd(P),
      lt = V.redSqr(),
      $ = N.redIAdd(N);
    ($ = $.redIAdd($)),
      ($ = $.redIAdd($)),
      (t = lt.redISub(R).redISub(R)),
      (e = V.redMul(R.redISub(t)).redISub($)),
      (i = this.y.redMul(this.z)),
      (i = i.redIAdd(i));
  }
  return this.curve.jpoint(t, e, i);
};
$e.prototype._threeDbl = function () {
  var t, e, i;
  if (this.zOne) {
    var n = this.x.redSqr(),
      s = this.y.redSqr(),
      f = s.redSqr(),
      c = this.x.redAdd(s).redSqr().redISub(n).redISub(f);
    c = c.redIAdd(c);
    var v = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
      b = v.redSqr().redISub(c).redISub(c);
    t = b;
    var S = f.redIAdd(f);
    (S = S.redIAdd(S)),
      (S = S.redIAdd(S)),
      (e = v.redMul(c.redISub(b)).redISub(S)),
      (i = this.y.redAdd(this.y));
  } else {
    var P = this.z.redSqr(),
      B = this.y.redSqr(),
      N = this.x.redMul(B),
      R = this.x.redSub(P).redMul(this.x.redAdd(P));
    R = R.redAdd(R).redIAdd(R);
    var V = N.redIAdd(N);
    V = V.redIAdd(V);
    var lt = V.redAdd(V);
    (t = R.redSqr().redISub(lt)), (i = this.y.redAdd(this.z).redSqr().redISub(B).redISub(P));
    var $ = B.redSqr();
    ($ = $.redIAdd($)),
      ($ = $.redIAdd($)),
      ($ = $.redIAdd($)),
      (e = R.redMul(V.redISub(t)).redISub($));
  }
  return this.curve.jpoint(t, e, i);
};
$e.prototype._dbl = function () {
  var t = this.curve.a,
    e = this.x,
    i = this.y,
    n = this.z,
    s = n.redSqr().redSqr(),
    f = e.redSqr(),
    c = i.redSqr(),
    v = f.redAdd(f).redIAdd(f).redIAdd(t.redMul(s)),
    b = e.redAdd(e);
  b = b.redIAdd(b);
  var S = b.redMul(c),
    P = v.redSqr().redISub(S.redAdd(S)),
    B = S.redISub(P),
    N = c.redSqr();
  (N = N.redIAdd(N)), (N = N.redIAdd(N)), (N = N.redIAdd(N));
  var R = v.redMul(B).redISub(N),
    V = i.redAdd(i).redMul(n);
  return this.curve.jpoint(P, R, V);
};
$e.prototype.trpl = function () {
  if (!this.curve.zeroA) return this.dbl().add(this);
  var t = this.x.redSqr(),
    e = this.y.redSqr(),
    i = this.z.redSqr(),
    n = e.redSqr(),
    s = t.redAdd(t).redIAdd(t),
    f = s.redSqr(),
    c = this.x.redAdd(e).redSqr().redISub(t).redISub(n);
  (c = c.redIAdd(c)), (c = c.redAdd(c).redIAdd(c)), (c = c.redISub(f));
  var v = c.redSqr(),
    b = n.redIAdd(n);
  (b = b.redIAdd(b)), (b = b.redIAdd(b)), (b = b.redIAdd(b));
  var S = s.redIAdd(c).redSqr().redISub(f).redISub(v).redISub(b),
    P = e.redMul(S);
  (P = P.redIAdd(P)), (P = P.redIAdd(P));
  var B = this.x.redMul(v).redISub(P);
  (B = B.redIAdd(B)), (B = B.redIAdd(B));
  var N = this.y.redMul(S.redMul(b.redISub(S)).redISub(c.redMul(v)));
  (N = N.redIAdd(N)), (N = N.redIAdd(N)), (N = N.redIAdd(N));
  var R = this.z.redAdd(c).redSqr().redISub(i).redISub(v);
  return this.curve.jpoint(B, N, R);
};
$e.prototype.mul = function (t, e) {
  return (t = new oe(t, e)), this.curve._wnafMul(this, t);
};
$e.prototype.eq = function (t) {
  if (t.type === 'affine') return this.eq(t.toJ());
  if (this === t) return !0;
  var e = this.z.redSqr(),
    i = t.z.redSqr();
  if (this.x.redMul(i).redISub(t.x.redMul(e)).cmpn(0) !== 0) return !1;
  var n = e.redMul(this.z),
    s = i.redMul(t.z);
  return this.y.redMul(s).redISub(t.y.redMul(n)).cmpn(0) === 0;
};
$e.prototype.eqXToP = function (t) {
  var e = this.z.redSqr(),
    i = t.toRed(this.curve.red).redMul(e);
  if (this.x.cmp(i) === 0) return !0;
  for (var n = t.clone(), s = this.curve.redN.redMul(e); ; ) {
    if ((n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0)) return !1;
    if ((i.redIAdd(s), this.x.cmp(i) === 0)) return !0;
  }
};
$e.prototype.inspect = function () {
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
$e.prototype.isInfinity = function () {
  return this.z.cmpn(0) === 0;
};
var kn = Fi(function (r, t) {
    var e = t;
    (e.base = ki), (e.short = Hf), (e.mont = null), (e.edwards = null);
  }),
  Tn = Fi(function (r, t) {
    var e = t,
      i = wr.assert;
    function n(c) {
      c.type === 'short'
        ? (this.curve = new kn.short(c))
        : c.type === 'edwards'
          ? (this.curve = new kn.edwards(c))
          : (this.curve = new kn.mont(c)),
        (this.g = this.curve.g),
        (this.n = this.curve.n),
        (this.hash = c.hash),
        i(this.g.validate(), 'Invalid curve'),
        i(this.g.mul(this.n).isInfinity(), 'Invalid curve, G*N != O');
    }
    e.PresetCurve = n;
    function s(c, v) {
      Object.defineProperty(e, c, {
        configurable: !0,
        enumerable: !0,
        get: function () {
          var b = new n(v);
          return Object.defineProperty(e, c, { configurable: !0, enumerable: !0, value: b }), b;
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
      hash: Xr.sha256,
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
        hash: Xr.sha256,
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
        hash: Xr.sha256,
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
        hash: Xr.sha384,
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
        hash: Xr.sha512,
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
        hash: Xr.sha256,
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
        hash: Xr.sha256,
        gRed: !1,
        g: [
          '216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a',
          '6666666666666666666666666666666666666666666666666666666666666658',
        ],
      });
    var f;
    try {
      f = null.crash();
    } catch {
      f = void 0;
    }
    s('secp256k1', {
      type: 'short',
      prime: 'k256',
      p: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f',
      a: '0',
      b: '7',
      n: 'ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141',
      h: '1',
      hash: Xr.sha256,
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
        f,
      ],
    });
  });
function gi(r) {
  if (!(this instanceof gi)) return new gi(r);
  (this.hash = r.hash),
    (this.predResist = !!r.predResist),
    (this.outLen = this.hash.outSize),
    (this.minEntropy = r.minEntropy || this.hash.hmacStrength),
    (this._reseed = null),
    (this.reseedInterval = null),
    (this.K = null),
    (this.V = null);
  var t = Fr.toArray(r.entropy, r.entropyEnc || 'hex'),
    e = Fr.toArray(r.nonce, r.nonceEnc || 'hex'),
    i = Fr.toArray(r.pers, r.persEnc || 'hex');
  Fs(
    t.length >= this.minEntropy / 8,
    'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits'
  ),
    this._init(t, e, i);
}
var Ma = gi;
gi.prototype._init = function (t, e, i) {
  var n = t.concat(e).concat(i);
  (this.K = new Array(this.outLen / 8)), (this.V = new Array(this.outLen / 8));
  for (var s = 0; s < this.V.length; s++) (this.K[s] = 0), (this.V[s] = 1);
  this._update(n), (this._reseed = 1), (this.reseedInterval = 281474976710656);
};
gi.prototype._hmac = function () {
  return new Xr.hmac(this.hash, this.K);
};
gi.prototype._update = function (t) {
  var e = this._hmac().update(this.V).update([0]);
  t && (e = e.update(t)),
    (this.K = e.digest()),
    (this.V = this._hmac().update(this.V).digest()),
    t &&
      ((this.K = this._hmac().update(this.V).update([1]).update(t).digest()),
      (this.V = this._hmac().update(this.V).digest()));
};
gi.prototype.reseed = function (t, e, i, n) {
  typeof e != 'string' && ((n = i), (i = e), (e = null)),
    (t = Fr.toArray(t, e)),
    (i = Fr.toArray(i, n)),
    Fs(
      t.length >= this.minEntropy / 8,
      'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits'
    ),
    this._update(t.concat(i || [])),
    (this._reseed = 1);
};
gi.prototype.generate = function (t, e, i, n) {
  if (this._reseed > this.reseedInterval) throw new Error('Reseed is required');
  typeof e != 'string' && ((n = i), (i = e), (e = null)),
    i && ((i = Fr.toArray(i, n || 'hex')), this._update(i));
  for (var s = []; s.length < t; )
    (this.V = this._hmac().update(this.V).digest()), (s = s.concat(this.V));
  var f = s.slice(0, t);
  return this._update(i), this._reseed++, Fr.encode(f, e);
};
var ws = wr.assert;
function or(r, t) {
  (this.ec = r),
    (this.priv = null),
    (this.pub = null),
    t.priv && this._importPrivate(t.priv, t.privEnc),
    t.pub && this._importPublic(t.pub, t.pubEnc);
}
var zs = or;
or.fromPublic = function (t, e, i) {
  return e instanceof or ? e : new or(t, { pub: e, pubEnc: i });
};
or.fromPrivate = function (t, e, i) {
  return e instanceof or ? e : new or(t, { priv: e, privEnc: i });
};
or.prototype.validate = function () {
  var t = this.getPublic();
  return t.isInfinity()
    ? { result: !1, reason: 'Invalid public key' }
    : t.validate()
      ? t.mul(this.ec.curve.n).isInfinity()
        ? { result: !0, reason: null }
        : { result: !1, reason: 'Public key * N != O' }
      : { result: !1, reason: 'Public key is not a point' };
};
or.prototype.getPublic = function (t, e) {
  return (
    typeof t == 'string' && ((e = t), (t = null)),
    this.pub || (this.pub = this.ec.g.mul(this.priv)),
    e ? this.pub.encode(e, t) : this.pub
  );
};
or.prototype.getPrivate = function (t) {
  return t === 'hex' ? this.priv.toString(16, 2) : this.priv;
};
or.prototype._importPrivate = function (t, e) {
  (this.priv = new oe(t, e || 16)), (this.priv = this.priv.umod(this.ec.curve.n));
};
or.prototype._importPublic = function (t, e) {
  if (t.x || t.y) {
    this.ec.curve.type === 'mont'
      ? ws(t.x, 'Need x coordinate')
      : (this.ec.curve.type === 'short' || this.ec.curve.type === 'edwards') &&
        ws(t.x && t.y, 'Need both x and y coordinate'),
      (this.pub = this.ec.curve.point(t.x, t.y));
    return;
  }
  this.pub = this.ec.curve.decodePoint(t, e);
};
or.prototype.derive = function (t) {
  return t.validate() || ws(t.validate(), 'public point not validated'), t.mul(this.priv).getX();
};
or.prototype.sign = function (t, e, i) {
  return this.ec.sign(t, this, e, i);
};
or.prototype.verify = function (t, e) {
  return this.ec.verify(t, e, this);
};
or.prototype.inspect = function () {
  return (
    '<Key priv: ' +
    (this.priv && this.priv.toString(16, 2)) +
    ' pub: ' +
    (this.pub && this.pub.inspect()) +
    ' >'
  );
};
var qf = wr.assert;
function Yn(r, t) {
  if (r instanceof Yn) return r;
  this._importDER(r, t) ||
    (qf(r.r && r.s, 'Signature without r or s'),
    (this.r = new oe(r.r, 16)),
    (this.s = new oe(r.s, 16)),
    r.recoveryParam === void 0
      ? (this.recoveryParam = null)
      : (this.recoveryParam = r.recoveryParam));
}
var Zn = Yn;
function Gf() {
  this.place = 0;
}
function hs(r, t) {
  var e = r[t.place++];
  if (!(e & 128)) return e;
  var i = e & 15;
  if (i === 0 || i > 4) return !1;
  for (var n = 0, s = 0, f = t.place; s < i; s++, f++) (n <<= 8), (n |= r[f]), (n >>>= 0);
  return n <= 127 ? !1 : ((t.place = f), n);
}
function mo(r) {
  for (var t = 0, e = r.length - 1; !r[t] && !(r[t + 1] & 128) && t < e; ) t++;
  return t === 0 ? r : r.slice(t);
}
Yn.prototype._importDER = function (t, e) {
  t = wr.toArray(t, e);
  var i = new Gf();
  if (t[i.place++] !== 48) return !1;
  var n = hs(t, i);
  if (n === !1 || n + i.place !== t.length || t[i.place++] !== 2) return !1;
  var s = hs(t, i);
  if (s === !1) return !1;
  var f = t.slice(i.place, s + i.place);
  if (((i.place += s), t[i.place++] !== 2)) return !1;
  var c = hs(t, i);
  if (c === !1 || t.length !== c + i.place) return !1;
  var v = t.slice(i.place, c + i.place);
  if (f[0] === 0)
    if (f[1] & 128) f = f.slice(1);
    else return !1;
  if (v[0] === 0)
    if (v[1] & 128) v = v.slice(1);
    else return !1;
  return (this.r = new oe(f)), (this.s = new oe(v)), (this.recoveryParam = null), !0;
};
function cs(r, t) {
  if (t < 128) {
    r.push(t);
    return;
  }
  var e = 1 + ((Math.log(t) / Math.LN2) >>> 3);
  for (r.push(e | 128); --e; ) r.push((t >>> (e << 3)) & 255);
  r.push(t);
}
Yn.prototype.toDER = function (t) {
  var e = this.r.toArray(),
    i = this.s.toArray();
  for (
    e[0] & 128 && (e = [0].concat(e)), i[0] & 128 && (i = [0].concat(i)), e = mo(e), i = mo(i);
    !i[0] && !(i[1] & 128);

  )
    i = i.slice(1);
  var n = [2];
  cs(n, e.length), (n = n.concat(e)), n.push(2), cs(n, i.length);
  var s = n.concat(i),
    f = [48];
  return cs(f, s.length), (f = f.concat(s)), wr.encode(f, t);
};
var Vf = function () {
    throw new Error('unsupported');
  },
  Sa = wr.assert;
function kr(r) {
  if (!(this instanceof kr)) return new kr(r);
  typeof r == 'string' &&
    (Sa(Object.prototype.hasOwnProperty.call(Tn, r), 'Unknown curve ' + r), (r = Tn[r])),
    r instanceof Tn.PresetCurve && (r = { curve: r }),
    (this.curve = r.curve.curve),
    (this.n = this.curve.n),
    (this.nh = this.n.ushrn(1)),
    (this.g = this.curve.g),
    (this.g = r.curve.g),
    this.g.precompute(r.curve.n.bitLength() + 1),
    (this.hash = r.hash || r.curve.hash);
}
var jf = kr;
kr.prototype.keyPair = function (t) {
  return new zs(this, t);
};
kr.prototype.keyFromPrivate = function (t, e) {
  return zs.fromPrivate(this, t, e);
};
kr.prototype.keyFromPublic = function (t, e) {
  return zs.fromPublic(this, t, e);
};
kr.prototype.genKeyPair = function (t) {
  t || (t = {});
  for (
    var e = new Ma({
        hash: this.hash,
        pers: t.pers,
        persEnc: t.persEnc || 'utf8',
        entropy: t.entropy || Vf(this.hash.hmacStrength),
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
kr.prototype._truncateToN = function (t, e) {
  var i = t.byteLength() * 8 - this.n.bitLength();
  return i > 0 && (t = t.ushrn(i)), !e && t.cmp(this.n) >= 0 ? t.sub(this.n) : t;
};
kr.prototype.sign = function (t, e, i, n) {
  typeof i == 'object' && ((n = i), (i = null)),
    n || (n = {}),
    (e = this.keyFromPrivate(e, i)),
    (t = this._truncateToN(new oe(t, 16)));
  for (
    var s = this.n.byteLength(),
      f = e.getPrivate().toArray('be', s),
      c = t.toArray('be', s),
      v = new Ma({
        hash: this.hash,
        entropy: f,
        nonce: c,
        pers: n.pers,
        persEnc: n.persEnc || 'utf8',
      }),
      b = this.n.sub(new oe(1)),
      S = 0;
    ;
    S++
  ) {
    var P = n.k ? n.k(S) : new oe(v.generate(this.n.byteLength()));
    if (((P = this._truncateToN(P, !0)), !(P.cmpn(1) <= 0 || P.cmp(b) >= 0))) {
      var B = this.g.mul(P);
      if (!B.isInfinity()) {
        var N = B.getX(),
          R = N.umod(this.n);
        if (R.cmpn(0) !== 0) {
          var V = P.invm(this.n).mul(R.mul(e.getPrivate()).iadd(t));
          if (((V = V.umod(this.n)), V.cmpn(0) !== 0)) {
            var lt = (B.getY().isOdd() ? 1 : 0) | (N.cmp(R) !== 0 ? 2 : 0);
            return (
              n.canonical && V.cmp(this.nh) > 0 && ((V = this.n.sub(V)), (lt ^= 1)),
              new Zn({ r: R, s: V, recoveryParam: lt })
            );
          }
        }
      }
    }
  }
};
kr.prototype.verify = function (t, e, i, n) {
  (t = this._truncateToN(new oe(t, 16))), (i = this.keyFromPublic(i, n)), (e = new Zn(e, 'hex'));
  var s = e.r,
    f = e.s;
  if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0 || f.cmpn(1) < 0 || f.cmp(this.n) >= 0) return !1;
  var c = f.invm(this.n),
    v = c.mul(t).umod(this.n),
    b = c.mul(s).umod(this.n),
    S;
  return this.curve._maxwellTrick
    ? ((S = this.g.jmulAdd(v, i.getPublic(), b)), S.isInfinity() ? !1 : S.eqXToP(s))
    : ((S = this.g.mulAdd(v, i.getPublic(), b)),
      S.isInfinity() ? !1 : S.getX().umod(this.n).cmp(s) === 0);
};
kr.prototype.recoverPubKey = function (r, t, e, i) {
  Sa((3 & e) === e, 'The recovery param is more than two bits'), (t = new Zn(t, i));
  var n = this.n,
    s = new oe(r),
    f = t.r,
    c = t.s,
    v = e & 1,
    b = e >> 1;
  if (f.cmp(this.curve.p.umod(this.curve.n)) >= 0 && b)
    throw new Error('Unable to find sencond key candinate');
  b ? (f = this.curve.pointFromX(f.add(this.curve.n), v)) : (f = this.curve.pointFromX(f, v));
  var S = t.r.invm(n),
    P = n.sub(s).mul(S).umod(n),
    B = c.mul(S).umod(n);
  return this.g.mulAdd(P, f, B);
};
kr.prototype.getKeyRecoveryParam = function (r, t, e, i) {
  if (((t = new Zn(t, i)), t.recoveryParam !== null)) return t.recoveryParam;
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
var Wf = Fi(function (r, t) {
    var e = t;
    (e.version = '6.5.4'),
      (e.utils = wr),
      (e.rand = function () {
        throw new Error('unsupported');
      }),
      (e.curve = kn),
      (e.curves = Tn),
      (e.ec = jf),
      (e.eddsa = null);
  }),
  Jf = Wf.ec;
const Yf = 'signing-key/5.7.0',
  bs = new D(Yf);
let ds = null;
function Gr() {
  return ds || (ds = new Jf('secp256k1')), ds;
}
class As {
  constructor(t) {
    Y(this, 'curve', 'secp256k1'),
      Y(this, 'privateKey', vt(t)),
      xi(this.privateKey) !== 32 &&
        bs.throwArgumentError('invalid private key', 'privateKey', '[[ REDACTED ]]');
    const e = Gr().keyFromPrivate(mt(this.privateKey));
    Y(this, 'publicKey', '0x' + e.getPublic(!1, 'hex')),
      Y(this, 'compressedPublicKey', '0x' + e.getPublic(!0, 'hex')),
      Y(this, '_isSigningKey', !0);
  }
  _addPoint(t) {
    const e = Gr().keyFromPublic(mt(this.publicKey)),
      i = Gr().keyFromPublic(mt(t));
    return '0x' + e.pub.add(i.pub).encodeCompressed('hex');
  }
  signDigest(t) {
    const e = Gr().keyFromPrivate(mt(this.privateKey)),
      i = mt(t);
    i.length !== 32 && bs.throwArgumentError('bad digest length', 'digest', t);
    const n = e.sign(i, { canonical: !0 });
    return ln({
      recoveryParam: n.recoveryParam,
      r: Fe('0x' + n.r.toString(16), 32),
      s: Fe('0x' + n.s.toString(16), 32),
    });
  }
  computeSharedSecret(t) {
    const e = Gr().keyFromPrivate(mt(this.privateKey)),
      i = Gr().keyFromPublic(mt(_a(t)));
    return Fe('0x' + e.derive(i.getPublic()).toString(16), 32);
  }
  static isSigningKey(t) {
    return !!(t && t._isSigningKey);
  }
}
function Zf(r, t) {
  const e = ln(t),
    i = { r: mt(e.r), s: mt(e.s) };
  return '0x' + Gr().recoverPubKey(mt(r), i, e.recoveryParam).encode('hex', !1);
}
function _a(r, t) {
  const e = mt(r);
  if (e.length === 32) {
    const i = new As(e);
    return t ? '0x' + Gr().keyFromPrivate(e).getPublic(!0, 'hex') : i.publicKey;
  } else {
    if (e.length === 33) return t ? vt(e) : '0x' + Gr().keyFromPublic(e).getPublic(!1, 'hex');
    if (e.length === 65) return t ? '0x' + Gr().keyFromPublic(e).getPublic(!0, 'hex') : vt(e);
  }
  return bs.throwArgumentError('invalid public or private key', 'key', '[REDACTED]');
}
const Qf = 'transactions/5.7.0',
  nr = new D(Qf);
var vo;
(function (r) {
  (r[(r.legacy = 0)] = 'legacy'),
    (r[(r.eip2930 = 1)] = 'eip2930'),
    (r[(r.eip1559 = 2)] = 'eip1559');
})(vo || (vo = {}));
function Hs(r) {
  return r === '0x' ? null : Je(r);
}
function ir(r) {
  return r === '0x' ? oa : st.from(r);
}
const $f = [
    { name: 'nonce', maxLength: 32, numeric: !0 },
    { name: 'gasPrice', maxLength: 32, numeric: !0 },
    { name: 'gasLimit', maxLength: 32, numeric: !0 },
    { name: 'to', length: 20 },
    { name: 'value', maxLength: 32, numeric: !0 },
    { name: 'data' },
  ],
  Xf = {
    chainId: !0,
    data: !0,
    gasLimit: !0,
    gasPrice: !0,
    nonce: !0,
    to: !0,
    type: !0,
    value: !0,
  };
function Pa(r) {
  const t = _a(r);
  return Je(je(He(je(t, 1)), 12));
}
function ka(r, t) {
  return Pa(Zf(mt(r), t));
}
function yr(r, t) {
  const e = si(st.from(r).toHexString());
  return (
    e.length > 32 && nr.throwArgumentError('invalid length for ' + t, 'transaction:' + t, r), e
  );
}
function gs(r, t) {
  return {
    address: Je(r),
    storageKeys: (t || []).map(
      (e, i) => (
        xi(e) !== 32 &&
          nr.throwArgumentError('invalid access list storageKey', `accessList[${r}:${i}]`, e),
        e.toLowerCase()
      )
    ),
  };
}
function Ki(r) {
  if (Array.isArray(r))
    return r.map((e, i) =>
      Array.isArray(e)
        ? (e.length > 2 &&
            nr.throwArgumentError(
              'access list expected to be [ address, storageKeys[] ]',
              `value[${i}]`,
              e
            ),
          gs(e[0], e[1]))
        : gs(e.address, e.storageKeys)
    );
  const t = Object.keys(r).map((e) => {
    const i = r[e].reduce((n, s) => ((n[s] = !0), n), {});
    return gs(e, Object.keys(i).sort());
  });
  return t.sort((e, i) => e.address.localeCompare(i.address)), t;
}
function Ta(r) {
  return Ki(r).map((t) => [t.address, t.storageKeys]);
}
function Ba(r, t) {
  if (r.gasPrice != null) {
    const i = st.from(r.gasPrice),
      n = st.from(r.maxFeePerGas || 0);
    i.eq(n) ||
      nr.throwArgumentError('mismatch EIP-1559 gasPrice != maxFeePerGas', 'tx', {
        gasPrice: i,
        maxFeePerGas: n,
      });
  }
  const e = [
    yr(r.chainId || 0, 'chainId'),
    yr(r.nonce || 0, 'nonce'),
    yr(r.maxPriorityFeePerGas || 0, 'maxPriorityFeePerGas'),
    yr(r.maxFeePerGas || 0, 'maxFeePerGas'),
    yr(r.gasLimit || 0, 'gasLimit'),
    r.to != null ? Je(r.to) : '0x',
    yr(r.value || 0, 'value'),
    r.data || '0x',
    Ta(r.accessList || []),
  ];
  if (t) {
    const i = ln(t);
    e.push(yr(i.recoveryParam, 'recoveryParam')), e.push(si(i.r)), e.push(si(i.s));
  }
  return hr(['0x02', Ui(e)]);
}
function Na(r, t) {
  const e = [
    yr(r.chainId || 0, 'chainId'),
    yr(r.nonce || 0, 'nonce'),
    yr(r.gasPrice || 0, 'gasPrice'),
    yr(r.gasLimit || 0, 'gasLimit'),
    r.to != null ? Je(r.to) : '0x',
    yr(r.value || 0, 'value'),
    r.data || '0x',
    Ta(r.accessList || []),
  ];
  if (t) {
    const i = ln(t);
    e.push(yr(i.recoveryParam, 'recoveryParam')), e.push(si(i.r)), e.push(si(i.s));
  }
  return hr(['0x01', Ui(e)]);
}
function tl(r, t) {
  na(r, Xf);
  const e = [];
  $f.forEach(function (f) {
    let c = r[f.name] || [];
    const v = {};
    f.numeric && (v.hexPad = 'left'),
      (c = mt(vt(c, v))),
      f.length &&
        c.length !== f.length &&
        c.length > 0 &&
        nr.throwArgumentError('invalid length for ' + f.name, 'transaction:' + f.name, c),
      f.maxLength &&
        ((c = si(c)),
        c.length > f.maxLength &&
          nr.throwArgumentError('invalid length for ' + f.name, 'transaction:' + f.name, c)),
      e.push(vt(c));
  });
  let i = 0;
  if (
    (r.chainId != null
      ? ((i = r.chainId),
        typeof i != 'number' &&
          nr.throwArgumentError('invalid transaction.chainId', 'transaction', r))
      : t && !Rs(t) && t.v > 28 && (i = Math.floor((t.v - 35) / 2)),
    i !== 0 && (e.push(vt(i)), e.push('0x'), e.push('0x')),
    !t)
  )
    return Ui(e);
  const n = ln(t);
  let s = 27 + n.recoveryParam;
  return (
    i !== 0
      ? (e.pop(),
        e.pop(),
        e.pop(),
        (s += i * 2 + 8),
        n.v > 28 &&
          n.v !== s &&
          nr.throwArgumentError('transaction.chainId/signature.v mismatch', 'signature', t))
      : n.v !== s &&
        nr.throwArgumentError('transaction.chainId/signature.v mismatch', 'signature', t),
    e.push(vt(s)),
    e.push(si(mt(n.r))),
    e.push(si(mt(n.s))),
    Ui(e)
  );
}
function Xc(r, t) {
  if (r.type == null || r.type === 0)
    return (
      r.accessList != null &&
        nr.throwArgumentError(
          'untyped transactions do not support accessList; include type: 1',
          'transaction',
          r
        ),
      tl(r, t)
    );
  switch (r.type) {
    case 1:
      return Na(r, t);
    case 2:
      return Ba(r, t);
  }
  return nr.throwError(`unsupported transaction type: ${r.type}`, D.errors.UNSUPPORTED_OPERATION, {
    operation: 'serializeTransaction',
    transactionType: r.type,
  });
}
function Ca(r, t, e) {
  try {
    const i = ir(t[0]).toNumber();
    if (i !== 0 && i !== 1) throw new Error('bad recid');
    r.v = i;
  } catch {
    nr.throwArgumentError('invalid v for transaction type: 1', 'v', t[0]);
  }
  (r.r = Fe(t[1], 32)), (r.s = Fe(t[2], 32));
  try {
    const i = He(e(r));
    r.from = ka(i, { r: r.r, s: r.s, recoveryParam: r.v });
  } catch {}
}
function el(r) {
  const t = Os(r.slice(1));
  t.length !== 9 &&
    t.length !== 12 &&
    nr.throwArgumentError('invalid component count for transaction type: 2', 'payload', vt(r));
  const e = ir(t[2]),
    i = ir(t[3]),
    n = {
      type: 2,
      chainId: ir(t[0]).toNumber(),
      nonce: ir(t[1]).toNumber(),
      maxPriorityFeePerGas: e,
      maxFeePerGas: i,
      gasPrice: null,
      gasLimit: ir(t[4]),
      to: Hs(t[5]),
      value: ir(t[6]),
      data: t[7],
      accessList: Ki(t[8]),
    };
  return t.length === 9 || ((n.hash = He(r)), Ca(n, t.slice(9), Ba)), n;
}
function rl(r) {
  const t = Os(r.slice(1));
  t.length !== 8 &&
    t.length !== 11 &&
    nr.throwArgumentError('invalid component count for transaction type: 1', 'payload', vt(r));
  const e = {
    type: 1,
    chainId: ir(t[0]).toNumber(),
    nonce: ir(t[1]).toNumber(),
    gasPrice: ir(t[2]),
    gasLimit: ir(t[3]),
    to: Hs(t[4]),
    value: ir(t[5]),
    data: t[6],
    accessList: Ki(t[7]),
  };
  return t.length === 8 || ((e.hash = He(r)), Ca(e, t.slice(8), Na)), e;
}
function il(r) {
  const t = Os(r);
  t.length !== 9 &&
    t.length !== 6 &&
    nr.throwArgumentError('invalid raw transaction', 'rawTransaction', r);
  const e = {
    nonce: ir(t[0]).toNumber(),
    gasPrice: ir(t[1]),
    gasLimit: ir(t[2]),
    to: Hs(t[3]),
    value: ir(t[4]),
    data: t[5],
    chainId: 0,
  };
  if (t.length === 6) return e;
  try {
    e.v = st.from(t[6]).toNumber();
  } catch {
    return e;
  }
  if (((e.r = Fe(t[7], 32)), (e.s = Fe(t[8], 32)), st.from(e.r).isZero() && st.from(e.s).isZero()))
    (e.chainId = e.v), (e.v = 0);
  else {
    (e.chainId = Math.floor((e.v - 35) / 2)), e.chainId < 0 && (e.chainId = 0);
    let i = e.v - 27;
    const n = t.slice(0, 6);
    e.chainId !== 0 &&
      (n.push(vt(e.chainId)), n.push('0x'), n.push('0x'), (i -= e.chainId * 2 + 8));
    const s = He(Ui(n));
    try {
      e.from = ka(s, { r: vt(e.r), s: vt(e.s), recoveryParam: i });
    } catch {}
    e.hash = He(r);
  }
  return (e.type = null), e;
}
function nl(r) {
  const t = mt(r);
  if (t[0] > 127) return il(t);
  switch (t[0]) {
    case 1:
      return rl(t);
    case 2:
      return el(t);
  }
  return nr.throwError(`unsupported transaction type: ${t[0]}`, D.errors.UNSUPPORTED_OPERATION, {
    operation: 'parseTransaction',
    transactionType: t[0],
  });
}
const sl = 'wordlists/5.7.0',
  ol = new D(sl);
class gn {
  constructor(t) {
    ol.checkAbstract(new.target, gn), Y(this, 'locale', t);
  }
  split(t) {
    return t.toLowerCase().split(/ +/g);
  }
  join(t) {
    return t.join(' ');
  }
  static check(t) {
    const e = [];
    for (let i = 0; i < 2048; i++) {
      const n = t.getWord(i);
      if (i !== t.getWordIndex(n)) return '0x';
      e.push(n);
    }
    return wi(
      e.join(`
`) +
        `
`
    );
  }
  static register(t, e) {
    e || (e = t.locale);
  }
}
const al =
  'AbandonAbilityAbleAboutAboveAbsentAbsorbAbstractAbsurdAbuseAccessAccidentAccountAccuseAchieveAcidAcousticAcquireAcrossActActionActorActressActualAdaptAddAddictAddressAdjustAdmitAdultAdvanceAdviceAerobicAffairAffordAfraidAgainAgeAgentAgreeAheadAimAirAirportAisleAlarmAlbumAlcoholAlertAlienAllAlleyAllowAlmostAloneAlphaAlreadyAlsoAlterAlwaysAmateurAmazingAmongAmountAmusedAnalystAnchorAncientAngerAngleAngryAnimalAnkleAnnounceAnnualAnotherAnswerAntennaAntiqueAnxietyAnyApartApologyAppearAppleApproveAprilArchArcticAreaArenaArgueArmArmedArmorArmyAroundArrangeArrestArriveArrowArtArtefactArtistArtworkAskAspectAssaultAssetAssistAssumeAsthmaAthleteAtomAttackAttendAttitudeAttractAuctionAuditAugustAuntAuthorAutoAutumnAverageAvocadoAvoidAwakeAwareAwayAwesomeAwfulAwkwardAxisBabyBachelorBaconBadgeBagBalanceBalconyBallBambooBananaBannerBarBarelyBargainBarrelBaseBasicBasketBattleBeachBeanBeautyBecauseBecomeBeefBeforeBeginBehaveBehindBelieveBelowBeltBenchBenefitBestBetrayBetterBetweenBeyondBicycleBidBikeBindBiologyBirdBirthBitterBlackBladeBlameBlanketBlastBleakBlessBlindBloodBlossomBlouseBlueBlurBlushBoardBoatBodyBoilBombBoneBonusBookBoostBorderBoringBorrowBossBottomBounceBoxBoyBracketBrainBrandBrassBraveBreadBreezeBrickBridgeBriefBrightBringBriskBroccoliBrokenBronzeBroomBrotherBrownBrushBubbleBuddyBudgetBuffaloBuildBulbBulkBulletBundleBunkerBurdenBurgerBurstBusBusinessBusyButterBuyerBuzzCabbageCabinCableCactusCageCakeCallCalmCameraCampCanCanalCancelCandyCannonCanoeCanvasCanyonCapableCapitalCaptainCarCarbonCardCargoCarpetCarryCartCaseCashCasinoCastleCasualCatCatalogCatchCategoryCattleCaughtCauseCautionCaveCeilingCeleryCementCensusCenturyCerealCertainChairChalkChampionChangeChaosChapterChargeChaseChatCheapCheckCheeseChefCherryChestChickenChiefChildChimneyChoiceChooseChronicChuckleChunkChurnCigarCinnamonCircleCitizenCityCivilClaimClapClarifyClawClayCleanClerkCleverClickClientCliffClimbClinicClipClockClogCloseClothCloudClownClubClumpClusterClutchCoachCoastCoconutCodeCoffeeCoilCoinCollectColorColumnCombineComeComfortComicCommonCompanyConcertConductConfirmCongressConnectConsiderControlConvinceCookCoolCopperCopyCoralCoreCornCorrectCostCottonCouchCountryCoupleCourseCousinCoverCoyoteCrackCradleCraftCramCraneCrashCraterCrawlCrazyCreamCreditCreekCrewCricketCrimeCrispCriticCropCrossCrouchCrowdCrucialCruelCruiseCrumbleCrunchCrushCryCrystalCubeCultureCupCupboardCuriousCurrentCurtainCurveCushionCustomCuteCycleDadDamageDampDanceDangerDaringDashDaughterDawnDayDealDebateDebrisDecadeDecemberDecideDeclineDecorateDecreaseDeerDefenseDefineDefyDegreeDelayDeliverDemandDemiseDenialDentistDenyDepartDependDepositDepthDeputyDeriveDescribeDesertDesignDeskDespairDestroyDetailDetectDevelopDeviceDevoteDiagramDialDiamondDiaryDiceDieselDietDifferDigitalDignityDilemmaDinnerDinosaurDirectDirtDisagreeDiscoverDiseaseDishDismissDisorderDisplayDistanceDivertDivideDivorceDizzyDoctorDocumentDogDollDolphinDomainDonateDonkeyDonorDoorDoseDoubleDoveDraftDragonDramaDrasticDrawDreamDressDriftDrillDrinkDripDriveDropDrumDryDuckDumbDuneDuringDustDutchDutyDwarfDynamicEagerEagleEarlyEarnEarthEasilyEastEasyEchoEcologyEconomyEdgeEditEducateEffortEggEightEitherElbowElderElectricElegantElementElephantElevatorEliteElseEmbarkEmbodyEmbraceEmergeEmotionEmployEmpowerEmptyEnableEnactEndEndlessEndorseEnemyEnergyEnforceEngageEngineEnhanceEnjoyEnlistEnoughEnrichEnrollEnsureEnterEntireEntryEnvelopeEpisodeEqualEquipEraEraseErodeErosionErrorEruptEscapeEssayEssenceEstateEternalEthicsEvidenceEvilEvokeEvolveExactExampleExcessExchangeExciteExcludeExcuseExecuteExerciseExhaustExhibitExileExistExitExoticExpandExpectExpireExplainExposeExpressExtendExtraEyeEyebrowFabricFaceFacultyFadeFaintFaithFallFalseFameFamilyFamousFanFancyFantasyFarmFashionFatFatalFatherFatigueFaultFavoriteFeatureFebruaryFederalFeeFeedFeelFemaleFenceFestivalFetchFeverFewFiberFictionFieldFigureFileFilmFilterFinalFindFineFingerFinishFireFirmFirstFiscalFishFitFitnessFixFlagFlameFlashFlatFlavorFleeFlightFlipFloatFlockFloorFlowerFluidFlushFlyFoamFocusFogFoilFoldFollowFoodFootForceForestForgetForkFortuneForumForwardFossilFosterFoundFoxFragileFrameFrequentFreshFriendFringeFrogFrontFrostFrownFrozenFruitFuelFunFunnyFurnaceFuryFutureGadgetGainGalaxyGalleryGameGapGarageGarbageGardenGarlicGarmentGasGaspGateGatherGaugeGazeGeneralGeniusGenreGentleGenuineGestureGhostGiantGiftGiggleGingerGiraffeGirlGiveGladGlanceGlareGlassGlideGlimpseGlobeGloomGloryGloveGlowGlueGoatGoddessGoldGoodGooseGorillaGospelGossipGovernGownGrabGraceGrainGrantGrapeGrassGravityGreatGreenGridGriefGritGroceryGroupGrowGruntGuardGuessGuideGuiltGuitarGunGymHabitHairHalfHammerHamsterHandHappyHarborHardHarshHarvestHatHaveHawkHazardHeadHealthHeartHeavyHedgehogHeightHelloHelmetHelpHenHeroHiddenHighHillHintHipHireHistoryHobbyHockeyHoldHoleHolidayHollowHomeHoneyHoodHopeHornHorrorHorseHospitalHostHotelHourHoverHubHugeHumanHumbleHumorHundredHungryHuntHurdleHurryHurtHusbandHybridIceIconIdeaIdentifyIdleIgnoreIllIllegalIllnessImageImitateImmenseImmuneImpactImposeImproveImpulseInchIncludeIncomeIncreaseIndexIndicateIndoorIndustryInfantInflictInformInhaleInheritInitialInjectInjuryInmateInnerInnocentInputInquiryInsaneInsectInsideInspireInstallIntactInterestIntoInvestInviteInvolveIronIslandIsolateIssueItemIvoryJacketJaguarJarJazzJealousJeansJellyJewelJobJoinJokeJourneyJoyJudgeJuiceJumpJungleJuniorJunkJustKangarooKeenKeepKetchupKeyKickKidKidneyKindKingdomKissKitKitchenKiteKittenKiwiKneeKnifeKnockKnowLabLabelLaborLadderLadyLakeLampLanguageLaptopLargeLaterLatinLaughLaundryLavaLawLawnLawsuitLayerLazyLeaderLeafLearnLeaveLectureLeftLegLegalLegendLeisureLemonLendLengthLensLeopardLessonLetterLevelLiarLibertyLibraryLicenseLifeLiftLightLikeLimbLimitLinkLionLiquidListLittleLiveLizardLoadLoanLobsterLocalLockLogicLonelyLongLoopLotteryLoudLoungeLoveLoyalLuckyLuggageLumberLunarLunchLuxuryLyricsMachineMadMagicMagnetMaidMailMainMajorMakeMammalManManageMandateMangoMansionManualMapleMarbleMarchMarginMarineMarketMarriageMaskMassMasterMatchMaterialMathMatrixMatterMaximumMazeMeadowMeanMeasureMeatMechanicMedalMediaMelodyMeltMemberMemoryMentionMenuMercyMergeMeritMerryMeshMessageMetalMethodMiddleMidnightMilkMillionMimicMindMinimumMinorMinuteMiracleMirrorMiseryMissMistakeMixMixedMixtureMobileModelModifyMomMomentMonitorMonkeyMonsterMonthMoonMoralMoreMorningMosquitoMotherMotionMotorMountainMouseMoveMovieMuchMuffinMuleMultiplyMuscleMuseumMushroomMusicMustMutualMyselfMysteryMythNaiveNameNapkinNarrowNastyNationNatureNearNeckNeedNegativeNeglectNeitherNephewNerveNestNetNetworkNeutralNeverNewsNextNiceNightNobleNoiseNomineeNoodleNormalNorthNoseNotableNoteNothingNoticeNovelNowNuclearNumberNurseNutOakObeyObjectObligeObscureObserveObtainObviousOccurOceanOctoberOdorOffOfferOfficeOftenOilOkayOldOliveOlympicOmitOnceOneOnionOnlineOnlyOpenOperaOpinionOpposeOptionOrangeOrbitOrchardOrderOrdinaryOrganOrientOriginalOrphanOstrichOtherOutdoorOuterOutputOutsideOvalOvenOverOwnOwnerOxygenOysterOzonePactPaddlePagePairPalacePalmPandaPanelPanicPantherPaperParadeParentParkParrotPartyPassPatchPathPatientPatrolPatternPausePavePaymentPeacePeanutPearPeasantPelicanPenPenaltyPencilPeoplePepperPerfectPermitPersonPetPhonePhotoPhrasePhysicalPianoPicnicPicturePiecePigPigeonPillPilotPinkPioneerPipePistolPitchPizzaPlacePlanetPlasticPlatePlayPleasePledgePluckPlugPlungePoemPoetPointPolarPolePolicePondPonyPoolPopularPortionPositionPossiblePostPotatoPotteryPovertyPowderPowerPracticePraisePredictPreferPreparePresentPrettyPreventPricePridePrimaryPrintPriorityPrisonPrivatePrizeProblemProcessProduceProfitProgramProjectPromoteProofPropertyProsperProtectProudProvidePublicPuddingPullPulpPulsePumpkinPunchPupilPuppyPurchasePurityPurposePursePushPutPuzzlePyramidQualityQuantumQuarterQuestionQuickQuitQuizQuoteRabbitRaccoonRaceRackRadarRadioRailRainRaiseRallyRampRanchRandomRangeRapidRareRateRatherRavenRawRazorReadyRealReasonRebelRebuildRecallReceiveRecipeRecordRecycleReduceReflectReformRefuseRegionRegretRegularRejectRelaxReleaseReliefRelyRemainRememberRemindRemoveRenderRenewRentReopenRepairRepeatReplaceReportRequireRescueResembleResistResourceResponseResultRetireRetreatReturnReunionRevealReviewRewardRhythmRibRibbonRiceRichRideRidgeRifleRightRigidRingRiotRippleRiskRitualRivalRiverRoadRoastRobotRobustRocketRomanceRoofRookieRoomRoseRotateRoughRoundRouteRoyalRubberRudeRugRuleRunRunwayRuralSadSaddleSadnessSafeSailSaladSalmonSalonSaltSaluteSameSampleSandSatisfySatoshiSauceSausageSaveSayScaleScanScareScatterSceneSchemeSchoolScienceScissorsScorpionScoutScrapScreenScriptScrubSeaSearchSeasonSeatSecondSecretSectionSecuritySeedSeekSegmentSelectSellSeminarSeniorSenseSentenceSeriesServiceSessionSettleSetupSevenShadowShaftShallowShareShedShellSheriffShieldShiftShineShipShiverShockShoeShootShopShortShoulderShoveShrimpShrugShuffleShySiblingSickSideSiegeSightSignSilentSilkSillySilverSimilarSimpleSinceSingSirenSisterSituateSixSizeSkateSketchSkiSkillSkinSkirtSkullSlabSlamSleepSlenderSliceSlideSlightSlimSloganSlotSlowSlushSmallSmartSmileSmokeSmoothSnackSnakeSnapSniffSnowSoapSoccerSocialSockSodaSoftSolarSoldierSolidSolutionSolveSomeoneSongSoonSorrySortSoulSoundSoupSourceSouthSpaceSpareSpatialSpawnSpeakSpecialSpeedSpellSpendSphereSpiceSpiderSpikeSpinSpiritSplitSpoilSponsorSpoonSportSpotSpraySpreadSpringSpySquareSqueezeSquirrelStableStadiumStaffStageStairsStampStandStartStateStaySteakSteelStemStepStereoStickStillStingStockStomachStoneStoolStoryStoveStrategyStreetStrikeStrongStruggleStudentStuffStumbleStyleSubjectSubmitSubwaySuccessSuchSuddenSufferSugarSuggestSuitSummerSunSunnySunsetSuperSupplySupremeSureSurfaceSurgeSurpriseSurroundSurveySuspectSustainSwallowSwampSwapSwarmSwearSweetSwiftSwimSwingSwitchSwordSymbolSymptomSyrupSystemTableTackleTagTailTalentTalkTankTapeTargetTaskTasteTattooTaxiTeachTeamTellTenTenantTennisTentTermTestTextThankThatThemeThenTheoryThereTheyThingThisThoughtThreeThriveThrowThumbThunderTicketTideTigerTiltTimberTimeTinyTipTiredTissueTitleToastTobaccoTodayToddlerToeTogetherToiletTokenTomatoTomorrowToneTongueTonightToolToothTopTopicToppleTorchTornadoTortoiseTossTotalTouristTowardTowerTownToyTrackTradeTrafficTragicTrainTransferTrapTrashTravelTrayTreatTreeTrendTrialTribeTrickTriggerTrimTripTrophyTroubleTruckTrueTrulyTrumpetTrustTruthTryTubeTuitionTumbleTunaTunnelTurkeyTurnTurtleTwelveTwentyTwiceTwinTwistTwoTypeTypicalUglyUmbrellaUnableUnawareUncleUncoverUnderUndoUnfairUnfoldUnhappyUniformUniqueUnitUniverseUnknownUnlockUntilUnusualUnveilUpdateUpgradeUpholdUponUpperUpsetUrbanUrgeUsageUseUsedUsefulUselessUsualUtilityVacantVacuumVagueValidValleyValveVanVanishVaporVariousVastVaultVehicleVelvetVendorVentureVenueVerbVerifyVersionVeryVesselVeteranViableVibrantViciousVictoryVideoViewVillageVintageViolinVirtualVirusVisaVisitVisualVitalVividVocalVoiceVoidVolcanoVolumeVoteVoyageWageWagonWaitWalkWallWalnutWantWarfareWarmWarriorWashWaspWasteWaterWaveWayWealthWeaponWearWeaselWeatherWebWeddingWeekendWeirdWelcomeWestWetWhaleWhatWheatWheelWhenWhereWhipWhisperWideWidthWifeWildWillWinWindowWineWingWinkWinnerWinterWireWisdomWiseWishWitnessWolfWomanWonderWoodWoolWordWorkWorldWorryWorthWrapWreckWrestleWristWriteWrongYardYearYellowYouYoungYouthZebraZeroZoneZoo';
let $i = null;
function yo(r) {
  if (
    $i == null &&
    (($i = al
      .replace(/([A-Z])/g, ' $1')
      .toLowerCase()
      .substring(1)
      .split(' ')),
    gn.check(r) !== '0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60')
  )
    throw (($i = null), new Error('BIP39 Wordlist for en (English) FAILED'));
}
class ul extends gn {
  constructor() {
    super('en');
  }
  getWord(t) {
    return yo(this), $i[t];
  }
  getWordIndex(t) {
    return yo(this), $i.indexOf(t);
  }
}
const Ia = new ul();
gn.register(Ia);
const wo = { en: Ia },
  fl = 'hdnode/5.7.0',
  Kn = new D(fl),
  ll = st.from('0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141'),
  hl = sr('Bitcoin seed'),
  Wi = 2147483648;
function Ra(r) {
  return ((1 << r) - 1) << (8 - r);
}
function cl(r) {
  return (1 << r) - 1;
}
function wn(r) {
  return Fe(vt(r), 32);
}
function bo(r) {
  return en.encode(Qe([r, je(Mi(Mi(r)), 0, 4)]));
}
function qs(r) {
  if (r == null) return wo.en;
  if (typeof r == 'string') {
    const t = wo[r];
    return t == null && Kn.throwArgumentError('unknown locale', 'wordlist', r), t;
  }
  return r;
}
const Ti = {},
  t0 = "m/44'/60'/0'/0/0";
class li {
  constructor(t, e, i, n, s, f, c, v) {
    if (t !== Ti) throw new Error('HDNode constructor cannot be called directly');
    if (e) {
      const b = new As(e);
      Y(this, 'privateKey', b.privateKey), Y(this, 'publicKey', b.compressedPublicKey);
    } else Y(this, 'privateKey', null), Y(this, 'publicKey', vt(i));
    Y(this, 'parentFingerprint', n),
      Y(this, 'fingerprint', je(Au(Mi(this.publicKey)), 0, 4)),
      Y(this, 'address', Pa(this.publicKey)),
      Y(this, 'chainCode', s),
      Y(this, 'index', f),
      Y(this, 'depth', c),
      v == null
        ? (Y(this, 'mnemonic', null), Y(this, 'path', null))
        : typeof v == 'string'
          ? (Y(this, 'mnemonic', null), Y(this, 'path', v))
          : (Y(this, 'mnemonic', v), Y(this, 'path', v.path));
  }
  get extendedKey() {
    if (this.depth >= 256) throw new Error('Depth too large!');
    return bo(
      Qe([
        this.privateKey != null ? '0x0488ADE4' : '0x0488B21E',
        vt(this.depth),
        this.parentFingerprint,
        Fe(vt(this.index), 4),
        this.chainCode,
        this.privateKey != null ? Qe(['0x00', this.privateKey]) : this.publicKey,
      ])
    );
  }
  neuter() {
    return new li(
      Ti,
      null,
      this.publicKey,
      this.parentFingerprint,
      this.chainCode,
      this.index,
      this.depth,
      this.path
    );
  }
  _derive(t) {
    if (t > 4294967295) throw new Error('invalid index - ' + String(t));
    let e = this.path;
    e && (e += '/' + (t & ~Wi));
    const i = new Uint8Array(37);
    if (t & Wi) {
      if (!this.privateKey) throw new Error('cannot derive child of neutered node');
      i.set(mt(this.privateKey), 1), e && (e += "'");
    } else i.set(mt(this.publicKey));
    for (let P = 24; P >= 0; P -= 8) i[33 + (P >> 3)] = (t >> (24 - P)) & 255;
    const n = mt(Rn(to.sha512, this.chainCode, i)),
      s = n.slice(0, 32),
      f = n.slice(32);
    let c = null,
      v = null;
    this.privateKey
      ? (c = wn(st.from(s).add(this.privateKey).mod(ll)))
      : (v = new As(vt(s))._addPoint(this.publicKey));
    let b = e;
    const S = this.mnemonic;
    return (
      S && (b = Object.freeze({ phrase: S.phrase, path: e, locale: S.locale || 'en' })),
      new li(Ti, c, v, this.fingerprint, wn(f), t, this.depth + 1, b)
    );
  }
  derivePath(t) {
    const e = t.split('/');
    if (e.length === 0 || (e[0] === 'm' && this.depth !== 0))
      throw new Error('invalid path - ' + t);
    e[0] === 'm' && e.shift();
    let i = this;
    for (let n = 0; n < e.length; n++) {
      const s = e[n];
      if (s.match(/^[0-9]+'$/)) {
        const f = parseInt(s.substring(0, s.length - 1));
        if (f >= Wi) throw new Error('invalid path index - ' + s);
        i = i._derive(Wi + f);
      } else if (s.match(/^[0-9]+$/)) {
        const f = parseInt(s);
        if (f >= Wi) throw new Error('invalid path index - ' + s);
        i = i._derive(f);
      } else throw new Error('invalid path component - ' + s);
    }
    return i;
  }
  static _fromSeed(t, e) {
    const i = mt(t);
    if (i.length < 16 || i.length > 64) throw new Error('invalid seed');
    const n = mt(Rn(to.sha512, hl, i));
    return new li(Ti, wn(n.slice(0, 32)), null, '0x00000000', wn(n.slice(32)), 0, 0, e);
  }
  static fromMnemonic(t, e, i) {
    return (
      (i = qs(i)),
      (t = pl(gl(t, i), i)),
      li._fromSeed(dl(t, e), { phrase: t, path: 'm', locale: i.locale })
    );
  }
  static fromSeed(t) {
    return li._fromSeed(t, null);
  }
  static fromExtendedKey(t) {
    const e = en.decode(t);
    (e.length !== 82 || bo(e.slice(0, 78)) !== t) &&
      Kn.throwArgumentError('invalid extended key', 'extendedKey', '[REDACTED]');
    const i = e[4],
      n = vt(e.slice(5, 9)),
      s = parseInt(vt(e.slice(9, 13)).substring(2), 16),
      f = vt(e.slice(13, 45)),
      c = e.slice(45, 78);
    switch (vt(e.slice(0, 4))) {
      case '0x0488b21e':
      case '0x043587cf':
        return new li(Ti, null, vt(c), n, f, s, i, null);
      case '0x0488ade4':
      case '0x04358394 ':
        if (c[0] !== 0) break;
        return new li(Ti, vt(c.slice(1)), null, n, f, s, i, null);
    }
    return Kn.throwArgumentError('invalid extended key', 'extendedKey', '[REDACTED]');
  }
}
function dl(r, t) {
  t || (t = '');
  const e = sr('mnemonic' + t, Si.NFKD);
  return Df(sr(r, Si.NFKD), e, 2048, 64, 'sha512');
}
function gl(r, t) {
  (t = qs(t)), Kn.checkNormalize();
  const e = t.split(r);
  if (e.length % 3 !== 0) throw new Error('invalid mnemonic');
  const i = mt(new Uint8Array(Math.ceil((11 * e.length) / 8)));
  let n = 0;
  for (let b = 0; b < e.length; b++) {
    let S = t.getWordIndex(e[b].normalize('NFKD'));
    if (S === -1) throw new Error('invalid mnemonic');
    for (let P = 0; P < 11; P++) S & (1 << (10 - P)) && (i[n >> 3] |= 1 << (7 - (n % 8))), n++;
  }
  const s = (32 * e.length) / 3,
    f = e.length / 3,
    c = Ra(f);
  if ((mt(Mi(i.slice(0, s / 8)))[0] & c) !== (i[i.length - 1] & c))
    throw new Error('invalid checksum');
  return vt(i.slice(0, s / 8));
}
function pl(r, t) {
  if (((t = qs(t)), (r = mt(r)), r.length % 4 !== 0 || r.length < 16 || r.length > 32))
    throw new Error('invalid entropy');
  const e = [0];
  let i = 11;
  for (let f = 0; f < r.length; f++)
    i > 8
      ? ((e[e.length - 1] <<= 8), (e[e.length - 1] |= r[f]), (i -= 8))
      : ((e[e.length - 1] <<= i),
        (e[e.length - 1] |= r[f] >> (8 - i)),
        e.push(r[f] & cl(8 - i)),
        (i += 3));
  const n = r.length / 4,
    s = mt(Mi(r))[0] & Ra(n);
  return (
    (e[e.length - 1] <<= n), (e[e.length - 1] |= s >> (8 - n)), t.join(e.map((f) => t.getWord(f)))
  );
}
const ml = 'random/5.7.0',
  Es = new D(ml);
function vl() {
  if (typeof globalThis < 'u') return globalThis;
  if (typeof window < 'u') return window;
  if (typeof globalThis < 'u') return globalThis;
  throw new Error('unable to locate global object');
}
const Ao = vl();
let Bn = Ao.crypto || Ao.msCrypto;
(!Bn || !Bn.getRandomValues) &&
  (Es.warn('WARNING: Missing strong random number source'),
  (Bn = {
    getRandomValues: function (r) {
      return Es.throwError('no secure random source avaialble', D.errors.UNSUPPORTED_OPERATION, {
        operation: 'crypto.getRandomValues',
      });
    },
  }));
function e0(r) {
  (r <= 0 || r > 1024 || r % 1 || r != r) && Es.throwArgumentError('invalid length', 'length', r);
  const t = new Uint8Array(r);
  return Bn.getRandomValues(t), mt(t);
}
var La = { exports: {} };
(function (r) {
  (function (t) {
    var e = function (y) {
        var x,
          A = new Float64Array(16);
        if (y) for (x = 0; x < y.length; x++) A[x] = y[x];
        return A;
      },
      i = function () {
        throw new Error('no PRNG');
      },
      n = new Uint8Array(16),
      s = new Uint8Array(32);
    s[0] = 9;
    var f = e(),
      c = e([1]),
      v = e([56129, 1]),
      b = e([
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
      B = e([
        26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
        26214, 26214, 26214,
      ]),
      N = e([
        41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099,
        20417, 9344, 11139,
      ]);
    function R(y, x, A, h) {
      (y[x] = (A >> 24) & 255),
        (y[x + 1] = (A >> 16) & 255),
        (y[x + 2] = (A >> 8) & 255),
        (y[x + 3] = A & 255),
        (y[x + 4] = (h >> 24) & 255),
        (y[x + 5] = (h >> 16) & 255),
        (y[x + 6] = (h >> 8) & 255),
        (y[x + 7] = h & 255);
    }
    function V(y, x, A, h, M) {
      var T,
        I = 0;
      for (T = 0; T < M; T++) I |= y[x + T] ^ A[h + T];
      return (1 & ((I - 1) >>> 8)) - 1;
    }
    function lt(y, x, A, h) {
      return V(y, x, A, h, 16);
    }
    function $(y, x, A, h) {
      return V(y, x, A, h, 32);
    }
    function C(y, x, A, h) {
      for (
        var M = (h[0] & 255) | ((h[1] & 255) << 8) | ((h[2] & 255) << 16) | ((h[3] & 255) << 24),
          T = (A[0] & 255) | ((A[1] & 255) << 8) | ((A[2] & 255) << 16) | ((A[3] & 255) << 24),
          I = (A[4] & 255) | ((A[5] & 255) << 8) | ((A[6] & 255) << 16) | ((A[7] & 255) << 24),
          L = (A[8] & 255) | ((A[9] & 255) << 8) | ((A[10] & 255) << 16) | ((A[11] & 255) << 24),
          F = (A[12] & 255) | ((A[13] & 255) << 8) | ((A[14] & 255) << 16) | ((A[15] & 255) << 24),
          ct = (h[4] & 255) | ((h[5] & 255) << 8) | ((h[6] & 255) << 16) | ((h[7] & 255) << 24),
          et = (x[0] & 255) | ((x[1] & 255) << 8) | ((x[2] & 255) << 16) | ((x[3] & 255) << 24),
          ie = (x[4] & 255) | ((x[5] & 255) << 8) | ((x[6] & 255) << 16) | ((x[7] & 255) << 24),
          nt = (x[8] & 255) | ((x[9] & 255) << 8) | ((x[10] & 255) << 16) | ((x[11] & 255) << 24),
          bt = (x[12] & 255) | ((x[13] & 255) << 8) | ((x[14] & 255) << 16) | ((x[15] & 255) << 24),
          At = (h[8] & 255) | ((h[9] & 255) << 8) | ((h[10] & 255) << 16) | ((h[11] & 255) << 24),
          kt = (A[16] & 255) | ((A[17] & 255) << 8) | ((A[18] & 255) << 16) | ((A[19] & 255) << 24),
          Pt = (A[20] & 255) | ((A[21] & 255) << 8) | ((A[22] & 255) << 16) | ((A[23] & 255) << 24),
          Et = (A[24] & 255) | ((A[25] & 255) << 8) | ((A[26] & 255) << 16) | ((A[27] & 255) << 24),
          _t = (A[28] & 255) | ((A[29] & 255) << 8) | ((A[30] & 255) << 16) | ((A[31] & 255) << 24),
          xt = (h[12] & 255) | ((h[13] & 255) << 8) | ((h[14] & 255) << 16) | ((h[15] & 255) << 24),
          at = M,
          dt = T,
          rt = I,
          ft = L,
          ht = F,
          it = ct,
          O = et,
          U = ie,
          Q = nt,
          j = bt,
          W = At,
          X = kt,
          Ct = Pt,
          ae = Et,
          fe = _t,
          ue = xt,
          k,
          he = 0;
        he < 20;
        he += 2
      )
        (k = (at + Ct) | 0),
          (ht ^= (k << 7) | (k >>> 25)),
          (k = (ht + at) | 0),
          (Q ^= (k << 9) | (k >>> 23)),
          (k = (Q + ht) | 0),
          (Ct ^= (k << 13) | (k >>> 19)),
          (k = (Ct + Q) | 0),
          (at ^= (k << 18) | (k >>> 14)),
          (k = (it + dt) | 0),
          (j ^= (k << 7) | (k >>> 25)),
          (k = (j + it) | 0),
          (ae ^= (k << 9) | (k >>> 23)),
          (k = (ae + j) | 0),
          (dt ^= (k << 13) | (k >>> 19)),
          (k = (dt + ae) | 0),
          (it ^= (k << 18) | (k >>> 14)),
          (k = (W + O) | 0),
          (fe ^= (k << 7) | (k >>> 25)),
          (k = (fe + W) | 0),
          (rt ^= (k << 9) | (k >>> 23)),
          (k = (rt + fe) | 0),
          (O ^= (k << 13) | (k >>> 19)),
          (k = (O + rt) | 0),
          (W ^= (k << 18) | (k >>> 14)),
          (k = (ue + X) | 0),
          (ft ^= (k << 7) | (k >>> 25)),
          (k = (ft + ue) | 0),
          (U ^= (k << 9) | (k >>> 23)),
          (k = (U + ft) | 0),
          (X ^= (k << 13) | (k >>> 19)),
          (k = (X + U) | 0),
          (ue ^= (k << 18) | (k >>> 14)),
          (k = (at + ft) | 0),
          (dt ^= (k << 7) | (k >>> 25)),
          (k = (dt + at) | 0),
          (rt ^= (k << 9) | (k >>> 23)),
          (k = (rt + dt) | 0),
          (ft ^= (k << 13) | (k >>> 19)),
          (k = (ft + rt) | 0),
          (at ^= (k << 18) | (k >>> 14)),
          (k = (it + ht) | 0),
          (O ^= (k << 7) | (k >>> 25)),
          (k = (O + it) | 0),
          (U ^= (k << 9) | (k >>> 23)),
          (k = (U + O) | 0),
          (ht ^= (k << 13) | (k >>> 19)),
          (k = (ht + U) | 0),
          (it ^= (k << 18) | (k >>> 14)),
          (k = (W + j) | 0),
          (X ^= (k << 7) | (k >>> 25)),
          (k = (X + W) | 0),
          (Q ^= (k << 9) | (k >>> 23)),
          (k = (Q + X) | 0),
          (j ^= (k << 13) | (k >>> 19)),
          (k = (j + Q) | 0),
          (W ^= (k << 18) | (k >>> 14)),
          (k = (ue + fe) | 0),
          (Ct ^= (k << 7) | (k >>> 25)),
          (k = (Ct + ue) | 0),
          (ae ^= (k << 9) | (k >>> 23)),
          (k = (ae + Ct) | 0),
          (fe ^= (k << 13) | (k >>> 19)),
          (k = (fe + ae) | 0),
          (ue ^= (k << 18) | (k >>> 14));
      (at = (at + M) | 0),
        (dt = (dt + T) | 0),
        (rt = (rt + I) | 0),
        (ft = (ft + L) | 0),
        (ht = (ht + F) | 0),
        (it = (it + ct) | 0),
        (O = (O + et) | 0),
        (U = (U + ie) | 0),
        (Q = (Q + nt) | 0),
        (j = (j + bt) | 0),
        (W = (W + At) | 0),
        (X = (X + kt) | 0),
        (Ct = (Ct + Pt) | 0),
        (ae = (ae + Et) | 0),
        (fe = (fe + _t) | 0),
        (ue = (ue + xt) | 0),
        (y[0] = (at >>> 0) & 255),
        (y[1] = (at >>> 8) & 255),
        (y[2] = (at >>> 16) & 255),
        (y[3] = (at >>> 24) & 255),
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
        (y[36] = (j >>> 0) & 255),
        (y[37] = (j >>> 8) & 255),
        (y[38] = (j >>> 16) & 255),
        (y[39] = (j >>> 24) & 255),
        (y[40] = (W >>> 0) & 255),
        (y[41] = (W >>> 8) & 255),
        (y[42] = (W >>> 16) & 255),
        (y[43] = (W >>> 24) & 255),
        (y[44] = (X >>> 0) & 255),
        (y[45] = (X >>> 8) & 255),
        (y[46] = (X >>> 16) & 255),
        (y[47] = (X >>> 24) & 255),
        (y[48] = (Ct >>> 0) & 255),
        (y[49] = (Ct >>> 8) & 255),
        (y[50] = (Ct >>> 16) & 255),
        (y[51] = (Ct >>> 24) & 255),
        (y[52] = (ae >>> 0) & 255),
        (y[53] = (ae >>> 8) & 255),
        (y[54] = (ae >>> 16) & 255),
        (y[55] = (ae >>> 24) & 255),
        (y[56] = (fe >>> 0) & 255),
        (y[57] = (fe >>> 8) & 255),
        (y[58] = (fe >>> 16) & 255),
        (y[59] = (fe >>> 24) & 255),
        (y[60] = (ue >>> 0) & 255),
        (y[61] = (ue >>> 8) & 255),
        (y[62] = (ue >>> 16) & 255),
        (y[63] = (ue >>> 24) & 255);
    }
    function Z(y, x, A, h) {
      for (
        var M = (h[0] & 255) | ((h[1] & 255) << 8) | ((h[2] & 255) << 16) | ((h[3] & 255) << 24),
          T = (A[0] & 255) | ((A[1] & 255) << 8) | ((A[2] & 255) << 16) | ((A[3] & 255) << 24),
          I = (A[4] & 255) | ((A[5] & 255) << 8) | ((A[6] & 255) << 16) | ((A[7] & 255) << 24),
          L = (A[8] & 255) | ((A[9] & 255) << 8) | ((A[10] & 255) << 16) | ((A[11] & 255) << 24),
          F = (A[12] & 255) | ((A[13] & 255) << 8) | ((A[14] & 255) << 16) | ((A[15] & 255) << 24),
          ct = (h[4] & 255) | ((h[5] & 255) << 8) | ((h[6] & 255) << 16) | ((h[7] & 255) << 24),
          et = (x[0] & 255) | ((x[1] & 255) << 8) | ((x[2] & 255) << 16) | ((x[3] & 255) << 24),
          ie = (x[4] & 255) | ((x[5] & 255) << 8) | ((x[6] & 255) << 16) | ((x[7] & 255) << 24),
          nt = (x[8] & 255) | ((x[9] & 255) << 8) | ((x[10] & 255) << 16) | ((x[11] & 255) << 24),
          bt = (x[12] & 255) | ((x[13] & 255) << 8) | ((x[14] & 255) << 16) | ((x[15] & 255) << 24),
          At = (h[8] & 255) | ((h[9] & 255) << 8) | ((h[10] & 255) << 16) | ((h[11] & 255) << 24),
          kt = (A[16] & 255) | ((A[17] & 255) << 8) | ((A[18] & 255) << 16) | ((A[19] & 255) << 24),
          Pt = (A[20] & 255) | ((A[21] & 255) << 8) | ((A[22] & 255) << 16) | ((A[23] & 255) << 24),
          Et = (A[24] & 255) | ((A[25] & 255) << 8) | ((A[26] & 255) << 16) | ((A[27] & 255) << 24),
          _t = (A[28] & 255) | ((A[29] & 255) << 8) | ((A[30] & 255) << 16) | ((A[31] & 255) << 24),
          xt = (h[12] & 255) | ((h[13] & 255) << 8) | ((h[14] & 255) << 16) | ((h[15] & 255) << 24),
          at = M,
          dt = T,
          rt = I,
          ft = L,
          ht = F,
          it = ct,
          O = et,
          U = ie,
          Q = nt,
          j = bt,
          W = At,
          X = kt,
          Ct = Pt,
          ae = Et,
          fe = _t,
          ue = xt,
          k,
          he = 0;
        he < 20;
        he += 2
      )
        (k = (at + Ct) | 0),
          (ht ^= (k << 7) | (k >>> 25)),
          (k = (ht + at) | 0),
          (Q ^= (k << 9) | (k >>> 23)),
          (k = (Q + ht) | 0),
          (Ct ^= (k << 13) | (k >>> 19)),
          (k = (Ct + Q) | 0),
          (at ^= (k << 18) | (k >>> 14)),
          (k = (it + dt) | 0),
          (j ^= (k << 7) | (k >>> 25)),
          (k = (j + it) | 0),
          (ae ^= (k << 9) | (k >>> 23)),
          (k = (ae + j) | 0),
          (dt ^= (k << 13) | (k >>> 19)),
          (k = (dt + ae) | 0),
          (it ^= (k << 18) | (k >>> 14)),
          (k = (W + O) | 0),
          (fe ^= (k << 7) | (k >>> 25)),
          (k = (fe + W) | 0),
          (rt ^= (k << 9) | (k >>> 23)),
          (k = (rt + fe) | 0),
          (O ^= (k << 13) | (k >>> 19)),
          (k = (O + rt) | 0),
          (W ^= (k << 18) | (k >>> 14)),
          (k = (ue + X) | 0),
          (ft ^= (k << 7) | (k >>> 25)),
          (k = (ft + ue) | 0),
          (U ^= (k << 9) | (k >>> 23)),
          (k = (U + ft) | 0),
          (X ^= (k << 13) | (k >>> 19)),
          (k = (X + U) | 0),
          (ue ^= (k << 18) | (k >>> 14)),
          (k = (at + ft) | 0),
          (dt ^= (k << 7) | (k >>> 25)),
          (k = (dt + at) | 0),
          (rt ^= (k << 9) | (k >>> 23)),
          (k = (rt + dt) | 0),
          (ft ^= (k << 13) | (k >>> 19)),
          (k = (ft + rt) | 0),
          (at ^= (k << 18) | (k >>> 14)),
          (k = (it + ht) | 0),
          (O ^= (k << 7) | (k >>> 25)),
          (k = (O + it) | 0),
          (U ^= (k << 9) | (k >>> 23)),
          (k = (U + O) | 0),
          (ht ^= (k << 13) | (k >>> 19)),
          (k = (ht + U) | 0),
          (it ^= (k << 18) | (k >>> 14)),
          (k = (W + j) | 0),
          (X ^= (k << 7) | (k >>> 25)),
          (k = (X + W) | 0),
          (Q ^= (k << 9) | (k >>> 23)),
          (k = (Q + X) | 0),
          (j ^= (k << 13) | (k >>> 19)),
          (k = (j + Q) | 0),
          (W ^= (k << 18) | (k >>> 14)),
          (k = (ue + fe) | 0),
          (Ct ^= (k << 7) | (k >>> 25)),
          (k = (Ct + ue) | 0),
          (ae ^= (k << 9) | (k >>> 23)),
          (k = (ae + Ct) | 0),
          (fe ^= (k << 13) | (k >>> 19)),
          (k = (fe + ae) | 0),
          (ue ^= (k << 18) | (k >>> 14));
      (y[0] = (at >>> 0) & 255),
        (y[1] = (at >>> 8) & 255),
        (y[2] = (at >>> 16) & 255),
        (y[3] = (at >>> 24) & 255),
        (y[4] = (it >>> 0) & 255),
        (y[5] = (it >>> 8) & 255),
        (y[6] = (it >>> 16) & 255),
        (y[7] = (it >>> 24) & 255),
        (y[8] = (W >>> 0) & 255),
        (y[9] = (W >>> 8) & 255),
        (y[10] = (W >>> 16) & 255),
        (y[11] = (W >>> 24) & 255),
        (y[12] = (ue >>> 0) & 255),
        (y[13] = (ue >>> 8) & 255),
        (y[14] = (ue >>> 16) & 255),
        (y[15] = (ue >>> 24) & 255),
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
        (y[28] = (j >>> 0) & 255),
        (y[29] = (j >>> 8) & 255),
        (y[30] = (j >>> 16) & 255),
        (y[31] = (j >>> 24) & 255);
    }
    function J(y, x, A, h) {
      C(y, x, A, h);
    }
    function tt(y, x, A, h) {
      Z(y, x, A, h);
    }
    var Mt = new Uint8Array([
      101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107,
    ]);
    function se(y, x, A, h, M, T, I) {
      var L = new Uint8Array(16),
        F = new Uint8Array(64),
        ct,
        et;
      for (et = 0; et < 16; et++) L[et] = 0;
      for (et = 0; et < 8; et++) L[et] = T[et];
      for (; M >= 64; ) {
        for (J(F, L, I, Mt), et = 0; et < 64; et++) y[x + et] = A[h + et] ^ F[et];
        for (ct = 1, et = 8; et < 16; et++)
          (ct = (ct + (L[et] & 255)) | 0), (L[et] = ct & 255), (ct >>>= 8);
        (M -= 64), (x += 64), (h += 64);
      }
      if (M > 0) for (J(F, L, I, Mt), et = 0; et < M; et++) y[x + et] = A[h + et] ^ F[et];
      return 0;
    }
    function de(y, x, A, h, M) {
      var T = new Uint8Array(16),
        I = new Uint8Array(64),
        L,
        F;
      for (F = 0; F < 16; F++) T[F] = 0;
      for (F = 0; F < 8; F++) T[F] = h[F];
      for (; A >= 64; ) {
        for (J(I, T, M, Mt), F = 0; F < 64; F++) y[x + F] = I[F];
        for (L = 1, F = 8; F < 16; F++) (L = (L + (T[F] & 255)) | 0), (T[F] = L & 255), (L >>>= 8);
        (A -= 64), (x += 64);
      }
      if (A > 0) for (J(I, T, M, Mt), F = 0; F < A; F++) y[x + F] = I[F];
      return 0;
    }
    function ut(y, x, A, h, M) {
      var T = new Uint8Array(32);
      tt(T, h, M, Mt);
      for (var I = new Uint8Array(8), L = 0; L < 8; L++) I[L] = h[L + 16];
      return de(y, x, A, I, T);
    }
    function be(y, x, A, h, M, T, I) {
      var L = new Uint8Array(32);
      tt(L, T, I, Mt);
      for (var F = new Uint8Array(8), ct = 0; ct < 8; ct++) F[ct] = T[ct + 16];
      return se(y, x, A, h, M, F, L);
    }
    var w = function (y) {
      (this.buffer = new Uint8Array(16)),
        (this.r = new Uint16Array(10)),
        (this.h = new Uint16Array(10)),
        (this.pad = new Uint16Array(8)),
        (this.leftover = 0),
        (this.fin = 0);
      var x, A, h, M, T, I, L, F;
      (x = (y[0] & 255) | ((y[1] & 255) << 8)),
        (this.r[0] = x & 8191),
        (A = (y[2] & 255) | ((y[3] & 255) << 8)),
        (this.r[1] = ((x >>> 13) | (A << 3)) & 8191),
        (h = (y[4] & 255) | ((y[5] & 255) << 8)),
        (this.r[2] = ((A >>> 10) | (h << 6)) & 7939),
        (M = (y[6] & 255) | ((y[7] & 255) << 8)),
        (this.r[3] = ((h >>> 7) | (M << 9)) & 8191),
        (T = (y[8] & 255) | ((y[9] & 255) << 8)),
        (this.r[4] = ((M >>> 4) | (T << 12)) & 255),
        (this.r[5] = (T >>> 1) & 8190),
        (I = (y[10] & 255) | ((y[11] & 255) << 8)),
        (this.r[6] = ((T >>> 14) | (I << 2)) & 8191),
        (L = (y[12] & 255) | ((y[13] & 255) << 8)),
        (this.r[7] = ((I >>> 11) | (L << 5)) & 8065),
        (F = (y[14] & 255) | ((y[15] & 255) << 8)),
        (this.r[8] = ((L >>> 8) | (F << 8)) & 8191),
        (this.r[9] = (F >>> 5) & 127),
        (this.pad[0] = (y[16] & 255) | ((y[17] & 255) << 8)),
        (this.pad[1] = (y[18] & 255) | ((y[19] & 255) << 8)),
        (this.pad[2] = (y[20] & 255) | ((y[21] & 255) << 8)),
        (this.pad[3] = (y[22] & 255) | ((y[23] & 255) << 8)),
        (this.pad[4] = (y[24] & 255) | ((y[25] & 255) << 8)),
        (this.pad[5] = (y[26] & 255) | ((y[27] & 255) << 8)),
        (this.pad[6] = (y[28] & 255) | ((y[29] & 255) << 8)),
        (this.pad[7] = (y[30] & 255) | ((y[31] & 255) << 8));
    };
    (w.prototype.blocks = function (y, x, A) {
      for (
        var h = this.fin ? 0 : 2048,
          M,
          T,
          I,
          L,
          F,
          ct,
          et,
          ie,
          nt,
          bt,
          At,
          kt,
          Pt,
          Et,
          _t,
          xt,
          at,
          dt,
          rt,
          ft = this.h[0],
          ht = this.h[1],
          it = this.h[2],
          O = this.h[3],
          U = this.h[4],
          Q = this.h[5],
          j = this.h[6],
          W = this.h[7],
          X = this.h[8],
          Ct = this.h[9],
          ae = this.r[0],
          fe = this.r[1],
          ue = this.r[2],
          k = this.r[3],
          he = this.r[4],
          Ae = this.r[5],
          Ee = this.r[6],
          le = this.r[7],
          ve = this.r[8],
          ye = this.r[9];
        A >= 16;

      )
        (M = (y[x + 0] & 255) | ((y[x + 1] & 255) << 8)),
          (ft += M & 8191),
          (T = (y[x + 2] & 255) | ((y[x + 3] & 255) << 8)),
          (ht += ((M >>> 13) | (T << 3)) & 8191),
          (I = (y[x + 4] & 255) | ((y[x + 5] & 255) << 8)),
          (it += ((T >>> 10) | (I << 6)) & 8191),
          (L = (y[x + 6] & 255) | ((y[x + 7] & 255) << 8)),
          (O += ((I >>> 7) | (L << 9)) & 8191),
          (F = (y[x + 8] & 255) | ((y[x + 9] & 255) << 8)),
          (U += ((L >>> 4) | (F << 12)) & 8191),
          (Q += (F >>> 1) & 8191),
          (ct = (y[x + 10] & 255) | ((y[x + 11] & 255) << 8)),
          (j += ((F >>> 14) | (ct << 2)) & 8191),
          (et = (y[x + 12] & 255) | ((y[x + 13] & 255) << 8)),
          (W += ((ct >>> 11) | (et << 5)) & 8191),
          (ie = (y[x + 14] & 255) | ((y[x + 15] & 255) << 8)),
          (X += ((et >>> 8) | (ie << 8)) & 8191),
          (Ct += (ie >>> 5) | h),
          (nt = 0),
          (bt = nt),
          (bt += ft * ae),
          (bt += ht * (5 * ye)),
          (bt += it * (5 * ve)),
          (bt += O * (5 * le)),
          (bt += U * (5 * Ee)),
          (nt = bt >>> 13),
          (bt &= 8191),
          (bt += Q * (5 * Ae)),
          (bt += j * (5 * he)),
          (bt += W * (5 * k)),
          (bt += X * (5 * ue)),
          (bt += Ct * (5 * fe)),
          (nt += bt >>> 13),
          (bt &= 8191),
          (At = nt),
          (At += ft * fe),
          (At += ht * ae),
          (At += it * (5 * ye)),
          (At += O * (5 * ve)),
          (At += U * (5 * le)),
          (nt = At >>> 13),
          (At &= 8191),
          (At += Q * (5 * Ee)),
          (At += j * (5 * Ae)),
          (At += W * (5 * he)),
          (At += X * (5 * k)),
          (At += Ct * (5 * ue)),
          (nt += At >>> 13),
          (At &= 8191),
          (kt = nt),
          (kt += ft * ue),
          (kt += ht * fe),
          (kt += it * ae),
          (kt += O * (5 * ye)),
          (kt += U * (5 * ve)),
          (nt = kt >>> 13),
          (kt &= 8191),
          (kt += Q * (5 * le)),
          (kt += j * (5 * Ee)),
          (kt += W * (5 * Ae)),
          (kt += X * (5 * he)),
          (kt += Ct * (5 * k)),
          (nt += kt >>> 13),
          (kt &= 8191),
          (Pt = nt),
          (Pt += ft * k),
          (Pt += ht * ue),
          (Pt += it * fe),
          (Pt += O * ae),
          (Pt += U * (5 * ye)),
          (nt = Pt >>> 13),
          (Pt &= 8191),
          (Pt += Q * (5 * ve)),
          (Pt += j * (5 * le)),
          (Pt += W * (5 * Ee)),
          (Pt += X * (5 * Ae)),
          (Pt += Ct * (5 * he)),
          (nt += Pt >>> 13),
          (Pt &= 8191),
          (Et = nt),
          (Et += ft * he),
          (Et += ht * k),
          (Et += it * ue),
          (Et += O * fe),
          (Et += U * ae),
          (nt = Et >>> 13),
          (Et &= 8191),
          (Et += Q * (5 * ye)),
          (Et += j * (5 * ve)),
          (Et += W * (5 * le)),
          (Et += X * (5 * Ee)),
          (Et += Ct * (5 * Ae)),
          (nt += Et >>> 13),
          (Et &= 8191),
          (_t = nt),
          (_t += ft * Ae),
          (_t += ht * he),
          (_t += it * k),
          (_t += O * ue),
          (_t += U * fe),
          (nt = _t >>> 13),
          (_t &= 8191),
          (_t += Q * ae),
          (_t += j * (5 * ye)),
          (_t += W * (5 * ve)),
          (_t += X * (5 * le)),
          (_t += Ct * (5 * Ee)),
          (nt += _t >>> 13),
          (_t &= 8191),
          (xt = nt),
          (xt += ft * Ee),
          (xt += ht * Ae),
          (xt += it * he),
          (xt += O * k),
          (xt += U * ue),
          (nt = xt >>> 13),
          (xt &= 8191),
          (xt += Q * fe),
          (xt += j * ae),
          (xt += W * (5 * ye)),
          (xt += X * (5 * ve)),
          (xt += Ct * (5 * le)),
          (nt += xt >>> 13),
          (xt &= 8191),
          (at = nt),
          (at += ft * le),
          (at += ht * Ee),
          (at += it * Ae),
          (at += O * he),
          (at += U * k),
          (nt = at >>> 13),
          (at &= 8191),
          (at += Q * ue),
          (at += j * fe),
          (at += W * ae),
          (at += X * (5 * ye)),
          (at += Ct * (5 * ve)),
          (nt += at >>> 13),
          (at &= 8191),
          (dt = nt),
          (dt += ft * ve),
          (dt += ht * le),
          (dt += it * Ee),
          (dt += O * Ae),
          (dt += U * he),
          (nt = dt >>> 13),
          (dt &= 8191),
          (dt += Q * k),
          (dt += j * ue),
          (dt += W * fe),
          (dt += X * ae),
          (dt += Ct * (5 * ye)),
          (nt += dt >>> 13),
          (dt &= 8191),
          (rt = nt),
          (rt += ft * ye),
          (rt += ht * ve),
          (rt += it * le),
          (rt += O * Ee),
          (rt += U * Ae),
          (nt = rt >>> 13),
          (rt &= 8191),
          (rt += Q * he),
          (rt += j * k),
          (rt += W * ue),
          (rt += X * fe),
          (rt += Ct * ae),
          (nt += rt >>> 13),
          (rt &= 8191),
          (nt = ((nt << 2) + nt) | 0),
          (nt = (nt + bt) | 0),
          (bt = nt & 8191),
          (nt = nt >>> 13),
          (At += nt),
          (ft = bt),
          (ht = At),
          (it = kt),
          (O = Pt),
          (U = Et),
          (Q = _t),
          (j = xt),
          (W = at),
          (X = dt),
          (Ct = rt),
          (x += 16),
          (A -= 16);
      (this.h[0] = ft),
        (this.h[1] = ht),
        (this.h[2] = it),
        (this.h[3] = O),
        (this.h[4] = U),
        (this.h[5] = Q),
        (this.h[6] = j),
        (this.h[7] = W),
        (this.h[8] = X),
        (this.h[9] = Ct);
    }),
      (w.prototype.finish = function (y, x) {
        var A = new Uint16Array(10),
          h,
          M,
          T,
          I;
        if (this.leftover) {
          for (I = this.leftover, this.buffer[I++] = 1; I < 16; I++) this.buffer[I] = 0;
          (this.fin = 1), this.blocks(this.buffer, 0, 16);
        }
        for (h = this.h[1] >>> 13, this.h[1] &= 8191, I = 2; I < 10; I++)
          (this.h[I] += h), (h = this.h[I] >>> 13), (this.h[I] &= 8191);
        for (
          this.h[0] += h * 5,
            h = this.h[0] >>> 13,
            this.h[0] &= 8191,
            this.h[1] += h,
            h = this.h[1] >>> 13,
            this.h[1] &= 8191,
            this.h[2] += h,
            A[0] = this.h[0] + 5,
            h = A[0] >>> 13,
            A[0] &= 8191,
            I = 1;
          I < 10;
          I++
        )
          (A[I] = this.h[I] + h), (h = A[I] >>> 13), (A[I] &= 8191);
        for (A[9] -= 8192, M = (h ^ 1) - 1, I = 0; I < 10; I++) A[I] &= M;
        for (M = ~M, I = 0; I < 10; I++) this.h[I] = (this.h[I] & M) | A[I];
        for (
          this.h[0] = (this.h[0] | (this.h[1] << 13)) & 65535,
            this.h[1] = ((this.h[1] >>> 3) | (this.h[2] << 10)) & 65535,
            this.h[2] = ((this.h[2] >>> 6) | (this.h[3] << 7)) & 65535,
            this.h[3] = ((this.h[3] >>> 9) | (this.h[4] << 4)) & 65535,
            this.h[4] = ((this.h[4] >>> 12) | (this.h[5] << 1) | (this.h[6] << 14)) & 65535,
            this.h[5] = ((this.h[6] >>> 2) | (this.h[7] << 11)) & 65535,
            this.h[6] = ((this.h[7] >>> 5) | (this.h[8] << 8)) & 65535,
            this.h[7] = ((this.h[8] >>> 8) | (this.h[9] << 5)) & 65535,
            T = this.h[0] + this.pad[0],
            this.h[0] = T & 65535,
            I = 1;
          I < 8;
          I++
        )
          (T = (((this.h[I] + this.pad[I]) | 0) + (T >>> 16)) | 0), (this.h[I] = T & 65535);
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
      (w.prototype.update = function (y, x, A) {
        var h, M;
        if (this.leftover) {
          for (M = 16 - this.leftover, M > A && (M = A), h = 0; h < M; h++)
            this.buffer[this.leftover + h] = y[x + h];
          if (((A -= M), (x += M), (this.leftover += M), this.leftover < 16)) return;
          this.blocks(this.buffer, 0, 16), (this.leftover = 0);
        }
        if ((A >= 16 && ((M = A - (A % 16)), this.blocks(y, x, M), (x += M), (A -= M)), A)) {
          for (h = 0; h < A; h++) this.buffer[this.leftover + h] = y[x + h];
          this.leftover += A;
        }
      });
    function o(y, x, A, h, M, T) {
      var I = new w(T);
      return I.update(A, h, M), I.finish(y, x), 0;
    }
    function u(y, x, A, h, M, T) {
      var I = new Uint8Array(16);
      return o(I, 0, A, h, M, T), lt(y, x, I, 0);
    }
    function l(y, x, A, h, M) {
      var T;
      if (A < 32) return -1;
      for (be(y, 0, x, 0, A, h, M), o(y, 16, y, 32, A - 32, y), T = 0; T < 16; T++) y[T] = 0;
      return 0;
    }
    function d(y, x, A, h, M) {
      var T,
        I = new Uint8Array(32);
      if (A < 32 || (ut(I, 0, 32, h, M), u(x, 16, x, 32, A - 32, I) !== 0)) return -1;
      for (be(y, 0, x, 0, A, h, M), T = 0; T < 32; T++) y[T] = 0;
      return 0;
    }
    function p(y, x) {
      var A;
      for (A = 0; A < 16; A++) y[A] = x[A] | 0;
    }
    function E(y) {
      var x,
        A,
        h = 1;
      for (x = 0; x < 16; x++)
        (A = y[x] + h + 65535), (h = Math.floor(A / 65536)), (y[x] = A - h * 65536);
      y[0] += h - 1 + 37 * (h - 1);
    }
    function _(y, x, A) {
      for (var h, M = ~(A - 1), T = 0; T < 16; T++)
        (h = M & (y[T] ^ x[T])), (y[T] ^= h), (x[T] ^= h);
    }
    function g(y, x) {
      var A,
        h,
        M,
        T = e(),
        I = e();
      for (A = 0; A < 16; A++) I[A] = x[A];
      for (E(I), E(I), E(I), h = 0; h < 2; h++) {
        for (T[0] = I[0] - 65517, A = 1; A < 15; A++)
          (T[A] = I[A] - 65535 - ((T[A - 1] >> 16) & 1)), (T[A - 1] &= 65535);
        (T[15] = I[15] - 32767 - ((T[14] >> 16) & 1)),
          (M = (T[15] >> 16) & 1),
          (T[14] &= 65535),
          _(I, T, 1 - M);
      }
      for (A = 0; A < 16; A++) (y[2 * A] = I[A] & 255), (y[2 * A + 1] = I[A] >> 8);
    }
    function a(y, x) {
      var A = new Uint8Array(32),
        h = new Uint8Array(32);
      return g(A, y), g(h, x), $(A, 0, h, 0);
    }
    function m(y) {
      var x = new Uint8Array(32);
      return g(x, y), x[0] & 1;
    }
    function z(y, x) {
      var A;
      for (A = 0; A < 16; A++) y[A] = x[2 * A] + (x[2 * A + 1] << 8);
      y[15] &= 32767;
    }
    function K(y, x, A) {
      for (var h = 0; h < 16; h++) y[h] = x[h] + A[h];
    }
    function q(y, x, A) {
      for (var h = 0; h < 16; h++) y[h] = x[h] - A[h];
    }
    function G(y, x, A) {
      var h,
        M,
        T = 0,
        I = 0,
        L = 0,
        F = 0,
        ct = 0,
        et = 0,
        ie = 0,
        nt = 0,
        bt = 0,
        At = 0,
        kt = 0,
        Pt = 0,
        Et = 0,
        _t = 0,
        xt = 0,
        at = 0,
        dt = 0,
        rt = 0,
        ft = 0,
        ht = 0,
        it = 0,
        O = 0,
        U = 0,
        Q = 0,
        j = 0,
        W = 0,
        X = 0,
        Ct = 0,
        ae = 0,
        fe = 0,
        ue = 0,
        k = A[0],
        he = A[1],
        Ae = A[2],
        Ee = A[3],
        le = A[4],
        ve = A[5],
        ye = A[6],
        Oe = A[7],
        Se = A[8],
        Ie = A[9],
        Re = A[10],
        Le = A[11],
        Ge = A[12],
        tr = A[13],
        er = A[14],
        rr = A[15];
      (h = x[0]),
        (T += h * k),
        (I += h * he),
        (L += h * Ae),
        (F += h * Ee),
        (ct += h * le),
        (et += h * ve),
        (ie += h * ye),
        (nt += h * Oe),
        (bt += h * Se),
        (At += h * Ie),
        (kt += h * Re),
        (Pt += h * Le),
        (Et += h * Ge),
        (_t += h * tr),
        (xt += h * er),
        (at += h * rr),
        (h = x[1]),
        (I += h * k),
        (L += h * he),
        (F += h * Ae),
        (ct += h * Ee),
        (et += h * le),
        (ie += h * ve),
        (nt += h * ye),
        (bt += h * Oe),
        (At += h * Se),
        (kt += h * Ie),
        (Pt += h * Re),
        (Et += h * Le),
        (_t += h * Ge),
        (xt += h * tr),
        (at += h * er),
        (dt += h * rr),
        (h = x[2]),
        (L += h * k),
        (F += h * he),
        (ct += h * Ae),
        (et += h * Ee),
        (ie += h * le),
        (nt += h * ve),
        (bt += h * ye),
        (At += h * Oe),
        (kt += h * Se),
        (Pt += h * Ie),
        (Et += h * Re),
        (_t += h * Le),
        (xt += h * Ge),
        (at += h * tr),
        (dt += h * er),
        (rt += h * rr),
        (h = x[3]),
        (F += h * k),
        (ct += h * he),
        (et += h * Ae),
        (ie += h * Ee),
        (nt += h * le),
        (bt += h * ve),
        (At += h * ye),
        (kt += h * Oe),
        (Pt += h * Se),
        (Et += h * Ie),
        (_t += h * Re),
        (xt += h * Le),
        (at += h * Ge),
        (dt += h * tr),
        (rt += h * er),
        (ft += h * rr),
        (h = x[4]),
        (ct += h * k),
        (et += h * he),
        (ie += h * Ae),
        (nt += h * Ee),
        (bt += h * le),
        (At += h * ve),
        (kt += h * ye),
        (Pt += h * Oe),
        (Et += h * Se),
        (_t += h * Ie),
        (xt += h * Re),
        (at += h * Le),
        (dt += h * Ge),
        (rt += h * tr),
        (ft += h * er),
        (ht += h * rr),
        (h = x[5]),
        (et += h * k),
        (ie += h * he),
        (nt += h * Ae),
        (bt += h * Ee),
        (At += h * le),
        (kt += h * ve),
        (Pt += h * ye),
        (Et += h * Oe),
        (_t += h * Se),
        (xt += h * Ie),
        (at += h * Re),
        (dt += h * Le),
        (rt += h * Ge),
        (ft += h * tr),
        (ht += h * er),
        (it += h * rr),
        (h = x[6]),
        (ie += h * k),
        (nt += h * he),
        (bt += h * Ae),
        (At += h * Ee),
        (kt += h * le),
        (Pt += h * ve),
        (Et += h * ye),
        (_t += h * Oe),
        (xt += h * Se),
        (at += h * Ie),
        (dt += h * Re),
        (rt += h * Le),
        (ft += h * Ge),
        (ht += h * tr),
        (it += h * er),
        (O += h * rr),
        (h = x[7]),
        (nt += h * k),
        (bt += h * he),
        (At += h * Ae),
        (kt += h * Ee),
        (Pt += h * le),
        (Et += h * ve),
        (_t += h * ye),
        (xt += h * Oe),
        (at += h * Se),
        (dt += h * Ie),
        (rt += h * Re),
        (ft += h * Le),
        (ht += h * Ge),
        (it += h * tr),
        (O += h * er),
        (U += h * rr),
        (h = x[8]),
        (bt += h * k),
        (At += h * he),
        (kt += h * Ae),
        (Pt += h * Ee),
        (Et += h * le),
        (_t += h * ve),
        (xt += h * ye),
        (at += h * Oe),
        (dt += h * Se),
        (rt += h * Ie),
        (ft += h * Re),
        (ht += h * Le),
        (it += h * Ge),
        (O += h * tr),
        (U += h * er),
        (Q += h * rr),
        (h = x[9]),
        (At += h * k),
        (kt += h * he),
        (Pt += h * Ae),
        (Et += h * Ee),
        (_t += h * le),
        (xt += h * ve),
        (at += h * ye),
        (dt += h * Oe),
        (rt += h * Se),
        (ft += h * Ie),
        (ht += h * Re),
        (it += h * Le),
        (O += h * Ge),
        (U += h * tr),
        (Q += h * er),
        (j += h * rr),
        (h = x[10]),
        (kt += h * k),
        (Pt += h * he),
        (Et += h * Ae),
        (_t += h * Ee),
        (xt += h * le),
        (at += h * ve),
        (dt += h * ye),
        (rt += h * Oe),
        (ft += h * Se),
        (ht += h * Ie),
        (it += h * Re),
        (O += h * Le),
        (U += h * Ge),
        (Q += h * tr),
        (j += h * er),
        (W += h * rr),
        (h = x[11]),
        (Pt += h * k),
        (Et += h * he),
        (_t += h * Ae),
        (xt += h * Ee),
        (at += h * le),
        (dt += h * ve),
        (rt += h * ye),
        (ft += h * Oe),
        (ht += h * Se),
        (it += h * Ie),
        (O += h * Re),
        (U += h * Le),
        (Q += h * Ge),
        (j += h * tr),
        (W += h * er),
        (X += h * rr),
        (h = x[12]),
        (Et += h * k),
        (_t += h * he),
        (xt += h * Ae),
        (at += h * Ee),
        (dt += h * le),
        (rt += h * ve),
        (ft += h * ye),
        (ht += h * Oe),
        (it += h * Se),
        (O += h * Ie),
        (U += h * Re),
        (Q += h * Le),
        (j += h * Ge),
        (W += h * tr),
        (X += h * er),
        (Ct += h * rr),
        (h = x[13]),
        (_t += h * k),
        (xt += h * he),
        (at += h * Ae),
        (dt += h * Ee),
        (rt += h * le),
        (ft += h * ve),
        (ht += h * ye),
        (it += h * Oe),
        (O += h * Se),
        (U += h * Ie),
        (Q += h * Re),
        (j += h * Le),
        (W += h * Ge),
        (X += h * tr),
        (Ct += h * er),
        (ae += h * rr),
        (h = x[14]),
        (xt += h * k),
        (at += h * he),
        (dt += h * Ae),
        (rt += h * Ee),
        (ft += h * le),
        (ht += h * ve),
        (it += h * ye),
        (O += h * Oe),
        (U += h * Se),
        (Q += h * Ie),
        (j += h * Re),
        (W += h * Le),
        (X += h * Ge),
        (Ct += h * tr),
        (ae += h * er),
        (fe += h * rr),
        (h = x[15]),
        (at += h * k),
        (dt += h * he),
        (rt += h * Ae),
        (ft += h * Ee),
        (ht += h * le),
        (it += h * ve),
        (O += h * ye),
        (U += h * Oe),
        (Q += h * Se),
        (j += h * Ie),
        (W += h * Re),
        (X += h * Le),
        (Ct += h * Ge),
        (ae += h * tr),
        (fe += h * er),
        (ue += h * rr),
        (T += 38 * dt),
        (I += 38 * rt),
        (L += 38 * ft),
        (F += 38 * ht),
        (ct += 38 * it),
        (et += 38 * O),
        (ie += 38 * U),
        (nt += 38 * Q),
        (bt += 38 * j),
        (At += 38 * W),
        (kt += 38 * X),
        (Pt += 38 * Ct),
        (Et += 38 * ae),
        (_t += 38 * fe),
        (xt += 38 * ue),
        (M = 1),
        (h = T + M + 65535),
        (M = Math.floor(h / 65536)),
        (T = h - M * 65536),
        (h = I + M + 65535),
        (M = Math.floor(h / 65536)),
        (I = h - M * 65536),
        (h = L + M + 65535),
        (M = Math.floor(h / 65536)),
        (L = h - M * 65536),
        (h = F + M + 65535),
        (M = Math.floor(h / 65536)),
        (F = h - M * 65536),
        (h = ct + M + 65535),
        (M = Math.floor(h / 65536)),
        (ct = h - M * 65536),
        (h = et + M + 65535),
        (M = Math.floor(h / 65536)),
        (et = h - M * 65536),
        (h = ie + M + 65535),
        (M = Math.floor(h / 65536)),
        (ie = h - M * 65536),
        (h = nt + M + 65535),
        (M = Math.floor(h / 65536)),
        (nt = h - M * 65536),
        (h = bt + M + 65535),
        (M = Math.floor(h / 65536)),
        (bt = h - M * 65536),
        (h = At + M + 65535),
        (M = Math.floor(h / 65536)),
        (At = h - M * 65536),
        (h = kt + M + 65535),
        (M = Math.floor(h / 65536)),
        (kt = h - M * 65536),
        (h = Pt + M + 65535),
        (M = Math.floor(h / 65536)),
        (Pt = h - M * 65536),
        (h = Et + M + 65535),
        (M = Math.floor(h / 65536)),
        (Et = h - M * 65536),
        (h = _t + M + 65535),
        (M = Math.floor(h / 65536)),
        (_t = h - M * 65536),
        (h = xt + M + 65535),
        (M = Math.floor(h / 65536)),
        (xt = h - M * 65536),
        (h = at + M + 65535),
        (M = Math.floor(h / 65536)),
        (at = h - M * 65536),
        (T += M - 1 + 37 * (M - 1)),
        (M = 1),
        (h = T + M + 65535),
        (M = Math.floor(h / 65536)),
        (T = h - M * 65536),
        (h = I + M + 65535),
        (M = Math.floor(h / 65536)),
        (I = h - M * 65536),
        (h = L + M + 65535),
        (M = Math.floor(h / 65536)),
        (L = h - M * 65536),
        (h = F + M + 65535),
        (M = Math.floor(h / 65536)),
        (F = h - M * 65536),
        (h = ct + M + 65535),
        (M = Math.floor(h / 65536)),
        (ct = h - M * 65536),
        (h = et + M + 65535),
        (M = Math.floor(h / 65536)),
        (et = h - M * 65536),
        (h = ie + M + 65535),
        (M = Math.floor(h / 65536)),
        (ie = h - M * 65536),
        (h = nt + M + 65535),
        (M = Math.floor(h / 65536)),
        (nt = h - M * 65536),
        (h = bt + M + 65535),
        (M = Math.floor(h / 65536)),
        (bt = h - M * 65536),
        (h = At + M + 65535),
        (M = Math.floor(h / 65536)),
        (At = h - M * 65536),
        (h = kt + M + 65535),
        (M = Math.floor(h / 65536)),
        (kt = h - M * 65536),
        (h = Pt + M + 65535),
        (M = Math.floor(h / 65536)),
        (Pt = h - M * 65536),
        (h = Et + M + 65535),
        (M = Math.floor(h / 65536)),
        (Et = h - M * 65536),
        (h = _t + M + 65535),
        (M = Math.floor(h / 65536)),
        (_t = h - M * 65536),
        (h = xt + M + 65535),
        (M = Math.floor(h / 65536)),
        (xt = h - M * 65536),
        (h = at + M + 65535),
        (M = Math.floor(h / 65536)),
        (at = h - M * 65536),
        (T += M - 1 + 37 * (M - 1)),
        (y[0] = T),
        (y[1] = I),
        (y[2] = L),
        (y[3] = F),
        (y[4] = ct),
        (y[5] = et),
        (y[6] = ie),
        (y[7] = nt),
        (y[8] = bt),
        (y[9] = At),
        (y[10] = kt),
        (y[11] = Pt),
        (y[12] = Et),
        (y[13] = _t),
        (y[14] = xt),
        (y[15] = at);
    }
    function ot(y, x) {
      G(y, x, x);
    }
    function yt(y, x) {
      var A = e(),
        h;
      for (h = 0; h < 16; h++) A[h] = x[h];
      for (h = 253; h >= 0; h--) ot(A, A), h !== 2 && h !== 4 && G(A, A, x);
      for (h = 0; h < 16; h++) y[h] = A[h];
    }
    function ke(y, x) {
      var A = e(),
        h;
      for (h = 0; h < 16; h++) A[h] = x[h];
      for (h = 250; h >= 0; h--) ot(A, A), h !== 1 && G(A, A, x);
      for (h = 0; h < 16; h++) y[h] = A[h];
    }
    function pt(y, x, A) {
      var h = new Uint8Array(32),
        M = new Float64Array(80),
        T,
        I,
        L = e(),
        F = e(),
        ct = e(),
        et = e(),
        ie = e(),
        nt = e();
      for (I = 0; I < 31; I++) h[I] = x[I];
      for (h[31] = (x[31] & 127) | 64, h[0] &= 248, z(M, A), I = 0; I < 16; I++)
        (F[I] = M[I]), (et[I] = L[I] = ct[I] = 0);
      for (L[0] = et[0] = 1, I = 254; I >= 0; --I)
        (T = (h[I >>> 3] >>> (I & 7)) & 1),
          _(L, F, T),
          _(ct, et, T),
          K(ie, L, ct),
          q(L, L, ct),
          K(ct, F, et),
          q(F, F, et),
          ot(et, ie),
          ot(nt, L),
          G(L, ct, L),
          G(ct, F, ie),
          K(ie, L, ct),
          q(L, L, ct),
          ot(F, L),
          q(ct, et, nt),
          G(L, ct, v),
          K(L, L, et),
          G(ct, ct, L),
          G(L, et, nt),
          G(et, F, M),
          ot(F, ie),
          _(L, F, T),
          _(ct, et, T);
      for (I = 0; I < 16; I++)
        (M[I + 16] = L[I]), (M[I + 32] = ct[I]), (M[I + 48] = F[I]), (M[I + 64] = et[I]);
      var bt = M.subarray(32),
        At = M.subarray(16);
      return yt(bt, bt), G(At, At, bt), g(y, At), 0;
    }
    function St(y, x) {
      return pt(y, x, s);
    }
    function Nr(y, x) {
      return i(x, 32), St(y, x);
    }
    function Dt(y, x, A) {
      var h = new Uint8Array(32);
      return pt(h, A, x), tt(y, n, h, Mt);
    }
    var Yt = l,
      Kr = d;
    function ee(y, x, A, h, M, T) {
      var I = new Uint8Array(32);
      return Dt(I, M, T), Yt(y, x, A, h, I);
    }
    function re(y, x, A, h, M, T) {
      var I = new Uint8Array(32);
      return Dt(I, M, T), Kr(y, x, A, h, I);
    }
    var Cr = [
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
    function Zt(y, x, A, h) {
      for (
        var M = new Int32Array(16),
          T = new Int32Array(16),
          I,
          L,
          F,
          ct,
          et,
          ie,
          nt,
          bt,
          At,
          kt,
          Pt,
          Et,
          _t,
          xt,
          at,
          dt,
          rt,
          ft,
          ht,
          it,
          O,
          U,
          Q,
          j,
          W,
          X,
          Ct = y[0],
          ae = y[1],
          fe = y[2],
          ue = y[3],
          k = y[4],
          he = y[5],
          Ae = y[6],
          Ee = y[7],
          le = x[0],
          ve = x[1],
          ye = x[2],
          Oe = x[3],
          Se = x[4],
          Ie = x[5],
          Re = x[6],
          Le = x[7],
          Ge = 0;
        h >= 128;

      ) {
        for (ht = 0; ht < 16; ht++)
          (it = 8 * ht + Ge),
            (M[ht] = (A[it + 0] << 24) | (A[it + 1] << 16) | (A[it + 2] << 8) | A[it + 3]),
            (T[ht] = (A[it + 4] << 24) | (A[it + 5] << 16) | (A[it + 6] << 8) | A[it + 7]);
        for (ht = 0; ht < 80; ht++)
          if (
            ((I = Ct),
            (L = ae),
            (F = fe),
            (ct = ue),
            (et = k),
            (ie = he),
            (nt = Ae),
            (bt = Ee),
            (At = le),
            (kt = ve),
            (Pt = ye),
            (Et = Oe),
            (_t = Se),
            (xt = Ie),
            (at = Re),
            (dt = Le),
            (O = Ee),
            (U = Le),
            (Q = U & 65535),
            (j = U >>> 16),
            (W = O & 65535),
            (X = O >>> 16),
            (O = ((k >>> 14) | (Se << 18)) ^ ((k >>> 18) | (Se << 14)) ^ ((Se >>> 9) | (k << 23))),
            (U = ((Se >>> 14) | (k << 18)) ^ ((Se >>> 18) | (k << 14)) ^ ((k >>> 9) | (Se << 23))),
            (Q += U & 65535),
            (j += U >>> 16),
            (W += O & 65535),
            (X += O >>> 16),
            (O = (k & he) ^ (~k & Ae)),
            (U = (Se & Ie) ^ (~Se & Re)),
            (Q += U & 65535),
            (j += U >>> 16),
            (W += O & 65535),
            (X += O >>> 16),
            (O = Cr[ht * 2]),
            (U = Cr[ht * 2 + 1]),
            (Q += U & 65535),
            (j += U >>> 16),
            (W += O & 65535),
            (X += O >>> 16),
            (O = M[ht % 16]),
            (U = T[ht % 16]),
            (Q += U & 65535),
            (j += U >>> 16),
            (W += O & 65535),
            (X += O >>> 16),
            (j += Q >>> 16),
            (W += j >>> 16),
            (X += W >>> 16),
            (rt = (W & 65535) | (X << 16)),
            (ft = (Q & 65535) | (j << 16)),
            (O = rt),
            (U = ft),
            (Q = U & 65535),
            (j = U >>> 16),
            (W = O & 65535),
            (X = O >>> 16),
            (O = ((Ct >>> 28) | (le << 4)) ^ ((le >>> 2) | (Ct << 30)) ^ ((le >>> 7) | (Ct << 25))),
            (U = ((le >>> 28) | (Ct << 4)) ^ ((Ct >>> 2) | (le << 30)) ^ ((Ct >>> 7) | (le << 25))),
            (Q += U & 65535),
            (j += U >>> 16),
            (W += O & 65535),
            (X += O >>> 16),
            (O = (Ct & ae) ^ (Ct & fe) ^ (ae & fe)),
            (U = (le & ve) ^ (le & ye) ^ (ve & ye)),
            (Q += U & 65535),
            (j += U >>> 16),
            (W += O & 65535),
            (X += O >>> 16),
            (j += Q >>> 16),
            (W += j >>> 16),
            (X += W >>> 16),
            (bt = (W & 65535) | (X << 16)),
            (dt = (Q & 65535) | (j << 16)),
            (O = ct),
            (U = Et),
            (Q = U & 65535),
            (j = U >>> 16),
            (W = O & 65535),
            (X = O >>> 16),
            (O = rt),
            (U = ft),
            (Q += U & 65535),
            (j += U >>> 16),
            (W += O & 65535),
            (X += O >>> 16),
            (j += Q >>> 16),
            (W += j >>> 16),
            (X += W >>> 16),
            (ct = (W & 65535) | (X << 16)),
            (Et = (Q & 65535) | (j << 16)),
            (ae = I),
            (fe = L),
            (ue = F),
            (k = ct),
            (he = et),
            (Ae = ie),
            (Ee = nt),
            (Ct = bt),
            (ve = At),
            (ye = kt),
            (Oe = Pt),
            (Se = Et),
            (Ie = _t),
            (Re = xt),
            (Le = at),
            (le = dt),
            ht % 16 === 15)
          )
            for (it = 0; it < 16; it++)
              (O = M[it]),
                (U = T[it]),
                (Q = U & 65535),
                (j = U >>> 16),
                (W = O & 65535),
                (X = O >>> 16),
                (O = M[(it + 9) % 16]),
                (U = T[(it + 9) % 16]),
                (Q += U & 65535),
                (j += U >>> 16),
                (W += O & 65535),
                (X += O >>> 16),
                (rt = M[(it + 1) % 16]),
                (ft = T[(it + 1) % 16]),
                (O = ((rt >>> 1) | (ft << 31)) ^ ((rt >>> 8) | (ft << 24)) ^ (rt >>> 7)),
                (U =
                  ((ft >>> 1) | (rt << 31)) ^
                  ((ft >>> 8) | (rt << 24)) ^
                  ((ft >>> 7) | (rt << 25))),
                (Q += U & 65535),
                (j += U >>> 16),
                (W += O & 65535),
                (X += O >>> 16),
                (rt = M[(it + 14) % 16]),
                (ft = T[(it + 14) % 16]),
                (O = ((rt >>> 19) | (ft << 13)) ^ ((ft >>> 29) | (rt << 3)) ^ (rt >>> 6)),
                (U =
                  ((ft >>> 19) | (rt << 13)) ^
                  ((rt >>> 29) | (ft << 3)) ^
                  ((ft >>> 6) | (rt << 26))),
                (Q += U & 65535),
                (j += U >>> 16),
                (W += O & 65535),
                (X += O >>> 16),
                (j += Q >>> 16),
                (W += j >>> 16),
                (X += W >>> 16),
                (M[it] = (W & 65535) | (X << 16)),
                (T[it] = (Q & 65535) | (j << 16));
        (O = Ct),
          (U = le),
          (Q = U & 65535),
          (j = U >>> 16),
          (W = O & 65535),
          (X = O >>> 16),
          (O = y[0]),
          (U = x[0]),
          (Q += U & 65535),
          (j += U >>> 16),
          (W += O & 65535),
          (X += O >>> 16),
          (j += Q >>> 16),
          (W += j >>> 16),
          (X += W >>> 16),
          (y[0] = Ct = (W & 65535) | (X << 16)),
          (x[0] = le = (Q & 65535) | (j << 16)),
          (O = ae),
          (U = ve),
          (Q = U & 65535),
          (j = U >>> 16),
          (W = O & 65535),
          (X = O >>> 16),
          (O = y[1]),
          (U = x[1]),
          (Q += U & 65535),
          (j += U >>> 16),
          (W += O & 65535),
          (X += O >>> 16),
          (j += Q >>> 16),
          (W += j >>> 16),
          (X += W >>> 16),
          (y[1] = ae = (W & 65535) | (X << 16)),
          (x[1] = ve = (Q & 65535) | (j << 16)),
          (O = fe),
          (U = ye),
          (Q = U & 65535),
          (j = U >>> 16),
          (W = O & 65535),
          (X = O >>> 16),
          (O = y[2]),
          (U = x[2]),
          (Q += U & 65535),
          (j += U >>> 16),
          (W += O & 65535),
          (X += O >>> 16),
          (j += Q >>> 16),
          (W += j >>> 16),
          (X += W >>> 16),
          (y[2] = fe = (W & 65535) | (X << 16)),
          (x[2] = ye = (Q & 65535) | (j << 16)),
          (O = ue),
          (U = Oe),
          (Q = U & 65535),
          (j = U >>> 16),
          (W = O & 65535),
          (X = O >>> 16),
          (O = y[3]),
          (U = x[3]),
          (Q += U & 65535),
          (j += U >>> 16),
          (W += O & 65535),
          (X += O >>> 16),
          (j += Q >>> 16),
          (W += j >>> 16),
          (X += W >>> 16),
          (y[3] = ue = (W & 65535) | (X << 16)),
          (x[3] = Oe = (Q & 65535) | (j << 16)),
          (O = k),
          (U = Se),
          (Q = U & 65535),
          (j = U >>> 16),
          (W = O & 65535),
          (X = O >>> 16),
          (O = y[4]),
          (U = x[4]),
          (Q += U & 65535),
          (j += U >>> 16),
          (W += O & 65535),
          (X += O >>> 16),
          (j += Q >>> 16),
          (W += j >>> 16),
          (X += W >>> 16),
          (y[4] = k = (W & 65535) | (X << 16)),
          (x[4] = Se = (Q & 65535) | (j << 16)),
          (O = he),
          (U = Ie),
          (Q = U & 65535),
          (j = U >>> 16),
          (W = O & 65535),
          (X = O >>> 16),
          (O = y[5]),
          (U = x[5]),
          (Q += U & 65535),
          (j += U >>> 16),
          (W += O & 65535),
          (X += O >>> 16),
          (j += Q >>> 16),
          (W += j >>> 16),
          (X += W >>> 16),
          (y[5] = he = (W & 65535) | (X << 16)),
          (x[5] = Ie = (Q & 65535) | (j << 16)),
          (O = Ae),
          (U = Re),
          (Q = U & 65535),
          (j = U >>> 16),
          (W = O & 65535),
          (X = O >>> 16),
          (O = y[6]),
          (U = x[6]),
          (Q += U & 65535),
          (j += U >>> 16),
          (W += O & 65535),
          (X += O >>> 16),
          (j += Q >>> 16),
          (W += j >>> 16),
          (X += W >>> 16),
          (y[6] = Ae = (W & 65535) | (X << 16)),
          (x[6] = Re = (Q & 65535) | (j << 16)),
          (O = Ee),
          (U = Le),
          (Q = U & 65535),
          (j = U >>> 16),
          (W = O & 65535),
          (X = O >>> 16),
          (O = y[7]),
          (U = x[7]),
          (Q += U & 65535),
          (j += U >>> 16),
          (W += O & 65535),
          (X += O >>> 16),
          (j += Q >>> 16),
          (W += j >>> 16),
          (X += W >>> 16),
          (y[7] = Ee = (W & 65535) | (X << 16)),
          (x[7] = Le = (Q & 65535) | (j << 16)),
          (Ge += 128),
          (h -= 128);
      }
      return h;
    }
    function Bt(y, x, A) {
      var h = new Int32Array(8),
        M = new Int32Array(8),
        T = new Uint8Array(256),
        I,
        L = A;
      for (
        h[0] = 1779033703,
          h[1] = 3144134277,
          h[2] = 1013904242,
          h[3] = 2773480762,
          h[4] = 1359893119,
          h[5] = 2600822924,
          h[6] = 528734635,
          h[7] = 1541459225,
          M[0] = 4089235720,
          M[1] = 2227873595,
          M[2] = 4271175723,
          M[3] = 1595750129,
          M[4] = 2917565137,
          M[5] = 725511199,
          M[6] = 4215389547,
          M[7] = 327033209,
          Zt(h, M, x, A),
          A %= 128,
          I = 0;
        I < A;
        I++
      )
        T[I] = x[L - A + I];
      for (
        T[A] = 128,
          A = 256 - 128 * (A < 112 ? 1 : 0),
          T[A - 9] = 0,
          R(T, A - 8, (L / 536870912) | 0, L << 3),
          Zt(h, M, T, A),
          I = 0;
        I < 8;
        I++
      )
        R(y, 8 * I, h[I], M[I]);
      return 0;
    }
    function cr(y, x) {
      var A = e(),
        h = e(),
        M = e(),
        T = e(),
        I = e(),
        L = e(),
        F = e(),
        ct = e(),
        et = e();
      q(A, y[1], y[0]),
        q(et, x[1], x[0]),
        G(A, A, et),
        K(h, y[0], y[1]),
        K(et, x[0], x[1]),
        G(h, h, et),
        G(M, y[3], x[3]),
        G(M, M, S),
        G(T, y[2], x[2]),
        K(T, T, T),
        q(I, h, A),
        q(L, T, M),
        K(F, T, M),
        K(ct, h, A),
        G(y[0], I, L),
        G(y[1], ct, F),
        G(y[2], F, L),
        G(y[3], I, ct);
    }
    function Qt(y, x, A) {
      var h;
      for (h = 0; h < 4; h++) _(y[h], x[h], A);
    }
    function Gt(y, x) {
      var A = e(),
        h = e(),
        M = e();
      yt(M, x[2]), G(A, x[0], M), G(h, x[1], M), g(y, h), (y[31] ^= m(A) << 7);
    }
    function br(y, x, A) {
      var h, M;
      for (p(y[0], f), p(y[1], c), p(y[2], c), p(y[3], f), M = 255; M >= 0; --M)
        (h = (A[(M / 8) | 0] >> (M & 7)) & 1), Qt(y, x, h), cr(x, y), cr(y, y), Qt(y, x, h);
    }
    function Ft(y, x) {
      var A = [e(), e(), e(), e()];
      p(A[0], P), p(A[1], B), p(A[2], c), G(A[3], P, B), br(y, A, x);
    }
    function Vt(y, x, A) {
      var h = new Uint8Array(64),
        M = [e(), e(), e(), e()],
        T;
      for (
        A || i(x, 32),
          Bt(h, x, 32),
          h[0] &= 248,
          h[31] &= 127,
          h[31] |= 64,
          Ft(M, h),
          Gt(y, M),
          T = 0;
        T < 32;
        T++
      )
        x[T + 32] = y[T];
      return 0;
    }
    var dr = new Float64Array([
      237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 16,
    ]);
    function jt(y, x) {
      var A, h, M, T;
      for (h = 63; h >= 32; --h) {
        for (A = 0, M = h - 32, T = h - 12; M < T; ++M)
          (x[M] += A - 16 * x[h] * dr[M - (h - 32)]),
            (A = Math.floor((x[M] + 128) / 256)),
            (x[M] -= A * 256);
        (x[M] += A), (x[h] = 0);
      }
      for (A = 0, M = 0; M < 32; M++)
        (x[M] += A - (x[31] >> 4) * dr[M]), (A = x[M] >> 8), (x[M] &= 255);
      for (M = 0; M < 32; M++) x[M] -= A * dr[M];
      for (h = 0; h < 32; h++) (x[h + 1] += x[h] >> 8), (y[h] = x[h] & 255);
    }
    function Kt(y) {
      var x = new Float64Array(64),
        A;
      for (A = 0; A < 64; A++) x[A] = y[A];
      for (A = 0; A < 64; A++) y[A] = 0;
      jt(y, x);
    }
    function Ar(y, x, A, h) {
      var M = new Uint8Array(64),
        T = new Uint8Array(64),
        I = new Uint8Array(64),
        L,
        F,
        ct = new Float64Array(64),
        et = [e(), e(), e(), e()];
      Bt(M, h, 32), (M[0] &= 248), (M[31] &= 127), (M[31] |= 64);
      var ie = A + 64;
      for (L = 0; L < A; L++) y[64 + L] = x[L];
      for (L = 0; L < 32; L++) y[32 + L] = M[32 + L];
      for (Bt(I, y.subarray(32), A + 32), Kt(I), Ft(et, I), Gt(y, et), L = 32; L < 64; L++)
        y[L] = h[L];
      for (Bt(T, y, A + 64), Kt(T), L = 0; L < 64; L++) ct[L] = 0;
      for (L = 0; L < 32; L++) ct[L] = I[L];
      for (L = 0; L < 32; L++) for (F = 0; F < 32; F++) ct[L + F] += T[L] * M[F];
      return jt(y.subarray(32), ct), ie;
    }
    function $t(y, x) {
      var A = e(),
        h = e(),
        M = e(),
        T = e(),
        I = e(),
        L = e(),
        F = e();
      return (
        p(y[2], c),
        z(y[1], x),
        ot(M, y[1]),
        G(T, M, b),
        q(M, M, y[2]),
        K(T, y[2], T),
        ot(I, T),
        ot(L, I),
        G(F, L, I),
        G(A, F, M),
        G(A, A, T),
        ke(A, A),
        G(A, A, M),
        G(A, A, T),
        G(A, A, T),
        G(y[0], A, T),
        ot(h, y[0]),
        G(h, h, T),
        a(h, M) && G(y[0], y[0], N),
        ot(h, y[0]),
        G(h, h, T),
        a(h, M) ? -1 : (m(y[0]) === x[31] >> 7 && q(y[0], f, y[0]), G(y[3], y[0], y[1]), 0)
      );
    }
    function zt(y, x, A, h) {
      var M,
        T = new Uint8Array(32),
        I = new Uint8Array(64),
        L = [e(), e(), e(), e()],
        F = [e(), e(), e(), e()];
      if (A < 64 || $t(F, h)) return -1;
      for (M = 0; M < A; M++) y[M] = x[M];
      for (M = 0; M < 32; M++) y[M + 32] = h[M];
      if (
        (Bt(I, y, A),
        Kt(I),
        br(L, F, I),
        Ft(F, x.subarray(32)),
        cr(L, F),
        Gt(T, L),
        (A -= 64),
        $(x, 0, T, 0))
      ) {
        for (M = 0; M < A; M++) y[M] = 0;
        return -1;
      }
      for (M = 0; M < A; M++) y[M] = x[M + 64];
      return A;
    }
    var gr = 32,
      Ot = 24,
      It = 32,
      Xe = 16,
      Rt = 32,
      Ut = 32,
      ar = 32,
      Lt = 32,
      Ht = 32,
      Er = Ot,
      Xt = It,
      te = Xe,
      qe = 64,
      Tt = 32,
      Nt = 64,
      pr = 32,
      qt = 64;
    t.lowlevel = {
      crypto_core_hsalsa20: tt,
      crypto_stream_xor: be,
      crypto_stream: ut,
      crypto_stream_salsa20_xor: se,
      crypto_stream_salsa20: de,
      crypto_onetimeauth: o,
      crypto_onetimeauth_verify: u,
      crypto_verify_16: lt,
      crypto_verify_32: $,
      crypto_secretbox: l,
      crypto_secretbox_open: d,
      crypto_scalarmult: pt,
      crypto_scalarmult_base: St,
      crypto_box_beforenm: Dt,
      crypto_box_afternm: Yt,
      crypto_box: ee,
      crypto_box_open: re,
      crypto_box_keypair: Nr,
      crypto_hash: Bt,
      crypto_sign: Ar,
      crypto_sign_keypair: Vt,
      crypto_sign_open: zt,
      crypto_secretbox_KEYBYTES: gr,
      crypto_secretbox_NONCEBYTES: Ot,
      crypto_secretbox_ZEROBYTES: It,
      crypto_secretbox_BOXZEROBYTES: Xe,
      crypto_scalarmult_BYTES: Rt,
      crypto_scalarmult_SCALARBYTES: Ut,
      crypto_box_PUBLICKEYBYTES: ar,
      crypto_box_SECRETKEYBYTES: Lt,
      crypto_box_BEFORENMBYTES: Ht,
      crypto_box_NONCEBYTES: Er,
      crypto_box_ZEROBYTES: Xt,
      crypto_box_BOXZEROBYTES: te,
      crypto_sign_BYTES: qe,
      crypto_sign_PUBLICKEYBYTES: Tt,
      crypto_sign_SECRETKEYBYTES: Nt,
      crypto_sign_SEEDBYTES: pr,
      crypto_hash_BYTES: qt,
      gf: e,
      D: b,
      L: dr,
      pack25519: g,
      unpack25519: z,
      M: G,
      A: K,
      S: ot,
      Z: q,
      pow2523: ke,
      add: cr,
      set25519: p,
      modL: jt,
      scalarmult: br,
      scalarbase: Ft,
    };
    function Wt(y, x) {
      if (y.length !== gr) throw new Error('bad key size');
      if (x.length !== Ot) throw new Error('bad nonce size');
    }
    function Ir(y, x) {
      if (y.length !== ar) throw new Error('bad public key size');
      if (x.length !== Lt) throw new Error('bad secret key size');
    }
    function wt() {
      for (var y = 0; y < arguments.length; y++)
        if (!(arguments[y] instanceof Uint8Array))
          throw new TypeError('unexpected type, use Uint8Array');
    }
    function Jt(y) {
      for (var x = 0; x < y.length; x++) y[x] = 0;
    }
    (t.randomBytes = function (y) {
      var x = new Uint8Array(y);
      return i(x, y), x;
    }),
      (t.secretbox = function (y, x, A) {
        wt(y, x, A), Wt(A, x);
        for (
          var h = new Uint8Array(It + y.length), M = new Uint8Array(h.length), T = 0;
          T < y.length;
          T++
        )
          h[T + It] = y[T];
        return l(M, h, h.length, x, A), M.subarray(Xe);
      }),
      (t.secretbox.open = function (y, x, A) {
        wt(y, x, A), Wt(A, x);
        for (
          var h = new Uint8Array(Xe + y.length), M = new Uint8Array(h.length), T = 0;
          T < y.length;
          T++
        )
          h[T + Xe] = y[T];
        return h.length < 32 || d(M, h, h.length, x, A) !== 0 ? null : M.subarray(It);
      }),
      (t.secretbox.keyLength = gr),
      (t.secretbox.nonceLength = Ot),
      (t.secretbox.overheadLength = Xe),
      (t.scalarMult = function (y, x) {
        if ((wt(y, x), y.length !== Ut)) throw new Error('bad n size');
        if (x.length !== Rt) throw new Error('bad p size');
        var A = new Uint8Array(Rt);
        return pt(A, y, x), A;
      }),
      (t.scalarMult.base = function (y) {
        if ((wt(y), y.length !== Ut)) throw new Error('bad n size');
        var x = new Uint8Array(Rt);
        return St(x, y), x;
      }),
      (t.scalarMult.scalarLength = Ut),
      (t.scalarMult.groupElementLength = Rt),
      (t.box = function (y, x, A, h) {
        var M = t.box.before(A, h);
        return t.secretbox(y, x, M);
      }),
      (t.box.before = function (y, x) {
        wt(y, x), Ir(y, x);
        var A = new Uint8Array(Ht);
        return Dt(A, y, x), A;
      }),
      (t.box.after = t.secretbox),
      (t.box.open = function (y, x, A, h) {
        var M = t.box.before(A, h);
        return t.secretbox.open(y, x, M);
      }),
      (t.box.open.after = t.secretbox.open),
      (t.box.keyPair = function () {
        var y = new Uint8Array(ar),
          x = new Uint8Array(Lt);
        return Nr(y, x), { publicKey: y, secretKey: x };
      }),
      (t.box.keyPair.fromSecretKey = function (y) {
        if ((wt(y), y.length !== Lt)) throw new Error('bad secret key size');
        var x = new Uint8Array(ar);
        return St(x, y), { publicKey: x, secretKey: new Uint8Array(y) };
      }),
      (t.box.publicKeyLength = ar),
      (t.box.secretKeyLength = Lt),
      (t.box.sharedKeyLength = Ht),
      (t.box.nonceLength = Er),
      (t.box.overheadLength = t.secretbox.overheadLength),
      (t.sign = function (y, x) {
        if ((wt(y, x), x.length !== Nt)) throw new Error('bad secret key size');
        var A = new Uint8Array(qe + y.length);
        return Ar(A, y, y.length, x), A;
      }),
      (t.sign.open = function (y, x) {
        if ((wt(y, x), x.length !== Tt)) throw new Error('bad public key size');
        var A = new Uint8Array(y.length),
          h = zt(A, y, y.length, x);
        if (h < 0) return null;
        for (var M = new Uint8Array(h), T = 0; T < M.length; T++) M[T] = A[T];
        return M;
      }),
      (t.sign.detached = function (y, x) {
        for (var A = t.sign(y, x), h = new Uint8Array(qe), M = 0; M < h.length; M++) h[M] = A[M];
        return h;
      }),
      (t.sign.detached.verify = function (y, x, A) {
        if ((wt(y, x, A), x.length !== qe)) throw new Error('bad signature size');
        if (A.length !== Tt) throw new Error('bad public key size');
        var h = new Uint8Array(qe + y.length),
          M = new Uint8Array(qe + y.length),
          T;
        for (T = 0; T < qe; T++) h[T] = x[T];
        for (T = 0; T < y.length; T++) h[T + qe] = y[T];
        return zt(M, h, h.length, A) >= 0;
      }),
      (t.sign.keyPair = function () {
        var y = new Uint8Array(Tt),
          x = new Uint8Array(Nt);
        return Vt(y, x), { publicKey: y, secretKey: x };
      }),
      (t.sign.keyPair.fromSecretKey = function (y) {
        if ((wt(y), y.length !== Nt)) throw new Error('bad secret key size');
        for (var x = new Uint8Array(Tt), A = 0; A < x.length; A++) x[A] = y[32 + A];
        return { publicKey: x, secretKey: new Uint8Array(y) };
      }),
      (t.sign.keyPair.fromSeed = function (y) {
        if ((wt(y), y.length !== pr)) throw new Error('bad seed size');
        for (var x = new Uint8Array(Tt), A = new Uint8Array(Nt), h = 0; h < 32; h++) A[h] = y[h];
        return Vt(x, A, !0), { publicKey: x, secretKey: A };
      }),
      (t.sign.publicKeyLength = Tt),
      (t.sign.secretKeyLength = Nt),
      (t.sign.seedLength = pr),
      (t.sign.signatureLength = qe),
      (t.hash = function (y) {
        wt(y);
        var x = new Uint8Array(qt);
        return Bt(x, y, y.length), x;
      }),
      (t.hash.hashLength = qt),
      (t.verify = function (y, x) {
        return (
          wt(y, x),
          y.length === 0 || x.length === 0 || y.length !== x.length
            ? !1
            : V(y, 0, x, 0, y.length) === 0
        );
      }),
      (t.setPRNG = function (y) {
        i = y;
      }),
      (function () {
        var y = typeof globalThis < 'u' ? globalThis.crypto || globalThis.msCrypto : null;
        if (y && y.getRandomValues) {
          var x = 65536;
          t.setPRNG(function (A, h) {
            var M,
              T = new Uint8Array(h);
            for (M = 0; M < h; M += x) y.getRandomValues(T.subarray(M, M + Math.min(h - M, x)));
            for (M = 0; M < h; M++) A[M] = T[M];
            Jt(T);
          });
        } else
          typeof Eu < 'u' &&
            ((y = Su()),
            y &&
              y.randomBytes &&
              t.setPRNG(function (A, h) {
                var M,
                  T = y.randomBytes(h);
                for (M = 0; M < h; M++) A[M] = T[M];
                Jt(T);
              }));
      })();
  })(r.exports ? r.exports : (globalThis.nacl = globalThis.nacl || {}));
})(La);
var Oa = La.exports;
const r0 = Qo(Oa),
  i0 = xu(_u);
var yl = {},
  ci = {},
  pn = {},
  Qn = {},
  Ua = {};
const xe = {
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
function Sr(r, t) {
  if (!r) throw new Error(t);
}
function we(r, t, e) {
  if ((Sr(t instanceof Uint8Array, `Expected ${r} to be an Uint8Array`), e !== void 0))
    if (Array.isArray(e)) {
      const i = e.join(', '),
        n = `Expected ${r} to be an Uint8Array with length [${i}]`;
      Sr(e.includes(t.length), n);
    } else {
      const i = `Expected ${r} to be an Uint8Array with length ${e}`;
      Sr(t.length === e, i);
    }
}
function mi(r) {
  Sr(Ni(r) === 'Boolean', 'Expected compressed to be a Boolean');
}
function Lr(r = (e) => new Uint8Array(e), t) {
  return typeof r == 'function' && (r = r(t)), we('output', r, t), r;
}
function Ni(r) {
  return Object.prototype.toString.call(r).slice(8, -1);
}
var wl = (r) => ({
  contextRandomize(t) {
    switch (
      (Sr(t === null || t instanceof Uint8Array, 'Expected seed to be an Uint8Array or null'),
      t !== null && we('seed', t, 32),
      r.contextRandomize(t))
    ) {
      case 1:
        throw new Error(xe.CONTEXT_RANDOMIZE_UNKNOW);
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
        throw new Error(xe.IMPOSSIBLE_CASE);
    }
  },
  privateKeyTweakAdd(t, e) {
    switch ((we('private key', t, 32), we('tweak', e, 32), r.privateKeyTweakAdd(t, e))) {
      case 0:
        return t;
      case 1:
        throw new Error(xe.TWEAK_ADD);
    }
  },
  privateKeyTweakMul(t, e) {
    switch ((we('private key', t, 32), we('tweak', e, 32), r.privateKeyTweakMul(t, e))) {
      case 0:
        return t;
      case 1:
        throw new Error(xe.TWEAK_MUL);
    }
  },
  publicKeyVerify(t) {
    return we('public key', t, [33, 65]), r.publicKeyVerify(t) === 0;
  },
  publicKeyCreate(t, e = !0, i) {
    switch ((we('private key', t, 32), mi(e), (i = Lr(i, e ? 33 : 65)), r.publicKeyCreate(i, t))) {
      case 0:
        return i;
      case 1:
        throw new Error(xe.SECKEY_INVALID);
      case 2:
        throw new Error(xe.PUBKEY_SERIALIZE);
    }
  },
  publicKeyConvert(t, e = !0, i) {
    switch (
      (we('public key', t, [33, 65]), mi(e), (i = Lr(i, e ? 33 : 65)), r.publicKeyConvert(i, t))
    ) {
      case 0:
        return i;
      case 1:
        throw new Error(xe.PUBKEY_PARSE);
      case 2:
        throw new Error(xe.PUBKEY_SERIALIZE);
    }
  },
  publicKeyNegate(t, e = !0, i) {
    switch (
      (we('public key', t, [33, 65]), mi(e), (i = Lr(i, e ? 33 : 65)), r.publicKeyNegate(i, t))
    ) {
      case 0:
        return i;
      case 1:
        throw new Error(xe.PUBKEY_PARSE);
      case 2:
        throw new Error(xe.IMPOSSIBLE_CASE);
      case 3:
        throw new Error(xe.PUBKEY_SERIALIZE);
    }
  },
  publicKeyCombine(t, e = !0, i) {
    Sr(Array.isArray(t), 'Expected public keys to be an Array'),
      Sr(t.length > 0, 'Expected public keys array will have more than zero items');
    for (const n of t) we('public key', n, [33, 65]);
    switch ((mi(e), (i = Lr(i, e ? 33 : 65)), r.publicKeyCombine(i, t))) {
      case 0:
        return i;
      case 1:
        throw new Error(xe.PUBKEY_PARSE);
      case 2:
        throw new Error(xe.PUBKEY_COMBINE);
      case 3:
        throw new Error(xe.PUBKEY_SERIALIZE);
    }
  },
  publicKeyTweakAdd(t, e, i = !0, n) {
    switch (
      (we('public key', t, [33, 65]),
      we('tweak', e, 32),
      mi(i),
      (n = Lr(n, i ? 33 : 65)),
      r.publicKeyTweakAdd(n, t, e))
    ) {
      case 0:
        return n;
      case 1:
        throw new Error(xe.PUBKEY_PARSE);
      case 2:
        throw new Error(xe.TWEAK_ADD);
    }
  },
  publicKeyTweakMul(t, e, i = !0, n) {
    switch (
      (we('public key', t, [33, 65]),
      we('tweak', e, 32),
      mi(i),
      (n = Lr(n, i ? 33 : 65)),
      r.publicKeyTweakMul(n, t, e))
    ) {
      case 0:
        return n;
      case 1:
        throw new Error(xe.PUBKEY_PARSE);
      case 2:
        throw new Error(xe.TWEAK_MUL);
    }
  },
  signatureNormalize(t) {
    switch ((we('signature', t, 64), r.signatureNormalize(t))) {
      case 0:
        return t;
      case 1:
        throw new Error(xe.SIG_PARSE);
    }
  },
  signatureExport(t, e) {
    we('signature', t, 64), (e = Lr(e, 72));
    const i = { output: e, outputlen: 72 };
    switch (r.signatureExport(i, t)) {
      case 0:
        return e.slice(0, i.outputlen);
      case 1:
        throw new Error(xe.SIG_PARSE);
      case 2:
        throw new Error(xe.IMPOSSIBLE_CASE);
    }
  },
  signatureImport(t, e) {
    switch ((we('signature', t), (e = Lr(e, 64)), r.signatureImport(e, t))) {
      case 0:
        return e;
      case 1:
        throw new Error(xe.SIG_PARSE);
      case 2:
        throw new Error(xe.IMPOSSIBLE_CASE);
    }
  },
  ecdsaSign(t, e, i = {}, n) {
    we('message', t, 32),
      we('private key', e, 32),
      Sr(Ni(i) === 'Object', 'Expected options to be an Object'),
      i.data !== void 0 && we('options.data', i.data),
      i.noncefn !== void 0 &&
        Sr(Ni(i.noncefn) === 'Function', 'Expected options.noncefn to be a Function'),
      (n = Lr(n, 64));
    const s = { signature: n, recid: null };
    switch (r.ecdsaSign(s, t, e, i.data, i.noncefn)) {
      case 0:
        return s;
      case 1:
        throw new Error(xe.SIGN);
      case 2:
        throw new Error(xe.IMPOSSIBLE_CASE);
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
        throw new Error(xe.SIG_PARSE);
      case 2:
        throw new Error(xe.PUBKEY_PARSE);
    }
  },
  ecdsaRecover(t, e, i, n = !0, s) {
    switch (
      (we('signature', t, 64),
      Sr(
        Ni(e) === 'Number' && e >= 0 && e <= 3,
        'Expected recovery id to be a Number within interval [0, 3]'
      ),
      we('message', i, 32),
      mi(n),
      (s = Lr(s, n ? 33 : 65)),
      r.ecdsaRecover(s, t, e, i))
    ) {
      case 0:
        return s;
      case 1:
        throw new Error(xe.SIG_PARSE);
      case 2:
        throw new Error(xe.RECOVER);
      case 3:
        throw new Error(xe.IMPOSSIBLE_CASE);
    }
  },
  ecdh(t, e, i = {}, n) {
    switch (
      (we('public key', t, [33, 65]),
      we('private key', e, 32),
      Sr(Ni(i) === 'Object', 'Expected options to be an Object'),
      i.data !== void 0 && we('options.data', i.data),
      i.hashfn !== void 0
        ? (Sr(Ni(i.hashfn) === 'Function', 'Expected options.hashfn to be a Function'),
          i.xbuf !== void 0 && we('options.xbuf', i.xbuf, 32),
          i.ybuf !== void 0 && we('options.ybuf', i.ybuf, 32),
          we('output', n))
        : (n = Lr(n, 32)),
      r.ecdh(n, t, e, i.data, i.hashfn, i.xbuf, i.ybuf))
    ) {
      case 0:
        return n;
      case 1:
        throw new Error(xe.PUBKEY_PARSE);
      case 2:
        throw new Error(xe.ECDH);
    }
  },
});
const bl = $o().ec,
  qr = new bl('secp256k1'),
  pe = qr.curve,
  _e = pe.n.constructor;
function Al(r, t) {
  let e = new _e(t);
  if (e.cmp(pe.p) >= 0) return null;
  e = e.toRed(pe.red);
  let i = e.redSqr().redIMul(e).redIAdd(pe.b).redSqrt();
  return (r === 3) !== i.isOdd() && (i = i.redNeg()), qr.keyPair({ pub: { x: e, y: i } });
}
function El(r, t, e) {
  let i = new _e(t),
    n = new _e(e);
  if (
    i.cmp(pe.p) >= 0 ||
    n.cmp(pe.p) >= 0 ||
    ((i = i.toRed(pe.red)), (n = n.toRed(pe.red)), (r === 6 || r === 7) && n.isOdd() !== (r === 7))
  )
    return null;
  const s = i.redSqr().redIMul(i);
  return n.redSqr().redISub(s.redIAdd(pe.b)).isZero() ? qr.keyPair({ pub: { x: i, y: n } }) : null;
}
function ui(r) {
  const t = r[0];
  switch (t) {
    case 2:
    case 3:
      return r.length !== 33 ? null : Al(t, r.subarray(1, 33));
    case 4:
    case 6:
    case 7:
      return r.length !== 65 ? null : El(t, r.subarray(1, 33), r.subarray(33, 65));
    default:
      return null;
  }
}
function vi(r, t) {
  const e = t.encode(null, r.length === 33);
  for (let i = 0; i < r.length; ++i) r[i] = e[i];
}
var xl = {
    contextRandomize() {
      return 0;
    },
    privateKeyVerify(r) {
      const t = new _e(r);
      return t.cmp(pe.n) < 0 && !t.isZero() ? 0 : 1;
    },
    privateKeyNegate(r) {
      const t = new _e(r),
        e = pe.n.sub(t).umod(pe.n).toArrayLike(Uint8Array, 'be', 32);
      return r.set(e), 0;
    },
    privateKeyTweakAdd(r, t) {
      const e = new _e(t);
      if (e.cmp(pe.n) >= 0 || (e.iadd(new _e(r)), e.cmp(pe.n) >= 0 && e.isub(pe.n), e.isZero()))
        return 1;
      const i = e.toArrayLike(Uint8Array, 'be', 32);
      return r.set(i), 0;
    },
    privateKeyTweakMul(r, t) {
      let e = new _e(t);
      if (e.cmp(pe.n) >= 0 || e.isZero()) return 1;
      e.imul(new _e(r)), e.cmp(pe.n) >= 0 && (e = e.umod(pe.n));
      const i = e.toArrayLike(Uint8Array, 'be', 32);
      return r.set(i), 0;
    },
    publicKeyVerify(r) {
      return ui(r) === null ? 1 : 0;
    },
    publicKeyCreate(r, t) {
      const e = new _e(t);
      if (e.cmp(pe.n) >= 0 || e.isZero()) return 1;
      const i = qr.keyFromPrivate(t).getPublic();
      return vi(r, i), 0;
    },
    publicKeyConvert(r, t) {
      const e = ui(t);
      if (e === null) return 1;
      const i = e.getPublic();
      return vi(r, i), 0;
    },
    publicKeyNegate(r, t) {
      const e = ui(t);
      if (e === null) return 1;
      const i = e.getPublic();
      return (i.y = i.y.redNeg()), vi(r, i), 0;
    },
    publicKeyCombine(r, t) {
      const e = new Array(t.length);
      for (let n = 0; n < t.length; ++n) if (((e[n] = ui(t[n])), e[n] === null)) return 1;
      let i = e[0].getPublic();
      for (let n = 1; n < e.length; ++n) i = i.add(e[n].pub);
      return i.isInfinity() ? 2 : (vi(r, i), 0);
    },
    publicKeyTweakAdd(r, t, e) {
      const i = ui(t);
      if (i === null) return 1;
      if (((e = new _e(e)), e.cmp(pe.n) >= 0)) return 2;
      const n = i.getPublic().add(pe.g.mul(e));
      return n.isInfinity() ? 2 : (vi(r, n), 0);
    },
    publicKeyTweakMul(r, t, e) {
      const i = ui(t);
      if (i === null) return 1;
      if (((e = new _e(e)), e.cmp(pe.n) >= 0 || e.isZero())) return 2;
      const n = i.getPublic().mul(e);
      return vi(r, n), 0;
    },
    signatureNormalize(r) {
      const t = new _e(r.subarray(0, 32)),
        e = new _e(r.subarray(32, 64));
      return t.cmp(pe.n) >= 0 || e.cmp(pe.n) >= 0
        ? 1
        : (e.cmp(qr.nh) === 1 && r.set(pe.n.sub(e).toArrayLike(Uint8Array, 'be', 32), 32), 0);
    },
    signatureExport(r, t) {
      const e = t.subarray(0, 32),
        i = t.subarray(32, 64);
      if (new _e(e).cmp(pe.n) >= 0 || new _e(i).cmp(pe.n) >= 0) return 1;
      const { output: n } = r;
      let s = n.subarray(4, 37);
      (s[0] = 0), s.set(e, 1);
      let f = 33,
        c = 0;
      for (; f > 1 && s[c] === 0 && !(s[c + 1] & 128); --f, ++c);
      if (((s = s.subarray(c)), s[0] & 128 || (f > 1 && s[0] === 0 && !(s[1] & 128)))) return 1;
      let v = n.subarray(39, 72);
      (v[0] = 0), v.set(i, 1);
      let b = 33,
        S = 0;
      for (; b > 1 && v[S] === 0 && !(v[S + 1] & 128); --b, ++S);
      return (
        (v = v.subarray(S)),
        v[0] & 128 || (b > 1 && v[0] === 0 && !(v[1] & 128))
          ? 1
          : ((r.outputlen = 6 + f + b),
            (n[0] = 48),
            (n[1] = r.outputlen - 2),
            (n[2] = 2),
            (n[3] = s.length),
            n.set(s, 4),
            (n[4 + f] = 2),
            (n[5 + f] = v.length),
            n.set(v, 6 + f),
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
      let f = new _e(n);
      f.cmp(pe.n) >= 0 && (f = new _e(0));
      let c = new _e(t.subarray(6 + e));
      return (
        c.cmp(pe.n) >= 0 && (c = new _e(0)),
        r.set(f.toArrayLike(Uint8Array, 'be', 32), 0),
        r.set(c.toArrayLike(Uint8Array, 'be', 32), 32),
        0
      );
    },
    ecdsaSign(r, t, e, i, n) {
      if (n) {
        const c = n;
        n = (v) => {
          const b = c(t, e, null, i, v);
          if (!(b instanceof Uint8Array && b.length === 32)) throw new Error('This is the way');
          return new _e(b);
        };
      }
      const s = new _e(e);
      if (s.cmp(pe.n) >= 0 || s.isZero()) return 1;
      let f;
      try {
        f = qr.sign(t, e, { canonical: !0, k: n, pers: i });
      } catch {
        return 1;
      }
      return (
        r.signature.set(f.r.toArrayLike(Uint8Array, 'be', 32), 0),
        r.signature.set(f.s.toArrayLike(Uint8Array, 'be', 32), 32),
        (r.recid = f.recoveryParam),
        0
      );
    },
    ecdsaVerify(r, t, e) {
      const i = { r: r.subarray(0, 32), s: r.subarray(32, 64) },
        n = new _e(i.r),
        s = new _e(i.s);
      if (n.cmp(pe.n) >= 0 || s.cmp(pe.n) >= 0) return 1;
      if (s.cmp(qr.nh) === 1 || n.isZero() || s.isZero()) return 3;
      const f = ui(e);
      if (f === null) return 2;
      const c = f.getPublic();
      return qr.verify(t, i, c) ? 0 : 3;
    },
    ecdsaRecover(r, t, e, i) {
      const n = { r: t.slice(0, 32), s: t.slice(32, 64) },
        s = new _e(n.r),
        f = new _e(n.s);
      if (s.cmp(pe.n) >= 0 || f.cmp(pe.n) >= 0) return 1;
      if (s.isZero() || f.isZero()) return 2;
      let c;
      try {
        c = qr.recoverPubKey(i, n, e);
      } catch {
        return 2;
      }
      return vi(r, c), 0;
    },
    ecdh(r, t, e, i, n, s, f) {
      const c = ui(t);
      if (c === null) return 1;
      const v = new _e(e);
      if (v.cmp(pe.n) >= 0 || v.isZero()) return 2;
      const b = c.getPublic().mul(v);
      if (n === void 0) {
        const S = b.encode(null, !0),
          P = qr.hash().update(S).digest();
        for (let B = 0; B < 32; ++B) r[B] = P[B];
      } else {
        s || (s = new Uint8Array(32));
        const S = b.getX().toArray('be', 32);
        for (let R = 0; R < 32; ++R) s[R] = S[R];
        f || (f = new Uint8Array(32));
        const P = b.getY().toArray('be', 32);
        for (let R = 0; R < 32; ++R) f[R] = P[R];
        const B = n(s, f, i);
        if (!(B instanceof Uint8Array && B.length === r.length)) return 2;
        r.set(B);
      }
      return 0;
    },
  },
  Eo = wl(xl),
  $n = {};
Object.defineProperty($n, '__esModule', { value: !0 });
var Da = Pu();
function Ml(r) {
  return new Promise(function (t, e) {
    Da(r, function (i, n) {
      if (i) {
        e(i);
        return;
      }
      t(n);
    });
  });
}
$n.getRandomBytes = Ml;
function Sl(r) {
  return Da(r);
}
$n.getRandomBytesSync = Sl;
(function (r) {
  var t =
      (Ce && Ce.__awaiter) ||
      function (b, S, P, B) {
        function N(R) {
          return R instanceof P
            ? R
            : new P(function (V) {
                V(R);
              });
        }
        return new (P || (P = Promise))(function (R, V) {
          function lt(Z) {
            try {
              C(B.next(Z));
            } catch (J) {
              V(J);
            }
          }
          function $(Z) {
            try {
              C(B.throw(Z));
            } catch (J) {
              V(J);
            }
          }
          function C(Z) {
            Z.done ? R(Z.value) : N(Z.value).then(lt, $);
          }
          C((B = B.apply(b, S || [])).next());
        });
      },
    e =
      (Ce && Ce.__generator) ||
      function (b, S) {
        var P = {
            label: 0,
            sent: function () {
              if (R[0] & 1) throw R[1];
              return R[1];
            },
            trys: [],
            ops: [],
          },
          B,
          N,
          R,
          V;
        return (
          (V = { next: lt(0), throw: lt(1), return: lt(2) }),
          typeof Symbol == 'function' &&
            (V[Symbol.iterator] = function () {
              return this;
            }),
          V
        );
        function lt(C) {
          return function (Z) {
            return $([C, Z]);
          };
        }
        function $(C) {
          if (B) throw new TypeError('Generator is already executing.');
          for (; P; )
            try {
              if (
                ((B = 1),
                N &&
                  (R =
                    C[0] & 2
                      ? N.return
                      : C[0]
                        ? N.throw || ((R = N.return) && R.call(N), 0)
                        : N.next) &&
                  !(R = R.call(N, C[1])).done)
              )
                return R;
              switch (((N = 0), R && (C = [C[0] & 2, R.value]), C[0])) {
                case 0:
                case 1:
                  R = C;
                  break;
                case 4:
                  return P.label++, { value: C[1], done: !1 };
                case 5:
                  P.label++, (N = C[1]), (C = [0]);
                  continue;
                case 7:
                  (C = P.ops.pop()), P.trys.pop();
                  continue;
                default:
                  if (
                    ((R = P.trys),
                    !(R = R.length > 0 && R[R.length - 1]) && (C[0] === 6 || C[0] === 2))
                  ) {
                    P = 0;
                    continue;
                  }
                  if (C[0] === 3 && (!R || (C[1] > R[0] && C[1] < R[3]))) {
                    P.label = C[1];
                    break;
                  }
                  if (C[0] === 6 && P.label < R[1]) {
                    (P.label = R[1]), (R = C);
                    break;
                  }
                  if (R && P.label < R[2]) {
                    (P.label = R[2]), P.ops.push(C);
                    break;
                  }
                  R[2] && P.ops.pop(), P.trys.pop();
                  continue;
              }
              C = S.call(b, P);
            } catch (Z) {
              (C = [6, Z]), (N = 0);
            } finally {
              B = R = 0;
            }
          if (C[0] & 5) throw C[1];
          return { value: C[0] ? C[1] : void 0, done: !0 };
        }
      };
  function i(b) {
    for (var S in b) r.hasOwnProperty(S) || (r[S] = b[S]);
  }
  Object.defineProperty(r, '__esModule', { value: !0 });
  var n = Eo,
    s = $n,
    f = 32;
  function c() {
    return t(this, void 0, void 0, function () {
      var b;
      return e(this, function (S) {
        switch (S.label) {
          case 0:
            return [4, s.getRandomBytes(f)];
          case 1:
            return (b = S.sent()), n.privateKeyVerify(b) ? [2, b] : [3, 0];
          case 2:
            return [2];
        }
      });
    });
  }
  r.createPrivateKey = c;
  function v() {
    for (;;) {
      var b = s.getRandomBytesSync(f);
      if (n.privateKeyVerify(b)) return b;
    }
  }
  (r.createPrivateKeySync = v), i(Eo);
})(Ua);
var zi = {},
  Gs = { exports: {} };
Gs.exports;
(function (r) {
  (function (t, e) {
    function i(w, o) {
      if (!w) throw new Error(o || 'Assertion failed');
    }
    function n(w, o) {
      w.super_ = o;
      var u = function () {};
      (u.prototype = o.prototype), (w.prototype = new u()), (w.prototype.constructor = w);
    }
    function s(w, o, u) {
      if (s.isBN(w)) return w;
      (this.negative = 0),
        (this.words = null),
        (this.length = 0),
        (this.red = null),
        w !== null &&
          ((o === 'le' || o === 'be') && ((u = o), (o = 10)),
          this._init(w || 0, o || 10, u || 'be'));
    }
    typeof t == 'object' ? (t.exports = s) : (e.BN = s), (s.BN = s), (s.wordSize = 26);
    var f;
    try {
      typeof window < 'u' && typeof window.Buffer < 'u' ? (f = window.Buffer) : (f = jn.Buffer);
    } catch {}
    (s.isBN = function (o) {
      return o instanceof s
        ? !0
        : o !== null &&
            typeof o == 'object' &&
            o.constructor.wordSize === s.wordSize &&
            Array.isArray(o.words);
    }),
      (s.max = function (o, u) {
        return o.cmp(u) > 0 ? o : u;
      }),
      (s.min = function (o, u) {
        return o.cmp(u) < 0 ? o : u;
      }),
      (s.prototype._init = function (o, u, l) {
        if (typeof o == 'number') return this._initNumber(o, u, l);
        if (typeof o == 'object') return this._initArray(o, u, l);
        u === 'hex' && (u = 16),
          i(u === (u | 0) && u >= 2 && u <= 36),
          (o = o.toString().replace(/\s+/g, ''));
        var d = 0;
        o[0] === '-' && (d++, (this.negative = 1)),
          d < o.length &&
            (u === 16
              ? this._parseHex(o, d, l)
              : (this._parseBase(o, u, d), l === 'le' && this._initArray(this.toArray(), u, l)));
      }),
      (s.prototype._initNumber = function (o, u, l) {
        o < 0 && ((this.negative = 1), (o = -o)),
          o < 67108864
            ? ((this.words = [o & 67108863]), (this.length = 1))
            : o < 4503599627370496
              ? ((this.words = [o & 67108863, (o / 67108864) & 67108863]), (this.length = 2))
              : (i(o < 9007199254740992),
                (this.words = [o & 67108863, (o / 67108864) & 67108863, 1]),
                (this.length = 3)),
          l === 'le' && this._initArray(this.toArray(), u, l);
      }),
      (s.prototype._initArray = function (o, u, l) {
        if ((i(typeof o.length == 'number'), o.length <= 0))
          return (this.words = [0]), (this.length = 1), this;
        (this.length = Math.ceil(o.length / 3)), (this.words = new Array(this.length));
        for (var d = 0; d < this.length; d++) this.words[d] = 0;
        var p,
          E,
          _ = 0;
        if (l === 'be')
          for (d = o.length - 1, p = 0; d >= 0; d -= 3)
            (E = o[d] | (o[d - 1] << 8) | (o[d - 2] << 16)),
              (this.words[p] |= (E << _) & 67108863),
              (this.words[p + 1] = (E >>> (26 - _)) & 67108863),
              (_ += 24),
              _ >= 26 && ((_ -= 26), p++);
        else if (l === 'le')
          for (d = 0, p = 0; d < o.length; d += 3)
            (E = o[d] | (o[d + 1] << 8) | (o[d + 2] << 16)),
              (this.words[p] |= (E << _) & 67108863),
              (this.words[p + 1] = (E >>> (26 - _)) & 67108863),
              (_ += 24),
              _ >= 26 && ((_ -= 26), p++);
        return this.strip();
      });
    function c(w, o) {
      var u = w.charCodeAt(o);
      return u >= 65 && u <= 70 ? u - 55 : u >= 97 && u <= 102 ? u - 87 : (u - 48) & 15;
    }
    function v(w, o, u) {
      var l = c(w, u);
      return u - 1 >= o && (l |= c(w, u - 1) << 4), l;
    }
    s.prototype._parseHex = function (o, u, l) {
      (this.length = Math.ceil((o.length - u) / 6)), (this.words = new Array(this.length));
      for (var d = 0; d < this.length; d++) this.words[d] = 0;
      var p = 0,
        E = 0,
        _;
      if (l === 'be')
        for (d = o.length - 1; d >= u; d -= 2)
          (_ = v(o, u, d) << p),
            (this.words[E] |= _ & 67108863),
            p >= 18 ? ((p -= 18), (E += 1), (this.words[E] |= _ >>> 26)) : (p += 8);
      else {
        var g = o.length - u;
        for (d = g % 2 === 0 ? u + 1 : u; d < o.length; d += 2)
          (_ = v(o, u, d) << p),
            (this.words[E] |= _ & 67108863),
            p >= 18 ? ((p -= 18), (E += 1), (this.words[E] |= _ >>> 26)) : (p += 8);
      }
      this.strip();
    };
    function b(w, o, u, l) {
      for (var d = 0, p = Math.min(w.length, u), E = o; E < p; E++) {
        var _ = w.charCodeAt(E) - 48;
        (d *= l), _ >= 49 ? (d += _ - 49 + 10) : _ >= 17 ? (d += _ - 17 + 10) : (d += _);
      }
      return d;
    }
    (s.prototype._parseBase = function (o, u, l) {
      (this.words = [0]), (this.length = 1);
      for (var d = 0, p = 1; p <= 67108863; p *= u) d++;
      d--, (p = (p / u) | 0);
      for (var E = o.length - l, _ = E % d, g = Math.min(E, E - _) + l, a = 0, m = l; m < g; m += d)
        (a = b(o, m, m + d, u)),
          this.imuln(p),
          this.words[0] + a < 67108864 ? (this.words[0] += a) : this._iaddn(a);
      if (_ !== 0) {
        var z = 1;
        for (a = b(o, m, o.length, u), m = 0; m < _; m++) z *= u;
        this.imuln(z), this.words[0] + a < 67108864 ? (this.words[0] += a) : this._iaddn(a);
      }
      this.strip();
    }),
      (s.prototype.copy = function (o) {
        o.words = new Array(this.length);
        for (var u = 0; u < this.length; u++) o.words[u] = this.words[u];
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
      B = [
        0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7,
        19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881,
        64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149,
        243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176,
      ];
    (s.prototype.toString = function (o, u) {
      (o = o || 10), (u = u | 0 || 1);
      var l;
      if (o === 16 || o === 'hex') {
        l = '';
        for (var d = 0, p = 0, E = 0; E < this.length; E++) {
          var _ = this.words[E],
            g = (((_ << d) | p) & 16777215).toString(16);
          (p = (_ >>> (24 - d)) & 16777215),
            p !== 0 || E !== this.length - 1 ? (l = S[6 - g.length] + g + l) : (l = g + l),
            (d += 2),
            d >= 26 && ((d -= 26), E--);
        }
        for (p !== 0 && (l = p.toString(16) + l); l.length % u !== 0; ) l = '0' + l;
        return this.negative !== 0 && (l = '-' + l), l;
      }
      if (o === (o | 0) && o >= 2 && o <= 36) {
        var a = P[o],
          m = B[o];
        l = '';
        var z = this.clone();
        for (z.negative = 0; !z.isZero(); ) {
          var K = z.modn(m).toString(o);
          (z = z.idivn(m)), z.isZero() ? (l = K + l) : (l = S[a - K.length] + K + l);
        }
        for (this.isZero() && (l = '0' + l); l.length % u !== 0; ) l = '0' + l;
        return this.negative !== 0 && (l = '-' + l), l;
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
      (s.prototype.toBuffer = function (o, u) {
        return i(typeof f < 'u'), this.toArrayLike(f, o, u);
      }),
      (s.prototype.toArray = function (o, u) {
        return this.toArrayLike(Array, o, u);
      }),
      (s.prototype.toArrayLike = function (o, u, l) {
        var d = this.byteLength(),
          p = l || Math.max(1, d);
        i(d <= p, 'byte array longer than desired length'),
          i(p > 0, 'Requested array length <= 0'),
          this.strip();
        var E = u === 'le',
          _ = new o(p),
          g,
          a,
          m = this.clone();
        if (E) {
          for (a = 0; !m.isZero(); a++) (g = m.andln(255)), m.iushrn(8), (_[a] = g);
          for (; a < p; a++) _[a] = 0;
        } else {
          for (a = 0; a < p - d; a++) _[a] = 0;
          for (a = 0; !m.isZero(); a++) (g = m.andln(255)), m.iushrn(8), (_[p - a - 1] = g);
        }
        return _;
      }),
      Math.clz32
        ? (s.prototype._countBits = function (o) {
            return 32 - Math.clz32(o);
          })
        : (s.prototype._countBits = function (o) {
            var u = o,
              l = 0;
            return (
              u >= 4096 && ((l += 13), (u >>>= 13)),
              u >= 64 && ((l += 7), (u >>>= 7)),
              u >= 8 && ((l += 4), (u >>>= 4)),
              u >= 2 && ((l += 2), (u >>>= 2)),
              l + u
            );
          }),
      (s.prototype._zeroBits = function (o) {
        if (o === 0) return 26;
        var u = o,
          l = 0;
        return (
          u & 8191 || ((l += 13), (u >>>= 13)),
          u & 127 || ((l += 7), (u >>>= 7)),
          u & 15 || ((l += 4), (u >>>= 4)),
          u & 3 || ((l += 2), (u >>>= 2)),
          u & 1 || l++,
          l
        );
      }),
      (s.prototype.bitLength = function () {
        var o = this.words[this.length - 1],
          u = this._countBits(o);
        return (this.length - 1) * 26 + u;
      });
    function N(w) {
      for (var o = new Array(w.bitLength()), u = 0; u < o.length; u++) {
        var l = (u / 26) | 0,
          d = u % 26;
        o[u] = (w.words[l] & (1 << d)) >>> d;
      }
      return o;
    }
    (s.prototype.zeroBits = function () {
      if (this.isZero()) return 0;
      for (var o = 0, u = 0; u < this.length; u++) {
        var l = this._zeroBits(this.words[u]);
        if (((o += l), l !== 26)) break;
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
        for (var u = 0; u < o.length; u++) this.words[u] = this.words[u] | o.words[u];
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
        var u;
        this.length > o.length ? (u = o) : (u = this);
        for (var l = 0; l < u.length; l++) this.words[l] = this.words[l] & o.words[l];
        return (this.length = u.length), this.strip();
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
        var u, l;
        this.length > o.length ? ((u = this), (l = o)) : ((u = o), (l = this));
        for (var d = 0; d < l.length; d++) this.words[d] = u.words[d] ^ l.words[d];
        if (this !== u) for (; d < u.length; d++) this.words[d] = u.words[d];
        return (this.length = u.length), this.strip();
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
        var u = Math.ceil(o / 26) | 0,
          l = o % 26;
        this._expand(u), l > 0 && u--;
        for (var d = 0; d < u; d++) this.words[d] = ~this.words[d] & 67108863;
        return l > 0 && (this.words[d] = ~this.words[d] & (67108863 >> (26 - l))), this.strip();
      }),
      (s.prototype.notn = function (o) {
        return this.clone().inotn(o);
      }),
      (s.prototype.setn = function (o, u) {
        i(typeof o == 'number' && o >= 0);
        var l = (o / 26) | 0,
          d = o % 26;
        return (
          this._expand(l + 1),
          u
            ? (this.words[l] = this.words[l] | (1 << d))
            : (this.words[l] = this.words[l] & ~(1 << d)),
          this.strip()
        );
      }),
      (s.prototype.iadd = function (o) {
        var u;
        if (this.negative !== 0 && o.negative === 0)
          return (this.negative = 0), (u = this.isub(o)), (this.negative ^= 1), this._normSign();
        if (this.negative === 0 && o.negative !== 0)
          return (o.negative = 0), (u = this.isub(o)), (o.negative = 1), u._normSign();
        var l, d;
        this.length > o.length ? ((l = this), (d = o)) : ((l = o), (d = this));
        for (var p = 0, E = 0; E < d.length; E++)
          (u = (l.words[E] | 0) + (d.words[E] | 0) + p),
            (this.words[E] = u & 67108863),
            (p = u >>> 26);
        for (; p !== 0 && E < l.length; E++)
          (u = (l.words[E] | 0) + p), (this.words[E] = u & 67108863), (p = u >>> 26);
        if (((this.length = l.length), p !== 0)) (this.words[this.length] = p), this.length++;
        else if (l !== this) for (; E < l.length; E++) this.words[E] = l.words[E];
        return this;
      }),
      (s.prototype.add = function (o) {
        var u;
        return o.negative !== 0 && this.negative === 0
          ? ((o.negative = 0), (u = this.sub(o)), (o.negative ^= 1), u)
          : o.negative === 0 && this.negative !== 0
            ? ((this.negative = 0), (u = o.sub(this)), (this.negative = 1), u)
            : this.length > o.length
              ? this.clone().iadd(o)
              : o.clone().iadd(this);
      }),
      (s.prototype.isub = function (o) {
        if (o.negative !== 0) {
          o.negative = 0;
          var u = this.iadd(o);
          return (o.negative = 1), u._normSign();
        } else if (this.negative !== 0)
          return (this.negative = 0), this.iadd(o), (this.negative = 1), this._normSign();
        var l = this.cmp(o);
        if (l === 0) return (this.negative = 0), (this.length = 1), (this.words[0] = 0), this;
        var d, p;
        l > 0 ? ((d = this), (p = o)) : ((d = o), (p = this));
        for (var E = 0, _ = 0; _ < p.length; _++)
          (u = (d.words[_] | 0) - (p.words[_] | 0) + E),
            (E = u >> 26),
            (this.words[_] = u & 67108863);
        for (; E !== 0 && _ < d.length; _++)
          (u = (d.words[_] | 0) + E), (E = u >> 26), (this.words[_] = u & 67108863);
        if (E === 0 && _ < d.length && d !== this)
          for (; _ < d.length; _++) this.words[_] = d.words[_];
        return (
          (this.length = Math.max(this.length, _)), d !== this && (this.negative = 1), this.strip()
        );
      }),
      (s.prototype.sub = function (o) {
        return this.clone().isub(o);
      });
    function R(w, o, u) {
      u.negative = o.negative ^ w.negative;
      var l = (w.length + o.length) | 0;
      (u.length = l), (l = (l - 1) | 0);
      var d = w.words[0] | 0,
        p = o.words[0] | 0,
        E = d * p,
        _ = E & 67108863,
        g = (E / 67108864) | 0;
      u.words[0] = _;
      for (var a = 1; a < l; a++) {
        for (
          var m = g >>> 26,
            z = g & 67108863,
            K = Math.min(a, o.length - 1),
            q = Math.max(0, a - w.length + 1);
          q <= K;
          q++
        ) {
          var G = (a - q) | 0;
          (d = w.words[G] | 0),
            (p = o.words[q] | 0),
            (E = d * p + z),
            (m += (E / 67108864) | 0),
            (z = E & 67108863);
        }
        (u.words[a] = z | 0), (g = m | 0);
      }
      return g !== 0 ? (u.words[a] = g | 0) : u.length--, u.strip();
    }
    var V = function (o, u, l) {
      var d = o.words,
        p = u.words,
        E = l.words,
        _ = 0,
        g,
        a,
        m,
        z = d[0] | 0,
        K = z & 8191,
        q = z >>> 13,
        G = d[1] | 0,
        ot = G & 8191,
        yt = G >>> 13,
        ke = d[2] | 0,
        pt = ke & 8191,
        St = ke >>> 13,
        Nr = d[3] | 0,
        Dt = Nr & 8191,
        Yt = Nr >>> 13,
        Kr = d[4] | 0,
        ee = Kr & 8191,
        re = Kr >>> 13,
        Cr = d[5] | 0,
        Zt = Cr & 8191,
        Bt = Cr >>> 13,
        cr = d[6] | 0,
        Qt = cr & 8191,
        Gt = cr >>> 13,
        br = d[7] | 0,
        Ft = br & 8191,
        Vt = br >>> 13,
        dr = d[8] | 0,
        jt = dr & 8191,
        Kt = dr >>> 13,
        Ar = d[9] | 0,
        $t = Ar & 8191,
        zt = Ar >>> 13,
        gr = p[0] | 0,
        Ot = gr & 8191,
        It = gr >>> 13,
        Xe = p[1] | 0,
        Rt = Xe & 8191,
        Ut = Xe >>> 13,
        ar = p[2] | 0,
        Lt = ar & 8191,
        Ht = ar >>> 13,
        Er = p[3] | 0,
        Xt = Er & 8191,
        te = Er >>> 13,
        qe = p[4] | 0,
        Tt = qe & 8191,
        Nt = qe >>> 13,
        pr = p[5] | 0,
        qt = pr & 8191,
        Wt = pr >>> 13,
        Ir = p[6] | 0,
        wt = Ir & 8191,
        Jt = Ir >>> 13,
        y = p[7] | 0,
        x = y & 8191,
        A = y >>> 13,
        h = p[8] | 0,
        M = h & 8191,
        T = h >>> 13,
        I = p[9] | 0,
        L = I & 8191,
        F = I >>> 13;
      (l.negative = o.negative ^ u.negative),
        (l.length = 19),
        (g = Math.imul(K, Ot)),
        (a = Math.imul(K, It)),
        (a = (a + Math.imul(q, Ot)) | 0),
        (m = Math.imul(q, It));
      var ct = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (ct >>> 26)) | 0),
        (ct &= 67108863),
        (g = Math.imul(ot, Ot)),
        (a = Math.imul(ot, It)),
        (a = (a + Math.imul(yt, Ot)) | 0),
        (m = Math.imul(yt, It)),
        (g = (g + Math.imul(K, Rt)) | 0),
        (a = (a + Math.imul(K, Ut)) | 0),
        (a = (a + Math.imul(q, Rt)) | 0),
        (m = (m + Math.imul(q, Ut)) | 0);
      var et = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (et >>> 26)) | 0),
        (et &= 67108863),
        (g = Math.imul(pt, Ot)),
        (a = Math.imul(pt, It)),
        (a = (a + Math.imul(St, Ot)) | 0),
        (m = Math.imul(St, It)),
        (g = (g + Math.imul(ot, Rt)) | 0),
        (a = (a + Math.imul(ot, Ut)) | 0),
        (a = (a + Math.imul(yt, Rt)) | 0),
        (m = (m + Math.imul(yt, Ut)) | 0),
        (g = (g + Math.imul(K, Lt)) | 0),
        (a = (a + Math.imul(K, Ht)) | 0),
        (a = (a + Math.imul(q, Lt)) | 0),
        (m = (m + Math.imul(q, Ht)) | 0);
      var ie = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (ie >>> 26)) | 0),
        (ie &= 67108863),
        (g = Math.imul(Dt, Ot)),
        (a = Math.imul(Dt, It)),
        (a = (a + Math.imul(Yt, Ot)) | 0),
        (m = Math.imul(Yt, It)),
        (g = (g + Math.imul(pt, Rt)) | 0),
        (a = (a + Math.imul(pt, Ut)) | 0),
        (a = (a + Math.imul(St, Rt)) | 0),
        (m = (m + Math.imul(St, Ut)) | 0),
        (g = (g + Math.imul(ot, Lt)) | 0),
        (a = (a + Math.imul(ot, Ht)) | 0),
        (a = (a + Math.imul(yt, Lt)) | 0),
        (m = (m + Math.imul(yt, Ht)) | 0),
        (g = (g + Math.imul(K, Xt)) | 0),
        (a = (a + Math.imul(K, te)) | 0),
        (a = (a + Math.imul(q, Xt)) | 0),
        (m = (m + Math.imul(q, te)) | 0);
      var nt = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (nt >>> 26)) | 0),
        (nt &= 67108863),
        (g = Math.imul(ee, Ot)),
        (a = Math.imul(ee, It)),
        (a = (a + Math.imul(re, Ot)) | 0),
        (m = Math.imul(re, It)),
        (g = (g + Math.imul(Dt, Rt)) | 0),
        (a = (a + Math.imul(Dt, Ut)) | 0),
        (a = (a + Math.imul(Yt, Rt)) | 0),
        (m = (m + Math.imul(Yt, Ut)) | 0),
        (g = (g + Math.imul(pt, Lt)) | 0),
        (a = (a + Math.imul(pt, Ht)) | 0),
        (a = (a + Math.imul(St, Lt)) | 0),
        (m = (m + Math.imul(St, Ht)) | 0),
        (g = (g + Math.imul(ot, Xt)) | 0),
        (a = (a + Math.imul(ot, te)) | 0),
        (a = (a + Math.imul(yt, Xt)) | 0),
        (m = (m + Math.imul(yt, te)) | 0),
        (g = (g + Math.imul(K, Tt)) | 0),
        (a = (a + Math.imul(K, Nt)) | 0),
        (a = (a + Math.imul(q, Tt)) | 0),
        (m = (m + Math.imul(q, Nt)) | 0);
      var bt = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (bt >>> 26)) | 0),
        (bt &= 67108863),
        (g = Math.imul(Zt, Ot)),
        (a = Math.imul(Zt, It)),
        (a = (a + Math.imul(Bt, Ot)) | 0),
        (m = Math.imul(Bt, It)),
        (g = (g + Math.imul(ee, Rt)) | 0),
        (a = (a + Math.imul(ee, Ut)) | 0),
        (a = (a + Math.imul(re, Rt)) | 0),
        (m = (m + Math.imul(re, Ut)) | 0),
        (g = (g + Math.imul(Dt, Lt)) | 0),
        (a = (a + Math.imul(Dt, Ht)) | 0),
        (a = (a + Math.imul(Yt, Lt)) | 0),
        (m = (m + Math.imul(Yt, Ht)) | 0),
        (g = (g + Math.imul(pt, Xt)) | 0),
        (a = (a + Math.imul(pt, te)) | 0),
        (a = (a + Math.imul(St, Xt)) | 0),
        (m = (m + Math.imul(St, te)) | 0),
        (g = (g + Math.imul(ot, Tt)) | 0),
        (a = (a + Math.imul(ot, Nt)) | 0),
        (a = (a + Math.imul(yt, Tt)) | 0),
        (m = (m + Math.imul(yt, Nt)) | 0),
        (g = (g + Math.imul(K, qt)) | 0),
        (a = (a + Math.imul(K, Wt)) | 0),
        (a = (a + Math.imul(q, qt)) | 0),
        (m = (m + Math.imul(q, Wt)) | 0);
      var At = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (At >>> 26)) | 0),
        (At &= 67108863),
        (g = Math.imul(Qt, Ot)),
        (a = Math.imul(Qt, It)),
        (a = (a + Math.imul(Gt, Ot)) | 0),
        (m = Math.imul(Gt, It)),
        (g = (g + Math.imul(Zt, Rt)) | 0),
        (a = (a + Math.imul(Zt, Ut)) | 0),
        (a = (a + Math.imul(Bt, Rt)) | 0),
        (m = (m + Math.imul(Bt, Ut)) | 0),
        (g = (g + Math.imul(ee, Lt)) | 0),
        (a = (a + Math.imul(ee, Ht)) | 0),
        (a = (a + Math.imul(re, Lt)) | 0),
        (m = (m + Math.imul(re, Ht)) | 0),
        (g = (g + Math.imul(Dt, Xt)) | 0),
        (a = (a + Math.imul(Dt, te)) | 0),
        (a = (a + Math.imul(Yt, Xt)) | 0),
        (m = (m + Math.imul(Yt, te)) | 0),
        (g = (g + Math.imul(pt, Tt)) | 0),
        (a = (a + Math.imul(pt, Nt)) | 0),
        (a = (a + Math.imul(St, Tt)) | 0),
        (m = (m + Math.imul(St, Nt)) | 0),
        (g = (g + Math.imul(ot, qt)) | 0),
        (a = (a + Math.imul(ot, Wt)) | 0),
        (a = (a + Math.imul(yt, qt)) | 0),
        (m = (m + Math.imul(yt, Wt)) | 0),
        (g = (g + Math.imul(K, wt)) | 0),
        (a = (a + Math.imul(K, Jt)) | 0),
        (a = (a + Math.imul(q, wt)) | 0),
        (m = (m + Math.imul(q, Jt)) | 0);
      var kt = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (kt >>> 26)) | 0),
        (kt &= 67108863),
        (g = Math.imul(Ft, Ot)),
        (a = Math.imul(Ft, It)),
        (a = (a + Math.imul(Vt, Ot)) | 0),
        (m = Math.imul(Vt, It)),
        (g = (g + Math.imul(Qt, Rt)) | 0),
        (a = (a + Math.imul(Qt, Ut)) | 0),
        (a = (a + Math.imul(Gt, Rt)) | 0),
        (m = (m + Math.imul(Gt, Ut)) | 0),
        (g = (g + Math.imul(Zt, Lt)) | 0),
        (a = (a + Math.imul(Zt, Ht)) | 0),
        (a = (a + Math.imul(Bt, Lt)) | 0),
        (m = (m + Math.imul(Bt, Ht)) | 0),
        (g = (g + Math.imul(ee, Xt)) | 0),
        (a = (a + Math.imul(ee, te)) | 0),
        (a = (a + Math.imul(re, Xt)) | 0),
        (m = (m + Math.imul(re, te)) | 0),
        (g = (g + Math.imul(Dt, Tt)) | 0),
        (a = (a + Math.imul(Dt, Nt)) | 0),
        (a = (a + Math.imul(Yt, Tt)) | 0),
        (m = (m + Math.imul(Yt, Nt)) | 0),
        (g = (g + Math.imul(pt, qt)) | 0),
        (a = (a + Math.imul(pt, Wt)) | 0),
        (a = (a + Math.imul(St, qt)) | 0),
        (m = (m + Math.imul(St, Wt)) | 0),
        (g = (g + Math.imul(ot, wt)) | 0),
        (a = (a + Math.imul(ot, Jt)) | 0),
        (a = (a + Math.imul(yt, wt)) | 0),
        (m = (m + Math.imul(yt, Jt)) | 0),
        (g = (g + Math.imul(K, x)) | 0),
        (a = (a + Math.imul(K, A)) | 0),
        (a = (a + Math.imul(q, x)) | 0),
        (m = (m + Math.imul(q, A)) | 0);
      var Pt = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (Pt >>> 26)) | 0),
        (Pt &= 67108863),
        (g = Math.imul(jt, Ot)),
        (a = Math.imul(jt, It)),
        (a = (a + Math.imul(Kt, Ot)) | 0),
        (m = Math.imul(Kt, It)),
        (g = (g + Math.imul(Ft, Rt)) | 0),
        (a = (a + Math.imul(Ft, Ut)) | 0),
        (a = (a + Math.imul(Vt, Rt)) | 0),
        (m = (m + Math.imul(Vt, Ut)) | 0),
        (g = (g + Math.imul(Qt, Lt)) | 0),
        (a = (a + Math.imul(Qt, Ht)) | 0),
        (a = (a + Math.imul(Gt, Lt)) | 0),
        (m = (m + Math.imul(Gt, Ht)) | 0),
        (g = (g + Math.imul(Zt, Xt)) | 0),
        (a = (a + Math.imul(Zt, te)) | 0),
        (a = (a + Math.imul(Bt, Xt)) | 0),
        (m = (m + Math.imul(Bt, te)) | 0),
        (g = (g + Math.imul(ee, Tt)) | 0),
        (a = (a + Math.imul(ee, Nt)) | 0),
        (a = (a + Math.imul(re, Tt)) | 0),
        (m = (m + Math.imul(re, Nt)) | 0),
        (g = (g + Math.imul(Dt, qt)) | 0),
        (a = (a + Math.imul(Dt, Wt)) | 0),
        (a = (a + Math.imul(Yt, qt)) | 0),
        (m = (m + Math.imul(Yt, Wt)) | 0),
        (g = (g + Math.imul(pt, wt)) | 0),
        (a = (a + Math.imul(pt, Jt)) | 0),
        (a = (a + Math.imul(St, wt)) | 0),
        (m = (m + Math.imul(St, Jt)) | 0),
        (g = (g + Math.imul(ot, x)) | 0),
        (a = (a + Math.imul(ot, A)) | 0),
        (a = (a + Math.imul(yt, x)) | 0),
        (m = (m + Math.imul(yt, A)) | 0),
        (g = (g + Math.imul(K, M)) | 0),
        (a = (a + Math.imul(K, T)) | 0),
        (a = (a + Math.imul(q, M)) | 0),
        (m = (m + Math.imul(q, T)) | 0);
      var Et = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (Et >>> 26)) | 0),
        (Et &= 67108863),
        (g = Math.imul($t, Ot)),
        (a = Math.imul($t, It)),
        (a = (a + Math.imul(zt, Ot)) | 0),
        (m = Math.imul(zt, It)),
        (g = (g + Math.imul(jt, Rt)) | 0),
        (a = (a + Math.imul(jt, Ut)) | 0),
        (a = (a + Math.imul(Kt, Rt)) | 0),
        (m = (m + Math.imul(Kt, Ut)) | 0),
        (g = (g + Math.imul(Ft, Lt)) | 0),
        (a = (a + Math.imul(Ft, Ht)) | 0),
        (a = (a + Math.imul(Vt, Lt)) | 0),
        (m = (m + Math.imul(Vt, Ht)) | 0),
        (g = (g + Math.imul(Qt, Xt)) | 0),
        (a = (a + Math.imul(Qt, te)) | 0),
        (a = (a + Math.imul(Gt, Xt)) | 0),
        (m = (m + Math.imul(Gt, te)) | 0),
        (g = (g + Math.imul(Zt, Tt)) | 0),
        (a = (a + Math.imul(Zt, Nt)) | 0),
        (a = (a + Math.imul(Bt, Tt)) | 0),
        (m = (m + Math.imul(Bt, Nt)) | 0),
        (g = (g + Math.imul(ee, qt)) | 0),
        (a = (a + Math.imul(ee, Wt)) | 0),
        (a = (a + Math.imul(re, qt)) | 0),
        (m = (m + Math.imul(re, Wt)) | 0),
        (g = (g + Math.imul(Dt, wt)) | 0),
        (a = (a + Math.imul(Dt, Jt)) | 0),
        (a = (a + Math.imul(Yt, wt)) | 0),
        (m = (m + Math.imul(Yt, Jt)) | 0),
        (g = (g + Math.imul(pt, x)) | 0),
        (a = (a + Math.imul(pt, A)) | 0),
        (a = (a + Math.imul(St, x)) | 0),
        (m = (m + Math.imul(St, A)) | 0),
        (g = (g + Math.imul(ot, M)) | 0),
        (a = (a + Math.imul(ot, T)) | 0),
        (a = (a + Math.imul(yt, M)) | 0),
        (m = (m + Math.imul(yt, T)) | 0),
        (g = (g + Math.imul(K, L)) | 0),
        (a = (a + Math.imul(K, F)) | 0),
        (a = (a + Math.imul(q, L)) | 0),
        (m = (m + Math.imul(q, F)) | 0);
      var _t = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (_t >>> 26)) | 0),
        (_t &= 67108863),
        (g = Math.imul($t, Rt)),
        (a = Math.imul($t, Ut)),
        (a = (a + Math.imul(zt, Rt)) | 0),
        (m = Math.imul(zt, Ut)),
        (g = (g + Math.imul(jt, Lt)) | 0),
        (a = (a + Math.imul(jt, Ht)) | 0),
        (a = (a + Math.imul(Kt, Lt)) | 0),
        (m = (m + Math.imul(Kt, Ht)) | 0),
        (g = (g + Math.imul(Ft, Xt)) | 0),
        (a = (a + Math.imul(Ft, te)) | 0),
        (a = (a + Math.imul(Vt, Xt)) | 0),
        (m = (m + Math.imul(Vt, te)) | 0),
        (g = (g + Math.imul(Qt, Tt)) | 0),
        (a = (a + Math.imul(Qt, Nt)) | 0),
        (a = (a + Math.imul(Gt, Tt)) | 0),
        (m = (m + Math.imul(Gt, Nt)) | 0),
        (g = (g + Math.imul(Zt, qt)) | 0),
        (a = (a + Math.imul(Zt, Wt)) | 0),
        (a = (a + Math.imul(Bt, qt)) | 0),
        (m = (m + Math.imul(Bt, Wt)) | 0),
        (g = (g + Math.imul(ee, wt)) | 0),
        (a = (a + Math.imul(ee, Jt)) | 0),
        (a = (a + Math.imul(re, wt)) | 0),
        (m = (m + Math.imul(re, Jt)) | 0),
        (g = (g + Math.imul(Dt, x)) | 0),
        (a = (a + Math.imul(Dt, A)) | 0),
        (a = (a + Math.imul(Yt, x)) | 0),
        (m = (m + Math.imul(Yt, A)) | 0),
        (g = (g + Math.imul(pt, M)) | 0),
        (a = (a + Math.imul(pt, T)) | 0),
        (a = (a + Math.imul(St, M)) | 0),
        (m = (m + Math.imul(St, T)) | 0),
        (g = (g + Math.imul(ot, L)) | 0),
        (a = (a + Math.imul(ot, F)) | 0),
        (a = (a + Math.imul(yt, L)) | 0),
        (m = (m + Math.imul(yt, F)) | 0);
      var xt = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (xt >>> 26)) | 0),
        (xt &= 67108863),
        (g = Math.imul($t, Lt)),
        (a = Math.imul($t, Ht)),
        (a = (a + Math.imul(zt, Lt)) | 0),
        (m = Math.imul(zt, Ht)),
        (g = (g + Math.imul(jt, Xt)) | 0),
        (a = (a + Math.imul(jt, te)) | 0),
        (a = (a + Math.imul(Kt, Xt)) | 0),
        (m = (m + Math.imul(Kt, te)) | 0),
        (g = (g + Math.imul(Ft, Tt)) | 0),
        (a = (a + Math.imul(Ft, Nt)) | 0),
        (a = (a + Math.imul(Vt, Tt)) | 0),
        (m = (m + Math.imul(Vt, Nt)) | 0),
        (g = (g + Math.imul(Qt, qt)) | 0),
        (a = (a + Math.imul(Qt, Wt)) | 0),
        (a = (a + Math.imul(Gt, qt)) | 0),
        (m = (m + Math.imul(Gt, Wt)) | 0),
        (g = (g + Math.imul(Zt, wt)) | 0),
        (a = (a + Math.imul(Zt, Jt)) | 0),
        (a = (a + Math.imul(Bt, wt)) | 0),
        (m = (m + Math.imul(Bt, Jt)) | 0),
        (g = (g + Math.imul(ee, x)) | 0),
        (a = (a + Math.imul(ee, A)) | 0),
        (a = (a + Math.imul(re, x)) | 0),
        (m = (m + Math.imul(re, A)) | 0),
        (g = (g + Math.imul(Dt, M)) | 0),
        (a = (a + Math.imul(Dt, T)) | 0),
        (a = (a + Math.imul(Yt, M)) | 0),
        (m = (m + Math.imul(Yt, T)) | 0),
        (g = (g + Math.imul(pt, L)) | 0),
        (a = (a + Math.imul(pt, F)) | 0),
        (a = (a + Math.imul(St, L)) | 0),
        (m = (m + Math.imul(St, F)) | 0);
      var at = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (at >>> 26)) | 0),
        (at &= 67108863),
        (g = Math.imul($t, Xt)),
        (a = Math.imul($t, te)),
        (a = (a + Math.imul(zt, Xt)) | 0),
        (m = Math.imul(zt, te)),
        (g = (g + Math.imul(jt, Tt)) | 0),
        (a = (a + Math.imul(jt, Nt)) | 0),
        (a = (a + Math.imul(Kt, Tt)) | 0),
        (m = (m + Math.imul(Kt, Nt)) | 0),
        (g = (g + Math.imul(Ft, qt)) | 0),
        (a = (a + Math.imul(Ft, Wt)) | 0),
        (a = (a + Math.imul(Vt, qt)) | 0),
        (m = (m + Math.imul(Vt, Wt)) | 0),
        (g = (g + Math.imul(Qt, wt)) | 0),
        (a = (a + Math.imul(Qt, Jt)) | 0),
        (a = (a + Math.imul(Gt, wt)) | 0),
        (m = (m + Math.imul(Gt, Jt)) | 0),
        (g = (g + Math.imul(Zt, x)) | 0),
        (a = (a + Math.imul(Zt, A)) | 0),
        (a = (a + Math.imul(Bt, x)) | 0),
        (m = (m + Math.imul(Bt, A)) | 0),
        (g = (g + Math.imul(ee, M)) | 0),
        (a = (a + Math.imul(ee, T)) | 0),
        (a = (a + Math.imul(re, M)) | 0),
        (m = (m + Math.imul(re, T)) | 0),
        (g = (g + Math.imul(Dt, L)) | 0),
        (a = (a + Math.imul(Dt, F)) | 0),
        (a = (a + Math.imul(Yt, L)) | 0),
        (m = (m + Math.imul(Yt, F)) | 0);
      var dt = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (dt >>> 26)) | 0),
        (dt &= 67108863),
        (g = Math.imul($t, Tt)),
        (a = Math.imul($t, Nt)),
        (a = (a + Math.imul(zt, Tt)) | 0),
        (m = Math.imul(zt, Nt)),
        (g = (g + Math.imul(jt, qt)) | 0),
        (a = (a + Math.imul(jt, Wt)) | 0),
        (a = (a + Math.imul(Kt, qt)) | 0),
        (m = (m + Math.imul(Kt, Wt)) | 0),
        (g = (g + Math.imul(Ft, wt)) | 0),
        (a = (a + Math.imul(Ft, Jt)) | 0),
        (a = (a + Math.imul(Vt, wt)) | 0),
        (m = (m + Math.imul(Vt, Jt)) | 0),
        (g = (g + Math.imul(Qt, x)) | 0),
        (a = (a + Math.imul(Qt, A)) | 0),
        (a = (a + Math.imul(Gt, x)) | 0),
        (m = (m + Math.imul(Gt, A)) | 0),
        (g = (g + Math.imul(Zt, M)) | 0),
        (a = (a + Math.imul(Zt, T)) | 0),
        (a = (a + Math.imul(Bt, M)) | 0),
        (m = (m + Math.imul(Bt, T)) | 0),
        (g = (g + Math.imul(ee, L)) | 0),
        (a = (a + Math.imul(ee, F)) | 0),
        (a = (a + Math.imul(re, L)) | 0),
        (m = (m + Math.imul(re, F)) | 0);
      var rt = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (rt >>> 26)) | 0),
        (rt &= 67108863),
        (g = Math.imul($t, qt)),
        (a = Math.imul($t, Wt)),
        (a = (a + Math.imul(zt, qt)) | 0),
        (m = Math.imul(zt, Wt)),
        (g = (g + Math.imul(jt, wt)) | 0),
        (a = (a + Math.imul(jt, Jt)) | 0),
        (a = (a + Math.imul(Kt, wt)) | 0),
        (m = (m + Math.imul(Kt, Jt)) | 0),
        (g = (g + Math.imul(Ft, x)) | 0),
        (a = (a + Math.imul(Ft, A)) | 0),
        (a = (a + Math.imul(Vt, x)) | 0),
        (m = (m + Math.imul(Vt, A)) | 0),
        (g = (g + Math.imul(Qt, M)) | 0),
        (a = (a + Math.imul(Qt, T)) | 0),
        (a = (a + Math.imul(Gt, M)) | 0),
        (m = (m + Math.imul(Gt, T)) | 0),
        (g = (g + Math.imul(Zt, L)) | 0),
        (a = (a + Math.imul(Zt, F)) | 0),
        (a = (a + Math.imul(Bt, L)) | 0),
        (m = (m + Math.imul(Bt, F)) | 0);
      var ft = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (ft >>> 26)) | 0),
        (ft &= 67108863),
        (g = Math.imul($t, wt)),
        (a = Math.imul($t, Jt)),
        (a = (a + Math.imul(zt, wt)) | 0),
        (m = Math.imul(zt, Jt)),
        (g = (g + Math.imul(jt, x)) | 0),
        (a = (a + Math.imul(jt, A)) | 0),
        (a = (a + Math.imul(Kt, x)) | 0),
        (m = (m + Math.imul(Kt, A)) | 0),
        (g = (g + Math.imul(Ft, M)) | 0),
        (a = (a + Math.imul(Ft, T)) | 0),
        (a = (a + Math.imul(Vt, M)) | 0),
        (m = (m + Math.imul(Vt, T)) | 0),
        (g = (g + Math.imul(Qt, L)) | 0),
        (a = (a + Math.imul(Qt, F)) | 0),
        (a = (a + Math.imul(Gt, L)) | 0),
        (m = (m + Math.imul(Gt, F)) | 0);
      var ht = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (ht >>> 26)) | 0),
        (ht &= 67108863),
        (g = Math.imul($t, x)),
        (a = Math.imul($t, A)),
        (a = (a + Math.imul(zt, x)) | 0),
        (m = Math.imul(zt, A)),
        (g = (g + Math.imul(jt, M)) | 0),
        (a = (a + Math.imul(jt, T)) | 0),
        (a = (a + Math.imul(Kt, M)) | 0),
        (m = (m + Math.imul(Kt, T)) | 0),
        (g = (g + Math.imul(Ft, L)) | 0),
        (a = (a + Math.imul(Ft, F)) | 0),
        (a = (a + Math.imul(Vt, L)) | 0),
        (m = (m + Math.imul(Vt, F)) | 0);
      var it = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (it >>> 26)) | 0),
        (it &= 67108863),
        (g = Math.imul($t, M)),
        (a = Math.imul($t, T)),
        (a = (a + Math.imul(zt, M)) | 0),
        (m = Math.imul(zt, T)),
        (g = (g + Math.imul(jt, L)) | 0),
        (a = (a + Math.imul(jt, F)) | 0),
        (a = (a + Math.imul(Kt, L)) | 0),
        (m = (m + Math.imul(Kt, F)) | 0);
      var O = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (O >>> 26)) | 0),
        (O &= 67108863),
        (g = Math.imul($t, L)),
        (a = Math.imul($t, F)),
        (a = (a + Math.imul(zt, L)) | 0),
        (m = Math.imul(zt, F));
      var U = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      return (
        (_ = (((m + (a >>> 13)) | 0) + (U >>> 26)) | 0),
        (U &= 67108863),
        (E[0] = ct),
        (E[1] = et),
        (E[2] = ie),
        (E[3] = nt),
        (E[4] = bt),
        (E[5] = At),
        (E[6] = kt),
        (E[7] = Pt),
        (E[8] = Et),
        (E[9] = _t),
        (E[10] = xt),
        (E[11] = at),
        (E[12] = dt),
        (E[13] = rt),
        (E[14] = ft),
        (E[15] = ht),
        (E[16] = it),
        (E[17] = O),
        (E[18] = U),
        _ !== 0 && ((E[19] = _), l.length++),
        l
      );
    };
    Math.imul || (V = R);
    function lt(w, o, u) {
      (u.negative = o.negative ^ w.negative), (u.length = w.length + o.length);
      for (var l = 0, d = 0, p = 0; p < u.length - 1; p++) {
        var E = d;
        d = 0;
        for (
          var _ = l & 67108863, g = Math.min(p, o.length - 1), a = Math.max(0, p - w.length + 1);
          a <= g;
          a++
        ) {
          var m = p - a,
            z = w.words[m] | 0,
            K = o.words[a] | 0,
            q = z * K,
            G = q & 67108863;
          (E = (E + ((q / 67108864) | 0)) | 0),
            (G = (G + _) | 0),
            (_ = G & 67108863),
            (E = (E + (G >>> 26)) | 0),
            (d += E >>> 26),
            (E &= 67108863);
        }
        (u.words[p] = _), (l = E), (E = d);
      }
      return l !== 0 ? (u.words[p] = l) : u.length--, u.strip();
    }
    function $(w, o, u) {
      var l = new C();
      return l.mulp(w, o, u);
    }
    s.prototype.mulTo = function (o, u) {
      var l,
        d = this.length + o.length;
      return (
        this.length === 10 && o.length === 10
          ? (l = V(this, o, u))
          : d < 63
            ? (l = R(this, o, u))
            : d < 1024
              ? (l = lt(this, o, u))
              : (l = $(this, o, u)),
        l
      );
    };
    function C(w, o) {
      (this.x = w), (this.y = o);
    }
    (C.prototype.makeRBT = function (o) {
      for (var u = new Array(o), l = s.prototype._countBits(o) - 1, d = 0; d < o; d++)
        u[d] = this.revBin(d, l, o);
      return u;
    }),
      (C.prototype.revBin = function (o, u, l) {
        if (o === 0 || o === l - 1) return o;
        for (var d = 0, p = 0; p < u; p++) (d |= (o & 1) << (u - p - 1)), (o >>= 1);
        return d;
      }),
      (C.prototype.permute = function (o, u, l, d, p, E) {
        for (var _ = 0; _ < E; _++) (d[_] = u[o[_]]), (p[_] = l[o[_]]);
      }),
      (C.prototype.transform = function (o, u, l, d, p, E) {
        this.permute(E, o, u, l, d, p);
        for (var _ = 1; _ < p; _ <<= 1)
          for (
            var g = _ << 1, a = Math.cos((2 * Math.PI) / g), m = Math.sin((2 * Math.PI) / g), z = 0;
            z < p;
            z += g
          )
            for (var K = a, q = m, G = 0; G < _; G++) {
              var ot = l[z + G],
                yt = d[z + G],
                ke = l[z + G + _],
                pt = d[z + G + _],
                St = K * ke - q * pt;
              (pt = K * pt + q * ke),
                (ke = St),
                (l[z + G] = ot + ke),
                (d[z + G] = yt + pt),
                (l[z + G + _] = ot - ke),
                (d[z + G + _] = yt - pt),
                G !== g && ((St = a * K - m * q), (q = a * q + m * K), (K = St));
            }
      }),
      (C.prototype.guessLen13b = function (o, u) {
        var l = Math.max(u, o) | 1,
          d = l & 1,
          p = 0;
        for (l = (l / 2) | 0; l; l = l >>> 1) p++;
        return 1 << (p + 1 + d);
      }),
      (C.prototype.conjugate = function (o, u, l) {
        if (!(l <= 1))
          for (var d = 0; d < l / 2; d++) {
            var p = o[d];
            (o[d] = o[l - d - 1]),
              (o[l - d - 1] = p),
              (p = u[d]),
              (u[d] = -u[l - d - 1]),
              (u[l - d - 1] = -p);
          }
      }),
      (C.prototype.normalize13b = function (o, u) {
        for (var l = 0, d = 0; d < u / 2; d++) {
          var p = Math.round(o[2 * d + 1] / u) * 8192 + Math.round(o[2 * d] / u) + l;
          (o[d] = p & 67108863), p < 67108864 ? (l = 0) : (l = (p / 67108864) | 0);
        }
        return o;
      }),
      (C.prototype.convert13b = function (o, u, l, d) {
        for (var p = 0, E = 0; E < u; E++)
          (p = p + (o[E] | 0)),
            (l[2 * E] = p & 8191),
            (p = p >>> 13),
            (l[2 * E + 1] = p & 8191),
            (p = p >>> 13);
        for (E = 2 * u; E < d; ++E) l[E] = 0;
        i(p === 0), i((p & -8192) === 0);
      }),
      (C.prototype.stub = function (o) {
        for (var u = new Array(o), l = 0; l < o; l++) u[l] = 0;
        return u;
      }),
      (C.prototype.mulp = function (o, u, l) {
        var d = 2 * this.guessLen13b(o.length, u.length),
          p = this.makeRBT(d),
          E = this.stub(d),
          _ = new Array(d),
          g = new Array(d),
          a = new Array(d),
          m = new Array(d),
          z = new Array(d),
          K = new Array(d),
          q = l.words;
        (q.length = d),
          this.convert13b(o.words, o.length, _, d),
          this.convert13b(u.words, u.length, m, d),
          this.transform(_, E, g, a, d, p),
          this.transform(m, E, z, K, d, p);
        for (var G = 0; G < d; G++) {
          var ot = g[G] * z[G] - a[G] * K[G];
          (a[G] = g[G] * K[G] + a[G] * z[G]), (g[G] = ot);
        }
        return (
          this.conjugate(g, a, d),
          this.transform(g, a, q, E, d, p),
          this.conjugate(q, E, d),
          this.normalize13b(q, d),
          (l.negative = o.negative ^ u.negative),
          (l.length = o.length + u.length),
          l.strip()
        );
      }),
      (s.prototype.mul = function (o) {
        var u = new s(null);
        return (u.words = new Array(this.length + o.length)), this.mulTo(o, u);
      }),
      (s.prototype.mulf = function (o) {
        var u = new s(null);
        return (u.words = new Array(this.length + o.length)), $(this, o, u);
      }),
      (s.prototype.imul = function (o) {
        return this.clone().mulTo(o, this);
      }),
      (s.prototype.imuln = function (o) {
        i(typeof o == 'number'), i(o < 67108864);
        for (var u = 0, l = 0; l < this.length; l++) {
          var d = (this.words[l] | 0) * o,
            p = (d & 67108863) + (u & 67108863);
          (u >>= 26), (u += (d / 67108864) | 0), (u += p >>> 26), (this.words[l] = p & 67108863);
        }
        return u !== 0 && ((this.words[l] = u), this.length++), this;
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
        var u = N(o);
        if (u.length === 0) return new s(1);
        for (var l = this, d = 0; d < u.length && u[d] === 0; d++, l = l.sqr());
        if (++d < u.length)
          for (var p = l.sqr(); d < u.length; d++, p = p.sqr()) u[d] !== 0 && (l = l.mul(p));
        return l;
      }),
      (s.prototype.iushln = function (o) {
        i(typeof o == 'number' && o >= 0);
        var u = o % 26,
          l = (o - u) / 26,
          d = (67108863 >>> (26 - u)) << (26 - u),
          p;
        if (u !== 0) {
          var E = 0;
          for (p = 0; p < this.length; p++) {
            var _ = this.words[p] & d,
              g = ((this.words[p] | 0) - _) << u;
            (this.words[p] = g | E), (E = _ >>> (26 - u));
          }
          E && ((this.words[p] = E), this.length++);
        }
        if (l !== 0) {
          for (p = this.length - 1; p >= 0; p--) this.words[p + l] = this.words[p];
          for (p = 0; p < l; p++) this.words[p] = 0;
          this.length += l;
        }
        return this.strip();
      }),
      (s.prototype.ishln = function (o) {
        return i(this.negative === 0), this.iushln(o);
      }),
      (s.prototype.iushrn = function (o, u, l) {
        i(typeof o == 'number' && o >= 0);
        var d;
        u ? (d = (u - (u % 26)) / 26) : (d = 0);
        var p = o % 26,
          E = Math.min((o - p) / 26, this.length),
          _ = 67108863 ^ ((67108863 >>> p) << p),
          g = l;
        if (((d -= E), (d = Math.max(0, d)), g)) {
          for (var a = 0; a < E; a++) g.words[a] = this.words[a];
          g.length = E;
        }
        if (E !== 0)
          if (this.length > E)
            for (this.length -= E, a = 0; a < this.length; a++) this.words[a] = this.words[a + E];
          else (this.words[0] = 0), (this.length = 1);
        var m = 0;
        for (a = this.length - 1; a >= 0 && (m !== 0 || a >= d); a--) {
          var z = this.words[a] | 0;
          (this.words[a] = (m << (26 - p)) | (z >>> p)), (m = z & _);
        }
        return (
          g && m !== 0 && (g.words[g.length++] = m),
          this.length === 0 && ((this.words[0] = 0), (this.length = 1)),
          this.strip()
        );
      }),
      (s.prototype.ishrn = function (o, u, l) {
        return i(this.negative === 0), this.iushrn(o, u, l);
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
        var u = o % 26,
          l = (o - u) / 26,
          d = 1 << u;
        if (this.length <= l) return !1;
        var p = this.words[l];
        return !!(p & d);
      }),
      (s.prototype.imaskn = function (o) {
        i(typeof o == 'number' && o >= 0);
        var u = o % 26,
          l = (o - u) / 26;
        if ((i(this.negative === 0, 'imaskn works only with positive numbers'), this.length <= l))
          return this;
        if ((u !== 0 && l++, (this.length = Math.min(l, this.length)), u !== 0)) {
          var d = 67108863 ^ ((67108863 >>> u) << u);
          this.words[this.length - 1] &= d;
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
        for (var u = 0; u < this.length && this.words[u] >= 67108864; u++)
          (this.words[u] -= 67108864),
            u === this.length - 1 ? (this.words[u + 1] = 1) : this.words[u + 1]++;
        return (this.length = Math.max(this.length, u + 1)), this;
      }),
      (s.prototype.isubn = function (o) {
        if ((i(typeof o == 'number'), i(o < 67108864), o < 0)) return this.iaddn(-o);
        if (this.negative !== 0)
          return (this.negative = 0), this.iaddn(o), (this.negative = 1), this;
        if (((this.words[0] -= o), this.length === 1 && this.words[0] < 0))
          (this.words[0] = -this.words[0]), (this.negative = 1);
        else
          for (var u = 0; u < this.length && this.words[u] < 0; u++)
            (this.words[u] += 67108864), (this.words[u + 1] -= 1);
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
      (s.prototype._ishlnsubmul = function (o, u, l) {
        var d = o.length + l,
          p;
        this._expand(d);
        var E,
          _ = 0;
        for (p = 0; p < o.length; p++) {
          E = (this.words[p + l] | 0) + _;
          var g = (o.words[p] | 0) * u;
          (E -= g & 67108863),
            (_ = (E >> 26) - ((g / 67108864) | 0)),
            (this.words[p + l] = E & 67108863);
        }
        for (; p < this.length - l; p++)
          (E = (this.words[p + l] | 0) + _), (_ = E >> 26), (this.words[p + l] = E & 67108863);
        if (_ === 0) return this.strip();
        for (i(_ === -1), _ = 0, p = 0; p < this.length; p++)
          (E = -(this.words[p] | 0) + _), (_ = E >> 26), (this.words[p] = E & 67108863);
        return (this.negative = 1), this.strip();
      }),
      (s.prototype._wordDiv = function (o, u) {
        var l = this.length - o.length,
          d = this.clone(),
          p = o,
          E = p.words[p.length - 1] | 0,
          _ = this._countBits(E);
        (l = 26 - _), l !== 0 && ((p = p.ushln(l)), d.iushln(l), (E = p.words[p.length - 1] | 0));
        var g = d.length - p.length,
          a;
        if (u !== 'mod') {
          (a = new s(null)), (a.length = g + 1), (a.words = new Array(a.length));
          for (var m = 0; m < a.length; m++) a.words[m] = 0;
        }
        var z = d.clone()._ishlnsubmul(p, 1, g);
        z.negative === 0 && ((d = z), a && (a.words[g] = 1));
        for (var K = g - 1; K >= 0; K--) {
          var q = (d.words[p.length + K] | 0) * 67108864 + (d.words[p.length + K - 1] | 0);
          for (q = Math.min((q / E) | 0, 67108863), d._ishlnsubmul(p, q, K); d.negative !== 0; )
            q--, (d.negative = 0), d._ishlnsubmul(p, 1, K), d.isZero() || (d.negative ^= 1);
          a && (a.words[K] = q);
        }
        return (
          a && a.strip(),
          d.strip(),
          u !== 'div' && l !== 0 && d.iushrn(l),
          { div: a || null, mod: d }
        );
      }),
      (s.prototype.divmod = function (o, u, l) {
        if ((i(!o.isZero()), this.isZero())) return { div: new s(0), mod: new s(0) };
        var d, p, E;
        return this.negative !== 0 && o.negative === 0
          ? ((E = this.neg().divmod(o, u)),
            u !== 'mod' && (d = E.div.neg()),
            u !== 'div' && ((p = E.mod.neg()), l && p.negative !== 0 && p.iadd(o)),
            { div: d, mod: p })
          : this.negative === 0 && o.negative !== 0
            ? ((E = this.divmod(o.neg(), u)),
              u !== 'mod' && (d = E.div.neg()),
              { div: d, mod: E.mod })
            : this.negative & o.negative
              ? ((E = this.neg().divmod(o.neg(), u)),
                u !== 'div' && ((p = E.mod.neg()), l && p.negative !== 0 && p.isub(o)),
                { div: E.div, mod: p })
              : o.length > this.length || this.cmp(o) < 0
                ? { div: new s(0), mod: this }
                : o.length === 1
                  ? u === 'div'
                    ? { div: this.divn(o.words[0]), mod: null }
                    : u === 'mod'
                      ? { div: null, mod: new s(this.modn(o.words[0])) }
                      : { div: this.divn(o.words[0]), mod: new s(this.modn(o.words[0])) }
                  : this._wordDiv(o, u);
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
        var u = this.divmod(o);
        if (u.mod.isZero()) return u.div;
        var l = u.div.negative !== 0 ? u.mod.isub(o) : u.mod,
          d = o.ushrn(1),
          p = o.andln(1),
          E = l.cmp(d);
        return E < 0 || (p === 1 && E === 0)
          ? u.div
          : u.div.negative !== 0
            ? u.div.isubn(1)
            : u.div.iaddn(1);
      }),
      (s.prototype.modn = function (o) {
        i(o <= 67108863);
        for (var u = (1 << 26) % o, l = 0, d = this.length - 1; d >= 0; d--)
          l = (u * l + (this.words[d] | 0)) % o;
        return l;
      }),
      (s.prototype.idivn = function (o) {
        i(o <= 67108863);
        for (var u = 0, l = this.length - 1; l >= 0; l--) {
          var d = (this.words[l] | 0) + u * 67108864;
          (this.words[l] = (d / o) | 0), (u = d % o);
        }
        return this.strip();
      }),
      (s.prototype.divn = function (o) {
        return this.clone().idivn(o);
      }),
      (s.prototype.egcd = function (o) {
        i(o.negative === 0), i(!o.isZero());
        var u = this,
          l = o.clone();
        u.negative !== 0 ? (u = u.umod(o)) : (u = u.clone());
        for (
          var d = new s(1), p = new s(0), E = new s(0), _ = new s(1), g = 0;
          u.isEven() && l.isEven();

        )
          u.iushrn(1), l.iushrn(1), ++g;
        for (var a = l.clone(), m = u.clone(); !u.isZero(); ) {
          for (var z = 0, K = 1; !(u.words[0] & K) && z < 26; ++z, K <<= 1);
          if (z > 0)
            for (u.iushrn(z); z-- > 0; )
              (d.isOdd() || p.isOdd()) && (d.iadd(a), p.isub(m)), d.iushrn(1), p.iushrn(1);
          for (var q = 0, G = 1; !(l.words[0] & G) && q < 26; ++q, G <<= 1);
          if (q > 0)
            for (l.iushrn(q); q-- > 0; )
              (E.isOdd() || _.isOdd()) && (E.iadd(a), _.isub(m)), E.iushrn(1), _.iushrn(1);
          u.cmp(l) >= 0 ? (u.isub(l), d.isub(E), p.isub(_)) : (l.isub(u), E.isub(d), _.isub(p));
        }
        return { a: E, b: _, gcd: l.iushln(g) };
      }),
      (s.prototype._invmp = function (o) {
        i(o.negative === 0), i(!o.isZero());
        var u = this,
          l = o.clone();
        u.negative !== 0 ? (u = u.umod(o)) : (u = u.clone());
        for (var d = new s(1), p = new s(0), E = l.clone(); u.cmpn(1) > 0 && l.cmpn(1) > 0; ) {
          for (var _ = 0, g = 1; !(u.words[0] & g) && _ < 26; ++_, g <<= 1);
          if (_ > 0) for (u.iushrn(_); _-- > 0; ) d.isOdd() && d.iadd(E), d.iushrn(1);
          for (var a = 0, m = 1; !(l.words[0] & m) && a < 26; ++a, m <<= 1);
          if (a > 0) for (l.iushrn(a); a-- > 0; ) p.isOdd() && p.iadd(E), p.iushrn(1);
          u.cmp(l) >= 0 ? (u.isub(l), d.isub(p)) : (l.isub(u), p.isub(d));
        }
        var z;
        return u.cmpn(1) === 0 ? (z = d) : (z = p), z.cmpn(0) < 0 && z.iadd(o), z;
      }),
      (s.prototype.gcd = function (o) {
        if (this.isZero()) return o.abs();
        if (o.isZero()) return this.abs();
        var u = this.clone(),
          l = o.clone();
        (u.negative = 0), (l.negative = 0);
        for (var d = 0; u.isEven() && l.isEven(); d++) u.iushrn(1), l.iushrn(1);
        do {
          for (; u.isEven(); ) u.iushrn(1);
          for (; l.isEven(); ) l.iushrn(1);
          var p = u.cmp(l);
          if (p < 0) {
            var E = u;
            (u = l), (l = E);
          } else if (p === 0 || l.cmpn(1) === 0) break;
          u.isub(l);
        } while (!0);
        return l.iushln(d);
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
        var u = o % 26,
          l = (o - u) / 26,
          d = 1 << u;
        if (this.length <= l) return this._expand(l + 1), (this.words[l] |= d), this;
        for (var p = d, E = l; p !== 0 && E < this.length; E++) {
          var _ = this.words[E] | 0;
          (_ += p), (p = _ >>> 26), (_ &= 67108863), (this.words[E] = _);
        }
        return p !== 0 && ((this.words[E] = p), this.length++), this;
      }),
      (s.prototype.isZero = function () {
        return this.length === 1 && this.words[0] === 0;
      }),
      (s.prototype.cmpn = function (o) {
        var u = o < 0;
        if (this.negative !== 0 && !u) return -1;
        if (this.negative === 0 && u) return 1;
        this.strip();
        var l;
        if (this.length > 1) l = 1;
        else {
          u && (o = -o), i(o <= 67108863, 'Number is too big');
          var d = this.words[0] | 0;
          l = d === o ? 0 : d < o ? -1 : 1;
        }
        return this.negative !== 0 ? -l | 0 : l;
      }),
      (s.prototype.cmp = function (o) {
        if (this.negative !== 0 && o.negative === 0) return -1;
        if (this.negative === 0 && o.negative !== 0) return 1;
        var u = this.ucmp(o);
        return this.negative !== 0 ? -u | 0 : u;
      }),
      (s.prototype.ucmp = function (o) {
        if (this.length > o.length) return 1;
        if (this.length < o.length) return -1;
        for (var u = 0, l = this.length - 1; l >= 0; l--) {
          var d = this.words[l] | 0,
            p = o.words[l] | 0;
          if (d !== p) {
            d < p ? (u = -1) : d > p && (u = 1);
            break;
          }
        }
        return u;
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
        return new ut(o);
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
    function J(w, o) {
      (this.name = w),
        (this.p = new s(o, 16)),
        (this.n = this.p.bitLength()),
        (this.k = new s(1).iushln(this.n).isub(this.p)),
        (this.tmp = this._tmp());
    }
    (J.prototype._tmp = function () {
      var o = new s(null);
      return (o.words = new Array(Math.ceil(this.n / 13))), o;
    }),
      (J.prototype.ireduce = function (o) {
        var u = o,
          l;
        do
          this.split(u, this.tmp), (u = this.imulK(u)), (u = u.iadd(this.tmp)), (l = u.bitLength());
        while (l > this.n);
        var d = l < this.n ? -1 : u.ucmp(this.p);
        return (
          d === 0
            ? ((u.words[0] = 0), (u.length = 1))
            : d > 0
              ? u.isub(this.p)
              : u.strip !== void 0
                ? u.strip()
                : u._strip(),
          u
        );
      }),
      (J.prototype.split = function (o, u) {
        o.iushrn(this.n, 0, u);
      }),
      (J.prototype.imulK = function (o) {
        return o.imul(this.k);
      });
    function tt() {
      J.call(
        this,
        'k256',
        'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f'
      );
    }
    n(tt, J),
      (tt.prototype.split = function (o, u) {
        for (var l = 4194303, d = Math.min(o.length, 9), p = 0; p < d; p++) u.words[p] = o.words[p];
        if (((u.length = d), o.length <= 9)) {
          (o.words[0] = 0), (o.length = 1);
          return;
        }
        var E = o.words[9];
        for (u.words[u.length++] = E & l, p = 10; p < o.length; p++) {
          var _ = o.words[p] | 0;
          (o.words[p - 10] = ((_ & l) << 4) | (E >>> 22)), (E = _);
        }
        (E >>>= 22),
          (o.words[p - 10] = E),
          E === 0 && o.length > 10 ? (o.length -= 10) : (o.length -= 9);
      }),
      (tt.prototype.imulK = function (o) {
        (o.words[o.length] = 0), (o.words[o.length + 1] = 0), (o.length += 2);
        for (var u = 0, l = 0; l < o.length; l++) {
          var d = o.words[l] | 0;
          (u += d * 977), (o.words[l] = u & 67108863), (u = d * 64 + ((u / 67108864) | 0));
        }
        return (
          o.words[o.length - 1] === 0 && (o.length--, o.words[o.length - 1] === 0 && o.length--), o
        );
      });
    function Mt() {
      J.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
    }
    n(Mt, J);
    function se() {
      J.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
    }
    n(se, J);
    function de() {
      J.call(this, '25519', '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
    }
    n(de, J),
      (de.prototype.imulK = function (o) {
        for (var u = 0, l = 0; l < o.length; l++) {
          var d = (o.words[l] | 0) * 19 + u,
            p = d & 67108863;
          (d >>>= 26), (o.words[l] = p), (u = d);
        }
        return u !== 0 && (o.words[o.length++] = u), o;
      }),
      (s._prime = function (o) {
        if (Z[o]) return Z[o];
        var u;
        if (o === 'k256') u = new tt();
        else if (o === 'p224') u = new Mt();
        else if (o === 'p192') u = new se();
        else if (o === 'p25519') u = new de();
        else throw new Error('Unknown prime ' + o);
        return (Z[o] = u), u;
      });
    function ut(w) {
      if (typeof w == 'string') {
        var o = s._prime(w);
        (this.m = o.p), (this.prime = o);
      } else i(w.gtn(1), 'modulus must be greater than 1'), (this.m = w), (this.prime = null);
    }
    (ut.prototype._verify1 = function (o) {
      i(o.negative === 0, 'red works only with positives'),
        i(o.red, 'red works only with red numbers');
    }),
      (ut.prototype._verify2 = function (o, u) {
        i((o.negative | u.negative) === 0, 'red works only with positives'),
          i(o.red && o.red === u.red, 'red works only with red numbers');
      }),
      (ut.prototype.imod = function (o) {
        return this.prime ? this.prime.ireduce(o)._forceRed(this) : o.umod(this.m)._forceRed(this);
      }),
      (ut.prototype.neg = function (o) {
        return o.isZero() ? o.clone() : this.m.sub(o)._forceRed(this);
      }),
      (ut.prototype.add = function (o, u) {
        this._verify2(o, u);
        var l = o.add(u);
        return l.cmp(this.m) >= 0 && l.isub(this.m), l._forceRed(this);
      }),
      (ut.prototype.iadd = function (o, u) {
        this._verify2(o, u);
        var l = o.iadd(u);
        return l.cmp(this.m) >= 0 && l.isub(this.m), l;
      }),
      (ut.prototype.sub = function (o, u) {
        this._verify2(o, u);
        var l = o.sub(u);
        return l.cmpn(0) < 0 && l.iadd(this.m), l._forceRed(this);
      }),
      (ut.prototype.isub = function (o, u) {
        this._verify2(o, u);
        var l = o.isub(u);
        return l.cmpn(0) < 0 && l.iadd(this.m), l;
      }),
      (ut.prototype.shl = function (o, u) {
        return this._verify1(o), this.imod(o.ushln(u));
      }),
      (ut.prototype.imul = function (o, u) {
        return this._verify2(o, u), this.imod(o.imul(u));
      }),
      (ut.prototype.mul = function (o, u) {
        return this._verify2(o, u), this.imod(o.mul(u));
      }),
      (ut.prototype.isqr = function (o) {
        return this.imul(o, o.clone());
      }),
      (ut.prototype.sqr = function (o) {
        return this.mul(o, o);
      }),
      (ut.prototype.sqrt = function (o) {
        if (o.isZero()) return o.clone();
        var u = this.m.andln(3);
        if ((i(u % 2 === 1), u === 3)) {
          var l = this.m.add(new s(1)).iushrn(2);
          return this.pow(o, l);
        }
        for (var d = this.m.subn(1), p = 0; !d.isZero() && d.andln(1) === 0; ) p++, d.iushrn(1);
        i(!d.isZero());
        var E = new s(1).toRed(this),
          _ = E.redNeg(),
          g = this.m.subn(1).iushrn(1),
          a = this.m.bitLength();
        for (a = new s(2 * a * a).toRed(this); this.pow(a, g).cmp(_) !== 0; ) a.redIAdd(_);
        for (
          var m = this.pow(a, d), z = this.pow(o, d.addn(1).iushrn(1)), K = this.pow(o, d), q = p;
          K.cmp(E) !== 0;

        ) {
          for (var G = K, ot = 0; G.cmp(E) !== 0; ot++) G = G.redSqr();
          i(ot < q);
          var yt = this.pow(m, new s(1).iushln(q - ot - 1));
          (z = z.redMul(yt)), (m = yt.redSqr()), (K = K.redMul(m)), (q = ot);
        }
        return z;
      }),
      (ut.prototype.invm = function (o) {
        var u = o._invmp(this.m);
        return u.negative !== 0 ? ((u.negative = 0), this.imod(u).redNeg()) : this.imod(u);
      }),
      (ut.prototype.pow = function (o, u) {
        if (u.isZero()) return new s(1).toRed(this);
        if (u.cmpn(1) === 0) return o.clone();
        var l = 4,
          d = new Array(1 << l);
        (d[0] = new s(1).toRed(this)), (d[1] = o);
        for (var p = 2; p < d.length; p++) d[p] = this.mul(d[p - 1], o);
        var E = d[0],
          _ = 0,
          g = 0,
          a = u.bitLength() % 26;
        for (a === 0 && (a = 26), p = u.length - 1; p >= 0; p--) {
          for (var m = u.words[p], z = a - 1; z >= 0; z--) {
            var K = (m >> z) & 1;
            if ((E !== d[0] && (E = this.sqr(E)), K === 0 && _ === 0)) {
              g = 0;
              continue;
            }
            (_ <<= 1),
              (_ |= K),
              g++,
              !(g !== l && (p !== 0 || z !== 0)) && ((E = this.mul(E, d[_])), (g = 0), (_ = 0));
          }
          a = 26;
        }
        return E;
      }),
      (ut.prototype.convertTo = function (o) {
        var u = o.umod(this.m);
        return u === o ? u.clone() : u;
      }),
      (ut.prototype.convertFrom = function (o) {
        var u = o.clone();
        return (u.red = null), u;
      }),
      (s.mont = function (o) {
        return new be(o);
      });
    function be(w) {
      ut.call(this, w),
        (this.shift = this.m.bitLength()),
        this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
        (this.r = new s(1).iushln(this.shift)),
        (this.r2 = this.imod(this.r.sqr())),
        (this.rinv = this.r._invmp(this.m)),
        (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
        (this.minv = this.minv.umod(this.r)),
        (this.minv = this.r.sub(this.minv));
    }
    n(be, ut),
      (be.prototype.convertTo = function (o) {
        return this.imod(o.ushln(this.shift));
      }),
      (be.prototype.convertFrom = function (o) {
        var u = this.imod(o.mul(this.rinv));
        return (u.red = null), u;
      }),
      (be.prototype.imul = function (o, u) {
        if (o.isZero() || u.isZero()) return (o.words[0] = 0), (o.length = 1), o;
        var l = o.imul(u),
          d = l.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          p = l.isub(d).iushrn(this.shift),
          E = p;
        return (
          p.cmp(this.m) >= 0 ? (E = p.isub(this.m)) : p.cmpn(0) < 0 && (E = p.iadd(this.m)),
          E._forceRed(this)
        );
      }),
      (be.prototype.mul = function (o, u) {
        if (o.isZero() || u.isZero()) return new s(0)._forceRed(this);
        var l = o.mul(u),
          d = l.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          p = l.isub(d).iushrn(this.shift),
          E = p;
        return (
          p.cmp(this.m) >= 0 ? (E = p.isub(this.m)) : p.cmpn(0) < 0 && (E = p.iadd(this.m)),
          E._forceRed(this)
        );
      }),
      (be.prototype.invm = function (o) {
        var u = this.imod(o._invmp(this.m).mul(this.r2));
        return u._forceRed(this);
      });
  })(r, Ce);
})(Gs);
var Hi = Gs.exports;
Object.defineProperty(zi, '__esModule', { value: !0 });
var bi = Hi,
  _l = $o().ec,
  Vs = new _l('secp256k1'),
  Di = Vs.curve;
zi.privateKeyExport = function (r, t) {
  t === void 0 && (t = !0);
  var e = new bi(r);
  if (e.ucmp(Di.n) >= 0) throw new Error("couldn't export to DER format");
  var i = Vs.g.mul(e);
  return Fa(i.getX(), i.getY(), t);
};
zi.privateKeyModInverse = function (r) {
  var t = new bi(r);
  if (t.ucmp(Di.n) >= 0 || t.isZero()) throw new Error('private key range is invalid');
  return t.invm(Di.n).toArrayLike(H, 'be', 32);
};
zi.signatureImport = function (r) {
  var t = new bi(r.r);
  t.ucmp(Di.n) >= 0 && (t = new bi(0));
  var e = new bi(r.s);
  return (
    e.ucmp(Di.n) >= 0 && (e = new bi(0)),
    H.concat([t.toArrayLike(H, 'be', 32), e.toArrayLike(H, 'be', 32)])
  );
};
zi.ecdhUnsafe = function (r, t, e) {
  e === void 0 && (e = !0);
  var i = Vs.keyFromPublic(r),
    n = new bi(t);
  if (n.ucmp(Di.n) >= 0 || n.isZero()) throw new Error('scalar was invalid (zero or overflow)');
  var s = i.pub.mul(n);
  return Fa(s.getX(), s.getY(), e);
};
var Fa = function (r, t, e) {
    var i;
    return (
      e
        ? ((i = H.alloc(33)), (i[0] = t.isOdd() ? 3 : 2), r.toArrayLike(H, 'be', 32).copy(i, 1))
        : ((i = H.alloc(65)),
          (i[0] = 4),
          r.toArrayLike(H, 'be', 32).copy(i, 1),
          t.toArrayLike(H, 'be', 32).copy(i, 33)),
      i
    );
  },
  mn = {};
Object.defineProperty(mn, '__esModule', { value: !0 });
const { Buffer: rn } = jn;
var Pl = rn.from([
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
  kl = rn.from([
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
mn.privateKeyExport = function (r, t, e) {
  e === void 0 && (e = !0);
  var i = rn.from(e ? Pl : kl);
  return r.copy(i, e ? 8 : 9), t.copy(i, e ? 181 : 214), i;
};
mn.privateKeyImport = function (r) {
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
mn.signatureImportLax = function (r) {
  var t = rn.alloc(32, 0),
    e = rn.alloc(32, 0),
    i = r.length,
    n = 0;
  if (r[n++] !== 48) return null;
  var s = r[n++];
  if ((s & 128 && ((n += s - 128), n > i)) || r[n++] !== 2) return null;
  var f = r[n++];
  if (f & 128) {
    if (((s = f - 128), n + s > i)) return null;
    for (; s > 0 && r[n] === 0; n += 1, s -= 1);
    for (f = 0; s > 0; n += 1, s -= 1) f = (f << 8) + r[n];
  }
  if (f > i - n) return null;
  var c = n;
  if (((n += f), r[n++] !== 2)) return null;
  var v = r[n++];
  if (v & 128) {
    if (((s = v - 128), n + s > i)) return null;
    for (; s > 0 && r[n] === 0; n += 1, s -= 1);
    for (v = 0; s > 0; n += 1, s -= 1) v = (v << 8) + r[n];
  }
  if (v > i - n) return null;
  var b = n;
  for (n += v; f > 0 && r[c] === 0; f -= 1, c += 1);
  if (f > 32) return null;
  var S = r.slice(c, c + f);
  for (S.copy(t, 32 - S.length); v > 0 && r[b] === 0; v -= 1, b += 1);
  if (v > 32) return null;
  var P = r.slice(b, b + v);
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
  var t = Ua,
    e = zi,
    i = mn;
  (r.privateKeyVerify = function (n) {
    return n.length !== 32 ? !1 : t.privateKeyVerify(Uint8Array.from(n));
  }),
    (r.privateKeyExport = function (n, s) {
      if (n.length !== 32) throw new RangeError('private key length is invalid');
      var f = e.privateKeyExport(n, s);
      return i.privateKeyExport(n, f, s);
    }),
    (r.privateKeyImport = function (n) {
      if (((n = i.privateKeyImport(n)), n !== null && n.length === 32 && r.privateKeyVerify(n)))
        return n;
      throw new Error("couldn't import from DER format");
    }),
    (r.privateKeyNegate = function (n) {
      return H.from(t.privateKeyNegate(Uint8Array.from(n)));
    }),
    (r.privateKeyModInverse = function (n) {
      if (n.length !== 32) throw new Error('private key length is invalid');
      return H.from(e.privateKeyModInverse(Uint8Array.from(n)));
    }),
    (r.privateKeyTweakAdd = function (n, s) {
      return H.from(t.privateKeyTweakAdd(Uint8Array.from(n), s));
    }),
    (r.privateKeyTweakMul = function (n, s) {
      return H.from(t.privateKeyTweakMul(Uint8Array.from(n), Uint8Array.from(s)));
    }),
    (r.publicKeyCreate = function (n, s) {
      return H.from(t.publicKeyCreate(Uint8Array.from(n), s));
    }),
    (r.publicKeyConvert = function (n, s) {
      return H.from(t.publicKeyConvert(Uint8Array.from(n), s));
    }),
    (r.publicKeyVerify = function (n) {
      return n.length !== 33 && n.length !== 65 ? !1 : t.publicKeyVerify(Uint8Array.from(n));
    }),
    (r.publicKeyTweakAdd = function (n, s, f) {
      return H.from(t.publicKeyTweakAdd(Uint8Array.from(n), Uint8Array.from(s), f));
    }),
    (r.publicKeyTweakMul = function (n, s, f) {
      return H.from(t.publicKeyTweakMul(Uint8Array.from(n), Uint8Array.from(s), f));
    }),
    (r.publicKeyCombine = function (n, s) {
      var f = [];
      return (
        n.forEach(function (c) {
          f.push(Uint8Array.from(c));
        }),
        H.from(t.publicKeyCombine(f, s))
      );
    }),
    (r.signatureNormalize = function (n) {
      return H.from(t.signatureNormalize(Uint8Array.from(n)));
    }),
    (r.signatureExport = function (n) {
      return H.from(t.signatureExport(Uint8Array.from(n)));
    }),
    (r.signatureImport = function (n) {
      return H.from(t.signatureImport(Uint8Array.from(n)));
    }),
    (r.signatureImportLax = function (n) {
      if (n.length === 0) throw new RangeError('signature length is invalid');
      var s = i.signatureImportLax(n);
      if (s === null) throw new Error("couldn't parse DER signature");
      return e.signatureImport(s);
    }),
    (r.sign = function (n, s, f) {
      if (f === null) throw new TypeError('options should be an Object');
      var c = void 0;
      if (f) {
        if (((c = {}), f.data === null)) throw new TypeError('options.data should be a Buffer');
        if (f.data) {
          if (f.data.length != 32) throw new RangeError('options.data length is invalid');
          c.data = new Uint8Array(f.data);
        }
        if (f.noncefn === null) throw new TypeError('options.noncefn should be a Function');
        f.noncefn &&
          (c.noncefn = function (b, S, P, B, N) {
            var R = P != null ? H.from(P) : null,
              V = B != null ? H.from(B) : null,
              lt = H.from('');
            return f.noncefn && (lt = f.noncefn(H.from(b), H.from(S), R, V, N)), new Uint8Array(lt);
          });
      }
      var v = t.ecdsaSign(Uint8Array.from(n), Uint8Array.from(s), c);
      return { signature: H.from(v.signature), recovery: v.recid };
    }),
    (r.verify = function (n, s, f) {
      return t.ecdsaVerify(Uint8Array.from(s), Uint8Array.from(n), f);
    }),
    (r.recover = function (n, s, f, c) {
      return H.from(t.ecdsaRecover(Uint8Array.from(s), f, Uint8Array.from(n), c));
    }),
    (r.ecdh = function (n, s) {
      return H.from(t.ecdh(Uint8Array.from(n), Uint8Array.from(s), {}));
    }),
    (r.ecdhUnsafe = function (n, s, f) {
      if (n.length !== 33 && n.length !== 65) throw new RangeError('public key length is invalid');
      if (s.length !== 32) throw new RangeError('private key length is invalid');
      return H.from(e.ecdhUnsafe(Uint8Array.from(n), Uint8Array.from(s), f));
    });
})(Qn);
var Ka = function (t) {
    if (typeof t != 'string')
      throw new Error(
        "[is-hex-prefixed] value must be type 'string', is currently type " +
          typeof t +
          ', while checking isHexPrefixed.'
      );
    return t.slice(0, 2) === '0x';
  },
  Tl = Ka,
  Bl = function (t) {
    return typeof t != 'string' ? t : Tl(t) ? t.slice(2) : t;
  },
  Nl = Ka,
  za = Bl;
function Xn(r) {
  var t = r;
  if (typeof t != 'string')
    throw new Error(
      '[ethjs-util] while padding to even, value must be string, is currently ' +
        typeof t +
        ', while padToEven.'
    );
  return t.length % 2 && (t = '0' + t), t;
}
function Ha(r) {
  var t = r.toString(16);
  return '0x' + t;
}
function Cl(r) {
  var t = Ha(r);
  return new H(Xn(t.slice(2)), 'hex');
}
function Il(r) {
  if (typeof r != 'string')
    throw new Error(
      "[ethjs-util] while getting binary size, method getBinarySize requires input 'str' to be type String, got '" +
        typeof r +
        "'."
    );
  return H.byteLength(r, 'utf8');
}
function Rl(r, t, e) {
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
function Ll(r) {
  var t = new H(Xn(za(r).replace(/^0+|0+$/g, '')), 'hex');
  return t.toString('utf8');
}
function Ol(r) {
  var t = '',
    e = 0,
    i = r.length;
  for (r.substring(0, 2) === '0x' && (e = 2); e < i; e += 2) {
    var n = parseInt(r.substr(e, 2), 16);
    t += String.fromCharCode(n);
  }
  return t;
}
function Ul(r) {
  var t = new H(r, 'utf8');
  return '0x' + Xn(t.toString('hex')).replace(/^0+|0+$/g, '');
}
function Dl(r) {
  for (var t = '', e = 0; e < r.length; e++) {
    var i = r.charCodeAt(e),
      n = i.toString(16);
    t += n.length < 2 ? '0' + n : n;
  }
  return '0x' + t;
}
function Fl(r, t, e) {
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
function Kl(r, t) {
  return !(typeof r != 'string' || !r.match(/^0x[0-9A-Fa-f]*$/) || (t && r.length !== 2 + 2 * t));
}
var qi = {
    arrayContainsArray: Rl,
    intToBuffer: Cl,
    getBinarySize: Il,
    isHexPrefixed: Nl,
    stripHexPrefix: za,
    padToEven: Xn,
    intToHex: Ha,
    fromAscii: Dl,
    fromUtf8: Ul,
    toAscii: Ol,
    toUtf8: Ll,
    getKeys: Fl,
    isHexString: Kl,
  },
  Zr = {},
  zl =
    (Ce && Ce.__importDefault) ||
    function (r) {
      return r && r.__esModule ? r : { default: r };
    };
Object.defineProperty(Zr, '__esModule', { value: !0 });
Zr.getLength = Zr.decode = Zr.encode = void 0;
var Hl = zl(ku());
function qa(r) {
  if (Array.isArray(r)) {
    for (var t = [], e = 0; e < r.length; e++) t.push(qa(r[e]));
    var i = H.concat(t);
    return H.concat([xo(i.length, 192), i]);
  } else {
    var n = js(r);
    return n.length === 1 && n[0] < 128 ? n : H.concat([xo(n.length, 128), n]);
  }
}
Zr.encode = qa;
function xs(r, t) {
  if (r[0] === '0' && r[1] === '0') throw new Error('invalid RLP: extra zeros');
  return parseInt(r, t);
}
function xo(r, t) {
  if (r < 56) return H.from([r + t]);
  var e = Ss(r),
    i = e.length / 2,
    n = Ss(t + 55 + i);
  return H.from(n + e, 'hex');
}
function ql(r, t) {
  if ((t === void 0 && (t = !1), !r || r.length === 0)) return H.from([]);
  var e = js(r),
    i = Ms(e);
  if (t) return i;
  if (i.remainder.length !== 0) throw new Error('invalid remainder');
  return i.data;
}
Zr.decode = ql;
function Gl(r) {
  if (!r || r.length === 0) return H.from([]);
  var t = js(r),
    e = t[0];
  if (e <= 127) return t.length;
  if (e <= 183) return e - 127;
  if (e <= 191) return e - 182;
  if (e <= 247) return e - 191;
  var i = e - 246,
    n = xs(t.slice(1, i).toString('hex'), 16);
  return i + n;
}
Zr.getLength = Gl;
function Ms(r) {
  var t,
    e,
    i,
    n,
    s,
    f = [],
    c = r[0];
  if (c <= 127) return { data: r.slice(0, 1), remainder: r.slice(1) };
  if (c <= 183) {
    if (((t = c - 127), c === 128 ? (i = H.from([])) : (i = r.slice(1, t)), t === 2 && i[0] < 128))
      throw new Error('invalid rlp encoding: byte must be less 0x80');
    return { data: i, remainder: r.slice(t) };
  } else if (c <= 191) {
    if (((e = c - 182), r.length - 1 < e))
      throw new Error('invalid RLP: not enough bytes for string length');
    if (((t = xs(r.slice(1, e).toString('hex'), 16)), t <= 55))
      throw new Error('invalid RLP: expected string length to be greater than 55');
    if (((i = r.slice(e, t + e)), i.length < t))
      throw new Error('invalid RLP: not enough bytes for string');
    return { data: i, remainder: r.slice(t + e) };
  } else if (c <= 247) {
    for (t = c - 191, n = r.slice(1, t); n.length; ) (s = Ms(n)), f.push(s.data), (n = s.remainder);
    return { data: f, remainder: r.slice(t) };
  } else {
    (e = c - 246), (t = xs(r.slice(1, e).toString('hex'), 16));
    var v = e + t;
    if (v > r.length) throw new Error('invalid rlp: total length is larger than the data');
    if (((n = r.slice(e, v)), n.length === 0))
      throw new Error('invalid rlp, List has a invalid length');
    for (; n.length; ) (s = Ms(n)), f.push(s.data), (n = s.remainder);
    return { data: f, remainder: r.slice(v) };
  }
}
function Ga(r) {
  return r.slice(0, 2) === '0x';
}
function Vl(r) {
  return typeof r != 'string' ? r : Ga(r) ? r.slice(2) : r;
}
function Ss(r) {
  if (r < 0) throw new Error('Invalid integer as argument, must be unsigned!');
  var t = r.toString(16);
  return t.length % 2 ? '0' + t : t;
}
function jl(r) {
  return r.length % 2 ? '0' + r : r;
}
function Wl(r) {
  var t = Ss(r);
  return H.from(t, 'hex');
}
function js(r) {
  if (!H.isBuffer(r)) {
    if (typeof r == 'string') return Ga(r) ? H.from(jl(Vl(r)), 'hex') : H.from(r);
    if (typeof r == 'number' || typeof r == 'bigint') return r ? Wl(r) : H.from([]);
    if (r == null) return H.from([]);
    if (r instanceof Uint8Array) return H.from(r);
    if (Hl.default.isBN(r)) return H.from(r.toArray());
    throw new Error('invalid type');
  }
  return r;
}
var Va = {};
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
  var t = Hi;
  const { Buffer: e } = jn;
  (r.MAX_INTEGER = new t('ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', 16)),
    (r.TWO_POW256 = new t('10000000000000000000000000000000000000000000000000000000000000000', 16)),
    (r.KECCAK256_NULL_S = 'c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470'),
    (r.KECCAK256_NULL = e.from(r.KECCAK256_NULL_S, 'hex')),
    (r.KECCAK256_RLP_ARRAY_S = '1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347'),
    (r.KECCAK256_RLP_ARRAY = e.from(r.KECCAK256_RLP_ARRAY_S, 'hex')),
    (r.KECCAK256_RLP_S = '56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421'),
    (r.KECCAK256_RLP = e.from(r.KECCAK256_RLP_S, 'hex'));
})(Va);
var ja = {},
  Gi = {};
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
  var t = qi,
    e = Hi;
  (r.zeros = function (i) {
    return H.allocUnsafe(i).fill(0);
  }),
    (r.setLengthLeft = function (i, n, s) {
      s === void 0 && (s = !1);
      var f = r.zeros(n);
      return (
        (i = r.toBuffer(i)),
        s
          ? i.length < n
            ? (i.copy(f), f)
            : i.slice(0, n)
          : i.length < n
            ? (i.copy(f, n - i.length), f)
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
      if (!H.isBuffer(i))
        if (Array.isArray(i)) i = H.from(i);
        else if (typeof i == 'string')
          if (t.isHexString(i)) i = H.from(t.padToEven(t.stripHexPrefix(i)), 'hex');
          else
            throw new Error(
              'Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: ' +
                i
            );
        else if (typeof i == 'number') i = t.intToBuffer(i);
        else if (i == null) i = H.allocUnsafe(0);
        else if (e.isBN(i)) i = i.toArrayLike(H);
        else if (i.toArray) i = H.from(i.toArray());
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
      return H.from(i.toTwos(256).toArray());
    }),
    (r.addHexPrefix = function (i) {
      return typeof i != 'string' || t.isHexPrefixed(i) ? i : '0x' + i;
    }),
    (r.baToJSON = function (i) {
      if (H.isBuffer(i)) return '0x' + i.toString('hex');
      if (i instanceof Array) {
        for (var n = [], s = 0; s < i.length; s++) n.push(r.baToJSON(i[s]));
        return n;
      }
    });
})(Gi);
var ts = {},
  Vi = {},
  Ws = {};
Object.defineProperty(Ws, '__esModule', { value: !0 });
function Jl(r) {
  return function (t) {
    var e = r();
    return e.update(t), H.from(e.digest());
  };
}
Ws.createHashFunction = Jl;
const { Transform: Yl } = Xo;
var Zl = (r) =>
  class Wa extends Yl {
    constructor(e, i, n, s, f) {
      super(f),
        (this._rate = e),
        (this._capacity = i),
        (this._delimitedSuffix = n),
        (this._hashBitLength = s),
        (this._options = f),
        (this._state = new r()),
        this._state.initialize(e, i),
        (this._finalized = !1);
    }
    _transform(e, i, n) {
      let s = null;
      try {
        this.update(e, i);
      } catch (f) {
        s = f;
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
      if (!H.isBuffer(e) && typeof e != 'string')
        throw new TypeError('Data must be a string or a buffer');
      if (this._finalized) throw new Error('Digest already called');
      return H.isBuffer(e) || (e = H.from(e, i)), this._state.absorb(e), this;
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
      const e = new Wa(
        this._rate,
        this._capacity,
        this._delimitedSuffix,
        this._hashBitLength,
        this._options
      );
      return this._state.copy(e._state), (e._finalized = this._finalized), e;
    }
  };
const { Transform: Ql } = Xo;
var $l = (r) =>
  class Ja extends Ql {
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
      } catch (f) {
        s = f;
      }
      n(s);
    }
    _flush() {}
    _read(e) {
      this.push(this.squeeze(e));
    }
    update(e, i) {
      if (!H.isBuffer(e) && typeof e != 'string')
        throw new TypeError('Data must be a string or a buffer');
      if (this._finalized) throw new Error('Squeeze already called');
      return H.isBuffer(e) || (e = H.from(e, i)), this._state.absorb(e), this;
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
      const e = new Ja(this._rate, this._capacity, this._delimitedSuffix, this._options);
      return this._state.copy(e._state), (e._finalized = this._finalized), e;
    }
  };
const Xl = Zl,
  th = $l;
var eh = function (r) {
    const t = Xl(r),
      e = th(r);
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
  Ya = {};
const Mo = [
  1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545,
  2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139,
  2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0,
  2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424,
  2147483648,
];
Ya.p1600 = function (r) {
  for (let t = 0; t < 24; ++t) {
    const e = r[0] ^ r[10] ^ r[20] ^ r[30] ^ r[40],
      i = r[1] ^ r[11] ^ r[21] ^ r[31] ^ r[41],
      n = r[2] ^ r[12] ^ r[22] ^ r[32] ^ r[42],
      s = r[3] ^ r[13] ^ r[23] ^ r[33] ^ r[43],
      f = r[4] ^ r[14] ^ r[24] ^ r[34] ^ r[44],
      c = r[5] ^ r[15] ^ r[25] ^ r[35] ^ r[45],
      v = r[6] ^ r[16] ^ r[26] ^ r[36] ^ r[46],
      b = r[7] ^ r[17] ^ r[27] ^ r[37] ^ r[47],
      S = r[8] ^ r[18] ^ r[28] ^ r[38] ^ r[48],
      P = r[9] ^ r[19] ^ r[29] ^ r[39] ^ r[49];
    let B = S ^ ((n << 1) | (s >>> 31)),
      N = P ^ ((s << 1) | (n >>> 31));
    const R = r[0] ^ B,
      V = r[1] ^ N,
      lt = r[10] ^ B,
      $ = r[11] ^ N,
      C = r[20] ^ B,
      Z = r[21] ^ N,
      J = r[30] ^ B,
      tt = r[31] ^ N,
      Mt = r[40] ^ B,
      se = r[41] ^ N;
    (B = e ^ ((f << 1) | (c >>> 31))), (N = i ^ ((c << 1) | (f >>> 31)));
    const de = r[2] ^ B,
      ut = r[3] ^ N,
      be = r[12] ^ B,
      w = r[13] ^ N,
      o = r[22] ^ B,
      u = r[23] ^ N,
      l = r[32] ^ B,
      d = r[33] ^ N,
      p = r[42] ^ B,
      E = r[43] ^ N;
    (B = n ^ ((v << 1) | (b >>> 31))), (N = s ^ ((b << 1) | (v >>> 31)));
    const _ = r[4] ^ B,
      g = r[5] ^ N,
      a = r[14] ^ B,
      m = r[15] ^ N,
      z = r[24] ^ B,
      K = r[25] ^ N,
      q = r[34] ^ B,
      G = r[35] ^ N,
      ot = r[44] ^ B,
      yt = r[45] ^ N;
    (B = f ^ ((S << 1) | (P >>> 31))), (N = c ^ ((P << 1) | (S >>> 31)));
    const ke = r[6] ^ B,
      pt = r[7] ^ N,
      St = r[16] ^ B,
      Nr = r[17] ^ N,
      Dt = r[26] ^ B,
      Yt = r[27] ^ N,
      Kr = r[36] ^ B,
      ee = r[37] ^ N,
      re = r[46] ^ B,
      Cr = r[47] ^ N;
    (B = v ^ ((e << 1) | (i >>> 31))), (N = b ^ ((i << 1) | (e >>> 31)));
    const Zt = r[8] ^ B,
      Bt = r[9] ^ N,
      cr = r[18] ^ B,
      Qt = r[19] ^ N,
      Gt = r[28] ^ B,
      br = r[29] ^ N,
      Ft = r[38] ^ B,
      Vt = r[39] ^ N,
      dr = r[48] ^ B,
      jt = r[49] ^ N,
      Kt = R,
      Ar = V,
      $t = ($ << 4) | (lt >>> 28),
      zt = (lt << 4) | ($ >>> 28),
      gr = (C << 3) | (Z >>> 29),
      Ot = (Z << 3) | (C >>> 29),
      It = (tt << 9) | (J >>> 23),
      Xe = (J << 9) | (tt >>> 23),
      Rt = (Mt << 18) | (se >>> 14),
      Ut = (se << 18) | (Mt >>> 14),
      ar = (de << 1) | (ut >>> 31),
      Lt = (ut << 1) | (de >>> 31),
      Ht = (w << 12) | (be >>> 20),
      Er = (be << 12) | (w >>> 20),
      Xt = (o << 10) | (u >>> 22),
      te = (u << 10) | (o >>> 22),
      qe = (d << 13) | (l >>> 19),
      Tt = (l << 13) | (d >>> 19),
      Nt = (p << 2) | (E >>> 30),
      pr = (E << 2) | (p >>> 30),
      qt = (g << 30) | (_ >>> 2),
      Wt = (_ << 30) | (g >>> 2),
      Ir = (a << 6) | (m >>> 26),
      wt = (m << 6) | (a >>> 26),
      Jt = (K << 11) | (z >>> 21),
      y = (z << 11) | (K >>> 21),
      x = (q << 15) | (G >>> 17),
      A = (G << 15) | (q >>> 17),
      h = (yt << 29) | (ot >>> 3),
      M = (ot << 29) | (yt >>> 3),
      T = (ke << 28) | (pt >>> 4),
      I = (pt << 28) | (ke >>> 4),
      L = (Nr << 23) | (St >>> 9),
      F = (St << 23) | (Nr >>> 9),
      ct = (Dt << 25) | (Yt >>> 7),
      et = (Yt << 25) | (Dt >>> 7),
      ie = (Kr << 21) | (ee >>> 11),
      nt = (ee << 21) | (Kr >>> 11),
      bt = (Cr << 24) | (re >>> 8),
      At = (re << 24) | (Cr >>> 8),
      kt = (Zt << 27) | (Bt >>> 5),
      Pt = (Bt << 27) | (Zt >>> 5),
      Et = (cr << 20) | (Qt >>> 12),
      _t = (Qt << 20) | (cr >>> 12),
      xt = (br << 7) | (Gt >>> 25),
      at = (Gt << 7) | (br >>> 25),
      dt = (Ft << 8) | (Vt >>> 24),
      rt = (Vt << 8) | (Ft >>> 24),
      ft = (dr << 14) | (jt >>> 18),
      ht = (jt << 14) | (dr >>> 18);
    (r[0] = Kt ^ (~Ht & Jt)),
      (r[1] = Ar ^ (~Er & y)),
      (r[10] = T ^ (~Et & gr)),
      (r[11] = I ^ (~_t & Ot)),
      (r[20] = ar ^ (~Ir & ct)),
      (r[21] = Lt ^ (~wt & et)),
      (r[30] = kt ^ (~$t & Xt)),
      (r[31] = Pt ^ (~zt & te)),
      (r[40] = qt ^ (~L & xt)),
      (r[41] = Wt ^ (~F & at)),
      (r[2] = Ht ^ (~Jt & ie)),
      (r[3] = Er ^ (~y & nt)),
      (r[12] = Et ^ (~gr & qe)),
      (r[13] = _t ^ (~Ot & Tt)),
      (r[22] = Ir ^ (~ct & dt)),
      (r[23] = wt ^ (~et & rt)),
      (r[32] = $t ^ (~Xt & x)),
      (r[33] = zt ^ (~te & A)),
      (r[42] = L ^ (~xt & It)),
      (r[43] = F ^ (~at & Xe)),
      (r[4] = Jt ^ (~ie & ft)),
      (r[5] = y ^ (~nt & ht)),
      (r[14] = gr ^ (~qe & h)),
      (r[15] = Ot ^ (~Tt & M)),
      (r[24] = ct ^ (~dt & Rt)),
      (r[25] = et ^ (~rt & Ut)),
      (r[34] = Xt ^ (~x & bt)),
      (r[35] = te ^ (~A & At)),
      (r[44] = xt ^ (~It & Nt)),
      (r[45] = at ^ (~Xe & pr)),
      (r[6] = ie ^ (~ft & Kt)),
      (r[7] = nt ^ (~ht & Ar)),
      (r[16] = qe ^ (~h & T)),
      (r[17] = Tt ^ (~M & I)),
      (r[26] = dt ^ (~Rt & ar)),
      (r[27] = rt ^ (~Ut & Lt)),
      (r[36] = x ^ (~bt & kt)),
      (r[37] = A ^ (~At & Pt)),
      (r[46] = It ^ (~Nt & qt)),
      (r[47] = Xe ^ (~pr & Wt)),
      (r[8] = ft ^ (~Kt & Ht)),
      (r[9] = ht ^ (~Ar & Er)),
      (r[18] = h ^ (~T & Et)),
      (r[19] = M ^ (~I & _t)),
      (r[28] = Rt ^ (~ar & Ir)),
      (r[29] = Ut ^ (~Lt & wt)),
      (r[38] = bt ^ (~kt & $t)),
      (r[39] = At ^ (~Pt & zt)),
      (r[48] = Nt ^ (~qt & L)),
      (r[49] = pr ^ (~Wt & F)),
      (r[0] ^= Mo[t * 2]),
      (r[1] ^= Mo[t * 2 + 1]);
  }
};
const zn = Ya;
function ji() {
  (this.state = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
    (this.blockSize = null),
    (this.count = 0),
    (this.squeezing = !1);
}
ji.prototype.initialize = function (r, t) {
  for (let e = 0; e < 50; ++e) this.state[e] = 0;
  (this.blockSize = r / 8), (this.count = 0), (this.squeezing = !1);
};
ji.prototype.absorb = function (r) {
  for (let t = 0; t < r.length; ++t)
    (this.state[~~(this.count / 4)] ^= r[t] << (8 * (this.count % 4))),
      (this.count += 1),
      this.count === this.blockSize && (zn.p1600(this.state), (this.count = 0));
};
ji.prototype.absorbLastFewBits = function (r) {
  (this.state[~~(this.count / 4)] ^= r << (8 * (this.count % 4))),
    r & 128 && this.count === this.blockSize - 1 && zn.p1600(this.state),
    (this.state[~~((this.blockSize - 1) / 4)] ^= 128 << (8 * ((this.blockSize - 1) % 4))),
    zn.p1600(this.state),
    (this.count = 0),
    (this.squeezing = !0);
};
ji.prototype.squeeze = function (r) {
  this.squeezing || this.absorbLastFewBits(1);
  const t = H.alloc(r);
  for (let e = 0; e < r; ++e)
    (t[e] = (this.state[~~(this.count / 4)] >>> (8 * (this.count % 4))) & 255),
      (this.count += 1),
      this.count === this.blockSize && (zn.p1600(this.state), (this.count = 0));
  return t;
};
ji.prototype.copy = function (r) {
  for (let t = 0; t < 50; ++t) r.state[t] = this.state[t];
  (r.blockSize = this.blockSize), (r.count = this.count), (r.squeezing = this.squeezing);
};
var rh = ji,
  ih = eh(rh);
Object.defineProperty(Vi, '__esModule', { value: !0 });
var es = Ws,
  rs = ih;
Vi.keccak224 = es.createHashFunction(function () {
  return rs('keccak224');
});
Vi.keccak256 = es.createHashFunction(function () {
  return rs('keccak256');
});
Vi.keccak384 = es.createHashFunction(function () {
  return rs('keccak384');
});
Vi.keccak512 = es.createHashFunction(function () {
  return rs('keccak512');
});
(function (r) {
  Object.defineProperty(r, '__esModule', { value: !0 }),
    (r.rlphash = r.ripemd160 = r.sha256 = r.keccak256 = r.keccak = void 0);
  var t = Vi,
    e = t.keccak224,
    i = t.keccak384,
    n = t.keccak256,
    s = t.keccak512,
    f = Tu,
    c = qi,
    v = Zr,
    b = Gi;
  (r.keccak = function (S, P) {
    switch (
      (P === void 0 && (P = 256),
      typeof S == 'string' && !c.isHexString(S) ? (S = H.from(S, 'utf8')) : (S = b.toBuffer(S)),
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
      return (S = b.toBuffer(S)), f('sha256').update(S).digest();
    }),
    (r.ripemd160 = function (S, P) {
      S = b.toBuffer(S);
      var B = f('rmd160').update(S).digest();
      return P === !0 ? b.setLength(B, 32) : B;
    }),
    (r.rlphash = function (S) {
      return r.keccak(v.encode(S));
    });
})(ts);
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
  var t = ta(),
    e = qi,
    i = Qn,
    n = Hi,
    s = Gi,
    f = ts;
  (r.zeroAddress = function () {
    var c = 20,
      v = s.zeros(c);
    return s.bufferToHex(v);
  }),
    (r.isValidAddress = function (c) {
      return /^0x[0-9a-fA-F]{40}$/.test(c);
    }),
    (r.isZeroAddress = function (c) {
      var v = r.zeroAddress();
      return v === s.addHexPrefix(c);
    }),
    (r.toChecksumAddress = function (c, v) {
      c = e.stripHexPrefix(c).toLowerCase();
      for (
        var b = v !== void 0 ? v.toString() + '0x' : '',
          S = f.keccak(b + c).toString('hex'),
          P = '0x',
          B = 0;
        B < c.length;
        B++
      )
        parseInt(S[B], 16) >= 8 ? (P += c[B].toUpperCase()) : (P += c[B]);
      return P;
    }),
    (r.isValidChecksumAddress = function (c, v) {
      return r.isValidAddress(c) && r.toChecksumAddress(c, v) === c;
    }),
    (r.generateAddress = function (c, v) {
      c = s.toBuffer(c);
      var b = new n(v);
      return b.isZero()
        ? f.rlphash([c, null]).slice(-20)
        : f.rlphash([c, H.from(b.toArray())]).slice(-20);
    }),
    (r.generateAddress2 = function (c, v, b) {
      var S = s.toBuffer(c),
        P = s.toBuffer(v),
        B = s.toBuffer(b);
      t(S.length === 20), t(P.length === 32);
      var N = f.keccak256(H.concat([H.from('ff', 'hex'), S, P, f.keccak256(B)]));
      return N.slice(-20);
    }),
    (r.isPrecompiled = function (c) {
      var v = s.unpad(c);
      return v.length === 1 && v[0] >= 1 && v[0] <= 8;
    }),
    (r.isValidPrivate = function (c) {
      return i.privateKeyVerify(c);
    }),
    (r.isValidPublic = function (c, v) {
      return (
        v === void 0 && (v = !1),
        c.length === 64
          ? i.publicKeyVerify(H.concat([H.from([4]), c]))
          : v
            ? i.publicKeyVerify(c)
            : !1
      );
    }),
    (r.pubToAddress = function (c, v) {
      return (
        v === void 0 && (v = !1),
        (c = s.toBuffer(c)),
        v && c.length !== 64 && (c = i.publicKeyConvert(c, !1).slice(1)),
        t(c.length === 64),
        f.keccak(c).slice(-20)
      );
    }),
    (r.publicToAddress = r.pubToAddress),
    (r.privateToAddress = function (c) {
      return r.publicToAddress(r.privateToPublic(c));
    }),
    (r.privateToPublic = function (c) {
      return (c = s.toBuffer(c)), i.publicKeyCreate(c, !1).slice(1);
    }),
    (r.importPublic = function (c) {
      return (c = s.toBuffer(c)), c.length !== 64 && (c = i.publicKeyConvert(c, !1).slice(1)), c;
    });
})(ja);
var lr = {};
Object.defineProperty(lr, '__esModule', { value: !0 });
lr.hashPersonalMessage =
  lr.isValidSignature =
  lr.fromRpcSig =
  lr.toRpcSig =
  lr.ecrecover =
  lr.ecsign =
    void 0;
var _s = Qn,
  bn = Hi,
  Ai = Gi,
  nh = ts;
lr.ecsign = function (r, t, e) {
  var i = _s.sign(r, t),
    n = i.recovery,
    s = {
      r: i.signature.slice(0, 32),
      s: i.signature.slice(32, 64),
      v: e ? n + (e * 2 + 35) : n + 27,
    };
  return s;
};
lr.ecrecover = function (r, t, e, i, n) {
  var s = H.concat([Ai.setLength(e, 32), Ai.setLength(i, 32)], 64),
    f = Js(t, n);
  if (!Ys(f)) throw new Error('Invalid signature v value');
  var c = _s.recover(r, s, f);
  return _s.publicKeyConvert(c, !1).slice(1);
};
lr.toRpcSig = function (r, t, e, i) {
  var n = Js(r, i);
  if (!Ys(n)) throw new Error('Invalid signature v value');
  return Ai.bufferToHex(
    H.concat([Ai.setLengthLeft(t, 32), Ai.setLengthLeft(e, 32), Ai.toBuffer(r)])
  );
};
lr.fromRpcSig = function (r) {
  var t = Ai.toBuffer(r);
  if (t.length !== 65) throw new Error('Invalid signature length');
  var e = t[64];
  return e < 27 && (e += 27), { v: e, r: t.slice(0, 32), s: t.slice(32, 64) };
};
lr.isValidSignature = function (r, t, e, i, n) {
  i === void 0 && (i = !0);
  var s = new bn('7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0', 16),
    f = new bn('fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141', 16);
  if (t.length !== 32 || e.length !== 32 || !Ys(Js(r, n))) return !1;
  var c = new bn(t),
    v = new bn(e);
  return !(c.isZero() || c.gt(f) || v.isZero() || v.gt(f) || (i && v.cmp(s) === 1));
};
lr.hashPersonalMessage = function (r) {
  var t = H.from(
    `Ethereum Signed Message:
` + r.length.toString(),
    'utf-8'
  );
  return nh.keccak(H.concat([t, r]));
};
function Js(r, t) {
  return t ? r - (2 * t + 35) : r - 27;
}
function Ys(r) {
  return r === 0 || r === 1;
}
var is = {};
Object.defineProperty(is, '__esModule', { value: !0 });
is.defineProperties = void 0;
var So = ta(),
  sh = qi,
  _o = Zr,
  An = Gi;
is.defineProperties = function (r, t, e) {
  if (
    ((r.raw = []),
    (r._fields = []),
    (r.toJSON = function (n) {
      if ((n === void 0 && (n = !1), n)) {
        var s = {};
        return (
          r._fields.forEach(function (f) {
            s[f] = '0x' + r[f].toString('hex');
          }),
          s
        );
      }
      return An.baToJSON(r.raw);
    }),
    (r.serialize = function () {
      return _o.encode(r.raw);
    }),
    t.forEach(function (n, s) {
      r._fields.push(n.name);
      function f() {
        return r.raw[s];
      }
      function c(v) {
        (v = An.toBuffer(v)),
          v.toString('hex') === '00' && !n.allowZero && (v = H.allocUnsafe(0)),
          n.allowLess && n.length
            ? ((v = An.stripZeros(v)),
              So(
                n.length >= v.length,
                'The field ' + n.name + ' must not have more ' + n.length + ' bytes'
              ))
            : !(n.allowZero && v.length === 0) &&
              n.length &&
              So(
                n.length === v.length,
                'The field ' + n.name + ' must have byte length of ' + n.length
              ),
          (r.raw[s] = v);
      }
      Object.defineProperty(r, n.name, { enumerable: !0, configurable: !0, get: f, set: c }),
        n.default && (r[n.name] = n.default),
        n.alias &&
          Object.defineProperty(r, n.alias, { enumerable: !1, configurable: !0, set: c, get: f });
    }),
    e)
  )
    if (
      (typeof e == 'string' && (e = H.from(sh.stripHexPrefix(e), 'hex')),
      H.isBuffer(e) && (e = _o.decode(e)),
      Array.isArray(e))
    ) {
      if (e.length > r._fields.length) throw new Error('wrong number of fields in data');
      e.forEach(function (n, s) {
        r[r._fields[s]] = An.toBuffer(n);
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
      (Ce && Ce.__createBinding) ||
      (Object.create
        ? function (c, v, b, S) {
            S === void 0 && (S = b),
              Object.defineProperty(c, S, {
                enumerable: !0,
                get: function () {
                  return v[b];
                },
              });
          }
        : function (c, v, b, S) {
            S === void 0 && (S = b), (c[S] = v[b]);
          }),
    e =
      (Ce && Ce.__exportStar) ||
      function (c, v) {
        for (var b in c) b !== 'default' && !v.hasOwnProperty(b) && t(v, c, b);
      };
  Object.defineProperty(r, '__esModule', { value: !0 }), (r.secp256k1 = r.rlp = r.BN = void 0);
  var i = Qn;
  r.secp256k1 = i;
  var n = qi,
    s = Hi;
  r.BN = s;
  var f = Zr;
  (r.rlp = f), Object.assign(r, n), e(Va, r), e(ja, r), e(ts, r), e(lr, r), e(Gi, r), e(is, r);
})(pn);
var Ze = {};
Object.defineProperty(Ze, '__esModule', { value: !0 });
Ze.normalize =
  Ze.recoverPublicKey =
  Ze.concatSig =
  Ze.legacyToBuffer =
  Ze.isNullish =
  Ze.padWithZeroes =
    void 0;
const _r = pn,
  Ps = qi;
function ks(r, t) {
  if (r !== '' && !/^[a-f0-9]+$/iu.test(r))
    throw new Error(`Expected an unprefixed hex string. Received: ${r}`);
  if (t < 0) throw new Error(`Expected a non-negative integer target length. Received: ${t}`);
  return String.prototype.padStart.call(r, t, '0');
}
Ze.padWithZeroes = ks;
function oh(r) {
  return r == null;
}
Ze.isNullish = oh;
function ah(r) {
  return typeof r == 'string' && !Ps.isHexString(r) ? H.from(r) : _r.toBuffer(r);
}
Ze.legacyToBuffer = ah;
function uh(r, t, e) {
  const i = _r.fromSigned(t),
    n = _r.fromSigned(e),
    s = _r.bufferToInt(r),
    f = ks(_r.toUnsigned(i).toString('hex'), 64),
    c = ks(_r.toUnsigned(n).toString('hex'), 64),
    v = Ps.stripHexPrefix(Ps.intToHex(s));
  return _r.addHexPrefix(f.concat(c, v));
}
Ze.concatSig = uh;
function fh(r, t) {
  const e = _r.fromRpcSig(t);
  return _r.ecrecover(r, e.v, e.r, e.s);
}
Ze.recoverPublicKey = fh;
function lh(r) {
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
Ze.normalize = lh;
Object.defineProperty(ci, '__esModule', { value: !0 });
ci.extractPublicKey = ci.recoverPersonalSignature = ci.personalSign = void 0;
const Li = pn,
  Jr = Ze;
function hh({ privateKey: r, data: t }) {
  if (Jr.isNullish(t)) throw new Error('Missing data parameter');
  if (Jr.isNullish(r)) throw new Error('Missing privateKey parameter');
  const e = Jr.legacyToBuffer(t),
    i = Li.hashPersonalMessage(e),
    n = Li.ecsign(i, r);
  return Jr.concatSig(Li.toBuffer(n.v), n.r, n.s);
}
ci.personalSign = hh;
function ch({ data: r, signature: t }) {
  if (Jr.isNullish(r)) throw new Error('Missing data parameter');
  if (Jr.isNullish(t)) throw new Error('Missing signature parameter');
  const e = Za(r, t),
    i = Li.publicToAddress(e);
  return Li.bufferToHex(i);
}
ci.recoverPersonalSignature = ch;
function dh({ data: r, signature: t }) {
  if (Jr.isNullish(r)) throw new Error('Missing data parameter');
  if (Jr.isNullish(t)) throw new Error('Missing signature parameter');
  return `0x${Za(r, t).toString('hex')}`;
}
ci.extractPublicKey = dh;
function Za(r, t) {
  const e = Li.hashPersonalMessage(Jr.legacyToBuffer(r));
  return Jr.recoverPublicKey(e, t);
}
var Qa = {},
  Zs = { exports: {} };
Zs.exports;
(function (r) {
  (function (t, e) {
    function i(w, o) {
      if (!w) throw new Error(o || 'Assertion failed');
    }
    function n(w, o) {
      w.super_ = o;
      var u = function () {};
      (u.prototype = o.prototype), (w.prototype = new u()), (w.prototype.constructor = w);
    }
    function s(w, o, u) {
      if (s.isBN(w)) return w;
      (this.negative = 0),
        (this.words = null),
        (this.length = 0),
        (this.red = null),
        w !== null &&
          ((o === 'le' || o === 'be') && ((u = o), (o = 10)),
          this._init(w || 0, o || 10, u || 'be'));
    }
    typeof t == 'object' ? (t.exports = s) : (e.BN = s), (s.BN = s), (s.wordSize = 26);
    var f;
    try {
      typeof window < 'u' && typeof window.Buffer < 'u' ? (f = window.Buffer) : (f = jn.Buffer);
    } catch {}
    (s.isBN = function (o) {
      return o instanceof s
        ? !0
        : o !== null &&
            typeof o == 'object' &&
            o.constructor.wordSize === s.wordSize &&
            Array.isArray(o.words);
    }),
      (s.max = function (o, u) {
        return o.cmp(u) > 0 ? o : u;
      }),
      (s.min = function (o, u) {
        return o.cmp(u) < 0 ? o : u;
      }),
      (s.prototype._init = function (o, u, l) {
        if (typeof o == 'number') return this._initNumber(o, u, l);
        if (typeof o == 'object') return this._initArray(o, u, l);
        u === 'hex' && (u = 16),
          i(u === (u | 0) && u >= 2 && u <= 36),
          (o = o.toString().replace(/\s+/g, ''));
        var d = 0;
        o[0] === '-' && (d++, (this.negative = 1)),
          d < o.length &&
            (u === 16
              ? this._parseHex(o, d, l)
              : (this._parseBase(o, u, d), l === 'le' && this._initArray(this.toArray(), u, l)));
      }),
      (s.prototype._initNumber = function (o, u, l) {
        o < 0 && ((this.negative = 1), (o = -o)),
          o < 67108864
            ? ((this.words = [o & 67108863]), (this.length = 1))
            : o < 4503599627370496
              ? ((this.words = [o & 67108863, (o / 67108864) & 67108863]), (this.length = 2))
              : (i(o < 9007199254740992),
                (this.words = [o & 67108863, (o / 67108864) & 67108863, 1]),
                (this.length = 3)),
          l === 'le' && this._initArray(this.toArray(), u, l);
      }),
      (s.prototype._initArray = function (o, u, l) {
        if ((i(typeof o.length == 'number'), o.length <= 0))
          return (this.words = [0]), (this.length = 1), this;
        (this.length = Math.ceil(o.length / 3)), (this.words = new Array(this.length));
        for (var d = 0; d < this.length; d++) this.words[d] = 0;
        var p,
          E,
          _ = 0;
        if (l === 'be')
          for (d = o.length - 1, p = 0; d >= 0; d -= 3)
            (E = o[d] | (o[d - 1] << 8) | (o[d - 2] << 16)),
              (this.words[p] |= (E << _) & 67108863),
              (this.words[p + 1] = (E >>> (26 - _)) & 67108863),
              (_ += 24),
              _ >= 26 && ((_ -= 26), p++);
        else if (l === 'le')
          for (d = 0, p = 0; d < o.length; d += 3)
            (E = o[d] | (o[d + 1] << 8) | (o[d + 2] << 16)),
              (this.words[p] |= (E << _) & 67108863),
              (this.words[p + 1] = (E >>> (26 - _)) & 67108863),
              (_ += 24),
              _ >= 26 && ((_ -= 26), p++);
        return this.strip();
      });
    function c(w, o) {
      var u = w.charCodeAt(o);
      return u >= 65 && u <= 70 ? u - 55 : u >= 97 && u <= 102 ? u - 87 : (u - 48) & 15;
    }
    function v(w, o, u) {
      var l = c(w, u);
      return u - 1 >= o && (l |= c(w, u - 1) << 4), l;
    }
    s.prototype._parseHex = function (o, u, l) {
      (this.length = Math.ceil((o.length - u) / 6)), (this.words = new Array(this.length));
      for (var d = 0; d < this.length; d++) this.words[d] = 0;
      var p = 0,
        E = 0,
        _;
      if (l === 'be')
        for (d = o.length - 1; d >= u; d -= 2)
          (_ = v(o, u, d) << p),
            (this.words[E] |= _ & 67108863),
            p >= 18 ? ((p -= 18), (E += 1), (this.words[E] |= _ >>> 26)) : (p += 8);
      else {
        var g = o.length - u;
        for (d = g % 2 === 0 ? u + 1 : u; d < o.length; d += 2)
          (_ = v(o, u, d) << p),
            (this.words[E] |= _ & 67108863),
            p >= 18 ? ((p -= 18), (E += 1), (this.words[E] |= _ >>> 26)) : (p += 8);
      }
      this.strip();
    };
    function b(w, o, u, l) {
      for (var d = 0, p = Math.min(w.length, u), E = o; E < p; E++) {
        var _ = w.charCodeAt(E) - 48;
        (d *= l), _ >= 49 ? (d += _ - 49 + 10) : _ >= 17 ? (d += _ - 17 + 10) : (d += _);
      }
      return d;
    }
    (s.prototype._parseBase = function (o, u, l) {
      (this.words = [0]), (this.length = 1);
      for (var d = 0, p = 1; p <= 67108863; p *= u) d++;
      d--, (p = (p / u) | 0);
      for (var E = o.length - l, _ = E % d, g = Math.min(E, E - _) + l, a = 0, m = l; m < g; m += d)
        (a = b(o, m, m + d, u)),
          this.imuln(p),
          this.words[0] + a < 67108864 ? (this.words[0] += a) : this._iaddn(a);
      if (_ !== 0) {
        var z = 1;
        for (a = b(o, m, o.length, u), m = 0; m < _; m++) z *= u;
        this.imuln(z), this.words[0] + a < 67108864 ? (this.words[0] += a) : this._iaddn(a);
      }
      this.strip();
    }),
      (s.prototype.copy = function (o) {
        o.words = new Array(this.length);
        for (var u = 0; u < this.length; u++) o.words[u] = this.words[u];
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
      B = [
        0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7,
        19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881,
        64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149,
        243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176,
      ];
    (s.prototype.toString = function (o, u) {
      (o = o || 10), (u = u | 0 || 1);
      var l;
      if (o === 16 || o === 'hex') {
        l = '';
        for (var d = 0, p = 0, E = 0; E < this.length; E++) {
          var _ = this.words[E],
            g = (((_ << d) | p) & 16777215).toString(16);
          (p = (_ >>> (24 - d)) & 16777215),
            p !== 0 || E !== this.length - 1 ? (l = S[6 - g.length] + g + l) : (l = g + l),
            (d += 2),
            d >= 26 && ((d -= 26), E--);
        }
        for (p !== 0 && (l = p.toString(16) + l); l.length % u !== 0; ) l = '0' + l;
        return this.negative !== 0 && (l = '-' + l), l;
      }
      if (o === (o | 0) && o >= 2 && o <= 36) {
        var a = P[o],
          m = B[o];
        l = '';
        var z = this.clone();
        for (z.negative = 0; !z.isZero(); ) {
          var K = z.modn(m).toString(o);
          (z = z.idivn(m)), z.isZero() ? (l = K + l) : (l = S[a - K.length] + K + l);
        }
        for (this.isZero() && (l = '0' + l); l.length % u !== 0; ) l = '0' + l;
        return this.negative !== 0 && (l = '-' + l), l;
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
      (s.prototype.toBuffer = function (o, u) {
        return i(typeof f < 'u'), this.toArrayLike(f, o, u);
      }),
      (s.prototype.toArray = function (o, u) {
        return this.toArrayLike(Array, o, u);
      }),
      (s.prototype.toArrayLike = function (o, u, l) {
        var d = this.byteLength(),
          p = l || Math.max(1, d);
        i(d <= p, 'byte array longer than desired length'),
          i(p > 0, 'Requested array length <= 0'),
          this.strip();
        var E = u === 'le',
          _ = new o(p),
          g,
          a,
          m = this.clone();
        if (E) {
          for (a = 0; !m.isZero(); a++) (g = m.andln(255)), m.iushrn(8), (_[a] = g);
          for (; a < p; a++) _[a] = 0;
        } else {
          for (a = 0; a < p - d; a++) _[a] = 0;
          for (a = 0; !m.isZero(); a++) (g = m.andln(255)), m.iushrn(8), (_[p - a - 1] = g);
        }
        return _;
      }),
      Math.clz32
        ? (s.prototype._countBits = function (o) {
            return 32 - Math.clz32(o);
          })
        : (s.prototype._countBits = function (o) {
            var u = o,
              l = 0;
            return (
              u >= 4096 && ((l += 13), (u >>>= 13)),
              u >= 64 && ((l += 7), (u >>>= 7)),
              u >= 8 && ((l += 4), (u >>>= 4)),
              u >= 2 && ((l += 2), (u >>>= 2)),
              l + u
            );
          }),
      (s.prototype._zeroBits = function (o) {
        if (o === 0) return 26;
        var u = o,
          l = 0;
        return (
          u & 8191 || ((l += 13), (u >>>= 13)),
          u & 127 || ((l += 7), (u >>>= 7)),
          u & 15 || ((l += 4), (u >>>= 4)),
          u & 3 || ((l += 2), (u >>>= 2)),
          u & 1 || l++,
          l
        );
      }),
      (s.prototype.bitLength = function () {
        var o = this.words[this.length - 1],
          u = this._countBits(o);
        return (this.length - 1) * 26 + u;
      });
    function N(w) {
      for (var o = new Array(w.bitLength()), u = 0; u < o.length; u++) {
        var l = (u / 26) | 0,
          d = u % 26;
        o[u] = (w.words[l] & (1 << d)) >>> d;
      }
      return o;
    }
    (s.prototype.zeroBits = function () {
      if (this.isZero()) return 0;
      for (var o = 0, u = 0; u < this.length; u++) {
        var l = this._zeroBits(this.words[u]);
        if (((o += l), l !== 26)) break;
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
        for (var u = 0; u < o.length; u++) this.words[u] = this.words[u] | o.words[u];
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
        var u;
        this.length > o.length ? (u = o) : (u = this);
        for (var l = 0; l < u.length; l++) this.words[l] = this.words[l] & o.words[l];
        return (this.length = u.length), this.strip();
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
        var u, l;
        this.length > o.length ? ((u = this), (l = o)) : ((u = o), (l = this));
        for (var d = 0; d < l.length; d++) this.words[d] = u.words[d] ^ l.words[d];
        if (this !== u) for (; d < u.length; d++) this.words[d] = u.words[d];
        return (this.length = u.length), this.strip();
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
        var u = Math.ceil(o / 26) | 0,
          l = o % 26;
        this._expand(u), l > 0 && u--;
        for (var d = 0; d < u; d++) this.words[d] = ~this.words[d] & 67108863;
        return l > 0 && (this.words[d] = ~this.words[d] & (67108863 >> (26 - l))), this.strip();
      }),
      (s.prototype.notn = function (o) {
        return this.clone().inotn(o);
      }),
      (s.prototype.setn = function (o, u) {
        i(typeof o == 'number' && o >= 0);
        var l = (o / 26) | 0,
          d = o % 26;
        return (
          this._expand(l + 1),
          u
            ? (this.words[l] = this.words[l] | (1 << d))
            : (this.words[l] = this.words[l] & ~(1 << d)),
          this.strip()
        );
      }),
      (s.prototype.iadd = function (o) {
        var u;
        if (this.negative !== 0 && o.negative === 0)
          return (this.negative = 0), (u = this.isub(o)), (this.negative ^= 1), this._normSign();
        if (this.negative === 0 && o.negative !== 0)
          return (o.negative = 0), (u = this.isub(o)), (o.negative = 1), u._normSign();
        var l, d;
        this.length > o.length ? ((l = this), (d = o)) : ((l = o), (d = this));
        for (var p = 0, E = 0; E < d.length; E++)
          (u = (l.words[E] | 0) + (d.words[E] | 0) + p),
            (this.words[E] = u & 67108863),
            (p = u >>> 26);
        for (; p !== 0 && E < l.length; E++)
          (u = (l.words[E] | 0) + p), (this.words[E] = u & 67108863), (p = u >>> 26);
        if (((this.length = l.length), p !== 0)) (this.words[this.length] = p), this.length++;
        else if (l !== this) for (; E < l.length; E++) this.words[E] = l.words[E];
        return this;
      }),
      (s.prototype.add = function (o) {
        var u;
        return o.negative !== 0 && this.negative === 0
          ? ((o.negative = 0), (u = this.sub(o)), (o.negative ^= 1), u)
          : o.negative === 0 && this.negative !== 0
            ? ((this.negative = 0), (u = o.sub(this)), (this.negative = 1), u)
            : this.length > o.length
              ? this.clone().iadd(o)
              : o.clone().iadd(this);
      }),
      (s.prototype.isub = function (o) {
        if (o.negative !== 0) {
          o.negative = 0;
          var u = this.iadd(o);
          return (o.negative = 1), u._normSign();
        } else if (this.negative !== 0)
          return (this.negative = 0), this.iadd(o), (this.negative = 1), this._normSign();
        var l = this.cmp(o);
        if (l === 0) return (this.negative = 0), (this.length = 1), (this.words[0] = 0), this;
        var d, p;
        l > 0 ? ((d = this), (p = o)) : ((d = o), (p = this));
        for (var E = 0, _ = 0; _ < p.length; _++)
          (u = (d.words[_] | 0) - (p.words[_] | 0) + E),
            (E = u >> 26),
            (this.words[_] = u & 67108863);
        for (; E !== 0 && _ < d.length; _++)
          (u = (d.words[_] | 0) + E), (E = u >> 26), (this.words[_] = u & 67108863);
        if (E === 0 && _ < d.length && d !== this)
          for (; _ < d.length; _++) this.words[_] = d.words[_];
        return (
          (this.length = Math.max(this.length, _)), d !== this && (this.negative = 1), this.strip()
        );
      }),
      (s.prototype.sub = function (o) {
        return this.clone().isub(o);
      });
    function R(w, o, u) {
      u.negative = o.negative ^ w.negative;
      var l = (w.length + o.length) | 0;
      (u.length = l), (l = (l - 1) | 0);
      var d = w.words[0] | 0,
        p = o.words[0] | 0,
        E = d * p,
        _ = E & 67108863,
        g = (E / 67108864) | 0;
      u.words[0] = _;
      for (var a = 1; a < l; a++) {
        for (
          var m = g >>> 26,
            z = g & 67108863,
            K = Math.min(a, o.length - 1),
            q = Math.max(0, a - w.length + 1);
          q <= K;
          q++
        ) {
          var G = (a - q) | 0;
          (d = w.words[G] | 0),
            (p = o.words[q] | 0),
            (E = d * p + z),
            (m += (E / 67108864) | 0),
            (z = E & 67108863);
        }
        (u.words[a] = z | 0), (g = m | 0);
      }
      return g !== 0 ? (u.words[a] = g | 0) : u.length--, u.strip();
    }
    var V = function (o, u, l) {
      var d = o.words,
        p = u.words,
        E = l.words,
        _ = 0,
        g,
        a,
        m,
        z = d[0] | 0,
        K = z & 8191,
        q = z >>> 13,
        G = d[1] | 0,
        ot = G & 8191,
        yt = G >>> 13,
        ke = d[2] | 0,
        pt = ke & 8191,
        St = ke >>> 13,
        Nr = d[3] | 0,
        Dt = Nr & 8191,
        Yt = Nr >>> 13,
        Kr = d[4] | 0,
        ee = Kr & 8191,
        re = Kr >>> 13,
        Cr = d[5] | 0,
        Zt = Cr & 8191,
        Bt = Cr >>> 13,
        cr = d[6] | 0,
        Qt = cr & 8191,
        Gt = cr >>> 13,
        br = d[7] | 0,
        Ft = br & 8191,
        Vt = br >>> 13,
        dr = d[8] | 0,
        jt = dr & 8191,
        Kt = dr >>> 13,
        Ar = d[9] | 0,
        $t = Ar & 8191,
        zt = Ar >>> 13,
        gr = p[0] | 0,
        Ot = gr & 8191,
        It = gr >>> 13,
        Xe = p[1] | 0,
        Rt = Xe & 8191,
        Ut = Xe >>> 13,
        ar = p[2] | 0,
        Lt = ar & 8191,
        Ht = ar >>> 13,
        Er = p[3] | 0,
        Xt = Er & 8191,
        te = Er >>> 13,
        qe = p[4] | 0,
        Tt = qe & 8191,
        Nt = qe >>> 13,
        pr = p[5] | 0,
        qt = pr & 8191,
        Wt = pr >>> 13,
        Ir = p[6] | 0,
        wt = Ir & 8191,
        Jt = Ir >>> 13,
        y = p[7] | 0,
        x = y & 8191,
        A = y >>> 13,
        h = p[8] | 0,
        M = h & 8191,
        T = h >>> 13,
        I = p[9] | 0,
        L = I & 8191,
        F = I >>> 13;
      (l.negative = o.negative ^ u.negative),
        (l.length = 19),
        (g = Math.imul(K, Ot)),
        (a = Math.imul(K, It)),
        (a = (a + Math.imul(q, Ot)) | 0),
        (m = Math.imul(q, It));
      var ct = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (ct >>> 26)) | 0),
        (ct &= 67108863),
        (g = Math.imul(ot, Ot)),
        (a = Math.imul(ot, It)),
        (a = (a + Math.imul(yt, Ot)) | 0),
        (m = Math.imul(yt, It)),
        (g = (g + Math.imul(K, Rt)) | 0),
        (a = (a + Math.imul(K, Ut)) | 0),
        (a = (a + Math.imul(q, Rt)) | 0),
        (m = (m + Math.imul(q, Ut)) | 0);
      var et = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (et >>> 26)) | 0),
        (et &= 67108863),
        (g = Math.imul(pt, Ot)),
        (a = Math.imul(pt, It)),
        (a = (a + Math.imul(St, Ot)) | 0),
        (m = Math.imul(St, It)),
        (g = (g + Math.imul(ot, Rt)) | 0),
        (a = (a + Math.imul(ot, Ut)) | 0),
        (a = (a + Math.imul(yt, Rt)) | 0),
        (m = (m + Math.imul(yt, Ut)) | 0),
        (g = (g + Math.imul(K, Lt)) | 0),
        (a = (a + Math.imul(K, Ht)) | 0),
        (a = (a + Math.imul(q, Lt)) | 0),
        (m = (m + Math.imul(q, Ht)) | 0);
      var ie = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (ie >>> 26)) | 0),
        (ie &= 67108863),
        (g = Math.imul(Dt, Ot)),
        (a = Math.imul(Dt, It)),
        (a = (a + Math.imul(Yt, Ot)) | 0),
        (m = Math.imul(Yt, It)),
        (g = (g + Math.imul(pt, Rt)) | 0),
        (a = (a + Math.imul(pt, Ut)) | 0),
        (a = (a + Math.imul(St, Rt)) | 0),
        (m = (m + Math.imul(St, Ut)) | 0),
        (g = (g + Math.imul(ot, Lt)) | 0),
        (a = (a + Math.imul(ot, Ht)) | 0),
        (a = (a + Math.imul(yt, Lt)) | 0),
        (m = (m + Math.imul(yt, Ht)) | 0),
        (g = (g + Math.imul(K, Xt)) | 0),
        (a = (a + Math.imul(K, te)) | 0),
        (a = (a + Math.imul(q, Xt)) | 0),
        (m = (m + Math.imul(q, te)) | 0);
      var nt = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (nt >>> 26)) | 0),
        (nt &= 67108863),
        (g = Math.imul(ee, Ot)),
        (a = Math.imul(ee, It)),
        (a = (a + Math.imul(re, Ot)) | 0),
        (m = Math.imul(re, It)),
        (g = (g + Math.imul(Dt, Rt)) | 0),
        (a = (a + Math.imul(Dt, Ut)) | 0),
        (a = (a + Math.imul(Yt, Rt)) | 0),
        (m = (m + Math.imul(Yt, Ut)) | 0),
        (g = (g + Math.imul(pt, Lt)) | 0),
        (a = (a + Math.imul(pt, Ht)) | 0),
        (a = (a + Math.imul(St, Lt)) | 0),
        (m = (m + Math.imul(St, Ht)) | 0),
        (g = (g + Math.imul(ot, Xt)) | 0),
        (a = (a + Math.imul(ot, te)) | 0),
        (a = (a + Math.imul(yt, Xt)) | 0),
        (m = (m + Math.imul(yt, te)) | 0),
        (g = (g + Math.imul(K, Tt)) | 0),
        (a = (a + Math.imul(K, Nt)) | 0),
        (a = (a + Math.imul(q, Tt)) | 0),
        (m = (m + Math.imul(q, Nt)) | 0);
      var bt = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (bt >>> 26)) | 0),
        (bt &= 67108863),
        (g = Math.imul(Zt, Ot)),
        (a = Math.imul(Zt, It)),
        (a = (a + Math.imul(Bt, Ot)) | 0),
        (m = Math.imul(Bt, It)),
        (g = (g + Math.imul(ee, Rt)) | 0),
        (a = (a + Math.imul(ee, Ut)) | 0),
        (a = (a + Math.imul(re, Rt)) | 0),
        (m = (m + Math.imul(re, Ut)) | 0),
        (g = (g + Math.imul(Dt, Lt)) | 0),
        (a = (a + Math.imul(Dt, Ht)) | 0),
        (a = (a + Math.imul(Yt, Lt)) | 0),
        (m = (m + Math.imul(Yt, Ht)) | 0),
        (g = (g + Math.imul(pt, Xt)) | 0),
        (a = (a + Math.imul(pt, te)) | 0),
        (a = (a + Math.imul(St, Xt)) | 0),
        (m = (m + Math.imul(St, te)) | 0),
        (g = (g + Math.imul(ot, Tt)) | 0),
        (a = (a + Math.imul(ot, Nt)) | 0),
        (a = (a + Math.imul(yt, Tt)) | 0),
        (m = (m + Math.imul(yt, Nt)) | 0),
        (g = (g + Math.imul(K, qt)) | 0),
        (a = (a + Math.imul(K, Wt)) | 0),
        (a = (a + Math.imul(q, qt)) | 0),
        (m = (m + Math.imul(q, Wt)) | 0);
      var At = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (At >>> 26)) | 0),
        (At &= 67108863),
        (g = Math.imul(Qt, Ot)),
        (a = Math.imul(Qt, It)),
        (a = (a + Math.imul(Gt, Ot)) | 0),
        (m = Math.imul(Gt, It)),
        (g = (g + Math.imul(Zt, Rt)) | 0),
        (a = (a + Math.imul(Zt, Ut)) | 0),
        (a = (a + Math.imul(Bt, Rt)) | 0),
        (m = (m + Math.imul(Bt, Ut)) | 0),
        (g = (g + Math.imul(ee, Lt)) | 0),
        (a = (a + Math.imul(ee, Ht)) | 0),
        (a = (a + Math.imul(re, Lt)) | 0),
        (m = (m + Math.imul(re, Ht)) | 0),
        (g = (g + Math.imul(Dt, Xt)) | 0),
        (a = (a + Math.imul(Dt, te)) | 0),
        (a = (a + Math.imul(Yt, Xt)) | 0),
        (m = (m + Math.imul(Yt, te)) | 0),
        (g = (g + Math.imul(pt, Tt)) | 0),
        (a = (a + Math.imul(pt, Nt)) | 0),
        (a = (a + Math.imul(St, Tt)) | 0),
        (m = (m + Math.imul(St, Nt)) | 0),
        (g = (g + Math.imul(ot, qt)) | 0),
        (a = (a + Math.imul(ot, Wt)) | 0),
        (a = (a + Math.imul(yt, qt)) | 0),
        (m = (m + Math.imul(yt, Wt)) | 0),
        (g = (g + Math.imul(K, wt)) | 0),
        (a = (a + Math.imul(K, Jt)) | 0),
        (a = (a + Math.imul(q, wt)) | 0),
        (m = (m + Math.imul(q, Jt)) | 0);
      var kt = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (kt >>> 26)) | 0),
        (kt &= 67108863),
        (g = Math.imul(Ft, Ot)),
        (a = Math.imul(Ft, It)),
        (a = (a + Math.imul(Vt, Ot)) | 0),
        (m = Math.imul(Vt, It)),
        (g = (g + Math.imul(Qt, Rt)) | 0),
        (a = (a + Math.imul(Qt, Ut)) | 0),
        (a = (a + Math.imul(Gt, Rt)) | 0),
        (m = (m + Math.imul(Gt, Ut)) | 0),
        (g = (g + Math.imul(Zt, Lt)) | 0),
        (a = (a + Math.imul(Zt, Ht)) | 0),
        (a = (a + Math.imul(Bt, Lt)) | 0),
        (m = (m + Math.imul(Bt, Ht)) | 0),
        (g = (g + Math.imul(ee, Xt)) | 0),
        (a = (a + Math.imul(ee, te)) | 0),
        (a = (a + Math.imul(re, Xt)) | 0),
        (m = (m + Math.imul(re, te)) | 0),
        (g = (g + Math.imul(Dt, Tt)) | 0),
        (a = (a + Math.imul(Dt, Nt)) | 0),
        (a = (a + Math.imul(Yt, Tt)) | 0),
        (m = (m + Math.imul(Yt, Nt)) | 0),
        (g = (g + Math.imul(pt, qt)) | 0),
        (a = (a + Math.imul(pt, Wt)) | 0),
        (a = (a + Math.imul(St, qt)) | 0),
        (m = (m + Math.imul(St, Wt)) | 0),
        (g = (g + Math.imul(ot, wt)) | 0),
        (a = (a + Math.imul(ot, Jt)) | 0),
        (a = (a + Math.imul(yt, wt)) | 0),
        (m = (m + Math.imul(yt, Jt)) | 0),
        (g = (g + Math.imul(K, x)) | 0),
        (a = (a + Math.imul(K, A)) | 0),
        (a = (a + Math.imul(q, x)) | 0),
        (m = (m + Math.imul(q, A)) | 0);
      var Pt = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (Pt >>> 26)) | 0),
        (Pt &= 67108863),
        (g = Math.imul(jt, Ot)),
        (a = Math.imul(jt, It)),
        (a = (a + Math.imul(Kt, Ot)) | 0),
        (m = Math.imul(Kt, It)),
        (g = (g + Math.imul(Ft, Rt)) | 0),
        (a = (a + Math.imul(Ft, Ut)) | 0),
        (a = (a + Math.imul(Vt, Rt)) | 0),
        (m = (m + Math.imul(Vt, Ut)) | 0),
        (g = (g + Math.imul(Qt, Lt)) | 0),
        (a = (a + Math.imul(Qt, Ht)) | 0),
        (a = (a + Math.imul(Gt, Lt)) | 0),
        (m = (m + Math.imul(Gt, Ht)) | 0),
        (g = (g + Math.imul(Zt, Xt)) | 0),
        (a = (a + Math.imul(Zt, te)) | 0),
        (a = (a + Math.imul(Bt, Xt)) | 0),
        (m = (m + Math.imul(Bt, te)) | 0),
        (g = (g + Math.imul(ee, Tt)) | 0),
        (a = (a + Math.imul(ee, Nt)) | 0),
        (a = (a + Math.imul(re, Tt)) | 0),
        (m = (m + Math.imul(re, Nt)) | 0),
        (g = (g + Math.imul(Dt, qt)) | 0),
        (a = (a + Math.imul(Dt, Wt)) | 0),
        (a = (a + Math.imul(Yt, qt)) | 0),
        (m = (m + Math.imul(Yt, Wt)) | 0),
        (g = (g + Math.imul(pt, wt)) | 0),
        (a = (a + Math.imul(pt, Jt)) | 0),
        (a = (a + Math.imul(St, wt)) | 0),
        (m = (m + Math.imul(St, Jt)) | 0),
        (g = (g + Math.imul(ot, x)) | 0),
        (a = (a + Math.imul(ot, A)) | 0),
        (a = (a + Math.imul(yt, x)) | 0),
        (m = (m + Math.imul(yt, A)) | 0),
        (g = (g + Math.imul(K, M)) | 0),
        (a = (a + Math.imul(K, T)) | 0),
        (a = (a + Math.imul(q, M)) | 0),
        (m = (m + Math.imul(q, T)) | 0);
      var Et = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (Et >>> 26)) | 0),
        (Et &= 67108863),
        (g = Math.imul($t, Ot)),
        (a = Math.imul($t, It)),
        (a = (a + Math.imul(zt, Ot)) | 0),
        (m = Math.imul(zt, It)),
        (g = (g + Math.imul(jt, Rt)) | 0),
        (a = (a + Math.imul(jt, Ut)) | 0),
        (a = (a + Math.imul(Kt, Rt)) | 0),
        (m = (m + Math.imul(Kt, Ut)) | 0),
        (g = (g + Math.imul(Ft, Lt)) | 0),
        (a = (a + Math.imul(Ft, Ht)) | 0),
        (a = (a + Math.imul(Vt, Lt)) | 0),
        (m = (m + Math.imul(Vt, Ht)) | 0),
        (g = (g + Math.imul(Qt, Xt)) | 0),
        (a = (a + Math.imul(Qt, te)) | 0),
        (a = (a + Math.imul(Gt, Xt)) | 0),
        (m = (m + Math.imul(Gt, te)) | 0),
        (g = (g + Math.imul(Zt, Tt)) | 0),
        (a = (a + Math.imul(Zt, Nt)) | 0),
        (a = (a + Math.imul(Bt, Tt)) | 0),
        (m = (m + Math.imul(Bt, Nt)) | 0),
        (g = (g + Math.imul(ee, qt)) | 0),
        (a = (a + Math.imul(ee, Wt)) | 0),
        (a = (a + Math.imul(re, qt)) | 0),
        (m = (m + Math.imul(re, Wt)) | 0),
        (g = (g + Math.imul(Dt, wt)) | 0),
        (a = (a + Math.imul(Dt, Jt)) | 0),
        (a = (a + Math.imul(Yt, wt)) | 0),
        (m = (m + Math.imul(Yt, Jt)) | 0),
        (g = (g + Math.imul(pt, x)) | 0),
        (a = (a + Math.imul(pt, A)) | 0),
        (a = (a + Math.imul(St, x)) | 0),
        (m = (m + Math.imul(St, A)) | 0),
        (g = (g + Math.imul(ot, M)) | 0),
        (a = (a + Math.imul(ot, T)) | 0),
        (a = (a + Math.imul(yt, M)) | 0),
        (m = (m + Math.imul(yt, T)) | 0),
        (g = (g + Math.imul(K, L)) | 0),
        (a = (a + Math.imul(K, F)) | 0),
        (a = (a + Math.imul(q, L)) | 0),
        (m = (m + Math.imul(q, F)) | 0);
      var _t = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (_t >>> 26)) | 0),
        (_t &= 67108863),
        (g = Math.imul($t, Rt)),
        (a = Math.imul($t, Ut)),
        (a = (a + Math.imul(zt, Rt)) | 0),
        (m = Math.imul(zt, Ut)),
        (g = (g + Math.imul(jt, Lt)) | 0),
        (a = (a + Math.imul(jt, Ht)) | 0),
        (a = (a + Math.imul(Kt, Lt)) | 0),
        (m = (m + Math.imul(Kt, Ht)) | 0),
        (g = (g + Math.imul(Ft, Xt)) | 0),
        (a = (a + Math.imul(Ft, te)) | 0),
        (a = (a + Math.imul(Vt, Xt)) | 0),
        (m = (m + Math.imul(Vt, te)) | 0),
        (g = (g + Math.imul(Qt, Tt)) | 0),
        (a = (a + Math.imul(Qt, Nt)) | 0),
        (a = (a + Math.imul(Gt, Tt)) | 0),
        (m = (m + Math.imul(Gt, Nt)) | 0),
        (g = (g + Math.imul(Zt, qt)) | 0),
        (a = (a + Math.imul(Zt, Wt)) | 0),
        (a = (a + Math.imul(Bt, qt)) | 0),
        (m = (m + Math.imul(Bt, Wt)) | 0),
        (g = (g + Math.imul(ee, wt)) | 0),
        (a = (a + Math.imul(ee, Jt)) | 0),
        (a = (a + Math.imul(re, wt)) | 0),
        (m = (m + Math.imul(re, Jt)) | 0),
        (g = (g + Math.imul(Dt, x)) | 0),
        (a = (a + Math.imul(Dt, A)) | 0),
        (a = (a + Math.imul(Yt, x)) | 0),
        (m = (m + Math.imul(Yt, A)) | 0),
        (g = (g + Math.imul(pt, M)) | 0),
        (a = (a + Math.imul(pt, T)) | 0),
        (a = (a + Math.imul(St, M)) | 0),
        (m = (m + Math.imul(St, T)) | 0),
        (g = (g + Math.imul(ot, L)) | 0),
        (a = (a + Math.imul(ot, F)) | 0),
        (a = (a + Math.imul(yt, L)) | 0),
        (m = (m + Math.imul(yt, F)) | 0);
      var xt = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (xt >>> 26)) | 0),
        (xt &= 67108863),
        (g = Math.imul($t, Lt)),
        (a = Math.imul($t, Ht)),
        (a = (a + Math.imul(zt, Lt)) | 0),
        (m = Math.imul(zt, Ht)),
        (g = (g + Math.imul(jt, Xt)) | 0),
        (a = (a + Math.imul(jt, te)) | 0),
        (a = (a + Math.imul(Kt, Xt)) | 0),
        (m = (m + Math.imul(Kt, te)) | 0),
        (g = (g + Math.imul(Ft, Tt)) | 0),
        (a = (a + Math.imul(Ft, Nt)) | 0),
        (a = (a + Math.imul(Vt, Tt)) | 0),
        (m = (m + Math.imul(Vt, Nt)) | 0),
        (g = (g + Math.imul(Qt, qt)) | 0),
        (a = (a + Math.imul(Qt, Wt)) | 0),
        (a = (a + Math.imul(Gt, qt)) | 0),
        (m = (m + Math.imul(Gt, Wt)) | 0),
        (g = (g + Math.imul(Zt, wt)) | 0),
        (a = (a + Math.imul(Zt, Jt)) | 0),
        (a = (a + Math.imul(Bt, wt)) | 0),
        (m = (m + Math.imul(Bt, Jt)) | 0),
        (g = (g + Math.imul(ee, x)) | 0),
        (a = (a + Math.imul(ee, A)) | 0),
        (a = (a + Math.imul(re, x)) | 0),
        (m = (m + Math.imul(re, A)) | 0),
        (g = (g + Math.imul(Dt, M)) | 0),
        (a = (a + Math.imul(Dt, T)) | 0),
        (a = (a + Math.imul(Yt, M)) | 0),
        (m = (m + Math.imul(Yt, T)) | 0),
        (g = (g + Math.imul(pt, L)) | 0),
        (a = (a + Math.imul(pt, F)) | 0),
        (a = (a + Math.imul(St, L)) | 0),
        (m = (m + Math.imul(St, F)) | 0);
      var at = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (at >>> 26)) | 0),
        (at &= 67108863),
        (g = Math.imul($t, Xt)),
        (a = Math.imul($t, te)),
        (a = (a + Math.imul(zt, Xt)) | 0),
        (m = Math.imul(zt, te)),
        (g = (g + Math.imul(jt, Tt)) | 0),
        (a = (a + Math.imul(jt, Nt)) | 0),
        (a = (a + Math.imul(Kt, Tt)) | 0),
        (m = (m + Math.imul(Kt, Nt)) | 0),
        (g = (g + Math.imul(Ft, qt)) | 0),
        (a = (a + Math.imul(Ft, Wt)) | 0),
        (a = (a + Math.imul(Vt, qt)) | 0),
        (m = (m + Math.imul(Vt, Wt)) | 0),
        (g = (g + Math.imul(Qt, wt)) | 0),
        (a = (a + Math.imul(Qt, Jt)) | 0),
        (a = (a + Math.imul(Gt, wt)) | 0),
        (m = (m + Math.imul(Gt, Jt)) | 0),
        (g = (g + Math.imul(Zt, x)) | 0),
        (a = (a + Math.imul(Zt, A)) | 0),
        (a = (a + Math.imul(Bt, x)) | 0),
        (m = (m + Math.imul(Bt, A)) | 0),
        (g = (g + Math.imul(ee, M)) | 0),
        (a = (a + Math.imul(ee, T)) | 0),
        (a = (a + Math.imul(re, M)) | 0),
        (m = (m + Math.imul(re, T)) | 0),
        (g = (g + Math.imul(Dt, L)) | 0),
        (a = (a + Math.imul(Dt, F)) | 0),
        (a = (a + Math.imul(Yt, L)) | 0),
        (m = (m + Math.imul(Yt, F)) | 0);
      var dt = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (dt >>> 26)) | 0),
        (dt &= 67108863),
        (g = Math.imul($t, Tt)),
        (a = Math.imul($t, Nt)),
        (a = (a + Math.imul(zt, Tt)) | 0),
        (m = Math.imul(zt, Nt)),
        (g = (g + Math.imul(jt, qt)) | 0),
        (a = (a + Math.imul(jt, Wt)) | 0),
        (a = (a + Math.imul(Kt, qt)) | 0),
        (m = (m + Math.imul(Kt, Wt)) | 0),
        (g = (g + Math.imul(Ft, wt)) | 0),
        (a = (a + Math.imul(Ft, Jt)) | 0),
        (a = (a + Math.imul(Vt, wt)) | 0),
        (m = (m + Math.imul(Vt, Jt)) | 0),
        (g = (g + Math.imul(Qt, x)) | 0),
        (a = (a + Math.imul(Qt, A)) | 0),
        (a = (a + Math.imul(Gt, x)) | 0),
        (m = (m + Math.imul(Gt, A)) | 0),
        (g = (g + Math.imul(Zt, M)) | 0),
        (a = (a + Math.imul(Zt, T)) | 0),
        (a = (a + Math.imul(Bt, M)) | 0),
        (m = (m + Math.imul(Bt, T)) | 0),
        (g = (g + Math.imul(ee, L)) | 0),
        (a = (a + Math.imul(ee, F)) | 0),
        (a = (a + Math.imul(re, L)) | 0),
        (m = (m + Math.imul(re, F)) | 0);
      var rt = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (rt >>> 26)) | 0),
        (rt &= 67108863),
        (g = Math.imul($t, qt)),
        (a = Math.imul($t, Wt)),
        (a = (a + Math.imul(zt, qt)) | 0),
        (m = Math.imul(zt, Wt)),
        (g = (g + Math.imul(jt, wt)) | 0),
        (a = (a + Math.imul(jt, Jt)) | 0),
        (a = (a + Math.imul(Kt, wt)) | 0),
        (m = (m + Math.imul(Kt, Jt)) | 0),
        (g = (g + Math.imul(Ft, x)) | 0),
        (a = (a + Math.imul(Ft, A)) | 0),
        (a = (a + Math.imul(Vt, x)) | 0),
        (m = (m + Math.imul(Vt, A)) | 0),
        (g = (g + Math.imul(Qt, M)) | 0),
        (a = (a + Math.imul(Qt, T)) | 0),
        (a = (a + Math.imul(Gt, M)) | 0),
        (m = (m + Math.imul(Gt, T)) | 0),
        (g = (g + Math.imul(Zt, L)) | 0),
        (a = (a + Math.imul(Zt, F)) | 0),
        (a = (a + Math.imul(Bt, L)) | 0),
        (m = (m + Math.imul(Bt, F)) | 0);
      var ft = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (ft >>> 26)) | 0),
        (ft &= 67108863),
        (g = Math.imul($t, wt)),
        (a = Math.imul($t, Jt)),
        (a = (a + Math.imul(zt, wt)) | 0),
        (m = Math.imul(zt, Jt)),
        (g = (g + Math.imul(jt, x)) | 0),
        (a = (a + Math.imul(jt, A)) | 0),
        (a = (a + Math.imul(Kt, x)) | 0),
        (m = (m + Math.imul(Kt, A)) | 0),
        (g = (g + Math.imul(Ft, M)) | 0),
        (a = (a + Math.imul(Ft, T)) | 0),
        (a = (a + Math.imul(Vt, M)) | 0),
        (m = (m + Math.imul(Vt, T)) | 0),
        (g = (g + Math.imul(Qt, L)) | 0),
        (a = (a + Math.imul(Qt, F)) | 0),
        (a = (a + Math.imul(Gt, L)) | 0),
        (m = (m + Math.imul(Gt, F)) | 0);
      var ht = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (ht >>> 26)) | 0),
        (ht &= 67108863),
        (g = Math.imul($t, x)),
        (a = Math.imul($t, A)),
        (a = (a + Math.imul(zt, x)) | 0),
        (m = Math.imul(zt, A)),
        (g = (g + Math.imul(jt, M)) | 0),
        (a = (a + Math.imul(jt, T)) | 0),
        (a = (a + Math.imul(Kt, M)) | 0),
        (m = (m + Math.imul(Kt, T)) | 0),
        (g = (g + Math.imul(Ft, L)) | 0),
        (a = (a + Math.imul(Ft, F)) | 0),
        (a = (a + Math.imul(Vt, L)) | 0),
        (m = (m + Math.imul(Vt, F)) | 0);
      var it = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (it >>> 26)) | 0),
        (it &= 67108863),
        (g = Math.imul($t, M)),
        (a = Math.imul($t, T)),
        (a = (a + Math.imul(zt, M)) | 0),
        (m = Math.imul(zt, T)),
        (g = (g + Math.imul(jt, L)) | 0),
        (a = (a + Math.imul(jt, F)) | 0),
        (a = (a + Math.imul(Kt, L)) | 0),
        (m = (m + Math.imul(Kt, F)) | 0);
      var O = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      (_ = (((m + (a >>> 13)) | 0) + (O >>> 26)) | 0),
        (O &= 67108863),
        (g = Math.imul($t, L)),
        (a = Math.imul($t, F)),
        (a = (a + Math.imul(zt, L)) | 0),
        (m = Math.imul(zt, F));
      var U = (((_ + g) | 0) + ((a & 8191) << 13)) | 0;
      return (
        (_ = (((m + (a >>> 13)) | 0) + (U >>> 26)) | 0),
        (U &= 67108863),
        (E[0] = ct),
        (E[1] = et),
        (E[2] = ie),
        (E[3] = nt),
        (E[4] = bt),
        (E[5] = At),
        (E[6] = kt),
        (E[7] = Pt),
        (E[8] = Et),
        (E[9] = _t),
        (E[10] = xt),
        (E[11] = at),
        (E[12] = dt),
        (E[13] = rt),
        (E[14] = ft),
        (E[15] = ht),
        (E[16] = it),
        (E[17] = O),
        (E[18] = U),
        _ !== 0 && ((E[19] = _), l.length++),
        l
      );
    };
    Math.imul || (V = R);
    function lt(w, o, u) {
      (u.negative = o.negative ^ w.negative), (u.length = w.length + o.length);
      for (var l = 0, d = 0, p = 0; p < u.length - 1; p++) {
        var E = d;
        d = 0;
        for (
          var _ = l & 67108863, g = Math.min(p, o.length - 1), a = Math.max(0, p - w.length + 1);
          a <= g;
          a++
        ) {
          var m = p - a,
            z = w.words[m] | 0,
            K = o.words[a] | 0,
            q = z * K,
            G = q & 67108863;
          (E = (E + ((q / 67108864) | 0)) | 0),
            (G = (G + _) | 0),
            (_ = G & 67108863),
            (E = (E + (G >>> 26)) | 0),
            (d += E >>> 26),
            (E &= 67108863);
        }
        (u.words[p] = _), (l = E), (E = d);
      }
      return l !== 0 ? (u.words[p] = l) : u.length--, u.strip();
    }
    function $(w, o, u) {
      var l = new C();
      return l.mulp(w, o, u);
    }
    s.prototype.mulTo = function (o, u) {
      var l,
        d = this.length + o.length;
      return (
        this.length === 10 && o.length === 10
          ? (l = V(this, o, u))
          : d < 63
            ? (l = R(this, o, u))
            : d < 1024
              ? (l = lt(this, o, u))
              : (l = $(this, o, u)),
        l
      );
    };
    function C(w, o) {
      (this.x = w), (this.y = o);
    }
    (C.prototype.makeRBT = function (o) {
      for (var u = new Array(o), l = s.prototype._countBits(o) - 1, d = 0; d < o; d++)
        u[d] = this.revBin(d, l, o);
      return u;
    }),
      (C.prototype.revBin = function (o, u, l) {
        if (o === 0 || o === l - 1) return o;
        for (var d = 0, p = 0; p < u; p++) (d |= (o & 1) << (u - p - 1)), (o >>= 1);
        return d;
      }),
      (C.prototype.permute = function (o, u, l, d, p, E) {
        for (var _ = 0; _ < E; _++) (d[_] = u[o[_]]), (p[_] = l[o[_]]);
      }),
      (C.prototype.transform = function (o, u, l, d, p, E) {
        this.permute(E, o, u, l, d, p);
        for (var _ = 1; _ < p; _ <<= 1)
          for (
            var g = _ << 1, a = Math.cos((2 * Math.PI) / g), m = Math.sin((2 * Math.PI) / g), z = 0;
            z < p;
            z += g
          )
            for (var K = a, q = m, G = 0; G < _; G++) {
              var ot = l[z + G],
                yt = d[z + G],
                ke = l[z + G + _],
                pt = d[z + G + _],
                St = K * ke - q * pt;
              (pt = K * pt + q * ke),
                (ke = St),
                (l[z + G] = ot + ke),
                (d[z + G] = yt + pt),
                (l[z + G + _] = ot - ke),
                (d[z + G + _] = yt - pt),
                G !== g && ((St = a * K - m * q), (q = a * q + m * K), (K = St));
            }
      }),
      (C.prototype.guessLen13b = function (o, u) {
        var l = Math.max(u, o) | 1,
          d = l & 1,
          p = 0;
        for (l = (l / 2) | 0; l; l = l >>> 1) p++;
        return 1 << (p + 1 + d);
      }),
      (C.prototype.conjugate = function (o, u, l) {
        if (!(l <= 1))
          for (var d = 0; d < l / 2; d++) {
            var p = o[d];
            (o[d] = o[l - d - 1]),
              (o[l - d - 1] = p),
              (p = u[d]),
              (u[d] = -u[l - d - 1]),
              (u[l - d - 1] = -p);
          }
      }),
      (C.prototype.normalize13b = function (o, u) {
        for (var l = 0, d = 0; d < u / 2; d++) {
          var p = Math.round(o[2 * d + 1] / u) * 8192 + Math.round(o[2 * d] / u) + l;
          (o[d] = p & 67108863), p < 67108864 ? (l = 0) : (l = (p / 67108864) | 0);
        }
        return o;
      }),
      (C.prototype.convert13b = function (o, u, l, d) {
        for (var p = 0, E = 0; E < u; E++)
          (p = p + (o[E] | 0)),
            (l[2 * E] = p & 8191),
            (p = p >>> 13),
            (l[2 * E + 1] = p & 8191),
            (p = p >>> 13);
        for (E = 2 * u; E < d; ++E) l[E] = 0;
        i(p === 0), i((p & -8192) === 0);
      }),
      (C.prototype.stub = function (o) {
        for (var u = new Array(o), l = 0; l < o; l++) u[l] = 0;
        return u;
      }),
      (C.prototype.mulp = function (o, u, l) {
        var d = 2 * this.guessLen13b(o.length, u.length),
          p = this.makeRBT(d),
          E = this.stub(d),
          _ = new Array(d),
          g = new Array(d),
          a = new Array(d),
          m = new Array(d),
          z = new Array(d),
          K = new Array(d),
          q = l.words;
        (q.length = d),
          this.convert13b(o.words, o.length, _, d),
          this.convert13b(u.words, u.length, m, d),
          this.transform(_, E, g, a, d, p),
          this.transform(m, E, z, K, d, p);
        for (var G = 0; G < d; G++) {
          var ot = g[G] * z[G] - a[G] * K[G];
          (a[G] = g[G] * K[G] + a[G] * z[G]), (g[G] = ot);
        }
        return (
          this.conjugate(g, a, d),
          this.transform(g, a, q, E, d, p),
          this.conjugate(q, E, d),
          this.normalize13b(q, d),
          (l.negative = o.negative ^ u.negative),
          (l.length = o.length + u.length),
          l.strip()
        );
      }),
      (s.prototype.mul = function (o) {
        var u = new s(null);
        return (u.words = new Array(this.length + o.length)), this.mulTo(o, u);
      }),
      (s.prototype.mulf = function (o) {
        var u = new s(null);
        return (u.words = new Array(this.length + o.length)), $(this, o, u);
      }),
      (s.prototype.imul = function (o) {
        return this.clone().mulTo(o, this);
      }),
      (s.prototype.imuln = function (o) {
        i(typeof o == 'number'), i(o < 67108864);
        for (var u = 0, l = 0; l < this.length; l++) {
          var d = (this.words[l] | 0) * o,
            p = (d & 67108863) + (u & 67108863);
          (u >>= 26), (u += (d / 67108864) | 0), (u += p >>> 26), (this.words[l] = p & 67108863);
        }
        return u !== 0 && ((this.words[l] = u), this.length++), this;
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
        var u = N(o);
        if (u.length === 0) return new s(1);
        for (var l = this, d = 0; d < u.length && u[d] === 0; d++, l = l.sqr());
        if (++d < u.length)
          for (var p = l.sqr(); d < u.length; d++, p = p.sqr()) u[d] !== 0 && (l = l.mul(p));
        return l;
      }),
      (s.prototype.iushln = function (o) {
        i(typeof o == 'number' && o >= 0);
        var u = o % 26,
          l = (o - u) / 26,
          d = (67108863 >>> (26 - u)) << (26 - u),
          p;
        if (u !== 0) {
          var E = 0;
          for (p = 0; p < this.length; p++) {
            var _ = this.words[p] & d,
              g = ((this.words[p] | 0) - _) << u;
            (this.words[p] = g | E), (E = _ >>> (26 - u));
          }
          E && ((this.words[p] = E), this.length++);
        }
        if (l !== 0) {
          for (p = this.length - 1; p >= 0; p--) this.words[p + l] = this.words[p];
          for (p = 0; p < l; p++) this.words[p] = 0;
          this.length += l;
        }
        return this.strip();
      }),
      (s.prototype.ishln = function (o) {
        return i(this.negative === 0), this.iushln(o);
      }),
      (s.prototype.iushrn = function (o, u, l) {
        i(typeof o == 'number' && o >= 0);
        var d;
        u ? (d = (u - (u % 26)) / 26) : (d = 0);
        var p = o % 26,
          E = Math.min((o - p) / 26, this.length),
          _ = 67108863 ^ ((67108863 >>> p) << p),
          g = l;
        if (((d -= E), (d = Math.max(0, d)), g)) {
          for (var a = 0; a < E; a++) g.words[a] = this.words[a];
          g.length = E;
        }
        if (E !== 0)
          if (this.length > E)
            for (this.length -= E, a = 0; a < this.length; a++) this.words[a] = this.words[a + E];
          else (this.words[0] = 0), (this.length = 1);
        var m = 0;
        for (a = this.length - 1; a >= 0 && (m !== 0 || a >= d); a--) {
          var z = this.words[a] | 0;
          (this.words[a] = (m << (26 - p)) | (z >>> p)), (m = z & _);
        }
        return (
          g && m !== 0 && (g.words[g.length++] = m),
          this.length === 0 && ((this.words[0] = 0), (this.length = 1)),
          this.strip()
        );
      }),
      (s.prototype.ishrn = function (o, u, l) {
        return i(this.negative === 0), this.iushrn(o, u, l);
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
        var u = o % 26,
          l = (o - u) / 26,
          d = 1 << u;
        if (this.length <= l) return !1;
        var p = this.words[l];
        return !!(p & d);
      }),
      (s.prototype.imaskn = function (o) {
        i(typeof o == 'number' && o >= 0);
        var u = o % 26,
          l = (o - u) / 26;
        if ((i(this.negative === 0, 'imaskn works only with positive numbers'), this.length <= l))
          return this;
        if ((u !== 0 && l++, (this.length = Math.min(l, this.length)), u !== 0)) {
          var d = 67108863 ^ ((67108863 >>> u) << u);
          this.words[this.length - 1] &= d;
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
        for (var u = 0; u < this.length && this.words[u] >= 67108864; u++)
          (this.words[u] -= 67108864),
            u === this.length - 1 ? (this.words[u + 1] = 1) : this.words[u + 1]++;
        return (this.length = Math.max(this.length, u + 1)), this;
      }),
      (s.prototype.isubn = function (o) {
        if ((i(typeof o == 'number'), i(o < 67108864), o < 0)) return this.iaddn(-o);
        if (this.negative !== 0)
          return (this.negative = 0), this.iaddn(o), (this.negative = 1), this;
        if (((this.words[0] -= o), this.length === 1 && this.words[0] < 0))
          (this.words[0] = -this.words[0]), (this.negative = 1);
        else
          for (var u = 0; u < this.length && this.words[u] < 0; u++)
            (this.words[u] += 67108864), (this.words[u + 1] -= 1);
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
      (s.prototype._ishlnsubmul = function (o, u, l) {
        var d = o.length + l,
          p;
        this._expand(d);
        var E,
          _ = 0;
        for (p = 0; p < o.length; p++) {
          E = (this.words[p + l] | 0) + _;
          var g = (o.words[p] | 0) * u;
          (E -= g & 67108863),
            (_ = (E >> 26) - ((g / 67108864) | 0)),
            (this.words[p + l] = E & 67108863);
        }
        for (; p < this.length - l; p++)
          (E = (this.words[p + l] | 0) + _), (_ = E >> 26), (this.words[p + l] = E & 67108863);
        if (_ === 0) return this.strip();
        for (i(_ === -1), _ = 0, p = 0; p < this.length; p++)
          (E = -(this.words[p] | 0) + _), (_ = E >> 26), (this.words[p] = E & 67108863);
        return (this.negative = 1), this.strip();
      }),
      (s.prototype._wordDiv = function (o, u) {
        var l = this.length - o.length,
          d = this.clone(),
          p = o,
          E = p.words[p.length - 1] | 0,
          _ = this._countBits(E);
        (l = 26 - _), l !== 0 && ((p = p.ushln(l)), d.iushln(l), (E = p.words[p.length - 1] | 0));
        var g = d.length - p.length,
          a;
        if (u !== 'mod') {
          (a = new s(null)), (a.length = g + 1), (a.words = new Array(a.length));
          for (var m = 0; m < a.length; m++) a.words[m] = 0;
        }
        var z = d.clone()._ishlnsubmul(p, 1, g);
        z.negative === 0 && ((d = z), a && (a.words[g] = 1));
        for (var K = g - 1; K >= 0; K--) {
          var q = (d.words[p.length + K] | 0) * 67108864 + (d.words[p.length + K - 1] | 0);
          for (q = Math.min((q / E) | 0, 67108863), d._ishlnsubmul(p, q, K); d.negative !== 0; )
            q--, (d.negative = 0), d._ishlnsubmul(p, 1, K), d.isZero() || (d.negative ^= 1);
          a && (a.words[K] = q);
        }
        return (
          a && a.strip(),
          d.strip(),
          u !== 'div' && l !== 0 && d.iushrn(l),
          { div: a || null, mod: d }
        );
      }),
      (s.prototype.divmod = function (o, u, l) {
        if ((i(!o.isZero()), this.isZero())) return { div: new s(0), mod: new s(0) };
        var d, p, E;
        return this.negative !== 0 && o.negative === 0
          ? ((E = this.neg().divmod(o, u)),
            u !== 'mod' && (d = E.div.neg()),
            u !== 'div' && ((p = E.mod.neg()), l && p.negative !== 0 && p.iadd(o)),
            { div: d, mod: p })
          : this.negative === 0 && o.negative !== 0
            ? ((E = this.divmod(o.neg(), u)),
              u !== 'mod' && (d = E.div.neg()),
              { div: d, mod: E.mod })
            : this.negative & o.negative
              ? ((E = this.neg().divmod(o.neg(), u)),
                u !== 'div' && ((p = E.mod.neg()), l && p.negative !== 0 && p.isub(o)),
                { div: E.div, mod: p })
              : o.length > this.length || this.cmp(o) < 0
                ? { div: new s(0), mod: this }
                : o.length === 1
                  ? u === 'div'
                    ? { div: this.divn(o.words[0]), mod: null }
                    : u === 'mod'
                      ? { div: null, mod: new s(this.modn(o.words[0])) }
                      : { div: this.divn(o.words[0]), mod: new s(this.modn(o.words[0])) }
                  : this._wordDiv(o, u);
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
        var u = this.divmod(o);
        if (u.mod.isZero()) return u.div;
        var l = u.div.negative !== 0 ? u.mod.isub(o) : u.mod,
          d = o.ushrn(1),
          p = o.andln(1),
          E = l.cmp(d);
        return E < 0 || (p === 1 && E === 0)
          ? u.div
          : u.div.negative !== 0
            ? u.div.isubn(1)
            : u.div.iaddn(1);
      }),
      (s.prototype.modn = function (o) {
        i(o <= 67108863);
        for (var u = (1 << 26) % o, l = 0, d = this.length - 1; d >= 0; d--)
          l = (u * l + (this.words[d] | 0)) % o;
        return l;
      }),
      (s.prototype.idivn = function (o) {
        i(o <= 67108863);
        for (var u = 0, l = this.length - 1; l >= 0; l--) {
          var d = (this.words[l] | 0) + u * 67108864;
          (this.words[l] = (d / o) | 0), (u = d % o);
        }
        return this.strip();
      }),
      (s.prototype.divn = function (o) {
        return this.clone().idivn(o);
      }),
      (s.prototype.egcd = function (o) {
        i(o.negative === 0), i(!o.isZero());
        var u = this,
          l = o.clone();
        u.negative !== 0 ? (u = u.umod(o)) : (u = u.clone());
        for (
          var d = new s(1), p = new s(0), E = new s(0), _ = new s(1), g = 0;
          u.isEven() && l.isEven();

        )
          u.iushrn(1), l.iushrn(1), ++g;
        for (var a = l.clone(), m = u.clone(); !u.isZero(); ) {
          for (var z = 0, K = 1; !(u.words[0] & K) && z < 26; ++z, K <<= 1);
          if (z > 0)
            for (u.iushrn(z); z-- > 0; )
              (d.isOdd() || p.isOdd()) && (d.iadd(a), p.isub(m)), d.iushrn(1), p.iushrn(1);
          for (var q = 0, G = 1; !(l.words[0] & G) && q < 26; ++q, G <<= 1);
          if (q > 0)
            for (l.iushrn(q); q-- > 0; )
              (E.isOdd() || _.isOdd()) && (E.iadd(a), _.isub(m)), E.iushrn(1), _.iushrn(1);
          u.cmp(l) >= 0 ? (u.isub(l), d.isub(E), p.isub(_)) : (l.isub(u), E.isub(d), _.isub(p));
        }
        return { a: E, b: _, gcd: l.iushln(g) };
      }),
      (s.prototype._invmp = function (o) {
        i(o.negative === 0), i(!o.isZero());
        var u = this,
          l = o.clone();
        u.negative !== 0 ? (u = u.umod(o)) : (u = u.clone());
        for (var d = new s(1), p = new s(0), E = l.clone(); u.cmpn(1) > 0 && l.cmpn(1) > 0; ) {
          for (var _ = 0, g = 1; !(u.words[0] & g) && _ < 26; ++_, g <<= 1);
          if (_ > 0) for (u.iushrn(_); _-- > 0; ) d.isOdd() && d.iadd(E), d.iushrn(1);
          for (var a = 0, m = 1; !(l.words[0] & m) && a < 26; ++a, m <<= 1);
          if (a > 0) for (l.iushrn(a); a-- > 0; ) p.isOdd() && p.iadd(E), p.iushrn(1);
          u.cmp(l) >= 0 ? (u.isub(l), d.isub(p)) : (l.isub(u), p.isub(d));
        }
        var z;
        return u.cmpn(1) === 0 ? (z = d) : (z = p), z.cmpn(0) < 0 && z.iadd(o), z;
      }),
      (s.prototype.gcd = function (o) {
        if (this.isZero()) return o.abs();
        if (o.isZero()) return this.abs();
        var u = this.clone(),
          l = o.clone();
        (u.negative = 0), (l.negative = 0);
        for (var d = 0; u.isEven() && l.isEven(); d++) u.iushrn(1), l.iushrn(1);
        do {
          for (; u.isEven(); ) u.iushrn(1);
          for (; l.isEven(); ) l.iushrn(1);
          var p = u.cmp(l);
          if (p < 0) {
            var E = u;
            (u = l), (l = E);
          } else if (p === 0 || l.cmpn(1) === 0) break;
          u.isub(l);
        } while (!0);
        return l.iushln(d);
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
        var u = o % 26,
          l = (o - u) / 26,
          d = 1 << u;
        if (this.length <= l) return this._expand(l + 1), (this.words[l] |= d), this;
        for (var p = d, E = l; p !== 0 && E < this.length; E++) {
          var _ = this.words[E] | 0;
          (_ += p), (p = _ >>> 26), (_ &= 67108863), (this.words[E] = _);
        }
        return p !== 0 && ((this.words[E] = p), this.length++), this;
      }),
      (s.prototype.isZero = function () {
        return this.length === 1 && this.words[0] === 0;
      }),
      (s.prototype.cmpn = function (o) {
        var u = o < 0;
        if (this.negative !== 0 && !u) return -1;
        if (this.negative === 0 && u) return 1;
        this.strip();
        var l;
        if (this.length > 1) l = 1;
        else {
          u && (o = -o), i(o <= 67108863, 'Number is too big');
          var d = this.words[0] | 0;
          l = d === o ? 0 : d < o ? -1 : 1;
        }
        return this.negative !== 0 ? -l | 0 : l;
      }),
      (s.prototype.cmp = function (o) {
        if (this.negative !== 0 && o.negative === 0) return -1;
        if (this.negative === 0 && o.negative !== 0) return 1;
        var u = this.ucmp(o);
        return this.negative !== 0 ? -u | 0 : u;
      }),
      (s.prototype.ucmp = function (o) {
        if (this.length > o.length) return 1;
        if (this.length < o.length) return -1;
        for (var u = 0, l = this.length - 1; l >= 0; l--) {
          var d = this.words[l] | 0,
            p = o.words[l] | 0;
          if (d !== p) {
            d < p ? (u = -1) : d > p && (u = 1);
            break;
          }
        }
        return u;
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
        return new ut(o);
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
    function J(w, o) {
      (this.name = w),
        (this.p = new s(o, 16)),
        (this.n = this.p.bitLength()),
        (this.k = new s(1).iushln(this.n).isub(this.p)),
        (this.tmp = this._tmp());
    }
    (J.prototype._tmp = function () {
      var o = new s(null);
      return (o.words = new Array(Math.ceil(this.n / 13))), o;
    }),
      (J.prototype.ireduce = function (o) {
        var u = o,
          l;
        do
          this.split(u, this.tmp), (u = this.imulK(u)), (u = u.iadd(this.tmp)), (l = u.bitLength());
        while (l > this.n);
        var d = l < this.n ? -1 : u.ucmp(this.p);
        return (
          d === 0
            ? ((u.words[0] = 0), (u.length = 1))
            : d > 0
              ? u.isub(this.p)
              : u.strip !== void 0
                ? u.strip()
                : u._strip(),
          u
        );
      }),
      (J.prototype.split = function (o, u) {
        o.iushrn(this.n, 0, u);
      }),
      (J.prototype.imulK = function (o) {
        return o.imul(this.k);
      });
    function tt() {
      J.call(
        this,
        'k256',
        'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f'
      );
    }
    n(tt, J),
      (tt.prototype.split = function (o, u) {
        for (var l = 4194303, d = Math.min(o.length, 9), p = 0; p < d; p++) u.words[p] = o.words[p];
        if (((u.length = d), o.length <= 9)) {
          (o.words[0] = 0), (o.length = 1);
          return;
        }
        var E = o.words[9];
        for (u.words[u.length++] = E & l, p = 10; p < o.length; p++) {
          var _ = o.words[p] | 0;
          (o.words[p - 10] = ((_ & l) << 4) | (E >>> 22)), (E = _);
        }
        (E >>>= 22),
          (o.words[p - 10] = E),
          E === 0 && o.length > 10 ? (o.length -= 10) : (o.length -= 9);
      }),
      (tt.prototype.imulK = function (o) {
        (o.words[o.length] = 0), (o.words[o.length + 1] = 0), (o.length += 2);
        for (var u = 0, l = 0; l < o.length; l++) {
          var d = o.words[l] | 0;
          (u += d * 977), (o.words[l] = u & 67108863), (u = d * 64 + ((u / 67108864) | 0));
        }
        return (
          o.words[o.length - 1] === 0 && (o.length--, o.words[o.length - 1] === 0 && o.length--), o
        );
      });
    function Mt() {
      J.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
    }
    n(Mt, J);
    function se() {
      J.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
    }
    n(se, J);
    function de() {
      J.call(this, '25519', '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
    }
    n(de, J),
      (de.prototype.imulK = function (o) {
        for (var u = 0, l = 0; l < o.length; l++) {
          var d = (o.words[l] | 0) * 19 + u,
            p = d & 67108863;
          (d >>>= 26), (o.words[l] = p), (u = d);
        }
        return u !== 0 && (o.words[o.length++] = u), o;
      }),
      (s._prime = function (o) {
        if (Z[o]) return Z[o];
        var u;
        if (o === 'k256') u = new tt();
        else if (o === 'p224') u = new Mt();
        else if (o === 'p192') u = new se();
        else if (o === 'p25519') u = new de();
        else throw new Error('Unknown prime ' + o);
        return (Z[o] = u), u;
      });
    function ut(w) {
      if (typeof w == 'string') {
        var o = s._prime(w);
        (this.m = o.p), (this.prime = o);
      } else i(w.gtn(1), 'modulus must be greater than 1'), (this.m = w), (this.prime = null);
    }
    (ut.prototype._verify1 = function (o) {
      i(o.negative === 0, 'red works only with positives'),
        i(o.red, 'red works only with red numbers');
    }),
      (ut.prototype._verify2 = function (o, u) {
        i((o.negative | u.negative) === 0, 'red works only with positives'),
          i(o.red && o.red === u.red, 'red works only with red numbers');
      }),
      (ut.prototype.imod = function (o) {
        return this.prime ? this.prime.ireduce(o)._forceRed(this) : o.umod(this.m)._forceRed(this);
      }),
      (ut.prototype.neg = function (o) {
        return o.isZero() ? o.clone() : this.m.sub(o)._forceRed(this);
      }),
      (ut.prototype.add = function (o, u) {
        this._verify2(o, u);
        var l = o.add(u);
        return l.cmp(this.m) >= 0 && l.isub(this.m), l._forceRed(this);
      }),
      (ut.prototype.iadd = function (o, u) {
        this._verify2(o, u);
        var l = o.iadd(u);
        return l.cmp(this.m) >= 0 && l.isub(this.m), l;
      }),
      (ut.prototype.sub = function (o, u) {
        this._verify2(o, u);
        var l = o.sub(u);
        return l.cmpn(0) < 0 && l.iadd(this.m), l._forceRed(this);
      }),
      (ut.prototype.isub = function (o, u) {
        this._verify2(o, u);
        var l = o.isub(u);
        return l.cmpn(0) < 0 && l.iadd(this.m), l;
      }),
      (ut.prototype.shl = function (o, u) {
        return this._verify1(o), this.imod(o.ushln(u));
      }),
      (ut.prototype.imul = function (o, u) {
        return this._verify2(o, u), this.imod(o.imul(u));
      }),
      (ut.prototype.mul = function (o, u) {
        return this._verify2(o, u), this.imod(o.mul(u));
      }),
      (ut.prototype.isqr = function (o) {
        return this.imul(o, o.clone());
      }),
      (ut.prototype.sqr = function (o) {
        return this.mul(o, o);
      }),
      (ut.prototype.sqrt = function (o) {
        if (o.isZero()) return o.clone();
        var u = this.m.andln(3);
        if ((i(u % 2 === 1), u === 3)) {
          var l = this.m.add(new s(1)).iushrn(2);
          return this.pow(o, l);
        }
        for (var d = this.m.subn(1), p = 0; !d.isZero() && d.andln(1) === 0; ) p++, d.iushrn(1);
        i(!d.isZero());
        var E = new s(1).toRed(this),
          _ = E.redNeg(),
          g = this.m.subn(1).iushrn(1),
          a = this.m.bitLength();
        for (a = new s(2 * a * a).toRed(this); this.pow(a, g).cmp(_) !== 0; ) a.redIAdd(_);
        for (
          var m = this.pow(a, d), z = this.pow(o, d.addn(1).iushrn(1)), K = this.pow(o, d), q = p;
          K.cmp(E) !== 0;

        ) {
          for (var G = K, ot = 0; G.cmp(E) !== 0; ot++) G = G.redSqr();
          i(ot < q);
          var yt = this.pow(m, new s(1).iushln(q - ot - 1));
          (z = z.redMul(yt)), (m = yt.redSqr()), (K = K.redMul(m)), (q = ot);
        }
        return z;
      }),
      (ut.prototype.invm = function (o) {
        var u = o._invmp(this.m);
        return u.negative !== 0 ? ((u.negative = 0), this.imod(u).redNeg()) : this.imod(u);
      }),
      (ut.prototype.pow = function (o, u) {
        if (u.isZero()) return new s(1).toRed(this);
        if (u.cmpn(1) === 0) return o.clone();
        var l = 4,
          d = new Array(1 << l);
        (d[0] = new s(1).toRed(this)), (d[1] = o);
        for (var p = 2; p < d.length; p++) d[p] = this.mul(d[p - 1], o);
        var E = d[0],
          _ = 0,
          g = 0,
          a = u.bitLength() % 26;
        for (a === 0 && (a = 26), p = u.length - 1; p >= 0; p--) {
          for (var m = u.words[p], z = a - 1; z >= 0; z--) {
            var K = (m >> z) & 1;
            if ((E !== d[0] && (E = this.sqr(E)), K === 0 && _ === 0)) {
              g = 0;
              continue;
            }
            (_ <<= 1),
              (_ |= K),
              g++,
              !(g !== l && (p !== 0 || z !== 0)) && ((E = this.mul(E, d[_])), (g = 0), (_ = 0));
          }
          a = 26;
        }
        return E;
      }),
      (ut.prototype.convertTo = function (o) {
        var u = o.umod(this.m);
        return u === o ? u.clone() : u;
      }),
      (ut.prototype.convertFrom = function (o) {
        var u = o.clone();
        return (u.red = null), u;
      }),
      (s.mont = function (o) {
        return new be(o);
      });
    function be(w) {
      ut.call(this, w),
        (this.shift = this.m.bitLength()),
        this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
        (this.r = new s(1).iushln(this.shift)),
        (this.r2 = this.imod(this.r.sqr())),
        (this.rinv = this.r._invmp(this.m)),
        (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
        (this.minv = this.minv.umod(this.r)),
        (this.minv = this.r.sub(this.minv));
    }
    n(be, ut),
      (be.prototype.convertTo = function (o) {
        return this.imod(o.ushln(this.shift));
      }),
      (be.prototype.convertFrom = function (o) {
        var u = this.imod(o.mul(this.rinv));
        return (u.red = null), u;
      }),
      (be.prototype.imul = function (o, u) {
        if (o.isZero() || u.isZero()) return (o.words[0] = 0), (o.length = 1), o;
        var l = o.imul(u),
          d = l.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          p = l.isub(d).iushrn(this.shift),
          E = p;
        return (
          p.cmp(this.m) >= 0 ? (E = p.isub(this.m)) : p.cmpn(0) < 0 && (E = p.iadd(this.m)),
          E._forceRed(this)
        );
      }),
      (be.prototype.mul = function (o, u) {
        if (o.isZero() || u.isZero()) return new s(0)._forceRed(this);
        var l = o.mul(u),
          d = l.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          p = l.isub(d).iushrn(this.shift),
          E = p;
        return (
          p.cmp(this.m) >= 0 ? (E = p.isub(this.m)) : p.cmpn(0) < 0 && (E = p.iadd(this.m)),
          E._forceRed(this)
        );
      }),
      (be.prototype.invm = function (o) {
        var u = this.imod(o._invmp(this.m).mul(this.r2));
        return u._forceRed(this);
      });
  })(r, Ce);
})(Zs);
var gh = Zs.exports;
const $r = pn,
  fr = gh;
var Pe = function () {};
function ns(r) {
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
  var e = r + '(' + t.map(ns).join(',') + ')';
  return $r.keccak256(H.from(e));
};
Pe.methodID = function (r, t) {
  return Pe.eventID(r, t).slice(0, 4);
};
function di(r) {
  return parseInt(/^\D+(\d+)$/.exec(r)[1], 10);
}
function Ts(r) {
  var t = /^\D+(\d+)x(\d+)$/.exec(r);
  return [parseInt(t[1], 10), parseInt(t[2], 10)];
}
function vn(r) {
  var t = r.match(/(.*)\[(.*?)\]$/);
  return t ? (t[2] === '' ? 'dynamic' : parseInt(t[2], 10)) : null;
}
function yi(r) {
  var t = typeof r;
  if (t === 'string') return $r.isHexPrefixed(r) ? new fr($r.stripHexPrefix(r), 16) : new fr(r, 10);
  if (t === 'number') return new fr(r);
  if (r.toArray) return r;
  throw new Error('Argument is not a number');
}
function $a(r) {
  var t = /^(\w+)\((.*)\)$/.exec(r);
  if (t.length !== 3) throw new Error('Invalid method signature');
  var e = /^(.+)\):\((.+)$/.exec(t[2]);
  if (e !== null && e.length === 3)
    return { method: t[1], args: e[1].split(','), retargs: e[2].split(',') };
  var i = t[2].split(',');
  return i.length === 1 && i[0] === '' && (i = []), { method: t[1], args: i };
}
function zr(r, t) {
  var e, i, n, s;
  if (r === 'address') return zr('uint160', yi(t));
  if (r === 'bool') return zr('uint8', t ? 1 : 0);
  if (r === 'string') return zr('bytes', H.from(t, 'utf8'));
  if (nn(r)) {
    if (typeof t.length > 'u') throw new Error('Not an array?');
    if (((e = vn(r)), e !== 'dynamic' && e !== 0 && t.length > e))
      throw new Error('Elements exceed array size: ' + e);
    (n = []), (r = r.slice(0, r.lastIndexOf('['))), typeof t == 'string' && (t = JSON.parse(t));
    for (s in t) n.push(zr(r, t[s]));
    if (e === 'dynamic') {
      var f = zr('uint256', t.length);
      n.unshift(f);
    }
    return H.concat(n);
  } else {
    if (r === 'bytes')
      return (
        (t = H.from(t)),
        (n = H.concat([zr('uint256', t.length), t])),
        t.length % 32 !== 0 && (n = H.concat([n, $r.zeros(32 - (t.length % 32))])),
        n
      );
    if (r.startsWith('bytes')) {
      if (((e = di(r)), e < 1 || e > 32)) throw new Error('Invalid bytes<N> width: ' + e);
      return $r.setLengthRight(t, 32);
    } else if (r.startsWith('uint')) {
      if (((e = di(r)), e % 8 || e < 8 || e > 256)) throw new Error('Invalid uint<N> width: ' + e);
      if (((i = yi(t)), i.bitLength() > e))
        throw new Error('Supplied uint exceeds width: ' + e + ' vs ' + i.bitLength());
      if (i < 0) throw new Error('Supplied uint is negative');
      return i.toArrayLike(H, 'be', 32);
    } else if (r.startsWith('int')) {
      if (((e = di(r)), e % 8 || e < 8 || e > 256)) throw new Error('Invalid int<N> width: ' + e);
      if (((i = yi(t)), i.bitLength() > e))
        throw new Error('Supplied int exceeds width: ' + e + ' vs ' + i.bitLength());
      return i.toTwos(256).toArrayLike(H, 'be', 32);
    } else if (r.startsWith('ufixed')) {
      if (((e = Ts(r)), (i = yi(t)), i < 0)) throw new Error('Supplied ufixed is negative');
      return zr('uint256', i.mul(new fr(2).pow(new fr(e[1]))));
    } else if (r.startsWith('fixed'))
      return (e = Ts(r)), zr('int256', yi(t).mul(new fr(2).pow(new fr(e[1]))));
  }
  throw new Error('Unsupported or invalid type: ' + r);
}
function Or(r, t, e) {
  typeof r == 'string' && (r = Qs(r));
  var i, n, s, f;
  if (r.name === 'address') return Or(r.rawType, t, e).toArrayLike(H, 'be', 20).toString('hex');
  if (r.name === 'bool') return Or(r.rawType, t, e).toString() === new fr(1).toString();
  if (r.name === 'string') {
    var c = Or(r.rawType, t, e);
    return H.from(c, 'utf8').toString();
  } else if (r.isArray) {
    for (
      s = [],
        i = r.size,
        r.size === 'dynamic' &&
          ((e = Or('uint256', t, e).toNumber()),
          (i = Or('uint256', t, e).toNumber()),
          (e = e + 32)),
        f = 0;
      f < i;
      f++
    ) {
      var v = Or(r.subArray, t, e);
      s.push(v), (e += r.subArray.memoryUsage);
    }
    return s;
  } else {
    if (r.name === 'bytes')
      return (
        (e = Or('uint256', t, e).toNumber()),
        (i = Or('uint256', t, e).toNumber()),
        t.slice(e + 32, e + 32 + i)
      );
    if (r.name.startsWith('bytes')) return t.slice(e, e + r.size);
    if (r.name.startsWith('uint')) {
      if (((n = new fr(t.slice(e, e + 32), 16, 'be')), n.bitLength() > r.size))
        throw new Error('Decoded int exceeds width: ' + r.size + ' vs ' + n.bitLength());
      return n;
    } else if (r.name.startsWith('int')) {
      if (((n = new fr(t.slice(e, e + 32), 16, 'be').fromTwos(256)), n.bitLength() > r.size))
        throw new Error('Decoded uint exceeds width: ' + r.size + ' vs ' + n.bitLength());
      return n;
    } else if (r.name.startsWith('ufixed')) {
      if (((i = new fr(2).pow(new fr(r.size[1]))), (n = Or('uint256', t, e)), !n.mod(i).isZero()))
        throw new Error('Decimals not supported yet');
      return n.div(i);
    } else if (r.name.startsWith('fixed')) {
      if (((i = new fr(2).pow(new fr(r.size[1]))), (n = Or('int256', t, e)), !n.mod(i).isZero()))
        throw new Error('Decimals not supported yet');
      return n.div(i);
    }
  }
  throw new Error('Unsupported or invalid type: ' + r.name);
}
function Qs(r) {
  var t, e;
  if (nn(r)) {
    t = vn(r);
    var i = r.slice(0, r.lastIndexOf('['));
    return (
      (i = Qs(i)),
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
        ? (e.size = di(r))
        : (r.startsWith('ufixed') || r.startsWith('fixed')) && (e.size = Ts(r)),
      r.startsWith('bytes') && r !== 'bytes' && (e.size < 1 || e.size > 32))
    )
      throw new Error('Invalid bytes<N> width: ' + e.size);
    if ((r.startsWith('uint') || r.startsWith('int')) && (e.size % 8 || e.size < 8 || e.size > 256))
      throw new Error('Invalid int/uint<N> width: ' + e.size);
    return e;
  }
}
function ph(r) {
  return r === 'string' || r === 'bytes' || vn(r) === 'dynamic';
}
function nn(r) {
  return r.lastIndexOf(']') === r.length - 1;
}
Pe.rawEncode = function (r, t) {
  var e = [],
    i = [],
    n = 0;
  r.forEach(function (b) {
    if (nn(b)) {
      var S = vn(b);
      S !== 'dynamic' ? (n += 32 * S) : (n += 32);
    } else n += 32;
  });
  for (var s = 0; s < r.length; s++) {
    var f = ns(r[s]),
      c = t[s],
      v = zr(f, c);
    ph(f) ? (e.push(zr('uint256', n)), i.push(v), (n += v.length)) : e.push(v);
  }
  return H.concat(e.concat(i));
};
Pe.rawDecode = function (r, t) {
  var e = [];
  t = H.from(t);
  for (var i = 0, n = 0; n < r.length; n++) {
    var s = ns(r[n]),
      f = Qs(s),
      c = Or(f, t, i);
    (i += f.memoryUsage), e.push(c);
  }
  return e;
};
Pe.simpleEncode = function (r) {
  var t = Array.prototype.slice.call(arguments).slice(1),
    e = $a(r);
  if (t.length !== e.args.length) throw new Error('Argument count mismatch');
  return H.concat([Pe.methodID(e.method, e.args), Pe.rawEncode(e.args, t)]);
};
Pe.simpleDecode = function (r, t) {
  var e = $a(r);
  if (!e.retargs) throw new Error('No return values in method');
  return Pe.rawDecode(e.retargs, t);
};
function Po(r, t) {
  return r.startsWith('address') || r.startsWith('bytes') ? '0x' + t.toString('hex') : t.toString();
}
Pe.stringify = function (r, t) {
  var e = [];
  for (var i in r) {
    var n = r[i],
      s = t[i];
    /^[^\[]+\[.*\]$/.test(n)
      ? (s = s
          .map(function (f) {
            return Po(n, f);
          })
          .join(', '))
      : (s = Po(n, s)),
      e.push(s);
  }
  return e;
};
Pe.solidityHexValue = function (r, t, e) {
  var i, n;
  if (nn(r)) {
    var s = r.replace(/\[.*?\]/, '');
    if (!nn(s)) {
      var f = vn(r);
      if (f !== 'dynamic' && f !== 0 && t.length > f)
        throw new Error('Elements exceed array size: ' + f);
    }
    var c = t.map(function (S) {
      return Pe.solidityHexValue(s, S, 256);
    });
    return H.concat(c);
  } else {
    if (r === 'bytes') return t;
    if (r === 'string') return H.from(t, 'utf8');
    if (r === 'bool') {
      e = e || 8;
      var v = Array(e / 4).join('0');
      return H.from(t ? v + '1' : v + '0', 'hex');
    } else if (r === 'address') {
      var b = 20;
      return e && (b = e / 8), $r.setLengthLeft(t, b);
    } else if (r.startsWith('bytes')) {
      if (((i = di(r)), i < 1 || i > 32)) throw new Error('Invalid bytes<N> width: ' + i);
      return $r.setLengthRight(t, i);
    } else if (r.startsWith('uint')) {
      if (((i = di(r)), i % 8 || i < 8 || i > 256)) throw new Error('Invalid uint<N> width: ' + i);
      if (((n = yi(t)), n.bitLength() > i))
        throw new Error('Supplied uint exceeds width: ' + i + ' vs ' + n.bitLength());
      return (e = e || i), n.toArrayLike(H, 'be', e / 8);
    } else if (r.startsWith('int')) {
      if (((i = di(r)), i % 8 || i < 8 || i > 256)) throw new Error('Invalid int<N> width: ' + i);
      if (((n = yi(t)), n.bitLength() > i))
        throw new Error('Supplied int exceeds width: ' + i + ' vs ' + n.bitLength());
      return (e = e || i), n.toTwos(i).toArrayLike(H, 'be', e / 8);
    } else throw new Error('Unsupported or invalid type: ' + r);
  }
};
Pe.solidityPack = function (r, t) {
  if (r.length !== t.length) throw new Error('Number of types are not matching the values');
  for (var e = [], i = 0; i < r.length; i++) {
    var n = ns(r[i]),
      s = t[i];
    e.push(Pe.solidityHexValue(n, s, null));
  }
  return H.concat(e);
};
Pe.soliditySHA3 = function (r, t) {
  return $r.keccak256(Pe.solidityPack(r, t));
};
Pe.soliditySHA256 = function (r, t) {
  return $r.sha256(Pe.solidityPack(r, t));
};
Pe.solidityRIPEMD160 = function (r, t) {
  return $r.ripemd160(Pe.solidityPack(r, t), !0);
};
function mh(r) {
  return r >= '0' && r <= '9';
}
Pe.fromSerpent = function (r) {
  for (var t = [], e = 0; e < r.length; e++) {
    var i = r[e];
    if (i === 's') t.push('bytes');
    else if (i === 'b') {
      for (var n = 'bytes', s = e + 1; s < r.length && mh(r[s]); ) (n += r[s] - '0'), s++;
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
    else if (i.startsWith('bytes')) t.push('b' + di(i));
    else if (i === 'int256') t.push('i');
    else if (i === 'int256[]') t.push('a');
    else throw new Error('Unsupported or invalid type: ' + i);
  }
  return t.join('');
};
var vh = Pe,
  yh = vh;
(function (r) {
  Object.defineProperty(r, '__esModule', { value: !0 }),
    (r.recoverTypedSignature =
      r.signTypedData =
      r.typedSignatureHash =
      r.TypedDataUtils =
      r.TYPED_MESSAGE_SCHEMA =
      r.SignTypedDataVersion =
        void 0);
  const t = pn,
    e = yh,
    i = Ze;
  var n;
  (function (C) {
    (C.V1 = 'V1'), (C.V3 = 'V3'), (C.V4 = 'V4');
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
  function s(C, Z) {
    if (Object.keys(n).includes(C)) {
      if (Z && !Z.includes(C))
        throw new Error(
          `SignTypedDataVersion not allowed: '${C}'. Allowed versions are: ${Z.join(', ')}`
        );
    } else throw new Error(`Invalid version: '${C}'`);
  }
  function f(C, Z, J, tt, Mt) {
    if ((s(Mt, [n.V3, n.V4]), C[J] !== void 0))
      return [
        'bytes32',
        Mt === n.V4 && tt == null
          ? '0x0000000000000000000000000000000000000000000000000000000000000000'
          : t.keccak(c(J, tt, C, Mt)),
      ];
    if (tt === void 0) throw new Error(`missing value for field ${Z} of type ${J}`);
    if (J === 'bytes') return ['bytes32', t.keccak(tt)];
    if (J === 'string')
      return typeof tt == 'string' && (tt = H.from(tt, 'utf8')), ['bytes32', t.keccak(tt)];
    if (J.lastIndexOf(']') === J.length - 1) {
      if (Mt === n.V3) throw new Error('Arrays are unimplemented in encodeData; use V4 extension');
      const se = J.slice(0, J.lastIndexOf('[')),
        de = tt.map((ut) => f(C, Z, se, ut, Mt));
      return [
        'bytes32',
        t.keccak(
          e.rawEncode(
            de.map(([ut]) => ut),
            de.map(([, ut]) => ut)
          )
        ),
      ];
    }
    return [J, tt];
  }
  function c(C, Z, J, tt) {
    s(tt, [n.V3, n.V4]);
    const Mt = ['bytes32'],
      se = [P(C, J)];
    for (const de of J[C]) {
      if (tt === n.V3 && Z[de.name] === void 0) continue;
      const [ut, be] = f(J, de.name, de.type, Z[de.name], tt);
      Mt.push(ut), se.push(be);
    }
    return e.rawEncode(Mt, se);
  }
  function v(C, Z) {
    let J = '';
    const tt = b(C, Z);
    tt.delete(C);
    const Mt = [C, ...Array.from(tt).sort()];
    for (const se of Mt) {
      if (!Z[se]) throw new Error(`No type definition specified: ${se}`);
      J += `${se}(${Z[se].map(({ name: ut, type: be }) => `${be} ${ut}`).join(',')})`;
    }
    return J;
  }
  function b(C, Z, J = new Set()) {
    if ((([C] = C.match(/^\w*/u)), J.has(C) || Z[C] === void 0)) return J;
    J.add(C);
    for (const tt of Z[C]) b(tt.type, Z, J);
    return J;
  }
  function S(C, Z, J, tt) {
    return s(tt, [n.V3, n.V4]), t.keccak(c(C, Z, J, tt));
  }
  function P(C, Z) {
    return t.keccak(v(C, Z));
  }
  function B(C) {
    const Z = {};
    for (const J in r.TYPED_MESSAGE_SCHEMA.properties) C[J] && (Z[J] = C[J]);
    return 'types' in Z && (Z.types = Object.assign({ EIP712Domain: [] }, Z.types)), Z;
  }
  function N(C, Z) {
    s(Z, [n.V3, n.V4]);
    const J = B(C),
      tt = [H.from('1901', 'hex')];
    return (
      tt.push(S('EIP712Domain', J.domain, J.types, Z)),
      J.primaryType !== 'EIP712Domain' && tt.push(S(J.primaryType, J.message, J.types, Z)),
      t.keccak(H.concat(tt))
    );
  }
  r.TypedDataUtils = {
    encodeData: c,
    encodeType: v,
    findTypeDependencies: b,
    hashStruct: S,
    hashType: P,
    sanitizeData: B,
    eip712Hash: N,
  };
  function R(C) {
    const Z = V(C);
    return t.bufferToHex(Z);
  }
  r.typedSignatureHash = R;
  function V(C) {
    const Z = new Error('Expect argument to be non-empty array');
    if (typeof C != 'object' || !('length' in C) || !C.length) throw Z;
    const J = C.map(function (se) {
        return se.type !== 'bytes' ? se.value : i.legacyToBuffer(se.value);
      }),
      tt = C.map(function (se) {
        return se.type;
      }),
      Mt = C.map(function (se) {
        if (!se.name) throw Z;
        return `${se.type} ${se.name}`;
      });
    return e.soliditySHA3(
      ['bytes32', 'bytes32'],
      [e.soliditySHA3(new Array(C.length).fill('string'), Mt), e.soliditySHA3(tt, J)]
    );
  }
  function lt({ privateKey: C, data: Z, version: J }) {
    if ((s(J), i.isNullish(Z))) throw new Error('Missing data parameter');
    if (i.isNullish(C)) throw new Error('Missing private key parameter');
    const tt = J === n.V1 ? V(Z) : r.TypedDataUtils.eip712Hash(Z, J),
      Mt = t.ecsign(tt, C);
    return i.concatSig(t.toBuffer(Mt.v), Mt.r, Mt.s);
  }
  r.signTypedData = lt;
  function $({ data: C, signature: Z, version: J }) {
    if ((s(J), i.isNullish(C))) throw new Error('Missing data parameter');
    if (i.isNullish(Z)) throw new Error('Missing signature parameter');
    const tt = J === n.V1 ? V(C) : r.TypedDataUtils.eip712Hash(C, J),
      Mt = i.recoverPublicKey(tt, Z),
      se = t.publicToAddress(Mt);
    return t.bufferToHex(se);
  }
  r.recoverTypedSignature = $;
})(Qa);
var Pr = {},
  Xa = { exports: {} };
(function (r) {
  (function (t, e) {
    r.exports ? (r.exports = e()) : (t.nacl || (t.nacl = {}), (t.nacl.util = e()));
  })(Ce, function () {
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
          f = new Uint8Array(s.length);
        for (n = 0; n < s.length; n++) f[n] = s.charCodeAt(n);
        return f;
      }),
      (t.encodeUTF8 = function (i) {
        var n,
          s = [];
        for (n = 0; n < i.length; n++) s.push(String.fromCharCode(i[n]));
        return decodeURIComponent(escape(s.join('')));
      }),
      typeof atob > 'u'
        ? typeof H.from < 'u'
          ? ((t.encodeBase64 = function (i) {
              return H.from(i).toString('base64');
            }),
            (t.decodeBase64 = function (i) {
              return e(i), new Uint8Array(Array.prototype.slice.call(H.from(i, 'base64'), 0));
            }))
          : ((t.encodeBase64 = function (i) {
              return new H(i).toString('base64');
            }),
            (t.decodeBase64 = function (i) {
              return e(i), new Uint8Array(Array.prototype.slice.call(new H(i, 'base64'), 0));
            }))
        : ((t.encodeBase64 = function (i) {
            var n,
              s = [],
              f = i.length;
            for (n = 0; n < f; n++) s.push(String.fromCharCode(i[n]));
            return btoa(s.join(''));
          }),
          (t.decodeBase64 = function (i) {
            e(i);
            var n,
              s = atob(i),
              f = new Uint8Array(s.length);
            for (n = 0; n < s.length; n++) f[n] = s.charCodeAt(n);
            return f;
          })),
      t
    );
  });
})(Xa);
var wh = Xa.exports,
  bh =
    (Ce && Ce.__createBinding) ||
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
  Ah =
    (Ce && Ce.__setModuleDefault) ||
    (Object.create
      ? function (r, t) {
          Object.defineProperty(r, 'default', { enumerable: !0, value: t });
        }
      : function (r, t) {
          r.default = t;
        }),
  tu =
    (Ce && Ce.__importStar) ||
    function (r) {
      if (r && r.__esModule) return r;
      var t = {};
      if (r != null)
        for (var e in r)
          e !== 'default' && Object.prototype.hasOwnProperty.call(r, e) && bh(t, r, e);
      return Ah(t, r), t;
    };
Object.defineProperty(Pr, '__esModule', { value: !0 });
Pr.getEncryptionPublicKey = Pr.decryptSafely = Pr.decrypt = Pr.encryptSafely = Pr.encrypt = void 0;
const Ei = tu(Oa),
  Dr = tu(wh),
  Qr = Ze;
function eu({ publicKey: r, data: t, version: e }) {
  if (Qr.isNullish(r)) throw new Error('Missing publicKey parameter');
  if (Qr.isNullish(t)) throw new Error('Missing data parameter');
  if (Qr.isNullish(e)) throw new Error('Missing version parameter');
  switch (e) {
    case 'x25519-xsalsa20-poly1305': {
      if (typeof t != 'string') throw new Error('Message data must be given as a string');
      const i = Ei.box.keyPair();
      let n;
      try {
        n = Dr.decodeBase64(r);
      } catch {
        throw new Error('Bad public key');
      }
      const s = Dr.decodeUTF8(t),
        f = Ei.randomBytes(Ei.box.nonceLength),
        c = Ei.box(s, f, n, i.secretKey);
      return {
        version: 'x25519-xsalsa20-poly1305',
        nonce: Dr.encodeBase64(f),
        ephemPublicKey: Dr.encodeBase64(i.publicKey),
        ciphertext: Dr.encodeBase64(c),
      };
    }
    default:
      throw new Error('Encryption type/version not supported');
  }
}
Pr.encrypt = eu;
function Eh({ publicKey: r, data: t, version: e }) {
  if (Qr.isNullish(r)) throw new Error('Missing publicKey parameter');
  if (Qr.isNullish(t)) throw new Error('Missing data parameter');
  if (Qr.isNullish(e)) throw new Error('Missing version parameter');
  const i = 2 ** 11,
    n = 16;
  if (typeof t == 'object' && 'toJSON' in t)
    throw new Error('Cannot encrypt with toJSON property.  Please remove toJSON property');
  const s = { data: t, padding: '' },
    c = H.byteLength(JSON.stringify(s), 'utf-8') % i;
  let v = 0;
  c > 0 && (v = i - c - n), (s.padding = '0'.repeat(v));
  const b = JSON.stringify(s);
  return eu({ publicKey: r, data: b, version: e });
}
Pr.encryptSafely = Eh;
function ru({ encryptedData: r, privateKey: t }) {
  if (Qr.isNullish(r)) throw new Error('Missing encryptedData parameter');
  if (Qr.isNullish(t)) throw new Error('Missing privateKey parameter');
  switch (r.version) {
    case 'x25519-xsalsa20-poly1305': {
      const e = iu(t),
        i = Ei.box.keyPair.fromSecretKey(e).secretKey,
        n = Dr.decodeBase64(r.nonce),
        s = Dr.decodeBase64(r.ciphertext),
        f = Dr.decodeBase64(r.ephemPublicKey),
        c = Ei.box.open(s, n, f, i);
      let v;
      try {
        v = Dr.encodeUTF8(c);
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
Pr.decrypt = ru;
function xh({ encryptedData: r, privateKey: t }) {
  if (Qr.isNullish(r)) throw new Error('Missing encryptedData parameter');
  if (Qr.isNullish(t)) throw new Error('Missing privateKey parameter');
  return JSON.parse(ru({ encryptedData: r, privateKey: t })).data;
}
Pr.decryptSafely = xh;
function Mh(r) {
  const t = iu(r),
    e = Ei.box.keyPair.fromSecretKey(t).publicKey;
  return Dr.encodeBase64(e);
}
Pr.getEncryptionPublicKey = Mh;
function iu(r) {
  const t = H.from(r, 'hex').toString('base64');
  return Dr.decodeBase64(t);
}
(function (r) {
  var t =
      (Ce && Ce.__createBinding) ||
      (Object.create
        ? function (n, s, f, c) {
            c === void 0 && (c = f),
              Object.defineProperty(n, c, {
                enumerable: !0,
                get: function () {
                  return s[f];
                },
              });
          }
        : function (n, s, f, c) {
            c === void 0 && (c = f), (n[c] = s[f]);
          }),
    e =
      (Ce && Ce.__exportStar) ||
      function (n, s) {
        for (var f in n)
          f !== 'default' && !Object.prototype.hasOwnProperty.call(s, f) && t(s, n, f);
      };
  Object.defineProperty(r, '__esModule', { value: !0 }),
    (r.normalize = r.concatSig = void 0),
    e(ci, r),
    e(Qa, r),
    e(Pr, r);
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
})(yl);
const Sh = 'networks/5.7.1',
  ko = new D(Sh);
function _h(r) {
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
        const f = new e.PocketProvider(r, i.pocket);
        f.network && s.indexOf(f.network.name) === -1 && n.push(f);
      } catch {}
    }
    if (e.CloudflareProvider && i.cloudflare !== '-')
      try {
        n.push(new e.CloudflareProvider(r));
      } catch {}
    if (e.AnkrProvider && i.ankr !== '-')
      try {
        const s = ['ropsten'],
          f = new e.AnkrProvider(r, i.ankr);
        f.network && s.indexOf(f.network.name) === -1 && n.push(f);
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
function Hn(r, t) {
  const e = function (i, n) {
    return i.JsonRpcProvider ? new i.JsonRpcProvider(r, t) : null;
  };
  return (
    (e.renetwork = function (i) {
      return Hn(r, i);
    }),
    e
  );
}
const To = {
    chainId: 1,
    ensAddress: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    name: 'homestead',
    _defaultProvider: ri('homestead'),
  },
  Bo = {
    chainId: 3,
    ensAddress: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    name: 'ropsten',
    _defaultProvider: ri('ropsten'),
  },
  No = {
    chainId: 63,
    name: 'classicMordor',
    _defaultProvider: Hn('https://www.ethercluster.com/mordor', 'classicMordor'),
  },
  En = {
    unspecified: { chainId: 0, name: 'unspecified' },
    homestead: To,
    mainnet: To,
    morden: { chainId: 2, name: 'morden' },
    ropsten: Bo,
    testnet: Bo,
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
      _defaultProvider: Hn('https://www.ethercluster.com/etc', 'classic'),
    },
    classicMorden: { chainId: 62, name: 'classicMorden' },
    classicMordor: No,
    classicTestnet: No,
    classicKotti: {
      chainId: 6,
      name: 'classicKotti',
      _defaultProvider: Hn('https://www.ethercluster.com/kotti', 'classicKotti'),
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
function Ph(r) {
  if (r == null) return null;
  if (typeof r == 'number') {
    for (const i in En) {
      const n = En[i];
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
    const i = En[r];
    return i == null
      ? null
      : {
          name: i.name,
          chainId: i.chainId,
          ensAddress: i.ensAddress,
          _defaultProvider: i._defaultProvider || null,
        };
  }
  const t = En[r.name];
  if (!t)
    return (
      typeof r.chainId != 'number' &&
        ko.throwArgumentError('invalid network chainId', 'network', r),
      r
    );
  r.chainId !== 0 &&
    r.chainId !== t.chainId &&
    ko.throwArgumentError('network chainId mismatch', 'network', r);
  let e = r._defaultProvider || null;
  return (
    e == null &&
      t._defaultProvider &&
      (_h(t._defaultProvider) ? (e = t._defaultProvider.renetwork(r)) : (e = t._defaultProvider)),
    {
      name: r.name,
      chainId: t.chainId,
      ensAddress: r.ensAddress || t.ensAddress || null,
      _defaultProvider: e,
    }
  );
}
const kh = 'web/5.7.1';
var Th = function (r, t, e, i) {
  function n(s) {
    return s instanceof e
      ? s
      : new e(function (f) {
          f(s);
        });
  }
  return new (e || (e = Promise))(function (s, f) {
    function c(S) {
      try {
        b(i.next(S));
      } catch (P) {
        f(P);
      }
    }
    function v(S) {
      try {
        b(i.throw(S));
      } catch (P) {
        f(P);
      }
    }
    function b(S) {
      S.done ? s(S.value) : n(S.value).then(c, v);
    }
    b((i = i.apply(r, t || [])).next());
  });
};
function Bh(r, t) {
  return Th(this, void 0, void 0, function* () {
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
      const f = t.fetchOptions;
      f.mode && (e.mode = f.mode),
        f.cache && (e.cache = f.cache),
        f.credentials && (e.credentials = f.credentials),
        f.redirect && (e.redirect = f.redirect),
        f.referrer && (e.referrer = f.referrer);
    }
    const i = yield fetch(r, e),
      n = yield i.arrayBuffer(),
      s = {};
    return (
      i.headers.forEach
        ? i.headers.forEach((f, c) => {
            s[c.toLowerCase()] = f;
          })
        : i.headers.keys().forEach((f) => {
            s[f.toLowerCase()] = i.headers.get(f);
          }),
      { headers: s, statusCode: i.status, statusMessage: i.statusText, body: mt(new Uint8Array(n)) }
    );
  });
}
var Nh = function (r, t, e, i) {
  function n(s) {
    return s instanceof e
      ? s
      : new e(function (f) {
          f(s);
        });
  }
  return new (e || (e = Promise))(function (s, f) {
    function c(S) {
      try {
        b(i.next(S));
      } catch (P) {
        f(P);
      }
    }
    function v(S) {
      try {
        b(i.throw(S));
      } catch (P) {
        f(P);
      }
    }
    function b(S) {
      S.done ? s(S.value) : n(S.value).then(c, v);
    }
    b((i = i.apply(r, t || [])).next());
  });
};
const Ur = new D(kh);
function Co(r) {
  return new Promise((t) => {
    setTimeout(t, r);
  });
}
function fi(r, t) {
  if (r == null) return null;
  if (typeof r == 'string') return r;
  if (Rs(r)) {
    if (t && (t.split('/')[0] === 'text' || t.split(';')[0].trim() === 'application/json'))
      try {
        return dn(r);
      } catch {}
    return vt(r);
  }
  return r;
}
function Ch(r) {
  return sr(r.replace(/%([0-9a-f][0-9a-f])/gi, (t, e) => String.fromCharCode(parseInt(e, 16))));
}
function Ih(r, t, e) {
  const i = typeof r == 'object' && r.throttleLimit != null ? r.throttleLimit : 12;
  Ur.assertArgument(
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
  Ur.assertArgument(
    s > 0 && s % 1 === 0,
    'invalid connection throttle slot interval',
    'connection.throttleSlotInterval',
    s
  );
  const f = typeof r == 'object' ? !!r.errorPassThrough : !1,
    c = {};
  let v = null;
  const b = { method: 'GET' };
  let S = !1,
    P = 2 * 60 * 1e3;
  if (typeof r == 'string') v = r;
  else if (typeof r == 'object') {
    if (
      ((r == null || r.url == null) && Ur.throwArgumentError('missing URL', 'connection.url', r),
      (v = r.url),
      typeof r.timeout == 'number' && r.timeout > 0 && (P = r.timeout),
      r.headers)
    )
      for (const $ in r.headers)
        (c[$.toLowerCase()] = { key: $, value: String(r.headers[$]) }),
          ['if-none-match', 'if-modified-since'].indexOf($.toLowerCase()) >= 0 && (S = !0);
    if (((b.allowGzip = !!r.allowGzip), r.user != null && r.password != null)) {
      v.substring(0, 6) !== 'https:' &&
        r.allowInsecureAuthentication !== !0 &&
        Ur.throwError(
          'basic authentication requires a secure https url',
          D.errors.INVALID_ARGUMENT,
          { argument: 'url', url: v, user: r.user, password: '[REDACTED]' }
        );
      const $ = r.user + ':' + r.password;
      c.authorization = { key: 'Authorization', value: 'Basic ' + ca(sr($)) };
    }
    r.skipFetchSetup != null && (b.skipFetchSetup = !!r.skipFetchSetup),
      r.fetchOptions != null && (b.fetchOptions = Ve(r.fetchOptions));
  }
  const B = new RegExp('^data:([^;:]*)?(;base64)?,(.*)$', 'i'),
    N = v ? v.match(B) : null;
  if (N)
    try {
      const $ = {
        statusCode: 200,
        statusMessage: 'OK',
        headers: { 'content-type': N[1] || 'text/plain' },
        body: N[2] ? ha(N[3]) : Ch(N[3]),
      };
      let C = $.body;
      return e && (C = e($.body, $)), Promise.resolve(C);
    } catch ($) {
      Ur.throwError('processing response error', D.errors.SERVER_ERROR, {
        body: fi(N[1], N[2]),
        error: $,
        requestBody: null,
        requestMethod: 'GET',
        url: v,
      });
    }
  t &&
    ((b.method = 'POST'),
    (b.body = t),
    c['content-type'] == null &&
      (c['content-type'] = { key: 'Content-Type', value: 'application/octet-stream' }),
    c['content-length'] == null &&
      (c['content-length'] = { key: 'Content-Length', value: String(t.length) }));
  const R = {};
  Object.keys(c).forEach(($) => {
    const C = c[$];
    R[C.key] = C.value;
  }),
    (b.headers = R);
  const V = (function () {
      let $ = null;
      return {
        promise: new Promise(function (J, tt) {
          P &&
            ($ = setTimeout(() => {
              $ != null &&
                (($ = null),
                tt(
                  Ur.makeError('timeout', D.errors.TIMEOUT, {
                    requestBody: fi(b.body, R['content-type']),
                    requestMethod: b.method,
                    timeout: P,
                    url: v,
                  })
                ));
            }, P));
        }),
        cancel: function () {
          $ != null && (clearTimeout($), ($ = null));
        },
      };
    })(),
    lt = (function () {
      return Nh(this, void 0, void 0, function* () {
        for (let $ = 0; $ < i; $++) {
          let C = null;
          try {
            if (((C = yield Bh(v, b)), $ < i)) {
              if (C.statusCode === 301 || C.statusCode === 302) {
                const J = C.headers.location || '';
                if (b.method === 'GET' && J.match(/^https:/)) {
                  v = C.headers.location;
                  continue;
                }
              } else if (C.statusCode === 429) {
                let J = !0;
                if ((n && (J = yield n($, v)), J)) {
                  let tt = 0;
                  const Mt = C.headers['retry-after'];
                  typeof Mt == 'string' && Mt.match(/^[1-9][0-9]*$/)
                    ? (tt = parseInt(Mt) * 1e3)
                    : (tt = s * parseInt(String(Math.random() * Math.pow(2, $)))),
                    yield Co(tt);
                  continue;
                }
              }
            }
          } catch (J) {
            (C = J.response),
              C == null &&
                (V.cancel(),
                Ur.throwError('missing response', D.errors.SERVER_ERROR, {
                  requestBody: fi(b.body, R['content-type']),
                  requestMethod: b.method,
                  serverError: J,
                  url: v,
                }));
          }
          let Z = C.body;
          if (
            (S && C.statusCode === 304
              ? (Z = null)
              : !f &&
                (C.statusCode < 200 || C.statusCode >= 300) &&
                (V.cancel(),
                Ur.throwError('bad response', D.errors.SERVER_ERROR, {
                  status: C.statusCode,
                  headers: C.headers,
                  body: fi(Z, C.headers ? C.headers['content-type'] : null),
                  requestBody: fi(b.body, R['content-type']),
                  requestMethod: b.method,
                  url: v,
                })),
            e)
          )
            try {
              const J = yield e(Z, C);
              return V.cancel(), J;
            } catch (J) {
              if (J.throttleRetry && $ < i) {
                let tt = !0;
                if ((n && (tt = yield n($, v)), tt)) {
                  const Mt = s * parseInt(String(Math.random() * Math.pow(2, $)));
                  yield Co(Mt);
                  continue;
                }
              }
              V.cancel(),
                Ur.throwError('processing response error', D.errors.SERVER_ERROR, {
                  body: fi(Z, C.headers ? C.headers['content-type'] : null),
                  error: J,
                  requestBody: fi(b.body, R['content-type']),
                  requestMethod: b.method,
                  url: v,
                });
            }
          return V.cancel(), Z;
        }
        return Ur.throwError('failed response', D.errors.SERVER_ERROR, {
          requestBody: fi(b.body, R['content-type']),
          requestMethod: b.method,
          url: v,
        });
      });
    })();
  return Promise.race([V.promise, lt]);
}
function $s(r, t, e) {
  let i = (s, f) => {
      let c = null;
      if (s != null)
        try {
          c = JSON.parse(dn(s));
        } catch (v) {
          Ur.throwError('invalid JSON', D.errors.SERVER_ERROR, { body: s, error: v });
        }
      return e && (c = e(c, f)), c;
    },
    n = null;
  if (t != null) {
    n = sr(t);
    const s = typeof r == 'string' ? { url: r } : Ve(r);
    s.headers
      ? Object.keys(s.headers).filter((c) => c.toLowerCase() === 'content-type').length !== 0 ||
        ((s.headers = Ve(s.headers)), (s.headers['content-type'] = 'application/json'))
      : (s.headers = { 'content-type': 'application/json' }),
      (r = s);
  }
  return Ih(r, n, i);
}
function Qi(r, t) {
  return (
    t || (t = {}),
    (t = Ve(t)),
    t.floor == null && (t.floor = 0),
    t.ceiling == null && (t.ceiling = 1e4),
    t.interval == null && (t.interval = 250),
    new Promise(function (e, i) {
      let n = null,
        s = !1;
      const f = () => (s ? !1 : ((s = !0), n && clearTimeout(n), !0));
      t.timeout &&
        (n = setTimeout(() => {
          f() && i(new Error('timeout'));
        }, t.timeout));
      const c = t.retryLimit;
      let v = 0;
      function b() {
        return r().then(
          function (S) {
            if (S !== void 0) f() && e(S);
            else if (t.oncePoll) t.oncePoll.once('poll', b);
            else if (t.onceBlock) t.onceBlock.once('block', b);
            else if (!s) {
              if ((v++, v > c)) {
                f() && i(new Error('retry limit reached'));
                return;
              }
              let P = t.interval * parseInt(String(Math.random() * Math.pow(2, v)));
              P < t.floor && (P = t.floor), P > t.ceiling && (P = t.ceiling), setTimeout(b, P);
            }
            return null;
          },
          function (S) {
            f() && i(S);
          }
        );
      }
      b();
    })
  );
}
var qn = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l',
  Bs = {};
for (var xn = 0; xn < qn.length; xn++) {
  var ps = qn.charAt(xn);
  if (Bs[ps] !== void 0) throw new TypeError(ps + ' is ambiguous');
  Bs[ps] = xn;
}
function Oi(r) {
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
function nu(r) {
  for (var t = 1, e = 0; e < r.length; ++e) {
    var i = r.charCodeAt(e);
    if (i < 33 || i > 126) return 'Invalid prefix (' + r + ')';
    t = Oi(t) ^ (i >> 5);
  }
  for (t = Oi(t), e = 0; e < r.length; ++e) {
    var n = r.charCodeAt(e);
    t = Oi(t) ^ (n & 31);
  }
  return t;
}
function Rh(r, t, e) {
  if (((e = e || 90), r.length + 7 + t.length > e)) throw new TypeError('Exceeds length limit');
  r = r.toLowerCase();
  var i = nu(r);
  if (typeof i == 'string') throw new Error(i);
  for (var n = r + '1', s = 0; s < t.length; ++s) {
    var f = t[s];
    if (f >> 5) throw new Error('Non 5-bit word');
    (i = Oi(i) ^ f), (n += qn.charAt(f));
  }
  for (s = 0; s < 6; ++s) i = Oi(i);
  for (i ^= 1, s = 0; s < 6; ++s) {
    var c = (i >> ((5 - s) * 5)) & 31;
    n += qn.charAt(c);
  }
  return n;
}
function su(r, t) {
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
    f = r.slice(n + 1);
  if (f.length < 6) return 'Data too short';
  var c = nu(s);
  if (typeof c == 'string') return c;
  for (var v = [], b = 0; b < f.length; ++b) {
    var S = f.charAt(b),
      P = Bs[S];
    if (P === void 0) return 'Unknown character ' + S;
    (c = Oi(c) ^ P), !(b + 6 >= f.length) && v.push(P);
  }
  return c !== 1 ? 'Invalid checksum for ' + r : { prefix: s, words: v };
}
function Lh() {
  var r = su.apply(null, arguments);
  if (typeof r == 'object') return r;
}
function Oh(r) {
  var t = su.apply(null, arguments);
  if (typeof t == 'object') return t;
  throw new Error(t);
}
function ss(r, t, e, i) {
  for (var n = 0, s = 0, f = (1 << e) - 1, c = [], v = 0; v < r.length; ++v)
    for (n = (n << t) | r[v], s += t; s >= e; ) (s -= e), c.push((n >> s) & f);
  if (i) s > 0 && c.push((n << (e - s)) & f);
  else {
    if (s >= t) return 'Excess padding';
    if ((n << (e - s)) & f) return 'Non-zero padding';
  }
  return c;
}
function Uh(r) {
  var t = ss(r, 8, 5, !0);
  if (Array.isArray(t)) return t;
}
function Dh(r) {
  var t = ss(r, 8, 5, !0);
  if (Array.isArray(t)) return t;
  throw new Error(t);
}
function Fh(r) {
  var t = ss(r, 5, 8, !1);
  if (Array.isArray(t)) return t;
}
function Kh(r) {
  var t = ss(r, 5, 8, !1);
  if (Array.isArray(t)) return t;
  throw new Error(t);
}
var zh = {
  decodeUnsafe: Lh,
  decode: Oh,
  encode: Rh,
  toWordsUnsafe: Uh,
  toWords: Dh,
  fromWordsUnsafe: Fh,
  fromWords: Kh,
};
const Io = Qo(zh),
  os = 'providers/5.7.2',
  Ji = new D(os);
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
      f = this.hash.bind(this),
      c = this.hex.bind(this),
      v = this.number.bind(this),
      b = this.type.bind(this),
      S = (P) => this.data(P, !0);
    return (
      (t.transaction = {
        hash: f,
        type: b,
        accessList: gt.allowNull(this.accessList.bind(this), null),
        blockHash: gt.allowNull(f, null),
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
        transactionHash: f,
        address: e,
        topics: gt.arrayOf(f),
        data: s,
        logIndex: v,
        blockHash: f,
      }),
      (t.receipt = {
        to: gt.allowNull(this.address, null),
        from: gt.allowNull(this.address, null),
        contractAddress: gt.allowNull(e, null),
        transactionIndex: v,
        root: gt.allowNull(c),
        gasUsed: i,
        logsBloom: gt.allowNull(s),
        blockHash: f,
        transactionHash: f,
        logs: gt.arrayOf(this.receiptLog.bind(this)),
        blockNumber: v,
        confirmations: gt.allowNull(v, null),
        cumulativeGasUsed: i,
        effectiveGasPrice: gt.allowNull(i),
        status: gt.allowNull(v),
        type: b,
      }),
      (t.block = {
        hash: gt.allowNull(f),
        parentHash: f,
        number: v,
        timestamp: v,
        nonce: gt.allowNull(c),
        difficulty: this.difficulty.bind(this),
        gasLimit: i,
        gasUsed: i,
        miner: gt.allowNull(e),
        extraData: s,
        transactions: gt.allowNull(gt.arrayOf(f)),
        baseFeePerGas: gt.allowNull(i),
      }),
      (t.blockWithTransactions = Ve(t.block)),
      (t.blockWithTransactions.transactions = gt.allowNull(
        gt.arrayOf(this.transactionResponse.bind(this))
      )),
      (t.filter = {
        fromBlock: gt.allowNull(n, void 0),
        toBlock: gt.allowNull(n, void 0),
        blockHash: gt.allowNull(f, void 0),
        address: gt.allowNull(e, void 0),
        topics: gt.allowNull(this.topics.bind(this), void 0),
      }),
      (t.filterLog = {
        blockNumber: gt.allowNull(v),
        blockHash: gt.allowNull(f),
        transactionIndex: v,
        removed: gt.allowNull(this.boolean.bind(this)),
        address: e,
        data: gt.allowFalsish(s, '0x'),
        topics: gt.arrayOf(f),
        transactionHash: f,
        logIndex: v,
      }),
      t
    );
  }
  accessList(t) {
    return Ki(t || []);
  }
  number(t) {
    return t === '0x' ? 0 : st.from(t).toNumber();
  }
  type(t) {
    return t === '0x' || t == null ? 0 : st.from(t).toNumber();
  }
  bigNumber(t) {
    return st.from(t);
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
      : Ji.throwArgumentError('invalid hash', 'value', t);
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
    const e = Je(je(t, 12));
    return e === Ju ? null : e;
  }
  contractAddress(t) {
    return ia(t);
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
    if (typeof t == 'number' || De(t)) return Ls(t);
    throw new Error('invalid blockTag');
  }
  hash(t, e) {
    const i = this.hex(t, e);
    return xi(i) !== 32 ? Ji.throwArgumentError('invalid hash', 'value', t) : i;
  }
  difficulty(t) {
    if (t == null) return null;
    const e = st.from(t);
    try {
      return e.toNumber();
    } catch {}
    return null;
  }
  uint256(t) {
    if (!De(t)) throw new Error('invalid uint256');
    return Fe(t, 32);
  }
  _block(t, e) {
    t.author != null && t.miner == null && (t.miner = t.author);
    const i = t._difficulty != null ? t._difficulty : t.difficulty,
      n = gt.check(e, t);
    return (n._difficulty = i == null ? null : st.from(i)), n;
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
      t.to && st.from(t.to).isZero() && (t.to = '0x0000000000000000000000000000000000000000'),
      t.input != null && t.data == null && (t.data = t.input),
      t.to == null && t.creates == null && (t.creates = this.contractAddress(t)),
      (t.type === 1 || t.type === 2) && t.accessList == null && (t.accessList = []);
    const e = gt.check(this.formats.transaction, t);
    if (t.chainId != null) {
      let i = t.chainId;
      De(i) && (i = st.from(i).toNumber()), (e.chainId = i);
    } else {
      let i = t.networkId;
      i == null && e.v == null && (i = t.chainId),
        De(i) && (i = st.from(i).toNumber()),
        typeof i != 'number' &&
          e.v != null &&
          ((i = (e.v - 35) / 2), i < 0 && (i = 0), (i = parseInt(i))),
        typeof i != 'number' && (i = 0),
        (e.chainId = i);
    }
    return e.blockHash && e.blockHash.replace(/0/g, '') === 'x' && (e.blockHash = null), e;
  }
  transaction(t) {
    return nl(t);
  }
  receiptLog(t) {
    return gt.check(this.formats.receiptLog, t);
  }
  receipt(t) {
    const e = gt.check(this.formats.receipt, t);
    if (e.root != null)
      if (e.root.length <= 4) {
        const i = st.from(e.root).toNumber();
        i === 0 || i === 1
          ? (e.status != null &&
              e.status !== i &&
              Ji.throwArgumentError('alt-root-status/status mismatch', 'value', {
                root: e.root,
                status: e.status,
              }),
            (e.status = i),
            delete e.root)
          : Ji.throwArgumentError('invalid alt-root-status', 'value.root', e.root);
      } else
        e.root.length !== 66 && Ji.throwArgumentError('invalid root hash', 'value.root', e.root);
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
      : new e(function (f) {
          f(s);
        });
  }
  return new (e || (e = Promise))(function (s, f) {
    function c(S) {
      try {
        b(i.next(S));
      } catch (P) {
        f(P);
      }
    }
    function v(S) {
      try {
        b(i.throw(S));
      } catch (P) {
        f(P);
      }
    }
    function b(S) {
      S.done ? s(S.value) : n(S.value).then(c, v);
    }
    b((i = i.apply(r, t || [])).next());
  });
};
const ce = new D(os),
  Hh = 10;
function Ro(r) {
  return r == null
    ? 'null'
    : (xi(r) !== 32 && ce.throwArgumentError('invalid topic', 'topic', r), r.toLowerCase());
}
function Lo(r) {
  for (r = r.slice(); r.length > 0 && r[r.length - 1] == null; ) r.pop();
  return r
    .map((t) => {
      if (Array.isArray(t)) {
        const e = {};
        t.forEach((n) => {
          e[Ro(n)] = !0;
        });
        const i = Object.keys(e);
        return i.sort(), i.join('|');
      } else return Ro(t);
    })
    .join('&');
}
function qh(r) {
  return r === ''
    ? []
    : r.split(/&/g).map((t) => {
        if (t === '') return [];
        const e = t.split('|').map((i) => (i === 'null' ? null : i));
        return e.length === 1 ? e[0] : e;
      });
}
function Bi(r) {
  if (typeof r == 'string') {
    if (((r = r.toLowerCase()), xi(r) === 32)) return 'tx:' + r;
    if (r.indexOf(':') === -1) return r;
  } else {
    if (Array.isArray(r)) return 'filter:*:' + Lo(r);
    if (Gu.isForkEvent(r)) throw (ce.warn('not implemented'), new Error('not implemented'));
    if (r && typeof r == 'object') return 'filter:' + (r.address || '*') + ':' + Lo(r.topics || []);
  }
  throw new Error('invalid event - ' + r);
}
function Yi() {
  return new Date().getTime();
}
function Oo(r) {
  return new Promise((t) => {
    setTimeout(t, r);
  });
}
const Gh = ['block', 'network', 'pending', 'poll'];
class Vh {
  constructor(t, e, i) {
    Y(this, 'tag', t),
      Y(this, 'listener', e),
      Y(this, 'once', i),
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
      i = qh(t[2]),
      n = {};
    return i.length > 0 && (n.topics = i), e && e !== '*' && (n.address = e), n;
  }
  pollable() {
    return this.tag.indexOf(':') >= 0 || Gh.indexOf(this.tag) >= 0;
  }
}
const jh = {
  0: { symbol: 'btc', p2pkh: 0, p2sh: 5, prefix: 'bc' },
  2: { symbol: 'ltc', p2pkh: 48, p2sh: 50, prefix: 'ltc' },
  3: { symbol: 'doge', p2pkh: 30, p2sh: 22 },
  60: { symbol: 'eth', ilk: 'eth' },
  61: { symbol: 'etc', ilk: 'eth' },
  700: { symbol: 'xdai', ilk: 'eth' },
};
function ms(r) {
  return Fe(st.from(r).toHexString(), 32);
}
function Uo(r) {
  return en.encode(Qe([r, je(Mi(Mi(r)), 0, 4)]));
}
const ou = new RegExp('^(ipfs)://(.*)$', 'i'),
  Do = [
    new RegExp('^(https)://(.*)$', 'i'),
    new RegExp('^(data):(.*)$', 'i'),
    ou,
    new RegExp('^eip155:[0-9]+/(erc[0-9]+):(.*)$', 'i'),
  ];
function Nn(r, t) {
  try {
    return dn(sn(r, t));
  } catch {}
  return null;
}
function sn(r, t) {
  if (r === '0x') return null;
  const e = st.from(je(r, t, t + 32)).toNumber(),
    i = st.from(je(r, e, e + 32)).toNumber();
  return je(r, e + 32, e + 32 + i);
}
function vs(r) {
  return (
    r.match(/^ipfs:\/\/ipfs\//i)
      ? (r = r.substring(12))
      : r.match(/^ipfs:\/\//i)
        ? (r = r.substring(7))
        : ce.throwArgumentError('unsupported IPFS format', 'link', r),
    `https://gateway.ipfs.io/ipfs/${r}`
  );
}
function Fo(r) {
  const t = mt(r);
  if (t.length > 32) throw new Error('internal; should not happen');
  const e = new Uint8Array(32);
  return e.set(t, 32 - t.length), e;
}
function Wh(r) {
  if (r.length % 32 === 0) return r;
  const t = new Uint8Array(Math.ceil(r.length / 32) * 32);
  return t.set(r), t;
}
function au(r) {
  const t = [];
  let e = 0;
  for (let i = 0; i < r.length; i++) t.push(null), (e += 32);
  for (let i = 0; i < r.length; i++) {
    const n = mt(r[i]);
    (t[i] = Fo(e)), t.push(Fo(n.length)), t.push(Wh(n)), (e += 32 + Math.ceil(n.length / 32) * 32);
  }
  return hr(t);
}
class Ko {
  constructor(t, e, i, n) {
    Y(this, 'provider', t),
      Y(this, 'name', i),
      Y(this, 'address', t.formatter.address(e)),
      Y(this, '_resolvedAddress', n);
  }
  supportsWildcard() {
    return (
      this._supportsEip2544 ||
        (this._supportsEip2544 = this.provider
          .call({
            to: this.address,
            data: '0x01ffc9a79061b92300000000000000000000000000000000000000000000000000000000',
          })
          .then((t) => st.from(t).eq(1))
          .catch((t) => {
            if (t.code === D.errors.CALL_EXCEPTION) return !1;
            throw ((this._supportsEip2544 = null), t);
          })),
      this._supportsEip2544
    );
  }
  _fetch(t, e) {
    return ne(this, void 0, void 0, function* () {
      const i = { to: this.address, ccipReadEnabled: !0, data: hr([t, Pn(this.name), e || '0x']) };
      let n = !1;
      (yield this.supportsWildcard()) &&
        ((n = !0), (i.data = hr(['0x9061b923', au([Tf(this.name), i.data])])));
      try {
        let s = yield this.provider.call(i);
        return (
          mt(s).length % 32 === 4 &&
            ce.throwError('resolver threw error', D.errors.CALL_EXCEPTION, {
              transaction: i,
              data: s,
            }),
          n && (s = sn(s, 0)),
          s
        );
      } catch (s) {
        if (s.code === D.errors.CALL_EXCEPTION) return null;
        throw s;
      }
    });
  }
  _fetchBytes(t, e) {
    return ne(this, void 0, void 0, function* () {
      const i = yield this._fetch(t, e);
      return i != null ? sn(i, 0) : null;
    });
  }
  _getAddress(t, e) {
    const i = jh[String(t)];
    if (
      (i == null &&
        ce.throwError(`unsupported coin type: ${t}`, D.errors.UNSUPPORTED_OPERATION, {
          operation: `getAddress(${t})`,
        }),
      i.ilk === 'eth')
    )
      return this.provider.formatter.address(e);
    const n = mt(e);
    if (i.p2pkh != null) {
      const s = e.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);
      if (s) {
        const f = parseInt(s[1], 16);
        if (s[2].length === f * 2 && f >= 1 && f <= 75) return Uo(Qe([[i.p2pkh], '0x' + s[2]]));
      }
    }
    if (i.p2sh != null) {
      const s = e.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);
      if (s) {
        const f = parseInt(s[1], 16);
        if (s[2].length === f * 2 && f >= 1 && f <= 75) return Uo(Qe([[i.p2sh], '0x' + s[2]]));
      }
    }
    if (i.prefix != null) {
      const s = n[1];
      let f = n[0];
      if (
        (f === 0 ? s !== 20 && s !== 32 && (f = -1) : (f = -1),
        f >= 0 && n.length === 2 + s && s >= 1 && s <= 75)
      ) {
        const c = Io.toWords(n.slice(2));
        return c.unshift(f), Io.encode(i.prefix, c);
      }
    }
    return null;
  }
  getAddress(t) {
    return ne(this, void 0, void 0, function* () {
      if ((t == null && (t = 60), t === 60))
        try {
          const n = yield this._fetch('0x3b3b57de');
          return n === '0x' || n === $u ? null : this.provider.formatter.callAddress(n);
        } catch (n) {
          if (n.code === D.errors.CALL_EXCEPTION) return null;
          throw n;
        }
      const e = yield this._fetchBytes('0xf1cb7e06', ms(t));
      if (e == null || e === '0x') return null;
      const i = this._getAddress(t, e);
      return (
        i == null &&
          ce.throwError('invalid or unsupported coin data', D.errors.UNSUPPORTED_OPERATION, {
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
        for (let i = 0; i < Do.length; i++) {
          const n = e.match(Do[i]);
          if (n == null) continue;
          const s = n[1].toLowerCase();
          switch (s) {
            case 'https':
              return t.push({ type: 'url', content: e }), { linkage: t, url: e };
            case 'data':
              return t.push({ type: 'data', content: e }), { linkage: t, url: e };
            case 'ipfs':
              return t.push({ type: 'ipfs', content: e }), { linkage: t, url: vs(e) };
            case 'erc721':
            case 'erc1155': {
              const f = s === 'erc721' ? '0xc87b56dd' : '0x0e89341c';
              t.push({ type: s, content: e });
              const c = this._resolvedAddress || (yield this.getAddress()),
                v = (n[2] || '').split('/');
              if (v.length !== 2) return null;
              const b = yield this.provider.formatter.address(v[0]),
                S = Fe(st.from(v[1]).toHexString(), 32);
              if (s === 'erc721') {
                const V = this.provider.formatter.callAddress(
                  yield this.provider.call({ to: b, data: hr(['0x6352211e', S]) })
                );
                if (c !== V) return null;
                t.push({ type: 'owner', content: V });
              } else if (s === 'erc1155') {
                const V = st.from(
                  yield this.provider.call({ to: b, data: hr(['0x00fdd58e', Fe(c, 32), S]) })
                );
                if (V.isZero()) return null;
                t.push({ type: 'balance', content: V.toString() });
              }
              const P = { to: this.provider.formatter.address(v[0]), data: hr([f, S]) };
              let B = Nn(yield this.provider.call(P), 0);
              if (B == null) return null;
              t.push({ type: 'metadata-url-base', content: B }),
                s === 'erc1155' &&
                  ((B = B.replace('{id}', S.substring(2))),
                  t.push({ type: 'metadata-url-expanded', content: B })),
                B.match(/^ipfs:/i) && (B = vs(B)),
                t.push({ type: 'metadata-url', content: B });
              const N = yield $s(B);
              if (!N) return null;
              t.push({ type: 'metadata', content: JSON.stringify(N) });
              let R = N.image;
              if (typeof R != 'string') return null;
              if (!R.match(/^(https:\/\/|data:)/i)) {
                if (R.match(ou) == null) return null;
                t.push({ type: 'url-ipfs', content: R }), (R = vs(R));
              }
              return t.push({ type: 'url', content: R }), { linkage: t, url: R };
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
        const f = parseInt(e[3], 16);
        if (e[4].length === f * 2) return 'ipfs://' + en.encode('0x' + e[1]);
      }
      const i = t.match(/^0xe5010172(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
      if (i) {
        const f = parseInt(i[3], 16);
        if (i[4].length === f * 2) return 'ipns://' + en.encode('0x' + i[1]);
      }
      const n = t.match(/^0xe40101fa011b20([0-9a-f]*)$/);
      if (n && n[1].length === 32 * 2) return 'bzz://' + n[1];
      const s = t.match(/^0x90b2c605([0-9a-f]*)$/);
      if (s && s[1].length === 34 * 2) {
        const f = { '=': '', '+': '-', '/': '_' };
        return 'sia://' + ca('0x' + s[1]).replace(/[=+\/]/g, (v) => f[v]);
      }
      return ce.throwError(
        'invalid or unsupported content hash data',
        D.errors.UNSUPPORTED_OPERATION,
        { operation: 'getContentHash()', data: t }
      );
    });
  }
  getText(t) {
    return ne(this, void 0, void 0, function* () {
      let e = sr(t);
      (e = Qe([ms(64), ms(e.length), e])),
        e.length % 32 !== 0 && (e = Qe([e, Fe('0x', 32 - (t.length % 32))]));
      const i = yield this._fetchBytes('0x59d1d43c', vt(e));
      return i == null || i === '0x' ? null : dn(i);
    });
  }
}
let ys = null,
  Jh = 1;
class Yh extends Wn {
  constructor(t) {
    if (
      (super(),
      (this._events = []),
      (this._emitted = { block: -2 }),
      (this.disableCcipRead = !1),
      (this.formatter = new.target.getFormatter()),
      Y(this, 'anyNetwork', t === 'any'),
      this.anyNetwork && (t = this.detectNetwork()),
      t instanceof Promise)
    )
      (this._networkPromise = t), t.catch((e) => {}), this._ready().catch((e) => {});
    else {
      const e = Wr(new.target, 'getNetwork')(t);
      e
        ? (Y(this, '_network', e), this.emit('network', e, null))
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
          t || ce.throwError('no network detected', D.errors.UNKNOWN_ERROR, {}),
          this._network == null &&
            (this.anyNetwork ? (this._network = t) : Y(this, '_network', t),
            this.emit('network', t, null));
      }
      return this._network;
    });
  }
  get ready() {
    return Qi(() =>
      this._ready().then(
        (t) => t,
        (t) => {
          if (!(t.code === D.errors.NETWORK_ERROR && t.event === 'noNetwork')) throw t;
        }
      )
    );
  }
  static getFormatter() {
    return ys == null && (ys = new gt()), ys;
  }
  static getNetwork(t) {
    return Ph(t ?? 'homestead');
  }
  ccipReadFetch(t, e, i) {
    return ne(this, void 0, void 0, function* () {
      if (this.disableCcipRead || i.length === 0) return null;
      const n = t.to.toLowerCase(),
        s = e.toLowerCase(),
        f = [];
      for (let c = 0; c < i.length; c++) {
        const v = i[c],
          b = v.replace('{sender}', n).replace('{data}', s),
          S = v.indexOf('{data}') >= 0 ? null : JSON.stringify({ data: s, sender: n }),
          P = yield $s(
            { url: b, errorPassThrough: !0 },
            S,
            (N, R) => ((N.status = R.statusCode), N)
          );
        if (P.data) return P.data;
        const B = P.message || 'unknown error';
        if (P.status >= 400 && P.status < 500)
          return ce.throwError(
            `response not found during CCIP fetch: ${B}`,
            D.errors.SERVER_ERROR,
            { url: v, errorMessage: B }
          );
        f.push(B);
      }
      return ce.throwError(
        `error encountered during CCIP fetch: ${f.map((c) => JSON.stringify(c)).join(', ')}`,
        D.errors.SERVER_ERROR,
        { urls: i, errorMessages: f }
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
            if (Yi() - s.respTime <= t) return s.blockNumber;
            break;
          } catch {
            if (this._internalBlockNumber === n) break;
          }
        }
      const e = Yi(),
        i = Ke({
          blockNumber: this.perform('getBlockNumber', {}),
          networkError: this.getNetwork().then(
            (n) => null,
            (n) => n
          ),
        }).then(({ blockNumber: n, networkError: s }) => {
          if (s) throw (this._internalBlockNumber === i && (this._internalBlockNumber = null), s);
          const f = Yi();
          return (
            (n = st.from(n).toNumber()),
            n < this._maxInternalBlockNumber && (n = this._maxInternalBlockNumber),
            (this._maxInternalBlockNumber = n),
            this._setFastBlockNumber(n),
            { blockNumber: n, reqTime: e, respTime: f }
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
      const t = Jh++,
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
            ce.makeError('network block skew detected', D.errors.NETWORK_ERROR, {
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
              let f = this.getTransactionReceipt(s)
                .then(
                  (c) => (
                    !c ||
                      c.blockNumber == null ||
                      ((this._emitted['t:' + s] = c.blockNumber), this.emit(s, c)),
                    null
                  )
                )
                .catch((c) => {
                  this.emit('error', c);
                });
              e.push(f);
              break;
            }
            case 'filter': {
              if (!n._inflight) {
                (n._inflight = !0), n._lastBlockNumber === -2 && (n._lastBlockNumber = i - 1);
                const s = n.filter;
                (s.fromBlock = n._lastBlockNumber + 1), (s.toBlock = i);
                const f = s.toBlock - this._maxFilterBlockRange;
                f > s.fromBlock && (s.fromBlock = f), s.fromBlock < 0 && (s.fromBlock = 0);
                const c = this.getLogs(s)
                  .then((v) => {
                    (n._inflight = !1),
                      v.length !== 0 &&
                        v.forEach((b) => {
                          b.blockNumber > n._lastBlockNumber &&
                            (n._lastBlockNumber = b.blockNumber),
                            (this._emitted['b:' + b.blockHash] = b.blockNumber),
                            (this._emitted['t:' + b.transactionHash] = b.blockNumber),
                            this.emit(s, b);
                        });
                  })
                  .catch((v) => {
                    this.emit('error', v), (n._inflight = !1);
                  });
                e.push(c);
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
        D.errors.UNSUPPORTED_OPERATION,
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
            yield Oo(0),
            this._network
          );
        const i = ce.makeError('underlying network changed', D.errors.NETWORK_ERROR, {
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
    const t = Yi();
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
      ((this._fastQueryDate = Yi()),
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
        : new Promise((f, c) => {
            const v = [];
            let b = !1;
            const S = function () {
                return b
                  ? !0
                  : ((b = !0),
                    v.forEach((B) => {
                      B();
                    }),
                    !1);
              },
              P = (B) => {
                B.confirmations < e || S() || f(B);
              };
            if (
              (this.on(t, P),
              v.push(() => {
                this.removeListener(t, P);
              }),
              n)
            ) {
              let B = n.startBlock,
                N = null;
              const R = (V) =>
                ne(this, void 0, void 0, function* () {
                  b ||
                    (yield Oo(1e3),
                    this.getTransactionCount(n.from).then(
                      (lt) =>
                        ne(this, void 0, void 0, function* () {
                          if (!b) {
                            if (lt <= n.nonce) B = V;
                            else {
                              {
                                const $ = yield this.getTransaction(t);
                                if ($ && $.blockNumber != null) return;
                              }
                              for (
                                N == null && ((N = B - 3), N < n.startBlock && (N = n.startBlock));
                                N <= V;

                              ) {
                                if (b) return;
                                const $ = yield this.getBlockWithTransactions(N);
                                for (let C = 0; C < $.transactions.length; C++) {
                                  const Z = $.transactions[C];
                                  if (Z.hash === t) return;
                                  if (Z.from === n.from && Z.nonce === n.nonce) {
                                    if (b) return;
                                    const J = yield this.waitForTransaction(Z.hash, e);
                                    if (S()) return;
                                    let tt = 'replaced';
                                    Z.data === n.data && Z.to === n.to && Z.value.eq(n.value)
                                      ? (tt = 'repriced')
                                      : Z.data === '0x' &&
                                        Z.from === Z.to &&
                                        Z.value.isZero() &&
                                        (tt = 'cancelled'),
                                      c(
                                        ce.makeError(
                                          'transaction was replaced',
                                          D.errors.TRANSACTION_REPLACED,
                                          {
                                            cancelled: tt === 'replaced' || tt === 'cancelled',
                                            reason: tt,
                                            replacement: this._wrapTransaction(Z),
                                            hash: t,
                                            receipt: J,
                                          }
                                        )
                                      );
                                    return;
                                  }
                                }
                                N++;
                              }
                            }
                            b || this.once('block', R);
                          }
                        }),
                      (lt) => {
                        b || this.once('block', R);
                      }
                    ));
                });
              if (b) return;
              this.once('block', R),
                v.push(() => {
                  this.removeListener('block', R);
                });
            }
            if (typeof i == 'number' && i > 0) {
              const B = setTimeout(() => {
                S() || c(ce.makeError('timeout exceeded', D.errors.TIMEOUT, { timeout: i }));
              }, i);
              B.unref && B.unref(),
                v.push(() => {
                  clearTimeout(B);
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
        return st.from(t);
      } catch (e) {
        return ce.throwError('bad result from backend', D.errors.SERVER_ERROR, {
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
      const i = yield Ke({ address: this._getAddress(t), blockTag: this._getBlockTag(e) }),
        n = yield this.perform('getBalance', i);
      try {
        return st.from(n);
      } catch (s) {
        return ce.throwError('bad result from backend', D.errors.SERVER_ERROR, {
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
      const i = yield Ke({ address: this._getAddress(t), blockTag: this._getBlockTag(e) }),
        n = yield this.perform('getTransactionCount', i);
      try {
        return st.from(n).toNumber();
      } catch (s) {
        return ce.throwError('bad result from backend', D.errors.SERVER_ERROR, {
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
      const i = yield Ke({ address: this._getAddress(t), blockTag: this._getBlockTag(e) }),
        n = yield this.perform('getCode', i);
      try {
        return vt(n);
      } catch (s) {
        return ce.throwError('bad result from backend', D.errors.SERVER_ERROR, {
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
      const n = yield Ke({
          address: this._getAddress(t),
          blockTag: this._getBlockTag(i),
          position: Promise.resolve(e).then((f) => Ls(f)),
        }),
        s = yield this.perform('getStorageAt', n);
      try {
        return vt(s);
      } catch (f) {
        return ce.throwError('bad result from backend', D.errors.SERVER_ERROR, {
          method: 'getStorageAt',
          params: n,
          result: s,
          error: f,
        });
      }
    });
  }
  _wrapTransaction(t, e, i) {
    if (e != null && xi(e) !== 32) throw new Error('invalid response - sendTransaction');
    const n = t;
    return (
      e != null &&
        t.hash !== e &&
        ce.throwError(
          'Transaction hash mismatch from Provider.sendTransaction.',
          D.errors.UNKNOWN_ERROR,
          { expectedHash: t.hash, returnedHash: e }
        ),
      (n.wait = (s, f) =>
        ne(this, void 0, void 0, function* () {
          s == null && (s = 1), f == null && (f = 0);
          let c;
          s !== 0 &&
            i != null &&
            (c = {
              data: t.data,
              from: t.from,
              nonce: t.nonce,
              to: t.to,
              value: t.value,
              startBlock: i,
            });
          const v = yield this._waitForTransaction(t.hash, s, f, c);
          return v == null && s === 0
            ? null
            : ((this._emitted['t:' + t.hash] = v.blockNumber),
              v.status === 0 &&
                ce.throwError('transaction failed', D.errors.CALL_EXCEPTION, {
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
      const e = yield Promise.resolve(t).then((s) => vt(s)),
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
          e[n] != null && (i[n] = Promise.resolve(e[n]).then((s) => (s ? st.from(s) : null)));
        }),
        ['type'].forEach((n) => {
          e[n] != null && (i[n] = Promise.resolve(e[n]).then((s) => s ?? null));
        }),
        e.accessList && (i.accessList = this.formatter.accessList(e.accessList)),
        ['data'].forEach((n) => {
          e[n] != null && (i[n] = Promise.resolve(e[n]).then((s) => (s ? vt(s) : null)));
        }),
        this.formatter.transactionRequest(yield Ke(i))
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
        this.formatter.filter(yield Ke(e))
      );
    });
  }
  _call(t, e, i) {
    return ne(this, void 0, void 0, function* () {
      i >= Hh &&
        ce.throwError('CCIP read exceeded maximum redirections', D.errors.SERVER_ERROR, {
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
        xi(s) % 32 === 4
      )
        try {
          const f = je(s, 4),
            c = je(f, 0, 32);
          st.from(c).eq(n) ||
            ce.throwError('CCIP Read sender did not match', D.errors.CALL_EXCEPTION, {
              name: 'OffchainLookup',
              signature: 'OffchainLookup(address,string[],bytes,bytes4,bytes)',
              transaction: t,
              data: s,
            });
          const v = [],
            b = st.from(je(f, 32, 64)).toNumber(),
            S = st.from(je(f, b, b + 32)).toNumber(),
            P = je(f, b + 32);
          for (let $ = 0; $ < S; $++) {
            const C = Nn(P, $ * 32);
            C == null &&
              ce.throwError('CCIP Read contained corrupt URL string', D.errors.CALL_EXCEPTION, {
                name: 'OffchainLookup',
                signature: 'OffchainLookup(address,string[],bytes,bytes4,bytes)',
                transaction: t,
                data: s,
              }),
              v.push(C);
          }
          const B = sn(f, 64);
          st.from(je(f, 100, 128)).isZero() ||
            ce.throwError('CCIP Read callback selector included junk', D.errors.CALL_EXCEPTION, {
              name: 'OffchainLookup',
              signature: 'OffchainLookup(address,string[],bytes,bytes4,bytes)',
              transaction: t,
              data: s,
            });
          const N = je(f, 96, 100),
            R = sn(f, 128),
            V = yield this.ccipReadFetch(t, B, v);
          V == null &&
            ce.throwError('CCIP Read disabled or provided no URLs', D.errors.CALL_EXCEPTION, {
              name: 'OffchainLookup',
              signature: 'OffchainLookup(address,string[],bytes,bytes4,bytes)',
              transaction: t,
              data: s,
            });
          const lt = { to: n, data: hr([N, au([V, R])]) };
          return this._call(lt, e, i + 1);
        } catch (f) {
          if (f.code === D.errors.SERVER_ERROR) throw f;
        }
      try {
        return vt(s);
      } catch (f) {
        return ce.throwError('bad result from backend', D.errors.SERVER_ERROR, {
          method: 'call',
          params: { transaction: t, blockTag: e },
          result: s,
          error: f,
        });
      }
    });
  }
  call(t, e) {
    return ne(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const i = yield Ke({
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
      const e = yield Ke({ transaction: this._getTransactionRequest(t) }),
        i = yield this.perform('estimateGas', e);
      try {
        return st.from(i);
      } catch (n) {
        return ce.throwError('bad result from backend', D.errors.SERVER_ERROR, {
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
          ce.throwError('ENS name not configured', D.errors.UNSUPPORTED_OPERATION, {
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
      return Qi(
        () =>
          ne(this, void 0, void 0, function* () {
            const s = yield this.perform('getBlock', n);
            if (s == null)
              return (n.blockHash != null && this._emitted['b:' + n.blockHash] == null) ||
                (n.blockTag != null && i > this._emitted.block)
                ? null
                : void 0;
            if (e) {
              let f = null;
              for (let v = 0; v < s.transactions.length; v++) {
                const b = s.transactions[v];
                if (b.blockNumber == null) b.confirmations = 0;
                else if (b.confirmations == null) {
                  f == null &&
                    (f = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval));
                  let S = f - b.blockNumber + 1;
                  S <= 0 && (S = 1), (b.confirmations = S);
                }
              }
              const c = this.formatter.blockWithTransactions(s);
              return (c.transactions = c.transactions.map((v) => this._wrapTransaction(v))), c;
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
      return Qi(
        () =>
          ne(this, void 0, void 0, function* () {
            const i = yield this.perform('getTransaction', e);
            if (i == null) return this._emitted['t:' + t] == null ? null : void 0;
            const n = this.formatter.transactionResponse(i);
            if (n.blockNumber == null) n.confirmations = 0;
            else if (n.confirmations == null) {
              let f =
                (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) -
                n.blockNumber +
                1;
              f <= 0 && (f = 1), (n.confirmations = f);
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
      return Qi(
        () =>
          ne(this, void 0, void 0, function* () {
            const i = yield this.perform('getTransactionReceipt', e);
            if (i == null) return this._emitted['t:' + t] == null ? null : void 0;
            if (i.blockHash == null) return;
            const n = this.formatter.receipt(i);
            if (n.blockNumber == null) n.confirmations = 0;
            else if (n.confirmations == null) {
              let f =
                (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) -
                n.blockNumber +
                1;
              f <= 0 && (f = 1), (n.confirmations = f);
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
      const e = yield Ke({ filter: this._getFilter(t) }),
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
          const n = new Ko(this, i, t);
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
        ce.throwError('network does not support ENS', D.errors.UNSUPPORTED_OPERATION, {
          operation: e,
          network: i.name,
        });
      try {
        const n = yield this.call({ to: i.ensAddress, data: '0x0178b8bf' + Pn(t).substring(2) });
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
      const n = Nn(yield this.call({ to: i, data: '0x691f3431' + Pn(e).substring(2) }), 0);
      return (yield this.resolveName(n)) != t ? null : n;
    });
  }
  getAvatar(t) {
    return ne(this, void 0, void 0, function* () {
      let e = null;
      if (De(t)) {
        const s = this.formatter.address(t).substring(2).toLowerCase() + '.addr.reverse',
          f = yield this._getResolver(s, 'getAvatar');
        if (!f) return null;
        e = new Ko(this, f, s);
        try {
          const c = yield e.getAvatar();
          if (c) return c.url;
        } catch (c) {
          if (c.code !== D.errors.CALL_EXCEPTION) throw c;
        }
        try {
          const c = Nn(yield this.call({ to: f, data: '0x691f3431' + Pn(s).substring(2) }), 0);
          e = yield this.getResolver(c);
        } catch (c) {
          if (c.code !== D.errors.CALL_EXCEPTION) throw c;
          return null;
        }
      } else if (((e = yield this.getResolver(t)), !e)) return null;
      const i = yield e.getAvatar();
      return i == null ? null : i.url;
    });
  }
  perform(t, e) {
    return ce.throwError(t + ' not implemented', D.errors.NOT_IMPLEMENTED, { operation: t });
  }
  _startEvent(t) {
    this.polling = this._events.filter((e) => e.pollable()).length > 0;
  }
  _stopEvent(t) {
    this.polling = this._events.filter((e) => e.pollable()).length > 0;
  }
  _addEventListener(t, e, i) {
    const n = new Vh(Bi(t), e, i);
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
      s = Bi(t);
    return (
      (this._events = this._events.filter((f) =>
        f.tag !== s
          ? !0
          : (setTimeout(() => {
              f.listener.apply(this, e);
            }, 0),
            (i = !0),
            f.once ? (n.push(f), !1) : !0)
      )),
      n.forEach((f) => {
        this._stopEvent(f);
      }),
      i
    );
  }
  listenerCount(t) {
    if (!t) return this._events.length;
    let e = Bi(t);
    return this._events.filter((i) => i.tag === e).length;
  }
  listeners(t) {
    if (t == null) return this._events.map((i) => i.listener);
    let e = Bi(t);
    return this._events.filter((i) => i.tag === e).map((i) => i.listener);
  }
  off(t, e) {
    if (e == null) return this.removeAllListeners(t);
    const i = [];
    let n = !1,
      s = Bi(t);
    return (
      (this._events = this._events.filter((f) =>
        f.tag !== s || f.listener != e || n ? !0 : ((n = !0), i.push(f), !1)
      )),
      i.forEach((f) => {
        this._stopEvent(f);
      }),
      this
    );
  }
  removeAllListeners(t) {
    let e = [];
    if (t == null) (e = this._events), (this._events = []);
    else {
      const i = Bi(t);
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
      : new e(function (f) {
          f(s);
        });
  }
  return new (e || (e = Promise))(function (s, f) {
    function c(S) {
      try {
        b(i.next(S));
      } catch (P) {
        f(P);
      }
    }
    function v(S) {
      try {
        b(i.throw(S));
      } catch (P) {
        f(P);
      }
    }
    function b(S) {
      S.done ? s(S.value) : n(S.value).then(c, v);
    }
    b((i = i.apply(r, t || [])).next());
  });
};
const ze = new D(os),
  Zh = ['call', 'estimateGas'];
function Xi(r, t) {
  if (r == null) return null;
  if (typeof r.message == 'string' && r.message.match('reverted')) {
    const e = De(r.data) ? r.data : null;
    if (!t || e) return { message: r.message, data: e };
  }
  if (typeof r == 'object') {
    for (const e in r) {
      const i = Xi(r[e], t);
      if (i) return i;
    }
    return null;
  }
  if (typeof r == 'string')
    try {
      return Xi(JSON.parse(r), t);
    } catch {}
  return null;
}
function uu(r, t, e) {
  const i = e.transaction || e.signedTransaction;
  if (r === 'call') {
    const s = Xi(t, !0);
    if (s) return s.data;
    ze.throwError(
      'missing revert data in call exception; Transaction reverted without a reason string',
      D.errors.CALL_EXCEPTION,
      { data: '0x', transaction: i, error: t }
    );
  }
  if (r === 'estimateGas') {
    let s = Xi(t.body, !1);
    s == null && (s = Xi(t, !1)),
      s &&
        ze.throwError(
          'cannot estimate gas; transaction may fail or may require manual gas limit',
          D.errors.UNPREDICTABLE_GAS_LIMIT,
          { reason: s.message, method: r, transaction: i, error: t }
        );
  }
  let n = t.message;
  throw (
    (t.code === D.errors.SERVER_ERROR && t.error && typeof t.error.message == 'string'
      ? (n = t.error.message)
      : typeof t.body == 'string'
        ? (n = t.body)
        : typeof t.responseText == 'string' && (n = t.responseText),
    (n = (n || '').toLowerCase()),
    n.match(/insufficient funds|base fee exceeds gas limit|InsufficientFunds/i) &&
      ze.throwError(
        'insufficient funds for intrinsic transaction cost',
        D.errors.INSUFFICIENT_FUNDS,
        { error: t, method: r, transaction: i }
      ),
    n.match(/nonce (is )?too low/i) &&
      ze.throwError('nonce has already been used', D.errors.NONCE_EXPIRED, {
        error: t,
        method: r,
        transaction: i,
      }),
    n.match(/replacement transaction underpriced|transaction gas price.*too low/i) &&
      ze.throwError('replacement fee too low', D.errors.REPLACEMENT_UNDERPRICED, {
        error: t,
        method: r,
        transaction: i,
      }),
    n.match(/only replay-protected/i) &&
      ze.throwError(
        'legacy pre-eip-155 transactions not supported',
        D.errors.UNSUPPORTED_OPERATION,
        { error: t, method: r, transaction: i }
      ),
    Zh.indexOf(r) >= 0 &&
      n.match(
        /gas required exceeds allowance|always failing transaction|execution reverted|revert/
      ) &&
      ze.throwError(
        'cannot estimate gas; transaction may fail or may require manual gas limit',
        D.errors.UNPREDICTABLE_GAS_LIMIT,
        { error: t, method: r, transaction: i }
      ),
    t)
  );
}
function zo(r) {
  return new Promise(function (t) {
    setTimeout(t, r);
  });
}
function Qh(r) {
  if (r.error) {
    const t = new Error(r.error.message);
    throw ((t.code = r.error.code), (t.data = r.error.data), t);
  }
  return r.result;
}
function Zi(r) {
  return r && r.toLowerCase();
}
const Ns = {};
class fu extends cn {
  constructor(t, e, i) {
    if ((super(), t !== Ns))
      throw new Error('do not call the JsonRpcSigner constructor directly; use provider.getSigner');
    Y(this, 'provider', e),
      i == null && (i = 0),
      typeof i == 'string'
        ? (Y(this, '_address', this.provider.formatter.address(i)), Y(this, '_index', null))
        : typeof i == 'number'
          ? (Y(this, '_index', i), Y(this, '_address', null))
          : ze.throwArgumentError('invalid address or index', 'addressOrIndex', i);
  }
  connect(t) {
    return ze.throwError(
      'cannot alter JSON-RPC Signer connection',
      D.errors.UNSUPPORTED_OPERATION,
      { operation: 'connect' }
    );
  }
  connectUnchecked() {
    return new $h(Ns, this.provider, this._address || this._index);
  }
  getAddress() {
    return this._address
      ? Promise.resolve(this._address)
      : this.provider
          .send('eth_accounts', [])
          .then(
            (t) => (
              t.length <= this._index &&
                ze.throwError('unknown account #' + this._index, D.errors.UNSUPPORTED_OPERATION, {
                  operation: 'getAddress',
                }),
              this.provider.formatter.address(t[this._index])
            )
          );
  }
  sendUncheckedTransaction(t) {
    t = Ve(t);
    const e = this.getAddress().then((i) => (i && (i = i.toLowerCase()), i));
    if (t.gasLimit == null) {
      const i = Ve(t);
      (i.from = e), (t.gasLimit = this.provider.estimateGas(i));
    }
    return (
      t.to != null &&
        (t.to = Promise.resolve(t.to).then((i) =>
          ei(this, void 0, void 0, function* () {
            if (i == null) return null;
            const n = yield this.provider.resolveName(i);
            return (
              n == null && ze.throwArgumentError('provided ENS name resolves to null', 'tx.to', i),
              n
            );
          })
        )),
      Ke({ tx: Ke(t), sender: e }).then(({ tx: i, sender: n }) => {
        i.from != null
          ? i.from.toLowerCase() !== n &&
            ze.throwArgumentError('from address mismatch', 'transaction', t)
          : (i.from = n);
        const s = this.provider.constructor.hexlifyTransaction(i, { from: !0 });
        return this.provider.send('eth_sendTransaction', [s]).then(
          (f) => f,
          (f) => (
            typeof f.message == 'string' &&
              f.message.match(/user denied/i) &&
              ze.throwError('user rejected transaction', D.errors.ACTION_REJECTED, {
                action: 'sendTransaction',
                transaction: i,
              }),
            uu('sendTransaction', f, s)
          )
        );
      })
    );
  }
  signTransaction(t) {
    return ze.throwError('signing transactions is unsupported', D.errors.UNSUPPORTED_OPERATION, {
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
        return yield Qi(
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
      const e = typeof t == 'string' ? sr(t) : t,
        i = yield this.getAddress();
      try {
        return yield this.provider.send('personal_sign', [vt(e), i.toLowerCase()]);
      } catch (n) {
        throw (
          (typeof n.message == 'string' &&
            n.message.match(/user denied/i) &&
            ze.throwError('user rejected signing', D.errors.ACTION_REJECTED, {
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
      const e = typeof t == 'string' ? sr(t) : t,
        i = yield this.getAddress();
      try {
        return yield this.provider.send('eth_sign', [i.toLowerCase(), vt(e)]);
      } catch (n) {
        throw (
          (typeof n.message == 'string' &&
            n.message.match(/user denied/i) &&
            ze.throwError('user rejected signing', D.errors.ACTION_REJECTED, {
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
      const n = yield mr.resolveNames(t, e, i, (f) => this.provider.resolveName(f)),
        s = yield this.getAddress();
      try {
        return yield this.provider.send('eth_signTypedData_v4', [
          s.toLowerCase(),
          JSON.stringify(mr.getPayload(n.domain, e, n.value)),
        ]);
      } catch (f) {
        throw (
          (typeof f.message == 'string' &&
            f.message.match(/user denied/i) &&
            ze.throwError('user rejected signing', D.errors.ACTION_REJECTED, {
              action: '_signTypedData',
              from: s,
              messageData: { domain: n.domain, types: e, value: n.value },
            }),
          f)
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
class $h extends fu {
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
const Xh = {
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
class tc extends Yh {
  constructor(t, e) {
    let i = e;
    i == null &&
      (i = new Promise((n, s) => {
        setTimeout(() => {
          this.detectNetwork().then(
            (f) => {
              n(f);
            },
            (f) => {
              s(f);
            }
          );
        }, 0);
      })),
      super(i),
      t || (t = Wr(this.constructor, 'defaultUrl')()),
      typeof t == 'string'
        ? Y(this, 'connection', Object.freeze({ url: t }))
        : Y(this, 'connection', Object.freeze(Ve(t))),
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
      yield zo(0);
      let t = null;
      try {
        t = yield this.send('eth_chainId', []);
      } catch {
        try {
          t = yield this.send('net_version', []);
        } catch {}
      }
      if (t != null) {
        const e = Wr(this.constructor, 'getNetwork');
        try {
          return e(st.from(t).toNumber());
        } catch (i) {
          return ze.throwError('could not detect network', D.errors.NETWORK_ERROR, {
            chainId: t,
            event: 'invalidNetwork',
            serverError: i,
          });
        }
      }
      return ze.throwError('could not detect network', D.errors.NETWORK_ERROR, {
        event: 'noNetwork',
      });
    });
  }
  getSigner(t) {
    return new fu(Ns, this, t);
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
    const s = $s(this.connection, JSON.stringify(i), Qh).then(
      (f) => (
        this.emit('debug', { action: 'response', request: i, response: f, provider: this }), f
      ),
      (f) => {
        throw (this.emit('debug', { action: 'response', error: f, request: i, provider: this }), f);
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
        return ['eth_getBalance', [Zi(e.address), e.blockTag]];
      case 'getTransactionCount':
        return ['eth_getTransactionCount', [Zi(e.address), e.blockTag]];
      case 'getCode':
        return ['eth_getCode', [Zi(e.address), e.blockTag]];
      case 'getStorageAt':
        return ['eth_getStorageAt', [Zi(e.address), Fe(e.position, 32), e.blockTag]];
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
          [Wr(this.constructor, 'hexlifyTransaction')(e.transaction, { from: !0 }), e.blockTag],
        ];
      case 'estimateGas':
        return [
          'eth_estimateGas',
          [Wr(this.constructor, 'hexlifyTransaction')(e.transaction, { from: !0 })],
        ];
      case 'getLogs':
        return (
          e.filter && e.filter.address != null && (e.filter.address = Zi(e.filter.address)),
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
          st.from(n.type).isZero() &&
          n.maxFeePerGas == null &&
          n.maxPriorityFeePerGas == null
        ) {
          const s = yield this.getFeeData();
          s.maxFeePerGas == null &&
            s.maxPriorityFeePerGas == null &&
            ((e = Ve(e)), (e.transaction = Ve(n)), delete e.transaction.type);
        }
      }
      const i = this.prepareRequest(t, e);
      i == null &&
        ze.throwError(t + ' not implemented', D.errors.NOT_IMPLEMENTED, { operation: t });
      try {
        return yield this.send(i[0], i[1]);
      } catch (n) {
        return uu(t, n, e);
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
                let f = Promise.resolve();
                return (
                  s.forEach(function (c) {
                    (t._emitted['t:' + c.toLowerCase()] = 'pending'),
                      (f = f.then(function () {
                        return t.getTransaction(c).then(function (v) {
                          return t.emit('pending', v), null;
                        });
                      }));
                  }),
                  f.then(function () {
                    return zo(1e3);
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
    const i = Ve(Xh);
    if (e) for (const s in e) e[s] && (i[s] = !0);
    na(t, i);
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
        const f = Ls(st.from(t[s]));
        s === 'gasLimit' && (s = 'gas'), (n[s] = f);
      }),
      ['from', 'to', 'data'].forEach(function (s) {
        t[s] != null && (n[s] = vt(t[s]));
      }),
      t.accessList && (n.accessList = Ki(t.accessList)),
      n
    );
  }
}
const Ho = new D(os);
let ec = 1;
function qo(r, t) {
  const e = 'Web3LegacyFetcher';
  return function (i, n) {
    const s = { method: i, params: n, id: ec++, jsonrpc: '2.0' };
    return new Promise((f, c) => {
      this.emit('debug', { action: 'request', fetcher: e, request: oi(s), provider: this }),
        t(s, (v, b) => {
          if (v)
            return (
              this.emit('debug', {
                action: 'response',
                fetcher: e,
                error: v,
                request: s,
                provider: this,
              }),
              c(v)
            );
          if (
            (this.emit('debug', {
              action: 'response',
              fetcher: e,
              request: s,
              response: b,
              provider: this,
            }),
            b.error)
          ) {
            const S = new Error(b.error.message);
            return (S.code = b.error.code), (S.data = b.error.data), c(S);
          }
          f(b.result);
        });
    });
  };
}
function rc(r) {
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
class n0 extends tc {
  constructor(t, e) {
    t == null && Ho.throwArgumentError('missing provider', 'provider', t);
    let i = null,
      n = null,
      s = null;
    typeof t == 'function'
      ? ((i = 'unknown:'), (n = t))
      : ((i = t.host || t.path || ''),
        !i && t.isMetaMask && (i = 'metamask'),
        (s = t),
        t.request
          ? (i === '' && (i = 'eip-1193:'), (n = rc(t)))
          : t.sendAsync
            ? (n = qo(t, t.sendAsync.bind(t)))
            : t.send
              ? (n = qo(t, t.send.bind(t)))
              : Ho.throwArgumentError('unsupported provider', 'provider', t),
        i || (i = 'unknown:')),
      super(i, e),
      Y(this, 'jsonRpcFetchFunc', n),
      Y(this, 'provider', s);
  }
  send(t, e) {
    return this.jsonRpcFetchFunc(t, e);
  }
}
const yn = 'abi/5.7.0',
  me = new D(yn),
  _i = {};
let Go = { calldata: !0, memory: !0, storage: !0 },
  ic = { calldata: !0, memory: !0 };
function Mn(r, t) {
  if (r === 'bytes' || r === 'string') {
    if (Go[t]) return !0;
  } else if (r === 'address') {
    if (t === 'payable') return !0;
  } else if ((r.indexOf('[') >= 0 || r === 'tuple') && ic[t]) return !0;
  return (Go[t] || t === 'payable') && me.throwArgumentError('invalid modifier', 'name', t), !1;
}
function nc(r, t) {
  let e = r;
  function i(c) {
    me.throwArgumentError(`unexpected character at position ${c}`, 'param', r);
  }
  r = r.replace(/\s/g, ' ');
  function n(c) {
    let v = { type: '', name: '', parent: c, state: { allowType: !0 } };
    return t && (v.indexed = !1), v;
  }
  let s = { type: '', name: '', state: { allowType: !0 } },
    f = s;
  for (let c = 0; c < r.length; c++) {
    let v = r[c];
    switch (v) {
      case '(':
        f.state.allowType && f.type === '' ? (f.type = 'tuple') : f.state.allowParams || i(c),
          (f.state.allowType = !1),
          (f.type = Ci(f.type)),
          (f.components = [n(f)]),
          (f = f.components[0]);
        break;
      case ')':
        delete f.state,
          f.name === 'indexed' && (t || i(c), (f.indexed = !0), (f.name = '')),
          Mn(f.type, f.name) && (f.name = ''),
          (f.type = Ci(f.type));
        let b = f;
        (f = f.parent),
          f || i(c),
          delete b.parent,
          (f.state.allowParams = !1),
          (f.state.allowName = !0),
          (f.state.allowArray = !0);
        break;
      case ',':
        delete f.state,
          f.name === 'indexed' && (t || i(c), (f.indexed = !0), (f.name = '')),
          Mn(f.type, f.name) && (f.name = ''),
          (f.type = Ci(f.type));
        let S = n(f.parent);
        f.parent.components.push(S), delete f.parent, (f = S);
        break;
      case ' ':
        f.state.allowType &&
          f.type !== '' &&
          ((f.type = Ci(f.type)),
          delete f.state.allowType,
          (f.state.allowName = !0),
          (f.state.allowParams = !0)),
          f.state.allowName &&
            f.name !== '' &&
            (f.name === 'indexed'
              ? (t || i(c), f.indexed && i(c), (f.indexed = !0), (f.name = ''))
              : Mn(f.type, f.name)
                ? (f.name = '')
                : (f.state.allowName = !1));
        break;
      case '[':
        f.state.allowArray || i(c),
          (f.type += v),
          (f.state.allowArray = !1),
          (f.state.allowName = !1),
          (f.state.readArray = !0);
        break;
      case ']':
        f.state.readArray || i(c),
          (f.type += v),
          (f.state.readArray = !1),
          (f.state.allowArray = !0),
          (f.state.allowName = !0);
        break;
      default:
        f.state.allowType
          ? ((f.type += v), (f.state.allowParams = !0), (f.state.allowArray = !0))
          : f.state.allowName
            ? ((f.name += v), delete f.state.allowArray)
            : f.state.readArray
              ? (f.type += v)
              : i(c);
    }
  }
  return (
    f.parent && me.throwArgumentError('unexpected eof', 'param', r),
    delete s.state,
    f.name === 'indexed'
      ? (t || i(e.length - 7), f.indexed && i(e.length - 7), (f.indexed = !0), (f.name = ''))
      : Mn(f.type, f.name) && (f.name = ''),
    (s.type = Ci(s.type)),
    s
  );
}
function Cn(r, t) {
  for (let e in t) Y(r, e, t[e]);
}
const Me = Object.freeze({ sighash: 'sighash', minimal: 'minimal', full: 'full', json: 'json' }),
  sc = new RegExp(/^(.*)\[([0-9]*)\]$/);
class We {
  constructor(t, e) {
    t !== _i &&
      me.throwError('use fromString', D.errors.UNSUPPORTED_OPERATION, {
        operation: 'new ParamType()',
      }),
      Cn(this, e);
    let i = this.type.match(sc);
    i
      ? Cn(this, {
          arrayLength: parseInt(i[2] || '-1'),
          arrayChildren: We.fromObject({ type: i[1], components: this.components }),
          baseType: 'array',
        })
      : Cn(this, {
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
    return typeof t == 'string' ? We.fromString(t, e) : We.fromObject(t);
  }
  static fromObject(t) {
    return We.isParamType(t)
      ? t
      : new We(_i, {
          name: t.name || null,
          type: Ci(t.type),
          indexed: t.indexed == null ? null : !!t.indexed,
          components: t.components ? t.components.map(We.fromObject) : null,
        });
  }
  static fromString(t, e) {
    function i(n) {
      return We.fromObject({
        name: n.name,
        type: n.type,
        indexed: n.indexed,
        components: n.components,
      });
    }
    return i(nc(t, !!e));
  }
  static isParamType(t) {
    return !!(t != null && t._isParamType);
  }
}
function on(r, t) {
  return ac(r).map((e) => We.fromString(e, t));
}
class ni {
  constructor(t, e) {
    t !== _i &&
      me.throwError('use a static from method', D.errors.UNSUPPORTED_OPERATION, {
        operation: 'new Fragment()',
      }),
      Cn(this, e),
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
        return Vr.fromObject(t);
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
            ? Vr.fromString(t.trim())
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
      name: an(t.name),
      anonymous: t.anonymous,
      inputs: t.inputs ? t.inputs.map(We.fromObject) : [],
      type: 'event',
    };
    return new ii(_i, e);
  }
  static fromString(t) {
    let e = t.match(un);
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
      ii.fromObject({ name: e[1].trim(), anonymous: i, inputs: on(e[2], !0), type: 'event' })
    );
  }
  static isEventFragment(t) {
    return t && t._isFragment && t.type === 'event';
  }
}
function lu(r, t) {
  t.gas = null;
  let e = r.split('@');
  return e.length !== 1
    ? (e.length > 2 && me.throwArgumentError('invalid human-readable ABI signature', 'value', r),
      e[1].match(/^[0-9]+$/) ||
        me.throwArgumentError('invalid human-readable ABI signature gas', 'value', r),
      (t.gas = st.from(e[1])),
      e[0])
    : r;
}
function hu(r, t) {
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
function cu(r) {
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
class Vr extends ni {
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
      me.throwError('cannot format a constructor for sighash', D.errors.UNSUPPORTED_OPERATION, {
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
    return typeof t == 'string' ? Vr.fromString(t) : Vr.fromObject(t);
  }
  static fromObject(t) {
    if (Vr.isConstructorFragment(t)) return t;
    t.type !== 'constructor' && me.throwArgumentError('invalid constructor object', 'value', t);
    let e = cu(t);
    e.constant && me.throwArgumentError('constructor cannot be constant', 'value', t);
    const i = {
      name: null,
      type: t.type,
      inputs: t.inputs ? t.inputs.map(We.fromObject) : [],
      payable: e.payable,
      stateMutability: e.stateMutability,
      gas: t.gas ? st.from(t.gas) : null,
    };
    return new Vr(_i, i);
  }
  static fromString(t) {
    let e = { type: 'constructor' };
    t = lu(t, e);
    let i = t.match(un);
    return (
      (!i || i[1].trim() !== 'constructor') &&
        me.throwArgumentError('invalid constructor string', 'value', t),
      (e.inputs = on(i[2].trim(), !1)),
      hu(i[3].trim(), e),
      Vr.fromObject(e)
    );
  }
  static isConstructorFragment(t) {
    return t && t._isFragment && t.type === 'constructor';
  }
}
class jr extends Vr {
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
    let e = cu(t);
    const i = {
      type: t.type,
      name: an(t.name),
      constant: e.constant,
      inputs: t.inputs ? t.inputs.map(We.fromObject) : [],
      outputs: t.outputs ? t.outputs.map(We.fromObject) : [],
      payable: e.payable,
      stateMutability: e.stateMutability,
      gas: t.gas ? st.from(t.gas) : null,
    };
    return new jr(_i, i);
  }
  static fromString(t) {
    let e = { type: 'function' };
    t = lu(t, e);
    let i = t.split(' returns ');
    i.length > 2 && me.throwArgumentError('invalid function string', 'value', t);
    let n = i[0].match(un);
    if (
      (n || me.throwArgumentError('invalid function signature', 'value', t),
      (e.name = n[1].trim()),
      e.name && an(e.name),
      (e.inputs = on(n[2], !1)),
      hu(n[3].trim(), e),
      i.length > 1)
    ) {
      let s = i[1].match(un);
      (s[1].trim() != '' || s[3].trim() != '') &&
        me.throwArgumentError('unexpected tokens', 'value', t),
        (e.outputs = on(s[2], !1));
    } else e.outputs = [];
    return jr.fromObject(e);
  }
  static isFunctionFragment(t) {
    return t && t._isFragment && t.type === 'function';
  }
}
function Vo(r) {
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
      name: an(t.name),
      inputs: t.inputs ? t.inputs.map(We.fromObject) : [],
    };
    return Vo(new hi(_i, e));
  }
  static fromString(t) {
    let e = { type: 'error' },
      i = t.match(un);
    return (
      i || me.throwArgumentError('invalid error signature', 'value', t),
      (e.name = i[1].trim()),
      e.name && an(e.name),
      (e.inputs = on(i[2], !1)),
      Vo(hi.fromObject(e))
    );
  }
  static isErrorFragment(t) {
    return t && t._isFragment && t.type === 'error';
  }
}
function Ci(r) {
  return (
    r.match(/^uint($|[^1-9])/)
      ? (r = 'uint256' + r.substring(4))
      : r.match(/^int($|[^1-9])/) && (r = 'int256' + r.substring(3)),
    r
  );
}
const oc = new RegExp('^[a-zA-Z$_][a-zA-Z0-9$_]*$');
function an(r) {
  return (!r || !r.match(oc)) && me.throwArgumentError(`invalid identifier "${r}"`, 'value', r), r;
}
const un = new RegExp('^([^)(]*)\\((.*)\\)([^)(]*)$');
function ac(r) {
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
const Xs = new D(yn);
function uc(r) {
  const t = [],
    e = function (i, n) {
      if (Array.isArray(n))
        for (let s in n) {
          const f = i.slice();
          f.push(s);
          try {
            e(f, n[s]);
          } catch (c) {
            t.push({ path: f, error: c });
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
    Xs.throwArgumentError(t, this.localName, e);
  }
}
class Cs {
  constructor(t) {
    Y(this, 'wordSize', t || 32),
      (this._data = []),
      (this._dataLength = 0),
      (this._padding = new Uint8Array(t));
  }
  get data() {
    return hr(this._data);
  }
  get length() {
    return this._dataLength;
  }
  _writeData(t) {
    return this._data.push(t), (this._dataLength += t.length), t.length;
  }
  appendWriter(t) {
    return this._writeData(Qe(t._data));
  }
  writeBytes(t) {
    let e = mt(t);
    const i = e.length % this.wordSize;
    return i && (e = Qe([e, this._padding.slice(i)])), this._writeData(e);
  }
  _getValue(t) {
    let e = mt(st.from(t));
    return (
      e.length > this.wordSize &&
        Xs.throwError('value out-of-bounds', D.errors.BUFFER_OVERRUN, {
          length: this.wordSize,
          offset: e.length,
        }),
      e.length % this.wordSize && (e = Qe([this._padding.slice(e.length % this.wordSize), e])),
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
class Gn {
  constructor(t, e, i, n) {
    Y(this, '_data', mt(t)),
      Y(this, 'wordSize', e || 32),
      Y(this, '_coerceFunc', i),
      Y(this, 'allowLoose', n),
      (this._offset = 0);
  }
  get data() {
    return vt(this._data);
  }
  get consumed() {
    return this._offset;
  }
  static coerce(t, e) {
    let i = t.match('^u?int([0-9]+)$');
    return i && parseInt(i[1]) <= 48 && (e = e.toNumber()), e;
  }
  coerce(t, e) {
    return this._coerceFunc ? this._coerceFunc(t, e) : Gn.coerce(t, e);
  }
  _peekBytes(t, e, i) {
    let n = Math.ceil(e / this.wordSize) * this.wordSize;
    return (
      this._offset + n > this._data.length &&
        (this.allowLoose && i && this._offset + e <= this._data.length
          ? (n = e)
          : Xs.throwError('data out-of-bounds', D.errors.BUFFER_OVERRUN, {
              length: this._data.length,
              offset: this._offset + n,
            })),
      this._data.slice(this._offset, this._offset + n)
    );
  }
  subReader(t) {
    return new Gn(
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
    return st.from(this.readBytes(this.wordSize));
  }
}
class fc extends ai {
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
    return Je(Fe(t.readValue().toHexString(), 20));
  }
}
class lc extends ai {
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
const Ri = new D(yn);
function du(r, t, e) {
  let i = null;
  if (Array.isArray(e)) i = e;
  else if (e && typeof e == 'object') {
    let v = {};
    i = t.map((b) => {
      const S = b.localName;
      return (
        S ||
          Ri.throwError(
            'cannot encode object for signature with missing names',
            D.errors.INVALID_ARGUMENT,
            { argument: 'values', coder: b, value: e }
          ),
        v[S] &&
          Ri.throwError(
            'cannot encode object for signature with duplicate names',
            D.errors.INVALID_ARGUMENT,
            { argument: 'values', coder: b, value: e }
          ),
        (v[S] = !0),
        e[S]
      );
    });
  } else Ri.throwArgumentError('invalid tuple value', 'tuple', e);
  t.length !== i.length && Ri.throwArgumentError('types/value length mismatch', 'tuple', e);
  let n = new Cs(r.wordSize),
    s = new Cs(r.wordSize),
    f = [];
  t.forEach((v, b) => {
    let S = i[b];
    if (v.dynamic) {
      let P = s.length;
      v.encode(s, S);
      let B = n.writeUpdatableValue();
      f.push((N) => {
        B(N + P);
      });
    } else v.encode(n, S);
  }),
    f.forEach((v) => {
      v(n.length);
    });
  let c = r.appendWriter(n);
  return (c += r.appendWriter(s)), c;
}
function gu(r, t) {
  let e = [],
    i = r.subReader(0);
  t.forEach((s) => {
    let f = null;
    if (s.dynamic) {
      let c = r.readValue(),
        v = i.subReader(c.toNumber());
      try {
        f = s.decode(v);
      } catch (b) {
        if (b.code === D.errors.BUFFER_OVERRUN) throw b;
        (f = b), (f.baseType = s.name), (f.name = s.localName), (f.type = s.type);
      }
    } else
      try {
        f = s.decode(r);
      } catch (c) {
        if (c.code === D.errors.BUFFER_OVERRUN) throw c;
        (f = c), (f.baseType = s.name), (f.name = s.localName), (f.type = s.type);
      }
    f != null && e.push(f);
  });
  const n = t.reduce((s, f) => {
    const c = f.localName;
    return c && (s[c] || (s[c] = 0), s[c]++), s;
  }, {});
  t.forEach((s, f) => {
    let c = s.localName;
    if (!c || n[c] !== 1 || (c === 'length' && (c = '_length'), e[c] != null)) return;
    const v = e[f];
    v instanceof Error
      ? Object.defineProperty(e, c, {
          enumerable: !0,
          get: () => {
            throw v;
          },
        })
      : (e[c] = v);
  });
  for (let s = 0; s < e.length; s++) {
    const f = e[s];
    f instanceof Error &&
      Object.defineProperty(e, s, {
        enumerable: !0,
        get: () => {
          throw f;
        },
      });
  }
  return Object.freeze(e);
}
class hc extends ai {
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
      Ri.checkArgumentCount(
        e.length,
        i,
        'coder array' + (this.localName ? ' ' + this.localName : '')
      );
    let n = [];
    for (let s = 0; s < e.length; s++) n.push(this.coder);
    return du(t, n, e);
  }
  decode(t) {
    let e = this.length;
    e === -1 &&
      ((e = t.readValue().toNumber()),
      e * 32 > t._data.length &&
        Ri.throwError('insufficient data length', D.errors.BUFFER_OVERRUN, {
          length: t._data.length,
          count: e,
        }));
    let i = [];
    for (let n = 0; n < e; n++) i.push(new lc(this.coder));
    return t.coerce(this.name, gu(t, i));
  }
}
class cc extends ai {
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
class pu extends ai {
  constructor(t, e) {
    super(t, t, e, !0);
  }
  defaultValue() {
    return '0x';
  }
  encode(t, e) {
    e = mt(e);
    let i = t.writeValue(e.length);
    return (i += t.writeBytes(e)), i;
  }
  decode(t) {
    return t.readBytes(t.readValue().toNumber(), !0);
  }
}
class dc extends pu {
  constructor(t) {
    super('bytes', t);
  }
  decode(t) {
    return t.coerce(this.name, vt(super.decode(t)));
  }
}
class gc extends ai {
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
    let i = mt(e);
    return i.length !== this.size && this._throwError('incorrect data length', e), t.writeBytes(i);
  }
  decode(t) {
    return t.coerce(this.name, vt(t.readBytes(this.size)));
  }
}
class pc extends ai {
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
class mc extends ai {
  constructor(t, e, i) {
    const n = (e ? 'int' : 'uint') + t * 8;
    super(n, n, i, !1), (this.size = t), (this.signed = e);
  }
  defaultValue() {
    return 0;
  }
  encode(t, e) {
    let i = st.from(e),
      n = Qu.mask(t.wordSize * 8);
    if (this.signed) {
      let s = n.mask(this.size * 8 - 1);
      (i.gt(s) || i.lt(s.add(Zu).mul(Yu))) && this._throwError('value out-of-bounds', e);
    } else (i.lt(oa) || i.gt(n.mask(this.size * 8))) && this._throwError('value out-of-bounds', e);
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
class vc extends pu {
  constructor(t) {
    super('string', t);
  }
  defaultValue() {
    return '';
  }
  encode(t, e) {
    return super.encode(t, sr(e));
  }
  decode(t) {
    return dn(super.decode(t));
  }
}
class Sn extends ai {
  constructor(t, e) {
    let i = !1;
    const n = [];
    t.forEach((f) => {
      f.dynamic && (i = !0), n.push(f.type);
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
    return du(t, this.coders, e);
  }
  decode(t) {
    return t.coerce(this.name, gu(t, this.coders));
  }
}
const _n = new D(yn),
  yc = new RegExp(/^bytes([0-9]*)$/),
  wc = new RegExp(/^(u?int)([0-9]*)$/);
class bc {
  constructor(t) {
    Y(this, 'coerceFunc', t || null);
  }
  _getCoder(t) {
    switch (t.baseType) {
      case 'address':
        return new fc(t.name);
      case 'bool':
        return new cc(t.name);
      case 'string':
        return new vc(t.name);
      case 'bytes':
        return new dc(t.name);
      case 'array':
        return new hc(this._getCoder(t.arrayChildren), t.arrayLength, t.name);
      case 'tuple':
        return new Sn(
          (t.components || []).map((i) => this._getCoder(i)),
          t.name
        );
      case '':
        return new pc(t.name);
    }
    let e = t.type.match(wc);
    if (e) {
      let i = parseInt(e[2] || '256');
      return (
        (i === 0 || i > 256 || i % 8 !== 0) &&
          _n.throwArgumentError('invalid ' + e[1] + ' bit length', 'param', t),
        new mc(i / 8, e[1] === 'int', t.name)
      );
    }
    if (((e = t.type.match(yc)), e)) {
      let i = parseInt(e[1]);
      return (
        (i === 0 || i > 32) && _n.throwArgumentError('invalid bytes length', 'param', t),
        new gc(i, t.name)
      );
    }
    return _n.throwArgumentError('invalid type', 'type', t.type);
  }
  _getWordSize() {
    return 32;
  }
  _getReader(t, e) {
    return new Gn(t, this._getWordSize(), this.coerceFunc, e);
  }
  _getWriter() {
    return new Cs(this._getWordSize());
  }
  getDefaultValue(t) {
    const e = t.map((n) => this._getCoder(We.from(n)));
    return new Sn(e, '_').defaultValue();
  }
  encode(t, e) {
    t.length !== e.length &&
      _n.throwError('types/values length mismatch', D.errors.INVALID_ARGUMENT, {
        count: { types: t.length, values: e.length },
        value: { types: t, values: e },
      });
    const i = t.map((f) => this._getCoder(We.from(f))),
      n = new Sn(i, '_'),
      s = this._getWriter();
    return n.encode(s, e), s.data;
  }
  decode(t, e, i) {
    const n = t.map((f) => this._getCoder(We.from(f)));
    return new Sn(n, '_').decode(this._getReader(mt(e), i));
  }
}
const Ac = new bc(),
  Te = new D(yn);
class Ec extends hn {}
class xc extends hn {}
class Mc extends hn {}
class Is extends hn {
  static isIndexed(t) {
    return !!(t && t._isIndexed);
  }
}
const Sc = {
  '0x08c379a0': { signature: 'Error(string)', name: 'Error', inputs: ['string'], reason: !0 },
  '0x4e487b71': { signature: 'Panic(uint256)', name: 'Panic', inputs: ['uint256'] },
};
function jo(r, t) {
  const e = new Error(`deferred error during ABI decoding triggered accessing ${r}`);
  return (e.error = t), e;
}
class Wo {
  constructor(t) {
    let e = [];
    typeof t == 'string' ? (e = JSON.parse(t)) : (e = t),
      Y(
        this,
        'fragments',
        e.map((i) => ni.from(i)).filter((i) => i != null)
      ),
      Y(this, '_abiCoder', Wr(new.target, 'getAbiCoder')()),
      Y(this, 'functions', {}),
      Y(this, 'errors', {}),
      Y(this, 'events', {}),
      Y(this, 'structs', {}),
      this.fragments.forEach((i) => {
        let n = null;
        switch (i.type) {
          case 'constructor':
            if (this.deploy) {
              Te.warn('duplicate definition - constructor');
              return;
            }
            Y(this, 'deploy', i);
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
          Te.warn('duplicate definition - ' + s);
          return;
        }
        n[s] = i;
      }),
      this.deploy || Y(this, 'deploy', Vr.from({ payable: !1, type: 'constructor' })),
      Y(this, '_isInterface', !0);
  }
  format(t) {
    t || (t = Me.full),
      t === Me.sighash &&
        Te.throwArgumentError('interface does not support formatting sighash', 'format', t);
    const e = this.fragments.map((i) => i.format(t));
    return t === Me.json ? JSON.stringify(e.map((i) => JSON.parse(i))) : e;
  }
  static getAbiCoder() {
    return Ac;
  }
  static getAddress(t) {
    return Je(t);
  }
  static getSighash(t) {
    return je(wi(t.format()), 0, 4);
  }
  static getEventTopic(t) {
    return wi(t.format());
  }
  getFunction(t) {
    if (De(t)) {
      for (const i in this.functions) if (t === this.getSighash(i)) return this.functions[i];
      Te.throwArgumentError('no matching function', 'sighash', t);
    }
    if (t.indexOf('(') === -1) {
      const i = t.trim(),
        n = Object.keys(this.functions).filter((s) => s.split('(')[0] === i);
      return (
        n.length === 0
          ? Te.throwArgumentError('no matching function', 'name', i)
          : n.length > 1 && Te.throwArgumentError('multiple matching functions', 'name', i),
        this.functions[n[0]]
      );
    }
    const e = this.functions[jr.fromString(t).format()];
    return e || Te.throwArgumentError('no matching function', 'signature', t), e;
  }
  getEvent(t) {
    if (De(t)) {
      const i = t.toLowerCase();
      for (const n in this.events) if (i === this.getEventTopic(n)) return this.events[n];
      Te.throwArgumentError('no matching event', 'topichash', i);
    }
    if (t.indexOf('(') === -1) {
      const i = t.trim(),
        n = Object.keys(this.events).filter((s) => s.split('(')[0] === i);
      return (
        n.length === 0
          ? Te.throwArgumentError('no matching event', 'name', i)
          : n.length > 1 && Te.throwArgumentError('multiple matching events', 'name', i),
        this.events[n[0]]
      );
    }
    const e = this.events[ii.fromString(t).format()];
    return e || Te.throwArgumentError('no matching event', 'signature', t), e;
  }
  getError(t) {
    if (De(t)) {
      const i = Wr(this.constructor, 'getSighash');
      for (const n in this.errors) {
        const s = this.errors[n];
        if (t === i(s)) return this.errors[n];
      }
      Te.throwArgumentError('no matching error', 'sighash', t);
    }
    if (t.indexOf('(') === -1) {
      const i = t.trim(),
        n = Object.keys(this.errors).filter((s) => s.split('(')[0] === i);
      return (
        n.length === 0
          ? Te.throwArgumentError('no matching error', 'name', i)
          : n.length > 1 && Te.throwArgumentError('multiple matching errors', 'name', i),
        this.errors[n[0]]
      );
    }
    const e = this.errors[jr.fromString(t).format()];
    return e || Te.throwArgumentError('no matching error', 'signature', t), e;
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
    return Wr(this.constructor, 'getSighash')(t);
  }
  getEventTopic(t) {
    return typeof t == 'string' && (t = this.getEvent(t)), Wr(this.constructor, 'getEventTopic')(t);
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
    const i = mt(e);
    return (
      vt(i.slice(0, 4)) !== this.getSighash(t) &&
        Te.throwArgumentError(`data signature does not match error ${t.name}.`, 'data', vt(i)),
      this._decodeParams(t.inputs, i.slice(4))
    );
  }
  encodeErrorResult(t, e) {
    return (
      typeof t == 'string' && (t = this.getError(t)),
      vt(Qe([this.getSighash(t), this._encodeParams(t.inputs, e || [])]))
    );
  }
  decodeFunctionData(t, e) {
    typeof t == 'string' && (t = this.getFunction(t));
    const i = mt(e);
    return (
      vt(i.slice(0, 4)) !== this.getSighash(t) &&
        Te.throwArgumentError(`data signature does not match function ${t.name}.`, 'data', vt(i)),
      this._decodeParams(t.inputs, i.slice(4))
    );
  }
  encodeFunctionData(t, e) {
    return (
      typeof t == 'string' && (t = this.getFunction(t)),
      vt(Qe([this.getSighash(t), this._encodeParams(t.inputs, e || [])]))
    );
  }
  decodeFunctionResult(t, e) {
    typeof t == 'string' && (t = this.getFunction(t));
    let i = mt(e),
      n = null,
      s = '',
      f = null,
      c = null,
      v = null;
    switch (i.length % this._abiCoder._getWordSize()) {
      case 0:
        try {
          return this._abiCoder.decode(t.outputs, i);
        } catch {}
        break;
      case 4: {
        const b = vt(i.slice(0, 4)),
          S = Sc[b];
        if (S)
          (f = this._abiCoder.decode(S.inputs, i.slice(4))),
            (c = S.name),
            (v = S.signature),
            S.reason && (n = f[0]),
            c === 'Error'
              ? (s = `; VM Exception while processing transaction: reverted with reason string ${JSON.stringify(f[0])}`)
              : c === 'Panic' &&
                (s = `; VM Exception while processing transaction: reverted with panic code ${f[0]}`);
        else
          try {
            const P = this.getError(b);
            (f = this._abiCoder.decode(P.inputs, i.slice(4))), (c = P.name), (v = P.format());
          } catch {}
        break;
      }
    }
    return Te.throwError('call revert exception' + s, D.errors.CALL_EXCEPTION, {
      method: t.format(),
      data: vt(e),
      errorArgs: f,
      errorName: c,
      errorSignature: v,
      reason: n,
    });
  }
  encodeFunctionResult(t, e) {
    return (
      typeof t == 'string' && (t = this.getFunction(t)),
      vt(this._abiCoder.encode(t.outputs, e || []))
    );
  }
  encodeFilterTopics(t, e) {
    typeof t == 'string' && (t = this.getEvent(t)),
      e.length > t.inputs.length &&
        Te.throwError('too many arguments for ' + t.format(), D.errors.UNEXPECTED_ARGUMENT, {
          argument: 'values',
          value: e,
        });
    let i = [];
    t.anonymous || i.push(this.getEventTopic(t));
    const n = (s, f) =>
      s.type === 'string'
        ? wi(f)
        : s.type === 'bytes'
          ? He(vt(f))
          : (s.type === 'bool' && typeof f == 'boolean' && (f = f ? '0x01' : '0x00'),
            s.type.match(/^u?int/) && (f = st.from(f).toHexString()),
            s.type === 'address' && this._abiCoder.encode(['address'], [f]),
            Fe(vt(f), 32));
    for (
      e.forEach((s, f) => {
        let c = t.inputs[f];
        if (!c.indexed) {
          s != null &&
            Te.throwArgumentError(
              'cannot filter non-indexed parameters; must be null',
              'contract.' + c.name,
              s
            );
          return;
        }
        s == null
          ? i.push(null)
          : c.baseType === 'array' || c.baseType === 'tuple'
            ? Te.throwArgumentError(
                'filtering with tuples or arrays not supported',
                'contract.' + c.name,
                s
              )
            : Array.isArray(s)
              ? i.push(s.map((v) => n(c, v)))
              : i.push(n(c, s));
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
        Te.throwArgumentError('event arguments/values mismatch', 'values', e),
      t.inputs.forEach((f, c) => {
        const v = e[c];
        if (f.indexed)
          if (f.type === 'string') i.push(wi(v));
          else if (f.type === 'bytes') i.push(He(v));
          else {
            if (f.baseType === 'tuple' || f.baseType === 'array')
              throw new Error('not implemented');
            i.push(this._abiCoder.encode([f.type], [v]));
          }
        else n.push(f), s.push(v);
      }),
      { data: this._abiCoder.encode(n, s), topics: i }
    );
  }
  decodeEventLog(t, e, i) {
    if ((typeof t == 'string' && (t = this.getEvent(t)), i != null && !t.anonymous)) {
      let B = this.getEventTopic(t);
      (!De(i[0], 32) || i[0].toLowerCase() !== B) &&
        Te.throwError('fragment/topic mismatch', D.errors.INVALID_ARGUMENT, {
          argument: 'topics[0]',
          expected: B,
          value: i[0],
        }),
        (i = i.slice(1));
    }
    let n = [],
      s = [],
      f = [];
    t.inputs.forEach((B, N) => {
      B.indexed
        ? B.type === 'string' ||
          B.type === 'bytes' ||
          B.baseType === 'tuple' ||
          B.baseType === 'array'
          ? (n.push(We.fromObject({ type: 'bytes32', name: B.name })), f.push(!0))
          : (n.push(B), f.push(!1))
        : (s.push(B), f.push(!1));
    });
    let c = i != null ? this._abiCoder.decode(n, Qe(i)) : null,
      v = this._abiCoder.decode(s, e, !0),
      b = [],
      S = 0,
      P = 0;
    t.inputs.forEach((B, N) => {
      if (B.indexed)
        if (c == null) b[N] = new Is({ _isIndexed: !0, hash: null });
        else if (f[N]) b[N] = new Is({ _isIndexed: !0, hash: c[P++] });
        else
          try {
            b[N] = c[P++];
          } catch (R) {
            b[N] = R;
          }
      else
        try {
          b[N] = v[S++];
        } catch (R) {
          b[N] = R;
        }
      if (B.name && b[B.name] == null) {
        const R = b[N];
        R instanceof Error
          ? Object.defineProperty(b, B.name, {
              enumerable: !0,
              get: () => {
                throw jo(`property ${JSON.stringify(B.name)}`, R);
              },
            })
          : (b[B.name] = R);
      }
    });
    for (let B = 0; B < b.length; B++) {
      const N = b[B];
      N instanceof Error &&
        Object.defineProperty(b, B, {
          enumerable: !0,
          get: () => {
            throw jo(`index ${B}`, N);
          },
        });
    }
    return Object.freeze(b);
  }
  parseTransaction(t) {
    let e = this.getFunction(t.data.substring(0, 10).toLowerCase());
    return e
      ? new xc({
          args: this._abiCoder.decode(e.inputs, '0x' + t.data.substring(10)),
          functionFragment: e,
          name: e.name,
          signature: e.format(),
          sighash: this.getSighash(e),
          value: st.from(t.value || '0'),
        })
      : null;
  }
  parseLog(t) {
    let e = this.getEvent(t.topics[0]);
    return !e || e.anonymous
      ? null
      : new Ec({
          eventFragment: e,
          name: e.name,
          signature: e.format(),
          topic: this.getEventTopic(e),
          args: this.decodeEventLog(e, t.data, t.topics),
        });
  }
  parseError(t) {
    const e = vt(t);
    let i = this.getError(e.substring(0, 10).toLowerCase());
    return i
      ? new Mc({
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
const _c = 'contracts/5.7.0';
var Pi = function (r, t, e, i) {
  function n(s) {
    return s instanceof e
      ? s
      : new e(function (f) {
          f(s);
        });
  }
  return new (e || (e = Promise))(function (s, f) {
    function c(S) {
      try {
        b(i.next(S));
      } catch (P) {
        f(P);
      }
    }
    function v(S) {
      try {
        b(i.throw(S));
      } catch (P) {
        f(P);
      }
    }
    function b(S) {
      S.done ? s(S.value) : n(S.value).then(c, v);
    }
    b((i = i.apply(r, t || [])).next());
  });
};
const Ue = new D(_c);
function Vn(r, t) {
  return Pi(this, void 0, void 0, function* () {
    const e = yield t;
    typeof e != 'string' && Ue.throwArgumentError('invalid address or ENS name', 'name', e);
    try {
      return Je(e);
    } catch {}
    r ||
      Ue.throwError(
        'a provider or signer is needed to resolve ENS names',
        D.errors.UNSUPPORTED_OPERATION,
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
function In(r, t, e) {
  return Pi(this, void 0, void 0, function* () {
    return Array.isArray(e)
      ? yield Promise.all(e.map((i, n) => In(r, Array.isArray(t) ? t[n] : t[i.name], i)))
      : e.type === 'address'
        ? yield Vn(r, t)
        : e.type === 'tuple'
          ? yield In(r, t, e.components)
          : e.baseType === 'array'
            ? Array.isArray(t)
              ? yield Promise.all(t.map((i) => In(r, i, e.arrayChildren)))
              : Promise.reject(
                  Ue.makeError('invalid value for array', D.errors.INVALID_ARGUMENT, {
                    argument: 'value',
                    value: t,
                  })
                )
            : t;
  });
}
function as(r, t, e) {
  return Pi(this, void 0, void 0, function* () {
    let i = {};
    e.length === t.inputs.length + 1 && typeof e[e.length - 1] == 'object' && (i = Ve(e.pop())),
      Ue.checkArgumentCount(e.length, t.inputs.length, 'passed to contract'),
      r.signer
        ? i.from
          ? (i.from = Ke({ override: Vn(r.signer, i.from), signer: r.signer.getAddress() }).then(
              (b) =>
                Pi(this, void 0, void 0, function* () {
                  return (
                    Je(b.signer) !== b.override &&
                      Ue.throwError(
                        'Contract with a Signer cannot override from',
                        D.errors.UNSUPPORTED_OPERATION,
                        { operation: 'overrides.from' }
                      ),
                    b.override
                  );
                })
            ))
          : (i.from = r.signer.getAddress())
        : i.from && (i.from = Vn(r.provider, i.from));
    const n = yield Ke({
        args: In(r.signer || r.provider, e, t.inputs),
        address: r.resolvedAddress,
        overrides: Ke(i) || {},
      }),
      s = r.interface.encodeFunctionData(t, n.args),
      f = { data: s, to: n.address },
      c = n.overrides;
    if (
      (c.nonce != null && (f.nonce = st.from(c.nonce).toNumber()),
      c.gasLimit != null && (f.gasLimit = st.from(c.gasLimit)),
      c.gasPrice != null && (f.gasPrice = st.from(c.gasPrice)),
      c.maxFeePerGas != null && (f.maxFeePerGas = st.from(c.maxFeePerGas)),
      c.maxPriorityFeePerGas != null && (f.maxPriorityFeePerGas = st.from(c.maxPriorityFeePerGas)),
      c.from != null && (f.from = c.from),
      c.type != null && (f.type = c.type),
      c.accessList != null && (f.accessList = Ki(c.accessList)),
      f.gasLimit == null && t.gas != null)
    ) {
      let b = 21e3;
      const S = mt(s);
      for (let P = 0; P < S.length; P++) (b += 4), S[P] && (b += 64);
      f.gasLimit = st.from(t.gas).add(b);
    }
    if (c.value) {
      const b = st.from(c.value);
      !b.isZero() &&
        !t.payable &&
        Ue.throwError('non-payable method cannot override value', D.errors.UNSUPPORTED_OPERATION, {
          operation: 'overrides.value',
          value: i.value,
        }),
        (f.value = b);
    }
    c.customData && (f.customData = Ve(c.customData)),
      c.ccipReadEnabled && (f.ccipReadEnabled = !!c.ccipReadEnabled),
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
    const v = Object.keys(i).filter((b) => i[b] != null);
    return (
      v.length &&
        Ue.throwError(
          `cannot override ${v.map((b) => JSON.stringify(b)).join(',')}`,
          D.errors.UNSUPPORTED_OPERATION,
          { operation: 'overrides', overrides: v }
        ),
      f
    );
  });
}
function Pc(r, t) {
  return function (...e) {
    return as(r, t, e);
  };
}
function kc(r, t) {
  const e = r.signer || r.provider;
  return function (...i) {
    return Pi(this, void 0, void 0, function* () {
      e ||
        Ue.throwError('estimate require a provider or signer', D.errors.UNSUPPORTED_OPERATION, {
          operation: 'estimateGas',
        });
      const n = yield as(r, t, i);
      return yield e.estimateGas(n);
    });
  };
}
function Tc(r, t) {
  const e = t.wait.bind(t);
  t.wait = (i) =>
    e(i).then(
      (n) => (
        (n.events = n.logs.map((s) => {
          let f = oi(s),
            c = null;
          try {
            c = r.interface.parseLog(s);
          } catch {}
          return (
            c &&
              ((f.args = c.args),
              (f.decode = (v, b) => r.interface.decodeEventLog(c.eventFragment, v, b)),
              (f.event = c.name),
              (f.eventSignature = c.signature)),
            (f.removeListener = () => r.provider),
            (f.getBlock = () => r.provider.getBlock(n.blockHash)),
            (f.getTransaction = () => r.provider.getTransaction(n.transactionHash)),
            (f.getTransactionReceipt = () => Promise.resolve(n)),
            f
          );
        })),
        n
      )
    );
}
function mu(r, t, e) {
  const i = r.signer || r.provider;
  return function (...n) {
    return Pi(this, void 0, void 0, function* () {
      let s;
      if (n.length === t.inputs.length + 1 && typeof n[n.length - 1] == 'object') {
        const v = Ve(n.pop());
        v.blockTag != null && (s = yield v.blockTag), delete v.blockTag, n.push(v);
      }
      r.deployTransaction != null && (yield r._deployed(s));
      const f = yield as(r, t, n),
        c = yield i.call(f, s);
      try {
        let v = r.interface.decodeFunctionResult(t, c);
        return e && t.outputs.length === 1 && (v = v[0]), v;
      } catch (v) {
        throw (
          (v.code === D.errors.CALL_EXCEPTION &&
            ((v.address = r.address), (v.args = n), (v.transaction = f)),
          v)
        );
      }
    });
  };
}
function Bc(r, t) {
  return function (...e) {
    return Pi(this, void 0, void 0, function* () {
      r.signer ||
        Ue.throwError('sending a transaction requires a signer', D.errors.UNSUPPORTED_OPERATION, {
          operation: 'sendTransaction',
        }),
        r.deployTransaction != null && (yield r._deployed());
      const i = yield as(r, t, e),
        n = yield r.signer.sendTransaction(i);
      return Tc(r, n), n;
    });
  };
}
function Jo(r, t, e) {
  return t.constant ? mu(r, t, e) : Bc(r, t);
}
function vu(r) {
  return r.address && (r.topics == null || r.topics.length === 0)
    ? '*'
    : (r.address || '*') +
        '@' +
        (r.topics ? r.topics.map((t) => (Array.isArray(t) ? t.join('|') : t)).join(':') : '');
}
class fn {
  constructor(t, e) {
    Y(this, 'tag', t), Y(this, 'filter', e), (this._listeners = []);
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
class Nc extends fn {
  constructor() {
    super('error', null);
  }
}
class Yo extends fn {
  constructor(t, e, i, n) {
    const s = { address: t };
    let f = e.getEventTopic(i);
    n
      ? (f !== n[0] && Ue.throwArgumentError('topic mismatch', 'topics', n), (s.topics = n.slice()))
      : (s.topics = [f]),
      super(vu(s), s),
      Y(this, 'address', t),
      Y(this, 'interface', e),
      Y(this, 'fragment', i);
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
    const e = uc(t.args);
    if (e.length) throw e[0].error;
    const i = (t.args || []).slice();
    return i.push(t), i;
  }
}
class Zo extends fn {
  constructor(t, e) {
    super('*', { address: t }), Y(this, 'address', t), Y(this, 'interface', e);
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
class Cc {
  constructor(t, e, i) {
    Y(this, 'interface', Wr(new.target, 'getInterface')(e)),
      i == null
        ? (Y(this, 'provider', null), Y(this, 'signer', null))
        : cn.isSigner(i)
          ? (Y(this, 'provider', i.provider || null), Y(this, 'signer', i))
          : Wn.isProvider(i)
            ? (Y(this, 'provider', i), Y(this, 'signer', null))
            : Ue.throwArgumentError('invalid signer or provider', 'signerOrProvider', i),
      Y(this, 'callStatic', {}),
      Y(this, 'estimateGas', {}),
      Y(this, 'functions', {}),
      Y(this, 'populateTransaction', {}),
      Y(this, 'filters', {});
    {
      const f = {};
      Object.keys(this.interface.events).forEach((c) => {
        const v = this.interface.events[c];
        Y(this.filters, c, (...b) => ({
          address: this.address,
          topics: this.interface.encodeFilterTopics(v, b),
        })),
          f[v.name] || (f[v.name] = []),
          f[v.name].push(c);
      }),
        Object.keys(f).forEach((c) => {
          const v = f[c];
          v.length === 1
            ? Y(this.filters, c, this.filters[v[0]])
            : Ue.warn(`Duplicate definition of ${c} (${v.join(', ')})`);
        });
    }
    if (
      (Y(this, '_runningEvents', {}),
      Y(this, '_wrappedEmits', {}),
      t == null &&
        Ue.throwArgumentError('invalid contract address or ENS name', 'addressOrName', t),
      Y(this, 'address', t),
      this.provider)
    )
      Y(this, 'resolvedAddress', Vn(this.provider, t));
    else
      try {
        Y(this, 'resolvedAddress', Promise.resolve(Je(t)));
      } catch {
        Ue.throwError(
          'provider is required to use ENS name as contract address',
          D.errors.UNSUPPORTED_OPERATION,
          { operation: 'new Contract' }
        );
      }
    this.resolvedAddress.catch((f) => {});
    const n = {},
      s = {};
    Object.keys(this.interface.functions).forEach((f) => {
      const c = this.interface.functions[f];
      if (s[f]) {
        Ue.warn(`Duplicate ABI entry for ${JSON.stringify(f)}`);
        return;
      }
      s[f] = !0;
      {
        const v = c.name;
        n[`%${v}`] || (n[`%${v}`] = []), n[`%${v}`].push(f);
      }
      this[f] == null && Y(this, f, Jo(this, c, !0)),
        this.functions[f] == null && Y(this.functions, f, Jo(this, c, !1)),
        this.callStatic[f] == null && Y(this.callStatic, f, mu(this, c, !0)),
        this.populateTransaction[f] == null && Y(this.populateTransaction, f, Pc(this, c)),
        this.estimateGas[f] == null && Y(this.estimateGas, f, kc(this, c));
    }),
      Object.keys(n).forEach((f) => {
        const c = n[f];
        if (c.length > 1) return;
        f = f.substring(1);
        const v = c[0];
        try {
          this[f] == null && Y(this, f, this[v]);
        } catch {}
        this.functions[f] == null && Y(this.functions, f, this.functions[v]),
          this.callStatic[f] == null && Y(this.callStatic, f, this.callStatic[v]),
          this.populateTransaction[f] == null &&
            Y(this.populateTransaction, f, this.populateTransaction[v]),
          this.estimateGas[f] == null && Y(this.estimateGas, f, this.estimateGas[v]);
      });
  }
  static getContractAddress(t) {
    return ia(t);
  }
  static getInterface(t) {
    return Wo.isInterface(t) ? t : new Wo(t);
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
                    Ue.throwError('contract not deployed', D.errors.UNSUPPORTED_OPERATION, {
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
      Ue.throwError('sending a transactions require a signer', D.errors.UNSUPPORTED_OPERATION, {
        operation: 'sendTransaction(fallback)',
      });
    const e = Ve(t || {});
    return (
      ['from', 'to'].forEach(function (i) {
        e[i] != null &&
          Ue.throwError('cannot override ' + i, D.errors.UNSUPPORTED_OPERATION, { operation: i });
      }),
      (e.to = this.resolvedAddress),
      this.deployed().then(() => this.signer.sendTransaction(e))
    );
  }
  connect(t) {
    typeof t == 'string' && (t = new Ds(t, this.provider));
    const e = new this.constructor(this.address, this.interface, t);
    return this.deployTransaction && Y(e, 'deployTransaction', this.deployTransaction), e;
  }
  attach(t) {
    return new this.constructor(t, this.interface, this.signer || this.provider);
  }
  static isIndexed(t) {
    return Is.isIndexed(t);
  }
  _normalizeRunningEvent(t) {
    return this._runningEvents[t.tag] ? this._runningEvents[t.tag] : t;
  }
  _getRunningEvent(t) {
    if (typeof t == 'string') {
      if (t === 'error') return this._normalizeRunningEvent(new Nc());
      if (t === 'event') return this._normalizeRunningEvent(new fn('event', null));
      if (t === '*') return this._normalizeRunningEvent(new Zo(this.address, this.interface));
      const e = this.interface.getEvent(t);
      return this._normalizeRunningEvent(new Yo(this.address, this.interface, e));
    }
    if (t.topics && t.topics.length > 0) {
      try {
        const i = t.topics[0];
        if (typeof i != 'string') throw new Error('invalid topic');
        const n = this.interface.getEvent(i);
        return this._normalizeRunningEvent(new Yo(this.address, this.interface, n, t.topics));
      } catch {}
      const e = { address: this.address, topics: t.topics };
      return this._normalizeRunningEvent(new fn(vu(e), e));
    }
    return this._normalizeRunningEvent(new Zo(this.address, this.interface));
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
          D.errors.UNSUPPORTED_OPERATION,
          { operation: 'once' }
        ),
      t.addListener(e, i),
      (this._runningEvents[t.tag] = t),
      !this._wrappedEmits[t.tag])
    ) {
      const n = (s) => {
        let f = this._wrapEvent(t, s, e);
        if (f.decodeError == null)
          try {
            const c = t.getEmit(f);
            this.emit(t.filter, ...c);
          } catch (c) {
            f.decodeError = c.error;
          }
        t.filter != null && this.emit('event', f),
          f.decodeError != null && this.emit('error', f.decodeError, f);
      };
      (this._wrappedEmits[t.tag] = n), t.filter != null && this.provider.on(t.filter, n);
    }
  }
  queryFilter(t, e, i) {
    const n = this._getRunningEvent(t),
      s = Ve(n.filter);
    return (
      typeof e == 'string' && De(e, 32)
        ? (i != null &&
            Ue.throwArgumentError('cannot specify toBlock with blockhash', 'toBlock', i),
          (s.blockHash = e))
        : ((s.fromBlock = e ?? 0), (s.toBlock = i ?? 'latest')),
      this.provider.getLogs(s).then((f) => f.map((c) => this._wrapEvent(n, c, null)))
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
class s0 extends Cc {}
var Ic = {},
  Yr = {},
  Ne = {};
Object.defineProperty(Ne, '__esModule', { value: !0 });
Ne.isHexString =
  Ne.getKeys =
  Ne.fromAscii =
  Ne.fromUtf8 =
  Ne.toAscii =
  Ne.arrayContainsArray =
  Ne.getBinarySize =
  Ne.padToEven =
  Lc =
  Ne.stripHexPrefix =
  Ne.isHexPrefixed =
    void 0;
function yu(r) {
  if (typeof r != 'string')
    throw new Error(`[isHexPrefixed] input must be type 'string', received type ${typeof r}`);
  return r[0] === '0' && r[1] === 'x';
}
Ne.isHexPrefixed = yu;
const Rc = (r) => {
  if (typeof r != 'string')
    throw new Error(`[stripHexPrefix] input must be type 'string', received ${typeof r}`);
  return yu(r) ? r.slice(2) : r;
};
var Lc = (Ne.stripHexPrefix = Rc);
function wu(r) {
  let t = r;
  if (typeof t != 'string')
    throw new Error(`[padToEven] value must be type 'string', received ${typeof t}`);
  return t.length % 2 && (t = `0${t}`), t;
}
Ne.padToEven = wu;
function Oc(r) {
  if (typeof r != 'string')
    throw new Error(`[getBinarySize] method requires input type 'string', received ${typeof r}`);
  return H.byteLength(r, 'utf8');
}
Ne.getBinarySize = Oc;
function Uc(r, t, e) {
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
Ne.arrayContainsArray = Uc;
function Dc(r) {
  let t = '',
    e = 0;
  const i = r.length;
  for (r.substring(0, 2) === '0x' && (e = 2); e < i; e += 2) {
    const n = parseInt(r.substr(e, 2), 16);
    t += String.fromCharCode(n);
  }
  return t;
}
Ne.toAscii = Dc;
function Fc(r) {
  const t = H.from(r, 'utf8');
  return `0x${wu(t.toString('hex')).replace(/^0+|0+$/g, '')}`;
}
Ne.fromUtf8 = Fc;
function Kc(r) {
  let t = '';
  for (let e = 0; e < r.length; e++) {
    const n = r.charCodeAt(e).toString(16);
    t += n.length < 2 ? `0${n}` : n;
  }
  return `0x${t}`;
}
Ne.fromAscii = Kc;
function zc(r, t, e) {
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
Ne.getKeys = zc;
function Hc(r, t) {
  return !(
    typeof r != 'string' ||
    !r.match(/^0x[0-9A-Fa-f]*$/) ||
    (typeof t < 'u' && t > 0 && r.length !== 2 + 2 * t)
  );
}
Ne.isHexString = Hc;
Object.defineProperty(Yr, '__esModule', { value: !0 });
Yr.assertIsString = Yr.assertIsArray = Yr.assertIsBuffer = Yr.assertIsHexString = void 0;
const qc = Ne,
  Gc = function (r) {
    if (!(0, qc.isHexString)(r)) {
      const t = `This method only supports 0x-prefixed hex strings but input was: ${r}`;
      throw new Error(t);
    }
  };
Yr.assertIsHexString = Gc;
const Vc = function (r) {
  if (!H.isBuffer(r)) {
    const t = `This method only supports Buffer but input was: ${r}`;
    throw new Error(t);
  }
};
Yr.assertIsBuffer = Vc;
const jc = function (r) {
  if (!Array.isArray(r)) {
    const t = `This method only supports number arrays but input was: ${r}`;
    throw new Error(t);
  }
};
Yr.assertIsArray = jc;
const Wc = function (r) {
  if (typeof r != 'string') {
    const t = `This method only supports strings but input was: ${r}`;
    throw new Error(t);
  }
};
Yr.assertIsString = Wc;
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
    e = Ne,
    i = function (l) {
      if (!Number.isSafeInteger(l) || l < 0)
        throw new Error(`Received an invalid integer type: ${l}`);
      return `0x${l.toString(16)}`;
    };
  r.intToHex = i;
  const n = function (l) {
    const d = (0, r.intToHex)(l);
    return H.from((0, e.padToEven)(d.slice(2)), 'hex');
  };
  r.intToBuffer = n;
  const s = function (l) {
    return H.allocUnsafe(l).fill(0);
  };
  r.zeros = s;
  const f = function (l, d, p) {
      const E = (0, r.zeros)(d);
      return p
        ? l.length < d
          ? (l.copy(E), E)
          : l.slice(0, d)
        : l.length < d
          ? (l.copy(E, d - l.length), E)
          : l.slice(-d);
    },
    c = function (l, d) {
      return (0, t.assertIsBuffer)(l), f(l, d, !1);
    };
  r.setLengthLeft = c;
  const v = function (l, d) {
    return (0, t.assertIsBuffer)(l), f(l, d, !0);
  };
  r.setLengthRight = v;
  const b = function (l) {
      let d = l[0];
      for (; l.length > 0 && d.toString() === '0'; ) (l = l.slice(1)), (d = l[0]);
      return l;
    },
    S = function (l) {
      return (0, t.assertIsBuffer)(l), b(l);
    };
  r.unpadBuffer = S;
  const P = function (l) {
    return (0, t.assertIsArray)(l), b(l);
  };
  r.unpadArray = P;
  const B = function (l) {
    return (0, t.assertIsHexString)(l), (l = (0, e.stripHexPrefix)(l)), '0x' + b(l);
  };
  r.unpadHexString = B;
  const N = function (l) {
    if (l == null) return H.allocUnsafe(0);
    if (H.isBuffer(l)) return H.from(l);
    if (Array.isArray(l) || l instanceof Uint8Array) return H.from(l);
    if (typeof l == 'string') {
      if (!(0, e.isHexString)(l))
        throw new Error(
          `Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: ${l}`
        );
      return H.from((0, e.padToEven)((0, e.stripHexPrefix)(l)), 'hex');
    }
    if (typeof l == 'number') return (0, r.intToBuffer)(l);
    if (typeof l == 'bigint') {
      if (l < BigInt(0)) throw new Error(`Cannot convert negative bigint to buffer. Given: ${l}`);
      let d = l.toString(16);
      return d.length % 2 && (d = '0' + d), H.from(d, 'hex');
    }
    if (l.toArray) return H.from(l.toArray());
    if (l.toBuffer) return H.from(l.toBuffer());
    throw new Error('invalid type');
  };
  r.toBuffer = N;
  const R = function (l) {
    return (l = (0, r.toBuffer)(l)), '0x' + l.toString('hex');
  };
  r.bufferToHex = R;
  function V(l) {
    const d = (0, r.bufferToHex)(l);
    return BigInt(d === '0x' ? 0 : d);
  }
  r.bufferToBigInt = V;
  function lt(l) {
    return (0, r.toBuffer)('0x' + l.toString(16));
  }
  r.bigIntToBuffer = lt;
  const $ = function (l) {
    const d = Number(V(l));
    if (!Number.isSafeInteger(d)) throw new Error('Number exceeds 53 bits');
    return d;
  };
  r.bufferToInt = $;
  const C = function (l) {
    return BigInt.asIntN(256, V(l));
  };
  r.fromSigned = C;
  const Z = function (l) {
    return lt(BigInt.asUintN(256, l));
  };
  r.toUnsigned = Z;
  const J = function (l) {
    return typeof l != 'string' || (0, e.isHexPrefixed)(l) ? l : '0x' + l;
  };
  r.addHexPrefix = J;
  function tt(l, d = 50) {
    const p = H.isBuffer(l) ? l.toString('hex') : l;
    return p.length <= d ? p : p.slice(0, d) + '…';
  }
  r.short = tt;
  const Mt = function (l) {
    const d = /^(00)+|(00)+$/g;
    if (((l = (0, e.stripHexPrefix)(l)), l.length % 2 !== 0))
      throw new Error('Invalid non-even hex string input for toUtf8() provided');
    return H.from(l.replace(d, ''), 'hex').toString('utf8');
  };
  r.toUtf8 = Mt;
  const se = function (l) {
    if (H.isBuffer(l)) return `0x${l.toString('hex')}`;
    if (l instanceof Array) {
      const d = [];
      for (let p = 0; p < l.length; p++) d.push((0, r.baToJSON)(l[p]));
      return d;
    }
  };
  r.baToJSON = se;
  const de = function (l) {
    for (const [d, p] of Object.entries(l))
      if (p !== void 0 && p.length > 0 && p[0] === 0)
        throw new Error(`${d} cannot have leading zeroes, received: ${p.toString('hex')}`);
  };
  r.validateNoLeadingZeroes = de;
  function ut(l) {
    return Array.isArray(l) ? l.map((d) => ut(d)) : H.from(l);
  }
  r.arrToBufArr = ut;
  function be(l) {
    return Array.isArray(l) ? l.map((d) => be(d)) : Uint8Array.from(l ?? []);
  }
  r.bufArrToArr = be;
  const w = (l) => '0x' + l.toString(16);
  r.bigIntToHex = w;
  function o(l) {
    return (0, r.unpadBuffer)(lt(l));
  }
  r.bigIntToUnpaddedBuffer = o;
  function u(l) {
    return (0, r.unpadBuffer)((0, r.intToBuffer)(l));
  }
  r.intToUnpaddedBuffer = u;
})(Ic);
export {
  st as B,
  s0 as C,
  hn as D,
  li as H,
  Wn as P,
  cn as S,
  mr as T,
  Si as U,
  Ds as V,
  n0 as W,
  e0 as a,
  As as b,
  Pa as c,
  t0 as d,
  pl as e,
  Y as f,
  Je as g,
  Ke as h,
  $c as i,
  Qc as j,
  He as k,
  Oa as l,
  gl as m,
  r0 as n,
  yl as o,
  Df as p,
  Lc as q,
  i0 as r,
  Xc as s,
  sr as t,
  Ic as u,
};
