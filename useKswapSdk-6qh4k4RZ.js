var Vp = Object.defineProperty,
  Wp = Object.defineProperties;
var qp = Object.getOwnPropertyDescriptors;
var ei = Object.getOwnPropertySymbols;
var rc = Object.prototype.hasOwnProperty,
  ic = Object.prototype.propertyIsEnumerable;
var co = (t, e, n) =>
    e in t ? Vp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
  xe = (t, e) => {
    for (var n in e || (e = {})) rc.call(e, n) && co(t, n, e[n]);
    if (ei) for (var n of ei(e)) ic.call(e, n) && co(t, n, e[n]);
    return t;
  },
  st = (t, e) => Wp(t, qp(e));
var oc = (t, e) => {
  var n = {};
  for (var r in t) rc.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && ei) for (var r of ei(t)) e.indexOf(r) < 0 && ic.call(t, r) && (n[r] = t[r]);
  return n;
};
var u = (t, e, n) => co(t, typeof e != 'symbol' ? e + '' : e, n);
import {
  b9 as b,
  bl as nt,
  bh as _e,
  ak as ie,
  bk as Ot,
  bf as or,
  bg as sr,
  bi as Pr,
  bj as zt,
  cS as Zc,
  cT as Mr,
  cU as me,
  P as Ke,
  B as Vt,
  cV as xo,
  bv as Pn,
  b as Pe,
  cW as zp,
  bm as Yp,
  cX as Xp,
  cY as sc,
  b7 as Qc,
  c8 as el,
  cZ as tl,
  c_ as Jp,
  c$ as Zp,
  d0 as kr,
  d1 as nl,
  d2 as rl,
  d3 as Qp,
  d4 as e_,
  d5 as gi,
  d6 as t_,
  d7 as n_,
  d8 as r_,
  d9 as i_,
  da as il,
  db as o_,
  dc as ol,
  dd as s_,
  r as a_,
} from './vendor-S4AjIOSE.js';
import { a as u_ } from './index-CroKpwmf.js';
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
      (t._sentryDebugIds[e] = '507797fd-9a90-4104-9cd2-31f548562cea'),
      (t._sentryDebugIdIdentifier = 'sentry-dbid-507797fd-9a90-4104-9cd2-31f548562cea'));
  } catch (n) {}
})();
var sl = {};
(function (t) {
  var a, _;
  var e =
    (b && b.__importDefault) ||
    function (h) {
      return h && h.__esModule ? h : { default: h };
    };
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.HashablePublicKey =
      t.PubkeyHashMap =
      t.PublicKeyMap =
      t.PublicKeySet =
      t.NULL_PUBKEY =
        void 0),
    (t.isNotNullPubkey = o);
  const n = _e,
    r = e(nt);
  t.NULL_PUBKEY = new n.PublicKey('nu11111111111111111111111111111111111111111');
  function o(h) {
    return h && !h.equals(t.NULL_PUBKEY) && !h.equals(n.PublicKey.default);
  }
  class i {
    constructor(m) {
      u(this, 'items', []);
      m.forEach((g) => this.add(g));
    }
    add(m) {
      this.contains(m) || this.items.push(m);
    }
    contains(m) {
      return this.items.some((g) => this.equals(g, m));
    }
    equals(m, g) {
      return m.equals(g);
    }
    isEmpty() {
      return this.items.length === 0;
    }
    toArray() {
      return this.items.slice();
    }
  }
  t.PublicKeySet = i;
  class c {
    constructor() {
      u(this, 'record', []);
    }
    set(m, g) {
      const R = this.findIndex(m);
      R !== -1 ? (this.record[R].value = g) : this.record.push({ key: m, value: g });
    }
    get(m) {
      const g = this.findIndex(m);
      return g !== -1 ? this.record[g].value : void 0;
    }
    has(m) {
      return this.findIndex(m) !== -1;
    }
    delete(m) {
      const g = this.findIndex(m);
      g !== -1 && this.record.splice(g, 1);
    }
    findIndex(m) {
      return this.record.findIndex((g) => g.key.equals(m));
    }
    clear() {
      this.record = [];
    }
    forEach(m) {
      this.record.forEach((g) => {
        m(g.value, g.key);
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
  t.PublicKeyMap = c;
  class d {
    constructor(m) {
      u(this, 'buckets');
      u(this, 'size');
      u(this, a, 'PubkeyHashMap');
      if (((this.buckets = new Map()), (this.size = 0), m)) for (const [g, R] of m) this.set(g, R);
    }
    *[((_ = Symbol.iterator), (a = Symbol.toStringTag), _)]() {
      for (const [, m] of this.buckets) for (const { key: g, value: R } of m) yield [g, R];
    }
    set(m, g) {
      const R = new p(m).hashCode(),
        w = this.buckets.get(R);
      if (!w) this.buckets.set(R, [{ key: m, value: g }]), this.size++;
      else {
        const N = w.find((P) => P.key.equals(m));
        N ? (N.value = g) : (w.push({ key: m, value: g }), this.size++);
      }
      return this;
    }
    get(m) {
      const g = new p(m).hashCode(),
        R = this.buckets.get(g);
      if (!R) return;
      const w = R.find((N) => N.key.equals(m));
      return w ? w.value : void 0;
    }
    has(m) {
      const g = new p(m).hashCode(),
        R = this.buckets.get(g);
      return R ? !!R.find((N) => N.key.equals(m)) : !1;
    }
    delete(m) {
      const g = new p(m).hashCode(),
        R = this.buckets.get(g);
      if (!R) return !1;
      const w = R.findIndex((N) => N.key.equals(m));
      return w === -1
        ? !1
        : (R.splice(w, 1), R.length === 0 && this.buckets.delete(g), this.size--, !0);
    }
    clear() {
      (this.buckets = new Map()), (this.size = 0);
    }
    isEmpty() {
      return this.size === 0;
    }
    forEach(m, g) {
      this.buckets.forEach((R) => {
        R.forEach((w) => {
          m(w.value, w.key, this);
        }, g);
      }, g);
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
  t.PubkeyHashMap = d;
  const A = class A extends n.PublicKey {
    constructor(m) {
      super(m);
    }
    hashCode() {
      let m = 13;
      return (m = m * 7 + this.getBN().clone().iuand(A.MASK).toNumber()), m;
    }
    getBN() {
      return this._bn;
    }
  };
  u(A, 'MASK', new r.default(1).shln(32).subn(1));
  let p = A;
  t.HashablePublicKey = p;
})(sl);
var ns = {},
  lo = {};
const c_ = '0.1.0',
  l_ = 'limo',
  d_ = [
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
      name: 'logUserSwapBalances',
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
        { name: 'eventAuthority', isMut: !1, isSigner: !1 },
        { name: 'program', isMut: !1, isSigner: !1 },
      ],
      args: [],
    },
  ],
  f_ = [
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
  p_ = [
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
  __ = [
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
      name: 'UserSwapBalances',
      fields: [
        { name: 'userLamports', type: 'u64', index: !1 },
        { name: 'inputTaBalance', type: 'u64', index: !1 },
        { name: 'outputTaBalance', type: 'u64', index: !1 },
      ],
    },
  ],
  h_ = [
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
  al = { version: c_, name: l_, instructions: d_, accounts: f_, types: p_, events: __, errors: h_ };
var fo = {},
  at = {},
  rs = {},
  is = {},
  qe = {};
(function (t) {
  Object.defineProperty(t, '__esModule', { value: !0 }), (t.PROGRAM_ID = t.PROGRAM_ID_CLI = void 0);
  const e = _e;
  (t.PROGRAM_ID_CLI = new e.PublicKey('LiMoM9rMhrdYrfzUCxQppvxCSG1FcrUK9G8uLq4A1GF')),
    (t.PROGRAM_ID = t.PROGRAM_ID_CLI);
})(qe);
Object.defineProperty(is, '__esModule', { value: !0 });
is.initializeGlobalConfig = A_;
const m_ = _e,
  g_ = qe;
function A_(t, e = g_.PROGRAM_ID) {
  const n = [
      { pubkey: t.adminAuthority, isSigner: !0, isWritable: !0 },
      { pubkey: t.pdaAuthority, isSigner: !1, isWritable: !0 },
      { pubkey: t.globalConfig, isSigner: !1, isWritable: !0 },
    ],
    o = ie.Buffer.from([113, 216, 122, 131, 225, 209, 22, 55]);
  return new m_.TransactionInstruction({ keys: n, programId: e, data: o });
}
var os = {};
Object.defineProperty(os, '__esModule', { value: !0 });
os.initializeVault = y_;
const O_ = _e,
  R_ = qe;
function y_(t, e = R_.PROGRAM_ID) {
  const n = [
      { pubkey: t.payer, isSigner: !0, isWritable: !0 },
      { pubkey: t.globalConfig, isSigner: !1, isWritable: !0 },
      { pubkey: t.pdaAuthority, isSigner: !1, isWritable: !1 },
      { pubkey: t.mint, isSigner: !1, isWritable: !1 },
      { pubkey: t.vault, isSigner: !1, isWritable: !0 },
      { pubkey: t.tokenProgram, isSigner: !1, isWritable: !1 },
      { pubkey: t.systemProgram, isSigner: !1, isWritable: !1 },
    ],
    o = ie.Buffer.from([48, 191, 163, 44, 71, 129, 63, 164]);
  return new O_.TransactionInstruction({ keys: n, programId: e, data: o });
}
var ul = {};
(function (t) {
  var e =
      (b && b.__createBinding) ||
      (Object.create
        ? function (p, a, _, A) {
            A === void 0 && (A = _);
            var h = Object.getOwnPropertyDescriptor(a, _);
            (!h || ('get' in h ? !a.__esModule : h.writable || h.configurable)) &&
              (h = {
                enumerable: !0,
                get: function () {
                  return a[_];
                },
              }),
              Object.defineProperty(p, A, h);
          }
        : function (p, a, _, A) {
            A === void 0 && (A = _), (p[A] = a[_]);
          }),
    n =
      (b && b.__setModuleDefault) ||
      (Object.create
        ? function (p, a) {
            Object.defineProperty(p, 'default', { enumerable: !0, value: a });
          }
        : function (p, a) {
            p.default = a;
          }),
    r =
      (b && b.__importStar) ||
      (function () {
        var p = function (a) {
          return (
            (p =
              Object.getOwnPropertyNames ||
              function (_) {
                var A = [];
                for (var h in _) Object.prototype.hasOwnProperty.call(_, h) && (A[A.length] = h);
                return A;
              }),
            p(a)
          );
        };
        return function (a) {
          if (a && a.__esModule) return a;
          var _ = {};
          if (a != null)
            for (var A = p(a), h = 0; h < A.length; h++) A[h] !== 'default' && e(_, a, A[h]);
          return n(_, a), _;
        };
      })();
  Object.defineProperty(t, '__esModule', { value: !0 }), (t.layout = void 0), (t.createOrder = d);
  const o = _e,
    i = r(Ot),
    c = qe;
  t.layout = i.struct([i.u64('inputAmount'), i.u64('outputAmount'), i.u8('orderType')]);
  function d(p, a, _ = c.PROGRAM_ID) {
    const A = [
        { pubkey: a.maker, isSigner: !0, isWritable: !0 },
        { pubkey: a.globalConfig, isSigner: !1, isWritable: !0 },
        { pubkey: a.pdaAuthority, isSigner: !1, isWritable: !1 },
        { pubkey: a.order, isSigner: !1, isWritable: !0 },
        { pubkey: a.inputMint, isSigner: !1, isWritable: !1 },
        { pubkey: a.outputMint, isSigner: !1, isWritable: !1 },
        { pubkey: a.makerAta, isSigner: !1, isWritable: !0 },
        { pubkey: a.inputVault, isSigner: !1, isWritable: !0 },
        { pubkey: a.inputTokenProgram, isSigner: !1, isWritable: !1 },
        { pubkey: a.outputTokenProgram, isSigner: !1, isWritable: !1 },
        { pubkey: a.systemProgram, isSigner: !1, isWritable: !1 },
        { pubkey: a.eventAuthority, isSigner: !1, isWritable: !1 },
        { pubkey: a.program, isSigner: !1, isWritable: !1 },
      ],
      h = ie.Buffer.from([141, 54, 37, 207, 237, 210, 250, 215]),
      m = ie.Buffer.alloc(1e3),
      g = t.layout.encode(
        { inputAmount: p.inputAmount, outputAmount: p.outputAmount, orderType: p.orderType },
        m
      ),
      R = ie.Buffer.concat([h, m]).slice(0, 8 + g);
    return new o.TransactionInstruction({ keys: A, programId: _, data: R });
  }
})(ul);
var ss = {};
Object.defineProperty(ss, '__esModule', { value: !0 });
ss.closeOrderAndClaimTip = I_;
const T_ = _e,
  E_ = qe;
function I_(t, e = E_.PROGRAM_ID) {
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
    o = ie.Buffer.from([244, 27, 12, 226, 45, 247, 230, 43]);
  return new T_.TransactionInstruction({ keys: n, programId: e, data: o });
}
var cl = {};
(function (t) {
  var e =
      (b && b.__createBinding) ||
      (Object.create
        ? function (p, a, _, A) {
            A === void 0 && (A = _);
            var h = Object.getOwnPropertyDescriptor(a, _);
            (!h || ('get' in h ? !a.__esModule : h.writable || h.configurable)) &&
              (h = {
                enumerable: !0,
                get: function () {
                  return a[_];
                },
              }),
              Object.defineProperty(p, A, h);
          }
        : function (p, a, _, A) {
            A === void 0 && (A = _), (p[A] = a[_]);
          }),
    n =
      (b && b.__setModuleDefault) ||
      (Object.create
        ? function (p, a) {
            Object.defineProperty(p, 'default', { enumerable: !0, value: a });
          }
        : function (p, a) {
            p.default = a;
          }),
    r =
      (b && b.__importStar) ||
      (function () {
        var p = function (a) {
          return (
            (p =
              Object.getOwnPropertyNames ||
              function (_) {
                var A = [];
                for (var h in _) Object.prototype.hasOwnProperty.call(_, h) && (A[A.length] = h);
                return A;
              }),
            p(a)
          );
        };
        return function (a) {
          if (a && a.__esModule) return a;
          var _ = {};
          if (a != null)
            for (var A = p(a), h = 0; h < A.length; h++) A[h] !== 'default' && e(_, a, A[h]);
          return n(_, a), _;
        };
      })();
  Object.defineProperty(t, '__esModule', { value: !0 }), (t.layout = void 0), (t.takeOrder = d);
  const o = _e,
    i = r(Ot),
    c = qe;
  t.layout = i.struct([
    i.u64('inputAmount'),
    i.u64('minOutputAmount'),
    i.u64('tipAmountPermissionlessTaking'),
  ]);
  function d(p, a, _ = c.PROGRAM_ID) {
    const A = [
        { pubkey: a.taker, isSigner: !0, isWritable: !0 },
        { pubkey: a.maker, isSigner: !1, isWritable: !0 },
        { pubkey: a.globalConfig, isSigner: !1, isWritable: !0 },
        { pubkey: a.pdaAuthority, isSigner: !1, isWritable: !0 },
        { pubkey: a.order, isSigner: !1, isWritable: !0 },
        { pubkey: a.inputMint, isSigner: !1, isWritable: !1 },
        { pubkey: a.outputMint, isSigner: !1, isWritable: !1 },
        { pubkey: a.inputVault, isSigner: !1, isWritable: !0 },
        { pubkey: a.takerInputAta, isSigner: !1, isWritable: !0 },
        { pubkey: a.takerOutputAta, isSigner: !1, isWritable: !0 },
        { pubkey: a.intermediaryOutputTokenAccount, isSigner: !1, isWritable: !0 },
        { pubkey: a.makerOutputAta, isSigner: !1, isWritable: !0 },
        { pubkey: a.expressRelay, isSigner: !1, isWritable: !1 },
        { pubkey: a.expressRelayMetadata, isSigner: !1, isWritable: !1 },
        { pubkey: a.sysvarInstructions, isSigner: !1, isWritable: !1 },
        { pubkey: a.permission, isSigner: !1, isWritable: !1 },
        { pubkey: a.configRouter, isSigner: !1, isWritable: !1 },
        { pubkey: a.inputTokenProgram, isSigner: !1, isWritable: !1 },
        { pubkey: a.outputTokenProgram, isSigner: !1, isWritable: !1 },
        { pubkey: a.rent, isSigner: !1, isWritable: !1 },
        { pubkey: a.systemProgram, isSigner: !1, isWritable: !1 },
        { pubkey: a.eventAuthority, isSigner: !1, isWritable: !1 },
        { pubkey: a.program, isSigner: !1, isWritable: !1 },
      ],
      h = ie.Buffer.from([163, 208, 20, 172, 223, 65, 255, 228]),
      m = ie.Buffer.alloc(1e3),
      g = t.layout.encode(
        {
          inputAmount: p.inputAmount,
          minOutputAmount: p.minOutputAmount,
          tipAmountPermissionlessTaking: p.tipAmountPermissionlessTaking,
        },
        m
      ),
      R = ie.Buffer.concat([h, m]).slice(0, 8 + g);
    return new o.TransactionInstruction({ keys: A, programId: _, data: R });
  }
})(cl);
var ll = {};
(function (t) {
  var e =
      (b && b.__createBinding) ||
      (Object.create
        ? function (p, a, _, A) {
            A === void 0 && (A = _);
            var h = Object.getOwnPropertyDescriptor(a, _);
            (!h || ('get' in h ? !a.__esModule : h.writable || h.configurable)) &&
              (h = {
                enumerable: !0,
                get: function () {
                  return a[_];
                },
              }),
              Object.defineProperty(p, A, h);
          }
        : function (p, a, _, A) {
            A === void 0 && (A = _), (p[A] = a[_]);
          }),
    n =
      (b && b.__setModuleDefault) ||
      (Object.create
        ? function (p, a) {
            Object.defineProperty(p, 'default', { enumerable: !0, value: a });
          }
        : function (p, a) {
            p.default = a;
          }),
    r =
      (b && b.__importStar) ||
      (function () {
        var p = function (a) {
          return (
            (p =
              Object.getOwnPropertyNames ||
              function (_) {
                var A = [];
                for (var h in _) Object.prototype.hasOwnProperty.call(_, h) && (A[A.length] = h);
                return A;
              }),
            p(a)
          );
        };
        return function (a) {
          if (a && a.__esModule) return a;
          var _ = {};
          if (a != null)
            for (var A = p(a), h = 0; h < A.length; h++) A[h] !== 'default' && e(_, a, A[h]);
          return n(_, a), _;
        };
      })();
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.layout = void 0),
    (t.flashTakeOrderStart = d);
  const o = _e,
    i = r(Ot),
    c = qe;
  t.layout = i.struct([
    i.u64('inputAmount'),
    i.u64('minOutputAmount'),
    i.u64('tipAmountPermissionlessTaking'),
  ]);
  function d(p, a, _ = c.PROGRAM_ID) {
    const A = [
        { pubkey: a.taker, isSigner: !0, isWritable: !0 },
        { pubkey: a.maker, isSigner: !1, isWritable: !0 },
        { pubkey: a.globalConfig, isSigner: !1, isWritable: !0 },
        { pubkey: a.pdaAuthority, isSigner: !1, isWritable: !0 },
        { pubkey: a.order, isSigner: !1, isWritable: !0 },
        { pubkey: a.inputMint, isSigner: !1, isWritable: !1 },
        { pubkey: a.outputMint, isSigner: !1, isWritable: !1 },
        { pubkey: a.inputVault, isSigner: !1, isWritable: !0 },
        { pubkey: a.takerInputAta, isSigner: !1, isWritable: !0 },
        { pubkey: a.takerOutputAta, isSigner: !1, isWritable: !0 },
        { pubkey: a.intermediaryOutputTokenAccount, isSigner: !1, isWritable: !0 },
        { pubkey: a.makerOutputAta, isSigner: !1, isWritable: !0 },
        { pubkey: a.expressRelay, isSigner: !1, isWritable: !1 },
        { pubkey: a.expressRelayMetadata, isSigner: !1, isWritable: !1 },
        { pubkey: a.sysvarInstructions, isSigner: !1, isWritable: !1 },
        { pubkey: a.permission, isSigner: !1, isWritable: !1 },
        { pubkey: a.configRouter, isSigner: !1, isWritable: !1 },
        { pubkey: a.inputTokenProgram, isSigner: !1, isWritable: !1 },
        { pubkey: a.outputTokenProgram, isSigner: !1, isWritable: !1 },
        { pubkey: a.systemProgram, isSigner: !1, isWritable: !1 },
        { pubkey: a.rent, isSigner: !1, isWritable: !1 },
        { pubkey: a.eventAuthority, isSigner: !1, isWritable: !1 },
        { pubkey: a.program, isSigner: !1, isWritable: !1 },
      ],
      h = ie.Buffer.from([126, 53, 176, 15, 39, 103, 97, 243]),
      m = ie.Buffer.alloc(1e3),
      g = t.layout.encode(
        {
          inputAmount: p.inputAmount,
          minOutputAmount: p.minOutputAmount,
          tipAmountPermissionlessTaking: p.tipAmountPermissionlessTaking,
        },
        m
      ),
      R = ie.Buffer.concat([h, m]).slice(0, 8 + g);
    return new o.TransactionInstruction({ keys: A, programId: _, data: R });
  }
})(ll);
var dl = {};
(function (t) {
  var e =
      (b && b.__createBinding) ||
      (Object.create
        ? function (p, a, _, A) {
            A === void 0 && (A = _);
            var h = Object.getOwnPropertyDescriptor(a, _);
            (!h || ('get' in h ? !a.__esModule : h.writable || h.configurable)) &&
              (h = {
                enumerable: !0,
                get: function () {
                  return a[_];
                },
              }),
              Object.defineProperty(p, A, h);
          }
        : function (p, a, _, A) {
            A === void 0 && (A = _), (p[A] = a[_]);
          }),
    n =
      (b && b.__setModuleDefault) ||
      (Object.create
        ? function (p, a) {
            Object.defineProperty(p, 'default', { enumerable: !0, value: a });
          }
        : function (p, a) {
            p.default = a;
          }),
    r =
      (b && b.__importStar) ||
      (function () {
        var p = function (a) {
          return (
            (p =
              Object.getOwnPropertyNames ||
              function (_) {
                var A = [];
                for (var h in _) Object.prototype.hasOwnProperty.call(_, h) && (A[A.length] = h);
                return A;
              }),
            p(a)
          );
        };
        return function (a) {
          if (a && a.__esModule) return a;
          var _ = {};
          if (a != null)
            for (var A = p(a), h = 0; h < A.length; h++) A[h] !== 'default' && e(_, a, A[h]);
          return n(_, a), _;
        };
      })();
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.layout = void 0),
    (t.flashTakeOrderEnd = d);
  const o = _e,
    i = r(Ot),
    c = qe;
  t.layout = i.struct([
    i.u64('inputAmount'),
    i.u64('minOutputAmount'),
    i.u64('tipAmountPermissionlessTaking'),
  ]);
  function d(p, a, _ = c.PROGRAM_ID) {
    const A = [
        { pubkey: a.taker, isSigner: !0, isWritable: !0 },
        { pubkey: a.maker, isSigner: !1, isWritable: !0 },
        { pubkey: a.globalConfig, isSigner: !1, isWritable: !0 },
        { pubkey: a.pdaAuthority, isSigner: !1, isWritable: !0 },
        { pubkey: a.order, isSigner: !1, isWritable: !0 },
        { pubkey: a.inputMint, isSigner: !1, isWritable: !1 },
        { pubkey: a.outputMint, isSigner: !1, isWritable: !1 },
        { pubkey: a.inputVault, isSigner: !1, isWritable: !0 },
        { pubkey: a.takerInputAta, isSigner: !1, isWritable: !0 },
        { pubkey: a.takerOutputAta, isSigner: !1, isWritable: !0 },
        { pubkey: a.intermediaryOutputTokenAccount, isSigner: !1, isWritable: !0 },
        { pubkey: a.makerOutputAta, isSigner: !1, isWritable: !0 },
        { pubkey: a.expressRelay, isSigner: !1, isWritable: !1 },
        { pubkey: a.expressRelayMetadata, isSigner: !1, isWritable: !1 },
        { pubkey: a.sysvarInstructions, isSigner: !1, isWritable: !1 },
        { pubkey: a.permission, isSigner: !1, isWritable: !1 },
        { pubkey: a.configRouter, isSigner: !1, isWritable: !1 },
        { pubkey: a.inputTokenProgram, isSigner: !1, isWritable: !1 },
        { pubkey: a.outputTokenProgram, isSigner: !1, isWritable: !1 },
        { pubkey: a.systemProgram, isSigner: !1, isWritable: !1 },
        { pubkey: a.rent, isSigner: !1, isWritable: !1 },
        { pubkey: a.eventAuthority, isSigner: !1, isWritable: !1 },
        { pubkey: a.program, isSigner: !1, isWritable: !1 },
      ],
      h = ie.Buffer.from([206, 242, 215, 187, 134, 33, 224, 148]),
      m = ie.Buffer.alloc(1e3),
      g = t.layout.encode(
        {
          inputAmount: p.inputAmount,
          minOutputAmount: p.minOutputAmount,
          tipAmountPermissionlessTaking: p.tipAmountPermissionlessTaking,
        },
        m
      ),
      R = ie.Buffer.concat([h, m]).slice(0, 8 + g);
    return new o.TransactionInstruction({ keys: A, programId: _, data: R });
  }
})(dl);
var fl = {};
(function (t) {
  var e =
      (b && b.__createBinding) ||
      (Object.create
        ? function (p, a, _, A) {
            A === void 0 && (A = _);
            var h = Object.getOwnPropertyDescriptor(a, _);
            (!h || ('get' in h ? !a.__esModule : h.writable || h.configurable)) &&
              (h = {
                enumerable: !0,
                get: function () {
                  return a[_];
                },
              }),
              Object.defineProperty(p, A, h);
          }
        : function (p, a, _, A) {
            A === void 0 && (A = _), (p[A] = a[_]);
          }),
    n =
      (b && b.__setModuleDefault) ||
      (Object.create
        ? function (p, a) {
            Object.defineProperty(p, 'default', { enumerable: !0, value: a });
          }
        : function (p, a) {
            p.default = a;
          }),
    r =
      (b && b.__importStar) ||
      (function () {
        var p = function (a) {
          return (
            (p =
              Object.getOwnPropertyNames ||
              function (_) {
                var A = [];
                for (var h in _) Object.prototype.hasOwnProperty.call(_, h) && (A[A.length] = h);
                return A;
              }),
            p(a)
          );
        };
        return function (a) {
          if (a && a.__esModule) return a;
          var _ = {};
          if (a != null)
            for (var A = p(a), h = 0; h < A.length; h++) A[h] !== 'default' && e(_, a, A[h]);
          return n(_, a), _;
        };
      })();
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.layout = void 0),
    (t.updateGlobalConfig = d);
  const o = _e,
    i = r(Ot),
    c = qe;
  t.layout = i.struct([i.u16('mode'), i.array(i.u8(), 128, 'value')]);
  function d(p, a, _ = c.PROGRAM_ID) {
    const A = [
        { pubkey: a.adminAuthority, isSigner: !0, isWritable: !0 },
        { pubkey: a.globalConfig, isSigner: !1, isWritable: !0 },
      ],
      h = ie.Buffer.from([164, 84, 130, 189, 111, 58, 250, 200]),
      m = ie.Buffer.alloc(1e3),
      g = t.layout.encode({ mode: p.mode, value: p.value }, m),
      R = ie.Buffer.concat([h, m]).slice(0, 8 + g);
    return new o.TransactionInstruction({ keys: A, programId: _, data: R });
  }
})(fl);
var as = {};
Object.defineProperty(as, '__esModule', { value: !0 });
as.updateGlobalConfigAdmin = N_;
const w_ = _e,
  b_ = qe;
function N_(t, e = b_.PROGRAM_ID) {
  const n = [
      { pubkey: t.adminAuthorityCached, isSigner: !0, isWritable: !1 },
      { pubkey: t.globalConfig, isSigner: !1, isWritable: !0 },
    ],
    o = ie.Buffer.from([184, 87, 23, 193, 156, 238, 175, 119]);
  return new w_.TransactionInstruction({ keys: n, programId: e, data: o });
}
var us = {};
Object.defineProperty(us, '__esModule', { value: !0 });
us.withdrawHostTip = v_;
const C_ = _e,
  S_ = qe;
function v_(t, e = S_.PROGRAM_ID) {
  const n = [
      { pubkey: t.adminAuthority, isSigner: !0, isWritable: !0 },
      { pubkey: t.globalConfig, isSigner: !1, isWritable: !0 },
      { pubkey: t.pdaAuthority, isSigner: !1, isWritable: !0 },
      { pubkey: t.systemProgram, isSigner: !1, isWritable: !1 },
    ],
    o = ie.Buffer.from([140, 246, 105, 165, 80, 85, 143, 18]);
  return new C_.TransactionInstruction({ keys: n, programId: e, data: o });
}
var cs = {};
Object.defineProperty(cs, '__esModule', { value: !0 });
cs.logUserSwapBalances = k_;
const P_ = _e,
  M_ = qe;
function k_(t, e = M_.PROGRAM_ID) {
  const n = [
      { pubkey: t.maker, isSigner: !0, isWritable: !1 },
      { pubkey: t.inputMint, isSigner: !1, isWritable: !1 },
      { pubkey: t.outputMint, isSigner: !1, isWritable: !1 },
      { pubkey: t.inputTa, isSigner: !1, isWritable: !1 },
      { pubkey: t.outputTa, isSigner: !1, isWritable: !1 },
      { pubkey: t.pdaReferrer, isSigner: !1, isWritable: !1 },
      { pubkey: t.eventAuthority, isSigner: !1, isWritable: !1 },
      { pubkey: t.program, isSigner: !1, isWritable: !1 },
    ],
    o = ie.Buffer.from([35, 118, 95, 77, 231, 46, 128, 38]);
  return new P_.TransactionInstruction({ keys: n, programId: e, data: o });
}
(function (t) {
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.logUserSwapBalances =
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
  var e = is;
  Object.defineProperty(t, 'initializeGlobalConfig', {
    enumerable: !0,
    get: function () {
      return e.initializeGlobalConfig;
    },
  });
  var n = os;
  Object.defineProperty(t, 'initializeVault', {
    enumerable: !0,
    get: function () {
      return n.initializeVault;
    },
  });
  var r = ul;
  Object.defineProperty(t, 'createOrder', {
    enumerable: !0,
    get: function () {
      return r.createOrder;
    },
  });
  var o = ss;
  Object.defineProperty(t, 'closeOrderAndClaimTip', {
    enumerable: !0,
    get: function () {
      return o.closeOrderAndClaimTip;
    },
  });
  var i = cl;
  Object.defineProperty(t, 'takeOrder', {
    enumerable: !0,
    get: function () {
      return i.takeOrder;
    },
  });
  var c = ll;
  Object.defineProperty(t, 'flashTakeOrderStart', {
    enumerable: !0,
    get: function () {
      return c.flashTakeOrderStart;
    },
  });
  var d = dl;
  Object.defineProperty(t, 'flashTakeOrderEnd', {
    enumerable: !0,
    get: function () {
      return d.flashTakeOrderEnd;
    },
  });
  var p = fl;
  Object.defineProperty(t, 'updateGlobalConfig', {
    enumerable: !0,
    get: function () {
      return p.updateGlobalConfig;
    },
  });
  var a = as;
  Object.defineProperty(t, 'updateGlobalConfigAdmin', {
    enumerable: !0,
    get: function () {
      return a.updateGlobalConfigAdmin;
    },
  });
  var _ = us;
  Object.defineProperty(t, 'withdrawHostTip', {
    enumerable: !0,
    get: function () {
      return _.withdrawHostTip;
    },
  });
  var A = cs;
  Object.defineProperty(t, 'logUserSwapBalances', {
    enumerable: !0,
    get: function () {
      return A.logUserSwapBalances;
    },
  });
})(rs);
var po = {},
  Ai = {},
  Y = {};
Object.defineProperty(Y, '__esModule', { value: !0 });
Y.AccountSysvarMismatch =
  Y.AccountNotAssociatedTokenAccount =
  Y.AccountNotProgramData =
  Y.AccountNotInitialized =
  Y.AccountNotSystemOwned =
  Y.AccountNotSigner =
  Y.InvalidProgramExecutable =
  Y.InvalidProgramId =
  Y.AccountOwnedByWrongProgram =
  Y.AccountNotMutable =
  Y.AccountNotEnoughKeys =
  Y.AccountDidNotSerialize =
  Y.AccountDidNotDeserialize =
  Y.AccountDiscriminatorMismatch =
  Y.AccountDiscriminatorNotFound =
  Y.AccountDiscriminatorAlreadySet =
  Y.RequireGteViolated =
  Y.RequireGtViolated =
  Y.RequireKeysNeqViolated =
  Y.RequireNeqViolated =
  Y.RequireKeysEqViolated =
  Y.RequireEqViolated =
  Y.RequireViolated =
  Y.ConstraintAccountIsNone =
  Y.ConstraintSpace =
  Y.ConstraintMintDecimals =
  Y.ConstraintMintFreezeAuthority =
  Y.ConstraintMintMintAuthority =
  Y.ConstraintTokenOwner =
  Y.ConstraintTokenMint =
  Y.ConstraintZero =
  Y.ConstraintAddress =
  Y.ConstraintClose =
  Y.ConstraintAssociatedInit =
  Y.ConstraintAssociated =
  Y.ConstraintState =
  Y.ConstraintExecutable =
  Y.ConstraintSeeds =
  Y.ConstraintRentExempt =
  Y.ConstraintOwner =
  Y.ConstraintRaw =
  Y.ConstraintSigner =
  Y.ConstraintHasOne =
  Y.ConstraintMut =
  Y.IdlInstructionInvalidProgram =
  Y.IdlInstructionStub =
  Y.InstructionDidNotSerialize =
  Y.InstructionDidNotDeserialize =
  Y.InstructionFallbackNotFound =
  Y.InstructionMissing =
    void 0;
Y.Deprecated =
  Y.DeclaredProgramIdMismatch =
  Y.AccountDuplicateReallocs =
  Y.AccountReallocExceedsLimit =
    void 0;
Y.fromCode = D_;
class ls extends Error {
  constructor(n) {
    super('100: 8 byte instruction identifier not provided');
    u(this, 'logs');
    u(this, 'code', 100);
    u(this, 'name', 'InstructionMissing');
    u(this, 'msg', '8 byte instruction identifier not provided');
    this.logs = n;
  }
}
u(ls, 'code', 100);
Y.InstructionMissing = ls;
class ds extends Error {
  constructor(n) {
    super('101: Fallback functions are not supported');
    u(this, 'logs');
    u(this, 'code', 101);
    u(this, 'name', 'InstructionFallbackNotFound');
    u(this, 'msg', 'Fallback functions are not supported');
    this.logs = n;
  }
}
u(ds, 'code', 101);
Y.InstructionFallbackNotFound = ds;
class fs extends Error {
  constructor(n) {
    super('102: The program could not deserialize the given instruction');
    u(this, 'logs');
    u(this, 'code', 102);
    u(this, 'name', 'InstructionDidNotDeserialize');
    u(this, 'msg', 'The program could not deserialize the given instruction');
    this.logs = n;
  }
}
u(fs, 'code', 102);
Y.InstructionDidNotDeserialize = fs;
class ps extends Error {
  constructor(n) {
    super('103: The program could not serialize the given instruction');
    u(this, 'logs');
    u(this, 'code', 103);
    u(this, 'name', 'InstructionDidNotSerialize');
    u(this, 'msg', 'The program could not serialize the given instruction');
    this.logs = n;
  }
}
u(ps, 'code', 103);
Y.InstructionDidNotSerialize = ps;
class _s extends Error {
  constructor(n) {
    super('1000: The program was compiled without idl instructions');
    u(this, 'logs');
    u(this, 'code', 1e3);
    u(this, 'name', 'IdlInstructionStub');
    u(this, 'msg', 'The program was compiled without idl instructions');
    this.logs = n;
  }
}
u(_s, 'code', 1e3);
Y.IdlInstructionStub = _s;
class hs extends Error {
  constructor(n) {
    super('1001: The transaction was given an invalid program for the IDL instruction');
    u(this, 'logs');
    u(this, 'code', 1001);
    u(this, 'name', 'IdlInstructionInvalidProgram');
    u(this, 'msg', 'The transaction was given an invalid program for the IDL instruction');
    this.logs = n;
  }
}
u(hs, 'code', 1001);
Y.IdlInstructionInvalidProgram = hs;
class ms extends Error {
  constructor(n) {
    super('2000: A mut constraint was violated');
    u(this, 'logs');
    u(this, 'code', 2e3);
    u(this, 'name', 'ConstraintMut');
    u(this, 'msg', 'A mut constraint was violated');
    this.logs = n;
  }
}
u(ms, 'code', 2e3);
Y.ConstraintMut = ms;
class gs extends Error {
  constructor(n) {
    super('2001: A has one constraint was violated');
    u(this, 'logs');
    u(this, 'code', 2001);
    u(this, 'name', 'ConstraintHasOne');
    u(this, 'msg', 'A has one constraint was violated');
    this.logs = n;
  }
}
u(gs, 'code', 2001);
Y.ConstraintHasOne = gs;
class As extends Error {
  constructor(n) {
    super('2002: A signer constraint was violated');
    u(this, 'logs');
    u(this, 'code', 2002);
    u(this, 'name', 'ConstraintSigner');
    u(this, 'msg', 'A signer constraint was violated');
    this.logs = n;
  }
}
u(As, 'code', 2002);
Y.ConstraintSigner = As;
class Os extends Error {
  constructor(n) {
    super('2003: A raw constraint was violated');
    u(this, 'logs');
    u(this, 'code', 2003);
    u(this, 'name', 'ConstraintRaw');
    u(this, 'msg', 'A raw constraint was violated');
    this.logs = n;
  }
}
u(Os, 'code', 2003);
Y.ConstraintRaw = Os;
class Rs extends Error {
  constructor(n) {
    super('2004: An owner constraint was violated');
    u(this, 'logs');
    u(this, 'code', 2004);
    u(this, 'name', 'ConstraintOwner');
    u(this, 'msg', 'An owner constraint was violated');
    this.logs = n;
  }
}
u(Rs, 'code', 2004);
Y.ConstraintOwner = Rs;
class ys extends Error {
  constructor(n) {
    super('2005: A rent exemption constraint was violated');
    u(this, 'logs');
    u(this, 'code', 2005);
    u(this, 'name', 'ConstraintRentExempt');
    u(this, 'msg', 'A rent exemption constraint was violated');
    this.logs = n;
  }
}
u(ys, 'code', 2005);
Y.ConstraintRentExempt = ys;
class Ts extends Error {
  constructor(n) {
    super('2006: A seeds constraint was violated');
    u(this, 'logs');
    u(this, 'code', 2006);
    u(this, 'name', 'ConstraintSeeds');
    u(this, 'msg', 'A seeds constraint was violated');
    this.logs = n;
  }
}
u(Ts, 'code', 2006);
Y.ConstraintSeeds = Ts;
class Es extends Error {
  constructor(n) {
    super('2007: An executable constraint was violated');
    u(this, 'logs');
    u(this, 'code', 2007);
    u(this, 'name', 'ConstraintExecutable');
    u(this, 'msg', 'An executable constraint was violated');
    this.logs = n;
  }
}
u(Es, 'code', 2007);
Y.ConstraintExecutable = Es;
class Is extends Error {
  constructor(n) {
    super('2008: Deprecated Error, feel free to replace with something else');
    u(this, 'logs');
    u(this, 'code', 2008);
    u(this, 'name', 'ConstraintState');
    u(this, 'msg', 'Deprecated Error, feel free to replace with something else');
    this.logs = n;
  }
}
u(Is, 'code', 2008);
Y.ConstraintState = Is;
class ws extends Error {
  constructor(n) {
    super('2009: An associated constraint was violated');
    u(this, 'logs');
    u(this, 'code', 2009);
    u(this, 'name', 'ConstraintAssociated');
    u(this, 'msg', 'An associated constraint was violated');
    this.logs = n;
  }
}
u(ws, 'code', 2009);
Y.ConstraintAssociated = ws;
class bs extends Error {
  constructor(n) {
    super('2010: An associated init constraint was violated');
    u(this, 'logs');
    u(this, 'code', 2010);
    u(this, 'name', 'ConstraintAssociatedInit');
    u(this, 'msg', 'An associated init constraint was violated');
    this.logs = n;
  }
}
u(bs, 'code', 2010);
Y.ConstraintAssociatedInit = bs;
class Ns extends Error {
  constructor(n) {
    super('2011: A close constraint was violated');
    u(this, 'logs');
    u(this, 'code', 2011);
    u(this, 'name', 'ConstraintClose');
    u(this, 'msg', 'A close constraint was violated');
    this.logs = n;
  }
}
u(Ns, 'code', 2011);
Y.ConstraintClose = Ns;
class Cs extends Error {
  constructor(n) {
    super('2012: An address constraint was violated');
    u(this, 'logs');
    u(this, 'code', 2012);
    u(this, 'name', 'ConstraintAddress');
    u(this, 'msg', 'An address constraint was violated');
    this.logs = n;
  }
}
u(Cs, 'code', 2012);
Y.ConstraintAddress = Cs;
class Ss extends Error {
  constructor(n) {
    super('2013: Expected zero account discriminant');
    u(this, 'logs');
    u(this, 'code', 2013);
    u(this, 'name', 'ConstraintZero');
    u(this, 'msg', 'Expected zero account discriminant');
    this.logs = n;
  }
}
u(Ss, 'code', 2013);
Y.ConstraintZero = Ss;
class vs extends Error {
  constructor(n) {
    super('2014: A token mint constraint was violated');
    u(this, 'logs');
    u(this, 'code', 2014);
    u(this, 'name', 'ConstraintTokenMint');
    u(this, 'msg', 'A token mint constraint was violated');
    this.logs = n;
  }
}
u(vs, 'code', 2014);
Y.ConstraintTokenMint = vs;
class Ps extends Error {
  constructor(n) {
    super('2015: A token owner constraint was violated');
    u(this, 'logs');
    u(this, 'code', 2015);
    u(this, 'name', 'ConstraintTokenOwner');
    u(this, 'msg', 'A token owner constraint was violated');
    this.logs = n;
  }
}
u(Ps, 'code', 2015);
Y.ConstraintTokenOwner = Ps;
class Ms extends Error {
  constructor(n) {
    super('2016: A mint mint authority constraint was violated');
    u(this, 'logs');
    u(this, 'code', 2016);
    u(this, 'name', 'ConstraintMintMintAuthority');
    u(this, 'msg', 'A mint mint authority constraint was violated');
    this.logs = n;
  }
}
u(Ms, 'code', 2016);
Y.ConstraintMintMintAuthority = Ms;
class ks extends Error {
  constructor(n) {
    super('2017: A mint freeze authority constraint was violated');
    u(this, 'logs');
    u(this, 'code', 2017);
    u(this, 'name', 'ConstraintMintFreezeAuthority');
    u(this, 'msg', 'A mint freeze authority constraint was violated');
    this.logs = n;
  }
}
u(ks, 'code', 2017);
Y.ConstraintMintFreezeAuthority = ks;
class Ds extends Error {
  constructor(n) {
    super('2018: A mint decimals constraint was violated');
    u(this, 'logs');
    u(this, 'code', 2018);
    u(this, 'name', 'ConstraintMintDecimals');
    u(this, 'msg', 'A mint decimals constraint was violated');
    this.logs = n;
  }
}
u(Ds, 'code', 2018);
Y.ConstraintMintDecimals = Ds;
class Bs extends Error {
  constructor(n) {
    super('2019: A space constraint was violated');
    u(this, 'logs');
    u(this, 'code', 2019);
    u(this, 'name', 'ConstraintSpace');
    u(this, 'msg', 'A space constraint was violated');
    this.logs = n;
  }
}
u(Bs, 'code', 2019);
Y.ConstraintSpace = Bs;
class xs extends Error {
  constructor(n) {
    super('2020: A required account for the constraint is None');
    u(this, 'logs');
    u(this, 'code', 2020);
    u(this, 'name', 'ConstraintAccountIsNone');
    u(this, 'msg', 'A required account for the constraint is None');
    this.logs = n;
  }
}
u(xs, 'code', 2020);
Y.ConstraintAccountIsNone = xs;
class Us extends Error {
  constructor(n) {
    super('2500: A require expression was violated');
    u(this, 'logs');
    u(this, 'code', 2500);
    u(this, 'name', 'RequireViolated');
    u(this, 'msg', 'A require expression was violated');
    this.logs = n;
  }
}
u(Us, 'code', 2500);
Y.RequireViolated = Us;
class Ls extends Error {
  constructor(n) {
    super('2501: A require_eq expression was violated');
    u(this, 'logs');
    u(this, 'code', 2501);
    u(this, 'name', 'RequireEqViolated');
    u(this, 'msg', 'A require_eq expression was violated');
    this.logs = n;
  }
}
u(Ls, 'code', 2501);
Y.RequireEqViolated = Ls;
class $s extends Error {
  constructor(n) {
    super('2502: A require_keys_eq expression was violated');
    u(this, 'logs');
    u(this, 'code', 2502);
    u(this, 'name', 'RequireKeysEqViolated');
    u(this, 'msg', 'A require_keys_eq expression was violated');
    this.logs = n;
  }
}
u($s, 'code', 2502);
Y.RequireKeysEqViolated = $s;
class Hs extends Error {
  constructor(n) {
    super('2503: A require_neq expression was violated');
    u(this, 'logs');
    u(this, 'code', 2503);
    u(this, 'name', 'RequireNeqViolated');
    u(this, 'msg', 'A require_neq expression was violated');
    this.logs = n;
  }
}
u(Hs, 'code', 2503);
Y.RequireNeqViolated = Hs;
class js extends Error {
  constructor(n) {
    super('2504: A require_keys_neq expression was violated');
    u(this, 'logs');
    u(this, 'code', 2504);
    u(this, 'name', 'RequireKeysNeqViolated');
    u(this, 'msg', 'A require_keys_neq expression was violated');
    this.logs = n;
  }
}
u(js, 'code', 2504);
Y.RequireKeysNeqViolated = js;
class Gs extends Error {
  constructor(n) {
    super('2505: A require_gt expression was violated');
    u(this, 'logs');
    u(this, 'code', 2505);
    u(this, 'name', 'RequireGtViolated');
    u(this, 'msg', 'A require_gt expression was violated');
    this.logs = n;
  }
}
u(Gs, 'code', 2505);
Y.RequireGtViolated = Gs;
class Fs extends Error {
  constructor(n) {
    super('2506: A require_gte expression was violated');
    u(this, 'logs');
    u(this, 'code', 2506);
    u(this, 'name', 'RequireGteViolated');
    u(this, 'msg', 'A require_gte expression was violated');
    this.logs = n;
  }
}
u(Fs, 'code', 2506);
Y.RequireGteViolated = Fs;
class Ks extends Error {
  constructor(n) {
    super('3000: The account discriminator was already set on this account');
    u(this, 'logs');
    u(this, 'code', 3e3);
    u(this, 'name', 'AccountDiscriminatorAlreadySet');
    u(this, 'msg', 'The account discriminator was already set on this account');
    this.logs = n;
  }
}
u(Ks, 'code', 3e3);
Y.AccountDiscriminatorAlreadySet = Ks;
class Vs extends Error {
  constructor(n) {
    super('3001: No 8 byte discriminator was found on the account');
    u(this, 'logs');
    u(this, 'code', 3001);
    u(this, 'name', 'AccountDiscriminatorNotFound');
    u(this, 'msg', 'No 8 byte discriminator was found on the account');
    this.logs = n;
  }
}
u(Vs, 'code', 3001);
Y.AccountDiscriminatorNotFound = Vs;
class Ws extends Error {
  constructor(n) {
    super('3002: 8 byte discriminator did not match what was expected');
    u(this, 'logs');
    u(this, 'code', 3002);
    u(this, 'name', 'AccountDiscriminatorMismatch');
    u(this, 'msg', '8 byte discriminator did not match what was expected');
    this.logs = n;
  }
}
u(Ws, 'code', 3002);
Y.AccountDiscriminatorMismatch = Ws;
class qs extends Error {
  constructor(n) {
    super('3003: Failed to deserialize the account');
    u(this, 'logs');
    u(this, 'code', 3003);
    u(this, 'name', 'AccountDidNotDeserialize');
    u(this, 'msg', 'Failed to deserialize the account');
    this.logs = n;
  }
}
u(qs, 'code', 3003);
Y.AccountDidNotDeserialize = qs;
class zs extends Error {
  constructor(n) {
    super('3004: Failed to serialize the account');
    u(this, 'logs');
    u(this, 'code', 3004);
    u(this, 'name', 'AccountDidNotSerialize');
    u(this, 'msg', 'Failed to serialize the account');
    this.logs = n;
  }
}
u(zs, 'code', 3004);
Y.AccountDidNotSerialize = zs;
class Ys extends Error {
  constructor(n) {
    super('3005: Not enough account keys given to the instruction');
    u(this, 'logs');
    u(this, 'code', 3005);
    u(this, 'name', 'AccountNotEnoughKeys');
    u(this, 'msg', 'Not enough account keys given to the instruction');
    this.logs = n;
  }
}
u(Ys, 'code', 3005);
Y.AccountNotEnoughKeys = Ys;
class Xs extends Error {
  constructor(n) {
    super('3006: The given account is not mutable');
    u(this, 'logs');
    u(this, 'code', 3006);
    u(this, 'name', 'AccountNotMutable');
    u(this, 'msg', 'The given account is not mutable');
    this.logs = n;
  }
}
u(Xs, 'code', 3006);
Y.AccountNotMutable = Xs;
class Js extends Error {
  constructor(n) {
    super('3007: The given account is owned by a different program than expected');
    u(this, 'logs');
    u(this, 'code', 3007);
    u(this, 'name', 'AccountOwnedByWrongProgram');
    u(this, 'msg', 'The given account is owned by a different program than expected');
    this.logs = n;
  }
}
u(Js, 'code', 3007);
Y.AccountOwnedByWrongProgram = Js;
class Zs extends Error {
  constructor(n) {
    super('3008: Program ID was not as expected');
    u(this, 'logs');
    u(this, 'code', 3008);
    u(this, 'name', 'InvalidProgramId');
    u(this, 'msg', 'Program ID was not as expected');
    this.logs = n;
  }
}
u(Zs, 'code', 3008);
Y.InvalidProgramId = Zs;
class Qs extends Error {
  constructor(n) {
    super('3009: Program account is not executable');
    u(this, 'logs');
    u(this, 'code', 3009);
    u(this, 'name', 'InvalidProgramExecutable');
    u(this, 'msg', 'Program account is not executable');
    this.logs = n;
  }
}
u(Qs, 'code', 3009);
Y.InvalidProgramExecutable = Qs;
class ea extends Error {
  constructor(n) {
    super('3010: The given account did not sign');
    u(this, 'logs');
    u(this, 'code', 3010);
    u(this, 'name', 'AccountNotSigner');
    u(this, 'msg', 'The given account did not sign');
    this.logs = n;
  }
}
u(ea, 'code', 3010);
Y.AccountNotSigner = ea;
class ta extends Error {
  constructor(n) {
    super('3011: The given account is not owned by the system program');
    u(this, 'logs');
    u(this, 'code', 3011);
    u(this, 'name', 'AccountNotSystemOwned');
    u(this, 'msg', 'The given account is not owned by the system program');
    this.logs = n;
  }
}
u(ta, 'code', 3011);
Y.AccountNotSystemOwned = ta;
class na extends Error {
  constructor(n) {
    super('3012: The program expected this account to be already initialized');
    u(this, 'logs');
    u(this, 'code', 3012);
    u(this, 'name', 'AccountNotInitialized');
    u(this, 'msg', 'The program expected this account to be already initialized');
    this.logs = n;
  }
}
u(na, 'code', 3012);
Y.AccountNotInitialized = na;
class ra extends Error {
  constructor(n) {
    super('3013: The given account is not a program data account');
    u(this, 'logs');
    u(this, 'code', 3013);
    u(this, 'name', 'AccountNotProgramData');
    u(this, 'msg', 'The given account is not a program data account');
    this.logs = n;
  }
}
u(ra, 'code', 3013);
Y.AccountNotProgramData = ra;
class ia extends Error {
  constructor(n) {
    super('3014: The given account is not the associated token account');
    u(this, 'logs');
    u(this, 'code', 3014);
    u(this, 'name', 'AccountNotAssociatedTokenAccount');
    u(this, 'msg', 'The given account is not the associated token account');
    this.logs = n;
  }
}
u(ia, 'code', 3014);
Y.AccountNotAssociatedTokenAccount = ia;
class oa extends Error {
  constructor(n) {
    super('3015: The given public key does not match the required sysvar');
    u(this, 'logs');
    u(this, 'code', 3015);
    u(this, 'name', 'AccountSysvarMismatch');
    u(this, 'msg', 'The given public key does not match the required sysvar');
    this.logs = n;
  }
}
u(oa, 'code', 3015);
Y.AccountSysvarMismatch = oa;
class sa extends Error {
  constructor(n) {
    super('3016: The account reallocation exceeds the MAX_PERMITTED_DATA_INCREASE limit');
    u(this, 'logs');
    u(this, 'code', 3016);
    u(this, 'name', 'AccountReallocExceedsLimit');
    u(this, 'msg', 'The account reallocation exceeds the MAX_PERMITTED_DATA_INCREASE limit');
    this.logs = n;
  }
}
u(sa, 'code', 3016);
Y.AccountReallocExceedsLimit = sa;
class aa extends Error {
  constructor(n) {
    super('3017: The account was duplicated for more than one reallocation');
    u(this, 'logs');
    u(this, 'code', 3017);
    u(this, 'name', 'AccountDuplicateReallocs');
    u(this, 'msg', 'The account was duplicated for more than one reallocation');
    this.logs = n;
  }
}
u(aa, 'code', 3017);
Y.AccountDuplicateReallocs = aa;
class ua extends Error {
  constructor(n) {
    super('4100: The declared program id does not match the actual program id');
    u(this, 'logs');
    u(this, 'code', 4100);
    u(this, 'name', 'DeclaredProgramIdMismatch');
    u(this, 'msg', 'The declared program id does not match the actual program id');
    this.logs = n;
  }
}
u(ua, 'code', 4100);
Y.DeclaredProgramIdMismatch = ua;
class ca extends Error {
  constructor(n) {
    super('5000: The API being used is deprecated and should no longer be used');
    u(this, 'logs');
    u(this, 'code', 5e3);
    u(this, 'name', 'Deprecated');
    u(this, 'msg', 'The API being used is deprecated and should no longer be used');
    this.logs = n;
  }
}
u(ca, 'code', 5e3);
Y.Deprecated = ca;
function D_(t, e) {
  switch (t) {
    case 100:
      return new ls(e);
    case 101:
      return new ds(e);
    case 102:
      return new fs(e);
    case 103:
      return new ps(e);
    case 1e3:
      return new _s(e);
    case 1001:
      return new hs(e);
    case 2e3:
      return new ms(e);
    case 2001:
      return new gs(e);
    case 2002:
      return new As(e);
    case 2003:
      return new Os(e);
    case 2004:
      return new Rs(e);
    case 2005:
      return new ys(e);
    case 2006:
      return new Ts(e);
    case 2007:
      return new Es(e);
    case 2008:
      return new Is(e);
    case 2009:
      return new ws(e);
    case 2010:
      return new bs(e);
    case 2011:
      return new Ns(e);
    case 2012:
      return new Cs(e);
    case 2013:
      return new Ss(e);
    case 2014:
      return new vs(e);
    case 2015:
      return new Ps(e);
    case 2016:
      return new Ms(e);
    case 2017:
      return new ks(e);
    case 2018:
      return new Ds(e);
    case 2019:
      return new Bs(e);
    case 2020:
      return new xs(e);
    case 2500:
      return new Us(e);
    case 2501:
      return new Ls(e);
    case 2502:
      return new $s(e);
    case 2503:
      return new Hs(e);
    case 2504:
      return new js(e);
    case 2505:
      return new Gs(e);
    case 2506:
      return new Fs(e);
    case 3e3:
      return new Ks(e);
    case 3001:
      return new Vs(e);
    case 3002:
      return new Ws(e);
    case 3003:
      return new qs(e);
    case 3004:
      return new zs(e);
    case 3005:
      return new Ys(e);
    case 3006:
      return new Xs(e);
    case 3007:
      return new Js(e);
    case 3008:
      return new Zs(e);
    case 3009:
      return new Qs(e);
    case 3010:
      return new ea(e);
    case 3011:
      return new ta(e);
    case 3012:
      return new na(e);
    case 3013:
      return new ra(e);
    case 3014:
      return new ia(e);
    case 3015:
      return new oa(e);
    case 3016:
      return new sa(e);
    case 3017:
      return new aa(e);
    case 4100:
      return new ua(e);
    case 5e3:
      return new ca(e);
  }
  return null;
}
var Q = {};
Object.defineProperty(Q, '__esModule', { value: !0 });
Q.InvalidTokenAuthority =
  Q.InvalidTokenMint =
  Q.InvalidAccount =
  Q.InvalidTokenAccountOwner =
  Q.UninitializedTokenAccount =
  Q.OrderTypeInvalid =
  Q.InvalidTokenAccount =
  Q.UnsupportedTokenExtension =
  Q.OrderSameMint =
  Q.NotEnoughTimePassedSinceLastUpdate =
  Q.NotEnoughBalanceForRent =
  Q.IntermediaryOutputTokenAccountRequired =
  Q.MakerOutputAtaRequired =
  Q.InvalidAtaAddress =
  Q.PermissionDoesNotMatchOrder =
  Q.PermissionRequiredPermissionlessNotEnabled =
  Q.OrderInputAmountTooLarge =
  Q.OrderTakingBlocked =
  Q.CreatingNewOrdersBlocked =
  Q.EmergencyModeEnabled =
  Q.OrderNotWithinFlashOperation =
  Q.FlashIxsArgsMismatch =
  Q.FlashIxsAccountMismatch =
  Q.FlashIxsNotStarted =
  Q.FlashIxsNotEnded =
  Q.FlashTxWithUnexpectedIxs =
  Q.FlashTakeOrderBlocked =
  Q.CPINotAllowed =
  Q.OrderWithinFlashOperation =
  Q.InvalidHostTipBalance =
  Q.InvalidTipTransferAmount =
  Q.InvalidTipBalance =
  Q.IntegerOverflow =
  Q.InvalidHostFee =
  Q.OrderOutputAmountInvalid =
  Q.OrderInputAmountInvalid =
  Q.MathOverflow =
  Q.InvalidFlag =
  Q.OutOfRangeIntegralConversion =
  Q.InvalidOrderOwner =
  Q.InvalidConfigOption =
  Q.InvalidPdaAuthority =
  Q.InvalidAdminAuthority =
  Q.OrderNotActive =
  Q.OrderCanNotBeCanceled =
    void 0;
Q.fromCode = B_;
class la extends Error {
  constructor(n) {
    super("6000: Order can't be canceled");
    u(this, 'logs');
    u(this, 'code', 6e3);
    u(this, 'name', 'OrderCanNotBeCanceled');
    u(this, 'msg', "Order can't be canceled");
    this.logs = n;
  }
}
u(la, 'code', 6e3);
Q.OrderCanNotBeCanceled = la;
class da extends Error {
  constructor(n) {
    super('6001: Order not active');
    u(this, 'logs');
    u(this, 'code', 6001);
    u(this, 'name', 'OrderNotActive');
    u(this, 'msg', 'Order not active');
    this.logs = n;
  }
}
u(da, 'code', 6001);
Q.OrderNotActive = da;
class fa extends Error {
  constructor(n) {
    super('6002: Invalid admin authority');
    u(this, 'logs');
    u(this, 'code', 6002);
    u(this, 'name', 'InvalidAdminAuthority');
    u(this, 'msg', 'Invalid admin authority');
    this.logs = n;
  }
}
u(fa, 'code', 6002);
Q.InvalidAdminAuthority = fa;
class pa extends Error {
  constructor(n) {
    super('6003: Invalid pda authority');
    u(this, 'logs');
    u(this, 'code', 6003);
    u(this, 'name', 'InvalidPdaAuthority');
    u(this, 'msg', 'Invalid pda authority');
    this.logs = n;
  }
}
u(pa, 'code', 6003);
Q.InvalidPdaAuthority = pa;
class _a extends Error {
  constructor(n) {
    super('6004: Invalid config option');
    u(this, 'logs');
    u(this, 'code', 6004);
    u(this, 'name', 'InvalidConfigOption');
    u(this, 'msg', 'Invalid config option');
    this.logs = n;
  }
}
u(_a, 'code', 6004);
Q.InvalidConfigOption = _a;
class ha extends Error {
  constructor(n) {
    super('6005: Order owner account is not the order owner');
    u(this, 'logs');
    u(this, 'code', 6005);
    u(this, 'name', 'InvalidOrderOwner');
    u(this, 'msg', 'Order owner account is not the order owner');
    this.logs = n;
  }
}
u(ha, 'code', 6005);
Q.InvalidOrderOwner = ha;
class ma extends Error {
  constructor(n) {
    super('6006: Out of range integral conversion attempted');
    u(this, 'logs');
    u(this, 'code', 6006);
    u(this, 'name', 'OutOfRangeIntegralConversion');
    u(this, 'msg', 'Out of range integral conversion attempted');
    this.logs = n;
  }
}
u(ma, 'code', 6006);
Q.OutOfRangeIntegralConversion = ma;
class ga extends Error {
  constructor(n) {
    super('6007: Invalid boolean flag, valid values are 0 and 1');
    u(this, 'logs');
    u(this, 'code', 6007);
    u(this, 'name', 'InvalidFlag');
    u(this, 'msg', 'Invalid boolean flag, valid values are 0 and 1');
    this.logs = n;
  }
}
u(ga, 'code', 6007);
Q.InvalidFlag = ga;
class Aa extends Error {
  constructor(n) {
    super('6008: Mathematical operation with overflow');
    u(this, 'logs');
    u(this, 'code', 6008);
    u(this, 'name', 'MathOverflow');
    u(this, 'msg', 'Mathematical operation with overflow');
    this.logs = n;
  }
}
u(Aa, 'code', 6008);
Q.MathOverflow = Aa;
class Oa extends Error {
  constructor(n) {
    super('6009: Order input amount invalid');
    u(this, 'logs');
    u(this, 'code', 6009);
    u(this, 'name', 'OrderInputAmountInvalid');
    u(this, 'msg', 'Order input amount invalid');
    this.logs = n;
  }
}
u(Oa, 'code', 6009);
Q.OrderInputAmountInvalid = Oa;
class Ra extends Error {
  constructor(n) {
    super('6010: Order output amount invalid');
    u(this, 'logs');
    u(this, 'code', 6010);
    u(this, 'name', 'OrderOutputAmountInvalid');
    u(this, 'msg', 'Order output amount invalid');
    this.logs = n;
  }
}
u(Ra, 'code', 6010);
Q.OrderOutputAmountInvalid = Ra;
class ya extends Error {
  constructor(n) {
    super('6011: Host fee bps must be between 0 and 10000');
    u(this, 'logs');
    u(this, 'code', 6011);
    u(this, 'name', 'InvalidHostFee');
    u(this, 'msg', 'Host fee bps must be between 0 and 10000');
    this.logs = n;
  }
}
u(ya, 'code', 6011);
Q.InvalidHostFee = ya;
class Ta extends Error {
  constructor(n) {
    super('6012: Conversion between integers failed');
    u(this, 'logs');
    u(this, 'code', 6012);
    u(this, 'name', 'IntegerOverflow');
    u(this, 'msg', 'Conversion between integers failed');
    this.logs = n;
  }
}
u(Ta, 'code', 6012);
Q.IntegerOverflow = Ta;
class Ea extends Error {
  constructor(n) {
    super('6013: Tip balance less than accounted tip');
    u(this, 'logs');
    u(this, 'code', 6013);
    u(this, 'name', 'InvalidTipBalance');
    u(this, 'msg', 'Tip balance less than accounted tip');
    this.logs = n;
  }
}
u(Ea, 'code', 6013);
Q.InvalidTipBalance = Ea;
class Ia extends Error {
  constructor(n) {
    super('6014: Tip transfer amount is less than expected');
    u(this, 'logs');
    u(this, 'code', 6014);
    u(this, 'name', 'InvalidTipTransferAmount');
    u(this, 'msg', 'Tip transfer amount is less than expected');
    this.logs = n;
  }
}
u(Ia, 'code', 6014);
Q.InvalidTipTransferAmount = Ia;
class wa extends Error {
  constructor(n) {
    super('6015: Host tup amount is less than accounted for');
    u(this, 'logs');
    u(this, 'code', 6015);
    u(this, 'name', 'InvalidHostTipBalance');
    u(this, 'msg', 'Host tup amount is less than accounted for');
    this.logs = n;
  }
}
u(wa, 'code', 6015);
Q.InvalidHostTipBalance = wa;
class ba extends Error {
  constructor(n) {
    super('6016: Order within flash operation - all otehr actions are blocked');
    u(this, 'logs');
    u(this, 'code', 6016);
    u(this, 'name', 'OrderWithinFlashOperation');
    u(this, 'msg', 'Order within flash operation - all otehr actions are blocked');
    this.logs = n;
  }
}
u(ba, 'code', 6016);
Q.OrderWithinFlashOperation = ba;
class Na extends Error {
  constructor(n) {
    super('6017: CPI not allowed');
    u(this, 'logs');
    u(this, 'code', 6017);
    u(this, 'name', 'CPINotAllowed');
    u(this, 'msg', 'CPI not allowed');
    this.logs = n;
  }
}
u(Na, 'code', 6017);
Q.CPINotAllowed = Na;
class Ca extends Error {
  constructor(n) {
    super('6018: Flash take_order is blocked');
    u(this, 'logs');
    u(this, 'code', 6018);
    u(this, 'name', 'FlashTakeOrderBlocked');
    u(this, 'msg', 'Flash take_order is blocked');
    this.logs = n;
  }
}
u(Ca, 'code', 6018);
Q.FlashTakeOrderBlocked = Ca;
class Sa extends Error {
  constructor(n) {
    super(
      '6019: Some unexpected instructions are present in the tx. Either before or after the flash ixs, or some ix target the same program between'
    );
    u(this, 'logs');
    u(this, 'code', 6019);
    u(this, 'name', 'FlashTxWithUnexpectedIxs');
    u(
      this,
      'msg',
      'Some unexpected instructions are present in the tx. Either before or after the flash ixs, or some ix target the same program between'
    );
    this.logs = n;
  }
}
u(Sa, 'code', 6019);
Q.FlashTxWithUnexpectedIxs = Sa;
class va extends Error {
  constructor(n) {
    super('6020: Flash ixs initiated without the closing ix in the transaction');
    u(this, 'logs');
    u(this, 'code', 6020);
    u(this, 'name', 'FlashIxsNotEnded');
    u(this, 'msg', 'Flash ixs initiated without the closing ix in the transaction');
    this.logs = n;
  }
}
u(va, 'code', 6020);
Q.FlashIxsNotEnded = va;
class Pa extends Error {
  constructor(n) {
    super('6021: Flash ixs ended without the starting ix in the transaction');
    u(this, 'logs');
    u(this, 'code', 6021);
    u(this, 'name', 'FlashIxsNotStarted');
    u(this, 'msg', 'Flash ixs ended without the starting ix in the transaction');
    this.logs = n;
  }
}
u(Pa, 'code', 6021);
Q.FlashIxsNotStarted = Pa;
class Ma extends Error {
  constructor(n) {
    super('6022: Some accounts differ between the two flash ixs');
    u(this, 'logs');
    u(this, 'code', 6022);
    u(this, 'name', 'FlashIxsAccountMismatch');
    u(this, 'msg', 'Some accounts differ between the two flash ixs');
    this.logs = n;
  }
}
u(Ma, 'code', 6022);
Q.FlashIxsAccountMismatch = Ma;
class ka extends Error {
  constructor(n) {
    super('6023: Some args differ between the two flash ixs');
    u(this, 'logs');
    u(this, 'code', 6023);
    u(this, 'name', 'FlashIxsArgsMismatch');
    u(this, 'msg', 'Some args differ between the two flash ixs');
    this.logs = n;
  }
}
u(ka, 'code', 6023);
Q.FlashIxsArgsMismatch = ka;
class Da extends Error {
  constructor(n) {
    super('6024: Order is not within flash operation');
    u(this, 'logs');
    u(this, 'code', 6024);
    u(this, 'name', 'OrderNotWithinFlashOperation');
    u(this, 'msg', 'Order is not within flash operation');
    this.logs = n;
  }
}
u(Da, 'code', 6024);
Q.OrderNotWithinFlashOperation = Da;
class Ba extends Error {
  constructor(n) {
    super('6025: Emergency mode is enabled');
    u(this, 'logs');
    u(this, 'code', 6025);
    u(this, 'name', 'EmergencyModeEnabled');
    u(this, 'msg', 'Emergency mode is enabled');
    this.logs = n;
  }
}
u(Ba, 'code', 6025);
Q.EmergencyModeEnabled = Ba;
class xa extends Error {
  constructor(n) {
    super('6026: Creating new ordersis blocked');
    u(this, 'logs');
    u(this, 'code', 6026);
    u(this, 'name', 'CreatingNewOrdersBlocked');
    u(this, 'msg', 'Creating new ordersis blocked');
    this.logs = n;
  }
}
u(xa, 'code', 6026);
Q.CreatingNewOrdersBlocked = xa;
class Ua extends Error {
  constructor(n) {
    super('6027: Orders taking is blocked');
    u(this, 'logs');
    u(this, 'code', 6027);
    u(this, 'name', 'OrderTakingBlocked');
    u(this, 'msg', 'Orders taking is blocked');
    this.logs = n;
  }
}
u(Ua, 'code', 6027);
Q.OrderTakingBlocked = Ua;
class La extends Error {
  constructor(n) {
    super('6028: Order input amount larger than the remaining');
    u(this, 'logs');
    u(this, 'code', 6028);
    u(this, 'name', 'OrderInputAmountTooLarge');
    u(this, 'msg', 'Order input amount larger than the remaining');
    this.logs = n;
  }
}
u(La, 'code', 6028);
Q.OrderInputAmountTooLarge = La;
class $a extends Error {
  constructor(n) {
    super('6029: Permissionless order taking not enabled, please provide permission account');
    u(this, 'logs');
    u(this, 'code', 6029);
    u(this, 'name', 'PermissionRequiredPermissionlessNotEnabled');
    u(this, 'msg', 'Permissionless order taking not enabled, please provide permission account');
    this.logs = n;
  }
}
u($a, 'code', 6029);
Q.PermissionRequiredPermissionlessNotEnabled = $a;
class Ha extends Error {
  constructor(n) {
    super('6030: Permission address does not match order address');
    u(this, 'logs');
    u(this, 'code', 6030);
    u(this, 'name', 'PermissionDoesNotMatchOrder');
    u(this, 'msg', 'Permission address does not match order address');
    this.logs = n;
  }
}
u(Ha, 'code', 6030);
Q.PermissionDoesNotMatchOrder = Ha;
class ja extends Error {
  constructor(n) {
    super('6031: Invalid ata address');
    u(this, 'logs');
    u(this, 'code', 6031);
    u(this, 'name', 'InvalidAtaAddress');
    u(this, 'msg', 'Invalid ata address');
    this.logs = n;
  }
}
u(ja, 'code', 6031);
Q.InvalidAtaAddress = ja;
class Ga extends Error {
  constructor(n) {
    super('6032: Maker output ata required when output mint is not WSOL');
    u(this, 'logs');
    u(this, 'code', 6032);
    u(this, 'name', 'MakerOutputAtaRequired');
    u(this, 'msg', 'Maker output ata required when output mint is not WSOL');
    this.logs = n;
  }
}
u(Ga, 'code', 6032);
Q.MakerOutputAtaRequired = Ga;
class Fa extends Error {
  constructor(n) {
    super('6033: Intermediary output token account required when output mint is WSOL');
    u(this, 'logs');
    u(this, 'code', 6033);
    u(this, 'name', 'IntermediaryOutputTokenAccountRequired');
    u(this, 'msg', 'Intermediary output token account required when output mint is WSOL');
    this.logs = n;
  }
}
u(Fa, 'code', 6033);
Q.IntermediaryOutputTokenAccountRequired = Fa;
class Ka extends Error {
  constructor(n) {
    super('6034: Not enough balance for rent');
    u(this, 'logs');
    u(this, 'code', 6034);
    u(this, 'name', 'NotEnoughBalanceForRent');
    u(this, 'msg', 'Not enough balance for rent');
    this.logs = n;
  }
}
u(Ka, 'code', 6034);
Q.NotEnoughBalanceForRent = Ka;
class Va extends Error {
  constructor(n) {
    super('6035: Order can not be closed - Not enough time passed since last update');
    u(this, 'logs');
    u(this, 'code', 6035);
    u(this, 'name', 'NotEnoughTimePassedSinceLastUpdate');
    u(this, 'msg', 'Order can not be closed - Not enough time passed since last update');
    this.logs = n;
  }
}
u(Va, 'code', 6035);
Q.NotEnoughTimePassedSinceLastUpdate = Va;
class Wa extends Error {
  constructor(n) {
    super('6036: Order input and output mints are the same');
    u(this, 'logs');
    u(this, 'code', 6036);
    u(this, 'name', 'OrderSameMint');
    u(this, 'msg', 'Order input and output mints are the same');
    this.logs = n;
  }
}
u(Wa, 'code', 6036);
Q.OrderSameMint = Wa;
class qa extends Error {
  constructor(n) {
    super('6037: Mint has a token (2022) extension that is not supported');
    u(this, 'logs');
    u(this, 'code', 6037);
    u(this, 'name', 'UnsupportedTokenExtension');
    u(this, 'msg', 'Mint has a token (2022) extension that is not supported');
    this.logs = n;
  }
}
u(qa, 'code', 6037);
Q.UnsupportedTokenExtension = qa;
class za extends Error {
  constructor(n) {
    super("6038: Can't have an spl token mint with a t22 account");
    u(this, 'logs');
    u(this, 'code', 6038);
    u(this, 'name', 'InvalidTokenAccount');
    u(this, 'msg', "Can't have an spl token mint with a t22 account");
    this.logs = n;
  }
}
u(za, 'code', 6038);
Q.InvalidTokenAccount = za;
class Ya extends Error {
  constructor(n) {
    super('6039: The order type is invalid');
    u(this, 'logs');
    u(this, 'code', 6039);
    u(this, 'name', 'OrderTypeInvalid');
    u(this, 'msg', 'The order type is invalid');
    this.logs = n;
  }
}
u(Ya, 'code', 6039);
Q.OrderTypeInvalid = Ya;
class Xa extends Error {
  constructor(n) {
    super('6040: Token account is not initialized');
    u(this, 'logs');
    u(this, 'code', 6040);
    u(this, 'name', 'UninitializedTokenAccount');
    u(this, 'msg', 'Token account is not initialized');
    this.logs = n;
  }
}
u(Xa, 'code', 6040);
Q.UninitializedTokenAccount = Xa;
class Ja extends Error {
  constructor(n) {
    super('6041: Account is not owned by the token program');
    u(this, 'logs');
    u(this, 'code', 6041);
    u(this, 'name', 'InvalidTokenAccountOwner');
    u(this, 'msg', 'Account is not owned by the token program');
    this.logs = n;
  }
}
u(Ja, 'code', 6041);
Q.InvalidTokenAccountOwner = Ja;
class Za extends Error {
  constructor(n) {
    super('6042: Account is not a valid token account');
    u(this, 'logs');
    u(this, 'code', 6042);
    u(this, 'name', 'InvalidAccount');
    u(this, 'msg', 'Account is not a valid token account');
    this.logs = n;
  }
}
u(Za, 'code', 6042);
Q.InvalidAccount = Za;
class Qa extends Error {
  constructor(n) {
    super('6043: Token account has incorrect mint');
    u(this, 'logs');
    u(this, 'code', 6043);
    u(this, 'name', 'InvalidTokenMint');
    u(this, 'msg', 'Token account has incorrect mint');
    this.logs = n;
  }
}
u(Qa, 'code', 6043);
Q.InvalidTokenMint = Qa;
class eu extends Error {
  constructor(n) {
    super('6044: Token account has incorrect authority');
    u(this, 'logs');
    u(this, 'code', 6044);
    u(this, 'name', 'InvalidTokenAuthority');
    u(this, 'msg', 'Token account has incorrect authority');
    this.logs = n;
  }
}
u(eu, 'code', 6044);
Q.InvalidTokenAuthority = eu;
function B_(t, e) {
  switch (t) {
    case 6e3:
      return new la(e);
    case 6001:
      return new da(e);
    case 6002:
      return new fa(e);
    case 6003:
      return new pa(e);
    case 6004:
      return new _a(e);
    case 6005:
      return new ha(e);
    case 6006:
      return new ma(e);
    case 6007:
      return new ga(e);
    case 6008:
      return new Aa(e);
    case 6009:
      return new Oa(e);
    case 6010:
      return new Ra(e);
    case 6011:
      return new ya(e);
    case 6012:
      return new Ta(e);
    case 6013:
      return new Ea(e);
    case 6014:
      return new Ia(e);
    case 6015:
      return new wa(e);
    case 6016:
      return new ba(e);
    case 6017:
      return new Na(e);
    case 6018:
      return new Ca(e);
    case 6019:
      return new Sa(e);
    case 6020:
      return new va(e);
    case 6021:
      return new Pa(e);
    case 6022:
      return new Ma(e);
    case 6023:
      return new ka(e);
    case 6024:
      return new Da(e);
    case 6025:
      return new Ba(e);
    case 6026:
      return new xa(e);
    case 6027:
      return new Ua(e);
    case 6028:
      return new La(e);
    case 6029:
      return new $a(e);
    case 6030:
      return new Ha(e);
    case 6031:
      return new ja(e);
    case 6032:
      return new Ga(e);
    case 6033:
      return new Fa(e);
    case 6034:
      return new Ka(e);
    case 6035:
      return new Va(e);
    case 6036:
      return new Wa(e);
    case 6037:
      return new qa(e);
    case 6038:
      return new za(e);
    case 6039:
      return new Ya(e);
    case 6040:
      return new Xa(e);
    case 6041:
      return new Ja(e);
    case 6042:
      return new Za(e);
    case 6043:
      return new Qa(e);
    case 6044:
      return new eu(e);
  }
  return null;
}
var x_ =
    (b && b.__createBinding) ||
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
  U_ =
    (b && b.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  pl =
    (b && b.__importStar) ||
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
          for (var r = t(e), o = 0; o < r.length; o++) r[o] !== 'default' && x_(n, e, r[o]);
        return U_(n, e), n;
      };
    })();
Object.defineProperty(Ai, '__esModule', { value: !0 });
Ai.fromCode = _l;
Ai.fromTxError = F_;
const L_ = qe,
  $_ = pl(Y),
  H_ = pl(Q);
function _l(t, e) {
  return t >= 6e3 ? H_.fromCode(t, e) : $_.fromCode(t, e);
}
function j_(t, e) {
  return Object.hasOwnProperty.call(t, e);
}
const G_ = /Program (\w+) failed: custom program error: (\w+)/;
function F_(t, e = L_.PROGRAM_ID) {
  if (typeof t != 'object' || t === null || !j_(t, 'logs') || !Array.isArray(t.logs)) return null;
  let n = null;
  for (const c of t.logs) if (((n = G_.exec(c)), n !== null)) break;
  if (n === null) return null;
  const [r, o] = n.slice(1);
  if (r !== e.toString()) return null;
  let i;
  try {
    i = parseInt(o, 16);
  } catch (c) {
    return null;
  }
  return _l(i, t.logs);
}
var Hn = {},
  K_ =
    (b && b.__createBinding) ||
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
  V_ =
    (b && b.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  W_ =
    (b && b.__importStar) ||
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
          for (var r = t(e), o = 0; o < r.length; o++) r[o] !== 'default' && K_(n, e, r[o]);
        return V_(n, e), n;
      };
    })(),
  q_ =
    (b && b.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(Hn, '__esModule', { value: !0 });
Hn.GlobalConfig = void 0;
const _o = _e,
  wt = q_(nt),
  ke = W_(Ot),
  ac = qe,
  Ft = class Ft {
    constructor(e) {
      u(this, 'emergencyMode');
      u(this, 'flashTakeOrderBlocked');
      u(this, 'newOrdersBlocked');
      u(this, 'ordersTakingBlocked');
      u(this, 'hostFeeBps');
      u(this, 'isOrderTakingPermissionless');
      u(this, 'padding0');
      u(this, 'orderCloseDelaySeconds');
      u(this, 'padding1');
      u(this, 'pdaAuthorityPreviousLamportsBalance');
      u(this, 'totalTipAmount');
      u(this, 'hostTipAmount');
      u(this, 'pdaAuthority');
      u(this, 'pdaAuthorityBump');
      u(this, 'adminAuthority');
      u(this, 'adminAuthorityCached');
      u(this, 'txnFeeCost');
      u(this, 'ataCreationCost');
      u(this, 'padding2');
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
    static async fetch(e, n, r = ac.PROGRAM_ID) {
      const o = await e.getAccountInfo(n);
      if (o === null) return null;
      if (!o.owner.equals(r)) throw new Error("account doesn't belong to this program");
      return this.decode(o.data);
    }
    static async fetchMultiple(e, n, r = ac.PROGRAM_ID) {
      return (await e.getMultipleAccountsInfo(n)).map((i) => {
        if (i === null) return null;
        if (!i.owner.equals(r)) throw new Error("account doesn't belong to this program");
        return this.decode(i.data);
      });
    }
    static decode(e) {
      if (!e.slice(0, 8).equals(Ft.discriminator)) throw new Error('invalid account discriminator');
      const n = Ft.layout.decode(e.slice(8));
      return new Ft({
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
      return new Ft({
        emergencyMode: e.emergencyMode,
        flashTakeOrderBlocked: e.flashTakeOrderBlocked,
        newOrdersBlocked: e.newOrdersBlocked,
        ordersTakingBlocked: e.ordersTakingBlocked,
        hostFeeBps: e.hostFeeBps,
        isOrderTakingPermissionless: e.isOrderTakingPermissionless,
        padding0: e.padding0,
        orderCloseDelaySeconds: new wt.default(e.orderCloseDelaySeconds),
        padding1: e.padding1.map((n) => new wt.default(n)),
        pdaAuthorityPreviousLamportsBalance: new wt.default(e.pdaAuthorityPreviousLamportsBalance),
        totalTipAmount: new wt.default(e.totalTipAmount),
        hostTipAmount: new wt.default(e.hostTipAmount),
        pdaAuthority: new _o.PublicKey(e.pdaAuthority),
        pdaAuthorityBump: new wt.default(e.pdaAuthorityBump),
        adminAuthority: new _o.PublicKey(e.adminAuthority),
        adminAuthorityCached: new _o.PublicKey(e.adminAuthorityCached),
        txnFeeCost: new wt.default(e.txnFeeCost),
        ataCreationCost: new wt.default(e.ataCreationCost),
        padding2: e.padding2.map((n) => new wt.default(n)),
      });
    }
  };
u(Ft, 'discriminator', ie.Buffer.from([149, 8, 156, 202, 160, 252, 176, 217])),
  u(
    Ft,
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
let Uo = Ft;
Hn.GlobalConfig = Uo;
var tu = {},
  Dr = {},
  z_ =
    (b && b.__createBinding) ||
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
  Y_ =
    (b && b.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  X_ =
    (b && b.__importStar) ||
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
          for (var r = t(e), o = 0; o < r.length; o++) r[o] !== 'default' && z_(n, e, r[o]);
        return Y_(n, e), n;
      };
    })(),
  J_ =
    (b && b.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(Dr, '__esModule', { value: !0 });
Dr.Order = void 0;
const bn = _e,
  bt = J_(nt),
  De = X_(Ot),
  uc = qe,
  Kt = class Kt {
    constructor(e) {
      u(this, 'globalConfig');
      u(this, 'maker');
      u(this, 'inputMint');
      u(this, 'inputMintProgramId');
      u(this, 'outputMint');
      u(this, 'outputMintProgramId');
      u(this, 'initialInputAmount');
      u(this, 'expectedOutputAmount');
      u(this, 'remainingInputAmount');
      u(this, 'filledOutputAmount');
      u(this, 'tipAmount');
      u(this, 'numberOfFills');
      u(this, 'orderType');
      u(this, 'status');
      u(this, 'inVaultBump');
      u(this, 'flashIxLock');
      u(this, 'padding0');
      u(this, 'lastUpdatedTimestamp');
      u(this, 'flashStartTakerOutputBalance');
      u(this, 'padding');
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
    static async fetch(e, n, r = uc.PROGRAM_ID) {
      const o = await e.getAccountInfo(n);
      if (o === null) return null;
      if (!o.owner.equals(r)) throw new Error("account doesn't belong to this program");
      return this.decode(o.data);
    }
    static async fetchMultiple(e, n, r = uc.PROGRAM_ID) {
      return (await e.getMultipleAccountsInfo(n)).map((i) => {
        if (i === null) return null;
        if (!i.owner.equals(r)) throw new Error("account doesn't belong to this program");
        return this.decode(i.data);
      });
    }
    static decode(e) {
      if (!e.slice(0, 8).equals(Kt.discriminator)) throw new Error('invalid account discriminator');
      const n = Kt.layout.decode(e.slice(8));
      return new Kt({
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
      return new Kt({
        globalConfig: new bn.PublicKey(e.globalConfig),
        maker: new bn.PublicKey(e.maker),
        inputMint: new bn.PublicKey(e.inputMint),
        inputMintProgramId: new bn.PublicKey(e.inputMintProgramId),
        outputMint: new bn.PublicKey(e.outputMint),
        outputMintProgramId: new bn.PublicKey(e.outputMintProgramId),
        initialInputAmount: new bt.default(e.initialInputAmount),
        expectedOutputAmount: new bt.default(e.expectedOutputAmount),
        remainingInputAmount: new bt.default(e.remainingInputAmount),
        filledOutputAmount: new bt.default(e.filledOutputAmount),
        tipAmount: new bt.default(e.tipAmount),
        numberOfFills: new bt.default(e.numberOfFills),
        orderType: e.orderType,
        status: e.status,
        inVaultBump: e.inVaultBump,
        flashIxLock: e.flashIxLock,
        padding0: e.padding0,
        lastUpdatedTimestamp: new bt.default(e.lastUpdatedTimestamp),
        flashStartTakerOutputBalance: new bt.default(e.flashStartTakerOutputBalance),
        padding: e.padding.map((n) => new bt.default(n)),
      });
    }
  };
u(Kt, 'discriminator', ie.Buffer.from([134, 173, 223, 185, 77, 86, 28, 51])),
  u(
    Kt,
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
let Lo = Kt;
Dr.Order = Lo;
(function (t) {
  Object.defineProperty(t, '__esModule', { value: !0 }), (t.GlobalConfig = t.Order = void 0);
  var e = Dr;
  Object.defineProperty(t, 'Order', {
    enumerable: !0,
    get: function () {
      return e.Order;
    },
  });
  var n = Hn;
  Object.defineProperty(t, 'GlobalConfig', {
    enumerable: !0,
    get: function () {
      return n.GlobalConfig;
    },
  });
})(tu);
var cc;
function _i() {
  return (
    cc ||
      ((cc = 1),
      (function (t) {
        var e =
            (b && b.__createBinding) ||
            (Object.create
              ? function (D, j, K, re) {
                  re === void 0 && (re = K);
                  var de = Object.getOwnPropertyDescriptor(j, K);
                  (!de || ('get' in de ? !j.__esModule : de.writable || de.configurable)) &&
                    (de = {
                      enumerable: !0,
                      get: function () {
                        return j[K];
                      },
                    }),
                    Object.defineProperty(D, re, de);
                }
              : function (D, j, K, re) {
                  re === void 0 && (re = K), (D[re] = j[K]);
                }),
          n =
            (b && b.__setModuleDefault) ||
            (Object.create
              ? function (D, j) {
                  Object.defineProperty(D, 'default', { enumerable: !0, value: j });
                }
              : function (D, j) {
                  D.default = j;
                }),
          r =
            (b && b.__importStar) ||
            (function () {
              var D = function (j) {
                return (
                  (D =
                    Object.getOwnPropertyNames ||
                    function (K) {
                      var re = [];
                      for (var de in K)
                        Object.prototype.hasOwnProperty.call(K, de) && (re[re.length] = de);
                      return re;
                    }),
                  D(j)
                );
              };
              return function (j) {
                if (j && j.__esModule) return j;
                var K = {};
                if (j != null)
                  for (var re = D(j), de = 0; de < re.length; de++)
                    re[de] !== 'default' && e(K, j, re[de]);
                return n(K, j), K;
              };
            })(),
          o =
            (b && b.__importDefault) ||
            function (D) {
              return D && D.__esModule ? D : { default: D };
            };
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.parseTokenSymbol =
            t.getCustomProgramErrorCode =
            t.TokenInfo =
            t.DEFAULT_TXN_FEE_LAMPORTS =
            t.WAD =
            t.LimoIdl =
              void 0),
          (t.getLimoProgramId = M),
          (t.parseKeypairFile = G),
          (t.divCeil = J),
          (t.amountToLamportsBN = z),
          (t.amountToLamportsDecimal = S),
          (t.lamportsToAmountBN = k),
          (t.lamportsToAmountDecimal = q),
          (t.createMint = ee),
          (t.createMintFromKeypair = H),
          (t.getMintDecimals = V),
          (t.getMintsProgramOwner = te),
          (t.printMultisigTx = ce),
          (t.printSimulateTx = ue),
          (t.solAirdrop = pe),
          (t.solAirdropMin = ge),
          (t.checkIfAccountExists = Ae),
          (t.getAssociatedTokenAddress = Ne),
          (t.createAssociatedTokenAccountIdempotentInstruction = ve),
          (t.createAtaIdempotent = Tt),
          (t.setupAta = Ut),
          (t.mintTo = Rn),
          (t.getMockSwapInstructions = yn),
          (t.transferToken = Tn),
          (t.mapAnchorError = tn),
          (t.getTokenAccountBalance = zn),
          (t.createAddExtraComputeUnitFeeTransaction = Gr),
          (t.getSolBalanceInLamports = Lt),
          (t.getSolBalance = Rt),
          (t.endpointFromCluster = Fr),
          (t.pubkeyFromFile = ji),
          (t.createAddExtraComputeUnitsTransaction = Kr),
          (t.u16ToBytes = Gi),
          (t.accountExist = Fi),
          (t.fetchGlobalConfigWithRetry = Vr),
          (t.getPdaAuthority = Ki),
          (t.getTokenVaultPDA = Vi),
          (t.getEventAuthorityPDA = Wi),
          (t.getIntermediaryTokenAccountPDA = qi),
          (t.getExpressRelayMetadataPDA = zi),
          (t.getExpressRelayConfigRouterPDA = Yi),
          (t.sendAndConfirmInstructions = qr),
          (t.createKeypairRentExempt = Yn),
          (t.getOrderRentExemptLamports = Xi),
          (t.createKeypairRentExemptIxSync = zr),
          (t.createGlobalConfigPublicKeyRentExempt = Ji),
          (t.executeTransaction = Zi),
          (t.buildAndSendTxnWithLogs = Qi),
          (t.sleep = It),
          (t.scaleDownWads = eo),
          (t.convertStakeToAmount = to),
          (t.convertAmountToStake = nn);
        const i = r(or),
          c = r(sr),
          d = r(Ai),
          p = _e,
          a = Pr,
          _ = zt,
          A = r(_e),
          h = o(al),
          m = nu(),
          g = Hn,
          R = qe,
          w = Zc,
          N = tu,
          P = o(nt);
        (t.LimoIdl = h.default),
          (t.WAD = new a.Decimal('1'.concat(Array(19).join('0')))),
          (t.DEFAULT_TXN_FEE_LAMPORTS = 5e3);
        const I = 'escrow_vault',
          B = 'authority',
          F = 'metadata',
          $ = 'config_router',
          T = 'intermediary',
          y = '__event_authority';
        class v {
          constructor(j, K, re) {
            u(this, 'symbol');
            u(this, 'mint');
            u(this, 'mintDecimals');
            (this.symbol = j), (this.mint = K), (this.mintDecimals = re);
          }
        }
        t.TokenInfo = v;
        function M(D) {
          return R.PROGRAM_ID;
        }
        function G(D) {
          return p.Keypair.fromSecretKey(new Uint8Array(JSON.parse(sr.readFileSync(D))));
        }
        function J(D, j) {
          return D.add(j).sub(new P.default(1)).div(j);
        }
        function z(D, j) {
          let K = Math.pow(10, j);
          return new P.default(D.mul(K).floor().toString());
        }
        function S(D, j) {
          let K = Math.pow(10, j);
          return D.mul(K);
        }
        function k(D, j) {
          let K = new P.default(Math.pow(10, j));
          return new a.Decimal(D.div(K).toString());
        }
        function q(D, j) {
          let K = Math.pow(10, j);
          return D.div(K);
        }
        async function ee(D, j, K = 6) {
          const re = i.web3.Keypair.generate();
          return await H(D, j, re, K);
        }
        async function H(D, j, K, re = 6) {
          const de = await se(D, j, K.publicKey, re);
          console.log('Mint auth', j.toString());
          const ye = new i.web3.Transaction();
          return ye.add(...de), await D.sendAndConfirm(ye, [K]), K.publicKey;
        }
        async function V(D, j) {
          const K = await te(D, j);
          return (await (0, _.getMint)(D, j, D.commitment, K)).decimals;
        }
        async function te(D, j) {
          const K = await D.getAccountInfo(j);
          if (!K) throw new Error('Mint not found');
          return K.owner;
        }
        async function se(D, j, K, re) {
          return [
            i.web3.SystemProgram.createAccount({
              fromPubkey: D.wallet.publicKey,
              newAccountPubkey: K,
              space: 82,
              lamports: await D.connection.getMinimumBalanceForRentExemption(82),
              programId: _.TOKEN_PROGRAM_ID,
            }),
            (0, _.createInitializeMintInstruction)(K, re, j, null, _.TOKEN_PROGRAM_ID),
          ];
        }
        async function ce(D) {
          console.log((0, w.binary_to_base58)(D.serializeMessage()));
        }
        async function ue(D, j) {
          console.log(
            'Tx in B64',
            'https://explorer.solana.com/tx/inspector?message='.concat(
              encodeURIComponent(j.serializeMessage().toString('base64'))
            )
          );
          let K = await D.simulateTransaction(j);
          console.log('Simulate Response', K), console.log('');
        }
        async function pe(D, j, K) {
          const re = await D.connection.requestAirdrop(j, S(K, 9).toNumber());
          return await D.connection.confirmTransaction(re), await Rt(D, j);
        }
        async function ge(D, j, K) {
          const re = a.Decimal.max(50, K);
          let de = await Rt(D, j);
          for (; de.lt(K); ) {
            try {
              await D.connection.requestAirdrop(j, S(re, 9).toNumber());
            } catch (ye) {
              await It(100), console.log('Error', ye);
            }
            await It(100), (de = await Rt(D, j));
          }
          return de;
        }
        async function Ae(D, j) {
          return (await D.getAccountInfo(j)) != null;
        }
        function Ne(D, j, K) {
          return (0, _.getAssociatedTokenAddressSync)(j, D, !0, K, _.ASSOCIATED_TOKEN_PROGRAM_ID);
        }
        function ve(D, j, K = D, re, de) {
          let ye = de;
          ye || (ye = Ne(D, j, re));
          const ze = (0, _.createAssociatedTokenAccountInstruction)(
            K,
            ye,
            D,
            j,
            re,
            _.ASSOCIATED_TOKEN_PROGRAM_ID
          );
          return (ze.data = ie.Buffer.from([1])), [ye, ze];
        }
        function Tt(D, j, K, re) {
          const [de, ye] = ve(D, K, j, re);
          return { ata: de, createAtaIx: ye };
        }
        async function Ut(D, j, K, re = K.publicKey) {
          const de = Ne(re, j, _.TOKEN_PROGRAM_ID);
          if (!(await Ae(D.connection, de))) {
            const [, ye] = ve(re, j, K.publicKey, _.TOKEN_PROGRAM_ID, de),
              ze = new p.Transaction().add(ye);
            await D.sendAndConfirm(ze, [K]);
          }
          return de;
        }
        async function Rn(D, j, K, re, de) {
          const ye = new p.Transaction().add(
            (0, _.createMintToCheckedInstruction)(j, K, D.wallet.publicKey, re, de)
          );
          await D.sendAndConfirm(ye, [], { skipPreflight: !0 });
        }
        function yn(D, j, K, re, de, ye, ze, on) {
          let En = [];
          re.equals(m.WRAPPED_SOL_MINT)
            ? (En.push(
                p.SystemProgram.transfer({
                  fromPubkey: D.wallet.publicKey,
                  toPubkey: Ne(j, re, _.TOKEN_PROGRAM_ID),
                  lamports: S(ye, on).toNumber(),
                })
              ),
              En.push(
                new p.TransactionInstruction({
                  keys: [{ pubkey: Ne(j, re, _.TOKEN_PROGRAM_ID), isSigner: !1, isWritable: !0 }],
                  data: ie.Buffer.from(new Uint8Array([17])),
                  programId: _.TOKEN_PROGRAM_ID,
                })
              ))
            : En.push(
                (0, _.createMintToCheckedInstruction)(
                  re,
                  Ne(j, re, _.TOKEN_PROGRAM_ID),
                  D.wallet.publicKey,
                  S(ye, on).toNumber(),
                  on
                )
              );
          let $t = [];
          return (
            K.equals(m.WRAPPED_SOL_MINT)
              ? ($t.push(
                  (0, _.createCloseAccountInstruction)(
                    Ne(j, K, _.TOKEN_PROGRAM_ID),
                    j,
                    j,
                    [],
                    _.TOKEN_PROGRAM_ID
                  )
                ),
                $t.push(
                  p.SystemProgram.transfer({
                    fromPubkey: j,
                    toPubkey: D.wallet.publicKey,
                    lamports: S(de, ze).toNumber(),
                  })
                ),
                $t.push(
                  Tt(j, D.wallet.publicKey, m.WRAPPED_SOL_MINT, _.TOKEN_PROGRAM_ID).createAtaIx
                ))
              : $t.push(
                  (0, _.createBurnInstruction)(
                    Ne(j, K, _.TOKEN_PROGRAM_ID),
                    K,
                    j,
                    S(de, ze).toNumber()
                  )
                ),
            [...$t, ...En]
          );
        }
        async function Tn(D, j, K, re, de) {
          let ye = new p.Transaction().add(
            (0, _.createTransferInstruction)(K, re, j.publicKey, de, [], _.TOKEN_PROGRAM_ID)
          );
          await A.sendAndConfirmTransaction(D.connection, ye, [j]), await It(500);
        }
        const Et = (D) => {
          const j = D.indexOf('Custom program error:');
          return j === -1
            ? [!1, 'May not be a custom program error']
            : [!0, ''.concat(parseInt(D.substring(j + 22, j + 28).replace(' ', ''), 16))];
        };
        t.getCustomProgramErrorCode = Et;
        async function tn(D) {
          try {
            return await D;
          } catch (j) {
            let [K, re] = (0, t.getCustomProgramErrorCode)(JSON.stringify(j));
            if (K) {
              let de;
              throw Number(re)
                ? ((de = d.fromCode(Number(re))), new Error(de))
                : Number(re) >= 6e3 && Number(re) <= 7e3
                  ? (re[re.length - 2] === '0' ? (re = re.slice(-1)) : (re = re.slice(-2)),
                    (de = t.LimoIdl.errors[re].msg),
                    new Error(de))
                  : new Error(j);
            }
            throw j;
          }
        }
        async function zn(D, j) {
          const K = await D.getTokenAccountBalance(j);
          return new a.Decimal(K.value.amount).div(a.Decimal.pow(10, K.value.decimals));
        }
        function Gr(D, j) {
          const K = [];
          return (
            K.push(p.ComputeBudgetProgram.setComputeUnitLimit({ units: D })),
            K.push(
              p.ComputeBudgetProgram.setComputeUnitPrice({ microLamports: Number(j.toFixed(0)) })
            ),
            K
          );
        }
        async function Lt(D, j) {
          var re;
          let K;
          for (; K === void 0; )
            K = (re = await D.connection.getAccountInfo(j)) == null ? void 0 : re.lamports;
          return K;
        }
        async function Rt(D, j) {
          const K = new a.Decimal(await Lt(D, j));
          return q(K, 9);
        }
        function Fr(D) {
          switch (D) {
            case 'mainnet':
              return 'FIXTHIS';
            case 'devnet':
              return 'FIXTHIS';
            case 'localnet':
              return 'http://127.0.0.1:8899';
          }
          return D || 'err';
        }
        function ji(D) {
          const K = c
              .readFileSync(D, 'utf8')
              .replace('[', '')
              .replace(']', '')
              .split(',')
              .map(function (ye) {
                return parseInt(ye, 10);
              }),
            re = Uint8Array.from(K);
          return p.Keypair.fromSecretKey(re).publicKey;
        }
        function Kr(D) {
          return A.ComputeBudgetProgram.setComputeUnitLimit({ units: D });
        }
        function Gi(D) {
          const j = new ArrayBuffer(2);
          return new DataView(j).setUint16(0, D, !1), new Uint8Array(j);
        }
        async function Fi(D, j) {
          const K = await D.getAccountInfo(j);
          return !(K === null || K.data.length === 0);
        }
        async function Vr(D, j) {
          return Wr(async () => await g.GlobalConfig.fetch(D.conn, j), j);
        }
        function Ki(D, j) {
          const [K, re] = i.web3.PublicKey.findProgramAddressSync(
            [ie.Buffer.from(B), j.toBuffer()],
            D
          );
          return K;
        }
        function Vi(D, j, K) {
          const [re, de] = i.web3.PublicKey.findProgramAddressSync(
            [ie.Buffer.from(I), j.toBuffer(), K.toBuffer()],
            D
          );
          return re;
        }
        function Wi(D) {
          const [j, K] = i.web3.PublicKey.findProgramAddressSync([ie.Buffer.from(y)], D);
          return j;
        }
        function qi(D, j) {
          const [K, re] = i.web3.PublicKey.findProgramAddressSync(
            [ie.Buffer.from(T), j.toBuffer()],
            D
          );
          return K;
        }
        function zi(D) {
          const [j, K] = i.web3.PublicKey.findProgramAddressSync([ie.Buffer.from(F)], D);
          return j;
        }
        function Yi(D, j) {
          const [K, re] = i.web3.PublicKey.findProgramAddressSync(
            [ie.Buffer.from($), j.toBuffer()],
            D
          );
          return K;
        }
        async function Wr(D, j, K = 3) {
          for (let re = 0; re < K; re++) {
            let de = await D();
            if (de !== null) return de;
            console.log(
              '['
                .concat(re + 1, '/')
                .concat(K, '] Fetched account ')
                .concat(j, ' is null. Refetching...')
            );
          }
          return null;
        }
        async function qr(D, j) {
          let K = new p.Transaction();
          for (let de = 0; de < j.length; de++) K.add(j[de]);
          let { blockhash: re } = await D.conn.getLatestBlockhash();
          return (
            (K.recentBlockhash = re),
            (K.feePayer = D.admin.publicKey),
            await A.sendAndConfirmTransaction(D.conn, K, [D.admin])
          );
        }
        async function Yn(D, j, K, re) {
          const de = new p.Transaction();
          return (
            de.add(
              zr(
                D.wallet.publicKey,
                K,
                re,
                await D.connection.getMinimumBalanceForRentExemption(re),
                j
              )
            ),
            await D.sendAndConfirm(de, [K]),
            K
          );
        }
        async function Xi(D) {
          return await D.getMinimumBalanceForRentExemption(N.Order.layout.span + 8);
        }
        function zr(D, j, K, re, de = m.limoId) {
          return p.SystemProgram.createAccount({
            fromPubkey: D,
            newAccountPubkey: j.publicKey,
            space: K,
            lamports: re,
            programId: de,
          });
        }
        async function Ji(D, j) {
          const K = p.Keypair.generate();
          return await Yn(D, j, K, g.GlobalConfig.layout.getSpan() + 8);
        }
        async function Zi(D, j, K, re = []) {
          const de = new p.Transaction(),
            { blockhash: ye } = await D.getLatestBlockhash();
          return (
            (de.recentBlockhash = ye),
            (de.feePayer = K.publicKey),
            de.add(...j),
            await (0, p.sendAndConfirmTransaction)(D, de, [K, ...re], { commitment: 'confirmed' })
          );
        }
        async function Qi(D, j, K, re) {
          const { blockhash: de } = await D.getLatestBlockhash();
          (j.recentBlockhash = de), (j.feePayer = K.publicKey);
          try {
            const ye = await D.sendTransaction(j, [K, ...re]);
            console.log('Transaction Hash:', ye), await It(5e3);
            const ze = await D.getTransaction(ye, { commitment: 'confirmed' });
            console.log('Transaction Logs:\n', ze.meta.logMessages);
          } catch (ye) {
            console.log(ye), await It(5e3);
            const ze = ye.toString().split(' failed ')[0].split('Transaction ')[1],
              on = await D.getTransaction(ze, { commitment: 'confirmed' });
            console.log('Txn', on.meta.logMessages);
          }
        }
        function It(D) {
          return new Promise((j) => setTimeout(j, D));
        }
        function eo(D) {
          return new a.Decimal(D.toString()).div(t.WAD).toNumber();
        }
        function to(D, j, K) {
          return D === new a.Decimal(0)
            ? new a.Decimal(0)
            : j !== new a.Decimal(0)
              ? D.mul(K).div(j)
              : D.add(K);
        }
        function nn(D, j, K) {
          return D === new a.Decimal(0)
            ? new a.Decimal(0)
            : K !== new a.Decimal(0)
              ? j.mul(D).div(K)
              : D;
        }
        const rn = (D) => String.fromCharCode(...D.filter((j) => j > 0));
        t.parseTokenSymbol = rn;
      })(po)),
    po
  );
}
var ct = {},
  At = {},
  Z_ =
    (b && b.__createBinding) ||
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
  Q_ =
    (b && b.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  eh =
    (b && b.__importStar) ||
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
          for (var r = t(e), o = 0; o < r.length; o++) r[o] !== 'default' && Z_(n, e, r[o]);
        return Q_(n, e), n;
      };
    })();
Object.defineProperty(At, '__esModule', { value: !0 });
At.Cancelled = At.Filled = At.Active = void 0;
At.fromDecoded = th;
At.fromJSON = nh;
At.layout = rh;
const ti = eh(Ot);
class ar {
  constructor() {
    u(this, 'discriminator', 0);
    u(this, 'kind', 'Active');
  }
  toJSON() {
    return { kind: 'Active' };
  }
  toEncodable() {
    return { Active: {} };
  }
}
u(ar, 'discriminator', 0), u(ar, 'kind', 'Active');
At.Active = ar;
class ur {
  constructor() {
    u(this, 'discriminator', 1);
    u(this, 'kind', 'Filled');
  }
  toJSON() {
    return { kind: 'Filled' };
  }
  toEncodable() {
    return { Filled: {} };
  }
}
u(ur, 'discriminator', 1), u(ur, 'kind', 'Filled');
At.Filled = ur;
class cr {
  constructor() {
    u(this, 'discriminator', 2);
    u(this, 'kind', 'Cancelled');
  }
  toJSON() {
    return { kind: 'Cancelled' };
  }
  toEncodable() {
    return { Cancelled: {} };
  }
}
u(cr, 'discriminator', 2), u(cr, 'kind', 'Cancelled');
At.Cancelled = cr;
function th(t) {
  if (typeof t != 'object') throw new Error('Invalid enum object');
  if ('Active' in t) return new ar();
  if ('Filled' in t) return new ur();
  if ('Cancelled' in t) return new cr();
  throw new Error('Invalid enum object');
}
function nh(t) {
  switch (t.kind) {
    case 'Active':
      return new ar();
    case 'Filled':
      return new ur();
    case 'Cancelled':
      return new cr();
  }
}
function rh(t) {
  const e = ti.rustEnum([
    ti.struct([], 'Active'),
    ti.struct([], 'Filled'),
    ti.struct([], 'Cancelled'),
  ]);
  return t !== void 0 ? e.replicate(t) : e;
}
var An = {},
  ih =
    (b && b.__createBinding) ||
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
  oh =
    (b && b.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  sh =
    (b && b.__importStar) ||
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
          for (var r = t(e), o = 0; o < r.length; o++) r[o] !== 'default' && ih(n, e, r[o]);
        return oh(n, e), n;
      };
    })();
Object.defineProperty(An, '__esModule', { value: !0 });
An.Vanilla = void 0;
An.fromDecoded = ah;
An.fromJSON = uh;
An.layout = ch;
const lc = sh(Ot);
class lr {
  constructor() {
    u(this, 'discriminator', 0);
    u(this, 'kind', 'Vanilla');
  }
  toJSON() {
    return { kind: 'Vanilla' };
  }
  toEncodable() {
    return { Vanilla: {} };
  }
}
u(lr, 'discriminator', 0), u(lr, 'kind', 'Vanilla');
An.Vanilla = lr;
function ah(t) {
  if (typeof t != 'object') throw new Error('Invalid enum object');
  if ('Vanilla' in t) return new lr();
  throw new Error('Invalid enum object');
}
function uh(t) {
  switch (t.kind) {
    case 'Vanilla':
      return new lr();
  }
}
function ch(t) {
  const e = lc.rustEnum([lc.struct([], 'Vanilla')]);
  return t !== void 0 ? e.replicate(t) : e;
}
var Se = {},
  lh =
    (b && b.__createBinding) ||
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
  dh =
    (b && b.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  fh =
    (b && b.__importStar) ||
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
          for (var r = t(e), o = 0; o < r.length; o++) r[o] !== 'default' && lh(n, e, r[o]);
        return dh(n, e), n;
      };
    })();
Object.defineProperty(Se, '__esModule', { value: !0 });
Se.UpdateAtaCreationCost =
  Se.UpdateTxnFeeCost =
  Se.UpdateOrderCloseDelaySeconds =
  Se.UpdateOrderTakingPermissionless =
  Se.UpdateAdminAuthorityCached =
  Se.UpdateHostFeeBps =
  Se.UpdateBlockOrderTaking =
  Se.UpdateBlockNewOrders =
  Se.UpdateFlashTakeOrderBlocked =
  Se.UpdateEmergencyMode =
    void 0;
Se.fromDecoded = ph;
Se.fromJSON = _h;
Se.layout = hh;
const ht = fh(Ot);
class dr {
  constructor() {
    u(this, 'discriminator', 0);
    u(this, 'kind', 'UpdateEmergencyMode');
  }
  toJSON() {
    return { kind: 'UpdateEmergencyMode' };
  }
  toEncodable() {
    return { UpdateEmergencyMode: {} };
  }
}
u(dr, 'discriminator', 0), u(dr, 'kind', 'UpdateEmergencyMode');
Se.UpdateEmergencyMode = dr;
class fr {
  constructor() {
    u(this, 'discriminator', 1);
    u(this, 'kind', 'UpdateFlashTakeOrderBlocked');
  }
  toJSON() {
    return { kind: 'UpdateFlashTakeOrderBlocked' };
  }
  toEncodable() {
    return { UpdateFlashTakeOrderBlocked: {} };
  }
}
u(fr, 'discriminator', 1), u(fr, 'kind', 'UpdateFlashTakeOrderBlocked');
Se.UpdateFlashTakeOrderBlocked = fr;
class pr {
  constructor() {
    u(this, 'discriminator', 2);
    u(this, 'kind', 'UpdateBlockNewOrders');
  }
  toJSON() {
    return { kind: 'UpdateBlockNewOrders' };
  }
  toEncodable() {
    return { UpdateBlockNewOrders: {} };
  }
}
u(pr, 'discriminator', 2), u(pr, 'kind', 'UpdateBlockNewOrders');
Se.UpdateBlockNewOrders = pr;
class _r {
  constructor() {
    u(this, 'discriminator', 3);
    u(this, 'kind', 'UpdateBlockOrderTaking');
  }
  toJSON() {
    return { kind: 'UpdateBlockOrderTaking' };
  }
  toEncodable() {
    return { UpdateBlockOrderTaking: {} };
  }
}
u(_r, 'discriminator', 3), u(_r, 'kind', 'UpdateBlockOrderTaking');
Se.UpdateBlockOrderTaking = _r;
class hr {
  constructor() {
    u(this, 'discriminator', 4);
    u(this, 'kind', 'UpdateHostFeeBps');
  }
  toJSON() {
    return { kind: 'UpdateHostFeeBps' };
  }
  toEncodable() {
    return { UpdateHostFeeBps: {} };
  }
}
u(hr, 'discriminator', 4), u(hr, 'kind', 'UpdateHostFeeBps');
Se.UpdateHostFeeBps = hr;
class mr {
  constructor() {
    u(this, 'discriminator', 5);
    u(this, 'kind', 'UpdateAdminAuthorityCached');
  }
  toJSON() {
    return { kind: 'UpdateAdminAuthorityCached' };
  }
  toEncodable() {
    return { UpdateAdminAuthorityCached: {} };
  }
}
u(mr, 'discriminator', 5), u(mr, 'kind', 'UpdateAdminAuthorityCached');
Se.UpdateAdminAuthorityCached = mr;
class gr {
  constructor() {
    u(this, 'discriminator', 6);
    u(this, 'kind', 'UpdateOrderTakingPermissionless');
  }
  toJSON() {
    return { kind: 'UpdateOrderTakingPermissionless' };
  }
  toEncodable() {
    return { UpdateOrderTakingPermissionless: {} };
  }
}
u(gr, 'discriminator', 6), u(gr, 'kind', 'UpdateOrderTakingPermissionless');
Se.UpdateOrderTakingPermissionless = gr;
class Ar {
  constructor() {
    u(this, 'discriminator', 7);
    u(this, 'kind', 'UpdateOrderCloseDelaySeconds');
  }
  toJSON() {
    return { kind: 'UpdateOrderCloseDelaySeconds' };
  }
  toEncodable() {
    return { UpdateOrderCloseDelaySeconds: {} };
  }
}
u(Ar, 'discriminator', 7), u(Ar, 'kind', 'UpdateOrderCloseDelaySeconds');
Se.UpdateOrderCloseDelaySeconds = Ar;
class Or {
  constructor() {
    u(this, 'discriminator', 8);
    u(this, 'kind', 'UpdateTxnFeeCost');
  }
  toJSON() {
    return { kind: 'UpdateTxnFeeCost' };
  }
  toEncodable() {
    return { UpdateTxnFeeCost: {} };
  }
}
u(Or, 'discriminator', 8), u(Or, 'kind', 'UpdateTxnFeeCost');
Se.UpdateTxnFeeCost = Or;
class Rr {
  constructor() {
    u(this, 'discriminator', 9);
    u(this, 'kind', 'UpdateAtaCreationCost');
  }
  toJSON() {
    return { kind: 'UpdateAtaCreationCost' };
  }
  toEncodable() {
    return { UpdateAtaCreationCost: {} };
  }
}
u(Rr, 'discriminator', 9), u(Rr, 'kind', 'UpdateAtaCreationCost');
Se.UpdateAtaCreationCost = Rr;
function ph(t) {
  if (typeof t != 'object') throw new Error('Invalid enum object');
  if ('UpdateEmergencyMode' in t) return new dr();
  if ('UpdateFlashTakeOrderBlocked' in t) return new fr();
  if ('UpdateBlockNewOrders' in t) return new pr();
  if ('UpdateBlockOrderTaking' in t) return new _r();
  if ('UpdateHostFeeBps' in t) return new hr();
  if ('UpdateAdminAuthorityCached' in t) return new mr();
  if ('UpdateOrderTakingPermissionless' in t) return new gr();
  if ('UpdateOrderCloseDelaySeconds' in t) return new Ar();
  if ('UpdateTxnFeeCost' in t) return new Or();
  if ('UpdateAtaCreationCost' in t) return new Rr();
  throw new Error('Invalid enum object');
}
function _h(t) {
  switch (t.kind) {
    case 'UpdateEmergencyMode':
      return new dr();
    case 'UpdateFlashTakeOrderBlocked':
      return new fr();
    case 'UpdateBlockNewOrders':
      return new pr();
    case 'UpdateBlockOrderTaking':
      return new _r();
    case 'UpdateHostFeeBps':
      return new hr();
    case 'UpdateAdminAuthorityCached':
      return new mr();
    case 'UpdateOrderTakingPermissionless':
      return new gr();
    case 'UpdateOrderCloseDelaySeconds':
      return new Ar();
    case 'UpdateTxnFeeCost':
      return new Or();
    case 'UpdateAtaCreationCost':
      return new Rr();
  }
}
function hh(t) {
  const e = ht.rustEnum([
    ht.struct([], 'UpdateEmergencyMode'),
    ht.struct([], 'UpdateFlashTakeOrderBlocked'),
    ht.struct([], 'UpdateBlockNewOrders'),
    ht.struct([], 'UpdateBlockOrderTaking'),
    ht.struct([], 'UpdateHostFeeBps'),
    ht.struct([], 'UpdateAdminAuthorityCached'),
    ht.struct([], 'UpdateOrderTakingPermissionless'),
    ht.struct([], 'UpdateOrderCloseDelaySeconds'),
    ht.struct([], 'UpdateTxnFeeCost'),
    ht.struct([], 'UpdateAtaCreationCost'),
  ]);
  return t !== void 0 ? e.replicate(t) : e;
}
var Qe = {},
  mh =
    (b && b.__createBinding) ||
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
  gh =
    (b && b.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  Ah =
    (b && b.__importStar) ||
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
          for (var r = t(e), o = 0; o < r.length; o++) r[o] !== 'default' && mh(n, e, r[o]);
        return gh(n, e), n;
      };
    })(),
  Oh =
    (b && b.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(Qe, '__esModule', { value: !0 });
Qe.Pubkey = Qe.U64 = Qe.U16 = Qe.Bool = void 0;
Qe.fromDecoded = Th;
Qe.fromJSON = Eh;
Qe.layout = Ih;
const Rh = _e,
  yh = Oh(nt),
  Nt = Ah(Ot);
class yr {
  constructor(e) {
    u(this, 'discriminator', 0);
    u(this, 'kind', 'Bool');
    u(this, 'value');
    this.value = [e[0]];
  }
  toJSON() {
    return { kind: 'Bool', value: [this.value[0]] };
  }
  toEncodable() {
    return { Bool: { _0: this.value[0] } };
  }
}
u(yr, 'discriminator', 0), u(yr, 'kind', 'Bool');
Qe.Bool = yr;
class Tr {
  constructor(e) {
    u(this, 'discriminator', 1);
    u(this, 'kind', 'U16');
    u(this, 'value');
    this.value = [e[0]];
  }
  toJSON() {
    return { kind: 'U16', value: [this.value[0]] };
  }
  toEncodable() {
    return { U16: { _0: this.value[0] } };
  }
}
u(Tr, 'discriminator', 1), u(Tr, 'kind', 'U16');
Qe.U16 = Tr;
class Er {
  constructor(e) {
    u(this, 'discriminator', 2);
    u(this, 'kind', 'U64');
    u(this, 'value');
    this.value = [e[0]];
  }
  toJSON() {
    return { kind: 'U64', value: [this.value[0].toString()] };
  }
  toEncodable() {
    return { U64: { _0: this.value[0] } };
  }
}
u(Er, 'discriminator', 2), u(Er, 'kind', 'U64');
Qe.U64 = Er;
class Ir {
  constructor(e) {
    u(this, 'discriminator', 3);
    u(this, 'kind', 'Pubkey');
    u(this, 'value');
    this.value = [e[0]];
  }
  toJSON() {
    return { kind: 'Pubkey', value: [this.value[0].toString()] };
  }
  toEncodable() {
    return { Pubkey: { _0: this.value[0] } };
  }
}
u(Ir, 'discriminator', 3), u(Ir, 'kind', 'Pubkey');
Qe.Pubkey = Ir;
function Th(t) {
  if (typeof t != 'object') throw new Error('Invalid enum object');
  if ('Bool' in t) {
    const e = t.Bool;
    return new yr([e._0]);
  }
  if ('U16' in t) {
    const e = t.U16;
    return new Tr([e._0]);
  }
  if ('U64' in t) {
    const e = t.U64;
    return new Er([e._0]);
  }
  if ('Pubkey' in t) {
    const e = t.Pubkey;
    return new Ir([e._0]);
  }
  throw new Error('Invalid enum object');
}
function Eh(t) {
  switch (t.kind) {
    case 'Bool':
      return new yr([t.value[0]]);
    case 'U16':
      return new Tr([t.value[0]]);
    case 'U64':
      return new Er([new yh.default(t.value[0])]);
    case 'Pubkey':
      return new Ir([new Rh.PublicKey(t.value[0])]);
  }
}
function Ih(t) {
  const e = Nt.rustEnum([
    Nt.struct([Nt.bool('_0')], 'Bool'),
    Nt.struct([Nt.u16('_0')], 'U16'),
    Nt.struct([Nt.u64('_0')], 'U64'),
    Nt.struct([Nt.publicKey('_0')], 'Pubkey'),
  ]);
  return t !== void 0 ? e.replicate(t) : e;
}
var wh =
    (b && b.__createBinding) ||
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
  bh =
    (b && b.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  Oi =
    (b && b.__importStar) ||
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
          for (var r = t(e), o = 0; o < r.length; o++) r[o] !== 'default' && wh(n, e, r[o]);
        return bh(n, e), n;
      };
    })();
Object.defineProperty(ct, '__esModule', { value: !0 });
ct.UpdateGlobalConfigValue = ct.UpdateGlobalConfigMode = ct.OrderType = ct.OrderStatus = void 0;
const Nh = Oi(At);
ct.OrderStatus = Nh;
const Ch = Oi(An);
ct.OrderType = Ch;
const Sh = Oi(Se);
ct.UpdateGlobalConfigMode = Sh;
const vh = Oi(Qe);
ct.UpdateGlobalConfigValue = vh;
var dc;
function hl() {
  if (dc) return at;
  dc = 1;
  var t =
      (b && b.__createBinding) ||
      (Object.create
        ? function (I, B, F, $) {
            $ === void 0 && ($ = F);
            var T = Object.getOwnPropertyDescriptor(B, F);
            (!T || ('get' in T ? !B.__esModule : T.writable || T.configurable)) &&
              (T = {
                enumerable: !0,
                get: function () {
                  return B[F];
                },
              }),
              Object.defineProperty(I, $, T);
          }
        : function (I, B, F, $) {
            $ === void 0 && ($ = F), (I[$] = B[F]);
          }),
    e =
      (b && b.__setModuleDefault) ||
      (Object.create
        ? function (I, B) {
            Object.defineProperty(I, 'default', { enumerable: !0, value: B });
          }
        : function (I, B) {
            I.default = B;
          }),
    n =
      (b && b.__importStar) ||
      (function () {
        var I = function (B) {
          return (
            (I =
              Object.getOwnPropertyNames ||
              function (F) {
                var $ = [];
                for (var T in F) Object.prototype.hasOwnProperty.call(F, T) && ($[$.length] = T);
                return $;
              }),
            I(B)
          );
        };
        return function (B) {
          if (B && B.__esModule) return B;
          var F = {};
          if (B != null)
            for (var $ = I(B), T = 0; T < $.length; T++) $[T] !== 'default' && t(F, B, $[T]);
          return e(F, B), F;
        };
      })();
  Object.defineProperty(at, '__esModule', { value: !0 }),
    (at.initializeGlobalConfig = a),
    (at.initializeVault = _),
    (at.createOrder = A),
    (at.takeOrder = h),
    (at.flashTakeOrder = m),
    (at.closeOrderAndClaimTip = g),
    (at.withdrawHostTipIx = R),
    (at.updateGlobalConfigIx = w),
    (at.updateGlobalConfigAdminIx = N);
  const r = n(rs),
    o = n(or),
    i = _e,
    c = _i(),
    d = or,
    p = ct;
  function a(I, B, F, $) {
    let T = { adminAuthority: I, pdaAuthority: F, globalConfig: B };
    return r.initializeGlobalConfig(T, $);
  }
  function _(I, B, F, $, T) {
    let y = (0, c.getTokenVaultPDA)($, B, F),
      v = (0, c.getPdaAuthority)($, B),
      M = {
        payer: I,
        globalConfig: B,
        pdaAuthority: v,
        mint: F,
        vault: y,
        tokenProgram: T,
        systemProgram: o.web3.SystemProgram.programId,
      };
    return r.initializeVault(M, $);
  }
  function A(I, B, F, $, T, y, v) {
    let M = (0, c.getTokenVaultPDA)(T, B, $.quoteTokenMint),
      G = (0, c.getTokenVaultPDA)(T, B, $.baseTokenMint),
      J = (0, c.getPdaAuthority)(T, B),
      z = {
        maker: I,
        globalConfig: B,
        pdaAuthority: J,
        order: F,
        inputMint: $.side === 'bid' ? $.baseTokenMint : $.quoteTokenMint,
        outputMint: $.side === 'bid' ? $.quoteTokenMint : $.baseTokenMint,
        makerAta:
          $.side === 'bid'
            ? (0, c.getAssociatedTokenAddress)(I, $.baseTokenMint, y)
            : (0, c.getAssociatedTokenAddress)(I, $.quoteTokenMint, v),
        inputVault: $.side === 'bid' ? G : M,
        inputTokenProgram: $.side === 'bid' ? y : v,
        outputTokenProgram: $.side === 'bid' ? v : y,
        eventAuthority: (0, c.getEventAuthorityPDA)(T),
        program: T,
        systemProgram: i.SystemProgram.programId,
      },
      S = {
        inputAmount: new d.BN($.side === 'bid' ? $.baseTokenAmount : $.quoteTokenAmount),
        outputAmount: new d.BN($.side === 'bid' ? $.quoteTokenAmount : $.baseTokenAmount),
        orderType: $.side === 'bid' ? 0 : 1,
      };
    return r.createOrder(S, z, T);
  }
  function h(I) {
    let B = (0, c.getPdaAuthority)(I.programId, I.globalConfig),
      F = (0, c.getTokenVaultPDA)(I.programId, I.globalConfig, I.inputMint),
      $ = {
        taker: I.taker,
        maker: I.maker,
        globalConfig: I.globalConfig,
        pdaAuthority: B,
        order: I.order,
        inputMint: I.inputMint,
        outputMint: I.outputMint,
        inputVault: F,
        expressRelay: I.expressRelayProgramId,
        expressRelayMetadata: (0, c.getExpressRelayMetadataPDA)(I.expressRelayProgramId),
        permission: I.permissionless ? I.programId : I.order,
        configRouter: (0, c.getExpressRelayConfigRouterPDA)(I.expressRelayProgramId, B),
        sysvarInstructions: o.web3.SYSVAR_INSTRUCTIONS_PUBKEY,
        takerInputAta: I.takerInputAta,
        intermediaryOutputTokenAccount: I.intermediaryOutputTokenAccount,
        takerOutputAta: I.takerOutputAta,
        makerOutputAta: I.makerOutputAta,
        inputTokenProgram: I.inputTokenProgram,
        outputTokenProgram: I.outputTokenProgram,
        systemProgram: i.SystemProgram.programId,
        rent: o.web3.SYSVAR_RENT_PUBKEY,
        eventAuthority: (0, c.getEventAuthorityPDA)(I.programId),
        program: I.programId,
      },
      T = {
        inputAmount: I.inputAmountLamports,
        minOutputAmount: I.minOutputAmountLamports,
        tipAmountPermissionlessTaking: I.permissionlessTipLamports,
      };
    return r.takeOrder(T, $, I.programId);
  }
  function m(I) {
    var J, z;
    let B = (0, c.getPdaAuthority)(I.programId, I.globalConfig),
      F = (0, c.getTokenVaultPDA)(I.programId, I.globalConfig, I.inputMint),
      $ = {
        taker: I.taker,
        maker: I.maker,
        globalConfig: I.globalConfig,
        pdaAuthority: B,
        order: I.order,
        inputMint: I.inputMint,
        outputMint: I.outputMint,
        inputVault: F,
        expressRelay: I.expressRelayProgramId,
        expressRelayMetadata: (0, c.getExpressRelayMetadataPDA)(I.expressRelayProgramId),
        permission: I.permissionless ? I.programId : I.order,
        configRouter: (0, c.getExpressRelayConfigRouterPDA)(I.expressRelayProgramId, B),
        sysvarInstructions: o.web3.SYSVAR_INSTRUCTIONS_PUBKEY,
        takerInputAta: I.takerInputAta,
        takerOutputAta: I.takerOutputAta,
        intermediaryOutputTokenAccount: I.intermediaryOutputTokenAccount,
        makerOutputAta: I.makerOutputAta,
        inputTokenProgram: I.inputTokenProgram,
        outputTokenProgram: I.outputTokenProgram,
        systemProgram: i.SystemProgram.programId,
        rent: o.web3.SYSVAR_RENT_PUBKEY,
        eventAuthority: (0, c.getEventAuthorityPDA)(I.programId),
        program: I.programId,
      },
      T = {
        inputAmount: new d.BN(I.inputAmountLamports),
        minOutputAmount: new d.BN(I.minOutputAmountLamports),
        tipAmountPermissionlessTaking: (J = I.permissionlessTipLamports) != null ? J : new d.BN(0),
      },
      y = r.flashTakeOrderStart(T, $, I.programId),
      v = {
        taker: I.taker,
        maker: I.maker,
        globalConfig: I.globalConfig,
        pdaAuthority: B,
        order: I.order,
        inputMint: I.inputMint,
        outputMint: I.outputMint,
        inputVault: F,
        expressRelay: I.expressRelayProgramId,
        expressRelayMetadata: (0, c.getExpressRelayMetadataPDA)(I.expressRelayProgramId),
        permission: I.permissionless ? I.programId : I.order,
        configRouter: (0, c.getExpressRelayConfigRouterPDA)(I.expressRelayProgramId, B),
        sysvarInstructions: o.web3.SYSVAR_INSTRUCTIONS_PUBKEY,
        takerInputAta: I.takerInputAta,
        takerOutputAta: I.takerOutputAta,
        intermediaryOutputTokenAccount: I.intermediaryOutputTokenAccount,
        makerOutputAta: I.makerOutputAta,
        inputTokenProgram: I.inputTokenProgram,
        outputTokenProgram: I.outputTokenProgram,
        systemProgram: i.SystemProgram.programId,
        rent: o.web3.SYSVAR_RENT_PUBKEY,
        eventAuthority: (0, c.getEventAuthorityPDA)(I.programId),
        program: I.programId,
      },
      M = {
        inputAmount: new d.BN(I.inputAmountLamports),
        minOutputAmount: new d.BN(I.minOutputAmountLamports),
        tipAmountPermissionlessTaking: (z = I.permissionlessTipLamports) != null ? z : new d.BN(0),
      },
      G = r.flashTakeOrderEnd(M, v, I.programId);
    return { startIx: y, endIx: G };
  }
  function g(I) {
    let B = (0, c.getPdaAuthority)(I.programId, I.globalConfig),
      F = (0, c.getTokenVaultPDA)(I.programId, I.globalConfig, I.inputMint),
      $ = {
        maker: I.maker,
        order: I.order,
        globalConfig: I.globalConfig,
        pdaAuthority: B,
        inputMint: I.inputMint,
        outputMint: I.outputMint,
        makerInputAta: I.makerInputAta,
        inputVault: F,
        inputTokenProgram: I.inputTokenProgram,
        systemProgram: i.SystemProgram.programId,
        eventAuthority: (0, c.getEventAuthorityPDA)(I.programId),
        program: I.programId,
      };
    return r.closeOrderAndClaimTip($, I.programId);
  }
  function R(I) {
    let B = (0, c.getPdaAuthority)(I.programId, I.globalConfig),
      F = {
        adminAuthority: I.admin,
        globalConfig: I.globalConfig,
        pdaAuthority: B,
        systemProgram: i.SystemProgram.programId,
      };
    return r.withdrawHostTip(F, I.programId);
  }
  function w(I, B, F, $, T) {
    let y = { adminAuthority: I, globalConfig: B },
      v = { mode: F.discriminator, value: P(F, $) };
    return r.updateGlobalConfig(v, y, T);
  }
  function N(I, B, F) {
    let $ = { adminAuthorityCached: B.adminAuthorityCached, globalConfig: I };
    return r.updateGlobalConfigAdmin($, F);
  }
  function P(I, B) {
    const F = ie.Buffer.alloc(128);
    let $, T;
    switch (I.discriminator) {
      case p.UpdateGlobalConfigMode.UpdateEmergencyMode.discriminator:
      case p.UpdateGlobalConfigMode.UpdateFlashTakeOrderBlocked.discriminator:
      case p.UpdateGlobalConfigMode.UpdateBlockNewOrders.discriminator:
      case p.UpdateGlobalConfigMode.UpdateBlockOrderTaking.discriminator:
      case p.UpdateGlobalConfigMode.UpdateOrderTakingPermissionless.discriminator:
        ($ = B), F.writeUIntLE($, 0, 1);
        break;
      case p.UpdateGlobalConfigMode.UpdateHostFeeBps.discriminator:
        ($ = B), F.writeUInt16LE($, 0);
        break;
      case p.UpdateGlobalConfigMode.UpdateOrderCloseDelaySeconds.discriminator:
        ($ = B), F.writeBigUInt64LE(BigInt(B.toString()), 0);
        break;
      case p.UpdateGlobalConfigMode.UpdateAdminAuthorityCached.discriminator:
        (T = B.toBuffer()), T.copy(F, 0);
        break;
    }
    const y = new Uint8Array(F);
    return Array.from(y);
  }
  return at;
}
var sn = {},
  fc;
function Ph() {
  if (fc) return sn;
  fc = 1;
  var t =
      (b && b.__createBinding) ||
      (Object.create
        ? function (R, w, N, P) {
            P === void 0 && (P = N);
            var I = Object.getOwnPropertyDescriptor(w, N);
            (!I || ('get' in I ? !w.__esModule : I.writable || I.configurable)) &&
              (I = {
                enumerable: !0,
                get: function () {
                  return w[N];
                },
              }),
              Object.defineProperty(R, P, I);
          }
        : function (R, w, N, P) {
            P === void 0 && (P = N), (R[P] = w[N]);
          }),
    e =
      (b && b.__setModuleDefault) ||
      (Object.create
        ? function (R, w) {
            Object.defineProperty(R, 'default', { enumerable: !0, value: w });
          }
        : function (R, w) {
            R.default = w;
          }),
    n =
      (b && b.__importStar) ||
      (function () {
        var R = function (w) {
          return (
            (R =
              Object.getOwnPropertyNames ||
              function (N) {
                var P = [];
                for (var I in N) Object.prototype.hasOwnProperty.call(N, I) && (P[P.length] = I);
                return P;
              }),
            R(w)
          );
        };
        return function (w) {
          if (w && w.__esModule) return w;
          var N = {};
          if (w != null)
            for (var P = R(w), I = 0; I < P.length; I++) P[I] !== 'default' && t(N, w, P[I]);
          return e(N, w), N;
        };
      })(),
    r =
      (b && b.__importDefault) ||
      function (R) {
        return R && R.__esModule ? R : { default: R };
      };
  Object.defineProperty(sn, '__esModule', { value: !0 }),
    (sn.setUpProgram = A),
    (sn.createGlobalAccounts = h),
    (sn.setGlobalAccounts = m),
    (sn.createUser = g);
  const o = _e,
    i = n(or),
    c = _i(),
    d = _i(),
    p = r(Pr),
    a = nu(),
    _ = zt;
  function A(R) {
    if (!R.clusterOverride) throw new Error('Cluster is required');
    const w = R.clusterOverride,
      N = {
        commitment: i.AnchorProvider.defaultOptions().commitment,
        confirmTransactionInitialTimeout: 22e4,
      },
      P = new o.Connection((0, c.endpointFromCluster)(w), N),
      I = R.adminFilePath ? (0, d.parseKeypairFile)(R.adminFilePath) : o.Keypair.generate(),
      B = new i.Wallet(I),
      F = new i.AnchorProvider(P, B, i.AnchorProvider.defaultOptions()),
      $ = I;
    i.setProvider(F);
    const T = R.programOverride || (0, c.getLimoProgramId)(w),
      y = new i.Program(d.LimoIdl, T);
    return { admin: $, provider: F, conn: P, program: y, cluster: w };
  }
  async function h(R, w = R.admin, N = ['SOL', 'USDC', 'KMNO']) {
    const P = o.Keypair.generate(),
      I = new Map(),
      B = new Map();
    for (const y of N)
      if (y === 'SOL') {
        I.set(y, new c.TokenInfo(y, a.WRAPPED_SOL_MINT, 9));
        let v = (0, c.getTokenVaultPDA)(R.program.programId, P.publicKey, a.WRAPPED_SOL_MINT);
        B.set(y, v), (0, c.solAirdrop)(R.provider, w.publicKey, new p.default(100));
      } else {
        const v = await (0, c.createMint)(R.provider, R.provider.wallet.publicKey, 6);
        let M = (0, c.getTokenVaultPDA)(R.program.programId, P.publicKey, v);
        I.set(y, new c.TokenInfo(y, v, 6)), B.set(y, M);
        const G = await (0, c.setupAta)(R.provider, v, w);
        await (0, c.mintTo)(
          R.provider,
          v,
          G,
          (0, c.amountToLamportsDecimal)(new p.default(1e5), 6).toNumber(),
          6
        );
      }
    let F = (0, c.getPdaAuthority)(R.program.programId, P.publicKey);
    const $ = new a.LimoClient(R.conn, void 0),
      T = { globalAdmin: w, globalConfig: P, pdaAuthority: F, tokens: I, vaults: B, limoClient: $ };
    return (0, c.solAirdrop)(R.provider, F, new p.default(0.1)), T;
  }
  async function m(R, w = R.admin, N = !1) {
    const P = await h(R, w),
      I = P.limoClient;
    if (
      (await I.createGlobalConfig(P.globalAdmin, P.globalConfig),
      I.setGlobalConfig(P.globalConfig.publicKey),
      !N)
    )
      for (const [, B] of P.tokens.entries()) await I.initializeVault(P.globalAdmin, B.mint);
    return P;
  }
  async function g(R, w, N, P) {
    P || (P = new i.web3.Keypair());
    const I = new Map();
    for (const { token: F, amount: $ } of N) {
      const T = w.tokens.get(F);
      if (
        (I.set(F, (0, c.getAssociatedTokenAddress)(P.publicKey, T.mint, _.TOKEN_PROGRAM_ID)),
        !$.isZero())
      )
        if (F === 'SOL')
          await (0, c.solAirdrop)(R.provider, P.publicKey, $), await (0, c.sleep)(1e3);
        else {
          const y = await (0, c.setupAta)(R.provider, T.mint, P);
          await (0, c.mintTo)(
            R.provider,
            T.mint,
            y,
            (0, c.amountToLamportsDecimal)($, T.mintDecimals).toNumber(),
            T.mintDecimals
          ),
            await (0, c.sleep)(1e3);
        }
    }
    return { owner: P, tokenAtas: I };
  }
  return sn;
}
var Ri = {};
Object.defineProperty(Ri, '__esModule', { value: !0 });
Ri.getReadOnlyWallet = void 0;
const Mh = _e,
  kh = () => {
    const t = Mh.Keypair.generate();
    return {
      payer: t,
      publicKey: t.publicKey,
      signAllTransactions: async (e) => e,
      signTransaction: async (e) => e,
    };
  };
Ri.getReadOnlyWallet = kh;
var ml = {};
Object.defineProperty(ml, '__esModule', { value: !0 });
var yi = {};
Object.defineProperty(yi, '__esModule', { value: !0 });
yi.FilledOrderQueue = void 0;
class Dh {
  constructor(e = 10, n = []) {
    u(this, 'queue');
    u(this, 'maxSize');
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
yi.FilledOrderQueue = Dh;
var pc;
function gl() {
  return (
    pc ||
      ((pc = 1),
      (function (t) {
        var e =
            (b && b.__createBinding) ||
            (Object.create
              ? function (r, o, i, c) {
                  c === void 0 && (c = i);
                  var d = Object.getOwnPropertyDescriptor(o, i);
                  (!d || ('get' in d ? !o.__esModule : d.writable || d.configurable)) &&
                    (d = {
                      enumerable: !0,
                      get: function () {
                        return o[i];
                      },
                    }),
                    Object.defineProperty(r, c, d);
                }
              : function (r, o, i, c) {
                  c === void 0 && (c = i), (r[c] = o[i]);
                }),
          n =
            (b && b.__exportStar) ||
            function (r, o) {
              for (var i in r)
                i !== 'default' && !Object.prototype.hasOwnProperty.call(o, i) && e(o, r, i);
            };
        Object.defineProperty(t, '__esModule', { value: !0 }),
          n(hl(), t),
          n(Ph(), t),
          n(_i(), t),
          n(Ri, t),
          n(ml, t),
          n(yi, t),
          n(sl, t);
      })(fo)),
    fo
  );
}
var _c;
function nu() {
  return (
    _c ||
      ((_c = 1),
      (function (t) {
        var e = {},
          n =
            (b && b.__createBinding) ||
            (Object.create
              ? function ($, T, y, v) {
                  v === void 0 && (v = y);
                  var M = Object.getOwnPropertyDescriptor(T, y);
                  (!M || ('get' in M ? !T.__esModule : M.writable || M.configurable)) &&
                    (M = {
                      enumerable: !0,
                      get: function () {
                        return T[y];
                      },
                    }),
                    Object.defineProperty($, v, M);
                }
              : function ($, T, y, v) {
                  v === void 0 && (v = y), ($[v] = T[y]);
                }),
          r =
            (b && b.__setModuleDefault) ||
            (Object.create
              ? function ($, T) {
                  Object.defineProperty($, 'default', { enumerable: !0, value: T });
                }
              : function ($, T) {
                  $.default = T;
                }),
          o =
            (b && b.__importStar) ||
            (function () {
              var $ = function (T) {
                return (
                  ($ =
                    Object.getOwnPropertyNames ||
                    function (y) {
                      var v = [];
                      for (var M in y)
                        Object.prototype.hasOwnProperty.call(y, M) && (v[v.length] = M);
                      return v;
                    }),
                  $(T)
                );
              };
              return function (T) {
                if (T && T.__esModule) return T;
                var y = {};
                if (T != null)
                  for (var v = $(T), M = 0; M < v.length; M++) v[M] !== 'default' && n(y, T, v[M]);
                return r(y, T), y;
              };
            })(),
          i =
            (b && b.__importDefault) ||
            function ($) {
              return $ && $.__esModule ? $ : { default: $ };
            };
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.LimoClient =
            t.MAX_CLOSE_ORDER_AND_CLAIM_TIP_ORDERS_IN_TX =
            t.ORDER_RENT_EXEMPTION_LAMPORTS =
            t.WRAPPED_SOL_MINT =
            t.limoId =
              void 0);
        const c = or,
          d = i(al),
          p = i(nt),
          a = _e,
          _ = gl(),
          A = o(hl()),
          h = _e,
          m = Hn,
          g = i(Pr),
          R = Dr,
          w = ct,
          N = zt,
          P = zt,
          I = i(Mr),
          B = rs;
        (t.limoId = new a.PublicKey('LiMoM9rMhrdYrfzUCxQppvxCSG1FcrUK9G8uLq4A1GF')),
          (t.WRAPPED_SOL_MINT = new a.PublicKey('So11111111111111111111111111111111111111112')),
          (t.ORDER_RENT_EXEMPTION_LAMPORTS = 3841920),
          (t.MAX_CLOSE_ORDER_AND_CLAIM_TIP_ORDERS_IN_TX = 14);
        class F {
          constructor(T, y, v) {
            u(this, '_connection');
            u(this, '_provider');
            u(this, '_limoProgram');
            u(this, 'programId');
            u(this, 'globalConfigState');
            u(this, '_globalConfig');
            (this._connection = T),
              (this._globalConfig = y != null ? y : a.PublicKey.default),
              (this._provider = new c.AnchorProvider(T, (0, _.getReadOnlyWallet)(), {
                commitment: T.commitment,
              })),
              (this.programId = t.limoId),
              (this._limoProgram = new c.Program(d.default, this.programId, this._provider)),
              (this.globalConfigState = v);
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
          setGlobalConfig(T) {
            this._globalConfig = T;
          }
          async refreshGlobalConfigState() {
            if (!this._globalConfig) throw new Error('Global Config not set');
            const T = await m.GlobalConfig.fetch(this._connection, this._globalConfig);
            if (!T) throw new Error('Global Config not found');
            return (this.globalConfigState = T), this.globalConfigState;
          }
          async getGlobalConfigState() {
            if (!this._globalConfig) throw new Error('Global Config not set');
            if (!this.globalConfigState) {
              const T = await m.GlobalConfig.fetch(this._connection, this._globalConfig);
              if (!T) throw new Error('Global Config not found');
              this.globalConfigState = T;
            }
            return this.globalConfigState;
          }
          getGlobalConfigStateSync() {
            if (!this._globalConfig) throw new Error('Global Config not set');
            if (!this.globalConfigState)
              throw new Error('Global Config state not fetched yet, use getGlobalConfigState');
            return this.globalConfigState;
          }
          async getOrderState(T) {
            const y = await R.Order.fetch(this._connection, T, this.programId);
            if (!y) throw new Error('Order not found');
            return y;
          }
          async getAllOrdersStateAndAddressWithFilters(T, y, v = !0) {
            return (
              v &&
                T.push({
                  memcmp: { bytes: y ? y.toBase58() : this._globalConfig.toBase58(), offset: 8 },
                }),
              T.push({ dataSize: R.Order.layout.span + 8 }),
              (await this._connection.getProgramAccounts(this.programId, { filters: T })).map(
                (G) => {
                  if (G.account === null) throw new Error('Invalid account');
                  if (!G.account.owner.equals(this.programId))
                    throw new Error("account doesn't belong to this program");
                  const J = R.Order.decode(G.account.data);
                  if (!J) throw Error('Could not parse obligation.');
                  return { state: J, address: G.pubkey };
                }
              )
            );
          }
          async getAllOrdersStateAndAddressForGlobalConfig(T) {
            return this.getAllOrdersStateAndAddressWithFilters([], T);
          }
          async getAllOrdersDisplayForGlobalConfig(T, y) {
            const v = await this.getAllOrdersStateAndAddressWithFilters([], y);
            return this.toOrdersDisplay(v, T);
          }
          async getAllOrdersStateAndAddressForMaker(T, y) {
            const v = [{ memcmp: { bytes: T.toBase58(), offset: 40 } }];
            return this.getAllOrdersStateAndAddressWithFilters(v, y);
          }
          async getAllOrdersDisplayForMaker(T, y, v) {
            const M = await this.getAllOrdersStateAndAddressForMaker(T, v),
              G = [];
            for (const z of M) G.push(z.state.inputMint), G.push(z.state.outputMint);
            let J = y != null ? y : await this.getMintDecimals(G);
            return this.toOrdersDisplay(M, J);
          }
          async getAllOrdersStateAndAddressForInputMint(T, y) {
            const v = [{ memcmp: { bytes: T.toBase58(), offset: 72 } }];
            return this.getAllOrdersStateAndAddressWithFilters(v, y);
          }
          async getAllOrdersDisplayForInputMint(T, y, v) {
            const M = await this.getAllOrdersStateAndAddressForInputMint(T, v);
            return this.toOrdersDisplay(M, y);
          }
          async getAllOrdersStateAndAddressForOutputMint(T, y) {
            const v = [{ memcmp: { bytes: T.toBase58(), offset: 136 } }];
            return this.getAllOrdersStateAndAddressWithFilters(v, y);
          }
          async getAllOrdersDisplayForOutputMint(T, y, v) {
            const M = await this.getAllOrdersStateAndAddressForOutputMint(T, v);
            return this.toOrdersDisplay(M, y);
          }
          async getAllOrdersDisplayForInputAndOutputMints(T, y, v, M) {
            const G = [
                { memcmp: { bytes: T.toBase58(), offset: 72 } },
                { memcmp: { bytes: y.toBase58(), offset: 136 } },
              ],
              J = await this.getAllOrdersStateAndAddressWithFilters(G, M);
            let z = new _.PubkeyHashMap();
            if (v) z = v;
            else {
              const S = await (0, _.getMintDecimals)(this._connection, T),
                k = await (0, _.getMintDecimals)(this._connection, y);
              z.set(T, S), z.set(y, k);
            }
            return this.toOrdersDisplay(J, z);
          }
          async getAllOrdersDisplayForMakerInputAndOutputMints(T, y, v, M, G) {
            const J = ie.Buffer.concat([
                new Uint8Array(T.toBuffer()),
                new Uint8Array(y.toBuffer()),
              ]),
              z = [
                { memcmp: { bytes: I.default.encode(J), offset: 40 } },
                { memcmp: { bytes: v.toBase58(), offset: 136 } },
              ],
              S = await this.getAllOrdersStateAndAddressWithFilters(z, G);
            let k = new _.PubkeyHashMap();
            if (M) {
              const q = await (0, _.getMintDecimals)(this._connection, y),
                ee = await (0, _.getMintDecimals)(this._connection, v);
              k.set(y, q), k.set(v, ee);
            }
            return this.toOrdersDisplay(S, k);
          }
          async getOrderDisplay(T) {
            const y = await R.Order.fetch(this._connection, T, this.programId);
            if (!y) throw new Error('Order not found');
            const v = await (0, _.getMintDecimals)(this._connection, y.inputMint),
              M = await (0, _.getMintDecimals)(this._connection, y.outputMint),
              G = new _.PubkeyHashMap();
            return (
              G.set(y.inputMint, v),
              G.set(y.outputMint, M),
              this.toOrdersDisplay([{ address: T, state: y }], G)[0]
            );
          }
          toOrdersDisplay(T, y) {
            const v = [];
            for (const M of T) {
              const G = y.get(M.state.inputMint);
              if (!G)
                throw new Error(
                  'Mint decimals not found for mint + ' + M.state.inputMint.toBase58()
                );
              const J = y.get(M.state.outputMint);
              if (!J)
                throw new Error(
                  'Mint decimals not found for mint + ' + M.state.outputMint.toBase58()
                );
              const z = new g.default(M.state.initialInputAmount.toString()).div(
                  new g.default(10).pow(G)
                ),
                S = new g.default(M.state.expectedOutputAmount.toString()).div(
                  new g.default(10).pow(J)
                ),
                k = new g.default(M.state.remainingInputAmount.toString()).div(
                  new g.default(10).pow(G)
                ),
                q = new g.default(M.state.filledOutputAmount.toString()).div(
                  new g.default(10).pow(J)
                ),
                ee = z.sub(k).div(z),
                H = new g.default(M.state.tipAmount.toString()),
                V = (0, _.lamportsToAmountDecimal)(H, 9);
              v.push({
                address: M.address,
                state: M.state,
                maker: M.state.maker,
                initialInputAmountDecimal: z,
                expectedOutputAmountDecimal: S,
                remainingInputAmountDecimal: k,
                filledOutputAmountDecimal: q,
                numberOfFills: M.state.numberOfFills.toNumber(),
                orderFillPct: ee,
                orderPriceInputToOutput: z.div(S),
                orderPriceOutputToInput: S.div(z),
                executionPriceInputToOutput: z.sub(k).div(q),
                executionPriceOutputToInput: q.div(z.sub(k)),
                orderTipLamports: H,
                orderTipDecimal: V,
              });
            }
            return v;
          }
          async getOrdersDisplayForBaseAndQuote(T, y, v, M) {
            const G = await this.getAllOrdersDisplayForInputAndOutputMints(T, y, v, M),
              J = await this.getAllOrdersDisplayForInputAndOutputMints(y, T, v, M);
            return { bidOrders: G, askOrders: J };
          }
          async getOrdersDisplayForBaseAndQuoteAndMaker(T, y, v, M, G) {
            const J = await this.getAllOrdersDisplayForMakerInputAndOutputMints(T, y, v, M, G),
              z = await this.getAllOrdersDisplayForMakerInputAndOutputMints(T, v, y, M, G);
            return { bidOrders: J, askOrders: z };
          }
          async getLatestFilledOrders(T, y, v, M) {
            const { askOrders: G, bidOrders: J } = await this.getOrdersDisplayForBaseAndQuote(
                T,
                y,
                v,
                M
              ),
              z = [],
              S = [];
            for (const k of G)
              k.state.remainingInputAmount.toNumber() < k.state.initialInputAmount.toNumber() &&
                z.push({
                  address: k.address,
                  orderDisplay: k,
                  quoteTokenMint: y,
                  baseTokenMint: T,
                  time: k.state.lastUpdatedTimestamp.toNumber(),
                  price: k.executionPriceOutputToInput,
                  size: k.filledOutputAmountDecimal,
                  txid: 'N/A',
                  type: 'sell',
                });
            for (const k of J)
              k.state.remainingInputAmount.toNumber() < k.state.initialInputAmount.toNumber() &&
                S.push({
                  address: k.address,
                  orderDisplay: k,
                  quoteTokenMint: y,
                  baseTokenMint: T,
                  time: k.state.lastUpdatedTimestamp.toNumber(),
                  price: k.executionPriceInputToOutput,
                  size: k.filledOutputAmountDecimal,
                  txid: 'N/A',
                  type: 'buy',
                });
            return (
              S.sort((k, q) => -(k.time - q.time)),
              z.sort((k, q) => -(k.time - q.time)),
              { filledOrdersBuy: S, filledOrdersSell: z }
            );
          }
          listenToMakerOrders(T, y) {
            const v = [{ memcmp: { bytes: T.toBase58(), offset: 40 } }];
            return this.listenToOrdersChangeWithFilters(v, y);
          }
          listenToOrderChangeForBaseAndQuote(T, y, v, M) {
            const G = [
                { memcmp: { bytes: T.toBase58(), offset: 72 } },
                { memcmp: { bytes: y.toBase58(), offset: 136 } },
              ],
              J = [
                { memcmp: { bytes: y.toBase58(), offset: 72 } },
                { memcmp: { bytes: T.toBase58(), offset: 136 } },
              ],
              z = this.listenToOrdersChangeWithFilters(J, v),
              S = this.listenToOrdersChangeWithFilters(G, M);
            return { subscriptionIdSellOrders: z, subscriptionIdBuyOrders: S };
          }
          listenToOrderFillChangeForBaseAndQuote(T, y, v, M) {
            const G = [
                { memcmp: { bytes: T.toBase58(), offset: 72 } },
                { memcmp: { bytes: y.toBase58(), offset: 136 } },
              ],
              J = [
                { memcmp: { bytes: y.toBase58(), offset: 72 } },
                { memcmp: { bytes: T.toBase58(), offset: 136 } },
              ],
              z = (ee, H) => {
                ee.state.remainingInputAmount.toNumber() < ee.state.initialInputAmount.toNumber() &&
                  v(ee, H);
              },
              S = (ee, H) => {
                ee.state.remainingInputAmount.toNumber() < ee.state.initialInputAmount.toNumber() &&
                  M(ee, H);
              },
              k = this.listenToOrdersChangeWithFilters(J, z),
              q = this.listenToOrdersChangeWithFilters(G, S);
            return { subscriptionIdSellOrders: k, subscriptionIdBuyOrders: q };
          }
          listenToOrdersChangeWithFilters(T, y) {
            T.push({ memcmp: { bytes: this._globalConfig.toBase58(), offset: 8 } }),
              T.push({ dataSize: R.Order.layout.span + 8 });
            const v = async (G, J) => {
              if (G.accountInfo === null) throw new Error('Invalid account');
              if (!G.accountInfo.owner.equals(this.programId))
                throw new Error("account doesn't belong to this program");
              const z = R.Order.decode(G.accountInfo.data);
              if (!z) throw Error('Could not parse obligation.');
              y({ state: z, address: G.accountId }, J.slot);
            };
            return this._connection.onProgramAccountChange(this.programId, v, {
              commitment: 'confirmed',
              encoding: 'base64',
              filters: T,
            });
          }
          stopListeningToOrdersChange(T) {
            this._connection.removeProgramAccountChangeListener(T);
          }
          async createGlobalConfigIxs(T, y) {
            let v = [];
            const M = m.GlobalConfig.layout.getSpan() + 8;
            v.push(
              (0, _.createKeypairRentExemptIxSync)(
                T,
                y,
                M,
                await this._connection.getMinimumBalanceForRentExemption(M),
                this.programId
              )
            );
            const G = (0, _.getPdaAuthority)(this.programId, y.publicKey);
            return v.push(A.initializeGlobalConfig(T, y.publicKey, G, this.programId)), v;
          }
          async createGlobalConfig(T, y) {
            const v = await this.createGlobalConfigIxs(T.publicKey, y),
              M = await this.executeTransaction(v, T, [y]);
            return (
              e.DEBUG === 'true' && console.log('Initialize Global Config txn: ' + M.toString()), M
            );
          }
          async initializeVaultIx(T, y, v) {
            const M = v || (await this.getMintsProgramOwners([y]))[0];
            return (
              await this.getGlobalConfigState(),
              A.initializeVault(T, this._globalConfig, y, this.programId, M)
            );
          }
          async initializeVault(T, y, v = 'execute', M) {
            const G = await this.initializeVaultIx(T.publicKey, y, M),
              z =
                'Initialize Vault: ' +
                (0, _.getTokenVaultPDA)(this.programId, this._globalConfig, y).toString();
            return this.processTxn(T, [G], v, z, []);
          }
          async createOrderGenericIx(T, y, v, M, G, J, z, S, k = !0, q) {
            let ee;
            if (q === void 0)
              try {
                const pe = (0, _.getTokenVaultPDA)(this.programId, this._globalConfig, y);
                ee = !(await (0, _.checkIfAccountExists)(this._connection, pe));
              } catch (pe) {
                ee = !1;
              }
            else ee = q;
            const H = h.Keypair.generate(),
              V = {
                side: 'bid',
                quoteTokenMint: v,
                baseTokenMint: y,
                quoteTokenAmount: G,
                baseTokenAmount: M,
              },
              te = [];
            ee && te.push(A.initializeVault(T, this._globalConfig, y, this.programId, J)),
              te.push(
                (0, _.createKeypairRentExemptIxSync)(
                  T,
                  H,
                  R.Order.layout.getSpan() + 8,
                  t.ORDER_RENT_EXEMPTION_LAMPORTS,
                  this.programId
                )
              );
            const se = J,
              ce = z;
            let ue = [];
            if (y.equals(t.WRAPPED_SOL_MINT) && k) {
              const {
                createIxs: pe,
                fillIxs: ge,
                closeIx: Ae,
              } = this.getInitIfNeededWSOLCreateAndCloseIxs(T, T, M);
              te.push(...pe, ...ge), (ue = Ae);
            }
            return (
              te.push(
                A.createOrder(T, S || this._globalConfig, H.publicKey, V, this.programId, se, ce)
              ),
              te.push(...ue),
              [te, H]
            );
          }
          async createOrderGeneric(T, y, v, M, G, J = 'execute', z, S, k) {
            const [q, ee] = await this.createOrderGenericIx(T.publicKey, y, v, M, G, z, S, k),
              H = 'Create Order: ' + ee.publicKey.toString();
            return [await this.processTxn(T, q, J, H, [ee]), ee];
          }
          async placeBidIxs(T, y, v, M, G, J, z, S, k) {
            let q, ee;
            return (
              S && ((q = S.get(v)), (ee = S.get(y))),
              (q = q || (await (0, _.getMintDecimals)(this._connection, v))),
              (ee = ee || (await (0, _.getMintDecimals)(this._connection, y))),
              this.createOrderGenericIx(
                T,
                v,
                y,
                (0, _.amountToLamportsBN)(M, q),
                (0, _.amountToLamportsBN)(M.div(G), ee),
                J,
                z,
                k
              )
            );
          }
          async placeBid(T, y, v, M, G, J = 'execute', z, S, k, q) {
            const [ee, H] = await this.placeBidIxs(T.publicKey, y, v, M, G, z, S, k, q),
              V =
                'Place Order: Buy ' +
                y.toString().slice(0, 5) +
                ' at price:' +
                G +
                ' for ' +
                M +
                ' ' +
                v.toString().slice(0, 5) +
                ' Order: ' +
                H.publicKey.toString();
            return [await this.processTxn(T, ee, J, V, [H]), H];
          }
          async placeAskIxs(T, y, v, M, G, J, z, S, k) {
            let q, ee;
            return (
              S && ((q = S.get(v)), (ee = S.get(y))),
              (q = q || (await (0, _.getMintDecimals)(this._connection, v))),
              (ee = ee || (await (0, _.getMintDecimals)(this._connection, y))),
              this.createOrderGenericIx(
                T,
                y,
                v,
                (0, _.amountToLamportsBN)(M, ee),
                (0, _.amountToLamportsBN)(M.mul(G), q),
                J,
                z,
                k
              )
            );
          }
          async placeAsk(T, y, v, M, G, J = 'execute', z, S, k, q) {
            const [ee, H] = await this.placeAskIxs(T.publicKey, y, v, M, G, z, S, k, q),
              V =
                'Place Order: Sell ' +
                y.toString().slice(0, 5) +
                ' at price:' +
                G +
                ' for ' +
                M +
                ' ' +
                v.toString().slice(0, 5) +
                ' Order: ' +
                H.publicKey.toString();
            return [await this.processTxn(T, ee, J, V, [H]), H];
          }
          takeOrderIx(T, y, v, M, G, J, z, S = !0) {
            let k = [],
              q = [],
              ee;
            if (y.state.inputMint.equals(t.WRAPPED_SOL_MINT)) {
              const {
                createIxs: se,
                fillIxs: ce,
                closeIx: ue,
                ata: pe,
              } = this.getInitIfNeededWSOLCreateAndCloseIxs(T, T, new p.default(0));
              (ee = pe), S && (k.push(...se), q.push(...ue));
            } else {
              const { ata: se, createAtaIx: ce } = (0, _.createAtaIdempotent)(
                T,
                T,
                y.state.inputMint,
                y.state.inputMintProgramId
              );
              (ee = se), k.push(ce);
            }
            let H;
            if (y.state.outputMint.equals(t.WRAPPED_SOL_MINT)) {
              const se = (0, _.divCeil)(
                  y.state.expectedOutputAmount.mul(v),
                  y.state.initialInputAmount
                ),
                {
                  createIxs: ce,
                  fillIxs: ue,
                  closeIx: pe,
                  ata: ge,
                } = this.getInitIfNeededWSOLCreateAndCloseIxs(T, T, se);
              (H = ge), S && (k.push(...ce, ...ue), q.push(...pe));
            } else {
              const { ata: se, createAtaIx: ce } = (0, _.createAtaIdempotent)(
                T,
                T,
                y.state.outputMint,
                y.state.outputMintProgramId
              );
              (H = se), k.push(ce);
            }
            let V, te;
            if (y.state.outputMint.equals(t.WRAPPED_SOL_MINT))
              (V = this.getProgramID()),
                (te = (0, _.getIntermediaryTokenAccountPDA)(this.programId, y.address));
            else {
              const { ata: se, createAtaIx: ce } = (0, _.createAtaIdempotent)(
                y.state.maker,
                T,
                y.state.outputMint,
                y.state.outputMintProgramId
              );
              (V = se), k.push(ce), (te = this.programId);
            }
            return (
              k.push(
                A.takeOrder({
                  taker: T,
                  maker: y.state.maker,
                  globalConfig: y.state.globalConfig,
                  inputMint: y.state.inputMint,
                  outputMint: y.state.outputMint,
                  order: y.address,
                  inputAmountLamports: v,
                  minOutputAmountLamports: M,
                  programId: this.programId,
                  expressRelayProgramId: G,
                  takerInputAta: ee,
                  takerOutputAta: H,
                  intermediaryOutputTokenAccount: te,
                  makerOutputAta: V,
                  inputTokenProgram: y.state.inputMintProgramId,
                  outputTokenProgram: y.state.outputMintProgramId,
                  permissionlessTipLamports: J !== void 0 ? J : new p.default(0),
                  permissionless: z !== void 0 ? z : !1,
                })
              ),
              k.push(...q),
              k
            );
          }
          async permissionlessTakeOrder(T, y, v, M, G, J, z, S) {
            let k, q;
            S && ((k = S.get(y.state.inputMint)), (q = S.get(y.state.outputMint))),
              (k = k || (await (0, _.getMintDecimals)(this._connection, y.state.inputMint))),
              (q = q || (await (0, _.getMintDecimals)(this._connection, y.state.outputMint)));
            const ee = this.takeOrderIx(T.publicKey, y, v, M, G, z, !0),
              H = (0, _.divCeil)(y.state.expectedOutputAmount.mul(v), y.state.initialInputAmount),
              V =
                'Taker Order: ' +
                y.address.toString() +
                ' selling ' +
                (0, _.lamportsToAmountBN)(v, k).toString() +
                ' token ';
            return (
              y.state.inputMint.toString().slice(0, 5) +
                '' +
                (0, _.lamportsToAmountBN)(H, q).toString() +
                y.state.outputMint.toString().slice(0, 5),
              await this.processTxn(T, ee, J, V, [])
            );
          }
          flashTakeOrderIxs(T, y, v, M, G, J, z, S = !0) {
            let k = [],
              q = [],
              ee;
            if (y.state.inputMint.equals(t.WRAPPED_SOL_MINT)) {
              const {
                createIxs: ue,
                fillIxs: pe,
                closeIx: ge,
                ata: Ae,
              } = this.getInitIfNeededWSOLCreateAndCloseIxs(T, T, new p.default(0));
              (ee = Ae), S && (k.push(...ue), q.push(...ge));
            } else {
              const { ata: ue, createAtaIx: pe } = (0, _.createAtaIdempotent)(
                T,
                T,
                y.state.inputMint,
                y.state.inputMintProgramId
              );
              (ee = ue), k.push(pe);
            }
            let H;
            if (y.state.outputMint.equals(t.WRAPPED_SOL_MINT)) {
              const ue = (0, _.divCeil)(
                  y.state.expectedOutputAmount.mul(v),
                  y.state.initialInputAmount
                ),
                {
                  createIxs: pe,
                  fillIxs: ge,
                  closeIx: Ae,
                  ata: Ne,
                } = this.getInitIfNeededWSOLCreateAndCloseIxs(T, T, ue);
              (H = Ne), S && (k.push(...pe), q.push(...Ae));
            } else {
              const { ata: ue, createAtaIx: pe } = (0, _.createAtaIdempotent)(
                T,
                T,
                y.state.outputMint,
                y.state.outputMintProgramId
              );
              (H = ue), k.push(pe);
            }
            let V, te;
            if (y.state.outputMint.equals(t.WRAPPED_SOL_MINT))
              (V = this.getProgramID()),
                (te = (0, _.getIntermediaryTokenAccountPDA)(this.programId, y.address));
            else {
              const { ata: ue, createAtaIx: pe } = (0, _.createAtaIdempotent)(
                y.state.maker,
                T,
                y.state.outputMint,
                y.state.outputMintProgramId
              );
              (V = ue), k.push(pe), (te = this.programId);
            }
            const { startIx: se, endIx: ce } = A.flashTakeOrder({
              taker: T,
              maker: y.state.maker,
              globalConfig: y.state.globalConfig,
              inputMint: y.state.inputMint,
              outputMint: y.state.outputMint,
              order: y.address,
              inputAmountLamports: v,
              minOutputAmountLamports: M,
              programId: this.programId,
              expressRelayProgramId: G,
              takerInputAta: ee,
              takerOutputAta: H,
              intermediaryOutputTokenAccount: te,
              makerOutputAta: V,
              inputTokenProgram: y.state.inputMintProgramId,
              outputTokenProgram: y.state.outputMintProgramId,
              permissionlessTipLamports: J !== void 0 ? J : new p.default(0),
              permissionless: z !== void 0 ? z : !1,
            });
            return { createAtaIxs: k, startFlashIx: se, endFlashIx: ce, closeWsolAtaIxs: q };
          }
          async permissionlessFlashTakeOrder(T, y, v, M, G, J, z, S, k, q) {
            let ee, H;
            q && ((ee = q.get(y.state.inputMint)), (H = q.get(y.state.outputMint))),
              (ee = ee || (await (0, _.getMintDecimals)(this._connection, y.state.inputMint))),
              (H = H || (await (0, _.getMintDecimals)(this._connection, y.state.outputMint)));
            const {
                createAtaIxs: V,
                startFlashIx: te,
                endFlashIx: se,
                closeWsolAtaIxs: ce,
              } = this.flashTakeOrderIxs(T.publicKey, y, v, M, G, S, !0),
              ue = (0, _.divCeil)(y.state.expectedOutputAmount.mul(v), y.state.initialInputAmount),
              pe =
                'Taker Order: ' +
                y.address.toString() +
                ' selling ' +
                (0, _.lamportsToAmountBN)(v, ee).toString() +
                ' token ';
            return (
              y.state.inputMint.toString().slice(0, 5) +
                '' +
                (0, _.lamportsToAmountBN)(ue, H).toString() +
                y.state.outputMint.toString().slice(0, 5),
              await this.processTxn(T, [...V, te, ...z, se, ...ce], J, pe, k, 3e5)
            );
          }
          logUserSwapBalancesIxs(T, y, v, M, G, J = this.programId) {
            const z = (0, N.getAssociatedTokenAddressSync)(y, T, !0, M),
              S = (0, N.getAssociatedTokenAddressSync)(v, T, !0, G),
              k = (0, B.logUserSwapBalances)({
                maker: T,
                inputMint: y,
                outputMint: v,
                inputTa: z,
                outputTa: S,
                eventAuthority: (0, _.getEventAuthorityPDA)(this.programId),
                program: this.programId,
                pdaReferrer: J,
              });
            return { beforeSwapIx: k, afterSwapIx: k };
          }
          async logUserSwapBalances(T, y, v, M, G, J = [], z = [], S = []) {
            const { beforeSwapIx: k, afterSwapIx: q } = this.logUserSwapBalancesIxs(
                T.publicKey,
                y,
                v,
                M,
                G
              ),
              ee = await this.processTxn(T, [...J, k, ...z, q], 'execute', '', S, 3e5);
            return console.log('logUserSwapBalances', ee), ee;
          }
          getTotalTipsForFilledOrdersDecimal(T) {
            let y = new g.default(0);
            for (const v of T) v.state.status === 1 && (y = y.add(v.orderTipDecimal));
            return y;
          }
          getCloseAndClaimTipsForFilledOrdersTxsIxs(
            T,
            y,
            v = t.MAX_CLOSE_ORDER_AND_CLAIM_TIP_ORDERS_IN_TX
          ) {
            let M = [];
            M.push([]);
            for (const G of y)
              if (G.state.status === 1) {
                const J = { state: G.state, address: G.address },
                  z = this.closeOrderAndClaimTipIx(T, J);
                M[M.length - 1].length + z.length > v && M.push([]), M[M.length - 1].push(...z);
              }
            return M;
          }
          closeOrderAndClaimTipIx(T, y, v = !0) {
            let M = [],
              G = [],
              J;
            if (y.state.inputMint.equals(t.WRAPPED_SOL_MINT)) {
              const {
                createIxs: z,
                fillIxs: S,
                closeIx: k,
                ata: q,
              } = this.getInitIfNeededWSOLCreateAndCloseIxs(T, T, new p.default(0));
              (J = q), v && (M.push(...z), G.push(...k));
            } else {
              const { ata: z, createAtaIx: S } = (0, _.createAtaIdempotent)(
                T,
                T,
                y.state.inputMint,
                y.state.inputMintProgramId
              );
              (J = z), M.push(S);
            }
            return (
              M.push(
                A.closeOrderAndClaimTip({
                  maker: T,
                  globalConfig: y.state.globalConfig,
                  inputMint: y.state.inputMint,
                  outputMint: y.state.outputMint,
                  order: y.address,
                  programId: this.programId,
                  makerInputAta: J,
                  inputTokenProgram: y.state.inputMintProgramId,
                })
              ),
              M.push(...G),
              M
            );
          }
          async closeOrderAndClaimTip(T, y, v, M) {
            let G = this.closeOrderAndClaimTipIx(T.publicKey, y),
              J,
              z;
            M && ((J = M.get(y.state.inputMint)), (z = M.get(N.NATIVE_MINT))),
              (J = J || (await (0, _.getMintDecimals)(this._connection, y.state.inputMint))),
              (z = z || (await (0, _.getMintDecimals)(this._connection, N.NATIVE_MINT)));
            const S =
              'Close Order: ' +
              y.address.toString() +
              ' claiming ' +
              (0, _.lamportsToAmountBN)(y.state.remainingInputAmount, J).toString() +
              ' input token ';
            return (
              y.state.inputMint.toString().slice(0, 5) +
                '' +
                (0, _.lamportsToAmountBN)(y.state.tipAmount, z).toString(),
              await this.processTxn(T, G, v, S, [])
            );
          }
          async updateOrderGenericIx(T, y, v, M, G, J, z, S, k, q = !0) {
            let ee = this.closeOrderAndClaimTipIx(y, T, q),
              [H, V] = await this.createOrderGenericIx(y, v, M, G, J, z, S, k);
            return [[...ee, ...H], V];
          }
          async updateOrderGeneric(T, y, v, M, G, J, z, S, k = 'execute', q, ee = !0) {
            const [H, V] = await this.updateOrderGenericIx(T, y.publicKey, v, M, G, J, z, S, q, ee),
              te =
                'Update order: closing order: ' +
                T.toString() +
                ' and creating order ' +
                V.publicKey.toString();
            return [await this.processTxn(y, H, k, te, [V]), V];
          }
          updateGlobalConfigIx(T, y, v) {
            const M = [],
              G = this.getGlobalConfigStateSync();
            return (
              M.push(
                A.updateGlobalConfigIx(
                  G.adminAuthority,
                  v || this._globalConfig,
                  w.UpdateGlobalConfigMode.fromDecoded({ [T]: '' }),
                  y,
                  this.programId
                )
              ),
              M
            );
          }
          async updateGlobalConfig(T, y, v, M, G) {
            await this.getGlobalConfigState();
            const J = this.updateGlobalConfigIx(y, v, G),
              z =
                'Update global config: ' +
                this._globalConfig.toString() +
                ' with mode ' +
                y +
                ' and value ' +
                v.toString();
            return await this.processTxn(T, J, M, z, []);
          }
          async updateGlobalConfigAdminIx(T) {
            const y = T
              ? await m.GlobalConfig.fetch(this._connection, T)
              : await this.getGlobalConfigState();
            if (!y) throw new Error('Global config not found');
            return A.updateGlobalConfigAdminIx(this._globalConfig, y, this.programId);
          }
          async updateGlobalConfigAdmin(T, y, v) {
            const M = await this.updateGlobalConfigAdminIx(v),
              G =
                'Update global config admin: ' +
                this._globalConfig.toString() +
                ' with admin ' +
                T.publicKey.toBase58();
            return await this.processTxn(T, [M], y, G, []);
          }
          withdrawHostTipIx(T, y) {
            let v = [];
            return (
              v.push(
                (0, _.withdrawHostTipIx)({
                  admin: T,
                  globalConfig: y || this._globalConfig,
                  programId: this.programId,
                })
              ),
              v
            );
          }
          async withdrawHostTip(T, y, v) {
            const M = this.withdrawHostTipIx(T.publicKey, v),
              G =
                'Withdraw host tip: ' +
                this._globalConfig.toString() +
                ' with admin ' +
                T.publicKey.toBase58();
            return await this.processTxn(T, M, y, G, []), M;
          }
          async getOrderInputMintDecimals(T) {
            return await (0, _.getMintDecimals)(this._connection, T.state.inputMint);
          }
          async getOrderOutputMintDecimals(T) {
            return await (0, _.getMintDecimals)(this._connection, T.state.outputMint);
          }
          async getMintDecimals(T) {
            const y = new _.PubkeyHashMap();
            for (const v of T) y.set(v, await (0, _.getMintDecimals)(this._connection, v));
            return y;
          }
          async getAllMintDecimals() {
            const T = await this.getAllOrdersStateAndAddressWithFilters([], void 0, !1),
              y = [];
            for (const v of T) y.push(v.state.inputMint), y.push(v.state.outputMint);
            return await this.getMintDecimals(y);
          }
          async getMintsProgramOwners(T) {
            return (await this._connection.getMultipleAccountsInfo(T)).map((M) => {
              if (!M) throw new Error('Mint not found');
              return M.owner;
            });
          }
          async executeTransaction(T, y, v = []) {
            const M = new a.Transaction(),
              { blockhash: G } = await this._connection.getLatestBlockhash();
            return (
              (M.recentBlockhash = G),
              (M.feePayer = y.publicKey),
              M.add(...T),
              await (0, a.sendAndConfirmTransaction)(this._connection, M, [y, ...v], {
                commitment: 'confirmed',
              })
            );
          }
          async processTxn(T, y, v, M, G, J = 2e5, z = 1e4) {
            if (v === 'multisig' || v === 'simulate') {
              const { blockhash: S } = await this._connection.getLatestBlockhash(),
                k = new a.Transaction();
              return (
                k.add(...y),
                (k.recentBlockhash = S),
                (k.feePayer = T.publicKey),
                v === 'simulate'
                  ? await (0, _.printSimulateTx)(this._connection, k)
                  : await (0, _.printMultisigTx)(k),
                ''
              );
            } else if (v === 'execute') {
              const k = (z * 1e6) / J,
                q = (0, _.createAddExtraComputeUnitFeeTransaction)(J, k),
                ee = await this.executeTransaction([...q, ...y], T, G);
              return (
                e.DEBUG === 'true' && M && (console.log(M), console.log('txn: ' + ee.toString())),
                ee
              );
            }
            return '';
          }
          getInitIfNeededWSOLCreateAndCloseIxs(T, y, v) {
            const M = [],
              { ata: G, createAtaIx: J } = (0, _.createAtaIdempotent)(
                T,
                y,
                t.WRAPPED_SOL_MINT,
                N.TOKEN_PROGRAM_ID
              );
            M.push(J);
            const z = [];
            v && y.equals(T) && z.push(...this.getDepositWsolIxns(T, G, v));
            const S = [];
            return (
              y.equals(T) &&
                S.push((0, P.createCloseAccountInstruction)(G, T, T, [], N.TOKEN_PROGRAM_ID)),
              { createIxs: M, fillIxs: z, closeIx: S, ata: G }
            );
          }
          getDepositWsolIxns(T, y, v) {
            const M = [];
            return (
              M.push(
                a.SystemProgram.transfer({
                  fromPubkey: T,
                  toPubkey: y,
                  lamports: BigInt(v.toString()),
                })
              ),
              M.push(
                new a.TransactionInstruction({
                  keys: [{ pubkey: y, isSigner: !1, isWritable: !0 }],
                  data: ie.Buffer.from(new Uint8Array([17])),
                  programId: N.TOKEN_PROGRAM_ID,
                })
              ),
              M
            );
          }
        }
        t.LimoClient = F;
      })(lo)),
    lo
  );
}
(function (t) {
  var e =
      (b && b.__createBinding) ||
      (Object.create
        ? function (r, o, i, c) {
            c === void 0 && (c = i);
            var d = Object.getOwnPropertyDescriptor(o, i);
            (!d || ('get' in d ? !o.__esModule : d.writable || d.configurable)) &&
              (d = {
                enumerable: !0,
                get: function () {
                  return o[i];
                },
              }),
              Object.defineProperty(r, c, d);
          }
        : function (r, o, i, c) {
            c === void 0 && (c = i), (r[c] = o[i]);
          }),
    n =
      (b && b.__exportStar) ||
      function (r, o) {
        for (var i in r)
          i !== 'default' && !Object.prototype.hasOwnProperty.call(o, i) && e(o, r, i);
      };
  Object.defineProperty(t, '__esModule', { value: !0 }), n(nu(), t), n(ct, t), n(tu, t);
})(ns);
var Al = {},
  Br = {},
  Re = {};
function Bh(t, e) {
  return Array.apply(0, new Array(Math.ceil(t.length / e))).map((n, r) =>
    t.slice(r * e, (r + 1) * e)
  );
}
const an = (t) => 'version' in t;
function xh(t) {
  return t.reduce((e, n) => e + n.toString(16).padStart(2, '0'), '0x');
}
function Uh(t) {
  t.indexOf('0x') === 0 && (t = t.substr(2)), t.length % 2 === 1 && (t = '0' + t);
  let e = t.match(/.{2}/g);
  return e === null ? Pe.Buffer.from([]) : Pe.Buffer.from(e.map((n) => parseInt(n, 16)));
}
var Lh = Object.freeze({ __proto__: null, encode: xh, decode: Uh });
function Ol(t) {
  return new TextDecoder('utf-8').decode(t);
}
function $h(t) {
  return new TextEncoder().encode(t);
}
var Hh = Object.freeze({ __proto__: null, decode: Ol, encode: $h });
function $o(t) {
  return Pn.encode(t);
}
function jh(t) {
  return Pn.decode(t);
}
var Gh = Object.freeze({ __proto__: null, encode: $o, decode: jh });
function Ho(t) {
  return t.toString('base64');
}
function ru(t) {
  return Pe.Buffer.from(t, 'base64');
}
var Fh = Object.freeze({ __proto__: null, encode: Ho, decode: ru }),
  Kh = Object.freeze({ __proto__: null, hex: Lh, utf8: Hh, bs58: Gh, base64: Fh });
function Sn(t) {
  return 'accounts' in t;
}
async function Vh(t) {
  const e = (await Ke.findProgramAddress([], t))[0];
  return await Ke.createWithSeed(e, Wh(), t);
}
function Wh() {
  return 'anchor:idl';
}
const qh = me.struct([me.publicKey('authority'), me.vecU8('data')]);
function zh(t) {
  return qh.decode(t);
}
function Yh(t) {
  const e = ['name', 'path', 'account', 'relations', 'generic'],
    n = (i) => i.split('.').map(Jp).join('.'),
    r = (i) => {
      for (const c in i) {
        const d = i[c];
        e.includes(c) ? (i[c] = Array.isArray(d) ? d.map(n) : n(d)) : typeof d == 'object' && r(d);
      }
    },
    o = structuredClone(t);
  return r(o), o;
}
function vn(t, e, n, r) {
  return t != null && t.length ? (t[0].name ? n(t) : r(t)) : e();
}
function Rl(t) {
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
function yl(t, ...e) {
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
function iu(t, e = {}) {
  t.forEach((n) => {
    if (Sn(n)) iu(n.accounts, e[n.name]);
    else if (!e[n.name]) throw new Error('Account `'.concat(n.name, '` not provided.'));
  });
}
function et(t) {
  return t instanceof Ke ? t : new Ke(t);
}
class Xh extends TypeError {
  constructor(e, n) {
    let r;
    const p = e,
      { message: o } = p,
      i = oc(p, ['message']),
      { path: c } = e,
      d = c.length === 0 ? o : 'At path: ' + c.join('.') + ' -- ' + o;
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
        var a;
        return (a = r) != null ? a : (r = [e, ...n()]);
      });
  }
}
function Jh(t) {
  return Mn(t) && typeof t[Symbol.iterator] == 'function';
}
function Mn(t) {
  return typeof t == 'object' && t != null;
}
function Yt(t) {
  return typeof t == 'string' ? JSON.stringify(t) : '' + t;
}
function Zh(t) {
  const { done: e, value: n } = t.next();
  return e ? void 0 : n;
}
function Qh(t, e, n, r) {
  if (t === !0) return;
  t === !1 ? (t = {}) : typeof t == 'string' && (t = { message: t });
  const { path: o, branch: i } = e,
    { type: c } = n,
    {
      refinement: d,
      message: p = 'Expected a value of type `' +
        c +
        '`' +
        (d ? ' with refinement `' + d + '`' : '') +
        ', but received: `' +
        Yt(r) +
        '`',
    } = t;
  return st(xe({ value: r, type: c, refinement: d, key: o[o.length - 1], path: o, branch: i }, t), {
    message: p,
  });
}
function* hc(t, e, n, r) {
  Jh(t) || (t = [t]);
  for (const o of t) {
    const i = Qh(o, e, n, r);
    i && (yield i);
  }
}
function* ou(t, e, n) {
  n === void 0 && (n = {});
  const { path: r = [], branch: o = [t], coerce: i = !1, mask: c = !1 } = n,
    d = { path: r, branch: o };
  if (
    i &&
    ((t = e.coercer(t, d)), c && e.type !== 'type' && Mn(e.schema) && Mn(t) && !Array.isArray(t))
  )
    for (const a in t) e.schema[a] === void 0 && delete t[a];
  let p = !0;
  for (const a of e.validator(t, d)) (p = !1), yield [a, void 0];
  for (let [a, _, A] of e.entries(t, d)) {
    const h = ou(_, A, {
      path: a === void 0 ? r : [...r, a],
      branch: a === void 0 ? o : [...o, _],
      coerce: i,
      mask: c,
    });
    for (const m of h)
      m[0]
        ? ((p = !1), yield [m[0], void 0])
        : i &&
          ((_ = m[1]),
          a === void 0
            ? (t = _)
            : t instanceof Map
              ? t.set(a, _)
              : t instanceof Set
                ? t.add(_)
                : Mn(t) && (t[a] = _));
  }
  if (p) for (const a of e.refiner(t, d)) (p = !1), yield [a, void 0];
  p && (yield [void 0, t]);
}
class Qt {
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
      coercer: c = (p) => p,
      entries: d = function* () {},
    } = e;
    (this.type = n),
      (this.schema = r),
      (this.entries = d),
      (this.coercer = c),
      o
        ? (this.validator = (p, a) => {
            const _ = o(p, a);
            return hc(_, a, this, p);
          })
        : (this.validator = () => []),
      i
        ? (this.refiner = (p, a) => {
            const _ = i(p, a);
            return hc(_, a, this, p);
          })
        : (this.refiner = () => []);
  }
  assert(e) {
    return em(e, this);
  }
  create(e) {
    return su(e, this);
  }
  is(e) {
    return Tl(e, this);
  }
  mask(e) {
    return tm(e, this);
  }
  validate(e, n) {
    return n === void 0 && (n = {}), xr(e, this, n);
  }
}
function em(t, e) {
  const n = xr(t, e);
  if (n[0]) throw n[0];
}
function su(t, e) {
  const n = xr(t, e, { coerce: !0 });
  if (n[0]) throw n[0];
  return n[1];
}
function tm(t, e) {
  const n = xr(t, e, { coerce: !0, mask: !0 });
  if (n[0]) throw n[0];
  return n[1];
}
function Tl(t, e) {
  return !xr(t, e)[0];
}
function xr(t, e, n) {
  n === void 0 && (n = {});
  const r = ou(t, e, n),
    o = Zh(r);
  return o[0]
    ? [
        new Xh(o[0], function* () {
          for (const c of r) c[0] && (yield c[0]);
        }),
        void 0,
      ]
    : [void 0, o[1]];
}
function Ur(t, e) {
  return new Qt({ type: t, schema: null, validator: e });
}
function nm() {
  return Ur('any', () => !0);
}
function ho(t) {
  return new Qt({
    type: 'array',
    schema: t,
    *entries(e) {
      if (t && Array.isArray(e)) for (const [n, r] of e.entries()) yield [n, r, t];
    },
    coercer(e) {
      return Array.isArray(e) ? e.slice() : e;
    },
    validator(e) {
      return Array.isArray(e) || 'Expected an array value, but received: ' + Yt(e);
    },
  });
}
function rm() {
  return Ur('boolean', (t) => typeof t == 'boolean');
}
function mc(t) {
  const e = Yt(t);
  return new Qt({
    type: 'literal',
    schema: t,
    validator(n) {
      return n === t || 'Expected the literal `' + e + '`, but received: ' + Yt(n);
    },
  });
}
function ni(t) {
  return new Qt(
    st(xe({}, t), {
      validator: (e, n) => e === null || t.validator(e, n),
      refiner: (e, n) => e === null || t.refiner(e, n),
    })
  );
}
function di() {
  return Ur(
    'number',
    (t) => (typeof t == 'number' && !isNaN(t)) || 'Expected a number, but received: ' + Yt(t)
  );
}
function fi(t) {
  return new Qt(
    st(xe({}, t), {
      validator: (e, n) => e === void 0 || t.validator(e, n),
      refiner: (e, n) => e === void 0 || t.refiner(e, n),
    })
  );
}
function pn() {
  return Ur('string', (t) => typeof t == 'string' || 'Expected a string, but received: ' + Yt(t));
}
function Wt(t) {
  const e = Object.keys(t);
  return new Qt({
    type: 'type',
    schema: t,
    *entries(n) {
      if (Mn(n)) for (const r of e) yield [r, n[r], t[r]];
    },
    validator(n) {
      return Mn(n) || 'Expected an object, but received: ' + Yt(n);
    },
  });
}
function El(t) {
  const e = t.map((n) => n.type).join(' | ');
  return new Qt({
    type: 'union',
    schema: null,
    coercer(n, r) {
      return (
        t.find((i) => {
          const [c] = i.validate(n, { coerce: !0 });
          return !c;
        }) || au()
      ).coercer(n, r);
    },
    validator(n, r) {
      const o = [];
      for (const i of t) {
        const [...c] = ou(n, i, r),
          [d] = c;
        if (d[0]) for (const [p] of c) p && o.push(p);
        else return [];
      }
      return ['Expected the value to satisfy a union of `' + e + '`, but received: ' + Yt(n), ...o];
    },
  });
}
function au() {
  return Ur('unknown', () => !0);
}
function im(t, e, n) {
  return new Qt(
    st(xe({}, t), { coercer: (r, o) => (Tl(r, e) ? t.coercer(n(r, o), o) : t.coercer(r, o)) })
  );
}
async function om(t, e, n, r) {
  (t = et(t)), r || (r = br());
  const o = new Qc();
  if (
    (o.add(new el({ programId: t, keys: e != null ? e : [], data: n })),
    r.sendAndConfirm === void 0)
  )
    throw new Error("This function requires 'Provider.sendAndConfirm' to be implemented.");
  return await r.sendAndConfirm(o, []);
}
const gc = 99;
async function sm(t, e, n) {
  return (await uu(t, e, n)).map((o) =>
    o ? { publicKey: o.publicKey, account: o.account } : null
  );
}
async function uu(t, e, n) {
  if (e.length <= gc) return await Ac(t, e, n);
  {
    const r = Bh(e, gc);
    return (await Promise.all(r.map((i) => Ac(t, i, n)))).flat();
  }
}
async function Ac(t, e, n) {
  const r = n != null ? n : t.commitment,
    { value: o, context: i } = await t.getMultipleAccountsInfoAndContext(e, r);
  return o.map((d, p) => (d === null ? null : { publicKey: e[p], account: d, context: i }));
}
async function Il(t, e, n, r, o) {
  var i;
  n && n.length > 0 && e.sign(...n);
  const c = e._compile(),
    d = c.serialize(),
    a = e._serialize(d).toString('base64'),
    _ = { encoding: 'base64', commitment: r != null ? r : t.commitment };
  if (o) {
    const g = (Array.isArray(o) ? o : c.nonProgramIds()).map((R) => R.toBase58());
    _.accounts = { encoding: 'base64', addresses: g };
  }
  n && n.length > 0 && (_.sigVerify = !0);
  const A = [a, _],
    h = await t._rpcRequest('simulateTransaction', A),
    m = su(h, lm);
  if ('error' in m) {
    let g;
    if (
      'data' in m.error &&
      ((g = (i = m.error.data) === null || i === void 0 ? void 0 : i.logs), g && Array.isArray(g))
    ) {
      const R = '\n    ',
        w = R + g.join(R);
      console.error(m.error.message, w);
    }
    throw new xo('failed to simulate transaction: ' + m.error.message, g);
  }
  return m.result;
}
function am(t) {
  return im(wl(t), um, (e) => ('error' in e ? e : st(xe({}, e), { result: su(e.result, t) })));
}
const um = wl(au());
function wl(t) {
  return El([
    Wt({ jsonrpc: mc('2.0'), id: pn(), result: t }),
    Wt({ jsonrpc: mc('2.0'), id: pn(), error: Wt({ code: au(), message: pn(), data: fi(nm()) }) }),
  ]);
}
function cm(t) {
  return am(Wt({ context: Wt({ slot: di() }), value: t }));
}
const lm = cm(
  Wt({
    err: ni(El([Wt({}), pn()])),
    logs: ni(ho(pn())),
    accounts: fi(
      ni(
        ho(
          ni(
            Wt({
              executable: rm(),
              owner: pn(),
              lamports: di(),
              data: ho(pn()),
              rentEpoch: fi(di()),
            })
          )
        )
      )
    ),
    unitsConsumed: fi(di()),
  })
);
var dm = Object.freeze({
  __proto__: null,
  invoke: om,
  getMultipleAccounts: sm,
  getMultipleAccountsAndContext: uu,
  simulateTransaction: Il,
});
class wr {
  constructor(e, n, r = wr.defaultOptions()) {
    (this.connection = e),
      (this.wallet = n),
      (this.opts = r),
      (this.publicKey = n == null ? void 0 : n.publicKey);
  }
  static defaultOptions() {
    return { preflightCommitment: 'processed', commitment: 'processed' };
  }
  static local(e, n = wr.defaultOptions()) {
    throw new Error('Provider local is not available on browser.');
  }
  static env() {
    throw new Error('Provider env is not available on browser.');
  }
  async sendAndConfirm(e, n, r) {
    var o, i, c, d;
    if ((r === void 0 && (r = this.opts), an(e))) n && e.sign(n);
    else if (
      ((e.feePayer = (o = e.feePayer) !== null && o !== void 0 ? o : this.wallet.publicKey),
      (e.recentBlockhash = (
        await this.connection.getLatestBlockhash(r.preflightCommitment)
      ).blockhash),
      n)
    )
      for (const a of n) e.partialSign(a);
    e = await this.wallet.signTransaction(e);
    const p = e.serialize();
    try {
      return await Oc(this.connection, p, r);
    } catch (a) {
      if (a instanceof jo) {
        const _ = $o(
            an(e)
              ? ((i = e.signatures) === null || i === void 0 ? void 0 : i[0]) || new Uint8Array()
              : (c = e.signature) !== null && c !== void 0
                ? c
                : new Uint8Array()
          ),
          A = an(e) ? 0 : void 0,
          h = await this.connection.getTransaction(_, {
            commitment: 'confirmed',
            maxSupportedTransactionVersion: A,
          });
        if (h) {
          const m = (d = h.meta) === null || d === void 0 ? void 0 : d.logMessages;
          throw m ? new xo(a.message, m) : a;
        } else throw a;
      } else throw a;
    }
  }
  async sendAll(e, n) {
    var r, o, i;
    n === void 0 && (n = this.opts);
    const c = (await this.connection.getLatestBlockhash(n.preflightCommitment)).blockhash;
    let d = e.map((_) => {
      var A, h;
      if (an(_.tx)) {
        let m = _.tx;
        return _.signers && m.sign(_.signers), m;
      } else {
        let m = _.tx,
          g = (A = _.signers) !== null && A !== void 0 ? A : [];
        return (
          (m.feePayer = (h = m.feePayer) !== null && h !== void 0 ? h : this.wallet.publicKey),
          (m.recentBlockhash = c),
          g.forEach((R) => {
            m.partialSign(R);
          }),
          m
        );
      }
    });
    const p = await this.wallet.signAllTransactions(d),
      a = [];
    for (let _ = 0; _ < d.length; _ += 1) {
      const A = p[_],
        h = A.serialize();
      try {
        a.push(await Oc(this.connection, h, n));
      } catch (m) {
        if (m instanceof jo) {
          const g = $o(
              an(A)
                ? ((r = A.signatures) === null || r === void 0 ? void 0 : r[0]) || new Uint8Array()
                : (o = A.signature) !== null && o !== void 0
                  ? o
                  : new Uint8Array()
            ),
            R = an(A) ? 0 : void 0,
            w = await this.connection.getTransaction(g, {
              commitment: 'confirmed',
              maxSupportedTransactionVersion: R,
            });
          if (w) {
            const N = (i = w.meta) === null || i === void 0 ? void 0 : i.logMessages;
            throw N ? new xo(m.message, N) : m;
          } else throw m;
        } else throw m;
      }
    }
    return a;
  }
  async simulate(e, n, r, o) {
    let i = (await this.connection.getLatestBlockhash(r != null ? r : this.connection.commitment))
        .blockhash,
      c;
    if (
      (an(e)
        ? (n && n.length > 0 && (e.sign(n), (e = await this.wallet.signTransaction(e))),
          (c = await this.connection.simulateTransaction(e, { commitment: r })))
        : ((e.feePayer = e.feePayer || this.wallet.publicKey),
          (e.recentBlockhash = i),
          n && n.length > 0 && (e = await this.wallet.signTransaction(e)),
          (c = await Il(this.connection, e, n, r, o))),
      c.value.err)
    )
      throw new fm(c.value);
    return c.value;
  }
}
class fm extends Error {
  constructor(e, n) {
    super(n), (this.simulationResponse = e);
  }
}
async function Oc(t, e, n) {
  const r = n && {
      skipPreflight: n.skipPreflight,
      preflightCommitment: n.preflightCommitment || n.commitment,
    },
    o = await t.sendRawTransaction(e, r),
    i = (await t.confirmTransaction(o, n && n.commitment)).value;
  if (i.err) throw new jo('Raw transaction '.concat(o, ' failed (').concat(JSON.stringify(i), ')'));
  return o;
}
class jo extends Error {
  constructor(e) {
    super(e);
  }
}
function pm(t) {
  Go = t;
}
function br() {
  return Go === null ? wr.local() : Go;
}
let Go = null;
var _m =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof ie.global < 'u'
        ? ie.global
        : typeof self < 'u'
          ? self
          : {};
function hm(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default') ? t.default : t;
}
var L = {};
Object.defineProperty(L, '__esModule', { value: !0 });
var bl =
    (L.ANCHOR_ERROR__REQUIRE_EQ_VIOLATED =
    Td =
    L.ANCHOR_ERROR__REQUIRE_VIOLATED =
    yd =
    L.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION_PROGRAM_ID =
    Rd =
    L.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION_AUTHORITY =
    Od =
    L.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION =
    Ad =
    L.ANCHOR_ERROR__CONSTRAINT_MINT_PERMANENT_DELEGATE_EXTENSION_DELEGATE =
    gd =
    L.ANCHOR_ERROR__CONSTRAINT_MINT_PERMANENT_DELEGATE_EXTENSION =
    md =
    L.ANCHOR_ERROR__CONSTRAINT_MINT_CLOSE_AUTHORITY_EXTENSION_AUTHORITY =
    hd =
    L.ANCHOR_ERROR__CONSTRAINT_MINT_CLOSE_AUTHORITY_EXTENSION =
    _d =
    L.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION_METADATA_ADDRESS =
    pd =
    L.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION_AUTHORITY =
    fd =
    L.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION =
    dd =
    L.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION_MEMBER_ADDRESS =
    ld =
    L.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION_AUTHORITY =
    cd =
    L.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION =
    ud =
    L.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION_GROUP_ADDRESS =
    ad =
    L.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION_AUTHORITY =
    sd =
    L.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION =
    od =
    L.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED_TOKEN_TOKEN_PROGRAM =
    id =
    L.ANCHOR_ERROR__CONSTRAINT_MINT_TOKEN_PROGRAM =
    rd =
    L.ANCHOR_ERROR__CONSTRAINT_TOKEN_TOKEN_PROGRAM =
    nd =
    L.ANCHOR_ERROR__CONSTRAINT_ACCOUNT_IS_NONE =
    td =
    L.ANCHOR_ERROR__CONSTRAINT_SPACE =
    ed =
    L.ANCHOR_ERROR__CONSTRAINT_MINT_DECIMALS =
    Ql =
    L.ANCHOR_ERROR__CONSTRAINT_MINT_FREEZE_AUTHORITY =
    Zl =
    L.ANCHOR_ERROR__CONSTRAINT_MINT_MINT_AUTHORITY =
    Jl =
    L.ANCHOR_ERROR__CONSTRAINT_TOKEN_OWNER =
    Xl =
    L.ANCHOR_ERROR__CONSTRAINT_TOKEN_MINT =
    Yl =
    L.ANCHOR_ERROR__CONSTRAINT_ZERO =
    zl =
    L.ANCHOR_ERROR__CONSTRAINT_ADDRESS =
    ql =
    L.ANCHOR_ERROR__CONSTRAINT_CLOSE =
    Wl =
    L.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED_INIT =
    Vl =
    L.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED =
    Kl =
    L.ANCHOR_ERROR__CONSTRAINT_STATE =
    Fl =
    L.ANCHOR_ERROR__CONSTRAINT_EXECUTABLE =
    Gl =
    L.ANCHOR_ERROR__CONSTRAINT_SEEDS =
    jl =
    L.ANCHOR_ERROR__CONSTRAINT_RENT_EXEMPT =
    Hl =
    L.ANCHOR_ERROR__CONSTRAINT_OWNER =
    $l =
    L.ANCHOR_ERROR__CONSTRAINT_RAW =
    Ll =
    L.ANCHOR_ERROR__CONSTRAINT_SIGNER =
    Ul =
    L.ANCHOR_ERROR__CONSTRAINT_HAS_ONE =
    xl =
    L.ANCHOR_ERROR__CONSTRAINT_MUT =
    Bl =
    L.ANCHOR_ERROR__EVENT_INSTRUCTION_STUB =
    Dl =
    L.ANCHOR_ERROR__IDL_ACCOUNT_NOT_EMPTY =
    kl =
    L.ANCHOR_ERROR__IDL_INSTRUCTION_INVALID_PROGRAM =
    Ml =
    L.ANCHOR_ERROR__IDL_INSTRUCTION_STUB =
    Pl =
    L.ANCHOR_ERROR__INSTRUCTION_DID_NOT_SERIALIZE =
    vl =
    L.ANCHOR_ERROR__INSTRUCTION_DID_NOT_DESERIALIZE =
    Sl =
    L.ANCHOR_ERROR__INSTRUCTION_FALLBACK_NOT_FOUND =
    Cl =
    L.ANCHOR_ERROR__INSTRUCTION_MISSING =
      void 0),
  Nl =
    (L.ANCHOR_ERROR__DEPRECATED =
    zd =
    L.ANCHOR_ERROR__INVALID_NUMERIC_CONVERSION =
    qd =
    L.ANCHOR_ERROR__TRYING_TO_INIT_PAYER_AS_PROGRAM_ACCOUNT =
    Wd =
    L.ANCHOR_ERROR__DECLARED_PROGRAM_ID_MISMATCH =
    Vd =
    L.ANCHOR_ERROR__ACCOUNT_DUPLICATE_REALLOCS =
    Kd =
    L.ANCHOR_ERROR__ACCOUNT_REALLOC_EXCEEDS_LIMIT =
    Fd =
    L.ANCHOR_ERROR__ACCOUNT_SYSVAR_MISMATCH =
    Gd =
    L.ANCHOR_ERROR__ACCOUNT_NOT_ASSOCIATED_TOKEN_ACCOUNT =
    jd =
    L.ANCHOR_ERROR__ACCOUNT_NOT_PROGRAM_DATA =
    Hd =
    L.ANCHOR_ERROR__ACCOUNT_NOT_INITIALIZED =
    $d =
    L.ANCHOR_ERROR__ACCOUNT_NOT_SYSTEM_OWNED =
    Ld =
    L.ANCHOR_ERROR__ACCOUNT_NOT_SIGNER =
    Ud =
    L.ANCHOR_ERROR__INVALID_PROGRAM_EXECUTABLE =
    xd =
    L.ANCHOR_ERROR__INVALID_PROGRAM_ID =
    Bd =
    L.ANCHOR_ERROR__ACCOUNT_OWNED_BY_WRONG_PROGRAM =
    Dd =
    L.ANCHOR_ERROR__ACCOUNT_NOT_MUTABLE =
    kd =
    L.ANCHOR_ERROR__ACCOUNT_NOT_ENOUGH_KEYS =
    Md =
    L.ANCHOR_ERROR__ACCOUNT_DID_NOT_SERIALIZE =
    Pd =
    L.ANCHOR_ERROR__ACCOUNT_DID_NOT_DESERIALIZE =
    vd =
    L.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_MISMATCH =
    Sd =
    L.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_NOT_FOUND =
    Cd =
    L.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_ALREADY_SET =
    Nd =
    L.ANCHOR_ERROR__REQUIRE_GTE_VIOLATED =
    bd =
    L.ANCHOR_ERROR__REQUIRE_GT_VIOLATED =
    wd =
    L.ANCHOR_ERROR__REQUIRE_KEYS_NEQ_VIOLATED =
    Id =
    L.ANCHOR_ERROR__REQUIRE_NEQ_VIOLATED =
    Ed =
    L.ANCHOR_ERROR__REQUIRE_KEYS_EQ_VIOLATED =
      void 0),
  Cl = (L.ANCHOR_ERROR__INSTRUCTION_MISSING = 100),
  Sl = (L.ANCHOR_ERROR__INSTRUCTION_FALLBACK_NOT_FOUND = 101),
  vl = (L.ANCHOR_ERROR__INSTRUCTION_DID_NOT_DESERIALIZE = 102),
  Pl = (L.ANCHOR_ERROR__INSTRUCTION_DID_NOT_SERIALIZE = 103),
  Ml = (L.ANCHOR_ERROR__IDL_INSTRUCTION_STUB = 1e3),
  kl = (L.ANCHOR_ERROR__IDL_INSTRUCTION_INVALID_PROGRAM = 1001),
  Dl = (L.ANCHOR_ERROR__IDL_ACCOUNT_NOT_EMPTY = 1002),
  Bl = (L.ANCHOR_ERROR__EVENT_INSTRUCTION_STUB = 1500),
  xl = (L.ANCHOR_ERROR__CONSTRAINT_MUT = 2e3),
  Ul = (L.ANCHOR_ERROR__CONSTRAINT_HAS_ONE = 2001),
  Ll = (L.ANCHOR_ERROR__CONSTRAINT_SIGNER = 2002),
  $l = (L.ANCHOR_ERROR__CONSTRAINT_RAW = 2003),
  Hl = (L.ANCHOR_ERROR__CONSTRAINT_OWNER = 2004),
  jl = (L.ANCHOR_ERROR__CONSTRAINT_RENT_EXEMPT = 2005),
  Gl = (L.ANCHOR_ERROR__CONSTRAINT_SEEDS = 2006),
  Fl = (L.ANCHOR_ERROR__CONSTRAINT_EXECUTABLE = 2007),
  Kl = (L.ANCHOR_ERROR__CONSTRAINT_STATE = 2008),
  Vl = (L.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED = 2009),
  Wl = (L.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED_INIT = 2010),
  ql = (L.ANCHOR_ERROR__CONSTRAINT_CLOSE = 2011),
  zl = (L.ANCHOR_ERROR__CONSTRAINT_ADDRESS = 2012),
  Yl = (L.ANCHOR_ERROR__CONSTRAINT_ZERO = 2013),
  Xl = (L.ANCHOR_ERROR__CONSTRAINT_TOKEN_MINT = 2014),
  Jl = (L.ANCHOR_ERROR__CONSTRAINT_TOKEN_OWNER = 2015),
  Zl = (L.ANCHOR_ERROR__CONSTRAINT_MINT_MINT_AUTHORITY = 2016),
  Ql = (L.ANCHOR_ERROR__CONSTRAINT_MINT_FREEZE_AUTHORITY = 2017),
  ed = (L.ANCHOR_ERROR__CONSTRAINT_MINT_DECIMALS = 2018),
  td = (L.ANCHOR_ERROR__CONSTRAINT_SPACE = 2019),
  nd = (L.ANCHOR_ERROR__CONSTRAINT_ACCOUNT_IS_NONE = 2020),
  rd = (L.ANCHOR_ERROR__CONSTRAINT_TOKEN_TOKEN_PROGRAM = 2021),
  id = (L.ANCHOR_ERROR__CONSTRAINT_MINT_TOKEN_PROGRAM = 2022),
  od = (L.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED_TOKEN_TOKEN_PROGRAM = 2023),
  sd = (L.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION = 2024),
  ad = (L.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION_AUTHORITY = 2025),
  ud = (L.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION_GROUP_ADDRESS = 2026),
  cd = (L.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION = 2027),
  ld = (L.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION_AUTHORITY = 2028),
  dd = (L.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION_MEMBER_ADDRESS = 2029),
  fd = (L.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION = 2030),
  pd = (L.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION_AUTHORITY = 2031),
  _d = (L.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION_METADATA_ADDRESS = 2032),
  hd = (L.ANCHOR_ERROR__CONSTRAINT_MINT_CLOSE_AUTHORITY_EXTENSION = 2033),
  md = (L.ANCHOR_ERROR__CONSTRAINT_MINT_CLOSE_AUTHORITY_EXTENSION_AUTHORITY = 2034),
  gd = (L.ANCHOR_ERROR__CONSTRAINT_MINT_PERMANENT_DELEGATE_EXTENSION = 2035),
  Ad = (L.ANCHOR_ERROR__CONSTRAINT_MINT_PERMANENT_DELEGATE_EXTENSION_DELEGATE = 2036),
  Od = (L.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION = 2037),
  Rd = (L.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION_AUTHORITY = 2038),
  yd = (L.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION_PROGRAM_ID = 2039),
  Td = (L.ANCHOR_ERROR__REQUIRE_VIOLATED = 2500);
bl = L.ANCHOR_ERROR__REQUIRE_EQ_VIOLATED = 2501;
var Ed = (L.ANCHOR_ERROR__REQUIRE_KEYS_EQ_VIOLATED = 2502),
  Id = (L.ANCHOR_ERROR__REQUIRE_NEQ_VIOLATED = 2503),
  wd = (L.ANCHOR_ERROR__REQUIRE_KEYS_NEQ_VIOLATED = 2504),
  bd = (L.ANCHOR_ERROR__REQUIRE_GT_VIOLATED = 2505),
  Nd = (L.ANCHOR_ERROR__REQUIRE_GTE_VIOLATED = 2506),
  Cd = (L.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_ALREADY_SET = 3e3),
  Sd = (L.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_NOT_FOUND = 3001),
  vd = (L.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_MISMATCH = 3002),
  Pd = (L.ANCHOR_ERROR__ACCOUNT_DID_NOT_DESERIALIZE = 3003),
  Md = (L.ANCHOR_ERROR__ACCOUNT_DID_NOT_SERIALIZE = 3004),
  kd = (L.ANCHOR_ERROR__ACCOUNT_NOT_ENOUGH_KEYS = 3005),
  Dd = (L.ANCHOR_ERROR__ACCOUNT_NOT_MUTABLE = 3006),
  Bd = (L.ANCHOR_ERROR__ACCOUNT_OWNED_BY_WRONG_PROGRAM = 3007),
  xd = (L.ANCHOR_ERROR__INVALID_PROGRAM_ID = 3008),
  Ud = (L.ANCHOR_ERROR__INVALID_PROGRAM_EXECUTABLE = 3009),
  Ld = (L.ANCHOR_ERROR__ACCOUNT_NOT_SIGNER = 3010),
  $d = (L.ANCHOR_ERROR__ACCOUNT_NOT_SYSTEM_OWNED = 3011),
  Hd = (L.ANCHOR_ERROR__ACCOUNT_NOT_INITIALIZED = 3012),
  jd = (L.ANCHOR_ERROR__ACCOUNT_NOT_PROGRAM_DATA = 3013),
  Gd = (L.ANCHOR_ERROR__ACCOUNT_NOT_ASSOCIATED_TOKEN_ACCOUNT = 3014),
  Fd = (L.ANCHOR_ERROR__ACCOUNT_SYSVAR_MISMATCH = 3015),
  Kd = (L.ANCHOR_ERROR__ACCOUNT_REALLOC_EXCEEDS_LIMIT = 3016),
  Vd = (L.ANCHOR_ERROR__ACCOUNT_DUPLICATE_REALLOCS = 3017),
  Wd = (L.ANCHOR_ERROR__DECLARED_PROGRAM_ID_MISMATCH = 4100),
  qd = (L.ANCHOR_ERROR__TRYING_TO_INIT_PAYER_AS_PROGRAM_ACCOUNT = 4101),
  zd = (L.ANCHOR_ERROR__INVALID_NUMERIC_CONVERSION = 4102);
Nl = L.ANCHOR_ERROR__DEPRECATED = 5e3;
const mm = new Set(['debug-logs']),
  Yd = new Map();
function gm(t) {
  if (!mm.has(t)) throw new Error('Invalid feature');
  Yd.set(t, !0);
}
function cu(t) {
  return Yd.get(t) !== void 0;
}
var Am = Object.freeze({ __proto__: null, set: gm, isSet: cu });
class vt extends Error {
  constructor(e) {
    super(e), (this.name = 'IdlError');
  }
}
class jn {
  constructor(e) {
    this.stack = e;
  }
  static parse(e) {
    var n;
    const r = /^Program (\w*) invoke/,
      o = /^Program \w* success/,
      i = [];
    for (let c = 0; c < e.length; c++) {
      if (o.exec(e[c])) {
        i.pop();
        continue;
      }
      const d = (n = r.exec(e[c])) === null || n === void 0 ? void 0 : n[1];
      d && i.push(new Ke(d));
    }
    return new jn(i);
  }
}
class kn extends Error {
  constructor(e, n, r, o, i, c) {
    super(r.join('\n').replace('Program log: ', '')),
      (this.errorLogs = r),
      (this.logs = o),
      (this.error = { errorCode: e, errorMessage: n, comparedValues: c, origin: i }),
      (this._programErrorStack = jn.parse(o));
  }
  static parse(e) {
    if (!e) return null;
    const n = e.findIndex((h) => h.startsWith('Program log: AnchorError'));
    if (n === -1) return null;
    const r = e[n],
      o = [r];
    let i;
    if (n + 1 < e.length) {
      if (e[n + 1] === 'Program log: Left:') {
        const h = /^Program log: (.*)$/,
          m = h.exec(e[n + 2])[1],
          g = h.exec(e[n + 4])[1];
        (i = [new Ke(m), new Ke(g)]), o.push(...e.slice(n + 1, n + 5));
      } else if (e[n + 1].startsWith('Program log: Left:')) {
        const h = /^Program log: (Left|Right): (.*)$/,
          m = h.exec(e[n + 1])[2],
          g = h.exec(e[n + 2])[2];
        o.push(...e.slice(n + 1, n + 3)), (i = [m, g]);
      }
    }
    const d =
        /^Program log: AnchorError occurred\. Error Code: (.*)\. Error Number: (\d*)\. Error Message: (.*)\./.exec(
          r
        ),
      a =
        /^Program log: AnchorError thrown in (.*):(\d*)\. Error Code: (.*)\. Error Number: (\d*)\. Error Message: (.*)\./.exec(
          r
        ),
      A =
        /^Program log: AnchorError caused by account: (.*)\. Error Code: (.*)\. Error Number: (\d*)\. Error Message: (.*)\./.exec(
          r
        );
    if (d) {
      const [h, m, g] = d.slice(1, 4),
        R = { code: h, number: parseInt(m) };
      return new kn(R, g, o, e, void 0, i);
    } else if (a) {
      const [h, m, g, R, w] = a.slice(1, 6),
        N = { code: g, number: parseInt(R) },
        P = { file: h, line: parseInt(m) };
      return new kn(N, w, o, e, P, i);
    } else if (A) {
      const [h, m, g, R] = A.slice(1, 5),
        w = h,
        N = { code: m, number: parseInt(g) };
      return new kn(N, R, o, e, w, i);
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
class Nr extends Error {
  constructor(e, n, r) {
    super(),
      (this.code = e),
      (this.msg = n),
      (this.logs = r),
      r && (this._programErrorStack = jn.parse(r));
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
    let c = n.get(i);
    return c !== void 0
      ? new Nr(i, c, e.logs)
      : ((c = Xd.get(i)), c !== void 0 ? new Nr(i, c, e.logs) : null);
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
function lu(t, e) {
  cu('debug-logs') && console.log('Translating error:', t);
  const n = kn.parse(t.logs);
  if (n) return n;
  const r = Nr.parse(t, e);
  if (r) return r;
  if (t.logs) {
    const o = {
      get: function (i, c) {
        return c === 'programErrorStack'
          ? i.programErrorStack.stack
          : c === 'program'
            ? i.programErrorStack.stack[t.programErrorStack.stack.length - 1]
            : Reflect.get(...arguments);
      },
    };
    return (t.programErrorStack = jn.parse(t.logs)), new Proxy(t, o);
  }
  return t;
}
const oe = {
    InstructionMissing: Cl,
    InstructionFallbackNotFound: Sl,
    InstructionDidNotDeserialize: vl,
    InstructionDidNotSerialize: Pl,
    IdlInstructionStub: Ml,
    IdlInstructionInvalidProgram: kl,
    IdlAccountNotEmpty: Dl,
    EventInstructionStub: Bl,
    ConstraintMut: xl,
    ConstraintHasOne: Ul,
    ConstraintSigner: Ll,
    ConstraintRaw: $l,
    ConstraintOwner: Hl,
    ConstraintRentExempt: jl,
    ConstraintSeeds: Gl,
    ConstraintExecutable: Fl,
    ConstraintState: Kl,
    ConstraintAssociated: Vl,
    ConstraintAssociatedInit: Wl,
    ConstraintClose: ql,
    ConstraintAddress: zl,
    ConstraintZero: Yl,
    ConstraintTokenMint: Xl,
    ConstraintTokenOwner: Jl,
    ConstraintMintMintAuthority: Zl,
    ConstraintMintFreezeAuthority: Ql,
    ConstraintMintDecimals: ed,
    ConstraintSpace: td,
    ConstraintAccountIsNone: nd,
    ConstraintTokenTokenProgram: rd,
    ConstraintMintTokenProgram: id,
    ConstraintAssociatedTokenTokenProgram: od,
    ConstraintMintGroupPointerExtension: sd,
    ConstraintMintGroupPointerExtensionAuthority: ad,
    ConstraintMintGroupPointerExtensionGroupAddress: ud,
    ConstraintMintGroupMemberPointerExtension: cd,
    ConstraintMintGroupMemberPointerExtensionAuthority: ld,
    ConstraintMintGroupMemberPointerExtensionMemberAddress: dd,
    ConstraintMintMetadataPointerExtension: fd,
    ConstraintMintMetadataPointerExtensionAuthority: pd,
    ConstraintMintMetadataPointerExtensionMetadataAddress: _d,
    ConstraintMintCloseAuthorityExtension: hd,
    ConstraintMintCloseAuthorityExtensionAuthority: md,
    ConstraintMintPermanentDelegateExtension: gd,
    ConstraintMintPermanentDelegateExtensionDelegate: Ad,
    ConstraintMintTransferHookExtension: Od,
    ConstraintMintTransferHookExtensionAuthority: Rd,
    ConstraintMintTransferHookExtensionProgramId: yd,
    RequireViolated: Td,
    RequireEqViolated: bl,
    RequireKeysEqViolated: Ed,
    RequireNeqViolated: Id,
    RequireKeysNeqViolated: wd,
    RequireGtViolated: bd,
    RequireGteViolated: Nd,
    AccountDiscriminatorAlreadySet: Cd,
    AccountDiscriminatorNotFound: Sd,
    AccountDiscriminatorMismatch: vd,
    AccountDidNotDeserialize: Pd,
    AccountDidNotSerialize: Md,
    AccountNotEnoughKeys: kd,
    AccountNotMutable: Dd,
    AccountOwnedByWrongProgram: Bd,
    InvalidProgramId: xd,
    InvalidProgramExecutable: Ud,
    AccountNotSigner: Ld,
    AccountNotSystemOwned: $d,
    AccountNotInitialized: Hd,
    AccountNotProgramData: jd,
    AccountNotAssociatedTokenAccount: Gd,
    AccountSysvarMismatch: Fd,
    AccountReallocExceedsLimit: Kd,
    AccountDuplicateReallocs: Vd,
    DeclaredProgramIdMismatch: Wd,
    TryingToInitPayerAsProgramAccount: qd,
    InvalidNumericConversion: zd,
    Deprecated: Nl,
  },
  Xd = new Map([
    [oe.InstructionMissing, '8 byte instruction identifier not provided'],
    [oe.InstructionFallbackNotFound, 'Fallback functions are not supported'],
    [oe.InstructionDidNotDeserialize, 'The program could not deserialize the given instruction'],
    [oe.InstructionDidNotSerialize, 'The program could not serialize the given instruction'],
    [oe.IdlInstructionStub, 'The program was compiled without idl instructions'],
    [
      oe.IdlInstructionInvalidProgram,
      'The transaction was given an invalid program for the IDL instruction',
    ],
    [oe.IdlAccountNotEmpty, 'IDL account must be empty in order to resize, try closing first'],
    [oe.EventInstructionStub, 'The program was compiled without `event-cpi` feature'],
    [oe.ConstraintMut, 'A mut constraint was violated'],
    [oe.ConstraintHasOne, 'A has one constraint was violated'],
    [oe.ConstraintSigner, 'A signer constraint was violated'],
    [oe.ConstraintRaw, 'A raw constraint was violated'],
    [oe.ConstraintOwner, 'An owner constraint was violated'],
    [oe.ConstraintRentExempt, 'A rent exemption constraint was violated'],
    [oe.ConstraintSeeds, 'A seeds constraint was violated'],
    [oe.ConstraintExecutable, 'An executable constraint was violated'],
    [oe.ConstraintState, 'Deprecated Error, feel free to replace with something else'],
    [oe.ConstraintAssociated, 'An associated constraint was violated'],
    [oe.ConstraintAssociatedInit, 'An associated init constraint was violated'],
    [oe.ConstraintClose, 'A close constraint was violated'],
    [oe.ConstraintAddress, 'An address constraint was violated'],
    [oe.ConstraintZero, 'Expected zero account discriminant'],
    [oe.ConstraintTokenMint, 'A token mint constraint was violated'],
    [oe.ConstraintTokenOwner, 'A token owner constraint was violated'],
    [oe.ConstraintMintMintAuthority, 'A mint mint authority constraint was violated'],
    [oe.ConstraintMintFreezeAuthority, 'A mint freeze authority constraint was violated'],
    [oe.ConstraintMintDecimals, 'A mint decimals constraint was violated'],
    [oe.ConstraintSpace, 'A space constraint was violated'],
    [oe.ConstraintAccountIsNone, 'A required account for the constraint is None'],
    [oe.ConstraintTokenTokenProgram, 'A token account token program constraint was violated'],
    [oe.ConstraintMintTokenProgram, 'A mint token program constraint was violated'],
    [
      oe.ConstraintAssociatedTokenTokenProgram,
      'An associated token account token program constraint was violated',
    ],
    [oe.ConstraintMintGroupPointerExtension, 'A group pointer extension constraint was violated'],
    [
      oe.ConstraintMintGroupPointerExtensionAuthority,
      'A group pointer extension authority constraint was violated',
    ],
    [
      oe.ConstraintMintGroupPointerExtensionGroupAddress,
      'A group pointer extension group address constraint was violated',
    ],
    [
      oe.ConstraintMintGroupMemberPointerExtension,
      'A group member pointer extension constraint was violated',
    ],
    [
      oe.ConstraintMintGroupMemberPointerExtensionAuthority,
      'A group member pointer extension authority constraint was violated',
    ],
    [
      oe.ConstraintMintGroupMemberPointerExtensionMemberAddress,
      'A group member pointer extension group address constraint was violated',
    ],
    [
      oe.ConstraintMintMetadataPointerExtension,
      'A metadata pointer extension constraint was violated',
    ],
    [
      oe.ConstraintMintMetadataPointerExtensionAuthority,
      'A metadata pointer extension authority constraint was violated',
    ],
    [
      oe.ConstraintMintMetadataPointerExtensionMetadataAddress,
      'A metadata pointer extension metadata address constraint was violated',
    ],
    [oe.ConstraintMintCloseAuthorityExtension, 'A close authority constraint was violated'],
    [
      oe.ConstraintMintCloseAuthorityExtensionAuthority,
      'A close authority extension authority constraint was violated',
    ],
    [
      oe.ConstraintMintPermanentDelegateExtension,
      'A permanent delegate extension constraint was violated',
    ],
    [
      oe.ConstraintMintPermanentDelegateExtensionDelegate,
      'A permanent delegate extension delegate constraint was violated',
    ],
    [oe.ConstraintMintTransferHookExtension, 'A transfer hook extension constraint was violated'],
    [
      oe.ConstraintMintTransferHookExtensionAuthority,
      'A transfer hook extension authority constraint was violated',
    ],
    [
      oe.ConstraintMintTransferHookExtensionProgramId,
      'A transfer hook extension transfer hook program id constraint was violated',
    ],
    [oe.RequireViolated, 'A require expression was violated'],
    [oe.RequireEqViolated, 'A require_eq expression was violated'],
    [oe.RequireKeysEqViolated, 'A require_keys_eq expression was violated'],
    [oe.RequireNeqViolated, 'A require_neq expression was violated'],
    [oe.RequireKeysNeqViolated, 'A require_keys_neq expression was violated'],
    [oe.RequireGtViolated, 'A require_gt expression was violated'],
    [oe.RequireGteViolated, 'A require_gte expression was violated'],
    [
      oe.AccountDiscriminatorAlreadySet,
      'The account discriminator was already set on this account',
    ],
    [oe.AccountDiscriminatorNotFound, 'No 8 byte discriminator was found on the account'],
    [oe.AccountDiscriminatorMismatch, '8 byte discriminator did not match what was expected'],
    [oe.AccountDidNotDeserialize, 'Failed to deserialize the account'],
    [oe.AccountDidNotSerialize, 'Failed to serialize the account'],
    [oe.AccountNotEnoughKeys, 'Not enough account keys given to the instruction'],
    [oe.AccountNotMutable, 'The given account is not mutable'],
    [
      oe.AccountOwnedByWrongProgram,
      'The given account is owned by a different program than expected',
    ],
    [oe.InvalidProgramId, 'Program ID was not as expected'],
    [oe.InvalidProgramExecutable, 'Program account is not executable'],
    [oe.AccountNotSigner, 'The given account did not sign'],
    [oe.AccountNotSystemOwned, 'The given account is not owned by the system program'],
    [oe.AccountNotInitialized, 'The program expected this account to be already initialized'],
    [oe.AccountNotProgramData, 'The given account is not a program data account'],
    [oe.AccountNotAssociatedTokenAccount, 'The given account is not the associated token account'],
    [oe.AccountSysvarMismatch, 'The given public key does not match the required sysvar'],
    [
      oe.AccountReallocExceedsLimit,
      'The account reallocation exceeds the MAX_PERMITTED_DATA_INCREASE limit',
    ],
    [oe.AccountDuplicateReallocs, 'The account was duplicated for more than one reallocation'],
    [oe.DeclaredProgramIdMismatch, 'The declared program id does not match the actual program id'],
    [
      oe.TryingToInitPayerAsProgramAccount,
      'You cannot/should not initialize the payer account as a program account',
    ],
    [
      oe.InvalidNumericConversion,
      'The program could not perform the numeric conversion, out of range integral type conversion attempted',
    ],
    [oe.Deprecated, 'The API being used is deprecated and should no longer be used'],
  ]);
let mn = class be {
  static fieldLayout(e, n = [], r) {
    const o = e.name;
    switch (e.type) {
      case 'bool':
        return me.bool(o);
      case 'u8':
        return me.u8(o);
      case 'i8':
        return me.i8(o);
      case 'u16':
        return me.u16(o);
      case 'i16':
        return me.i16(o);
      case 'u32':
        return me.u32(o);
      case 'i32':
        return me.i32(o);
      case 'f32':
        return me.f32(o);
      case 'u64':
        return me.u64(o);
      case 'i64':
        return me.i64(o);
      case 'f64':
        return me.f64(o);
      case 'u128':
        return me.u128(o);
      case 'i128':
        return me.i128(o);
      case 'u256':
        return me.u256(o);
      case 'i256':
        return me.i256(o);
      case 'bytes':
        return me.vecU8(o);
      case 'string':
        return me.str(o);
      case 'pubkey':
        return me.publicKey(o);
      default: {
        if ('option' in e.type) return me.option(be.fieldLayout({ type: e.type.option }, n, r), o);
        if ('vec' in e.type) return me.vec(be.fieldLayout({ type: e.type.vec }, n, r), o);
        if ('array' in e.type) {
          let [i, c] = e.type.array;
          return (c = be.resolveArrayLen(c, r)), me.array(be.fieldLayout({ type: i }, n, r), c, o);
        }
        if ('defined' in e.type) {
          if (!n) throw new vt('User defined types not provided');
          const i = e.type.defined.name,
            c = n.find((d) => d.name === i);
          if (!c) throw new vt('Type not found: '.concat(e.name));
          return be.typeDefLayout({
            typeDef: c,
            types: n,
            genericArgs: r != null ? r : e.type.defined.generics,
            name: o,
          });
        }
        if ('generic' in e.type) {
          const i = r == null ? void 0 : r.at(0);
          if ((i == null ? void 0 : i.kind) !== 'type')
            throw new vt('Invalid generic field: '.concat(e.name));
          return be.fieldLayout(st(xe({}, e), { type: i.type }), n);
        }
        throw new vt('Not yet implemented: '.concat(JSON.stringify(e.type)));
      }
    }
  }
  static typeDefLayout({ typeDef: e, types: n, name: r, genericArgs: o }) {
    switch (e.type.kind) {
      case 'struct': {
        const i = vn(
          e.type.fields,
          () => [],
          (c) =>
            c.map((d) => {
              const p = o && be.resolveGenericArgs({ type: d.type, typeDef: e, genericArgs: o });
              return be.fieldLayout(d, n, p);
            }),
          (c) =>
            c.map((d, p) => {
              const a = o && be.resolveGenericArgs({ type: d, typeDef: e, genericArgs: o });
              return be.fieldLayout({ name: p.toString(), type: d }, n, a);
            })
        );
        return me.struct(i, r);
      }
      case 'enum': {
        const i = e.type.variants.map((c) => {
          const d = vn(
            c.fields,
            () => [],
            (p) =>
              p.map((a) => {
                const _ = o && be.resolveGenericArgs({ type: a.type, typeDef: e, genericArgs: o });
                return be.fieldLayout(a, n, _);
              }),
            (p) =>
              p.map((a, _) => {
                const A = o && be.resolveGenericArgs({ type: a, typeDef: e, genericArgs: o });
                return be.fieldLayout({ name: _.toString(), type: a }, n, A);
              })
          );
          return me.struct(d, c.name);
        });
        return r !== void 0 ? me.rustEnum(i).replicate(r) : me.rustEnum(i, r);
      }
      case 'type':
        return be.fieldLayout({ type: e.type.alias, name: r }, n);
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
        if ('option' in e) return 1 + be.typeSize(e.option, n, r);
        if ('coption' in e) return 4 + be.typeSize(e.coption, n, r);
        if ('vec' in e) return 1;
        if ('array' in e) {
          let [i, c] = e.array;
          return (c = be.resolveArrayLen(c, r)), be.typeSize(i, n, r) * c;
        }
        if ('defined' in e) {
          const i =
            (o = n.types) === null || o === void 0
              ? void 0
              : o.find((d) => d.name === e.defined.name);
          if (!i) throw new vt('Type not found: '.concat(JSON.stringify(e)));
          const c = (d) => {
            const p = r != null ? r : e.defined.generics,
              a = p && be.resolveGenericArgs({ type: d, typeDef: i, genericArgs: p });
            return be.typeSize(d, n, a);
          };
          switch (i.type.kind) {
            case 'struct':
              return vn(
                i.type.fields,
                () => [0],
                (d) => d.map((p) => c(p.type)),
                (d) => d.map((p) => c(p))
              ).reduce((d, p) => d + p, 0);
            case 'enum': {
              const d = i.type.variants.map((p) =>
                vn(
                  p.fields,
                  () => [0],
                  (a) => a.map((_) => c(_.type)),
                  (a) => a.map((_) => c(_))
                ).reduce((a, _) => a + _, 0)
              );
              return Math.max(...d) + 1;
            }
            case 'type':
              return be.typeSize(i.type.alias, n, r);
          }
        }
        if ('generic' in e) {
          const i = r == null ? void 0 : r.at(0);
          if ((i == null ? void 0 : i.kind) !== 'type')
            throw new vt('Invalid generic: '.concat(e.generic));
          return be.typeSize(i.type, n, r);
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
    if (typeof e != 'number') throw new vt('Generic array length did not resolve');
    return e;
  }
  static resolveGenericArgs({ type: e, typeDef: n, genericArgs: r, isDefined: o }) {
    if (typeof e != 'object') return null;
    for (const i in n.generics) {
      const c = n.generics[i];
      if ('generic' in e && c.name === e.generic) return [r[i]];
      if ('option' in e) {
        const d = be.resolveGenericArgs({
          type: e.option,
          typeDef: n,
          genericArgs: r,
          isDefined: o,
        });
        if (!d || !o) return d;
        if (d[0].kind === 'type') return [{ kind: 'type', type: { option: d[0].type } }];
      }
      if ('vec' in e) {
        const d = be.resolveGenericArgs({ type: e.vec, typeDef: n, genericArgs: r, isDefined: o });
        if (!d || !o) return d;
        if (d[0].kind === 'type') return [{ kind: 'type', type: { vec: d[0].type } }];
      }
      if ('array' in e) {
        const [d, p] = e.array,
          a = typeof p == 'object',
          _ = be.resolveGenericArgs({ type: d, typeDef: n, genericArgs: r, isDefined: o });
        if (_) {
          for (const A in n.generics.slice(+i)) {
            const h = +i + +A;
            a && n.generics[h].name === p.generic && _.push(r[h]);
          }
          if (!o) return _;
          if (_[0].kind === 'type' && _[1].kind === 'const')
            return [{ kind: 'type', type: { array: [_[0].type, +_[1].value] } }];
        }
        if (a && c.name === p.generic) {
          const A = r[i];
          return o ? [{ kind: 'type', type: { array: [d, +A.value] } }] : [A];
        }
        return null;
      }
      if ('defined' in e)
        return e.defined.generics
          ? e.defined.generics
              .flatMap((d) => {
                switch (d.kind) {
                  case 'type':
                    return be.resolveGenericArgs({
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
class Jd {
  constructor(e) {
    this.idl = e;
    const n = e.instructions.map((o) => {
      const i = o.name,
        c = o.args.map((p) => mn.fieldLayout(p, e.types)),
        d = me.struct(c, i);
      return [i, { discriminator: o.discriminator, layout: d }];
    });
    this.ixLayouts = new Map(n);
    const r = n.map(([o, { discriminator: i, layout: c }]) => [
      Pn.encode(i),
      { name: o, layout: c },
    ]);
    this.sighashLayouts = new Map(r);
  }
  encode(e, n) {
    const r = Pe.Buffer.alloc(1e3),
      o = this.ixLayouts.get(e);
    if (!o) throw new Error('Unknown method: '.concat(e));
    const i = o.layout.encode(n, r),
      c = r.slice(0, i);
    return Pe.Buffer.concat([Pe.Buffer.from(o.discriminator), c]);
  }
  decode(e, n = 'hex') {
    typeof e == 'string' && (e = n === 'hex' ? Pe.Buffer.from(e, 'hex') : Pn.decode(e));
    const r = e.slice(0, _n),
      o = e.slice(_n),
      i = this.sighashLayouts.get(Pn.encode(r));
    return i ? { name: i.name, data: i.layout.decode(o) } : null;
  }
  format(e, n) {
    return Ze.format(e, n, this.idl);
  }
}
class Ze {
  static format(e, n, r) {
    const o = r.instructions.find((p) => e.name === p.name);
    if (!o) return console.error('Invalid instruction given'), null;
    const i = o.args.map((p) => ({
        name: p.name,
        type: Ze.formatIdlType(p.type),
        data: Ze.formatIdlData(p, e.data[p.name], r.types),
      })),
      c = Ze.flattenIdlAccounts(o.accounts),
      d = n.map((p, a) => (a < c.length ? xe({ name: c[a].name }, p) : xe({ name: void 0 }, p)));
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
                return Ze.formatIdlType(o.type);
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
        i = r.find((c) => c.name === o);
      if (!i) throw new Error('Type not found: '.concat(o));
      return Ze.formatIdlDataDefined(i, n, r);
    }
    return 'unknown';
  }
  static formatIdlDataDefined(e, n, r) {
    switch (e.type.kind) {
      case 'struct':
        return (
          '{ ' +
          vn(
            e.type.fields,
            () => '',
            (o) =>
              Object.entries(n)
                .map(([i, c]) => {
                  const d = o.find((p) => p.name === i);
                  if (!d) throw new Error('Field not found: '.concat(i));
                  return i + ': ' + Ze.formatIdlData(d, c, r);
                })
                .join(', '),
            (o) =>
              Object.entries(n)
                .map(([i, c]) => i + ': ' + Ze.formatIdlData({ name: '', type: o[i] }, c, r))
                .join(', ')
          ) +
          ' }'
        );
      case 'enum': {
        const o = Object.keys(n)[0],
          i = e.type.variants.find((d) => d.name === o);
        if (!i) throw new Error('Unable to find variant: '.concat(o));
        const c = n[o];
        return vn(
          i.fields,
          () => o,
          (d) => {
            const p = Object.keys(c)
              .map((a) => {
                const _ = c[a],
                  A = d.find((h) => h.name === a);
                if (!A) throw new Error('Field not found: '.concat(a));
                return a + ': ' + Ze.formatIdlData(A, _, r);
              })
              .join(', ');
            return ''.concat(o, ' { ').concat(p, ' }');
          },
          (d) => {
            const p = Object.entries(c)
              .map(([a, _]) => a + ': ' + Ze.formatIdlData({ name: '', type: d[a] }, _, r))
              .join(', ');
            return ''.concat(o, ' { ').concat(p, ' }');
          }
        );
      }
      case 'type':
        return Ze.formatIdlType(e.type.alias);
    }
  }
  static flattenIdlAccounts(e, n) {
    return e
      .map((r) => {
        const o = Om(r.name);
        if (r.hasOwnProperty('accounts')) {
          const i = n ? ''.concat(n, ' > ').concat(o) : o;
          return Ze.flattenIdlAccounts(r.accounts, i);
        } else return st(xe({}, r), { name: n ? ''.concat(n, ' > ').concat(o) : o });
      })
      .flat();
  }
}
function Om(t) {
  const e = t.replace(/([A-Z])/g, ' $1');
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const _n = 8;
let Zd = class {
    constructor(e) {
      if (((this.idl = e), !e.accounts)) {
        this.accountLayouts = new Map();
        return;
      }
      const n = e.types;
      if (!n) throw new Error('Accounts require `idl.types`');
      const r = e.accounts.map((o) => {
        const i = n.find((c) => c.name === o.name);
        if (!i) throw new Error('Account not found: '.concat(o.name));
        return [o.name, mn.typeDefLayout({ typeDef: i, types: n })];
      });
      this.accountLayouts = new Map(r);
    }
    async encode(e, n) {
      const r = Pe.Buffer.alloc(1e3),
        o = this.accountLayouts.get(e);
      if (!o) throw new Error('Unknown account: '.concat(e));
      const i = o.encode(n, r),
        c = r.slice(0, i),
        d = this.accountDiscriminator(e);
      return Pe.Buffer.concat([d, c]);
    }
    decode(e, n) {
      if (this.accountDiscriminator(e).compare(n.slice(0, _n)))
        throw new Error('Invalid account discriminator');
      return this.decodeUnchecked(e, n);
    }
    decodeAny(e) {
      const n = e.slice(0, _n),
        r = Array.from(this.accountLayouts.keys()).find((o) =>
          this.accountDiscriminator(o).equals(n)
        );
      if (!r) throw new Error('Account not found');
      return this.decodeUnchecked(r, e);
    }
    decodeUnchecked(e, n) {
      const r = n.subarray(_n),
        o = this.accountLayouts.get(e);
      if (!o) throw new Error('Unknown account: '.concat(e));
      return o.decode(r);
    }
    memcmp(e, n) {
      const r = this.accountDiscriminator(e);
      return { offset: 0, bytes: Pn.encode(n ? Pe.Buffer.concat([r, n]) : r) };
    }
    size(e) {
      return _n + mn.typeSize({ defined: { name: e } }, this.idl);
    }
    accountDiscriminator(e) {
      var n;
      const r =
        (n = this.idl.accounts) === null || n === void 0 ? void 0 : n.find((o) => o.name === e);
      if (!r) throw new Error('Account not found: '.concat(e));
      return Pe.Buffer.from(r.discriminator);
    }
  },
  Qd = class {
    constructor(e) {
      var n;
      if (!e.events) {
        this.layouts = new Map();
        return;
      }
      const r = e.types;
      if (!r) throw new Error('Events require `idl.types`');
      const o = e.events.map((i) => {
        const c = r.find((d) => d.name === i.name);
        if (!c) throw new Error('Event not found: '.concat(i.name));
        return [i.name, mn.typeDefLayout({ typeDef: c, types: r })];
      });
      (this.layouts = new Map(o)),
        (this.discriminators = new Map(
          ((n = e.events) !== null && n !== void 0 ? n : []).map((i) => [
            Ho(Pe.Buffer.from(i.discriminator)),
            i.name,
          ])
        ));
    }
    decode(e) {
      let n;
      try {
        n = ru(e);
      } catch (d) {
        return null;
      }
      const r = Ho(n.slice(0, 8)),
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
        .map((o) => [o.name, mn.typeDefLayout({ typeDef: o, types: n })]);
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
class du {
  constructor(e) {
    (this.instruction = new Jd(e)),
      (this.accounts = new Zd(e)),
      (this.events = new Qd(e)),
      (this.types = new Rm(e));
  }
}
class Ye {
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
var Ti = Ye;
function ym(t, e) {
  return e.property ? t + '[' + e.property + ']' : t;
}
class hn extends Ye {
  isCount() {
    throw new Error('ExternalLayout is abstract');
  }
}
class ef extends hn {
  constructor(e, n, r) {
    if (!(e instanceof Ye)) throw new TypeError('layout must be a Layout');
    if (n === void 0) n = 0;
    else if (!Number.isInteger(n)) throw new TypeError('offset must be integer or undefined');
    super(e.span, r || e.property), (this.layout = e), (this.offset = n);
  }
  isCount() {
    return this.layout instanceof Ei || this.layout instanceof tf;
  }
  decode(e, n) {
    return n === void 0 && (n = 0), this.layout.decode(e, n + this.offset);
  }
  encode(e, n, r) {
    return r === void 0 && (r = 0), this.layout.encode(e, n, r + this.offset);
  }
}
class Ei extends Ye {
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
class tf extends Ye {
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
const Fo = Math.pow(2, 32);
function nf(t) {
  const e = Math.floor(t / Fo),
    n = t - e * Fo;
  return { hi32: e, lo32: n };
}
function rf(t, e) {
  return t * Fo + e;
}
class Tm extends Ye {
  constructor(e) {
    super(8, e);
  }
  decode(e, n) {
    n === void 0 && (n = 0);
    const r = e.readUInt32LE(n),
      o = e.readUInt32LE(n + 4);
    return rf(o, r);
  }
  encode(e, n, r) {
    r === void 0 && (r = 0);
    const o = nf(e);
    return n.writeUInt32LE(o.lo32, r), n.writeUInt32LE(o.hi32, r + 4), 8;
  }
}
class Em extends Ye {
  constructor(e) {
    super(8, e);
  }
  decode(e, n) {
    n === void 0 && (n = 0);
    const r = e.readUInt32LE(n),
      o = e.readInt32LE(n + 4);
    return rf(o, r);
  }
  encode(e, n, r) {
    r === void 0 && (r = 0);
    const o = nf(e);
    return n.writeUInt32LE(o.lo32, r), n.writeInt32LE(o.hi32, r + 4), 8;
  }
}
class Im extends Ye {
  constructor(e, n, r) {
    if (!(Array.isArray(e) && e.reduce((i, c) => i && c instanceof Ye, !0)))
      throw new TypeError('fields must be array of Layout instances');
    typeof n == 'boolean' && r === void 0 && ((r = n), (n = void 0));
    for (const i of e)
      if (0 > i.span && i.property === void 0)
        throw new Error('fields cannot contain unnamed variable-length layout');
    let o = -1;
    try {
      o = e.reduce((i, c) => i + c.getSpan(), 0);
    } catch (i) {}
    super(o, n), (this.fields = e), (this.decodePrefixes = !!r);
  }
  getSpan(e, n) {
    if (0 <= this.span) return this.span;
    n === void 0 && (n = 0);
    let r = 0;
    try {
      r = this.fields.reduce((o, i) => {
        const c = i.getSpan(e, n);
        return (n += c), o + c;
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
      c = 0;
    for (const d of this.fields) {
      let p = d.span;
      if (((c = 0 < p ? p : 0), d.property !== void 0)) {
        const a = e[d.property];
        a !== void 0 && ((c = d.encode(a, n, r)), 0 > p && (p = d.getSpan(n, r)));
      }
      (i = r), (r += p);
    }
    return i + c - o;
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
class of {
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
class Rc extends of {
  constructor(e, n) {
    if (!(e instanceof hn && e.isCount()))
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
class sf extends Ye {
  constructor(e, n, r) {
    const o = e instanceof Ei || e instanceof tf;
    if (o) e = new Rc(new ef(e));
    else if (e instanceof hn && e.isCount()) e = new Rc(e);
    else if (!(e instanceof of))
      throw new TypeError('discr must be a UnionDiscriminator or an unsigned integer layout');
    if ((n === void 0 && (n = null), !(n === null || n instanceof Ye)))
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
    let c = this.defaultGetSourceVariant.bind(this);
    (this.getSourceVariant = function (d) {
      return c(d);
    }),
      (this.configGetSourceVariant = function (d) {
        c = d.bind(this);
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
    let c = this.registry[i];
    if (c === void 0) {
      let d = 0;
      (c = this.defaultLayout),
        this.usesPrefixDiscriminator && (d = o.layout.span),
        (r = this.makeDestinationObject()),
        (r[o.property] = i),
        (r[c.property] = this.defaultLayout.decode(e, n + d));
    } else r = c.decode(e, n);
    return r;
  }
  encode(e, n, r) {
    r === void 0 && (r = 0);
    const o = this.getSourceVariant(e);
    if (o === void 0) {
      const i = this.discriminator,
        c = this.defaultLayout;
      let d = 0;
      return (
        this.usesPrefixDiscriminator && (d = i.layout.span),
        i.encode(e[i.property], n, r),
        d + c.encode(e[c.property], n, r + d)
      );
    }
    return o.encode(e, n, r);
  }
  addVariant(e, n, r) {
    const o = new wm(this, e, n, r);
    return (this.registry[e] = o), o;
  }
  getVariant(e, n) {
    let r = e;
    return (
      ie.Buffer.isBuffer(e) && (n === void 0 && (n = 0), (r = this.discriminator.decode(e, n))),
      this.registry[r]
    );
  }
}
class wm extends Ye {
  constructor(e, n, r, o) {
    if (!(e instanceof sf)) throw new TypeError('union must be a Union');
    if (!Number.isInteger(n) || 0 > n)
      throw new TypeError('variant must be a (non-negative) integer');
    if ((typeof r == 'string' && o === void 0 && ((o = r), (r = null)), r)) {
      if (!(r instanceof Ye)) throw new TypeError('layout must be a Layout');
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
class bm extends Ye {
  constructor(e, n) {
    if (!((e instanceof hn && e.isCount()) || (Number.isInteger(e) && 0 <= e)))
      throw new TypeError('length must be positive integer or an unsigned integer ExternalLayout');
    let r = -1;
    e instanceof hn || (r = e), super(r, n), (this.length = e);
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
    if ((this.length instanceof hn && (o = e.length), !(ie.Buffer.isBuffer(e) && o === e.length)))
      throw new TypeError(ym('Blob.encode', this) + ' requires (length ' + o + ') Buffer as src');
    if (r + o > n.length) throw new RangeError('encoding overruns Buffer');
    return (
      n.write(e.toString('hex'), r, o, 'hex'),
      this.length instanceof hn && this.length.encode(o, n, r),
      o
    );
  }
}
var Nm = (t, e, n) => new ef(t, e, n),
  Cm = (t) => new Ei(1, t),
  Mt = (t) => new Ei(4, t),
  Sm = (t) => new Tm(t),
  Dt = (t) => new Em(t),
  Le = (t, e, n) => new Im(t, e, n),
  af = (t, e, n) => new sf(t, e, n),
  Lr = (t, e) => new bm(t, e);
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
          return Um(n);
        case 'withdrawNonceAccount':
          return Lm(n);
        case 'initializeNonceAccount':
          return xm(n);
        case 'authorizeNonceAccount':
          return $m(n);
        case 'allocate':
          return Hm(n);
        case 'allocateWithSeed':
          return jm(n);
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
  Pm = class extends Ti {
    constructor(e) {
      super(-1, e),
        (this.property = e),
        (this.layout = Le(
          [Mt('length'), Mt('lengthPadding'), Lr(Nm(Mt(), -8), 'chars')],
          this.property
        ));
    }
    encode(e, n, r = 0) {
      if (e == null) return this.layout.span;
      const o = { chars: ie.Buffer.from(e, 'utf8') };
      return this.layout.encode(o, n, r);
    }
    decode(e, n = 0) {
      return this.layout.decode(e, n).chars.toString();
    }
    getSpan(e, n = 0) {
      return Mt().span + Mt().span + new Vt(new Uint8Array(e).slice(n, n + 4), 10, 'le').toNumber();
    }
  };
function Ii(t) {
  return new Pm(t);
}
function dt(t) {
  return Lr(32, t);
}
function Mm({ lamports: t, space: e, owner: n }) {
  return pt({ createAccount: { lamports: t, space: e, owner: n.toBuffer() } });
}
function km({ owner: t }) {
  return pt({ assign: { owner: t.toBuffer() } });
}
function Dm({ lamports: t }) {
  return pt({ transfer: { lamports: t } });
}
function Bm({ base: t, seed: e, lamports: n, space: r, owner: o }) {
  return pt(
    {
      createAccountWithSeed: {
        base: t.toBuffer(),
        seed: e,
        lamports: n,
        space: r,
        owner: o.toBuffer(),
      },
    },
    $e.getVariant(3).span + e.length
  );
}
function xm({ authorized: t }) {
  return pt({ initializeNonceAccount: { authorized: t.toBuffer() } });
}
function Um({ authorized: t }) {
  return pt({ advanceNonceAccount: { authorized: t.toBuffer() } });
}
function Lm({ lamports: t }) {
  return pt({ withdrawNonceAccount: { lamports: t } });
}
function $m({ authorized: t }) {
  return pt({ authorizeNonceAccount: { authorized: t.toBuffer() } });
}
function Hm({ space: t }) {
  return pt({ allocate: { space: t } });
}
function jm({ base: t, seed: e, space: n, owner: r }) {
  return pt(
    { allocateWithSeed: { base: t.toBuffer(), seed: e, space: n, owner: r.toBuffer() } },
    $e.getVariant(9).span + e.length
  );
}
function Gm({ base: t, seed: e, owner: n }) {
  return pt(
    { assignWithSeed: { base: t.toBuffer(), seed: e, owner: n.toBuffer() } },
    $e.getVariant(10).span + e.length
  );
}
function Fm({ lamports: t, seed: e, owner: n }) {
  return pt(
    { transferWithSeed: { lamports: t, seed: e, owner: n.toBuffer() } },
    $e.getVariant(11).span + e.length
  );
}
const $e = af(Mt('instruction'));
$e.addVariant(0, Le([Dt('lamports'), Dt('space'), dt('owner')]), 'createAccount');
$e.addVariant(1, Le([dt('owner')]), 'assign');
$e.addVariant(2, Le([Dt('lamports')]), 'transfer');
$e.addVariant(
  3,
  Le([dt('base'), Ii('seed'), Dt('lamports'), Dt('space'), dt('owner')]),
  'createAccountWithSeed'
);
$e.addVariant(4, Le([dt('authorized')]), 'advanceNonceAccount');
$e.addVariant(5, Le([Dt('lamports')]), 'withdrawNonceAccount');
$e.addVariant(6, Le([dt('authorized')]), 'initializeNonceAccount');
$e.addVariant(7, Le([dt('authorized')]), 'authorizeNonceAccount');
$e.addVariant(8, Le([Dt('space')]), 'allocate');
$e.addVariant(9, Le([dt('base'), Ii('seed'), Dt('space'), dt('owner')]), 'allocateWithSeed');
$e.addVariant(10, Le([dt('base'), Ii('seed'), dt('owner')]), 'assignWithSeed');
$e.addVariant(11, Le([Dt('lamports'), Ii('seed'), dt('owner')]), 'transferWithSeed');
function pt(t, e) {
  const n = ie.Buffer.alloc(e != null ? e : Km),
    r = $e.encode(t, n);
  return e === void 0 ? n.slice(0, r) : n;
}
const Km = Math.max(...Object.values($e.registry).map((t) => t.span));
let Vm = class {
  constructor(e) {
    this.idl = e;
  }
  async encode(e, n) {
    switch (e) {
      case 'nonce': {
        const r = ie.Buffer.alloc(sc),
          o = uf.encode(n, r);
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
        return { dataSize: sc };
      default:
        throw new Error('Invalid account name: '.concat(e));
    }
  }
  size(e) {
    return mn.typeSize({ defined: { name: e } }, this.idl);
  }
};
function Wm(t) {
  return uf.decode(t);
}
let qm = class extends Ti {
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
function yc(t) {
  return new qm(
    Lr(32),
    (e) => new Ke(e),
    (e) => e.toBuffer(),
    t
  );
}
const uf = Le([
  Mt('version'),
  Mt('state'),
  yc('authorizedPubkey'),
  yc('nonce'),
  Le([Sm('lamportsPerSignature')], 'feeCalculator'),
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
  cf = class {
    constructor(e) {
      (this.instruction = new vm(e)),
        (this.accounts = new Vm(e)),
        (this.events = new zm(e)),
        (this.types = new Ym(e));
    }
  };
function Xm(t) {
  return new TextDecoder().decode(tl(t));
}
var Jm = Object.freeze({ __proto__: null, hash: Xm });
function Zm(t, e, n) {
  const r = Pe.Buffer.concat([t.toBuffer(), Pe.Buffer.from(e), n.toBuffer()]);
  return new Ke(tl(r));
}
var Qm = Object.freeze({ __proto__: null, createWithSeedSync: Zm });
const lf = new Ke('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'),
  df = new Ke('ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL');
function eg({ mint: t, owner: e }) {
  return Ke.findProgramAddressSync([e.toBuffer(), lf.toBuffer(), t.toBuffer()], df)[0];
}
var tg = Object.freeze({
    __proto__: null,
    TOKEN_PROGRAM_ID: lf,
    ASSOCIATED_PROGRAM_ID: df,
    associatedAddress: eg,
  }),
  Ko = { exports: {} };
(function (t, e) {
  var n = typeof self < 'u' ? self : _m,
    r = (function () {
      function i() {
        (this.fetch = !1), (this.DOMException = n.DOMException);
      }
      return (i.prototype = n), new i();
    })();
  (function (i) {
    (function (c) {
      var d = {
        searchParams: 'URLSearchParams' in i,
        iterable: 'Symbol' in i && 'iterator' in Symbol,
        blob:
          'FileReader' in i &&
          'Blob' in i &&
          (function () {
            try {
              return new Blob(), !0;
            } catch (S) {
              return !1;
            }
          })(),
        formData: 'FormData' in i,
        arrayBuffer: 'ArrayBuffer' in i,
      };
      function p(S) {
        return S && DataView.prototype.isPrototypeOf(S);
      }
      if (d.arrayBuffer)
        var a = [
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
            function (S) {
              return S && a.indexOf(Object.prototype.toString.call(S)) > -1;
            };
      function A(S) {
        if ((typeof S != 'string' && (S = String(S)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(S)))
          throw new TypeError('Invalid character in header field name');
        return S.toLowerCase();
      }
      function h(S) {
        return typeof S != 'string' && (S = String(S)), S;
      }
      function m(S) {
        var k = {
          next: function () {
            var q = S.shift();
            return { done: q === void 0, value: q };
          },
        };
        return (
          d.iterable &&
            (k[Symbol.iterator] = function () {
              return k;
            }),
          k
        );
      }
      function g(S) {
        (this.map = {}),
          S instanceof g
            ? S.forEach(function (k, q) {
                this.append(q, k);
              }, this)
            : Array.isArray(S)
              ? S.forEach(function (k) {
                  this.append(k[0], k[1]);
                }, this)
              : S &&
                Object.getOwnPropertyNames(S).forEach(function (k) {
                  this.append(k, S[k]);
                }, this);
      }
      (g.prototype.append = function (S, k) {
        (S = A(S)), (k = h(k));
        var q = this.map[S];
        this.map[S] = q ? q + ', ' + k : k;
      }),
        (g.prototype.delete = function (S) {
          delete this.map[A(S)];
        }),
        (g.prototype.get = function (S) {
          return (S = A(S)), this.has(S) ? this.map[S] : null;
        }),
        (g.prototype.has = function (S) {
          return this.map.hasOwnProperty(A(S));
        }),
        (g.prototype.set = function (S, k) {
          this.map[A(S)] = h(k);
        }),
        (g.prototype.forEach = function (S, k) {
          for (var q in this.map) this.map.hasOwnProperty(q) && S.call(k, this.map[q], q, this);
        }),
        (g.prototype.keys = function () {
          var S = [];
          return (
            this.forEach(function (k, q) {
              S.push(q);
            }),
            m(S)
          );
        }),
        (g.prototype.values = function () {
          var S = [];
          return (
            this.forEach(function (k) {
              S.push(k);
            }),
            m(S)
          );
        }),
        (g.prototype.entries = function () {
          var S = [];
          return (
            this.forEach(function (k, q) {
              S.push([q, k]);
            }),
            m(S)
          );
        }),
        d.iterable && (g.prototype[Symbol.iterator] = g.prototype.entries);
      function R(S) {
        if (S.bodyUsed) return Promise.reject(new TypeError('Already read'));
        S.bodyUsed = !0;
      }
      function w(S) {
        return new Promise(function (k, q) {
          (S.onload = function () {
            k(S.result);
          }),
            (S.onerror = function () {
              q(S.error);
            });
        });
      }
      function N(S) {
        var k = new FileReader(),
          q = w(k);
        return k.readAsArrayBuffer(S), q;
      }
      function P(S) {
        var k = new FileReader(),
          q = w(k);
        return k.readAsText(S), q;
      }
      function I(S) {
        for (var k = new Uint8Array(S), q = new Array(k.length), ee = 0; ee < k.length; ee++)
          q[ee] = String.fromCharCode(k[ee]);
        return q.join('');
      }
      function B(S) {
        if (S.slice) return S.slice(0);
        var k = new Uint8Array(S.byteLength);
        return k.set(new Uint8Array(S)), k.buffer;
      }
      function F() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (S) {
            (this._bodyInit = S),
              S
                ? typeof S == 'string'
                  ? (this._bodyText = S)
                  : d.blob && Blob.prototype.isPrototypeOf(S)
                    ? (this._bodyBlob = S)
                    : d.formData && FormData.prototype.isPrototypeOf(S)
                      ? (this._bodyFormData = S)
                      : d.searchParams && URLSearchParams.prototype.isPrototypeOf(S)
                        ? (this._bodyText = S.toString())
                        : d.arrayBuffer && d.blob && p(S)
                          ? ((this._bodyArrayBuffer = B(S.buffer)),
                            (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                          : d.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(S) || _(S))
                            ? (this._bodyArrayBuffer = B(S))
                            : (this._bodyText = S = Object.prototype.toString.call(S))
                : (this._bodyText = ''),
              this.headers.get('content-type') ||
                (typeof S == 'string'
                  ? this.headers.set('content-type', 'text/plain;charset=UTF-8')
                  : this._bodyBlob && this._bodyBlob.type
                    ? this.headers.set('content-type', this._bodyBlob.type)
                    : d.searchParams &&
                      URLSearchParams.prototype.isPrototypeOf(S) &&
                      this.headers.set(
                        'content-type',
                        'application/x-www-form-urlencoded;charset=UTF-8'
                      ));
          }),
          d.blob &&
            ((this.blob = function () {
              var S = R(this);
              if (S) return S;
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
            var S = R(this);
            if (S) return S;
            if (this._bodyBlob) return P(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(I(this._bodyArrayBuffer));
            if (this._bodyFormData) throw new Error('could not read FormData body as text');
            return Promise.resolve(this._bodyText);
          }),
          d.formData &&
            (this.formData = function () {
              return this.text().then(v);
            }),
          (this.json = function () {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      var $ = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
      function T(S) {
        var k = S.toUpperCase();
        return $.indexOf(k) > -1 ? k : S;
      }
      function y(S, k) {
        k = k || {};
        var q = k.body;
        if (S instanceof y) {
          if (S.bodyUsed) throw new TypeError('Already read');
          (this.url = S.url),
            (this.credentials = S.credentials),
            k.headers || (this.headers = new g(S.headers)),
            (this.method = S.method),
            (this.mode = S.mode),
            (this.signal = S.signal),
            !q && S._bodyInit != null && ((q = S._bodyInit), (S.bodyUsed = !0));
        } else this.url = String(S);
        if (
          ((this.credentials = k.credentials || this.credentials || 'same-origin'),
          (k.headers || !this.headers) && (this.headers = new g(k.headers)),
          (this.method = T(k.method || this.method || 'GET')),
          (this.mode = k.mode || this.mode || null),
          (this.signal = k.signal || this.signal),
          (this.referrer = null),
          (this.method === 'GET' || this.method === 'HEAD') && q)
        )
          throw new TypeError('Body not allowed for GET or HEAD requests');
        this._initBody(q);
      }
      y.prototype.clone = function () {
        return new y(this, { body: this._bodyInit });
      };
      function v(S) {
        var k = new FormData();
        return (
          S.trim()
            .split('&')
            .forEach(function (q) {
              if (q) {
                var ee = q.split('='),
                  H = ee.shift().replace(/\+/g, ' '),
                  V = ee.join('=').replace(/\+/g, ' ');
                k.append(decodeURIComponent(H), decodeURIComponent(V));
              }
            }),
          k
        );
      }
      function M(S) {
        var k = new g(),
          q = S.replace(/\r?\n[\t ]+/g, ' ');
        return (
          q.split(/\r?\n/).forEach(function (ee) {
            var H = ee.split(':'),
              V = H.shift().trim();
            if (V) {
              var te = H.join(':').trim();
              k.append(V, te);
            }
          }),
          k
        );
      }
      F.call(y.prototype);
      function G(S, k) {
        k || (k = {}),
          (this.type = 'default'),
          (this.status = k.status === void 0 ? 200 : k.status),
          (this.ok = this.status >= 200 && this.status < 300),
          (this.statusText = 'statusText' in k ? k.statusText : 'OK'),
          (this.headers = new g(k.headers)),
          (this.url = k.url || ''),
          this._initBody(S);
      }
      F.call(G.prototype),
        (G.prototype.clone = function () {
          return new G(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new g(this.headers),
            url: this.url,
          });
        }),
        (G.error = function () {
          var S = new G(null, { status: 0, statusText: '' });
          return (S.type = 'error'), S;
        });
      var J = [301, 302, 303, 307, 308];
      (G.redirect = function (S, k) {
        if (J.indexOf(k) === -1) throw new RangeError('Invalid status code');
        return new G(null, { status: k, headers: { location: S } });
      }),
        (c.DOMException = i.DOMException);
      try {
        new c.DOMException();
      } catch (S) {
        (c.DOMException = function (k, q) {
          (this.message = k), (this.name = q);
          var ee = Error(k);
          this.stack = ee.stack;
        }),
          (c.DOMException.prototype = Object.create(Error.prototype)),
          (c.DOMException.prototype.constructor = c.DOMException);
      }
      function z(S, k) {
        return new Promise(function (q, ee) {
          var H = new y(S, k);
          if (H.signal && H.signal.aborted) return ee(new c.DOMException('Aborted', 'AbortError'));
          var V = new XMLHttpRequest();
          function te() {
            V.abort();
          }
          (V.onload = function () {
            var se = {
              status: V.status,
              statusText: V.statusText,
              headers: M(V.getAllResponseHeaders() || ''),
            };
            se.url = 'responseURL' in V ? V.responseURL : se.headers.get('X-Request-URL');
            var ce = 'response' in V ? V.response : V.responseText;
            q(new G(ce, se));
          }),
            (V.onerror = function () {
              ee(new TypeError('Network request failed'));
            }),
            (V.ontimeout = function () {
              ee(new TypeError('Network request failed'));
            }),
            (V.onabort = function () {
              ee(new c.DOMException('Aborted', 'AbortError'));
            }),
            V.open(H.method, H.url, !0),
            H.credentials === 'include'
              ? (V.withCredentials = !0)
              : H.credentials === 'omit' && (V.withCredentials = !1),
            'responseType' in V && d.blob && (V.responseType = 'blob'),
            H.headers.forEach(function (se, ce) {
              V.setRequestHeader(ce, se);
            }),
            H.signal &&
              (H.signal.addEventListener('abort', te),
              (V.onreadystatechange = function () {
                V.readyState === 4 && H.signal.removeEventListener('abort', te);
              })),
            V.send(typeof H._bodyInit > 'u' ? null : H._bodyInit);
        });
      }
      return (
        (z.polyfill = !0),
        i.fetch || ((i.fetch = z), (i.Headers = g), (i.Request = y), (i.Response = G)),
        (c.Headers = g),
        (c.Request = y),
        (c.Response = G),
        (c.fetch = z),
        Object.defineProperty(c, '__esModule', { value: !0 }),
        c
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
})(Ko, Ko.exports);
var ng = hm(Ko.exports);
async function rg(t, e, n = 5) {
  const r = 'https://api.apr.dev/api/v0/program/'.concat(e.toString(), '/latest?limit=').concat(n),
    [o, i] = await Promise.all([ff(t, e), ng(r)]),
    c = (await i.json()).filter(
      (p) => !p.aborted && p.state === 'Built' && p.verified === 'Verified'
    );
  if (c.length === 0) return null;
  const d = c[0];
  return o.slot.toNumber() !== d.verified_slot ? null : d;
}
async function ff(t, e) {
  const n = await t.getAccountInfo(e);
  if (n === null) throw new Error('program account not found');
  const { program: r } = Vo(n.data),
    o = await t.getAccountInfo(r.programdataAddress);
  if (o === null) throw new Error('program data account not found');
  const { programData: i } = Vo(o.data);
  return i;
}
const ig = me.rustEnum(
  [
    me.struct([], 'uninitialized'),
    me.struct([me.option(me.publicKey(), 'authorityAddress')], 'buffer'),
    me.struct([me.publicKey('programdataAddress')], 'program'),
    me.struct(
      [me.u64('slot'), me.option(me.publicKey(), 'upgradeAuthorityAddress')],
      'programData'
    ),
  ],
  void 0,
  me.u32()
);
function Vo(t) {
  return ig.decode(t);
}
var og = Object.freeze({
    __proto__: null,
    verifiedBuild: rg,
    fetchData: ff,
    decodeUpgradeableLoaderState: Vo,
  }),
  sg = Object.freeze({
    __proto__: null,
    sha256: Jm,
    rpc: dm,
    publicKey: Qm,
    bytes: Kh,
    token: tg,
    features: Am,
    registry: og,
  });
function $r(t, e) {
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
            (r = (n = t.args) === null || n === void 0 ? void 0 : n.map((c) => c.name)) !== null &&
              r !== void 0
              ? r
              : []
          )
      );
    o = e.pop();
  }
  return [e, o];
}
let ag = class Wo {
  static build(e, n, r) {
    if (e.name === '_inner') throw new vt('the _inner name is reserved');
    const o = (...i) => {
      const [c, d] = $r(e, [...i]);
      iu(e.accounts, d.accounts), ug(e, ...i);
      const p = o.accounts(d.accounts);
      return (
        d.remainingAccounts !== void 0 && p.push(...d.remainingAccounts),
        cu('debug-logs') && console.log('Outgoing account metas:', p),
        new el({ keys: p, programId: r, data: n(e.name, yl(e, ...c)) })
      );
    };
    return (o.accounts = (i) => Wo.accountsArray(i, e.accounts, r, e.name)), o;
  }
  static accountsArray(e, n, r, o) {
    return e
      ? n
          .map((i) => {
            if (Sn(i)) {
              const _ = e[i.name];
              return Wo.accountsArray(_, i.accounts, r, o).flat();
            }
            let c;
            try {
              c = et(e[i.name]);
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
            const d = i.optional && c.equals(r),
              p = !!(i.writable && !d),
              a = !!(i.signer && !d);
            return { pubkey: c, isWritable: p, isSigner: a };
          })
          .flat()
      : [];
  }
};
function ug(t, ...e) {}
let cg = class {
    static build(e, n) {
      return (...o) => {
        var i, c, d;
        const [, p] = $r(e, [...o]),
          a = new Qc();
        if (p.preInstructions && p.instructions)
          throw new Error('instructions is deprecated, use preInstructions');
        return (
          (i = p.preInstructions) === null || i === void 0 || i.forEach((_) => a.add(_)),
          (c = p.instructions) === null || c === void 0 || c.forEach((_) => a.add(_)),
          a.add(n(...o)),
          (d = p.postInstructions) === null || d === void 0 || d.forEach((_) => a.add(_)),
          a
        );
      };
    }
  },
  lg = class {
    static build(e, n, r, o) {
      return async (...c) => {
        var d;
        const p = n(...c),
          [, a] = $r(e, [...c]);
        if (o.sendAndConfirm === void 0)
          throw new Error("This function requires 'Provider.sendAndConfirm' to be implemented.");
        try {
          return await o.sendAndConfirm(
            p,
            (d = a.signers) !== null && d !== void 0 ? d : [],
            a.options
          );
        } catch (_) {
          throw lu(_, r);
        }
      };
    }
  },
  dg = class {
    static build(e, n, r, o) {
      var i;
      return ((i = e.accounts) !== null && i !== void 0 ? i : []).reduce(
        (c, d) => ((c[d.name] = new pf(e, d, r, o, n)), c),
        {}
      );
    }
  },
  pf = class {
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
        (this._provider = o != null ? o : br()),
        (this._coder = i != null ? i : new du(e)),
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
        await uu(
          this._provider.connection,
          e.map((o) => et(o)),
          n
        )
      ).map((o) => {
        if (o == null) return null;
        const { account: i, context: c } = o;
        return { data: this._coder.accounts.decode(this._idlAccount.name, i.data), context: c };
      });
    }
    async all(e) {
      const n = this.coder.accounts.memcmp(
          this._idlAccount.name,
          e instanceof ie.Buffer ? e : void 0
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
        ).map(({ pubkey: i, account: c }) => ({
          publicKey: i,
          account: this._coder.accounts.decode(this._idlAccount.name, c.data),
        }))
      );
    }
    subscribe(e, n) {
      const r = Qn.get(e.toString());
      if (r) return r.ee;
      const o = new zp();
      e = et(e);
      const i = this._provider.connection.onAccountChange(
        e,
        (c) => {
          const d = this._coder.accounts.decode(this._idlAccount.name, c.data);
          o.emit('change', d);
        },
        n
      );
      return Qn.set(e.toString(), { ee: o, listener: i }), o;
    }
    async unsubscribe(e) {
      let n = Qn.get(e.toString());
      if (!n) {
        console.warn('Address is not subscribed');
        return;
      }
      Qn &&
        (await this._provider.connection
          .removeAccountChangeListener(n.listener)
          .then(() => {
            Qn.delete(e.toString());
          })
          .catch(console.error));
    }
    async createInstruction(e, n) {
      const r = this.size;
      if (this._provider.publicKey === void 0)
        throw new Error(
          "This function requires the Provider interface implementor to have a 'publicKey' field."
        );
      return Yp.createAccount({
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
      return await this._provider.connection.getAccountInfo(et(e), n);
    }
    async getAccountInfoAndContext(e, n) {
      return await this._provider.connection.getAccountInfoAndContext(et(e), n);
    }
  };
const Qn = new Map(),
  qo = 'Program log: ',
  _f = 'Program data: ',
  fg = qo.length,
  pg = _f.length;
let hf = class {
    constructor(e, n, r) {
      (this._programId = e),
        (this._provider = n),
        (this._eventParser = new fu(e, r)),
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
            (i, c) => {
              if (!i.err)
                for (const d of this._eventParser.parseLogs(i.logs)) {
                  const p = this._eventListeners.get(d.name);
                  p &&
                    p.forEach((a) => {
                      const _ = this._eventCallbacks.get(a);
                      if (_) {
                        const [, A] = _;
                        A(d.data, c.slot, i.signature);
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
  fu = class {
    constructor(e, n) {
      (this.coder = n), (this.programId = e);
    }
    *parseLogs(e, n = !1) {
      const r = new hg(e),
        o = new _g();
      let i = r.next();
      for (; i !== null; ) {
        let [c, d, p] = this.handleLog(o, i, n);
        c && (yield c), d && o.push(d), p && o.pop(), (i = r.next());
      }
    }
    handleLog(e, n, r) {
      return e.stack.length > 0 && e.program() === this.programId.toString()
        ? this.handleProgramLog(n, r)
        : [null, ...this.handleSystemLog(n)];
    }
    handleProgramLog(e, n) {
      if (e.startsWith(qo) || e.startsWith(_f)) {
        const r = e.startsWith(qo) ? e.slice(fg) : e.slice(pg),
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
  _g = class {
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
  hg = class {
    constructor(e) {
      this.logs = e;
    }
    next() {
      if (this.logs.length === 0) return null;
      let e = this.logs[0];
      return (this.logs = this.logs.slice(1)), e;
    }
  },
  mg = class {
    static build(e, n, r, o, i, c, d) {
      return async (...a) => {
        var _;
        const A = n(...a),
          [, h] = $r(e, [...a]);
        let m;
        if (o.simulate === void 0)
          throw new Error("This function requires 'Provider.simulate' to be implemented.");
        try {
          m = await o.simulate(
            A,
            h.signers,
            (_ = h.options) === null || _ === void 0 ? void 0 : _.commitment
          );
        } catch (w) {
          throw lu(w, r);
        }
        if (m === void 0) throw new Error('Unable to simulate transaction');
        const g = m.logs;
        if (!g) throw new Error('Simulated logs not found');
        const R = [];
        if (d.events) {
          let w = new fu(c, i);
          for (const N of w.parseLogs(g)) R.push(N);
        }
        return { events: R, raw: g };
      };
    }
  };
function mo(t) {
  return new mf(
    Lr(8),
    (e) => Ag.fromBuffer(e),
    (e) => e.toBuffer(),
    t
  );
}
function ri(t) {
  return new mf(
    Lr(32),
    (e) => new Ke(e),
    (e) => e.toBuffer(),
    t
  );
}
function go(t, e) {
  return new gg(t, e);
}
let mf = class extends Ti {
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
  gg = class extends Ti {
    constructor(e, n) {
      super(-1, n), (this.layout = e), (this.discriminator = Mt());
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
  Ag = class gf extends Vt {
    toBuffer() {
      const e = super.toArray().reverse(),
        n = ie.Buffer.from(e);
      if (n.length === 8) return n;
      if (n.length >= 8) throw new Error('u64 too large');
      const r = ie.Buffer.alloc(8);
      return n.copy(r), r;
    }
    static fromBuffer(e) {
      if (e.length !== 8) throw new Error('Invalid buffer length: '.concat(e.length));
      return new gf(
        [...e]
          .reverse()
          .map((n) => '00'.concat(n.toString(16)).slice(-2))
          .join(''),
        16
      );
    }
  };
const Og = Le([
  ri('mint'),
  ri('owner'),
  mo('amount'),
  go(ri(), 'delegate'),
  ((t) => {
    const e = af(Cm('discriminator'), null, t);
    return (
      e.addVariant(0, Le([]), 'uninitialized'),
      e.addVariant(1, Le([]), 'initialized'),
      e.addVariant(2, Le([]), 'frozen'),
      e
    );
  })('state'),
  go(mo(), 'isNative'),
  mo('delegatedAmount'),
  go(ri(), 'closeAuthority'),
]);
function Rg(t) {
  return Og.decode(t);
}
class yg {
  constructor(e, n, r, o, i, c, d, p) {
    (this._args = e),
      (this._accounts = n),
      (this._provider = r),
      (this._programId = o),
      (this._idlIx = i),
      (this._idlTypes = d),
      (this._customResolver = p),
      (this._accountStore = new Tg(r, c, o));
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
      var c;
      i === e.length - 1 && (r[o] = n),
        (r[o] = (c = r[o]) !== null && c !== void 0 ? c : {}),
        (r = r[o]);
    });
  }
  resolveOptionalsHelper(e, n) {
    const r = {};
    for (const o of n) {
      const i = o.name,
        c = e[i];
      c !== void 0 &&
        (Of(c)
          ? Sn(o)
            ? (r[i] = this.resolveOptionalsHelper(c, o.accounts))
            : (r[i] = Rf(c))
          : c !== null
            ? (r[i] = et(c))
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
      Sn(o) && this.resolveEventCpi(o.accounts, [...n, o.name]);
      const i = +r + 1;
      if (i === e.length) return;
      const c = e[r].name,
        d = e[i].name;
      if (c === 'eventAuthority' && d === 'program') {
        const p = [...n, c],
          a = [...n, d];
        this.get(p) ||
          this.set(
            p,
            Ke.findProgramAddressSync([ie.Buffer.from('__event_authority')], this._programId)[0]
          ),
          this.get(a) || this.set(a, this._programId);
        return;
      }
    }
  }
  resolveConst(e, n = []) {
    for (const r of e) {
      const o = r.name;
      if (Sn(r)) this.resolveConst(r.accounts, [...n, o]);
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
          i.address && this.set([...n, o], et(i.address));
        }
      }
    }
  }
  async resolvePdasAndRelations(e, n = []) {
    let r = 0;
    for (const o of e) {
      const i = o.name;
      if (Sn(o)) r += await this.resolvePdasAndRelations(o.accounts, [...n, i]);
      else {
        const c = o;
        if ((c.pda || c.relations) && !this.get([...n, i])) {
          r++;
          try {
            if (c.pda) {
              const d = await Promise.all(c.pda.seeds.map((_) => this.toBuffer(_, n)));
              if (d.some((_) => !_)) continue;
              const p = await this.parseProgramId(c, n),
                [a] = Ke.findProgramAddressSync(d, p);
              this.set([...n, i], a);
            }
          } catch (d) {}
          try {
            if (c.relations) {
              const d = this.get([...n, c.relations[0]]);
              if (d) {
                const p = await this._accountStore.fetchAccount({ publicKey: d });
                this.set([...n, i], p[i]);
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
    return new Ke(o);
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
    const i = r.reduce((d, p) => (d != null ? d : {})[p], this._args[o]);
    if (i === void 0) return;
    const c = this.getType(this._idlIx.args[o].type, r);
    return this.toBufferValue(c, i);
  }
  async toBufferAccount(e, n = []) {
    const [r, ...o] = e.path.split('.'),
      i = this.get([...n, r]);
    if (!i) return;
    if (!o.length) return this.toBufferValue('pubkey', i);
    if (!e.account)
      throw new Error('Seed account is required in order to resolve type: '.concat(e.path));
    let d = await this._accountStore.fetchAccount({ publicKey: i, name: e.account }),
      p = o;
    for (; p.length > 0; ) (d = d[p[0]]), (p = p.slice(1));
    if (d === void 0) return;
    const a = this.getType({ defined: { name: e.account } }, o);
    return this.toBufferValue(a, d);
  }
  toBufferValue(e, n) {
    switch (e) {
      case 'u8':
      case 'i8':
        return ie.Buffer.from([n]);
      case 'u16':
      case 'i16':
        return new Vt(n).toArrayLike(ie.Buffer, 'le', 2);
      case 'u32':
      case 'i32':
        return new Vt(n).toArrayLike(ie.Buffer, 'le', 4);
      case 'u64':
      case 'i64':
        return new Vt(n).toArrayLike(ie.Buffer, 'le', 8);
      case 'u128':
      case 'i128':
        return new Vt(n).toArrayLike(ie.Buffer, 'le', 16);
      case 'u256':
      case 'i256':
        return new Vt(n).toArrayLike(ie.Buffer, 'le', 32);
      case 'string':
        return ie.Buffer.from(n);
      case 'pubkey':
        return n.toBuffer();
      case 'bytes':
        return ie.Buffer.from(n);
      default:
        if (e != null && e.array) return ie.Buffer.from(n);
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
      const [c, ...d] = n,
        a = i.type.fields.find((_) => _.name === c);
      if (!a) throw new Error('Field not found: '.concat(c));
      return this.getType(a.type, d);
    }
    return e;
  }
}
class Tg {
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
        const i = Rg(o.data);
        this._cache.set(r, i);
      } else {
        const i = await this.getAccountsNs(o.owner);
        if (i) {
          const c = Object.values(i)[0];
          if (c) {
            const d = c.coder.accounts.decodeAny(o.data);
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
      const r = await gn.fetchIdl(e, this._provider);
      if (r) {
        const o = new gn(r, this._provider);
        this._idls[n] = o.account;
      }
    }
    return this._idls[n];
  }
}
class Af {
  static build(e, n, r, o, i, c, d, p, a, _, A) {
    return (...h) => new Eg(h, o, i, c, d, p, e, n, r, a, _, A);
  }
}
function Of(t) {
  return typeof t == 'object' && t !== null && !('_bn' in t);
}
function Rf(t, e) {
  const n = {};
  for (const r in t) {
    const o = t[r];
    if (o === null)
      throw new Error('Failed to resolve optionals due to IDL type mismatch with input accounts!');
    n[r] = Of(o) ? Rf(o) : et(o);
  }
  return n;
}
class Eg {
  constructor(e, n, r, o, i, c, d, p, a, _, A, h) {
    (this._args = e),
      (this._ixFn = n),
      (this._txFn = r),
      (this._rpcFn = o),
      (this._simulateFn = i),
      (this._viewFn = c),
      (this._accounts = {}),
      (this._remainingAccounts = []),
      (this._signers = []),
      (this._preInstructions = []),
      (this._postInstructions = []),
      (this._resolveAccounts = !0),
      (this._accountsResolver = new yg(e, this._accounts, d, p, a, _, A, h));
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
let Ig = class {
  static build(e, n, r, o) {
    const i = n.accounts.find((p) => p.writable),
      c = !!n.returns;
    return i || !c
      ? void 0
      : async (...p) => {
          let a = await r(...p);
          const _ = 'Program return: '.concat(e, ' ');
          let A = a.raw.find((R) => R.startsWith(_));
          if (!A) throw new Error('View expected return log');
          let h = ru(A.slice(_.length)),
            m = n.returns;
          if (!m) throw new Error('View expected return type');
          return mn.fieldLayout({ type: m }, o.types).decode(h);
        };
  }
};
class wg {
  static build(e, n, r, o, i) {
    const c = {},
      d = {},
      p = {},
      a = {},
      _ = {},
      A = {},
      h = Rl(e),
      m = e.accounts ? dg.build(e, n, r, o) : {};
    return (
      e.instructions.forEach((g) => {
        const R = ag.build(g, ($, T) => n.instruction.encode($, T), r),
          w = cg.build(g, R),
          N = lg.build(g, w, h, o),
          P = mg.build(g, w, h, o, n, r, e),
          I = Ig.build(r, g, P, e),
          B = Af.build(o, r, g, R, w, N, P, I, m, e.types || [], i == null ? void 0 : i(g)),
          F = g.name;
        (d[F] = R), (p[F] = w), (c[F] = N), (a[F] = P), (_[F] = B), I && (A[F] = I);
      }),
      [c, d, p, m, a, _, A]
    );
  }
}
class gn {
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
  constructor(e, n = br(), r, o) {
    const i = Yh(e);
    (this._idl = i),
      (this._rawIdl = e),
      (this._provider = n),
      (this._programId = et(e.address)),
      (this._coder = r != null ? r : new du(i)),
      (this._events = new hf(this._programId, n, this._coder));
    const [c, d, p, a, _, A, h] = wg.build(i, this._coder, this._programId, n, o);
    (this.rpc = c),
      (this.instruction = d),
      (this.transaction = p),
      (this.account = a),
      (this.simulate = _),
      (this.methods = A),
      (this.views = h);
  }
  static async at(e, n) {
    const r = et(e),
      o = await gn.fetchIdl(r, n);
    if (!o) throw new Error('IDL not found for program: '.concat(e.toString()));
    return new gn(o, n);
  }
  static async fetchIdl(e, n) {
    n = n != null ? n : br();
    const r = et(e),
      o = await Vh(r),
      i = await n.connection.getAccountInfo(o);
    if (!i) return null;
    let c = zh(i.data.slice(8));
    const d = Xp(c.data);
    return JSON.parse(Ol(d));
  }
  addEventListener(e, n) {
    return this._events.addEventListener(e, n);
  }
  async removeEventListener(e) {
    return await this._events.removeEventListener(e);
  }
}
new Ke('11111111111111111111111111111111');
function bg(t) {
  return new gn(yf, t, Ng());
}
function Ng() {
  return new cf(yf);
}
const yf = {
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
let Cg = class {
  static system(e) {
    return bg(e);
  }
};
const Sg = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        AccountClient: pf,
        AnchorError: kn,
        AnchorProvider: wr,
        BN: Vt,
        BorshAccountsCoder: Zd,
        BorshCoder: du,
        BorshEventCoder: Qd,
        BorshInstructionCoder: Jd,
        DISCRIMINATOR_SIZE: _n,
        EventManager: hf,
        EventParser: fu,
        IdlError: vt,
        LangErrorCode: oe,
        LangErrorMessage: Xd,
        MethodsBuilderFactory: Af,
        Native: Cg,
        Program: gn,
        ProgramError: Nr,
        ProgramErrorStack: jn,
        SystemCoder: cf,
        getProvider: br,
        parseIdlErrors: Rl,
        setProvider: pm,
        splitArgsAndCtx: $r,
        toInstruction: yl,
        translateAddress: et,
        translateError: lu,
        utils: sg,
        validateAccounts: iu,
        web3: Zp,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  pu = kr(Sg);
var Bt = {};
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
      t.SUPPORTED_ROUTER_TYPES =
      t.DEFAULT_TIMEOUT_MS =
      t.SLOTS_PER_MINUTE =
      t.COMPUTE_BUDGET_PROGRAM_ID =
      t.SYSTEM_PROGRAM_ID =
        void 0),
    (t.getRouterTypeID = n),
    (t.getAllRouterTypeIDsMap = r),
    (t.isValidRouterType = o);
  const e = _e;
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
    ]),
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
    });
  function n(c) {
    return t.ROUTER_TYPE_IDS[c];
  }
  function r() {
    return { mapping: t.ROUTER_TYPE_IDS };
  }
  function o(c) {
    return t.SUPPORTED_ROUTER_TYPES.includes(c);
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
  };
  (t.ROUTER_PROGRAM_MAP = Object.fromEntries(t.SUPPORTED_ROUTER_TYPES.map((c) => [c, i[c]]))),
    (t.TRITON_VOTE_ACCOUNT = new e.PublicKey('9GJmEHGom9eWo4np4L5vC6b6ri1Df2xN8KFoWixvD1Bs'));
})(Bt);
var Tc = {};
Object.defineProperty(Re, '__esModule', { value: !0 });
Re.getEnvOrDefault = Re.TokenInfo = void 0;
Re.removeComputeBudgetProgram = kg;
Re.parseKeypairFile = Dg;
Re.divCeil = Bg;
Re.amountToLamportsBN = xg;
Re.amountToLamportsDecimal = Ug;
Re.lamportsToAmountBN = Lg;
Re.lamportsToAmountDecimal = Tf;
Re.getMintDecimals = $g;
Re.printMultisigTx = Hg;
Re.printSimulateTx = jg;
Re.checkIfAccountExists = Gg;
Re.getAssociatedTokenAddress = Ef;
Re.createAssociatedTokenAccountIdempotentInstruction = If;
Re.createAtaIdempotent = Fg;
Re.getTokenAccountBalance = Kg;
Re.getSolBalanceInLamports = wf;
Re.getSolBalance = Vg;
Re.endpointFromCluster = Wg;
Re.u16ToBytes = qg;
Re.accountExist = zg;
Re.executeTransaction = Yg;
Re.buildAndSendTxnWithLogs = Xg;
Re.sleep = Yo;
Re.compareUint8Arrays = Zg;
Re.getMintsProgramOwner = Qg;
Re.withTimeout = tA;
const zo = _e,
  hi = Pr,
  Cr = zt,
  vg = Zc,
  _u = pu,
  Pg = Bt;
class Mg {
  constructor(e, n, r) {
    u(this, 'symbol');
    u(this, 'mint');
    u(this, 'mintDecimals');
    (this.symbol = e), (this.mint = n), (this.mintDecimals = r);
  }
}
Re.TokenInfo = Mg;
function kg(t) {
  return t.filter((n) => !n.programId.equals(Pg.COMPUTE_BUDGET_PROGRAM_ID));
}
function Dg(t) {
  return zo.Keypair.fromSecretKey(ie.Buffer.from(JSON.parse(sr.readFileSync(t))));
}
function Bg(t, e) {
  return t.add(e).sub(new _u.BN(1)).div(e);
}
function xg(t, e) {
  let n = Math.pow(10, e);
  return new _u.BN(t.mul(n).floor().toString());
}
function Ug(t, e) {
  let n = Math.pow(10, e);
  return t.mul(n);
}
function Lg(t, e) {
  let n = new _u.BN(Math.pow(10, e));
  return new hi.Decimal(t.div(n).toString());
}
function Tf(t, e) {
  let n = Math.pow(10, e);
  return t.div(n);
}
async function $g(t, e, n) {
  return (await (0, Cr.getMint)(t, e, void 0, n)).decimals;
}
async function Hg(t) {
  console.log((0, vg.binary_to_base58)(t.serializeMessage()));
}
async function jg(t, e) {
  console.log(
    'Tx in B64',
    'https://explorer.solana.com/tx/inspector?message='.concat(
      encodeURIComponent(e.serializeMessage().toString('base64'))
    )
  );
  let n = await t.simulateTransaction(e);
  console.log('Simulate Response', n), console.log('');
}
async function Gg(t, e) {
  return (await t.getAccountInfo(e)) != null;
}
function Ef(t, e, n) {
  return (0, Cr.getAssociatedTokenAddressSync)(e, t, !0, n, Cr.ASSOCIATED_TOKEN_PROGRAM_ID);
}
function If(t, e, n = t, r, o) {
  let i = o;
  i || (i = Ef(t, e, r));
  const c = (0, Cr.createAssociatedTokenAccountInstruction)(
    n,
    i,
    t,
    e,
    r,
    Cr.ASSOCIATED_TOKEN_PROGRAM_ID
  );
  return (c.data = ie.Buffer.from([1])), [i, c];
}
function Fg(t, e, n, r) {
  const [o, i] = If(t, n, e, r);
  return { ata: o, createAtaIx: i };
}
async function Kg(t, e) {
  const n = await t.getTokenAccountBalance(e);
  return new hi.Decimal(n.value.amount).div(hi.Decimal.pow(10, n.value.decimals));
}
async function wf(t, e) {
  var r;
  let n;
  for (; n === void 0; )
    n = (r = await t.connection.getAccountInfo(e)) == null ? void 0 : r.lamports;
  return n;
}
async function Vg(t, e) {
  const n = new hi.Decimal(await wf(t, e));
  return Tf(n, 9);
}
function Wg(t) {
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
function qg(t) {
  const e = new ArrayBuffer(2);
  return new DataView(e).setUint16(0, t, !1), new Uint8Array(e);
}
async function zg(t, e) {
  const n = await t.getAccountInfo(e);
  return !(n === null || n.data.length === 0);
}
async function Yg(t, e, n, r = []) {
  const o = new zo.Transaction(),
    { blockhash: i } = await t.getLatestBlockhash();
  return (
    (o.recentBlockhash = i),
    (o.feePayer = n.publicKey),
    o.add(...e),
    await (0, zo.sendAndConfirmTransaction)(t, o, [n, ...r], { commitment: 'confirmed' })
  );
}
async function Xg(t, e, n, r) {
  const { blockhash: o } = await t.getLatestBlockhash();
  (e.recentBlockhash = o), (e.feePayer = n.publicKey);
  try {
    const i = await t.sendTransaction(e, [n, ...r]);
    console.log('Transaction Hash:', i), await Yo(5e3);
    const c = await t.getTransaction(i, { commitment: 'confirmed' });
    console.log('Transaction Logs:\n', c.meta.logMessages);
  } catch (i) {
    console.log(i), await Yo(5e3);
    const c = i.toString().split(' failed ')[0].split('Transaction ')[1],
      d = await t.getTransaction(c, { commitment: 'confirmed' });
    console.log('Txn', d.meta.logMessages);
  }
}
function Yo(t) {
  return new Promise((e) => setTimeout(e, t));
}
const Jg = (t, e) => (t in Tc ? Tc[t] : e);
Re.getEnvOrDefault = Jg;
function Zg(t, e) {
  if (t.length !== e.length) return !1;
  for (let n = 0; n < t.length; n++) if (t[n] !== e[n]) return !1;
  return !0;
}
async function Qg(t, e) {
  const n = await t.getAccountInfo(e);
  if (!n) throw new Error('Mint not found');
  return n.owner;
}
function eA(t) {
  return new Promise((e, n) => {
    setTimeout(() => {
      n(new Error('Request timed out after '.concat(t, 'ms')));
    }, t);
  });
}
async function tA(t, e, n) {
  try {
    return await Promise.race([t, eA(e)]);
  } catch (r) {
    if (r instanceof Error && r.message.includes('timed out')) return n(), null;
    throw r;
  }
}
var bf = {},
  Nf = {},
  Bn = {},
  tt = {},
  nA = {},
  Ao;
Object.defineProperty(tt, '__esModule', { value: !0 });
tt.isVersionedTransaction = tt.chunks = tt.isBrowser = void 0;
tt.isBrowser =
  nA.ANCHOR_BROWSER ||
  (typeof window < 'u' &&
    !(!((Ao = window.process) === null || Ao === void 0) && Ao.hasOwnProperty('type')));
function rA(t, e) {
  return Array.apply(0, new Array(Math.ceil(t.length / e))).map((n, r) =>
    t.slice(r * e, (r + 1) * e)
  );
}
tt.chunks = rA;
const iA = (t) => 'version' in t;
tt.isVersionedTransaction = iA;
Object.defineProperty(Bn, '__esModule', { value: !0 });
const oA = Pe,
  sA = _e,
  Ec = tt;
class hu {
  constructor(e) {
    this.payer = e;
  }
  static local() {
    const e = nl;
    if (!e.env.ANCHOR_WALLET || e.env.ANCHOR_WALLET === '')
      throw new Error('expected environment variable `ANCHOR_WALLET` is not set.');
    const n = sA.Keypair.fromSecretKey(
      oA.Buffer.from(JSON.parse(sr.readFileSync(e.env.ANCHOR_WALLET, { encoding: 'utf-8' })))
    );
    return new hu(n);
  }
  async signTransaction(e) {
    return (0, Ec.isVersionedTransaction)(e) ? e.sign([this.payer]) : e.partialSign(this.payer), e;
  }
  async signAllTransactions(e) {
    return e.map(
      (n) => (
        (0, Ec.isVersionedTransaction)(n) ? n.sign([this.payer]) : n.partialSign(this.payer), n
      )
    );
  }
  get publicKey() {
    return this.payer.publicKey;
  }
}
Bn.default = hu;
var Ct = {},
  lt = {},
  xn = {};
Object.defineProperty(xn, '__esModule', { value: !0 });
xn.decode = xn.encode = void 0;
const Ic = Pe;
function aA(t) {
  return t.reduce((e, n) => e + n.toString(16).padStart(2, '0'), '0x');
}
xn.encode = aA;
function uA(t) {
  t.indexOf('0x') === 0 && (t = t.substr(2)), t.length % 2 === 1 && (t = '0' + t);
  let e = t.match(/.{2}/g);
  return e === null ? Ic.Buffer.from([]) : Ic.Buffer.from(e.map((n) => parseInt(n, 16)));
}
xn.decode = uA;
var Un = {};
Object.defineProperty(Un, '__esModule', { value: !0 });
Un.encode = Un.decode = void 0;
const Cf = tt;
function cA(t) {
  return (Cf.isBrowser ? new TextDecoder('utf-8') : new rl.TextDecoder('utf-8')).decode(t);
}
Un.decode = cA;
function lA(t) {
  return (Cf.isBrowser ? new TextEncoder() : new rl.TextEncoder('utf-8')).encode(t);
}
Un.encode = lA;
var Ln = {},
  dA =
    (b && b.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(Ln, '__esModule', { value: !0 });
Ln.decode = Ln.encode = void 0;
const Sf = dA(Mr);
function fA(t) {
  return Sf.default.encode(t);
}
Ln.encode = fA;
function pA(t) {
  return Sf.default.decode(t);
}
Ln.decode = pA;
var Xt = {};
Object.defineProperty(Xt, '__esModule', { value: !0 });
Xt.decode = Xt.encode = void 0;
const _A = Pe;
function hA(t) {
  return t.toString('base64');
}
Xt.encode = hA;
function mA(t) {
  return _A.Buffer.from(t, 'base64');
}
Xt.decode = mA;
var gA =
    (b && b.__createBinding) ||
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
  AA =
    (b && b.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  wi =
    (b && b.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null)
        for (var n in t)
          n !== 'default' && Object.prototype.hasOwnProperty.call(t, n) && gA(e, t, n);
      return AA(e, t), e;
    };
Object.defineProperty(lt, '__esModule', { value: !0 });
lt.base64 = lt.bs58 = lt.utf8 = lt.hex = void 0;
lt.hex = wi(xn);
lt.utf8 = wi(Un);
lt.bs58 = wi(Ln);
lt.base64 = wi(Xt);
var mt = {},
  We = {},
  Ue = {},
  OA =
    (b && b.__createBinding) ||
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
  RA =
    (b && b.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  yA =
    (b && b.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null)
        for (var n in t)
          n !== 'default' && Object.prototype.hasOwnProperty.call(t, n) && OA(e, t, n);
      return RA(e, t), e;
    },
  TA =
    (b && b.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(Ue, '__esModule', { value: !0 });
Ue.handleDefinedFields =
  Ue.convertIdlToCamelCase =
  Ue.encodeIdlAccount =
  Ue.decodeIdlAccount =
  Ue.seed =
  Ue.idlAddress =
  Ue.isCompositeAccounts =
    void 0;
const EA = TA(Qp),
  IA = Pe,
  wc = _e,
  Oo = yA(me);
function wA(t) {
  return 'accounts' in t;
}
Ue.isCompositeAccounts = wA;
async function bA(t) {
  const e = (await wc.PublicKey.findProgramAddress([], t))[0];
  return await wc.PublicKey.createWithSeed(e, vf(), t);
}
Ue.idlAddress = bA;
function vf() {
  return 'anchor:idl';
}
Ue.seed = vf;
const Pf = Oo.struct([Oo.publicKey('authority'), Oo.vecU8('data')]);
function NA(t) {
  return Pf.decode(t);
}
Ue.decodeIdlAccount = NA;
function CA(t) {
  const e = IA.Buffer.alloc(1e3),
    n = Pf.encode(t, e);
  return e.slice(0, n);
}
Ue.encodeIdlAccount = CA;
function SA(t) {
  const e = ['name', 'path', 'account', 'relations', 'generic'],
    n = (i) => i.split('.').map(EA.default).join('.'),
    r = (i) => {
      for (const c in i) {
        const d = i[c];
        e.includes(c) ? (i[c] = Array.isArray(d) ? d.map(n) : n(d)) : typeof d == 'object' && r(d);
      }
    },
    o = structuredClone(t);
  return r(o), o;
}
Ue.convertIdlToCamelCase = SA;
function vA(t, e, n, r) {
  return t != null && t.length ? (t[0].name ? n(t) : r(t)) : e();
}
Ue.handleDefinedFields = vA;
Object.defineProperty(We, '__esModule', { value: !0 });
We.translateAddress = We.validateAccounts = We.toInstruction = We.parseIdlErrors = void 0;
const bc = _e,
  PA = Ue;
function MA(t) {
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
We.parseIdlErrors = MA;
function kA(t, ...e) {
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
We.toInstruction = kA;
function Mf(t, e = {}) {
  t.forEach((n) => {
    if ((0, PA.isCompositeAccounts)(n)) Mf(n.accounts, e[n.name]);
    else if (!e[n.name]) throw new Error('Account `'.concat(n.name, '` not provided.'));
  });
}
We.validateAccounts = Mf;
function DA(t) {
  return t instanceof bc.PublicKey ? t : new bc.PublicKey(t);
}
We.translateAddress = DA;
var Nc;
function mu() {
  if (Nc) return mt;
  (Nc = 1),
    Object.defineProperty(mt, '__esModule', { value: !0 }),
    (mt.simulateTransaction =
      mt.getMultipleAccountsAndContext =
      mt.getMultipleAccounts =
      mt.invoke =
        void 0);
  const t = _e,
    e = tt,
    n = We,
    r = bi(),
    o = e_;
  async function i(w, N, P, I) {
    (w = (0, n.translateAddress)(w)), I || (I = (0, r.getProvider)());
    const B = new t.Transaction();
    if (
      (B.add(new t.TransactionInstruction({ programId: w, keys: N != null ? N : [], data: P })),
      I.sendAndConfirm === void 0)
    )
      throw new Error("This function requires 'Provider.sendAndConfirm' to be implemented.");
    return await I.sendAndConfirm(B, []);
  }
  mt.invoke = i;
  const c = 99;
  async function d(w, N, P) {
    return (await p(w, N, P)).map((B) =>
      B ? { publicKey: B.publicKey, account: B.account } : null
    );
  }
  mt.getMultipleAccounts = d;
  async function p(w, N, P) {
    if (N.length <= c) return await a(w, N, P);
    {
      const I = (0, e.chunks)(N, c);
      return (await Promise.all(I.map((F) => a(w, F, P)))).flat();
    }
  }
  mt.getMultipleAccountsAndContext = p;
  async function a(w, N, P) {
    const I = P != null ? P : w.commitment,
      { value: B, context: F } = await w.getMultipleAccountsInfoAndContext(N, I);
    return B.map((T, y) => (T === null ? null : { publicKey: N[y], account: T, context: F }));
  }
  async function _(w, N, P, I, B) {
    var F;
    P && P.length > 0 && N.sign(...P);
    const $ = N._compile(),
      T = $.serialize(),
      v = N._serialize(T).toString('base64'),
      M = { encoding: 'base64', commitment: I != null ? I : w.commitment };
    if (B) {
      const S = (Array.isArray(B) ? B : $.nonProgramIds()).map((k) => k.toBase58());
      M.accounts = { encoding: 'base64', addresses: S };
    }
    P && P.length > 0 && (M.sigVerify = !0);
    const G = [v, M],
      J = await w._rpcRequest('simulateTransaction', G),
      z = (0, o.create)(J, R);
    if ('error' in z) {
      let S;
      if (
        'data' in z.error &&
        ((S = (F = z.error.data) === null || F === void 0 ? void 0 : F.logs), S && Array.isArray(S))
      ) {
        const k = '\n    ',
          q = k + S.join(k);
        console.error(z.error.message, q);
      }
      throw new t.SendTransactionError('failed to simulate transaction: ' + z.error.message, S);
    }
    return z.result;
  }
  mt.simulateTransaction = _;
  function A(w) {
    return (0, o.coerce)(m(w), h, (N) =>
      'error' in N ? N : st(xe({}, N), { result: (0, o.create)(N.result, w) })
    );
  }
  const h = m((0, o.unknown)());
  function m(w) {
    return (0, o.union)([
      (0, o.type)({ jsonrpc: (0, o.literal)('2.0'), id: (0, o.string)(), result: w }),
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
  function g(w) {
    return A((0, o.type)({ context: (0, o.type)({ slot: (0, o.number)() }), value: w }));
  }
  const R = g(
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
  return mt;
}
var Cc;
function bi() {
  if (Cc) return Ct;
  (Cc = 1),
    Object.defineProperty(Ct, '__esModule', { value: !0 }),
    (Ct.getProvider = Ct.setProvider = Ct.AnchorProvider = void 0);
  const t = _e,
    e = lt,
    n = tt,
    r = mu();
  class o {
    constructor(h, m, g = o.defaultOptions()) {
      (this.connection = h),
        (this.wallet = m),
        (this.opts = g),
        (this.publicKey = m == null ? void 0 : m.publicKey);
    }
    static defaultOptions() {
      return { preflightCommitment: 'processed', commitment: 'processed' };
    }
    static local(h, m = o.defaultOptions()) {
      if (n.isBrowser) throw new Error('Provider local is not available on browser.');
      const g = new t.Connection(h != null ? h : 'http://127.0.0.1:8899', m.preflightCommitment),
        w = Bn.default.local();
      return new o(g, w, m);
    }
    static env() {
      if (n.isBrowser) throw new Error('Provider env is not available on browser.');
      const m = nl.env.ANCHOR_PROVIDER_URL;
      if (m === void 0) throw new Error('ANCHOR_PROVIDER_URL is not defined');
      const g = o.defaultOptions(),
        R = new t.Connection(m, g.commitment),
        N = Bn.default.local();
      return new o(R, N, g);
    }
    async sendAndConfirm(h, m, g) {
      var R, w, N, P;
      if ((g === void 0 && (g = this.opts), (0, n.isVersionedTransaction)(h))) m && h.sign(m);
      else if (
        ((h.feePayer = (R = h.feePayer) !== null && R !== void 0 ? R : this.wallet.publicKey),
        (h.recentBlockhash = (
          await this.connection.getLatestBlockhash(g.preflightCommitment)
        ).blockhash),
        m)
      )
        for (const B of m) h.partialSign(B);
      h = await this.wallet.signTransaction(h);
      const I = h.serialize();
      try {
        return await c(this.connection, I, g);
      } catch (B) {
        if (B instanceof d) {
          const F = e.bs58.encode(
              (0, n.isVersionedTransaction)(h)
                ? ((w = h.signatures) === null || w === void 0 ? void 0 : w[0]) || new Uint8Array()
                : (N = h.signature) !== null && N !== void 0
                  ? N
                  : new Uint8Array()
            ),
            $ = (0, n.isVersionedTransaction)(h) ? 0 : void 0,
            T = await this.connection.getTransaction(F, {
              commitment: 'confirmed',
              maxSupportedTransactionVersion: $,
            });
          if (T) {
            const y = (P = T.meta) === null || P === void 0 ? void 0 : P.logMessages;
            throw y ? new t.SendTransactionError(B.message, y) : B;
          } else throw B;
        } else throw B;
      }
    }
    async sendAll(h, m) {
      var g, R, w;
      m === void 0 && (m = this.opts);
      const N = (await this.connection.getLatestBlockhash(m.preflightCommitment)).blockhash;
      let P = h.map((F) => {
        var $, T;
        if ((0, n.isVersionedTransaction)(F.tx)) {
          let y = F.tx;
          return F.signers && y.sign(F.signers), y;
        } else {
          let y = F.tx,
            v = ($ = F.signers) !== null && $ !== void 0 ? $ : [];
          return (
            (y.feePayer = (T = y.feePayer) !== null && T !== void 0 ? T : this.wallet.publicKey),
            (y.recentBlockhash = N),
            v.forEach((M) => {
              y.partialSign(M);
            }),
            y
          );
        }
      });
      const I = await this.wallet.signAllTransactions(P),
        B = [];
      for (let F = 0; F < P.length; F += 1) {
        const $ = I[F],
          T = $.serialize();
        try {
          B.push(await c(this.connection, T, m));
        } catch (y) {
          if (y instanceof d) {
            const v = e.bs58.encode(
                (0, n.isVersionedTransaction)($)
                  ? ((g = $.signatures) === null || g === void 0 ? void 0 : g[0]) ||
                      new Uint8Array()
                  : (R = $.signature) !== null && R !== void 0
                    ? R
                    : new Uint8Array()
              ),
              M = (0, n.isVersionedTransaction)($) ? 0 : void 0,
              G = await this.connection.getTransaction(v, {
                commitment: 'confirmed',
                maxSupportedTransactionVersion: M,
              });
            if (G) {
              const J = (w = G.meta) === null || w === void 0 ? void 0 : w.logMessages;
              throw J ? new t.SendTransactionError(y.message, J) : y;
            } else throw y;
          } else throw y;
        }
      }
      return B;
    }
    async simulate(h, m, g, R) {
      let w = (await this.connection.getLatestBlockhash(g != null ? g : this.connection.commitment))
          .blockhash,
        N;
      if (
        ((0, n.isVersionedTransaction)(h)
          ? (m && m.length > 0 && (h.sign(m), (h = await this.wallet.signTransaction(h))),
            (N = await this.connection.simulateTransaction(h, { commitment: g })))
          : ((h.feePayer = h.feePayer || this.wallet.publicKey),
            (h.recentBlockhash = w),
            m && m.length > 0 && (h = await this.wallet.signTransaction(h)),
            (N = await (0, r.simulateTransaction)(this.connection, h, m, g, R))),
        N.value.err)
      )
        throw new i(N.value);
      return N.value;
    }
  }
  Ct.AnchorProvider = o;
  class i extends Error {
    constructor(h, m) {
      super(m), (this.simulationResponse = h);
    }
  }
  async function c(A, h, m) {
    const g = m && {
        skipPreflight: m.skipPreflight,
        preflightCommitment: m.preflightCommitment || m.commitment,
      },
      R = await A.sendRawTransaction(h, g),
      w = (await A.confirmTransaction(R, m && m.commitment)).value;
    if (w.err)
      throw new d('Raw transaction '.concat(R, ' failed (').concat(JSON.stringify(w), ')'));
    return R;
  }
  class d extends Error {
    constructor(h) {
      super(h);
    }
  }
  function p(A) {
    _ = A;
  }
  Ct.setProvider = p;
  function a() {
    return _ === null ? o.local() : _;
  }
  Ct.getProvider = a;
  let _ = null;
  return Ct;
}
var Gn = {},
  U = {};
Object.defineProperty(U, '__esModule', { value: !0 });
U.ANCHOR_ERROR__REQUIRE_EQ_VIOLATED =
  U.ANCHOR_ERROR__REQUIRE_VIOLATED =
  U.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION_PROGRAM_ID =
  U.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION_AUTHORITY =
  U.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION =
  U.ANCHOR_ERROR__CONSTRAINT_MINT_PERMANENT_DELEGATE_EXTENSION_DELEGATE =
  U.ANCHOR_ERROR__CONSTRAINT_MINT_PERMANENT_DELEGATE_EXTENSION =
  U.ANCHOR_ERROR__CONSTRAINT_MINT_CLOSE_AUTHORITY_EXTENSION_AUTHORITY =
  U.ANCHOR_ERROR__CONSTRAINT_MINT_CLOSE_AUTHORITY_EXTENSION =
  U.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION_METADATA_ADDRESS =
  U.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION_AUTHORITY =
  U.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION =
  U.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION_MEMBER_ADDRESS =
  U.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION_AUTHORITY =
  U.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION =
  U.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION_GROUP_ADDRESS =
  U.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION_AUTHORITY =
  U.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION =
  U.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED_TOKEN_TOKEN_PROGRAM =
  U.ANCHOR_ERROR__CONSTRAINT_MINT_TOKEN_PROGRAM =
  U.ANCHOR_ERROR__CONSTRAINT_TOKEN_TOKEN_PROGRAM =
  U.ANCHOR_ERROR__CONSTRAINT_ACCOUNT_IS_NONE =
  U.ANCHOR_ERROR__CONSTRAINT_SPACE =
  U.ANCHOR_ERROR__CONSTRAINT_MINT_DECIMALS =
  U.ANCHOR_ERROR__CONSTRAINT_MINT_FREEZE_AUTHORITY =
  U.ANCHOR_ERROR__CONSTRAINT_MINT_MINT_AUTHORITY =
  U.ANCHOR_ERROR__CONSTRAINT_TOKEN_OWNER =
  U.ANCHOR_ERROR__CONSTRAINT_TOKEN_MINT =
  U.ANCHOR_ERROR__CONSTRAINT_ZERO =
  U.ANCHOR_ERROR__CONSTRAINT_ADDRESS =
  U.ANCHOR_ERROR__CONSTRAINT_CLOSE =
  U.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED_INIT =
  U.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED =
  U.ANCHOR_ERROR__CONSTRAINT_STATE =
  U.ANCHOR_ERROR__CONSTRAINT_EXECUTABLE =
  U.ANCHOR_ERROR__CONSTRAINT_SEEDS =
  U.ANCHOR_ERROR__CONSTRAINT_RENT_EXEMPT =
  U.ANCHOR_ERROR__CONSTRAINT_OWNER =
  U.ANCHOR_ERROR__CONSTRAINT_RAW =
  U.ANCHOR_ERROR__CONSTRAINT_SIGNER =
  U.ANCHOR_ERROR__CONSTRAINT_HAS_ONE =
  U.ANCHOR_ERROR__CONSTRAINT_MUT =
  U.ANCHOR_ERROR__EVENT_INSTRUCTION_STUB =
  U.ANCHOR_ERROR__IDL_ACCOUNT_NOT_EMPTY =
  U.ANCHOR_ERROR__IDL_INSTRUCTION_INVALID_PROGRAM =
  U.ANCHOR_ERROR__IDL_INSTRUCTION_STUB =
  U.ANCHOR_ERROR__INSTRUCTION_DID_NOT_SERIALIZE =
  U.ANCHOR_ERROR__INSTRUCTION_DID_NOT_DESERIALIZE =
  U.ANCHOR_ERROR__INSTRUCTION_FALLBACK_NOT_FOUND =
  U.ANCHOR_ERROR__INSTRUCTION_MISSING =
    void 0;
U.ANCHOR_ERROR__DEPRECATED =
  U.ANCHOR_ERROR__INVALID_NUMERIC_CONVERSION =
  U.ANCHOR_ERROR__TRYING_TO_INIT_PAYER_AS_PROGRAM_ACCOUNT =
  U.ANCHOR_ERROR__DECLARED_PROGRAM_ID_MISMATCH =
  U.ANCHOR_ERROR__ACCOUNT_DUPLICATE_REALLOCS =
  U.ANCHOR_ERROR__ACCOUNT_REALLOC_EXCEEDS_LIMIT =
  U.ANCHOR_ERROR__ACCOUNT_SYSVAR_MISMATCH =
  U.ANCHOR_ERROR__ACCOUNT_NOT_ASSOCIATED_TOKEN_ACCOUNT =
  U.ANCHOR_ERROR__ACCOUNT_NOT_PROGRAM_DATA =
  U.ANCHOR_ERROR__ACCOUNT_NOT_INITIALIZED =
  U.ANCHOR_ERROR__ACCOUNT_NOT_SYSTEM_OWNED =
  U.ANCHOR_ERROR__ACCOUNT_NOT_SIGNER =
  U.ANCHOR_ERROR__INVALID_PROGRAM_EXECUTABLE =
  U.ANCHOR_ERROR__INVALID_PROGRAM_ID =
  U.ANCHOR_ERROR__ACCOUNT_OWNED_BY_WRONG_PROGRAM =
  U.ANCHOR_ERROR__ACCOUNT_NOT_MUTABLE =
  U.ANCHOR_ERROR__ACCOUNT_NOT_ENOUGH_KEYS =
  U.ANCHOR_ERROR__ACCOUNT_DID_NOT_SERIALIZE =
  U.ANCHOR_ERROR__ACCOUNT_DID_NOT_DESERIALIZE =
  U.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_MISMATCH =
  U.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_NOT_FOUND =
  U.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_ALREADY_SET =
  U.ANCHOR_ERROR__REQUIRE_GTE_VIOLATED =
  U.ANCHOR_ERROR__REQUIRE_GT_VIOLATED =
  U.ANCHOR_ERROR__REQUIRE_KEYS_NEQ_VIOLATED =
  U.ANCHOR_ERROR__REQUIRE_NEQ_VIOLATED =
  U.ANCHOR_ERROR__REQUIRE_KEYS_EQ_VIOLATED =
    void 0;
U.ANCHOR_ERROR__INSTRUCTION_MISSING = 100;
U.ANCHOR_ERROR__INSTRUCTION_FALLBACK_NOT_FOUND = 101;
U.ANCHOR_ERROR__INSTRUCTION_DID_NOT_DESERIALIZE = 102;
U.ANCHOR_ERROR__INSTRUCTION_DID_NOT_SERIALIZE = 103;
U.ANCHOR_ERROR__IDL_INSTRUCTION_STUB = 1e3;
U.ANCHOR_ERROR__IDL_INSTRUCTION_INVALID_PROGRAM = 1001;
U.ANCHOR_ERROR__IDL_ACCOUNT_NOT_EMPTY = 1002;
U.ANCHOR_ERROR__EVENT_INSTRUCTION_STUB = 1500;
U.ANCHOR_ERROR__CONSTRAINT_MUT = 2e3;
U.ANCHOR_ERROR__CONSTRAINT_HAS_ONE = 2001;
U.ANCHOR_ERROR__CONSTRAINT_SIGNER = 2002;
U.ANCHOR_ERROR__CONSTRAINT_RAW = 2003;
U.ANCHOR_ERROR__CONSTRAINT_OWNER = 2004;
U.ANCHOR_ERROR__CONSTRAINT_RENT_EXEMPT = 2005;
U.ANCHOR_ERROR__CONSTRAINT_SEEDS = 2006;
U.ANCHOR_ERROR__CONSTRAINT_EXECUTABLE = 2007;
U.ANCHOR_ERROR__CONSTRAINT_STATE = 2008;
U.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED = 2009;
U.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED_INIT = 2010;
U.ANCHOR_ERROR__CONSTRAINT_CLOSE = 2011;
U.ANCHOR_ERROR__CONSTRAINT_ADDRESS = 2012;
U.ANCHOR_ERROR__CONSTRAINT_ZERO = 2013;
U.ANCHOR_ERROR__CONSTRAINT_TOKEN_MINT = 2014;
U.ANCHOR_ERROR__CONSTRAINT_TOKEN_OWNER = 2015;
U.ANCHOR_ERROR__CONSTRAINT_MINT_MINT_AUTHORITY = 2016;
U.ANCHOR_ERROR__CONSTRAINT_MINT_FREEZE_AUTHORITY = 2017;
U.ANCHOR_ERROR__CONSTRAINT_MINT_DECIMALS = 2018;
U.ANCHOR_ERROR__CONSTRAINT_SPACE = 2019;
U.ANCHOR_ERROR__CONSTRAINT_ACCOUNT_IS_NONE = 2020;
U.ANCHOR_ERROR__CONSTRAINT_TOKEN_TOKEN_PROGRAM = 2021;
U.ANCHOR_ERROR__CONSTRAINT_MINT_TOKEN_PROGRAM = 2022;
U.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED_TOKEN_TOKEN_PROGRAM = 2023;
U.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION = 2024;
U.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION_AUTHORITY = 2025;
U.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION_GROUP_ADDRESS = 2026;
U.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION = 2027;
U.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION_AUTHORITY = 2028;
U.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION_MEMBER_ADDRESS = 2029;
U.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION = 2030;
U.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION_AUTHORITY = 2031;
U.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION_METADATA_ADDRESS = 2032;
U.ANCHOR_ERROR__CONSTRAINT_MINT_CLOSE_AUTHORITY_EXTENSION = 2033;
U.ANCHOR_ERROR__CONSTRAINT_MINT_CLOSE_AUTHORITY_EXTENSION_AUTHORITY = 2034;
U.ANCHOR_ERROR__CONSTRAINT_MINT_PERMANENT_DELEGATE_EXTENSION = 2035;
U.ANCHOR_ERROR__CONSTRAINT_MINT_PERMANENT_DELEGATE_EXTENSION_DELEGATE = 2036;
U.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION = 2037;
U.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION_AUTHORITY = 2038;
U.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION_PROGRAM_ID = 2039;
U.ANCHOR_ERROR__REQUIRE_VIOLATED = 2500;
U.ANCHOR_ERROR__REQUIRE_EQ_VIOLATED = 2501;
U.ANCHOR_ERROR__REQUIRE_KEYS_EQ_VIOLATED = 2502;
U.ANCHOR_ERROR__REQUIRE_NEQ_VIOLATED = 2503;
U.ANCHOR_ERROR__REQUIRE_KEYS_NEQ_VIOLATED = 2504;
U.ANCHOR_ERROR__REQUIRE_GT_VIOLATED = 2505;
U.ANCHOR_ERROR__REQUIRE_GTE_VIOLATED = 2506;
U.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_ALREADY_SET = 3e3;
U.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_NOT_FOUND = 3001;
U.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_MISMATCH = 3002;
U.ANCHOR_ERROR__ACCOUNT_DID_NOT_DESERIALIZE = 3003;
U.ANCHOR_ERROR__ACCOUNT_DID_NOT_SERIALIZE = 3004;
U.ANCHOR_ERROR__ACCOUNT_NOT_ENOUGH_KEYS = 3005;
U.ANCHOR_ERROR__ACCOUNT_NOT_MUTABLE = 3006;
U.ANCHOR_ERROR__ACCOUNT_OWNED_BY_WRONG_PROGRAM = 3007;
U.ANCHOR_ERROR__INVALID_PROGRAM_ID = 3008;
U.ANCHOR_ERROR__INVALID_PROGRAM_EXECUTABLE = 3009;
U.ANCHOR_ERROR__ACCOUNT_NOT_SIGNER = 3010;
U.ANCHOR_ERROR__ACCOUNT_NOT_SYSTEM_OWNED = 3011;
U.ANCHOR_ERROR__ACCOUNT_NOT_INITIALIZED = 3012;
U.ANCHOR_ERROR__ACCOUNT_NOT_PROGRAM_DATA = 3013;
U.ANCHOR_ERROR__ACCOUNT_NOT_ASSOCIATED_TOKEN_ACCOUNT = 3014;
U.ANCHOR_ERROR__ACCOUNT_SYSVAR_MISMATCH = 3015;
U.ANCHOR_ERROR__ACCOUNT_REALLOC_EXCEEDS_LIMIT = 3016;
U.ANCHOR_ERROR__ACCOUNT_DUPLICATE_REALLOCS = 3017;
U.ANCHOR_ERROR__DECLARED_PROGRAM_ID_MISMATCH = 4100;
U.ANCHOR_ERROR__TRYING_TO_INIT_PAYER_AS_PROGRAM_ACCOUNT = 4101;
U.ANCHOR_ERROR__INVALID_NUMERIC_CONVERSION = 4102;
U.ANCHOR_ERROR__DEPRECATED = 5e3;
var Jt = {};
Object.defineProperty(Jt, '__esModule', { value: !0 });
Jt.isSet = Jt.set = void 0;
const BA = new Set(['debug-logs']),
  kf = new Map();
function xA(t) {
  if (!BA.has(t)) throw new Error('Invalid feature');
  kf.set(t, !0);
}
Jt.set = xA;
function UA(t) {
  return kf.get(t) !== void 0;
}
Jt.isSet = UA;
(function (t) {
  var e =
      (b && b.__createBinding) ||
      (Object.create
        ? function (h, m, g, R) {
            R === void 0 && (R = g);
            var w = Object.getOwnPropertyDescriptor(m, g);
            (!w || ('get' in w ? !m.__esModule : w.writable || w.configurable)) &&
              (w = {
                enumerable: !0,
                get: function () {
                  return m[g];
                },
              }),
              Object.defineProperty(h, R, w);
          }
        : function (h, m, g, R) {
            R === void 0 && (R = g), (h[R] = m[g]);
          }),
    n =
      (b && b.__setModuleDefault) ||
      (Object.create
        ? function (h, m) {
            Object.defineProperty(h, 'default', { enumerable: !0, value: m });
          }
        : function (h, m) {
            h.default = m;
          }),
    r =
      (b && b.__importStar) ||
      function (h) {
        if (h && h.__esModule) return h;
        var m = {};
        if (h != null)
          for (var g in h)
            g !== 'default' && Object.prototype.hasOwnProperty.call(h, g) && e(m, h, g);
        return n(m, h), m;
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
  const o = _e,
    i = r(U),
    c = r(Jt);
  class d extends Error {
    constructor(m) {
      super(m), (this.name = 'IdlError');
    }
  }
  t.IdlError = d;
  class p {
    constructor(m) {
      this.stack = m;
    }
    static parse(m) {
      var g;
      const R = /^Program (\w*) invoke/,
        w = /^Program \w* success/,
        N = [];
      for (let P = 0; P < m.length; P++) {
        if (w.exec(m[P])) {
          N.pop();
          continue;
        }
        const I = (g = R.exec(m[P])) === null || g === void 0 ? void 0 : g[1];
        I && N.push(new o.PublicKey(I));
      }
      return new p(N);
    }
  }
  t.ProgramErrorStack = p;
  class a extends Error {
    constructor(m, g, R, w, N, P) {
      super(R.join('\n').replace('Program log: ', '')),
        (this.errorLogs = R),
        (this.logs = w),
        (this.error = { errorCode: m, errorMessage: g, comparedValues: P, origin: N }),
        (this._programErrorStack = p.parse(w));
    }
    static parse(m) {
      if (!m) return null;
      const g = m.findIndex((y) => y.startsWith('Program log: AnchorError'));
      if (g === -1) return null;
      const R = m[g],
        w = [R];
      let N;
      if (g + 1 < m.length) {
        if (m[g + 1] === 'Program log: Left:') {
          const y = /^Program log: (.*)$/,
            v = y.exec(m[g + 2])[1],
            M = y.exec(m[g + 4])[1];
          (N = [new o.PublicKey(v), new o.PublicKey(M)]), w.push(...m.slice(g + 1, g + 5));
        } else if (m[g + 1].startsWith('Program log: Left:')) {
          const y = /^Program log: (Left|Right): (.*)$/,
            v = y.exec(m[g + 1])[2],
            M = y.exec(m[g + 2])[2];
          w.push(...m.slice(g + 1, g + 3)), (N = [v, M]);
        }
      }
      const I =
          /^Program log: AnchorError occurred\. Error Code: (.*)\. Error Number: (\d*)\. Error Message: (.*)\./.exec(
            R
          ),
        F =
          /^Program log: AnchorError thrown in (.*):(\d*)\. Error Code: (.*)\. Error Number: (\d*)\. Error Message: (.*)\./.exec(
            R
          ),
        T =
          /^Program log: AnchorError caused by account: (.*)\. Error Code: (.*)\. Error Number: (\d*)\. Error Message: (.*)\./.exec(
            R
          );
      if (I) {
        const [y, v, M] = I.slice(1, 4),
          G = { code: y, number: parseInt(v) };
        return new a(G, M, w, m, void 0, N);
      } else if (F) {
        const [y, v, M, G, J] = F.slice(1, 6),
          z = { code: M, number: parseInt(G) },
          S = { file: y, line: parseInt(v) };
        return new a(z, J, w, m, S, N);
      } else if (T) {
        const [y, v, M, G] = T.slice(1, 5),
          J = y,
          z = { code: v, number: parseInt(M) };
        return new a(z, G, w, m, J, N);
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
  t.AnchorError = a;
  class _ extends Error {
    constructor(m, g, R) {
      super(),
        (this.code = m),
        (this.msg = g),
        (this.logs = R),
        R && (this._programErrorStack = p.parse(R));
    }
    static parse(m, g) {
      const R = m.toString();
      let w;
      if (R.includes('custom program error:')) {
        let I = R.split('custom program error: ');
        if (I.length !== 2) return null;
        w = I[1];
      } else {
        const I = R.match(/"Custom":([0-9]+)}/g);
        if (!I || I.length > 1) return null;
        w = I[0].match(/([0-9]+)/g)[0];
      }
      let N;
      try {
        N = parseInt(w);
      } catch (I) {
        return null;
      }
      let P = g.get(N);
      return P !== void 0
        ? new _(N, P, m.logs)
        : ((P = t.LangErrorMessage.get(N)), P !== void 0 ? new _(N, P, m.logs) : null);
    }
    get program() {
      var m;
      return (m = this._programErrorStack) === null || m === void 0
        ? void 0
        : m.stack[this._programErrorStack.stack.length - 1];
    }
    get programErrorStack() {
      var m;
      return (m = this._programErrorStack) === null || m === void 0 ? void 0 : m.stack;
    }
    toString() {
      return this.msg;
    }
  }
  t.ProgramError = _;
  function A(h, m) {
    c.isSet('debug-logs') && console.log('Translating error:', h);
    const g = a.parse(h.logs);
    if (g) return g;
    const R = _.parse(h, m);
    if (R) return R;
    if (h.logs) {
      const w = {
        get: function (N, P) {
          return P === 'programErrorStack'
            ? N.programErrorStack.stack
            : P === 'program'
              ? N.programErrorStack.stack[h.programErrorStack.stack.length - 1]
              : Reflect.get(...arguments);
        },
      };
      return (h.programErrorStack = p.parse(h.logs)), new Proxy(h, w);
    }
    return h;
  }
  (t.translateError = A),
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
})(Gn);
var Ro = {},
  yo = {},
  er = {},
  xt = {},
  LA =
    (b && b.__createBinding) ||
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
  $A =
    (b && b.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  HA =
    (b && b.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null)
        for (var n in t)
          n !== 'default' && Object.prototype.hasOwnProperty.call(t, n) && LA(e, t, n);
      return $A(e, t), e;
    };
Object.defineProperty(xt, '__esModule', { value: !0 });
xt.IdlCoder = void 0;
const Ce = HA(me),
  ii = Ue,
  un = Gn;
class we {
  static fieldLayout(e, n = [], r) {
    const o = e.name;
    switch (e.type) {
      case 'bool':
        return Ce.bool(o);
      case 'u8':
        return Ce.u8(o);
      case 'i8':
        return Ce.i8(o);
      case 'u16':
        return Ce.u16(o);
      case 'i16':
        return Ce.i16(o);
      case 'u32':
        return Ce.u32(o);
      case 'i32':
        return Ce.i32(o);
      case 'f32':
        return Ce.f32(o);
      case 'u64':
        return Ce.u64(o);
      case 'i64':
        return Ce.i64(o);
      case 'f64':
        return Ce.f64(o);
      case 'u128':
        return Ce.u128(o);
      case 'i128':
        return Ce.i128(o);
      case 'u256':
        return Ce.u256(o);
      case 'i256':
        return Ce.i256(o);
      case 'bytes':
        return Ce.vecU8(o);
      case 'string':
        return Ce.str(o);
      case 'pubkey':
        return Ce.publicKey(o);
      default: {
        if ('option' in e.type) return Ce.option(we.fieldLayout({ type: e.type.option }, n, r), o);
        if ('vec' in e.type) return Ce.vec(we.fieldLayout({ type: e.type.vec }, n, r), o);
        if ('array' in e.type) {
          let [i, c] = e.type.array;
          return (c = we.resolveArrayLen(c, r)), Ce.array(we.fieldLayout({ type: i }, n, r), c, o);
        }
        if ('defined' in e.type) {
          if (!n) throw new un.IdlError('User defined types not provided');
          const i = e.type.defined.name,
            c = n.find((d) => d.name === i);
          if (!c) throw new un.IdlError('Type not found: '.concat(e.name));
          return we.typeDefLayout({
            typeDef: c,
            types: n,
            genericArgs: r != null ? r : e.type.defined.generics,
            name: o,
          });
        }
        if ('generic' in e.type) {
          const i = r == null ? void 0 : r.at(0);
          if ((i == null ? void 0 : i.kind) !== 'type')
            throw new un.IdlError('Invalid generic field: '.concat(e.name));
          return we.fieldLayout(st(xe({}, e), { type: i.type }), n);
        }
        throw new un.IdlError('Not yet implemented: '.concat(JSON.stringify(e.type)));
      }
    }
  }
  static typeDefLayout({ typeDef: e, types: n, name: r, genericArgs: o }) {
    switch (e.type.kind) {
      case 'struct': {
        const i = (0, ii.handleDefinedFields)(
          e.type.fields,
          () => [],
          (c) =>
            c.map((d) => {
              const p = o && we.resolveGenericArgs({ type: d.type, typeDef: e, genericArgs: o });
              return we.fieldLayout(d, n, p);
            }),
          (c) =>
            c.map((d, p) => {
              const a = o && we.resolveGenericArgs({ type: d, typeDef: e, genericArgs: o });
              return we.fieldLayout({ name: p.toString(), type: d }, n, a);
            })
        );
        return Ce.struct(i, r);
      }
      case 'enum': {
        const i = e.type.variants.map((c) => {
          const d = (0, ii.handleDefinedFields)(
            c.fields,
            () => [],
            (p) =>
              p.map((a) => {
                const _ = o && we.resolveGenericArgs({ type: a.type, typeDef: e, genericArgs: o });
                return we.fieldLayout(a, n, _);
              }),
            (p) =>
              p.map((a, _) => {
                const A = o && we.resolveGenericArgs({ type: a, typeDef: e, genericArgs: o });
                return we.fieldLayout({ name: _.toString(), type: a }, n, A);
              })
          );
          return Ce.struct(d, c.name);
        });
        return r !== void 0 ? Ce.rustEnum(i).replicate(r) : Ce.rustEnum(i, r);
      }
      case 'type':
        return we.fieldLayout({ type: e.type.alias, name: r }, n);
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
        if ('option' in e) return 1 + we.typeSize(e.option, n, r);
        if ('coption' in e) return 4 + we.typeSize(e.coption, n, r);
        if ('vec' in e) return 1;
        if ('array' in e) {
          let [i, c] = e.array;
          return (c = we.resolveArrayLen(c, r)), we.typeSize(i, n, r) * c;
        }
        if ('defined' in e) {
          const i =
            (o = n.types) === null || o === void 0
              ? void 0
              : o.find((d) => d.name === e.defined.name);
          if (!i) throw new un.IdlError('Type not found: '.concat(JSON.stringify(e)));
          const c = (d) => {
            const p = r != null ? r : e.defined.generics,
              a = p && we.resolveGenericArgs({ type: d, typeDef: i, genericArgs: p });
            return we.typeSize(d, n, a);
          };
          switch (i.type.kind) {
            case 'struct':
              return (0, ii.handleDefinedFields)(
                i.type.fields,
                () => [0],
                (d) => d.map((p) => c(p.type)),
                (d) => d.map((p) => c(p))
              ).reduce((d, p) => d + p, 0);
            case 'enum': {
              const d = i.type.variants.map((p) =>
                (0, ii.handleDefinedFields)(
                  p.fields,
                  () => [0],
                  (a) => a.map((_) => c(_.type)),
                  (a) => a.map((_) => c(_))
                ).reduce((a, _) => a + _, 0)
              );
              return Math.max(...d) + 1;
            }
            case 'type':
              return we.typeSize(i.type.alias, n, r);
          }
        }
        if ('generic' in e) {
          const i = r == null ? void 0 : r.at(0);
          if ((i == null ? void 0 : i.kind) !== 'type')
            throw new un.IdlError('Invalid generic: '.concat(e.generic));
          return we.typeSize(i.type, n, r);
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
    if (typeof e != 'number') throw new un.IdlError('Generic array length did not resolve');
    return e;
  }
  static resolveGenericArgs({ type: e, typeDef: n, genericArgs: r, isDefined: o }) {
    if (typeof e != 'object') return null;
    for (const i in n.generics) {
      const c = n.generics[i];
      if ('generic' in e && c.name === e.generic) return [r[i]];
      if ('option' in e) {
        const d = we.resolveGenericArgs({
          type: e.option,
          typeDef: n,
          genericArgs: r,
          isDefined: o,
        });
        if (!d || !o) return d;
        if (d[0].kind === 'type') return [{ kind: 'type', type: { option: d[0].type } }];
      }
      if ('vec' in e) {
        const d = we.resolveGenericArgs({ type: e.vec, typeDef: n, genericArgs: r, isDefined: o });
        if (!d || !o) return d;
        if (d[0].kind === 'type') return [{ kind: 'type', type: { vec: d[0].type } }];
      }
      if ('array' in e) {
        const [d, p] = e.array,
          a = typeof p == 'object',
          _ = we.resolveGenericArgs({ type: d, typeDef: n, genericArgs: r, isDefined: o });
        if (_) {
          for (const A in n.generics.slice(+i)) {
            const h = +i + +A;
            a && n.generics[h].name === p.generic && _.push(r[h]);
          }
          if (!o) return _;
          if (_[0].kind === 'type' && _[1].kind === 'const')
            return [{ kind: 'type', type: { array: [_[0].type, +_[1].value] } }];
        }
        if (a && c.name === p.generic) {
          const A = r[i];
          return o ? [{ kind: 'type', type: { array: [d, +A.value] } }] : [A];
        }
        return null;
      }
      if ('defined' in e)
        return e.defined.generics
          ? e.defined.generics
              .flatMap((d) => {
                switch (d.kind) {
                  case 'type':
                    return we.resolveGenericArgs({
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
xt.IdlCoder = we;
var Sc;
function vc() {
  if (Sc) return er;
  Sc = 1;
  var t =
      (b && b.__createBinding) ||
      (Object.create
        ? function (m, g, R, w) {
            w === void 0 && (w = R);
            var N = Object.getOwnPropertyDescriptor(g, R);
            (!N || ('get' in N ? !g.__esModule : N.writable || N.configurable)) &&
              (N = {
                enumerable: !0,
                get: function () {
                  return g[R];
                },
              }),
              Object.defineProperty(m, w, N);
          }
        : function (m, g, R, w) {
            w === void 0 && (w = R), (m[w] = g[R]);
          }),
    e =
      (b && b.__setModuleDefault) ||
      (Object.create
        ? function (m, g) {
            Object.defineProperty(m, 'default', { enumerable: !0, value: g });
          }
        : function (m, g) {
            m.default = g;
          }),
    n =
      (b && b.__importStar) ||
      function (m) {
        if (m && m.__esModule) return m;
        var g = {};
        if (m != null)
          for (var R in m)
            R !== 'default' && Object.prototype.hasOwnProperty.call(m, R) && t(g, m, R);
        return e(g, m), g;
      },
    r =
      (b && b.__importDefault) ||
      function (m) {
        return m && m.__esModule ? m : { default: m };
      };
  Object.defineProperty(er, '__esModule', { value: !0 }), (er.BorshInstructionCoder = void 0);
  const o = r(Mr),
    i = Pe,
    c = n(me),
    d = Ue,
    p = xt,
    a = ki();
  class _ {
    constructor(g) {
      this.idl = g;
      const R = g.instructions.map((N) => {
        const P = N.name,
          I = N.args.map((F) => p.IdlCoder.fieldLayout(F, g.types)),
          B = c.struct(I, P);
        return [P, { discriminator: N.discriminator, layout: B }];
      });
      this.ixLayouts = new Map(R);
      const w = R.map(([N, { discriminator: P, layout: I }]) => [
        o.default.encode(P),
        { name: N, layout: I },
      ]);
      this.sighashLayouts = new Map(w);
    }
    encode(g, R) {
      const w = i.Buffer.alloc(1e3),
        N = this.ixLayouts.get(g);
      if (!N) throw new Error('Unknown method: '.concat(g));
      const P = N.layout.encode(R, w),
        I = w.slice(0, P);
      return i.Buffer.concat([i.Buffer.from(N.discriminator), I]);
    }
    decode(g, R = 'hex') {
      typeof g == 'string' && (g = R === 'hex' ? i.Buffer.from(g, 'hex') : o.default.decode(g));
      const w = g.slice(0, a.DISCRIMINATOR_SIZE),
        N = g.slice(a.DISCRIMINATOR_SIZE),
        P = this.sighashLayouts.get(o.default.encode(w));
      return P ? { name: P.name, data: P.layout.decode(N) } : null;
    }
    format(g, R) {
      return A.format(g, R, this.idl);
    }
  }
  er.BorshInstructionCoder = _;
  class A {
    static format(g, R, w) {
      const N = w.instructions.find((F) => g.name === F.name);
      if (!N) return console.error('Invalid instruction given'), null;
      const P = N.args.map((F) => ({
          name: F.name,
          type: A.formatIdlType(F.type),
          data: A.formatIdlData(F, g.data[F.name], w.types),
        })),
        I = A.flattenIdlAccounts(N.accounts),
        B = R.map((F, $) => ($ < I.length ? xe({ name: I[$].name }, F) : xe({ name: void 0 }, F)));
      return { args: P, accounts: B };
    }
    static formatIdlType(g) {
      if (typeof g == 'string') return g;
      if ('option' in g) return 'Option<'.concat(this.formatIdlType(g.option), '>');
      if ('coption' in g) return 'COption<'.concat(this.formatIdlType(g.coption), '>');
      if ('vec' in g) return 'Vec<'.concat(this.formatIdlType(g.vec), '>');
      if ('array' in g) return 'Array<'.concat(g.array[0], '; ').concat(g.array[1], '>');
      if ('defined' in g) {
        const R = g.defined.name;
        if (g.defined.generics) {
          const w = g.defined.generics
            .map((N) => {
              switch (N.kind) {
                case 'type':
                  return A.formatIdlType(N.type);
                case 'const':
                  return N.value;
              }
            })
            .join(', ');
          return ''.concat(R, '<').concat(w, '>');
        }
        return R;
      }
      throw new Error('Unknown IDL type: '.concat(g));
    }
    static formatIdlData(g, R, w) {
      if (typeof g.type == 'string') return R.toString();
      if ('vec' in g.type)
        return (
          '[' +
          R.map((N) => this.formatIdlData({ name: '', type: g.type.vec }, N, w)).join(', ') +
          ']'
        );
      if ('option' in g.type)
        return R === null ? 'null' : this.formatIdlData({ name: '', type: g.type.option }, R, w);
      if ('defined' in g.type) {
        if (!w) throw new Error('User defined types not provided');
        const N = g.type.defined.name,
          P = w.find((I) => I.name === N);
        if (!P) throw new Error('Type not found: '.concat(N));
        return A.formatIdlDataDefined(P, R, w);
      }
      return 'unknown';
    }
    static formatIdlDataDefined(g, R, w) {
      switch (g.type.kind) {
        case 'struct':
          return (
            '{ ' +
            (0, d.handleDefinedFields)(
              g.type.fields,
              () => '',
              (N) =>
                Object.entries(R)
                  .map(([P, I]) => {
                    const B = N.find((F) => F.name === P);
                    if (!B) throw new Error('Field not found: '.concat(P));
                    return P + ': ' + A.formatIdlData(B, I, w);
                  })
                  .join(', '),
              (N) =>
                Object.entries(R)
                  .map(([P, I]) => P + ': ' + A.formatIdlData({ name: '', type: N[P] }, I, w))
                  .join(', ')
            ) +
            ' }'
          );
        case 'enum': {
          const N = Object.keys(R)[0],
            P = g.type.variants.find((B) => B.name === N);
          if (!P) throw new Error('Unable to find variant: '.concat(N));
          const I = R[N];
          return (0, d.handleDefinedFields)(
            P.fields,
            () => N,
            (B) => {
              const F = Object.keys(I)
                .map(($) => {
                  const T = I[$],
                    y = B.find((v) => v.name === $);
                  if (!y) throw new Error('Field not found: '.concat($));
                  return $ + ': ' + A.formatIdlData(y, T, w);
                })
                .join(', ');
              return ''.concat(N, ' { ').concat(F, ' }');
            },
            (B) => {
              const F = Object.entries(I)
                .map(([$, T]) => $ + ': ' + A.formatIdlData({ name: '', type: B[$] }, T, w))
                .join(', ');
              return ''.concat(N, ' { ').concat(F, ' }');
            }
          );
        }
        case 'type':
          return A.formatIdlType(g.type.alias);
      }
    }
    static flattenIdlAccounts(g, R) {
      return g
        .map((w) => {
          const N = h(w.name);
          if (w.hasOwnProperty('accounts')) {
            const P = R ? ''.concat(R, ' > ').concat(N) : N;
            return A.flattenIdlAccounts(w.accounts, P);
          } else return st(xe({}, w), { name: R ? ''.concat(R, ' > ').concat(N) : N });
        })
        .flat();
    }
  }
  function h(m) {
    const g = m.replace(/([A-Z])/g, ' $1');
    return g.charAt(0).toUpperCase() + g.slice(1);
  }
  return er;
}
var Sr = {},
  Hr = {};
Object.defineProperty(Hr, '__esModule', { value: !0 });
Hr.DISCRIMINATOR_SIZE = void 0;
Hr.DISCRIMINATOR_SIZE = 8;
var jA =
  (b && b.__importDefault) ||
  function (t) {
    return t && t.__esModule ? t : { default: t };
  };
Object.defineProperty(Sr, '__esModule', { value: !0 });
Sr.BorshAccountsCoder = void 0;
const GA = jA(Mr),
  oi = Pe,
  Pc = xt,
  si = Hr;
class FA {
  constructor(e) {
    if (((this.idl = e), !e.accounts)) {
      this.accountLayouts = new Map();
      return;
    }
    const n = e.types;
    if (!n) throw new Error('Accounts require `idl.types`');
    const r = e.accounts.map((o) => {
      const i = n.find((c) => c.name === o.name);
      if (!i) throw new Error('Account not found: '.concat(o.name));
      return [o.name, Pc.IdlCoder.typeDefLayout({ typeDef: i, types: n })];
    });
    this.accountLayouts = new Map(r);
  }
  async encode(e, n) {
    const r = oi.Buffer.alloc(1e3),
      o = this.accountLayouts.get(e);
    if (!o) throw new Error('Unknown account: '.concat(e));
    const i = o.encode(n, r),
      c = r.slice(0, i),
      d = this.accountDiscriminator(e);
    return oi.Buffer.concat([d, c]);
  }
  decode(e, n) {
    if (this.accountDiscriminator(e).compare(n.slice(0, si.DISCRIMINATOR_SIZE)))
      throw new Error('Invalid account discriminator');
    return this.decodeUnchecked(e, n);
  }
  decodeAny(e) {
    const n = e.slice(0, si.DISCRIMINATOR_SIZE),
      r = Array.from(this.accountLayouts.keys()).find((o) =>
        this.accountDiscriminator(o).equals(n)
      );
    if (!r) throw new Error('Account not found');
    return this.decodeUnchecked(r, e);
  }
  decodeUnchecked(e, n) {
    const r = n.subarray(si.DISCRIMINATOR_SIZE),
      o = this.accountLayouts.get(e);
    if (!o) throw new Error('Unknown account: '.concat(e));
    return o.decode(r);
  }
  memcmp(e, n) {
    const r = this.accountDiscriminator(e);
    return { offset: 0, bytes: GA.default.encode(n ? oi.Buffer.concat([r, n]) : r) };
  }
  size(e) {
    return si.DISCRIMINATOR_SIZE + Pc.IdlCoder.typeSize({ defined: { name: e } }, this.idl);
  }
  accountDiscriminator(e) {
    var n;
    const r =
      (n = this.idl.accounts) === null || n === void 0 ? void 0 : n.find((o) => o.name === e);
    if (!r) throw new Error('Account not found: '.concat(e));
    return oi.Buffer.from(r.discriminator);
  }
}
Sr.BorshAccountsCoder = FA;
var vr = {},
  KA =
    (b && b.__createBinding) ||
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
  VA =
    (b && b.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  WA =
    (b && b.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null)
        for (var n in t)
          n !== 'default' && Object.prototype.hasOwnProperty.call(t, n) && KA(e, t, n);
      return VA(e, t), e;
    };
Object.defineProperty(vr, '__esModule', { value: !0 });
vr.BorshEventCoder = void 0;
const qA = Pe,
  To = WA(Xt),
  zA = xt;
class YA {
  constructor(e) {
    var n;
    if (!e.events) {
      this.layouts = new Map();
      return;
    }
    const r = e.types;
    if (!r) throw new Error('Events require `idl.types`');
    const o = e.events.map((i) => {
      const c = r.find((d) => d.name === i.name);
      if (!c) throw new Error('Event not found: '.concat(i.name));
      return [i.name, zA.IdlCoder.typeDefLayout({ typeDef: c, types: r })];
    });
    (this.layouts = new Map(o)),
      (this.discriminators = new Map(
        ((n = e.events) !== null && n !== void 0 ? n : []).map((i) => [
          To.encode(qA.Buffer.from(i.discriminator)),
          i.name,
        ])
      ));
  }
  decode(e) {
    let n;
    try {
      n = To.decode(e);
    } catch (d) {
      return null;
    }
    const r = To.encode(n.slice(0, 8)),
      o = this.discriminators.get(r);
    if (!o) return null;
    const i = this.layouts.get(o);
    if (!i) throw new Error('Unknown event: '.concat(o));
    return { data: i.decode(n.slice(8)), name: o };
  }
}
vr.BorshEventCoder = YA;
var Ni = {};
Object.defineProperty(Ni, '__esModule', { value: !0 });
Ni.BorshTypesCoder = void 0;
const XA = Pe,
  JA = xt;
class ZA {
  constructor(e) {
    const n = e.types;
    if (!n) {
      this.typeLayouts = new Map();
      return;
    }
    const r = n
      .filter((o) => !o.generics)
      .map((o) => [o.name, JA.IdlCoder.typeDefLayout({ typeDef: o, types: n })]);
    this.typeLayouts = new Map(r);
  }
  encode(e, n) {
    const r = XA.Buffer.alloc(1e3),
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
Ni.BorshTypesCoder = ZA;
var Mc;
function QA() {
  return (
    Mc ||
      ((Mc = 1),
      (function (t) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.BorshCoder =
            t.BorshEventCoder =
            t.DISCRIMINATOR_SIZE =
            t.BorshAccountsCoder =
            t.BorshInstructionCoder =
              void 0);
        const e = vc(),
          n = Sr,
          r = vr,
          o = Ni;
        var i = vc();
        Object.defineProperty(t, 'BorshInstructionCoder', {
          enumerable: !0,
          get: function () {
            return i.BorshInstructionCoder;
          },
        });
        var c = Sr;
        Object.defineProperty(t, 'BorshAccountsCoder', {
          enumerable: !0,
          get: function () {
            return c.BorshAccountsCoder;
          },
        });
        var d = Hr;
        Object.defineProperty(t, 'DISCRIMINATOR_SIZE', {
          enumerable: !0,
          get: function () {
            return d.DISCRIMINATOR_SIZE;
          },
        });
        var p = vr;
        Object.defineProperty(t, 'BorshEventCoder', {
          enumerable: !0,
          get: function () {
            return p.BorshEventCoder;
          },
        });
        class a {
          constructor(A) {
            (this.instruction = new e.BorshInstructionCoder(A)),
              (this.accounts = new n.BorshAccountsCoder(A)),
              (this.events = new r.BorshEventCoder(A)),
              (this.types = new o.BorshTypesCoder(A));
          }
        }
        t.BorshCoder = a;
      })(yo)),
    yo
  );
}
var jr = {},
  Ci = {},
  eO =
    (b && b.__createBinding) ||
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
    (b && b.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  nO =
    (b && b.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null)
        for (var n in t)
          n !== 'default' && Object.prototype.hasOwnProperty.call(t, n) && eO(e, t, n);
      return tO(e, t), e;
    },
  rO =
    (b && b.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(Ci, '__esModule', { value: !0 });
Ci.SystemInstructionCoder = void 0;
const iO = rO(nt),
  Oe = nO(gi);
class oO {
  constructor(e) {}
  encode(e, n) {
    switch (e) {
      case 'createAccount':
        return aO(n);
      case 'assign':
        return uO(n);
      case 'transfer':
        return cO(n);
      case 'createAccountWithSeed':
        return lO(n);
      case 'advanceNonceAccount':
        return fO(n);
      case 'withdrawNonceAccount':
        return pO(n);
      case 'initializeNonceAccount':
        return dO(n);
      case 'authorizeNonceAccount':
        return _O(n);
      case 'allocate':
        return hO(n);
      case 'allocateWithSeed':
        return mO(n);
      case 'assignWithSeed':
        return gO(n);
      case 'transferWithSeed':
        return AO(n);
      default:
        throw new Error('Invalid instruction: '.concat(e));
    }
  }
  encodeState(e, n) {
    throw new Error('System does not have state');
  }
}
Ci.SystemInstructionCoder = oO;
class sO extends Oe.Layout {
  constructor(e) {
    super(-1, e),
      (this.property = e),
      (this.layout = Oe.struct(
        [Oe.u32('length'), Oe.u32('lengthPadding'), Oe.blob(Oe.offset(Oe.u32(), -8), 'chars')],
        this.property
      ));
  }
  encode(e, n, r = 0) {
    if (e == null) return this.layout.span;
    const o = { chars: ie.Buffer.from(e, 'utf8') };
    return this.layout.encode(o, n, r);
  }
  decode(e, n = 0) {
    return this.layout.decode(e, n).chars.toString();
  }
  getSpan(e, n = 0) {
    return (
      Oe.u32().span +
      Oe.u32().span +
      new iO.default(new Uint8Array(e).slice(n, n + 4), 10, 'le').toNumber()
    );
  }
}
function Si(t) {
  return new sO(t);
}
function ft(t) {
  return Oe.blob(32, t);
}
function aO({ lamports: t, space: e, owner: n }) {
  return _t({ createAccount: { lamports: t, space: e, owner: n.toBuffer() } });
}
function uO({ owner: t }) {
  return _t({ assign: { owner: t.toBuffer() } });
}
function cO({ lamports: t }) {
  return _t({ transfer: { lamports: t } });
}
function lO({ base: t, seed: e, lamports: n, space: r, owner: o }) {
  return _t(
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
function dO({ authorized: t }) {
  return _t({ initializeNonceAccount: { authorized: t.toBuffer() } });
}
function fO({ authorized: t }) {
  return _t({ advanceNonceAccount: { authorized: t.toBuffer() } });
}
function pO({ lamports: t }) {
  return _t({ withdrawNonceAccount: { lamports: t } });
}
function _O({ authorized: t }) {
  return _t({ authorizeNonceAccount: { authorized: t.toBuffer() } });
}
function hO({ space: t }) {
  return _t({ allocate: { space: t } });
}
function mO({ base: t, seed: e, space: n, owner: r }) {
  return _t(
    { allocateWithSeed: { base: t.toBuffer(), seed: e, space: n, owner: r.toBuffer() } },
    He.getVariant(9).span + e.length
  );
}
function gO({ base: t, seed: e, owner: n }) {
  return _t(
    { assignWithSeed: { base: t.toBuffer(), seed: e, owner: n.toBuffer() } },
    He.getVariant(10).span + e.length
  );
}
function AO({ lamports: t, seed: e, owner: n }) {
  return _t(
    { transferWithSeed: { lamports: t, seed: e, owner: n.toBuffer() } },
    He.getVariant(11).span + e.length
  );
}
const He = Oe.union(Oe.u32('instruction'));
He.addVariant(0, Oe.struct([Oe.ns64('lamports'), Oe.ns64('space'), ft('owner')]), 'createAccount');
He.addVariant(1, Oe.struct([ft('owner')]), 'assign');
He.addVariant(2, Oe.struct([Oe.ns64('lamports')]), 'transfer');
He.addVariant(
  3,
  Oe.struct([ft('base'), Si('seed'), Oe.ns64('lamports'), Oe.ns64('space'), ft('owner')]),
  'createAccountWithSeed'
);
He.addVariant(4, Oe.struct([ft('authorized')]), 'advanceNonceAccount');
He.addVariant(5, Oe.struct([Oe.ns64('lamports')]), 'withdrawNonceAccount');
He.addVariant(6, Oe.struct([ft('authorized')]), 'initializeNonceAccount');
He.addVariant(7, Oe.struct([ft('authorized')]), 'authorizeNonceAccount');
He.addVariant(8, Oe.struct([Oe.ns64('space')]), 'allocate');
He.addVariant(
  9,
  Oe.struct([ft('base'), Si('seed'), Oe.ns64('space'), ft('owner')]),
  'allocateWithSeed'
);
He.addVariant(10, Oe.struct([ft('base'), Si('seed'), ft('owner')]), 'assignWithSeed');
He.addVariant(11, Oe.struct([Oe.ns64('lamports'), Si('seed'), ft('owner')]), 'transferWithSeed');
function _t(t, e) {
  const n = ie.Buffer.alloc(e != null ? e : OO),
    r = He.encode(t, n);
  return e === void 0 ? n.slice(0, r) : n;
}
const OO = Math.max(...Object.values(He.registry).map((t) => t.span));
var vi = {},
  RO =
    (b && b.__createBinding) ||
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
  yO =
    (b && b.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  TO =
    (b && b.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null)
        for (var n in t)
          n !== 'default' && Object.prototype.hasOwnProperty.call(t, n) && RO(e, t, n);
      return yO(e, t), e;
    };
Object.defineProperty(vi, '__esModule', { value: !0 });
vi.SystemAccountsCoder = void 0;
const fn = TO(gi),
  Xo = _e,
  EO = xt;
class IO {
  constructor(e) {
    this.idl = e;
  }
  async encode(e, n) {
    switch (e) {
      case 'nonce': {
        const r = ie.Buffer.alloc(Xo.NONCE_ACCOUNT_LENGTH),
          o = Df.encode(n, r);
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
        return wO(n);
      default:
        throw new Error('Invalid account name: '.concat(e));
    }
  }
  memcmp(e, n) {
    switch (e) {
      case 'nonce':
        return { dataSize: Xo.NONCE_ACCOUNT_LENGTH };
      default:
        throw new Error('Invalid account name: '.concat(e));
    }
  }
  size(e) {
    return EO.IdlCoder.typeSize({ defined: { name: e } }, this.idl);
  }
}
vi.SystemAccountsCoder = IO;
function wO(t) {
  return Df.decode(t);
}
let bO = class extends fn.Layout {
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
function kc(t) {
  return new bO(
    fn.blob(32),
    (e) => new Xo.PublicKey(e),
    (e) => e.toBuffer(),
    t
  );
}
const Df = fn.struct([
  fn.u32('version'),
  fn.u32('state'),
  kc('authorizedPubkey'),
  kc('nonce'),
  fn.struct([fn.nu64('lamportsPerSignature')], 'feeCalculator'),
]);
var Pi = {};
Object.defineProperty(Pi, '__esModule', { value: !0 });
Pi.SystemEventsCoder = void 0;
class NO {
  constructor(e) {}
  decode(e) {
    throw new Error('System program does not have events');
  }
}
Pi.SystemEventsCoder = NO;
var Mi = {};
Object.defineProperty(Mi, '__esModule', { value: !0 });
Mi.SystemTypesCoder = void 0;
class CO {
  constructor(e) {}
  encode(e, n) {
    throw new Error('System does not have user-defined types');
  }
  decode(e, n) {
    throw new Error('System does not have user-defined types');
  }
}
Mi.SystemTypesCoder = CO;
Object.defineProperty(jr, '__esModule', { value: !0 });
jr.SystemCoder = void 0;
const SO = Ci,
  vO = vi,
  PO = Pi,
  MO = Mi;
class kO {
  constructor(e) {
    (this.instruction = new SO.SystemInstructionCoder(e)),
      (this.accounts = new vO.SystemAccountsCoder(e)),
      (this.events = new PO.SystemEventsCoder(e)),
      (this.types = new MO.SystemTypesCoder(e));
  }
}
jr.SystemCoder = kO;
var Dc;
function ki() {
  return (
    Dc ||
      ((Dc = 1),
      (function (t) {
        var e =
            (b && b.__createBinding) ||
            (Object.create
              ? function (r, o, i, c) {
                  c === void 0 && (c = i);
                  var d = Object.getOwnPropertyDescriptor(o, i);
                  (!d || ('get' in d ? !o.__esModule : d.writable || d.configurable)) &&
                    (d = {
                      enumerable: !0,
                      get: function () {
                        return o[i];
                      },
                    }),
                    Object.defineProperty(r, c, d);
                }
              : function (r, o, i, c) {
                  c === void 0 && (c = i), (r[c] = o[i]);
                }),
          n =
            (b && b.__exportStar) ||
            function (r, o) {
              for (var i in r)
                i !== 'default' && !Object.prototype.hasOwnProperty.call(o, i) && e(o, r, i);
            };
        Object.defineProperty(t, '__esModule', { value: !0 }), n(QA(), t), n(jr, t);
      })(Ro)),
    Ro
  );
}
var Ve = {},
  Di = {};
const Bf = kr(t_);
Object.defineProperty(Di, '__esModule', { value: !0 });
Di.hash = void 0;
const DO = Bf;
function BO(t) {
  return new TextDecoder().decode((0, DO.sha256)(t));
}
Di.hash = BO;
var Bi = {};
Object.defineProperty(Bi, '__esModule', { value: !0 });
Bi.createWithSeedSync = void 0;
const Bc = Pe,
  xO = _e,
  UO = Bf;
function LO(t, e, n) {
  const r = Bc.Buffer.concat([t.toBuffer(), Bc.Buffer.from(e), n.toBuffer()]);
  return new xO.PublicKey((0, UO.sha256)(r));
}
Bi.createWithSeedSync = LO;
var xf = {};
(function (t) {
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.associatedAddress = t.ASSOCIATED_PROGRAM_ID = t.TOKEN_PROGRAM_ID = void 0);
  const e = _e;
  (t.TOKEN_PROGRAM_ID = new e.PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA')),
    (t.ASSOCIATED_PROGRAM_ID = new e.PublicKey('ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'));
  function n({ mint: r, owner: o }) {
    return e.PublicKey.findProgramAddressSync(
      [o.toBuffer(), t.TOKEN_PROGRAM_ID.toBuffer(), r.toBuffer()],
      t.ASSOCIATED_PROGRAM_ID
    )[0];
  }
  t.associatedAddress = n;
})(xf);
var qt = {},
  $O =
    (b && b.__createBinding) ||
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
  HO =
    (b && b.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  jO =
    (b && b.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null)
        for (var n in t)
          n !== 'default' && Object.prototype.hasOwnProperty.call(t, n) && $O(e, t, n);
      return HO(e, t), e;
    },
  GO =
    (b && b.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(qt, '__esModule', { value: !0 });
qt.decodeUpgradeableLoaderState = qt.fetchData = qt.verifiedBuild = void 0;
const FO = GO(n_),
  ut = jO(me);
async function KO(t, e, n = 5) {
  const r = 'https://api.apr.dev/api/v0/program/'.concat(e.toString(), '/latest?limit=').concat(n),
    [o, i] = await Promise.all([Uf(t, e), (0, FO.default)(r)]),
    c = (await i.json()).filter(
      (p) => !p.aborted && p.state === 'Built' && p.verified === 'Verified'
    );
  if (c.length === 0) return null;
  const d = c[0];
  return o.slot.toNumber() !== d.verified_slot ? null : d;
}
qt.verifiedBuild = KO;
async function Uf(t, e) {
  const n = await t.getAccountInfo(e);
  if (n === null) throw new Error('program account not found');
  const { program: r } = Jo(n.data),
    o = await t.getAccountInfo(r.programdataAddress);
  if (o === null) throw new Error('program data account not found');
  const { programData: i } = Jo(o.data);
  return i;
}
qt.fetchData = Uf;
const VO = ut.rustEnum(
  [
    ut.struct([], 'uninitialized'),
    ut.struct([ut.option(ut.publicKey(), 'authorityAddress')], 'buffer'),
    ut.struct([ut.publicKey('programdataAddress')], 'program'),
    ut.struct(
      [ut.u64('slot'), ut.option(ut.publicKey(), 'upgradeAuthorityAddress')],
      'programData'
    ),
  ],
  void 0,
  ut.u32()
);
function Jo(t) {
  return VO.decode(t);
}
qt.decodeUpgradeableLoaderState = Jo;
var WO =
    (b && b.__createBinding) ||
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
  qO =
    (b && b.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  On =
    (b && b.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null)
        for (var n in t)
          n !== 'default' && Object.prototype.hasOwnProperty.call(t, n) && WO(e, t, n);
      return qO(e, t), e;
    };
Object.defineProperty(Ve, '__esModule', { value: !0 });
Ve.registry = Ve.features = Ve.token = Ve.bytes = Ve.publicKey = Ve.rpc = Ve.sha256 = void 0;
Ve.sha256 = On(Di);
Ve.rpc = On(mu());
Ve.publicKey = On(Bi);
Ve.bytes = On(lt);
Ve.token = On(xf);
Ve.features = On(Jt);
Ve.registry = On(qt);
var Eo = {};
const zO = kr(r_);
var Io = {},
  gu = {},
  en = {};
Object.defineProperty(en, '__esModule', { value: !0 });
en.splitArgsAndCtx = void 0;
function YO(t, e) {
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
            (r = (n = t.args) === null || n === void 0 ? void 0 : n.map((c) => c.name)) !== null &&
              r !== void 0
              ? r
              : []
          )
      );
    o = e.pop();
  }
  return [e, o];
}
en.splitArgsAndCtx = YO;
var XO =
    (b && b.__createBinding) ||
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
  JO =
    (b && b.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  ZO =
    (b && b.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null)
        for (var n in t)
          n !== 'default' && Object.prototype.hasOwnProperty.call(t, n) && XO(e, t, n);
      return JO(e, t), e;
    };
Object.defineProperty(gu, '__esModule', { value: !0 });
const QO = _e,
  eR = Ue,
  tR = Gn,
  wo = We,
  nR = en,
  rR = ZO(Jt);
class mi {
  static build(e, n, r) {
    if (e.name === '_inner') throw new tR.IdlError('the _inner name is reserved');
    const o = (...i) => {
      const [c, d] = (0, nR.splitArgsAndCtx)(e, [...i]);
      (0, wo.validateAccounts)(e.accounts, d.accounts), iR(e, ...i);
      const p = o.accounts(d.accounts);
      return (
        d.remainingAccounts !== void 0 && p.push(...d.remainingAccounts),
        rR.isSet('debug-logs') && console.log('Outgoing account metas:', p),
        new QO.TransactionInstruction({
          keys: p,
          programId: r,
          data: n(e.name, (0, wo.toInstruction)(e, ...c)),
        })
      );
    };
    return (o.accounts = (i) => mi.accountsArray(i, e.accounts, r, e.name)), o;
  }
  static accountsArray(e, n, r, o) {
    return e
      ? n
          .map((i) => {
            if ((0, eR.isCompositeAccounts)(i)) {
              const _ = e[i.name];
              return mi.accountsArray(_, i.accounts, r, o).flat();
            }
            let c;
            try {
              c = (0, wo.translateAddress)(e[i.name]);
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
            const d = i.optional && c.equals(r),
              p = !!(i.writable && !d),
              a = !!(i.signer && !d);
            return { pubkey: c, isWritable: p, isSigner: a };
          })
          .flat()
      : [];
  }
}
gu.default = mi;
function iR(t, ...e) {}
var Au = {};
Object.defineProperty(Au, '__esModule', { value: !0 });
const oR = _e,
  sR = en;
class aR {
  static build(e, n) {
    return (...o) => {
      var i, c, d;
      const [, p] = (0, sR.splitArgsAndCtx)(e, [...o]),
        a = new oR.Transaction();
      if (p.preInstructions && p.instructions)
        throw new Error('instructions is deprecated, use preInstructions');
      return (
        (i = p.preInstructions) === null || i === void 0 || i.forEach((_) => a.add(_)),
        (c = p.instructions) === null || c === void 0 || c.forEach((_) => a.add(_)),
        a.add(n(...o)),
        (d = p.postInstructions) === null || d === void 0 || d.forEach((_) => a.add(_)),
        a
      );
    };
  }
}
Au.default = aR;
var Ou = {};
Object.defineProperty(Ou, '__esModule', { value: !0 });
const uR = en,
  cR = Gn;
class lR {
  static build(e, n, r, o) {
    return async (...c) => {
      var d;
      const p = n(...c),
        [, a] = (0, uR.splitArgsAndCtx)(e, [...c]);
      if (o.sendAndConfirm === void 0)
        throw new Error("This function requires 'Provider.sendAndConfirm' to be implemented.");
      try {
        return await o.sendAndConfirm(
          p,
          (d = a.signers) !== null && d !== void 0 ? d : [],
          a.options
        );
      } catch (_) {
        throw (0, cR.translateError)(_, r);
      }
    };
  }
}
Ou.default = lR;
var $n = {},
  dR =
    (b && b.__createBinding) ||
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
  fR =
    (b && b.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  pR =
    (b && b.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null)
        for (var n in t)
          n !== 'default' && Object.prototype.hasOwnProperty.call(t, n) && dR(e, t, n);
      return fR(e, t), e;
    },
  _R =
    (b && b.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty($n, '__esModule', { value: !0 });
$n.AccountClient = void 0;
const hR = _R(i_),
  mR = _e,
  gR = bi(),
  AR = ki(),
  ai = We,
  OR = pR(mu());
class RR {
  static build(e, n, r, o) {
    var i;
    return ((i = e.accounts) !== null && i !== void 0 ? i : []).reduce(
      (c, d) => ((c[d.name] = new Lf(e, d, r, o, n)), c),
      {}
    );
  }
}
$n.default = RR;
class Lf {
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
      (this._provider = o != null ? o : (0, gR.getProvider)()),
      (this._coder = i != null ? i : new AR.BorshCoder(e)),
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
      await OR.getMultipleAccountsAndContext(
        this._provider.connection,
        e.map((o) => (0, ai.translateAddress)(o)),
        n
      )
    ).map((o) => {
      if (o == null) return null;
      const { account: i, context: c } = o;
      return { data: this._coder.accounts.decode(this._idlAccount.name, i.data), context: c };
    });
  }
  async all(e) {
    const n = this.coder.accounts.memcmp(
        this._idlAccount.name,
        e instanceof ie.Buffer ? e : void 0
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
      ).map(({ pubkey: i, account: c }) => ({
        publicKey: i,
        account: this._coder.accounts.decode(this._idlAccount.name, c.data),
      }))
    );
  }
  subscribe(e, n) {
    const r = tr.get(e.toString());
    if (r) return r.ee;
    const o = new hR.default();
    e = (0, ai.translateAddress)(e);
    const i = this._provider.connection.onAccountChange(
      e,
      (c) => {
        const d = this._coder.accounts.decode(this._idlAccount.name, c.data);
        o.emit('change', d);
      },
      n
    );
    return tr.set(e.toString(), { ee: o, listener: i }), o;
  }
  async unsubscribe(e) {
    let n = tr.get(e.toString());
    if (!n) {
      console.warn('Address is not subscribed');
      return;
    }
    tr &&
      (await this._provider.connection
        .removeAccountChangeListener(n.listener)
        .then(() => {
          tr.delete(e.toString());
        })
        .catch(console.error));
  }
  async createInstruction(e, n) {
    const r = this.size;
    if (this._provider.publicKey === void 0)
      throw new Error(
        "This function requires the Provider interface implementor to have a 'publicKey' field."
      );
    return mR.SystemProgram.createAccount({
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
    return await this._provider.connection.getAccountInfo((0, ai.translateAddress)(e), n);
  }
  async getAccountInfoAndContext(e, n) {
    return await this._provider.connection.getAccountInfoAndContext((0, ai.translateAddress)(e), n);
  }
}
$n.AccountClient = Lf;
const tr = new Map();
var Ru = {},
  Zt = {};
Object.defineProperty(Zt, '__esModule', { value: !0 });
Zt.EventParser = Zt.EventManager = void 0;
const Zo = 'Program log: ',
  $f = 'Program data: ',
  yR = Zo.length,
  TR = $f.length;
class ER {
  constructor(e, n, r) {
    (this._programId = e),
      (this._provider = n),
      (this._eventParser = new Hf(e, r)),
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
        (this._onLogsSubscriptionId = this._provider.connection.onLogs(this._programId, (i, c) => {
          if (!i.err)
            for (const d of this._eventParser.parseLogs(i.logs)) {
              const p = this._eventListeners.get(d.name);
              p &&
                p.forEach((a) => {
                  const _ = this._eventCallbacks.get(a);
                  if (_) {
                    const [, A] = _;
                    A(d.data, c.slot, i.signature);
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
Zt.EventManager = ER;
class Hf {
  constructor(e, n) {
    (this.coder = n), (this.programId = e);
  }
  *parseLogs(e, n = !1) {
    const r = new wR(e),
      o = new IR();
    let i = r.next();
    for (; i !== null; ) {
      let [c, d, p] = this.handleLog(o, i, n);
      c && (yield c), d && o.push(d), p && o.pop(), (i = r.next());
    }
  }
  handleLog(e, n, r) {
    return e.stack.length > 0 && e.program() === this.programId.toString()
      ? this.handleProgramLog(n, r)
      : [null, ...this.handleSystemLog(n)];
  }
  handleProgramLog(e, n) {
    if (e.startsWith(Zo) || e.startsWith($f)) {
      const r = e.startsWith(Zo) ? e.slice(yR) : e.slice(TR),
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
Zt.EventParser = Hf;
class IR {
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
class wR {
  constructor(e) {
    this.logs = e;
  }
  next() {
    if (this.logs.length === 0) return null;
    let e = this.logs[0];
    return (this.logs = this.logs.slice(1)), e;
  }
}
Object.defineProperty(Ru, '__esModule', { value: !0 });
const bR = en,
  NR = Zt,
  CR = Gn;
class SR {
  static build(e, n, r, o, i, c, d) {
    return async (...a) => {
      var _;
      const A = n(...a),
        [, h] = (0, bR.splitArgsAndCtx)(e, [...a]);
      let m;
      if (o.simulate === void 0)
        throw new Error("This function requires 'Provider.simulate' to be implemented.");
      try {
        m = await o.simulate(
          A,
          h.signers,
          (_ = h.options) === null || _ === void 0 ? void 0 : _.commitment
        );
      } catch (w) {
        throw (0, CR.translateError)(w, r);
      }
      if (m === void 0) throw new Error('Unable to simulate transaction');
      const g = m.logs;
      if (!g) throw new Error('Simulated logs not found');
      const R = [];
      if (d.events) {
        let w = new NR.EventParser(c, i);
        for (const N of w.parseLogs(g)) R.push(N);
      }
      return { events: R, raw: g };
    };
  }
}
Ru.default = SR;
var gt = {},
  cn = {},
  xi = {},
  vR =
    (b && b.__createBinding) ||
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
  PR =
    (b && b.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  MR =
    (b && b.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null)
        for (var n in t)
          n !== 'default' && Object.prototype.hasOwnProperty.call(t, n) && vR(e, t, n);
      return PR(e, t), e;
    },
  kR =
    (b && b.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(xi, '__esModule', { value: !0 });
xi.decodeTokenAccount = void 0;
const DR = kR(nt),
  Pt = MR(gi),
  jf = gi,
  BR = _e;
function bo(t) {
  return new Gf(
    Pt.blob(8),
    (e) => yu.fromBuffer(e),
    (e) => e.toBuffer(),
    t
  );
}
function ui(t) {
  return new Gf(
    Pt.blob(32),
    (e) => new BR.PublicKey(e),
    (e) => e.toBuffer(),
    t
  );
}
function No(t, e) {
  return new xR(t, e);
}
class Gf extends jf.Layout {
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
class xR extends jf.Layout {
  constructor(e, n) {
    super(-1, n), (this.layout = e), (this.discriminator = Pt.u32());
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
class yu extends DR.default {
  toBuffer() {
    const e = super.toArray().reverse(),
      n = ie.Buffer.from(e);
    if (n.length === 8) return n;
    if (n.length >= 8) throw new Error('u64 too large');
    const r = ie.Buffer.alloc(8);
    return n.copy(r), r;
  }
  static fromBuffer(e) {
    if (e.length !== 8) throw new Error('Invalid buffer length: '.concat(e.length));
    return new yu(
      [...e]
        .reverse()
        .map((n) => '00'.concat(n.toString(16)).slice(-2))
        .join(''),
      16
    );
  }
}
const UR = Pt.struct([
  ui('mint'),
  ui('owner'),
  bo('amount'),
  No(ui(), 'delegate'),
  ((t) => {
    const e = Pt.union(Pt.u8('discriminator'), null, t);
    return (
      e.addVariant(0, Pt.struct([]), 'uninitialized'),
      e.addVariant(1, Pt.struct([]), 'initialized'),
      e.addVariant(2, Pt.struct([]), 'frozen'),
      e
    );
  })('state'),
  No(bo(), 'isNative'),
  bo('delegatedAmount'),
  No(ui(), 'closeAuthority'),
]);
function LR(t) {
  return UR.decode(t);
}
xi.decodeTokenAccount = LR;
var xc;
function $R() {
  if (xc) return cn;
  xc = 1;
  var t =
    (b && b.__importDefault) ||
    function (_) {
      return _ && _.__esModule ? _ : { default: _ };
    };
  Object.defineProperty(cn, '__esModule', { value: !0 }),
    (cn.AccountsResolver = cn.isAccountsGeneric = void 0);
  const e = t(nt),
    n = _e,
    r = Ue,
    o = xi,
    i = Ui(),
    c = Qo();
  function d(_) {
    return !(_ instanceof n.PublicKey);
  }
  cn.isAccountsGeneric = d;
  class p {
    constructor(A, h, m, g, R, w, N, P) {
      (this._args = A),
        (this._accounts = h),
        (this._provider = m),
        (this._programId = g),
        (this._idlIx = R),
        (this._idlTypes = N),
        (this._customResolver = P),
        (this._accountStore = new a(m, w, g));
    }
    args(A) {
      this._args = A;
    }
    async resolve() {
      this.resolveEventCpi(this._idlIx.accounts), this.resolveConst(this._idlIx.accounts);
      let A = 0;
      for (
        ;
        (await this.resolvePdasAndRelations(this._idlIx.accounts)) + (await this.resolveCustom()) >
        0;

      )
        if ((A++, A === 16)) throw new Error('Reached maximum depth for account resolution');
    }
    resolveOptionals(A) {
      Object.assign(this._accounts, this.resolveOptionalsHelper(A, this._idlIx.accounts));
    }
    get(A) {
      const h = A.reduce((m, g) => m && m[g], this._accounts);
      if (h && h.toBase58) return h;
    }
    set(A, h) {
      let m = this._accounts;
      A.forEach((g, R) => {
        var w;
        R === A.length - 1 && (m[g] = h),
          (m[g] = (w = m[g]) !== null && w !== void 0 ? w : {}),
          (m = m[g]);
      });
    }
    resolveOptionalsHelper(A, h) {
      const m = {};
      for (const g of h) {
        const R = g.name,
          w = A[R];
        w !== void 0 &&
          ((0, c.isPartialAccounts)(w)
            ? (0, r.isCompositeAccounts)(g)
              ? (m[R] = this.resolveOptionalsHelper(w, g.accounts))
              : (m[R] = (0, c.flattenPartialAccounts)(w, !0))
            : w !== null
              ? (m[R] = (0, i.translateAddress)(w))
              : g.optional && (m[R] = this._programId));
      }
      return m;
    }
    async resolveCustom() {
      if (this._customResolver) {
        const { accounts: A, resolved: h } = await this._customResolver({
          args: this._args,
          accounts: this._accounts,
          provider: this._provider,
          programId: this._programId,
          idlIx: this._idlIx,
        });
        return (this._accounts = A), h;
      }
      return 0;
    }
    resolveEventCpi(A, h = []) {
      for (const m in A) {
        const g = A[m];
        (0, r.isCompositeAccounts)(g) && this.resolveEventCpi(g.accounts, [...h, g.name]);
        const R = +m + 1;
        if (R === A.length) return;
        const w = A[m].name,
          N = A[R].name;
        if (w === 'eventAuthority' && N === 'program') {
          const P = [...h, w],
            I = [...h, N];
          this.get(P) ||
            this.set(
              P,
              n.PublicKey.findProgramAddressSync(
                [ie.Buffer.from('__event_authority')],
                this._programId
              )[0]
            ),
            this.get(I) || this.set(I, this._programId);
          return;
        }
      }
    }
    resolveConst(A, h = []) {
      for (const m of A) {
        const g = m.name;
        if ((0, r.isCompositeAccounts)(m)) this.resolveConst(m.accounts, [...h, g]);
        else {
          const R = m;
          if ((R.signer || R.address) && !this.get([...h, g])) {
            if (R.signer) {
              if (!this._provider.wallet)
                throw new Error(
                  'This function requires the `Provider` interface implementor to have a `wallet` field.'
                );
              this.set([...h, g], this._provider.wallet.publicKey);
            }
            R.address && this.set([...h, g], (0, i.translateAddress)(R.address));
          }
        }
      }
    }
    async resolvePdasAndRelations(A, h = []) {
      let m = 0;
      for (const g of A) {
        const R = g.name;
        if ((0, r.isCompositeAccounts)(g))
          m += await this.resolvePdasAndRelations(g.accounts, [...h, R]);
        else {
          const w = g;
          if ((w.pda || w.relations) && !this.get([...h, R])) {
            m++;
            try {
              if (w.pda) {
                const N = await Promise.all(w.pda.seeds.map((B) => this.toBuffer(B, h)));
                if (N.some((B) => !B)) continue;
                const P = await this.parseProgramId(w, h),
                  [I] = n.PublicKey.findProgramAddressSync(N, P);
                this.set([...h, R], I);
              }
            } catch (N) {}
            try {
              if (w.relations) {
                const N = this.get([...h, w.relations[0]]);
                if (N) {
                  const P = await this._accountStore.fetchAccount({ publicKey: N });
                  this.set([...h, R], P[R]);
                }
              }
            } catch (N) {}
          }
        }
      }
      return m;
    }
    async parseProgramId(A, h = []) {
      var m;
      if (!(!((m = A.pda) === null || m === void 0) && m.program)) return this._programId;
      const g = await this.toBuffer(A.pda.program, h);
      if (!g) throw new Error('Program seed not resolved: '.concat(A.name));
      return new n.PublicKey(g);
    }
    async toBuffer(A, h = []) {
      switch (A.kind) {
        case 'const':
          return this.toBufferConst(A);
        case 'arg':
          return await this.toBufferArg(A);
        case 'account':
          return await this.toBufferAccount(A, h);
        default:
          throw new Error('Unexpected seed: '.concat(A));
      }
    }
    toBufferConst(A) {
      return this.toBufferValue('bytes', A.value);
    }
    async toBufferArg(A) {
      const [h, ...m] = A.path.split('.'),
        g = this._idlIx.args.findIndex((N) => N.name === h);
      if (g === -1) throw new Error('Unable to find argument for seed: '.concat(h));
      const R = m.reduce((N, P) => (N != null ? N : {})[P], this._args[g]);
      if (R === void 0) return;
      const w = this.getType(this._idlIx.args[g].type, m);
      return this.toBufferValue(w, R);
    }
    async toBufferAccount(A, h = []) {
      const [m, ...g] = A.path.split('.'),
        R = this.get([...h, m]);
      if (!R) return;
      if (!g.length) return this.toBufferValue('pubkey', R);
      if (!A.account)
        throw new Error('Seed account is required in order to resolve type: '.concat(A.path));
      let N = await this._accountStore.fetchAccount({ publicKey: R, name: A.account }),
        P = g;
      for (; P.length > 0; ) (N = N[P[0]]), (P = P.slice(1));
      if (N === void 0) return;
      const I = this.getType({ defined: { name: A.account } }, g);
      return this.toBufferValue(I, N);
    }
    toBufferValue(A, h) {
      switch (A) {
        case 'u8':
        case 'i8':
          return ie.Buffer.from([h]);
        case 'u16':
        case 'i16':
          return new e.default(h).toArrayLike(ie.Buffer, 'le', 2);
        case 'u32':
        case 'i32':
          return new e.default(h).toArrayLike(ie.Buffer, 'le', 4);
        case 'u64':
        case 'i64':
          return new e.default(h).toArrayLike(ie.Buffer, 'le', 8);
        case 'u128':
        case 'i128':
          return new e.default(h).toArrayLike(ie.Buffer, 'le', 16);
        case 'u256':
        case 'i256':
          return new e.default(h).toArrayLike(ie.Buffer, 'le', 32);
        case 'string':
          return ie.Buffer.from(h);
        case 'pubkey':
          return h.toBuffer();
        case 'bytes':
          return ie.Buffer.from(h);
        default:
          if (A != null && A.array) return ie.Buffer.from(h);
          throw new Error('Unexpected seed type: '.concat(A));
      }
    }
    getType(A, h = []) {
      var m;
      const g = (m = A == null ? void 0 : A.defined) === null || m === void 0 ? void 0 : m.name;
      if (g) {
        if (g === 'tokenAccount')
          switch (h.at(0)) {
            case 'mint':
            case 'owner':
              return 'pubkey';
            case 'amount':
            case 'delagatedAmount':
              return 'u64';
            default:
              throw new Error('Unknown token account path: '.concat(h));
          }
        const R = this._idlTypes.find((B) => B.name === g);
        if (!R) throw new Error('Type not found: '.concat(g));
        const [w, ...N] = h,
          I = R.type.fields.find((B) => B.name === w);
        if (!I) throw new Error('Field not found: '.concat(w));
        return this.getType(I.type, N);
      }
      return A;
    }
  }
  cn.AccountsResolver = p;
  class a {
    constructor(A, h, m) {
      (this._provider = A),
        (this._cache = new Map()),
        (this._idls = {}),
        (this._idls[m.toBase58()] = h);
    }
    async fetchAccount({ publicKey: A, name: h }) {
      const m = A.toBase58();
      if (!this._cache.has(m)) {
        const g = await this._provider.connection.getAccountInfo(A);
        if (g === null) throw new Error('Account not found: '.concat(m));
        if (h === 'tokenAccount') {
          const R = (0, o.decodeTokenAccount)(g.data);
          this._cache.set(m, R);
        } else {
          const R = await this.getAccountsNs(g.owner);
          if (R) {
            const w = Object.values(R)[0];
            if (w) {
              const N = w.coder.accounts.decodeAny(g.data);
              this._cache.set(m, N);
            }
          }
        }
      }
      return this._cache.get(m);
    }
    async getAccountsNs(A) {
      const h = A.toBase58();
      if (!this._idls[h]) {
        const m = await i.Program.fetchIdl(A, this._provider);
        if (m) {
          const g = new i.Program(m, this._provider);
          this._idls[h] = g.account;
        }
      }
      return this._idls[h];
    }
  }
  return cn;
}
var Uc;
function Qo() {
  if (Uc) return gt;
  (Uc = 1),
    Object.defineProperty(gt, '__esModule', { value: !0 }),
    (gt.MethodsBuilder =
      gt.flattenPartialAccounts =
      gt.isPartialAccounts =
      gt.MethodsBuilderFactory =
        void 0);
  const t = $R(),
    e = We;
  class n {
    static build(d, p, a, _, A, h, m, g, R, w, N) {
      return (...P) => new i(P, _, A, h, m, g, d, p, a, R, w, N);
    }
  }
  gt.MethodsBuilderFactory = n;
  function r(c) {
    return typeof c == 'object' && c !== null && !('_bn' in c);
  }
  gt.isPartialAccounts = r;
  function o(c, d) {
    const p = {};
    for (const a in c) {
      const _ = c[a];
      if (_ === null) {
        if (d)
          throw new Error(
            'Failed to resolve optionals due to IDL type mismatch with input accounts!'
          );
        continue;
      }
      p[a] = r(_) ? o(_, !0) : (0, e.translateAddress)(_);
    }
    return p;
  }
  gt.flattenPartialAccounts = o;
  class i {
    constructor(d, p, a, _, A, h, m, g, R, w, N, P) {
      (this._args = d),
        (this._ixFn = p),
        (this._txFn = a),
        (this._rpcFn = _),
        (this._simulateFn = A),
        (this._viewFn = h),
        (this._accounts = {}),
        (this._remainingAccounts = []),
        (this._signers = []),
        (this._preInstructions = []),
        (this._postInstructions = []),
        (this._resolveAccounts = !0),
        (this._accountsResolver = new t.AccountsResolver(d, this._accounts, m, g, R, w, N, P));
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
    preInstructions(d, p = !1) {
      return (
        p
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
  return (gt.MethodsBuilder = i), gt;
}
var Tu = {};
Object.defineProperty(Tu, '__esModule', { value: !0 });
const HR = xt,
  jR = Xt;
class GR {
  static build(e, n, r, o) {
    const i = n.accounts.find((p) => p.writable),
      c = !!n.returns;
    return i || !c
      ? void 0
      : async (...p) => {
          let a = await r(...p);
          const _ = 'Program return: '.concat(e, ' ');
          let A = a.raw.find((R) => R.startsWith(_));
          if (!A) throw new Error('View expected return log');
          let h = (0, jR.decode)(A.slice(_.length)),
            m = n.returns;
          if (!m) throw new Error('View expected return type');
          return HR.IdlCoder.fieldLayout({ type: m }, o.types).decode(h);
        };
  }
}
Tu.default = GR;
var Lc;
function $c() {
  return (
    Lc ||
      ((Lc = 1),
      (function (t) {
        var e =
          (b && b.__importDefault) ||
          function (m) {
            return m && m.__esModule ? m : { default: m };
          };
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.MethodsBuilderFactory = t.AccountClient = void 0);
        const n = e(gu),
          r = e(Au),
          o = e(Ou),
          i = e($n),
          c = e(Ru),
          d = We,
          p = Qo(),
          a = e(Tu);
        var _ = $n;
        Object.defineProperty(t, 'AccountClient', {
          enumerable: !0,
          get: function () {
            return _.AccountClient;
          },
        });
        var A = Qo();
        Object.defineProperty(t, 'MethodsBuilderFactory', {
          enumerable: !0,
          get: function () {
            return A.MethodsBuilderFactory;
          },
        });
        class h {
          static build(g, R, w, N, P) {
            const I = {},
              B = {},
              F = {},
              $ = {},
              T = {},
              y = {},
              v = (0, d.parseIdlErrors)(g),
              M = g.accounts ? i.default.build(g, R, w, N) : {};
            return (
              g.instructions.forEach((G) => {
                const J = n.default.build(G, (V, te) => R.instruction.encode(V, te), w),
                  z = r.default.build(G, J),
                  S = o.default.build(G, z, v, N),
                  k = c.default.build(G, z, v, N, R, w, g),
                  q = a.default.build(w, G, k, g),
                  ee = p.MethodsBuilderFactory.build(
                    N,
                    w,
                    G,
                    J,
                    z,
                    S,
                    k,
                    q,
                    M,
                    g.types || [],
                    P == null ? void 0 : P(G)
                  ),
                  H = G.name;
                (B[H] = J), (F[H] = z), (I[H] = S), ($[H] = k), (T[H] = ee), q && (y[H] = q);
              }),
              [I, B, F, M, $, T, y]
            );
          }
        }
        t.default = h;
      })(Io)),
    Io
  );
}
var Hc;
function Ui() {
  return (
    Hc ||
      ((Hc = 1),
      (function (t) {
        var e =
            (b && b.__createBinding) ||
            (Object.create
              ? function (m, g, R, w) {
                  w === void 0 && (w = R);
                  var N = Object.getOwnPropertyDescriptor(g, R);
                  (!N || ('get' in N ? !g.__esModule : N.writable || N.configurable)) &&
                    (N = {
                      enumerable: !0,
                      get: function () {
                        return g[R];
                      },
                    }),
                    Object.defineProperty(m, w, N);
                }
              : function (m, g, R, w) {
                  w === void 0 && (w = R), (m[w] = g[R]);
                }),
          n =
            (b && b.__exportStar) ||
            function (m, g) {
              for (var R in m)
                R !== 'default' && !Object.prototype.hasOwnProperty.call(g, R) && e(g, m, R);
            },
          r =
            (b && b.__importDefault) ||
            function (m) {
              return m && m.__esModule ? m : { default: m };
            };
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Program = void 0);
        const o = zO,
          i = bi(),
          c = Ue,
          d = ki(),
          p = r($c()),
          a = lt,
          _ = Zt,
          A = We;
        n(We, t), n(en, t), n(Zt, t), n($c(), t);
        class h {
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
          constructor(g, R = (0, i.getProvider)(), w, N) {
            const P = (0, c.convertIdlToCamelCase)(g);
            (this._idl = P),
              (this._rawIdl = g),
              (this._provider = R),
              (this._programId = (0, A.translateAddress)(g.address)),
              (this._coder = w != null ? w : new d.BorshCoder(P)),
              (this._events = new _.EventManager(this._programId, R, this._coder));
            const [I, B, F, $, T, y, v] = p.default.build(P, this._coder, this._programId, R, N);
            (this.rpc = I),
              (this.instruction = B),
              (this.transaction = F),
              (this.account = $),
              (this.simulate = T),
              (this.methods = y),
              (this.views = v);
          }
          static async at(g, R) {
            const w = (0, A.translateAddress)(g),
              N = await h.fetchIdl(w, R);
            if (!N) throw new Error('IDL not found for program: '.concat(g.toString()));
            return new h(N, R);
          }
          static async fetchIdl(g, R) {
            R = R != null ? R : (0, i.getProvider)();
            const w = (0, A.translateAddress)(g),
              N = await (0, c.idlAddress)(w),
              P = await R.connection.getAccountInfo(N);
            if (!P) return null;
            let I = (0, c.decodeIdlAccount)(P.data.slice(8));
            const B = (0, o.inflate)(I.data);
            return JSON.parse(a.utf8.decode(B));
          }
          addEventListener(g, R) {
            return this._events.addEventListener(g, R);
          }
          async removeEventListener(g) {
            return await this._events.removeEventListener(g);
          }
        }
        t.Program = h;
      })(Eo)),
    Eo
  );
}
var Li = {},
  Ff = {};
(function (t) {
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.IDL = t.coder = t.program = t.SYSTEM_PROGRAM_ID = void 0);
  const e = _e,
    n = Ui(),
    r = jr;
  t.SYSTEM_PROGRAM_ID = new e.PublicKey('11111111111111111111111111111111');
  function o(c) {
    return new n.Program(t.IDL, c, i());
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
})(Ff);
Object.defineProperty(Li, '__esModule', { value: !0 });
Li.Native = void 0;
const FR = Ff;
class KR {
  static system(e) {
    return (0, FR.program)(e);
  }
}
Li.Native = KR;
var ci = {},
  Co,
  jc;
function VR() {
  return (
    jc ||
      ((jc = 1),
      (Co = (function () {
        function t(r, o) {
          function i() {
            this.constructor = r;
          }
          (i.prototype = o.prototype), (r.prototype = new i());
        }
        function e(r, o, i, c, d, p) {
          (this.message = r),
            (this.expected = o),
            (this.found = i),
            (this.offset = c),
            (this.line = d),
            (this.column = p),
            (this.name = 'SyntaxError');
        }
        t(e, Error);
        function n(r) {
          var o = arguments.length > 1 ? arguments[1] : {},
            i = {},
            c = { start: xu },
            d = xu,
            p = function () {
              return tc;
            },
            a = i,
            _ = '#',
            A = { type: 'literal', value: '#', description: '"#"' },
            h = void 0,
            m = { type: 'any', description: 'any character' },
            g = '[',
            R = { type: 'literal', value: '[', description: '"["' },
            w = ']',
            N = { type: 'literal', value: ']', description: '"]"' },
            P = function (s) {
              ao(Fe('ObjectPath', s, je, Ge));
            },
            I = function (s) {
              ao(Fe('ArrayPath', s, je, Ge));
            },
            B = function (s, f) {
              return s.concat(f);
            },
            F = function (s) {
              return [s];
            },
            $ = function (s) {
              return s;
            },
            T = '.',
            y = { type: 'literal', value: '.', description: '"."' },
            v = '=',
            M = { type: 'literal', value: '=', description: '"="' },
            G = function (s, f) {
              ao(Fe('Assign', f, je, Ge, s));
            },
            J = function (s) {
              return s.join('');
            },
            z = function (s) {
              return s.value;
            },
            S = '"""',
            k = { type: 'literal', value: '"""', description: '"\\"\\"\\""' },
            q = null,
            ee = function (s) {
              return Fe('String', s.join(''), je, Ge);
            },
            H = '"',
            V = { type: 'literal', value: '"', description: '"\\""' },
            te = "'''",
            se = { type: 'literal', value: "'''", description: "\"'''\"" },
            ce = "'",
            ue = { type: 'literal', value: "'", description: '"\'"' },
            pe = function (s) {
              return s;
            },
            ge = function (s) {
              return s;
            },
            Ae = '\\',
            Ne = { type: 'literal', value: '\\', description: '"\\\\"' },
            ve = function () {
              return '';
            },
            Tt = 'e',
            Ut = { type: 'literal', value: 'e', description: '"e"' },
            Rn = 'E',
            yn = { type: 'literal', value: 'E', description: '"E"' },
            Tn = function (s, f) {
              return Fe('Float', parseFloat(s + 'e' + f), je, Ge);
            },
            Et = function (s) {
              return Fe('Float', parseFloat(s), je, Ge);
            },
            tn = '+',
            zn = { type: 'literal', value: '+', description: '"+"' },
            Gr = function (s) {
              return s.join('');
            },
            Lt = '-',
            Rt = { type: 'literal', value: '-', description: '"-"' },
            Fr = function (s) {
              return '-' + s.join('');
            },
            ji = function (s) {
              return Fe('Integer', parseInt(s, 10), je, Ge);
            },
            Kr = 'true',
            Gi = { type: 'literal', value: 'true', description: '"true"' },
            Fi = function () {
              return Fe('Boolean', !0, je, Ge);
            },
            Vr = 'false',
            Ki = { type: 'literal', value: 'false', description: '"false"' },
            Vi = function () {
              return Fe('Boolean', !1, je, Ge);
            },
            Wi = function () {
              return Fe('Array', [], je, Ge);
            },
            qi = function (s) {
              return Fe('Array', s ? [s] : [], je, Ge);
            },
            zi = function (s) {
              return Fe('Array', s, je, Ge);
            },
            Yi = function (s, f) {
              return Fe('Array', s.concat(f), je, Ge);
            },
            Wr = function (s) {
              return s;
            },
            qr = ',',
            Yn = { type: 'literal', value: ',', description: '","' },
            Xi = '{',
            zr = { type: 'literal', value: '{', description: '"{"' },
            Ji = '}',
            Zi = { type: 'literal', value: '}', description: '"}"' },
            Qi = function (s) {
              return Fe('InlineTable', s, je, Ge);
            },
            It = function (s, f) {
              return Fe('InlineTableValue', f, je, Ge, s);
            },
            eo = function (s) {
              return '.' + s;
            },
            to = function (s) {
              return s.join('');
            },
            nn = ':',
            rn = { type: 'literal', value: ':', description: '":"' },
            D = function (s) {
              return s.join('');
            },
            j = 'T',
            K = { type: 'literal', value: 'T', description: '"T"' },
            re = 'Z',
            de = { type: 'literal', value: 'Z', description: '"Z"' },
            ye = function (s, f) {
              return Fe('Date', new Date(s + 'T' + f + 'Z'), je, Ge);
            },
            ze = function (s, f) {
              return Fe('Date', new Date(s + 'T' + f), je, Ge);
            },
            on = /^[ \t]/,
            En = { type: 'class', value: '[ \\t]', description: '[ \\t]' },
            $t = '\n',
            wu = { type: 'literal', value: '\n', description: '"\\n"' },
            Xf = '\r',
            Jf = { type: 'literal', value: '\r', description: '"\\r"' },
            Zf = /^[0-9a-f]/i,
            Qf = { type: 'class', value: '[0-9a-f]i', description: '[0-9a-f]i' },
            ep = /^[0-9]/,
            tp = { type: 'class', value: '[0-9]', description: '[0-9]' },
            np = '_',
            rp = { type: 'literal', value: '_', description: '"_"' },
            ip = function () {
              return '';
            },
            op = /^[A-Za-z0-9_\-]/,
            sp = { type: 'class', value: '[A-Za-z0-9_\\-]', description: '[A-Za-z0-9_\\-]' },
            ap = function (s) {
              return s.join('');
            },
            bu = '\\"',
            up = { type: 'literal', value: '\\"', description: '"\\\\\\""' },
            cp = function () {
              return '"';
            },
            Nu = '\\\\',
            lp = { type: 'literal', value: '\\\\', description: '"\\\\\\\\"' },
            dp = function () {
              return '\\';
            },
            Cu = '\\b',
            fp = { type: 'literal', value: '\\b', description: '"\\\\b"' },
            pp = function () {
              return '\b';
            },
            Su = '\\t',
            _p = { type: 'literal', value: '\\t', description: '"\\\\t"' },
            hp = function () {
              return '	';
            },
            vu = '\\n',
            mp = { type: 'literal', value: '\\n', description: '"\\\\n"' },
            gp = function () {
              return '\n';
            },
            Pu = '\\f',
            Ap = { type: 'literal', value: '\\f', description: '"\\\\f"' },
            Op = function () {
              return '\f';
            },
            Mu = '\\r',
            Rp = { type: 'literal', value: '\\r', description: '"\\\\r"' },
            yp = function () {
              return '\r';
            },
            ku = '\\U',
            Tp = { type: 'literal', value: '\\U', description: '"\\\\U"' },
            Du = function (s) {
              return Fp(s.join(''));
            },
            Bu = '\\u',
            Ep = { type: 'literal', value: '\\u', description: '"\\\\u"' },
            l = 0,
            fe = 0,
            Xn = 0,
            no = { line: 1, column: 1, seenCR: !1 },
            Yr = 0,
            ro = [],
            X = 0,
            Z = {},
            Xr;
          if ('startRule' in o) {
            if (!(o.startRule in c))
              throw new Error('Can\'t start parsing from rule "' + o.startRule + '".');
            d = c[o.startRule];
          }
          function je() {
            return io(fe).line;
          }
          function Ge() {
            return io(fe).column;
          }
          function io(s) {
            function f(O, E, C) {
              var x, W;
              for (x = E; x < C; x++)
                (W = r.charAt(x)),
                  W === '\n'
                    ? (O.seenCR || O.line++, (O.column = 1), (O.seenCR = !1))
                    : W === '\r' || W === '\u2028' || W === '\u2029'
                      ? (O.line++, (O.column = 1), (O.seenCR = !0))
                      : (O.column++, (O.seenCR = !1));
            }
            return (
              Xn !== s &&
                (Xn > s && ((Xn = 0), (no = { line: 1, column: 1, seenCR: !1 })),
                f(no, Xn, s),
                (Xn = s)),
              no
            );
          }
          function ne(s) {
            l < Yr || (l > Yr && ((Yr = l), (ro = [])), ro.push(s));
          }
          function Ip(s, f, O) {
            function E(ae) {
              var he = 1;
              for (
                ae.sort(function (Ie, Te) {
                  return Ie.description < Te.description
                    ? -1
                    : Ie.description > Te.description
                      ? 1
                      : 0;
                });
                he < ae.length;

              )
                ae[he - 1] === ae[he] ? ae.splice(he, 1) : he++;
            }
            function C(ae, he) {
              function Ie(wn) {
                function Ht(Je) {
                  return Je.charCodeAt(0).toString(16).toUpperCase();
                }
                return wn
                  .replace(/\\/g, '\\\\')
                  .replace(/"/g, '\\"')
                  .replace(/\x08/g, '\\b')
                  .replace(/\t/g, '\\t')
                  .replace(/\n/g, '\\n')
                  .replace(/\f/g, '\\f')
                  .replace(/\r/g, '\\r')
                  .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (Je) {
                    return '\\x0' + Ht(Je);
                  })
                  .replace(/[\x10-\x1F\x80-\xFF]/g, function (Je) {
                    return '\\x' + Ht(Je);
                  })
                  .replace(/[\u0180-\u0FFF]/g, function (Je) {
                    return '\\u0' + Ht(Je);
                  })
                  .replace(/[\u1080-\uFFFF]/g, function (Je) {
                    return '\\u' + Ht(Je);
                  });
              }
              var Te = new Array(ae.length),
                Me,
                Be,
                Xe;
              for (Xe = 0; Xe < ae.length; Xe++) Te[Xe] = ae[Xe].description;
              return (
                (Me =
                  ae.length > 1 ? Te.slice(0, -1).join(', ') + ' or ' + Te[ae.length - 1] : Te[0]),
                (Be = he ? '"' + Ie(he) + '"' : 'end of input'),
                'Expected ' + Me + ' but ' + Be + ' found.'
              );
            }
            var x = io(O),
              W = O < r.length ? r.charAt(O) : null;
            return f !== null && E(f), new e(C(f, W), f, W, O, x.line, x.column);
          }
          function xu() {
            var s,
              f,
              O,
              E = l * 49 + 0,
              C = Z[E];
            if (C) return (l = C.nextPos), C.result;
            for (s = l, f = [], O = Uu(); O !== i; ) f.push(O), (O = Uu());
            return f !== i && ((fe = s), (f = p())), (s = f), (Z[E] = { nextPos: l, result: s }), s;
          }
          function Uu() {
            var s,
              f,
              O,
              E,
              C,
              x,
              W,
              ae = l * 49 + 1,
              he = Z[ae];
            if (he) return (l = he.nextPos), he.result;
            for (s = l, f = [], O = le(); O !== i; ) f.push(O), (O = le());
            if (f !== i)
              if (((O = wp()), O !== i)) {
                for (E = [], C = le(); C !== i; ) E.push(C), (C = le());
                if (E !== i) {
                  for (C = [], x = Jr(); x !== i; ) C.push(x), (x = Jr());
                  if (C !== i) {
                    if (((x = []), (W = it()), W !== i)) for (; W !== i; ) x.push(W), (W = it());
                    else x = a;
                    x === i && (x = Qr()),
                      x !== i ? ((f = [f, O, E, C, x]), (s = f)) : ((l = s), (s = a));
                  } else (l = s), (s = a);
                } else (l = s), (s = a);
              } else (l = s), (s = a);
            else (l = s), (s = a);
            if (s === i) {
              if (((s = l), (f = []), (O = le()), O !== i)) for (; O !== i; ) f.push(O), (O = le());
              else f = a;
              if (f !== i) {
                if (((O = []), (E = it()), E !== i)) for (; E !== i; ) O.push(E), (E = it());
                else O = a;
                O === i && (O = Qr()), O !== i ? ((f = [f, O]), (s = f)) : ((l = s), (s = a));
              } else (l = s), (s = a);
              s === i && (s = it());
            }
            return (Z[ae] = { nextPos: l, result: s }), s;
          }
          function wp() {
            var s,
              f = l * 49 + 2,
              O = Z[f];
            return O
              ? ((l = O.nextPos), O.result)
              : ((s = Jr()),
                s === i && ((s = bp()), s === i && ((s = Np()), s === i && (s = Cp()))),
                (Z[f] = { nextPos: l, result: s }),
                s);
          }
          function Jr() {
            var s,
              f,
              O,
              E,
              C,
              x,
              W = l * 49 + 3,
              ae = Z[W];
            if (ae) return (l = ae.nextPos), ae.result;
            if (
              ((s = l),
              r.charCodeAt(l) === 35 ? ((f = _), l++) : ((f = i), X === 0 && ne(A)),
              f !== i)
            ) {
              for (
                O = [],
                  E = l,
                  C = l,
                  X++,
                  x = it(),
                  x === i && (x = Qr()),
                  X--,
                  x === i ? (C = h) : ((l = C), (C = a)),
                  C !== i
                    ? (r.length > l ? ((x = r.charAt(l)), l++) : ((x = i), X === 0 && ne(m)),
                      x !== i ? ((C = [C, x]), (E = C)) : ((l = E), (E = a)))
                    : ((l = E), (E = a));
                E !== i;

              )
                O.push(E),
                  (E = l),
                  (C = l),
                  X++,
                  (x = it()),
                  x === i && (x = Qr()),
                  X--,
                  x === i ? (C = h) : ((l = C), (C = a)),
                  C !== i
                    ? (r.length > l ? ((x = r.charAt(l)), l++) : ((x = i), X === 0 && ne(m)),
                      x !== i ? ((C = [C, x]), (E = C)) : ((l = E), (E = a)))
                    : ((l = E), (E = a));
              O !== i ? ((f = [f, O]), (s = f)) : ((l = s), (s = a));
            } else (l = s), (s = a);
            return (Z[W] = { nextPos: l, result: s }), s;
          }
          function bp() {
            var s,
              f,
              O,
              E,
              C,
              x,
              W = l * 49 + 4,
              ae = Z[W];
            if (ae) return (l = ae.nextPos), ae.result;
            if (
              ((s = l),
              r.charCodeAt(l) === 91 ? ((f = g), l++) : ((f = i), X === 0 && ne(R)),
              f !== i)
            ) {
              for (O = [], E = le(); E !== i; ) O.push(E), (E = le());
              if (O !== i)
                if (((E = Lu()), E !== i)) {
                  for (C = [], x = le(); x !== i; ) C.push(x), (x = le());
                  C !== i
                    ? (r.charCodeAt(l) === 93 ? ((x = w), l++) : ((x = i), X === 0 && ne(N)),
                      x !== i ? ((fe = s), (f = P(E)), (s = f)) : ((l = s), (s = a)))
                    : ((l = s), (s = a));
                } else (l = s), (s = a);
              else (l = s), (s = a);
            } else (l = s), (s = a);
            return (Z[W] = { nextPos: l, result: s }), s;
          }
          function Np() {
            var s,
              f,
              O,
              E,
              C,
              x,
              W,
              ae,
              he = l * 49 + 5,
              Ie = Z[he];
            if (Ie) return (l = Ie.nextPos), Ie.result;
            if (
              ((s = l),
              r.charCodeAt(l) === 91 ? ((f = g), l++) : ((f = i), X === 0 && ne(R)),
              f !== i)
            )
              if (
                (r.charCodeAt(l) === 91 ? ((O = g), l++) : ((O = i), X === 0 && ne(R)), O !== i)
              ) {
                for (E = [], C = le(); C !== i; ) E.push(C), (C = le());
                if (E !== i)
                  if (((C = Lu()), C !== i)) {
                    for (x = [], W = le(); W !== i; ) x.push(W), (W = le());
                    x !== i
                      ? (r.charCodeAt(l) === 93 ? ((W = w), l++) : ((W = i), X === 0 && ne(N)),
                        W !== i
                          ? (r.charCodeAt(l) === 93
                              ? ((ae = w), l++)
                              : ((ae = i), X === 0 && ne(N)),
                            ae !== i ? ((fe = s), (f = I(C)), (s = f)) : ((l = s), (s = a)))
                          : ((l = s), (s = a)))
                      : ((l = s), (s = a));
                  } else (l = s), (s = a);
                else (l = s), (s = a);
              } else (l = s), (s = a);
            else (l = s), (s = a);
            return (Z[he] = { nextPos: l, result: s }), s;
          }
          function Lu() {
            var s,
              f,
              O,
              E = l * 49 + 6,
              C = Z[E];
            if (C) return (l = C.nextPos), C.result;
            if (((s = l), (f = []), (O = Hu()), O !== i)) for (; O !== i; ) f.push(O), (O = Hu());
            else f = a;
            return (
              f !== i
                ? ((O = $u()), O !== i ? ((fe = s), (f = B(f, O)), (s = f)) : ((l = s), (s = a)))
                : ((l = s), (s = a)),
              s === i && ((s = l), (f = $u()), f !== i && ((fe = s), (f = F(f))), (s = f)),
              (Z[E] = { nextPos: l, result: s }),
              s
            );
          }
          function $u() {
            var s,
              f,
              O,
              E,
              C,
              x = l * 49 + 7,
              W = Z[x];
            if (W) return (l = W.nextPos), W.result;
            for (s = l, f = [], O = le(); O !== i; ) f.push(O), (O = le());
            if (f !== i)
              if (((O = Jn()), O !== i)) {
                for (E = [], C = le(); C !== i; ) E.push(C), (C = le());
                E !== i ? ((fe = s), (f = $(O)), (s = f)) : ((l = s), (s = a));
              } else (l = s), (s = a);
            else (l = s), (s = a);
            if (s === i) {
              for (s = l, f = [], O = le(); O !== i; ) f.push(O), (O = le());
              if (f !== i)
                if (((O = oo()), O !== i)) {
                  for (E = [], C = le(); C !== i; ) E.push(C), (C = le());
                  E !== i ? ((fe = s), (f = $(O)), (s = f)) : ((l = s), (s = a));
                } else (l = s), (s = a);
              else (l = s), (s = a);
            }
            return (Z[x] = { nextPos: l, result: s }), s;
          }
          function Hu() {
            var s,
              f,
              O,
              E,
              C,
              x,
              W,
              ae = l * 49 + 8,
              he = Z[ae];
            if (he) return (l = he.nextPos), he.result;
            for (s = l, f = [], O = le(); O !== i; ) f.push(O), (O = le());
            if (f !== i)
              if (((O = Jn()), O !== i)) {
                for (E = [], C = le(); C !== i; ) E.push(C), (C = le());
                if (E !== i)
                  if (
                    (r.charCodeAt(l) === 46 ? ((C = T), l++) : ((C = i), X === 0 && ne(y)), C !== i)
                  ) {
                    for (x = [], W = le(); W !== i; ) x.push(W), (W = le());
                    x !== i ? ((fe = s), (f = $(O)), (s = f)) : ((l = s), (s = a));
                  } else (l = s), (s = a);
                else (l = s), (s = a);
              } else (l = s), (s = a);
            else (l = s), (s = a);
            if (s === i) {
              for (s = l, f = [], O = le(); O !== i; ) f.push(O), (O = le());
              if (f !== i)
                if (((O = oo()), O !== i)) {
                  for (E = [], C = le(); C !== i; ) E.push(C), (C = le());
                  if (E !== i)
                    if (
                      (r.charCodeAt(l) === 46 ? ((C = T), l++) : ((C = i), X === 0 && ne(y)),
                      C !== i)
                    ) {
                      for (x = [], W = le(); W !== i; ) x.push(W), (W = le());
                      x !== i ? ((fe = s), (f = $(O)), (s = f)) : ((l = s), (s = a));
                    } else (l = s), (s = a);
                  else (l = s), (s = a);
                } else (l = s), (s = a);
              else (l = s), (s = a);
            }
            return (Z[ae] = { nextPos: l, result: s }), s;
          }
          function Cp() {
            var s,
              f,
              O,
              E,
              C,
              x,
              W = l * 49 + 9,
              ae = Z[W];
            if (ae) return (l = ae.nextPos), ae.result;
            if (((s = l), (f = Jn()), f !== i)) {
              for (O = [], E = le(); E !== i; ) O.push(E), (E = le());
              if (O !== i)
                if (
                  (r.charCodeAt(l) === 61 ? ((E = v), l++) : ((E = i), X === 0 && ne(M)), E !== i)
                ) {
                  for (C = [], x = le(); x !== i; ) C.push(x), (x = le());
                  C !== i
                    ? ((x = In()),
                      x !== i ? ((fe = s), (f = G(f, x)), (s = f)) : ((l = s), (s = a)))
                    : ((l = s), (s = a));
                } else (l = s), (s = a);
              else (l = s), (s = a);
            } else (l = s), (s = a);
            if (s === i)
              if (((s = l), (f = oo()), f !== i)) {
                for (O = [], E = le(); E !== i; ) O.push(E), (E = le());
                if (O !== i)
                  if (
                    (r.charCodeAt(l) === 61 ? ((E = v), l++) : ((E = i), X === 0 && ne(M)), E !== i)
                  ) {
                    for (C = [], x = le(); x !== i; ) C.push(x), (x = le());
                    C !== i
                      ? ((x = In()),
                        x !== i ? ((fe = s), (f = G(f, x)), (s = f)) : ((l = s), (s = a)))
                      : ((l = s), (s = a));
                  } else (l = s), (s = a);
                else (l = s), (s = a);
              } else (l = s), (s = a);
            return (Z[W] = { nextPos: l, result: s }), s;
          }
          function Jn() {
            var s,
              f,
              O,
              E = l * 49 + 10,
              C = Z[E];
            if (C) return (l = C.nextPos), C.result;
            if (((s = l), (f = []), (O = Qu()), O !== i)) for (; O !== i; ) f.push(O), (O = Qu());
            else f = a;
            return (
              f !== i && ((fe = s), (f = J(f))), (s = f), (Z[E] = { nextPos: l, result: s }), s
            );
          }
          function oo() {
            var s,
              f,
              O = l * 49 + 11,
              E = Z[O];
            return E
              ? ((l = E.nextPos), E.result)
              : ((s = l),
                (f = ju()),
                f !== i && ((fe = s), (f = z(f))),
                (s = f),
                s === i && ((s = l), (f = Gu()), f !== i && ((fe = s), (f = z(f))), (s = f)),
                (Z[O] = { nextPos: l, result: s }),
                s);
          }
          function In() {
            var s,
              f = l * 49 + 12,
              O = Z[f];
            return O
              ? ((l = O.nextPos), O.result)
              : ((s = Sp()),
                s === i &&
                  ((s = Hp()),
                  s === i &&
                    ((s = kp()),
                    s === i &&
                      ((s = Dp()),
                      s === i && ((s = Bp()), s === i && ((s = xp()), s === i && (s = Up())))))),
                (Z[f] = { nextPos: l, result: s }),
                s);
          }
          function Sp() {
            var s,
              f = l * 49 + 13,
              O = Z[f];
            return O
              ? ((l = O.nextPos), O.result)
              : ((s = vp()),
                s === i && ((s = ju()), s === i && ((s = Pp()), s === i && (s = Gu()))),
                (Z[f] = { nextPos: l, result: s }),
                s);
          }
          function vp() {
            var s,
              f,
              O,
              E,
              C,
              x = l * 49 + 14,
              W = Z[x];
            if (W) return (l = W.nextPos), W.result;
            if (
              ((s = l),
              r.substr(l, 3) === S ? ((f = S), (l += 3)) : ((f = i), X === 0 && ne(k)),
              f !== i)
            )
              if (((O = it()), O === i && (O = q), O !== i)) {
                for (E = [], C = Vu(); C !== i; ) E.push(C), (C = Vu());
                E !== i
                  ? (r.substr(l, 3) === S ? ((C = S), (l += 3)) : ((C = i), X === 0 && ne(k)),
                    C !== i ? ((fe = s), (f = ee(E)), (s = f)) : ((l = s), (s = a)))
                  : ((l = s), (s = a));
              } else (l = s), (s = a);
            else (l = s), (s = a);
            return (Z[x] = { nextPos: l, result: s }), s;
          }
          function ju() {
            var s,
              f,
              O,
              E,
              C = l * 49 + 15,
              x = Z[C];
            if (x) return (l = x.nextPos), x.result;
            if (
              ((s = l),
              r.charCodeAt(l) === 34 ? ((f = H), l++) : ((f = i), X === 0 && ne(V)),
              f !== i)
            ) {
              for (O = [], E = Fu(); E !== i; ) O.push(E), (E = Fu());
              O !== i
                ? (r.charCodeAt(l) === 34 ? ((E = H), l++) : ((E = i), X === 0 && ne(V)),
                  E !== i ? ((fe = s), (f = ee(O)), (s = f)) : ((l = s), (s = a)))
                : ((l = s), (s = a));
            } else (l = s), (s = a);
            return (Z[C] = { nextPos: l, result: s }), s;
          }
          function Pp() {
            var s,
              f,
              O,
              E,
              C,
              x = l * 49 + 16,
              W = Z[x];
            if (W) return (l = W.nextPos), W.result;
            if (
              ((s = l),
              r.substr(l, 3) === te ? ((f = te), (l += 3)) : ((f = i), X === 0 && ne(se)),
              f !== i)
            )
              if (((O = it()), O === i && (O = q), O !== i)) {
                for (E = [], C = Wu(); C !== i; ) E.push(C), (C = Wu());
                E !== i
                  ? (r.substr(l, 3) === te ? ((C = te), (l += 3)) : ((C = i), X === 0 && ne(se)),
                    C !== i ? ((fe = s), (f = ee(E)), (s = f)) : ((l = s), (s = a)))
                  : ((l = s), (s = a));
              } else (l = s), (s = a);
            else (l = s), (s = a);
            return (Z[x] = { nextPos: l, result: s }), s;
          }
          function Gu() {
            var s,
              f,
              O,
              E,
              C = l * 49 + 17,
              x = Z[C];
            if (x) return (l = x.nextPos), x.result;
            if (
              ((s = l),
              r.charCodeAt(l) === 39 ? ((f = ce), l++) : ((f = i), X === 0 && ne(ue)),
              f !== i)
            ) {
              for (O = [], E = Ku(); E !== i; ) O.push(E), (E = Ku());
              O !== i
                ? (r.charCodeAt(l) === 39 ? ((E = ce), l++) : ((E = i), X === 0 && ne(ue)),
                  E !== i ? ((fe = s), (f = ee(O)), (s = f)) : ((l = s), (s = a)))
                : ((l = s), (s = a));
            } else (l = s), (s = a);
            return (Z[C] = { nextPos: l, result: s }), s;
          }
          function Fu() {
            var s,
              f,
              O,
              E = l * 49 + 18,
              C = Z[E];
            return C
              ? ((l = C.nextPos), C.result)
              : ((s = ec()),
                s === i &&
                  ((s = l),
                  (f = l),
                  X++,
                  r.charCodeAt(l) === 34 ? ((O = H), l++) : ((O = i), X === 0 && ne(V)),
                  X--,
                  O === i ? (f = h) : ((l = f), (f = a)),
                  f !== i
                    ? (r.length > l ? ((O = r.charAt(l)), l++) : ((O = i), X === 0 && ne(m)),
                      O !== i ? ((fe = s), (f = pe(O)), (s = f)) : ((l = s), (s = a)))
                    : ((l = s), (s = a))),
                (Z[E] = { nextPos: l, result: s }),
                s);
          }
          function Ku() {
            var s,
              f,
              O,
              E = l * 49 + 19,
              C = Z[E];
            return C
              ? ((l = C.nextPos), C.result)
              : ((s = l),
                (f = l),
                X++,
                r.charCodeAt(l) === 39 ? ((O = ce), l++) : ((O = i), X === 0 && ne(ue)),
                X--,
                O === i ? (f = h) : ((l = f), (f = a)),
                f !== i
                  ? (r.length > l ? ((O = r.charAt(l)), l++) : ((O = i), X === 0 && ne(m)),
                    O !== i ? ((fe = s), (f = pe(O)), (s = f)) : ((l = s), (s = a)))
                  : ((l = s), (s = a)),
                (Z[E] = { nextPos: l, result: s }),
                s);
          }
          function Vu() {
            var s,
              f,
              O,
              E = l * 49 + 20,
              C = Z[E];
            return C
              ? ((l = C.nextPos), C.result)
              : ((s = ec()),
                s === i &&
                  ((s = Mp()),
                  s === i &&
                    ((s = l),
                    (f = l),
                    X++,
                    r.substr(l, 3) === S ? ((O = S), (l += 3)) : ((O = i), X === 0 && ne(k)),
                    X--,
                    O === i ? (f = h) : ((l = f), (f = a)),
                    f !== i
                      ? (r.length > l ? ((O = r.charAt(l)), l++) : ((O = i), X === 0 && ne(m)),
                        O !== i ? ((fe = s), (f = ge(O)), (s = f)) : ((l = s), (s = a)))
                      : ((l = s), (s = a)))),
                (Z[E] = { nextPos: l, result: s }),
                s);
          }
          function Mp() {
            var s,
              f,
              O,
              E,
              C,
              x = l * 49 + 21,
              W = Z[x];
            if (W) return (l = W.nextPos), W.result;
            if (
              ((s = l),
              r.charCodeAt(l) === 92 ? ((f = Ae), l++) : ((f = i), X === 0 && ne(Ne)),
              f !== i)
            )
              if (((O = it()), O !== i)) {
                for (E = [], C = Zu(); C !== i; ) E.push(C), (C = Zu());
                E !== i ? ((fe = s), (f = ve()), (s = f)) : ((l = s), (s = a));
              } else (l = s), (s = a);
            else (l = s), (s = a);
            return (Z[x] = { nextPos: l, result: s }), s;
          }
          function Wu() {
            var s,
              f,
              O,
              E = l * 49 + 22,
              C = Z[E];
            return C
              ? ((l = C.nextPos), C.result)
              : ((s = l),
                (f = l),
                X++,
                r.substr(l, 3) === te ? ((O = te), (l += 3)) : ((O = i), X === 0 && ne(se)),
                X--,
                O === i ? (f = h) : ((l = f), (f = a)),
                f !== i
                  ? (r.length > l ? ((O = r.charAt(l)), l++) : ((O = i), X === 0 && ne(m)),
                    O !== i ? ((fe = s), (f = pe(O)), (s = f)) : ((l = s), (s = a)))
                  : ((l = s), (s = a)),
                (Z[E] = { nextPos: l, result: s }),
                s);
          }
          function kp() {
            var s,
              f,
              O,
              E,
              C = l * 49 + 23,
              x = Z[C];
            return x
              ? ((l = x.nextPos), x.result)
              : ((s = l),
                (f = qu()),
                f === i && (f = so()),
                f !== i
                  ? (r.charCodeAt(l) === 101 ? ((O = Tt), l++) : ((O = i), X === 0 && ne(Ut)),
                    O === i &&
                      (r.charCodeAt(l) === 69 ? ((O = Rn), l++) : ((O = i), X === 0 && ne(yn))),
                    O !== i
                      ? ((E = so()),
                        E !== i ? ((fe = s), (f = Tn(f, E)), (s = f)) : ((l = s), (s = a)))
                      : ((l = s), (s = a)))
                  : ((l = s), (s = a)),
                s === i && ((s = l), (f = qu()), f !== i && ((fe = s), (f = Et(f))), (s = f)),
                (Z[C] = { nextPos: l, result: s }),
                s);
          }
          function qu() {
            var s,
              f,
              O,
              E,
              C,
              x,
              W = l * 49 + 24,
              ae = Z[W];
            return ae
              ? ((l = ae.nextPos), ae.result)
              : ((s = l),
                r.charCodeAt(l) === 43 ? ((f = tn), l++) : ((f = i), X === 0 && ne(zn)),
                f === i && (f = q),
                f !== i
                  ? ((O = l),
                    (E = Zn()),
                    E !== i
                      ? (r.charCodeAt(l) === 46 ? ((C = T), l++) : ((C = i), X === 0 && ne(y)),
                        C !== i
                          ? ((x = Zn()), x !== i ? ((E = [E, C, x]), (O = E)) : ((l = O), (O = a)))
                          : ((l = O), (O = a)))
                      : ((l = O), (O = a)),
                    O !== i ? ((fe = s), (f = Gr(O)), (s = f)) : ((l = s), (s = a)))
                  : ((l = s), (s = a)),
                s === i &&
                  ((s = l),
                  r.charCodeAt(l) === 45 ? ((f = Lt), l++) : ((f = i), X === 0 && ne(Rt)),
                  f !== i
                    ? ((O = l),
                      (E = Zn()),
                      E !== i
                        ? (r.charCodeAt(l) === 46 ? ((C = T), l++) : ((C = i), X === 0 && ne(y)),
                          C !== i
                            ? ((x = Zn()),
                              x !== i ? ((E = [E, C, x]), (O = E)) : ((l = O), (O = a)))
                            : ((l = O), (O = a)))
                        : ((l = O), (O = a)),
                      O !== i ? ((fe = s), (f = Fr(O)), (s = f)) : ((l = s), (s = a)))
                    : ((l = s), (s = a))),
                (Z[W] = { nextPos: l, result: s }),
                s);
          }
          function Dp() {
            var s,
              f,
              O = l * 49 + 25,
              E = Z[O];
            return E
              ? ((l = E.nextPos), E.result)
              : ((s = l),
                (f = so()),
                f !== i && ((fe = s), (f = ji(f))),
                (s = f),
                (Z[O] = { nextPos: l, result: s }),
                s);
          }
          function so() {
            var s,
              f,
              O,
              E,
              C,
              x = l * 49 + 26,
              W = Z[x];
            if (W) return (l = W.nextPos), W.result;
            if (
              ((s = l),
              r.charCodeAt(l) === 43 ? ((f = tn), l++) : ((f = i), X === 0 && ne(zn)),
              f === i && (f = q),
              f !== i)
            ) {
              if (((O = []), (E = Ee()), E !== i)) for (; E !== i; ) O.push(E), (E = Ee());
              else O = a;
              O !== i
                ? ((E = l),
                  X++,
                  r.charCodeAt(l) === 46 ? ((C = T), l++) : ((C = i), X === 0 && ne(y)),
                  X--,
                  C === i ? (E = h) : ((l = E), (E = a)),
                  E !== i ? ((fe = s), (f = Gr(O)), (s = f)) : ((l = s), (s = a)))
                : ((l = s), (s = a));
            } else (l = s), (s = a);
            if (s === i)
              if (
                ((s = l),
                r.charCodeAt(l) === 45 ? ((f = Lt), l++) : ((f = i), X === 0 && ne(Rt)),
                f !== i)
              ) {
                if (((O = []), (E = Ee()), E !== i)) for (; E !== i; ) O.push(E), (E = Ee());
                else O = a;
                O !== i
                  ? ((E = l),
                    X++,
                    r.charCodeAt(l) === 46 ? ((C = T), l++) : ((C = i), X === 0 && ne(y)),
                    X--,
                    C === i ? (E = h) : ((l = E), (E = a)),
                    E !== i ? ((fe = s), (f = Fr(O)), (s = f)) : ((l = s), (s = a)))
                  : ((l = s), (s = a));
              } else (l = s), (s = a);
            return (Z[x] = { nextPos: l, result: s }), s;
          }
          function Bp() {
            var s,
              f,
              O = l * 49 + 27,
              E = Z[O];
            return E
              ? ((l = E.nextPos), E.result)
              : ((s = l),
                r.substr(l, 4) === Kr ? ((f = Kr), (l += 4)) : ((f = i), X === 0 && ne(Gi)),
                f !== i && ((fe = s), (f = Fi())),
                (s = f),
                s === i &&
                  ((s = l),
                  r.substr(l, 5) === Vr ? ((f = Vr), (l += 5)) : ((f = i), X === 0 && ne(Ki)),
                  f !== i && ((fe = s), (f = Vi())),
                  (s = f)),
                (Z[O] = { nextPos: l, result: s }),
                s);
          }
          function xp() {
            var s,
              f,
              O,
              E,
              C,
              x = l * 49 + 28,
              W = Z[x];
            if (W) return (l = W.nextPos), W.result;
            if (
              ((s = l),
              r.charCodeAt(l) === 91 ? ((f = g), l++) : ((f = i), X === 0 && ne(R)),
              f !== i)
            ) {
              for (O = [], E = rt(); E !== i; ) O.push(E), (E = rt());
              O !== i
                ? (r.charCodeAt(l) === 93 ? ((E = w), l++) : ((E = i), X === 0 && ne(N)),
                  E !== i ? ((fe = s), (f = Wi()), (s = f)) : ((l = s), (s = a)))
                : ((l = s), (s = a));
            } else (l = s), (s = a);
            if (
              s === i &&
              ((s = l),
              r.charCodeAt(l) === 91 ? ((f = g), l++) : ((f = i), X === 0 && ne(R)),
              f !== i
                ? ((O = zu()),
                  O === i && (O = q),
                  O !== i
                    ? (r.charCodeAt(l) === 93 ? ((E = w), l++) : ((E = i), X === 0 && ne(N)),
                      E !== i ? ((fe = s), (f = qi(O)), (s = f)) : ((l = s), (s = a)))
                    : ((l = s), (s = a)))
                : ((l = s), (s = a)),
              s === i)
            ) {
              if (
                ((s = l),
                r.charCodeAt(l) === 91 ? ((f = g), l++) : ((f = i), X === 0 && ne(R)),
                f !== i)
              ) {
                if (((O = []), (E = Zr()), E !== i)) for (; E !== i; ) O.push(E), (E = Zr());
                else O = a;
                O !== i
                  ? (r.charCodeAt(l) === 93 ? ((E = w), l++) : ((E = i), X === 0 && ne(N)),
                    E !== i ? ((fe = s), (f = zi(O)), (s = f)) : ((l = s), (s = a)))
                  : ((l = s), (s = a));
              } else (l = s), (s = a);
              if (s === i)
                if (
                  ((s = l),
                  r.charCodeAt(l) === 91 ? ((f = g), l++) : ((f = i), X === 0 && ne(R)),
                  f !== i)
                ) {
                  if (((O = []), (E = Zr()), E !== i)) for (; E !== i; ) O.push(E), (E = Zr());
                  else O = a;
                  O !== i
                    ? ((E = zu()),
                      E !== i
                        ? (r.charCodeAt(l) === 93 ? ((C = w), l++) : ((C = i), X === 0 && ne(N)),
                          C !== i ? ((fe = s), (f = Yi(O, E)), (s = f)) : ((l = s), (s = a)))
                        : ((l = s), (s = a)))
                    : ((l = s), (s = a));
                } else (l = s), (s = a);
            }
            return (Z[x] = { nextPos: l, result: s }), s;
          }
          function zu() {
            var s,
              f,
              O,
              E,
              C,
              x = l * 49 + 29,
              W = Z[x];
            if (W) return (l = W.nextPos), W.result;
            for (s = l, f = [], O = rt(); O !== i; ) f.push(O), (O = rt());
            if (f !== i)
              if (((O = In()), O !== i)) {
                for (E = [], C = rt(); C !== i; ) E.push(C), (C = rt());
                E !== i ? ((fe = s), (f = Wr(O)), (s = f)) : ((l = s), (s = a));
              } else (l = s), (s = a);
            else (l = s), (s = a);
            return (Z[x] = { nextPos: l, result: s }), s;
          }
          function Zr() {
            var s,
              f,
              O,
              E,
              C,
              x,
              W,
              ae = l * 49 + 30,
              he = Z[ae];
            if (he) return (l = he.nextPos), he.result;
            for (s = l, f = [], O = rt(); O !== i; ) f.push(O), (O = rt());
            if (f !== i)
              if (((O = In()), O !== i)) {
                for (E = [], C = rt(); C !== i; ) E.push(C), (C = rt());
                if (E !== i)
                  if (
                    (r.charCodeAt(l) === 44 ? ((C = qr), l++) : ((C = i), X === 0 && ne(Yn)),
                    C !== i)
                  ) {
                    for (x = [], W = rt(); W !== i; ) x.push(W), (W = rt());
                    x !== i ? ((fe = s), (f = Wr(O)), (s = f)) : ((l = s), (s = a));
                  } else (l = s), (s = a);
                else (l = s), (s = a);
              } else (l = s), (s = a);
            else (l = s), (s = a);
            return (Z[ae] = { nextPos: l, result: s }), s;
          }
          function rt() {
            var s,
              f = l * 49 + 31,
              O = Z[f];
            return O
              ? ((l = O.nextPos), O.result)
              : ((s = le()),
                s === i && ((s = it()), s === i && (s = Jr())),
                (Z[f] = { nextPos: l, result: s }),
                s);
          }
          function Up() {
            var s,
              f,
              O,
              E,
              C,
              x,
              W = l * 49 + 32,
              ae = Z[W];
            if (ae) return (l = ae.nextPos), ae.result;
            if (
              ((s = l),
              r.charCodeAt(l) === 123 ? ((f = Xi), l++) : ((f = i), X === 0 && ne(zr)),
              f !== i)
            ) {
              for (O = [], E = le(); E !== i; ) O.push(E), (E = le());
              if (O !== i) {
                for (E = [], C = Yu(); C !== i; ) E.push(C), (C = Yu());
                if (E !== i) {
                  for (C = [], x = le(); x !== i; ) C.push(x), (x = le());
                  C !== i
                    ? (r.charCodeAt(l) === 125 ? ((x = Ji), l++) : ((x = i), X === 0 && ne(Zi)),
                      x !== i ? ((fe = s), (f = Qi(E)), (s = f)) : ((l = s), (s = a)))
                    : ((l = s), (s = a));
                } else (l = s), (s = a);
              } else (l = s), (s = a);
            } else (l = s), (s = a);
            return (Z[W] = { nextPos: l, result: s }), s;
          }
          function Yu() {
            var s,
              f,
              O,
              E,
              C,
              x,
              W,
              ae,
              he,
              Ie,
              Te,
              Me = l * 49 + 33,
              Be = Z[Me];
            if (Be) return (l = Be.nextPos), Be.result;
            for (s = l, f = [], O = le(); O !== i; ) f.push(O), (O = le());
            if (f !== i)
              if (((O = Jn()), O !== i)) {
                for (E = [], C = le(); C !== i; ) E.push(C), (C = le());
                if (E !== i)
                  if (
                    (r.charCodeAt(l) === 61 ? ((C = v), l++) : ((C = i), X === 0 && ne(M)), C !== i)
                  ) {
                    for (x = [], W = le(); W !== i; ) x.push(W), (W = le());
                    if (x !== i)
                      if (((W = In()), W !== i)) {
                        for (ae = [], he = le(); he !== i; ) ae.push(he), (he = le());
                        if (ae !== i)
                          if (
                            (r.charCodeAt(l) === 44
                              ? ((he = qr), l++)
                              : ((he = i), X === 0 && ne(Yn)),
                            he !== i)
                          ) {
                            for (Ie = [], Te = le(); Te !== i; ) Ie.push(Te), (Te = le());
                            Ie !== i ? ((fe = s), (f = It(O, W)), (s = f)) : ((l = s), (s = a));
                          } else (l = s), (s = a);
                        else (l = s), (s = a);
                      } else (l = s), (s = a);
                    else (l = s), (s = a);
                  } else (l = s), (s = a);
                else (l = s), (s = a);
              } else (l = s), (s = a);
            else (l = s), (s = a);
            if (s === i) {
              for (s = l, f = [], O = le(); O !== i; ) f.push(O), (O = le());
              if (f !== i)
                if (((O = Jn()), O !== i)) {
                  for (E = [], C = le(); C !== i; ) E.push(C), (C = le());
                  if (E !== i)
                    if (
                      (r.charCodeAt(l) === 61 ? ((C = v), l++) : ((C = i), X === 0 && ne(M)),
                      C !== i)
                    ) {
                      for (x = [], W = le(); W !== i; ) x.push(W), (W = le());
                      x !== i
                        ? ((W = In()),
                          W !== i ? ((fe = s), (f = It(O, W)), (s = f)) : ((l = s), (s = a)))
                        : ((l = s), (s = a));
                    } else (l = s), (s = a);
                  else (l = s), (s = a);
                } else (l = s), (s = a);
              else (l = s), (s = a);
            }
            return (Z[Me] = { nextPos: l, result: s }), s;
          }
          function Xu() {
            var s,
              f,
              O,
              E = l * 49 + 34,
              C = Z[E];
            return C
              ? ((l = C.nextPos), C.result)
              : ((s = l),
                r.charCodeAt(l) === 46 ? ((f = T), l++) : ((f = i), X === 0 && ne(y)),
                f !== i
                  ? ((O = Zn()), O !== i ? ((fe = s), (f = eo(O)), (s = f)) : ((l = s), (s = a)))
                  : ((l = s), (s = a)),
                (Z[E] = { nextPos: l, result: s }),
                s);
          }
          function Ju() {
            var s,
              f,
              O,
              E,
              C,
              x,
              W,
              ae,
              he,
              Ie,
              Te,
              Me,
              Be = l * 49 + 35,
              Xe = Z[Be];
            return Xe
              ? ((l = Xe.nextPos), Xe.result)
              : ((s = l),
                (f = l),
                (O = Ee()),
                O !== i
                  ? ((E = Ee()),
                    E !== i
                      ? ((C = Ee()),
                        C !== i
                          ? ((x = Ee()),
                            x !== i
                              ? (r.charCodeAt(l) === 45
                                  ? ((W = Lt), l++)
                                  : ((W = i), X === 0 && ne(Rt)),
                                W !== i
                                  ? ((ae = Ee()),
                                    ae !== i
                                      ? ((he = Ee()),
                                        he !== i
                                          ? (r.charCodeAt(l) === 45
                                              ? ((Ie = Lt), l++)
                                              : ((Ie = i), X === 0 && ne(Rt)),
                                            Ie !== i
                                              ? ((Te = Ee()),
                                                Te !== i
                                                  ? ((Me = Ee()),
                                                    Me !== i
                                                      ? ((O = [O, E, C, x, W, ae, he, Ie, Te, Me]),
                                                        (f = O))
                                                      : ((l = f), (f = a)))
                                                  : ((l = f), (f = a)))
                                              : ((l = f), (f = a)))
                                          : ((l = f), (f = a)))
                                      : ((l = f), (f = a)))
                                  : ((l = f), (f = a)))
                              : ((l = f), (f = a)))
                          : ((l = f), (f = a)))
                      : ((l = f), (f = a)))
                  : ((l = f), (f = a)),
                f !== i && ((fe = s), (f = to(f))),
                (s = f),
                (Z[Be] = { nextPos: l, result: s }),
                s);
          }
          function Lp() {
            var s,
              f,
              O,
              E,
              C,
              x,
              W,
              ae,
              he,
              Ie,
              Te,
              Me = l * 49 + 36,
              Be = Z[Me];
            return Be
              ? ((l = Be.nextPos), Be.result)
              : ((s = l),
                (f = l),
                (O = Ee()),
                O !== i
                  ? ((E = Ee()),
                    E !== i
                      ? (r.charCodeAt(l) === 58 ? ((C = nn), l++) : ((C = i), X === 0 && ne(rn)),
                        C !== i
                          ? ((x = Ee()),
                            x !== i
                              ? ((W = Ee()),
                                W !== i
                                  ? (r.charCodeAt(l) === 58
                                      ? ((ae = nn), l++)
                                      : ((ae = i), X === 0 && ne(rn)),
                                    ae !== i
                                      ? ((he = Ee()),
                                        he !== i
                                          ? ((Ie = Ee()),
                                            Ie !== i
                                              ? ((Te = Xu()),
                                                Te === i && (Te = q),
                                                Te !== i
                                                  ? ((O = [O, E, C, x, W, ae, he, Ie, Te]), (f = O))
                                                  : ((l = f), (f = a)))
                                              : ((l = f), (f = a)))
                                          : ((l = f), (f = a)))
                                      : ((l = f), (f = a)))
                                  : ((l = f), (f = a)))
                              : ((l = f), (f = a)))
                          : ((l = f), (f = a)))
                      : ((l = f), (f = a)))
                  : ((l = f), (f = a)),
                f !== i && ((fe = s), (f = D(f))),
                (s = f),
                (Z[Me] = { nextPos: l, result: s }),
                s);
          }
          function $p() {
            var s,
              f,
              O,
              E,
              C,
              x,
              W,
              ae,
              he,
              Ie,
              Te,
              Me,
              Be,
              Xe,
              wn,
              Ht,
              Je,
              nc = l * 49 + 37,
              uo = Z[nc];
            return uo
              ? ((l = uo.nextPos), uo.result)
              : ((s = l),
                (f = l),
                (O = Ee()),
                O !== i
                  ? ((E = Ee()),
                    E !== i
                      ? (r.charCodeAt(l) === 58 ? ((C = nn), l++) : ((C = i), X === 0 && ne(rn)),
                        C !== i
                          ? ((x = Ee()),
                            x !== i
                              ? ((W = Ee()),
                                W !== i
                                  ? (r.charCodeAt(l) === 58
                                      ? ((ae = nn), l++)
                                      : ((ae = i), X === 0 && ne(rn)),
                                    ae !== i
                                      ? ((he = Ee()),
                                        he !== i
                                          ? ((Ie = Ee()),
                                            Ie !== i
                                              ? ((Te = Xu()),
                                                Te === i && (Te = q),
                                                Te !== i
                                                  ? (r.charCodeAt(l) === 45
                                                      ? ((Me = Lt), l++)
                                                      : ((Me = i), X === 0 && ne(Rt)),
                                                    Me === i &&
                                                      (r.charCodeAt(l) === 43
                                                        ? ((Me = tn), l++)
                                                        : ((Me = i), X === 0 && ne(zn))),
                                                    Me !== i
                                                      ? ((Be = Ee()),
                                                        Be !== i
                                                          ? ((Xe = Ee()),
                                                            Xe !== i
                                                              ? (r.charCodeAt(l) === 58
                                                                  ? ((wn = nn), l++)
                                                                  : ((wn = i), X === 0 && ne(rn)),
                                                                wn !== i
                                                                  ? ((Ht = Ee()),
                                                                    Ht !== i
                                                                      ? ((Je = Ee()),
                                                                        Je !== i
                                                                          ? ((O = [
                                                                              O,
                                                                              E,
                                                                              C,
                                                                              x,
                                                                              W,
                                                                              ae,
                                                                              he,
                                                                              Ie,
                                                                              Te,
                                                                              Me,
                                                                              Be,
                                                                              Xe,
                                                                              wn,
                                                                              Ht,
                                                                              Je,
                                                                            ]),
                                                                            (f = O))
                                                                          : ((l = f), (f = a)))
                                                                      : ((l = f), (f = a)))
                                                                  : ((l = f), (f = a)))
                                                              : ((l = f), (f = a)))
                                                          : ((l = f), (f = a)))
                                                      : ((l = f), (f = a)))
                                                  : ((l = f), (f = a)))
                                              : ((l = f), (f = a)))
                                          : ((l = f), (f = a)))
                                      : ((l = f), (f = a)))
                                  : ((l = f), (f = a)))
                              : ((l = f), (f = a)))
                          : ((l = f), (f = a)))
                      : ((l = f), (f = a)))
                  : ((l = f), (f = a)),
                f !== i && ((fe = s), (f = D(f))),
                (s = f),
                (Z[nc] = { nextPos: l, result: s }),
                s);
          }
          function Hp() {
            var s,
              f,
              O,
              E,
              C,
              x = l * 49 + 38,
              W = Z[x];
            return W
              ? ((l = W.nextPos), W.result)
              : ((s = l),
                (f = Ju()),
                f !== i
                  ? (r.charCodeAt(l) === 84 ? ((O = j), l++) : ((O = i), X === 0 && ne(K)),
                    O !== i
                      ? ((E = Lp()),
                        E !== i
                          ? (r.charCodeAt(l) === 90
                              ? ((C = re), l++)
                              : ((C = i), X === 0 && ne(de)),
                            C !== i ? ((fe = s), (f = ye(f, E)), (s = f)) : ((l = s), (s = a)))
                          : ((l = s), (s = a)))
                      : ((l = s), (s = a)))
                  : ((l = s), (s = a)),
                s === i &&
                  ((s = l),
                  (f = Ju()),
                  f !== i
                    ? (r.charCodeAt(l) === 84 ? ((O = j), l++) : ((O = i), X === 0 && ne(K)),
                      O !== i
                        ? ((E = $p()),
                          E !== i ? ((fe = s), (f = ze(f, E)), (s = f)) : ((l = s), (s = a)))
                        : ((l = s), (s = a)))
                    : ((l = s), (s = a))),
                (Z[x] = { nextPos: l, result: s }),
                s);
          }
          function le() {
            var s,
              f = l * 49 + 39,
              O = Z[f];
            return O
              ? ((l = O.nextPos), O.result)
              : (on.test(r.charAt(l)) ? ((s = r.charAt(l)), l++) : ((s = i), X === 0 && ne(En)),
                (Z[f] = { nextPos: l, result: s }),
                s);
          }
          function it() {
            var s,
              f,
              O,
              E = l * 49 + 40,
              C = Z[E];
            return C
              ? ((l = C.nextPos), C.result)
              : (r.charCodeAt(l) === 10 ? ((s = $t), l++) : ((s = i), X === 0 && ne(wu)),
                s === i &&
                  ((s = l),
                  r.charCodeAt(l) === 13 ? ((f = Xf), l++) : ((f = i), X === 0 && ne(Jf)),
                  f !== i
                    ? (r.charCodeAt(l) === 10 ? ((O = $t), l++) : ((O = i), X === 0 && ne(wu)),
                      O !== i ? ((f = [f, O]), (s = f)) : ((l = s), (s = a)))
                    : ((l = s), (s = a))),
                (Z[E] = { nextPos: l, result: s }),
                s);
          }
          function Zu() {
            var s,
              f = l * 49 + 41,
              O = Z[f];
            return O
              ? ((l = O.nextPos), O.result)
              : ((s = it()), s === i && (s = le()), (Z[f] = { nextPos: l, result: s }), s);
          }
          function Qr() {
            var s,
              f,
              O = l * 49 + 42,
              E = Z[O];
            return E
              ? ((l = E.nextPos), E.result)
              : ((s = l),
                X++,
                r.length > l ? ((f = r.charAt(l)), l++) : ((f = i), X === 0 && ne(m)),
                X--,
                f === i ? (s = h) : ((l = s), (s = a)),
                (Z[O] = { nextPos: l, result: s }),
                s);
          }
          function ot() {
            var s,
              f = l * 49 + 43,
              O = Z[f];
            return O
              ? ((l = O.nextPos), O.result)
              : (Zf.test(r.charAt(l)) ? ((s = r.charAt(l)), l++) : ((s = i), X === 0 && ne(Qf)),
                (Z[f] = { nextPos: l, result: s }),
                s);
          }
          function Ee() {
            var s,
              f,
              O = l * 49 + 44,
              E = Z[O];
            return E
              ? ((l = E.nextPos), E.result)
              : (ep.test(r.charAt(l)) ? ((s = r.charAt(l)), l++) : ((s = i), X === 0 && ne(tp)),
                s === i &&
                  ((s = l),
                  r.charCodeAt(l) === 95 ? ((f = np), l++) : ((f = i), X === 0 && ne(rp)),
                  f !== i && ((fe = s), (f = ip())),
                  (s = f)),
                (Z[O] = { nextPos: l, result: s }),
                s);
          }
          function Qu() {
            var s,
              f = l * 49 + 45,
              O = Z[f];
            return O
              ? ((l = O.nextPos), O.result)
              : (op.test(r.charAt(l)) ? ((s = r.charAt(l)), l++) : ((s = i), X === 0 && ne(sp)),
                (Z[f] = { nextPos: l, result: s }),
                s);
          }
          function Zn() {
            var s,
              f,
              O,
              E = l * 49 + 46,
              C = Z[E];
            if (C) return (l = C.nextPos), C.result;
            if (((s = l), (f = []), (O = Ee()), O !== i)) for (; O !== i; ) f.push(O), (O = Ee());
            else f = a;
            return (
              f !== i && ((fe = s), (f = ap(f))), (s = f), (Z[E] = { nextPos: l, result: s }), s
            );
          }
          function ec() {
            var s,
              f,
              O = l * 49 + 47,
              E = Z[O];
            return E
              ? ((l = E.nextPos), E.result)
              : ((s = l),
                r.substr(l, 2) === bu ? ((f = bu), (l += 2)) : ((f = i), X === 0 && ne(up)),
                f !== i && ((fe = s), (f = cp())),
                (s = f),
                s === i &&
                  ((s = l),
                  r.substr(l, 2) === Nu ? ((f = Nu), (l += 2)) : ((f = i), X === 0 && ne(lp)),
                  f !== i && ((fe = s), (f = dp())),
                  (s = f),
                  s === i &&
                    ((s = l),
                    r.substr(l, 2) === Cu ? ((f = Cu), (l += 2)) : ((f = i), X === 0 && ne(fp)),
                    f !== i && ((fe = s), (f = pp())),
                    (s = f),
                    s === i &&
                      ((s = l),
                      r.substr(l, 2) === Su ? ((f = Su), (l += 2)) : ((f = i), X === 0 && ne(_p)),
                      f !== i && ((fe = s), (f = hp())),
                      (s = f),
                      s === i &&
                        ((s = l),
                        r.substr(l, 2) === vu ? ((f = vu), (l += 2)) : ((f = i), X === 0 && ne(mp)),
                        f !== i && ((fe = s), (f = gp())),
                        (s = f),
                        s === i &&
                          ((s = l),
                          r.substr(l, 2) === Pu
                            ? ((f = Pu), (l += 2))
                            : ((f = i), X === 0 && ne(Ap)),
                          f !== i && ((fe = s), (f = Op())),
                          (s = f),
                          s === i &&
                            ((s = l),
                            r.substr(l, 2) === Mu
                              ? ((f = Mu), (l += 2))
                              : ((f = i), X === 0 && ne(Rp)),
                            f !== i && ((fe = s), (f = yp())),
                            (s = f),
                            s === i && (s = jp()))))))),
                (Z[O] = { nextPos: l, result: s }),
                s);
          }
          function jp() {
            var s,
              f,
              O,
              E,
              C,
              x,
              W,
              ae,
              he,
              Ie,
              Te,
              Me = l * 49 + 48,
              Be = Z[Me];
            return Be
              ? ((l = Be.nextPos), Be.result)
              : ((s = l),
                r.substr(l, 2) === ku ? ((f = ku), (l += 2)) : ((f = i), X === 0 && ne(Tp)),
                f !== i
                  ? ((O = l),
                    (E = ot()),
                    E !== i
                      ? ((C = ot()),
                        C !== i
                          ? ((x = ot()),
                            x !== i
                              ? ((W = ot()),
                                W !== i
                                  ? ((ae = ot()),
                                    ae !== i
                                      ? ((he = ot()),
                                        he !== i
                                          ? ((Ie = ot()),
                                            Ie !== i
                                              ? ((Te = ot()),
                                                Te !== i
                                                  ? ((E = [E, C, x, W, ae, he, Ie, Te]), (O = E))
                                                  : ((l = O), (O = a)))
                                              : ((l = O), (O = a)))
                                          : ((l = O), (O = a)))
                                      : ((l = O), (O = a)))
                                  : ((l = O), (O = a)))
                              : ((l = O), (O = a)))
                          : ((l = O), (O = a)))
                      : ((l = O), (O = a)),
                    O !== i ? ((fe = s), (f = Du(O)), (s = f)) : ((l = s), (s = a)))
                  : ((l = s), (s = a)),
                s === i &&
                  ((s = l),
                  r.substr(l, 2) === Bu ? ((f = Bu), (l += 2)) : ((f = i), X === 0 && ne(Ep)),
                  f !== i
                    ? ((O = l),
                      (E = ot()),
                      E !== i
                        ? ((C = ot()),
                          C !== i
                            ? ((x = ot()),
                              x !== i
                                ? ((W = ot()),
                                  W !== i ? ((E = [E, C, x, W]), (O = E)) : ((l = O), (O = a)))
                                : ((l = O), (O = a)))
                            : ((l = O), (O = a)))
                        : ((l = O), (O = a)),
                      O !== i ? ((fe = s), (f = Du(O)), (s = f)) : ((l = s), (s = a)))
                    : ((l = s), (s = a))),
                (Z[Me] = { nextPos: l, result: s }),
                s);
          }
          var tc = [];
          function Gp(s, f, O) {
            var E = new Error(s);
            throw ((E.line = f), (E.column = O), E);
          }
          function ao(s) {
            tc.push(s);
          }
          function Fe(s, f, O, E, C) {
            var x = { type: s, value: f, line: O(), column: E() };
            return C && (x.key = C), x;
          }
          function Fp(s, f, O) {
            var E = parseInt('0x' + s);
            if (
              !isFinite(E) ||
              Math.floor(E) != E ||
              E < 0 ||
              E > 1114111 ||
              (E > 55295 && E < 57344)
            )
              Gp('Invalid Unicode escape code: ' + s, f, O);
            else return Kp(E);
          }
          function Kp() {
            var s = 16384,
              f = [],
              O,
              E,
              C = -1,
              x = arguments.length;
            if (!x) return '';
            for (var W = ''; ++C < x; ) {
              var ae = Number(arguments[C]);
              ae <= 65535
                ? f.push(ae)
                : ((ae -= 65536),
                  (O = (ae >> 10) + 55296),
                  (E = (ae % 1024) + 56320),
                  f.push(O, E)),
                (C + 1 == x || f.length > s) &&
                  ((W += String.fromCharCode.apply(null, f)), (f.length = 0));
            }
            return W;
          }
          if (((Xr = d()), Xr !== i && l === r.length)) return Xr;
          throw (
            (Xr !== i && l < r.length && ne({ type: 'end', description: 'end of input' }),
            Ip(null, ro, Yr))
          );
        }
        return { SyntaxError: e, parse: n };
      })())),
    Co
  );
}
var So, Gc;
function WR() {
  if (Gc) return So;
  Gc = 1;
  function t(e) {
    var n = [],
      r = [],
      o = '',
      i = Object.create(null),
      c = i;
    return d(e);
    function d(P) {
      for (var I, B = 0; B < P.length; B++)
        switch (((I = P[B]), I.type)) {
          case 'Assign':
            a(I);
            break;
          case 'ObjectPath':
            m(I);
            break;
          case 'ArrayPath':
            g(I);
            break;
        }
      return i;
    }
    function p(P, I, B) {
      var F = new Error(P);
      throw ((F.line = I), (F.column = B), F);
    }
    function a(P) {
      var I = P.key,
        B = P.value,
        F = P.line,
        $ = P.column,
        T;
      o ? (T = o + '.' + I) : (T = I),
        typeof c[I] < 'u' && p("Cannot redefine existing key '" + T + "'.", F, $),
        (c[I] = A(B)),
        _(T) || (n.push(T), r.push(T));
    }
    function _(P) {
      return n.indexOf(P) !== -1;
    }
    function A(P) {
      return P.type === 'Array' ? w(P.value) : P.type === 'InlineTable' ? h(P.value) : P.value;
    }
    function h(P) {
      for (var I = Object.create(null), B = 0; B < P.length; B++) {
        var F = P[B];
        F.value.type === 'InlineTable'
          ? (I[F.key] = h(F.value.value))
          : F.type === 'InlineTableValue' && (I[F.key] = A(F.value));
      }
      return I;
    }
    function m(P) {
      var I = P.value,
        B = I.map(N).join('.'),
        F = P.line,
        $ = P.column;
      _(B) && p("Cannot redefine existing key '" + I + "'.", F, $),
        n.push(B),
        (c = R(i, I, Object.create(null), F, $)),
        (o = I);
    }
    function g(P) {
      var I = P.value,
        B = I.map(N).join('.'),
        F = P.line,
        $ = P.column;
      if (
        (_(B) || n.push(B),
        (n = n.filter(function (y) {
          return y.indexOf(B) !== 0;
        })),
        n.push(B),
        (c = R(i, I, [], F, $)),
        (o = B),
        c instanceof Array)
      ) {
        var T = Object.create(null);
        c.push(T), (c = T);
      } else p("Cannot redefine existing key '" + I + "'.", F, $);
    }
    function R(P, I, B, F, $) {
      var T = [],
        y = '';
      I.join('.');
      for (var v = P, M = 0; M < I.length; M++) {
        var G = I[M];
        T.push(G),
          (y = T.join('.')),
          typeof v[G] > 'u'
            ? M === I.length - 1
              ? (v[G] = B)
              : (v[G] = Object.create(null))
            : M !== I.length - 1 &&
              r.indexOf(y) > -1 &&
              p("Cannot redefine existing key '" + y + "'.", F, $),
          (v = v[G]),
          v instanceof Array && v.length && M < I.length - 1 && (v = v[v.length - 1]);
      }
      return v;
    }
    function w(P) {
      for (var I = null, B = 0; B < P.length; B++) {
        var F = P[B];
        I === null
          ? (I = F.type)
          : F.type !== I &&
            p(
              'Cannot add value of type ' + F.type + ' to array of type ' + I + '.',
              F.line,
              F.column
            );
      }
      return P.map(A);
    }
    function N(P) {
      return P.indexOf('.') > -1 ? '"' + P + '"' : P;
    }
  }
  return (So = { compile: t }), So;
}
var vo, Fc;
function qR() {
  if (Fc) return vo;
  Fc = 1;
  var t = VR(),
    e = WR();
  return (
    (vo = {
      parse: function (n) {
        var r = t.parse(n.toString());
        return e.compile(r);
      },
    }),
    vo
  );
}
function zR(t) {
  return t.toLowerCase();
}
var YR = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g],
  XR = /[^A-Z0-9]+/gi;
function JR(t, e) {
  e === void 0 && (e = {});
  for (
    var n = e.splitRegexp,
      r = n === void 0 ? YR : n,
      o = e.stripRegexp,
      i = o === void 0 ? XR : o,
      c = e.transform,
      d = c === void 0 ? zR : c,
      p = e.delimiter,
      a = p === void 0 ? ' ' : p,
      _ = Kc(Kc(t, r, '$1\0$2'), i, '\0'),
      A = 0,
      h = _.length;
    _.charAt(A) === '\0';

  )
    A++;
  for (; _.charAt(h - 1) === '\0'; ) h--;
  return _.slice(A, h).split('\0').map(d).join(a);
}
function Kc(t, e, n) {
  return e instanceof RegExp
    ? t.replace(e, n)
    : e.reduce(function (r, o) {
        return r.replace(o, n);
      }, t);
}
function ZR(t, e) {
  return e === void 0 && (e = {}), JR(t, il({ delimiter: '.' }, e));
}
function QR(t, e) {
  return e === void 0 && (e = {}), ZR(t, il({ delimiter: '_' }, e));
}
const ey = Object.freeze(
    Object.defineProperty({ __proto__: null, snakeCase: QR }, Symbol.toStringTag, {
      value: 'Module',
    })
  ),
  ty = kr(ey);
var Po, Vc;
function ny() {
  if (Vc) return Po;
  Vc = 1;
  function t(o) {
    if (typeof o != 'string')
      throw new TypeError('Path must be a string. Received ' + JSON.stringify(o));
  }
  function e(o, i) {
    for (var c = '', d = 0, p = -1, a = 0, _, A = 0; A <= o.length; ++A) {
      if (A < o.length) _ = o.charCodeAt(A);
      else {
        if (_ === 47) break;
        _ = 47;
      }
      if (_ === 47) {
        if (!(p === A - 1 || a === 1))
          if (p !== A - 1 && a === 2) {
            if (
              c.length < 2 ||
              d !== 2 ||
              c.charCodeAt(c.length - 1) !== 46 ||
              c.charCodeAt(c.length - 2) !== 46
            ) {
              if (c.length > 2) {
                var h = c.lastIndexOf('/');
                if (h !== c.length - 1) {
                  h === -1
                    ? ((c = ''), (d = 0))
                    : ((c = c.slice(0, h)), (d = c.length - 1 - c.lastIndexOf('/'))),
                    (p = A),
                    (a = 0);
                  continue;
                }
              } else if (c.length === 2 || c.length === 1) {
                (c = ''), (d = 0), (p = A), (a = 0);
                continue;
              }
            }
            i && (c.length > 0 ? (c += '/..') : (c = '..'), (d = 2));
          } else
            c.length > 0 ? (c += '/' + o.slice(p + 1, A)) : (c = o.slice(p + 1, A)),
              (d = A - p - 1);
        (p = A), (a = 0);
      } else _ === 46 && a !== -1 ? ++a : (a = -1);
    }
    return c;
  }
  function n(o, i) {
    var c = i.dir || i.root,
      d = i.base || (i.name || '') + (i.ext || '');
    return c ? (c === i.root ? c + d : c + o + d) : d;
  }
  var r = {
    resolve: function () {
      for (var i = '', c = !1, d, p = arguments.length - 1; p >= -1 && !c; p--) {
        var a;
        p >= 0 ? (a = arguments[p]) : (d === void 0 && (d = ie.process.cwd()), (a = d)),
          t(a),
          a.length !== 0 && ((i = a + '/' + i), (c = a.charCodeAt(0) === 47));
      }
      return (i = e(i, !c)), c ? (i.length > 0 ? '/' + i : '/') : i.length > 0 ? i : '.';
    },
    normalize: function (i) {
      if ((t(i), i.length === 0)) return '.';
      var c = i.charCodeAt(0) === 47,
        d = i.charCodeAt(i.length - 1) === 47;
      return (
        (i = e(i, !c)),
        i.length === 0 && !c && (i = '.'),
        i.length > 0 && d && (i += '/'),
        c ? '/' + i : i
      );
    },
    isAbsolute: function (i) {
      return t(i), i.length > 0 && i.charCodeAt(0) === 47;
    },
    join: function () {
      if (arguments.length === 0) return '.';
      for (var i, c = 0; c < arguments.length; ++c) {
        var d = arguments[c];
        t(d), d.length > 0 && (i === void 0 ? (i = d) : (i += '/' + d));
      }
      return i === void 0 ? '.' : r.normalize(i);
    },
    relative: function (i, c) {
      if ((t(i), t(c), i === c || ((i = r.resolve(i)), (c = r.resolve(c)), i === c))) return '';
      for (var d = 1; d < i.length && i.charCodeAt(d) === 47; ++d);
      for (var p = i.length, a = p - d, _ = 1; _ < c.length && c.charCodeAt(_) === 47; ++_);
      for (var A = c.length, h = A - _, m = a < h ? a : h, g = -1, R = 0; R <= m; ++R) {
        if (R === m) {
          if (h > m) {
            if (c.charCodeAt(_ + R) === 47) return c.slice(_ + R + 1);
            if (R === 0) return c.slice(_ + R);
          } else a > m && (i.charCodeAt(d + R) === 47 ? (g = R) : R === 0 && (g = 0));
          break;
        }
        var w = i.charCodeAt(d + R),
          N = c.charCodeAt(_ + R);
        if (w !== N) break;
        w === 47 && (g = R);
      }
      var P = '';
      for (R = d + g + 1; R <= p; ++R)
        (R === p || i.charCodeAt(R) === 47) && (P.length === 0 ? (P += '..') : (P += '/..'));
      return P.length > 0
        ? P + c.slice(_ + g)
        : ((_ += g), c.charCodeAt(_) === 47 && ++_, c.slice(_));
    },
    _makeLong: function (i) {
      return i;
    },
    dirname: function (i) {
      if ((t(i), i.length === 0)) return '.';
      for (var c = i.charCodeAt(0), d = c === 47, p = -1, a = !0, _ = i.length - 1; _ >= 1; --_)
        if (((c = i.charCodeAt(_)), c === 47)) {
          if (!a) {
            p = _;
            break;
          }
        } else a = !1;
      return p === -1 ? (d ? '/' : '.') : d && p === 1 ? '//' : i.slice(0, p);
    },
    basename: function (i, c) {
      if (c !== void 0 && typeof c != 'string')
        throw new TypeError('"ext" argument must be a string');
      t(i);
      var d = 0,
        p = -1,
        a = !0,
        _;
      if (c !== void 0 && c.length > 0 && c.length <= i.length) {
        if (c.length === i.length && c === i) return '';
        var A = c.length - 1,
          h = -1;
        for (_ = i.length - 1; _ >= 0; --_) {
          var m = i.charCodeAt(_);
          if (m === 47) {
            if (!a) {
              d = _ + 1;
              break;
            }
          } else
            h === -1 && ((a = !1), (h = _ + 1)),
              A >= 0 && (m === c.charCodeAt(A) ? --A === -1 && (p = _) : ((A = -1), (p = h)));
        }
        return d === p ? (p = h) : p === -1 && (p = i.length), i.slice(d, p);
      } else {
        for (_ = i.length - 1; _ >= 0; --_)
          if (i.charCodeAt(_) === 47) {
            if (!a) {
              d = _ + 1;
              break;
            }
          } else p === -1 && ((a = !1), (p = _ + 1));
        return p === -1 ? '' : i.slice(d, p);
      }
    },
    extname: function (i) {
      t(i);
      for (var c = -1, d = 0, p = -1, a = !0, _ = 0, A = i.length - 1; A >= 0; --A) {
        var h = i.charCodeAt(A);
        if (h === 47) {
          if (!a) {
            d = A + 1;
            break;
          }
          continue;
        }
        p === -1 && ((a = !1), (p = A + 1)),
          h === 46 ? (c === -1 ? (c = A) : _ !== 1 && (_ = 1)) : c !== -1 && (_ = -1);
      }
      return c === -1 || p === -1 || _ === 0 || (_ === 1 && c === p - 1 && c === d + 1)
        ? ''
        : i.slice(c, p);
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
      var c = { root: '', dir: '', base: '', ext: '', name: '' };
      if (i.length === 0) return c;
      var d = i.charCodeAt(0),
        p = d === 47,
        a;
      p ? ((c.root = '/'), (a = 1)) : (a = 0);
      for (var _ = -1, A = 0, h = -1, m = !0, g = i.length - 1, R = 0; g >= a; --g) {
        if (((d = i.charCodeAt(g)), d === 47)) {
          if (!m) {
            A = g + 1;
            break;
          }
          continue;
        }
        h === -1 && ((m = !1), (h = g + 1)),
          d === 46 ? (_ === -1 ? (_ = g) : R !== 1 && (R = 1)) : _ !== -1 && (R = -1);
      }
      return (
        _ === -1 || h === -1 || R === 0 || (R === 1 && _ === h - 1 && _ === A + 1)
          ? h !== -1 &&
            (A === 0 && p ? (c.base = c.name = i.slice(1, h)) : (c.base = c.name = i.slice(A, h)))
          : (A === 0 && p
              ? ((c.name = i.slice(1, _)), (c.base = i.slice(1, h)))
              : ((c.name = i.slice(A, _)), (c.base = i.slice(A, h))),
            (c.ext = i.slice(_, h))),
        A > 0 ? (c.dir = i.slice(0, A - 1)) : p && (c.dir = '/'),
        c
      );
    },
    sep: '/',
    delimiter: ':',
    win32: null,
    posix: null,
  };
  return (r.posix = r), (Po = r), Po;
}
var Wc;
function ry() {
  if (Wc) return ci;
  Wc = 1;
  var t =
      (b && b.__createBinding) ||
      (Object.create
        ? function (p, a, _, A) {
            A === void 0 && (A = _);
            var h = Object.getOwnPropertyDescriptor(a, _);
            (!h || ('get' in h ? !a.__esModule : h.writable || h.configurable)) &&
              (h = {
                enumerable: !0,
                get: function () {
                  return a[_];
                },
              }),
              Object.defineProperty(p, A, h);
          }
        : function (p, a, _, A) {
            A === void 0 && (A = _), (p[A] = a[_]);
          }),
    e =
      (b && b.__setModuleDefault) ||
      (Object.create
        ? function (p, a) {
            Object.defineProperty(p, 'default', { enumerable: !0, value: a });
          }
        : function (p, a) {
            p.default = a;
          }),
    n =
      (b && b.__importStar) ||
      function (p) {
        if (p && p.__esModule) return p;
        var a = {};
        if (p != null)
          for (var _ in p)
            _ !== 'default' && Object.prototype.hasOwnProperty.call(p, _) && t(a, p, _);
        return e(a, p), a;
      };
  Object.defineProperty(ci, '__esModule', { value: !0 });
  const r = n(qR()),
    o = ty,
    i = Ui(),
    c = tt,
    d = new Proxy(
      {},
      {
        get(p, a) {
          var _, A;
          if (c.isBrowser) throw new Error("Workspaces aren't available in the browser");
          if (
            ((a = (0, o.snakeCase)(a)),
            /\d/.test(a) && (a = a.replace(/\d+/g, (B) => '_' + B).replace('__', '_')),
            p[a])
          )
            return p[a];
          const h = sr,
            m = ny(),
            g = r.parse(h.readFileSync('Anchor.toml')),
            R = g.provider.cluster,
            w =
              (A = (_ = g.programs) === null || _ === void 0 ? void 0 : _[R]) === null ||
              A === void 0
                ? void 0
                : A[a];
          let N, P;
          if (
            (typeof w == 'object' && w.idl
              ? ((N = w.idl), (P = w.address))
              : (N = m.join('target', 'idl', ''.concat(a, '.json'))),
            !h.existsSync(N))
          )
            throw new Error(''.concat(N, " doesn't exist. Did you run `anchor build`?"));
          const I = JSON.parse(h.readFileSync(N));
          return P && (I.address = P), (p[a] = new i.Program(I)), p[a];
        },
      }
    );
  return (ci.default = d), ci;
}
(function (t) {
  var e =
      (b && b.__createBinding) ||
      (Object.create
        ? function (a, _, A, h) {
            h === void 0 && (h = A);
            var m = Object.getOwnPropertyDescriptor(_, A);
            (!m || ('get' in m ? !_.__esModule : m.writable || m.configurable)) &&
              (m = {
                enumerable: !0,
                get: function () {
                  return _[A];
                },
              }),
              Object.defineProperty(a, h, m);
          }
        : function (a, _, A, h) {
            h === void 0 && (h = A), (a[h] = _[A]);
          }),
    n =
      (b && b.__setModuleDefault) ||
      (Object.create
        ? function (a, _) {
            Object.defineProperty(a, 'default', { enumerable: !0, value: _ });
          }
        : function (a, _) {
            a.default = _;
          }),
    r =
      (b && b.__importStar) ||
      function (a) {
        if (a && a.__esModule) return a;
        var _ = {};
        if (a != null)
          for (var A in a)
            A !== 'default' && Object.prototype.hasOwnProperty.call(a, A) && e(_, a, A);
        return n(_, a), _;
      },
    o =
      (b && b.__exportStar) ||
      function (a, _) {
        for (var A in a)
          A !== 'default' && !Object.prototype.hasOwnProperty.call(_, A) && e(_, a, A);
      },
    i =
      (b && b.__importDefault) ||
      function (a) {
        return a && a.__esModule ? a : { default: a };
      };
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.utils = t.AnchorProvider = t.setProvider = t.getProvider = t.web3 = t.BN = void 0),
    i(Bn);
  const c = tt;
  var d = nt;
  Object.defineProperty(t, 'BN', {
    enumerable: !0,
    get: function () {
      return i(d).default;
    },
  }),
    (t.web3 = r(_e));
  var p = bi();
  Object.defineProperty(t, 'getProvider', {
    enumerable: !0,
    get: function () {
      return p.getProvider;
    },
  }),
    Object.defineProperty(t, 'setProvider', {
      enumerable: !0,
      get: function () {
        return p.setProvider;
      },
    }),
    Object.defineProperty(t, 'AnchorProvider', {
      enumerable: !0,
      get: function () {
        return p.AnchorProvider;
      },
    }),
    o(Gn, t),
    o(ki(), t),
    (t.utils = r(Ve)),
    o(Ui(), t),
    o(Li, t),
    c.isBrowser || ((t.workspace = ry().default), (t.Wallet = Bn.default));
})(Nf);
(function (t) {
  var p, a;
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.HashablePublicKey =
      t.PubkeyHashMap =
      t.PublicKeyMap =
      t.PublicKeySet =
      t.NULL_PUBKEY =
        void 0),
    (t.isNotNullPubkey = r);
  const e = Nf,
    n = _e;
  t.NULL_PUBKEY = new n.PublicKey('nu11111111111111111111111111111111111111111');
  function r(A) {
    return A && !A.equals(t.NULL_PUBKEY) && !A.equals(n.PublicKey.default);
  }
  class o {
    constructor(h) {
      u(this, 'items', []);
      h.forEach((m) => this.add(m));
    }
    add(h) {
      this.contains(h) || this.items.push(h);
    }
    contains(h) {
      return this.items.some((m) => this.equals(m, h));
    }
    equals(h, m) {
      return h.equals(m);
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
      u(this, 'record', []);
    }
    set(h, m) {
      const g = this.findIndex(h);
      g !== -1 ? (this.record[g].value = m) : this.record.push({ key: h, value: m });
    }
    get(h) {
      const m = this.findIndex(h);
      return m !== -1 ? this.record[m].value : void 0;
    }
    has(h) {
      return this.findIndex(h) !== -1;
    }
    delete(h) {
      const m = this.findIndex(h);
      m !== -1 && this.record.splice(m, 1);
    }
    findIndex(h) {
      return this.record.findIndex((m) => m.key.equals(h));
    }
    clear() {
      this.record = [];
    }
    forEach(h) {
      this.record.forEach((m) => {
        h(m.value, m.key);
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
  t.PublicKeyMap = i;
  class c {
    constructor(h) {
      u(this, 'buckets');
      u(this, 'size');
      u(this, p, 'PubkeyHashMap');
      if (((this.buckets = new Map()), (this.size = 0), h)) for (const [m, g] of h) this.set(m, g);
    }
    *[((a = Symbol.iterator), (p = Symbol.toStringTag), a)]() {
      for (const [, h] of this.buckets) for (const { key: m, value: g } of h) yield [m, g];
    }
    set(h, m) {
      const g = new d(h).hashCode(),
        R = this.buckets.get(g);
      if (!R) this.buckets.set(g, [{ key: h, value: m }]), this.size++;
      else {
        const w = R.find((N) => N.key.equals(h));
        w ? (w.value = m) : (R.push({ key: h, value: m }), this.size++);
      }
      return this;
    }
    get(h) {
      const m = new d(h).hashCode(),
        g = this.buckets.get(m);
      if (!g) return;
      const R = g.find((w) => w.key.equals(h));
      return R ? R.value : void 0;
    }
    has(h) {
      const m = new d(h).hashCode(),
        g = this.buckets.get(m);
      return g ? !!g.find((w) => w.key.equals(h)) : !1;
    }
    delete(h) {
      const m = new d(h).hashCode(),
        g = this.buckets.get(m);
      if (!g) return !1;
      const R = g.findIndex((w) => w.key.equals(h));
      return R === -1
        ? !1
        : (g.splice(R, 1), g.length === 0 && this.buckets.delete(m), this.size--, !0);
    }
    clear() {
      (this.buckets = new Map()), (this.size = 0);
    }
    isEmpty() {
      return this.size === 0;
    }
    forEach(h, m) {
      this.buckets.forEach((g) => {
        g.forEach((R) => {
          h(R.value, R.key, this);
        }, m);
      }, m);
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
  t.PubkeyHashMap = c;
  const _ = class _ extends n.PublicKey {
    constructor(h) {
      super(h);
    }
    hashCode() {
      let h = 13;
      return (h = h * 7 + this.getBN().clone().iuand(_.MASK).toNumber()), h;
    }
    getBN() {
      return this._bn;
    }
  };
  u(_, 'MASK', new e.BN(1).shln(32).subn(1));
  let d = _;
  t.HashablePublicKey = d;
})(bf);
var Eu = {};
Object.defineProperty(Eu, '__esModule', { value: !0 });
Eu.getAllLookupTables = iy;
const qc = _e;
async function iy(t, e) {
  return (await t.getMultipleAccountsInfo(e)).map((o, i) => {
    const c = qc.AddressLookupTableAccount.deserialize(o.data);
    return new qc.AddressLookupTableAccount({ key: e[i], state: c });
  });
}
var Kf = {};
const oy = kr(o_);
(function (t) {
  var e =
    (b && b.__importDefault) ||
    function (H) {
      return H && H.__esModule ? H : { default: H };
    };
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.TransactionError =
      t.instructionEquals =
      t.getLookupTableAccountsFromKeys =
      t.MAX_LOCKED_ACCOUNTS =
        void 0),
    (t.base64EncodeTx = d),
    (t.sendAndConfirmTransactionV0 = p),
    (t.sendTx = a),
    (t.removeComputeBudgetIxns = _),
    (t.sendAndConfirmTransactionV0Impl = A),
    (t.confirmTx = m),
    (t.forceGetConfirmedTx = g),
    (t.getSimulationComputeUnits = w),
    (t.maxLockedAccounts = P),
    (t.uniqueAccounts = I),
    (t.arrayDeepEquals = F),
    (t.createAddExtraComputeUnitsTransaction = T),
    (t.getComputeUnitPrice = y),
    (t.isComputeBudgetComputeUnitLimit = v),
    (t.isComputeBudgetComputeUnitPrice = M),
    (t.overwriteComputeBudget = G),
    (t.getRecentAverageFees = z),
    (t.getAverageFeesPerCUForPeriodLamports = S),
    (t.getAverageFees = k),
    (t.getRpcRecentFeesOfPercentile = q);
  const n = _e,
    r = e(Pr),
    o = oy,
    i = Re,
    c = Bt;
  t.MAX_LOCKED_ACCOUNTS = 64;
  function d(H, V, te, se = void 0) {
    const ce = new n.TransactionMessage({
        payerKey: V,
        recentBlockhash: n.PublicKey.default.toBase58(),
        instructions: te,
      }).compileToV0Message(se),
      ue = new n.VersionedTransaction(ce),
      pe = ie.Buffer.from(ue.message.serialize()).toString('base64'),
      ge = ie.Buffer.from(ue.serialize()).toString('base64'),
      Ae =
        H === 'localnet'
          ? '?cluster=custom&customUrl=http://localhost:8899'
          : '?cluster='.concat(H.toString()),
      Ne = 'https://explorer.solana.com/tx/inspector'
        .concat(Ae, '&message=')
        .concat(encodeURIComponent(pe), '&signatures=')
        .concat(encodeURIComponent('['.concat(V.toBase58(), ']')));
    return { encodedTx: ge, simulationUrl: Ne };
  }
  async function p(H, V, te, se, ce, ue = '', pe = console.log) {
    let ge = te,
      Ae;
    const [Ne, ve] = await Promise.all([
      w(H, te, V.publicKey, se, ue, pe),
      H.getLatestBlockhashAndContext('finalized'),
    ]);
    ge = _(ge);
    const Tt = T(Ne ? Ne * 1.5 : 12e5, new r.default(await S(15)));
    ge.unshift(...Tt), (Ae = ve);
    const Ut = h(V, ge, se, ce, Ae);
    return A(H, Ut, Ae, ''.concat(ue, ' (confirm)'), pe);
  }
  async function a(H, V, te, se = '', ce = console.log) {
    var ue;
    try {
      const pe = await H.sendTransaction(V, {
          preflightCommitment: 'confirmed',
          maxRetries: 0,
          skipPreflight: !0,
          minContextSlot: te.context.slot,
        }),
        ge = 'https://explorer.solana.com/tx/'.concat(pe);
      return ce(''.concat(se, ' ').concat(ge)), pe;
    } catch (pe) {
      if ((ce(pe), pe.toString().includes('failed'))) {
        const Ae = pe.toString().split(' failed ')[0].split('Transaction ')[1];
        if (!Ae) throw pe;
        const Ne = await g(H, Ae);
        if (Ne) {
          const ve = ((ue = Ne.meta) == null ? void 0 : ue.logMessages) || void 0;
          throw new $(pe.message, Ae, ve);
        } else throw new $(pe.message, Ae);
      } else throw pe;
    }
  }
  function _(H) {
    return H.filter(({ programId: V }) => V !== c.COMPUTE_BUDGET_PROGRAM_ID);
  }
  async function A(H, V, te, se = '', ce = console.log) {
    var ge;
    const ue = await a(H, V, te, se, ce);
    if ((await m(H, te.value, ue)).value.err) {
      const Ae = await g(H, ue);
      if (Ae) {
        const Ne = ((ge = Ae.meta) == null ? void 0 : ge.logMessages) || void 0;
        throw new $('Failed to send transaction: '.concat(se, ' ').concat(ue), ue, Ne);
      } else throw new $('Failed to send transaction: '.concat(se, ' ').concat(ue), ue);
    }
    return ue;
  }
  function h(H, V, te, se, ce) {
    const { blockhash: ue } = ce.value,
      pe = new n.TransactionMessage({
        payerKey: H.publicKey,
        recentBlockhash: ue,
        instructions: V,
      }).compileToV0Message(te),
      ge = new n.VersionedTransaction(pe);
    return ge.sign([H, ...se]), ge;
  }
  async function m(H, V, te) {
    return (
      await H.confirmTransaction(
        { blockhash: V.blockhash, lastValidBlockHeight: V.lastValidBlockHeight, signature: te },
        'processed'
      ),
      H.confirmTransaction(
        { blockhash: V.blockhash, lastValidBlockHeight: V.lastValidBlockHeight, signature: te },
        'confirmed'
      )
    );
  }
  async function g(H, V) {
    console.log('forceGetConfirmedTx: '.concat(V));
    const te = { commitment: 'confirmed', maxSupportedTransactionVersion: 0 },
      se = Date.now() + 5e3;
    let ce = null,
      ue = null;
    for (;;) {
      try {
        if (((ue = await H.getTransaction(V, te)), ue)) return ue;
      } catch (pe) {
        ce = pe;
      }
      if (Date.now() > se) {
        if (ce) throw ce;
        return ue;
      }
      await R(1e3);
    }
  }
  function R(H) {
    return new Promise((V) => setTimeout(V, H));
  }
  async function w(H, V, te, se, ce = '', ue = console.log) {
    const pe = G(V, 2e6),
      ge = new n.VersionedTransaction(
        new n.TransactionMessage({
          instructions: pe,
          payerKey: te,
          recentBlockhash: n.PublicKey.default.toString(),
        }).compileToV0Message(se)
      );
    try {
      const Ae = await H.simulateTransaction(ge, { replaceRecentBlockhash: !0, sigVerify: !1 });
      return Ae.value.err
        ? (ue(
            ''
              .concat(ce, ' Error response from simulation: ')
              .concat(JSON.stringify(Ae.value.err), ', logs: ')
              .concat(Ae.value.logs)
          ),
          null)
        : Ae.value.unitsConsumed || null;
    } catch (Ae) {
      return ue(''.concat(ce, ' Error simulating transaction: ').concat(Ae)), null;
    }
  }
  const N = async (H, V) => {
    const te = [];
    for (const se of V) {
      const ce = await H.getAddressLookupTable(new n.PublicKey(se)).then((ue) => ue.value);
      if (!ce)
        throw (console.error('lookup table is not found'), new Error('lookup table is not found'));
      te.push(ce);
    }
    return te;
  };
  t.getLookupTableAccountsFromKeys = N;
  function P(H) {
    return t.MAX_LOCKED_ACCOUNTS - H;
  }
  function I(H, V = []) {
    let te;
    V.length > 0 && V[0] instanceof n.AddressLookupTableAccount
      ? (te = V.map((ce) => ce.key.toBase58()))
      : (te = V.map((ce) => ce.toBase58()));
    const se = H.map((ce) => ce.keys.map((ue) => ue.pubkey.toBase58()))
      .flat()
      .concat(...te);
    return new Set(se);
  }
  const B = (H, V) =>
    H.programId.equals(V.programId) &&
    F(
      H.keys,
      V.keys,
      (te, se) =>
        te.isSigner === se.isSigner &&
        te.isWritable === se.isWritable &&
        te.pubkey.equals(se.pubkey)
    ) &&
    F(Array.from(H.data), Array.from(V.data), (te, se) => te === se);
  t.instructionEquals = B;
  function F(H, V, te) {
    return H.length !== V.length
      ? !1
      : H.reduce((se, ce, ue) => {
          const pe = V[ue];
          return pe == null ? !1 : se && te(ce, pe);
        }, !0);
  }
  class $ extends Error {
    constructor(te, se, ce, ue) {
      super(te);
      u(this, 'sig');
      u(this, 'logs');
      u(this, 'err');
      (this.sig = se), (this.logs = ce), (this.err = ue);
    }
  }
  t.TransactionError = $;
  function T(H, V) {
    const te = [];
    if ((te.push(n.ComputeBudgetProgram.setComputeUnitLimit({ units: H })), V)) {
      const { microLamports: se } = y(H, V);
      te.push(n.ComputeBudgetProgram.setComputeUnitPrice({ microLamports: se }));
    }
    return te;
  }
  function y(H, V) {
    const ce = V.mul(1e6).div(H).mul(1).floor().toString();
    return (
      console.debug(
        'Fee per CU lamports: '
          .concat(V, ', units: ')
          .concat(H, ', compute unit price: ')
          .concat(ce)
      ),
      { microLamports: BigInt(ce) }
    );
  }
  function v(H) {
    return H === 'SetComputeUnitLimit';
  }
  function M(H) {
    return H === 'SetComputeUnitPrice';
  }
  function G(H, V) {
    const te = H.filter(
      (se) =>
        !se.programId.equals(c.COMPUTE_BUDGET_PROGRAM_ID) ||
        !v(n.ComputeBudgetInstruction.decodeInstructionType(se))
    );
    return te.unshift(n.ComputeBudgetProgram.setComputeUnitLimit({ units: V })), te;
  }
  const J = (0, i.getEnvOrDefault)('SOLANA_COMPASS_API_URL', 'https://solanacompass.com/api');
  async function z(H) {
    try {
      return H === 'mainnet-beta' ? new r.default(await S(1)) : void 0;
    } catch (V) {
      console.warn('Failed to get average fees', V);
      return;
    }
  }
  async function S(H) {
    return (await k())[H].avg;
  }
  async function k() {
    return await (await fetch(''.concat(J, '/fees'))).json();
  }
  async function q(H, V) {
    var Tn;
    const te = ''.concat(V.percentile ? ' P['.concat(V.percentile / 100, ']') : ''),
      se = ((Tn = V.lockedWritableAccounts) == null ? void 0 : Tn.length) || 'all global';
    console.log(
      'Fetching recent'.concat(te, ' priority fees from RPC for ').concat(se, ' accounts')
    );
    const [ce, ue] = await Promise.all([ee(V, H), H.getSlot()]),
      pe = ue - c.SLOTS_PER_MINUTE;
    let ge = 0,
      Ae = 0,
      Ne = new r.default('0');
    const ve = ce.result
      .filter((Et) =>
        Et.prioritizationFee <= 0
          ? (ge++, !1)
          : Et.slot < pe
            ? (Ae++, !1)
            : ((Ne = Ne.add(Et.prioritizationFee)), !0)
      )
      .sort((Et, tn) => Et.prioritizationFee - tn.prioritizationFee);
    if (ve.length === 0)
      return (
        console.log(
          'No valid 1 minute'
            .concat(te, ' priority fees returned from RPC for ')
            .concat(se, ' accounts, using 1 uLamports/CU. Filtered ')
            .concat(ge, ' zero fees and ')
            .concat(Ae, ' >1 minute fees')
        ),
        {
          min: new r.default('1'),
          max: new r.default('1'),
          average: new r.default('1'),
          median: new r.default('1'),
        }
      );
    if (ve.length === 1)
      return (
        console.log(
          'Fetched 1 valid 1 minute'
            .concat(te, ' priority fee from RPC for ')
            .concat(se, ' accounts, fee: ')
            .concat(ve[0].prioritizationFee, ' uLamports/CU. Filtered ')
            .concat(ge, ' zero fees and ')
            .concat(Ae, ' >1 minute fees')
        ),
        {
          min: new r.default(ve[0].prioritizationFee),
          max: new r.default(ve[0].prioritizationFee),
          average: new r.default(ve[0].prioritizationFee),
          median: new r.default(ve[0].prioritizationFee),
        }
      );
    const Tt = new r.default(ve[0].prioritizationFee),
      Ut = new r.default(ve[ve.length - 1].prioritizationFee),
      Rn = Ne.div(ve.length),
      yn = new r.default(ve[Math.floor(ve.length / 2)].prioritizationFee);
    return (
      console.log(
        'Fetched '
          .concat(ve.length, ' valid 1 minute')
          .concat(te, ' priority fees from RPC for ')
          .concat(se, ' accounts, median: ')
          .concat(yn, ' uLamports/CU, average: ')
          .concat(Rn, ' uLamports/CU, min: ')
          .concat(Tt, ' uLamports/CU, max: ')
          .concat(Ut, ' uLamports/CU. Filtered ')
          .concat(ge, ' zero fees and ')
          .concat(Ae, ' >1 minute fees')
      ),
      { min: Tt, max: Ut, average: Rn, median: yn }
    );
  }
  async function ee(H, V) {
    var pe;
    const te =
        ((pe = H == null ? void 0 : H.lockedWritableAccounts) == null
          ? void 0
          : pe.map((ge) => ge.toBase58())) || [],
      se = H.percentile ? { percentile: H.percentile } : {},
      ce = await fetch(V.rpcEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
        },
        body: JSON.stringify({
          method: 'getRecentPrioritizationFees',
          jsonrpc: '2.0',
          params: [[...te], xe({}, se)],
          id: (0, o.v4)(),
        }),
      });
    if (!ce.ok) throw new Error('Network response was not ok: '.concat(ce.statusText));
    const ue = await ce.json();
    if ('error' in ue)
      throw new n.SolanaJSONRPCError(
        ue.error,
        'Failed to get recent priority fees by accounts: '.concat(
          (H == null ? void 0 : H.lockedWritableAccounts) || []
        )
      );
    return ue;
  }
})(Kf);
var Fn = {};
Object.defineProperty(Fn, '__esModule', { value: !0 });
Fn.simulateSwapWithATABalances = ay;
Fn.extractTokenBalance = nr;
Fn.isSimulationSlippageError = Wf;
Fn.convertSimulatedAccount = es;
const rr = zt,
  Vf = _e,
  kt = pu,
  sy = Bt;
async function ay(t, e, n, r, o, i, c) {
  var d;
  try {
    const p = (0, rr.getAssociatedTokenAddressSync)(r, n, !0, i),
      a = (0, rr.getAssociatedTokenAddressSync)(o, n, !0, c),
      _ = [p.toString(), a.toString(), n.toString()],
      [A, h, m] = await Promise.all([
        t.getAccountInfo(p),
        t.getAccountInfo(a),
        t.getAccountInfo(n),
      ]),
      g = nr(A, r.toString()),
      R = nr(h, o.toString()),
      w = (m == null ? void 0 : m.lamports) || 0,
      N = {
        sigVerify: !1,
        commitment: 'confirmed',
        replaceRecentBlockhash: !0,
        accounts: { encoding: 'base64', addresses: _ },
      },
      P = await t.simulateTransaction(e, N);
    if (P.value.err)
      return {
        successful: !1,
        inputToken: null,
        outputToken: null,
        nativeChangeAmount: new kt.BN(0),
        isSlippageError: Wf(P),
        simulationResponse: P,
      };
    const I = P.value.accounts || [],
      B = nr(es(I[0]), r.toString()),
      F = nr(es(I[1]), o.toString()),
      $ = ((d = I[2]) == null ? void 0 : d.lamports) || 0,
      T = zc(r.toString(), g, B),
      y = zc(o.toString(), R, F),
      v = new kt.BN($).sub(new kt.BN(w)),
      M = Date.now();
    return {
      successful: !0,
      inputToken: T,
      outputToken: y,
      nativeChangeAmount: v,
      isSlippageError: !1,
      simulationResponse: P,
      simulationTimestamp: M,
    };
  } catch (p) {
    return {
      successful: !1,
      inputToken: null,
      outputToken: null,
      isSlippageError: !1,
      simulationResponse: void 0,
      nativeChangeAmount: new kt.BN(0),
    };
  }
}
function nr(t, e) {
  if (!t) return { mint: e, amount: new kt.BN(0) };
  try {
    if (ie.Buffer.isBuffer(t.data)) {
      if (t.owner.equals(sy.SYSTEM_PROGRAM_ID)) return { mint: e, amount: new kt.BN(0) };
      if (!(t.owner.equals(rr.TOKEN_PROGRAM_ID) || t.owner.equals(rr.TOKEN_2022_PROGRAM_ID)))
        return null;
      const n = rr.AccountLayout.decode(t.data);
      if (new Vf.PublicKey(n.mint).toString() !== e) return null;
      const o = new kt.BN(n.amount.toString());
      return { mint: e, amount: o };
    }
    return null;
  } catch (n) {
    return null;
  }
}
function Wf(t) {
  return (
    Array.isArray(t.value.logs) &&
    t.value.logs.some((e) => e && typeof e == 'string' && e.toLowerCase().includes('slippage'))
  );
}
function es(t) {
  var n;
  if (!t) return null;
  const e = Array.isArray(t.data) ? ie.Buffer.from(t.data[0], 'base64') : ie.Buffer.alloc(0);
  return {
    executable: t.executable,
    owner: new Vf.PublicKey(t.owner),
    lamports: t.lamports,
    data: e,
    rentEpoch: (n = t.rentEpoch) != null ? n : 0,
  };
}
function zc(t, e, n) {
  if (!e && !n) return null;
  const r = e || { mint: t, amount: new kt.BN(0) },
    o = n || { mint: t, amount: new kt.BN(0) };
  return { mint: t, beforeAmount: r.amount, afterAmount: o.amount, change: o.amount.sub(r.amount) };
}
(function (t) {
  var e =
      (b && b.__createBinding) ||
      (Object.create
        ? function (r, o, i, c) {
            c === void 0 && (c = i);
            var d = Object.getOwnPropertyDescriptor(o, i);
            (!d || ('get' in d ? !o.__esModule : d.writable || d.configurable)) &&
              (d = {
                enumerable: !0,
                get: function () {
                  return o[i];
                },
              }),
              Object.defineProperty(r, c, d);
          }
        : function (r, o, i, c) {
            c === void 0 && (c = i), (r[c] = o[i]);
          }),
    n =
      (b && b.__exportStar) ||
      function (r, o) {
        for (var i in r)
          i !== 'default' && !Object.prototype.hasOwnProperty.call(o, i) && e(o, r, i);
      };
  Object.defineProperty(t, '__esModule', { value: !0 }),
    n(Re, t),
    n(bf, t),
    n(Eu, t),
    n(Kf, t),
    n(Fn, t);
})(Br);
var Iu = {},
  qf = {};
Object.defineProperty(qf, '__esModule', { value: !0 });
var Kn = {};
Object.defineProperty(Kn, '__esModule', { value: !0 });
Kn.serializeRouteOutput = my;
Kn.deserializeRouteOutput = gy;
Kn.serializeRouteParams = Ay;
Kn.serializeQuoteParams = Oy;
const yt = _e,
  jt = pu,
  uy = ns,
  cy = Bt;
function ly(t) {
  const e = t.serialize();
  return ie.Buffer.from(e).toString('base64');
}
function dy(t) {
  if (!t) return;
  const e = ie.Buffer.from(t, 'base64');
  return yt.VersionedTransaction.deserialize(e);
}
function fy(t) {
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
function py(t) {
  return t
    ? t.map((e) => {
        const { programId: n, data: r, keys: o } = e,
          i = new yt.PublicKey(n),
          c = ie.Buffer.from(r, 'base64'),
          d = o.map((p) => ({
            pubkey: new yt.PublicKey(p.pubkey),
            isSigner: p.isSigner,
            isWritable: p.isWritable,
          }));
        return new yt.TransactionInstruction({ programId: i, data: c, keys: d });
      })
    : [];
}
function _y(t) {
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
function hy(t) {
  return t.map((e) => {
    const n = {
        deactivationSlot: BigInt(e.state.deactivationSlot),
        lastExtendedSlot: e.state.lastExtendedSlot,
        lastExtendedSlotStartIndex: e.state.lastExtendedSlotStartIndex,
        authority: e.state.authority ? new yt.PublicKey(e.state.authority) : void 0,
        addresses: e.state.addresses.map((o) => new yt.PublicKey(o)),
      },
      r = new yt.PublicKey(e.key);
    return new yt.AddressLookupTableAccount({ key: r, state: n });
  });
}
function my(t) {
  return {
    ixsRouterBs58: fy(t.ixsRouter),
    transactionBs58: t.transaction ? ly(t.transaction) : void 0,
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
    lookupTableAccountsBs58: t.lookupTableAccounts ? _y(t.lookupTableAccounts) : void 0,
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
  };
}
function gy(t) {
  if ((0, cy.isValidRouterType)(t.routerType))
    return {
      ixsRouter: py(t.ixsRouterBs58),
      transaction: dy(t.transactionBs58),
      amountsExactIn: {
        amountIn: new jt.BN(t.amountsExactIn.amountIn),
        amountOutGuaranteed: new jt.BN(t.amountsExactIn.amountOutGuaranteed),
        amountOut: new jt.BN(t.amountsExactIn.amountOut),
        amountOutSimulated: t.amountsExactIn.amountOutSimulated
          ? new jt.BN(t.amountsExactIn.amountOutSimulated)
          : void 0,
      },
      amountsExactOut: {
        amountOut: new jt.BN(t.amountsExactOut.amountOut),
        amountInGuaranteed: new jt.BN(t.amountsExactOut.amountInGuaranteed),
        amountIn: new jt.BN(t.amountsExactOut.amountIn),
        amountInSimulated: t.amountsExactOut.amountInSimulated
          ? new jt.BN(t.amountsExactOut.amountInSimulated)
          : void 0,
      },
      swapType: t.swapType,
      responseTimeGetQuoteMs: t.responseTimeGetQuoteMs,
      responseTimeSwapIxsMs: t.responseTimeSwapIxsMs,
      routerType: t.routerType,
      lookupTableAccounts: hy(t.lookupTableAccountsBs58 || []),
      expiryTime: t.expiryTime,
      perReferenceId: t.perReferenceId,
      priceImpactBps: t.priceImpactBps,
      simulatedPriceImpactBps: t.simulatedPriceImpactBps,
      guaranteedPriceImpactBps: t.guaranteedPriceImpactBps,
      birdeyeTokenInPriceInSol: t.birdeyeTokenInPriceInSol,
      birdeyeTokenOutPriceInSol: t.birdeyeTokenOutPriceInSol,
      simulationTimestamp: t.simulationTimestamp,
      inputMintProgramOwner: t.inputMintProgramOwner
        ? new yt.PublicKey(t.inputMintProgramOwner)
        : void 0,
      outputMintProgramOwner: t.outputMintProgramOwner
        ? new yt.PublicKey(t.outputMintProgramOwner)
        : void 0,
      inputTokenDecimals: t.inputTokenDecimals,
      outputTokenDecimals: t.outputTokenDecimals,
      jupRequestId: t.jupRequestId,
    };
}
function Ay(t) {
  return {
    tokenIn: t.tokenIn.toBase58(),
    tokenOut: t.tokenOut.toBase58(),
    amount: t.amount.toString(),
    swapType: t.swapType,
    executor: t.executor.toBase58(),
    referrerPda: t.referrerPda ? t.referrerPda.toBase58() : uy.limoId.toBase58(),
    maxSlippageBps: t.maxSlippageBps,
    includeSetupIxs: t.includeSetupIxs !== void 0 && !t.includeSetupIxs ? 'false' : 'true',
    wrapAndUnwrapSol: t.wrapAndUnwrapSol !== void 0 && !t.wrapAndUnwrapSol ? 'false' : 'true',
    routerTypes: t.routerTypes,
    includeLimoLogs: t.includeLimoLogs !== void 0 && !t.includeLimoLogs ? 'false' : 'true',
    includeRfq: t.includeRfq !== void 0 && !t.includeRfq ? 'false' : 'true',
    timeoutMs: t.timeoutMs,
  };
}
function Oy(t) {
  return {
    tokenIn: t.tokenIn.toBase58(),
    tokenOut: t.tokenOut.toBase58(),
    amount: t.amount.toString(),
    swapType: t.swapType,
    maxSlippageBps: t.maxSlippageBps,
    routerTypes: t.routerTypes,
    includeRfq: t.includeRfq !== void 0 && !t.includeRfq ? 'false' : 'true',
    timeoutMs: t.timeoutMs,
  };
}
var Vn = {},
  Ry =
    (b && b.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(Vn, '__esModule', { value: !0 });
Vn.wrapLimoLogsAroundRoute = Ey;
Vn.removeLimoLogsIxns = wy;
Vn.includeLimoLogs = by;
const pi = Bt,
  yy = zt,
  Mo = Ry(nt),
  Ty = gl();
function Ey(t) {
  const {
    route: e,
    params: n,
    limoClient: r,
    inputTokenProgramOwner: o,
    outputTokenProgramOwner: i,
    nextBestAmountOutSimulated: c,
    nextBestRouterTypeId: d,
  } = t;
  if (e.ixsRouter !== void 0 && e.routerType !== 'per' && e.routerType !== 'jupiterZ') {
    const p =
        n.swapType === 'exactIn'
          ? e.amountsExactIn.amountOutSimulated
          : e.amountsExactOut.amountOut,
      a = e.simulationTimestamp,
      _ =
        n.swapType === 'exactIn'
          ? e.amountsExactIn.amountOutGuaranteed
          : e.amountsExactOut.amountOut,
      A = n.swapType === 'exactIn' ? e.amountsExactIn.amountIn : e.amountsExactOut.amountIn,
      h = r.logUserSwapBalancesIxs({
        user: n.executor,
        inputMint: n.tokenIn,
        outputMint: n.tokenOut,
        inputMintProgramId: o,
        outputMintProgramId: i,
        swapProgarmId: pi.ROUTER_PROGRAM_MAP[e.routerType],
        simulatedSwapAmountOut: p || new Mo.default(0),
        simulatedTs: a ? new Mo.default(a) : new Mo.default(0),
        minimumAmountOut: _,
        swapAmountIn: A,
        simulatedAmountOutNextBest: c,
        aggregatorId: (0, pi.getRouterTypeID)(e.routerType),
        nextBestAggregatorId: d,
        pdaReferrer: n.referrerPda ? n.referrerPda : r.getProgramID(),
        voteAccount: pi.TRITON_VOTE_ACCOUNT,
      });
    e.ixsRouter = Iy(e.ixsRouter, e.routerType, h.beforeSwapIx, h.afterSwapIx, n);
  }
  return e;
}
function Iy(t, e, n, r, o) {
  try {
    const i = pi.ROUTER_PROGRAM_MAP[e];
    let c = -1;
    const d = [];
    if (
      (t.forEach((a, _) => a.programId.equals(i) && d.push(_)), e === 'raydium' || e === 'dflow')
    ) {
      if (d.length === 0) return t;
      o.tokenIn.equals(yy.NATIVE_MINT) && o.wrapAndUnwrapSol && d.length > 1
        ? (c = d[1])
        : (c = d[0]);
    } else {
      if (d.length > 1 || d.length === 0) return t;
      c = d[0];
    }
    if (c === -1) throw new Error('Instruction for router '.concat(e, ' not found'));
    const p = [...t];
    return p.splice(c, 0, n), p.splice(c + 2, 0, r), p;
  } catch (i) {
    return t;
  }
}
function wy(t) {
  return t.filter(({ programId: e }) => !e.equals((0, Ty.getLimoProgramId)('mainnet-beta')));
}
function by(t) {
  return t === void 0 ? !0 : t;
}
(function (t) {
  var e =
      (b && b.__createBinding) ||
      (Object.create
        ? function (r, o, i, c) {
            c === void 0 && (c = i);
            var d = Object.getOwnPropertyDescriptor(o, i);
            (!d || ('get' in d ? !o.__esModule : d.writable || d.configurable)) &&
              (d = {
                enumerable: !0,
                get: function () {
                  return o[i];
                },
              }),
              Object.defineProperty(r, c, d);
          }
        : function (r, o, i, c) {
            c === void 0 && (c = i), (r[c] = o[i]);
          }),
    n =
      (b && b.__exportStar) ||
      function (r, o) {
        for (var i in r)
          i !== 'default' && !Object.prototype.hasOwnProperty.call(o, i) && e(o, r, i);
      };
  Object.defineProperty(t, '__esModule', { value: !0 }), n(qf, t), n(Kn, t), n(Vn, t);
})(Iu);
var $i = {},
  Wn = {},
  Hi = {};
Object.defineProperty(Hi, '__esModule', { value: !0 });
Hi.base64ToVersionedTransaction = Cy;
Hi.extractInstructionsAndLookupTablesFromTxn = Sy;
const ts = _e,
  Ny = Br;
function Cy(t) {
  const e = ie.Buffer.from(t, 'base64');
  return ts.VersionedTransaction.deserialize(e);
}
async function Sy(t, e) {
  const n = e.message.addressTableLookups.map((c) => new ts.PublicKey(c.accountKey)),
    r = await (0, Ny.getAllLookupTables)(t, n),
    o = e.message.getAccountKeys({ addressLookupTableAccounts: r });
  return {
    instructions: e.message.compiledInstructions.map(
      (c) =>
        new ts.TransactionInstruction({
          programId: o.get(c.programIdIndex),
          keys: c.accountKeyIndexes.map((d) => ({
            pubkey: o.get(d),
            isSigner: e.message.isAccountSigner(d),
            isWritable: e.message.isAccountWritable(d),
          })),
          data: ie.Buffer.from(c.data),
        })
    ),
    lookupTables: r,
  };
}
var zf =
  (b && b.__importDefault) ||
  function (t) {
    return t && t.__esModule ? t : { default: t };
  };
Object.defineProperty(Wn, '__esModule', { value: !0 });
Wn.JupiterUltraRouter = void 0;
Wn.executeJupiterZTransaction = My;
Wn.fetchJupiterPrice = ky;
const Dn = zf(ol),
  Nn = zf(nt),
  ir = Bt,
  vy = Br,
  Yc = Hi;
class Py {
  constructor(e) {
    u(this, 'connection');
    u(this, 'baseUrl', ir.JUP_ULTRA_BASE_URL);
    u(this, 'routerType');
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
      return this.buildRouteOutput(r, e.swapType, o - n, 0);
    } catch (n) {
      console.error('Failed to get quote '.concat(n));
      return;
    }
  }
  async route(e) {
    try {
      if (e.swapType === 'exactOut') return;
      const n = Date.now(),
        r = await this.getSwapQuote({
          inputMint: e.tokenIn.toString(),
          outputMint: e.tokenOut.toString(),
          amount: e.amount.toNumber(),
          taker: e.executor.toString(),
        }),
        o = Date.now();
      if (!r.transaction) {
        console.error('Swap transaction is null');
        return;
      }
      const i = Number(r.priceImpactPct) * 100,
        c = (0, Yc.base64ToVersionedTransaction)(r.transaction);
      let d, p;
      const { instructions: a, lookupTables: _ } = await (0,
      Yc.extractInstructionsAndLookupTablesFromTxn)(this.connection, c);
      d = (0, vy.removeComputeBudgetProgram)(a);
      let A = !1;
      for (const m of d)
        if (
          m.programId.equals(ir.ROUTER_PROGRAM_MAP.jupiterU) ||
          m.programId.equals(ir.ROUTER_PROGRAM_MAP.jupiterZ)
        ) {
          A = !0;
          break;
        }
      if (!A) return;
      p = _;
      const h = Date.now();
      return st(xe({}, this.buildRouteOutput(r, e.swapType, o - n, h - o)), {
        transaction: c,
        ixsRouter: d,
        lookupTableAccounts: p,
        priceImpactBps: i,
      });
    } catch (n) {
      console.error('Failed to route swap: '.concat(n));
      return;
    }
  }
  async getSwapQuote(e) {
    try {
      return (await Dn.default.get(''.concat(this.baseUrl, '/order'), { params: e, headers: {} }))
        .data;
    } catch (n) {
      throw (
        (console.error(
          'Failed to fetch swap quote: '.concat(
            Dn.default.isAxiosError(n) ? n.message : 'Unknown error'
          )
        ),
        new Error(
          'Failed to fetch swap quote: '.concat(
            Dn.default.isAxiosError(n) ? n.message : 'Unknown error'
          )
        ))
      );
    }
  }
  buildRouteOutput(e, n, r, o) {
    return {
      amountsExactIn: {
        amountIn: new Nn.default(e.inAmount),
        amountOutGuaranteed: new Nn.default(e.otherAmountThreshold),
        amountOut: new Nn.default(e.outAmount),
      },
      amountsExactOut: {
        amountOut: new Nn.default(0),
        amountInGuaranteed: new Nn.default(0),
        amountIn: new Nn.default(0),
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
Wn.JupiterUltraRouter = Py;
async function My(t) {
  try {
    return (
      await Dn.default.post(
        ''.concat(ir.JUP_ULTRA_BASE_URL, '/execute'),
        { signedTransaction: t.signedTransaction, requestId: t.requestId },
        { headers: { 'Content-Type': 'application/json', Accept: 'application/json' } }
      )
    ).data;
  } catch (e) {
    throw Dn.default.isAxiosError(e) && e.response
      ? (console.error('Execute transaction failed:', e.response.data),
        new Error('Execute transaction failed: '.concat(JSON.stringify(e.response.data))))
      : (console.error('Execute transaction error:', e),
        new Error('Failed to execute transaction'));
  }
}
async function ky(t) {
  return (
    await Dn.default.get(ir.JUPITER_PRICE_API, {
      params: t,
      headers: { 'Content-Type': 'application/json' },
    })
  ).data;
}
var qn = {};
Object.defineProperty(qn, '__esModule', { value: !0 });
qn.addPricesAndPriceImpactToRouteOutput = Dy;
qn.calculatePriceImpactBps = dn;
qn.getAsyncDataFromApiRouteOutput = By;
qn.addAsyncDataToRouteOutput = xy;
function Dy(t, e) {
  var n, r, o, i;
  return (
    e !== void 0 &&
      e.birdeyeTokenInPriceInSol &&
      e.birdeyeTokenOutPriceInSol &&
      e.inputTokenDecimals &&
      e.outputTokenDecimals &&
      (t.swapType === 'exactIn'
        ? ((e.priceImpactBps = Math.max(
            dn(
              e.birdeyeTokenInPriceInSol,
              e.birdeyeTokenOutPriceInSol,
              e.amountsExactIn.amountIn.toNumber() / 10 ** e.inputTokenDecimals,
              e.amountsExactIn.amountOut.toNumber() / 10 ** e.outputTokenDecimals
            ),
            0
          )),
          (e.guaranteedPriceImpactBps = Math.max(
            dn(
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
                  dn(
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
            dn(
              e.birdeyeTokenInPriceInSol,
              e.birdeyeTokenOutPriceInSol,
              e.amountsExactOut.amountOut.toNumber() / 10 ** e.outputTokenDecimals,
              e.amountsExactOut.amountIn.toNumber() / 10 ** e.inputTokenDecimals
            ),
            0
          )),
          (e.guaranteedPriceImpactBps = Math.max(
            dn(
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
                  dn(
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
function dn(t, e, n, r) {
  const o = (n * t) / e;
  return (1 - r / o) * 100 * 100;
}
function By(t) {
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
function xy(t, e) {
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
var Yf =
  (b && b.__importDefault) ||
  function (t) {
    return t && t.__esModule ? t : { default: t };
  };
Object.defineProperty($i, '__esModule', { value: !0 });
$i.KswapSdk = void 0;
const li = _e,
  Cn = Iu,
  Uy = ol,
  Gt = Br,
  Ly = Yf(Mr),
  St = Bt,
  ko = Wn,
  Xc = zt,
  Jc = Yf(nt),
  $y = ns,
  Do = Vn,
  Bo = s_,
  ln = qn;
class Hy {
  constructor(e, n, r) {
    u(this, 'apiBaseUrl');
    u(this, 'connection');
    u(this, '_apiClient');
    u(this, 'limoClient');
    u(this, 'jupiterUltraRouter');
    u(this, 'allRouterTypes', [...St.SUPPORTED_ROUTER_TYPES]);
    (this.apiBaseUrl = e),
      (this.connection = n),
      (this._apiClient = new Uy.Axios({
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
      (this.jupiterUltraRouter = new ko.JupiterUltraRouter(this.connection)),
      (this.limoClient = new $y.LimoClient(this.connection, void 0));
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
        })
      : this.getAllQuotes({
          tokenIn: e.tokenIn,
          tokenOut: e.tokenOut,
          amount: e.amount,
          swapType: e.swapType,
          maxSlippageBps: e.maxSlippageBps,
          routerTypes: n,
        });
  }
  async getAllRoutes(e) {
    const n = '/all-routes',
      r = xe({}, e),
      o = e.routerTypes && e.routerTypes.length > 0 ? e.routerTypes : this.allRouterTypes;
    r.routerTypes = o;
    const i = (0, Cn.serializeRouteParams)(r),
      c = e.timeoutMs ? e.timeoutMs : St.DEFAULT_TIMEOUT_MS;
    try {
      let d;
      this.hasJupiterUltraRouter(r.routerTypes) &&
        (d = (0, Gt.withTimeout)(this.jupiterUltraRouter.route(r), c, () =>
          console.log('Router jupiterUltra timed out after '.concat(c, 'ms'))
        ));
      const p = this._apiClient.get(n, { params: i });
      let [a, _, A] = await Promise.all([p, d, this.connection.getLatestBlockhash()]);
      const m = a.data.data
        .map((R) => (0, Cn.deserializeRouteOutput)(R))
        .filter((R) => R !== void 0);
      let g = [];
      if (this.hasJupiterUltraRouter(r.routerTypes) && _) {
        if (_.routerType === 'jupiterZ' && e.includeRfq !== void 0 && !e.includeRfq) return m;
        const R = await this.getJupiterUltraRouteOutput(m, _, e, A);
        R
          ? (m.push(R),
            (0, Do.includeLimoLogs)(e.includeLimoLogs)
              ? (g = this.addOrReplaceLimoLogsInstructionWithNextBest(m, e))
              : (g = m))
          : (g = m);
      } else g = m;
      return g;
    } catch (d) {
      return console.error('Error fetching all routes', d), [];
    }
  }
  async getAllQuotes(e) {
    const n = '/all-quotes',
      r = xe({}, e);
    (r.routerTypes = this.filterRouterTypes(e.routerTypes)),
      (r.routerTypes = r.routerTypes.filter((c) => !St.EXCLUDED_QUOTES_ROUTERS.includes(c)));
    const o = (0, Cn.serializeQuoteParams)(r),
      i = e.timeoutMs ? e.timeoutMs : St.DEFAULT_TIMEOUT_MS;
    try {
      let c;
      this.hasJupiterUltraRouter(r.routerTypes) &&
        (c = (0, Gt.withTimeout)(this.jupiterUltraRouter.quote(r), i, () =>
          console.log('Router jupiterUltra timed out after '.concat(i, 'ms'))
        ));
      const d = this._apiClient.get(n, { params: o });
      let [p, a] = await Promise.all([d, c]);
      const A = p.data.data
        .map((h) => (0, Cn.deserializeRouteOutput)(h))
        .filter((h) => h !== void 0);
      if (this.hasJupiterUltraRouter(r.routerTypes) && a) {
        if (a.routerType === 'jupiterZ' && e.includeRfq !== void 0 && !e.includeRfq) return A;
        const h = (0, ln.getAsyncDataFromApiRouteOutput)(A);
        a = (0, ln.addAsyncDataToRouteOutput)(a, h);
        const m = (0, ln.addPricesAndPriceImpactToRouteOutput)(e, a);
        A.push(m);
      }
      return A;
    } catch (c) {
      return console.error('Error fetching all routes', c), [];
    }
  }
  async getBestRoute(e) {
    const n = '/best-route',
      r = xe({}, e);
    r.routerTypes = this.filterRouterTypes(e.routerTypes);
    const o = (0, Cn.serializeRouteParams)(r);
    try {
      const c = (await this._apiClient.get(n, { params: o })).data.data;
      return (0, Cn.deserializeRouteOutput)(c);
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
                .map(([p, a]) =>
                  Array.isArray(a)
                    ? a.map((_) => ''.concat(p, '=').concat(encodeURIComponent(_))).join('&')
                    : ''.concat(p, '=').concat(encodeURIComponent(a))
                )
                .join('&'),
          })
        ).data.data,
        c = new Map();
      return (
        Object.entries(i).forEach(([d, p]) => {
          c.set(d, p);
        }),
        c
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
      return await (0, ko.fetchJupiterPrice)(e);
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
      return await (0, Bo.createJupiterApiClient)({ basePath: St.JUP_V6_BASE_URL }).quoteGet(e);
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
      return await (0, Bo.createJupiterApiClient)({
        basePath: St.JUP_V6_BASE_URL,
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
      return await (0, Bo.createJupiterApiClient)({ basePath: St.JUP_V6_BASE_URL }).swapPost({
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
      o = [...(0, Gt.createAddExtraComputeUnitsTransaction)(8e5), ...e.routeOutput.ixsRouter],
      i = new li.TransactionMessage({
        payerKey: e.executor,
        recentBlockhash: e.bh,
        instructions: o,
      }).compileToV0Message(e.routeOutput.lookupTableAccounts),
      c = new li.VersionedTransaction(i);
    let d, p;
    if (!e.routeOutput.inputMintProgramOwner || !e.routeOutput.outputMintProgramOwner) {
      const _ = (0, Gt.getMintsProgramOwner)(this.connection, e.tokenIn),
        A = (0, Gt.getMintsProgramOwner)(this.connection, e.tokenOut);
      [d, p] = await Promise.all([_, A]);
    } else (d = e.routeOutput.inputMintProgramOwner), (p = e.routeOutput.outputMintProgramOwner);
    const a = await (0, Gt.simulateSwapWithATABalances)(
      this.connection,
      c,
      e.executor,
      e.tokenIn,
      e.tokenOut,
      d,
      p
    );
    if (a !== void 0 && a.outputToken !== null && a.inputToken !== null) {
      const _ = e.tokenOut.equals(Xc.NATIVE_MINT)
          ? a.outputToken.change.add(a.nativeChangeAmount)
          : a.outputToken.change,
        A = e.tokenIn.equals(Xc.NATIVE_MINT)
          ? a.inputToken.change.add(a.nativeChangeAmount)
          : a.inputToken.change;
      e.swapType === 'exactIn'
        ? (n.amountsExactIn.amountOutSimulated = _)
        : (n.amountsExactOut.amountInSimulated = A);
    }
    return { routeOutput: n, simulationResult: a };
  }
  async executeRoute(e) {
    if (e.router.routerType === 'per') return this.executePerRoute(e);
    if (e.router.routerType === 'jupiterZ') return this.executeJupierZRoute(e);
    {
      let n = e.router.ixsRouter.slice();
      e.computeBudgetInstructions &&
        e.computeBudgetInstructions.length > 0 &&
        ((n = (0, Gt.removeComputeBudgetIxns)(n)), n.unshift(...e.computeBudgetInstructions));
      const r = new li.TransactionMessage({
          payerKey: e.userToExecute,
          recentBlockhash: e.recentBlockhash,
          instructions: n,
        }).compileToV0Message(e.router.lookupTableAccounts),
        o = new li.VersionedTransaction(r),
        i = await e.signTransaction(o),
        c = await e.executeTransaction(i);
      return await e.confirmTransaction(c), c;
    }
  }
  async getJupiterUltraRouteOutput(e, n, r, o) {
    const i = (0, ln.getAsyncDataFromApiRouteOutput)(e);
    n = (0, ln.addAsyncDataToRouteOutput)(n, i);
    let c;
    return (
      n.routerType === 'jupiterZ'
        ? ((c = n),
          r.swapType === 'exactIn'
            ? (c.amountsExactIn.amountOutSimulated = c.amountsExactIn.amountOut)
            : (c.amountsExactOut.amountInSimulated = c.amountsExactOut.amountIn),
          (c.simulationTimestamp = Date.now()))
        : (c = (
            await this.simulateRouteAndGetNewSimulatedValuesRouteOutput({
              routeOutput: n,
              executor: r.executor,
              tokenIn: r.tokenIn,
              tokenOut: r.tokenOut,
              swapType: r.swapType,
              bh: o.blockhash,
            })
          ).routeOutput),
      (0, ln.addPricesAndPriceImpactToRouteOutput)(r, c)
    );
  }
  addOrReplaceLimoLogsInstructionWithNextBest(e, n) {
    try {
      let r = new Jc.default(0),
        o = 0,
        i = new Jc.default(0),
        c = 0,
        d = -1;
      const p = (0, ln.getAsyncDataFromApiRouteOutput)(e);
      return (
        e.forEach((a, _) => {
          if (a.amountsExactIn.amountOutSimulated !== void 0) {
            const A = a.amountsExactIn.amountOutSimulated;
            A.gt(i)
              ? ((r = i), (o = c), (i = A), (c = (0, St.getRouterTypeID)(a.routerType)), (d = _))
              : A.gt(r) && A.lte(i) && ((r = A), (o = (0, St.getRouterTypeID)(a.routerType)));
          }
        }),
        e.forEach((a) => {
          (a.ixsRouter = (0, Do.removeLimoLogsIxns)(a.ixsRouter)),
            (a = (0, Do.wrapLimoLogsAroundRoute)({
              route: a,
              params: n,
              limoClient: this.limoClient,
              inputTokenProgramOwner: p.inputMintProgramOwner,
              outputTokenProgramOwner: p.outputMintProgramOwner,
              nextBestAmountOutSimulated: r,
              nextBestRouterTypeId: o,
            }));
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
      let p = !0;
      for (const a of r)
        if ((0, Gt.compareUint8Arrays)(d, a)) {
          p = !1;
          break;
        }
      if (p) {
        i = Ly.default.encode(d);
        break;
      }
    }
    if (i === '') throw new Error('User signature not found');
    if (e.router.perReferenceId === void 0) throw new Error('PER reference ID not found');
    const c = await this.getExecutePerRoute({
      userSignature: i,
      perReferenceId: e.router.perReferenceId,
    });
    if (!c) throw new Error('Failed to submit transaction');
    return await e.confirmTransaction(c), c;
  }
  async executeJupierZRoute(e) {
    const n = e.router.transaction;
    if (e.router.jupRequestId === void 0) throw new Error('Jupiter reference ID not found');
    const r = await e.signTransaction(n),
      o = ie.Buffer.from(r.serialize()).toString('base64'),
      i = await (0, ko.executeJupiterZTransaction)({
        signedTransaction: o,
        requestId: e.router.jupRequestId,
      });
    if (i.status !== 'Success' || !i.signature)
      throw new Error('Failed to submit Jupiter Z transaction');
    const c = i.signature;
    return await e.confirmTransaction(c), c;
  }
  filterRouterTypes(e) {
    return e && e.length > 0 ? e : this.allRouterTypes;
  }
  hasJupiterUltraRouter(e) {
    return !e || e.includes('jupiterU') || e.includes('jupiterZ');
  }
}
$i.KswapSdk = Hy;
(function (t) {
  var e =
      (b && b.__createBinding) ||
      (Object.create
        ? function (r, o, i, c) {
            c === void 0 && (c = i);
            var d = Object.getOwnPropertyDescriptor(o, i);
            (!d || ('get' in d ? !o.__esModule : d.writable || d.configurable)) &&
              (d = {
                enumerable: !0,
                get: function () {
                  return o[i];
                },
              }),
              Object.defineProperty(r, c, d);
          }
        : function (r, o, i, c) {
            c === void 0 && (c = i), (r[c] = o[i]);
          }),
    n =
      (b && b.__exportStar) ||
      function (r, o) {
        for (var i in r)
          i !== 'default' && !Object.prototype.hasOwnProperty.call(o, i) && e(o, r, i);
      };
  Object.defineProperty(t, '__esModule', { value: !0 }), n(Br, t), n(Bt, t), n(Iu, t), n($i, t);
})(Al);
const jy = 'https://api.kamino.finance/kswap',
  hT = () => {
    const { web3client: t } = u_();
    return { kswapSdk: a_.useMemo(() => new Al.KswapSdk(jy, t.connection), [t]) };
  };
export { ns as d, sl as p, gl as r, hT as u };
//# sourceMappingURL=useKswapSdk-6qh4k4RZ.js.map
