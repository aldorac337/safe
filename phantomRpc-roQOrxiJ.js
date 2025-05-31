var NS = Object.defineProperty;
var hc = (e) => {
  throw TypeError(e);
};
var MS = (e, t, r) =>
  t in e ? NS(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r);
var M = (e, t, r) => MS(e, typeof t != 'symbol' ? t + '' : t, r),
  ni = (e, t, r) => t.has(e) || hc('Cannot ' + r);
var y = (e, t, r) => (ni(e, t, 'read from private field'), r ? r.call(e) : t.get(e)),
  K = (e, t, r) =>
    t.has(e)
      ? hc('Cannot add the same private member more than once')
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, r),
  j = (e, t, r, n) => (ni(e, t, 'write to private field'), n ? n.call(e, r) : t.set(e, r), r),
  de = (e, t, r) => (ni(e, t, 'access private method'), r);
var Hn = (e, t, r, n) => ({
  set _(s) {
    j(e, t, s, r);
  },
  get _() {
    return y(e, t, n);
  },
});
import { z as i, d as Zr, F as US } from './phantomUiDeps-DRT5vvX7.js';
import { r as le, R as vn } from './react-6iN9_IA6.js';
import { B as it } from './metaplexMplTokenMetadata-B1auuVGR.js';
import {
  h as xt,
  g as cs,
  b as LS,
  t as BS,
  a as jS,
  J as Pn,
  ae as FS,
  e as HS,
  ad as VS,
  B as Ir,
  an as Ae,
  ao as ha,
  ap as fa,
  aq as zS,
  R as Uu,
  ar as GS,
  as as Et,
  O as si,
  at as xr,
  au as qS,
  av as Lu,
  T as WS,
  aw as ws,
  ax as QS,
  af as $e,
} from './metaplex-DKWSQMdM.js';
import { p as Bu, M as YS, q as KS, V as JS, P as qe } from './chainSolana-C0WbUUwF.js';
import { s as fc, e as ZS } from './chainBitcoin-8-XOceRu.js';
import { B as XS, i as ju } from './chainEthereum-DCLFWD03.js';
import {
  _ as e_,
  b as t_,
  c as r_,
  i as n_,
  d as s_,
  k as i_,
  j as $n,
  V as mc,
  e as o_,
  f as Fu,
  g as ii,
  A as a_,
} from './phantomUi-BnOIPQCj.js';
import { c as Xr, g as Lt } from './lodash-aFjP5OGs.js';
import { r as c_ } from './metaplexUmi-B-YFAY88.js';
import {
  d as rs,
  a as Cr,
  i as l_,
  b as u_,
  c as d_,
  e as Hu,
  f as Vu,
  g as zu,
  s as Gu,
  h as qu,
  j as p_,
  k as h_,
  l as f_,
} from './analytics-CTNVS3Vq.js';
function Eo(e) {
  if (!Number.isSafeInteger(e) || e < 0) throw new Error(`Wrong positive integer: ${e}`);
}
function m_(e) {
  if (typeof e != 'boolean') throw new Error(`Expected boolean, not ${e}`);
}
function Wu(e, ...t) {
  if (!(e instanceof Uint8Array)) throw new TypeError('Expected Uint8Array');
  if (t.length > 0 && !t.includes(e.length))
    throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`);
}
function g_(e) {
  if (typeof e != 'function' || typeof e.create != 'function')
    throw new Error('Hash should be wrapped by utils.wrapConstructor');
  Eo(e.outputLen), Eo(e.blockLen);
}
function y_(e, t = !0) {
  if (e.destroyed) throw new Error('Hash instance has been destroyed');
  if (t && e.finished) throw new Error('Hash#digest() has already been called');
}
function b_(e, t) {
  Wu(e);
  const r = t.outputLen;
  if (e.length < r) throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
const oi = { number: Eo, bool: m_, bytes: Wu, hash: g_, exists: y_, output: b_ };
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const ai = (e) =>
    new DataView(e.buffer, e.byteOffset, e.byteLength),
  v_ = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!v_) throw new Error('Non little-endian hardware is not supported');
Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
function S_(e) {
  if (typeof e != 'string') throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);
  return new TextEncoder().encode(e);
}
function Qu(e) {
  if ((typeof e == 'string' && (e = S_(e)), !(e instanceof Uint8Array)))
    throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);
  return e;
}
let __ = class {
  clone() {
    return this._cloneInto();
  }
};
function $s(e) {
  const t = (n) => e().update(Qu(n)).digest(),
    r = e();
  return (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = () => e()), t;
}
function w_(e, t, r, n) {
  if (typeof e.setBigUint64 == 'function') return e.setBigUint64(t, r, n);
  const s = BigInt(32),
    o = BigInt(4294967295),
    a = Number((r >> s) & o),
    c = Number(r & o),
    l = n ? 4 : 0,
    u = n ? 0 : 4;
  e.setUint32(t + l, a, n), e.setUint32(t + u, c, n);
}
let $_ = class extends __ {
  constructor(t, r, n, s) {
    super(),
      (this.blockLen = t),
      (this.outputLen = r),
      (this.padOffset = n),
      (this.isLE = s),
      (this.finished = !1),
      (this.length = 0),
      (this.pos = 0),
      (this.destroyed = !1),
      (this.buffer = new Uint8Array(t)),
      (this.view = ai(this.buffer));
  }
  update(t) {
    oi.exists(this);
    const { view: r, buffer: n, blockLen: s } = this;
    t = Qu(t);
    const o = t.length;
    for (let a = 0; a < o; ) {
      const c = Math.min(s - this.pos, o - a);
      if (c === s) {
        const l = ai(t);
        for (; s <= o - a; a += s) this.process(l, a);
        continue;
      }
      n.set(t.subarray(a, a + c), this.pos),
        (this.pos += c),
        (a += c),
        this.pos === s && (this.process(r, 0), (this.pos = 0));
    }
    return (this.length += t.length), this.roundClean(), this;
  }
  digestInto(t) {
    oi.exists(this), oi.output(t, this), (this.finished = !0);
    const { buffer: r, view: n, blockLen: s, isLE: o } = this;
    let { pos: a } = this;
    (r[a++] = 128),
      this.buffer.subarray(a).fill(0),
      this.padOffset > s - a && (this.process(n, 0), (a = 0));
    for (let d = a; d < s; d++) r[d] = 0;
    w_(n, s - 8, BigInt(this.length * 8), o), this.process(n, 0);
    const c = ai(t),
      l = this.outputLen;
    if (l % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
    const u = l / 4,
      p = this.get();
    if (u > p.length) throw new Error('_sha2: outputLen bigger than state');
    for (let d = 0; d < u; d++) c.setUint32(4 * d, p[d], o);
  }
  digest() {
    const { buffer: t, outputLen: r } = this;
    this.digestInto(t);
    const n = t.slice(0, r);
    return this.destroy(), n;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: r, buffer: n, length: s, finished: o, destroyed: a, pos: c } = this;
    return (
      (t.length = s), (t.pos = c), (t.finished = o), (t.destroyed = a), s % r && t.buffer.set(n), t
    );
  }
};
const Vn = BigInt(2 ** 32 - 1),
  Ao = BigInt(32);
function Yu(e, t = !1) {
  return t
    ? { h: Number(e & Vn), l: Number((e >> Ao) & Vn) }
    : { h: Number((e >> Ao) & Vn) | 0, l: Number(e & Vn) | 0 };
}
function T_(e, t = !1) {
  let r = new Uint32Array(e.length),
    n = new Uint32Array(e.length);
  for (let s = 0; s < e.length; s++) {
    const { h: o, l: a } = Yu(e[s], t);
    [r[s], n[s]] = [o, a];
  }
  return [r, n];
}
const I_ = (e, t) => (BigInt(e >>> 0) << Ao) | BigInt(t >>> 0),
  x_ = (e, t, r) => e >>> r,
  E_ = (e, t, r) => (e << (32 - r)) | (t >>> r),
  A_ = (e, t, r) => (e >>> r) | (t << (32 - r)),
  P_ = (e, t, r) => (e << (32 - r)) | (t >>> r),
  D_ = (e, t, r) => (e << (64 - r)) | (t >>> (r - 32)),
  k_ = (e, t, r) => (e >>> (r - 32)) | (t << (64 - r)),
  C_ = (e, t) => t,
  R_ = (e, t) => e,
  O_ = (e, t, r) => (e << r) | (t >>> (32 - r)),
  N_ = (e, t, r) => (t << r) | (e >>> (32 - r)),
  M_ = (e, t, r) => (t << (r - 32)) | (e >>> (64 - r)),
  U_ = (e, t, r) => (e << (r - 32)) | (t >>> (64 - r));
function L_(e, t, r, n) {
  const s = (t >>> 0) + (n >>> 0);
  return { h: (e + r + ((s / 2 ** 32) | 0)) | 0, l: s | 0 };
}
const B_ = (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0),
  j_ = (e, t, r, n) => (t + r + n + ((e / 2 ** 32) | 0)) | 0,
  F_ = (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0),
  H_ = (e, t, r, n, s) => (t + r + n + s + ((e / 2 ** 32) | 0)) | 0,
  V_ = (e, t, r, n, s) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (s >>> 0),
  z_ = (e, t, r, n, s, o) => (t + r + n + s + o + ((e / 2 ** 32) | 0)) | 0,
  pe = {
    fromBig: Yu,
    split: T_,
    toBig: I_,
    shrSH: x_,
    shrSL: E_,
    rotrSH: A_,
    rotrSL: P_,
    rotrBH: D_,
    rotrBL: k_,
    rotr32H: C_,
    rotr32L: R_,
    rotlSH: O_,
    rotlSL: N_,
    rotlBH: M_,
    rotlBL: U_,
    add: L_,
    add3L: B_,
    add3H: j_,
    add4L: F_,
    add4H: H_,
    add5H: z_,
    add5L: V_,
  },
  [G_, q_] = pe.split(
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
  zt = new Uint32Array(80),
  Gt = new Uint32Array(80);
let Ts = class extends $_ {
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
        Al: r,
        Bh: n,
        Bl: s,
        Ch: o,
        Cl: a,
        Dh: c,
        Dl: l,
        Eh: u,
        El: p,
        Fh: d,
        Fl: h,
        Gh: f,
        Gl: g,
        Hh: m,
        Hl: b,
      } = this;
      return [t, r, n, s, o, a, c, l, u, p, d, h, f, g, m, b];
    }
    set(t, r, n, s, o, a, c, l, u, p, d, h, f, g, m, b) {
      (this.Ah = t | 0),
        (this.Al = r | 0),
        (this.Bh = n | 0),
        (this.Bl = s | 0),
        (this.Ch = o | 0),
        (this.Cl = a | 0),
        (this.Dh = c | 0),
        (this.Dl = l | 0),
        (this.Eh = u | 0),
        (this.El = p | 0),
        (this.Fh = d | 0),
        (this.Fl = h | 0),
        (this.Gh = f | 0),
        (this.Gl = g | 0),
        (this.Hh = m | 0),
        (this.Hl = b | 0);
    }
    process(t, r) {
      for (let v = 0; v < 16; v++, r += 4)
        (zt[v] = t.getUint32(r)), (Gt[v] = t.getUint32((r += 4)));
      for (let v = 16; v < 80; v++) {
        const R = zt[v - 15] | 0,
          O = Gt[v - 15] | 0,
          k = pe.rotrSH(R, O, 1) ^ pe.rotrSH(R, O, 8) ^ pe.shrSH(R, O, 7),
          E = pe.rotrSL(R, O, 1) ^ pe.rotrSL(R, O, 8) ^ pe.shrSL(R, O, 7),
          _ = zt[v - 2] | 0,
          w = Gt[v - 2] | 0,
          V = pe.rotrSH(_, w, 19) ^ pe.rotrBH(_, w, 61) ^ pe.shrSH(_, w, 6),
          W = pe.rotrSL(_, w, 19) ^ pe.rotrBL(_, w, 61) ^ pe.shrSL(_, w, 6),
          Z = pe.add4L(E, W, Gt[v - 7], Gt[v - 16]),
          X = pe.add4H(Z, k, V, zt[v - 7], zt[v - 16]);
        (zt[v] = X | 0), (Gt[v] = Z | 0);
      }
      let {
        Ah: n,
        Al: s,
        Bh: o,
        Bl: a,
        Ch: c,
        Cl: l,
        Dh: u,
        Dl: p,
        Eh: d,
        El: h,
        Fh: f,
        Fl: g,
        Gh: m,
        Gl: b,
        Hh: P,
        Hl: A,
      } = this;
      for (let v = 0; v < 80; v++) {
        const R = pe.rotrSH(d, h, 14) ^ pe.rotrSH(d, h, 18) ^ pe.rotrBH(d, h, 41),
          O = pe.rotrSL(d, h, 14) ^ pe.rotrSL(d, h, 18) ^ pe.rotrBL(d, h, 41),
          k = (d & f) ^ (~d & m),
          E = (h & g) ^ (~h & b),
          _ = pe.add5L(A, O, E, q_[v], Gt[v]),
          w = pe.add5H(_, P, R, k, G_[v], zt[v]),
          V = _ | 0,
          W = pe.rotrSH(n, s, 28) ^ pe.rotrBH(n, s, 34) ^ pe.rotrBH(n, s, 39),
          Z = pe.rotrSL(n, s, 28) ^ pe.rotrBL(n, s, 34) ^ pe.rotrBL(n, s, 39),
          X = (n & o) ^ (n & c) ^ (o & c),
          Te = (s & a) ^ (s & l) ^ (a & l);
        (P = m | 0),
          (A = b | 0),
          (m = f | 0),
          (b = g | 0),
          (f = d | 0),
          (g = h | 0),
          ({ h: d, l: h } = pe.add(u | 0, p | 0, w | 0, V | 0)),
          (u = c | 0),
          (p = l | 0),
          (c = o | 0),
          (l = a | 0),
          (o = n | 0),
          (a = s | 0);
        const Ie = pe.add3L(V, Z, Te);
        (n = pe.add3H(Ie, w, W, X)), (s = Ie | 0);
      }
      ({ h: n, l: s } = pe.add(this.Ah | 0, this.Al | 0, n | 0, s | 0)),
        ({ h: o, l: a } = pe.add(this.Bh | 0, this.Bl | 0, o | 0, a | 0)),
        ({ h: c, l } = pe.add(this.Ch | 0, this.Cl | 0, c | 0, l | 0)),
        ({ h: u, l: p } = pe.add(this.Dh | 0, this.Dl | 0, u | 0, p | 0)),
        ({ h: d, l: h } = pe.add(this.Eh | 0, this.El | 0, d | 0, h | 0)),
        ({ h: f, l: g } = pe.add(this.Fh | 0, this.Fl | 0, f | 0, g | 0)),
        ({ h: m, l: b } = pe.add(this.Gh | 0, this.Gl | 0, m | 0, b | 0)),
        ({ h: P, l: A } = pe.add(this.Hh | 0, this.Hl | 0, P | 0, A | 0)),
        this.set(n, s, o, a, c, l, u, p, d, h, f, g, m, b, P, A);
    }
    roundClean() {
      zt.fill(0), Gt.fill(0);
    }
    destroy() {
      this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  },
  W_ = class extends Ts {
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
  },
  Q_ = class extends Ts {
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
  },
  Y_ = class extends Ts {
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
  };
const K_ = $s(() => new Ts());
$s(() => new W_());
$s(() => new Q_());
$s(() => new Y_());
const wB = (e, t) =>
  Array.apply(0, new Array(Math.ceil(e.length / t))).map((r, n) => e.slice(n * t, (n + 1) * t));
function $B(e) {
  return e != null;
}
const J_ = (e, t) => e + t,
  TB = (e) => e.reduce(J_, 0),
  Z_ = (e) => !!e;
function IB(e) {
  return i
    .any()
    .array()
    .transform((t) =>
      t
        .map((r) => {
          const n = e.safeParse(r);
          return n.success ? n.data : void 0;
        })
        .filter(Z_)
    )
    .catch([]);
}
const X_ = new Error('Unsupported path.'),
  Is = (e, t = X_) => {
    throw t;
  };
function Po(e) {
  return new Promise((t) => setTimeout(t, e));
}
function e1(e, t) {
  const r = typeof t.interval == 'function' ? t.interval : () => t.interval;
  if (typeof e != 'function') throw new Error('Invalid arguments for retryInternal');
  let n = 1;
  async function s() {
    try {
      return await e();
    } catch (o) {
      if (n++ < t.times && t.errorFilter(o)) return await Po(r(n - 1)), s();
      throw o;
    }
  }
  return s();
}
async function xB(e, t, r = 3, n = 2e3, s) {
  return e1(e, { times: r, interval: s ? () => n : (o) => n * Math.pow(2, o - 1), errorFilter: t });
}
const EB = (e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase(),
  AB = (e) => e.replace(/^(^[\w-_]*:\/\/)?(?:www\.)?/i, '').split('/')[0],
  t1 = {
    days: (e) => e * 864e5,
    hours: (e) => e * 36e5,
    minutes: (e) => e * 6e4,
    seconds: (e) => e * 1e3,
    milliseconds: (e) => e,
    microseconds: (e) => e / 1e3,
    nanoseconds: (e) => e / 1e6,
  };
function Ku(e) {
  let t = 0;
  for (const [r, n] of Object.entries(e)) {
    const s = t1[r];
    t += s(n);
  }
  return t;
}
var Ju = { exports: {} };
(function (e, t) {
  (function (r, n) {
    e.exports = n();
  })(Xr, function () {
    var r,
      n,
      s = 1e3,
      o = 6e4,
      a = 36e5,
      c = 864e5,
      l = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      u = 31536e6,
      p = 2628e6,
      d =
        /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,
      h = {
        years: u,
        months: p,
        days: c,
        hours: a,
        minutes: o,
        seconds: s,
        milliseconds: 1,
        weeks: 6048e5,
      },
      f = function (k) {
        return k instanceof R;
      },
      g = function (k, E, _) {
        return new R(k, _, E.$l);
      },
      m = function (k) {
        return n.p(k) + 's';
      },
      b = function (k) {
        return k < 0;
      },
      P = function (k) {
        return b(k) ? Math.ceil(k) : Math.floor(k);
      },
      A = function (k) {
        return Math.abs(k);
      },
      v = function (k, E) {
        return k
          ? b(k)
            ? { negative: !0, format: '' + A(k) + E }
            : { negative: !1, format: '' + k + E }
          : { negative: !1, format: '' };
      },
      R = (function () {
        function k(_, w, V) {
          var W = this;
          if (
            ((this.$d = {}),
            (this.$l = V),
            _ === void 0 && ((this.$ms = 0), this.parseFromMilliseconds()),
            w)
          )
            return g(_ * h[m(w)], this);
          if (typeof _ == 'number') return (this.$ms = _), this.parseFromMilliseconds(), this;
          if (typeof _ == 'object')
            return (
              Object.keys(_).forEach(function (Te) {
                W.$d[m(Te)] = _[Te];
              }),
              this.calMilliseconds(),
              this
            );
          if (typeof _ == 'string') {
            var Z = _.match(d);
            if (Z) {
              var X = Z.slice(2).map(function (Te) {
                return Te != null ? Number(Te) : 0;
              });
              return (
                (this.$d.years = X[0]),
                (this.$d.months = X[1]),
                (this.$d.weeks = X[2]),
                (this.$d.days = X[3]),
                (this.$d.hours = X[4]),
                (this.$d.minutes = X[5]),
                (this.$d.seconds = X[6]),
                this.calMilliseconds(),
                this
              );
            }
          }
          return this;
        }
        var E = k.prototype;
        return (
          (E.calMilliseconds = function () {
            var _ = this;
            this.$ms = Object.keys(this.$d).reduce(function (w, V) {
              return w + (_.$d[V] || 0) * h[V];
            }, 0);
          }),
          (E.parseFromMilliseconds = function () {
            var _ = this.$ms;
            (this.$d.years = P(_ / u)),
              (_ %= u),
              (this.$d.months = P(_ / p)),
              (_ %= p),
              (this.$d.days = P(_ / c)),
              (_ %= c),
              (this.$d.hours = P(_ / a)),
              (_ %= a),
              (this.$d.minutes = P(_ / o)),
              (_ %= o),
              (this.$d.seconds = P(_ / s)),
              (_ %= s),
              (this.$d.milliseconds = _);
          }),
          (E.toISOString = function () {
            var _ = v(this.$d.years, 'Y'),
              w = v(this.$d.months, 'M'),
              V = +this.$d.days || 0;
            this.$d.weeks && (V += 7 * this.$d.weeks);
            var W = v(V, 'D'),
              Z = v(this.$d.hours, 'H'),
              X = v(this.$d.minutes, 'M'),
              Te = this.$d.seconds || 0;
            this.$d.milliseconds &&
              ((Te += this.$d.milliseconds / 1e3), (Te = Math.round(1e3 * Te) / 1e3));
            var Ie = v(Te, 'S'),
              fr =
                _.negative || w.negative || W.negative || Z.negative || X.negative || Ie.negative,
              jt = Z.format || X.format || Ie.format ? 'T' : '',
              At =
                (fr ? '-' : '') +
                'P' +
                _.format +
                w.format +
                W.format +
                jt +
                Z.format +
                X.format +
                Ie.format;
            return At === 'P' || At === '-P' ? 'P0D' : At;
          }),
          (E.toJSON = function () {
            return this.toISOString();
          }),
          (E.format = function (_) {
            var w = _ || 'YYYY-MM-DDTHH:mm:ss',
              V = {
                Y: this.$d.years,
                YY: n.s(this.$d.years, 2, '0'),
                YYYY: n.s(this.$d.years, 4, '0'),
                M: this.$d.months,
                MM: n.s(this.$d.months, 2, '0'),
                D: this.$d.days,
                DD: n.s(this.$d.days, 2, '0'),
                H: this.$d.hours,
                HH: n.s(this.$d.hours, 2, '0'),
                m: this.$d.minutes,
                mm: n.s(this.$d.minutes, 2, '0'),
                s: this.$d.seconds,
                ss: n.s(this.$d.seconds, 2, '0'),
                SSS: n.s(this.$d.milliseconds, 3, '0'),
              };
            return w.replace(l, function (W, Z) {
              return Z || String(V[W]);
            });
          }),
          (E.as = function (_) {
            return this.$ms / h[m(_)];
          }),
          (E.get = function (_) {
            var w = this.$ms,
              V = m(_);
            return (
              V === 'milliseconds' ? (w %= 1e3) : (w = V === 'weeks' ? P(w / h[V]) : this.$d[V]),
              w || 0
            );
          }),
          (E.add = function (_, w, V) {
            var W;
            return (
              (W = w ? _ * h[m(w)] : f(_) ? _.$ms : g(_, this).$ms),
              g(this.$ms + W * (V ? -1 : 1), this)
            );
          }),
          (E.subtract = function (_, w) {
            return this.add(_, w, !0);
          }),
          (E.locale = function (_) {
            var w = this.clone();
            return (w.$l = _), w;
          }),
          (E.clone = function () {
            return g(this.$ms, this);
          }),
          (E.humanize = function (_) {
            return r().add(this.$ms, 'ms').locale(this.$l).fromNow(!_);
          }),
          (E.valueOf = function () {
            return this.asMilliseconds();
          }),
          (E.milliseconds = function () {
            return this.get('milliseconds');
          }),
          (E.asMilliseconds = function () {
            return this.as('milliseconds');
          }),
          (E.seconds = function () {
            return this.get('seconds');
          }),
          (E.asSeconds = function () {
            return this.as('seconds');
          }),
          (E.minutes = function () {
            return this.get('minutes');
          }),
          (E.asMinutes = function () {
            return this.as('minutes');
          }),
          (E.hours = function () {
            return this.get('hours');
          }),
          (E.asHours = function () {
            return this.as('hours');
          }),
          (E.days = function () {
            return this.get('days');
          }),
          (E.asDays = function () {
            return this.as('days');
          }),
          (E.weeks = function () {
            return this.get('weeks');
          }),
          (E.asWeeks = function () {
            return this.as('weeks');
          }),
          (E.months = function () {
            return this.get('months');
          }),
          (E.asMonths = function () {
            return this.as('months');
          }),
          (E.years = function () {
            return this.get('years');
          }),
          (E.asYears = function () {
            return this.as('years');
          }),
          k
        );
      })(),
      O = function (k, E, _) {
        return k
          .add(E.years() * _, 'y')
          .add(E.months() * _, 'M')
          .add(E.days() * _, 'd')
          .add(E.hours() * _, 'h')
          .add(E.minutes() * _, 'm')
          .add(E.seconds() * _, 's')
          .add(E.milliseconds() * _, 'ms');
      };
    return function (k, E, _) {
      (r = _),
        (n = _().$utils()),
        (_.duration = function (W, Z) {
          var X = _.locale();
          return g(W, { $l: X }, Z);
        }),
        (_.isDuration = f);
      var w = E.prototype.add,
        V = E.prototype.subtract;
      (E.prototype.add = function (W, Z) {
        return f(W) ? O(this, W, 1) : w.bind(this)(W, Z);
      }),
        (E.prototype.subtract = function (W, Z) {
          return f(W) ? O(this, W, -1) : V.bind(this)(W, Z);
        });
    };
  });
})(Ju);
var r1 = Ju.exports;
const Zu = Lt(r1);
Zr.extend(Zu);
var Xu = { exports: {} };
(function (e, t) {
  (function (r, n) {
    e.exports = n();
  })(Xr, function () {
    return function (r, n, s) {
      n.prototype.isToday = function () {
        var o = 'YYYY-MM-DD',
          a = s();
        return this.format(o) === a.format(o);
      };
    };
  });
})(Xu);
var n1 = Xu.exports;
const s1 = Lt(n1);
var ed = { exports: {} };
(function (e, t) {
  (function (r, n) {
    e.exports = n();
  })(Xr, function () {
    return function (r, n, s) {
      n.prototype.isYesterday = function () {
        var o = 'YYYY-MM-DD',
          a = s().subtract(1, 'day');
        return this.format(o) === a.format(o);
      };
    };
  });
})(ed);
var i1 = ed.exports;
const o1 = Lt(i1);
Zr.extend(s1);
Zr.extend(o1);
var td = { exports: {} };
(function (e, t) {
  (function (r, n) {
    e.exports = n();
  })(Xr, function () {
    return function (r, n, s) {
      r = r || {};
      var o = n.prototype,
        a = {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years',
        };
      function c(u, p, d, h) {
        return o.fromToBase(u, p, d, h);
      }
      (s.en.relativeTime = a),
        (o.fromToBase = function (u, p, d, h, f) {
          for (
            var g,
              m,
              b,
              P = d.$locale().relativeTime || a,
              A = r.thresholds || [
                { l: 's', r: 44, d: 'second' },
                { l: 'm', r: 89 },
                { l: 'mm', r: 44, d: 'minute' },
                { l: 'h', r: 89 },
                { l: 'hh', r: 21, d: 'hour' },
                { l: 'd', r: 35 },
                { l: 'dd', r: 25, d: 'day' },
                { l: 'M', r: 45 },
                { l: 'MM', r: 10, d: 'month' },
                { l: 'y', r: 17 },
                { l: 'yy', d: 'year' },
              ],
              v = A.length,
              R = 0;
            R < v;
            R += 1
          ) {
            var O = A[R];
            O.d && (g = h ? s(u).diff(d, O.d, !0) : d.diff(u, O.d, !0));
            var k = (r.rounding || Math.round)(Math.abs(g));
            if (((b = g > 0), k <= O.r || !O.r)) {
              k <= 1 && R > 0 && (O = A[R - 1]);
              var E = P[O.l];
              f && (k = f('' + k)),
                (m = typeof E == 'string' ? E.replace('%d', k) : E(k, p, O.l, b));
              break;
            }
          }
          if (p) return m;
          var _ = b ? P.future : P.past;
          return typeof _ == 'function' ? _(m) : _.replace('%s', m);
        }),
        (o.to = function (u, p) {
          return c(u, p, this, !0);
        }),
        (o.from = function (u, p) {
          return c(u, p, this);
        });
      var l = function (u) {
        return u.$u ? s.utc() : s();
      };
      (o.toNow = function (u) {
        return this.to(l(this), u);
      }),
        (o.fromNow = function (u) {
          return this.from(l(this), u);
        });
    };
  });
})(td);
var a1 = td.exports;
const c1 = Lt(a1);
var rd = { exports: {} };
(function (e, t) {
  (function (r, n) {
    e.exports = n();
  })(Xr, function () {
    var r = 'minute',
      n = /[+-]\d\d(?::?\d\d)?/g,
      s = /([+-]|\d\d)/g;
    return function (o, a, c) {
      var l = a.prototype;
      (c.utc = function (m) {
        var b = { date: m, utc: !0, args: arguments };
        return new a(b);
      }),
        (l.utc = function (m) {
          var b = c(this.toDate(), { locale: this.$L, utc: !0 });
          return m ? b.add(this.utcOffset(), r) : b;
        }),
        (l.local = function () {
          return c(this.toDate(), { locale: this.$L, utc: !1 });
        });
      var u = l.parse;
      l.parse = function (m) {
        m.utc && (this.$u = !0),
          this.$utils().u(m.$offset) || (this.$offset = m.$offset),
          u.call(this, m);
      };
      var p = l.init;
      l.init = function () {
        if (this.$u) {
          var m = this.$d;
          (this.$y = m.getUTCFullYear()),
            (this.$M = m.getUTCMonth()),
            (this.$D = m.getUTCDate()),
            (this.$W = m.getUTCDay()),
            (this.$H = m.getUTCHours()),
            (this.$m = m.getUTCMinutes()),
            (this.$s = m.getUTCSeconds()),
            (this.$ms = m.getUTCMilliseconds());
        } else p.call(this);
      };
      var d = l.utcOffset;
      l.utcOffset = function (m, b) {
        var P = this.$utils().u;
        if (P(m)) return this.$u ? 0 : P(this.$offset) ? d.call(this) : this.$offset;
        if (
          typeof m == 'string' &&
          ((m = (function (O) {
            O === void 0 && (O = '');
            var k = O.match(n);
            if (!k) return null;
            var E = ('' + k[0]).match(s) || ['-', 0, 0],
              _ = E[0],
              w = 60 * +E[1] + +E[2];
            return w === 0 ? 0 : _ === '+' ? w : -w;
          })(m)),
          m === null)
        )
          return this;
        var A = Math.abs(m) <= 16 ? 60 * m : m,
          v = this;
        if (b) return (v.$offset = A), (v.$u = m === 0), v;
        if (m !== 0) {
          var R = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          ((v = this.local().add(A + R, r)).$offset = A), (v.$x.$localOffset = R);
        } else v = this.utc();
        return v;
      };
      var h = l.format;
      (l.format = function (m) {
        var b = m || (this.$u ? 'YYYY-MM-DDTHH:mm:ss[Z]' : '');
        return h.call(this, b);
      }),
        (l.valueOf = function () {
          var m = this.$utils().u(this.$offset)
            ? 0
            : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
          return this.$d.valueOf() - 6e4 * m;
        }),
        (l.isUTC = function () {
          return !!this.$u;
        }),
        (l.toISOString = function () {
          return this.toDate().toISOString();
        }),
        (l.toString = function () {
          return this.toDate().toUTCString();
        });
      var f = l.toDate;
      l.toDate = function (m) {
        return m === 's' && this.$offset
          ? c(this.format('YYYY-MM-DD HH:mm:ss:SSS')).toDate()
          : f.call(this);
      };
      var g = l.diff;
      l.diff = function (m, b, P) {
        if (m && this.$u === m.$u) return g.call(this, m, b, P);
        var A = this.local(),
          v = c(m).local();
        return g.call(A, v, b, P);
      };
    };
  });
})(rd);
var l1 = rd.exports;
const u1 = Lt(l1);
Zr.extend(c1);
Zr.extend(Zu);
Zr.extend(u1);
new Date().getTimezoneOffset() * 6e4;
Ku({ seconds: 10 });
Ku({ seconds: 5 });
const PB = (e) => {
    if (e)
      try {
        return new URL(e).hostname;
      } catch {
        return;
      }
  },
  DB = (e) => {
    if (e)
      try {
        return new URL(e).origin;
      } catch {
        return;
      }
  },
  gc = { origin: void 0, hostname: void 0 },
  nd = (e) => {
    if (!e) return gc;
    /^[\w-_]*:\/\//s.test(e) || (e = `https://${e}`);
    try {
      const t = new URL(e);
      return { origin: `${t.protocol}//${t.host}`, hostname: t.hostname };
    } catch {
      return gc;
    }
  },
  yc = ['http:', 'https:', 'phantom:', 'solana:'],
  kB = (e) => {
    var s;
    if (!e) return null;
    let t = null;
    if (/^https?:/i.test(e) && !e.includes('://')) return null;
    const r = /^(?<specifiedProtocol>\w+:)/.exec(e),
      n = (s = r == null ? void 0 : r.groups) == null ? void 0 : s.specifiedProtocol.toLowerCase();
    if (n && !yc.includes(n)) return null;
    try {
      if (
        ((t = new URL(r ? e : `https://${e}`)),
        t && t.protocol === 'http:' && (t.protocol = 'https:'),
        t && !yc.some((o) => o === (t == null ? void 0 : t.protocol)))
      )
        return null;
    } catch {}
    return t;
  },
  CB = (e, t) => {
    const r = parseInt(e.slice(1, 3), 16),
      n = parseInt(e.slice(3, 5), 16),
      s = parseInt(e.slice(5, 7), 16);
    return typeof t == 'number'
      ? 'rgba(' + r + ', ' + n + ', ' + s + ', ' + t + ')'
      : 'rgb(' + r + ', ' + n + ', ' + s + ')';
  },
  RB = (e, t = 1e3) => {
    const r = le.useRef(!1),
      n = le.useRef();
    return (
      le.useEffect(
        () => () => {
          n.current && clearTimeout(n.current);
        },
        []
      ),
      le.useCallback(() => {
        r.current ||
          ((r.current = !0),
          e(),
          n.current && clearTimeout(n.current),
          (n.current = setTimeout(() => {
            r.current = !1;
          }, t)));
      }, [e, t])
    );
  };
function OB(e, t = 100) {
  const [r, n] = le.useState(e),
    s = le.useRef();
  return (
    le.useEffect(
      () => (
        s.current && clearTimeout(s.current),
        (s.current = setTimeout(() => {
          n(e);
        }, t)),
        () => {
          s.current && clearTimeout(s.current);
        }
      ),
      [n, e, t]
    ),
    r
  );
}
const NB = (e, t, r, n = !1) => {
  const s = le.useMemo(() => (n ? null : new US(e, r)), [e, r, n]);
  return le.useMemo(() => (n || !s ? e : t ? s.search(t).map((a) => a.item) : e), [s, e, t, n]);
};
function MB(e, t) {
  const r = new WeakMap();
  return () => {
    const n = e();
    if (n === void 0) return;
    let s = r.get(n);
    return s === void 0 && ((s = t(n)), r.set(n, s)), s;
  };
}
it.config({ EXPONENTIAL_AT: 1e3, DECIMAL_PLACES: 78 });
var d1 = t_,
  p1 = r_,
  h1 = e_,
  f1 = n_,
  m1 = s_,
  g1 = i_,
  y1 = Object.prototype,
  b1 = y1.hasOwnProperty,
  v1 = h1(function (e, t) {
    if (m1(t) || f1(t)) {
      p1(t, g1(t), e);
      return;
    }
    for (var r in t) b1.call(t, r) && d1(e, r, t[r]);
  }),
  S1 = v1;
const _1 = Lt(S1);
var sd = { exports: {} };
/*! @preserve
 * numeral.js
 * version : 2.0.6
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */ (function (e) {
  (function (t, r) {
    e.exports ? (e.exports = r()) : (t.numeral = r());
  })(Xr, function () {
    var t,
      r,
      n = '2.0.6',
      s = {},
      o = {},
      a = {
        currentLocale: 'en',
        zeroFormat: null,
        nullFormat: null,
        defaultFormat: '0,0',
        scalePercentBy100: !0,
      },
      c = {
        currentLocale: a.currentLocale,
        zeroFormat: a.zeroFormat,
        nullFormat: a.nullFormat,
        defaultFormat: a.defaultFormat,
        scalePercentBy100: a.scalePercentBy100,
      };
    function l(u, p) {
      (this._input = u), (this._value = p);
    }
    return (
      (t = function (u) {
        var p, d, h, f;
        if (t.isNumeral(u)) p = u.value();
        else if (u === 0 || typeof u > 'u') p = 0;
        else if (u === null || r.isNaN(u)) p = null;
        else if (typeof u == 'string')
          if (c.zeroFormat && u === c.zeroFormat) p = 0;
          else if ((c.nullFormat && u === c.nullFormat) || !u.replace(/[^0-9]+/g, '').length)
            p = null;
          else {
            for (d in s)
              if (
                ((f =
                  typeof s[d].regexps.unformat == 'function'
                    ? s[d].regexps.unformat()
                    : s[d].regexps.unformat),
                f && u.match(f))
              ) {
                h = s[d].unformat;
                break;
              }
            (h = h || t._.stringToNumber), (p = h(u));
          }
        else p = Number(u) || null;
        return new l(u, p);
      }),
      (t.version = n),
      (t.isNumeral = function (u) {
        return u instanceof l;
      }),
      (t._ = r =
        {
          numberToFormat: function (u, p, d) {
            var h = o[t.options.currentLocale],
              f = !1,
              g = !1,
              m = 0,
              b = '',
              P = 1e12,
              A = 1e9,
              v = 1e6,
              R = 1e3,
              O = '',
              k = !1,
              E,
              _,
              w,
              V,
              W,
              Z,
              X;
            if (
              ((u = u || 0),
              (_ = Math.abs(u)),
              t._.includes(p, '(')
                ? ((f = !0), (p = p.replace(/[\(|\)]/g, '')))
                : (t._.includes(p, '+') || t._.includes(p, '-')) &&
                  ((W = t._.includes(p, '+') ? p.indexOf('+') : u < 0 ? p.indexOf('-') : -1),
                  (p = p.replace(/[\+|\-]/g, ''))),
              t._.includes(p, 'a') &&
                ((E = p.match(/a(k|m|b|t)?/)),
                (E = E ? E[1] : !1),
                t._.includes(p, ' a') && (b = ' '),
                (p = p.replace(new RegExp(b + 'a[kmbt]?'), '')),
                (_ >= P && !E) || E === 't'
                  ? ((b += h.abbreviations.trillion), (u = u / P))
                  : (_ < P && _ >= A && !E) || E === 'b'
                    ? ((b += h.abbreviations.billion), (u = u / A))
                    : (_ < A && _ >= v && !E) || E === 'm'
                      ? ((b += h.abbreviations.million), (u = u / v))
                      : ((_ < v && _ >= R && !E) || E === 'k') &&
                        ((b += h.abbreviations.thousand), (u = u / R))),
              t._.includes(p, '[.]') && ((g = !0), (p = p.replace('[.]', '.'))),
              (w = u.toString().split('.')[0]),
              (V = p.split('.')[1]),
              (Z = p.indexOf(',')),
              (m = (p.split('.')[0].split(',')[0].match(/0/g) || []).length),
              V
                ? (t._.includes(V, '[')
                    ? ((V = V.replace(']', '')),
                      (V = V.split('[')),
                      (O = t._.toFixed(u, V[0].length + V[1].length, d, V[1].length)))
                    : (O = t._.toFixed(u, V.length, d)),
                  (w = O.split('.')[0]),
                  t._.includes(O, '.') ? (O = h.delimiters.decimal + O.split('.')[1]) : (O = ''),
                  g && Number(O.slice(1)) === 0 && (O = ''))
                : (w = t._.toFixed(u, 0, d)),
              b && !E && Number(w) >= 1e3 && b !== h.abbreviations.trillion)
            )
              switch (((w = String(Number(w) / 1e3)), b)) {
                case h.abbreviations.thousand:
                  b = h.abbreviations.million;
                  break;
                case h.abbreviations.million:
                  b = h.abbreviations.billion;
                  break;
                case h.abbreviations.billion:
                  b = h.abbreviations.trillion;
                  break;
              }
            if ((t._.includes(w, '-') && ((w = w.slice(1)), (k = !0)), w.length < m))
              for (var Te = m - w.length; Te > 0; Te--) w = '0' + w;
            return (
              Z > -1 &&
                (w = w
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + h.delimiters.thousands)),
              p.indexOf('.') === 0 && (w = ''),
              (X = w + O + (b || '')),
              f
                ? (X = (f && k ? '(' : '') + X + (f && k ? ')' : ''))
                : W >= 0
                  ? (X = W === 0 ? (k ? '-' : '+') + X : X + (k ? '-' : '+'))
                  : k && (X = '-' + X),
              X
            );
          },
          stringToNumber: function (u) {
            var p = o[c.currentLocale],
              d = u,
              h = { thousand: 3, million: 6, billion: 9, trillion: 12 },
              f,
              g,
              m;
            if (c.zeroFormat && u === c.zeroFormat) g = 0;
            else if ((c.nullFormat && u === c.nullFormat) || !u.replace(/[^0-9]+/g, '').length)
              g = null;
            else {
              (g = 1),
                p.delimiters.decimal !== '.' &&
                  (u = u.replace(/\./g, '').replace(p.delimiters.decimal, '.'));
              for (f in h)
                if (
                  ((m = new RegExp(
                    '[^a-zA-Z]' +
                      p.abbreviations[f] +
                      '(?:\\)|(\\' +
                      p.currency.symbol +
                      ')?(?:\\))?)?$'
                  )),
                  d.match(m))
                ) {
                  g *= Math.pow(10, h[f]);
                  break;
                }
              (g *=
                (u.split('-').length + Math.min(u.split('(').length - 1, u.split(')').length - 1)) %
                2
                  ? 1
                  : -1),
                (u = u.replace(/[^0-9\.]+/g, '')),
                (g *= Number(u));
            }
            return g;
          },
          isNaN: function (u) {
            return typeof u == 'number' && isNaN(u);
          },
          includes: function (u, p) {
            return u.indexOf(p) !== -1;
          },
          insert: function (u, p, d) {
            return u.slice(0, d) + p + u.slice(d);
          },
          reduce: function (u, p) {
            if (this === null)
              throw new TypeError('Array.prototype.reduce called on null or undefined');
            if (typeof p != 'function') throw new TypeError(p + ' is not a function');
            var d = Object(u),
              h = d.length >>> 0,
              f = 0,
              g;
            if (arguments.length === 3) g = arguments[2];
            else {
              for (; f < h && !(f in d); ) f++;
              if (f >= h) throw new TypeError('Reduce of empty array with no initial value');
              g = d[f++];
            }
            for (; f < h; f++) f in d && (g = p(g, d[f], f, d));
            return g;
          },
          multiplier: function (u) {
            var p = u.toString().split('.');
            return p.length < 2 ? 1 : Math.pow(10, p[1].length);
          },
          correctionFactor: function () {
            var u = Array.prototype.slice.call(arguments);
            return u.reduce(function (p, d) {
              var h = r.multiplier(d);
              return p > h ? p : h;
            }, 1);
          },
          toFixed: function (u, p, d, h) {
            var f = u.toString().split('.'),
              g = p - (h || 0),
              m,
              b,
              P,
              A;
            return (
              f.length === 2 ? (m = Math.min(Math.max(f[1].length, g), p)) : (m = g),
              (P = Math.pow(10, m)),
              (A = (d(u + 'e+' + m) / P).toFixed(m)),
              h > p - m &&
                ((b = new RegExp('\\.?0{1,' + (h - (p - m)) + '}$')), (A = A.replace(b, ''))),
              A
            );
          },
        }),
      (t.options = c),
      (t.formats = s),
      (t.locales = o),
      (t.locale = function (u) {
        return u && (c.currentLocale = u.toLowerCase()), c.currentLocale;
      }),
      (t.localeData = function (u) {
        if (!u) return o[c.currentLocale];
        if (((u = u.toLowerCase()), !o[u])) throw new Error('Unknown locale : ' + u);
        return o[u];
      }),
      (t.reset = function () {
        for (var u in a) c[u] = a[u];
      }),
      (t.zeroFormat = function (u) {
        c.zeroFormat = typeof u == 'string' ? u : null;
      }),
      (t.nullFormat = function (u) {
        c.nullFormat = typeof u == 'string' ? u : null;
      }),
      (t.defaultFormat = function (u) {
        c.defaultFormat = typeof u == 'string' ? u : '0.0';
      }),
      (t.register = function (u, p, d) {
        if (((p = p.toLowerCase()), this[u + 's'][p]))
          throw new TypeError(p + ' ' + u + ' already registered.');
        return (this[u + 's'][p] = d), d;
      }),
      (t.validate = function (u, p) {
        var d, h, f, g, m, b, P, A;
        if (
          (typeof u != 'string' &&
            ((u += ''),
            console.warn &&
              console.warn('Numeral.js: Value is not string. It has been co-erced to: ', u)),
          (u = u.trim()),
          u.match(/^\d+$/))
        )
          return !0;
        if (u === '') return !1;
        try {
          P = t.localeData(p);
        } catch {
          P = t.localeData(t.locale());
        }
        return (
          (f = P.currency.symbol),
          (m = P.abbreviations),
          (d = P.delimiters.decimal),
          P.delimiters.thousands === '.' ? (h = '\\.') : (h = P.delimiters.thousands),
          (A = u.match(/^[^\d]+/)),
          (A !== null && ((u = u.substr(1)), A[0] !== f)) ||
          ((A = u.match(/[^\d]+$/)),
          A !== null &&
            ((u = u.slice(0, -1)),
            A[0] !== m.thousand && A[0] !== m.million && A[0] !== m.billion && A[0] !== m.trillion))
            ? !1
            : ((b = new RegExp(h + '{2}')),
              u.match(/[^\d.,]/g)
                ? !1
                : ((g = u.split(d)),
                  g.length > 2
                    ? !1
                    : g.length < 2
                      ? !!g[0].match(/^\d+.*\d$/) && !g[0].match(b)
                      : g[0].length === 1
                        ? !!g[0].match(/^\d+$/) && !g[0].match(b) && !!g[1].match(/^\d+$/)
                        : !!g[0].match(/^\d+.*\d$/) && !g[0].match(b) && !!g[1].match(/^\d+$/)))
        );
      }),
      (t.fn = l.prototype =
        {
          clone: function () {
            return t(this);
          },
          format: function (u, p) {
            var d = this._value,
              h = u || c.defaultFormat,
              f,
              g,
              m;
            if (((p = p || Math.round), d === 0 && c.zeroFormat !== null)) g = c.zeroFormat;
            else if (d === null && c.nullFormat !== null) g = c.nullFormat;
            else {
              for (f in s)
                if (h.match(s[f].regexps.format)) {
                  m = s[f].format;
                  break;
                }
              (m = m || t._.numberToFormat), (g = m(d, h, p));
            }
            return g;
          },
          value: function () {
            return this._value;
          },
          input: function () {
            return this._input;
          },
          set: function (u) {
            return (this._value = Number(u)), this;
          },
          add: function (u) {
            var p = r.correctionFactor.call(null, this._value, u);
            function d(h, f, g, m) {
              return h + Math.round(p * f);
            }
            return (this._value = r.reduce([this._value, u], d, 0) / p), this;
          },
          subtract: function (u) {
            var p = r.correctionFactor.call(null, this._value, u);
            function d(h, f, g, m) {
              return h - Math.round(p * f);
            }
            return (this._value = r.reduce([u], d, Math.round(this._value * p)) / p), this;
          },
          multiply: function (u) {
            function p(d, h, f, g) {
              var m = r.correctionFactor(d, h);
              return (Math.round(d * m) * Math.round(h * m)) / Math.round(m * m);
            }
            return (this._value = r.reduce([this._value, u], p, 1)), this;
          },
          divide: function (u) {
            function p(d, h, f, g) {
              var m = r.correctionFactor(d, h);
              return Math.round(d * m) / Math.round(h * m);
            }
            return (this._value = r.reduce([this._value, u], p)), this;
          },
          difference: function (u) {
            return Math.abs(t(this._value).subtract(u).value());
          },
        }),
      t.register('locale', 'en', {
        delimiters: { thousands: ',', decimal: '.' },
        abbreviations: { thousand: 'k', million: 'm', billion: 'b', trillion: 't' },
        ordinal: function (u) {
          var p = u % 10;
          return ~~((u % 100) / 10) === 1
            ? 'th'
            : p === 1
              ? 'st'
              : p === 2
                ? 'nd'
                : p === 3
                  ? 'rd'
                  : 'th';
        },
        currency: { symbol: '$' },
      }),
      (function () {
        t.register('format', 'bps', {
          regexps: { format: /(BPS)/, unformat: /(BPS)/ },
          format: function (u, p, d) {
            var h = t._.includes(p, ' BPS') ? ' ' : '',
              f;
            return (
              (u = u * 1e4),
              (p = p.replace(/\s?BPS/, '')),
              (f = t._.numberToFormat(u, p, d)),
              t._.includes(f, ')')
                ? ((f = f.split('')), f.splice(-1, 0, h + 'BPS'), (f = f.join('')))
                : (f = f + h + 'BPS'),
              f
            );
          },
          unformat: function (u) {
            return +(t._.stringToNumber(u) * 1e-4).toFixed(15);
          },
        });
      })(),
      (function () {
        var u = { base: 1e3, suffixes: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] },
          p = {
            base: 1024,
            suffixes: ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'],
          },
          d = u.suffixes.concat(
            p.suffixes.filter(function (f) {
              return u.suffixes.indexOf(f) < 0;
            })
          ),
          h = d.join('|');
        (h = '(' + h.replace('B', 'B(?!PS)') + ')'),
          t.register('format', 'bytes', {
            regexps: { format: /([0\s]i?b)/, unformat: new RegExp(h) },
            format: function (f, g, m) {
              var b,
                P = t._.includes(g, 'ib') ? p : u,
                A = t._.includes(g, ' b') || t._.includes(g, ' ib') ? ' ' : '',
                v,
                R,
                O;
              for (g = g.replace(/\s?i?b/, ''), v = 0; v <= P.suffixes.length; v++)
                if (
                  ((R = Math.pow(P.base, v)),
                  (O = Math.pow(P.base, v + 1)),
                  f === null || f === 0 || (f >= R && f < O))
                ) {
                  (A += P.suffixes[v]), R > 0 && (f = f / R);
                  break;
                }
              return (b = t._.numberToFormat(f, g, m)), b + A;
            },
            unformat: function (f) {
              var g = t._.stringToNumber(f),
                m,
                b;
              if (g) {
                for (m = u.suffixes.length - 1; m >= 0; m--) {
                  if (t._.includes(f, u.suffixes[m])) {
                    b = Math.pow(u.base, m);
                    break;
                  }
                  if (t._.includes(f, p.suffixes[m])) {
                    b = Math.pow(p.base, m);
                    break;
                  }
                }
                g *= b || 1;
              }
              return g;
            },
          });
      })(),
      (function () {
        t.register('format', 'currency', {
          regexps: { format: /(\$)/ },
          format: function (u, p, d) {
            var h = t.locales[t.options.currentLocale],
              f = {
                before: p.match(/^([\+|\-|\(|\s|\$]*)/)[0],
                after: p.match(/([\+|\-|\)|\s|\$]*)$/)[0],
              },
              g,
              m,
              b;
            for (
              p = p.replace(/\s?\$\s?/, ''),
                g = t._.numberToFormat(u, p, d),
                u >= 0
                  ? ((f.before = f.before.replace(/[\-\(]/, '')),
                    (f.after = f.after.replace(/[\-\)]/, '')))
                  : u < 0 &&
                    !t._.includes(f.before, '-') &&
                    !t._.includes(f.before, '(') &&
                    (f.before = '-' + f.before),
                b = 0;
              b < f.before.length;
              b++
            )
              switch (((m = f.before[b]), m)) {
                case '$':
                  g = t._.insert(g, h.currency.symbol, b);
                  break;
                case ' ':
                  g = t._.insert(g, ' ', b + h.currency.symbol.length - 1);
                  break;
              }
            for (b = f.after.length - 1; b >= 0; b--)
              switch (((m = f.after[b]), m)) {
                case '$':
                  g =
                    b === f.after.length - 1
                      ? g + h.currency.symbol
                      : t._.insert(g, h.currency.symbol, -(f.after.length - (1 + b)));
                  break;
                case ' ':
                  g =
                    b === f.after.length - 1
                      ? g + ' '
                      : t._.insert(
                          g,
                          ' ',
                          -(f.after.length - (1 + b) + h.currency.symbol.length - 1)
                        );
                  break;
              }
            return g;
          },
        });
      })(),
      (function () {
        t.register('format', 'exponential', {
          regexps: { format: /(e\+|e-)/, unformat: /(e\+|e-)/ },
          format: function (u, p, d) {
            var h,
              f = typeof u == 'number' && !t._.isNaN(u) ? u.toExponential() : '0e+0',
              g = f.split('e');
            return (
              (p = p.replace(/e[\+|\-]{1}0/, '')),
              (h = t._.numberToFormat(Number(g[0]), p, d)),
              h + 'e' + g[1]
            );
          },
          unformat: function (u) {
            var p = t._.includes(u, 'e+') ? u.split('e+') : u.split('e-'),
              d = Number(p[0]),
              h = Number(p[1]);
            h = t._.includes(u, 'e-') ? (h *= -1) : h;
            function f(g, m, b, P) {
              var A = t._.correctionFactor(g, m),
                v = (g * A * (m * A)) / (A * A);
              return v;
            }
            return t._.reduce([d, Math.pow(10, h)], f, 1);
          },
        });
      })(),
      (function () {
        t.register('format', 'ordinal', {
          regexps: { format: /(o)/ },
          format: function (u, p, d) {
            var h = t.locales[t.options.currentLocale],
              f,
              g = t._.includes(p, ' o') ? ' ' : '';
            return (
              (p = p.replace(/\s?o/, '')),
              (g += h.ordinal(u)),
              (f = t._.numberToFormat(u, p, d)),
              f + g
            );
          },
        });
      })(),
      (function () {
        t.register('format', 'percentage', {
          regexps: { format: /(%)/, unformat: /(%)/ },
          format: function (u, p, d) {
            var h = t._.includes(p, ' %') ? ' ' : '',
              f;
            return (
              t.options.scalePercentBy100 && (u = u * 100),
              (p = p.replace(/\s?\%/, '')),
              (f = t._.numberToFormat(u, p, d)),
              t._.includes(f, ')')
                ? ((f = f.split('')), f.splice(-1, 0, h + '%'), (f = f.join('')))
                : (f = f + h + '%'),
              f
            );
          },
          unformat: function (u) {
            var p = t._.stringToNumber(u);
            return t.options.scalePercentBy100 ? p * 0.01 : p;
          },
        });
      })(),
      (function () {
        t.register('format', 'time', {
          regexps: { format: /(:)/, unformat: /(:)/ },
          format: function (u, p, d) {
            var h = Math.floor(u / 60 / 60),
              f = Math.floor((u - h * 60 * 60) / 60),
              g = Math.round(u - h * 60 * 60 - f * 60);
            return h + ':' + (f < 10 ? '0' + f : f) + ':' + (g < 10 ? '0' + g : g);
          },
          unformat: function (u) {
            var p = u.split(':'),
              d = 0;
            return (
              p.length === 3
                ? ((d = d + Number(p[0]) * 60 * 60),
                  (d = d + Number(p[1]) * 60),
                  (d = d + Number(p[2])))
                : p.length === 2 && ((d = d + Number(p[0]) * 60), (d = d + Number(p[1]))),
              Number(d)
            );
          },
        });
      })(),
      t
    );
  });
})(sd);
var w1 = sd.exports;
const id = Lt(w1);
_1(id.localeData('en'), {
  abbreviations: { thousand: 'K', million: 'M', billion: 'B', trillion: 'T' },
});
const $1 = (e) => {
    const t = e ? Math.floor(Math.log10(e)) : 0,
      r = t < 0 ? Math.pow(10, 1 - t) : 100;
    return Math.round(e * r) / r;
  },
  UB = (e) =>
    e
      .replace(/,|\.{2,}/g, '.')
      .replace(/^[0]+/g, '0')
      .replace(/[^\d.]/g, ''),
  LB = (e, t = 9) => {
    const r = (e.match(/\./g) || []).length;
    return e.endsWith('.') && r > 1
      ? e.substring(0, e.length - 1)
      : e.length === 0 || e.endsWith('.') || e.endsWith('0')
        ? e
        : new it(e).decimalPlaces(t).toString();
  };
var T1 = I1;
function I1(e, t) {
  if (typeof e != 'function') throw new Error('`callback` should be a function');
  if (t !== void 0 && typeof t != 'function') throw new Error('`resolver` should be a function');
  var r = {},
    n = function () {
      var s = Array.prototype.slice.call(arguments),
        o = t ? t.apply(this, s) : JSON.stringify(s);
      return o in r || (r[o] = e.apply(this, s)), r[o];
    };
  return (n.cache = r), n;
}
const x1 = (...e) => {
    const t = e.map((r) => (r instanceof Map || r instanceof Set ? Array.from(r) : r));
    return JSON.stringify(t);
  },
  E1 = (e, t = { forceRefresh: !1 }) => {
    const { resolver: r = x1 } = t,
      n = T1(e, r),
      s = function (...o) {
        if (t.forceRefresh) {
          const a = r(...o);
          delete n.cache[a];
        }
        return n.apply(this, o);
      };
    return (s.cache = n.cache), s;
  },
  A1 = (e) => new it(10).pow(e),
  od = E1(A1),
  BB = (e, t) => (t === 0 ? new it(e) : new it(e).multipliedBy(od(t))),
  jB = (e, t) => new it(e).div(od(t)),
  P1 = (e, t = {}) => {
    const r = typeof e == 'number' ? e : it(e).toNumber(),
      {
        includePlusPrefix: n = !1,
        prefix: s = '',
        infix: o = '',
        suffix: a = '',
        extendedDecimalsForSmallNumbers: c = !1,
        minimumAmount: l = 0.01,
        format: u = '0,0.[00]',
        decimalFormatSmallNumbers: p = '0.[00]',
        roundDecimals: d = !1,
      } = t,
      h = r < 0 ? '-' : '',
      f = n && r > 0 ? '+' : h,
      g = d ? $1(Math.abs(r)) : Math.abs(r);
    if (Math.abs(r) >= l || r === 0) {
      const m = Math.abs(r) > 1 ? (t.compact ? '0.[00]a' : u) : p,
        b = id(g).format(m);
      return `${s}${f}${o}${b}${a}`;
    } else if (c) {
      const m = new it(g).abs().toFormat();
      return `${s}${f}${o}${m}${a}`;
    } else return `${s}${f}<${o}${new it(l).toFormat()}${a}`;
  },
  FB = (e, t = {}) =>
    P1(e, {
      ...t,
      infix: '$',
      format: t.compact ? '0.[00]a' : (t.format ?? '0,0.00'),
      decimalFormatSmallNumbers: t.decimalFormatSmallNumbers ?? '0.00',
    });
function D1(e) {
  return `https://www.google.com/s2/favicons?domain=${e}&sz=256`;
}
const k1 = vn.createContext(!1);
function C1() {
  return le.useContext(k1);
}
vn.createContext(!1);
function R1(e) {
  try {
    const t = new URL(e);
    return !['javascript:', 'data:', 'vbscript:'].includes(t.protocol.toLowerCase());
  } catch {
    return !1;
  }
}
const HB = () => {},
  O1 = new RegExp("^[0-9]+'?$");
xt.from('Bitcoin seed');
XS.from('0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141');
i.string().refine(
  (e) => {
    if (typeof e != 'string') return !1;
    const t = e.split('/');
    if (t.length < 2 || t[0] !== 'm') return !1;
    for (let r = 1; r < t.length; ++r) if (!O1.test(t[r])) return !1;
    return !0;
  },
  { message: 'Value is not a valid derivation path.' }
);
var Ee = ((e) => (
  (e.BitcoinTaproot = 'bitcoinTaproot'),
  (e.BitcoinNativeSegwit = 'bitcoinNativeSegwit'),
  (e.BitcoinNestedSegwit = 'bitcoinNestedSegwit'),
  (e.BitcoinLegacy = 'bitcoinLegacy'),
  (e.Bip44RootSolana = 'bip44Root'),
  (e.Bip44Solana = 'bip44'),
  (e.Bip44ChangeSolana = 'bip44Change'),
  (e.DeprecatedSolana = 'deprecated'),
  (e.Bip44RootEthereum = 'bip44RootEthereum'),
  (e.Bip44Ethereum = 'bip44Ethereum'),
  (e.Bip44EthereumSecondary = 'bip44EthereumSecondary'),
  (e.Bip44EthereumTertiary = 'bip44EthereumTertiary'),
  (e.Bip44Sui = 'bip44Sui'),
  e
))(Ee || {});
const VB = i.union([
    i.literal('bitcoinTaproot'),
    i.literal('bitcoinNativeSegwit'),
    i.literal('bitcoinNestedSegwit'),
    i.literal('bitcoinLegacy'),
  ]),
  zB = i.union([
    i.literal('bip44RootEthereum'),
    i.literal('bip44Ethereum'),
    i.literal('bip44EthereumSecondary'),
    i.literal('bip44EthereumTertiary'),
  ]),
  GB = i.union([
    i.literal('bip44Root'),
    i.literal('bip44'),
    i.literal('bip44Change'),
    i.literal('deprecated'),
  ]),
  qB = i.literal('bip44Sui'),
  N1 = i.union([
    i.literal(Ee.Bip44ChangeSolana),
    i.literal(Ee.Bip44Solana),
    i.literal(Ee.DeprecatedSolana),
  ]),
  M1 = i.union([
    i.literal(Ee.Bip44Ethereum),
    i.literal(Ee.Bip44EthereumSecondary),
    i.literal(Ee.Bip44EthereumTertiary),
  ]),
  U1 = i.union([
    i.literal(Ee.BitcoinTaproot),
    i.literal(Ee.BitcoinNativeSegwit),
    i.literal(Ee.BitcoinNestedSegwit),
    i.literal(Ee.BitcoinLegacy),
  ]),
  L1 = i.literal(Ee.Bip44Sui),
  xs = i.number().int().min(0),
  B1 = i.object({ pathType: i.literal(Ee.Bip44RootSolana), index: i.number().optional() }),
  j1 = i.object({ pathType: N1, index: xs }),
  F1 = i.object({ pathType: i.literal(Ee.Bip44RootEthereum), index: i.number().optional() }),
  H1 = i.object({ pathType: M1, index: xs }),
  V1 = i.object({ pathType: U1, index: xs }),
  z1 = i.object({ pathType: L1, index: xs });
i.union([B1, j1, F1, H1, V1, z1]);
cs.sha512Sync = (...e) => K_(cs.concatBytes(...e));
var ae = ((e) => (
  (e.BitcoinTaproot = 'bip122_p2tr'),
  (e.BitcoinNativeSegwit = 'bip122_p2wpkh'),
  (e.BitcoinNestedSegwit = 'bip122_p2sh'),
  (e.BitcoinLegacy = 'bip122_p2pkh'),
  (e.Solana = 'solana'),
  (e.EVM = 'eip155'),
  (e.Sui = 'sui'),
  e
))(ae || {});
const G1 = ['bip122_p2tr', 'bip122_p2wpkh', 'bip122_p2sh', 'bip122_p2pkh'],
  q1 = i.enum(G1);
class W1 {
  constructor() {
    M(this, 'type', ae.BitcoinLegacy);
    M(this, 'displayName', 'Legacy');
    M(this, 'defaultDerivationPathType', Ee.BitcoinLegacy);
    M(this, 'otherDerivationPathType', []);
  }
}
class Q1 {
  constructor() {
    M(this, 'type', ae.BitcoinNativeSegwit);
    M(this, 'displayName', 'Native Segwit');
    M(this, 'defaultDerivationPathType', Ee.BitcoinNativeSegwit);
    M(this, 'otherDerivationPathType', []);
  }
}
class Y1 {
  constructor() {
    M(this, 'type', ae.BitcoinNestedSegwit);
    M(this, 'displayName', 'Nested Segwit');
    M(this, 'defaultDerivationPathType', Ee.BitcoinNestedSegwit);
    M(this, 'otherDerivationPathType', []);
  }
}
class K1 {
  constructor() {
    M(this, 'type', ae.BitcoinTaproot);
    M(this, 'displayName', 'Taproot');
    M(this, 'defaultDerivationPathType', Ee.BitcoinTaproot);
    M(this, 'otherDerivationPathType', []);
  }
}
class J1 {
  constructor() {
    M(this, 'type', ae.EVM);
    M(this, 'displayName', 'Ethereum');
    M(this, 'defaultDerivationPathType', Ee.Bip44Ethereum);
    M(this, 'otherDerivationPathType', [
      Ee.Bip44RootEthereum,
      Ee.Bip44EthereumSecondary,
      Ee.Bip44EthereumTertiary,
    ]);
  }
}
class Z1 {
  constructor() {
    M(this, 'type', ae.Solana);
    M(this, 'displayName', 'Solana');
    M(this, 'defaultDerivationPathType', Ee.Bip44ChangeSolana);
    M(this, 'otherDerivationPathType', [Ee.Bip44RootSolana, Ee.Bip44Solana, Ee.DeprecatedSolana]);
  }
}
class X1 {
  constructor() {
    M(this, 'type', ae.Sui);
    M(this, 'displayName', 'Sui');
    M(this, 'defaultDerivationPathType', Ee.Bip44Sui);
    M(this, 'otherDerivationPathType', []);
  }
}
var Su, _u, wu, $u, Tu, Iu, xu;
(xu = ae.BitcoinTaproot),
  (Iu = ae.BitcoinNativeSegwit),
  (Tu = ae.BitcoinNestedSegwit),
  ($u = ae.BitcoinLegacy),
  (wu = ae.EVM),
  (_u = ae.Solana),
  (Su = ae.Sui);
class ew {
  constructor() {
    M(this, xu, new K1());
    M(this, Iu, new Q1());
    M(this, Tu, new Y1());
    M(this, $u, new W1());
    M(this, wu, new J1());
    M(this, _u, new Z1());
    M(this, Su, new X1());
    M(this, 'allAddressTypes', Object.values(ae));
    M(
      this,
      'allAddressTypeDefinitions',
      this.allAddressTypes.map((t) => this[t])
    );
    M(this, 'addressTypeByDerivationPathType', {});
    this.allAddressTypeDefinitions.forEach((t) => {
      (this.addressTypeByDerivationPathType[t.defaultDerivationPathType] = t.type),
        t.otherDerivationPathType.forEach((r) => {
          this.addressTypeByDerivationPathType[r] = t.type;
        });
    });
  }
  getAll() {
    return this.allAddressTypes;
  }
  getDisplayName(t) {
    return this[t].displayName;
  }
  getAddressType(t) {
    return this.addressTypeByDerivationPathType[t];
  }
}
const ad = new ew(),
  tw = (e) => {
    const t = e.decode.bind(e),
      r = e.encode.bind(e);
    return { decode: t, encode: r };
  },
  rw = (e) => (t) => {
    const r = LS(e, t),
      { encode: n, decode: s } = tw(r),
      o = r;
    return (
      (o.decode = (a, c) => {
        const l = s(a, c);
        return BS(xt.from(l));
      }),
      (o.encode = (a, c, l) => {
        const u = jS(a, e);
        return n(u, c, l);
      }),
      o
    );
  },
  WB = rw(8);
function cd(e, t) {
  const r = (s) => {
    if (s.span >= 0) return s.span;
    if (typeof s.alloc == 'function') return s.alloc(t[s.property]);
    if ('count' in s && 'elementLayout' in s) {
      const o = t[s.property];
      if (Array.isArray(o)) return o.length * r(s.elementLayout);
    } else if ('fields' in s) return cd({ layout: s }, t[s.property]);
    return 0;
  };
  let n = 0;
  return (
    e.layout.fields.forEach((s) => {
      n += r(s);
    }),
    n
  );
}
function QB(e, t) {
  const r = e.layout.span >= 0 ? e.layout.span : cd(e, t),
    n = xt.alloc(r),
    s = Object.assign({ instruction: e.index }, t);
  return e.layout.encode(s, n), n;
}
it.config({ EXPONENTIAL_AT: 1e3, DECIMAL_PLACES: 78 });
xt.alloc(64).fill(0);
const nw = (e) => (Bt(e) ? xt.from(e.message.serialize()) : e.serializeMessage()),
  bc = (e) => Pn.encode(nw(e)),
  YB = (e) => {
    try {
      return bc(vc(e, 'bs58'));
    } catch {
      return bc(vc(e, 'base64'));
    }
  },
  Bt = (e) => e && 'version' in e,
  sw = (e, t) =>
    Bt(e)
      ? xt.from(e.serialize())
      : e.serialize(t ?? { requireAllSignatures: !1, verifySignatures: !1 }),
  KB = (e, t) => Pn.encode(sw(e, t)),
  vc = (e, t) => {
    let r;
    if (t === 'base64') r = xt.from(e, 'base64');
    else if (t === 'bs58') r = Pn.decode(e);
    else throw new Error('Unsupported encoding');
    return JS.deserialize(r);
  };
function JB(e) {
  return Bt(e)
    ? e.signatures.filter((r) => r.every((s) => s === 0) === !1).length > 0
    : e.signatures.filter(({ signature: r }) => (r ? r.find((s) => s !== 0) !== void 0 : !1))
        .length > 0;
}
const iw = (e) => (Bt(e) ? e.message.recentBlockhash : e.recentBlockhash),
  ow = (e, t) => {
    Bt(e) ? (e.message.recentBlockhash = t) : (e.recentBlockhash = t);
  },
  ZB = async (e, t) => {
    if (iw(e)) return;
    const r = (await t.getLatestBlockhash('confirmed')).blockhash;
    ow(e, r);
  },
  aw = (e, t) => {
    Bt(e) || (e.feePayer = t);
  },
  cw = (e) => (Bt(e) ? e.message.staticAccountKeys[0] : e.feePayer),
  XB = (e, t) => {
    cw(e) || aw(e, t);
  },
  e3 = (e, t) => {
    Bt(e) ? e.sign(t) : e.partialSign(...t);
  },
  t3 = (e) =>
    Bt(e)
      ? e.signatures.map((t) => xt.from(t))
      : e.signatures.map((t) => t.signature).filter((t) => t !== null);
function lw(e) {
  var n, s;
  if (!uw(xt.from(e))) return !1;
  let t;
  try {
    t = YS.from(e);
  } catch {
    t = void 0;
  }
  let r;
  try {
    r = KS.deserialize(e);
  } catch {
    r = void 0;
  }
  return (
    (!t && !r) ||
    ((((n = t == null ? void 0 : t.instructions) == null ? void 0 : n.length) ?? 0) === 0 &&
      (((s = r == null ? void 0 : r.compiledInstructions) == null ? void 0 : s.length) ?? 0) === 0)
  );
}
function uw(e) {
  const t = e.length;
  let r = 0;
  for (; r < t; )
    if (!(e[r] & 128)) r++;
    else if ((e[r] & 224) === 192) {
      if (r + 1 === t || (e[r + 1] & 192) !== 128 || (e[r] & 254) === 192) return !1;
      r += 2;
    } else if ((e[r] & 240) === 224) {
      if (
        r + 2 >= t ||
        (e[r + 1] & 192) !== 128 ||
        (e[r + 2] & 192) !== 128 ||
        (e[r] === 224 && (e[r + 1] & 224) === 128) ||
        (e[r] === 237 && (e[r + 1] & 224) === 160)
      )
        return !1;
      r += 3;
    } else if ((e[r] & 248) === 240) {
      if (
        r + 3 >= t ||
        (e[r + 1] & 192) !== 128 ||
        (e[r + 2] & 192) !== 128 ||
        (e[r + 3] & 192) !== 128 ||
        (e[r] === 240 && (e[r + 1] & 240) === 128) ||
        (e[r] === 244 && e[r + 1] > 143) ||
        e[r] > 244
      )
        return !1;
      r += 4;
    } else return !1;
  return !0;
}
const r3 = (e) => it(e).dividedBy(Bu),
  n3 = (e) => it(e).multipliedBy(Bu);
function Do(e) {
  if (!Number.isSafeInteger(e) || e < 0) throw new Error(`Wrong positive integer: ${e}`);
}
function dw(e) {
  if (typeof e != 'boolean') throw new Error(`Expected boolean, not ${e}`);
}
function ld(e, ...t) {
  if (!(e instanceof Uint8Array)) throw new TypeError('Expected Uint8Array');
  if (t.length > 0 && !t.includes(e.length))
    throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`);
}
function pw(e) {
  if (typeof e != 'function' || typeof e.create != 'function')
    throw new Error('Hash should be wrapped by utils.wrapConstructor');
  Do(e.outputLen), Do(e.blockLen);
}
function hw(e, t = !0) {
  if (e.destroyed) throw new Error('Hash instance has been destroyed');
  if (t && e.finished) throw new Error('Hash#digest() has already been called');
}
function fw(e, t) {
  ld(e);
  const r = t.outputLen;
  if (e.length < r) throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
const kt = { number: Do, bool: dw, bytes: ld, hash: pw, exists: hw, output: fw };
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const mw = (e) =>
    new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
  ci = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
  gw = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!gw) throw new Error('Non little-endian hardware is not supported');
Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
function yw(e) {
  if (typeof e != 'string') throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);
  return new TextEncoder().encode(e);
}
function Es(e) {
  if ((typeof e == 'string' && (e = yw(e)), !(e instanceof Uint8Array)))
    throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);
  return e;
}
let ud = class {
  clone() {
    return this._cloneInto();
  }
};
function Dn(e) {
  const t = (n) => e().update(Es(n)).digest(),
    r = e();
  return (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = () => e()), t;
}
function bw(e) {
  const t = (n, s) => e(s).update(Es(n)).digest(),
    r = e({});
  return (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = (n) => e(n)), t;
}
function vw(e, t, r, n) {
  if (typeof e.setBigUint64 == 'function') return e.setBigUint64(t, r, n);
  const s = BigInt(32),
    o = BigInt(4294967295),
    a = Number((r >> s) & o),
    c = Number(r & o),
    l = n ? 4 : 0,
    u = n ? 0 : 4;
  e.setUint32(t + l, a, n), e.setUint32(t + u, c, n);
}
let Sw = class extends ud {
  constructor(t, r, n, s) {
    super(),
      (this.blockLen = t),
      (this.outputLen = r),
      (this.padOffset = n),
      (this.isLE = s),
      (this.finished = !1),
      (this.length = 0),
      (this.pos = 0),
      (this.destroyed = !1),
      (this.buffer = new Uint8Array(t)),
      (this.view = ci(this.buffer));
  }
  update(t) {
    kt.exists(this);
    const { view: r, buffer: n, blockLen: s } = this;
    t = Es(t);
    const o = t.length;
    for (let a = 0; a < o; ) {
      const c = Math.min(s - this.pos, o - a);
      if (c === s) {
        const l = ci(t);
        for (; s <= o - a; a += s) this.process(l, a);
        continue;
      }
      n.set(t.subarray(a, a + c), this.pos),
        (this.pos += c),
        (a += c),
        this.pos === s && (this.process(r, 0), (this.pos = 0));
    }
    return (this.length += t.length), this.roundClean(), this;
  }
  digestInto(t) {
    kt.exists(this), kt.output(t, this), (this.finished = !0);
    const { buffer: r, view: n, blockLen: s, isLE: o } = this;
    let { pos: a } = this;
    (r[a++] = 128),
      this.buffer.subarray(a).fill(0),
      this.padOffset > s - a && (this.process(n, 0), (a = 0));
    for (let d = a; d < s; d++) r[d] = 0;
    vw(n, s - 8, BigInt(this.length * 8), o), this.process(n, 0);
    const c = ci(t),
      l = this.outputLen;
    if (l % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
    const u = l / 4,
      p = this.get();
    if (u > p.length) throw new Error('_sha2: outputLen bigger than state');
    for (let d = 0; d < u; d++) c.setUint32(4 * d, p[d], o);
  }
  digest() {
    const { buffer: t, outputLen: r } = this;
    this.digestInto(t);
    const n = t.slice(0, r);
    return this.destroy(), n;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: r, buffer: n, length: s, finished: o, destroyed: a, pos: c } = this;
    return (
      (t.length = s), (t.pos = c), (t.finished = o), (t.destroyed = a), s % r && t.buffer.set(n), t
    );
  }
};
const zn = BigInt(2 ** 32 - 1),
  ko = BigInt(32);
function dd(e, t = !1) {
  return t
    ? { h: Number(e & zn), l: Number((e >> ko) & zn) }
    : { h: Number((e >> ko) & zn) | 0, l: Number(e & zn) | 0 };
}
function _w(e, t = !1) {
  let r = new Uint32Array(e.length),
    n = new Uint32Array(e.length);
  for (let s = 0; s < e.length; s++) {
    const { h: o, l: a } = dd(e[s], t);
    [r[s], n[s]] = [o, a];
  }
  return [r, n];
}
const ww = (e, t) => (BigInt(e >>> 0) << ko) | BigInt(t >>> 0),
  $w = (e, t, r) => e >>> r,
  Tw = (e, t, r) => (e << (32 - r)) | (t >>> r),
  Iw = (e, t, r) => (e >>> r) | (t << (32 - r)),
  xw = (e, t, r) => (e << (32 - r)) | (t >>> r),
  Ew = (e, t, r) => (e << (64 - r)) | (t >>> (r - 32)),
  Aw = (e, t, r) => (e >>> (r - 32)) | (t << (64 - r)),
  Pw = (e, t) => t,
  Dw = (e, t) => e,
  kw = (e, t, r) => (e << r) | (t >>> (32 - r)),
  Cw = (e, t, r) => (t << r) | (e >>> (32 - r)),
  Rw = (e, t, r) => (t << (r - 32)) | (e >>> (64 - r)),
  Ow = (e, t, r) => (e << (r - 32)) | (t >>> (64 - r));
function Nw(e, t, r, n) {
  const s = (t >>> 0) + (n >>> 0);
  return { h: (e + r + ((s / 2 ** 32) | 0)) | 0, l: s | 0 };
}
const Mw = (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0),
  Uw = (e, t, r, n) => (t + r + n + ((e / 2 ** 32) | 0)) | 0,
  Lw = (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0),
  Bw = (e, t, r, n, s) => (t + r + n + s + ((e / 2 ** 32) | 0)) | 0,
  jw = (e, t, r, n, s) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (s >>> 0),
  Fw = (e, t, r, n, s, o) => (t + r + n + s + o + ((e / 2 ** 32) | 0)) | 0,
  re = {
    fromBig: dd,
    split: _w,
    toBig: ww,
    shrSH: $w,
    shrSL: Tw,
    rotrSH: Iw,
    rotrSL: xw,
    rotrBH: Ew,
    rotrBL: Aw,
    rotr32H: Pw,
    rotr32L: Dw,
    rotlSH: kw,
    rotlSL: Cw,
    rotlBH: Rw,
    rotlBL: Ow,
    add: Nw,
    add3L: Mw,
    add3H: Uw,
    add4L: Lw,
    add4H: Bw,
    add5H: Fw,
    add5L: jw,
  },
  [Hw, Vw] = re.split(
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
  qt = new Uint32Array(80),
  Wt = new Uint32Array(80);
class As extends Sw {
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
      Al: r,
      Bh: n,
      Bl: s,
      Ch: o,
      Cl: a,
      Dh: c,
      Dl: l,
      Eh: u,
      El: p,
      Fh: d,
      Fl: h,
      Gh: f,
      Gl: g,
      Hh: m,
      Hl: b,
    } = this;
    return [t, r, n, s, o, a, c, l, u, p, d, h, f, g, m, b];
  }
  set(t, r, n, s, o, a, c, l, u, p, d, h, f, g, m, b) {
    (this.Ah = t | 0),
      (this.Al = r | 0),
      (this.Bh = n | 0),
      (this.Bl = s | 0),
      (this.Ch = o | 0),
      (this.Cl = a | 0),
      (this.Dh = c | 0),
      (this.Dl = l | 0),
      (this.Eh = u | 0),
      (this.El = p | 0),
      (this.Fh = d | 0),
      (this.Fl = h | 0),
      (this.Gh = f | 0),
      (this.Gl = g | 0),
      (this.Hh = m | 0),
      (this.Hl = b | 0);
  }
  process(t, r) {
    for (let v = 0; v < 16; v++, r += 4) (qt[v] = t.getUint32(r)), (Wt[v] = t.getUint32((r += 4)));
    for (let v = 16; v < 80; v++) {
      const R = qt[v - 15] | 0,
        O = Wt[v - 15] | 0,
        k = re.rotrSH(R, O, 1) ^ re.rotrSH(R, O, 8) ^ re.shrSH(R, O, 7),
        E = re.rotrSL(R, O, 1) ^ re.rotrSL(R, O, 8) ^ re.shrSL(R, O, 7),
        _ = qt[v - 2] | 0,
        w = Wt[v - 2] | 0,
        V = re.rotrSH(_, w, 19) ^ re.rotrBH(_, w, 61) ^ re.shrSH(_, w, 6),
        W = re.rotrSL(_, w, 19) ^ re.rotrBL(_, w, 61) ^ re.shrSL(_, w, 6),
        Z = re.add4L(E, W, Wt[v - 7], Wt[v - 16]),
        X = re.add4H(Z, k, V, qt[v - 7], qt[v - 16]);
      (qt[v] = X | 0), (Wt[v] = Z | 0);
    }
    let {
      Ah: n,
      Al: s,
      Bh: o,
      Bl: a,
      Ch: c,
      Cl: l,
      Dh: u,
      Dl: p,
      Eh: d,
      El: h,
      Fh: f,
      Fl: g,
      Gh: m,
      Gl: b,
      Hh: P,
      Hl: A,
    } = this;
    for (let v = 0; v < 80; v++) {
      const R = re.rotrSH(d, h, 14) ^ re.rotrSH(d, h, 18) ^ re.rotrBH(d, h, 41),
        O = re.rotrSL(d, h, 14) ^ re.rotrSL(d, h, 18) ^ re.rotrBL(d, h, 41),
        k = (d & f) ^ (~d & m),
        E = (h & g) ^ (~h & b),
        _ = re.add5L(A, O, E, Vw[v], Wt[v]),
        w = re.add5H(_, P, R, k, Hw[v], qt[v]),
        V = _ | 0,
        W = re.rotrSH(n, s, 28) ^ re.rotrBH(n, s, 34) ^ re.rotrBH(n, s, 39),
        Z = re.rotrSL(n, s, 28) ^ re.rotrBL(n, s, 34) ^ re.rotrBL(n, s, 39),
        X = (n & o) ^ (n & c) ^ (o & c),
        Te = (s & a) ^ (s & l) ^ (a & l);
      (P = m | 0),
        (A = b | 0),
        (m = f | 0),
        (b = g | 0),
        (f = d | 0),
        (g = h | 0),
        ({ h: d, l: h } = re.add(u | 0, p | 0, w | 0, V | 0)),
        (u = c | 0),
        (p = l | 0),
        (c = o | 0),
        (l = a | 0),
        (o = n | 0),
        (a = s | 0);
      const Ie = re.add3L(V, Z, Te);
      (n = re.add3H(Ie, w, W, X)), (s = Ie | 0);
    }
    ({ h: n, l: s } = re.add(this.Ah | 0, this.Al | 0, n | 0, s | 0)),
      ({ h: o, l: a } = re.add(this.Bh | 0, this.Bl | 0, o | 0, a | 0)),
      ({ h: c, l } = re.add(this.Ch | 0, this.Cl | 0, c | 0, l | 0)),
      ({ h: u, l: p } = re.add(this.Dh | 0, this.Dl | 0, u | 0, p | 0)),
      ({ h: d, l: h } = re.add(this.Eh | 0, this.El | 0, d | 0, h | 0)),
      ({ h: f, l: g } = re.add(this.Fh | 0, this.Fl | 0, f | 0, g | 0)),
      ({ h: m, l: b } = re.add(this.Gh | 0, this.Gl | 0, m | 0, b | 0)),
      ({ h: P, l: A } = re.add(this.Hh | 0, this.Hl | 0, P | 0, A | 0)),
      this.set(n, s, o, a, c, l, u, p, d, h, f, g, m, b, P, A);
  }
  roundClean() {
    qt.fill(0), Wt.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
class zw extends As {
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
class Gw extends As {
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
class qw extends As {
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
const Ww = Dn(() => new As());
Dn(() => new zw());
Dn(() => new Gw());
Dn(() => new qw());
cs.sha512Sync = (...e) => Ww(cs.concatBytes(...e));
function Qw(e, t) {
  if (!!!e) throw new Error(t);
}
const pd = {
    Name: [],
    Document: ['definitions'],
    OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
    VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
    Variable: ['name'],
    SelectionSet: ['selections'],
    Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
    Argument: ['name', 'value'],
    FragmentSpread: ['name', 'directives'],
    InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
    FragmentDefinition: [
      'name',
      'variableDefinitions',
      'typeCondition',
      'directives',
      'selectionSet',
    ],
    IntValue: [],
    FloatValue: [],
    StringValue: [],
    BooleanValue: [],
    NullValue: [],
    EnumValue: [],
    ListValue: ['values'],
    ObjectValue: ['fields'],
    ObjectField: ['name', 'value'],
    Directive: ['name', 'arguments'],
    NamedType: ['name'],
    ListType: ['type'],
    NonNullType: ['type'],
    SchemaDefinition: ['description', 'directives', 'operationTypes'],
    OperationTypeDefinition: ['type'],
    ScalarTypeDefinition: ['description', 'name', 'directives'],
    ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
    FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
    InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
    InterfaceTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
    UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
    EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
    EnumValueDefinition: ['description', 'name', 'directives'],
    InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
    DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
    SchemaExtension: ['directives', 'operationTypes'],
    ScalarTypeExtension: ['name', 'directives'],
    ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
    InterfaceTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
    UnionTypeExtension: ['name', 'directives', 'types'],
    EnumTypeExtension: ['name', 'directives', 'values'],
    InputObjectTypeExtension: ['name', 'directives', 'fields'],
  },
  Yw = new Set(Object.keys(pd));
function Sc(e) {
  const t = e == null ? void 0 : e.kind;
  return typeof t == 'string' && Yw.has(t);
}
var _c;
(function (e) {
  (e.QUERY = 'query'), (e.MUTATION = 'mutation'), (e.SUBSCRIPTION = 'subscription');
})(_c || (_c = {}));
var Co;
(function (e) {
  (e.NAME = 'Name'),
    (e.DOCUMENT = 'Document'),
    (e.OPERATION_DEFINITION = 'OperationDefinition'),
    (e.VARIABLE_DEFINITION = 'VariableDefinition'),
    (e.SELECTION_SET = 'SelectionSet'),
    (e.FIELD = 'Field'),
    (e.ARGUMENT = 'Argument'),
    (e.FRAGMENT_SPREAD = 'FragmentSpread'),
    (e.INLINE_FRAGMENT = 'InlineFragment'),
    (e.FRAGMENT_DEFINITION = 'FragmentDefinition'),
    (e.VARIABLE = 'Variable'),
    (e.INT = 'IntValue'),
    (e.FLOAT = 'FloatValue'),
    (e.STRING = 'StringValue'),
    (e.BOOLEAN = 'BooleanValue'),
    (e.NULL = 'NullValue'),
    (e.ENUM = 'EnumValue'),
    (e.LIST = 'ListValue'),
    (e.OBJECT = 'ObjectValue'),
    (e.OBJECT_FIELD = 'ObjectField'),
    (e.DIRECTIVE = 'Directive'),
    (e.NAMED_TYPE = 'NamedType'),
    (e.LIST_TYPE = 'ListType'),
    (e.NON_NULL_TYPE = 'NonNullType'),
    (e.SCHEMA_DEFINITION = 'SchemaDefinition'),
    (e.OPERATION_TYPE_DEFINITION = 'OperationTypeDefinition'),
    (e.SCALAR_TYPE_DEFINITION = 'ScalarTypeDefinition'),
    (e.OBJECT_TYPE_DEFINITION = 'ObjectTypeDefinition'),
    (e.FIELD_DEFINITION = 'FieldDefinition'),
    (e.INPUT_VALUE_DEFINITION = 'InputValueDefinition'),
    (e.INTERFACE_TYPE_DEFINITION = 'InterfaceTypeDefinition'),
    (e.UNION_TYPE_DEFINITION = 'UnionTypeDefinition'),
    (e.ENUM_TYPE_DEFINITION = 'EnumTypeDefinition'),
    (e.ENUM_VALUE_DEFINITION = 'EnumValueDefinition'),
    (e.INPUT_OBJECT_TYPE_DEFINITION = 'InputObjectTypeDefinition'),
    (e.DIRECTIVE_DEFINITION = 'DirectiveDefinition'),
    (e.SCHEMA_EXTENSION = 'SchemaExtension'),
    (e.SCALAR_TYPE_EXTENSION = 'ScalarTypeExtension'),
    (e.OBJECT_TYPE_EXTENSION = 'ObjectTypeExtension'),
    (e.INTERFACE_TYPE_EXTENSION = 'InterfaceTypeExtension'),
    (e.UNION_TYPE_EXTENSION = 'UnionTypeExtension'),
    (e.ENUM_TYPE_EXTENSION = 'EnumTypeExtension'),
    (e.INPUT_OBJECT_TYPE_EXTENSION = 'InputObjectTypeExtension');
})(Co || (Co = {}));
function wc(e) {
  return e === 9 || e === 32;
}
function Kw(e, t) {
  const r = e.replace(/"""/g, '\\"""'),
    n = r.split(/\r\n|[\n\r]/g),
    s = n.length === 1,
    o = n.length > 1 && n.slice(1).every((f) => f.length === 0 || wc(f.charCodeAt(0))),
    a = r.endsWith('\\"""'),
    c = e.endsWith('"') && !a,
    l = e.endsWith('\\'),
    u = c || l,
    p = !(t != null && t.minimize) && (!s || e.length > 70 || u || o || a);
  let d = '';
  const h = s && wc(e.charCodeAt(0));
  return (
    ((p && !h) || o) &&
      (d += `
`),
    (d += r),
    (p || u) &&
      (d += `
`),
    '"""' + d + '"""'
  );
}
const Jw = 10,
  hd = 2;
function Zw(e) {
  return Ps(e, []);
}
function Ps(e, t) {
  switch (typeof e) {
    case 'string':
      return JSON.stringify(e);
    case 'function':
      return e.name ? `[function ${e.name}]` : '[function]';
    case 'object':
      return Xw(e, t);
    default:
      return String(e);
  }
}
function Xw(e, t) {
  if (e === null) return 'null';
  if (t.includes(e)) return '[Circular]';
  const r = [...t, e];
  if (e$(e)) {
    const n = e.toJSON();
    if (n !== e) return typeof n == 'string' ? n : Ps(n, r);
  } else if (Array.isArray(e)) return r$(e, r);
  return t$(e, r);
}
function e$(e) {
  return typeof e.toJSON == 'function';
}
function t$(e, t) {
  const r = Object.entries(e);
  return r.length === 0
    ? '{}'
    : t.length > hd
      ? '[' + n$(e) + ']'
      : '{ ' + r.map(([s, o]) => s + ': ' + Ps(o, t)).join(', ') + ' }';
}
function r$(e, t) {
  if (e.length === 0) return '[]';
  if (t.length > hd) return '[Array]';
  const r = Math.min(Jw, e.length),
    n = e.length - r,
    s = [];
  for (let o = 0; o < r; ++o) s.push(Ps(e[o], t));
  return (
    n === 1 ? s.push('... 1 more item') : n > 1 && s.push(`... ${n} more items`),
    '[' + s.join(', ') + ']'
  );
}
function n$(e) {
  const t = Object.prototype.toString
    .call(e)
    .replace(/^\[object /, '')
    .replace(/]$/, '');
  if (t === 'Object' && typeof e.constructor == 'function') {
    const r = e.constructor.name;
    if (typeof r == 'string' && r !== '') return r;
  }
  return t;
}
function s$(e) {
  return `"${e.replace(i$, o$)}"`;
}
const i$ = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function o$(e) {
  return a$[e.charCodeAt(0)];
}
const a$ = [
    '\\u0000',
    '\\u0001',
    '\\u0002',
    '\\u0003',
    '\\u0004',
    '\\u0005',
    '\\u0006',
    '\\u0007',
    '\\b',
    '\\t',
    '\\n',
    '\\u000B',
    '\\f',
    '\\r',
    '\\u000E',
    '\\u000F',
    '\\u0010',
    '\\u0011',
    '\\u0012',
    '\\u0013',
    '\\u0014',
    '\\u0015',
    '\\u0016',
    '\\u0017',
    '\\u0018',
    '\\u0019',
    '\\u001A',
    '\\u001B',
    '\\u001C',
    '\\u001D',
    '\\u001E',
    '\\u001F',
    '',
    '',
    '\\"',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '\\\\',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '\\u007F',
    '\\u0080',
    '\\u0081',
    '\\u0082',
    '\\u0083',
    '\\u0084',
    '\\u0085',
    '\\u0086',
    '\\u0087',
    '\\u0088',
    '\\u0089',
    '\\u008A',
    '\\u008B',
    '\\u008C',
    '\\u008D',
    '\\u008E',
    '\\u008F',
    '\\u0090',
    '\\u0091',
    '\\u0092',
    '\\u0093',
    '\\u0094',
    '\\u0095',
    '\\u0096',
    '\\u0097',
    '\\u0098',
    '\\u0099',
    '\\u009A',
    '\\u009B',
    '\\u009C',
    '\\u009D',
    '\\u009E',
    '\\u009F',
  ],
  c$ = Object.freeze({});
function l$(e, t, r = pd) {
  const n = new Map();
  for (const P of Object.values(Co)) n.set(P, u$(t, P));
  let s,
    o = Array.isArray(e),
    a = [e],
    c = -1,
    l = [],
    u = e,
    p,
    d;
  const h = [],
    f = [];
  do {
    c++;
    const P = c === a.length,
      A = P && l.length !== 0;
    if (P) {
      if (((p = f.length === 0 ? void 0 : h[h.length - 1]), (u = d), (d = f.pop()), A))
        if (o) {
          u = u.slice();
          let R = 0;
          for (const [O, k] of l) {
            const E = O - R;
            k === null ? (u.splice(E, 1), R++) : (u[E] = k);
          }
        } else {
          u = Object.defineProperties({}, Object.getOwnPropertyDescriptors(u));
          for (const [R, O] of l) u[R] = O;
        }
      (c = s.index), (a = s.keys), (l = s.edits), (o = s.inArray), (s = s.prev);
    } else if (d) {
      if (((p = o ? c : a[c]), (u = d[p]), u == null)) continue;
      h.push(p);
    }
    let v;
    if (!Array.isArray(u)) {
      var g, m;
      Sc(u) || Qw(!1, `Invalid AST Node: ${Zw(u)}.`);
      const R = P
        ? (g = n.get(u.kind)) === null || g === void 0
          ? void 0
          : g.leave
        : (m = n.get(u.kind)) === null || m === void 0
          ? void 0
          : m.enter;
      if (((v = R == null ? void 0 : R.call(t, u, p, d, h, f)), v === c$)) break;
      if (v === !1) {
        if (!P) {
          h.pop();
          continue;
        }
      } else if (v !== void 0 && (l.push([p, v]), !P))
        if (Sc(v)) u = v;
        else {
          h.pop();
          continue;
        }
    }
    if ((v === void 0 && A && l.push([p, u]), P)) h.pop();
    else {
      var b;
      (s = { inArray: o, index: c, keys: a, edits: l, prev: s }),
        (o = Array.isArray(u)),
        (a = o ? u : (b = r[u.kind]) !== null && b !== void 0 ? b : []),
        (c = -1),
        (l = []),
        d && f.push(d),
        (d = u);
    }
  } while (s !== void 0);
  return l.length !== 0 ? l[l.length - 1][1] : e;
}
function u$(e, t) {
  const r = e[t];
  return typeof r == 'object'
    ? r
    : typeof r == 'function'
      ? { enter: r, leave: void 0 }
      : { enter: e.enter, leave: e.leave };
}
function o3(e) {
  return l$(e, p$);
}
const d$ = 80,
  p$ = {
    Name: { leave: (e) => e.value },
    Variable: { leave: (e) => '$' + e.name },
    Document: {
      leave: (e) =>
        q(
          e.definitions,
          `

`
        ),
    },
    OperationDefinition: {
      leave(e) {
        const t = fe('(', q(e.variableDefinitions, ', '), ')'),
          r = q([e.operation, q([e.name, t]), q(e.directives, ' ')], ' ');
        return (r === 'query' ? '' : r + ' ') + e.selectionSet;
      },
    },
    VariableDefinition: {
      leave: ({ variable: e, type: t, defaultValue: r, directives: n }) =>
        e + ': ' + t + fe(' = ', r) + fe(' ', q(n, ' ')),
    },
    SelectionSet: { leave: ({ selections: e }) => ht(e) },
    Field: {
      leave({ alias: e, name: t, arguments: r, directives: n, selectionSet: s }) {
        const o = fe('', e, ': ') + t;
        let a = o + fe('(', q(r, ', '), ')');
        return (
          a.length > d$ &&
            (a =
              o +
              fe(
                `(
`,
                ns(
                  q(
                    r,
                    `
`
                  )
                ),
                `
)`
              )),
          q([a, q(n, ' '), s], ' ')
        );
      },
    },
    Argument: { leave: ({ name: e, value: t }) => e + ': ' + t },
    FragmentSpread: { leave: ({ name: e, directives: t }) => '...' + e + fe(' ', q(t, ' ')) },
    InlineFragment: {
      leave: ({ typeCondition: e, directives: t, selectionSet: r }) =>
        q(['...', fe('on ', e), q(t, ' '), r], ' '),
    },
    FragmentDefinition: {
      leave: ({
        name: e,
        typeCondition: t,
        variableDefinitions: r,
        directives: n,
        selectionSet: s,
      }) => `fragment ${e}${fe('(', q(r, ', '), ')')} on ${t} ${fe('', q(n, ' '), ' ')}` + s,
    },
    IntValue: { leave: ({ value: e }) => e },
    FloatValue: { leave: ({ value: e }) => e },
    StringValue: { leave: ({ value: e, block: t }) => (t ? Kw(e) : s$(e)) },
    BooleanValue: { leave: ({ value: e }) => (e ? 'true' : 'false') },
    NullValue: { leave: () => 'null' },
    EnumValue: { leave: ({ value: e }) => e },
    ListValue: { leave: ({ values: e }) => '[' + q(e, ', ') + ']' },
    ObjectValue: { leave: ({ fields: e }) => '{' + q(e, ', ') + '}' },
    ObjectField: { leave: ({ name: e, value: t }) => e + ': ' + t },
    Directive: { leave: ({ name: e, arguments: t }) => '@' + e + fe('(', q(t, ', '), ')') },
    NamedType: { leave: ({ name: e }) => e },
    ListType: { leave: ({ type: e }) => '[' + e + ']' },
    NonNullType: { leave: ({ type: e }) => e + '!' },
    SchemaDefinition: {
      leave: ({ description: e, directives: t, operationTypes: r }) =>
        fe(
          '',
          e,
          `
`
        ) + q(['schema', q(t, ' '), ht(r)], ' '),
    },
    OperationTypeDefinition: { leave: ({ operation: e, type: t }) => e + ': ' + t },
    ScalarTypeDefinition: {
      leave: ({ description: e, name: t, directives: r }) =>
        fe(
          '',
          e,
          `
`
        ) + q(['scalar', t, q(r, ' ')], ' '),
    },
    ObjectTypeDefinition: {
      leave: ({ description: e, name: t, interfaces: r, directives: n, fields: s }) =>
        fe(
          '',
          e,
          `
`
        ) + q(['type', t, fe('implements ', q(r, ' & ')), q(n, ' '), ht(s)], ' '),
    },
    FieldDefinition: {
      leave: ({ description: e, name: t, arguments: r, type: n, directives: s }) =>
        fe(
          '',
          e,
          `
`
        ) +
        t +
        ($c(r)
          ? fe(
              `(
`,
              ns(
                q(
                  r,
                  `
`
                )
              ),
              `
)`
            )
          : fe('(', q(r, ', '), ')')) +
        ': ' +
        n +
        fe(' ', q(s, ' ')),
    },
    InputValueDefinition: {
      leave: ({ description: e, name: t, type: r, defaultValue: n, directives: s }) =>
        fe(
          '',
          e,
          `
`
        ) + q([t + ': ' + r, fe('= ', n), q(s, ' ')], ' '),
    },
    InterfaceTypeDefinition: {
      leave: ({ description: e, name: t, interfaces: r, directives: n, fields: s }) =>
        fe(
          '',
          e,
          `
`
        ) + q(['interface', t, fe('implements ', q(r, ' & ')), q(n, ' '), ht(s)], ' '),
    },
    UnionTypeDefinition: {
      leave: ({ description: e, name: t, directives: r, types: n }) =>
        fe(
          '',
          e,
          `
`
        ) + q(['union', t, q(r, ' '), fe('= ', q(n, ' | '))], ' '),
    },
    EnumTypeDefinition: {
      leave: ({ description: e, name: t, directives: r, values: n }) =>
        fe(
          '',
          e,
          `
`
        ) + q(['enum', t, q(r, ' '), ht(n)], ' '),
    },
    EnumValueDefinition: {
      leave: ({ description: e, name: t, directives: r }) =>
        fe(
          '',
          e,
          `
`
        ) + q([t, q(r, ' ')], ' '),
    },
    InputObjectTypeDefinition: {
      leave: ({ description: e, name: t, directives: r, fields: n }) =>
        fe(
          '',
          e,
          `
`
        ) + q(['input', t, q(r, ' '), ht(n)], ' '),
    },
    DirectiveDefinition: {
      leave: ({ description: e, name: t, arguments: r, repeatable: n, locations: s }) =>
        fe(
          '',
          e,
          `
`
        ) +
        'directive @' +
        t +
        ($c(r)
          ? fe(
              `(
`,
              ns(
                q(
                  r,
                  `
`
                )
              ),
              `
)`
            )
          : fe('(', q(r, ', '), ')')) +
        (n ? ' repeatable' : '') +
        ' on ' +
        q(s, ' | '),
    },
    SchemaExtension: {
      leave: ({ directives: e, operationTypes: t }) => q(['extend schema', q(e, ' '), ht(t)], ' '),
    },
    ScalarTypeExtension: {
      leave: ({ name: e, directives: t }) => q(['extend scalar', e, q(t, ' ')], ' '),
    },
    ObjectTypeExtension: {
      leave: ({ name: e, interfaces: t, directives: r, fields: n }) =>
        q(['extend type', e, fe('implements ', q(t, ' & ')), q(r, ' '), ht(n)], ' '),
    },
    InterfaceTypeExtension: {
      leave: ({ name: e, interfaces: t, directives: r, fields: n }) =>
        q(['extend interface', e, fe('implements ', q(t, ' & ')), q(r, ' '), ht(n)], ' '),
    },
    UnionTypeExtension: {
      leave: ({ name: e, directives: t, types: r }) =>
        q(['extend union', e, q(t, ' '), fe('= ', q(r, ' | '))], ' '),
    },
    EnumTypeExtension: {
      leave: ({ name: e, directives: t, values: r }) =>
        q(['extend enum', e, q(t, ' '), ht(r)], ' '),
    },
    InputObjectTypeExtension: {
      leave: ({ name: e, directives: t, fields: r }) =>
        q(['extend input', e, q(t, ' '), ht(r)], ' '),
    },
  };
function q(e, t = '') {
  var r;
  return (r = e == null ? void 0 : e.filter((n) => n).join(t)) !== null && r !== void 0 ? r : '';
}
function ht(e) {
  return fe(
    `{
`,
    ns(
      q(
        e,
        `
`
      )
    ),
    `
}`
  );
}
function fe(e, t, r = '') {
  return t != null && t !== '' ? e + t + r : '';
}
function ns(e) {
  return fe(
    '  ',
    e.replace(
      /\n/g,
      `
  `
    )
  );
}
function $c(e) {
  var t;
  return (t =
    e == null
      ? void 0
      : e.some((r) =>
          r.includes(`
`)
        )) !== null && t !== void 0
    ? t
    : !1;
}
var Gn = {
  NAME: 'Name',
  DOCUMENT: 'Document',
  OPERATION_DEFINITION: 'OperationDefinition',
  VARIABLE_DEFINITION: 'VariableDefinition',
  SELECTION_SET: 'SelectionSet',
  FIELD: 'Field',
  ARGUMENT: 'Argument',
  FRAGMENT_SPREAD: 'FragmentSpread',
  INLINE_FRAGMENT: 'InlineFragment',
  FRAGMENT_DEFINITION: 'FragmentDefinition',
  VARIABLE: 'Variable',
  INT: 'IntValue',
  FLOAT: 'FloatValue',
  STRING: 'StringValue',
  BOOLEAN: 'BooleanValue',
  NULL: 'NullValue',
  ENUM: 'EnumValue',
  LIST: 'ListValue',
  OBJECT: 'ObjectValue',
  OBJECT_FIELD: 'ObjectField',
  DIRECTIVE: 'Directive',
  NAMED_TYPE: 'NamedType',
  LIST_TYPE: 'ListType',
  NON_NULL_TYPE: 'NonNullType',
};
class h$ extends Error {
  constructor(t, r, n, s, o, a, c) {
    super(t),
      (this.name = 'GraphQLError'),
      (this.message = t),
      o && (this.path = o),
      r && (this.nodes = Array.isArray(r) ? r : [r]),
      n && (this.source = n),
      s && (this.positions = s),
      a && (this.originalError = a);
    var l = c;
    if (!l && a) {
      var u = a.extensions;
      u && typeof u == 'object' && (l = u);
    }
    this.extensions = l || {};
  }
  toJSON() {
    return { ...this, message: this.message };
  }
  toString() {
    return this.message;
  }
  get [Symbol.toStringTag]() {
    return 'GraphQLError';
  }
}
var ve, J;
function Le(e) {
  return new h$(`Syntax Error: Unexpected token at ${J} in ${e}`);
}
function ot(e) {
  if (((e.lastIndex = J), e.test(ve))) return ve.slice(J, (J = e.lastIndex));
}
var qn = / +(?=[^\s])/y;
function f$(e) {
  for (
    var t = e.split(`
`),
      r = '',
      n = 0,
      s = 0,
      o = t.length - 1,
      a = 0;
    a < t.length;
    a++
  )
    (qn.lastIndex = 0),
      qn.test(t[a]) && (a && (!n || qn.lastIndex < n) && (n = qn.lastIndex), (s = s || a), (o = a));
  for (var c = s; c <= o; c++)
    c !== s &&
      (r += `
`),
      (r += t[c].slice(n).replace(/\\"""/g, '"""'));
  return r;
}
function ie() {
  for (
    var e = 0 | ve.charCodeAt(J++);
    e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279;
    e = 0 | ve.charCodeAt(J++)
  )
    if (e === 35) for (; (e = ve.charCodeAt(J++)) !== 10 && e !== 13; );
  J--;
}
var Ze = /[_A-Za-z]\w*/y,
  li = new RegExp(
    '(?:(null|true|false)|\\$(' +
      Ze.source +
      ')|(-?\\d+)((?:\\.\\d+)?[eE][+-]?\\d+|\\.\\d+)?|("""(?:"""|(?:[\\s\\S]*?[^\\\\])"""))|("(?:"|[^\\r\\n]*?[^\\\\]"))|(' +
      Ze.source +
      '))',
    'y'
  ),
  Jt = (function (e) {
    return (
      (e[(e.Const = 1)] = 'Const'),
      (e[(e.Var = 2)] = 'Var'),
      (e[(e.Int = 3)] = 'Int'),
      (e[(e.Float = 4)] = 'Float'),
      (e[(e.BlockString = 5)] = 'BlockString'),
      (e[(e.String = 6)] = 'String'),
      (e[(e.Enum = 7)] = 'Enum'),
      e
    );
  })(Jt || {}),
  m$ = /\\/;
function ls(e) {
  var t, r;
  if (((li.lastIndex = J), ve.charCodeAt(J) === 91)) {
    J++, ie();
    for (var n = []; ve.charCodeAt(J) !== 93; ) n.push(ls(e));
    return J++, ie(), { kind: 'ListValue', values: n };
  } else if (ve.charCodeAt(J) === 123) {
    J++, ie();
    for (var s = []; ve.charCodeAt(J) !== 125; ) {
      if ((t = ot(Ze)) == null || (ie(), ve.charCodeAt(J++) !== 58)) throw Le('ObjectField');
      ie(), s.push({ kind: 'ObjectField', name: { kind: 'Name', value: t }, value: ls(e) });
    }
    return J++, ie(), { kind: 'ObjectValue', fields: s };
  } else if ((r = li.exec(ve)) != null) {
    if (((J = li.lastIndex), ie(), (t = r[Jt.Const]) != null))
      return t === 'null' ? { kind: 'NullValue' } : { kind: 'BooleanValue', value: t === 'true' };
    if ((t = r[Jt.Var]) != null) {
      if (e) throw Le('Variable');
      return { kind: 'Variable', name: { kind: 'Name', value: t } };
    } else if ((t = r[Jt.Int]) != null) {
      var o;
      return (o = r[Jt.Float]) != null
        ? { kind: 'FloatValue', value: t + o }
        : { kind: 'IntValue', value: t };
    } else {
      if ((t = r[Jt.BlockString]) != null)
        return { kind: 'StringValue', value: f$(t.slice(3, -3)), block: !0 };
      if ((t = r[Jt.String]) != null)
        return {
          kind: 'StringValue',
          value: m$.test(t) ? JSON.parse(t) : t.slice(1, -1),
          block: !1,
        };
      if ((t = r[Jt.Enum]) != null) return { kind: 'EnumValue', value: t };
    }
  }
  throw Le('Value');
}
function fd(e) {
  if (ve.charCodeAt(J) === 40) {
    var t = [];
    J++, ie();
    var r;
    do {
      if ((r = ot(Ze)) == null || (ie(), ve.charCodeAt(J++) !== 58)) throw Le('Argument');
      ie(), t.push({ kind: 'Argument', name: { kind: 'Name', value: r }, value: ls(e) });
    } while (ve.charCodeAt(J) !== 41);
    return J++, ie(), t;
  }
}
function Rr(e) {
  if (ve.charCodeAt(J) === 64) {
    var t = [],
      r;
    do {
      if ((J++, (r = ot(Ze)) == null)) throw Le('Directive');
      ie(), t.push({ kind: 'Directive', name: { kind: 'Name', value: r }, arguments: fd(e) });
    } while (ve.charCodeAt(J) === 64);
    return t;
  }
}
function g$() {
  for (var e, t = 0; ve.charCodeAt(J) === 91; ) t++, J++, ie();
  if ((e = ot(Ze)) == null) throw Le('NamedType');
  ie();
  var r = { kind: 'NamedType', name: { kind: 'Name', value: e } };
  do
    if ((ve.charCodeAt(J) === 33 && (J++, ie(), (r = { kind: 'NonNullType', type: r })), t)) {
      if (ve.charCodeAt(J++) !== 93) throw Le('NamedType');
      ie(), (r = { kind: 'ListType', type: r });
    }
  while (t--);
  return r;
}
var ui = new RegExp('(?:(\\.{3})|(' + Ze.source + '))', 'y'),
  Ro = (function (e) {
    return (e[(e.Spread = 1)] = 'Spread'), (e[(e.Name = 2)] = 'Name'), e;
  })(Ro || {});
function us() {
  var e = [],
    t,
    r;
  do
    if (((ui.lastIndex = J), (r = ui.exec(ve)) != null)) {
      if (((J = ui.lastIndex), r[Ro.Spread] != null)) {
        ie();
        var n = ot(Ze);
        if (n != null && n !== 'on')
          ie(),
            e.push({
              kind: 'FragmentSpread',
              name: { kind: 'Name', value: n },
              directives: Rr(!1),
            });
        else {
          if ((ie(), n === 'on')) {
            if ((n = ot(Ze)) == null) throw Le('NamedType');
            ie();
          }
          var s = Rr(!1);
          if (ve.charCodeAt(J++) !== 123) throw Le('InlineFragment');
          ie(),
            e.push({
              kind: 'InlineFragment',
              typeCondition: n ? { kind: 'NamedType', name: { kind: 'Name', value: n } } : void 0,
              directives: s,
              selectionSet: us(),
            });
        }
      } else if ((t = r[Ro.Name]) != null) {
        var o = void 0;
        if ((ie(), ve.charCodeAt(J) === 58)) {
          if ((J++, ie(), (o = t), (t = ot(Ze)) == null)) throw Le('Field');
          ie();
        }
        var a = fd(!1);
        ie();
        var c = Rr(!1),
          l = void 0;
        ve.charCodeAt(J) === 123 && (J++, ie(), (l = us())),
          e.push({
            kind: 'Field',
            alias: o ? { kind: 'Name', value: o } : void 0,
            name: { kind: 'Name', value: t },
            arguments: a,
            directives: c,
            selectionSet: l,
          });
      }
    } else throw Le('SelectionSet');
  while (ve.charCodeAt(J) !== 125);
  return J++, ie(), { kind: 'SelectionSet', selections: e };
}
function y$() {
  var e, t;
  if ((e = ot(Ze)) == null || (ie(), ot(Ze) !== 'on') || (ie(), (t = ot(Ze)) == null))
    throw Le('FragmentDefinition');
  ie();
  var r = Rr(!1);
  if (ve.charCodeAt(J++) !== 123) throw Le('FragmentDefinition');
  return (
    ie(),
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: e },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: t } },
      directives: r,
      selectionSet: us(),
    }
  );
}
var b$ = /(?:query|mutation|subscription|fragment)/y;
function v$(e) {
  var t, r, n;
  if (
    (e &&
      (ie(),
      (t = ot(Ze)),
      (r = (function () {
        if ((ie(), ve.charCodeAt(J) === 40)) {
          var o = [];
          J++, ie();
          var a;
          do {
            if (ve.charCodeAt(J++) !== 36 || (a = ot(Ze)) == null) throw Le('Variable');
            if ((ie(), ve.charCodeAt(J++) !== 58)) throw Le('VariableDefinition');
            ie();
            var c = g$(),
              l = void 0;
            ve.charCodeAt(J) === 61 && (J++, ie(), (l = ls(!0))),
              ie(),
              o.push({
                kind: 'VariableDefinition',
                variable: { kind: 'Variable', name: { kind: 'Name', value: a } },
                type: c,
                defaultValue: l,
                directives: Rr(!0),
              });
          } while (ve.charCodeAt(J) !== 41);
          return J++, ie(), o;
        }
      })()),
      (n = Rr(!1))),
    ve.charCodeAt(J) === 123)
  )
    return (
      J++,
      ie(),
      {
        kind: 'OperationDefinition',
        operation: e || 'query',
        name: t ? { kind: 'Name', value: t } : void 0,
        variableDefinitions: r,
        directives: n,
        selectionSet: us(),
      }
    );
}
function S$(e, t) {
  return (
    (J = 0),
    (function (n, s) {
      var o, a;
      ie();
      var c = [];
      do
        if ((o = ot(b$)) === 'fragment') ie(), c.push(y$());
        else if ((a = v$(o)) != null) c.push(a);
        else throw Le('Document');
      while (J < n.length);
      if (!s) {
        var l;
        return {
          kind: 'Document',
          definitions: c,
          set loc(u) {
            l = u;
          },
          get loc() {
            return (
              l ||
                (l = {
                  start: 0,
                  end: n.length,
                  startToken: void 0,
                  endToken: void 0,
                  source: { body: n, name: 'graphql.web', locationOffset: { line: 1, column: 1 } },
                }),
              l
            );
          },
        };
      }
      return { kind: 'Document', definitions: c };
    })((ve = typeof e.body == 'string' ? e.body : e), t && t.noLocation)
  );
}
var Tc = 0,
  di = new Set();
function _$() {
  function e(t, r) {
    var n = S$(t).definitions,
      s = new Set();
    for (var o of r || [])
      for (var a of o.definitions)
        a.kind === Gn.FRAGMENT_DEFINITION && !s.has(a) && (n.push(a), s.add(a));
    var c;
    (c = n[0].kind === Gn.FRAGMENT_DEFINITION) &&
      n[0].directives &&
      (n[0].directives = n[0].directives.filter((u) => u.name.value !== '_unmask'));
    var l;
    return {
      kind: Gn.DOCUMENT,
      definitions: n,
      get loc() {
        if (!l && c) {
          var u =
            t +
            (function (d) {
              try {
                Tc++;
                var h = '';
                for (var f of d)
                  if (!di.has(f)) {
                    di.add(f);
                    var { loc: g } = f;
                    g && (h += g.source.body);
                  }
                return h;
              } finally {
                --Tc == 0 && di.clear();
              }
            })(r || []);
          return {
            start: 0,
            end: u.length,
            source: { body: u, name: 'GraphQLTada', locationOffset: { line: 1, column: 1 } },
          };
        }
        return l;
      },
      set loc(u) {
        l = u;
      },
    };
  }
  return (
    (e.scalar = function (r, n) {
      return n;
    }),
    (e.persisted = function (r, n) {
      return { kind: Gn.DOCUMENT, definitions: n ? n.definitions : [], documentId: r };
    }),
    e
  );
}
_$();
function a3(e) {
  return ad.getAll().includes(e);
}
var pi = HS,
  w$ = FS.Buffer,
  $$ = function (e) {
    function t(o) {
      var a = e(o);
      return pi.encode(w$.concat([o, a], o.length + 4));
    }
    function r(o) {
      var a = o.slice(0, -4),
        c = o.slice(-4),
        l = e(a);
      if (!((c[0] ^ l[0]) | (c[1] ^ l[1]) | (c[2] ^ l[2]) | (c[3] ^ l[3]))) return a;
    }
    function n(o) {
      var a = pi.decodeUnsafe(o);
      if (a) return r(a);
    }
    function s(o) {
      var a = pi.decode(o),
        c = r(a);
      if (!c) throw new Error('Invalid checksum');
      return c;
    }
    return { encode: t, decode: s, decodeUnsafe: n };
  },
  Ic = VS,
  T$ = $$;
function I$(e) {
  var t = Ic('sha256').update(e).digest();
  return Ic('sha256').update(t).digest();
}
var x$ = T$(I$),
  Oo = x$;
function md(e, t) {
  if (t !== void 0 && e[0] !== t) throw new Error('Invalid network version');
  if (e.length === 33) return { version: e[0], privateKey: e.slice(1, 33), compressed: !1 };
  if (e.length !== 34) throw new Error('Invalid WIF length');
  if (e[33] !== 1) throw new Error('Invalid compression flag');
  return { version: e[0], privateKey: e.slice(1, 33), compressed: !0 };
}
function No(e, t, r) {
  var n = new Ir(r ? 34 : 33);
  return n.writeUInt8(e, 0), t.copy(n, 1), r && (n[33] = 1), n;
}
function E$(e, t) {
  return md(Oo.decode(e), t);
}
function A$(e, t, r) {
  return typeof e == 'number'
    ? Oo.encode(No(e, t, r))
    : Oo.encode(No(e.version, e.privateKey, e.compressed));
}
var c3 = { decode: E$, decodeRaw: md, encode: A$, encodeRaw: No };
const xc = {
  node: void 0,
  web: typeof globalThis == 'object' && 'crypto' in globalThis ? globalThis.crypto : void 0,
};
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const P$ =
  new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!P$) throw new Error('Non little-endian hardware is not supported');
Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
function Ec(e = 32) {
  if (xc.web) return xc.web.getRandomValues(new Uint8Array(e));
  throw new Error("The environment doesn't have randomBytes function");
}
const Ac =
  'Do not return the plaintext from .fold(), convert it to something else inside the callback first.';
var Ct, Rt;
const tc = class tc {
  constructor(t) {
    K(this, Ct);
    K(this, Rt);
    M(this, 'read', (t) => {
      const r = Wn(y(this, Ct), y(this, Rt));
      try {
        t(r);
      } finally {
        this.cleanup(r);
      }
    });
    M(this, 'readAsync', async (t) => {
      const r = Wn(y(this, Ct), y(this, Rt));
      try {
        await t(r);
      } finally {
        this.cleanup(r);
      }
    });
    M(this, 'fold', (t) => {
      const r = Wn(y(this, Ct), y(this, Rt));
      try {
        const n = t(r);
        if (n === r) throw new Error(Ac);
        return n;
      } finally {
        this.cleanup(r);
      }
    });
    M(this, 'foldAsync', async (t) => {
      const r = Wn(y(this, Ct), y(this, Rt));
      try {
        const n = await t(r);
        if (n === r) throw new Error(Ac);
        return n;
      } finally {
        this.cleanup(r);
      }
    });
    M(this, 'cleanup', (t) => {
      const r = Ec(t.length),
        n = Pc(t, r);
      j(this, Rt, r), j(this, Ct, n), t.fill(0);
    });
    const r = t.length,
      n = Ec(r),
      s = Pc(t, n);
    j(this, Rt, n), j(this, Ct, s);
  }
  static from(t) {
    return new tc(t);
  }
};
(Ct = new WeakMap()), (Rt = new WeakMap());
let Mo = tc;
const Pc = (e, t) => {
    const r = e.length,
      n = new Uint8Array(r);
    for (let s = 0; s < r; s++) n[s] = e[s] ^ t[s];
    return n;
  },
  Wn = (e, t) => {
    const r = e.length,
      n = new Uint8Array(r);
    for (let s = 0; s < r; s++) n[s] = e[s] ^ t[s];
    return n;
  };
function l3(e) {
  return Ir.from(e).toString('base64');
}
const [gd, yd, bd] = [[], [], []],
  D$ = BigInt(0),
  pn = BigInt(1),
  k$ = BigInt(2),
  C$ = BigInt(7),
  R$ = BigInt(256),
  O$ = BigInt(113);
for (let e = 0, t = pn, r = 1, n = 0; e < 24; e++) {
  ([r, n] = [n, (2 * r + 3 * n) % 5]),
    gd.push(2 * (5 * n + r)),
    yd.push((((e + 1) * (e + 2)) / 2) % 64);
  let s = D$;
  for (let o = 0; o < 7; o++)
    (t = ((t << pn) ^ ((t >> C$) * O$)) % R$), t & k$ && (s ^= pn << ((pn << BigInt(o)) - pn));
  bd.push(s);
}
const [N$, M$] = re.split(bd, !0),
  Dc = (e, t, r) => (r > 32 ? re.rotlBH(e, t, r) : re.rotlSH(e, t, r)),
  kc = (e, t, r) => (r > 32 ? re.rotlBL(e, t, r) : re.rotlSL(e, t, r));
function U$(e, t = 24) {
  const r = new Uint32Array(10);
  for (let n = 24 - t; n < 24; n++) {
    for (let a = 0; a < 10; a++) r[a] = e[a] ^ e[a + 10] ^ e[a + 20] ^ e[a + 30] ^ e[a + 40];
    for (let a = 0; a < 10; a += 2) {
      const c = (a + 8) % 10,
        l = (a + 2) % 10,
        u = r[l],
        p = r[l + 1],
        d = Dc(u, p, 1) ^ r[c],
        h = kc(u, p, 1) ^ r[c + 1];
      for (let f = 0; f < 50; f += 10) (e[a + f] ^= d), (e[a + f + 1] ^= h);
    }
    let s = e[2],
      o = e[3];
    for (let a = 0; a < 24; a++) {
      const c = yd[a],
        l = Dc(s, o, c),
        u = kc(s, o, c),
        p = gd[a];
      (s = e[p]), (o = e[p + 1]), (e[p] = l), (e[p + 1] = u);
    }
    for (let a = 0; a < 50; a += 10) {
      for (let c = 0; c < 10; c++) r[c] = e[a + c];
      for (let c = 0; c < 10; c++) e[a + c] ^= ~r[(c + 2) % 10] & r[(c + 4) % 10];
    }
    (e[0] ^= N$[n]), (e[1] ^= M$[n]);
  }
  r.fill(0);
}
class Ds extends ud {
  constructor(t, r, n, s = !1, o = 24) {
    if (
      (super(),
      (this.blockLen = t),
      (this.suffix = r),
      (this.outputLen = n),
      (this.enableXOF = s),
      (this.rounds = o),
      (this.pos = 0),
      (this.posOut = 0),
      (this.finished = !1),
      (this.destroyed = !1),
      kt.number(n),
      0 >= this.blockLen || this.blockLen >= 200)
    )
      throw new Error('Sha3 supports only keccak-f1600 function');
    (this.state = new Uint8Array(200)), (this.state32 = mw(this.state));
  }
  keccak() {
    U$(this.state32, this.rounds), (this.posOut = 0), (this.pos = 0);
  }
  update(t) {
    kt.exists(this);
    const { blockLen: r, state: n } = this;
    t = Es(t);
    const s = t.length;
    for (let o = 0; o < s; ) {
      const a = Math.min(r - this.pos, s - o);
      for (let c = 0; c < a; c++) n[this.pos++] ^= t[o++];
      this.pos === r && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished) return;
    this.finished = !0;
    const { state: t, suffix: r, pos: n, blockLen: s } = this;
    (t[n] ^= r), r & 128 && n === s - 1 && this.keccak(), (t[s - 1] ^= 128), this.keccak();
  }
  writeInto(t) {
    kt.exists(this, !1), kt.bytes(t), this.finish();
    const r = this.state,
      { blockLen: n } = this;
    for (let s = 0, o = t.length; s < o; ) {
      this.posOut >= n && this.keccak();
      const a = Math.min(n - this.posOut, o - s);
      t.set(r.subarray(this.posOut, this.posOut + a), s), (this.posOut += a), (s += a);
    }
    return t;
  }
  xofInto(t) {
    if (!this.enableXOF) throw new Error('XOF is not possible for this instance');
    return this.writeInto(t);
  }
  xof(t) {
    return kt.number(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if ((kt.output(t, this), this.finished)) throw new Error('digest() was already called');
    return this.writeInto(t), this.destroy(), t;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    (this.destroyed = !0), this.state.fill(0);
  }
  _cloneInto(t) {
    const { blockLen: r, suffix: n, outputLen: s, rounds: o, enableXOF: a } = this;
    return (
      t || (t = new Ds(r, n, s, a, o)),
      t.state32.set(this.state32),
      (t.pos = this.pos),
      (t.posOut = this.posOut),
      (t.finished = this.finished),
      (t.rounds = o),
      (t.suffix = n),
      (t.outputLen = s),
      (t.enableXOF = a),
      (t.destroyed = this.destroyed),
      t
    );
  }
}
const dr = (e, t, r) => Dn(() => new Ds(t, e, r));
dr(6, 144, 224 / 8);
dr(6, 136, 256 / 8);
dr(6, 104, 384 / 8);
dr(6, 72, 512 / 8);
dr(1, 144, 224 / 8);
dr(1, 136, 256 / 8);
dr(1, 104, 384 / 8);
dr(1, 72, 512 / 8);
const vd = (e, t, r) => bw((n = {}) => new Ds(t, e, n.dkLen === void 0 ? r : n.dkLen, !0));
vd(31, 168, 128 / 8);
vd(31, 136, 256 / 8);
const en = i.object({ blinkUrl: i.string().url(), blinkTitle: i.string().optional() }),
  ke = i
    .string()
    .min(2, { message: 'Must be 2 or more characters long' })
    .regex(/^0x[0-9A-Fa-f]*$/, {
      message: "String must be '0x'-prefixed and followed by valid hex characters",
    }),
  N = i
    .number()
    .transform((e) => `0x${e.toString(16)}`)
    .or(
      ke.min(3, {
        message:
          "Must be 3 or more characters long (should always have at least one digit - zero is '0x0').",
      })
    )
    .refine((e) => (e === '0x0' ? !0 : e[2] !== '0'), {
      message: 'Invalid hex quantity: leading zero digits are not allowed.',
    }),
  Re = ke.refine((e) => e.length % 2 === 0, {
    message: 'Invalid hex-encoded data: must be even number of digits',
  }),
  ds = i.string().transform((e) => {
    const t = Re.safeParse(e);
    return t.success ? t.data : `0x${xt.from(e).toString('hex')}`;
  }),
  Sd = i.union([i.string(), i.number()]).transform((e, t) => {
    if (typeof e == 'number') return e;
    const r = e.startsWith('0x') ? 16 : 10,
      n = parseInt(e, r);
    return (
      Number.isNaN(n) &&
        t.addIssue({ code: i.ZodIssueCode.custom, message: 'Could not parse as LenientInteger' }),
      n
    );
  }),
  ma = (e) =>
    Re.refine((t) => t.length === e * 2 + 2, {
      message: `Invalid byte length. (Expected ${e} bytes)`,
    }),
  se = ke.refine(ju, { message: 'Invalid Ethereum address.' }),
  oe = ma(32),
  _d = ma(256),
  kn = i.object({
    blockHash: oe,
    address: se,
    logIndex: N,
    data: Re,
    removed: i.boolean().optional(),
    topics: i.array(oe),
    blockNumber: N.nullish().default(null),
    transactionIndex: N,
    transactionHash: oe,
  }),
  wd = i.object({
    transactionHash: oe,
    transactionIndex: N,
    blockHash: oe,
    blockNumber: N,
    from: se,
    to: se.nullish().default(null).optional(),
    root: oe.optional(),
    status: i.literal('0x1').or(i.literal('0x0')).optional(),
    cumulativeGasUsed: N,
    gasUsed: N,
    contractAddress: se.nullish().default(null),
    logs: i.array(kn),
    logsBloom: _d,
    effectiveGasPrice: N.optional(),
    type: N.optional(),
  }),
  $d = i.object({
    from: se.optional(),
    chainId: N.optional(),
    to: se.optional(),
    gas: N.optional(),
    gasPrice: N.optional(),
    value: N.optional(),
    data: Re.optional(),
    nonce: N.optional(),
  }),
  er = i.object({ name: i.string(), type: i.string() }),
  ga = i.array(er),
  L$ = i.object({
    chainId: Sd.optional(),
    name: i.string(),
    verifyingContract: se,
    version: i.string().optional(),
  }),
  B$ = i.object({ type: i.string(), name: i.string(), value: i.string() }).array(),
  Cc = i.object({
    domain: L$,
    message: i.record(i.any()),
    primaryType: i.string(),
    types: i.object({ EIP712Domain: ga }).and(i.record(er.array())),
  }),
  Td = i.object({
    chainId: Sd.optional(),
    name: i.string().optional(),
    verifyingContract: se.optional(),
    version: i.string().optional(),
    salt: i.string().optional(),
  }),
  Rc = i.object({
    domain: Td,
    message: i.record(i.any()),
    primaryType: i.string(),
    types: i.object({ EIP712Domain: ga }).and(i.record(er.array())),
  }),
  j$ = i.object({ name: i.literal('owner'), type: i.literal('address') }),
  F$ = i.object({ name: i.literal('spender'), type: i.literal('address') }),
  H$ = i.object({ name: i.literal('value'), type: i.literal('uint256') }),
  V$ = i.object({ name: i.literal('value'), type: i.literal('uint256') }),
  z$ = i.object({ name: i.literal('deadline'), type: i.literal('uint256') }),
  G$ = i
    .tuple([er, er, er, er, er])
    .refine((e) => {
      const t = [j$, F$, H$, V$, z$],
        r = new Set(['owner', 'spender', 'value', 'nonce', 'deadline']);
      for (const n of e)
        for (const s of t) {
          const o = s.safeParse(n);
          o.success && r.delete(o.data.name);
        }
      return r.size === 0;
    })
    .transform(() => [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'nonce', type: 'uint256' },
      { name: 'deadline', type: 'uint256' },
    ]),
  q$ = i.literal('Permit'),
  W$ = i.object({ EIP712Domain: ga, Permit: G$ }),
  Q$ = i.object({ owner: se, spender: se, value: N, nonce: N, deadline: N });
i.object({ domain: Td, primaryType: q$, types: W$, message: Q$ });
var ks = ((e) => ((e.legacy = '0x0'), (e.eip2930 = '0x1'), (e.eip1559 = '0x2'), e))(ks || {});
const Y$ = i.tuple([se, i.array(oe)]),
  Cs = i
    .object({
      chainId: N.optional(),
      data: Re.optional(),
      from: se,
      gas: N.optional(),
      gasPrice: N.optional(),
      nonce: N.optional(),
      to: se.optional(),
      value: N.optional(),
      type: i.nativeEnum(ks).optional(),
      accessList: i.array(Y$).optional(),
      maxPriorityFeePerGas: N.optional(),
      maxFeePerGas: N.optional(),
      gasLimit: N.optional(),
    })
    .transform(
      (e) => (e.gas == null && e.gasLimit != null && ((e.gas = e.gasLimit), delete e.gasLimit), e)
    )
    .brand('EthUnsignedTransactionObject'),
  Cn = i.object({
    blockHash: oe.nullish(),
    blockNumber: N.nullish(),
    from: se,
    gas: N,
    gasPrice: N.nullish(),
    hash: oe,
    input: Re,
    nonce: N,
    to: se.nullish().default(null),
    transactionIndex: N.nullish(),
    value: N,
    v: N,
    r: N,
    s: N,
  }),
  K$ = i.object({
    address: se.optional(),
    balance: N,
    codeHash: oe,
    nonce: N,
    storageHash: oe,
    accountProof: i.array(ke),
    storageProof: i.array(i.object({ key: N, value: N, proof: i.array(ke) })),
  }),
  at = i
    .literal('latest')
    .or(i.literal('earliest'))
    .or(i.literal('pending'))
    .or(i.literal('finalized')),
  Rs = i.object({
    number: N.nullish().default(null),
    hash: oe.nullish().default(null),
    parentHash: oe,
    nonce: ma(8).nullish().default(null),
    sha3Uncles: oe,
    logsBloom: _d.nullish().default(null),
    transactionsRoot: oe,
    stateRoot: oe,
    receiptsRoot: oe,
    miner: se.nullish().default(null),
    mixHash: oe.optional(),
    difficulty: N,
    totalDifficulty: N.nullish().default(null),
    extraData: Re,
    size: N,
    gasLimit: N,
    gasUsed: N,
    timestamp: N,
    transactions: i.array(Cn).or(i.array(oe)),
    uncles: i.array(oe),
    baseFeePerGas: N.optional(),
  }),
  ya = i.enum([
    'CONTINUE_WITH_PHANTOM',
    'CONTINUE_WITH_METAMASK',
    'ALWAYS_USE_PHANTOM',
    'ALWAYS_USE_METAMASK',
  ]),
  Rn = i.string().refine(
    (e) => {
      try {
        return (
          Pn.decode(e).byteLength === 32 &&
          e.match(/^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+$/)
        );
      } catch {
        return !1;
      }
    },
    { message: 'String must be a valid solana public key of 32 bytes' }
  ),
  J$ = i.union([
    i.literal('bip122_p2tr'),
    i.literal('bip122_p2wpkh'),
    i.literal('bip122_p2sh'),
    i.literal('bip122_p2pkh'),
  ]),
  Z$ = i.object({ address: i.string(), publicKey: i.string(), addressType: J$ }),
  ba = Z$.and(i.object({ purpose: i.union([i.literal('payment'), i.literal('ordinals')]) })),
  Os = i.string().refine((e) => eT(e), { message: 'Invalid Sui address format' }),
  X$ = /^0x[a-fA-F0-9]{64}$/;
function eT(e) {
  return e ? X$.test(e) : !1;
}
const va = i.object({ address: Os, publicKey: i.string() }),
  Id = ke.refine(ju, { message: 'Invalid Hypercore address.' });
i.string().refine(
  (e) => {
    try {
      return Pn.decode(e).byteLength === 64;
    } catch {
      return !1;
    }
  },
  { message: 'String must be a valid solana address of 64 bytes' }
);
const Y = i.string().regex(/^[123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ]*$/),
  Pe = i.object({ url: i.string().url(), icon: i.string().nullish().default(null) }),
  tT = i.array(i.any()),
  rT = i
    .unknown()
    .transform((e, t) =>
      typeof e == 'object' && e !== null
        ? e
        : (t.addIssue({ code: i.ZodIssueCode.custom, message: 'Not an object' }), i.NEVER)
    ),
  Ns = i.union([i.null(), i.string(), i.number(), i.boolean(), tT, rT]),
  Sa = i.literal('2.0'),
  Ms = i.union([i.string(), i.number(), i.null()]),
  nT = i.object({ jsonrpc: i.literal('2.0'), id: Ms, method: i.string(), params: Ns.optional() });
i.array(nT);
i.object({ jsonrpc: i.literal('2.0'), method: i.string(), params: Ns });
var He = ((e) => (
  (e[(e.ParseError = -32700)] = 'ParseError'),
  (e[(e.InternalError = -32603)] = 'InternalError'),
  (e[(e.InvalidParams = -32602)] = 'InvalidParams'),
  (e[(e.MethodNotFound = -32601)] = 'MethodNotFound'),
  (e[(e.InvalidRequest = -32600)] = 'InvalidRequest'),
  (e[(e.RequestCancelled = -32800)] = 'RequestCancelled'),
  (e[(e.TransactionRejected = -32003)] = 'TransactionRejected'),
  (e[(e.ResourceUnavailable = -32002)] = 'ResourceUnavailable'),
  (e[(e.InvalidInput = -32e3)] = 'InvalidInput'),
  (e[(e.UserRejectedRequest = 4001)] = 'UserRejectedRequest'),
  (e[(e.Unauthorized = 4100)] = 'Unauthorized'),
  (e[(e.UnsupportedMethod = 4200)] = 'UnsupportedMethod'),
  (e[(e.RateLimited = 4290)] = 'RateLimited'),
  (e[(e.Disconnected = 4900)] = 'Disconnected'),
  (e[(e.ChainDisconnected = 4901)] = 'ChainDisconnected'),
  (e[(e.ExecutionReverted = 3)] = 'ExecutionReverted'),
  e
))(He || {});
const T = i.object({ code: i.nativeEnum(He).or(i.number()), message: i.string() }),
  sT = i.object({ error: T }).or(i.object({ result: Ns })),
  iT = i.object({ jsonrpc: i.literal('2.0'), id: Ms }).and(sT);
i.array(iT);
const _a = i.object({
    domain: i.string().optional(),
    address: i.string().optional(),
    statement: i.string().optional(),
    uri: i.string().optional(),
    version: i.string().optional(),
    chainId: i.string().optional(),
    nonce: i.string().optional(),
    issuedAt: i.string().optional(),
    expirationTime: i.string().optional(),
    notBefore: i.string().optional(),
    requestId: i.string().optional(),
    resources: i.array(i.string()).optional(),
  }),
  oT = i.literal('mainnet'),
  aT = i.literal('testnet'),
  cT = i.literal('devnet'),
  lT = i.literal('localnet'),
  uT = i.enum([oT.value, aT.value, cT.value, lT.value]),
  dT = i.literal('1'),
  pT = i.literal('11155111'),
  xd = i.enum([dT.value, pT.value]),
  hT = i.literal('0x1'),
  fT = i.literal('0xaa36a7'),
  Ed = i.enum([hT.value, fT.value]),
  mT = i.literal('137'),
  gT = i.literal('80002'),
  Ad = i.enum([mT.value, gT.value]),
  yT = i.literal('0x89'),
  bT = i.literal('0x13882'),
  Pd = i.enum([yT.value, bT.value]),
  vT = i.literal('8453'),
  ST = i.literal('84532'),
  Dd = i.enum([vT.value, ST.value]),
  _T = i.literal('0x2105'),
  wT = i.literal('0x14a34'),
  kd = i.enum([_T.value, wT.value]),
  $T = i.literal('143'),
  TT = i.literal('10143'),
  IT = i.literal('41454'),
  xT = i.enum([$T.value, TT.value, IT.value]),
  ET = i.literal('0x8f'),
  AT = i.literal('0x279f'),
  PT = i.literal('0xa1ee'),
  Cd = i.enum([ET.value, AT.value, PT.value]),
  DT = i.literal('mainnet-beta'),
  kT = i.literal('testnet'),
  CT = i.literal('devnet'),
  wa = Y,
  Rd = Y,
  Us = Y,
  Od = Y,
  $a = Y,
  Nd = i.string().url(),
  Ta = i.string().url(),
  Md = i.enum([DT.value, kT.value, CT.value]),
  tn = i.object({ dapp_encryption_public_key: wa, nonce: Us, redirect_link: Ta, payload: Od }),
  On = i.object({ nonce: Us, data: $a }),
  RT = i.object({
    name: i.string(),
    label: i.string().optional(),
    required: i.boolean().optional(),
  }),
  OT = i.object({ message: i.string() }),
  NT = i.object({ href: i.string(), label: i.string(), parameters: i.array(RT).optional() }),
  MT = i.object({ label: i.string(), url: i.string() }),
  Ia = i.object({
    successMessage: i.string().optional(),
    failureMessage: i.string().optional(),
    pendingMessage: i.string().optional(),
    onSuccessAction: MT.optional(),
  }),
  UT = i.object({
    domain: i.string(),
    name: i.string(),
    category: i.string(),
    actionUrl: i.string(),
    icon: i.string(),
    title: i.string(),
    description: i.string(),
    label: i.string(),
    disabled: i.boolean().optional(),
    links: i.object({ actions: i.array(NT) }).optional(),
    error: OT.optional(),
    postAction: Ia.optional(),
  });
function I(e, t) {
  return i.object({ jsonrpc: Sa, id: Ms, method: e, params: t });
}
function x(e, t) {
  return i.object({ jsonrpc: Sa, id: Ms }).and(i.object({ result: e }).or(i.object({ error: t })));
}
function rn(e, t) {
  return i.object({ jsonrpc: Sa, method: e, params: t });
}
function LT(e) {
  return xd.safeParse(e).success;
}
function BT(e) {
  return Ed.safeParse(e).success;
}
function jT(e) {
  return Ad.safeParse(e).success;
}
function FT(e) {
  return Pd.safeParse(e).success;
}
function HT(e) {
  return Dd.safeParse(e).success;
}
function VT(e) {
  return kd.safeParse(e).success;
}
function zT(e) {
  return xT.safeParse(e).success;
}
function GT(e) {
  return Cd.safeParse(e).success;
}
function qT(e) {
  return uT.safeParse(e).success;
}
function u3(e) {
  const t = typeof e == 'string' ? e.replace(/^(eip155:|solana:)/gm, '') : `${e}`;
  return qT(t)
    ? { chainType: 'solana', chainName: 'solana', networkId: t }
    : LT(t)
      ? { chainType: 'eip155', chainName: 'ethereum', networkId: t }
      : BT(t)
        ? {
            chainType: 'eip155',
            chainName: 'ethereum',
            networkId: parseInt(t.substring(2), 16).toString(),
          }
        : jT(t)
          ? { chainType: 'eip155', chainName: 'polygon', networkId: t }
          : FT(t)
            ? {
                chainType: 'eip155',
                chainName: 'polygon',
                networkId: parseInt(t.substring(2), 16).toString(),
              }
            : HT(t)
              ? { chainType: 'eip155', chainName: 'base', networkId: t }
              : VT(t)
                ? {
                    chainType: 'eip155',
                    chainName: 'base',
                    networkId: parseInt(t.substring(2), 16).toString(),
                  }
                : zT(t)
                  ? { chainType: 'eip155', chainName: 'monad', networkId: t }
                  : GT(t)
                    ? {
                        chainType: 'eip155',
                        chainName: 'monad',
                        networkId: parseInt(t.substring(2), 16).toString(),
                      }
                    : null;
}
function d3(e) {
  return xd
    .or(Ad)
    .or(Dd)
    .parse(parseInt(e.substring(2), 16).toString());
}
function p3(e) {
  return Ed.or(Pd)
    .or(kd)
    .or(Cd)
    .parse('0x' + parseInt(e, 10).toString(16));
}
const WT = i.literal('eth_blink_requestAccounts'),
  QT = i.object({ context: en }),
  YT = i.array(se),
  KT = T;
I(WT, QT);
x(YT, KT);
const JT = i.literal('eth_blink_sendTransaction'),
  ZT = i.tuple([Cs, i.object({ context: en })]),
  XT = oe,
  eI = T;
I(JT, ZT);
x(XT, eI);
const tI = i.literal('eth_blink_sign'),
  rI = i.tuple([se, ds, i.object({ context: en })]),
  nI = Re,
  sI = T;
I(tI, rI);
x(nI, sI);
const Ud = i.literal('sol_connect'),
  Ld = i.object({ onlyIfTrusted: i.optional(i.boolean()) }),
  xa = i.object({ publicKey: i.string() }),
  Bd = T,
  iI = I(Ud, Ld),
  oI = x(xa, Bd),
  aI = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Bd, method: Ud, params: Ld, request: iI, response: oI, result: xa },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  cI = i.literal('sol_blink_connect'),
  lI = i.object({ context: en }),
  uI = xa,
  dI = T;
I(cI, lI);
x(uI, dI);
const Ls = i.optional(
  i.object({
    skipPreflight: i.optional(i.boolean()),
    preflightCommitment: i.optional(
      i.union([
        i.literal('processed'),
        i.literal('confirmed'),
        i.literal('finalized'),
        i.literal('recent'),
        i.literal('single'),
        i.literal('singleGossip'),
        i.literal('root'),
        i.literal('max'),
      ])
    ),
    maxRetries: i.optional(i.number()),
    minContextSlot: i.optional(i.number()),
    method: i.optional(
      i.union([i.literal('signAndSendTransaction'), i.literal('signTransaction')])
    ),
  })
);
var jd = ((e) => (
  (e.Connect = 'connect'), (e.Disconnect = 'disconnect'), (e.AccountChanged = 'accountChanged'), e
))(jd || {});
i.nativeEnum(jd);
const Fd = i.literal('sol_signAndSendAllTransactions'),
  Ea = i.object({ transactions: i.array(Y), options: Ls }),
  Aa = i.object({ signatures: i.array(i.union([i.string(), i.null()])), publicKey: i.string() }),
  Hd = T,
  pI = I(Fd, Ea),
  hI = x(Aa, Hd),
  fI = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Hd, method: Fd, params: Ea, request: pI, response: hI, result: Aa },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  mI = i.literal('sol_blink_signAndSendAllTransactions'),
  gI = Ea.merge(i.object({ context: en })),
  yI = Aa,
  bI = T;
I(mI, gI);
x(yI, bI);
const Vd = i.literal('sol_signMessage'),
  Pa = i.object({ message: Y, display: i.union([i.literal('utf8'), i.literal('hex')]) }),
  zd = i.object({ signature: i.string(), publicKey: i.string() }),
  Gd = T,
  vI = I(Vd, Pa),
  SI = x(zd, Gd),
  _I = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Gd, method: Vd, params: Pa, request: vI, response: SI, result: zd },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  wI = i.literal('sol_blink_signMessage'),
  $I = Pa.merge(i.object({ context: en })),
  TI = i.object({ signature: i.string(), publicKey: i.string() }),
  II = T;
I(wI, $I);
x(TI, II);
const qd = i.literal('btc_requestAccounts'),
  Wd = i.tuple([]),
  Qd = i.array(ba),
  Yd = T,
  xI = I(qd, Wd),
  EI = x(Qd, Yd),
  AI = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Yd, method: qd, params: Wd, request: xI, response: EI, result: Qd },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Kd = i.literal('btc_signPSBT'),
  Jd = i.tuple([
    i.instanceof(Uint8Array),
    i.object({
      inputsToSign: i.array(
        i.object({
          address: i.string(),
          signingIndexes: i.array(i.number()),
          sigHash: i.number().optional(),
        })
      ),
      finalize: i.boolean(),
    }),
  ]),
  Zd = i.instanceof(Uint8Array),
  Xd = T,
  PI = I(Kd, Jd),
  DI = x(Zd, Xd),
  kI = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Xd, method: Kd, params: Jd, request: PI, response: DI, result: Zd },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  ep = i.literal('btc_signMessage'),
  tp = i.object({ address: i.string(), message: i.instanceof(Uint8Array) }),
  rp = i.object({ signature: i.instanceof(Uint8Array), signedMessage: i.instanceof(Uint8Array) }),
  np = T,
  CI = I(ep, tp),
  RI = x(rp, np),
  OI = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: np, method: ep, params: tp, request: CI, response: RI, result: rp },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  sp = i.literal('eth_accounts'),
  ip = i.tuple([]),
  op = i.array(se),
  ap = T,
  NI = I(sp, ip),
  MI = x(op, ap),
  cp = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: ap, method: sp, params: ip, request: NI, response: MI, result: op },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  lp = i.literal('eth_blockNumber'),
  up = i.tuple([]),
  dp = N,
  pp = T,
  UI = I(lp, up),
  LI = x(dp, pp),
  hp = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: pp, method: lp, params: up, request: UI, response: LI, result: dp },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  fp = i.literal('eth_call'),
  mp = i.tuple([$d, N.or(at)]),
  gp = Re,
  yp = T,
  BI = I(fp, mp),
  jI = x(gp, yp),
  bp = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: yp, method: fp, params: mp, request: BI, response: jI, result: gp },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  vp = i.literal('eth_cancelPrivateTransaction'),
  Sp = i.tuple([i.object({ txHash: oe })]),
  _p = i.boolean(),
  wp = T,
  FI = I(vp, Sp),
  HI = x(_p, wp),
  $p = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: wp, method: vp, params: Sp, request: FI, response: HI, result: _p },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Tp = i.literal('eth_chainId'),
  Ip = i.tuple([]),
  xp = ke,
  Ep = T,
  VI = I(Tp, Ip),
  zI = x(xp, Ep),
  Ap = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Ep, method: Tp, params: Ip, request: VI, response: zI, result: xp },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Pp = i.literal('eth_estimateGas'),
  Dp = i.tuple([$d]),
  kp = N,
  Cp = T,
  GI = I(Pp, Dp),
  qI = x(kp, Cp),
  Rp = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Cp, method: Pp, params: Dp, request: GI, response: qI, result: kp },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Op = i.literal('eth_feeHistory'),
  Np = i.tuple([i.number(), N.or(at), i.array(i.number()).optional()]),
  Mp = i.object({
    oldestBlock: i.number(),
    reward: i.array(i.tuple([N, N])).optional(),
    baseFeePerGas: i.array(N),
    gasUsedRatio: i.array(i.number()),
  }),
  Up = T,
  WI = I(Op, Np),
  QI = x(Mp, Up),
  Lp = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Up, method: Op, params: Np, request: WI, response: QI, result: Mp },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Bp = i.literal('eth_gasPrice'),
  jp = i.tuple([]),
  Fp = N,
  Hp = T,
  YI = I(Bp, jp),
  KI = x(Fp, Hp),
  Vp = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Hp, method: Bp, params: jp, request: YI, response: KI, result: Fp },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  zp = i.literal('eth_getBalance'),
  Gp = i.tuple([se, N.or(at)]),
  qp = N,
  Wp = T,
  JI = I(zp, Gp),
  ZI = x(qp, Wp),
  Qp = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Wp, method: zp, params: Gp, request: JI, response: ZI, result: qp },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Yp = i.literal('eth_getBlockByHash'),
  Kp = i.tuple([oe, i.boolean()]),
  Jp = Rs,
  Zp = T,
  XI = I(Yp, Kp),
  ex = x(Jp, Zp),
  Xp = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Zp, method: Yp, params: Kp, request: XI, response: ex, result: Jp },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  eh = i.literal('eth_getBlockByNumber'),
  th = i.tuple([N.or(at), i.boolean()]),
  rh = Rs,
  nh = T,
  tx = I(eh, th),
  rx = x(rh, nh),
  sh = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: nh, method: eh, params: th, request: tx, response: rx, result: rh },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  ih = i.literal('eth_getBlockReceipts'),
  oh = i.tuple([oe.or(N).or(at)]),
  ah = i.array(wd),
  ch = T,
  nx = I(ih, oh),
  sx = x(ah, ch),
  lh = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: ch, method: ih, params: oh, request: nx, response: sx, result: ah },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  uh = i.literal('eth_getBlockTransactionCountByHash'),
  dh = i.tuple([oe]),
  ph = N,
  hh = T,
  ix = I(uh, dh),
  ox = x(ph, hh),
  fh = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: hh, method: uh, params: dh, request: ix, response: ox, result: ph },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  mh = i.literal('eth_getBlockTransactionCountByNumber'),
  gh = i.tuple([N]),
  yh = N,
  bh = T,
  ax = I(mh, gh),
  cx = x(yh, bh),
  vh = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: bh, method: mh, params: gh, request: ax, response: cx, result: yh },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Sh = i.literal('eth_getCode'),
  _h = i.tuple([se, i.union([N, at])]),
  wh = Re,
  $h = T,
  lx = I(Sh, _h),
  ux = x(wh, $h),
  Th = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: $h, method: Sh, params: _h, request: lx, response: ux, result: wh },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Ih = i.literal('eth_getFilterChanges'),
  xh = i.tuple([N]),
  Eh = i.array(kn),
  Ah = T,
  dx = I(Ih, xh),
  px = x(Eh, Ah),
  Ph = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Ah, method: Ih, params: xh, request: dx, response: px, result: Eh },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Dh = i.literal('eth_getFilterLogs'),
  kh = i.tuple([N]),
  Ch = i.array(kn),
  Rh = T,
  hx = I(Dh, kh),
  fx = x(Ch, Rh),
  Oh = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Rh, method: Dh, params: kh, request: hx, response: fx, result: Ch },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Nh = i.literal('eth_getLogs'),
  Mh = i.tuple([
    i.object({
      fromBlock: N.or(at).optional(),
      toBlock: i.string().optional(),
      address: se.optional(),
      topics: i.array(oe).optional(),
      blockHash: oe.optional(),
    }),
  ]),
  Uh = i.array(kn),
  Lh = T,
  mx = I(Nh, Mh),
  gx = x(Uh, Lh),
  Bh = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Lh, method: Nh, params: Mh, request: mx, response: gx, result: Uh },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  jh = i.literal('eth_getProof'),
  Fh = i.tuple([se, i.array(oe), N.or(at)]),
  Hh = K$,
  Vh = T,
  yx = I(jh, Fh),
  bx = x(Hh, Vh),
  zh = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Vh, method: jh, params: Fh, request: yx, response: bx, result: Hh },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Gh = i.literal('eth_getStorageAt'),
  qh = i.tuple([se, N, N.or(at)]),
  Wh = Re,
  Qh = T,
  vx = I(Gh, qh),
  Sx = x(Wh, Qh),
  Yh = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Qh, method: Gh, params: qh, request: vx, response: Sx, result: Wh },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Kh = i.literal('eth_getTransactionByBlockHashAndIndex'),
  Jh = i.tuple([oe, N]),
  Zh = Cn.nullish().default(null),
  Xh = T,
  _x = I(Kh, Jh),
  wx = x(Zh, Xh),
  ef = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Xh, method: Kh, params: Jh, request: _x, response: wx, result: Zh },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  tf = i.literal('eth_getTransactionByBlockNumberAndIndex'),
  rf = i.tuple([i.string(), N]),
  nf = Cn,
  sf = T,
  $x = I(tf, rf),
  Tx = x(nf, sf),
  of = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: sf, method: tf, params: rf, request: $x, response: Tx, result: nf },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  af = i.literal('eth_getTransactionByHash'),
  cf = i.tuple([oe]),
  lf = Cn.nullable(),
  uf = T,
  Ix = I(af, cf),
  xx = x(lf, uf),
  df = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: uf, method: af, params: cf, request: Ix, response: xx, result: lf },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  pf = i.literal('eth_getTransactionCount'),
  hf = i.tuple([se, N.or(at)]),
  ff = N,
  mf = T,
  Ex = I(pf, hf),
  Ax = x(ff, mf),
  gf = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: mf, method: pf, params: hf, request: Ex, response: Ax, result: ff },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  yf = i.literal('eth_getTransactionReceipt'),
  bf = i.tuple([oe]),
  vf = wd.nullish().default(null),
  Sf = T,
  Px = I(yf, bf),
  Dx = x(vf, Sf),
  _f = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Sf, method: yf, params: bf, request: Px, response: Dx, result: vf },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  wf = i.literal('eth_getUncleByBlockHashAndIndex'),
  $f = i.tuple([N.or(at), N]),
  Tf = Rs,
  If = T,
  kx = I(wf, $f),
  Cx = x(Tf, If),
  xf = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: If, method: wf, params: $f, request: kx, response: Cx, result: Tf },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Ef = i.literal('eth_getUncleByBlockNumberAndIndex'),
  Af = i.tuple([N.or(at), N]),
  Pf = Rs,
  Df = T,
  Rx = I(Ef, Af),
  Ox = x(Pf, Df),
  kf = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Df, method: Ef, params: Af, request: Rx, response: Ox, result: Pf },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Cf = i.literal('eth_getUncleCountByBlockHash'),
  Rf = i.tuple([oe]),
  Of = N,
  Nf = T,
  Nx = I(Cf, Rf),
  Mx = x(Of, Nf),
  Mf = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Nf, method: Cf, params: Rf, request: Nx, response: Mx, result: Of },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Uf = i.literal('eth_getUncleCountByBlockNumber'),
  Lf = i.tuple([N.or(at)]),
  Bf = N,
  jf = T,
  Ux = I(Uf, Lf),
  Lx = x(Bf, jf),
  Ff = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: jf, method: Uf, params: Lf, request: Ux, response: Lx, result: Bf },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Hf = i.literal('eth_maxPriorityFeePerGas'),
  Vf = i.tuple([]),
  zf = N,
  Gf = T,
  Bx = I(Hf, Vf),
  jx = x(zf, Gf),
  qf = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Gf, method: Hf, params: Vf, request: Bx, response: jx, result: zf },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Wf = i.literal('eth_newBlockFilter'),
  Qf = i.tuple([]),
  Yf = N,
  Kf = T,
  Fx = I(Wf, Qf),
  Hx = x(Yf, Kf),
  Jf = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Kf, method: Wf, params: Qf, request: Fx, response: Hx, result: Yf },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Zf = i.literal('eth_newFilter'),
  Xf = i.tuple([
    i.object({
      fromBlock: N.optional(),
      toBlock: N.optional(),
      address: se.or(i.array(se)).optional(),
      topics: i
        .array(
          Re.nullish()
            .default(null)
            .or(i.array(Re.nullish().default(null)))
        )
        .optional(),
    }),
  ]),
  em = N,
  tm = T,
  Vx = I(Zf, Xf),
  zx = x(em, tm),
  rm = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: tm, method: Zf, params: Xf, request: Vx, response: zx, result: em },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  nm = i.literal('eth_newPendingTransactionFilter'),
  sm = i.tuple([]),
  im = N,
  om = T,
  Gx = I(nm, sm),
  qx = x(im, om),
  am = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: om, method: nm, params: sm, request: Gx, response: qx, result: im },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  cm = i.literal('personal_sign'),
  lm = i.union([i.tuple([ds, se]), i.tuple([ds, se, i.unknown()])]),
  um = Re,
  dm = T,
  Wx = I(cm, lm),
  Qx = x(um, dm),
  pm = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: dm, method: cm, params: lm, request: Wx, response: Qx, result: um },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  hm = i.literal('eth_protocolVersion'),
  fm = i.tuple([]),
  mm = i.string(),
  gm = T,
  Yx = I(hm, fm),
  Kx = x(mm, gm),
  ym = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: gm, method: hm, params: fm, request: Yx, response: Kx, result: mm },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  bm = i.literal('eth_requestAccounts'),
  vm = i.tuple([]),
  Sm = i.array(se),
  _m = T,
  Jx = I(bm, vm),
  Zx = x(Sm, _m),
  wm = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: _m, method: bm, params: vm, request: Jx, response: Zx, result: Sm },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  $m = i.literal('eth_sendPrivateTransaction'),
  Tm = i.tuple([
    i.object({
      tx: oe,
      maxBlockNumber: N.optional(),
      preferences: i.object({ fast: i.boolean() }).optional(),
    }),
  ]),
  Im = oe,
  xm = T,
  Xx = I($m, Tm),
  eE = x(Im, xm),
  Em = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: xm, method: $m, params: Tm, request: Xx, response: eE, result: Im },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Am = i.literal('eth_sendRawTransaction'),
  Pm = i.tuple([Re]),
  Dm = oe,
  km = T,
  tE = I(Am, Pm),
  rE = x(Dm, km),
  Cm = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: km, method: Am, params: Pm, request: tE, response: rE, result: Dm },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Rm = i.literal('eth_sendTransaction'),
  Om = i.tuple([Cs]),
  Nm = oe,
  Mm = T,
  nE = I(Rm, Om),
  sE = x(Nm, Mm),
  Um = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Mm, method: Rm, params: Om, request: nE, response: sE, result: Nm },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Lm = i.literal('eth_sign'),
  Bm = i.tuple([se, ds]),
  jm = Re,
  Fm = T,
  iE = I(Lm, Bm),
  oE = x(jm, Fm),
  Hm = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Fm, method: Lm, params: Bm, request: iE, response: oE, result: jm },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Vm = i.literal('eth_signTransaction'),
  zm = i.tuple([Cs]),
  Gm = Re,
  qm = T,
  aE = I(Vm, zm),
  cE = x(Gm, qm),
  lE = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: qm, method: Vm, params: zm, request: aE, response: cE, result: Gm },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Wm = i.literal('eth_signTypedData'),
  Qm = i.tuple([B$, se]),
  Ym = Re,
  Km = T,
  uE = I(Wm, Qm),
  dE = x(Ym, Km),
  Jm = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Km, method: Wm, params: Qm, request: uE, response: dE, result: Ym },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Zm = i.literal('eth_signTypedData_v3'),
  Xm = i.tuple([
    se,
    i
      .string()
      .transform((e, t) => {
        try {
          const r = JSON.parse(e);
          return Cc.parse(r);
        } catch (r) {
          return (
            t.addIssue({
              code: i.ZodIssueCode.custom,
              message: 'Invalid typed data:' + r.message,
              fatal: !0,
            }),
            i.NEVER
          );
        }
      })
      .or(Cc),
  ]),
  eg = Re,
  tg = T,
  pE = I(Zm, Xm),
  hE = x(eg, tg),
  rg = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: tg, method: Zm, params: Xm, request: pE, response: hE, result: eg },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  ng = i.literal('eth_signTypedData_v4'),
  sg = i.tuple([
    se,
    i
      .string()
      .transform((e, t) => {
        try {
          const r = JSON.parse(e);
          return Rc.parse(r);
        } catch (r) {
          return (
            t.addIssue({
              code: i.ZodIssueCode.custom,
              message: 'Invalid typed data:' + r.message,
              fatal: !0,
            }),
            i.NEVER
          );
        }
      })
      .or(Rc),
  ]),
  ig = Re,
  og = T,
  fE = I(ng, sg),
  mE = x(ig, og),
  ag = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: og, method: ng, params: sg, request: fE, response: mE, result: ig },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  cg = i.literal('eth_subscribe'),
  lg = i.any(),
  ug = i.union([
    ke,
    i.object({ result: Cn, subscription: ke }),
    i.object({ result: oe, subscription: ke }),
    i.object({
      result: i.object({
        difficulty: ke,
        extraData: ke,
        gasLimit: ke,
        gasUsed: ke,
        logsBloom: ke,
        miner: se,
        nonce: ke,
        number: ke,
        parentHash: oe,
        receiptRoot: oe,
        sha3Uncles: oe,
        stateRoot: oe,
        timestamp: ke,
        transactionsRoot: oe,
      }),
      subscription: ke,
    }),
    i.object({ result: kn, subscription: ke }),
  ]),
  dg = T,
  gE = I(cg, lg),
  yE = x(ug, dg),
  pg = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: dg, method: cg, params: lg, request: gE, response: yE, result: ug },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  hg = i.literal('eth_syncing'),
  fg = i.tuple([]),
  mg = i.union([i.object({ currentBlock: N, highestBlock: N, startingBlock: N }), i.literal(!1)]),
  gg = T,
  bE = I(hg, fg),
  vE = x(mg, gg),
  yg = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: gg, method: hg, params: fg, request: bE, response: vE, result: mg },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  bg = i.literal('eth_uninstallFilter'),
  vg = i.tuple([N]),
  Sg = i.boolean(),
  _g = T,
  SE = I(bg, vg),
  _E = x(Sg, _g),
  wg = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: _g, method: bg, params: vg, request: SE, response: _E, result: Sg },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  $g = i.literal('eth_unsubscribe'),
  Tg = i.any(),
  Ig = i.boolean(),
  xg = T,
  wE = I($g, Tg),
  $E = x(Ig, xg),
  Eg = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: xg, method: $g, params: Tg, request: wE, response: $E, result: Ig },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Ag = i.literal('net_listening'),
  Pg = i.tuple([]),
  Dg = i.boolean(),
  kg = T,
  TE = I(Ag, Pg),
  IE = x(Dg, kg),
  Cg = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: kg, method: Ag, params: Pg, request: TE, response: IE, result: Dg },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Rg = i.literal('net_version'),
  Og = i.tuple([]),
  Ng = i.string(),
  Mg = T,
  xE = I(Rg, Og),
  EE = x(Ng, Mg),
  Ug = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Mg, method: Rg, params: Og, request: xE, response: EE, result: Ng },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Lg = i.literal('wallet_addEthereumChain'),
  Bg = i.tuple([
    i.object({
      chainId: ke,
      chainName: i.string(),
      nativeCurrency: i.object({
        name: i.string(),
        symbol: i.string().refine(
          (e) => {
            const { length: t } = e;
            return t >= 2 && t <= 6;
          },
          { message: 'Value is not a valid symbol.' }
        ),
        decimals: i.number(),
      }),
      rpcUrls: i.array(i.string()),
      blockExplorerUrls: i.union([i.tuple([i.string()]), i.null()]).optional(),
      iconUrls: i.array(i.string()).optional(),
    }),
  ]),
  jg = i.null(),
  Fg = T,
  AE = I(Lg, Bg),
  PE = x(jg, Fg),
  Hg = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Fg, method: Lg, params: Bg, request: AE, response: PE, result: jg },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Vg = i.literal('wallet_selectEthereumProvider'),
  zg = i.tuple([]),
  Gg = ya,
  qg = T,
  DE = I(Vg, zg),
  kE = x(Gg, qg),
  Wg = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: qg, method: Vg, params: zg, request: DE, response: kE, result: Gg },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Qg = i.literal('wallet_switchEthereumChain'),
  Yg = i.tuple([i.object({ chainId: ke })]),
  Kg = i.null(),
  Jg = T,
  CE = I(Qg, Yg),
  RE = x(Kg, Jg),
  Zg = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Jg, method: Qg, params: Yg, request: CE, response: RE, result: Kg },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Xg = i.literal('wallet_watchAsset'),
  ey = i.object({
    type: i.literal('ERC20'),
    options: i.object({ address: se, symbol: i.string(), decimals: i.number(), image: i.string() }),
  }),
  ty = i.boolean(),
  ry = T,
  OE = I(Xg, ey),
  NE = x(ty, ry),
  ME = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: ry, method: Xg, params: ey, request: OE, response: NE, result: ty },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  ny = i.literal('web3_clientVersion'),
  sy = i.tuple([]),
  iy = i.string(),
  oy = T,
  UE = I(ny, sy),
  LE = x(iy, oy),
  ay = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: oy, method: ny, params: sy, request: UE, response: LE, result: iy },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  cy = i.literal('web3_sha3'),
  ly = i.tuple([Re]),
  uy = Re,
  dy = T,
  BE = I(cy, ly),
  jE = x(uy, dy),
  py = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: dy, method: cy, params: ly, request: BE, response: jE, result: uy },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  FE = i.record(i.string(), i.any()),
  HE = i.record(i.string(), FE),
  VE = i.object({ parentCapability: i.string(), date: i.number().optional() }),
  hy = i.literal('wallet_requestPermissions'),
  fy = i.tuple([HE]),
  my = i.array(VE),
  gy = T,
  zE = I(hy, fy),
  GE = x(my, gy),
  yy = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: gy, method: hy, params: fy, request: zE, response: GE, result: my },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  qE = i.object({ type: i.string(), value: i.any() }),
  WE = i.object({ invoker: i.string().url(), parentCapability: i.string(), caveats: i.array(qE) }),
  by = i.literal('wallet_getPermissions'),
  vy = i.tuple([]),
  Sy = i.array(WE),
  _y = T,
  QE = I(by, vy),
  YE = x(Sy, _y),
  wy = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: _y, method: by, params: vy, request: QE, response: YE, result: Sy },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  h3 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        eth_accounts: cp,
        eth_blockNumber: hp,
        eth_call: bp,
        eth_cancelPrivateTransaction: $p,
        eth_chainId: Ap,
        eth_estimateGas: Rp,
        eth_feeHistory: Lp,
        eth_gasPrice: Vp,
        eth_getBalance: Qp,
        eth_getBlockByHash: Xp,
        eth_getBlockByNumber: sh,
        eth_getBlockReceipts: lh,
        eth_getBlockTransactionCountByHash: fh,
        eth_getBlockTransactionCountByNumber: vh,
        eth_getCode: Th,
        eth_getFilterChanges: Ph,
        eth_getFilterLogs: Oh,
        eth_getLogs: Bh,
        eth_getProof: zh,
        eth_getStorageAt: Yh,
        eth_getTransactionByBlockHashAndIndex: ef,
        eth_getTransactionByBlockNumberAndIndex: of,
        eth_getTransactionByHash: df,
        eth_getTransactionCount: gf,
        eth_getTransactionReceipt: _f,
        eth_getUncleByBlockHashAndIndex: xf,
        eth_getUncleByBlockNumberAndIndex: kf,
        eth_getUncleCountByBlockHash: Mf,
        eth_getUncleCountByBlockNumber: Ff,
        eth_maxPriorityFeePerGas: qf,
        eth_newBlockFilter: Jf,
        eth_newFilter: rm,
        eth_newPendingTransactionFilter: am,
        eth_protocolVersion: ym,
        eth_requestAccounts: wm,
        eth_sendPrivateTransaction: Em,
        eth_sendRawTransaction: Cm,
        eth_sendTransaction: Um,
        eth_sign: Hm,
        eth_signTransaction: lE,
        eth_signTypedData: Jm,
        eth_signTypedData_v3: rg,
        eth_signTypedData_v4: ag,
        eth_subscribe: pg,
        eth_syncing: yg,
        eth_uninstallFilter: wg,
        eth_unsubscribe: Eg,
        net_listening: Cg,
        net_version: Ug,
        personal_sign: pm,
        wallet_addEthereumChain: Hg,
        wallet_getPermissions: wy,
        wallet_requestPermissions: yy,
        wallet_selectEthereumProvider: Wg,
        wallet_switchEthereumChain: Zg,
        wallet_watchAsset: ME,
        web3_clientVersion: ay,
        web3_sha3: py,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  KE = i.literal('phantom_accountChanged'),
  JE = i
    .object({
      evm: i.optional(se),
      sol: i.optional(Rn),
      btc: i.array(ba).optional(),
      sui: i.optional(va),
    })
    .nullish()
    .default(null);
rn(KE, JE);
const ZE = i.literal('phantom_metaMaskOverrideSettingsChanged'),
  XE = i.null();
rn(ZE, XE);
const eA = i.literal('phantom_chainChanged'),
  tA = i.object({ evm: N }).nullish().default(null);
rn(eA, tA);
const rA = i.literal('phantom_dappIcon'),
  nA = i.string().nullish().default(null);
rn(rA, nA);
const sA = i.literal('phantom_dappMeta'),
  iA = i.object({
    title: i.string(),
    url: i.string(),
    icons: i
      .object({ href: i.string(), size: i.object({ width: i.number(), height: i.number() }) })
      .array(),
  });
rn(sA, iA);
const oA = i.literal('phantom_trustRevoked'),
  aA = i
    .object({
      evm: i.optional(se),
      sol: i.optional(Rn),
      btc: i.array(ba).optional(),
      sui: i.optional(va),
    })
    .nullish()
    .default(null);
rn(oA, aA);
const $y = i.literal('phantom_deep_link_browse'),
  Ty = i.object({
    url: i.string().refine(
      (e) => {
        try {
          const t = decodeURIComponent(e);
          return R1(t);
        } catch {
          return !1;
        }
      },
      {
        message:
          'The browse URL is improperly encoded, uses an unsafe protocol (must be HTTP/HTTPS), or is otherwise invalid.',
        path: ['url'],
      }
    ),
    ref: i.string(),
  }),
  Iy = i.null(),
  xy = T,
  cA = I($y, Ty),
  lA = x(Iy, xy),
  uA = 'browse/:url',
  dA = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        error: xy,
        method: $y,
        params: Ty,
        path: uA,
        request: cA,
        response: lA,
        result: Iy,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Ey = i.literal('phantom_deep_link_swap'),
  Ay = i.object({ buy: i.string(), sell: i.string().optional(), amount: i.string().optional() }),
  Py = i.null(),
  Dy = T,
  pA = I(Ey, Ay),
  hA = x(Py, Dy),
  fA = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Dy, method: Ey, params: Ay, request: pA, response: hA, result: Py },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  ky = i.literal('phantom_deep_link_fungible'),
  Cy = i.object({ token: i.string() }),
  Ry = i.null(),
  Oy = T,
  mA = I(ky, Cy),
  gA = x(Ry, Oy),
  yA = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Oy, method: ky, params: Cy, request: mA, response: gA, result: Ry },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Ny = i.literal('phantom_deep_link_user'),
  My = i.object({ username: i.string(), action: i.enum(['send']).optional() }),
  Uy = i.null(),
  Ly = T,
  bA = I(Ny, My),
  vA = x(Uy, Ly),
  SA = 'user/:username{/:action}',
  _A = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        error: Ly,
        method: Ny,
        params: My,
        path: SA,
        request: bA,
        response: vA,
        result: Uy,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  By = i.literal('phantom_deep_link_notification_center'),
  jy = i.object({}),
  Fy = i.null(),
  Hy = T,
  wA = I(By, jy),
  $A = x(Fy, Hy),
  TA = 'notification_center',
  IA = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        error: Hy,
        method: By,
        params: jy,
        path: TA,
        request: wA,
        response: $A,
        result: Fy,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Vy = i.literal('phantom_deep_link_connect'),
  zy = i.object({
    app_url: Nd,
    dapp_encryption_public_key: wa,
    redirect_link: Ta,
    cluster: Md.optional(),
  }),
  Gy = i.object({ phantom_encryption_public_key: Rd, nonce: Us, data: $a }),
  qy = T,
  xA = I(Vy, zy),
  EA = x(Gy, qy),
  AA = i.object({ public_key: Y, session: Y }),
  PA = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        error: qy,
        method: Vy,
        params: zy,
        request: xA,
        response: EA,
        responsePayload: AA,
        result: Gy,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Wy = i.literal('phantom_deep_link_disconnect'),
  Qy = tn,
  Yy = i.null(),
  Ky = T,
  DA = I(Wy, Qy),
  kA = x(Yy, Ky),
  CA = i.object({ session: Y }),
  RA = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        error: Ky,
        method: Wy,
        params: Qy,
        request: DA,
        requestPayload: CA,
        response: kA,
        result: Yy,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Jy = i.literal('phantom_deep_link_signMessage'),
  Zy = tn,
  Xy = On,
  eb = T,
  OA = I(Jy, Zy),
  NA = x(Xy, eb),
  MA = i.object({
    session: Y,
    message: Y,
    display: i.union([i.literal('utf8'), i.literal('hex')]).optional(),
  }),
  UA = i.object({ signature: Y, publicKey: Y }),
  LA = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        error: eb,
        method: Jy,
        params: Zy,
        request: OA,
        requestPayload: MA,
        response: NA,
        responsePayload: UA,
        result: Xy,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  tb = i.literal('phantom_deep_link_signIn'),
  rb = i.object({
    app_url: Nd,
    dapp_encryption_public_key: wa,
    redirect_link: Ta,
    cluster: Md.optional(),
    payload: Od,
  }),
  nb = i.object({ phantom_encryption_public_key: Rd, nonce: Us, data: $a }),
  sb = T,
  BA = I(tb, rb),
  jA = x(nb, sb),
  FA = _a,
  HA = i.object({ address: Y, signedMessage: Y, signature: Y, session: Y }),
  VA = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        error: sb,
        method: tb,
        params: rb,
        request: BA,
        requestPayload: FA,
        response: jA,
        responsePayload: HA,
        result: nb,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  ib = i.literal('phantom_deep_link_signTransaction'),
  ob = tn,
  ab = On,
  cb = T,
  zA = I(ib, ob),
  GA = x(ab, cb),
  qA = i.object({ session: Y, transaction: Y }),
  WA = i.object({ transaction: Y }),
  QA = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        error: cb,
        method: ib,
        params: ob,
        request: zA,
        requestPayload: qA,
        response: GA,
        responsePayload: WA,
        result: ab,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  lb = i.literal('phantom_deep_link_signAllTransactions'),
  ub = tn,
  db = On,
  pb = T,
  YA = I(lb, ub),
  KA = x(db, pb),
  JA = i.object({ session: Y, transactions: i.array(Y) }),
  ZA = i.object({ transactions: i.array(Y) }),
  XA = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        error: pb,
        method: lb,
        params: ub,
        request: YA,
        requestPayload: JA,
        response: KA,
        responsePayload: ZA,
        result: db,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  hb = i.literal('phantom_deep_link_signAndSendTransaction'),
  fb = tn,
  mb = On,
  gb = T,
  eP = I(hb, fb),
  tP = x(mb, gb),
  rP = i.object({ session: Y, transaction: Y, sendOptions: Ls.optional() }),
  nP = i.object({ signature: Y }),
  sP = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        error: gb,
        method: hb,
        params: fb,
        request: eP,
        requestPayload: rP,
        response: tP,
        responsePayload: nP,
        result: mb,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  yb = i.literal('phantom_deep_link_signAndSendAllTransactions'),
  bb = tn,
  vb = On,
  Sb = T,
  iP = I(yb, bb),
  oP = x(vb, Sb),
  aP = i.object({ session: Y, transactions: i.array(Y), sendOptions: Ls.optional() }),
  cP = i.object({ signatures: i.array(i.union([Y, i.null()])) }),
  lP = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        error: Sb,
        method: yb,
        params: bb,
        request: iP,
        requestPayload: aP,
        response: oP,
        responsePayload: cP,
        result: vb,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  _b = i.literal('phantom_deep_link_tokens'),
  wb = i.object({
    chain: i.string(),
    address: i.string().optional(),
    referralId: i.string().optional(),
  }),
  $b = i.null(),
  Tb = T,
  uP = I(_b, wb),
  dP = x($b, Tb),
  pP = 'tokens/:chain{/:address}',
  hP = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        error: Tb,
        method: _b,
        params: wb,
        path: pP,
        request: uP,
        response: dP,
        result: $b,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Ib = i.literal('phantom_deep_link_onboard'),
  xb = i.object({ value: i.string().optional(), accounts: i.string().optional() }),
  Eb = i.null(),
  Ab = T,
  fP = I(Ib, xb),
  mP = x(Eb, Ab),
  gP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Ab, method: Ib, params: xb, request: fP, response: mP, result: Eb },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Pb = i.literal('phantom_deep_link_onramp'),
  Db = i.object({
    buy: i.string(),
    amount: i.string().optional(),
    redirectURL: i.string().url().optional(),
  }),
  kb = i.null(),
  Cb = T,
  yP = I(Pb, Db),
  bP = x(kb, Cb),
  vP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Cb, method: Pb, params: Db, request: yP, response: bP, result: kb },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Rb = i.literal('phantom_deep_link_navigate'),
  Ob = i.object({ route: i.string(), params: i.any().optional() }),
  Nb = i.null(),
  Mb = T,
  SP = I(Rb, Ob),
  _P = x(Nb, Mb),
  wP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Mb, method: Rb, params: Ob, request: SP, response: _P, result: Nb },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Ub = i.literal('phantom_deep_link_social'),
  Lb = i.object({}),
  Bb = i.null(),
  jb = T,
  $P = I(Ub, Lb),
  TP = x(Bb, jb),
  IP = 'social',
  xP = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        error: jb,
        method: Ub,
        params: Lb,
        path: IP,
        request: $P,
        response: TP,
        result: Bb,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  );
var Fb = ((e) => (
  (e.BitcoinTaproot = 'bip122_p2tr'),
  (e.BitcoinNativeSegwit = 'bip122_p2wpkh'),
  (e.BitcoinNestedSegwit = 'bip122_p2sh'),
  (e.BitcoinLegacy = 'bip122_p2pkh'),
  (e.Solana = 'solana'),
  (e.EVM = 'eip155'),
  (e.Sui = 'sui'),
  e
))(Fb || {});
const EP = i.object({ type: i.nativeEnum(Fb), address: i.string() }),
  Hb = i.literal('phantom_getUser'),
  Vb = i.object({}),
  zb = i
    .object({ addresses: i.array(EP) })
    .nullish()
    .default(null),
  Gb = T,
  AP = I(Hb, Vb),
  PP = x(zb, Gb),
  DP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Gb, method: Hb, params: Vb, request: AP, response: PP, result: zb },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  qb = i.literal('phantom_login'),
  Wb = i.object({}),
  Qb = i.null(),
  Yb = T,
  kP = I(qb, Wb),
  CP = x(Qb, Yb),
  RP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Yb, method: qb, params: Wb, request: kP, response: CP, result: Qb },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Kb = i.literal('phantom_logout'),
  Jb = i.object({}),
  Zb = i.null(),
  Xb = T,
  OP = I(Kb, Jb),
  NP = x(Zb, Xb),
  MP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Xb, method: Kb, params: Jb, request: OP, response: NP, result: Zb },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  e0 = i.literal('sol_disconnect'),
  t0 = Ns.optional(),
  r0 = i.null(),
  n0 = T,
  UP = I(e0, t0),
  LP = x(r0, n0),
  BP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: n0, method: e0, params: t0, request: UP, response: LP, result: r0 },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  s0 = i.literal('sol_signAllTransactions'),
  i0 = i.object({ transactions: i.array(Y) }),
  o0 = i.array(
    i.object({
      signature: i.string(),
      transaction: Y,
      version: i.union([i.literal('legacy'), i.number()]),
    })
  ),
  a0 = T,
  jP = I(s0, i0),
  FP = x(o0, a0),
  HP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: a0, method: s0, params: i0, request: jP, response: FP, result: o0 },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  c0 = i.literal('sol_signAndSendTransaction'),
  l0 = i.object({
    transaction: Y,
    options: Ls,
    showConfirmation: i.boolean().optional(),
    postAction: Ia.optional(),
    isSharingEligible: i.boolean().optional(),
  }),
  u0 = i.object({ signature: i.string(), publicKey: i.string() }),
  d0 = T,
  VP = I(c0, l0),
  zP = x(u0, d0),
  GP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: d0, method: c0, params: l0, request: VP, response: zP, result: u0 },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  p0 = i.literal('sol_signIn'),
  h0 = i.object({ signInData: _a }),
  f0 = i.object({ address: i.string(), signedMessage: i.string(), signature: i.string() }),
  m0 = T,
  qP = I(p0, h0),
  WP = x(f0, m0),
  QP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: m0, method: p0, params: h0, request: qP, response: WP, result: f0 },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  g0 = i.literal('sol_signTransaction'),
  y0 = i.object({
    transaction: Y,
    isSharingEligible: i.boolean().optional(),
    transactionSharingDelayMs: i.number().optional(),
  }),
  b0 = i.object({
    signature: i.string(),
    transaction: Y,
    version: i.union([i.literal('legacy'), i.number()]),
  }),
  v0 = T,
  YP = I(g0, y0),
  KP = x(b0, v0),
  JP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: v0, method: g0, params: y0, request: YP, response: KP, result: b0 },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Da = i.object({
    identityName: i.string().nullish(),
    identityUri: i.string().nullish(),
    iconRelativeUri: i.string().nullish(),
  }),
  ZP = i.object({ identity: Da, authorizationScope: i.string() }),
  ka = i.object({ verifiableIdentity: ZP, publicKey: i.string(), payloads: i.array(i.string()) }),
  S0 = i.object({ identity: Da, cluster: i.string().optional() }),
  _0 = i.object({ verifiableIdentity: Da }),
  w0 = i.object({ signPayloads: ka, minContextSlot: i.number() }),
  $0 = i.object({ signPayloads: ka }),
  T0 = i.object({ signPayloads: ka });
i.union([S0, _0, w0, $0, T0]);
const I0 = i.union([
    i.object({
      type: i.literal('AUTHORIZE_SUCCESS'),
      publicKey: i.string(),
      accountLabel: i.string().optional(),
      walletUriBase: i.string().optional(),
      scope: i.string().optional(),
    }),
    i.object({ type: i.literal('AUTHORIZE_DECLINE') }),
  ]),
  x0 = i.union([
    i.object({ type: i.literal('REAUTHORIZE_SUCCESS') }),
    i.object({ type: i.literal('REAUTHORIZE_DECLINE') }),
  ]),
  Ca = i.union([
    i.object({ type: i.literal('SIGN_PAYLOADS_SUCCESS'), signedPayloads: i.array(i.string()) }),
    i.object({ type: i.literal('SIGN_PAYLOADS_DECLINE') }),
    i.object({
      type: i.literal('SIGN_PAYLOADS_ERROR_INVALID_PAYLOADS'),
      valid: i.array(i.boolean()),
    }),
    i.object({ type: i.literal('SIGN_PAYLOADS_ERROR_AUTHORIZATION_NOT_VALID') }),
    i.object({ type: i.literal('SIGN_PAYLOADS_ERROR_TOO_MANY_PAYLOADS') }),
  ]),
  E0 = i.union([
    i.object({
      type: i.literal('SIGN_AND_SEND_TRANSACTIONS_SUCCESS'),
      signedPayloads: i.array(i.string()),
    }),
    i.object({ type: i.literal('SIGN_AND_SEND_TRANSACTIONS_DECLINE') }),
    i.object({
      type: i.literal('SIGN_AND_SEND_TRANSACTIONS_ERROR_INVALID_PAYLOADS'),
      valid: i.array(i.boolean()),
    }),
    i.object({
      type: i.literal('SIGN_AND_SEND_TRANSACTIONS_ERROR_NOT_SUBMITTED'),
      signatures: i.array(i.string()),
    }),
    i.object({ type: i.literal('SIGN_AND_SEND_TRANSACTIONS_ERROR_TOO_MANY_PAYLOADS') }),
    i.object({ type: i.literal('SIGN_AND_SEND_TRANSACTIONS_ERROR_AUTHORIZATION_NOT_VALID') }),
  ]);
i.union([I0, x0, Ca, E0]);
const XP = i.literal('sol_mwa_authorize'),
  eD = S0,
  tD = I0,
  rD = T;
I(XP, eD);
x(tD, rD);
const nD = i.literal('sol_mwa_reauthorize'),
  sD = _0,
  iD = x0,
  oD = T;
I(nD, sD);
x(iD, oD);
const aD = i.literal('sol_mwa_sign_transactions'),
  cD = $0,
  lD = Ca,
  uD = T;
I(aD, cD);
x(lD, uD);
const dD = i.literal('sol_mwa_sign_messages'),
  pD = T0,
  hD = Ca,
  fD = T;
I(dD, pD);
x(hD, fD);
const mD = i.literal('sol_mwa_sign_and_send_transactions'),
  gD = w0,
  yD = E0,
  bD = T;
I(mD, gD);
x(yD, bD);
const vD = i.literal('sol_pay_transfer'),
  SD = i.object({
    amount: i.instanceof(it).optional(),
    recipient: i.string(),
    splToken: i.string().optional(),
    reference: i.array(i.string()).optional(),
    memo: i.string().optional(),
    label: i.string().optional(),
    message: i.string().optional(),
  }),
  _D = i.null(),
  wD = T;
I(vD, SD);
x(_D, wD);
const $D = i.literal('sol_pay_transaction'),
  TD = i.object({ link: i.string().url() }),
  ID = i.null(),
  xD = T;
I($D, TD);
x(ID, xD);
const A0 = i.literal('sui_requestAccounts'),
  P0 = i.tuple([]),
  D0 = va,
  k0 = T,
  ED = I(A0, P0),
  AD = x(D0, k0),
  PD = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: k0, method: A0, params: P0, request: ED, response: AD, result: D0 },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  C0 = i.literal('sui_signTransaction'),
  R0 = i.object({ transaction: i.string(), address: i.string(), networkID: i.string() }),
  O0 = i.object({ transaction: i.string(), signature: i.string() }),
  N0 = T,
  DD = I(C0, R0),
  kD = x(O0, N0),
  CD = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: N0, method: C0, params: R0, request: DD, response: kD, result: O0 },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  M0 = i.literal('sui_signMessage'),
  U0 = i.object({ message: i.instanceof(Uint8Array), address: i.string() }),
  L0 = i.object({ message: i.string(), signature: i.string() }),
  B0 = T,
  RD = I(M0, U0),
  OD = x(L0, B0),
  ND = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: B0, method: M0, params: U0, request: RD, response: OD, result: L0 },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  j0 = i.literal('sui_signAndExecuteTransaction'),
  F0 = i.object({ transaction: i.string(), address: i.string(), networkID: i.string() }),
  H0 = i.object({
    transaction: i.string(),
    signature: i.string(),
    digest: i.string(),
    effects: i.string(),
  }),
  V0 = T,
  MD = I(j0, F0),
  UD = x(H0, V0),
  LD = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: V0, method: j0, params: F0, request: MD, response: UD, result: H0 },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  BD = i.literal('user_approveBtcRequestAccounts'),
  jD = i.tuple([Pe]),
  FD = i.null(),
  HD = T;
I(BD, jD);
x(FD, HD);
const VD = i.literal('user_approveBtcSignPSBT'),
  zD = i.tuple([
    Pe,
    i.object({
      psbt: i.instanceof(Uint8Array),
      inputsToSign: i.array(
        i.object({
          address: i.string(),
          signingIndexes: i.array(i.number()),
          sigHash: i.number().optional(),
        })
      ),
      finalize: i.boolean(),
    }),
  ]),
  GD = i.discriminatedUnion('type', [
    i.object({ type: i.literal('signAndSend') }),
    i.object({ type: i.literal('send'), signature: i.instanceof(Uint8Array) }),
  ]),
  qD = T;
I(VD, zD);
x(GD, qD);
const WD = i.literal('user_approveBtcSignMessage'),
  QD = i.tuple([Pe, i.object({ message: i.instanceof(Uint8Array) })]),
  YD = i.discriminatedUnion('type', [
    i.object({ type: i.literal('signAndSend') }),
    i.object({
      type: i.literal('send'),
      signature: i.instanceof(Uint8Array),
      signedMessage: i.instanceof(Uint8Array),
    }),
  ]),
  KD = T;
I(WD, QD);
x(YD, KD);
const JD = i.literal('user_approveEthRequestAccounts'),
  ZD = i.tuple([Pe]),
  XD = i.null(),
  ek = T;
I(JD, ZD);
x(XD, ek);
const tk = i.literal('user_approveWalletRequestPermissions'),
  rk = i.tuple([Pe]),
  nk = i.null(),
  sk = T;
I(tk, rk);
x(nk, sk);
var _e = ((e) => (
    (e.OK = 'OK'),
    (e.FeatureKilled = 'FEATURE_KILLED'),
    (e.WalletLocked = 'WALLET_LOCKED'),
    (e.TabNotFocused = 'TAB_NOT_FOCUSED'),
    (e.Disabled = 'DISABLED'),
    (e.SessionExpired = 'SESSION_EXPIRED'),
    (e.RateLimitExceeded = 'RATE_LIMIT_EXCEEDED'),
    (e.SimulationFailed = 'SIMULATION_FAILED'),
    (e.UnsupportedDapp = 'UNSUPPORTED_DAPP'),
    (e.UnsupportedNetworkId = 'UNSUPPORTED_NETWORK_ID'),
    (e.UnsupportedMethod = 'UNSUPPORTED_METHOD'),
    (e.Unimplemented = 'UNIMPLEMENTED'),
    (e.Unknown = 'UNKNOWN'),
    e
  ))(_e || {}),
  ik = ((e) => (
    (e.IsWalletUnlocked = 'IS_WALLET_UNLOCKED'),
    (e.IsTabFocused = 'IS_TAB_FOCUSED'),
    (e.IsAutoConfirmEnabledInUserSettings = 'IS_AUTO_CONFIRM_ENABLED_IN_USER_SETTINGS'),
    (e.IsAutoConfirmSessionActive = 'IS_AUTO_CONFIRM_SESSION_ACTIVE'),
    (e.IsFeatureFlagEnabled = 'IS_FEATURE_FLAG_ENABLED'),
    (e.IsDappWhitelistOverridden = 'IS_DAPP_WHITELIST_OVERRIDDEN'),
    (e.IsNotRateLimited = 'IS_NOT_RATE_LIMITED'),
    (e.DidPassEthTransactionSimulation = 'DID_PASS_ETH_TRANSACTION_SIMULATION'),
    (e.DidPassSolTransactionSimulation = 'DID_PASS_SOL_TRANSACTION_SIMULATION'),
    (e.DidPassEthMessageSimulation = 'DID_PASS_ETH_MESSAGE_SIMULATION'),
    e
  ))(ik || {});
const ok = i.literal('user_approveEthSendTransaction'),
  ak = i.tuple([Pe, i.object({ transaction: Cs, autoConfirmStatusCode: i.nativeEnum(_e) })]),
  ck = i.discriminatedUnion('type', [
    i.object({ type: i.literal('signAndSend'), maxFeePerGas: N, maxPriorityFeePerGas: N }),
    i.object({ type: i.literal('send'), signature: ke, maxFeePerGas: N, maxPriorityFeePerGas: N }),
  ]),
  lk = T;
I(ok, ak);
x(ck, lk);
const uk = i.literal('user_approveEthSignMessage'),
  dk = i.tuple([
    Pe,
    i.object({
      signer: se,
      message: Re,
      originalMethod: i.enum([
        'eth_sign',
        'personal_sign',
        'eth_signTypedData',
        'eth_signTypedData_v3',
        'eth_signTypedData_v4',
      ]),
      chainId: i.string(),
      autoConfirmStatusCode: i.nativeEnum(_e),
    }),
  ]),
  pk = i.discriminatedUnion('approvalType', [
    i.object({ approvalType: i.literal('user') }),
    i.object({ approvalType: i.literal('hardware'), signature: ke }),
  ]),
  hk = T;
I(uk, dk);
x(pk, hk);
const fk = i.literal('user_approveSolConnect'),
  mk = i.tuple([Pe]),
  gk = i.null(),
  yk = T;
I(fk, mk);
x(gk, yk);
const bk = i.literal('user_approveSolSignAllTransactions'),
  vk = i.tuple([
    Pe,
    i.object({ transactions: i.array(Y), autoConfirmStatusCode: i.nativeEnum(_e) }),
  ]),
  Sk = i.discriminatedUnion('type', [
    i.object({ type: i.literal('signAndSend'), overwriteTransactions: i.array(Y).optional() }),
    i.object({
      type: i.literal('send'),
      result: i.array(
        i.object({
          signedTransaction: Y,
          signature: Y,
          version: i.union([i.literal('legacy'), i.number()]),
        })
      ),
    }),
  ]),
  _k = T;
I(bk, vk);
x(Sk, _k);
const wk = i.literal('user_approveSolSignAndSendTransaction'),
  $k = i.tuple([
    Pe,
    i.object({ transaction: i.string(), autoConfirmStatusCode: i.nativeEnum(_e) }),
  ]),
  Tk = i.discriminatedUnion('type', [
    i.object({
      type: i.literal('signAndSend'),
      overwriteTransactions: i.array(Y).optional(),
      isSharingEligible: i.boolean().optional(),
    }),
    i.object({
      type: i.literal('send'),
      signedTransaction: Y,
      signature: Y,
      version: i.union([i.literal('legacy'), i.number()]),
    }),
  ]),
  Ik = T;
I(wk, $k);
x(Tk, Ik);
const xk = i.literal('user_approveSolSignAndSendAllTransactions'),
  Ek = i.tuple([
    Pe,
    i.object({ transactions: i.array(Y), autoConfirmStatusCode: i.nativeEnum(_e) }),
  ]),
  Ak = i.discriminatedUnion('type', [
    i.object({ type: i.literal('signAndSend'), overwriteTransactions: i.array(Y).optional() }),
    i.object({
      type: i.literal('send'),
      result: i.array(
        i.object({
          signedTransaction: Y,
          signature: Y,
          version: i.union([i.literal('legacy'), i.number()]),
        })
      ),
    }),
  ]),
  Pk = T;
I(xk, Ek);
x(Ak, Pk);
const Dk = i.literal('user_approveSolSignIn'),
  kk = i.tuple([
    Pe,
    i.object({
      connect: i.boolean(),
      signInData: _a,
      message: Y,
      errorDetails: i.array(i.object({ label: i.string(), message: i.string() })).optional(),
    }),
  ]),
  Ck = i.discriminatedUnion('type', [
    i.object({ type: i.literal('signAndSend') }),
    i.object({ type: i.literal('send'), signature: Y }),
  ]),
  Rk = T;
I(Dk, kk);
x(Ck, Rk);
const Ok = i.literal('user_approveSolSignMessage'),
  Nk = i.tuple([
    Pe,
    i.object({
      message: Y,
      display: i.union([i.literal('utf8'), i.literal('hex')]),
      autoConfirmStatusCode: i.nativeEnum(_e),
    }),
  ]),
  Mk = i.discriminatedUnion('type', [
    i.object({ type: i.literal('signAndSend') }),
    i.object({ type: i.literal('send'), signature: Y }),
  ]),
  Uk = T;
I(Ok, Nk);
x(Mk, Uk);
const Lk = i.literal('user_approveSolSignTransaction'),
  Bk = i.tuple([
    Pe,
    i.object({ transaction: i.string(), autoConfirmStatusCode: i.nativeEnum(_e) }),
  ]),
  jk = i.discriminatedUnion('type', [
    i.object({
      type: i.literal('signAndSend'),
      overwriteTransactions: i.array(Y).optional(),
      isSharingEligible: i.boolean().optional(),
      transactionSharingDelayMs: i.number().optional(),
    }),
    i.object({
      type: i.literal('send'),
      signedTransaction: Y,
      signature: Y,
      version: i.union([i.literal('legacy'), i.number()]),
    }),
  ]),
  Fk = T;
I(Lk, Bk);
x(jk, Fk);
const Hk = i.literal('user_confirmEIP712IncorrectChainId'),
  Vk = i.tuple([Pe, i.object({ connectedChainId: i.string(), messageChainId: i.string() })]),
  zk = i.null(),
  Gk = T;
I(Hk, Vk);
x(zk, Gk);
const qk = i.literal('user_confirmIncorrectMode'),
  Wk = i.tuple([Pe, i.enum(['mainnet', 'testnet'])]),
  Qk = i.null(),
  Yk = T;
I(qk, Wk);
x(Qk, Yk);
const Kk = i.literal('user_confirmDisabledNetwork'),
  Jk = i.tuple([Pe, i.string()]),
  Zk = i.null(),
  Xk = T;
I(Kk, Jk);
x(Zk, Xk);
const eC = i.literal('user_confirmUnsupportedAccount'),
  tC = i.tuple([Pe, i.literal('ethereum').or(i.literal('solana'))]),
  rC = i.null(),
  nC = T;
I(eC, tC);
x(rC, nC);
const sC = i.literal('user_confirmUnsupportedNetwork'),
  iC = i.tuple([Pe, i.string()]),
  oC = i.null(),
  aC = T;
I(sC, iC);
x(oC, aC);
const cC = i.literal('user_selectEthWallet'),
  lC = i.tuple([Pe]),
  gn = ya,
  uC = T;
I(cC, lC);
x(gn, uC);
const dC = i.literal('user_approveSolPayTransaction'),
  pC = i.tuple([Pe, i.object({ label: i.string().optional(), transaction: i.string() })]),
  hC = i.discriminatedUnion('type', [
    i.object({ type: i.literal('signAndSend') }),
    i.object({
      type: i.literal('send'),
      signedTransaction: Y,
      signature: Y,
      version: i.union([i.literal('legacy'), i.number()]),
    }),
  ]),
  fC = T;
I(dC, pC);
x(hC, fC);
const mC = i.literal('user_approveSolFeaturedAction'),
  gC = i.tuple([Pe, i.object({ featuredTransaction: UT })]),
  yC = i.object({ transaction: i.string().optional(), message: i.string().optional() }),
  bC = T;
I(mC, gC);
x(yC, bC);
const vC = i.literal('user_solTransactionConfirmation'),
  SC = i.tuple([Pe, i.object({ signature: Y, postAction: Ia.optional() })]),
  _C = i.null(),
  wC = T;
I(vC, SC);
x(_C, wC);
const $C = i.literal('user_approveSuiRequestAccounts'),
  TC = i.tuple([Pe]),
  IC = i.null(),
  xC = T;
I($C, TC);
x(IC, xC);
const EC = i.literal('user_approveSuiSignTransaction'),
  AC = i.tuple([Pe, i.object({ transaction: i.string() })]),
  PC = i.object({ transaction: i.string() }),
  DC = T;
I(EC, AC);
x(PC, DC);
const kC = i.literal('user_approveSuiSignMessage'),
  CC = i.tuple([Pe, i.object({ message: i.instanceof(Uint8Array) })]),
  RC = i.object({ message: i.string() }),
  OC = T;
I(kC, CC);
x(RC, OC);
function f3(e) {
  return q1.safeParse(e).success;
}
var ne = ((e) => (
    (e.Solana = 'solana'),
    (e.Monad = 'monad'),
    (e.Ethereum = 'ethereum'),
    (e.Base = 'base'),
    (e.Arbitrum = 'arbitrum'),
    (e.Polygon = 'polygon'),
    (e.Bitcoin = 'bitcoin'),
    (e.Sui = 'sui'),
    (e.Hypercore = 'hypercore'),
    e
  ))(ne || {}),
  dt = ((e) => (
    (e.Ethereum = '60'),
    (e.Monad = '143'),
    (e.Polygon = '966'),
    (e.Base = '8453'),
    (e.Arbitrum = '9001'),
    (e.Solana = '501'),
    (e.Bitcoin = '0'),
    (e.Sui = '784'),
    (e.Hypercore = '925'),
    e
  ))(dt || {});
class NC extends Error {
  constructor(t, r) {
    super(`${r} is not yet supported for ${t}`),
      (this.chain = t),
      (this.feature = r),
      (this.name = 'UnsupportedChainFeatureError');
  }
}
class m3 extends NC {
  constructor(t) {
    super('sui', t);
  }
}
var z0 = ((e) => ((e.Mainnet = 'eip155:42161'), (e.Sepolia = 'eip155:421614'), e))(z0 || {});
const MC = i.union([i.literal('eip155:42161'), i.literal('eip155:421614')]),
  UC = {
    id: ne.Arbitrum,
    addressTypes: [ae.EVM],
    iconUrl: 'https://static.phantom.app/assets/arbitrum.png',
    name: 'Arbitrum',
    networks: {
      'eip155:42161': {
        id: 'eip155:42161',
        name: 'Arbitrum',
        rpcProxyUrl: 'https://node-proxy.phantom.app/v1/chain/arbitrum/network/mainnet',
        value: 42161,
      },
      'eip155:421614': {
        id: 'eip155:421614',
        name: 'Arbitrum Sepolia',
        rpcProxyUrl: 'https://node-proxy.phantom.app/v1/chain/arbitrum/network/sepolia',
        value: 421614,
      },
    },
    mainnetID: 'eip155:42161',
    tokenDecimals: 18,
    tokenSymbol: 'ETH',
    slip44: dt.Arbitrum,
    parentChain: ne.Ethereum,
  };
var G0 = ((e) => ((e.Mainnet = 'eip155:8453'), (e.Sepolia = 'eip155:84532'), e))(G0 || {});
const LC = i.union([i.literal('eip155:8453'), i.literal('eip155:84532')]),
  BC = {
    id: ne.Base,
    addressTypes: [ae.EVM],
    iconUrl: 'https://static.phantom.app/assets/base.png',
    name: 'Base',
    networks: {
      'eip155:8453': {
        id: 'eip155:8453',
        name: 'Base',
        rpcProxyUrl: 'https://node-proxy.phantom.app/v1/chain/base/network/mainnet',
        value: 8453,
      },
      'eip155:84532': {
        id: 'eip155:84532',
        name: 'Base Sepolia',
        rpcProxyUrl: 'https://node-proxy.phantom.app/v1/chain/base/network/sepolia',
        value: 84532,
      },
    },
    mainnetID: 'eip155:8453',
    tokenDecimals: 18,
    tokenSymbol: 'ETH',
    slip44: dt.Base,
    parentChain: ne.Ethereum,
  };
var ps = ((e) => ((e.Mainnet = 'sui:mainnet'), (e.Testnet = 'sui:testnet'), e))(ps || {});
const q0 = i.union([i.literal('sui:mainnet'), i.literal('sui:testnet')]),
  jC = {
    id: ne.Sui,
    addressTypes: [ae.Sui],
    iconUrl: 'https://static.phantom.app/assets/sui.png',
    name: 'Sui',
    networks: {
      'sui:mainnet': {
        id: 'sui:mainnet',
        name: 'Sui',
        rpcProxyUrl: 'https://node-proxy.phantom.dev/v1/chain/sui/network/mainnet',
        value: 'mainnet',
      },
      'sui:testnet': {
        id: 'sui:testnet',
        name: 'Sui Testnet',
        shortName: 'Testnet',
        rpcProxyUrl: 'https://node-proxy.phantom.dev/v1/chain/sui/network/testnet',
        value: 'testnet',
      },
    },
    mainnetID: 'sui:mainnet',
    tokenDecimals: 9,
    tokenSymbol: 'SUI',
    slip44: dt.Sui,
  },
  FC = i.object({
    networkID: q0,
    addressType: i.nativeEnum(ae),
    address: Os,
    publicKey: i.instanceof(Uint8Array).optional(),
  });
var W0 = ((e) => (
  (e.Mainnet = 'bip122:000000000019d6689c085ae165831e93'),
  (e.Testnet = 'bip122:000000000933ea01ad0ee984209779ba'),
  e
))(W0 || {});
const Ra = i.union([
    i.literal('bip122:000000000019d6689c085ae165831e93'),
    i.literal('bip122:000000000933ea01ad0ee984209779ba'),
  ]),
  HC = i.union([i.literal(ps.Mainnet), i.literal(ps.Testnet)]),
  Oa = i.string().refine(
    (e) => {
      try {
        return fc.initEccLib(ZS), fc.address.toOutputScript(e), !0;
      } catch {
        return !1;
      }
    },
    { message: 'Invalid Bitcoin address.' }
  ),
  Q0 = i.object({
    networkID: Ra,
    addressType: i.nativeEnum(ae),
    address: Oa,
    publicKey: i.instanceof(Uint8Array).optional(),
  }),
  VC = {
    id: ne.Bitcoin,
    addressTypes: [ae.BitcoinTaproot, ae.BitcoinNativeSegwit],
    iconUrl: 'https://static.phantom.app/assets/bitcoin.png',
    name: 'Bitcoin',
    networks: {
      'bip122:000000000019d6689c085ae165831e93': {
        id: 'bip122:000000000019d6689c085ae165831e93',
        name: 'Bitcoin',
        value: 128,
      },
      'bip122:000000000933ea01ad0ee984209779ba': {
        id: 'bip122:000000000933ea01ad0ee984209779ba',
        name: 'Bitcoin Testnet',
        shortName: 'Testnet',
        value: 239,
      },
    },
    mainnetID: 'bip122:000000000019d6689c085ae165831e93',
    tokenDecimals: 8,
    tokenSymbol: 'BTC',
    slip44: dt.Bitcoin,
  };
var Y0 = ((e) => ((e.Mainnet = 'hypercore:mainnet'), (e.Testnet = 'hypercore:testnet'), e))(
  Y0 || {}
);
const Bs = i.union([i.literal('hypercore:mainnet'), i.literal('hypercore:testnet')]),
  zC = {
    id: ne.Hypercore,
    addressTypes: [ae.EVM],
    iconUrl: 'https://static.phantom.app/assets/hypercore.png',
    name: 'Hypercore',
    networks: {
      'hypercore:mainnet': {
        id: 'hypercore:mainnet',
        name: 'Hypercore',
        rpcProxyUrl: 'https://node-proxy.phantom.dev/v1/chain/hypercore/network/mainnet',
        value: 'mainnet',
      },
      'hypercore:testnet': {
        id: 'hypercore:testnet',
        name: 'Hypercore Testnet',
        shortName: 'Testnet',
        rpcProxyUrl: 'https://node-proxy.phantom.dev/v1/chain/hypercore/network/testnet',
        value: 'testnet',
      },
    },
    mainnetID: 'hypercore:mainnet',
    tokenDecimals: 9,
    tokenSymbol: 'ETH',
    slip44: dt.Hypercore,
  },
  GC = i.object({ networkID: Bs, addressType: i.nativeEnum(ae), address: Id });
var K0 = ((e) => (
  (e.Mainnet = 'eip155:143'), (e.Testnet = 'eip155:10143'), (e.Devnet = 'eip155:41454'), e
))(K0 || {});
const qC = i.union([i.literal('eip155:143'), i.literal('eip155:10143'), i.literal('eip155:41454')]),
  WC = {
    id: ne.Monad,
    addressTypes: [ae.EVM],
    iconUrl: 'https://static.phantom.app/assets/monad.png',
    name: 'Monad',
    networks: {
      'eip155:143': {
        id: 'eip155:143',
        name: 'Monad',
        rpcProxyUrl: 'https://node-proxy.phantom.app/v1/chain/monad/network/mainnet',
        value: 143,
        hidden: !0,
      },
      'eip155:10143': {
        id: 'eip155:10143',
        name: 'Monad Testnet',
        shortName: 'Testnet',
        rpcProxyUrl: 'https://node-proxy.phantom.app/v1/chain/monad/network/testnet',
        value: 10143,
      },
      'eip155:41454': {
        id: 'eip155:41454',
        name: 'Monad Devnet',
        shortName: 'Devnet',
        rpcProxyUrl: 'https://node-proxy.phantom.app/v1/chain/monad/network/devnet1',
        value: 41454,
        hidden: !0,
      },
    },
    mainnetID: 'eip155:10143',
    tokenDecimals: 18,
    tokenSymbol: 'MON',
    slip44: dt.Monad,
  };
var J0 = ((e) => ((e.Mainnet = 'eip155:137'), (e.Amoy = 'eip155:80002'), e))(J0 || {});
const QC = i.union([i.literal('eip155:137'), i.literal('eip155:80002')]),
  YC = {
    id: ne.Polygon,
    addressTypes: [ae.EVM],
    iconUrl: 'https://static.phantom.app/assets/polygon.png',
    name: 'Polygon',
    networks: {
      'eip155:137': {
        id: 'eip155:137',
        name: 'Polygon',
        rpcProxyUrl: 'https://node-proxy.phantom.app/v1/chain/polygon/network/mainnet',
        value: 137,
      },
      'eip155:80002': {
        id: 'eip155:80002',
        name: 'Polygon Amoy',
        shortName: 'Amoy',
        rpcProxyUrl: 'https://node-proxy.phantom.app/v1/chain/polygon/network/amoy',
        value: 80002,
      },
    },
    mainnetID: 'eip155:137',
    tokenDecimals: 18,
    tokenSymbol: 'POL',
    slip44: dt.Polygon,
    parentChain: ne.Ethereum,
  };
var Z0 = ((e) => ((e.Mainnet = 'eip155:1'), (e.Sepolia = 'eip155:11155111'), e))(Z0 || {});
const KC = i.union([i.literal('eip155:1'), i.literal('eip155:11155111')]),
  Na = i.union([KC, QC, LC, qC, MC, Bs]),
  JC = i.object({ networkID: Na, addressType: i.nativeEnum(ae), address: se }),
  ZC = {
    id: ne.Ethereum,
    addressTypes: [ae.EVM],
    iconUrl: 'https://static.phantom.app/assets/ethereum.png',
    name: 'Ethereum',
    networks: {
      'eip155:1': {
        id: 'eip155:1',
        name: 'Ethereum',
        rpcProxyUrl: 'https://node-proxy.phantom.app/v1/chain/ethereum/network/mainnet',
        value: 1,
      },
      'eip155:11155111': {
        id: 'eip155:11155111',
        name: 'Ethereum Sepolia',
        shortName: 'Sepolia',
        rpcProxyUrl: 'https://node-proxy.phantom.app/v1/chain/ethereum/network/sepolia',
        value: 11155111,
      },
    },
    mainnetID: 'eip155:1',
    tokenDecimals: 18,
    tokenSymbol: 'ETH',
    slip44: dt.Ethereum,
  };
var X0 = ((e) => (
  (e.Mainnet = 'solana:101'),
  (e.Testnet = 'solana:102'),
  (e.Devnet = 'solana:103'),
  (e.Localnet = 'solana:localnet'),
  e
))(X0 || {});
const Ma = i.union([
    i.literal('solana:101'),
    i.literal('solana:102'),
    i.literal('solana:103'),
    i.literal('solana:localnet'),
  ]),
  ev = i.object({ networkID: Ma, addressType: i.nativeEnum(ae), address: Rn }),
  XC = {
    id: ne.Solana,
    addressTypes: [ae.Solana],
    iconUrl: 'https://static.phantom.app/assets/solana.png',
    name: 'Solana',
    networks: {
      'solana:101': {
        id: 'solana:101',
        name: 'Solana',
        rpcProxyUrl:
          'https://solana-mainnet.phantom.app/YBPpkkN4g91xDiAnTE9r0RcMkjg0sKUIWvAfoFVJ?advancedTxSubmission=true',
        value: 'mainnet',
      },
      'solana:102': {
        id: 'solana:102',
        name: 'Solana Testnet',
        shortName: 'Testnet',
        value: 'testnet',
      },
      'solana:103': {
        id: 'solana:103',
        name: 'Solana Devnet',
        shortName: 'Devnet',
        value: 'devnet',
      },
      'solana:localnet': {
        id: 'solana:localnet',
        name: 'Solana Localnet',
        shortName: 'Localnet',
        value: 'localnet',
      },
    },
    localnetID: 'solana:localnet',
    mainnetID: 'solana:101',
    tokenDecimals: 9,
    tokenSymbol: 'SOL',
    slip44: dt.Solana,
  };
function tv(e) {
  return Object.values(ne).includes(e);
}
const ze = {
    [ne.Bitcoin]: VC,
    [ne.Ethereum]: ZC,
    [ne.Polygon]: YC,
    [ne.Monad]: WC,
    [ne.Solana]: XC,
    [ne.Base]: BC,
    [ne.Sui]: jC,
    [ne.Arbitrum]: UC,
    [ne.Hypercore]: zC,
  },
  Oc = {
    [ne.Solana]: 1,
    [ne.Ethereum]: 2,
    [ne.Monad]: 3,
    [ne.Base]: 4,
    [ne.Sui]: 5,
    [ne.Polygon]: 6,
    [ne.Bitcoin]: 7,
    [ne.Arbitrum]: 8,
    [ne.Hypercore]: 9,
  },
  eR = {
    [ne.Solana]: !0,
    [ne.Ethereum]: !0,
    [ne.Monad]: !1,
    [ne.Base]: !0,
    [ne.Polygon]: !0,
    [ne.Bitcoin]: !0,
    [ne.Sui]: !1,
    [ne.Arbitrum]: !1,
    [ne.Hypercore]: !1,
  },
  hi = (e, t) => {
    const r = Oc[e] - Oc[t];
    return r === 0 ? 0 : r > 0 ? 1 : -1;
  },
  tR = () => {
    const e = Object.values(ne).sort(hi),
      t = e.map((D) => ze[D]),
      r = {},
      n = [],
      s = {},
      o = {},
      a = {};
    t.forEach((D) => {
      const ce = Object.fromEntries(Object.entries(D.networks).filter(([ct, rt]) => !rt.hidden)),
        Ve = Object.keys(ce);
      n.push(...Ve),
        Ve.forEach((ct) => {
          r[ct] = D;
        });
      const Er = Object.values(ce);
      (s[D.id] = Er.map((ct) => ct.id)),
        Er.forEach((ct) => {
          o[ct.id] = ct;
        });
      for (const ct of D.addressTypes) {
        const rt = a[ct];
        rt ? rt.push(D.id) : (a[ct] = [D.id]);
      }
    });
    const c = new Set(n);
    function l(D) {
      return D != null && D.evmOnly ? e.filter((ce) => ze[ce].addressTypes.includes(ae.EVM)) : e;
    }
    function u(D, ce) {
      return D === ne.Sui ? ce : eR[D];
    }
    function p(D) {
      return n.filter((ce) => r[ce].id === D);
    }
    function d(D) {
      if (!D) return n;
      let ce = n;
      return (
        D.evmOnly && (ce = ce.filter((Ve) => jt(Ve))),
        D.mainnetOnly && (ce = ce.filter((Ve) => cn(Ve))),
        ce
      );
    }
    function h(D) {
      return r[D];
    }
    function f(D) {
      return o[D].rpcProxyUrl;
    }
    function g(D) {
      return r[D].addressTypes[0];
    }
    function m(D) {
      const ce = r[D];
      if (ce.addressTypes.length === 1) {
        const [Ve] = ce.addressTypes;
        return Ve;
      } else throw `The chain ${ce.id} has multiple address types`;
    }
    function b(D) {
      return r[D].addressTypes;
    }
    function P(D) {
      return r[D].id;
    }
    function A(D) {
      return ze[Ln(D)].name;
    }
    function v(D) {
      return r[D].tokenDecimals;
    }
    function R(D) {
      return (w(D) ? r[D] : ze[D]).tokenSymbol;
    }
    function O(D) {
      return (w(D) ? r[D] : ze[D]).iconUrl;
    }
    function k(D) {
      return r[D].slip44;
    }
    function E(D) {
      return ze[Ln(D)].mainnetID;
    }
    function _(D) {
      let ce;
      if ((jt(D) && (ce = o[D].value), typeof ce == 'number')) return ce;
      throw new Error(`Invalid NetworkID: ${D}. Must be an EVM NetworkID.`);
    }
    function w(D) {
      return c.has(D);
    }
    function V(D) {
      return Object.keys(ze.bitcoin.networks).includes(D);
    }
    function W(D) {
      return Object.keys(ze.ethereum.networks).includes(D);
    }
    function Z(D) {
      return Object.keys(ze.polygon.networks).includes(D);
    }
    function X(D) {
      return Object.keys(ze.base.networks).includes(D);
    }
    function Te(D) {
      return Object.keys(ze.arbitrum.networks).includes(D);
    }
    function Ie(D) {
      return Object.keys(ze.monad.networks).includes(D);
    }
    function fr(D) {
      return Object.keys(ze.hypercore.networks).includes(D);
    }
    function jt(D) {
      return W(D) || Z(D) || X(D) || Ie(D) || Te(D) || fr(D);
    }
    function At(D) {
      return Object.keys(ze.solana.networks).includes(D);
    }
    function an(D) {
      return Object.keys(ze.sui.networks).includes(D);
    }
    function Nn(D) {
      if (!At(D)) throw new Error(`Invalid NetworkID: ${D}. Must be a Solana NetworkID.`);
      return ze.solana.networks[D].value;
    }
    function Mn(D) {
      return r[D].localnetID === D;
    }
    function cn(D) {
      return r[D].mainnetID === D;
    }
    function Gs(D) {
      return o[D];
    }
    function ln(D, ce = !1) {
      const Ve = o[D];
      return ce && Ve.shortName ? Ve.shortName : Ve.name;
    }
    function qs(D) {
      return r[D].parentChain;
    }
    function Un(D) {
      return a[D];
    }
    function Ws(D, ce) {
      const Ve = r[D].id,
        Er = r[ce].id;
      return hi(Ve, Er);
    }
    function Ln(D) {
      return tv(D) ? D : w(D) ? te.getChainID(D) : Is();
    }
    return {
      ...ze,
      getAllChainIDs: l,
      isChainDefaultEnabled: u,
      getNetworkIDs: p,
      getAllNetworkIDs: d,
      getChainDefinition: h,
      getAddressType: m,
      getAddressTypes: b,
      getChainID: P,
      getChainName: A,
      getTokenDecimals: v,
      getTokenSymbol: R,
      getChainIconUrl: O,
      getSlip44: k,
      getMainnetNetworkID: E,
      getEVMNetworkIDValue: _,
      getSolanaNetworkIDValue: Nn,
      _DO_NOT_USE_getAddressType: g,
      isNetworkID: w,
      isBitcoinNetworkID: V,
      isEVMNetworkID: jt,
      isSolanaNetworkID: At,
      isEthereumNetworkID: W,
      isPolygonNetworkID: Z,
      isBaseNetworkID: X,
      isArbitrumNetworkID: Te,
      isSuiNetworkID: an,
      isHypercoreNetworkID: fr,
      isLocalNetworkID: Mn,
      isMainnetNetworkID: cn,
      getNetworkDefinition: Gs,
      getNetworkName: ln,
      getChainIDs: Un,
      compareChain: hi,
      compareNetworkID: Ws,
      getRpcProxyUrl: f,
      getParentChain: qs,
    };
  },
  te = tR(),
  g3 = i.string().refine(
    (e) => {
      const t = e.split('/');
      if (t.length < 2) return !1;
      const r = t[0],
        s = t[1].split(':');
      if (s.length < 2) return !1;
      const o = s[0],
        a = s[1];
      return (
        typeof e == 'string' &&
        te.isNetworkID(r) &&
        o.match(/^[-a-z0-9]{2,8}/) &&
        a.match(/^[-a-zA-Z0-9]{1,64}/)
      );
    },
    { message: 'Value is not a valid BRI string.' }
  ),
  Ne = {
    Bitcoin: W0,
    Ethereum: Z0,
    Polygon: J0,
    Solana: X0,
    Sui: ps,
    Base: G0,
    Monad: K0,
    Arbitrum: z0,
    Hypercore: Y0,
  },
  Ua = i.union([Ra, Na, Ma, q0, Bs]);
i.union([Q0, JC, ev, FC, GC]);
var Be = ((e) => ((e.address = 'address'), (e.tx = 'tx'), (e.nativeToken = 'nativeToken'), e))(
  Be || {}
);
const y3 = i.string(),
  rv = i.object({ chainId: Ua, resourceType: i.nativeEnum(Be) }),
  rR = rv.extend({ resourceType: i.literal('nativeToken'), slip44: i.nativeEnum(dt) }),
  nn = rv.extend({ resourceType: i.literal('address'), address: i.string() }),
  nR = nn.extend({ chainId: Ma, address: Rn }),
  sR = nn.extend({ chainId: Na, address: se, tokenId: i.string().optional() }),
  iR = nn.extend({ chainId: Ra, address: Oa.or(i.string()) }),
  oR = nn.extend({ chainId: HC, address: Os, tokenId: i.string().optional() });
nn.extend({ chainId: Bs, address: Id, tokenId: i.string().optional() });
const b3 = i.union([rR, nn, nR, sR, iR, oR]),
  aR = (e) => {
    const t = e.split('/');
    if (t.length > 3 || t.length < 2)
      throw new Error(`Cannot decode malformed caip19 string '${e}'`);
    const r = t[0];
    if (
      !(
        te.isEVMNetworkID(r) ||
        te.isSolanaNetworkID(r) ||
        te.isBitcoinNetworkID(r) ||
        te.isSuiNetworkID(r)
      )
    )
      throw new Error(`Cannot decode unsupported chain '${r}'`);
    const n = t[1].split(/:(.+)/),
      [s, o] = n;
    if (!s || !o) throw new Error(`Invalid resource specification '${t[1]}'`);
    if (!Object.values(Be).includes(s)) throw new Error(`Unsupported resource type '${s}'`);
    if (s === Be.nativeToken) {
      if (!Object.values(dt).includes(o)) throw new Error(`Unsupported slip44 '${o}'`);
      return { chainId: r, resourceType: s, slip44: o };
    } else if (te.isEVMNetworkID(r)) {
      if (s === Be.address)
        return t.length === 3
          ? { chainId: r, address: o, resourceType: s, tokenId: t[2] }
          : { chainId: r, address: o, resourceType: s };
      throw new Error(`Unsupported resource type ${s} for chain ${r}`);
    } else if (te.isSolanaNetworkID(r)) {
      if (s === Be.address) return { chainId: r, address: o, resourceType: s };
      throw new Error(`Unsupported resource type ${s} for chain ${r}`);
    } else if (te.isBitcoinNetworkID(r)) {
      if (s === Be.address) return { chainId: r, address: o, resourceType: s };
      throw new Error(`Unsupported resource type ${s} for chain ${r}`);
    } else if (te.isSuiNetworkID(r)) {
      if (s === Be.address) return { chainId: r, address: o, resourceType: s };
      throw new Error(`Unsupported resource type ${s} for chain ${r}`);
    }
    throw new Error(`Cannot decode malformed caip19 string '${e}'`);
  },
  Nc = (e) => {
    if (e.resourceType === Be.nativeToken) return `${e.chainId}/${Be.nativeToken}:${e.slip44}`;
    if (te.isEVMNetworkID(e.chainId))
      return (
        (e.address = e.address.toLowerCase()),
        'tokenId' in e && typeof e.tokenId == 'string' && e.tokenId
          ? `${e.chainId}/${Be.address}:${e.address}/${e.tokenId}`
          : `${e.chainId}/${Be.address}:${e.address}`
      );
    if (te.isSolanaNetworkID(e.chainId)) return `${e.chainId}/${Be.address}:${e.address}`;
    if (te.isBitcoinNetworkID(e.chainId)) {
      const t = e;
      return `${t.chainId}/${Be.address}:${t.address}`;
    }
    return te.isSuiNetworkID(e.chainId)
      ? 'tokenId' in e && typeof e.tokenId == 'string' && e.tokenId
        ? `${e.chainId}/${Be.address}:${e.address}/${e.tokenId}`
        : `${e.chainId}/${Be.address}:${e.address}`
      : Is(e.chainId);
  };
function v3(e) {
  return Q0.safeParse(e).success;
}
function S3(e) {
  return ev.safeParse(e).success;
}
const _3 = i.object({ networkID: Ua, addressType: i.nativeEnum(ae), address: i.string() }),
  cR = (e) => `${e.networkID}-${e.address}`,
  w3 = { toKey: cR };
function $3(e) {
  return [Ne.Solana.Devnet, Ne.Solana.Testnet, Ne.Solana.Mainnet]
    .map((r) => parseInt(r.replace('solana:', '')))
    .includes(parseInt(e, 16))
    ? `solana:${parseInt(e, 16)}`
    : `eip155:${parseInt(e, 16)}`;
}
const T3 = i.object({ id: Ua, name: i.string(), symbol: i.string(), imageUrl: i.string() });
function I3(e) {
  const { name: t, tokenSymbol: r, iconUrl: n } = te.getChainDefinition(e);
  return { id: e, name: t, symbol: r, imageUrl: n };
}
function x3(e) {
  switch (e) {
    case 'devnet':
      return Ne.Solana.Devnet;
    case 'mainnet':
      return Ne.Solana.Mainnet;
    case 'testnet':
      return Ne.Solana.Testnet;
    case 'localnet':
      return Ne.Solana.Localnet;
  }
}
function E3(e) {
  switch (e) {
    case 'mainnet':
      return 'mainnet-beta';
    case 'localnet':
      return 'localhost';
    default:
      return e;
  }
}
function A3(e, t) {
  return te.isBitcoinNetworkID(t)
    ? Oa.safeParse(e).success
    : te.isEVMNetworkID(t)
      ? se.safeParse(e).success
      : te.isSolanaNetworkID(t)
        ? Rn.safeParse(e).success
        : te.isSuiNetworkID(t)
          ? Os.safeParse(e).success
          : Is();
}
const P3 = (e, t) => {
    if (te.isBitcoinNetworkID(e)) {
      switch (!0) {
        case t.startsWith('bc1p') || t.startsWith('bcrt1p') || t.startsWith('tb1p'):
          return ae.BitcoinTaproot;
        case t.startsWith('bc1q') || t.startsWith('tb1q'):
          return ae.BitcoinNativeSegwit;
        case t.startsWith('3') || t.startsWith('2'):
          return ae.BitcoinNestedSegwit;
        case t.startsWith('1') || t.startsWith('m'):
          return ae.BitcoinLegacy;
      }
      throw new Error(`Unable to get address type from invalid Bitcoin address: ${t}`);
    } else
      return te.isEVMNetworkID(e)
        ? ae.EVM
        : te.isSolanaNetworkID(e)
          ? ae.Solana
          : te.isSuiNetworkID(e)
            ? ae.Sui
            : Is();
  },
  D3 = (e) => {
    const t = te.getNetworkIDs(e),
      r = te.getMainnetNetworkID(t[0]),
      n = te[e].slip44;
    return { chainId: r, resourceType: Be.nativeToken, slip44: n };
  },
  lR = te.getAllNetworkIDs().filter((e) => te.isEVMNetworkID(e)),
  k3 = (e) => lR.find((t) => te.getNetworkDefinition(t).value === e),
  C3 = (e) =>
    te
      .getAllNetworkIDs({ evmOnly: !0 })
      .filter((t) => {
        if (e) {
          if (e === 'mainnets_only') return te.isMainnetNetworkID(t);
          if (e === 'testnets_only') return !te.isMainnetNetworkID(t);
        } else return !0;
      })
      .map(uR),
  uR = (e) => `0x${te.getNetworkDefinition(e).value.toString(16)}`;
function dR(e, t) {
  return t.getSupportedChains().includes(e);
}
function pR(e, t) {
  if (tv(e)) return t.get(e);
  if (te.isNetworkID(e)) {
    const r = te.getChainID(e);
    if (dR(r, t)) return t.get(r);
  }
  throw new Error('Invalid input type for chain config get method');
}
function R3(e) {
  return { get: (t) => pR(t, e), supportedChains: e.getSupportedChains() };
}
class O3 {
  constructor(t) {
    M(this, 'chainConfigMap', new Map());
    Object.entries(t).forEach(([r, n]) => {
      this.register(r, n);
    });
  }
  register(t, r) {
    this.chainConfigMap.set(t, r);
  }
  getSupportedChains() {
    return Array.from(this.chainConfigMap.keys());
  }
  get(t) {
    const r = this.chainConfigMap.get(t);
    if (!r) throw new Error(`No chain config found for chain: ${t}`);
    return r;
  }
}
const hR = [
    'enable-sol-compressed-tokens',
    'enable-unlimited-fungibles',
    'enable-portfolio-moving-price-charts',
    'enable-merge-collectibles',
    'enable-fungible-detail-custom-header',
    'enable-account-owner-warning',
    'enable-psol-staking',
    'enable-fungible-categories',
  ],
  fR = [
    'enable-auto-slippage',
    'enable-swapper-default-auto',
    'enable-swapper-default-usdc',
    'enable-swapper-keypad-swap',
    'enable-swapper-token-discovery-v2',
    'enable-swapper-token-discovery-ext',
    'enable-swapper-exact-out',
    'enable-swapper-toasts-auto-slippage',
    'enable-swapper-toasts',
    'enabled-ugc-programs',
    'swap-review-poll-interval-ms',
    'swapper-poll-interval-json',
    'swapper-high-slippage-threshold',
    'enable-swapper-priority-fee-settings',
    'enable-swapper-input-focus',
    'enable-swapper-search-focus',
    'enable-quote-streaming',
    'enable-next-gen-swapper',
    'enable-classic-swapper',
    'enable-custom-tips',
    'enable-gasless-swaps',
    'enable-ngs-bridging',
    'gasless-min-amount',
    'enable-perps',
  ],
  mR = [
    'enable-social-profiles-join-date',
    'enable-profile-sharing',
    'enable-holiday-icon',
    'enable-social-feed-update-trigger',
  ],
  gR = [
    'enable-api-auth',
    'enable-bug-reporter',
    'enable-buy-flow-warning',
    'enable-fiat-ramp-optimize-defaults',
    'enable-fiat-ramp-optimize-default-payment-method',
    'enable-fiat-ramp-enhancements',
    'enable-fiat-ramp-enhancements--via-provider',
    'enable-fiat-ramp-enhancements-v2-with-redirect-screen',
    'enable-force-upgrade',
    'enable-onboarding-aa',
    'enable-onboarding-claim-username',
    'enable-onboarding-claim-username-dropoff',
    'enable-seedless-pin-verification-interstitial',
    'enable-zero-balance-nux',
    'frontend-check-reonboarding-needed-im-176',
    'frontend-enable-bip-39-im-176',
    'seedless-pin-verification-timer-in-ms',
    'kill-action-banners',
    'kill-frontend-server-time',
    'latest-terms-of-service-version-number',
    'enable-terms-of-service-update-interstitial',
  ],
  yR = [
    'enable-automatic-approval-for-all-dapps',
    'enable-sidepanel-tx-notifications',
    'enable-blinks-v2-config',
    'enable-experimental-solana-actions',
    'enable-evm-blinks',
    'kill-automatic-approval',
    'kill-clickjack-protection',
    'enable-dapp-pages',
    'enable-deep-links-v2',
    'enable-solana-pay-v2',
    'enable-jito-banner-deeplink-to-quests',
    'enable-featured-transactions',
  ],
  bR = [
    'always-show-all-sites-permissions',
    'enable-base-swapper',
    'enable-blocklist-blowfish-logonly',
    'enable-blocklist-metrics',
    'enable-monad',
    'enable-arbitrum',
    'enable-native-bridge-pairs',
    'enable-sui-default-on',
    'enable-sui-swapper',
    'enable-sui-testnet',
    'explore-config',
    'frontend-enable-esp-user-properties-update',
    'frontend-enable-session-start',
    'kill-base-history',
    'kill-base-explore-search',
    'kill-blowfish-blocklist',
    'kill-blowfish-blocklist-cursor',
    'kill-brc20-sends',
    'kill-collectibles',
    'kill-explore',
    'kill-extension-storage-integrity-check',
    'kill-dynamic-price-in-explore',
    'kill-ledger-xpub-derivation',
    'kill-phantom-validator',
    'kill-previous-blocklist',
    'kill-send-simulation',
    'kill-swapper',
    'kill-swapper-simulation',
    'kill-test',
    'kill-vault-secure-cache',
    'kill-liquid-staking-convert',
    'mobile-enable-review-request',
    'kill-suins',
    'wallet-balance-background-foreground-timer',
    'sui-gas-budget-multiplier',
    'enable-safeguard-frontend',
    'transactions-simulation-interval-ms',
    'frontend-transaction-sharing-delay-ms',
    'enable-signonly-sharing',
    'enable-consolidated-addresses',
    'network-logger-config-json',
    'enable-auto-patch-chains',
    'enable-monad-explore-filter',
    'enable-monad-explore-search',
    'enable-sui-explore-filter',
    'enable-sui-explore-search',
    'enable-higher-slippage-options',
    'enable-cash',
    ...yR,
    ...hR,
    ...fR,
    ...mR,
    ...gR,
  ];
var Mc = {};
const vR = Mc.ENABLED_FLAGS ? Mc.ENABLED_FLAGS.split(',') : [];
var js = function () {
    if (typeof Promise != 'function')
      throw new TypeError('`Promise.allSettled` requires a global `Promise` be available.');
  },
  fi,
  Uc;
function SR() {
  if (Uc) return fi;
  Uc = 1;
  var e = Ae,
    t = ha,
    r = e('%Promise.resolve%', !0),
    n = r && t(r);
  return (
    (fi = function (o, a) {
      if (!n) throw new SyntaxError('This environment does not support Promises.');
      return n(o, a);
    }),
    fi
  );
}
var mi, Lc;
function _R() {
  return (
    Lc ||
      ((Lc = 1),
      (mi = function (t) {
        if (t === null) return 'Null';
        if (typeof t > 'u') return 'Undefined';
        if (typeof t == 'function' || typeof t == 'object') return 'Object';
        if (typeof t == 'number') return 'Number';
        if (typeof t == 'boolean') return 'Boolean';
        if (typeof t == 'string') return 'String';
      })),
    mi
  );
}
var gi, Bc;
function tt() {
  if (Bc) return gi;
  Bc = 1;
  var e = _R();
  return (
    (gi = function (r) {
      return typeof r == 'symbol' ? 'Symbol' : typeof r == 'bigint' ? 'BigInt' : e(r);
    }),
    gi
  );
}
var hn = { exports: {} },
  yi,
  jc;
function wR() {
  if (jc) return yi;
  jc = 1;
  var e = {}.toString;
  return (
    (yi =
      Array.isArray ||
      function (t) {
        return e.call(t) == '[object Array]';
      }),
    yi
  );
}
var bi, Fc;
function nv() {
  if (Fc) return bi;
  Fc = 1;
  var e = String.prototype.valueOf,
    t = function (a) {
      try {
        return e.call(a), !0;
      } catch {
        return !1;
      }
    },
    r = Object.prototype.toString,
    n = '[object String]',
    s = fa()();
  return (
    (bi = function (a) {
      return typeof a == 'string' ? !0 : typeof a != 'object' ? !1 : s ? t(a) : r.call(a) === n;
    }),
    bi
  );
}
var vi, Hc;
function $R() {
  if (Hc) return vi;
  Hc = 1;
  var e = typeof Map == 'function' && Map.prototype ? Map : null,
    t = typeof Set == 'function' && Set.prototype ? Set : null,
    r;
  e ||
    (r = function (a) {
      return !1;
    });
  var n = e ? Map.prototype.has : null,
    s = t ? Set.prototype.has : null;
  return (
    !r &&
      !n &&
      (r = function (a) {
        return !1;
      }),
    (vi =
      r ||
      function (a) {
        if (!a || typeof a != 'object') return !1;
        try {
          if ((n.call(a), s))
            try {
              s.call(a);
            } catch {
              return !0;
            }
          return a instanceof e;
        } catch {}
        return !1;
      }),
    vi
  );
}
var Si, Vc;
function TR() {
  if (Vc) return Si;
  Vc = 1;
  var e = typeof Map == 'function' && Map.prototype ? Map : null,
    t = typeof Set == 'function' && Set.prototype ? Set : null,
    r;
  t ||
    (r = function (a) {
      return !1;
    });
  var n = e ? Map.prototype.has : null,
    s = t ? Set.prototype.has : null;
  return (
    !r &&
      !s &&
      (r = function (a) {
        return !1;
      }),
    (Si =
      r ||
      function (a) {
        if (!a || typeof a != 'object') return !1;
        try {
          if ((s.call(a), n))
            try {
              n.call(a);
            } catch {
              return !0;
            }
          return a instanceof t;
        } catch {}
        return !1;
      }),
    Si
  );
}
var zc;
function IR() {
  if (zc) return hn.exports;
  zc = 1;
  var e = zS();
  if (Uu() || GS()) {
    var t = Symbol.iterator;
    hn.exports = function (w) {
      if (w != null && typeof w[t] < 'u') return w[t]();
      if (e(w)) return Array.prototype[t].call(w);
    };
  } else {
    var r = wR(),
      n = nv(),
      s = Ae,
      o = s('%Map%', !0),
      a = s('%Set%', !0),
      c = Et(),
      l = c('Array.prototype.push'),
      u = c('String.prototype.charCodeAt'),
      p = c('String.prototype.slice'),
      d = function (w, V) {
        var W = w.length;
        if (V + 1 >= W) return V + 1;
        var Z = u(w, V);
        if (Z < 55296 || Z > 56319) return V + 1;
        var X = u(w, V + 1);
        return X < 56320 || X > 57343 ? V + 1 : V + 2;
      },
      h = function (w) {
        var V = 0;
        return {
          next: function () {
            var Z = V >= w.length,
              X;
            return Z || ((X = w[V]), (V += 1)), { done: Z, value: X };
          },
        };
      },
      f = function (w, V) {
        if (r(w) || e(w)) return h(w);
        if (n(w)) {
          var W = 0;
          return {
            next: function () {
              var X = d(w, W),
                Te = p(w, W, X);
              return (W = X), { done: X > w.length, value: Te };
            },
          };
        }
        if (V && typeof w['_es6-shim iterator_'] < 'u') return w['_es6-shim iterator_']();
      };
    if (!o && !a)
      hn.exports = function (w) {
        if (w != null) return f(w, !0);
      };
    else {
      var g = $R(),
        m = TR(),
        b = c('Map.prototype.forEach', !0),
        P = c('Set.prototype.forEach', !0);
      if (typeof si > 'u' || !si.versions || !si.versions.node)
        var A = c('Map.prototype.iterator', !0),
          v = c('Set.prototype.iterator', !0),
          R = function (_) {
            var w = !1;
            return {
              next: function () {
                try {
                  return { done: w, value: w ? void 0 : _.next() };
                } catch {
                  return (w = !0), { done: !0, value: void 0 };
                }
              },
            };
          };
      var O = c('Map.prototype.@@iterator', !0) || c('Map.prototype._es6-shim iterator_', !0),
        k = c('Set.prototype.@@iterator', !0) || c('Set.prototype._es6-shim iterator_', !0),
        E = function (w) {
          if (g(w)) {
            if (A) return R(A(w));
            if (O) return O(w);
            if (b) {
              var V = [];
              return (
                b(w, function (Z, X) {
                  l(V, [X, Z]);
                }),
                h(V)
              );
            }
          }
          if (m(w)) {
            if (v) return R(v(w));
            if (k) return k(w);
            if (P) {
              var W = [];
              return (
                P(w, function (Z) {
                  l(W, Z);
                }),
                h(W)
              );
            }
          }
        };
      hn.exports = function (w) {
        return E(w) || f(w);
      };
    }
  }
  return hn.exports;
}
var _i, Gc;
function xR() {
  if (Gc) return _i;
  Gc = 1;
  var e = TypeError;
  return (
    (_i = function (r) {
      if (!r || typeof r.next != 'function')
        throw new e('iterator must be an object with a `next` method');
      if (arguments.length > 1) {
        var n = arguments[1];
        if (typeof n != 'function') throw new e('`callback`, if provided, must be a function');
      }
      for (var s = n || [], o; (o = r.next()) && !o.done; ) n ? n(o.value) : s.push(o.value);
      if (!n) return s;
    }),
    _i
  );
}
var wi, qc;
function ER() {
  if (qc) return wi;
  qc = 1;
  var e = IR(),
    t = TypeError,
    r = xR();
  return (
    (wi = function (s) {
      var o = e(s);
      if (!o) throw new t('non-iterable value provided');
      return arguments.length > 1 ? r(o, arguments[1]) : r(o);
    }),
    wi
  );
}
var $i, Wc;
function AR() {
  if (Wc) return $i;
  Wc = 1;
  var e = Ae,
    t = e('%TypeError%');
  return (
    ($i = function (n, s) {
      if (n == null) throw new t(s || 'Cannot call method on ' + n);
      return n;
    }),
    $i
  );
}
var Ti, Qc;
function sv() {
  return Qc || ((Qc = 1), (Ti = AR())), Ti;
}
var Ii, Yc;
function PR() {
  if (Yc) return Ii;
  Yc = 1;
  var e = Ae,
    t = e('%Math.abs%');
  return (
    (Ii = function (n) {
      return t(n);
    }),
    Ii
  );
}
var xi, Kc;
function DR() {
  if (Kc) return xi;
  Kc = 1;
  var e = tt(),
    t = Math.floor;
  return (
    (xi = function (n) {
      return e(n) === 'BigInt' ? n : t(n);
    }),
    xi
  );
}
var Ei, Jc;
function iv() {
  return (
    Jc ||
      ((Jc = 1),
      (Ei =
        Number.isNaN ||
        function (t) {
          return t !== t;
        })),
    Ei
  );
}
var Ai, Zc;
function kR() {
  if (Zc) return Ai;
  Zc = 1;
  var e =
    Number.isNaN ||
    function (t) {
      return t !== t;
    };
  return (
    (Ai =
      Number.isFinite ||
      function (t) {
        return typeof t == 'number' && !e(t) && t !== 1 / 0 && t !== -1 / 0;
      }),
    Ai
  );
}
var Pi, Xc;
function ov() {
  if (Xc) return Pi;
  Xc = 1;
  var e = PR(),
    t = DR(),
    r = tt(),
    n = iv(),
    s = kR();
  return (
    (Pi = function (a) {
      if (r(a) !== 'Number' || n(a) || !s(a)) return !1;
      var c = e(a);
      return t(c) === c;
    }),
    Pi
  );
}
var Di, el;
function CR() {
  if (el) return Di;
  el = 1;
  var e = Ae,
    t = e('%Array.prototype%'),
    r = e('%RangeError%'),
    n = e('%SyntaxError%'),
    s = e('%TypeError%'),
    o = ov(),
    a = Math.pow(2, 32) - 1,
    c =
      e('%Object.setPrototypeOf%', !0) ||
      ([].__proto__ !== t
        ? null
        : function (l, u) {
            return (l.__proto__ = u), l;
          });
  return (
    (Di = function (u) {
      if (!o(u) || u < 0) throw new s('Assertion failed: `length` must be an integer Number >= 0');
      if (u > a) throw new r('length is greater than (2**32 - 1)');
      var p = arguments.length > 1 ? arguments[1] : t,
        d = [];
      if (p !== t) {
        if (!c)
          throw new n(
            'ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]'
          );
        c(d, p);
      }
      return u !== 0 && (d.length = u), d;
    }),
    Di
  );
}
var ki, tl;
function RR() {
  if (tl) return ki;
  tl = 1;
  var e = typeof Map == 'function' && Map.prototype,
    t =
      Object.getOwnPropertyDescriptor && e
        ? Object.getOwnPropertyDescriptor(Map.prototype, 'size')
        : null,
    r = e && t && typeof t.get == 'function' ? t.get : null,
    n = e && Map.prototype.forEach,
    s = typeof Set == 'function' && Set.prototype,
    o =
      Object.getOwnPropertyDescriptor && s
        ? Object.getOwnPropertyDescriptor(Set.prototype, 'size')
        : null,
    a = s && o && typeof o.get == 'function' ? o.get : null,
    c = s && Set.prototype.forEach,
    l = typeof WeakMap == 'function' && WeakMap.prototype,
    u = l ? WeakMap.prototype.has : null,
    p = typeof WeakSet == 'function' && WeakSet.prototype,
    d = p ? WeakSet.prototype.has : null,
    h = typeof WeakRef == 'function' && WeakRef.prototype,
    f = h ? WeakRef.prototype.deref : null,
    g = Boolean.prototype.valueOf,
    m = Object.prototype.toString,
    b = Function.prototype.toString,
    P = String.prototype.match,
    A = String.prototype.slice,
    v = String.prototype.replace,
    R = String.prototype.toUpperCase,
    O = String.prototype.toLowerCase,
    k = RegExp.prototype.test,
    E = Array.prototype.concat,
    _ = Array.prototype.join,
    w = Array.prototype.slice,
    V = Math.floor,
    W = typeof BigInt == 'function' ? BigInt.prototype.valueOf : null,
    Z = Object.getOwnPropertySymbols,
    X =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? Symbol.prototype.toString
        : null,
    Te = typeof Symbol == 'function' && typeof Symbol.iterator == 'object',
    Ie =
      typeof Symbol == 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === Te || !0)
        ? Symbol.toStringTag
        : null,
    fr = Object.prototype.propertyIsEnumerable,
    jt =
      (typeof Reflect == 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) ||
      ([].__proto__ === Array.prototype
        ? function (S) {
            return S.__proto__;
          }
        : null);
  function At(S, $) {
    if (S === 1 / 0 || S === -1 / 0 || S !== S || (S && S > -1e3 && S < 1e3) || k.call(/e/, $))
      return $;
    var Se = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof S == 'number') {
      var xe = S < 0 ? -V(-S) : V(S);
      if (xe !== S) {
        var Me = String(xe),
          he = A.call($, Me.length + 1);
        return v.call(Me, Se, '$&_') + '.' + v.call(v.call(he, /([0-9]{3})/g, '$&_'), /_$/, '');
      }
    }
    return v.call($, Se, '$&_');
  }
  var an = c_,
    Nn = an.custom,
    Mn = Ve(Nn) ? Nn : null;
  ki = function S($, Se, xe, Me) {
    var he = Se || {};
    if (rt(he, 'quoteStyle') && he.quoteStyle !== 'single' && he.quoteStyle !== 'double')
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (
      rt(he, 'maxStringLength') &&
      (typeof he.maxStringLength == 'number'
        ? he.maxStringLength < 0 && he.maxStringLength !== 1 / 0
        : he.maxStringLength !== null)
    )
      throw new TypeError(
        'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
      );
    var Ht = rt(he, 'customInspect') ? he.customInspect : !0;
    if (typeof Ht != 'boolean' && Ht !== 'symbol')
      throw new TypeError(
        'option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`'
      );
    if (
      rt(he, 'indent') &&
      he.indent !== null &&
      he.indent !== '	' &&
      !(parseInt(he.indent, 10) === he.indent && he.indent > 0)
    )
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (rt(he, 'numericSeparator') && typeof he.numericSeparator != 'boolean')
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var mr = he.numericSeparator;
    if (typeof $ > 'u') return 'undefined';
    if ($ === null) return 'null';
    if (typeof $ == 'boolean') return $ ? 'true' : 'false';
    if (typeof $ == 'string') return nc($, he);
    if (typeof $ == 'number') {
      if ($ === 0) return 1 / 0 / $ > 0 ? '0' : '-0';
      var nt = String($);
      return mr ? At($, nt) : nt;
    }
    if (typeof $ == 'bigint') {
      var Vt = String($) + 'n';
      return mr ? At($, Vt) : Vt;
    }
    var Ks = typeof he.depth > 'u' ? 5 : he.depth;
    if ((typeof xe > 'u' && (xe = 0), xe >= Ks && Ks > 0 && typeof $ == 'object'))
      return ln($) ? '[Array]' : '[Object]';
    var Ar = CS(he, xe);
    if (typeof Me > 'u') Me = [];
    else if (rc(Me, $) >= 0) return '[Circular]';
    function pt(Pr, Fn, OS) {
      if ((Fn && ((Me = w.call(Me)), Me.push(Fn)), OS)) {
        var pc = { depth: he.depth };
        return rt(he, 'quoteStyle') && (pc.quoteStyle = he.quoteStyle), S(Pr, pc, xe + 1, Me);
      }
      return S(Pr, he, xe + 1, Me);
    }
    if (typeof $ == 'function' && !Un($)) {
      var ic = $S($),
        oc = Bn($, pt);
      return (
        '[Function' +
        (ic ? ': ' + ic : ' (anonymous)') +
        ']' +
        (oc.length > 0 ? ' { ' + _.call(oc, ', ') + ' }' : '')
      );
    }
    if (Ve($)) {
      var ac = Te ? v.call(String($), /^(Symbol\(.*\))_[^)]*$/, '$1') : X.call($);
      return typeof $ == 'object' && !Te ? un(ac) : ac;
    }
    if (PS($)) {
      for (
        var dn = '<' + O.call(String($.nodeName)), Js = $.attributes || [], jn = 0;
        jn < Js.length;
        jn++
      )
        dn += ' ' + Js[jn].name + '=' + cn(Gs(Js[jn].value), 'double', he);
      return (
        (dn += '>'),
        $.childNodes && $.childNodes.length && (dn += '...'),
        (dn += '</' + O.call(String($.nodeName)) + '>'),
        dn
      );
    }
    if (ln($)) {
      if ($.length === 0) return '[]';
      var Zs = Bn($, pt);
      return Ar && !kS(Zs) ? '[' + Ys(Zs, Ar) + ']' : '[ ' + _.call(Zs, ', ') + ' ]';
    }
    if (Ws($)) {
      var Xs = Bn($, pt);
      return !('cause' in Error.prototype) && 'cause' in $ && !fr.call($, 'cause')
        ? '{ [' + String($) + '] ' + _.call(E.call('[cause]: ' + pt($.cause), Xs), ', ') + ' }'
        : Xs.length === 0
          ? '[' + String($) + ']'
          : '{ [' + String($) + '] ' + _.call(Xs, ', ') + ' }';
    }
    if (typeof $ == 'object' && Ht) {
      if (Mn && typeof $[Mn] == 'function' && an) return an($, { depth: Ks - xe });
      if (Ht !== 'symbol' && typeof $.inspect == 'function') return $.inspect();
    }
    if (TS($)) {
      var cc = [];
      return (
        n &&
          n.call($, function (Pr, Fn) {
            cc.push(pt(Fn, $, !0) + ' => ' + pt(Pr, $));
          }),
        sc('Map', r.call($), cc, Ar)
      );
    }
    if (ES($)) {
      var lc = [];
      return (
        c &&
          c.call($, function (Pr) {
            lc.push(pt(Pr, $));
          }),
        sc('Set', a.call($), lc, Ar)
      );
    }
    if (IS($)) return Qs('WeakMap');
    if (AS($)) return Qs('WeakSet');
    if (xS($)) return Qs('WeakRef');
    if (D($)) return un(pt(Number($)));
    if (Er($)) return un(pt(W.call($)));
    if (ce($)) return un(g.call($));
    if (Ln($)) return un(pt(String($)));
    if (!qs($) && !Un($)) {
      var ei = Bn($, pt),
        uc = jt ? jt($) === Object.prototype : $ instanceof Object || $.constructor === Object,
        ti = $ instanceof Object ? '' : 'null prototype',
        dc = !uc && Ie && Object($) === $ && Ie in $ ? A.call(Ft($), 8, -1) : ti ? 'Object' : '',
        RS =
          uc || typeof $.constructor != 'function'
            ? ''
            : $.constructor.name
              ? $.constructor.name + ' '
              : '',
        ri = RS + (dc || ti ? '[' + _.call(E.call([], dc || [], ti || []), ': ') + '] ' : '');
      return ei.length === 0
        ? ri + '{}'
        : Ar
          ? ri + '{' + Ys(ei, Ar) + '}'
          : ri + '{ ' + _.call(ei, ', ') + ' }';
    }
    return String($);
  };
  function cn(S, $, Se) {
    var xe = (Se.quoteStyle || $) === 'double' ? '"' : "'";
    return xe + S + xe;
  }
  function Gs(S) {
    return v.call(String(S), /"/g, '&quot;');
  }
  function ln(S) {
    return Ft(S) === '[object Array]' && (!Ie || !(typeof S == 'object' && Ie in S));
  }
  function qs(S) {
    return Ft(S) === '[object Date]' && (!Ie || !(typeof S == 'object' && Ie in S));
  }
  function Un(S) {
    return Ft(S) === '[object RegExp]' && (!Ie || !(typeof S == 'object' && Ie in S));
  }
  function Ws(S) {
    return Ft(S) === '[object Error]' && (!Ie || !(typeof S == 'object' && Ie in S));
  }
  function Ln(S) {
    return Ft(S) === '[object String]' && (!Ie || !(typeof S == 'object' && Ie in S));
  }
  function D(S) {
    return Ft(S) === '[object Number]' && (!Ie || !(typeof S == 'object' && Ie in S));
  }
  function ce(S) {
    return Ft(S) === '[object Boolean]' && (!Ie || !(typeof S == 'object' && Ie in S));
  }
  function Ve(S) {
    if (Te) return S && typeof S == 'object' && S instanceof Symbol;
    if (typeof S == 'symbol') return !0;
    if (!S || typeof S != 'object' || !X) return !1;
    try {
      return X.call(S), !0;
    } catch {}
    return !1;
  }
  function Er(S) {
    if (!S || typeof S != 'object' || !W) return !1;
    try {
      return W.call(S), !0;
    } catch {}
    return !1;
  }
  var ct =
    Object.prototype.hasOwnProperty ||
    function (S) {
      return S in this;
    };
  function rt(S, $) {
    return ct.call(S, $);
  }
  function Ft(S) {
    return m.call(S);
  }
  function $S(S) {
    if (S.name) return S.name;
    var $ = P.call(b.call(S), /^function\s*([\w$]+)/);
    return $ ? $[1] : null;
  }
  function rc(S, $) {
    if (S.indexOf) return S.indexOf($);
    for (var Se = 0, xe = S.length; Se < xe; Se++) if (S[Se] === $) return Se;
    return -1;
  }
  function TS(S) {
    if (!r || !S || typeof S != 'object') return !1;
    try {
      r.call(S);
      try {
        a.call(S);
      } catch {
        return !0;
      }
      return S instanceof Map;
    } catch {}
    return !1;
  }
  function IS(S) {
    if (!u || !S || typeof S != 'object') return !1;
    try {
      u.call(S, u);
      try {
        d.call(S, d);
      } catch {
        return !0;
      }
      return S instanceof WeakMap;
    } catch {}
    return !1;
  }
  function xS(S) {
    if (!f || !S || typeof S != 'object') return !1;
    try {
      return f.call(S), !0;
    } catch {}
    return !1;
  }
  function ES(S) {
    if (!a || !S || typeof S != 'object') return !1;
    try {
      a.call(S);
      try {
        r.call(S);
      } catch {
        return !0;
      }
      return S instanceof Set;
    } catch {}
    return !1;
  }
  function AS(S) {
    if (!d || !S || typeof S != 'object') return !1;
    try {
      d.call(S, d);
      try {
        u.call(S, u);
      } catch {
        return !0;
      }
      return S instanceof WeakSet;
    } catch {}
    return !1;
  }
  function PS(S) {
    return !S || typeof S != 'object'
      ? !1
      : typeof HTMLElement < 'u' && S instanceof HTMLElement
        ? !0
        : typeof S.nodeName == 'string' && typeof S.getAttribute == 'function';
  }
  function nc(S, $) {
    if (S.length > $.maxStringLength) {
      var Se = S.length - $.maxStringLength,
        xe = '... ' + Se + ' more character' + (Se > 1 ? 's' : '');
      return nc(A.call(S, 0, $.maxStringLength), $) + xe;
    }
    var Me = v.call(v.call(S, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, DS);
    return cn(Me, 'single', $);
  }
  function DS(S) {
    var $ = S.charCodeAt(0),
      Se = { 8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r' }[$];
    return Se ? '\\' + Se : '\\x' + ($ < 16 ? '0' : '') + R.call($.toString(16));
  }
  function un(S) {
    return 'Object(' + S + ')';
  }
  function Qs(S) {
    return S + ' { ? }';
  }
  function sc(S, $, Se, xe) {
    var Me = xe ? Ys(Se, xe) : _.call(Se, ', ');
    return S + ' (' + $ + ') {' + Me + '}';
  }
  function kS(S) {
    for (var $ = 0; $ < S.length; $++)
      if (
        rc(
          S[$],
          `
`
        ) >= 0
      )
        return !1;
    return !0;
  }
  function CS(S, $) {
    var Se;
    if (S.indent === '	') Se = '	';
    else if (typeof S.indent == 'number' && S.indent > 0) Se = _.call(Array(S.indent + 1), ' ');
    else return null;
    return { base: Se, prev: _.call(Array($ + 1), Se) };
  }
  function Ys(S, $) {
    if (S.length === 0) return '';
    var Se =
      `
` +
      $.prev +
      $.base;
    return (
      Se +
      _.call(S, ',' + Se) +
      `
` +
      $.prev
    );
  }
  function Bn(S, $) {
    var Se = ln(S),
      xe = [];
    if (Se) {
      xe.length = S.length;
      for (var Me = 0; Me < S.length; Me++) xe[Me] = rt(S, Me) ? $(S[Me], S) : '';
    }
    var he = typeof Z == 'function' ? Z(S) : [],
      Ht;
    if (Te) {
      Ht = {};
      for (var mr = 0; mr < he.length; mr++) Ht['$' + he[mr]] = he[mr];
    }
    for (var nt in S)
      rt(S, nt) &&
        ((Se && String(Number(nt)) === nt && nt < S.length) ||
          (Te && Ht['$' + nt] instanceof Symbol) ||
          (k.call(/[^\w$]/, nt)
            ? xe.push($(nt, S) + ': ' + $(S[nt], S))
            : xe.push(nt + ': ' + $(S[nt], S))));
    if (typeof Z == 'function')
      for (var Vt = 0; Vt < he.length; Vt++)
        fr.call(S, he[Vt]) && xe.push('[' + $(he[Vt]) + ']: ' + $(S[he[Vt]], S));
    return xe;
  }
  return ki;
}
var Ci, rl;
function sn() {
  return (
    rl ||
      ((rl = 1),
      (Ci = function (t) {
        return typeof t == 'string' || typeof t == 'symbol';
      })),
    Ci
  );
}
var Ri, nl;
function av() {
  if (nl) return Ri;
  nl = 1;
  var e = Ae,
    t = e('%TypeError%'),
    r = RR(),
    n = sn(),
    s = tt();
  return (
    (Ri = function (a, c) {
      if (s(a) !== 'Object') throw new t('Assertion failed: Type(O) is not Object');
      if (!n(c)) throw new t('Assertion failed: IsPropertyKey(P) is not true, got ' + r(c));
      return a[c];
    }),
    Ri
  );
}
var Oi, sl;
function cv() {
  if (sl) return Oi;
  sl = 1;
  var e = Ae,
    t = e('%Array%'),
    r = !t.isArray && Et()('Object.prototype.toString');
  return (
    (Oi =
      t.isArray ||
      function (s) {
        return r(s) === '[object Array]';
      }),
    Oi
  );
}
var Ni, il;
function La() {
  return il || ((il = 1), (Ni = cv())), Ni;
}
var Qn = { exports: {} },
  Mi,
  ol;
function OR() {
  return ol || ((ol = 1), (Mi = Ae)), Mi;
}
var Ui, al;
function NR() {
  if (al) return Ui;
  al = 1;
  var e = Ae,
    t = xr,
    r = e('%TypeError%');
  return (
    (Ui = function (s, o) {
      if (s.Type(o) !== 'Object') return !1;
      var a = {
        '[[Configurable]]': !0,
        '[[Enumerable]]': !0,
        '[[Get]]': !0,
        '[[Set]]': !0,
        '[[Value]]': !0,
        '[[Writable]]': !0,
      };
      for (var c in o) if (t(o, c) && !a[c]) return !1;
      if (s.IsDataDescriptor(o) && s.IsAccessorDescriptor(o))
        throw new r('Property Descriptors may not be both accessor and data descriptors');
      return !0;
    }),
    Ui
  );
}
var Li, cl;
function lv() {
  if (cl) return Li;
  cl = 1;
  var e = qS,
    t = Ae,
    r = e() && t('%Object.defineProperty%', !0),
    n = e.hasArrayLengthDefineBug(),
    s = n && cv(),
    o = Et(),
    a = o('Object.prototype.propertyIsEnumerable');
  return (
    (Li = function (l, u, p, d, h, f) {
      if (!r) {
        if (
          !l(f) ||
          !f['[[Configurable]]'] ||
          !f['[[Writable]]'] ||
          (h in d && a(d, h) !== !!f['[[Enumerable]]'])
        )
          return !1;
        var g = f['[[Value]]'];
        return (d[h] = g), u(d[h], g);
      }
      return n && h === 'length' && '[[Value]]' in f && s(d) && d.length !== f['[[Value]]']
        ? ((d.length = f['[[Value]]']), d.length === f['[[Value]]'])
        : (r(d, h, p(f)), !0);
    }),
    Li
  );
}
var Bi, ll;
function MR() {
  if (ll) return Bi;
  ll = 1;
  var e = xr;
  return (
    (Bi = function (r) {
      return (
        e(r, '[[StartIndex]]') &&
        e(r, '[[EndIndex]]') &&
        r['[[StartIndex]]'] >= 0 &&
        r['[[EndIndex]]'] >= r['[[StartIndex]]'] &&
        String(parseInt(r['[[StartIndex]]'], 10)) === String(r['[[StartIndex]]']) &&
        String(parseInt(r['[[EndIndex]]'], 10)) === String(r['[[EndIndex]]'])
      );
    }),
    Bi
  );
}
var ji, ul;
function Ba() {
  if (ul) return ji;
  ul = 1;
  var e = Ae,
    t = e('%TypeError%'),
    r = e('%SyntaxError%'),
    n = xr,
    s = MR(),
    o = {
      'Property Descriptor': function (c) {
        var l = {
          '[[Configurable]]': !0,
          '[[Enumerable]]': !0,
          '[[Get]]': !0,
          '[[Set]]': !0,
          '[[Value]]': !0,
          '[[Writable]]': !0,
        };
        for (var u in c) if (n(c, u) && !l[u]) return !1;
        var p = n(c, '[[Value]]'),
          d = n(c, '[[Get]]') || n(c, '[[Set]]');
        if (p && d)
          throw new t('Property Descriptors may not be both accessor and data descriptors');
        return !0;
      },
      'Match Record': s,
    };
  return (
    (ji = function (c, l, u, p) {
      var d = o[l];
      if (typeof d != 'function') throw new r('unknown record type: ' + l);
      if (c(p) !== 'Object' || !d(p)) throw new t(u + ' must be a ' + l);
    }),
    ji
  );
}
var Fi, dl;
function UR() {
  return (
    dl ||
      ((dl = 1),
      (Fi = function (t) {
        if (typeof t > 'u') return t;
        var r = {};
        return (
          '[[Value]]' in t && (r.value = t['[[Value]]']),
          '[[Writable]]' in t && (r.writable = !!t['[[Writable]]']),
          '[[Get]]' in t && (r.get = t['[[Get]]']),
          '[[Set]]' in t && (r.set = t['[[Set]]']),
          '[[Enumerable]]' in t && (r.enumerable = !!t['[[Enumerable]]']),
          '[[Configurable]]' in t && (r.configurable = !!t['[[Configurable]]']),
          r
        );
      })),
    Fi
  );
}
var Hi, pl;
function uv() {
  if (pl) return Hi;
  pl = 1;
  var e = Ba(),
    t = UR(),
    r = tt();
  return (
    (Hi = function (s) {
      return typeof s < 'u' && e(r, 'Property Descriptor', 'Desc', s), t(s);
    }),
    Hi
  );
}
var Vi, hl;
function LR() {
  if (hl) return Vi;
  hl = 1;
  var e = xr,
    t = Ba(),
    r = tt();
  return (
    (Vi = function (s) {
      return !(
        typeof s > 'u' ||
        (t(r, 'Property Descriptor', 'Desc', s), !e(s, '[[Get]]') && !e(s, '[[Set]]'))
      );
    }),
    Vi
  );
}
var zi, fl;
function dv() {
  if (fl) return zi;
  fl = 1;
  var e = xr,
    t = Ba(),
    r = tt();
  return (
    (zi = function (s) {
      return !(
        typeof s > 'u' ||
        (t(r, 'Property Descriptor', 'Desc', s), !e(s, '[[Value]]') && !e(s, '[[Writable]]'))
      );
    }),
    zi
  );
}
var Gi, ml;
function pv() {
  if (ml) return Gi;
  ml = 1;
  var e = iv();
  return (
    (Gi = function (r, n) {
      return r === n ? (r === 0 ? 1 / r === 1 / n : !0) : e(r) && e(n);
    }),
    Gi
  );
}
var qi, gl;
function hv() {
  return (
    gl ||
      ((gl = 1),
      (qi = function (t) {
        return !!t;
      })),
    qi
  );
}
var Wi, yl;
function fv() {
  return yl || ((yl = 1), (Wi = Lu())), Wi;
}
var Qi, bl;
function mv() {
  if (bl) return Qi;
  bl = 1;
  var e = xr,
    t = Ae,
    r = t('%TypeError%'),
    n = tt(),
    s = hv(),
    o = fv();
  return (
    (Qi = function (c) {
      if (n(c) !== 'Object') throw new r('ToPropertyDescriptor requires an object');
      var l = {};
      if (
        (e(c, 'enumerable') && (l['[[Enumerable]]'] = s(c.enumerable)),
        e(c, 'configurable') && (l['[[Configurable]]'] = s(c.configurable)),
        e(c, 'value') && (l['[[Value]]'] = c.value),
        e(c, 'writable') && (l['[[Writable]]'] = s(c.writable)),
        e(c, 'get'))
      ) {
        var u = c.get;
        if (typeof u < 'u' && !o(u)) throw new r('getter must be a function');
        l['[[Get]]'] = u;
      }
      if (e(c, 'set')) {
        var p = c.set;
        if (typeof p < 'u' && !o(p)) throw new r('setter must be a function');
        l['[[Set]]'] = p;
      }
      if ((e(l, '[[Get]]') || e(l, '[[Set]]')) && (e(l, '[[Value]]') || e(l, '[[Writable]]')))
        throw new r(
          'Invalid property descriptor. Cannot both specify accessors and a value or writable attribute'
        );
      return l;
    }),
    Qi
  );
}
var Yi, vl;
function BR() {
  if (vl) return Yi;
  vl = 1;
  var e = Ae,
    t = e('%TypeError%'),
    r = NR(),
    n = lv(),
    s = uv(),
    o = LR(),
    a = dv(),
    c = sn(),
    l = pv(),
    u = mv(),
    p = tt();
  return (
    (Yi = function (h, f, g) {
      if (p(h) !== 'Object') throw new t('Assertion failed: Type(O) is not Object');
      if (!c(f)) throw new t('Assertion failed: IsPropertyKey(P) is not true');
      var m = r({ Type: p, IsDataDescriptor: a, IsAccessorDescriptor: o }, g) ? g : u(g);
      if (!r({ Type: p, IsDataDescriptor: a, IsAccessorDescriptor: o }, m))
        throw new t('Assertion failed: Desc is not a valid Property Descriptor');
      return n(a, l, s, h, f, m);
    }),
    Yi
  );
}
var Sl;
function jR() {
  if (Sl) return Qn.exports;
  Sl = 1;
  var e = OR(),
    t = e('%Reflect.construct%', !0),
    r = BR();
  try {
    r({}, '', { '[[Get]]': function () {} });
  } catch {
    r = null;
  }
  if (r && t) {
    var n = {},
      s = {};
    r(s, 'length', {
      '[[Get]]': function () {
        throw n;
      },
      '[[Enumerable]]': !0,
    }),
      (Qn.exports = function (a) {
        try {
          t(a, s);
        } catch (c) {
          return c === n;
        }
      });
  } else
    Qn.exports = function (a) {
      return typeof a == 'function' && !!a.prototype;
    };
  return Qn.exports;
}
var Ki, _l;
function FR() {
  if (_l) return Ki;
  _l = 1;
  var e = Ae,
    t = e('%Symbol.species%', !0),
    r = e('%TypeError%'),
    n = CR(),
    s = av(),
    o = La(),
    a = jR(),
    c = ov(),
    l = tt();
  return (
    (Ki = function (p, d) {
      if (!c(d) || d < 0) throw new r('Assertion failed: length must be an integer >= 0');
      var h = o(p);
      if (!h) return n(d);
      var f = s(p, 'constructor');
      if ((t && l(f) === 'Object' && ((f = s(f, t)), f === null && (f = void 0)), typeof f > 'u'))
        return n(d);
      if (!a(f)) throw new r('C must be a constructor');
      return new f(d);
    }),
    Ki
  );
}
var Ji, wl;
function HR() {
  if (wl) return Ji;
  wl = 1;
  var e = Ae,
    t = Et(),
    r = e('%TypeError%'),
    n = La(),
    s = e('%Reflect.apply%', !0) || t('%Function.prototype.apply%');
  return (
    (Ji = function (a, c) {
      var l = arguments.length > 2 ? arguments[2] : [];
      if (!n(l))
        throw new r('Assertion failed: optional `argumentsList`, if provided, must be a List');
      return s(a, c, l);
    }),
    Ji
  );
}
var Zi, $l;
function gv() {
  if ($l) return Zi;
  $l = 1;
  var e = Et(),
    t = fa()(),
    r,
    n,
    s,
    o;
  if (t) {
    (r = e('Object.prototype.hasOwnProperty')), (n = e('RegExp.prototype.exec')), (s = {});
    var a = function () {
      throw s;
    };
    (o = { toString: a, valueOf: a }),
      typeof Symbol.toPrimitive == 'symbol' && (o[Symbol.toPrimitive] = a);
  }
  var c = e('Object.prototype.toString'),
    l = Object.getOwnPropertyDescriptor,
    u = '[object RegExp]';
  return (
    (Zi = t
      ? function (d) {
          if (!d || typeof d != 'object') return !1;
          var h = l(d, 'lastIndex'),
            f = h && r(h, 'value');
          if (!f) return !1;
          try {
            n(d, o);
          } catch (g) {
            return g === s;
          }
        }
      : function (d) {
          return !d || (typeof d != 'object' && typeof d != 'function') ? !1 : c(d) === u;
        }),
    Zi
  );
}
var Xi, Tl;
function VR() {
  if (Tl) return Xi;
  Tl = 1;
  var e = Ae,
    t = e('%Symbol.match%', !0),
    r = gv(),
    n = hv();
  return (
    (Xi = function (o) {
      if (!o || typeof o != 'object') return !1;
      if (t) {
        var a = o[t];
        if (typeof a < 'u') return n(a);
      }
      return r(o);
    }),
    Xi
  );
}
var eo, Il;
function zR() {
  if (Il) return eo;
  Il = 1;
  var e = Ae,
    t = WS(),
    r = e('%TypeError%'),
    n = Et(),
    s = n('Object.prototype.propertyIsEnumerable'),
    o = xr,
    a = La(),
    c = sn(),
    l = VR(),
    u = mv(),
    p = tt();
  return (
    (eo = function (h, f) {
      if (p(h) !== 'Object') throw new r('Assertion failed: O must be an Object');
      if (!c(f)) throw new r('Assertion failed: P must be a Property Key');
      if (o(h, f)) {
        if (!t) {
          var g = a(h) && f === 'length',
            m = l(h) && f === 'lastIndex';
          return {
            '[[Configurable]]': !(g || m),
            '[[Enumerable]]': s(h, f),
            '[[Value]]': h[f],
            '[[Writable]]': !0,
          };
        }
        return u(t(h, f));
      }
    }),
    eo
  );
}
var to, xl;
function yv() {
  return (
    xl ||
      ((xl = 1),
      (to = function (t) {
        return t === null || (typeof t != 'function' && typeof t != 'object');
      })),
    to
  );
}
var ro, El;
function GR() {
  if (El) return ro;
  El = 1;
  var e = Ae,
    t = e('%Object.preventExtensions%', !0),
    r = e('%Object.isExtensible%', !0),
    n = yv();
  return (
    (ro = t
      ? function (o) {
          return !n(o) && r(o);
        }
      : function (o) {
          return !n(o);
        }),
    ro
  );
}
var no, Al;
function qR() {
  if (Al) return no;
  Al = 1;
  var e = Ae,
    t = e('%TypeError%'),
    r = lv(),
    n = uv(),
    s = zR(),
    o = dv(),
    a = GR(),
    c = sn(),
    l = pv(),
    u = tt();
  return (
    (no = function (d, h, f) {
      if (u(d) !== 'Object') throw new t('Assertion failed: Type(O) is not Object');
      if (!c(h)) throw new t('Assertion failed: IsPropertyKey(P) is not true');
      var g = s(d, h),
        m = !g || a(d),
        b = g && !g['[[Configurable]]'];
      return b || !m
        ? !1
        : r(o, l, n, d, h, {
            '[[Configurable]]': !0,
            '[[Enumerable]]': !0,
            '[[Value]]': f,
            '[[Writable]]': !0,
          });
    }),
    no
  );
}
var so, Pl;
function WR() {
  if (Pl) return so;
  Pl = 1;
  var e = Ae,
    t = e('%TypeError%'),
    r = qR(),
    n = sn(),
    s = tt();
  return (
    (so = function (a, c, l) {
      if (s(a) !== 'Object') throw new t('Assertion failed: Type(O) is not Object');
      if (!n(c)) throw new t('Assertion failed: IsPropertyKey(P) is not true');
      var u = r(a, c, l);
      if (!u) throw new t('unable to create data property');
      return u;
    }),
    so
  );
}
var io, Dl;
function QR() {
  if (Dl) return io;
  Dl = 1;
  var e = Ae,
    t = e('%TypeError%'),
    r = sn(),
    n = tt();
  return (
    (io = function (o, a) {
      if (n(o) !== 'Object') throw new t('Assertion failed: `O` must be an Object');
      if (!r(a)) throw new t('Assertion failed: `P` must be a Property Key');
      return a in o;
    }),
    io
  );
}
var oo, kl;
function YR() {
  if (kl) return oo;
  kl = 1;
  var e = Et(),
    t = Ae,
    r = gv(),
    n = e('RegExp.prototype.exec'),
    s = t('%TypeError%');
  return (
    (oo = function (a) {
      if (!r(a)) throw new s('`regex` must be a RegExp');
      return function (l) {
        return n(a, l) !== null;
      };
    }),
    oo
  );
}
var ao, Cl;
function KR() {
  return (
    Cl ||
      ((Cl = 1),
      (ao = function (t) {
        return t === null || (typeof t != 'function' && typeof t != 'object');
      })),
    ao
  );
}
var co, Rl;
function JR() {
  if (Rl) return co;
  Rl = 1;
  var e = Date.prototype.getDay,
    t = function (a) {
      try {
        return e.call(a), !0;
      } catch {
        return !1;
      }
    },
    r = Object.prototype.toString,
    n = '[object Date]',
    s = fa()();
  return (
    (co = function (a) {
      return typeof a != 'object' || a === null ? !1 : s ? t(a) : r.call(a) === n;
    }),
    co
  );
}
var Yn = { exports: {} },
  Ol;
function ZR() {
  if (Ol) return Yn.exports;
  Ol = 1;
  var e = Object.prototype.toString,
    t = Uu();
  if (t) {
    var r = Symbol.prototype.toString,
      n = /^Symbol\(.*\)$/,
      s = function (a) {
        return typeof a.valueOf() != 'symbol' ? !1 : n.test(r.call(a));
      };
    Yn.exports = function (a) {
      if (typeof a == 'symbol') return !0;
      if (e.call(a) !== '[object Symbol]') return !1;
      try {
        return s(a);
      } catch {
        return !1;
      }
    };
  } else
    Yn.exports = function (a) {
      return !1;
    };
  return Yn.exports;
}
var lo, Nl;
function XR() {
  if (Nl) return lo;
  Nl = 1;
  var e = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol',
    t = KR(),
    r = Lu(),
    n = JR(),
    s = ZR(),
    o = function (l, u) {
      if (typeof l > 'u' || l === null) throw new TypeError('Cannot call method on ' + l);
      if (typeof u != 'string' || (u !== 'number' && u !== 'string'))
        throw new TypeError('hint must be "string" or "number"');
      var p = u === 'string' ? ['toString', 'valueOf'] : ['valueOf', 'toString'],
        d,
        h,
        f;
      for (f = 0; f < p.length; ++f) if (((d = l[p[f]]), r(d) && ((h = d.call(l)), t(h)))) return h;
      throw new TypeError('No default value');
    },
    a = function (l, u) {
      var p = l[u];
      if (p !== null && typeof p < 'u') {
        if (!r(p))
          throw new TypeError(
            p + ' returned for property ' + u + ' of object ' + l + ' is not a function'
          );
        return p;
      }
    };
  return (
    (lo = function (l) {
      if (t(l)) return l;
      var u = 'default';
      arguments.length > 1 &&
        (arguments[1] === String ? (u = 'string') : arguments[1] === Number && (u = 'number'));
      var p;
      if (
        (e &&
          (Symbol.toPrimitive
            ? (p = a(l, Symbol.toPrimitive))
            : s(l) && (p = Symbol.prototype.valueOf)),
        typeof p < 'u')
      ) {
        var d = p.call(l, u);
        if (t(d)) return d;
        throw new TypeError('unable to convert exotic object to primitive');
      }
      return (
        u === 'default' && (n(l) || s(l)) && (u = 'string'), o(l, u === 'default' ? 'number' : u)
      );
    }),
    lo
  );
}
var uo, Ml;
function eO() {
  if (Ml) return uo;
  Ml = 1;
  var e = XR();
  return (
    (uo = function (r) {
      return arguments.length > 1 ? e(r, arguments[1]) : e(r);
    }),
    uo
  );
}
var po, Ul;
function tO() {
  if (Ul) return po;
  Ul = 1;
  var e = Ae,
    t = e('%TypeError%'),
    r = e('%Number%'),
    n = e('%RegExp%'),
    s = e('%parseInt%'),
    o = Et(),
    a = YR(),
    c = yv(),
    l = o('String.prototype.slice'),
    u = a(/^0b[01]+$/i),
    p = a(/^0o[0-7]+$/i),
    d = a(/^[-+]0x[0-9a-f]+$/i),
    h = ['', '​', '￾'].join(''),
    f = new n('[' + h + ']', 'g'),
    g = a(f),
    m = [
      `	
\v\f\r   ᠎    `,
      '         　\u2028',
      '\u2029\uFEFF',
    ].join(''),
    b = new RegExp('(^[' + m + ']+)|([' + m + ']+$)', 'g'),
    P = o('String.prototype.replace'),
    A = function (R) {
      return P(R, b, '');
    },
    v = eO();
  return (
    (po = function R(O) {
      var k = c(O) ? O : v(O, r);
      if (typeof k == 'symbol') throw new t('Cannot convert a Symbol value to a number');
      if (typeof k == 'bigint') throw new t("Conversion from 'BigInt' to 'number' is not allowed.");
      if (typeof k == 'string') {
        if (u(k)) return R(s(l(k, 2), 2));
        if (p(k)) return R(s(l(k, 2), 8));
        if (g(k) || d(k)) return NaN;
        var E = A(k);
        if (E !== k) return R(E);
      }
      return r(k);
    }),
    po
  );
}
var ho, Ll;
function rO() {
  if (Ll) return ho;
  Ll = 1;
  var e = tO();
  return (
    (ho = function (r) {
      return e(r) >>> 0;
    }),
    ho
  );
}
var fo, Bl;
function nO() {
  if (Bl) return fo;
  Bl = 1;
  var e = Ae,
    t = e('%Object%'),
    r = sv();
  return (
    (fo = function (s) {
      return r(s), t(s);
    }),
    fo
  );
}
var mo, jl;
function sO() {
  if (jl) return mo;
  jl = 1;
  var e = Ae,
    t = e('%String%'),
    r = e('%TypeError%');
  return (
    (mo = function (s) {
      if (typeof s == 'symbol') throw new r('Cannot convert a Symbol value to a string');
      return t(s);
    }),
    mo
  );
}
var go, Fl;
function bv() {
  if (Fl) return go;
  Fl = 1;
  var e = FR(),
    t = HR(),
    r = WR(),
    n = av(),
    s = QR(),
    o = fv(),
    a = rO(),
    c = nO(),
    l = sO(),
    u = Et(),
    p = nv(),
    d = Object('a'),
    h = d[0] !== 'a' || !(0 in d),
    f = u('String.prototype.split');
  return (
    (go = function (m) {
      var b = c(this),
        P = h && p(b) ? f(b, '') : b,
        A = a(P.length);
      if (!o(m)) throw new TypeError('Array.prototype.map callback must be a function');
      var v;
      arguments.length > 1 && (v = arguments[1]);
      for (var R = e(b, A), O = 0; O < A; ) {
        var k = l(O),
          E = s(b, k);
        if (E) {
          var _ = n(b, k),
            w = t(m, v, [_, O, b]);
          r(R, k, w);
        }
        O += 1;
      }
      return R;
    }),
    go
  );
}
var yo, Hl;
function iO() {
  return (
    Hl ||
      ((Hl = 1),
      (yo = function (t) {
        var r = !0,
          n = !0,
          s = !1;
        if (typeof t == 'function') {
          try {
            t.call('f', function (o, a, c) {
              typeof c != 'object' && (r = !1);
            }),
              t.call(
                [null],
                function () {
                  'use strict';
                  n = typeof this == 'string';
                },
                'x'
              );
          } catch {
            s = !0;
          }
          return !s && r && n;
        }
        return !1;
      })),
    yo
  );
}
var bo, Vl;
function vv() {
  if (Vl) return bo;
  Vl = 1;
  var e = iO(),
    t = bv();
  return (
    (bo = function () {
      var n = Array.prototype.map;
      return e(n) ? n : t;
    }),
    bo
  );
}
var vo, zl;
function oO() {
  if (zl) return vo;
  zl = 1;
  var e = ws,
    t = vv();
  return (
    (vo = function () {
      var n = t();
      return (
        e(
          Array.prototype,
          { map: n },
          {
            map: function () {
              return Array.prototype.map !== n;
            },
          }
        ),
        n
      );
    }),
    vo
  );
}
var So, Gl;
function aO() {
  if (Gl) return So;
  Gl = 1;
  var e = ws,
    t = sv(),
    r = Et(),
    n = bv(),
    s = vv(),
    o = s(),
    a = oO(),
    c = r('Array.prototype.slice'),
    l = function (p, d) {
      return t(p), o.apply(p, c(arguments, 1));
    };
  return e(l, { getPolyfill: s, implementation: n, shim: a }), (So = l), So;
}
var cO = js;
cO();
var lO = SR(),
  uO = tt(),
  dO = ER(),
  pO = aO(),
  Sv = Ae,
  _v = ha,
  hO = _v(Sv('%Promise.all%')),
  fO = _v(Sv('%Promise.reject%')),
  wv = function (t) {
    var r = this;
    if (uO(r) !== 'Object') throw new TypeError('`this` value must be an object');
    var n = dO(t);
    return hO(
      r,
      pO(n, function (s) {
        var o = function (l) {
            return { status: 'fulfilled', value: l };
          },
          a = function (l) {
            return { status: 'rejected', reason: l };
          },
          c = lO(r, s);
        try {
          return c.then(o, a);
        } catch (l) {
          return fO(r, l);
        }
      })
    );
  },
  mO = js,
  gO = wv,
  $v = function () {
    return mO(), typeof Promise.allSettled == 'function' ? Promise.allSettled : gO;
  },
  yO = js,
  bO = $v,
  vO = ws,
  SO = function () {
    yO();
    var t = bO();
    return (
      vO(
        Promise,
        { allSettled: t },
        {
          allSettled: function () {
            return Promise.allSettled !== t;
          },
        }
      ),
      t
    );
  },
  _O = ha,
  wO = ws,
  $O = js,
  TO = wv,
  Tv = $v,
  IO = SO;
$O();
var xO = _O(Tv()),
  Iv = function (t) {
    return xO(typeof this > 'u' ? Promise : this, t);
  };
wO(Iv, { getPolyfill: Tv, implementation: TO, shim: IO });
var EO = Iv;
const ql = Lt(EO);
class AO {
  constructor() {
    M(this, '_lazyProviders');
    M(this, '_resolveProviders', () => {});
    M(this, '_providers', []);
    M(this, '_initialized', !1);
    this._lazyProviders = new Promise((t) => {
      this._resolveProviders = t;
    });
  }
  async ensureInitialized() {
    this._initialized || (await this.initializeFeatureFlags());
  }
  setProviders(t) {
    this._resolveProviders(t), (this._providers = t);
  }
  async initializeFeatureFlags() {
    (this._providers = await this._lazyProviders),
      await ql(
        this._providers.map((t) =>
          t.initializeFeatureFlags ? t.initializeFeatureFlags() : Promise.resolve()
        )
      ),
      (this._initialized = !0);
  }
  setSubjectId(t) {
    this._providers.forEach((r) => {
      var n;
      return (n = r.setSubjectId) == null ? void 0 : n.call(r, t);
    });
  }
  setSubjectAttributes(t) {
    this._providers.forEach((r) => {
      var n;
      return (n = r.setSubjectAttributes) == null ? void 0 : n.call(r, t);
    });
  }
  isFeatureEnabled(t) {
    return this._providers.reduce((r, n) => {
      const s = n.isFeatureEnabled(t);
      return s === null ? r : s;
    }, !1);
  }
  isFeatureEnabledAsync(t) {
    return this.ensureInitialized().then(() => this.isFeatureEnabled(t));
  }
  isMultivariateFeatureEnabled(t, r) {
    return this._providers.reduce((n, s) => {
      const o = s.isMultivariateFeatureEnabled(t, r);
      return o === null ? n : o;
    }, !1);
  }
  getMultivariateAssignment(t, r) {
    return this._providers.reduce((n, s) => {
      var a;
      const o = ((a = s.getMultivariateAssignment) == null ? void 0 : a.call(s, t, r)) ?? null;
      return o === null ? n : o;
    }, null);
  }
  async getFeatureFlags() {
    return (
      await this.ensureInitialized(),
      (await Promise.all(this._providers.map((n) => n.getFeatureFlags() ?? {}))).reduce(
        (n, s) => ({ ...n, ...s }),
        {}
      )
    );
  }
  async refreshFeatureFlags() {
    await ql(this._providers.map((t) => t.refreshFeatureFlags()));
  }
}
const Yr = new AO();
class PO {
  constructor(t) {
    M(this, '_flags', {});
    this._flags = Object.fromEntries(t.map((r) => [r, !0]));
  }
  refreshFeatureFlags() {
    return Promise.resolve();
  }
  isFeatureEnabled(t) {
    return this.isMultivariateFeatureEnabled(t, !0);
  }
  isMultivariateFeatureEnabled(t, r) {
    return this._flags[t] === void 0 ? null : this._flags[t] === r;
  }
  getFeatureFlags() {
    return this._flags;
  }
}
const DO = 'REACT_QUERY_OFFLINE_CACHE',
  kO = 5 * 1024 * 1024;
function fn(e, t, ...r) {
  e && console.log(t, ...r);
}
const N3 = ({
  underlyingStorage: e,
  throttleMs: t,
  cacheKey: r = DO,
  maxCacheSizeBytes: n = kO,
  enableDebugLogs: s = !1,
}) => {
  let o = null;
  const a = async () => {
    if (o)
      try {
        const c = JSON.stringify(o),
          l = c.length;
        l < n
          ? await e.set(r, c)
          : (await e.remove(r),
            fn(s, '[React Query Offline Cache] Removed offline cache. Size:', l, 'bytes')),
          (o = null);
      } catch {}
  };
  return (
    setInterval(() => {
      a();
    }, t),
    {
      persistClient: (c) => {
        o = c;
      },
      restoreClient: async () => {
        try {
          const c = await e.get(r);
          if (!c) {
            fn(s, '[React Query Offline Cache] No offline cache restored.');
            return;
          }
          const l = JSON.parse(c),
            u = c.length;
          return (
            fn(s, '[React Query Offline Cache] Restored RQ offline cache. Size:', u, 'bytes'), l
          );
        } catch {
          fn(s, '[React Query Offline Cache] Error restoring offline cache.');
          return;
        }
      },
      removeClient: () => (
        fn(s, '[React Query Offline Cache] Removed offline cache.'), e.remove(r)
      ),
    }
  );
};
var on = class {
    constructor() {
      (this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  $r = typeof window > 'u' || 'Deno' in globalThis;
function ut() {}
function CO(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function Uo(e) {
  return typeof e == 'number' && e >= 0 && e !== 1 / 0;
}
function xv(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Or(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function gt(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function Wl(e, t) {
  const { type: r = 'all', exact: n, fetchStatus: s, predicate: o, queryKey: a, stale: c } = e;
  if (a) {
    if (n) {
      if (t.queryHash !== ja(a, t.options)) return !1;
    } else if (!Tn(t.queryKey, a)) return !1;
  }
  if (r !== 'all') {
    const l = t.isActive();
    if ((r === 'active' && !l) || (r === 'inactive' && l)) return !1;
  }
  return !(
    (typeof c == 'boolean' && t.isStale() !== c) ||
    (s && s !== t.state.fetchStatus) ||
    (o && !o(t))
  );
}
function Ql(e, t) {
  const { exact: r, status: n, predicate: s, mutationKey: o } = e;
  if (o) {
    if (!t.options.mutationKey) return !1;
    if (r) {
      if (Tr(t.options.mutationKey) !== Tr(o)) return !1;
    } else if (!Tn(t.options.mutationKey, o)) return !1;
  }
  return !((n && t.state.status !== n) || (s && !s(t)));
}
function ja(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Tr)(e);
}
function Tr(e) {
  return JSON.stringify(e, (t, r) =>
    Lo(r)
      ? Object.keys(r)
          .sort()
          .reduce((n, s) => ((n[s] = r[s]), n), {})
      : r
  );
}
function Tn(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == 'object' && typeof t == 'object'
        ? !Object.keys(t).some((r) => !Tn(e[r], t[r]))
        : !1;
}
function Ev(e, t) {
  if (e === t) return e;
  const r = Yl(e) && Yl(t);
  if (r || (Lo(e) && Lo(t))) {
    const n = r ? e : Object.keys(e),
      s = n.length,
      o = r ? t : Object.keys(t),
      a = o.length,
      c = r ? [] : {};
    let l = 0;
    for (let u = 0; u < a; u++) {
      const p = r ? u : o[u];
      ((!r && n.includes(p)) || r) && e[p] === void 0 && t[p] === void 0
        ? ((c[p] = void 0), l++)
        : ((c[p] = Ev(e[p], t[p])), c[p] === e[p] && e[p] !== void 0 && l++);
    }
    return s === a && l === s ? e : c;
  }
  return t;
}
function hs(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const r in e) if (e[r] !== t[r]) return !1;
  return !0;
}
function Yl(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Lo(e) {
  if (!Kl(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const r = t.prototype;
  return !(
    !Kl(r) ||
    !r.hasOwnProperty('isPrototypeOf') ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Kl(e) {
  return Object.prototype.toString.call(e) === '[object Object]';
}
function RO(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Bo(e, t, r) {
  return typeof r.structuralSharing == 'function'
    ? r.structuralSharing(e, t)
    : r.structuralSharing !== !1
      ? Ev(e, t)
      : t;
}
function M3(e) {
  return e;
}
function OO(e, t, r = 0) {
  const n = [...e, t];
  return r && n.length > r ? n.slice(1) : n;
}
function NO(e, t, r = 0) {
  const n = [t, ...e];
  return r && n.length > r ? n.slice(0, -1) : n;
}
var Fa = Symbol();
function Av(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === Fa
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
var gr,
  tr,
  Nr,
  Eu,
  MO =
    ((Eu = class extends on {
      constructor() {
        super();
        K(this, gr);
        K(this, tr);
        K(this, Nr);
        j(this, Nr, (t) => {
          if (!$r && window.addEventListener) {
            const r = () => t();
            return (
              window.addEventListener('visibilitychange', r, !1),
              () => {
                window.removeEventListener('visibilitychange', r);
              }
            );
          }
        });
      }
      onSubscribe() {
        y(this, tr) || this.setEventListener(y(this, Nr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = y(this, tr)) == null || t.call(this), j(this, tr, void 0));
      }
      setEventListener(t) {
        var r;
        j(this, Nr, t),
          (r = y(this, tr)) == null || r.call(this),
          j(
            this,
            tr,
            t((n) => {
              typeof n == 'boolean' ? this.setFocused(n) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        y(this, gr) !== t && (j(this, gr, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((r) => {
          r(t);
        });
      }
      isFocused() {
        var t;
        return typeof y(this, gr) == 'boolean'
          ? y(this, gr)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== 'hidden';
      }
    }),
    (gr = new WeakMap()),
    (tr = new WeakMap()),
    (Nr = new WeakMap()),
    Eu),
  Ha = new MO(),
  Mr,
  rr,
  Ur,
  Au,
  UO =
    ((Au = class extends on {
      constructor() {
        super();
        K(this, Mr, !0);
        K(this, rr);
        K(this, Ur);
        j(this, Ur, (t) => {
          if (!$r && window.addEventListener) {
            const r = () => t(!0),
              n = () => t(!1);
            return (
              window.addEventListener('online', r, !1),
              window.addEventListener('offline', n, !1),
              () => {
                window.removeEventListener('online', r), window.removeEventListener('offline', n);
              }
            );
          }
        });
      }
      onSubscribe() {
        y(this, rr) || this.setEventListener(y(this, Ur));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = y(this, rr)) == null || t.call(this), j(this, rr, void 0));
      }
      setEventListener(t) {
        var r;
        j(this, Ur, t),
          (r = y(this, rr)) == null || r.call(this),
          j(this, rr, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        y(this, Mr) !== t &&
          (j(this, Mr, t),
          this.listeners.forEach((n) => {
            n(t);
          }));
      }
      isOnline() {
        return y(this, Mr);
      }
    }),
    (Mr = new WeakMap()),
    (rr = new WeakMap()),
    (Ur = new WeakMap()),
    Au),
  fs = new UO();
function jo() {
  let e, t;
  const r = new Promise((s, o) => {
    (e = s), (t = o);
  });
  (r.status = 'pending'), r.catch(() => {});
  function n(s) {
    Object.assign(r, s), delete r.resolve, delete r.reject;
  }
  return (
    (r.resolve = (s) => {
      n({ status: 'fulfilled', value: s }), e(s);
    }),
    (r.reject = (s) => {
      n({ status: 'rejected', reason: s }), t(s);
    }),
    r
  );
}
function LO(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Pv(e) {
  return (e ?? 'online') === 'online' ? fs.isOnline() : !0;
}
var Dv = class extends Error {
  constructor(e) {
    super('CancelledError'),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function _o(e) {
  return e instanceof Dv;
}
function kv(e) {
  let t = !1,
    r = 0,
    n = !1,
    s;
  const o = jo(),
    a = (m) => {
      var b;
      n || (h(new Dv(m)), (b = e.abort) == null || b.call(e));
    },
    c = () => {
      t = !0;
    },
    l = () => {
      t = !1;
    },
    u = () => Ha.isFocused() && (e.networkMode === 'always' || fs.isOnline()) && e.canRun(),
    p = () => Pv(e.networkMode) && e.canRun(),
    d = (m) => {
      var b;
      n || ((n = !0), (b = e.onSuccess) == null || b.call(e, m), s == null || s(), o.resolve(m));
    },
    h = (m) => {
      var b;
      n || ((n = !0), (b = e.onError) == null || b.call(e, m), s == null || s(), o.reject(m));
    },
    f = () =>
      new Promise((m) => {
        var b;
        (s = (P) => {
          (n || u()) && m(P);
        }),
          (b = e.onPause) == null || b.call(e);
      }).then(() => {
        var m;
        (s = void 0), n || (m = e.onContinue) == null || m.call(e);
      }),
    g = () => {
      if (n) return;
      let m;
      const b = r === 0 ? e.initialPromise : void 0;
      try {
        m = b ?? e.fn();
      } catch (P) {
        m = Promise.reject(P);
      }
      Promise.resolve(m)
        .then(d)
        .catch((P) => {
          var k;
          if (n) return;
          const A = e.retry ?? ($r ? 0 : 3),
            v = e.retryDelay ?? LO,
            R = typeof v == 'function' ? v(r, P) : v,
            O = A === !0 || (typeof A == 'number' && r < A) || (typeof A == 'function' && A(r, P));
          if (t || !O) {
            h(P);
            return;
          }
          r++,
            (k = e.onFail) == null || k.call(e, r, P),
            RO(R)
              .then(() => (u() ? void 0 : f()))
              .then(() => {
                t ? h(P) : g();
              });
        });
    };
  return {
    promise: o,
    cancel: a,
    continue: () => (s == null || s(), o),
    cancelRetry: c,
    continueRetry: l,
    canStart: p,
    start: () => (p() ? g() : f().then(g), o),
  };
}
function BO() {
  let e = [],
    t = 0,
    r = (c) => {
      c();
    },
    n = (c) => {
      c();
    },
    s = (c) => setTimeout(c, 0);
  const o = (c) => {
      t
        ? e.push(c)
        : s(() => {
            r(c);
          });
    },
    a = () => {
      const c = e;
      (e = []),
        c.length &&
          s(() => {
            n(() => {
              c.forEach((l) => {
                r(l);
              });
            });
          });
    };
  return {
    batch: (c) => {
      let l;
      t++;
      try {
        l = c();
      } finally {
        t--, t || a();
      }
      return l;
    },
    batchCalls:
      (c) =>
      (...l) => {
        o(() => {
          c(...l);
        });
      },
    schedule: o,
    setNotifyFunction: (c) => {
      r = c;
    },
    setBatchNotifyFunction: (c) => {
      n = c;
    },
    setScheduler: (c) => {
      s = c;
    },
  };
}
var Fe = BO(),
  yr,
  Pu,
  Cv =
    ((Pu = class {
      constructor() {
        K(this, yr);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          Uo(this.gcTime) &&
            j(
              this,
              yr,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? ($r ? 1 / 0 : 5 * 60 * 1e3));
      }
      clearGcTimeout() {
        y(this, yr) && (clearTimeout(y(this, yr)), j(this, yr, void 0));
      }
    }),
    (yr = new WeakMap()),
    Pu),
  Lr,
  Br,
  lt,
  We,
  In,
  br,
  mt,
  Pt,
  Du,
  jO =
    ((Du = class extends Cv {
      constructor(t) {
        super();
        K(this, mt);
        K(this, Lr);
        K(this, Br);
        K(this, lt);
        K(this, We);
        K(this, In);
        K(this, br);
        j(this, br, !1),
          j(this, In, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          j(this, lt, t.cache),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          j(this, Lr, FO(this.options)),
          (this.state = t.state ?? y(this, Lr)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = y(this, We)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...y(this, In), ...t }), this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length && this.state.fetchStatus === 'idle' && y(this, lt).remove(this);
      }
      setData(t, r) {
        const n = Bo(this.state.data, t, this.options);
        return (
          de(this, mt, Pt).call(this, {
            data: n,
            type: 'success',
            dataUpdatedAt: r == null ? void 0 : r.updatedAt,
            manual: r == null ? void 0 : r.manual,
          }),
          n
        );
      }
      setState(t, r) {
        de(this, mt, Pt).call(this, { type: 'setState', state: t, setStateOptions: r });
      }
      cancel(t) {
        var n, s;
        const r = (n = y(this, We)) == null ? void 0 : n.promise;
        return (
          (s = y(this, We)) == null || s.cancel(t), r ? r.then(ut).catch(ut) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(y(this, Lr));
      }
      isActive() {
        return this.observers.some((t) => gt(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === Fa ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
            ? this.observers.some((t) => t.getCurrentResult().isStale)
            : this.state.data === void 0;
      }
      isStaleByTime(t = 0) {
        return (
          this.state.isInvalidated || this.state.data === void 0 || !xv(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var r;
        const t = this.observers.find((n) => n.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }), (r = y(this, We)) == null || r.continue();
      }
      onOnline() {
        var r;
        const t = this.observers.find((n) => n.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }), (r = y(this, We)) == null || r.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          y(this, lt).notify({ type: 'observerAdded', query: this, observer: t }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((r) => r !== t)),
          this.observers.length ||
            (y(this, We) &&
              (y(this, br) ? y(this, We).cancel({ revert: !0 }) : y(this, We).cancelRetry()),
            this.scheduleGc()),
          y(this, lt).notify({ type: 'observerRemoved', query: this, observer: t }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated || de(this, mt, Pt).call(this, { type: 'invalidate' });
      }
      fetch(t, r) {
        var l, u, p;
        if (this.state.fetchStatus !== 'idle') {
          if (this.state.data !== void 0 && r != null && r.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (y(this, We)) return y(this, We).continueRetry(), y(this, We).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const d = this.observers.find((h) => h.options.queryFn);
          d && this.setOptions(d.options);
        }
        const n = new AbortController(),
          s = (d) => {
            Object.defineProperty(d, 'signal', {
              enumerable: !0,
              get: () => (j(this, br, !0), n.signal),
            });
          },
          o = () => {
            const d = Av(this.options, r),
              h = { queryKey: this.queryKey, meta: this.meta };
            return (
              s(h),
              j(this, br, !1),
              this.options.persister ? this.options.persister(d, h, this) : d(h)
            );
          },
          a = {
            fetchOptions: r,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: o,
          };
        s(a),
          (l = this.options.behavior) == null || l.onFetch(a, this),
          j(this, Br, this.state),
          (this.state.fetchStatus === 'idle' ||
            this.state.fetchMeta !== ((u = a.fetchOptions) == null ? void 0 : u.meta)) &&
            de(this, mt, Pt).call(this, {
              type: 'fetch',
              meta: (p = a.fetchOptions) == null ? void 0 : p.meta,
            });
        const c = (d) => {
          var h, f, g, m;
          (_o(d) && d.silent) || de(this, mt, Pt).call(this, { type: 'error', error: d }),
            _o(d) ||
              ((f = (h = y(this, lt).config).onError) == null || f.call(h, d, this),
              (m = (g = y(this, lt).config).onSettled) == null ||
                m.call(g, this.state.data, d, this)),
            this.scheduleGc();
        };
        return (
          j(
            this,
            We,
            kv({
              initialPromise: r == null ? void 0 : r.initialPromise,
              fn: a.fetchFn,
              abort: n.abort.bind(n),
              onSuccess: (d) => {
                var h, f, g, m;
                if (d === void 0) {
                  c(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(d);
                } catch (b) {
                  c(b);
                  return;
                }
                (f = (h = y(this, lt).config).onSuccess) == null || f.call(h, d, this),
                  (m = (g = y(this, lt).config).onSettled) == null ||
                    m.call(g, d, this.state.error, this),
                  this.scheduleGc();
              },
              onError: c,
              onFail: (d, h) => {
                de(this, mt, Pt).call(this, { type: 'failed', failureCount: d, error: h });
              },
              onPause: () => {
                de(this, mt, Pt).call(this, { type: 'pause' });
              },
              onContinue: () => {
                de(this, mt, Pt).call(this, { type: 'continue' });
              },
              retry: a.options.retry,
              retryDelay: a.options.retryDelay,
              networkMode: a.options.networkMode,
              canRun: () => !0,
            })
          ),
          y(this, We).start()
        );
      }
    }),
    (Lr = new WeakMap()),
    (Br = new WeakMap()),
    (lt = new WeakMap()),
    (We = new WeakMap()),
    (In = new WeakMap()),
    (br = new WeakMap()),
    (mt = new WeakSet()),
    (Pt = function (t) {
      const r = (n) => {
        switch (t.type) {
          case 'failed':
            return { ...n, fetchFailureCount: t.failureCount, fetchFailureReason: t.error };
          case 'pause':
            return { ...n, fetchStatus: 'paused' };
          case 'continue':
            return { ...n, fetchStatus: 'fetching' };
          case 'fetch':
            return { ...n, ...Rv(n.data, this.options), fetchMeta: t.meta ?? null };
          case 'success':
            return {
              ...n,
              data: t.data,
              dataUpdateCount: n.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: 'success',
              ...(!t.manual && {
                fetchStatus: 'idle',
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case 'error':
            const s = t.error;
            return _o(s) && s.revert && y(this, Br)
              ? { ...y(this, Br), fetchStatus: 'idle' }
              : {
                  ...n,
                  error: s,
                  errorUpdateCount: n.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: n.fetchFailureCount + 1,
                  fetchFailureReason: s,
                  fetchStatus: 'idle',
                  status: 'error',
                };
          case 'invalidate':
            return { ...n, isInvalidated: !0 };
          case 'setState':
            return { ...n, ...t.state };
        }
      };
      (this.state = r(this.state)),
        Fe.batch(() => {
          this.observers.forEach((n) => {
            n.onQueryUpdate();
          }),
            y(this, lt).notify({ query: this, type: 'updated', action: t });
        });
    }),
    Du);
function Rv(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Pv(t.networkMode) ? 'fetching' : 'paused',
    ...(e === void 0 && { error: null, status: 'pending' }),
  };
}
function FO(e) {
  const t = typeof e.initialData == 'function' ? e.initialData() : e.initialData,
    r = t !== void 0,
    n = r
      ? typeof e.initialDataUpdatedAt == 'function'
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? (n ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? 'success' : 'pending',
    fetchStatus: 'idle',
  };
}
var _t,
  ku,
  HO =
    ((ku = class extends on {
      constructor(t = {}) {
        super();
        K(this, _t);
        (this.config = t), j(this, _t, new Map());
      }
      build(t, r, n) {
        const s = r.queryKey,
          o = r.queryHash ?? ja(s, r);
        let a = this.get(o);
        return (
          a ||
            ((a = new jO({
              cache: this,
              queryKey: s,
              queryHash: o,
              options: t.defaultQueryOptions(r),
              state: n,
              defaultOptions: t.getQueryDefaults(s),
            })),
            this.add(a)),
          a
        );
      }
      add(t) {
        y(this, _t).has(t.queryHash) ||
          (y(this, _t).set(t.queryHash, t), this.notify({ type: 'added', query: t }));
      }
      remove(t) {
        const r = y(this, _t).get(t.queryHash);
        r &&
          (t.destroy(),
          r === t && y(this, _t).delete(t.queryHash),
          this.notify({ type: 'removed', query: t }));
      }
      clear() {
        Fe.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return y(this, _t).get(t);
      }
      getAll() {
        return [...y(this, _t).values()];
      }
      find(t) {
        const r = { exact: !0, ...t };
        return this.getAll().find((n) => Wl(r, n));
      }
      findAll(t = {}) {
        const r = this.getAll();
        return Object.keys(t).length > 0 ? r.filter((n) => Wl(t, n)) : r;
      }
      notify(t) {
        Fe.batch(() => {
          this.listeners.forEach((r) => {
            r(t);
          });
        });
      }
      onFocus() {
        Fe.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        Fe.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (_t = new WeakMap()),
    ku),
  wt,
  Ye,
  vr,
  $t,
  Zt,
  Cu,
  VO =
    ((Cu = class extends Cv {
      constructor(t) {
        super();
        K(this, $t);
        K(this, wt);
        K(this, Ye);
        K(this, vr);
        (this.mutationId = t.mutationId),
          j(this, Ye, t.mutationCache),
          j(this, wt, []),
          (this.state = t.state || Ov()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        y(this, wt).includes(t) ||
          (y(this, wt).push(t),
          this.clearGcTimeout(),
          y(this, Ye).notify({ type: 'observerAdded', mutation: this, observer: t }));
      }
      removeObserver(t) {
        j(
          this,
          wt,
          y(this, wt).filter((r) => r !== t)
        ),
          this.scheduleGc(),
          y(this, Ye).notify({ type: 'observerRemoved', mutation: this, observer: t });
      }
      optionalRemove() {
        y(this, wt).length ||
          (this.state.status === 'pending' ? this.scheduleGc() : y(this, Ye).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = y(this, vr)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var s, o, a, c, l, u, p, d, h, f, g, m, b, P, A, v, R, O, k, E;
        j(
          this,
          vr,
          kv({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error('No mutationFn found')),
            onFail: (_, w) => {
              de(this, $t, Zt).call(this, { type: 'failed', failureCount: _, error: w });
            },
            onPause: () => {
              de(this, $t, Zt).call(this, { type: 'pause' });
            },
            onContinue: () => {
              de(this, $t, Zt).call(this, { type: 'continue' });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => y(this, Ye).canRun(this),
          })
        );
        const r = this.state.status === 'pending',
          n = !y(this, vr).canStart();
        try {
          if (!r) {
            de(this, $t, Zt).call(this, { type: 'pending', variables: t, isPaused: n }),
              await ((o = (s = y(this, Ye).config).onMutate) == null ? void 0 : o.call(s, t, this));
            const w = await ((c = (a = this.options).onMutate) == null ? void 0 : c.call(a, t));
            w !== this.state.context &&
              de(this, $t, Zt).call(this, {
                type: 'pending',
                context: w,
                variables: t,
                isPaused: n,
              });
          }
          const _ = await y(this, vr).start();
          return (
            await ((u = (l = y(this, Ye).config).onSuccess) == null
              ? void 0
              : u.call(l, _, t, this.state.context, this)),
            await ((d = (p = this.options).onSuccess) == null
              ? void 0
              : d.call(p, _, t, this.state.context)),
            await ((f = (h = y(this, Ye).config).onSettled) == null
              ? void 0
              : f.call(h, _, null, this.state.variables, this.state.context, this)),
            await ((m = (g = this.options).onSettled) == null
              ? void 0
              : m.call(g, _, null, t, this.state.context)),
            de(this, $t, Zt).call(this, { type: 'success', data: _ }),
            _
          );
        } catch (_) {
          try {
            throw (
              (await ((P = (b = y(this, Ye).config).onError) == null
                ? void 0
                : P.call(b, _, t, this.state.context, this)),
              await ((v = (A = this.options).onError) == null
                ? void 0
                : v.call(A, _, t, this.state.context)),
              await ((O = (R = y(this, Ye).config).onSettled) == null
                ? void 0
                : O.call(R, void 0, _, this.state.variables, this.state.context, this)),
              await ((E = (k = this.options).onSettled) == null
                ? void 0
                : E.call(k, void 0, _, t, this.state.context)),
              _)
            );
          } finally {
            de(this, $t, Zt).call(this, { type: 'error', error: _ });
          }
        } finally {
          y(this, Ye).runNext(this);
        }
      }
    }),
    (wt = new WeakMap()),
    (Ye = new WeakMap()),
    (vr = new WeakMap()),
    ($t = new WeakSet()),
    (Zt = function (t) {
      const r = (n) => {
        switch (t.type) {
          case 'failed':
            return { ...n, failureCount: t.failureCount, failureReason: t.error };
          case 'pause':
            return { ...n, isPaused: !0 };
          case 'continue':
            return { ...n, isPaused: !1 };
          case 'pending':
            return {
              ...n,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: 'pending',
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case 'success':
            return {
              ...n,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: 'success',
              isPaused: !1,
            };
          case 'error':
            return {
              ...n,
              data: void 0,
              error: t.error,
              failureCount: n.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: 'error',
            };
        }
      };
      (this.state = r(this.state)),
        Fe.batch(() => {
          y(this, wt).forEach((n) => {
            n.onMutationUpdate(t);
          }),
            y(this, Ye).notify({ mutation: this, type: 'updated', action: t });
        });
    }),
    Cu);
function Ov() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: 'idle',
    variables: void 0,
    submittedAt: 0,
  };
}
var st,
  xn,
  Ru,
  zO =
    ((Ru = class extends on {
      constructor(t = {}) {
        super();
        K(this, st);
        K(this, xn);
        (this.config = t), j(this, st, new Map()), j(this, xn, Date.now());
      }
      build(t, r, n) {
        const s = new VO({
          mutationCache: this,
          mutationId: ++Hn(this, xn)._,
          options: t.defaultMutationOptions(r),
          state: n,
        });
        return this.add(s), s;
      }
      add(t) {
        const r = Kn(t),
          n = y(this, st).get(r) ?? [];
        n.push(t), y(this, st).set(r, n), this.notify({ type: 'added', mutation: t });
      }
      remove(t) {
        var n;
        const r = Kn(t);
        if (y(this, st).has(r)) {
          const s = (n = y(this, st).get(r)) == null ? void 0 : n.filter((o) => o !== t);
          s && (s.length === 0 ? y(this, st).delete(r) : y(this, st).set(r, s));
        }
        this.notify({ type: 'removed', mutation: t });
      }
      canRun(t) {
        var n;
        const r =
          (n = y(this, st).get(Kn(t))) == null
            ? void 0
            : n.find((s) => s.state.status === 'pending');
        return !r || r === t;
      }
      runNext(t) {
        var n;
        const r =
          (n = y(this, st).get(Kn(t))) == null
            ? void 0
            : n.find((s) => s !== t && s.state.isPaused);
        return (r == null ? void 0 : r.continue()) ?? Promise.resolve();
      }
      clear() {
        Fe.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      getAll() {
        return [...y(this, st).values()].flat();
      }
      find(t) {
        const r = { exact: !0, ...t };
        return this.getAll().find((n) => Ql(r, n));
      }
      findAll(t = {}) {
        return this.getAll().filter((r) => Ql(t, r));
      }
      notify(t) {
        Fe.batch(() => {
          this.listeners.forEach((r) => {
            r(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((r) => r.state.isPaused);
        return Fe.batch(() => Promise.all(t.map((r) => r.continue().catch(ut))));
      }
    }),
    (st = new WeakMap()),
    (xn = new WeakMap()),
    Ru);
function Kn(e) {
  var t;
  return ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId);
}
function ms(e) {
  return {
    onFetch: (t, r) => {
      var p, d, h, f, g;
      const n = t.options,
        s =
          (h =
            (d = (p = t.fetchOptions) == null ? void 0 : p.meta) == null ? void 0 : d.fetchMore) ==
          null
            ? void 0
            : h.direction,
        o = ((f = t.state.data) == null ? void 0 : f.pages) || [],
        a = ((g = t.state.data) == null ? void 0 : g.pageParams) || [];
      let c = { pages: [], pageParams: [] },
        l = 0;
      const u = async () => {
        let m = !1;
        const b = (v) => {
            Object.defineProperty(v, 'signal', {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (m = !0)
                  : t.signal.addEventListener('abort', () => {
                      m = !0;
                    }),
                t.signal
              ),
            });
          },
          P = Av(t.options, t.fetchOptions),
          A = async (v, R, O) => {
            if (m) return Promise.reject();
            if (R == null && v.pages.length) return Promise.resolve(v);
            const k = {
              queryKey: t.queryKey,
              pageParam: R,
              direction: O ? 'backward' : 'forward',
              meta: t.options.meta,
            };
            b(k);
            const E = await P(k),
              { maxPages: _ } = t.options,
              w = O ? NO : OO;
            return { pages: w(v.pages, E, _), pageParams: w(v.pageParams, R, _) };
          };
        if (s && o.length) {
          const v = s === 'backward',
            R = v ? Nv : Fo,
            O = { pages: o, pageParams: a },
            k = R(n, O);
          c = await A(O, k, v);
        } else {
          const v = e ?? o.length;
          do {
            const R = l === 0 ? (a[0] ?? n.initialPageParam) : Fo(n, c);
            if (l > 0 && R == null) break;
            (c = await A(c, R)), l++;
          } while (l < v);
        }
        return c;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var m, b;
            return (b = (m = t.options).persister) == null
              ? void 0
              : b.call(m, u, { queryKey: t.queryKey, meta: t.options.meta, signal: t.signal }, r);
          })
        : (t.fetchFn = u);
    },
  };
}
function Fo(e, { pages: t, pageParams: r }) {
  const n = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[n], t, r[n], r) : void 0;
}
function Nv(e, { pages: t, pageParams: r }) {
  var n;
  return t.length > 0
    ? (n = e.getPreviousPageParam) == null
      ? void 0
      : n.call(e, t[0], t, r[0], r)
    : void 0;
}
function GO(e, t) {
  return t ? Fo(e, t) != null : !1;
}
function qO(e, t) {
  return !t || !e.getPreviousPageParam ? !1 : Nv(e, t) != null;
}
var Oe,
  nr,
  sr,
  jr,
  Fr,
  ir,
  Hr,
  Vr,
  Ou,
  U3 =
    ((Ou = class {
      constructor(e = {}) {
        K(this, Oe);
        K(this, nr);
        K(this, sr);
        K(this, jr);
        K(this, Fr);
        K(this, ir);
        K(this, Hr);
        K(this, Vr);
        j(this, Oe, e.queryCache || new HO()),
          j(this, nr, e.mutationCache || new zO()),
          j(this, sr, e.defaultOptions || {}),
          j(this, jr, new Map()),
          j(this, Fr, new Map()),
          j(this, ir, 0);
      }
      mount() {
        Hn(this, ir)._++,
          y(this, ir) === 1 &&
            (j(
              this,
              Hr,
              Ha.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), y(this, Oe).onFocus());
              })
            ),
            j(
              this,
              Vr,
              fs.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), y(this, Oe).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        Hn(this, ir)._--,
          y(this, ir) === 0 &&
            ((e = y(this, Hr)) == null || e.call(this),
            j(this, Hr, void 0),
            (t = y(this, Vr)) == null || t.call(this),
            j(this, Vr, void 0));
      }
      isFetching(e) {
        return y(this, Oe).findAll({ ...e, fetchStatus: 'fetching' }).length;
      }
      isMutating(e) {
        return y(this, nr).findAll({ ...e, status: 'pending' }).length;
      }
      getQueryData(e) {
        var r;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (r = y(this, Oe).get(t.queryHash)) == null ? void 0 : r.state.data;
      }
      ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0) return this.fetchQuery(e);
        {
          const r = this.defaultQueryOptions(e),
            n = y(this, Oe).build(this, r);
          return (
            e.revalidateIfStale && n.isStaleByTime(Or(r.staleTime, n)) && this.prefetchQuery(r),
            Promise.resolve(t)
          );
        }
      }
      getQueriesData(e) {
        return y(this, Oe)
          .findAll(e)
          .map(({ queryKey: t, state: r }) => {
            const n = r.data;
            return [t, n];
          });
      }
      setQueryData(e, t, r) {
        const n = this.defaultQueryOptions({ queryKey: e }),
          s = y(this, Oe).get(n.queryHash),
          o = s == null ? void 0 : s.state.data,
          a = CO(t, o);
        if (a !== void 0)
          return y(this, Oe)
            .build(this, n)
            .setData(a, { ...r, manual: !0 });
      }
      setQueriesData(e, t, r) {
        return Fe.batch(() =>
          y(this, Oe)
            .findAll(e)
            .map(({ queryKey: n }) => [n, this.setQueryData(n, t, r)])
        );
      }
      getQueryState(e) {
        var r;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (r = y(this, Oe).get(t.queryHash)) == null ? void 0 : r.state;
      }
      removeQueries(e) {
        const t = y(this, Oe);
        Fe.batch(() => {
          t.findAll(e).forEach((r) => {
            t.remove(r);
          });
        });
      }
      resetQueries(e, t) {
        const r = y(this, Oe),
          n = { type: 'active', ...e };
        return Fe.batch(
          () => (
            r.findAll(e).forEach((s) => {
              s.reset();
            }),
            this.refetchQueries(n, t)
          )
        );
      }
      cancelQueries(e = {}, t = {}) {
        const r = { revert: !0, ...t },
          n = Fe.batch(() =>
            y(this, Oe)
              .findAll(e)
              .map((s) => s.cancel(r))
          );
        return Promise.all(n).then(ut).catch(ut);
      }
      invalidateQueries(e = {}, t = {}) {
        return Fe.batch(() => {
          if (
            (y(this, Oe)
              .findAll(e)
              .forEach((n) => {
                n.invalidate();
              }),
            e.refetchType === 'none')
          )
            return Promise.resolve();
          const r = { ...e, type: e.refetchType ?? e.type ?? 'active' };
          return this.refetchQueries(r, t);
        });
      }
      refetchQueries(e = {}, t) {
        const r = { ...t, cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0 },
          n = Fe.batch(() =>
            y(this, Oe)
              .findAll(e)
              .filter((s) => !s.isDisabled())
              .map((s) => {
                let o = s.fetch(void 0, r);
                return (
                  r.throwOnError || (o = o.catch(ut)),
                  s.state.fetchStatus === 'paused' ? Promise.resolve() : o
                );
              })
          );
        return Promise.all(n).then(ut);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const r = y(this, Oe).build(this, t);
        return r.isStaleByTime(Or(t.staleTime, r)) ? r.fetch(t) : Promise.resolve(r.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(ut).catch(ut);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = ms(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(ut).catch(ut);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = ms(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return fs.isOnline() ? y(this, nr).resumePausedMutations() : Promise.resolve();
      }
      getQueryCache() {
        return y(this, Oe);
      }
      getMutationCache() {
        return y(this, nr);
      }
      getDefaultOptions() {
        return y(this, sr);
      }
      setDefaultOptions(e) {
        j(this, sr, e);
      }
      setQueryDefaults(e, t) {
        y(this, jr).set(Tr(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...y(this, jr).values()];
        let r = {};
        return (
          t.forEach((n) => {
            Tn(e, n.queryKey) && (r = { ...r, ...n.defaultOptions });
          }),
          r
        );
      }
      setMutationDefaults(e, t) {
        y(this, Fr).set(Tr(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...y(this, Fr).values()];
        let r = {};
        return (
          t.forEach((n) => {
            Tn(e, n.mutationKey) && (r = { ...r, ...n.defaultOptions });
          }),
          r
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...y(this, sr).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = ja(t.queryKey, t)),
          t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== 'always'),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = 'offlineFirst'),
          t.enabled !== !0 && t.queryFn === Fa && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...y(this, sr).mutations,
              ...((e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        y(this, Oe).clear(), y(this, nr).clear();
      }
    }),
    (Oe = new WeakMap()),
    (nr = new WeakMap()),
    (sr = new WeakMap()),
    (jr = new WeakMap()),
    (Fr = new WeakMap()),
    (ir = new WeakMap()),
    (Hr = new WeakMap()),
    (Vr = new WeakMap()),
    Ou),
  Xe,
  me,
  En,
  Ke,
  Sr,
  zr,
  or,
  Tt,
  An,
  Gr,
  qr,
  _r,
  wr,
  ar,
  Wr,
  we,
  yn,
  Ho,
  Vo,
  zo,
  Go,
  qo,
  Wo,
  Qo,
  Uv,
  Nu,
  Mv =
    ((Nu = class extends on {
      constructor(t, r) {
        super();
        K(this, we);
        K(this, Xe);
        K(this, me);
        K(this, En);
        K(this, Ke);
        K(this, Sr);
        K(this, zr);
        K(this, or);
        K(this, Tt);
        K(this, An);
        K(this, Gr);
        K(this, qr);
        K(this, _r);
        K(this, wr);
        K(this, ar);
        K(this, Wr, new Set());
        (this.options = r),
          j(this, Xe, t),
          j(this, Tt, null),
          j(this, or, jo()),
          this.options.experimental_prefetchInRender ||
            y(this, or).reject(
              new Error('experimental_prefetchInRender feature flag is not enabled')
            ),
          this.bindMethods(),
          this.setOptions(r);
      }
      bindMethods() {
        this.refetch = this.refetch.bind(this);
      }
      onSubscribe() {
        this.listeners.size === 1 &&
          (y(this, me).addObserver(this),
          Jl(y(this, me), this.options) ? de(this, we, yn).call(this) : this.updateResult(),
          de(this, we, Go).call(this));
      }
      onUnsubscribe() {
        this.hasListeners() || this.destroy();
      }
      shouldFetchOnReconnect() {
        return Yo(y(this, me), this.options, this.options.refetchOnReconnect);
      }
      shouldFetchOnWindowFocus() {
        return Yo(y(this, me), this.options, this.options.refetchOnWindowFocus);
      }
      destroy() {
        (this.listeners = new Set()),
          de(this, we, qo).call(this),
          de(this, we, Wo).call(this),
          y(this, me).removeObserver(this);
      }
      setOptions(t, r) {
        const n = this.options,
          s = y(this, me);
        if (
          ((this.options = y(this, Xe).defaultQueryOptions(t)),
          this.options.enabled !== void 0 &&
            typeof this.options.enabled != 'boolean' &&
            typeof this.options.enabled != 'function' &&
            typeof gt(this.options.enabled, y(this, me)) != 'boolean')
        )
          throw new Error('Expected enabled to be a boolean or a callback that returns a boolean');
        de(this, we, Qo).call(this),
          y(this, me).setOptions(this.options),
          n._defaulted &&
            !hs(this.options, n) &&
            y(this, Xe)
              .getQueryCache()
              .notify({ type: 'observerOptionsUpdated', query: y(this, me), observer: this });
        const o = this.hasListeners();
        o && Zl(y(this, me), s, this.options, n) && de(this, we, yn).call(this),
          this.updateResult(r),
          o &&
            (y(this, me) !== s ||
              gt(this.options.enabled, y(this, me)) !== gt(n.enabled, y(this, me)) ||
              Or(this.options.staleTime, y(this, me)) !== Or(n.staleTime, y(this, me))) &&
            de(this, we, Ho).call(this);
        const a = de(this, we, Vo).call(this);
        o &&
          (y(this, me) !== s ||
            gt(this.options.enabled, y(this, me)) !== gt(n.enabled, y(this, me)) ||
            a !== y(this, ar)) &&
          de(this, we, zo).call(this, a);
      }
      getOptimisticResult(t) {
        const r = y(this, Xe).getQueryCache().build(y(this, Xe), t),
          n = this.createResult(r, t);
        return (
          QO(this, n) &&
            (j(this, Ke, n), j(this, zr, this.options), j(this, Sr, y(this, me).state)),
          n
        );
      }
      getCurrentResult() {
        return y(this, Ke);
      }
      trackResult(t, r) {
        const n = {};
        return (
          Object.keys(t).forEach((s) => {
            Object.defineProperty(n, s, {
              configurable: !1,
              enumerable: !0,
              get: () => (this.trackProp(s), r == null || r(s), t[s]),
            });
          }),
          n
        );
      }
      trackProp(t) {
        y(this, Wr).add(t);
      }
      getCurrentQuery() {
        return y(this, me);
      }
      refetch({ ...t } = {}) {
        return this.fetch({ ...t });
      }
      fetchOptimistic(t) {
        const r = y(this, Xe).defaultQueryOptions(t),
          n = y(this, Xe).getQueryCache().build(y(this, Xe), r);
        return n.fetch().then(() => this.createResult(n, r));
      }
      fetch(t) {
        return de(this, we, yn)
          .call(this, { ...t, cancelRefetch: t.cancelRefetch ?? !0 })
          .then(() => (this.updateResult(), y(this, Ke)));
      }
      createResult(t, r) {
        var _;
        const n = y(this, me),
          s = this.options,
          o = y(this, Ke),
          a = y(this, Sr),
          c = y(this, zr),
          u = t !== n ? t.state : y(this, En),
          { state: p } = t;
        let d = { ...p },
          h = !1,
          f;
        if (r._optimisticResults) {
          const w = this.hasListeners(),
            V = !w && Jl(t, r),
            W = w && Zl(t, n, r, s);
          (V || W) && (d = { ...d, ...Rv(p.data, t.options) }),
            r._optimisticResults === 'isRestoring' && (d.fetchStatus = 'idle');
        }
        let { error: g, errorUpdatedAt: m, status: b } = d;
        if (r.select && d.data !== void 0)
          if (o && d.data === (a == null ? void 0 : a.data) && r.select === y(this, An))
            f = y(this, Gr);
          else
            try {
              j(this, An, r.select),
                (f = r.select(d.data)),
                (f = Bo(o == null ? void 0 : o.data, f, r)),
                j(this, Gr, f),
                j(this, Tt, null);
            } catch (w) {
              j(this, Tt, w);
            }
        else f = d.data;
        if (r.placeholderData !== void 0 && f === void 0 && b === 'pending') {
          let w;
          if (
            o != null &&
            o.isPlaceholderData &&
            r.placeholderData === (c == null ? void 0 : c.placeholderData)
          )
            w = o.data;
          else if (
            ((w =
              typeof r.placeholderData == 'function'
                ? r.placeholderData((_ = y(this, qr)) == null ? void 0 : _.state.data, y(this, qr))
                : r.placeholderData),
            r.select && w !== void 0)
          )
            try {
              (w = r.select(w)), j(this, Tt, null);
            } catch (V) {
              j(this, Tt, V);
            }
          w !== void 0 && ((b = 'success'), (f = Bo(o == null ? void 0 : o.data, w, r)), (h = !0));
        }
        y(this, Tt) && ((g = y(this, Tt)), (f = y(this, Gr)), (m = Date.now()), (b = 'error'));
        const P = d.fetchStatus === 'fetching',
          A = b === 'pending',
          v = b === 'error',
          R = A && P,
          O = f !== void 0,
          E = {
            status: b,
            fetchStatus: d.fetchStatus,
            isPending: A,
            isSuccess: b === 'success',
            isError: v,
            isInitialLoading: R,
            isLoading: R,
            data: f,
            dataUpdatedAt: d.dataUpdatedAt,
            error: g,
            errorUpdatedAt: m,
            failureCount: d.fetchFailureCount,
            failureReason: d.fetchFailureReason,
            errorUpdateCount: d.errorUpdateCount,
            isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
            isFetchedAfterMount:
              d.dataUpdateCount > u.dataUpdateCount || d.errorUpdateCount > u.errorUpdateCount,
            isFetching: P,
            isRefetching: P && !A,
            isLoadingError: v && !O,
            isPaused: d.fetchStatus === 'paused',
            isPlaceholderData: h,
            isRefetchError: v && O,
            isStale: Va(t, r),
            refetch: this.refetch,
            promise: y(this, or),
          };
        if (this.options.experimental_prefetchInRender) {
          const w = (Z) => {
              E.status === 'error' ? Z.reject(E.error) : E.data !== void 0 && Z.resolve(E.data);
            },
            V = () => {
              const Z = j(this, or, (E.promise = jo()));
              w(Z);
            },
            W = y(this, or);
          switch (W.status) {
            case 'pending':
              t.queryHash === n.queryHash && w(W);
              break;
            case 'fulfilled':
              (E.status === 'error' || E.data !== W.value) && V();
              break;
            case 'rejected':
              (E.status !== 'error' || E.error !== W.reason) && V();
              break;
          }
        }
        return E;
      }
      updateResult(t) {
        const r = y(this, Ke),
          n = this.createResult(y(this, me), this.options);
        if (
          (j(this, Sr, y(this, me).state),
          j(this, zr, this.options),
          y(this, Sr).data !== void 0 && j(this, qr, y(this, me)),
          hs(n, r))
        )
          return;
        j(this, Ke, n);
        const s = {},
          o = () => {
            if (!r) return !0;
            const { notifyOnChangeProps: a } = this.options,
              c = typeof a == 'function' ? a() : a;
            if (c === 'all' || (!c && !y(this, Wr).size)) return !0;
            const l = new Set(c ?? y(this, Wr));
            return (
              this.options.throwOnError && l.add('error'),
              Object.keys(y(this, Ke)).some((u) => {
                const p = u;
                return y(this, Ke)[p] !== r[p] && l.has(p);
              })
            );
          };
        (t == null ? void 0 : t.listeners) !== !1 && o() && (s.listeners = !0),
          de(this, we, Uv).call(this, { ...s, ...t });
      }
      onQueryUpdate() {
        this.updateResult(), this.hasListeners() && de(this, we, Go).call(this);
      }
    }),
    (Xe = new WeakMap()),
    (me = new WeakMap()),
    (En = new WeakMap()),
    (Ke = new WeakMap()),
    (Sr = new WeakMap()),
    (zr = new WeakMap()),
    (or = new WeakMap()),
    (Tt = new WeakMap()),
    (An = new WeakMap()),
    (Gr = new WeakMap()),
    (qr = new WeakMap()),
    (_r = new WeakMap()),
    (wr = new WeakMap()),
    (ar = new WeakMap()),
    (Wr = new WeakMap()),
    (we = new WeakSet()),
    (yn = function (t) {
      de(this, we, Qo).call(this);
      let r = y(this, me).fetch(this.options, t);
      return (t != null && t.throwOnError) || (r = r.catch(ut)), r;
    }),
    (Ho = function () {
      de(this, we, qo).call(this);
      const t = Or(this.options.staleTime, y(this, me));
      if ($r || y(this, Ke).isStale || !Uo(t)) return;
      const n = xv(y(this, Ke).dataUpdatedAt, t) + 1;
      j(
        this,
        _r,
        setTimeout(() => {
          y(this, Ke).isStale || this.updateResult();
        }, n)
      );
    }),
    (Vo = function () {
      return (
        (typeof this.options.refetchInterval == 'function'
          ? this.options.refetchInterval(y(this, me))
          : this.options.refetchInterval) ?? !1
      );
    }),
    (zo = function (t) {
      de(this, we, Wo).call(this),
        j(this, ar, t),
        !(
          $r ||
          gt(this.options.enabled, y(this, me)) === !1 ||
          !Uo(y(this, ar)) ||
          y(this, ar) === 0
        ) &&
          j(
            this,
            wr,
            setInterval(
              () => {
                (this.options.refetchIntervalInBackground || Ha.isFocused()) &&
                  de(this, we, yn).call(this);
              },
              y(this, ar)
            )
          );
    }),
    (Go = function () {
      de(this, we, Ho).call(this), de(this, we, zo).call(this, de(this, we, Vo).call(this));
    }),
    (qo = function () {
      y(this, _r) && (clearTimeout(y(this, _r)), j(this, _r, void 0));
    }),
    (Wo = function () {
      y(this, wr) && (clearInterval(y(this, wr)), j(this, wr, void 0));
    }),
    (Qo = function () {
      const t = y(this, Xe).getQueryCache().build(y(this, Xe), this.options);
      if (t === y(this, me)) return;
      const r = y(this, me);
      j(this, me, t),
        j(this, En, t.state),
        this.hasListeners() && (r == null || r.removeObserver(this), t.addObserver(this));
    }),
    (Uv = function (t) {
      Fe.batch(() => {
        t.listeners &&
          this.listeners.forEach((r) => {
            r(y(this, Ke));
          }),
          y(this, Xe)
            .getQueryCache()
            .notify({ query: y(this, me), type: 'observerResultsUpdated' });
      });
    }),
    Nu);
function WO(e, t) {
  return (
    gt(t.enabled, e) !== !1 &&
    e.state.data === void 0 &&
    !(e.state.status === 'error' && t.retryOnMount === !1)
  );
}
function Jl(e, t) {
  return WO(e, t) || (e.state.data !== void 0 && Yo(e, t, t.refetchOnMount));
}
function Yo(e, t, r) {
  if (gt(t.enabled, e) !== !1) {
    const n = typeof r == 'function' ? r(e) : r;
    return n === 'always' || (n !== !1 && Va(e, t));
  }
  return !1;
}
function Zl(e, t, r, n) {
  return (
    (e !== t || gt(n.enabled, e) === !1) && (!r.suspense || e.state.status !== 'error') && Va(e, r)
  );
}
function Va(e, t) {
  return gt(t.enabled, e) !== !1 && e.isStaleByTime(Or(t.staleTime, e));
}
function QO(e, t) {
  return !hs(e.getCurrentResult(), t);
}
var L3 = class extends Mv {
    constructor(e, t) {
      super(e, t);
    }
    bindMethods() {
      super.bindMethods(),
        (this.fetchNextPage = this.fetchNextPage.bind(this)),
        (this.fetchPreviousPage = this.fetchPreviousPage.bind(this));
    }
    setOptions(e, t) {
      super.setOptions({ ...e, behavior: ms() }, t);
    }
    getOptimisticResult(e) {
      return (e.behavior = ms()), super.getOptimisticResult(e);
    }
    fetchNextPage(e) {
      return this.fetch({ ...e, meta: { fetchMore: { direction: 'forward' } } });
    }
    fetchPreviousPage(e) {
      return this.fetch({ ...e, meta: { fetchMore: { direction: 'backward' } } });
    }
    createResult(e, t) {
      var g, m;
      const { state: r } = e,
        n = super.createResult(e, t),
        { isFetching: s, isRefetching: o, isError: a, isRefetchError: c } = n,
        l = (m = (g = r.fetchMeta) == null ? void 0 : g.fetchMore) == null ? void 0 : m.direction,
        u = a && l === 'forward',
        p = s && l === 'forward',
        d = a && l === 'backward',
        h = s && l === 'backward';
      return {
        ...n,
        fetchNextPage: this.fetchNextPage,
        fetchPreviousPage: this.fetchPreviousPage,
        hasNextPage: GO(t, r.data),
        hasPreviousPage: qO(t, r.data),
        isFetchNextPageError: u,
        isFetchingNextPage: p,
        isFetchPreviousPageError: d,
        isFetchingPreviousPage: h,
        isRefetchError: c && !u && !d,
        isRefetching: o && !p && !h,
      };
    }
  },
  cr,
  lr,
  et,
  Ot,
  Ut,
  ss,
  Ko,
  Mu,
  YO =
    ((Mu = class extends on {
      constructor(t, r) {
        super();
        K(this, Ut);
        K(this, cr);
        K(this, lr);
        K(this, et);
        K(this, Ot);
        j(this, cr, t), this.setOptions(r), this.bindMethods(), de(this, Ut, ss).call(this);
      }
      bindMethods() {
        (this.mutate = this.mutate.bind(this)), (this.reset = this.reset.bind(this));
      }
      setOptions(t) {
        var n;
        const r = this.options;
        (this.options = y(this, cr).defaultMutationOptions(t)),
          hs(this.options, r) ||
            y(this, cr)
              .getMutationCache()
              .notify({ type: 'observerOptionsUpdated', mutation: y(this, et), observer: this }),
          r != null &&
          r.mutationKey &&
          this.options.mutationKey &&
          Tr(r.mutationKey) !== Tr(this.options.mutationKey)
            ? this.reset()
            : ((n = y(this, et)) == null ? void 0 : n.state.status) === 'pending' &&
              y(this, et).setOptions(this.options);
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() || (t = y(this, et)) == null || t.removeObserver(this);
      }
      onMutationUpdate(t) {
        de(this, Ut, ss).call(this), de(this, Ut, Ko).call(this, t);
      }
      getCurrentResult() {
        return y(this, lr);
      }
      reset() {
        var t;
        (t = y(this, et)) == null || t.removeObserver(this),
          j(this, et, void 0),
          de(this, Ut, ss).call(this),
          de(this, Ut, Ko).call(this);
      }
      mutate(t, r) {
        var n;
        return (
          j(this, Ot, r),
          (n = y(this, et)) == null || n.removeObserver(this),
          j(this, et, y(this, cr).getMutationCache().build(y(this, cr), this.options)),
          y(this, et).addObserver(this),
          y(this, et).execute(t)
        );
      }
    }),
    (cr = new WeakMap()),
    (lr = new WeakMap()),
    (et = new WeakMap()),
    (Ot = new WeakMap()),
    (Ut = new WeakSet()),
    (ss = function () {
      var r;
      const t = ((r = y(this, et)) == null ? void 0 : r.state) ?? Ov();
      j(this, lr, {
        ...t,
        isPending: t.status === 'pending',
        isSuccess: t.status === 'success',
        isError: t.status === 'error',
        isIdle: t.status === 'idle',
        mutate: this.mutate,
        reset: this.reset,
      });
    }),
    (Ko = function (t) {
      Fe.batch(() => {
        var r, n, s, o, a, c, l, u;
        if (y(this, Ot) && this.hasListeners()) {
          const p = y(this, lr).variables,
            d = y(this, lr).context;
          (t == null ? void 0 : t.type) === 'success'
            ? ((n = (r = y(this, Ot)).onSuccess) == null || n.call(r, t.data, p, d),
              (o = (s = y(this, Ot)).onSettled) == null || o.call(s, t.data, null, p, d))
            : (t == null ? void 0 : t.type) === 'error' &&
              ((c = (a = y(this, Ot)).onError) == null || c.call(a, t.error, p, d),
              (u = (l = y(this, Ot)).onSettled) == null || u.call(l, void 0, t.error, p, d));
        }
        this.listeners.forEach((p) => {
          p(y(this, lr));
        });
      });
    }),
    Mu);
function Lv(e) {
  return e;
}
function KO(e) {
  return {
    mutationKey: e.options.mutationKey,
    state: e.state,
    ...(e.options.scope && { scope: e.options.scope }),
    ...(e.meta && { meta: e.meta }),
  };
}
function JO(e, t) {
  var r;
  return {
    state: { ...e.state, ...(e.state.data !== void 0 && { data: t(e.state.data) }) },
    queryKey: e.queryKey,
    queryHash: e.queryHash,
    ...(e.state.status === 'pending' && {
      promise:
        (r = e.promise) == null
          ? void 0
          : r.then(t).catch((n) => Promise.reject(new Error('redacted'))),
    }),
    ...(e.meta && { meta: e.meta }),
  };
}
function ZO(e) {
  return e.state.isPaused;
}
function XO(e) {
  return e.state.status === 'success';
}
function eN(e, t = {}) {
  var c, l, u;
  const r =
      t.shouldDehydrateMutation ??
      ((c = e.getDefaultOptions().dehydrate) == null ? void 0 : c.shouldDehydrateMutation) ??
      ZO,
    n = e
      .getMutationCache()
      .getAll()
      .flatMap((p) => (r(p) ? [KO(p)] : [])),
    s =
      t.shouldDehydrateQuery ??
      ((l = e.getDefaultOptions().dehydrate) == null ? void 0 : l.shouldDehydrateQuery) ??
      XO,
    o =
      t.serializeData ??
      ((u = e.getDefaultOptions().dehydrate) == null ? void 0 : u.serializeData) ??
      Lv,
    a = e
      .getQueryCache()
      .getAll()
      .flatMap((p) => (s(p) ? [JO(p, o)] : []));
  return { mutations: n, queries: a };
}
function tN(e, t, r) {
  var l, u;
  if (typeof t != 'object' || t === null) return;
  const n = e.getMutationCache(),
    s = e.getQueryCache(),
    o =
      ((l = r == null ? void 0 : r.defaultOptions) == null ? void 0 : l.deserializeData) ??
      ((u = e.getDefaultOptions().hydrate) == null ? void 0 : u.deserializeData) ??
      Lv,
    a = t.mutations || [],
    c = t.queries || [];
  a.forEach(({ state: p, ...d }) => {
    var h, f;
    n.build(
      e,
      {
        ...((h = e.getDefaultOptions().hydrate) == null ? void 0 : h.mutations),
        ...((f = r == null ? void 0 : r.defaultOptions) == null ? void 0 : f.mutations),
        ...d,
      },
      p
    );
  }),
    c.forEach(({ queryKey: p, state: d, queryHash: h, meta: f, promise: g }) => {
      var P, A;
      let m = s.get(h);
      const b = d.data === void 0 ? d.data : o(d.data);
      if (m) {
        if (m.state.dataUpdatedAt < d.dataUpdatedAt) {
          const { fetchStatus: v, ...R } = d;
          m.setState({ ...R, data: b });
        }
      } else
        m = s.build(
          e,
          {
            ...((P = e.getDefaultOptions().hydrate) == null ? void 0 : P.queries),
            ...((A = r == null ? void 0 : r.defaultOptions) == null ? void 0 : A.queries),
            queryKey: p,
            queryHash: h,
            meta: f,
          },
          { ...d, data: b, fetchStatus: 'idle' }
        );
      if (g) {
        const v = Promise.resolve(g).then(o);
        m.fetch(void 0, { initialPromise: v });
      }
    });
}
var Bv = le.createContext(void 0),
  za = (e) => {
    const t = le.useContext(Bv);
    if (e) return e;
    if (!t) throw new Error('No QueryClient set, use QueryClientProvider to set one');
    return t;
  },
  rN = ({ client: e, children: t }) => (
    le.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    $n.jsx(Bv.Provider, { value: e, children: t })
  ),
  jv = le.createContext(!1),
  nN = () => le.useContext(jv),
  sN = jv.Provider;
function iN() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
var oN = le.createContext(iN()),
  aN = () => le.useContext(oN);
function Fv(e, t) {
  return typeof e == 'function' ? e(...t) : !!e;
}
function Hv() {}
var cN = (e, t) => {
    (e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1));
  },
  lN = (e) => {
    le.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  uN = ({ result: e, errorResetBoundary: t, throwOnError: r, query: n }) =>
    e.isError && !t.isReset() && !e.isFetching && n && Fv(r, [e.error, n]),
  dN = (e) => {
    e.suspense &&
      (e.staleTime === void 0 && (e.staleTime = 1e3),
      typeof e.gcTime == 'number' && (e.gcTime = Math.max(e.gcTime, 1e3)));
  },
  pN = (e, t) => e.isLoading && e.isFetching && !t,
  hN = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending,
  Xl = (e, t, r) =>
    t.fetchOptimistic(e).catch(() => {
      r.clearReset();
    });
function fN(e, t, r) {
  var p, d, h, f, g;
  const n = za(r),
    s = nN(),
    o = aN(),
    a = n.defaultQueryOptions(e);
  (d = (p = n.getDefaultOptions().queries) == null ? void 0 : p._experimental_beforeQuery) ==
    null || d.call(p, a),
    (a._optimisticResults = s ? 'isRestoring' : 'optimistic'),
    dN(a),
    cN(a, o),
    lN(o);
  const c = !n.getQueryCache().get(a.queryHash),
    [l] = le.useState(() => new t(n, a)),
    u = l.getOptimisticResult(a);
  if (
    (le.useSyncExternalStore(
      le.useCallback(
        (m) => {
          const b = s ? () => {} : l.subscribe(Fe.batchCalls(m));
          return l.updateResult(), b;
        },
        [l, s]
      ),
      () => l.getCurrentResult(),
      () => l.getCurrentResult()
    ),
    le.useEffect(() => {
      l.setOptions(a, { listeners: !1 });
    }, [a, l]),
    hN(a, u))
  )
    throw Xl(a, l, o);
  if (
    uN({
      result: u,
      errorResetBoundary: o,
      throwOnError: a.throwOnError,
      query: n.getQueryCache().get(a.queryHash),
    })
  )
    throw u.error;
  if (
    ((f = (h = n.getDefaultOptions().queries) == null ? void 0 : h._experimental_afterQuery) ==
      null || f.call(h, a, u),
    a.experimental_prefetchInRender && !$r && pN(u, s))
  ) {
    const m = c
      ? Xl(a, l, o)
      : (g = n.getQueryCache().get(a.queryHash)) == null
        ? void 0
        : g.promise;
    m == null ||
      m.catch(Hv).finally(() => {
        l.updateResult();
      });
  }
  return a.notifyOnChangeProps ? u : l.trackResult(u);
}
function mN(e, t) {
  return fN(e, Mv, t);
}
function B3(e, t) {
  const r = za(t),
    [n] = le.useState(() => new YO(r, e));
  le.useEffect(() => {
    n.setOptions(e);
  }, [n, e]);
  const s = le.useSyncExternalStore(
      le.useCallback((a) => n.subscribe(Fe.batchCalls(a)), [n]),
      () => n.getCurrentResult(),
      () => n.getCurrentResult()
    ),
    o = le.useCallback(
      (a, c) => {
        n.mutate(a, c).catch(Hv);
      },
      [n]
    );
  if (s.error && Fv(n.options.throwOnError, [s.error])) throw s.error;
  return { ...s, mutate: o, mutateAsync: s.mutate };
}
var gN = ['added', 'removed', 'updated'];
function eu(e) {
  return gN.includes(e);
}
async function yN({
  queryClient: e,
  persister: t,
  maxAge: r = 1e3 * 60 * 60 * 24,
  buster: n = '',
  hydrateOptions: s,
}) {
  try {
    const o = await t.restoreClient();
    if (o)
      if (o.timestamp) {
        const a = Date.now() - o.timestamp > r,
          c = o.buster !== n;
        a || c ? t.removeClient() : tN(e, o.clientState, s);
      } else t.removeClient();
  } catch {
    t.removeClient();
  }
}
async function tu({ queryClient: e, persister: t, buster: r = '', dehydrateOptions: n }) {
  const s = { buster: r, timestamp: Date.now(), clientState: eN(e, n) };
  await t.persistClient(s);
}
function bN(e) {
  const t = e.queryClient.getQueryCache().subscribe((n) => {
      eu(n.type) && tu(e);
    }),
    r = e.queryClient.getMutationCache().subscribe((n) => {
      eu(n.type) && tu(e);
    });
  return () => {
    t(), r();
  };
}
var j3 = ({ client: e, children: t, persistOptions: r, onSuccess: n, ...s }) => {
  const [o, a] = le.useState(!0),
    c = le.useRef({ persistOptions: r, onSuccess: n }),
    l = le.useRef(!1);
  return (
    le.useEffect(() => {
      c.current = { persistOptions: r, onSuccess: n };
    }),
    le.useEffect(() => {
      const u = { ...c.current.persistOptions, queryClient: e };
      return (
        l.current ||
          ((l.current = !0),
          a(!0),
          yN(u).then(async () => {
            var p, d;
            try {
              await ((d = (p = c.current).onSuccess) == null ? void 0 : d.call(p));
            } finally {
              a(!1);
            }
          })),
        o ? void 0 : bN(u)
      );
    }, [e, o]),
    $n.jsx(rN, { client: e, ...s, children: $n.jsx(sN, { value: o, children: t }) })
  );
};
function vN(e, t) {
  const r = C1(),
    n = le.useMemo(() => {
      if (r) {
        const s =
            (e == null ? void 0 : e.refetchInterval) !== void 0 &&
            (e == null ? void 0 : e.refetchInterval) !== !1,
          o = (e == null ? void 0 : e.enabled) === !1;
        if (s && !o) return { ...e, refetchInterval: !1 };
      }
      return e;
    }, [r, e]);
  return mN(n, t);
}
var Ce = ((e) => (
  (e.AuthEnabled = 'authEnabled'),
  (e.BalanceHiddenStatus = 'balanceHiddenStatus'),
  (e.BuyFormValues = 'buyFormValues'),
  (e.CachedBlocklistDiff = 'cachedBlocklistDiff'),
  (e.CachedBloomFilter = 'cachedBloomFilter'),
  (e.CachedBloomFilterHash = 'cachedBloomFilterHash'),
  (e.CachedScanDataCursor = 'cachedScanDataCursor'),
  (e.CachedScanDataRecents = 'cachedScanDataRecents'),
  (e.CustomGasControls = 'customGasControls'),
  (e.DappBrowserBookmarks = 'dAppBrowserBookmarks'),
  (e.DeviceId = 'deviceId'),
  (e.ExploreFilters = 'exploreFilters'),
  (e.FeatureFlags = 'featureFlags'),
  (e.FeatureFlagOverrides = 'featureFlagsOverrides'),
  (e.LatestCleanedStorageVersion = 'latestCleanedStorageVersion'),
  (e.LockTimerMs = 'lockTimerMs'),
  (e.MaxWalletIndex = 'maxWalletIndex'),
  (e.MinedTransactionsForAnalytics = 'minedTransactionsForAnalytics'),
  (e.OnboardingDone = 'onboardingDone'),
  (e.OwnerToClusterToLamportBalance = 'ownerToClusterToLamportBalance'),
  (e.OwnerToHiddenMints = 'ownerToHiddenMints'),
  (e.PendingTransactions = 'pendingTransactions'),
  (e.PriceMap = 'priceMap'),
  (e.RecentlyViewedSearchItems = 'RecentlyViewedSearchItems'),
  (e.SeedlessPinVerificationLockTimerInMs = 'seedlessPinVerificationLockTimerInMs'),
  (e.SeedlessDeviceID = 'seedlessDeviceID'),
  (e.UserExplorerPreferenceV2 = 'userExplorerPreferenceV2'),
  (e.UserIdCache = 'userIdCache'),
  (e.UserPropsCache = 'userPropsCache'),
  (e.UserRecentAddresses = 'userRecentAddresses'),
  (e.UserSavedAddresses = 'userSavedAddresses'),
  (e.UserTrustedApps = 'userTrustedApps'),
  (e.UserWhitelistSubdomains = 'userWhitelistedSubdomains'),
  (e.UserWhitelistedOrigins = 'userWhitelistedOrigins'),
  (e.RudderstackIdentifyData = 'rudderstackIdentifyData'),
  (e.Cluster = 'cluster'),
  (e.EncryptedMnemonic = 'encryptedMnemonic'),
  (e.EncryptedSeedAndMnemonic = 'encryptedSeedAndMnemonic'),
  (e.MainnetRpcUrl = 'mainnetRpcEndpoint'),
  (e.SwapQuoteFromAsset = 'swapQuoteFromAsset'),
  (e.SwapQuoteSlippage = 'swapQuoteSlippage'),
  (e.SwapQuoteToAsset = 'swapQuoteToAsset'),
  (e.TokenList = 'tokenList'),
  (e.TrustedApplicationsByOwnerBrowser = 'trustedApplicationsByOwner'),
  (e.TrustedApplicationsByOwnerBrowserV2 = 'trustedApplicationsByOwnerBrowser'),
  (e.TrustedApplicationsByOwnerMobile = 'trustedApplicationsByOwnerMobile'),
  (e.UnencryptedSeedAndMnemonic = 'unencryptedSeedAndMnemonic'),
  (e.UserExplorerPreference = 'userExplorerPreference'),
  e
))(Ce || {});
const SN = '__STORAGE_RESET_KEY__';
Ce.AuthEnabled,
  Ce.BalanceHiddenStatus,
  Ce.BuyFormValues,
  Ce.CustomGasControls,
  Ce.DappBrowserBookmarks,
  Ce.DeviceId,
  Ce.FeatureFlags,
  Ce.FeatureFlagOverrides,
  Ce.LatestCleanedStorageVersion,
  Ce.LockTimerMs,
  Ce.MaxWalletIndex,
  Ce.OnboardingDone,
  Ce.OwnerToHiddenMints,
  Ce.PendingTransactions,
  Ce.PriceMap,
  Ce.UserExplorerPreferenceV2,
  Ce.UserRecentAddresses,
  Ce.UserSavedAddresses,
  Ce.UserTrustedApps,
  Ce.UserWhitelistSubdomains,
  Ce.UserWhitelistedOrigins;
const Jo = le.createContext(void 0);
function _N() {
  return le.useContext(Jo);
}
class wN {
  constructor(t) {
    M(this, 'value');
    this.value = t;
  }
  deref() {
    return this.value;
  }
}
const $N = typeof WeakRef == 'function' ? WeakRef : wN;
let Jn;
var Zo;
(function (e) {
  (e.StartUpdate = 'StartUpdate'),
    (e.EndUpdate = 'EndUpdate'),
    (e.StartLoading = 'StartLoading'),
    (e.EndLoading = 'EndLoading'),
    (e.Connected = 'Connected'),
    (e.Disconnected = 'Disconnected'),
    (e.ConsumeState = 'ConsumeState');
})(Zo || (Zo = {}));
var ru;
(function (e) {
  (e.State = 'state'), (e.Reactive = 'reactive'), (e.Watcher = 'watcher');
})(ru || (ru = {}));
const { log: nu, floor: su, imul: je, abs: TN } = Math;
function bt(e, t = 0) {
  let r = t ^ e.length;
  const n = 3432918353,
    s = 461845907;
  let o = 0;
  for (; o + 4 <= e.length; ) {
    let c =
      (e.charCodeAt(o) & 255) |
      ((e.charCodeAt(o + 1) & 255) << 8) |
      ((e.charCodeAt(o + 2) & 255) << 16) |
      ((e.charCodeAt(o + 3) & 255) << 24);
    (c = je(c, n)),
      (c = (c << 15) | (c >>> 17)),
      (c = je(c, s)),
      (r ^= c),
      (r = (r << 13) | (r >>> 19)),
      (r = je(r, 5) + 3864292196),
      (o += 4);
  }
  let a = 0;
  switch (e.length & 3) {
    case 3:
      a ^= (e.charCodeAt(o + 2) & 255) << 16;
    case 2:
      a ^= (e.charCodeAt(o + 1) & 255) << 8;
    case 1:
      (a ^= e.charCodeAt(o) & 255),
        (a = je(a, n)),
        (a = (a << 15) | (a >>> 17)),
        (a = je(a, s)),
        (r ^= a);
  }
  return (
    (r ^= e.length),
    (r ^= r >>> 16),
    (r = je(r, 2246822507)),
    (r ^= r >>> 13),
    (r = je(r, 3266489909)),
    (r ^= r >>> 16),
    r >>> 0
  );
}
function IN(e, t = 0) {
  e = TN(e);
  let r = t;
  const n = 3432918353,
    s = 461845907;
  for (; e >= 4294967295; ) {
    let a = e & 4294967295;
    (e = su(e / 4294967296)),
      (a = je(a, n)),
      (a = (a << 15) | (a >>> 17)),
      (a = je(a, s)),
      (r ^= a),
      (r = (r << 13) | (r >>> 19)),
      (r = je(r, 5) + 3864292196);
  }
  if (e > 0) {
    let a = e & 4294967295;
    (a = je(a, n)), (a = (a << 15) | (a >>> 17)), (a = je(a, s)), (r ^= a);
  }
  const o = e === 0 ? 1 : su(nu(e) / nu(256)) + 1;
  return (
    (r ^= o),
    (r ^= r >>> 16),
    (r = je(r, 2246822507)),
    (r ^= r >>> 13),
    (r = je(r, 3266489909)),
    (r ^= r >>> 16),
    r >>> 0
  );
}
function Ga(e) {
  let t = 7;
  const r = 3432918353,
    n = 461845907;
  for (const s of e) {
    let o = gs(s);
    (o = je(o, r)),
      (o = (o << 15) | (o >>> 17)),
      (o = je(o, n)),
      (t ^= o),
      (t = (t << 13) | (t >>> 19)),
      (t = je(t, 5) + 3864292196);
  }
  return (
    (t ^= e.length),
    (t ^= t >>> 16),
    (t = je(t, 2246822507)),
    (t ^= t >>> 13),
    (t = je(t, 3266489909)),
    (t ^= t >>> 16),
    t >>> 0
  );
}
function xN(e) {
  let t = kN;
  const r = Object.keys(e);
  for (const n of r) t += gs(n) ^ gs(e[n]);
  return t >>> 0;
}
const EN = bt('undefined', 0),
  AN = bt('null', 1),
  PN = bt('true', 2),
  DN = bt('false', 3);
bt('array', 7);
const kN = bt('object', 8),
  CN = Object.getPrototypeOf,
  RN = new Map([
    [Object.prototype, xN],
    [Array.prototype, Ga],
  ]);
function gs(e, t = []) {
  switch (typeof e) {
    case 'undefined':
      return EN;
    case 'boolean':
      return e ? PN : DN;
    case 'number':
      return bt(String(e), 4);
    case 'string':
      return bt(e, 5);
    case 'bigint':
      return bt(e.toString(), 6);
    case 'object': {
      if (e === null) return AN;
      const r = t.indexOf(e);
      if (r !== -1) return bt(String(r), 11);
      const n = RN.get(CN(e));
      if (n) {
        t.push(e);
        const s = n(e);
        return t.pop(), s;
      }
      return Xo(e);
    }
    case 'function':
      return Xo(e);
    case 'symbol':
      return bt(e.toString(), 10);
  }
}
const iu = new WeakMap();
let ON = 1;
function Xo(e) {
  let t = iu.get(e);
  return t === void 0 && ((t = IN(ON++, 9)), iu.set(e, t)), t;
}
const NN = Ga([]);
function MN(e, t) {
  return Xo(e) ^ (t.length > 0 ? Ga(t) : NN);
}
const UN = (e, t) => e === t,
  LN = () => !1,
  ea = (e) => (e === !1 ? LN : (e ?? UN));
class Vv {
  constructor(t, r, n, s, o, a) {
    M(this, 'flags');
    M(this, 'scope');
    M(this, 'subs', new Map());
    M(this, 'deps', new Map());
    M(this, 'ref', new $N(this));
    M(this, 'equals');
    M(this, 'dirtyHead');
    M(this, 'updatedCount', 0);
    M(this, 'computedCount', 0);
    M(this, 'watchCount', 0);
    M(this, '_listeners', null);
    M(this, 'compute');
    M(this, 'args');
    M(this, 'value');
    M(this, 'tracerMeta');
    (this.flags = (t ? 4 : 0) | 2),
      (this.scope = o),
      (this.compute = r),
      (this.args = n),
      (this.equals = ea(a == null ? void 0 : a.equals)),
      (this.value = a == null ? void 0 : a.initValue);
  }
  get _state() {
    return this.flags & 3;
  }
  set _state(t) {
    this.flags = (this.flags & -4) | t;
  }
  get _isListener() {
    return (this.flags & 8) !== 0;
  }
  set _isListener(t) {
    t ? (this.flags |= 8) : (this.flags &= -9);
  }
  get listeners() {
    return (
      this._listeners ??
      (this._listeners = {
        updatedAt: 0,
        current: new Set(),
        cachedBoundAdd: this.addListener.bind(this),
      })
    );
  }
  get() {
    return eS(this);
  }
  addListener(t) {
    const { current: r } = this.listeners;
    return (
      r.has(t) || (this._isListener || (this.watchCount++, (this.flags |= 8)), Yv(this), r.add(t)),
      () => {
        r.has(t) && (r.delete(t), r.size === 0 && (Jv(this), (this.flags &= -9)));
      }
    );
  }
  addListenerLazy() {
    return (
      this._isListener || (this.watchCount++, (this.flags |= 8)), this.listeners.cachedBoundAdd
    );
  }
}
const BN = (e) => {
    const { listeners: t } = e;
    if (t === null) return;
    const { current: r } = t;
    for (const n of r) n();
  },
  qa = (e) => (e.flags & 4) !== 0;
function zv(e, t = [], r, n, s, o = !1) {
  return new Vv(o, e, t, r, n, s);
}
function ta(e) {
  const t = e._state;
  t !== 2 && ((e._state = 2), t !== 3 && ra(e));
}
function ra(e) {
  if (ye === e)
    throw new Error(
      'A signal was dirtied after it was consumed by the current function. This can cause race conditions and infinite rerenders and is not allowed.'
    );
  qa(e) ? e.watchCount > 0 && Kv(e) : (e._isListener && Yv(e), Gv(e.subs), (e.subs = new Map()));
}
function Gv(e) {
  for (const [t, r] of e) {
    const n = t.deref();
    if (n === void 0 || n.computedCount !== r.consumedAt) continue;
    const s = n._state;
    switch (s) {
      case 0:
        (n._state = 3), (n.dirtyHead = r), (r.nextDirty = void 0), ra(n);
        break;
      case 1:
      case 3: {
        let o = n.dirtyHead;
        const a = r.ord;
        if (o.ord > a) (n.dirtyHead = r), (r.nextDirty = o), s === 1 && ((n._state = 3), ra(n));
        else {
          let c = o.nextDirty;
          for (; c !== void 0 && c.ord < a; ) (o = c), (c = o.nextDirty);
          (r.nextDirty = c), (o.nextDirty = r);
        }
        break;
      }
    }
  }
}
let jN = 0;
class FN {
  constructor(t, r = (s, o) => s === o, n = 'state') {
    M(this, '_value');
    M(this, '_equals');
    M(this, '_subs', new Map());
    M(this, '_desc');
    M(this, '_id');
    M(this, '_listeners', null);
    (this._value = t), (this._equals = r), (this._id = jN++), (this._desc = `${n}${this._id}`);
  }
  get() {
    return ye !== void 0 ? (this._subs.set(ye.ref, ye.computedCount), this._value) : ZN(this);
  }
  update(t) {
    this.set(t(this._value));
  }
  peek() {
    return this._value;
  }
  set(t) {
    if (this._equals(t, this._value)) return;
    this._value = t;
    const { _subs: r, _listeners: n } = this;
    for (const [s, o] of r.entries()) {
      const a = s.deref();
      a === void 0 || o !== a.computedCount || ta(a);
    }
    (this._subs = new Map()), Zv(this);
  }
  addListener(t) {
    let r = this._listeners;
    return r === null && (this._listeners = r = new Set()), r.add(t), () => r.delete(t);
  }
}
function HN(e) {
  const t = e._listeners;
  if (t !== null) for (const r of t) r();
}
const VN = () => !1;
function qv(e, t) {
  const r =
    (t == null ? void 0 : t.equals) === !1
      ? VN
      : ((t == null ? void 0 : t.equals) ?? ((n, s) => n === s));
  return new FN(e, r, t == null ? void 0 : t.desc);
}
function Wv(e) {
  const { watchCount: t } = e,
    r = t + 1;
  if (((e.watchCount = r), !(t > 0))) {
    for (const n of e.deps.keys()) Wv(n);
    qa(e) && Kr(e);
  }
}
function Qv(e, t = 1) {
  var s;
  const { watchCount: r } = e,
    n = Math.max(r - t, 0);
  if (((e.watchCount = n), !(n > 0))) {
    for (const o of e.deps.keys()) Qv(o);
    qa(e) && ((s = e.value) == null || s.call(e));
  }
}
let ou = !1,
  is = [],
  os = [],
  ys = new Map(),
  na = [],
  au = [];
const zN = () => Promise.resolve();
let bs = null;
const Fs = (e) => {
    if (bs) return;
    let t;
    (bs = { promise: new Promise((n) => (t = n)), resolve: t }), ia(GN);
  },
  Yv = (e) => {
    is.push(e), Fs();
  },
  Kv = (e) => {
    os.push(e), Fs();
  },
  Jv = (e) => {
    const t = ys.get(e) ?? 0;
    ys.set(e, t + 1), Fs();
  },
  Zv = (e) => {
    na.push(e), Fs();
  },
  GN = async () => {
    const e = bs;
    for (; ou || os.length > 0 || is.length > 0; ) {
      ou = !1;
      const t = os;
      os = [];
      for (const n of t) Kr(n);
      const r = is;
      is = [];
      for (const n of r) KN(n);
      await zN();
    }
    (bs = null),
      oa(() => {
        for (const [t, r] of ys) Qv(t, r);
        for (const t of na) t instanceof Vv ? BN(t) : HN(t);
        for (const t of au) t.flush();
        ys.clear(), (na = []), (au = []);
      }),
      e.resolve();
  };
let cu = 0;
function sa(e, t, r, n, s) {
  return e === void 0
    ? { type: t, dep: r, ord: cu++, updatedAt: n, consumedAt: s, nextDirty: void 0 }
    : ((e.ord = cu++), (e.updatedAt = n), (e.consumedAt = s), (e.nextDirty = void 0), e);
}
function qN(e, t) {
  let r = e.dirtyHead;
  if (r === void 0) return;
  if (r.dep === t) return (e.dirtyHead = r.nextDirty), r;
  let n = r.nextDirty;
  for (; n !== void 0; ) {
    if (n.dep === t) return (r.nextDirty = n.nextDirty), n;
    (r = n), (n = r.nextDirty);
  }
}
const WN = (function* () {})().constructor;
function Xv(e) {
  return e.constructor === WN;
}
function Wa(e) {
  return e.constructor === Promise;
}
function Qa(e) {
  return e.constructor === ur;
}
class ur {
  constructor() {
    M(this, '_value');
    M(this, '_error');
    M(this, '_flags', 0);
    M(this, '_signal');
    M(this, '_equals');
    M(this, '_promise');
    M(this, '_pending', []);
    M(this, '_stateSubs', new Map());
    M(this, '_awaitSubs', new Map());
    M(this, '_version', qv(0));
    M(this, '_boundRun');
    M(this, 'run', this._run.bind(this));
  }
  static createPromise(t, r, n) {
    const s = new ur();
    return (
      (s._signal = r),
      (s._equals = (r == null ? void 0 : r.equals) ?? ((o, a) => o === a)),
      s._initFlags(1, n),
      t && s._setPromise(t),
      s
    );
  }
  static createSubscription(t, r, n) {
    const s = new ur(),
      o = n == null ? void 0 : n.initValue;
    let a = !1,
      c;
    const l = () => {
        var d;
        typeof c == 'function' ? c() : c !== void 0 && ((d = c.unsubscribe) == null || d.call(c));
        const p = s._signal;
        (p.subs = new Map()), (p._state = 2), (p.watchCount = 0), (a = !1), (c = void 0);
      },
      u = {
        get: () => s._value,
        set: (p) => {
          p !== null && typeof p == 'object' && Wa(p) ? s._setPromise(p) : s._setValue(p);
        },
        setError: (p) => {
          s._setError(p);
        },
      };
    return (
      (s._signal = zv(
        () => {
          var p;
          return (
            a === !1
              ? ((c = t(u)), (a = !0))
              : typeof c == 'function' || c === void 0
                ? (c == null || c(), (c = t(u)))
                : (p = c.update) == null || p.call(c),
            l
          );
        },
        [],
        void 0,
        r,
        n,
        !0
      )),
      (s._equals = ea(n == null ? void 0 : n.equals)),
      s._initFlags(129, o),
      s
    );
  }
  static createTask(t, r, n) {
    const s = new ur(),
      o = n == null ? void 0 : n.initValue;
    return (
      (s._signal = (...a) =>
        iM(r, () => {
          const c = t(...a);
          return typeof c == 'object' && c !== null && Xv(c) ? tS(c, void 0) : c;
        })),
      (s._equals = ea(n == null ? void 0 : n.equals)),
      s._initFlags(64, o),
      s
    );
  }
  _initFlags(t, r) {
    let n = t;
    r !== void 0 && (n |= 8), (this._flags = n), (this._value = r);
  }
  _consumeFlags(t) {
    if (ye === void 0) return;
    this._flags & 128 && this._connect();
    const r = ye.ref,
      n = this._stateSubs,
      s = n.get(r) ?? 0;
    n.set(r, s | t);
  }
  _connect() {
    const t = this._signal;
    if ((ye == null ? void 0 : ye.watchCount) === 0) {
      const { ref: r, computedCount: n, deps: s } = ye,
        o = s.get(t);
      if ((o == null ? void 0 : o.consumedAt) !== n) {
        const a = sa(o, 0, t, t.updatedCount, n);
        t.subs.set(r, a), s.set(t, a);
      }
    } else eS(t);
  }
  _setFlags(t, r = 0, n = 0) {
    const s = this._flags,
      o = (s & ~r) | t,
      a = (s ^ o) | n;
    if (((this._flags = o), a === 0)) return;
    const c = this._stateSubs;
    for (const [l, u] of c)
      if (u & a) {
        const p = l.deref();
        p && ta(p), c.delete(l);
      }
    this._version.update((l) => l + 1);
  }
  _setPending() {
    this._setFlags(1);
  }
  async _setPromise(t) {
    this._promise = t;
    const r = this._flags;
    let n = this._awaitSubs;
    r & 1 || (this._setPending(), Gv(n), (this._awaitSubs = n = new Map()));
    try {
      const s = await t;
      if (t !== this._promise) return;
      this._setValue(s, n);
    } catch (s) {
      if (t !== this._promise) return;
      this._setError(s, n);
    }
  }
  _setValue(t, r = this._awaitSubs) {
    let n = this._flags,
      s = this._value,
      o = 0;
    (!(n & 8) || this._equals(s, t) === !1) && ((this._value = s = t), (o = 16)),
      n & 2 && ((o = 32), (this._error = void 0)),
      this._scheduleSubs(r, o !== 0),
      this._setFlags(12, 3, o);
    for (const { ref: a, edge: c, resolve: l } of this._pending)
      l == null || l(s), a !== void 0 && r.set(a, c);
    this._pending = [];
  }
  _setError(t, r = this._awaitSubs) {
    let n = this._error,
      s = 0;
    n !== t && ((this._error = n = t), (s = 32)),
      this._scheduleSubs(r, s !== 0),
      this._setFlags(2, 5, s);
    for (const { ref: o, edge: a, reject: c } of this._pending)
      c == null || c(n), o !== void 0 && r.set(o, a);
    this._pending = [];
  }
  _scheduleSubs(t, r) {
    const n = r ? 2 : 3;
    for (const s of t.keys()) {
      const o = s.deref();
      o !== void 0 && ((o._state = n), Kv(o));
    }
  }
  get value() {
    return this._consumeFlags(16), this._value;
  }
  get error() {
    return this._consumeFlags(32), this._error;
  }
  get isPending() {
    return this._consumeFlags(1), (this._flags & 1) !== 0;
  }
  get isRejected() {
    return this._consumeFlags(2), (this._flags & 2) !== 0;
  }
  get isResolved() {
    return this._consumeFlags(4), (this._flags & 4) !== 0;
  }
  get isReady() {
    return this._consumeFlags(8), (this._flags & 8) !== 0;
  }
  get isSettled() {
    return this._consumeFlags(6), (this._flags & 6) !== 0;
  }
  get data() {
    return this.value;
  }
  get isFetching() {
    return this.isPending;
  }
  get isSuccess() {
    return this.isResolved;
  }
  get isError() {
    return this.isRejected;
  }
  get isFetched() {
    return this.isSettled;
  }
  _run(...t) {
    const r = this._flags,
      n = this._signal;
    if (r & 64) this._setPromise(n(...t));
    else if (n) ta(n);
    else
      throw new Error(
        'ReactivePromise is not runnable. If you are using run() on a ReactivePromise, make sure you used `task` to create this promise. If you are using rerun(), make sure its a promise that was generated by a reactive async function.'
      );
    return this;
  }
  get rerun() {
    return this.run;
  }
  then(t, r) {
    const n = this._flags;
    return new Promise((s, o) => {
      let a, c;
      if (ye !== void 0) {
        n & 128 && this._connect(), (a = ye.ref);
        const p = this._awaitSubs.get(a) ?? qN(ye, this);
        c = sa(p, 1, this, -1, ye.computedCount);
      }
      const l = t
          ? (p) => {
              try {
                const d = t(p);
                s(d);
              } catch (d) {
                o(d);
              }
            }
          : s,
        u = r
          ? (p) => {
              try {
                const d = r(p);
                s(d);
              } catch (d) {
                o(d);
              }
            }
          : o;
      n & 1
        ? this._pending.push({ ref: a, edge: c, resolve: l, reject: u })
        : (n & 4 ? l(this._value) : n & 2 && u(this._error), a && this._awaitSubs.set(a, c));
    });
  }
  catch(t) {
    return this.then(null, t);
  }
  finally(t) {
    return this.then(
      (r) => (t == null || t(), r),
      (r) => {
        throw (t == null || t(), r);
      }
    );
  }
  get [Symbol.toStringTag]() {
    return 'ReactivePromise';
  }
}
function QN(e) {
  return e instanceof ur && (e._flags & 128) !== 0;
}
let ye;
function eS(e) {
  if (ye !== void 0) {
    const { ref: t, computedCount: r, deps: n } = ye,
      s = n.get(e);
    if ((s == null ? void 0 : s.consumedAt) !== r) {
      s === void 0 && ye.watchCount > 0 && Wv(e);
      const a = Kr(e),
        c = sa(s, 0, e, a, r);
      e.subs.set(t, c), n.set(e, c);
    }
  } else Kr(e);
  return e.value;
}
function Kr(e) {
  let { ref: t, _state: r } = e;
  if (r < 2) return e.updatedCount;
  if (r === 3) {
    let n = e.dirtyHead;
    for (; n !== void 0; ) {
      if (n.type === 1) {
        const a = n.dep;
        if (a.isPending) {
          const c = e.value;
          return (
            c instanceof ur && c._setPending(),
            a._awaitSubs.set(t, n),
            (r = 1),
            (e.dirtyHead = n),
            e.updatedCount
          );
        }
        n = n.nextDirty;
        continue;
      }
      const s = n.dep,
        o = Kr(s);
      if ((s.subs.set(t, n), n.updatedAt !== o)) {
        (e.dirtyHead = n.nextDirty), (r = 2);
        break;
      }
      n = n.nextDirty;
    }
  }
  return r === 2 && YN(e), (e._state = 0), (e.dirtyHead = void 0), e.updatedCount;
}
function YN(e) {
  const t = ye,
    r = e.updatedCount,
    n = ++e.computedCount;
  try {
    ye = e;
    const s = r !== 0,
      o = e.value;
    let a = e.compute(...e.args),
      c = !1;
    if (
      (a !== null &&
        typeof a == 'object' &&
        (Xv(a) ? ((a = tS(a, e)), (c = !0)) : Wa(a) && (c = !0)),
      c)
    )
      if (
        (Jn == null || Jn.emit({ type: Zo.StartLoading, id: e.tracerMeta.id }),
        o !== null && typeof o == 'object' && Qa(o))
      )
        o._setPromise(a);
      else {
        const l = s ? void 0 : o;
        (e.value = ur.createPromise(a, e, l)), (e.updatedCount = r + 1);
      }
    else (!s || !e.equals(o, a)) && ((e.value = a), (e.updatedCount = r + 1));
  } finally {
    ye = t;
    const { ref: s, deps: o } = e;
    for (const [a, c] of o) c.consumedAt !== n && (Jv(a), a.subs.delete(s), o.delete(a));
  }
}
function KN(e, t = !1) {
  const r = e.listeners;
  t && (r === null || r.current.size === 0) && (e.watchCount++, (e.flags |= 8));
  let n = Kr(e);
  return r !== null && r.updatedAt !== n && ((r.updatedAt = n), Zv(e)), n;
}
function tS(e, t) {
  function r(n) {
    return typeof n == 'object' && n !== null && (Wa(n) || Qa(n)) ? n : Promise.resolve(n);
  }
  return new Promise((n, s) => {
    function o(l) {
      l.done ? n(l.value) : r(l.value).then(a, c);
    }
    function a(l) {
      const u = ye;
      try {
        (ye = t), o(e.next(l));
      } catch (p) {
        s(p);
      } finally {
        ye = u;
      }
    }
    function c(l) {
      const u = ye;
      try {
        (ye = t), o(e.throw(l));
      } catch (p) {
        s(p);
      } finally {
        ye = u;
      }
    }
    o(e.next());
  });
}
let ia = (e) => {
    setTimeout(() => {
      e();
    }, 0);
  },
  oa = (e) => e(),
  vs = () => {},
  aa = (e) => e.get(),
  ca = (e) => e.get();
function JN(e) {
  return ye !== void 0 ? e.get() : ca(e);
}
function ZN(e) {
  return aa(e);
}
function XN(e) {
  (ia = e.scheduleFlush ?? ia),
    (oa = e.runBatch ?? oa),
    (vs = e.getFrameworkScope ?? vs),
    (aa = e.useStateSignal ?? aa),
    (ca = e.useDerivedSignal ?? ca);
}
let eM = 0;
class tM {
  constructor(t, r) {
    M(this, 'defaultValue');
    M(this, '_key');
    M(this, '_description');
    (this.defaultValue = t),
      (this._description = r ?? `context:${eM++}`),
      (this._key = Symbol(this._description));
  }
}
const rM = (e, t) => new tM(e, t);
class Hs {
  constructor(t, r) {
    M(this, 'parentScope');
    M(this, 'contexts');
    M(this, 'children', new Map());
    M(this, 'signals', new Map());
    (this.parentScope = r),
      (this.contexts = Object.create((r == null ? void 0 : r.contexts) || null));
    for (const [n, s] of t) this.contexts[n._key] = s;
  }
  getChild(t) {
    const r = gs(t);
    let n = this.children.get(r);
    return n === void 0 && ((n = new Hs(t, this)), this.children.set(r, n)), n;
  }
  getContext(t) {
    const r = t;
    return this.contexts[r._key];
  }
  get(t, r, n) {
    var c;
    const s = (c = n == null ? void 0 : n.paramKey) == null ? void 0 : c.call(n, ...r),
      o = MN(t, s ? [s] : r);
    let a = this.signals.get(o);
    return a === void 0 && ((a = zv(t, r, o, this, n)), this.signals.set(o, a)), a;
  }
}
let nM = new Hs([]),
  Sn;
const sM = () => Sn ?? (ye == null ? void 0 : ye.scope) ?? vs() ?? nM,
  iM = (e, t) => {
    const r = Sn;
    try {
      return (Sn = e), t();
    } finally {
      Sn = r;
    }
  },
  oM = (e) => {
    const t = Sn ?? (ye == null ? void 0 : ye.scope) ?? vs();
    if (t === void 0)
      throw new Error(
        'useContext must be used within a signal hook, a withContext, or within a framework-specific context provider.'
      );
    return t.getContext(e) ?? e.defaultValue;
  };
function F3({ children: e, contexts: t, inherit: r = !0, root: n = !1 }) {
  const s = le.useContext(Jo),
    o = new Hs(t, r ? s : void 0);
  return $n.jsx(Jo.Provider, { value: o, children: e });
}
const la =
    vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED ||
    vn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE ||
    vn.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  aM = !!la.ReactCurrentDispatcher,
  lu = la.ReactCurrentDispatcher || la;
function rS() {
  const e = aM ? lu.current : lu.H;
  return !!e && e.useState !== e.useEffect;
}
function nS(e) {
  return rS()
    ? le.useSyncExternalStore(
        le.useCallback((t) => e.addListener(t), [e]),
        () => e.peek(),
        () => e.peek()
      )
    : e.peek();
}
function sS(e) {
  if (!rS()) return e.get();
  const t = le.useSyncExternalStore(
    e.addListenerLazy(),
    () => e.get(),
    () => e.get()
  );
  return typeof t == 'object' && t !== null && Qa(t) && (QN(t) && sS(t._signal), nS(t._version)), t;
}
function cM() {
  XN({ useDerivedSignal: sS, useStateSignal: nS, getFrameworkScope: _N });
}
const lM = qv;
function H3(e, t) {
  return (...r) => {
    const s = sM().get(e, r, t);
    return JN(s);
  };
}
const uM = () => {
  const e = lM(void 0, { equals: () => !1 });
  return { consume: () => e.get(), notify: () => e.set(void 0) };
};
cM();
const dM = rM(null);
function pM() {
  const e = oM(dM);
  if (!e)
    throw new Error('useStorage must be used within a ContextProvider with StorageContext set');
  return e;
}
class hM {
  constructor(t) {
    M(this, 'notifierCache', new Map());
    (this.storage = t),
      t.subscribe((r) => {
        r === SN
          ? this.notifierCache.forEach((n) => {
              n.notify();
            })
          : this.getNotifier(r).notify();
      });
  }
  getNotifier(t) {
    let r = this.notifierCache.get(t);
    return r || ((r = uM()), this.notifierCache.set(t, r)), r;
  }
  async get(t) {
    return this.getNotifier(t).consume(), this.storage.get(t);
  }
  async set(t, r) {
    await this.storage.set(t, r), this.getNotifier(t).notify();
  }
}
const uu = new WeakMap(),
  V3 = () => {
    const e = pM();
    let t = uu.get(e);
    return t === void 0 && ((t = new hM(e)), uu.set(e, t)), t;
  };
var Ue = ((e) => (
    (e.Debug = 'debug'), (e.Fatal = 'fatal'), (e.Error = 'error'), (e.Info = 'info'), e
  ))(Ue || {}),
  Xt = ((e) => (
    (e.PD = 'PD'),
    (e.DX = 'DX'),
    (e.IO = 'IO'),
    (e.PL = 'PL'),
    (e.TRA = 'TRA'),
    (e.SOC = 'SOC'),
    (e.CASH = 'CASH'),
    e
  ))(Xt || {}),
  ee = ((e) => (
    (e.Account = 'account'),
    (e.Auth = 'Auth'),
    (e.ActionBanner = 'actionBanner'),
    (e.Authentication = 'authentication'),
    (e.AutoConfirm = 'autoConfirm'),
    (e.BugReporter = 'bugReporter'),
    (e.Collectibles = 'collectibles'),
    (e.DappBrowser = 'dappBrowser'),
    (e.DappRegistry = 'dappRegistry'),
    (e.DeepLinks = 'deepLinks'),
    (e.FeatureFlags = 'featureFlags'),
    (e.Feed = 'feed'),
    (e.FeedNotifications = 'feedNotifications'),
    (e.FileLogger = 'fileLogger'),
    (e.Fungibles = 'fungibles'),
    (e.History = 'history'),
    (e.Ledger = 'ledger'),
    (e.MagicEden = 'magicEden'),
    (e.Migration = 'migration'),
    (e.MobileWalletAdapter = 'mobileWalletAdapter'),
    (e.MobileEmbedded = 'mobileEmbedded'),
    (e.Network = 'network'),
    (e.OnRamp = 'onRamp'),
    (e.Performance = 'performance'),
    (e.Prices = 'prices'),
    (e.Profiles = 'profiles'),
    (e.Provider = 'provider'),
    (e.Seedless = 'se*dless'),
    (e.Settings = 'settings'),
    (e.Simulation = 'simulation'),
    (e.Staking = 'staking'),
    (e.Storage = 'storage'),
    (e.StartUp = 'startUp'),
    (e.Swapper = 'swapper'),
    (e.Transaction = 'transaction'),
    (e.Safeguard = 'safeguard'),
    (e.Tokens = 'tokens'),
    (e.TrustedApps = 'trustedApps'),
    (e.Generic = 'generic'),
    (e.WebTokenPage = 'webTokenPage'),
    (e.WebUserPage = 'webUserPage'),
    (e.WebPortal = 'webPortal'),
    (e.WebExplorePage = 'webExplorePage'),
    (e.WebAppPage = 'webAppPage'),
    (e.CashAccount = 'cashAccount'),
    (e.CashTransfer = 'cashTransfer'),
    e
  ))(ee || {});
const ua = {
    init: async (e) => {},
    captureError: (e, t) => {},
    captureMessage: (e, t, r = Ue.Info) => {},
    addBreadcrumb: (e, t, r) => {},
    setUser: async (e) => {},
    setTags: async (e) => {},
    startSpan: (e, t) => {
      const r = t();
      return Promise.resolve(r);
    },
    startInactiveSpan: (e) => {},
  },
  Jr = (e) => {
    switch (e) {
      case ee.Collectibles:
      case ee.MagicEden:
      case ee.Fungibles:
      case ee.Staking:
      case ee.Swapper:
      case ee.Prices:
      case ee.WebTokenPage:
      case ee.WebExplorePage:
      case ee.Tokens:
        return Xt.PD;
      case ee.AutoConfirm:
      case ee.DeepLinks:
      case ee.DappBrowser:
      case ee.DappRegistry:
      case ee.Network:
      case ee.Transaction:
      case ee.Provider:
      case ee.History:
      case ee.TrustedApps:
      case ee.Simulation:
      case ee.MobileEmbedded:
        return Xt.DX;
      case ee.WebAppPage:
      case ee.Account:
      case ee.Auth:
      case ee.ActionBanner:
      case ee.Authentication:
      case ee.Ledger:
      case ee.Seedless:
      case ee.Settings:
      case ee.OnRamp:
      case ee.Migration:
      case ee.MobileWalletAdapter:
      case ee.Generic:
      case ee.StartUp:
      case ee.WebPortal:
        return Xt.IO;
      case ee.BugReporter:
      case ee.Storage:
      case ee.FileLogger:
      case ee.FeatureFlags:
      case ee.Performance:
        return Xt.PL;
      case ee.Safeguard:
        return Xt.TRA;
      case ee.Profiles:
      case ee.Feed:
      case ee.FeedNotifications:
      case ee.WebUserPage:
        return Xt.SOC;
      case ee.CashAccount:
      case ee.CashTransfer:
        return Xt.CASH;
    }
  },
  fM = {
    init: async ({ datadog: e }) => {
      if (e.enabled) {
        if (!e.clientToken) throw new Error('[DatadogProvider#init] Missing client token');
        rs.init({
          applicationId: e.applicationId,
          clientToken: e.clientToken,
          service: e.service,
          version: mc,
          env: 'production',
          allowedTracingUrls: [/https?:\/\/([a-zA-Z0-9.-]+\.)?phantom\.app(\/|$)/],
          traceSampleRate: e.traceSampleRate,
          sessionSampleRate: e.sessionSampleRate,
          enablePrivacyForActionName: !0,
          silentMultipleInit: !0,
          trackAnonymousUser: !1,
        }),
          Cr.init({
            clientToken: e.clientToken,
            service: e.service,
            env: 'production',
            forwardErrorsToLogs: !0,
            sessionSampleRate: e.sessionSampleRate,
            version: mc,
            silentMultipleInit: !0,
            trackAnonymousUser: !1,
          });
      }
    },
    captureError: (e, t) => {
      wo(e.message, Ue.Error, { feature: t, team: Jr(t) }, e);
    },
    captureMessage: (e, t, r = Ue.Info) => {
      wo(e, r, { feature: t, team: Jr(t) });
    },
    addBreadcrumb: (e, t, r, n = {}) => {
      wo(t, r, { category: e, ...n });
    },
    setUser: async (e) => {
      Cr.setUser(e), rs.setUser(e);
    },
    setTags: async (e) => {
      rs.setGlobalContext({ tags: e }), Cr.setGlobalContext({ tags: e });
    },
    startSpan: (e, t) => {
      const r = t();
      return Promise.resolve(r);
    },
    startInactiveSpan: () => {},
  };
function wo(e, t, r, n) {
  switch (((t === Ue.Error || t === Ue.Fatal) && rs.addError(n ?? e, r), t)) {
    case Ue.Fatal:
      !n && Cr.logger.critical(e, { context: r });
      break;
    case Ue.Error:
      !n && Cr.logger.error(e, { context: r });
      break;
    case Ue.Info:
      Cr.logger.info(e, { context: r }, n);
      break;
    case Ue.Debug:
      break;
  }
}
function mM() {
  return typeof document < 'u';
}
const iS = mM() ? fM : ua,
  gM = 'Error message ignored by logging middleware.',
  yM = (e) => ({
    beforeEvent: (...[t, r]) => {
      for (const n of e) if ((t instanceof Error ? t.message : t) === n) throw new Error(gM);
      return { value: t, ...(r.data ? { data: r.data } : {}) };
    },
    afterEvent: void 0,
  }),
  bM = 'Sensitive data detected by pki scanner. File logging blocked.',
  vM = ['seed', 'mnemonic', 'seedAndMnemonic', 'ObfuscatedBytes'],
  du = new RegExp(`(${vM.join('|')})`, 'mi'),
  Ya = {
    beforeEvent: (...[e, t]) => {
      const r = e instanceof Error ? e.message : e;
      if (du.test(r) || (t.data && du.test(JSON.stringify(t.data)))) throw new Error(bM);
      return { value: e, ...(t.data ? { data: t.data } : {}) };
    },
    afterEvent: void 0,
  },
  SM = ['premature close'],
  _M = yM(SM);
class mn extends Error {
  constructor(
    t = 'File logger uninitialized. Call fileLogger.init() before calling other functions.'
  ) {
    super(t);
  }
}
function wM(e = []) {
  let t = null;
  async function r({ provider: l }) {
    await l.init(), (t = { provider: l });
  }
  async function n(l) {
    if (!t) throw new mn();
    return t.provider.downloadLog(l);
  }
  async function s() {
    if (!t) throw new mn();
    return t.provider.getLogFilePaths();
  }
  async function o() {
    if (!t) throw new mn();
    return t.provider.getRecentLogs();
  }
  async function a(l) {
    if (!t) throw new mn();
    return t.provider.sendLogFilesByEmail(l);
  }
  function c(l, u, p, d) {
    if (!t) throw new mn();
    for (const h of e)
      if ((h == null ? void 0 : h.beforeEvent) !== void 0)
        try {
          h.beforeEvent(l, { featureTag: u, severity: p });
        } catch {
          return;
        }
    t.provider.write(l, u, p, d);
    for (const h of e)
      if ((h == null ? void 0 : h.afterEvent) !== void 0)
        try {
          h.afterEvent(l, { featureTag: u, severity: p });
        } catch {
          return;
        }
  }
  return {
    init: r,
    downloadLog: n,
    getLogFilePaths: s,
    getRecentLogs: o,
    sendLogFilesByEmail: a,
    write: c,
  };
}
const Ka = wM([_M, Ya]),
  oS = (e) => ({
    beforeEvent: (...[t, r]) => {
      const n = t instanceof Error ? t.message : t;
      return (
        e.write(n, r.featureTag, r.severity, r.data),
        { value: t, ...(r.data ? { data: r.data } : {}) }
      );
    },
    afterEvent: void 0,
  }),
  $M = /\b[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{88}\b/g,
  TM = /\b0x[a-fA-F0-9]{64}\b/g,
  IM = /\b[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{44}\b/g,
  xM = /\b0x[a-fA-F0-9]{40}\b/g,
  pu = { SOLANA_SIGNATURE: $M, EVM_SIGNATURE: TM, SOLANA_PUBKEY: IM, EVM_PUBKEY: xM },
  EM = (e) =>
    Object.entries(e).reduce(
      (t, [r, n]) => (typeof n == 'string' ? (t[r] = Ss(n)) : (t[r] = n), t),
      {}
    ),
  Ss = (e) => {
    let t = e;
    for (const r in pu) {
      const n = pu[r];
      t = t.replace(n, '');
    }
    return t;
  },
  AM = (e) => (
    e.message && (e.message = Ss(e.message)),
    e.cause && typeof e.cause == 'string' && (e.cause = Ss(e.cause)),
    e
  ),
  PM = (e) => (e instanceof Error ? AM(e) : Ss(e)),
  aS = {
    beforeEvent: (...[e, t]) => ({ value: PM(e), ...(t.data ? { data: EM(t.data) } : {}) }),
    afterEvent: void 0,
  };
var hu = o_;
hu && hu.isDate;
var DM = {};
const z3 = {
    [Ue.Debug]: console.log,
    [Ue.Info]: console.warn,
    [Ue.Error]: console.error,
    [Ue.Fatal]: console.error,
  },
  _n = () =>
    Fu() ||
    ['t', 'y', '1', 'true', 'yes'].some((e) => {
      var t;
      return ((t = DM.DISABLE_TELEMETRY) == null ? void 0 : t.toLowerCase()) === e;
    });
function cS(e, t) {
  const r = _n() ? ua : e,
    n = _n() ? ua : t;
  return {
    init: async (s) => {
      await Promise.allSettled([r.init(s), n.init(s)]);
    },
    captureError: (s, o) => {
      Dt(() => r.captureError(s, o)), Dt(() => n.captureError(s, o));
    },
    captureMessage: (s, o, a = Ue.Info) => {
      Dt(() => r.captureMessage(s, o, a)), Dt(() => n.captureMessage(s, o, a));
    },
    addBreadcrumb: (s, o, a, c) => {
      Dt(() => r.addBreadcrumb(s, o, a, c)), Dt(() => n.addBreadcrumb(s, o, a, c));
    },
    setUser: async (s) => {
      await Promise.allSettled([r.setUser(s), n.setUser(s)]);
    },
    setTags: async (s) => {
      await Promise.allSettled([r.setTags(s), n.setTags(s)]);
    },
    startSpan: (s, o) => r.startSpan(s, () => n.startSpan(s, o)),
    startInactiveSpan: (s) => {
      const o = Dt(() => r.startInactiveSpan(s)),
        a = Dt(() => n.startInactiveSpan(s));
      if (!(!o && !a)) return Promise.resolve({ end: () => kM(o, a) });
    },
  };
}
function Dt(e) {
  try {
    return e();
  } catch {
    return;
  }
}
function kM(...e) {
  for (const t of e) t && Dt(() => t.then((r) => r.end()));
}
const fu = { op: 'function' },
  CM = [
    'The server encountered a temporary error',
    'premature close',
    'The browser is shutting down.',
  ],
  RM = [
    '/_generated_background_page.html',
    '/background/serviceWorker.js',
    '/service-worker-loader.js',
  ],
  OM = ['Breadcrumbs', 'GlobalHandlers', 'TryCatch', 'HttpContext'];
let mu = !1;
const NM = {
  init: async ({ appVersion: e, sentry: t }) => {
    t.enabled &&
      l_({
        sampleRate: t.sampleRate,
        tracesSampler: (r) => {
          const n = r.transactionContext.name;
          return RM.includes(n) ? 0 : t.tracesSampleRate || !1;
        },
        beforeSend: async (r, n) => {
          const s = n == null ? void 0 : n.originalException;
          for (const o of CM)
            if ((s instanceof Error && s.message === o) || (typeof s == 'string' && s === o))
              return null;
          if (s && !mu) {
            const a = `${new Date().toISOString()}-logs.txt`,
              c = await Ka.getRecentLogs();
            (n.attachments = [{ filename: a, data: c }]), (mu = !0);
          }
          return r;
        },
        dsn: t.dsn,
        release: e,
        environment: 'production',
        initialScope: t.initialScope,
        beforeBreadcrumb: (r, n) => {
          var s;
          if (r.category === 'fetch' || r.category === 'xhr') {
            const o = (s = r.data) != null && s.url ? new URL(r.data.url) : void 0;
            if (!(o != null && o.origin.endsWith('phantom.app'))) return null;
          }
          return r;
        },
        integrations: function (r) {
          return r
            .filter(function (s) {
              return !OM.includes(s.name);
            })
            .concat([
              u_({ dom: !1, history: !1, console: !1 }),
              d_({ traceFetch: !1, traceXHR: !1, enableInp: !0 }),
            ]);
        },
      });
  },
  captureError: (e, t) => {
    Hu(e, { tags: { feature: t, team: Jr(t) } });
  },
  captureMessage: (e, t, r = Ue.Info) => {
    Vu(e, { tags: { feature: t, team: Jr(t) }, level: r });
  },
  addBreadcrumb: (e, t, r, n) => {
    zu({ category: e, message: t, level: r, data: n });
  },
  setUser: async (e) => {
    Gu(e);
  },
  setTags: async (e) => {
    qu(e);
  },
  startSpan: (e, t) => {
    const r = p_({ ...fu, name: e }, t);
    return Promise.resolve(r);
  },
  startInactiveSpan: (e) => {
    const t = h_({ ...fu, name: e });
    return t ? Promise.resolve(t) : void 0;
  },
};
function Dr(e, t, { featureTag: r, value: n, severity: s, data: o }) {
  const a = { value: n, data: o };
  for (const c of e) {
    const l = c[t];
    if (l) {
      const u = l(a.value, { featureTag: r, severity: s, data: a.data });
      (a.value = u.value), u.data && (a.data = u.data);
    }
  }
  return a;
}
function lS(e, t) {
  async function r(d) {
    await e.provider.init(d);
  }
  function n(d, h) {
    try {
      const f = Dr(t, 'beforeEvent', { value: d, featureTag: h, severity: Ue.Error });
      (ii() && !_n()) ||
        (f.value instanceof Error
          ? e.provider.captureError(f.value, h)
          : e.provider.captureError(new Error(f.value), h)),
        Dr(t, 'afterEvent', { value: f.value, featureTag: h, severity: Ue.Error });
    } catch {}
  }
  function s(d, h, f = Ue.Info) {
    try {
      const g = Dr(t, 'beforeEvent', { value: d, featureTag: h, severity: f });
      (ii() && !_n()) ||
        e.provider.captureMessage(g.value instanceof Error ? g.value.message : g.value, h, f),
        Dr(t, 'afterEvent', { value: g.value, featureTag: h, severity: f });
    } catch {}
  }
  function o(d, h, f, g) {
    try {
      const m = Dr(t, 'beforeEvent', { featureTag: d, value: h, severity: f, data: g });
      (ii() && !_n()) ||
        e.provider.addBreadcrumb(
          d,
          m.value instanceof Error ? m.value.message : m.value,
          f,
          m.data
        ),
        Dr(t, 'afterEvent', { featureTag: d, value: m.value, severity: f, data: m.data });
    } catch {}
  }
  async function a(d) {
    await e.provider.setUser(d);
  }
  async function c(d) {
    await e.provider.setTags(d);
  }
  function l(d, h) {
    return e.provider.startSpan(d, h);
  }
  function u(d, h) {
    return () => e.provider.startSpan(d, h);
  }
  function p(d) {
    return e.provider.startInactiveSpan(d);
  }
  return {
    init: r,
    captureError: n,
    captureMessage: s,
    addBreadcrumb: o,
    setUser: a,
    setTags: c,
    startSpan: l,
    startSpanCallback: u,
    startInactiveSpan: p,
  };
}
const MM = [Ya, aS],
  UM = oS(Ka),
  LM = [...MM, UM],
  BM = lS({ provider: cS(NM, iS) }, LM),
  jM = {
    init: async ({ sentry: e }) => {
      e.enabled &&
        f_({
          dsn: e.dsn,
          sampleRate: e.sampleRate,
          tracesSampleRate: e.tracesSampleRate,
          profilesSampleRate: e.profilesSampleRate,
          environment: 'production',
          initialScope: e.initialScope,
          integrations: [],
        });
    },
    captureError: (e, t) => {
      Hu(e, { tags: { feature: t, team: Jr(t) } });
    },
    captureMessage: (e, t, r = Ue.Info) => {
      Vu(e, { tags: { feature: t, team: Jr(t) }, level: r });
    },
    addBreadcrumb: (e, t, r, n) => {
      zu({ category: e, message: t, level: r, data: n });
    },
    setUser: async (e) => {
      Gu(e);
    },
    setTags: async (e) => {
      qu(e);
    },
    startSpan: (e, t) => {
      throw new Error('Not implemented');
    },
    startInactiveSpan: (e) => {
      throw new Error('Not implemented');
    },
  },
  FM = [Ya, aS],
  HM = oS(Ka),
  VM = [...FM, HM];
lS({ provider: cS(jM, iS) }, VM);
const G3 = 'Method not supported on this platform';
i.object({
  maxRequests: i.number(),
  ignoredUrls: i.array(i.string()),
  ignoredHosts: i.array(i.string()),
});
function da(e) {
  if (!Number.isSafeInteger(e) || e < 0) throw new Error(`Wrong positive integer: ${e}`);
}
function zM(e) {
  if (typeof e != 'boolean') throw new Error(`Expected boolean, not ${e}`);
}
function uS(e, ...t) {
  if (!(e instanceof Uint8Array)) throw new TypeError('Expected Uint8Array');
  if (t.length > 0 && !t.includes(e.length))
    throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`);
}
function GM(e) {
  if (typeof e != 'function' || typeof e.create != 'function')
    throw new Error('Hash should be wrapped by utils.wrapConstructor');
  da(e.outputLen), da(e.blockLen);
}
function qM(e, t = !0) {
  if (e.destroyed) throw new Error('Hash instance has been destroyed');
  if (t && e.finished) throw new Error('Hash#digest() has already been called');
}
function WM(e, t) {
  uS(e);
  const r = t.outputLen;
  if (e.length < r) throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
const $o = { number: da, bool: zM, bytes: uS, hash: GM, exists: qM, output: WM };
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const To = (e) =>
    new DataView(e.buffer, e.byteOffset, e.byteLength),
  vt = (e, t) => (e << (32 - t)) | (e >>> t),
  QM = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!QM) throw new Error('Non little-endian hardware is not supported');
Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
function YM(e) {
  if (typeof e != 'string') throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);
  return new TextEncoder().encode(e);
}
function dS(e) {
  if ((typeof e == 'string' && (e = YM(e)), !(e instanceof Uint8Array)))
    throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);
  return e;
}
class KM {
  clone() {
    return this._cloneInto();
  }
}
function pS(e) {
  const t = (n) => e().update(dS(n)).digest(),
    r = e();
  return (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = () => e()), t;
}
function JM(e, t, r, n) {
  if (typeof e.setBigUint64 == 'function') return e.setBigUint64(t, r, n);
  const s = BigInt(32),
    o = BigInt(4294967295),
    a = Number((r >> s) & o),
    c = Number(r & o),
    l = n ? 4 : 0,
    u = n ? 0 : 4;
  e.setUint32(t + l, a, n), e.setUint32(t + u, c, n);
}
class ZM extends KM {
  constructor(t, r, n, s) {
    super(),
      (this.blockLen = t),
      (this.outputLen = r),
      (this.padOffset = n),
      (this.isLE = s),
      (this.finished = !1),
      (this.length = 0),
      (this.pos = 0),
      (this.destroyed = !1),
      (this.buffer = new Uint8Array(t)),
      (this.view = To(this.buffer));
  }
  update(t) {
    $o.exists(this);
    const { view: r, buffer: n, blockLen: s } = this;
    t = dS(t);
    const o = t.length;
    for (let a = 0; a < o; ) {
      const c = Math.min(s - this.pos, o - a);
      if (c === s) {
        const l = To(t);
        for (; s <= o - a; a += s) this.process(l, a);
        continue;
      }
      n.set(t.subarray(a, a + c), this.pos),
        (this.pos += c),
        (a += c),
        this.pos === s && (this.process(r, 0), (this.pos = 0));
    }
    return (this.length += t.length), this.roundClean(), this;
  }
  digestInto(t) {
    $o.exists(this), $o.output(t, this), (this.finished = !0);
    const { buffer: r, view: n, blockLen: s, isLE: o } = this;
    let { pos: a } = this;
    (r[a++] = 128),
      this.buffer.subarray(a).fill(0),
      this.padOffset > s - a && (this.process(n, 0), (a = 0));
    for (let d = a; d < s; d++) r[d] = 0;
    JM(n, s - 8, BigInt(this.length * 8), o), this.process(n, 0);
    const c = To(t),
      l = this.outputLen;
    if (l % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
    const u = l / 4,
      p = this.get();
    if (u > p.length) throw new Error('_sha2: outputLen bigger than state');
    for (let d = 0; d < u; d++) c.setUint32(4 * d, p[d], o);
  }
  digest() {
    const { buffer: t, outputLen: r } = this;
    this.digestInto(t);
    const n = t.slice(0, r);
    return this.destroy(), n;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: r, buffer: n, length: s, finished: o, destroyed: a, pos: c } = this;
    return (
      (t.length = s), (t.pos = c), (t.finished = o), (t.destroyed = a), s % r && t.buffer.set(n), t
    );
  }
}
const XM = (e, t, r) => (e & t) ^ (~e & r),
  e2 = (e, t, r) => (e & t) ^ (e & r) ^ (t & r),
  t2 = new Uint32Array([
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221,
    3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580,
    3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895,
    666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
    2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
    1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298,
  ]),
  Qt = new Uint32Array([
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225,
  ]),
  Yt = new Uint32Array(64);
class hS extends ZM {
  constructor() {
    super(64, 32, 8, !1),
      (this.A = Qt[0] | 0),
      (this.B = Qt[1] | 0),
      (this.C = Qt[2] | 0),
      (this.D = Qt[3] | 0),
      (this.E = Qt[4] | 0),
      (this.F = Qt[5] | 0),
      (this.G = Qt[6] | 0),
      (this.H = Qt[7] | 0);
  }
  get() {
    const { A: t, B: r, C: n, D: s, E: o, F: a, G: c, H: l } = this;
    return [t, r, n, s, o, a, c, l];
  }
  set(t, r, n, s, o, a, c, l) {
    (this.A = t | 0),
      (this.B = r | 0),
      (this.C = n | 0),
      (this.D = s | 0),
      (this.E = o | 0),
      (this.F = a | 0),
      (this.G = c | 0),
      (this.H = l | 0);
  }
  process(t, r) {
    for (let d = 0; d < 16; d++, r += 4) Yt[d] = t.getUint32(r, !1);
    for (let d = 16; d < 64; d++) {
      const h = Yt[d - 15],
        f = Yt[d - 2],
        g = vt(h, 7) ^ vt(h, 18) ^ (h >>> 3),
        m = vt(f, 17) ^ vt(f, 19) ^ (f >>> 10);
      Yt[d] = (m + Yt[d - 7] + g + Yt[d - 16]) | 0;
    }
    let { A: n, B: s, C: o, D: a, E: c, F: l, G: u, H: p } = this;
    for (let d = 0; d < 64; d++) {
      const h = vt(c, 6) ^ vt(c, 11) ^ vt(c, 25),
        f = (p + h + XM(c, l, u) + t2[d] + Yt[d]) | 0,
        m = ((vt(n, 2) ^ vt(n, 13) ^ vt(n, 22)) + e2(n, s, o)) | 0;
      (p = u), (u = l), (l = c), (c = (a + f) | 0), (a = o), (o = s), (s = n), (n = (f + m) | 0);
    }
    (n = (n + this.A) | 0),
      (s = (s + this.B) | 0),
      (o = (o + this.C) | 0),
      (a = (a + this.D) | 0),
      (c = (c + this.E) | 0),
      (l = (l + this.F) | 0),
      (u = (u + this.G) | 0),
      (p = (p + this.H) | 0),
      this.set(n, s, o, a, c, l, u, p);
  }
  roundClean() {
    Yt.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
class r2 extends hS {
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
pS(() => new hS());
pS(() => new r2());
QS();
const n2 = i.object({
  encrypted: i.string(),
  nonce: i.string(),
  kdf: i.string(),
  salt: i.string(),
  iterations: i.number(),
  digest: i.string(),
});
i.object({ version: i.literal(1), content: n2 });
async function s2(e) {
  try {
    return (await e.get(Ce.FeatureFlagOverrides)) ?? {};
  } catch {
    throw new Error('Failed to fetch feature flag overrides');
  }
}
const i2 = 1 * 60 * 1e3,
  fS = 'feature-flags',
  o2 = () => vN({ queryKey: [fS], queryFn: () => Yr.getFeatureFlags(), staleTime: i2 }),
  a2 = (e) => {
    const t = le.useContext(mS),
      r = new Array(e.length);
    for (let n = 0; n < e.length; n++) {
      const s = e[n];
      r[n] = !!(t != null && t[s]);
    }
    return { data: r, isLoading: t === void 0, isFetched: t !== void 0 };
  },
  c2 = () => {
    const e = za();
    return () =>
      Yr.refreshFeatureFlags().then(() => {
        e.invalidateQueries({ queryKey: [fS] });
      });
  },
  mS = le.createContext(void 0);
function l2({ children: e }) {
  const { data: t } = o2();
  return $n.jsx(mS.Provider, { value: t, children: e });
}
const q3 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        BasicFlagProvider: PO,
        ENABLED_FLAGS: vR,
        FeatureFlagsProvider: l2,
        featureFlagClient: Yr,
        featureFlags: bR,
        getFeatureFlagOverrides: s2,
        useFeatureFlags: a2,
        useRefreshFeatureFlags: c2,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  gS = '.phantom-labs.internal.enabledChainsOverrideSettings',
  yS = async (e) => {
    try {
      const t = await e.get(gS);
      return t == null ? void 0 : t.settings;
    } catch {
      return null;
    }
  },
  u2 = async (e, t, r) => {
    const n = await yS(r);
    return r.set(gS, { version: 1, settings: { ...(n != null && n), [e]: t } });
  },
  d2 = async (e) => {
    const t = [];
    let r;
    try {
      (r = await yS(e)),
        r &&
          Object.entries(r).forEach(([s, o]) => {
            o || t.push(s);
          });
    } catch {}
    try {
      const s = await e.get(h2);
      !s ||
        s.version === 1 ||
        s.chains.forEach((o) => {
          (r && r[o]) || t.push(o);
        });
    } catch {}
    const n = await Yr.isFeatureEnabledAsync('enable-sui-default-on');
    try {
      te.getAllChainIDs().forEach((s) => {
        (r && r[s]) || te.isChainDefaultEnabled(s, n) || t.push(s);
      });
    } catch {}
    return [...new Set(t)];
  },
  W3 = async (e, t) => u2(e, !0, t),
  pa = '.phantom-labs.internal.disabledAddressTypes',
  p2 = async (e) => {
    let t;
    try {
      const r = await e.get(pa);
      t = (r == null ? void 0 : r.addressTypes) ?? [];
    } catch {
      t = [];
    }
    return [...new Set([...t, ae.BitcoinNestedSegwit, ae.BitcoinLegacy])];
  },
  Q3 = async (e, t) => {
    const r = await t.get(pa),
      n = new Set((r == null ? void 0 : r.addressTypes) ?? []);
    return n.delete(e), t.set(pa, { version: 1, addressTypes: Array.from(n) });
  },
  h2 = '.phantom-labs.internal.disabledChains',
  Y3 = {
    [Ne.Monad.Mainnet]: 1,
    [Ne.Monad.Devnet]: 1,
    [Ne.Monad.Testnet]: 1,
    [Ne.Ethereum.Mainnet]: 6,
    [Ne.Ethereum.Sepolia]: 6,
    [Ne.Polygon.Mainnet]: 128,
    [Ne.Polygon.Amoy]: 128,
    [Ne.Base.Mainnet]: 3,
    [Ne.Base.Sepolia]: 3,
    [Ne.Arbitrum.Mainnet]: 1,
    [Ne.Arbitrum.Sepolia]: 1,
    [Ne.Hypercore.Mainnet]: 1,
    [Ne.Hypercore.Testnet]: 1,
  },
  K3 = { [Ne.Bitcoin.Mainnet]: 1, [Ne.Bitcoin.Testnet]: 1 },
  J3 = 'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb',
  Z3 = 100;
let gu = !1;
const X3 = async (e, t, r) => {
    (t = t ?? (await Yr.isFeatureEnabledAsync('enable-monad'))),
      (r = r ?? (await Yr.isFeatureEnabledAsync('enable-arbitrum'))),
      gu ||
        (BM.addBreadcrumb(
          ee.Network,
          `Fetched chain availability where ${JSON.stringify({ isMonadFeatureEnabled: t })}`,
          Ue.Info
        ),
        (gu = !0));
    const n = te.getAllChainIDs().filter((A) => (A !== ne.Monad || t) && (A !== ne.Arbitrum || r)),
      s = await d2(e),
      o = new Set(s),
      a = n.filter((A) => !o.has(A)),
      c = (A) => {
        const v = te.getChainID(A);
        return a.includes(v);
      },
      l = te.getAllNetworkIDs({ mainnetOnly: !1 }).filter(c),
      u = te.getAllNetworkIDs({ mainnetOnly: !0 }).filter(c),
      p = new Set(s.flatMap((A) => te.getNetworkIDs(A))),
      d = l.filter((A) => !p.has(A)),
      h = u.filter((A) => !p.has(A)),
      f = d.filter((A) => !te.isMainnetNetworkID(A)),
      g = ad.getAll(),
      m = await p2(e),
      b = new Set(m);
    for (const A of g) {
      const v = te.getChainIDs(A);
      if (!v) {
        b.add(A);
        continue;
      }
      v.every((O) => o.has(O)) && b.add(A);
    }
    const P = g.filter((A) => !b.has(A));
    return {
      supportedChainIDs: n,
      supportedAddressTypes: g,
      disabledChainIDs: s,
      enabledChainIDs: a,
      enabledAddressTypes: P,
      enabledNetworkIDs: d,
      enabledMainnetOnlyNetworkIDs: h,
      enabledTestnetOnlyNetworkIDs: f,
    };
  },
  Zn = '@phantom/chains',
  e4 = {
    enabledChains: [`${Zn}:enabled-chains`],
    enabledAddressTypes: [`${Zn}:enabled-address-types`],
    enabledNetworkIDs(e) {
      return [`${Zn}:enabled-network-ids`, { mainnetOnly: e }];
    },
    chainAvailability(e) {
      return [`${Zn}:chain-availability`, e];
    },
  };
var pr = {};
Object.defineProperty(pr, '__esModule', { value: !0 });
pr.TokenData = void 0;
pr.parse = ec;
pr.compile = v2;
var f2 = (pr.match = _2);
pr.pathToRegexp = SS;
pr.stringify = T2;
const Ja = '/',
  Za = (e) => e,
  bS = /^[$_\p{ID_Start}]$/u,
  Xa = /^[$\u200c\u200d\p{ID_Continue}]$/u,
  _s = 'https://git.new/pathToRegexpError',
  m2 = { '{': '{', '}': '}', '(': '(', ')': ')', '[': '[', ']': ']', '+': '+', '?': '?', '!': '!' };
function g2(e) {
  return e.replace(/[{}()\[\]+?!:*]/g, '\\$&');
}
function St(e) {
  return e.replace(/[.+*?^${}()[\]|/\\]/g, '\\$&');
}
function* y2(e) {
  const t = [...e];
  let r = 0;
  function n() {
    let s = '';
    if (bS.test(t[++r])) for (s += t[r]; Xa.test(t[++r]); ) s += t[r];
    else if (t[r] === '"') {
      let o = r;
      for (; r < t.length; ) {
        if (t[++r] === '"') {
          r++, (o = 0);
          break;
        }
        t[r] === '\\' ? (s += t[++r]) : (s += t[r]);
      }
      if (o) throw new TypeError(`Unterminated quote at ${o}: ${_s}`);
    }
    if (!s) throw new TypeError(`Missing parameter name at ${r}: ${_s}`);
    return s;
  }
  for (; r < t.length; ) {
    const s = t[r],
      o = m2[s];
    if (o) yield { type: o, index: r++, value: s };
    else if (s === '\\') yield { type: 'ESCAPED', index: r++, value: t[r++] };
    else if (s === ':') {
      const a = n();
      yield { type: 'PARAM', index: r, value: a };
    } else if (s === '*') {
      const a = n();
      yield { type: 'WILDCARD', index: r, value: a };
    } else yield { type: 'CHAR', index: r, value: t[r++] };
  }
  return { type: 'END', index: r, value: '' };
}
class b2 {
  constructor(t) {
    this.tokens = t;
  }
  peek() {
    if (!this._peek) {
      const t = this.tokens.next();
      this._peek = t.value;
    }
    return this._peek;
  }
  tryConsume(t) {
    const r = this.peek();
    if (r.type === t) return (this._peek = void 0), r.value;
  }
  consume(t) {
    const r = this.tryConsume(t);
    if (r !== void 0) return r;
    const { type: n, index: s } = this.peek();
    throw new TypeError(`Unexpected ${n} at ${s}, expected ${t}: ${_s}`);
  }
  text() {
    let t = '',
      r;
    for (; (r = this.tryConsume('CHAR') || this.tryConsume('ESCAPED')); ) t += r;
    return t;
  }
}
class Vs {
  constructor(t) {
    this.tokens = t;
  }
}
pr.TokenData = Vs;
function ec(e, t = {}) {
  const { encodePath: r = Za } = t,
    n = new b2(y2(e));
  function s(a) {
    const c = [];
    for (;;) {
      const l = n.text();
      l && c.push({ type: 'text', value: r(l) });
      const u = n.tryConsume('PARAM');
      if (u) {
        c.push({ type: 'param', name: u });
        continue;
      }
      const p = n.tryConsume('WILDCARD');
      if (p) {
        c.push({ type: 'wildcard', name: p });
        continue;
      }
      if (n.tryConsume('{')) {
        c.push({ type: 'group', tokens: s('}') });
        continue;
      }
      return n.consume(a), c;
    }
  }
  const o = s('END');
  return new Vs(o);
}
function v2(e, t = {}) {
  const { encode: r = encodeURIComponent, delimiter: n = Ja } = t,
    s = e instanceof Vs ? e : ec(e, t),
    o = vS(s.tokens, n, r);
  return function (c = {}) {
    const [l, ...u] = o(c);
    if (u.length) throw new TypeError(`Missing parameters: ${u.join(', ')}`);
    return l;
  };
}
function vS(e, t, r) {
  const n = e.map((s) => S2(s, t, r));
  return (s) => {
    const o = [''];
    for (const a of n) {
      const [c, ...l] = a(s);
      (o[0] += c), o.push(...l);
    }
    return o;
  };
}
function S2(e, t, r) {
  if (e.type === 'text') return () => [e.value];
  if (e.type === 'group') {
    const s = vS(e.tokens, t, r);
    return (o) => {
      const [a, ...c] = s(o);
      return c.length ? [''] : [a];
    };
  }
  const n = r || Za;
  return e.type === 'wildcard' && r !== !1
    ? (s) => {
        const o = s[e.name];
        if (o == null) return ['', e.name];
        if (!Array.isArray(o) || o.length === 0)
          throw new TypeError(`Expected "${e.name}" to be a non-empty array`);
        return [
          o
            .map((a, c) => {
              if (typeof a != 'string')
                throw new TypeError(`Expected "${e.name}/${c}" to be a string`);
              return n(a);
            })
            .join(t),
        ];
      }
    : (s) => {
        const o = s[e.name];
        if (o == null) return ['', e.name];
        if (typeof o != 'string') throw new TypeError(`Expected "${e.name}" to be a string`);
        return [n(o)];
      };
}
function _2(e, t = {}) {
  const { decode: r = decodeURIComponent, delimiter: n = Ja } = t,
    { regexp: s, keys: o } = SS(e, t),
    a = o.map((c) => (r === !1 ? Za : c.type === 'param' ? r : (l) => l.split(n).map(r)));
  return function (l) {
    const u = s.exec(l);
    if (!u) return !1;
    const p = u[0],
      d = Object.create(null);
    for (let h = 1; h < u.length; h++) {
      if (u[h] === void 0) continue;
      const f = o[h - 1],
        g = a[h - 1];
      d[f.name] = g(u[h]);
    }
    return { path: p, params: d };
  };
}
function SS(e, t = {}) {
  const { delimiter: r = Ja, end: n = !0, sensitive: s = !1, trailing: o = !0 } = t,
    a = [],
    c = [],
    l = s ? '' : 'i',
    p = (Array.isArray(e) ? e : [e]).map((f) => (f instanceof Vs ? f : ec(f, t)));
  for (const { tokens: f } of p)
    for (const g of as(f, 0, [])) {
      const m = w2(g, r, a);
      c.push(m);
    }
  let d = `^(?:${c.join('|')})`;
  return (
    o && (d += `(?:${St(r)}$)?`),
    (d += n ? '$' : `(?=${St(r)}|$)`),
    { regexp: new RegExp(d, l), keys: a }
  );
}
function* as(e, t, r) {
  if (t === e.length) return yield r;
  const n = e[t];
  if (n.type === 'group') {
    const s = r.slice();
    for (const o of as(n.tokens, 0, s)) yield* as(e, t + 1, o);
  } else r.push(n);
  yield* as(e, t + 1, r);
}
function w2(e, t, r) {
  let n = '',
    s = '',
    o = !0;
  for (let a = 0; a < e.length; a++) {
    const c = e[a];
    if (c.type === 'text') {
      (n += St(c.value)), (s += c.value), o || (o = c.value.includes(t));
      continue;
    }
    if (c.type === 'param' || c.type === 'wildcard') {
      if (!o && !s) throw new TypeError(`Missing text after "${c.name}": ${_s}`);
      c.type === 'param' ? (n += `(${$2(t, o ? '' : s)}+)`) : (n += '([\\s\\S]+)'),
        r.push(c),
        (s = ''),
        (o = !1);
      continue;
    }
  }
  return n;
}
function $2(e, t) {
  return t.length < 2
    ? e.length < 2
      ? `[^${St(e + t)}]`
      : `(?:(?!${St(e)})[^${St(t)}])`
    : e.length < 2
      ? `(?:(?!${St(t)})[^${St(e)}])`
      : `(?:(?!${St(t)}|${St(e)})[\\s\\S])`;
}
function T2(e) {
  return e.tokens
    .map(function t(r, n, s) {
      if (r.type === 'text') return g2(r.value);
      if (r.type === 'group') return `{${r.tokens.map(t).join('')}}`;
      const a = I2(r.name) && x2(s[n + 1]) ? r.name : JSON.stringify(r.name);
      if (r.type === 'param') return `:${a}`;
      if (r.type === 'wildcard') return `*${a}`;
      throw new TypeError(`Unexpected token: ${r}`);
    })
    .join('');
}
function I2(e) {
  const [t, ...r] = e;
  return bS.test(t) ? r.every((n) => Xa.test(n)) : !1;
}
function x2(e) {
  return (e == null ? void 0 : e.type) !== 'text' ? !0 : !Xa.test(e.value[0]);
}
const Ge = [];
for (let e = 0; e < 256; ++e) Ge.push((e + 256).toString(16).slice(1));
function E2(e, t = 0) {
  return (
    Ge[e[t + 0]] +
    Ge[e[t + 1]] +
    Ge[e[t + 2]] +
    Ge[e[t + 3]] +
    '-' +
    Ge[e[t + 4]] +
    Ge[e[t + 5]] +
    '-' +
    Ge[e[t + 6]] +
    Ge[e[t + 7]] +
    '-' +
    Ge[e[t + 8]] +
    Ge[e[t + 9]] +
    '-' +
    Ge[e[t + 10]] +
    Ge[e[t + 11]] +
    Ge[e[t + 12]] +
    Ge[e[t + 13]] +
    Ge[e[t + 14]] +
    Ge[e[t + 15]]
  ).toLowerCase();
}
let Io;
const A2 = new Uint8Array(16);
function P2() {
  if (!Io) {
    if (typeof crypto > 'u' || !crypto.getRandomValues)
      throw new Error(
        'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported'
      );
    Io = crypto.getRandomValues.bind(crypto);
  }
  return Io(A2);
}
const D2 = typeof crypto < 'u' && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  yu = { randomUUID: D2 };
function k2(e, t, r) {
  var s;
  if (yu.randomUUID && !t && !e) return yu.randomUUID();
  e = e || {};
  const n = e.random ?? ((s = e.rng) == null ? void 0 : s.call(e)) ?? P2();
  if (n.length < 16) throw new Error('Random bytes length must be >= 16');
  if (((n[6] = (n[6] & 15) | 64), (n[8] = (n[8] & 63) | 128), t)) {
    if (((r = r || 0), r < 0 || r + 16 > t.length))
      throw new RangeError(`UUID byte range ${r}:${r + 15} is out of buffer bounds`);
    for (let o = 0; o < 16; ++o) t[r + o] = n[o];
    return t;
  }
  return E2(n);
}
function t4(e, t) {
  return { request: e, source: t, id: k2() };
}
function U() {
  return {
    parse(e) {
      return R2(e);
    },
  };
}
function C2(e, t) {
  const r = new URL(e),
    n = r.host + r.pathname;
  return f2(t)(n);
}
function R2(e) {
  function t(r, n, s) {
    return async (a) => {
      var p;
      if (e.path && ((p = a.source) == null ? void 0 : p.type) === 'DeepLinkRpcRequestSource') {
        const d = C2(a.source.deepLinkUrl, e.path);
        d &&
          a.request.params &&
          typeof a.request.params == 'object' &&
          (a.request.params = { ...a.request.params, ...d.params });
      }
      const c = { ...a, request: e.request.parse(a.request) },
        l = [];
      for (const d of n) {
        const h = await d(c, r);
        if (h) {
          if (typeof h != 'function')
            return (
              setTimeout(() => {
                for (const f of l) f(h);
              }, 0),
              h
            );
          l.push(h);
        }
      }
      const u = e.response.parse(await s(c, r));
      if (u.id !== a.request.id) {
        const d = 'Request id does not match response id';
        throw (console.error(d, { request: a.request, response: u }), new Error(d));
      }
      return (
        setTimeout(() => {
          for (const d of l) d(u);
        }, 0),
        u
      );
    };
  }
  return {
    context(r) {
      return { use: (n, s) => t(r, n, s) };
    },
    use: (r, n) => t(void 0, r, n),
  };
}
var Qr;
class r4 {
  constructor(t) {
    K(this, Qr);
    j(this, Qr, t);
  }
  init(t, r) {
    const n = new AbortController(),
      { signal: s } = n,
      o = O2(y(this, Qr).routes, y(this, Qr).concurrent);
    return {
      start: async () => {
        if (s.aborted) {
          console.warn('stream already closed');
          return;
        }
        try {
          await t.pipeThrough(o, { signal: s }).pipeTo(r, { signal: s });
        } catch (a) {
          s.aborted || console.error('RPC router stream error', a);
        }
      },
      stop: (a) => {
        n.abort(a);
      },
    };
  }
}
Qr = new WeakMap();
function O2(e, t) {
  return new TransformStream({
    async transform(r, n) {
      const s = async () => {
        const o = e[r.request.method];
        if (!o) {
          const a = {
            jsonrpc: '2.0',
            id: r.request.id,
            error: { code: 0, message: `${r.request.method} isn't implemented` },
          };
          return n.enqueue([r, a]);
        }
        try {
          const a = await o(r);
          return n.enqueue([r, a]);
        } catch (a) {
          console.error(
            `RPC ROUTER: Unexpected error in method: ${r.request.method}, message: ${a == null ? void 0 : a.message}`
          );
          const c = {
            jsonrpc: '2.0',
            id: r.request.id,
            error: { code: He.InternalError, message: 'Unexpected error' },
          };
          return n.enqueue([r, c]);
        }
      };
      t ? s() : await s();
    },
  });
}
const G = (e, t) => ({ jsonrpc: '2.0', id: e, result: t }),
  ge = (e, t) => ({ jsonrpc: '2.0', id: e, error: t }),
  ue = (e, t) => ({ ...t, jsonrpc: '2.0', id: e }),
  bn = (e, t) => ({
    id: e,
    jsonrpc: '2.0',
    error: {
      code: He.ChainDisconnected,
      message: t ?? 'The Provider is not connected to the requested chain.',
    },
  }),
  It = (e, t) => ({
    id: e,
    jsonrpc: '2.0',
    error: { code: He.InvalidInput, message: t ?? 'Missing or invalid parameters.' },
  }),
  C = (e, t) => ({
    id: e,
    jsonrpc: '2.0',
    error: { code: He.InternalError, message: t ?? 'Something went wrong.' },
  }),
  N2 = (e, t) => ({
    id: e,
    jsonrpc: '2.0',
    error: { code: He.MethodNotFound, message: t ?? 'Method does not exist.' },
  }),
  M2 = (e, t) => ({
    id: e,
    jsonrpc: '2.0',
    error: { code: He.ResourceUnavailable, message: t ?? 'Requested resource not available.' },
  }),
  wn = (e, t) => ({
    id: e,
    jsonrpc: '2.0',
    error: { code: He.TransactionRejected, message: t ?? 'Transaction creation failed.' },
  }),
  B = (e, t) => ({
    id: e,
    jsonrpc: '2.0',
    error: {
      code: He.Unauthorized,
      message: t ?? 'The requested method and/or account has not been authorized by the user.',
    },
  }),
  _S = (e, t) => ({
    id: e,
    jsonrpc: '2.0',
    error: { code: He.UnsupportedMethod, message: t ?? 'The requested method is not supported.' },
  }),
  U2 = (e, t) => ({
    id: e,
    jsonrpc: '2.0',
    error: { code: He.RateLimited, message: t ?? 'The requested method has been rate limited.' },
  }),
  Qe = (e, t) => ({
    id: e,
    jsonrpc: '2.0',
    error: { code: He.UserRejectedRequest, message: t ?? 'User rejected the request.' },
  }),
  bu = (e) => {
    try {
      return new URL(e);
    } catch {
      return;
    }
  };
function H(e) {
  const t = be(e);
  if (t)
    return t.protocol !== 'http:' && t.protocol !== 'https:'
      ? `${t.protocol}//${t.hostname}`
      : t.origin;
}
const L2 = '8bfda36a-d292-4aa3-b30f-53ef91ab6380',
  B2 = 'b4285baa-c852-490f-9af2-8459680b1264';
function be(e) {
  var t, r;
  if (e.type === 'BrowserTabRpcRequestSource' || e.type === 'InternalRpcRequestSource')
    return e.url;
  if (e.type === 'DeepLinkRpcRequestSource') {
    if (e.sdkKey === L2) return new URL('https://app.drift.trade');
    if (e.sdkKey === B2) return new URL('https://app.lulo.fi');
    const n =
      (r = (t = bu(e.deepLinkUrl)) == null ? void 0 : t.searchParams) == null
        ? void 0
        : r.get('redirect_uri');
    if (n) {
      const s = bu(n);
      if (s)
        return s.protocol !== 'http:' && s.protocol !== 'https:'
          ? new URL(`${s.protocol}//${s.hostname}`)
          : s;
    }
    return;
  }
}
function De(e) {
  var t, r;
  if (e.type === 'BrowserTabRpcRequestSource')
    return ((t = e.icon) == null ? void 0 : t.href) || null;
  if (e.type === 'InternalRpcRequestSource')
    return ((r = e.icon) == null ? void 0 : r.href) || null;
  if (e.type === 'DeepLinkRpcRequestSource') {
    const n = be(e);
    return n ? D1(n.hostname) : null;
  }
  return null;
}
const j2 = new Set(a_),
  z = async ({ source: e, request: t }) => {
    if (
      !e ||
      (e.type !== 'BrowserTabRpcRequestSource' &&
        e.type !== 'InternalRpcRequestSource' &&
        e.type !== 'DeepLinkRpcRequestSource')
    )
      return B(t.id);
    const r = be(e);
    if (!r) return B(t.id);
    if (e.type !== 'DeepLinkRpcRequestSource' && r.protocol !== 'https:')
      return j2.has(r.hostname) ? void 0 : B(t.id);
  },
  F =
    (e) =>
    async ({ source: t, request: r }, { i18n: n }) => {
      if (!t || t.type !== e) return B(r.id, n.t('rpcErrorUnauthorizedUnknownSource'));
    },
  Xn = async (e, { wallet: t }) => {
    const { request: r } = e,
      n = 'transactions' in r.params ? r.params.transactions : [r.params.transaction],
      s = await Promise.all(n.map((o) => t.sol.addPriorityFee(o)));
    'transactions' in r.params ? (r.params.transactions = s) : (r.params.transaction = s[0]);
  };
function zs(e) {
  return /\blocalhost\b|(\d{1,3}\.){3}\d{1,3}/.test(e);
}
const xo = async ({ request: e, source: t }, { analytics: r }) =>
    !t || t.type !== 'BrowserTabRpcRequestSource'
      ? C(e.id, 'missing source')
      : async (n) => {
          const { method: s } = e,
            o = t.url.hostname;
          if (zs(o)) return;
          const a = {
            method: s,
            chainType: 'bip122',
            chainId: '000000000019d6689c085ae165831e93',
            origin: o,
          };
          if (s === 'btc_requestAccounts') {
            const c = { ...a };
            'error' in n
              ? r.declineConnection({ ...c, errorCode: n.error.code })
              : r.approveConnection(c);
          }
          if (s === 'btc_signPSBT') {
            const c = { ...a };
            'error' in n
              ? r.declineTransaction({ ...c, errorCode: n.error.code })
              : r.approveTransaction(c);
          }
          if (s === 'btc_signMessage') {
            const c = { ...a };
            'error' in n
              ? r.declineSignMessage({ ...c, errorCode: n.error.code })
              : r.approveSignMessage(c);
          }
        },
  yt = async ({ request: e, source: t }, { analytics: r, wallet: n, utils: s }) => {
    if (!t) return C(e.id, 'missing source');
    const o = be(t);
    return o
      ? async (a) => {
          if ('error' in a) return;
          const c = o.toString();
          switch (e.method) {
            case 'eth_blink_sendTransaction': {
              const l = a.result,
                u = s.getOrigin(e.params[1].context.blinkUrl);
              return u
                ? r.eth.submittedTransaction({
                    origin: u,
                    request: { ...e, method: 'eth_sendTransaction', params: [e.params[0]] },
                    signatures: [l],
                  })
                : void 0;
            }
            case 'eth_sendTransaction': {
              const l = a.result;
              return r.eth.submittedTransaction({ origin: c, request: e, signatures: [l] });
            }
            case 'eth_blink_sign': {
              const l = s.getOrigin(e.params[2].context.blinkUrl);
              return l
                ? r.eth.signedMessage({
                    origin: l,
                    request: { ...e, method: 'eth_sign', params: [e.params[0], e.params[1]] },
                    chainId: await n.eth.getNetworkId(l),
                  })
                : void 0;
            }
            case 'eth_sign':
            case 'personal_sign':
            case 'eth_signTypedData':
            case 'eth_signTypedData_v3':
            case 'eth_signTypedData_v4':
              return r.eth.signedMessage({
                origin: c,
                request: e,
                chainId: await n.eth.getNetworkId(c),
              });
            case 'sol_signAllTransactions': {
              const l = a.result.map(({ signature: u }) => u);
              return r.sol.submittedTransaction({
                origin: c,
                request: e,
                chainId: await n.sol.getNetworkId(),
                signatures: l,
              });
            }
            case 'sol_signAndSendTransaction': {
              const l = a.result.signature;
              return r.sol.submittedTransaction({
                origin: c,
                request: e,
                chainId: await n.sol.getNetworkId(),
                signatures: [l],
              });
            }
            case 'sol_blink_signAndSendAllTransactions': {
              const l = a.result.signatures.filter(Boolean);
              return r.sol.submittedTransaction({
                origin: c,
                request: {
                  ...e,
                  method: 'sol_signAllTransactions',
                  params: { transactions: e.params.transactions },
                },
                chainId: await n.sol.getNetworkId(),
                signatures: l,
              });
            }
            case 'sol_signAndSendAllTransactions': {
              const l = a.result.signatures.filter(Boolean);
              return r.sol.submittedTransaction({
                origin: c,
                request: e,
                chainId: await n.sol.getNetworkId(),
                signatures: l,
              });
            }
            case 'sol_signTransaction': {
              const l = a.result.signature;
              return r.sol.submittedTransaction({
                origin: c,
                request: e,
                chainId: await n.sol.getNetworkId(),
                signatures: [l],
              });
            }
            case 'sol_signIn':
            case 'sol_signMessage':
              return r.sol.signedMessage({
                origin: c,
                request: e,
                chainId: await n.sol.getNetworkId(),
              });
            case 'sol_blink_signMessage': {
              const l = s.getOrigin(e.params.context.blinkUrl);
              return l
                ? r.sol.signedMessage({
                    origin: l,
                    request: {
                      ...e,
                      method: 'sol_signMessage',
                      params: { message: e.params.message, display: e.params.display },
                    },
                    chainId: await n.sol.getNetworkId(),
                  })
                : void 0;
            }
          }
        }
      : C(e.id, 'missing source');
  },
  F2 = async (e, { wallet: t, rpc: r, utils: n }) => {
    const { request: s, source: o } = e;
    if (!o) return C(s.id, 'missing source');
    const a = H(o);
    if (!a) return B(s.id);
    const c = await t.eth.getSelectedAccount(),
      [l] = s.params,
      u = l.chainId ? l.chainId : await t.eth.getNetworkId(a),
      p = await t.eth.getRpcURL(u);
    if (
      ((l.type = ks.eip1559),
      l.chainId || (l.chainId = u),
      l.nonce || (l.nonce = await t.eth.getAccountNonce(u, c)),
      !l.gas)
    ) {
      const d = await r.eth.eth_estimateGas(p, [l]);
      if ('error' in d) return ge(s.id, d.error);
      l.gas = n.eth.getBufferedGasLimit(d.result);
    }
    delete l.gasPrice;
  },
  L = async (e, { config: t, logger: r }) => {
    if (t.env === 'production') return;
    const n = Date.now();
    return (s) => {
      var p, d, h;
      if (
        (((p = e.source) == null ? void 0 : p.type) !== 'BrowserTabRpcRequestSource' &&
          ((d = e.source) == null ? void 0 : d.type) !== 'InternalRpcRequestSource' &&
          ((h = e.source) == null ? void 0 : h.type) !== 'DeepLinkRpcRequestSource') ||
        !(
          ('error' in s && t.logRequestsOnError) ||
          (typeof t.logRequestMethods == 'boolean'
            ? t.logRequestMethods
            : t.logRequestMethods.has(e.request.method))
        )
      )
        return;
      const c = Date.now(),
        l = be(e.source),
        u = De(e.source);
      r.debug(`
*-------------------------------------------------------------------------------
| method   | ${e.request.method}
| id       | ${e.request.id}
| params   | ${JSON.stringify(e.request.params).substring(0, 67)}
*----------+--------------------------------------------------------------------
| result   | ${JSON.stringify(s.result)}
| error    | ${JSON.stringify(s.error)}
*----------+--------------------------------------------------------------------
| url      | ${JSON.stringify(l)}
| icon     | ${JSON.stringify(u)}
*----------+--------------------------------------------------------------------
| duration | ${c - n}ms
*-------------------------------------------------------------------------------
`);
    };
  },
  Q = async ({ request: e, source: t }, { analytics: r, wallet: n, utils: s }) => {
    if (!t) return C(e.id, 'missing source');
    const o = be(t),
      a = H(t);
    return !o || !a
      ? C(e.id)
      : async (c) => {
          const { method: l } = e;
          if (zs(o.hostname)) return;
          const u = await n.eth.getNetworkId(a),
            p = s.eth.hexToCAIP2(u),
            h = { method: l, chainType: 'eip155', chainId: p, origin: o.hostname };
          if (l === 'eth_requestAccounts') {
            const f = { ...h };
            'error' in c
              ? r.declineConnection({ ...f, errorCode: c.error.code })
              : r.approveConnection(f);
          }
          if (l === 'eth_sendTransaction') {
            const [f] = e.params,
              g = {
                ...h,
                gas: f.gas,
                maxFeePerGas: f.maxFeePerGas,
                maxPriorityFeePerGas: f.maxPriorityFeePerGas,
              };
            'error' in c
              ? r.declineTransaction({ ...g, errorCode: c.error.code })
              : r.approveTransaction(g);
          }
          if (
            l === 'eth_sign' ||
            l === 'personal_sign' ||
            l === 'eth_signTypedData' ||
            l === 'eth_signTypedData_v3' ||
            l === 'eth_signTypedData_v4'
          ) {
            const f = { ...h };
            'error' in c
              ? r.declineSignMessage({ ...f, errorCode: c.error.code })
              : r.approveSignMessage(f);
          }
          if (l === 'wallet_selectEthereumProvider' && !('error' in c)) {
            const f = c.result,
              g = { ...h, selection: f };
            r.metamaskOverrideSelection(g);
          }
        };
  },
  Je =
    (e) =>
    async ({ source: t, request: r }, { wallet: n, logger: s }) => {
      if (!t) return B(r.id);
      if (t.type === 'InternalRpcRequestSource') return;
      if (t.type !== e) return B(r.id);
      const o = H(t);
      if (!o) return B(r.id);
      if (!(await n.isTrustedApp(o))) return s.debug('> Dapp not trusted', o), B(r.id);
    },
  kr = async ({ source: e, request: t }, { wallet: r, analytics: n }) => {
    if (!e) return B(t.id);
    const s = be(e),
      o = H(e),
      a = De(e);
    if (!s || !o) return B(t.id);
    let c;
    switch (t.method) {
      case 'eth_sendTransaction': {
        const [f] = t.params;
        if (!f.chainId) return wn(t.id);
        c = f.chainId;
        break;
      }
      case 'eth_signTypedData': {
        const [f] = t.params;
        let g = '';
        for (const m of f)
          if (m.name === 'chainId') {
            g = m.value;
            break;
          }
        if (!g) return;
        c = '0x' + parseInt(g, 10).toString(16);
        break;
      }
      case 'eth_signTypedData_v3': {
        const [f, g] = t.params;
        if (!g.domain.chainId) return;
        c = '0x' + g.domain.chainId.toString(16);
        break;
      }
      case 'eth_signTypedData_v4': {
        const [f, g] = t.params;
        if (typeof g.domain.chainId == 'number') c = '0x' + g.domain.chainId.toString(16);
        else return;
        break;
      }
      case 'wallet_switchEthereumChain':
      case 'wallet_addEthereumChain': {
        const [f] = t.params;
        c = f.chainId;
        break;
      }
    }
    const l = { url: s.toString(), icon: a };
    if (!new Set(r.eth.getSupportedNetworks()).has(c))
      return (
        n.eth.unsupportedChain({ origin: o, data: { method: t.method, hexChainId: c } }),
        await r.requestUserApproval({
          jsonrpc: '2.0',
          method: 'user_confirmUnsupportedNetwork',
          id: 0,
          params: [l, c],
        }),
        bn(t.id)
      );
    const p = new Set(await r.eth.getEnabledChains(!0)),
      d = new Set(await r.eth.getEnabledChains());
    if (!p.has(c))
      return (
        await r.requestUserApproval({
          jsonrpc: '2.0',
          method: 'user_confirmDisabledNetwork',
          id: 0,
          params: [l, c],
        }),
        bn(t.id)
      );
    if (!d.has(c))
      return (
        await r.requestUserApproval({
          jsonrpc: '2.0',
          method: 'user_confirmIncorrectMode',
          id: 0,
          params: [l, d.has('0x1') ? 'mainnet' : 'testnet'],
        }),
        bn(t.id)
      );
    if (['eth_signTypedData', 'eth_signTypedData_v3', 'eth_signTypedData_v4'].includes(t.method)) {
      const f = await r.eth.getNetworkId(o);
      if (f !== c)
        return (
          await r.requestUserApproval({
            jsonrpc: '2.0',
            method: 'user_confirmEIP712IncorrectChainId',
            id: 0,
            params: [l, { connectedChainId: f, messageChainId: c }],
          }),
          bn(t.id)
        );
    }
  },
  H2 = async (e, { wallet: t, i18n: r }) => {
    var c;
    const { request: n, source: s } = e;
    if (!s || s.type !== 'BrowserTabRpcRequestSource')
      return B(n.id, r.t('rpcErrorUnauthorizedUnknownSource'));
    const o = { url: s.url.toString(), icon: ((c = s.icon) == null ? void 0 : c.href) ?? null };
    if (!(await t.eth.doesSupportEth()))
      return (
        await t.requestUserApproval({
          jsonrpc: '2.0',
          method: 'user_confirmUnsupportedAccount',
          params: [o, 'ethereum'],
          id: $e(),
        }),
        M2(n.id)
      );
  };
function V2(e) {
  if (e.length >= 255) throw new TypeError('Alphabet too long');
  for (var t = new Uint8Array(256), r = 0; r < t.length; r++) t[r] = 255;
  for (var n = 0; n < e.length; n++) {
    var s = e.charAt(n),
      o = s.charCodeAt(0);
    if (t[o] !== 255) throw new TypeError(s + ' is ambiguous');
    t[o] = n;
  }
  var a = e.length,
    c = e.charAt(0),
    l = Math.log(a) / Math.log(256),
    u = Math.log(256) / Math.log(a);
  function p(f) {
    if (
      (f instanceof Uint8Array ||
        (ArrayBuffer.isView(f)
          ? (f = new Uint8Array(f.buffer, f.byteOffset, f.byteLength))
          : Array.isArray(f) && (f = Uint8Array.from(f))),
      !(f instanceof Uint8Array))
    )
      throw new TypeError('Expected Uint8Array');
    if (f.length === 0) return '';
    for (var g = 0, m = 0, b = 0, P = f.length; b !== P && f[b] === 0; ) b++, g++;
    for (var A = ((P - b) * u + 1) >>> 0, v = new Uint8Array(A); b !== P; ) {
      for (var R = f[b], O = 0, k = A - 1; (R !== 0 || O < m) && k !== -1; k--, O++)
        (R += (256 * v[k]) >>> 0), (v[k] = R % a >>> 0), (R = (R / a) >>> 0);
      if (R !== 0) throw new Error('Non-zero carry');
      (m = O), b++;
    }
    for (var E = A - m; E !== A && v[E] === 0; ) E++;
    for (var _ = c.repeat(g); E < A; ++E) _ += e.charAt(v[E]);
    return _;
  }
  function d(f) {
    if (typeof f != 'string') throw new TypeError('Expected String');
    if (f.length === 0) return new Uint8Array();
    for (var g = 0, m = 0, b = 0; f[g] === c; ) m++, g++;
    for (var P = ((f.length - g) * l + 1) >>> 0, A = new Uint8Array(P); f[g]; ) {
      var v = t[f.charCodeAt(g)];
      if (v === 255) return;
      for (var R = 0, O = P - 1; (v !== 0 || R < b) && O !== -1; O--, R++)
        (v += (a * A[O]) >>> 0), (A[O] = v % 256 >>> 0), (v = (v / 256) >>> 0);
      if (v !== 0) throw new Error('Non-zero carry');
      (b = R), g++;
    }
    for (var k = P - b; k !== P && A[k] === 0; ) k++;
    for (var E = new Uint8Array(m + (P - k)), _ = m; k !== P; ) E[_++] = A[k++];
    return E;
  }
  function h(f) {
    var g = d(f);
    if (g) return g;
    throw new Error('Non-base' + a + ' character');
  }
  return { encode: p, decodeUnsafe: d, decode: h };
}
var z2 = V2;
const G2 = z2,
  q2 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
var W2 = G2(q2);
const wS = Lt(W2),
  Q2 = async ({ request: e }) => {
    const t = wS.decode(e.params.message);
    if (!lw(t)) return It(e.id, 'You cannot sign solana transactions using sign message');
  },
  Y2 = async (e, { wallet: t }) => {
    var a;
    const { request: r, source: n } = e;
    if (!n || n.type !== 'BrowserTabRpcRequestSource') return Qe(r.id);
    if (await t.isTrustedApp(n.url.origin)) return;
    const o = await t.requestUserApproval({
      jsonrpc: '2.0',
      method: 'user_approveBtcRequestAccounts',
      id: $e(),
      params: [{ url: n.url.toString(), icon: ((a = n.icon) == null ? void 0 : a.href) ?? null }],
    });
    if ('error' in o) return ge(r.id, o.error);
  },
  K2 = async ({ request: e, source: t }, { wallet: r, i18n: n }) => {
    var o;
    if (!t || t.type !== 'BrowserTabRpcRequestSource')
      return B(e.id, n.t('rpcErrorUnauthorizedUnknownSource'));
    const s = await r.requestUserApproval({
      jsonrpc: '2.0',
      method: 'user_approveBtcSignMessage',
      id: $e(),
      params: [
        { url: t.url.toString(), icon: ((o = t.icon) == null ? void 0 : o.href) ?? null },
        { message: e.params.message },
      ],
    });
    if ('error' in s) return ge(e.id, s.error);
    switch (s.result.type) {
      case 'send':
        return G(e.id, { signature: s.result.signature, signedMessage: s.result.signedMessage });
      case 'signAndSend':
        return;
    }
  },
  J2 = async ({ request: e, source: t }, { wallet: r, i18n: n }) => {
    var o;
    if (!t || t.type !== 'BrowserTabRpcRequestSource')
      return B(e.id, n.t('rpcErrorUnauthorizedUnknownSource'));
    const s = await r.requestUserApproval({
      jsonrpc: '2.0',
      method: 'user_approveBtcSignPSBT',
      id: $e(),
      params: [
        { url: t.url.toString(), icon: ((o = t.icon) == null ? void 0 : o.href) ?? null },
        {
          psbt: e.params[0],
          inputsToSign: e.params[1].inputsToSign,
          finalize: e.params[1].finalize,
        },
      ],
    });
    if ('error' in s) return ge(e.id, s.error);
    switch (s.result.type) {
      case 'send':
        return G(e.id, s.result.signature);
      case 'signAndSend':
        return;
    }
  },
  Z2 = async (e, { wallet: t }) => {
    var a;
    const { request: r, source: n } = e;
    if (!n || n.type !== 'BrowserTabRpcRequestSource') return Qe(r.id);
    if (await t.isTrustedApp(n.url.origin)) return;
    const o = await t.requestUserApproval({
      jsonrpc: '2.0',
      method: 'user_approveEthRequestAccounts',
      id: $e(),
      params: [{ url: n.url.toString(), icon: ((a = n.icon) == null ? void 0 : a.href) ?? null }],
    });
    if ('error' in o) return ge(r.id, o.error);
  },
  X2 = async (e, { wallet: t }) => {
    const { request: r, source: n } = e;
    if (!n) return Qe(r.id);
    const s = H(n),
      o = be(n),
      a = De(n);
    if (!s || !o) return B(r.id);
    if (await t.isTrustedApp(s)) return;
    const l = await t.requestUserApproval({
      jsonrpc: '2.0',
      method: 'user_approveWalletRequestPermissions',
      id: $e(),
      params: [{ url: o.toString(), icon: a }],
    });
    if ('error' in l) return ge(r.id, l.error);
  },
  hr = (e) =>
    [
      _e.OK,
      _e.RateLimitExceeded,
      _e.SessionExpired,
      _e.SimulationFailed,
      _e.Unknown,
      _e.UnsupportedNetworkId,
      _e.UnsupportedMethod,
    ].includes(e),
  eU = async ({ request: e, source: t }, { wallet: r, i18n: n, analytics: s }) => {
    if (!t) return B(e.id, n.t('rpcErrorUnauthorizedUnknownSource'));
    const o = H(t),
      a = be(t),
      c = De(t);
    if (!o || !a) return B(e.id, n.t('rpcErrorUnauthorizedUnknownSource'));
    const [l] = e.params;
    if ((await r.eth.getSelectedAccount()) !== l.from.toLowerCase()) return wn(e.id);
    const p = await r.eth.autoConfirmValidateTransaction(a, [l]),
      d = p.status === _e.OK;
    if (
      (hr(p.status) &&
        (await s.eth.autoConfirmedTransaction({
          request: e,
          chainId: await r.eth.getNetworkId(o),
          origin: o,
          data: {
            sessionStartTime: p.sessionStartTime,
            sessionMaxDuration: p.sessionMaxDuration,
            lastStatusCode: p.status,
            dollarValue: p.dollarValue,
            auditTrail: p.auditTrail,
          },
        })),
      d)
    )
      return;
    const h = { url: a.toString(), icon: c },
      f = await r.requestUserApproval({
        jsonrpc: '2.0',
        method: 'user_approveEthSendTransaction',
        id: $e(),
        params: [h, { transaction: l, autoConfirmStatusCode: p.status }],
      });
    if ('error' in f) return ge(e.id, f.error);
    switch (
      (f.result.maxFeePerGas && (l.maxFeePerGas = f.result.maxFeePerGas),
      f.result.maxPriorityFeePerGas && (l.maxPriorityFeePerGas = f.result.maxPriorityFeePerGas),
      f.result.type)
    ) {
      case 'send': {
        const g = await r.eth.sendTransaction(l, f.result.signature);
        return ue(e.id, { result: g });
      }
      case 'signAndSend':
        return;
    }
  },
  tU = async ({ request: e, source: t }, { wallet: r, i18n: n }) => {
    if (!t) return B(e.id, n.t('rpcErrorUnauthorizedUnknownSource'));
    const s = H(t),
      o = be(t),
      a = De(t);
    if (!s || !o) return B(e.id, n.t('rpcErrorUnauthorizedUnknownSource'));
    const c = await r.eth.getSelectedAccount(),
      l = await r.eth.getNetworkId(s),
      [u, p] = e.params;
    if (c !== u.toLowerCase()) return B(e.id);
    const d = { url: o.toString(), icon: a },
      h = await r.requestUserApproval({
        jsonrpc: '2.0',
        method: 'user_approveEthSignMessage',
        id: $e(),
        params: [
          d,
          {
            signer: u,
            message: p,
            originalMethod: 'eth_sign',
            chainId: l,
            autoConfirmStatusCode: _e.UnsupportedMethod,
          },
        ],
      });
    if ('error' in h) return ge(e.id, h.error);
    switch (h.result.approvalType) {
      case 'hardware':
        return G(e.id, h.result.signature);
      case 'user':
        return;
    }
  },
  rU = async ({ request: e, source: t }, { wallet: r, i18n: n }) => {
    if (!t) return B(e.id, n.t('rpcErrorUnauthorizedUnknownSource'));
    const s = H(t),
      o = be(t),
      a = De(t);
    if (!s || !o) return B(e.id, n.t('rpcErrorUnauthorizedUnknownSource'));
    const c = await r.eth.getSelectedAccount(),
      l = await r.eth.getNetworkId(s),
      [u, p] = e.params;
    if (c !== p.toLowerCase()) return B(e.id);
    const d = '0x' + Ir.from(JSON.stringify(u)).toString('hex'),
      h = { url: o.toString(), icon: a },
      f = await r.requestUserApproval({
        jsonrpc: '2.0',
        method: 'user_approveEthSignMessage',
        id: $e(),
        params: [
          h,
          {
            signer: p,
            message: d,
            originalMethod: 'eth_signTypedData',
            chainId: l,
            autoConfirmStatusCode: _e.UnsupportedMethod,
          },
        ],
      });
    if ('error' in f) return ge(e.id, f.error);
  },
  nU = async ({ request: e, source: t }, { wallet: r, i18n: n, analytics: s }) => {
    if (!t) return B(e.id, n.t('rpcErrorUnauthorizedUnknownSource'));
    const o = H(t),
      a = be(t),
      c = De(t);
    if (!o || !a) return B(e.id, n.t('rpcErrorUnauthorizedUnknownSource'));
    const l = await r.eth.getSelectedAccount(),
      u = await r.eth.getNetworkId(o),
      [p, d] = e.params;
    if (l !== p.toLowerCase()) return B(e.id);
    const h = await r.eth.autoConfirmValidateMessage(a, d),
      f = h.status === _e.OK;
    if (
      (hr(h.status) &&
        (await s.eth.autoConfirmedMessage({
          request: e,
          chainId: await r.eth.getNetworkId(o),
          origin: o,
          data: {
            sessionStartTime: h.sessionStartTime,
            sessionMaxDuration: h.sessionMaxDuration,
            lastStatusCode: h.status,
            auditTrail: h.auditTrail,
          },
        })),
      f)
    )
      return;
    const g = { url: a.toString(), icon: c },
      m = await r.requestUserApproval({
        jsonrpc: '2.0',
        method: 'user_approveEthSignMessage',
        id: $e(),
        params: [
          g,
          {
            signer: p,
            message: '0x' + Ir.from(JSON.stringify(d)).toString('hex'),
            originalMethod: 'eth_signTypedData_v3',
            chainId: u,
            autoConfirmStatusCode: h.status,
          },
        ],
      });
    if ('error' in m) return ge(e.id, m.error);
  },
  sU = async ({ request: e, source: t }, { wallet: r, i18n: n, analytics: s }) => {
    if (!t) return B(e.id, n.t('rpcErrorUnauthorizedUnknownSource'));
    const o = H(t),
      a = be(t),
      c = De(t);
    if (!o || !a) return B(e.id, n.t('rpcErrorUnauthorizedUnknownSource'));
    const l = await r.eth.getSelectedAccount(),
      u = await r.eth.getNetworkId(o),
      [p, d] = e.params;
    if (l !== p.toLowerCase()) return B(e.id);
    const h = await r.eth.autoConfirmValidateMessage(a, d),
      f = h.status === _e.OK;
    if (
      (hr(h.status) &&
        (await s.eth.autoConfirmedMessage({
          request: e,
          chainId: await r.eth.getNetworkId(o),
          origin: o,
          data: {
            sessionStartTime: h.sessionStartTime,
            sessionMaxDuration: h.sessionMaxDuration,
            lastStatusCode: h.status,
            auditTrail: h.auditTrail,
          },
        })),
      f)
    )
      return;
    const g = { url: a.toString(), icon: c },
      m = await r.requestUserApproval({
        jsonrpc: '2.0',
        method: 'user_approveEthSignMessage',
        id: $e(),
        params: [
          g,
          {
            signer: p,
            message: '0x' + Ir.from(JSON.stringify(d)).toString('hex'),
            originalMethod: 'eth_signTypedData_v4',
            chainId: u,
            autoConfirmStatusCode: h.status,
          },
        ],
      });
    if ('error' in m) return ge(e.id, m.error);
  },
  iU = async ({ request: e, source: t }, { wallet: r, i18n: n }) => {
    if (!t) return B(e.id, n.t('rpcErrorUnauthorizedUnknownSource'));
    const s = H(t),
      o = be(t),
      a = De(t);
    if (!s || !o) return B(e.id, n.t('rpcErrorUnauthorizedUnknownSource'));
    const c = await r.eth.getSelectedAccount(),
      l = await r.eth.getNetworkId(s),
      [u, p] = e.params;
    if (c !== p.toLowerCase()) return B(e.id);
    const d = { url: o.toString(), icon: a },
      h = await r.requestUserApproval({
        jsonrpc: '2.0',
        method: 'user_approveEthSignMessage',
        id: $e(),
        params: [
          d,
          {
            signer: p,
            message: u,
            originalMethod: 'personal_sign',
            chainId: l,
            autoConfirmStatusCode: _e.UnsupportedMethod,
          },
        ],
      });
    if ('error' in h) return ge(e.id, h.error);
    switch (h.result.approvalType) {
      case 'hardware':
        return G(e.id, h.result.signature);
      case 'user':
        return;
    }
  },
  oU = async (e, { wallet: t }) => {
    var u;
    const { request: r, source: n } = e;
    if (!n) return Qe(r.id);
    const s = H(n),
      o = be(n),
      a = De(n);
    if (!s || !o) return B(r.id);
    if (await t.isTrustedApp(s)) return;
    if (((u = r.params) == null ? void 0 : u.onlyIfTrusted) === !0) return Qe(r.id);
    const l = await t.requestUserApproval({
      jsonrpc: '2.0',
      method: 'user_approveSolConnect',
      id: $e(),
      params: [{ url: o.toString(), icon: a }],
    });
    if ('error' in l) return ge(r.id, l.error);
  },
  aU = async ({ request: e, source: t }, { wallet: r, i18n: n, analytics: s }) => {
    if (!t) return B(e.id, n.t('rpcErrorUnauthorizedUnknownSource'));
    const o = H(t),
      a = be(t),
      c = De(t);
    if (!o || !a) return B(e.id, n.t('rpcErrorUnauthorizedUnknownSource'));
    const l = await r.sol.autoConfirmValidateTransaction(a, e.params.transactions),
      u = l.status === _e.OK;
    if (
      (hr(l.status) &&
        (await s.sol.autoConfirmedTransaction({
          request: e,
          chainId: await r.sol.getNetworkId(),
          origin: o,
          data: {
            sessionStartTime: l.sessionStartTime,
            sessionMaxDuration: l.sessionMaxDuration,
            lastStatusCode: l.status,
            dollarValue: l.dollarValue,
            auditTrail: l.auditTrail,
          },
        })),
      u)
    )
      return;
    const p = { url: a.toString(), icon: c },
      d = await r.requestUserApproval({
        jsonrpc: '2.0',
        method: 'user_approveSolSignAllTransactions',
        id: $e(),
        params: [p, { transactions: e.params.transactions, autoConfirmStatusCode: l.status }],
      });
    if ('error' in d) return ge(e.id, d.error);
    switch (d.result.type) {
      case 'send':
        return G(
          e.id,
          d.result.result.map((h) => ({
            transaction: h.signedTransaction,
            signature: h.signature,
            version: h.version,
          }))
        );
      case 'signAndSend': {
        const h = d.result.overwriteTransactions;
        h && (e.params.transactions = h);
        return;
      }
    }
  },
  cU = async ({ request: e, source: t }, { wallet: r, i18n: n, analytics: s }) => {
    if (!t) return B(e.id, n.t('rpcErrorUnauthorizedUnknownSource'));
    const o = H(t),
      a = be(t),
      c = De(t);
    if (!o || !a) return B(e.id, n.t('rpcErrorUnauthorizedUnknownSource'));
    const l = await r.sol.autoConfirmValidateTransaction(a, e.params.transactions),
      u = l.status === _e.OK;
    if (
      (hr(l.status) &&
        (await s.sol.autoConfirmedTransaction({
          request: e,
          chainId: await r.sol.getNetworkId(),
          origin: o,
          data: {
            sessionStartTime: l.sessionStartTime,
            sessionMaxDuration: l.sessionMaxDuration,
            lastStatusCode: l.status,
            dollarValue: l.dollarValue,
            auditTrail: l.auditTrail,
          },
        })),
      u)
    )
      return;
    const p = { url: a.toString(), icon: c },
      d = await r.requestUserApproval({
        jsonrpc: '2.0',
        method: 'user_approveSolSignAndSendAllTransactions',
        id: $e(),
        params: [p, { transactions: e.params.transactions, autoConfirmStatusCode: l.status }],
      });
    if ('error' in d) return ge(e.id, d.error);
    switch (d.result.type) {
      case 'send': {
        const h = await r.sol.getSelectedAccount();
        for (const [g, m] of d.result.result.entries())
          e.params.transactions[g] = m.signedTransaction;
        const f = await r.sol.sendAllTransactions(e.params.transactions);
        return G(e.id, { publicKey: h, signatures: f });
      }
      case 'signAndSend': {
        const h = d.result.overwriteTransactions;
        h && (e.params.transactions = h);
        return;
      }
    }
  },
  lU = async ({ request: e, source: t }, { wallet: r, i18n: n, analytics: s }) => {
    if (!t) return B(e.id, n.t('rpcErrorUnauthorizedUnknownSource'));
    const o = H(t),
      a = be(t),
      c = De(t);
    if (!o || !a) return B(e.id, n.t('rpcErrorUnauthorizedUnknownSource'));
    const l = await r.sol.autoConfirmValidateTransaction(a, [e.params.transaction]),
      u = l.status === _e.OK;
    if (
      (hr(l.status) &&
        (await s.sol.autoConfirmedTransaction({
          request: e,
          chainId: await r.sol.getNetworkId(),
          origin: o,
          data: {
            sessionStartTime: l.sessionStartTime,
            sessionMaxDuration: l.sessionMaxDuration,
            lastStatusCode: l.status,
            dollarValue: l.dollarValue,
            auditTrail: l.auditTrail,
          },
        })),
      u)
    )
      return;
    const p = { url: a.toString(), icon: c },
      d = await r.requestUserApproval({
        jsonrpc: '2.0',
        method: 'user_approveSolSignAndSendTransaction',
        id: $e(),
        params: [p, { transaction: e.params.transaction, autoConfirmStatusCode: l.status }],
      });
    if ('error' in d) return ge(e.id, d.error);
    switch (d.result.type) {
      case 'send': {
        const h = await r.sol.getSelectedAccount();
        return (
          await r.sol.sendTransaction(d.result.signedTransaction, e.params.options),
          G(e.id, { publicKey: h, signature: d.result.signature })
        );
      }
      case 'signAndSend': {
        const h = d.result.overwriteTransactions;
        h && (e.params.transaction = h[0]),
          d.result.isSharingEligible && (e.params.isSharingEligible = !0);
        return;
      }
    }
  },
  uU = async ({ request: e, source: t }, { wallet: r, i18n: n, analytics: s }) => {
    if (!t) return B(e.id, n.t('rpcErrorUnauthorizedUnknownSource'));
    const o = H(t),
      a = be(t);
    if (!o || !a) return B(e.id, n.t('rpcErrorUnauthorizedUnknownSource'));
    const c = await r.sol.autoConfirmValidateMessage(a, e.params.message),
      l = c.status === _e.OK;
    if (
      (hr(c.status) &&
        (await s.sol.autoConfirmedMessage({
          request: e,
          chainId: await r.sol.getNetworkId(),
          origin: o,
          data: {
            sessionStartTime: c.sessionStartTime,
            sessionMaxDuration: c.sessionMaxDuration,
            lastStatusCode: c.status,
            auditTrail: c.auditTrail,
          },
        })),
      l)
    )
      return;
    const u = await r.requestUserApproval({
      jsonrpc: '2.0',
      method: 'user_approveSolSignMessage',
      id: $e(),
      params: [
        { url: a.toString(), icon: De(t) },
        { ...e.params, autoConfirmStatusCode: c.status },
      ],
    });
    if ('error' in u) return ge(e.id, u.error);
  },
  dU = async ({ request: e, source: t }, { wallet: r, i18n: n, analytics: s }) => {
    if (!t) return B(e.id, n.t('rpcErrorUnauthorizedUnknownSource'));
    const o = H(t),
      a = be(t),
      c = De(t);
    if (!o || !a) return B(e.id);
    const l = await r.sol.autoConfirmValidateTransaction(a, [e.params.transaction]),
      u = l.status === _e.OK;
    if (
      (hr(l.status) &&
        (await s.sol.autoConfirmedTransaction({
          request: e,
          chainId: await r.sol.getNetworkId(),
          origin: o,
          data: {
            sessionStartTime: l.sessionStartTime,
            sessionMaxDuration: l.sessionMaxDuration,
            lastStatusCode: l.status,
            dollarValue: l.dollarValue,
            auditTrail: l.auditTrail,
          },
        })),
      u)
    )
      return;
    const p = { url: a.toString(), icon: c },
      d = await r.requestUserApproval({
        jsonrpc: '2.0',
        method: 'user_approveSolSignTransaction',
        id: $e(),
        params: [p, { transaction: e.params.transaction, autoConfirmStatusCode: l.status }],
      });
    if ('error' in d) return ge(e.id, d.error);
    switch (d.result.type) {
      case 'send':
        return G(e.id, {
          transaction: d.result.signedTransaction,
          signature: d.result.signature,
          version: d.result.version,
        });
      case 'signAndSend': {
        const h = d.result.overwriteTransactions;
        h && (e.params.transaction = h[0]),
          d.result.isSharingEligible && (e.params.isSharingEligible = !0),
          d.result.transactionSharingDelayMs &&
            (e.params.transactionSharingDelayMs = d.result.transactionSharingDelayMs);
        return;
      }
    }
  },
  Kt = async ({ request: e, source: t }, { analytics: r, wallet: n, utils: s }) => {
    if (!t) return C(e.id, 'missing source');
    const o = be(t);
    if (!o) return C(e.id, 'missing source');
    const a = o.hostname;
    return async (c) => {
      const { method: l } = e;
      if (zs(a)) return;
      const u = await n.sol.getNetworkId();
      if (u === 'localnet') return;
      const p = s.sol.chainIdToCAIP2(u),
        h = { method: l, chainType: 'solana', chainId: p, origin: a };
      'error' in c && (h.errorCode = c.error.code),
        l === 'sol_connect' && pU(h, r),
        (l === 'sol_signTransaction' ||
          l === 'sol_signAndSendTransaction' ||
          l === 'sol_signAndSendAllTransactions' ||
          l === 'sol_signAllTransactions') &&
          hU(h, r),
        (l === 'sol_signMessage' || l === 'sol_signIn') && fU(h, r);
    };
  },
  pU = (e, t) => {
    'errorCode' in e ? t.declineConnection(e) : t.approveConnection(e);
  },
  hU = (e, t) => {
    'errorCode' in e ? t.declineTransaction(e) : t.approveTransaction(e);
  },
  fU = (e, t) => {
    'errorCode' in e ? t.declineSignMessage(e) : t.approveSignMessage(e);
  },
  ft =
    async ({ request: e }, { analytics: t, wallet: r, utils: n }) =>
    async (s) => {
      const { method: o } = e,
        a =
          e.params &&
          typeof e.params == 'object' &&
          'redirect_link' in e.params &&
          typeof e.params.redirect_link == 'string'
            ? e.params.redirect_link
            : 'missing redirect_link from deep link';
      t.deepLinkDetected({ method: o, params: JSON.stringify(e.params) });
      const c = await r.sol.getNetworkId();
      if (c === 'localnet') return;
      const l = n.sol.chainIdToCAIP2(c),
        p = { method: o, chainType: 'solana', chainId: l, origin: a };
      if (o === 'phantom_deep_link_connect') {
        const d = { ...p };
        'error' in s
          ? t.declineConnection({ ...d, errorCode: s.error.code })
          : t.approveConnection(d);
      }
      if (
        o === 'phantom_deep_link_signTransaction' ||
        o === 'phantom_deep_link_signAllTransactions' ||
        o === 'phantom_deep_link_signAndSendTransaction'
      ) {
        const d = { ...p };
        'error' in s
          ? t.declineTransaction({ ...d, errorCode: s.error.code })
          : t.approveTransaction(d);
      }
      if (o === 'phantom_deep_link_signMessage') {
        const d = { ...p };
        'error' in s
          ? t.declineSignMessage({ ...d, errorCode: s.error.code })
          : t.approveSignMessage(d);
      }
    };
let es = [];
const Mt =
    (e) =>
    async ({ source: t, request: r }) => {
      const n = Date.now(),
        o = `${(t == null ? void 0 : t.type) === 'DeepLinkRpcRequestSource' ? t.deepLinkUrl : t == null ? void 0 : t.url.href}:${r.method}:${JSON.stringify(r.params)}`;
      if (
        ((es = es.filter((c) => c.timestamp > n - 1e3)), es.filter((c) => c.key === o).length >= e)
      )
        return U2(r.id);
      es.push({ timestamp: n, key: o });
    },
  Nt = async ({ request: e }, { wallet: t }) => {
    if (!(await t.isUserOnboarded())) {
      if (e.method === 'sol_connect' && e.params.onlyIfTrusted) return Qe(e.id);
      try {
        await t.requestUserOnboard();
      } catch {
        return Qe(e.id);
      }
    }
  },
  ts = async ({ request: e, source: t }, { analytics: r }) => {
    if (!t) return C(e.id, 'missing source');
    const n = be(t);
    if (!n) return C(e.id);
    const s = n.hostname;
    return async (o) => {
      const { method: a } = e;
      if (zs(s)) return;
      const c = { method: a, chainType: 'sui', chainId: 'mainnet', origin: s };
      if (a === 'sui_requestAccounts') {
        const l = { ...c };
        'error' in o
          ? r.declineConnection({ ...l, errorCode: o.error.code })
          : r.approveConnection(l);
      }
      if (a === 'sui_signTransaction' || a === 'sui_signAndExecuteTransaction') {
        const l = { ...c };
        'error' in o
          ? r.declineTransaction({ ...l, errorCode: o.error.code })
          : r.approveTransaction(l);
      }
      if (a === 'sui_signMessage') {
        const l = { ...c };
        'error' in o
          ? r.declineSignMessage({ ...l, errorCode: o.error.code })
          : r.approveSignMessage(l);
      }
    };
  },
  mU = async (e, { wallet: t }) => {
    const { request: r, source: n } = e;
    if (!n) return Qe(r.id);
    const s = H(n),
      o = be(n),
      a = De(n);
    if (!s || !o) return B(r.id);
    if (await t.isTrustedApp(s)) return;
    const l = await t.requestUserApproval({
      jsonrpc: '2.0',
      method: 'user_approveSuiRequestAccounts',
      id: $e(),
      params: [{ url: o.toString(), icon: a }],
    });
    if ('error' in l) return ge(r.id, l.error);
  },
  vu = async ({ request: e, source: t }, { wallet: r, i18n: n }) => {
    if (!t) return B(e.id, n.t('rpcErrorUnauthorizedUnknownSource'));
    const s = be(t),
      o = De(t);
    if (!s) return B(e.id);
    const a = await r.requestUserApproval({
      jsonrpc: '2.0',
      method: 'user_approveSuiSignTransaction',
      id: $e(),
      params: [{ url: s.toString(), icon: o }, { transaction: e.params.transaction }],
    });
    if ('error' in a) return ge(e.id, a.error);
  },
  gU = async ({ request: e, source: t }, { wallet: r, i18n: n }) => {
    if (!t) return B(e.id, n.t('rpcErrorUnauthorizedUnknownSource'));
    const s = be(t),
      o = De(t);
    if (!s) return B(e.id);
    const a = await r.requestUserApproval({
      jsonrpc: '2.0',
      method: 'user_approveSuiSignMessage',
      id: $e(),
      params: [{ url: s.toString(), icon: o }, { message: e.params.message }],
    });
    if ('error' in a) return ge(e.id, a.error);
  },
  yU = async ({ request: e, source: t }, { wallet: r }) => {
    if (!t) return G(e.id, []);
    const n = H(t);
    if (!n) return C(e.id, 'missing source');
    if (!(await r.isTrustedApp(n))) return G(e.id, []);
    const o = await r.eth.getAccounts();
    return G(e.id, o);
  },
  bU = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.eth_blockNumber(a, e.params);
    return ue(e.id, c);
  },
  vU = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.eth_call(a, e.params);
    return ue(e.id, c);
  },
  SU = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.eth_cancelPrivateTransaction(a, e.params);
    return ue(e.id, c);
  },
  _U = async ({ request: e, source: t }, { wallet: r }) => {
    if (!t) return C(e.id, 'missing source');
    const n = H(t);
    if (!n) return C(e.id, 'missing source');
    const s = await r.eth.getNetworkId(n);
    return G(e.id, s);
  },
  wU = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.eth_estimateGas(a, e.params);
    return ue(e.id, c);
  },
  $U = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.eth_feeHistory(a, e.params);
    return ue(e.id, c);
  },
  TU = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.eth_gasPrice(a, e.params);
    return ue(e.id, c);
  },
  IU = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.eth_getBalance(a, e.params);
    return ue(e.id, c);
  },
  xU = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.eth_getBlockByHash(a, e.params);
    return ue(e.id, c);
  },
  EU = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.eth_getBlockByNumber(a, e.params);
    return ue(e.id, c);
  },
  AU = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.eth_getBlockReceipts(a, e.params);
    return ue(e.id, c);
  },
  PU = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.eth_getBlockTransactionCountByHash(a, e.params);
    return ue(e.id, c);
  },
  DU = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.eth_getBlockTransactionCountByNumber(a, e.params);
    return ue(e.id, c);
  },
  kU = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.eth_getCode(a, e.params);
    return ue(e.id, c);
  },
  CU = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.eth_getFilterChanges(a, e.params);
    return ue(e.id, c);
  },
  RU = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.eth_getFilterLogs(a, e.params);
    return ue(e.id, c);
  },
  OU = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.eth_getLogs(a, e.params);
    return ue(e.id, c);
  },
  NU = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.eth_getProof(a, e.params);
    return ue(e.id, c);
  },
  MU = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.eth_getStorageAt(a, e.params);
    return ue(e.id, c);
  },
  UU = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.eth_getTransactionByBlockHashAndIndex(a, e.params);
    return ue(e.id, c);
  },
  LU = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.eth_getTransactionByBlockNumberAndIndex(a, e.params);
    return ue(e.id, c);
  },
  BU = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.eth_getTransactionByHash(a, e.params);
    return ue(e.id, c);
  },
  jU = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.eth_getTransactionCount(a, e.params);
    return ue(e.id, c);
  },
  FU = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.eth_getTransactionReceipt(a, e.params);
    return ue(e.id, c);
  },
  HU = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.eth_getUncleByBlockHashAndIndex(a, e.params);
    return ue(e.id, c);
  },
  VU = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.eth_getUncleByBlockNumberAndIndex(a, e.params);
    return ue(e.id, c);
  },
  zU = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.eth_getUncleCountByBlockHash(a, e.params);
    return ue(e.id, c);
  },
  GU = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.eth_getUncleCountByBlockNumber(a, e.params);
    return ue(e.id, c);
  },
  qU = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.eth_maxPriorityFeePerGas(a, e.params);
    return ue(e.id, c);
  },
  WU = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.eth_newBlockFilter(a, e.params);
    return ue(e.id, c);
  },
  QU = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.eth_newFilter(a, e.params);
    return ue(e.id, c);
  },
  YU = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.eth_newPendingTransactionFilter(a, e.params);
    return ue(e.id, c);
  },
  KU = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.eth_protocolVersion(a, e.params);
    return ue(e.id, c);
  },
  JU = async ({ request: e, source: t }, { wallet: r }) => {
    if (!t) return B(e.id);
    const n = H(t),
      s = De(t),
      o = be(t);
    if (!n || !o) return B(e.id);
    const a = { url: o, icon: s ? new URL(s) : void 0 };
    await r.addTrustedApp(n, a);
    const c = await r.eth.getSelectedAccount();
    return G(e.id, [c]);
  },
  ZU = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.eth_sendRawTransaction(a, e.params);
    return ue(e.id, c);
  },
  XU = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.eth_sendPrivateTransaction(a, e.params);
    return ue(e.id, c);
  },
  eL = async ({ request: e, source: t }, { wallet: r, i18n: n }) => {
    if (!t) return B(e.id, n.t('rpcErrorUnauthorizedUnknownSource'));
    const s = H(t);
    if (!s) return B(e.id, n.t('rpcErrorUnauthorizedUnknownSource'));
    if (!(await r.isTrustedApp(s))) return B(e.id);
    const [a] = e.params,
      c = await r.eth.getSelectedAccount();
    if (a.from.toLowerCase() !== c.toLowerCase())
      return B(e.id, n.t('rpcErrorUnauthorizedWrongAccount'));
    if (a.type !== ks.eip1559 || !a.chainId || !a.nonce) return wn(e.id);
    const l = await r.eth.signAndSendTransaction(a);
    return ue(e.id, { result: l });
  },
  tL = async ({ request: e }, { wallet: t, i18n: r }) => {
    const [n, s] = e.params,
      o = await t.eth.getSelectedAccount();
    if (n.toLowerCase() !== o)
      return B(e.id, r.t('Message signer address does not match the selected account address.'));
    const a = await t.eth.signMessage(s);
    return G(e.id, a);
  },
  rL = async ({ request: e }, { wallet: t, i18n: r }) => {
    const [n, s] = e.params,
      o = await t.eth.getSelectedAccount();
    if (s.toLowerCase() !== o)
      return B(e.id, r.t('Message signer address does not match the selected account address.'));
    const a = await t.eth.signTypedData({ version: 1, data: n });
    return G(e.id, a);
  },
  nL = async ({ request: e }, { wallet: t, i18n: r }) => {
    const [n, s] = e.params,
      o = await t.eth.getSelectedAccount();
    if (n.toLowerCase() !== o)
      return B(e.id, r.t('Message signer address does not match the selected account address.'));
    const a = await t.eth.signTypedData({ version: 3, data: s });
    return G(e.id, a);
  },
  sL = async ({ request: e }, { wallet: t, i18n: r }) => {
    const [n, s] = e.params,
      o = await t.eth.getSelectedAccount();
    if (n.toLowerCase() !== o)
      return B(e.id, r.t('Message signer address does not match the selected account address.'));
    const a = await t.eth.signTypedData({ version: 4, data: s });
    return G(e.id, a);
  },
  iL = async ({ request: e }, t) => _S(e.id),
  oL = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id);
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.eth_syncing(a, e.params);
    return ue(e.id, c);
  },
  aL = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.eth_uninstallFilter(a, e.params);
    return ue(e.id, c);
  },
  cL = async ({ request: e }, t) => _S(e.id),
  lL = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.net_listening(a, e.params);
    return ue(e.id, c);
  },
  uL = async ({ request: e, source: t }, { wallet: r }) => {
    if (!t) return C(e.id, 'missing source');
    const n = H(t);
    if (!n) return C(e.id, 'missing source');
    const s = await r.eth.getNetworkId(n);
    return G(e.id, parseInt(s, 16).toString());
  },
  dL = async ({ request: e }, { wallet: t, i18n: r }) => {
    const [n, s] = e.params,
      o = await t.eth.getSelectedAccount();
    if (s.toLowerCase() !== o)
      return B(e.id, r.t('Message signer address does not match the selected account address.'));
    const a = await t.eth.signMessage(n);
    return G(e.id, a);
  },
  pL = async ({ request: e, source: t }, { wallet: r, i18n: n, analytics: s }) => {
    const [o] = e.params;
    if (!(await r.eth.addChain(o)))
      return Qe(e.id, n.t('Could not add the requested chain. It is not yet supported.'));
    if (!t) return C(e.id, 'missing source');
    const c = H(t);
    return c
      ? (await r.eth.switchChain(o.chainId, c))
        ? G(e.id, null)
        : (s.eth.unsupportedChain({
            origin: c,
            data: { method: e.method, hexChainId: o.chainId, chainName: o.chainName },
          }),
          C(e.id, n.t('Could not switch to the requested chain.')))
      : C(e.id, 'missing source');
  },
  hL = async ({ request: e, source: t }, { wallet: r }) => {
    if (!t) return B(e.id);
    const n = H(t),
      s = be(t),
      o = De(t);
    if (!n || !s) return B(e.id);
    if (await r.isTrustedApp(n)) return G(e.id, ya.enum.CONTINUE_WITH_PHANTOM);
    const c = await r.requestUserApproval({
      jsonrpc: '2.0',
      method: 'user_selectEthWallet',
      id: 0,
      params: [{ url: s.toString(), icon: o }],
    });
    if ('error' in c) return ge(e.id, c.error);
    switch (c.result) {
      case gn.enum.CONTINUE_WITH_METAMASK:
        return G(e.id, c.result);
      case gn.enum.CONTINUE_WITH_PHANTOM:
        return G(e.id, c.result);
      case gn.enum.ALWAYS_USE_PHANTOM:
        return await r.setMetaMaskOverrideSetting('USE_PHANTOM'), G(e.id, c.result);
      case gn.enum.ALWAYS_USE_METAMASK:
        return await r.setMetaMaskOverrideSetting('USE_METAMASK'), G(e.id, c.result);
    }
  },
  fL = async ({ request: e, source: t }, { wallet: r, i18n: n, analytics: s }) => {
    if (!t) return C(e.id, 'missing source');
    const o = H(t);
    if (!o) return C(e.id, 'missing source');
    const [{ chainId: a }] = e.params;
    return (await r.eth.switchChain(a, o))
      ? G(e.id, null)
      : (s.eth.unsupportedChain({ origin: o, data: { method: e.method, hexChainId: a } }),
        bn(e.id, n.t('Could not switch to the requested chain. It is not yet supported.')));
  },
  mL = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.web3_clientVersion(a, e.params);
    return ue(e.id, c);
  },
  gL = async ({ request: e, source: t }, { wallet: r, rpc: n }) => {
    if (!t) return C(e.id, 'missing source');
    const s = H(t);
    if (!s) return C(e.id, 'missing source');
    const o = await r.eth.getNetworkId(s),
      a = await r.eth.getRpcURL(o),
      c = await n.eth.web3_sha3(a, e.params);
    return ue(e.id, c);
  },
  yL = async ({ request: e, source: t }, { wallet: r }) => {
    if (!t) return B(e.id);
    const n = H(t),
      s = be(t),
      o = De(t);
    if (!n || !s) return B(e.id);
    const a = e.params[0];
    if (!Object.keys(a).includes('eth_accounts')) return G(e.id, []);
    const l = { url: s, icon: o ? new URL(o) : void 0 };
    return (
      await r.addTrustedApp(n, l), G(e.id, [{ parentCapability: 'eth_accounts', date: Date.now() }])
    );
  },
  bL = async ({ request: e, source: t }, { wallet: r }) => {
    if (!t) return G(e.id, []);
    const n = H(t);
    return n
      ? (await r.isTrustedApp(n))
        ? G(e.id, [{ invoker: n, parentCapability: 'eth_accounts', caveats: [] }])
        : G(e.id, [])
      : G(e.id, []);
  },
  vL = async ({ request: e, source: t }, { wallet: r }) => {
    if (!t) return B(e.id);
    const n = H(t),
      s = be(t),
      o = De(t);
    if (!n || !s) return B(e.id);
    const a = { url: s, icon: o ? new URL(o) : void 0 };
    await r.addTrustedApp(n, a);
    const c = await r.sol.getSelectedAccount();
    return G(e.id, { publicKey: c });
  },
  SL = async ({ request: e, source: t }) => (t ? G(e.id, null) : B(e.id)),
  _L = async ({ request: e }, { wallet: t }) => {
    const r = await t.sol.signAllTransactions(e.params.transactions);
    return G(e.id, r);
  },
  wL = async ({ source: e, request: t }, { wallet: r, i18n: n }) => {
    if (!e) return B(t.id, n.t('rpcErrorUnauthorizedUnknownSource'));
    const s = De(e),
      o = be(e);
    if (!o) return B(t.id);
    const a = await r.sol.getSelectedAccount(),
      c = await r.sol.signTransaction(t.params.transaction);
    t.params.showConfirmation &&
      r.requestUserApproval({
        jsonrpc: '2.0',
        method: 'user_solTransactionConfirmation',
        id: $e(),
        params: [
          { url: o.toString(), icon: s },
          { signature: c.signature, postAction: t.params.postAction },
        ],
      });
    const l = t.params.isSharingEligible ? 'signAndSendTransaction' : void 0;
    return (
      await r.sol.sendTransaction(c.transaction, { ...t.params.options, method: l }),
      G(t.id, { publicKey: a, signature: c.signature })
    );
  },
  $L = async ({ request: e }, { wallet: t }) => {
    const r = await t.sol.getSelectedAccount(),
      n = await Promise.all(e.params.transactions.map((o) => t.sol.signTransaction(o))),
      s = await t.sol.sendAllTransactions(n.map((o) => o.transaction));
    return G(e.id, { publicKey: r, signatures: s });
  },
  TL = async ({ request: e }, { wallet: t }) => {
    const r = await t.sol.getSelectedAccount(),
      n = await t.sol.signMessage(e.params.message);
    return G(e.id, { publicKey: r, signature: n });
  },
  IL = async ({ request: e, source: t }, { wallet: r, utils: n, i18n: s }) => {
    if (!t) return Qe(e.id);
    const o = H(t),
      a = be(t),
      c = De(t);
    if (!o || !a) return Qe(e.id);
    const l = await r.isTrustedApp(o),
      u = await r.sol.getNetworkId(),
      p = await r.sol.getSelectedAccount(),
      d = new URL(a.toString()),
      h = n.sol.serializeSolanaSignInMessage(e.params.signInData, {
        expectedChainId: u,
        expectedAddress: p,
        expectedURL: d,
      });
    if (h.type === 'fail') {
      if (h.error[0].label === 'PARSE_ERROR')
        return It(
          e.id,
          s.t("The app's signature request cannot be shown due to invalid formatting.")
        );
      if (h.error.some((m) => m.label === 'chain'))
        return It(
          e.id,
          s.t(
            "The app's signature request cannot be shown as the chain ID does not match the provided chain ID for verification."
          )
        );
      if (h.error.some((m) => m.label === 'address'))
        return It(
          e.id,
          s.t(
            "The app's signature request cannot be shown as the address does not match the provided address for verification."
          )
        );
    }
    if (
      (e.params.signInData.domain || (e.params.signInData.domain = d.host),
      e.params.signInData.address || (e.params.signInData.address = p),
      'error' in
        (await r.requestUserApproval({
          jsonrpc: '2.0',
          method: 'user_approveSolSignIn',
          params: [
            { url: a.toString(), icon: c },
            {
              connect: !l,
              signInData: e.params.signInData,
              message: h.data,
              errorDetails: h.type === 'fail' ? h.error : void 0,
            },
          ],
          id: $e(),
        })))
    )
      return h.type === 'fail'
        ? It(
            e.id,
            s.t(
              'This sign-in request is invalid. This either means the site is unsafe, or its developer made an error when sending the request.'
            )
          )
        : Qe(e.id);
    l ||
      (await r.isTrustedApp(o)) ||
      (await r.addTrustedApp(o, { url: a, icon: c ? new URL(c) : void 0 }));
    const g = await r.sol.signMessage(h.data);
    return G(e.id, { address: p, signedMessage: h.data, signature: g });
  },
  xL = 500,
  EL = async ({ request: e }, { wallet: t }) => {
    const r = await t.sol.signTransaction(e.params.transaction);
    if (e.params.isSharingEligible) {
      const n = Date.now(),
        s = e.params.transactionSharingDelayMs ?? xL;
      try {
        await Promise.race([
          t.sol.sendTransaction(r.transaction, { method: 'signTransaction' }),
          Po(s),
        ]);
        const o = Date.now() - n,
          a = Math.max(0, s - o);
        a > 0 && (await Po(a));
      } catch {}
    }
    return G(e.id, r);
  },
  AL = async ({ request: e, source: t }, { wallet: r }) => {
    if (!t) return B(e.id);
    const n = H(t),
      s = be(t),
      o = De(t);
    if (!n || !s) return B(e.id);
    const a = { url: s, icon: o ? new URL(o) : void 0 };
    await r.addTrustedApp(n, a);
    const c = await r.btc.getSelectedAccount();
    return G(e.id, c);
  },
  PL = async ({ request: e }, { wallet: t }) => {
    const r = await t.btc.signMessage(e.params.address, e.params.message);
    return G(e.id, { ...r });
  },
  DL = async ({ request: e, source: t }, { wallet: r }) => {
    if (!t) return B(e.id);
    const n = await r.btc.signPSBT(...e.params);
    return G(e.id, n);
  },
  kL = async ({ request: e }, { wallet: t }) => {
    const { url: r, ref: n } = e.params;
    return t.navigate('DetachedBrowser', { url: r, ref: n }), G(e.id, null);
  },
  CL = async ({ request: e }, { wallet: t }) => (
    t.navigate('SwapTab', {
      screen: 'Swap',
      params: {
        buyFungible: e.params.buy,
        sellFungible: e.params.sell,
        sellAmount: e.params.amount,
        navRef: e.id,
      },
    }),
    G(e.id, null)
  ),
  RL = async ({ request: e }, { wallet: t }) => (
    aR(e.params.token),
    t.navigate('FungibleStack', {
      screen: 'FungibleDetail',
      params: { caip19: e.params.token, entryPoint: 'deepLink' },
    }),
    G(e.id, null)
  ),
  OL = async ({ request: e }, { wallet: t, analytics: r }) => {
    const { username: n, action: s } = e.params;
    return r.userDeepLink({ username: n, action: s }), t.openUserProfile(n, s), G(e.id, null);
  },
  NL = async ({ request: e }, { wallet: t }) => (
    t.navigate('SocialFeedTab', { screen: 'SocialFeed' }),
    t.navigate('SocialFeedTab', { screen: 'SocialFeedNotifications' }),
    G(e.id, null)
  ),
  ML = async ({ request: e }, { wallet: t, secrets: r, utils: n }) => {
    var f, g;
    const s = await t.requestUserApproval({
      jsonrpc: '2.0',
      method: 'user_approveSolConnect',
      id: $e(),
      params: [
        {
          url: `phantom.app.deep-link-${e.params.redirect_link}`,
          icon: n.getFaviconURL(e.params.redirect_link),
        },
      ],
    });
    if ('error' in s) return ge(e.id, s.error);
    const o = ((f = nd(e.params.redirect_link)) == null ? void 0 : f.origin) ?? '';
    (await t.isTrustedApp(o)) && (await t.deleteTrustedApp(o)),
      await t.addTrustedApp(o, { url: new URL(o), icon: new URL(n.getFaviconURL(o)) });
    const a = await t.sol.getSelectedAccount(),
      {
        sharedSecret: c,
        phantomKeySecret: l,
        phantomKeyPublicKey: u,
      } = r.generateSharedSecret(e.params.dapp_encryption_public_key);
    await r.setSharedSecret(new qe(a).toBase58(), e.params.dapp_encryption_public_key, c, l, u);
    const p = await r.generateSession(
        new qe(a).toBase58(),
        ((g = e.params) == null ? void 0 : g.cluster) ?? 'mainnet-beta',
        e.params.app_url
      ),
      { nonce: d, encryptedPayload: h } = await r.encryptDeepLinkDappPayload(
        p,
        new qe(a).toBase58(),
        e.params.dapp_encryption_public_key
      );
    return G(e.id, { phantom_encryption_public_key: u, nonce: d, data: h });
  },
  UL = async ({ request: e }, { wallet: t, secrets: r, utils: n }) => {
    const s = nd(e.params.redirect_link).origin ?? '';
    (await t.isTrustedApp(s)) && (await t.deleteTrustedApp(s));
    const o = await t.sol.getSelectedAccount(),
      a = n.sol.chainIdToCluster(await t.sol.getNetworkId());
    return typeof (
      await r.decryptDeepLinkDappPayload(
        e.params,
        e.params.dapp_encryption_public_key,
        new qe(o),
        a
      )
    ).session != 'string'
      ? ge(e.id, { code: He.InvalidInput, message: 'Missing or invalid parameters.' })
      : (r.deleteSharedSecret(o, e.params.dapp_encryption_public_key), G(e.id, null));
  },
  LL = async ({ request: e }, { wallet: t, secrets: r, utils: n }) => {
    const s = await t.sol.getSelectedAccount(),
      o = n.sol.chainIdToCluster(await t.sol.getNetworkId()),
      a = e.params,
      c = await r.decryptDeepLinkDappPayload(a, e.params.dapp_encryption_public_key, new qe(s), o);
    if (
      typeof c.session != 'string' ||
      typeof c.message != 'string' ||
      !(!c.display || ['utf8', 'hex'].includes(c.display))
    )
      return ge(e.id, { code: He.InvalidInput, message: 'Missing or invalid parameters.' });
    const l = { message: c.message, display: c.display ?? 'utf8' },
      u = await t.requestUserApproval({
        jsonrpc: '2.0',
        method: 'user_approveSolSignMessage',
        id: $e(),
        params: [
          {
            url: `phantom.app.deep-link-${e.params.redirect_link}`,
            icon: n.getFaviconURL(e.params.redirect_link),
          },
          { ...l, autoConfirmStatusCode: _e.Disabled },
        ],
      });
    if ('error' in u) return ge(e.id, u.error);
    const d = { signature: await t.sol.signMessage(c.message), publicKey: s },
      { nonce: h, encryptedPayload: f } = await r.encryptDeepLinkDappPayload(
        d,
        new qe(s).toBase58(),
        e.params.dapp_encryption_public_key
      );
    return G(e.id, { nonce: h, data: f });
  },
  BL = async ({ request: e }, { wallet: t, secrets: r, utils: n, i18n: s }) => {
    var k;
    let o;
    try {
      o = JSON.parse(Ir.from(wS.decode(e.params.payload)).toString());
    } catch {
      return It(
        e.id,
        s.t(
          "The app's signature request cannot be shown due to invalid formatting. Please contact the app developer for assistance."
        )
      );
    }
    const a = new URL(e.params.app_url).origin ?? '';
    let c = new URL(e.params.redirect_link).origin;
    c = c === 'null' ? a : c;
    const l = await t.isTrustedApp(c),
      u = await t.sol.getNetworkId(),
      p = await t.sol.getSelectedAccount(),
      d = new URL(e.params.redirect_link),
      h = n.sol.serializeSolanaSignInMessage(o, {
        expectedChainId: u,
        expectedAddress: p,
        expectedURL: d,
      });
    if (h.type === 'fail') {
      if (h.error[0].label === 'PARSE_ERROR')
        return It(
          e.id,
          s.t("The app's signature request cannot be shown due to invalid formatting.")
        );
      if (h.error.some((E) => E.label === 'chain'))
        return It(
          e.id,
          s.t(
            "The app's signature request cannot be shown as the chain ID does not match the provided chain ID for verification."
          )
        );
      if (h.error.some((E) => E.label === 'address'))
        return It(
          e.id,
          s.t(
            "The app's signature request cannot be shown as the address does not match the provided address for verification."
          )
        );
    }
    if (
      (o.domain || (o.domain = d.host),
      o.address || (o.address = p),
      'error' in
        (await t.requestUserApproval({
          jsonrpc: '2.0',
          method: 'user_approveSolSignIn',
          params: [
            {
              url: `phantom.app.deep-link-${e.params.redirect_link}`,
              icon: n.getFaviconURL(e.params.redirect_link),
            },
            {
              connect: !l,
              signInData: o,
              message: h.data,
              errorDetails: h.type === 'fail' ? h.error : void 0,
            },
          ],
          id: $e(),
        })))
    )
      return h.type === 'fail'
        ? It(
            e.id,
            s.t(
              'This sign-in request is invalid. This either means the site is unsafe, or its developer made an error when sending the request.'
            )
          )
        : Qe(e.id);
    l ||
      (await t.isTrustedApp(c)) ||
      (await t.addTrustedApp(c, { url: new URL(c), icon: new URL(n.getFaviconURL(c)) }));
    const {
      sharedSecret: g,
      phantomKeySecret: m,
      phantomKeyPublicKey: b,
    } = r.generateSharedSecret(e.params.dapp_encryption_public_key);
    await r.setSharedSecret(new qe(p).toBase58(), e.params.dapp_encryption_public_key, g, m, b);
    const P = await r.generateSession(
        new qe(p).toBase58(),
        ((k = e.params) == null ? void 0 : k.cluster) ?? 'mainnet-beta',
        e.params.app_url
      ),
      A = await t.sol.signMessage(h.data),
      v = { address: P.public_key, signature: A, signedMessage: h.data, session: P.session },
      { nonce: R, encryptedPayload: O } = await r.encryptDeepLinkDappPayload(
        v,
        new qe(p).toBase58(),
        e.params.dapp_encryption_public_key
      );
    return G(e.id, { phantom_encryption_public_key: b, nonce: R, data: O });
  },
  jL = async ({ request: e }, { wallet: t, secrets: r, utils: n }) => {
    const s = await t.sol.getSelectedAccount(),
      o = n.sol.chainIdToCluster(await t.sol.getNetworkId()),
      a = await r.decryptDeepLinkDappPayload(
        e.params,
        e.params.dapp_encryption_public_key,
        new qe(s),
        o
      );
    if (typeof a.session != 'string' || typeof a.transaction != 'string')
      return ge(e.id, { code: He.InvalidInput, message: 'Missing or invalid parameters.' });
    const c = await t.sol.addPriorityFee(a.transaction),
      l = await t.requestUserApproval({
        jsonrpc: '2.0',
        method: 'user_approveSolSignTransaction',
        id: $e(),
        params: [
          {
            url: `phantom.app.deep-link-${e.params.redirect_link}`,
            icon: n.getFaviconURL(e.params.redirect_link),
          },
          { transaction: c, autoConfirmStatusCode: _e.Disabled },
        ],
      });
    if ('error' in l) return ge(e.id, l.error);
    const { transaction: u } = await t.sol.signTransaction(c),
      p = { transaction: u },
      { nonce: d, encryptedPayload: h } = await r.encryptDeepLinkDappPayload(
        p,
        new qe(s).toBase58(),
        e.params.dapp_encryption_public_key
      );
    return G(e.id, { nonce: d, data: h });
  },
  FL = async ({ request: e }, { wallet: t, secrets: r, utils: n }) => {
    const s = await t.sol.getSelectedAccount(),
      o = n.sol.chainIdToCluster(await t.sol.getNetworkId()),
      a = await r.decryptDeepLinkDappPayload(
        e.params,
        e.params.dapp_encryption_public_key,
        new qe(s),
        o
      );
    if (
      typeof a.session != 'string' ||
      !Array.isArray(a.transactions) ||
      !a.transactions.every((f) => typeof f == 'string')
    )
      return ge(e.id, { code: He.InvalidInput, message: 'Missing or invalid parameters.' });
    const c = await Promise.all(a.transactions.map((f) => t.sol.addPriorityFee(f))),
      l = await t.requestUserApproval({
        jsonrpc: '2.0',
        method: 'user_approveSolSignAllTransactions',
        id: $e(),
        params: [
          {
            url: `phantom.app.deep-link-${e.params.redirect_link}`,
            icon: n.getFaviconURL(e.params.redirect_link),
          },
          { transactions: c, autoConfirmStatusCode: _e.Disabled },
        ],
      });
    if ('error' in l) return ge(e.id, l.error);
    const p = { transactions: (await t.sol.signAllTransactions(c)).map((f) => f.transaction) },
      { nonce: d, encryptedPayload: h } = await r.encryptDeepLinkDappPayload(
        p,
        new qe(s).toBase58(),
        e.params.dapp_encryption_public_key
      );
    return G(e.id, { nonce: d, data: h });
  },
  HL = async ({ request: e }, { wallet: t, secrets: r, utils: n }) => {
    const s = await t.sol.getSelectedAccount(),
      o = n.sol.chainIdToCluster(await t.sol.getNetworkId()),
      a = e.params,
      c = await r.decryptDeepLinkDappPayload(a, e.params.dapp_encryption_public_key, new qe(s), o);
    if (typeof c.session != 'string' || typeof c.transaction != 'string')
      return ge(e.id, { code: He.InvalidInput, message: 'Missing or invalid parameters.' });
    const l = await t.sol.addPriorityFee(c.transaction),
      u = await t.requestUserApproval({
        jsonrpc: '2.0',
        method: 'user_approveSolSignAndSendTransaction',
        id: $e(),
        params: [
          {
            url: `phantom.app.deep-link-${e.params.redirect_link}`,
            icon: n.getFaviconURL(e.params.redirect_link),
          },
          { transaction: l, autoConfirmStatusCode: _e.Disabled },
        ],
      });
    if ('error' in u) return ge(e.id, u.error);
    const p = await t.sol.signTransaction(l);
    await t.sol.sendTransaction(p.transaction, c.sendOptions);
    const d = { signature: p.signature },
      { nonce: h, encryptedPayload: f } = await r.encryptDeepLinkDappPayload(
        d,
        new qe(s).toBase58(),
        e.params.dapp_encryption_public_key
      );
    return G(e.id, { nonce: h, data: f });
  },
  VL = async ({ request: e }, { wallet: t, secrets: r, utils: n }) => {
    const s = await t.sol.getSelectedAccount(),
      o = n.sol.chainIdToCluster(await t.sol.getNetworkId()),
      a = await r.decryptDeepLinkDappPayload(
        e.params,
        e.params.dapp_encryption_public_key,
        new qe(s),
        o
      );
    if (
      typeof a.session != 'string' ||
      !Array.isArray(a.transactions) ||
      !a.transactions.every((g) => typeof g == 'string')
    )
      return ge(e.id, { code: He.InvalidInput, message: 'Missing or invalid parameters.' });
    const c = await Promise.all(a.transactions.map((g) => t.sol.addPriorityFee(g))),
      l = await t.requestUserApproval({
        jsonrpc: '2.0',
        method: 'user_approveSolSignAndSendAllTransactions',
        id: $e(),
        params: [
          {
            url: `phantom.app.deep-link-${e.params.redirect_link}`,
            icon: n.getFaviconURL(e.params.redirect_link),
          },
          { transactions: c, autoConfirmStatusCode: _e.Disabled },
        ],
      });
    if ('error' in l) return ge(e.id, l.error);
    const u = await t.sol.signAllTransactions(c),
      d = {
        signatures: await t.sol.sendAllTransactions(
          u.map((g) => g.transaction),
          a.sendOptions
        ),
      },
      { nonce: h, encryptedPayload: f } = await r.encryptDeepLinkDappPayload(
        d,
        new qe(s).toBase58(),
        e.params.dapp_encryption_public_key
      );
    return G(e.id, { nonce: h, data: f });
  },
  zL = te.getAllChainIDs(),
  GL = (e, t) => {
    const r = e ? zL.find((o) => e === o) : void 0;
    if (!r) throw new Error(`Chain ${e} not supported`);
    const n = te[r],
      s = n.mainnetID;
    return Nc(
      typeof t != 'string'
        ? { chainId: s, resourceType: Be.nativeToken, slip44: n.slip44 }
        : { chainId: s, address: t, resourceType: Be.address }
    );
  },
  qL = async ({ request: e }, { wallet: t, analytics: r }) => {
    const { chain: n, address: s } = e.params,
      o = GL(n, s);
    return (
      r.tokenDeepLink({ caip19: o, ...e.params }),
      t.navigate('FungibleStack', {
        screen: 'FungibleDetail',
        params: { caip19: o, entryPoint: 'deepLink' },
      }),
      G(e.id, null)
    );
  },
  WL = async ({ request: e }, { wallet: t }) => {
    if (!Fu()) return N2(e.id);
    let r = null,
      n = null;
    const { value: s, accounts: o } = e.params;
    s && ((r = new Uint8Array(Ir.from(s, 'utf-8'))), (n = Mo.from(r)), r.fill(0));
    const a = o ? parseInt(o) : 1;
    if (a < 1) throw new Error('accounts must be greater than 0');
    return await t.onboardQuickly(n, a), G(e.id, null);
  },
  QL = async ({ request: e }, { wallet: t }) => {
    const r = e.params.buy,
      n = e.params.amount,
      s = e.params.redirectURL,
      o = r ? 'FiatRampAmount' : 'FiatRampSelectFungible';
    return (
      t.navigate('FiatRampStack', { screen: o, params: { buy: r, amount: n, redirectURL: s } }),
      G(e.id, null)
    );
  },
  YL = async ({ request: e }, { wallet: t }) => (
    t.navigate(e.params.route, e.params.params), G(e.id, null)
  ),
  KL = async ({ request: e }, { wallet: t }) => (
    t.navigate('SocialFeedTab', { screen: 'SocialFeed' }), G(e.id, null)
  ),
  JL = async ({ request: e, source: t }, { wallet: r }) => {
    if (!t) return B(e.id);
    const n = H(t),
      s = De(t),
      o = be(t);
    if (!n || !o) return B(e.id);
    const a = { url: o, icon: s ? new URL(s) : void 0 };
    await r.addTrustedApp(n, a);
    const c = await r.sui.getSelectedAccount();
    return G(e.id, c);
  },
  ZL = async ({ request: e }, { wallet: t }) => {
    const r = await t.sui.signTransaction(
      e.params.address,
      e.params.transaction,
      e.params.networkID
    );
    return G(e.id, r);
  },
  XL = async ({ request: e }, { wallet: t }) => {
    const r = await t.sui.signMessage(e.params.address, e.params.message);
    return G(e.id, r);
  },
  eB = async ({ request: e }, { wallet: t }) => {
    const r = await t.sui.signAndExecuteTransaction(
      e.params.address,
      e.params.transaction,
      e.params.networkID
    );
    return G(e.id, r);
  },
  tB = async ({ request: e }, { wallet: t }) => {
    const r = await t.getUser();
    return G(e.id, r);
  },
  rB = async ({ request: e }, { wallet: t }) => {
    try {
      return await t.login(), G(e.id, null);
    } catch {
      return Qe(e.id);
    }
  },
  nB = async ({ request: e }, { wallet: t }) => {
    try {
      return await t.logout(), G(e.id, null);
    } catch {
      return C(e.id);
    }
  },
  n4 = (e, t = 'BrowserTabRpcRequestSource') => ({
    eth_accounts: U()
      .parse(cp)
      .context(e)
      .use([Mt(100), F(t), L, Q, z], yU),
    eth_blockNumber: U()
      .parse(hp)
      .context(e)
      .use([L, F(t), Q, z], bU),
    eth_call: U()
      .parse(bp)
      .context(e)
      .use([L, F(t), Q, z], vU),
    eth_cancelPrivateTransaction: U()
      .parse($p)
      .context(e)
      .use([L, F(t), Q, z], SU),
    eth_chainId: U()
      .parse(Ap)
      .context(e)
      .use([L, F(t), Q, z], _U),
    eth_estimateGas: U()
      .parse(Rp)
      .context(e)
      .use([L, F(t), Q, z], wU),
    eth_feeHistory: U()
      .parse(Lp)
      .context(e)
      .use([L, F(t), Q, z], $U),
    eth_gasPrice: U()
      .parse(Vp)
      .context(e)
      .use([L, F(t), Q, z], TU),
    eth_getBalance: U()
      .parse(Qp)
      .context(e)
      .use([L, F(t), Q, z], IU),
    eth_getBlockByHash: U()
      .parse(Xp)
      .context(e)
      .use([L, F(t), Q, z], xU),
    eth_getBlockByNumber: U()
      .parse(sh)
      .context(e)
      .use([L, F(t), Q, z], EU),
    eth_getBlockReceipts: U()
      .parse(lh)
      .context(e)
      .use([L, F(t), Q, z], AU),
    eth_getBlockTransactionCountByHash: U()
      .parse(fh)
      .context(e)
      .use([L, F(t), Q, z], PU),
    eth_getBlockTransactionCountByNumber: U()
      .parse(vh)
      .context(e)
      .use([L, F(t), Q, z], DU),
    eth_getCode: U()
      .parse(Th)
      .context(e)
      .use([L, F(t), Q, z], kU),
    eth_getFilterChanges: U()
      .parse(Ph)
      .context(e)
      .use([L, F(t), Q, z], CU),
    eth_getFilterLogs: U()
      .parse(Oh)
      .context(e)
      .use([L, F(t), Q, z], RU),
    eth_getLogs: U()
      .parse(Bh)
      .context(e)
      .use([L, F(t), Q, z], OU),
    eth_getProof: U()
      .parse(zh)
      .context(e)
      .use([L, F(t), Q, z], NU),
    eth_getStorageAt: U()
      .parse(Yh)
      .context(e)
      .use([L, F(t), Q, z], MU),
    eth_getTransactionByBlockHashAndIndex: U()
      .parse(ef)
      .context(e)
      .use([L, F(t), Q, z], UU),
    eth_getTransactionByBlockNumberAndIndex: U()
      .parse(of)
      .context(e)
      .use([L, F(t), Q, z], LU),
    eth_getTransactionByHash: U()
      .parse(df)
      .context(e)
      .use([L, F(t), Q, z], BU),
    eth_getTransactionCount: U()
      .parse(gf)
      .context(e)
      .use([L, F(t), Q, z], jU),
    eth_getTransactionReceipt: U()
      .parse(_f)
      .context(e)
      .use([L, F(t), Q, z], FU),
    eth_getUncleByBlockHashAndIndex: U()
      .parse(xf)
      .context(e)
      .use([L, F(t), Q, z], HU),
    eth_getUncleByBlockNumberAndIndex: U()
      .parse(kf)
      .context(e)
      .use([L, F(t), Q, z], VU),
    eth_getUncleCountByBlockHash: U()
      .parse(Mf)
      .context(e)
      .use([L, F(t), Q, z], zU),
    eth_getUncleCountByBlockNumber: U()
      .parse(Ff)
      .context(e)
      .use([L, F(t), Q, z], GU),
    eth_maxPriorityFeePerGas: U()
      .parse(qf)
      .context(e)
      .use([L, F(t), Q, z], qU),
    eth_newBlockFilter: U()
      .parse(Jf)
      .context(e)
      .use([L, F(t), Q, z], WU),
    eth_newFilter: U()
      .parse(rm)
      .context(e)
      .use([L, F(t), Q, z], QU),
    eth_newPendingTransactionFilter: U()
      .parse(am)
      .context(e)
      .use([L, F(t), Q, z], YU),
    eth_protocolVersion: U()
      .parse(ym)
      .context(e)
      .use([L, F(t), Q, z], KU),
    eth_requestAccounts: U()
      .parse(wm)
      .context(e)
      .use([Mt(100), F(t), L, Q, z, H2, Z2], JU),
    eth_sendRawTransaction: U()
      .parse(Cm)
      .context(e)
      .use([L, F(t), Q, z], ZU),
    eth_sendPrivateTransaction: U()
      .parse(Em)
      .context(e)
      .use([L, F(t), Q, z], XU),
    eth_sendTransaction: U()
      .parse(Um)
      .context(e)
      .use([L, F(t), yt, Q, z, Je(t), F2, kr, eU], eL),
    eth_sign: U()
      .parse(Hm)
      .context(e)
      .use([L, F(t), yt, Q, z, Je(t), tU], tL),
    eth_signTypedData: U()
      .parse(Jm)
      .context(e)
      .use([L, F(t), yt, Q, z, Je(t), kr, rU], rL),
    eth_signTypedData_v3: U()
      .parse(rg)
      .context(e)
      .use([L, F(t), yt, Q, z, Je(t), kr, nU], nL),
    eth_signTypedData_v4: U()
      .parse(ag)
      .context(e)
      .use([L, F(t), yt, Q, z, Je(t), kr, sU], sL),
    eth_subscribe: U()
      .parse(pg)
      .context(e)
      .use([L, F(t), Q, z], iL),
    eth_syncing: U()
      .parse(yg)
      .context(e)
      .use([L, F(t), Q, z], oL),
    eth_uninstallFilter: U()
      .parse(wg)
      .context(e)
      .use([L, F(t), Q, z], aL),
    eth_unsubscribe: U()
      .parse(Eg)
      .context(e)
      .use([L, F(t), Q, z], cL),
    net_listening: U()
      .parse(Cg)
      .context(e)
      .use([L, F(t), Q, z], lL),
    net_version: U()
      .parse(Ug)
      .context(e)
      .use([L, F(t), Q, z], uL),
    personal_sign: U()
      .parse(pm)
      .context(e)
      .use([L, F(t), yt, Q, z, Je(t), iU], dL),
    wallet_addEthereumChain: U()
      .parse(Hg)
      .context(e)
      .use([L, F(t), Q, z, kr], pL),
    wallet_selectEthereumProvider: U()
      .parse(Wg)
      .context(e)
      .use([L, F(t), Q, z], hL),
    wallet_switchEthereumChain: U()
      .parse(Zg)
      .context(e)
      .use([L, F(t), Q, z, Je(t), kr], fL),
    wallet_requestPermissions: U()
      .parse(yy)
      .context(e)
      .use([L, F(t), Q, z, X2], yL),
    wallet_getPermissions: U()
      .parse(wy)
      .context(e)
      .use([L, F(t), Q, z], bL),
    web3_clientVersion: U()
      .parse(ay)
      .context(e)
      .use([L, F(t), Q, z], mL),
    web3_sha3: U()
      .parse(py)
      .context(e)
      .use([L, F(t), Q, z], gL),
  }),
  s4 = (e, t = 'BrowserTabRpcRequestSource') => ({
    sol_connect: U()
      .parse(aI)
      .context(e)
      .use([Mt(10), F(t), L, Nt, Kt, z, oU], vL),
    sol_disconnect: U()
      .parse(BP)
      .context(e)
      .use([L, F(t), Kt, z], SL),
    sol_signAllTransactions: U()
      .parse(HP)
      .context(e)
      .use([L, F(t), yt, Kt, z, Je(t), Xn, aU], _L),
    sol_signAndSendTransaction: U()
      .parse(GP)
      .context(e)
      .use([L, F(t), yt, Kt, z, Je(t), Xn, lU], wL),
    sol_signAndSendAllTransactions: U()
      .parse(fI)
      .context(e)
      .use([L, F(t), yt, Kt, z, Je(t), Xn, cU], $L),
    sol_signMessage: U()
      .parse(_I)
      .context(e)
      .use([L, F(t), yt, Kt, z, Je(t), Q2, uU], TL),
    sol_signTransaction: U()
      .parse(JP)
      .context(e)
      .use([L, F(t), yt, Kt, z, Je(t), Xn, dU], EL),
    sol_signIn: U()
      .parse(QP)
      .context(e)
      .use([L, F(t), Nt, Kt, z], IL),
  }),
  i4 = (e, t = 'BrowserTabRpcRequestSource') => ({
    btc_requestAccounts: U()
      .parse(AI)
      .context(e)
      .use([Mt(10), F(t), L, xo, Y2], AL),
    btc_signPSBT: U()
      .parse(kI)
      .context(e)
      .use([L, F(t), xo, J2], DL),
    btc_signMessage: U()
      .parse(OI)
      .context(e)
      .use([L, F(t), xo, K2], PL),
  }),
  o4 = (e) => ({
    phantom_deep_link_browse: U()
      .parse(dA)
      .context(e)
      .use([Mt(10), L, ft], kL),
    phantom_deep_link_tokens: U().parse(hP).context(e).use([L, ft], qL),
    phantom_deep_link_swap: U().parse(fA).context(e).use([L, Nt], CL),
    phantom_deep_link_navigate: U().parse(wP).context(e).use([L, Nt], YL),
    phantom_deep_link_onramp: U().parse(vP).context(e).use([L, Nt], QL),
    phantom_deep_link_fungible: U().parse(yA).context(e).use([L], RL),
    phantom_deep_link_user: U().parse(_A).context(e).use([L, ft], OL),
    phantom_deep_link_social: U().parse(xP).context(e).use([L, Nt], KL),
    phantom_deep_link_notification_center: U().parse(IA).context(e).use([L, Nt], NL),
    phantom_deep_link_onboard: U().parse(gP).context(e).use([L], WL),
    phantom_deep_link_connect: U().parse(PA).context(e).use([L, ft], ML),
    phantom_deep_link_disconnect: U().parse(RA).context(e).use([L, ft], UL),
    phantom_deep_link_signMessage: U().parse(LA).context(e).use([L, ft], LL),
    phantom_deep_link_signIn: U().parse(VA).context(e).use([L, ft], BL),
    phantom_deep_link_signTransaction: U().parse(QA).context(e).use([L, ft], jL),
    phantom_deep_link_signAllTransactions: U().parse(XA).context(e).use([L, ft], FL),
    phantom_deep_link_signAndSendTransaction: U().parse(sP).context(e).use([L, ft], HL),
    phantom_deep_link_signAndSendAllTransactions: U().parse(lP).context(e).use([L, ft], VL),
  }),
  a4 = (e, t = 'BrowserTabRpcRequestSource') => ({
    sui_requestAccounts: U()
      .parse(PD)
      .context(e)
      .use([Mt(100), F(t), L, Nt, ts, z, mU], JL),
    sui_signMessage: U()
      .parse(ND)
      .context(e)
      .use([L, F(t), ts, z, Je(t), gU], XL),
    sui_signTransaction: U()
      .parse(CD)
      .context(e)
      .use([L, F(t), ts, z, Je(t), vu], ZL),
    sui_signAndExecuteTransaction: U()
      .parse(LD)
      .context(e)
      .use([L, F(t), ts, z, Je(t), vu], eB),
  }),
  c4 = (e) => ({
    phantom_getUser: U()
      .parse(DP)
      .context(e)
      .use([Mt(10), L], tB),
    phantom_login: U()
      .parse(RP)
      .context(e)
      .use([Mt(10), L, Nt], rB),
    phantom_logout: U()
      .parse(MP)
      .context(e)
      .use([Mt(10), L], nB),
  });
export {
  j3 as $,
  z0 as A,
  G0 as B,
  O3 as C,
  Ee as D,
  Z0 as E,
  ee as F,
  Ue as G,
  Y0 as H,
  wB as I,
  Po as J,
  vN as K,
  Yr as L,
  K0 as M,
  Ne as N,
  q1 as O,
  J0 as P,
  B$ as Q,
  Cc as R,
  X0 as S,
  Rc as T,
  c3 as U,
  MB as V,
  u3 as W,
  DB as X,
  U3 as Y,
  Ma as Z,
  N3 as _,
  ps as a,
  v3 as a$,
  pM as a0,
  a2 as a1,
  e4 as a2,
  X3 as a3,
  c2 as a4,
  a3 as a5,
  rM as a6,
  oM as a7,
  dM as a8,
  H3 as a9,
  ZB as aA,
  XB as aB,
  e3 as aC,
  nw as aD,
  _e as aE,
  AB as aF,
  ik as aG,
  d3 as aH,
  $3 as aI,
  x3 as aJ,
  E3 as aK,
  D1 as aL,
  kB as aM,
  PB as aN,
  nd as aO,
  EB as aP,
  w3 as aQ,
  b3 as aR,
  IB as aS,
  T3 as aT,
  y3 as aU,
  Nc as aV,
  G1 as aW,
  za as aX,
  M3 as aY,
  aR as aZ,
  Fe as a_,
  V3 as aa,
  hM as ab,
  He as ac,
  vR as ad,
  PO as ae,
  G3 as af,
  Ka as ag,
  _3 as ah,
  h3 as ai,
  id as aj,
  od as ak,
  Cs as al,
  n3 as am,
  W0 as an,
  xB as ao,
  K3 as ap,
  Y3 as aq,
  WB as ar,
  JB as as,
  Bt as at,
  QB as au,
  m3 as av,
  Zu as aw,
  TB as ax,
  Be as ay,
  $d as az,
  ne as b,
  E1 as b0,
  ks as b1,
  S3 as b2,
  Mv as b3,
  L3 as b4,
  I3 as b5,
  CB as b6,
  FB as b7,
  G as b8,
  YB as b9,
  r3 as bA,
  D3 as bB,
  A3 as bC,
  Z_ as bD,
  KB as bE,
  nn as bF,
  RB as bG,
  $B as bH,
  UB as bI,
  LB as bJ,
  BB as bK,
  J3 as bL,
  HB as bM,
  g3 as bN,
  q3 as bO,
  t3 as ba,
  k3 as bb,
  p3 as bc,
  uR as bd,
  C3 as be,
  jB as bf,
  o3 as bg,
  _$ as bh,
  l3 as bi,
  n4 as bj,
  s4 as bk,
  i4 as bl,
  a4 as bm,
  o4 as bn,
  c4 as bo,
  r4 as bp,
  t4 as bq,
  nT as br,
  W3 as bs,
  Q3 as bt,
  F3 as bu,
  l2 as bv,
  Z3 as bw,
  OB as bx,
  NB as by,
  B3 as bz,
  R3 as c,
  te as d,
  Ce as e,
  ae as f,
  P3 as g,
  ad as h,
  f3 as i,
  zB as j,
  GB as k,
  VB as l,
  Is as m,
  Rn as n,
  se as o,
  Oa as p,
  Os as q,
  Ua as r,
  ke as s,
  Ku as t,
  Y as u,
  Na as v,
  Ra as w,
  q0 as x,
  qB as y,
  BM as z,
};
