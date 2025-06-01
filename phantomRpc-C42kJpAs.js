var y2 = Object.defineProperty;
var el = (e) => {
  throw TypeError(e);
};
var m2 = (e, t, r) =>
  t in e ? y2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r);
var F = (e, t, r) => m2(e, typeof t != 'symbol' ? t + '' : t, r),
  yi = (e, t, r) => t.has(e) || el('Cannot ' + r);
var v = (e, t, r) => (yi(e, t, 'read from private field'), r ? r.call(e) : t.get(e)),
  Y = (e, t, r) =>
    t.has(e)
      ? el('Cannot add the same private member more than once')
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, r),
  q = (e, t, r, n) => (yi(e, t, 'write to private field'), n ? n.call(e, r) : t.set(e, r), r),
  ie = (e, t, r) => (yi(e, t, 'access private method'), r);
var Rs = (e, t, r, n) => ({
  set _(s) {
    q(e, t, s, r);
  },
  get _() {
    return v(e, t, n);
  },
});
import { z as a, d as Hn } from './phantomUiDeps-B7Pij32n.js';
import { R as cs, r as ye } from './react-6iN9_IA6.js';
import { B as rn } from './metaplexMplTokenMetadata-D0B0pvkO.js';
import {
  B as Ce,
  h as gt,
  S as qc,
  g as xa,
  N as Bf,
  b as g2,
  t as v2,
  a as w2,
  J as vt,
  a4 as S2,
  e as E2,
  a2 as _2,
  ae as Be,
  af as Vc,
  ag as Gc,
  ah as $2,
  ai as Lf,
  aj as A2,
  ak as jt,
  a6 as mi,
  al as nn,
  am as I2,
  an as Mf,
  ao as T2,
  ap as Na,
  aq as P2,
} from './metaplex-81r3lICz.js';
import {
  b as Qe,
  f as C2,
  h as Xt,
  L as Mn,
  e as zc,
  p as tl,
  d as k2,
  a as D2,
  q as Nf,
  V as O2,
  A as B2,
} from './chainSolana-DAiUp22G.js';
import {
  B as Go,
  t as Rf,
  U as L2,
  g as xs,
  p as Uf,
  k as ps,
  D as Ff,
  c as ls,
  H as pa,
  d as bs,
  m as M2,
  a as ns,
  e as jf,
  S as N2,
  b as gi,
  f as qt,
  P as R2,
  h as U2,
  s as rl,
  i as F2,
  T as nl,
  n as Ur,
  j as Hf,
  l as Hr,
} from './chainEthereum-DlaaxYpw.js';
import { c as qn, g as Ht } from './lodash-aFjP5OGs.js';
import { b as ba, s as Dt, e as qf } from './chainBitcoin-BZQ6OAUy.js';
import {
  _ as j2,
  b as H2,
  c as q2,
  i as V2,
  d as G2,
  k as z2,
  j as ys,
  V as sl,
  e as K2,
  f as W2,
  g as vi,
} from './phantomUi-BUKCyHFp.js';
import { r as Q2 } from './metaplexUmi-DveWNDhv.js';
import {
  d as ea,
  a as pn,
  i as Y2,
  b as Z2,
  c as J2,
  e as Vf,
  f as Gf,
  g as zf,
  s as Kf,
  h as Wf,
  j as X2,
  k as eg,
  l as tg,
} from './analytics-Bl1TDnTV.js';
function zo(e) {
  if (!Number.isSafeInteger(e) || e < 0) throw new Error(`Wrong positive integer: ${e}`);
}
function rg(e) {
  if (typeof e != 'boolean') throw new Error(`Expected boolean, not ${e}`);
}
function Qf(e, ...t) {
  if (!(e instanceof Uint8Array)) throw new TypeError('Expected Uint8Array');
  if (t.length > 0 && !t.includes(e.length))
    throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`);
}
function ng(e) {
  if (typeof e != 'function' || typeof e.create != 'function')
    throw new Error('Hash should be wrapped by utils.wrapConstructor');
  zo(e.outputLen), zo(e.blockLen);
}
function sg(e, t = !0) {
  if (e.destroyed) throw new Error('Hash instance has been destroyed');
  if (t && e.finished) throw new Error('Hash#digest() has already been called');
}
function ag(e, t) {
  Qf(e);
  const r = t.outputLen;
  if (e.length < r) throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
const qr = { number: zo, bool: rg, bytes: Qf, hash: ng, exists: sg, output: ag };
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const wi = (e) =>
    new DataView(e.buffer, e.byteOffset, e.byteLength),
  ig = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!ig) throw new Error('Non little-endian hardware is not supported');
Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
function og(e) {
  if (typeof e != 'string') throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);
  return new TextEncoder().encode(e);
}
function Kc(e) {
  if ((typeof e == 'string' && (e = og(e)), !(e instanceof Uint8Array)))
    throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);
  return e;
}
let Yf = class {
  clone() {
    return this._cloneInto();
  }
};
function Ra(e) {
  const t = (n) => e().update(Kc(n)).digest(),
    r = e();
  return (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = () => e()), t;
}
function cg(e, t, r, n) {
  if (typeof e.setBigUint64 == 'function') return e.setBigUint64(t, r, n);
  const s = BigInt(32),
    i = BigInt(4294967295),
    o = Number((r >> s) & i),
    c = Number(r & i),
    d = n ? 4 : 0,
    l = n ? 0 : 4;
  e.setUint32(t + d, o, n), e.setUint32(t + l, c, n);
}
let lg = class extends Yf {
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
      (this.view = wi(this.buffer));
  }
  update(t) {
    qr.exists(this);
    const { view: r, buffer: n, blockLen: s } = this;
    t = Kc(t);
    const i = t.length;
    for (let o = 0; o < i; ) {
      const c = Math.min(s - this.pos, i - o);
      if (c === s) {
        const d = wi(t);
        for (; s <= i - o; o += s) this.process(d, o);
        continue;
      }
      n.set(t.subarray(o, o + c), this.pos),
        (this.pos += c),
        (o += c),
        this.pos === s && (this.process(r, 0), (this.pos = 0));
    }
    return (this.length += t.length), this.roundClean(), this;
  }
  digestInto(t) {
    qr.exists(this), qr.output(t, this), (this.finished = !0);
    const { buffer: r, view: n, blockLen: s, isLE: i } = this;
    let { pos: o } = this;
    (r[o++] = 128),
      this.buffer.subarray(o).fill(0),
      this.padOffset > s - o && (this.process(n, 0), (o = 0));
    for (let u = o; u < s; u++) r[u] = 0;
    cg(n, s - 8, BigInt(this.length * 8), i), this.process(n, 0);
    const c = wi(t),
      d = this.outputLen;
    if (d % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
    const l = d / 4,
      f = this.get();
    if (l > f.length) throw new Error('_sha2: outputLen bigger than state');
    for (let u = 0; u < l; u++) c.setUint32(4 * u, f[u], i);
  }
  digest() {
    const { buffer: t, outputLen: r } = this;
    this.digestInto(t);
    const n = t.slice(0, r);
    return this.destroy(), n;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: r, buffer: n, length: s, finished: i, destroyed: o, pos: c } = this;
    return (
      (t.length = s), (t.pos = c), (t.finished = i), (t.destroyed = o), s % r && t.buffer.set(n), t
    );
  }
};
const Us = BigInt(2 ** 32 - 1),
  Ko = BigInt(32);
function Zf(e, t = !1) {
  return t
    ? { h: Number(e & Us), l: Number((e >> Ko) & Us) }
    : { h: Number((e >> Ko) & Us) | 0, l: Number(e & Us) | 0 };
}
function ug(e, t = !1) {
  let r = new Uint32Array(e.length),
    n = new Uint32Array(e.length);
  for (let s = 0; s < e.length; s++) {
    const { h: i, l: o } = Zf(e[s], t);
    [r[s], n[s]] = [i, o];
  }
  return [r, n];
}
const fg = (e, t) => (BigInt(e >>> 0) << Ko) | BigInt(t >>> 0),
  dg = (e, t, r) => e >>> r,
  hg = (e, t, r) => (e << (32 - r)) | (t >>> r),
  xg = (e, t, r) => (e >>> r) | (t << (32 - r)),
  pg = (e, t, r) => (e << (32 - r)) | (t >>> r),
  bg = (e, t, r) => (e << (64 - r)) | (t >>> (r - 32)),
  yg = (e, t, r) => (e >>> (r - 32)) | (t << (64 - r)),
  mg = (e, t) => t,
  gg = (e, t) => e,
  vg = (e, t, r) => (e << r) | (t >>> (32 - r)),
  wg = (e, t, r) => (t << r) | (e >>> (32 - r)),
  Sg = (e, t, r) => (t << (r - 32)) | (e >>> (64 - r)),
  Eg = (e, t, r) => (e << (r - 32)) | (t >>> (64 - r));
function _g(e, t, r, n) {
  const s = (t >>> 0) + (n >>> 0);
  return { h: (e + r + ((s / 2 ** 32) | 0)) | 0, l: s | 0 };
}
const $g = (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0),
  Ag = (e, t, r, n) => (t + r + n + ((e / 2 ** 32) | 0)) | 0,
  Ig = (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0),
  Tg = (e, t, r, n, s) => (t + r + n + s + ((e / 2 ** 32) | 0)) | 0,
  Pg = (e, t, r, n, s) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (s >>> 0),
  Cg = (e, t, r, n, s, i) => (t + r + n + s + i + ((e / 2 ** 32) | 0)) | 0,
  he = {
    fromBig: Zf,
    split: ug,
    toBig: fg,
    shrSH: dg,
    shrSL: hg,
    rotrSH: xg,
    rotrSL: pg,
    rotrBH: bg,
    rotrBL: yg,
    rotr32H: mg,
    rotr32L: gg,
    rotlSH: vg,
    rotlSL: wg,
    rotlBH: Sg,
    rotlBL: Eg,
    add: _g,
    add3L: $g,
    add3H: Ag,
    add4L: Ig,
    add4H: Tg,
    add5H: Cg,
    add5L: Pg,
  },
  [kg, Dg] = he.split(
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
  ar = new Uint32Array(80),
  ir = new Uint32Array(80);
let Ua = class extends lg {
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
        Ch: i,
        Cl: o,
        Dh: c,
        Dl: d,
        Eh: l,
        El: f,
        Fh: u,
        Fl: h,
        Gh: b,
        Gl: y,
        Hh: p,
        Hl: x,
      } = this;
      return [t, r, n, s, i, o, c, d, l, f, u, h, b, y, p, x];
    }
    set(t, r, n, s, i, o, c, d, l, f, u, h, b, y, p, x) {
      (this.Ah = t | 0),
        (this.Al = r | 0),
        (this.Bh = n | 0),
        (this.Bl = s | 0),
        (this.Ch = i | 0),
        (this.Cl = o | 0),
        (this.Dh = c | 0),
        (this.Dl = d | 0),
        (this.Eh = l | 0),
        (this.El = f | 0),
        (this.Fh = u | 0),
        (this.Fl = h | 0),
        (this.Gh = b | 0),
        (this.Gl = y | 0),
        (this.Hh = p | 0),
        (this.Hl = x | 0);
    }
    process(t, r) {
      for (let m = 0; m < 16; m++, r += 4)
        (ar[m] = t.getUint32(r)), (ir[m] = t.getUint32((r += 4)));
      for (let m = 16; m < 80; m++) {
        const I = ar[m - 15] | 0,
          A = ir[m - 15] | 0,
          k = he.rotrSH(I, A, 1) ^ he.rotrSH(I, A, 8) ^ he.shrSH(I, A, 7),
          P = he.rotrSL(I, A, 1) ^ he.rotrSL(I, A, 8) ^ he.shrSL(I, A, 7),
          w = ar[m - 2] | 0,
          E = ir[m - 2] | 0,
          U = he.rotrSH(w, E, 19) ^ he.rotrBH(w, E, 61) ^ he.shrSH(w, E, 6),
          j = he.rotrSL(w, E, 19) ^ he.rotrBL(w, E, 61) ^ he.shrSL(w, E, 6),
          z = he.add4L(P, j, ir[m - 7], ir[m - 16]),
          V = he.add4H(z, k, U, ar[m - 7], ar[m - 16]);
        (ar[m] = V | 0), (ir[m] = z | 0);
      }
      let {
        Ah: n,
        Al: s,
        Bh: i,
        Bl: o,
        Ch: c,
        Cl: d,
        Dh: l,
        Dl: f,
        Eh: u,
        El: h,
        Fh: b,
        Fl: y,
        Gh: p,
        Gl: x,
        Hh: S,
        Hl: _,
      } = this;
      for (let m = 0; m < 80; m++) {
        const I = he.rotrSH(u, h, 14) ^ he.rotrSH(u, h, 18) ^ he.rotrBH(u, h, 41),
          A = he.rotrSL(u, h, 14) ^ he.rotrSL(u, h, 18) ^ he.rotrBL(u, h, 41),
          k = (u & b) ^ (~u & p),
          P = (h & y) ^ (~h & x),
          w = he.add5L(_, A, P, Dg[m], ir[m]),
          E = he.add5H(w, S, I, k, kg[m], ar[m]),
          U = w | 0,
          j = he.rotrSH(n, s, 28) ^ he.rotrBH(n, s, 34) ^ he.rotrBH(n, s, 39),
          z = he.rotrSL(n, s, 28) ^ he.rotrBL(n, s, 34) ^ he.rotrBL(n, s, 39),
          V = (n & i) ^ (n & c) ^ (i & c),
          J = (s & o) ^ (s & d) ^ (o & d);
        (S = p | 0),
          (_ = x | 0),
          (p = b | 0),
          (x = y | 0),
          (b = u | 0),
          (y = h | 0),
          ({ h: u, l: h } = he.add(l | 0, f | 0, E | 0, U | 0)),
          (l = c | 0),
          (f = d | 0),
          (c = i | 0),
          (d = o | 0),
          (i = n | 0),
          (o = s | 0);
        const re = he.add3L(U, z, J);
        (n = he.add3H(re, E, j, V)), (s = re | 0);
      }
      ({ h: n, l: s } = he.add(this.Ah | 0, this.Al | 0, n | 0, s | 0)),
        ({ h: i, l: o } = he.add(this.Bh | 0, this.Bl | 0, i | 0, o | 0)),
        ({ h: c, l: d } = he.add(this.Ch | 0, this.Cl | 0, c | 0, d | 0)),
        ({ h: l, l: f } = he.add(this.Dh | 0, this.Dl | 0, l | 0, f | 0)),
        ({ h: u, l: h } = he.add(this.Eh | 0, this.El | 0, u | 0, h | 0)),
        ({ h: b, l: y } = he.add(this.Fh | 0, this.Fl | 0, b | 0, y | 0)),
        ({ h: p, l: x } = he.add(this.Gh | 0, this.Gl | 0, p | 0, x | 0)),
        ({ h: S, l: _ } = he.add(this.Hh | 0, this.Hl | 0, S | 0, _ | 0)),
        this.set(n, s, i, o, c, d, l, f, u, h, b, y, p, x, S, _);
    }
    roundClean() {
      ar.fill(0), ir.fill(0);
    }
    destroy() {
      this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  },
  Og = class extends Ua {
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
  Bg = class extends Ua {
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
  Lg = class extends Ua {
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
const Is = Ra(() => new Ua());
Ra(() => new Og());
Ra(() => new Bg());
Ra(() => new Lg());
const RO = (e, t) =>
  Array.apply(0, new Array(Math.ceil(e.length / t))).map((r, n) => e.slice(n * t, (n + 1) * t));
function UO(e) {
  return e != null;
}
const Mg = (e, t) => e + t,
  FO = (e) => e.reduce(Mg, 0),
  Ng = (e) => !!e;
function jO(e) {
  return a
    .any()
    .array()
    .transform((t) =>
      t
        .map((r) => {
          const n = e.safeParse(r);
          return n.success ? n.data : void 0;
        })
        .filter(Ng)
    )
    .catch([]);
}
const Rg = new Error('Unsupported path.'),
  Vn = (e, t = Rg) => {
    throw t;
  };
function HO(e, t) {
  return e in t;
}
function Ug(e) {
  return new Promise((t) => setTimeout(t, e));
}
function Fg(e, t) {
  const r = typeof t.interval == 'function' ? t.interval : () => t.interval;
  if (typeof e != 'function') throw new Error('Invalid arguments for retryInternal');
  let n = 1;
  async function s() {
    try {
      return await e();
    } catch (i) {
      if (n++ < t.times && t.errorFilter(i)) return await Ug(r(n - 1)), s();
      throw i;
    }
  }
  return s();
}
async function qO(e, t, r = 3, n = 2e3, s) {
  return Fg(e, { times: r, interval: s ? () => n : (i) => n * Math.pow(2, i - 1), errorFilter: t });
}
const VO = async (e, t) =>
    new Promise((r, n) => {
      const s = setTimeout(() => {
        n('Promise timed out');
      }, t);
      e.then((i) => {
        r(i), clearTimeout(s);
      }).catch(n);
    }),
  GO = (e) => e.replace(/^(^[\w-_]*:\/\/)?(?:www\.)?/i, '').split('/')[0],
  jg = {
    days: (e) => e * 864e5,
    hours: (e) => e * 36e5,
    minutes: (e) => e * 6e4,
    seconds: (e) => e * 1e3,
    milliseconds: (e) => e,
    microseconds: (e) => e / 1e3,
    nanoseconds: (e) => e / 1e6,
  };
function Jf(e) {
  let t = 0;
  for (const [r, n] of Object.entries(e)) {
    const s = jg[r];
    t += s(n);
  }
  return t;
}
var Xf = { exports: {} };
(function (e, t) {
  (function (r, n) {
    e.exports = n();
  })(qn, function () {
    var r,
      n,
      s = 1e3,
      i = 6e4,
      o = 36e5,
      c = 864e5,
      d = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      l = 31536e6,
      f = 2628e6,
      u =
        /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,
      h = {
        years: l,
        months: f,
        days: c,
        hours: o,
        minutes: i,
        seconds: s,
        milliseconds: 1,
        weeks: 6048e5,
      },
      b = function (k) {
        return k instanceof I;
      },
      y = function (k, P, w) {
        return new I(k, w, P.$l);
      },
      p = function (k) {
        return n.p(k) + 's';
      },
      x = function (k) {
        return k < 0;
      },
      S = function (k) {
        return x(k) ? Math.ceil(k) : Math.floor(k);
      },
      _ = function (k) {
        return Math.abs(k);
      },
      m = function (k, P) {
        return k
          ? x(k)
            ? { negative: !0, format: '' + _(k) + P }
            : { negative: !1, format: '' + k + P }
          : { negative: !1, format: '' };
      },
      I = (function () {
        function k(w, E, U) {
          var j = this;
          if (
            ((this.$d = {}),
            (this.$l = U),
            w === void 0 && ((this.$ms = 0), this.parseFromMilliseconds()),
            E)
          )
            return y(w * h[p(E)], this);
          if (typeof w == 'number') return (this.$ms = w), this.parseFromMilliseconds(), this;
          if (typeof w == 'object')
            return (
              Object.keys(w).forEach(function (J) {
                j.$d[p(J)] = w[J];
              }),
              this.calMilliseconds(),
              this
            );
          if (typeof w == 'string') {
            var z = w.match(u);
            if (z) {
              var V = z.slice(2).map(function (J) {
                return J != null ? Number(J) : 0;
              });
              return (
                (this.$d.years = V[0]),
                (this.$d.months = V[1]),
                (this.$d.weeks = V[2]),
                (this.$d.days = V[3]),
                (this.$d.hours = V[4]),
                (this.$d.minutes = V[5]),
                (this.$d.seconds = V[6]),
                this.calMilliseconds(),
                this
              );
            }
          }
          return this;
        }
        var P = k.prototype;
        return (
          (P.calMilliseconds = function () {
            var w = this;
            this.$ms = Object.keys(this.$d).reduce(function (E, U) {
              return E + (w.$d[U] || 0) * h[U];
            }, 0);
          }),
          (P.parseFromMilliseconds = function () {
            var w = this.$ms;
            (this.$d.years = S(w / l)),
              (w %= l),
              (this.$d.months = S(w / f)),
              (w %= f),
              (this.$d.days = S(w / c)),
              (w %= c),
              (this.$d.hours = S(w / o)),
              (w %= o),
              (this.$d.minutes = S(w / i)),
              (w %= i),
              (this.$d.seconds = S(w / s)),
              (w %= s),
              (this.$d.milliseconds = w);
          }),
          (P.toISOString = function () {
            var w = m(this.$d.years, 'Y'),
              E = m(this.$d.months, 'M'),
              U = +this.$d.days || 0;
            this.$d.weeks && (U += 7 * this.$d.weeks);
            var j = m(U, 'D'),
              z = m(this.$d.hours, 'H'),
              V = m(this.$d.minutes, 'M'),
              J = this.$d.seconds || 0;
            this.$d.milliseconds &&
              ((J += this.$d.milliseconds / 1e3), (J = Math.round(1e3 * J) / 1e3));
            var re = m(J, 'S'),
              de =
                w.negative || E.negative || j.negative || z.negative || V.negative || re.negative,
              we = z.format || V.format || re.format ? 'T' : '',
              Oe =
                (de ? '-' : '') +
                'P' +
                w.format +
                E.format +
                j.format +
                we +
                z.format +
                V.format +
                re.format;
            return Oe === 'P' || Oe === '-P' ? 'P0D' : Oe;
          }),
          (P.toJSON = function () {
            return this.toISOString();
          }),
          (P.format = function (w) {
            var E = w || 'YYYY-MM-DDTHH:mm:ss',
              U = {
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
            return E.replace(d, function (j, z) {
              return z || String(U[j]);
            });
          }),
          (P.as = function (w) {
            return this.$ms / h[p(w)];
          }),
          (P.get = function (w) {
            var E = this.$ms,
              U = p(w);
            return (
              U === 'milliseconds' ? (E %= 1e3) : (E = U === 'weeks' ? S(E / h[U]) : this.$d[U]),
              E || 0
            );
          }),
          (P.add = function (w, E, U) {
            var j;
            return (
              (j = E ? w * h[p(E)] : b(w) ? w.$ms : y(w, this).$ms),
              y(this.$ms + j * (U ? -1 : 1), this)
            );
          }),
          (P.subtract = function (w, E) {
            return this.add(w, E, !0);
          }),
          (P.locale = function (w) {
            var E = this.clone();
            return (E.$l = w), E;
          }),
          (P.clone = function () {
            return y(this.$ms, this);
          }),
          (P.humanize = function (w) {
            return r().add(this.$ms, 'ms').locale(this.$l).fromNow(!w);
          }),
          (P.valueOf = function () {
            return this.asMilliseconds();
          }),
          (P.milliseconds = function () {
            return this.get('milliseconds');
          }),
          (P.asMilliseconds = function () {
            return this.as('milliseconds');
          }),
          (P.seconds = function () {
            return this.get('seconds');
          }),
          (P.asSeconds = function () {
            return this.as('seconds');
          }),
          (P.minutes = function () {
            return this.get('minutes');
          }),
          (P.asMinutes = function () {
            return this.as('minutes');
          }),
          (P.hours = function () {
            return this.get('hours');
          }),
          (P.asHours = function () {
            return this.as('hours');
          }),
          (P.days = function () {
            return this.get('days');
          }),
          (P.asDays = function () {
            return this.as('days');
          }),
          (P.weeks = function () {
            return this.get('weeks');
          }),
          (P.asWeeks = function () {
            return this.as('weeks');
          }),
          (P.months = function () {
            return this.get('months');
          }),
          (P.asMonths = function () {
            return this.as('months');
          }),
          (P.years = function () {
            return this.get('years');
          }),
          (P.asYears = function () {
            return this.as('years');
          }),
          k
        );
      })(),
      A = function (k, P, w) {
        return k
          .add(P.years() * w, 'y')
          .add(P.months() * w, 'M')
          .add(P.days() * w, 'd')
          .add(P.hours() * w, 'h')
          .add(P.minutes() * w, 'm')
          .add(P.seconds() * w, 's')
          .add(P.milliseconds() * w, 'ms');
      };
    return function (k, P, w) {
      (r = w),
        (n = w().$utils()),
        (w.duration = function (j, z) {
          var V = w.locale();
          return y(j, { $l: V }, z);
        }),
        (w.isDuration = b);
      var E = P.prototype.add,
        U = P.prototype.subtract;
      (P.prototype.add = function (j, z) {
        return b(j) ? A(this, j, 1) : E.bind(this)(j, z);
      }),
        (P.prototype.subtract = function (j, z) {
          return b(j) ? A(this, j, -1) : U.bind(this)(j, z);
        });
    };
  });
})(Xf);
var Hg = Xf.exports;
const ed = Ht(Hg);
Hn.extend(ed);
var td = { exports: {} };
(function (e, t) {
  (function (r, n) {
    e.exports = n();
  })(qn, function () {
    return function (r, n, s) {
      n.prototype.isToday = function () {
        var i = 'YYYY-MM-DD',
          o = s();
        return this.format(i) === o.format(i);
      };
    };
  });
})(td);
var qg = td.exports;
const Vg = Ht(qg);
var rd = { exports: {} };
(function (e, t) {
  (function (r, n) {
    e.exports = n();
  })(qn, function () {
    return function (r, n, s) {
      n.prototype.isYesterday = function () {
        var i = 'YYYY-MM-DD',
          o = s().subtract(1, 'day');
        return this.format(i) === o.format(i);
      };
    };
  });
})(rd);
var Gg = rd.exports;
const zg = Ht(Gg);
Hn.extend(Vg);
Hn.extend(zg);
var nd = { exports: {} };
(function (e, t) {
  (function (r, n) {
    e.exports = n();
  })(qn, function () {
    return function (r, n, s) {
      r = r || {};
      var i = n.prototype,
        o = {
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
      function c(l, f, u, h) {
        return i.fromToBase(l, f, u, h);
      }
      (s.en.relativeTime = o),
        (i.fromToBase = function (l, f, u, h, b) {
          for (
            var y,
              p,
              x,
              S = u.$locale().relativeTime || o,
              _ = r.thresholds || [
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
              m = _.length,
              I = 0;
            I < m;
            I += 1
          ) {
            var A = _[I];
            A.d && (y = h ? s(l).diff(u, A.d, !0) : u.diff(l, A.d, !0));
            var k = (r.rounding || Math.round)(Math.abs(y));
            if (((x = y > 0), k <= A.r || !A.r)) {
              k <= 1 && I > 0 && (A = _[I - 1]);
              var P = S[A.l];
              b && (k = b('' + k)),
                (p = typeof P == 'string' ? P.replace('%d', k) : P(k, f, A.l, x));
              break;
            }
          }
          if (f) return p;
          var w = x ? S.future : S.past;
          return typeof w == 'function' ? w(p) : w.replace('%s', p);
        }),
        (i.to = function (l, f) {
          return c(l, f, this, !0);
        }),
        (i.from = function (l, f) {
          return c(l, f, this);
        });
      var d = function (l) {
        return l.$u ? s.utc() : s();
      };
      (i.toNow = function (l) {
        return this.to(d(this), l);
      }),
        (i.fromNow = function (l) {
          return this.from(d(this), l);
        });
    };
  });
})(nd);
var Kg = nd.exports;
const Wg = Ht(Kg);
var sd = { exports: {} };
(function (e, t) {
  (function (r, n) {
    e.exports = n();
  })(qn, function () {
    var r = 'minute',
      n = /[+-]\d\d(?::?\d\d)?/g,
      s = /([+-]|\d\d)/g;
    return function (i, o, c) {
      var d = o.prototype;
      (c.utc = function (p) {
        var x = { date: p, utc: !0, args: arguments };
        return new o(x);
      }),
        (d.utc = function (p) {
          var x = c(this.toDate(), { locale: this.$L, utc: !0 });
          return p ? x.add(this.utcOffset(), r) : x;
        }),
        (d.local = function () {
          return c(this.toDate(), { locale: this.$L, utc: !1 });
        });
      var l = d.parse;
      d.parse = function (p) {
        p.utc && (this.$u = !0),
          this.$utils().u(p.$offset) || (this.$offset = p.$offset),
          l.call(this, p);
      };
      var f = d.init;
      d.init = function () {
        if (this.$u) {
          var p = this.$d;
          (this.$y = p.getUTCFullYear()),
            (this.$M = p.getUTCMonth()),
            (this.$D = p.getUTCDate()),
            (this.$W = p.getUTCDay()),
            (this.$H = p.getUTCHours()),
            (this.$m = p.getUTCMinutes()),
            (this.$s = p.getUTCSeconds()),
            (this.$ms = p.getUTCMilliseconds());
        } else f.call(this);
      };
      var u = d.utcOffset;
      d.utcOffset = function (p, x) {
        var S = this.$utils().u;
        if (S(p)) return this.$u ? 0 : S(this.$offset) ? u.call(this) : this.$offset;
        if (
          typeof p == 'string' &&
          ((p = (function (A) {
            A === void 0 && (A = '');
            var k = A.match(n);
            if (!k) return null;
            var P = ('' + k[0]).match(s) || ['-', 0, 0],
              w = P[0],
              E = 60 * +P[1] + +P[2];
            return E === 0 ? 0 : w === '+' ? E : -E;
          })(p)),
          p === null)
        )
          return this;
        var _ = Math.abs(p) <= 16 ? 60 * p : p,
          m = this;
        if (x) return (m.$offset = _), (m.$u = p === 0), m;
        if (p !== 0) {
          var I = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          ((m = this.local().add(_ + I, r)).$offset = _), (m.$x.$localOffset = I);
        } else m = this.utc();
        return m;
      };
      var h = d.format;
      (d.format = function (p) {
        var x = p || (this.$u ? 'YYYY-MM-DDTHH:mm:ss[Z]' : '');
        return h.call(this, x);
      }),
        (d.valueOf = function () {
          var p = this.$utils().u(this.$offset)
            ? 0
            : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
          return this.$d.valueOf() - 6e4 * p;
        }),
        (d.isUTC = function () {
          return !!this.$u;
        }),
        (d.toISOString = function () {
          return this.toDate().toISOString();
        }),
        (d.toString = function () {
          return this.toDate().toUTCString();
        });
      var b = d.toDate;
      d.toDate = function (p) {
        return p === 's' && this.$offset
          ? c(this.format('YYYY-MM-DD HH:mm:ss:SSS')).toDate()
          : b.call(this);
      };
      var y = d.diff;
      d.diff = function (p, x, S) {
        if (p && this.$u === p.$u) return y.call(this, p, x, S);
        var _ = this.local(),
          m = c(p).local();
        return y.call(_, m, x, S);
      };
    };
  });
})(sd);
var Qg = sd.exports;
const Yg = Ht(Qg);
Hn.extend(Wg);
Hn.extend(ed);
Hn.extend(Yg);
new Date().getTimezoneOffset() * 6e4;
Jf({ seconds: 10 });
const zO = Jf({ seconds: 5 }),
  KO = (e) => {
    if (e)
      try {
        return new URL(e).origin;
      } catch {
        return;
      }
  },
  WO = (e, t) => {
    const r = parseInt(e.slice(1, 3), 16),
      n = parseInt(e.slice(3, 5), 16),
      s = parseInt(e.slice(5, 7), 16);
    return typeof t == 'number'
      ? 'rgba(' + r + ', ' + n + ', ' + s + ', ' + t + ')'
      : 'rgb(' + r + ', ' + n + ', ' + s + ')';
  };
function QO(e, t) {
  const r = new WeakMap();
  return () => {
    const n = e();
    if (n === void 0) return;
    let s = r.get(n);
    return s === void 0 && ((s = t(n)), r.set(n, s)), s;
  };
}
rn.config({ EXPONENTIAL_AT: 1e3, DECIMAL_PLACES: 78 });
var Zg = H2,
  Jg = q2,
  Xg = j2,
  e4 = V2,
  t4 = G2,
  r4 = z2,
  n4 = Object.prototype,
  s4 = n4.hasOwnProperty,
  a4 = Xg(function (e, t) {
    if (t4(t) || e4(t)) {
      Jg(t, r4(t), e);
      return;
    }
    for (var r in t) s4.call(t, r) && Zg(e, r, t[r]);
  }),
  i4 = a4;
const o4 = Ht(i4);
var ad = { exports: {} };
/*! @preserve
 * numeral.js
 * version : 2.0.6
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */ (function (e) {
  (function (t, r) {
    e.exports ? (e.exports = r()) : (t.numeral = r());
  })(qn, function () {
    var t,
      r,
      n = '2.0.6',
      s = {},
      i = {},
      o = {
        currentLocale: 'en',
        zeroFormat: null,
        nullFormat: null,
        defaultFormat: '0,0',
        scalePercentBy100: !0,
      },
      c = {
        currentLocale: o.currentLocale,
        zeroFormat: o.zeroFormat,
        nullFormat: o.nullFormat,
        defaultFormat: o.defaultFormat,
        scalePercentBy100: o.scalePercentBy100,
      };
    function d(l, f) {
      (this._input = l), (this._value = f);
    }
    return (
      (t = function (l) {
        var f, u, h, b;
        if (t.isNumeral(l)) f = l.value();
        else if (l === 0 || typeof l > 'u') f = 0;
        else if (l === null || r.isNaN(l)) f = null;
        else if (typeof l == 'string')
          if (c.zeroFormat && l === c.zeroFormat) f = 0;
          else if ((c.nullFormat && l === c.nullFormat) || !l.replace(/[^0-9]+/g, '').length)
            f = null;
          else {
            for (u in s)
              if (
                ((b =
                  typeof s[u].regexps.unformat == 'function'
                    ? s[u].regexps.unformat()
                    : s[u].regexps.unformat),
                b && l.match(b))
              ) {
                h = s[u].unformat;
                break;
              }
            (h = h || t._.stringToNumber), (f = h(l));
          }
        else f = Number(l) || null;
        return new d(l, f);
      }),
      (t.version = n),
      (t.isNumeral = function (l) {
        return l instanceof d;
      }),
      (t._ = r =
        {
          numberToFormat: function (l, f, u) {
            var h = i[t.options.currentLocale],
              b = !1,
              y = !1,
              p = 0,
              x = '',
              S = 1e12,
              _ = 1e9,
              m = 1e6,
              I = 1e3,
              A = '',
              k = !1,
              P,
              w,
              E,
              U,
              j,
              z,
              V;
            if (
              ((l = l || 0),
              (w = Math.abs(l)),
              t._.includes(f, '(')
                ? ((b = !0), (f = f.replace(/[\(|\)]/g, '')))
                : (t._.includes(f, '+') || t._.includes(f, '-')) &&
                  ((j = t._.includes(f, '+') ? f.indexOf('+') : l < 0 ? f.indexOf('-') : -1),
                  (f = f.replace(/[\+|\-]/g, ''))),
              t._.includes(f, 'a') &&
                ((P = f.match(/a(k|m|b|t)?/)),
                (P = P ? P[1] : !1),
                t._.includes(f, ' a') && (x = ' '),
                (f = f.replace(new RegExp(x + 'a[kmbt]?'), '')),
                (w >= S && !P) || P === 't'
                  ? ((x += h.abbreviations.trillion), (l = l / S))
                  : (w < S && w >= _ && !P) || P === 'b'
                    ? ((x += h.abbreviations.billion), (l = l / _))
                    : (w < _ && w >= m && !P) || P === 'm'
                      ? ((x += h.abbreviations.million), (l = l / m))
                      : ((w < m && w >= I && !P) || P === 'k') &&
                        ((x += h.abbreviations.thousand), (l = l / I))),
              t._.includes(f, '[.]') && ((y = !0), (f = f.replace('[.]', '.'))),
              (E = l.toString().split('.')[0]),
              (U = f.split('.')[1]),
              (z = f.indexOf(',')),
              (p = (f.split('.')[0].split(',')[0].match(/0/g) || []).length),
              U
                ? (t._.includes(U, '[')
                    ? ((U = U.replace(']', '')),
                      (U = U.split('[')),
                      (A = t._.toFixed(l, U[0].length + U[1].length, u, U[1].length)))
                    : (A = t._.toFixed(l, U.length, u)),
                  (E = A.split('.')[0]),
                  t._.includes(A, '.') ? (A = h.delimiters.decimal + A.split('.')[1]) : (A = ''),
                  y && Number(A.slice(1)) === 0 && (A = ''))
                : (E = t._.toFixed(l, 0, u)),
              x && !P && Number(E) >= 1e3 && x !== h.abbreviations.trillion)
            )
              switch (((E = String(Number(E) / 1e3)), x)) {
                case h.abbreviations.thousand:
                  x = h.abbreviations.million;
                  break;
                case h.abbreviations.million:
                  x = h.abbreviations.billion;
                  break;
                case h.abbreviations.billion:
                  x = h.abbreviations.trillion;
                  break;
              }
            if ((t._.includes(E, '-') && ((E = E.slice(1)), (k = !0)), E.length < p))
              for (var J = p - E.length; J > 0; J--) E = '0' + E;
            return (
              z > -1 &&
                (E = E.toString().replace(
                  /(\d)(?=(\d{3})+(?!\d))/g,
                  '$1' + h.delimiters.thousands
                )),
              f.indexOf('.') === 0 && (E = ''),
              (V = E + A + (x || '')),
              b
                ? (V = (b && k ? '(' : '') + V + (b && k ? ')' : ''))
                : j >= 0
                  ? (V = j === 0 ? (k ? '-' : '+') + V : V + (k ? '-' : '+'))
                  : k && (V = '-' + V),
              V
            );
          },
          stringToNumber: function (l) {
            var f = i[c.currentLocale],
              u = l,
              h = { thousand: 3, million: 6, billion: 9, trillion: 12 },
              b,
              y,
              p;
            if (c.zeroFormat && l === c.zeroFormat) y = 0;
            else if ((c.nullFormat && l === c.nullFormat) || !l.replace(/[^0-9]+/g, '').length)
              y = null;
            else {
              (y = 1),
                f.delimiters.decimal !== '.' &&
                  (l = l.replace(/\./g, '').replace(f.delimiters.decimal, '.'));
              for (b in h)
                if (
                  ((p = new RegExp(
                    '[^a-zA-Z]' +
                      f.abbreviations[b] +
                      '(?:\\)|(\\' +
                      f.currency.symbol +
                      ')?(?:\\))?)?$'
                  )),
                  u.match(p))
                ) {
                  y *= Math.pow(10, h[b]);
                  break;
                }
              (y *=
                (l.split('-').length + Math.min(l.split('(').length - 1, l.split(')').length - 1)) %
                2
                  ? 1
                  : -1),
                (l = l.replace(/[^0-9\.]+/g, '')),
                (y *= Number(l));
            }
            return y;
          },
          isNaN: function (l) {
            return typeof l == 'number' && isNaN(l);
          },
          includes: function (l, f) {
            return l.indexOf(f) !== -1;
          },
          insert: function (l, f, u) {
            return l.slice(0, u) + f + l.slice(u);
          },
          reduce: function (l, f) {
            if (this === null)
              throw new TypeError('Array.prototype.reduce called on null or undefined');
            if (typeof f != 'function') throw new TypeError(f + ' is not a function');
            var u = Object(l),
              h = u.length >>> 0,
              b = 0,
              y;
            if (arguments.length === 3) y = arguments[2];
            else {
              for (; b < h && !(b in u); ) b++;
              if (b >= h) throw new TypeError('Reduce of empty array with no initial value');
              y = u[b++];
            }
            for (; b < h; b++) b in u && (y = f(y, u[b], b, u));
            return y;
          },
          multiplier: function (l) {
            var f = l.toString().split('.');
            return f.length < 2 ? 1 : Math.pow(10, f[1].length);
          },
          correctionFactor: function () {
            var l = Array.prototype.slice.call(arguments);
            return l.reduce(function (f, u) {
              var h = r.multiplier(u);
              return f > h ? f : h;
            }, 1);
          },
          toFixed: function (l, f, u, h) {
            var b = l.toString().split('.'),
              y = f - (h || 0),
              p,
              x,
              S,
              _;
            return (
              b.length === 2 ? (p = Math.min(Math.max(b[1].length, y), f)) : (p = y),
              (S = Math.pow(10, p)),
              (_ = (u(l + 'e+' + p) / S).toFixed(p)),
              h > f - p &&
                ((x = new RegExp('\\.?0{1,' + (h - (f - p)) + '}$')), (_ = _.replace(x, ''))),
              _
            );
          },
        }),
      (t.options = c),
      (t.formats = s),
      (t.locales = i),
      (t.locale = function (l) {
        return l && (c.currentLocale = l.toLowerCase()), c.currentLocale;
      }),
      (t.localeData = function (l) {
        if (!l) return i[c.currentLocale];
        if (((l = l.toLowerCase()), !i[l])) throw new Error('Unknown locale : ' + l);
        return i[l];
      }),
      (t.reset = function () {
        for (var l in o) c[l] = o[l];
      }),
      (t.zeroFormat = function (l) {
        c.zeroFormat = typeof l == 'string' ? l : null;
      }),
      (t.nullFormat = function (l) {
        c.nullFormat = typeof l == 'string' ? l : null;
      }),
      (t.defaultFormat = function (l) {
        c.defaultFormat = typeof l == 'string' ? l : '0.0';
      }),
      (t.register = function (l, f, u) {
        if (((f = f.toLowerCase()), this[l + 's'][f]))
          throw new TypeError(f + ' ' + l + ' already registered.');
        return (this[l + 's'][f] = u), u;
      }),
      (t.validate = function (l, f) {
        var u, h, b, y, p, x, S, _;
        if (
          (typeof l != 'string' &&
            ((l += ''),
            console.warn &&
              console.warn('Numeral.js: Value is not string. It has been co-erced to: ', l)),
          (l = l.trim()),
          l.match(/^\d+$/))
        )
          return !0;
        if (l === '') return !1;
        try {
          S = t.localeData(f);
        } catch {
          S = t.localeData(t.locale());
        }
        return (
          (b = S.currency.symbol),
          (p = S.abbreviations),
          (u = S.delimiters.decimal),
          S.delimiters.thousands === '.' ? (h = '\\.') : (h = S.delimiters.thousands),
          (_ = l.match(/^[^\d]+/)),
          (_ !== null && ((l = l.substr(1)), _[0] !== b)) ||
          ((_ = l.match(/[^\d]+$/)),
          _ !== null &&
            ((l = l.slice(0, -1)),
            _[0] !== p.thousand && _[0] !== p.million && _[0] !== p.billion && _[0] !== p.trillion))
            ? !1
            : ((x = new RegExp(h + '{2}')),
              l.match(/[^\d.,]/g)
                ? !1
                : ((y = l.split(u)),
                  y.length > 2
                    ? !1
                    : y.length < 2
                      ? !!y[0].match(/^\d+.*\d$/) && !y[0].match(x)
                      : y[0].length === 1
                        ? !!y[0].match(/^\d+$/) && !y[0].match(x) && !!y[1].match(/^\d+$/)
                        : !!y[0].match(/^\d+.*\d$/) && !y[0].match(x) && !!y[1].match(/^\d+$/)))
        );
      }),
      (t.fn = d.prototype =
        {
          clone: function () {
            return t(this);
          },
          format: function (l, f) {
            var u = this._value,
              h = l || c.defaultFormat,
              b,
              y,
              p;
            if (((f = f || Math.round), u === 0 && c.zeroFormat !== null)) y = c.zeroFormat;
            else if (u === null && c.nullFormat !== null) y = c.nullFormat;
            else {
              for (b in s)
                if (h.match(s[b].regexps.format)) {
                  p = s[b].format;
                  break;
                }
              (p = p || t._.numberToFormat), (y = p(u, h, f));
            }
            return y;
          },
          value: function () {
            return this._value;
          },
          input: function () {
            return this._input;
          },
          set: function (l) {
            return (this._value = Number(l)), this;
          },
          add: function (l) {
            var f = r.correctionFactor.call(null, this._value, l);
            function u(h, b, y, p) {
              return h + Math.round(f * b);
            }
            return (this._value = r.reduce([this._value, l], u, 0) / f), this;
          },
          subtract: function (l) {
            var f = r.correctionFactor.call(null, this._value, l);
            function u(h, b, y, p) {
              return h - Math.round(f * b);
            }
            return (this._value = r.reduce([l], u, Math.round(this._value * f)) / f), this;
          },
          multiply: function (l) {
            function f(u, h, b, y) {
              var p = r.correctionFactor(u, h);
              return (Math.round(u * p) * Math.round(h * p)) / Math.round(p * p);
            }
            return (this._value = r.reduce([this._value, l], f, 1)), this;
          },
          divide: function (l) {
            function f(u, h, b, y) {
              var p = r.correctionFactor(u, h);
              return Math.round(u * p) / Math.round(h * p);
            }
            return (this._value = r.reduce([this._value, l], f)), this;
          },
          difference: function (l) {
            return Math.abs(t(this._value).subtract(l).value());
          },
        }),
      t.register('locale', 'en', {
        delimiters: { thousands: ',', decimal: '.' },
        abbreviations: { thousand: 'k', million: 'm', billion: 'b', trillion: 't' },
        ordinal: function (l) {
          var f = l % 10;
          return ~~((l % 100) / 10) === 1
            ? 'th'
            : f === 1
              ? 'st'
              : f === 2
                ? 'nd'
                : f === 3
                  ? 'rd'
                  : 'th';
        },
        currency: { symbol: '$' },
      }),
      (function () {
        t.register('format', 'bps', {
          regexps: { format: /(BPS)/, unformat: /(BPS)/ },
          format: function (l, f, u) {
            var h = t._.includes(f, ' BPS') ? ' ' : '',
              b;
            return (
              (l = l * 1e4),
              (f = f.replace(/\s?BPS/, '')),
              (b = t._.numberToFormat(l, f, u)),
              t._.includes(b, ')')
                ? ((b = b.split('')), b.splice(-1, 0, h + 'BPS'), (b = b.join('')))
                : (b = b + h + 'BPS'),
              b
            );
          },
          unformat: function (l) {
            return +(t._.stringToNumber(l) * 1e-4).toFixed(15);
          },
        });
      })(),
      (function () {
        var l = { base: 1e3, suffixes: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] },
          f = {
            base: 1024,
            suffixes: ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'],
          },
          u = l.suffixes.concat(
            f.suffixes.filter(function (b) {
              return l.suffixes.indexOf(b) < 0;
            })
          ),
          h = u.join('|');
        (h = '(' + h.replace('B', 'B(?!PS)') + ')'),
          t.register('format', 'bytes', {
            regexps: { format: /([0\s]i?b)/, unformat: new RegExp(h) },
            format: function (b, y, p) {
              var x,
                S = t._.includes(y, 'ib') ? f : l,
                _ = t._.includes(y, ' b') || t._.includes(y, ' ib') ? ' ' : '',
                m,
                I,
                A;
              for (y = y.replace(/\s?i?b/, ''), m = 0; m <= S.suffixes.length; m++)
                if (
                  ((I = Math.pow(S.base, m)),
                  (A = Math.pow(S.base, m + 1)),
                  b === null || b === 0 || (b >= I && b < A))
                ) {
                  (_ += S.suffixes[m]), I > 0 && (b = b / I);
                  break;
                }
              return (x = t._.numberToFormat(b, y, p)), x + _;
            },
            unformat: function (b) {
              var y = t._.stringToNumber(b),
                p,
                x;
              if (y) {
                for (p = l.suffixes.length - 1; p >= 0; p--) {
                  if (t._.includes(b, l.suffixes[p])) {
                    x = Math.pow(l.base, p);
                    break;
                  }
                  if (t._.includes(b, f.suffixes[p])) {
                    x = Math.pow(f.base, p);
                    break;
                  }
                }
                y *= x || 1;
              }
              return y;
            },
          });
      })(),
      (function () {
        t.register('format', 'currency', {
          regexps: { format: /(\$)/ },
          format: function (l, f, u) {
            var h = t.locales[t.options.currentLocale],
              b = {
                before: f.match(/^([\+|\-|\(|\s|\$]*)/)[0],
                after: f.match(/([\+|\-|\)|\s|\$]*)$/)[0],
              },
              y,
              p,
              x;
            for (
              f = f.replace(/\s?\$\s?/, ''),
                y = t._.numberToFormat(l, f, u),
                l >= 0
                  ? ((b.before = b.before.replace(/[\-\(]/, '')),
                    (b.after = b.after.replace(/[\-\)]/, '')))
                  : l < 0 &&
                    !t._.includes(b.before, '-') &&
                    !t._.includes(b.before, '(') &&
                    (b.before = '-' + b.before),
                x = 0;
              x < b.before.length;
              x++
            )
              switch (((p = b.before[x]), p)) {
                case '$':
                  y = t._.insert(y, h.currency.symbol, x);
                  break;
                case ' ':
                  y = t._.insert(y, ' ', x + h.currency.symbol.length - 1);
                  break;
              }
            for (x = b.after.length - 1; x >= 0; x--)
              switch (((p = b.after[x]), p)) {
                case '$':
                  y =
                    x === b.after.length - 1
                      ? y + h.currency.symbol
                      : t._.insert(y, h.currency.symbol, -(b.after.length - (1 + x)));
                  break;
                case ' ':
                  y =
                    x === b.after.length - 1
                      ? y + ' '
                      : t._.insert(
                          y,
                          ' ',
                          -(b.after.length - (1 + x) + h.currency.symbol.length - 1)
                        );
                  break;
              }
            return y;
          },
        });
      })(),
      (function () {
        t.register('format', 'exponential', {
          regexps: { format: /(e\+|e-)/, unformat: /(e\+|e-)/ },
          format: function (l, f, u) {
            var h,
              b = typeof l == 'number' && !t._.isNaN(l) ? l.toExponential() : '0e+0',
              y = b.split('e');
            return (
              (f = f.replace(/e[\+|\-]{1}0/, '')),
              (h = t._.numberToFormat(Number(y[0]), f, u)),
              h + 'e' + y[1]
            );
          },
          unformat: function (l) {
            var f = t._.includes(l, 'e+') ? l.split('e+') : l.split('e-'),
              u = Number(f[0]),
              h = Number(f[1]);
            h = t._.includes(l, 'e-') ? (h *= -1) : h;
            function b(y, p, x, S) {
              var _ = t._.correctionFactor(y, p),
                m = (y * _ * (p * _)) / (_ * _);
              return m;
            }
            return t._.reduce([u, Math.pow(10, h)], b, 1);
          },
        });
      })(),
      (function () {
        t.register('format', 'ordinal', {
          regexps: { format: /(o)/ },
          format: function (l, f, u) {
            var h = t.locales[t.options.currentLocale],
              b,
              y = t._.includes(f, ' o') ? ' ' : '';
            return (
              (f = f.replace(/\s?o/, '')),
              (y += h.ordinal(l)),
              (b = t._.numberToFormat(l, f, u)),
              b + y
            );
          },
        });
      })(),
      (function () {
        t.register('format', 'percentage', {
          regexps: { format: /(%)/, unformat: /(%)/ },
          format: function (l, f, u) {
            var h = t._.includes(f, ' %') ? ' ' : '',
              b;
            return (
              t.options.scalePercentBy100 && (l = l * 100),
              (f = f.replace(/\s?\%/, '')),
              (b = t._.numberToFormat(l, f, u)),
              t._.includes(b, ')')
                ? ((b = b.split('')), b.splice(-1, 0, h + '%'), (b = b.join('')))
                : (b = b + h + '%'),
              b
            );
          },
          unformat: function (l) {
            var f = t._.stringToNumber(l);
            return t.options.scalePercentBy100 ? f * 0.01 : f;
          },
        });
      })(),
      (function () {
        t.register('format', 'time', {
          regexps: { format: /(:)/, unformat: /(:)/ },
          format: function (l, f, u) {
            var h = Math.floor(l / 60 / 60),
              b = Math.floor((l - h * 60 * 60) / 60),
              y = Math.round(l - h * 60 * 60 - b * 60);
            return h + ':' + (b < 10 ? '0' + b : b) + ':' + (y < 10 ? '0' + y : y);
          },
          unformat: function (l) {
            var f = l.split(':'),
              u = 0;
            return (
              f.length === 3
                ? ((u = u + Number(f[0]) * 60 * 60),
                  (u = u + Number(f[1]) * 60),
                  (u = u + Number(f[2])))
                : f.length === 2 && ((u = u + Number(f[0]) * 60), (u = u + Number(f[1]))),
              Number(u)
            );
          },
        });
      })(),
      t
    );
  });
})(ad);
var c4 = ad.exports;
const l4 = Ht(c4);
o4(l4.localeData('en'), {
  abbreviations: { thousand: 'K', million: 'M', billion: 'B', trillion: 'T' },
});
var u4 = f4;
function f4(e, t) {
  if (typeof e != 'function') throw new Error('`callback` should be a function');
  if (t !== void 0 && typeof t != 'function') throw new Error('`resolver` should be a function');
  var r = {},
    n = function () {
      var s = Array.prototype.slice.call(arguments),
        i = t ? t.apply(this, s) : JSON.stringify(s);
      return i in r || (r[i] = e.apply(this, s)), r[i];
    };
  return (n.cache = r), n;
}
const d4 = (...e) => {
    const t = e.map((r) => (r instanceof Map || r instanceof Set ? Array.from(r) : r));
    return JSON.stringify(t);
  },
  h4 = (e, t = { forceRefresh: !1 }) => {
    const { resolver: r = d4 } = t,
      n = u4(e, r),
      s = function (...i) {
        if (t.forceRefresh) {
          const o = r(...i);
          delete n.cache[o];
        }
        return n.apply(this, i);
      };
    return (s.cache = n.cache), s;
  },
  x4 = (e) => new rn(10).pow(e),
  p4 = h4(x4),
  YO = (e, t) => new rn(e).div(p4(t));
function ZO(e) {
  return `https://www.google.com/s2/favicons?domain=${e}&sz=256`;
}
const b4 = cs.createContext(!1);
function y4() {
  return ye.useContext(b4);
}
cs.createContext(!1);
function m4(e) {
  try {
    const t = new URL(e);
    return !['javascript:', 'data:', 'vbscript:'].includes(t.protocol.toLowerCase());
  } catch {
    return !1;
  }
}
const g4 = new RegExp("^[0-9]+'?$"),
  Wo = 2147483648;
let id = class extends Yf {
  constructor(t, r) {
    super(), (this.finished = !1), (this.destroyed = !1), qr.hash(t);
    const n = Kc(r);
    if (((this.iHash = t.create()), typeof this.iHash.update != 'function'))
      throw new TypeError('Expected instance of class which extends utils.Hash');
    (this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen);
    const s = this.blockLen,
      i = new Uint8Array(s);
    i.set(n.length > s ? t.create().update(n).digest() : n);
    for (let o = 0; o < i.length; o++) i[o] ^= 54;
    this.iHash.update(i), (this.oHash = t.create());
    for (let o = 0; o < i.length; o++) i[o] ^= 106;
    this.oHash.update(i), i.fill(0);
  }
  update(t) {
    return qr.exists(this), this.iHash.update(t), this;
  }
  digestInto(t) {
    qr.exists(this),
      qr.bytes(t, this.outputLen),
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
    const { oHash: r, iHash: n, finished: s, destroyed: i, blockLen: o, outputLen: c } = this;
    return (
      (t = t),
      (t.finished = s),
      (t.destroyed = i),
      (t.blockLen = o),
      (t.outputLen = c),
      (t.oHash = r._cloneInto(t.oHash)),
      (t.iHash = n._cloneInto(t.iHash)),
      t
    );
  }
  destroy() {
    (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
  }
};
const Ts = (e, t, r) => new id(e, t).update(r).digest();
Ts.create = (e, t) => new id(e, t);
const v4 = 'ed25519 seed',
  w4 = (e) => {
    const t = Ce.from(Ts(Is, Ce.from(v4), e)).toString('hex'),
      r = t.slice(0, 64),
      n = t.slice(64);
    return { key: Ce.from(r, 'hex'), chainCode: Ce.from(n, 'hex') };
  },
  S4 = ({ key: e, chainCode: t }, r) => {
    const n = Ce.allocUnsafe(4);
    n.writeUInt32BE(r, 0);
    const s = Ce.concat([Ce.alloc(1, 0), e, n]),
      i = Ce.from(Ts(Is, t, s)).toString('hex'),
      o = i.slice(0, 64),
      c = i.slice(64);
    return { key: Ce.from(o, 'hex'), chainCode: Ce.from(c, 'hex') };
  },
  E4 = gt.from('Bitcoin seed'),
  al = Go.from('0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141'),
  _4 = (e) => {
    const t = gt.from(Ts(Is, gt.from(E4), e)).toString('hex'),
      r = t.slice(0, 64),
      n = t.slice(64);
    return { key: gt.from(r, 'hex'), chainCode: gt.from(n, 'hex') };
  },
  $4 = (e, t) => {
    const { key: r, chainCode: n } = e,
      s = new Uint8Array(37);
    if (t & Wo) s.set(r, 1);
    else {
      const u = qc(r, !0);
      s.set(Qe(u));
    }
    for (let u = 24; u >= 0; u -= 8) s[33 + (u >> 3)] = (t >> (24 - u)) & 255;
    const i = gt.from(Ts(Is, n, s)).toString('hex'),
      o = i.slice(0, 64),
      c = i.slice(64),
      d = Go.from(`0x${o}`);
    if (d.gte(al)) throw new Error('Invalid private key');
    const l = d.add(`0x${r.toString('hex')}`).mod(al);
    if (l.eq(Go.from(0))) throw new Error('Invalid private key');
    const f = C2(Xt(l), 32);
    return { key: gt.from(f.replace('0x', ''), 'hex'), chainCode: gt.from(c, 'hex') };
  };
a.string().refine(
  (e) => {
    if (typeof e != 'string') return !1;
    const t = e.split('/');
    if (t.length < 2 || t[0] !== 'm') return !1;
    for (let r = 1; r < t.length; ++r) if (!g4.test(t[r])) return !1;
    return !0;
  },
  { message: 'Value is not a valid derivation path.' }
);
var K = ((e) => (
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
))(K || {});
const XO = a.union([
    a.literal('bitcoinTaproot'),
    a.literal('bitcoinNativeSegwit'),
    a.literal('bitcoinNestedSegwit'),
    a.literal('bitcoinLegacy'),
  ]),
  eB = a.union([
    a.literal('bip44RootEthereum'),
    a.literal('bip44Ethereum'),
    a.literal('bip44EthereumSecondary'),
    a.literal('bip44EthereumTertiary'),
  ]),
  tB = a.union([
    a.literal('bip44Root'),
    a.literal('bip44'),
    a.literal('bip44Change'),
    a.literal('deprecated'),
  ]),
  rB = a.literal('bip44Sui'),
  A4 = a.union([
    a.literal(K.Bip44ChangeSolana),
    a.literal(K.Bip44Solana),
    a.literal(K.DeprecatedSolana),
  ]),
  I4 = a.union([
    a.literal(K.Bip44Ethereum),
    a.literal(K.Bip44EthereumSecondary),
    a.literal(K.Bip44EthereumTertiary),
  ]),
  T4 = a.union([
    a.literal(K.BitcoinTaproot),
    a.literal(K.BitcoinNativeSegwit),
    a.literal(K.BitcoinNestedSegwit),
    a.literal(K.BitcoinLegacy),
  ]),
  P4 = a.literal(K.Bip44Sui),
  Fa = a.number().int().min(0),
  C4 = a.object({ pathType: a.literal(K.Bip44RootSolana), index: a.number().optional() }),
  k4 = a.object({ pathType: A4, index: Fa }),
  D4 = a.object({ pathType: a.literal(K.Bip44RootEthereum), index: a.number().optional() }),
  O4 = a.object({ pathType: I4, index: Fa }),
  B4 = a.object({ pathType: T4, index: Fa }),
  L4 = a.object({ pathType: P4, index: Fa }),
  M4 = a.union([C4, k4, D4, O4, B4, L4]),
  N4 = new Error('Invalid derivation path.'),
  nB = (e) => {
    if (!M4.safeParse(e).success) throw N4;
    switch (e.pathType) {
      case K.BitcoinTaproot:
        return `m/86'/0'/0'/0/${e.index}`;
      case K.BitcoinNativeSegwit:
        return `m/84'/0'/0'/0/${e.index}`;
      case K.BitcoinNestedSegwit:
        return `m/46'/0'/0'/0/${e.index}`;
      case K.BitcoinLegacy:
        return `m/44'/0'/0'/0/${e.index}`;
      case K.Bip44RootEthereum:
        return "m/44'/60'";
      case K.Bip44Ethereum:
        return `m/44'/60'/0'/0/${e.index}`;
      case K.Bip44EthereumSecondary:
        return `m/44'/60'/1'/0/${e.index}`;
      case K.Bip44EthereumTertiary:
        return `m/44'/60'/2'/0/${e.index}`;
      case K.Bip44RootSolana:
        return "m/44'/501'";
      case K.DeprecatedSolana:
        return `m/501'/${e.index}'/0/0`;
      case K.Bip44Solana:
        return `m/44'/501'/${e.index}'`;
      case K.Bip44ChangeSolana:
        return `m/44'/501'/${e.index}'/0'`;
      case K.Bip44Sui:
        return `m/44'/784'/${e.index}'/0'/0'`;
    }
  };
xa.sha512Sync = (...e) => Is(xa.concatBytes(...e));
const { getPublicKey: R4 } = Bf;
var Vr, Gr;
class ja {
  constructor(t) {
    Y(this, Vr);
    Y(this, Gr);
    q(this, Vr, { ellipticCurve: 'ed25519', value: w4(t), nodes: {} }),
      q(this, Gr, { ellipticCurve: 'secp256k1', value: _4(t), nodes: {} });
  }
  derivePathType(t, r) {
    switch (t) {
      case K.BitcoinTaproot:
        return this.derivePath({
          ellipticCurve: 'secp256k1',
          derivationPath: `m/86'/0'/0'/0/${r}`,
          useCompressedPublicKey: !0,
        });
      case K.BitcoinNativeSegwit:
        return this.derivePath({
          ellipticCurve: 'secp256k1',
          derivationPath: `m/84'/0'/0'/0/${r}`,
          useCompressedPublicKey: !0,
        });
      case K.BitcoinNestedSegwit:
        return this.derivePath({
          ellipticCurve: 'secp256k1',
          derivationPath: `m/46'/0'/0'/0/${r}`,
          useCompressedPublicKey: !0,
        });
      case K.BitcoinLegacy:
        return this.derivePath({
          ellipticCurve: 'secp256k1',
          derivationPath: `m/44'/0'/0'/0/${r}`,
          useCompressedPublicKey: !0,
        });
      case K.Bip44Ethereum:
        return this.derivePath({
          ellipticCurve: 'secp256k1',
          derivationPath: `m/44'/60'/0'/0/${r}`,
        });
      case K.Bip44EthereumSecondary:
        return this.derivePath({
          ellipticCurve: 'secp256k1',
          derivationPath: `m/44'/60'/1'/0/${r}`,
        });
      case K.Bip44EthereumTertiary:
        return this.derivePath({
          ellipticCurve: 'secp256k1',
          derivationPath: `m/44'/60'/2'/0/${r}`,
        });
      case K.Bip44RootEthereum:
        return this.derivePath({ ellipticCurve: 'secp256k1', derivationPath: "m/44'/60'" });
      case K.Bip44ChangeSolana:
        return this.derivePath({
          ellipticCurve: 'ed25519',
          derivationPath: `m/44'/501'/${r}'/0'`,
          bytesInPrivateKey: 64,
        });
      case K.Bip44Solana:
        return this.derivePath({
          ellipticCurve: 'ed25519',
          derivationPath: `m/44'/501'/${r}'`,
          bytesInPrivateKey: 64,
        });
      case K.DeprecatedSolana:
        return this.derivePath({ ellipticCurve: 'secp256k1', derivationPath: `m/501'/${r}'/0/0` });
      case K.Bip44RootSolana:
        return this.derivePath({
          ellipticCurve: 'ed25519',
          derivationPath: "m/44'/501'",
          bytesInPrivateKey: 64,
        });
      case K.Bip44Sui:
        return this.derivePath({
          ellipticCurve: 'ed25519',
          derivationPath: `m/44'/784'/${r}'/0'/0'`,
          bytesInPrivateKey: 32,
        });
    }
  }
  derivePath(t) {
    return t.ellipticCurve === 'ed25519'
      ? this.deriveED25519Path(t)
      : t.ellipticCurve === 'secp256k1'
        ? this.deriveSECP256K1Path(t)
        : Vn();
  }
  deriveED25519Path(t) {
    var l;
    const { ellipticCurve: r, derivationPath: n, bytesInPrivateKey: s } = t,
      i = n.split('/');
    let o = v(this, Vr);
    for (const f of i) {
      if (f === 'm') continue;
      if (!o) throw new Error('Cannot derive path, no current node.');
      let u = ((l = o.nodes) == null ? void 0 : l[f]) ?? null;
      if (!u) {
        const h = { ellipticCurve: r, value: S4(o.value, parseInt(f, 10) + Wo), nodes: {} };
        (u = h), (o.nodes[f] = h);
      }
      o = u;
    }
    if (!o) throw new Error(`Unable to derive ${n} on curve ${r}.`);
    const c = R4(o.value.key);
    let d;
    switch (s) {
      case 32:
        return (d = new Uint8Array(32)), d.set(o.value.key), { publicKey: c, secretKey: d };
      case 64:
        return (
          (d = new Uint8Array(64)), d.set(o.value.key), d.set(c, 32), { publicKey: c, secretKey: d }
        );
    }
  }
  deriveSECP256K1Path(t) {
    var l;
    const { ellipticCurve: r, derivationPath: n, useCompressedPublicKey: s = !1 } = t,
      i = n.split('/');
    let o = v(this, Gr);
    for (const f of i) {
      if (f === 'm') continue;
      if (!o) throw new Error('Cannot derive path, no current node.');
      let u = ((l = o.nodes) == null ? void 0 : l[f]) ?? null;
      if (!u) {
        let h = 0;
        f.endsWith("'") && (h = Wo);
        const b = { ellipticCurve: r, value: $4(o.value, parseInt(f, 10) + h), nodes: {} };
        (u = b), (o.nodes[f] = b);
      }
      o = u;
    }
    if (!o) throw new Error(`Unable to derive ${n} on curve ${r}.`);
    const c = o.value.key;
    return { publicKey: qc(c, s), secretKey: new Uint8Array(c) };
  }
  cleanUpTree(t) {
    if (t) {
      t.value.key.fill(0), t.value.chainCode.fill(0);
      const r = Object.values(t.nodes);
      for (const n of r) this.cleanUpTree(n);
    }
  }
  cleanup() {
    this.cleanUpTree(v(this, Vr)),
      this.cleanUpTree(v(this, Gr)),
      q(this, Vr, null),
      q(this, Gr, null);
  }
}
(Vr = new WeakMap()), (Gr = new WeakMap());
var Q = ((e) => (
  (e.BitcoinTaproot = 'bip122_p2tr'),
  (e.BitcoinNativeSegwit = 'bip122_p2wpkh'),
  (e.BitcoinNestedSegwit = 'bip122_p2sh'),
  (e.BitcoinLegacy = 'bip122_p2pkh'),
  (e.Solana = 'solana'),
  (e.EVM = 'eip155'),
  (e.Sui = 'sui'),
  e
))(Q || {});
const U4 = ['bip122_p2tr', 'bip122_p2wpkh', 'bip122_p2sh', 'bip122_p2pkh'],
  F4 = a.enum(U4);
class j4 {
  constructor() {
    F(this, 'type', Q.BitcoinLegacy);
    F(this, 'displayName', 'Legacy');
    F(this, 'defaultDerivationPathType', K.BitcoinLegacy);
    F(this, 'otherDerivationPathType', []);
  }
}
class H4 {
  constructor() {
    F(this, 'type', Q.BitcoinNativeSegwit);
    F(this, 'displayName', 'Native Segwit');
    F(this, 'defaultDerivationPathType', K.BitcoinNativeSegwit);
    F(this, 'otherDerivationPathType', []);
  }
}
class q4 {
  constructor() {
    F(this, 'type', Q.BitcoinNestedSegwit);
    F(this, 'displayName', 'Nested Segwit');
    F(this, 'defaultDerivationPathType', K.BitcoinNestedSegwit);
    F(this, 'otherDerivationPathType', []);
  }
}
class V4 {
  constructor() {
    F(this, 'type', Q.BitcoinTaproot);
    F(this, 'displayName', 'Taproot');
    F(this, 'defaultDerivationPathType', K.BitcoinTaproot);
    F(this, 'otherDerivationPathType', []);
  }
}
class G4 {
  constructor() {
    F(this, 'type', Q.EVM);
    F(this, 'displayName', 'Ethereum');
    F(this, 'defaultDerivationPathType', K.Bip44Ethereum);
    F(this, 'otherDerivationPathType', [
      K.Bip44RootEthereum,
      K.Bip44EthereumSecondary,
      K.Bip44EthereumTertiary,
    ]);
  }
}
class z4 {
  constructor() {
    F(this, 'type', Q.Solana);
    F(this, 'displayName', 'Solana');
    F(this, 'defaultDerivationPathType', K.Bip44ChangeSolana);
    F(this, 'otherDerivationPathType', [K.Bip44RootSolana, K.Bip44Solana, K.DeprecatedSolana]);
  }
}
class K4 {
  constructor() {
    F(this, 'type', Q.Sui);
    F(this, 'displayName', 'Sui');
    F(this, 'defaultDerivationPathType', K.Bip44Sui);
    F(this, 'otherDerivationPathType', []);
  }
}
var bf, yf, mf, gf, vf, wf, Sf;
(Sf = Q.BitcoinTaproot),
  (wf = Q.BitcoinNativeSegwit),
  (vf = Q.BitcoinNestedSegwit),
  (gf = Q.BitcoinLegacy),
  (mf = Q.EVM),
  (yf = Q.Solana),
  (bf = Q.Sui);
class W4 {
  constructor() {
    F(this, Sf, new V4());
    F(this, wf, new H4());
    F(this, vf, new q4());
    F(this, gf, new j4());
    F(this, mf, new G4());
    F(this, yf, new z4());
    F(this, bf, new K4());
    F(this, 'allAddressTypes', Object.values(Q));
    F(
      this,
      'allAddressTypeDefinitions',
      this.allAddressTypes.map((t) => this[t])
    );
    F(this, 'addressTypeByDerivationPathType', {});
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
const Wc = new W4();
class Q4 {
  constructor() {
    F(this, 'addressTypes', [
      Q.BitcoinTaproot,
      Q.BitcoinNativeSegwit,
      Q.BitcoinNestedSegwit,
      Q.BitcoinLegacy,
    ]);
  }
  generateKeypairFromPrivateKey(t) {
    const r = t.fold((s) => Ce.from(s));
    return { publicKey: qc(r, !0), privateKey: r };
  }
  generateKeypairFromSeed(t, r, n) {
    const s = t.fold((i) => new ja(i));
    try {
      const i = s.derivePathType(n, r);
      return { publicKey: i.publicKey, privateKey: i.secretKey };
    } finally {
      s.cleanup();
    }
  }
}
var od = { exports: {} };
(function (e, t) {
  (function (r) {
    function n($) {
      return parseInt($) === $;
    }
    function s($) {
      if (!n($.length)) return !1;
      for (var N = 0; N < $.length; N++) if (!n($[N]) || $[N] < 0 || $[N] > 255) return !1;
      return !0;
    }
    function i($, N) {
      if ($.buffer && ArrayBuffer.isView($) && $.name === 'Uint8Array')
        return N && ($.slice ? ($ = $.slice()) : ($ = Array.prototype.slice.call($))), $;
      if (Array.isArray($)) {
        if (!s($)) throw new Error('Array contains invalid value: ' + $);
        return new Uint8Array($);
      }
      if (n($.length) && s($)) return new Uint8Array($);
      throw new Error('unsupported array-like object');
    }
    function o($) {
      return new Uint8Array($);
    }
    function c($, N, G, D, R) {
      (D != null || R != null) &&
        ($.slice ? ($ = $.slice(D, R)) : ($ = Array.prototype.slice.call($, D, R))),
        N.set($, G);
    }
    var d = (function () {
        function $(G) {
          var D = [],
            R = 0;
          for (G = encodeURI(G); R < G.length; ) {
            var X = G.charCodeAt(R++);
            X === 37 ? (D.push(parseInt(G.substr(R, 2), 16)), (R += 2)) : D.push(X);
          }
          return i(D);
        }
        function N(G) {
          for (var D = [], R = 0; R < G.length; ) {
            var X = G[R];
            X < 128
              ? (D.push(String.fromCharCode(X)), R++)
              : X > 191 && X < 224
                ? (D.push(String.fromCharCode(((X & 31) << 6) | (G[R + 1] & 63))), (R += 2))
                : (D.push(
                    String.fromCharCode(((X & 15) << 12) | ((G[R + 1] & 63) << 6) | (G[R + 2] & 63))
                  ),
                  (R += 3));
          }
          return D.join('');
        }
        return { toBytes: $, fromBytes: N };
      })(),
      l = (function () {
        function $(D) {
          for (var R = [], X = 0; X < D.length; X += 2) R.push(parseInt(D.substr(X, 2), 16));
          return R;
        }
        var N = '0123456789abcdef';
        function G(D) {
          for (var R = [], X = 0; X < D.length; X++) {
            var ke = D[X];
            R.push(N[(ke & 240) >> 4] + N[ke & 15]);
          }
          return R.join('');
        }
        return { toBytes: $, fromBytes: G };
      })(),
      f = { 16: 10, 24: 12, 32: 14 },
      u = [
        1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53,
        106, 212, 179, 125, 250, 239, 197, 145,
      ],
      h = [
        99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201,
        125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63,
        247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128,
        226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47,
        132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170,
        251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56,
        245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126,
        61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11,
        219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55,
        109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180,
        198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87,
        185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85,
        40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22,
      ],
      b = [
        82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130,
        155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61,
        238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73,
        109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182,
        146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216,
        171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15,
        2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207,
        206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117,
        223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86,
        62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7,
        199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122,
        159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83,
        153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125,
      ],
      y = [
        3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041,
        2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474,
        1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645,
        2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738,
        597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774,
        1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420,
        3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908,
        2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577,
        605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043,
        495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614,
        1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799,
        2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621,
        3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944,
        2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463,
        1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508,
        631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660,
        1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632,
        3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079,
        3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354,
        2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720,
        2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882,
        3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934,
        3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172,
        3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756,
        3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028,
        2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077,
        3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399,
        1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932,
        3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232,
        2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154,
        3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745,
        3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399,
        765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080,
        2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982,
        3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068,
        1841019862, 739644986,
      ],
      p = [
        2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751,
        1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899,
        2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041,
        3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108,
        4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398,
        1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129,
        2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331,
        1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848,
        1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339,
        1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114,
        1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724,
        4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131,
        3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064,
        1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773,
        1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160,
        1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239,
        2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098,
        1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699,
        801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751,
        2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144,
        2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144,
        3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883,
        1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134,
        1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105,
        2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389,
        2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468,
        634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856,
        1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992,
        2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234,
        2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494,
        2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965,
        3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838,
        2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045,
        2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311,
        836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607,
        3413881008, 4238890068, 3597515707, 975967766,
      ],
      x = [
        1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791,
        3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099,
        1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841,
        1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188,
        2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518,
        911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069,
        4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651,
        3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768,
        3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252,
        439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278,
        3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0,
        3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667,
        3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360,
        4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541,
        1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671,
        2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285,
        944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895,
        4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855,
        2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525,
        1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615,
        3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566,
        3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546,
        978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131,
        2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455,
        3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425,
        1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822,
        135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164,
        3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765,
        2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264,
        50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686,
        3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729,
        1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927,
        3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649,
        2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905,
        2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126,
      ],
      S = [
        1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006,
        3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549,
        1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266,
        1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243,
        2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788,
        909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729,
        4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246,
        3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963,
        3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872,
        437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943,
        3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0,
        3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717,
        3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995,
        4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921,
        1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221,
        2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225,
        943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645,
        4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230,
        2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170,
        1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070,
        3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671,
        3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716,
        976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021,
        2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725,
        3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505,
        1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567,
        134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419,
        3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545,
        2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584,
        50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911,
        3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874,
        1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917,
        3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649,
        2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930,
        2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436,
      ],
      _ = [
        1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787,
        540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152,
        3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058,
        2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843,
        1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046,
        4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237,
        2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743,
        1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835,
        2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154,
        4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293,
        2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657,
        2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164,
        3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483,
        2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830,
        4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554,
        202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374,
        3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864,
        1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661,
        1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384,
        328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059,
        3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396,
        2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334,
        2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195,
        1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924,
        1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377,
        1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502,
        3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584,
        1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806,
        395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075,
        3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386,
        2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441,
        3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761,
        1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942,
        941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206,
        3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890,
      ],
      m = [
        1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216,
        2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987,
        2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728,
        2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123,
        3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113,
        3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459,
        1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965,
        2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370,
        2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276,
        2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614,
        2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976,
        4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868,
        4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339,
        954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597,
        2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590,
        3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021,
        2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197,
        2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624,
        2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940,
        1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730,
        1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489,
        4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110,
        3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837,
        223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695,
        3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147,
        2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751,
        3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259,
        818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826,
        243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840,
        3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242,
        870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569,
        3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469,
        1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296,
        1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780,
        2422494913, 1635502980, 1893020342, 1950903388, 1120974935,
      ],
      I = [
        2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946,
        59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562,
        1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311,
        4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298,
        2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3,
        1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209,
        2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725,
        1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725,
        2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631,
        3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174,
        1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737,
        273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318,
        369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849,
        1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627,
        1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047,
        2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075,
        3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147,
        218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199,
        648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005,
        4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705,
        2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052,
        1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200,
        2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442,
        2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595,
        2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892,
        3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991,
        3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639,
        2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196,
        3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910,
        3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831,
        1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464,
        1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610,
        3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519,
        3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544,
        3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600,
      ],
      A = [
        4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116,
        3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702,
        1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793,
        1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988,
        1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143,
        3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559,
        1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055,
        3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170,
        3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866,
        2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668,
        4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261,
        562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348,
        1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919,
        425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802,
        292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400,
        1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416,
        3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742,
        2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535,
        1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952,
        836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110,
        698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689,
        2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655,
        953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791,
        983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814,
        3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952,
        2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230,
        4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305,
        2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872,
        2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739,
        2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909,
        2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253,
        3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689,
        1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159,
        1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990,
        3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988,
        3414450555, 850817237, 1817998408, 3092726480,
      ],
      k = [
        0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496,
        2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529,
        3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474,
        3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407,
        3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343,
        3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942,
        2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150,
        59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414,
        1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520,
        3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269,
        3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366,
        1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127,
        1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711,
        1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311,
        1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783,
        742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354,
        3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937,
        3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034,
        2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354,
        159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386,
        2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377,
        3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743,
        2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284,
        3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213,
        2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582,
        1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814,
        540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566,
        3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557,
        2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293,
        975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661,
        1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950,
        25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806,
        1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247,
        4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420,
        3043140495, 2673705150, 2438237621, 2203032232, 2370213795,
      ],
      P = [
        0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576,
        1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459,
        2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614,
        2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537,
        3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543,
        1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535,
        77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207,
        3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884,
        3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975,
        3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824,
        3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461,
        1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622,
        507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846,
        2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216,
        3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375,
        4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879,
        129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162,
        1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469,
        3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840,
        2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175,
        1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130,
        350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921,
        2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618,
        3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127,
        3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767,
        223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560,
        1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046,
        1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387,
        2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696,
        2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037,
        4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969,
        1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148,
        692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636,
        3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663,
        2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882,
        2743944855,
      ],
      w = [
        0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376,
        1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639,
        3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174,
        4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557,
        2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663,
        2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032,
        3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033,
        2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201,
        344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180,
        2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772,
        313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932,
        2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135,
        3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085,
        3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354,
        3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963,
        2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195,
        621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600,
        1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968,
        3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199,
        2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431,
        1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311,
        1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613,
        1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205,
        516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645,
        2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318,
        3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634,
        3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549,
        3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452,
        4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591,
        1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135,
        567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692,
        574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501,
        1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562,
        3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315,
        2744104290, 2159976285, 2377486676, 2594734927, 2544078150,
      ],
      E = [
        0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936,
        1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874,
        2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524,
        2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222,
        4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221,
        227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909,
        1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947,
        2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729,
        3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905,
        1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619,
        740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739,
        4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493,
        2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231,
        1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426,
        1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418,
        983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424,
        3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382,
        3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219,
        3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765,
        3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655,
        1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905,
        1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426,
        3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048,
        2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542,
        2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780,
        1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620,
        972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988,
        3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166,
        4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766,
        777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662,
        1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147,
        3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233,
        4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431,
        953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159,
        1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925,
      ];
    function U($) {
      for (var N = [], G = 0; G < $.length; G += 4)
        N.push(($[G] << 24) | ($[G + 1] << 16) | ($[G + 2] << 8) | $[G + 3]);
      return N;
    }
    var j = function ($) {
      if (!(this instanceof j)) throw Error('AES must be instanitated with `new`');
      Object.defineProperty(this, 'key', { value: i($, !0) }), this._prepare();
    };
    (j.prototype._prepare = function () {
      var $ = f[this.key.length];
      if ($ == null) throw new Error('invalid key size (must be 16, 24 or 32 bytes)');
      (this._Ke = []), (this._Kd = []);
      for (var N = 0; N <= $; N++) this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
      for (var G = ($ + 1) * 4, D = this.key.length / 4, R = U(this.key), X, N = 0; N < D; N++)
        (X = N >> 2), (this._Ke[X][N % 4] = R[N]), (this._Kd[$ - X][N % 4] = R[N]);
      for (var ke = 0, be = D, C; be < G; ) {
        if (
          ((C = R[D - 1]),
          (R[0] ^=
            (h[(C >> 16) & 255] << 24) ^
            (h[(C >> 8) & 255] << 16) ^
            (h[C & 255] << 8) ^
            h[(C >> 24) & 255] ^
            (u[ke] << 24)),
          (ke += 1),
          D != 8)
        )
          for (var N = 1; N < D; N++) R[N] ^= R[N - 1];
        else {
          for (var N = 1; N < D / 2; N++) R[N] ^= R[N - 1];
          (C = R[D / 2 - 1]),
            (R[D / 2] ^=
              h[C & 255] ^
              (h[(C >> 8) & 255] << 8) ^
              (h[(C >> 16) & 255] << 16) ^
              (h[(C >> 24) & 255] << 24));
          for (var N = D / 2 + 1; N < D; N++) R[N] ^= R[N - 1];
        }
        for (var N = 0, ee, Ee; N < D && be < G; )
          (ee = be >> 2),
            (Ee = be % 4),
            (this._Ke[ee][Ee] = R[N]),
            (this._Kd[$ - ee][Ee] = R[N++]),
            be++;
      }
      for (var ee = 1; ee < $; ee++)
        for (var Ee = 0; Ee < 4; Ee++)
          (C = this._Kd[ee][Ee]),
            (this._Kd[ee][Ee] =
              k[(C >> 24) & 255] ^ P[(C >> 16) & 255] ^ w[(C >> 8) & 255] ^ E[C & 255]);
    }),
      (j.prototype.encrypt = function ($) {
        if ($.length != 16) throw new Error('invalid plaintext size (must be 16 bytes)');
        for (var N = this._Ke.length - 1, G = [0, 0, 0, 0], D = U($), R = 0; R < 4; R++)
          D[R] ^= this._Ke[0][R];
        for (var X = 1; X < N; X++) {
          for (var R = 0; R < 4; R++)
            G[R] =
              y[(D[R] >> 24) & 255] ^
              p[(D[(R + 1) % 4] >> 16) & 255] ^
              x[(D[(R + 2) % 4] >> 8) & 255] ^
              S[D[(R + 3) % 4] & 255] ^
              this._Ke[X][R];
          D = G.slice();
        }
        for (var ke = o(16), be, R = 0; R < 4; R++)
          (be = this._Ke[N][R]),
            (ke[4 * R] = (h[(D[R] >> 24) & 255] ^ (be >> 24)) & 255),
            (ke[4 * R + 1] = (h[(D[(R + 1) % 4] >> 16) & 255] ^ (be >> 16)) & 255),
            (ke[4 * R + 2] = (h[(D[(R + 2) % 4] >> 8) & 255] ^ (be >> 8)) & 255),
            (ke[4 * R + 3] = (h[D[(R + 3) % 4] & 255] ^ be) & 255);
        return ke;
      }),
      (j.prototype.decrypt = function ($) {
        if ($.length != 16) throw new Error('invalid ciphertext size (must be 16 bytes)');
        for (var N = this._Kd.length - 1, G = [0, 0, 0, 0], D = U($), R = 0; R < 4; R++)
          D[R] ^= this._Kd[0][R];
        for (var X = 1; X < N; X++) {
          for (var R = 0; R < 4; R++)
            G[R] =
              _[(D[R] >> 24) & 255] ^
              m[(D[(R + 3) % 4] >> 16) & 255] ^
              I[(D[(R + 2) % 4] >> 8) & 255] ^
              A[D[(R + 1) % 4] & 255] ^
              this._Kd[X][R];
          D = G.slice();
        }
        for (var ke = o(16), be, R = 0; R < 4; R++)
          (be = this._Kd[N][R]),
            (ke[4 * R] = (b[(D[R] >> 24) & 255] ^ (be >> 24)) & 255),
            (ke[4 * R + 1] = (b[(D[(R + 3) % 4] >> 16) & 255] ^ (be >> 16)) & 255),
            (ke[4 * R + 2] = (b[(D[(R + 2) % 4] >> 8) & 255] ^ (be >> 8)) & 255),
            (ke[4 * R + 3] = (b[D[(R + 1) % 4] & 255] ^ be) & 255);
        return ke;
      });
    var z = function ($) {
      if (!(this instanceof z)) throw Error('AES must be instanitated with `new`');
      (this.description = 'Electronic Code Block'), (this.name = 'ecb'), (this._aes = new j($));
    };
    (z.prototype.encrypt = function ($) {
      if ((($ = i($)), $.length % 16 !== 0))
        throw new Error('invalid plaintext size (must be multiple of 16 bytes)');
      for (var N = o($.length), G = o(16), D = 0; D < $.length; D += 16)
        c($, G, 0, D, D + 16), (G = this._aes.encrypt(G)), c(G, N, D);
      return N;
    }),
      (z.prototype.decrypt = function ($) {
        if ((($ = i($)), $.length % 16 !== 0))
          throw new Error('invalid ciphertext size (must be multiple of 16 bytes)');
        for (var N = o($.length), G = o(16), D = 0; D < $.length; D += 16)
          c($, G, 0, D, D + 16), (G = this._aes.decrypt(G)), c(G, N, D);
        return N;
      });
    var V = function ($, N) {
      if (!(this instanceof V)) throw Error('AES must be instanitated with `new`');
      if (((this.description = 'Cipher Block Chaining'), (this.name = 'cbc'), !N)) N = o(16);
      else if (N.length != 16)
        throw new Error('invalid initialation vector size (must be 16 bytes)');
      (this._lastCipherblock = i(N, !0)), (this._aes = new j($));
    };
    (V.prototype.encrypt = function ($) {
      if ((($ = i($)), $.length % 16 !== 0))
        throw new Error('invalid plaintext size (must be multiple of 16 bytes)');
      for (var N = o($.length), G = o(16), D = 0; D < $.length; D += 16) {
        c($, G, 0, D, D + 16);
        for (var R = 0; R < 16; R++) G[R] ^= this._lastCipherblock[R];
        (this._lastCipherblock = this._aes.encrypt(G)), c(this._lastCipherblock, N, D);
      }
      return N;
    }),
      (V.prototype.decrypt = function ($) {
        if ((($ = i($)), $.length % 16 !== 0))
          throw new Error('invalid ciphertext size (must be multiple of 16 bytes)');
        for (var N = o($.length), G = o(16), D = 0; D < $.length; D += 16) {
          c($, G, 0, D, D + 16), (G = this._aes.decrypt(G));
          for (var R = 0; R < 16; R++) N[D + R] = G[R] ^ this._lastCipherblock[R];
          c($, this._lastCipherblock, 0, D, D + 16);
        }
        return N;
      });
    var J = function ($, N, G) {
      if (!(this instanceof J)) throw Error('AES must be instanitated with `new`');
      if (((this.description = 'Cipher Feedback'), (this.name = 'cfb'), !N)) N = o(16);
      else if (N.length != 16)
        throw new Error('invalid initialation vector size (must be 16 size)');
      G || (G = 1),
        (this.segmentSize = G),
        (this._shiftRegister = i(N, !0)),
        (this._aes = new j($));
    };
    (J.prototype.encrypt = function ($) {
      if ($.length % this.segmentSize != 0)
        throw new Error('invalid plaintext size (must be segmentSize bytes)');
      for (var N = i($, !0), G, D = 0; D < N.length; D += this.segmentSize) {
        G = this._aes.encrypt(this._shiftRegister);
        for (var R = 0; R < this.segmentSize; R++) N[D + R] ^= G[R];
        c(this._shiftRegister, this._shiftRegister, 0, this.segmentSize),
          c(N, this._shiftRegister, 16 - this.segmentSize, D, D + this.segmentSize);
      }
      return N;
    }),
      (J.prototype.decrypt = function ($) {
        if ($.length % this.segmentSize != 0)
          throw new Error('invalid ciphertext size (must be segmentSize bytes)');
        for (var N = i($, !0), G, D = 0; D < N.length; D += this.segmentSize) {
          G = this._aes.encrypt(this._shiftRegister);
          for (var R = 0; R < this.segmentSize; R++) N[D + R] ^= G[R];
          c(this._shiftRegister, this._shiftRegister, 0, this.segmentSize),
            c($, this._shiftRegister, 16 - this.segmentSize, D, D + this.segmentSize);
        }
        return N;
      });
    var re = function ($, N) {
      if (!(this instanceof re)) throw Error('AES must be instanitated with `new`');
      if (((this.description = 'Output Feedback'), (this.name = 'ofb'), !N)) N = o(16);
      else if (N.length != 16)
        throw new Error('invalid initialation vector size (must be 16 bytes)');
      (this._lastPrecipher = i(N, !0)), (this._lastPrecipherIndex = 16), (this._aes = new j($));
    };
    (re.prototype.encrypt = function ($) {
      for (var N = i($, !0), G = 0; G < N.length; G++)
        this._lastPrecipherIndex === 16 &&
          ((this._lastPrecipher = this._aes.encrypt(this._lastPrecipher)),
          (this._lastPrecipherIndex = 0)),
          (N[G] ^= this._lastPrecipher[this._lastPrecipherIndex++]);
      return N;
    }),
      (re.prototype.decrypt = re.prototype.encrypt);
    var de = function ($) {
      if (!(this instanceof de)) throw Error('Counter must be instanitated with `new`');
      $ !== 0 && !$ && ($ = 1),
        typeof $ == 'number' ? ((this._counter = o(16)), this.setValue($)) : this.setBytes($);
    };
    (de.prototype.setValue = function ($) {
      if (typeof $ != 'number' || parseInt($) != $)
        throw new Error('invalid counter value (must be an integer)');
      for (var N = 15; N >= 0; --N) (this._counter[N] = $ % 256), ($ = $ >> 8);
    }),
      (de.prototype.setBytes = function ($) {
        if ((($ = i($, !0)), $.length != 16))
          throw new Error('invalid counter bytes size (must be 16 bytes)');
        this._counter = $;
      }),
      (de.prototype.increment = function () {
        for (var $ = 15; $ >= 0; $--)
          if (this._counter[$] === 255) this._counter[$] = 0;
          else {
            this._counter[$]++;
            break;
          }
      });
    var we = function ($, N) {
      if (!(this instanceof we)) throw Error('AES must be instanitated with `new`');
      (this.description = 'Counter'),
        (this.name = 'ctr'),
        N instanceof de || (N = new de(N)),
        (this._counter = N),
        (this._remainingCounter = null),
        (this._remainingCounterIndex = 16),
        (this._aes = new j($));
    };
    (we.prototype.encrypt = function ($) {
      for (var N = i($, !0), G = 0; G < N.length; G++)
        this._remainingCounterIndex === 16 &&
          ((this._remainingCounter = this._aes.encrypt(this._counter._counter)),
          (this._remainingCounterIndex = 0),
          this._counter.increment()),
          (N[G] ^= this._remainingCounter[this._remainingCounterIndex++]);
      return N;
    }),
      (we.prototype.decrypt = we.prototype.encrypt);
    function Oe($) {
      $ = i($, !0);
      var N = 16 - ($.length % 16),
        G = o($.length + N);
      c($, G);
      for (var D = $.length; D < G.length; D++) G[D] = N;
      return G;
    }
    function Pe($) {
      if ((($ = i($, !0)), $.length < 16)) throw new Error('PKCS#7 invalid length');
      var N = $[$.length - 1];
      if (N > 16) throw new Error('PKCS#7 padding byte out of range');
      for (var G = $.length - N, D = 0; D < N; D++)
        if ($[G + D] !== N) throw new Error('PKCS#7 invalid padding byte');
      var R = o(G);
      return c($, R, 0, 0, G), R;
    }
    var Ie = {
      AES: j,
      Counter: de,
      ModeOfOperation: { ecb: z, cbc: V, cfb: J, ofb: re, ctr: we },
      utils: { hex: l, utf8: d },
      padding: { pkcs7: { pad: Oe, strip: Pe } },
      _arrayTest: { coerceArray: i, createArray: o, copyArray: c },
    };
    e.exports = Ie;
  })();
})(od);
var Y4 = od.exports;
const Ut = Ht(Y4),
  cd = 'json-wallets/5.7.0';
function Xr(e) {
  return typeof e == 'string' && e.substring(0, 2) !== '0x' && (e = '0x' + e), Qe(e);
}
function Jn(e, t) {
  for (e = String(e); e.length < t; ) e = '0' + e;
  return e;
}
function Qc(e) {
  return typeof e == 'string' ? Rf(e, L2.NFKC) : Qe(e);
}
function Ve(e, t) {
  let r = e;
  const n = t.toLowerCase().split('/');
  for (let s = 0; s < n.length; s++) {
    let i = null;
    for (const o in r)
      if (o.toLowerCase() === n[s]) {
        i = r[o];
        break;
      }
    if (i === null) return null;
    r = i;
  }
  return r;
}
function Z4(e) {
  const t = Qe(e);
  (t[6] = (t[6] & 15) | 64), (t[8] = (t[8] & 63) | 128);
  const r = Xt(t);
  return [
    r.substring(2, 10),
    r.substring(10, 14),
    r.substring(14, 18),
    r.substring(18, 22),
    r.substring(22, 34),
  ].join('-');
}
const J4 = new Mn(cd);
class X4 extends Ff {
  isCrowdsaleAccount(t) {
    return !!(t && t._isCrowdsaleAccount);
  }
}
function ld(e, t) {
  const r = JSON.parse(e);
  t = Qc(t);
  const n = xs(Ve(r, 'ethaddr')),
    s = Xr(Ve(r, 'encseed'));
  (!s || s.length % 16 !== 0) && J4.throwArgumentError('invalid encseed', 'json', e);
  const i = Qe(Uf(t, t, 2e3, 32, 'sha256')).slice(0, 16),
    o = s.slice(0, 16),
    c = s.slice(16),
    d = new Ut.ModeOfOperation.cbc(i, o),
    l = Ut.padding.pkcs7.strip(Qe(d.decrypt(c)));
  let f = '';
  for (let b = 0; b < l.length; b++) f += String.fromCharCode(l[b]);
  const u = Rf(f),
    h = ps(u);
  return new X4({ _isCrowdsaleAccount: !0, address: n, privateKey: h });
}
function ud(e) {
  let t = null;
  try {
    t = JSON.parse(e);
  } catch {
    return !1;
  }
  return t.encseed && t.ethaddr;
}
function fd(e) {
  let t = null;
  try {
    t = JSON.parse(e);
  } catch {
    return !1;
  }
  return !(!t.version || parseInt(t.version) !== t.version || parseInt(t.version) !== 3);
}
var dd = { exports: {} };
(function (e, t) {
  (function (r) {
    function s(p) {
      const x = new Uint32Array([
        1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748,
        2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206,
        2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122,
        1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891,
        3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700,
        1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
        3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877,
        958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452,
        2361852424, 2428436474, 2756734187, 3204031479, 3329325298,
      ]);
      let S = 1779033703,
        _ = 3144134277,
        m = 1013904242,
        I = 2773480762,
        A = 1359893119,
        k = 2600822924,
        P = 528734635,
        w = 1541459225;
      const E = new Uint32Array(64);
      function U(we) {
        let Oe = 0,
          Pe = we.length;
        for (; Pe >= 64; ) {
          let Ie = S,
            $ = _,
            N = m,
            G = I,
            D = A,
            R = k,
            X = P,
            ke = w,
            be,
            C,
            ee,
            Ee,
            St;
          for (C = 0; C < 16; C++)
            (ee = Oe + C * 4),
              (E[C] =
                ((we[ee] & 255) << 24) |
                ((we[ee + 1] & 255) << 16) |
                ((we[ee + 2] & 255) << 8) |
                (we[ee + 3] & 255));
          for (C = 16; C < 64; C++)
            (be = E[C - 2]),
              (Ee = ((be >>> 17) | (be << 15)) ^ ((be >>> 19) | (be << 13)) ^ (be >>> 10)),
              (be = E[C - 15]),
              (St = ((be >>> 7) | (be << 25)) ^ ((be >>> 18) | (be << 14)) ^ (be >>> 3)),
              (E[C] = (((Ee + E[C - 7]) | 0) + ((St + E[C - 16]) | 0)) | 0);
          for (C = 0; C < 64; C++)
            (Ee =
              ((((((D >>> 6) | (D << 26)) ^ ((D >>> 11) | (D << 21)) ^ ((D >>> 25) | (D << 7))) +
                ((D & R) ^ (~D & X))) |
                0) +
                ((ke + ((x[C] + E[C]) | 0)) | 0)) |
              0),
              (St =
                ((((Ie >>> 2) | (Ie << 30)) ^
                  ((Ie >>> 13) | (Ie << 19)) ^
                  ((Ie >>> 22) | (Ie << 10))) +
                  ((Ie & $) ^ (Ie & N) ^ ($ & N))) |
                0),
              (ke = X),
              (X = R),
              (R = D),
              (D = (G + Ee) | 0),
              (G = N),
              (N = $),
              ($ = Ie),
              (Ie = (Ee + St) | 0);
          (S = (S + Ie) | 0),
            (_ = (_ + $) | 0),
            (m = (m + N) | 0),
            (I = (I + G) | 0),
            (A = (A + D) | 0),
            (k = (k + R) | 0),
            (P = (P + X) | 0),
            (w = (w + ke) | 0),
            (Oe += 64),
            (Pe -= 64);
        }
      }
      U(p);
      let j,
        z = p.length % 64,
        V = (p.length / 536870912) | 0,
        J = p.length << 3,
        re = z < 56 ? 56 : 120,
        de = p.slice(p.length - z, p.length);
      for (de.push(128), j = z + 1; j < re; j++) de.push(0);
      return (
        de.push((V >>> 24) & 255),
        de.push((V >>> 16) & 255),
        de.push((V >>> 8) & 255),
        de.push((V >>> 0) & 255),
        de.push((J >>> 24) & 255),
        de.push((J >>> 16) & 255),
        de.push((J >>> 8) & 255),
        de.push((J >>> 0) & 255),
        U(de),
        [
          (S >>> 24) & 255,
          (S >>> 16) & 255,
          (S >>> 8) & 255,
          (S >>> 0) & 255,
          (_ >>> 24) & 255,
          (_ >>> 16) & 255,
          (_ >>> 8) & 255,
          (_ >>> 0) & 255,
          (m >>> 24) & 255,
          (m >>> 16) & 255,
          (m >>> 8) & 255,
          (m >>> 0) & 255,
          (I >>> 24) & 255,
          (I >>> 16) & 255,
          (I >>> 8) & 255,
          (I >>> 0) & 255,
          (A >>> 24) & 255,
          (A >>> 16) & 255,
          (A >>> 8) & 255,
          (A >>> 0) & 255,
          (k >>> 24) & 255,
          (k >>> 16) & 255,
          (k >>> 8) & 255,
          (k >>> 0) & 255,
          (P >>> 24) & 255,
          (P >>> 16) & 255,
          (P >>> 8) & 255,
          (P >>> 0) & 255,
          (w >>> 24) & 255,
          (w >>> 16) & 255,
          (w >>> 8) & 255,
          (w >>> 0) & 255,
        ]
      );
    }
    function i(p, x, S) {
      p = p.length <= 64 ? p : s(p);
      const _ = 64 + x.length + 4,
        m = new Array(_),
        I = new Array(64);
      let A,
        k = [];
      for (A = 0; A < 64; A++) m[A] = 54;
      for (A = 0; A < p.length; A++) m[A] ^= p[A];
      for (A = 0; A < x.length; A++) m[64 + A] = x[A];
      for (A = _ - 4; A < _; A++) m[A] = 0;
      for (A = 0; A < 64; A++) I[A] = 92;
      for (A = 0; A < p.length; A++) I[A] ^= p[A];
      function P() {
        for (let w = _ - 1; w >= _ - 4; w--) {
          if ((m[w]++, m[w] <= 255)) return;
          m[w] = 0;
        }
      }
      for (; S >= 32; ) P(), (k = k.concat(s(I.concat(s(m))))), (S -= 32);
      return S > 0 && (P(), (k = k.concat(s(I.concat(s(m))).slice(0, S)))), k;
    }
    function o(p, x, S, _, m) {
      let I;
      for (f(p, (2 * S - 1) * 16, m, 0, 16), I = 0; I < 2 * S; I++)
        l(p, I * 16, m, 16), d(m, _), f(m, 0, p, x + I * 16, 16);
      for (I = 0; I < S; I++) f(p, x + I * 2 * 16, p, I * 16, 16);
      for (I = 0; I < S; I++) f(p, x + (I * 2 + 1) * 16, p, (I + S) * 16, 16);
    }
    function c(p, x) {
      return (p << x) | (p >>> (32 - x));
    }
    function d(p, x) {
      f(p, 0, x, 0, 16);
      for (let S = 8; S > 0; S -= 2)
        (x[4] ^= c(x[0] + x[12], 7)),
          (x[8] ^= c(x[4] + x[0], 9)),
          (x[12] ^= c(x[8] + x[4], 13)),
          (x[0] ^= c(x[12] + x[8], 18)),
          (x[9] ^= c(x[5] + x[1], 7)),
          (x[13] ^= c(x[9] + x[5], 9)),
          (x[1] ^= c(x[13] + x[9], 13)),
          (x[5] ^= c(x[1] + x[13], 18)),
          (x[14] ^= c(x[10] + x[6], 7)),
          (x[2] ^= c(x[14] + x[10], 9)),
          (x[6] ^= c(x[2] + x[14], 13)),
          (x[10] ^= c(x[6] + x[2], 18)),
          (x[3] ^= c(x[15] + x[11], 7)),
          (x[7] ^= c(x[3] + x[15], 9)),
          (x[11] ^= c(x[7] + x[3], 13)),
          (x[15] ^= c(x[11] + x[7], 18)),
          (x[1] ^= c(x[0] + x[3], 7)),
          (x[2] ^= c(x[1] + x[0], 9)),
          (x[3] ^= c(x[2] + x[1], 13)),
          (x[0] ^= c(x[3] + x[2], 18)),
          (x[6] ^= c(x[5] + x[4], 7)),
          (x[7] ^= c(x[6] + x[5], 9)),
          (x[4] ^= c(x[7] + x[6], 13)),
          (x[5] ^= c(x[4] + x[7], 18)),
          (x[11] ^= c(x[10] + x[9], 7)),
          (x[8] ^= c(x[11] + x[10], 9)),
          (x[9] ^= c(x[8] + x[11], 13)),
          (x[10] ^= c(x[9] + x[8], 18)),
          (x[12] ^= c(x[15] + x[14], 7)),
          (x[13] ^= c(x[12] + x[15], 9)),
          (x[14] ^= c(x[13] + x[12], 13)),
          (x[15] ^= c(x[14] + x[13], 18));
      for (let S = 0; S < 16; ++S) p[S] += x[S];
    }
    function l(p, x, S, _) {
      for (let m = 0; m < _; m++) S[m] ^= p[x + m];
    }
    function f(p, x, S, _, m) {
      for (; m--; ) S[_++] = p[x++];
    }
    function u(p) {
      if (!p || typeof p.length != 'number') return !1;
      for (let x = 0; x < p.length; x++) {
        const S = p[x];
        if (typeof S != 'number' || S % 1 || S < 0 || S >= 256) return !1;
      }
      return !0;
    }
    function h(p, x) {
      if (typeof p != 'number' || p % 1) throw new Error('invalid ' + x);
      return p;
    }
    function b(p, x, S, _, m, I, A) {
      if (
        ((S = h(S, 'N')),
        (_ = h(_, 'r')),
        (m = h(m, 'p')),
        (I = h(I, 'dkLen')),
        S === 0 || S & (S - 1))
      )
        throw new Error('N must be power of 2');
      if (S > 2147483647 / 128 / _) throw new Error('N too large');
      if (_ > 2147483647 / 128 / m) throw new Error('r too large');
      if (!u(p)) throw new Error('password must be an array or buffer');
      if (((p = Array.prototype.slice.call(p)), !u(x)))
        throw new Error('salt must be an array or buffer');
      x = Array.prototype.slice.call(x);
      let k = i(p, x, m * 128 * _);
      const P = new Uint32Array(m * 32 * _);
      for (let D = 0; D < P.length; D++) {
        const R = D * 4;
        P[D] =
          ((k[R + 3] & 255) << 24) |
          ((k[R + 2] & 255) << 16) |
          ((k[R + 1] & 255) << 8) |
          ((k[R + 0] & 255) << 0);
      }
      const w = new Uint32Array(64 * _),
        E = new Uint32Array(32 * _ * S),
        U = 32 * _,
        j = new Uint32Array(16),
        z = new Uint32Array(16),
        V = m * S * 2;
      let J = 0,
        re = null,
        de = !1,
        we = 0,
        Oe = 0,
        Pe,
        Ie;
      const $ = A ? parseInt(1e3 / _) : 4294967295,
        N = typeof setImmediate < 'u' ? setImmediate : setTimeout,
        G = function () {
          if (de) return A(new Error('cancelled'), J / V);
          let D;
          switch (we) {
            case 0:
              (Ie = Oe * 32 * _), f(P, Ie, w, 0, U), (we = 1), (Pe = 0);
            case 1:
              (D = S - Pe), D > $ && (D = $);
              for (let X = 0; X < D; X++) f(w, 0, E, (Pe + X) * U, U), o(w, U, _, j, z);
              if (((Pe += D), (J += D), A)) {
                const X = parseInt((1e3 * J) / V);
                if (X !== re) {
                  if (((de = A(null, J / V)), de)) break;
                  re = X;
                }
              }
              if (Pe < S) break;
              (Pe = 0), (we = 2);
            case 2:
              (D = S - Pe), D > $ && (D = $);
              for (let X = 0; X < D; X++) {
                const ke = (2 * _ - 1) * 16,
                  be = w[ke] & (S - 1);
                l(E, be * U, w, U), o(w, U, _, j, z);
              }
              if (((Pe += D), (J += D), A)) {
                const X = parseInt((1e3 * J) / V);
                if (X !== re) {
                  if (((de = A(null, J / V)), de)) break;
                  re = X;
                }
              }
              if (Pe < S) break;
              if ((f(w, 0, P, Ie, U), Oe++, Oe < m)) {
                we = 0;
                break;
              }
              k = [];
              for (let X = 0; X < P.length; X++)
                k.push((P[X] >> 0) & 255),
                  k.push((P[X] >> 8) & 255),
                  k.push((P[X] >> 16) & 255),
                  k.push((P[X] >> 24) & 255);
              const R = i(p, k, I);
              return A && A(null, 1, R), R;
          }
          A && N(G);
        };
      if (!A)
        for (;;) {
          const D = G();
          if (D != null) return D;
        }
      G();
    }
    const y = {
      scrypt: function (p, x, S, _, m, I, A) {
        return new Promise(function (k, P) {
          let w = 0;
          A && A(0),
            b(p, x, S, _, m, I, function (E, U, j) {
              if (E) P(E);
              else if (j) A && w !== 1 && A(1), k(new Uint8Array(j));
              else if (A && U !== w) return (w = U), A(U);
            });
        });
      },
      syncScrypt: function (p, x, S, _, m, I) {
        return new Uint8Array(b(p, x, S, _, m, I));
      },
    };
    e.exports = y;
  })();
})(dd);
var e3 = dd.exports;
const Yc = Ht(e3);
var t3 = function (e, t, r, n) {
  function s(i) {
    return i instanceof r
      ? i
      : new r(function (o) {
          o(i);
        });
  }
  return new (r || (r = Promise))(function (i, o) {
    function c(f) {
      try {
        l(n.next(f));
      } catch (u) {
        o(u);
      }
    }
    function d(f) {
      try {
        l(n.throw(f));
      } catch (u) {
        o(u);
      }
    }
    function l(f) {
      f.done ? i(f.value) : s(f.value).then(c, d);
    }
    l((n = n.apply(e, t || [])).next());
  });
};
const Qo = new Mn(cd);
function il(e) {
  return e != null && e.mnemonic && e.mnemonic.phrase;
}
class r3 extends Ff {
  isKeystoreAccount(t) {
    return !!(t && t._isKeystoreAccount);
  }
}
function n3(e, t, r) {
  if (Ve(e, 'crypto/cipher') === 'aes-128-ctr') {
    const s = Xr(Ve(e, 'crypto/cipherparams/iv')),
      i = new Ut.Counter(s),
      o = new Ut.ModeOfOperation.ctr(t, i);
    return Qe(o.decrypt(r));
  }
  return null;
}
function hd(e, t) {
  const r = Xr(Ve(e, 'crypto/ciphertext'));
  if (Xt(ps(zc([t.slice(16, 32), r]))).substring(2) !== Ve(e, 'crypto/mac').toLowerCase())
    throw new Error('invalid password');
  const s = n3(e, t.slice(0, 16), r);
  s ||
    Qo.throwError('unsupported cipher', Mn.errors.UNSUPPORTED_OPERATION, { operation: 'decrypt' });
  const i = t.slice(32, 64),
    o = ls(s);
  if (e.address) {
    let d = e.address.toLowerCase();
    if ((d.substring(0, 2) !== '0x' && (d = '0x' + d), xs(d) !== o))
      throw new Error('address mismatch');
  }
  const c = { _isKeystoreAccount: !0, address: o, privateKey: Xt(s) };
  if (Ve(e, 'x-ethers/version') === '0.1') {
    const d = Xr(Ve(e, 'x-ethers/mnemonicCiphertext')),
      l = Xr(Ve(e, 'x-ethers/mnemonicCounter')),
      f = new Ut.Counter(l),
      u = new Ut.ModeOfOperation.ctr(i, f),
      h = Ve(e, 'x-ethers/path') || bs,
      b = Ve(e, 'x-ethers/locale') || 'en',
      y = Qe(u.decrypt(d));
    try {
      const p = jf(y, b),
        x = pa.fromMnemonic(p, null, b).derivePath(h);
      if (x.privateKey != c.privateKey) throw new Error('mnemonic mismatch');
      c.mnemonic = x.mnemonic;
    } catch (p) {
      if (p.code !== Mn.errors.INVALID_ARGUMENT || p.argument !== 'wordlist') throw p;
    }
  }
  return new r3(c);
}
function xd(e, t, r, n, s) {
  return Qe(Uf(e, t, r, n, s));
}
function s3(e, t, r, n, s) {
  return Promise.resolve(xd(e, t, r, n, s));
}
function pd(e, t, r, n, s) {
  const i = Qc(t),
    o = Ve(e, 'crypto/kdf');
  if (o && typeof o == 'string') {
    const c = function (d, l) {
      return Qo.throwArgumentError('invalid key-derivation function parameters', d, l);
    };
    if (o.toLowerCase() === 'scrypt') {
      const d = Xr(Ve(e, 'crypto/kdfparams/salt')),
        l = parseInt(Ve(e, 'crypto/kdfparams/n')),
        f = parseInt(Ve(e, 'crypto/kdfparams/r')),
        u = parseInt(Ve(e, 'crypto/kdfparams/p'));
      (!l || !f || !u) && c('kdf', o), l & (l - 1) && c('N', l);
      const h = parseInt(Ve(e, 'crypto/kdfparams/dklen'));
      return h !== 32 && c('dklen', h), n(i, d, l, f, u, 64, s);
    } else if (o.toLowerCase() === 'pbkdf2') {
      const d = Xr(Ve(e, 'crypto/kdfparams/salt'));
      let l = null;
      const f = Ve(e, 'crypto/kdfparams/prf');
      f === 'hmac-sha256' ? (l = 'sha256') : f === 'hmac-sha512' ? (l = 'sha512') : c('prf', f);
      const u = parseInt(Ve(e, 'crypto/kdfparams/c')),
        h = parseInt(Ve(e, 'crypto/kdfparams/dklen'));
      return h !== 32 && c('dklen', h), r(i, d, u, h, l);
    }
  }
  return Qo.throwArgumentError('unsupported key-derivation function', 'kdf', o);
}
function a3(e, t) {
  const r = JSON.parse(e),
    n = pd(r, t, xd, Yc.syncScrypt);
  return hd(r, n);
}
function i3(e, t, r) {
  return t3(this, void 0, void 0, function* () {
    const n = JSON.parse(e),
      s = yield pd(n, t, s3, Yc.scrypt, r);
    return hd(n, s);
  });
}
function o3(e, t, r, n) {
  try {
    if (xs(e.address) !== ls(e.privateKey)) throw new Error('address/privateKey mismatch');
    if (il(e)) {
      const x = e.mnemonic;
      if (
        pa.fromMnemonic(x.phrase, null, x.locale).derivePath(x.path || bs).privateKey !=
        e.privateKey
      )
        throw new Error('mnemonic mismatch');
    }
  } catch (x) {
    return Promise.reject(x);
  }
  typeof r == 'function' && !n && ((n = r), (r = {})), r || (r = {});
  const s = Qe(e.privateKey),
    i = Qc(t);
  let o = null,
    c = null,
    d = null;
  if (il(e)) {
    const x = e.mnemonic;
    (o = Qe(M2(x.phrase, x.locale || 'en'))), (c = x.path || bs), (d = x.locale || 'en');
  }
  let l = r.client;
  l || (l = 'ethers.js');
  let f = null;
  r.salt ? (f = Qe(r.salt)) : (f = ns(32));
  let u = null;
  if (r.iv) {
    if (((u = Qe(r.iv)), u.length !== 16)) throw new Error('invalid iv');
  } else u = ns(16);
  let h = null;
  if (r.uuid) {
    if (((h = Qe(r.uuid)), h.length !== 16)) throw new Error('invalid uuid');
  } else h = ns(16);
  let b = 1 << 17,
    y = 8,
    p = 1;
  return (
    r.scrypt &&
      (r.scrypt.N && (b = r.scrypt.N),
      r.scrypt.r && (y = r.scrypt.r),
      r.scrypt.p && (p = r.scrypt.p)),
    Yc.scrypt(i, f, b, y, p, 64, n).then((x) => {
      x = Qe(x);
      const S = x.slice(0, 16),
        _ = x.slice(16, 32),
        m = x.slice(32, 64),
        I = new Ut.Counter(u),
        A = new Ut.ModeOfOperation.ctr(S, I),
        k = Qe(A.encrypt(s)),
        P = ps(zc([_, k])),
        w = {
          address: e.address.substring(2).toLowerCase(),
          id: Z4(h),
          version: 3,
          crypto: {
            cipher: 'aes-128-ctr',
            cipherparams: { iv: Xt(u).substring(2) },
            ciphertext: Xt(k).substring(2),
            kdf: 'scrypt',
            kdfparams: { salt: Xt(f).substring(2), n: b, dklen: 32, p, r: y },
            mac: P.substring(2),
          },
        };
      if (o) {
        const E = ns(16),
          U = new Ut.Counter(E),
          j = new Ut.ModeOfOperation.ctr(m, U),
          z = Qe(j.encrypt(o)),
          V = new Date(),
          J =
            V.getUTCFullYear() +
            '-' +
            Jn(V.getUTCMonth() + 1, 2) +
            '-' +
            Jn(V.getUTCDate(), 2) +
            'T' +
            Jn(V.getUTCHours(), 2) +
            '-' +
            Jn(V.getUTCMinutes(), 2) +
            '-' +
            Jn(V.getUTCSeconds(), 2) +
            '.0Z';
        w['x-ethers'] = {
          client: l,
          gethFilename: 'UTC--' + J + '--' + w.address,
          mnemonicCounter: Xt(E).substring(2),
          mnemonicCiphertext: Xt(z).substring(2),
          path: c,
          locale: d,
          version: '0.1',
        };
      }
      return JSON.stringify(w);
    })
  );
}
function c3(e, t, r) {
  if (ud(e)) {
    r && r(0);
    const n = ld(e, t);
    return r && r(1), Promise.resolve(n);
  }
  return fd(e) ? i3(e, t, r) : Promise.reject(new Error('invalid JSON wallet'));
}
function l3(e, t) {
  if (ud(e)) return ld(e, t);
  if (fd(e)) return a3(e, t);
  throw new Error('invalid JSON wallet');
}
const u3 = 'wallet/5.7.0';
var ol = function (e, t, r, n) {
  function s(i) {
    return i instanceof r
      ? i
      : new r(function (o) {
          o(i);
        });
  }
  return new (r || (r = Promise))(function (i, o) {
    function c(f) {
      try {
        l(n.next(f));
      } catch (u) {
        o(u);
      }
    }
    function d(f) {
      try {
        l(n.throw(f));
      } catch (u) {
        o(u);
      }
    }
    function l(f) {
      f.done ? i(f.value) : s(f.value).then(c, d);
    }
    l((n = n.apply(e, t || [])).next());
  });
};
const cn = new Mn(u3);
function f3(e) {
  return e != null && D2(e.privateKey, 32) && e.address != null;
}
function d3(e) {
  const t = e.mnemonic;
  return t && t.phrase;
}
class jr extends N2 {
  constructor(t, r) {
    if ((super(), f3(t))) {
      const n = new gi(t.privateKey);
      if (
        (qt(this, '_signingKey', () => n),
        qt(this, 'address', ls(this.publicKey)),
        this.address !== xs(t.address) &&
          cn.throwArgumentError('privateKey/address mismatch', 'privateKey', '[REDACTED]'),
        d3(t))
      ) {
        const s = t.mnemonic;
        qt(this, '_mnemonic', () => ({
          phrase: s.phrase,
          path: s.path || bs,
          locale: s.locale || 'en',
        }));
        const i = this.mnemonic,
          o = pa.fromMnemonic(i.phrase, null, i.locale).derivePath(i.path);
        ls(o.privateKey) !== this.address &&
          cn.throwArgumentError('mnemonic/address mismatch', 'privateKey', '[REDACTED]');
      } else qt(this, '_mnemonic', () => null);
    } else {
      if (gi.isSigningKey(t))
        t.curve !== 'secp256k1' &&
          cn.throwArgumentError('unsupported curve; must be secp256k1', 'privateKey', '[REDACTED]'),
          qt(this, '_signingKey', () => t);
      else {
        typeof t == 'string' && t.match(/^[0-9a-f]*$/i) && t.length === 64 && (t = '0x' + t);
        const n = new gi(t);
        qt(this, '_signingKey', () => n);
      }
      qt(this, '_mnemonic', () => null), qt(this, 'address', ls(this.publicKey));
    }
    r && !R2.isProvider(r) && cn.throwArgumentError('invalid provider', 'provider', r),
      qt(this, 'provider', r || null);
  }
  get mnemonic() {
    return this._mnemonic();
  }
  get privateKey() {
    return this._signingKey().privateKey;
  }
  get publicKey() {
    return this._signingKey().publicKey;
  }
  getAddress() {
    return Promise.resolve(this.address);
  }
  connect(t) {
    return new jr(this, t);
  }
  signTransaction(t) {
    return U2(t).then((r) => {
      r.from != null &&
        (xs(r.from) !== this.address &&
          cn.throwArgumentError('transaction from address mismatch', 'transaction.from', t.from),
        delete r.from);
      const n = this._signingKey().signDigest(ps(rl(r)));
      return rl(r, n);
    });
  }
  signMessage(t) {
    return ol(this, void 0, void 0, function* () {
      return tl(this._signingKey().signDigest(F2(t)));
    });
  }
  _signTypedData(t, r, n) {
    return ol(this, void 0, void 0, function* () {
      const s = yield nl.resolveNames(
        t,
        r,
        n,
        (i) => (
          this.provider == null &&
            cn.throwError(
              'cannot resolve ENS names without a provider',
              Mn.errors.UNSUPPORTED_OPERATION,
              { operation: 'resolveName', value: i }
            ),
          this.provider.resolveName(i)
        )
      );
      return tl(this._signingKey().signDigest(nl.hash(s.domain, r, s.value)));
    });
  }
  encrypt(t, r, n) {
    if ((typeof r == 'function' && !n && ((n = r), (r = {})), n && typeof n != 'function'))
      throw new Error('invalid callback');
    return r || (r = {}), o3(this, t, r, n);
  }
  static createRandom(t) {
    let r = ns(16);
    t || (t = {}), t.extraEntropy && (r = Qe(k2(ps(zc([r, t.extraEntropy])), 0, 16)));
    const n = jf(r, t.locale);
    return jr.fromMnemonic(n, t.path, t.locale);
  }
  static fromEncryptedJson(t, r, n) {
    return c3(t, r, n).then((s) => new jr(s));
  }
  static fromEncryptedJsonSync(t, r) {
    return new jr(l3(t, r));
  }
  static fromMnemonic(t, r, n) {
    return r || (r = bs), new jr(pa.fromMnemonic(t, null, n).derivePath(r));
  }
}
class h3 {
  constructor() {
    F(this, 'addressTypes', [Q.EVM]);
  }
  generateKeypairFromPrivateKey(t) {
    const r = t.fold((n) => new jr(new Uint8Array(n)));
    return {
      publicKey: new Uint8Array(Ce.from(r.publicKey.slice(2), 'hex')),
      privateKey: new Uint8Array(Ce.from(r.privateKey.slice(2), 'hex')),
    };
  }
  generateKeypairFromSeed(t, r, n) {
    const s = t.fold((i) => new ja(i));
    try {
      const i = s.derivePathType(n, r);
      return { publicKey: i.publicKey, privateKey: i.secretKey };
    } finally {
      s.cleanup();
    }
  }
}
const x3 = (e) => {
    const t = e.decode.bind(e),
      r = e.encode.bind(e);
    return { decode: t, encode: r };
  },
  p3 = (e) => (t) => {
    const r = g2(e, t),
      { encode: n, decode: s } = x3(r),
      i = r;
    return (
      (i.decode = (o, c) => {
        const d = s(o, c);
        return v2(gt.from(d));
      }),
      (i.encode = (o, c, d) => {
        const l = w2(o, e);
        return n(l, c, d);
      }),
      i
    );
  },
  sB = p3(8);
rn.config({ EXPONENTIAL_AT: 1e3, DECIMAL_PLACES: 78 });
gt.alloc(64).fill(0);
const aB = (e) => e && 'version' in e,
  iB = (e, t) => {
    let r;
    if (t === 'base64') r = gt.from(e, 'base64');
    else if (t === 'bs58') r = vt.decode(e);
    else throw new Error('Unsupported encoding');
    return O2.deserialize(r);
  },
  oB = (e) => rn(e).dividedBy(Nf),
  cB = (e) => rn(e).multipliedBy(Nf);
function Yo(e) {
  if (!Number.isSafeInteger(e) || e < 0) throw new Error(`Wrong positive integer: ${e}`);
}
function b3(e) {
  if (typeof e != 'boolean') throw new Error(`Expected boolean, not ${e}`);
}
function bd(e, ...t) {
  if (!(e instanceof Uint8Array)) throw new TypeError('Expected Uint8Array');
  if (t.length > 0 && !t.includes(e.length))
    throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`);
}
function y3(e) {
  if (typeof e != 'function' || typeof e.create != 'function')
    throw new Error('Hash should be wrapped by utils.wrapConstructor');
  Yo(e.outputLen), Yo(e.blockLen);
}
function m3(e, t = !0) {
  if (e.destroyed) throw new Error('Hash instance has been destroyed');
  if (t && e.finished) throw new Error('Hash#digest() has already been called');
}
function g3(e, t) {
  bd(e);
  const r = t.outputLen;
  if (e.length < r) throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
const Qt = { number: Yo, bool: b3, bytes: bd, hash: y3, exists: m3, output: g3 };
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const v3 = (e) =>
    new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
  Si = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
  w3 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!w3) throw new Error('Non little-endian hardware is not supported');
Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
function S3(e) {
  if (typeof e != 'string') throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);
  return new TextEncoder().encode(e);
}
function Ha(e) {
  if ((typeof e == 'string' && (e = S3(e)), !(e instanceof Uint8Array)))
    throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);
  return e;
}
let yd = class {
  clone() {
    return this._cloneInto();
  }
};
function Ps(e) {
  const t = (n) => e().update(Ha(n)).digest(),
    r = e();
  return (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = () => e()), t;
}
function E3(e) {
  const t = (n, s) => e(s).update(Ha(n)).digest(),
    r = e({});
  return (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = (n) => e(n)), t;
}
function _3(e, t, r, n) {
  if (typeof e.setBigUint64 == 'function') return e.setBigUint64(t, r, n);
  const s = BigInt(32),
    i = BigInt(4294967295),
    o = Number((r >> s) & i),
    c = Number(r & i),
    d = n ? 4 : 0,
    l = n ? 0 : 4;
  e.setUint32(t + d, o, n), e.setUint32(t + l, c, n);
}
let $3 = class extends yd {
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
      (this.view = Si(this.buffer));
  }
  update(t) {
    Qt.exists(this);
    const { view: r, buffer: n, blockLen: s } = this;
    t = Ha(t);
    const i = t.length;
    for (let o = 0; o < i; ) {
      const c = Math.min(s - this.pos, i - o);
      if (c === s) {
        const d = Si(t);
        for (; s <= i - o; o += s) this.process(d, o);
        continue;
      }
      n.set(t.subarray(o, o + c), this.pos),
        (this.pos += c),
        (o += c),
        this.pos === s && (this.process(r, 0), (this.pos = 0));
    }
    return (this.length += t.length), this.roundClean(), this;
  }
  digestInto(t) {
    Qt.exists(this), Qt.output(t, this), (this.finished = !0);
    const { buffer: r, view: n, blockLen: s, isLE: i } = this;
    let { pos: o } = this;
    (r[o++] = 128),
      this.buffer.subarray(o).fill(0),
      this.padOffset > s - o && (this.process(n, 0), (o = 0));
    for (let u = o; u < s; u++) r[u] = 0;
    _3(n, s - 8, BigInt(this.length * 8), i), this.process(n, 0);
    const c = Si(t),
      d = this.outputLen;
    if (d % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
    const l = d / 4,
      f = this.get();
    if (l > f.length) throw new Error('_sha2: outputLen bigger than state');
    for (let u = 0; u < l; u++) c.setUint32(4 * u, f[u], i);
  }
  digest() {
    const { buffer: t, outputLen: r } = this;
    this.digestInto(t);
    const n = t.slice(0, r);
    return this.destroy(), n;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: r, buffer: n, length: s, finished: i, destroyed: o, pos: c } = this;
    return (
      (t.length = s), (t.pos = c), (t.finished = i), (t.destroyed = o), s % r && t.buffer.set(n), t
    );
  }
};
const Fs = BigInt(2 ** 32 - 1),
  Zo = BigInt(32);
function md(e, t = !1) {
  return t
    ? { h: Number(e & Fs), l: Number((e >> Zo) & Fs) }
    : { h: Number((e >> Zo) & Fs) | 0, l: Number(e & Fs) | 0 };
}
function A3(e, t = !1) {
  let r = new Uint32Array(e.length),
    n = new Uint32Array(e.length);
  for (let s = 0; s < e.length; s++) {
    const { h: i, l: o } = md(e[s], t);
    [r[s], n[s]] = [i, o];
  }
  return [r, n];
}
const I3 = (e, t) => (BigInt(e >>> 0) << Zo) | BigInt(t >>> 0),
  T3 = (e, t, r) => e >>> r,
  P3 = (e, t, r) => (e << (32 - r)) | (t >>> r),
  C3 = (e, t, r) => (e >>> r) | (t << (32 - r)),
  k3 = (e, t, r) => (e << (32 - r)) | (t >>> r),
  D3 = (e, t, r) => (e << (64 - r)) | (t >>> (r - 32)),
  O3 = (e, t, r) => (e >>> (r - 32)) | (t << (64 - r)),
  B3 = (e, t) => t,
  L3 = (e, t) => e,
  M3 = (e, t, r) => (e << r) | (t >>> (32 - r)),
  N3 = (e, t, r) => (t << r) | (e >>> (32 - r)),
  R3 = (e, t, r) => (t << (r - 32)) | (e >>> (64 - r)),
  U3 = (e, t, r) => (e << (r - 32)) | (t >>> (64 - r));
function F3(e, t, r, n) {
  const s = (t >>> 0) + (n >>> 0);
  return { h: (e + r + ((s / 2 ** 32) | 0)) | 0, l: s | 0 };
}
const j3 = (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0),
  H3 = (e, t, r, n) => (t + r + n + ((e / 2 ** 32) | 0)) | 0,
  q3 = (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0),
  V3 = (e, t, r, n, s) => (t + r + n + s + ((e / 2 ** 32) | 0)) | 0,
  G3 = (e, t, r, n, s) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (s >>> 0),
  z3 = (e, t, r, n, s, i) => (t + r + n + s + i + ((e / 2 ** 32) | 0)) | 0,
  oe = {
    fromBig: md,
    split: A3,
    toBig: I3,
    shrSH: T3,
    shrSL: P3,
    rotrSH: C3,
    rotrSL: k3,
    rotrBH: D3,
    rotrBL: O3,
    rotr32H: B3,
    rotr32L: L3,
    rotlSH: M3,
    rotlSL: N3,
    rotlBH: R3,
    rotlBL: U3,
    add: F3,
    add3L: j3,
    add3H: H3,
    add4L: q3,
    add4H: V3,
    add5H: z3,
    add5L: G3,
  },
  [K3, W3] = oe.split(
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
  or = new Uint32Array(80),
  cr = new Uint32Array(80);
let qa = class extends $3 {
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
      Ch: i,
      Cl: o,
      Dh: c,
      Dl: d,
      Eh: l,
      El: f,
      Fh: u,
      Fl: h,
      Gh: b,
      Gl: y,
      Hh: p,
      Hl: x,
    } = this;
    return [t, r, n, s, i, o, c, d, l, f, u, h, b, y, p, x];
  }
  set(t, r, n, s, i, o, c, d, l, f, u, h, b, y, p, x) {
    (this.Ah = t | 0),
      (this.Al = r | 0),
      (this.Bh = n | 0),
      (this.Bl = s | 0),
      (this.Ch = i | 0),
      (this.Cl = o | 0),
      (this.Dh = c | 0),
      (this.Dl = d | 0),
      (this.Eh = l | 0),
      (this.El = f | 0),
      (this.Fh = u | 0),
      (this.Fl = h | 0),
      (this.Gh = b | 0),
      (this.Gl = y | 0),
      (this.Hh = p | 0),
      (this.Hl = x | 0);
  }
  process(t, r) {
    for (let m = 0; m < 16; m++, r += 4) (or[m] = t.getUint32(r)), (cr[m] = t.getUint32((r += 4)));
    for (let m = 16; m < 80; m++) {
      const I = or[m - 15] | 0,
        A = cr[m - 15] | 0,
        k = oe.rotrSH(I, A, 1) ^ oe.rotrSH(I, A, 8) ^ oe.shrSH(I, A, 7),
        P = oe.rotrSL(I, A, 1) ^ oe.rotrSL(I, A, 8) ^ oe.shrSL(I, A, 7),
        w = or[m - 2] | 0,
        E = cr[m - 2] | 0,
        U = oe.rotrSH(w, E, 19) ^ oe.rotrBH(w, E, 61) ^ oe.shrSH(w, E, 6),
        j = oe.rotrSL(w, E, 19) ^ oe.rotrBL(w, E, 61) ^ oe.shrSL(w, E, 6),
        z = oe.add4L(P, j, cr[m - 7], cr[m - 16]),
        V = oe.add4H(z, k, U, or[m - 7], or[m - 16]);
      (or[m] = V | 0), (cr[m] = z | 0);
    }
    let {
      Ah: n,
      Al: s,
      Bh: i,
      Bl: o,
      Ch: c,
      Cl: d,
      Dh: l,
      Dl: f,
      Eh: u,
      El: h,
      Fh: b,
      Fl: y,
      Gh: p,
      Gl: x,
      Hh: S,
      Hl: _,
    } = this;
    for (let m = 0; m < 80; m++) {
      const I = oe.rotrSH(u, h, 14) ^ oe.rotrSH(u, h, 18) ^ oe.rotrBH(u, h, 41),
        A = oe.rotrSL(u, h, 14) ^ oe.rotrSL(u, h, 18) ^ oe.rotrBL(u, h, 41),
        k = (u & b) ^ (~u & p),
        P = (h & y) ^ (~h & x),
        w = oe.add5L(_, A, P, W3[m], cr[m]),
        E = oe.add5H(w, S, I, k, K3[m], or[m]),
        U = w | 0,
        j = oe.rotrSH(n, s, 28) ^ oe.rotrBH(n, s, 34) ^ oe.rotrBH(n, s, 39),
        z = oe.rotrSL(n, s, 28) ^ oe.rotrBL(n, s, 34) ^ oe.rotrBL(n, s, 39),
        V = (n & i) ^ (n & c) ^ (i & c),
        J = (s & o) ^ (s & d) ^ (o & d);
      (S = p | 0),
        (_ = x | 0),
        (p = b | 0),
        (x = y | 0),
        (b = u | 0),
        (y = h | 0),
        ({ h: u, l: h } = oe.add(l | 0, f | 0, E | 0, U | 0)),
        (l = c | 0),
        (f = d | 0),
        (c = i | 0),
        (d = o | 0),
        (i = n | 0),
        (o = s | 0);
      const re = oe.add3L(U, z, J);
      (n = oe.add3H(re, E, j, V)), (s = re | 0);
    }
    ({ h: n, l: s } = oe.add(this.Ah | 0, this.Al | 0, n | 0, s | 0)),
      ({ h: i, l: o } = oe.add(this.Bh | 0, this.Bl | 0, i | 0, o | 0)),
      ({ h: c, l: d } = oe.add(this.Ch | 0, this.Cl | 0, c | 0, d | 0)),
      ({ h: l, l: f } = oe.add(this.Dh | 0, this.Dl | 0, l | 0, f | 0)),
      ({ h: u, l: h } = oe.add(this.Eh | 0, this.El | 0, u | 0, h | 0)),
      ({ h: b, l: y } = oe.add(this.Fh | 0, this.Fl | 0, b | 0, y | 0)),
      ({ h: p, l: x } = oe.add(this.Gh | 0, this.Gl | 0, p | 0, x | 0)),
      ({ h: S, l: _ } = oe.add(this.Hh | 0, this.Hl | 0, S | 0, _ | 0)),
      this.set(n, s, i, o, c, d, l, f, u, h, b, y, p, x, S, _);
  }
  roundClean() {
    or.fill(0), cr.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
};
class Q3 extends qa {
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
class Y3 extends qa {
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
class Z3 extends qa {
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
const J3 = Ps(() => new qa());
Ps(() => new Q3());
Ps(() => new Y3());
Ps(() => new Z3());
xa.sha512Sync = (...e) => J3(xa.concatBytes(...e));
const { getPublicKey: X3 } = Bf,
  e6 = (e) => {
    const t = X3(e),
      r = new Uint8Array(64);
    return r.set(e), r.set(t, 32), { publicKey: t, secretKey: r };
  };
class t6 {
  constructor() {
    F(this, 'addressTypes', [Q.Solana]);
  }
  generateKeypairFromPrivateKey(t) {
    const r = t.fold((n) => new B2(new Uint8Array(n)));
    return { publicKey: r.publicKey.toBytes(), privateKey: r.secretKey };
  }
  generateKeypairFromSeed(t, r, n) {
    const s = t.fold((i) => new ja(i));
    try {
      const i = s.derivePathType(n, r);
      switch (n) {
        case K.BitcoinTaproot:
        case K.BitcoinNativeSegwit:
        case K.BitcoinNestedSegwit:
        case K.BitcoinLegacy:
        case K.Bip44RootSolana:
        case K.Bip44Solana:
        case K.Bip44ChangeSolana:
        case K.Bip44RootEthereum:
        case K.Bip44Ethereum:
        case K.Bip44EthereumSecondary:
        case K.Bip44EthereumTertiary:
        case K.Bip44Sui:
          return { publicKey: i.publicKey, privateKey: i.secretKey };
        case K.DeprecatedSolana: {
          const o = e6(i.secretKey);
          return { publicKey: o.publicKey, privateKey: o.secretKey };
        }
      }
    } finally {
      s.cleanup();
    }
  }
}
function r6(e) {
  if (e.length >= 255) throw new TypeError('Alphabet too long');
  const t = new Uint8Array(256);
  for (let l = 0; l < t.length; l++) t[l] = 255;
  for (let l = 0; l < e.length; l++) {
    const f = e.charAt(l),
      u = f.charCodeAt(0);
    if (t[u] !== 255) throw new TypeError(f + ' is ambiguous');
    t[u] = l;
  }
  const r = e.length,
    n = e.charAt(0),
    s = Math.log(r) / Math.log(256),
    i = Math.log(256) / Math.log(r);
  function o(l) {
    if (
      (l instanceof Uint8Array ||
        (ArrayBuffer.isView(l)
          ? (l = new Uint8Array(l.buffer, l.byteOffset, l.byteLength))
          : Array.isArray(l) && (l = Uint8Array.from(l))),
      !(l instanceof Uint8Array))
    )
      throw new TypeError('Expected Uint8Array');
    if (l.length === 0) return '';
    let f = 0,
      u = 0,
      h = 0;
    const b = l.length;
    for (; h !== b && l[h] === 0; ) h++, f++;
    const y = ((b - h) * i + 1) >>> 0,
      p = new Uint8Array(y);
    for (; h !== b; ) {
      let _ = l[h],
        m = 0;
      for (let I = y - 1; (_ !== 0 || m < u) && I !== -1; I--, m++)
        (_ += (256 * p[I]) >>> 0), (p[I] = _ % r >>> 0), (_ = (_ / r) >>> 0);
      if (_ !== 0) throw new Error('Non-zero carry');
      (u = m), h++;
    }
    let x = y - u;
    for (; x !== y && p[x] === 0; ) x++;
    let S = n.repeat(f);
    for (; x < y; ++x) S += e.charAt(p[x]);
    return S;
  }
  function c(l) {
    if (typeof l != 'string') throw new TypeError('Expected String');
    if (l.length === 0) return new Uint8Array();
    let f = 0,
      u = 0,
      h = 0;
    for (; l[f] === n; ) u++, f++;
    const b = ((l.length - f) * s + 1) >>> 0,
      y = new Uint8Array(b);
    for (; l[f]; ) {
      let _ = t[l.charCodeAt(f)];
      if (_ === 255) return;
      let m = 0;
      for (let I = b - 1; (_ !== 0 || m < h) && I !== -1; I--, m++)
        (_ += (r * y[I]) >>> 0), (y[I] = _ % 256 >>> 0), (_ = (_ / 256) >>> 0);
      if (_ !== 0) throw new Error('Non-zero carry');
      (h = m), f++;
    }
    let p = b - h;
    for (; p !== b && y[p] === 0; ) p++;
    const x = new Uint8Array(u + (b - p));
    let S = u;
    for (; p !== b; ) x[S++] = y[p++];
    return x;
  }
  function d(l) {
    const f = c(l);
    if (f) return f;
    throw new Error('Non-base' + r + ' character');
  }
  return { encode: o, decodeUnsafe: c, decode: d };
}
var n6 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const gd = r6(n6),
  Zc = (e) => gd.encode(e),
  Jo = (e) => gd.decode(e);
function Ft(e) {
  return Uint8Array.from(atob(e), (t) => t.charCodeAt(0));
}
const Ei = 8192;
function at(e) {
  if (e.length < Ei) return btoa(String.fromCharCode(...e));
  let t = '';
  for (var r = 0; r < e.length; r += Ei) {
    const n = e.slice(r, r + Ei);
    t += String.fromCharCode(...n);
  }
  return btoa(t);
}
function Jc(e) {
  var s;
  const t = e.startsWith('0x') ? e.slice(2) : e,
    n =
      ((s = (t.length % 2 === 0 ? t : `0${t}}`).match(/.{2}/g)) == null
        ? void 0
        : s.map((i) => parseInt(i, 16))) ?? [];
  return Uint8Array.from(n);
}
function Nn(e) {
  return e.reduce((t, r) => t + r.toString(16).padStart(2, '0'), '');
}
function Xc(e) {
  let t = [],
    r = 0;
  if (e === 0) return [0];
  for (; e > 0; ) (t[r] = e & 127), (e >>= 7) && (t[r] |= 128), (r += 1);
  return t;
}
function s6(e) {
  let t = 0,
    r = 0,
    n = 0;
  for (;;) {
    let s = e[n];
    if (((n += 1), (t |= (s & 127) << r), !(s & 128))) break;
    r += 7;
  }
  return { value: t, length: n };
}
class a6 {
  constructor(t) {
    (this.bytePosition = 0), (this.dataView = new DataView(t.buffer));
  }
  shift(t) {
    return (this.bytePosition += t), this;
  }
  read8() {
    let t = this.dataView.getUint8(this.bytePosition);
    return this.shift(1), t;
  }
  read16() {
    let t = this.dataView.getUint16(this.bytePosition, !0);
    return this.shift(2), t;
  }
  read32() {
    let t = this.dataView.getUint32(this.bytePosition, !0);
    return this.shift(4), t;
  }
  read64() {
    let t = this.read32(),
      n = this.read32().toString(16) + t.toString(16).padStart(8, '0');
    return BigInt('0x' + n).toString(10);
  }
  read128() {
    let t = BigInt(this.read64()),
      n = BigInt(this.read64()).toString(16) + t.toString(16).padStart(16, '0');
    return BigInt('0x' + n).toString(10);
  }
  read256() {
    let t = BigInt(this.read128()),
      n = BigInt(this.read128()).toString(16) + t.toString(16).padStart(32, '0');
    return BigInt('0x' + n).toString(10);
  }
  readBytes(t) {
    let r = this.bytePosition + this.dataView.byteOffset,
      n = new Uint8Array(this.dataView.buffer, r, t);
    return this.shift(t), n;
  }
  readULEB() {
    let t = this.bytePosition + this.dataView.byteOffset,
      r = new Uint8Array(this.dataView.buffer, t),
      { value: n, length: s } = s6(r);
    return this.shift(s), n;
  }
  readVec(t) {
    let r = this.readULEB(),
      n = [];
    for (let s = 0; s < r; s++) n.push(t(this, s, r));
    return n;
  }
}
function i6(e, t) {
  switch (t) {
    case 'base58':
      return Zc(e);
    case 'base64':
      return at(e);
    case 'hex':
      return Nn(e);
    default:
      throw new Error('Unsupported encoding, supported values are: base64, hex');
  }
}
function o6(e, t = ['<', '>']) {
  const [r, n] = t,
    s = [];
  let i = '',
    o = 0;
  for (let c = 0; c < e.length; c++) {
    const d = e[c];
    if ((d === r && o++, d === n && o--, o === 0 && d === ',')) {
      s.push(i.trim()), (i = '');
      continue;
    }
    i += d;
  }
  return s.push(i.trim()), s;
}
class c6 {
  constructor({ initialSize: t = 1024, maxSize: r = 1 / 0, allocateSize: n = 1024 } = {}) {
    (this.bytePosition = 0),
      (this.size = t),
      (this.maxSize = r),
      (this.allocateSize = n),
      (this.dataView = new DataView(new ArrayBuffer(t)));
  }
  ensureSizeOrGrow(t) {
    const r = this.bytePosition + t;
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
  shift(t) {
    return (this.bytePosition += t), this;
  }
  write8(t) {
    return (
      this.ensureSizeOrGrow(1), this.dataView.setUint8(this.bytePosition, Number(t)), this.shift(1)
    );
  }
  write16(t) {
    return (
      this.ensureSizeOrGrow(2),
      this.dataView.setUint16(this.bytePosition, Number(t), !0),
      this.shift(2)
    );
  }
  write32(t) {
    return (
      this.ensureSizeOrGrow(4),
      this.dataView.setUint32(this.bytePosition, Number(t), !0),
      this.shift(4)
    );
  }
  write64(t) {
    return _i(BigInt(t), 8).forEach((r) => this.write8(r)), this;
  }
  write128(t) {
    return _i(BigInt(t), 16).forEach((r) => this.write8(r)), this;
  }
  write256(t) {
    return _i(BigInt(t), 32).forEach((r) => this.write8(r)), this;
  }
  writeULEB(t) {
    return Xc(t).forEach((r) => this.write8(r)), this;
  }
  writeVec(t, r) {
    return this.writeULEB(t.length), Array.from(t).forEach((n, s) => r(this, n, s, t.length)), this;
  }
  *[Symbol.iterator]() {
    for (let t = 0; t < this.bytePosition; t++) yield this.dataView.getUint8(t);
    return this.toBytes();
  }
  toBytes() {
    return new Uint8Array(this.dataView.buffer.slice(0, this.bytePosition));
  }
  toString(t) {
    return i6(this.toBytes(), t);
  }
}
function _i(e, t) {
  let r = new Uint8Array(t),
    n = 0;
  for (; e > 0; ) (r[n] = Number(e % BigInt(256))), (e = e / BigInt(256)), (n += 1);
  return r;
}
var vd = (e) => {
    throw TypeError(e);
  },
  wd = (e, t, r) => t.has(e) || vd('Cannot ' + r),
  It = (e, t, r) => (wd(e, t, 'read from private field'), r ? r.call(e) : t.get(e)),
  ya = (e, t, r) =>
    t.has(e)
      ? vd('Cannot add the same private member more than once')
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, r),
  ma = (e, t, r, n) => (wd(e, t, 'write to private field'), n ? n.call(e, r) : t.set(e, r), r),
  dn,
  ss,
  ta,
  yr;
const l6 = class Sd {
  constructor(t) {
    ya(this, dn),
      ya(this, ss),
      (this.name = t.name),
      (this.read = t.read),
      (this.serializedSize = t.serializedSize ?? (() => null)),
      ma(this, dn, t.write),
      ma(
        this,
        ss,
        t.serialize ??
          ((r, n) => {
            const s = new c6({ initialSize: this.serializedSize(r) ?? void 0, ...n });
            return It(this, dn).call(this, r, s), s.toBytes();
          })
      ),
      (this.validate = t.validate ?? (() => {}));
  }
  write(t, r) {
    this.validate(t), It(this, dn).call(this, t, r);
  }
  serialize(t, r) {
    return this.validate(t), new f6(this, It(this, ss).call(this, t, r));
  }
  parse(t) {
    const r = new a6(t);
    return this.read(r);
  }
  fromHex(t) {
    return this.parse(Jc(t));
  }
  fromBase58(t) {
    return this.parse(Jo(t));
  }
  fromBase64(t) {
    return this.parse(Ft(t));
  }
  transform({ name: t, input: r, output: n, validate: s }) {
    return new Sd({
      name: t ?? this.name,
      read: (i) => n(this.read(i)),
      write: (i, o) => It(this, dn).call(this, r(i), o),
      serializedSize: (i) => this.serializedSize(r(i)),
      serialize: (i, o) => It(this, ss).call(this, r(i), o),
      validate: (i) => {
        s == null || s(i), this.validate(r(i));
      },
    });
  }
};
dn = new WeakMap();
ss = new WeakMap();
let er = l6;
const u6 = Symbol.for('@mysten/serialized-bcs');
class f6 {
  constructor(t, r) {
    ya(this, ta), ya(this, yr), ma(this, ta, t), ma(this, yr, r);
  }
  get [u6]() {
    return !0;
  }
  toBytes() {
    return It(this, yr);
  }
  toHex() {
    return Nn(It(this, yr));
  }
  toBase64() {
    return at(It(this, yr));
  }
  toBase58() {
    return Zc(It(this, yr));
  }
  parse() {
    return It(this, ta).parse(It(this, yr));
  }
}
ta = new WeakMap();
yr = new WeakMap();
function ga({ size: e, ...t }) {
  return new er({ ...t, serializedSize: () => e });
}
function $i({ readMethod: e, writeMethod: t, ...r }) {
  return ga({
    ...r,
    read: (n) => n[e](),
    write: (n, s) => s[t](n),
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
function Ai({ readMethod: e, writeMethod: t, ...r }) {
  return ga({
    ...r,
    read: (n) => n[e](),
    write: (n, s) => s[t](BigInt(n)),
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
function d6({ serialize: e, ...t }) {
  const r = new er({
    ...t,
    serialize: e,
    write: (n, s) => {
      for (const i of r.serialize(n).toBytes()) s.write8(i);
    },
  });
  return r;
}
function h6({ toBytes: e, fromBytes: t, ...r }) {
  return new er({
    ...r,
    read: (n) => {
      const s = n.readULEB(),
        i = n.readBytes(s);
      return t(i);
    },
    write: (n, s) => {
      const i = e(n);
      s.writeULEB(i.length);
      for (let o = 0; o < i.length; o++) s.write8(i[o]);
    },
    serialize: (n) => {
      const s = e(n),
        i = Xc(s.length),
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
function x6(e) {
  let t = null;
  function r() {
    return t || (t = e()), t;
  }
  return new er({
    name: 'lazy',
    read: (n) => r().read(n),
    serializedSize: (n) => r().serializedSize(n),
    write: (n, s) => r().write(n, s),
    serialize: (n, s) => r().serialize(n, s).toBytes(),
  });
}
const g = {
    u8(e) {
      return $i({
        name: 'u8',
        readMethod: 'read8',
        writeMethod: 'write8',
        size: 1,
        maxValue: 2 ** 8 - 1,
        ...e,
      });
    },
    u16(e) {
      return $i({
        name: 'u16',
        readMethod: 'read16',
        writeMethod: 'write16',
        size: 2,
        maxValue: 2 ** 16 - 1,
        ...e,
      });
    },
    u32(e) {
      return $i({
        name: 'u32',
        readMethod: 'read32',
        writeMethod: 'write32',
        size: 4,
        maxValue: 2 ** 32 - 1,
        ...e,
      });
    },
    u64(e) {
      return Ai({
        name: 'u64',
        readMethod: 'read64',
        writeMethod: 'write64',
        size: 8,
        maxValue: 2n ** 64n - 1n,
        ...e,
      });
    },
    u128(e) {
      return Ai({
        name: 'u128',
        readMethod: 'read128',
        writeMethod: 'write128',
        size: 16,
        maxValue: 2n ** 128n - 1n,
        ...e,
      });
    },
    u256(e) {
      return Ai({
        name: 'u256',
        readMethod: 'read256',
        writeMethod: 'write256',
        size: 32,
        maxValue: 2n ** 256n - 1n,
        ...e,
      });
    },
    bool(e) {
      return ga({
        name: 'bool',
        size: 1,
        read: (t) => t.read8() === 1,
        write: (t, r) => r.write8(t ? 1 : 0),
        ...e,
        validate: (t) => {
          var r;
          if (
            ((r = e == null ? void 0 : e.validate) == null || r.call(e, t), typeof t != 'boolean')
          )
            throw new TypeError(`Expected boolean, found ${typeof t}`);
        },
      });
    },
    uleb128(e) {
      return d6({
        name: 'uleb128',
        read: (t) => t.readULEB(),
        serialize: (t) => Uint8Array.from(Xc(t)),
        ...e,
      });
    },
    bytes(e, t) {
      return ga({
        name: `bytes[${e}]`,
        size: e,
        read: (r) => r.readBytes(e),
        write: (r, n) => {
          const s = new Uint8Array(r);
          for (let i = 0; i < e; i++) n.write8(s[i] ?? 0);
        },
        ...t,
        validate: (r) => {
          var n;
          if (
            ((n = t == null ? void 0 : t.validate) == null || n.call(t, r),
            !r || typeof r != 'object' || !('length' in r))
          )
            throw new TypeError(`Expected array, found ${typeof r}`);
          if (r.length !== e)
            throw new TypeError(`Expected array of length ${e}, found ${r.length}`);
        },
      });
    },
    string(e) {
      return h6({
        name: 'string',
        toBytes: (t) => new TextEncoder().encode(t),
        fromBytes: (t) => new TextDecoder().decode(t),
        ...e,
      });
    },
    fixedArray(e, t, r) {
      return new er({
        name: `${t.name}[${e}]`,
        read: (n) => {
          const s = new Array(e);
          for (let i = 0; i < e; i++) s[i] = t.read(n);
          return s;
        },
        write: (n, s) => {
          for (const i of n) t.write(i, s);
        },
        ...r,
        validate: (n) => {
          var s;
          if (
            ((s = r == null ? void 0 : r.validate) == null || s.call(r, n),
            !n || typeof n != 'object' || !('length' in n))
          )
            throw new TypeError(`Expected array, found ${typeof n}`);
          if (n.length !== e)
            throw new TypeError(`Expected array of length ${e}, found ${n.length}`);
        },
      });
    },
    option(e) {
      return g
        .enum(`Option<${e.name}>`, { None: null, Some: e })
        .transform({
          input: (t) => (t == null ? { None: !0 } : { Some: t }),
          output: (t) => (t.$kind === 'Some' ? t.Some : null),
        });
    },
    vector(e, t) {
      return new er({
        name: `vector<${e.name}>`,
        read: (r) => {
          const n = r.readULEB(),
            s = new Array(n);
          for (let i = 0; i < n; i++) s[i] = e.read(r);
          return s;
        },
        write: (r, n) => {
          n.writeULEB(r.length);
          for (const s of r) e.write(s, n);
        },
        ...t,
        validate: (r) => {
          var n;
          if (
            ((n = t == null ? void 0 : t.validate) == null || n.call(t, r),
            !r || typeof r != 'object' || !('length' in r))
          )
            throw new TypeError(`Expected array, found ${typeof r}`);
        },
      });
    },
    tuple(e, t) {
      return new er({
        name: `(${e.map((r) => r.name).join(', ')})`,
        serializedSize: (r) => {
          let n = 0;
          for (let s = 0; s < e.length; s++) {
            const i = e[s].serializedSize(r[s]);
            if (i == null) return null;
            n += i;
          }
          return n;
        },
        read: (r) => {
          const n = [];
          for (const s of e) n.push(s.read(r));
          return n;
        },
        write: (r, n) => {
          for (let s = 0; s < e.length; s++) e[s].write(r[s], n);
        },
        ...t,
        validate: (r) => {
          var n;
          if (((n = t == null ? void 0 : t.validate) == null || n.call(t, r), !Array.isArray(r)))
            throw new TypeError(`Expected array, found ${typeof r}`);
          if (r.length !== e.length)
            throw new TypeError(`Expected array of length ${e.length}, found ${r.length}`);
        },
      });
    },
    struct(e, t, r) {
      const n = Object.entries(t);
      return new er({
        name: e,
        serializedSize: (s) => {
          let i = 0;
          for (const [o, c] of n) {
            const d = c.serializedSize(s[o]);
            if (d == null) return null;
            i += d;
          }
          return i;
        },
        read: (s) => {
          const i = {};
          for (const [o, c] of n) i[o] = c.read(s);
          return i;
        },
        write: (s, i) => {
          for (const [o, c] of n) c.write(s[o], i);
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
    enum(e, t, r) {
      const n = Object.entries(t);
      return new er({
        name: e,
        read: (s) => {
          const i = s.readULEB(),
            o = n[i];
          if (!o) throw new TypeError(`Unknown value ${i} for enum ${e}`);
          const [c, d] = o;
          return { [c]: (d == null ? void 0 : d.read(s)) ?? !0, $kind: c };
        },
        write: (s, i) => {
          const [o, c] = Object.entries(s).filter(([d]) => Object.hasOwn(t, d))[0];
          for (let d = 0; d < n.length; d++) {
            const [l, f] = n[d];
            if (l === o) {
              i.writeULEB(d), f == null || f.write(c, i);
              return;
            }
          }
        },
        ...r,
        validate: (s) => {
          var c;
          if (
            ((c = r == null ? void 0 : r.validate) == null || c.call(r, s),
            typeof s != 'object' || s == null)
          )
            throw new TypeError(`Expected object, found ${typeof s}`);
          const i = Object.keys(s).filter((d) => s[d] !== void 0 && Object.hasOwn(t, d));
          if (i.length !== 1)
            throw new TypeError(
              `Expected object with one key, but found ${i.length} for type ${e}}`
            );
          const [o] = i;
          if (!Object.hasOwn(t, o)) throw new TypeError(`Invalid enum variant ${o}`);
        },
      });
    },
    map(e, t) {
      return g.vector(g.tuple([e, t])).transform({
        name: `Map<${e.name}, ${t.name}>`,
        input: (r) => [...r.entries()],
        output: (r) => {
          const n = new Map();
          for (const [s, i] of r) n.set(s, i);
          return n;
        },
      });
    },
    lazy(e) {
      return x6(e);
    },
  },
  Cs = 32;
function p6(e) {
  return b6(e) && y6(e) === Cs;
}
function bn(e, t = !1) {
  let r = e.toLowerCase();
  return !t && r.startsWith('0x') && (r = r.slice(2)), `0x${r.padStart(Cs * 2, '0')}`;
}
function b6(e) {
  return /^(0x|0X)?[a-fA-F0-9]+$/.test(e) && e.length % 2 === 0;
}
function y6(e) {
  return /^(0x|0X)/.test(e) ? (e.length - 2) / 2 : e.length / 2;
}
const m6 = /^vector<(.+)>$/,
  g6 = /^([^:]+)::([^:]+)::([^<]+)(<(.+)>)?/;
class wr {
  static parseFromStr(t, r = !1) {
    if (t === 'address') return { address: null };
    if (t === 'bool') return { bool: null };
    if (t === 'u8') return { u8: null };
    if (t === 'u16') return { u16: null };
    if (t === 'u32') return { u32: null };
    if (t === 'u64') return { u64: null };
    if (t === 'u128') return { u128: null };
    if (t === 'u256') return { u256: null };
    if (t === 'signer') return { signer: null };
    const n = t.match(m6);
    if (n) return { vector: wr.parseFromStr(n[1], r) };
    const s = t.match(g6);
    if (s)
      return {
        struct: {
          address: r ? bn(s[1]) : s[1],
          module: s[2],
          name: s[3],
          typeParams: s[5] === void 0 ? [] : wr.parseStructTypeArgs(s[5], r),
        },
      };
    throw new Error(`Encountered unexpected token when parsing type args for ${t}`);
  }
  static parseStructTypeArgs(t, r = !1) {
    return o6(t).map((n) => wr.parseFromStr(n, r));
  }
  static tagToString(t) {
    if ('bool' in t) return 'bool';
    if ('u8' in t) return 'u8';
    if ('u16' in t) return 'u16';
    if ('u32' in t) return 'u32';
    if ('u64' in t) return 'u64';
    if ('u128' in t) return 'u128';
    if ('u256' in t) return 'u256';
    if ('address' in t) return 'address';
    if ('signer' in t) return 'signer';
    if ('vector' in t) return `vector<${wr.tagToString(t.vector)}>`;
    if ('struct' in t) {
      const r = t.struct,
        n = r.typeParams.map(wr.tagToString).join(', ');
      return `${r.address}::${r.module}::${r.name}${n ? `<${n}>` : ''}`;
    }
    throw new Error('Invalid TypeTag');
  }
}
function v6(e) {
  return g
    .u64({ name: 'unsafe_u64', ...e })
    .transform({ input: (t) => t, output: (t) => Number(t) });
}
function w6(e) {
  return g.enum('Option', { None: null, Some: e });
}
const Re = g.bytes(Cs).transform({
    validate: (e) => {
      const t = typeof e == 'string' ? e : Nn(e);
      if (!t || !p6(bn(t))) throw new Error(`Invalid Sui address ${t}`);
    },
    input: (e) => (typeof e == 'string' ? Jc(bn(e)) : e),
    output: (e) => bn(Nn(e)),
  }),
  Ct = g.vector(g.u8()).transform({
    name: 'ObjectDigest',
    input: (e) => Jo(e),
    output: (e) => Zc(new Uint8Array(e)),
    validate: (e) => {
      if (Jo(e).length !== 32) throw new Error('ObjectDigest must be 32 bytes');
    },
  }),
  yt = g.struct('SuiObjectRef', { objectId: Re, version: g.u64(), digest: Ct }),
  Ed = g.struct('SharedObjectRef', {
    objectId: Re,
    initialSharedVersion: g.u64(),
    mutable: g.bool(),
  }),
  _d = g.enum('ObjectArg', { ImmOrOwnedObject: yt, SharedObject: Ed, Receiving: yt }),
  $d = g.enum('CallArg', {
    Pure: g.struct('Pure', {
      bytes: g
        .vector(g.u8())
        .transform({
          input: (e) => (typeof e == 'string' ? Ft(e) : e),
          output: (e) => at(new Uint8Array(e)),
        }),
    }),
    Object: _d,
  }),
  e0 = g.enum('TypeTag', {
    bool: null,
    u8: null,
    u64: null,
    u128: null,
    address: null,
    signer: null,
    vector: g.lazy(() => e0),
    struct: g.lazy(() => kd),
    u16: null,
    u32: null,
    u256: null,
  }),
  t0 = e0.transform({
    input: (e) => (typeof e == 'string' ? wr.parseFromStr(e, !0) : e),
    output: (e) => wr.tagToString(e),
  }),
  Ot = g.enum('Argument', {
    GasCoin: null,
    Input: g.u16(),
    Result: g.u16(),
    NestedResult: g.tuple([g.u16(), g.u16()]),
  }),
  Ad = g.struct('ProgrammableMoveCall', {
    package: Re,
    module: g.string(),
    function: g.string(),
    typeArguments: g.vector(t0),
    arguments: g.vector(Ot),
  }),
  Id = g.enum('Command', {
    MoveCall: Ad,
    TransferObjects: g.struct('TransferObjects', { objects: g.vector(Ot), address: Ot }),
    SplitCoins: g.struct('SplitCoins', { coin: Ot, amounts: g.vector(Ot) }),
    MergeCoins: g.struct('MergeCoins', { destination: Ot, sources: g.vector(Ot) }),
    Publish: g.struct('Publish', {
      modules: g.vector(
        g
          .vector(g.u8())
          .transform({
            input: (e) => (typeof e == 'string' ? Ft(e) : e),
            output: (e) => at(new Uint8Array(e)),
          })
      ),
      dependencies: g.vector(Re),
    }),
    MakeMoveVec: g.struct('MakeMoveVec', {
      type: w6(t0).transform({
        input: (e) => (e === null ? { None: !0 } : { Some: e }),
        output: (e) => e.Some ?? null,
      }),
      elements: g.vector(Ot),
    }),
    Upgrade: g.struct('Upgrade', {
      modules: g.vector(
        g
          .vector(g.u8())
          .transform({
            input: (e) => (typeof e == 'string' ? Ft(e) : e),
            output: (e) => at(new Uint8Array(e)),
          })
      ),
      dependencies: g.vector(Re),
      package: Re,
      ticket: Ot,
    }),
  }),
  Td = g.struct('ProgrammableTransaction', { inputs: g.vector($d), commands: g.vector(Id) }),
  Pd = g.enum('TransactionKind', {
    ProgrammableTransaction: Td,
    ChangeEpoch: null,
    Genesis: null,
    ConsensusCommitPrologue: null,
  }),
  Cd = g.enum('TransactionExpiration', { None: null, Epoch: v6() }),
  kd = g.struct('StructTag', {
    address: Re,
    module: g.string(),
    name: g.string(),
    typeParams: g.vector(e0),
  }),
  Dd = g.struct('GasData', { payment: g.vector(yt), owner: Re, price: g.u64(), budget: g.u64() }),
  Od = g.struct('TransactionDataV1', { kind: Pd, sender: Re, gasData: Dd, expiration: Cd }),
  Bd = g.enum('TransactionData', { V1: Od }),
  Ld = g.enum('IntentScope', {
    TransactionData: null,
    TransactionEffects: null,
    CheckpointSummary: null,
    PersonalMessage: null,
  }),
  Md = g.enum('IntentVersion', { V0: null }),
  Nd = g.enum('AppId', { Sui: null }),
  Rd = g.struct('Intent', { scope: Ld, version: Md, appId: Nd });
function Ud(e) {
  return g.struct(`IntentMessage<${e.name}>`, { intent: Rd, value: e });
}
const Fd = g.enum('CompressedSignature', {
    ED25519: g.fixedArray(64, g.u8()),
    Secp256k1: g.fixedArray(64, g.u8()),
    Secp256r1: g.fixedArray(64, g.u8()),
    ZkLogin: g.vector(g.u8()),
  }),
  jd = g.enum('PublicKey', {
    ED25519: g.fixedArray(32, g.u8()),
    Secp256k1: g.fixedArray(33, g.u8()),
    Secp256r1: g.fixedArray(33, g.u8()),
    ZkLogin: g.vector(g.u8()),
  }),
  Hd = g.struct('MultiSigPkMap', { pubKey: jd, weight: g.u8() }),
  qd = g.struct('MultiSigPublicKey', { pk_map: g.vector(Hd), threshold: g.u16() }),
  S6 = g.struct('MultiSig', { sigs: g.vector(Fd), bitmap: g.u16(), multisig_pk: qd }),
  E6 = g
    .vector(g.u8())
    .transform({
      input: (e) => (typeof e == 'string' ? Ft(e) : e),
      output: (e) => at(new Uint8Array(e)),
    }),
  Vd = g.struct('SenderSignedTransaction', { intentMessage: Ud(Bd), txSignatures: g.vector(E6) }),
  _6 = g.vector(Vd, { name: 'SenderSignedData' }),
  $6 = g.enum('PackageUpgradeError', {
    UnableToFetchPackage: g.struct('UnableToFetchPackage', { packageId: Re }),
    NotAPackage: g.struct('NotAPackage', { objectId: Re }),
    IncompatibleUpgrade: null,
    DigestDoesNotMatch: g.struct('DigestDoesNotMatch', { digest: g.vector(g.u8()) }),
    UnknownUpgradePolicy: g.struct('UnknownUpgradePolicy', { policy: g.u8() }),
    PackageIDDoesNotMatch: g.struct('PackageIDDoesNotMatch', { packageId: Re, ticketId: Re }),
  }),
  A6 = g.struct('ModuleId', { address: Re, name: g.string() }),
  cl = g.struct('MoveLocation', {
    module: A6,
    function: g.u16(),
    instruction: g.u16(),
    functionName: g.option(g.string()),
  }),
  I6 = g.enum('CommandArgumentError', {
    TypeMismatch: null,
    InvalidBCSBytes: null,
    InvalidUsageOfPureArg: null,
    InvalidArgumentToPrivateEntryFunction: null,
    IndexOutOfBounds: g.struct('IndexOutOfBounds', { idx: g.u16() }),
    SecondaryIndexOutOfBounds: g.struct('SecondaryIndexOutOfBounds', {
      resultIdx: g.u16(),
      secondaryIdx: g.u16(),
    }),
    InvalidResultArity: g.struct('InvalidResultArity', { resultIdx: g.u16() }),
    InvalidGasCoinUsage: null,
    InvalidValueUsage: null,
    InvalidObjectByValue: null,
    InvalidObjectByMutRef: null,
    SharedObjectOperationNotAllowed: null,
  }),
  T6 = g.enum('TypeArgumentError', { TypeNotFound: null, ConstraintNotSatisfied: null }),
  P6 = g.enum('ExecutionFailureStatus', {
    InsufficientGas: null,
    InvalidGasObject: null,
    InvariantViolation: null,
    FeatureNotYetSupported: null,
    MoveObjectTooBig: g.struct('MoveObjectTooBig', { objectSize: g.u64(), maxObjectSize: g.u64() }),
    MovePackageTooBig: g.struct('MovePackageTooBig', {
      objectSize: g.u64(),
      maxObjectSize: g.u64(),
    }),
    CircularObjectOwnership: g.struct('CircularObjectOwnership', { object: Re }),
    InsufficientCoinBalance: null,
    CoinBalanceOverflow: null,
    PublishErrorNonZeroAddress: null,
    SuiMoveVerificationError: null,
    MovePrimitiveRuntimeError: g.option(cl),
    MoveAbort: g.tuple([cl, g.u64()]),
    VMVerificationOrDeserializationError: null,
    VMInvariantViolation: null,
    FunctionNotFound: null,
    ArityMismatch: null,
    TypeArityMismatch: null,
    NonEntryFunctionInvoked: null,
    CommandArgumentError: g.struct('CommandArgumentError', { argIdx: g.u16(), kind: I6 }),
    TypeArgumentError: g.struct('TypeArgumentError', { argumentIdx: g.u16(), kind: T6 }),
    UnusedValueWithoutDrop: g.struct('UnusedValueWithoutDrop', {
      resultIdx: g.u16(),
      secondaryIdx: g.u16(),
    }),
    InvalidPublicFunctionReturnType: g.struct('InvalidPublicFunctionReturnType', { idx: g.u16() }),
    InvalidTransferObject: null,
    EffectsTooLarge: g.struct('EffectsTooLarge', { currentSize: g.u64(), maxSize: g.u64() }),
    PublishUpgradeMissingDependency: null,
    PublishUpgradeDependencyDowngrade: null,
    PackageUpgradeError: g.struct('PackageUpgradeError', { upgradeError: $6 }),
    WrittenObjectsTooLarge: g.struct('WrittenObjectsTooLarge', {
      currentSize: g.u64(),
      maxSize: g.u64(),
    }),
    CertificateDenied: null,
    SuiMoveVerificationTimedout: null,
    SharedObjectOperationNotAllowed: null,
    InputObjectDeleted: null,
    ExecutionCancelledDueToSharedObjectCongestion: g.struct(
      'ExecutionCancelledDueToSharedObjectCongestion',
      { congestedObjects: g.vector(Re) }
    ),
    AddressDeniedForCoin: g.struct('AddressDeniedForCoin', { address: Re, coinType: g.string() }),
    CoinTypeGlobalPause: g.struct('CoinTypeGlobalPause', { coinType: g.string() }),
    ExecutionCancelledDueToRandomnessUnavailable: null,
  }),
  Gd = g.enum('ExecutionStatus', {
    Success: null,
    Failed: g.struct('ExecutionFailed', { error: P6, command: g.option(g.u64()) }),
  }),
  zd = g.struct('GasCostSummary', {
    computationCost: g.u64(),
    storageCost: g.u64(),
    storageRebate: g.u64(),
    nonRefundableStorageFee: g.u64(),
  }),
  hn = g.enum('Owner', {
    AddressOwner: Re,
    ObjectOwner: Re,
    Shared: g.struct('Shared', { initialSharedVersion: g.u64() }),
    Immutable: null,
  }),
  C6 = g.struct('TransactionEffectsV1', {
    status: Gd,
    executedEpoch: g.u64(),
    gasUsed: zd,
    modifiedAtVersions: g.vector(g.tuple([Re, g.u64()])),
    sharedObjects: g.vector(yt),
    transactionDigest: Ct,
    created: g.vector(g.tuple([yt, hn])),
    mutated: g.vector(g.tuple([yt, hn])),
    unwrapped: g.vector(g.tuple([yt, hn])),
    deleted: g.vector(yt),
    unwrappedThenDeleted: g.vector(yt),
    wrapped: g.vector(yt),
    gasObject: g.tuple([yt, hn]),
    eventsDigest: g.option(Ct),
    dependencies: g.vector(Ct),
  }),
  r0 = g.tuple([g.u64(), Ct]),
  k6 = g.enum('ObjectIn', { NotExist: null, Exist: g.tuple([r0, hn]) }),
  D6 = g.enum('ObjectOut', { NotExist: null, ObjectWrite: g.tuple([Ct, hn]), PackageWrite: r0 }),
  O6 = g.enum('IDOperation', { None: null, Created: null, Deleted: null }),
  B6 = g.struct('EffectsObjectChange', { inputState: k6, outputState: D6, idOperation: O6 }),
  L6 = g.enum('UnchangedSharedKind', {
    ReadOnlyRoot: r0,
    MutateDeleted: g.u64(),
    ReadDeleted: g.u64(),
    Cancelled: g.u64(),
    PerEpochConfig: null,
  }),
  M6 = g.struct('TransactionEffectsV2', {
    status: Gd,
    executedEpoch: g.u64(),
    gasUsed: zd,
    transactionDigest: Ct,
    gasObjectIndex: g.option(g.u32()),
    eventsDigest: g.option(Ct),
    dependencies: g.vector(Ct),
    lamportVersion: g.u64(),
    changedObjects: g.vector(g.tuple([Re, B6])),
    unchangedSharedObjects: g.vector(g.tuple([Re, L6])),
    auxDataDigest: g.option(Ct),
  }),
  N6 = g.enum('TransactionEffects', { V1: C6, V2: M6 }),
  yn = {
    ...g,
    U8: g.u8(),
    U16: g.u16(),
    U32: g.u32(),
    U64: g.u64(),
    U128: g.u128(),
    U256: g.u256(),
    ULEB128: g.uleb128(),
    Bool: g.bool(),
    String: g.string(),
    Address: Re,
    AppId: Nd,
    Argument: Ot,
    CallArg: $d,
    CompressedSignature: Fd,
    GasData: Dd,
    Intent: Rd,
    IntentMessage: Ud,
    IntentScope: Ld,
    IntentVersion: Md,
    MultiSig: S6,
    MultiSigPkMap: Hd,
    MultiSigPublicKey: qd,
    ObjectArg: _d,
    ObjectDigest: Ct,
    ProgrammableMoveCall: Ad,
    ProgrammableTransaction: Td,
    PublicKey: jd,
    SenderSignedData: _6,
    SenderSignedTransaction: Vd,
    SharedObjectRef: Ed,
    StructTag: kd,
    SuiObjectRef: yt,
    Command: Id,
    TransactionData: Bd,
    TransactionDataV1: Od,
    TransactionExpiration: Cd,
    TransactionKind: Pd,
    TypeTag: t0,
    TransactionEffects: N6,
  };
function us(e) {
  if (!Number.isSafeInteger(e) || e < 0) throw new Error(`positive integer expected, not ${e}`);
}
function R6(e) {
  return (
    e instanceof Uint8Array ||
    (e != null && typeof e == 'object' && e.constructor.name === 'Uint8Array')
  );
}
function Va(e, ...t) {
  if (!R6(e)) throw new Error('Uint8Array expected');
  if (t.length > 0 && !t.includes(e.length))
    throw new Error(`Uint8Array expected of length ${t}, not of length=${e.length}`);
}
function U6(e) {
  if (typeof e != 'function' || typeof e.create != 'function')
    throw new Error('Hash should be wrapped by utils.wrapConstructor');
  us(e.outputLen), us(e.blockLen);
}
function Rn(e, t = !0) {
  if (e.destroyed) throw new Error('Hash instance has been destroyed');
  if (t && e.finished) throw new Error('Hash#digest() has already been called');
}
function Kd(e, t) {
  Va(e);
  const r = t.outputLen;
  if (e.length < r) throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const va = (e) =>
    new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
  Ii = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
  Fr = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68,
  Wd = (e) =>
    ((e << 24) & 4278190080) | ((e << 8) & 16711680) | ((e >>> 8) & 65280) | ((e >>> 24) & 255),
  zt = Fr ? (e) => e : (e) => Wd(e);
function ln(e) {
  for (let t = 0; t < e.length; t++) e[t] = Wd(e[t]);
}
const F6 = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
function Qd(e) {
  Va(e);
  let t = '';
  for (let r = 0; r < e.length; r++) t += F6[e[r]];
  return t;
}
const Vt = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
function ll(e) {
  if (e >= Vt._0 && e <= Vt._9) return e - Vt._0;
  if (e >= Vt._A && e <= Vt._F) return e - (Vt._A - 10);
  if (e >= Vt._a && e <= Vt._f) return e - (Vt._a - 10);
}
function j6(e) {
  if (typeof e != 'string') throw new Error('hex string expected, got ' + typeof e);
  const t = e.length,
    r = t / 2;
  if (t % 2) throw new Error('padded hex string expected, got unpadded hex of length ' + t);
  const n = new Uint8Array(r);
  for (let s = 0, i = 0; s < r; s++, i += 2) {
    const o = ll(e.charCodeAt(i)),
      c = ll(e.charCodeAt(i + 1));
    if (o === void 0 || c === void 0) {
      const d = e[i] + e[i + 1];
      throw new Error('hex string expected, got non-hex character "' + d + '" at index ' + i);
    }
    n[s] = o * 16 + c;
  }
  return n;
}
function H6(e) {
  if (typeof e != 'string') throw new Error(`utf8ToBytes expected string, got ${typeof e}`);
  return new Uint8Array(new TextEncoder().encode(e));
}
function Or(e) {
  return typeof e == 'string' && (e = H6(e)), Va(e), e;
}
let n0 = class {
  clone() {
    return this._cloneInto();
  }
};
function q6(e) {
  const t = (n) => e().update(Or(n)).digest(),
    r = e();
  return (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = () => e()), t;
}
function V6(e) {
  const t = (n, s) => e(s).update(Or(n)).digest(),
    r = e({});
  return (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = (n) => e(n)), t;
}
const G6 = new Uint8Array([
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11,
  7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6,
  5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8,
  3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14,
  12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10,
  2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3,
]);
class z6 extends n0 {
  constructor(t, r, n = {}, s, i, o) {
    if (
      (super(),
      (this.blockLen = t),
      (this.outputLen = r),
      (this.length = 0),
      (this.pos = 0),
      (this.finished = !1),
      (this.destroyed = !1),
      us(t),
      us(r),
      us(s),
      r < 0 || r > s)
    )
      throw new Error('outputLen bigger than keyLen');
    if (n.key !== void 0 && (n.key.length < 1 || n.key.length > s))
      throw new Error(`key must be up 1..${s} byte long or undefined`);
    if (n.salt !== void 0 && n.salt.length !== i)
      throw new Error(`salt must be ${i} byte long or undefined`);
    if (n.personalization !== void 0 && n.personalization.length !== o)
      throw new Error(`personalization must be ${o} byte long or undefined`);
    this.buffer32 = va((this.buffer = new Uint8Array(t)));
  }
  update(t) {
    Rn(this);
    const { blockLen: r, buffer: n, buffer32: s } = this;
    t = Or(t);
    const i = t.length,
      o = t.byteOffset,
      c = t.buffer;
    for (let d = 0; d < i; ) {
      this.pos === r && (Fr || ln(s), this.compress(s, 0, !1), Fr || ln(s), (this.pos = 0));
      const l = Math.min(r - this.pos, i - d),
        f = o + d;
      if (l === r && !(f % 4) && d + l < i) {
        const u = new Uint32Array(c, f, Math.floor((i - d) / 4));
        Fr || ln(u);
        for (let h = 0; d + r < i; h += s.length, d += r)
          (this.length += r), this.compress(u, h, !1);
        Fr || ln(u);
        continue;
      }
      n.set(t.subarray(d, d + l), this.pos), (this.pos += l), (this.length += l), (d += l);
    }
    return this;
  }
  digestInto(t) {
    Rn(this), Kd(t, this);
    const { pos: r, buffer32: n } = this;
    (this.finished = !0),
      this.buffer.subarray(r).fill(0),
      Fr || ln(n),
      this.compress(n, 0, !0),
      Fr || ln(n);
    const s = va(t);
    this.get().forEach((i, o) => (s[o] = zt(i)));
  }
  digest() {
    const { buffer: t, outputLen: r } = this;
    this.digestInto(t);
    const n = t.slice(0, r);
    return this.destroy(), n;
  }
  _cloneInto(t) {
    const { buffer: r, length: n, finished: s, destroyed: i, outputLen: o, pos: c } = this;
    return (
      t || (t = new this.constructor({ dkLen: o })),
      t.set(...this.get()),
      (t.length = n),
      (t.finished = s),
      (t.destroyed = i),
      (t.outputLen = o),
      t.buffer.set(r),
      (t.pos = c),
      t
    );
  }
}
const js = BigInt(2 ** 32 - 1),
  Xo = BigInt(32);
function Yd(e, t = !1) {
  return t
    ? { h: Number(e & js), l: Number((e >> Xo) & js) }
    : { h: Number((e >> Xo) & js) | 0, l: Number(e & js) | 0 };
}
function K6(e, t = !1) {
  let r = new Uint32Array(e.length),
    n = new Uint32Array(e.length);
  for (let s = 0; s < e.length; s++) {
    const { h: i, l: o } = Yd(e[s], t);
    [r[s], n[s]] = [i, o];
  }
  return [r, n];
}
const W6 = (e, t) => (BigInt(e >>> 0) << Xo) | BigInt(t >>> 0),
  Q6 = (e, t, r) => e >>> r,
  Y6 = (e, t, r) => (e << (32 - r)) | (t >>> r),
  Z6 = (e, t, r) => (e >>> r) | (t << (32 - r)),
  J6 = (e, t, r) => (e << (32 - r)) | (t >>> r),
  X6 = (e, t, r) => (e << (64 - r)) | (t >>> (r - 32)),
  e8 = (e, t, r) => (e >>> (r - 32)) | (t << (64 - r)),
  t8 = (e, t) => t,
  r8 = (e, t) => e,
  n8 = (e, t, r) => (e << r) | (t >>> (32 - r)),
  s8 = (e, t, r) => (t << r) | (e >>> (32 - r)),
  a8 = (e, t, r) => (t << (r - 32)) | (e >>> (64 - r)),
  i8 = (e, t, r) => (e << (r - 32)) | (t >>> (64 - r));
function o8(e, t, r, n) {
  const s = (t >>> 0) + (n >>> 0);
  return { h: (e + r + ((s / 2 ** 32) | 0)) | 0, l: s | 0 };
}
const c8 = (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0),
  l8 = (e, t, r, n) => (t + r + n + ((e / 2 ** 32) | 0)) | 0,
  u8 = (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0),
  f8 = (e, t, r, n, s) => (t + r + n + s + ((e / 2 ** 32) | 0)) | 0,
  d8 = (e, t, r, n, s) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (s >>> 0),
  h8 = (e, t, r, n, s, i) => (t + r + n + s + i + ((e / 2 ** 32) | 0)) | 0,
  ne = {
    fromBig: Yd,
    split: K6,
    toBig: W6,
    shrSH: Q6,
    shrSL: Y6,
    rotrSH: Z6,
    rotrSL: J6,
    rotrBH: X6,
    rotrBL: e8,
    rotr32H: t8,
    rotr32L: r8,
    rotlSH: n8,
    rotlSL: s8,
    rotlBH: a8,
    rotlBL: i8,
    add: o8,
    add3L: c8,
    add3H: l8,
    add4L: u8,
    add4H: f8,
    add5H: h8,
    add5L: d8,
  },
  ze = new Uint32Array([
    4089235720, 1779033703, 2227873595, 3144134277, 4271175723, 1013904242, 1595750129, 2773480762,
    2917565137, 1359893119, 725511199, 2600822924, 4215389547, 528734635, 327033209, 1541459225,
  ]),
  W = new Uint32Array(32);
function lr(e, t, r, n, s, i) {
  const o = s[i],
    c = s[i + 1];
  let d = W[2 * e],
    l = W[2 * e + 1],
    f = W[2 * t],
    u = W[2 * t + 1],
    h = W[2 * r],
    b = W[2 * r + 1],
    y = W[2 * n],
    p = W[2 * n + 1],
    x = ne.add3L(d, f, o);
  (l = ne.add3H(x, l, u, c)),
    (d = x | 0),
    ({ Dh: p, Dl: y } = { Dh: p ^ l, Dl: y ^ d }),
    ({ Dh: p, Dl: y } = { Dh: ne.rotr32H(p, y), Dl: ne.rotr32L(p, y) }),
    ({ h: b, l: h } = ne.add(b, h, p, y)),
    ({ Bh: u, Bl: f } = { Bh: u ^ b, Bl: f ^ h }),
    ({ Bh: u, Bl: f } = { Bh: ne.rotrSH(u, f, 24), Bl: ne.rotrSL(u, f, 24) }),
    (W[2 * e] = d),
    (W[2 * e + 1] = l),
    (W[2 * t] = f),
    (W[2 * t + 1] = u),
    (W[2 * r] = h),
    (W[2 * r + 1] = b),
    (W[2 * n] = y),
    (W[2 * n + 1] = p);
}
function ur(e, t, r, n, s, i) {
  const o = s[i],
    c = s[i + 1];
  let d = W[2 * e],
    l = W[2 * e + 1],
    f = W[2 * t],
    u = W[2 * t + 1],
    h = W[2 * r],
    b = W[2 * r + 1],
    y = W[2 * n],
    p = W[2 * n + 1],
    x = ne.add3L(d, f, o);
  (l = ne.add3H(x, l, u, c)),
    (d = x | 0),
    ({ Dh: p, Dl: y } = { Dh: p ^ l, Dl: y ^ d }),
    ({ Dh: p, Dl: y } = { Dh: ne.rotrSH(p, y, 16), Dl: ne.rotrSL(p, y, 16) }),
    ({ h: b, l: h } = ne.add(b, h, p, y)),
    ({ Bh: u, Bl: f } = { Bh: u ^ b, Bl: f ^ h }),
    ({ Bh: u, Bl: f } = { Bh: ne.rotrBH(u, f, 63), Bl: ne.rotrBL(u, f, 63) }),
    (W[2 * e] = d),
    (W[2 * e + 1] = l),
    (W[2 * t] = f),
    (W[2 * t + 1] = u),
    (W[2 * r] = h),
    (W[2 * r + 1] = b),
    (W[2 * n] = y),
    (W[2 * n + 1] = p);
}
class x8 extends z6 {
  constructor(t = {}) {
    super(128, t.dkLen === void 0 ? 64 : t.dkLen, t, 64, 16, 16),
      (this.v0l = ze[0] | 0),
      (this.v0h = ze[1] | 0),
      (this.v1l = ze[2] | 0),
      (this.v1h = ze[3] | 0),
      (this.v2l = ze[4] | 0),
      (this.v2h = ze[5] | 0),
      (this.v3l = ze[6] | 0),
      (this.v3h = ze[7] | 0),
      (this.v4l = ze[8] | 0),
      (this.v4h = ze[9] | 0),
      (this.v5l = ze[10] | 0),
      (this.v5h = ze[11] | 0),
      (this.v6l = ze[12] | 0),
      (this.v6h = ze[13] | 0),
      (this.v7l = ze[14] | 0),
      (this.v7h = ze[15] | 0);
    const r = t.key ? t.key.length : 0;
    if (((this.v0l ^= this.outputLen | (r << 8) | 65536 | (1 << 24)), t.salt)) {
      const n = va(Or(t.salt));
      (this.v4l ^= zt(n[0])),
        (this.v4h ^= zt(n[1])),
        (this.v5l ^= zt(n[2])),
        (this.v5h ^= zt(n[3]));
    }
    if (t.personalization) {
      const n = va(Or(t.personalization));
      (this.v6l ^= zt(n[0])),
        (this.v6h ^= zt(n[1])),
        (this.v7l ^= zt(n[2])),
        (this.v7h ^= zt(n[3]));
    }
    if (t.key) {
      const n = new Uint8Array(this.blockLen);
      n.set(Or(t.key)), this.update(n);
    }
  }
  get() {
    let {
      v0l: t,
      v0h: r,
      v1l: n,
      v1h: s,
      v2l: i,
      v2h: o,
      v3l: c,
      v3h: d,
      v4l: l,
      v4h: f,
      v5l: u,
      v5h: h,
      v6l: b,
      v6h: y,
      v7l: p,
      v7h: x,
    } = this;
    return [t, r, n, s, i, o, c, d, l, f, u, h, b, y, p, x];
  }
  set(t, r, n, s, i, o, c, d, l, f, u, h, b, y, p, x) {
    (this.v0l = t | 0),
      (this.v0h = r | 0),
      (this.v1l = n | 0),
      (this.v1h = s | 0),
      (this.v2l = i | 0),
      (this.v2h = o | 0),
      (this.v3l = c | 0),
      (this.v3h = d | 0),
      (this.v4l = l | 0),
      (this.v4h = f | 0),
      (this.v5l = u | 0),
      (this.v5h = h | 0),
      (this.v6l = b | 0),
      (this.v6h = y | 0),
      (this.v7l = p | 0),
      (this.v7h = x | 0);
  }
  compress(t, r, n) {
    this.get().forEach((d, l) => (W[l] = d)), W.set(ze, 16);
    let { h: s, l: i } = ne.fromBig(BigInt(this.length));
    (W[24] = ze[8] ^ i), (W[25] = ze[9] ^ s), n && ((W[28] = ~W[28]), (W[29] = ~W[29]));
    let o = 0;
    const c = G6;
    for (let d = 0; d < 12; d++)
      lr(0, 4, 8, 12, t, r + 2 * c[o++]),
        ur(0, 4, 8, 12, t, r + 2 * c[o++]),
        lr(1, 5, 9, 13, t, r + 2 * c[o++]),
        ur(1, 5, 9, 13, t, r + 2 * c[o++]),
        lr(2, 6, 10, 14, t, r + 2 * c[o++]),
        ur(2, 6, 10, 14, t, r + 2 * c[o++]),
        lr(3, 7, 11, 15, t, r + 2 * c[o++]),
        ur(3, 7, 11, 15, t, r + 2 * c[o++]),
        lr(0, 5, 10, 15, t, r + 2 * c[o++]),
        ur(0, 5, 10, 15, t, r + 2 * c[o++]),
        lr(1, 6, 11, 12, t, r + 2 * c[o++]),
        ur(1, 6, 11, 12, t, r + 2 * c[o++]),
        lr(2, 7, 8, 13, t, r + 2 * c[o++]),
        ur(2, 7, 8, 13, t, r + 2 * c[o++]),
        lr(3, 4, 9, 14, t, r + 2 * c[o++]),
        ur(3, 4, 9, 14, t, r + 2 * c[o++]);
    (this.v0l ^= W[0] ^ W[16]),
      (this.v0h ^= W[1] ^ W[17]),
      (this.v1l ^= W[2] ^ W[18]),
      (this.v1h ^= W[3] ^ W[19]),
      (this.v2l ^= W[4] ^ W[20]),
      (this.v2h ^= W[5] ^ W[21]),
      (this.v3l ^= W[6] ^ W[22]),
      (this.v3h ^= W[7] ^ W[23]),
      (this.v4l ^= W[8] ^ W[24]),
      (this.v4h ^= W[9] ^ W[25]),
      (this.v5l ^= W[10] ^ W[26]),
      (this.v5h ^= W[11] ^ W[27]),
      (this.v6l ^= W[12] ^ W[28]),
      (this.v6h ^= W[13] ^ W[29]),
      (this.v7l ^= W[14] ^ W[30]),
      (this.v7h ^= W[15] ^ W[31]),
      W.fill(0);
  }
  destroy() {
    (this.destroyed = !0),
      this.buffer32.fill(0),
      this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
const wa = V6((e) => new x8(e));
function Zd(e, t) {
  return yn
    .IntentMessage(yn.fixedArray(t.length, yn.u8()))
    .serialize({
      intent: { scope: { [e]: !0 }, version: { V0: !0 }, appId: { Sui: !0 } },
      value: t,
    })
    .toBytes();
}
function Jd(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
class Xd {
  equals(t) {
    return Jd(this.toRawBytes(), t.toRawBytes());
  }
  toBase64() {
    return at(this.toRawBytes());
  }
  toString() {
    throw new Error(
      '`toString` is not implemented on public keys. Use `toBase64()` or `toRawBytes()` instead.'
    );
  }
  toSuiPublicKey() {
    const t = this.toSuiBytes();
    return at(t);
  }
  verifyWithIntent(t, r, n) {
    const s = Zd(n, t),
      i = wa(s, { dkLen: 32 });
    return this.verify(i, r);
  }
  verifyPersonalMessage(t, r) {
    return this.verifyWithIntent(yn.vector(yn.u8()).serialize(t).toBytes(), r, 'PersonalMessage');
  }
  verifyTransaction(t, r) {
    return this.verifyWithIntent(t, r, 'TransactionData');
  }
  toSuiBytes() {
    const t = this.toRawBytes(),
      r = new Uint8Array(t.length + 1);
    return r.set([this.flag()]), r.set(t, 1), r;
  }
  toSuiAddress() {
    return bn(Qd(wa(this.toSuiBytes(), { dkLen: 32 })).slice(0, Cs * 2));
  }
}
const ks = { ED25519: 0, Secp256k1: 1, Secp256r1: 2, MultiSig: 3, ZkLogin: 5 },
  p8 = { ED25519: 32, Secp256k1: 33, Secp256r1: 33 },
  eh = { 0: 'ED25519', 1: 'Secp256k1', 2: 'Secp256r1', 3: 'MultiSig', 5: 'ZkLogin' };
function b8(e, t) {
  if (!!!e) throw new Error(t);
}
const th = {
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
  y8 = new Set(Object.keys(th));
function ul(e) {
  const t = e == null ? void 0 : e.kind;
  return typeof t == 'string' && y8.has(t);
}
var fl;
(function (e) {
  (e.QUERY = 'query'), (e.MUTATION = 'mutation'), (e.SUBSCRIPTION = 'subscription');
})(fl || (fl = {}));
var ec;
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
})(ec || (ec = {}));
function dl(e) {
  return e === 9 || e === 32;
}
function m8(e, t) {
  const r = e.replace(/"""/g, '\\"""'),
    n = r.split(/\r\n|[\n\r]/g),
    s = n.length === 1,
    i = n.length > 1 && n.slice(1).every((b) => b.length === 0 || dl(b.charCodeAt(0))),
    o = r.endsWith('\\"""'),
    c = e.endsWith('"') && !o,
    d = e.endsWith('\\'),
    l = c || d,
    f = !(t != null && t.minimize) && (!s || e.length > 70 || l || i || o);
  let u = '';
  const h = s && dl(e.charCodeAt(0));
  return (
    ((f && !h) || i) &&
      (u += `
`),
    (u += r),
    (f || l) &&
      (u += `
`),
    '"""' + u + '"""'
  );
}
const g8 = 10,
  rh = 2;
function v8(e) {
  return Ga(e, []);
}
function Ga(e, t) {
  switch (typeof e) {
    case 'string':
      return JSON.stringify(e);
    case 'function':
      return e.name ? `[function ${e.name}]` : '[function]';
    case 'object':
      return w8(e, t);
    default:
      return String(e);
  }
}
function w8(e, t) {
  if (e === null) return 'null';
  if (t.includes(e)) return '[Circular]';
  const r = [...t, e];
  if (S8(e)) {
    const n = e.toJSON();
    if (n !== e) return typeof n == 'string' ? n : Ga(n, r);
  } else if (Array.isArray(e)) return _8(e, r);
  return E8(e, r);
}
function S8(e) {
  return typeof e.toJSON == 'function';
}
function E8(e, t) {
  const r = Object.entries(e);
  return r.length === 0
    ? '{}'
    : t.length > rh
      ? '[' + $8(e) + ']'
      : '{ ' + r.map(([s, i]) => s + ': ' + Ga(i, t)).join(', ') + ' }';
}
function _8(e, t) {
  if (e.length === 0) return '[]';
  if (t.length > rh) return '[Array]';
  const r = Math.min(g8, e.length),
    n = e.length - r,
    s = [];
  for (let i = 0; i < r; ++i) s.push(Ga(e[i], t));
  return (
    n === 1 ? s.push('... 1 more item') : n > 1 && s.push(`... ${n} more items`),
    '[' + s.join(', ') + ']'
  );
}
function $8(e) {
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
function A8(e) {
  return `"${e.replace(I8, T8)}"`;
}
const I8 = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function T8(e) {
  return P8[e.charCodeAt(0)];
}
const P8 = [
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
  C8 = Object.freeze({});
function k8(e, t, r = th) {
  const n = new Map();
  for (const S of Object.values(ec)) n.set(S, D8(t, S));
  let s,
    i = Array.isArray(e),
    o = [e],
    c = -1,
    d = [],
    l = e,
    f,
    u;
  const h = [],
    b = [];
  do {
    c++;
    const S = c === o.length,
      _ = S && d.length !== 0;
    if (S) {
      if (((f = b.length === 0 ? void 0 : h[h.length - 1]), (l = u), (u = b.pop()), _))
        if (i) {
          l = l.slice();
          let I = 0;
          for (const [A, k] of d) {
            const P = A - I;
            k === null ? (l.splice(P, 1), I++) : (l[P] = k);
          }
        } else {
          l = Object.defineProperties({}, Object.getOwnPropertyDescriptors(l));
          for (const [I, A] of d) l[I] = A;
        }
      (c = s.index), (o = s.keys), (d = s.edits), (i = s.inArray), (s = s.prev);
    } else if (u) {
      if (((f = i ? c : o[c]), (l = u[f]), l == null)) continue;
      h.push(f);
    }
    let m;
    if (!Array.isArray(l)) {
      var y, p;
      ul(l) || b8(!1, `Invalid AST Node: ${v8(l)}.`);
      const I = S
        ? (y = n.get(l.kind)) === null || y === void 0
          ? void 0
          : y.leave
        : (p = n.get(l.kind)) === null || p === void 0
          ? void 0
          : p.enter;
      if (((m = I == null ? void 0 : I.call(t, l, f, u, h, b)), m === C8)) break;
      if (m === !1) {
        if (!S) {
          h.pop();
          continue;
        }
      } else if (m !== void 0 && (d.push([f, m]), !S))
        if (ul(m)) l = m;
        else {
          h.pop();
          continue;
        }
    }
    if ((m === void 0 && _ && d.push([f, l]), S)) h.pop();
    else {
      var x;
      (s = { inArray: i, index: c, keys: o, edits: d, prev: s }),
        (i = Array.isArray(l)),
        (o = i ? l : (x = r[l.kind]) !== null && x !== void 0 ? x : []),
        (c = -1),
        (d = []),
        u && b.push(u),
        (u = l);
    }
  } while (s !== void 0);
  return d.length !== 0 ? d[d.length - 1][1] : e;
}
function D8(e, t) {
  const r = e[t];
  return typeof r == 'object'
    ? r
    : typeof r == 'function'
      ? { enter: r, leave: void 0 }
      : { enter: e.enter, leave: e.leave };
}
function O8(e) {
  return k8(e, L8);
}
const B8 = 80,
  L8 = {
    Name: { leave: (e) => e.value },
    Variable: { leave: (e) => '$' + e.name },
    Document: {
      leave: (e) =>
        Z(
          e.definitions,
          `

`
        ),
    },
    OperationDefinition: {
      leave(e) {
        const t = me('(', Z(e.variableDefinitions, ', '), ')'),
          r = Z([e.operation, Z([e.name, t]), Z(e.directives, ' ')], ' ');
        return (r === 'query' ? '' : r + ' ') + e.selectionSet;
      },
    },
    VariableDefinition: {
      leave: ({ variable: e, type: t, defaultValue: r, directives: n }) =>
        e + ': ' + t + me(' = ', r) + me(' ', Z(n, ' ')),
    },
    SelectionSet: { leave: ({ selections: e }) => _t(e) },
    Field: {
      leave({ alias: e, name: t, arguments: r, directives: n, selectionSet: s }) {
        const i = me('', e, ': ') + t;
        let o = i + me('(', Z(r, ', '), ')');
        return (
          o.length > B8 &&
            (o =
              i +
              me(
                `(
`,
                ra(
                  Z(
                    r,
                    `
`
                  )
                ),
                `
)`
              )),
          Z([o, Z(n, ' '), s], ' ')
        );
      },
    },
    Argument: { leave: ({ name: e, value: t }) => e + ': ' + t },
    FragmentSpread: { leave: ({ name: e, directives: t }) => '...' + e + me(' ', Z(t, ' ')) },
    InlineFragment: {
      leave: ({ typeCondition: e, directives: t, selectionSet: r }) =>
        Z(['...', me('on ', e), Z(t, ' '), r], ' '),
    },
    FragmentDefinition: {
      leave: ({
        name: e,
        typeCondition: t,
        variableDefinitions: r,
        directives: n,
        selectionSet: s,
      }) => `fragment ${e}${me('(', Z(r, ', '), ')')} on ${t} ${me('', Z(n, ' '), ' ')}` + s,
    },
    IntValue: { leave: ({ value: e }) => e },
    FloatValue: { leave: ({ value: e }) => e },
    StringValue: { leave: ({ value: e, block: t }) => (t ? m8(e) : A8(e)) },
    BooleanValue: { leave: ({ value: e }) => (e ? 'true' : 'false') },
    NullValue: { leave: () => 'null' },
    EnumValue: { leave: ({ value: e }) => e },
    ListValue: { leave: ({ values: e }) => '[' + Z(e, ', ') + ']' },
    ObjectValue: { leave: ({ fields: e }) => '{' + Z(e, ', ') + '}' },
    ObjectField: { leave: ({ name: e, value: t }) => e + ': ' + t },
    Directive: { leave: ({ name: e, arguments: t }) => '@' + e + me('(', Z(t, ', '), ')') },
    NamedType: { leave: ({ name: e }) => e },
    ListType: { leave: ({ type: e }) => '[' + e + ']' },
    NonNullType: { leave: ({ type: e }) => e + '!' },
    SchemaDefinition: {
      leave: ({ description: e, directives: t, operationTypes: r }) =>
        me(
          '',
          e,
          `
`
        ) + Z(['schema', Z(t, ' '), _t(r)], ' '),
    },
    OperationTypeDefinition: { leave: ({ operation: e, type: t }) => e + ': ' + t },
    ScalarTypeDefinition: {
      leave: ({ description: e, name: t, directives: r }) =>
        me(
          '',
          e,
          `
`
        ) + Z(['scalar', t, Z(r, ' ')], ' '),
    },
    ObjectTypeDefinition: {
      leave: ({ description: e, name: t, interfaces: r, directives: n, fields: s }) =>
        me(
          '',
          e,
          `
`
        ) + Z(['type', t, me('implements ', Z(r, ' & ')), Z(n, ' '), _t(s)], ' '),
    },
    FieldDefinition: {
      leave: ({ description: e, name: t, arguments: r, type: n, directives: s }) =>
        me(
          '',
          e,
          `
`
        ) +
        t +
        (hl(r)
          ? me(
              `(
`,
              ra(
                Z(
                  r,
                  `
`
                )
              ),
              `
)`
            )
          : me('(', Z(r, ', '), ')')) +
        ': ' +
        n +
        me(' ', Z(s, ' ')),
    },
    InputValueDefinition: {
      leave: ({ description: e, name: t, type: r, defaultValue: n, directives: s }) =>
        me(
          '',
          e,
          `
`
        ) + Z([t + ': ' + r, me('= ', n), Z(s, ' ')], ' '),
    },
    InterfaceTypeDefinition: {
      leave: ({ description: e, name: t, interfaces: r, directives: n, fields: s }) =>
        me(
          '',
          e,
          `
`
        ) + Z(['interface', t, me('implements ', Z(r, ' & ')), Z(n, ' '), _t(s)], ' '),
    },
    UnionTypeDefinition: {
      leave: ({ description: e, name: t, directives: r, types: n }) =>
        me(
          '',
          e,
          `
`
        ) + Z(['union', t, Z(r, ' '), me('= ', Z(n, ' | '))], ' '),
    },
    EnumTypeDefinition: {
      leave: ({ description: e, name: t, directives: r, values: n }) =>
        me(
          '',
          e,
          `
`
        ) + Z(['enum', t, Z(r, ' '), _t(n)], ' '),
    },
    EnumValueDefinition: {
      leave: ({ description: e, name: t, directives: r }) =>
        me(
          '',
          e,
          `
`
        ) + Z([t, Z(r, ' ')], ' '),
    },
    InputObjectTypeDefinition: {
      leave: ({ description: e, name: t, directives: r, fields: n }) =>
        me(
          '',
          e,
          `
`
        ) + Z(['input', t, Z(r, ' '), _t(n)], ' '),
    },
    DirectiveDefinition: {
      leave: ({ description: e, name: t, arguments: r, repeatable: n, locations: s }) =>
        me(
          '',
          e,
          `
`
        ) +
        'directive @' +
        t +
        (hl(r)
          ? me(
              `(
`,
              ra(
                Z(
                  r,
                  `
`
                )
              ),
              `
)`
            )
          : me('(', Z(r, ', '), ')')) +
        (n ? ' repeatable' : '') +
        ' on ' +
        Z(s, ' | '),
    },
    SchemaExtension: {
      leave: ({ directives: e, operationTypes: t }) => Z(['extend schema', Z(e, ' '), _t(t)], ' '),
    },
    ScalarTypeExtension: {
      leave: ({ name: e, directives: t }) => Z(['extend scalar', e, Z(t, ' ')], ' '),
    },
    ObjectTypeExtension: {
      leave: ({ name: e, interfaces: t, directives: r, fields: n }) =>
        Z(['extend type', e, me('implements ', Z(t, ' & ')), Z(r, ' '), _t(n)], ' '),
    },
    InterfaceTypeExtension: {
      leave: ({ name: e, interfaces: t, directives: r, fields: n }) =>
        Z(['extend interface', e, me('implements ', Z(t, ' & ')), Z(r, ' '), _t(n)], ' '),
    },
    UnionTypeExtension: {
      leave: ({ name: e, directives: t, types: r }) =>
        Z(['extend union', e, Z(t, ' '), me('= ', Z(r, ' | '))], ' '),
    },
    EnumTypeExtension: {
      leave: ({ name: e, directives: t, values: r }) =>
        Z(['extend enum', e, Z(t, ' '), _t(r)], ' '),
    },
    InputObjectTypeExtension: {
      leave: ({ name: e, directives: t, fields: r }) =>
        Z(['extend input', e, Z(t, ' '), _t(r)], ' '),
    },
  };
function Z(e, t = '') {
  var r;
  return (r = e == null ? void 0 : e.filter((n) => n).join(t)) !== null && r !== void 0 ? r : '';
}
function _t(e) {
  return me(
    `{
`,
    ra(
      Z(
        e,
        `
`
      )
    ),
    `
}`
  );
}
function me(e, t, r = '') {
  return t != null && t !== '' ? e + t + r : '';
}
function ra(e) {
  return me(
    '  ',
    e.replace(
      /\n/g,
      `
  `
    )
  );
}
function hl(e) {
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
var nh = (e) => {
    throw TypeError(e);
  },
  sh = (e, t, r) => t.has(e) || nh('Cannot ' + r),
  Hs = (e, t, r) => (sh(e, t, 'read from private field'), r ? r.call(e) : t.get(e)),
  qs = (e, t, r) =>
    t.has(e)
      ? nh('Cannot add the same private member more than once')
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, r),
  Vs = (e, t, r, n) => (sh(e, t, 'write to private field'), n ? n.call(e, r) : t.set(e, r), r),
  na,
  sa,
  aa,
  ia;
class M8 extends Error {}
class N8 {
  constructor({ url: t, fetch: r = fetch, headers: n = {}, queries: s = {} }) {
    qs(this, na),
      qs(this, sa),
      qs(this, aa),
      qs(this, ia),
      Vs(this, na, t),
      Vs(this, sa, s),
      Vs(this, aa, n),
      Vs(this, ia, (...i) => r(...i));
  }
  async query(t) {
    const r = await Hs(this, ia).call(this, Hs(this, na), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...Hs(this, aa) },
      body: JSON.stringify({
        query: typeof t.query == 'string' ? String(t.query) : O8(t.query),
        variables: t.variables,
        extensions: t.extensions,
        operationName: t.operationName,
      }),
    });
    if (!r.ok) throw new M8(`GraphQL request failed: ${r.statusText} (${r.status})`);
    return await r.json();
  }
  async execute(t, r) {
    return this.query({ ...r, query: Hs(this, sa)[t] });
  }
}
na = new WeakMap();
sa = new WeakMap();
aa = new WeakMap();
ia = new WeakMap();
var Gs = {
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
class R8 extends Error {
  constructor(t, r, n, s, i, o, c) {
    super(t),
      (this.name = 'GraphQLError'),
      (this.message = t),
      i && (this.path = i),
      r && (this.nodes = Array.isArray(r) ? r : [r]),
      n && (this.source = n),
      s && (this.positions = s),
      o && (this.originalError = o);
    var d = c;
    if (!d && o) {
      var l = o.extensions;
      l && typeof l == 'object' && (d = l);
    }
    this.extensions = d || {};
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
var $e, se;
function Ge(e) {
  return new R8(`Syntax Error: Unexpected token at ${se} in ${e}`);
}
function dt(e) {
  if (((e.lastIndex = se), e.test($e))) return $e.slice(se, (se = e.lastIndex));
}
var zs = / +(?=[^\s])/y;
function U8(e) {
  for (
    var t = e.split(`
`),
      r = '',
      n = 0,
      s = 0,
      i = t.length - 1,
      o = 0;
    o < t.length;
    o++
  )
    (zs.lastIndex = 0),
      zs.test(t[o]) && (o && (!n || zs.lastIndex < n) && (n = zs.lastIndex), (s = s || o), (i = o));
  for (var c = s; c <= i; c++)
    c !== s &&
      (r += `
`),
      (r += t[c].slice(n).replace(/\\"""/g, '"""'));
  return r;
}
function le() {
  for (
    var e = 0 | $e.charCodeAt(se++);
    e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279;
    e = 0 | $e.charCodeAt(se++)
  )
    if (e === 35) for (; (e = $e.charCodeAt(se++)) !== 10 && e !== 13; );
  se--;
}
var rt = /[_A-Za-z]\w*/y,
  Ti = new RegExp(
    '(?:(null|true|false)|\\$(' +
      rt.source +
      ')|(-?\\d+)((?:\\.\\d+)?[eE][+-]?\\d+|\\.\\d+)?|("""(?:"""|(?:[\\s\\S]*?[^\\\\])"""))|("(?:"|[^\\r\\n]*?[^\\\\]"))|(' +
      rt.source +
      '))',
    'y'
  ),
  mr = (function (e) {
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
  })(mr || {}),
  F8 = /\\/;
function Sa(e) {
  var t, r;
  if (((Ti.lastIndex = se), $e.charCodeAt(se) === 91)) {
    se++, le();
    for (var n = []; $e.charCodeAt(se) !== 93; ) n.push(Sa(e));
    return se++, le(), { kind: 'ListValue', values: n };
  } else if ($e.charCodeAt(se) === 123) {
    se++, le();
    for (var s = []; $e.charCodeAt(se) !== 125; ) {
      if ((t = dt(rt)) == null || (le(), $e.charCodeAt(se++) !== 58)) throw Ge('ObjectField');
      le(), s.push({ kind: 'ObjectField', name: { kind: 'Name', value: t }, value: Sa(e) });
    }
    return se++, le(), { kind: 'ObjectValue', fields: s };
  } else if ((r = Ti.exec($e)) != null) {
    if (((se = Ti.lastIndex), le(), (t = r[mr.Const]) != null))
      return t === 'null' ? { kind: 'NullValue' } : { kind: 'BooleanValue', value: t === 'true' };
    if ((t = r[mr.Var]) != null) {
      if (e) throw Ge('Variable');
      return { kind: 'Variable', name: { kind: 'Name', value: t } };
    } else if ((t = r[mr.Int]) != null) {
      var i;
      return (i = r[mr.Float]) != null
        ? { kind: 'FloatValue', value: t + i }
        : { kind: 'IntValue', value: t };
    } else {
      if ((t = r[mr.BlockString]) != null)
        return { kind: 'StringValue', value: U8(t.slice(3, -3)), block: !0 };
      if ((t = r[mr.String]) != null)
        return {
          kind: 'StringValue',
          value: F8.test(t) ? JSON.parse(t) : t.slice(1, -1),
          block: !1,
        };
      if ((t = r[mr.Enum]) != null) return { kind: 'EnumValue', value: t };
    }
  }
  throw Ge('Value');
}
function ah(e) {
  if ($e.charCodeAt(se) === 40) {
    var t = [];
    se++, le();
    var r;
    do {
      if ((r = dt(rt)) == null || (le(), $e.charCodeAt(se++) !== 58)) throw Ge('Argument');
      le(), t.push({ kind: 'Argument', name: { kind: 'Name', value: r }, value: Sa(e) });
    } while ($e.charCodeAt(se) !== 41);
    return se++, le(), t;
  }
}
function mn(e) {
  if ($e.charCodeAt(se) === 64) {
    var t = [],
      r;
    do {
      if ((se++, (r = dt(rt)) == null)) throw Ge('Directive');
      le(), t.push({ kind: 'Directive', name: { kind: 'Name', value: r }, arguments: ah(e) });
    } while ($e.charCodeAt(se) === 64);
    return t;
  }
}
function j8() {
  for (var e, t = 0; $e.charCodeAt(se) === 91; ) t++, se++, le();
  if ((e = dt(rt)) == null) throw Ge('NamedType');
  le();
  var r = { kind: 'NamedType', name: { kind: 'Name', value: e } };
  do
    if (($e.charCodeAt(se) === 33 && (se++, le(), (r = { kind: 'NonNullType', type: r })), t)) {
      if ($e.charCodeAt(se++) !== 93) throw Ge('NamedType');
      le(), (r = { kind: 'ListType', type: r });
    }
  while (t--);
  return r;
}
var Pi = new RegExp('(?:(\\.{3})|(' + rt.source + '))', 'y'),
  tc = (function (e) {
    return (e[(e.Spread = 1)] = 'Spread'), (e[(e.Name = 2)] = 'Name'), e;
  })(tc || {});
function Ea() {
  var e = [],
    t,
    r;
  do
    if (((Pi.lastIndex = se), (r = Pi.exec($e)) != null)) {
      if (((se = Pi.lastIndex), r[tc.Spread] != null)) {
        le();
        var n = dt(rt);
        if (n != null && n !== 'on')
          le(),
            e.push({
              kind: 'FragmentSpread',
              name: { kind: 'Name', value: n },
              directives: mn(!1),
            });
        else {
          if ((le(), n === 'on')) {
            if ((n = dt(rt)) == null) throw Ge('NamedType');
            le();
          }
          var s = mn(!1);
          if ($e.charCodeAt(se++) !== 123) throw Ge('InlineFragment');
          le(),
            e.push({
              kind: 'InlineFragment',
              typeCondition: n ? { kind: 'NamedType', name: { kind: 'Name', value: n } } : void 0,
              directives: s,
              selectionSet: Ea(),
            });
        }
      } else if ((t = r[tc.Name]) != null) {
        var i = void 0;
        if ((le(), $e.charCodeAt(se) === 58)) {
          if ((se++, le(), (i = t), (t = dt(rt)) == null)) throw Ge('Field');
          le();
        }
        var o = ah(!1);
        le();
        var c = mn(!1),
          d = void 0;
        $e.charCodeAt(se) === 123 && (se++, le(), (d = Ea())),
          e.push({
            kind: 'Field',
            alias: i ? { kind: 'Name', value: i } : void 0,
            name: { kind: 'Name', value: t },
            arguments: o,
            directives: c,
            selectionSet: d,
          });
      }
    } else throw Ge('SelectionSet');
  while ($e.charCodeAt(se) !== 125);
  return se++, le(), { kind: 'SelectionSet', selections: e };
}
function H8() {
  var e, t;
  if ((e = dt(rt)) == null || (le(), dt(rt) !== 'on') || (le(), (t = dt(rt)) == null))
    throw Ge('FragmentDefinition');
  le();
  var r = mn(!1);
  if ($e.charCodeAt(se++) !== 123) throw Ge('FragmentDefinition');
  return (
    le(),
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: e },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: t } },
      directives: r,
      selectionSet: Ea(),
    }
  );
}
var q8 = /(?:query|mutation|subscription|fragment)/y;
function V8(e) {
  var t, r, n;
  if (
    (e &&
      (le(),
      (t = dt(rt)),
      (r = (function () {
        if ((le(), $e.charCodeAt(se) === 40)) {
          var i = [];
          se++, le();
          var o;
          do {
            if ($e.charCodeAt(se++) !== 36 || (o = dt(rt)) == null) throw Ge('Variable');
            if ((le(), $e.charCodeAt(se++) !== 58)) throw Ge('VariableDefinition');
            le();
            var c = j8(),
              d = void 0;
            $e.charCodeAt(se) === 61 && (se++, le(), (d = Sa(!0))),
              le(),
              i.push({
                kind: 'VariableDefinition',
                variable: { kind: 'Variable', name: { kind: 'Name', value: o } },
                type: c,
                defaultValue: d,
                directives: mn(!0),
              });
          } while ($e.charCodeAt(se) !== 41);
          return se++, le(), i;
        }
      })()),
      (n = mn(!1))),
    $e.charCodeAt(se) === 123)
  )
    return (
      se++,
      le(),
      {
        kind: 'OperationDefinition',
        operation: e || 'query',
        name: t ? { kind: 'Name', value: t } : void 0,
        variableDefinitions: r,
        directives: n,
        selectionSet: Ea(),
      }
    );
}
function G8(e, t) {
  return (
    (se = 0),
    (function (n, s) {
      var i, o;
      le();
      var c = [];
      do
        if ((i = dt(q8)) === 'fragment') le(), c.push(H8());
        else if ((o = V8(i)) != null) c.push(o);
        else throw Ge('Document');
      while (se < n.length);
      if (!s) {
        var d;
        return {
          kind: 'Document',
          definitions: c,
          set loc(l) {
            d = l;
          },
          get loc() {
            return (
              d ||
                (d = {
                  start: 0,
                  end: n.length,
                  startToken: void 0,
                  endToken: void 0,
                  source: { body: n, name: 'graphql.web', locationOffset: { line: 1, column: 1 } },
                }),
              d
            );
          },
        };
      }
      return { kind: 'Document', definitions: c };
    })(($e = typeof e.body == 'string' ? e.body : e), t && t.noLocation)
  );
}
var xl = 0,
  Ci = new Set();
function ih() {
  function e(t, r) {
    var n = G8(t).definitions,
      s = new Set();
    for (var i of r || [])
      for (var o of i.definitions)
        o.kind === Gs.FRAGMENT_DEFINITION && !s.has(o) && (n.push(o), s.add(o));
    var c;
    (c = n[0].kind === Gs.FRAGMENT_DEFINITION) &&
      n[0].directives &&
      (n[0].directives = n[0].directives.filter((l) => l.name.value !== '_unmask'));
    var d;
    return {
      kind: Gs.DOCUMENT,
      definitions: n,
      get loc() {
        if (!d && c) {
          var l =
            t +
            (function (u) {
              try {
                xl++;
                var h = '';
                for (var b of u)
                  if (!Ci.has(b)) {
                    Ci.add(b);
                    var { loc: y } = b;
                    y && (h += y.source.body);
                  }
                return h;
              } finally {
                --xl == 0 && Ci.clear();
              }
            })(r || []);
          return {
            start: 0,
            end: l.length,
            source: { body: l, name: 'GraphQLTada', locationOffset: { line: 1, column: 1 } },
          };
        }
        return d;
      },
      set loc(l) {
        d = l;
      },
    };
  }
  return (
    (e.scalar = function (r, n) {
      return n;
    }),
    (e.persisted = function (r, n) {
      return { kind: Gs.DOCUMENT, definitions: n ? n.definitions : [], documentId: r };
    }),
    e
  );
}
ih();
const z8 = ih();
function K8(e) {
  if (e.length !== 1) throw new Error('Invalid base64Url character: ' + e);
  const r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'.indexOf(e);
  if (r === -1) throw new Error('Invalid base64Url character: ' + e);
  const n = r.toString(2).padStart(6, '0');
  return Array.from(n).map(Number);
}
function W8(e) {
  let t = [];
  for (let r = 0; r < e.length; r++) {
    const n = e.charAt(r),
      s = K8(n);
    t = t.concat(s);
  }
  return t;
}
function Q8(e, t) {
  if (e.length < 2) throw new Error(`Input (s = ${e}) is not tightly packed because s.length < 2`);
  let r = W8(e);
  const n = t % 4;
  if (n !== 0)
    if (n === 1) r = r.slice(2);
    else if (n === 2) r = r.slice(4);
    else throw new Error(`Input (s = ${e}) is not tightly packed because i%4 = 3 (i = ${t}))`);
  const s = (t + e.length - 1) % 4;
  if (s !== 3)
    if (s === 2) r = r.slice(0, r.length - 2);
    else if (s === 1) r = r.slice(0, r.length - 4);
    else
      throw new Error(
        `Input (s = ${e}) is not tightly packed because (i + s.length - 1)%4 = 0 (i = ${t}))`
      );
  if (r.length % 8 !== 0) throw new Error('We should never reach here...');
  const i = new Uint8Array(Math.floor(r.length / 8));
  let o = 0;
  for (let c = 0; c < r.length; c += 8) {
    const d = r.slice(c, c + 8),
      l = parseInt(d.join(''), 2);
    i[o++] = l;
  }
  return new TextDecoder().decode(i);
}
function Y8(e) {
  if (!(e.slice(-1) === '}' || e.slice(-1) === ',')) throw new Error('Invalid claim');
  const t = JSON.parse('{' + e.slice(0, -1) + '}');
  if (Object.keys(t).length !== 1) throw new Error('Invalid claim');
  const r = Object.keys(t)[0];
  return [r, t[r]];
}
function Z8(e, t) {
  const r = Q8(e.value, e.indexMod4),
    [n, s] = Y8(r);
  if (n !== t) throw new Error(`Invalid field name: found ${n} expected ${t}`);
  return s;
}
const J8 = g.struct('ZkLoginSignature', {
  inputs: g.struct('ZkLoginSignatureInputs', {
    proofPoints: g.struct('ZkLoginSignatureInputsProofPoints', {
      a: g.vector(g.string()),
      b: g.vector(g.vector(g.string())),
      c: g.vector(g.string()),
    }),
    issBase64Details: g.struct('ZkLoginSignatureInputsClaim', {
      value: g.string(),
      indexMod4: g.u8(),
    }),
    headerBase64: g.string(),
    addressSeed: g.string(),
  }),
  maxEpoch: g.u64(),
  userSignature: g.vector(g.u8()),
});
function X8(e) {
  return J8.parse(typeof e == 'string' ? Ft(e) : e);
}
function e5(e) {
  for (let t = 0; t < e.length; t++) if (e[t] !== 0) return t;
  return -1;
}
function s0(e, t) {
  const r = e.toString(16);
  return j6(r.padStart(t * 2, '0').slice(-t * 2));
}
function oh(e, t) {
  const r = s0(e, t),
    n = e5(r);
  return n === -1 ? new Uint8Array([0]) : r.slice(n);
}
var ch = (e) => {
    throw TypeError(e);
  },
  lh = (e, t, r) => t.has(e) || ch('Cannot ' + r),
  Gt = (e, t, r) => (lh(e, t, 'read from private field'), r ? r.call(e) : t.get(e)),
  ki = (e, t, r) =>
    t.has(e)
      ? ch('Cannot add the same private member more than once')
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, r),
  un = (e, t, r, n) => (lh(e, t, 'write to private field'), n ? n.call(e, r) : t.set(e, r), r),
  $t,
  as,
  is;
const t5 = class rc extends Xd {
  constructor(t, { client: r } = {}) {
    super(),
      ki(this, $t),
      ki(this, as),
      ki(this, is),
      un(this, as, r),
      typeof t == 'string'
        ? un(this, $t, Ft(t))
        : t instanceof Uint8Array
          ? un(this, $t, t)
          : un(this, $t, Uint8Array.from(t)),
      un(this, is, Gt(this, $t).length !== Gt(this, $t)[0] + 1 + 32),
      Gt(this, is) && un(this, $t, pl(Gt(this, $t)));
  }
  equals(t) {
    return super.equals(t);
  }
  toSuiAddress() {
    if (Gt(this, is)) {
      const t = pl(Gt(this, $t), !0),
        r = new Uint8Array(t.length + 1);
      return (r[0] = this.flag()), r.set(t, 1), bn(Qd(wa(r, { dkLen: 32 })).slice(0, Cs * 2));
    }
    return super.toSuiAddress();
  }
  toRawBytes() {
    return Gt(this, $t);
  }
  flag() {
    return ks.ZkLogin;
  }
  async verify(t, r) {
    throw Error('does not support');
  }
  verifyPersonalMessage(t, r) {
    const n = nc(r),
      s = new rc(n.publicKey).toSuiAddress();
    return bl({
      address: s,
      bytes: at(t),
      signature: n.serializedSignature,
      intentScope: 'PERSONAL_MESSAGE',
      client: Gt(this, as),
    });
  }
  verifyTransaction(t, r) {
    const n = nc(r),
      s = new rc(n.publicKey).toSuiAddress();
    return bl({
      address: s,
      bytes: at(t),
      signature: n.serializedSignature,
      intentScope: 'TRANSACTION_DATA',
      client: Gt(this, as),
    });
  }
};
$t = new WeakMap();
as = new WeakMap();
is = new WeakMap();
let r5 = t5;
function n5(e, t, r) {
  const n = r != null && r.legacyAddress ? oh(e, 32) : s0(e, 32),
    s = new TextEncoder().encode(t),
    i = new Uint8Array(1 + s.length + n.length);
  return i.set([s.length], 0), i.set(s, 1), i.set(n, 1 + s.length), new r5(i, r);
}
const s5 = z8(`
	query Zklogin(
		$bytes: Base64!
		$signature: Base64!
		$intentScope: ZkLoginIntentScope!
		$author: SuiAddress!
	) {
		verifyZkloginSignature(
			bytes: $bytes
			signature: $signature
			intentScope: $intentScope
			author: $author
		) {
			success
			errors
		}
	}
`);
function pl(e, t = !1) {
  const r = e[0] + 1,
    n = BigInt(`0x${Nn(e.slice(r))}`),
    s = t ? oh(n, 32) : s0(n, 32),
    i = new Uint8Array(r + s.length);
  return i.set(e.slice(0, r), 0), i.set(s, r), i;
}
async function bl({
  address: e,
  bytes: t,
  signature: r,
  intentScope: n,
  client: s = new N8({ url: 'https://sui-mainnet.mystenlabs.com/graphql' }),
}) {
  var o, c;
  const i = await s.query({
    query: s5,
    variables: { bytes: t, signature: r, intentScope: n, author: e },
  });
  return (
    ((o = i.data) == null ? void 0 : o.verifyZkloginSignature.success) === !0 &&
    ((c = i.data) == null ? void 0 : c.verifyZkloginSignature.errors.length) === 0
  );
}
function nc(e) {
  const t = typeof e == 'string' ? Ft(e) : e;
  if (t[0] !== ks.ZkLogin) throw new Error('Invalid signature scheme');
  const r = t.slice(1),
    { inputs: n, maxEpoch: s, userSignature: i } = X8(r),
    { issBase64Details: o, addressSeed: c } = n,
    d = Z8(o, 'iss'),
    l = n5(BigInt(c), d);
  return {
    serializedSignature: at(t),
    signatureScheme: 'ZkLogin',
    zkLogin: { inputs: n, maxEpoch: s, userSignature: i, iss: d, addressSeed: BigInt(c) },
    signature: t,
    publicKey: l.toRawBytes(),
  };
}
function a5({ signature: e, signatureScheme: t, publicKey: r }) {
  if (!r) throw new Error('`publicKey` is required');
  const n = r.toRawBytes(),
    s = new Uint8Array(1 + e.length + n.length);
  return s.set([ks[t]]), s.set(e, 1), s.set(n, 1 + e.length), at(s);
}
function i5(e) {
  const t = Ft(e),
    r = eh[t[0]];
  switch (r) {
    case 'MultiSig':
      const n = yn.MultiSig.parse(t.slice(1));
      return { serializedSignature: e, signatureScheme: r, multisig: n, bytes: t };
    case 'ZkLogin':
      return nc(e);
    case 'ED25519':
    case 'Secp256k1':
    case 'Secp256r1':
      const s = p8[r],
        i = t.slice(1, t.length - s),
        o = t.slice(1 + i.length);
      return { serializedSignature: e, signatureScheme: r, signature: i, publicKey: o, bytes: t };
    default:
      throw new Error('Unsupported signature scheme');
  }
}
function fs(e) {
  if (!Number.isSafeInteger(e) || e < 0) throw new Error('positive integer expected, got ' + e);
}
function o5(e) {
  return e instanceof Uint8Array || (ArrayBuffer.isView(e) && e.constructor.name === 'Uint8Array');
}
function a0(e, ...t) {
  if (!o5(e)) throw new Error('Uint8Array expected');
  if (t.length > 0 && !t.includes(e.length))
    throw new Error('Uint8Array expected of length ' + t + ', got length=' + e.length);
}
function uh(e) {
  if (typeof e != 'function' || typeof e.create != 'function')
    throw new Error('Hash should be wrapped by utils.wrapConstructor');
  fs(e.outputLen), fs(e.blockLen);
}
function _a(e, t = !0) {
  if (e.destroyed) throw new Error('Hash instance has been destroyed');
  if (t && e.finished) throw new Error('Hash#digest() has already been called');
}
function c5(e, t) {
  a0(e);
  const r = t.outputLen;
  if (e.length < r) throw new Error('digestInto() expects output buffer of length at least ' + r);
}
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const oa = (e) =>
  new DataView(e.buffer, e.byteOffset, e.byteLength);
function l5(e) {
  if (typeof e != 'string') throw new Error('utf8ToBytes expected string, got ' + typeof e);
  return new Uint8Array(new TextEncoder().encode(e));
}
function ms(e) {
  return typeof e == 'string' && (e = l5(e)), a0(e), e;
}
let fh = class {
  clone() {
    return this._cloneInto();
  }
};
function u5(e, t) {
  if (t !== void 0 && {}.toString.call(t) !== '[object Object]')
    throw new Error('Options should be object or undefined');
  return Object.assign(e, t);
}
function f5(e) {
  const t = (n) => e().update(ms(n)).digest(),
    r = e();
  return (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = () => e()), t;
}
let dh = class extends fh {
  constructor(t, r) {
    super(), (this.finished = !1), (this.destroyed = !1), uh(t);
    const n = ms(r);
    if (((this.iHash = t.create()), typeof this.iHash.update != 'function'))
      throw new Error('Expected instance of class which extends utils.Hash');
    (this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen);
    const s = this.blockLen,
      i = new Uint8Array(s);
    i.set(n.length > s ? t.create().update(n).digest() : n);
    for (let o = 0; o < i.length; o++) i[o] ^= 54;
    this.iHash.update(i), (this.oHash = t.create());
    for (let o = 0; o < i.length; o++) i[o] ^= 106;
    this.oHash.update(i), i.fill(0);
  }
  update(t) {
    return _a(this), this.iHash.update(t), this;
  }
  digestInto(t) {
    _a(this),
      a0(t, this.outputLen),
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
    const { oHash: r, iHash: n, finished: s, destroyed: i, blockLen: o, outputLen: c } = this;
    return (
      (t = t),
      (t.finished = s),
      (t.destroyed = i),
      (t.blockLen = o),
      (t.outputLen = c),
      (t.oHash = r._cloneInto(t.oHash)),
      (t.iHash = n._cloneInto(t.iHash)),
      t
    );
  }
  destroy() {
    (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
  }
};
const hh = (e, t, r) => new dh(e, t).update(r).digest();
hh.create = (e, t) => new dh(e, t);
function d5(e, t, r, n) {
  uh(e);
  const s = u5({ dkLen: 32, asyncTick: 10 }, n),
    { c: i, dkLen: o, asyncTick: c } = s;
  if ((fs(i), fs(o), fs(c), i < 1)) throw new Error('PBKDF2: iterations (c) should be >= 1');
  const d = ms(t),
    l = ms(r),
    f = new Uint8Array(o),
    u = hh.create(e, d),
    h = u._cloneInto().update(l);
  return { c: i, dkLen: o, asyncTick: c, DK: f, PRF: u, PRFSalt: h };
}
function h5(e, t, r, n, s) {
  return e.destroy(), t.destroy(), n && n.destroy(), s.fill(0), r;
}
function x5(e, t, r, n) {
  const { c: s, dkLen: i, DK: o, PRF: c, PRFSalt: d } = d5(e, t, r, n);
  let l;
  const f = new Uint8Array(4),
    u = oa(f),
    h = new Uint8Array(c.outputLen);
  for (let b = 1, y = 0; y < i; b++, y += c.outputLen) {
    const p = o.subarray(y, y + c.outputLen);
    u.setInt32(0, b, !1),
      (l = d._cloneInto(l)).update(f).digestInto(h),
      p.set(h.subarray(0, p.length));
    for (let x = 1; x < s; x++) {
      c._cloneInto(l).update(h).digestInto(h);
      for (let S = 0; S < p.length; S++) p[S] ^= h[S];
    }
  }
  return h5(c, d, o, l, h);
}
function p5(e, t, r, n) {
  if (typeof e.setBigUint64 == 'function') return e.setBigUint64(t, r, n);
  const s = BigInt(32),
    i = BigInt(4294967295),
    o = Number((r >> s) & i),
    c = Number(r & i),
    d = n ? 4 : 0,
    l = n ? 0 : 4;
  e.setUint32(t + d, o, n), e.setUint32(t + l, c, n);
}
let b5 = class extends fh {
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
      (this.view = oa(this.buffer));
  }
  update(t) {
    _a(this);
    const { view: r, buffer: n, blockLen: s } = this;
    t = ms(t);
    const i = t.length;
    for (let o = 0; o < i; ) {
      const c = Math.min(s - this.pos, i - o);
      if (c === s) {
        const d = oa(t);
        for (; s <= i - o; o += s) this.process(d, o);
        continue;
      }
      n.set(t.subarray(o, o + c), this.pos),
        (this.pos += c),
        (o += c),
        this.pos === s && (this.process(r, 0), (this.pos = 0));
    }
    return (this.length += t.length), this.roundClean(), this;
  }
  digestInto(t) {
    _a(this), c5(t, this), (this.finished = !0);
    const { buffer: r, view: n, blockLen: s, isLE: i } = this;
    let { pos: o } = this;
    (r[o++] = 128),
      this.buffer.subarray(o).fill(0),
      this.padOffset > s - o && (this.process(n, 0), (o = 0));
    for (let u = o; u < s; u++) r[u] = 0;
    p5(n, s - 8, BigInt(this.length * 8), i), this.process(n, 0);
    const c = oa(t),
      d = this.outputLen;
    if (d % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
    const l = d / 4,
      f = this.get();
    if (l > f.length) throw new Error('_sha2: outputLen bigger than state');
    for (let u = 0; u < l; u++) c.setUint32(4 * u, f[u], i);
  }
  digest() {
    const { buffer: t, outputLen: r } = this;
    this.digestInto(t);
    const n = t.slice(0, r);
    return this.destroy(), n;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: r, buffer: n, length: s, finished: i, destroyed: o, pos: c } = this;
    return (
      (t.length = s), (t.pos = c), (t.finished = i), (t.destroyed = o), s % r && t.buffer.set(n), t
    );
  }
};
const Ks = BigInt(2 ** 32 - 1),
  sc = BigInt(32);
function xh(e, t = !1) {
  return t
    ? { h: Number(e & Ks), l: Number((e >> sc) & Ks) }
    : { h: Number((e >> sc) & Ks) | 0, l: Number(e & Ks) | 0 };
}
function y5(e, t = !1) {
  let r = new Uint32Array(e.length),
    n = new Uint32Array(e.length);
  for (let s = 0; s < e.length; s++) {
    const { h: i, l: o } = xh(e[s], t);
    [r[s], n[s]] = [i, o];
  }
  return [r, n];
}
const m5 = (e, t) => (BigInt(e >>> 0) << sc) | BigInt(t >>> 0),
  g5 = (e, t, r) => e >>> r,
  v5 = (e, t, r) => (e << (32 - r)) | (t >>> r),
  w5 = (e, t, r) => (e >>> r) | (t << (32 - r)),
  S5 = (e, t, r) => (e << (32 - r)) | (t >>> r),
  E5 = (e, t, r) => (e << (64 - r)) | (t >>> (r - 32)),
  _5 = (e, t, r) => (e >>> (r - 32)) | (t << (64 - r)),
  $5 = (e, t) => t,
  A5 = (e, t) => e,
  I5 = (e, t, r) => (e << r) | (t >>> (32 - r)),
  T5 = (e, t, r) => (t << r) | (e >>> (32 - r)),
  P5 = (e, t, r) => (t << (r - 32)) | (e >>> (64 - r)),
  C5 = (e, t, r) => (e << (r - 32)) | (t >>> (64 - r));
function k5(e, t, r, n) {
  const s = (t >>> 0) + (n >>> 0);
  return { h: (e + r + ((s / 2 ** 32) | 0)) | 0, l: s | 0 };
}
const D5 = (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0),
  O5 = (e, t, r, n) => (t + r + n + ((e / 2 ** 32) | 0)) | 0,
  B5 = (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0),
  L5 = (e, t, r, n, s) => (t + r + n + s + ((e / 2 ** 32) | 0)) | 0,
  M5 = (e, t, r, n, s) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (s >>> 0),
  N5 = (e, t, r, n, s, i) => (t + r + n + s + i + ((e / 2 ** 32) | 0)) | 0,
  xe = {
    fromBig: xh,
    split: y5,
    toBig: m5,
    shrSH: g5,
    shrSL: v5,
    rotrSH: w5,
    rotrSL: S5,
    rotrBH: E5,
    rotrBL: _5,
    rotr32H: $5,
    rotr32L: A5,
    rotlSH: I5,
    rotlSL: T5,
    rotlBH: P5,
    rotlBL: C5,
    add: k5,
    add3L: D5,
    add3H: O5,
    add4L: B5,
    add4H: L5,
    add5H: N5,
    add5L: M5,
  },
  [R5, U5] = xe.split(
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
  fr = new Uint32Array(80),
  dr = new Uint32Array(80);
let F5 = class extends b5 {
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
      Ch: i,
      Cl: o,
      Dh: c,
      Dl: d,
      Eh: l,
      El: f,
      Fh: u,
      Fl: h,
      Gh: b,
      Gl: y,
      Hh: p,
      Hl: x,
    } = this;
    return [t, r, n, s, i, o, c, d, l, f, u, h, b, y, p, x];
  }
  set(t, r, n, s, i, o, c, d, l, f, u, h, b, y, p, x) {
    (this.Ah = t | 0),
      (this.Al = r | 0),
      (this.Bh = n | 0),
      (this.Bl = s | 0),
      (this.Ch = i | 0),
      (this.Cl = o | 0),
      (this.Dh = c | 0),
      (this.Dl = d | 0),
      (this.Eh = l | 0),
      (this.El = f | 0),
      (this.Fh = u | 0),
      (this.Fl = h | 0),
      (this.Gh = b | 0),
      (this.Gl = y | 0),
      (this.Hh = p | 0),
      (this.Hl = x | 0);
  }
  process(t, r) {
    for (let m = 0; m < 16; m++, r += 4) (fr[m] = t.getUint32(r)), (dr[m] = t.getUint32((r += 4)));
    for (let m = 16; m < 80; m++) {
      const I = fr[m - 15] | 0,
        A = dr[m - 15] | 0,
        k = xe.rotrSH(I, A, 1) ^ xe.rotrSH(I, A, 8) ^ xe.shrSH(I, A, 7),
        P = xe.rotrSL(I, A, 1) ^ xe.rotrSL(I, A, 8) ^ xe.shrSL(I, A, 7),
        w = fr[m - 2] | 0,
        E = dr[m - 2] | 0,
        U = xe.rotrSH(w, E, 19) ^ xe.rotrBH(w, E, 61) ^ xe.shrSH(w, E, 6),
        j = xe.rotrSL(w, E, 19) ^ xe.rotrBL(w, E, 61) ^ xe.shrSL(w, E, 6),
        z = xe.add4L(P, j, dr[m - 7], dr[m - 16]),
        V = xe.add4H(z, k, U, fr[m - 7], fr[m - 16]);
      (fr[m] = V | 0), (dr[m] = z | 0);
    }
    let {
      Ah: n,
      Al: s,
      Bh: i,
      Bl: o,
      Ch: c,
      Cl: d,
      Dh: l,
      Dl: f,
      Eh: u,
      El: h,
      Fh: b,
      Fl: y,
      Gh: p,
      Gl: x,
      Hh: S,
      Hl: _,
    } = this;
    for (let m = 0; m < 80; m++) {
      const I = xe.rotrSH(u, h, 14) ^ xe.rotrSH(u, h, 18) ^ xe.rotrBH(u, h, 41),
        A = xe.rotrSL(u, h, 14) ^ xe.rotrSL(u, h, 18) ^ xe.rotrBL(u, h, 41),
        k = (u & b) ^ (~u & p),
        P = (h & y) ^ (~h & x),
        w = xe.add5L(_, A, P, U5[m], dr[m]),
        E = xe.add5H(w, S, I, k, R5[m], fr[m]),
        U = w | 0,
        j = xe.rotrSH(n, s, 28) ^ xe.rotrBH(n, s, 34) ^ xe.rotrBH(n, s, 39),
        z = xe.rotrSL(n, s, 28) ^ xe.rotrBL(n, s, 34) ^ xe.rotrBL(n, s, 39),
        V = (n & i) ^ (n & c) ^ (i & c),
        J = (s & o) ^ (s & d) ^ (o & d);
      (S = p | 0),
        (_ = x | 0),
        (p = b | 0),
        (x = y | 0),
        (b = u | 0),
        (y = h | 0),
        ({ h: u, l: h } = xe.add(l | 0, f | 0, E | 0, U | 0)),
        (l = c | 0),
        (f = d | 0),
        (c = i | 0),
        (d = o | 0),
        (i = n | 0),
        (o = s | 0);
      const re = xe.add3L(U, z, J);
      (n = xe.add3H(re, E, j, V)), (s = re | 0);
    }
    ({ h: n, l: s } = xe.add(this.Ah | 0, this.Al | 0, n | 0, s | 0)),
      ({ h: i, l: o } = xe.add(this.Bh | 0, this.Bl | 0, i | 0, o | 0)),
      ({ h: c, l: d } = xe.add(this.Ch | 0, this.Cl | 0, c | 0, d | 0)),
      ({ h: l, l: f } = xe.add(this.Dh | 0, this.Dl | 0, l | 0, f | 0)),
      ({ h: u, l: h } = xe.add(this.Eh | 0, this.El | 0, u | 0, h | 0)),
      ({ h: b, l: y } = xe.add(this.Fh | 0, this.Fl | 0, b | 0, y | 0)),
      ({ h: p, l: x } = xe.add(this.Gh | 0, this.Gl | 0, p | 0, x | 0)),
      ({ h: S, l: _ } = xe.add(this.Hh | 0, this.Hl | 0, S | 0, _ | 0)),
      this.set(n, s, i, o, c, d, l, f, u, h, b, y, p, x, S, _);
  }
  roundClean() {
    fr.fill(0), dr.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
};
const j5 = f5(() => new F5());
/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */ function ph(
  e
) {
  if (typeof e != 'string') throw new TypeError('invalid mnemonic type: ' + typeof e);
  return e.normalize('NFKD');
}
function H5(e) {
  const t = ph(e),
    r = t.split(' ');
  if (![12, 15, 18, 21, 24].includes(r.length)) throw new Error('Invalid mnemonic');
  return { nfkd: t, words: r };
}
const q5 = (e) => ph('mnemonic' + e);
function V5(e, t = '') {
  return x5(j5, H5(e).nfkd, q5(t), { c: 2048, dkLen: 64 });
}
function yl(e) {
  return !!new RegExp("^m\\/44'\\/784'\\/[0-9]+'\\/[0-9]+'\\/[0-9]+'+$").test(e);
}
function G5(e) {
  return V5(e, '');
}
function z5(e) {
  return Nn(G5(e));
}
const ca = 32,
  bh = 'suiprivkey';
class K5 {
  async signWithIntent(t, r) {
    const n = Zd(r, t),
      s = wa(n, { dkLen: 32 });
    return {
      signature: a5({
        signature: await this.sign(s),
        signatureScheme: this.getKeyScheme(),
        publicKey: this.getPublicKey(),
      }),
      bytes: at(t),
    };
  }
  async signTransaction(t) {
    return this.signWithIntent(t, 'TransactionData');
  }
  async signPersonalMessage(t) {
    const { signature: r } = await this.signWithIntent(
      g.vector(g.u8()).serialize(t).toBytes(),
      'PersonalMessage'
    );
    return { bytes: at(t), signature: r };
  }
  toSuiAddress() {
    return this.getPublicKey().toSuiAddress();
  }
}
class W5 extends K5 {}
function yh(e) {
  const { prefix: t, words: r } = ba.decode(e);
  if (t !== bh) throw new Error('invalid private key prefix');
  const n = new Uint8Array(ba.fromWords(r)),
    s = n.slice(1);
  return { schema: eh[n[0]], secretKey: s };
}
function Q5(e, t) {
  if (e.length !== ca) throw new Error('Invalid bytes length');
  const r = ks[t],
    n = new Uint8Array(e.length + 1);
  return n.set([r]), n.set(e, 1), ba.encode(bh, ba.toWords(n));
}
let mh = class extends n0 {
  constructor(t, r) {
    super(), (this.finished = !1), (this.destroyed = !1), U6(t);
    const n = Or(r);
    if (((this.iHash = t.create()), typeof this.iHash.update != 'function'))
      throw new Error('Expected instance of class which extends utils.Hash');
    (this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen);
    const s = this.blockLen,
      i = new Uint8Array(s);
    i.set(n.length > s ? t.create().update(n).digest() : n);
    for (let o = 0; o < i.length; o++) i[o] ^= 54;
    this.iHash.update(i), (this.oHash = t.create());
    for (let o = 0; o < i.length; o++) i[o] ^= 106;
    this.oHash.update(i), i.fill(0);
  }
  update(t) {
    return Rn(this), this.iHash.update(t), this;
  }
  digestInto(t) {
    Rn(this),
      Va(t, this.outputLen),
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
    const { oHash: r, iHash: n, finished: s, destroyed: i, blockLen: o, outputLen: c } = this;
    return (
      (t = t),
      (t.finished = s),
      (t.destroyed = i),
      (t.blockLen = o),
      (t.outputLen = c),
      (t.oHash = r._cloneInto(t.oHash)),
      (t.iHash = n._cloneInto(t.iHash)),
      t
    );
  }
  destroy() {
    (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
  }
};
const i0 = (e, t, r) => new mh(e, t).update(r).digest();
i0.create = (e, t) => new mh(e, t);
function Y5(e, t, r, n) {
  if (typeof e.setBigUint64 == 'function') return e.setBigUint64(t, r, n);
  const s = BigInt(32),
    i = BigInt(4294967295),
    o = Number((r >> s) & i),
    c = Number(r & i),
    d = n ? 4 : 0,
    l = n ? 0 : 4;
  e.setUint32(t + d, o, n), e.setUint32(t + l, c, n);
}
class Z5 extends n0 {
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
      (this.view = Ii(this.buffer));
  }
  update(t) {
    Rn(this);
    const { view: r, buffer: n, blockLen: s } = this;
    t = Or(t);
    const i = t.length;
    for (let o = 0; o < i; ) {
      const c = Math.min(s - this.pos, i - o);
      if (c === s) {
        const d = Ii(t);
        for (; s <= i - o; o += s) this.process(d, o);
        continue;
      }
      n.set(t.subarray(o, o + c), this.pos),
        (this.pos += c),
        (o += c),
        this.pos === s && (this.process(r, 0), (this.pos = 0));
    }
    return (this.length += t.length), this.roundClean(), this;
  }
  digestInto(t) {
    Rn(this), Kd(t, this), (this.finished = !0);
    const { buffer: r, view: n, blockLen: s, isLE: i } = this;
    let { pos: o } = this;
    (r[o++] = 128),
      this.buffer.subarray(o).fill(0),
      this.padOffset > s - o && (this.process(n, 0), (o = 0));
    for (let u = o; u < s; u++) r[u] = 0;
    Y5(n, s - 8, BigInt(this.length * 8), i), this.process(n, 0);
    const c = Ii(t),
      d = this.outputLen;
    if (d % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
    const l = d / 4,
      f = this.get();
    if (l > f.length) throw new Error('_sha2: outputLen bigger than state');
    for (let u = 0; u < l; u++) c.setUint32(4 * u, f[u], i);
  }
  digest() {
    const { buffer: t, outputLen: r } = this;
    this.digestInto(t);
    const n = t.slice(0, r);
    return this.destroy(), n;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: r, buffer: n, length: s, finished: i, destroyed: o, pos: c } = this;
    return (
      (t.length = s), (t.pos = c), (t.finished = i), (t.destroyed = o), s % r && t.buffer.set(n), t
    );
  }
}
const [J5, X5] = ne.split(
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
  hr = new Uint32Array(80),
  xr = new Uint32Array(80);
class ev extends Z5 {
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
      Ch: i,
      Cl: o,
      Dh: c,
      Dl: d,
      Eh: l,
      El: f,
      Fh: u,
      Fl: h,
      Gh: b,
      Gl: y,
      Hh: p,
      Hl: x,
    } = this;
    return [t, r, n, s, i, o, c, d, l, f, u, h, b, y, p, x];
  }
  set(t, r, n, s, i, o, c, d, l, f, u, h, b, y, p, x) {
    (this.Ah = t | 0),
      (this.Al = r | 0),
      (this.Bh = n | 0),
      (this.Bl = s | 0),
      (this.Ch = i | 0),
      (this.Cl = o | 0),
      (this.Dh = c | 0),
      (this.Dl = d | 0),
      (this.Eh = l | 0),
      (this.El = f | 0),
      (this.Fh = u | 0),
      (this.Fl = h | 0),
      (this.Gh = b | 0),
      (this.Gl = y | 0),
      (this.Hh = p | 0),
      (this.Hl = x | 0);
  }
  process(t, r) {
    for (let m = 0; m < 16; m++, r += 4) (hr[m] = t.getUint32(r)), (xr[m] = t.getUint32((r += 4)));
    for (let m = 16; m < 80; m++) {
      const I = hr[m - 15] | 0,
        A = xr[m - 15] | 0,
        k = ne.rotrSH(I, A, 1) ^ ne.rotrSH(I, A, 8) ^ ne.shrSH(I, A, 7),
        P = ne.rotrSL(I, A, 1) ^ ne.rotrSL(I, A, 8) ^ ne.shrSL(I, A, 7),
        w = hr[m - 2] | 0,
        E = xr[m - 2] | 0,
        U = ne.rotrSH(w, E, 19) ^ ne.rotrBH(w, E, 61) ^ ne.shrSH(w, E, 6),
        j = ne.rotrSL(w, E, 19) ^ ne.rotrBL(w, E, 61) ^ ne.shrSL(w, E, 6),
        z = ne.add4L(P, j, xr[m - 7], xr[m - 16]),
        V = ne.add4H(z, k, U, hr[m - 7], hr[m - 16]);
      (hr[m] = V | 0), (xr[m] = z | 0);
    }
    let {
      Ah: n,
      Al: s,
      Bh: i,
      Bl: o,
      Ch: c,
      Cl: d,
      Dh: l,
      Dl: f,
      Eh: u,
      El: h,
      Fh: b,
      Fl: y,
      Gh: p,
      Gl: x,
      Hh: S,
      Hl: _,
    } = this;
    for (let m = 0; m < 80; m++) {
      const I = ne.rotrSH(u, h, 14) ^ ne.rotrSH(u, h, 18) ^ ne.rotrBH(u, h, 41),
        A = ne.rotrSL(u, h, 14) ^ ne.rotrSL(u, h, 18) ^ ne.rotrBL(u, h, 41),
        k = (u & b) ^ (~u & p),
        P = (h & y) ^ (~h & x),
        w = ne.add5L(_, A, P, X5[m], xr[m]),
        E = ne.add5H(w, S, I, k, J5[m], hr[m]),
        U = w | 0,
        j = ne.rotrSH(n, s, 28) ^ ne.rotrBH(n, s, 34) ^ ne.rotrBH(n, s, 39),
        z = ne.rotrSL(n, s, 28) ^ ne.rotrBL(n, s, 34) ^ ne.rotrBL(n, s, 39),
        V = (n & i) ^ (n & c) ^ (i & c),
        J = (s & o) ^ (s & d) ^ (o & d);
      (S = p | 0),
        (_ = x | 0),
        (p = b | 0),
        (x = y | 0),
        (b = u | 0),
        (y = h | 0),
        ({ h: u, l: h } = ne.add(l | 0, f | 0, E | 0, U | 0)),
        (l = c | 0),
        (f = d | 0),
        (c = i | 0),
        (d = o | 0),
        (i = n | 0),
        (o = s | 0);
      const re = ne.add3L(U, z, J);
      (n = ne.add3H(re, E, j, V)), (s = re | 0);
    }
    ({ h: n, l: s } = ne.add(this.Ah | 0, this.Al | 0, n | 0, s | 0)),
      ({ h: i, l: o } = ne.add(this.Bh | 0, this.Bl | 0, i | 0, o | 0)),
      ({ h: c, l: d } = ne.add(this.Ch | 0, this.Cl | 0, c | 0, d | 0)),
      ({ h: l, l: f } = ne.add(this.Dh | 0, this.Dl | 0, l | 0, f | 0)),
      ({ h: u, l: h } = ne.add(this.Eh | 0, this.El | 0, u | 0, h | 0)),
      ({ h: b, l: y } = ne.add(this.Fh | 0, this.Fl | 0, b | 0, y | 0)),
      ({ h: p, l: x } = ne.add(this.Gh | 0, this.Gl | 0, p | 0, x | 0)),
      ({ h: S, l: _ } = ne.add(this.Hh | 0, this.Hl | 0, S | 0, _ | 0)),
      this.set(n, s, i, o, c, d, l, f, u, h, b, y, p, x, S, _);
  }
  roundClean() {
    hr.fill(0), xr.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
const gh = q6(() => new ev()),
  tv = 'ed25519 seed',
  rv = 2147483648,
  nv = new RegExp("^m(\\/[0-9]+')+$"),
  vh = (e) => e.replace("'", ''),
  sv = (e) => {
    const r = i0.create(gh, tv).update(Jc(e)).digest(),
      n = r.slice(0, 32),
      s = r.slice(32);
    return { key: n, chainCode: s };
  },
  av = ({ key: e, chainCode: t }, r) => {
    const n = new ArrayBuffer(4);
    new DataView(n).setUint32(0, r);
    const i = new Uint8Array(1 + e.length + n.byteLength);
    i.set(new Uint8Array(1).fill(0)),
      i.set(e, 1),
      i.set(new Uint8Array(n, 0, n.byteLength), e.length + 1);
    const o = i0.create(gh, t).update(i).digest(),
      c = o.slice(0, 32),
      d = o.slice(32);
    return { key: c, chainCode: d };
  },
  iv = (e) => (nv.test(e) ? !e.split('/').slice(1).map(vh).some(isNaN) : !1),
  ml = (e, t, r = rv) => {
    if (!iv(e)) throw new Error('Invalid derivation path');
    const { key: n, chainCode: s } = sv(t);
    return e
      .split('/')
      .slice(1)
      .map(vh)
      .map((o) => parseInt(o, 10))
      .reduce((o, c) => av(o, c + r), { key: n, chainCode: s });
  },
  ac = 32;
class o0 extends Xd {
  constructor(t) {
    if (
      (super(),
      typeof t == 'string'
        ? (this.data = Ft(t))
        : t instanceof Uint8Array
          ? (this.data = t)
          : (this.data = Uint8Array.from(t)),
      this.data.length !== ac)
    )
      throw new Error(`Invalid public key input. Expected ${ac} bytes, got ${this.data.length}`);
  }
  equals(t) {
    return super.equals(t);
  }
  toRawBytes() {
    return this.data;
  }
  flag() {
    return ks.ED25519;
  }
  async verify(t, r) {
    let n;
    if (typeof r == 'string') {
      const s = i5(r);
      if (s.signatureScheme !== 'ED25519') throw new Error('Invalid signature scheme');
      if (!Jd(this.toRawBytes(), s.publicKey))
        throw new Error('Signature does not match public key');
      n = s.signature;
    } else n = r;
    return Ur.sign.detached.verify(t, n, this.toRawBytes());
  }
}
o0.SIZE = ac;
const gl = "m/44'/784'/0'/0'/0'";
class xn extends W5 {
  constructor(t) {
    super(), t ? (this.keypair = t) : (this.keypair = Ur.sign.keyPair());
  }
  getKeyScheme() {
    return 'ED25519';
  }
  static generate() {
    return new xn(Ur.sign.keyPair());
  }
  static fromSecretKey(t, r) {
    if (typeof t == 'string') {
      const i = yh(t);
      if (i.schema !== 'ED25519') throw new Error(`Expected a ED25519 keypair, got ${i.schema}`);
      return this.fromSecretKey(i.secretKey, r);
    }
    const n = t.length;
    if (n !== ca) throw new Error(`Wrong secretKey size. Expected ${ca} bytes, got ${n}.`);
    const s = Ur.sign.keyPair.fromSeed(t);
    if (!r || !r.skipValidation) {
      const o = new TextEncoder().encode('sui validation'),
        c = Ur.sign.detached(o, s.secretKey);
      if (!Ur.sign.detached.verify(o, c, s.publicKey))
        throw new Error('provided secretKey is invalid');
    }
    return new xn(s);
  }
  getPublicKey() {
    return new o0(this.keypair.publicKey);
  }
  getSecretKey() {
    return Q5(this.keypair.secretKey.slice(0, ca), this.getKeyScheme());
  }
  async sign(t) {
    return Ur.sign.detached(t, this.keypair.secretKey);
  }
  static deriveKeypair(t, r) {
    if ((r == null && (r = gl), !yl(r))) throw new Error('Invalid derivation path');
    const { key: n } = ml(r, z5(t));
    return xn.fromSecretKey(n);
  }
  static deriveKeypairFromSeed(t, r) {
    if ((r == null && (r = gl), !yl(r))) throw new Error('Invalid derivation path');
    const { key: n } = ml(r, t);
    return xn.fromSecretKey(n);
  }
}
class ov {
  constructor() {
    F(this, 'addressTypes', [Q.Sui]);
  }
  generateKeypairFromPrivateKey(t) {
    const r = t.fold((o) => new Uint8Array(o)),
      n = xn.fromSecretKey(r),
      s = n.getPublicKey().toRawBytes(),
      i = yh(n.getSecretKey());
    if (i.schema !== 'ED25519') throw new Error(`got unexpected schema ${i.schema} for Sui`);
    return { publicKey: s, privateKey: i.secretKey };
  }
  generateKeypairFromSeed(t, r, n) {
    const s = t.fold((i) => new ja(i));
    try {
      const i = s.derivePathType(n, r);
      return { publicKey: i.publicKey, privateKey: i.secretKey };
    } finally {
      s.cleanup();
    }
  }
}
class mB {
  constructor() {
    F(this, 'cryptoChainPlugins', new Map());
    this.registerChainPlugin(new Q4()),
      this.registerChainPlugin(new h3()),
      this.registerChainPlugin(new t6()),
      this.registerChainPlugin(new ov());
  }
  registerChainPlugin(t) {
    for (const r of t.addressTypes) this.cryptoChainPlugins.set(r, t);
  }
  generateKeypairFromPrivateKey(t, r) {
    const n = this.cryptoChainPlugins.get(r);
    if (!n)
      throw new Error(`No plugin found for address type ${r}, please register the plugin first.`);
    return n.generateKeypairFromPrivateKey(t);
  }
  generateKeypairFromSeed(t, r, n) {
    const s = Wc.getAddressType(n),
      i = this.cryptoChainPlugins.get(s);
    if (!i)
      throw new Error(`No plugin found for address type ${s}, please register the plugin first.`);
    return i.generateKeypairFromSeed(t, r, n);
  }
}
function gB(e) {
  return Wc.getAll().includes(e);
}
var Di = E2,
  cv = S2.Buffer,
  lv = function (e) {
    function t(i) {
      var o = e(i);
      return Di.encode(cv.concat([i, o], i.length + 4));
    }
    function r(i) {
      var o = i.slice(0, -4),
        c = i.slice(-4),
        d = e(o);
      if (!((c[0] ^ d[0]) | (c[1] ^ d[1]) | (c[2] ^ d[2]) | (c[3] ^ d[3]))) return o;
    }
    function n(i) {
      var o = Di.decodeUnsafe(i);
      if (o) return r(o);
    }
    function s(i) {
      var o = Di.decode(i),
        c = r(o);
      if (!c) throw new Error('Invalid checksum');
      return c;
    }
    return { encode: t, decode: s, decodeUnsafe: n };
  },
  vl = _2,
  uv = lv;
function fv(e) {
  var t = vl('sha256').update(e).digest();
  return vl('sha256').update(t).digest();
}
var dv = uv(fv),
  ic = dv;
function wh(e, t) {
  if (t !== void 0 && e[0] !== t) throw new Error('Invalid network version');
  if (e.length === 33) return { version: e[0], privateKey: e.slice(1, 33), compressed: !1 };
  if (e.length !== 34) throw new Error('Invalid WIF length');
  if (e[33] !== 1) throw new Error('Invalid compression flag');
  return { version: e[0], privateKey: e.slice(1, 33), compressed: !0 };
}
function oc(e, t, r) {
  var n = new Ce(r ? 34 : 33);
  return n.writeUInt8(e, 0), t.copy(n, 1), r && (n[33] = 1), n;
}
function hv(e, t) {
  return wh(ic.decode(e), t);
}
function xv(e, t, r) {
  return typeof e == 'number'
    ? ic.encode(oc(e, t, r))
    : ic.encode(oc(e.version, e.privateKey, e.compressed));
}
var vB = { decode: hv, decodeRaw: wh, encode: xv, encodeRaw: oc };
const wl = {
  node: void 0,
  web: typeof globalThis == 'object' && 'crypto' in globalThis ? globalThis.crypto : void 0,
};
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const pv =
  new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!pv) throw new Error('Non little-endian hardware is not supported');
Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
function Sl(e = 32) {
  if (wl.web) return wl.web.getRandomValues(new Uint8Array(e));
  throw new Error("The environment doesn't have randomBytes function");
}
const El =
  'Do not return the plaintext from .fold(), convert it to something else inside the callback first.';
var Yt, Zt;
const H0 = class H0 {
  constructor(t) {
    Y(this, Yt);
    Y(this, Zt);
    F(this, 'read', (t) => {
      const r = Ws(v(this, Yt), v(this, Zt));
      try {
        t(r);
      } finally {
        this.cleanup(r);
      }
    });
    F(this, 'readAsync', async (t) => {
      const r = Ws(v(this, Yt), v(this, Zt));
      try {
        await t(r);
      } finally {
        this.cleanup(r);
      }
    });
    F(this, 'fold', (t) => {
      const r = Ws(v(this, Yt), v(this, Zt));
      try {
        const n = t(r);
        if (n === r) throw new Error(El);
        return n;
      } finally {
        this.cleanup(r);
      }
    });
    F(this, 'foldAsync', async (t) => {
      const r = Ws(v(this, Yt), v(this, Zt));
      try {
        const n = await t(r);
        if (n === r) throw new Error(El);
        return n;
      } finally {
        this.cleanup(r);
      }
    });
    F(this, 'cleanup', (t) => {
      const r = Sl(t.length),
        n = $l(t, r);
      q(this, Zt, r), q(this, Yt, n), t.fill(0);
    });
    const r = t.length,
      n = Sl(r),
      s = $l(t, n);
    q(this, Zt, n), q(this, Yt, s);
  }
  static from(t) {
    return new H0(t);
  }
};
(Yt = new WeakMap()), (Zt = new WeakMap());
let _l = H0;
const $l = (e, t) => {
    const r = e.length,
      n = new Uint8Array(r);
    for (let s = 0; s < r; s++) n[s] = e[s] ^ t[s];
    return n;
  },
  Ws = (e, t) => {
    const r = e.length,
      n = new Uint8Array(r);
    for (let s = 0; s < r; s++) n[s] = e[s] ^ t[s];
    return n;
  };
function wB(e) {
  return Uint8Array.from(Ce.from(e, 'base64'));
}
function SB(e) {
  return Ce.from(e).toString('base64');
}
const [Sh, Eh, _h] = [[], [], []],
  bv = BigInt(0),
  Xn = BigInt(1),
  yv = BigInt(2),
  mv = BigInt(7),
  gv = BigInt(256),
  vv = BigInt(113);
for (let e = 0, t = Xn, r = 1, n = 0; e < 24; e++) {
  ([r, n] = [n, (2 * r + 3 * n) % 5]),
    Sh.push(2 * (5 * n + r)),
    Eh.push((((e + 1) * (e + 2)) / 2) % 64);
  let s = bv;
  for (let i = 0; i < 7; i++)
    (t = ((t << Xn) ^ ((t >> mv) * vv)) % gv), t & yv && (s ^= Xn << ((Xn << BigInt(i)) - Xn));
  _h.push(s);
}
const [wv, Sv] = oe.split(_h, !0),
  Al = (e, t, r) => (r > 32 ? oe.rotlBH(e, t, r) : oe.rotlSH(e, t, r)),
  Il = (e, t, r) => (r > 32 ? oe.rotlBL(e, t, r) : oe.rotlSL(e, t, r));
function Ev(e, t = 24) {
  const r = new Uint32Array(10);
  for (let n = 24 - t; n < 24; n++) {
    for (let o = 0; o < 10; o++) r[o] = e[o] ^ e[o + 10] ^ e[o + 20] ^ e[o + 30] ^ e[o + 40];
    for (let o = 0; o < 10; o += 2) {
      const c = (o + 8) % 10,
        d = (o + 2) % 10,
        l = r[d],
        f = r[d + 1],
        u = Al(l, f, 1) ^ r[c],
        h = Il(l, f, 1) ^ r[c + 1];
      for (let b = 0; b < 50; b += 10) (e[o + b] ^= u), (e[o + b + 1] ^= h);
    }
    let s = e[2],
      i = e[3];
    for (let o = 0; o < 24; o++) {
      const c = Eh[o],
        d = Al(s, i, c),
        l = Il(s, i, c),
        f = Sh[o];
      (s = e[f]), (i = e[f + 1]), (e[f] = d), (e[f + 1] = l);
    }
    for (let o = 0; o < 50; o += 10) {
      for (let c = 0; c < 10; c++) r[c] = e[o + c];
      for (let c = 0; c < 10; c++) e[o + c] ^= ~r[(c + 2) % 10] & r[(c + 4) % 10];
    }
    (e[0] ^= wv[n]), (e[1] ^= Sv[n]);
  }
  r.fill(0);
}
class za extends yd {
  constructor(t, r, n, s = !1, i = 24) {
    if (
      (super(),
      (this.blockLen = t),
      (this.suffix = r),
      (this.outputLen = n),
      (this.enableXOF = s),
      (this.rounds = i),
      (this.pos = 0),
      (this.posOut = 0),
      (this.finished = !1),
      (this.destroyed = !1),
      Qt.number(n),
      0 >= this.blockLen || this.blockLen >= 200)
    )
      throw new Error('Sha3 supports only keccak-f1600 function');
    (this.state = new Uint8Array(200)), (this.state32 = v3(this.state));
  }
  keccak() {
    Ev(this.state32, this.rounds), (this.posOut = 0), (this.pos = 0);
  }
  update(t) {
    Qt.exists(this);
    const { blockLen: r, state: n } = this;
    t = Ha(t);
    const s = t.length;
    for (let i = 0; i < s; ) {
      const o = Math.min(r - this.pos, s - i);
      for (let c = 0; c < o; c++) n[this.pos++] ^= t[i++];
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
    Qt.exists(this, !1), Qt.bytes(t), this.finish();
    const r = this.state,
      { blockLen: n } = this;
    for (let s = 0, i = t.length; s < i; ) {
      this.posOut >= n && this.keccak();
      const o = Math.min(n - this.posOut, i - s);
      t.set(r.subarray(this.posOut, this.posOut + o), s), (this.posOut += o), (s += o);
    }
    return t;
  }
  xofInto(t) {
    if (!this.enableXOF) throw new Error('XOF is not possible for this instance');
    return this.writeInto(t);
  }
  xof(t) {
    return Qt.number(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if ((Qt.output(t, this), this.finished)) throw new Error('digest() was already called');
    return this.writeInto(t), this.destroy(), t;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    (this.destroyed = !0), this.state.fill(0);
  }
  _cloneInto(t) {
    const { blockLen: r, suffix: n, outputLen: s, rounds: i, enableXOF: o } = this;
    return (
      t || (t = new za(r, n, s, o, i)),
      t.state32.set(this.state32),
      (t.pos = this.pos),
      (t.posOut = this.posOut),
      (t.finished = this.finished),
      (t.rounds = i),
      (t.suffix = n),
      (t.outputLen = s),
      (t.enableXOF = o),
      (t.destroyed = this.destroyed),
      t
    );
  }
}
const Lr = (e, t, r) => Ps(() => new za(t, e, r));
Lr(6, 144, 224 / 8);
Lr(6, 136, 256 / 8);
Lr(6, 104, 384 / 8);
Lr(6, 72, 512 / 8);
Lr(1, 144, 224 / 8);
const $h = Lr(1, 136, 256 / 8);
Lr(1, 104, 384 / 8);
Lr(1, 72, 512 / 8);
const Ah = (e, t, r) => E3((n = {}) => new za(t, e, n.dkLen === void 0 ? r : n.dkLen, !0));
Ah(31, 168, 128 / 8);
Ah(31, 136, 256 / 8);
const Gn = a.object({ blinkUrl: a.string().url(), blinkTitle: a.string().optional() }),
  Me = a
    .string()
    .min(2, { message: 'Must be 2 or more characters long' })
    .regex(/^0x[0-9A-Fa-f]*$/, {
      message: "String must be '0x'-prefixed and followed by valid hex characters",
    }),
  H = a
    .number()
    .transform((e) => `0x${e.toString(16)}`)
    .or(
      Me.min(3, {
        message:
          "Must be 3 or more characters long (should always have at least one digit - zero is '0x0').",
      })
    )
    .refine((e) => (e === '0x0' ? !0 : e[2] !== '0'), {
      message: 'Invalid hex quantity: leading zero digits are not allowed.',
    }),
  Ue = Me.refine((e) => e.length % 2 === 0, {
    message: 'Invalid hex-encoded data: must be even number of digits',
  }),
  $a = a.string().transform((e) => {
    const t = Ue.safeParse(e);
    return t.success ? t.data : `0x${gt.from(e).toString('hex')}`;
  }),
  Ih = a.union([a.string(), a.number()]).transform((e, t) => {
    if (typeof e == 'number') return e;
    const r = e.startsWith('0x') ? 16 : 10,
      n = parseInt(e, r);
    return (
      Number.isNaN(n) &&
        t.addIssue({ code: a.ZodIssueCode.custom, message: 'Could not parse as LenientInteger' }),
      n
    );
  }),
  c0 = (e) =>
    Ue.refine((t) => t.length === e * 2 + 2, {
      message: `Invalid byte length. (Expected ${e} bytes)`,
    }),
  fe = Me.refine(Hf, { message: 'Invalid Ethereum address.' }),
  ue = c0(32),
  Th = c0(256),
  Ds = a.object({
    blockHash: ue,
    address: fe,
    logIndex: H,
    data: Ue,
    removed: a.boolean().optional(),
    topics: a.array(ue),
    blockNumber: H.nullish().default(null),
    transactionIndex: H,
    transactionHash: ue,
  }),
  Ph = a.object({
    transactionHash: ue,
    transactionIndex: H,
    blockHash: ue,
    blockNumber: H,
    from: fe,
    to: fe.nullish().default(null).optional(),
    root: ue.optional(),
    status: a.literal('0x1').or(a.literal('0x0')).optional(),
    cumulativeGasUsed: H,
    gasUsed: H,
    contractAddress: fe.nullish().default(null),
    logs: a.array(Ds),
    logsBloom: Th,
    effectiveGasPrice: H.optional(),
    type: H.optional(),
  }),
  Ch = a.object({
    from: fe.optional(),
    chainId: H.optional(),
    to: fe.optional(),
    gas: H.optional(),
    gasPrice: H.optional(),
    value: H.optional(),
    data: Ue.optional(),
    nonce: H.optional(),
  }),
  Sr = a.object({ name: a.string(), type: a.string() }),
  l0 = a.array(Sr),
  _v = a.object({
    chainId: Ih.optional(),
    name: a.string(),
    verifyingContract: fe,
    version: a.string().optional(),
  }),
  $v = a.object({ type: a.string(), name: a.string(), value: a.string() }).array(),
  Tl = a.object({
    domain: _v,
    message: a.record(a.any()),
    primaryType: a.string(),
    types: a.object({ EIP712Domain: l0 }).and(a.record(Sr.array())),
  }),
  kh = a.object({
    chainId: Ih.optional(),
    name: a.string().optional(),
    verifyingContract: fe.optional(),
    version: a.string().optional(),
    salt: a.string().optional(),
  }),
  Pl = a.object({
    domain: kh,
    message: a.record(a.any()),
    primaryType: a.string(),
    types: a.object({ EIP712Domain: l0 }).and(a.record(Sr.array())),
  }),
  Av = a.object({ name: a.literal('owner'), type: a.literal('address') }),
  Iv = a.object({ name: a.literal('spender'), type: a.literal('address') }),
  Tv = a.object({ name: a.literal('value'), type: a.literal('uint256') }),
  Pv = a.object({ name: a.literal('value'), type: a.literal('uint256') }),
  Cv = a.object({ name: a.literal('deadline'), type: a.literal('uint256') }),
  kv = a
    .tuple([Sr, Sr, Sr, Sr, Sr])
    .refine((e) => {
      const t = [Av, Iv, Tv, Pv, Cv],
        r = new Set(['owner', 'spender', 'value', 'nonce', 'deadline']);
      for (const n of e)
        for (const s of t) {
          const i = s.safeParse(n);
          i.success && r.delete(i.data.name);
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
  Dv = a.literal('Permit'),
  Ov = a.object({ EIP712Domain: l0, Permit: kv }),
  Bv = a.object({ owner: fe, spender: fe, value: H, nonce: H, deadline: H });
a.object({ domain: kh, primaryType: Dv, types: Ov, message: Bv });
var Dh = ((e) => ((e.legacy = '0x0'), (e.eip2930 = '0x1'), (e.eip1559 = '0x2'), e))(Dh || {});
const Lv = a.tuple([fe, a.array(ue)]),
  Ka = a
    .object({
      chainId: H.optional(),
      data: Ue.optional(),
      from: fe,
      gas: H.optional(),
      gasPrice: H.optional(),
      nonce: H.optional(),
      to: fe.optional(),
      value: H.optional(),
      type: a.nativeEnum(Dh).optional(),
      accessList: a.array(Lv).optional(),
      maxPriorityFeePerGas: H.optional(),
      maxFeePerGas: H.optional(),
      gasLimit: H.optional(),
    })
    .transform(
      (e) => (e.gas == null && e.gasLimit != null && ((e.gas = e.gasLimit), delete e.gasLimit), e)
    )
    .brand('EthUnsignedTransactionObject'),
  Os = a.object({
    blockHash: ue.nullish(),
    blockNumber: H.nullish(),
    from: fe,
    gas: H,
    gasPrice: H.nullish(),
    hash: ue,
    input: Ue,
    nonce: H,
    to: fe.nullish().default(null),
    transactionIndex: H.nullish(),
    value: H,
    v: H,
    r: H,
    s: H,
  }),
  Mv = a.object({
    address: fe.optional(),
    balance: H,
    codeHash: ue,
    nonce: H,
    storageHash: ue,
    accountProof: a.array(Me),
    storageProof: a.array(a.object({ key: H, value: H, proof: a.array(Me) })),
  }),
  ht = a
    .literal('latest')
    .or(a.literal('earliest'))
    .or(a.literal('pending'))
    .or(a.literal('finalized')),
  Wa = a.object({
    number: H.nullish().default(null),
    hash: ue.nullish().default(null),
    parentHash: ue,
    nonce: c0(8).nullish().default(null),
    sha3Uncles: ue,
    logsBloom: Th.nullish().default(null),
    transactionsRoot: ue,
    stateRoot: ue,
    receiptsRoot: ue,
    miner: fe.nullish().default(null),
    mixHash: ue.optional(),
    difficulty: H,
    totalDifficulty: H.nullish().default(null),
    extraData: Ue,
    size: H,
    gasLimit: H,
    gasUsed: H,
    timestamp: H,
    transactions: a.array(Os).or(a.array(ue)),
    uncles: a.array(ue),
    baseFeePerGas: H.optional(),
  }),
  Oh = a.enum([
    'CONTINUE_WITH_PHANTOM',
    'CONTINUE_WITH_METAMASK',
    'ALWAYS_USE_PHANTOM',
    'ALWAYS_USE_METAMASK',
  ]),
  Qa = a.string().refine(
    (e) => {
      try {
        return (
          vt.decode(e).byteLength === 32 &&
          e.match(/^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+$/)
        );
      } catch {
        return !1;
      }
    },
    { message: 'String must be a valid solana public key of 32 bytes' }
  ),
  Nv = a.union([
    a.literal('bip122_p2tr'),
    a.literal('bip122_p2wpkh'),
    a.literal('bip122_p2sh'),
    a.literal('bip122_p2pkh'),
  ]),
  Rv = a.object({ address: a.string(), publicKey: a.string(), addressType: Nv }),
  u0 = Rv.and(a.object({ purpose: a.union([a.literal('payment'), a.literal('ordinals')]) })),
  f0 = a.string().refine((e) => Fv(e), { message: 'Invalid Sui address format' }),
  Uv = /^0x[a-fA-F0-9]{64}$/;
function Fv(e) {
  return e ? Uv.test(e) : !1;
}
const d0 = a.object({ address: f0, publicKey: a.string() }),
  Bh = Me.refine(Hf, { message: 'Invalid Hypercore address.' });
a.string().refine(
  (e) => {
    try {
      return vt.decode(e).byteLength === 64;
    } catch {
      return !1;
    }
  },
  { message: 'String must be a valid solana address of 64 bytes' }
);
const te = a.string().regex(/^[123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ]*$/),
  Le = a.object({ url: a.string().url(), icon: a.string().nullish().default(null) }),
  jv = a.array(a.any()),
  Hv = a
    .unknown()
    .transform((e, t) =>
      typeof e == 'object' && e !== null
        ? e
        : (t.addIssue({ code: a.ZodIssueCode.custom, message: 'Not an object' }), a.NEVER)
    ),
  Ya = a.union([a.null(), a.string(), a.number(), a.boolean(), jv, Hv]),
  h0 = a.literal('2.0'),
  Za = a.union([a.string(), a.number(), a.null()]),
  qv = a.object({ jsonrpc: a.literal('2.0'), id: Za, method: a.string(), params: Ya.optional() });
a.array(qv);
a.object({ jsonrpc: a.literal('2.0'), method: a.string(), params: Ya });
var Ja = ((e) => (
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
))(Ja || {});
const B = a.object({ code: a.nativeEnum(Ja).or(a.number()), message: a.string() }),
  Vv = a.object({ error: B }).or(a.object({ result: Ya })),
  Gv = a.object({ jsonrpc: a.literal('2.0'), id: Za }).and(Vv);
a.array(Gv);
const Lh = a.object({
    domain: a.string().optional(),
    address: a.string().optional(),
    statement: a.string().optional(),
    uri: a.string().optional(),
    version: a.string().optional(),
    chainId: a.string().optional(),
    nonce: a.string().optional(),
    issuedAt: a.string().optional(),
    expirationTime: a.string().optional(),
    notBefore: a.string().optional(),
    requestId: a.string().optional(),
    resources: a.array(a.string()).optional(),
  }),
  zv = a.literal('mainnet'),
  Kv = a.literal('testnet'),
  Wv = a.literal('devnet'),
  Qv = a.literal('localnet');
a.enum([zv.value, Kv.value, Wv.value, Qv.value]);
const Yv = a.literal('1'),
  Zv = a.literal('11155111');
a.enum([Yv.value, Zv.value]);
const Jv = a.literal('0x1'),
  Xv = a.literal('0xaa36a7');
a.enum([Jv.value, Xv.value]);
const e9 = a.literal('137'),
  t9 = a.literal('80002');
a.enum([e9.value, t9.value]);
const r9 = a.literal('0x89'),
  n9 = a.literal('0x13882');
a.enum([r9.value, n9.value]);
const s9 = a.literal('8453'),
  a9 = a.literal('84532');
a.enum([s9.value, a9.value]);
const i9 = a.literal('0x2105'),
  o9 = a.literal('0x14a34');
a.enum([i9.value, o9.value]);
const c9 = a.literal('143'),
  l9 = a.literal('10143'),
  u9 = a.literal('41454');
a.enum([c9.value, l9.value, u9.value]);
const f9 = a.literal('0x8f'),
  d9 = a.literal('0x279f'),
  h9 = a.literal('0xa1ee');
a.enum([f9.value, d9.value, h9.value]);
const x9 = a.literal('mainnet-beta'),
  p9 = a.literal('testnet'),
  b9 = a.literal('devnet'),
  x0 = te,
  Mh = te,
  Xa = te,
  Nh = te,
  p0 = te,
  Rh = a.string().url(),
  b0 = a.string().url(),
  Uh = a.enum([x9.value, p9.value, b9.value]),
  zn = a.object({ dapp_encryption_public_key: x0, nonce: Xa, redirect_link: b0, payload: Nh }),
  Bs = a.object({ nonce: Xa, data: p0 }),
  y9 = a.object({
    name: a.string(),
    label: a.string().optional(),
    required: a.boolean().optional(),
  }),
  m9 = a.object({ message: a.string() }),
  g9 = a.object({ href: a.string(), label: a.string(), parameters: a.array(y9).optional() }),
  v9 = a.object({ label: a.string(), url: a.string() }),
  y0 = a.object({
    successMessage: a.string().optional(),
    failureMessage: a.string().optional(),
    pendingMessage: a.string().optional(),
    onSuccessAction: v9.optional(),
  }),
  w9 = a.object({
    domain: a.string(),
    name: a.string(),
    category: a.string(),
    actionUrl: a.string(),
    icon: a.string(),
    title: a.string(),
    description: a.string(),
    label: a.string(),
    disabled: a.boolean().optional(),
    links: a.object({ actions: a.array(g9) }).optional(),
    error: m9.optional(),
    postAction: y0.optional(),
  });
function L(e, t) {
  return a.object({ jsonrpc: h0, id: Za, method: e, params: t });
}
function M(e, t) {
  return a.object({ jsonrpc: h0, id: Za }).and(a.object({ result: e }).or(a.object({ error: t })));
}
function Kn(e, t) {
  return a.object({ jsonrpc: h0, method: e, params: t });
}
const S9 = a.literal('eth_blink_requestAccounts'),
  E9 = a.object({ context: Gn }),
  _9 = a.array(fe),
  $9 = B;
L(S9, E9);
M(_9, $9);
const A9 = a.literal('eth_blink_sendTransaction'),
  I9 = a.tuple([Ka, a.object({ context: Gn })]),
  T9 = ue,
  P9 = B;
L(A9, I9);
M(T9, P9);
const C9 = a.literal('eth_blink_sign'),
  k9 = a.tuple([fe, $a, a.object({ context: Gn })]),
  D9 = Ue,
  O9 = B;
L(C9, k9);
M(D9, O9);
const B9 = a.literal('sol_connect'),
  L9 = a.object({ onlyIfTrusted: a.optional(a.boolean()) }),
  Fh = a.object({ publicKey: a.string() }),
  M9 = B;
L(B9, L9);
M(Fh, M9);
const N9 = a.literal('sol_blink_connect'),
  R9 = a.object({ context: Gn }),
  U9 = Fh,
  F9 = B;
L(N9, R9);
M(U9, F9);
const ei = a.optional(
  a.object({
    skipPreflight: a.optional(a.boolean()),
    preflightCommitment: a.optional(
      a.union([
        a.literal('processed'),
        a.literal('confirmed'),
        a.literal('finalized'),
        a.literal('recent'),
        a.literal('single'),
        a.literal('singleGossip'),
        a.literal('root'),
        a.literal('max'),
      ])
    ),
    maxRetries: a.optional(a.number()),
    minContextSlot: a.optional(a.number()),
    method: a.optional(
      a.union([a.literal('signAndSendTransaction'), a.literal('signTransaction')])
    ),
  })
);
var jh = ((e) => (
  (e.Connect = 'connect'), (e.Disconnect = 'disconnect'), (e.AccountChanged = 'accountChanged'), e
))(jh || {});
a.nativeEnum(jh);
const j9 = a.literal('sol_signAndSendAllTransactions'),
  Hh = a.object({ transactions: a.array(te), options: ei }),
  qh = a.object({ signatures: a.array(a.union([a.string(), a.null()])), publicKey: a.string() }),
  H9 = B;
L(j9, Hh);
M(qh, H9);
const q9 = a.literal('sol_blink_signAndSendAllTransactions'),
  V9 = Hh.merge(a.object({ context: Gn })),
  G9 = qh,
  z9 = B;
L(q9, V9);
M(G9, z9);
const K9 = a.literal('sol_signMessage'),
  Vh = a.object({ message: te, display: a.union([a.literal('utf8'), a.literal('hex')]) }),
  W9 = a.object({ signature: a.string(), publicKey: a.string() }),
  Q9 = B;
L(K9, Vh);
M(W9, Q9);
const Y9 = a.literal('sol_blink_signMessage'),
  Z9 = Vh.merge(a.object({ context: Gn })),
  J9 = a.object({ signature: a.string(), publicKey: a.string() }),
  X9 = B;
L(Y9, Z9);
M(J9, X9);
const e7 = a.literal('btc_requestAccounts'),
  t7 = a.tuple([]),
  r7 = a.array(u0),
  n7 = B;
L(e7, t7);
M(r7, n7);
const s7 = a.literal('btc_signPSBT'),
  a7 = a.tuple([
    a.instanceof(Uint8Array),
    a.object({
      inputsToSign: a.array(
        a.object({
          address: a.string(),
          signingIndexes: a.array(a.number()),
          sigHash: a.number().optional(),
        })
      ),
      finalize: a.boolean(),
    }),
  ]),
  i7 = a.instanceof(Uint8Array),
  o7 = B;
L(s7, a7);
M(i7, o7);
const c7 = a.literal('btc_signMessage'),
  l7 = a.object({ address: a.string(), message: a.instanceof(Uint8Array) }),
  u7 = a.object({ signature: a.instanceof(Uint8Array), signedMessage: a.instanceof(Uint8Array) }),
  f7 = B;
L(c7, l7);
M(u7, f7);
const Gh = a.literal('eth_accounts'),
  zh = a.tuple([]),
  Kh = a.array(fe),
  Wh = B,
  d7 = L(Gh, zh),
  h7 = M(Kh, Wh),
  x7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Wh, method: Gh, params: zh, request: d7, response: h7, result: Kh },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Qh = a.literal('eth_blockNumber'),
  Yh = a.tuple([]),
  Zh = H,
  Jh = B,
  p7 = L(Qh, Yh),
  b7 = M(Zh, Jh),
  y7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Jh, method: Qh, params: Yh, request: p7, response: b7, result: Zh },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Xh = a.literal('eth_call'),
  ex = a.tuple([Ch, H.or(ht)]),
  tx = Ue,
  rx = B,
  m7 = L(Xh, ex),
  g7 = M(tx, rx),
  v7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: rx, method: Xh, params: ex, request: m7, response: g7, result: tx },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  nx = a.literal('eth_cancelPrivateTransaction'),
  sx = a.tuple([a.object({ txHash: ue })]),
  ax = a.boolean(),
  ix = B,
  w7 = L(nx, sx),
  S7 = M(ax, ix),
  E7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: ix, method: nx, params: sx, request: w7, response: S7, result: ax },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  ox = a.literal('eth_chainId'),
  cx = a.tuple([]),
  lx = Me,
  ux = B,
  _7 = L(ox, cx),
  $7 = M(lx, ux),
  A7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: ux, method: ox, params: cx, request: _7, response: $7, result: lx },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  fx = a.literal('eth_estimateGas'),
  dx = a.tuple([Ch]),
  hx = H,
  xx = B,
  I7 = L(fx, dx),
  T7 = M(hx, xx),
  P7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: xx, method: fx, params: dx, request: I7, response: T7, result: hx },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  px = a.literal('eth_feeHistory'),
  bx = a.tuple([a.number(), H.or(ht), a.array(a.number()).optional()]),
  yx = a.object({
    oldestBlock: a.number(),
    reward: a.array(a.tuple([H, H])).optional(),
    baseFeePerGas: a.array(H),
    gasUsedRatio: a.array(a.number()),
  }),
  mx = B,
  C7 = L(px, bx),
  k7 = M(yx, mx),
  D7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: mx, method: px, params: bx, request: C7, response: k7, result: yx },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  gx = a.literal('eth_gasPrice'),
  vx = a.tuple([]),
  wx = H,
  Sx = B,
  O7 = L(gx, vx),
  B7 = M(wx, Sx),
  L7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Sx, method: gx, params: vx, request: O7, response: B7, result: wx },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Ex = a.literal('eth_getBalance'),
  _x = a.tuple([fe, H.or(ht)]),
  $x = H,
  Ax = B,
  M7 = L(Ex, _x),
  N7 = M($x, Ax),
  R7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Ax, method: Ex, params: _x, request: M7, response: N7, result: $x },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Ix = a.literal('eth_getBlockByHash'),
  Tx = a.tuple([ue, a.boolean()]),
  Px = Wa,
  Cx = B,
  U7 = L(Ix, Tx),
  F7 = M(Px, Cx),
  j7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Cx, method: Ix, params: Tx, request: U7, response: F7, result: Px },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  kx = a.literal('eth_getBlockByNumber'),
  Dx = a.tuple([H.or(ht), a.boolean()]),
  Ox = Wa,
  Bx = B,
  H7 = L(kx, Dx),
  q7 = M(Ox, Bx),
  V7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Bx, method: kx, params: Dx, request: H7, response: q7, result: Ox },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Lx = a.literal('eth_getBlockReceipts'),
  Mx = a.tuple([ue.or(H).or(ht)]),
  Nx = a.array(Ph),
  Rx = B,
  G7 = L(Lx, Mx),
  z7 = M(Nx, Rx),
  K7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Rx, method: Lx, params: Mx, request: G7, response: z7, result: Nx },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Ux = a.literal('eth_getBlockTransactionCountByHash'),
  Fx = a.tuple([ue]),
  jx = H,
  Hx = B,
  W7 = L(Ux, Fx),
  Q7 = M(jx, Hx),
  Y7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Hx, method: Ux, params: Fx, request: W7, response: Q7, result: jx },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  qx = a.literal('eth_getBlockTransactionCountByNumber'),
  Vx = a.tuple([H]),
  Gx = H,
  zx = B,
  Z7 = L(qx, Vx),
  J7 = M(Gx, zx),
  X7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: zx, method: qx, params: Vx, request: Z7, response: J7, result: Gx },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Kx = a.literal('eth_getCode'),
  Wx = a.tuple([fe, a.union([H, ht])]),
  Qx = Ue,
  Yx = B,
  ew = L(Kx, Wx),
  tw = M(Qx, Yx),
  rw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Yx, method: Kx, params: Wx, request: ew, response: tw, result: Qx },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Zx = a.literal('eth_getFilterChanges'),
  Jx = a.tuple([H]),
  Xx = a.array(Ds),
  ep = B,
  nw = L(Zx, Jx),
  sw = M(Xx, ep),
  aw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: ep, method: Zx, params: Jx, request: nw, response: sw, result: Xx },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  tp = a.literal('eth_getFilterLogs'),
  rp = a.tuple([H]),
  np = a.array(Ds),
  sp = B,
  iw = L(tp, rp),
  ow = M(np, sp),
  cw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: sp, method: tp, params: rp, request: iw, response: ow, result: np },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  ap = a.literal('eth_getLogs'),
  ip = a.tuple([
    a.object({
      fromBlock: H.or(ht).optional(),
      toBlock: a.string().optional(),
      address: fe.optional(),
      topics: a.array(ue).optional(),
      blockHash: ue.optional(),
    }),
  ]),
  op = a.array(Ds),
  cp = B,
  lw = L(ap, ip),
  uw = M(op, cp),
  fw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: cp, method: ap, params: ip, request: lw, response: uw, result: op },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  lp = a.literal('eth_getProof'),
  up = a.tuple([fe, a.array(ue), H.or(ht)]),
  fp = Mv,
  dp = B,
  dw = L(lp, up),
  hw = M(fp, dp),
  xw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: dp, method: lp, params: up, request: dw, response: hw, result: fp },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  hp = a.literal('eth_getStorageAt'),
  xp = a.tuple([fe, H, H.or(ht)]),
  pp = Ue,
  bp = B,
  pw = L(hp, xp),
  bw = M(pp, bp),
  yw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: bp, method: hp, params: xp, request: pw, response: bw, result: pp },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  yp = a.literal('eth_getTransactionByBlockHashAndIndex'),
  mp = a.tuple([ue, H]),
  gp = Os.nullish().default(null),
  vp = B,
  mw = L(yp, mp),
  gw = M(gp, vp),
  vw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: vp, method: yp, params: mp, request: mw, response: gw, result: gp },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  wp = a.literal('eth_getTransactionByBlockNumberAndIndex'),
  Sp = a.tuple([a.string(), H]),
  Ep = Os,
  _p = B,
  ww = L(wp, Sp),
  Sw = M(Ep, _p),
  Ew = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: _p, method: wp, params: Sp, request: ww, response: Sw, result: Ep },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  $p = a.literal('eth_getTransactionByHash'),
  Ap = a.tuple([ue]),
  Ip = Os.nullable(),
  Tp = B,
  _w = L($p, Ap),
  $w = M(Ip, Tp),
  Aw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Tp, method: $p, params: Ap, request: _w, response: $w, result: Ip },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Pp = a.literal('eth_getTransactionCount'),
  Cp = a.tuple([fe, H.or(ht)]),
  kp = H,
  Dp = B,
  Iw = L(Pp, Cp),
  Tw = M(kp, Dp),
  Pw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Dp, method: Pp, params: Cp, request: Iw, response: Tw, result: kp },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Op = a.literal('eth_getTransactionReceipt'),
  Bp = a.tuple([ue]),
  Lp = Ph.nullish().default(null),
  Mp = B,
  Cw = L(Op, Bp),
  kw = M(Lp, Mp),
  Dw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Mp, method: Op, params: Bp, request: Cw, response: kw, result: Lp },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Np = a.literal('eth_getUncleByBlockHashAndIndex'),
  Rp = a.tuple([H.or(ht), H]),
  Up = Wa,
  Fp = B,
  Ow = L(Np, Rp),
  Bw = M(Up, Fp),
  Lw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Fp, method: Np, params: Rp, request: Ow, response: Bw, result: Up },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  jp = a.literal('eth_getUncleByBlockNumberAndIndex'),
  Hp = a.tuple([H.or(ht), H]),
  qp = Wa,
  Vp = B,
  Mw = L(jp, Hp),
  Nw = M(qp, Vp),
  Rw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Vp, method: jp, params: Hp, request: Mw, response: Nw, result: qp },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Gp = a.literal('eth_getUncleCountByBlockHash'),
  zp = a.tuple([ue]),
  Kp = H,
  Wp = B,
  Uw = L(Gp, zp),
  Fw = M(Kp, Wp),
  jw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Wp, method: Gp, params: zp, request: Uw, response: Fw, result: Kp },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Qp = a.literal('eth_getUncleCountByBlockNumber'),
  Yp = a.tuple([H.or(ht)]),
  Zp = H,
  Jp = B,
  Hw = L(Qp, Yp),
  qw = M(Zp, Jp),
  Vw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Jp, method: Qp, params: Yp, request: Hw, response: qw, result: Zp },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Xp = a.literal('eth_maxPriorityFeePerGas'),
  eb = a.tuple([]),
  tb = H,
  rb = B,
  Gw = L(Xp, eb),
  zw = M(tb, rb),
  Kw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: rb, method: Xp, params: eb, request: Gw, response: zw, result: tb },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  nb = a.literal('eth_newBlockFilter'),
  sb = a.tuple([]),
  ab = H,
  ib = B,
  Ww = L(nb, sb),
  Qw = M(ab, ib),
  Yw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: ib, method: nb, params: sb, request: Ww, response: Qw, result: ab },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  ob = a.literal('eth_newFilter'),
  cb = a.tuple([
    a.object({
      fromBlock: H.optional(),
      toBlock: H.optional(),
      address: fe.or(a.array(fe)).optional(),
      topics: a
        .array(
          Ue.nullish()
            .default(null)
            .or(a.array(Ue.nullish().default(null)))
        )
        .optional(),
    }),
  ]),
  lb = H,
  ub = B,
  Zw = L(ob, cb),
  Jw = M(lb, ub),
  Xw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: ub, method: ob, params: cb, request: Zw, response: Jw, result: lb },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  fb = a.literal('eth_newPendingTransactionFilter'),
  db = a.tuple([]),
  hb = H,
  xb = B,
  eS = L(fb, db),
  tS = M(hb, xb),
  rS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: xb, method: fb, params: db, request: eS, response: tS, result: hb },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  pb = a.literal('personal_sign'),
  bb = a.union([a.tuple([$a, fe]), a.tuple([$a, fe, a.unknown()])]),
  yb = Ue,
  mb = B,
  nS = L(pb, bb),
  sS = M(yb, mb),
  aS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: mb, method: pb, params: bb, request: nS, response: sS, result: yb },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  gb = a.literal('eth_protocolVersion'),
  vb = a.tuple([]),
  wb = a.string(),
  Sb = B,
  iS = L(gb, vb),
  oS = M(wb, Sb),
  cS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Sb, method: gb, params: vb, request: iS, response: oS, result: wb },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Eb = a.literal('eth_requestAccounts'),
  _b = a.tuple([]),
  $b = a.array(fe),
  Ab = B,
  lS = L(Eb, _b),
  uS = M($b, Ab),
  fS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Ab, method: Eb, params: _b, request: lS, response: uS, result: $b },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Ib = a.literal('eth_sendPrivateTransaction'),
  Tb = a.tuple([
    a.object({
      tx: ue,
      maxBlockNumber: H.optional(),
      preferences: a.object({ fast: a.boolean() }).optional(),
    }),
  ]),
  Pb = ue,
  Cb = B,
  dS = L(Ib, Tb),
  hS = M(Pb, Cb),
  xS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Cb, method: Ib, params: Tb, request: dS, response: hS, result: Pb },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  kb = a.literal('eth_sendRawTransaction'),
  Db = a.tuple([Ue]),
  Ob = ue,
  Bb = B,
  pS = L(kb, Db),
  bS = M(Ob, Bb),
  yS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Bb, method: kb, params: Db, request: pS, response: bS, result: Ob },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Lb = a.literal('eth_sendTransaction'),
  Mb = a.tuple([Ka]),
  Nb = ue,
  Rb = B,
  mS = L(Lb, Mb),
  gS = M(Nb, Rb),
  vS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Rb, method: Lb, params: Mb, request: mS, response: gS, result: Nb },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Ub = a.literal('eth_sign'),
  Fb = a.tuple([fe, $a]),
  jb = Ue,
  Hb = B,
  wS = L(Ub, Fb),
  SS = M(jb, Hb),
  ES = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Hb, method: Ub, params: Fb, request: wS, response: SS, result: jb },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  qb = a.literal('eth_signTransaction'),
  Vb = a.tuple([Ka]),
  Gb = Ue,
  zb = B,
  _S = L(qb, Vb),
  $S = M(Gb, zb),
  AS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: zb, method: qb, params: Vb, request: _S, response: $S, result: Gb },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Kb = a.literal('eth_signTypedData'),
  Wb = a.tuple([$v, fe]),
  Qb = Ue,
  Yb = B,
  IS = L(Kb, Wb),
  TS = M(Qb, Yb),
  PS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: Yb, method: Kb, params: Wb, request: IS, response: TS, result: Qb },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Zb = a.literal('eth_signTypedData_v3'),
  Jb = a.tuple([
    fe,
    a
      .string()
      .transform((e, t) => {
        try {
          const r = JSON.parse(e);
          return Tl.parse(r);
        } catch (r) {
          return (
            t.addIssue({
              code: a.ZodIssueCode.custom,
              message: 'Invalid typed data:' + r.message,
              fatal: !0,
            }),
            a.NEVER
          );
        }
      })
      .or(Tl),
  ]),
  Xb = Ue,
  e1 = B,
  CS = L(Zb, Jb),
  kS = M(Xb, e1),
  DS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: e1, method: Zb, params: Jb, request: CS, response: kS, result: Xb },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  t1 = a.literal('eth_signTypedData_v4'),
  r1 = a.tuple([
    fe,
    a
      .string()
      .transform((e, t) => {
        try {
          const r = JSON.parse(e);
          return Pl.parse(r);
        } catch (r) {
          return (
            t.addIssue({
              code: a.ZodIssueCode.custom,
              message: 'Invalid typed data:' + r.message,
              fatal: !0,
            }),
            a.NEVER
          );
        }
      })
      .or(Pl),
  ]),
  n1 = Ue,
  s1 = B,
  OS = L(t1, r1),
  BS = M(n1, s1),
  LS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: s1, method: t1, params: r1, request: OS, response: BS, result: n1 },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  a1 = a.literal('eth_subscribe'),
  i1 = a.any(),
  o1 = a.union([
    Me,
    a.object({ result: Os, subscription: Me }),
    a.object({ result: ue, subscription: Me }),
    a.object({
      result: a.object({
        difficulty: Me,
        extraData: Me,
        gasLimit: Me,
        gasUsed: Me,
        logsBloom: Me,
        miner: fe,
        nonce: Me,
        number: Me,
        parentHash: ue,
        receiptRoot: ue,
        sha3Uncles: ue,
        stateRoot: ue,
        timestamp: Me,
        transactionsRoot: ue,
      }),
      subscription: Me,
    }),
    a.object({ result: Ds, subscription: Me }),
  ]),
  c1 = B,
  MS = L(a1, i1),
  NS = M(o1, c1),
  RS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: c1, method: a1, params: i1, request: MS, response: NS, result: o1 },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  l1 = a.literal('eth_syncing'),
  u1 = a.tuple([]),
  f1 = a.union([a.object({ currentBlock: H, highestBlock: H, startingBlock: H }), a.literal(!1)]),
  d1 = B,
  US = L(l1, u1),
  FS = M(f1, d1),
  jS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: d1, method: l1, params: u1, request: US, response: FS, result: f1 },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  h1 = a.literal('eth_uninstallFilter'),
  x1 = a.tuple([H]),
  p1 = a.boolean(),
  b1 = B,
  HS = L(h1, x1),
  qS = M(p1, b1),
  VS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: b1, method: h1, params: x1, request: HS, response: qS, result: p1 },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  y1 = a.literal('eth_unsubscribe'),
  m1 = a.any(),
  g1 = a.boolean(),
  v1 = B,
  GS = L(y1, m1),
  zS = M(g1, v1),
  KS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: v1, method: y1, params: m1, request: GS, response: zS, result: g1 },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  w1 = a.literal('net_listening'),
  S1 = a.tuple([]),
  E1 = a.boolean(),
  _1 = B,
  WS = L(w1, S1),
  QS = M(E1, _1),
  YS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: _1, method: w1, params: S1, request: WS, response: QS, result: E1 },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  $1 = a.literal('net_version'),
  A1 = a.tuple([]),
  I1 = a.string(),
  T1 = B,
  ZS = L($1, A1),
  JS = M(I1, T1),
  XS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: T1, method: $1, params: A1, request: ZS, response: JS, result: I1 },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  P1 = a.literal('wallet_addEthereumChain'),
  C1 = a.tuple([
    a.object({
      chainId: Me,
      chainName: a.string(),
      nativeCurrency: a.object({
        name: a.string(),
        symbol: a.string().refine(
          (e) => {
            const { length: t } = e;
            return t >= 2 && t <= 6;
          },
          { message: 'Value is not a valid symbol.' }
        ),
        decimals: a.number(),
      }),
      rpcUrls: a.array(a.string()),
      blockExplorerUrls: a.union([a.tuple([a.string()]), a.null()]).optional(),
      iconUrls: a.array(a.string()).optional(),
    }),
  ]),
  k1 = a.null(),
  D1 = B,
  eE = L(P1, C1),
  tE = M(k1, D1),
  rE = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: D1, method: P1, params: C1, request: eE, response: tE, result: k1 },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  O1 = a.literal('wallet_selectEthereumProvider'),
  B1 = a.tuple([]),
  L1 = Oh,
  M1 = B,
  nE = L(O1, B1),
  sE = M(L1, M1),
  aE = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: M1, method: O1, params: B1, request: nE, response: sE, result: L1 },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  N1 = a.literal('wallet_switchEthereumChain'),
  R1 = a.tuple([a.object({ chainId: Me })]),
  U1 = a.null(),
  F1 = B,
  iE = L(N1, R1),
  oE = M(U1, F1),
  cE = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: F1, method: N1, params: R1, request: iE, response: oE, result: U1 },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  j1 = a.literal('wallet_watchAsset'),
  H1 = a.object({
    type: a.literal('ERC20'),
    options: a.object({ address: fe, symbol: a.string(), decimals: a.number(), image: a.string() }),
  }),
  q1 = a.boolean(),
  V1 = B,
  lE = L(j1, H1),
  uE = M(q1, V1),
  fE = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: V1, method: j1, params: H1, request: lE, response: uE, result: q1 },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  G1 = a.literal('web3_clientVersion'),
  z1 = a.tuple([]),
  K1 = a.string(),
  W1 = B,
  dE = L(G1, z1),
  hE = M(K1, W1),
  xE = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: W1, method: G1, params: z1, request: dE, response: hE, result: K1 },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Q1 = a.literal('web3_sha3'),
  Y1 = a.tuple([Ue]),
  Z1 = Ue,
  J1 = B,
  pE = L(Q1, Y1),
  bE = M(Z1, J1),
  yE = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: J1, method: Q1, params: Y1, request: pE, response: bE, result: Z1 },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  mE = a.record(a.string(), a.any()),
  gE = a.record(a.string(), mE),
  vE = a.object({ parentCapability: a.string(), date: a.number().optional() }),
  X1 = a.literal('wallet_requestPermissions'),
  ey = a.tuple([gE]),
  ty = a.array(vE),
  ry = B,
  wE = L(X1, ey),
  SE = M(ty, ry),
  EE = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: ry, method: X1, params: ey, request: wE, response: SE, result: ty },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  _E = a.object({ type: a.string(), value: a.any() }),
  $E = a.object({ invoker: a.string().url(), parentCapability: a.string(), caveats: a.array(_E) }),
  ny = a.literal('wallet_getPermissions'),
  sy = a.tuple([]),
  ay = a.array($E),
  iy = B,
  AE = L(ny, sy),
  IE = M(ay, iy),
  TE = Object.freeze(
    Object.defineProperty(
      { __proto__: null, error: iy, method: ny, params: sy, request: AE, response: IE, result: ay },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  EB = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        eth_accounts: x7,
        eth_blockNumber: y7,
        eth_call: v7,
        eth_cancelPrivateTransaction: E7,
        eth_chainId: A7,
        eth_estimateGas: P7,
        eth_feeHistory: D7,
        eth_gasPrice: L7,
        eth_getBalance: R7,
        eth_getBlockByHash: j7,
        eth_getBlockByNumber: V7,
        eth_getBlockReceipts: K7,
        eth_getBlockTransactionCountByHash: Y7,
        eth_getBlockTransactionCountByNumber: X7,
        eth_getCode: rw,
        eth_getFilterChanges: aw,
        eth_getFilterLogs: cw,
        eth_getLogs: fw,
        eth_getProof: xw,
        eth_getStorageAt: yw,
        eth_getTransactionByBlockHashAndIndex: vw,
        eth_getTransactionByBlockNumberAndIndex: Ew,
        eth_getTransactionByHash: Aw,
        eth_getTransactionCount: Pw,
        eth_getTransactionReceipt: Dw,
        eth_getUncleByBlockHashAndIndex: Lw,
        eth_getUncleByBlockNumberAndIndex: Rw,
        eth_getUncleCountByBlockHash: jw,
        eth_getUncleCountByBlockNumber: Vw,
        eth_maxPriorityFeePerGas: Kw,
        eth_newBlockFilter: Yw,
        eth_newFilter: Xw,
        eth_newPendingTransactionFilter: rS,
        eth_protocolVersion: cS,
        eth_requestAccounts: fS,
        eth_sendPrivateTransaction: xS,
        eth_sendRawTransaction: yS,
        eth_sendTransaction: vS,
        eth_sign: ES,
        eth_signTransaction: AS,
        eth_signTypedData: PS,
        eth_signTypedData_v3: DS,
        eth_signTypedData_v4: LS,
        eth_subscribe: RS,
        eth_syncing: jS,
        eth_uninstallFilter: VS,
        eth_unsubscribe: KS,
        net_listening: YS,
        net_version: XS,
        personal_sign: aS,
        wallet_addEthereumChain: rE,
        wallet_getPermissions: TE,
        wallet_requestPermissions: EE,
        wallet_selectEthereumProvider: aE,
        wallet_switchEthereumChain: cE,
        wallet_watchAsset: fE,
        web3_clientVersion: xE,
        web3_sha3: yE,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  PE = a.literal('phantom_accountChanged'),
  CE = a
    .object({
      evm: a.optional(fe),
      sol: a.optional(Qa),
      btc: a.array(u0).optional(),
      sui: a.optional(d0),
    })
    .nullish()
    .default(null);
Kn(PE, CE);
const kE = a.literal('phantom_metaMaskOverrideSettingsChanged'),
  DE = a.null();
Kn(kE, DE);
const OE = a.literal('phantom_chainChanged'),
  BE = a.object({ evm: H }).nullish().default(null);
Kn(OE, BE);
const LE = a.literal('phantom_dappIcon'),
  ME = a.string().nullish().default(null);
Kn(LE, ME);
const NE = a.literal('phantom_dappMeta'),
  RE = a.object({
    title: a.string(),
    url: a.string(),
    icons: a
      .object({ href: a.string(), size: a.object({ width: a.number(), height: a.number() }) })
      .array(),
  });
Kn(NE, RE);
const UE = a.literal('phantom_trustRevoked'),
  FE = a
    .object({
      evm: a.optional(fe),
      sol: a.optional(Qa),
      btc: a.array(u0).optional(),
      sui: a.optional(d0),
    })
    .nullish()
    .default(null);
Kn(UE, FE);
const jE = a.literal('phantom_deep_link_browse'),
  HE = a.object({
    url: a.string().refine(
      (e) => {
        try {
          const t = decodeURIComponent(e);
          return m4(t);
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
    ref: a.string(),
  }),
  qE = a.null(),
  VE = B;
L(jE, HE);
M(qE, VE);
const GE = a.literal('phantom_deep_link_swap'),
  zE = a.object({ buy: a.string(), sell: a.string().optional(), amount: a.string().optional() }),
  KE = a.null(),
  WE = B;
L(GE, zE);
M(KE, WE);
const QE = a.literal('phantom_deep_link_fungible'),
  YE = a.object({ token: a.string() }),
  ZE = a.null(),
  JE = B;
L(QE, YE);
M(ZE, JE);
const XE = a.literal('phantom_deep_link_user'),
  e_ = a.object({ username: a.string(), action: a.enum(['send']).optional() }),
  t_ = a.null(),
  r_ = B;
L(XE, e_);
M(t_, r_);
const n_ = a.literal('phantom_deep_link_notification_center'),
  s_ = a.object({}),
  a_ = a.null(),
  i_ = B;
L(n_, s_);
M(a_, i_);
const o_ = a.literal('phantom_deep_link_connect'),
  c_ = a.object({
    app_url: Rh,
    dapp_encryption_public_key: x0,
    redirect_link: b0,
    cluster: Uh.optional(),
  }),
  l_ = a.object({ phantom_encryption_public_key: Mh, nonce: Xa, data: p0 }),
  u_ = B;
L(o_, c_);
M(l_, u_);
a.object({ public_key: te, session: te });
const f_ = a.literal('phantom_deep_link_disconnect'),
  d_ = zn,
  h_ = a.null(),
  x_ = B;
L(f_, d_);
M(h_, x_);
a.object({ session: te });
const p_ = a.literal('phantom_deep_link_signMessage'),
  b_ = zn,
  y_ = Bs,
  m_ = B;
L(p_, b_);
M(y_, m_);
a.object({
  session: te,
  message: te,
  display: a.union([a.literal('utf8'), a.literal('hex')]).optional(),
});
a.object({ signature: te, publicKey: te });
const g_ = a.literal('phantom_deep_link_signIn'),
  v_ = a.object({
    app_url: Rh,
    dapp_encryption_public_key: x0,
    redirect_link: b0,
    cluster: Uh.optional(),
    payload: Nh,
  }),
  w_ = a.object({ phantom_encryption_public_key: Mh, nonce: Xa, data: p0 }),
  S_ = B;
L(g_, v_);
M(w_, S_);
a.object({ address: te, signedMessage: te, signature: te, session: te });
const E_ = a.literal('phantom_deep_link_signTransaction'),
  __ = zn,
  $_ = Bs,
  A_ = B;
L(E_, __);
M($_, A_);
a.object({ session: te, transaction: te });
a.object({ transaction: te });
const I_ = a.literal('phantom_deep_link_signAllTransactions'),
  T_ = zn,
  P_ = Bs,
  C_ = B;
L(I_, T_);
M(P_, C_);
a.object({ session: te, transactions: a.array(te) });
a.object({ transactions: a.array(te) });
const k_ = a.literal('phantom_deep_link_signAndSendTransaction'),
  D_ = zn,
  O_ = Bs,
  B_ = B;
L(k_, D_);
M(O_, B_);
a.object({ session: te, transaction: te, sendOptions: ei.optional() });
a.object({ signature: te });
const L_ = a.literal('phantom_deep_link_signAndSendAllTransactions'),
  M_ = zn,
  N_ = Bs,
  R_ = B;
L(L_, M_);
M(N_, R_);
a.object({ session: te, transactions: a.array(te), sendOptions: ei.optional() });
a.object({ signatures: a.array(a.union([te, a.null()])) });
const U_ = a.literal('phantom_deep_link_tokens'),
  F_ = a.object({
    chain: a.string(),
    address: a.string().optional(),
    referralId: a.string().optional(),
  }),
  j_ = a.null(),
  H_ = B;
L(U_, F_);
M(j_, H_);
const q_ = a.literal('phantom_deep_link_onboard'),
  V_ = a.object({ value: a.string().optional(), accounts: a.string().optional() }),
  G_ = a.null(),
  z_ = B;
L(q_, V_);
M(G_, z_);
const K_ = a.literal('phantom_deep_link_onramp'),
  W_ = a.object({
    buy: a.string(),
    amount: a.string().optional(),
    redirectURL: a.string().url().optional(),
  }),
  Q_ = a.null(),
  Y_ = B;
L(K_, W_);
M(Q_, Y_);
const Z_ = a.literal('phantom_deep_link_navigate'),
  J_ = a.object({ route: a.string(), params: a.any().optional() }),
  X_ = a.null(),
  e$ = B;
L(Z_, J_);
M(X_, e$);
const t$ = a.literal('phantom_deep_link_social'),
  r$ = a.object({}),
  n$ = a.null(),
  s$ = B;
L(t$, r$);
M(n$, s$);
var oy = ((e) => (
  (e.BitcoinTaproot = 'bip122_p2tr'),
  (e.BitcoinNativeSegwit = 'bip122_p2wpkh'),
  (e.BitcoinNestedSegwit = 'bip122_p2sh'),
  (e.BitcoinLegacy = 'bip122_p2pkh'),
  (e.Solana = 'solana'),
  (e.EVM = 'eip155'),
  (e.Sui = 'sui'),
  e
))(oy || {});
const a$ = a.object({ type: a.nativeEnum(oy), address: a.string() }),
  i$ = a.literal('phantom_getUser'),
  o$ = a.object({}),
  c$ = a
    .object({ addresses: a.array(a$) })
    .nullish()
    .default(null),
  l$ = B;
L(i$, o$);
M(c$, l$);
const u$ = a.literal('phantom_login'),
  f$ = a.object({}),
  d$ = a.null(),
  h$ = B;
L(u$, f$);
M(d$, h$);
const x$ = a.literal('phantom_logout'),
  p$ = a.object({}),
  b$ = a.null(),
  y$ = B;
L(x$, p$);
M(b$, y$);
const m$ = a.literal('sol_disconnect'),
  g$ = Ya.optional(),
  v$ = a.null(),
  w$ = B;
L(m$, g$);
M(v$, w$);
const S$ = a.literal('sol_signAllTransactions'),
  E$ = a.object({ transactions: a.array(te) }),
  _$ = a.array(
    a.object({
      signature: a.string(),
      transaction: te,
      version: a.union([a.literal('legacy'), a.number()]),
    })
  ),
  $$ = B;
L(S$, E$);
M(_$, $$);
const A$ = a.literal('sol_signAndSendTransaction'),
  I$ = a.object({
    transaction: te,
    options: ei,
    showConfirmation: a.boolean().optional(),
    postAction: y0.optional(),
    isSharingEligible: a.boolean().optional(),
  }),
  T$ = a.object({ signature: a.string(), publicKey: a.string() }),
  P$ = B;
L(A$, I$);
M(T$, P$);
const C$ = a.literal('sol_signIn'),
  k$ = a.object({ signInData: Lh }),
  D$ = a.object({ address: a.string(), signedMessage: a.string(), signature: a.string() }),
  O$ = B;
L(C$, k$);
M(D$, O$);
const B$ = a.literal('sol_signTransaction'),
  L$ = a.object({
    transaction: te,
    isSharingEligible: a.boolean().optional(),
    transactionSharingDelayMs: a.number().optional(),
  }),
  M$ = a.object({
    signature: a.string(),
    transaction: te,
    version: a.union([a.literal('legacy'), a.number()]),
  }),
  N$ = B;
L(B$, L$);
M(M$, N$);
const m0 = a.object({
    identityName: a.string().nullish(),
    identityUri: a.string().nullish(),
    iconRelativeUri: a.string().nullish(),
  }),
  R$ = a.object({ identity: m0, authorizationScope: a.string() }),
  g0 = a.object({ verifiableIdentity: R$, publicKey: a.string(), payloads: a.array(a.string()) }),
  cy = a.object({ identity: m0, cluster: a.string().optional() }),
  ly = a.object({ verifiableIdentity: m0 }),
  uy = a.object({ signPayloads: g0, minContextSlot: a.number() }),
  fy = a.object({ signPayloads: g0 }),
  dy = a.object({ signPayloads: g0 });
a.union([cy, ly, uy, fy, dy]);
const hy = a.union([
    a.object({
      type: a.literal('AUTHORIZE_SUCCESS'),
      publicKey: a.string(),
      accountLabel: a.string().optional(),
      walletUriBase: a.string().optional(),
      scope: a.string().optional(),
    }),
    a.object({ type: a.literal('AUTHORIZE_DECLINE') }),
  ]),
  xy = a.union([
    a.object({ type: a.literal('REAUTHORIZE_SUCCESS') }),
    a.object({ type: a.literal('REAUTHORIZE_DECLINE') }),
  ]),
  v0 = a.union([
    a.object({ type: a.literal('SIGN_PAYLOADS_SUCCESS'), signedPayloads: a.array(a.string()) }),
    a.object({ type: a.literal('SIGN_PAYLOADS_DECLINE') }),
    a.object({
      type: a.literal('SIGN_PAYLOADS_ERROR_INVALID_PAYLOADS'),
      valid: a.array(a.boolean()),
    }),
    a.object({ type: a.literal('SIGN_PAYLOADS_ERROR_AUTHORIZATION_NOT_VALID') }),
    a.object({ type: a.literal('SIGN_PAYLOADS_ERROR_TOO_MANY_PAYLOADS') }),
  ]),
  py = a.union([
    a.object({
      type: a.literal('SIGN_AND_SEND_TRANSACTIONS_SUCCESS'),
      signedPayloads: a.array(a.string()),
    }),
    a.object({ type: a.literal('SIGN_AND_SEND_TRANSACTIONS_DECLINE') }),
    a.object({
      type: a.literal('SIGN_AND_SEND_TRANSACTIONS_ERROR_INVALID_PAYLOADS'),
      valid: a.array(a.boolean()),
    }),
    a.object({
      type: a.literal('SIGN_AND_SEND_TRANSACTIONS_ERROR_NOT_SUBMITTED'),
      signatures: a.array(a.string()),
    }),
    a.object({ type: a.literal('SIGN_AND_SEND_TRANSACTIONS_ERROR_TOO_MANY_PAYLOADS') }),
    a.object({ type: a.literal('SIGN_AND_SEND_TRANSACTIONS_ERROR_AUTHORIZATION_NOT_VALID') }),
  ]);
a.union([hy, xy, v0, py]);
const U$ = a.literal('sol_mwa_authorize'),
  F$ = cy,
  j$ = hy,
  H$ = B;
L(U$, F$);
M(j$, H$);
const q$ = a.literal('sol_mwa_reauthorize'),
  V$ = ly,
  G$ = xy,
  z$ = B;
L(q$, V$);
M(G$, z$);
const K$ = a.literal('sol_mwa_sign_transactions'),
  W$ = fy,
  Q$ = v0,
  Y$ = B;
L(K$, W$);
M(Q$, Y$);
const Z$ = a.literal('sol_mwa_sign_messages'),
  J$ = dy,
  X$ = v0,
  eA = B;
L(Z$, J$);
M(X$, eA);
const tA = a.literal('sol_mwa_sign_and_send_transactions'),
  rA = uy,
  nA = py,
  sA = B;
L(tA, rA);
M(nA, sA);
const aA = a.literal('sol_pay_transfer'),
  iA = a.object({
    amount: a.instanceof(rn).optional(),
    recipient: a.string(),
    splToken: a.string().optional(),
    reference: a.array(a.string()).optional(),
    memo: a.string().optional(),
    label: a.string().optional(),
    message: a.string().optional(),
  }),
  oA = a.null(),
  cA = B;
L(aA, iA);
M(oA, cA);
const lA = a.literal('sol_pay_transaction'),
  uA = a.object({ link: a.string().url() }),
  fA = a.null(),
  dA = B;
L(lA, uA);
M(fA, dA);
const hA = a.literal('sui_requestAccounts'),
  xA = a.tuple([]),
  pA = d0,
  bA = B;
L(hA, xA);
M(pA, bA);
const yA = a.literal('sui_signTransaction'),
  mA = a.object({ transaction: a.string(), address: a.string(), networkID: a.string() }),
  gA = a.object({ transaction: a.string(), signature: a.string() }),
  vA = B;
L(yA, mA);
M(gA, vA);
const wA = a.literal('sui_signMessage'),
  SA = a.object({ message: a.instanceof(Uint8Array), address: a.string() }),
  EA = a.object({ message: a.string(), signature: a.string() }),
  _A = B;
L(wA, SA);
M(EA, _A);
const $A = a.literal('sui_signAndExecuteTransaction'),
  AA = a.object({ transaction: a.string(), address: a.string(), networkID: a.string() }),
  IA = a.object({
    transaction: a.string(),
    signature: a.string(),
    digest: a.string(),
    effects: a.string(),
  }),
  TA = B;
L($A, AA);
M(IA, TA);
const PA = a.literal('user_approveBtcRequestAccounts'),
  CA = a.tuple([Le]),
  kA = a.null(),
  DA = B;
L(PA, CA);
M(kA, DA);
const OA = a.literal('user_approveBtcSignPSBT'),
  BA = a.tuple([
    Le,
    a.object({
      psbt: a.instanceof(Uint8Array),
      inputsToSign: a.array(
        a.object({
          address: a.string(),
          signingIndexes: a.array(a.number()),
          sigHash: a.number().optional(),
        })
      ),
      finalize: a.boolean(),
    }),
  ]),
  LA = a.discriminatedUnion('type', [
    a.object({ type: a.literal('signAndSend') }),
    a.object({ type: a.literal('send'), signature: a.instanceof(Uint8Array) }),
  ]),
  MA = B;
L(OA, BA);
M(LA, MA);
const NA = a.literal('user_approveBtcSignMessage'),
  RA = a.tuple([Le, a.object({ message: a.instanceof(Uint8Array) })]),
  UA = a.discriminatedUnion('type', [
    a.object({ type: a.literal('signAndSend') }),
    a.object({
      type: a.literal('send'),
      signature: a.instanceof(Uint8Array),
      signedMessage: a.instanceof(Uint8Array),
    }),
  ]),
  FA = B;
L(NA, RA);
M(UA, FA);
const jA = a.literal('user_approveEthRequestAccounts'),
  HA = a.tuple([Le]),
  qA = a.null(),
  VA = B;
L(jA, HA);
M(qA, VA);
const GA = a.literal('user_approveWalletRequestPermissions'),
  zA = a.tuple([Le]),
  KA = a.null(),
  WA = B;
L(GA, zA);
M(KA, WA);
var Mr = ((e) => (
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
))(Mr || {});
const QA = a.literal('user_approveEthSendTransaction'),
  YA = a.tuple([Le, a.object({ transaction: Ka, autoConfirmStatusCode: a.nativeEnum(Mr) })]),
  ZA = a.discriminatedUnion('type', [
    a.object({ type: a.literal('signAndSend'), maxFeePerGas: H, maxPriorityFeePerGas: H }),
    a.object({ type: a.literal('send'), signature: Me, maxFeePerGas: H, maxPriorityFeePerGas: H }),
  ]),
  JA = B;
L(QA, YA);
M(ZA, JA);
const XA = a.literal('user_approveEthSignMessage'),
  eI = a.tuple([
    Le,
    a.object({
      signer: fe,
      message: Ue,
      originalMethod: a.enum([
        'eth_sign',
        'personal_sign',
        'eth_signTypedData',
        'eth_signTypedData_v3',
        'eth_signTypedData_v4',
      ]),
      chainId: a.string(),
      autoConfirmStatusCode: a.nativeEnum(Mr),
    }),
  ]),
  tI = a.discriminatedUnion('approvalType', [
    a.object({ approvalType: a.literal('user') }),
    a.object({ approvalType: a.literal('hardware'), signature: Me }),
  ]),
  rI = B;
L(XA, eI);
M(tI, rI);
const nI = a.literal('user_approveSolConnect'),
  sI = a.tuple([Le]),
  aI = a.null(),
  iI = B;
L(nI, sI);
M(aI, iI);
const oI = a.literal('user_approveSolSignAllTransactions'),
  cI = a.tuple([
    Le,
    a.object({ transactions: a.array(te), autoConfirmStatusCode: a.nativeEnum(Mr) }),
  ]),
  lI = a.discriminatedUnion('type', [
    a.object({ type: a.literal('signAndSend'), overwriteTransactions: a.array(te).optional() }),
    a.object({
      type: a.literal('send'),
      result: a.array(
        a.object({
          signedTransaction: te,
          signature: te,
          version: a.union([a.literal('legacy'), a.number()]),
        })
      ),
    }),
  ]),
  uI = B;
L(oI, cI);
M(lI, uI);
const fI = a.literal('user_approveSolSignAndSendTransaction'),
  dI = a.tuple([
    Le,
    a.object({ transaction: a.string(), autoConfirmStatusCode: a.nativeEnum(Mr) }),
  ]),
  hI = a.discriminatedUnion('type', [
    a.object({
      type: a.literal('signAndSend'),
      overwriteTransactions: a.array(te).optional(),
      isSharingEligible: a.boolean().optional(),
    }),
    a.object({
      type: a.literal('send'),
      signedTransaction: te,
      signature: te,
      version: a.union([a.literal('legacy'), a.number()]),
    }),
  ]),
  xI = B;
L(fI, dI);
M(hI, xI);
const pI = a.literal('user_approveSolSignAndSendAllTransactions'),
  bI = a.tuple([
    Le,
    a.object({ transactions: a.array(te), autoConfirmStatusCode: a.nativeEnum(Mr) }),
  ]),
  yI = a.discriminatedUnion('type', [
    a.object({ type: a.literal('signAndSend'), overwriteTransactions: a.array(te).optional() }),
    a.object({
      type: a.literal('send'),
      result: a.array(
        a.object({
          signedTransaction: te,
          signature: te,
          version: a.union([a.literal('legacy'), a.number()]),
        })
      ),
    }),
  ]),
  mI = B;
L(pI, bI);
M(yI, mI);
const gI = a.literal('user_approveSolSignIn'),
  vI = a.tuple([
    Le,
    a.object({
      connect: a.boolean(),
      signInData: Lh,
      message: te,
      errorDetails: a.array(a.object({ label: a.string(), message: a.string() })).optional(),
    }),
  ]),
  wI = a.discriminatedUnion('type', [
    a.object({ type: a.literal('signAndSend') }),
    a.object({ type: a.literal('send'), signature: te }),
  ]),
  SI = B;
L(gI, vI);
M(wI, SI);
const EI = a.literal('user_approveSolSignMessage'),
  _I = a.tuple([
    Le,
    a.object({
      message: te,
      display: a.union([a.literal('utf8'), a.literal('hex')]),
      autoConfirmStatusCode: a.nativeEnum(Mr),
    }),
  ]),
  $I = a.discriminatedUnion('type', [
    a.object({ type: a.literal('signAndSend') }),
    a.object({ type: a.literal('send'), signature: te }),
  ]),
  AI = B;
L(EI, _I);
M($I, AI);
const II = a.literal('user_approveSolSignTransaction'),
  TI = a.tuple([
    Le,
    a.object({ transaction: a.string(), autoConfirmStatusCode: a.nativeEnum(Mr) }),
  ]),
  PI = a.discriminatedUnion('type', [
    a.object({
      type: a.literal('signAndSend'),
      overwriteTransactions: a.array(te).optional(),
      isSharingEligible: a.boolean().optional(),
      transactionSharingDelayMs: a.number().optional(),
    }),
    a.object({
      type: a.literal('send'),
      signedTransaction: te,
      signature: te,
      version: a.union([a.literal('legacy'), a.number()]),
    }),
  ]),
  CI = B;
L(II, TI);
M(PI, CI);
const kI = a.literal('user_confirmEIP712IncorrectChainId'),
  DI = a.tuple([Le, a.object({ connectedChainId: a.string(), messageChainId: a.string() })]),
  OI = a.null(),
  BI = B;
L(kI, DI);
M(OI, BI);
const LI = a.literal('user_confirmIncorrectMode'),
  MI = a.tuple([Le, a.enum(['mainnet', 'testnet'])]),
  NI = a.null(),
  RI = B;
L(LI, MI);
M(NI, RI);
const UI = a.literal('user_confirmDisabledNetwork'),
  FI = a.tuple([Le, a.string()]),
  jI = a.null(),
  HI = B;
L(UI, FI);
M(jI, HI);
const qI = a.literal('user_confirmUnsupportedAccount'),
  VI = a.tuple([Le, a.literal('ethereum').or(a.literal('solana'))]),
  GI = a.null(),
  zI = B;
L(qI, VI);
M(GI, zI);
const KI = a.literal('user_confirmUnsupportedNetwork'),
  WI = a.tuple([Le, a.string()]),
  QI = a.null(),
  YI = B;
L(KI, WI);
M(QI, YI);
const ZI = a.literal('user_selectEthWallet'),
  JI = a.tuple([Le]),
  XI = Oh,
  eT = B;
L(ZI, JI);
M(XI, eT);
const tT = a.literal('user_approveSolPayTransaction'),
  rT = a.tuple([Le, a.object({ label: a.string().optional(), transaction: a.string() })]),
  nT = a.discriminatedUnion('type', [
    a.object({ type: a.literal('signAndSend') }),
    a.object({
      type: a.literal('send'),
      signedTransaction: te,
      signature: te,
      version: a.union([a.literal('legacy'), a.number()]),
    }),
  ]),
  sT = B;
L(tT, rT);
M(nT, sT);
const aT = a.literal('user_approveSolFeaturedAction'),
  iT = a.tuple([Le, a.object({ featuredTransaction: w9 })]),
  oT = a.object({ transaction: a.string().optional(), message: a.string().optional() }),
  cT = B;
L(aT, iT);
M(oT, cT);
const lT = a.literal('user_solTransactionConfirmation'),
  uT = a.tuple([Le, a.object({ signature: te, postAction: y0.optional() })]),
  fT = a.null(),
  dT = B;
L(lT, uT);
M(fT, dT);
const hT = a.literal('user_approveSuiRequestAccounts'),
  xT = a.tuple([Le]),
  pT = a.null(),
  bT = B;
L(hT, xT);
M(pT, bT);
const yT = a.literal('user_approveSuiSignTransaction'),
  mT = a.tuple([Le, a.object({ transaction: a.string() })]),
  gT = a.object({ transaction: a.string() }),
  vT = B;
L(yT, mT);
M(gT, vT);
const wT = a.literal('user_approveSuiSignMessage'),
  ST = a.tuple([Le, a.object({ message: a.instanceof(Uint8Array) })]),
  ET = a.object({ message: a.string() }),
  _T = B;
L(wT, ST);
M(ET, _T);
function _B(e) {
  const { publicKey: t, addressType: r } = e;
  switch (r) {
    case Q.BitcoinTaproot:
    case Q.BitcoinNativeSegwit:
    case Q.BitcoinNestedSegwit:
    case Q.BitcoinLegacy:
      return $T(t, r, e.networkID);
    case Q.EVM:
      return AT(t);
    case Q.Solana:
      return vt.encode(t);
    case Q.Sui:
      return new o0(t).toSuiAddress();
    default:
      return Vn();
  }
}
const $T = (e, t, r) => {
    var i, o, c, d;
    const n =
      r === 'bip122:000000000933ea01ad0ee984209779ba' ? Dt.networks.testnet : Dt.networks.bitcoin;
    let s;
    switch (t) {
      case Q.BitcoinTaproot:
        Dt.initEccLib(qf),
          (s =
            (i = Dt.payments.p2tr(
              { internalPubkey: Ce.from(e.slice(1, 33)), network: n },
              { validate: !1 }
            )) == null
              ? void 0
              : i.address);
        break;
      case Q.BitcoinNativeSegwit:
        s =
          (o = Dt.payments.p2wpkh({ pubkey: Ce.from(e), network: n }, { validate: !1 })) == null
            ? void 0
            : o.address;
        break;
      case Q.BitcoinNestedSegwit: {
        const l = Ce.from(e),
          f = Dt.payments.p2wpkh({ pubkey: l, network: n }, { validate: !1 });
        s =
          (c = Dt.payments.p2sh({ pubkey: l, network: n, redeem: f }, { validate: !1 })) == null
            ? void 0
            : c.address;
        break;
      }
      case Q.BitcoinLegacy: {
        s =
          (d = Dt.payments.p2pkh({ pubkey: Ce.from(e), network: n }, { validate: !1 })) == null
            ? void 0
            : d.address;
        break;
      }
      default:
        Vn();
    }
    if (!s) throw new Error('Could not derive Bitcoin address from public key');
    return s;
  },
  AT = (e) => {
    const t = e.slice(1),
      n = $h(t).slice(12);
    return IT(`0x${Ce.from(n).toString('hex')}`);
  },
  IT = (e) => {
    if (!Me.safeParse(e).success)
      throw new Error('toChecksumAddress: Input address is not a valid hex string.');
    const t = e.toLowerCase().replace('0x', ''),
      r = Ce.from($h(Ce.from(t, 'utf-8'))).toString('hex');
    let n = '0x';
    for (let s = 0; s < t.length; s++)
      parseInt(r[s], 16) >= 8 ? (n += t[s].toUpperCase()) : (n += t[s]);
    return n;
  };
function $B(e) {
  return F4.safeParse(e).success;
}
function AB(e) {
  switch (e) {
    case K.Bip44RootSolana:
    case K.Bip44ChangeSolana:
    case K.Bip44Solana:
    case K.DeprecatedSolana:
      return Q.Solana;
    case K.Bip44RootEthereum:
    case K.Bip44Ethereum:
    case K.Bip44EthereumSecondary:
    case K.Bip44EthereumTertiary:
      return Q.EVM;
    case K.BitcoinLegacy:
      return Q.BitcoinLegacy;
    case K.BitcoinNativeSegwit:
      return Q.BitcoinNativeSegwit;
    case K.BitcoinNestedSegwit:
      return Q.BitcoinNestedSegwit;
    case K.BitcoinTaproot:
      return Q.BitcoinTaproot;
    case K.Bip44Sui:
      return Q.Sui;
  }
}
var ce = ((e) => (
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
  ))(ce || {}),
  wt = ((e) => (
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
  ))(wt || {});
class TT extends Error {
  constructor(t, r) {
    super(`${r} is not yet supported for ${t}`),
      (this.chain = t),
      (this.feature = r),
      (this.name = 'UnsupportedChainFeatureError');
  }
}
class IB extends TT {
  constructor(t) {
    super('sui', t);
  }
}
var by = ((e) => ((e.Mainnet = 'eip155:42161'), (e.Sepolia = 'eip155:421614'), e))(by || {});
const PT = a.union([a.literal('eip155:42161'), a.literal('eip155:421614')]),
  CT = {
    id: ce.Arbitrum,
    addressTypes: [Q.EVM],
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
    slip44: wt.Arbitrum,
    parentChain: ce.Ethereum,
  };
var yy = ((e) => ((e.Mainnet = 'eip155:8453'), (e.Sepolia = 'eip155:84532'), e))(yy || {});
const kT = a.union([a.literal('eip155:8453'), a.literal('eip155:84532')]),
  DT = {
    id: ce.Base,
    addressTypes: [Q.EVM],
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
    slip44: wt.Base,
    parentChain: ce.Ethereum,
  };
var Aa = ((e) => ((e.Mainnet = 'sui:mainnet'), (e.Testnet = 'sui:testnet'), e))(Aa || {});
const my = a.union([a.literal('sui:mainnet'), a.literal('sui:testnet')]),
  OT = {
    id: ce.Sui,
    addressTypes: [Q.Sui],
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
    slip44: wt.Sui,
  },
  BT = a.object({
    networkID: my,
    addressType: a.nativeEnum(Q),
    address: f0,
    publicKey: a.instanceof(Uint8Array).optional(),
  });
var gy = ((e) => (
  (e.Mainnet = 'bip122:000000000019d6689c085ae165831e93'),
  (e.Testnet = 'bip122:000000000933ea01ad0ee984209779ba'),
  e
))(gy || {});
const w0 = a.union([
    a.literal('bip122:000000000019d6689c085ae165831e93'),
    a.literal('bip122:000000000933ea01ad0ee984209779ba'),
  ]),
  LT = a.union([a.literal(Aa.Mainnet), a.literal(Aa.Testnet)]),
  vy = a.string().refine(
    (e) => {
      try {
        return Dt.initEccLib(qf), Dt.address.toOutputScript(e), !0;
      } catch {
        return !1;
      }
    },
    { message: 'Invalid Bitcoin address.' }
  ),
  wy = a.object({
    networkID: w0,
    addressType: a.nativeEnum(Q),
    address: vy,
    publicKey: a.instanceof(Uint8Array).optional(),
  }),
  MT = {
    id: ce.Bitcoin,
    addressTypes: [Q.BitcoinTaproot, Q.BitcoinNativeSegwit],
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
    slip44: wt.Bitcoin,
  };
var Sy = ((e) => ((e.Mainnet = 'hypercore:mainnet'), (e.Testnet = 'hypercore:testnet'), e))(
  Sy || {}
);
const ti = a.union([a.literal('hypercore:mainnet'), a.literal('hypercore:testnet')]),
  NT = {
    id: ce.Hypercore,
    addressTypes: [Q.EVM],
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
    slip44: wt.Hypercore,
  },
  RT = a.object({ networkID: ti, addressType: a.nativeEnum(Q), address: Bh });
var Ey = ((e) => (
  (e.Mainnet = 'eip155:143'), (e.Testnet = 'eip155:10143'), (e.Devnet = 'eip155:41454'), e
))(Ey || {});
const UT = a.union([a.literal('eip155:143'), a.literal('eip155:10143'), a.literal('eip155:41454')]),
  FT = {
    id: ce.Monad,
    addressTypes: [Q.EVM],
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
    slip44: wt.Monad,
  };
var _y = ((e) => ((e.Mainnet = 'eip155:137'), (e.Amoy = 'eip155:80002'), e))(_y || {});
const jT = a.union([a.literal('eip155:137'), a.literal('eip155:80002')]),
  HT = {
    id: ce.Polygon,
    addressTypes: [Q.EVM],
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
    slip44: wt.Polygon,
    parentChain: ce.Ethereum,
  };
var $y = ((e) => ((e.Mainnet = 'eip155:1'), (e.Sepolia = 'eip155:11155111'), e))($y || {});
const qT = a.union([a.literal('eip155:1'), a.literal('eip155:11155111')]),
  S0 = a.union([qT, jT, kT, UT, PT, ti]),
  VT = a.object({ networkID: S0, addressType: a.nativeEnum(Q), address: fe }),
  GT = {
    id: ce.Ethereum,
    addressTypes: [Q.EVM],
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
    slip44: wt.Ethereum,
  };
var Ay = ((e) => (
  (e.Mainnet = 'solana:101'),
  (e.Testnet = 'solana:102'),
  (e.Devnet = 'solana:103'),
  (e.Localnet = 'solana:localnet'),
  e
))(Ay || {});
const E0 = a.union([
    a.literal('solana:101'),
    a.literal('solana:102'),
    a.literal('solana:103'),
    a.literal('solana:localnet'),
  ]),
  zT = a.object({ networkID: E0, addressType: a.nativeEnum(Q), address: Qa }),
  KT = {
    id: ce.Solana,
    addressTypes: [Q.Solana],
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
    slip44: wt.Solana,
  };
function Iy(e) {
  return Object.values(ce).includes(e);
}
const Ye = {
    [ce.Bitcoin]: MT,
    [ce.Ethereum]: GT,
    [ce.Polygon]: HT,
    [ce.Monad]: FT,
    [ce.Solana]: KT,
    [ce.Base]: DT,
    [ce.Sui]: OT,
    [ce.Arbitrum]: CT,
    [ce.Hypercore]: NT,
  },
  Cl = {
    [ce.Solana]: 1,
    [ce.Ethereum]: 2,
    [ce.Monad]: 3,
    [ce.Base]: 4,
    [ce.Sui]: 5,
    [ce.Polygon]: 6,
    [ce.Bitcoin]: 7,
    [ce.Arbitrum]: 8,
    [ce.Hypercore]: 9,
  },
  WT = {
    [ce.Solana]: !0,
    [ce.Ethereum]: !0,
    [ce.Monad]: !1,
    [ce.Base]: !0,
    [ce.Polygon]: !0,
    [ce.Bitcoin]: !0,
    [ce.Sui]: !1,
    [ce.Arbitrum]: !1,
    [ce.Hypercore]: !1,
  },
  Oi = (e, t) => {
    const r = Cl[e] - Cl[t];
    return r === 0 ? 0 : r > 0 ? 1 : -1;
  },
  QT = () => {
    const e = Object.values(ce).sort(Oi),
      t = e.map((C) => Ye[C]),
      r = {},
      n = [],
      s = {},
      i = {},
      o = {};
    t.forEach((C) => {
      const ee = Object.fromEntries(Object.entries(C.networks).filter(([xt, ct]) => !ct.hidden)),
        Ee = Object.keys(ee);
      n.push(...Ee),
        Ee.forEach((xt) => {
          r[xt] = C;
        });
      const St = Object.values(ee);
      (s[C.id] = St.map((xt) => xt.id)),
        St.forEach((xt) => {
          i[xt.id] = xt;
        });
      for (const xt of C.addressTypes) {
        const ct = o[xt];
        ct ? ct.push(C.id) : (o[xt] = [C.id]);
      }
    });
    const c = new Set(n);
    function d(C) {
      return C != null && C.evmOnly ? e.filter((ee) => Ye[ee].addressTypes.includes(Q.EVM)) : e;
    }
    function l(C, ee) {
      return C === ce.Sui ? ee : WT[C];
    }
    function f(C) {
      return n.filter((ee) => r[ee].id === C);
    }
    function u(C) {
      if (!C) return n;
      let ee = n;
      return (
        C.evmOnly && (ee = ee.filter((Ee) => we(Ee))),
        C.mainnetOnly && (ee = ee.filter((Ee) => N(Ee))),
        ee
      );
    }
    function h(C) {
      return r[C];
    }
    function b(C) {
      return i[C].rpcProxyUrl;
    }
    function y(C) {
      return r[C].addressTypes[0];
    }
    function p(C) {
      const ee = r[C];
      if (ee.addressTypes.length === 1) {
        const [Ee] = ee.addressTypes;
        return Ee;
      } else throw `The chain ${ee.id} has multiple address types`;
    }
    function x(C) {
      return r[C].addressTypes;
    }
    function S(C) {
      return r[C].id;
    }
    function _(C) {
      return Ye[be(C)].name;
    }
    function m(C) {
      return r[C].tokenDecimals;
    }
    function I(C) {
      return (E(C) ? r[C] : Ye[C]).tokenSymbol;
    }
    function A(C) {
      return (E(C) ? r[C] : Ye[C]).iconUrl;
    }
    function k(C) {
      return r[C].slip44;
    }
    function P(C) {
      return Ye[be(C)].mainnetID;
    }
    function w(C) {
      let ee;
      if ((we(C) && (ee = i[C].value), typeof ee == 'number')) return ee;
      throw new Error(`Invalid NetworkID: ${C}. Must be an EVM NetworkID.`);
    }
    function E(C) {
      return c.has(C);
    }
    function U(C) {
      return Object.keys(Ye.bitcoin.networks).includes(C);
    }
    function j(C) {
      return Object.keys(Ye.ethereum.networks).includes(C);
    }
    function z(C) {
      return Object.keys(Ye.polygon.networks).includes(C);
    }
    function V(C) {
      return Object.keys(Ye.base.networks).includes(C);
    }
    function J(C) {
      return Object.keys(Ye.arbitrum.networks).includes(C);
    }
    function re(C) {
      return Object.keys(Ye.monad.networks).includes(C);
    }
    function de(C) {
      return Object.keys(Ye.hypercore.networks).includes(C);
    }
    function we(C) {
      return j(C) || z(C) || V(C) || re(C) || J(C) || de(C);
    }
    function Oe(C) {
      return Object.keys(Ye.solana.networks).includes(C);
    }
    function Pe(C) {
      return Object.keys(Ye.sui.networks).includes(C);
    }
    function Ie(C) {
      if (!Oe(C)) throw new Error(`Invalid NetworkID: ${C}. Must be a Solana NetworkID.`);
      return Ye.solana.networks[C].value;
    }
    function $(C) {
      return r[C].localnetID === C;
    }
    function N(C) {
      return r[C].mainnetID === C;
    }
    function G(C) {
      return i[C];
    }
    function D(C, ee = !1) {
      const Ee = i[C];
      return ee && Ee.shortName ? Ee.shortName : Ee.name;
    }
    function R(C) {
      return r[C].parentChain;
    }
    function X(C) {
      return o[C];
    }
    function ke(C, ee) {
      const Ee = r[C].id,
        St = r[ee].id;
      return Oi(Ee, St);
    }
    function be(C) {
      return Iy(C) ? C : E(C) ? ve.getChainID(C) : Vn();
    }
    return {
      ...Ye,
      getAllChainIDs: d,
      isChainDefaultEnabled: l,
      getNetworkIDs: f,
      getAllNetworkIDs: u,
      getChainDefinition: h,
      getAddressType: p,
      getAddressTypes: x,
      getChainID: S,
      getChainName: _,
      getTokenDecimals: m,
      getTokenSymbol: I,
      getChainIconUrl: A,
      getSlip44: k,
      getMainnetNetworkID: P,
      getEVMNetworkIDValue: w,
      getSolanaNetworkIDValue: Ie,
      _DO_NOT_USE_getAddressType: y,
      isNetworkID: E,
      isBitcoinNetworkID: U,
      isEVMNetworkID: we,
      isSolanaNetworkID: Oe,
      isEthereumNetworkID: j,
      isPolygonNetworkID: z,
      isBaseNetworkID: V,
      isArbitrumNetworkID: J,
      isSuiNetworkID: Pe,
      isHypercoreNetworkID: de,
      isLocalNetworkID: $,
      isMainnetNetworkID: N,
      getNetworkDefinition: G,
      getNetworkName: D,
      getChainIDs: X,
      compareChain: Oi,
      compareNetworkID: ke,
      getRpcProxyUrl: b,
      getParentChain: R,
    };
  },
  ve = QT();
a.string().refine(
  (e) => {
    const t = e.split('/');
    if (t.length < 2) return !1;
    const r = t[0],
      s = t[1].split(':');
    if (s.length < 2) return !1;
    const i = s[0],
      o = s[1];
    return (
      typeof e == 'string' &&
      ve.isNetworkID(r) &&
      i.match(/^[-a-z0-9]{2,8}/) &&
      o.match(/^[-a-zA-Z0-9]{1,64}/)
    );
  },
  { message: 'Value is not a valid BRI string.' }
);
const We = {
    Bitcoin: gy,
    Ethereum: $y,
    Polygon: _y,
    Solana: Ay,
    Sui: Aa,
    Base: yy,
    Monad: Ey,
    Arbitrum: by,
    Hypercore: Sy,
  },
  _0 = a.union([w0, S0, E0, my, ti]);
a.union([wy, VT, zT, BT, RT]);
var Ze = ((e) => ((e.address = 'address'), (e.tx = 'tx'), (e.nativeToken = 'nativeToken'), e))(
  Ze || {}
);
const TB = a.string(),
  Ty = a.object({ chainId: _0, resourceType: a.nativeEnum(Ze) }),
  YT = Ty.extend({ resourceType: a.literal('nativeToken'), slip44: a.nativeEnum(wt) }),
  Wn = Ty.extend({ resourceType: a.literal('address'), address: a.string() }),
  ZT = Wn.extend({ chainId: E0, address: Qa }),
  JT = Wn.extend({ chainId: S0, address: fe, tokenId: a.string().optional() }),
  XT = Wn.extend({ chainId: w0, address: vy.or(a.string()) }),
  eP = Wn.extend({ chainId: LT, address: f0, tokenId: a.string().optional() });
Wn.extend({ chainId: ti, address: Bh, tokenId: a.string().optional() });
const PB = a.union([YT, Wn, ZT, JT, XT, eP]),
  CB = (e) => {
    const t = e.split('/');
    if (t.length > 3 || t.length < 2)
      throw new Error(`Cannot decode malformed caip19 string '${e}'`);
    const r = t[0];
    if (
      !(
        ve.isEVMNetworkID(r) ||
        ve.isSolanaNetworkID(r) ||
        ve.isBitcoinNetworkID(r) ||
        ve.isSuiNetworkID(r)
      )
    )
      throw new Error(`Cannot decode unsupported chain '${r}'`);
    const n = t[1].split(/:(.+)/),
      [s, i] = n;
    if (!s || !i) throw new Error(`Invalid resource specification '${t[1]}'`);
    if (!Object.values(Ze).includes(s)) throw new Error(`Unsupported resource type '${s}'`);
    if (s === Ze.nativeToken) {
      if (!Object.values(wt).includes(i)) throw new Error(`Unsupported slip44 '${i}'`);
      return { chainId: r, resourceType: s, slip44: i };
    } else if (ve.isEVMNetworkID(r)) {
      if (s === Ze.address)
        return t.length === 3
          ? { chainId: r, address: i, resourceType: s, tokenId: t[2] }
          : { chainId: r, address: i, resourceType: s };
      throw new Error(`Unsupported resource type ${s} for chain ${r}`);
    } else if (ve.isSolanaNetworkID(r)) {
      if (s === Ze.address) return { chainId: r, address: i, resourceType: s };
      throw new Error(`Unsupported resource type ${s} for chain ${r}`);
    } else if (ve.isBitcoinNetworkID(r)) {
      if (s === Ze.address) return { chainId: r, address: i, resourceType: s };
      throw new Error(`Unsupported resource type ${s} for chain ${r}`);
    } else if (ve.isSuiNetworkID(r)) {
      if (s === Ze.address) return { chainId: r, address: i, resourceType: s };
      throw new Error(`Unsupported resource type ${s} for chain ${r}`);
    }
    throw new Error(`Cannot decode malformed caip19 string '${e}'`);
  },
  kB = (e) => {
    if (e.resourceType === Ze.nativeToken) return `${e.chainId}/${Ze.nativeToken}:${e.slip44}`;
    if (ve.isEVMNetworkID(e.chainId))
      return (
        (e.address = e.address.toLowerCase()),
        'tokenId' in e && typeof e.tokenId == 'string' && e.tokenId
          ? `${e.chainId}/${Ze.address}:${e.address}/${e.tokenId}`
          : `${e.chainId}/${Ze.address}:${e.address}`
      );
    if (ve.isSolanaNetworkID(e.chainId)) return `${e.chainId}/${Ze.address}:${e.address}`;
    if (ve.isBitcoinNetworkID(e.chainId)) {
      const t = e;
      return `${t.chainId}/${Ze.address}:${t.address}`;
    }
    return ve.isSuiNetworkID(e.chainId)
      ? 'tokenId' in e && typeof e.tokenId == 'string' && e.tokenId
        ? `${e.chainId}/${Ze.address}:${e.address}/${e.tokenId}`
        : `${e.chainId}/${Ze.address}:${e.address}`
      : Vn(e.chainId);
  };
function DB(e) {
  return wy.safeParse(e).success;
}
const OB = a.object({ networkID: _0, addressType: a.nativeEnum(Q), address: a.string() });
function BB(e) {
  return [We.Solana.Devnet, We.Solana.Testnet, We.Solana.Mainnet]
    .map((r) => parseInt(r.replace('solana:', '')))
    .includes(parseInt(e, 16))
    ? `solana:${parseInt(e, 16)}`
    : `eip155:${parseInt(e, 16)}`;
}
const LB = a.object({ id: _0, name: a.string(), symbol: a.string(), imageUrl: a.string() }),
  MB = (e, t) => {
    if (ve.isBitcoinNetworkID(e)) {
      switch (!0) {
        case t.startsWith('bc1p') || t.startsWith('bcrt1p') || t.startsWith('tb1p'):
          return Q.BitcoinTaproot;
        case t.startsWith('bc1q') || t.startsWith('tb1q'):
          return Q.BitcoinNativeSegwit;
        case t.startsWith('3') || t.startsWith('2'):
          return Q.BitcoinNestedSegwit;
        case t.startsWith('1') || t.startsWith('m'):
          return Q.BitcoinLegacy;
      }
      throw new Error(`Unable to get address type from invalid Bitcoin address: ${t}`);
    } else
      return ve.isEVMNetworkID(e)
        ? Q.EVM
        : ve.isSolanaNetworkID(e)
          ? Q.Solana
          : ve.isSuiNetworkID(e)
            ? Q.Sui
            : Vn();
  },
  NB = (e) => {
    const t = ve.getNetworkIDs(e),
      r = ve.getMainnetNetworkID(t[0]),
      n = ve[e].slip44;
    return { chainId: r, resourceType: Ze.nativeToken, slip44: n };
  };
ve.getAllNetworkIDs().filter((e) => ve.isEVMNetworkID(e));
function tP(e, t) {
  return t.getSupportedChains().includes(e);
}
function rP(e, t) {
  if (Iy(e)) return t.get(e);
  if (ve.isNetworkID(e)) {
    const r = ve.getChainID(e);
    if (tP(r, t)) return t.get(r);
  }
  throw new Error('Invalid input type for chain config get method');
}
function RB(e) {
  return { get: (t) => rP(t, e), supportedChains: e.getSupportedChains() };
}
class UB {
  constructor(t) {
    F(this, 'chainConfigMap', new Map());
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
const nP = [
    'enable-sol-compressed-tokens',
    'enable-unlimited-fungibles',
    'enable-portfolio-moving-price-charts',
    'enable-merge-collectibles',
    'enable-fungible-detail-custom-header',
    'enable-account-owner-warning',
    'enable-psol-staking',
    'enable-fungible-categories',
  ],
  sP = [
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
  aP = [
    'enable-social-profiles-join-date',
    'enable-profile-sharing',
    'enable-holiday-icon',
    'enable-social-feed-update-trigger',
  ],
  iP = [
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
  oP = [
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
  cP = [
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
    ...oP,
    ...nP,
    ...sP,
    ...aP,
    ...iP,
  ];
var kl = {};
const lP = kl.ENABLED_FLAGS ? kl.ENABLED_FLAGS.split(',') : [];
var ri = function () {
    if (typeof Promise != 'function')
      throw new TypeError('`Promise.allSettled` requires a global `Promise` be available.');
  },
  Bi,
  Dl;
function uP() {
  if (Dl) return Bi;
  Dl = 1;
  var e = Be,
    t = Vc,
    r = e('%Promise.resolve%', !0),
    n = r && t(r);
  return (
    (Bi = function (i, o) {
      if (!n) throw new SyntaxError('This environment does not support Promises.');
      return n(i, o);
    }),
    Bi
  );
}
var Li, Ol;
function fP() {
  return (
    Ol ||
      ((Ol = 1),
      (Li = function (t) {
        if (t === null) return 'Null';
        if (typeof t > 'u') return 'Undefined';
        if (typeof t == 'function' || typeof t == 'object') return 'Object';
        if (typeof t == 'number') return 'Number';
        if (typeof t == 'boolean') return 'Boolean';
        if (typeof t == 'string') return 'String';
      })),
    Li
  );
}
var Mi, Bl;
function ot() {
  if (Bl) return Mi;
  Bl = 1;
  var e = fP();
  return (
    (Mi = function (r) {
      return typeof r == 'symbol' ? 'Symbol' : typeof r == 'bigint' ? 'BigInt' : e(r);
    }),
    Mi
  );
}
var es = { exports: {} },
  Ni,
  Ll;
function dP() {
  if (Ll) return Ni;
  Ll = 1;
  var e = {}.toString;
  return (
    (Ni =
      Array.isArray ||
      function (t) {
        return e.call(t) == '[object Array]';
      }),
    Ni
  );
}
var Ri, Ml;
function Py() {
  if (Ml) return Ri;
  Ml = 1;
  var e = String.prototype.valueOf,
    t = function (o) {
      try {
        return e.call(o), !0;
      } catch {
        return !1;
      }
    },
    r = Object.prototype.toString,
    n = '[object String]',
    s = Gc()();
  return (
    (Ri = function (o) {
      return typeof o == 'string' ? !0 : typeof o != 'object' ? !1 : s ? t(o) : r.call(o) === n;
    }),
    Ri
  );
}
var Ui, Nl;
function hP() {
  if (Nl) return Ui;
  Nl = 1;
  var e = typeof Map == 'function' && Map.prototype ? Map : null,
    t = typeof Set == 'function' && Set.prototype ? Set : null,
    r;
  e ||
    (r = function (o) {
      return !1;
    });
  var n = e ? Map.prototype.has : null,
    s = t ? Set.prototype.has : null;
  return (
    !r &&
      !n &&
      (r = function (o) {
        return !1;
      }),
    (Ui =
      r ||
      function (o) {
        if (!o || typeof o != 'object') return !1;
        try {
          if ((n.call(o), s))
            try {
              s.call(o);
            } catch {
              return !0;
            }
          return o instanceof e;
        } catch {}
        return !1;
      }),
    Ui
  );
}
var Fi, Rl;
function xP() {
  if (Rl) return Fi;
  Rl = 1;
  var e = typeof Map == 'function' && Map.prototype ? Map : null,
    t = typeof Set == 'function' && Set.prototype ? Set : null,
    r;
  t ||
    (r = function (o) {
      return !1;
    });
  var n = e ? Map.prototype.has : null,
    s = t ? Set.prototype.has : null;
  return (
    !r &&
      !s &&
      (r = function (o) {
        return !1;
      }),
    (Fi =
      r ||
      function (o) {
        if (!o || typeof o != 'object') return !1;
        try {
          if ((s.call(o), n))
            try {
              n.call(o);
            } catch {
              return !0;
            }
          return o instanceof t;
        } catch {}
        return !1;
      }),
    Fi
  );
}
var Ul;
function pP() {
  if (Ul) return es.exports;
  Ul = 1;
  var e = $2();
  if (Lf() || A2()) {
    var t = Symbol.iterator;
    es.exports = function (E) {
      if (E != null && typeof E[t] < 'u') return E[t]();
      if (e(E)) return Array.prototype[t].call(E);
    };
  } else {
    var r = dP(),
      n = Py(),
      s = Be,
      i = s('%Map%', !0),
      o = s('%Set%', !0),
      c = jt(),
      d = c('Array.prototype.push'),
      l = c('String.prototype.charCodeAt'),
      f = c('String.prototype.slice'),
      u = function (E, U) {
        var j = E.length;
        if (U + 1 >= j) return U + 1;
        var z = l(E, U);
        if (z < 55296 || z > 56319) return U + 1;
        var V = l(E, U + 1);
        return V < 56320 || V > 57343 ? U + 1 : U + 2;
      },
      h = function (E) {
        var U = 0;
        return {
          next: function () {
            var z = U >= E.length,
              V;
            return z || ((V = E[U]), (U += 1)), { done: z, value: V };
          },
        };
      },
      b = function (E, U) {
        if (r(E) || e(E)) return h(E);
        if (n(E)) {
          var j = 0;
          return {
            next: function () {
              var V = u(E, j),
                J = f(E, j, V);
              return (j = V), { done: V > E.length, value: J };
            },
          };
        }
        if (U && typeof E['_es6-shim iterator_'] < 'u') return E['_es6-shim iterator_']();
      };
    if (!i && !o)
      es.exports = function (E) {
        if (E != null) return b(E, !0);
      };
    else {
      var y = hP(),
        p = xP(),
        x = c('Map.prototype.forEach', !0),
        S = c('Set.prototype.forEach', !0);
      if (typeof mi > 'u' || !mi.versions || !mi.versions.node)
        var _ = c('Map.prototype.iterator', !0),
          m = c('Set.prototype.iterator', !0),
          I = function (w) {
            var E = !1;
            return {
              next: function () {
                try {
                  return { done: E, value: E ? void 0 : w.next() };
                } catch {
                  return (E = !0), { done: !0, value: void 0 };
                }
              },
            };
          };
      var A = c('Map.prototype.@@iterator', !0) || c('Map.prototype._es6-shim iterator_', !0),
        k = c('Set.prototype.@@iterator', !0) || c('Set.prototype._es6-shim iterator_', !0),
        P = function (E) {
          if (y(E)) {
            if (_) return I(_(E));
            if (A) return A(E);
            if (x) {
              var U = [];
              return (
                x(E, function (z, V) {
                  d(U, [V, z]);
                }),
                h(U)
              );
            }
          }
          if (p(E)) {
            if (m) return I(m(E));
            if (k) return k(E);
            if (S) {
              var j = [];
              return (
                S(E, function (z) {
                  d(j, z);
                }),
                h(j)
              );
            }
          }
        };
      es.exports = function (E) {
        return P(E) || b(E);
      };
    }
  }
  return es.exports;
}
var ji, Fl;
function bP() {
  if (Fl) return ji;
  Fl = 1;
  var e = TypeError;
  return (
    (ji = function (r) {
      if (!r || typeof r.next != 'function')
        throw new e('iterator must be an object with a `next` method');
      if (arguments.length > 1) {
        var n = arguments[1];
        if (typeof n != 'function') throw new e('`callback`, if provided, must be a function');
      }
      for (var s = n || [], i; (i = r.next()) && !i.done; ) n ? n(i.value) : s.push(i.value);
      if (!n) return s;
    }),
    ji
  );
}
var Hi, jl;
function yP() {
  if (jl) return Hi;
  jl = 1;
  var e = pP(),
    t = TypeError,
    r = bP();
  return (
    (Hi = function (s) {
      var i = e(s);
      if (!i) throw new t('non-iterable value provided');
      return arguments.length > 1 ? r(i, arguments[1]) : r(i);
    }),
    Hi
  );
}
var qi, Hl;
function mP() {
  if (Hl) return qi;
  Hl = 1;
  var e = Be,
    t = e('%TypeError%');
  return (
    (qi = function (n, s) {
      if (n == null) throw new t(s || 'Cannot call method on ' + n);
      return n;
    }),
    qi
  );
}
var Vi, ql;
function Cy() {
  return ql || ((ql = 1), (Vi = mP())), Vi;
}
var Gi, Vl;
function gP() {
  if (Vl) return Gi;
  Vl = 1;
  var e = Be,
    t = e('%Math.abs%');
  return (
    (Gi = function (n) {
      return t(n);
    }),
    Gi
  );
}
var zi, Gl;
function vP() {
  if (Gl) return zi;
  Gl = 1;
  var e = ot(),
    t = Math.floor;
  return (
    (zi = function (n) {
      return e(n) === 'BigInt' ? n : t(n);
    }),
    zi
  );
}
var Ki, zl;
function ky() {
  return (
    zl ||
      ((zl = 1),
      (Ki =
        Number.isNaN ||
        function (t) {
          return t !== t;
        })),
    Ki
  );
}
var Wi, Kl;
function wP() {
  if (Kl) return Wi;
  Kl = 1;
  var e =
    Number.isNaN ||
    function (t) {
      return t !== t;
    };
  return (
    (Wi =
      Number.isFinite ||
      function (t) {
        return typeof t == 'number' && !e(t) && t !== 1 / 0 && t !== -1 / 0;
      }),
    Wi
  );
}
var Qi, Wl;
function Dy() {
  if (Wl) return Qi;
  Wl = 1;
  var e = gP(),
    t = vP(),
    r = ot(),
    n = ky(),
    s = wP();
  return (
    (Qi = function (o) {
      if (r(o) !== 'Number' || n(o) || !s(o)) return !1;
      var c = e(o);
      return t(c) === c;
    }),
    Qi
  );
}
var Yi, Ql;
function SP() {
  if (Ql) return Yi;
  Ql = 1;
  var e = Be,
    t = e('%Array.prototype%'),
    r = e('%RangeError%'),
    n = e('%SyntaxError%'),
    s = e('%TypeError%'),
    i = Dy(),
    o = Math.pow(2, 32) - 1,
    c =
      e('%Object.setPrototypeOf%', !0) ||
      ([].__proto__ !== t
        ? null
        : function (d, l) {
            return (d.__proto__ = l), d;
          });
  return (
    (Yi = function (l) {
      if (!i(l) || l < 0) throw new s('Assertion failed: `length` must be an integer Number >= 0');
      if (l > o) throw new r('length is greater than (2**32 - 1)');
      var f = arguments.length > 1 ? arguments[1] : t,
        u = [];
      if (f !== t) {
        if (!c)
          throw new n(
            'ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]'
          );
        c(u, f);
      }
      return l !== 0 && (u.length = l), u;
    }),
    Yi
  );
}
var Zi, Yl;
function EP() {
  if (Yl) return Zi;
  Yl = 1;
  var e = typeof Map == 'function' && Map.prototype,
    t =
      Object.getOwnPropertyDescriptor && e
        ? Object.getOwnPropertyDescriptor(Map.prototype, 'size')
        : null,
    r = e && t && typeof t.get == 'function' ? t.get : null,
    n = e && Map.prototype.forEach,
    s = typeof Set == 'function' && Set.prototype,
    i =
      Object.getOwnPropertyDescriptor && s
        ? Object.getOwnPropertyDescriptor(Set.prototype, 'size')
        : null,
    o = s && i && typeof i.get == 'function' ? i.get : null,
    c = s && Set.prototype.forEach,
    d = typeof WeakMap == 'function' && WeakMap.prototype,
    l = d ? WeakMap.prototype.has : null,
    f = typeof WeakSet == 'function' && WeakSet.prototype,
    u = f ? WeakSet.prototype.has : null,
    h = typeof WeakRef == 'function' && WeakRef.prototype,
    b = h ? WeakRef.prototype.deref : null,
    y = Boolean.prototype.valueOf,
    p = Object.prototype.toString,
    x = Function.prototype.toString,
    S = String.prototype.match,
    _ = String.prototype.slice,
    m = String.prototype.replace,
    I = String.prototype.toUpperCase,
    A = String.prototype.toLowerCase,
    k = RegExp.prototype.test,
    P = Array.prototype.concat,
    w = Array.prototype.join,
    E = Array.prototype.slice,
    U = Math.floor,
    j = typeof BigInt == 'function' ? BigInt.prototype.valueOf : null,
    z = Object.getOwnPropertySymbols,
    V =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? Symbol.prototype.toString
        : null,
    J = typeof Symbol == 'function' && typeof Symbol.iterator == 'object',
    re =
      typeof Symbol == 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === J || !0)
        ? Symbol.toStringTag
        : null,
    de = Object.prototype.propertyIsEnumerable,
    we =
      (typeof Reflect == 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) ||
      ([].__proto__ === Array.prototype
        ? function (T) {
            return T.__proto__;
          }
        : null);
  function Oe(T, O) {
    if (T === 1 / 0 || T === -1 / 0 || T !== T || (T && T > -1e3 && T < 1e3) || k.call(/e/, O))
      return O;
    var Ae = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof T == 'number') {
      var De = T < 0 ? -U(-T) : U(T);
      if (De !== T) {
        var qe = String(De),
          pe = _.call(O, qe.length + 1);
        return m.call(qe, Ae, '$&_') + '.' + m.call(m.call(pe, /([0-9]{3})/g, '$&_'), /_$/, '');
      }
    }
    return m.call(O, Ae, '$&_');
  }
  var Pe = Q2,
    Ie = Pe.custom,
    $ = Ee(Ie) ? Ie : null;
  Zi = function T(O, Ae, De, qe) {
    var pe = Ae || {};
    if (ct(pe, 'quoteStyle') && pe.quoteStyle !== 'single' && pe.quoteStyle !== 'double')
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (
      ct(pe, 'maxStringLength') &&
      (typeof pe.maxStringLength == 'number'
        ? pe.maxStringLength < 0 && pe.maxStringLength !== 1 / 0
        : pe.maxStringLength !== null)
    )
      throw new TypeError(
        'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
      );
    var nr = ct(pe, 'customInspect') ? pe.customInspect : !0;
    if (typeof nr != 'boolean' && nr !== 'symbol')
      throw new TypeError(
        'option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`'
      );
    if (
      ct(pe, 'indent') &&
      pe.indent !== null &&
      pe.indent !== '	' &&
      !(parseInt(pe.indent, 10) === pe.indent && pe.indent > 0)
    )
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (ct(pe, 'numericSeparator') && typeof pe.numericSeparator != 'boolean')
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var Rr = pe.numericSeparator;
    if (typeof O > 'u') return 'undefined';
    if (O === null) return 'null';
    if (typeof O == 'boolean') return O ? 'true' : 'false';
    if (typeof O == 'string') return V0(O, pe);
    if (typeof O == 'number') {
      if (O === 0) return 1 / 0 / O > 0 ? '0' : '-0';
      var lt = String(O);
      return Rr ? Oe(O, lt) : lt;
    }
    if (typeof O == 'bigint') {
      var sr = String(O) + 'n';
      return Rr ? Oe(O, sr) : sr;
    }
    var ui = typeof pe.depth > 'u' ? 5 : pe.depth;
    if ((typeof De > 'u' && (De = 0), De >= ui && ui > 0 && typeof O == 'object'))
      return D(O) ? '[Array]' : '[Object]';
    var an = x2(pe, De);
    if (typeof qe > 'u') qe = [];
    else if (q0(qe, O) >= 0) return '[Circular]';
    function Et(on, Ns, b2) {
      if ((Ns && ((qe = E.call(qe)), qe.push(Ns)), b2)) {
        var X0 = { depth: pe.depth };
        return ct(pe, 'quoteStyle') && (X0.quoteStyle = pe.quoteStyle), T(on, X0, De + 1, qe);
      }
      return T(on, pe, De + 1, qe);
    }
    if (typeof O == 'function' && !X(O)) {
      var z0 = a2(O),
        K0 = Ls(O, Et);
      return (
        '[Function' +
        (z0 ? ': ' + z0 : ' (anonymous)') +
        ']' +
        (K0.length > 0 ? ' { ' + w.call(K0, ', ') + ' }' : '')
      );
    }
    if (Ee(O)) {
      var W0 = J ? m.call(String(O), /^(Symbol\(.*\))_[^)]*$/, '$1') : V.call(O);
      return typeof O == 'object' && !J ? Yn(W0) : W0;
    }
    if (f2(O)) {
      for (
        var Zn = '<' + A.call(String(O.nodeName)), fi = O.attributes || [], Ms = 0;
        Ms < fi.length;
        Ms++
      )
        Zn += ' ' + fi[Ms].name + '=' + N(G(fi[Ms].value), 'double', pe);
      return (
        (Zn += '>'),
        O.childNodes && O.childNodes.length && (Zn += '...'),
        (Zn += '</' + A.call(String(O.nodeName)) + '>'),
        Zn
      );
    }
    if (D(O)) {
      if (O.length === 0) return '[]';
      var di = Ls(O, Et);
      return an && !h2(di) ? '[' + li(di, an) + ']' : '[ ' + w.call(di, ', ') + ' ]';
    }
    if (ke(O)) {
      var hi = Ls(O, Et);
      return !('cause' in Error.prototype) && 'cause' in O && !de.call(O, 'cause')
        ? '{ [' + String(O) + '] ' + w.call(P.call('[cause]: ' + Et(O.cause), hi), ', ') + ' }'
        : hi.length === 0
          ? '[' + String(O) + ']'
          : '{ [' + String(O) + '] ' + w.call(hi, ', ') + ' }';
    }
    if (typeof O == 'object' && nr) {
      if ($ && typeof O[$] == 'function' && Pe) return Pe(O, { depth: ui - De });
      if (nr !== 'symbol' && typeof O.inspect == 'function') return O.inspect();
    }
    if (i2(O)) {
      var Q0 = [];
      return (
        n &&
          n.call(O, function (on, Ns) {
            Q0.push(Et(Ns, O, !0) + ' => ' + Et(on, O));
          }),
        G0('Map', r.call(O), Q0, an)
      );
    }
    if (l2(O)) {
      var Y0 = [];
      return (
        c &&
          c.call(O, function (on) {
            Y0.push(Et(on, O));
          }),
        G0('Set', o.call(O), Y0, an)
      );
    }
    if (o2(O)) return ci('WeakMap');
    if (u2(O)) return ci('WeakSet');
    if (c2(O)) return ci('WeakRef');
    if (C(O)) return Yn(Et(Number(O)));
    if (St(O)) return Yn(Et(j.call(O)));
    if (ee(O)) return Yn(y.call(O));
    if (be(O)) return Yn(Et(String(O)));
    if (!R(O) && !X(O)) {
      var xi = Ls(O, Et),
        Z0 = we ? we(O) === Object.prototype : O instanceof Object || O.constructor === Object,
        pi = O instanceof Object ? '' : 'null prototype',
        J0 = !Z0 && re && Object(O) === O && re in O ? _.call(rr(O), 8, -1) : pi ? 'Object' : '',
        p2 =
          Z0 || typeof O.constructor != 'function'
            ? ''
            : O.constructor.name
              ? O.constructor.name + ' '
              : '',
        bi = p2 + (J0 || pi ? '[' + w.call(P.call([], J0 || [], pi || []), ': ') + '] ' : '');
      return xi.length === 0
        ? bi + '{}'
        : an
          ? bi + '{' + li(xi, an) + '}'
          : bi + '{ ' + w.call(xi, ', ') + ' }';
    }
    return String(O);
  };
  function N(T, O, Ae) {
    var De = (Ae.quoteStyle || O) === 'double' ? '"' : "'";
    return De + T + De;
  }
  function G(T) {
    return m.call(String(T), /"/g, '&quot;');
  }
  function D(T) {
    return rr(T) === '[object Array]' && (!re || !(typeof T == 'object' && re in T));
  }
  function R(T) {
    return rr(T) === '[object Date]' && (!re || !(typeof T == 'object' && re in T));
  }
  function X(T) {
    return rr(T) === '[object RegExp]' && (!re || !(typeof T == 'object' && re in T));
  }
  function ke(T) {
    return rr(T) === '[object Error]' && (!re || !(typeof T == 'object' && re in T));
  }
  function be(T) {
    return rr(T) === '[object String]' && (!re || !(typeof T == 'object' && re in T));
  }
  function C(T) {
    return rr(T) === '[object Number]' && (!re || !(typeof T == 'object' && re in T));
  }
  function ee(T) {
    return rr(T) === '[object Boolean]' && (!re || !(typeof T == 'object' && re in T));
  }
  function Ee(T) {
    if (J) return T && typeof T == 'object' && T instanceof Symbol;
    if (typeof T == 'symbol') return !0;
    if (!T || typeof T != 'object' || !V) return !1;
    try {
      return V.call(T), !0;
    } catch {}
    return !1;
  }
  function St(T) {
    if (!T || typeof T != 'object' || !j) return !1;
    try {
      return j.call(T), !0;
    } catch {}
    return !1;
  }
  var xt =
    Object.prototype.hasOwnProperty ||
    function (T) {
      return T in this;
    };
  function ct(T, O) {
    return xt.call(T, O);
  }
  function rr(T) {
    return p.call(T);
  }
  function a2(T) {
    if (T.name) return T.name;
    var O = S.call(x.call(T), /^function\s*([\w$]+)/);
    return O ? O[1] : null;
  }
  function q0(T, O) {
    if (T.indexOf) return T.indexOf(O);
    for (var Ae = 0, De = T.length; Ae < De; Ae++) if (T[Ae] === O) return Ae;
    return -1;
  }
  function i2(T) {
    if (!r || !T || typeof T != 'object') return !1;
    try {
      r.call(T);
      try {
        o.call(T);
      } catch {
        return !0;
      }
      return T instanceof Map;
    } catch {}
    return !1;
  }
  function o2(T) {
    if (!l || !T || typeof T != 'object') return !1;
    try {
      l.call(T, l);
      try {
        u.call(T, u);
      } catch {
        return !0;
      }
      return T instanceof WeakMap;
    } catch {}
    return !1;
  }
  function c2(T) {
    if (!b || !T || typeof T != 'object') return !1;
    try {
      return b.call(T), !0;
    } catch {}
    return !1;
  }
  function l2(T) {
    if (!o || !T || typeof T != 'object') return !1;
    try {
      o.call(T);
      try {
        r.call(T);
      } catch {
        return !0;
      }
      return T instanceof Set;
    } catch {}
    return !1;
  }
  function u2(T) {
    if (!u || !T || typeof T != 'object') return !1;
    try {
      u.call(T, u);
      try {
        l.call(T, l);
      } catch {
        return !0;
      }
      return T instanceof WeakSet;
    } catch {}
    return !1;
  }
  function f2(T) {
    return !T || typeof T != 'object'
      ? !1
      : typeof HTMLElement < 'u' && T instanceof HTMLElement
        ? !0
        : typeof T.nodeName == 'string' && typeof T.getAttribute == 'function';
  }
  function V0(T, O) {
    if (T.length > O.maxStringLength) {
      var Ae = T.length - O.maxStringLength,
        De = '... ' + Ae + ' more character' + (Ae > 1 ? 's' : '');
      return V0(_.call(T, 0, O.maxStringLength), O) + De;
    }
    var qe = m.call(m.call(T, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, d2);
    return N(qe, 'single', O);
  }
  function d2(T) {
    var O = T.charCodeAt(0),
      Ae = { 8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r' }[O];
    return Ae ? '\\' + Ae : '\\x' + (O < 16 ? '0' : '') + I.call(O.toString(16));
  }
  function Yn(T) {
    return 'Object(' + T + ')';
  }
  function ci(T) {
    return T + ' { ? }';
  }
  function G0(T, O, Ae, De) {
    var qe = De ? li(Ae, De) : w.call(Ae, ', ');
    return T + ' (' + O + ') {' + qe + '}';
  }
  function h2(T) {
    for (var O = 0; O < T.length; O++)
      if (
        q0(
          T[O],
          `
`
        ) >= 0
      )
        return !1;
    return !0;
  }
  function x2(T, O) {
    var Ae;
    if (T.indent === '	') Ae = '	';
    else if (typeof T.indent == 'number' && T.indent > 0) Ae = w.call(Array(T.indent + 1), ' ');
    else return null;
    return { base: Ae, prev: w.call(Array(O + 1), Ae) };
  }
  function li(T, O) {
    if (T.length === 0) return '';
    var Ae =
      `
` +
      O.prev +
      O.base;
    return (
      Ae +
      w.call(T, ',' + Ae) +
      `
` +
      O.prev
    );
  }
  function Ls(T, O) {
    var Ae = D(T),
      De = [];
    if (Ae) {
      De.length = T.length;
      for (var qe = 0; qe < T.length; qe++) De[qe] = ct(T, qe) ? O(T[qe], T) : '';
    }
    var pe = typeof z == 'function' ? z(T) : [],
      nr;
    if (J) {
      nr = {};
      for (var Rr = 0; Rr < pe.length; Rr++) nr['$' + pe[Rr]] = pe[Rr];
    }
    for (var lt in T)
      ct(T, lt) &&
        ((Ae && String(Number(lt)) === lt && lt < T.length) ||
          (J && nr['$' + lt] instanceof Symbol) ||
          (k.call(/[^\w$]/, lt)
            ? De.push(O(lt, T) + ': ' + O(T[lt], T))
            : De.push(lt + ': ' + O(T[lt], T))));
    if (typeof z == 'function')
      for (var sr = 0; sr < pe.length; sr++)
        de.call(T, pe[sr]) && De.push('[' + O(pe[sr]) + ']: ' + O(T[pe[sr]], T));
    return De;
  }
  return Zi;
}
var Ji, Zl;
function Qn() {
  return (
    Zl ||
      ((Zl = 1),
      (Ji = function (t) {
        return typeof t == 'string' || typeof t == 'symbol';
      })),
    Ji
  );
}
var Xi, Jl;
function Oy() {
  if (Jl) return Xi;
  Jl = 1;
  var e = Be,
    t = e('%TypeError%'),
    r = EP(),
    n = Qn(),
    s = ot();
  return (
    (Xi = function (o, c) {
      if (s(o) !== 'Object') throw new t('Assertion failed: Type(O) is not Object');
      if (!n(c)) throw new t('Assertion failed: IsPropertyKey(P) is not true, got ' + r(c));
      return o[c];
    }),
    Xi
  );
}
var eo, Xl;
function By() {
  if (Xl) return eo;
  Xl = 1;
  var e = Be,
    t = e('%Array%'),
    r = !t.isArray && jt()('Object.prototype.toString');
  return (
    (eo =
      t.isArray ||
      function (s) {
        return r(s) === '[object Array]';
      }),
    eo
  );
}
var to, eu;
function $0() {
  return eu || ((eu = 1), (to = By())), to;
}
var Qs = { exports: {} },
  ro,
  tu;
function _P() {
  return tu || ((tu = 1), (ro = Be)), ro;
}
var no, ru;
function $P() {
  if (ru) return no;
  ru = 1;
  var e = Be,
    t = nn,
    r = e('%TypeError%');
  return (
    (no = function (s, i) {
      if (s.Type(i) !== 'Object') return !1;
      var o = {
        '[[Configurable]]': !0,
        '[[Enumerable]]': !0,
        '[[Get]]': !0,
        '[[Set]]': !0,
        '[[Value]]': !0,
        '[[Writable]]': !0,
      };
      for (var c in i) if (t(i, c) && !o[c]) return !1;
      if (s.IsDataDescriptor(i) && s.IsAccessorDescriptor(i))
        throw new r('Property Descriptors may not be both accessor and data descriptors');
      return !0;
    }),
    no
  );
}
var so, nu;
function Ly() {
  if (nu) return so;
  nu = 1;
  var e = I2,
    t = Be,
    r = e() && t('%Object.defineProperty%', !0),
    n = e.hasArrayLengthDefineBug(),
    s = n && By(),
    i = jt(),
    o = i('Object.prototype.propertyIsEnumerable');
  return (
    (so = function (d, l, f, u, h, b) {
      if (!r) {
        if (
          !d(b) ||
          !b['[[Configurable]]'] ||
          !b['[[Writable]]'] ||
          (h in u && o(u, h) !== !!b['[[Enumerable]]'])
        )
          return !1;
        var y = b['[[Value]]'];
        return (u[h] = y), l(u[h], y);
      }
      return n && h === 'length' && '[[Value]]' in b && s(u) && u.length !== b['[[Value]]']
        ? ((u.length = b['[[Value]]']), u.length === b['[[Value]]'])
        : (r(u, h, f(b)), !0);
    }),
    so
  );
}
var ao, su;
function AP() {
  if (su) return ao;
  su = 1;
  var e = nn;
  return (
    (ao = function (r) {
      return (
        e(r, '[[StartIndex]]') &&
        e(r, '[[EndIndex]]') &&
        r['[[StartIndex]]'] >= 0 &&
        r['[[EndIndex]]'] >= r['[[StartIndex]]'] &&
        String(parseInt(r['[[StartIndex]]'], 10)) === String(r['[[StartIndex]]']) &&
        String(parseInt(r['[[EndIndex]]'], 10)) === String(r['[[EndIndex]]'])
      );
    }),
    ao
  );
}
var io, au;
function A0() {
  if (au) return io;
  au = 1;
  var e = Be,
    t = e('%TypeError%'),
    r = e('%SyntaxError%'),
    n = nn,
    s = AP(),
    i = {
      'Property Descriptor': function (c) {
        var d = {
          '[[Configurable]]': !0,
          '[[Enumerable]]': !0,
          '[[Get]]': !0,
          '[[Set]]': !0,
          '[[Value]]': !0,
          '[[Writable]]': !0,
        };
        for (var l in c) if (n(c, l) && !d[l]) return !1;
        var f = n(c, '[[Value]]'),
          u = n(c, '[[Get]]') || n(c, '[[Set]]');
        if (f && u)
          throw new t('Property Descriptors may not be both accessor and data descriptors');
        return !0;
      },
      'Match Record': s,
    };
  return (
    (io = function (c, d, l, f) {
      var u = i[d];
      if (typeof u != 'function') throw new r('unknown record type: ' + d);
      if (c(f) !== 'Object' || !u(f)) throw new t(l + ' must be a ' + d);
    }),
    io
  );
}
var oo, iu;
function IP() {
  return (
    iu ||
      ((iu = 1),
      (oo = function (t) {
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
    oo
  );
}
var co, ou;
function My() {
  if (ou) return co;
  ou = 1;
  var e = A0(),
    t = IP(),
    r = ot();
  return (
    (co = function (s) {
      return typeof s < 'u' && e(r, 'Property Descriptor', 'Desc', s), t(s);
    }),
    co
  );
}
var lo, cu;
function TP() {
  if (cu) return lo;
  cu = 1;
  var e = nn,
    t = A0(),
    r = ot();
  return (
    (lo = function (s) {
      return !(
        typeof s > 'u' ||
        (t(r, 'Property Descriptor', 'Desc', s), !e(s, '[[Get]]') && !e(s, '[[Set]]'))
      );
    }),
    lo
  );
}
var uo, lu;
function Ny() {
  if (lu) return uo;
  lu = 1;
  var e = nn,
    t = A0(),
    r = ot();
  return (
    (uo = function (s) {
      return !(
        typeof s > 'u' ||
        (t(r, 'Property Descriptor', 'Desc', s), !e(s, '[[Value]]') && !e(s, '[[Writable]]'))
      );
    }),
    uo
  );
}
var fo, uu;
function Ry() {
  if (uu) return fo;
  uu = 1;
  var e = ky();
  return (
    (fo = function (r, n) {
      return r === n ? (r === 0 ? 1 / r === 1 / n : !0) : e(r) && e(n);
    }),
    fo
  );
}
var ho, fu;
function Uy() {
  return (
    fu ||
      ((fu = 1),
      (ho = function (t) {
        return !!t;
      })),
    ho
  );
}
var xo, du;
function Fy() {
  return du || ((du = 1), (xo = Mf())), xo;
}
var po, hu;
function jy() {
  if (hu) return po;
  hu = 1;
  var e = nn,
    t = Be,
    r = t('%TypeError%'),
    n = ot(),
    s = Uy(),
    i = Fy();
  return (
    (po = function (c) {
      if (n(c) !== 'Object') throw new r('ToPropertyDescriptor requires an object');
      var d = {};
      if (
        (e(c, 'enumerable') && (d['[[Enumerable]]'] = s(c.enumerable)),
        e(c, 'configurable') && (d['[[Configurable]]'] = s(c.configurable)),
        e(c, 'value') && (d['[[Value]]'] = c.value),
        e(c, 'writable') && (d['[[Writable]]'] = s(c.writable)),
        e(c, 'get'))
      ) {
        var l = c.get;
        if (typeof l < 'u' && !i(l)) throw new r('getter must be a function');
        d['[[Get]]'] = l;
      }
      if (e(c, 'set')) {
        var f = c.set;
        if (typeof f < 'u' && !i(f)) throw new r('setter must be a function');
        d['[[Set]]'] = f;
      }
      if ((e(d, '[[Get]]') || e(d, '[[Set]]')) && (e(d, '[[Value]]') || e(d, '[[Writable]]')))
        throw new r(
          'Invalid property descriptor. Cannot both specify accessors and a value or writable attribute'
        );
      return d;
    }),
    po
  );
}
var bo, xu;
function PP() {
  if (xu) return bo;
  xu = 1;
  var e = Be,
    t = e('%TypeError%'),
    r = $P(),
    n = Ly(),
    s = My(),
    i = TP(),
    o = Ny(),
    c = Qn(),
    d = Ry(),
    l = jy(),
    f = ot();
  return (
    (bo = function (h, b, y) {
      if (f(h) !== 'Object') throw new t('Assertion failed: Type(O) is not Object');
      if (!c(b)) throw new t('Assertion failed: IsPropertyKey(P) is not true');
      var p = r({ Type: f, IsDataDescriptor: o, IsAccessorDescriptor: i }, y) ? y : l(y);
      if (!r({ Type: f, IsDataDescriptor: o, IsAccessorDescriptor: i }, p))
        throw new t('Assertion failed: Desc is not a valid Property Descriptor');
      return n(o, d, s, h, b, p);
    }),
    bo
  );
}
var pu;
function CP() {
  if (pu) return Qs.exports;
  pu = 1;
  var e = _P(),
    t = e('%Reflect.construct%', !0),
    r = PP();
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
      (Qs.exports = function (o) {
        try {
          t(o, s);
        } catch (c) {
          return c === n;
        }
      });
  } else
    Qs.exports = function (o) {
      return typeof o == 'function' && !!o.prototype;
    };
  return Qs.exports;
}
var yo, bu;
function kP() {
  if (bu) return yo;
  bu = 1;
  var e = Be,
    t = e('%Symbol.species%', !0),
    r = e('%TypeError%'),
    n = SP(),
    s = Oy(),
    i = $0(),
    o = CP(),
    c = Dy(),
    d = ot();
  return (
    (yo = function (f, u) {
      if (!c(u) || u < 0) throw new r('Assertion failed: length must be an integer >= 0');
      var h = i(f);
      if (!h) return n(u);
      var b = s(f, 'constructor');
      if ((t && d(b) === 'Object' && ((b = s(b, t)), b === null && (b = void 0)), typeof b > 'u'))
        return n(u);
      if (!o(b)) throw new r('C must be a constructor');
      return new b(u);
    }),
    yo
  );
}
var mo, yu;
function DP() {
  if (yu) return mo;
  yu = 1;
  var e = Be,
    t = jt(),
    r = e('%TypeError%'),
    n = $0(),
    s = e('%Reflect.apply%', !0) || t('%Function.prototype.apply%');
  return (
    (mo = function (o, c) {
      var d = arguments.length > 2 ? arguments[2] : [];
      if (!n(d))
        throw new r('Assertion failed: optional `argumentsList`, if provided, must be a List');
      return s(o, c, d);
    }),
    mo
  );
}
var go, mu;
function Hy() {
  if (mu) return go;
  mu = 1;
  var e = jt(),
    t = Gc()(),
    r,
    n,
    s,
    i;
  if (t) {
    (r = e('Object.prototype.hasOwnProperty')), (n = e('RegExp.prototype.exec')), (s = {});
    var o = function () {
      throw s;
    };
    (i = { toString: o, valueOf: o }),
      typeof Symbol.toPrimitive == 'symbol' && (i[Symbol.toPrimitive] = o);
  }
  var c = e('Object.prototype.toString'),
    d = Object.getOwnPropertyDescriptor,
    l = '[object RegExp]';
  return (
    (go = t
      ? function (u) {
          if (!u || typeof u != 'object') return !1;
          var h = d(u, 'lastIndex'),
            b = h && r(h, 'value');
          if (!b) return !1;
          try {
            n(u, i);
          } catch (y) {
            return y === s;
          }
        }
      : function (u) {
          return !u || (typeof u != 'object' && typeof u != 'function') ? !1 : c(u) === l;
        }),
    go
  );
}
var vo, gu;
function OP() {
  if (gu) return vo;
  gu = 1;
  var e = Be,
    t = e('%Symbol.match%', !0),
    r = Hy(),
    n = Uy();
  return (
    (vo = function (i) {
      if (!i || typeof i != 'object') return !1;
      if (t) {
        var o = i[t];
        if (typeof o < 'u') return n(o);
      }
      return r(i);
    }),
    vo
  );
}
var wo, vu;
function BP() {
  if (vu) return wo;
  vu = 1;
  var e = Be,
    t = T2(),
    r = e('%TypeError%'),
    n = jt(),
    s = n('Object.prototype.propertyIsEnumerable'),
    i = nn,
    o = $0(),
    c = Qn(),
    d = OP(),
    l = jy(),
    f = ot();
  return (
    (wo = function (h, b) {
      if (f(h) !== 'Object') throw new r('Assertion failed: O must be an Object');
      if (!c(b)) throw new r('Assertion failed: P must be a Property Key');
      if (i(h, b)) {
        if (!t) {
          var y = o(h) && b === 'length',
            p = d(h) && b === 'lastIndex';
          return {
            '[[Configurable]]': !(y || p),
            '[[Enumerable]]': s(h, b),
            '[[Value]]': h[b],
            '[[Writable]]': !0,
          };
        }
        return l(t(h, b));
      }
    }),
    wo
  );
}
var So, wu;
function qy() {
  return (
    wu ||
      ((wu = 1),
      (So = function (t) {
        return t === null || (typeof t != 'function' && typeof t != 'object');
      })),
    So
  );
}
var Eo, Su;
function LP() {
  if (Su) return Eo;
  Su = 1;
  var e = Be,
    t = e('%Object.preventExtensions%', !0),
    r = e('%Object.isExtensible%', !0),
    n = qy();
  return (
    (Eo = t
      ? function (i) {
          return !n(i) && r(i);
        }
      : function (i) {
          return !n(i);
        }),
    Eo
  );
}
var _o, Eu;
function MP() {
  if (Eu) return _o;
  Eu = 1;
  var e = Be,
    t = e('%TypeError%'),
    r = Ly(),
    n = My(),
    s = BP(),
    i = Ny(),
    o = LP(),
    c = Qn(),
    d = Ry(),
    l = ot();
  return (
    (_o = function (u, h, b) {
      if (l(u) !== 'Object') throw new t('Assertion failed: Type(O) is not Object');
      if (!c(h)) throw new t('Assertion failed: IsPropertyKey(P) is not true');
      var y = s(u, h),
        p = !y || o(u),
        x = y && !y['[[Configurable]]'];
      return x || !p
        ? !1
        : r(i, d, n, u, h, {
            '[[Configurable]]': !0,
            '[[Enumerable]]': !0,
            '[[Value]]': b,
            '[[Writable]]': !0,
          });
    }),
    _o
  );
}
var $o, _u;
function NP() {
  if (_u) return $o;
  _u = 1;
  var e = Be,
    t = e('%TypeError%'),
    r = MP(),
    n = Qn(),
    s = ot();
  return (
    ($o = function (o, c, d) {
      if (s(o) !== 'Object') throw new t('Assertion failed: Type(O) is not Object');
      if (!n(c)) throw new t('Assertion failed: IsPropertyKey(P) is not true');
      var l = r(o, c, d);
      if (!l) throw new t('unable to create data property');
      return l;
    }),
    $o
  );
}
var Ao, $u;
function RP() {
  if ($u) return Ao;
  $u = 1;
  var e = Be,
    t = e('%TypeError%'),
    r = Qn(),
    n = ot();
  return (
    (Ao = function (i, o) {
      if (n(i) !== 'Object') throw new t('Assertion failed: `O` must be an Object');
      if (!r(o)) throw new t('Assertion failed: `P` must be a Property Key');
      return o in i;
    }),
    Ao
  );
}
var Io, Au;
function UP() {
  if (Au) return Io;
  Au = 1;
  var e = jt(),
    t = Be,
    r = Hy(),
    n = e('RegExp.prototype.exec'),
    s = t('%TypeError%');
  return (
    (Io = function (o) {
      if (!r(o)) throw new s('`regex` must be a RegExp');
      return function (d) {
        return n(o, d) !== null;
      };
    }),
    Io
  );
}
var To, Iu;
function FP() {
  return (
    Iu ||
      ((Iu = 1),
      (To = function (t) {
        return t === null || (typeof t != 'function' && typeof t != 'object');
      })),
    To
  );
}
var Po, Tu;
function jP() {
  if (Tu) return Po;
  Tu = 1;
  var e = Date.prototype.getDay,
    t = function (o) {
      try {
        return e.call(o), !0;
      } catch {
        return !1;
      }
    },
    r = Object.prototype.toString,
    n = '[object Date]',
    s = Gc()();
  return (
    (Po = function (o) {
      return typeof o != 'object' || o === null ? !1 : s ? t(o) : r.call(o) === n;
    }),
    Po
  );
}
var Ys = { exports: {} },
  Pu;
function HP() {
  if (Pu) return Ys.exports;
  Pu = 1;
  var e = Object.prototype.toString,
    t = Lf();
  if (t) {
    var r = Symbol.prototype.toString,
      n = /^Symbol\(.*\)$/,
      s = function (o) {
        return typeof o.valueOf() != 'symbol' ? !1 : n.test(r.call(o));
      };
    Ys.exports = function (o) {
      if (typeof o == 'symbol') return !0;
      if (e.call(o) !== '[object Symbol]') return !1;
      try {
        return s(o);
      } catch {
        return !1;
      }
    };
  } else
    Ys.exports = function (o) {
      return !1;
    };
  return Ys.exports;
}
var Co, Cu;
function qP() {
  if (Cu) return Co;
  Cu = 1;
  var e = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol',
    t = FP(),
    r = Mf(),
    n = jP(),
    s = HP(),
    i = function (d, l) {
      if (typeof d > 'u' || d === null) throw new TypeError('Cannot call method on ' + d);
      if (typeof l != 'string' || (l !== 'number' && l !== 'string'))
        throw new TypeError('hint must be "string" or "number"');
      var f = l === 'string' ? ['toString', 'valueOf'] : ['valueOf', 'toString'],
        u,
        h,
        b;
      for (b = 0; b < f.length; ++b) if (((u = d[f[b]]), r(u) && ((h = u.call(d)), t(h)))) return h;
      throw new TypeError('No default value');
    },
    o = function (d, l) {
      var f = d[l];
      if (f !== null && typeof f < 'u') {
        if (!r(f))
          throw new TypeError(
            f + ' returned for property ' + l + ' of object ' + d + ' is not a function'
          );
        return f;
      }
    };
  return (
    (Co = function (d) {
      if (t(d)) return d;
      var l = 'default';
      arguments.length > 1 &&
        (arguments[1] === String ? (l = 'string') : arguments[1] === Number && (l = 'number'));
      var f;
      if (
        (e &&
          (Symbol.toPrimitive
            ? (f = o(d, Symbol.toPrimitive))
            : s(d) && (f = Symbol.prototype.valueOf)),
        typeof f < 'u')
      ) {
        var u = f.call(d, l);
        if (t(u)) return u;
        throw new TypeError('unable to convert exotic object to primitive');
      }
      return (
        l === 'default' && (n(d) || s(d)) && (l = 'string'), i(d, l === 'default' ? 'number' : l)
      );
    }),
    Co
  );
}
var ko, ku;
function VP() {
  if (ku) return ko;
  ku = 1;
  var e = qP();
  return (
    (ko = function (r) {
      return arguments.length > 1 ? e(r, arguments[1]) : e(r);
    }),
    ko
  );
}
var Do, Du;
function GP() {
  if (Du) return Do;
  Du = 1;
  var e = Be,
    t = e('%TypeError%'),
    r = e('%Number%'),
    n = e('%RegExp%'),
    s = e('%parseInt%'),
    i = jt(),
    o = UP(),
    c = qy(),
    d = i('String.prototype.slice'),
    l = o(/^0b[01]+$/i),
    f = o(/^0o[0-7]+$/i),
    u = o(/^[-+]0x[0-9a-f]+$/i),
    h = ['', '​', '￾'].join(''),
    b = new n('[' + h + ']', 'g'),
    y = o(b),
    p = [
      `	
\v\f\r   ᠎    `,
      '         　\u2028',
      '\u2029\uFEFF',
    ].join(''),
    x = new RegExp('(^[' + p + ']+)|([' + p + ']+$)', 'g'),
    S = i('String.prototype.replace'),
    _ = function (I) {
      return S(I, x, '');
    },
    m = VP();
  return (
    (Do = function I(A) {
      var k = c(A) ? A : m(A, r);
      if (typeof k == 'symbol') throw new t('Cannot convert a Symbol value to a number');
      if (typeof k == 'bigint') throw new t("Conversion from 'BigInt' to 'number' is not allowed.");
      if (typeof k == 'string') {
        if (l(k)) return I(s(d(k, 2), 2));
        if (f(k)) return I(s(d(k, 2), 8));
        if (y(k) || u(k)) return NaN;
        var P = _(k);
        if (P !== k) return I(P);
      }
      return r(k);
    }),
    Do
  );
}
var Oo, Ou;
function zP() {
  if (Ou) return Oo;
  Ou = 1;
  var e = GP();
  return (
    (Oo = function (r) {
      return e(r) >>> 0;
    }),
    Oo
  );
}
var Bo, Bu;
function KP() {
  if (Bu) return Bo;
  Bu = 1;
  var e = Be,
    t = e('%Object%'),
    r = Cy();
  return (
    (Bo = function (s) {
      return r(s), t(s);
    }),
    Bo
  );
}
var Lo, Lu;
function WP() {
  if (Lu) return Lo;
  Lu = 1;
  var e = Be,
    t = e('%String%'),
    r = e('%TypeError%');
  return (
    (Lo = function (s) {
      if (typeof s == 'symbol') throw new r('Cannot convert a Symbol value to a string');
      return t(s);
    }),
    Lo
  );
}
var Mo, Mu;
function Vy() {
  if (Mu) return Mo;
  Mu = 1;
  var e = kP(),
    t = DP(),
    r = NP(),
    n = Oy(),
    s = RP(),
    i = Fy(),
    o = zP(),
    c = KP(),
    d = WP(),
    l = jt(),
    f = Py(),
    u = Object('a'),
    h = u[0] !== 'a' || !(0 in u),
    b = l('String.prototype.split');
  return (
    (Mo = function (p) {
      var x = c(this),
        S = h && f(x) ? b(x, '') : x,
        _ = o(S.length);
      if (!i(p)) throw new TypeError('Array.prototype.map callback must be a function');
      var m;
      arguments.length > 1 && (m = arguments[1]);
      for (var I = e(x, _), A = 0; A < _; ) {
        var k = d(A),
          P = s(x, k);
        if (P) {
          var w = n(x, k),
            E = t(p, m, [w, A, x]);
          r(I, k, E);
        }
        A += 1;
      }
      return I;
    }),
    Mo
  );
}
var No, Nu;
function QP() {
  return (
    Nu ||
      ((Nu = 1),
      (No = function (t) {
        var r = !0,
          n = !0,
          s = !1;
        if (typeof t == 'function') {
          try {
            t.call('f', function (i, o, c) {
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
    No
  );
}
var Ro, Ru;
function Gy() {
  if (Ru) return Ro;
  Ru = 1;
  var e = QP(),
    t = Vy();
  return (
    (Ro = function () {
      var n = Array.prototype.map;
      return e(n) ? n : t;
    }),
    Ro
  );
}
var Uo, Uu;
function YP() {
  if (Uu) return Uo;
  Uu = 1;
  var e = Na,
    t = Gy();
  return (
    (Uo = function () {
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
    Uo
  );
}
var Fo, Fu;
function ZP() {
  if (Fu) return Fo;
  Fu = 1;
  var e = Na,
    t = Cy(),
    r = jt(),
    n = Vy(),
    s = Gy(),
    i = s(),
    o = YP(),
    c = r('Array.prototype.slice'),
    d = function (f, u) {
      return t(f), i.apply(f, c(arguments, 1));
    };
  return e(d, { getPolyfill: s, implementation: n, shim: o }), (Fo = d), Fo;
}
var JP = ri;
JP();
var XP = uP(),
  eC = ot(),
  tC = yP(),
  rC = ZP(),
  zy = Be,
  Ky = Vc,
  nC = Ky(zy('%Promise.all%')),
  sC = Ky(zy('%Promise.reject%')),
  Wy = function (t) {
    var r = this;
    if (eC(r) !== 'Object') throw new TypeError('`this` value must be an object');
    var n = tC(t);
    return nC(
      r,
      rC(n, function (s) {
        var i = function (d) {
            return { status: 'fulfilled', value: d };
          },
          o = function (d) {
            return { status: 'rejected', reason: d };
          },
          c = XP(r, s);
        try {
          return c.then(i, o);
        } catch (d) {
          return sC(r, d);
        }
      })
    );
  },
  aC = ri,
  iC = Wy,
  Qy = function () {
    return aC(), typeof Promise.allSettled == 'function' ? Promise.allSettled : iC;
  },
  oC = ri,
  cC = Qy,
  lC = Na,
  uC = function () {
    oC();
    var t = cC();
    return (
      lC(
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
  fC = Vc,
  dC = Na,
  hC = ri,
  xC = Wy,
  Yy = Qy,
  pC = uC;
hC();
var bC = fC(Yy()),
  Zy = function (t) {
    return bC(typeof this > 'u' ? Promise : this, t);
  };
dC(Zy, { getPolyfill: Yy, implementation: xC, shim: pC });
var yC = Zy;
const ju = Ht(yC);
class mC {
  constructor() {
    F(this, '_lazyProviders');
    F(this, '_resolveProviders', () => {});
    F(this, '_providers', []);
    F(this, '_initialized', !1);
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
      await ju(
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
      const i = s.isMultivariateFeatureEnabled(t, r);
      return i === null ? n : i;
    }, !1);
  }
  getMultivariateAssignment(t, r) {
    return this._providers.reduce((n, s) => {
      var o;
      const i = ((o = s.getMultivariateAssignment) == null ? void 0 : o.call(s, t, r)) ?? null;
      return i === null ? n : i;
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
    await ju(this._providers.map((t) => t.refreshFeatureFlags()));
  }
}
const Un = new mC();
class gC {
  constructor(t) {
    F(this, '_flags', {});
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
const vC = 'REACT_QUERY_OFFLINE_CACHE',
  wC = 5 * 1024 * 1024;
function ts(e, t, ...r) {
  e && console.log(t, ...r);
}
const FB = ({
  underlyingStorage: e,
  throttleMs: t,
  cacheKey: r = vC,
  maxCacheSizeBytes: n = wC,
  enableDebugLogs: s = !1,
}) => {
  let i = null;
  const o = async () => {
    if (i)
      try {
        const c = JSON.stringify(i),
          d = c.length;
        d < n
          ? await e.set(r, c)
          : (await e.remove(r),
            ts(s, '[React Query Offline Cache] Removed offline cache. Size:', d, 'bytes')),
          (i = null);
      } catch {}
  };
  return (
    setInterval(() => {
      o();
    }, t),
    {
      persistClient: (c) => {
        i = c;
      },
      restoreClient: async () => {
        try {
          const c = await e.get(r);
          if (!c) {
            ts(s, '[React Query Offline Cache] No offline cache restored.');
            return;
          }
          const d = JSON.parse(c),
            l = c.length;
          return (
            ts(s, '[React Query Offline Cache] Restored RQ offline cache. Size:', l, 'bytes'), d
          );
        } catch {
          ts(s, '[React Query Offline Cache] Error restoring offline cache.');
          return;
        }
      },
      removeClient: () => (
        ts(s, '[React Query Offline Cache] Removed offline cache.'), e.remove(r)
      ),
    }
  );
};
var sn = class {
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
  en = typeof window > 'u' || 'Deno' in globalThis;
function mt() {}
function SC(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function cc(e) {
  return typeof e == 'number' && e >= 0 && e !== 1 / 0;
}
function Jy(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function gn(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function Tt(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function Hu(e, t) {
  const { type: r = 'all', exact: n, fetchStatus: s, predicate: i, queryKey: o, stale: c } = e;
  if (o) {
    if (n) {
      if (t.queryHash !== I0(o, t.options)) return !1;
    } else if (!gs(t.queryKey, o)) return !1;
  }
  if (r !== 'all') {
    const d = t.isActive();
    if ((r === 'active' && !d) || (r === 'inactive' && d)) return !1;
  }
  return !(
    (typeof c == 'boolean' && t.isStale() !== c) ||
    (s && s !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function qu(e, t) {
  const { exact: r, status: n, predicate: s, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (r) {
      if (tn(t.options.mutationKey) !== tn(i)) return !1;
    } else if (!gs(t.options.mutationKey, i)) return !1;
  }
  return !((n && t.state.status !== n) || (s && !s(t)));
}
function I0(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || tn)(e);
}
function tn(e) {
  return JSON.stringify(e, (t, r) =>
    lc(r)
      ? Object.keys(r)
          .sort()
          .reduce((n, s) => ((n[s] = r[s]), n), {})
      : r
  );
}
function gs(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == 'object' && typeof t == 'object'
        ? !Object.keys(t).some((r) => !gs(e[r], t[r]))
        : !1;
}
function T0(e, t) {
  if (e === t) return e;
  const r = Vu(e) && Vu(t);
  if (r || (lc(e) && lc(t))) {
    const n = r ? e : Object.keys(e),
      s = n.length,
      i = r ? t : Object.keys(t),
      o = i.length,
      c = r ? [] : {};
    let d = 0;
    for (let l = 0; l < o; l++) {
      const f = r ? l : i[l];
      ((!r && n.includes(f)) || r) && e[f] === void 0 && t[f] === void 0
        ? ((c[f] = void 0), d++)
        : ((c[f] = T0(e[f], t[f])), c[f] === e[f] && e[f] !== void 0 && d++);
    }
    return s === o && d === s ? e : c;
  }
  return t;
}
function Ia(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const r in e) if (e[r] !== t[r]) return !1;
  return !0;
}
function Vu(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function lc(e) {
  if (!Gu(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const r = t.prototype;
  return !(
    !Gu(r) ||
    !r.hasOwnProperty('isPrototypeOf') ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Gu(e) {
  return Object.prototype.toString.call(e) === '[object Object]';
}
function EC(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function uc(e, t, r) {
  return typeof r.structuralSharing == 'function'
    ? r.structuralSharing(e, t)
    : r.structuralSharing !== !1
      ? T0(e, t)
      : t;
}
function jB(e) {
  return e;
}
function _C(e, t, r = 0) {
  const n = [...e, t];
  return r && n.length > r ? n.slice(1) : n;
}
function $C(e, t, r = 0) {
  const n = [t, ...e];
  return r && n.length > r ? n.slice(0, -1) : n;
}
var P0 = Symbol();
function Xy(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === P0
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
var zr,
  Er,
  vn,
  Ef,
  AC =
    ((Ef = class extends sn {
      constructor() {
        super();
        Y(this, zr);
        Y(this, Er);
        Y(this, vn);
        q(this, vn, (t) => {
          if (!en && window.addEventListener) {
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
        v(this, Er) || this.setEventListener(v(this, vn));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = v(this, Er)) == null || t.call(this), q(this, Er, void 0));
      }
      setEventListener(t) {
        var r;
        q(this, vn, t),
          (r = v(this, Er)) == null || r.call(this),
          q(
            this,
            Er,
            t((n) => {
              typeof n == 'boolean' ? this.setFocused(n) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        v(this, zr) !== t && (q(this, zr, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((r) => {
          r(t);
        });
      }
      isFocused() {
        var t;
        return typeof v(this, zr) == 'boolean'
          ? v(this, zr)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== 'hidden';
      }
    }),
    (zr = new WeakMap()),
    (Er = new WeakMap()),
    (vn = new WeakMap()),
    Ef),
  C0 = new AC(),
  wn,
  _r,
  Sn,
  _f,
  IC =
    ((_f = class extends sn {
      constructor() {
        super();
        Y(this, wn, !0);
        Y(this, _r);
        Y(this, Sn);
        q(this, Sn, (t) => {
          if (!en && window.addEventListener) {
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
        v(this, _r) || this.setEventListener(v(this, Sn));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = v(this, _r)) == null || t.call(this), q(this, _r, void 0));
      }
      setEventListener(t) {
        var r;
        q(this, Sn, t),
          (r = v(this, _r)) == null || r.call(this),
          q(this, _r, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        v(this, wn) !== t &&
          (q(this, wn, t),
          this.listeners.forEach((n) => {
            n(t);
          }));
      }
      isOnline() {
        return v(this, wn);
      }
    }),
    (wn = new WeakMap()),
    (_r = new WeakMap()),
    (Sn = new WeakMap()),
    _f),
  Ta = new IC();
function fc() {
  let e, t;
  const r = new Promise((s, i) => {
    (e = s), (t = i);
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
function TC(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function em(e) {
  return (e ?? 'online') === 'online' ? Ta.isOnline() : !0;
}
var tm = class extends Error {
  constructor(e) {
    super('CancelledError'),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function jo(e) {
  return e instanceof tm;
}
function rm(e) {
  let t = !1,
    r = 0,
    n = !1,
    s;
  const i = fc(),
    o = (p) => {
      var x;
      n || (h(new tm(p)), (x = e.abort) == null || x.call(e));
    },
    c = () => {
      t = !0;
    },
    d = () => {
      t = !1;
    },
    l = () => C0.isFocused() && (e.networkMode === 'always' || Ta.isOnline()) && e.canRun(),
    f = () => em(e.networkMode) && e.canRun(),
    u = (p) => {
      var x;
      n || ((n = !0), (x = e.onSuccess) == null || x.call(e, p), s == null || s(), i.resolve(p));
    },
    h = (p) => {
      var x;
      n || ((n = !0), (x = e.onError) == null || x.call(e, p), s == null || s(), i.reject(p));
    },
    b = () =>
      new Promise((p) => {
        var x;
        (s = (S) => {
          (n || l()) && p(S);
        }),
          (x = e.onPause) == null || x.call(e);
      }).then(() => {
        var p;
        (s = void 0), n || (p = e.onContinue) == null || p.call(e);
      }),
    y = () => {
      if (n) return;
      let p;
      const x = r === 0 ? e.initialPromise : void 0;
      try {
        p = x ?? e.fn();
      } catch (S) {
        p = Promise.reject(S);
      }
      Promise.resolve(p)
        .then(u)
        .catch((S) => {
          var k;
          if (n) return;
          const _ = e.retry ?? (en ? 0 : 3),
            m = e.retryDelay ?? TC,
            I = typeof m == 'function' ? m(r, S) : m,
            A = _ === !0 || (typeof _ == 'number' && r < _) || (typeof _ == 'function' && _(r, S));
          if (t || !A) {
            h(S);
            return;
          }
          r++,
            (k = e.onFail) == null || k.call(e, r, S),
            EC(I)
              .then(() => (l() ? void 0 : b()))
              .then(() => {
                t ? h(S) : y();
              });
        });
    };
  return {
    promise: i,
    cancel: o,
    continue: () => (s == null || s(), i),
    cancelRetry: c,
    continueRetry: d,
    canStart: f,
    start: () => (f() ? y() : b().then(y), i),
  };
}
function PC() {
  let e = [],
    t = 0,
    r = (c) => {
      c();
    },
    n = (c) => {
      c();
    },
    s = (c) => setTimeout(c, 0);
  const i = (c) => {
      t
        ? e.push(c)
        : s(() => {
            r(c);
          });
    },
    o = () => {
      const c = e;
      (e = []),
        c.length &&
          s(() => {
            n(() => {
              c.forEach((d) => {
                r(d);
              });
            });
          });
    };
  return {
    batch: (c) => {
      let d;
      t++;
      try {
        d = c();
      } finally {
        t--, t || o();
      }
      return d;
    },
    batchCalls:
      (c) =>
      (...d) => {
        i(() => {
          c(...d);
        });
      },
    schedule: i,
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
var je = PC(),
  Kr,
  $f,
  nm =
    (($f = class {
      constructor() {
        Y(this, Kr);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          cc(this.gcTime) &&
            q(
              this,
              Kr,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (en ? 1 / 0 : 5 * 60 * 1e3));
      }
      clearGcTimeout() {
        v(this, Kr) && (clearTimeout(v(this, Kr)), q(this, Kr, void 0));
      }
    }),
    (Kr = new WeakMap()),
    $f),
  En,
  _n,
  pt,
  Xe,
  ws,
  Wr,
  At,
  Kt,
  Af,
  CC =
    ((Af = class extends nm {
      constructor(t) {
        super();
        Y(this, At);
        Y(this, En);
        Y(this, _n);
        Y(this, pt);
        Y(this, Xe);
        Y(this, ws);
        Y(this, Wr);
        q(this, Wr, !1),
          q(this, ws, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          q(this, pt, t.cache),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          q(this, En, kC(this.options)),
          (this.state = t.state ?? v(this, En)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = v(this, Xe)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...v(this, ws), ...t }), this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length && this.state.fetchStatus === 'idle' && v(this, pt).remove(this);
      }
      setData(t, r) {
        const n = uc(this.state.data, t, this.options);
        return (
          ie(this, At, Kt).call(this, {
            data: n,
            type: 'success',
            dataUpdatedAt: r == null ? void 0 : r.updatedAt,
            manual: r == null ? void 0 : r.manual,
          }),
          n
        );
      }
      setState(t, r) {
        ie(this, At, Kt).call(this, { type: 'setState', state: t, setStateOptions: r });
      }
      cancel(t) {
        var n, s;
        const r = (n = v(this, Xe)) == null ? void 0 : n.promise;
        return (
          (s = v(this, Xe)) == null || s.cancel(t), r ? r.then(mt).catch(mt) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(v(this, En));
      }
      isActive() {
        return this.observers.some((t) => Tt(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === P0 ||
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
          this.state.isInvalidated || this.state.data === void 0 || !Jy(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var r;
        const t = this.observers.find((n) => n.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }), (r = v(this, Xe)) == null || r.continue();
      }
      onOnline() {
        var r;
        const t = this.observers.find((n) => n.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }), (r = v(this, Xe)) == null || r.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          v(this, pt).notify({ type: 'observerAdded', query: this, observer: t }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((r) => r !== t)),
          this.observers.length ||
            (v(this, Xe) &&
              (v(this, Wr) ? v(this, Xe).cancel({ revert: !0 }) : v(this, Xe).cancelRetry()),
            this.scheduleGc()),
          v(this, pt).notify({ type: 'observerRemoved', query: this, observer: t }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated || ie(this, At, Kt).call(this, { type: 'invalidate' });
      }
      fetch(t, r) {
        var d, l, f;
        if (this.state.fetchStatus !== 'idle') {
          if (this.state.data !== void 0 && r != null && r.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (v(this, Xe)) return v(this, Xe).continueRetry(), v(this, Xe).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const u = this.observers.find((h) => h.options.queryFn);
          u && this.setOptions(u.options);
        }
        const n = new AbortController(),
          s = (u) => {
            Object.defineProperty(u, 'signal', {
              enumerable: !0,
              get: () => (q(this, Wr, !0), n.signal),
            });
          },
          i = () => {
            const u = Xy(this.options, r),
              h = { queryKey: this.queryKey, meta: this.meta };
            return (
              s(h),
              q(this, Wr, !1),
              this.options.persister ? this.options.persister(u, h, this) : u(h)
            );
          },
          o = {
            fetchOptions: r,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: i,
          };
        s(o),
          (d = this.options.behavior) == null || d.onFetch(o, this),
          q(this, _n, this.state),
          (this.state.fetchStatus === 'idle' ||
            this.state.fetchMeta !== ((l = o.fetchOptions) == null ? void 0 : l.meta)) &&
            ie(this, At, Kt).call(this, {
              type: 'fetch',
              meta: (f = o.fetchOptions) == null ? void 0 : f.meta,
            });
        const c = (u) => {
          var h, b, y, p;
          (jo(u) && u.silent) || ie(this, At, Kt).call(this, { type: 'error', error: u }),
            jo(u) ||
              ((b = (h = v(this, pt).config).onError) == null || b.call(h, u, this),
              (p = (y = v(this, pt).config).onSettled) == null ||
                p.call(y, this.state.data, u, this)),
            this.scheduleGc();
        };
        return (
          q(
            this,
            Xe,
            rm({
              initialPromise: r == null ? void 0 : r.initialPromise,
              fn: o.fetchFn,
              abort: n.abort.bind(n),
              onSuccess: (u) => {
                var h, b, y, p;
                if (u === void 0) {
                  c(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(u);
                } catch (x) {
                  c(x);
                  return;
                }
                (b = (h = v(this, pt).config).onSuccess) == null || b.call(h, u, this),
                  (p = (y = v(this, pt).config).onSettled) == null ||
                    p.call(y, u, this.state.error, this),
                  this.scheduleGc();
              },
              onError: c,
              onFail: (u, h) => {
                ie(this, At, Kt).call(this, { type: 'failed', failureCount: u, error: h });
              },
              onPause: () => {
                ie(this, At, Kt).call(this, { type: 'pause' });
              },
              onContinue: () => {
                ie(this, At, Kt).call(this, { type: 'continue' });
              },
              retry: o.options.retry,
              retryDelay: o.options.retryDelay,
              networkMode: o.options.networkMode,
              canRun: () => !0,
            })
          ),
          v(this, Xe).start()
        );
      }
    }),
    (En = new WeakMap()),
    (_n = new WeakMap()),
    (pt = new WeakMap()),
    (Xe = new WeakMap()),
    (ws = new WeakMap()),
    (Wr = new WeakMap()),
    (At = new WeakSet()),
    (Kt = function (t) {
      const r = (n) => {
        switch (t.type) {
          case 'failed':
            return { ...n, fetchFailureCount: t.failureCount, fetchFailureReason: t.error };
          case 'pause':
            return { ...n, fetchStatus: 'paused' };
          case 'continue':
            return { ...n, fetchStatus: 'fetching' };
          case 'fetch':
            return { ...n, ...sm(n.data, this.options), fetchMeta: t.meta ?? null };
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
            return jo(s) && s.revert && v(this, _n)
              ? { ...v(this, _n), fetchStatus: 'idle' }
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
        je.batch(() => {
          this.observers.forEach((n) => {
            n.onQueryUpdate();
          }),
            v(this, pt).notify({ query: this, type: 'updated', action: t });
        });
    }),
    Af);
function sm(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: em(t.networkMode) ? 'fetching' : 'paused',
    ...(e === void 0 && { error: null, status: 'pending' }),
  };
}
function kC(e) {
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
var Lt,
  If,
  DC =
    ((If = class extends sn {
      constructor(t = {}) {
        super();
        Y(this, Lt);
        (this.config = t), q(this, Lt, new Map());
      }
      build(t, r, n) {
        const s = r.queryKey,
          i = r.queryHash ?? I0(s, r);
        let o = this.get(i);
        return (
          o ||
            ((o = new CC({
              cache: this,
              queryKey: s,
              queryHash: i,
              options: t.defaultQueryOptions(r),
              state: n,
              defaultOptions: t.getQueryDefaults(s),
            })),
            this.add(o)),
          o
        );
      }
      add(t) {
        v(this, Lt).has(t.queryHash) ||
          (v(this, Lt).set(t.queryHash, t), this.notify({ type: 'added', query: t }));
      }
      remove(t) {
        const r = v(this, Lt).get(t.queryHash);
        r &&
          (t.destroy(),
          r === t && v(this, Lt).delete(t.queryHash),
          this.notify({ type: 'removed', query: t }));
      }
      clear() {
        je.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return v(this, Lt).get(t);
      }
      getAll() {
        return [...v(this, Lt).values()];
      }
      find(t) {
        const r = { exact: !0, ...t };
        return this.getAll().find((n) => Hu(r, n));
      }
      findAll(t = {}) {
        const r = this.getAll();
        return Object.keys(t).length > 0 ? r.filter((n) => Hu(t, n)) : r;
      }
      notify(t) {
        je.batch(() => {
          this.listeners.forEach((r) => {
            r(t);
          });
        });
      }
      onFocus() {
        je.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        je.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Lt = new WeakMap()),
    If),
  Mt,
  et,
  Qr,
  Nt,
  gr,
  Tf,
  OC =
    ((Tf = class extends nm {
      constructor(t) {
        super();
        Y(this, Nt);
        Y(this, Mt);
        Y(this, et);
        Y(this, Qr);
        (this.mutationId = t.mutationId),
          q(this, et, t.mutationCache),
          q(this, Mt, []),
          (this.state = t.state || am()),
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
        v(this, Mt).includes(t) ||
          (v(this, Mt).push(t),
          this.clearGcTimeout(),
          v(this, et).notify({ type: 'observerAdded', mutation: this, observer: t }));
      }
      removeObserver(t) {
        q(
          this,
          Mt,
          v(this, Mt).filter((r) => r !== t)
        ),
          this.scheduleGc(),
          v(this, et).notify({ type: 'observerRemoved', mutation: this, observer: t });
      }
      optionalRemove() {
        v(this, Mt).length ||
          (this.state.status === 'pending' ? this.scheduleGc() : v(this, et).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = v(this, Qr)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var s, i, o, c, d, l, f, u, h, b, y, p, x, S, _, m, I, A, k, P;
        q(
          this,
          Qr,
          rm({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error('No mutationFn found')),
            onFail: (w, E) => {
              ie(this, Nt, gr).call(this, { type: 'failed', failureCount: w, error: E });
            },
            onPause: () => {
              ie(this, Nt, gr).call(this, { type: 'pause' });
            },
            onContinue: () => {
              ie(this, Nt, gr).call(this, { type: 'continue' });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => v(this, et).canRun(this),
          })
        );
        const r = this.state.status === 'pending',
          n = !v(this, Qr).canStart();
        try {
          if (!r) {
            ie(this, Nt, gr).call(this, { type: 'pending', variables: t, isPaused: n }),
              await ((i = (s = v(this, et).config).onMutate) == null ? void 0 : i.call(s, t, this));
            const E = await ((c = (o = this.options).onMutate) == null ? void 0 : c.call(o, t));
            E !== this.state.context &&
              ie(this, Nt, gr).call(this, {
                type: 'pending',
                context: E,
                variables: t,
                isPaused: n,
              });
          }
          const w = await v(this, Qr).start();
          return (
            await ((l = (d = v(this, et).config).onSuccess) == null
              ? void 0
              : l.call(d, w, t, this.state.context, this)),
            await ((u = (f = this.options).onSuccess) == null
              ? void 0
              : u.call(f, w, t, this.state.context)),
            await ((b = (h = v(this, et).config).onSettled) == null
              ? void 0
              : b.call(h, w, null, this.state.variables, this.state.context, this)),
            await ((p = (y = this.options).onSettled) == null
              ? void 0
              : p.call(y, w, null, t, this.state.context)),
            ie(this, Nt, gr).call(this, { type: 'success', data: w }),
            w
          );
        } catch (w) {
          try {
            throw (
              (await ((S = (x = v(this, et).config).onError) == null
                ? void 0
                : S.call(x, w, t, this.state.context, this)),
              await ((m = (_ = this.options).onError) == null
                ? void 0
                : m.call(_, w, t, this.state.context)),
              await ((A = (I = v(this, et).config).onSettled) == null
                ? void 0
                : A.call(I, void 0, w, this.state.variables, this.state.context, this)),
              await ((P = (k = this.options).onSettled) == null
                ? void 0
                : P.call(k, void 0, w, t, this.state.context)),
              w)
            );
          } finally {
            ie(this, Nt, gr).call(this, { type: 'error', error: w });
          }
        } finally {
          v(this, et).runNext(this);
        }
      }
    }),
    (Mt = new WeakMap()),
    (et = new WeakMap()),
    (Qr = new WeakMap()),
    (Nt = new WeakSet()),
    (gr = function (t) {
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
        je.batch(() => {
          v(this, Mt).forEach((n) => {
            n.onMutationUpdate(t);
          }),
            v(this, et).notify({ mutation: this, type: 'updated', action: t });
        });
    }),
    Tf);
function am() {
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
var ut,
  Ss,
  Pf,
  BC =
    ((Pf = class extends sn {
      constructor(t = {}) {
        super();
        Y(this, ut);
        Y(this, Ss);
        (this.config = t), q(this, ut, new Map()), q(this, Ss, Date.now());
      }
      build(t, r, n) {
        const s = new OC({
          mutationCache: this,
          mutationId: ++Rs(this, Ss)._,
          options: t.defaultMutationOptions(r),
          state: n,
        });
        return this.add(s), s;
      }
      add(t) {
        const r = Zs(t),
          n = v(this, ut).get(r) ?? [];
        n.push(t), v(this, ut).set(r, n), this.notify({ type: 'added', mutation: t });
      }
      remove(t) {
        var n;
        const r = Zs(t);
        if (v(this, ut).has(r)) {
          const s = (n = v(this, ut).get(r)) == null ? void 0 : n.filter((i) => i !== t);
          s && (s.length === 0 ? v(this, ut).delete(r) : v(this, ut).set(r, s));
        }
        this.notify({ type: 'removed', mutation: t });
      }
      canRun(t) {
        var n;
        const r =
          (n = v(this, ut).get(Zs(t))) == null
            ? void 0
            : n.find((s) => s.state.status === 'pending');
        return !r || r === t;
      }
      runNext(t) {
        var n;
        const r =
          (n = v(this, ut).get(Zs(t))) == null
            ? void 0
            : n.find((s) => s !== t && s.state.isPaused);
        return (r == null ? void 0 : r.continue()) ?? Promise.resolve();
      }
      clear() {
        je.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      getAll() {
        return [...v(this, ut).values()].flat();
      }
      find(t) {
        const r = { exact: !0, ...t };
        return this.getAll().find((n) => qu(r, n));
      }
      findAll(t = {}) {
        return this.getAll().filter((r) => qu(t, r));
      }
      notify(t) {
        je.batch(() => {
          this.listeners.forEach((r) => {
            r(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((r) => r.state.isPaused);
        return je.batch(() => Promise.all(t.map((r) => r.continue().catch(mt))));
      }
    }),
    (ut = new WeakMap()),
    (Ss = new WeakMap()),
    Pf);
function Zs(e) {
  var t;
  return ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId);
}
function Pa(e) {
  return {
    onFetch: (t, r) => {
      var f, u, h, b, y;
      const n = t.options,
        s =
          (h =
            (u = (f = t.fetchOptions) == null ? void 0 : f.meta) == null ? void 0 : u.fetchMore) ==
          null
            ? void 0
            : h.direction,
        i = ((b = t.state.data) == null ? void 0 : b.pages) || [],
        o = ((y = t.state.data) == null ? void 0 : y.pageParams) || [];
      let c = { pages: [], pageParams: [] },
        d = 0;
      const l = async () => {
        let p = !1;
        const x = (m) => {
            Object.defineProperty(m, 'signal', {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (p = !0)
                  : t.signal.addEventListener('abort', () => {
                      p = !0;
                    }),
                t.signal
              ),
            });
          },
          S = Xy(t.options, t.fetchOptions),
          _ = async (m, I, A) => {
            if (p) return Promise.reject();
            if (I == null && m.pages.length) return Promise.resolve(m);
            const k = {
              queryKey: t.queryKey,
              pageParam: I,
              direction: A ? 'backward' : 'forward',
              meta: t.options.meta,
            };
            x(k);
            const P = await S(k),
              { maxPages: w } = t.options,
              E = A ? $C : _C;
            return { pages: E(m.pages, P, w), pageParams: E(m.pageParams, I, w) };
          };
        if (s && i.length) {
          const m = s === 'backward',
            I = m ? im : dc,
            A = { pages: i, pageParams: o },
            k = I(n, A);
          c = await _(A, k, m);
        } else {
          const m = e ?? i.length;
          do {
            const I = d === 0 ? (o[0] ?? n.initialPageParam) : dc(n, c);
            if (d > 0 && I == null) break;
            (c = await _(c, I)), d++;
          } while (d < m);
        }
        return c;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var p, x;
            return (x = (p = t.options).persister) == null
              ? void 0
              : x.call(p, l, { queryKey: t.queryKey, meta: t.options.meta, signal: t.signal }, r);
          })
        : (t.fetchFn = l);
    },
  };
}
function dc(e, { pages: t, pageParams: r }) {
  const n = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[n], t, r[n], r) : void 0;
}
function im(e, { pages: t, pageParams: r }) {
  var n;
  return t.length > 0
    ? (n = e.getPreviousPageParam) == null
      ? void 0
      : n.call(e, t[0], t, r[0], r)
    : void 0;
}
function LC(e, t) {
  return t ? dc(e, t) != null : !1;
}
function MC(e, t) {
  return !t || !e.getPreviousPageParam ? !1 : im(e, t) != null;
}
var Fe,
  $r,
  Ar,
  $n,
  An,
  Ir,
  In,
  Tn,
  Cf,
  HB =
    ((Cf = class {
      constructor(e = {}) {
        Y(this, Fe);
        Y(this, $r);
        Y(this, Ar);
        Y(this, $n);
        Y(this, An);
        Y(this, Ir);
        Y(this, In);
        Y(this, Tn);
        q(this, Fe, e.queryCache || new DC()),
          q(this, $r, e.mutationCache || new BC()),
          q(this, Ar, e.defaultOptions || {}),
          q(this, $n, new Map()),
          q(this, An, new Map()),
          q(this, Ir, 0);
      }
      mount() {
        Rs(this, Ir)._++,
          v(this, Ir) === 1 &&
            (q(
              this,
              In,
              C0.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), v(this, Fe).onFocus());
              })
            ),
            q(
              this,
              Tn,
              Ta.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), v(this, Fe).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        Rs(this, Ir)._--,
          v(this, Ir) === 0 &&
            ((e = v(this, In)) == null || e.call(this),
            q(this, In, void 0),
            (t = v(this, Tn)) == null || t.call(this),
            q(this, Tn, void 0));
      }
      isFetching(e) {
        return v(this, Fe).findAll({ ...e, fetchStatus: 'fetching' }).length;
      }
      isMutating(e) {
        return v(this, $r).findAll({ ...e, status: 'pending' }).length;
      }
      getQueryData(e) {
        var r;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (r = v(this, Fe).get(t.queryHash)) == null ? void 0 : r.state.data;
      }
      ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0) return this.fetchQuery(e);
        {
          const r = this.defaultQueryOptions(e),
            n = v(this, Fe).build(this, r);
          return (
            e.revalidateIfStale && n.isStaleByTime(gn(r.staleTime, n)) && this.prefetchQuery(r),
            Promise.resolve(t)
          );
        }
      }
      getQueriesData(e) {
        return v(this, Fe)
          .findAll(e)
          .map(({ queryKey: t, state: r }) => {
            const n = r.data;
            return [t, n];
          });
      }
      setQueryData(e, t, r) {
        const n = this.defaultQueryOptions({ queryKey: e }),
          s = v(this, Fe).get(n.queryHash),
          i = s == null ? void 0 : s.state.data,
          o = SC(t, i);
        if (o !== void 0)
          return v(this, Fe)
            .build(this, n)
            .setData(o, { ...r, manual: !0 });
      }
      setQueriesData(e, t, r) {
        return je.batch(() =>
          v(this, Fe)
            .findAll(e)
            .map(({ queryKey: n }) => [n, this.setQueryData(n, t, r)])
        );
      }
      getQueryState(e) {
        var r;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (r = v(this, Fe).get(t.queryHash)) == null ? void 0 : r.state;
      }
      removeQueries(e) {
        const t = v(this, Fe);
        je.batch(() => {
          t.findAll(e).forEach((r) => {
            t.remove(r);
          });
        });
      }
      resetQueries(e, t) {
        const r = v(this, Fe),
          n = { type: 'active', ...e };
        return je.batch(
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
          n = je.batch(() =>
            v(this, Fe)
              .findAll(e)
              .map((s) => s.cancel(r))
          );
        return Promise.all(n).then(mt).catch(mt);
      }
      invalidateQueries(e = {}, t = {}) {
        return je.batch(() => {
          if (
            (v(this, Fe)
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
          n = je.batch(() =>
            v(this, Fe)
              .findAll(e)
              .filter((s) => !s.isDisabled())
              .map((s) => {
                let i = s.fetch(void 0, r);
                return (
                  r.throwOnError || (i = i.catch(mt)),
                  s.state.fetchStatus === 'paused' ? Promise.resolve() : i
                );
              })
          );
        return Promise.all(n).then(mt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const r = v(this, Fe).build(this, t);
        return r.isStaleByTime(gn(t.staleTime, r)) ? r.fetch(t) : Promise.resolve(r.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(mt).catch(mt);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = Pa(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(mt).catch(mt);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = Pa(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return Ta.isOnline() ? v(this, $r).resumePausedMutations() : Promise.resolve();
      }
      getQueryCache() {
        return v(this, Fe);
      }
      getMutationCache() {
        return v(this, $r);
      }
      getDefaultOptions() {
        return v(this, Ar);
      }
      setDefaultOptions(e) {
        q(this, Ar, e);
      }
      setQueryDefaults(e, t) {
        v(this, $n).set(tn(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...v(this, $n).values()];
        let r = {};
        return (
          t.forEach((n) => {
            gs(e, n.queryKey) && (r = { ...r, ...n.defaultOptions });
          }),
          r
        );
      }
      setMutationDefaults(e, t) {
        v(this, An).set(tn(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...v(this, An).values()];
        let r = {};
        return (
          t.forEach((n) => {
            gs(e, n.mutationKey) && (r = { ...r, ...n.defaultOptions });
          }),
          r
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...v(this, Ar).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = I0(t.queryKey, t)),
          t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== 'always'),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = 'offlineFirst'),
          t.enabled !== !0 && t.queryFn === P0 && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...v(this, Ar).mutations,
              ...((e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        v(this, Fe).clear(), v(this, $r).clear();
      }
    }),
    (Fe = new WeakMap()),
    ($r = new WeakMap()),
    (Ar = new WeakMap()),
    ($n = new WeakMap()),
    (An = new WeakMap()),
    (Ir = new WeakMap()),
    (In = new WeakMap()),
    (Tn = new WeakMap()),
    Cf),
  nt,
  ge,
  Es,
  tt,
  Yr,
  Pn,
  Tr,
  Rt,
  _s,
  Cn,
  kn,
  Zr,
  Jr,
  Pr,
  Dn,
  Te,
  os,
  hc,
  xc,
  pc,
  bc,
  yc,
  mc,
  gc,
  om,
  kf,
  ni =
    ((kf = class extends sn {
      constructor(t, r) {
        super();
        Y(this, Te);
        Y(this, nt);
        Y(this, ge);
        Y(this, Es);
        Y(this, tt);
        Y(this, Yr);
        Y(this, Pn);
        Y(this, Tr);
        Y(this, Rt);
        Y(this, _s);
        Y(this, Cn);
        Y(this, kn);
        Y(this, Zr);
        Y(this, Jr);
        Y(this, Pr);
        Y(this, Dn, new Set());
        (this.options = r),
          q(this, nt, t),
          q(this, Rt, null),
          q(this, Tr, fc()),
          this.options.experimental_prefetchInRender ||
            v(this, Tr).reject(
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
          (v(this, ge).addObserver(this),
          zu(v(this, ge), this.options) ? ie(this, Te, os).call(this) : this.updateResult(),
          ie(this, Te, bc).call(this));
      }
      onUnsubscribe() {
        this.hasListeners() || this.destroy();
      }
      shouldFetchOnReconnect() {
        return vc(v(this, ge), this.options, this.options.refetchOnReconnect);
      }
      shouldFetchOnWindowFocus() {
        return vc(v(this, ge), this.options, this.options.refetchOnWindowFocus);
      }
      destroy() {
        (this.listeners = new Set()),
          ie(this, Te, yc).call(this),
          ie(this, Te, mc).call(this),
          v(this, ge).removeObserver(this);
      }
      setOptions(t, r) {
        const n = this.options,
          s = v(this, ge);
        if (
          ((this.options = v(this, nt).defaultQueryOptions(t)),
          this.options.enabled !== void 0 &&
            typeof this.options.enabled != 'boolean' &&
            typeof this.options.enabled != 'function' &&
            typeof Tt(this.options.enabled, v(this, ge)) != 'boolean')
        )
          throw new Error('Expected enabled to be a boolean or a callback that returns a boolean');
        ie(this, Te, gc).call(this),
          v(this, ge).setOptions(this.options),
          n._defaulted &&
            !Ia(this.options, n) &&
            v(this, nt)
              .getQueryCache()
              .notify({ type: 'observerOptionsUpdated', query: v(this, ge), observer: this });
        const i = this.hasListeners();
        i && Ku(v(this, ge), s, this.options, n) && ie(this, Te, os).call(this),
          this.updateResult(r),
          i &&
            (v(this, ge) !== s ||
              Tt(this.options.enabled, v(this, ge)) !== Tt(n.enabled, v(this, ge)) ||
              gn(this.options.staleTime, v(this, ge)) !== gn(n.staleTime, v(this, ge))) &&
            ie(this, Te, hc).call(this);
        const o = ie(this, Te, xc).call(this);
        i &&
          (v(this, ge) !== s ||
            Tt(this.options.enabled, v(this, ge)) !== Tt(n.enabled, v(this, ge)) ||
            o !== v(this, Pr)) &&
          ie(this, Te, pc).call(this, o);
      }
      getOptimisticResult(t) {
        const r = v(this, nt).getQueryCache().build(v(this, nt), t),
          n = this.createResult(r, t);
        return (
          RC(this, n) &&
            (q(this, tt, n), q(this, Pn, this.options), q(this, Yr, v(this, ge).state)),
          n
        );
      }
      getCurrentResult() {
        return v(this, tt);
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
        v(this, Dn).add(t);
      }
      getCurrentQuery() {
        return v(this, ge);
      }
      refetch({ ...t } = {}) {
        return this.fetch({ ...t });
      }
      fetchOptimistic(t) {
        const r = v(this, nt).defaultQueryOptions(t),
          n = v(this, nt).getQueryCache().build(v(this, nt), r);
        return n.fetch().then(() => this.createResult(n, r));
      }
      fetch(t) {
        return ie(this, Te, os)
          .call(this, { ...t, cancelRefetch: t.cancelRefetch ?? !0 })
          .then(() => (this.updateResult(), v(this, tt)));
      }
      createResult(t, r) {
        var w;
        const n = v(this, ge),
          s = this.options,
          i = v(this, tt),
          o = v(this, Yr),
          c = v(this, Pn),
          l = t !== n ? t.state : v(this, Es),
          { state: f } = t;
        let u = { ...f },
          h = !1,
          b;
        if (r._optimisticResults) {
          const E = this.hasListeners(),
            U = !E && zu(t, r),
            j = E && Ku(t, n, r, s);
          (U || j) && (u = { ...u, ...sm(f.data, t.options) }),
            r._optimisticResults === 'isRestoring' && (u.fetchStatus = 'idle');
        }
        let { error: y, errorUpdatedAt: p, status: x } = u;
        if (r.select && u.data !== void 0)
          if (i && u.data === (o == null ? void 0 : o.data) && r.select === v(this, _s))
            b = v(this, Cn);
          else
            try {
              q(this, _s, r.select),
                (b = r.select(u.data)),
                (b = uc(i == null ? void 0 : i.data, b, r)),
                q(this, Cn, b),
                q(this, Rt, null);
            } catch (E) {
              q(this, Rt, E);
            }
        else b = u.data;
        if (r.placeholderData !== void 0 && b === void 0 && x === 'pending') {
          let E;
          if (
            i != null &&
            i.isPlaceholderData &&
            r.placeholderData === (c == null ? void 0 : c.placeholderData)
          )
            E = i.data;
          else if (
            ((E =
              typeof r.placeholderData == 'function'
                ? r.placeholderData((w = v(this, kn)) == null ? void 0 : w.state.data, v(this, kn))
                : r.placeholderData),
            r.select && E !== void 0)
          )
            try {
              (E = r.select(E)), q(this, Rt, null);
            } catch (U) {
              q(this, Rt, U);
            }
          E !== void 0 && ((x = 'success'), (b = uc(i == null ? void 0 : i.data, E, r)), (h = !0));
        }
        v(this, Rt) && ((y = v(this, Rt)), (b = v(this, Cn)), (p = Date.now()), (x = 'error'));
        const S = u.fetchStatus === 'fetching',
          _ = x === 'pending',
          m = x === 'error',
          I = _ && S,
          A = b !== void 0,
          P = {
            status: x,
            fetchStatus: u.fetchStatus,
            isPending: _,
            isSuccess: x === 'success',
            isError: m,
            isInitialLoading: I,
            isLoading: I,
            data: b,
            dataUpdatedAt: u.dataUpdatedAt,
            error: y,
            errorUpdatedAt: p,
            failureCount: u.fetchFailureCount,
            failureReason: u.fetchFailureReason,
            errorUpdateCount: u.errorUpdateCount,
            isFetched: u.dataUpdateCount > 0 || u.errorUpdateCount > 0,
            isFetchedAfterMount:
              u.dataUpdateCount > l.dataUpdateCount || u.errorUpdateCount > l.errorUpdateCount,
            isFetching: S,
            isRefetching: S && !_,
            isLoadingError: m && !A,
            isPaused: u.fetchStatus === 'paused',
            isPlaceholderData: h,
            isRefetchError: m && A,
            isStale: k0(t, r),
            refetch: this.refetch,
            promise: v(this, Tr),
          };
        if (this.options.experimental_prefetchInRender) {
          const E = (z) => {
              P.status === 'error' ? z.reject(P.error) : P.data !== void 0 && z.resolve(P.data);
            },
            U = () => {
              const z = q(this, Tr, (P.promise = fc()));
              E(z);
            },
            j = v(this, Tr);
          switch (j.status) {
            case 'pending':
              t.queryHash === n.queryHash && E(j);
              break;
            case 'fulfilled':
              (P.status === 'error' || P.data !== j.value) && U();
              break;
            case 'rejected':
              (P.status !== 'error' || P.error !== j.reason) && U();
              break;
          }
        }
        return P;
      }
      updateResult(t) {
        const r = v(this, tt),
          n = this.createResult(v(this, ge), this.options);
        if (
          (q(this, Yr, v(this, ge).state),
          q(this, Pn, this.options),
          v(this, Yr).data !== void 0 && q(this, kn, v(this, ge)),
          Ia(n, r))
        )
          return;
        q(this, tt, n);
        const s = {},
          i = () => {
            if (!r) return !0;
            const { notifyOnChangeProps: o } = this.options,
              c = typeof o == 'function' ? o() : o;
            if (c === 'all' || (!c && !v(this, Dn).size)) return !0;
            const d = new Set(c ?? v(this, Dn));
            return (
              this.options.throwOnError && d.add('error'),
              Object.keys(v(this, tt)).some((l) => {
                const f = l;
                return v(this, tt)[f] !== r[f] && d.has(f);
              })
            );
          };
        (t == null ? void 0 : t.listeners) !== !1 && i() && (s.listeners = !0),
          ie(this, Te, om).call(this, { ...s, ...t });
      }
      onQueryUpdate() {
        this.updateResult(), this.hasListeners() && ie(this, Te, bc).call(this);
      }
    }),
    (nt = new WeakMap()),
    (ge = new WeakMap()),
    (Es = new WeakMap()),
    (tt = new WeakMap()),
    (Yr = new WeakMap()),
    (Pn = new WeakMap()),
    (Tr = new WeakMap()),
    (Rt = new WeakMap()),
    (_s = new WeakMap()),
    (Cn = new WeakMap()),
    (kn = new WeakMap()),
    (Zr = new WeakMap()),
    (Jr = new WeakMap()),
    (Pr = new WeakMap()),
    (Dn = new WeakMap()),
    (Te = new WeakSet()),
    (os = function (t) {
      ie(this, Te, gc).call(this);
      let r = v(this, ge).fetch(this.options, t);
      return (t != null && t.throwOnError) || (r = r.catch(mt)), r;
    }),
    (hc = function () {
      ie(this, Te, yc).call(this);
      const t = gn(this.options.staleTime, v(this, ge));
      if (en || v(this, tt).isStale || !cc(t)) return;
      const n = Jy(v(this, tt).dataUpdatedAt, t) + 1;
      q(
        this,
        Zr,
        setTimeout(() => {
          v(this, tt).isStale || this.updateResult();
        }, n)
      );
    }),
    (xc = function () {
      return (
        (typeof this.options.refetchInterval == 'function'
          ? this.options.refetchInterval(v(this, ge))
          : this.options.refetchInterval) ?? !1
      );
    }),
    (pc = function (t) {
      ie(this, Te, mc).call(this),
        q(this, Pr, t),
        !(
          en ||
          Tt(this.options.enabled, v(this, ge)) === !1 ||
          !cc(v(this, Pr)) ||
          v(this, Pr) === 0
        ) &&
          q(
            this,
            Jr,
            setInterval(
              () => {
                (this.options.refetchIntervalInBackground || C0.isFocused()) &&
                  ie(this, Te, os).call(this);
              },
              v(this, Pr)
            )
          );
    }),
    (bc = function () {
      ie(this, Te, hc).call(this), ie(this, Te, pc).call(this, ie(this, Te, xc).call(this));
    }),
    (yc = function () {
      v(this, Zr) && (clearTimeout(v(this, Zr)), q(this, Zr, void 0));
    }),
    (mc = function () {
      v(this, Jr) && (clearInterval(v(this, Jr)), q(this, Jr, void 0));
    }),
    (gc = function () {
      const t = v(this, nt).getQueryCache().build(v(this, nt), this.options);
      if (t === v(this, ge)) return;
      const r = v(this, ge);
      q(this, ge, t),
        q(this, Es, t.state),
        this.hasListeners() && (r == null || r.removeObserver(this), t.addObserver(this));
    }),
    (om = function (t) {
      je.batch(() => {
        t.listeners &&
          this.listeners.forEach((r) => {
            r(v(this, tt));
          }),
          v(this, nt)
            .getQueryCache()
            .notify({ query: v(this, ge), type: 'observerResultsUpdated' });
      });
    }),
    kf);
function NC(e, t) {
  return (
    Tt(t.enabled, e) !== !1 &&
    e.state.data === void 0 &&
    !(e.state.status === 'error' && t.retryOnMount === !1)
  );
}
function zu(e, t) {
  return NC(e, t) || (e.state.data !== void 0 && vc(e, t, t.refetchOnMount));
}
function vc(e, t, r) {
  if (Tt(t.enabled, e) !== !1) {
    const n = typeof r == 'function' ? r(e) : r;
    return n === 'always' || (n !== !1 && k0(e, t));
  }
  return !1;
}
function Ku(e, t, r, n) {
  return (
    (e !== t || Tt(n.enabled, e) === !1) && (!r.suspense || e.state.status !== 'error') && k0(e, r)
  );
}
function k0(e, t) {
  return Tt(t.enabled, e) !== !1 && e.isStaleByTime(gn(t.staleTime, e));
}
function RC(e, t) {
  return !Ia(e.getCurrentResult(), t);
}
function Wu(e, t) {
  return e.filter((r) => !t.includes(r));
}
function UC(e, t, r) {
  const n = e.slice(0);
  return (n[t] = r), n;
}
var On,
  bt,
  Bn,
  Ln,
  ft,
  Cr,
  $s,
  As,
  it,
  wc,
  Sc,
  Ec,
  _c,
  Df,
  FC =
    ((Df = class extends sn {
      constructor(t, r, n) {
        super();
        Y(this, it);
        Y(this, On);
        Y(this, bt);
        Y(this, Bn);
        Y(this, Ln);
        Y(this, ft);
        Y(this, Cr);
        Y(this, $s);
        Y(this, As);
        q(this, On, t),
          q(this, Ln, n),
          q(this, Bn, []),
          q(this, ft, []),
          q(this, bt, []),
          this.setQueries(r);
      }
      onSubscribe() {
        this.listeners.size === 1 &&
          v(this, ft).forEach((t) => {
            t.subscribe((r) => {
              ie(this, it, Ec).call(this, t, r);
            });
          });
      }
      onUnsubscribe() {
        this.listeners.size || this.destroy();
      }
      destroy() {
        (this.listeners = new Set()),
          v(this, ft).forEach((t) => {
            t.destroy();
          });
      }
      setQueries(t, r, n) {
        q(this, Bn, t),
          q(this, Ln, r),
          je.batch(() => {
            const s = v(this, ft),
              i = ie(this, it, Sc).call(this, v(this, Bn));
            i.forEach((l) => l.observer.setOptions(l.defaultedQueryOptions, n));
            const o = i.map((l) => l.observer),
              c = o.map((l) => l.getCurrentResult()),
              d = o.some((l, f) => l !== s[f]);
            (s.length === o.length && !d) ||
              (q(this, ft, o),
              q(this, bt, c),
              this.hasListeners() &&
                (Wu(s, o).forEach((l) => {
                  l.destroy();
                }),
                Wu(o, s).forEach((l) => {
                  l.subscribe((f) => {
                    ie(this, it, Ec).call(this, l, f);
                  });
                }),
                ie(this, it, _c).call(this)));
          });
      }
      getCurrentResult() {
        return v(this, bt);
      }
      getQueries() {
        return v(this, ft).map((t) => t.getCurrentQuery());
      }
      getObservers() {
        return v(this, ft);
      }
      getOptimisticResult(t, r) {
        const n = ie(this, it, Sc).call(this, t),
          s = n.map((i) => i.observer.getOptimisticResult(i.defaultedQueryOptions));
        return [
          s,
          (i) => ie(this, it, wc).call(this, i ?? s, r),
          () =>
            n.map((i, o) => {
              const c = s[o];
              return i.defaultedQueryOptions.notifyOnChangeProps
                ? c
                : i.observer.trackResult(c, (d) => {
                    n.forEach((l) => {
                      l.observer.trackProp(d);
                    });
                  });
            }),
        ];
      }
    }),
    (On = new WeakMap()),
    (bt = new WeakMap()),
    (Bn = new WeakMap()),
    (Ln = new WeakMap()),
    (ft = new WeakMap()),
    (Cr = new WeakMap()),
    ($s = new WeakMap()),
    (As = new WeakMap()),
    (it = new WeakSet()),
    (wc = function (t, r) {
      return r
        ? ((!v(this, Cr) || v(this, bt) !== v(this, As) || r !== v(this, $s)) &&
            (q(this, $s, r), q(this, As, v(this, bt)), q(this, Cr, T0(v(this, Cr), r(t)))),
          v(this, Cr))
        : t;
    }),
    (Sc = function (t) {
      const r = new Map(v(this, ft).map((s) => [s.options.queryHash, s])),
        n = [];
      return (
        t.forEach((s) => {
          const i = v(this, On).defaultQueryOptions(s),
            o = r.get(i.queryHash);
          if (o) n.push({ defaultedQueryOptions: i, observer: o });
          else {
            const c = v(this, ft).find((d) => d.options.queryHash === i.queryHash);
            n.push({ defaultedQueryOptions: i, observer: c ?? new ni(v(this, On), i) });
          }
        }),
        n.sort(
          (s, i) =>
            t.findIndex((o) => o.queryHash === s.defaultedQueryOptions.queryHash) -
            t.findIndex((o) => o.queryHash === i.defaultedQueryOptions.queryHash)
        )
      );
    }),
    (Ec = function (t, r) {
      const n = v(this, ft).indexOf(t);
      n !== -1 && (q(this, bt, UC(v(this, bt), n, r)), ie(this, it, _c).call(this));
    }),
    (_c = function () {
      var t;
      if (this.hasListeners()) {
        const r = v(this, Cr),
          n = ie(this, it, wc).call(
            this,
            v(this, bt),
            (t = v(this, Ln)) == null ? void 0 : t.combine
          );
        r !== n &&
          je.batch(() => {
            this.listeners.forEach((s) => {
              s(v(this, bt));
            });
          });
      }
    }),
    Df),
  qB = class extends ni {
    constructor(e, t) {
      super(e, t);
    }
    bindMethods() {
      super.bindMethods(),
        (this.fetchNextPage = this.fetchNextPage.bind(this)),
        (this.fetchPreviousPage = this.fetchPreviousPage.bind(this));
    }
    setOptions(e, t) {
      super.setOptions({ ...e, behavior: Pa() }, t);
    }
    getOptimisticResult(e) {
      return (e.behavior = Pa()), super.getOptimisticResult(e);
    }
    fetchNextPage(e) {
      return this.fetch({ ...e, meta: { fetchMore: { direction: 'forward' } } });
    }
    fetchPreviousPage(e) {
      return this.fetch({ ...e, meta: { fetchMore: { direction: 'backward' } } });
    }
    createResult(e, t) {
      var y, p;
      const { state: r } = e,
        n = super.createResult(e, t),
        { isFetching: s, isRefetching: i, isError: o, isRefetchError: c } = n,
        d = (p = (y = r.fetchMeta) == null ? void 0 : y.fetchMore) == null ? void 0 : p.direction,
        l = o && d === 'forward',
        f = s && d === 'forward',
        u = o && d === 'backward',
        h = s && d === 'backward';
      return {
        ...n,
        fetchNextPage: this.fetchNextPage,
        fetchPreviousPage: this.fetchPreviousPage,
        hasNextPage: LC(t, r.data),
        hasPreviousPage: MC(t, r.data),
        isFetchNextPageError: l,
        isFetchingNextPage: f,
        isFetchPreviousPageError: u,
        isFetchingPreviousPage: h,
        isRefetchError: c && !l && !u,
        isRefetching: i && !f && !h,
      };
    }
  },
  kr,
  Dr,
  st,
  Jt,
  tr,
  la,
  $c,
  Of,
  jC =
    ((Of = class extends sn {
      constructor(t, r) {
        super();
        Y(this, tr);
        Y(this, kr);
        Y(this, Dr);
        Y(this, st);
        Y(this, Jt);
        q(this, kr, t), this.setOptions(r), this.bindMethods(), ie(this, tr, la).call(this);
      }
      bindMethods() {
        (this.mutate = this.mutate.bind(this)), (this.reset = this.reset.bind(this));
      }
      setOptions(t) {
        var n;
        const r = this.options;
        (this.options = v(this, kr).defaultMutationOptions(t)),
          Ia(this.options, r) ||
            v(this, kr)
              .getMutationCache()
              .notify({ type: 'observerOptionsUpdated', mutation: v(this, st), observer: this }),
          r != null &&
          r.mutationKey &&
          this.options.mutationKey &&
          tn(r.mutationKey) !== tn(this.options.mutationKey)
            ? this.reset()
            : ((n = v(this, st)) == null ? void 0 : n.state.status) === 'pending' &&
              v(this, st).setOptions(this.options);
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() || (t = v(this, st)) == null || t.removeObserver(this);
      }
      onMutationUpdate(t) {
        ie(this, tr, la).call(this), ie(this, tr, $c).call(this, t);
      }
      getCurrentResult() {
        return v(this, Dr);
      }
      reset() {
        var t;
        (t = v(this, st)) == null || t.removeObserver(this),
          q(this, st, void 0),
          ie(this, tr, la).call(this),
          ie(this, tr, $c).call(this);
      }
      mutate(t, r) {
        var n;
        return (
          q(this, Jt, r),
          (n = v(this, st)) == null || n.removeObserver(this),
          q(this, st, v(this, kr).getMutationCache().build(v(this, kr), this.options)),
          v(this, st).addObserver(this),
          v(this, st).execute(t)
        );
      }
    }),
    (kr = new WeakMap()),
    (Dr = new WeakMap()),
    (st = new WeakMap()),
    (Jt = new WeakMap()),
    (tr = new WeakSet()),
    (la = function () {
      var r;
      const t = ((r = v(this, st)) == null ? void 0 : r.state) ?? am();
      q(this, Dr, {
        ...t,
        isPending: t.status === 'pending',
        isSuccess: t.status === 'success',
        isError: t.status === 'error',
        isIdle: t.status === 'idle',
        mutate: this.mutate,
        reset: this.reset,
      });
    }),
    ($c = function (t) {
      je.batch(() => {
        var r, n, s, i, o, c, d, l;
        if (v(this, Jt) && this.hasListeners()) {
          const f = v(this, Dr).variables,
            u = v(this, Dr).context;
          (t == null ? void 0 : t.type) === 'success'
            ? ((n = (r = v(this, Jt)).onSuccess) == null || n.call(r, t.data, f, u),
              (i = (s = v(this, Jt)).onSettled) == null || i.call(s, t.data, null, f, u))
            : (t == null ? void 0 : t.type) === 'error' &&
              ((c = (o = v(this, Jt)).onError) == null || c.call(o, t.error, f, u),
              (l = (d = v(this, Jt)).onSettled) == null || l.call(d, void 0, t.error, f, u));
        }
        this.listeners.forEach((f) => {
          f(v(this, Dr));
        });
      });
    }),
    Of);
function cm(e) {
  return e;
}
function HC(e) {
  return {
    mutationKey: e.options.mutationKey,
    state: e.state,
    ...(e.options.scope && { scope: e.options.scope }),
    ...(e.meta && { meta: e.meta }),
  };
}
function qC(e, t) {
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
function VC(e) {
  return e.state.isPaused;
}
function GC(e) {
  return e.state.status === 'success';
}
function zC(e, t = {}) {
  var c, d, l;
  const r =
      t.shouldDehydrateMutation ??
      ((c = e.getDefaultOptions().dehydrate) == null ? void 0 : c.shouldDehydrateMutation) ??
      VC,
    n = e
      .getMutationCache()
      .getAll()
      .flatMap((f) => (r(f) ? [HC(f)] : [])),
    s =
      t.shouldDehydrateQuery ??
      ((d = e.getDefaultOptions().dehydrate) == null ? void 0 : d.shouldDehydrateQuery) ??
      GC,
    i =
      t.serializeData ??
      ((l = e.getDefaultOptions().dehydrate) == null ? void 0 : l.serializeData) ??
      cm,
    o = e
      .getQueryCache()
      .getAll()
      .flatMap((f) => (s(f) ? [qC(f, i)] : []));
  return { mutations: n, queries: o };
}
function KC(e, t, r) {
  var d, l;
  if (typeof t != 'object' || t === null) return;
  const n = e.getMutationCache(),
    s = e.getQueryCache(),
    i =
      ((d = r == null ? void 0 : r.defaultOptions) == null ? void 0 : d.deserializeData) ??
      ((l = e.getDefaultOptions().hydrate) == null ? void 0 : l.deserializeData) ??
      cm,
    o = t.mutations || [],
    c = t.queries || [];
  o.forEach(({ state: f, ...u }) => {
    var h, b;
    n.build(
      e,
      {
        ...((h = e.getDefaultOptions().hydrate) == null ? void 0 : h.mutations),
        ...((b = r == null ? void 0 : r.defaultOptions) == null ? void 0 : b.mutations),
        ...u,
      },
      f
    );
  }),
    c.forEach(({ queryKey: f, state: u, queryHash: h, meta: b, promise: y }) => {
      var S, _;
      let p = s.get(h);
      const x = u.data === void 0 ? u.data : i(u.data);
      if (p) {
        if (p.state.dataUpdatedAt < u.dataUpdatedAt) {
          const { fetchStatus: m, ...I } = u;
          p.setState({ ...I, data: x });
        }
      } else
        p = s.build(
          e,
          {
            ...((S = e.getDefaultOptions().hydrate) == null ? void 0 : S.queries),
            ...((_ = r == null ? void 0 : r.defaultOptions) == null ? void 0 : _.queries),
            queryKey: f,
            queryHash: h,
            meta: b,
          },
          { ...u, data: x, fetchStatus: 'idle' }
        );
      if (y) {
        const m = Promise.resolve(y).then(i);
        p.fetch(void 0, { initialPromise: m });
      }
    });
}
var lm = ye.createContext(void 0),
  si = (e) => {
    const t = ye.useContext(lm);
    if (e) return e;
    if (!t) throw new Error('No QueryClient set, use QueryClientProvider to set one');
    return t;
  },
  WC = ({ client: e, children: t }) => (
    ye.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    ys.jsx(lm.Provider, { value: e, children: t })
  ),
  um = ye.createContext(!1),
  fm = () => ye.useContext(um),
  QC = um.Provider;
function YC() {
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
var ZC = ye.createContext(YC()),
  dm = () => ye.useContext(ZC);
function hm(e, t) {
  return typeof e == 'function' ? e(...t) : !!e;
}
function xm() {}
var pm = (e, t) => {
    (e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1));
  },
  bm = (e) => {
    ye.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  ym = ({ result: e, errorResetBoundary: t, throwOnError: r, query: n }) =>
    e.isError && !t.isReset() && !e.isFetching && n && hm(r, [e.error, n]),
  mm = (e) => {
    e.suspense &&
      (e.staleTime === void 0 && (e.staleTime = 1e3),
      typeof e.gcTime == 'number' && (e.gcTime = Math.max(e.gcTime, 1e3)));
  },
  gm = (e, t) => e.isLoading && e.isFetching && !t,
  Ac = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending,
  Ca = (e, t, r) =>
    t.fetchOptimistic(e).catch(() => {
      r.clearReset();
    });
function VB({ queries: e, ...t }, r) {
  const n = si(r),
    s = fm(),
    i = dm(),
    o = ye.useMemo(
      () =>
        e.map((y) => {
          const p = n.defaultQueryOptions(y);
          return (p._optimisticResults = s ? 'isRestoring' : 'optimistic'), p;
        }),
      [e, n, s]
    );
  o.forEach((y) => {
    mm(y), pm(y, i);
  }),
    bm(i);
  const [c] = ye.useState(() => new FC(n, o, t)),
    [d, l, f] = c.getOptimisticResult(o, t.combine);
  ye.useSyncExternalStore(
    ye.useCallback((y) => (s ? () => {} : c.subscribe(je.batchCalls(y))), [c, s]),
    () => c.getCurrentResult(),
    () => c.getCurrentResult()
  ),
    ye.useEffect(() => {
      c.setQueries(o, t, { listeners: !1 });
    }, [o, t, c]);
  const h = d.some((y, p) => Ac(o[p], y))
    ? d.flatMap((y, p) => {
        const x = o[p];
        if (x) {
          const S = new ni(n, x);
          if (Ac(x, y)) return Ca(x, S, i);
          gm(y, s) && Ca(x, S, i);
        }
        return [];
      })
    : [];
  if (h.length > 0) throw Promise.all(h);
  const b = d.find((y, p) => {
    const x = o[p];
    return (
      x &&
      ym({
        result: y,
        errorResetBoundary: i,
        throwOnError: x.throwOnError,
        query: n.getQueryCache().get(x.queryHash),
      })
    );
  });
  if (b != null && b.error) throw b.error;
  return l(f());
}
function JC(e, t, r) {
  var f, u, h, b, y;
  const n = si(r),
    s = fm(),
    i = dm(),
    o = n.defaultQueryOptions(e);
  (u = (f = n.getDefaultOptions().queries) == null ? void 0 : f._experimental_beforeQuery) ==
    null || u.call(f, o),
    (o._optimisticResults = s ? 'isRestoring' : 'optimistic'),
    mm(o),
    pm(o, i),
    bm(i);
  const c = !n.getQueryCache().get(o.queryHash),
    [d] = ye.useState(() => new t(n, o)),
    l = d.getOptimisticResult(o);
  if (
    (ye.useSyncExternalStore(
      ye.useCallback(
        (p) => {
          const x = s ? () => {} : d.subscribe(je.batchCalls(p));
          return d.updateResult(), x;
        },
        [d, s]
      ),
      () => d.getCurrentResult(),
      () => d.getCurrentResult()
    ),
    ye.useEffect(() => {
      d.setOptions(o, { listeners: !1 });
    }, [o, d]),
    Ac(o, l))
  )
    throw Ca(o, d, i);
  if (
    ym({
      result: l,
      errorResetBoundary: i,
      throwOnError: o.throwOnError,
      query: n.getQueryCache().get(o.queryHash),
    })
  )
    throw l.error;
  if (
    ((b = (h = n.getDefaultOptions().queries) == null ? void 0 : h._experimental_afterQuery) ==
      null || b.call(h, o, l),
    o.experimental_prefetchInRender && !en && gm(l, s))
  ) {
    const p = c
      ? Ca(o, d, i)
      : (y = n.getQueryCache().get(o.queryHash)) == null
        ? void 0
        : y.promise;
    p == null ||
      p.catch(xm).finally(() => {
        d.updateResult();
      });
  }
  return o.notifyOnChangeProps ? l : d.trackResult(l);
}
function XC(e, t) {
  return JC(e, ni, t);
}
function GB(e, t) {
  const r = si(t),
    [n] = ye.useState(() => new jC(r, e));
  ye.useEffect(() => {
    n.setOptions(e);
  }, [n, e]);
  const s = ye.useSyncExternalStore(
      ye.useCallback((o) => n.subscribe(je.batchCalls(o)), [n]),
      () => n.getCurrentResult(),
      () => n.getCurrentResult()
    ),
    i = ye.useCallback(
      (o, c) => {
        n.mutate(o, c).catch(xm);
      },
      [n]
    );
  if (s.error && hm(n.options.throwOnError, [s.error])) throw s.error;
  return { ...s, mutate: i, mutateAsync: s.mutate };
}
var ek = ['added', 'removed', 'updated'];
function Qu(e) {
  return ek.includes(e);
}
async function tk({
  queryClient: e,
  persister: t,
  maxAge: r = 1e3 * 60 * 60 * 24,
  buster: n = '',
  hydrateOptions: s,
}) {
  try {
    const i = await t.restoreClient();
    if (i)
      if (i.timestamp) {
        const o = Date.now() - i.timestamp > r,
          c = i.buster !== n;
        o || c ? t.removeClient() : KC(e, i.clientState, s);
      } else t.removeClient();
  } catch {
    t.removeClient();
  }
}
async function Yu({ queryClient: e, persister: t, buster: r = '', dehydrateOptions: n }) {
  const s = { buster: r, timestamp: Date.now(), clientState: zC(e, n) };
  await t.persistClient(s);
}
function rk(e) {
  const t = e.queryClient.getQueryCache().subscribe((n) => {
      Qu(n.type) && Yu(e);
    }),
    r = e.queryClient.getMutationCache().subscribe((n) => {
      Qu(n.type) && Yu(e);
    });
  return () => {
    t(), r();
  };
}
var zB = ({ client: e, children: t, persistOptions: r, onSuccess: n, ...s }) => {
  const [i, o] = ye.useState(!0),
    c = ye.useRef({ persistOptions: r, onSuccess: n }),
    d = ye.useRef(!1);
  return (
    ye.useEffect(() => {
      c.current = { persistOptions: r, onSuccess: n };
    }),
    ye.useEffect(() => {
      const l = { ...c.current.persistOptions, queryClient: e };
      return (
        d.current ||
          ((d.current = !0),
          o(!0),
          tk(l).then(async () => {
            var f, u;
            try {
              await ((u = (f = c.current).onSuccess) == null ? void 0 : u.call(f));
            } finally {
              o(!1);
            }
          })),
        i ? void 0 : rk(l)
      );
    }, [e, i]),
    ys.jsx(WC, { client: e, ...s, children: ys.jsx(QC, { value: i, children: t }) })
  );
};
function nk(e, t) {
  const r = y4(),
    n = ye.useMemo(() => {
      if (r) {
        const s =
            (e == null ? void 0 : e.refetchInterval) !== void 0 &&
            (e == null ? void 0 : e.refetchInterval) !== !1,
          i = (e == null ? void 0 : e.enabled) === !1;
        if (s && !i) return { ...e, refetchInterval: !1 };
      }
      return e;
    }, [r, e]);
  return XC(n, t);
}
var Ne = ((e) => (
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
))(Ne || {});
const sk = '__STORAGE_RESET_KEY__';
Ne.AuthEnabled,
  Ne.BalanceHiddenStatus,
  Ne.BuyFormValues,
  Ne.CustomGasControls,
  Ne.DappBrowserBookmarks,
  Ne.DeviceId,
  Ne.FeatureFlags,
  Ne.FeatureFlagOverrides,
  Ne.LatestCleanedStorageVersion,
  Ne.LockTimerMs,
  Ne.MaxWalletIndex,
  Ne.OnboardingDone,
  Ne.OwnerToHiddenMints,
  Ne.PendingTransactions,
  Ne.PriceMap,
  Ne.UserExplorerPreferenceV2,
  Ne.UserRecentAddresses,
  Ne.UserSavedAddresses,
  Ne.UserTrustedApps,
  Ne.UserWhitelistSubdomains,
  Ne.UserWhitelistedOrigins;
const Ic = ye.createContext(void 0);
function ak() {
  return ye.useContext(Ic);
}
class ik {
  constructor(t) {
    F(this, 'value');
    this.value = t;
  }
  deref() {
    return this.value;
  }
}
const ok = typeof WeakRef == 'function' ? WeakRef : ik;
let Js;
var Tc;
(function (e) {
  (e.StartUpdate = 'StartUpdate'),
    (e.EndUpdate = 'EndUpdate'),
    (e.StartLoading = 'StartLoading'),
    (e.EndLoading = 'EndLoading'),
    (e.Connected = 'Connected'),
    (e.Disconnected = 'Disconnected'),
    (e.ConsumeState = 'ConsumeState');
})(Tc || (Tc = {}));
var Zu;
(function (e) {
  (e.State = 'state'), (e.Reactive = 'reactive'), (e.Watcher = 'watcher');
})(Zu || (Zu = {}));
const { log: Ju, floor: Xu, imul: Ke, abs: ck } = Math;
function Pt(e, t = 0) {
  let r = t ^ e.length;
  const n = 3432918353,
    s = 461845907;
  let i = 0;
  for (; i + 4 <= e.length; ) {
    let c =
      (e.charCodeAt(i) & 255) |
      ((e.charCodeAt(i + 1) & 255) << 8) |
      ((e.charCodeAt(i + 2) & 255) << 16) |
      ((e.charCodeAt(i + 3) & 255) << 24);
    (c = Ke(c, n)),
      (c = (c << 15) | (c >>> 17)),
      (c = Ke(c, s)),
      (r ^= c),
      (r = (r << 13) | (r >>> 19)),
      (r = Ke(r, 5) + 3864292196),
      (i += 4);
  }
  let o = 0;
  switch (e.length & 3) {
    case 3:
      o ^= (e.charCodeAt(i + 2) & 255) << 16;
    case 2:
      o ^= (e.charCodeAt(i + 1) & 255) << 8;
    case 1:
      (o ^= e.charCodeAt(i) & 255),
        (o = Ke(o, n)),
        (o = (o << 15) | (o >>> 17)),
        (o = Ke(o, s)),
        (r ^= o);
  }
  return (
    (r ^= e.length),
    (r ^= r >>> 16),
    (r = Ke(r, 2246822507)),
    (r ^= r >>> 13),
    (r = Ke(r, 3266489909)),
    (r ^= r >>> 16),
    r >>> 0
  );
}
function lk(e, t = 0) {
  e = ck(e);
  let r = t;
  const n = 3432918353,
    s = 461845907;
  for (; e >= 4294967295; ) {
    let o = e & 4294967295;
    (e = Xu(e / 4294967296)),
      (o = Ke(o, n)),
      (o = (o << 15) | (o >>> 17)),
      (o = Ke(o, s)),
      (r ^= o),
      (r = (r << 13) | (r >>> 19)),
      (r = Ke(r, 5) + 3864292196);
  }
  if (e > 0) {
    let o = e & 4294967295;
    (o = Ke(o, n)), (o = (o << 15) | (o >>> 17)), (o = Ke(o, s)), (r ^= o);
  }
  const i = e === 0 ? 1 : Xu(Ju(e) / Ju(256)) + 1;
  return (
    (r ^= i),
    (r ^= r >>> 16),
    (r = Ke(r, 2246822507)),
    (r ^= r >>> 13),
    (r = Ke(r, 3266489909)),
    (r ^= r >>> 16),
    r >>> 0
  );
}
function D0(e) {
  let t = 7;
  const r = 3432918353,
    n = 461845907;
  for (const s of e) {
    let i = ka(s);
    (i = Ke(i, r)),
      (i = (i << 15) | (i >>> 17)),
      (i = Ke(i, n)),
      (t ^= i),
      (t = (t << 13) | (t >>> 19)),
      (t = Ke(t, 5) + 3864292196);
  }
  return (
    (t ^= e.length),
    (t ^= t >>> 16),
    (t = Ke(t, 2246822507)),
    (t ^= t >>> 13),
    (t = Ke(t, 3266489909)),
    (t ^= t >>> 16),
    t >>> 0
  );
}
function uk(e) {
  let t = pk;
  const r = Object.keys(e);
  for (const n of r) t += ka(n) ^ ka(e[n]);
  return t >>> 0;
}
const fk = Pt('undefined', 0),
  dk = Pt('null', 1),
  hk = Pt('true', 2),
  xk = Pt('false', 3);
Pt('array', 7);
const pk = Pt('object', 8),
  bk = Object.getPrototypeOf,
  yk = new Map([
    [Object.prototype, uk],
    [Array.prototype, D0],
  ]);
function ka(e, t = []) {
  switch (typeof e) {
    case 'undefined':
      return fk;
    case 'boolean':
      return e ? hk : xk;
    case 'number':
      return Pt(String(e), 4);
    case 'string':
      return Pt(e, 5);
    case 'bigint':
      return Pt(e.toString(), 6);
    case 'object': {
      if (e === null) return dk;
      const r = t.indexOf(e);
      if (r !== -1) return Pt(String(r), 11);
      const n = yk.get(bk(e));
      if (n) {
        t.push(e);
        const s = n(e);
        return t.pop(), s;
      }
      return Pc(e);
    }
    case 'function':
      return Pc(e);
    case 'symbol':
      return Pt(e.toString(), 10);
  }
}
const ef = new WeakMap();
let mk = 1;
function Pc(e) {
  let t = ef.get(e);
  return t === void 0 && ((t = lk(mk++, 9)), ef.set(e, t)), t;
}
const gk = D0([]);
function vk(e, t) {
  return Pc(e) ^ (t.length > 0 ? D0(t) : gk);
}
const wk = (e, t) => e === t,
  Sk = () => !1,
  Cc = (e) => (e === !1 ? Sk : (e ?? wk));
class vm {
  constructor(t, r, n, s, i, o) {
    F(this, 'flags');
    F(this, 'scope');
    F(this, 'subs', new Map());
    F(this, 'deps', new Map());
    F(this, 'ref', new ok(this));
    F(this, 'equals');
    F(this, 'dirtyHead');
    F(this, 'updatedCount', 0);
    F(this, 'computedCount', 0);
    F(this, 'watchCount', 0);
    F(this, '_listeners', null);
    F(this, 'compute');
    F(this, 'args');
    F(this, 'value');
    F(this, 'tracerMeta');
    (this.flags = (t ? 4 : 0) | 2),
      (this.scope = i),
      (this.compute = r),
      (this.args = n),
      (this.equals = Cc(o == null ? void 0 : o.equals)),
      (this.value = o == null ? void 0 : o.initValue);
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
    return km(this);
  }
  addListener(t) {
    const { current: r } = this.listeners;
    return (
      r.has(t) || (this._isListener || (this.watchCount++, (this.flags |= 8)), Am(this), r.add(t)),
      () => {
        r.has(t) && (r.delete(t), r.size === 0 && (Tm(this), (this.flags &= -9)));
      }
    );
  }
  addListenerLazy() {
    return (
      this._isListener || (this.watchCount++, (this.flags |= 8)), this.listeners.cachedBoundAdd
    );
  }
}
const Ek = (e) => {
    const { listeners: t } = e;
    if (t === null) return;
    const { current: r } = t;
    for (const n of r) n();
  },
  O0 = (e) => (e.flags & 4) !== 0;
function wm(e, t = [], r, n, s, i = !1) {
  return new vm(i, e, t, r, n, s);
}
function kc(e) {
  const t = e._state;
  t !== 2 && ((e._state = 2), t !== 3 && Dc(e));
}
function Dc(e) {
  if (Se === e)
    throw new Error(
      'A signal was dirtied after it was consumed by the current function. This can cause race conditions and infinite rerenders and is not allowed.'
    );
  O0(e) ? e.watchCount > 0 && Im(e) : (e._isListener && Am(e), Sm(e.subs), (e.subs = new Map()));
}
function Sm(e) {
  for (const [t, r] of e) {
    const n = t.deref();
    if (n === void 0 || n.computedCount !== r.consumedAt) continue;
    const s = n._state;
    switch (s) {
      case 0:
        (n._state = 3), (n.dirtyHead = r), (r.nextDirty = void 0), Dc(n);
        break;
      case 1:
      case 3: {
        let i = n.dirtyHead;
        const o = r.ord;
        if (i.ord > o) (n.dirtyHead = r), (r.nextDirty = i), s === 1 && ((n._state = 3), Dc(n));
        else {
          let c = i.nextDirty;
          for (; c !== void 0 && c.ord < o; ) (i = c), (c = i.nextDirty);
          (r.nextDirty = c), (i.nextDirty = r);
        }
        break;
      }
    }
  }
}
let _k = 0;
class $k {
  constructor(t, r = (s, i) => s === i, n = 'state') {
    F(this, '_value');
    F(this, '_equals');
    F(this, '_subs', new Map());
    F(this, '_desc');
    F(this, '_id');
    F(this, '_listeners', null);
    (this._value = t), (this._equals = r), (this._id = _k++), (this._desc = `${n}${this._id}`);
  }
  get() {
    return Se !== void 0 ? (this._subs.set(Se.ref, Se.computedCount), this._value) : Mk(this);
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
    for (const [s, i] of r.entries()) {
      const o = s.deref();
      o === void 0 || i !== o.computedCount || kc(o);
    }
    (this._subs = new Map()), Pm(this);
  }
  addListener(t) {
    let r = this._listeners;
    return r === null && (this._listeners = r = new Set()), r.add(t), () => r.delete(t);
  }
}
function Ak(e) {
  const t = e._listeners;
  if (t !== null) for (const r of t) r();
}
const Ik = () => !1;
function Em(e, t) {
  const r =
    (t == null ? void 0 : t.equals) === !1
      ? Ik
      : ((t == null ? void 0 : t.equals) ?? ((n, s) => n === s));
  return new $k(e, r, t == null ? void 0 : t.desc);
}
function _m(e) {
  const { watchCount: t } = e,
    r = t + 1;
  if (((e.watchCount = r), !(t > 0))) {
    for (const n of e.deps.keys()) _m(n);
    O0(e) && Fn(e);
  }
}
function $m(e, t = 1) {
  var s;
  const { watchCount: r } = e,
    n = Math.max(r - t, 0);
  if (((e.watchCount = n), !(n > 0))) {
    for (const i of e.deps.keys()) $m(i);
    O0(e) && ((s = e.value) == null || s.call(e));
  }
}
let tf = !1,
  ua = [],
  fa = [],
  Da = new Map(),
  Oc = [],
  rf = [];
const Tk = () => Promise.resolve();
let Oa = null;
const ai = (e) => {
    if (Oa) return;
    let t;
    (Oa = { promise: new Promise((n) => (t = n)), resolve: t }), Lc(Pk);
  },
  Am = (e) => {
    ua.push(e), ai();
  },
  Im = (e) => {
    fa.push(e), ai();
  },
  Tm = (e) => {
    const t = Da.get(e) ?? 0;
    Da.set(e, t + 1), ai();
  },
  Pm = (e) => {
    Oc.push(e), ai();
  },
  Pk = async () => {
    const e = Oa;
    for (; tf || fa.length > 0 || ua.length > 0; ) {
      tf = !1;
      const t = fa;
      fa = [];
      for (const n of t) Fn(n);
      const r = ua;
      ua = [];
      for (const n of r) Bk(n);
      await Tk();
    }
    (Oa = null),
      Mc(() => {
        for (const [t, r] of Da) $m(t, r);
        for (const t of Oc) t instanceof vm ? Ek(t) : Ak(t);
        for (const t of rf) t.flush();
        Da.clear(), (Oc = []), (rf = []);
      }),
      e.resolve();
  };
let nf = 0;
function Bc(e, t, r, n, s) {
  return e === void 0
    ? { type: t, dep: r, ord: nf++, updatedAt: n, consumedAt: s, nextDirty: void 0 }
    : ((e.ord = nf++), (e.updatedAt = n), (e.consumedAt = s), (e.nextDirty = void 0), e);
}
function Ck(e, t) {
  let r = e.dirtyHead;
  if (r === void 0) return;
  if (r.dep === t) return (e.dirtyHead = r.nextDirty), r;
  let n = r.nextDirty;
  for (; n !== void 0; ) {
    if (n.dep === t) return (r.nextDirty = n.nextDirty), n;
    (r = n), (n = r.nextDirty);
  }
}
const kk = (function* () {})().constructor;
function Cm(e) {
  return e.constructor === kk;
}
function B0(e) {
  return e.constructor === Promise;
}
function L0(e) {
  return e.constructor === Br;
}
class Br {
  constructor() {
    F(this, '_value');
    F(this, '_error');
    F(this, '_flags', 0);
    F(this, '_signal');
    F(this, '_equals');
    F(this, '_promise');
    F(this, '_pending', []);
    F(this, '_stateSubs', new Map());
    F(this, '_awaitSubs', new Map());
    F(this, '_version', Em(0));
    F(this, '_boundRun');
    F(this, 'run', this._run.bind(this));
  }
  static createPromise(t, r, n) {
    const s = new Br();
    return (
      (s._signal = r),
      (s._equals = (r == null ? void 0 : r.equals) ?? ((i, o) => i === o)),
      s._initFlags(1, n),
      t && s._setPromise(t),
      s
    );
  }
  static createSubscription(t, r, n) {
    const s = new Br(),
      i = n == null ? void 0 : n.initValue;
    let o = !1,
      c;
    const d = () => {
        var u;
        typeof c == 'function' ? c() : c !== void 0 && ((u = c.unsubscribe) == null || u.call(c));
        const f = s._signal;
        (f.subs = new Map()), (f._state = 2), (f.watchCount = 0), (o = !1), (c = void 0);
      },
      l = {
        get: () => s._value,
        set: (f) => {
          f !== null && typeof f == 'object' && B0(f) ? s._setPromise(f) : s._setValue(f);
        },
        setError: (f) => {
          s._setError(f);
        },
      };
    return (
      (s._signal = wm(
        () => {
          var f;
          return (
            o === !1
              ? ((c = t(l)), (o = !0))
              : typeof c == 'function' || c === void 0
                ? (c == null || c(), (c = t(l)))
                : (f = c.update) == null || f.call(c),
            d
          );
        },
        [],
        void 0,
        r,
        n,
        !0
      )),
      (s._equals = Cc(n == null ? void 0 : n.equals)),
      s._initFlags(129, i),
      s
    );
  }
  static createTask(t, r, n) {
    const s = new Br(),
      i = n == null ? void 0 : n.initValue;
    return (
      (s._signal = (...o) =>
        qk(r, () => {
          const c = t(...o);
          return typeof c == 'object' && c !== null && Cm(c) ? Dm(c, void 0) : c;
        })),
      (s._equals = Cc(n == null ? void 0 : n.equals)),
      s._initFlags(64, i),
      s
    );
  }
  _initFlags(t, r) {
    let n = t;
    r !== void 0 && (n |= 8), (this._flags = n), (this._value = r);
  }
  _consumeFlags(t) {
    if (Se === void 0) return;
    this._flags & 128 && this._connect();
    const r = Se.ref,
      n = this._stateSubs,
      s = n.get(r) ?? 0;
    n.set(r, s | t);
  }
  _connect() {
    const t = this._signal;
    if ((Se == null ? void 0 : Se.watchCount) === 0) {
      const { ref: r, computedCount: n, deps: s } = Se,
        i = s.get(t);
      if ((i == null ? void 0 : i.consumedAt) !== n) {
        const o = Bc(i, 0, t, t.updatedCount, n);
        t.subs.set(r, o), s.set(t, o);
      }
    } else km(t);
  }
  _setFlags(t, r = 0, n = 0) {
    const s = this._flags,
      i = (s & ~r) | t,
      o = (s ^ i) | n;
    if (((this._flags = i), o === 0)) return;
    const c = this._stateSubs;
    for (const [d, l] of c)
      if (l & o) {
        const f = d.deref();
        f && kc(f), c.delete(d);
      }
    this._version.update((d) => d + 1);
  }
  _setPending() {
    this._setFlags(1);
  }
  async _setPromise(t) {
    this._promise = t;
    const r = this._flags;
    let n = this._awaitSubs;
    r & 1 || (this._setPending(), Sm(n), (this._awaitSubs = n = new Map()));
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
      i = 0;
    (!(n & 8) || this._equals(s, t) === !1) && ((this._value = s = t), (i = 16)),
      n & 2 && ((i = 32), (this._error = void 0)),
      this._scheduleSubs(r, i !== 0),
      this._setFlags(12, 3, i);
    for (const { ref: o, edge: c, resolve: d } of this._pending)
      d == null || d(s), o !== void 0 && r.set(o, c);
    this._pending = [];
  }
  _setError(t, r = this._awaitSubs) {
    let n = this._error,
      s = 0;
    n !== t && ((this._error = n = t), (s = 32)),
      this._scheduleSubs(r, s !== 0),
      this._setFlags(2, 5, s);
    for (const { ref: i, edge: o, reject: c } of this._pending)
      c == null || c(n), i !== void 0 && r.set(i, o);
    this._pending = [];
  }
  _scheduleSubs(t, r) {
    const n = r ? 2 : 3;
    for (const s of t.keys()) {
      const i = s.deref();
      i !== void 0 && ((i._state = n), Im(i));
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
    else if (n) kc(n);
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
    return new Promise((s, i) => {
      let o, c;
      if (Se !== void 0) {
        n & 128 && this._connect(), (o = Se.ref);
        const f = this._awaitSubs.get(o) ?? Ck(Se, this);
        c = Bc(f, 1, this, -1, Se.computedCount);
      }
      const d = t
          ? (f) => {
              try {
                const u = t(f);
                s(u);
              } catch (u) {
                i(u);
              }
            }
          : s,
        l = r
          ? (f) => {
              try {
                const u = r(f);
                s(u);
              } catch (u) {
                i(u);
              }
            }
          : i;
      n & 1
        ? this._pending.push({ ref: o, edge: c, resolve: d, reject: l })
        : (n & 4 ? d(this._value) : n & 2 && l(this._error), o && this._awaitSubs.set(o, c));
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
function Dk(e) {
  return e instanceof Br && (e._flags & 128) !== 0;
}
let Se;
function km(e) {
  if (Se !== void 0) {
    const { ref: t, computedCount: r, deps: n } = Se,
      s = n.get(e);
    if ((s == null ? void 0 : s.consumedAt) !== r) {
      s === void 0 && Se.watchCount > 0 && _m(e);
      const o = Fn(e),
        c = Bc(s, 0, e, o, r);
      e.subs.set(t, c), n.set(e, c);
    }
  } else Fn(e);
  return e.value;
}
function Fn(e) {
  let { ref: t, _state: r } = e;
  if (r < 2) return e.updatedCount;
  if (r === 3) {
    let n = e.dirtyHead;
    for (; n !== void 0; ) {
      if (n.type === 1) {
        const o = n.dep;
        if (o.isPending) {
          const c = e.value;
          return (
            c instanceof Br && c._setPending(),
            o._awaitSubs.set(t, n),
            (r = 1),
            (e.dirtyHead = n),
            e.updatedCount
          );
        }
        n = n.nextDirty;
        continue;
      }
      const s = n.dep,
        i = Fn(s);
      if ((s.subs.set(t, n), n.updatedAt !== i)) {
        (e.dirtyHead = n.nextDirty), (r = 2);
        break;
      }
      n = n.nextDirty;
    }
  }
  return r === 2 && Ok(e), (e._state = 0), (e.dirtyHead = void 0), e.updatedCount;
}
function Ok(e) {
  const t = Se,
    r = e.updatedCount,
    n = ++e.computedCount;
  try {
    Se = e;
    const s = r !== 0,
      i = e.value;
    let o = e.compute(...e.args),
      c = !1;
    if (
      (o !== null &&
        typeof o == 'object' &&
        (Cm(o) ? ((o = Dm(o, e)), (c = !0)) : B0(o) && (c = !0)),
      c)
    )
      if (
        (Js == null || Js.emit({ type: Tc.StartLoading, id: e.tracerMeta.id }),
        i !== null && typeof i == 'object' && L0(i))
      )
        i._setPromise(o);
      else {
        const d = s ? void 0 : i;
        (e.value = Br.createPromise(o, e, d)), (e.updatedCount = r + 1);
      }
    else (!s || !e.equals(i, o)) && ((e.value = o), (e.updatedCount = r + 1));
  } finally {
    Se = t;
    const { ref: s, deps: i } = e;
    for (const [o, c] of i) c.consumedAt !== n && (Tm(o), o.subs.delete(s), i.delete(o));
  }
}
function Bk(e, t = !1) {
  const r = e.listeners;
  t && (r === null || r.current.size === 0) && (e.watchCount++, (e.flags |= 8));
  let n = Fn(e);
  return r !== null && r.updatedAt !== n && ((r.updatedAt = n), Pm(e)), n;
}
function Dm(e, t) {
  function r(n) {
    return typeof n == 'object' && n !== null && (B0(n) || L0(n)) ? n : Promise.resolve(n);
  }
  return new Promise((n, s) => {
    function i(d) {
      d.done ? n(d.value) : r(d.value).then(o, c);
    }
    function o(d) {
      const l = Se;
      try {
        (Se = t), i(e.next(d));
      } catch (f) {
        s(f);
      } finally {
        Se = l;
      }
    }
    function c(d) {
      const l = Se;
      try {
        (Se = t), i(e.throw(d));
      } catch (f) {
        s(f);
      } finally {
        Se = l;
      }
    }
    i(e.next());
  });
}
let Lc = (e) => {
    setTimeout(() => {
      e();
    }, 0);
  },
  Mc = (e) => e(),
  Ba = () => {},
  Nc = (e) => e.get(),
  Rc = (e) => e.get();
function Lk(e) {
  return Se !== void 0 ? e.get() : Rc(e);
}
function Mk(e) {
  return Nc(e);
}
function Nk(e) {
  (Lc = e.scheduleFlush ?? Lc),
    (Mc = e.runBatch ?? Mc),
    (Ba = e.getFrameworkScope ?? Ba),
    (Nc = e.useStateSignal ?? Nc),
    (Rc = e.useDerivedSignal ?? Rc);
}
let Rk = 0;
class Uk {
  constructor(t, r) {
    F(this, 'defaultValue');
    F(this, '_key');
    F(this, '_description');
    (this.defaultValue = t),
      (this._description = r ?? `context:${Rk++}`),
      (this._key = Symbol(this._description));
  }
}
const Fk = (e, t) => new Uk(e, t);
class ii {
  constructor(t, r) {
    F(this, 'parentScope');
    F(this, 'contexts');
    F(this, 'children', new Map());
    F(this, 'signals', new Map());
    (this.parentScope = r),
      (this.contexts = Object.create((r == null ? void 0 : r.contexts) || null));
    for (const [n, s] of t) this.contexts[n._key] = s;
  }
  getChild(t) {
    const r = ka(t);
    let n = this.children.get(r);
    return n === void 0 && ((n = new ii(t, this)), this.children.set(r, n)), n;
  }
  getContext(t) {
    const r = t;
    return this.contexts[r._key];
  }
  get(t, r, n) {
    var c;
    const s = (c = n == null ? void 0 : n.paramKey) == null ? void 0 : c.call(n, ...r),
      i = vk(t, s ? [s] : r);
    let o = this.signals.get(i);
    return o === void 0 && ((o = wm(t, r, i, this, n)), this.signals.set(i, o)), o;
  }
}
let jk = new ii([]),
  ds;
const Hk = () => ds ?? (Se == null ? void 0 : Se.scope) ?? Ba() ?? jk,
  qk = (e, t) => {
    const r = ds;
    try {
      return (ds = e), t();
    } finally {
      ds = r;
    }
  },
  Vk = (e) => {
    const t = ds ?? (Se == null ? void 0 : Se.scope) ?? Ba();
    if (t === void 0)
      throw new Error(
        'useContext must be used within a signal hook, a withContext, or within a framework-specific context provider.'
      );
    return t.getContext(e) ?? e.defaultValue;
  };
function KB({ children: e, contexts: t, inherit: r = !0, root: n = !1 }) {
  const s = ye.useContext(Ic),
    i = new ii(t, r ? s : void 0);
  return ys.jsx(Ic.Provider, { value: i, children: e });
}
const Uc =
    cs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED ||
    cs.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE ||
    cs.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  Gk = !!Uc.ReactCurrentDispatcher,
  sf = Uc.ReactCurrentDispatcher || Uc;
function Om() {
  const e = Gk ? sf.current : sf.H;
  return !!e && e.useState !== e.useEffect;
}
function Bm(e) {
  return Om()
    ? ye.useSyncExternalStore(
        ye.useCallback((t) => e.addListener(t), [e]),
        () => e.peek(),
        () => e.peek()
      )
    : e.peek();
}
function Lm(e) {
  if (!Om()) return e.get();
  const t = ye.useSyncExternalStore(
    e.addListenerLazy(),
    () => e.get(),
    () => e.get()
  );
  return typeof t == 'object' && t !== null && L0(t) && (Dk(t) && Lm(t._signal), Bm(t._version)), t;
}
function zk() {
  Nk({ useDerivedSignal: Lm, useStateSignal: Bm, getFrameworkScope: ak });
}
const Kk = Em;
function WB(e, t) {
  return (...r) => {
    const s = Hk().get(e, r, t);
    return Lk(s);
  };
}
const Wk = () => {
  const e = Kk(void 0, { equals: () => !1 });
  return { consume: () => e.get(), notify: () => e.set(void 0) };
};
zk();
const Qk = Fk(null);
function Yk() {
  const e = Vk(Qk);
  if (!e)
    throw new Error('useStorage must be used within a ContextProvider with StorageContext set');
  return e;
}
class Zk {
  constructor(t) {
    F(this, 'notifierCache', new Map());
    (this.storage = t),
      t.subscribe((r) => {
        r === sk
          ? this.notifierCache.forEach((n) => {
              n.notify();
            })
          : this.getNotifier(r).notify();
      });
  }
  getNotifier(t) {
    let r = this.notifierCache.get(t);
    return r || ((r = Wk()), this.notifierCache.set(t, r)), r;
  }
  async get(t) {
    return this.getNotifier(t).consume(), this.storage.get(t);
  }
  async set(t, r) {
    await this.storage.set(t, r), this.getNotifier(t).notify();
  }
}
const af = new WeakMap(),
  QB = () => {
    const e = Yk();
    let t = af.get(e);
    return t === void 0 && ((t = new Zk(e)), af.set(e, t)), t;
  };
var He = ((e) => (
    (e.Debug = 'debug'), (e.Fatal = 'fatal'), (e.Error = 'error'), (e.Info = 'info'), e
  ))(He || {}),
  vr = ((e) => (
    (e.PD = 'PD'),
    (e.DX = 'DX'),
    (e.IO = 'IO'),
    (e.PL = 'PL'),
    (e.TRA = 'TRA'),
    (e.SOC = 'SOC'),
    (e.CASH = 'CASH'),
    e
  ))(vr || {}),
  ae = ((e) => (
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
  ))(ae || {});
const Fc = {
    init: async (e) => {},
    captureError: (e, t) => {},
    captureMessage: (e, t, r = He.Info) => {},
    addBreadcrumb: (e, t, r) => {},
    setUser: async (e) => {},
    setTags: async (e) => {},
    startSpan: (e, t) => {
      const r = t();
      return Promise.resolve(r);
    },
    startInactiveSpan: (e) => {},
  },
  jn = (e) => {
    switch (e) {
      case ae.Collectibles:
      case ae.MagicEden:
      case ae.Fungibles:
      case ae.Staking:
      case ae.Swapper:
      case ae.Prices:
      case ae.WebTokenPage:
      case ae.WebExplorePage:
      case ae.Tokens:
        return vr.PD;
      case ae.AutoConfirm:
      case ae.DeepLinks:
      case ae.DappBrowser:
      case ae.DappRegistry:
      case ae.Network:
      case ae.Transaction:
      case ae.Provider:
      case ae.History:
      case ae.TrustedApps:
      case ae.Simulation:
      case ae.MobileEmbedded:
        return vr.DX;
      case ae.WebAppPage:
      case ae.Account:
      case ae.Auth:
      case ae.ActionBanner:
      case ae.Authentication:
      case ae.Ledger:
      case ae.Seedless:
      case ae.Settings:
      case ae.OnRamp:
      case ae.Migration:
      case ae.MobileWalletAdapter:
      case ae.Generic:
      case ae.StartUp:
      case ae.WebPortal:
        return vr.IO;
      case ae.BugReporter:
      case ae.Storage:
      case ae.FileLogger:
      case ae.FeatureFlags:
      case ae.Performance:
        return vr.PL;
      case ae.Safeguard:
        return vr.TRA;
      case ae.Profiles:
      case ae.Feed:
      case ae.FeedNotifications:
      case ae.WebUserPage:
        return vr.SOC;
      case ae.CashAccount:
      case ae.CashTransfer:
        return vr.CASH;
    }
  },
  Jk = {
    init: async ({ datadog: e }) => {
      if (e.enabled) {
        if (!e.clientToken) throw new Error('[DatadogProvider#init] Missing client token');
        ea.init({
          applicationId: e.applicationId,
          clientToken: e.clientToken,
          service: e.service,
          version: sl,
          env: 'production',
          allowedTracingUrls: [/https?:\/\/([a-zA-Z0-9.-]+\.)?phantom\.app(\/|$)/],
          traceSampleRate: e.traceSampleRate,
          sessionSampleRate: e.sessionSampleRate,
          enablePrivacyForActionName: !0,
          silentMultipleInit: !0,
          trackAnonymousUser: !1,
        }),
          pn.init({
            clientToken: e.clientToken,
            service: e.service,
            env: 'production',
            forwardErrorsToLogs: !0,
            sessionSampleRate: e.sessionSampleRate,
            version: sl,
            silentMultipleInit: !0,
            trackAnonymousUser: !1,
          });
      }
    },
    captureError: (e, t) => {
      Ho(e.message, He.Error, { feature: t, team: jn(t) }, e);
    },
    captureMessage: (e, t, r = He.Info) => {
      Ho(e, r, { feature: t, team: jn(t) });
    },
    addBreadcrumb: (e, t, r, n = {}) => {
      Ho(t, r, { category: e, ...n });
    },
    setUser: async (e) => {
      pn.setUser(e), ea.setUser(e);
    },
    setTags: async (e) => {
      ea.setGlobalContext({ tags: e }), pn.setGlobalContext({ tags: e });
    },
    startSpan: (e, t) => {
      const r = t();
      return Promise.resolve(r);
    },
    startInactiveSpan: () => {},
  };
function Ho(e, t, r, n) {
  switch (((t === He.Error || t === He.Fatal) && ea.addError(n ?? e, r), t)) {
    case He.Fatal:
      !n && pn.logger.critical(e, { context: r });
      break;
    case He.Error:
      !n && pn.logger.error(e, { context: r });
      break;
    case He.Info:
      pn.logger.info(e, { context: r }, n);
      break;
    case He.Debug:
      break;
  }
}
function Xk() {
  return typeof document < 'u';
}
const Mm = Xk() ? Jk : Fc,
  eD = 'Error message ignored by logging middleware.',
  tD = (e) => ({
    beforeEvent: (...[t, r]) => {
      for (const n of e) if ((t instanceof Error ? t.message : t) === n) throw new Error(eD);
      return { value: t, ...(r.data ? { data: r.data } : {}) };
    },
    afterEvent: void 0,
  }),
  rD = 'Sensitive data detected by pki scanner. File logging blocked.',
  nD = ['seed', 'mnemonic', 'seedAndMnemonic', 'ObfuscatedBytes'],
  of = new RegExp(`(${nD.join('|')})`, 'mi'),
  M0 = {
    beforeEvent: (...[e, t]) => {
      const r = e instanceof Error ? e.message : e;
      if (of.test(r) || (t.data && of.test(JSON.stringify(t.data)))) throw new Error(rD);
      return { value: e, ...(t.data ? { data: t.data } : {}) };
    },
    afterEvent: void 0,
  },
  sD = ['premature close'],
  aD = tD(sD);
class rs extends Error {
  constructor(
    t = 'File logger uninitialized. Call fileLogger.init() before calling other functions.'
  ) {
    super(t);
  }
}
function iD(e = []) {
  let t = null;
  async function r({ provider: d }) {
    await d.init(), (t = { provider: d });
  }
  async function n(d) {
    if (!t) throw new rs();
    return t.provider.downloadLog(d);
  }
  async function s() {
    if (!t) throw new rs();
    return t.provider.getLogFilePaths();
  }
  async function i() {
    if (!t) throw new rs();
    return t.provider.getRecentLogs();
  }
  async function o(d) {
    if (!t) throw new rs();
    return t.provider.sendLogFilesByEmail(d);
  }
  function c(d, l, f, u) {
    if (!t) throw new rs();
    for (const h of e)
      if ((h == null ? void 0 : h.beforeEvent) !== void 0)
        try {
          h.beforeEvent(d, { featureTag: l, severity: f });
        } catch {
          return;
        }
    t.provider.write(d, l, f, u);
    for (const h of e)
      if ((h == null ? void 0 : h.afterEvent) !== void 0)
        try {
          h.afterEvent(d, { featureTag: l, severity: f });
        } catch {
          return;
        }
  }
  return {
    init: r,
    downloadLog: n,
    getLogFilePaths: s,
    getRecentLogs: i,
    sendLogFilesByEmail: o,
    write: c,
  };
}
const N0 = iD([aD, M0]),
  Nm = (e) => ({
    beforeEvent: (...[t, r]) => {
      const n = t instanceof Error ? t.message : t;
      return (
        e.write(n, r.featureTag, r.severity, r.data),
        { value: t, ...(r.data ? { data: r.data } : {}) }
      );
    },
    afterEvent: void 0,
  }),
  oD = /\b[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{88}\b/g,
  cD = /\b0x[a-fA-F0-9]{64}\b/g,
  lD = /\b[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{44}\b/g,
  uD = /\b0x[a-fA-F0-9]{40}\b/g,
  cf = { SOLANA_SIGNATURE: oD, EVM_SIGNATURE: cD, SOLANA_PUBKEY: lD, EVM_PUBKEY: uD },
  fD = (e) =>
    Object.entries(e).reduce(
      (t, [r, n]) => (typeof n == 'string' ? (t[r] = La(n)) : (t[r] = n), t),
      {}
    ),
  La = (e) => {
    let t = e;
    for (const r in cf) {
      const n = cf[r];
      t = t.replace(n, '');
    }
    return t;
  },
  dD = (e) => (
    e.message && (e.message = La(e.message)),
    e.cause && typeof e.cause == 'string' && (e.cause = La(e.cause)),
    e
  ),
  hD = (e) => (e instanceof Error ? dD(e) : La(e)),
  Rm = {
    beforeEvent: (...[e, t]) => ({ value: hD(e), ...(t.data ? { data: fD(t.data) } : {}) }),
    afterEvent: void 0,
  };
var lf = K2;
lf && lf.isDate;
var xD = {};
const YB = {
    [He.Debug]: console.log,
    [He.Info]: console.warn,
    [He.Error]: console.error,
    [He.Fatal]: console.error,
  },
  hs = () =>
    W2() ||
    ['t', 'y', '1', 'true', 'yes'].some((e) => {
      var t;
      return ((t = xD.DISABLE_TELEMETRY) == null ? void 0 : t.toLowerCase()) === e;
    });
function Um(e, t) {
  const r = hs() ? Fc : e,
    n = hs() ? Fc : t;
  return {
    init: async (s) => {
      await Promise.allSettled([r.init(s), n.init(s)]);
    },
    captureError: (s, i) => {
      Wt(() => r.captureError(s, i)), Wt(() => n.captureError(s, i));
    },
    captureMessage: (s, i, o = He.Info) => {
      Wt(() => r.captureMessage(s, i, o)), Wt(() => n.captureMessage(s, i, o));
    },
    addBreadcrumb: (s, i, o, c) => {
      Wt(() => r.addBreadcrumb(s, i, o, c)), Wt(() => n.addBreadcrumb(s, i, o, c));
    },
    setUser: async (s) => {
      await Promise.allSettled([r.setUser(s), n.setUser(s)]);
    },
    setTags: async (s) => {
      await Promise.allSettled([r.setTags(s), n.setTags(s)]);
    },
    startSpan: (s, i) => r.startSpan(s, () => n.startSpan(s, i)),
    startInactiveSpan: (s) => {
      const i = Wt(() => r.startInactiveSpan(s)),
        o = Wt(() => n.startInactiveSpan(s));
      if (!(!i && !o)) return Promise.resolve({ end: () => pD(i, o) });
    },
  };
}
function Wt(e) {
  try {
    return e();
  } catch {
    return;
  }
}
function pD(...e) {
  for (const t of e) t && Wt(() => t.then((r) => r.end()));
}
const uf = { op: 'function' },
  bD = [
    'The server encountered a temporary error',
    'premature close',
    'The browser is shutting down.',
  ],
  yD = [
    '/_generated_background_page.html',
    '/background/serviceWorker.js',
    '/service-worker-loader.js',
  ],
  mD = ['Breadcrumbs', 'GlobalHandlers', 'TryCatch', 'HttpContext'];
let ff = !1;
const gD = {
  init: async ({ appVersion: e, sentry: t }) => {
    t.enabled &&
      Y2({
        sampleRate: t.sampleRate,
        tracesSampler: (r) => {
          const n = r.transactionContext.name;
          return yD.includes(n) ? 0 : t.tracesSampleRate || !1;
        },
        beforeSend: async (r, n) => {
          const s = n == null ? void 0 : n.originalException;
          for (const i of bD)
            if ((s instanceof Error && s.message === i) || (typeof s == 'string' && s === i))
              return null;
          if (s && !ff) {
            const o = `${new Date().toISOString()}-logs.txt`,
              c = await N0.getRecentLogs();
            (n.attachments = [{ filename: o, data: c }]), (ff = !0);
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
            const i = (s = r.data) != null && s.url ? new URL(r.data.url) : void 0;
            if (!(i != null && i.origin.endsWith('phantom.app'))) return null;
          }
          return r;
        },
        integrations: function (r) {
          return r
            .filter(function (s) {
              return !mD.includes(s.name);
            })
            .concat([
              Z2({ dom: !1, history: !1, console: !1 }),
              J2({ traceFetch: !1, traceXHR: !1, enableInp: !0 }),
            ]);
        },
      });
  },
  captureError: (e, t) => {
    Vf(e, { tags: { feature: t, team: jn(t) } });
  },
  captureMessage: (e, t, r = He.Info) => {
    Gf(e, { tags: { feature: t, team: jn(t) }, level: r });
  },
  addBreadcrumb: (e, t, r, n) => {
    zf({ category: e, message: t, level: r, data: n });
  },
  setUser: async (e) => {
    Kf(e);
  },
  setTags: async (e) => {
    Wf(e);
  },
  startSpan: (e, t) => {
    const r = X2({ ...uf, name: e }, t);
    return Promise.resolve(r);
  },
  startInactiveSpan: (e) => {
    const t = eg({ ...uf, name: e });
    return t ? Promise.resolve(t) : void 0;
  },
};
function fn(e, t, { featureTag: r, value: n, severity: s, data: i }) {
  const o = { value: n, data: i };
  for (const c of e) {
    const d = c[t];
    if (d) {
      const l = d(o.value, { featureTag: r, severity: s, data: o.data });
      (o.value = l.value), l.data && (o.data = l.data);
    }
  }
  return o;
}
function Fm(e, t) {
  async function r(u) {
    await e.provider.init(u);
  }
  function n(u, h) {
    try {
      const b = fn(t, 'beforeEvent', { value: u, featureTag: h, severity: He.Error });
      (vi() && !hs()) ||
        (b.value instanceof Error
          ? e.provider.captureError(b.value, h)
          : e.provider.captureError(new Error(b.value), h)),
        fn(t, 'afterEvent', { value: b.value, featureTag: h, severity: He.Error });
    } catch {}
  }
  function s(u, h, b = He.Info) {
    try {
      const y = fn(t, 'beforeEvent', { value: u, featureTag: h, severity: b });
      (vi() && !hs()) ||
        e.provider.captureMessage(y.value instanceof Error ? y.value.message : y.value, h, b),
        fn(t, 'afterEvent', { value: y.value, featureTag: h, severity: b });
    } catch {}
  }
  function i(u, h, b, y) {
    try {
      const p = fn(t, 'beforeEvent', { featureTag: u, value: h, severity: b, data: y });
      (vi() && !hs()) ||
        e.provider.addBreadcrumb(
          u,
          p.value instanceof Error ? p.value.message : p.value,
          b,
          p.data
        ),
        fn(t, 'afterEvent', { featureTag: u, value: p.value, severity: b, data: p.data });
    } catch {}
  }
  async function o(u) {
    await e.provider.setUser(u);
  }
  async function c(u) {
    await e.provider.setTags(u);
  }
  function d(u, h) {
    return e.provider.startSpan(u, h);
  }
  function l(u, h) {
    return () => e.provider.startSpan(u, h);
  }
  function f(u) {
    return e.provider.startInactiveSpan(u);
  }
  return {
    init: r,
    captureError: n,
    captureMessage: s,
    addBreadcrumb: i,
    setUser: o,
    setTags: c,
    startSpan: d,
    startSpanCallback: l,
    startInactiveSpan: f,
  };
}
const vD = [M0, Rm],
  wD = Nm(N0),
  SD = [...vD, wD],
  jm = Fm({ provider: Um(gD, Mm) }, SD),
  ED = {
    init: async ({ sentry: e }) => {
      e.enabled &&
        tg({
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
      Vf(e, { tags: { feature: t, team: jn(t) } });
    },
    captureMessage: (e, t, r = He.Info) => {
      Gf(e, { tags: { feature: t, team: jn(t) }, level: r });
    },
    addBreadcrumb: (e, t, r, n) => {
      zf({ category: e, message: t, level: r, data: n });
    },
    setUser: async (e) => {
      Kf(e);
    },
    setTags: async (e) => {
      Wf(e);
    },
    startSpan: (e, t) => {
      throw new Error('Not implemented');
    },
    startInactiveSpan: (e) => {
      throw new Error('Not implemented');
    },
  },
  _D = [M0, Rm],
  $D = Nm(N0),
  AD = [..._D, $D];
Fm({ provider: Um(ED, Mm) }, AD);
const ZB = 'Method not supported on this platform';
a.object({
  maxRequests: a.number(),
  ignoredUrls: a.array(a.string()),
  ignoredHosts: a.array(a.string()),
});
function jc(e) {
  if (!Number.isSafeInteger(e) || e < 0) throw new Error(`Wrong positive integer: ${e}`);
}
function ID(e) {
  if (typeof e != 'boolean') throw new Error(`Expected boolean, not ${e}`);
}
function Hm(e, ...t) {
  if (!(e instanceof Uint8Array)) throw new TypeError('Expected Uint8Array');
  if (t.length > 0 && !t.includes(e.length))
    throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`);
}
function TD(e) {
  if (typeof e != 'function' || typeof e.create != 'function')
    throw new Error('Hash should be wrapped by utils.wrapConstructor');
  jc(e.outputLen), jc(e.blockLen);
}
function PD(e, t = !0) {
  if (e.destroyed) throw new Error('Hash instance has been destroyed');
  if (t && e.finished) throw new Error('Hash#digest() has already been called');
}
function CD(e, t) {
  Hm(e);
  const r = t.outputLen;
  if (e.length < r) throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
const Je = { number: jc, bool: ID, bytes: Hm, hash: TD, exists: PD, output: CD };
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const qo = (e) =>
    new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
  da = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
  kt = (e, t) => (e << (32 - t)) | (e >>> t),
  kD = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!kD) throw new Error('Non little-endian hardware is not supported');
Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
const DD = async () => {};
async function df(e, t, r) {
  let n = Date.now();
  for (let s = 0; s < e; s++) {
    r(s);
    const i = Date.now() - n;
    (i >= 0 && i < t) || (await DD(), (n += i));
  }
}
function OD(e) {
  if (typeof e != 'string') throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);
  return new TextEncoder().encode(e);
}
function vs(e) {
  if ((typeof e == 'string' && (e = OD(e)), !(e instanceof Uint8Array)))
    throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);
  return e;
}
class qm {
  clone() {
    return this._cloneInto();
  }
}
const BD = (e) =>
  Object.prototype.toString.call(e) === '[object Object]' && e.constructor === Object;
function Vm(e, t) {
  if (t !== void 0 && (typeof t != 'object' || !BD(t)))
    throw new TypeError('Options should be object or undefined');
  return Object.assign(e, t);
}
function Gm(e) {
  const t = (n) => e().update(vs(n)).digest(),
    r = e();
  return (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = () => e()), t;
}
function LD(e, t, r, n) {
  if (typeof e.setBigUint64 == 'function') return e.setBigUint64(t, r, n);
  const s = BigInt(32),
    i = BigInt(4294967295),
    o = Number((r >> s) & i),
    c = Number(r & i),
    d = n ? 4 : 0,
    l = n ? 0 : 4;
  e.setUint32(t + d, o, n), e.setUint32(t + l, c, n);
}
class MD extends qm {
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
      (this.view = da(this.buffer));
  }
  update(t) {
    Je.exists(this);
    const { view: r, buffer: n, blockLen: s } = this;
    t = vs(t);
    const i = t.length;
    for (let o = 0; o < i; ) {
      const c = Math.min(s - this.pos, i - o);
      if (c === s) {
        const d = da(t);
        for (; s <= i - o; o += s) this.process(d, o);
        continue;
      }
      n.set(t.subarray(o, o + c), this.pos),
        (this.pos += c),
        (o += c),
        this.pos === s && (this.process(r, 0), (this.pos = 0));
    }
    return (this.length += t.length), this.roundClean(), this;
  }
  digestInto(t) {
    Je.exists(this), Je.output(t, this), (this.finished = !0);
    const { buffer: r, view: n, blockLen: s, isLE: i } = this;
    let { pos: o } = this;
    (r[o++] = 128),
      this.buffer.subarray(o).fill(0),
      this.padOffset > s - o && (this.process(n, 0), (o = 0));
    for (let u = o; u < s; u++) r[u] = 0;
    LD(n, s - 8, BigInt(this.length * 8), i), this.process(n, 0);
    const c = da(t),
      d = this.outputLen;
    if (d % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
    const l = d / 4,
      f = this.get();
    if (l > f.length) throw new Error('_sha2: outputLen bigger than state');
    for (let u = 0; u < l; u++) c.setUint32(4 * u, f[u], i);
  }
  digest() {
    const { buffer: t, outputLen: r } = this;
    this.digestInto(t);
    const n = t.slice(0, r);
    return this.destroy(), n;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: r, buffer: n, length: s, finished: i, destroyed: o, pos: c } = this;
    return (
      (t.length = s), (t.pos = c), (t.finished = i), (t.destroyed = o), s % r && t.buffer.set(n), t
    );
  }
}
const ND = (e, t, r) => (e & t) ^ (~e & r),
  RD = (e, t, r) => (e & t) ^ (e & r) ^ (t & r),
  UD = new Uint32Array([
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221,
    3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580,
    3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895,
    666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
    2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
    1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298,
  ]),
  pr = new Uint32Array([
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225,
  ]),
  br = new Uint32Array(64);
class zm extends MD {
  constructor() {
    super(64, 32, 8, !1),
      (this.A = pr[0] | 0),
      (this.B = pr[1] | 0),
      (this.C = pr[2] | 0),
      (this.D = pr[3] | 0),
      (this.E = pr[4] | 0),
      (this.F = pr[5] | 0),
      (this.G = pr[6] | 0),
      (this.H = pr[7] | 0);
  }
  get() {
    const { A: t, B: r, C: n, D: s, E: i, F: o, G: c, H: d } = this;
    return [t, r, n, s, i, o, c, d];
  }
  set(t, r, n, s, i, o, c, d) {
    (this.A = t | 0),
      (this.B = r | 0),
      (this.C = n | 0),
      (this.D = s | 0),
      (this.E = i | 0),
      (this.F = o | 0),
      (this.G = c | 0),
      (this.H = d | 0);
  }
  process(t, r) {
    for (let u = 0; u < 16; u++, r += 4) br[u] = t.getUint32(r, !1);
    for (let u = 16; u < 64; u++) {
      const h = br[u - 15],
        b = br[u - 2],
        y = kt(h, 7) ^ kt(h, 18) ^ (h >>> 3),
        p = kt(b, 17) ^ kt(b, 19) ^ (b >>> 10);
      br[u] = (p + br[u - 7] + y + br[u - 16]) | 0;
    }
    let { A: n, B: s, C: i, D: o, E: c, F: d, G: l, H: f } = this;
    for (let u = 0; u < 64; u++) {
      const h = kt(c, 6) ^ kt(c, 11) ^ kt(c, 25),
        b = (f + h + ND(c, d, l) + UD[u] + br[u]) | 0,
        p = ((kt(n, 2) ^ kt(n, 13) ^ kt(n, 22)) + RD(n, s, i)) | 0;
      (f = l), (l = d), (d = c), (c = (o + b) | 0), (o = i), (i = s), (s = n), (n = (b + p) | 0);
    }
    (n = (n + this.A) | 0),
      (s = (s + this.B) | 0),
      (i = (i + this.C) | 0),
      (o = (o + this.D) | 0),
      (c = (c + this.E) | 0),
      (d = (d + this.F) | 0),
      (l = (l + this.G) | 0),
      (f = (f + this.H) | 0),
      this.set(n, s, i, o, c, d, l, f);
  }
  roundClean() {
    br.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
class FD extends zm {
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
const Km = Gm(() => new zm());
Gm(() => new FD());
class Wm extends qm {
  constructor(t, r) {
    super(), (this.finished = !1), (this.destroyed = !1), Je.hash(t);
    const n = vs(r);
    if (((this.iHash = t.create()), typeof this.iHash.update != 'function'))
      throw new TypeError('Expected instance of class which extends utils.Hash');
    (this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen);
    const s = this.blockLen,
      i = new Uint8Array(s);
    i.set(n.length > s ? t.create().update(n).digest() : n);
    for (let o = 0; o < i.length; o++) i[o] ^= 54;
    this.iHash.update(i), (this.oHash = t.create());
    for (let o = 0; o < i.length; o++) i[o] ^= 106;
    this.oHash.update(i), i.fill(0);
  }
  update(t) {
    return Je.exists(this), this.iHash.update(t), this;
  }
  digestInto(t) {
    Je.exists(this),
      Je.bytes(t, this.outputLen),
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
    const { oHash: r, iHash: n, finished: s, destroyed: i, blockLen: o, outputLen: c } = this;
    return (
      (t = t),
      (t.finished = s),
      (t.destroyed = i),
      (t.blockLen = o),
      (t.outputLen = c),
      (t.oHash = r._cloneInto(t.oHash)),
      (t.iHash = n._cloneInto(t.iHash)),
      t
    );
  }
  destroy() {
    (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
  }
}
const Qm = (e, t, r) => new Wm(e, t).update(r).digest();
Qm.create = (e, t) => new Wm(e, t);
function jD(e, t, r, n) {
  Je.hash(e);
  const s = Vm({ dkLen: 32, asyncTick: 10 }, n),
    { c: i, dkLen: o, asyncTick: c } = s;
  if ((Je.number(i), Je.number(o), Je.number(c), i < 1))
    throw new Error('PBKDF2: iterations (c) should be >= 1');
  const d = vs(t),
    l = vs(r),
    f = new Uint8Array(o),
    u = Qm.create(e, d),
    h = u._cloneInto().update(l);
  return { c: i, dkLen: o, asyncTick: c, DK: f, PRF: u, PRFSalt: h };
}
function HD(e, t, r, n, s) {
  return e.destroy(), t.destroy(), n && n.destroy(), s.fill(0), r;
}
function Ym(e, t, r, n) {
  const { c: s, dkLen: i, DK: o, PRF: c, PRFSalt: d } = jD(e, t, r, n);
  let l;
  const f = new Uint8Array(4),
    u = da(f),
    h = new Uint8Array(c.outputLen);
  for (let b = 1, y = 0; y < i; b++, y += c.outputLen) {
    const p = o.subarray(y, y + c.outputLen);
    u.setInt32(0, b, !1),
      (l = d._cloneInto(l)).update(f).digestInto(h),
      p.set(h.subarray(0, p.length));
    for (let x = 1; x < s; x++) {
      c._cloneInto(l).update(h).digestInto(h);
      for (let S = 0; S < p.length; S++) p[S] ^= h[S];
    }
  }
  return HD(c, d, o, l, h);
}
const _e = (e, t) => (e << t) | (e >>> (32 - t));
function hf(e, t, r, n, s, i) {
  let o = e[t++] ^ r[n++],
    c = e[t++] ^ r[n++],
    d = e[t++] ^ r[n++],
    l = e[t++] ^ r[n++],
    f = e[t++] ^ r[n++],
    u = e[t++] ^ r[n++],
    h = e[t++] ^ r[n++],
    b = e[t++] ^ r[n++],
    y = e[t++] ^ r[n++],
    p = e[t++] ^ r[n++],
    x = e[t++] ^ r[n++],
    S = e[t++] ^ r[n++],
    _ = e[t++] ^ r[n++],
    m = e[t++] ^ r[n++],
    I = e[t++] ^ r[n++],
    A = e[t++] ^ r[n++],
    k = o,
    P = c,
    w = d,
    E = l,
    U = f,
    j = u,
    z = h,
    V = b,
    J = y,
    re = p,
    de = x,
    we = S,
    Oe = _,
    Pe = m,
    Ie = I,
    $ = A;
  for (let N = 0; N < 8; N += 2)
    (U ^= _e((k + Oe) | 0, 7)),
      (J ^= _e((U + k) | 0, 9)),
      (Oe ^= _e((J + U) | 0, 13)),
      (k ^= _e((Oe + J) | 0, 18)),
      (re ^= _e((j + P) | 0, 7)),
      (Pe ^= _e((re + j) | 0, 9)),
      (P ^= _e((Pe + re) | 0, 13)),
      (j ^= _e((P + Pe) | 0, 18)),
      (Ie ^= _e((de + z) | 0, 7)),
      (w ^= _e((Ie + de) | 0, 9)),
      (z ^= _e((w + Ie) | 0, 13)),
      (de ^= _e((z + w) | 0, 18)),
      (E ^= _e(($ + we) | 0, 7)),
      (V ^= _e((E + $) | 0, 9)),
      (we ^= _e((V + E) | 0, 13)),
      ($ ^= _e((we + V) | 0, 18)),
      (P ^= _e((k + E) | 0, 7)),
      (w ^= _e((P + k) | 0, 9)),
      (E ^= _e((w + P) | 0, 13)),
      (k ^= _e((E + w) | 0, 18)),
      (z ^= _e((j + U) | 0, 7)),
      (V ^= _e((z + j) | 0, 9)),
      (U ^= _e((V + z) | 0, 13)),
      (j ^= _e((U + V) | 0, 18)),
      (we ^= _e((de + re) | 0, 7)),
      (J ^= _e((we + de) | 0, 9)),
      (re ^= _e((J + we) | 0, 13)),
      (de ^= _e((re + J) | 0, 18)),
      (Oe ^= _e(($ + Ie) | 0, 7)),
      (Pe ^= _e((Oe + $) | 0, 9)),
      (Ie ^= _e((Pe + Oe) | 0, 13)),
      ($ ^= _e((Ie + Pe) | 0, 18));
  (s[i++] = (o + k) | 0),
    (s[i++] = (c + P) | 0),
    (s[i++] = (d + w) | 0),
    (s[i++] = (l + E) | 0),
    (s[i++] = (f + U) | 0),
    (s[i++] = (u + j) | 0),
    (s[i++] = (h + z) | 0),
    (s[i++] = (b + V) | 0),
    (s[i++] = (y + J) | 0),
    (s[i++] = (p + re) | 0),
    (s[i++] = (x + de) | 0),
    (s[i++] = (S + we) | 0),
    (s[i++] = (_ + Oe) | 0),
    (s[i++] = (m + Pe) | 0),
    (s[i++] = (I + Ie) | 0),
    (s[i++] = (A + $) | 0);
}
function Vo(e, t, r, n, s) {
  let i = n + 0,
    o = n + 16 * s;
  for (let c = 0; c < 16; c++) r[o + c] = e[t + (2 * s - 1) * 16 + c];
  for (let c = 0; c < s; c++, i += 16, t += 16)
    hf(r, o, e, t, r, i), c > 0 && (o += 16), hf(r, i, e, (t += 16), r, o);
}
function qD(e, t, r) {
  const n = Vm({ dkLen: 32, asyncTick: 10, maxmem: 1073742848 }, r),
    { N: s, r: i, p: o, dkLen: c, asyncTick: d, maxmem: l, onProgress: f } = n;
  if (
    (Je.number(s),
    Je.number(i),
    Je.number(o),
    Je.number(c),
    Je.number(d),
    Je.number(l),
    f !== void 0 && typeof f != 'function')
  )
    throw new Error('progressCb should be function');
  const u = 128 * i,
    h = u / 4;
  if (s <= 1 || s & (s - 1) || s >= 2 ** (u / 8) || s > 2 ** 32)
    throw new Error(
      'Scrypt: N must be larger than 1, a power of 2, less than 2^(128 * r / 8) and less than 2^32'
    );
  if (o < 0 || o > ((2 ** 32 - 1) * 32) / u)
    throw new Error(
      'Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)'
    );
  if (c < 0 || c > (2 ** 32 - 1) * 32)
    throw new Error(
      'Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32'
    );
  const b = u * (s + o);
  if (b > l)
    throw new Error(`Scrypt: parameters too large, ${b} (128 * r * (N + p)) > ${l} (maxmem)`);
  const y = Ym(Km, e, t, { c: 1, dkLen: u * o }),
    p = qo(y),
    x = qo(new Uint8Array(u * s)),
    S = qo(new Uint8Array(u));
  let _ = () => {};
  if (f) {
    const m = 2 * s * o,
      I = Math.max(Math.floor(m / 1e4), 1);
    let A = 0;
    _ = () => {
      A++, f && (!(A % I) || A === m) && f(A / m);
    };
  }
  return {
    N: s,
    r: i,
    p: o,
    dkLen: c,
    blockSize32: h,
    V: x,
    B32: p,
    B: y,
    tmp: S,
    blockMixCb: _,
    asyncTick: d,
  };
}
function VD(e, t, r, n, s) {
  const i = Ym(Km, e, r, { c: 1, dkLen: t });
  return r.fill(0), n.fill(0), s.fill(0), i;
}
async function GD(e, t, r) {
  const {
    N: n,
    r: s,
    p: i,
    dkLen: o,
    blockSize32: c,
    V: d,
    B32: l,
    B: f,
    tmp: u,
    blockMixCb: h,
    asyncTick: b,
  } = qD(e, t, r);
  for (let y = 0; y < i; y++) {
    const p = c * y;
    for (let S = 0; S < c; S++) d[S] = l[p + S];
    let x = 0;
    await df(n - 1, b, (S) => {
      Vo(d, x, d, (x += c), s), h();
    }),
      Vo(d, (n - 1) * c, l, p, s),
      h(),
      await df(n, b, (S) => {
        const _ = l[p + c - 16] % n;
        for (let m = 0; m < c; m++) u[m] = l[p + m] ^ d[_ * c + m];
        Vo(u, 0, l, p, s), h();
      });
  }
  return VD(e, o, f, d, u);
}
var zD = P2();
const Zm = async (e, t) => {
    switch (t.kdf) {
      case 'scrypt':
        return Ce.from(
          await GD(e, vt.decode(t.salt), { N: 2 ** 12, r: 8, p: 1, dkLen: Hr.secretbox.keyLength })
        );
      case 'pbkdf2':
        return new Promise((r, n) =>
          zD.pbkdf2(e, vt.decode(t.salt), t.iterations, Hr.secretbox.keyLength, t.digest, (s, i) =>
            s ? n(s) : r(i)
          )
        );
    }
    throw new Error(`Unable to derive encryption key: ${t.kdf}`);
  },
  xf = async (e, t) => {
    const r = Hr.secretbox.open(vt.decode(e.encrypted), vt.decode(e.nonce), await Zm(t, e));
    if (!r) throw new Error('Unable to open secretbox: Incorrect Password');
    return r;
  };
async function KD(e, t) {
  try {
    return await xf(e, t);
  } catch {
    const r = Ce.from(t).toString('utf-8'),
      n = Ce.from(r),
      s = await xf(e, n);
    return (
      s &&
        jm.addBreadcrumb(
          ae.Storage,
          'DecryptEncryptedText: Legacy decryption successful ✅',
          He.Info
        ),
      s
    );
  }
}
const WD = async (e, t) => {
  const r = {
      kdf: 'scrypt',
      salt: vt.encode(Hr.randomBytes(16)),
      nonce: vt.encode(Hr.randomBytes(Hr.secretbox.nonceLength)),
      iterations: 1e4,
      digest: 'sha256',
    },
    n = await Zm(t, r),
    s = Hr.secretbox(e, vt.decode(r.nonce), n);
  return { ...r, encrypted: vt.encode(s) };
};
async function QD(e, t) {
  return WD(Ce.from(e), t);
}
const YD = a.object({
    encrypted: a.string(),
    nonce: a.string(),
    kdf: a.string(),
    salt: a.string(),
    iterations: a.number(),
    digest: a.string(),
  }),
  ZD = a.object({ version: a.literal(1), content: YD });
class JB {
  constructor(t, r) {
    F(this, 'storage');
    F(this, 'storageEncryptionKeyManager');
    (this.storage = t), (this.storageEncryptionKeyManager = r);
  }
  static fromStorage(t, r) {
    return new this({ store: t, type: 'plain' }, r);
  }
  static fromSecureStorage(t, r) {
    return new this({ store: t, type: 'secure' }, r);
  }
  async rotateEncryptionKey(t) {
    return this.storageEncryptionKeyManager.rotateEncryptionKey(async (r, n) => {
      const s = await this.getAllSecureValues(),
        i = {};
      for (const [o, c] of Object.entries(s)) {
        const d = await this.encrypt(c, r);
        i[o] = d;
      }
      return n(i, t);
    });
  }
  async getSecureValue(t) {
    let r;
    switch (this.storage.type) {
      case 'plain': {
        r = await this.storage.store.get(t);
        break;
      }
      case 'secure': {
        r = await this.storage.store.getSecureValue(t);
        break;
      }
    }
    return r ? this.decrypt(r) : null;
  }
  async getAllSecureValues(t) {
    const r = {};
    let n;
    switch (this.storage.type) {
      case 'plain': {
        n = await this.storage.store.getAll(t);
        break;
      }
      case 'secure': {
        n = await this.storage.store.getAllSecureValues(t);
        break;
      }
    }
    for (const [s, i] of Object.entries(n)) {
      const o = ZD.safeParse(i);
      if (o.success) {
        const c = await this.decrypt(o.data);
        r[s] = c;
      }
    }
    return r;
  }
  async removeSecureValue(t) {
    switch (this.storage.type) {
      case 'plain': {
        await this.storage.store.remove(t);
        break;
      }
      case 'secure': {
        await this.storage.store.removeSecureValue(t);
        break;
      }
    }
  }
  async setSecureValue(t, r) {
    const n = await this.encrypt(r);
    switch (this.storage.type) {
      case 'plain': {
        await this.storage.store.set(t, n);
        break;
      }
      case 'secure': {
        await this.storage.store.setSecureValue(t, n);
        break;
      }
    }
  }
  async setAllSecureValues(t) {
    const r = {};
    for (const [n, s] of Object.entries(t)) {
      const i = await this.encrypt(s);
      r[n] = i;
    }
    switch (this.storage.type) {
      case 'plain': {
        await this.storage.store.setAll(r);
        break;
      }
      case 'secure': {
        await this.storage.store.setAllSecureValues(r);
        break;
      }
    }
  }
  async encrypt(t, r) {
    const n = JSON.stringify(t),
      s = r ?? (await this.storageEncryptionKeyManager.getDeviceEncryptionKey());
    if (!s) throw new Error('[EncryptedStorage.encrypt] Failed to get valid encryption key');
    return { version: 1, content: await s.foldAsync((o) => QD(n, o)) };
  }
  async decrypt(t) {
    const r = await this.storageEncryptionKeyManager.getDeviceEncryptionKey();
    if (!r) throw new Error('[EncryptedStorage.decrypt] Failed to get valid encryption key');
    const n = await r.foldAsync((s) => KD(t.content, s));
    return JSON.parse(Ce.from(n).toString());
  }
}
async function JD(e) {
  try {
    return (await e.get(Ne.FeatureFlagOverrides)) ?? {};
  } catch {
    throw new Error('Failed to fetch feature flag overrides');
  }
}
const XD = 1 * 60 * 1e3,
  Jm = 'feature-flags',
  eO = () => nk({ queryKey: [Jm], queryFn: () => Un.getFeatureFlags(), staleTime: XD }),
  tO = (e) => {
    const t = ye.useContext(Xm),
      r = new Array(e.length);
    for (let n = 0; n < e.length; n++) {
      const s = e[n];
      r[n] = !!(t != null && t[s]);
    }
    return { data: r, isLoading: t === void 0, isFetched: t !== void 0 };
  },
  rO = () => {
    const e = si();
    return () =>
      Un.refreshFeatureFlags().then(() => {
        e.invalidateQueries({ queryKey: [Jm] });
      });
  },
  Xm = ye.createContext(void 0);
function nO({ children: e }) {
  const { data: t } = eO();
  return ys.jsx(Xm.Provider, { value: t, children: e });
}
const XB = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        BasicFlagProvider: gC,
        ENABLED_FLAGS: lP,
        FeatureFlagsProvider: nO,
        featureFlagClient: Un,
        featureFlags: cP,
        getFeatureFlagOverrides: JD,
        useFeatureFlags: tO,
        useRefreshFeatureFlags: rO,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  e2 = '.phantom-labs.internal.enabledChainsOverrideSettings',
  t2 = async (e) => {
    try {
      const t = await e.get(e2);
      return t == null ? void 0 : t.settings;
    } catch {
      return null;
    }
  },
  sO = async (e, t, r) => {
    const n = await t2(r);
    return r.set(e2, { version: 1, settings: { ...(n != null && n), [e]: t } });
  },
  aO = async (e) => {
    const t = [];
    let r;
    try {
      (r = await t2(e)),
        r &&
          Object.entries(r).forEach(([s, i]) => {
            i || t.push(s);
          });
    } catch {}
    try {
      const s = await e.get(oO);
      !s ||
        s.version === 1 ||
        s.chains.forEach((i) => {
          (r && r[i]) || t.push(i);
        });
    } catch {}
    const n = await Un.isFeatureEnabledAsync('enable-sui-default-on');
    try {
      ve.getAllChainIDs().forEach((s) => {
        (r && r[s]) || ve.isChainDefaultEnabled(s, n) || t.push(s);
      });
    } catch {}
    return [...new Set(t)];
  },
  eL = async (e, t) => sO(e, !0, t),
  Hc = '.phantom-labs.internal.disabledAddressTypes',
  iO = async (e) => {
    let t;
    try {
      const r = await e.get(Hc);
      t = (r == null ? void 0 : r.addressTypes) ?? [];
    } catch {
      t = [];
    }
    return [...new Set([...t, Q.BitcoinNestedSegwit, Q.BitcoinLegacy])];
  },
  tL = async (e, t) => {
    const r = await t.get(Hc),
      n = new Set((r == null ? void 0 : r.addressTypes) ?? []);
    return n.delete(e), t.set(Hc, { version: 1, addressTypes: Array.from(n) });
  },
  oO = '.phantom-labs.internal.disabledChains';
We.Monad.Mainnet + '',
  We.Monad.Devnet + '',
  We.Monad.Testnet + '',
  We.Ethereum.Mainnet + '',
  We.Ethereum.Sepolia + '',
  We.Polygon.Mainnet + '',
  We.Polygon.Amoy + '',
  We.Base.Mainnet + '',
  We.Base.Sepolia + '',
  We.Arbitrum.Mainnet + '',
  We.Arbitrum.Sepolia + '',
  We.Hypercore.Mainnet + '',
  We.Hypercore.Testnet + '';
We.Bitcoin.Mainnet + '', We.Bitcoin.Testnet + '';
let pf = !1;
const rL = async (e, t, r) => {
    (t = t ?? (await Un.isFeatureEnabledAsync('enable-monad'))),
      (r = r ?? (await Un.isFeatureEnabledAsync('enable-arbitrum'))),
      pf ||
        (jm.addBreadcrumb(
          ae.Network,
          `Fetched chain availability where ${JSON.stringify({ isMonadFeatureEnabled: t })}`,
          He.Info
        ),
        (pf = !0));
    const n = ve.getAllChainIDs().filter((_) => (_ !== ce.Monad || t) && (_ !== ce.Arbitrum || r)),
      s = await aO(e),
      i = new Set(s),
      o = n.filter((_) => !i.has(_)),
      c = (_) => {
        const m = ve.getChainID(_);
        return o.includes(m);
      },
      d = ve.getAllNetworkIDs({ mainnetOnly: !1 }).filter(c),
      l = ve.getAllNetworkIDs({ mainnetOnly: !0 }).filter(c),
      f = new Set(s.flatMap((_) => ve.getNetworkIDs(_))),
      u = d.filter((_) => !f.has(_)),
      h = l.filter((_) => !f.has(_)),
      b = u.filter((_) => !ve.isMainnetNetworkID(_)),
      y = Wc.getAll(),
      p = await iO(e),
      x = new Set(p);
    for (const _ of y) {
      const m = ve.getChainIDs(_);
      if (!m) {
        x.add(_);
        continue;
      }
      m.every((A) => i.has(A)) && x.add(_);
    }
    const S = y.filter((_) => !x.has(_));
    return {
      supportedChainIDs: n,
      supportedAddressTypes: y,
      disabledChainIDs: s,
      enabledChainIDs: o,
      enabledAddressTypes: S,
      enabledNetworkIDs: u,
      enabledMainnetOnlyNetworkIDs: h,
      enabledTestnetOnlyNetworkIDs: b,
    };
  },
  Xs = '@phantom/chains',
  nL = {
    enabledChains: [`${Xs}:enabled-chains`],
    enabledAddressTypes: [`${Xs}:enabled-address-types`],
    enabledNetworkIDs(e) {
      return [`${Xs}:enabled-network-ids`, { mainnetOnly: e }];
    },
    chainAvailability(e) {
      return [`${Xs}:chain-availability`, e];
    },
  };
var Nr = {};
Object.defineProperty(Nr, '__esModule', { value: !0 });
Nr.TokenData = void 0;
Nr.parse = j0;
Nr.compile = dO;
Nr.match = xO;
Nr.pathToRegexp = s2;
Nr.stringify = yO;
const R0 = '/',
  U0 = (e) => e,
  r2 = /^[$_\p{ID_Start}]$/u,
  F0 = /^[$\u200c\u200d\p{ID_Continue}]$/u,
  Ma = 'https://git.new/pathToRegexpError',
  cO = { '{': '{', '}': '}', '(': '(', ')': ')', '[': '[', ']': ']', '+': '+', '?': '?', '!': '!' };
function lO(e) {
  return e.replace(/[{}()\[\]+?!:*]/g, '\\$&');
}
function Bt(e) {
  return e.replace(/[.+*?^${}()[\]|/\\]/g, '\\$&');
}
function* uO(e) {
  const t = [...e];
  let r = 0;
  function n() {
    let s = '';
    if (r2.test(t[++r])) for (s += t[r]; F0.test(t[++r]); ) s += t[r];
    else if (t[r] === '"') {
      let i = r;
      for (; r < t.length; ) {
        if (t[++r] === '"') {
          r++, (i = 0);
          break;
        }
        t[r] === '\\' ? (s += t[++r]) : (s += t[r]);
      }
      if (i) throw new TypeError(`Unterminated quote at ${i}: ${Ma}`);
    }
    if (!s) throw new TypeError(`Missing parameter name at ${r}: ${Ma}`);
    return s;
  }
  for (; r < t.length; ) {
    const s = t[r],
      i = cO[s];
    if (i) yield { type: i, index: r++, value: s };
    else if (s === '\\') yield { type: 'ESCAPED', index: r++, value: t[r++] };
    else if (s === ':') {
      const o = n();
      yield { type: 'PARAM', index: r, value: o };
    } else if (s === '*') {
      const o = n();
      yield { type: 'WILDCARD', index: r, value: o };
    } else yield { type: 'CHAR', index: r, value: t[r++] };
  }
  return { type: 'END', index: r, value: '' };
}
class fO {
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
    throw new TypeError(`Unexpected ${n} at ${s}, expected ${t}: ${Ma}`);
  }
  text() {
    let t = '',
      r;
    for (; (r = this.tryConsume('CHAR') || this.tryConsume('ESCAPED')); ) t += r;
    return t;
  }
}
class oi {
  constructor(t) {
    this.tokens = t;
  }
}
Nr.TokenData = oi;
function j0(e, t = {}) {
  const { encodePath: r = U0 } = t,
    n = new fO(uO(e));
  function s(o) {
    const c = [];
    for (;;) {
      const d = n.text();
      d && c.push({ type: 'text', value: r(d) });
      const l = n.tryConsume('PARAM');
      if (l) {
        c.push({ type: 'param', name: l });
        continue;
      }
      const f = n.tryConsume('WILDCARD');
      if (f) {
        c.push({ type: 'wildcard', name: f });
        continue;
      }
      if (n.tryConsume('{')) {
        c.push({ type: 'group', tokens: s('}') });
        continue;
      }
      return n.consume(o), c;
    }
  }
  const i = s('END');
  return new oi(i);
}
function dO(e, t = {}) {
  const { encode: r = encodeURIComponent, delimiter: n = R0 } = t,
    s = e instanceof oi ? e : j0(e, t),
    i = n2(s.tokens, n, r);
  return function (c = {}) {
    const [d, ...l] = i(c);
    if (l.length) throw new TypeError(`Missing parameters: ${l.join(', ')}`);
    return d;
  };
}
function n2(e, t, r) {
  const n = e.map((s) => hO(s, t, r));
  return (s) => {
    const i = [''];
    for (const o of n) {
      const [c, ...d] = o(s);
      (i[0] += c), i.push(...d);
    }
    return i;
  };
}
function hO(e, t, r) {
  if (e.type === 'text') return () => [e.value];
  if (e.type === 'group') {
    const s = n2(e.tokens, t, r);
    return (i) => {
      const [o, ...c] = s(i);
      return c.length ? [''] : [o];
    };
  }
  const n = r || U0;
  return e.type === 'wildcard' && r !== !1
    ? (s) => {
        const i = s[e.name];
        if (i == null) return ['', e.name];
        if (!Array.isArray(i) || i.length === 0)
          throw new TypeError(`Expected "${e.name}" to be a non-empty array`);
        return [
          i
            .map((o, c) => {
              if (typeof o != 'string')
                throw new TypeError(`Expected "${e.name}/${c}" to be a string`);
              return n(o);
            })
            .join(t),
        ];
      }
    : (s) => {
        const i = s[e.name];
        if (i == null) return ['', e.name];
        if (typeof i != 'string') throw new TypeError(`Expected "${e.name}" to be a string`);
        return [n(i)];
      };
}
function xO(e, t = {}) {
  const { decode: r = decodeURIComponent, delimiter: n = R0 } = t,
    { regexp: s, keys: i } = s2(e, t),
    o = i.map((c) => (r === !1 ? U0 : c.type === 'param' ? r : (d) => d.split(n).map(r)));
  return function (d) {
    const l = s.exec(d);
    if (!l) return !1;
    const f = l[0],
      u = Object.create(null);
    for (let h = 1; h < l.length; h++) {
      if (l[h] === void 0) continue;
      const b = i[h - 1],
        y = o[h - 1];
      u[b.name] = y(l[h]);
    }
    return { path: f, params: u };
  };
}
function s2(e, t = {}) {
  const { delimiter: r = R0, end: n = !0, sensitive: s = !1, trailing: i = !0 } = t,
    o = [],
    c = [],
    d = s ? '' : 'i',
    f = (Array.isArray(e) ? e : [e]).map((b) => (b instanceof oi ? b : j0(b, t)));
  for (const { tokens: b } of f)
    for (const y of ha(b, 0, [])) {
      const p = pO(y, r, o);
      c.push(p);
    }
  let u = `^(?:${c.join('|')})`;
  return (
    i && (u += `(?:${Bt(r)}$)?`),
    (u += n ? '$' : `(?=${Bt(r)}|$)`),
    { regexp: new RegExp(u, d), keys: o }
  );
}
function* ha(e, t, r) {
  if (t === e.length) return yield r;
  const n = e[t];
  if (n.type === 'group') {
    const s = r.slice();
    for (const i of ha(n.tokens, 0, s)) yield* ha(e, t + 1, i);
  } else r.push(n);
  yield* ha(e, t + 1, r);
}
function pO(e, t, r) {
  let n = '',
    s = '',
    i = !0;
  for (let o = 0; o < e.length; o++) {
    const c = e[o];
    if (c.type === 'text') {
      (n += Bt(c.value)), (s += c.value), i || (i = c.value.includes(t));
      continue;
    }
    if (c.type === 'param' || c.type === 'wildcard') {
      if (!i && !s) throw new TypeError(`Missing text after "${c.name}": ${Ma}`);
      c.type === 'param' ? (n += `(${bO(t, i ? '' : s)}+)`) : (n += '([\\s\\S]+)'),
        r.push(c),
        (s = ''),
        (i = !1);
      continue;
    }
  }
  return n;
}
function bO(e, t) {
  return t.length < 2
    ? e.length < 2
      ? `[^${Bt(e + t)}]`
      : `(?:(?!${Bt(e)})[^${Bt(t)}])`
    : e.length < 2
      ? `(?:(?!${Bt(t)})[^${Bt(e)}])`
      : `(?:(?!${Bt(t)}|${Bt(e)})[\\s\\S])`;
}
function yO(e) {
  return e.tokens
    .map(function t(r, n, s) {
      if (r.type === 'text') return lO(r.value);
      if (r.type === 'group') return `{${r.tokens.map(t).join('')}}`;
      const o = mO(r.name) && gO(s[n + 1]) ? r.name : JSON.stringify(r.name);
      if (r.type === 'param') return `:${o}`;
      if (r.type === 'wildcard') return `*${o}`;
      throw new TypeError(`Unexpected token: ${r}`);
    })
    .join('');
}
function mO(e) {
  const [t, ...r] = e;
  return r2.test(t) ? r.every((n) => F0.test(n)) : !1;
}
function gO(e) {
  return (e == null ? void 0 : e.type) !== 'text' ? !0 : !F0.test(e.value[0]);
}
const sL = (e, t) => ({
    id: e,
    jsonrpc: '2.0',
    error: { code: Ja.UserRejectedRequest, message: t ?? 'User rejected the request.' },
  }),
  aL = (e, t) => ({
    id: e,
    jsonrpc: '2.0',
    error: { code: Ja.RequestCancelled, message: t ?? 'The request was cancelled.' },
  });
export {
  Ft as $,
  by as A,
  yy as B,
  UB as C,
  K as D,
  $y as E,
  ae as F,
  nk as G,
  Sy as H,
  Un as I,
  HO as J,
  gy as K,
  _B as L,
  Ey as M,
  We as N,
  F4 as O,
  _y as P,
  $v as Q,
  Tl as R,
  Ay as S,
  Pl as T,
  o6 as U,
  g as V,
  Nn as W,
  Jc as X,
  Jo as Y,
  E0 as Z,
  Zc as _,
  Aa as a,
  vy as a$,
  at as a0,
  O8 as a1,
  ih as a2,
  V5 as a3,
  _l as a4,
  vB as a5,
  IB as a6,
  ja as a7,
  M4 as a8,
  nB as a9,
  oB as aA,
  YO as aB,
  Ka as aC,
  cB as aD,
  sB as aE,
  aB as aF,
  ed as aG,
  FO as aH,
  Ze as aI,
  qO as aJ,
  jO as aK,
  LB as aL,
  TB as aM,
  kB as aN,
  U4 as aO,
  jB as aP,
  CB as aQ,
  je as aR,
  NB as aS,
  VB as aT,
  UO as aU,
  DB as aV,
  h4 as aW,
  WO as aX,
  ZO as aY,
  GO as aZ,
  iB as a_,
  AB as aa,
  wB as ab,
  QO as ac,
  KO as ad,
  HB as ae,
  FB as af,
  zB as ag,
  Yk as ah,
  tO as ai,
  nL as aj,
  rL as ak,
  si as al,
  GB as am,
  rO as an,
  gB as ao,
  Fk as ap,
  Vk as aq,
  Qk as ar,
  WB as as,
  QB as at,
  Zk as au,
  VO as av,
  OB as aw,
  EB as ax,
  l4 as ay,
  p4 as az,
  ce as b,
  PB as b0,
  ni as b1,
  qB as b2,
  zO as b3,
  jA as b4,
  nI as b5,
  PA as b6,
  hT as b7,
  BB as b8,
  SB as b9,
  sL as ba,
  zD as bb,
  JB as bc,
  mB as bd,
  aL as be,
  Ja as bf,
  lP as bg,
  gC as bh,
  ZB as bi,
  N0 as bj,
  eL as bk,
  tL as bl,
  KB as bm,
  nO as bn,
  XB as bo,
  RB as c,
  ve as d,
  Ne as e,
  Wc as f,
  Q as g,
  MB as h,
  $B as i,
  eB as j,
  tB as k,
  XO as l,
  Vn as m,
  _0 as n,
  Me as o,
  te as p,
  S0 as q,
  fe as r,
  w0 as s,
  Jf as t,
  my as u,
  rB as v,
  jm as w,
  He as x,
  RO as y,
  Ug as z,
};
