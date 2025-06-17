var A_ = Object.defineProperty,
  O_ = Object.defineProperties;
var R_ = Object.getOwnPropertyDescriptors;
var _i = Object.getOwnPropertySymbols;
var Rc = Object.prototype.hasOwnProperty,
  yc = Object.prototype.propertyIsEnumerable;
var vo = (t, e, n) =>
    e in t ? A_(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
  xe = (t, e) => {
    for (var n in e || (e = {})) Rc.call(e, n) && vo(t, n, e[n]);
    if (_i) for (var n of _i(e)) yc.call(e, n) && vo(t, n, e[n]);
    return t;
  },
  ct = (t, e) => O_(t, R_(e));
var Tc = (t, e) => {
  var n = {};
  for (var r in t) Rc.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && _i) for (var r of _i(t)) e.indexOf(r) < 0 && yc.call(t, r) && (n[r] = t[r]);
  return n;
};
var c = (t, e, n) => vo(t, typeof e != 'symbol' ? e + '' : e, n);
import {
  cT as Ae,
  P as We,
  B as Xt,
  am as ne,
  cU as rs,
  bw as $n,
  b as Pe,
  cV as y_,
  bn as T_,
  cW as E_,
  cX as Ec,
  b9 as yl,
  cM as Tl,
  cY as El,
  cZ as w_,
  c_ as I_,
  c$ as $r,
  bi as me,
  bb as T,
  d0 as Li,
  bh as pr,
  bj as jr,
  bk as Lt,
  d1 as wl,
  d2 as Il,
  d3 as bl,
  d4 as Hr,
  d5 as b_,
  d6 as N_,
  bm as Ye,
  d7 as Ui,
  d8 as C_,
  d9 as S_,
  da as v_,
  db as P_,
  dc as Nl,
  dd as M_,
  bl as ot,
  bg as Fn,
  de as Cl,
  r as k_,
} from './vendor-CFRnETMC.js';
import { a as D_ } from './index-DwWh_48g.js';
(function () {
  try {
    var t =
        typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof globalThis < 'u'
              ? globalThis
              : typeof self < 'u'
                ? self
                : {},
      e = new t.Error().stack;
    e &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[e] = '39fc9b77-8f74-4444-aafe-ac2411379a9f'),
      (t._sentryDebugIdIdentifier = 'sentry-dbid-39fc9b77-8f74-4444-aafe-ac2411379a9f'));
  } catch (n) {}
})();
var Sl = {},
  Yn = {},
  Oe = {};
function B_(t, e) {
  return Array.apply(0, new Array(Math.ceil(t.length / e))).map((n, r) =>
    t.slice(r * e, (r + 1) * e)
  );
}
const pn = (t) => 'version' in t;
function x_(t) {
  return t.reduce((e, n) => e + n.toString(16).padStart(2, '0'), '0x');
}
function L_(t) {
  t.indexOf('0x') === 0 && (t = t.substr(2)), t.length % 2 === 1 && (t = '0' + t);
  let e = t.match(/.{2}/g);
  return e === null ? Pe.Buffer.from([]) : Pe.Buffer.from(e.map((n) => parseInt(n, 16)));
}
var U_ = Object.freeze({ __proto__: null, encode: x_, decode: L_ });
function vl(t) {
  return new TextDecoder('utf-8').decode(t);
}
function $_(t) {
  return new TextEncoder().encode(t);
}
var j_ = Object.freeze({ __proto__: null, decode: vl, encode: $_ });
function is(t) {
  return $n.encode(t);
}
function H_(t) {
  return $n.decode(t);
}
var G_ = Object.freeze({ __proto__: null, encode: is, decode: H_ });
function os(t) {
  return t.toString('base64');
}
function Es(t) {
  return Pe.Buffer.from(t, 'base64');
}
var F_ = Object.freeze({ __proto__: null, encode: os, decode: Es }),
  K_ = Object.freeze({ __proto__: null, hex: U_, utf8: j_, bs58: G_, base64: F_ });
function xn(t) {
  return 'accounts' in t;
}
async function V_(t) {
  const e = (await We.findProgramAddress([], t))[0];
  return await We.createWithSeed(e, W_(), t);
}
function W_() {
  return 'anchor:idl';
}
const q_ = Ae.struct([Ae.publicKey('authority'), Ae.vecU8('data')]);
function z_(t) {
  return q_.decode(t);
}
function Y_(t) {
  const e = ['name', 'path', 'account', 'relations', 'generic'],
    n = (i) => i.split('.').map(w_).join('.'),
    r = (i) => {
      for (const u in i) {
        const d = i[u];
        e.includes(u) ? (i[u] = Array.isArray(d) ? d.map(n) : n(d)) : typeof d == 'object' && r(d);
      }
    },
    o = structuredClone(t);
  return r(o), o;
}
function Ln(t, e, n, r) {
  return t != null && t.length ? (t[0].name ? n(t) : r(t)) : e();
}
function Pl(t) {
  const e = new Map();
  return (
    t.errors &&
      t.errors.forEach((n) => {
        var r;
        let o = (r = n.msg) !== null && r !== void 0 ? r : n.name;
        e.set(n.code, o);
      }),
    e
  );
}
function Ml(t, ...e) {
  if (t.args.length != e.length) throw new Error('Invalid argument length');
  const n = {};
  let r = 0;
  return (
    t.args.forEach((o) => {
      (n[o.name] = e[r]), (r += 1);
    }),
    n
  );
}
function ws(t, e = {}) {
  t.forEach((n) => {
    if (xn(n)) ws(n.accounts, e[n.name]);
    else if (!e[n.name]) throw new Error('Account `'.concat(n.name, '` not provided.'));
  });
}
function nt(t) {
  return t instanceof We ? t : new We(t);
}
class X_ extends TypeError {
  constructor(e, n) {
    let r;
    const f = e,
      { message: o } = f,
      i = Tc(f, ['message']),
      { path: u } = e,
      d = u.length === 0 ? o : 'At path: ' + u.join('.') + ' -- ' + o;
    super(d),
      (this.value = void 0),
      (this.key = void 0),
      (this.type = void 0),
      (this.refinement = void 0),
      (this.path = void 0),
      (this.branch = void 0),
      (this.failures = void 0),
      Object.assign(this, i),
      (this.name = this.constructor.name),
      (this.failures = () => {
        var s;
        return (s = r) != null ? s : (r = [e, ...n()]);
      });
  }
}
function J_(t) {
  return jn(t) && typeof t[Symbol.iterator] == 'function';
}
function jn(t) {
  return typeof t == 'object' && t != null;
}
function Zt(t) {
  return typeof t == 'string' ? JSON.stringify(t) : '' + t;
}
function Q_(t) {
  const { done: e, value: n } = t.next();
  return e ? void 0 : n;
}
function Z_(t, e, n, r) {
  if (t === !0) return;
  t === !1 ? (t = {}) : typeof t == 'string' && (t = { message: t });
  const { path: o, branch: i } = e,
    { type: u } = n,
    {
      refinement: d,
      message: f = 'Expected a value of type `' +
        u +
        '`' +
        (d ? ' with refinement `' + d + '`' : '') +
        ', but received: `' +
        Zt(r) +
        '`',
    } = t;
  return ct(xe({ value: r, type: u, refinement: d, key: o[o.length - 1], path: o, branch: i }, t), {
    message: f,
  });
}
function* wc(t, e, n, r) {
  J_(t) || (t = [t]);
  for (const o of t) {
    const i = Z_(o, e, n, r);
    i && (yield i);
  }
}
function* Is(t, e, n) {
  n === void 0 && (n = {});
  const { path: r = [], branch: o = [t], coerce: i = !1, mask: u = !1 } = n,
    d = { path: r, branch: o };
  if (
    i &&
    ((t = e.coercer(t, d)), u && e.type !== 'type' && jn(e.schema) && jn(t) && !Array.isArray(t))
  )
    for (const s in t) e.schema[s] === void 0 && delete t[s];
  let f = !0;
  for (const s of e.validator(t, d)) (f = !1), yield [s, void 0];
  for (let [s, _, g] of e.entries(t, d)) {
    const m = Is(_, g, {
      path: s === void 0 ? r : [...r, s],
      branch: s === void 0 ? o : [...o, _],
      coerce: i,
      mask: u,
    });
    for (const h of m)
      h[0]
        ? ((f = !1), yield [h[0], void 0])
        : i &&
          ((_ = h[1]),
          s === void 0
            ? (t = _)
            : t instanceof Map
              ? t.set(s, _)
              : t instanceof Set
                ? t.add(_)
                : jn(t) && (t[s] = _));
  }
  if (f) for (const s of e.refiner(t, d)) (f = !1), yield [s, void 0];
  f && (yield [void 0, t]);
}
class rn {
  constructor(e) {
    (this.TYPE = void 0),
      (this.type = void 0),
      (this.schema = void 0),
      (this.coercer = void 0),
      (this.validator = void 0),
      (this.refiner = void 0),
      (this.entries = void 0);
    const {
      type: n,
      schema: r,
      validator: o,
      refiner: i,
      coercer: u = (f) => f,
      entries: d = function* () {},
    } = e;
    (this.type = n),
      (this.schema = r),
      (this.entries = d),
      (this.coercer = u),
      o
        ? (this.validator = (f, s) => {
            const _ = o(f, s);
            return wc(_, s, this, f);
          })
        : (this.validator = () => []),
      i
        ? (this.refiner = (f, s) => {
            const _ = i(f, s);
            return wc(_, s, this, f);
          })
        : (this.refiner = () => []);
  }
  assert(e) {
    return em(e, this);
  }
  create(e) {
    return bs(e, this);
  }
  is(e) {
    return kl(e, this);
  }
  mask(e) {
    return tm(e, this);
  }
  validate(e, n) {
    return n === void 0 && (n = {}), Gr(e, this, n);
  }
}
function em(t, e) {
  const n = Gr(t, e);
  if (n[0]) throw n[0];
}
function bs(t, e) {
  const n = Gr(t, e, { coerce: !0 });
  if (n[0]) throw n[0];
  return n[1];
}
function tm(t, e) {
  const n = Gr(t, e, { coerce: !0, mask: !0 });
  if (n[0]) throw n[0];
  return n[1];
}
function kl(t, e) {
  return !Gr(t, e)[0];
}
function Gr(t, e, n) {
  n === void 0 && (n = {});
  const r = Is(t, e, n),
    o = Q_(r);
  return o[0]
    ? [
        new X_(o[0], function* () {
          for (const u of r) u[0] && (yield u[0]);
        }),
        void 0,
      ]
    : [void 0, o[1]];
}
function Fr(t, e) {
  return new rn({ type: t, schema: null, validator: e });
}
function nm() {
  return Fr('any', () => !0);
}
function Po(t) {
  return new rn({
    type: 'array',
    schema: t,
    *entries(e) {
      if (t && Array.isArray(e)) for (const [n, r] of e.entries()) yield [n, r, t];
    },
    coercer(e) {
      return Array.isArray(e) ? e.slice() : e;
    },
    validator(e) {
      return Array.isArray(e) || 'Expected an array value, but received: ' + Zt(e);
    },
  });
}
function rm() {
  return Fr('boolean', (t) => typeof t == 'boolean');
}
function Ic(t) {
  const e = Zt(t);
  return new rn({
    type: 'literal',
    schema: t,
    validator(n) {
      return n === t || 'Expected the literal `' + e + '`, but received: ' + Zt(n);
    },
  });
}
function mi(t) {
  return new rn(
    ct(xe({}, t), {
      validator: (e, n) => e === null || t.validator(e, n),
      refiner: (e, n) => e === null || t.refiner(e, n),
    })
  );
}
function Si() {
  return Fr(
    'number',
    (t) => (typeof t == 'number' && !isNaN(t)) || 'Expected a number, but received: ' + Zt(t)
  );
}
function vi(t) {
  return new rn(
    ct(xe({}, t), {
      validator: (e, n) => e === void 0 || t.validator(e, n),
      refiner: (e, n) => e === void 0 || t.refiner(e, n),
    })
  );
}
function Rn() {
  return Fr('string', (t) => typeof t == 'string' || 'Expected a string, but received: ' + Zt(t));
}
function Jt(t) {
  const e = Object.keys(t);
  return new rn({
    type: 'type',
    schema: t,
    *entries(n) {
      if (jn(n)) for (const r of e) yield [r, n[r], t[r]];
    },
    validator(n) {
      return jn(n) || 'Expected an object, but received: ' + Zt(n);
    },
  });
}
function Dl(t) {
  const e = t.map((n) => n.type).join(' | ');
  return new rn({
    type: 'union',
    schema: null,
    coercer(n, r) {
      return (
        t.find((i) => {
          const [u] = i.validate(n, { coerce: !0 });
          return !u;
        }) || Ns()
      ).coercer(n, r);
    },
    validator(n, r) {
      const o = [];
      for (const i of t) {
        const [...u] = Is(n, i, r),
          [d] = u;
        if (d[0]) for (const [f] of u) f && o.push(f);
        else return [];
      }
      return ['Expected the value to satisfy a union of `' + e + '`, but received: ' + Zt(n), ...o];
    },
  });
}
function Ns() {
  return Fr('unknown', () => !0);
}
function im(t, e, n) {
  return new rn(
    ct(xe({}, t), { coercer: (r, o) => (kl(r, e) ? t.coercer(n(r, o), o) : t.coercer(r, o)) })
  );
}
async function om(t, e, n, r) {
  (t = nt(t)), r || (r = mr());
  const o = new yl();
  if (
    (o.add(new Tl({ programId: t, keys: e != null ? e : [], data: n })),
    r.sendAndConfirm === void 0)
  )
    throw new Error("This function requires 'Provider.sendAndConfirm' to be implemented.");
  return await r.sendAndConfirm(o, []);
}
const bc = 99;
async function sm(t, e, n) {
  return (await Cs(t, e, n)).map((o) =>
    o ? { publicKey: o.publicKey, account: o.account } : null
  );
}
async function Cs(t, e, n) {
  if (e.length <= bc) return await Nc(t, e, n);
  {
    const r = B_(e, bc);
    return (await Promise.all(r.map((i) => Nc(t, i, n)))).flat();
  }
}
async function Nc(t, e, n) {
  const r = n != null ? n : t.commitment,
    { value: o, context: i } = await t.getMultipleAccountsInfoAndContext(e, r);
  return o.map((d, f) => (d === null ? null : { publicKey: e[f], account: d, context: i }));
}
async function Bl(t, e, n, r, o) {
  var i;
  n && n.length > 0 && e.sign(...n);
  const u = e._compile(),
    d = u.serialize(),
    s = e._serialize(d).toString('base64'),
    _ = { encoding: 'base64', commitment: r != null ? r : t.commitment };
  if (o) {
    const A = (Array.isArray(o) ? o : u.nonProgramIds()).map((R) => R.toBase58());
    _.accounts = { encoding: 'base64', addresses: A };
  }
  n && n.length > 0 && (_.sigVerify = !0);
  const g = [s, _],
    m = await t._rpcRequest('simulateTransaction', g),
    h = bs(m, lm);
  if ('error' in h) {
    let A;
    if (
      'data' in h.error &&
      ((A = (i = h.error.data) === null || i === void 0 ? void 0 : i.logs), A && Array.isArray(A))
    ) {
      const R = '\n    ',
        b = R + A.join(R);
      console.error(h.error.message, b);
    }
    throw new rs('failed to simulate transaction: ' + h.error.message, A);
  }
  return h.result;
}
function am(t) {
  return im(xl(t), um, (e) => ('error' in e ? e : ct(xe({}, e), { result: bs(e.result, t) })));
}
const um = xl(Ns());
function xl(t) {
  return Dl([
    Jt({ jsonrpc: Ic('2.0'), id: Rn(), result: t }),
    Jt({ jsonrpc: Ic('2.0'), id: Rn(), error: Jt({ code: Ns(), message: Rn(), data: vi(nm()) }) }),
  ]);
}
function cm(t) {
  return am(Jt({ context: Jt({ slot: Si() }), value: t }));
}
const lm = cm(
  Jt({
    err: mi(Dl([Jt({}), Rn()])),
    logs: mi(Po(Rn())),
    accounts: vi(
      mi(
        Po(
          mi(
            Jt({
              executable: rm(),
              owner: Rn(),
              lamports: Si(),
              data: Po(Rn()),
              rentEpoch: vi(Si()),
            })
          )
        )
      )
    ),
    unitsConsumed: vi(Si()),
  })
);
var dm = Object.freeze({
  __proto__: null,
  invoke: om,
  getMultipleAccounts: sm,
  getMultipleAccountsAndContext: Cs,
  simulateTransaction: Bl,
});
class _r {
  constructor(e, n, r = _r.defaultOptions()) {
    (this.connection = e),
      (this.wallet = n),
      (this.opts = r),
      (this.publicKey = n == null ? void 0 : n.publicKey);
  }
  static defaultOptions() {
    return { preflightCommitment: 'processed', commitment: 'processed' };
  }
  static local(e, n = _r.defaultOptions()) {
    throw new Error('Provider local is not available on browser.');
  }
  static env() {
    throw new Error('Provider env is not available on browser.');
  }
  async sendAndConfirm(e, n, r) {
    var o, i, u, d;
    if ((r === void 0 && (r = this.opts), pn(e))) n && e.sign(n);
    else if (
      ((e.feePayer = (o = e.feePayer) !== null && o !== void 0 ? o : this.wallet.publicKey),
      (e.recentBlockhash = (
        await this.connection.getLatestBlockhash(r.preflightCommitment)
      ).blockhash),
      n)
    )
      for (const s of n) e.partialSign(s);
    e = await this.wallet.signTransaction(e);
    const f = e.serialize();
    try {
      return await Cc(this.connection, f, r);
    } catch (s) {
      if (s instanceof ss) {
        const _ = is(
            pn(e)
              ? ((i = e.signatures) === null || i === void 0 ? void 0 : i[0]) || new Uint8Array()
              : (u = e.signature) !== null && u !== void 0
                ? u
                : new Uint8Array()
          ),
          g = pn(e) ? 0 : void 0,
          m = await this.connection.getTransaction(_, {
            commitment: 'confirmed',
            maxSupportedTransactionVersion: g,
          });
        if (m) {
          const h = (d = m.meta) === null || d === void 0 ? void 0 : d.logMessages;
          throw h ? new rs(s.message, h) : s;
        } else throw s;
      } else throw s;
    }
  }
  async sendAll(e, n) {
    var r, o, i;
    n === void 0 && (n = this.opts);
    const u = (await this.connection.getLatestBlockhash(n.preflightCommitment)).blockhash;
    let d = e.map((_) => {
      var g, m;
      if (pn(_.tx)) {
        let h = _.tx;
        return _.signers && h.sign(_.signers), h;
      } else {
        let h = _.tx,
          A = (g = _.signers) !== null && g !== void 0 ? g : [];
        return (
          (h.feePayer = (m = h.feePayer) !== null && m !== void 0 ? m : this.wallet.publicKey),
          (h.recentBlockhash = u),
          A.forEach((R) => {
            h.partialSign(R);
          }),
          h
        );
      }
    });
    const f = await this.wallet.signAllTransactions(d),
      s = [];
    for (let _ = 0; _ < d.length; _ += 1) {
      const g = f[_],
        m = g.serialize();
      try {
        s.push(await Cc(this.connection, m, n));
      } catch (h) {
        if (h instanceof ss) {
          const A = is(
              pn(g)
                ? ((r = g.signatures) === null || r === void 0 ? void 0 : r[0]) || new Uint8Array()
                : (o = g.signature) !== null && o !== void 0
                  ? o
                  : new Uint8Array()
            ),
            R = pn(g) ? 0 : void 0,
            b = await this.connection.getTransaction(A, {
              commitment: 'confirmed',
              maxSupportedTransactionVersion: R,
            });
          if (b) {
            const N = (i = b.meta) === null || i === void 0 ? void 0 : i.logMessages;
            throw N ? new rs(h.message, N) : h;
          } else throw h;
        } else throw h;
      }
    }
    return s;
  }
  async simulate(e, n, r, o) {
    let i = (await this.connection.getLatestBlockhash(r != null ? r : this.connection.commitment))
        .blockhash,
      u;
    if (
      (pn(e)
        ? (n && n.length > 0 && (e.sign(n), (e = await this.wallet.signTransaction(e))),
          (u = await this.connection.simulateTransaction(e, { commitment: r })))
        : ((e.feePayer = e.feePayer || this.wallet.publicKey),
          (e.recentBlockhash = i),
          n && n.length > 0 && (e = await this.wallet.signTransaction(e)),
          (u = await Bl(this.connection, e, n, r, o))),
      u.value.err)
    )
      throw new fm(u.value);
    return u.value;
  }
}
class fm extends Error {
  constructor(e, n) {
    super(n), (this.simulationResponse = e);
  }
}
async function Cc(t, e, n) {
  const r = n && {
      skipPreflight: n.skipPreflight,
      preflightCommitment: n.preflightCommitment || n.commitment,
    },
    o = await t.sendRawTransaction(e, r),
    i = (await t.confirmTransaction(o, n && n.commitment)).value;
  if (i.err) throw new ss('Raw transaction '.concat(o, ' failed (').concat(JSON.stringify(i), ')'));
  return o;
}
class ss extends Error {
  constructor(e) {
    super(e);
  }
}
function pm(t) {
  as = t;
}
function mr() {
  return as === null ? _r.local() : as;
}
let as = null;
var _m =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof ne.global < 'u'
        ? ne.global
        : typeof self < 'u'
          ? self
          : {};
function mm(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default') ? t.default : t;
}
var j = {};
Object.defineProperty(j, '__esModule', { value: !0 });
var Ll =
    (j.ANCHOR_ERROR__REQUIRE_EQ_VIOLATED =
    kd =
    j.ANCHOR_ERROR__REQUIRE_VIOLATED =
    Md =
    j.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION_PROGRAM_ID =
    Pd =
    j.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION_AUTHORITY =
    vd =
    j.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION =
    Sd =
    j.ANCHOR_ERROR__CONSTRAINT_MINT_PERMANENT_DELEGATE_EXTENSION_DELEGATE =
    Cd =
    j.ANCHOR_ERROR__CONSTRAINT_MINT_PERMANENT_DELEGATE_EXTENSION =
    Nd =
    j.ANCHOR_ERROR__CONSTRAINT_MINT_CLOSE_AUTHORITY_EXTENSION_AUTHORITY =
    bd =
    j.ANCHOR_ERROR__CONSTRAINT_MINT_CLOSE_AUTHORITY_EXTENSION =
    Id =
    j.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION_METADATA_ADDRESS =
    wd =
    j.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION_AUTHORITY =
    Ed =
    j.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION =
    Td =
    j.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION_MEMBER_ADDRESS =
    yd =
    j.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION_AUTHORITY =
    Rd =
    j.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION =
    Od =
    j.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION_GROUP_ADDRESS =
    Ad =
    j.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION_AUTHORITY =
    gd =
    j.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION =
    hd =
    j.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED_TOKEN_TOKEN_PROGRAM =
    md =
    j.ANCHOR_ERROR__CONSTRAINT_MINT_TOKEN_PROGRAM =
    _d =
    j.ANCHOR_ERROR__CONSTRAINT_TOKEN_TOKEN_PROGRAM =
    pd =
    j.ANCHOR_ERROR__CONSTRAINT_ACCOUNT_IS_NONE =
    fd =
    j.ANCHOR_ERROR__CONSTRAINT_SPACE =
    dd =
    j.ANCHOR_ERROR__CONSTRAINT_MINT_DECIMALS =
    ld =
    j.ANCHOR_ERROR__CONSTRAINT_MINT_FREEZE_AUTHORITY =
    cd =
    j.ANCHOR_ERROR__CONSTRAINT_MINT_MINT_AUTHORITY =
    ud =
    j.ANCHOR_ERROR__CONSTRAINT_TOKEN_OWNER =
    ad =
    j.ANCHOR_ERROR__CONSTRAINT_TOKEN_MINT =
    sd =
    j.ANCHOR_ERROR__CONSTRAINT_ZERO =
    od =
    j.ANCHOR_ERROR__CONSTRAINT_ADDRESS =
    id =
    j.ANCHOR_ERROR__CONSTRAINT_CLOSE =
    rd =
    j.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED_INIT =
    nd =
    j.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED =
    td =
    j.ANCHOR_ERROR__CONSTRAINT_STATE =
    ed =
    j.ANCHOR_ERROR__CONSTRAINT_EXECUTABLE =
    Zl =
    j.ANCHOR_ERROR__CONSTRAINT_SEEDS =
    Ql =
    j.ANCHOR_ERROR__CONSTRAINT_RENT_EXEMPT =
    Jl =
    j.ANCHOR_ERROR__CONSTRAINT_OWNER =
    Xl =
    j.ANCHOR_ERROR__CONSTRAINT_RAW =
    Yl =
    j.ANCHOR_ERROR__CONSTRAINT_SIGNER =
    zl =
    j.ANCHOR_ERROR__CONSTRAINT_HAS_ONE =
    ql =
    j.ANCHOR_ERROR__CONSTRAINT_MUT =
    Wl =
    j.ANCHOR_ERROR__EVENT_INSTRUCTION_STUB =
    Vl =
    j.ANCHOR_ERROR__IDL_ACCOUNT_NOT_EMPTY =
    Kl =
    j.ANCHOR_ERROR__IDL_INSTRUCTION_INVALID_PROGRAM =
    Fl =
    j.ANCHOR_ERROR__IDL_INSTRUCTION_STUB =
    Gl =
    j.ANCHOR_ERROR__INSTRUCTION_DID_NOT_SERIALIZE =
    Hl =
    j.ANCHOR_ERROR__INSTRUCTION_DID_NOT_DESERIALIZE =
    jl =
    j.ANCHOR_ERROR__INSTRUCTION_FALLBACK_NOT_FOUND =
    $l =
    j.ANCHOR_ERROR__INSTRUCTION_MISSING =
      void 0),
  Ul =
    (j.ANCHOR_ERROR__DEPRECATED =
    sf =
    j.ANCHOR_ERROR__INVALID_NUMERIC_CONVERSION =
    of =
    j.ANCHOR_ERROR__TRYING_TO_INIT_PAYER_AS_PROGRAM_ACCOUNT =
    rf =
    j.ANCHOR_ERROR__DECLARED_PROGRAM_ID_MISMATCH =
    nf =
    j.ANCHOR_ERROR__ACCOUNT_DUPLICATE_REALLOCS =
    tf =
    j.ANCHOR_ERROR__ACCOUNT_REALLOC_EXCEEDS_LIMIT =
    ef =
    j.ANCHOR_ERROR__ACCOUNT_SYSVAR_MISMATCH =
    Zd =
    j.ANCHOR_ERROR__ACCOUNT_NOT_ASSOCIATED_TOKEN_ACCOUNT =
    Qd =
    j.ANCHOR_ERROR__ACCOUNT_NOT_PROGRAM_DATA =
    Jd =
    j.ANCHOR_ERROR__ACCOUNT_NOT_INITIALIZED =
    Xd =
    j.ANCHOR_ERROR__ACCOUNT_NOT_SYSTEM_OWNED =
    Yd =
    j.ANCHOR_ERROR__ACCOUNT_NOT_SIGNER =
    zd =
    j.ANCHOR_ERROR__INVALID_PROGRAM_EXECUTABLE =
    qd =
    j.ANCHOR_ERROR__INVALID_PROGRAM_ID =
    Wd =
    j.ANCHOR_ERROR__ACCOUNT_OWNED_BY_WRONG_PROGRAM =
    Vd =
    j.ANCHOR_ERROR__ACCOUNT_NOT_MUTABLE =
    Kd =
    j.ANCHOR_ERROR__ACCOUNT_NOT_ENOUGH_KEYS =
    Fd =
    j.ANCHOR_ERROR__ACCOUNT_DID_NOT_SERIALIZE =
    Gd =
    j.ANCHOR_ERROR__ACCOUNT_DID_NOT_DESERIALIZE =
    Hd =
    j.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_MISMATCH =
    jd =
    j.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_NOT_FOUND =
    $d =
    j.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_ALREADY_SET =
    Ud =
    j.ANCHOR_ERROR__REQUIRE_GTE_VIOLATED =
    Ld =
    j.ANCHOR_ERROR__REQUIRE_GT_VIOLATED =
    xd =
    j.ANCHOR_ERROR__REQUIRE_KEYS_NEQ_VIOLATED =
    Bd =
    j.ANCHOR_ERROR__REQUIRE_NEQ_VIOLATED =
    Dd =
    j.ANCHOR_ERROR__REQUIRE_KEYS_EQ_VIOLATED =
      void 0),
  $l = (j.ANCHOR_ERROR__INSTRUCTION_MISSING = 100),
  jl = (j.ANCHOR_ERROR__INSTRUCTION_FALLBACK_NOT_FOUND = 101),
  Hl = (j.ANCHOR_ERROR__INSTRUCTION_DID_NOT_DESERIALIZE = 102),
  Gl = (j.ANCHOR_ERROR__INSTRUCTION_DID_NOT_SERIALIZE = 103),
  Fl = (j.ANCHOR_ERROR__IDL_INSTRUCTION_STUB = 1e3),
  Kl = (j.ANCHOR_ERROR__IDL_INSTRUCTION_INVALID_PROGRAM = 1001),
  Vl = (j.ANCHOR_ERROR__IDL_ACCOUNT_NOT_EMPTY = 1002),
  Wl = (j.ANCHOR_ERROR__EVENT_INSTRUCTION_STUB = 1500),
  ql = (j.ANCHOR_ERROR__CONSTRAINT_MUT = 2e3),
  zl = (j.ANCHOR_ERROR__CONSTRAINT_HAS_ONE = 2001),
  Yl = (j.ANCHOR_ERROR__CONSTRAINT_SIGNER = 2002),
  Xl = (j.ANCHOR_ERROR__CONSTRAINT_RAW = 2003),
  Jl = (j.ANCHOR_ERROR__CONSTRAINT_OWNER = 2004),
  Ql = (j.ANCHOR_ERROR__CONSTRAINT_RENT_EXEMPT = 2005),
  Zl = (j.ANCHOR_ERROR__CONSTRAINT_SEEDS = 2006),
  ed = (j.ANCHOR_ERROR__CONSTRAINT_EXECUTABLE = 2007),
  td = (j.ANCHOR_ERROR__CONSTRAINT_STATE = 2008),
  nd = (j.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED = 2009),
  rd = (j.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED_INIT = 2010),
  id = (j.ANCHOR_ERROR__CONSTRAINT_CLOSE = 2011),
  od = (j.ANCHOR_ERROR__CONSTRAINT_ADDRESS = 2012),
  sd = (j.ANCHOR_ERROR__CONSTRAINT_ZERO = 2013),
  ad = (j.ANCHOR_ERROR__CONSTRAINT_TOKEN_MINT = 2014),
  ud = (j.ANCHOR_ERROR__CONSTRAINT_TOKEN_OWNER = 2015),
  cd = (j.ANCHOR_ERROR__CONSTRAINT_MINT_MINT_AUTHORITY = 2016),
  ld = (j.ANCHOR_ERROR__CONSTRAINT_MINT_FREEZE_AUTHORITY = 2017),
  dd = (j.ANCHOR_ERROR__CONSTRAINT_MINT_DECIMALS = 2018),
  fd = (j.ANCHOR_ERROR__CONSTRAINT_SPACE = 2019),
  pd = (j.ANCHOR_ERROR__CONSTRAINT_ACCOUNT_IS_NONE = 2020),
  _d = (j.ANCHOR_ERROR__CONSTRAINT_TOKEN_TOKEN_PROGRAM = 2021),
  md = (j.ANCHOR_ERROR__CONSTRAINT_MINT_TOKEN_PROGRAM = 2022),
  hd = (j.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED_TOKEN_TOKEN_PROGRAM = 2023),
  gd = (j.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION = 2024),
  Ad = (j.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION_AUTHORITY = 2025),
  Od = (j.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION_GROUP_ADDRESS = 2026),
  Rd = (j.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION = 2027),
  yd = (j.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION_AUTHORITY = 2028),
  Td = (j.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION_MEMBER_ADDRESS = 2029),
  Ed = (j.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION = 2030),
  wd = (j.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION_AUTHORITY = 2031),
  Id = (j.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION_METADATA_ADDRESS = 2032),
  bd = (j.ANCHOR_ERROR__CONSTRAINT_MINT_CLOSE_AUTHORITY_EXTENSION = 2033),
  Nd = (j.ANCHOR_ERROR__CONSTRAINT_MINT_CLOSE_AUTHORITY_EXTENSION_AUTHORITY = 2034),
  Cd = (j.ANCHOR_ERROR__CONSTRAINT_MINT_PERMANENT_DELEGATE_EXTENSION = 2035),
  Sd = (j.ANCHOR_ERROR__CONSTRAINT_MINT_PERMANENT_DELEGATE_EXTENSION_DELEGATE = 2036),
  vd = (j.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION = 2037),
  Pd = (j.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION_AUTHORITY = 2038),
  Md = (j.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION_PROGRAM_ID = 2039),
  kd = (j.ANCHOR_ERROR__REQUIRE_VIOLATED = 2500);
Ll = j.ANCHOR_ERROR__REQUIRE_EQ_VIOLATED = 2501;
var Dd = (j.ANCHOR_ERROR__REQUIRE_KEYS_EQ_VIOLATED = 2502),
  Bd = (j.ANCHOR_ERROR__REQUIRE_NEQ_VIOLATED = 2503),
  xd = (j.ANCHOR_ERROR__REQUIRE_KEYS_NEQ_VIOLATED = 2504),
  Ld = (j.ANCHOR_ERROR__REQUIRE_GT_VIOLATED = 2505),
  Ud = (j.ANCHOR_ERROR__REQUIRE_GTE_VIOLATED = 2506),
  $d = (j.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_ALREADY_SET = 3e3),
  jd = (j.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_NOT_FOUND = 3001),
  Hd = (j.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_MISMATCH = 3002),
  Gd = (j.ANCHOR_ERROR__ACCOUNT_DID_NOT_DESERIALIZE = 3003),
  Fd = (j.ANCHOR_ERROR__ACCOUNT_DID_NOT_SERIALIZE = 3004),
  Kd = (j.ANCHOR_ERROR__ACCOUNT_NOT_ENOUGH_KEYS = 3005),
  Vd = (j.ANCHOR_ERROR__ACCOUNT_NOT_MUTABLE = 3006),
  Wd = (j.ANCHOR_ERROR__ACCOUNT_OWNED_BY_WRONG_PROGRAM = 3007),
  qd = (j.ANCHOR_ERROR__INVALID_PROGRAM_ID = 3008),
  zd = (j.ANCHOR_ERROR__INVALID_PROGRAM_EXECUTABLE = 3009),
  Yd = (j.ANCHOR_ERROR__ACCOUNT_NOT_SIGNER = 3010),
  Xd = (j.ANCHOR_ERROR__ACCOUNT_NOT_SYSTEM_OWNED = 3011),
  Jd = (j.ANCHOR_ERROR__ACCOUNT_NOT_INITIALIZED = 3012),
  Qd = (j.ANCHOR_ERROR__ACCOUNT_NOT_PROGRAM_DATA = 3013),
  Zd = (j.ANCHOR_ERROR__ACCOUNT_NOT_ASSOCIATED_TOKEN_ACCOUNT = 3014),
  ef = (j.ANCHOR_ERROR__ACCOUNT_SYSVAR_MISMATCH = 3015),
  tf = (j.ANCHOR_ERROR__ACCOUNT_REALLOC_EXCEEDS_LIMIT = 3016),
  nf = (j.ANCHOR_ERROR__ACCOUNT_DUPLICATE_REALLOCS = 3017),
  rf = (j.ANCHOR_ERROR__DECLARED_PROGRAM_ID_MISMATCH = 4100),
  of = (j.ANCHOR_ERROR__TRYING_TO_INIT_PAYER_AS_PROGRAM_ACCOUNT = 4101),
  sf = (j.ANCHOR_ERROR__INVALID_NUMERIC_CONVERSION = 4102);
Ul = j.ANCHOR_ERROR__DEPRECATED = 5e3;
const hm = new Set(['debug-logs']),
  af = new Map();
function gm(t) {
  if (!hm.has(t)) throw new Error('Invalid feature');
  af.set(t, !0);
}
function Ss(t) {
  return af.get(t) !== void 0;
}
var Am = Object.freeze({ __proto__: null, set: gm, isSet: Ss });
class Mt extends Error {
  constructor(e) {
    super(e), (this.name = 'IdlError');
  }
}
class Xn {
  constructor(e) {
    this.stack = e;
  }
  static parse(e) {
    var n;
    const r = /^Program (\w*) invoke/,
      o = /^Program \w* success/,
      i = [];
    for (let u = 0; u < e.length; u++) {
      if (o.exec(e[u])) {
        i.pop();
        continue;
      }
      const d = (n = r.exec(e[u])) === null || n === void 0 ? void 0 : n[1];
      d && i.push(new We(d));
    }
    return new Xn(i);
  }
}
class Hn extends Error {
  constructor(e, n, r, o, i, u) {
    super(r.join('\n').replace('Program log: ', '')),
      (this.errorLogs = r),
      (this.logs = o),
      (this.error = { errorCode: e, errorMessage: n, comparedValues: u, origin: i }),
      (this._programErrorStack = Xn.parse(o));
  }
  static parse(e) {
    if (!e) return null;
    const n = e.findIndex((m) => m.startsWith('Program log: AnchorError'));
    if (n === -1) return null;
    const r = e[n],
      o = [r];
    let i;
    if (n + 1 < e.length) {
      if (e[n + 1] === 'Program log: Left:') {
        const m = /^Program log: (.*)$/,
          h = m.exec(e[n + 2])[1],
          A = m.exec(e[n + 4])[1];
        (i = [new We(h), new We(A)]), o.push(...e.slice(n + 1, n + 5));
      } else if (e[n + 1].startsWith('Program log: Left:')) {
        const m = /^Program log: (Left|Right): (.*)$/,
          h = m.exec(e[n + 1])[2],
          A = m.exec(e[n + 2])[2];
        o.push(...e.slice(n + 1, n + 3)), (i = [h, A]);
      }
    }
    const d =
        /^Program log: AnchorError occurred\. Error Code: (.*)\. Error Number: (\d*)\. Error Message: (.*)\./.exec(
          r
        ),
      s =
        /^Program log: AnchorError thrown in (.*):(\d*)\. Error Code: (.*)\. Error Number: (\d*)\. Error Message: (.*)\./.exec(
          r
        ),
      g =
        /^Program log: AnchorError caused by account: (.*)\. Error Code: (.*)\. Error Number: (\d*)\. Error Message: (.*)\./.exec(
          r
        );
    if (d) {
      const [m, h, A] = d.slice(1, 4),
        R = { code: m, number: parseInt(h) };
      return new Hn(R, A, o, e, void 0, i);
    } else if (s) {
      const [m, h, A, R, b] = s.slice(1, 6),
        N = { code: A, number: parseInt(R) },
        v = { file: m, line: parseInt(h) };
      return new Hn(N, b, o, e, v, i);
    } else if (g) {
      const [m, h, A, R] = g.slice(1, 5),
        b = m,
        N = { code: h, number: parseInt(A) };
      return new Hn(N, R, o, e, b, i);
    } else return null;
  }
  get program() {
    return this._programErrorStack.stack[this._programErrorStack.stack.length - 1];
  }
  get programErrorStack() {
    return this._programErrorStack.stack;
  }
  toString() {
    return this.message;
  }
}
class hr extends Error {
  constructor(e, n, r) {
    super(),
      (this.code = e),
      (this.msg = n),
      (this.logs = r),
      r && (this._programErrorStack = Xn.parse(r));
  }
  static parse(e, n) {
    const r = e.toString();
    let o;
    if (r.includes('custom program error:')) {
      let d = r.split('custom program error: ');
      if (d.length !== 2) return null;
      o = d[1];
    } else {
      const d = r.match(/"Custom":([0-9]+)}/g);
      if (!d || d.length > 1) return null;
      o = d[0].match(/([0-9]+)/g)[0];
    }
    let i;
    try {
      i = parseInt(o);
    } catch (d) {
      return null;
    }
    let u = n.get(i);
    return u !== void 0
      ? new hr(i, u, e.logs)
      : ((u = uf.get(i)), u !== void 0 ? new hr(i, u, e.logs) : null);
  }
  get program() {
    var e;
    return (e = this._programErrorStack) === null || e === void 0
      ? void 0
      : e.stack[this._programErrorStack.stack.length - 1];
  }
  get programErrorStack() {
    var e;
    return (e = this._programErrorStack) === null || e === void 0 ? void 0 : e.stack;
  }
  toString() {
    return this.msg;
  }
}
function vs(t, e) {
  Ss('debug-logs') && console.log('Translating error:', t);
  const n = Hn.parse(t.logs);
  if (n) return n;
  const r = hr.parse(t, e);
  if (r) return r;
  if (t.logs) {
    const o = {
      get: function (i, u) {
        return u === 'programErrorStack'
          ? i.programErrorStack.stack
          : u === 'program'
            ? i.programErrorStack.stack[t.programErrorStack.stack.length - 1]
            : Reflect.get(...arguments);
      },
    };
    return (t.programErrorStack = Xn.parse(t.logs)), new Proxy(t, o);
  }
  return t;
}
const se = {
    InstructionMissing: $l,
    InstructionFallbackNotFound: jl,
    InstructionDidNotDeserialize: Hl,
    InstructionDidNotSerialize: Gl,
    IdlInstructionStub: Fl,
    IdlInstructionInvalidProgram: Kl,
    IdlAccountNotEmpty: Vl,
    EventInstructionStub: Wl,
    ConstraintMut: ql,
    ConstraintHasOne: zl,
    ConstraintSigner: Yl,
    ConstraintRaw: Xl,
    ConstraintOwner: Jl,
    ConstraintRentExempt: Ql,
    ConstraintSeeds: Zl,
    ConstraintExecutable: ed,
    ConstraintState: td,
    ConstraintAssociated: nd,
    ConstraintAssociatedInit: rd,
    ConstraintClose: id,
    ConstraintAddress: od,
    ConstraintZero: sd,
    ConstraintTokenMint: ad,
    ConstraintTokenOwner: ud,
    ConstraintMintMintAuthority: cd,
    ConstraintMintFreezeAuthority: ld,
    ConstraintMintDecimals: dd,
    ConstraintSpace: fd,
    ConstraintAccountIsNone: pd,
    ConstraintTokenTokenProgram: _d,
    ConstraintMintTokenProgram: md,
    ConstraintAssociatedTokenTokenProgram: hd,
    ConstraintMintGroupPointerExtension: gd,
    ConstraintMintGroupPointerExtensionAuthority: Ad,
    ConstraintMintGroupPointerExtensionGroupAddress: Od,
    ConstraintMintGroupMemberPointerExtension: Rd,
    ConstraintMintGroupMemberPointerExtensionAuthority: yd,
    ConstraintMintGroupMemberPointerExtensionMemberAddress: Td,
    ConstraintMintMetadataPointerExtension: Ed,
    ConstraintMintMetadataPointerExtensionAuthority: wd,
    ConstraintMintMetadataPointerExtensionMetadataAddress: Id,
    ConstraintMintCloseAuthorityExtension: bd,
    ConstraintMintCloseAuthorityExtensionAuthority: Nd,
    ConstraintMintPermanentDelegateExtension: Cd,
    ConstraintMintPermanentDelegateExtensionDelegate: Sd,
    ConstraintMintTransferHookExtension: vd,
    ConstraintMintTransferHookExtensionAuthority: Pd,
    ConstraintMintTransferHookExtensionProgramId: Md,
    RequireViolated: kd,
    RequireEqViolated: Ll,
    RequireKeysEqViolated: Dd,
    RequireNeqViolated: Bd,
    RequireKeysNeqViolated: xd,
    RequireGtViolated: Ld,
    RequireGteViolated: Ud,
    AccountDiscriminatorAlreadySet: $d,
    AccountDiscriminatorNotFound: jd,
    AccountDiscriminatorMismatch: Hd,
    AccountDidNotDeserialize: Gd,
    AccountDidNotSerialize: Fd,
    AccountNotEnoughKeys: Kd,
    AccountNotMutable: Vd,
    AccountOwnedByWrongProgram: Wd,
    InvalidProgramId: qd,
    InvalidProgramExecutable: zd,
    AccountNotSigner: Yd,
    AccountNotSystemOwned: Xd,
    AccountNotInitialized: Jd,
    AccountNotProgramData: Qd,
    AccountNotAssociatedTokenAccount: Zd,
    AccountSysvarMismatch: ef,
    AccountReallocExceedsLimit: tf,
    AccountDuplicateReallocs: nf,
    DeclaredProgramIdMismatch: rf,
    TryingToInitPayerAsProgramAccount: of,
    InvalidNumericConversion: sf,
    Deprecated: Ul,
  },
  uf = new Map([
    [se.InstructionMissing, '8 byte instruction identifier not provided'],
    [se.InstructionFallbackNotFound, 'Fallback functions are not supported'],
    [se.InstructionDidNotDeserialize, 'The program could not deserialize the given instruction'],
    [se.InstructionDidNotSerialize, 'The program could not serialize the given instruction'],
    [se.IdlInstructionStub, 'The program was compiled without idl instructions'],
    [
      se.IdlInstructionInvalidProgram,
      'The transaction was given an invalid program for the IDL instruction',
    ],
    [se.IdlAccountNotEmpty, 'IDL account must be empty in order to resize, try closing first'],
    [se.EventInstructionStub, 'The program was compiled without `event-cpi` feature'],
    [se.ConstraintMut, 'A mut constraint was violated'],
    [se.ConstraintHasOne, 'A has one constraint was violated'],
    [se.ConstraintSigner, 'A signer constraint was violated'],
    [se.ConstraintRaw, 'A raw constraint was violated'],
    [se.ConstraintOwner, 'An owner constraint was violated'],
    [se.ConstraintRentExempt, 'A rent exemption constraint was violated'],
    [se.ConstraintSeeds, 'A seeds constraint was violated'],
    [se.ConstraintExecutable, 'An executable constraint was violated'],
    [se.ConstraintState, 'Deprecated Error, feel free to replace with something else'],
    [se.ConstraintAssociated, 'An associated constraint was violated'],
    [se.ConstraintAssociatedInit, 'An associated init constraint was violated'],
    [se.ConstraintClose, 'A close constraint was violated'],
    [se.ConstraintAddress, 'An address constraint was violated'],
    [se.ConstraintZero, 'Expected zero account discriminant'],
    [se.ConstraintTokenMint, 'A token mint constraint was violated'],
    [se.ConstraintTokenOwner, 'A token owner constraint was violated'],
    [se.ConstraintMintMintAuthority, 'A mint mint authority constraint was violated'],
    [se.ConstraintMintFreezeAuthority, 'A mint freeze authority constraint was violated'],
    [se.ConstraintMintDecimals, 'A mint decimals constraint was violated'],
    [se.ConstraintSpace, 'A space constraint was violated'],
    [se.ConstraintAccountIsNone, 'A required account for the constraint is None'],
    [se.ConstraintTokenTokenProgram, 'A token account token program constraint was violated'],
    [se.ConstraintMintTokenProgram, 'A mint token program constraint was violated'],
    [
      se.ConstraintAssociatedTokenTokenProgram,
      'An associated token account token program constraint was violated',
    ],
    [se.ConstraintMintGroupPointerExtension, 'A group pointer extension constraint was violated'],
    [
      se.ConstraintMintGroupPointerExtensionAuthority,
      'A group pointer extension authority constraint was violated',
    ],
    [
      se.ConstraintMintGroupPointerExtensionGroupAddress,
      'A group pointer extension group address constraint was violated',
    ],
    [
      se.ConstraintMintGroupMemberPointerExtension,
      'A group member pointer extension constraint was violated',
    ],
    [
      se.ConstraintMintGroupMemberPointerExtensionAuthority,
      'A group member pointer extension authority constraint was violated',
    ],
    [
      se.ConstraintMintGroupMemberPointerExtensionMemberAddress,
      'A group member pointer extension group address constraint was violated',
    ],
    [
      se.ConstraintMintMetadataPointerExtension,
      'A metadata pointer extension constraint was violated',
    ],
    [
      se.ConstraintMintMetadataPointerExtensionAuthority,
      'A metadata pointer extension authority constraint was violated',
    ],
    [
      se.ConstraintMintMetadataPointerExtensionMetadataAddress,
      'A metadata pointer extension metadata address constraint was violated',
    ],
    [se.ConstraintMintCloseAuthorityExtension, 'A close authority constraint was violated'],
    [
      se.ConstraintMintCloseAuthorityExtensionAuthority,
      'A close authority extension authority constraint was violated',
    ],
    [
      se.ConstraintMintPermanentDelegateExtension,
      'A permanent delegate extension constraint was violated',
    ],
    [
      se.ConstraintMintPermanentDelegateExtensionDelegate,
      'A permanent delegate extension delegate constraint was violated',
    ],
    [se.ConstraintMintTransferHookExtension, 'A transfer hook extension constraint was violated'],
    [
      se.ConstraintMintTransferHookExtensionAuthority,
      'A transfer hook extension authority constraint was violated',
    ],
    [
      se.ConstraintMintTransferHookExtensionProgramId,
      'A transfer hook extension transfer hook program id constraint was violated',
    ],
    [se.RequireViolated, 'A require expression was violated'],
    [se.RequireEqViolated, 'A require_eq expression was violated'],
    [se.RequireKeysEqViolated, 'A require_keys_eq expression was violated'],
    [se.RequireNeqViolated, 'A require_neq expression was violated'],
    [se.RequireKeysNeqViolated, 'A require_keys_neq expression was violated'],
    [se.RequireGtViolated, 'A require_gt expression was violated'],
    [se.RequireGteViolated, 'A require_gte expression was violated'],
    [
      se.AccountDiscriminatorAlreadySet,
      'The account discriminator was already set on this account',
    ],
    [se.AccountDiscriminatorNotFound, 'No 8 byte discriminator was found on the account'],
    [se.AccountDiscriminatorMismatch, '8 byte discriminator did not match what was expected'],
    [se.AccountDidNotDeserialize, 'Failed to deserialize the account'],
    [se.AccountDidNotSerialize, 'Failed to serialize the account'],
    [se.AccountNotEnoughKeys, 'Not enough account keys given to the instruction'],
    [se.AccountNotMutable, 'The given account is not mutable'],
    [
      se.AccountOwnedByWrongProgram,
      'The given account is owned by a different program than expected',
    ],
    [se.InvalidProgramId, 'Program ID was not as expected'],
    [se.InvalidProgramExecutable, 'Program account is not executable'],
    [se.AccountNotSigner, 'The given account did not sign'],
    [se.AccountNotSystemOwned, 'The given account is not owned by the system program'],
    [se.AccountNotInitialized, 'The program expected this account to be already initialized'],
    [se.AccountNotProgramData, 'The given account is not a program data account'],
    [se.AccountNotAssociatedTokenAccount, 'The given account is not the associated token account'],
    [se.AccountSysvarMismatch, 'The given public key does not match the required sysvar'],
    [
      se.AccountReallocExceedsLimit,
      'The account reallocation exceeds the MAX_PERMITTED_DATA_INCREASE limit',
    ],
    [se.AccountDuplicateReallocs, 'The account was duplicated for more than one reallocation'],
    [se.DeclaredProgramIdMismatch, 'The declared program id does not match the actual program id'],
    [
      se.TryingToInitPayerAsProgramAccount,
      'You cannot/should not initialize the payer account as a program account',
    ],
    [
      se.InvalidNumericConversion,
      'The program could not perform the numeric conversion, out of range integral type conversion attempted',
    ],
    [se.Deprecated, 'The API being used is deprecated and should no longer be used'],
  ]);
let En = class Ce {
  static fieldLayout(e, n = [], r) {
    const o = e.name;
    switch (e.type) {
      case 'bool':
        return Ae.bool(o);
      case 'u8':
        return Ae.u8(o);
      case 'i8':
        return Ae.i8(o);
      case 'u16':
        return Ae.u16(o);
      case 'i16':
        return Ae.i16(o);
      case 'u32':
        return Ae.u32(o);
      case 'i32':
        return Ae.i32(o);
      case 'f32':
        return Ae.f32(o);
      case 'u64':
        return Ae.u64(o);
      case 'i64':
        return Ae.i64(o);
      case 'f64':
        return Ae.f64(o);
      case 'u128':
        return Ae.u128(o);
      case 'i128':
        return Ae.i128(o);
      case 'u256':
        return Ae.u256(o);
      case 'i256':
        return Ae.i256(o);
      case 'bytes':
        return Ae.vecU8(o);
      case 'string':
        return Ae.str(o);
      case 'pubkey':
        return Ae.publicKey(o);
      default: {
        if ('option' in e.type) return Ae.option(Ce.fieldLayout({ type: e.type.option }, n, r), o);
        if ('vec' in e.type) return Ae.vec(Ce.fieldLayout({ type: e.type.vec }, n, r), o);
        if ('array' in e.type) {
          let [i, u] = e.type.array;
          return (u = Ce.resolveArrayLen(u, r)), Ae.array(Ce.fieldLayout({ type: i }, n, r), u, o);
        }
        if ('defined' in e.type) {
          if (!n) throw new Mt('User defined types not provided');
          const i = e.type.defined.name,
            u = n.find((d) => d.name === i);
          if (!u) throw new Mt('Type not found: '.concat(e.name));
          return Ce.typeDefLayout({
            typeDef: u,
            types: n,
            genericArgs: r != null ? r : e.type.defined.generics,
            name: o,
          });
        }
        if ('generic' in e.type) {
          const i = r == null ? void 0 : r.at(0);
          if ((i == null ? void 0 : i.kind) !== 'type')
            throw new Mt('Invalid generic field: '.concat(e.name));
          return Ce.fieldLayout(ct(xe({}, e), { type: i.type }), n);
        }
        throw new Mt('Not yet implemented: '.concat(JSON.stringify(e.type)));
      }
    }
  }
  static typeDefLayout({ typeDef: e, types: n, name: r, genericArgs: o }) {
    switch (e.type.kind) {
      case 'struct': {
        const i = Ln(
          e.type.fields,
          () => [],
          (u) =>
            u.map((d) => {
              const f = o && Ce.resolveGenericArgs({ type: d.type, typeDef: e, genericArgs: o });
              return Ce.fieldLayout(d, n, f);
            }),
          (u) =>
            u.map((d, f) => {
              const s = o && Ce.resolveGenericArgs({ type: d, typeDef: e, genericArgs: o });
              return Ce.fieldLayout({ name: f.toString(), type: d }, n, s);
            })
        );
        return Ae.struct(i, r);
      }
      case 'enum': {
        const i = e.type.variants.map((u) => {
          const d = Ln(
            u.fields,
            () => [],
            (f) =>
              f.map((s) => {
                const _ = o && Ce.resolveGenericArgs({ type: s.type, typeDef: e, genericArgs: o });
                return Ce.fieldLayout(s, n, _);
              }),
            (f) =>
              f.map((s, _) => {
                const g = o && Ce.resolveGenericArgs({ type: s, typeDef: e, genericArgs: o });
                return Ce.fieldLayout({ name: _.toString(), type: s }, n, g);
              })
          );
          return Ae.struct(d, u.name);
        });
        return r !== void 0 ? Ae.rustEnum(i).replicate(r) : Ae.rustEnum(i, r);
      }
      case 'type':
        return Ce.fieldLayout({ type: e.type.alias, name: r }, n);
    }
  }
  static typeSize(e, n, r) {
    var o;
    switch (e) {
      case 'bool':
        return 1;
      case 'u8':
        return 1;
      case 'i8':
        return 1;
      case 'i16':
        return 2;
      case 'u16':
        return 2;
      case 'u32':
        return 4;
      case 'i32':
        return 4;
      case 'f32':
        return 4;
      case 'u64':
        return 8;
      case 'i64':
        return 8;
      case 'f64':
        return 8;
      case 'u128':
        return 16;
      case 'i128':
        return 16;
      case 'u256':
        return 32;
      case 'i256':
        return 32;
      case 'bytes':
        return 1;
      case 'string':
        return 1;
      case 'pubkey':
        return 32;
      default:
        if ('option' in e) return 1 + Ce.typeSize(e.option, n, r);
        if ('coption' in e) return 4 + Ce.typeSize(e.coption, n, r);
        if ('vec' in e) return 1;
        if ('array' in e) {
          let [i, u] = e.array;
          return (u = Ce.resolveArrayLen(u, r)), Ce.typeSize(i, n, r) * u;
        }
        if ('defined' in e) {
          const i =
            (o = n.types) === null || o === void 0
              ? void 0
              : o.find((d) => d.name === e.defined.name);
          if (!i) throw new Mt('Type not found: '.concat(JSON.stringify(e)));
          const u = (d) => {
            const f = r != null ? r : e.defined.generics,
              s = f && Ce.resolveGenericArgs({ type: d, typeDef: i, genericArgs: f });
            return Ce.typeSize(d, n, s);
          };
          switch (i.type.kind) {
            case 'struct':
              return Ln(
                i.type.fields,
                () => [0],
                (d) => d.map((f) => u(f.type)),
                (d) => d.map((f) => u(f))
              ).reduce((d, f) => d + f, 0);
            case 'enum': {
              const d = i.type.variants.map((f) =>
                Ln(
                  f.fields,
                  () => [0],
                  (s) => s.map((_) => u(_.type)),
                  (s) => s.map((_) => u(_))
                ).reduce((s, _) => s + _, 0)
              );
              return Math.max(...d) + 1;
            }
            case 'type':
              return Ce.typeSize(i.type.alias, n, r);
          }
        }
        if ('generic' in e) {
          const i = r == null ? void 0 : r.at(0);
          if ((i == null ? void 0 : i.kind) !== 'type')
            throw new Mt('Invalid generic: '.concat(e.generic));
          return Ce.typeSize(i.type, n, r);
        }
        throw new Error('Invalid type '.concat(JSON.stringify(e)));
    }
  }
  static resolveArrayLen(e, n) {
    if (typeof e == 'number') return e;
    if (n) {
      const r = n.find((o) => o.kind === 'const');
      (r == null ? void 0 : r.kind) === 'const' && (e = +r.value);
    }
    if (typeof e != 'number') throw new Mt('Generic array length did not resolve');
    return e;
  }
  static resolveGenericArgs({ type: e, typeDef: n, genericArgs: r, isDefined: o }) {
    if (typeof e != 'object') return null;
    for (const i in n.generics) {
      const u = n.generics[i];
      if ('generic' in e && u.name === e.generic) return [r[i]];
      if ('option' in e) {
        const d = Ce.resolveGenericArgs({
          type: e.option,
          typeDef: n,
          genericArgs: r,
          isDefined: o,
        });
        if (!d || !o) return d;
        if (d[0].kind === 'type') return [{ kind: 'type', type: { option: d[0].type } }];
      }
      if ('vec' in e) {
        const d = Ce.resolveGenericArgs({ type: e.vec, typeDef: n, genericArgs: r, isDefined: o });
        if (!d || !o) return d;
        if (d[0].kind === 'type') return [{ kind: 'type', type: { vec: d[0].type } }];
      }
      if ('array' in e) {
        const [d, f] = e.array,
          s = typeof f == 'object',
          _ = Ce.resolveGenericArgs({ type: d, typeDef: n, genericArgs: r, isDefined: o });
        if (_) {
          for (const g in n.generics.slice(+i)) {
            const m = +i + +g;
            s && n.generics[m].name === f.generic && _.push(r[m]);
          }
          if (!o) return _;
          if (_[0].kind === 'type' && _[1].kind === 'const')
            return [{ kind: 'type', type: { array: [_[0].type, +_[1].value] } }];
        }
        if (s && u.name === f.generic) {
          const g = r[i];
          return o ? [{ kind: 'type', type: { array: [d, +g.value] } }] : [g];
        }
        return null;
      }
      if ('defined' in e)
        return e.defined.generics
          ? e.defined.generics
              .flatMap((d) => {
                switch (d.kind) {
                  case 'type':
                    return Ce.resolveGenericArgs({
                      type: d.type,
                      typeDef: n,
                      genericArgs: r,
                      isDefined: !0,
                    });
                  case 'const':
                    return [d];
                }
              })
              .filter((d) => d !== null)
          : null;
    }
    return null;
  }
};
class cf {
  constructor(e) {
    this.idl = e;
    const n = e.instructions.map((o) => {
      const i = o.name,
        u = o.args.map((f) => En.fieldLayout(f, e.types)),
        d = Ae.struct(u, i);
      return [i, { discriminator: o.discriminator, layout: d }];
    });
    this.ixLayouts = new Map(n);
    const r = n.map(([o, { discriminator: i, layout: u }]) => [
      $n.encode(i),
      { name: o, layout: u },
    ]);
    this.sighashLayouts = new Map(r);
  }
  encode(e, n) {
    const r = Pe.Buffer.alloc(1e3),
      o = this.ixLayouts.get(e);
    if (!o) throw new Error('Unknown method: '.concat(e));
    const i = o.layout.encode(n, r),
      u = r.slice(0, i);
    return Pe.Buffer.concat([Pe.Buffer.from(o.discriminator), u]);
  }
  decode(e, n = 'hex') {
    typeof e == 'string' && (e = n === 'hex' ? Pe.Buffer.from(e, 'hex') : $n.decode(e));
    const r = e.slice(0, yn),
      o = e.slice(yn),
      i = this.sighashLayouts.get($n.encode(r));
    return i ? { name: i.name, data: i.layout.decode(o) } : null;
  }
  format(e, n) {
    return tt.format(e, n, this.idl);
  }
}
class tt {
  static format(e, n, r) {
    const o = r.instructions.find((f) => e.name === f.name);
    if (!o) return console.error('Invalid instruction given'), null;
    const i = o.args.map((f) => ({
        name: f.name,
        type: tt.formatIdlType(f.type),
        data: tt.formatIdlData(f, e.data[f.name], r.types),
      })),
      u = tt.flattenIdlAccounts(o.accounts),
      d = n.map((f, s) => (s < u.length ? xe({ name: u[s].name }, f) : xe({ name: void 0 }, f)));
    return { args: i, accounts: d };
  }
  static formatIdlType(e) {
    if (typeof e == 'string') return e;
    if ('option' in e) return 'Option<'.concat(this.formatIdlType(e.option), '>');
    if ('coption' in e) return 'COption<'.concat(this.formatIdlType(e.coption), '>');
    if ('vec' in e) return 'Vec<'.concat(this.formatIdlType(e.vec), '>');
    if ('array' in e) return 'Array<'.concat(e.array[0], '; ').concat(e.array[1], '>');
    if ('defined' in e) {
      const n = e.defined.name;
      if (e.defined.generics) {
        const r = e.defined.generics
          .map((o) => {
            switch (o.kind) {
              case 'type':
                return tt.formatIdlType(o.type);
              case 'const':
                return o.value;
            }
          })
          .join(', ');
        return ''.concat(n, '<').concat(r, '>');
      }
      return n;
    }
    throw new Error('Unknown IDL type: '.concat(e));
  }
  static formatIdlData(e, n, r) {
    if (typeof e.type == 'string') return n.toString();
    if ('vec' in e.type)
      return (
        '[' +
        n.map((o) => this.formatIdlData({ name: '', type: e.type.vec }, o, r)).join(', ') +
        ']'
      );
    if ('option' in e.type)
      return n === null ? 'null' : this.formatIdlData({ name: '', type: e.type.option }, n, r);
    if ('defined' in e.type) {
      if (!r) throw new Error('User defined types not provided');
      const o = e.type.defined.name,
        i = r.find((u) => u.name === o);
      if (!i) throw new Error('Type not found: '.concat(o));
      return tt.formatIdlDataDefined(i, n, r);
    }
    return 'unknown';
  }
  static formatIdlDataDefined(e, n, r) {
    switch (e.type.kind) {
      case 'struct':
        return (
          '{ ' +
          Ln(
            e.type.fields,
            () => '',
            (o) =>
              Object.entries(n)
                .map(([i, u]) => {
                  const d = o.find((f) => f.name === i);
                  if (!d) throw new Error('Field not found: '.concat(i));
                  return i + ': ' + tt.formatIdlData(d, u, r);
                })
                .join(', '),
            (o) =>
              Object.entries(n)
                .map(([i, u]) => i + ': ' + tt.formatIdlData({ name: '', type: o[i] }, u, r))
                .join(', ')
          ) +
          ' }'
        );
      case 'enum': {
        const o = Object.keys(n)[0],
          i = e.type.variants.find((d) => d.name === o);
        if (!i) throw new Error('Unable to find variant: '.concat(o));
        const u = n[o];
        return Ln(
          i.fields,
          () => o,
          (d) => {
            const f = Object.keys(u)
              .map((s) => {
                const _ = u[s],
                  g = d.find((m) => m.name === s);
                if (!g) throw new Error('Field not found: '.concat(s));
                return s + ': ' + tt.formatIdlData(g, _, r);
              })
              .join(', ');
            return ''.concat(o, ' { ').concat(f, ' }');
          },
          (d) => {
            const f = Object.entries(u)
              .map(([s, _]) => s + ': ' + tt.formatIdlData({ name: '', type: d[s] }, _, r))
              .join(', ');
            return ''.concat(o, ' { ').concat(f, ' }');
          }
        );
      }
      case 'type':
        return tt.formatIdlType(e.type.alias);
    }
  }
  static flattenIdlAccounts(e, n) {
    return e
      .map((r) => {
        const o = Om(r.name);
        if (r.hasOwnProperty('accounts')) {
          const i = n ? ''.concat(n, ' > ').concat(o) : o;
          return tt.flattenIdlAccounts(r.accounts, i);
        } else return ct(xe({}, r), { name: n ? ''.concat(n, ' > ').concat(o) : o });
      })
      .flat();
  }
}
function Om(t) {
  const e = t.replace(/([A-Z])/g, ' $1');
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const yn = 8;
let lf = class {
    constructor(e) {
      if (((this.idl = e), !e.accounts)) {
        this.accountLayouts = new Map();
        return;
      }
      const n = e.types;
      if (!n) throw new Error('Accounts require `idl.types`');
      const r = e.accounts.map((o) => {
        const i = n.find((u) => u.name === o.name);
        if (!i) throw new Error('Account not found: '.concat(o.name));
        return [o.name, En.typeDefLayout({ typeDef: i, types: n })];
      });
      this.accountLayouts = new Map(r);
    }
    async encode(e, n) {
      const r = Pe.Buffer.alloc(1e3),
        o = this.accountLayouts.get(e);
      if (!o) throw new Error('Unknown account: '.concat(e));
      const i = o.encode(n, r),
        u = r.slice(0, i),
        d = this.accountDiscriminator(e);
      return Pe.Buffer.concat([d, u]);
    }
    decode(e, n) {
      if (this.accountDiscriminator(e).compare(n.slice(0, yn)))
        throw new Error('Invalid account discriminator');
      return this.decodeUnchecked(e, n);
    }
    decodeAny(e) {
      const n = e.slice(0, yn),
        r = Array.from(this.accountLayouts.keys()).find((o) =>
          this.accountDiscriminator(o).equals(n)
        );
      if (!r) throw new Error('Account not found');
      return this.decodeUnchecked(r, e);
    }
    decodeUnchecked(e, n) {
      const r = n.subarray(yn),
        o = this.accountLayouts.get(e);
      if (!o) throw new Error('Unknown account: '.concat(e));
      return o.decode(r);
    }
    memcmp(e, n) {
      const r = this.accountDiscriminator(e);
      return { offset: 0, bytes: $n.encode(n ? Pe.Buffer.concat([r, n]) : r) };
    }
    size(e) {
      return yn + En.typeSize({ defined: { name: e } }, this.idl);
    }
    accountDiscriminator(e) {
      var n;
      const r =
        (n = this.idl.accounts) === null || n === void 0 ? void 0 : n.find((o) => o.name === e);
      if (!r) throw new Error('Account not found: '.concat(e));
      return Pe.Buffer.from(r.discriminator);
    }
  },
  df = class {
    constructor(e) {
      var n;
      if (!e.events) {
        this.layouts = new Map();
        return;
      }
      const r = e.types;
      if (!r) throw new Error('Events require `idl.types`');
      const o = e.events.map((i) => {
        const u = r.find((d) => d.name === i.name);
        if (!u) throw new Error('Event not found: '.concat(i.name));
        return [i.name, En.typeDefLayout({ typeDef: u, types: r })];
      });
      (this.layouts = new Map(o)),
        (this.discriminators = new Map(
          ((n = e.events) !== null && n !== void 0 ? n : []).map((i) => [
            os(Pe.Buffer.from(i.discriminator)),
            i.name,
          ])
        ));
    }
    decode(e) {
      let n;
      try {
        n = Es(e);
      } catch (d) {
        return null;
      }
      const r = os(n.slice(0, 8)),
        o = this.discriminators.get(r);
      if (!o) return null;
      const i = this.layouts.get(o);
      if (!i) throw new Error('Unknown event: '.concat(o));
      return { data: i.decode(n.slice(8)), name: o };
    }
  },
  Rm = class {
    constructor(e) {
      const n = e.types;
      if (!n) {
        this.typeLayouts = new Map();
        return;
      }
      const r = n
        .filter((o) => !o.generics)
        .map((o) => [o.name, En.typeDefLayout({ typeDef: o, types: n })]);
      this.typeLayouts = new Map(r);
    }
    encode(e, n) {
      const r = Pe.Buffer.alloc(1e3),
        o = this.typeLayouts.get(e);
      if (!o) throw new Error('Unknown type: '.concat(e));
      const i = o.encode(n, r);
      return r.slice(0, i);
    }
    decode(e, n) {
      const r = this.typeLayouts.get(e);
      if (!r) throw new Error('Unknown type: '.concat(e));
      return r.decode(n);
    }
  };
class Ps {
  constructor(e) {
    (this.instruction = new cf(e)),
      (this.accounts = new lf(e)),
      (this.events = new df(e)),
      (this.types = new Rm(e));
  }
}
class Qe {
  constructor(e, n) {
    if (!Number.isInteger(e)) throw new TypeError('span must be an integer');
    (this.span = e), (this.property = n);
  }
  makeDestinationObject() {
    return {};
  }
  decode(e, n) {
    throw new Error('Layout is abstract');
  }
  encode(e, n, r) {
    throw new Error('Layout is abstract');
  }
  getSpan(e, n) {
    if (0 > this.span) throw new RangeError('indeterminate span');
    return this.span;
  }
  replicate(e) {
    const n = Object.create(this.constructor.prototype);
    return Object.assign(n, this), (n.property = e), n;
  }
  fromArray(e) {}
}
var $i = Qe;
function ym(t, e) {
  return e.property ? t + '[' + e.property + ']' : t;
}
class Tn extends Qe {
  isCount() {
    throw new Error('ExternalLayout is abstract');
  }
}
class ff extends Tn {
  constructor(e, n, r) {
    if (!(e instanceof Qe)) throw new TypeError('layout must be a Layout');
    if (n === void 0) n = 0;
    else if (!Number.isInteger(n)) throw new TypeError('offset must be integer or undefined');
    super(e.span, r || e.property), (this.layout = e), (this.offset = n);
  }
  isCount() {
    return this.layout instanceof ji || this.layout instanceof pf;
  }
  decode(e, n) {
    return n === void 0 && (n = 0), this.layout.decode(e, n + this.offset);
  }
  encode(e, n, r) {
    return r === void 0 && (r = 0), this.layout.encode(e, n, r + this.offset);
  }
}
class ji extends Qe {
  constructor(e, n) {
    if ((super(e, n), 6 < this.span)) throw new RangeError('span must not exceed 6 bytes');
  }
  decode(e, n) {
    return n === void 0 && (n = 0), e.readUIntLE(n, this.span);
  }
  encode(e, n, r) {
    return r === void 0 && (r = 0), n.writeUIntLE(e, r, this.span), this.span;
  }
}
class pf extends Qe {
  constructor(e, n) {
    if ((super(e, n), 6 < this.span)) throw new RangeError('span must not exceed 6 bytes');
  }
  decode(e, n) {
    return n === void 0 && (n = 0), e.readUIntBE(n, this.span);
  }
  encode(e, n, r) {
    return r === void 0 && (r = 0), n.writeUIntBE(e, r, this.span), this.span;
  }
}
const us = Math.pow(2, 32);
function _f(t) {
  const e = Math.floor(t / us),
    n = t - e * us;
  return { hi32: e, lo32: n };
}
function mf(t, e) {
  return t * us + e;
}
class Tm extends Qe {
  constructor(e) {
    super(8, e);
  }
  decode(e, n) {
    n === void 0 && (n = 0);
    const r = e.readUInt32LE(n),
      o = e.readUInt32LE(n + 4);
    return mf(o, r);
  }
  encode(e, n, r) {
    r === void 0 && (r = 0);
    const o = _f(e);
    return n.writeUInt32LE(o.lo32, r), n.writeUInt32LE(o.hi32, r + 4), 8;
  }
}
class Em extends Qe {
  constructor(e) {
    super(8, e);
  }
  decode(e, n) {
    n === void 0 && (n = 0);
    const r = e.readUInt32LE(n),
      o = e.readInt32LE(n + 4);
    return mf(o, r);
  }
  encode(e, n, r) {
    r === void 0 && (r = 0);
    const o = _f(e);
    return n.writeUInt32LE(o.lo32, r), n.writeInt32LE(o.hi32, r + 4), 8;
  }
}
class wm extends Qe {
  constructor(e, n, r) {
    if (!(Array.isArray(e) && e.reduce((i, u) => i && u instanceof Qe, !0)))
      throw new TypeError('fields must be array of Layout instances');
    typeof n == 'boolean' && r === void 0 && ((r = n), (n = void 0));
    for (const i of e)
      if (0 > i.span && i.property === void 0)
        throw new Error('fields cannot contain unnamed variable-length layout');
    let o = -1;
    try {
      o = e.reduce((i, u) => i + u.getSpan(), 0);
    } catch (i) {}
    super(o, n), (this.fields = e), (this.decodePrefixes = !!r);
  }
  getSpan(e, n) {
    if (0 <= this.span) return this.span;
    n === void 0 && (n = 0);
    let r = 0;
    try {
      r = this.fields.reduce((o, i) => {
        const u = i.getSpan(e, n);
        return (n += u), o + u;
      }, 0);
    } catch (o) {
      throw new RangeError('indeterminate span');
    }
    return r;
  }
  decode(e, n) {
    n === void 0 && (n = 0);
    const r = this.makeDestinationObject();
    for (const o of this.fields)
      if (
        (o.property !== void 0 && (r[o.property] = o.decode(e, n)),
        (n += o.getSpan(e, n)),
        this.decodePrefixes && e.length === n)
      )
        break;
    return r;
  }
  encode(e, n, r) {
    r === void 0 && (r = 0);
    const o = r;
    let i = 0,
      u = 0;
    for (const d of this.fields) {
      let f = d.span;
      if (((u = 0 < f ? f : 0), d.property !== void 0)) {
        const s = e[d.property];
        s !== void 0 && ((u = d.encode(s, n, r)), 0 > f && (f = d.getSpan(n, r)));
      }
      (i = r), (r += f);
    }
    return i + u - o;
  }
  fromArray(e) {
    const n = this.makeDestinationObject();
    for (const r of this.fields)
      r.property !== void 0 && 0 < e.length && (n[r.property] = e.shift());
    return n;
  }
  layoutFor(e) {
    if (typeof e != 'string') throw new TypeError('property must be string');
    for (const n of this.fields) if (n.property === e) return n;
  }
  offsetOf(e) {
    if (typeof e != 'string') throw new TypeError('property must be string');
    let n = 0;
    for (const r of this.fields) {
      if (r.property === e) return n;
      0 > r.span ? (n = -1) : 0 <= n && (n += r.span);
    }
  }
}
class hf {
  constructor(e) {
    this.property = e;
  }
  decode() {
    throw new Error('UnionDiscriminator is abstract');
  }
  encode() {
    throw new Error('UnionDiscriminator is abstract');
  }
}
class Sc extends hf {
  constructor(e, n) {
    if (!(e instanceof Tn && e.isCount()))
      throw new TypeError('layout must be an unsigned integer ExternalLayout');
    super(n || e.property || 'variant'), (this.layout = e);
  }
  decode(e, n) {
    return this.layout.decode(e, n);
  }
  encode(e, n, r) {
    return this.layout.encode(e, n, r);
  }
}
class gf extends Qe {
  constructor(e, n, r) {
    const o = e instanceof ji || e instanceof pf;
    if (o) e = new Sc(new ff(e));
    else if (e instanceof Tn && e.isCount()) e = new Sc(e);
    else if (!(e instanceof hf))
      throw new TypeError('discr must be a UnionDiscriminator or an unsigned integer layout');
    if ((n === void 0 && (n = null), !(n === null || n instanceof Qe)))
      throw new TypeError('defaultLayout must be null or a Layout');
    if (n !== null) {
      if (0 > n.span) throw new Error('defaultLayout must have constant span');
      n.property === void 0 && (n = n.replicate('content'));
    }
    let i = -1;
    n && ((i = n.span), 0 <= i && o && (i += e.layout.span)),
      super(i, r),
      (this.discriminator = e),
      (this.usesPrefixDiscriminator = o),
      (this.defaultLayout = n),
      (this.registry = {});
    let u = this.defaultGetSourceVariant.bind(this);
    (this.getSourceVariant = function (d) {
      return u(d);
    }),
      (this.configGetSourceVariant = function (d) {
        u = d.bind(this);
      });
  }
  getSpan(e, n) {
    if (0 <= this.span) return this.span;
    n === void 0 && (n = 0);
    const r = this.getVariant(e, n);
    if (!r) throw new Error('unable to determine span for unrecognized variant');
    return r.getSpan(e, n);
  }
  defaultGetSourceVariant(e) {
    if (e.hasOwnProperty(this.discriminator.property)) {
      if (this.defaultLayout && e.hasOwnProperty(this.defaultLayout.property)) return;
      const n = this.registry[e[this.discriminator.property]];
      if (n && (!n.layout || e.hasOwnProperty(n.property))) return n;
    } else
      for (const n in this.registry) {
        const r = this.registry[n];
        if (e.hasOwnProperty(r.property)) return r;
      }
    throw new Error('unable to infer src variant');
  }
  decode(e, n) {
    n === void 0 && (n = 0);
    let r;
    const o = this.discriminator,
      i = o.decode(e, n);
    let u = this.registry[i];
    if (u === void 0) {
      let d = 0;
      (u = this.defaultLayout),
        this.usesPrefixDiscriminator && (d = o.layout.span),
        (r = this.makeDestinationObject()),
        (r[o.property] = i),
        (r[u.property] = this.defaultLayout.decode(e, n + d));
    } else r = u.decode(e, n);
    return r;
  }
  encode(e, n, r) {
    r === void 0 && (r = 0);
    const o = this.getSourceVariant(e);
    if (o === void 0) {
      const i = this.discriminator,
        u = this.defaultLayout;
      let d = 0;
      return (
        this.usesPrefixDiscriminator && (d = i.layout.span),
        i.encode(e[i.property], n, r),
        d + u.encode(e[u.property], n, r + d)
      );
    }
    return o.encode(e, n, r);
  }
  addVariant(e, n, r) {
    const o = new Im(this, e, n, r);
    return (this.registry[e] = o), o;
  }
  getVariant(e, n) {
    let r = e;
    return (
      ne.Buffer.isBuffer(e) && (n === void 0 && (n = 0), (r = this.discriminator.decode(e, n))),
      this.registry[r]
    );
  }
}
class Im extends Qe {
  constructor(e, n, r, o) {
    if (!(e instanceof gf)) throw new TypeError('union must be a Union');
    if (!Number.isInteger(n) || 0 > n)
      throw new TypeError('variant must be a (non-negative) integer');
    if ((typeof r == 'string' && o === void 0 && ((o = r), (r = null)), r)) {
      if (!(r instanceof Qe)) throw new TypeError('layout must be a Layout');
      if (e.defaultLayout !== null && 0 <= r.span && r.span > e.defaultLayout.span)
        throw new Error('variant span exceeds span of containing union');
      if (typeof o != 'string') throw new TypeError('variant must have a String property');
    }
    let i = e.span;
    0 > e.span &&
      ((i = r ? r.span : 0),
      0 <= i && e.usesPrefixDiscriminator && (i += e.discriminator.layout.span)),
      super(i, o),
      (this.union = e),
      (this.variant = n),
      (this.layout = r || null);
  }
  getSpan(e, n) {
    if (0 <= this.span) return this.span;
    n === void 0 && (n = 0);
    let r = 0;
    return (
      this.union.usesPrefixDiscriminator && (r = this.union.discriminator.layout.span),
      r + this.layout.getSpan(e, n + r)
    );
  }
  decode(e, n) {
    const r = this.makeDestinationObject();
    if ((n === void 0 && (n = 0), this !== this.union.getVariant(e, n)))
      throw new Error('variant mismatch');
    let o = 0;
    return (
      this.union.usesPrefixDiscriminator && (o = this.union.discriminator.layout.span),
      this.layout
        ? (r[this.property] = this.layout.decode(e, n + o))
        : this.property
          ? (r[this.property] = !0)
          : this.union.usesPrefixDiscriminator &&
            (r[this.union.discriminator.property] = this.variant),
      r
    );
  }
  encode(e, n, r) {
    r === void 0 && (r = 0);
    let o = 0;
    if (
      (this.union.usesPrefixDiscriminator && (o = this.union.discriminator.layout.span),
      this.layout && !e.hasOwnProperty(this.property))
    )
      throw new TypeError('variant lacks property ' + this.property);
    this.union.discriminator.encode(this.variant, n, r);
    let i = o;
    if (
      this.layout &&
      (this.layout.encode(e[this.property], n, r + o),
      (i += this.layout.getSpan(n, r + o)),
      0 <= this.union.span && i > this.union.span)
    )
      throw new Error('encoded variant overruns containing union');
    return i;
  }
  fromArray(e) {
    if (this.layout) return this.layout.fromArray(e);
  }
}
class bm extends Qe {
  constructor(e, n) {
    if (!((e instanceof Tn && e.isCount()) || (Number.isInteger(e) && 0 <= e)))
      throw new TypeError('length must be positive integer or an unsigned integer ExternalLayout');
    let r = -1;
    e instanceof Tn || (r = e), super(r, n), (this.length = e);
  }
  getSpan(e, n) {
    let r = this.span;
    return 0 > r && (r = this.length.decode(e, n)), r;
  }
  decode(e, n) {
    n === void 0 && (n = 0);
    let r = this.span;
    return 0 > r && (r = this.length.decode(e, n)), e.slice(n, n + r);
  }
  encode(e, n, r) {
    let o = this.length;
    if ((this.length instanceof Tn && (o = e.length), !(ne.Buffer.isBuffer(e) && o === e.length)))
      throw new TypeError(ym('Blob.encode', this) + ' requires (length ' + o + ') Buffer as src');
    if (r + o > n.length) throw new RangeError('encoding overruns Buffer');
    return (
      n.write(e.toString('hex'), r, o, 'hex'),
      this.length instanceof Tn && this.length.encode(o, n, r),
      o
    );
  }
}
var Nm = (t, e, n) => new ff(t, e, n),
  Cm = (t) => new ji(1, t),
  Dt = (t) => new ji(4, t),
  Sm = (t) => new Tm(t),
  Ut = (t) => new Em(t),
  $e = (t, e, n) => new wm(t, e, n),
  Af = (t, e, n) => new gf(t, e, n),
  Kr = (t, e) => new bm(t, e);
let vm = class {
    constructor(e) {}
    encode(e, n) {
      switch (e) {
        case 'createAccount':
          return Mm(n);
        case 'assign':
          return km(n);
        case 'transfer':
          return Dm(n);
        case 'createAccountWithSeed':
          return Bm(n);
        case 'advanceNonceAccount':
          return Lm(n);
        case 'withdrawNonceAccount':
          return Um(n);
        case 'initializeNonceAccount':
          return xm(n);
        case 'authorizeNonceAccount':
          return $m(n);
        case 'allocate':
          return jm(n);
        case 'allocateWithSeed':
          return Hm(n);
        case 'assignWithSeed':
          return Gm(n);
        case 'transferWithSeed':
          return Fm(n);
        default:
          throw new Error('Invalid instruction: '.concat(e));
      }
    }
    encodeState(e, n) {
      throw new Error('System does not have state');
    }
  },
  Pm = class extends $i {
    constructor(e) {
      super(-1, e),
        (this.property = e),
        (this.layout = $e(
          [Dt('length'), Dt('lengthPadding'), Kr(Nm(Dt(), -8), 'chars')],
          this.property
        ));
    }
    encode(e, n, r = 0) {
      if (e == null) return this.layout.span;
      const o = { chars: ne.Buffer.from(e, 'utf8') };
      return this.layout.encode(o, n, r);
    }
    decode(e, n = 0) {
      return this.layout.decode(e, n).chars.toString();
    }
    getSpan(e, n = 0) {
      return Dt().span + Dt().span + new Xt(new Uint8Array(e).slice(n, n + 4), 10, 'le').toNumber();
    }
  };
function Hi(t) {
  return new Pm(t);
}
function _t(t) {
  return Kr(32, t);
}
function Mm({ lamports: t, space: e, owner: n }) {
  return ht({ createAccount: { lamports: t, space: e, owner: n.toBuffer() } });
}
function km({ owner: t }) {
  return ht({ assign: { owner: t.toBuffer() } });
}
function Dm({ lamports: t }) {
  return ht({ transfer: { lamports: t } });
}
function Bm({ base: t, seed: e, lamports: n, space: r, owner: o }) {
  return ht(
    {
      createAccountWithSeed: {
        base: t.toBuffer(),
        seed: e,
        lamports: n,
        space: r,
        owner: o.toBuffer(),
      },
    },
    je.getVariant(3).span + e.length
  );
}
function xm({ authorized: t }) {
  return ht({ initializeNonceAccount: { authorized: t.toBuffer() } });
}
function Lm({ authorized: t }) {
  return ht({ advanceNonceAccount: { authorized: t.toBuffer() } });
}
function Um({ lamports: t }) {
  return ht({ withdrawNonceAccount: { lamports: t } });
}
function $m({ authorized: t }) {
  return ht({ authorizeNonceAccount: { authorized: t.toBuffer() } });
}
function jm({ space: t }) {
  return ht({ allocate: { space: t } });
}
function Hm({ base: t, seed: e, space: n, owner: r }) {
  return ht(
    { allocateWithSeed: { base: t.toBuffer(), seed: e, space: n, owner: r.toBuffer() } },
    je.getVariant(9).span + e.length
  );
}
function Gm({ base: t, seed: e, owner: n }) {
  return ht(
    { assignWithSeed: { base: t.toBuffer(), seed: e, owner: n.toBuffer() } },
    je.getVariant(10).span + e.length
  );
}
function Fm({ lamports: t, seed: e, owner: n }) {
  return ht(
    { transferWithSeed: { lamports: t, seed: e, owner: n.toBuffer() } },
    je.getVariant(11).span + e.length
  );
}
const je = Af(Dt('instruction'));
je.addVariant(0, $e([Ut('lamports'), Ut('space'), _t('owner')]), 'createAccount');
je.addVariant(1, $e([_t('owner')]), 'assign');
je.addVariant(2, $e([Ut('lamports')]), 'transfer');
je.addVariant(
  3,
  $e([_t('base'), Hi('seed'), Ut('lamports'), Ut('space'), _t('owner')]),
  'createAccountWithSeed'
);
je.addVariant(4, $e([_t('authorized')]), 'advanceNonceAccount');
je.addVariant(5, $e([Ut('lamports')]), 'withdrawNonceAccount');
je.addVariant(6, $e([_t('authorized')]), 'initializeNonceAccount');
je.addVariant(7, $e([_t('authorized')]), 'authorizeNonceAccount');
je.addVariant(8, $e([Ut('space')]), 'allocate');
je.addVariant(9, $e([_t('base'), Hi('seed'), Ut('space'), _t('owner')]), 'allocateWithSeed');
je.addVariant(10, $e([_t('base'), Hi('seed'), _t('owner')]), 'assignWithSeed');
je.addVariant(11, $e([Ut('lamports'), Hi('seed'), _t('owner')]), 'transferWithSeed');
function ht(t, e) {
  const n = ne.Buffer.alloc(e != null ? e : Km),
    r = je.encode(t, n);
  return e === void 0 ? n.slice(0, r) : n;
}
const Km = Math.max(...Object.values(je.registry).map((t) => t.span));
let Vm = class {
  constructor(e) {
    this.idl = e;
  }
  async encode(e, n) {
    switch (e) {
      case 'nonce': {
        const r = ne.Buffer.alloc(Ec),
          o = Of.encode(n, r);
        return r.slice(0, o);
      }
      default:
        throw new Error('Invalid account name: '.concat(e));
    }
  }
  decode(e, n) {
    return this.decodeUnchecked(e, n);
  }
  decodeUnchecked(e, n) {
    switch (e) {
      case 'nonce':
        return Wm(n);
      default:
        throw new Error('Invalid account name: '.concat(e));
    }
  }
  memcmp(e, n) {
    switch (e) {
      case 'nonce':
        return { dataSize: Ec };
      default:
        throw new Error('Invalid account name: '.concat(e));
    }
  }
  size(e) {
    return En.typeSize({ defined: { name: e } }, this.idl);
  }
};
function Wm(t) {
  return Of.decode(t);
}
let qm = class extends $i {
  constructor(e, n, r, o) {
    super(e.span, o), (this.layout = e), (this.decoder = n), (this.encoder = r);
  }
  decode(e, n) {
    return this.decoder(this.layout.decode(e, n));
  }
  encode(e, n, r) {
    return this.layout.encode(this.encoder(e), n, r);
  }
  getSpan(e, n) {
    return this.layout.getSpan(e, n);
  }
};
function vc(t) {
  return new qm(
    Kr(32),
    (e) => new We(e),
    (e) => e.toBuffer(),
    t
  );
}
const Of = $e([
  Dt('version'),
  Dt('state'),
  vc('authorizedPubkey'),
  vc('nonce'),
  $e([Sm('lamportsPerSignature')], 'feeCalculator'),
]);
let zm = class {
    constructor(e) {}
    decode(e) {
      throw new Error('System program does not have events');
    }
  },
  Ym = class {
    constructor(e) {}
    encode(e, n) {
      throw new Error('System does not have user-defined types');
    }
    decode(e, n) {
      throw new Error('System does not have user-defined types');
    }
  },
  Rf = class {
    constructor(e) {
      (this.instruction = new vm(e)),
        (this.accounts = new Vm(e)),
        (this.events = new zm(e)),
        (this.types = new Ym(e));
    }
  };
function Xm(t) {
  return new TextDecoder().decode(El(t));
}
var Jm = Object.freeze({ __proto__: null, hash: Xm });
function Qm(t, e, n) {
  const r = Pe.Buffer.concat([t.toBuffer(), Pe.Buffer.from(e), n.toBuffer()]);
  return new We(El(r));
}
var Zm = Object.freeze({ __proto__: null, createWithSeedSync: Qm });
const yf = new We('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'),
  Tf = new We('ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL');
function eh({ mint: t, owner: e }) {
  return We.findProgramAddressSync([e.toBuffer(), yf.toBuffer(), t.toBuffer()], Tf)[0];
}
var th = Object.freeze({
    __proto__: null,
    TOKEN_PROGRAM_ID: yf,
    ASSOCIATED_PROGRAM_ID: Tf,
    associatedAddress: eh,
  }),
  cs = { exports: {} };
(function (t, e) {
  var n = typeof self < 'u' ? self : _m,
    r = (function () {
      function i() {
        (this.fetch = !1), (this.DOMException = n.DOMException);
      }
      return (i.prototype = n), new i();
    })();
  (function (i) {
    (function (u) {
      var d = {
        searchParams: 'URLSearchParams' in i,
        iterable: 'Symbol' in i && 'iterator' in Symbol,
        blob:
          'FileReader' in i &&
          'Blob' in i &&
          (function () {
            try {
              return new Blob(), !0;
            } catch (C) {
              return !1;
            }
          })(),
        formData: 'FormData' in i,
        arrayBuffer: 'ArrayBuffer' in i,
      };
      function f(C) {
        return C && DataView.prototype.isPrototypeOf(C);
      }
      if (d.arrayBuffer)
        var s = [
            '[object Int8Array]',
            '[object Uint8Array]',
            '[object Uint8ClampedArray]',
            '[object Int16Array]',
            '[object Uint16Array]',
            '[object Int32Array]',
            '[object Uint32Array]',
            '[object Float32Array]',
            '[object Float64Array]',
          ],
          _ =
            ArrayBuffer.isView ||
            function (C) {
              return C && s.indexOf(Object.prototype.toString.call(C)) > -1;
            };
      function g(C) {
        if ((typeof C != 'string' && (C = String(C)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(C)))
          throw new TypeError('Invalid character in header field name');
        return C.toLowerCase();
      }
      function m(C) {
        return typeof C != 'string' && (C = String(C)), C;
      }
      function h(C) {
        var M = {
          next: function () {
            var W = C.shift();
            return { done: W === void 0, value: W };
          },
        };
        return (
          d.iterable &&
            (M[Symbol.iterator] = function () {
              return M;
            }),
          M
        );
      }
      function A(C) {
        (this.map = {}),
          C instanceof A
            ? C.forEach(function (M, W) {
                this.append(W, M);
              }, this)
            : Array.isArray(C)
              ? C.forEach(function (M) {
                  this.append(M[0], M[1]);
                }, this)
              : C &&
                Object.getOwnPropertyNames(C).forEach(function (M) {
                  this.append(M, C[M]);
                }, this);
      }
      (A.prototype.append = function (C, M) {
        (C = g(C)), (M = m(M));
        var W = this.map[C];
        this.map[C] = W ? W + ', ' + M : M;
      }),
        (A.prototype.delete = function (C) {
          delete this.map[g(C)];
        }),
        (A.prototype.get = function (C) {
          return (C = g(C)), this.has(C) ? this.map[C] : null;
        }),
        (A.prototype.has = function (C) {
          return this.map.hasOwnProperty(g(C));
        }),
        (A.prototype.set = function (C, M) {
          this.map[g(C)] = m(M);
        }),
        (A.prototype.forEach = function (C, M) {
          for (var W in this.map) this.map.hasOwnProperty(W) && C.call(M, this.map[W], W, this);
        }),
        (A.prototype.keys = function () {
          var C = [];
          return (
            this.forEach(function (M, W) {
              C.push(W);
            }),
            h(C)
          );
        }),
        (A.prototype.values = function () {
          var C = [];
          return (
            this.forEach(function (M) {
              C.push(M);
            }),
            h(C)
          );
        }),
        (A.prototype.entries = function () {
          var C = [];
          return (
            this.forEach(function (M, W) {
              C.push([W, M]);
            }),
            h(C)
          );
        }),
        d.iterable && (A.prototype[Symbol.iterator] = A.prototype.entries);
      function R(C) {
        if (C.bodyUsed) return Promise.reject(new TypeError('Already read'));
        C.bodyUsed = !0;
      }
      function b(C) {
        return new Promise(function (M, W) {
          (C.onload = function () {
            M(C.result);
          }),
            (C.onerror = function () {
              W(C.error);
            });
        });
      }
      function N(C) {
        var M = new FileReader(),
          W = b(M);
        return M.readAsArrayBuffer(C), W;
      }
      function v(C) {
        var M = new FileReader(),
          W = b(M);
        return M.readAsText(C), W;
      }
      function w(C) {
        for (var M = new Uint8Array(C), W = new Array(M.length), Y = 0; Y < M.length; Y++)
          W[Y] = String.fromCharCode(M[Y]);
        return W.join('');
      }
      function x(C) {
        if (C.slice) return C.slice(0);
        var M = new Uint8Array(C.byteLength);
        return M.set(new Uint8Array(C)), M.buffer;
      }
      function G() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (C) {
            (this._bodyInit = C),
              C
                ? typeof C == 'string'
                  ? (this._bodyText = C)
                  : d.blob && Blob.prototype.isPrototypeOf(C)
                    ? (this._bodyBlob = C)
                    : d.formData && FormData.prototype.isPrototypeOf(C)
                      ? (this._bodyFormData = C)
                      : d.searchParams && URLSearchParams.prototype.isPrototypeOf(C)
                        ? (this._bodyText = C.toString())
                        : d.arrayBuffer && d.blob && f(C)
                          ? ((this._bodyArrayBuffer = x(C.buffer)),
                            (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                          : d.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(C) || _(C))
                            ? (this._bodyArrayBuffer = x(C))
                            : (this._bodyText = C = Object.prototype.toString.call(C))
                : (this._bodyText = ''),
              this.headers.get('content-type') ||
                (typeof C == 'string'
                  ? this.headers.set('content-type', 'text/plain;charset=UTF-8')
                  : this._bodyBlob && this._bodyBlob.type
                    ? this.headers.set('content-type', this._bodyBlob.type)
                    : d.searchParams &&
                      URLSearchParams.prototype.isPrototypeOf(C) &&
                      this.headers.set(
                        'content-type',
                        'application/x-www-form-urlencoded;charset=UTF-8'
                      ));
          }),
          d.blob &&
            ((this.blob = function () {
              var C = R(this);
              if (C) return C;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData) throw new Error('could not read FormData body as blob');
              return Promise.resolve(new Blob([this._bodyText]));
            }),
            (this.arrayBuffer = function () {
              return this._bodyArrayBuffer
                ? R(this) || Promise.resolve(this._bodyArrayBuffer)
                : this.blob().then(N);
            })),
          (this.text = function () {
            var C = R(this);
            if (C) return C;
            if (this._bodyBlob) return v(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(w(this._bodyArrayBuffer));
            if (this._bodyFormData) throw new Error('could not read FormData body as text');
            return Promise.resolve(this._bodyText);
          }),
          d.formData &&
            (this.formData = function () {
              return this.text().then(I);
            }),
          (this.json = function () {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      var F = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
      function Q(C) {
        var M = C.toUpperCase();
        return F.indexOf(M) > -1 ? M : C;
      }
      function z(C, M) {
        M = M || {};
        var W = M.body;
        if (C instanceof z) {
          if (C.bodyUsed) throw new TypeError('Already read');
          (this.url = C.url),
            (this.credentials = C.credentials),
            M.headers || (this.headers = new A(C.headers)),
            (this.method = C.method),
            (this.mode = C.mode),
            (this.signal = C.signal),
            !W && C._bodyInit != null && ((W = C._bodyInit), (C.bodyUsed = !0));
        } else this.url = String(C);
        if (
          ((this.credentials = M.credentials || this.credentials || 'same-origin'),
          (M.headers || !this.headers) && (this.headers = new A(M.headers)),
          (this.method = Q(M.method || this.method || 'GET')),
          (this.mode = M.mode || this.mode || null),
          (this.signal = M.signal || this.signal),
          (this.referrer = null),
          (this.method === 'GET' || this.method === 'HEAD') && W)
        )
          throw new TypeError('Body not allowed for GET or HEAD requests');
        this._initBody(W);
      }
      z.prototype.clone = function () {
        return new z(this, { body: this._bodyInit });
      };
      function I(C) {
        var M = new FormData();
        return (
          C.trim()
            .split('&')
            .forEach(function (W) {
              if (W) {
                var Y = W.split('='),
                  D = Y.shift().replace(/\+/g, ' '),
                  L = Y.join('=').replace(/\+/g, ' ');
                M.append(decodeURIComponent(D), decodeURIComponent(L));
              }
            }),
          M
        );
      }
      function y(C) {
        var M = new A(),
          W = C.replace(/\r?\n[\t ]+/g, ' ');
        return (
          W.split(/\r?\n/).forEach(function (Y) {
            var D = Y.split(':'),
              L = D.shift().trim();
            if (L) {
              var X = D.join(':').trim();
              M.append(L, X);
            }
          }),
          M
        );
      }
      G.call(z.prototype);
      function P(C, M) {
        M || (M = {}),
          (this.type = 'default'),
          (this.status = M.status === void 0 ? 200 : M.status),
          (this.ok = this.status >= 200 && this.status < 300),
          (this.statusText = 'statusText' in M ? M.statusText : 'OK'),
          (this.headers = new A(M.headers)),
          (this.url = M.url || ''),
          this._initBody(C);
      }
      G.call(P.prototype),
        (P.prototype.clone = function () {
          return new P(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new A(this.headers),
            url: this.url,
          });
        }),
        (P.error = function () {
          var C = new P(null, { status: 0, statusText: '' });
          return (C.type = 'error'), C;
        });
      var k = [301, 302, 303, 307, 308];
      (P.redirect = function (C, M) {
        if (k.indexOf(M) === -1) throw new RangeError('Invalid status code');
        return new P(null, { status: M, headers: { location: C } });
      }),
        (u.DOMException = i.DOMException);
      try {
        new u.DOMException();
      } catch (C) {
        (u.DOMException = function (M, W) {
          (this.message = M), (this.name = W);
          var Y = Error(M);
          this.stack = Y.stack;
        }),
          (u.DOMException.prototype = Object.create(Error.prototype)),
          (u.DOMException.prototype.constructor = u.DOMException);
      }
      function V(C, M) {
        return new Promise(function (W, Y) {
          var D = new z(C, M);
          if (D.signal && D.signal.aborted) return Y(new u.DOMException('Aborted', 'AbortError'));
          var L = new XMLHttpRequest();
          function X() {
            L.abort();
          }
          (L.onload = function () {
            var oe = {
              status: L.status,
              statusText: L.statusText,
              headers: y(L.getAllResponseHeaders() || ''),
            };
            oe.url = 'responseURL' in L ? L.responseURL : oe.headers.get('X-Request-URL');
            var ae = 'response' in L ? L.response : L.responseText;
            W(new P(ae, oe));
          }),
            (L.onerror = function () {
              Y(new TypeError('Network request failed'));
            }),
            (L.ontimeout = function () {
              Y(new TypeError('Network request failed'));
            }),
            (L.onabort = function () {
              Y(new u.DOMException('Aborted', 'AbortError'));
            }),
            L.open(D.method, D.url, !0),
            D.credentials === 'include'
              ? (L.withCredentials = !0)
              : D.credentials === 'omit' && (L.withCredentials = !1),
            'responseType' in L && d.blob && (L.responseType = 'blob'),
            D.headers.forEach(function (oe, ae) {
              L.setRequestHeader(ae, oe);
            }),
            D.signal &&
              (D.signal.addEventListener('abort', X),
              (L.onreadystatechange = function () {
                L.readyState === 4 && D.signal.removeEventListener('abort', X);
              })),
            L.send(typeof D._bodyInit > 'u' ? null : D._bodyInit);
        });
      }
      return (
        (V.polyfill = !0),
        i.fetch || ((i.fetch = V), (i.Headers = A), (i.Request = z), (i.Response = P)),
        (u.Headers = A),
        (u.Request = z),
        (u.Response = P),
        (u.fetch = V),
        Object.defineProperty(u, '__esModule', { value: !0 }),
        u
      );
    })({});
  })(r),
    (r.fetch.ponyfill = !0),
    delete r.fetch.polyfill;
  var o = r;
  (e = o.fetch),
    (e.default = o.fetch),
    (e.fetch = o.fetch),
    (e.Headers = o.Headers),
    (e.Request = o.Request),
    (e.Response = o.Response),
    (t.exports = e);
})(cs, cs.exports);
var nh = mm(cs.exports);
async function rh(t, e, n = 5) {
  const r = 'https://api.apr.dev/api/v0/program/'.concat(e.toString(), '/latest?limit=').concat(n),
    [o, i] = await Promise.all([Ef(t, e), nh(r)]),
    u = (await i.json()).filter(
      (f) => !f.aborted && f.state === 'Built' && f.verified === 'Verified'
    );
  if (u.length === 0) return null;
  const d = u[0];
  return o.slot.toNumber() !== d.verified_slot ? null : d;
}
async function Ef(t, e) {
  const n = await t.getAccountInfo(e);
  if (n === null) throw new Error('program account not found');
  const { program: r } = ls(n.data),
    o = await t.getAccountInfo(r.programdataAddress);
  if (o === null) throw new Error('program data account not found');
  const { programData: i } = ls(o.data);
  return i;
}
const ih = Ae.rustEnum(
  [
    Ae.struct([], 'uninitialized'),
    Ae.struct([Ae.option(Ae.publicKey(), 'authorityAddress')], 'buffer'),
    Ae.struct([Ae.publicKey('programdataAddress')], 'program'),
    Ae.struct(
      [Ae.u64('slot'), Ae.option(Ae.publicKey(), 'upgradeAuthorityAddress')],
      'programData'
    ),
  ],
  void 0,
  Ae.u32()
);
function ls(t) {
  return ih.decode(t);
}
var oh = Object.freeze({
    __proto__: null,
    verifiedBuild: rh,
    fetchData: Ef,
    decodeUpgradeableLoaderState: ls,
  }),
  sh = Object.freeze({
    __proto__: null,
    sha256: Jm,
    rpc: dm,
    publicKey: Zm,
    bytes: K_,
    token: th,
    features: Am,
    registry: oh,
  });
function Vr(t, e) {
  var n, r;
  let o = {};
  const i = t.args ? t.args.length : 0;
  if (e.length > i) {
    if (e.length !== i + 1)
      throw new Error(
        'provided too many arguments '
          .concat(e, ' to instruction ')
          .concat(t == null ? void 0 : t.name, ' expecting: ')
          .concat(
            (r = (n = t.args) === null || n === void 0 ? void 0 : n.map((u) => u.name)) !== null &&
              r !== void 0
              ? r
              : []
          )
      );
    o = e.pop();
  }
  return [e, o];
}
let ah = class ds {
  static build(e, n, r) {
    if (e.name === '_inner') throw new Mt('the _inner name is reserved');
    const o = (...i) => {
      const [u, d] = Vr(e, [...i]);
      ws(e.accounts, d.accounts), uh(e, ...i);
      const f = o.accounts(d.accounts);
      return (
        d.remainingAccounts !== void 0 && f.push(...d.remainingAccounts),
        Ss('debug-logs') && console.log('Outgoing account metas:', f),
        new Tl({ keys: f, programId: r, data: n(e.name, Ml(e, ...u)) })
      );
    };
    return (o.accounts = (i) => ds.accountsArray(i, e.accounts, r, e.name)), o;
  }
  static accountsArray(e, n, r, o) {
    return e
      ? n
          .map((i) => {
            if (xn(i)) {
              const _ = e[i.name];
              return ds.accountsArray(_, i.accounts, r, o).flat();
            }
            let u;
            try {
              u = nt(e[i.name]);
            } catch (_) {
              throw new Error(
                'Wrong input type for account "'
                  .concat(i.name, '" in the instruction accounts object')
                  .concat(
                    o !== void 0 ? ' for instruction "' + o + '"' : '',
                    '. Expected PublicKey or string.'
                  )
              );
            }
            const d = i.optional && u.equals(r),
              f = !!(i.writable && !d),
              s = !!(i.signer && !d);
            return { pubkey: u, isWritable: f, isSigner: s };
          })
          .flat()
      : [];
  }
};
function uh(t, ...e) {}
let ch = class {
    static build(e, n) {
      return (...o) => {
        var i, u, d;
        const [, f] = Vr(e, [...o]),
          s = new yl();
        if (f.preInstructions && f.instructions)
          throw new Error('instructions is deprecated, use preInstructions');
        return (
          (i = f.preInstructions) === null || i === void 0 || i.forEach((_) => s.add(_)),
          (u = f.instructions) === null || u === void 0 || u.forEach((_) => s.add(_)),
          s.add(n(...o)),
          (d = f.postInstructions) === null || d === void 0 || d.forEach((_) => s.add(_)),
          s
        );
      };
    }
  },
  lh = class {
    static build(e, n, r, o) {
      return async (...u) => {
        var d;
        const f = n(...u),
          [, s] = Vr(e, [...u]);
        if (o.sendAndConfirm === void 0)
          throw new Error("This function requires 'Provider.sendAndConfirm' to be implemented.");
        try {
          return await o.sendAndConfirm(
            f,
            (d = s.signers) !== null && d !== void 0 ? d : [],
            s.options
          );
        } catch (_) {
          throw vs(_, r);
        }
      };
    }
  },
  dh = class {
    static build(e, n, r, o) {
      var i;
      return ((i = e.accounts) !== null && i !== void 0 ? i : []).reduce(
        (u, d) => ((u[d.name] = new wf(e, d, r, o, n)), u),
        {}
      );
    }
  },
  wf = class {
    get size() {
      return this._size;
    }
    get programId() {
      return this._programId;
    }
    get provider() {
      return this._provider;
    }
    get coder() {
      return this._coder;
    }
    constructor(e, n, r, o, i) {
      (this._idlAccount = n),
        (this._programId = r),
        (this._provider = o != null ? o : mr()),
        (this._coder = i != null ? i : new Ps(e)),
        (this._size = this._coder.accounts.size(n.name));
    }
    async fetchNullable(e, n) {
      const { data: r } = await this.fetchNullableAndContext(e, n);
      return r;
    }
    async fetchNullableAndContext(e, n) {
      const r = await this.getAccountInfoAndContext(e, n),
        { value: o, context: i } = r;
      return {
        data:
          o && o.data.length !== 0
            ? this._coder.accounts.decode(this._idlAccount.name, o.data)
            : null,
        context: i,
      };
    }
    async fetch(e, n) {
      const { data: r } = await this.fetchNullableAndContext(e, n);
      if (r === null)
        throw new Error('Account does not exist or has no data '.concat(e.toString()));
      return r;
    }
    async fetchAndContext(e, n) {
      const { data: r, context: o } = await this.fetchNullableAndContext(e, n);
      if (r === null) throw new Error('Account does not exist '.concat(e.toString()));
      return { data: r, context: o };
    }
    async fetchMultiple(e, n) {
      return (await this.fetchMultipleAndContext(e, n)).map((o) => (o ? o.data : null));
    }
    async fetchMultipleAndContext(e, n) {
      return (
        await Cs(
          this._provider.connection,
          e.map((o) => nt(o)),
          n
        )
      ).map((o) => {
        if (o == null) return null;
        const { account: i, context: u } = o;
        return { data: this._coder.accounts.decode(this._idlAccount.name, i.data), context: u };
      });
    }
    async all(e) {
      const n = this.coder.accounts.memcmp(
          this._idlAccount.name,
          e instanceof ne.Buffer ? e : void 0
        ),
        r = [];
      return (
        (n == null ? void 0 : n.offset) != null &&
          (n == null ? void 0 : n.bytes) != null &&
          r.push({ memcmp: { offset: n.offset, bytes: n.bytes } }),
        (n == null ? void 0 : n.dataSize) != null && r.push({ dataSize: n.dataSize }),
        (
          await this._provider.connection.getProgramAccounts(this._programId, {
            commitment: this._provider.connection.commitment,
            filters: [...r, ...(Array.isArray(e) ? e : [])],
          })
        ).map(({ pubkey: i, account: u }) => ({
          publicKey: i,
          account: this._coder.accounts.decode(this._idlAccount.name, u.data),
        }))
      );
    }
    subscribe(e, n) {
      const r = ar.get(e.toString());
      if (r) return r.ee;
      const o = new y_();
      e = nt(e);
      const i = this._provider.connection.onAccountChange(
        e,
        (u) => {
          const d = this._coder.accounts.decode(this._idlAccount.name, u.data);
          o.emit('change', d);
        },
        n
      );
      return ar.set(e.toString(), { ee: o, listener: i }), o;
    }
    async unsubscribe(e) {
      let n = ar.get(e.toString());
      if (!n) {
        console.warn('Address is not subscribed');
        return;
      }
      ar &&
        (await this._provider.connection
          .removeAccountChangeListener(n.listener)
          .then(() => {
            ar.delete(e.toString());
          })
          .catch(console.error));
    }
    async createInstruction(e, n) {
      const r = this.size;
      if (this._provider.publicKey === void 0)
        throw new Error(
          "This function requires the Provider interface implementor to have a 'publicKey' field."
        );
      return T_.createAccount({
        fromPubkey: this._provider.publicKey,
        newAccountPubkey: e.publicKey,
        space: n != null ? n : r,
        lamports: await this._provider.connection.getMinimumBalanceForRentExemption(
          n != null ? n : r
        ),
        programId: this._programId,
      });
    }
    async getAccountInfo(e, n) {
      return await this._provider.connection.getAccountInfo(nt(e), n);
    }
    async getAccountInfoAndContext(e, n) {
      return await this._provider.connection.getAccountInfoAndContext(nt(e), n);
    }
  };
const ar = new Map(),
  fs = 'Program log: ',
  If = 'Program data: ',
  fh = fs.length,
  ph = If.length;
let bf = class {
    constructor(e, n, r) {
      (this._programId = e),
        (this._provider = n),
        (this._eventParser = new Ms(e, r)),
        (this._eventCallbacks = new Map()),
        (this._eventListeners = new Map()),
        (this._listenerIdCount = 0);
    }
    addEventListener(e, n) {
      var r;
      let o = this._listenerIdCount;
      return (
        (this._listenerIdCount += 1),
        this._eventListeners.has(e) || this._eventListeners.set(e, []),
        this._eventListeners.set(
          e,
          ((r = this._eventListeners.get(e)) !== null && r !== void 0 ? r : []).concat(o)
        ),
        this._eventCallbacks.set(o, [e, n]),
        this._onLogsSubscriptionId !== void 0 ||
          (this._onLogsSubscriptionId = this._provider.connection.onLogs(
            this._programId,
            (i, u) => {
              if (!i.err)
                for (const d of this._eventParser.parseLogs(i.logs)) {
                  const f = this._eventListeners.get(d.name);
                  f &&
                    f.forEach((s) => {
                      const _ = this._eventCallbacks.get(s);
                      if (_) {
                        const [, g] = _;
                        g(d.data, u.slot, i.signature);
                      }
                    });
                }
            }
          )),
        o
      );
    }
    async removeEventListener(e) {
      const n = this._eventCallbacks.get(e);
      if (!n) throw new Error('Event listener '.concat(e, " doesn't exist!"));
      const [r] = n;
      let o = this._eventListeners.get(r);
      if (!o) throw new Error("Event listeners don't exist for ".concat(r, '!'));
      if (
        (this._eventCallbacks.delete(e),
        (o = o.filter((i) => i !== e)),
        this._eventListeners.set(r, o),
        o.length === 0 && this._eventListeners.delete(r),
        this._eventCallbacks.size === 0)
      ) {
        if (this._eventListeners.size !== 0)
          throw new Error(
            'Expected event listeners size to be 0 but got '.concat(this._eventListeners.size)
          );
        this._onLogsSubscriptionId !== void 0 &&
          (await this._provider.connection.removeOnLogsListener(this._onLogsSubscriptionId),
          (this._onLogsSubscriptionId = void 0));
      }
    }
  },
  Ms = class {
    constructor(e, n) {
      (this.coder = n), (this.programId = e);
    }
    *parseLogs(e, n = !1) {
      const r = new mh(e),
        o = new _h();
      let i = r.next();
      for (; i !== null; ) {
        let [u, d, f] = this.handleLog(o, i, n);
        u && (yield u), d && o.push(d), f && o.pop(), (i = r.next());
      }
    }
    handleLog(e, n, r) {
      return e.stack.length > 0 && e.program() === this.programId.toString()
        ? this.handleProgramLog(n, r)
        : [null, ...this.handleSystemLog(n)];
    }
    handleProgramLog(e, n) {
      if (e.startsWith(fs) || e.startsWith(If)) {
        const r = e.startsWith(fs) ? e.slice(fh) : e.slice(ph),
          o = this.coder.events.decode(r);
        if (n && o === null) throw new Error('Unable to decode event '.concat(r));
        return [o, null, !1];
      } else return [null, ...this.handleSystemLog(e)];
    }
    handleSystemLog(e) {
      const n = e.split(':')[0];
      return n.match(/^Program (.*) success/g) !== null
        ? [null, !0]
        : n.startsWith('Program '.concat(this.programId.toString(), ' invoke'))
          ? [this.programId.toString(), !1]
          : n.includes('invoke')
            ? ['cpi', !1]
            : [null, !1];
    }
  },
  _h = class {
    constructor() {
      this.stack = [];
    }
    program() {
      if (!this.stack.length) throw new Error('Expected the stack to have elements');
      return this.stack[this.stack.length - 1];
    }
    push(e) {
      this.stack.push(e);
    }
    pop() {
      if (!this.stack.length) throw new Error('Expected the stack to have elements');
      this.stack.pop();
    }
  },
  mh = class {
    constructor(e) {
      this.logs = e;
    }
    next() {
      if (this.logs.length === 0) return null;
      let e = this.logs[0];
      return (this.logs = this.logs.slice(1)), e;
    }
  },
  hh = class {
    static build(e, n, r, o, i, u, d) {
      return async (...s) => {
        var _;
        const g = n(...s),
          [, m] = Vr(e, [...s]);
        let h;
        if (o.simulate === void 0)
          throw new Error("This function requires 'Provider.simulate' to be implemented.");
        try {
          h = await o.simulate(
            g,
            m.signers,
            (_ = m.options) === null || _ === void 0 ? void 0 : _.commitment
          );
        } catch (b) {
          throw vs(b, r);
        }
        if (h === void 0) throw new Error('Unable to simulate transaction');
        const A = h.logs;
        if (!A) throw new Error('Simulated logs not found');
        const R = [];
        if (d.events) {
          let b = new Ms(u, i);
          for (const N of b.parseLogs(A)) R.push(N);
        }
        return { events: R, raw: A };
      };
    }
  };
function Mo(t) {
  return new Nf(
    Kr(8),
    (e) => Ah.fromBuffer(e),
    (e) => e.toBuffer(),
    t
  );
}
function hi(t) {
  return new Nf(
    Kr(32),
    (e) => new We(e),
    (e) => e.toBuffer(),
    t
  );
}
function ko(t, e) {
  return new gh(t, e);
}
let Nf = class extends $i {
    constructor(e, n, r, o) {
      super(e.span, o), (this.layout = e), (this.decoder = n), (this.encoder = r);
    }
    decode(e, n) {
      return this.decoder(this.layout.decode(e, n));
    }
    encode(e, n, r) {
      return this.layout.encode(this.encoder(e), n, r);
    }
    getSpan(e, n) {
      return this.layout.getSpan(e, n);
    }
  },
  gh = class extends $i {
    constructor(e, n) {
      super(-1, n), (this.layout = e), (this.discriminator = Dt());
    }
    encode(e, n, r = 0) {
      return e == null
        ? this.layout.span + this.discriminator.encode(0, n, r)
        : (this.discriminator.encode(1, n, r), this.layout.encode(e, n, r + 4) + 4);
    }
    decode(e, n = 0) {
      const r = this.discriminator.decode(e, n);
      if (r === 0) return null;
      if (r === 1) return this.layout.decode(e, n + 4);
      throw new Error('Invalid coption ' + this.layout.property);
    }
    getSpan(e, n = 0) {
      return this.layout.getSpan(e, n + 4) + 4;
    }
  },
  Ah = class Cf extends Xt {
    toBuffer() {
      const e = super.toArray().reverse(),
        n = ne.Buffer.from(e);
      if (n.length === 8) return n;
      if (n.length >= 8) throw new Error('u64 too large');
      const r = ne.Buffer.alloc(8);
      return n.copy(r), r;
    }
    static fromBuffer(e) {
      if (e.length !== 8) throw new Error('Invalid buffer length: '.concat(e.length));
      return new Cf(
        [...e]
          .reverse()
          .map((n) => '00'.concat(n.toString(16)).slice(-2))
          .join(''),
        16
      );
    }
  };
const Oh = $e([
  hi('mint'),
  hi('owner'),
  Mo('amount'),
  ko(hi(), 'delegate'),
  ((t) => {
    const e = Af(Cm('discriminator'), null, t);
    return (
      e.addVariant(0, $e([]), 'uninitialized'),
      e.addVariant(1, $e([]), 'initialized'),
      e.addVariant(2, $e([]), 'frozen'),
      e
    );
  })('state'),
  ko(Mo(), 'isNative'),
  Mo('delegatedAmount'),
  ko(hi(), 'closeAuthority'),
]);
function Rh(t) {
  return Oh.decode(t);
}
class yh {
  constructor(e, n, r, o, i, u, d, f) {
    (this._args = e),
      (this._accounts = n),
      (this._provider = r),
      (this._programId = o),
      (this._idlIx = i),
      (this._idlTypes = d),
      (this._customResolver = f),
      (this._accountStore = new Th(r, u, o));
  }
  args(e) {
    this._args = e;
  }
  async resolve() {
    this.resolveEventCpi(this._idlIx.accounts), this.resolveConst(this._idlIx.accounts);
    let e = 0;
    for (
      ;
      (await this.resolvePdasAndRelations(this._idlIx.accounts)) + (await this.resolveCustom()) > 0;

    )
      if ((e++, e === 16)) throw new Error('Reached maximum depth for account resolution');
  }
  resolveOptionals(e) {
    Object.assign(this._accounts, this.resolveOptionalsHelper(e, this._idlIx.accounts));
  }
  get(e) {
    const n = e.reduce((r, o) => r && r[o], this._accounts);
    if (n && n.toBase58) return n;
  }
  set(e, n) {
    let r = this._accounts;
    e.forEach((o, i) => {
      var u;
      i === e.length - 1 && (r[o] = n),
        (r[o] = (u = r[o]) !== null && u !== void 0 ? u : {}),
        (r = r[o]);
    });
  }
  resolveOptionalsHelper(e, n) {
    const r = {};
    for (const o of n) {
      const i = o.name,
        u = e[i];
      u !== void 0 &&
        (vf(u)
          ? xn(o)
            ? (r[i] = this.resolveOptionalsHelper(u, o.accounts))
            : (r[i] = Pf(u))
          : u !== null
            ? (r[i] = nt(u))
            : o.optional && (r[i] = this._programId));
    }
    return r;
  }
  async resolveCustom() {
    if (this._customResolver) {
      const { accounts: e, resolved: n } = await this._customResolver({
        args: this._args,
        accounts: this._accounts,
        provider: this._provider,
        programId: this._programId,
        idlIx: this._idlIx,
      });
      return (this._accounts = e), n;
    }
    return 0;
  }
  resolveEventCpi(e, n = []) {
    for (const r in e) {
      const o = e[r];
      xn(o) && this.resolveEventCpi(o.accounts, [...n, o.name]);
      const i = +r + 1;
      if (i === e.length) return;
      const u = e[r].name,
        d = e[i].name;
      if (u === 'eventAuthority' && d === 'program') {
        const f = [...n, u],
          s = [...n, d];
        this.get(f) ||
          this.set(
            f,
            We.findProgramAddressSync([ne.Buffer.from('__event_authority')], this._programId)[0]
          ),
          this.get(s) || this.set(s, this._programId);
        return;
      }
    }
  }
  resolveConst(e, n = []) {
    for (const r of e) {
      const o = r.name;
      if (xn(r)) this.resolveConst(r.accounts, [...n, o]);
      else {
        const i = r;
        if ((i.signer || i.address) && !this.get([...n, o])) {
          if (i.signer) {
            if (!this._provider.wallet)
              throw new Error(
                'This function requires the `Provider` interface implementor to have a `wallet` field.'
              );
            this.set([...n, o], this._provider.wallet.publicKey);
          }
          i.address && this.set([...n, o], nt(i.address));
        }
      }
    }
  }
  async resolvePdasAndRelations(e, n = []) {
    let r = 0;
    for (const o of e) {
      const i = o.name;
      if (xn(o)) r += await this.resolvePdasAndRelations(o.accounts, [...n, i]);
      else {
        const u = o;
        if ((u.pda || u.relations) && !this.get([...n, i])) {
          r++;
          try {
            if (u.pda) {
              const d = await Promise.all(u.pda.seeds.map((_) => this.toBuffer(_, n)));
              if (d.some((_) => !_)) continue;
              const f = await this.parseProgramId(u, n),
                [s] = We.findProgramAddressSync(d, f);
              this.set([...n, i], s);
            }
          } catch (d) {}
          try {
            if (u.relations) {
              const d = this.get([...n, u.relations[0]]);
              if (d) {
                const f = await this._accountStore.fetchAccount({ publicKey: d });
                this.set([...n, i], f[i]);
              }
            }
          } catch (d) {}
        }
      }
    }
    return r;
  }
  async parseProgramId(e, n = []) {
    var r;
    if (!(!((r = e.pda) === null || r === void 0) && r.program)) return this._programId;
    const o = await this.toBuffer(e.pda.program, n);
    if (!o) throw new Error('Program seed not resolved: '.concat(e.name));
    return new We(o);
  }
  async toBuffer(e, n = []) {
    switch (e.kind) {
      case 'const':
        return this.toBufferConst(e);
      case 'arg':
        return await this.toBufferArg(e);
      case 'account':
        return await this.toBufferAccount(e, n);
      default:
        throw new Error('Unexpected seed: '.concat(e));
    }
  }
  toBufferConst(e) {
    return this.toBufferValue('bytes', e.value);
  }
  async toBufferArg(e) {
    const [n, ...r] = e.path.split('.'),
      o = this._idlIx.args.findIndex((d) => d.name === n);
    if (o === -1) throw new Error('Unable to find argument for seed: '.concat(n));
    const i = r.reduce((d, f) => (d != null ? d : {})[f], this._args[o]);
    if (i === void 0) return;
    const u = this.getType(this._idlIx.args[o].type, r);
    return this.toBufferValue(u, i);
  }
  async toBufferAccount(e, n = []) {
    const [r, ...o] = e.path.split('.'),
      i = this.get([...n, r]);
    if (!i) return;
    if (!o.length) return this.toBufferValue('pubkey', i);
    if (!e.account)
      throw new Error('Seed account is required in order to resolve type: '.concat(e.path));
    let d = await this._accountStore.fetchAccount({ publicKey: i, name: e.account }),
      f = o;
    for (; f.length > 0; ) (d = d[f[0]]), (f = f.slice(1));
    if (d === void 0) return;
    const s = this.getType({ defined: { name: e.account } }, o);
    return this.toBufferValue(s, d);
  }
  toBufferValue(e, n) {
    switch (e) {
      case 'u8':
      case 'i8':
        return ne.Buffer.from([n]);
      case 'u16':
      case 'i16':
        return new Xt(n).toArrayLike(ne.Buffer, 'le', 2);
      case 'u32':
      case 'i32':
        return new Xt(n).toArrayLike(ne.Buffer, 'le', 4);
      case 'u64':
      case 'i64':
        return new Xt(n).toArrayLike(ne.Buffer, 'le', 8);
      case 'u128':
      case 'i128':
        return new Xt(n).toArrayLike(ne.Buffer, 'le', 16);
      case 'u256':
      case 'i256':
        return new Xt(n).toArrayLike(ne.Buffer, 'le', 32);
      case 'string':
        return ne.Buffer.from(n);
      case 'pubkey':
        return n.toBuffer();
      case 'bytes':
        return ne.Buffer.from(n);
      default:
        if (e != null && e.array) return ne.Buffer.from(n);
        throw new Error('Unexpected seed type: '.concat(e));
    }
  }
  getType(e, n = []) {
    var r;
    const o = (r = e == null ? void 0 : e.defined) === null || r === void 0 ? void 0 : r.name;
    if (o) {
      if (o === 'tokenAccount')
        switch (n.at(0)) {
          case 'mint':
          case 'owner':
            return 'pubkey';
          case 'amount':
          case 'delagatedAmount':
            return 'u64';
          default:
            throw new Error('Unknown token account path: '.concat(n));
        }
      const i = this._idlTypes.find((_) => _.name === o);
      if (!i) throw new Error('Type not found: '.concat(o));
      const [u, ...d] = n,
        s = i.type.fields.find((_) => _.name === u);
      if (!s) throw new Error('Field not found: '.concat(u));
      return this.getType(s.type, d);
    }
    return e;
  }
}
class Th {
  constructor(e, n, r) {
    (this._provider = e),
      (this._cache = new Map()),
      (this._idls = {}),
      (this._idls[r.toBase58()] = n);
  }
  async fetchAccount({ publicKey: e, name: n }) {
    const r = e.toBase58();
    if (!this._cache.has(r)) {
      const o = await this._provider.connection.getAccountInfo(e);
      if (o === null) throw new Error('Account not found: '.concat(r));
      if (n === 'tokenAccount') {
        const i = Rh(o.data);
        this._cache.set(r, i);
      } else {
        const i = await this.getAccountsNs(o.owner);
        if (i) {
          const u = Object.values(i)[0];
          if (u) {
            const d = u.coder.accounts.decodeAny(o.data);
            this._cache.set(r, d);
          }
        }
      }
    }
    return this._cache.get(r);
  }
  async getAccountsNs(e) {
    const n = e.toBase58();
    if (!this._idls[n]) {
      const r = await wn.fetchIdl(e, this._provider);
      if (r) {
        const o = new wn(r, this._provider);
        this._idls[n] = o.account;
      }
    }
    return this._idls[n];
  }
}
class Sf {
  static build(e, n, r, o, i, u, d, f, s, _, g) {
    return (...m) => new Eh(m, o, i, u, d, f, e, n, r, s, _, g);
  }
}
function vf(t) {
  return typeof t == 'object' && t !== null && !('_bn' in t);
}
function Pf(t, e) {
  const n = {};
  for (const r in t) {
    const o = t[r];
    if (o === null)
      throw new Error('Failed to resolve optionals due to IDL type mismatch with input accounts!');
    n[r] = vf(o) ? Pf(o) : nt(o);
  }
  return n;
}
class Eh {
  constructor(e, n, r, o, i, u, d, f, s, _, g, m) {
    (this._args = e),
      (this._ixFn = n),
      (this._txFn = r),
      (this._rpcFn = o),
      (this._simulateFn = i),
      (this._viewFn = u),
      (this._accounts = {}),
      (this._remainingAccounts = []),
      (this._signers = []),
      (this._preInstructions = []),
      (this._postInstructions = []),
      (this._resolveAccounts = !0),
      (this._accountsResolver = new yh(e, this._accounts, d, f, s, _, g, m));
  }
  args(e) {
    (this._args = e), this._accountsResolver.args(e);
  }
  accounts(e) {
    return this.accountsPartial(e);
  }
  accountsPartial(e) {
    return (this._resolveAccounts = !0), this._accountsResolver.resolveOptionals(e), this;
  }
  accountsStrict(e) {
    return (this._resolveAccounts = !1), this._accountsResolver.resolveOptionals(e), this;
  }
  signers(e) {
    return (this._signers = this._signers.concat(e)), this;
  }
  remainingAccounts(e) {
    return (this._remainingAccounts = this._remainingAccounts.concat(e)), this;
  }
  preInstructions(e, n = !1) {
    return (
      n
        ? (this._preInstructions = e.concat(this._preInstructions))
        : (this._preInstructions = this._preInstructions.concat(e)),
      this
    );
  }
  postInstructions(e) {
    return (this._postInstructions = this._postInstructions.concat(e)), this;
  }
  async pubkeys() {
    return this._resolveAccounts && (await this._accountsResolver.resolve()), this._accounts;
  }
  async rpc(e) {
    return (
      this._resolveAccounts && (await this._accountsResolver.resolve()),
      this._rpcFn(...this._args, {
        accounts: this._accounts,
        signers: this._signers,
        remainingAccounts: this._remainingAccounts,
        preInstructions: this._preInstructions,
        postInstructions: this._postInstructions,
        options: e,
      })
    );
  }
  async rpcAndKeys(e) {
    return { pubkeys: await this.pubkeys(), signature: await this.rpc(e) };
  }
  async view(e) {
    if ((this._resolveAccounts && (await this._accountsResolver.resolve()), !this._viewFn))
      throw new Error('Method does not support views');
    return this._viewFn(...this._args, {
      accounts: this._accounts,
      signers: this._signers,
      remainingAccounts: this._remainingAccounts,
      preInstructions: this._preInstructions,
      postInstructions: this._postInstructions,
      options: e,
    });
  }
  async simulate(e) {
    return (
      this._resolveAccounts && (await this._accountsResolver.resolve()),
      this._simulateFn(...this._args, {
        accounts: this._accounts,
        signers: this._signers,
        remainingAccounts: this._remainingAccounts,
        preInstructions: this._preInstructions,
        postInstructions: this._postInstructions,
        options: e,
      })
    );
  }
  async instruction() {
    return (
      this._resolveAccounts && (await this._accountsResolver.resolve()),
      this._ixFn(...this._args, {
        accounts: this._accounts,
        signers: this._signers,
        remainingAccounts: this._remainingAccounts,
        preInstructions: this._preInstructions,
        postInstructions: this._postInstructions,
      })
    );
  }
  async prepare() {
    return {
      instruction: await this.instruction(),
      pubkeys: await this.pubkeys(),
      signers: this._signers,
    };
  }
  async transaction() {
    return (
      this._resolveAccounts && (await this._accountsResolver.resolve()),
      this._txFn(...this._args, {
        accounts: this._accounts,
        signers: this._signers,
        remainingAccounts: this._remainingAccounts,
        preInstructions: this._preInstructions,
        postInstructions: this._postInstructions,
      })
    );
  }
}
let wh = class {
  static build(e, n, r, o) {
    const i = n.accounts.find((f) => f.writable),
      u = !!n.returns;
    return i || !u
      ? void 0
      : async (...f) => {
          let s = await r(...f);
          const _ = 'Program return: '.concat(e, ' ');
          let g = s.raw.find((R) => R.startsWith(_));
          if (!g) throw new Error('View expected return log');
          let m = Es(g.slice(_.length)),
            h = n.returns;
          if (!h) throw new Error('View expected return type');
          return En.fieldLayout({ type: h }, o.types).decode(m);
        };
  }
};
class Ih {
  static build(e, n, r, o, i) {
    const u = {},
      d = {},
      f = {},
      s = {},
      _ = {},
      g = {},
      m = Pl(e),
      h = e.accounts ? dh.build(e, n, r, o) : {};
    return (
      e.instructions.forEach((A) => {
        const R = ah.build(A, (F, Q) => n.instruction.encode(F, Q), r),
          b = ch.build(A, R),
          N = lh.build(A, b, m, o),
          v = hh.build(A, b, m, o, n, r, e),
          w = wh.build(r, A, v, e),
          x = Sf.build(o, r, A, R, b, N, v, w, h, e.types || [], i == null ? void 0 : i(A)),
          G = A.name;
        (d[G] = R), (f[G] = b), (u[G] = N), (s[G] = v), (_[G] = x), w && (g[G] = w);
      }),
      [u, d, f, h, s, _, g]
    );
  }
}
class wn {
  get programId() {
    return this._programId;
  }
  get idl() {
    return this._idl;
  }
  get rawIdl() {
    return this._rawIdl;
  }
  get coder() {
    return this._coder;
  }
  get provider() {
    return this._provider;
  }
  constructor(e, n = mr(), r, o) {
    const i = Y_(e);
    (this._idl = i),
      (this._rawIdl = e),
      (this._provider = n),
      (this._programId = nt(e.address)),
      (this._coder = r != null ? r : new Ps(i)),
      (this._events = new bf(this._programId, n, this._coder));
    const [u, d, f, s, _, g, m] = Ih.build(i, this._coder, this._programId, n, o);
    (this.rpc = u),
      (this.instruction = d),
      (this.transaction = f),
      (this.account = s),
      (this.simulate = _),
      (this.methods = g),
      (this.views = m);
  }
  static async at(e, n) {
    const r = nt(e),
      o = await wn.fetchIdl(r, n);
    if (!o) throw new Error('IDL not found for program: '.concat(e.toString()));
    return new wn(o, n);
  }
  static async fetchIdl(e, n) {
    n = n != null ? n : mr();
    const r = nt(e),
      o = await V_(r),
      i = await n.connection.getAccountInfo(o);
    if (!i) return null;
    let u = z_(i.data.slice(8));
    const d = E_(u.data);
    return JSON.parse(vl(d));
  }
  addEventListener(e, n) {
    return this._events.addEventListener(e, n);
  }
  async removeEventListener(e) {
    return await this._events.removeEventListener(e);
  }
}
new We('11111111111111111111111111111111');
function bh(t) {
  return new wn(Mf, t, Nh());
}
function Nh() {
  return new Rf(Mf);
}
const Mf = {
  address: '11111111111111111111111111111111',
  metadata: { name: 'systemProgram', version: '0.1.0', spec: '0.1.0' },
  instructions: [
    {
      name: 'advanceNonceAccount',
      discriminator: [4, 0, 0, 0],
      accounts: [
        { name: 'nonce', writable: !0 },
        { name: 'recentBlockhashes' },
        { name: 'authorized', signer: !0 },
      ],
      args: [{ name: 'authorized', type: 'pubkey' }],
    },
    {
      name: 'allocate',
      discriminator: [8, 0, 0, 0],
      accounts: [{ name: 'pubkey', writable: !0, signer: !0 }],
      args: [{ name: 'space', type: 'u64' }],
    },
    {
      name: 'allocateWithSeed',
      discriminator: [9, 0, 0, 0],
      accounts: [
        { name: 'account', writable: !0 },
        { name: 'base', signer: !0 },
      ],
      args: [
        { name: 'base', type: 'pubkey' },
        { name: 'seed', type: 'string' },
        { name: 'space', type: 'u64' },
        { name: 'owner', type: 'pubkey' },
      ],
    },
    {
      name: 'assign',
      discriminator: [1, 0, 0, 0],
      accounts: [{ name: 'pubkey', writable: !0, signer: !0 }],
      args: [{ name: 'owner', type: 'pubkey' }],
    },
    {
      name: 'assignWithSeed',
      discriminator: [10, 0, 0, 0],
      accounts: [
        { name: 'account', writable: !0 },
        { name: 'base', signer: !0 },
      ],
      args: [
        { name: 'base', type: 'pubkey' },
        { name: 'seed', type: 'string' },
        { name: 'owner', type: 'pubkey' },
      ],
    },
    {
      name: 'authorizeNonceAccount',
      discriminator: [7, 0, 0, 0],
      accounts: [
        { name: 'nonce', writable: !0 },
        { name: 'authorized', signer: !0 },
      ],
      args: [{ name: 'authorized', type: 'pubkey' }],
    },
    {
      name: 'createAccount',
      discriminator: [0, 0, 0, 0],
      accounts: [
        { name: 'from', writable: !0, signer: !0 },
        { name: 'to', writable: !0, signer: !0 },
      ],
      args: [
        { name: 'lamports', type: 'u64' },
        { name: 'space', type: 'u64' },
        { name: 'owner', type: 'pubkey' },
      ],
    },
    {
      name: 'createAccountWithSeed',
      discriminator: [3, 0, 0, 0],
      accounts: [
        { name: 'from', writable: !0, signer: !0 },
        { name: 'to', writable: !0 },
        { name: 'base', signer: !0 },
      ],
      args: [
        { name: 'base', type: 'pubkey' },
        { name: 'seed', type: 'string' },
        { name: 'lamports', type: 'u64' },
        { name: 'space', type: 'u64' },
        { name: 'owner', type: 'pubkey' },
      ],
    },
    {
      name: 'initializeNonceAccount',
      discriminator: [6, 0, 0, 0],
      accounts: [
        { name: 'nonce', writable: !0, signer: !0 },
        { name: 'recentBlockhashes' },
        { name: 'rent', address: 'SysvarRent111111111111111111111111111111111' },
      ],
      args: [{ name: 'authorized', type: 'pubkey' }],
    },
    {
      name: 'transfer',
      discriminator: [2, 0, 0, 0],
      accounts: [
        { name: 'from', writable: !0, signer: !0 },
        { name: 'to', writable: !0 },
      ],
      args: [{ name: 'lamports', type: 'u64' }],
    },
    {
      name: 'transferWithSeed',
      discriminator: [11, 0, 0, 0],
      accounts: [
        { name: 'from', writable: !0 },
        { name: 'base', signer: !0 },
        { name: 'to', writable: !0 },
      ],
      args: [
        { name: 'lamports', type: 'u64' },
        { name: 'seed', type: 'string' },
        { name: 'owner', type: 'pubkey' },
      ],
    },
    {
      name: 'withdrawNonceAccount',
      discriminator: [5, 0, 0, 0],
      accounts: [
        { name: 'nonce', writable: !0 },
        { name: 'to', writable: !0 },
        { name: 'recentBlockhashes' },
        { name: 'rent', address: 'SysvarRent111111111111111111111111111111111' },
        { name: 'authorized', signer: !0 },
      ],
      args: [{ name: 'lamports', type: 'u64' }],
    },
  ],
  accounts: [{ name: 'nonce', discriminator: [] }],
  types: [
    {
      name: 'feeCalculator',
      type: { kind: 'struct', fields: [{ name: 'lamportsPerSignature', type: 'u64' }] },
    },
    {
      name: 'nonce',
      type: {
        kind: 'struct',
        fields: [
          { name: 'version', type: 'u32' },
          { name: 'state', type: 'u32' },
          { name: 'authorizedPubkey', type: 'pubkey' },
          { name: 'nonce', type: 'pubkey' },
          { name: 'feeCalculator', type: { defined: { name: 'feeCalculator' } } },
        ],
      },
    },
  ],
};
let Ch = class {
  static system(e) {
    return bh(e);
  }
};
const Sh = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        AccountClient: wf,
        AnchorError: Hn,
        AnchorProvider: _r,
        BN: Xt,
        BorshAccountsCoder: lf,
        BorshCoder: Ps,
        BorshEventCoder: df,
        BorshInstructionCoder: cf,
        DISCRIMINATOR_SIZE: yn,
        EventManager: bf,
        EventParser: Ms,
        IdlError: Mt,
        LangErrorCode: se,
        LangErrorMessage: uf,
        MethodsBuilderFactory: Sf,
        Native: Ch,
        Program: wn,
        ProgramError: hr,
        ProgramErrorStack: Xn,
        SystemCoder: Rf,
        getProvider: mr,
        parseIdlErrors: Pl,
        setProvider: pm,
        splitArgsAndCtx: Vr,
        toInstruction: Ml,
        translateAddress: nt,
        translateError: vs,
        utils: sh,
        validateAccounts: ws,
        web3: I_,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  ks = $r(Sh);
var gt = {};
(function (t) {
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.TRITON_VOTE_ACCOUNT =
      t.ROUTER_PROGRAM_MAP =
      t.JUP_V6_BASE_URL =
      t.JUPITER_PRICE_API =
      t.JUP_ULTRA_BASE_URL =
      t.ROUTER_TYPE_IDS =
      t.EXCLUDED_QUOTES_ROUTERS =
      t.RFQ_ROUTERS =
      t.CLOVER_DEX_TYPES =
      t.SUPPORTED_ROUTER_TYPES =
      t.DEFAULT_TIMEOUT_MS =
      t.SLOTS_PER_MINUTE =
      t.COMPUTE_BUDGET_PROGRAM_ID =
      t.SYSTEM_PROGRAM_ID =
        void 0),
    (t.getRouterTypeID = n),
    (t.getAllRouterTypeIDsMap = r),
    (t.isValidRouterType = o);
  const e = me;
  (t.SYSTEM_PROGRAM_ID = new e.PublicKey('11111111111111111111111111111111')),
    (t.COMPUTE_BUDGET_PROGRAM_ID = new e.PublicKey('ComputeBudget111111111111111111111111111111')),
    (t.SLOTS_PER_MINUTE = (60 * 1e3) / 400),
    (t.DEFAULT_TIMEOUT_MS = 700),
    (t.SUPPORTED_ROUTER_TYPES = [
      'okx',
      'jupiter',
      'per',
      'dflow',
      'fluxbeam',
      'raydium',
      'autobahn',
      'jupiterU',
      'jupiterZ',
      'hashflow',
      'jupiterLite',
      'jupiterSelfHosted',
      'clover',
    ]),
    (t.CLOVER_DEX_TYPES = ['limo', 'exponent']),
    (t.RFQ_ROUTERS = ['per', 'hashflow', 'jupiterZ']),
    (t.EXCLUDED_QUOTES_ROUTERS = ['fluxbeam']),
    (t.ROUTER_TYPE_IDS = {
      okx: 1,
      jupiter: 2,
      per: 3,
      dflow: 4,
      fluxbeam: 5,
      raydium: 6,
      autobahn: 7,
      jupiterU: 8,
      jupiterZ: 9,
      hashflow: 10,
      jupiterLite: 11,
      jupiterSelfHosted: 12,
      clover: 13,
    });
  function n(u) {
    return t.ROUTER_TYPE_IDS[u];
  }
  function r() {
    return { mapping: t.ROUTER_TYPE_IDS };
  }
  function o(u) {
    return t.SUPPORTED_ROUTER_TYPES.includes(u);
  }
  (t.JUP_ULTRA_BASE_URL = 'https://lite-api.jup.ag/ultra/v1'),
    (t.JUPITER_PRICE_API = 'https://lite-api.jup.ag/price/v2'),
    (t.JUP_V6_BASE_URL = 'https://lite-api.jup.ag/swap/v1/');
  const i = {
    okx: new e.PublicKey('6m2CDdhRgxpH4WjvdzxAYbGxwdGUz5MziiL5jek2kBma'),
    jupiter: new e.PublicKey('JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4'),
    per: new e.PublicKey('PytERJFhAKuNNuaiXkApLfWzwNwSNDACpigT3LwQfou'),
    dflow: new e.PublicKey('DF1ow4tspfHX9JwWJsAb9epbkA8hmpSEAtxXy1V27QBH'),
    fluxbeam: new e.PublicKey('FLUXubRmkEi2q6K3Y9kBPg9248ggaZVsoSFhtJHSrm1X'),
    raydium: new e.PublicKey('routeUGWgWzqBWFcrCfv8tritsqukccJPu3q5GPP3xS'),
    autobahn: new e.PublicKey('AutobNFLMzX1rFCDgwWpwr3ztG5c1oDbSrGq7Jj2LgE'),
    jupiterU: new e.PublicKey('JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4'),
    jupiterZ: new e.PublicKey('61DFfeTKM7trxYcPQCM78bJ794ddZprZpAwAnLiwTpYH'),
    hashflow: new e.PublicKey('CRhtqXk98ATqo1R8gLg7qcpEMuvoPzqD5GNicPPqLMD'),
    jupiterLite: new e.PublicKey('JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4'),
    jupiterSelfHosted: new e.PublicKey('JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4'),
    clover: new e.PublicKey('11111111111111111111111111111111'),
  };
  (t.ROUTER_PROGRAM_MAP = Object.fromEntries(t.SUPPORTED_ROUTER_TYPES.map((u) => [u, i[u]]))),
    (t.TRITON_VOTE_ACCOUNT = new e.PublicKey('9GJmEHGom9eWo4np4L5vC6b6ri1Df2xN8KFoWixvD1Bs'));
})(gt);
var Pc = {},
  vh =
    (T && T.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(Oe, '__esModule', { value: !0 });
Oe.getEnvOrDefault = Oe.TokenInfo = void 0;
Oe.removeComputeBudgetProgram = kh;
Oe.removeSetupIxs = Dh;
Oe.parseKeypairFile = Bh;
Oe.divCeil = xh;
Oe.amountToLamportsBN = Lh;
Oe.amountBNToLamportsBN = Uh;
Oe.amountToLamportsDecimal = $h;
Oe.lamportsToAmountBN = jh;
Oe.lamportsToAmountDecimal = Df;
Oe.getMintDecimals = Hh;
Oe.printMultisigTx = Gh;
Oe.printSimulateTx = Fh;
Oe.checkIfAccountExists = Kh;
Oe.getAssociatedTokenAddress = Bf;
Oe.createAssociatedTokenAccountIdempotentInstruction = xf;
Oe.createAtaIdempotent = Vh;
Oe.getTokenAccountBalance = Wh;
Oe.getSolBalanceInLamports = Lf;
Oe.getSolBalance = qh;
Oe.endpointFromCluster = zh;
Oe.u16ToBytes = Yh;
Oe.accountExist = Xh;
Oe.executeTransaction = Jh;
Oe.buildAndSendTxnWithLogs = Qh;
Oe.sleep = ps;
Oe.compareUint8Arrays = eg;
Oe.getMintsProgramOwner = tg;
Oe.withTimeout = rg;
Oe.getLookupTablesFromLutApi = ig;
Oe.getAccountsNotInLookupTables = og;
const gr = me,
  Mi = jr,
  xt = Lt,
  Ph = wl,
  Ar = ks,
  kf = gt,
  Mc = vh(Li);
class Mh {
  constructor(e, n, r) {
    c(this, 'symbol');
    c(this, 'mint');
    c(this, 'mintDecimals');
    (this.symbol = e), (this.mint = n), (this.mintDecimals = r);
  }
}
Oe.TokenInfo = Mh;
function kh(t) {
  return t.filter((n) => !n.programId.equals(kf.COMPUTE_BUDGET_PROGRAM_ID));
}
function Dh(t) {
  return t.filter(
    (n) =>
      !(
        n.programId.equals(xt.ASSOCIATED_TOKEN_PROGRAM_ID) ||
        n.programId.equals(kf.SYSTEM_PROGRAM_ID) ||
        n.programId.equals(xt.TOKEN_PROGRAM_ID) ||
        n.programId.equals(xt.TOKEN_2022_PROGRAM_ID)
      )
  );
}
function Bh(t) {
  return gr.Keypair.fromSecretKey(ne.Buffer.from(JSON.parse(pr.readFileSync(t))));
}
function xh(t, e) {
  return t.add(e).sub(new Ar.BN(1)).div(e);
}
function Lh(t, e) {
  let n = Math.pow(10, e);
  return new Ar.BN(t.mul(n).floor().toString());
}
function Uh(t, e) {
  let n = new Ar.BN(Math.pow(10, e));
  return new Ar.BN(t.mul(n).toString());
}
function $h(t, e) {
  let n = Math.pow(10, e);
  return t.mul(n);
}
function jh(t, e) {
  let n = new Ar.BN(Math.pow(10, e));
  return new Mi.Decimal(t.div(n).toString());
}
function Df(t, e) {
  let n = Math.pow(10, e);
  return t.div(n);
}
async function Hh(t, e, n) {
  return (await (0, xt.getMint)(t, e, void 0, n)).decimals;
}
async function Gh(t) {
  console.log((0, Ph.binary_to_base58)(t.serializeMessage()));
}
async function Fh(t, e) {
  console.log(
    'Tx in B64',
    'https://explorer.solana.com/tx/inspector?message='.concat(
      encodeURIComponent(e.serializeMessage().toString('base64'))
    )
  );
  let n = await t.simulateTransaction(e);
  console.log('Simulate Response', n), console.log('');
}
async function Kh(t, e) {
  return (await t.getAccountInfo(e)) != null;
}
function Bf(t, e, n) {
  return (0, xt.getAssociatedTokenAddressSync)(e, t, !0, n, xt.ASSOCIATED_TOKEN_PROGRAM_ID);
}
function xf(t, e, n = t, r, o) {
  let i = o;
  i || (i = Bf(t, e, r));
  const u = (0, xt.createAssociatedTokenAccountInstruction)(
    n,
    i,
    t,
    e,
    r,
    xt.ASSOCIATED_TOKEN_PROGRAM_ID
  );
  return (u.data = ne.Buffer.from([1])), [i, u];
}
function Vh(t, e, n, r) {
  const [o, i] = xf(t, n, e, r);
  return { ata: o, createAtaIx: i };
}
async function Wh(t, e) {
  const n = await t.getTokenAccountBalance(e);
  return new Mi.Decimal(n.value.amount).div(Mi.Decimal.pow(10, n.value.decimals));
}
async function Lf(t, e) {
  var r;
  let n;
  for (; n === void 0; )
    n = (r = await t.connection.getAccountInfo(e)) == null ? void 0 : r.lamports;
  return n;
}
async function qh(t, e) {
  const n = new Mi.Decimal(await Lf(t, e));
  return Df(n, 9);
}
function zh(t) {
  switch (t) {
    case 'mainnet':
      return 'FIXTHIS';
    case 'devnet':
      return 'FIXTHIS';
    case 'localnet':
      return 'http://127.0.0.1:8899';
  }
  return t || 'err';
}
function Yh(t) {
  const e = new ArrayBuffer(2);
  return new DataView(e).setUint16(0, t, !1), new Uint8Array(e);
}
async function Xh(t, e) {
  const n = await t.getAccountInfo(e);
  return !(n === null || n.data.length === 0);
}
async function Jh(t, e, n, r = []) {
  const o = new gr.Transaction(),
    { blockhash: i } = await t.getLatestBlockhash();
  return (
    (o.recentBlockhash = i),
    (o.feePayer = n.publicKey),
    o.add(...e),
    await (0, gr.sendAndConfirmTransaction)(t, o, [n, ...r], { commitment: 'confirmed' })
  );
}
async function Qh(t, e, n, r) {
  const { blockhash: o } = await t.getLatestBlockhash();
  (e.recentBlockhash = o), (e.feePayer = n.publicKey);
  try {
    const i = await t.sendTransaction(e, [n, ...r]);
    console.log('Transaction Hash:', i), await ps(5e3);
    const u = await t.getTransaction(i, { commitment: 'confirmed' });
    console.log('Transaction Logs:\n', u.meta.logMessages);
  } catch (i) {
    console.log(i), await ps(5e3);
    const u = i.toString().split(' failed ')[0].split('Transaction ')[1],
      d = await t.getTransaction(u, { commitment: 'confirmed' });
    console.log('Txn', d.meta.logMessages);
  }
}
function ps(t) {
  return new Promise((e) => setTimeout(e, t));
}
const Zh = (t, e) => (t in Pc ? Pc[t] : e);
Oe.getEnvOrDefault = Zh;
function eg(t, e) {
  if (t.length !== e.length) return !1;
  for (let n = 0; n < t.length; n++) if (t[n] !== e[n]) return !1;
  return !0;
}
async function tg(t, e) {
  const n = await t.getAccountInfo(e);
  if (!n) throw new Error('Mint not found');
  return n.owner;
}
function ng(t) {
  return new Promise((e, n) => {
    setTimeout(() => {
      n(new Error('Request timed out after '.concat(t, 'ms')));
    }, t);
  });
}
async function rg(t, e, n) {
  try {
    return await Promise.race([t, ng(e)]);
  } catch (r) {
    if (r instanceof Error && r.message.includes('timed out')) return n(), null;
    throw r;
  }
}
async function ig(t) {
  var e;
  try {
    const n = await Mc.default.post(
      'https://api.kamino.finance/luts/find-minimal',
      { addresses: t.map((r) => r.toBase58()), verify: !0 },
      { headers: { 'Content-Type': 'application/json' } }
    );
    return !n.data || !Array.isArray(n.data) ? [] : n.data.map((r) => new gr.PublicKey(r));
  } catch (n) {
    throw Mc.default.isAxiosError(n)
      ? (console.error('API Error:', ((e = n.response) == null ? void 0 : e.data) || n.message),
        new Error('Failed to find minimal LUT addresses: '.concat(n.message)))
      : n;
  }
}
function og(t, e) {
  const n = new Set();
  for (const o of t) for (const i of o.state.addresses) n.add(i.toBase58());
  const r = new Set();
  for (const o of e)
    if (!o.programId.equals(xt.ASSOCIATED_TOKEN_PROGRAM_ID))
      for (const i of o.keys) {
        const u = i.pubkey.toBase58();
        n.has(u) || r.add(u);
      }
  return Array.from(r).map((o) => new gr.PublicKey(o));
}
var Uf = {},
  $f = {},
  Kn = {},
  it = {},
  sg = {},
  Do;
Object.defineProperty(it, '__esModule', { value: !0 });
it.isVersionedTransaction = it.chunks = it.isBrowser = void 0;
it.isBrowser =
  sg.ANCHOR_BROWSER ||
  (typeof window < 'u' &&
    !(!((Do = window.process) === null || Do === void 0) && Do.hasOwnProperty('type')));
function ag(t, e) {
  return Array.apply(0, new Array(Math.ceil(t.length / e))).map((n, r) =>
    t.slice(r * e, (r + 1) * e)
  );
}
it.chunks = ag;
const ug = (t) => 'version' in t;
it.isVersionedTransaction = ug;
Object.defineProperty(Kn, '__esModule', { value: !0 });
const cg = Pe,
  lg = me,
  kc = it;
class Ds {
  constructor(e) {
    this.payer = e;
  }
  static local() {
    const e = Il;
    if (!e.env.ANCHOR_WALLET || e.env.ANCHOR_WALLET === '')
      throw new Error('expected environment variable `ANCHOR_WALLET` is not set.');
    const n = lg.Keypair.fromSecretKey(
      cg.Buffer.from(JSON.parse(pr.readFileSync(e.env.ANCHOR_WALLET, { encoding: 'utf-8' })))
    );
    return new Ds(n);
  }
  async signTransaction(e) {
    return (0, kc.isVersionedTransaction)(e) ? e.sign([this.payer]) : e.partialSign(this.payer), e;
  }
  async signAllTransactions(e) {
    return e.map(
      (n) => (
        (0, kc.isVersionedTransaction)(n) ? n.sign([this.payer]) : n.partialSign(this.payer), n
      )
    );
  }
  get publicKey() {
    return this.payer.publicKey;
  }
}
Kn.default = Ds;
var Nt = {},
  ft = {},
  Vn = {};
Object.defineProperty(Vn, '__esModule', { value: !0 });
Vn.decode = Vn.encode = void 0;
const Dc = Pe;
function dg(t) {
  return t.reduce((e, n) => e + n.toString(16).padStart(2, '0'), '0x');
}
Vn.encode = dg;
function fg(t) {
  t.indexOf('0x') === 0 && (t = t.substr(2)), t.length % 2 === 1 && (t = '0' + t);
  let e = t.match(/.{2}/g);
  return e === null ? Dc.Buffer.from([]) : Dc.Buffer.from(e.map((n) => parseInt(n, 16)));
}
Vn.decode = fg;
var Wn = {};
Object.defineProperty(Wn, '__esModule', { value: !0 });
Wn.encode = Wn.decode = void 0;
const jf = it;
function pg(t) {
  return (jf.isBrowser ? new TextDecoder('utf-8') : new bl.TextDecoder('utf-8')).decode(t);
}
Wn.decode = pg;
function _g(t) {
  return (jf.isBrowser ? new TextEncoder() : new bl.TextEncoder('utf-8')).encode(t);
}
Wn.encode = _g;
var qn = {},
  mg =
    (T && T.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(qn, '__esModule', { value: !0 });
qn.decode = qn.encode = void 0;
const Hf = mg(Hr);
function hg(t) {
  return Hf.default.encode(t);
}
qn.encode = hg;
function gg(t) {
  return Hf.default.decode(t);
}
qn.decode = gg;
var en = {};
Object.defineProperty(en, '__esModule', { value: !0 });
en.decode = en.encode = void 0;
const Ag = Pe;
function Og(t) {
  return t.toString('base64');
}
en.encode = Og;
function Rg(t) {
  return Ag.Buffer.from(t, 'base64');
}
en.decode = Rg;
var yg =
    (T && T.__createBinding) ||
    (Object.create
      ? function (t, e, n, r) {
          r === void 0 && (r = n);
          var o = Object.getOwnPropertyDescriptor(e, n);
          (!o || ('get' in o ? !e.__esModule : o.writable || o.configurable)) &&
            (o = {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            }),
            Object.defineProperty(t, r, o);
        }
      : function (t, e, n, r) {
          r === void 0 && (r = n), (t[r] = e[n]);
        }),
  Tg =
    (T && T.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  Gi =
    (T && T.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null)
        for (var n in t)
          n !== 'default' && Object.prototype.hasOwnProperty.call(t, n) && yg(e, t, n);
      return Tg(e, t), e;
    };
Object.defineProperty(ft, '__esModule', { value: !0 });
ft.base64 = ft.bs58 = ft.utf8 = ft.hex = void 0;
ft.hex = Gi(Vn);
ft.utf8 = Gi(Wn);
ft.bs58 = Gi(qn);
ft.base64 = Gi(en);
var Rt = {},
  ze = {},
  Le = {},
  Eg =
    (T && T.__createBinding) ||
    (Object.create
      ? function (t, e, n, r) {
          r === void 0 && (r = n);
          var o = Object.getOwnPropertyDescriptor(e, n);
          (!o || ('get' in o ? !e.__esModule : o.writable || o.configurable)) &&
            (o = {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            }),
            Object.defineProperty(t, r, o);
        }
      : function (t, e, n, r) {
          r === void 0 && (r = n), (t[r] = e[n]);
        }),
  wg =
    (T && T.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  Ig =
    (T && T.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null)
        for (var n in t)
          n !== 'default' && Object.prototype.hasOwnProperty.call(t, n) && Eg(e, t, n);
      return wg(e, t), e;
    },
  bg =
    (T && T.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(Le, '__esModule', { value: !0 });
Le.handleDefinedFields =
  Le.convertIdlToCamelCase =
  Le.encodeIdlAccount =
  Le.decodeIdlAccount =
  Le.seed =
  Le.idlAddress =
  Le.isCompositeAccounts =
    void 0;
const Ng = bg(b_),
  Cg = Pe,
  Bc = me,
  Bo = Ig(Ae);
function Sg(t) {
  return 'accounts' in t;
}
Le.isCompositeAccounts = Sg;
async function vg(t) {
  const e = (await Bc.PublicKey.findProgramAddress([], t))[0];
  return await Bc.PublicKey.createWithSeed(e, Gf(), t);
}
Le.idlAddress = vg;
function Gf() {
  return 'anchor:idl';
}
Le.seed = Gf;
const Ff = Bo.struct([Bo.publicKey('authority'), Bo.vecU8('data')]);
function Pg(t) {
  return Ff.decode(t);
}
Le.decodeIdlAccount = Pg;
function Mg(t) {
  const e = Cg.Buffer.alloc(1e3),
    n = Ff.encode(t, e);
  return e.slice(0, n);
}
Le.encodeIdlAccount = Mg;
function kg(t) {
  const e = ['name', 'path', 'account', 'relations', 'generic'],
    n = (i) => i.split('.').map(Ng.default).join('.'),
    r = (i) => {
      for (const u in i) {
        const d = i[u];
        e.includes(u) ? (i[u] = Array.isArray(d) ? d.map(n) : n(d)) : typeof d == 'object' && r(d);
      }
    },
    o = structuredClone(t);
  return r(o), o;
}
Le.convertIdlToCamelCase = kg;
function Dg(t, e, n, r) {
  return t != null && t.length ? (t[0].name ? n(t) : r(t)) : e();
}
Le.handleDefinedFields = Dg;
Object.defineProperty(ze, '__esModule', { value: !0 });
ze.translateAddress = ze.validateAccounts = ze.toInstruction = ze.parseIdlErrors = void 0;
const xc = me,
  Bg = Le;
function xg(t) {
  const e = new Map();
  return (
    t.errors &&
      t.errors.forEach((n) => {
        var r;
        let o = (r = n.msg) !== null && r !== void 0 ? r : n.name;
        e.set(n.code, o);
      }),
    e
  );
}
ze.parseIdlErrors = xg;
function Lg(t, ...e) {
  if (t.args.length != e.length) throw new Error('Invalid argument length');
  const n = {};
  let r = 0;
  return (
    t.args.forEach((o) => {
      (n[o.name] = e[r]), (r += 1);
    }),
    n
  );
}
ze.toInstruction = Lg;
function Kf(t, e = {}) {
  t.forEach((n) => {
    if ((0, Bg.isCompositeAccounts)(n)) Kf(n.accounts, e[n.name]);
    else if (!e[n.name]) throw new Error('Account `'.concat(n.name, '` not provided.'));
  });
}
ze.validateAccounts = Kf;
function Ug(t) {
  return t instanceof xc.PublicKey ? t : new xc.PublicKey(t);
}
ze.translateAddress = Ug;
var Lc;
function Bs() {
  if (Lc) return Rt;
  (Lc = 1),
    Object.defineProperty(Rt, '__esModule', { value: !0 }),
    (Rt.simulateTransaction =
      Rt.getMultipleAccountsAndContext =
      Rt.getMultipleAccounts =
      Rt.invoke =
        void 0);
  const t = me,
    e = it,
    n = ze,
    r = Fi(),
    o = N_;
  async function i(b, N, v, w) {
    (b = (0, n.translateAddress)(b)), w || (w = (0, r.getProvider)());
    const x = new t.Transaction();
    if (
      (x.add(new t.TransactionInstruction({ programId: b, keys: N != null ? N : [], data: v })),
      w.sendAndConfirm === void 0)
    )
      throw new Error("This function requires 'Provider.sendAndConfirm' to be implemented.");
    return await w.sendAndConfirm(x, []);
  }
  Rt.invoke = i;
  const u = 99;
  async function d(b, N, v) {
    return (await f(b, N, v)).map((x) =>
      x ? { publicKey: x.publicKey, account: x.account } : null
    );
  }
  Rt.getMultipleAccounts = d;
  async function f(b, N, v) {
    if (N.length <= u) return await s(b, N, v);
    {
      const w = (0, e.chunks)(N, u);
      return (await Promise.all(w.map((G) => s(b, G, v)))).flat();
    }
  }
  Rt.getMultipleAccountsAndContext = f;
  async function s(b, N, v) {
    const w = v != null ? v : b.commitment,
      { value: x, context: G } = await b.getMultipleAccountsInfoAndContext(N, w);
    return x.map((Q, z) => (Q === null ? null : { publicKey: N[z], account: Q, context: G }));
  }
  async function _(b, N, v, w, x) {
    var G;
    v && v.length > 0 && N.sign(...v);
    const F = N._compile(),
      Q = F.serialize(),
      I = N._serialize(Q).toString('base64'),
      y = { encoding: 'base64', commitment: w != null ? w : b.commitment };
    if (x) {
      const C = (Array.isArray(x) ? x : F.nonProgramIds()).map((M) => M.toBase58());
      y.accounts = { encoding: 'base64', addresses: C };
    }
    v && v.length > 0 && (y.sigVerify = !0);
    const P = [I, y],
      k = await b._rpcRequest('simulateTransaction', P),
      V = (0, o.create)(k, R);
    if ('error' in V) {
      let C;
      if (
        'data' in V.error &&
        ((C = (G = V.error.data) === null || G === void 0 ? void 0 : G.logs), C && Array.isArray(C))
      ) {
        const M = '\n    ',
          W = M + C.join(M);
        console.error(V.error.message, W);
      }
      throw new t.SendTransactionError('failed to simulate transaction: ' + V.error.message, C);
    }
    return V.result;
  }
  Rt.simulateTransaction = _;
  function g(b) {
    return (0, o.coerce)(h(b), m, (N) =>
      'error' in N ? N : ct(xe({}, N), { result: (0, o.create)(N.result, b) })
    );
  }
  const m = h((0, o.unknown)());
  function h(b) {
    return (0, o.union)([
      (0, o.type)({ jsonrpc: (0, o.literal)('2.0'), id: (0, o.string)(), result: b }),
      (0, o.type)({
        jsonrpc: (0, o.literal)('2.0'),
        id: (0, o.string)(),
        error: (0, o.type)({
          code: (0, o.unknown)(),
          message: (0, o.string)(),
          data: (0, o.optional)((0, o.any)()),
        }),
      }),
    ]);
  }
  function A(b) {
    return g((0, o.type)({ context: (0, o.type)({ slot: (0, o.number)() }), value: b }));
  }
  const R = A(
    (0, o.type)({
      err: (0, o.nullable)((0, o.union)([(0, o.type)({}), (0, o.string)()])),
      logs: (0, o.nullable)((0, o.array)((0, o.string)())),
      accounts: (0, o.optional)(
        (0, o.nullable)(
          (0, o.array)(
            (0, o.nullable)(
              (0, o.type)({
                executable: (0, o.boolean)(),
                owner: (0, o.string)(),
                lamports: (0, o.number)(),
                data: (0, o.array)((0, o.string)()),
                rentEpoch: (0, o.optional)((0, o.number)()),
              })
            )
          )
        )
      ),
      unitsConsumed: (0, o.optional)((0, o.number)()),
    })
  );
  return Rt;
}
var Uc;
function Fi() {
  if (Uc) return Nt;
  (Uc = 1),
    Object.defineProperty(Nt, '__esModule', { value: !0 }),
    (Nt.getProvider = Nt.setProvider = Nt.AnchorProvider = void 0);
  const t = me,
    e = ft,
    n = it,
    r = Bs();
  class o {
    constructor(m, h, A = o.defaultOptions()) {
      (this.connection = m),
        (this.wallet = h),
        (this.opts = A),
        (this.publicKey = h == null ? void 0 : h.publicKey);
    }
    static defaultOptions() {
      return { preflightCommitment: 'processed', commitment: 'processed' };
    }
    static local(m, h = o.defaultOptions()) {
      if (n.isBrowser) throw new Error('Provider local is not available on browser.');
      const A = new t.Connection(m != null ? m : 'http://127.0.0.1:8899', h.preflightCommitment),
        b = Kn.default.local();
      return new o(A, b, h);
    }
    static env() {
      if (n.isBrowser) throw new Error('Provider env is not available on browser.');
      const h = Il.env.ANCHOR_PROVIDER_URL;
      if (h === void 0) throw new Error('ANCHOR_PROVIDER_URL is not defined');
      const A = o.defaultOptions(),
        R = new t.Connection(h, A.commitment),
        N = Kn.default.local();
      return new o(R, N, A);
    }
    async sendAndConfirm(m, h, A) {
      var R, b, N, v;
      if ((A === void 0 && (A = this.opts), (0, n.isVersionedTransaction)(m))) h && m.sign(h);
      else if (
        ((m.feePayer = (R = m.feePayer) !== null && R !== void 0 ? R : this.wallet.publicKey),
        (m.recentBlockhash = (
          await this.connection.getLatestBlockhash(A.preflightCommitment)
        ).blockhash),
        h)
      )
        for (const x of h) m.partialSign(x);
      m = await this.wallet.signTransaction(m);
      const w = m.serialize();
      try {
        return await u(this.connection, w, A);
      } catch (x) {
        if (x instanceof d) {
          const G = e.bs58.encode(
              (0, n.isVersionedTransaction)(m)
                ? ((b = m.signatures) === null || b === void 0 ? void 0 : b[0]) || new Uint8Array()
                : (N = m.signature) !== null && N !== void 0
                  ? N
                  : new Uint8Array()
            ),
            F = (0, n.isVersionedTransaction)(m) ? 0 : void 0,
            Q = await this.connection.getTransaction(G, {
              commitment: 'confirmed',
              maxSupportedTransactionVersion: F,
            });
          if (Q) {
            const z = (v = Q.meta) === null || v === void 0 ? void 0 : v.logMessages;
            throw z ? new t.SendTransactionError(x.message, z) : x;
          } else throw x;
        } else throw x;
      }
    }
    async sendAll(m, h) {
      var A, R, b;
      h === void 0 && (h = this.opts);
      const N = (await this.connection.getLatestBlockhash(h.preflightCommitment)).blockhash;
      let v = m.map((G) => {
        var F, Q;
        if ((0, n.isVersionedTransaction)(G.tx)) {
          let z = G.tx;
          return G.signers && z.sign(G.signers), z;
        } else {
          let z = G.tx,
            I = (F = G.signers) !== null && F !== void 0 ? F : [];
          return (
            (z.feePayer = (Q = z.feePayer) !== null && Q !== void 0 ? Q : this.wallet.publicKey),
            (z.recentBlockhash = N),
            I.forEach((y) => {
              z.partialSign(y);
            }),
            z
          );
        }
      });
      const w = await this.wallet.signAllTransactions(v),
        x = [];
      for (let G = 0; G < v.length; G += 1) {
        const F = w[G],
          Q = F.serialize();
        try {
          x.push(await u(this.connection, Q, h));
        } catch (z) {
          if (z instanceof d) {
            const I = e.bs58.encode(
                (0, n.isVersionedTransaction)(F)
                  ? ((A = F.signatures) === null || A === void 0 ? void 0 : A[0]) ||
                      new Uint8Array()
                  : (R = F.signature) !== null && R !== void 0
                    ? R
                    : new Uint8Array()
              ),
              y = (0, n.isVersionedTransaction)(F) ? 0 : void 0,
              P = await this.connection.getTransaction(I, {
                commitment: 'confirmed',
                maxSupportedTransactionVersion: y,
              });
            if (P) {
              const k = (b = P.meta) === null || b === void 0 ? void 0 : b.logMessages;
              throw k ? new t.SendTransactionError(z.message, k) : z;
            } else throw z;
          } else throw z;
        }
      }
      return x;
    }
    async simulate(m, h, A, R) {
      let b = (await this.connection.getLatestBlockhash(A != null ? A : this.connection.commitment))
          .blockhash,
        N;
      if (
        ((0, n.isVersionedTransaction)(m)
          ? (h && h.length > 0 && (m.sign(h), (m = await this.wallet.signTransaction(m))),
            (N = await this.connection.simulateTransaction(m, { commitment: A })))
          : ((m.feePayer = m.feePayer || this.wallet.publicKey),
            (m.recentBlockhash = b),
            h && h.length > 0 && (m = await this.wallet.signTransaction(m)),
            (N = await (0, r.simulateTransaction)(this.connection, m, h, A, R))),
        N.value.err)
      )
        throw new i(N.value);
      return N.value;
    }
  }
  Nt.AnchorProvider = o;
  class i extends Error {
    constructor(m, h) {
      super(h), (this.simulationResponse = m);
    }
  }
  async function u(g, m, h) {
    const A = h && {
        skipPreflight: h.skipPreflight,
        preflightCommitment: h.preflightCommitment || h.commitment,
      },
      R = await g.sendRawTransaction(m, A),
      b = (await g.confirmTransaction(R, h && h.commitment)).value;
    if (b.err)
      throw new d('Raw transaction '.concat(R, ' failed (').concat(JSON.stringify(b), ')'));
    return R;
  }
  class d extends Error {
    constructor(m) {
      super(m);
    }
  }
  function f(g) {
    _ = g;
  }
  Nt.setProvider = f;
  function s() {
    return _ === null ? o.local() : _;
  }
  Nt.getProvider = s;
  let _ = null;
  return Nt;
}
var Jn = {},
  $ = {};
Object.defineProperty($, '__esModule', { value: !0 });
$.ANCHOR_ERROR__REQUIRE_EQ_VIOLATED =
  $.ANCHOR_ERROR__REQUIRE_VIOLATED =
  $.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION_PROGRAM_ID =
  $.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION_AUTHORITY =
  $.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION =
  $.ANCHOR_ERROR__CONSTRAINT_MINT_PERMANENT_DELEGATE_EXTENSION_DELEGATE =
  $.ANCHOR_ERROR__CONSTRAINT_MINT_PERMANENT_DELEGATE_EXTENSION =
  $.ANCHOR_ERROR__CONSTRAINT_MINT_CLOSE_AUTHORITY_EXTENSION_AUTHORITY =
  $.ANCHOR_ERROR__CONSTRAINT_MINT_CLOSE_AUTHORITY_EXTENSION =
  $.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION_METADATA_ADDRESS =
  $.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION_AUTHORITY =
  $.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION =
  $.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION_MEMBER_ADDRESS =
  $.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION_AUTHORITY =
  $.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION =
  $.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION_GROUP_ADDRESS =
  $.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION_AUTHORITY =
  $.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION =
  $.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED_TOKEN_TOKEN_PROGRAM =
  $.ANCHOR_ERROR__CONSTRAINT_MINT_TOKEN_PROGRAM =
  $.ANCHOR_ERROR__CONSTRAINT_TOKEN_TOKEN_PROGRAM =
  $.ANCHOR_ERROR__CONSTRAINT_ACCOUNT_IS_NONE =
  $.ANCHOR_ERROR__CONSTRAINT_SPACE =
  $.ANCHOR_ERROR__CONSTRAINT_MINT_DECIMALS =
  $.ANCHOR_ERROR__CONSTRAINT_MINT_FREEZE_AUTHORITY =
  $.ANCHOR_ERROR__CONSTRAINT_MINT_MINT_AUTHORITY =
  $.ANCHOR_ERROR__CONSTRAINT_TOKEN_OWNER =
  $.ANCHOR_ERROR__CONSTRAINT_TOKEN_MINT =
  $.ANCHOR_ERROR__CONSTRAINT_ZERO =
  $.ANCHOR_ERROR__CONSTRAINT_ADDRESS =
  $.ANCHOR_ERROR__CONSTRAINT_CLOSE =
  $.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED_INIT =
  $.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED =
  $.ANCHOR_ERROR__CONSTRAINT_STATE =
  $.ANCHOR_ERROR__CONSTRAINT_EXECUTABLE =
  $.ANCHOR_ERROR__CONSTRAINT_SEEDS =
  $.ANCHOR_ERROR__CONSTRAINT_RENT_EXEMPT =
  $.ANCHOR_ERROR__CONSTRAINT_OWNER =
  $.ANCHOR_ERROR__CONSTRAINT_RAW =
  $.ANCHOR_ERROR__CONSTRAINT_SIGNER =
  $.ANCHOR_ERROR__CONSTRAINT_HAS_ONE =
  $.ANCHOR_ERROR__CONSTRAINT_MUT =
  $.ANCHOR_ERROR__EVENT_INSTRUCTION_STUB =
  $.ANCHOR_ERROR__IDL_ACCOUNT_NOT_EMPTY =
  $.ANCHOR_ERROR__IDL_INSTRUCTION_INVALID_PROGRAM =
  $.ANCHOR_ERROR__IDL_INSTRUCTION_STUB =
  $.ANCHOR_ERROR__INSTRUCTION_DID_NOT_SERIALIZE =
  $.ANCHOR_ERROR__INSTRUCTION_DID_NOT_DESERIALIZE =
  $.ANCHOR_ERROR__INSTRUCTION_FALLBACK_NOT_FOUND =
  $.ANCHOR_ERROR__INSTRUCTION_MISSING =
    void 0;
$.ANCHOR_ERROR__DEPRECATED =
  $.ANCHOR_ERROR__INVALID_NUMERIC_CONVERSION =
  $.ANCHOR_ERROR__TRYING_TO_INIT_PAYER_AS_PROGRAM_ACCOUNT =
  $.ANCHOR_ERROR__DECLARED_PROGRAM_ID_MISMATCH =
  $.ANCHOR_ERROR__ACCOUNT_DUPLICATE_REALLOCS =
  $.ANCHOR_ERROR__ACCOUNT_REALLOC_EXCEEDS_LIMIT =
  $.ANCHOR_ERROR__ACCOUNT_SYSVAR_MISMATCH =
  $.ANCHOR_ERROR__ACCOUNT_NOT_ASSOCIATED_TOKEN_ACCOUNT =
  $.ANCHOR_ERROR__ACCOUNT_NOT_PROGRAM_DATA =
  $.ANCHOR_ERROR__ACCOUNT_NOT_INITIALIZED =
  $.ANCHOR_ERROR__ACCOUNT_NOT_SYSTEM_OWNED =
  $.ANCHOR_ERROR__ACCOUNT_NOT_SIGNER =
  $.ANCHOR_ERROR__INVALID_PROGRAM_EXECUTABLE =
  $.ANCHOR_ERROR__INVALID_PROGRAM_ID =
  $.ANCHOR_ERROR__ACCOUNT_OWNED_BY_WRONG_PROGRAM =
  $.ANCHOR_ERROR__ACCOUNT_NOT_MUTABLE =
  $.ANCHOR_ERROR__ACCOUNT_NOT_ENOUGH_KEYS =
  $.ANCHOR_ERROR__ACCOUNT_DID_NOT_SERIALIZE =
  $.ANCHOR_ERROR__ACCOUNT_DID_NOT_DESERIALIZE =
  $.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_MISMATCH =
  $.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_NOT_FOUND =
  $.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_ALREADY_SET =
  $.ANCHOR_ERROR__REQUIRE_GTE_VIOLATED =
  $.ANCHOR_ERROR__REQUIRE_GT_VIOLATED =
  $.ANCHOR_ERROR__REQUIRE_KEYS_NEQ_VIOLATED =
  $.ANCHOR_ERROR__REQUIRE_NEQ_VIOLATED =
  $.ANCHOR_ERROR__REQUIRE_KEYS_EQ_VIOLATED =
    void 0;
$.ANCHOR_ERROR__INSTRUCTION_MISSING = 100;
$.ANCHOR_ERROR__INSTRUCTION_FALLBACK_NOT_FOUND = 101;
$.ANCHOR_ERROR__INSTRUCTION_DID_NOT_DESERIALIZE = 102;
$.ANCHOR_ERROR__INSTRUCTION_DID_NOT_SERIALIZE = 103;
$.ANCHOR_ERROR__IDL_INSTRUCTION_STUB = 1e3;
$.ANCHOR_ERROR__IDL_INSTRUCTION_INVALID_PROGRAM = 1001;
$.ANCHOR_ERROR__IDL_ACCOUNT_NOT_EMPTY = 1002;
$.ANCHOR_ERROR__EVENT_INSTRUCTION_STUB = 1500;
$.ANCHOR_ERROR__CONSTRAINT_MUT = 2e3;
$.ANCHOR_ERROR__CONSTRAINT_HAS_ONE = 2001;
$.ANCHOR_ERROR__CONSTRAINT_SIGNER = 2002;
$.ANCHOR_ERROR__CONSTRAINT_RAW = 2003;
$.ANCHOR_ERROR__CONSTRAINT_OWNER = 2004;
$.ANCHOR_ERROR__CONSTRAINT_RENT_EXEMPT = 2005;
$.ANCHOR_ERROR__CONSTRAINT_SEEDS = 2006;
$.ANCHOR_ERROR__CONSTRAINT_EXECUTABLE = 2007;
$.ANCHOR_ERROR__CONSTRAINT_STATE = 2008;
$.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED = 2009;
$.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED_INIT = 2010;
$.ANCHOR_ERROR__CONSTRAINT_CLOSE = 2011;
$.ANCHOR_ERROR__CONSTRAINT_ADDRESS = 2012;
$.ANCHOR_ERROR__CONSTRAINT_ZERO = 2013;
$.ANCHOR_ERROR__CONSTRAINT_TOKEN_MINT = 2014;
$.ANCHOR_ERROR__CONSTRAINT_TOKEN_OWNER = 2015;
$.ANCHOR_ERROR__CONSTRAINT_MINT_MINT_AUTHORITY = 2016;
$.ANCHOR_ERROR__CONSTRAINT_MINT_FREEZE_AUTHORITY = 2017;
$.ANCHOR_ERROR__CONSTRAINT_MINT_DECIMALS = 2018;
$.ANCHOR_ERROR__CONSTRAINT_SPACE = 2019;
$.ANCHOR_ERROR__CONSTRAINT_ACCOUNT_IS_NONE = 2020;
$.ANCHOR_ERROR__CONSTRAINT_TOKEN_TOKEN_PROGRAM = 2021;
$.ANCHOR_ERROR__CONSTRAINT_MINT_TOKEN_PROGRAM = 2022;
$.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED_TOKEN_TOKEN_PROGRAM = 2023;
$.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION = 2024;
$.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION_AUTHORITY = 2025;
$.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION_GROUP_ADDRESS = 2026;
$.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION = 2027;
$.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION_AUTHORITY = 2028;
$.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION_MEMBER_ADDRESS = 2029;
$.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION = 2030;
$.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION_AUTHORITY = 2031;
$.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION_METADATA_ADDRESS = 2032;
$.ANCHOR_ERROR__CONSTRAINT_MINT_CLOSE_AUTHORITY_EXTENSION = 2033;
$.ANCHOR_ERROR__CONSTRAINT_MINT_CLOSE_AUTHORITY_EXTENSION_AUTHORITY = 2034;
$.ANCHOR_ERROR__CONSTRAINT_MINT_PERMANENT_DELEGATE_EXTENSION = 2035;
$.ANCHOR_ERROR__CONSTRAINT_MINT_PERMANENT_DELEGATE_EXTENSION_DELEGATE = 2036;
$.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION = 2037;
$.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION_AUTHORITY = 2038;
$.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION_PROGRAM_ID = 2039;
$.ANCHOR_ERROR__REQUIRE_VIOLATED = 2500;
$.ANCHOR_ERROR__REQUIRE_EQ_VIOLATED = 2501;
$.ANCHOR_ERROR__REQUIRE_KEYS_EQ_VIOLATED = 2502;
$.ANCHOR_ERROR__REQUIRE_NEQ_VIOLATED = 2503;
$.ANCHOR_ERROR__REQUIRE_KEYS_NEQ_VIOLATED = 2504;
$.ANCHOR_ERROR__REQUIRE_GT_VIOLATED = 2505;
$.ANCHOR_ERROR__REQUIRE_GTE_VIOLATED = 2506;
$.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_ALREADY_SET = 3e3;
$.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_NOT_FOUND = 3001;
$.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_MISMATCH = 3002;
$.ANCHOR_ERROR__ACCOUNT_DID_NOT_DESERIALIZE = 3003;
$.ANCHOR_ERROR__ACCOUNT_DID_NOT_SERIALIZE = 3004;
$.ANCHOR_ERROR__ACCOUNT_NOT_ENOUGH_KEYS = 3005;
$.ANCHOR_ERROR__ACCOUNT_NOT_MUTABLE = 3006;
$.ANCHOR_ERROR__ACCOUNT_OWNED_BY_WRONG_PROGRAM = 3007;
$.ANCHOR_ERROR__INVALID_PROGRAM_ID = 3008;
$.ANCHOR_ERROR__INVALID_PROGRAM_EXECUTABLE = 3009;
$.ANCHOR_ERROR__ACCOUNT_NOT_SIGNER = 3010;
$.ANCHOR_ERROR__ACCOUNT_NOT_SYSTEM_OWNED = 3011;
$.ANCHOR_ERROR__ACCOUNT_NOT_INITIALIZED = 3012;
$.ANCHOR_ERROR__ACCOUNT_NOT_PROGRAM_DATA = 3013;
$.ANCHOR_ERROR__ACCOUNT_NOT_ASSOCIATED_TOKEN_ACCOUNT = 3014;
$.ANCHOR_ERROR__ACCOUNT_SYSVAR_MISMATCH = 3015;
$.ANCHOR_ERROR__ACCOUNT_REALLOC_EXCEEDS_LIMIT = 3016;
$.ANCHOR_ERROR__ACCOUNT_DUPLICATE_REALLOCS = 3017;
$.ANCHOR_ERROR__DECLARED_PROGRAM_ID_MISMATCH = 4100;
$.ANCHOR_ERROR__TRYING_TO_INIT_PAYER_AS_PROGRAM_ACCOUNT = 4101;
$.ANCHOR_ERROR__INVALID_NUMERIC_CONVERSION = 4102;
$.ANCHOR_ERROR__DEPRECATED = 5e3;
var tn = {};
Object.defineProperty(tn, '__esModule', { value: !0 });
tn.isSet = tn.set = void 0;
const $g = new Set(['debug-logs']),
  Vf = new Map();
function jg(t) {
  if (!$g.has(t)) throw new Error('Invalid feature');
  Vf.set(t, !0);
}
tn.set = jg;
function Hg(t) {
  return Vf.get(t) !== void 0;
}
tn.isSet = Hg;
(function (t) {
  var e =
      (T && T.__createBinding) ||
      (Object.create
        ? function (m, h, A, R) {
            R === void 0 && (R = A);
            var b = Object.getOwnPropertyDescriptor(h, A);
            (!b || ('get' in b ? !h.__esModule : b.writable || b.configurable)) &&
              (b = {
                enumerable: !0,
                get: function () {
                  return h[A];
                },
              }),
              Object.defineProperty(m, R, b);
          }
        : function (m, h, A, R) {
            R === void 0 && (R = A), (m[R] = h[A]);
          }),
    n =
      (T && T.__setModuleDefault) ||
      (Object.create
        ? function (m, h) {
            Object.defineProperty(m, 'default', { enumerable: !0, value: h });
          }
        : function (m, h) {
            m.default = h;
          }),
    r =
      (T && T.__importStar) ||
      function (m) {
        if (m && m.__esModule) return m;
        var h = {};
        if (m != null)
          for (var A in m)
            A !== 'default' && Object.prototype.hasOwnProperty.call(m, A) && e(h, m, A);
        return n(h, m), h;
      };
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.LangErrorMessage =
      t.LangErrorCode =
      t.translateError =
      t.ProgramError =
      t.AnchorError =
      t.ProgramErrorStack =
      t.IdlError =
        void 0);
  const o = me,
    i = r($),
    u = r(tn);
  class d extends Error {
    constructor(h) {
      super(h), (this.name = 'IdlError');
    }
  }
  t.IdlError = d;
  class f {
    constructor(h) {
      this.stack = h;
    }
    static parse(h) {
      var A;
      const R = /^Program (\w*) invoke/,
        b = /^Program \w* success/,
        N = [];
      for (let v = 0; v < h.length; v++) {
        if (b.exec(h[v])) {
          N.pop();
          continue;
        }
        const w = (A = R.exec(h[v])) === null || A === void 0 ? void 0 : A[1];
        w && N.push(new o.PublicKey(w));
      }
      return new f(N);
    }
  }
  t.ProgramErrorStack = f;
  class s extends Error {
    constructor(h, A, R, b, N, v) {
      super(R.join('\n').replace('Program log: ', '')),
        (this.errorLogs = R),
        (this.logs = b),
        (this.error = { errorCode: h, errorMessage: A, comparedValues: v, origin: N }),
        (this._programErrorStack = f.parse(b));
    }
    static parse(h) {
      if (!h) return null;
      const A = h.findIndex((z) => z.startsWith('Program log: AnchorError'));
      if (A === -1) return null;
      const R = h[A],
        b = [R];
      let N;
      if (A + 1 < h.length) {
        if (h[A + 1] === 'Program log: Left:') {
          const z = /^Program log: (.*)$/,
            I = z.exec(h[A + 2])[1],
            y = z.exec(h[A + 4])[1];
          (N = [new o.PublicKey(I), new o.PublicKey(y)]), b.push(...h.slice(A + 1, A + 5));
        } else if (h[A + 1].startsWith('Program log: Left:')) {
          const z = /^Program log: (Left|Right): (.*)$/,
            I = z.exec(h[A + 1])[2],
            y = z.exec(h[A + 2])[2];
          b.push(...h.slice(A + 1, A + 3)), (N = [I, y]);
        }
      }
      const w =
          /^Program log: AnchorError occurred\. Error Code: (.*)\. Error Number: (\d*)\. Error Message: (.*)\./.exec(
            R
          ),
        G =
          /^Program log: AnchorError thrown in (.*):(\d*)\. Error Code: (.*)\. Error Number: (\d*)\. Error Message: (.*)\./.exec(
            R
          ),
        Q =
          /^Program log: AnchorError caused by account: (.*)\. Error Code: (.*)\. Error Number: (\d*)\. Error Message: (.*)\./.exec(
            R
          );
      if (w) {
        const [z, I, y] = w.slice(1, 4),
          P = { code: z, number: parseInt(I) };
        return new s(P, y, b, h, void 0, N);
      } else if (G) {
        const [z, I, y, P, k] = G.slice(1, 6),
          V = { code: y, number: parseInt(P) },
          C = { file: z, line: parseInt(I) };
        return new s(V, k, b, h, C, N);
      } else if (Q) {
        const [z, I, y, P] = Q.slice(1, 5),
          k = z,
          V = { code: I, number: parseInt(y) };
        return new s(V, P, b, h, k, N);
      } else return null;
    }
    get program() {
      return this._programErrorStack.stack[this._programErrorStack.stack.length - 1];
    }
    get programErrorStack() {
      return this._programErrorStack.stack;
    }
    toString() {
      return this.message;
    }
  }
  t.AnchorError = s;
  class _ extends Error {
    constructor(h, A, R) {
      super(),
        (this.code = h),
        (this.msg = A),
        (this.logs = R),
        R && (this._programErrorStack = f.parse(R));
    }
    static parse(h, A) {
      const R = h.toString();
      let b;
      if (R.includes('custom program error:')) {
        let w = R.split('custom program error: ');
        if (w.length !== 2) return null;
        b = w[1];
      } else {
        const w = R.match(/"Custom":([0-9]+)}/g);
        if (!w || w.length > 1) return null;
        b = w[0].match(/([0-9]+)/g)[0];
      }
      let N;
      try {
        N = parseInt(b);
      } catch (w) {
        return null;
      }
      let v = A.get(N);
      return v !== void 0
        ? new _(N, v, h.logs)
        : ((v = t.LangErrorMessage.get(N)), v !== void 0 ? new _(N, v, h.logs) : null);
    }
    get program() {
      var h;
      return (h = this._programErrorStack) === null || h === void 0
        ? void 0
        : h.stack[this._programErrorStack.stack.length - 1];
    }
    get programErrorStack() {
      var h;
      return (h = this._programErrorStack) === null || h === void 0 ? void 0 : h.stack;
    }
    toString() {
      return this.msg;
    }
  }
  t.ProgramError = _;
  function g(m, h) {
    u.isSet('debug-logs') && console.log('Translating error:', m);
    const A = s.parse(m.logs);
    if (A) return A;
    const R = _.parse(m, h);
    if (R) return R;
    if (m.logs) {
      const b = {
        get: function (N, v) {
          return v === 'programErrorStack'
            ? N.programErrorStack.stack
            : v === 'program'
              ? N.programErrorStack.stack[m.programErrorStack.stack.length - 1]
              : Reflect.get(...arguments);
        },
      };
      return (m.programErrorStack = f.parse(m.logs)), new Proxy(m, b);
    }
    return m;
  }
  (t.translateError = g),
    (t.LangErrorCode = {
      InstructionMissing: i.ANCHOR_ERROR__INSTRUCTION_MISSING,
      InstructionFallbackNotFound: i.ANCHOR_ERROR__INSTRUCTION_FALLBACK_NOT_FOUND,
      InstructionDidNotDeserialize: i.ANCHOR_ERROR__INSTRUCTION_DID_NOT_DESERIALIZE,
      InstructionDidNotSerialize: i.ANCHOR_ERROR__INSTRUCTION_DID_NOT_SERIALIZE,
      IdlInstructionStub: i.ANCHOR_ERROR__IDL_INSTRUCTION_STUB,
      IdlInstructionInvalidProgram: i.ANCHOR_ERROR__IDL_INSTRUCTION_INVALID_PROGRAM,
      IdlAccountNotEmpty: i.ANCHOR_ERROR__IDL_ACCOUNT_NOT_EMPTY,
      EventInstructionStub: i.ANCHOR_ERROR__EVENT_INSTRUCTION_STUB,
      ConstraintMut: i.ANCHOR_ERROR__CONSTRAINT_MUT,
      ConstraintHasOne: i.ANCHOR_ERROR__CONSTRAINT_HAS_ONE,
      ConstraintSigner: i.ANCHOR_ERROR__CONSTRAINT_SIGNER,
      ConstraintRaw: i.ANCHOR_ERROR__CONSTRAINT_RAW,
      ConstraintOwner: i.ANCHOR_ERROR__CONSTRAINT_OWNER,
      ConstraintRentExempt: i.ANCHOR_ERROR__CONSTRAINT_RENT_EXEMPT,
      ConstraintSeeds: i.ANCHOR_ERROR__CONSTRAINT_SEEDS,
      ConstraintExecutable: i.ANCHOR_ERROR__CONSTRAINT_EXECUTABLE,
      ConstraintState: i.ANCHOR_ERROR__CONSTRAINT_STATE,
      ConstraintAssociated: i.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED,
      ConstraintAssociatedInit: i.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED_INIT,
      ConstraintClose: i.ANCHOR_ERROR__CONSTRAINT_CLOSE,
      ConstraintAddress: i.ANCHOR_ERROR__CONSTRAINT_ADDRESS,
      ConstraintZero: i.ANCHOR_ERROR__CONSTRAINT_ZERO,
      ConstraintTokenMint: i.ANCHOR_ERROR__CONSTRAINT_TOKEN_MINT,
      ConstraintTokenOwner: i.ANCHOR_ERROR__CONSTRAINT_TOKEN_OWNER,
      ConstraintMintMintAuthority: i.ANCHOR_ERROR__CONSTRAINT_MINT_MINT_AUTHORITY,
      ConstraintMintFreezeAuthority: i.ANCHOR_ERROR__CONSTRAINT_MINT_FREEZE_AUTHORITY,
      ConstraintMintDecimals: i.ANCHOR_ERROR__CONSTRAINT_MINT_DECIMALS,
      ConstraintSpace: i.ANCHOR_ERROR__CONSTRAINT_SPACE,
      ConstraintAccountIsNone: i.ANCHOR_ERROR__CONSTRAINT_ACCOUNT_IS_NONE,
      ConstraintTokenTokenProgram: i.ANCHOR_ERROR__CONSTRAINT_TOKEN_TOKEN_PROGRAM,
      ConstraintMintTokenProgram: i.ANCHOR_ERROR__CONSTRAINT_MINT_TOKEN_PROGRAM,
      ConstraintAssociatedTokenTokenProgram:
        i.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED_TOKEN_TOKEN_PROGRAM,
      ConstraintMintGroupPointerExtension: i.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION,
      ConstraintMintGroupPointerExtensionAuthority:
        i.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION_AUTHORITY,
      ConstraintMintGroupPointerExtensionGroupAddress:
        i.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION_GROUP_ADDRESS,
      ConstraintMintGroupMemberPointerExtension:
        i.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION,
      ConstraintMintGroupMemberPointerExtensionAuthority:
        i.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION_AUTHORITY,
      ConstraintMintGroupMemberPointerExtensionMemberAddress:
        i.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION_MEMBER_ADDRESS,
      ConstraintMintMetadataPointerExtension:
        i.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION,
      ConstraintMintMetadataPointerExtensionAuthority:
        i.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION_AUTHORITY,
      ConstraintMintMetadataPointerExtensionMetadataAddress:
        i.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION_METADATA_ADDRESS,
      ConstraintMintCloseAuthorityExtension:
        i.ANCHOR_ERROR__CONSTRAINT_MINT_CLOSE_AUTHORITY_EXTENSION,
      ConstraintMintCloseAuthorityExtensionAuthority:
        i.ANCHOR_ERROR__CONSTRAINT_MINT_CLOSE_AUTHORITY_EXTENSION_AUTHORITY,
      ConstraintMintPermanentDelegateExtension:
        i.ANCHOR_ERROR__CONSTRAINT_MINT_PERMANENT_DELEGATE_EXTENSION,
      ConstraintMintPermanentDelegateExtensionDelegate:
        i.ANCHOR_ERROR__CONSTRAINT_MINT_PERMANENT_DELEGATE_EXTENSION_DELEGATE,
      ConstraintMintTransferHookExtension: i.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION,
      ConstraintMintTransferHookExtensionAuthority:
        i.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION_AUTHORITY,
      ConstraintMintTransferHookExtensionProgramId:
        i.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION_PROGRAM_ID,
      RequireViolated: i.ANCHOR_ERROR__REQUIRE_VIOLATED,
      RequireEqViolated: i.ANCHOR_ERROR__REQUIRE_EQ_VIOLATED,
      RequireKeysEqViolated: i.ANCHOR_ERROR__REQUIRE_KEYS_EQ_VIOLATED,
      RequireNeqViolated: i.ANCHOR_ERROR__REQUIRE_NEQ_VIOLATED,
      RequireKeysNeqViolated: i.ANCHOR_ERROR__REQUIRE_KEYS_NEQ_VIOLATED,
      RequireGtViolated: i.ANCHOR_ERROR__REQUIRE_GT_VIOLATED,
      RequireGteViolated: i.ANCHOR_ERROR__REQUIRE_GTE_VIOLATED,
      AccountDiscriminatorAlreadySet: i.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_ALREADY_SET,
      AccountDiscriminatorNotFound: i.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_NOT_FOUND,
      AccountDiscriminatorMismatch: i.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_MISMATCH,
      AccountDidNotDeserialize: i.ANCHOR_ERROR__ACCOUNT_DID_NOT_DESERIALIZE,
      AccountDidNotSerialize: i.ANCHOR_ERROR__ACCOUNT_DID_NOT_SERIALIZE,
      AccountNotEnoughKeys: i.ANCHOR_ERROR__ACCOUNT_NOT_ENOUGH_KEYS,
      AccountNotMutable: i.ANCHOR_ERROR__ACCOUNT_NOT_MUTABLE,
      AccountOwnedByWrongProgram: i.ANCHOR_ERROR__ACCOUNT_OWNED_BY_WRONG_PROGRAM,
      InvalidProgramId: i.ANCHOR_ERROR__INVALID_PROGRAM_ID,
      InvalidProgramExecutable: i.ANCHOR_ERROR__INVALID_PROGRAM_EXECUTABLE,
      AccountNotSigner: i.ANCHOR_ERROR__ACCOUNT_NOT_SIGNER,
      AccountNotSystemOwned: i.ANCHOR_ERROR__ACCOUNT_NOT_SYSTEM_OWNED,
      AccountNotInitialized: i.ANCHOR_ERROR__ACCOUNT_NOT_INITIALIZED,
      AccountNotProgramData: i.ANCHOR_ERROR__ACCOUNT_NOT_PROGRAM_DATA,
      AccountNotAssociatedTokenAccount: i.ANCHOR_ERROR__ACCOUNT_NOT_ASSOCIATED_TOKEN_ACCOUNT,
      AccountSysvarMismatch: i.ANCHOR_ERROR__ACCOUNT_SYSVAR_MISMATCH,
      AccountReallocExceedsLimit: i.ANCHOR_ERROR__ACCOUNT_REALLOC_EXCEEDS_LIMIT,
      AccountDuplicateReallocs: i.ANCHOR_ERROR__ACCOUNT_DUPLICATE_REALLOCS,
      DeclaredProgramIdMismatch: i.ANCHOR_ERROR__DECLARED_PROGRAM_ID_MISMATCH,
      TryingToInitPayerAsProgramAccount: i.ANCHOR_ERROR__TRYING_TO_INIT_PAYER_AS_PROGRAM_ACCOUNT,
      InvalidNumericConversion: i.ANCHOR_ERROR__INVALID_NUMERIC_CONVERSION,
      Deprecated: i.ANCHOR_ERROR__DEPRECATED,
    }),
    (t.LangErrorMessage = new Map([
      [t.LangErrorCode.InstructionMissing, '8 byte instruction identifier not provided'],
      [t.LangErrorCode.InstructionFallbackNotFound, 'Fallback functions are not supported'],
      [
        t.LangErrorCode.InstructionDidNotDeserialize,
        'The program could not deserialize the given instruction',
      ],
      [
        t.LangErrorCode.InstructionDidNotSerialize,
        'The program could not serialize the given instruction',
      ],
      [t.LangErrorCode.IdlInstructionStub, 'The program was compiled without idl instructions'],
      [
        t.LangErrorCode.IdlInstructionInvalidProgram,
        'The transaction was given an invalid program for the IDL instruction',
      ],
      [
        t.LangErrorCode.IdlAccountNotEmpty,
        'IDL account must be empty in order to resize, try closing first',
      ],
      [
        t.LangErrorCode.EventInstructionStub,
        'The program was compiled without `event-cpi` feature',
      ],
      [t.LangErrorCode.ConstraintMut, 'A mut constraint was violated'],
      [t.LangErrorCode.ConstraintHasOne, 'A has one constraint was violated'],
      [t.LangErrorCode.ConstraintSigner, 'A signer constraint was violated'],
      [t.LangErrorCode.ConstraintRaw, 'A raw constraint was violated'],
      [t.LangErrorCode.ConstraintOwner, 'An owner constraint was violated'],
      [t.LangErrorCode.ConstraintRentExempt, 'A rent exemption constraint was violated'],
      [t.LangErrorCode.ConstraintSeeds, 'A seeds constraint was violated'],
      [t.LangErrorCode.ConstraintExecutable, 'An executable constraint was violated'],
      [
        t.LangErrorCode.ConstraintState,
        'Deprecated Error, feel free to replace with something else',
      ],
      [t.LangErrorCode.ConstraintAssociated, 'An associated constraint was violated'],
      [t.LangErrorCode.ConstraintAssociatedInit, 'An associated init constraint was violated'],
      [t.LangErrorCode.ConstraintClose, 'A close constraint was violated'],
      [t.LangErrorCode.ConstraintAddress, 'An address constraint was violated'],
      [t.LangErrorCode.ConstraintZero, 'Expected zero account discriminant'],
      [t.LangErrorCode.ConstraintTokenMint, 'A token mint constraint was violated'],
      [t.LangErrorCode.ConstraintTokenOwner, 'A token owner constraint was violated'],
      [
        t.LangErrorCode.ConstraintMintMintAuthority,
        'A mint mint authority constraint was violated',
      ],
      [
        t.LangErrorCode.ConstraintMintFreezeAuthority,
        'A mint freeze authority constraint was violated',
      ],
      [t.LangErrorCode.ConstraintMintDecimals, 'A mint decimals constraint was violated'],
      [t.LangErrorCode.ConstraintSpace, 'A space constraint was violated'],
      [t.LangErrorCode.ConstraintAccountIsNone, 'A required account for the constraint is None'],
      [
        t.LangErrorCode.ConstraintTokenTokenProgram,
        'A token account token program constraint was violated',
      ],
      [t.LangErrorCode.ConstraintMintTokenProgram, 'A mint token program constraint was violated'],
      [
        t.LangErrorCode.ConstraintAssociatedTokenTokenProgram,
        'An associated token account token program constraint was violated',
      ],
      [
        t.LangErrorCode.ConstraintMintGroupPointerExtension,
        'A group pointer extension constraint was violated',
      ],
      [
        t.LangErrorCode.ConstraintMintGroupPointerExtensionAuthority,
        'A group pointer extension authority constraint was violated',
      ],
      [
        t.LangErrorCode.ConstraintMintGroupPointerExtensionGroupAddress,
        'A group pointer extension group address constraint was violated',
      ],
      [
        t.LangErrorCode.ConstraintMintGroupMemberPointerExtension,
        'A group member pointer extension constraint was violated',
      ],
      [
        t.LangErrorCode.ConstraintMintGroupMemberPointerExtensionAuthority,
        'A group member pointer extension authority constraint was violated',
      ],
      [
        t.LangErrorCode.ConstraintMintGroupMemberPointerExtensionMemberAddress,
        'A group member pointer extension group address constraint was violated',
      ],
      [
        t.LangErrorCode.ConstraintMintMetadataPointerExtension,
        'A metadata pointer extension constraint was violated',
      ],
      [
        t.LangErrorCode.ConstraintMintMetadataPointerExtensionAuthority,
        'A metadata pointer extension authority constraint was violated',
      ],
      [
        t.LangErrorCode.ConstraintMintMetadataPointerExtensionMetadataAddress,
        'A metadata pointer extension metadata address constraint was violated',
      ],
      [
        t.LangErrorCode.ConstraintMintCloseAuthorityExtension,
        'A close authority constraint was violated',
      ],
      [
        t.LangErrorCode.ConstraintMintCloseAuthorityExtensionAuthority,
        'A close authority extension authority constraint was violated',
      ],
      [
        t.LangErrorCode.ConstraintMintPermanentDelegateExtension,
        'A permanent delegate extension constraint was violated',
      ],
      [
        t.LangErrorCode.ConstraintMintPermanentDelegateExtensionDelegate,
        'A permanent delegate extension delegate constraint was violated',
      ],
      [
        t.LangErrorCode.ConstraintMintTransferHookExtension,
        'A transfer hook extension constraint was violated',
      ],
      [
        t.LangErrorCode.ConstraintMintTransferHookExtensionAuthority,
        'A transfer hook extension authority constraint was violated',
      ],
      [
        t.LangErrorCode.ConstraintMintTransferHookExtensionProgramId,
        'A transfer hook extension transfer hook program id constraint was violated',
      ],
      [t.LangErrorCode.RequireViolated, 'A require expression was violated'],
      [t.LangErrorCode.RequireEqViolated, 'A require_eq expression was violated'],
      [t.LangErrorCode.RequireKeysEqViolated, 'A require_keys_eq expression was violated'],
      [t.LangErrorCode.RequireNeqViolated, 'A require_neq expression was violated'],
      [t.LangErrorCode.RequireKeysNeqViolated, 'A require_keys_neq expression was violated'],
      [t.LangErrorCode.RequireGtViolated, 'A require_gt expression was violated'],
      [t.LangErrorCode.RequireGteViolated, 'A require_gte expression was violated'],
      [
        t.LangErrorCode.AccountDiscriminatorAlreadySet,
        'The account discriminator was already set on this account',
      ],
      [
        t.LangErrorCode.AccountDiscriminatorNotFound,
        'No 8 byte discriminator was found on the account',
      ],
      [
        t.LangErrorCode.AccountDiscriminatorMismatch,
        '8 byte discriminator did not match what was expected',
      ],
      [t.LangErrorCode.AccountDidNotDeserialize, 'Failed to deserialize the account'],
      [t.LangErrorCode.AccountDidNotSerialize, 'Failed to serialize the account'],
      [t.LangErrorCode.AccountNotEnoughKeys, 'Not enough account keys given to the instruction'],
      [t.LangErrorCode.AccountNotMutable, 'The given account is not mutable'],
      [
        t.LangErrorCode.AccountOwnedByWrongProgram,
        'The given account is owned by a different program than expected',
      ],
      [t.LangErrorCode.InvalidProgramId, 'Program ID was not as expected'],
      [t.LangErrorCode.InvalidProgramExecutable, 'Program account is not executable'],
      [t.LangErrorCode.AccountNotSigner, 'The given account did not sign'],
      [
        t.LangErrorCode.AccountNotSystemOwned,
        'The given account is not owned by the system program',
      ],
      [
        t.LangErrorCode.AccountNotInitialized,
        'The program expected this account to be already initialized',
      ],
      [t.LangErrorCode.AccountNotProgramData, 'The given account is not a program data account'],
      [
        t.LangErrorCode.AccountNotAssociatedTokenAccount,
        'The given account is not the associated token account',
      ],
      [
        t.LangErrorCode.AccountSysvarMismatch,
        'The given public key does not match the required sysvar',
      ],
      [
        t.LangErrorCode.AccountReallocExceedsLimit,
        'The account reallocation exceeds the MAX_PERMITTED_DATA_INCREASE limit',
      ],
      [
        t.LangErrorCode.AccountDuplicateReallocs,
        'The account was duplicated for more than one reallocation',
      ],
      [
        t.LangErrorCode.DeclaredProgramIdMismatch,
        'The declared program id does not match the actual program id',
      ],
      [
        t.LangErrorCode.TryingToInitPayerAsProgramAccount,
        'You cannot/should not initialize the payer account as a program account',
      ],
      [
        t.LangErrorCode.InvalidNumericConversion,
        'The program could not perform the numeric conversion, out of range integral type conversion attempted',
      ],
      [t.LangErrorCode.Deprecated, 'The API being used is deprecated and should no longer be used'],
    ]));
})(Jn);
var xo = {},
  Lo = {},
  ur = {},
  $t = {},
  Gg =
    (T && T.__createBinding) ||
    (Object.create
      ? function (t, e, n, r) {
          r === void 0 && (r = n);
          var o = Object.getOwnPropertyDescriptor(e, n);
          (!o || ('get' in o ? !e.__esModule : o.writable || o.configurable)) &&
            (o = {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            }),
            Object.defineProperty(t, r, o);
        }
      : function (t, e, n, r) {
          r === void 0 && (r = n), (t[r] = e[n]);
        }),
  Fg =
    (T && T.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  Kg =
    (T && T.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null)
        for (var n in t)
          n !== 'default' && Object.prototype.hasOwnProperty.call(t, n) && Gg(e, t, n);
      return Fg(e, t), e;
    };
Object.defineProperty($t, '__esModule', { value: !0 });
$t.IdlCoder = void 0;
const Se = Kg(Ae),
  gi = Le,
  _n = Jn;
class Ne {
  static fieldLayout(e, n = [], r) {
    const o = e.name;
    switch (e.type) {
      case 'bool':
        return Se.bool(o);
      case 'u8':
        return Se.u8(o);
      case 'i8':
        return Se.i8(o);
      case 'u16':
        return Se.u16(o);
      case 'i16':
        return Se.i16(o);
      case 'u32':
        return Se.u32(o);
      case 'i32':
        return Se.i32(o);
      case 'f32':
        return Se.f32(o);
      case 'u64':
        return Se.u64(o);
      case 'i64':
        return Se.i64(o);
      case 'f64':
        return Se.f64(o);
      case 'u128':
        return Se.u128(o);
      case 'i128':
        return Se.i128(o);
      case 'u256':
        return Se.u256(o);
      case 'i256':
        return Se.i256(o);
      case 'bytes':
        return Se.vecU8(o);
      case 'string':
        return Se.str(o);
      case 'pubkey':
        return Se.publicKey(o);
      default: {
        if ('option' in e.type) return Se.option(Ne.fieldLayout({ type: e.type.option }, n, r), o);
        if ('vec' in e.type) return Se.vec(Ne.fieldLayout({ type: e.type.vec }, n, r), o);
        if ('array' in e.type) {
          let [i, u] = e.type.array;
          return (u = Ne.resolveArrayLen(u, r)), Se.array(Ne.fieldLayout({ type: i }, n, r), u, o);
        }
        if ('defined' in e.type) {
          if (!n) throw new _n.IdlError('User defined types not provided');
          const i = e.type.defined.name,
            u = n.find((d) => d.name === i);
          if (!u) throw new _n.IdlError('Type not found: '.concat(e.name));
          return Ne.typeDefLayout({
            typeDef: u,
            types: n,
            genericArgs: r != null ? r : e.type.defined.generics,
            name: o,
          });
        }
        if ('generic' in e.type) {
          const i = r == null ? void 0 : r.at(0);
          if ((i == null ? void 0 : i.kind) !== 'type')
            throw new _n.IdlError('Invalid generic field: '.concat(e.name));
          return Ne.fieldLayout(ct(xe({}, e), { type: i.type }), n);
        }
        throw new _n.IdlError('Not yet implemented: '.concat(JSON.stringify(e.type)));
      }
    }
  }
  static typeDefLayout({ typeDef: e, types: n, name: r, genericArgs: o }) {
    switch (e.type.kind) {
      case 'struct': {
        const i = (0, gi.handleDefinedFields)(
          e.type.fields,
          () => [],
          (u) =>
            u.map((d) => {
              const f = o && Ne.resolveGenericArgs({ type: d.type, typeDef: e, genericArgs: o });
              return Ne.fieldLayout(d, n, f);
            }),
          (u) =>
            u.map((d, f) => {
              const s = o && Ne.resolveGenericArgs({ type: d, typeDef: e, genericArgs: o });
              return Ne.fieldLayout({ name: f.toString(), type: d }, n, s);
            })
        );
        return Se.struct(i, r);
      }
      case 'enum': {
        const i = e.type.variants.map((u) => {
          const d = (0, gi.handleDefinedFields)(
            u.fields,
            () => [],
            (f) =>
              f.map((s) => {
                const _ = o && Ne.resolveGenericArgs({ type: s.type, typeDef: e, genericArgs: o });
                return Ne.fieldLayout(s, n, _);
              }),
            (f) =>
              f.map((s, _) => {
                const g = o && Ne.resolveGenericArgs({ type: s, typeDef: e, genericArgs: o });
                return Ne.fieldLayout({ name: _.toString(), type: s }, n, g);
              })
          );
          return Se.struct(d, u.name);
        });
        return r !== void 0 ? Se.rustEnum(i).replicate(r) : Se.rustEnum(i, r);
      }
      case 'type':
        return Ne.fieldLayout({ type: e.type.alias, name: r }, n);
    }
  }
  static typeSize(e, n, r) {
    var o;
    switch (e) {
      case 'bool':
        return 1;
      case 'u8':
        return 1;
      case 'i8':
        return 1;
      case 'i16':
        return 2;
      case 'u16':
        return 2;
      case 'u32':
        return 4;
      case 'i32':
        return 4;
      case 'f32':
        return 4;
      case 'u64':
        return 8;
      case 'i64':
        return 8;
      case 'f64':
        return 8;
      case 'u128':
        return 16;
      case 'i128':
        return 16;
      case 'u256':
        return 32;
      case 'i256':
        return 32;
      case 'bytes':
        return 1;
      case 'string':
        return 1;
      case 'pubkey':
        return 32;
      default:
        if ('option' in e) return 1 + Ne.typeSize(e.option, n, r);
        if ('coption' in e) return 4 + Ne.typeSize(e.coption, n, r);
        if ('vec' in e) return 1;
        if ('array' in e) {
          let [i, u] = e.array;
          return (u = Ne.resolveArrayLen(u, r)), Ne.typeSize(i, n, r) * u;
        }
        if ('defined' in e) {
          const i =
            (o = n.types) === null || o === void 0
              ? void 0
              : o.find((d) => d.name === e.defined.name);
          if (!i) throw new _n.IdlError('Type not found: '.concat(JSON.stringify(e)));
          const u = (d) => {
            const f = r != null ? r : e.defined.generics,
              s = f && Ne.resolveGenericArgs({ type: d, typeDef: i, genericArgs: f });
            return Ne.typeSize(d, n, s);
          };
          switch (i.type.kind) {
            case 'struct':
              return (0, gi.handleDefinedFields)(
                i.type.fields,
                () => [0],
                (d) => d.map((f) => u(f.type)),
                (d) => d.map((f) => u(f))
              ).reduce((d, f) => d + f, 0);
            case 'enum': {
              const d = i.type.variants.map((f) =>
                (0, gi.handleDefinedFields)(
                  f.fields,
                  () => [0],
                  (s) => s.map((_) => u(_.type)),
                  (s) => s.map((_) => u(_))
                ).reduce((s, _) => s + _, 0)
              );
              return Math.max(...d) + 1;
            }
            case 'type':
              return Ne.typeSize(i.type.alias, n, r);
          }
        }
        if ('generic' in e) {
          const i = r == null ? void 0 : r.at(0);
          if ((i == null ? void 0 : i.kind) !== 'type')
            throw new _n.IdlError('Invalid generic: '.concat(e.generic));
          return Ne.typeSize(i.type, n, r);
        }
        throw new Error('Invalid type '.concat(JSON.stringify(e)));
    }
  }
  static resolveArrayLen(e, n) {
    if (typeof e == 'number') return e;
    if (n) {
      const r = n.find((o) => o.kind === 'const');
      (r == null ? void 0 : r.kind) === 'const' && (e = +r.value);
    }
    if (typeof e != 'number') throw new _n.IdlError('Generic array length did not resolve');
    return e;
  }
  static resolveGenericArgs({ type: e, typeDef: n, genericArgs: r, isDefined: o }) {
    if (typeof e != 'object') return null;
    for (const i in n.generics) {
      const u = n.generics[i];
      if ('generic' in e && u.name === e.generic) return [r[i]];
      if ('option' in e) {
        const d = Ne.resolveGenericArgs({
          type: e.option,
          typeDef: n,
          genericArgs: r,
          isDefined: o,
        });
        if (!d || !o) return d;
        if (d[0].kind === 'type') return [{ kind: 'type', type: { option: d[0].type } }];
      }
      if ('vec' in e) {
        const d = Ne.resolveGenericArgs({ type: e.vec, typeDef: n, genericArgs: r, isDefined: o });
        if (!d || !o) return d;
        if (d[0].kind === 'type') return [{ kind: 'type', type: { vec: d[0].type } }];
      }
      if ('array' in e) {
        const [d, f] = e.array,
          s = typeof f == 'object',
          _ = Ne.resolveGenericArgs({ type: d, typeDef: n, genericArgs: r, isDefined: o });
        if (_) {
          for (const g in n.generics.slice(+i)) {
            const m = +i + +g;
            s && n.generics[m].name === f.generic && _.push(r[m]);
          }
          if (!o) return _;
          if (_[0].kind === 'type' && _[1].kind === 'const')
            return [{ kind: 'type', type: { array: [_[0].type, +_[1].value] } }];
        }
        if (s && u.name === f.generic) {
          const g = r[i];
          return o ? [{ kind: 'type', type: { array: [d, +g.value] } }] : [g];
        }
        return null;
      }
      if ('defined' in e)
        return e.defined.generics
          ? e.defined.generics
              .flatMap((d) => {
                switch (d.kind) {
                  case 'type':
                    return Ne.resolveGenericArgs({
                      type: d.type,
                      typeDef: n,
                      genericArgs: r,
                      isDefined: !0,
                    });
                  case 'const':
                    return [d];
                }
              })
              .filter((d) => d !== null)
          : null;
    }
    return null;
  }
}
$t.IdlCoder = Ne;
var $c;
function jc() {
  if ($c) return ur;
  $c = 1;
  var t =
      (T && T.__createBinding) ||
      (Object.create
        ? function (h, A, R, b) {
            b === void 0 && (b = R);
            var N = Object.getOwnPropertyDescriptor(A, R);
            (!N || ('get' in N ? !A.__esModule : N.writable || N.configurable)) &&
              (N = {
                enumerable: !0,
                get: function () {
                  return A[R];
                },
              }),
              Object.defineProperty(h, b, N);
          }
        : function (h, A, R, b) {
            b === void 0 && (b = R), (h[b] = A[R]);
          }),
    e =
      (T && T.__setModuleDefault) ||
      (Object.create
        ? function (h, A) {
            Object.defineProperty(h, 'default', { enumerable: !0, value: A });
          }
        : function (h, A) {
            h.default = A;
          }),
    n =
      (T && T.__importStar) ||
      function (h) {
        if (h && h.__esModule) return h;
        var A = {};
        if (h != null)
          for (var R in h)
            R !== 'default' && Object.prototype.hasOwnProperty.call(h, R) && t(A, h, R);
        return e(A, h), A;
      },
    r =
      (T && T.__importDefault) ||
      function (h) {
        return h && h.__esModule ? h : { default: h };
      };
  Object.defineProperty(ur, '__esModule', { value: !0 }), (ur.BorshInstructionCoder = void 0);
  const o = r(Hr),
    i = Pe,
    u = n(Ae),
    d = Le,
    f = $t,
    s = Xi();
  class _ {
    constructor(A) {
      this.idl = A;
      const R = A.instructions.map((N) => {
        const v = N.name,
          w = N.args.map((G) => f.IdlCoder.fieldLayout(G, A.types)),
          x = u.struct(w, v);
        return [v, { discriminator: N.discriminator, layout: x }];
      });
      this.ixLayouts = new Map(R);
      const b = R.map(([N, { discriminator: v, layout: w }]) => [
        o.default.encode(v),
        { name: N, layout: w },
      ]);
      this.sighashLayouts = new Map(b);
    }
    encode(A, R) {
      const b = i.Buffer.alloc(1e3),
        N = this.ixLayouts.get(A);
      if (!N) throw new Error('Unknown method: '.concat(A));
      const v = N.layout.encode(R, b),
        w = b.slice(0, v);
      return i.Buffer.concat([i.Buffer.from(N.discriminator), w]);
    }
    decode(A, R = 'hex') {
      typeof A == 'string' && (A = R === 'hex' ? i.Buffer.from(A, 'hex') : o.default.decode(A));
      const b = A.slice(0, s.DISCRIMINATOR_SIZE),
        N = A.slice(s.DISCRIMINATOR_SIZE),
        v = this.sighashLayouts.get(o.default.encode(b));
      return v ? { name: v.name, data: v.layout.decode(N) } : null;
    }
    format(A, R) {
      return g.format(A, R, this.idl);
    }
  }
  ur.BorshInstructionCoder = _;
  class g {
    static format(A, R, b) {
      const N = b.instructions.find((G) => A.name === G.name);
      if (!N) return console.error('Invalid instruction given'), null;
      const v = N.args.map((G) => ({
          name: G.name,
          type: g.formatIdlType(G.type),
          data: g.formatIdlData(G, A.data[G.name], b.types),
        })),
        w = g.flattenIdlAccounts(N.accounts),
        x = R.map((G, F) => (F < w.length ? xe({ name: w[F].name }, G) : xe({ name: void 0 }, G)));
      return { args: v, accounts: x };
    }
    static formatIdlType(A) {
      if (typeof A == 'string') return A;
      if ('option' in A) return 'Option<'.concat(this.formatIdlType(A.option), '>');
      if ('coption' in A) return 'COption<'.concat(this.formatIdlType(A.coption), '>');
      if ('vec' in A) return 'Vec<'.concat(this.formatIdlType(A.vec), '>');
      if ('array' in A) return 'Array<'.concat(A.array[0], '; ').concat(A.array[1], '>');
      if ('defined' in A) {
        const R = A.defined.name;
        if (A.defined.generics) {
          const b = A.defined.generics
            .map((N) => {
              switch (N.kind) {
                case 'type':
                  return g.formatIdlType(N.type);
                case 'const':
                  return N.value;
              }
            })
            .join(', ');
          return ''.concat(R, '<').concat(b, '>');
        }
        return R;
      }
      throw new Error('Unknown IDL type: '.concat(A));
    }
    static formatIdlData(A, R, b) {
      if (typeof A.type == 'string') return R.toString();
      if ('vec' in A.type)
        return (
          '[' +
          R.map((N) => this.formatIdlData({ name: '', type: A.type.vec }, N, b)).join(', ') +
          ']'
        );
      if ('option' in A.type)
        return R === null ? 'null' : this.formatIdlData({ name: '', type: A.type.option }, R, b);
      if ('defined' in A.type) {
        if (!b) throw new Error('User defined types not provided');
        const N = A.type.defined.name,
          v = b.find((w) => w.name === N);
        if (!v) throw new Error('Type not found: '.concat(N));
        return g.formatIdlDataDefined(v, R, b);
      }
      return 'unknown';
    }
    static formatIdlDataDefined(A, R, b) {
      switch (A.type.kind) {
        case 'struct':
          return (
            '{ ' +
            (0, d.handleDefinedFields)(
              A.type.fields,
              () => '',
              (N) =>
                Object.entries(R)
                  .map(([v, w]) => {
                    const x = N.find((G) => G.name === v);
                    if (!x) throw new Error('Field not found: '.concat(v));
                    return v + ': ' + g.formatIdlData(x, w, b);
                  })
                  .join(', '),
              (N) =>
                Object.entries(R)
                  .map(([v, w]) => v + ': ' + g.formatIdlData({ name: '', type: N[v] }, w, b))
                  .join(', ')
            ) +
            ' }'
          );
        case 'enum': {
          const N = Object.keys(R)[0],
            v = A.type.variants.find((x) => x.name === N);
          if (!v) throw new Error('Unable to find variant: '.concat(N));
          const w = R[N];
          return (0, d.handleDefinedFields)(
            v.fields,
            () => N,
            (x) => {
              const G = Object.keys(w)
                .map((F) => {
                  const Q = w[F],
                    z = x.find((I) => I.name === F);
                  if (!z) throw new Error('Field not found: '.concat(F));
                  return F + ': ' + g.formatIdlData(z, Q, b);
                })
                .join(', ');
              return ''.concat(N, ' { ').concat(G, ' }');
            },
            (x) => {
              const G = Object.entries(w)
                .map(([F, Q]) => F + ': ' + g.formatIdlData({ name: '', type: x[F] }, Q, b))
                .join(', ');
              return ''.concat(N, ' { ').concat(G, ' }');
            }
          );
        }
        case 'type':
          return g.formatIdlType(A.type.alias);
      }
    }
    static flattenIdlAccounts(A, R) {
      return A.map((b) => {
        const N = m(b.name);
        if (b.hasOwnProperty('accounts')) {
          const v = R ? ''.concat(R, ' > ').concat(N) : N;
          return g.flattenIdlAccounts(b.accounts, v);
        } else return ct(xe({}, b), { name: R ? ''.concat(R, ' > ').concat(N) : N });
      }).flat();
    }
  }
  function m(h) {
    const A = h.replace(/([A-Z])/g, ' $1');
    return A.charAt(0).toUpperCase() + A.slice(1);
  }
  return ur;
}
var Or = {},
  Wr = {};
Object.defineProperty(Wr, '__esModule', { value: !0 });
Wr.DISCRIMINATOR_SIZE = void 0;
Wr.DISCRIMINATOR_SIZE = 8;
var Vg =
  (T && T.__importDefault) ||
  function (t) {
    return t && t.__esModule ? t : { default: t };
  };
Object.defineProperty(Or, '__esModule', { value: !0 });
Or.BorshAccountsCoder = void 0;
const Wg = Vg(Hr),
  Ai = Pe,
  Hc = $t,
  Oi = Wr;
class qg {
  constructor(e) {
    if (((this.idl = e), !e.accounts)) {
      this.accountLayouts = new Map();
      return;
    }
    const n = e.types;
    if (!n) throw new Error('Accounts require `idl.types`');
    const r = e.accounts.map((o) => {
      const i = n.find((u) => u.name === o.name);
      if (!i) throw new Error('Account not found: '.concat(o.name));
      return [o.name, Hc.IdlCoder.typeDefLayout({ typeDef: i, types: n })];
    });
    this.accountLayouts = new Map(r);
  }
  async encode(e, n) {
    const r = Ai.Buffer.alloc(1e3),
      o = this.accountLayouts.get(e);
    if (!o) throw new Error('Unknown account: '.concat(e));
    const i = o.encode(n, r),
      u = r.slice(0, i),
      d = this.accountDiscriminator(e);
    return Ai.Buffer.concat([d, u]);
  }
  decode(e, n) {
    if (this.accountDiscriminator(e).compare(n.slice(0, Oi.DISCRIMINATOR_SIZE)))
      throw new Error('Invalid account discriminator');
    return this.decodeUnchecked(e, n);
  }
  decodeAny(e) {
    const n = e.slice(0, Oi.DISCRIMINATOR_SIZE),
      r = Array.from(this.accountLayouts.keys()).find((o) =>
        this.accountDiscriminator(o).equals(n)
      );
    if (!r) throw new Error('Account not found');
    return this.decodeUnchecked(r, e);
  }
  decodeUnchecked(e, n) {
    const r = n.subarray(Oi.DISCRIMINATOR_SIZE),
      o = this.accountLayouts.get(e);
    if (!o) throw new Error('Unknown account: '.concat(e));
    return o.decode(r);
  }
  memcmp(e, n) {
    const r = this.accountDiscriminator(e);
    return { offset: 0, bytes: Wg.default.encode(n ? Ai.Buffer.concat([r, n]) : r) };
  }
  size(e) {
    return Oi.DISCRIMINATOR_SIZE + Hc.IdlCoder.typeSize({ defined: { name: e } }, this.idl);
  }
  accountDiscriminator(e) {
    var n;
    const r =
      (n = this.idl.accounts) === null || n === void 0 ? void 0 : n.find((o) => o.name === e);
    if (!r) throw new Error('Account not found: '.concat(e));
    return Ai.Buffer.from(r.discriminator);
  }
}
Or.BorshAccountsCoder = qg;
var Rr = {},
  zg =
    (T && T.__createBinding) ||
    (Object.create
      ? function (t, e, n, r) {
          r === void 0 && (r = n);
          var o = Object.getOwnPropertyDescriptor(e, n);
          (!o || ('get' in o ? !e.__esModule : o.writable || o.configurable)) &&
            (o = {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            }),
            Object.defineProperty(t, r, o);
        }
      : function (t, e, n, r) {
          r === void 0 && (r = n), (t[r] = e[n]);
        }),
  Yg =
    (T && T.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  Xg =
    (T && T.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null)
        for (var n in t)
          n !== 'default' && Object.prototype.hasOwnProperty.call(t, n) && zg(e, t, n);
      return Yg(e, t), e;
    };
Object.defineProperty(Rr, '__esModule', { value: !0 });
Rr.BorshEventCoder = void 0;
const Jg = Pe,
  Uo = Xg(en),
  Qg = $t;
class Zg {
  constructor(e) {
    var n;
    if (!e.events) {
      this.layouts = new Map();
      return;
    }
    const r = e.types;
    if (!r) throw new Error('Events require `idl.types`');
    const o = e.events.map((i) => {
      const u = r.find((d) => d.name === i.name);
      if (!u) throw new Error('Event not found: '.concat(i.name));
      return [i.name, Qg.IdlCoder.typeDefLayout({ typeDef: u, types: r })];
    });
    (this.layouts = new Map(o)),
      (this.discriminators = new Map(
        ((n = e.events) !== null && n !== void 0 ? n : []).map((i) => [
          Uo.encode(Jg.Buffer.from(i.discriminator)),
          i.name,
        ])
      ));
  }
  decode(e) {
    let n;
    try {
      n = Uo.decode(e);
    } catch (d) {
      return null;
    }
    const r = Uo.encode(n.slice(0, 8)),
      o = this.discriminators.get(r);
    if (!o) return null;
    const i = this.layouts.get(o);
    if (!i) throw new Error('Unknown event: '.concat(o));
    return { data: i.decode(n.slice(8)), name: o };
  }
}
Rr.BorshEventCoder = Zg;
var Ki = {};
Object.defineProperty(Ki, '__esModule', { value: !0 });
Ki.BorshTypesCoder = void 0;
const eA = Pe,
  tA = $t;
class nA {
  constructor(e) {
    const n = e.types;
    if (!n) {
      this.typeLayouts = new Map();
      return;
    }
    const r = n
      .filter((o) => !o.generics)
      .map((o) => [o.name, tA.IdlCoder.typeDefLayout({ typeDef: o, types: n })]);
    this.typeLayouts = new Map(r);
  }
  encode(e, n) {
    const r = eA.Buffer.alloc(1e3),
      o = this.typeLayouts.get(e);
    if (!o) throw new Error('Unknown type: '.concat(e));
    const i = o.encode(n, r);
    return r.slice(0, i);
  }
  decode(e, n) {
    const r = this.typeLayouts.get(e);
    if (!r) throw new Error('Unknown type: '.concat(e));
    return r.decode(n);
  }
}
Ki.BorshTypesCoder = nA;
var Gc;
function rA() {
  return (
    Gc ||
      ((Gc = 1),
      (function (t) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.BorshCoder =
            t.BorshEventCoder =
            t.DISCRIMINATOR_SIZE =
            t.BorshAccountsCoder =
            t.BorshInstructionCoder =
              void 0);
        const e = jc(),
          n = Or,
          r = Rr,
          o = Ki;
        var i = jc();
        Object.defineProperty(t, 'BorshInstructionCoder', {
          enumerable: !0,
          get: function () {
            return i.BorshInstructionCoder;
          },
        });
        var u = Or;
        Object.defineProperty(t, 'BorshAccountsCoder', {
          enumerable: !0,
          get: function () {
            return u.BorshAccountsCoder;
          },
        });
        var d = Wr;
        Object.defineProperty(t, 'DISCRIMINATOR_SIZE', {
          enumerable: !0,
          get: function () {
            return d.DISCRIMINATOR_SIZE;
          },
        });
        var f = Rr;
        Object.defineProperty(t, 'BorshEventCoder', {
          enumerable: !0,
          get: function () {
            return f.BorshEventCoder;
          },
        });
        class s {
          constructor(g) {
            (this.instruction = new e.BorshInstructionCoder(g)),
              (this.accounts = new n.BorshAccountsCoder(g)),
              (this.events = new r.BorshEventCoder(g)),
              (this.types = new o.BorshTypesCoder(g));
          }
        }
        t.BorshCoder = s;
      })(Lo)),
    Lo
  );
}
var qr = {},
  Vi = {},
  iA =
    (T && T.__createBinding) ||
    (Object.create
      ? function (t, e, n, r) {
          r === void 0 && (r = n);
          var o = Object.getOwnPropertyDescriptor(e, n);
          (!o || ('get' in o ? !e.__esModule : o.writable || o.configurable)) &&
            (o = {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            }),
            Object.defineProperty(t, r, o);
        }
      : function (t, e, n, r) {
          r === void 0 && (r = n), (t[r] = e[n]);
        }),
  oA =
    (T && T.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  sA =
    (T && T.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null)
        for (var n in t)
          n !== 'default' && Object.prototype.hasOwnProperty.call(t, n) && iA(e, t, n);
      return oA(e, t), e;
    },
  aA =
    (T && T.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(Vi, '__esModule', { value: !0 });
Vi.SystemInstructionCoder = void 0;
const uA = aA(Ye),
  ye = sA(Ui);
class cA {
  constructor(e) {}
  encode(e, n) {
    switch (e) {
      case 'createAccount':
        return dA(n);
      case 'assign':
        return fA(n);
      case 'transfer':
        return pA(n);
      case 'createAccountWithSeed':
        return _A(n);
      case 'advanceNonceAccount':
        return hA(n);
      case 'withdrawNonceAccount':
        return gA(n);
      case 'initializeNonceAccount':
        return mA(n);
      case 'authorizeNonceAccount':
        return AA(n);
      case 'allocate':
        return OA(n);
      case 'allocateWithSeed':
        return RA(n);
      case 'assignWithSeed':
        return yA(n);
      case 'transferWithSeed':
        return TA(n);
      default:
        throw new Error('Invalid instruction: '.concat(e));
    }
  }
  encodeState(e, n) {
    throw new Error('System does not have state');
  }
}
Vi.SystemInstructionCoder = cA;
class lA extends ye.Layout {
  constructor(e) {
    super(-1, e),
      (this.property = e),
      (this.layout = ye.struct(
        [ye.u32('length'), ye.u32('lengthPadding'), ye.blob(ye.offset(ye.u32(), -8), 'chars')],
        this.property
      ));
  }
  encode(e, n, r = 0) {
    if (e == null) return this.layout.span;
    const o = { chars: ne.Buffer.from(e, 'utf8') };
    return this.layout.encode(o, n, r);
  }
  decode(e, n = 0) {
    return this.layout.decode(e, n).chars.toString();
  }
  getSpan(e, n = 0) {
    return (
      ye.u32().span +
      ye.u32().span +
      new uA.default(new Uint8Array(e).slice(n, n + 4), 10, 'le').toNumber()
    );
  }
}
function Wi(t) {
  return new lA(t);
}
function mt(t) {
  return ye.blob(32, t);
}
function dA({ lamports: t, space: e, owner: n }) {
  return At({ createAccount: { lamports: t, space: e, owner: n.toBuffer() } });
}
function fA({ owner: t }) {
  return At({ assign: { owner: t.toBuffer() } });
}
function pA({ lamports: t }) {
  return At({ transfer: { lamports: t } });
}
function _A({ base: t, seed: e, lamports: n, space: r, owner: o }) {
  return At(
    {
      createAccountWithSeed: {
        base: t.toBuffer(),
        seed: e,
        lamports: n,
        space: r,
        owner: o.toBuffer(),
      },
    },
    He.getVariant(3).span + e.length
  );
}
function mA({ authorized: t }) {
  return At({ initializeNonceAccount: { authorized: t.toBuffer() } });
}
function hA({ authorized: t }) {
  return At({ advanceNonceAccount: { authorized: t.toBuffer() } });
}
function gA({ lamports: t }) {
  return At({ withdrawNonceAccount: { lamports: t } });
}
function AA({ authorized: t }) {
  return At({ authorizeNonceAccount: { authorized: t.toBuffer() } });
}
function OA({ space: t }) {
  return At({ allocate: { space: t } });
}
function RA({ base: t, seed: e, space: n, owner: r }) {
  return At(
    { allocateWithSeed: { base: t.toBuffer(), seed: e, space: n, owner: r.toBuffer() } },
    He.getVariant(9).span + e.length
  );
}
function yA({ base: t, seed: e, owner: n }) {
  return At(
    { assignWithSeed: { base: t.toBuffer(), seed: e, owner: n.toBuffer() } },
    He.getVariant(10).span + e.length
  );
}
function TA({ lamports: t, seed: e, owner: n }) {
  return At(
    { transferWithSeed: { lamports: t, seed: e, owner: n.toBuffer() } },
    He.getVariant(11).span + e.length
  );
}
const He = ye.union(ye.u32('instruction'));
He.addVariant(0, ye.struct([ye.ns64('lamports'), ye.ns64('space'), mt('owner')]), 'createAccount');
He.addVariant(1, ye.struct([mt('owner')]), 'assign');
He.addVariant(2, ye.struct([ye.ns64('lamports')]), 'transfer');
He.addVariant(
  3,
  ye.struct([mt('base'), Wi('seed'), ye.ns64('lamports'), ye.ns64('space'), mt('owner')]),
  'createAccountWithSeed'
);
He.addVariant(4, ye.struct([mt('authorized')]), 'advanceNonceAccount');
He.addVariant(5, ye.struct([ye.ns64('lamports')]), 'withdrawNonceAccount');
He.addVariant(6, ye.struct([mt('authorized')]), 'initializeNonceAccount');
He.addVariant(7, ye.struct([mt('authorized')]), 'authorizeNonceAccount');
He.addVariant(8, ye.struct([ye.ns64('space')]), 'allocate');
He.addVariant(
  9,
  ye.struct([mt('base'), Wi('seed'), ye.ns64('space'), mt('owner')]),
  'allocateWithSeed'
);
He.addVariant(10, ye.struct([mt('base'), Wi('seed'), mt('owner')]), 'assignWithSeed');
He.addVariant(11, ye.struct([ye.ns64('lamports'), Wi('seed'), mt('owner')]), 'transferWithSeed');
function At(t, e) {
  const n = ne.Buffer.alloc(e != null ? e : EA),
    r = He.encode(t, n);
  return e === void 0 ? n.slice(0, r) : n;
}
const EA = Math.max(...Object.values(He.registry).map((t) => t.span));
var qi = {},
  wA =
    (T && T.__createBinding) ||
    (Object.create
      ? function (t, e, n, r) {
          r === void 0 && (r = n);
          var o = Object.getOwnPropertyDescriptor(e, n);
          (!o || ('get' in o ? !e.__esModule : o.writable || o.configurable)) &&
            (o = {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            }),
            Object.defineProperty(t, r, o);
        }
      : function (t, e, n, r) {
          r === void 0 && (r = n), (t[r] = e[n]);
        }),
  IA =
    (T && T.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  bA =
    (T && T.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null)
        for (var n in t)
          n !== 'default' && Object.prototype.hasOwnProperty.call(t, n) && wA(e, t, n);
      return IA(e, t), e;
    };
Object.defineProperty(qi, '__esModule', { value: !0 });
qi.SystemAccountsCoder = void 0;
const On = bA(Ui),
  _s = me,
  NA = $t;
class CA {
  constructor(e) {
    this.idl = e;
  }
  async encode(e, n) {
    switch (e) {
      case 'nonce': {
        const r = ne.Buffer.alloc(_s.NONCE_ACCOUNT_LENGTH),
          o = Wf.encode(n, r);
        return r.slice(0, o);
      }
      default:
        throw new Error('Invalid account name: '.concat(e));
    }
  }
  decode(e, n) {
    return this.decodeUnchecked(e, n);
  }
  decodeUnchecked(e, n) {
    switch (e) {
      case 'nonce':
        return SA(n);
      default:
        throw new Error('Invalid account name: '.concat(e));
    }
  }
  memcmp(e, n) {
    switch (e) {
      case 'nonce':
        return { dataSize: _s.NONCE_ACCOUNT_LENGTH };
      default:
        throw new Error('Invalid account name: '.concat(e));
    }
  }
  size(e) {
    return NA.IdlCoder.typeSize({ defined: { name: e } }, this.idl);
  }
}
qi.SystemAccountsCoder = CA;
function SA(t) {
  return Wf.decode(t);
}
let vA = class extends On.Layout {
  constructor(e, n, r, o) {
    super(e.span, o), (this.layout = e), (this.decoder = n), (this.encoder = r);
  }
  decode(e, n) {
    return this.decoder(this.layout.decode(e, n));
  }
  encode(e, n, r) {
    return this.layout.encode(this.encoder(e), n, r);
  }
  getSpan(e, n) {
    return this.layout.getSpan(e, n);
  }
};
function Fc(t) {
  return new vA(
    On.blob(32),
    (e) => new _s.PublicKey(e),
    (e) => e.toBuffer(),
    t
  );
}
const Wf = On.struct([
  On.u32('version'),
  On.u32('state'),
  Fc('authorizedPubkey'),
  Fc('nonce'),
  On.struct([On.nu64('lamportsPerSignature')], 'feeCalculator'),
]);
var zi = {};
Object.defineProperty(zi, '__esModule', { value: !0 });
zi.SystemEventsCoder = void 0;
class PA {
  constructor(e) {}
  decode(e) {
    throw new Error('System program does not have events');
  }
}
zi.SystemEventsCoder = PA;
var Yi = {};
Object.defineProperty(Yi, '__esModule', { value: !0 });
Yi.SystemTypesCoder = void 0;
class MA {
  constructor(e) {}
  encode(e, n) {
    throw new Error('System does not have user-defined types');
  }
  decode(e, n) {
    throw new Error('System does not have user-defined types');
  }
}
Yi.SystemTypesCoder = MA;
Object.defineProperty(qr, '__esModule', { value: !0 });
qr.SystemCoder = void 0;
const kA = Vi,
  DA = qi,
  BA = zi,
  xA = Yi;
class LA {
  constructor(e) {
    (this.instruction = new kA.SystemInstructionCoder(e)),
      (this.accounts = new DA.SystemAccountsCoder(e)),
      (this.events = new BA.SystemEventsCoder(e)),
      (this.types = new xA.SystemTypesCoder(e));
  }
}
qr.SystemCoder = LA;
var Kc;
function Xi() {
  return (
    Kc ||
      ((Kc = 1),
      (function (t) {
        var e =
            (T && T.__createBinding) ||
            (Object.create
              ? function (r, o, i, u) {
                  u === void 0 && (u = i);
                  var d = Object.getOwnPropertyDescriptor(o, i);
                  (!d || ('get' in d ? !o.__esModule : d.writable || d.configurable)) &&
                    (d = {
                      enumerable: !0,
                      get: function () {
                        return o[i];
                      },
                    }),
                    Object.defineProperty(r, u, d);
                }
              : function (r, o, i, u) {
                  u === void 0 && (u = i), (r[u] = o[i]);
                }),
          n =
            (T && T.__exportStar) ||
            function (r, o) {
              for (var i in r)
                i !== 'default' && !Object.prototype.hasOwnProperty.call(o, i) && e(o, r, i);
            };
        Object.defineProperty(t, '__esModule', { value: !0 }), n(rA(), t), n(qr, t);
      })(xo)),
    xo
  );
}
var qe = {},
  Ji = {};
const qf = $r(C_);
Object.defineProperty(Ji, '__esModule', { value: !0 });
Ji.hash = void 0;
const UA = qf;
function $A(t) {
  return new TextDecoder().decode((0, UA.sha256)(t));
}
Ji.hash = $A;
var Qi = {};
Object.defineProperty(Qi, '__esModule', { value: !0 });
Qi.createWithSeedSync = void 0;
const Vc = Pe,
  jA = me,
  HA = qf;
function GA(t, e, n) {
  const r = Vc.Buffer.concat([t.toBuffer(), Vc.Buffer.from(e), n.toBuffer()]);
  return new jA.PublicKey((0, HA.sha256)(r));
}
Qi.createWithSeedSync = GA;
var zf = {};
(function (t) {
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.associatedAddress = t.ASSOCIATED_PROGRAM_ID = t.TOKEN_PROGRAM_ID = void 0);
  const e = me;
  (t.TOKEN_PROGRAM_ID = new e.PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA')),
    (t.ASSOCIATED_PROGRAM_ID = new e.PublicKey('ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'));
  function n({ mint: r, owner: o }) {
    return e.PublicKey.findProgramAddressSync(
      [o.toBuffer(), t.TOKEN_PROGRAM_ID.toBuffer(), r.toBuffer()],
      t.ASSOCIATED_PROGRAM_ID
    )[0];
  }
  t.associatedAddress = n;
})(zf);
var Qt = {},
  FA =
    (T && T.__createBinding) ||
    (Object.create
      ? function (t, e, n, r) {
          r === void 0 && (r = n);
          var o = Object.getOwnPropertyDescriptor(e, n);
          (!o || ('get' in o ? !e.__esModule : o.writable || o.configurable)) &&
            (o = {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            }),
            Object.defineProperty(t, r, o);
        }
      : function (t, e, n, r) {
          r === void 0 && (r = n), (t[r] = e[n]);
        }),
  KA =
    (T && T.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  VA =
    (T && T.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null)
        for (var n in t)
          n !== 'default' && Object.prototype.hasOwnProperty.call(t, n) && FA(e, t, n);
      return KA(e, t), e;
    },
  WA =
    (T && T.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(Qt, '__esModule', { value: !0 });
Qt.decodeUpgradeableLoaderState = Qt.fetchData = Qt.verifiedBuild = void 0;
const qA = WA(S_),
  lt = VA(Ae);
async function zA(t, e, n = 5) {
  const r = 'https://api.apr.dev/api/v0/program/'.concat(e.toString(), '/latest?limit=').concat(n),
    [o, i] = await Promise.all([Yf(t, e), (0, qA.default)(r)]),
    u = (await i.json()).filter(
      (f) => !f.aborted && f.state === 'Built' && f.verified === 'Verified'
    );
  if (u.length === 0) return null;
  const d = u[0];
  return o.slot.toNumber() !== d.verified_slot ? null : d;
}
Qt.verifiedBuild = zA;
async function Yf(t, e) {
  const n = await t.getAccountInfo(e);
  if (n === null) throw new Error('program account not found');
  const { program: r } = ms(n.data),
    o = await t.getAccountInfo(r.programdataAddress);
  if (o === null) throw new Error('program data account not found');
  const { programData: i } = ms(o.data);
  return i;
}
Qt.fetchData = Yf;
const YA = lt.rustEnum(
  [
    lt.struct([], 'uninitialized'),
    lt.struct([lt.option(lt.publicKey(), 'authorityAddress')], 'buffer'),
    lt.struct([lt.publicKey('programdataAddress')], 'program'),
    lt.struct(
      [lt.u64('slot'), lt.option(lt.publicKey(), 'upgradeAuthorityAddress')],
      'programData'
    ),
  ],
  void 0,
  lt.u32()
);
function ms(t) {
  return YA.decode(t);
}
Qt.decodeUpgradeableLoaderState = ms;
var XA =
    (T && T.__createBinding) ||
    (Object.create
      ? function (t, e, n, r) {
          r === void 0 && (r = n);
          var o = Object.getOwnPropertyDescriptor(e, n);
          (!o || ('get' in o ? !e.__esModule : o.writable || o.configurable)) &&
            (o = {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            }),
            Object.defineProperty(t, r, o);
        }
      : function (t, e, n, r) {
          r === void 0 && (r = n), (t[r] = e[n]);
        }),
  JA =
    (T && T.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  In =
    (T && T.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null)
        for (var n in t)
          n !== 'default' && Object.prototype.hasOwnProperty.call(t, n) && XA(e, t, n);
      return JA(e, t), e;
    };
Object.defineProperty(qe, '__esModule', { value: !0 });
qe.registry = qe.features = qe.token = qe.bytes = qe.publicKey = qe.rpc = qe.sha256 = void 0;
qe.sha256 = In(Ji);
qe.rpc = In(Bs());
qe.publicKey = In(Qi);
qe.bytes = In(ft);
qe.token = In(zf);
qe.features = In(tn);
qe.registry = In(Qt);
var $o = {};
const QA = $r(v_);
var jo = {},
  xs = {},
  on = {};
Object.defineProperty(on, '__esModule', { value: !0 });
on.splitArgsAndCtx = void 0;
function ZA(t, e) {
  var n, r;
  let o = {};
  const i = t.args ? t.args.length : 0;
  if (e.length > i) {
    if (e.length !== i + 1)
      throw new Error(
        'provided too many arguments '
          .concat(e, ' to instruction ')
          .concat(t == null ? void 0 : t.name, ' expecting: ')
          .concat(
            (r = (n = t.args) === null || n === void 0 ? void 0 : n.map((u) => u.name)) !== null &&
              r !== void 0
              ? r
              : []
          )
      );
    o = e.pop();
  }
  return [e, o];
}
on.splitArgsAndCtx = ZA;
var eO =
    (T && T.__createBinding) ||
    (Object.create
      ? function (t, e, n, r) {
          r === void 0 && (r = n);
          var o = Object.getOwnPropertyDescriptor(e, n);
          (!o || ('get' in o ? !e.__esModule : o.writable || o.configurable)) &&
            (o = {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            }),
            Object.defineProperty(t, r, o);
        }
      : function (t, e, n, r) {
          r === void 0 && (r = n), (t[r] = e[n]);
        }),
  tO =
    (T && T.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  nO =
    (T && T.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null)
        for (var n in t)
          n !== 'default' && Object.prototype.hasOwnProperty.call(t, n) && eO(e, t, n);
      return tO(e, t), e;
    };
Object.defineProperty(xs, '__esModule', { value: !0 });
const rO = me,
  iO = Le,
  oO = Jn,
  Ho = ze,
  sO = on,
  aO = nO(tn);
class ki {
  static build(e, n, r) {
    if (e.name === '_inner') throw new oO.IdlError('the _inner name is reserved');
    const o = (...i) => {
      const [u, d] = (0, sO.splitArgsAndCtx)(e, [...i]);
      (0, Ho.validateAccounts)(e.accounts, d.accounts), uO(e, ...i);
      const f = o.accounts(d.accounts);
      return (
        d.remainingAccounts !== void 0 && f.push(...d.remainingAccounts),
        aO.isSet('debug-logs') && console.log('Outgoing account metas:', f),
        new rO.TransactionInstruction({
          keys: f,
          programId: r,
          data: n(e.name, (0, Ho.toInstruction)(e, ...u)),
        })
      );
    };
    return (o.accounts = (i) => ki.accountsArray(i, e.accounts, r, e.name)), o;
  }
  static accountsArray(e, n, r, o) {
    return e
      ? n
          .map((i) => {
            if ((0, iO.isCompositeAccounts)(i)) {
              const _ = e[i.name];
              return ki.accountsArray(_, i.accounts, r, o).flat();
            }
            let u;
            try {
              u = (0, Ho.translateAddress)(e[i.name]);
            } catch (_) {
              throw new Error(
                'Wrong input type for account "'
                  .concat(i.name, '" in the instruction accounts object')
                  .concat(
                    o !== void 0 ? ' for instruction "' + o + '"' : '',
                    '. Expected PublicKey or string.'
                  )
              );
            }
            const d = i.optional && u.equals(r),
              f = !!(i.writable && !d),
              s = !!(i.signer && !d);
            return { pubkey: u, isWritable: f, isSigner: s };
          })
          .flat()
      : [];
  }
}
xs.default = ki;
function uO(t, ...e) {}
var Ls = {};
Object.defineProperty(Ls, '__esModule', { value: !0 });
const cO = me,
  lO = on;
class dO {
  static build(e, n) {
    return (...o) => {
      var i, u, d;
      const [, f] = (0, lO.splitArgsAndCtx)(e, [...o]),
        s = new cO.Transaction();
      if (f.preInstructions && f.instructions)
        throw new Error('instructions is deprecated, use preInstructions');
      return (
        (i = f.preInstructions) === null || i === void 0 || i.forEach((_) => s.add(_)),
        (u = f.instructions) === null || u === void 0 || u.forEach((_) => s.add(_)),
        s.add(n(...o)),
        (d = f.postInstructions) === null || d === void 0 || d.forEach((_) => s.add(_)),
        s
      );
    };
  }
}
Ls.default = dO;
var Us = {};
Object.defineProperty(Us, '__esModule', { value: !0 });
const fO = on,
  pO = Jn;
class _O {
  static build(e, n, r, o) {
    return async (...u) => {
      var d;
      const f = n(...u),
        [, s] = (0, fO.splitArgsAndCtx)(e, [...u]);
      if (o.sendAndConfirm === void 0)
        throw new Error("This function requires 'Provider.sendAndConfirm' to be implemented.");
      try {
        return await o.sendAndConfirm(
          f,
          (d = s.signers) !== null && d !== void 0 ? d : [],
          s.options
        );
      } catch (_) {
        throw (0, pO.translateError)(_, r);
      }
    };
  }
}
Us.default = _O;
var zn = {},
  mO =
    (T && T.__createBinding) ||
    (Object.create
      ? function (t, e, n, r) {
          r === void 0 && (r = n);
          var o = Object.getOwnPropertyDescriptor(e, n);
          (!o || ('get' in o ? !e.__esModule : o.writable || o.configurable)) &&
            (o = {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            }),
            Object.defineProperty(t, r, o);
        }
      : function (t, e, n, r) {
          r === void 0 && (r = n), (t[r] = e[n]);
        }),
  hO =
    (T && T.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  gO =
    (T && T.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null)
        for (var n in t)
          n !== 'default' && Object.prototype.hasOwnProperty.call(t, n) && mO(e, t, n);
      return hO(e, t), e;
    },
  AO =
    (T && T.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(zn, '__esModule', { value: !0 });
zn.AccountClient = void 0;
const OO = AO(P_),
  RO = me,
  yO = Fi(),
  TO = Xi(),
  Ri = ze,
  EO = gO(Bs());
class wO {
  static build(e, n, r, o) {
    var i;
    return ((i = e.accounts) !== null && i !== void 0 ? i : []).reduce(
      (u, d) => ((u[d.name] = new Xf(e, d, r, o, n)), u),
      {}
    );
  }
}
zn.default = wO;
class Xf {
  get size() {
    return this._size;
  }
  get programId() {
    return this._programId;
  }
  get provider() {
    return this._provider;
  }
  get coder() {
    return this._coder;
  }
  constructor(e, n, r, o, i) {
    (this._idlAccount = n),
      (this._programId = r),
      (this._provider = o != null ? o : (0, yO.getProvider)()),
      (this._coder = i != null ? i : new TO.BorshCoder(e)),
      (this._size = this._coder.accounts.size(n.name));
  }
  async fetchNullable(e, n) {
    const { data: r } = await this.fetchNullableAndContext(e, n);
    return r;
  }
  async fetchNullableAndContext(e, n) {
    const r = await this.getAccountInfoAndContext(e, n),
      { value: o, context: i } = r;
    return {
      data:
        o && o.data.length !== 0
          ? this._coder.accounts.decode(this._idlAccount.name, o.data)
          : null,
      context: i,
    };
  }
  async fetch(e, n) {
    const { data: r } = await this.fetchNullableAndContext(e, n);
    if (r === null) throw new Error('Account does not exist or has no data '.concat(e.toString()));
    return r;
  }
  async fetchAndContext(e, n) {
    const { data: r, context: o } = await this.fetchNullableAndContext(e, n);
    if (r === null) throw new Error('Account does not exist '.concat(e.toString()));
    return { data: r, context: o };
  }
  async fetchMultiple(e, n) {
    return (await this.fetchMultipleAndContext(e, n)).map((o) => (o ? o.data : null));
  }
  async fetchMultipleAndContext(e, n) {
    return (
      await EO.getMultipleAccountsAndContext(
        this._provider.connection,
        e.map((o) => (0, Ri.translateAddress)(o)),
        n
      )
    ).map((o) => {
      if (o == null) return null;
      const { account: i, context: u } = o;
      return { data: this._coder.accounts.decode(this._idlAccount.name, i.data), context: u };
    });
  }
  async all(e) {
    const n = this.coder.accounts.memcmp(
        this._idlAccount.name,
        e instanceof ne.Buffer ? e : void 0
      ),
      r = [];
    return (
      (n == null ? void 0 : n.offset) != null &&
        (n == null ? void 0 : n.bytes) != null &&
        r.push({ memcmp: { offset: n.offset, bytes: n.bytes } }),
      (n == null ? void 0 : n.dataSize) != null && r.push({ dataSize: n.dataSize }),
      (
        await this._provider.connection.getProgramAccounts(this._programId, {
          commitment: this._provider.connection.commitment,
          filters: [...r, ...(Array.isArray(e) ? e : [])],
        })
      ).map(({ pubkey: i, account: u }) => ({
        publicKey: i,
        account: this._coder.accounts.decode(this._idlAccount.name, u.data),
      }))
    );
  }
  subscribe(e, n) {
    const r = cr.get(e.toString());
    if (r) return r.ee;
    const o = new OO.default();
    e = (0, Ri.translateAddress)(e);
    const i = this._provider.connection.onAccountChange(
      e,
      (u) => {
        const d = this._coder.accounts.decode(this._idlAccount.name, u.data);
        o.emit('change', d);
      },
      n
    );
    return cr.set(e.toString(), { ee: o, listener: i }), o;
  }
  async unsubscribe(e) {
    let n = cr.get(e.toString());
    if (!n) {
      console.warn('Address is not subscribed');
      return;
    }
    cr &&
      (await this._provider.connection
        .removeAccountChangeListener(n.listener)
        .then(() => {
          cr.delete(e.toString());
        })
        .catch(console.error));
  }
  async createInstruction(e, n) {
    const r = this.size;
    if (this._provider.publicKey === void 0)
      throw new Error(
        "This function requires the Provider interface implementor to have a 'publicKey' field."
      );
    return RO.SystemProgram.createAccount({
      fromPubkey: this._provider.publicKey,
      newAccountPubkey: e.publicKey,
      space: n != null ? n : r,
      lamports: await this._provider.connection.getMinimumBalanceForRentExemption(
        n != null ? n : r
      ),
      programId: this._programId,
    });
  }
  async getAccountInfo(e, n) {
    return await this._provider.connection.getAccountInfo((0, Ri.translateAddress)(e), n);
  }
  async getAccountInfoAndContext(e, n) {
    return await this._provider.connection.getAccountInfoAndContext((0, Ri.translateAddress)(e), n);
  }
}
zn.AccountClient = Xf;
const cr = new Map();
var $s = {},
  nn = {};
Object.defineProperty(nn, '__esModule', { value: !0 });
nn.EventParser = nn.EventManager = void 0;
const hs = 'Program log: ',
  Jf = 'Program data: ',
  IO = hs.length,
  bO = Jf.length;
class NO {
  constructor(e, n, r) {
    (this._programId = e),
      (this._provider = n),
      (this._eventParser = new Qf(e, r)),
      (this._eventCallbacks = new Map()),
      (this._eventListeners = new Map()),
      (this._listenerIdCount = 0);
  }
  addEventListener(e, n) {
    var r;
    let o = this._listenerIdCount;
    return (
      (this._listenerIdCount += 1),
      this._eventListeners.has(e) || this._eventListeners.set(e, []),
      this._eventListeners.set(
        e,
        ((r = this._eventListeners.get(e)) !== null && r !== void 0 ? r : []).concat(o)
      ),
      this._eventCallbacks.set(o, [e, n]),
      this._onLogsSubscriptionId !== void 0 ||
        (this._onLogsSubscriptionId = this._provider.connection.onLogs(this._programId, (i, u) => {
          if (!i.err)
            for (const d of this._eventParser.parseLogs(i.logs)) {
              const f = this._eventListeners.get(d.name);
              f &&
                f.forEach((s) => {
                  const _ = this._eventCallbacks.get(s);
                  if (_) {
                    const [, g] = _;
                    g(d.data, u.slot, i.signature);
                  }
                });
            }
        })),
      o
    );
  }
  async removeEventListener(e) {
    const n = this._eventCallbacks.get(e);
    if (!n) throw new Error('Event listener '.concat(e, " doesn't exist!"));
    const [r] = n;
    let o = this._eventListeners.get(r);
    if (!o) throw new Error("Event listeners don't exist for ".concat(r, '!'));
    if (
      (this._eventCallbacks.delete(e),
      (o = o.filter((i) => i !== e)),
      this._eventListeners.set(r, o),
      o.length === 0 && this._eventListeners.delete(r),
      this._eventCallbacks.size === 0)
    ) {
      if (this._eventListeners.size !== 0)
        throw new Error(
          'Expected event listeners size to be 0 but got '.concat(this._eventListeners.size)
        );
      this._onLogsSubscriptionId !== void 0 &&
        (await this._provider.connection.removeOnLogsListener(this._onLogsSubscriptionId),
        (this._onLogsSubscriptionId = void 0));
    }
  }
}
nn.EventManager = NO;
class Qf {
  constructor(e, n) {
    (this.coder = n), (this.programId = e);
  }
  *parseLogs(e, n = !1) {
    const r = new SO(e),
      o = new CO();
    let i = r.next();
    for (; i !== null; ) {
      let [u, d, f] = this.handleLog(o, i, n);
      u && (yield u), d && o.push(d), f && o.pop(), (i = r.next());
    }
  }
  handleLog(e, n, r) {
    return e.stack.length > 0 && e.program() === this.programId.toString()
      ? this.handleProgramLog(n, r)
      : [null, ...this.handleSystemLog(n)];
  }
  handleProgramLog(e, n) {
    if (e.startsWith(hs) || e.startsWith(Jf)) {
      const r = e.startsWith(hs) ? e.slice(IO) : e.slice(bO),
        o = this.coder.events.decode(r);
      if (n && o === null) throw new Error('Unable to decode event '.concat(r));
      return [o, null, !1];
    } else return [null, ...this.handleSystemLog(e)];
  }
  handleSystemLog(e) {
    const n = e.split(':')[0];
    return n.match(/^Program (.*) success/g) !== null
      ? [null, !0]
      : n.startsWith('Program '.concat(this.programId.toString(), ' invoke'))
        ? [this.programId.toString(), !1]
        : n.includes('invoke')
          ? ['cpi', !1]
          : [null, !1];
  }
}
nn.EventParser = Qf;
class CO {
  constructor() {
    this.stack = [];
  }
  program() {
    if (!this.stack.length) throw new Error('Expected the stack to have elements');
    return this.stack[this.stack.length - 1];
  }
  push(e) {
    this.stack.push(e);
  }
  pop() {
    if (!this.stack.length) throw new Error('Expected the stack to have elements');
    this.stack.pop();
  }
}
class SO {
  constructor(e) {
    this.logs = e;
  }
  next() {
    if (this.logs.length === 0) return null;
    let e = this.logs[0];
    return (this.logs = this.logs.slice(1)), e;
  }
}
Object.defineProperty($s, '__esModule', { value: !0 });
const vO = on,
  PO = nn,
  MO = Jn;
class kO {
  static build(e, n, r, o, i, u, d) {
    return async (...s) => {
      var _;
      const g = n(...s),
        [, m] = (0, vO.splitArgsAndCtx)(e, [...s]);
      let h;
      if (o.simulate === void 0)
        throw new Error("This function requires 'Provider.simulate' to be implemented.");
      try {
        h = await o.simulate(
          g,
          m.signers,
          (_ = m.options) === null || _ === void 0 ? void 0 : _.commitment
        );
      } catch (b) {
        throw (0, MO.translateError)(b, r);
      }
      if (h === void 0) throw new Error('Unable to simulate transaction');
      const A = h.logs;
      if (!A) throw new Error('Simulated logs not found');
      const R = [];
      if (d.events) {
        let b = new PO.EventParser(u, i);
        for (const N of b.parseLogs(A)) R.push(N);
      }
      return { events: R, raw: A };
    };
  }
}
$s.default = kO;
var yt = {},
  mn = {},
  Zi = {},
  DO =
    (T && T.__createBinding) ||
    (Object.create
      ? function (t, e, n, r) {
          r === void 0 && (r = n);
          var o = Object.getOwnPropertyDescriptor(e, n);
          (!o || ('get' in o ? !e.__esModule : o.writable || o.configurable)) &&
            (o = {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            }),
            Object.defineProperty(t, r, o);
        }
      : function (t, e, n, r) {
          r === void 0 && (r = n), (t[r] = e[n]);
        }),
  BO =
    (T && T.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  xO =
    (T && T.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null)
        for (var n in t)
          n !== 'default' && Object.prototype.hasOwnProperty.call(t, n) && DO(e, t, n);
      return BO(e, t), e;
    },
  LO =
    (T && T.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(Zi, '__esModule', { value: !0 });
Zi.decodeTokenAccount = void 0;
const UO = LO(Ye),
  kt = xO(Ui),
  Zf = Ui,
  $O = me;
function Go(t) {
  return new ep(
    kt.blob(8),
    (e) => js.fromBuffer(e),
    (e) => e.toBuffer(),
    t
  );
}
function yi(t) {
  return new ep(
    kt.blob(32),
    (e) => new $O.PublicKey(e),
    (e) => e.toBuffer(),
    t
  );
}
function Fo(t, e) {
  return new jO(t, e);
}
class ep extends Zf.Layout {
  constructor(e, n, r, o) {
    super(e.span, o), (this.layout = e), (this.decoder = n), (this.encoder = r);
  }
  decode(e, n) {
    return this.decoder(this.layout.decode(e, n));
  }
  encode(e, n, r) {
    return this.layout.encode(this.encoder(e), n, r);
  }
  getSpan(e, n) {
    return this.layout.getSpan(e, n);
  }
}
class jO extends Zf.Layout {
  constructor(e, n) {
    super(-1, n), (this.layout = e), (this.discriminator = kt.u32());
  }
  encode(e, n, r = 0) {
    return e == null
      ? this.layout.span + this.discriminator.encode(0, n, r)
      : (this.discriminator.encode(1, n, r), this.layout.encode(e, n, r + 4) + 4);
  }
  decode(e, n = 0) {
    const r = this.discriminator.decode(e, n);
    if (r === 0) return null;
    if (r === 1) return this.layout.decode(e, n + 4);
    throw new Error('Invalid coption ' + this.layout.property);
  }
  getSpan(e, n = 0) {
    return this.layout.getSpan(e, n + 4) + 4;
  }
}
class js extends UO.default {
  toBuffer() {
    const e = super.toArray().reverse(),
      n = ne.Buffer.from(e);
    if (n.length === 8) return n;
    if (n.length >= 8) throw new Error('u64 too large');
    const r = ne.Buffer.alloc(8);
    return n.copy(r), r;
  }
  static fromBuffer(e) {
    if (e.length !== 8) throw new Error('Invalid buffer length: '.concat(e.length));
    return new js(
      [...e]
        .reverse()
        .map((n) => '00'.concat(n.toString(16)).slice(-2))
        .join(''),
      16
    );
  }
}
const HO = kt.struct([
  yi('mint'),
  yi('owner'),
  Go('amount'),
  Fo(yi(), 'delegate'),
  ((t) => {
    const e = kt.union(kt.u8('discriminator'), null, t);
    return (
      e.addVariant(0, kt.struct([]), 'uninitialized'),
      e.addVariant(1, kt.struct([]), 'initialized'),
      e.addVariant(2, kt.struct([]), 'frozen'),
      e
    );
  })('state'),
  Fo(Go(), 'isNative'),
  Go('delegatedAmount'),
  Fo(yi(), 'closeAuthority'),
]);
function GO(t) {
  return HO.decode(t);
}
Zi.decodeTokenAccount = GO;
var Wc;
function FO() {
  if (Wc) return mn;
  Wc = 1;
  var t =
    (T && T.__importDefault) ||
    function (_) {
      return _ && _.__esModule ? _ : { default: _ };
    };
  Object.defineProperty(mn, '__esModule', { value: !0 }),
    (mn.AccountsResolver = mn.isAccountsGeneric = void 0);
  const e = t(Ye),
    n = me,
    r = Le,
    o = Zi,
    i = eo(),
    u = gs();
  function d(_) {
    return !(_ instanceof n.PublicKey);
  }
  mn.isAccountsGeneric = d;
  class f {
    constructor(g, m, h, A, R, b, N, v) {
      (this._args = g),
        (this._accounts = m),
        (this._provider = h),
        (this._programId = A),
        (this._idlIx = R),
        (this._idlTypes = N),
        (this._customResolver = v),
        (this._accountStore = new s(h, b, A));
    }
    args(g) {
      this._args = g;
    }
    async resolve() {
      this.resolveEventCpi(this._idlIx.accounts), this.resolveConst(this._idlIx.accounts);
      let g = 0;
      for (
        ;
        (await this.resolvePdasAndRelations(this._idlIx.accounts)) + (await this.resolveCustom()) >
        0;

      )
        if ((g++, g === 16)) throw new Error('Reached maximum depth for account resolution');
    }
    resolveOptionals(g) {
      Object.assign(this._accounts, this.resolveOptionalsHelper(g, this._idlIx.accounts));
    }
    get(g) {
      const m = g.reduce((h, A) => h && h[A], this._accounts);
      if (m && m.toBase58) return m;
    }
    set(g, m) {
      let h = this._accounts;
      g.forEach((A, R) => {
        var b;
        R === g.length - 1 && (h[A] = m),
          (h[A] = (b = h[A]) !== null && b !== void 0 ? b : {}),
          (h = h[A]);
      });
    }
    resolveOptionalsHelper(g, m) {
      const h = {};
      for (const A of m) {
        const R = A.name,
          b = g[R];
        b !== void 0 &&
          ((0, u.isPartialAccounts)(b)
            ? (0, r.isCompositeAccounts)(A)
              ? (h[R] = this.resolveOptionalsHelper(b, A.accounts))
              : (h[R] = (0, u.flattenPartialAccounts)(b, !0))
            : b !== null
              ? (h[R] = (0, i.translateAddress)(b))
              : A.optional && (h[R] = this._programId));
      }
      return h;
    }
    async resolveCustom() {
      if (this._customResolver) {
        const { accounts: g, resolved: m } = await this._customResolver({
          args: this._args,
          accounts: this._accounts,
          provider: this._provider,
          programId: this._programId,
          idlIx: this._idlIx,
        });
        return (this._accounts = g), m;
      }
      return 0;
    }
    resolveEventCpi(g, m = []) {
      for (const h in g) {
        const A = g[h];
        (0, r.isCompositeAccounts)(A) && this.resolveEventCpi(A.accounts, [...m, A.name]);
        const R = +h + 1;
        if (R === g.length) return;
        const b = g[h].name,
          N = g[R].name;
        if (b === 'eventAuthority' && N === 'program') {
          const v = [...m, b],
            w = [...m, N];
          this.get(v) ||
            this.set(
              v,
              n.PublicKey.findProgramAddressSync(
                [ne.Buffer.from('__event_authority')],
                this._programId
              )[0]
            ),
            this.get(w) || this.set(w, this._programId);
          return;
        }
      }
    }
    resolveConst(g, m = []) {
      for (const h of g) {
        const A = h.name;
        if ((0, r.isCompositeAccounts)(h)) this.resolveConst(h.accounts, [...m, A]);
        else {
          const R = h;
          if ((R.signer || R.address) && !this.get([...m, A])) {
            if (R.signer) {
              if (!this._provider.wallet)
                throw new Error(
                  'This function requires the `Provider` interface implementor to have a `wallet` field.'
                );
              this.set([...m, A], this._provider.wallet.publicKey);
            }
            R.address && this.set([...m, A], (0, i.translateAddress)(R.address));
          }
        }
      }
    }
    async resolvePdasAndRelations(g, m = []) {
      let h = 0;
      for (const A of g) {
        const R = A.name;
        if ((0, r.isCompositeAccounts)(A))
          h += await this.resolvePdasAndRelations(A.accounts, [...m, R]);
        else {
          const b = A;
          if ((b.pda || b.relations) && !this.get([...m, R])) {
            h++;
            try {
              if (b.pda) {
                const N = await Promise.all(b.pda.seeds.map((x) => this.toBuffer(x, m)));
                if (N.some((x) => !x)) continue;
                const v = await this.parseProgramId(b, m),
                  [w] = n.PublicKey.findProgramAddressSync(N, v);
                this.set([...m, R], w);
              }
            } catch (N) {}
            try {
              if (b.relations) {
                const N = this.get([...m, b.relations[0]]);
                if (N) {
                  const v = await this._accountStore.fetchAccount({ publicKey: N });
                  this.set([...m, R], v[R]);
                }
              }
            } catch (N) {}
          }
        }
      }
      return h;
    }
    async parseProgramId(g, m = []) {
      var h;
      if (!(!((h = g.pda) === null || h === void 0) && h.program)) return this._programId;
      const A = await this.toBuffer(g.pda.program, m);
      if (!A) throw new Error('Program seed not resolved: '.concat(g.name));
      return new n.PublicKey(A);
    }
    async toBuffer(g, m = []) {
      switch (g.kind) {
        case 'const':
          return this.toBufferConst(g);
        case 'arg':
          return await this.toBufferArg(g);
        case 'account':
          return await this.toBufferAccount(g, m);
        default:
          throw new Error('Unexpected seed: '.concat(g));
      }
    }
    toBufferConst(g) {
      return this.toBufferValue('bytes', g.value);
    }
    async toBufferArg(g) {
      const [m, ...h] = g.path.split('.'),
        A = this._idlIx.args.findIndex((N) => N.name === m);
      if (A === -1) throw new Error('Unable to find argument for seed: '.concat(m));
      const R = h.reduce((N, v) => (N != null ? N : {})[v], this._args[A]);
      if (R === void 0) return;
      const b = this.getType(this._idlIx.args[A].type, h);
      return this.toBufferValue(b, R);
    }
    async toBufferAccount(g, m = []) {
      const [h, ...A] = g.path.split('.'),
        R = this.get([...m, h]);
      if (!R) return;
      if (!A.length) return this.toBufferValue('pubkey', R);
      if (!g.account)
        throw new Error('Seed account is required in order to resolve type: '.concat(g.path));
      let N = await this._accountStore.fetchAccount({ publicKey: R, name: g.account }),
        v = A;
      for (; v.length > 0; ) (N = N[v[0]]), (v = v.slice(1));
      if (N === void 0) return;
      const w = this.getType({ defined: { name: g.account } }, A);
      return this.toBufferValue(w, N);
    }
    toBufferValue(g, m) {
      switch (g) {
        case 'u8':
        case 'i8':
          return ne.Buffer.from([m]);
        case 'u16':
        case 'i16':
          return new e.default(m).toArrayLike(ne.Buffer, 'le', 2);
        case 'u32':
        case 'i32':
          return new e.default(m).toArrayLike(ne.Buffer, 'le', 4);
        case 'u64':
        case 'i64':
          return new e.default(m).toArrayLike(ne.Buffer, 'le', 8);
        case 'u128':
        case 'i128':
          return new e.default(m).toArrayLike(ne.Buffer, 'le', 16);
        case 'u256':
        case 'i256':
          return new e.default(m).toArrayLike(ne.Buffer, 'le', 32);
        case 'string':
          return ne.Buffer.from(m);
        case 'pubkey':
          return m.toBuffer();
        case 'bytes':
          return ne.Buffer.from(m);
        default:
          if (g != null && g.array) return ne.Buffer.from(m);
          throw new Error('Unexpected seed type: '.concat(g));
      }
    }
    getType(g, m = []) {
      var h;
      const A = (h = g == null ? void 0 : g.defined) === null || h === void 0 ? void 0 : h.name;
      if (A) {
        if (A === 'tokenAccount')
          switch (m.at(0)) {
            case 'mint':
            case 'owner':
              return 'pubkey';
            case 'amount':
            case 'delagatedAmount':
              return 'u64';
            default:
              throw new Error('Unknown token account path: '.concat(m));
          }
        const R = this._idlTypes.find((x) => x.name === A);
        if (!R) throw new Error('Type not found: '.concat(A));
        const [b, ...N] = m,
          w = R.type.fields.find((x) => x.name === b);
        if (!w) throw new Error('Field not found: '.concat(b));
        return this.getType(w.type, N);
      }
      return g;
    }
  }
  mn.AccountsResolver = f;
  class s {
    constructor(g, m, h) {
      (this._provider = g),
        (this._cache = new Map()),
        (this._idls = {}),
        (this._idls[h.toBase58()] = m);
    }
    async fetchAccount({ publicKey: g, name: m }) {
      const h = g.toBase58();
      if (!this._cache.has(h)) {
        const A = await this._provider.connection.getAccountInfo(g);
        if (A === null) throw new Error('Account not found: '.concat(h));
        if (m === 'tokenAccount') {
          const R = (0, o.decodeTokenAccount)(A.data);
          this._cache.set(h, R);
        } else {
          const R = await this.getAccountsNs(A.owner);
          if (R) {
            const b = Object.values(R)[0];
            if (b) {
              const N = b.coder.accounts.decodeAny(A.data);
              this._cache.set(h, N);
            }
          }
        }
      }
      return this._cache.get(h);
    }
    async getAccountsNs(g) {
      const m = g.toBase58();
      if (!this._idls[m]) {
        const h = await i.Program.fetchIdl(g, this._provider);
        if (h) {
          const A = new i.Program(h, this._provider);
          this._idls[m] = A.account;
        }
      }
      return this._idls[m];
    }
  }
  return mn;
}
var qc;
function gs() {
  if (qc) return yt;
  (qc = 1),
    Object.defineProperty(yt, '__esModule', { value: !0 }),
    (yt.MethodsBuilder =
      yt.flattenPartialAccounts =
      yt.isPartialAccounts =
      yt.MethodsBuilderFactory =
        void 0);
  const t = FO(),
    e = ze;
  class n {
    static build(d, f, s, _, g, m, h, A, R, b, N) {
      return (...v) => new i(v, _, g, m, h, A, d, f, s, R, b, N);
    }
  }
  yt.MethodsBuilderFactory = n;
  function r(u) {
    return typeof u == 'object' && u !== null && !('_bn' in u);
  }
  yt.isPartialAccounts = r;
  function o(u, d) {
    const f = {};
    for (const s in u) {
      const _ = u[s];
      if (_ === null) {
        if (d)
          throw new Error(
            'Failed to resolve optionals due to IDL type mismatch with input accounts!'
          );
        continue;
      }
      f[s] = r(_) ? o(_, !0) : (0, e.translateAddress)(_);
    }
    return f;
  }
  yt.flattenPartialAccounts = o;
  class i {
    constructor(d, f, s, _, g, m, h, A, R, b, N, v) {
      (this._args = d),
        (this._ixFn = f),
        (this._txFn = s),
        (this._rpcFn = _),
        (this._simulateFn = g),
        (this._viewFn = m),
        (this._accounts = {}),
        (this._remainingAccounts = []),
        (this._signers = []),
        (this._preInstructions = []),
        (this._postInstructions = []),
        (this._resolveAccounts = !0),
        (this._accountsResolver = new t.AccountsResolver(d, this._accounts, h, A, R, b, N, v));
    }
    args(d) {
      (this._args = d), this._accountsResolver.args(d);
    }
    accounts(d) {
      return this.accountsPartial(d);
    }
    accountsPartial(d) {
      return (this._resolveAccounts = !0), this._accountsResolver.resolveOptionals(d), this;
    }
    accountsStrict(d) {
      return (this._resolveAccounts = !1), this._accountsResolver.resolveOptionals(d), this;
    }
    signers(d) {
      return (this._signers = this._signers.concat(d)), this;
    }
    remainingAccounts(d) {
      return (this._remainingAccounts = this._remainingAccounts.concat(d)), this;
    }
    preInstructions(d, f = !1) {
      return (
        f
          ? (this._preInstructions = d.concat(this._preInstructions))
          : (this._preInstructions = this._preInstructions.concat(d)),
        this
      );
    }
    postInstructions(d) {
      return (this._postInstructions = this._postInstructions.concat(d)), this;
    }
    async pubkeys() {
      return this._resolveAccounts && (await this._accountsResolver.resolve()), this._accounts;
    }
    async rpc(d) {
      return (
        this._resolveAccounts && (await this._accountsResolver.resolve()),
        this._rpcFn(...this._args, {
          accounts: this._accounts,
          signers: this._signers,
          remainingAccounts: this._remainingAccounts,
          preInstructions: this._preInstructions,
          postInstructions: this._postInstructions,
          options: d,
        })
      );
    }
    async rpcAndKeys(d) {
      return { pubkeys: await this.pubkeys(), signature: await this.rpc(d) };
    }
    async view(d) {
      if ((this._resolveAccounts && (await this._accountsResolver.resolve()), !this._viewFn))
        throw new Error('Method does not support views');
      return this._viewFn(...this._args, {
        accounts: this._accounts,
        signers: this._signers,
        remainingAccounts: this._remainingAccounts,
        preInstructions: this._preInstructions,
        postInstructions: this._postInstructions,
        options: d,
      });
    }
    async simulate(d) {
      return (
        this._resolveAccounts && (await this._accountsResolver.resolve()),
        this._simulateFn(...this._args, {
          accounts: this._accounts,
          signers: this._signers,
          remainingAccounts: this._remainingAccounts,
          preInstructions: this._preInstructions,
          postInstructions: this._postInstructions,
          options: d,
        })
      );
    }
    async instruction() {
      return (
        this._resolveAccounts && (await this._accountsResolver.resolve()),
        this._ixFn(...this._args, {
          accounts: this._accounts,
          signers: this._signers,
          remainingAccounts: this._remainingAccounts,
          preInstructions: this._preInstructions,
          postInstructions: this._postInstructions,
        })
      );
    }
    async prepare() {
      return {
        instruction: await this.instruction(),
        pubkeys: await this.pubkeys(),
        signers: this._signers,
      };
    }
    async transaction() {
      return (
        this._resolveAccounts && (await this._accountsResolver.resolve()),
        this._txFn(...this._args, {
          accounts: this._accounts,
          signers: this._signers,
          remainingAccounts: this._remainingAccounts,
          preInstructions: this._preInstructions,
          postInstructions: this._postInstructions,
        })
      );
    }
  }
  return (yt.MethodsBuilder = i), yt;
}
var Hs = {};
Object.defineProperty(Hs, '__esModule', { value: !0 });
const KO = $t,
  VO = en;
class WO {
  static build(e, n, r, o) {
    const i = n.accounts.find((f) => f.writable),
      u = !!n.returns;
    return i || !u
      ? void 0
      : async (...f) => {
          let s = await r(...f);
          const _ = 'Program return: '.concat(e, ' ');
          let g = s.raw.find((R) => R.startsWith(_));
          if (!g) throw new Error('View expected return log');
          let m = (0, VO.decode)(g.slice(_.length)),
            h = n.returns;
          if (!h) throw new Error('View expected return type');
          return KO.IdlCoder.fieldLayout({ type: h }, o.types).decode(m);
        };
  }
}
Hs.default = WO;
var zc;
function Yc() {
  return (
    zc ||
      ((zc = 1),
      (function (t) {
        var e =
          (T && T.__importDefault) ||
          function (h) {
            return h && h.__esModule ? h : { default: h };
          };
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.MethodsBuilderFactory = t.AccountClient = void 0);
        const n = e(xs),
          r = e(Ls),
          o = e(Us),
          i = e(zn),
          u = e($s),
          d = ze,
          f = gs(),
          s = e(Hs);
        var _ = zn;
        Object.defineProperty(t, 'AccountClient', {
          enumerable: !0,
          get: function () {
            return _.AccountClient;
          },
        });
        var g = gs();
        Object.defineProperty(t, 'MethodsBuilderFactory', {
          enumerable: !0,
          get: function () {
            return g.MethodsBuilderFactory;
          },
        });
        class m {
          static build(A, R, b, N, v) {
            const w = {},
              x = {},
              G = {},
              F = {},
              Q = {},
              z = {},
              I = (0, d.parseIdlErrors)(A),
              y = A.accounts ? i.default.build(A, R, b, N) : {};
            return (
              A.instructions.forEach((P) => {
                const k = n.default.build(P, (L, X) => R.instruction.encode(L, X), b),
                  V = r.default.build(P, k),
                  C = o.default.build(P, V, I, N),
                  M = u.default.build(P, V, I, N, R, b, A),
                  W = s.default.build(b, P, M, A),
                  Y = f.MethodsBuilderFactory.build(
                    N,
                    b,
                    P,
                    k,
                    V,
                    C,
                    M,
                    W,
                    y,
                    A.types || [],
                    v == null ? void 0 : v(P)
                  ),
                  D = P.name;
                (x[D] = k), (G[D] = V), (w[D] = C), (F[D] = M), (Q[D] = Y), W && (z[D] = W);
              }),
              [w, x, G, y, F, Q, z]
            );
          }
        }
        t.default = m;
      })(jo)),
    jo
  );
}
var Xc;
function eo() {
  return (
    Xc ||
      ((Xc = 1),
      (function (t) {
        var e =
            (T && T.__createBinding) ||
            (Object.create
              ? function (h, A, R, b) {
                  b === void 0 && (b = R);
                  var N = Object.getOwnPropertyDescriptor(A, R);
                  (!N || ('get' in N ? !A.__esModule : N.writable || N.configurable)) &&
                    (N = {
                      enumerable: !0,
                      get: function () {
                        return A[R];
                      },
                    }),
                    Object.defineProperty(h, b, N);
                }
              : function (h, A, R, b) {
                  b === void 0 && (b = R), (h[b] = A[R]);
                }),
          n =
            (T && T.__exportStar) ||
            function (h, A) {
              for (var R in h)
                R !== 'default' && !Object.prototype.hasOwnProperty.call(A, R) && e(A, h, R);
            },
          r =
            (T && T.__importDefault) ||
            function (h) {
              return h && h.__esModule ? h : { default: h };
            };
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Program = void 0);
        const o = QA,
          i = Fi(),
          u = Le,
          d = Xi(),
          f = r(Yc()),
          s = ft,
          _ = nn,
          g = ze;
        n(ze, t), n(on, t), n(nn, t), n(Yc(), t);
        class m {
          get programId() {
            return this._programId;
          }
          get idl() {
            return this._idl;
          }
          get rawIdl() {
            return this._rawIdl;
          }
          get coder() {
            return this._coder;
          }
          get provider() {
            return this._provider;
          }
          constructor(A, R = (0, i.getProvider)(), b, N) {
            const v = (0, u.convertIdlToCamelCase)(A);
            (this._idl = v),
              (this._rawIdl = A),
              (this._provider = R),
              (this._programId = (0, g.translateAddress)(A.address)),
              (this._coder = b != null ? b : new d.BorshCoder(v)),
              (this._events = new _.EventManager(this._programId, R, this._coder));
            const [w, x, G, F, Q, z, I] = f.default.build(v, this._coder, this._programId, R, N);
            (this.rpc = w),
              (this.instruction = x),
              (this.transaction = G),
              (this.account = F),
              (this.simulate = Q),
              (this.methods = z),
              (this.views = I);
          }
          static async at(A, R) {
            const b = (0, g.translateAddress)(A),
              N = await m.fetchIdl(b, R);
            if (!N) throw new Error('IDL not found for program: '.concat(A.toString()));
            return new m(N, R);
          }
          static async fetchIdl(A, R) {
            R = R != null ? R : (0, i.getProvider)();
            const b = (0, g.translateAddress)(A),
              N = await (0, u.idlAddress)(b),
              v = await R.connection.getAccountInfo(N);
            if (!v) return null;
            let w = (0, u.decodeIdlAccount)(v.data.slice(8));
            const x = (0, o.inflate)(w.data);
            return JSON.parse(s.utf8.decode(x));
          }
          addEventListener(A, R) {
            return this._events.addEventListener(A, R);
          }
          async removeEventListener(A) {
            return await this._events.removeEventListener(A);
          }
        }
        t.Program = m;
      })($o)),
    $o
  );
}
var to = {},
  tp = {};
(function (t) {
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.IDL = t.coder = t.program = t.SYSTEM_PROGRAM_ID = void 0);
  const e = me,
    n = eo(),
    r = qr;
  t.SYSTEM_PROGRAM_ID = new e.PublicKey('11111111111111111111111111111111');
  function o(u) {
    return new n.Program(t.IDL, u, i());
  }
  t.program = o;
  function i() {
    return new r.SystemCoder(t.IDL);
  }
  (t.coder = i),
    (t.IDL = {
      address: '11111111111111111111111111111111',
      metadata: { name: 'systemProgram', version: '0.1.0', spec: '0.1.0' },
      instructions: [
        {
          name: 'advanceNonceAccount',
          discriminator: [4, 0, 0, 0],
          accounts: [
            { name: 'nonce', writable: !0 },
            { name: 'recentBlockhashes' },
            { name: 'authorized', signer: !0 },
          ],
          args: [{ name: 'authorized', type: 'pubkey' }],
        },
        {
          name: 'allocate',
          discriminator: [8, 0, 0, 0],
          accounts: [{ name: 'pubkey', writable: !0, signer: !0 }],
          args: [{ name: 'space', type: 'u64' }],
        },
        {
          name: 'allocateWithSeed',
          discriminator: [9, 0, 0, 0],
          accounts: [
            { name: 'account', writable: !0 },
            { name: 'base', signer: !0 },
          ],
          args: [
            { name: 'base', type: 'pubkey' },
            { name: 'seed', type: 'string' },
            { name: 'space', type: 'u64' },
            { name: 'owner', type: 'pubkey' },
          ],
        },
        {
          name: 'assign',
          discriminator: [1, 0, 0, 0],
          accounts: [{ name: 'pubkey', writable: !0, signer: !0 }],
          args: [{ name: 'owner', type: 'pubkey' }],
        },
        {
          name: 'assignWithSeed',
          discriminator: [10, 0, 0, 0],
          accounts: [
            { name: 'account', writable: !0 },
            { name: 'base', signer: !0 },
          ],
          args: [
            { name: 'base', type: 'pubkey' },
            { name: 'seed', type: 'string' },
            { name: 'owner', type: 'pubkey' },
          ],
        },
        {
          name: 'authorizeNonceAccount',
          discriminator: [7, 0, 0, 0],
          accounts: [
            { name: 'nonce', writable: !0 },
            { name: 'authorized', signer: !0 },
          ],
          args: [{ name: 'authorized', type: 'pubkey' }],
        },
        {
          name: 'createAccount',
          discriminator: [0, 0, 0, 0],
          accounts: [
            { name: 'from', writable: !0, signer: !0 },
            { name: 'to', writable: !0, signer: !0 },
          ],
          args: [
            { name: 'lamports', type: 'u64' },
            { name: 'space', type: 'u64' },
            { name: 'owner', type: 'pubkey' },
          ],
        },
        {
          name: 'createAccountWithSeed',
          discriminator: [3, 0, 0, 0],
          accounts: [
            { name: 'from', writable: !0, signer: !0 },
            { name: 'to', writable: !0 },
            { name: 'base', signer: !0 },
          ],
          args: [
            { name: 'base', type: 'pubkey' },
            { name: 'seed', type: 'string' },
            { name: 'lamports', type: 'u64' },
            { name: 'space', type: 'u64' },
            { name: 'owner', type: 'pubkey' },
          ],
        },
        {
          name: 'initializeNonceAccount',
          discriminator: [6, 0, 0, 0],
          accounts: [
            { name: 'nonce', writable: !0, signer: !0 },
            { name: 'recentBlockhashes' },
            { name: 'rent', address: 'SysvarRent111111111111111111111111111111111' },
          ],
          args: [{ name: 'authorized', type: 'pubkey' }],
        },
        {
          name: 'transfer',
          discriminator: [2, 0, 0, 0],
          accounts: [
            { name: 'from', writable: !0, signer: !0 },
            { name: 'to', writable: !0 },
          ],
          args: [{ name: 'lamports', type: 'u64' }],
        },
        {
          name: 'transferWithSeed',
          discriminator: [11, 0, 0, 0],
          accounts: [
            { name: 'from', writable: !0 },
            { name: 'base', signer: !0 },
            { name: 'to', writable: !0 },
          ],
          args: [
            { name: 'lamports', type: 'u64' },
            { name: 'seed', type: 'string' },
            { name: 'owner', type: 'pubkey' },
          ],
        },
        {
          name: 'withdrawNonceAccount',
          discriminator: [5, 0, 0, 0],
          accounts: [
            { name: 'nonce', writable: !0 },
            { name: 'to', writable: !0 },
            { name: 'recentBlockhashes' },
            { name: 'rent', address: 'SysvarRent111111111111111111111111111111111' },
            { name: 'authorized', signer: !0 },
          ],
          args: [{ name: 'lamports', type: 'u64' }],
        },
      ],
      accounts: [{ name: 'nonce', discriminator: [] }],
      types: [
        {
          name: 'feeCalculator',
          type: { kind: 'struct', fields: [{ name: 'lamportsPerSignature', type: 'u64' }] },
        },
        {
          name: 'nonce',
          type: {
            kind: 'struct',
            fields: [
              { name: 'version', type: 'u32' },
              { name: 'state', type: 'u32' },
              { name: 'authorizedPubkey', type: 'pubkey' },
              { name: 'nonce', type: 'pubkey' },
              { name: 'feeCalculator', type: { defined: { name: 'feeCalculator' } } },
            ],
          },
        },
      ],
    });
})(tp);
Object.defineProperty(to, '__esModule', { value: !0 });
to.Native = void 0;
const qO = tp;
class zO {
  static system(e) {
    return (0, qO.program)(e);
  }
}
to.Native = zO;
var Ti = {},
  Ko,
  Jc;
function YO() {
  return (
    Jc ||
      ((Jc = 1),
      (Ko = (function () {
        function t(r, o) {
          function i() {
            this.constructor = r;
          }
          (i.prototype = o.prototype), (r.prototype = new i());
        }
        function e(r, o, i, u, d, f) {
          (this.message = r),
            (this.expected = o),
            (this.found = i),
            (this.offset = u),
            (this.line = d),
            (this.column = f),
            (this.name = 'SyntaxError');
        }
        t(e, Error);
        function n(r) {
          var o = arguments.length > 1 ? arguments[1] : {},
            i = {},
            u = { start: Zu },
            d = Zu,
            f = function () {
              return Ac;
            },
            s = i,
            _ = '#',
            g = { type: 'literal', value: '#', description: '"#"' },
            m = void 0,
            h = { type: 'any', description: 'any character' },
            A = '[',
            R = { type: 'literal', value: '[', description: '"["' },
            b = ']',
            N = { type: 'literal', value: ']', description: '"]"' },
            v = function (a) {
              Co(Ve('ObjectPath', a, Fe, Ke));
            },
            w = function (a) {
              Co(Ve('ArrayPath', a, Fe, Ke));
            },
            x = function (a, p) {
              return a.concat(p);
            },
            G = function (a) {
              return [a];
            },
            F = function (a) {
              return a;
            },
            Q = '.',
            z = { type: 'literal', value: '.', description: '"."' },
            I = '=',
            y = { type: 'literal', value: '=', description: '"="' },
            P = function (a, p) {
              Co(Ve('Assign', p, Fe, Ke, a));
            },
            k = function (a) {
              return a.join('');
            },
            V = function (a) {
              return a.value;
            },
            C = '"""',
            M = { type: 'literal', value: '"""', description: '"\\"\\"\\""' },
            W = null,
            Y = function (a) {
              return Ve('String', a.join(''), Fe, Ke);
            },
            D = '"',
            L = { type: 'literal', value: '"', description: '"\\""' },
            X = "'''",
            oe = { type: 'literal', value: "'''", description: "\"'''\"" },
            ae = "'",
            ce = { type: 'literal', value: "'", description: '"\'"' },
            pe = function (a) {
              return a;
            },
            he = function (a) {
              return a;
            },
            _e = '\\',
            Re = { type: 'literal', value: '\\', description: '"\\\\"' },
            Te = function () {
              return '';
            },
            Xe = 'e',
            Ot = { type: 'literal', value: 'e', description: '"e"' },
            It = 'E',
            Sn = { type: 'literal', value: 'E', description: '"E"' },
            vn = function (a, p) {
              return Ve('Float', parseFloat(a + 'e' + p), Fe, Ke);
            },
            bt = function (a) {
              return Ve('Float', parseFloat(a), Fe, Ke);
            },
            sn = '+',
            rr = { type: 'literal', value: '+', description: '"+"' },
            Qr = function (a) {
              return a.join('');
            },
            an = '-',
            Ht = { type: 'literal', value: '-', description: '"-"' },
            un = function (a) {
              return '-' + a.join('');
            },
            co = function (a) {
              return Ve('Integer', parseInt(a, 10), Fe, Ke);
            },
            Zr = 'true',
            lo = { type: 'literal', value: 'true', description: '"true"' },
            fo = function () {
              return Ve('Boolean', !0, Fe, Ke);
            },
            ei = 'false',
            po = { type: 'literal', value: 'false', description: '"false"' },
            _o = function () {
              return Ve('Boolean', !1, Fe, Ke);
            },
            mo = function () {
              return Ve('Array', [], Fe, Ke);
            },
            ho = function (a) {
              return Ve('Array', a ? [a] : [], Fe, Ke);
            },
            go = function (a) {
              return Ve('Array', a, Fe, Ke);
            },
            Ao = function (a, p) {
              return Ve('Array', a.concat(p), Fe, Ke);
            },
            ti = function (a) {
              return a;
            },
            ni = ',',
            ri = { type: 'literal', value: ',', description: '","' },
            Oo = '{',
            ii = { type: 'literal', value: '{', description: '"{"' },
            Ro = '}',
            oi = { type: 'literal', value: '}', description: '"}"' },
            yo = function (a) {
              return Ve('InlineTable', a, Fe, Ke);
            },
            si = function (a, p) {
              return Ve('InlineTableValue', p, Fe, Ke, a);
            },
            To = function (a) {
              return '.' + a;
            },
            Gt = function (a) {
              return a.join('');
            },
            cn = ':',
            ln = { type: 'literal', value: ':', description: '":"' },
            ai = function (a) {
              return a.join('');
            },
            ui = 'T',
            B = { type: 'literal', value: 'T', description: '"T"' },
            H = 'Z',
            K = { type: 'literal', value: 'Z', description: '"Z"' },
            re = function (a, p) {
              return Ve('Date', new Date(a + 'T' + p + 'Z'), Fe, Ke);
            },
            le = function (a, p) {
              return Ve('Date', new Date(a + 'T' + p), Fe, Ke);
            },
            Ee = /^[ \t]/,
            Je = { type: 'class', value: '[ \\t]', description: '[ \\t]' },
            Ft = '\n',
            dn = { type: 'literal', value: '\n', description: '"\\n"' },
            fn = '\r',
            wp = { type: 'literal', value: '\r', description: '"\\r"' },
            Ip = /^[0-9a-f]/i,
            bp = { type: 'class', value: '[0-9a-f]i', description: '[0-9a-f]i' },
            Np = /^[0-9]/,
            Cp = { type: 'class', value: '[0-9]', description: '[0-9]' },
            Sp = '_',
            vp = { type: 'literal', value: '_', description: '"_"' },
            Pp = function () {
              return '';
            },
            Mp = /^[A-Za-z0-9_\-]/,
            kp = { type: 'class', value: '[A-Za-z0-9_\\-]', description: '[A-Za-z0-9_\\-]' },
            Dp = function (a) {
              return a.join('');
            },
            Fu = '\\"',
            Bp = { type: 'literal', value: '\\"', description: '"\\\\\\""' },
            xp = function () {
              return '"';
            },
            Ku = '\\\\',
            Lp = { type: 'literal', value: '\\\\', description: '"\\\\\\\\"' },
            Up = function () {
              return '\\';
            },
            Vu = '\\b',
            $p = { type: 'literal', value: '\\b', description: '"\\\\b"' },
            jp = function () {
              return '\b';
            },
            Wu = '\\t',
            Hp = { type: 'literal', value: '\\t', description: '"\\\\t"' },
            Gp = function () {
              return '	';
            },
            qu = '\\n',
            Fp = { type: 'literal', value: '\\n', description: '"\\\\n"' },
            Kp = function () {
              return '\n';
            },
            zu = '\\f',
            Vp = { type: 'literal', value: '\\f', description: '"\\\\f"' },
            Wp = function () {
              return '\f';
            },
            Yu = '\\r',
            qp = { type: 'literal', value: '\\r', description: '"\\\\r"' },
            zp = function () {
              return '\r';
            },
            Xu = '\\U',
            Yp = { type: 'literal', value: '\\U', description: '"\\\\U"' },
            Ju = function (a) {
              return h_(a.join(''));
            },
            Qu = '\\u',
            Xp = { type: 'literal', value: '\\u', description: '"\\\\u"' },
            l = 0,
            fe = 0,
            ir = 0,
            Eo = { line: 1, column: 1, seenCR: !1 },
            ci = 0,
            wo = [],
            Z = 0,
            ee = {},
            li;
          if ('startRule' in o) {
            if (!(o.startRule in u))
              throw new Error('Can\'t start parsing from rule "' + o.startRule + '".');
            d = u[o.startRule];
          }
          function Fe() {
            return Io(fe).line;
          }
          function Ke() {
            return Io(fe).column;
          }
          function Io(a) {
            function p(O, E, S) {
              var U, q;
              for (U = E; U < S; U++)
                (q = r.charAt(U)),
                  q === '\n'
                    ? (O.seenCR || O.line++, (O.column = 1), (O.seenCR = !1))
                    : q === '\r' || q === '\u2028' || q === '\u2029'
                      ? (O.line++, (O.column = 1), (O.seenCR = !0))
                      : (O.column++, (O.seenCR = !1));
            }
            return (
              ir !== a &&
                (ir > a && ((ir = 0), (Eo = { line: 1, column: 1, seenCR: !1 })),
                p(Eo, ir, a),
                (ir = a)),
              Eo
            );
          }
          function ie(a) {
            l < ci || (l > ci && ((ci = l), (wo = [])), wo.push(a));
          }
          function Jp(a, p, O) {
            function E(ue) {
              var ge = 1;
              for (
                ue.sort(function (be, we) {
                  return be.description < we.description
                    ? -1
                    : be.description > we.description
                      ? 1
                      : 0;
                });
                ge < ue.length;

              )
                ue[ge - 1] === ue[ge] ? ue.splice(ge, 1) : ge++;
            }
            function S(ue, ge) {
              function be(Mn) {
                function Kt(et) {
                  return et.charCodeAt(0).toString(16).toUpperCase();
                }
                return Mn.replace(/\\/g, '\\\\')
                  .replace(/"/g, '\\"')
                  .replace(/\x08/g, '\\b')
                  .replace(/\t/g, '\\t')
                  .replace(/\n/g, '\\n')
                  .replace(/\f/g, '\\f')
                  .replace(/\r/g, '\\r')
                  .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (et) {
                    return '\\x0' + Kt(et);
                  })
                  .replace(/[\x10-\x1F\x80-\xFF]/g, function (et) {
                    return '\\x' + Kt(et);
                  })
                  .replace(/[\u0180-\u0FFF]/g, function (et) {
                    return '\\u0' + Kt(et);
                  })
                  .replace(/[\u1080-\uFFFF]/g, function (et) {
                    return '\\u' + Kt(et);
                  });
              }
              var we = new Array(ue.length),
                Me,
                Be,
                Ze;
              for (Ze = 0; Ze < ue.length; Ze++) we[Ze] = ue[Ze].description;
              return (
                (Me =
                  ue.length > 1 ? we.slice(0, -1).join(', ') + ' or ' + we[ue.length - 1] : we[0]),
                (Be = ge ? '"' + be(ge) + '"' : 'end of input'),
                'Expected ' + Me + ' but ' + Be + ' found.'
              );
            }
            var U = Io(O),
              q = O < r.length ? r.charAt(O) : null;
            return p !== null && E(p), new e(S(p, q), p, q, O, U.line, U.column);
          }
          function Zu() {
            var a,
              p,
              O,
              E = l * 49 + 0,
              S = ee[E];
            if (S) return (l = S.nextPos), S.result;
            for (a = l, p = [], O = ec(); O !== i; ) p.push(O), (O = ec());
            return (
              p !== i && ((fe = a), (p = f())), (a = p), (ee[E] = { nextPos: l, result: a }), a
            );
          }
          function ec() {
            var a,
              p,
              O,
              E,
              S,
              U,
              q,
              ue = l * 49 + 1,
              ge = ee[ue];
            if (ge) return (l = ge.nextPos), ge.result;
            for (a = l, p = [], O = de(); O !== i; ) p.push(O), (O = de());
            if (p !== i)
              if (((O = Qp()), O !== i)) {
                for (E = [], S = de(); S !== i; ) E.push(S), (S = de());
                if (E !== i) {
                  for (S = [], U = di(); U !== i; ) S.push(U), (U = di());
                  if (S !== i) {
                    if (((U = []), (q = at()), q !== i)) for (; q !== i; ) U.push(q), (q = at());
                    else U = s;
                    U === i && (U = pi()),
                      U !== i ? ((p = [p, O, E, S, U]), (a = p)) : ((l = a), (a = s));
                  } else (l = a), (a = s);
                } else (l = a), (a = s);
              } else (l = a), (a = s);
            else (l = a), (a = s);
            if (a === i) {
              if (((a = l), (p = []), (O = de()), O !== i)) for (; O !== i; ) p.push(O), (O = de());
              else p = s;
              if (p !== i) {
                if (((O = []), (E = at()), E !== i)) for (; E !== i; ) O.push(E), (E = at());
                else O = s;
                O === i && (O = pi()), O !== i ? ((p = [p, O]), (a = p)) : ((l = a), (a = s));
              } else (l = a), (a = s);
              a === i && (a = at());
            }
            return (ee[ue] = { nextPos: l, result: a }), a;
          }
          function Qp() {
            var a,
              p = l * 49 + 2,
              O = ee[p];
            return O
              ? ((l = O.nextPos), O.result)
              : ((a = di()),
                a === i && ((a = Zp()), a === i && ((a = e_()), a === i && (a = t_()))),
                (ee[p] = { nextPos: l, result: a }),
                a);
          }
          function di() {
            var a,
              p,
              O,
              E,
              S,
              U,
              q = l * 49 + 3,
              ue = ee[q];
            if (ue) return (l = ue.nextPos), ue.result;
            if (
              ((a = l),
              r.charCodeAt(l) === 35 ? ((p = _), l++) : ((p = i), Z === 0 && ie(g)),
              p !== i)
            ) {
              for (
                O = [],
                  E = l,
                  S = l,
                  Z++,
                  U = at(),
                  U === i && (U = pi()),
                  Z--,
                  U === i ? (S = m) : ((l = S), (S = s)),
                  S !== i
                    ? (r.length > l ? ((U = r.charAt(l)), l++) : ((U = i), Z === 0 && ie(h)),
                      U !== i ? ((S = [S, U]), (E = S)) : ((l = E), (E = s)))
                    : ((l = E), (E = s));
                E !== i;

              )
                O.push(E),
                  (E = l),
                  (S = l),
                  Z++,
                  (U = at()),
                  U === i && (U = pi()),
                  Z--,
                  U === i ? (S = m) : ((l = S), (S = s)),
                  S !== i
                    ? (r.length > l ? ((U = r.charAt(l)), l++) : ((U = i), Z === 0 && ie(h)),
                      U !== i ? ((S = [S, U]), (E = S)) : ((l = E), (E = s)))
                    : ((l = E), (E = s));
              O !== i ? ((p = [p, O]), (a = p)) : ((l = a), (a = s));
            } else (l = a), (a = s);
            return (ee[q] = { nextPos: l, result: a }), a;
          }
          function Zp() {
            var a,
              p,
              O,
              E,
              S,
              U,
              q = l * 49 + 4,
              ue = ee[q];
            if (ue) return (l = ue.nextPos), ue.result;
            if (
              ((a = l),
              r.charCodeAt(l) === 91 ? ((p = A), l++) : ((p = i), Z === 0 && ie(R)),
              p !== i)
            ) {
              for (O = [], E = de(); E !== i; ) O.push(E), (E = de());
              if (O !== i)
                if (((E = tc()), E !== i)) {
                  for (S = [], U = de(); U !== i; ) S.push(U), (U = de());
                  S !== i
                    ? (r.charCodeAt(l) === 93 ? ((U = b), l++) : ((U = i), Z === 0 && ie(N)),
                      U !== i ? ((fe = a), (p = v(E)), (a = p)) : ((l = a), (a = s)))
                    : ((l = a), (a = s));
                } else (l = a), (a = s);
              else (l = a), (a = s);
            } else (l = a), (a = s);
            return (ee[q] = { nextPos: l, result: a }), a;
          }
          function e_() {
            var a,
              p,
              O,
              E,
              S,
              U,
              q,
              ue,
              ge = l * 49 + 5,
              be = ee[ge];
            if (be) return (l = be.nextPos), be.result;
            if (
              ((a = l),
              r.charCodeAt(l) === 91 ? ((p = A), l++) : ((p = i), Z === 0 && ie(R)),
              p !== i)
            )
              if (
                (r.charCodeAt(l) === 91 ? ((O = A), l++) : ((O = i), Z === 0 && ie(R)), O !== i)
              ) {
                for (E = [], S = de(); S !== i; ) E.push(S), (S = de());
                if (E !== i)
                  if (((S = tc()), S !== i)) {
                    for (U = [], q = de(); q !== i; ) U.push(q), (q = de());
                    U !== i
                      ? (r.charCodeAt(l) === 93 ? ((q = b), l++) : ((q = i), Z === 0 && ie(N)),
                        q !== i
                          ? (r.charCodeAt(l) === 93
                              ? ((ue = b), l++)
                              : ((ue = i), Z === 0 && ie(N)),
                            ue !== i ? ((fe = a), (p = w(S)), (a = p)) : ((l = a), (a = s)))
                          : ((l = a), (a = s)))
                      : ((l = a), (a = s));
                  } else (l = a), (a = s);
                else (l = a), (a = s);
              } else (l = a), (a = s);
            else (l = a), (a = s);
            return (ee[ge] = { nextPos: l, result: a }), a;
          }
          function tc() {
            var a,
              p,
              O,
              E = l * 49 + 6,
              S = ee[E];
            if (S) return (l = S.nextPos), S.result;
            if (((a = l), (p = []), (O = rc()), O !== i)) for (; O !== i; ) p.push(O), (O = rc());
            else p = s;
            return (
              p !== i
                ? ((O = nc()), O !== i ? ((fe = a), (p = x(p, O)), (a = p)) : ((l = a), (a = s)))
                : ((l = a), (a = s)),
              a === i && ((a = l), (p = nc()), p !== i && ((fe = a), (p = G(p))), (a = p)),
              (ee[E] = { nextPos: l, result: a }),
              a
            );
          }
          function nc() {
            var a,
              p,
              O,
              E,
              S,
              U = l * 49 + 7,
              q = ee[U];
            if (q) return (l = q.nextPos), q.result;
            for (a = l, p = [], O = de(); O !== i; ) p.push(O), (O = de());
            if (p !== i)
              if (((O = or()), O !== i)) {
                for (E = [], S = de(); S !== i; ) E.push(S), (S = de());
                E !== i ? ((fe = a), (p = F(O)), (a = p)) : ((l = a), (a = s));
              } else (l = a), (a = s);
            else (l = a), (a = s);
            if (a === i) {
              for (a = l, p = [], O = de(); O !== i; ) p.push(O), (O = de());
              if (p !== i)
                if (((O = bo()), O !== i)) {
                  for (E = [], S = de(); S !== i; ) E.push(S), (S = de());
                  E !== i ? ((fe = a), (p = F(O)), (a = p)) : ((l = a), (a = s));
                } else (l = a), (a = s);
              else (l = a), (a = s);
            }
            return (ee[U] = { nextPos: l, result: a }), a;
          }
          function rc() {
            var a,
              p,
              O,
              E,
              S,
              U,
              q,
              ue = l * 49 + 8,
              ge = ee[ue];
            if (ge) return (l = ge.nextPos), ge.result;
            for (a = l, p = [], O = de(); O !== i; ) p.push(O), (O = de());
            if (p !== i)
              if (((O = or()), O !== i)) {
                for (E = [], S = de(); S !== i; ) E.push(S), (S = de());
                if (E !== i)
                  if (
                    (r.charCodeAt(l) === 46 ? ((S = Q), l++) : ((S = i), Z === 0 && ie(z)), S !== i)
                  ) {
                    for (U = [], q = de(); q !== i; ) U.push(q), (q = de());
                    U !== i ? ((fe = a), (p = F(O)), (a = p)) : ((l = a), (a = s));
                  } else (l = a), (a = s);
                else (l = a), (a = s);
              } else (l = a), (a = s);
            else (l = a), (a = s);
            if (a === i) {
              for (a = l, p = [], O = de(); O !== i; ) p.push(O), (O = de());
              if (p !== i)
                if (((O = bo()), O !== i)) {
                  for (E = [], S = de(); S !== i; ) E.push(S), (S = de());
                  if (E !== i)
                    if (
                      (r.charCodeAt(l) === 46 ? ((S = Q), l++) : ((S = i), Z === 0 && ie(z)),
                      S !== i)
                    ) {
                      for (U = [], q = de(); q !== i; ) U.push(q), (q = de());
                      U !== i ? ((fe = a), (p = F(O)), (a = p)) : ((l = a), (a = s));
                    } else (l = a), (a = s);
                  else (l = a), (a = s);
                } else (l = a), (a = s);
              else (l = a), (a = s);
            }
            return (ee[ue] = { nextPos: l, result: a }), a;
          }
          function t_() {
            var a,
              p,
              O,
              E,
              S,
              U,
              q = l * 49 + 9,
              ue = ee[q];
            if (ue) return (l = ue.nextPos), ue.result;
            if (((a = l), (p = or()), p !== i)) {
              for (O = [], E = de(); E !== i; ) O.push(E), (E = de());
              if (O !== i)
                if (
                  (r.charCodeAt(l) === 61 ? ((E = I), l++) : ((E = i), Z === 0 && ie(y)), E !== i)
                ) {
                  for (S = [], U = de(); U !== i; ) S.push(U), (U = de());
                  S !== i
                    ? ((U = Pn()),
                      U !== i ? ((fe = a), (p = P(p, U)), (a = p)) : ((l = a), (a = s)))
                    : ((l = a), (a = s));
                } else (l = a), (a = s);
              else (l = a), (a = s);
            } else (l = a), (a = s);
            if (a === i)
              if (((a = l), (p = bo()), p !== i)) {
                for (O = [], E = de(); E !== i; ) O.push(E), (E = de());
                if (O !== i)
                  if (
                    (r.charCodeAt(l) === 61 ? ((E = I), l++) : ((E = i), Z === 0 && ie(y)), E !== i)
                  ) {
                    for (S = [], U = de(); U !== i; ) S.push(U), (U = de());
                    S !== i
                      ? ((U = Pn()),
                        U !== i ? ((fe = a), (p = P(p, U)), (a = p)) : ((l = a), (a = s)))
                      : ((l = a), (a = s));
                  } else (l = a), (a = s);
                else (l = a), (a = s);
              } else (l = a), (a = s);
            return (ee[q] = { nextPos: l, result: a }), a;
          }
          function or() {
            var a,
              p,
              O,
              E = l * 49 + 10,
              S = ee[E];
            if (S) return (l = S.nextPos), S.result;
            if (((a = l), (p = []), (O = hc()), O !== i)) for (; O !== i; ) p.push(O), (O = hc());
            else p = s;
            return (
              p !== i && ((fe = a), (p = k(p))), (a = p), (ee[E] = { nextPos: l, result: a }), a
            );
          }
          function bo() {
            var a,
              p,
              O = l * 49 + 11,
              E = ee[O];
            return E
              ? ((l = E.nextPos), E.result)
              : ((a = l),
                (p = ic()),
                p !== i && ((fe = a), (p = V(p))),
                (a = p),
                a === i && ((a = l), (p = oc()), p !== i && ((fe = a), (p = V(p))), (a = p)),
                (ee[O] = { nextPos: l, result: a }),
                a);
          }
          function Pn() {
            var a,
              p = l * 49 + 12,
              O = ee[p];
            return O
              ? ((l = O.nextPos), O.result)
              : ((a = n_()),
                a === i &&
                  ((a = p_()),
                  a === i &&
                    ((a = s_()),
                    a === i &&
                      ((a = a_()),
                      a === i && ((a = u_()), a === i && ((a = c_()), a === i && (a = l_())))))),
                (ee[p] = { nextPos: l, result: a }),
                a);
          }
          function n_() {
            var a,
              p = l * 49 + 13,
              O = ee[p];
            return O
              ? ((l = O.nextPos), O.result)
              : ((a = r_()),
                a === i && ((a = ic()), a === i && ((a = i_()), a === i && (a = oc()))),
                (ee[p] = { nextPos: l, result: a }),
                a);
          }
          function r_() {
            var a,
              p,
              O,
              E,
              S,
              U = l * 49 + 14,
              q = ee[U];
            if (q) return (l = q.nextPos), q.result;
            if (
              ((a = l),
              r.substr(l, 3) === C ? ((p = C), (l += 3)) : ((p = i), Z === 0 && ie(M)),
              p !== i)
            )
              if (((O = at()), O === i && (O = W), O !== i)) {
                for (E = [], S = uc(); S !== i; ) E.push(S), (S = uc());
                E !== i
                  ? (r.substr(l, 3) === C ? ((S = C), (l += 3)) : ((S = i), Z === 0 && ie(M)),
                    S !== i ? ((fe = a), (p = Y(E)), (a = p)) : ((l = a), (a = s)))
                  : ((l = a), (a = s));
              } else (l = a), (a = s);
            else (l = a), (a = s);
            return (ee[U] = { nextPos: l, result: a }), a;
          }
          function ic() {
            var a,
              p,
              O,
              E,
              S = l * 49 + 15,
              U = ee[S];
            if (U) return (l = U.nextPos), U.result;
            if (
              ((a = l),
              r.charCodeAt(l) === 34 ? ((p = D), l++) : ((p = i), Z === 0 && ie(L)),
              p !== i)
            ) {
              for (O = [], E = sc(); E !== i; ) O.push(E), (E = sc());
              O !== i
                ? (r.charCodeAt(l) === 34 ? ((E = D), l++) : ((E = i), Z === 0 && ie(L)),
                  E !== i ? ((fe = a), (p = Y(O)), (a = p)) : ((l = a), (a = s)))
                : ((l = a), (a = s));
            } else (l = a), (a = s);
            return (ee[S] = { nextPos: l, result: a }), a;
          }
          function i_() {
            var a,
              p,
              O,
              E,
              S,
              U = l * 49 + 16,
              q = ee[U];
            if (q) return (l = q.nextPos), q.result;
            if (
              ((a = l),
              r.substr(l, 3) === X ? ((p = X), (l += 3)) : ((p = i), Z === 0 && ie(oe)),
              p !== i)
            )
              if (((O = at()), O === i && (O = W), O !== i)) {
                for (E = [], S = cc(); S !== i; ) E.push(S), (S = cc());
                E !== i
                  ? (r.substr(l, 3) === X ? ((S = X), (l += 3)) : ((S = i), Z === 0 && ie(oe)),
                    S !== i ? ((fe = a), (p = Y(E)), (a = p)) : ((l = a), (a = s)))
                  : ((l = a), (a = s));
              } else (l = a), (a = s);
            else (l = a), (a = s);
            return (ee[U] = { nextPos: l, result: a }), a;
          }
          function oc() {
            var a,
              p,
              O,
              E,
              S = l * 49 + 17,
              U = ee[S];
            if (U) return (l = U.nextPos), U.result;
            if (
              ((a = l),
              r.charCodeAt(l) === 39 ? ((p = ae), l++) : ((p = i), Z === 0 && ie(ce)),
              p !== i)
            ) {
              for (O = [], E = ac(); E !== i; ) O.push(E), (E = ac());
              O !== i
                ? (r.charCodeAt(l) === 39 ? ((E = ae), l++) : ((E = i), Z === 0 && ie(ce)),
                  E !== i ? ((fe = a), (p = Y(O)), (a = p)) : ((l = a), (a = s)))
                : ((l = a), (a = s));
            } else (l = a), (a = s);
            return (ee[S] = { nextPos: l, result: a }), a;
          }
          function sc() {
            var a,
              p,
              O,
              E = l * 49 + 18,
              S = ee[E];
            return S
              ? ((l = S.nextPos), S.result)
              : ((a = gc()),
                a === i &&
                  ((a = l),
                  (p = l),
                  Z++,
                  r.charCodeAt(l) === 34 ? ((O = D), l++) : ((O = i), Z === 0 && ie(L)),
                  Z--,
                  O === i ? (p = m) : ((l = p), (p = s)),
                  p !== i
                    ? (r.length > l ? ((O = r.charAt(l)), l++) : ((O = i), Z === 0 && ie(h)),
                      O !== i ? ((fe = a), (p = pe(O)), (a = p)) : ((l = a), (a = s)))
                    : ((l = a), (a = s))),
                (ee[E] = { nextPos: l, result: a }),
                a);
          }
          function ac() {
            var a,
              p,
              O,
              E = l * 49 + 19,
              S = ee[E];
            return S
              ? ((l = S.nextPos), S.result)
              : ((a = l),
                (p = l),
                Z++,
                r.charCodeAt(l) === 39 ? ((O = ae), l++) : ((O = i), Z === 0 && ie(ce)),
                Z--,
                O === i ? (p = m) : ((l = p), (p = s)),
                p !== i
                  ? (r.length > l ? ((O = r.charAt(l)), l++) : ((O = i), Z === 0 && ie(h)),
                    O !== i ? ((fe = a), (p = pe(O)), (a = p)) : ((l = a), (a = s)))
                  : ((l = a), (a = s)),
                (ee[E] = { nextPos: l, result: a }),
                a);
          }
          function uc() {
            var a,
              p,
              O,
              E = l * 49 + 20,
              S = ee[E];
            return S
              ? ((l = S.nextPos), S.result)
              : ((a = gc()),
                a === i &&
                  ((a = o_()),
                  a === i &&
                    ((a = l),
                    (p = l),
                    Z++,
                    r.substr(l, 3) === C ? ((O = C), (l += 3)) : ((O = i), Z === 0 && ie(M)),
                    Z--,
                    O === i ? (p = m) : ((l = p), (p = s)),
                    p !== i
                      ? (r.length > l ? ((O = r.charAt(l)), l++) : ((O = i), Z === 0 && ie(h)),
                        O !== i ? ((fe = a), (p = he(O)), (a = p)) : ((l = a), (a = s)))
                      : ((l = a), (a = s)))),
                (ee[E] = { nextPos: l, result: a }),
                a);
          }
          function o_() {
            var a,
              p,
              O,
              E,
              S,
              U = l * 49 + 21,
              q = ee[U];
            if (q) return (l = q.nextPos), q.result;
            if (
              ((a = l),
              r.charCodeAt(l) === 92 ? ((p = _e), l++) : ((p = i), Z === 0 && ie(Re)),
              p !== i)
            )
              if (((O = at()), O !== i)) {
                for (E = [], S = mc(); S !== i; ) E.push(S), (S = mc());
                E !== i ? ((fe = a), (p = Te()), (a = p)) : ((l = a), (a = s));
              } else (l = a), (a = s);
            else (l = a), (a = s);
            return (ee[U] = { nextPos: l, result: a }), a;
          }
          function cc() {
            var a,
              p,
              O,
              E = l * 49 + 22,
              S = ee[E];
            return S
              ? ((l = S.nextPos), S.result)
              : ((a = l),
                (p = l),
                Z++,
                r.substr(l, 3) === X ? ((O = X), (l += 3)) : ((O = i), Z === 0 && ie(oe)),
                Z--,
                O === i ? (p = m) : ((l = p), (p = s)),
                p !== i
                  ? (r.length > l ? ((O = r.charAt(l)), l++) : ((O = i), Z === 0 && ie(h)),
                    O !== i ? ((fe = a), (p = pe(O)), (a = p)) : ((l = a), (a = s)))
                  : ((l = a), (a = s)),
                (ee[E] = { nextPos: l, result: a }),
                a);
          }
          function s_() {
            var a,
              p,
              O,
              E,
              S = l * 49 + 23,
              U = ee[S];
            return U
              ? ((l = U.nextPos), U.result)
              : ((a = l),
                (p = lc()),
                p === i && (p = No()),
                p !== i
                  ? (r.charCodeAt(l) === 101 ? ((O = Xe), l++) : ((O = i), Z === 0 && ie(Ot)),
                    O === i &&
                      (r.charCodeAt(l) === 69 ? ((O = It), l++) : ((O = i), Z === 0 && ie(Sn))),
                    O !== i
                      ? ((E = No()),
                        E !== i ? ((fe = a), (p = vn(p, E)), (a = p)) : ((l = a), (a = s)))
                      : ((l = a), (a = s)))
                  : ((l = a), (a = s)),
                a === i && ((a = l), (p = lc()), p !== i && ((fe = a), (p = bt(p))), (a = p)),
                (ee[S] = { nextPos: l, result: a }),
                a);
          }
          function lc() {
            var a,
              p,
              O,
              E,
              S,
              U,
              q = l * 49 + 24,
              ue = ee[q];
            return ue
              ? ((l = ue.nextPos), ue.result)
              : ((a = l),
                r.charCodeAt(l) === 43 ? ((p = sn), l++) : ((p = i), Z === 0 && ie(rr)),
                p === i && (p = W),
                p !== i
                  ? ((O = l),
                    (E = sr()),
                    E !== i
                      ? (r.charCodeAt(l) === 46 ? ((S = Q), l++) : ((S = i), Z === 0 && ie(z)),
                        S !== i
                          ? ((U = sr()), U !== i ? ((E = [E, S, U]), (O = E)) : ((l = O), (O = s)))
                          : ((l = O), (O = s)))
                      : ((l = O), (O = s)),
                    O !== i ? ((fe = a), (p = Qr(O)), (a = p)) : ((l = a), (a = s)))
                  : ((l = a), (a = s)),
                a === i &&
                  ((a = l),
                  r.charCodeAt(l) === 45 ? ((p = an), l++) : ((p = i), Z === 0 && ie(Ht)),
                  p !== i
                    ? ((O = l),
                      (E = sr()),
                      E !== i
                        ? (r.charCodeAt(l) === 46 ? ((S = Q), l++) : ((S = i), Z === 0 && ie(z)),
                          S !== i
                            ? ((U = sr()),
                              U !== i ? ((E = [E, S, U]), (O = E)) : ((l = O), (O = s)))
                            : ((l = O), (O = s)))
                        : ((l = O), (O = s)),
                      O !== i ? ((fe = a), (p = un(O)), (a = p)) : ((l = a), (a = s)))
                    : ((l = a), (a = s))),
                (ee[q] = { nextPos: l, result: a }),
                a);
          }
          function a_() {
            var a,
              p,
              O = l * 49 + 25,
              E = ee[O];
            return E
              ? ((l = E.nextPos), E.result)
              : ((a = l),
                (p = No()),
                p !== i && ((fe = a), (p = co(p))),
                (a = p),
                (ee[O] = { nextPos: l, result: a }),
                a);
          }
          function No() {
            var a,
              p,
              O,
              E,
              S,
              U = l * 49 + 26,
              q = ee[U];
            if (q) return (l = q.nextPos), q.result;
            if (
              ((a = l),
              r.charCodeAt(l) === 43 ? ((p = sn), l++) : ((p = i), Z === 0 && ie(rr)),
              p === i && (p = W),
              p !== i)
            ) {
              if (((O = []), (E = Ie()), E !== i)) for (; E !== i; ) O.push(E), (E = Ie());
              else O = s;
              O !== i
                ? ((E = l),
                  Z++,
                  r.charCodeAt(l) === 46 ? ((S = Q), l++) : ((S = i), Z === 0 && ie(z)),
                  Z--,
                  S === i ? (E = m) : ((l = E), (E = s)),
                  E !== i ? ((fe = a), (p = Qr(O)), (a = p)) : ((l = a), (a = s)))
                : ((l = a), (a = s));
            } else (l = a), (a = s);
            if (a === i)
              if (
                ((a = l),
                r.charCodeAt(l) === 45 ? ((p = an), l++) : ((p = i), Z === 0 && ie(Ht)),
                p !== i)
              ) {
                if (((O = []), (E = Ie()), E !== i)) for (; E !== i; ) O.push(E), (E = Ie());
                else O = s;
                O !== i
                  ? ((E = l),
                    Z++,
                    r.charCodeAt(l) === 46 ? ((S = Q), l++) : ((S = i), Z === 0 && ie(z)),
                    Z--,
                    S === i ? (E = m) : ((l = E), (E = s)),
                    E !== i ? ((fe = a), (p = un(O)), (a = p)) : ((l = a), (a = s)))
                  : ((l = a), (a = s));
              } else (l = a), (a = s);
            return (ee[U] = { nextPos: l, result: a }), a;
          }
          function u_() {
            var a,
              p,
              O = l * 49 + 27,
              E = ee[O];
            return E
              ? ((l = E.nextPos), E.result)
              : ((a = l),
                r.substr(l, 4) === Zr ? ((p = Zr), (l += 4)) : ((p = i), Z === 0 && ie(lo)),
                p !== i && ((fe = a), (p = fo())),
                (a = p),
                a === i &&
                  ((a = l),
                  r.substr(l, 5) === ei ? ((p = ei), (l += 5)) : ((p = i), Z === 0 && ie(po)),
                  p !== i && ((fe = a), (p = _o())),
                  (a = p)),
                (ee[O] = { nextPos: l, result: a }),
                a);
          }
          function c_() {
            var a,
              p,
              O,
              E,
              S,
              U = l * 49 + 28,
              q = ee[U];
            if (q) return (l = q.nextPos), q.result;
            if (
              ((a = l),
              r.charCodeAt(l) === 91 ? ((p = A), l++) : ((p = i), Z === 0 && ie(R)),
              p !== i)
            ) {
              for (O = [], E = st(); E !== i; ) O.push(E), (E = st());
              O !== i
                ? (r.charCodeAt(l) === 93 ? ((E = b), l++) : ((E = i), Z === 0 && ie(N)),
                  E !== i ? ((fe = a), (p = mo()), (a = p)) : ((l = a), (a = s)))
                : ((l = a), (a = s));
            } else (l = a), (a = s);
            if (
              a === i &&
              ((a = l),
              r.charCodeAt(l) === 91 ? ((p = A), l++) : ((p = i), Z === 0 && ie(R)),
              p !== i
                ? ((O = dc()),
                  O === i && (O = W),
                  O !== i
                    ? (r.charCodeAt(l) === 93 ? ((E = b), l++) : ((E = i), Z === 0 && ie(N)),
                      E !== i ? ((fe = a), (p = ho(O)), (a = p)) : ((l = a), (a = s)))
                    : ((l = a), (a = s)))
                : ((l = a), (a = s)),
              a === i)
            ) {
              if (
                ((a = l),
                r.charCodeAt(l) === 91 ? ((p = A), l++) : ((p = i), Z === 0 && ie(R)),
                p !== i)
              ) {
                if (((O = []), (E = fi()), E !== i)) for (; E !== i; ) O.push(E), (E = fi());
                else O = s;
                O !== i
                  ? (r.charCodeAt(l) === 93 ? ((E = b), l++) : ((E = i), Z === 0 && ie(N)),
                    E !== i ? ((fe = a), (p = go(O)), (a = p)) : ((l = a), (a = s)))
                  : ((l = a), (a = s));
              } else (l = a), (a = s);
              if (a === i)
                if (
                  ((a = l),
                  r.charCodeAt(l) === 91 ? ((p = A), l++) : ((p = i), Z === 0 && ie(R)),
                  p !== i)
                ) {
                  if (((O = []), (E = fi()), E !== i)) for (; E !== i; ) O.push(E), (E = fi());
                  else O = s;
                  O !== i
                    ? ((E = dc()),
                      E !== i
                        ? (r.charCodeAt(l) === 93 ? ((S = b), l++) : ((S = i), Z === 0 && ie(N)),
                          S !== i ? ((fe = a), (p = Ao(O, E)), (a = p)) : ((l = a), (a = s)))
                        : ((l = a), (a = s)))
                    : ((l = a), (a = s));
                } else (l = a), (a = s);
            }
            return (ee[U] = { nextPos: l, result: a }), a;
          }
          function dc() {
            var a,
              p,
              O,
              E,
              S,
              U = l * 49 + 29,
              q = ee[U];
            if (q) return (l = q.nextPos), q.result;
            for (a = l, p = [], O = st(); O !== i; ) p.push(O), (O = st());
            if (p !== i)
              if (((O = Pn()), O !== i)) {
                for (E = [], S = st(); S !== i; ) E.push(S), (S = st());
                E !== i ? ((fe = a), (p = ti(O)), (a = p)) : ((l = a), (a = s));
              } else (l = a), (a = s);
            else (l = a), (a = s);
            return (ee[U] = { nextPos: l, result: a }), a;
          }
          function fi() {
            var a,
              p,
              O,
              E,
              S,
              U,
              q,
              ue = l * 49 + 30,
              ge = ee[ue];
            if (ge) return (l = ge.nextPos), ge.result;
            for (a = l, p = [], O = st(); O !== i; ) p.push(O), (O = st());
            if (p !== i)
              if (((O = Pn()), O !== i)) {
                for (E = [], S = st(); S !== i; ) E.push(S), (S = st());
                if (E !== i)
                  if (
                    (r.charCodeAt(l) === 44 ? ((S = ni), l++) : ((S = i), Z === 0 && ie(ri)),
                    S !== i)
                  ) {
                    for (U = [], q = st(); q !== i; ) U.push(q), (q = st());
                    U !== i ? ((fe = a), (p = ti(O)), (a = p)) : ((l = a), (a = s));
                  } else (l = a), (a = s);
                else (l = a), (a = s);
              } else (l = a), (a = s);
            else (l = a), (a = s);
            return (ee[ue] = { nextPos: l, result: a }), a;
          }
          function st() {
            var a,
              p = l * 49 + 31,
              O = ee[p];
            return O
              ? ((l = O.nextPos), O.result)
              : ((a = de()),
                a === i && ((a = at()), a === i && (a = di())),
                (ee[p] = { nextPos: l, result: a }),
                a);
          }
          function l_() {
            var a,
              p,
              O,
              E,
              S,
              U,
              q = l * 49 + 32,
              ue = ee[q];
            if (ue) return (l = ue.nextPos), ue.result;
            if (
              ((a = l),
              r.charCodeAt(l) === 123 ? ((p = Oo), l++) : ((p = i), Z === 0 && ie(ii)),
              p !== i)
            ) {
              for (O = [], E = de(); E !== i; ) O.push(E), (E = de());
              if (O !== i) {
                for (E = [], S = fc(); S !== i; ) E.push(S), (S = fc());
                if (E !== i) {
                  for (S = [], U = de(); U !== i; ) S.push(U), (U = de());
                  S !== i
                    ? (r.charCodeAt(l) === 125 ? ((U = Ro), l++) : ((U = i), Z === 0 && ie(oi)),
                      U !== i ? ((fe = a), (p = yo(E)), (a = p)) : ((l = a), (a = s)))
                    : ((l = a), (a = s));
                } else (l = a), (a = s);
              } else (l = a), (a = s);
            } else (l = a), (a = s);
            return (ee[q] = { nextPos: l, result: a }), a;
          }
          function fc() {
            var a,
              p,
              O,
              E,
              S,
              U,
              q,
              ue,
              ge,
              be,
              we,
              Me = l * 49 + 33,
              Be = ee[Me];
            if (Be) return (l = Be.nextPos), Be.result;
            for (a = l, p = [], O = de(); O !== i; ) p.push(O), (O = de());
            if (p !== i)
              if (((O = or()), O !== i)) {
                for (E = [], S = de(); S !== i; ) E.push(S), (S = de());
                if (E !== i)
                  if (
                    (r.charCodeAt(l) === 61 ? ((S = I), l++) : ((S = i), Z === 0 && ie(y)), S !== i)
                  ) {
                    for (U = [], q = de(); q !== i; ) U.push(q), (q = de());
                    if (U !== i)
                      if (((q = Pn()), q !== i)) {
                        for (ue = [], ge = de(); ge !== i; ) ue.push(ge), (ge = de());
                        if (ue !== i)
                          if (
                            (r.charCodeAt(l) === 44
                              ? ((ge = ni), l++)
                              : ((ge = i), Z === 0 && ie(ri)),
                            ge !== i)
                          ) {
                            for (be = [], we = de(); we !== i; ) be.push(we), (we = de());
                            be !== i ? ((fe = a), (p = si(O, q)), (a = p)) : ((l = a), (a = s));
                          } else (l = a), (a = s);
                        else (l = a), (a = s);
                      } else (l = a), (a = s);
                    else (l = a), (a = s);
                  } else (l = a), (a = s);
                else (l = a), (a = s);
              } else (l = a), (a = s);
            else (l = a), (a = s);
            if (a === i) {
              for (a = l, p = [], O = de(); O !== i; ) p.push(O), (O = de());
              if (p !== i)
                if (((O = or()), O !== i)) {
                  for (E = [], S = de(); S !== i; ) E.push(S), (S = de());
                  if (E !== i)
                    if (
                      (r.charCodeAt(l) === 61 ? ((S = I), l++) : ((S = i), Z === 0 && ie(y)),
                      S !== i)
                    ) {
                      for (U = [], q = de(); q !== i; ) U.push(q), (q = de());
                      U !== i
                        ? ((q = Pn()),
                          q !== i ? ((fe = a), (p = si(O, q)), (a = p)) : ((l = a), (a = s)))
                        : ((l = a), (a = s));
                    } else (l = a), (a = s);
                  else (l = a), (a = s);
                } else (l = a), (a = s);
              else (l = a), (a = s);
            }
            return (ee[Me] = { nextPos: l, result: a }), a;
          }
          function pc() {
            var a,
              p,
              O,
              E = l * 49 + 34,
              S = ee[E];
            return S
              ? ((l = S.nextPos), S.result)
              : ((a = l),
                r.charCodeAt(l) === 46 ? ((p = Q), l++) : ((p = i), Z === 0 && ie(z)),
                p !== i
                  ? ((O = sr()), O !== i ? ((fe = a), (p = To(O)), (a = p)) : ((l = a), (a = s)))
                  : ((l = a), (a = s)),
                (ee[E] = { nextPos: l, result: a }),
                a);
          }
          function _c() {
            var a,
              p,
              O,
              E,
              S,
              U,
              q,
              ue,
              ge,
              be,
              we,
              Me,
              Be = l * 49 + 35,
              Ze = ee[Be];
            return Ze
              ? ((l = Ze.nextPos), Ze.result)
              : ((a = l),
                (p = l),
                (O = Ie()),
                O !== i
                  ? ((E = Ie()),
                    E !== i
                      ? ((S = Ie()),
                        S !== i
                          ? ((U = Ie()),
                            U !== i
                              ? (r.charCodeAt(l) === 45
                                  ? ((q = an), l++)
                                  : ((q = i), Z === 0 && ie(Ht)),
                                q !== i
                                  ? ((ue = Ie()),
                                    ue !== i
                                      ? ((ge = Ie()),
                                        ge !== i
                                          ? (r.charCodeAt(l) === 45
                                              ? ((be = an), l++)
                                              : ((be = i), Z === 0 && ie(Ht)),
                                            be !== i
                                              ? ((we = Ie()),
                                                we !== i
                                                  ? ((Me = Ie()),
                                                    Me !== i
                                                      ? ((O = [O, E, S, U, q, ue, ge, be, we, Me]),
                                                        (p = O))
                                                      : ((l = p), (p = s)))
                                                  : ((l = p), (p = s)))
                                              : ((l = p), (p = s)))
                                          : ((l = p), (p = s)))
                                      : ((l = p), (p = s)))
                                  : ((l = p), (p = s)))
                              : ((l = p), (p = s)))
                          : ((l = p), (p = s)))
                      : ((l = p), (p = s)))
                  : ((l = p), (p = s)),
                p !== i && ((fe = a), (p = Gt(p))),
                (a = p),
                (ee[Be] = { nextPos: l, result: a }),
                a);
          }
          function d_() {
            var a,
              p,
              O,
              E,
              S,
              U,
              q,
              ue,
              ge,
              be,
              we,
              Me = l * 49 + 36,
              Be = ee[Me];
            return Be
              ? ((l = Be.nextPos), Be.result)
              : ((a = l),
                (p = l),
                (O = Ie()),
                O !== i
                  ? ((E = Ie()),
                    E !== i
                      ? (r.charCodeAt(l) === 58 ? ((S = cn), l++) : ((S = i), Z === 0 && ie(ln)),
                        S !== i
                          ? ((U = Ie()),
                            U !== i
                              ? ((q = Ie()),
                                q !== i
                                  ? (r.charCodeAt(l) === 58
                                      ? ((ue = cn), l++)
                                      : ((ue = i), Z === 0 && ie(ln)),
                                    ue !== i
                                      ? ((ge = Ie()),
                                        ge !== i
                                          ? ((be = Ie()),
                                            be !== i
                                              ? ((we = pc()),
                                                we === i && (we = W),
                                                we !== i
                                                  ? ((O = [O, E, S, U, q, ue, ge, be, we]), (p = O))
                                                  : ((l = p), (p = s)))
                                              : ((l = p), (p = s)))
                                          : ((l = p), (p = s)))
                                      : ((l = p), (p = s)))
                                  : ((l = p), (p = s)))
                              : ((l = p), (p = s)))
                          : ((l = p), (p = s)))
                      : ((l = p), (p = s)))
                  : ((l = p), (p = s)),
                p !== i && ((fe = a), (p = ai(p))),
                (a = p),
                (ee[Me] = { nextPos: l, result: a }),
                a);
          }
          function f_() {
            var a,
              p,
              O,
              E,
              S,
              U,
              q,
              ue,
              ge,
              be,
              we,
              Me,
              Be,
              Ze,
              Mn,
              Kt,
              et,
              Oc = l * 49 + 37,
              So = ee[Oc];
            return So
              ? ((l = So.nextPos), So.result)
              : ((a = l),
                (p = l),
                (O = Ie()),
                O !== i
                  ? ((E = Ie()),
                    E !== i
                      ? (r.charCodeAt(l) === 58 ? ((S = cn), l++) : ((S = i), Z === 0 && ie(ln)),
                        S !== i
                          ? ((U = Ie()),
                            U !== i
                              ? ((q = Ie()),
                                q !== i
                                  ? (r.charCodeAt(l) === 58
                                      ? ((ue = cn), l++)
                                      : ((ue = i), Z === 0 && ie(ln)),
                                    ue !== i
                                      ? ((ge = Ie()),
                                        ge !== i
                                          ? ((be = Ie()),
                                            be !== i
                                              ? ((we = pc()),
                                                we === i && (we = W),
                                                we !== i
                                                  ? (r.charCodeAt(l) === 45
                                                      ? ((Me = an), l++)
                                                      : ((Me = i), Z === 0 && ie(Ht)),
                                                    Me === i &&
                                                      (r.charCodeAt(l) === 43
                                                        ? ((Me = sn), l++)
                                                        : ((Me = i), Z === 0 && ie(rr))),
                                                    Me !== i
                                                      ? ((Be = Ie()),
                                                        Be !== i
                                                          ? ((Ze = Ie()),
                                                            Ze !== i
                                                              ? (r.charCodeAt(l) === 58
                                                                  ? ((Mn = cn), l++)
                                                                  : ((Mn = i), Z === 0 && ie(ln)),
                                                                Mn !== i
                                                                  ? ((Kt = Ie()),
                                                                    Kt !== i
                                                                      ? ((et = Ie()),
                                                                        et !== i
                                                                          ? ((O = [
                                                                              O,
                                                                              E,
                                                                              S,
                                                                              U,
                                                                              q,
                                                                              ue,
                                                                              ge,
                                                                              be,
                                                                              we,
                                                                              Me,
                                                                              Be,
                                                                              Ze,
                                                                              Mn,
                                                                              Kt,
                                                                              et,
                                                                            ]),
                                                                            (p = O))
                                                                          : ((l = p), (p = s)))
                                                                      : ((l = p), (p = s)))
                                                                  : ((l = p), (p = s)))
                                                              : ((l = p), (p = s)))
                                                          : ((l = p), (p = s)))
                                                      : ((l = p), (p = s)))
                                                  : ((l = p), (p = s)))
                                              : ((l = p), (p = s)))
                                          : ((l = p), (p = s)))
                                      : ((l = p), (p = s)))
                                  : ((l = p), (p = s)))
                              : ((l = p), (p = s)))
                          : ((l = p), (p = s)))
                      : ((l = p), (p = s)))
                  : ((l = p), (p = s)),
                p !== i && ((fe = a), (p = ai(p))),
                (a = p),
                (ee[Oc] = { nextPos: l, result: a }),
                a);
          }
          function p_() {
            var a,
              p,
              O,
              E,
              S,
              U = l * 49 + 38,
              q = ee[U];
            return q
              ? ((l = q.nextPos), q.result)
              : ((a = l),
                (p = _c()),
                p !== i
                  ? (r.charCodeAt(l) === 84 ? ((O = ui), l++) : ((O = i), Z === 0 && ie(B)),
                    O !== i
                      ? ((E = d_()),
                        E !== i
                          ? (r.charCodeAt(l) === 90 ? ((S = H), l++) : ((S = i), Z === 0 && ie(K)),
                            S !== i ? ((fe = a), (p = re(p, E)), (a = p)) : ((l = a), (a = s)))
                          : ((l = a), (a = s)))
                      : ((l = a), (a = s)))
                  : ((l = a), (a = s)),
                a === i &&
                  ((a = l),
                  (p = _c()),
                  p !== i
                    ? (r.charCodeAt(l) === 84 ? ((O = ui), l++) : ((O = i), Z === 0 && ie(B)),
                      O !== i
                        ? ((E = f_()),
                          E !== i ? ((fe = a), (p = le(p, E)), (a = p)) : ((l = a), (a = s)))
                        : ((l = a), (a = s)))
                    : ((l = a), (a = s))),
                (ee[U] = { nextPos: l, result: a }),
                a);
          }
          function de() {
            var a,
              p = l * 49 + 39,
              O = ee[p];
            return O
              ? ((l = O.nextPos), O.result)
              : (Ee.test(r.charAt(l)) ? ((a = r.charAt(l)), l++) : ((a = i), Z === 0 && ie(Je)),
                (ee[p] = { nextPos: l, result: a }),
                a);
          }
          function at() {
            var a,
              p,
              O,
              E = l * 49 + 40,
              S = ee[E];
            return S
              ? ((l = S.nextPos), S.result)
              : (r.charCodeAt(l) === 10 ? ((a = Ft), l++) : ((a = i), Z === 0 && ie(dn)),
                a === i &&
                  ((a = l),
                  r.charCodeAt(l) === 13 ? ((p = fn), l++) : ((p = i), Z === 0 && ie(wp)),
                  p !== i
                    ? (r.charCodeAt(l) === 10 ? ((O = Ft), l++) : ((O = i), Z === 0 && ie(dn)),
                      O !== i ? ((p = [p, O]), (a = p)) : ((l = a), (a = s)))
                    : ((l = a), (a = s))),
                (ee[E] = { nextPos: l, result: a }),
                a);
          }
          function mc() {
            var a,
              p = l * 49 + 41,
              O = ee[p];
            return O
              ? ((l = O.nextPos), O.result)
              : ((a = at()), a === i && (a = de()), (ee[p] = { nextPos: l, result: a }), a);
          }
          function pi() {
            var a,
              p,
              O = l * 49 + 42,
              E = ee[O];
            return E
              ? ((l = E.nextPos), E.result)
              : ((a = l),
                Z++,
                r.length > l ? ((p = r.charAt(l)), l++) : ((p = i), Z === 0 && ie(h)),
                Z--,
                p === i ? (a = m) : ((l = a), (a = s)),
                (ee[O] = { nextPos: l, result: a }),
                a);
          }
          function ut() {
            var a,
              p = l * 49 + 43,
              O = ee[p];
            return O
              ? ((l = O.nextPos), O.result)
              : (Ip.test(r.charAt(l)) ? ((a = r.charAt(l)), l++) : ((a = i), Z === 0 && ie(bp)),
                (ee[p] = { nextPos: l, result: a }),
                a);
          }
          function Ie() {
            var a,
              p,
              O = l * 49 + 44,
              E = ee[O];
            return E
              ? ((l = E.nextPos), E.result)
              : (Np.test(r.charAt(l)) ? ((a = r.charAt(l)), l++) : ((a = i), Z === 0 && ie(Cp)),
                a === i &&
                  ((a = l),
                  r.charCodeAt(l) === 95 ? ((p = Sp), l++) : ((p = i), Z === 0 && ie(vp)),
                  p !== i && ((fe = a), (p = Pp())),
                  (a = p)),
                (ee[O] = { nextPos: l, result: a }),
                a);
          }
          function hc() {
            var a,
              p = l * 49 + 45,
              O = ee[p];
            return O
              ? ((l = O.nextPos), O.result)
              : (Mp.test(r.charAt(l)) ? ((a = r.charAt(l)), l++) : ((a = i), Z === 0 && ie(kp)),
                (ee[p] = { nextPos: l, result: a }),
                a);
          }
          function sr() {
            var a,
              p,
              O,
              E = l * 49 + 46,
              S = ee[E];
            if (S) return (l = S.nextPos), S.result;
            if (((a = l), (p = []), (O = Ie()), O !== i)) for (; O !== i; ) p.push(O), (O = Ie());
            else p = s;
            return (
              p !== i && ((fe = a), (p = Dp(p))), (a = p), (ee[E] = { nextPos: l, result: a }), a
            );
          }
          function gc() {
            var a,
              p,
              O = l * 49 + 47,
              E = ee[O];
            return E
              ? ((l = E.nextPos), E.result)
              : ((a = l),
                r.substr(l, 2) === Fu ? ((p = Fu), (l += 2)) : ((p = i), Z === 0 && ie(Bp)),
                p !== i && ((fe = a), (p = xp())),
                (a = p),
                a === i &&
                  ((a = l),
                  r.substr(l, 2) === Ku ? ((p = Ku), (l += 2)) : ((p = i), Z === 0 && ie(Lp)),
                  p !== i && ((fe = a), (p = Up())),
                  (a = p),
                  a === i &&
                    ((a = l),
                    r.substr(l, 2) === Vu ? ((p = Vu), (l += 2)) : ((p = i), Z === 0 && ie($p)),
                    p !== i && ((fe = a), (p = jp())),
                    (a = p),
                    a === i &&
                      ((a = l),
                      r.substr(l, 2) === Wu ? ((p = Wu), (l += 2)) : ((p = i), Z === 0 && ie(Hp)),
                      p !== i && ((fe = a), (p = Gp())),
                      (a = p),
                      a === i &&
                        ((a = l),
                        r.substr(l, 2) === qu ? ((p = qu), (l += 2)) : ((p = i), Z === 0 && ie(Fp)),
                        p !== i && ((fe = a), (p = Kp())),
                        (a = p),
                        a === i &&
                          ((a = l),
                          r.substr(l, 2) === zu
                            ? ((p = zu), (l += 2))
                            : ((p = i), Z === 0 && ie(Vp)),
                          p !== i && ((fe = a), (p = Wp())),
                          (a = p),
                          a === i &&
                            ((a = l),
                            r.substr(l, 2) === Yu
                              ? ((p = Yu), (l += 2))
                              : ((p = i), Z === 0 && ie(qp)),
                            p !== i && ((fe = a), (p = zp())),
                            (a = p),
                            a === i && (a = __()))))))),
                (ee[O] = { nextPos: l, result: a }),
                a);
          }
          function __() {
            var a,
              p,
              O,
              E,
              S,
              U,
              q,
              ue,
              ge,
              be,
              we,
              Me = l * 49 + 48,
              Be = ee[Me];
            return Be
              ? ((l = Be.nextPos), Be.result)
              : ((a = l),
                r.substr(l, 2) === Xu ? ((p = Xu), (l += 2)) : ((p = i), Z === 0 && ie(Yp)),
                p !== i
                  ? ((O = l),
                    (E = ut()),
                    E !== i
                      ? ((S = ut()),
                        S !== i
                          ? ((U = ut()),
                            U !== i
                              ? ((q = ut()),
                                q !== i
                                  ? ((ue = ut()),
                                    ue !== i
                                      ? ((ge = ut()),
                                        ge !== i
                                          ? ((be = ut()),
                                            be !== i
                                              ? ((we = ut()),
                                                we !== i
                                                  ? ((E = [E, S, U, q, ue, ge, be, we]), (O = E))
                                                  : ((l = O), (O = s)))
                                              : ((l = O), (O = s)))
                                          : ((l = O), (O = s)))
                                      : ((l = O), (O = s)))
                                  : ((l = O), (O = s)))
                              : ((l = O), (O = s)))
                          : ((l = O), (O = s)))
                      : ((l = O), (O = s)),
                    O !== i ? ((fe = a), (p = Ju(O)), (a = p)) : ((l = a), (a = s)))
                  : ((l = a), (a = s)),
                a === i &&
                  ((a = l),
                  r.substr(l, 2) === Qu ? ((p = Qu), (l += 2)) : ((p = i), Z === 0 && ie(Xp)),
                  p !== i
                    ? ((O = l),
                      (E = ut()),
                      E !== i
                        ? ((S = ut()),
                          S !== i
                            ? ((U = ut()),
                              U !== i
                                ? ((q = ut()),
                                  q !== i ? ((E = [E, S, U, q]), (O = E)) : ((l = O), (O = s)))
                                : ((l = O), (O = s)))
                            : ((l = O), (O = s)))
                        : ((l = O), (O = s)),
                      O !== i ? ((fe = a), (p = Ju(O)), (a = p)) : ((l = a), (a = s)))
                    : ((l = a), (a = s))),
                (ee[Me] = { nextPos: l, result: a }),
                a);
          }
          var Ac = [];
          function m_(a, p, O) {
            var E = new Error(a);
            throw ((E.line = p), (E.column = O), E);
          }
          function Co(a) {
            Ac.push(a);
          }
          function Ve(a, p, O, E, S) {
            var U = { type: a, value: p, line: O(), column: E() };
            return S && (U.key = S), U;
          }
          function h_(a, p, O) {
            var E = parseInt('0x' + a);
            if (
              !isFinite(E) ||
              Math.floor(E) != E ||
              E < 0 ||
              E > 1114111 ||
              (E > 55295 && E < 57344)
            )
              m_('Invalid Unicode escape code: ' + a, p, O);
            else return g_(E);
          }
          function g_() {
            var a = 16384,
              p = [],
              O,
              E,
              S = -1,
              U = arguments.length;
            if (!U) return '';
            for (var q = ''; ++S < U; ) {
              var ue = Number(arguments[S]);
              ue <= 65535
                ? p.push(ue)
                : ((ue -= 65536),
                  (O = (ue >> 10) + 55296),
                  (E = (ue % 1024) + 56320),
                  p.push(O, E)),
                (S + 1 == U || p.length > a) &&
                  ((q += String.fromCharCode.apply(null, p)), (p.length = 0));
            }
            return q;
          }
          if (((li = d()), li !== i && l === r.length)) return li;
          throw (
            (li !== i && l < r.length && ie({ type: 'end', description: 'end of input' }),
            Jp(null, wo, ci))
          );
        }
        return { SyntaxError: e, parse: n };
      })())),
    Ko
  );
}
var Vo, Qc;
function XO() {
  if (Qc) return Vo;
  Qc = 1;
  function t(e) {
    var n = [],
      r = [],
      o = '',
      i = Object.create(null),
      u = i;
    return d(e);
    function d(v) {
      for (var w, x = 0; x < v.length; x++)
        switch (((w = v[x]), w.type)) {
          case 'Assign':
            s(w);
            break;
          case 'ObjectPath':
            h(w);
            break;
          case 'ArrayPath':
            A(w);
            break;
        }
      return i;
    }
    function f(v, w, x) {
      var G = new Error(v);
      throw ((G.line = w), (G.column = x), G);
    }
    function s(v) {
      var w = v.key,
        x = v.value,
        G = v.line,
        F = v.column,
        Q;
      o ? (Q = o + '.' + w) : (Q = w),
        typeof u[w] < 'u' && f("Cannot redefine existing key '" + Q + "'.", G, F),
        (u[w] = g(x)),
        _(Q) || (n.push(Q), r.push(Q));
    }
    function _(v) {
      return n.indexOf(v) !== -1;
    }
    function g(v) {
      return v.type === 'Array' ? b(v.value) : v.type === 'InlineTable' ? m(v.value) : v.value;
    }
    function m(v) {
      for (var w = Object.create(null), x = 0; x < v.length; x++) {
        var G = v[x];
        G.value.type === 'InlineTable'
          ? (w[G.key] = m(G.value.value))
          : G.type === 'InlineTableValue' && (w[G.key] = g(G.value));
      }
      return w;
    }
    function h(v) {
      var w = v.value,
        x = w.map(N).join('.'),
        G = v.line,
        F = v.column;
      _(x) && f("Cannot redefine existing key '" + w + "'.", G, F),
        n.push(x),
        (u = R(i, w, Object.create(null), G, F)),
        (o = w);
    }
    function A(v) {
      var w = v.value,
        x = w.map(N).join('.'),
        G = v.line,
        F = v.column;
      if (
        (_(x) || n.push(x),
        (n = n.filter(function (z) {
          return z.indexOf(x) !== 0;
        })),
        n.push(x),
        (u = R(i, w, [], G, F)),
        (o = x),
        u instanceof Array)
      ) {
        var Q = Object.create(null);
        u.push(Q), (u = Q);
      } else f("Cannot redefine existing key '" + w + "'.", G, F);
    }
    function R(v, w, x, G, F) {
      var Q = [],
        z = '';
      w.join('.');
      for (var I = v, y = 0; y < w.length; y++) {
        var P = w[y];
        Q.push(P),
          (z = Q.join('.')),
          typeof I[P] > 'u'
            ? y === w.length - 1
              ? (I[P] = x)
              : (I[P] = Object.create(null))
            : y !== w.length - 1 &&
              r.indexOf(z) > -1 &&
              f("Cannot redefine existing key '" + z + "'.", G, F),
          (I = I[P]),
          I instanceof Array && I.length && y < w.length - 1 && (I = I[I.length - 1]);
      }
      return I;
    }
    function b(v) {
      for (var w = null, x = 0; x < v.length; x++) {
        var G = v[x];
        w === null
          ? (w = G.type)
          : G.type !== w &&
            f(
              'Cannot add value of type ' + G.type + ' to array of type ' + w + '.',
              G.line,
              G.column
            );
      }
      return v.map(g);
    }
    function N(v) {
      return v.indexOf('.') > -1 ? '"' + v + '"' : v;
    }
  }
  return (Vo = { compile: t }), Vo;
}
var Wo, Zc;
function JO() {
  if (Zc) return Wo;
  Zc = 1;
  var t = YO(),
    e = XO();
  return (
    (Wo = {
      parse: function (n) {
        var r = t.parse(n.toString());
        return e.compile(r);
      },
    }),
    Wo
  );
}
function QO(t) {
  return t.toLowerCase();
}
var ZO = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g],
  eR = /[^A-Z0-9]+/gi;
function tR(t, e) {
  e === void 0 && (e = {});
  for (
    var n = e.splitRegexp,
      r = n === void 0 ? ZO : n,
      o = e.stripRegexp,
      i = o === void 0 ? eR : o,
      u = e.transform,
      d = u === void 0 ? QO : u,
      f = e.delimiter,
      s = f === void 0 ? ' ' : f,
      _ = el(el(t, r, '$1\0$2'), i, '\0'),
      g = 0,
      m = _.length;
    _.charAt(g) === '\0';

  )
    g++;
  for (; _.charAt(m - 1) === '\0'; ) m--;
  return _.slice(g, m).split('\0').map(d).join(s);
}
function el(t, e, n) {
  return e instanceof RegExp
    ? t.replace(e, n)
    : e.reduce(function (r, o) {
        return r.replace(o, n);
      }, t);
}
function nR(t, e) {
  return e === void 0 && (e = {}), tR(t, Nl({ delimiter: '.' }, e));
}
function rR(t, e) {
  return e === void 0 && (e = {}), nR(t, Nl({ delimiter: '_' }, e));
}
const iR = Object.freeze(
    Object.defineProperty({ __proto__: null, snakeCase: rR }, Symbol.toStringTag, {
      value: 'Module',
    })
  ),
  oR = $r(iR);
var qo, tl;
function sR() {
  if (tl) return qo;
  tl = 1;
  function t(o) {
    if (typeof o != 'string')
      throw new TypeError('Path must be a string. Received ' + JSON.stringify(o));
  }
  function e(o, i) {
    for (var u = '', d = 0, f = -1, s = 0, _, g = 0; g <= o.length; ++g) {
      if (g < o.length) _ = o.charCodeAt(g);
      else {
        if (_ === 47) break;
        _ = 47;
      }
      if (_ === 47) {
        if (!(f === g - 1 || s === 1))
          if (f !== g - 1 && s === 2) {
            if (
              u.length < 2 ||
              d !== 2 ||
              u.charCodeAt(u.length - 1) !== 46 ||
              u.charCodeAt(u.length - 2) !== 46
            ) {
              if (u.length > 2) {
                var m = u.lastIndexOf('/');
                if (m !== u.length - 1) {
                  m === -1
                    ? ((u = ''), (d = 0))
                    : ((u = u.slice(0, m)), (d = u.length - 1 - u.lastIndexOf('/'))),
                    (f = g),
                    (s = 0);
                  continue;
                }
              } else if (u.length === 2 || u.length === 1) {
                (u = ''), (d = 0), (f = g), (s = 0);
                continue;
              }
            }
            i && (u.length > 0 ? (u += '/..') : (u = '..'), (d = 2));
          } else
            u.length > 0 ? (u += '/' + o.slice(f + 1, g)) : (u = o.slice(f + 1, g)),
              (d = g - f - 1);
        (f = g), (s = 0);
      } else _ === 46 && s !== -1 ? ++s : (s = -1);
    }
    return u;
  }
  function n(o, i) {
    var u = i.dir || i.root,
      d = i.base || (i.name || '') + (i.ext || '');
    return u ? (u === i.root ? u + d : u + o + d) : d;
  }
  var r = {
    resolve: function () {
      for (var i = '', u = !1, d, f = arguments.length - 1; f >= -1 && !u; f--) {
        var s;
        f >= 0 ? (s = arguments[f]) : (d === void 0 && (d = ne.process.cwd()), (s = d)),
          t(s),
          s.length !== 0 && ((i = s + '/' + i), (u = s.charCodeAt(0) === 47));
      }
      return (i = e(i, !u)), u ? (i.length > 0 ? '/' + i : '/') : i.length > 0 ? i : '.';
    },
    normalize: function (i) {
      if ((t(i), i.length === 0)) return '.';
      var u = i.charCodeAt(0) === 47,
        d = i.charCodeAt(i.length - 1) === 47;
      return (
        (i = e(i, !u)),
        i.length === 0 && !u && (i = '.'),
        i.length > 0 && d && (i += '/'),
        u ? '/' + i : i
      );
    },
    isAbsolute: function (i) {
      return t(i), i.length > 0 && i.charCodeAt(0) === 47;
    },
    join: function () {
      if (arguments.length === 0) return '.';
      for (var i, u = 0; u < arguments.length; ++u) {
        var d = arguments[u];
        t(d), d.length > 0 && (i === void 0 ? (i = d) : (i += '/' + d));
      }
      return i === void 0 ? '.' : r.normalize(i);
    },
    relative: function (i, u) {
      if ((t(i), t(u), i === u || ((i = r.resolve(i)), (u = r.resolve(u)), i === u))) return '';
      for (var d = 1; d < i.length && i.charCodeAt(d) === 47; ++d);
      for (var f = i.length, s = f - d, _ = 1; _ < u.length && u.charCodeAt(_) === 47; ++_);
      for (var g = u.length, m = g - _, h = s < m ? s : m, A = -1, R = 0; R <= h; ++R) {
        if (R === h) {
          if (m > h) {
            if (u.charCodeAt(_ + R) === 47) return u.slice(_ + R + 1);
            if (R === 0) return u.slice(_ + R);
          } else s > h && (i.charCodeAt(d + R) === 47 ? (A = R) : R === 0 && (A = 0));
          break;
        }
        var b = i.charCodeAt(d + R),
          N = u.charCodeAt(_ + R);
        if (b !== N) break;
        b === 47 && (A = R);
      }
      var v = '';
      for (R = d + A + 1; R <= f; ++R)
        (R === f || i.charCodeAt(R) === 47) && (v.length === 0 ? (v += '..') : (v += '/..'));
      return v.length > 0
        ? v + u.slice(_ + A)
        : ((_ += A), u.charCodeAt(_) === 47 && ++_, u.slice(_));
    },
    _makeLong: function (i) {
      return i;
    },
    dirname: function (i) {
      if ((t(i), i.length === 0)) return '.';
      for (var u = i.charCodeAt(0), d = u === 47, f = -1, s = !0, _ = i.length - 1; _ >= 1; --_)
        if (((u = i.charCodeAt(_)), u === 47)) {
          if (!s) {
            f = _;
            break;
          }
        } else s = !1;
      return f === -1 ? (d ? '/' : '.') : d && f === 1 ? '//' : i.slice(0, f);
    },
    basename: function (i, u) {
      if (u !== void 0 && typeof u != 'string')
        throw new TypeError('"ext" argument must be a string');
      t(i);
      var d = 0,
        f = -1,
        s = !0,
        _;
      if (u !== void 0 && u.length > 0 && u.length <= i.length) {
        if (u.length === i.length && u === i) return '';
        var g = u.length - 1,
          m = -1;
        for (_ = i.length - 1; _ >= 0; --_) {
          var h = i.charCodeAt(_);
          if (h === 47) {
            if (!s) {
              d = _ + 1;
              break;
            }
          } else
            m === -1 && ((s = !1), (m = _ + 1)),
              g >= 0 && (h === u.charCodeAt(g) ? --g === -1 && (f = _) : ((g = -1), (f = m)));
        }
        return d === f ? (f = m) : f === -1 && (f = i.length), i.slice(d, f);
      } else {
        for (_ = i.length - 1; _ >= 0; --_)
          if (i.charCodeAt(_) === 47) {
            if (!s) {
              d = _ + 1;
              break;
            }
          } else f === -1 && ((s = !1), (f = _ + 1));
        return f === -1 ? '' : i.slice(d, f);
      }
    },
    extname: function (i) {
      t(i);
      for (var u = -1, d = 0, f = -1, s = !0, _ = 0, g = i.length - 1; g >= 0; --g) {
        var m = i.charCodeAt(g);
        if (m === 47) {
          if (!s) {
            d = g + 1;
            break;
          }
          continue;
        }
        f === -1 && ((s = !1), (f = g + 1)),
          m === 46 ? (u === -1 ? (u = g) : _ !== 1 && (_ = 1)) : u !== -1 && (_ = -1);
      }
      return u === -1 || f === -1 || _ === 0 || (_ === 1 && u === f - 1 && u === d + 1)
        ? ''
        : i.slice(u, f);
    },
    format: function (i) {
      if (i === null || typeof i != 'object')
        throw new TypeError(
          'The "pathObject" argument must be of type Object. Received type ' + typeof i
        );
      return n('/', i);
    },
    parse: function (i) {
      t(i);
      var u = { root: '', dir: '', base: '', ext: '', name: '' };
      if (i.length === 0) return u;
      var d = i.charCodeAt(0),
        f = d === 47,
        s;
      f ? ((u.root = '/'), (s = 1)) : (s = 0);
      for (var _ = -1, g = 0, m = -1, h = !0, A = i.length - 1, R = 0; A >= s; --A) {
        if (((d = i.charCodeAt(A)), d === 47)) {
          if (!h) {
            g = A + 1;
            break;
          }
          continue;
        }
        m === -1 && ((h = !1), (m = A + 1)),
          d === 46 ? (_ === -1 ? (_ = A) : R !== 1 && (R = 1)) : _ !== -1 && (R = -1);
      }
      return (
        _ === -1 || m === -1 || R === 0 || (R === 1 && _ === m - 1 && _ === g + 1)
          ? m !== -1 &&
            (g === 0 && f ? (u.base = u.name = i.slice(1, m)) : (u.base = u.name = i.slice(g, m)))
          : (g === 0 && f
              ? ((u.name = i.slice(1, _)), (u.base = i.slice(1, m)))
              : ((u.name = i.slice(g, _)), (u.base = i.slice(g, m))),
            (u.ext = i.slice(_, m))),
        g > 0 ? (u.dir = i.slice(0, g - 1)) : f && (u.dir = '/'),
        u
      );
    },
    sep: '/',
    delimiter: ':',
    win32: null,
    posix: null,
  };
  return (r.posix = r), (qo = r), qo;
}
var nl;
function aR() {
  if (nl) return Ti;
  nl = 1;
  var t =
      (T && T.__createBinding) ||
      (Object.create
        ? function (f, s, _, g) {
            g === void 0 && (g = _);
            var m = Object.getOwnPropertyDescriptor(s, _);
            (!m || ('get' in m ? !s.__esModule : m.writable || m.configurable)) &&
              (m = {
                enumerable: !0,
                get: function () {
                  return s[_];
                },
              }),
              Object.defineProperty(f, g, m);
          }
        : function (f, s, _, g) {
            g === void 0 && (g = _), (f[g] = s[_]);
          }),
    e =
      (T && T.__setModuleDefault) ||
      (Object.create
        ? function (f, s) {
            Object.defineProperty(f, 'default', { enumerable: !0, value: s });
          }
        : function (f, s) {
            f.default = s;
          }),
    n =
      (T && T.__importStar) ||
      function (f) {
        if (f && f.__esModule) return f;
        var s = {};
        if (f != null)
          for (var _ in f)
            _ !== 'default' && Object.prototype.hasOwnProperty.call(f, _) && t(s, f, _);
        return e(s, f), s;
      };
  Object.defineProperty(Ti, '__esModule', { value: !0 });
  const r = n(JO()),
    o = oR,
    i = eo(),
    u = it,
    d = new Proxy(
      {},
      {
        get(f, s) {
          var _, g;
          if (u.isBrowser) throw new Error("Workspaces aren't available in the browser");
          if (
            ((s = (0, o.snakeCase)(s)),
            /\d/.test(s) && (s = s.replace(/\d+/g, (x) => '_' + x).replace('__', '_')),
            f[s])
          )
            return f[s];
          const m = pr,
            h = sR(),
            A = r.parse(m.readFileSync('Anchor.toml')),
            R = A.provider.cluster,
            b =
              (g = (_ = A.programs) === null || _ === void 0 ? void 0 : _[R]) === null ||
              g === void 0
                ? void 0
                : g[s];
          let N, v;
          if (
            (typeof b == 'object' && b.idl
              ? ((N = b.idl), (v = b.address))
              : (N = h.join('target', 'idl', ''.concat(s, '.json'))),
            !m.existsSync(N))
          )
            throw new Error(''.concat(N, " doesn't exist. Did you run `anchor build`?"));
          const w = JSON.parse(m.readFileSync(N));
          return v && (w.address = v), (f[s] = new i.Program(w)), f[s];
        },
      }
    );
  return (Ti.default = d), Ti;
}
(function (t) {
  var e =
      (T && T.__createBinding) ||
      (Object.create
        ? function (s, _, g, m) {
            m === void 0 && (m = g);
            var h = Object.getOwnPropertyDescriptor(_, g);
            (!h || ('get' in h ? !_.__esModule : h.writable || h.configurable)) &&
              (h = {
                enumerable: !0,
                get: function () {
                  return _[g];
                },
              }),
              Object.defineProperty(s, m, h);
          }
        : function (s, _, g, m) {
            m === void 0 && (m = g), (s[m] = _[g]);
          }),
    n =
      (T && T.__setModuleDefault) ||
      (Object.create
        ? function (s, _) {
            Object.defineProperty(s, 'default', { enumerable: !0, value: _ });
          }
        : function (s, _) {
            s.default = _;
          }),
    r =
      (T && T.__importStar) ||
      function (s) {
        if (s && s.__esModule) return s;
        var _ = {};
        if (s != null)
          for (var g in s)
            g !== 'default' && Object.prototype.hasOwnProperty.call(s, g) && e(_, s, g);
        return n(_, s), _;
      },
    o =
      (T && T.__exportStar) ||
      function (s, _) {
        for (var g in s)
          g !== 'default' && !Object.prototype.hasOwnProperty.call(_, g) && e(_, s, g);
      },
    i =
      (T && T.__importDefault) ||
      function (s) {
        return s && s.__esModule ? s : { default: s };
      };
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.utils = t.AnchorProvider = t.setProvider = t.getProvider = t.web3 = t.BN = void 0),
    i(Kn);
  const u = it;
  var d = Ye;
  Object.defineProperty(t, 'BN', {
    enumerable: !0,
    get: function () {
      return i(d).default;
    },
  }),
    (t.web3 = r(me));
  var f = Fi();
  Object.defineProperty(t, 'getProvider', {
    enumerable: !0,
    get: function () {
      return f.getProvider;
    },
  }),
    Object.defineProperty(t, 'setProvider', {
      enumerable: !0,
      get: function () {
        return f.setProvider;
      },
    }),
    Object.defineProperty(t, 'AnchorProvider', {
      enumerable: !0,
      get: function () {
        return f.AnchorProvider;
      },
    }),
    o(Jn, t),
    o(Xi(), t),
    (t.utils = r(qe)),
    o(eo(), t),
    o(to, t),
    u.isBrowser || ((t.workspace = aR().default), (t.Wallet = Kn.default));
})($f);
(function (t) {
  var f, s;
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.HashablePublicKey =
      t.PubkeyHashMap =
      t.PublicKeyMap =
      t.PublicKeySet =
      t.NULL_PUBKEY =
        void 0),
    (t.isNotNullPubkey = r);
  const e = $f,
    n = me;
  t.NULL_PUBKEY = new n.PublicKey('nu11111111111111111111111111111111111111111');
  function r(g) {
    return g && !g.equals(t.NULL_PUBKEY) && !g.equals(n.PublicKey.default);
  }
  class o {
    constructor(m) {
      c(this, 'items', []);
      m.forEach((h) => this.add(h));
    }
    add(m) {
      this.contains(m) || this.items.push(m);
    }
    contains(m) {
      return this.items.some((h) => this.equals(h, m));
    }
    equals(m, h) {
      return m.equals(h);
    }
    isEmpty() {
      return this.items.length === 0;
    }
    toArray() {
      return this.items.slice();
    }
  }
  t.PublicKeySet = o;
  class i {
    constructor() {
      c(this, 'record', []);
    }
    set(m, h) {
      const A = this.findIndex(m);
      A !== -1 ? (this.record[A].value = h) : this.record.push({ key: m, value: h });
    }
    get(m) {
      const h = this.findIndex(m);
      return h !== -1 ? this.record[h].value : void 0;
    }
    has(m) {
      return this.findIndex(m) !== -1;
    }
    delete(m) {
      const h = this.findIndex(m);
      h !== -1 && this.record.splice(h, 1);
    }
    findIndex(m) {
      return this.record.findIndex((h) => h.key.equals(m));
    }
    clear() {
      this.record = [];
    }
    forEach(m) {
      this.record.forEach((h) => {
        m(h.value, h.key);
      });
    }
    keys() {
      return this.record.map((m) => m.key);
    }
    values() {
      return this.record.map((m) => m.value);
    }
    entries() {
      return this.record.map((m) => [m.key, m.value]);
    }
    isEmpty() {
      return this.record.length === 0;
    }
  }
  t.PublicKeyMap = i;
  class u {
    constructor(m) {
      c(this, 'buckets');
      c(this, 'size');
      c(this, f, 'PubkeyHashMap');
      if (((this.buckets = new Map()), (this.size = 0), m)) for (const [h, A] of m) this.set(h, A);
    }
    *[((s = Symbol.iterator), (f = Symbol.toStringTag), s)]() {
      for (const [, m] of this.buckets) for (const { key: h, value: A } of m) yield [h, A];
    }
    set(m, h) {
      const A = new d(m).hashCode(),
        R = this.buckets.get(A);
      if (!R) this.buckets.set(A, [{ key: m, value: h }]), this.size++;
      else {
        const b = R.find((N) => N.key.equals(m));
        b ? (b.value = h) : (R.push({ key: m, value: h }), this.size++);
      }
      return this;
    }
    get(m) {
      const h = new d(m).hashCode(),
        A = this.buckets.get(h);
      if (!A) return;
      const R = A.find((b) => b.key.equals(m));
      return R ? R.value : void 0;
    }
    has(m) {
      const h = new d(m).hashCode(),
        A = this.buckets.get(h);
      return A ? !!A.find((b) => b.key.equals(m)) : !1;
    }
    delete(m) {
      const h = new d(m).hashCode(),
        A = this.buckets.get(h);
      if (!A) return !1;
      const R = A.findIndex((b) => b.key.equals(m));
      return R === -1
        ? !1
        : (A.splice(R, 1), A.length === 0 && this.buckets.delete(h), this.size--, !0);
    }
    clear() {
      (this.buckets = new Map()), (this.size = 0);
    }
    isEmpty() {
      return this.size === 0;
    }
    forEach(m, h) {
      this.buckets.forEach((A) => {
        A.forEach((R) => {
          m(R.value, R.key, this);
        }, h);
      }, h);
    }
    *keys() {
      for (const [m] of this) yield m;
    }
    *values() {
      for (const [, m] of this) yield m;
    }
    entries() {
      return this[Symbol.iterator]();
    }
  }
  t.PubkeyHashMap = u;
  const _ = class _ extends n.PublicKey {
    constructor(m) {
      super(m);
    }
    hashCode() {
      let m = 13;
      return (m = m * 7 + this.getBN().clone().iuand(_.MASK).toNumber()), m;
    }
    getBN() {
      return this._bn;
    }
  };
  c(_, 'MASK', new e.BN(1).shln(32).subn(1));
  let d = _;
  t.HashablePublicKey = d;
})(Uf);
var Gs = {};
Object.defineProperty(Gs, '__esModule', { value: !0 });
Gs.getAllLookupTables = uR;
const rl = me;
async function uR(t, e) {
  return (await t.getMultipleAccountsInfo(e)).map((o, i) => {
    const u = rl.AddressLookupTableAccount.deserialize(o.data);
    return new rl.AddressLookupTableAccount({ key: e[i], state: u });
  });
}
var np = {};
const cR = $r(M_);
(function (t) {
  var e =
    (T && T.__importDefault) ||
    function (D) {
      return D && D.__esModule ? D : { default: D };
    };
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.TransactionError =
      t.instructionEquals =
      t.getLookupTableAccountsFromKeys =
      t.MAX_LOCKED_ACCOUNTS =
        void 0),
    (t.base64EncodeTx = d),
    (t.sendAndConfirmTransactionV0 = f),
    (t.sendTx = s),
    (t.removeComputeBudgetIxns = _),
    (t.sendAndConfirmTransactionV0Impl = g),
    (t.confirmTx = h),
    (t.forceGetConfirmedTx = A),
    (t.getSimulationComputeUnits = b),
    (t.maxLockedAccounts = v),
    (t.uniqueAccounts = w),
    (t.arrayDeepEquals = G),
    (t.createAddExtraComputeUnitsTransaction = Q),
    (t.getComputeUnitPrice = z),
    (t.isComputeBudgetComputeUnitLimit = I),
    (t.isComputeBudgetComputeUnitPrice = y),
    (t.overwriteComputeBudget = P),
    (t.getRecentAverageFees = V),
    (t.getAverageFeesPerCUForPeriodLamports = C),
    (t.getAverageFees = M),
    (t.getRpcRecentFeesOfPercentile = W);
  const n = me,
    r = e(jr),
    o = cR,
    i = Oe,
    u = gt;
  t.MAX_LOCKED_ACCOUNTS = 64;
  function d(D, L, X, oe = void 0) {
    const ae = new n.TransactionMessage({
        payerKey: L,
        recentBlockhash: n.PublicKey.default.toBase58(),
        instructions: X,
      }).compileToV0Message(oe),
      ce = new n.VersionedTransaction(ae),
      pe = ne.Buffer.from(ce.message.serialize()).toString('base64'),
      he = ne.Buffer.from(ce.serialize()).toString('base64'),
      _e =
        D === 'localnet'
          ? '?cluster=custom&customUrl=http://localhost:8899'
          : '?cluster='.concat(D.toString()),
      Re = 'https://explorer.solana.com/tx/inspector'
        .concat(_e, '&message=')
        .concat(encodeURIComponent(pe), '&signatures=')
        .concat(encodeURIComponent('['.concat(L.toBase58(), ']')));
    return { encodedTx: he, simulationUrl: Re };
  }
  async function f(D, L, X, oe, ae, ce = '', pe = console.log) {
    let he = X,
      _e;
    const [Re, Te] = await Promise.all([
      b(D, X, L.publicKey, oe, ce, pe),
      D.getLatestBlockhashAndContext('finalized'),
    ]);
    he = _(he);
    const Xe = Q(Re ? Re * 1.5 : 12e5, new r.default(await C(15)));
    he.unshift(...Xe), (_e = Te);
    const Ot = m(L, he, oe, ae, _e);
    return g(D, Ot, _e, ''.concat(ce, ' (confirm)'), pe);
  }
  async function s(D, L, X, oe = '', ae = console.log) {
    var ce;
    try {
      const pe = await D.sendTransaction(L, {
          preflightCommitment: 'confirmed',
          maxRetries: 0,
          skipPreflight: !0,
          minContextSlot: X.context.slot,
        }),
        he = 'https://solscan.io/tx/'.concat(pe);
      return ae(''.concat(oe, ' ').concat(he)), pe;
    } catch (pe) {
      if ((ae(pe), pe.toString().includes('failed'))) {
        const _e = pe.toString().split(' failed ')[0].split('Transaction ')[1];
        if (!_e) throw pe;
        const Re = await A(D, _e);
        if (Re) {
          const Te = ((ce = Re.meta) == null ? void 0 : ce.logMessages) || void 0;
          throw new F(pe.message, _e, Te);
        } else throw new F(pe.message, _e);
      } else throw pe;
    }
  }
  function _(D) {
    return D.filter(({ programId: L }) => L !== u.COMPUTE_BUDGET_PROGRAM_ID);
  }
  async function g(D, L, X, oe = '', ae = console.log) {
    var he;
    const ce = await s(D, L, X, oe, ae);
    if ((await h(D, X.value, ce)).value.err) {
      const _e = await A(D, ce);
      if (_e) {
        const Re = ((he = _e.meta) == null ? void 0 : he.logMessages) || void 0;
        throw new F('Failed to send transaction: '.concat(oe, ' ').concat(ce), ce, Re);
      } else throw new F('Failed to send transaction: '.concat(oe, ' ').concat(ce), ce);
    }
    return ce;
  }
  function m(D, L, X, oe, ae) {
    const { blockhash: ce } = ae.value,
      pe = new n.TransactionMessage({
        payerKey: D.publicKey,
        recentBlockhash: ce,
        instructions: L,
      }).compileToV0Message(X),
      he = new n.VersionedTransaction(pe);
    return he.sign([D, ...oe]), he;
  }
  async function h(D, L, X) {
    return (
      await D.confirmTransaction(
        { blockhash: L.blockhash, lastValidBlockHeight: L.lastValidBlockHeight, signature: X },
        'processed'
      ),
      D.confirmTransaction(
        { blockhash: L.blockhash, lastValidBlockHeight: L.lastValidBlockHeight, signature: X },
        'confirmed'
      )
    );
  }
  async function A(D, L) {
    console.log('forceGetConfirmedTx: '.concat(L));
    const X = { commitment: 'confirmed', maxSupportedTransactionVersion: 0 },
      oe = Date.now() + 5e3;
    let ae = null,
      ce = null;
    for (;;) {
      try {
        if (((ce = await D.getTransaction(L, X)), ce)) return ce;
      } catch (pe) {
        ae = pe;
      }
      if (Date.now() > oe) {
        if (ae) throw ae;
        return ce;
      }
      await R(1e3);
    }
  }
  function R(D) {
    return new Promise((L) => setTimeout(L, D));
  }
  async function b(D, L, X, oe, ae = '', ce = console.log) {
    const pe = P(L, 2e6),
      he = new n.VersionedTransaction(
        new n.TransactionMessage({
          instructions: pe,
          payerKey: X,
          recentBlockhash: n.PublicKey.default.toString(),
        }).compileToV0Message(oe)
      );
    try {
      const _e = await D.simulateTransaction(he, { replaceRecentBlockhash: !0, sigVerify: !1 });
      return _e.value.err
        ? (ce(
            ''
              .concat(ae, ' Error response from simulation: ')
              .concat(JSON.stringify(_e.value.err), ', logs: ')
              .concat(_e.value.logs)
          ),
          null)
        : _e.value.unitsConsumed || null;
    } catch (_e) {
      return ce(''.concat(ae, ' Error simulating transaction: ').concat(_e)), null;
    }
  }
  const N = async (D, L) => {
    const X = [];
    for (const oe of L) {
      const ae = await D.getAddressLookupTable(new n.PublicKey(oe)).then((ce) => ce.value);
      if (!ae)
        throw (console.error('lookup table is not found'), new Error('lookup table is not found'));
      X.push(ae);
    }
    return X;
  };
  t.getLookupTableAccountsFromKeys = N;
  function v(D) {
    return t.MAX_LOCKED_ACCOUNTS - D;
  }
  function w(D, L = []) {
    let X;
    L.length > 0 && L[0] instanceof n.AddressLookupTableAccount
      ? (X = L.map((ae) => ae.key.toBase58()))
      : (X = L.map((ae) => ae.toBase58()));
    const oe = D.map((ae) => ae.keys.map((ce) => ce.pubkey.toBase58()))
      .flat()
      .concat(...X);
    return new Set(oe);
  }
  const x = (D, L) =>
    D.programId.equals(L.programId) &&
    G(
      D.keys,
      L.keys,
      (X, oe) =>
        X.isSigner === oe.isSigner && X.isWritable === oe.isWritable && X.pubkey.equals(oe.pubkey)
    ) &&
    G(Array.from(D.data), Array.from(L.data), (X, oe) => X === oe);
  t.instructionEquals = x;
  function G(D, L, X) {
    return D.length !== L.length
      ? !1
      : D.reduce((oe, ae, ce) => {
          const pe = L[ce];
          return pe == null ? !1 : oe && X(ae, pe);
        }, !0);
  }
  class F extends Error {
    constructor(X, oe, ae, ce) {
      super(X);
      c(this, 'sig');
      c(this, 'logs');
      c(this, 'err');
      (this.sig = oe), (this.logs = ae), (this.err = ce);
    }
  }
  t.TransactionError = F;
  function Q(D, L) {
    const X = [];
    if ((X.push(n.ComputeBudgetProgram.setComputeUnitLimit({ units: D })), L)) {
      const { microLamports: oe } = z(D, L);
      X.push(n.ComputeBudgetProgram.setComputeUnitPrice({ microLamports: oe }));
    }
    return X;
  }
  function z(D, L) {
    const ae = L.mul(1e6).div(D).mul(1).floor().toString();
    return (
      console.debug(
        'Fee per CU lamports: '
          .concat(L, ', units: ')
          .concat(D, ', compute unit price: ')
          .concat(ae)
      ),
      { microLamports: BigInt(ae) }
    );
  }
  function I(D) {
    return D === 'SetComputeUnitLimit';
  }
  function y(D) {
    return D === 'SetComputeUnitPrice';
  }
  function P(D, L) {
    const X = D.filter(
      (oe) =>
        !oe.programId.equals(u.COMPUTE_BUDGET_PROGRAM_ID) ||
        !I(n.ComputeBudgetInstruction.decodeInstructionType(oe))
    );
    return X.unshift(n.ComputeBudgetProgram.setComputeUnitLimit({ units: L })), X;
  }
  const k = (0, i.getEnvOrDefault)('SOLANA_COMPASS_API_URL', 'https://solanacompass.com/api');
  async function V(D) {
    try {
      return D === 'mainnet-beta' ? new r.default(await C(1)) : void 0;
    } catch (L) {
      console.warn('Failed to get average fees', L);
      return;
    }
  }
  async function C(D) {
    return (await M())[D].avg;
  }
  async function M() {
    return await (await fetch(''.concat(k, '/fees'))).json();
  }
  async function W(D, L) {
    var vn;
    const X = ''.concat(L.percentile ? ' P['.concat(L.percentile / 100, ']') : ''),
      oe = ((vn = L.lockedWritableAccounts) == null ? void 0 : vn.length) || 'all global';
    console.log(
      'Fetching recent'.concat(X, ' priority fees from RPC for ').concat(oe, ' accounts')
    );
    const [ae, ce] = await Promise.all([Y(L, D), D.getSlot()]),
      pe = ce - u.SLOTS_PER_MINUTE;
    let he = 0,
      _e = 0,
      Re = new r.default('0');
    const Te = ae.result
      .filter((bt) =>
        bt.prioritizationFee <= 0
          ? (he++, !1)
          : bt.slot < pe
            ? (_e++, !1)
            : ((Re = Re.add(bt.prioritizationFee)), !0)
      )
      .sort((bt, sn) => bt.prioritizationFee - sn.prioritizationFee);
    if (Te.length === 0)
      return (
        console.log(
          'No valid 1 minute'
            .concat(X, ' priority fees returned from RPC for ')
            .concat(oe, ' accounts, using 1 uLamports/CU. Filtered ')
            .concat(he, ' zero fees and ')
            .concat(_e, ' >1 minute fees')
        ),
        {
          min: new r.default('1'),
          max: new r.default('1'),
          average: new r.default('1'),
          median: new r.default('1'),
        }
      );
    if (Te.length === 1)
      return (
        console.log(
          'Fetched 1 valid 1 minute'
            .concat(X, ' priority fee from RPC for ')
            .concat(oe, ' accounts, fee: ')
            .concat(Te[0].prioritizationFee, ' uLamports/CU. Filtered ')
            .concat(he, ' zero fees and ')
            .concat(_e, ' >1 minute fees')
        ),
        {
          min: new r.default(Te[0].prioritizationFee),
          max: new r.default(Te[0].prioritizationFee),
          average: new r.default(Te[0].prioritizationFee),
          median: new r.default(Te[0].prioritizationFee),
        }
      );
    const Xe = new r.default(Te[0].prioritizationFee),
      Ot = new r.default(Te[Te.length - 1].prioritizationFee),
      It = Re.div(Te.length),
      Sn = new r.default(Te[Math.floor(Te.length / 2)].prioritizationFee);
    return (
      console.log(
        'Fetched '
          .concat(Te.length, ' valid 1 minute')
          .concat(X, ' priority fees from RPC for ')
          .concat(oe, ' accounts, median: ')
          .concat(Sn, ' uLamports/CU, average: ')
          .concat(It, ' uLamports/CU, min: ')
          .concat(Xe, ' uLamports/CU, max: ')
          .concat(Ot, ' uLamports/CU. Filtered ')
          .concat(he, ' zero fees and ')
          .concat(_e, ' >1 minute fees')
      ),
      { min: Xe, max: Ot, average: It, median: Sn }
    );
  }
  async function Y(D, L) {
    var pe;
    const X =
        ((pe = D == null ? void 0 : D.lockedWritableAccounts) == null
          ? void 0
          : pe.map((he) => he.toBase58())) || [],
      oe = D.percentile ? { percentile: D.percentile } : {},
      ae = await fetch(L.rpcEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
        },
        body: JSON.stringify({
          method: 'getRecentPrioritizationFees',
          jsonrpc: '2.0',
          params: [[...X], xe({}, oe)],
          id: (0, o.v4)(),
        }),
      });
    if (!ae.ok) throw new Error('Network response was not ok: '.concat(ae.statusText));
    const ce = await ae.json();
    if ('error' in ce)
      throw new n.SolanaJSONRPCError(
        ce.error,
        'Failed to get recent priority fees by accounts: '.concat(
          (D == null ? void 0 : D.lockedWritableAccounts) || []
        )
      );
    return ce;
  }
})(np);
var Qn = {};
Object.defineProperty(Qn, '__esModule', { value: !0 });
Qn.simulateSwapWithATABalances = dR;
Qn.extractTokenBalance = lr;
Qn.isSimulationSlippageError = ip;
Qn.convertSimulatedAccount = As;
const dr = Lt,
  rp = me,
  Bt = ks,
  lR = gt;
async function dR(t, e, n, r, o, i, u) {
  var d;
  try {
    const f = (0, dr.getAssociatedTokenAddressSync)(r, n, !0, i),
      s = (0, dr.getAssociatedTokenAddressSync)(o, n, !0, u),
      _ = [f.toString(), s.toString(), n.toString()],
      [g, m, h] = await Promise.all([
        t.getAccountInfo(f),
        t.getAccountInfo(s),
        t.getAccountInfo(n),
      ]),
      A = lr(g, r.toString()),
      R = lr(m, o.toString()),
      b = (h == null ? void 0 : h.lamports) || 0,
      N = {
        sigVerify: !1,
        commitment: 'confirmed',
        replaceRecentBlockhash: !0,
        accounts: { encoding: 'base64', addresses: _ },
      },
      v = await t.simulateTransaction(e, N);
    if (v.value.err)
      return {
        successful: !1,
        inputToken: null,
        outputToken: null,
        nativeChangeAmount: new Bt.BN(0),
        isSlippageError: ip(v),
        simulationResponse: v,
      };
    const w = v.value.accounts || [],
      x = lr(As(w[0]), r.toString()),
      G = lr(As(w[1]), o.toString()),
      F = ((d = w[2]) == null ? void 0 : d.lamports) || 0,
      Q = il(r.toString(), A, x),
      z = il(o.toString(), R, G),
      I = new Bt.BN(F).sub(new Bt.BN(b)),
      y = Date.now();
    return {
      successful: !0,
      inputToken: Q,
      outputToken: z,
      nativeChangeAmount: I,
      isSlippageError: !1,
      simulationResponse: v,
      simulationTimestamp: y,
    };
  } catch (f) {
    return {
      successful: !1,
      inputToken: null,
      outputToken: null,
      isSlippageError: !1,
      simulationResponse: void 0,
      nativeChangeAmount: new Bt.BN(0),
    };
  }
}
function lr(t, e) {
  if (!t) return { mint: e, amount: new Bt.BN(0) };
  try {
    if (ne.Buffer.isBuffer(t.data)) {
      if (t.owner.equals(lR.SYSTEM_PROGRAM_ID)) return { mint: e, amount: new Bt.BN(0) };
      if (!(t.owner.equals(dr.TOKEN_PROGRAM_ID) || t.owner.equals(dr.TOKEN_2022_PROGRAM_ID)))
        return null;
      const n = dr.AccountLayout.decode(t.data);
      if (new rp.PublicKey(n.mint).toString() !== e) return null;
      const o = new Bt.BN(n.amount.toString());
      return { mint: e, amount: o };
    }
    return null;
  } catch (n) {
    return null;
  }
}
function ip(t) {
  return (
    Array.isArray(t.value.logs) &&
    t.value.logs.some((e) => e && typeof e == 'string' && e.toLowerCase().includes('slippage'))
  );
}
function As(t) {
  var n;
  if (!t) return null;
  const e = Array.isArray(t.data) ? ne.Buffer.from(t.data[0], 'base64') : ne.Buffer.alloc(0);
  return {
    executable: t.executable,
    owner: new rp.PublicKey(t.owner),
    lamports: t.lamports,
    data: e,
    rentEpoch: (n = t.rentEpoch) != null ? n : 0,
  };
}
function il(t, e, n) {
  if (!e && !n) return null;
  const r = e || { mint: t, amount: new Bt.BN(0) },
    o = n || { mint: t, amount: new Bt.BN(0) };
  return { mint: t, beforeAmount: r.amount, afterAmount: o.amount, change: o.amount.sub(r.amount) };
}
var bn = {};
Object.defineProperty(bn, '__esModule', { value: !0 });
bn.addPricesAndPriceImpactToRouteOutput = fR;
bn.calculatePriceImpactBps = An;
bn.getAsyncDataFromApiRouteOutput = pR;
bn.addAsyncDataToRouteOutput = _R;
function fR(t, e) {
  var n, r, o, i;
  return (
    e !== void 0 &&
      e.birdeyeTokenInPriceInSol &&
      e.birdeyeTokenOutPriceInSol &&
      e.inputTokenDecimals &&
      e.outputTokenDecimals &&
      (t.swapType === 'exactIn'
        ? ((e.priceImpactBps = Math.max(
            An(
              e.birdeyeTokenInPriceInSol,
              e.birdeyeTokenOutPriceInSol,
              e.amountsExactIn.amountIn.toNumber() / 10 ** e.inputTokenDecimals,
              e.amountsExactIn.amountOut.toNumber() / 10 ** e.outputTokenDecimals
            ),
            0
          )),
          (e.guaranteedPriceImpactBps = Math.max(
            An(
              e.birdeyeTokenInPriceInSol,
              e.birdeyeTokenOutPriceInSol,
              e.amountsExactIn.amountIn.toNumber() / 10 ** e.inputTokenDecimals,
              e.amountsExactIn.amountOutGuaranteed.toNumber() / 10 ** e.outputTokenDecimals
            ),
            0
          )),
          (e.simulatedPriceImpactBps =
            (n = e.amountsExactIn.amountOutSimulated) != null && n.toNumber()
              ? Math.max(
                  An(
                    e.birdeyeTokenInPriceInSol,
                    e.birdeyeTokenOutPriceInSol,
                    e.amountsExactIn.amountIn.toNumber() / 10 ** e.inputTokenDecimals,
                    ((r = e.amountsExactIn.amountOutSimulated) == null ? void 0 : r.toNumber()) /
                      10 ** e.outputTokenDecimals
                  ),
                  0
                )
              : void 0))
        : ((e.priceImpactBps = Math.max(
            An(
              e.birdeyeTokenInPriceInSol,
              e.birdeyeTokenOutPriceInSol,
              e.amountsExactOut.amountOut.toNumber() / 10 ** e.outputTokenDecimals,
              e.amountsExactOut.amountIn.toNumber() / 10 ** e.inputTokenDecimals
            ),
            0
          )),
          (e.guaranteedPriceImpactBps = Math.max(
            An(
              e.birdeyeTokenInPriceInSol,
              e.birdeyeTokenOutPriceInSol,
              e.amountsExactOut.amountOut.toNumber() / 10 ** e.outputTokenDecimals,
              e.amountsExactOut.amountInGuaranteed.toNumber() / 10 ** e.inputTokenDecimals
            ),
            0
          )),
          (e.simulatedPriceImpactBps =
            (o = e.amountsExactOut.amountInSimulated) != null && o.toNumber()
              ? Math.max(
                  An(
                    e.birdeyeTokenInPriceInSol,
                    e.birdeyeTokenOutPriceInSol,
                    e.amountsExactOut.amountOut.toNumber() / 10 ** e.outputTokenDecimals,
                    ((i = e.amountsExactOut.amountInSimulated) == null ? void 0 : i.toNumber()) /
                      10 ** e.inputTokenDecimals
                  ),
                  0
                )
              : void 0))),
    e
  );
}
function An(t, e, n, r) {
  const o = (n * t) / e;
  return (1 - r / o) * 100 * 100;
}
function pR(t) {
  let e = {
    inputMintProgramOwner: void 0,
    outputMintProgramOwner: void 0,
    inputTokenDecimals: void 0,
    outputTokenDecimals: void 0,
    birdeyeTokenInPriceInSol: void 0,
    birdeyeTokenOutPriceInSol: void 0,
  };
  return (
    t.forEach((n) => {
      n.inputMintProgramOwner && (e.inputMintProgramOwner = n.inputMintProgramOwner),
        n.outputMintProgramOwner && (e.outputMintProgramOwner = n.outputMintProgramOwner),
        n.inputTokenDecimals && (e.inputTokenDecimals = n.inputTokenDecimals),
        n.outputTokenDecimals && (e.outputTokenDecimals = n.outputTokenDecimals),
        n.birdeyeTokenInPriceInSol && (e.birdeyeTokenInPriceInSol = n.birdeyeTokenInPriceInSol),
        n.birdeyeTokenOutPriceInSol && (e.birdeyeTokenOutPriceInSol = n.birdeyeTokenOutPriceInSol);
    }),
    e
  );
}
function _R(t, e) {
  return (
    (t.inputMintProgramOwner = e.inputMintProgramOwner),
    (t.outputMintProgramOwner = e.outputMintProgramOwner),
    (t.inputTokenDecimals = e.inputTokenDecimals),
    (t.outputTokenDecimals = e.outputTokenDecimals),
    (t.birdeyeTokenInPriceInSol = e.birdeyeTokenInPriceInSol),
    (t.birdeyeTokenOutPriceInSol = e.birdeyeTokenOutPriceInSol),
    t
  );
}
(function (t) {
  var e =
      (T && T.__createBinding) ||
      (Object.create
        ? function (r, o, i, u) {
            u === void 0 && (u = i);
            var d = Object.getOwnPropertyDescriptor(o, i);
            (!d || ('get' in d ? !o.__esModule : d.writable || d.configurable)) &&
              (d = {
                enumerable: !0,
                get: function () {
                  return o[i];
                },
              }),
              Object.defineProperty(r, u, d);
          }
        : function (r, o, i, u) {
            u === void 0 && (u = i), (r[u] = o[i]);
          }),
    n =
      (T && T.__exportStar) ||
      function (r, o) {
        for (var i in r)
          i !== 'default' && !Object.prototype.hasOwnProperty.call(o, i) && e(o, r, i);
      };
  Object.defineProperty(t, '__esModule', { value: !0 }),
    n(Oe, t),
    n(Uf, t),
    n(Gs, t),
    n(np, t),
    n(Qn, t),
    n(bn, t);
})(Yn);
var Fs = {},
  op = {};
Object.defineProperty(op, '__esModule', { value: !0 });
var Zn = {},
  zr = {},
  zo = {};
const mR = '0.1.0',
  hR = 'limo',
  gR = [
    {
      name: 'initializeGlobalConfig',
      accounts: [
        { name: 'adminAuthority', isMut: !0, isSigner: !0 },
        { name: 'pdaAuthority', isMut: !0, isSigner: !1 },
        { name: 'globalConfig', isMut: !0, isSigner: !1 },
      ],
      args: [],
    },
    {
      name: 'initializeVault',
      accounts: [
        { name: 'payer', isMut: !0, isSigner: !0 },
        { name: 'globalConfig', isMut: !0, isSigner: !1 },
        { name: 'pdaAuthority', isMut: !1, isSigner: !1 },
        { name: 'mint', isMut: !1, isSigner: !1 },
        { name: 'vault', isMut: !0, isSigner: !1 },
        { name: 'tokenProgram', isMut: !1, isSigner: !1 },
        { name: 'systemProgram', isMut: !1, isSigner: !1 },
      ],
      args: [],
    },
    {
      name: 'createOrder',
      accounts: [
        { name: 'maker', isMut: !0, isSigner: !0 },
        { name: 'globalConfig', isMut: !0, isSigner: !1 },
        { name: 'pdaAuthority', isMut: !1, isSigner: !1 },
        { name: 'order', isMut: !0, isSigner: !1 },
        { name: 'inputMint', isMut: !1, isSigner: !1 },
        { name: 'outputMint', isMut: !1, isSigner: !1 },
        { name: 'makerAta', isMut: !0, isSigner: !1 },
        { name: 'inputVault', isMut: !0, isSigner: !1 },
        { name: 'inputTokenProgram', isMut: !1, isSigner: !1 },
        { name: 'outputTokenProgram', isMut: !1, isSigner: !1 },
        { name: 'systemProgram', isMut: !1, isSigner: !1 },
        { name: 'eventAuthority', isMut: !1, isSigner: !1 },
        { name: 'program', isMut: !1, isSigner: !1 },
      ],
      args: [
        { name: 'inputAmount', type: 'u64' },
        { name: 'outputAmount', type: 'u64' },
        { name: 'orderType', type: 'u8' },
      ],
    },
    {
      name: 'closeOrderAndClaimTip',
      accounts: [
        { name: 'maker', isMut: !0, isSigner: !0 },
        { name: 'order', isMut: !0, isSigner: !1 },
        { name: 'globalConfig', isMut: !0, isSigner: !1 },
        { name: 'pdaAuthority', isMut: !0, isSigner: !1 },
        { name: 'inputMint', isMut: !1, isSigner: !1 },
        {
          name: 'outputMint',
          isMut: !1,
          isSigner: !1,
          docs: ['- required only for indexing the order state from the instruction'],
        },
        { name: 'makerInputAta', isMut: !0, isSigner: !1 },
        { name: 'inputVault', isMut: !0, isSigner: !1 },
        { name: 'inputTokenProgram', isMut: !1, isSigner: !1 },
        { name: 'systemProgram', isMut: !1, isSigner: !1 },
        { name: 'eventAuthority', isMut: !1, isSigner: !1 },
        { name: 'program', isMut: !1, isSigner: !1 },
      ],
      args: [],
    },
    {
      name: 'takeOrder',
      accounts: [
        { name: 'taker', isMut: !0, isSigner: !0 },
        { name: 'maker', isMut: !0, isSigner: !1 },
        { name: 'globalConfig', isMut: !0, isSigner: !1 },
        { name: 'pdaAuthority', isMut: !0, isSigner: !1 },
        { name: 'order', isMut: !0, isSigner: !1 },
        { name: 'inputMint', isMut: !1, isSigner: !1 },
        { name: 'outputMint', isMut: !1, isSigner: !1 },
        { name: 'inputVault', isMut: !0, isSigner: !1 },
        { name: 'takerInputAta', isMut: !0, isSigner: !1 },
        { name: 'takerOutputAta', isMut: !0, isSigner: !1 },
        { name: 'intermediaryOutputTokenAccount', isMut: !0, isSigner: !1, isOptional: !0 },
        { name: 'makerOutputAta', isMut: !0, isSigner: !1, isOptional: !0 },
        { name: 'expressRelay', isMut: !1, isSigner: !1 },
        { name: 'expressRelayMetadata', isMut: !1, isSigner: !1 },
        { name: 'sysvarInstructions', isMut: !1, isSigner: !1 },
        { name: 'permission', isMut: !1, isSigner: !1, isOptional: !0 },
        { name: 'configRouter', isMut: !1, isSigner: !1 },
        { name: 'inputTokenProgram', isMut: !1, isSigner: !1 },
        { name: 'outputTokenProgram', isMut: !1, isSigner: !1 },
        { name: 'rent', isMut: !1, isSigner: !1 },
        { name: 'systemProgram', isMut: !1, isSigner: !1 },
        { name: 'eventAuthority', isMut: !1, isSigner: !1 },
        { name: 'program', isMut: !1, isSigner: !1 },
      ],
      args: [
        { name: 'inputAmount', type: 'u64' },
        { name: 'minOutputAmount', type: 'u64' },
        { name: 'tipAmountPermissionlessTaking', type: 'u64' },
      ],
    },
    {
      name: 'flashTakeOrderStart',
      accounts: [
        { name: 'taker', isMut: !0, isSigner: !0 },
        { name: 'maker', isMut: !0, isSigner: !1 },
        { name: 'globalConfig', isMut: !0, isSigner: !1 },
        { name: 'pdaAuthority', isMut: !0, isSigner: !1 },
        { name: 'order', isMut: !0, isSigner: !1 },
        { name: 'inputMint', isMut: !1, isSigner: !1 },
        { name: 'outputMint', isMut: !1, isSigner: !1 },
        { name: 'inputVault', isMut: !0, isSigner: !1 },
        { name: 'takerInputAta', isMut: !0, isSigner: !1 },
        { name: 'takerOutputAta', isMut: !0, isSigner: !1 },
        { name: 'intermediaryOutputTokenAccount', isMut: !0, isSigner: !1, isOptional: !0 },
        { name: 'makerOutputAta', isMut: !0, isSigner: !1, isOptional: !0 },
        { name: 'expressRelay', isMut: !1, isSigner: !1 },
        { name: 'expressRelayMetadata', isMut: !1, isSigner: !1 },
        { name: 'sysvarInstructions', isMut: !1, isSigner: !1 },
        { name: 'permission', isMut: !1, isSigner: !1, isOptional: !0 },
        { name: 'configRouter', isMut: !1, isSigner: !1 },
        { name: 'inputTokenProgram', isMut: !1, isSigner: !1 },
        { name: 'outputTokenProgram', isMut: !1, isSigner: !1 },
        { name: 'systemProgram', isMut: !1, isSigner: !1 },
        { name: 'rent', isMut: !1, isSigner: !1 },
        { name: 'eventAuthority', isMut: !1, isSigner: !1 },
        { name: 'program', isMut: !1, isSigner: !1 },
      ],
      args: [
        { name: 'inputAmount', type: 'u64' },
        { name: 'minOutputAmount', type: 'u64' },
        { name: 'tipAmountPermissionlessTaking', type: 'u64' },
      ],
    },
    {
      name: 'flashTakeOrderEnd',
      accounts: [
        { name: 'taker', isMut: !0, isSigner: !0 },
        { name: 'maker', isMut: !0, isSigner: !1 },
        { name: 'globalConfig', isMut: !0, isSigner: !1 },
        { name: 'pdaAuthority', isMut: !0, isSigner: !1 },
        { name: 'order', isMut: !0, isSigner: !1 },
        { name: 'inputMint', isMut: !1, isSigner: !1 },
        { name: 'outputMint', isMut: !1, isSigner: !1 },
        { name: 'inputVault', isMut: !0, isSigner: !1 },
        { name: 'takerInputAta', isMut: !0, isSigner: !1 },
        { name: 'takerOutputAta', isMut: !0, isSigner: !1 },
        { name: 'intermediaryOutputTokenAccount', isMut: !0, isSigner: !1, isOptional: !0 },
        { name: 'makerOutputAta', isMut: !0, isSigner: !1, isOptional: !0 },
        { name: 'expressRelay', isMut: !1, isSigner: !1 },
        { name: 'expressRelayMetadata', isMut: !1, isSigner: !1 },
        { name: 'sysvarInstructions', isMut: !1, isSigner: !1 },
        { name: 'permission', isMut: !1, isSigner: !1, isOptional: !0 },
        { name: 'configRouter', isMut: !1, isSigner: !1 },
        { name: 'inputTokenProgram', isMut: !1, isSigner: !1 },
        { name: 'outputTokenProgram', isMut: !1, isSigner: !1 },
        { name: 'systemProgram', isMut: !1, isSigner: !1 },
        { name: 'rent', isMut: !1, isSigner: !1 },
        { name: 'eventAuthority', isMut: !1, isSigner: !1 },
        { name: 'program', isMut: !1, isSigner: !1 },
      ],
      args: [
        { name: 'inputAmount', type: 'u64' },
        { name: 'minOutputAmount', type: 'u64' },
        { name: 'tipAmountPermissionlessTaking', type: 'u64' },
      ],
    },
    {
      name: 'updateGlobalConfig',
      accounts: [
        { name: 'adminAuthority', isMut: !0, isSigner: !0 },
        { name: 'globalConfig', isMut: !0, isSigner: !1 },
      ],
      args: [
        { name: 'mode', type: 'u16' },
        { name: 'value', type: { array: ['u8', 128] } },
      ],
    },
    {
      name: 'updateGlobalConfigAdmin',
      accounts: [
        { name: 'adminAuthorityCached', isMut: !1, isSigner: !0 },
        { name: 'globalConfig', isMut: !0, isSigner: !1 },
      ],
      args: [],
    },
    {
      name: 'withdrawHostTip',
      accounts: [
        { name: 'adminAuthority', isMut: !0, isSigner: !0 },
        { name: 'globalConfig', isMut: !0, isSigner: !1 },
        { name: 'pdaAuthority', isMut: !0, isSigner: !1 },
        { name: 'systemProgram', isMut: !1, isSigner: !1 },
      ],
      args: [],
    },
    {
      name: 'logUserSwapBalancesStart',
      accounts: [
        {
          name: 'baseAccounts',
          accounts: [
            { name: 'maker', isMut: !1, isSigner: !0 },
            { name: 'inputMint', isMut: !1, isSigner: !1 },
            { name: 'outputMint', isMut: !1, isSigner: !1 },
            { name: 'inputTa', isMut: !1, isSigner: !1 },
            { name: 'outputTa', isMut: !1, isSigner: !1 },
            {
              name: 'pdaReferrer',
              isMut: !1,
              isSigner: !1,
              isOptional: !0,
              docs: ["if it's not the pda it doesn't matter"],
            },
            { name: 'swapProgramId', isMut: !1, isSigner: !1 },
          ],
        },
        { name: 'userSwapBalanceState', isMut: !0, isSigner: !1 },
        { name: 'systemProgram', isMut: !1, isSigner: !1 },
        { name: 'rent', isMut: !1, isSigner: !1 },
        { name: 'sysvarInstructions', isMut: !1, isSigner: !1 },
        { name: 'eventAuthority', isMut: !1, isSigner: !1 },
        { name: 'program', isMut: !1, isSigner: !1 },
      ],
      args: [],
    },
    {
      name: 'logUserSwapBalancesEnd',
      accounts: [
        {
          name: 'baseAccounts',
          accounts: [
            { name: 'maker', isMut: !1, isSigner: !0 },
            { name: 'inputMint', isMut: !1, isSigner: !1 },
            { name: 'outputMint', isMut: !1, isSigner: !1 },
            { name: 'inputTa', isMut: !1, isSigner: !1 },
            { name: 'outputTa', isMut: !1, isSigner: !1 },
            {
              name: 'pdaReferrer',
              isMut: !1,
              isSigner: !1,
              isOptional: !0,
              docs: ["if it's not the pda it doesn't matter"],
            },
            { name: 'swapProgramId', isMut: !1, isSigner: !1 },
          ],
        },
        { name: 'userSwapBalanceState', isMut: !0, isSigner: !1 },
        { name: 'systemProgram', isMut: !1, isSigner: !1 },
        { name: 'rent', isMut: !1, isSigner: !1 },
        { name: 'sysvarInstructions', isMut: !1, isSigner: !1 },
        { name: 'eventAuthority', isMut: !1, isSigner: !1 },
        { name: 'program', isMut: !1, isSigner: !1 },
      ],
      args: [
        { name: 'simulatedSwapAmountOut', type: 'u64' },
        { name: 'simulatedTs', type: 'u64' },
        { name: 'minimumAmountOut', type: 'u64' },
        { name: 'swapAmountIn', type: 'u64' },
        { name: 'simulatedAmountOutNextBest', type: 'u64' },
        { name: 'aggregator', type: 'u8' },
        { name: 'nextBestAggregator', type: 'u8' },
        { name: 'padding', type: { array: ['u8', 2] } },
      ],
    },
  ],
  AR = [
    {
      name: 'Order',
      type: {
        kind: 'struct',
        fields: [
          { name: 'globalConfig', type: 'publicKey' },
          { name: 'maker', type: 'publicKey' },
          { name: 'inputMint', type: 'publicKey' },
          { name: 'inputMintProgramId', type: 'publicKey' },
          { name: 'outputMint', type: 'publicKey' },
          { name: 'outputMintProgramId', type: 'publicKey' },
          {
            name: 'initialInputAmount',
            docs: ['The amount of input token the maker wants to swap'],
            type: 'u64',
          },
          {
            name: 'expectedOutputAmount',
            docs: ['The amount of output token the maker wants to receive'],
            type: 'u64',
          },
          {
            name: 'remainingInputAmount',
            docs: ['The amount of input token remaining to be swapped'],
            type: 'u64',
          },
          {
            name: 'filledOutputAmount',
            docs: ['The amount of output token that the maker has received so far'],
            type: 'u64',
          },
          {
            name: 'tipAmount',
            docs: [
              'The amount of tips the maker is due to receive for this order -',
              'in lamports, stored in the pda_authority account',
            ],
            type: 'u64',
          },
          {
            name: 'numberOfFills',
            docs: ['The number of times the order has been filled'],
            type: 'u64',
          },
          { name: 'orderType', type: 'u8' },
          { name: 'status', type: 'u8' },
          { name: 'inVaultBump', type: 'u8' },
          {
            name: 'flashIxLock',
            docs: [
              'This is normally set to 0, but can be set to 1 to indicate that the',
              'order is part of a flash operation, in whcih case the order can not be',
              'modified until the flash operation is completed.',
            ],
            type: 'u8',
          },
          { name: 'padding0', type: { array: ['u8', 4] } },
          { name: 'lastUpdatedTimestamp', type: 'u64' },
          {
            name: 'flashStartTakerOutputBalance',
            docs: [
              'This is only used for flash operations, and is set to the blanance on the start',
              'operation, and than back to 0 on the end operation. It is used to compute the difference',
              'between start and end balances in order to compute the amount received from a potential swap',
            ],
            type: 'u64',
          },
          { name: 'padding', type: { array: ['u64', 19] } },
        ],
      },
    },
    {
      name: 'UserSwapBalancesState',
      type: {
        kind: 'struct',
        fields: [
          { name: 'userLamports', type: 'u64' },
          { name: 'inputTaBalance', type: 'u64' },
          { name: 'outputTaBalance', type: 'u64' },
        ],
      },
    },
    {
      name: 'GlobalConfig',
      type: {
        kind: 'struct',
        fields: [
          { name: 'emergencyMode', type: 'u8' },
          { name: 'flashTakeOrderBlocked', type: 'u8' },
          { name: 'newOrdersBlocked', type: 'u8' },
          { name: 'ordersTakingBlocked', type: 'u8' },
          { name: 'hostFeeBps', type: 'u16' },
          { name: 'isOrderTakingPermissionless', type: 'u8' },
          { name: 'padding0', type: { array: ['u8', 1] } },
          {
            name: 'orderCloseDelaySeconds',
            docs: ['The number of seconds after an order has been updated before it can be closed'],
            type: 'u64',
          },
          { name: 'padding1', type: { array: ['u64', 9] } },
          {
            name: 'pdaAuthorityPreviousLamportsBalance',
            docs: [
              'The total amount of lamports that were present in the pda_authority last',
              'time a program instructions which alters the pda_authority account was',
              'executed',
            ],
            type: 'u64',
          },
          {
            name: 'totalTipAmount',
            docs: [
              'The total amount of tips that have been paid out - should be at least',
              'as much as the total lamports present in the pda_authority account',
            ],
            type: 'u64',
          },
          {
            name: 'hostTipAmount',
            docs: [
              'The amount of tips the host is due to receive -',
              'in lamports, stored in the pda_authority account',
            ],
            type: 'u64',
          },
          { name: 'pdaAuthority', type: 'publicKey' },
          { name: 'pdaAuthorityBump', type: 'u64' },
          { name: 'adminAuthority', type: 'publicKey' },
          { name: 'adminAuthorityCached', type: 'publicKey' },
          { name: 'txnFeeCost', type: 'u64' },
          { name: 'ataCreationCost', type: 'u64' },
          { name: 'padding2', type: { array: ['u64', 241] } },
        ],
      },
    },
  ],
  OR = [
    {
      name: 'OrderStatus',
      type: {
        kind: 'enum',
        variants: [{ name: 'Active' }, { name: 'Filled' }, { name: 'Cancelled' }],
      },
    },
    { name: 'OrderType', type: { kind: 'enum', variants: [{ name: 'Vanilla' }] } },
    {
      name: 'UpdateGlobalConfigMode',
      type: {
        kind: 'enum',
        variants: [
          { name: 'UpdateEmergencyMode' },
          { name: 'UpdateFlashTakeOrderBlocked' },
          { name: 'UpdateBlockNewOrders' },
          { name: 'UpdateBlockOrderTaking' },
          { name: 'UpdateHostFeeBps' },
          { name: 'UpdateAdminAuthorityCached' },
          { name: 'UpdateOrderTakingPermissionless' },
          { name: 'UpdateOrderCloseDelaySeconds' },
          { name: 'UpdateTxnFeeCost' },
          { name: 'UpdateAtaCreationCost' },
        ],
      },
    },
    {
      name: 'UpdateGlobalConfigValue',
      type: {
        kind: 'enum',
        variants: [
          { name: 'Bool', fields: ['bool'] },
          { name: 'U16', fields: ['u16'] },
          { name: 'U64', fields: ['u64'] },
          { name: 'Pubkey', fields: ['publicKey'] },
        ],
      },
    },
  ],
  RR = [
    {
      name: 'OrderDisplay',
      fields: [
        { name: 'initialInputAmount', type: 'u64', index: !1 },
        { name: 'expectedOutputAmount', type: 'u64', index: !1 },
        { name: 'remainingInputAmount', type: 'u64', index: !1 },
        { name: 'filledOutputAmount', type: 'u64', index: !1 },
        { name: 'tipAmount', type: 'u64', index: !1 },
        { name: 'numberOfFills', type: 'u64', index: !1 },
        { name: 'onEventOutputAmountFilled', type: 'u64', index: !1 },
        { name: 'onEventTipAmount', type: 'u64', index: !1 },
        { name: 'orderType', type: 'u8', index: !1 },
        { name: 'status', type: 'u8', index: !1 },
        { name: 'lastUpdatedTimestamp', type: 'u64', index: !1 },
      ],
    },
    {
      name: 'UserSwapBalanceDiffs',
      fields: [
        { name: 'userLamportsBefore', type: 'u64', index: !1 },
        { name: 'inputTaBalanceBefore', type: 'u64', index: !1 },
        { name: 'outputTaBalanceBefore', type: 'u64', index: !1 },
        { name: 'userLamportsAfter', type: 'u64', index: !1 },
        { name: 'inputTaBalanceAfter', type: 'u64', index: !1 },
        { name: 'outputTaBalanceAfter', type: 'u64', index: !1 },
        { name: 'swapProgram', type: 'publicKey', index: !1 },
        { name: 'simulatedSwapAmountOut', type: 'u64', index: !1 },
        { name: 'simulatedTs', type: 'u64', index: !1 },
        { name: 'minimumAmountOut', type: 'u64', index: !1 },
        { name: 'swapAmountIn', type: 'u64', index: !1 },
        { name: 'simulatedAmountOutNextBest', type: 'u64', index: !1 },
        { name: 'aggregator', type: 'u8', index: !1 },
        { name: 'nextBestAggregator', type: 'u8', index: !1 },
      ],
    },
  ],
  yR = [
    { code: 6e3, name: 'OrderCanNotBeCanceled', msg: "Order can't be canceled" },
    { code: 6001, name: 'OrderNotActive', msg: 'Order not active' },
    { code: 6002, name: 'InvalidAdminAuthority', msg: 'Invalid admin authority' },
    { code: 6003, name: 'InvalidPdaAuthority', msg: 'Invalid pda authority' },
    { code: 6004, name: 'InvalidConfigOption', msg: 'Invalid config option' },
    { code: 6005, name: 'InvalidOrderOwner', msg: 'Order owner account is not the order owner' },
    {
      code: 6006,
      name: 'OutOfRangeIntegralConversion',
      msg: 'Out of range integral conversion attempted',
    },
    { code: 6007, name: 'InvalidFlag', msg: 'Invalid boolean flag, valid values are 0 and 1' },
    { code: 6008, name: 'MathOverflow', msg: 'Mathematical operation with overflow' },
    { code: 6009, name: 'OrderInputAmountInvalid', msg: 'Order input amount invalid' },
    { code: 6010, name: 'OrderOutputAmountInvalid', msg: 'Order output amount invalid' },
    { code: 6011, name: 'InvalidHostFee', msg: 'Host fee bps must be between 0 and 10000' },
    { code: 6012, name: 'IntegerOverflow', msg: 'Conversion between integers failed' },
    { code: 6013, name: 'InvalidTipBalance', msg: 'Tip balance less than accounted tip' },
    {
      code: 6014,
      name: 'InvalidTipTransferAmount',
      msg: 'Tip transfer amount is less than expected',
    },
    {
      code: 6015,
      name: 'InvalidHostTipBalance',
      msg: 'Host tup amount is less than accounted for',
    },
    {
      code: 6016,
      name: 'OrderWithinFlashOperation',
      msg: 'Order within flash operation - all otehr actions are blocked',
    },
    { code: 6017, name: 'CPINotAllowed', msg: 'CPI not allowed' },
    { code: 6018, name: 'FlashTakeOrderBlocked', msg: 'Flash take_order is blocked' },
    {
      code: 6019,
      name: 'FlashTxWithUnexpectedIxs',
      msg: 'Some unexpected instructions are present in the tx. Either before or after the flash ixs, or some ix target the same program between',
    },
    {
      code: 6020,
      name: 'FlashIxsNotEnded',
      msg: 'Flash ixs initiated without the closing ix in the transaction',
    },
    {
      code: 6021,
      name: 'FlashIxsNotStarted',
      msg: 'Flash ixs ended without the starting ix in the transaction',
    },
    {
      code: 6022,
      name: 'FlashIxsAccountMismatch',
      msg: 'Some accounts differ between the two flash ixs',
    },
    { code: 6023, name: 'FlashIxsArgsMismatch', msg: 'Some args differ between the two flash ixs' },
    {
      code: 6024,
      name: 'OrderNotWithinFlashOperation',
      msg: 'Order is not within flash operation',
    },
    { code: 6025, name: 'EmergencyModeEnabled', msg: 'Emergency mode is enabled' },
    { code: 6026, name: 'CreatingNewOrdersBlocked', msg: 'Creating new ordersis blocked' },
    { code: 6027, name: 'OrderTakingBlocked', msg: 'Orders taking is blocked' },
    {
      code: 6028,
      name: 'OrderInputAmountTooLarge',
      msg: 'Order input amount larger than the remaining',
    },
    {
      code: 6029,
      name: 'PermissionRequiredPermissionlessNotEnabled',
      msg: 'Permissionless order taking not enabled, please provide permission account',
    },
    {
      code: 6030,
      name: 'PermissionDoesNotMatchOrder',
      msg: 'Permission address does not match order address',
    },
    { code: 6031, name: 'InvalidAtaAddress', msg: 'Invalid ata address' },
    {
      code: 6032,
      name: 'MakerOutputAtaRequired',
      msg: 'Maker output ata required when output mint is not WSOL',
    },
    {
      code: 6033,
      name: 'IntermediaryOutputTokenAccountRequired',
      msg: 'Intermediary output token account required when output mint is WSOL',
    },
    { code: 6034, name: 'NotEnoughBalanceForRent', msg: 'Not enough balance for rent' },
    {
      code: 6035,
      name: 'NotEnoughTimePassedSinceLastUpdate',
      msg: 'Order can not be closed - Not enough time passed since last update',
    },
    { code: 6036, name: 'OrderSameMint', msg: 'Order input and output mints are the same' },
    {
      code: 6037,
      name: 'UnsupportedTokenExtension',
      msg: 'Mint has a token (2022) extension that is not supported',
    },
    {
      code: 6038,
      name: 'InvalidTokenAccount',
      msg: "Can't have an spl token mint with a t22 account",
    },
    { code: 6039, name: 'OrderTypeInvalid', msg: 'The order type is invalid' },
    { code: 6040, name: 'UninitializedTokenAccount', msg: 'Token account is not initialized' },
    {
      code: 6041,
      name: 'InvalidTokenAccountOwner',
      msg: 'Account is not owned by the token program',
    },
    { code: 6042, name: 'InvalidAccount', msg: 'Account is not a valid token account' },
    { code: 6043, name: 'InvalidTokenMint', msg: 'Token account has incorrect mint' },
    { code: 6044, name: 'InvalidTokenAuthority', msg: 'Token account has incorrect authority' },
  ],
  sp = { version: mR, name: hR, instructions: gR, accounts: AR, types: OR, events: RR, errors: yR };
var Yo = {},
  dt = {},
  Di = {},
  Ks = {},
  Ge = {};
(function (t) {
  Object.defineProperty(t, '__esModule', { value: !0 }), (t.PROGRAM_ID = t.PROGRAM_ID_CLI = void 0);
  const e = me;
  (t.PROGRAM_ID_CLI = new e.PublicKey('LiMoM9rMhrdYrfzUCxQppvxCSG1FcrUK9G8uLq4A1GF')),
    (t.PROGRAM_ID = t.PROGRAM_ID_CLI);
})(Ge);
Object.defineProperty(Ks, '__esModule', { value: !0 });
Ks.initializeGlobalConfig = wR;
const TR = me,
  ER = Ge;
function wR(t, e = ER.PROGRAM_ID) {
  const n = [
      { pubkey: t.adminAuthority, isSigner: !0, isWritable: !0 },
      { pubkey: t.pdaAuthority, isSigner: !1, isWritable: !0 },
      { pubkey: t.globalConfig, isSigner: !1, isWritable: !0 },
    ],
    o = ne.Buffer.from([113, 216, 122, 131, 225, 209, 22, 55]);
  return new TR.TransactionInstruction({ keys: n, programId: e, data: o });
}
var Vs = {};
Object.defineProperty(Vs, '__esModule', { value: !0 });
Vs.initializeVault = NR;
const IR = me,
  bR = Ge;
function NR(t, e = bR.PROGRAM_ID) {
  const n = [
      { pubkey: t.payer, isSigner: !0, isWritable: !0 },
      { pubkey: t.globalConfig, isSigner: !1, isWritable: !0 },
      { pubkey: t.pdaAuthority, isSigner: !1, isWritable: !1 },
      { pubkey: t.mint, isSigner: !1, isWritable: !1 },
      { pubkey: t.vault, isSigner: !1, isWritable: !0 },
      { pubkey: t.tokenProgram, isSigner: !1, isWritable: !1 },
      { pubkey: t.systemProgram, isSigner: !1, isWritable: !1 },
    ],
    o = ne.Buffer.from([48, 191, 163, 44, 71, 129, 63, 164]);
  return new IR.TransactionInstruction({ keys: n, programId: e, data: o });
}
var ap = {};
(function (t) {
  var e =
      (T && T.__createBinding) ||
      (Object.create
        ? function (f, s, _, g) {
            g === void 0 && (g = _);
            var m = Object.getOwnPropertyDescriptor(s, _);
            (!m || ('get' in m ? !s.__esModule : m.writable || m.configurable)) &&
              (m = {
                enumerable: !0,
                get: function () {
                  return s[_];
                },
              }),
              Object.defineProperty(f, g, m);
          }
        : function (f, s, _, g) {
            g === void 0 && (g = _), (f[g] = s[_]);
          }),
    n =
      (T && T.__setModuleDefault) ||
      (Object.create
        ? function (f, s) {
            Object.defineProperty(f, 'default', { enumerable: !0, value: s });
          }
        : function (f, s) {
            f.default = s;
          }),
    r =
      (T && T.__importStar) ||
      (function () {
        var f = function (s) {
          return (
            (f =
              Object.getOwnPropertyNames ||
              function (_) {
                var g = [];
                for (var m in _) Object.prototype.hasOwnProperty.call(_, m) && (g[g.length] = m);
                return g;
              }),
            f(s)
          );
        };
        return function (s) {
          if (s && s.__esModule) return s;
          var _ = {};
          if (s != null)
            for (var g = f(s), m = 0; m < g.length; m++) g[m] !== 'default' && e(_, s, g[m]);
          return n(_, s), _;
        };
      })();
  Object.defineProperty(t, '__esModule', { value: !0 }), (t.layout = void 0), (t.createOrder = d);
  const o = me,
    i = r(ot),
    u = Ge;
  t.layout = i.struct([i.u64('inputAmount'), i.u64('outputAmount'), i.u8('orderType')]);
  function d(f, s, _ = u.PROGRAM_ID) {
    const g = [
        { pubkey: s.maker, isSigner: !0, isWritable: !0 },
        { pubkey: s.globalConfig, isSigner: !1, isWritable: !0 },
        { pubkey: s.pdaAuthority, isSigner: !1, isWritable: !1 },
        { pubkey: s.order, isSigner: !1, isWritable: !0 },
        { pubkey: s.inputMint, isSigner: !1, isWritable: !1 },
        { pubkey: s.outputMint, isSigner: !1, isWritable: !1 },
        { pubkey: s.makerAta, isSigner: !1, isWritable: !0 },
        { pubkey: s.inputVault, isSigner: !1, isWritable: !0 },
        { pubkey: s.inputTokenProgram, isSigner: !1, isWritable: !1 },
        { pubkey: s.outputTokenProgram, isSigner: !1, isWritable: !1 },
        { pubkey: s.systemProgram, isSigner: !1, isWritable: !1 },
        { pubkey: s.eventAuthority, isSigner: !1, isWritable: !1 },
        { pubkey: s.program, isSigner: !1, isWritable: !1 },
      ],
      m = ne.Buffer.from([141, 54, 37, 207, 237, 210, 250, 215]),
      h = ne.Buffer.alloc(1e3),
      A = t.layout.encode(
        { inputAmount: f.inputAmount, outputAmount: f.outputAmount, orderType: f.orderType },
        h
      ),
      R = ne.Buffer.concat([m, h]).slice(0, 8 + A);
    return new o.TransactionInstruction({ keys: g, programId: _, data: R });
  }
})(ap);
var Ws = {};
Object.defineProperty(Ws, '__esModule', { value: !0 });
Ws.closeOrderAndClaimTip = vR;
const CR = me,
  SR = Ge;
function vR(t, e = SR.PROGRAM_ID) {
  const n = [
      { pubkey: t.maker, isSigner: !0, isWritable: !0 },
      { pubkey: t.order, isSigner: !1, isWritable: !0 },
      { pubkey: t.globalConfig, isSigner: !1, isWritable: !0 },
      { pubkey: t.pdaAuthority, isSigner: !1, isWritable: !0 },
      { pubkey: t.inputMint, isSigner: !1, isWritable: !1 },
      { pubkey: t.outputMint, isSigner: !1, isWritable: !1 },
      { pubkey: t.makerInputAta, isSigner: !1, isWritable: !0 },
      { pubkey: t.inputVault, isSigner: !1, isWritable: !0 },
      { pubkey: t.inputTokenProgram, isSigner: !1, isWritable: !1 },
      { pubkey: t.systemProgram, isSigner: !1, isWritable: !1 },
      { pubkey: t.eventAuthority, isSigner: !1, isWritable: !1 },
      { pubkey: t.program, isSigner: !1, isWritable: !1 },
    ],
    o = ne.Buffer.from([244, 27, 12, 226, 45, 247, 230, 43]);
  return new CR.TransactionInstruction({ keys: n, programId: e, data: o });
}
var up = {};
(function (t) {
  var e =
      (T && T.__createBinding) ||
      (Object.create
        ? function (f, s, _, g) {
            g === void 0 && (g = _);
            var m = Object.getOwnPropertyDescriptor(s, _);
            (!m || ('get' in m ? !s.__esModule : m.writable || m.configurable)) &&
              (m = {
                enumerable: !0,
                get: function () {
                  return s[_];
                },
              }),
              Object.defineProperty(f, g, m);
          }
        : function (f, s, _, g) {
            g === void 0 && (g = _), (f[g] = s[_]);
          }),
    n =
      (T && T.__setModuleDefault) ||
      (Object.create
        ? function (f, s) {
            Object.defineProperty(f, 'default', { enumerable: !0, value: s });
          }
        : function (f, s) {
            f.default = s;
          }),
    r =
      (T && T.__importStar) ||
      (function () {
        var f = function (s) {
          return (
            (f =
              Object.getOwnPropertyNames ||
              function (_) {
                var g = [];
                for (var m in _) Object.prototype.hasOwnProperty.call(_, m) && (g[g.length] = m);
                return g;
              }),
            f(s)
          );
        };
        return function (s) {
          if (s && s.__esModule) return s;
          var _ = {};
          if (s != null)
            for (var g = f(s), m = 0; m < g.length; m++) g[m] !== 'default' && e(_, s, g[m]);
          return n(_, s), _;
        };
      })();
  Object.defineProperty(t, '__esModule', { value: !0 }), (t.layout = void 0), (t.takeOrder = d);
  const o = me,
    i = r(ot),
    u = Ge;
  t.layout = i.struct([
    i.u64('inputAmount'),
    i.u64('minOutputAmount'),
    i.u64('tipAmountPermissionlessTaking'),
  ]);
  function d(f, s, _ = u.PROGRAM_ID) {
    const g = [
        { pubkey: s.taker, isSigner: !0, isWritable: !0 },
        { pubkey: s.maker, isSigner: !1, isWritable: !0 },
        { pubkey: s.globalConfig, isSigner: !1, isWritable: !0 },
        { pubkey: s.pdaAuthority, isSigner: !1, isWritable: !0 },
        { pubkey: s.order, isSigner: !1, isWritable: !0 },
        { pubkey: s.inputMint, isSigner: !1, isWritable: !1 },
        { pubkey: s.outputMint, isSigner: !1, isWritable: !1 },
        { pubkey: s.inputVault, isSigner: !1, isWritable: !0 },
        { pubkey: s.takerInputAta, isSigner: !1, isWritable: !0 },
        { pubkey: s.takerOutputAta, isSigner: !1, isWritable: !0 },
        { pubkey: s.intermediaryOutputTokenAccount, isSigner: !1, isWritable: !0 },
        { pubkey: s.makerOutputAta, isSigner: !1, isWritable: !0 },
        { pubkey: s.expressRelay, isSigner: !1, isWritable: !1 },
        { pubkey: s.expressRelayMetadata, isSigner: !1, isWritable: !1 },
        { pubkey: s.sysvarInstructions, isSigner: !1, isWritable: !1 },
        { pubkey: s.permission, isSigner: !1, isWritable: !1 },
        { pubkey: s.configRouter, isSigner: !1, isWritable: !1 },
        { pubkey: s.inputTokenProgram, isSigner: !1, isWritable: !1 },
        { pubkey: s.outputTokenProgram, isSigner: !1, isWritable: !1 },
        { pubkey: s.rent, isSigner: !1, isWritable: !1 },
        { pubkey: s.systemProgram, isSigner: !1, isWritable: !1 },
        { pubkey: s.eventAuthority, isSigner: !1, isWritable: !1 },
        { pubkey: s.program, isSigner: !1, isWritable: !1 },
      ],
      m = ne.Buffer.from([163, 208, 20, 172, 223, 65, 255, 228]),
      h = ne.Buffer.alloc(1e3),
      A = t.layout.encode(
        {
          inputAmount: f.inputAmount,
          minOutputAmount: f.minOutputAmount,
          tipAmountPermissionlessTaking: f.tipAmountPermissionlessTaking,
        },
        h
      ),
      R = ne.Buffer.concat([m, h]).slice(0, 8 + A);
    return new o.TransactionInstruction({ keys: g, programId: _, data: R });
  }
})(up);
var cp = {};
(function (t) {
  var e =
      (T && T.__createBinding) ||
      (Object.create
        ? function (f, s, _, g) {
            g === void 0 && (g = _);
            var m = Object.getOwnPropertyDescriptor(s, _);
            (!m || ('get' in m ? !s.__esModule : m.writable || m.configurable)) &&
              (m = {
                enumerable: !0,
                get: function () {
                  return s[_];
                },
              }),
              Object.defineProperty(f, g, m);
          }
        : function (f, s, _, g) {
            g === void 0 && (g = _), (f[g] = s[_]);
          }),
    n =
      (T && T.__setModuleDefault) ||
      (Object.create
        ? function (f, s) {
            Object.defineProperty(f, 'default', { enumerable: !0, value: s });
          }
        : function (f, s) {
            f.default = s;
          }),
    r =
      (T && T.__importStar) ||
      (function () {
        var f = function (s) {
          return (
            (f =
              Object.getOwnPropertyNames ||
              function (_) {
                var g = [];
                for (var m in _) Object.prototype.hasOwnProperty.call(_, m) && (g[g.length] = m);
                return g;
              }),
            f(s)
          );
        };
        return function (s) {
          if (s && s.__esModule) return s;
          var _ = {};
          if (s != null)
            for (var g = f(s), m = 0; m < g.length; m++) g[m] !== 'default' && e(_, s, g[m]);
          return n(_, s), _;
        };
      })();
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.layout = void 0),
    (t.flashTakeOrderStart = d);
  const o = me,
    i = r(ot),
    u = Ge;
  t.layout = i.struct([
    i.u64('inputAmount'),
    i.u64('minOutputAmount'),
    i.u64('tipAmountPermissionlessTaking'),
  ]);
  function d(f, s, _ = u.PROGRAM_ID) {
    const g = [
        { pubkey: s.taker, isSigner: !0, isWritable: !0 },
        { pubkey: s.maker, isSigner: !1, isWritable: !0 },
        { pubkey: s.globalConfig, isSigner: !1, isWritable: !0 },
        { pubkey: s.pdaAuthority, isSigner: !1, isWritable: !0 },
        { pubkey: s.order, isSigner: !1, isWritable: !0 },
        { pubkey: s.inputMint, isSigner: !1, isWritable: !1 },
        { pubkey: s.outputMint, isSigner: !1, isWritable: !1 },
        { pubkey: s.inputVault, isSigner: !1, isWritable: !0 },
        { pubkey: s.takerInputAta, isSigner: !1, isWritable: !0 },
        { pubkey: s.takerOutputAta, isSigner: !1, isWritable: !0 },
        { pubkey: s.intermediaryOutputTokenAccount, isSigner: !1, isWritable: !0 },
        { pubkey: s.makerOutputAta, isSigner: !1, isWritable: !0 },
        { pubkey: s.expressRelay, isSigner: !1, isWritable: !1 },
        { pubkey: s.expressRelayMetadata, isSigner: !1, isWritable: !1 },
        { pubkey: s.sysvarInstructions, isSigner: !1, isWritable: !1 },
        { pubkey: s.permission, isSigner: !1, isWritable: !1 },
        { pubkey: s.configRouter, isSigner: !1, isWritable: !1 },
        { pubkey: s.inputTokenProgram, isSigner: !1, isWritable: !1 },
        { pubkey: s.outputTokenProgram, isSigner: !1, isWritable: !1 },
        { pubkey: s.systemProgram, isSigner: !1, isWritable: !1 },
        { pubkey: s.rent, isSigner: !1, isWritable: !1 },
        { pubkey: s.eventAuthority, isSigner: !1, isWritable: !1 },
        { pubkey: s.program, isSigner: !1, isWritable: !1 },
      ],
      m = ne.Buffer.from([126, 53, 176, 15, 39, 103, 97, 243]),
      h = ne.Buffer.alloc(1e3),
      A = t.layout.encode(
        {
          inputAmount: f.inputAmount,
          minOutputAmount: f.minOutputAmount,
          tipAmountPermissionlessTaking: f.tipAmountPermissionlessTaking,
        },
        h
      ),
      R = ne.Buffer.concat([m, h]).slice(0, 8 + A);
    return new o.TransactionInstruction({ keys: g, programId: _, data: R });
  }
})(cp);
var lp = {};
(function (t) {
  var e =
      (T && T.__createBinding) ||
      (Object.create
        ? function (f, s, _, g) {
            g === void 0 && (g = _);
            var m = Object.getOwnPropertyDescriptor(s, _);
            (!m || ('get' in m ? !s.__esModule : m.writable || m.configurable)) &&
              (m = {
                enumerable: !0,
                get: function () {
                  return s[_];
                },
              }),
              Object.defineProperty(f, g, m);
          }
        : function (f, s, _, g) {
            g === void 0 && (g = _), (f[g] = s[_]);
          }),
    n =
      (T && T.__setModuleDefault) ||
      (Object.create
        ? function (f, s) {
            Object.defineProperty(f, 'default', { enumerable: !0, value: s });
          }
        : function (f, s) {
            f.default = s;
          }),
    r =
      (T && T.__importStar) ||
      (function () {
        var f = function (s) {
          return (
            (f =
              Object.getOwnPropertyNames ||
              function (_) {
                var g = [];
                for (var m in _) Object.prototype.hasOwnProperty.call(_, m) && (g[g.length] = m);
                return g;
              }),
            f(s)
          );
        };
        return function (s) {
          if (s && s.__esModule) return s;
          var _ = {};
          if (s != null)
            for (var g = f(s), m = 0; m < g.length; m++) g[m] !== 'default' && e(_, s, g[m]);
          return n(_, s), _;
        };
      })();
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.layout = void 0),
    (t.flashTakeOrderEnd = d);
  const o = me,
    i = r(ot),
    u = Ge;
  t.layout = i.struct([
    i.u64('inputAmount'),
    i.u64('minOutputAmount'),
    i.u64('tipAmountPermissionlessTaking'),
  ]);
  function d(f, s, _ = u.PROGRAM_ID) {
    const g = [
        { pubkey: s.taker, isSigner: !0, isWritable: !0 },
        { pubkey: s.maker, isSigner: !1, isWritable: !0 },
        { pubkey: s.globalConfig, isSigner: !1, isWritable: !0 },
        { pubkey: s.pdaAuthority, isSigner: !1, isWritable: !0 },
        { pubkey: s.order, isSigner: !1, isWritable: !0 },
        { pubkey: s.inputMint, isSigner: !1, isWritable: !1 },
        { pubkey: s.outputMint, isSigner: !1, isWritable: !1 },
        { pubkey: s.inputVault, isSigner: !1, isWritable: !0 },
        { pubkey: s.takerInputAta, isSigner: !1, isWritable: !0 },
        { pubkey: s.takerOutputAta, isSigner: !1, isWritable: !0 },
        { pubkey: s.intermediaryOutputTokenAccount, isSigner: !1, isWritable: !0 },
        { pubkey: s.makerOutputAta, isSigner: !1, isWritable: !0 },
        { pubkey: s.expressRelay, isSigner: !1, isWritable: !1 },
        { pubkey: s.expressRelayMetadata, isSigner: !1, isWritable: !1 },
        { pubkey: s.sysvarInstructions, isSigner: !1, isWritable: !1 },
        { pubkey: s.permission, isSigner: !1, isWritable: !1 },
        { pubkey: s.configRouter, isSigner: !1, isWritable: !1 },
        { pubkey: s.inputTokenProgram, isSigner: !1, isWritable: !1 },
        { pubkey: s.outputTokenProgram, isSigner: !1, isWritable: !1 },
        { pubkey: s.systemProgram, isSigner: !1, isWritable: !1 },
        { pubkey: s.rent, isSigner: !1, isWritable: !1 },
        { pubkey: s.eventAuthority, isSigner: !1, isWritable: !1 },
        { pubkey: s.program, isSigner: !1, isWritable: !1 },
      ],
      m = ne.Buffer.from([206, 242, 215, 187, 134, 33, 224, 148]),
      h = ne.Buffer.alloc(1e3),
      A = t.layout.encode(
        {
          inputAmount: f.inputAmount,
          minOutputAmount: f.minOutputAmount,
          tipAmountPermissionlessTaking: f.tipAmountPermissionlessTaking,
        },
        h
      ),
      R = ne.Buffer.concat([m, h]).slice(0, 8 + A);
    return new o.TransactionInstruction({ keys: g, programId: _, data: R });
  }
})(lp);
var dp = {};
(function (t) {
  var e =
      (T && T.__createBinding) ||
      (Object.create
        ? function (f, s, _, g) {
            g === void 0 && (g = _);
            var m = Object.getOwnPropertyDescriptor(s, _);
            (!m || ('get' in m ? !s.__esModule : m.writable || m.configurable)) &&
              (m = {
                enumerable: !0,
                get: function () {
                  return s[_];
                },
              }),
              Object.defineProperty(f, g, m);
          }
        : function (f, s, _, g) {
            g === void 0 && (g = _), (f[g] = s[_]);
          }),
    n =
      (T && T.__setModuleDefault) ||
      (Object.create
        ? function (f, s) {
            Object.defineProperty(f, 'default', { enumerable: !0, value: s });
          }
        : function (f, s) {
            f.default = s;
          }),
    r =
      (T && T.__importStar) ||
      (function () {
        var f = function (s) {
          return (
            (f =
              Object.getOwnPropertyNames ||
              function (_) {
                var g = [];
                for (var m in _) Object.prototype.hasOwnProperty.call(_, m) && (g[g.length] = m);
                return g;
              }),
            f(s)
          );
        };
        return function (s) {
          if (s && s.__esModule) return s;
          var _ = {};
          if (s != null)
            for (var g = f(s), m = 0; m < g.length; m++) g[m] !== 'default' && e(_, s, g[m]);
          return n(_, s), _;
        };
      })();
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.layout = void 0),
    (t.updateGlobalConfig = d);
  const o = me,
    i = r(ot),
    u = Ge;
  t.layout = i.struct([i.u16('mode'), i.array(i.u8(), 128, 'value')]);
  function d(f, s, _ = u.PROGRAM_ID) {
    const g = [
        { pubkey: s.adminAuthority, isSigner: !0, isWritable: !0 },
        { pubkey: s.globalConfig, isSigner: !1, isWritable: !0 },
      ],
      m = ne.Buffer.from([164, 84, 130, 189, 111, 58, 250, 200]),
      h = ne.Buffer.alloc(1e3),
      A = t.layout.encode({ mode: f.mode, value: f.value }, h),
      R = ne.Buffer.concat([m, h]).slice(0, 8 + A);
    return new o.TransactionInstruction({ keys: g, programId: _, data: R });
  }
})(dp);
var qs = {};
Object.defineProperty(qs, '__esModule', { value: !0 });
qs.updateGlobalConfigAdmin = kR;
const PR = me,
  MR = Ge;
function kR(t, e = MR.PROGRAM_ID) {
  const n = [
      { pubkey: t.adminAuthorityCached, isSigner: !0, isWritable: !1 },
      { pubkey: t.globalConfig, isSigner: !1, isWritable: !0 },
    ],
    o = ne.Buffer.from([184, 87, 23, 193, 156, 238, 175, 119]);
  return new PR.TransactionInstruction({ keys: n, programId: e, data: o });
}
var zs = {};
Object.defineProperty(zs, '__esModule', { value: !0 });
zs.withdrawHostTip = xR;
const DR = me,
  BR = Ge;
function xR(t, e = BR.PROGRAM_ID) {
  const n = [
      { pubkey: t.adminAuthority, isSigner: !0, isWritable: !0 },
      { pubkey: t.globalConfig, isSigner: !1, isWritable: !0 },
      { pubkey: t.pdaAuthority, isSigner: !1, isWritable: !0 },
      { pubkey: t.systemProgram, isSigner: !1, isWritable: !1 },
    ],
    o = ne.Buffer.from([140, 246, 105, 165, 80, 85, 143, 18]);
  return new DR.TransactionInstruction({ keys: n, programId: e, data: o });
}
var Ys = {};
Object.defineProperty(Ys, '__esModule', { value: !0 });
Ys.logUserSwapBalancesStart = $R;
const LR = me,
  UR = Ge;
function $R(t, e = UR.PROGRAM_ID) {
  const n = [
      { pubkey: t.baseAccounts.maker, isSigner: !0, isWritable: !1 },
      { pubkey: t.baseAccounts.inputMint, isSigner: !1, isWritable: !1 },
      { pubkey: t.baseAccounts.outputMint, isSigner: !1, isWritable: !1 },
      { pubkey: t.baseAccounts.inputTa, isSigner: !1, isWritable: !1 },
      { pubkey: t.baseAccounts.outputTa, isSigner: !1, isWritable: !1 },
      { pubkey: t.baseAccounts.pdaReferrer, isSigner: !1, isWritable: !1 },
      { pubkey: t.baseAccounts.swapProgramId, isSigner: !1, isWritable: !1 },
      { pubkey: t.userSwapBalanceState, isSigner: !1, isWritable: !0 },
      { pubkey: t.systemProgram, isSigner: !1, isWritable: !1 },
      { pubkey: t.rent, isSigner: !1, isWritable: !1 },
      { pubkey: t.sysvarInstructions, isSigner: !1, isWritable: !1 },
      { pubkey: t.eventAuthority, isSigner: !1, isWritable: !1 },
      { pubkey: t.program, isSigner: !1, isWritable: !1 },
    ],
    o = ne.Buffer.from([133, 108, 23, 15, 226, 215, 176, 95]);
  return new LR.TransactionInstruction({ keys: n, programId: e, data: o });
}
var fp = {};
(function (t) {
  var e =
      (T && T.__createBinding) ||
      (Object.create
        ? function (f, s, _, g) {
            g === void 0 && (g = _);
            var m = Object.getOwnPropertyDescriptor(s, _);
            (!m || ('get' in m ? !s.__esModule : m.writable || m.configurable)) &&
              (m = {
                enumerable: !0,
                get: function () {
                  return s[_];
                },
              }),
              Object.defineProperty(f, g, m);
          }
        : function (f, s, _, g) {
            g === void 0 && (g = _), (f[g] = s[_]);
          }),
    n =
      (T && T.__setModuleDefault) ||
      (Object.create
        ? function (f, s) {
            Object.defineProperty(f, 'default', { enumerable: !0, value: s });
          }
        : function (f, s) {
            f.default = s;
          }),
    r =
      (T && T.__importStar) ||
      (function () {
        var f = function (s) {
          return (
            (f =
              Object.getOwnPropertyNames ||
              function (_) {
                var g = [];
                for (var m in _) Object.prototype.hasOwnProperty.call(_, m) && (g[g.length] = m);
                return g;
              }),
            f(s)
          );
        };
        return function (s) {
          if (s && s.__esModule) return s;
          var _ = {};
          if (s != null)
            for (var g = f(s), m = 0; m < g.length; m++) g[m] !== 'default' && e(_, s, g[m]);
          return n(_, s), _;
        };
      })();
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.layout = void 0),
    (t.logUserSwapBalancesEnd = d);
  const o = me,
    i = r(ot),
    u = Ge;
  t.layout = i.struct([
    i.u64('simulatedSwapAmountOut'),
    i.u64('simulatedTs'),
    i.u64('minimumAmountOut'),
    i.u64('swapAmountIn'),
    i.u64('simulatedAmountOutNextBest'),
    i.u8('aggregator'),
    i.u8('nextBestAggregator'),
    i.array(i.u8(), 2, 'padding'),
  ]);
  function d(f, s, _ = u.PROGRAM_ID) {
    const g = [
        { pubkey: s.baseAccounts.maker, isSigner: !0, isWritable: !1 },
        { pubkey: s.baseAccounts.inputMint, isSigner: !1, isWritable: !1 },
        { pubkey: s.baseAccounts.outputMint, isSigner: !1, isWritable: !1 },
        { pubkey: s.baseAccounts.inputTa, isSigner: !1, isWritable: !1 },
        { pubkey: s.baseAccounts.outputTa, isSigner: !1, isWritable: !1 },
        { pubkey: s.baseAccounts.pdaReferrer, isSigner: !1, isWritable: !1 },
        { pubkey: s.baseAccounts.swapProgramId, isSigner: !1, isWritable: !1 },
        { pubkey: s.userSwapBalanceState, isSigner: !1, isWritable: !0 },
        { pubkey: s.systemProgram, isSigner: !1, isWritable: !1 },
        { pubkey: s.rent, isSigner: !1, isWritable: !1 },
        { pubkey: s.sysvarInstructions, isSigner: !1, isWritable: !1 },
        { pubkey: s.eventAuthority, isSigner: !1, isWritable: !1 },
        { pubkey: s.program, isSigner: !1, isWritable: !1 },
      ],
      m = ne.Buffer.from([140, 42, 198, 82, 147, 144, 44, 113]),
      h = ne.Buffer.alloc(1e3),
      A = t.layout.encode(
        {
          simulatedSwapAmountOut: f.simulatedSwapAmountOut,
          simulatedTs: f.simulatedTs,
          minimumAmountOut: f.minimumAmountOut,
          swapAmountIn: f.swapAmountIn,
          simulatedAmountOutNextBest: f.simulatedAmountOutNextBest,
          aggregator: f.aggregator,
          nextBestAggregator: f.nextBestAggregator,
          padding: f.padding,
        },
        h
      ),
      R = ne.Buffer.concat([m, h]).slice(0, 8 + A);
    return new o.TransactionInstruction({ keys: g, programId: _, data: R });
  }
})(fp);
(function (t) {
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.logUserSwapBalancesEnd =
      t.logUserSwapBalancesStart =
      t.withdrawHostTip =
      t.updateGlobalConfigAdmin =
      t.updateGlobalConfig =
      t.flashTakeOrderEnd =
      t.flashTakeOrderStart =
      t.takeOrder =
      t.closeOrderAndClaimTip =
      t.createOrder =
      t.initializeVault =
      t.initializeGlobalConfig =
        void 0);
  var e = Ks;
  Object.defineProperty(t, 'initializeGlobalConfig', {
    enumerable: !0,
    get: function () {
      return e.initializeGlobalConfig;
    },
  });
  var n = Vs;
  Object.defineProperty(t, 'initializeVault', {
    enumerable: !0,
    get: function () {
      return n.initializeVault;
    },
  });
  var r = ap;
  Object.defineProperty(t, 'createOrder', {
    enumerable: !0,
    get: function () {
      return r.createOrder;
    },
  });
  var o = Ws;
  Object.defineProperty(t, 'closeOrderAndClaimTip', {
    enumerable: !0,
    get: function () {
      return o.closeOrderAndClaimTip;
    },
  });
  var i = up;
  Object.defineProperty(t, 'takeOrder', {
    enumerable: !0,
    get: function () {
      return i.takeOrder;
    },
  });
  var u = cp;
  Object.defineProperty(t, 'flashTakeOrderStart', {
    enumerable: !0,
    get: function () {
      return u.flashTakeOrderStart;
    },
  });
  var d = lp;
  Object.defineProperty(t, 'flashTakeOrderEnd', {
    enumerable: !0,
    get: function () {
      return d.flashTakeOrderEnd;
    },
  });
  var f = dp;
  Object.defineProperty(t, 'updateGlobalConfig', {
    enumerable: !0,
    get: function () {
      return f.updateGlobalConfig;
    },
  });
  var s = qs;
  Object.defineProperty(t, 'updateGlobalConfigAdmin', {
    enumerable: !0,
    get: function () {
      return s.updateGlobalConfigAdmin;
    },
  });
  var _ = zs;
  Object.defineProperty(t, 'withdrawHostTip', {
    enumerable: !0,
    get: function () {
      return _.withdrawHostTip;
    },
  });
  var g = Ys;
  Object.defineProperty(t, 'logUserSwapBalancesStart', {
    enumerable: !0,
    get: function () {
      return g.logUserSwapBalancesStart;
    },
  });
  var m = fp;
  Object.defineProperty(t, 'logUserSwapBalancesEnd', {
    enumerable: !0,
    get: function () {
      return m.logUserSwapBalancesEnd;
    },
  });
})(Di);
var Xo = {},
  no = {},
  J = {};
Object.defineProperty(J, '__esModule', { value: !0 });
J.AccountSysvarMismatch =
  J.AccountNotAssociatedTokenAccount =
  J.AccountNotProgramData =
  J.AccountNotInitialized =
  J.AccountNotSystemOwned =
  J.AccountNotSigner =
  J.InvalidProgramExecutable =
  J.InvalidProgramId =
  J.AccountOwnedByWrongProgram =
  J.AccountNotMutable =
  J.AccountNotEnoughKeys =
  J.AccountDidNotSerialize =
  J.AccountDidNotDeserialize =
  J.AccountDiscriminatorMismatch =
  J.AccountDiscriminatorNotFound =
  J.AccountDiscriminatorAlreadySet =
  J.RequireGteViolated =
  J.RequireGtViolated =
  J.RequireKeysNeqViolated =
  J.RequireNeqViolated =
  J.RequireKeysEqViolated =
  J.RequireEqViolated =
  J.RequireViolated =
  J.ConstraintAccountIsNone =
  J.ConstraintSpace =
  J.ConstraintMintDecimals =
  J.ConstraintMintFreezeAuthority =
  J.ConstraintMintMintAuthority =
  J.ConstraintTokenOwner =
  J.ConstraintTokenMint =
  J.ConstraintZero =
  J.ConstraintAddress =
  J.ConstraintClose =
  J.ConstraintAssociatedInit =
  J.ConstraintAssociated =
  J.ConstraintState =
  J.ConstraintExecutable =
  J.ConstraintSeeds =
  J.ConstraintRentExempt =
  J.ConstraintOwner =
  J.ConstraintRaw =
  J.ConstraintSigner =
  J.ConstraintHasOne =
  J.ConstraintMut =
  J.IdlInstructionInvalidProgram =
  J.IdlInstructionStub =
  J.InstructionDidNotSerialize =
  J.InstructionDidNotDeserialize =
  J.InstructionFallbackNotFound =
  J.InstructionMissing =
    void 0;
J.Deprecated =
  J.DeclaredProgramIdMismatch =
  J.AccountDuplicateReallocs =
  J.AccountReallocExceedsLimit =
    void 0;
J.fromCode = jR;
class Xs extends Error {
  constructor(n) {
    super('100: 8 byte instruction identifier not provided');
    c(this, 'logs');
    c(this, 'code', 100);
    c(this, 'name', 'InstructionMissing');
    c(this, 'msg', '8 byte instruction identifier not provided');
    this.logs = n;
  }
}
c(Xs, 'code', 100);
J.InstructionMissing = Xs;
class Js extends Error {
  constructor(n) {
    super('101: Fallback functions are not supported');
    c(this, 'logs');
    c(this, 'code', 101);
    c(this, 'name', 'InstructionFallbackNotFound');
    c(this, 'msg', 'Fallback functions are not supported');
    this.logs = n;
  }
}
c(Js, 'code', 101);
J.InstructionFallbackNotFound = Js;
class Qs extends Error {
  constructor(n) {
    super('102: The program could not deserialize the given instruction');
    c(this, 'logs');
    c(this, 'code', 102);
    c(this, 'name', 'InstructionDidNotDeserialize');
    c(this, 'msg', 'The program could not deserialize the given instruction');
    this.logs = n;
  }
}
c(Qs, 'code', 102);
J.InstructionDidNotDeserialize = Qs;
class Zs extends Error {
  constructor(n) {
    super('103: The program could not serialize the given instruction');
    c(this, 'logs');
    c(this, 'code', 103);
    c(this, 'name', 'InstructionDidNotSerialize');
    c(this, 'msg', 'The program could not serialize the given instruction');
    this.logs = n;
  }
}
c(Zs, 'code', 103);
J.InstructionDidNotSerialize = Zs;
class ea extends Error {
  constructor(n) {
    super('1000: The program was compiled without idl instructions');
    c(this, 'logs');
    c(this, 'code', 1e3);
    c(this, 'name', 'IdlInstructionStub');
    c(this, 'msg', 'The program was compiled without idl instructions');
    this.logs = n;
  }
}
c(ea, 'code', 1e3);
J.IdlInstructionStub = ea;
class ta extends Error {
  constructor(n) {
    super('1001: The transaction was given an invalid program for the IDL instruction');
    c(this, 'logs');
    c(this, 'code', 1001);
    c(this, 'name', 'IdlInstructionInvalidProgram');
    c(this, 'msg', 'The transaction was given an invalid program for the IDL instruction');
    this.logs = n;
  }
}
c(ta, 'code', 1001);
J.IdlInstructionInvalidProgram = ta;
class na extends Error {
  constructor(n) {
    super('2000: A mut constraint was violated');
    c(this, 'logs');
    c(this, 'code', 2e3);
    c(this, 'name', 'ConstraintMut');
    c(this, 'msg', 'A mut constraint was violated');
    this.logs = n;
  }
}
c(na, 'code', 2e3);
J.ConstraintMut = na;
class ra extends Error {
  constructor(n) {
    super('2001: A has one constraint was violated');
    c(this, 'logs');
    c(this, 'code', 2001);
    c(this, 'name', 'ConstraintHasOne');
    c(this, 'msg', 'A has one constraint was violated');
    this.logs = n;
  }
}
c(ra, 'code', 2001);
J.ConstraintHasOne = ra;
class ia extends Error {
  constructor(n) {
    super('2002: A signer constraint was violated');
    c(this, 'logs');
    c(this, 'code', 2002);
    c(this, 'name', 'ConstraintSigner');
    c(this, 'msg', 'A signer constraint was violated');
    this.logs = n;
  }
}
c(ia, 'code', 2002);
J.ConstraintSigner = ia;
class oa extends Error {
  constructor(n) {
    super('2003: A raw constraint was violated');
    c(this, 'logs');
    c(this, 'code', 2003);
    c(this, 'name', 'ConstraintRaw');
    c(this, 'msg', 'A raw constraint was violated');
    this.logs = n;
  }
}
c(oa, 'code', 2003);
J.ConstraintRaw = oa;
class sa extends Error {
  constructor(n) {
    super('2004: An owner constraint was violated');
    c(this, 'logs');
    c(this, 'code', 2004);
    c(this, 'name', 'ConstraintOwner');
    c(this, 'msg', 'An owner constraint was violated');
    this.logs = n;
  }
}
c(sa, 'code', 2004);
J.ConstraintOwner = sa;
class aa extends Error {
  constructor(n) {
    super('2005: A rent exemption constraint was violated');
    c(this, 'logs');
    c(this, 'code', 2005);
    c(this, 'name', 'ConstraintRentExempt');
    c(this, 'msg', 'A rent exemption constraint was violated');
    this.logs = n;
  }
}
c(aa, 'code', 2005);
J.ConstraintRentExempt = aa;
class ua extends Error {
  constructor(n) {
    super('2006: A seeds constraint was violated');
    c(this, 'logs');
    c(this, 'code', 2006);
    c(this, 'name', 'ConstraintSeeds');
    c(this, 'msg', 'A seeds constraint was violated');
    this.logs = n;
  }
}
c(ua, 'code', 2006);
J.ConstraintSeeds = ua;
class ca extends Error {
  constructor(n) {
    super('2007: An executable constraint was violated');
    c(this, 'logs');
    c(this, 'code', 2007);
    c(this, 'name', 'ConstraintExecutable');
    c(this, 'msg', 'An executable constraint was violated');
    this.logs = n;
  }
}
c(ca, 'code', 2007);
J.ConstraintExecutable = ca;
class la extends Error {
  constructor(n) {
    super('2008: Deprecated Error, feel free to replace with something else');
    c(this, 'logs');
    c(this, 'code', 2008);
    c(this, 'name', 'ConstraintState');
    c(this, 'msg', 'Deprecated Error, feel free to replace with something else');
    this.logs = n;
  }
}
c(la, 'code', 2008);
J.ConstraintState = la;
class da extends Error {
  constructor(n) {
    super('2009: An associated constraint was violated');
    c(this, 'logs');
    c(this, 'code', 2009);
    c(this, 'name', 'ConstraintAssociated');
    c(this, 'msg', 'An associated constraint was violated');
    this.logs = n;
  }
}
c(da, 'code', 2009);
J.ConstraintAssociated = da;
class fa extends Error {
  constructor(n) {
    super('2010: An associated init constraint was violated');
    c(this, 'logs');
    c(this, 'code', 2010);
    c(this, 'name', 'ConstraintAssociatedInit');
    c(this, 'msg', 'An associated init constraint was violated');
    this.logs = n;
  }
}
c(fa, 'code', 2010);
J.ConstraintAssociatedInit = fa;
class pa extends Error {
  constructor(n) {
    super('2011: A close constraint was violated');
    c(this, 'logs');
    c(this, 'code', 2011);
    c(this, 'name', 'ConstraintClose');
    c(this, 'msg', 'A close constraint was violated');
    this.logs = n;
  }
}
c(pa, 'code', 2011);
J.ConstraintClose = pa;
class _a extends Error {
  constructor(n) {
    super('2012: An address constraint was violated');
    c(this, 'logs');
    c(this, 'code', 2012);
    c(this, 'name', 'ConstraintAddress');
    c(this, 'msg', 'An address constraint was violated');
    this.logs = n;
  }
}
c(_a, 'code', 2012);
J.ConstraintAddress = _a;
class ma extends Error {
  constructor(n) {
    super('2013: Expected zero account discriminant');
    c(this, 'logs');
    c(this, 'code', 2013);
    c(this, 'name', 'ConstraintZero');
    c(this, 'msg', 'Expected zero account discriminant');
    this.logs = n;
  }
}
c(ma, 'code', 2013);
J.ConstraintZero = ma;
class ha extends Error {
  constructor(n) {
    super('2014: A token mint constraint was violated');
    c(this, 'logs');
    c(this, 'code', 2014);
    c(this, 'name', 'ConstraintTokenMint');
    c(this, 'msg', 'A token mint constraint was violated');
    this.logs = n;
  }
}
c(ha, 'code', 2014);
J.ConstraintTokenMint = ha;
class ga extends Error {
  constructor(n) {
    super('2015: A token owner constraint was violated');
    c(this, 'logs');
    c(this, 'code', 2015);
    c(this, 'name', 'ConstraintTokenOwner');
    c(this, 'msg', 'A token owner constraint was violated');
    this.logs = n;
  }
}
c(ga, 'code', 2015);
J.ConstraintTokenOwner = ga;
class Aa extends Error {
  constructor(n) {
    super('2016: A mint mint authority constraint was violated');
    c(this, 'logs');
    c(this, 'code', 2016);
    c(this, 'name', 'ConstraintMintMintAuthority');
    c(this, 'msg', 'A mint mint authority constraint was violated');
    this.logs = n;
  }
}
c(Aa, 'code', 2016);
J.ConstraintMintMintAuthority = Aa;
class Oa extends Error {
  constructor(n) {
    super('2017: A mint freeze authority constraint was violated');
    c(this, 'logs');
    c(this, 'code', 2017);
    c(this, 'name', 'ConstraintMintFreezeAuthority');
    c(this, 'msg', 'A mint freeze authority constraint was violated');
    this.logs = n;
  }
}
c(Oa, 'code', 2017);
J.ConstraintMintFreezeAuthority = Oa;
class Ra extends Error {
  constructor(n) {
    super('2018: A mint decimals constraint was violated');
    c(this, 'logs');
    c(this, 'code', 2018);
    c(this, 'name', 'ConstraintMintDecimals');
    c(this, 'msg', 'A mint decimals constraint was violated');
    this.logs = n;
  }
}
c(Ra, 'code', 2018);
J.ConstraintMintDecimals = Ra;
class ya extends Error {
  constructor(n) {
    super('2019: A space constraint was violated');
    c(this, 'logs');
    c(this, 'code', 2019);
    c(this, 'name', 'ConstraintSpace');
    c(this, 'msg', 'A space constraint was violated');
    this.logs = n;
  }
}
c(ya, 'code', 2019);
J.ConstraintSpace = ya;
class Ta extends Error {
  constructor(n) {
    super('2020: A required account for the constraint is None');
    c(this, 'logs');
    c(this, 'code', 2020);
    c(this, 'name', 'ConstraintAccountIsNone');
    c(this, 'msg', 'A required account for the constraint is None');
    this.logs = n;
  }
}
c(Ta, 'code', 2020);
J.ConstraintAccountIsNone = Ta;
class Ea extends Error {
  constructor(n) {
    super('2500: A require expression was violated');
    c(this, 'logs');
    c(this, 'code', 2500);
    c(this, 'name', 'RequireViolated');
    c(this, 'msg', 'A require expression was violated');
    this.logs = n;
  }
}
c(Ea, 'code', 2500);
J.RequireViolated = Ea;
class wa extends Error {
  constructor(n) {
    super('2501: A require_eq expression was violated');
    c(this, 'logs');
    c(this, 'code', 2501);
    c(this, 'name', 'RequireEqViolated');
    c(this, 'msg', 'A require_eq expression was violated');
    this.logs = n;
  }
}
c(wa, 'code', 2501);
J.RequireEqViolated = wa;
class Ia extends Error {
  constructor(n) {
    super('2502: A require_keys_eq expression was violated');
    c(this, 'logs');
    c(this, 'code', 2502);
    c(this, 'name', 'RequireKeysEqViolated');
    c(this, 'msg', 'A require_keys_eq expression was violated');
    this.logs = n;
  }
}
c(Ia, 'code', 2502);
J.RequireKeysEqViolated = Ia;
class ba extends Error {
  constructor(n) {
    super('2503: A require_neq expression was violated');
    c(this, 'logs');
    c(this, 'code', 2503);
    c(this, 'name', 'RequireNeqViolated');
    c(this, 'msg', 'A require_neq expression was violated');
    this.logs = n;
  }
}
c(ba, 'code', 2503);
J.RequireNeqViolated = ba;
class Na extends Error {
  constructor(n) {
    super('2504: A require_keys_neq expression was violated');
    c(this, 'logs');
    c(this, 'code', 2504);
    c(this, 'name', 'RequireKeysNeqViolated');
    c(this, 'msg', 'A require_keys_neq expression was violated');
    this.logs = n;
  }
}
c(Na, 'code', 2504);
J.RequireKeysNeqViolated = Na;
class Ca extends Error {
  constructor(n) {
    super('2505: A require_gt expression was violated');
    c(this, 'logs');
    c(this, 'code', 2505);
    c(this, 'name', 'RequireGtViolated');
    c(this, 'msg', 'A require_gt expression was violated');
    this.logs = n;
  }
}
c(Ca, 'code', 2505);
J.RequireGtViolated = Ca;
class Sa extends Error {
  constructor(n) {
    super('2506: A require_gte expression was violated');
    c(this, 'logs');
    c(this, 'code', 2506);
    c(this, 'name', 'RequireGteViolated');
    c(this, 'msg', 'A require_gte expression was violated');
    this.logs = n;
  }
}
c(Sa, 'code', 2506);
J.RequireGteViolated = Sa;
class va extends Error {
  constructor(n) {
    super('3000: The account discriminator was already set on this account');
    c(this, 'logs');
    c(this, 'code', 3e3);
    c(this, 'name', 'AccountDiscriminatorAlreadySet');
    c(this, 'msg', 'The account discriminator was already set on this account');
    this.logs = n;
  }
}
c(va, 'code', 3e3);
J.AccountDiscriminatorAlreadySet = va;
class Pa extends Error {
  constructor(n) {
    super('3001: No 8 byte discriminator was found on the account');
    c(this, 'logs');
    c(this, 'code', 3001);
    c(this, 'name', 'AccountDiscriminatorNotFound');
    c(this, 'msg', 'No 8 byte discriminator was found on the account');
    this.logs = n;
  }
}
c(Pa, 'code', 3001);
J.AccountDiscriminatorNotFound = Pa;
class Ma extends Error {
  constructor(n) {
    super('3002: 8 byte discriminator did not match what was expected');
    c(this, 'logs');
    c(this, 'code', 3002);
    c(this, 'name', 'AccountDiscriminatorMismatch');
    c(this, 'msg', '8 byte discriminator did not match what was expected');
    this.logs = n;
  }
}
c(Ma, 'code', 3002);
J.AccountDiscriminatorMismatch = Ma;
class ka extends Error {
  constructor(n) {
    super('3003: Failed to deserialize the account');
    c(this, 'logs');
    c(this, 'code', 3003);
    c(this, 'name', 'AccountDidNotDeserialize');
    c(this, 'msg', 'Failed to deserialize the account');
    this.logs = n;
  }
}
c(ka, 'code', 3003);
J.AccountDidNotDeserialize = ka;
class Da extends Error {
  constructor(n) {
    super('3004: Failed to serialize the account');
    c(this, 'logs');
    c(this, 'code', 3004);
    c(this, 'name', 'AccountDidNotSerialize');
    c(this, 'msg', 'Failed to serialize the account');
    this.logs = n;
  }
}
c(Da, 'code', 3004);
J.AccountDidNotSerialize = Da;
class Ba extends Error {
  constructor(n) {
    super('3005: Not enough account keys given to the instruction');
    c(this, 'logs');
    c(this, 'code', 3005);
    c(this, 'name', 'AccountNotEnoughKeys');
    c(this, 'msg', 'Not enough account keys given to the instruction');
    this.logs = n;
  }
}
c(Ba, 'code', 3005);
J.AccountNotEnoughKeys = Ba;
class xa extends Error {
  constructor(n) {
    super('3006: The given account is not mutable');
    c(this, 'logs');
    c(this, 'code', 3006);
    c(this, 'name', 'AccountNotMutable');
    c(this, 'msg', 'The given account is not mutable');
    this.logs = n;
  }
}
c(xa, 'code', 3006);
J.AccountNotMutable = xa;
class La extends Error {
  constructor(n) {
    super('3007: The given account is owned by a different program than expected');
    c(this, 'logs');
    c(this, 'code', 3007);
    c(this, 'name', 'AccountOwnedByWrongProgram');
    c(this, 'msg', 'The given account is owned by a different program than expected');
    this.logs = n;
  }
}
c(La, 'code', 3007);
J.AccountOwnedByWrongProgram = La;
class Ua extends Error {
  constructor(n) {
    super('3008: Program ID was not as expected');
    c(this, 'logs');
    c(this, 'code', 3008);
    c(this, 'name', 'InvalidProgramId');
    c(this, 'msg', 'Program ID was not as expected');
    this.logs = n;
  }
}
c(Ua, 'code', 3008);
J.InvalidProgramId = Ua;
class $a extends Error {
  constructor(n) {
    super('3009: Program account is not executable');
    c(this, 'logs');
    c(this, 'code', 3009);
    c(this, 'name', 'InvalidProgramExecutable');
    c(this, 'msg', 'Program account is not executable');
    this.logs = n;
  }
}
c($a, 'code', 3009);
J.InvalidProgramExecutable = $a;
class ja extends Error {
  constructor(n) {
    super('3010: The given account did not sign');
    c(this, 'logs');
    c(this, 'code', 3010);
    c(this, 'name', 'AccountNotSigner');
    c(this, 'msg', 'The given account did not sign');
    this.logs = n;
  }
}
c(ja, 'code', 3010);
J.AccountNotSigner = ja;
class Ha extends Error {
  constructor(n) {
    super('3011: The given account is not owned by the system program');
    c(this, 'logs');
    c(this, 'code', 3011);
    c(this, 'name', 'AccountNotSystemOwned');
    c(this, 'msg', 'The given account is not owned by the system program');
    this.logs = n;
  }
}
c(Ha, 'code', 3011);
J.AccountNotSystemOwned = Ha;
class Ga extends Error {
  constructor(n) {
    super('3012: The program expected this account to be already initialized');
    c(this, 'logs');
    c(this, 'code', 3012);
    c(this, 'name', 'AccountNotInitialized');
    c(this, 'msg', 'The program expected this account to be already initialized');
    this.logs = n;
  }
}
c(Ga, 'code', 3012);
J.AccountNotInitialized = Ga;
class Fa extends Error {
  constructor(n) {
    super('3013: The given account is not a program data account');
    c(this, 'logs');
    c(this, 'code', 3013);
    c(this, 'name', 'AccountNotProgramData');
    c(this, 'msg', 'The given account is not a program data account');
    this.logs = n;
  }
}
c(Fa, 'code', 3013);
J.AccountNotProgramData = Fa;
class Ka extends Error {
  constructor(n) {
    super('3014: The given account is not the associated token account');
    c(this, 'logs');
    c(this, 'code', 3014);
    c(this, 'name', 'AccountNotAssociatedTokenAccount');
    c(this, 'msg', 'The given account is not the associated token account');
    this.logs = n;
  }
}
c(Ka, 'code', 3014);
J.AccountNotAssociatedTokenAccount = Ka;
class Va extends Error {
  constructor(n) {
    super('3015: The given public key does not match the required sysvar');
    c(this, 'logs');
    c(this, 'code', 3015);
    c(this, 'name', 'AccountSysvarMismatch');
    c(this, 'msg', 'The given public key does not match the required sysvar');
    this.logs = n;
  }
}
c(Va, 'code', 3015);
J.AccountSysvarMismatch = Va;
class Wa extends Error {
  constructor(n) {
    super('3016: The account reallocation exceeds the MAX_PERMITTED_DATA_INCREASE limit');
    c(this, 'logs');
    c(this, 'code', 3016);
    c(this, 'name', 'AccountReallocExceedsLimit');
    c(this, 'msg', 'The account reallocation exceeds the MAX_PERMITTED_DATA_INCREASE limit');
    this.logs = n;
  }
}
c(Wa, 'code', 3016);
J.AccountReallocExceedsLimit = Wa;
class qa extends Error {
  constructor(n) {
    super('3017: The account was duplicated for more than one reallocation');
    c(this, 'logs');
    c(this, 'code', 3017);
    c(this, 'name', 'AccountDuplicateReallocs');
    c(this, 'msg', 'The account was duplicated for more than one reallocation');
    this.logs = n;
  }
}
c(qa, 'code', 3017);
J.AccountDuplicateReallocs = qa;
class za extends Error {
  constructor(n) {
    super('4100: The declared program id does not match the actual program id');
    c(this, 'logs');
    c(this, 'code', 4100);
    c(this, 'name', 'DeclaredProgramIdMismatch');
    c(this, 'msg', 'The declared program id does not match the actual program id');
    this.logs = n;
  }
}
c(za, 'code', 4100);
J.DeclaredProgramIdMismatch = za;
class Ya extends Error {
  constructor(n) {
    super('5000: The API being used is deprecated and should no longer be used');
    c(this, 'logs');
    c(this, 'code', 5e3);
    c(this, 'name', 'Deprecated');
    c(this, 'msg', 'The API being used is deprecated and should no longer be used');
    this.logs = n;
  }
}
c(Ya, 'code', 5e3);
J.Deprecated = Ya;
function jR(t, e) {
  switch (t) {
    case 100:
      return new Xs(e);
    case 101:
      return new Js(e);
    case 102:
      return new Qs(e);
    case 103:
      return new Zs(e);
    case 1e3:
      return new ea(e);
    case 1001:
      return new ta(e);
    case 2e3:
      return new na(e);
    case 2001:
      return new ra(e);
    case 2002:
      return new ia(e);
    case 2003:
      return new oa(e);
    case 2004:
      return new sa(e);
    case 2005:
      return new aa(e);
    case 2006:
      return new ua(e);
    case 2007:
      return new ca(e);
    case 2008:
      return new la(e);
    case 2009:
      return new da(e);
    case 2010:
      return new fa(e);
    case 2011:
      return new pa(e);
    case 2012:
      return new _a(e);
    case 2013:
      return new ma(e);
    case 2014:
      return new ha(e);
    case 2015:
      return new ga(e);
    case 2016:
      return new Aa(e);
    case 2017:
      return new Oa(e);
    case 2018:
      return new Ra(e);
    case 2019:
      return new ya(e);
    case 2020:
      return new Ta(e);
    case 2500:
      return new Ea(e);
    case 2501:
      return new wa(e);
    case 2502:
      return new Ia(e);
    case 2503:
      return new ba(e);
    case 2504:
      return new Na(e);
    case 2505:
      return new Ca(e);
    case 2506:
      return new Sa(e);
    case 3e3:
      return new va(e);
    case 3001:
      return new Pa(e);
    case 3002:
      return new Ma(e);
    case 3003:
      return new ka(e);
    case 3004:
      return new Da(e);
    case 3005:
      return new Ba(e);
    case 3006:
      return new xa(e);
    case 3007:
      return new La(e);
    case 3008:
      return new Ua(e);
    case 3009:
      return new $a(e);
    case 3010:
      return new ja(e);
    case 3011:
      return new Ha(e);
    case 3012:
      return new Ga(e);
    case 3013:
      return new Fa(e);
    case 3014:
      return new Ka(e);
    case 3015:
      return new Va(e);
    case 3016:
      return new Wa(e);
    case 3017:
      return new qa(e);
    case 4100:
      return new za(e);
    case 5e3:
      return new Ya(e);
  }
  return null;
}
var te = {};
Object.defineProperty(te, '__esModule', { value: !0 });
te.InvalidTokenAuthority =
  te.InvalidTokenMint =
  te.InvalidAccount =
  te.InvalidTokenAccountOwner =
  te.UninitializedTokenAccount =
  te.OrderTypeInvalid =
  te.InvalidTokenAccount =
  te.UnsupportedTokenExtension =
  te.OrderSameMint =
  te.NotEnoughTimePassedSinceLastUpdate =
  te.NotEnoughBalanceForRent =
  te.IntermediaryOutputTokenAccountRequired =
  te.MakerOutputAtaRequired =
  te.InvalidAtaAddress =
  te.PermissionDoesNotMatchOrder =
  te.PermissionRequiredPermissionlessNotEnabled =
  te.OrderInputAmountTooLarge =
  te.OrderTakingBlocked =
  te.CreatingNewOrdersBlocked =
  te.EmergencyModeEnabled =
  te.OrderNotWithinFlashOperation =
  te.FlashIxsArgsMismatch =
  te.FlashIxsAccountMismatch =
  te.FlashIxsNotStarted =
  te.FlashIxsNotEnded =
  te.FlashTxWithUnexpectedIxs =
  te.FlashTakeOrderBlocked =
  te.CPINotAllowed =
  te.OrderWithinFlashOperation =
  te.InvalidHostTipBalance =
  te.InvalidTipTransferAmount =
  te.InvalidTipBalance =
  te.IntegerOverflow =
  te.InvalidHostFee =
  te.OrderOutputAmountInvalid =
  te.OrderInputAmountInvalid =
  te.MathOverflow =
  te.InvalidFlag =
  te.OutOfRangeIntegralConversion =
  te.InvalidOrderOwner =
  te.InvalidConfigOption =
  te.InvalidPdaAuthority =
  te.InvalidAdminAuthority =
  te.OrderNotActive =
  te.OrderCanNotBeCanceled =
    void 0;
te.fromCode = HR;
class Xa extends Error {
  constructor(n) {
    super("6000: Order can't be canceled");
    c(this, 'logs');
    c(this, 'code', 6e3);
    c(this, 'name', 'OrderCanNotBeCanceled');
    c(this, 'msg', "Order can't be canceled");
    this.logs = n;
  }
}
c(Xa, 'code', 6e3);
te.OrderCanNotBeCanceled = Xa;
class Ja extends Error {
  constructor(n) {
    super('6001: Order not active');
    c(this, 'logs');
    c(this, 'code', 6001);
    c(this, 'name', 'OrderNotActive');
    c(this, 'msg', 'Order not active');
    this.logs = n;
  }
}
c(Ja, 'code', 6001);
te.OrderNotActive = Ja;
class Qa extends Error {
  constructor(n) {
    super('6002: Invalid admin authority');
    c(this, 'logs');
    c(this, 'code', 6002);
    c(this, 'name', 'InvalidAdminAuthority');
    c(this, 'msg', 'Invalid admin authority');
    this.logs = n;
  }
}
c(Qa, 'code', 6002);
te.InvalidAdminAuthority = Qa;
class Za extends Error {
  constructor(n) {
    super('6003: Invalid pda authority');
    c(this, 'logs');
    c(this, 'code', 6003);
    c(this, 'name', 'InvalidPdaAuthority');
    c(this, 'msg', 'Invalid pda authority');
    this.logs = n;
  }
}
c(Za, 'code', 6003);
te.InvalidPdaAuthority = Za;
class eu extends Error {
  constructor(n) {
    super('6004: Invalid config option');
    c(this, 'logs');
    c(this, 'code', 6004);
    c(this, 'name', 'InvalidConfigOption');
    c(this, 'msg', 'Invalid config option');
    this.logs = n;
  }
}
c(eu, 'code', 6004);
te.InvalidConfigOption = eu;
class tu extends Error {
  constructor(n) {
    super('6005: Order owner account is not the order owner');
    c(this, 'logs');
    c(this, 'code', 6005);
    c(this, 'name', 'InvalidOrderOwner');
    c(this, 'msg', 'Order owner account is not the order owner');
    this.logs = n;
  }
}
c(tu, 'code', 6005);
te.InvalidOrderOwner = tu;
class nu extends Error {
  constructor(n) {
    super('6006: Out of range integral conversion attempted');
    c(this, 'logs');
    c(this, 'code', 6006);
    c(this, 'name', 'OutOfRangeIntegralConversion');
    c(this, 'msg', 'Out of range integral conversion attempted');
    this.logs = n;
  }
}
c(nu, 'code', 6006);
te.OutOfRangeIntegralConversion = nu;
class ru extends Error {
  constructor(n) {
    super('6007: Invalid boolean flag, valid values are 0 and 1');
    c(this, 'logs');
    c(this, 'code', 6007);
    c(this, 'name', 'InvalidFlag');
    c(this, 'msg', 'Invalid boolean flag, valid values are 0 and 1');
    this.logs = n;
  }
}
c(ru, 'code', 6007);
te.InvalidFlag = ru;
class iu extends Error {
  constructor(n) {
    super('6008: Mathematical operation with overflow');
    c(this, 'logs');
    c(this, 'code', 6008);
    c(this, 'name', 'MathOverflow');
    c(this, 'msg', 'Mathematical operation with overflow');
    this.logs = n;
  }
}
c(iu, 'code', 6008);
te.MathOverflow = iu;
class ou extends Error {
  constructor(n) {
    super('6009: Order input amount invalid');
    c(this, 'logs');
    c(this, 'code', 6009);
    c(this, 'name', 'OrderInputAmountInvalid');
    c(this, 'msg', 'Order input amount invalid');
    this.logs = n;
  }
}
c(ou, 'code', 6009);
te.OrderInputAmountInvalid = ou;
class su extends Error {
  constructor(n) {
    super('6010: Order output amount invalid');
    c(this, 'logs');
    c(this, 'code', 6010);
    c(this, 'name', 'OrderOutputAmountInvalid');
    c(this, 'msg', 'Order output amount invalid');
    this.logs = n;
  }
}
c(su, 'code', 6010);
te.OrderOutputAmountInvalid = su;
class au extends Error {
  constructor(n) {
    super('6011: Host fee bps must be between 0 and 10000');
    c(this, 'logs');
    c(this, 'code', 6011);
    c(this, 'name', 'InvalidHostFee');
    c(this, 'msg', 'Host fee bps must be between 0 and 10000');
    this.logs = n;
  }
}
c(au, 'code', 6011);
te.InvalidHostFee = au;
class uu extends Error {
  constructor(n) {
    super('6012: Conversion between integers failed');
    c(this, 'logs');
    c(this, 'code', 6012);
    c(this, 'name', 'IntegerOverflow');
    c(this, 'msg', 'Conversion between integers failed');
    this.logs = n;
  }
}
c(uu, 'code', 6012);
te.IntegerOverflow = uu;
class cu extends Error {
  constructor(n) {
    super('6013: Tip balance less than accounted tip');
    c(this, 'logs');
    c(this, 'code', 6013);
    c(this, 'name', 'InvalidTipBalance');
    c(this, 'msg', 'Tip balance less than accounted tip');
    this.logs = n;
  }
}
c(cu, 'code', 6013);
te.InvalidTipBalance = cu;
class lu extends Error {
  constructor(n) {
    super('6014: Tip transfer amount is less than expected');
    c(this, 'logs');
    c(this, 'code', 6014);
    c(this, 'name', 'InvalidTipTransferAmount');
    c(this, 'msg', 'Tip transfer amount is less than expected');
    this.logs = n;
  }
}
c(lu, 'code', 6014);
te.InvalidTipTransferAmount = lu;
class du extends Error {
  constructor(n) {
    super('6015: Host tup amount is less than accounted for');
    c(this, 'logs');
    c(this, 'code', 6015);
    c(this, 'name', 'InvalidHostTipBalance');
    c(this, 'msg', 'Host tup amount is less than accounted for');
    this.logs = n;
  }
}
c(du, 'code', 6015);
te.InvalidHostTipBalance = du;
class fu extends Error {
  constructor(n) {
    super('6016: Order within flash operation - all otehr actions are blocked');
    c(this, 'logs');
    c(this, 'code', 6016);
    c(this, 'name', 'OrderWithinFlashOperation');
    c(this, 'msg', 'Order within flash operation - all otehr actions are blocked');
    this.logs = n;
  }
}
c(fu, 'code', 6016);
te.OrderWithinFlashOperation = fu;
class pu extends Error {
  constructor(n) {
    super('6017: CPI not allowed');
    c(this, 'logs');
    c(this, 'code', 6017);
    c(this, 'name', 'CPINotAllowed');
    c(this, 'msg', 'CPI not allowed');
    this.logs = n;
  }
}
c(pu, 'code', 6017);
te.CPINotAllowed = pu;
class _u extends Error {
  constructor(n) {
    super('6018: Flash take_order is blocked');
    c(this, 'logs');
    c(this, 'code', 6018);
    c(this, 'name', 'FlashTakeOrderBlocked');
    c(this, 'msg', 'Flash take_order is blocked');
    this.logs = n;
  }
}
c(_u, 'code', 6018);
te.FlashTakeOrderBlocked = _u;
class mu extends Error {
  constructor(n) {
    super(
      '6019: Some unexpected instructions are present in the tx. Either before or after the flash ixs, or some ix target the same program between'
    );
    c(this, 'logs');
    c(this, 'code', 6019);
    c(this, 'name', 'FlashTxWithUnexpectedIxs');
    c(
      this,
      'msg',
      'Some unexpected instructions are present in the tx. Either before or after the flash ixs, or some ix target the same program between'
    );
    this.logs = n;
  }
}
c(mu, 'code', 6019);
te.FlashTxWithUnexpectedIxs = mu;
class hu extends Error {
  constructor(n) {
    super('6020: Flash ixs initiated without the closing ix in the transaction');
    c(this, 'logs');
    c(this, 'code', 6020);
    c(this, 'name', 'FlashIxsNotEnded');
    c(this, 'msg', 'Flash ixs initiated without the closing ix in the transaction');
    this.logs = n;
  }
}
c(hu, 'code', 6020);
te.FlashIxsNotEnded = hu;
class gu extends Error {
  constructor(n) {
    super('6021: Flash ixs ended without the starting ix in the transaction');
    c(this, 'logs');
    c(this, 'code', 6021);
    c(this, 'name', 'FlashIxsNotStarted');
    c(this, 'msg', 'Flash ixs ended without the starting ix in the transaction');
    this.logs = n;
  }
}
c(gu, 'code', 6021);
te.FlashIxsNotStarted = gu;
class Au extends Error {
  constructor(n) {
    super('6022: Some accounts differ between the two flash ixs');
    c(this, 'logs');
    c(this, 'code', 6022);
    c(this, 'name', 'FlashIxsAccountMismatch');
    c(this, 'msg', 'Some accounts differ between the two flash ixs');
    this.logs = n;
  }
}
c(Au, 'code', 6022);
te.FlashIxsAccountMismatch = Au;
class Ou extends Error {
  constructor(n) {
    super('6023: Some args differ between the two flash ixs');
    c(this, 'logs');
    c(this, 'code', 6023);
    c(this, 'name', 'FlashIxsArgsMismatch');
    c(this, 'msg', 'Some args differ between the two flash ixs');
    this.logs = n;
  }
}
c(Ou, 'code', 6023);
te.FlashIxsArgsMismatch = Ou;
class Ru extends Error {
  constructor(n) {
    super('6024: Order is not within flash operation');
    c(this, 'logs');
    c(this, 'code', 6024);
    c(this, 'name', 'OrderNotWithinFlashOperation');
    c(this, 'msg', 'Order is not within flash operation');
    this.logs = n;
  }
}
c(Ru, 'code', 6024);
te.OrderNotWithinFlashOperation = Ru;
class yu extends Error {
  constructor(n) {
    super('6025: Emergency mode is enabled');
    c(this, 'logs');
    c(this, 'code', 6025);
    c(this, 'name', 'EmergencyModeEnabled');
    c(this, 'msg', 'Emergency mode is enabled');
    this.logs = n;
  }
}
c(yu, 'code', 6025);
te.EmergencyModeEnabled = yu;
class Tu extends Error {
  constructor(n) {
    super('6026: Creating new ordersis blocked');
    c(this, 'logs');
    c(this, 'code', 6026);
    c(this, 'name', 'CreatingNewOrdersBlocked');
    c(this, 'msg', 'Creating new ordersis blocked');
    this.logs = n;
  }
}
c(Tu, 'code', 6026);
te.CreatingNewOrdersBlocked = Tu;
class Eu extends Error {
  constructor(n) {
    super('6027: Orders taking is blocked');
    c(this, 'logs');
    c(this, 'code', 6027);
    c(this, 'name', 'OrderTakingBlocked');
    c(this, 'msg', 'Orders taking is blocked');
    this.logs = n;
  }
}
c(Eu, 'code', 6027);
te.OrderTakingBlocked = Eu;
class wu extends Error {
  constructor(n) {
    super('6028: Order input amount larger than the remaining');
    c(this, 'logs');
    c(this, 'code', 6028);
    c(this, 'name', 'OrderInputAmountTooLarge');
    c(this, 'msg', 'Order input amount larger than the remaining');
    this.logs = n;
  }
}
c(wu, 'code', 6028);
te.OrderInputAmountTooLarge = wu;
class Iu extends Error {
  constructor(n) {
    super('6029: Permissionless order taking not enabled, please provide permission account');
    c(this, 'logs');
    c(this, 'code', 6029);
    c(this, 'name', 'PermissionRequiredPermissionlessNotEnabled');
    c(this, 'msg', 'Permissionless order taking not enabled, please provide permission account');
    this.logs = n;
  }
}
c(Iu, 'code', 6029);
te.PermissionRequiredPermissionlessNotEnabled = Iu;
class bu extends Error {
  constructor(n) {
    super('6030: Permission address does not match order address');
    c(this, 'logs');
    c(this, 'code', 6030);
    c(this, 'name', 'PermissionDoesNotMatchOrder');
    c(this, 'msg', 'Permission address does not match order address');
    this.logs = n;
  }
}
c(bu, 'code', 6030);
te.PermissionDoesNotMatchOrder = bu;
class Nu extends Error {
  constructor(n) {
    super('6031: Invalid ata address');
    c(this, 'logs');
    c(this, 'code', 6031);
    c(this, 'name', 'InvalidAtaAddress');
    c(this, 'msg', 'Invalid ata address');
    this.logs = n;
  }
}
c(Nu, 'code', 6031);
te.InvalidAtaAddress = Nu;
class Cu extends Error {
  constructor(n) {
    super('6032: Maker output ata required when output mint is not WSOL');
    c(this, 'logs');
    c(this, 'code', 6032);
    c(this, 'name', 'MakerOutputAtaRequired');
    c(this, 'msg', 'Maker output ata required when output mint is not WSOL');
    this.logs = n;
  }
}
c(Cu, 'code', 6032);
te.MakerOutputAtaRequired = Cu;
class Su extends Error {
  constructor(n) {
    super('6033: Intermediary output token account required when output mint is WSOL');
    c(this, 'logs');
    c(this, 'code', 6033);
    c(this, 'name', 'IntermediaryOutputTokenAccountRequired');
    c(this, 'msg', 'Intermediary output token account required when output mint is WSOL');
    this.logs = n;
  }
}
c(Su, 'code', 6033);
te.IntermediaryOutputTokenAccountRequired = Su;
class vu extends Error {
  constructor(n) {
    super('6034: Not enough balance for rent');
    c(this, 'logs');
    c(this, 'code', 6034);
    c(this, 'name', 'NotEnoughBalanceForRent');
    c(this, 'msg', 'Not enough balance for rent');
    this.logs = n;
  }
}
c(vu, 'code', 6034);
te.NotEnoughBalanceForRent = vu;
class Pu extends Error {
  constructor(n) {
    super('6035: Order can not be closed - Not enough time passed since last update');
    c(this, 'logs');
    c(this, 'code', 6035);
    c(this, 'name', 'NotEnoughTimePassedSinceLastUpdate');
    c(this, 'msg', 'Order can not be closed - Not enough time passed since last update');
    this.logs = n;
  }
}
c(Pu, 'code', 6035);
te.NotEnoughTimePassedSinceLastUpdate = Pu;
class Mu extends Error {
  constructor(n) {
    super('6036: Order input and output mints are the same');
    c(this, 'logs');
    c(this, 'code', 6036);
    c(this, 'name', 'OrderSameMint');
    c(this, 'msg', 'Order input and output mints are the same');
    this.logs = n;
  }
}
c(Mu, 'code', 6036);
te.OrderSameMint = Mu;
class ku extends Error {
  constructor(n) {
    super('6037: Mint has a token (2022) extension that is not supported');
    c(this, 'logs');
    c(this, 'code', 6037);
    c(this, 'name', 'UnsupportedTokenExtension');
    c(this, 'msg', 'Mint has a token (2022) extension that is not supported');
    this.logs = n;
  }
}
c(ku, 'code', 6037);
te.UnsupportedTokenExtension = ku;
class Du extends Error {
  constructor(n) {
    super("6038: Can't have an spl token mint with a t22 account");
    c(this, 'logs');
    c(this, 'code', 6038);
    c(this, 'name', 'InvalidTokenAccount');
    c(this, 'msg', "Can't have an spl token mint with a t22 account");
    this.logs = n;
  }
}
c(Du, 'code', 6038);
te.InvalidTokenAccount = Du;
class Bu extends Error {
  constructor(n) {
    super('6039: The order type is invalid');
    c(this, 'logs');
    c(this, 'code', 6039);
    c(this, 'name', 'OrderTypeInvalid');
    c(this, 'msg', 'The order type is invalid');
    this.logs = n;
  }
}
c(Bu, 'code', 6039);
te.OrderTypeInvalid = Bu;
class xu extends Error {
  constructor(n) {
    super('6040: Token account is not initialized');
    c(this, 'logs');
    c(this, 'code', 6040);
    c(this, 'name', 'UninitializedTokenAccount');
    c(this, 'msg', 'Token account is not initialized');
    this.logs = n;
  }
}
c(xu, 'code', 6040);
te.UninitializedTokenAccount = xu;
class Lu extends Error {
  constructor(n) {
    super('6041: Account is not owned by the token program');
    c(this, 'logs');
    c(this, 'code', 6041);
    c(this, 'name', 'InvalidTokenAccountOwner');
    c(this, 'msg', 'Account is not owned by the token program');
    this.logs = n;
  }
}
c(Lu, 'code', 6041);
te.InvalidTokenAccountOwner = Lu;
class Uu extends Error {
  constructor(n) {
    super('6042: Account is not a valid token account');
    c(this, 'logs');
    c(this, 'code', 6042);
    c(this, 'name', 'InvalidAccount');
    c(this, 'msg', 'Account is not a valid token account');
    this.logs = n;
  }
}
c(Uu, 'code', 6042);
te.InvalidAccount = Uu;
class $u extends Error {
  constructor(n) {
    super('6043: Token account has incorrect mint');
    c(this, 'logs');
    c(this, 'code', 6043);
    c(this, 'name', 'InvalidTokenMint');
    c(this, 'msg', 'Token account has incorrect mint');
    this.logs = n;
  }
}
c($u, 'code', 6043);
te.InvalidTokenMint = $u;
class ju extends Error {
  constructor(n) {
    super('6044: Token account has incorrect authority');
    c(this, 'logs');
    c(this, 'code', 6044);
    c(this, 'name', 'InvalidTokenAuthority');
    c(this, 'msg', 'Token account has incorrect authority');
    this.logs = n;
  }
}
c(ju, 'code', 6044);
te.InvalidTokenAuthority = ju;
function HR(t, e) {
  switch (t) {
    case 6e3:
      return new Xa(e);
    case 6001:
      return new Ja(e);
    case 6002:
      return new Qa(e);
    case 6003:
      return new Za(e);
    case 6004:
      return new eu(e);
    case 6005:
      return new tu(e);
    case 6006:
      return new nu(e);
    case 6007:
      return new ru(e);
    case 6008:
      return new iu(e);
    case 6009:
      return new ou(e);
    case 6010:
      return new su(e);
    case 6011:
      return new au(e);
    case 6012:
      return new uu(e);
    case 6013:
      return new cu(e);
    case 6014:
      return new lu(e);
    case 6015:
      return new du(e);
    case 6016:
      return new fu(e);
    case 6017:
      return new pu(e);
    case 6018:
      return new _u(e);
    case 6019:
      return new mu(e);
    case 6020:
      return new hu(e);
    case 6021:
      return new gu(e);
    case 6022:
      return new Au(e);
    case 6023:
      return new Ou(e);
    case 6024:
      return new Ru(e);
    case 6025:
      return new yu(e);
    case 6026:
      return new Tu(e);
    case 6027:
      return new Eu(e);
    case 6028:
      return new wu(e);
    case 6029:
      return new Iu(e);
    case 6030:
      return new bu(e);
    case 6031:
      return new Nu(e);
    case 6032:
      return new Cu(e);
    case 6033:
      return new Su(e);
    case 6034:
      return new vu(e);
    case 6035:
      return new Pu(e);
    case 6036:
      return new Mu(e);
    case 6037:
      return new ku(e);
    case 6038:
      return new Du(e);
    case 6039:
      return new Bu(e);
    case 6040:
      return new xu(e);
    case 6041:
      return new Lu(e);
    case 6042:
      return new Uu(e);
    case 6043:
      return new $u(e);
    case 6044:
      return new ju(e);
  }
  return null;
}
var GR =
    (T && T.__createBinding) ||
    (Object.create
      ? function (t, e, n, r) {
          r === void 0 && (r = n);
          var o = Object.getOwnPropertyDescriptor(e, n);
          (!o || ('get' in o ? !e.__esModule : o.writable || o.configurable)) &&
            (o = {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            }),
            Object.defineProperty(t, r, o);
        }
      : function (t, e, n, r) {
          r === void 0 && (r = n), (t[r] = e[n]);
        }),
  FR =
    (T && T.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  pp =
    (T && T.__importStar) ||
    (function () {
      var t = function (e) {
        return (
          (t =
            Object.getOwnPropertyNames ||
            function (n) {
              var r = [];
              for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (r[r.length] = o);
              return r;
            }),
          t(e)
        );
      };
      return function (e) {
        if (e && e.__esModule) return e;
        var n = {};
        if (e != null)
          for (var r = t(e), o = 0; o < r.length; o++) r[o] !== 'default' && GR(n, e, r[o]);
        return FR(n, e), n;
      };
    })();
Object.defineProperty(no, '__esModule', { value: !0 });
no.fromCode = _p;
no.fromTxError = YR;
const KR = Ge,
  VR = pp(J),
  WR = pp(te);
function _p(t, e) {
  return t >= 6e3 ? WR.fromCode(t, e) : VR.fromCode(t, e);
}
function qR(t, e) {
  return Object.hasOwnProperty.call(t, e);
}
const zR = /Program (\w+) failed: custom program error: (\w+)/;
function YR(t, e = KR.PROGRAM_ID) {
  if (typeof t != 'object' || t === null || !qR(t, 'logs') || !Array.isArray(t.logs)) return null;
  let n = null;
  for (const u of t.logs) if (((n = zR.exec(u)), n !== null)) break;
  if (n === null) return null;
  const [r, o] = n.slice(1);
  if (r !== e.toString()) return null;
  let i;
  try {
    i = parseInt(o, 16);
  } catch (u) {
    return null;
  }
  return _p(i, t.logs);
}
var er = {},
  XR =
    (T && T.__createBinding) ||
    (Object.create
      ? function (t, e, n, r) {
          r === void 0 && (r = n);
          var o = Object.getOwnPropertyDescriptor(e, n);
          (!o || ('get' in o ? !e.__esModule : o.writable || o.configurable)) &&
            (o = {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            }),
            Object.defineProperty(t, r, o);
        }
      : function (t, e, n, r) {
          r === void 0 && (r = n), (t[r] = e[n]);
        }),
  JR =
    (T && T.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  QR =
    (T && T.__importStar) ||
    (function () {
      var t = function (e) {
        return (
          (t =
            Object.getOwnPropertyNames ||
            function (n) {
              var r = [];
              for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (r[r.length] = o);
              return r;
            }),
          t(e)
        );
      };
      return function (e) {
        if (e && e.__esModule) return e;
        var n = {};
        if (e != null)
          for (var r = t(e), o = 0; o < r.length; o++) r[o] !== 'default' && XR(n, e, r[o]);
        return JR(n, e), n;
      };
    })(),
  ZR =
    (T && T.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(er, '__esModule', { value: !0 });
er.GlobalConfig = void 0;
const Jo = me,
  Ct = ZR(Ye),
  ke = QR(ot),
  ol = Ge,
  qt = class qt {
    constructor(e) {
      c(this, 'emergencyMode');
      c(this, 'flashTakeOrderBlocked');
      c(this, 'newOrdersBlocked');
      c(this, 'ordersTakingBlocked');
      c(this, 'hostFeeBps');
      c(this, 'isOrderTakingPermissionless');
      c(this, 'padding0');
      c(this, 'orderCloseDelaySeconds');
      c(this, 'padding1');
      c(this, 'pdaAuthorityPreviousLamportsBalance');
      c(this, 'totalTipAmount');
      c(this, 'hostTipAmount');
      c(this, 'pdaAuthority');
      c(this, 'pdaAuthorityBump');
      c(this, 'adminAuthority');
      c(this, 'adminAuthorityCached');
      c(this, 'txnFeeCost');
      c(this, 'ataCreationCost');
      c(this, 'padding2');
      (this.emergencyMode = e.emergencyMode),
        (this.flashTakeOrderBlocked = e.flashTakeOrderBlocked),
        (this.newOrdersBlocked = e.newOrdersBlocked),
        (this.ordersTakingBlocked = e.ordersTakingBlocked),
        (this.hostFeeBps = e.hostFeeBps),
        (this.isOrderTakingPermissionless = e.isOrderTakingPermissionless),
        (this.padding0 = e.padding0),
        (this.orderCloseDelaySeconds = e.orderCloseDelaySeconds),
        (this.padding1 = e.padding1),
        (this.pdaAuthorityPreviousLamportsBalance = e.pdaAuthorityPreviousLamportsBalance),
        (this.totalTipAmount = e.totalTipAmount),
        (this.hostTipAmount = e.hostTipAmount),
        (this.pdaAuthority = e.pdaAuthority),
        (this.pdaAuthorityBump = e.pdaAuthorityBump),
        (this.adminAuthority = e.adminAuthority),
        (this.adminAuthorityCached = e.adminAuthorityCached),
        (this.txnFeeCost = e.txnFeeCost),
        (this.ataCreationCost = e.ataCreationCost),
        (this.padding2 = e.padding2);
    }
    static async fetch(e, n, r = ol.PROGRAM_ID) {
      const o = await e.getAccountInfo(n);
      if (o === null) return null;
      if (!o.owner.equals(r)) throw new Error("account doesn't belong to this program");
      return this.decode(o.data);
    }
    static async fetchMultiple(e, n, r = ol.PROGRAM_ID) {
      return (await e.getMultipleAccountsInfo(n)).map((i) => {
        if (i === null) return null;
        if (!i.owner.equals(r)) throw new Error("account doesn't belong to this program");
        return this.decode(i.data);
      });
    }
    static decode(e) {
      if (!e.slice(0, 8).equals(qt.discriminator)) throw new Error('invalid account discriminator');
      const n = qt.layout.decode(e.slice(8));
      return new qt({
        emergencyMode: n.emergencyMode,
        flashTakeOrderBlocked: n.flashTakeOrderBlocked,
        newOrdersBlocked: n.newOrdersBlocked,
        ordersTakingBlocked: n.ordersTakingBlocked,
        hostFeeBps: n.hostFeeBps,
        isOrderTakingPermissionless: n.isOrderTakingPermissionless,
        padding0: n.padding0,
        orderCloseDelaySeconds: n.orderCloseDelaySeconds,
        padding1: n.padding1,
        pdaAuthorityPreviousLamportsBalance: n.pdaAuthorityPreviousLamportsBalance,
        totalTipAmount: n.totalTipAmount,
        hostTipAmount: n.hostTipAmount,
        pdaAuthority: n.pdaAuthority,
        pdaAuthorityBump: n.pdaAuthorityBump,
        adminAuthority: n.adminAuthority,
        adminAuthorityCached: n.adminAuthorityCached,
        txnFeeCost: n.txnFeeCost,
        ataCreationCost: n.ataCreationCost,
        padding2: n.padding2,
      });
    }
    toJSON() {
      return {
        emergencyMode: this.emergencyMode,
        flashTakeOrderBlocked: this.flashTakeOrderBlocked,
        newOrdersBlocked: this.newOrdersBlocked,
        ordersTakingBlocked: this.ordersTakingBlocked,
        hostFeeBps: this.hostFeeBps,
        isOrderTakingPermissionless: this.isOrderTakingPermissionless,
        padding0: this.padding0,
        orderCloseDelaySeconds: this.orderCloseDelaySeconds.toString(),
        padding1: this.padding1.map((e) => e.toString()),
        pdaAuthorityPreviousLamportsBalance: this.pdaAuthorityPreviousLamportsBalance.toString(),
        totalTipAmount: this.totalTipAmount.toString(),
        hostTipAmount: this.hostTipAmount.toString(),
        pdaAuthority: this.pdaAuthority.toString(),
        pdaAuthorityBump: this.pdaAuthorityBump.toString(),
        adminAuthority: this.adminAuthority.toString(),
        adminAuthorityCached: this.adminAuthorityCached.toString(),
        txnFeeCost: this.txnFeeCost.toString(),
        ataCreationCost: this.ataCreationCost.toString(),
        padding2: this.padding2.map((e) => e.toString()),
      };
    }
    static fromJSON(e) {
      return new qt({
        emergencyMode: e.emergencyMode,
        flashTakeOrderBlocked: e.flashTakeOrderBlocked,
        newOrdersBlocked: e.newOrdersBlocked,
        ordersTakingBlocked: e.ordersTakingBlocked,
        hostFeeBps: e.hostFeeBps,
        isOrderTakingPermissionless: e.isOrderTakingPermissionless,
        padding0: e.padding0,
        orderCloseDelaySeconds: new Ct.default(e.orderCloseDelaySeconds),
        padding1: e.padding1.map((n) => new Ct.default(n)),
        pdaAuthorityPreviousLamportsBalance: new Ct.default(e.pdaAuthorityPreviousLamportsBalance),
        totalTipAmount: new Ct.default(e.totalTipAmount),
        hostTipAmount: new Ct.default(e.hostTipAmount),
        pdaAuthority: new Jo.PublicKey(e.pdaAuthority),
        pdaAuthorityBump: new Ct.default(e.pdaAuthorityBump),
        adminAuthority: new Jo.PublicKey(e.adminAuthority),
        adminAuthorityCached: new Jo.PublicKey(e.adminAuthorityCached),
        txnFeeCost: new Ct.default(e.txnFeeCost),
        ataCreationCost: new Ct.default(e.ataCreationCost),
        padding2: e.padding2.map((n) => new Ct.default(n)),
      });
    }
  };
c(qt, 'discriminator', ne.Buffer.from([149, 8, 156, 202, 160, 252, 176, 217])),
  c(
    qt,
    'layout',
    ke.struct([
      ke.u8('emergencyMode'),
      ke.u8('flashTakeOrderBlocked'),
      ke.u8('newOrdersBlocked'),
      ke.u8('ordersTakingBlocked'),
      ke.u16('hostFeeBps'),
      ke.u8('isOrderTakingPermissionless'),
      ke.array(ke.u8(), 1, 'padding0'),
      ke.u64('orderCloseDelaySeconds'),
      ke.array(ke.u64(), 9, 'padding1'),
      ke.u64('pdaAuthorityPreviousLamportsBalance'),
      ke.u64('totalTipAmount'),
      ke.u64('hostTipAmount'),
      ke.publicKey('pdaAuthority'),
      ke.u64('pdaAuthorityBump'),
      ke.publicKey('adminAuthority'),
      ke.publicKey('adminAuthorityCached'),
      ke.u64('txnFeeCost'),
      ke.u64('ataCreationCost'),
      ke.array(ke.u64(), 241, 'padding2'),
    ])
  );
let Os = qt;
er.GlobalConfig = Os;
var Hu = {},
  Yr = {},
  ey =
    (T && T.__createBinding) ||
    (Object.create
      ? function (t, e, n, r) {
          r === void 0 && (r = n);
          var o = Object.getOwnPropertyDescriptor(e, n);
          (!o || ('get' in o ? !e.__esModule : o.writable || o.configurable)) &&
            (o = {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            }),
            Object.defineProperty(t, r, o);
        }
      : function (t, e, n, r) {
          r === void 0 && (r = n), (t[r] = e[n]);
        }),
  ty =
    (T && T.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  ny =
    (T && T.__importStar) ||
    (function () {
      var t = function (e) {
        return (
          (t =
            Object.getOwnPropertyNames ||
            function (n) {
              var r = [];
              for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (r[r.length] = o);
              return r;
            }),
          t(e)
        );
      };
      return function (e) {
        if (e && e.__esModule) return e;
        var n = {};
        if (e != null)
          for (var r = t(e), o = 0; o < r.length; o++) r[o] !== 'default' && ey(n, e, r[o]);
        return ty(n, e), n;
      };
    })(),
  ry =
    (T && T.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(Yr, '__esModule', { value: !0 });
Yr.Order = void 0;
const kn = me,
  St = ry(Ye),
  De = ny(ot),
  sl = Ge,
  zt = class zt {
    constructor(e) {
      c(this, 'globalConfig');
      c(this, 'maker');
      c(this, 'inputMint');
      c(this, 'inputMintProgramId');
      c(this, 'outputMint');
      c(this, 'outputMintProgramId');
      c(this, 'initialInputAmount');
      c(this, 'expectedOutputAmount');
      c(this, 'remainingInputAmount');
      c(this, 'filledOutputAmount');
      c(this, 'tipAmount');
      c(this, 'numberOfFills');
      c(this, 'orderType');
      c(this, 'status');
      c(this, 'inVaultBump');
      c(this, 'flashIxLock');
      c(this, 'padding0');
      c(this, 'lastUpdatedTimestamp');
      c(this, 'flashStartTakerOutputBalance');
      c(this, 'padding');
      (this.globalConfig = e.globalConfig),
        (this.maker = e.maker),
        (this.inputMint = e.inputMint),
        (this.inputMintProgramId = e.inputMintProgramId),
        (this.outputMint = e.outputMint),
        (this.outputMintProgramId = e.outputMintProgramId),
        (this.initialInputAmount = e.initialInputAmount),
        (this.expectedOutputAmount = e.expectedOutputAmount),
        (this.remainingInputAmount = e.remainingInputAmount),
        (this.filledOutputAmount = e.filledOutputAmount),
        (this.tipAmount = e.tipAmount),
        (this.numberOfFills = e.numberOfFills),
        (this.orderType = e.orderType),
        (this.status = e.status),
        (this.inVaultBump = e.inVaultBump),
        (this.flashIxLock = e.flashIxLock),
        (this.padding0 = e.padding0),
        (this.lastUpdatedTimestamp = e.lastUpdatedTimestamp),
        (this.flashStartTakerOutputBalance = e.flashStartTakerOutputBalance),
        (this.padding = e.padding);
    }
    static async fetch(e, n, r = sl.PROGRAM_ID) {
      const o = await e.getAccountInfo(n);
      if (o === null) return null;
      if (!o.owner.equals(r)) throw new Error("account doesn't belong to this program");
      return this.decode(o.data);
    }
    static async fetchMultiple(e, n, r = sl.PROGRAM_ID) {
      return (await e.getMultipleAccountsInfo(n)).map((i) => {
        if (i === null) return null;
        if (!i.owner.equals(r)) throw new Error("account doesn't belong to this program");
        return this.decode(i.data);
      });
    }
    static decode(e) {
      if (!e.slice(0, 8).equals(zt.discriminator)) throw new Error('invalid account discriminator');
      const n = zt.layout.decode(e.slice(8));
      return new zt({
        globalConfig: n.globalConfig,
        maker: n.maker,
        inputMint: n.inputMint,
        inputMintProgramId: n.inputMintProgramId,
        outputMint: n.outputMint,
        outputMintProgramId: n.outputMintProgramId,
        initialInputAmount: n.initialInputAmount,
        expectedOutputAmount: n.expectedOutputAmount,
        remainingInputAmount: n.remainingInputAmount,
        filledOutputAmount: n.filledOutputAmount,
        tipAmount: n.tipAmount,
        numberOfFills: n.numberOfFills,
        orderType: n.orderType,
        status: n.status,
        inVaultBump: n.inVaultBump,
        flashIxLock: n.flashIxLock,
        padding0: n.padding0,
        lastUpdatedTimestamp: n.lastUpdatedTimestamp,
        flashStartTakerOutputBalance: n.flashStartTakerOutputBalance,
        padding: n.padding,
      });
    }
    toJSON() {
      return {
        globalConfig: this.globalConfig.toString(),
        maker: this.maker.toString(),
        inputMint: this.inputMint.toString(),
        inputMintProgramId: this.inputMintProgramId.toString(),
        outputMint: this.outputMint.toString(),
        outputMintProgramId: this.outputMintProgramId.toString(),
        initialInputAmount: this.initialInputAmount.toString(),
        expectedOutputAmount: this.expectedOutputAmount.toString(),
        remainingInputAmount: this.remainingInputAmount.toString(),
        filledOutputAmount: this.filledOutputAmount.toString(),
        tipAmount: this.tipAmount.toString(),
        numberOfFills: this.numberOfFills.toString(),
        orderType: this.orderType,
        status: this.status,
        inVaultBump: this.inVaultBump,
        flashIxLock: this.flashIxLock,
        padding0: this.padding0,
        lastUpdatedTimestamp: this.lastUpdatedTimestamp.toString(),
        flashStartTakerOutputBalance: this.flashStartTakerOutputBalance.toString(),
        padding: this.padding.map((e) => e.toString()),
      };
    }
    static fromJSON(e) {
      return new zt({
        globalConfig: new kn.PublicKey(e.globalConfig),
        maker: new kn.PublicKey(e.maker),
        inputMint: new kn.PublicKey(e.inputMint),
        inputMintProgramId: new kn.PublicKey(e.inputMintProgramId),
        outputMint: new kn.PublicKey(e.outputMint),
        outputMintProgramId: new kn.PublicKey(e.outputMintProgramId),
        initialInputAmount: new St.default(e.initialInputAmount),
        expectedOutputAmount: new St.default(e.expectedOutputAmount),
        remainingInputAmount: new St.default(e.remainingInputAmount),
        filledOutputAmount: new St.default(e.filledOutputAmount),
        tipAmount: new St.default(e.tipAmount),
        numberOfFills: new St.default(e.numberOfFills),
        orderType: e.orderType,
        status: e.status,
        inVaultBump: e.inVaultBump,
        flashIxLock: e.flashIxLock,
        padding0: e.padding0,
        lastUpdatedTimestamp: new St.default(e.lastUpdatedTimestamp),
        flashStartTakerOutputBalance: new St.default(e.flashStartTakerOutputBalance),
        padding: e.padding.map((n) => new St.default(n)),
      });
    }
  };
c(zt, 'discriminator', ne.Buffer.from([134, 173, 223, 185, 77, 86, 28, 51])),
  c(
    zt,
    'layout',
    De.struct([
      De.publicKey('globalConfig'),
      De.publicKey('maker'),
      De.publicKey('inputMint'),
      De.publicKey('inputMintProgramId'),
      De.publicKey('outputMint'),
      De.publicKey('outputMintProgramId'),
      De.u64('initialInputAmount'),
      De.u64('expectedOutputAmount'),
      De.u64('remainingInputAmount'),
      De.u64('filledOutputAmount'),
      De.u64('tipAmount'),
      De.u64('numberOfFills'),
      De.u8('orderType'),
      De.u8('status'),
      De.u8('inVaultBump'),
      De.u8('flashIxLock'),
      De.array(De.u8(), 4, 'padding0'),
      De.u64('lastUpdatedTimestamp'),
      De.u64('flashStartTakerOutputBalance'),
      De.array(De.u64(), 19, 'padding'),
    ])
  );
let Rs = zt;
Yr.Order = Rs;
var ro = {},
  iy =
    (T && T.__createBinding) ||
    (Object.create
      ? function (t, e, n, r) {
          r === void 0 && (r = n);
          var o = Object.getOwnPropertyDescriptor(e, n);
          (!o || ('get' in o ? !e.__esModule : o.writable || o.configurable)) &&
            (o = {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            }),
            Object.defineProperty(t, r, o);
        }
      : function (t, e, n, r) {
          r === void 0 && (r = n), (t[r] = e[n]);
        }),
  oy =
    (T && T.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  sy =
    (T && T.__importStar) ||
    (function () {
      var t = function (e) {
        return (
          (t =
            Object.getOwnPropertyNames ||
            function (n) {
              var r = [];
              for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (r[r.length] = o);
              return r;
            }),
          t(e)
        );
      };
      return function (e) {
        if (e && e.__esModule) return e;
        var n = {};
        if (e != null)
          for (var r = t(e), o = 0; o < r.length; o++) r[o] !== 'default' && iy(n, e, r[o]);
        return oy(n, e), n;
      };
    })(),
  ay =
    (T && T.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(ro, '__esModule', { value: !0 });
ro.UserSwapBalancesState = void 0;
const Qo = ay(Ye),
  Ei = sy(ot),
  al = Ge,
  Yt = class Yt {
    constructor(e) {
      c(this, 'userLamports');
      c(this, 'inputTaBalance');
      c(this, 'outputTaBalance');
      (this.userLamports = e.userLamports),
        (this.inputTaBalance = e.inputTaBalance),
        (this.outputTaBalance = e.outputTaBalance);
    }
    static async fetch(e, n, r = al.PROGRAM_ID) {
      const o = await e.getAccountInfo(n);
      if (o === null) return null;
      if (!o.owner.equals(r)) throw new Error("account doesn't belong to this program");
      return this.decode(o.data);
    }
    static async fetchMultiple(e, n, r = al.PROGRAM_ID) {
      return (await e.getMultipleAccountsInfo(n)).map((i) => {
        if (i === null) return null;
        if (!i.owner.equals(r)) throw new Error("account doesn't belong to this program");
        return this.decode(i.data);
      });
    }
    static decode(e) {
      if (!e.slice(0, 8).equals(Yt.discriminator)) throw new Error('invalid account discriminator');
      const n = Yt.layout.decode(e.slice(8));
      return new Yt({
        userLamports: n.userLamports,
        inputTaBalance: n.inputTaBalance,
        outputTaBalance: n.outputTaBalance,
      });
    }
    toJSON() {
      return {
        userLamports: this.userLamports.toString(),
        inputTaBalance: this.inputTaBalance.toString(),
        outputTaBalance: this.outputTaBalance.toString(),
      };
    }
    static fromJSON(e) {
      return new Yt({
        userLamports: new Qo.default(e.userLamports),
        inputTaBalance: new Qo.default(e.inputTaBalance),
        outputTaBalance: new Qo.default(e.outputTaBalance),
      });
    }
  };
c(Yt, 'discriminator', ne.Buffer.from([140, 228, 152, 62, 231, 27, 245, 198])),
  c(
    Yt,
    'layout',
    Ei.struct([Ei.u64('userLamports'), Ei.u64('inputTaBalance'), Ei.u64('outputTaBalance')])
  );
let ys = Yt;
ro.UserSwapBalancesState = ys;
(function (t) {
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.GlobalConfig = t.UserSwapBalancesState = t.Order = void 0);
  var e = Yr;
  Object.defineProperty(t, 'Order', {
    enumerable: !0,
    get: function () {
      return e.Order;
    },
  });
  var n = ro;
  Object.defineProperty(t, 'UserSwapBalancesState', {
    enumerable: !0,
    get: function () {
      return n.UserSwapBalancesState;
    },
  });
  var r = er;
  Object.defineProperty(t, 'GlobalConfig', {
    enumerable: !0,
    get: function () {
      return r.GlobalConfig;
    },
  });
})(Hu);
var ul;
function Bi() {
  return (
    ul ||
      ((ul = 1),
      (function (t) {
        var e =
            (T && T.__createBinding) ||
            (Object.create
              ? function (B, H, K, re) {
                  re === void 0 && (re = K);
                  var le = Object.getOwnPropertyDescriptor(H, K);
                  (!le || ('get' in le ? !H.__esModule : le.writable || le.configurable)) &&
                    (le = {
                      enumerable: !0,
                      get: function () {
                        return H[K];
                      },
                    }),
                    Object.defineProperty(B, re, le);
                }
              : function (B, H, K, re) {
                  re === void 0 && (re = K), (B[re] = H[K]);
                }),
          n =
            (T && T.__setModuleDefault) ||
            (Object.create
              ? function (B, H) {
                  Object.defineProperty(B, 'default', { enumerable: !0, value: H });
                }
              : function (B, H) {
                  B.default = H;
                }),
          r =
            (T && T.__importStar) ||
            (function () {
              var B = function (H) {
                return (
                  (B =
                    Object.getOwnPropertyNames ||
                    function (K) {
                      var re = [];
                      for (var le in K)
                        Object.prototype.hasOwnProperty.call(K, le) && (re[re.length] = le);
                      return re;
                    }),
                  B(H)
                );
              };
              return function (H) {
                if (H && H.__esModule) return H;
                var K = {};
                if (H != null)
                  for (var re = B(H), le = 0; le < re.length; le++)
                    re[le] !== 'default' && e(K, H, re[le]);
                return n(K, H), K;
              };
            })(),
          o =
            (T && T.__importDefault) ||
            function (B) {
              return B && B.__esModule ? B : { default: B };
            };
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.parseTokenSymbol =
            t.getCustomProgramErrorCode =
            t.TokenInfo =
            t.DEFAULT_TXN_FEE_LAMPORTS =
            t.WAD =
            t.LimoIdl =
              void 0),
          (t.getLimoProgramId = y),
          (t.parseKeypairFile = P),
          (t.divCeil = k),
          (t.amountToLamportsBN = V),
          (t.amountToLamportsDecimal = C),
          (t.lamportsToAmountBN = M),
          (t.lamportsToAmountDecimal = W),
          (t.createMint = Y),
          (t.createMintFromKeypair = D),
          (t.getMintDecimals = L),
          (t.getMintsProgramOwner = X),
          (t.printMultisigTx = ae),
          (t.printSimulateTx = ce),
          (t.solAirdrop = pe),
          (t.solAirdropMin = he),
          (t.checkIfAccountExists = _e),
          (t.getAssociatedTokenAddress = Re),
          (t.createAssociatedTokenAccountIdempotentInstruction = Te),
          (t.createAtaIdempotent = Xe),
          (t.setupAta = Ot),
          (t.mintTo = It),
          (t.getMockSwapInstructions = Sn),
          (t.getMockSwapSingleInstructionSplOnly = vn),
          (t.transferToken = bt),
          (t.mapAnchorError = rr),
          (t.getTokenAccountBalance = Qr),
          (t.createAddExtraComputeUnitFeeTransaction = an),
          (t.getSolBalanceInLamports = Ht),
          (t.getSolBalance = un),
          (t.endpointFromCluster = co),
          (t.pubkeyFromFile = Zr),
          (t.createAddExtraComputeUnitsTransaction = lo),
          (t.u16ToBytes = fo),
          (t.accountExist = ei),
          (t.fetchGlobalConfigWithRetry = po),
          (t.getPdaAuthority = _o),
          (t.getTokenVaultPDA = mo),
          (t.getEventAuthorityPDA = ho),
          (t.getUserSwapBalanceStatePDA = go),
          (t.getIntermediaryTokenAccountPDA = Ao),
          (t.getExpressRelayMetadataPDA = ti),
          (t.getExpressRelayConfigRouterPDA = ni),
          (t.sendAndConfirmInstructions = Oo),
          (t.createKeypairRentExempt = ii),
          (t.getOrderRentExemptLamports = Ro),
          (t.createKeypairRentExemptIxSync = oi),
          (t.createGlobalConfigPublicKeyRentExempt = yo),
          (t.executeTransaction = si),
          (t.buildAndSendTxnWithLogs = To),
          (t.sleep = Gt),
          (t.scaleDownWads = cn),
          (t.convertStakeToAmount = ln),
          (t.convertAmountToStake = ai);
        const i = r(Fn),
          u = r(pr),
          d = r(no),
          f = me,
          s = jr,
          _ = Lt,
          g = r(me),
          m = o(sp),
          h = Gu(),
          A = er,
          R = Ge,
          b = wl,
          N = Hu,
          v = o(Ye);
        (t.LimoIdl = m.default),
          (t.WAD = new s.Decimal('1'.concat(Array(19).join('0')))),
          (t.DEFAULT_TXN_FEE_LAMPORTS = 5e3);
        const w = 'escrow_vault',
          x = 'authority',
          G = 'metadata',
          F = 'config_router',
          Q = 'intermediary',
          z = '__event_authority';
        class I {
          constructor(H, K, re) {
            c(this, 'symbol');
            c(this, 'mint');
            c(this, 'mintDecimals');
            (this.symbol = H), (this.mint = K), (this.mintDecimals = re);
          }
        }
        t.TokenInfo = I;
        function y(B) {
          return R.PROGRAM_ID;
        }
        function P(B) {
          return f.Keypair.fromSecretKey(new Uint8Array(JSON.parse(pr.readFileSync(B))));
        }
        function k(B, H) {
          return B.add(H).sub(new v.default(1)).div(H);
        }
        function V(B, H) {
          let K = Math.pow(10, H);
          return new v.default(B.mul(K).floor().toString());
        }
        function C(B, H) {
          let K = Math.pow(10, H);
          return B.mul(K);
        }
        function M(B, H) {
          let K = new v.default(Math.pow(10, H));
          return new s.Decimal(B.div(K).toString());
        }
        function W(B, H) {
          let K = Math.pow(10, H);
          return B.div(K);
        }
        async function Y(B, H, K = 6) {
          const re = i.web3.Keypair.generate();
          return await D(B, H, re, K);
        }
        async function D(B, H, K, re = 6) {
          const le = await oe(B, H, K.publicKey, re);
          console.log('Mint auth', H.toString());
          const Ee = new i.web3.Transaction();
          return Ee.add(...le), await B.sendAndConfirm(Ee, [K]), K.publicKey;
        }
        async function L(B, H) {
          const K = await X(B, H);
          return (await (0, _.getMint)(B, H, B.commitment, K)).decimals;
        }
        async function X(B, H) {
          const K = await B.getAccountInfo(H);
          if (!K) throw new Error('Mint not found');
          return K.owner;
        }
        async function oe(B, H, K, re) {
          return [
            i.web3.SystemProgram.createAccount({
              fromPubkey: B.wallet.publicKey,
              newAccountPubkey: K,
              space: 82,
              lamports: await B.connection.getMinimumBalanceForRentExemption(82),
              programId: _.TOKEN_PROGRAM_ID,
            }),
            (0, _.createInitializeMintInstruction)(K, re, H, null, _.TOKEN_PROGRAM_ID),
          ];
        }
        async function ae(B) {
          console.log((0, b.binary_to_base58)(B.serializeMessage()));
        }
        async function ce(B, H) {
          console.log(
            'Tx in B64',
            'https://explorer.solana.com/tx/inspector?message='.concat(
              encodeURIComponent(H.serializeMessage().toString('base64'))
            )
          );
          let K = await B.simulateTransaction(H);
          console.log('Simulate Response', K), console.log('');
        }
        async function pe(B, H, K) {
          const re = await B.connection.requestAirdrop(H, C(K, 9).toNumber());
          return await B.connection.confirmTransaction(re), await un(B, H);
        }
        async function he(B, H, K) {
          const re = s.Decimal.max(50, K);
          let le = await un(B, H);
          for (; le.lt(K); ) {
            try {
              await B.connection.requestAirdrop(H, C(re, 9).toNumber());
            } catch (Ee) {
              await Gt(100), console.log('Error', Ee);
            }
            await Gt(100), (le = await un(B, H));
          }
          return le;
        }
        async function _e(B, H) {
          return (await B.getAccountInfo(H)) != null;
        }
        function Re(B, H, K) {
          return (0, _.getAssociatedTokenAddressSync)(H, B, !0, K, _.ASSOCIATED_TOKEN_PROGRAM_ID);
        }
        function Te(B, H, K = B, re, le) {
          let Ee = le;
          Ee || (Ee = Re(B, H, re));
          const Je = (0, _.createAssociatedTokenAccountInstruction)(
            K,
            Ee,
            B,
            H,
            re,
            _.ASSOCIATED_TOKEN_PROGRAM_ID
          );
          return (Je.data = ne.Buffer.from([1])), [Ee, Je];
        }
        function Xe(B, H, K, re) {
          const [le, Ee] = Te(B, K, H, re);
          return { ata: le, createAtaIx: Ee };
        }
        async function Ot(B, H, K, re = K.publicKey) {
          const le = Re(re, H, _.TOKEN_PROGRAM_ID);
          if (!(await _e(B.connection, le))) {
            const [, Ee] = Te(re, H, K.publicKey, _.TOKEN_PROGRAM_ID, le),
              Je = new f.Transaction().add(Ee);
            await B.sendAndConfirm(Je, [K]);
          }
          return le;
        }
        async function It(B, H, K, re, le) {
          const Ee = new f.Transaction().add(
            (0, _.createMintToCheckedInstruction)(H, K, B.wallet.publicKey, re, le)
          );
          await B.sendAndConfirm(Ee, [], { skipPreflight: !0 });
        }
        function Sn(B, H, K, re, le, Ee, Je, Ft) {
          let dn = [];
          re.equals(h.WRAPPED_SOL_MINT)
            ? (dn.push(
                f.SystemProgram.transfer({
                  fromPubkey: B.wallet.publicKey,
                  toPubkey: Re(H, re, _.TOKEN_PROGRAM_ID),
                  lamports: C(Ee, Ft).toNumber(),
                })
              ),
              dn.push(
                new f.TransactionInstruction({
                  keys: [{ pubkey: Re(H, re, _.TOKEN_PROGRAM_ID), isSigner: !1, isWritable: !0 }],
                  data: ne.Buffer.from(new Uint8Array([17])),
                  programId: _.TOKEN_PROGRAM_ID,
                })
              ))
            : dn.push(
                (0, _.createMintToCheckedInstruction)(
                  re,
                  Re(H, re, _.TOKEN_PROGRAM_ID),
                  B.wallet.publicKey,
                  C(Ee, Ft).toNumber(),
                  Ft
                )
              );
          let fn = [];
          return (
            K.equals(h.WRAPPED_SOL_MINT)
              ? (fn.push(
                  (0, _.createCloseAccountInstruction)(
                    Re(H, K, _.TOKEN_PROGRAM_ID),
                    H,
                    H,
                    [],
                    _.TOKEN_PROGRAM_ID
                  )
                ),
                fn.push(
                  f.SystemProgram.transfer({
                    fromPubkey: H,
                    toPubkey: B.wallet.publicKey,
                    lamports: C(le, Je).toNumber(),
                  })
                ),
                fn.push(
                  Xe(H, B.wallet.publicKey, h.WRAPPED_SOL_MINT, _.TOKEN_PROGRAM_ID).createAtaIx
                ))
              : fn.push(
                  (0, _.createBurnInstruction)(
                    Re(H, K, _.TOKEN_PROGRAM_ID),
                    K,
                    H,
                    C(le, Je).toNumber()
                  )
                ),
            [...fn, ...dn]
          );
        }
        function vn(B, H, K, re, le) {
          return (0, _.createMintToCheckedInstruction)(
            K,
            Re(H, K, _.TOKEN_PROGRAM_ID),
            B.wallet.publicKey,
            C(re, le).toNumber(),
            le
          );
        }
        async function bt(B, H, K, re, le) {
          let Ee = new f.Transaction().add(
            (0, _.createTransferInstruction)(K, re, H.publicKey, le, [], _.TOKEN_PROGRAM_ID)
          );
          await g.sendAndConfirmTransaction(B.connection, Ee, [H]), await Gt(500);
        }
        const sn = (B) => {
          const H = B.indexOf('Custom program error:');
          return H === -1
            ? [!1, 'May not be a custom program error']
            : [!0, ''.concat(parseInt(B.substring(H + 22, H + 28).replace(' ', ''), 16))];
        };
        t.getCustomProgramErrorCode = sn;
        async function rr(B) {
          try {
            return await B;
          } catch (H) {
            let [K, re] = (0, t.getCustomProgramErrorCode)(JSON.stringify(H));
            if (K) {
              let le;
              throw Number(re)
                ? ((le = d.fromCode(Number(re))), new Error(le))
                : Number(re) >= 6e3 && Number(re) <= 7e3
                  ? (re[re.length - 2] === '0' ? (re = re.slice(-1)) : (re = re.slice(-2)),
                    (le = t.LimoIdl.errors[re].msg),
                    new Error(le))
                  : new Error(H);
            }
            throw H;
          }
        }
        async function Qr(B, H) {
          const K = await B.getTokenAccountBalance(H);
          return new s.Decimal(K.value.amount).div(s.Decimal.pow(10, K.value.decimals));
        }
        function an(B, H) {
          const K = [];
          return (
            K.push(f.ComputeBudgetProgram.setComputeUnitLimit({ units: B })),
            K.push(
              f.ComputeBudgetProgram.setComputeUnitPrice({ microLamports: Number(H.toFixed(0)) })
            ),
            K
          );
        }
        async function Ht(B, H) {
          var re;
          let K;
          for (; K === void 0; )
            K = (re = await B.connection.getAccountInfo(H)) == null ? void 0 : re.lamports;
          return K;
        }
        async function un(B, H) {
          const K = new s.Decimal(await Ht(B, H));
          return W(K, 9);
        }
        function co(B) {
          switch (B) {
            case 'mainnet':
              return 'FIXTHIS';
            case 'devnet':
              return 'FIXTHIS';
            case 'localnet':
              return 'http://127.0.0.1:8899';
          }
          return B || 'err';
        }
        function Zr(B) {
          const K = u
              .readFileSync(B, 'utf8')
              .replace('[', '')
              .replace(']', '')
              .split(',')
              .map(function (Ee) {
                return parseInt(Ee, 10);
              }),
            re = Uint8Array.from(K);
          return f.Keypair.fromSecretKey(re).publicKey;
        }
        function lo(B) {
          return g.ComputeBudgetProgram.setComputeUnitLimit({ units: B });
        }
        function fo(B) {
          const H = new ArrayBuffer(2);
          return new DataView(H).setUint16(0, B, !1), new Uint8Array(H);
        }
        async function ei(B, H) {
          const K = await B.getAccountInfo(H);
          return !(K === null || K.data.length === 0);
        }
        async function po(B, H) {
          return ri(async () => await A.GlobalConfig.fetch(B.conn, H), H);
        }
        function _o(B, H) {
          const [K, re] = i.web3.PublicKey.findProgramAddressSync(
            [ne.Buffer.from(x), H.toBuffer()],
            B
          );
          return K;
        }
        function mo(B, H, K) {
          const [re, le] = i.web3.PublicKey.findProgramAddressSync(
            [ne.Buffer.from(w), H.toBuffer(), K.toBuffer()],
            B
          );
          return re;
        }
        function ho(B) {
          const [H, K] = i.web3.PublicKey.findProgramAddressSync([ne.Buffer.from(z)], B);
          return H;
        }
        function go(B, H) {
          const [K, re] = i.web3.PublicKey.findProgramAddressSync(
            [ne.Buffer.from('balances'), B.toBuffer()],
            H
          );
          return K;
        }
        function Ao(B, H) {
          const [K, re] = i.web3.PublicKey.findProgramAddressSync(
            [ne.Buffer.from(Q), H.toBuffer()],
            B
          );
          return K;
        }
        function ti(B) {
          const [H, K] = i.web3.PublicKey.findProgramAddressSync([ne.Buffer.from(G)], B);
          return H;
        }
        function ni(B, H) {
          const [K, re] = i.web3.PublicKey.findProgramAddressSync(
            [ne.Buffer.from(F), H.toBuffer()],
            B
          );
          return K;
        }
        async function ri(B, H, K = 3) {
          for (let re = 0; re < K; re++) {
            let le = await B();
            if (le !== null) return le;
            console.log(
              '['
                .concat(re + 1, '/')
                .concat(K, '] Fetched account ')
                .concat(H, ' is null. Refetching...')
            );
          }
          return null;
        }
        async function Oo(B, H) {
          let K = new f.Transaction();
          for (let le = 0; le < H.length; le++) K.add(H[le]);
          let { blockhash: re } = await B.conn.getLatestBlockhash();
          return (
            (K.recentBlockhash = re),
            (K.feePayer = B.admin.publicKey),
            await g.sendAndConfirmTransaction(B.conn, K, [B.admin])
          );
        }
        async function ii(B, H, K, re) {
          const le = new f.Transaction();
          return (
            le.add(
              oi(
                B.wallet.publicKey,
                K,
                re,
                await B.connection.getMinimumBalanceForRentExemption(re),
                H
              )
            ),
            await B.sendAndConfirm(le, [K]),
            K
          );
        }
        async function Ro(B) {
          return await B.getMinimumBalanceForRentExemption(N.Order.layout.span + 8);
        }
        function oi(B, H, K, re, le = h.limoId) {
          return f.SystemProgram.createAccount({
            fromPubkey: B,
            newAccountPubkey: H.publicKey,
            space: K,
            lamports: re,
            programId: le,
          });
        }
        async function yo(B, H) {
          const K = f.Keypair.generate();
          return await ii(B, H, K, A.GlobalConfig.layout.getSpan() + 8);
        }
        async function si(B, H, K, re = []) {
          const le = new f.Transaction(),
            { blockhash: Ee } = await B.getLatestBlockhash();
          return (
            (le.recentBlockhash = Ee),
            (le.feePayer = K.publicKey),
            le.add(...H),
            await (0, f.sendAndConfirmTransaction)(B, le, [K, ...re], { commitment: 'confirmed' })
          );
        }
        async function To(B, H, K, re) {
          const { blockhash: le } = await B.getLatestBlockhash();
          (H.recentBlockhash = le), (H.feePayer = K.publicKey);
          try {
            const Ee = await B.sendTransaction(H, [K, ...re]);
            console.log('Transaction Hash:', Ee), await Gt(5e3);
            const Je = await B.getTransaction(Ee, { commitment: 'confirmed' });
            console.log('Transaction Logs:\n', Je.meta.logMessages);
          } catch (Ee) {
            console.log(Ee), await Gt(5e3);
            const Je = Ee.toString().split(' failed ')[0].split('Transaction ')[1],
              Ft = await B.getTransaction(Je, { commitment: 'confirmed' });
            console.log('Txn', Ft.meta.logMessages);
          }
        }
        function Gt(B) {
          return new Promise((H) => setTimeout(H, B));
        }
        function cn(B) {
          return new s.Decimal(B.toString()).div(t.WAD).toNumber();
        }
        function ln(B, H, K) {
          return B === new s.Decimal(0)
            ? new s.Decimal(0)
            : H !== new s.Decimal(0)
              ? B.mul(K).div(H)
              : B.add(K);
        }
        function ai(B, H, K) {
          return B === new s.Decimal(0)
            ? new s.Decimal(0)
            : K !== new s.Decimal(0)
              ? H.mul(B).div(K)
              : B;
        }
        const ui = (B) => String.fromCharCode(...B.filter((H) => H > 0));
        t.parseTokenSymbol = ui;
      })(Xo)),
    Xo
  );
}
var pt = {},
  Et = {},
  uy =
    (T && T.__createBinding) ||
    (Object.create
      ? function (t, e, n, r) {
          r === void 0 && (r = n);
          var o = Object.getOwnPropertyDescriptor(e, n);
          (!o || ('get' in o ? !e.__esModule : o.writable || o.configurable)) &&
            (o = {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            }),
            Object.defineProperty(t, r, o);
        }
      : function (t, e, n, r) {
          r === void 0 && (r = n), (t[r] = e[n]);
        }),
  cy =
    (T && T.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  ly =
    (T && T.__importStar) ||
    (function () {
      var t = function (e) {
        return (
          (t =
            Object.getOwnPropertyNames ||
            function (n) {
              var r = [];
              for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (r[r.length] = o);
              return r;
            }),
          t(e)
        );
      };
      return function (e) {
        if (e && e.__esModule) return e;
        var n = {};
        if (e != null)
          for (var r = t(e), o = 0; o < r.length; o++) r[o] !== 'default' && uy(n, e, r[o]);
        return cy(n, e), n;
      };
    })();
Object.defineProperty(Et, '__esModule', { value: !0 });
Et.Cancelled = Et.Filled = Et.Active = void 0;
Et.fromDecoded = dy;
Et.fromJSON = fy;
Et.layout = py;
const wi = ly(ot);
class yr {
  constructor() {
    c(this, 'discriminator', 0);
    c(this, 'kind', 'Active');
  }
  toJSON() {
    return { kind: 'Active' };
  }
  toEncodable() {
    return { Active: {} };
  }
}
c(yr, 'discriminator', 0), c(yr, 'kind', 'Active');
Et.Active = yr;
class Tr {
  constructor() {
    c(this, 'discriminator', 1);
    c(this, 'kind', 'Filled');
  }
  toJSON() {
    return { kind: 'Filled' };
  }
  toEncodable() {
    return { Filled: {} };
  }
}
c(Tr, 'discriminator', 1), c(Tr, 'kind', 'Filled');
Et.Filled = Tr;
class Er {
  constructor() {
    c(this, 'discriminator', 2);
    c(this, 'kind', 'Cancelled');
  }
  toJSON() {
    return { kind: 'Cancelled' };
  }
  toEncodable() {
    return { Cancelled: {} };
  }
}
c(Er, 'discriminator', 2), c(Er, 'kind', 'Cancelled');
Et.Cancelled = Er;
function dy(t) {
  if (typeof t != 'object') throw new Error('Invalid enum object');
  if ('Active' in t) return new yr();
  if ('Filled' in t) return new Tr();
  if ('Cancelled' in t) return new Er();
  throw new Error('Invalid enum object');
}
function fy(t) {
  switch (t.kind) {
    case 'Active':
      return new yr();
    case 'Filled':
      return new Tr();
    case 'Cancelled':
      return new Er();
  }
}
function py(t) {
  const e = wi.rustEnum([
    wi.struct([], 'Active'),
    wi.struct([], 'Filled'),
    wi.struct([], 'Cancelled'),
  ]);
  return t !== void 0 ? e.replicate(t) : e;
}
var Nn = {},
  _y =
    (T && T.__createBinding) ||
    (Object.create
      ? function (t, e, n, r) {
          r === void 0 && (r = n);
          var o = Object.getOwnPropertyDescriptor(e, n);
          (!o || ('get' in o ? !e.__esModule : o.writable || o.configurable)) &&
            (o = {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            }),
            Object.defineProperty(t, r, o);
        }
      : function (t, e, n, r) {
          r === void 0 && (r = n), (t[r] = e[n]);
        }),
  my =
    (T && T.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  hy =
    (T && T.__importStar) ||
    (function () {
      var t = function (e) {
        return (
          (t =
            Object.getOwnPropertyNames ||
            function (n) {
              var r = [];
              for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (r[r.length] = o);
              return r;
            }),
          t(e)
        );
      };
      return function (e) {
        if (e && e.__esModule) return e;
        var n = {};
        if (e != null)
          for (var r = t(e), o = 0; o < r.length; o++) r[o] !== 'default' && _y(n, e, r[o]);
        return my(n, e), n;
      };
    })();
Object.defineProperty(Nn, '__esModule', { value: !0 });
Nn.Vanilla = void 0;
Nn.fromDecoded = gy;
Nn.fromJSON = Ay;
Nn.layout = Oy;
const cl = hy(ot);
class wr {
  constructor() {
    c(this, 'discriminator', 0);
    c(this, 'kind', 'Vanilla');
  }
  toJSON() {
    return { kind: 'Vanilla' };
  }
  toEncodable() {
    return { Vanilla: {} };
  }
}
c(wr, 'discriminator', 0), c(wr, 'kind', 'Vanilla');
Nn.Vanilla = wr;
function gy(t) {
  if (typeof t != 'object') throw new Error('Invalid enum object');
  if ('Vanilla' in t) return new wr();
  throw new Error('Invalid enum object');
}
function Ay(t) {
  switch (t.kind) {
    case 'Vanilla':
      return new wr();
  }
}
function Oy(t) {
  const e = cl.rustEnum([cl.struct([], 'Vanilla')]);
  return t !== void 0 ? e.replicate(t) : e;
}
var ve = {},
  Ry =
    (T && T.__createBinding) ||
    (Object.create
      ? function (t, e, n, r) {
          r === void 0 && (r = n);
          var o = Object.getOwnPropertyDescriptor(e, n);
          (!o || ('get' in o ? !e.__esModule : o.writable || o.configurable)) &&
            (o = {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            }),
            Object.defineProperty(t, r, o);
        }
      : function (t, e, n, r) {
          r === void 0 && (r = n), (t[r] = e[n]);
        }),
  yy =
    (T && T.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  Ty =
    (T && T.__importStar) ||
    (function () {
      var t = function (e) {
        return (
          (t =
            Object.getOwnPropertyNames ||
            function (n) {
              var r = [];
              for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (r[r.length] = o);
              return r;
            }),
          t(e)
        );
      };
      return function (e) {
        if (e && e.__esModule) return e;
        var n = {};
        if (e != null)
          for (var r = t(e), o = 0; o < r.length; o++) r[o] !== 'default' && Ry(n, e, r[o]);
        return yy(n, e), n;
      };
    })();
Object.defineProperty(ve, '__esModule', { value: !0 });
ve.UpdateAtaCreationCost =
  ve.UpdateTxnFeeCost =
  ve.UpdateOrderCloseDelaySeconds =
  ve.UpdateOrderTakingPermissionless =
  ve.UpdateAdminAuthorityCached =
  ve.UpdateHostFeeBps =
  ve.UpdateBlockOrderTaking =
  ve.UpdateBlockNewOrders =
  ve.UpdateFlashTakeOrderBlocked =
  ve.UpdateEmergencyMode =
    void 0;
ve.fromDecoded = Ey;
ve.fromJSON = wy;
ve.layout = Iy;
const Tt = Ty(ot);
class Ir {
  constructor() {
    c(this, 'discriminator', 0);
    c(this, 'kind', 'UpdateEmergencyMode');
  }
  toJSON() {
    return { kind: 'UpdateEmergencyMode' };
  }
  toEncodable() {
    return { UpdateEmergencyMode: {} };
  }
}
c(Ir, 'discriminator', 0), c(Ir, 'kind', 'UpdateEmergencyMode');
ve.UpdateEmergencyMode = Ir;
class br {
  constructor() {
    c(this, 'discriminator', 1);
    c(this, 'kind', 'UpdateFlashTakeOrderBlocked');
  }
  toJSON() {
    return { kind: 'UpdateFlashTakeOrderBlocked' };
  }
  toEncodable() {
    return { UpdateFlashTakeOrderBlocked: {} };
  }
}
c(br, 'discriminator', 1), c(br, 'kind', 'UpdateFlashTakeOrderBlocked');
ve.UpdateFlashTakeOrderBlocked = br;
class Nr {
  constructor() {
    c(this, 'discriminator', 2);
    c(this, 'kind', 'UpdateBlockNewOrders');
  }
  toJSON() {
    return { kind: 'UpdateBlockNewOrders' };
  }
  toEncodable() {
    return { UpdateBlockNewOrders: {} };
  }
}
c(Nr, 'discriminator', 2), c(Nr, 'kind', 'UpdateBlockNewOrders');
ve.UpdateBlockNewOrders = Nr;
class Cr {
  constructor() {
    c(this, 'discriminator', 3);
    c(this, 'kind', 'UpdateBlockOrderTaking');
  }
  toJSON() {
    return { kind: 'UpdateBlockOrderTaking' };
  }
  toEncodable() {
    return { UpdateBlockOrderTaking: {} };
  }
}
c(Cr, 'discriminator', 3), c(Cr, 'kind', 'UpdateBlockOrderTaking');
ve.UpdateBlockOrderTaking = Cr;
class Sr {
  constructor() {
    c(this, 'discriminator', 4);
    c(this, 'kind', 'UpdateHostFeeBps');
  }
  toJSON() {
    return { kind: 'UpdateHostFeeBps' };
  }
  toEncodable() {
    return { UpdateHostFeeBps: {} };
  }
}
c(Sr, 'discriminator', 4), c(Sr, 'kind', 'UpdateHostFeeBps');
ve.UpdateHostFeeBps = Sr;
class vr {
  constructor() {
    c(this, 'discriminator', 5);
    c(this, 'kind', 'UpdateAdminAuthorityCached');
  }
  toJSON() {
    return { kind: 'UpdateAdminAuthorityCached' };
  }
  toEncodable() {
    return { UpdateAdminAuthorityCached: {} };
  }
}
c(vr, 'discriminator', 5), c(vr, 'kind', 'UpdateAdminAuthorityCached');
ve.UpdateAdminAuthorityCached = vr;
class Pr {
  constructor() {
    c(this, 'discriminator', 6);
    c(this, 'kind', 'UpdateOrderTakingPermissionless');
  }
  toJSON() {
    return { kind: 'UpdateOrderTakingPermissionless' };
  }
  toEncodable() {
    return { UpdateOrderTakingPermissionless: {} };
  }
}
c(Pr, 'discriminator', 6), c(Pr, 'kind', 'UpdateOrderTakingPermissionless');
ve.UpdateOrderTakingPermissionless = Pr;
class Mr {
  constructor() {
    c(this, 'discriminator', 7);
    c(this, 'kind', 'UpdateOrderCloseDelaySeconds');
  }
  toJSON() {
    return { kind: 'UpdateOrderCloseDelaySeconds' };
  }
  toEncodable() {
    return { UpdateOrderCloseDelaySeconds: {} };
  }
}
c(Mr, 'discriminator', 7), c(Mr, 'kind', 'UpdateOrderCloseDelaySeconds');
ve.UpdateOrderCloseDelaySeconds = Mr;
class kr {
  constructor() {
    c(this, 'discriminator', 8);
    c(this, 'kind', 'UpdateTxnFeeCost');
  }
  toJSON() {
    return { kind: 'UpdateTxnFeeCost' };
  }
  toEncodable() {
    return { UpdateTxnFeeCost: {} };
  }
}
c(kr, 'discriminator', 8), c(kr, 'kind', 'UpdateTxnFeeCost');
ve.UpdateTxnFeeCost = kr;
class Dr {
  constructor() {
    c(this, 'discriminator', 9);
    c(this, 'kind', 'UpdateAtaCreationCost');
  }
  toJSON() {
    return { kind: 'UpdateAtaCreationCost' };
  }
  toEncodable() {
    return { UpdateAtaCreationCost: {} };
  }
}
c(Dr, 'discriminator', 9), c(Dr, 'kind', 'UpdateAtaCreationCost');
ve.UpdateAtaCreationCost = Dr;
function Ey(t) {
  if (typeof t != 'object') throw new Error('Invalid enum object');
  if ('UpdateEmergencyMode' in t) return new Ir();
  if ('UpdateFlashTakeOrderBlocked' in t) return new br();
  if ('UpdateBlockNewOrders' in t) return new Nr();
  if ('UpdateBlockOrderTaking' in t) return new Cr();
  if ('UpdateHostFeeBps' in t) return new Sr();
  if ('UpdateAdminAuthorityCached' in t) return new vr();
  if ('UpdateOrderTakingPermissionless' in t) return new Pr();
  if ('UpdateOrderCloseDelaySeconds' in t) return new Mr();
  if ('UpdateTxnFeeCost' in t) return new kr();
  if ('UpdateAtaCreationCost' in t) return new Dr();
  throw new Error('Invalid enum object');
}
function wy(t) {
  switch (t.kind) {
    case 'UpdateEmergencyMode':
      return new Ir();
    case 'UpdateFlashTakeOrderBlocked':
      return new br();
    case 'UpdateBlockNewOrders':
      return new Nr();
    case 'UpdateBlockOrderTaking':
      return new Cr();
    case 'UpdateHostFeeBps':
      return new Sr();
    case 'UpdateAdminAuthorityCached':
      return new vr();
    case 'UpdateOrderTakingPermissionless':
      return new Pr();
    case 'UpdateOrderCloseDelaySeconds':
      return new Mr();
    case 'UpdateTxnFeeCost':
      return new kr();
    case 'UpdateAtaCreationCost':
      return new Dr();
  }
}
function Iy(t) {
  const e = Tt.rustEnum([
    Tt.struct([], 'UpdateEmergencyMode'),
    Tt.struct([], 'UpdateFlashTakeOrderBlocked'),
    Tt.struct([], 'UpdateBlockNewOrders'),
    Tt.struct([], 'UpdateBlockOrderTaking'),
    Tt.struct([], 'UpdateHostFeeBps'),
    Tt.struct([], 'UpdateAdminAuthorityCached'),
    Tt.struct([], 'UpdateOrderTakingPermissionless'),
    Tt.struct([], 'UpdateOrderCloseDelaySeconds'),
    Tt.struct([], 'UpdateTxnFeeCost'),
    Tt.struct([], 'UpdateAtaCreationCost'),
  ]);
  return t !== void 0 ? e.replicate(t) : e;
}
var rt = {},
  by =
    (T && T.__createBinding) ||
    (Object.create
      ? function (t, e, n, r) {
          r === void 0 && (r = n);
          var o = Object.getOwnPropertyDescriptor(e, n);
          (!o || ('get' in o ? !e.__esModule : o.writable || o.configurable)) &&
            (o = {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            }),
            Object.defineProperty(t, r, o);
        }
      : function (t, e, n, r) {
          r === void 0 && (r = n), (t[r] = e[n]);
        }),
  Ny =
    (T && T.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  Cy =
    (T && T.__importStar) ||
    (function () {
      var t = function (e) {
        return (
          (t =
            Object.getOwnPropertyNames ||
            function (n) {
              var r = [];
              for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (r[r.length] = o);
              return r;
            }),
          t(e)
        );
      };
      return function (e) {
        if (e && e.__esModule) return e;
        var n = {};
        if (e != null)
          for (var r = t(e), o = 0; o < r.length; o++) r[o] !== 'default' && by(n, e, r[o]);
        return Ny(n, e), n;
      };
    })(),
  Sy =
    (T && T.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(rt, '__esModule', { value: !0 });
rt.Pubkey = rt.U64 = rt.U16 = rt.Bool = void 0;
rt.fromDecoded = My;
rt.fromJSON = ky;
rt.layout = Dy;
const vy = me,
  Py = Sy(Ye),
  vt = Cy(ot);
class Br {
  constructor(e) {
    c(this, 'discriminator', 0);
    c(this, 'kind', 'Bool');
    c(this, 'value');
    this.value = [e[0]];
  }
  toJSON() {
    return { kind: 'Bool', value: [this.value[0]] };
  }
  toEncodable() {
    return { Bool: { _0: this.value[0] } };
  }
}
c(Br, 'discriminator', 0), c(Br, 'kind', 'Bool');
rt.Bool = Br;
class xr {
  constructor(e) {
    c(this, 'discriminator', 1);
    c(this, 'kind', 'U16');
    c(this, 'value');
    this.value = [e[0]];
  }
  toJSON() {
    return { kind: 'U16', value: [this.value[0]] };
  }
  toEncodable() {
    return { U16: { _0: this.value[0] } };
  }
}
c(xr, 'discriminator', 1), c(xr, 'kind', 'U16');
rt.U16 = xr;
class Lr {
  constructor(e) {
    c(this, 'discriminator', 2);
    c(this, 'kind', 'U64');
    c(this, 'value');
    this.value = [e[0]];
  }
  toJSON() {
    return { kind: 'U64', value: [this.value[0].toString()] };
  }
  toEncodable() {
    return { U64: { _0: this.value[0] } };
  }
}
c(Lr, 'discriminator', 2), c(Lr, 'kind', 'U64');
rt.U64 = Lr;
class Ur {
  constructor(e) {
    c(this, 'discriminator', 3);
    c(this, 'kind', 'Pubkey');
    c(this, 'value');
    this.value = [e[0]];
  }
  toJSON() {
    return { kind: 'Pubkey', value: [this.value[0].toString()] };
  }
  toEncodable() {
    return { Pubkey: { _0: this.value[0] } };
  }
}
c(Ur, 'discriminator', 3), c(Ur, 'kind', 'Pubkey');
rt.Pubkey = Ur;
function My(t) {
  if (typeof t != 'object') throw new Error('Invalid enum object');
  if ('Bool' in t) {
    const e = t.Bool;
    return new Br([e._0]);
  }
  if ('U16' in t) {
    const e = t.U16;
    return new xr([e._0]);
  }
  if ('U64' in t) {
    const e = t.U64;
    return new Lr([e._0]);
  }
  if ('Pubkey' in t) {
    const e = t.Pubkey;
    return new Ur([e._0]);
  }
  throw new Error('Invalid enum object');
}
function ky(t) {
  switch (t.kind) {
    case 'Bool':
      return new Br([t.value[0]]);
    case 'U16':
      return new xr([t.value[0]]);
    case 'U64':
      return new Lr([new Py.default(t.value[0])]);
    case 'Pubkey':
      return new Ur([new vy.PublicKey(t.value[0])]);
  }
}
function Dy(t) {
  const e = vt.rustEnum([
    vt.struct([vt.bool('_0')], 'Bool'),
    vt.struct([vt.u16('_0')], 'U16'),
    vt.struct([vt.u64('_0')], 'U64'),
    vt.struct([vt.publicKey('_0')], 'Pubkey'),
  ]);
  return t !== void 0 ? e.replicate(t) : e;
}
var By =
    (T && T.__createBinding) ||
    (Object.create
      ? function (t, e, n, r) {
          r === void 0 && (r = n);
          var o = Object.getOwnPropertyDescriptor(e, n);
          (!o || ('get' in o ? !e.__esModule : o.writable || o.configurable)) &&
            (o = {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            }),
            Object.defineProperty(t, r, o);
        }
      : function (t, e, n, r) {
          r === void 0 && (r = n), (t[r] = e[n]);
        }),
  xy =
    (T && T.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  io =
    (T && T.__importStar) ||
    (function () {
      var t = function (e) {
        return (
          (t =
            Object.getOwnPropertyNames ||
            function (n) {
              var r = [];
              for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (r[r.length] = o);
              return r;
            }),
          t(e)
        );
      };
      return function (e) {
        if (e && e.__esModule) return e;
        var n = {};
        if (e != null)
          for (var r = t(e), o = 0; o < r.length; o++) r[o] !== 'default' && By(n, e, r[o]);
        return xy(n, e), n;
      };
    })();
Object.defineProperty(pt, '__esModule', { value: !0 });
pt.UpdateGlobalConfigValue = pt.UpdateGlobalConfigMode = pt.OrderType = pt.OrderStatus = void 0;
const Ly = io(Et);
pt.OrderStatus = Ly;
const Uy = io(Nn);
pt.OrderType = Uy;
const $y = io(ve);
pt.UpdateGlobalConfigMode = $y;
const jy = io(rt);
pt.UpdateGlobalConfigValue = jy;
var ll;
function mp() {
  if (ll) return dt;
  ll = 1;
  var t =
      (T && T.__createBinding) ||
      (Object.create
        ? function (w, x, G, F) {
            F === void 0 && (F = G);
            var Q = Object.getOwnPropertyDescriptor(x, G);
            (!Q || ('get' in Q ? !x.__esModule : Q.writable || Q.configurable)) &&
              (Q = {
                enumerable: !0,
                get: function () {
                  return x[G];
                },
              }),
              Object.defineProperty(w, F, Q);
          }
        : function (w, x, G, F) {
            F === void 0 && (F = G), (w[F] = x[G]);
          }),
    e =
      (T && T.__setModuleDefault) ||
      (Object.create
        ? function (w, x) {
            Object.defineProperty(w, 'default', { enumerable: !0, value: x });
          }
        : function (w, x) {
            w.default = x;
          }),
    n =
      (T && T.__importStar) ||
      (function () {
        var w = function (x) {
          return (
            (w =
              Object.getOwnPropertyNames ||
              function (G) {
                var F = [];
                for (var Q in G) Object.prototype.hasOwnProperty.call(G, Q) && (F[F.length] = Q);
                return F;
              }),
            w(x)
          );
        };
        return function (x) {
          if (x && x.__esModule) return x;
          var G = {};
          if (x != null)
            for (var F = w(x), Q = 0; Q < F.length; Q++) F[Q] !== 'default' && t(G, x, F[Q]);
          return e(G, x), G;
        };
      })();
  Object.defineProperty(dt, '__esModule', { value: !0 }),
    (dt.initializeGlobalConfig = s),
    (dt.initializeVault = _),
    (dt.createOrder = g),
    (dt.takeOrder = m),
    (dt.flashTakeOrder = h),
    (dt.closeOrderAndClaimTip = A),
    (dt.withdrawHostTipIx = R),
    (dt.updateGlobalConfigIx = b),
    (dt.updateGlobalConfigAdminIx = N);
  const r = n(Di),
    o = n(Fn),
    i = me,
    u = Bi(),
    d = Fn,
    f = pt;
  function s(w, x, G, F) {
    let Q = { adminAuthority: w, pdaAuthority: G, globalConfig: x };
    return r.initializeGlobalConfig(Q, F);
  }
  function _(w, x, G, F, Q) {
    let z = (0, u.getTokenVaultPDA)(F, x, G),
      I = (0, u.getPdaAuthority)(F, x),
      y = {
        payer: w,
        globalConfig: x,
        pdaAuthority: I,
        mint: G,
        vault: z,
        tokenProgram: Q,
        systemProgram: o.web3.SystemProgram.programId,
      };
    return r.initializeVault(y, F);
  }
  function g(w, x, G, F, Q, z, I) {
    let y = (0, u.getTokenVaultPDA)(Q, x, F.quoteTokenMint),
      P = (0, u.getTokenVaultPDA)(Q, x, F.baseTokenMint),
      k = (0, u.getPdaAuthority)(Q, x),
      V = {
        maker: w,
        globalConfig: x,
        pdaAuthority: k,
        order: G,
        inputMint: F.side === 'bid' ? F.baseTokenMint : F.quoteTokenMint,
        outputMint: F.side === 'bid' ? F.quoteTokenMint : F.baseTokenMint,
        makerAta:
          F.side === 'bid'
            ? (0, u.getAssociatedTokenAddress)(w, F.baseTokenMint, z)
            : (0, u.getAssociatedTokenAddress)(w, F.quoteTokenMint, I),
        inputVault: F.side === 'bid' ? P : y,
        inputTokenProgram: F.side === 'bid' ? z : I,
        outputTokenProgram: F.side === 'bid' ? I : z,
        eventAuthority: (0, u.getEventAuthorityPDA)(Q),
        program: Q,
        systemProgram: i.SystemProgram.programId,
      },
      C = {
        inputAmount: new d.BN(F.side === 'bid' ? F.baseTokenAmount : F.quoteTokenAmount),
        outputAmount: new d.BN(F.side === 'bid' ? F.quoteTokenAmount : F.baseTokenAmount),
        orderType: F.side === 'bid' ? 0 : 1,
      };
    return r.createOrder(C, V, Q);
  }
  function m(w) {
    let x = (0, u.getPdaAuthority)(w.programId, w.globalConfig),
      G = (0, u.getTokenVaultPDA)(w.programId, w.globalConfig, w.inputMint),
      F = {
        taker: w.taker,
        maker: w.maker,
        globalConfig: w.globalConfig,
        pdaAuthority: x,
        order: w.order,
        inputMint: w.inputMint,
        outputMint: w.outputMint,
        inputVault: G,
        expressRelay: w.expressRelayProgramId,
        expressRelayMetadata: (0, u.getExpressRelayMetadataPDA)(w.expressRelayProgramId),
        permission: w.permissionless ? w.programId : w.order,
        configRouter: (0, u.getExpressRelayConfigRouterPDA)(w.expressRelayProgramId, x),
        sysvarInstructions: o.web3.SYSVAR_INSTRUCTIONS_PUBKEY,
        takerInputAta: w.takerInputAta,
        intermediaryOutputTokenAccount: w.intermediaryOutputTokenAccount,
        takerOutputAta: w.takerOutputAta,
        makerOutputAta: w.makerOutputAta,
        inputTokenProgram: w.inputTokenProgram,
        outputTokenProgram: w.outputTokenProgram,
        systemProgram: i.SystemProgram.programId,
        rent: o.web3.SYSVAR_RENT_PUBKEY,
        eventAuthority: (0, u.getEventAuthorityPDA)(w.programId),
        program: w.programId,
      },
      Q = {
        inputAmount: w.inputAmountLamports,
        minOutputAmount: w.minOutputAmountLamports,
        tipAmountPermissionlessTaking: w.permissionlessTipLamports,
      };
    return r.takeOrder(Q, F, w.programId);
  }
  function h(w) {
    var k, V;
    let x = (0, u.getPdaAuthority)(w.programId, w.globalConfig),
      G = (0, u.getTokenVaultPDA)(w.programId, w.globalConfig, w.inputMint),
      F = {
        taker: w.taker,
        maker: w.maker,
        globalConfig: w.globalConfig,
        pdaAuthority: x,
        order: w.order,
        inputMint: w.inputMint,
        outputMint: w.outputMint,
        inputVault: G,
        expressRelay: w.expressRelayProgramId,
        expressRelayMetadata: (0, u.getExpressRelayMetadataPDA)(w.expressRelayProgramId),
        permission: w.permissionless ? w.programId : w.order,
        configRouter: (0, u.getExpressRelayConfigRouterPDA)(w.expressRelayProgramId, x),
        sysvarInstructions: o.web3.SYSVAR_INSTRUCTIONS_PUBKEY,
        takerInputAta: w.takerInputAta,
        takerOutputAta: w.takerOutputAta,
        intermediaryOutputTokenAccount: w.intermediaryOutputTokenAccount,
        makerOutputAta: w.makerOutputAta,
        inputTokenProgram: w.inputTokenProgram,
        outputTokenProgram: w.outputTokenProgram,
        systemProgram: i.SystemProgram.programId,
        rent: o.web3.SYSVAR_RENT_PUBKEY,
        eventAuthority: (0, u.getEventAuthorityPDA)(w.programId),
        program: w.programId,
      },
      Q = {
        inputAmount: new d.BN(w.inputAmountLamports),
        minOutputAmount: new d.BN(w.minOutputAmountLamports),
        tipAmountPermissionlessTaking: (k = w.permissionlessTipLamports) != null ? k : new d.BN(0),
      },
      z = r.flashTakeOrderStart(Q, F, w.programId),
      I = {
        taker: w.taker,
        maker: w.maker,
        globalConfig: w.globalConfig,
        pdaAuthority: x,
        order: w.order,
        inputMint: w.inputMint,
        outputMint: w.outputMint,
        inputVault: G,
        expressRelay: w.expressRelayProgramId,
        expressRelayMetadata: (0, u.getExpressRelayMetadataPDA)(w.expressRelayProgramId),
        permission: w.permissionless ? w.programId : w.order,
        configRouter: (0, u.getExpressRelayConfigRouterPDA)(w.expressRelayProgramId, x),
        sysvarInstructions: o.web3.SYSVAR_INSTRUCTIONS_PUBKEY,
        takerInputAta: w.takerInputAta,
        takerOutputAta: w.takerOutputAta,
        intermediaryOutputTokenAccount: w.intermediaryOutputTokenAccount,
        makerOutputAta: w.makerOutputAta,
        inputTokenProgram: w.inputTokenProgram,
        outputTokenProgram: w.outputTokenProgram,
        systemProgram: i.SystemProgram.programId,
        rent: o.web3.SYSVAR_RENT_PUBKEY,
        eventAuthority: (0, u.getEventAuthorityPDA)(w.programId),
        program: w.programId,
      },
      y = {
        inputAmount: new d.BN(w.inputAmountLamports),
        minOutputAmount: new d.BN(w.minOutputAmountLamports),
        tipAmountPermissionlessTaking: (V = w.permissionlessTipLamports) != null ? V : new d.BN(0),
      },
      P = r.flashTakeOrderEnd(y, I, w.programId);
    return { startIx: z, endIx: P };
  }
  function A(w) {
    let x = (0, u.getPdaAuthority)(w.programId, w.globalConfig),
      G = (0, u.getTokenVaultPDA)(w.programId, w.globalConfig, w.inputMint),
      F = {
        maker: w.maker,
        order: w.order,
        globalConfig: w.globalConfig,
        pdaAuthority: x,
        inputMint: w.inputMint,
        outputMint: w.outputMint,
        makerInputAta: w.makerInputAta,
        inputVault: G,
        inputTokenProgram: w.inputTokenProgram,
        systemProgram: i.SystemProgram.programId,
        eventAuthority: (0, u.getEventAuthorityPDA)(w.programId),
        program: w.programId,
      };
    return r.closeOrderAndClaimTip(F, w.programId);
  }
  function R(w) {
    let x = (0, u.getPdaAuthority)(w.programId, w.globalConfig),
      G = {
        adminAuthority: w.admin,
        globalConfig: w.globalConfig,
        pdaAuthority: x,
        systemProgram: i.SystemProgram.programId,
      };
    return r.withdrawHostTip(G, w.programId);
  }
  function b(w, x, G, F, Q) {
    let z = { adminAuthority: w, globalConfig: x },
      I = { mode: G.discriminator, value: v(G, F) };
    return r.updateGlobalConfig(I, z, Q);
  }
  function N(w, x, G) {
    let F = { adminAuthorityCached: x.adminAuthorityCached, globalConfig: w };
    return r.updateGlobalConfigAdmin(F, G);
  }
  function v(w, x) {
    const G = ne.Buffer.alloc(128);
    let F, Q;
    switch (w.discriminator) {
      case f.UpdateGlobalConfigMode.UpdateEmergencyMode.discriminator:
      case f.UpdateGlobalConfigMode.UpdateFlashTakeOrderBlocked.discriminator:
      case f.UpdateGlobalConfigMode.UpdateBlockNewOrders.discriminator:
      case f.UpdateGlobalConfigMode.UpdateBlockOrderTaking.discriminator:
      case f.UpdateGlobalConfigMode.UpdateOrderTakingPermissionless.discriminator:
        (F = x), G.writeUIntLE(F, 0, 1);
        break;
      case f.UpdateGlobalConfigMode.UpdateHostFeeBps.discriminator:
        (F = x), G.writeUInt16LE(F, 0);
        break;
      case f.UpdateGlobalConfigMode.UpdateOrderCloseDelaySeconds.discriminator:
      case f.UpdateGlobalConfigMode.UpdateAtaCreationCost.discriminator:
      case f.UpdateGlobalConfigMode.UpdateTxnFeeCost.discriminator:
      case f.UpdateGlobalConfigMode.UpdateOrderCloseDelaySeconds.discriminator:
        (F = x), G.writeBigUInt64LE(BigInt(x.toString()), 0);
        break;
      case f.UpdateGlobalConfigMode.UpdateAdminAuthorityCached.discriminator:
        (Q = x.toBuffer()), Q.copy(G, 0);
        break;
    }
    const z = new Uint8Array(G);
    return Array.from(z);
  }
  return dt;
}
var hn = {},
  dl;
function Hy() {
  if (dl) return hn;
  dl = 1;
  var t =
      (T && T.__createBinding) ||
      (Object.create
        ? function (R, b, N, v) {
            v === void 0 && (v = N);
            var w = Object.getOwnPropertyDescriptor(b, N);
            (!w || ('get' in w ? !b.__esModule : w.writable || w.configurable)) &&
              (w = {
                enumerable: !0,
                get: function () {
                  return b[N];
                },
              }),
              Object.defineProperty(R, v, w);
          }
        : function (R, b, N, v) {
            v === void 0 && (v = N), (R[v] = b[N]);
          }),
    e =
      (T && T.__setModuleDefault) ||
      (Object.create
        ? function (R, b) {
            Object.defineProperty(R, 'default', { enumerable: !0, value: b });
          }
        : function (R, b) {
            R.default = b;
          }),
    n =
      (T && T.__importStar) ||
      (function () {
        var R = function (b) {
          return (
            (R =
              Object.getOwnPropertyNames ||
              function (N) {
                var v = [];
                for (var w in N) Object.prototype.hasOwnProperty.call(N, w) && (v[v.length] = w);
                return v;
              }),
            R(b)
          );
        };
        return function (b) {
          if (b && b.__esModule) return b;
          var N = {};
          if (b != null)
            for (var v = R(b), w = 0; w < v.length; w++) v[w] !== 'default' && t(N, b, v[w]);
          return e(N, b), N;
        };
      })(),
    r =
      (T && T.__importDefault) ||
      function (R) {
        return R && R.__esModule ? R : { default: R };
      };
  Object.defineProperty(hn, '__esModule', { value: !0 }),
    (hn.setUpProgram = g),
    (hn.createGlobalAccounts = m),
    (hn.setGlobalAccounts = h),
    (hn.createUser = A);
  const o = me,
    i = n(Fn),
    u = Bi(),
    d = Bi(),
    f = r(jr),
    s = Gu(),
    _ = Lt;
  function g(R) {
    if (!R.clusterOverride) throw new Error('Cluster is required');
    const b = R.clusterOverride,
      N = {
        commitment: i.AnchorProvider.defaultOptions().commitment,
        confirmTransactionInitialTimeout: 22e4,
      },
      v = new o.Connection((0, u.endpointFromCluster)(b), N),
      w = R.adminFilePath ? (0, d.parseKeypairFile)(R.adminFilePath) : o.Keypair.generate(),
      x = new i.Wallet(w),
      G = new i.AnchorProvider(v, x, i.AnchorProvider.defaultOptions()),
      F = w;
    i.setProvider(G);
    const Q = R.programOverride || (0, u.getLimoProgramId)(b),
      z = new i.Program(d.LimoIdl, Q);
    return { admin: F, provider: G, conn: v, program: z, cluster: b };
  }
  async function m(R, b = R.admin, N = ['SOL', 'USDC', 'KMNO']) {
    const v = o.Keypair.generate(),
      w = new Map(),
      x = new Map();
    for (const z of N)
      if (z === 'SOL') {
        w.set(z, new u.TokenInfo(z, s.WRAPPED_SOL_MINT, 9));
        let I = (0, u.getTokenVaultPDA)(R.program.programId, v.publicKey, s.WRAPPED_SOL_MINT);
        x.set(z, I), (0, u.solAirdrop)(R.provider, b.publicKey, new f.default(100));
      } else {
        const I = await (0, u.createMint)(R.provider, R.provider.wallet.publicKey, 6);
        let y = (0, u.getTokenVaultPDA)(R.program.programId, v.publicKey, I);
        w.set(z, new u.TokenInfo(z, I, 6)), x.set(z, y);
        const P = await (0, u.setupAta)(R.provider, I, b);
        await (0, u.mintTo)(
          R.provider,
          I,
          P,
          (0, u.amountToLamportsDecimal)(new f.default(1e5), 6).toNumber(),
          6
        );
      }
    let G = (0, u.getPdaAuthority)(R.program.programId, v.publicKey);
    const F = new s.LimoClient(R.conn, void 0),
      Q = { globalAdmin: b, globalConfig: v, pdaAuthority: G, tokens: w, vaults: x, limoClient: F };
    return (0, u.solAirdrop)(R.provider, G, new f.default(0.1)), Q;
  }
  async function h(R, b = R.admin, N = !1) {
    const v = await m(R, b),
      w = v.limoClient;
    if (
      (await w.createGlobalConfig(v.globalAdmin, v.globalConfig),
      w.setGlobalConfig(v.globalConfig.publicKey),
      !N)
    )
      for (const [, x] of v.tokens.entries()) await w.initializeVault(v.globalAdmin, x.mint);
    return v;
  }
  async function A(R, b, N, v) {
    v || (v = new i.web3.Keypair());
    const w = new Map();
    for (const { token: G, amount: F } of N) {
      const Q = b.tokens.get(G);
      if (
        (w.set(G, (0, u.getAssociatedTokenAddress)(v.publicKey, Q.mint, _.TOKEN_PROGRAM_ID)),
        !F.isZero())
      )
        if (G === 'SOL')
          await (0, u.solAirdrop)(R.provider, v.publicKey, F), await (0, u.sleep)(1e3);
        else {
          const z = await (0, u.setupAta)(R.provider, Q.mint, v);
          await (0, u.mintTo)(
            R.provider,
            Q.mint,
            z,
            (0, u.amountToLamportsDecimal)(F, Q.mintDecimals).toNumber(),
            Q.mintDecimals
          ),
            await (0, u.sleep)(1e3);
        }
    }
    return { owner: v, tokenAtas: w };
  }
  return hn;
}
var oo = {};
Object.defineProperty(oo, '__esModule', { value: !0 });
oo.getReadOnlyWallet = void 0;
const Gy = me,
  Fy = () => {
    const t = Gy.Keypair.generate();
    return {
      payer: t,
      publicKey: t.publicKey,
      signAllTransactions: async (e) => e,
      signTransaction: async (e) => e,
    };
  };
oo.getReadOnlyWallet = Fy;
var hp = {};
Object.defineProperty(hp, '__esModule', { value: !0 });
var so = {};
Object.defineProperty(so, '__esModule', { value: !0 });
so.FilledOrderQueue = void 0;
class Ky {
  constructor(e = 10, n = []) {
    c(this, 'queue');
    c(this, 'maxSize');
    (this.queue = []), (this.maxSize = e);
  }
  push(e) {
    const n = this.queue.findIndex((r) => r.address.equals(e.address));
    n !== -1 && this.queue.splice(n, 1),
      this.queue.push(e),
      this.queue.length > this.maxSize && this.queue.shift();
  }
  pop() {
    return this.queue.shift();
  }
  getOrders() {
    return [...this.queue];
  }
}
so.FilledOrderQueue = Ky;
var gp = {};
(function (t) {
  var s, _;
  var e =
    (T && T.__importDefault) ||
    function (m) {
      return m && m.__esModule ? m : { default: m };
    };
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.HashablePublicKey =
      t.PubkeyHashMap =
      t.PublicKeyMap =
      t.PublicKeySet =
      t.NULL_PUBKEY =
        void 0),
    (t.isNotNullPubkey = o);
  const n = me,
    r = e(Ye);
  t.NULL_PUBKEY = new n.PublicKey('nu11111111111111111111111111111111111111111');
  function o(m) {
    return m && !m.equals(t.NULL_PUBKEY) && !m.equals(n.PublicKey.default);
  }
  class i {
    constructor(h) {
      c(this, 'items', []);
      h.forEach((A) => this.add(A));
    }
    add(h) {
      this.contains(h) || this.items.push(h);
    }
    contains(h) {
      return this.items.some((A) => this.equals(A, h));
    }
    equals(h, A) {
      return h.equals(A);
    }
    isEmpty() {
      return this.items.length === 0;
    }
    toArray() {
      return this.items.slice();
    }
  }
  t.PublicKeySet = i;
  class u {
    constructor() {
      c(this, 'record', []);
    }
    set(h, A) {
      const R = this.findIndex(h);
      R !== -1 ? (this.record[R].value = A) : this.record.push({ key: h, value: A });
    }
    get(h) {
      const A = this.findIndex(h);
      return A !== -1 ? this.record[A].value : void 0;
    }
    has(h) {
      return this.findIndex(h) !== -1;
    }
    delete(h) {
      const A = this.findIndex(h);
      A !== -1 && this.record.splice(A, 1);
    }
    findIndex(h) {
      return this.record.findIndex((A) => A.key.equals(h));
    }
    clear() {
      this.record = [];
    }
    forEach(h) {
      this.record.forEach((A) => {
        h(A.value, A.key);
      });
    }
    keys() {
      return this.record.map((h) => h.key);
    }
    values() {
      return this.record.map((h) => h.value);
    }
    entries() {
      return this.record.map((h) => [h.key, h.value]);
    }
    isEmpty() {
      return this.record.length === 0;
    }
  }
  t.PublicKeyMap = u;
  class d {
    constructor(h) {
      c(this, 'buckets');
      c(this, 'size');
      c(this, s, 'PubkeyHashMap');
      if (((this.buckets = new Map()), (this.size = 0), h)) for (const [A, R] of h) this.set(A, R);
    }
    *[((_ = Symbol.iterator), (s = Symbol.toStringTag), _)]() {
      for (const [, h] of this.buckets) for (const { key: A, value: R } of h) yield [A, R];
    }
    set(h, A) {
      const R = new f(h).hashCode(),
        b = this.buckets.get(R);
      if (!b) this.buckets.set(R, [{ key: h, value: A }]), this.size++;
      else {
        const N = b.find((v) => v.key.equals(h));
        N ? (N.value = A) : (b.push({ key: h, value: A }), this.size++);
      }
      return this;
    }
    get(h) {
      const A = new f(h).hashCode(),
        R = this.buckets.get(A);
      if (!R) return;
      const b = R.find((N) => N.key.equals(h));
      return b ? b.value : void 0;
    }
    has(h) {
      const A = new f(h).hashCode(),
        R = this.buckets.get(A);
      return R ? !!R.find((N) => N.key.equals(h)) : !1;
    }
    delete(h) {
      const A = new f(h).hashCode(),
        R = this.buckets.get(A);
      if (!R) return !1;
      const b = R.findIndex((N) => N.key.equals(h));
      return b === -1
        ? !1
        : (R.splice(b, 1), R.length === 0 && this.buckets.delete(A), this.size--, !0);
    }
    clear() {
      (this.buckets = new Map()), (this.size = 0);
    }
    isEmpty() {
      return this.size === 0;
    }
    forEach(h, A) {
      this.buckets.forEach((R) => {
        R.forEach((b) => {
          h(b.value, b.key, this);
        }, A);
      }, A);
    }
    *keys() {
      for (const [h] of this) yield h;
    }
    *values() {
      for (const [, h] of this) yield h;
    }
    entries() {
      return this[Symbol.iterator]();
    }
  }
  t.PubkeyHashMap = d;
  const g = class g extends n.PublicKey {
    constructor(h) {
      super(h);
    }
    hashCode() {
      let h = 13;
      return (h = h * 7 + this.getBN().clone().iuand(g.MASK).toNumber()), h;
    }
    getBN() {
      return this._bn;
    }
  };
  c(g, 'MASK', new r.default(1).shln(32).subn(1));
  let f = g;
  t.HashablePublicKey = f;
})(gp);
var fl;
function Ap() {
  return (
    fl ||
      ((fl = 1),
      (function (t) {
        var e =
            (T && T.__createBinding) ||
            (Object.create
              ? function (r, o, i, u) {
                  u === void 0 && (u = i);
                  var d = Object.getOwnPropertyDescriptor(o, i);
                  (!d || ('get' in d ? !o.__esModule : d.writable || d.configurable)) &&
                    (d = {
                      enumerable: !0,
                      get: function () {
                        return o[i];
                      },
                    }),
                    Object.defineProperty(r, u, d);
                }
              : function (r, o, i, u) {
                  u === void 0 && (u = i), (r[u] = o[i]);
                }),
          n =
            (T && T.__exportStar) ||
            function (r, o) {
              for (var i in r)
                i !== 'default' && !Object.prototype.hasOwnProperty.call(o, i) && e(o, r, i);
            };
        Object.defineProperty(t, '__esModule', { value: !0 }),
          n(mp(), t),
          n(Hy(), t),
          n(Bi(), t),
          n(oo, t),
          n(hp, t),
          n(so, t),
          n(gp, t);
      })(Yo)),
    Yo
  );
}
var pl;
function Gu() {
  return (
    pl ||
      ((pl = 1),
      (function (t) {
        var e = {},
          n =
            (T && T.__createBinding) ||
            (Object.create
              ? function (z, I, y, P) {
                  P === void 0 && (P = y);
                  var k = Object.getOwnPropertyDescriptor(I, y);
                  (!k || ('get' in k ? !I.__esModule : k.writable || k.configurable)) &&
                    (k = {
                      enumerable: !0,
                      get: function () {
                        return I[y];
                      },
                    }),
                    Object.defineProperty(z, P, k);
                }
              : function (z, I, y, P) {
                  P === void 0 && (P = y), (z[P] = I[y]);
                }),
          r =
            (T && T.__setModuleDefault) ||
            (Object.create
              ? function (z, I) {
                  Object.defineProperty(z, 'default', { enumerable: !0, value: I });
                }
              : function (z, I) {
                  z.default = I;
                }),
          o =
            (T && T.__importStar) ||
            (function () {
              var z = function (I) {
                return (
                  (z =
                    Object.getOwnPropertyNames ||
                    function (y) {
                      var P = [];
                      for (var k in y)
                        Object.prototype.hasOwnProperty.call(y, k) && (P[P.length] = k);
                      return P;
                    }),
                  z(I)
                );
              };
              return function (I) {
                if (I && I.__esModule) return I;
                var y = {};
                if (I != null)
                  for (var P = z(I), k = 0; k < P.length; k++) P[k] !== 'default' && n(y, I, P[k]);
                return r(y, I), y;
              };
            })(),
          i =
            (T && T.__importDefault) ||
            function (z) {
              return z && z.__esModule ? z : { default: z };
            };
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.LimoClient =
            t.MAX_CLOSE_ORDER_AND_CLAIM_TIP_ORDERS_IN_TX =
            t.ORDER_RENT_EXEMPTION_LAMPORTS =
            t.WRAPPED_SOL_MINT =
            t.limoId =
              void 0);
        const u = Fn,
          d = i(sp),
          f = i(Ye),
          s = me,
          _ = Ap(),
          g = o(mp()),
          m = me,
          h = er,
          A = i(jr),
          R = Yr,
          b = pt,
          N = Lt,
          v = Lt,
          w = i(Hr),
          x = Di,
          G = Di,
          F = o(Fn);
        (t.limoId = new s.PublicKey('LiMoM9rMhrdYrfzUCxQppvxCSG1FcrUK9G8uLq4A1GF')),
          (t.WRAPPED_SOL_MINT = new s.PublicKey('So11111111111111111111111111111111111111112')),
          (t.ORDER_RENT_EXEMPTION_LAMPORTS = 3841920),
          (t.MAX_CLOSE_ORDER_AND_CLAIM_TIP_ORDERS_IN_TX = 14);
        class Q {
          constructor(I, y, P) {
            c(this, '_connection');
            c(this, '_provider');
            c(this, '_limoProgram');
            c(this, 'programId');
            c(this, 'globalConfigState');
            c(this, '_globalConfig');
            (this._connection = I),
              (this._globalConfig = y != null ? y : s.PublicKey.default),
              (this._provider = new u.AnchorProvider(I, (0, _.getReadOnlyWallet)(), {
                commitment: I.commitment,
              })),
              (this.programId = t.limoId),
              (this._limoProgram = new u.Program(d.default, this.programId, this._provider)),
              (this.globalConfigState = P);
          }
          getConnection() {
            return this._connection;
          }
          getProgramID() {
            return this.programId;
          }
          getProgram() {
            return this._limoProgram;
          }
          setGlobalConfig(I) {
            this._globalConfig = I;
          }
          async refreshGlobalConfigState() {
            if (!this._globalConfig) throw new Error('Global Config not set');
            const I = await h.GlobalConfig.fetch(this._connection, this._globalConfig);
            if (!I) throw new Error('Global Config not found');
            return (this.globalConfigState = I), this.globalConfigState;
          }
          async getGlobalConfigState() {
            if (!this._globalConfig) throw new Error('Global Config not set');
            if (!this.globalConfigState) {
              const I = await h.GlobalConfig.fetch(this._connection, this._globalConfig);
              if (!I) throw new Error('Global Config not found');
              this.globalConfigState = I;
            }
            return this.globalConfigState;
          }
          getGlobalConfigStateSync() {
            if (!this._globalConfig) throw new Error('Global Config not set');
            if (!this.globalConfigState)
              throw new Error('Global Config state not fetched yet, use getGlobalConfigState');
            return this.globalConfigState;
          }
          async getOrderState(I) {
            const y = await R.Order.fetch(this._connection, I, this.programId);
            if (!y) throw new Error('Order not found');
            return y;
          }
          async getAllOrdersStateAndAddressWithFilters(I, y, P = !0) {
            return (
              P &&
                I.push({
                  memcmp: { bytes: y ? y.toBase58() : this._globalConfig.toBase58(), offset: 8 },
                }),
              I.push({ dataSize: R.Order.layout.span + 8 }),
              (await this._connection.getProgramAccounts(this.programId, { filters: I })).map(
                (V) => {
                  if (V.account === null) throw new Error('Invalid account');
                  if (!V.account.owner.equals(this.programId))
                    throw new Error("account doesn't belong to this program");
                  const C = R.Order.decode(V.account.data);
                  if (!C) throw Error('Could not parse obligation.');
                  return { state: C, address: V.pubkey };
                }
              )
            );
          }
          async getAllOrdersStateAndAddressForGlobalConfig(I) {
            return this.getAllOrdersStateAndAddressWithFilters([], I);
          }
          async getAllOrdersDisplayForGlobalConfig(I, y) {
            const P = await this.getAllOrdersStateAndAddressWithFilters([], y);
            return this.toOrdersDisplay(P, I);
          }
          async getAllOrdersStateAndAddressForMaker(I, y) {
            const P = [{ memcmp: { bytes: I.toBase58(), offset: 40 } }];
            return this.getAllOrdersStateAndAddressWithFilters(P, y);
          }
          async getAllOrdersDisplayForMaker(I, y, P) {
            const k = await this.getAllOrdersStateAndAddressForMaker(I, P),
              V = [];
            for (const M of k) V.push(M.state.inputMint), V.push(M.state.outputMint);
            let C = y != null ? y : await this.getMintDecimals(V);
            return this.toOrdersDisplay(k, C);
          }
          async getAllOrdersStateAndAddressForInputMint(I, y) {
            const P = [{ memcmp: { bytes: I.toBase58(), offset: 72 } }];
            return this.getAllOrdersStateAndAddressWithFilters(P, y);
          }
          async getAllOrdersDisplayForInputMint(I, y, P) {
            const k = await this.getAllOrdersStateAndAddressForInputMint(I, P);
            return this.toOrdersDisplay(k, y);
          }
          async getAllOrdersStateAndAddressForOutputMint(I, y) {
            const P = [{ memcmp: { bytes: I.toBase58(), offset: 136 } }];
            return this.getAllOrdersStateAndAddressWithFilters(P, y);
          }
          async getAllOrdersDisplayForOutputMint(I, y, P) {
            const k = await this.getAllOrdersStateAndAddressForOutputMint(I, P);
            return this.toOrdersDisplay(k, y);
          }
          async getAllOrdersDisplayForInputAndOutputMints(I, y, P, k) {
            const V = [
                { memcmp: { bytes: I.toBase58(), offset: 72 } },
                { memcmp: { bytes: y.toBase58(), offset: 136 } },
              ],
              C = await this.getAllOrdersStateAndAddressWithFilters(V, k);
            let M = new _.PubkeyHashMap();
            if (P) M = P;
            else {
              const W = await (0, _.getMintDecimals)(this._connection, I),
                Y = await (0, _.getMintDecimals)(this._connection, y);
              M.set(I, W), M.set(y, Y);
            }
            return this.toOrdersDisplay(C, M);
          }
          async getAllOrdersDisplayForMakerInputAndOutputMints(I, y, P, k, V) {
            const C = ne.Buffer.concat([
                new Uint8Array(I.toBuffer()),
                new Uint8Array(y.toBuffer()),
              ]),
              M = [
                { memcmp: { bytes: w.default.encode(C), offset: 40 } },
                { memcmp: { bytes: P.toBase58(), offset: 136 } },
              ],
              W = await this.getAllOrdersStateAndAddressWithFilters(M, V);
            let Y = new _.PubkeyHashMap();
            if (k) {
              const D = await (0, _.getMintDecimals)(this._connection, y),
                L = await (0, _.getMintDecimals)(this._connection, P);
              Y.set(y, D), Y.set(P, L);
            }
            return this.toOrdersDisplay(W, Y);
          }
          async getOrderDisplay(I) {
            const y = await R.Order.fetch(this._connection, I, this.programId);
            if (!y) throw new Error('Order not found');
            const P = await (0, _.getMintDecimals)(this._connection, y.inputMint),
              k = await (0, _.getMintDecimals)(this._connection, y.outputMint),
              V = new _.PubkeyHashMap();
            return (
              V.set(y.inputMint, P),
              V.set(y.outputMint, k),
              this.toOrdersDisplay([{ address: I, state: y }], V)[0]
            );
          }
          toOrdersDisplay(I, y) {
            const P = [];
            for (const k of I) {
              const V = y.get(k.state.inputMint);
              if (!V)
                throw new Error(
                  'Mint decimals not found for mint + ' + k.state.inputMint.toBase58()
                );
              const C = y.get(k.state.outputMint);
              if (!C)
                throw new Error(
                  'Mint decimals not found for mint + ' + k.state.outputMint.toBase58()
                );
              const M = new A.default(k.state.initialInputAmount.toString()).div(
                  new A.default(10).pow(V)
                ),
                W = new A.default(k.state.expectedOutputAmount.toString()).div(
                  new A.default(10).pow(C)
                ),
                Y = new A.default(k.state.remainingInputAmount.toString()).div(
                  new A.default(10).pow(V)
                ),
                D = new A.default(k.state.filledOutputAmount.toString()).div(
                  new A.default(10).pow(C)
                ),
                L = M.sub(Y).div(M),
                X = new A.default(k.state.tipAmount.toString()),
                oe = (0, _.lamportsToAmountDecimal)(X, 9);
              P.push({
                address: k.address,
                state: k.state,
                maker: k.state.maker,
                initialInputAmountDecimal: M,
                expectedOutputAmountDecimal: W,
                remainingInputAmountDecimal: Y,
                filledOutputAmountDecimal: D,
                numberOfFills: k.state.numberOfFills.toNumber(),
                orderFillPct: L,
                orderPriceInputToOutput: M.div(W),
                orderPriceOutputToInput: W.div(M),
                executionPriceInputToOutput: M.sub(Y).div(D),
                executionPriceOutputToInput: D.div(M.sub(Y)),
                orderTipLamports: X,
                orderTipDecimal: oe,
              });
            }
            return P;
          }
          async getOrdersDisplayForBaseAndQuote(I, y, P, k) {
            const V = await this.getAllOrdersDisplayForInputAndOutputMints(I, y, P, k),
              C = await this.getAllOrdersDisplayForInputAndOutputMints(y, I, P, k);
            return { bidOrders: V, askOrders: C };
          }
          async getOrdersDisplayForBaseAndQuoteAndMaker(I, y, P, k, V) {
            const C = await this.getAllOrdersDisplayForMakerInputAndOutputMints(I, y, P, k, V),
              M = await this.getAllOrdersDisplayForMakerInputAndOutputMints(I, P, y, k, V);
            return { bidOrders: C, askOrders: M };
          }
          async getLatestFilledOrders(I, y, P, k) {
            const { askOrders: V, bidOrders: C } = await this.getOrdersDisplayForBaseAndQuote(
                I,
                y,
                P,
                k
              ),
              M = [],
              W = [];
            for (const Y of V)
              Y.state.remainingInputAmount.toNumber() < Y.state.initialInputAmount.toNumber() &&
                M.push({
                  address: Y.address,
                  orderDisplay: Y,
                  quoteTokenMint: y,
                  baseTokenMint: I,
                  time: Y.state.lastUpdatedTimestamp.toNumber(),
                  price: Y.executionPriceOutputToInput,
                  size: Y.filledOutputAmountDecimal,
                  txid: 'N/A',
                  type: 'sell',
                });
            for (const Y of C)
              Y.state.remainingInputAmount.toNumber() < Y.state.initialInputAmount.toNumber() &&
                W.push({
                  address: Y.address,
                  orderDisplay: Y,
                  quoteTokenMint: y,
                  baseTokenMint: I,
                  time: Y.state.lastUpdatedTimestamp.toNumber(),
                  price: Y.executionPriceInputToOutput,
                  size: Y.filledOutputAmountDecimal,
                  txid: 'N/A',
                  type: 'buy',
                });
            return (
              W.sort((Y, D) => -(Y.time - D.time)),
              M.sort((Y, D) => -(Y.time - D.time)),
              { filledOrdersBuy: W, filledOrdersSell: M }
            );
          }
          listenToMakerOrders(I, y) {
            const P = [{ memcmp: { bytes: I.toBase58(), offset: 40 } }];
            return this.listenToOrdersChangeWithFilters(P, y);
          }
          listenToOrderChangeForBaseAndQuote(I, y, P, k) {
            const V = [
                { memcmp: { bytes: I.toBase58(), offset: 72 } },
                { memcmp: { bytes: y.toBase58(), offset: 136 } },
              ],
              C = [
                { memcmp: { bytes: y.toBase58(), offset: 72 } },
                { memcmp: { bytes: I.toBase58(), offset: 136 } },
              ],
              M = this.listenToOrdersChangeWithFilters(C, P),
              W = this.listenToOrdersChangeWithFilters(V, k);
            return { subscriptionIdSellOrders: M, subscriptionIdBuyOrders: W };
          }
          listenToOrderFillChangeForBaseAndQuote(I, y, P, k) {
            const V = [
                { memcmp: { bytes: I.toBase58(), offset: 72 } },
                { memcmp: { bytes: y.toBase58(), offset: 136 } },
              ],
              C = [
                { memcmp: { bytes: y.toBase58(), offset: 72 } },
                { memcmp: { bytes: I.toBase58(), offset: 136 } },
              ],
              M = (L, X) => {
                L.state.remainingInputAmount.toNumber() < L.state.initialInputAmount.toNumber() &&
                  P(L, X);
              },
              W = (L, X) => {
                L.state.remainingInputAmount.toNumber() < L.state.initialInputAmount.toNumber() &&
                  k(L, X);
              },
              Y = this.listenToOrdersChangeWithFilters(C, M),
              D = this.listenToOrdersChangeWithFilters(V, W);
            return { subscriptionIdSellOrders: Y, subscriptionIdBuyOrders: D };
          }
          listenToOrdersChangeWithFilters(I, y) {
            I.push({ memcmp: { bytes: this._globalConfig.toBase58(), offset: 8 } }),
              I.push({ dataSize: R.Order.layout.span + 8 });
            const P = async (V, C) => {
              if (V.accountInfo === null) throw new Error('Invalid account');
              if (!V.accountInfo.owner.equals(this.programId))
                throw new Error("account doesn't belong to this program");
              const M = R.Order.decode(V.accountInfo.data);
              if (!M) throw Error('Could not parse obligation.');
              y({ state: M, address: V.accountId }, C.slot);
            };
            return this._connection.onProgramAccountChange(this.programId, P, {
              commitment: 'confirmed',
              encoding: 'base64',
              filters: I,
            });
          }
          stopListeningToOrdersChange(I) {
            this._connection.removeProgramAccountChangeListener(I);
          }
          async createGlobalConfigIxs(I, y) {
            let P = [];
            const k = h.GlobalConfig.layout.getSpan() + 8;
            P.push(
              (0, _.createKeypairRentExemptIxSync)(
                I,
                y,
                k,
                await this._connection.getMinimumBalanceForRentExemption(k),
                this.programId
              )
            );
            const V = (0, _.getPdaAuthority)(this.programId, y.publicKey);
            return P.push(g.initializeGlobalConfig(I, y.publicKey, V, this.programId)), P;
          }
          async createGlobalConfig(I, y) {
            const P = await this.createGlobalConfigIxs(I.publicKey, y),
              k = await this.executeTransaction(P, I, [y]);
            return (
              e.DEBUG === 'true' && console.log('Initialize Global Config txn: ' + k.toString()), k
            );
          }
          async initializeVaultIx(I, y, P) {
            const k = P || (await this.getMintsProgramOwners([y]))[0];
            return (
              await this.getGlobalConfigState(),
              g.initializeVault(I, this._globalConfig, y, this.programId, k)
            );
          }
          async initializeVault(I, y, P = 'execute', k) {
            const V = await this.initializeVaultIx(I.publicKey, y, k),
              M =
                'Initialize Vault: ' +
                (0, _.getTokenVaultPDA)(this.programId, this._globalConfig, y).toString();
            return this.processTxn(I, [V], P, M, []);
          }
          async createOrderGenericIx(I, y, P, k, V, C, M, W, Y = !0, D) {
            let L;
            if (D === void 0)
              try {
                const _e = (0, _.getTokenVaultPDA)(this.programId, this._globalConfig, y);
                L = !(await (0, _.checkIfAccountExists)(this._connection, _e));
              } catch (_e) {
                L = !1;
              }
            else L = D;
            const X = m.Keypair.generate(),
              oe = {
                side: 'bid',
                quoteTokenMint: P,
                baseTokenMint: y,
                quoteTokenAmount: V,
                baseTokenAmount: k,
              },
              ae = [];
            L && ae.push(g.initializeVault(I, this._globalConfig, y, this.programId, C)),
              ae.push(
                (0, _.createKeypairRentExemptIxSync)(
                  I,
                  X,
                  R.Order.layout.getSpan() + 8,
                  t.ORDER_RENT_EXEMPTION_LAMPORTS,
                  this.programId
                )
              );
            const ce = C,
              pe = M;
            let he = [];
            if (y.equals(t.WRAPPED_SOL_MINT) && Y) {
              const {
                createIxs: _e,
                fillIxs: Re,
                closeIx: Te,
              } = this.getInitIfNeededWSOLCreateAndCloseIxs(I, I, k);
              ae.push(..._e, ...Re), (he = Te);
            }
            return (
              ae.push(
                g.createOrder(I, W || this._globalConfig, X.publicKey, oe, this.programId, ce, pe)
              ),
              ae.push(...he),
              [ae, X]
            );
          }
          async createOrderGeneric(I, y, P, k, V, C = 'execute', M, W, Y) {
            const [D, L] = await this.createOrderGenericIx(I.publicKey, y, P, k, V, M, W, Y),
              X = 'Create Order: ' + L.publicKey.toString();
            return [await this.processTxn(I, D, C, X, [L]), L];
          }
          async placeBidIxs(I, y, P, k, V, C, M, W, Y) {
            let D, L;
            return (
              W && ((D = W.get(P)), (L = W.get(y))),
              (D = D || (await (0, _.getMintDecimals)(this._connection, P))),
              (L = L || (await (0, _.getMintDecimals)(this._connection, y))),
              this.createOrderGenericIx(
                I,
                P,
                y,
                (0, _.amountToLamportsBN)(k, D),
                (0, _.amountToLamportsBN)(k.div(V), L),
                C,
                M,
                Y
              )
            );
          }
          async placeBid(I, y, P, k, V, C = 'execute', M, W, Y, D) {
            const [L, X] = await this.placeBidIxs(I.publicKey, y, P, k, V, M, W, Y, D),
              oe =
                'Place Order: Buy ' +
                y.toString().slice(0, 5) +
                ' at price:' +
                V +
                ' for ' +
                k +
                ' ' +
                P.toString().slice(0, 5) +
                ' Order: ' +
                X.publicKey.toString();
            return [await this.processTxn(I, L, C, oe, [X]), X];
          }
          async placeAskIxs(I, y, P, k, V, C, M, W, Y) {
            let D, L;
            return (
              W && ((D = W.get(P)), (L = W.get(y))),
              (D = D || (await (0, _.getMintDecimals)(this._connection, P))),
              (L = L || (await (0, _.getMintDecimals)(this._connection, y))),
              this.createOrderGenericIx(
                I,
                y,
                P,
                (0, _.amountToLamportsBN)(k, L),
                (0, _.amountToLamportsBN)(k.mul(V), D),
                C,
                M,
                Y
              )
            );
          }
          async placeAsk(I, y, P, k, V, C = 'execute', M, W, Y, D) {
            const [L, X] = await this.placeAskIxs(I.publicKey, y, P, k, V, M, W, Y, D),
              oe =
                'Place Order: Sell ' +
                y.toString().slice(0, 5) +
                ' at price:' +
                V +
                ' for ' +
                k +
                ' ' +
                P.toString().slice(0, 5) +
                ' Order: ' +
                X.publicKey.toString();
            return [await this.processTxn(I, L, C, oe, [X]), X];
          }
          takeOrderIx(I, y, P, k, V, C, M, W = !0) {
            let Y = [],
              D = [],
              L;
            if (y.state.inputMint.equals(t.WRAPPED_SOL_MINT)) {
              const {
                createIxs: ce,
                fillIxs: pe,
                closeIx: he,
                ata: _e,
              } = this.getInitIfNeededWSOLCreateAndCloseIxs(I, I, new f.default(0));
              (L = _e), W && (Y.push(...ce), D.push(...he));
            } else {
              const { ata: ce, createAtaIx: pe } = (0, _.createAtaIdempotent)(
                I,
                I,
                y.state.inputMint,
                y.state.inputMintProgramId
              );
              (L = ce), Y.push(pe);
            }
            let X;
            if (y.state.outputMint.equals(t.WRAPPED_SOL_MINT)) {
              const ce = (0, _.divCeil)(
                  y.state.expectedOutputAmount.mul(P),
                  y.state.initialInputAmount
                ),
                {
                  createIxs: pe,
                  fillIxs: he,
                  closeIx: _e,
                  ata: Re,
                } = this.getInitIfNeededWSOLCreateAndCloseIxs(I, I, ce);
              (X = Re), W && (Y.push(...pe, ...he), D.push(..._e));
            } else {
              const { ata: ce, createAtaIx: pe } = (0, _.createAtaIdempotent)(
                I,
                I,
                y.state.outputMint,
                y.state.outputMintProgramId
              );
              (X = ce), Y.push(pe);
            }
            let oe, ae;
            if (y.state.outputMint.equals(t.WRAPPED_SOL_MINT))
              (oe = this.getProgramID()),
                (ae = (0, _.getIntermediaryTokenAccountPDA)(this.programId, y.address));
            else {
              const { ata: ce, createAtaIx: pe } = (0, _.createAtaIdempotent)(
                y.state.maker,
                I,
                y.state.outputMint,
                y.state.outputMintProgramId
              );
              (oe = ce), Y.push(pe), (ae = this.programId);
            }
            return (
              Y.push(
                g.takeOrder({
                  taker: I,
                  maker: y.state.maker,
                  globalConfig: y.state.globalConfig,
                  inputMint: y.state.inputMint,
                  outputMint: y.state.outputMint,
                  order: y.address,
                  inputAmountLamports: P,
                  minOutputAmountLamports: k,
                  programId: this.programId,
                  expressRelayProgramId: V,
                  takerInputAta: L,
                  takerOutputAta: X,
                  intermediaryOutputTokenAccount: ae,
                  makerOutputAta: oe,
                  inputTokenProgram: y.state.inputMintProgramId,
                  outputTokenProgram: y.state.outputMintProgramId,
                  permissionlessTipLamports: C !== void 0 ? C : new f.default(0),
                  permissionless: M !== void 0 ? M : !1,
                })
              ),
              Y.push(...D),
              Y
            );
          }
          async permissionlessTakeOrder(I, y, P, k, V, C, M, W) {
            let Y, D;
            W && ((Y = W.get(y.state.inputMint)), (D = W.get(y.state.outputMint))),
              (Y = Y || (await (0, _.getMintDecimals)(this._connection, y.state.inputMint))),
              (D = D || (await (0, _.getMintDecimals)(this._connection, y.state.outputMint)));
            const L = this.takeOrderIx(I.publicKey, y, P, k, V, M, !0),
              X = (0, _.divCeil)(y.state.expectedOutputAmount.mul(P), y.state.initialInputAmount),
              oe =
                'Taker Order: ' +
                y.address.toString() +
                ' selling ' +
                (0, _.lamportsToAmountBN)(P, Y).toString() +
                ' token ';
            return (
              y.state.inputMint.toString().slice(0, 5) +
                '' +
                (0, _.lamportsToAmountBN)(X, D).toString() +
                y.state.outputMint.toString().slice(0, 5),
              await this.processTxn(I, L, C, oe, [])
            );
          }
          flashTakeOrderIxs(I, y, P, k, V, C, M, W = !0) {
            let Y = [],
              D = [],
              L;
            if (y.state.inputMint.equals(t.WRAPPED_SOL_MINT)) {
              const {
                createIxs: he,
                fillIxs: _e,
                closeIx: Re,
                ata: Te,
              } = this.getInitIfNeededWSOLCreateAndCloseIxs(I, I, new f.default(0));
              (L = Te), W && (Y.push(...he), D.push(...Re));
            } else {
              const { ata: he, createAtaIx: _e } = (0, _.createAtaIdempotent)(
                I,
                I,
                y.state.inputMint,
                y.state.inputMintProgramId
              );
              (L = he), Y.push(_e);
            }
            let X;
            if (y.state.outputMint.equals(t.WRAPPED_SOL_MINT)) {
              const he = (0, _.divCeil)(
                  y.state.expectedOutputAmount.mul(P),
                  y.state.initialInputAmount
                ),
                {
                  createIxs: _e,
                  fillIxs: Re,
                  closeIx: Te,
                  ata: Xe,
                } = this.getInitIfNeededWSOLCreateAndCloseIxs(I, I, he);
              (X = Xe), W && (Y.push(..._e), D.push(...Te));
            } else {
              const { ata: he, createAtaIx: _e } = (0, _.createAtaIdempotent)(
                I,
                I,
                y.state.outputMint,
                y.state.outputMintProgramId
              );
              (X = he), Y.push(_e);
            }
            let oe, ae;
            if (y.state.outputMint.equals(t.WRAPPED_SOL_MINT))
              (oe = this.getProgramID()),
                (ae = (0, _.getIntermediaryTokenAccountPDA)(this.programId, y.address));
            else {
              const { ata: he, createAtaIx: _e } = (0, _.createAtaIdempotent)(
                y.state.maker,
                I,
                y.state.outputMint,
                y.state.outputMintProgramId
              );
              (oe = he), Y.push(_e), (ae = this.programId);
            }
            const { startIx: ce, endIx: pe } = g.flashTakeOrder({
              taker: I,
              maker: y.state.maker,
              globalConfig: y.state.globalConfig,
              inputMint: y.state.inputMint,
              outputMint: y.state.outputMint,
              order: y.address,
              inputAmountLamports: P,
              minOutputAmountLamports: k,
              programId: this.programId,
              expressRelayProgramId: V,
              takerInputAta: L,
              takerOutputAta: X,
              intermediaryOutputTokenAccount: ae,
              makerOutputAta: oe,
              inputTokenProgram: y.state.inputMintProgramId,
              outputTokenProgram: y.state.outputMintProgramId,
              permissionlessTipLamports: C !== void 0 ? C : new f.default(0),
              permissionless: M !== void 0 ? M : !1,
            });
            return { createAtaIxs: Y, startFlashIx: ce, endFlashIx: pe, closeWsolAtaIxs: D };
          }
          async permissionlessFlashTakeOrder(I, y, P, k, V, C, M, W, Y, D) {
            let L, X;
            D && ((L = D.get(y.state.inputMint)), (X = D.get(y.state.outputMint))),
              (L = L || (await (0, _.getMintDecimals)(this._connection, y.state.inputMint))),
              (X = X || (await (0, _.getMintDecimals)(this._connection, y.state.outputMint)));
            const {
                createAtaIxs: oe,
                startFlashIx: ae,
                endFlashIx: ce,
                closeWsolAtaIxs: pe,
              } = this.flashTakeOrderIxs(I.publicKey, y, P, k, V, W, !0),
              he = (0, _.divCeil)(y.state.expectedOutputAmount.mul(P), y.state.initialInputAmount),
              _e =
                'Taker Order: ' +
                y.address.toString() +
                ' selling ' +
                (0, _.lamportsToAmountBN)(P, L).toString() +
                ' token ';
            return (
              y.state.inputMint.toString().slice(0, 5) +
                '' +
                (0, _.lamportsToAmountBN)(he, X).toString() +
                y.state.outputMint.toString().slice(0, 5),
              await this.processTxn(I, [...oe, ae, ...M, ce, ...pe], C, _e, Y, 3e5)
            );
          }
          logUserSwapBalancesIxs(I) {
            var Ot;
            const {
                user: y,
                inputMint: P,
                outputMint: k,
                inputMintProgramId: V,
                outputMintProgramId: C,
                swapProgarmId: M,
                simulatedSwapAmountOut: W,
                simulatedTs: Y,
                minimumAmountOut: D,
                swapAmountIn: L,
                simulatedAmountOutNextBest: X,
                aggregatorId: oe,
                nextBestAggregatorId: ae,
                pdaReferrer: ce = (Ot = I.pdaReferrer) != null ? Ot : this.programId,
                voteAccount: pe,
              } = I,
              he = (0, N.getAssociatedTokenAddressSync)(P, y, !0, V),
              _e = (0, N.getAssociatedTokenAddressSync)(k, y, !0, C),
              Re = (0, x.logUserSwapBalancesStart)({
                baseAccounts: {
                  maker: y,
                  inputMint: P,
                  outputMint: k,
                  inputTa: he,
                  outputTa: _e,
                  pdaReferrer: ce,
                  swapProgramId: M,
                },
                userSwapBalanceState: (0, _.getUserSwapBalanceStatePDA)(y, this.programId),
                eventAuthority: (0, _.getEventAuthorityPDA)(this.programId),
                program: this.programId,
                systemProgram: s.SystemProgram.programId,
                rent: s.SYSVAR_RENT_PUBKEY,
                sysvarInstructions: F.web3.SYSVAR_INSTRUCTIONS_PUBKEY,
              }),
              Te = Array(2).fill(0),
              Xe = (0, G.logUserSwapBalancesEnd)(
                {
                  simulatedSwapAmountOut: W,
                  simulatedTs: Y,
                  minimumAmountOut: D,
                  swapAmountIn: L,
                  simulatedAmountOutNextBest: X,
                  aggregator: oe,
                  nextBestAggregator: ae,
                  padding: Te,
                },
                {
                  baseAccounts: {
                    maker: y,
                    inputMint: P,
                    outputMint: k,
                    inputTa: he,
                    outputTa: _e,
                    pdaReferrer: ce,
                    swapProgramId: M,
                  },
                  userSwapBalanceState: (0, _.getUserSwapBalanceStatePDA)(y, this.programId),
                  eventAuthority: (0, _.getEventAuthorityPDA)(this.programId),
                  program: this.programId,
                  systemProgram: s.SystemProgram.programId,
                  rent: s.SYSVAR_RENT_PUBKEY,
                  sysvarInstructions: F.web3.SYSVAR_INSTRUCTIONS_PUBKEY,
                }
              );
            if (pe) {
              const It = { pubkey: pe, isSigner: !1, isWritable: !1 };
              Re.keys.push(It), Xe.keys.push(It);
            }
            return { beforeSwapIx: Re, afterSwapIx: Xe };
          }
          async logUserSwapBalances(I, y, P, k, V, C = [], M = [], W = [], Y, D) {
            const { beforeSwapIx: L, afterSwapIx: X } = this.logUserSwapBalancesIxs({
                user: I.publicKey,
                inputMint: y,
                outputMint: P,
                inputMintProgramId: k,
                outputMintProgramId: V,
                swapProgarmId: Y,
                simulatedSwapAmountOut: new f.default(0),
                simulatedTs: new f.default(0),
                minimumAmountOut: new f.default(0),
                swapAmountIn: new f.default(0),
                simulatedAmountOutNextBest: new f.default(0),
                aggregatorId: 0,
                nextBestAggregatorId: 0,
                pdaReferrer: this.programId,
                voteAccount: D,
              }),
              oe = await this.processTxn(I, [...C, L, ...M, X], 'execute', '', W, 3e5);
            return console.log('logUserSwapBalances', oe), oe;
          }
          getTotalTipsForFilledOrdersDecimal(I) {
            let y = new A.default(0);
            for (const P of I) P.state.status === 1 && (y = y.add(P.orderTipDecimal));
            return y;
          }
          getCloseAndClaimTipsForFilledOrdersTxsIxs(
            I,
            y,
            P = t.MAX_CLOSE_ORDER_AND_CLAIM_TIP_ORDERS_IN_TX
          ) {
            let k = [];
            k.push([]);
            for (const V of y)
              if (V.state.status === 1) {
                const C = { state: V.state, address: V.address },
                  M = this.closeOrderAndClaimTipIx(I, C);
                k[k.length - 1].length + M.length > P && k.push([]), k[k.length - 1].push(...M);
              }
            return k;
          }
          closeOrderAndClaimTipIx(I, y, P = !0) {
            let k = [],
              V = [],
              C;
            if (y.state.inputMint.equals(t.WRAPPED_SOL_MINT)) {
              const {
                createIxs: M,
                fillIxs: W,
                closeIx: Y,
                ata: D,
              } = this.getInitIfNeededWSOLCreateAndCloseIxs(I, I, new f.default(0));
              (C = D), P && (k.push(...M), V.push(...Y));
            } else {
              const { ata: M, createAtaIx: W } = (0, _.createAtaIdempotent)(
                I,
                I,
                y.state.inputMint,
                y.state.inputMintProgramId
              );
              (C = M), k.push(W);
            }
            return (
              k.push(
                g.closeOrderAndClaimTip({
                  maker: I,
                  globalConfig: y.state.globalConfig,
                  inputMint: y.state.inputMint,
                  outputMint: y.state.outputMint,
                  order: y.address,
                  programId: this.programId,
                  makerInputAta: C,
                  inputTokenProgram: y.state.inputMintProgramId,
                })
              ),
              k.push(...V),
              k
            );
          }
          async closeOrderAndClaimTip(I, y, P, k) {
            let V = this.closeOrderAndClaimTipIx(I.publicKey, y),
              C,
              M;
            k && ((C = k.get(y.state.inputMint)), (M = k.get(N.NATIVE_MINT))),
              (C = C || (await (0, _.getMintDecimals)(this._connection, y.state.inputMint))),
              (M = M || (await (0, _.getMintDecimals)(this._connection, N.NATIVE_MINT)));
            const W =
              'Close Order: ' +
              y.address.toString() +
              ' claiming ' +
              (0, _.lamportsToAmountBN)(y.state.remainingInputAmount, C).toString() +
              ' input token ';
            return (
              y.state.inputMint.toString().slice(0, 5) +
                '' +
                (0, _.lamportsToAmountBN)(y.state.tipAmount, M).toString(),
              await this.processTxn(I, V, P, W, [])
            );
          }
          async updateOrderGenericIx(I, y, P, k, V, C, M, W, Y, D = !0) {
            let L = this.closeOrderAndClaimTipIx(y, I, D),
              [X, oe] = await this.createOrderGenericIx(y, P, k, V, C, M, W, Y);
            return [[...L, ...X], oe];
          }
          async updateOrderGeneric(I, y, P, k, V, C, M, W, Y = 'execute', D, L = !0) {
            const [X, oe] = await this.updateOrderGenericIx(I, y.publicKey, P, k, V, C, M, W, D, L),
              ae =
                'Update order: closing order: ' +
                I.toString() +
                ' and creating order ' +
                oe.publicKey.toString();
            return [await this.processTxn(y, X, Y, ae, [oe]), oe];
          }
          updateGlobalConfigIx(I, y, P) {
            const k = [],
              V = this.getGlobalConfigStateSync();
            return (
              k.push(
                g.updateGlobalConfigIx(
                  V.adminAuthority,
                  P || this._globalConfig,
                  b.UpdateGlobalConfigMode.fromDecoded({ [I]: '' }),
                  y,
                  this.programId
                )
              ),
              k
            );
          }
          async updateGlobalConfig(I, y, P, k, V) {
            await this.getGlobalConfigState();
            const C = this.updateGlobalConfigIx(y, P, V),
              M =
                'Update global config: ' +
                this._globalConfig.toString() +
                ' with mode ' +
                y +
                ' and value ' +
                P.toString();
            return console.log('updateGlobalConfig', M), await this.processTxn(I, C, k, M, []);
          }
          async updateGlobalConfigAdminIx(I) {
            const y = I
              ? await h.GlobalConfig.fetch(this._connection, I)
              : await this.getGlobalConfigState();
            if (!y) throw new Error('Global config not found');
            return g.updateGlobalConfigAdminIx(this._globalConfig, y, this.programId);
          }
          async updateGlobalConfigAdmin(I, y, P) {
            const k = await this.updateGlobalConfigAdminIx(P),
              V =
                'Update global config admin: ' +
                this._globalConfig.toString() +
                ' with admin ' +
                I.publicKey.toBase58();
            return await this.processTxn(I, [k], y, V, []);
          }
          withdrawHostTipIx(I, y) {
            let P = [];
            return (
              P.push(
                (0, _.withdrawHostTipIx)({
                  admin: I,
                  globalConfig: y || this._globalConfig,
                  programId: this.programId,
                })
              ),
              P
            );
          }
          async withdrawHostTip(I, y, P) {
            const k = this.withdrawHostTipIx(I.publicKey, P),
              V =
                'Withdraw host tip: ' +
                this._globalConfig.toString() +
                ' with admin ' +
                I.publicKey.toBase58();
            return await this.processTxn(I, k, y, V, []), k;
          }
          async getOrderInputMintDecimals(I) {
            return await (0, _.getMintDecimals)(this._connection, I.state.inputMint);
          }
          async getOrderOutputMintDecimals(I) {
            return await (0, _.getMintDecimals)(this._connection, I.state.outputMint);
          }
          async getMintDecimals(I) {
            const y = new _.PubkeyHashMap();
            for (const P of I) y.set(P, await (0, _.getMintDecimals)(this._connection, P));
            return y;
          }
          async getAllMintDecimals() {
            const I = await this.getAllOrdersStateAndAddressWithFilters([], void 0, !1),
              y = [];
            for (const P of I) y.push(P.state.inputMint), y.push(P.state.outputMint);
            return await this.getMintDecimals(y);
          }
          async getMintsProgramOwners(I) {
            return (await this._connection.getMultipleAccountsInfo(I)).map((k) => {
              if (!k) throw new Error('Mint not found');
              return k.owner;
            });
          }
          async executeTransaction(I, y, P = []) {
            const k = new s.Transaction(),
              { blockhash: V } = await this._connection.getLatestBlockhash();
            return (
              (k.recentBlockhash = V),
              (k.feePayer = y.publicKey),
              k.add(...I),
              await (0, s.sendAndConfirmTransaction)(this._connection, k, [y, ...P], {
                commitment: 'confirmed',
              })
            );
          }
          async processTxn(I, y, P, k, V, C = 2e5, M = 1e4) {
            if (P === 'multisig' || P === 'simulate') {
              console.log('asdsa');
              const { blockhash: W } = await this._connection.getLatestBlockhash(),
                Y = new s.Transaction();
              return (
                Y.add(...y),
                (Y.recentBlockhash = W),
                (Y.feePayer = I.publicKey),
                P === 'simulate'
                  ? await (0, _.printSimulateTx)(this._connection, Y)
                  : await (0, _.printMultisigTx)(Y),
                ''
              );
            } else if (P === 'execute') {
              const Y = (M * 1e6) / C,
                D = (0, _.createAddExtraComputeUnitFeeTransaction)(C, Y),
                L = await this.executeTransaction([...D, ...y], I, V);
              return (
                e.DEBUG === 'true' && k && (console.log(k), console.log('txn: ' + L.toString())), L
              );
            }
            return console.log(k), '';
          }
          getInitIfNeededWSOLCreateAndCloseIxs(I, y, P) {
            const k = [],
              { ata: V, createAtaIx: C } = (0, _.createAtaIdempotent)(
                I,
                y,
                t.WRAPPED_SOL_MINT,
                N.TOKEN_PROGRAM_ID
              );
            k.push(C);
            const M = [];
            P && y.equals(I) && M.push(...this.getDepositWsolIxns(I, V, P));
            const W = [];
            return (
              y.equals(I) &&
                W.push((0, v.createCloseAccountInstruction)(V, I, I, [], N.TOKEN_PROGRAM_ID)),
              { createIxs: k, fillIxs: M, closeIx: W, ata: V }
            );
          }
          getDepositWsolIxns(I, y, P) {
            const k = [];
            return (
              k.push(
                s.SystemProgram.transfer({
                  fromPubkey: I,
                  toPubkey: y,
                  lamports: BigInt(P.toString()),
                })
              ),
              k.push(
                new s.TransactionInstruction({
                  keys: [{ pubkey: y, isSigner: !1, isWritable: !0 }],
                  data: ne.Buffer.from(new Uint8Array([17])),
                  programId: N.TOKEN_PROGRAM_ID,
                })
              ),
              k
            );
          }
        }
        t.LimoClient = Q;
      })(zo)),
    zo
  );
}
(function (t) {
  var e =
      (T && T.__createBinding) ||
      (Object.create
        ? function (r, o, i, u) {
            u === void 0 && (u = i);
            var d = Object.getOwnPropertyDescriptor(o, i);
            (!d || ('get' in d ? !o.__esModule : d.writable || d.configurable)) &&
              (d = {
                enumerable: !0,
                get: function () {
                  return o[i];
                },
              }),
              Object.defineProperty(r, u, d);
          }
        : function (r, o, i, u) {
            u === void 0 && (u = i), (r[u] = o[i]);
          }),
    n =
      (T && T.__exportStar) ||
      function (r, o) {
        for (var i in r)
          i !== 'default' && !Object.prototype.hasOwnProperty.call(o, i) && e(o, r, i);
      };
  Object.defineProperty(t, '__esModule', { value: !0 }), n(Gu(), t), n(pt, t), n(Hu, t);
})(zr);
Object.defineProperty(Zn, '__esModule', { value: !0 });
Zn.serializeRouteOutput = Zy;
Zn.deserializeRouteOutput = eT;
Zn.serializeRouteParams = tT;
Zn.serializeQuoteParams = nT;
const wt = me,
  Vt = ks,
  Vy = zr,
  Wy = gt;
function qy(t) {
  const e = t.serialize();
  return ne.Buffer.from(e).toString('base64');
}
function zy(t) {
  if (!t) return;
  const e = ne.Buffer.from(t, 'base64');
  return wt.VersionedTransaction.deserialize(e);
}
function Yy(t) {
  return t
    ? t.map((e) => ({
        programId: e.programId.toBase58(),
        data: e.data.toString('base64'),
        keys: e.keys.map((n) => ({
          pubkey: n.pubkey.toBase58(),
          isSigner: n.isSigner,
          isWritable: n.isWritable,
        })),
      }))
    : [];
}
function Xy(t) {
  return t
    ? t.map((e) => {
        const { programId: n, data: r, keys: o } = e,
          i = new wt.PublicKey(n),
          u = ne.Buffer.from(r, 'base64'),
          d = o.map((f) => ({
            pubkey: new wt.PublicKey(f.pubkey),
            isSigner: f.isSigner,
            isWritable: f.isWritable,
          }));
        return new wt.TransactionInstruction({ programId: i, data: u, keys: d });
      })
    : [];
}
function Jy(t) {
  return t.map((e) => ({
    key: e.key.toBase58(),
    state: {
      deactivationSlot: e.state.deactivationSlot.toString(),
      lastExtendedSlot: e.state.lastExtendedSlot,
      lastExtendedSlotStartIndex: e.state.lastExtendedSlotStartIndex,
      authority: e.state.authority ? e.state.authority.toBase58() : void 0,
      addresses: e.state.addresses.map((n) => n.toBase58()),
    },
  }));
}
function Qy(t) {
  return t.map((e) => {
    const n = {
        deactivationSlot: BigInt(e.state.deactivationSlot),
        lastExtendedSlot: e.state.lastExtendedSlot,
        lastExtendedSlotStartIndex: e.state.lastExtendedSlotStartIndex,
        authority: e.state.authority ? new wt.PublicKey(e.state.authority) : void 0,
        addresses: e.state.addresses.map((o) => new wt.PublicKey(o)),
      },
      r = new wt.PublicKey(e.key);
    return new wt.AddressLookupTableAccount({ key: r, state: n });
  });
}
function Zy(t) {
  return {
    ixsRouterBs58: Yy(t.ixsRouter),
    transactionBs58: t.transaction ? qy(t.transaction) : void 0,
    amountsExactIn: {
      amountIn: t.amountsExactIn.amountIn.toString(),
      amountOutGuaranteed: t.amountsExactIn.amountOutGuaranteed.toString(),
      amountOut: t.amountsExactIn.amountOut.toString(),
      amountOutSimulated: t.amountsExactIn.amountOutSimulated
        ? t.amountsExactIn.amountOutSimulated.toString()
        : void 0,
    },
    amountsExactOut: {
      amountOut: t.amountsExactOut.amountOut.toString(),
      amountInGuaranteed: t.amountsExactOut.amountInGuaranteed.toString(),
      amountIn: t.amountsExactOut.amountIn.toString(),
      amountInSimulated: t.amountsExactOut.amountInSimulated
        ? t.amountsExactOut.amountInSimulated.toString()
        : void 0,
    },
    swapType: t.swapType,
    responseTimeGetQuoteMs: t.responseTimeGetQuoteMs,
    responseTimeSwapIxsMs: t.responseTimeSwapIxsMs,
    routerType: t.routerType,
    priceImpactBps: t.priceImpactBps,
    simulatedPriceImpactBps: t.simulatedPriceImpactBps,
    guaranteedPriceImpactBps: t.guaranteedPriceImpactBps,
    lookupTableAccountsBs58: t.lookupTableAccounts ? Jy(t.lookupTableAccounts) : void 0,
    expiryTime: t.expiryTime,
    perReferenceId: t.perReferenceId,
    birdeyeTokenInPriceInSol: t.birdeyeTokenInPriceInSol,
    birdeyeTokenOutPriceInSol: t.birdeyeTokenOutPriceInSol,
    simulationTimestamp: t.simulationTimestamp,
    inputMintProgramOwner: t.inputMintProgramOwner ? t.inputMintProgramOwner.toBase58() : void 0,
    outputMintProgramOwner: t.outputMintProgramOwner ? t.outputMintProgramOwner.toBase58() : void 0,
    inputTokenDecimals: t.inputTokenDecimals,
    outputTokenDecimals: t.outputTokenDecimals,
    jupRequestId: t.jupRequestId,
    cloverDexType: t.cloverDexType,
  };
}
function eT(t) {
  if ((0, Wy.isValidRouterType)(t.routerType))
    return {
      ixsRouter: Xy(t.ixsRouterBs58),
      transaction: zy(t.transactionBs58),
      amountsExactIn: {
        amountIn: new Vt.BN(t.amountsExactIn.amountIn),
        amountOutGuaranteed: new Vt.BN(t.amountsExactIn.amountOutGuaranteed),
        amountOut: new Vt.BN(t.amountsExactIn.amountOut),
        amountOutSimulated: t.amountsExactIn.amountOutSimulated
          ? new Vt.BN(t.amountsExactIn.amountOutSimulated)
          : void 0,
      },
      amountsExactOut: {
        amountOut: new Vt.BN(t.amountsExactOut.amountOut),
        amountInGuaranteed: new Vt.BN(t.amountsExactOut.amountInGuaranteed),
        amountIn: new Vt.BN(t.amountsExactOut.amountIn),
        amountInSimulated: t.amountsExactOut.amountInSimulated
          ? new Vt.BN(t.amountsExactOut.amountInSimulated)
          : void 0,
      },
      swapType: t.swapType,
      responseTimeGetQuoteMs: t.responseTimeGetQuoteMs,
      responseTimeSwapIxsMs: t.responseTimeSwapIxsMs,
      routerType: t.routerType,
      lookupTableAccounts: Qy(t.lookupTableAccountsBs58 || []),
      expiryTime: t.expiryTime,
      perReferenceId: t.perReferenceId,
      priceImpactBps: t.priceImpactBps,
      simulatedPriceImpactBps: t.simulatedPriceImpactBps,
      guaranteedPriceImpactBps: t.guaranteedPriceImpactBps,
      birdeyeTokenInPriceInSol: t.birdeyeTokenInPriceInSol,
      birdeyeTokenOutPriceInSol: t.birdeyeTokenOutPriceInSol,
      simulationTimestamp: t.simulationTimestamp,
      inputMintProgramOwner: t.inputMintProgramOwner
        ? new wt.PublicKey(t.inputMintProgramOwner)
        : void 0,
      outputMintProgramOwner: t.outputMintProgramOwner
        ? new wt.PublicKey(t.outputMintProgramOwner)
        : void 0,
      inputTokenDecimals: t.inputTokenDecimals,
      outputTokenDecimals: t.outputTokenDecimals,
      jupRequestId: t.jupRequestId,
      cloverDexType: t.cloverDexType,
    };
}
function tT(t) {
  const e = {
    tokenIn: t.tokenIn.toBase58(),
    tokenOut: t.tokenOut.toBase58(),
    amount: t.amount.toString(),
    swapType: t.swapType,
    executor: t.executor.toBase58(),
    referrerPda: t.referrerPda ? t.referrerPda.toBase58() : Vy.limoId.toBase58(),
    maxSlippageBps: t.maxSlippageBps,
    includeSetupIxs: t.includeSetupIxs !== void 0 && !t.includeSetupIxs ? 'false' : 'true',
    wrapAndUnwrapSol: t.wrapAndUnwrapSol !== void 0 && !t.wrapAndUnwrapSol ? 'false' : 'true',
    routerTypes: t.routerTypes,
    includeLimoLogs: t.includeLimoLogs !== void 0 && !t.includeLimoLogs ? 'false' : 'true',
    includeRfq: t.includeRfq !== void 0 && !t.includeRfq ? 'false' : 'true',
    timeoutMs: t.timeoutMs,
    withSimulation: t.withSimulation !== void 0 && !t.withSimulation ? 'false' : 'true',
    destinationTokenAccount: t.destinationTokenAccount
      ? t.destinationTokenAccount.toBase58()
      : void 0,
    preferredMaxAccounts: t.preferredMaxAccounts,
    requestPriceImpact: t.requestPriceImpact,
  };
  return (
    Object.keys(t).forEach((n) => {
      if (!Object.hasOwn(e, n))
        throw new Error('serializeRouteParams: not all keys of routeParams have been serialized');
    }),
    e
  );
}
function nT(t) {
  const e = {
    tokenIn: t.tokenIn.toBase58(),
    tokenOut: t.tokenOut.toBase58(),
    amount: t.amount.toString(),
    swapType: t.swapType,
    maxSlippageBps: t.maxSlippageBps,
    routerTypes: t.routerTypes,
    includeRfq: t.includeRfq !== void 0 && !t.includeRfq ? 'false' : 'true',
    timeoutMs: t.timeoutMs,
    preferredMaxAccounts: t.preferredMaxAccounts,
    requestPriceImpact: t.requestPriceImpact,
  };
  return (
    Object.keys(t).forEach((n) => {
      if (!Object.hasOwn(e, n))
        throw new Error('serializeQuoteParams: not all keys of quoteParams have been serialized');
    }),
    e
  );
}
var tr = {},
  rT =
    (T && T.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(tr, '__esModule', { value: !0 });
tr.wrapLimoLogsAroundRoute = sT;
tr.removeLimoLogsIxns = uT;
tr.includeLimoLogs = cT;
const Pi = gt,
  iT = Lt,
  Zo = rT(Ye),
  oT = Ap();
function sT(t) {
  const {
    route: e,
    params: n,
    limoClient: r,
    inputTokenProgramOwner: o,
    outputTokenProgramOwner: i,
    nextBestAmountOutSimulated: u,
    nextBestRouterTypeId: d,
  } = t;
  if (e.ixsRouter !== void 0 && e.routerType !== 'per' && e.routerType !== 'jupiterZ') {
    const f =
        n.swapType === 'exactIn'
          ? e.amountsExactIn.amountOutSimulated
          : e.amountsExactOut.amountOut,
      s = e.simulationTimestamp,
      _ =
        n.swapType === 'exactIn'
          ? e.amountsExactIn.amountOutGuaranteed
          : e.amountsExactOut.amountOut,
      g = n.swapType === 'exactIn' ? e.amountsExactIn.amountIn : e.amountsExactOut.amountIn,
      m = r.logUserSwapBalancesIxs({
        user: n.executor,
        inputMint: n.tokenIn,
        outputMint: n.tokenOut,
        inputMintProgramId: o,
        outputMintProgramId: i,
        swapProgarmId: Pi.ROUTER_PROGRAM_MAP[e.routerType],
        simulatedSwapAmountOut: f || new Zo.default(0),
        simulatedTs: s ? new Zo.default(s) : new Zo.default(0),
        minimumAmountOut: _,
        swapAmountIn: g,
        simulatedAmountOutNextBest: u,
        aggregatorId: (0, Pi.getRouterTypeID)(e.routerType),
        nextBestAggregatorId: d,
        pdaReferrer: n.referrerPda ? n.referrerPda : r.getProgramID(),
        voteAccount: Pi.TRITON_VOTE_ACCOUNT,
      });
    e.ixsRouter = aT(e.ixsRouter, e.routerType, m.beforeSwapIx, m.afterSwapIx, n);
  }
  return e;
}
function aT(t, e, n, r, o) {
  try {
    const i = Pi.ROUTER_PROGRAM_MAP[e];
    let u = -1;
    const d = [];
    if (
      (t.forEach((s, _) => s.programId.equals(i) && d.push(_)), e === 'raydium' || e === 'dflow')
    ) {
      if (d.length === 0) return t;
      o.tokenIn.equals(iT.NATIVE_MINT) && o.wrapAndUnwrapSol && d.length > 1
        ? (u = d[1])
        : (u = d[0]);
    } else {
      if (d.length > 1 || d.length === 0) return t;
      u = d[0];
    }
    if (u === -1) throw new Error('Instruction for router '.concat(e, ' not found'));
    const f = [...t];
    return f.splice(u, 0, n), f.splice(u + 2, 0, r), f;
  } catch (i) {
    return t;
  }
}
function uT(t) {
  return t.filter(({ programId: e }) => !e.equals((0, oT.getLimoProgramId)('mainnet-beta')));
}
function cT(t, e) {
  return e === 'per' || e === 'jupiterZ' || e === 'clover' ? !1 : t === void 0 ? !0 : t;
}
var jt = {};
Object.defineProperty(jt, '__esModule', { value: !0 });
jt.unwrapSolIx = dT;
jt.wrapSolIxs = fT;
jt.getDepositWsolIxs = Rp;
jt.isRequestedRouterType = pT;
jt.filterArrayRouterTypes = _T;
const _l = me,
  xi = Lt,
  Op = zr,
  lT = Oe,
  ml = gt;
function dT(t) {
  const e = (0, xi.getAssociatedTokenAddressSync)(Op.WRAPPED_SOL_MINT, t.executor);
  return (0, xi.createCloseAccountInstruction)(e, t.executor, t.executor, []);
}
function fT(t) {
  const e = [],
    { ata: n, createAtaIx: r } = (0, lT.createAtaIdempotent)(
      t.executor,
      t.executor,
      Op.WRAPPED_SOL_MINT,
      xi.TOKEN_PROGRAM_ID
    );
  return e.push(r), t.amount && e.push(...Rp(t.executor, n, t.amount)), e;
}
function Rp(t, e, n) {
  const r = [];
  return (
    r.push(
      _l.SystemProgram.transfer({ fromPubkey: t, toPubkey: e, lamports: BigInt(n.toString()) })
    ),
    r.push(
      new _l.TransactionInstruction({
        keys: [{ pubkey: e, isSigner: !1, isWritable: !0 }],
        data: ne.Buffer.from(new Uint8Array([17])),
        programId: xi.TOKEN_PROGRAM_ID,
      })
    ),
    r
  );
}
function pT(t, e) {
  return t.length == 0 || t.includes(e);
}
function _T(t, e) {
  const n = !t || t.length === 0 ? [...ml.SUPPORTED_ROUTER_TYPES] : t;
  return e ? n : n.filter((r) => !ml.RFQ_ROUTERS.includes(r));
}
(function (t) {
  var e =
      (T && T.__createBinding) ||
      (Object.create
        ? function (r, o, i, u) {
            u === void 0 && (u = i);
            var d = Object.getOwnPropertyDescriptor(o, i);
            (!d || ('get' in d ? !o.__esModule : d.writable || d.configurable)) &&
              (d = {
                enumerable: !0,
                get: function () {
                  return o[i];
                },
              }),
              Object.defineProperty(r, u, d);
          }
        : function (r, o, i, u) {
            u === void 0 && (u = i), (r[u] = o[i]);
          }),
    n =
      (T && T.__exportStar) ||
      function (r, o) {
        for (var i in r)
          i !== 'default' && !Object.prototype.hasOwnProperty.call(o, i) && e(o, r, i);
      };
  Object.defineProperty(t, '__esModule', { value: !0 }), n(op, t), n(Zn, t), n(tr, t), n(jt, t);
})(Fs);
var ao = {},
  Cn = {},
  uo = {};
Object.defineProperty(uo, '__esModule', { value: !0 });
uo.base64ToVersionedTransaction = hT;
uo.extractInstructionsAndLookupTablesFromTxn = gT;
const Ts = me,
  mT = Yn;
function hT(t) {
  const e = ne.Buffer.from(t, 'base64');
  return Ts.VersionedTransaction.deserialize(e);
}
async function gT(t, e) {
  const n = e.message.addressTableLookups.map((u) => new Ts.PublicKey(u.accountKey)),
    r = await (0, mT.getAllLookupTables)(t, n),
    o = e.message.getAccountKeys({ addressLookupTableAccounts: r });
  return {
    instructions: e.message.compiledInstructions.map(
      (u) =>
        new Ts.TransactionInstruction({
          programId: o.get(u.programIdIndex),
          keys: u.accountKeyIndexes.map((d) => ({
            pubkey: o.get(d),
            isSigner: e.message.isAccountSigner(d),
            isWritable: e.message.isAccountWritable(d),
          })),
          data: ne.Buffer.from(u.data),
        })
    ),
    lookupTables: r,
  };
}
var yp =
  (T && T.__importDefault) ||
  function (t) {
    return t && t.__esModule ? t : { default: t };
  };
Object.defineProperty(Cn, '__esModule', { value: !0 });
Cn.JupiterUltraRouter = void 0;
Cn.executeJupiterZTransaction = RT;
Cn.fetchJupiterPrice = yT;
const Gn = yp(Li),
  Dn = yp(Ye),
  fr = gt,
  AT = Yn,
  hl = uo;
class OT {
  constructor(e) {
    c(this, 'connection');
    c(this, 'baseUrl', fr.JUP_ULTRA_BASE_URL);
    c(this, 'routerType');
    (this.connection = e), (this.routerType = 'jupiterU');
  }
  async quote(e) {
    try {
      if (e.swapType === 'exactOut') return;
      const n = Date.now(),
        r = await this.getSwapQuote({
          inputMint: e.tokenIn.toString(),
          outputMint: e.tokenOut.toString(),
          amount: e.amount.toNumber(),
        }),
        o = Date.now();
      return r.inAmount !== e.amount.toString()
        ? void 0
        : [this.buildRouteOutput(r, e.swapType, o - n, 0)];
    } catch (n) {
      console.error('Failed to get quote '.concat(n));
      return;
    }
  }
  async route(e) {
    try {
      if (
        e.swapType === 'exactOut' ||
        e.destinationTokenAccount ||
        e.wrapAndUnwrapSol === !1 ||
        e.includeSetupIxs === !1
      )
        return;
      const n = Date.now(),
        r = await this.getSwapQuote({
          inputMint: e.tokenIn.toString(),
          outputMint: e.tokenOut.toString(),
          amount: e.amount.toNumber(),
          taker: e.executor.toString(),
        }),
        o = Date.now();
      if (r.inAmount !== e.amount.toString()) return;
      if (!r.transaction) {
        console.error('Swap transaction is null');
        return;
      }
      const i = Number(r.priceImpactPct) * 100,
        u = (0, hl.base64ToVersionedTransaction)(r.transaction);
      let d, f;
      const { instructions: s, lookupTables: _ } = await (0,
      hl.extractInstructionsAndLookupTablesFromTxn)(this.connection, u);
      d = (0, AT.removeComputeBudgetProgram)(s);
      let g = !1;
      for (const h of d)
        if (
          h.programId.equals(fr.ROUTER_PROGRAM_MAP.jupiterU) ||
          h.programId.equals(fr.ROUTER_PROGRAM_MAP.jupiterZ)
        ) {
          g = !0;
          break;
        }
      if (!g) return;
      f = _;
      const m = Date.now();
      return [
        ct(xe({}, this.buildRouteOutput(r, e.swapType, o - n, m - o)), {
          transaction: u,
          ixsRouter: d,
          lookupTableAccounts: f,
          priceImpactBps: i,
        }),
      ];
    } catch (n) {
      console.error('Failed to route swap: '.concat(n));
      return;
    }
  }
  async getSwapQuote(e) {
    try {
      return (await Gn.default.get(''.concat(this.baseUrl, '/order'), { params: e, headers: {} }))
        .data;
    } catch (n) {
      throw (
        (console.error(
          'Failed to fetch swap quote: '.concat(
            Gn.default.isAxiosError(n) ? n.message : 'Unknown error'
          )
        ),
        new Error(
          'Failed to fetch swap quote: '.concat(
            Gn.default.isAxiosError(n) ? n.message : 'Unknown error'
          )
        ))
      );
    }
  }
  buildRouteOutput(e, n, r, o) {
    return {
      amountsExactIn: {
        amountIn: new Dn.default(e.inAmount),
        amountOutGuaranteed: new Dn.default(e.otherAmountThreshold),
        amountOut: new Dn.default(e.outAmount),
      },
      amountsExactOut: {
        amountOut: new Dn.default(0),
        amountInGuaranteed: new Dn.default(0),
        amountIn: new Dn.default(0),
      },
      swapType: n,
      responseTimeGetQuoteMs: r,
      responseTimeSwapIxsMs: o,
      routerType: e.swapType === 'aggregator' ? 'jupiterU' : 'jupiterZ',
      expiryTime: 0,
      jupRequestId: e.requestId,
    };
  }
}
Cn.JupiterUltraRouter = OT;
async function RT(t) {
  try {
    return (
      await Gn.default.post(
        ''.concat(fr.JUP_ULTRA_BASE_URL, '/execute'),
        { signedTransaction: t.signedTransaction, requestId: t.requestId },
        { headers: { 'Content-Type': 'application/json', Accept: 'application/json' } }
      )
    ).data;
  } catch (e) {
    throw Gn.default.isAxiosError(e) && e.response
      ? (console.error('Execute transaction failed:', e.response.data),
        new Error('Execute transaction failed: '.concat(JSON.stringify(e.response.data))))
      : (console.error('Execute transaction error:', e),
        new Error('Failed to execute transaction'));
  }
}
async function yT(t) {
  return (
    await Gn.default.get(fr.JUPITER_PRICE_API, {
      params: t,
      headers: { 'Content-Type': 'application/json' },
    })
  ).data;
}
var Xr = {},
  nr = {},
  Jr = {},
  TT =
    (T && T.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(Jr, '__esModule', { value: !0 });
Jr.JupiterBase = void 0;
const Ue = TT(Ye),
  Ii = me,
  ET = jt,
  gl = Yn,
  Al = zr;
class wT {
  constructor(e, n) {
    c(this, 'routerType');
    c(this, 'connection');
    (this.routerType = e), (this.connection = n);
  }
  async getRouteOutput(e, n, r, o, i) {
    const { setupInstructions: u, swapInstruction: d, addressLookupTableAddresses: f } = e,
      s = f.map((N) => new Ii.PublicKey(N)),
      _ = await (0, gl.getAllLookupTables)(this.connection, s),
      g = Date.now(),
      m = u.map((N) => this.convertJupiterToTransactionInstruction(N)),
      h = [...(r.includeSetupIxs ? m : []), this.convertJupiterToTransactionInstruction(d)],
      A = (0, gl.removeComputeBudgetIxns)(h),
      R = Number(n.priceImpactPct) * 100;
    return (
      (r.tokenOut.equals(Al.WRAPPED_SOL_MINT) || r.tokenIn.equals(Al.WRAPPED_SOL_MINT)) &&
        r.wrapAndUnwrapSol &&
        A.push((0, ET.unwrapSolIx)(r)),
      {
        ixsRouter: A,
        amountsExactIn: {
          amountIn: r.swapType === 'exactIn' ? r.amount : new Ue.default(0),
          amountOutGuaranteed:
            r.swapType === 'exactIn' ? new Ue.default(n.otherAmountThreshold) : new Ue.default(0),
          amountOut: r.swapType === 'exactIn' ? new Ue.default(n.outAmount) : new Ue.default(0),
        },
        amountsExactOut: {
          amountOut: r.swapType === 'exactOut' ? r.amount : new Ue.default(0),
          amountInGuaranteed:
            r.swapType === 'exactOut'
              ? new Ue.default(n.otherAmountThreshold.toString())
              : new Ue.default(0),
          amountIn:
            r.swapType === 'exactOut' ? new Ue.default(n.inAmount.toString()) : new Ue.default(0),
        },
        swapType: r.swapType,
        responseTimeGetQuoteMs: o - i,
        responseTimeSwapIxsMs: g - o,
        lookupTableAccounts: _,
        routerType: this.routerType,
        expiryTime: 0,
        priceImpactBps: R,
      }
    );
  }
  async getQuoteOutput(e, n, r, o) {
    const i = Number(e.priceImpactPct) * 100;
    return {
      amountsExactIn: {
        amountIn: n.swapType === 'exactIn' ? n.amount : new Ue.default(0),
        amountOutGuaranteed:
          n.swapType === 'exactIn' ? new Ue.default(e.otherAmountThreshold) : new Ue.default(0),
        amountOut: n.swapType === 'exactIn' ? new Ue.default(e.outAmount) : new Ue.default(0),
      },
      amountsExactOut: {
        amountOut: n.swapType === 'exactOut' ? n.amount : new Ue.default(0),
        amountInGuaranteed:
          n.swapType === 'exactOut'
            ? new Ue.default(e.otherAmountThreshold.toString())
            : new Ue.default(0),
        amountIn:
          n.swapType === 'exactOut' ? new Ue.default(e.outAmount.toString()) : new Ue.default(0),
      },
      swapType: n.swapType,
      responseTimeGetQuoteMs: r - o,
      responseTimeSwapIxsMs: 0,
      routerType: this.routerType,
      expiryTime: 0,
      priceImpactBps: i,
    };
  }
  convertJupiterToTransactionInstruction(e) {
    return new Ii.TransactionInstruction({
      programId: new Ii.PublicKey(e.programId),
      keys: e.accounts.map((n) => ({
        pubkey: new Ii.PublicKey(n.pubkey),
        isSigner: n.isSigner,
        isWritable: n.isWritable,
      })),
      data: ne.Buffer.from(e.data, 'base64'),
    });
  }
}
Jr.JupiterBase = wT;
var IT =
  (T && T.__importDefault) ||
  function (t) {
    return t && t.__esModule ? t : { default: t };
  };
Object.defineProperty(nr, '__esModule', { value: !0 });
nr.JupiterRouterBase = void 0;
nr.getJupiterPrice = vT;
const es = Cl,
  bT = IT(Li),
  NT = Jr,
  CT = gt;
class ST extends NT.JupiterBase {
  constructor(n, r, o, i, u) {
    super(r, n);
    c(this, 'maxAccounts');
    c(this, 'jupiterClient');
    c(this, 'logger');
    (this.maxAccounts = i),
      (this.jupiterClient = (0, es.createJupiterApiClient)({ basePath: o })),
      (this.logger = u);
  }
  async route(n) {
    try {
      const r = Date.now(),
        o = await this.jupiterClient.quoteGet({
          inputMint: n.tokenIn.toBase58(),
          outputMint: n.tokenOut.toBase58(),
          amount: n.amount.toNumber(),
          slippageBps: n.maxSlippageBps,
          maxAccounts: n.preferredMaxAccounts || this.maxAccounts,
          swapMode: n.swapType === 'exactIn' ? es.SwapMode.ExactIn : es.SwapMode.ExactOut,
        });
      if (o.inAmount !== n.amount.toString()) {
        this.logger(
          'Jupiter - Swap quote inAmount '
            .concat(o.inAmount, ' does not match requested amount ')
            .concat(n.amount.toString())
        );
        return;
      }
      const i = Date.now(),
        u = await this.jupiterClient.swapInstructionsPost({
          swapRequest: {
            userPublicKey: n.executor.toBase58(),
            quoteResponse: o,
            wrapAndUnwrapSol: n.wrapAndUnwrapSol,
            destinationTokenAccount: n.destinationTokenAccount
              ? n.destinationTokenAccount.toBase58()
              : void 0,
          },
        });
      return [await this.getRouteOutput(u, o, n, i, r)];
    } catch (r) {
      this.logger('Jupiter error '.concat(r));
      return;
    }
  }
  async quote(n) {
    try {
      const r = Date.now(),
        o = await this.jupiterClient.quoteGet({
          inputMint: n.tokenIn.toBase58(),
          outputMint: n.tokenOut.toBase58(),
          amount: n.amount.toNumber(),
          slippageBps: n.maxSlippageBps,
          maxAccounts: n.preferredMaxAccounts || this.maxAccounts,
          swapMode: n.swapType === 'exactIn' ? 'ExactIn' : 'ExactOut',
        });
      if (o.inAmount !== n.amount.toString()) {
        this.logger(
          'Jupiter - Swap quote inAmount '
            .concat(o.inAmount, ' does not match requested amount ')
            .concat(n.amount.toString())
        );
        return;
      }
      const i = Date.now();
      return [await this.getQuoteOutput(o, n, i, r)];
    } catch (r) {
      this.logger('Failed to get quote '.concat(r));
      return;
    }
  }
  async getQuoteResponse(n, r, o, i) {
    return await this.jupiterClient.quoteGet({
      inputMint: n.toBase58(),
      outputMint: r.toBase58(),
      amount: o.toNumber(),
      slippageBps: i,
      maxAccounts: this.maxAccounts,
    });
  }
}
nr.JupiterRouterBase = ST;
async function vT(t, e) {
  var r;
  const n = { ids: t.toString(), vsToken: e.toString() };
  try {
    return (
      ((r = (await bT.default.get(CT.JUPITER_PRICE_API, { params: n })).data.data[t.toString()]) ==
      null
        ? void 0
        : r.price) || 0
    );
  } catch (o) {
    return 0;
  }
}
Object.defineProperty(Xr, '__esModule', { value: !0 });
Xr.JupiterRouterLite = void 0;
const PT = gt,
  MT = nr;
class kT extends MT.JupiterRouterBase {
  constructor(e, n) {
    super(e, 'jupiterLite', PT.JUP_V6_BASE_URL, n, console.debug);
  }
}
Xr.JupiterRouterLite = kT;
var Tp =
  (T && T.__importDefault) ||
  function (t) {
    return t && t.__esModule ? t : { default: t };
  };
Object.defineProperty(ao, '__esModule', { value: !0 });
ao.KswapSdk = void 0;
const bi = me,
  Bn = Fs,
  DT = Li,
  Wt = Yn,
  BT = Tp(Hr),
  Pt = gt,
  ts = Cn,
  Ol = Lt,
  Rl = Tp(Ye),
  xT = zr,
  Ni = tr,
  ns = Cl,
  gn = bn,
  LT = Xr,
  Ci = jt;
class Un {
  constructor(e, n, r) {
    c(this, 'apiBaseUrl');
    c(this, 'connection');
    c(this, '_apiClient');
    c(this, 'limoClient');
    c(this, 'routers', []);
    c(this, 'allRouterTypes', [...Pt.SUPPORTED_ROUTER_TYPES]);
    (this.apiBaseUrl = e),
      (this.connection = n),
      (this._apiClient = new DT.Axios({
        baseURL: e,
        headers: r ? { 'x-api-key': r } : void 0,
        transformResponse: [
          (o) => {
            try {
              return JSON.parse(o);
            } catch (i) {
              return o;
            }
          },
        ],
      })),
      this.routers.push(new ts.JupiterUltraRouter(this.connection)),
      this.routers.push(new LT.JupiterRouterLite(this.connection, 60)),
      (this.limoClient = new xT.LimoClient(this.connection, void 0));
  }
  static isValidRouteOutput(e) {
    return e != null && e.length > 0;
  }
  static shouldExcludeJupiterZRoute(e, n) {
    return e[0].routerType === 'jupiterZ' && n.includeRfq !== void 0 && !n.includeRfq;
  }
  async getAllRoutesOrQuotes(e) {
    const n = e.routerTypes && e.routerTypes.length > 0 ? e.routerTypes : this.allRouterTypes;
    return e.executor
      ? this.getAllRoutes({
          tokenIn: e.tokenIn,
          tokenOut: e.tokenOut,
          amount: e.amount,
          swapType: e.swapType,
          executor: e.executor,
          maxSlippageBps: e.maxSlippageBps,
          includeSetupIxs: e.includeSetupIxs,
          wrapAndUnwrapSol: e.wrapAndUnwrapSol,
          referrerPda: e.referrerPda,
          routerTypes: n,
          includeLimoLogs: e.includeLimoLogs,
          includeRfq: e.includeRfq,
          timeoutMs: e.timeoutMs,
          withSimulation: e.withSimulation,
          destinationTokenAccount: e.destinationTokenAccount,
          preferredMaxAccounts: e.preferredMaxAccounts,
          requestPriceImpact: e.requestPriceImpact,
        })
      : this.getAllQuotes({
          tokenIn: e.tokenIn,
          tokenOut: e.tokenOut,
          amount: e.amount,
          swapType: e.swapType,
          maxSlippageBps: e.maxSlippageBps,
          routerTypes: n,
          includeRfq: e.includeRfq,
          timeoutMs: e.timeoutMs,
          preferredMaxAccounts: e.preferredMaxAccounts,
          requestPriceImpact: e.requestPriceImpact,
        });
  }
  async getAllRoutes(e) {
    const n = '/all-routes',
      r = xe({}, e),
      o = e.routerTypes && e.routerTypes.length > 0 ? e.routerTypes : this.allRouterTypes;
    r.routerTypes = o;
    const i = (0, Bn.serializeRouteParams)(r),
      u = e.timeoutMs ? e.timeoutMs : Pt.DEFAULT_TIMEOUT_MS;
    try {
      const d = this.getClientSideRouteOutputPromises(r, u),
        f = this._apiClient.get(n, { params: i });
      let [s, _, g] = await Promise.all([
        f,
        Promise.all(d.filter((R) => R !== void 0)),
        this.connection.getLatestBlockhash(),
      ]);
      const h = s.data.data
        .map((R) => (0, Bn.deserializeRouteOutput)(R))
        .filter((R) => R !== void 0);
      return await this.processClientSideRouteOutput(h, _, r, g);
    } catch (d) {
      return console.error('Error fetching all routes', d), [];
    }
  }
  async getAllQuotes(e) {
    const n = '/all-quotes',
      r = xe({}, e);
    (r.routerTypes = this.filterRouterTypes(e.routerTypes)),
      (r.routerTypes = r.routerTypes.filter((u) => !Pt.EXCLUDED_QUOTES_ROUTERS.includes(u)));
    const o = (0, Bn.serializeQuoteParams)(r),
      i = r.timeoutMs ? r.timeoutMs : Pt.DEFAULT_TIMEOUT_MS;
    try {
      const u = this.getClientSideQuoteRouteOutputPromises(r, i),
        d = this._apiClient.get(n, { params: o });
      let [f, s] = await Promise.all([d, Promise.all(u.filter((h) => h !== void 0))]);
      const g = f.data.data
        .map((h) => (0, Bn.deserializeRouteOutput)(h))
        .filter((h) => h !== void 0);
      return this.processClientSideQuoteRouteOutput(g, s, r);
    } catch (u) {
      return console.error('Error fetching all routes', u), [];
    }
  }
  async getBestRoute(e) {
    const n = '/best-route',
      r = xe({}, e);
    r.routerTypes = this.filterRouterTypes(e.routerTypes);
    const o = (0, Bn.serializeRouteParams)(r);
    try {
      const u = (await this._apiClient.get(n, { params: o })).data.data;
      return (0, Bn.deserializeRouteOutput)(u);
    } catch (i) {
      console.error('Error fetching best route', i);
      return;
    }
  }
  async getBatchTokenPrices(e) {
    const n = '/batch-token-prices',
      r = e.map((o) => o.toBase58());
    try {
      const i = (
          await this._apiClient.get(n, {
            params: { tokens: r },
            paramsSerializer: (d) =>
              Object.entries(d)
                .map(([f, s]) =>
                  Array.isArray(s)
                    ? s.map((_) => ''.concat(f, '=').concat(encodeURIComponent(_))).join('&')
                    : ''.concat(f, '=').concat(encodeURIComponent(s))
                )
                .join('&'),
          })
        ).data.data,
        u = new Map();
      return (
        Object.entries(i).forEach(([d, f]) => {
          u.set(d, f);
        }),
        u
      );
    } catch (o) {
      return console.error('Error fetching token prices', o), new Map();
    }
  }
  async getAllAggregatorsFromApi() {
    const e = '/aggregators';
    let n = {};
    try {
      return (await this._apiClient.get(e)).data.data;
    } catch (r) {
      return console.error('Error fetching all aggregators', r), n;
    }
  }
  async getJupiterPriceWithFallback(e) {
    try {
      return await (0, ts.fetchJupiterPrice)(e);
    } catch (n) {
      const r = '/jupiter/price';
      try {
        return (await this._apiClient.get(r, { params: e })).data;
      } catch (o) {
        throw (
          (console.error('Error fetching Jupiter price', o),
          new Error('Failed to fetch prices from both Jupiter and Birdeye APIs'))
        );
      }
    }
  }
  async getJupiterQuoteWithFallback(e) {
    try {
      return await (0, ns.createJupiterApiClient)({ basePath: Pt.JUP_V6_BASE_URL }).quoteGet(e);
    } catch (n) {
      const r = '/jupiter/quote';
      try {
        return (await this._apiClient.get(r, { params: e })).data;
      } catch (o) {
        throw (
          (console.error('Error fetching Jupiter quote', o),
          new Error('Failed to fetch quotes from Jupiter'))
        );
      }
    }
  }
  async getJupiterSwapInstructionsPostWithFallback(e) {
    try {
      return await (0, ns.createJupiterApiClient)({
        basePath: Pt.JUP_V6_BASE_URL,
      }).swapInstructionsPost({ swapRequest: e });
    } catch (n) {
      const r = '/jupiter/swapInstructionsPost';
      try {
        const o = JSON.stringify(e);
        return (
          await this._apiClient.post(r, o, { headers: { 'Content-Type': 'application/json' } })
        ).data;
      } catch (o) {
        throw (
          (console.error('Error fetching Jupiter quote', o),
          new Error('Failed to fetch quotes from Jupiter'))
        );
      }
    }
  }
  async getJupiterSwapPostWithFallback(e) {
    try {
      return await (0, ns.createJupiterApiClient)({ basePath: Pt.JUP_V6_BASE_URL }).swapPost({
        swapRequest: e,
      });
    } catch (n) {
      const r = '/jupiter/swapPost';
      try {
        const o = JSON.stringify(e);
        return (
          await this._apiClient.post(r, o, { headers: { 'Content-Type': 'application/json' } })
        ).data;
      } catch (o) {
        throw (
          (console.error('Error fetching Jupiter quote', o),
          new Error('Failed to fetch quotes from Jupiter'))
        );
      }
    }
  }
  async getExecutePerRoute(e) {
    const n = '/execute-per-route';
    try {
      return (await this._apiClient.get(n, { params: e })).data.data.signature;
    } catch (r) {
      console.error('Error fetching all routes', r);
      return;
    }
  }
  async simulateRouteAndGetNewSimulatedValuesRouteOutput(e) {
    const n = xe({}, e.routeOutput),
      o = [...(0, Wt.createAddExtraComputeUnitsTransaction)(8e5), ...e.routeOutput.ixsRouter],
      i = new bi.TransactionMessage({
        payerKey: e.executor,
        recentBlockhash: e.bh,
        instructions: o,
      }).compileToV0Message(e.routeOutput.lookupTableAccounts),
      u = new bi.VersionedTransaction(i);
    let d, f;
    if (!e.routeOutput.inputMintProgramOwner || !e.routeOutput.outputMintProgramOwner) {
      const _ = (0, Wt.getMintsProgramOwner)(this.connection, e.tokenIn),
        g = (0, Wt.getMintsProgramOwner)(this.connection, e.tokenOut);
      [d, f] = await Promise.all([_, g]);
    } else (d = e.routeOutput.inputMintProgramOwner), (f = e.routeOutput.outputMintProgramOwner);
    const s = await (0, Wt.simulateSwapWithATABalances)(
      this.connection,
      u,
      e.executor,
      e.tokenIn,
      e.tokenOut,
      d,
      f
    );
    if (s !== void 0 && s.outputToken !== null && s.inputToken !== null) {
      const _ = e.tokenOut.equals(Ol.NATIVE_MINT)
          ? s.outputToken.change.add(s.nativeChangeAmount)
          : s.outputToken.change,
        g = e.tokenIn.equals(Ol.NATIVE_MINT)
          ? s.inputToken.change.add(s.nativeChangeAmount)
          : s.inputToken.change;
      e.swapType === 'exactIn'
        ? (n.amountsExactIn.amountOutSimulated = _)
        : (n.amountsExactOut.amountInSimulated = g);
    }
    return { routeOutput: n, simulationResult: s };
  }
  async executeRoute(e) {
    if (e.router.routerType === 'per') return this.executePerRoute(e);
    if (e.router.routerType === 'jupiterZ') return this.executeJupierZRoute(e);
    {
      let n = e.router.ixsRouter.slice();
      e.computeBudgetInstructions &&
        e.computeBudgetInstructions.length > 0 &&
        ((n = (0, Wt.removeComputeBudgetIxns)(n)), n.unshift(...e.computeBudgetInstructions));
      const r = new bi.TransactionMessage({
          payerKey: e.userToExecute,
          recentBlockhash: e.recentBlockhash,
          instructions: n,
        }).compileToV0Message(e.router.lookupTableAccounts),
        o = new bi.VersionedTransaction(r),
        i = await e.signTransaction(o),
        u = await e.executeTransaction(i);
      return await e.confirmTransaction(u), u;
    }
  }
  async getClientSideRouteOutputSimulationAndPriceImpact(e, n, r, o) {
    const i = (0, gn.getAsyncDataFromApiRouteOutput)(e);
    return Promise.all(
      n.map(async (d) => {
        d = (0, gn.addAsyncDataToRouteOutput)(d, i);
        let f;
        return (
          r.withSimulation === void 0 || r.withSimulation === !0
            ? d.routerType === 'jupiterZ'
              ? ((f = d),
                r.swapType === 'exactIn'
                  ? (f.amountsExactIn.amountOutSimulated = f.amountsExactIn.amountOut)
                  : (f.amountsExactOut.amountInSimulated = f.amountsExactOut.amountIn),
                (f.simulationTimestamp = Date.now()))
              : (f = (
                  await this.simulateRouteAndGetNewSimulatedValuesRouteOutput({
                    routeOutput: d,
                    executor: r.executor,
                    tokenIn: r.tokenIn,
                    tokenOut: r.tokenOut,
                    swapType: r.swapType,
                    bh: o.blockhash,
                  })
                ).routeOutput)
            : (f = d),
          (0, gn.addPricesAndPriceImpactToRouteOutput)(r, f)
        );
      })
    );
  }
  addOrReplaceLimoLogsInstructionWithNextBest(e, n) {
    try {
      let r = new Rl.default(0),
        o = 0,
        i = new Rl.default(0),
        u = 0,
        d = -1;
      const f = (0, gn.getAsyncDataFromApiRouteOutput)(e);
      return (
        e.forEach((s, _) => {
          if (s.amountsExactIn.amountOutSimulated !== void 0) {
            const g = s.amountsExactIn.amountOutSimulated;
            g.gt(i)
              ? ((r = i), (o = u), (i = g), (u = (0, Pt.getRouterTypeID)(s.routerType)), (d = _))
              : g.gt(r) && g.lte(i) && ((r = g), (o = (0, Pt.getRouterTypeID)(s.routerType)));
          }
        }),
        e.forEach((s) => {
          (0, Ni.includeLimoLogs)(n.includeLimoLogs, s.routerType) &&
            ((s.ixsRouter = (0, Ni.removeLimoLogsIxns)(s.ixsRouter)),
            (s = (0, Ni.wrapLimoLogsAroundRoute)({
              route: s,
              params: n,
              limoClient: this.limoClient,
              inputTokenProgramOwner: f.inputMintProgramOwner,
              outputTokenProgramOwner: f.outputMintProgramOwner,
              nextBestAmountOutSimulated: r,
              nextBestRouterTypeId: o,
            })));
        }),
        e
      );
    } catch (r) {
      return e;
    }
  }
  async executePerRoute(e) {
    const n = e.router.transaction,
      r = [...n.signatures],
      o = await e.signTransaction(n);
    let i = '';
    for (const d of o.signatures) {
      let f = !0;
      for (const s of r)
        if ((0, Wt.compareUint8Arrays)(d, s)) {
          f = !1;
          break;
        }
      if (f) {
        i = BT.default.encode(d);
        break;
      }
    }
    if (i === '') throw new Error('User signature not found');
    if (e.router.perReferenceId === void 0) throw new Error('PER reference ID not found');
    const u = await this.getExecutePerRoute({
      userSignature: i,
      perReferenceId: e.router.perReferenceId,
    });
    if (!u) throw new Error('Failed to submit transaction');
    return await e.confirmTransaction(u), u;
  }
  async executeJupierZRoute(e) {
    const n = e.router.transaction;
    if (e.router.jupRequestId === void 0) throw new Error('Jupiter reference ID not found');
    const r = await e.signTransaction(n),
      o = ne.Buffer.from(r.serialize()).toString('base64'),
      i = await (0, ts.executeJupiterZTransaction)({
        signedTransaction: o,
        requestId: e.router.jupRequestId,
      });
    if (i.status !== 'Success' || !i.signature)
      throw new Error('Failed to submit Jupiter Z transaction');
    const u = i.signature;
    return await e.confirmTransaction(u), u;
  }
  getClientSideRouteOutputPromises(e, n) {
    const r = (0, Ci.filterArrayRouterTypes)(
      e.routerTypes,
      e.includeRfq !== void 0 ? e.includeRfq : !0
    );
    return this.routers
      .map((i) => {
        if ((0, Ci.isRequestedRouterType)(r, i.routerType))
          return (0, Wt.withTimeout)(i.route(e), n, () =>
            console.debug(
              'Router '.concat(i.routerType || 'unknown', ' timed out after ').concat(n, 'ms')
            )
          );
      })
      .filter((i) => i !== void 0);
  }
  getClientSideQuoteRouteOutputPromises(e, n) {
    const r = (0, Ci.filterArrayRouterTypes)(
      e.routerTypes,
      e.includeRfq !== void 0 ? e.includeRfq : !0
    );
    return this.routers
      .map((i) => {
        if ((0, Ci.isRequestedRouterType)(r, i.routerType))
          return (0, Wt.withTimeout)(i.quote(e), n, () =>
            console.debug(
              'Router '.concat(i.routerType || 'unknown', ' timed out after ').concat(n, 'ms')
            )
          );
      })
      .filter((i) => i !== void 0);
  }
  async processClientSideRouteOutput(e, n, r, o) {
    const i = n
        .filter((f) => Un.isValidRouteOutput(f) && !Un.shouldExcludeJupiterZRoute(f, r))
        .flat(),
      u = await this.getClientSideRouteOutputSimulationAndPriceImpact(e, i, r, o);
    let d = [];
    return (
      u.length > 0
        ? (e.push(...u),
          (0, Ni.includeLimoLogs)(r.includeLimoLogs)
            ? (d = this.addOrReplaceLimoLogsInstructionWithNextBest(e, r))
            : (d = e))
        : (d = e),
      d
    );
  }
  processClientSideQuoteRouteOutput(e, n, r) {
    const o = n
        .filter((d) => Un.isValidRouteOutput(d) && !Un.shouldExcludeJupiterZRoute(d, r))
        .flat(),
      i = (0, gn.getAsyncDataFromApiRouteOutput)(e),
      u = o.map(
        (d) => (
          (d = (0, gn.addAsyncDataToRouteOutput)(d, i)),
          (0, gn.addPricesAndPriceImpactToRouteOutput)(r, d)
        )
      );
    return e.push(...u), e;
  }
  filterRouterTypes(e) {
    return e && e.length > 0 ? e : this.allRouterTypes;
  }
}
ao.KswapSdk = Un;
var Ep = {};
(function (t) {
  var e =
      (T && T.__createBinding) ||
      (Object.create
        ? function (r, o, i, u) {
            u === void 0 && (u = i);
            var d = Object.getOwnPropertyDescriptor(o, i);
            (!d || ('get' in d ? !o.__esModule : d.writable || d.configurable)) &&
              (d = {
                enumerable: !0,
                get: function () {
                  return o[i];
                },
              }),
              Object.defineProperty(r, u, d);
          }
        : function (r, o, i, u) {
            u === void 0 && (u = i), (r[u] = o[i]);
          }),
    n =
      (T && T.__exportStar) ||
      function (r, o) {
        for (var i in r)
          i !== 'default' && !Object.prototype.hasOwnProperty.call(o, i) && e(o, r, i);
      };
  Object.defineProperty(t, '__esModule', { value: !0 }), n(Jr, t), n(Xr, t), n(Cn, t), n(nr, t);
})(Ep);
(function (t) {
  var e =
      (T && T.__createBinding) ||
      (Object.create
        ? function (r, o, i, u) {
            u === void 0 && (u = i);
            var d = Object.getOwnPropertyDescriptor(o, i);
            (!d || ('get' in d ? !o.__esModule : d.writable || d.configurable)) &&
              (d = {
                enumerable: !0,
                get: function () {
                  return o[i];
                },
              }),
              Object.defineProperty(r, u, d);
          }
        : function (r, o, i, u) {
            u === void 0 && (u = i), (r[u] = o[i]);
          }),
    n =
      (T && T.__exportStar) ||
      function (r, o) {
        for (var i in r)
          i !== 'default' && !Object.prototype.hasOwnProperty.call(o, i) && e(o, r, i);
      };
  Object.defineProperty(t, '__esModule', { value: !0 }),
    n(Yn, t),
    n(gt, t),
    n(Fs, t),
    n(ao, t),
    n(Ep, t);
})(Sl);
const UT = 'https://api.kamino.finance/kswap',
  fE = () => {
    const { web3client: t } = D_();
    return { kswapSdk: k_.useMemo(() => new Sl.KswapSdk(UT, t.connection), [t]) };
  };
export { fE as u };
//# sourceMappingURL=useKswapSdk-otbk_5aK.js.map
