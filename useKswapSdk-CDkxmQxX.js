var u_ = Object.defineProperty,
  c_ = Object.defineProperties;
var l_ = Object.getOwnPropertyDescriptors;
var si = Object.getOwnPropertySymbols;
var pc = Object.prototype.hasOwnProperty,
  _c = Object.prototype.propertyIsEnumerable;
var Oo = (t, e, n) =>
    e in t ? u_(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
  Be = (t, e) => {
    for (var n in e || (e = {})) pc.call(e, n) && Oo(t, n, e[n]);
    if (si) for (var n of si(e)) _c.call(e, n) && Oo(t, n, e[n]);
    return t;
  },
  at = (t, e) => c_(t, l_(e));
var hc = (t, e) => {
  var n = {};
  for (var r in t) pc.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && si) for (var r of si(t)) e.indexOf(r) < 0 && _c.call(t, r) && (n[r] = t[r]);
  return n;
};
var c = (t, e, n) => Oo(t, typeof e != 'symbol' ? e + '' : e, n);
import {
  b9 as w,
  bk as Je,
  bg as _e,
  ak as ie,
  bj as yt,
  be as ur,
  bf as cr,
  bh as Dr,
  bi as Bt,
  cS as fl,
  cT as xr,
  cU as me,
  P as Ve,
  B as zt,
  cV as Wo,
  bu as xn,
  b as Pe,
  cW as d_,
  bl as f_,
  cX as p_,
  cY as mc,
  b7 as pl,
  cq as _l,
  cZ as hl,
  c_ as __,
  c$ as h_,
  d0 as Br,
  d1 as ml,
  d2 as gl,
  d3 as m_,
  d4 as g_,
  d5 as bi,
  d6 as A_,
  d7 as O_,
  d8 as R_,
  d9 as y_,
  da as Al,
  db as T_,
  dc as fs,
  dd as Ol,
  r as E_,
} from './vendor-DpenelXu.js';
import { a as I_ } from './index-DTTOaJYD.js';
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
      (t._sentryDebugIds[e] = '87d87ab3-4f27-4bad-aa16-a845748a735f'),
      (t._sentryDebugIdIdentifier = 'sentry-dbid-87d87ab3-4f27-4bad-aa16-a845748a735f'));
  } catch (n) {}
})();
var Rl = {};
(function (t) {
  var a, _;
  var e =
    (w && w.__importDefault) ||
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
    r = e(Je);
  t.NULL_PUBKEY = new n.PublicKey('nu11111111111111111111111111111111111111111');
  function o(h) {
    return h && !h.equals(t.NULL_PUBKEY) && !h.equals(n.PublicKey.default);
  }
  class i {
    constructor(m) {
      c(this, 'items', []);
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
  class u {
    constructor() {
      c(this, 'record', []);
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
  t.PublicKeyMap = u;
  class d {
    constructor(m) {
      c(this, 'buckets');
      c(this, 'size');
      c(this, a, 'PubkeyHashMap');
      if (((this.buckets = new Map()), (this.size = 0), m)) for (const [g, R] of m) this.set(g, R);
    }
    *[((_ = Symbol.iterator), (a = Symbol.toStringTag), _)]() {
      for (const [, m] of this.buckets) for (const { key: g, value: R } of m) yield [g, R];
    }
    set(m, g) {
      const R = new p(m).hashCode(),
        b = this.buckets.get(R);
      if (!b) this.buckets.set(R, [{ key: m, value: g }]), this.size++;
      else {
        const N = b.find((P) => P.key.equals(m));
        N ? (N.value = g) : (b.push({ key: m, value: g }), this.size++);
      }
      return this;
    }
    get(m) {
      const g = new p(m).hashCode(),
        R = this.buckets.get(g);
      if (!R) return;
      const b = R.find((N) => N.key.equals(m));
      return b ? b.value : void 0;
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
      const b = R.findIndex((N) => N.key.equals(m));
      return b === -1
        ? !1
        : (R.splice(b, 1), R.length === 0 && this.buckets.delete(g), this.size--, !0);
    }
    clear() {
      (this.buckets = new Map()), (this.size = 0);
    }
    isEmpty() {
      return this.size === 0;
    }
    forEach(m, g) {
      this.buckets.forEach((R) => {
        R.forEach((b) => {
          m(b.value, b.key, this);
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
  c(A, 'MASK', new r.default(1).shln(32).subn(1));
  let p = A;
  t.HashablePublicKey = p;
})(Rl);
var Lr = {},
  Ro = {};
const w_ = '0.1.0',
  b_ = 'limo',
  N_ = [
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
  C_ = [
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
  S_ = [
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
  v_ = [
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
  P_ = [
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
  yl = { version: w_, name: b_, instructions: N_, accounts: C_, types: S_, events: v_, errors: P_ };
var yo = {},
  ut = {},
  ps = {},
  _s = {},
  ze = {};
(function (t) {
  Object.defineProperty(t, '__esModule', { value: !0 }), (t.PROGRAM_ID = t.PROGRAM_ID_CLI = void 0);
  const e = _e;
  (t.PROGRAM_ID_CLI = new e.PublicKey('LiMoM9rMhrdYrfzUCxQppvxCSG1FcrUK9G8uLq4A1GF')),
    (t.PROGRAM_ID = t.PROGRAM_ID_CLI);
})(ze);
Object.defineProperty(_s, '__esModule', { value: !0 });
_s.initializeGlobalConfig = D_;
const M_ = _e,
  k_ = ze;
function D_(t, e = k_.PROGRAM_ID) {
  const n = [
      { pubkey: t.adminAuthority, isSigner: !0, isWritable: !0 },
      { pubkey: t.pdaAuthority, isSigner: !1, isWritable: !0 },
      { pubkey: t.globalConfig, isSigner: !1, isWritable: !0 },
    ],
    o = ie.Buffer.from([113, 216, 122, 131, 225, 209, 22, 55]);
  return new M_.TransactionInstruction({ keys: n, programId: e, data: o });
}
var hs = {};
Object.defineProperty(hs, '__esModule', { value: !0 });
hs.initializeVault = L_;
const x_ = _e,
  B_ = ze;
function L_(t, e = B_.PROGRAM_ID) {
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
  return new x_.TransactionInstruction({ keys: n, programId: e, data: o });
}
var Tl = {};
(function (t) {
  var e =
      (w && w.__createBinding) ||
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
      (w && w.__setModuleDefault) ||
      (Object.create
        ? function (p, a) {
            Object.defineProperty(p, 'default', { enumerable: !0, value: a });
          }
        : function (p, a) {
            p.default = a;
          }),
    r =
      (w && w.__importStar) ||
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
    i = r(yt),
    u = ze;
  t.layout = i.struct([i.u64('inputAmount'), i.u64('outputAmount'), i.u8('orderType')]);
  function d(p, a, _ = u.PROGRAM_ID) {
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
})(Tl);
var ms = {};
Object.defineProperty(ms, '__esModule', { value: !0 });
ms.closeOrderAndClaimTip = j_;
const U_ = _e,
  $_ = ze;
function j_(t, e = $_.PROGRAM_ID) {
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
  return new U_.TransactionInstruction({ keys: n, programId: e, data: o });
}
var El = {};
(function (t) {
  var e =
      (w && w.__createBinding) ||
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
      (w && w.__setModuleDefault) ||
      (Object.create
        ? function (p, a) {
            Object.defineProperty(p, 'default', { enumerable: !0, value: a });
          }
        : function (p, a) {
            p.default = a;
          }),
    r =
      (w && w.__importStar) ||
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
    i = r(yt),
    u = ze;
  t.layout = i.struct([
    i.u64('inputAmount'),
    i.u64('minOutputAmount'),
    i.u64('tipAmountPermissionlessTaking'),
  ]);
  function d(p, a, _ = u.PROGRAM_ID) {
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
})(El);
var Il = {};
(function (t) {
  var e =
      (w && w.__createBinding) ||
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
      (w && w.__setModuleDefault) ||
      (Object.create
        ? function (p, a) {
            Object.defineProperty(p, 'default', { enumerable: !0, value: a });
          }
        : function (p, a) {
            p.default = a;
          }),
    r =
      (w && w.__importStar) ||
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
    i = r(yt),
    u = ze;
  t.layout = i.struct([
    i.u64('inputAmount'),
    i.u64('minOutputAmount'),
    i.u64('tipAmountPermissionlessTaking'),
  ]);
  function d(p, a, _ = u.PROGRAM_ID) {
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
})(Il);
var wl = {};
(function (t) {
  var e =
      (w && w.__createBinding) ||
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
      (w && w.__setModuleDefault) ||
      (Object.create
        ? function (p, a) {
            Object.defineProperty(p, 'default', { enumerable: !0, value: a });
          }
        : function (p, a) {
            p.default = a;
          }),
    r =
      (w && w.__importStar) ||
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
    i = r(yt),
    u = ze;
  t.layout = i.struct([
    i.u64('inputAmount'),
    i.u64('minOutputAmount'),
    i.u64('tipAmountPermissionlessTaking'),
  ]);
  function d(p, a, _ = u.PROGRAM_ID) {
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
})(wl);
var bl = {};
(function (t) {
  var e =
      (w && w.__createBinding) ||
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
      (w && w.__setModuleDefault) ||
      (Object.create
        ? function (p, a) {
            Object.defineProperty(p, 'default', { enumerable: !0, value: a });
          }
        : function (p, a) {
            p.default = a;
          }),
    r =
      (w && w.__importStar) ||
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
    i = r(yt),
    u = ze;
  t.layout = i.struct([i.u16('mode'), i.array(i.u8(), 128, 'value')]);
  function d(p, a, _ = u.PROGRAM_ID) {
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
})(bl);
var gs = {};
Object.defineProperty(gs, '__esModule', { value: !0 });
gs.updateGlobalConfigAdmin = F_;
const H_ = _e,
  G_ = ze;
function F_(t, e = G_.PROGRAM_ID) {
  const n = [
      { pubkey: t.adminAuthorityCached, isSigner: !0, isWritable: !1 },
      { pubkey: t.globalConfig, isSigner: !1, isWritable: !0 },
    ],
    o = ie.Buffer.from([184, 87, 23, 193, 156, 238, 175, 119]);
  return new H_.TransactionInstruction({ keys: n, programId: e, data: o });
}
var As = {};
Object.defineProperty(As, '__esModule', { value: !0 });
As.withdrawHostTip = W_;
const K_ = _e,
  V_ = ze;
function W_(t, e = V_.PROGRAM_ID) {
  const n = [
      { pubkey: t.adminAuthority, isSigner: !0, isWritable: !0 },
      { pubkey: t.globalConfig, isSigner: !1, isWritable: !0 },
      { pubkey: t.pdaAuthority, isSigner: !1, isWritable: !0 },
      { pubkey: t.systemProgram, isSigner: !1, isWritable: !1 },
    ],
    o = ie.Buffer.from([140, 246, 105, 165, 80, 85, 143, 18]);
  return new K_.TransactionInstruction({ keys: n, programId: e, data: o });
}
var Os = {};
Object.defineProperty(Os, '__esModule', { value: !0 });
Os.logUserSwapBalances = Y_;
const q_ = _e,
  z_ = ze;
function Y_(t, e = z_.PROGRAM_ID) {
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
  return new q_.TransactionInstruction({ keys: n, programId: e, data: o });
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
  var e = _s;
  Object.defineProperty(t, 'initializeGlobalConfig', {
    enumerable: !0,
    get: function () {
      return e.initializeGlobalConfig;
    },
  });
  var n = hs;
  Object.defineProperty(t, 'initializeVault', {
    enumerable: !0,
    get: function () {
      return n.initializeVault;
    },
  });
  var r = Tl;
  Object.defineProperty(t, 'createOrder', {
    enumerable: !0,
    get: function () {
      return r.createOrder;
    },
  });
  var o = ms;
  Object.defineProperty(t, 'closeOrderAndClaimTip', {
    enumerable: !0,
    get: function () {
      return o.closeOrderAndClaimTip;
    },
  });
  var i = El;
  Object.defineProperty(t, 'takeOrder', {
    enumerable: !0,
    get: function () {
      return i.takeOrder;
    },
  });
  var u = Il;
  Object.defineProperty(t, 'flashTakeOrderStart', {
    enumerable: !0,
    get: function () {
      return u.flashTakeOrderStart;
    },
  });
  var d = wl;
  Object.defineProperty(t, 'flashTakeOrderEnd', {
    enumerable: !0,
    get: function () {
      return d.flashTakeOrderEnd;
    },
  });
  var p = bl;
  Object.defineProperty(t, 'updateGlobalConfig', {
    enumerable: !0,
    get: function () {
      return p.updateGlobalConfig;
    },
  });
  var a = gs;
  Object.defineProperty(t, 'updateGlobalConfigAdmin', {
    enumerable: !0,
    get: function () {
      return a.updateGlobalConfigAdmin;
    },
  });
  var _ = As;
  Object.defineProperty(t, 'withdrawHostTip', {
    enumerable: !0,
    get: function () {
      return _.withdrawHostTip;
    },
  });
  var A = Os;
  Object.defineProperty(t, 'logUserSwapBalances', {
    enumerable: !0,
    get: function () {
      return A.logUserSwapBalances;
    },
  });
})(ps);
var To = {},
  Ni = {},
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
Y.fromCode = X_;
class Rs extends Error {
  constructor(n) {
    super('100: 8 byte instruction identifier not provided');
    c(this, 'logs');
    c(this, 'code', 100);
    c(this, 'name', 'InstructionMissing');
    c(this, 'msg', '8 byte instruction identifier not provided');
    this.logs = n;
  }
}
c(Rs, 'code', 100);
Y.InstructionMissing = Rs;
class ys extends Error {
  constructor(n) {
    super('101: Fallback functions are not supported');
    c(this, 'logs');
    c(this, 'code', 101);
    c(this, 'name', 'InstructionFallbackNotFound');
    c(this, 'msg', 'Fallback functions are not supported');
    this.logs = n;
  }
}
c(ys, 'code', 101);
Y.InstructionFallbackNotFound = ys;
class Ts extends Error {
  constructor(n) {
    super('102: The program could not deserialize the given instruction');
    c(this, 'logs');
    c(this, 'code', 102);
    c(this, 'name', 'InstructionDidNotDeserialize');
    c(this, 'msg', 'The program could not deserialize the given instruction');
    this.logs = n;
  }
}
c(Ts, 'code', 102);
Y.InstructionDidNotDeserialize = Ts;
class Es extends Error {
  constructor(n) {
    super('103: The program could not serialize the given instruction');
    c(this, 'logs');
    c(this, 'code', 103);
    c(this, 'name', 'InstructionDidNotSerialize');
    c(this, 'msg', 'The program could not serialize the given instruction');
    this.logs = n;
  }
}
c(Es, 'code', 103);
Y.InstructionDidNotSerialize = Es;
class Is extends Error {
  constructor(n) {
    super('1000: The program was compiled without idl instructions');
    c(this, 'logs');
    c(this, 'code', 1e3);
    c(this, 'name', 'IdlInstructionStub');
    c(this, 'msg', 'The program was compiled without idl instructions');
    this.logs = n;
  }
}
c(Is, 'code', 1e3);
Y.IdlInstructionStub = Is;
class ws extends Error {
  constructor(n) {
    super('1001: The transaction was given an invalid program for the IDL instruction');
    c(this, 'logs');
    c(this, 'code', 1001);
    c(this, 'name', 'IdlInstructionInvalidProgram');
    c(this, 'msg', 'The transaction was given an invalid program for the IDL instruction');
    this.logs = n;
  }
}
c(ws, 'code', 1001);
Y.IdlInstructionInvalidProgram = ws;
class bs extends Error {
  constructor(n) {
    super('2000: A mut constraint was violated');
    c(this, 'logs');
    c(this, 'code', 2e3);
    c(this, 'name', 'ConstraintMut');
    c(this, 'msg', 'A mut constraint was violated');
    this.logs = n;
  }
}
c(bs, 'code', 2e3);
Y.ConstraintMut = bs;
class Ns extends Error {
  constructor(n) {
    super('2001: A has one constraint was violated');
    c(this, 'logs');
    c(this, 'code', 2001);
    c(this, 'name', 'ConstraintHasOne');
    c(this, 'msg', 'A has one constraint was violated');
    this.logs = n;
  }
}
c(Ns, 'code', 2001);
Y.ConstraintHasOne = Ns;
class Cs extends Error {
  constructor(n) {
    super('2002: A signer constraint was violated');
    c(this, 'logs');
    c(this, 'code', 2002);
    c(this, 'name', 'ConstraintSigner');
    c(this, 'msg', 'A signer constraint was violated');
    this.logs = n;
  }
}
c(Cs, 'code', 2002);
Y.ConstraintSigner = Cs;
class Ss extends Error {
  constructor(n) {
    super('2003: A raw constraint was violated');
    c(this, 'logs');
    c(this, 'code', 2003);
    c(this, 'name', 'ConstraintRaw');
    c(this, 'msg', 'A raw constraint was violated');
    this.logs = n;
  }
}
c(Ss, 'code', 2003);
Y.ConstraintRaw = Ss;
class vs extends Error {
  constructor(n) {
    super('2004: An owner constraint was violated');
    c(this, 'logs');
    c(this, 'code', 2004);
    c(this, 'name', 'ConstraintOwner');
    c(this, 'msg', 'An owner constraint was violated');
    this.logs = n;
  }
}
c(vs, 'code', 2004);
Y.ConstraintOwner = vs;
class Ps extends Error {
  constructor(n) {
    super('2005: A rent exemption constraint was violated');
    c(this, 'logs');
    c(this, 'code', 2005);
    c(this, 'name', 'ConstraintRentExempt');
    c(this, 'msg', 'A rent exemption constraint was violated');
    this.logs = n;
  }
}
c(Ps, 'code', 2005);
Y.ConstraintRentExempt = Ps;
class Ms extends Error {
  constructor(n) {
    super('2006: A seeds constraint was violated');
    c(this, 'logs');
    c(this, 'code', 2006);
    c(this, 'name', 'ConstraintSeeds');
    c(this, 'msg', 'A seeds constraint was violated');
    this.logs = n;
  }
}
c(Ms, 'code', 2006);
Y.ConstraintSeeds = Ms;
class ks extends Error {
  constructor(n) {
    super('2007: An executable constraint was violated');
    c(this, 'logs');
    c(this, 'code', 2007);
    c(this, 'name', 'ConstraintExecutable');
    c(this, 'msg', 'An executable constraint was violated');
    this.logs = n;
  }
}
c(ks, 'code', 2007);
Y.ConstraintExecutable = ks;
class Ds extends Error {
  constructor(n) {
    super('2008: Deprecated Error, feel free to replace with something else');
    c(this, 'logs');
    c(this, 'code', 2008);
    c(this, 'name', 'ConstraintState');
    c(this, 'msg', 'Deprecated Error, feel free to replace with something else');
    this.logs = n;
  }
}
c(Ds, 'code', 2008);
Y.ConstraintState = Ds;
class xs extends Error {
  constructor(n) {
    super('2009: An associated constraint was violated');
    c(this, 'logs');
    c(this, 'code', 2009);
    c(this, 'name', 'ConstraintAssociated');
    c(this, 'msg', 'An associated constraint was violated');
    this.logs = n;
  }
}
c(xs, 'code', 2009);
Y.ConstraintAssociated = xs;
class Bs extends Error {
  constructor(n) {
    super('2010: An associated init constraint was violated');
    c(this, 'logs');
    c(this, 'code', 2010);
    c(this, 'name', 'ConstraintAssociatedInit');
    c(this, 'msg', 'An associated init constraint was violated');
    this.logs = n;
  }
}
c(Bs, 'code', 2010);
Y.ConstraintAssociatedInit = Bs;
class Ls extends Error {
  constructor(n) {
    super('2011: A close constraint was violated');
    c(this, 'logs');
    c(this, 'code', 2011);
    c(this, 'name', 'ConstraintClose');
    c(this, 'msg', 'A close constraint was violated');
    this.logs = n;
  }
}
c(Ls, 'code', 2011);
Y.ConstraintClose = Ls;
class Us extends Error {
  constructor(n) {
    super('2012: An address constraint was violated');
    c(this, 'logs');
    c(this, 'code', 2012);
    c(this, 'name', 'ConstraintAddress');
    c(this, 'msg', 'An address constraint was violated');
    this.logs = n;
  }
}
c(Us, 'code', 2012);
Y.ConstraintAddress = Us;
class $s extends Error {
  constructor(n) {
    super('2013: Expected zero account discriminant');
    c(this, 'logs');
    c(this, 'code', 2013);
    c(this, 'name', 'ConstraintZero');
    c(this, 'msg', 'Expected zero account discriminant');
    this.logs = n;
  }
}
c($s, 'code', 2013);
Y.ConstraintZero = $s;
class js extends Error {
  constructor(n) {
    super('2014: A token mint constraint was violated');
    c(this, 'logs');
    c(this, 'code', 2014);
    c(this, 'name', 'ConstraintTokenMint');
    c(this, 'msg', 'A token mint constraint was violated');
    this.logs = n;
  }
}
c(js, 'code', 2014);
Y.ConstraintTokenMint = js;
class Hs extends Error {
  constructor(n) {
    super('2015: A token owner constraint was violated');
    c(this, 'logs');
    c(this, 'code', 2015);
    c(this, 'name', 'ConstraintTokenOwner');
    c(this, 'msg', 'A token owner constraint was violated');
    this.logs = n;
  }
}
c(Hs, 'code', 2015);
Y.ConstraintTokenOwner = Hs;
class Gs extends Error {
  constructor(n) {
    super('2016: A mint mint authority constraint was violated');
    c(this, 'logs');
    c(this, 'code', 2016);
    c(this, 'name', 'ConstraintMintMintAuthority');
    c(this, 'msg', 'A mint mint authority constraint was violated');
    this.logs = n;
  }
}
c(Gs, 'code', 2016);
Y.ConstraintMintMintAuthority = Gs;
class Fs extends Error {
  constructor(n) {
    super('2017: A mint freeze authority constraint was violated');
    c(this, 'logs');
    c(this, 'code', 2017);
    c(this, 'name', 'ConstraintMintFreezeAuthority');
    c(this, 'msg', 'A mint freeze authority constraint was violated');
    this.logs = n;
  }
}
c(Fs, 'code', 2017);
Y.ConstraintMintFreezeAuthority = Fs;
class Ks extends Error {
  constructor(n) {
    super('2018: A mint decimals constraint was violated');
    c(this, 'logs');
    c(this, 'code', 2018);
    c(this, 'name', 'ConstraintMintDecimals');
    c(this, 'msg', 'A mint decimals constraint was violated');
    this.logs = n;
  }
}
c(Ks, 'code', 2018);
Y.ConstraintMintDecimals = Ks;
class Vs extends Error {
  constructor(n) {
    super('2019: A space constraint was violated');
    c(this, 'logs');
    c(this, 'code', 2019);
    c(this, 'name', 'ConstraintSpace');
    c(this, 'msg', 'A space constraint was violated');
    this.logs = n;
  }
}
c(Vs, 'code', 2019);
Y.ConstraintSpace = Vs;
class Ws extends Error {
  constructor(n) {
    super('2020: A required account for the constraint is None');
    c(this, 'logs');
    c(this, 'code', 2020);
    c(this, 'name', 'ConstraintAccountIsNone');
    c(this, 'msg', 'A required account for the constraint is None');
    this.logs = n;
  }
}
c(Ws, 'code', 2020);
Y.ConstraintAccountIsNone = Ws;
class qs extends Error {
  constructor(n) {
    super('2500: A require expression was violated');
    c(this, 'logs');
    c(this, 'code', 2500);
    c(this, 'name', 'RequireViolated');
    c(this, 'msg', 'A require expression was violated');
    this.logs = n;
  }
}
c(qs, 'code', 2500);
Y.RequireViolated = qs;
class zs extends Error {
  constructor(n) {
    super('2501: A require_eq expression was violated');
    c(this, 'logs');
    c(this, 'code', 2501);
    c(this, 'name', 'RequireEqViolated');
    c(this, 'msg', 'A require_eq expression was violated');
    this.logs = n;
  }
}
c(zs, 'code', 2501);
Y.RequireEqViolated = zs;
class Ys extends Error {
  constructor(n) {
    super('2502: A require_keys_eq expression was violated');
    c(this, 'logs');
    c(this, 'code', 2502);
    c(this, 'name', 'RequireKeysEqViolated');
    c(this, 'msg', 'A require_keys_eq expression was violated');
    this.logs = n;
  }
}
c(Ys, 'code', 2502);
Y.RequireKeysEqViolated = Ys;
class Xs extends Error {
  constructor(n) {
    super('2503: A require_neq expression was violated');
    c(this, 'logs');
    c(this, 'code', 2503);
    c(this, 'name', 'RequireNeqViolated');
    c(this, 'msg', 'A require_neq expression was violated');
    this.logs = n;
  }
}
c(Xs, 'code', 2503);
Y.RequireNeqViolated = Xs;
class Js extends Error {
  constructor(n) {
    super('2504: A require_keys_neq expression was violated');
    c(this, 'logs');
    c(this, 'code', 2504);
    c(this, 'name', 'RequireKeysNeqViolated');
    c(this, 'msg', 'A require_keys_neq expression was violated');
    this.logs = n;
  }
}
c(Js, 'code', 2504);
Y.RequireKeysNeqViolated = Js;
class Qs extends Error {
  constructor(n) {
    super('2505: A require_gt expression was violated');
    c(this, 'logs');
    c(this, 'code', 2505);
    c(this, 'name', 'RequireGtViolated');
    c(this, 'msg', 'A require_gt expression was violated');
    this.logs = n;
  }
}
c(Qs, 'code', 2505);
Y.RequireGtViolated = Qs;
class Zs extends Error {
  constructor(n) {
    super('2506: A require_gte expression was violated');
    c(this, 'logs');
    c(this, 'code', 2506);
    c(this, 'name', 'RequireGteViolated');
    c(this, 'msg', 'A require_gte expression was violated');
    this.logs = n;
  }
}
c(Zs, 'code', 2506);
Y.RequireGteViolated = Zs;
class ea extends Error {
  constructor(n) {
    super('3000: The account discriminator was already set on this account');
    c(this, 'logs');
    c(this, 'code', 3e3);
    c(this, 'name', 'AccountDiscriminatorAlreadySet');
    c(this, 'msg', 'The account discriminator was already set on this account');
    this.logs = n;
  }
}
c(ea, 'code', 3e3);
Y.AccountDiscriminatorAlreadySet = ea;
class ta extends Error {
  constructor(n) {
    super('3001: No 8 byte discriminator was found on the account');
    c(this, 'logs');
    c(this, 'code', 3001);
    c(this, 'name', 'AccountDiscriminatorNotFound');
    c(this, 'msg', 'No 8 byte discriminator was found on the account');
    this.logs = n;
  }
}
c(ta, 'code', 3001);
Y.AccountDiscriminatorNotFound = ta;
class na extends Error {
  constructor(n) {
    super('3002: 8 byte discriminator did not match what was expected');
    c(this, 'logs');
    c(this, 'code', 3002);
    c(this, 'name', 'AccountDiscriminatorMismatch');
    c(this, 'msg', '8 byte discriminator did not match what was expected');
    this.logs = n;
  }
}
c(na, 'code', 3002);
Y.AccountDiscriminatorMismatch = na;
class ra extends Error {
  constructor(n) {
    super('3003: Failed to deserialize the account');
    c(this, 'logs');
    c(this, 'code', 3003);
    c(this, 'name', 'AccountDidNotDeserialize');
    c(this, 'msg', 'Failed to deserialize the account');
    this.logs = n;
  }
}
c(ra, 'code', 3003);
Y.AccountDidNotDeserialize = ra;
class ia extends Error {
  constructor(n) {
    super('3004: Failed to serialize the account');
    c(this, 'logs');
    c(this, 'code', 3004);
    c(this, 'name', 'AccountDidNotSerialize');
    c(this, 'msg', 'Failed to serialize the account');
    this.logs = n;
  }
}
c(ia, 'code', 3004);
Y.AccountDidNotSerialize = ia;
class oa extends Error {
  constructor(n) {
    super('3005: Not enough account keys given to the instruction');
    c(this, 'logs');
    c(this, 'code', 3005);
    c(this, 'name', 'AccountNotEnoughKeys');
    c(this, 'msg', 'Not enough account keys given to the instruction');
    this.logs = n;
  }
}
c(oa, 'code', 3005);
Y.AccountNotEnoughKeys = oa;
class sa extends Error {
  constructor(n) {
    super('3006: The given account is not mutable');
    c(this, 'logs');
    c(this, 'code', 3006);
    c(this, 'name', 'AccountNotMutable');
    c(this, 'msg', 'The given account is not mutable');
    this.logs = n;
  }
}
c(sa, 'code', 3006);
Y.AccountNotMutable = sa;
class aa extends Error {
  constructor(n) {
    super('3007: The given account is owned by a different program than expected');
    c(this, 'logs');
    c(this, 'code', 3007);
    c(this, 'name', 'AccountOwnedByWrongProgram');
    c(this, 'msg', 'The given account is owned by a different program than expected');
    this.logs = n;
  }
}
c(aa, 'code', 3007);
Y.AccountOwnedByWrongProgram = aa;
class ua extends Error {
  constructor(n) {
    super('3008: Program ID was not as expected');
    c(this, 'logs');
    c(this, 'code', 3008);
    c(this, 'name', 'InvalidProgramId');
    c(this, 'msg', 'Program ID was not as expected');
    this.logs = n;
  }
}
c(ua, 'code', 3008);
Y.InvalidProgramId = ua;
class ca extends Error {
  constructor(n) {
    super('3009: Program account is not executable');
    c(this, 'logs');
    c(this, 'code', 3009);
    c(this, 'name', 'InvalidProgramExecutable');
    c(this, 'msg', 'Program account is not executable');
    this.logs = n;
  }
}
c(ca, 'code', 3009);
Y.InvalidProgramExecutable = ca;
class la extends Error {
  constructor(n) {
    super('3010: The given account did not sign');
    c(this, 'logs');
    c(this, 'code', 3010);
    c(this, 'name', 'AccountNotSigner');
    c(this, 'msg', 'The given account did not sign');
    this.logs = n;
  }
}
c(la, 'code', 3010);
Y.AccountNotSigner = la;
class da extends Error {
  constructor(n) {
    super('3011: The given account is not owned by the system program');
    c(this, 'logs');
    c(this, 'code', 3011);
    c(this, 'name', 'AccountNotSystemOwned');
    c(this, 'msg', 'The given account is not owned by the system program');
    this.logs = n;
  }
}
c(da, 'code', 3011);
Y.AccountNotSystemOwned = da;
class fa extends Error {
  constructor(n) {
    super('3012: The program expected this account to be already initialized');
    c(this, 'logs');
    c(this, 'code', 3012);
    c(this, 'name', 'AccountNotInitialized');
    c(this, 'msg', 'The program expected this account to be already initialized');
    this.logs = n;
  }
}
c(fa, 'code', 3012);
Y.AccountNotInitialized = fa;
class pa extends Error {
  constructor(n) {
    super('3013: The given account is not a program data account');
    c(this, 'logs');
    c(this, 'code', 3013);
    c(this, 'name', 'AccountNotProgramData');
    c(this, 'msg', 'The given account is not a program data account');
    this.logs = n;
  }
}
c(pa, 'code', 3013);
Y.AccountNotProgramData = pa;
class _a extends Error {
  constructor(n) {
    super('3014: The given account is not the associated token account');
    c(this, 'logs');
    c(this, 'code', 3014);
    c(this, 'name', 'AccountNotAssociatedTokenAccount');
    c(this, 'msg', 'The given account is not the associated token account');
    this.logs = n;
  }
}
c(_a, 'code', 3014);
Y.AccountNotAssociatedTokenAccount = _a;
class ha extends Error {
  constructor(n) {
    super('3015: The given public key does not match the required sysvar');
    c(this, 'logs');
    c(this, 'code', 3015);
    c(this, 'name', 'AccountSysvarMismatch');
    c(this, 'msg', 'The given public key does not match the required sysvar');
    this.logs = n;
  }
}
c(ha, 'code', 3015);
Y.AccountSysvarMismatch = ha;
class ma extends Error {
  constructor(n) {
    super('3016: The account reallocation exceeds the MAX_PERMITTED_DATA_INCREASE limit');
    c(this, 'logs');
    c(this, 'code', 3016);
    c(this, 'name', 'AccountReallocExceedsLimit');
    c(this, 'msg', 'The account reallocation exceeds the MAX_PERMITTED_DATA_INCREASE limit');
    this.logs = n;
  }
}
c(ma, 'code', 3016);
Y.AccountReallocExceedsLimit = ma;
class ga extends Error {
  constructor(n) {
    super('3017: The account was duplicated for more than one reallocation');
    c(this, 'logs');
    c(this, 'code', 3017);
    c(this, 'name', 'AccountDuplicateReallocs');
    c(this, 'msg', 'The account was duplicated for more than one reallocation');
    this.logs = n;
  }
}
c(ga, 'code', 3017);
Y.AccountDuplicateReallocs = ga;
class Aa extends Error {
  constructor(n) {
    super('4100: The declared program id does not match the actual program id');
    c(this, 'logs');
    c(this, 'code', 4100);
    c(this, 'name', 'DeclaredProgramIdMismatch');
    c(this, 'msg', 'The declared program id does not match the actual program id');
    this.logs = n;
  }
}
c(Aa, 'code', 4100);
Y.DeclaredProgramIdMismatch = Aa;
class Oa extends Error {
  constructor(n) {
    super('5000: The API being used is deprecated and should no longer be used');
    c(this, 'logs');
    c(this, 'code', 5e3);
    c(this, 'name', 'Deprecated');
    c(this, 'msg', 'The API being used is deprecated and should no longer be used');
    this.logs = n;
  }
}
c(Oa, 'code', 5e3);
Y.Deprecated = Oa;
function X_(t, e) {
  switch (t) {
    case 100:
      return new Rs(e);
    case 101:
      return new ys(e);
    case 102:
      return new Ts(e);
    case 103:
      return new Es(e);
    case 1e3:
      return new Is(e);
    case 1001:
      return new ws(e);
    case 2e3:
      return new bs(e);
    case 2001:
      return new Ns(e);
    case 2002:
      return new Cs(e);
    case 2003:
      return new Ss(e);
    case 2004:
      return new vs(e);
    case 2005:
      return new Ps(e);
    case 2006:
      return new Ms(e);
    case 2007:
      return new ks(e);
    case 2008:
      return new Ds(e);
    case 2009:
      return new xs(e);
    case 2010:
      return new Bs(e);
    case 2011:
      return new Ls(e);
    case 2012:
      return new Us(e);
    case 2013:
      return new $s(e);
    case 2014:
      return new js(e);
    case 2015:
      return new Hs(e);
    case 2016:
      return new Gs(e);
    case 2017:
      return new Fs(e);
    case 2018:
      return new Ks(e);
    case 2019:
      return new Vs(e);
    case 2020:
      return new Ws(e);
    case 2500:
      return new qs(e);
    case 2501:
      return new zs(e);
    case 2502:
      return new Ys(e);
    case 2503:
      return new Xs(e);
    case 2504:
      return new Js(e);
    case 2505:
      return new Qs(e);
    case 2506:
      return new Zs(e);
    case 3e3:
      return new ea(e);
    case 3001:
      return new ta(e);
    case 3002:
      return new na(e);
    case 3003:
      return new ra(e);
    case 3004:
      return new ia(e);
    case 3005:
      return new oa(e);
    case 3006:
      return new sa(e);
    case 3007:
      return new aa(e);
    case 3008:
      return new ua(e);
    case 3009:
      return new ca(e);
    case 3010:
      return new la(e);
    case 3011:
      return new da(e);
    case 3012:
      return new fa(e);
    case 3013:
      return new pa(e);
    case 3014:
      return new _a(e);
    case 3015:
      return new ha(e);
    case 3016:
      return new ma(e);
    case 3017:
      return new ga(e);
    case 4100:
      return new Aa(e);
    case 5e3:
      return new Oa(e);
  }
  return null;
}
var Z = {};
Object.defineProperty(Z, '__esModule', { value: !0 });
Z.InvalidTokenAuthority =
  Z.InvalidTokenMint =
  Z.InvalidAccount =
  Z.InvalidTokenAccountOwner =
  Z.UninitializedTokenAccount =
  Z.OrderTypeInvalid =
  Z.InvalidTokenAccount =
  Z.UnsupportedTokenExtension =
  Z.OrderSameMint =
  Z.NotEnoughTimePassedSinceLastUpdate =
  Z.NotEnoughBalanceForRent =
  Z.IntermediaryOutputTokenAccountRequired =
  Z.MakerOutputAtaRequired =
  Z.InvalidAtaAddress =
  Z.PermissionDoesNotMatchOrder =
  Z.PermissionRequiredPermissionlessNotEnabled =
  Z.OrderInputAmountTooLarge =
  Z.OrderTakingBlocked =
  Z.CreatingNewOrdersBlocked =
  Z.EmergencyModeEnabled =
  Z.OrderNotWithinFlashOperation =
  Z.FlashIxsArgsMismatch =
  Z.FlashIxsAccountMismatch =
  Z.FlashIxsNotStarted =
  Z.FlashIxsNotEnded =
  Z.FlashTxWithUnexpectedIxs =
  Z.FlashTakeOrderBlocked =
  Z.CPINotAllowed =
  Z.OrderWithinFlashOperation =
  Z.InvalidHostTipBalance =
  Z.InvalidTipTransferAmount =
  Z.InvalidTipBalance =
  Z.IntegerOverflow =
  Z.InvalidHostFee =
  Z.OrderOutputAmountInvalid =
  Z.OrderInputAmountInvalid =
  Z.MathOverflow =
  Z.InvalidFlag =
  Z.OutOfRangeIntegralConversion =
  Z.InvalidOrderOwner =
  Z.InvalidConfigOption =
  Z.InvalidPdaAuthority =
  Z.InvalidAdminAuthority =
  Z.OrderNotActive =
  Z.OrderCanNotBeCanceled =
    void 0;
Z.fromCode = J_;
class Ra extends Error {
  constructor(n) {
    super("6000: Order can't be canceled");
    c(this, 'logs');
    c(this, 'code', 6e3);
    c(this, 'name', 'OrderCanNotBeCanceled');
    c(this, 'msg', "Order can't be canceled");
    this.logs = n;
  }
}
c(Ra, 'code', 6e3);
Z.OrderCanNotBeCanceled = Ra;
class ya extends Error {
  constructor(n) {
    super('6001: Order not active');
    c(this, 'logs');
    c(this, 'code', 6001);
    c(this, 'name', 'OrderNotActive');
    c(this, 'msg', 'Order not active');
    this.logs = n;
  }
}
c(ya, 'code', 6001);
Z.OrderNotActive = ya;
class Ta extends Error {
  constructor(n) {
    super('6002: Invalid admin authority');
    c(this, 'logs');
    c(this, 'code', 6002);
    c(this, 'name', 'InvalidAdminAuthority');
    c(this, 'msg', 'Invalid admin authority');
    this.logs = n;
  }
}
c(Ta, 'code', 6002);
Z.InvalidAdminAuthority = Ta;
class Ea extends Error {
  constructor(n) {
    super('6003: Invalid pda authority');
    c(this, 'logs');
    c(this, 'code', 6003);
    c(this, 'name', 'InvalidPdaAuthority');
    c(this, 'msg', 'Invalid pda authority');
    this.logs = n;
  }
}
c(Ea, 'code', 6003);
Z.InvalidPdaAuthority = Ea;
class Ia extends Error {
  constructor(n) {
    super('6004: Invalid config option');
    c(this, 'logs');
    c(this, 'code', 6004);
    c(this, 'name', 'InvalidConfigOption');
    c(this, 'msg', 'Invalid config option');
    this.logs = n;
  }
}
c(Ia, 'code', 6004);
Z.InvalidConfigOption = Ia;
class wa extends Error {
  constructor(n) {
    super('6005: Order owner account is not the order owner');
    c(this, 'logs');
    c(this, 'code', 6005);
    c(this, 'name', 'InvalidOrderOwner');
    c(this, 'msg', 'Order owner account is not the order owner');
    this.logs = n;
  }
}
c(wa, 'code', 6005);
Z.InvalidOrderOwner = wa;
class ba extends Error {
  constructor(n) {
    super('6006: Out of range integral conversion attempted');
    c(this, 'logs');
    c(this, 'code', 6006);
    c(this, 'name', 'OutOfRangeIntegralConversion');
    c(this, 'msg', 'Out of range integral conversion attempted');
    this.logs = n;
  }
}
c(ba, 'code', 6006);
Z.OutOfRangeIntegralConversion = ba;
class Na extends Error {
  constructor(n) {
    super('6007: Invalid boolean flag, valid values are 0 and 1');
    c(this, 'logs');
    c(this, 'code', 6007);
    c(this, 'name', 'InvalidFlag');
    c(this, 'msg', 'Invalid boolean flag, valid values are 0 and 1');
    this.logs = n;
  }
}
c(Na, 'code', 6007);
Z.InvalidFlag = Na;
class Ca extends Error {
  constructor(n) {
    super('6008: Mathematical operation with overflow');
    c(this, 'logs');
    c(this, 'code', 6008);
    c(this, 'name', 'MathOverflow');
    c(this, 'msg', 'Mathematical operation with overflow');
    this.logs = n;
  }
}
c(Ca, 'code', 6008);
Z.MathOverflow = Ca;
class Sa extends Error {
  constructor(n) {
    super('6009: Order input amount invalid');
    c(this, 'logs');
    c(this, 'code', 6009);
    c(this, 'name', 'OrderInputAmountInvalid');
    c(this, 'msg', 'Order input amount invalid');
    this.logs = n;
  }
}
c(Sa, 'code', 6009);
Z.OrderInputAmountInvalid = Sa;
class va extends Error {
  constructor(n) {
    super('6010: Order output amount invalid');
    c(this, 'logs');
    c(this, 'code', 6010);
    c(this, 'name', 'OrderOutputAmountInvalid');
    c(this, 'msg', 'Order output amount invalid');
    this.logs = n;
  }
}
c(va, 'code', 6010);
Z.OrderOutputAmountInvalid = va;
class Pa extends Error {
  constructor(n) {
    super('6011: Host fee bps must be between 0 and 10000');
    c(this, 'logs');
    c(this, 'code', 6011);
    c(this, 'name', 'InvalidHostFee');
    c(this, 'msg', 'Host fee bps must be between 0 and 10000');
    this.logs = n;
  }
}
c(Pa, 'code', 6011);
Z.InvalidHostFee = Pa;
class Ma extends Error {
  constructor(n) {
    super('6012: Conversion between integers failed');
    c(this, 'logs');
    c(this, 'code', 6012);
    c(this, 'name', 'IntegerOverflow');
    c(this, 'msg', 'Conversion between integers failed');
    this.logs = n;
  }
}
c(Ma, 'code', 6012);
Z.IntegerOverflow = Ma;
class ka extends Error {
  constructor(n) {
    super('6013: Tip balance less than accounted tip');
    c(this, 'logs');
    c(this, 'code', 6013);
    c(this, 'name', 'InvalidTipBalance');
    c(this, 'msg', 'Tip balance less than accounted tip');
    this.logs = n;
  }
}
c(ka, 'code', 6013);
Z.InvalidTipBalance = ka;
class Da extends Error {
  constructor(n) {
    super('6014: Tip transfer amount is less than expected');
    c(this, 'logs');
    c(this, 'code', 6014);
    c(this, 'name', 'InvalidTipTransferAmount');
    c(this, 'msg', 'Tip transfer amount is less than expected');
    this.logs = n;
  }
}
c(Da, 'code', 6014);
Z.InvalidTipTransferAmount = Da;
class xa extends Error {
  constructor(n) {
    super('6015: Host tup amount is less than accounted for');
    c(this, 'logs');
    c(this, 'code', 6015);
    c(this, 'name', 'InvalidHostTipBalance');
    c(this, 'msg', 'Host tup amount is less than accounted for');
    this.logs = n;
  }
}
c(xa, 'code', 6015);
Z.InvalidHostTipBalance = xa;
class Ba extends Error {
  constructor(n) {
    super('6016: Order within flash operation - all otehr actions are blocked');
    c(this, 'logs');
    c(this, 'code', 6016);
    c(this, 'name', 'OrderWithinFlashOperation');
    c(this, 'msg', 'Order within flash operation - all otehr actions are blocked');
    this.logs = n;
  }
}
c(Ba, 'code', 6016);
Z.OrderWithinFlashOperation = Ba;
class La extends Error {
  constructor(n) {
    super('6017: CPI not allowed');
    c(this, 'logs');
    c(this, 'code', 6017);
    c(this, 'name', 'CPINotAllowed');
    c(this, 'msg', 'CPI not allowed');
    this.logs = n;
  }
}
c(La, 'code', 6017);
Z.CPINotAllowed = La;
class Ua extends Error {
  constructor(n) {
    super('6018: Flash take_order is blocked');
    c(this, 'logs');
    c(this, 'code', 6018);
    c(this, 'name', 'FlashTakeOrderBlocked');
    c(this, 'msg', 'Flash take_order is blocked');
    this.logs = n;
  }
}
c(Ua, 'code', 6018);
Z.FlashTakeOrderBlocked = Ua;
class $a extends Error {
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
c($a, 'code', 6019);
Z.FlashTxWithUnexpectedIxs = $a;
class ja extends Error {
  constructor(n) {
    super('6020: Flash ixs initiated without the closing ix in the transaction');
    c(this, 'logs');
    c(this, 'code', 6020);
    c(this, 'name', 'FlashIxsNotEnded');
    c(this, 'msg', 'Flash ixs initiated without the closing ix in the transaction');
    this.logs = n;
  }
}
c(ja, 'code', 6020);
Z.FlashIxsNotEnded = ja;
class Ha extends Error {
  constructor(n) {
    super('6021: Flash ixs ended without the starting ix in the transaction');
    c(this, 'logs');
    c(this, 'code', 6021);
    c(this, 'name', 'FlashIxsNotStarted');
    c(this, 'msg', 'Flash ixs ended without the starting ix in the transaction');
    this.logs = n;
  }
}
c(Ha, 'code', 6021);
Z.FlashIxsNotStarted = Ha;
class Ga extends Error {
  constructor(n) {
    super('6022: Some accounts differ between the two flash ixs');
    c(this, 'logs');
    c(this, 'code', 6022);
    c(this, 'name', 'FlashIxsAccountMismatch');
    c(this, 'msg', 'Some accounts differ between the two flash ixs');
    this.logs = n;
  }
}
c(Ga, 'code', 6022);
Z.FlashIxsAccountMismatch = Ga;
class Fa extends Error {
  constructor(n) {
    super('6023: Some args differ between the two flash ixs');
    c(this, 'logs');
    c(this, 'code', 6023);
    c(this, 'name', 'FlashIxsArgsMismatch');
    c(this, 'msg', 'Some args differ between the two flash ixs');
    this.logs = n;
  }
}
c(Fa, 'code', 6023);
Z.FlashIxsArgsMismatch = Fa;
class Ka extends Error {
  constructor(n) {
    super('6024: Order is not within flash operation');
    c(this, 'logs');
    c(this, 'code', 6024);
    c(this, 'name', 'OrderNotWithinFlashOperation');
    c(this, 'msg', 'Order is not within flash operation');
    this.logs = n;
  }
}
c(Ka, 'code', 6024);
Z.OrderNotWithinFlashOperation = Ka;
class Va extends Error {
  constructor(n) {
    super('6025: Emergency mode is enabled');
    c(this, 'logs');
    c(this, 'code', 6025);
    c(this, 'name', 'EmergencyModeEnabled');
    c(this, 'msg', 'Emergency mode is enabled');
    this.logs = n;
  }
}
c(Va, 'code', 6025);
Z.EmergencyModeEnabled = Va;
class Wa extends Error {
  constructor(n) {
    super('6026: Creating new ordersis blocked');
    c(this, 'logs');
    c(this, 'code', 6026);
    c(this, 'name', 'CreatingNewOrdersBlocked');
    c(this, 'msg', 'Creating new ordersis blocked');
    this.logs = n;
  }
}
c(Wa, 'code', 6026);
Z.CreatingNewOrdersBlocked = Wa;
class qa extends Error {
  constructor(n) {
    super('6027: Orders taking is blocked');
    c(this, 'logs');
    c(this, 'code', 6027);
    c(this, 'name', 'OrderTakingBlocked');
    c(this, 'msg', 'Orders taking is blocked');
    this.logs = n;
  }
}
c(qa, 'code', 6027);
Z.OrderTakingBlocked = qa;
class za extends Error {
  constructor(n) {
    super('6028: Order input amount larger than the remaining');
    c(this, 'logs');
    c(this, 'code', 6028);
    c(this, 'name', 'OrderInputAmountTooLarge');
    c(this, 'msg', 'Order input amount larger than the remaining');
    this.logs = n;
  }
}
c(za, 'code', 6028);
Z.OrderInputAmountTooLarge = za;
class Ya extends Error {
  constructor(n) {
    super('6029: Permissionless order taking not enabled, please provide permission account');
    c(this, 'logs');
    c(this, 'code', 6029);
    c(this, 'name', 'PermissionRequiredPermissionlessNotEnabled');
    c(this, 'msg', 'Permissionless order taking not enabled, please provide permission account');
    this.logs = n;
  }
}
c(Ya, 'code', 6029);
Z.PermissionRequiredPermissionlessNotEnabled = Ya;
class Xa extends Error {
  constructor(n) {
    super('6030: Permission address does not match order address');
    c(this, 'logs');
    c(this, 'code', 6030);
    c(this, 'name', 'PermissionDoesNotMatchOrder');
    c(this, 'msg', 'Permission address does not match order address');
    this.logs = n;
  }
}
c(Xa, 'code', 6030);
Z.PermissionDoesNotMatchOrder = Xa;
class Ja extends Error {
  constructor(n) {
    super('6031: Invalid ata address');
    c(this, 'logs');
    c(this, 'code', 6031);
    c(this, 'name', 'InvalidAtaAddress');
    c(this, 'msg', 'Invalid ata address');
    this.logs = n;
  }
}
c(Ja, 'code', 6031);
Z.InvalidAtaAddress = Ja;
class Qa extends Error {
  constructor(n) {
    super('6032: Maker output ata required when output mint is not WSOL');
    c(this, 'logs');
    c(this, 'code', 6032);
    c(this, 'name', 'MakerOutputAtaRequired');
    c(this, 'msg', 'Maker output ata required when output mint is not WSOL');
    this.logs = n;
  }
}
c(Qa, 'code', 6032);
Z.MakerOutputAtaRequired = Qa;
class Za extends Error {
  constructor(n) {
    super('6033: Intermediary output token account required when output mint is WSOL');
    c(this, 'logs');
    c(this, 'code', 6033);
    c(this, 'name', 'IntermediaryOutputTokenAccountRequired');
    c(this, 'msg', 'Intermediary output token account required when output mint is WSOL');
    this.logs = n;
  }
}
c(Za, 'code', 6033);
Z.IntermediaryOutputTokenAccountRequired = Za;
class eu extends Error {
  constructor(n) {
    super('6034: Not enough balance for rent');
    c(this, 'logs');
    c(this, 'code', 6034);
    c(this, 'name', 'NotEnoughBalanceForRent');
    c(this, 'msg', 'Not enough balance for rent');
    this.logs = n;
  }
}
c(eu, 'code', 6034);
Z.NotEnoughBalanceForRent = eu;
class tu extends Error {
  constructor(n) {
    super('6035: Order can not be closed - Not enough time passed since last update');
    c(this, 'logs');
    c(this, 'code', 6035);
    c(this, 'name', 'NotEnoughTimePassedSinceLastUpdate');
    c(this, 'msg', 'Order can not be closed - Not enough time passed since last update');
    this.logs = n;
  }
}
c(tu, 'code', 6035);
Z.NotEnoughTimePassedSinceLastUpdate = tu;
class nu extends Error {
  constructor(n) {
    super('6036: Order input and output mints are the same');
    c(this, 'logs');
    c(this, 'code', 6036);
    c(this, 'name', 'OrderSameMint');
    c(this, 'msg', 'Order input and output mints are the same');
    this.logs = n;
  }
}
c(nu, 'code', 6036);
Z.OrderSameMint = nu;
class ru extends Error {
  constructor(n) {
    super('6037: Mint has a token (2022) extension that is not supported');
    c(this, 'logs');
    c(this, 'code', 6037);
    c(this, 'name', 'UnsupportedTokenExtension');
    c(this, 'msg', 'Mint has a token (2022) extension that is not supported');
    this.logs = n;
  }
}
c(ru, 'code', 6037);
Z.UnsupportedTokenExtension = ru;
class iu extends Error {
  constructor(n) {
    super("6038: Can't have an spl token mint with a t22 account");
    c(this, 'logs');
    c(this, 'code', 6038);
    c(this, 'name', 'InvalidTokenAccount');
    c(this, 'msg', "Can't have an spl token mint with a t22 account");
    this.logs = n;
  }
}
c(iu, 'code', 6038);
Z.InvalidTokenAccount = iu;
class ou extends Error {
  constructor(n) {
    super('6039: The order type is invalid');
    c(this, 'logs');
    c(this, 'code', 6039);
    c(this, 'name', 'OrderTypeInvalid');
    c(this, 'msg', 'The order type is invalid');
    this.logs = n;
  }
}
c(ou, 'code', 6039);
Z.OrderTypeInvalid = ou;
class su extends Error {
  constructor(n) {
    super('6040: Token account is not initialized');
    c(this, 'logs');
    c(this, 'code', 6040);
    c(this, 'name', 'UninitializedTokenAccount');
    c(this, 'msg', 'Token account is not initialized');
    this.logs = n;
  }
}
c(su, 'code', 6040);
Z.UninitializedTokenAccount = su;
class au extends Error {
  constructor(n) {
    super('6041: Account is not owned by the token program');
    c(this, 'logs');
    c(this, 'code', 6041);
    c(this, 'name', 'InvalidTokenAccountOwner');
    c(this, 'msg', 'Account is not owned by the token program');
    this.logs = n;
  }
}
c(au, 'code', 6041);
Z.InvalidTokenAccountOwner = au;
class uu extends Error {
  constructor(n) {
    super('6042: Account is not a valid token account');
    c(this, 'logs');
    c(this, 'code', 6042);
    c(this, 'name', 'InvalidAccount');
    c(this, 'msg', 'Account is not a valid token account');
    this.logs = n;
  }
}
c(uu, 'code', 6042);
Z.InvalidAccount = uu;
class cu extends Error {
  constructor(n) {
    super('6043: Token account has incorrect mint');
    c(this, 'logs');
    c(this, 'code', 6043);
    c(this, 'name', 'InvalidTokenMint');
    c(this, 'msg', 'Token account has incorrect mint');
    this.logs = n;
  }
}
c(cu, 'code', 6043);
Z.InvalidTokenMint = cu;
class lu extends Error {
  constructor(n) {
    super('6044: Token account has incorrect authority');
    c(this, 'logs');
    c(this, 'code', 6044);
    c(this, 'name', 'InvalidTokenAuthority');
    c(this, 'msg', 'Token account has incorrect authority');
    this.logs = n;
  }
}
c(lu, 'code', 6044);
Z.InvalidTokenAuthority = lu;
function J_(t, e) {
  switch (t) {
    case 6e3:
      return new Ra(e);
    case 6001:
      return new ya(e);
    case 6002:
      return new Ta(e);
    case 6003:
      return new Ea(e);
    case 6004:
      return new Ia(e);
    case 6005:
      return new wa(e);
    case 6006:
      return new ba(e);
    case 6007:
      return new Na(e);
    case 6008:
      return new Ca(e);
    case 6009:
      return new Sa(e);
    case 6010:
      return new va(e);
    case 6011:
      return new Pa(e);
    case 6012:
      return new Ma(e);
    case 6013:
      return new ka(e);
    case 6014:
      return new Da(e);
    case 6015:
      return new xa(e);
    case 6016:
      return new Ba(e);
    case 6017:
      return new La(e);
    case 6018:
      return new Ua(e);
    case 6019:
      return new $a(e);
    case 6020:
      return new ja(e);
    case 6021:
      return new Ha(e);
    case 6022:
      return new Ga(e);
    case 6023:
      return new Fa(e);
    case 6024:
      return new Ka(e);
    case 6025:
      return new Va(e);
    case 6026:
      return new Wa(e);
    case 6027:
      return new qa(e);
    case 6028:
      return new za(e);
    case 6029:
      return new Ya(e);
    case 6030:
      return new Xa(e);
    case 6031:
      return new Ja(e);
    case 6032:
      return new Qa(e);
    case 6033:
      return new Za(e);
    case 6034:
      return new eu(e);
    case 6035:
      return new tu(e);
    case 6036:
      return new nu(e);
    case 6037:
      return new ru(e);
    case 6038:
      return new iu(e);
    case 6039:
      return new ou(e);
    case 6040:
      return new su(e);
    case 6041:
      return new au(e);
    case 6042:
      return new uu(e);
    case 6043:
      return new cu(e);
    case 6044:
      return new lu(e);
  }
  return null;
}
var Q_ =
    (w && w.__createBinding) ||
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
  Z_ =
    (w && w.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  Nl =
    (w && w.__importStar) ||
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
          for (var r = t(e), o = 0; o < r.length; o++) r[o] !== 'default' && Q_(n, e, r[o]);
        return Z_(n, e), n;
      };
    })();
Object.defineProperty(Ni, '__esModule', { value: !0 });
Ni.fromCode = Cl;
Ni.fromTxError = oh;
const eh = ze,
  th = Nl(Y),
  nh = Nl(Z);
function Cl(t, e) {
  return t >= 6e3 ? nh.fromCode(t, e) : th.fromCode(t, e);
}
function rh(t, e) {
  return Object.hasOwnProperty.call(t, e);
}
const ih = /Program (\w+) failed: custom program error: (\w+)/;
function oh(t, e = eh.PROGRAM_ID) {
  if (typeof t != 'object' || t === null || !rh(t, 'logs') || !Array.isArray(t.logs)) return null;
  let n = null;
  for (const u of t.logs) if (((n = ih.exec(u)), n !== null)) break;
  if (n === null) return null;
  const [r, o] = n.slice(1);
  if (r !== e.toString()) return null;
  let i;
  try {
    i = parseInt(o, 16);
  } catch (u) {
    return null;
  }
  return Cl(i, t.logs);
}
var Kn = {},
  sh =
    (w && w.__createBinding) ||
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
  ah =
    (w && w.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  uh =
    (w && w.__importStar) ||
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
          for (var r = t(e), o = 0; o < r.length; o++) r[o] !== 'default' && sh(n, e, r[o]);
        return ah(n, e), n;
      };
    })(),
  ch =
    (w && w.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(Kn, '__esModule', { value: !0 });
Kn.GlobalConfig = void 0;
const Eo = _e,
  Nt = ch(Je),
  ke = uh(yt),
  gc = ze,
  Wt = class Wt {
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
    static async fetch(e, n, r = gc.PROGRAM_ID) {
      const o = await e.getAccountInfo(n);
      if (o === null) return null;
      if (!o.owner.equals(r)) throw new Error("account doesn't belong to this program");
      return this.decode(o.data);
    }
    static async fetchMultiple(e, n, r = gc.PROGRAM_ID) {
      return (await e.getMultipleAccountsInfo(n)).map((i) => {
        if (i === null) return null;
        if (!i.owner.equals(r)) throw new Error("account doesn't belong to this program");
        return this.decode(i.data);
      });
    }
    static decode(e) {
      if (!e.slice(0, 8).equals(Wt.discriminator)) throw new Error('invalid account discriminator');
      const n = Wt.layout.decode(e.slice(8));
      return new Wt({
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
      return new Wt({
        emergencyMode: e.emergencyMode,
        flashTakeOrderBlocked: e.flashTakeOrderBlocked,
        newOrdersBlocked: e.newOrdersBlocked,
        ordersTakingBlocked: e.ordersTakingBlocked,
        hostFeeBps: e.hostFeeBps,
        isOrderTakingPermissionless: e.isOrderTakingPermissionless,
        padding0: e.padding0,
        orderCloseDelaySeconds: new Nt.default(e.orderCloseDelaySeconds),
        padding1: e.padding1.map((n) => new Nt.default(n)),
        pdaAuthorityPreviousLamportsBalance: new Nt.default(e.pdaAuthorityPreviousLamportsBalance),
        totalTipAmount: new Nt.default(e.totalTipAmount),
        hostTipAmount: new Nt.default(e.hostTipAmount),
        pdaAuthority: new Eo.PublicKey(e.pdaAuthority),
        pdaAuthorityBump: new Nt.default(e.pdaAuthorityBump),
        adminAuthority: new Eo.PublicKey(e.adminAuthority),
        adminAuthorityCached: new Eo.PublicKey(e.adminAuthorityCached),
        txnFeeCost: new Nt.default(e.txnFeeCost),
        ataCreationCost: new Nt.default(e.ataCreationCost),
        padding2: e.padding2.map((n) => new Nt.default(n)),
      });
    }
  };
c(Wt, 'discriminator', ie.Buffer.from([149, 8, 156, 202, 160, 252, 176, 217])),
  c(
    Wt,
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
let qo = Wt;
Kn.GlobalConfig = qo;
var du = {},
  Ur = {},
  lh =
    (w && w.__createBinding) ||
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
    (w && w.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  fh =
    (w && w.__importStar) ||
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
    })(),
  ph =
    (w && w.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(Ur, '__esModule', { value: !0 });
Ur.Order = void 0;
const vn = _e,
  Ct = ph(Je),
  De = fh(yt),
  Ac = ze,
  qt = class qt {
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
    static async fetch(e, n, r = Ac.PROGRAM_ID) {
      const o = await e.getAccountInfo(n);
      if (o === null) return null;
      if (!o.owner.equals(r)) throw new Error("account doesn't belong to this program");
      return this.decode(o.data);
    }
    static async fetchMultiple(e, n, r = Ac.PROGRAM_ID) {
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
      return new qt({
        globalConfig: new vn.PublicKey(e.globalConfig),
        maker: new vn.PublicKey(e.maker),
        inputMint: new vn.PublicKey(e.inputMint),
        inputMintProgramId: new vn.PublicKey(e.inputMintProgramId),
        outputMint: new vn.PublicKey(e.outputMint),
        outputMintProgramId: new vn.PublicKey(e.outputMintProgramId),
        initialInputAmount: new Ct.default(e.initialInputAmount),
        expectedOutputAmount: new Ct.default(e.expectedOutputAmount),
        remainingInputAmount: new Ct.default(e.remainingInputAmount),
        filledOutputAmount: new Ct.default(e.filledOutputAmount),
        tipAmount: new Ct.default(e.tipAmount),
        numberOfFills: new Ct.default(e.numberOfFills),
        orderType: e.orderType,
        status: e.status,
        inVaultBump: e.inVaultBump,
        flashIxLock: e.flashIxLock,
        padding0: e.padding0,
        lastUpdatedTimestamp: new Ct.default(e.lastUpdatedTimestamp),
        flashStartTakerOutputBalance: new Ct.default(e.flashStartTakerOutputBalance),
        padding: e.padding.map((n) => new Ct.default(n)),
      });
    }
  };
c(qt, 'discriminator', ie.Buffer.from([134, 173, 223, 185, 77, 86, 28, 51])),
  c(
    qt,
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
let zo = qt;
Ur.Order = zo;
(function (t) {
  Object.defineProperty(t, '__esModule', { value: !0 }), (t.GlobalConfig = t.Order = void 0);
  var e = Ur;
  Object.defineProperty(t, 'Order', {
    enumerable: !0,
    get: function () {
      return e.Order;
    },
  });
  var n = Kn;
  Object.defineProperty(t, 'GlobalConfig', {
    enumerable: !0,
    get: function () {
      return n.GlobalConfig;
    },
  });
})(du);
var Oc;
function Ti() {
  return (
    Oc ||
      ((Oc = 1),
      (function (t) {
        var e =
            (w && w.__createBinding) ||
            (Object.create
              ? function (D, H, K, re) {
                  re === void 0 && (re = K);
                  var de = Object.getOwnPropertyDescriptor(H, K);
                  (!de || ('get' in de ? !H.__esModule : de.writable || de.configurable)) &&
                    (de = {
                      enumerable: !0,
                      get: function () {
                        return H[K];
                      },
                    }),
                    Object.defineProperty(D, re, de);
                }
              : function (D, H, K, re) {
                  re === void 0 && (re = K), (D[re] = H[K]);
                }),
          n =
            (w && w.__setModuleDefault) ||
            (Object.create
              ? function (D, H) {
                  Object.defineProperty(D, 'default', { enumerable: !0, value: H });
                }
              : function (D, H) {
                  D.default = H;
                }),
          r =
            (w && w.__importStar) ||
            (function () {
              var D = function (H) {
                return (
                  (D =
                    Object.getOwnPropertyNames ||
                    function (K) {
                      var re = [];
                      for (var de in K)
                        Object.prototype.hasOwnProperty.call(K, de) && (re[re.length] = de);
                      return re;
                    }),
                  D(H)
                );
              };
              return function (H) {
                if (H && H.__esModule) return H;
                var K = {};
                if (H != null)
                  for (var re = D(H), de = 0; de < re.length; de++)
                    re[de] !== 'default' && e(K, H, re[de]);
                return n(K, H), K;
              };
            })(),
          o =
            (w && w.__importDefault) ||
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
          (t.createMintFromKeypair = j),
          (t.getMintDecimals = V),
          (t.getMintsProgramOwner = te),
          (t.printMultisigTx = ce),
          (t.printSimulateTx = ue),
          (t.solAirdrop = pe),
          (t.solAirdropMin = ge),
          (t.checkIfAccountExists = Ae),
          (t.getAssociatedTokenAddress = Ne),
          (t.createAssociatedTokenAccountIdempotentInstruction = ve),
          (t.createAtaIdempotent = It),
          (t.setupAta = jt),
          (t.mintTo = In),
          (t.getMockSwapInstructions = wn),
          (t.transferToken = bn),
          (t.mapAnchorError = rn),
          (t.getTokenAccountBalance = Jn),
          (t.createAddExtraComputeUnitFeeTransaction = zr),
          (t.getSolBalanceInLamports = Ht),
          (t.getSolBalance = Tt),
          (t.endpointFromCluster = Yr),
          (t.pubkeyFromFile = Xi),
          (t.createAddExtraComputeUnitsTransaction = Xr),
          (t.u16ToBytes = Ji),
          (t.accountExist = Qi),
          (t.fetchGlobalConfigWithRetry = Jr),
          (t.getPdaAuthority = Zi),
          (t.getTokenVaultPDA = eo),
          (t.getEventAuthorityPDA = to),
          (t.getIntermediaryTokenAccountPDA = no),
          (t.getExpressRelayMetadataPDA = ro),
          (t.getExpressRelayConfigRouterPDA = io),
          (t.sendAndConfirmInstructions = Zr),
          (t.createKeypairRentExempt = Qn),
          (t.getOrderRentExemptLamports = oo),
          (t.createKeypairRentExemptIxSync = ei),
          (t.createGlobalConfigPublicKeyRentExempt = so),
          (t.executeTransaction = ao),
          (t.buildAndSendTxnWithLogs = uo),
          (t.sleep = bt),
          (t.scaleDownWads = co),
          (t.convertStakeToAmount = lo),
          (t.convertAmountToStake = on);
        const i = r(ur),
          u = r(cr),
          d = r(Ni),
          p = _e,
          a = Dr,
          _ = Bt,
          A = r(_e),
          h = o(yl),
          m = fu(),
          g = Kn,
          R = ze,
          b = fl,
          N = du,
          P = o(Je);
        (t.LimoIdl = h.default),
          (t.WAD = new a.Decimal('1'.concat(Array(19).join('0')))),
          (t.DEFAULT_TXN_FEE_LAMPORTS = 5e3);
        const I = 'escrow_vault',
          x = 'authority',
          F = 'metadata',
          $ = 'config_router',
          T = 'intermediary',
          y = '__event_authority';
        class v {
          constructor(H, K, re) {
            c(this, 'symbol');
            c(this, 'mint');
            c(this, 'mintDecimals');
            (this.symbol = H), (this.mint = K), (this.mintDecimals = re);
          }
        }
        t.TokenInfo = v;
        function M(D) {
          return R.PROGRAM_ID;
        }
        function G(D) {
          return p.Keypair.fromSecretKey(new Uint8Array(JSON.parse(cr.readFileSync(D))));
        }
        function J(D, H) {
          return D.add(H).sub(new P.default(1)).div(H);
        }
        function z(D, H) {
          let K = Math.pow(10, H);
          return new P.default(D.mul(K).floor().toString());
        }
        function S(D, H) {
          let K = Math.pow(10, H);
          return D.mul(K);
        }
        function k(D, H) {
          let K = new P.default(Math.pow(10, H));
          return new a.Decimal(D.div(K).toString());
        }
        function q(D, H) {
          let K = Math.pow(10, H);
          return D.div(K);
        }
        async function ee(D, H, K = 6) {
          const re = i.web3.Keypair.generate();
          return await j(D, H, re, K);
        }
        async function j(D, H, K, re = 6) {
          const de = await se(D, H, K.publicKey, re);
          console.log('Mint auth', H.toString());
          const ye = new i.web3.Transaction();
          return ye.add(...de), await D.sendAndConfirm(ye, [K]), K.publicKey;
        }
        async function V(D, H) {
          const K = await te(D, H);
          return (await (0, _.getMint)(D, H, D.commitment, K)).decimals;
        }
        async function te(D, H) {
          const K = await D.getAccountInfo(H);
          if (!K) throw new Error('Mint not found');
          return K.owner;
        }
        async function se(D, H, K, re) {
          return [
            i.web3.SystemProgram.createAccount({
              fromPubkey: D.wallet.publicKey,
              newAccountPubkey: K,
              space: 82,
              lamports: await D.connection.getMinimumBalanceForRentExemption(82),
              programId: _.TOKEN_PROGRAM_ID,
            }),
            (0, _.createInitializeMintInstruction)(K, re, H, null, _.TOKEN_PROGRAM_ID),
          ];
        }
        async function ce(D) {
          console.log((0, b.binary_to_base58)(D.serializeMessage()));
        }
        async function ue(D, H) {
          console.log(
            'Tx in B64',
            'https://explorer.solana.com/tx/inspector?message='.concat(
              encodeURIComponent(H.serializeMessage().toString('base64'))
            )
          );
          let K = await D.simulateTransaction(H);
          console.log('Simulate Response', K), console.log('');
        }
        async function pe(D, H, K) {
          const re = await D.connection.requestAirdrop(H, S(K, 9).toNumber());
          return await D.connection.confirmTransaction(re), await Tt(D, H);
        }
        async function ge(D, H, K) {
          const re = a.Decimal.max(50, K);
          let de = await Tt(D, H);
          for (; de.lt(K); ) {
            try {
              await D.connection.requestAirdrop(H, S(re, 9).toNumber());
            } catch (ye) {
              await bt(100), console.log('Error', ye);
            }
            await bt(100), (de = await Tt(D, H));
          }
          return de;
        }
        async function Ae(D, H) {
          return (await D.getAccountInfo(H)) != null;
        }
        function Ne(D, H, K) {
          return (0, _.getAssociatedTokenAddressSync)(H, D, !0, K, _.ASSOCIATED_TOKEN_PROGRAM_ID);
        }
        function ve(D, H, K = D, re, de) {
          let ye = de;
          ye || (ye = Ne(D, H, re));
          const Ye = (0, _.createAssociatedTokenAccountInstruction)(
            K,
            ye,
            D,
            H,
            re,
            _.ASSOCIATED_TOKEN_PROGRAM_ID
          );
          return (Ye.data = ie.Buffer.from([1])), [ye, Ye];
        }
        function It(D, H, K, re) {
          const [de, ye] = ve(D, K, H, re);
          return { ata: de, createAtaIx: ye };
        }
        async function jt(D, H, K, re = K.publicKey) {
          const de = Ne(re, H, _.TOKEN_PROGRAM_ID);
          if (!(await Ae(D.connection, de))) {
            const [, ye] = ve(re, H, K.publicKey, _.TOKEN_PROGRAM_ID, de),
              Ye = new p.Transaction().add(ye);
            await D.sendAndConfirm(Ye, [K]);
          }
          return de;
        }
        async function In(D, H, K, re, de) {
          const ye = new p.Transaction().add(
            (0, _.createMintToCheckedInstruction)(H, K, D.wallet.publicKey, re, de)
          );
          await D.sendAndConfirm(ye, [], { skipPreflight: !0 });
        }
        function wn(D, H, K, re, de, ye, Ye, an) {
          let Nn = [];
          re.equals(m.WRAPPED_SOL_MINT)
            ? (Nn.push(
                p.SystemProgram.transfer({
                  fromPubkey: D.wallet.publicKey,
                  toPubkey: Ne(H, re, _.TOKEN_PROGRAM_ID),
                  lamports: S(ye, an).toNumber(),
                })
              ),
              Nn.push(
                new p.TransactionInstruction({
                  keys: [{ pubkey: Ne(H, re, _.TOKEN_PROGRAM_ID), isSigner: !1, isWritable: !0 }],
                  data: ie.Buffer.from(new Uint8Array([17])),
                  programId: _.TOKEN_PROGRAM_ID,
                })
              ))
            : Nn.push(
                (0, _.createMintToCheckedInstruction)(
                  re,
                  Ne(H, re, _.TOKEN_PROGRAM_ID),
                  D.wallet.publicKey,
                  S(ye, an).toNumber(),
                  an
                )
              );
          let Gt = [];
          return (
            K.equals(m.WRAPPED_SOL_MINT)
              ? (Gt.push(
                  (0, _.createCloseAccountInstruction)(
                    Ne(H, K, _.TOKEN_PROGRAM_ID),
                    H,
                    H,
                    [],
                    _.TOKEN_PROGRAM_ID
                  )
                ),
                Gt.push(
                  p.SystemProgram.transfer({
                    fromPubkey: H,
                    toPubkey: D.wallet.publicKey,
                    lamports: S(de, Ye).toNumber(),
                  })
                ),
                Gt.push(
                  It(H, D.wallet.publicKey, m.WRAPPED_SOL_MINT, _.TOKEN_PROGRAM_ID).createAtaIx
                ))
              : Gt.push(
                  (0, _.createBurnInstruction)(
                    Ne(H, K, _.TOKEN_PROGRAM_ID),
                    K,
                    H,
                    S(de, Ye).toNumber()
                  )
                ),
            [...Gt, ...Nn]
          );
        }
        async function bn(D, H, K, re, de) {
          let ye = new p.Transaction().add(
            (0, _.createTransferInstruction)(K, re, H.publicKey, de, [], _.TOKEN_PROGRAM_ID)
          );
          await A.sendAndConfirmTransaction(D.connection, ye, [H]), await bt(500);
        }
        const wt = (D) => {
          const H = D.indexOf('Custom program error:');
          return H === -1
            ? [!1, 'May not be a custom program error']
            : [!0, ''.concat(parseInt(D.substring(H + 22, H + 28).replace(' ', ''), 16))];
        };
        t.getCustomProgramErrorCode = wt;
        async function rn(D) {
          try {
            return await D;
          } catch (H) {
            let [K, re] = (0, t.getCustomProgramErrorCode)(JSON.stringify(H));
            if (K) {
              let de;
              throw Number(re)
                ? ((de = d.fromCode(Number(re))), new Error(de))
                : Number(re) >= 6e3 && Number(re) <= 7e3
                  ? (re[re.length - 2] === '0' ? (re = re.slice(-1)) : (re = re.slice(-2)),
                    (de = t.LimoIdl.errors[re].msg),
                    new Error(de))
                  : new Error(H);
            }
            throw H;
          }
        }
        async function Jn(D, H) {
          const K = await D.getTokenAccountBalance(H);
          return new a.Decimal(K.value.amount).div(a.Decimal.pow(10, K.value.decimals));
        }
        function zr(D, H) {
          const K = [];
          return (
            K.push(p.ComputeBudgetProgram.setComputeUnitLimit({ units: D })),
            K.push(
              p.ComputeBudgetProgram.setComputeUnitPrice({ microLamports: Number(H.toFixed(0)) })
            ),
            K
          );
        }
        async function Ht(D, H) {
          var re;
          let K;
          for (; K === void 0; )
            K = (re = await D.connection.getAccountInfo(H)) == null ? void 0 : re.lamports;
          return K;
        }
        async function Tt(D, H) {
          const K = new a.Decimal(await Ht(D, H));
          return q(K, 9);
        }
        function Yr(D) {
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
        function Xi(D) {
          const K = u
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
        function Xr(D) {
          return A.ComputeBudgetProgram.setComputeUnitLimit({ units: D });
        }
        function Ji(D) {
          const H = new ArrayBuffer(2);
          return new DataView(H).setUint16(0, D, !1), new Uint8Array(H);
        }
        async function Qi(D, H) {
          const K = await D.getAccountInfo(H);
          return !(K === null || K.data.length === 0);
        }
        async function Jr(D, H) {
          return Qr(async () => await g.GlobalConfig.fetch(D.conn, H), H);
        }
        function Zi(D, H) {
          const [K, re] = i.web3.PublicKey.findProgramAddressSync(
            [ie.Buffer.from(x), H.toBuffer()],
            D
          );
          return K;
        }
        function eo(D, H, K) {
          const [re, de] = i.web3.PublicKey.findProgramAddressSync(
            [ie.Buffer.from(I), H.toBuffer(), K.toBuffer()],
            D
          );
          return re;
        }
        function to(D) {
          const [H, K] = i.web3.PublicKey.findProgramAddressSync([ie.Buffer.from(y)], D);
          return H;
        }
        function no(D, H) {
          const [K, re] = i.web3.PublicKey.findProgramAddressSync(
            [ie.Buffer.from(T), H.toBuffer()],
            D
          );
          return K;
        }
        function ro(D) {
          const [H, K] = i.web3.PublicKey.findProgramAddressSync([ie.Buffer.from(F)], D);
          return H;
        }
        function io(D, H) {
          const [K, re] = i.web3.PublicKey.findProgramAddressSync(
            [ie.Buffer.from($), H.toBuffer()],
            D
          );
          return K;
        }
        async function Qr(D, H, K = 3) {
          for (let re = 0; re < K; re++) {
            let de = await D();
            if (de !== null) return de;
            console.log(
              '['
                .concat(re + 1, '/')
                .concat(K, '] Fetched account ')
                .concat(H, ' is null. Refetching...')
            );
          }
          return null;
        }
        async function Zr(D, H) {
          let K = new p.Transaction();
          for (let de = 0; de < H.length; de++) K.add(H[de]);
          let { blockhash: re } = await D.conn.getLatestBlockhash();
          return (
            (K.recentBlockhash = re),
            (K.feePayer = D.admin.publicKey),
            await A.sendAndConfirmTransaction(D.conn, K, [D.admin])
          );
        }
        async function Qn(D, H, K, re) {
          const de = new p.Transaction();
          return (
            de.add(
              ei(
                D.wallet.publicKey,
                K,
                re,
                await D.connection.getMinimumBalanceForRentExemption(re),
                H
              )
            ),
            await D.sendAndConfirm(de, [K]),
            K
          );
        }
        async function oo(D) {
          return await D.getMinimumBalanceForRentExemption(N.Order.layout.span + 8);
        }
        function ei(D, H, K, re, de = m.limoId) {
          return p.SystemProgram.createAccount({
            fromPubkey: D,
            newAccountPubkey: H.publicKey,
            space: K,
            lamports: re,
            programId: de,
          });
        }
        async function so(D, H) {
          const K = p.Keypair.generate();
          return await Qn(D, H, K, g.GlobalConfig.layout.getSpan() + 8);
        }
        async function ao(D, H, K, re = []) {
          const de = new p.Transaction(),
            { blockhash: ye } = await D.getLatestBlockhash();
          return (
            (de.recentBlockhash = ye),
            (de.feePayer = K.publicKey),
            de.add(...H),
            await (0, p.sendAndConfirmTransaction)(D, de, [K, ...re], { commitment: 'confirmed' })
          );
        }
        async function uo(D, H, K, re) {
          const { blockhash: de } = await D.getLatestBlockhash();
          (H.recentBlockhash = de), (H.feePayer = K.publicKey);
          try {
            const ye = await D.sendTransaction(H, [K, ...re]);
            console.log('Transaction Hash:', ye), await bt(5e3);
            const Ye = await D.getTransaction(ye, { commitment: 'confirmed' });
            console.log('Transaction Logs:\n', Ye.meta.logMessages);
          } catch (ye) {
            console.log(ye), await bt(5e3);
            const Ye = ye.toString().split(' failed ')[0].split('Transaction ')[1],
              an = await D.getTransaction(Ye, { commitment: 'confirmed' });
            console.log('Txn', an.meta.logMessages);
          }
        }
        function bt(D) {
          return new Promise((H) => setTimeout(H, D));
        }
        function co(D) {
          return new a.Decimal(D.toString()).div(t.WAD).toNumber();
        }
        function lo(D, H, K) {
          return D === new a.Decimal(0)
            ? new a.Decimal(0)
            : H !== new a.Decimal(0)
              ? D.mul(K).div(H)
              : D.add(K);
        }
        function on(D, H, K) {
          return D === new a.Decimal(0)
            ? new a.Decimal(0)
            : K !== new a.Decimal(0)
              ? H.mul(D).div(K)
              : D;
        }
        const sn = (D) => String.fromCharCode(...D.filter((H) => H > 0));
        t.parseTokenSymbol = sn;
      })(To)),
    To
  );
}
var lt = {},
  Rt = {},
  _h =
    (w && w.__createBinding) ||
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
  hh =
    (w && w.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  mh =
    (w && w.__importStar) ||
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
          for (var r = t(e), o = 0; o < r.length; o++) r[o] !== 'default' && _h(n, e, r[o]);
        return hh(n, e), n;
      };
    })();
Object.defineProperty(Rt, '__esModule', { value: !0 });
Rt.Cancelled = Rt.Filled = Rt.Active = void 0;
Rt.fromDecoded = gh;
Rt.fromJSON = Ah;
Rt.layout = Oh;
const ai = mh(yt);
class lr {
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
c(lr, 'discriminator', 0), c(lr, 'kind', 'Active');
Rt.Active = lr;
class dr {
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
c(dr, 'discriminator', 1), c(dr, 'kind', 'Filled');
Rt.Filled = dr;
class fr {
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
c(fr, 'discriminator', 2), c(fr, 'kind', 'Cancelled');
Rt.Cancelled = fr;
function gh(t) {
  if (typeof t != 'object') throw new Error('Invalid enum object');
  if ('Active' in t) return new lr();
  if ('Filled' in t) return new dr();
  if ('Cancelled' in t) return new fr();
  throw new Error('Invalid enum object');
}
function Ah(t) {
  switch (t.kind) {
    case 'Active':
      return new lr();
    case 'Filled':
      return new dr();
    case 'Cancelled':
      return new fr();
  }
}
function Oh(t) {
  const e = ai.rustEnum([
    ai.struct([], 'Active'),
    ai.struct([], 'Filled'),
    ai.struct([], 'Cancelled'),
  ]);
  return t !== void 0 ? e.replicate(t) : e;
}
var Rn = {},
  Rh =
    (w && w.__createBinding) ||
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
  yh =
    (w && w.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  Th =
    (w && w.__importStar) ||
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
          for (var r = t(e), o = 0; o < r.length; o++) r[o] !== 'default' && Rh(n, e, r[o]);
        return yh(n, e), n;
      };
    })();
Object.defineProperty(Rn, '__esModule', { value: !0 });
Rn.Vanilla = void 0;
Rn.fromDecoded = Eh;
Rn.fromJSON = Ih;
Rn.layout = wh;
const Rc = Th(yt);
class pr {
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
c(pr, 'discriminator', 0), c(pr, 'kind', 'Vanilla');
Rn.Vanilla = pr;
function Eh(t) {
  if (typeof t != 'object') throw new Error('Invalid enum object');
  if ('Vanilla' in t) return new pr();
  throw new Error('Invalid enum object');
}
function Ih(t) {
  switch (t.kind) {
    case 'Vanilla':
      return new pr();
  }
}
function wh(t) {
  const e = Rc.rustEnum([Rc.struct([], 'Vanilla')]);
  return t !== void 0 ? e.replicate(t) : e;
}
var Se = {},
  bh =
    (w && w.__createBinding) ||
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
  Nh =
    (w && w.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  Ch =
    (w && w.__importStar) ||
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
          for (var r = t(e), o = 0; o < r.length; o++) r[o] !== 'default' && bh(n, e, r[o]);
        return Nh(n, e), n;
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
Se.fromDecoded = Sh;
Se.fromJSON = vh;
Se.layout = Ph;
const gt = Ch(yt);
class _r {
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
c(_r, 'discriminator', 0), c(_r, 'kind', 'UpdateEmergencyMode');
Se.UpdateEmergencyMode = _r;
class hr {
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
c(hr, 'discriminator', 1), c(hr, 'kind', 'UpdateFlashTakeOrderBlocked');
Se.UpdateFlashTakeOrderBlocked = hr;
class mr {
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
c(mr, 'discriminator', 2), c(mr, 'kind', 'UpdateBlockNewOrders');
Se.UpdateBlockNewOrders = mr;
class gr {
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
c(gr, 'discriminator', 3), c(gr, 'kind', 'UpdateBlockOrderTaking');
Se.UpdateBlockOrderTaking = gr;
class Ar {
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
c(Ar, 'discriminator', 4), c(Ar, 'kind', 'UpdateHostFeeBps');
Se.UpdateHostFeeBps = Ar;
class Or {
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
c(Or, 'discriminator', 5), c(Or, 'kind', 'UpdateAdminAuthorityCached');
Se.UpdateAdminAuthorityCached = Or;
class Rr {
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
c(Rr, 'discriminator', 6), c(Rr, 'kind', 'UpdateOrderTakingPermissionless');
Se.UpdateOrderTakingPermissionless = Rr;
class yr {
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
c(yr, 'discriminator', 7), c(yr, 'kind', 'UpdateOrderCloseDelaySeconds');
Se.UpdateOrderCloseDelaySeconds = yr;
class Tr {
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
c(Tr, 'discriminator', 8), c(Tr, 'kind', 'UpdateTxnFeeCost');
Se.UpdateTxnFeeCost = Tr;
class Er {
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
c(Er, 'discriminator', 9), c(Er, 'kind', 'UpdateAtaCreationCost');
Se.UpdateAtaCreationCost = Er;
function Sh(t) {
  if (typeof t != 'object') throw new Error('Invalid enum object');
  if ('UpdateEmergencyMode' in t) return new _r();
  if ('UpdateFlashTakeOrderBlocked' in t) return new hr();
  if ('UpdateBlockNewOrders' in t) return new mr();
  if ('UpdateBlockOrderTaking' in t) return new gr();
  if ('UpdateHostFeeBps' in t) return new Ar();
  if ('UpdateAdminAuthorityCached' in t) return new Or();
  if ('UpdateOrderTakingPermissionless' in t) return new Rr();
  if ('UpdateOrderCloseDelaySeconds' in t) return new yr();
  if ('UpdateTxnFeeCost' in t) return new Tr();
  if ('UpdateAtaCreationCost' in t) return new Er();
  throw new Error('Invalid enum object');
}
function vh(t) {
  switch (t.kind) {
    case 'UpdateEmergencyMode':
      return new _r();
    case 'UpdateFlashTakeOrderBlocked':
      return new hr();
    case 'UpdateBlockNewOrders':
      return new mr();
    case 'UpdateBlockOrderTaking':
      return new gr();
    case 'UpdateHostFeeBps':
      return new Ar();
    case 'UpdateAdminAuthorityCached':
      return new Or();
    case 'UpdateOrderTakingPermissionless':
      return new Rr();
    case 'UpdateOrderCloseDelaySeconds':
      return new yr();
    case 'UpdateTxnFeeCost':
      return new Tr();
    case 'UpdateAtaCreationCost':
      return new Er();
  }
}
function Ph(t) {
  const e = gt.rustEnum([
    gt.struct([], 'UpdateEmergencyMode'),
    gt.struct([], 'UpdateFlashTakeOrderBlocked'),
    gt.struct([], 'UpdateBlockNewOrders'),
    gt.struct([], 'UpdateBlockOrderTaking'),
    gt.struct([], 'UpdateHostFeeBps'),
    gt.struct([], 'UpdateAdminAuthorityCached'),
    gt.struct([], 'UpdateOrderTakingPermissionless'),
    gt.struct([], 'UpdateOrderCloseDelaySeconds'),
    gt.struct([], 'UpdateTxnFeeCost'),
    gt.struct([], 'UpdateAtaCreationCost'),
  ]);
  return t !== void 0 ? e.replicate(t) : e;
}
var tt = {},
  Mh =
    (w && w.__createBinding) ||
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
  kh =
    (w && w.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  Dh =
    (w && w.__importStar) ||
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
          for (var r = t(e), o = 0; o < r.length; o++) r[o] !== 'default' && Mh(n, e, r[o]);
        return kh(n, e), n;
      };
    })(),
  xh =
    (w && w.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(tt, '__esModule', { value: !0 });
tt.Pubkey = tt.U64 = tt.U16 = tt.Bool = void 0;
tt.fromDecoded = Uh;
tt.fromJSON = $h;
tt.layout = jh;
const Bh = _e,
  Lh = xh(Je),
  St = Dh(yt);
class Ir {
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
c(Ir, 'discriminator', 0), c(Ir, 'kind', 'Bool');
tt.Bool = Ir;
class wr {
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
c(wr, 'discriminator', 1), c(wr, 'kind', 'U16');
tt.U16 = wr;
class br {
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
c(br, 'discriminator', 2), c(br, 'kind', 'U64');
tt.U64 = br;
class Nr {
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
c(Nr, 'discriminator', 3), c(Nr, 'kind', 'Pubkey');
tt.Pubkey = Nr;
function Uh(t) {
  if (typeof t != 'object') throw new Error('Invalid enum object');
  if ('Bool' in t) {
    const e = t.Bool;
    return new Ir([e._0]);
  }
  if ('U16' in t) {
    const e = t.U16;
    return new wr([e._0]);
  }
  if ('U64' in t) {
    const e = t.U64;
    return new br([e._0]);
  }
  if ('Pubkey' in t) {
    const e = t.Pubkey;
    return new Nr([e._0]);
  }
  throw new Error('Invalid enum object');
}
function $h(t) {
  switch (t.kind) {
    case 'Bool':
      return new Ir([t.value[0]]);
    case 'U16':
      return new wr([t.value[0]]);
    case 'U64':
      return new br([new Lh.default(t.value[0])]);
    case 'Pubkey':
      return new Nr([new Bh.PublicKey(t.value[0])]);
  }
}
function jh(t) {
  const e = St.rustEnum([
    St.struct([St.bool('_0')], 'Bool'),
    St.struct([St.u16('_0')], 'U16'),
    St.struct([St.u64('_0')], 'U64'),
    St.struct([St.publicKey('_0')], 'Pubkey'),
  ]);
  return t !== void 0 ? e.replicate(t) : e;
}
var Hh =
    (w && w.__createBinding) ||
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
  Gh =
    (w && w.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  Ci =
    (w && w.__importStar) ||
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
          for (var r = t(e), o = 0; o < r.length; o++) r[o] !== 'default' && Hh(n, e, r[o]);
        return Gh(n, e), n;
      };
    })();
Object.defineProperty(lt, '__esModule', { value: !0 });
lt.UpdateGlobalConfigValue = lt.UpdateGlobalConfigMode = lt.OrderType = lt.OrderStatus = void 0;
const Fh = Ci(Rt);
lt.OrderStatus = Fh;
const Kh = Ci(Rn);
lt.OrderType = Kh;
const Vh = Ci(Se);
lt.UpdateGlobalConfigMode = Vh;
const Wh = Ci(tt);
lt.UpdateGlobalConfigValue = Wh;
var yc;
function Sl() {
  if (yc) return ut;
  yc = 1;
  var t =
      (w && w.__createBinding) ||
      (Object.create
        ? function (I, x, F, $) {
            $ === void 0 && ($ = F);
            var T = Object.getOwnPropertyDescriptor(x, F);
            (!T || ('get' in T ? !x.__esModule : T.writable || T.configurable)) &&
              (T = {
                enumerable: !0,
                get: function () {
                  return x[F];
                },
              }),
              Object.defineProperty(I, $, T);
          }
        : function (I, x, F, $) {
            $ === void 0 && ($ = F), (I[$] = x[F]);
          }),
    e =
      (w && w.__setModuleDefault) ||
      (Object.create
        ? function (I, x) {
            Object.defineProperty(I, 'default', { enumerable: !0, value: x });
          }
        : function (I, x) {
            I.default = x;
          }),
    n =
      (w && w.__importStar) ||
      (function () {
        var I = function (x) {
          return (
            (I =
              Object.getOwnPropertyNames ||
              function (F) {
                var $ = [];
                for (var T in F) Object.prototype.hasOwnProperty.call(F, T) && ($[$.length] = T);
                return $;
              }),
            I(x)
          );
        };
        return function (x) {
          if (x && x.__esModule) return x;
          var F = {};
          if (x != null)
            for (var $ = I(x), T = 0; T < $.length; T++) $[T] !== 'default' && t(F, x, $[T]);
          return e(F, x), F;
        };
      })();
  Object.defineProperty(ut, '__esModule', { value: !0 }),
    (ut.initializeGlobalConfig = a),
    (ut.initializeVault = _),
    (ut.createOrder = A),
    (ut.takeOrder = h),
    (ut.flashTakeOrder = m),
    (ut.closeOrderAndClaimTip = g),
    (ut.withdrawHostTipIx = R),
    (ut.updateGlobalConfigIx = b),
    (ut.updateGlobalConfigAdminIx = N);
  const r = n(ps),
    o = n(ur),
    i = _e,
    u = Ti(),
    d = ur,
    p = lt;
  function a(I, x, F, $) {
    let T = { adminAuthority: I, pdaAuthority: F, globalConfig: x };
    return r.initializeGlobalConfig(T, $);
  }
  function _(I, x, F, $, T) {
    let y = (0, u.getTokenVaultPDA)($, x, F),
      v = (0, u.getPdaAuthority)($, x),
      M = {
        payer: I,
        globalConfig: x,
        pdaAuthority: v,
        mint: F,
        vault: y,
        tokenProgram: T,
        systemProgram: o.web3.SystemProgram.programId,
      };
    return r.initializeVault(M, $);
  }
  function A(I, x, F, $, T, y, v) {
    let M = (0, u.getTokenVaultPDA)(T, x, $.quoteTokenMint),
      G = (0, u.getTokenVaultPDA)(T, x, $.baseTokenMint),
      J = (0, u.getPdaAuthority)(T, x),
      z = {
        maker: I,
        globalConfig: x,
        pdaAuthority: J,
        order: F,
        inputMint: $.side === 'bid' ? $.baseTokenMint : $.quoteTokenMint,
        outputMint: $.side === 'bid' ? $.quoteTokenMint : $.baseTokenMint,
        makerAta:
          $.side === 'bid'
            ? (0, u.getAssociatedTokenAddress)(I, $.baseTokenMint, y)
            : (0, u.getAssociatedTokenAddress)(I, $.quoteTokenMint, v),
        inputVault: $.side === 'bid' ? G : M,
        inputTokenProgram: $.side === 'bid' ? y : v,
        outputTokenProgram: $.side === 'bid' ? v : y,
        eventAuthority: (0, u.getEventAuthorityPDA)(T),
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
    let x = (0, u.getPdaAuthority)(I.programId, I.globalConfig),
      F = (0, u.getTokenVaultPDA)(I.programId, I.globalConfig, I.inputMint),
      $ = {
        taker: I.taker,
        maker: I.maker,
        globalConfig: I.globalConfig,
        pdaAuthority: x,
        order: I.order,
        inputMint: I.inputMint,
        outputMint: I.outputMint,
        inputVault: F,
        expressRelay: I.expressRelayProgramId,
        expressRelayMetadata: (0, u.getExpressRelayMetadataPDA)(I.expressRelayProgramId),
        permission: I.permissionless ? I.programId : I.order,
        configRouter: (0, u.getExpressRelayConfigRouterPDA)(I.expressRelayProgramId, x),
        sysvarInstructions: o.web3.SYSVAR_INSTRUCTIONS_PUBKEY,
        takerInputAta: I.takerInputAta,
        intermediaryOutputTokenAccount: I.intermediaryOutputTokenAccount,
        takerOutputAta: I.takerOutputAta,
        makerOutputAta: I.makerOutputAta,
        inputTokenProgram: I.inputTokenProgram,
        outputTokenProgram: I.outputTokenProgram,
        systemProgram: i.SystemProgram.programId,
        rent: o.web3.SYSVAR_RENT_PUBKEY,
        eventAuthority: (0, u.getEventAuthorityPDA)(I.programId),
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
    let x = (0, u.getPdaAuthority)(I.programId, I.globalConfig),
      F = (0, u.getTokenVaultPDA)(I.programId, I.globalConfig, I.inputMint),
      $ = {
        taker: I.taker,
        maker: I.maker,
        globalConfig: I.globalConfig,
        pdaAuthority: x,
        order: I.order,
        inputMint: I.inputMint,
        outputMint: I.outputMint,
        inputVault: F,
        expressRelay: I.expressRelayProgramId,
        expressRelayMetadata: (0, u.getExpressRelayMetadataPDA)(I.expressRelayProgramId),
        permission: I.permissionless ? I.programId : I.order,
        configRouter: (0, u.getExpressRelayConfigRouterPDA)(I.expressRelayProgramId, x),
        sysvarInstructions: o.web3.SYSVAR_INSTRUCTIONS_PUBKEY,
        takerInputAta: I.takerInputAta,
        takerOutputAta: I.takerOutputAta,
        intermediaryOutputTokenAccount: I.intermediaryOutputTokenAccount,
        makerOutputAta: I.makerOutputAta,
        inputTokenProgram: I.inputTokenProgram,
        outputTokenProgram: I.outputTokenProgram,
        systemProgram: i.SystemProgram.programId,
        rent: o.web3.SYSVAR_RENT_PUBKEY,
        eventAuthority: (0, u.getEventAuthorityPDA)(I.programId),
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
        pdaAuthority: x,
        order: I.order,
        inputMint: I.inputMint,
        outputMint: I.outputMint,
        inputVault: F,
        expressRelay: I.expressRelayProgramId,
        expressRelayMetadata: (0, u.getExpressRelayMetadataPDA)(I.expressRelayProgramId),
        permission: I.permissionless ? I.programId : I.order,
        configRouter: (0, u.getExpressRelayConfigRouterPDA)(I.expressRelayProgramId, x),
        sysvarInstructions: o.web3.SYSVAR_INSTRUCTIONS_PUBKEY,
        takerInputAta: I.takerInputAta,
        takerOutputAta: I.takerOutputAta,
        intermediaryOutputTokenAccount: I.intermediaryOutputTokenAccount,
        makerOutputAta: I.makerOutputAta,
        inputTokenProgram: I.inputTokenProgram,
        outputTokenProgram: I.outputTokenProgram,
        systemProgram: i.SystemProgram.programId,
        rent: o.web3.SYSVAR_RENT_PUBKEY,
        eventAuthority: (0, u.getEventAuthorityPDA)(I.programId),
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
    let x = (0, u.getPdaAuthority)(I.programId, I.globalConfig),
      F = (0, u.getTokenVaultPDA)(I.programId, I.globalConfig, I.inputMint),
      $ = {
        maker: I.maker,
        order: I.order,
        globalConfig: I.globalConfig,
        pdaAuthority: x,
        inputMint: I.inputMint,
        outputMint: I.outputMint,
        makerInputAta: I.makerInputAta,
        inputVault: F,
        inputTokenProgram: I.inputTokenProgram,
        systemProgram: i.SystemProgram.programId,
        eventAuthority: (0, u.getEventAuthorityPDA)(I.programId),
        program: I.programId,
      };
    return r.closeOrderAndClaimTip($, I.programId);
  }
  function R(I) {
    let x = (0, u.getPdaAuthority)(I.programId, I.globalConfig),
      F = {
        adminAuthority: I.admin,
        globalConfig: I.globalConfig,
        pdaAuthority: x,
        systemProgram: i.SystemProgram.programId,
      };
    return r.withdrawHostTip(F, I.programId);
  }
  function b(I, x, F, $, T) {
    let y = { adminAuthority: I, globalConfig: x },
      v = { mode: F.discriminator, value: P(F, $) };
    return r.updateGlobalConfig(v, y, T);
  }
  function N(I, x, F) {
    let $ = { adminAuthorityCached: x.adminAuthorityCached, globalConfig: I };
    return r.updateGlobalConfigAdmin($, F);
  }
  function P(I, x) {
    const F = ie.Buffer.alloc(128);
    let $, T;
    switch (I.discriminator) {
      case p.UpdateGlobalConfigMode.UpdateEmergencyMode.discriminator:
      case p.UpdateGlobalConfigMode.UpdateFlashTakeOrderBlocked.discriminator:
      case p.UpdateGlobalConfigMode.UpdateBlockNewOrders.discriminator:
      case p.UpdateGlobalConfigMode.UpdateBlockOrderTaking.discriminator:
      case p.UpdateGlobalConfigMode.UpdateOrderTakingPermissionless.discriminator:
        ($ = x), F.writeUIntLE($, 0, 1);
        break;
      case p.UpdateGlobalConfigMode.UpdateHostFeeBps.discriminator:
        ($ = x), F.writeUInt16LE($, 0);
        break;
      case p.UpdateGlobalConfigMode.UpdateOrderCloseDelaySeconds.discriminator:
        ($ = x), F.writeBigUInt64LE(BigInt(x.toString()), 0);
        break;
      case p.UpdateGlobalConfigMode.UpdateAdminAuthorityCached.discriminator:
        (T = x.toBuffer()), T.copy(F, 0);
        break;
    }
    const y = new Uint8Array(F);
    return Array.from(y);
  }
  return ut;
}
var un = {},
  Tc;
function qh() {
  if (Tc) return un;
  Tc = 1;
  var t =
      (w && w.__createBinding) ||
      (Object.create
        ? function (R, b, N, P) {
            P === void 0 && (P = N);
            var I = Object.getOwnPropertyDescriptor(b, N);
            (!I || ('get' in I ? !b.__esModule : I.writable || I.configurable)) &&
              (I = {
                enumerable: !0,
                get: function () {
                  return b[N];
                },
              }),
              Object.defineProperty(R, P, I);
          }
        : function (R, b, N, P) {
            P === void 0 && (P = N), (R[P] = b[N]);
          }),
    e =
      (w && w.__setModuleDefault) ||
      (Object.create
        ? function (R, b) {
            Object.defineProperty(R, 'default', { enumerable: !0, value: b });
          }
        : function (R, b) {
            R.default = b;
          }),
    n =
      (w && w.__importStar) ||
      (function () {
        var R = function (b) {
          return (
            (R =
              Object.getOwnPropertyNames ||
              function (N) {
                var P = [];
                for (var I in N) Object.prototype.hasOwnProperty.call(N, I) && (P[P.length] = I);
                return P;
              }),
            R(b)
          );
        };
        return function (b) {
          if (b && b.__esModule) return b;
          var N = {};
          if (b != null)
            for (var P = R(b), I = 0; I < P.length; I++) P[I] !== 'default' && t(N, b, P[I]);
          return e(N, b), N;
        };
      })(),
    r =
      (w && w.__importDefault) ||
      function (R) {
        return R && R.__esModule ? R : { default: R };
      };
  Object.defineProperty(un, '__esModule', { value: !0 }),
    (un.setUpProgram = A),
    (un.createGlobalAccounts = h),
    (un.setGlobalAccounts = m),
    (un.createUser = g);
  const o = _e,
    i = n(ur),
    u = Ti(),
    d = Ti(),
    p = r(Dr),
    a = fu(),
    _ = Bt;
  function A(R) {
    if (!R.clusterOverride) throw new Error('Cluster is required');
    const b = R.clusterOverride,
      N = {
        commitment: i.AnchorProvider.defaultOptions().commitment,
        confirmTransactionInitialTimeout: 22e4,
      },
      P = new o.Connection((0, u.endpointFromCluster)(b), N),
      I = R.adminFilePath ? (0, d.parseKeypairFile)(R.adminFilePath) : o.Keypair.generate(),
      x = new i.Wallet(I),
      F = new i.AnchorProvider(P, x, i.AnchorProvider.defaultOptions()),
      $ = I;
    i.setProvider(F);
    const T = R.programOverride || (0, u.getLimoProgramId)(b),
      y = new i.Program(d.LimoIdl, T);
    return { admin: $, provider: F, conn: P, program: y, cluster: b };
  }
  async function h(R, b = R.admin, N = ['SOL', 'USDC', 'KMNO']) {
    const P = o.Keypair.generate(),
      I = new Map(),
      x = new Map();
    for (const y of N)
      if (y === 'SOL') {
        I.set(y, new u.TokenInfo(y, a.WRAPPED_SOL_MINT, 9));
        let v = (0, u.getTokenVaultPDA)(R.program.programId, P.publicKey, a.WRAPPED_SOL_MINT);
        x.set(y, v), (0, u.solAirdrop)(R.provider, b.publicKey, new p.default(100));
      } else {
        const v = await (0, u.createMint)(R.provider, R.provider.wallet.publicKey, 6);
        let M = (0, u.getTokenVaultPDA)(R.program.programId, P.publicKey, v);
        I.set(y, new u.TokenInfo(y, v, 6)), x.set(y, M);
        const G = await (0, u.setupAta)(R.provider, v, b);
        await (0, u.mintTo)(
          R.provider,
          v,
          G,
          (0, u.amountToLamportsDecimal)(new p.default(1e5), 6).toNumber(),
          6
        );
      }
    let F = (0, u.getPdaAuthority)(R.program.programId, P.publicKey);
    const $ = new a.LimoClient(R.conn, void 0),
      T = { globalAdmin: b, globalConfig: P, pdaAuthority: F, tokens: I, vaults: x, limoClient: $ };
    return (0, u.solAirdrop)(R.provider, F, new p.default(0.1)), T;
  }
  async function m(R, b = R.admin, N = !1) {
    const P = await h(R, b),
      I = P.limoClient;
    if (
      (await I.createGlobalConfig(P.globalAdmin, P.globalConfig),
      I.setGlobalConfig(P.globalConfig.publicKey),
      !N)
    )
      for (const [, x] of P.tokens.entries()) await I.initializeVault(P.globalAdmin, x.mint);
    return P;
  }
  async function g(R, b, N, P) {
    P || (P = new i.web3.Keypair());
    const I = new Map();
    for (const { token: F, amount: $ } of N) {
      const T = b.tokens.get(F);
      if (
        (I.set(F, (0, u.getAssociatedTokenAddress)(P.publicKey, T.mint, _.TOKEN_PROGRAM_ID)),
        !$.isZero())
      )
        if (F === 'SOL')
          await (0, u.solAirdrop)(R.provider, P.publicKey, $), await (0, u.sleep)(1e3);
        else {
          const y = await (0, u.setupAta)(R.provider, T.mint, P);
          await (0, u.mintTo)(
            R.provider,
            T.mint,
            y,
            (0, u.amountToLamportsDecimal)($, T.mintDecimals).toNumber(),
            T.mintDecimals
          ),
            await (0, u.sleep)(1e3);
        }
    }
    return { owner: P, tokenAtas: I };
  }
  return un;
}
var Si = {};
Object.defineProperty(Si, '__esModule', { value: !0 });
Si.getReadOnlyWallet = void 0;
const zh = _e,
  Yh = () => {
    const t = zh.Keypair.generate();
    return {
      payer: t,
      publicKey: t.publicKey,
      signAllTransactions: async (e) => e,
      signTransaction: async (e) => e,
    };
  };
Si.getReadOnlyWallet = Yh;
var vl = {};
Object.defineProperty(vl, '__esModule', { value: !0 });
var vi = {};
Object.defineProperty(vi, '__esModule', { value: !0 });
vi.FilledOrderQueue = void 0;
class Xh {
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
vi.FilledOrderQueue = Xh;
var Ec;
function Pl() {
  return (
    Ec ||
      ((Ec = 1),
      (function (t) {
        var e =
            (w && w.__createBinding) ||
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
            (w && w.__exportStar) ||
            function (r, o) {
              for (var i in r)
                i !== 'default' && !Object.prototype.hasOwnProperty.call(o, i) && e(o, r, i);
            };
        Object.defineProperty(t, '__esModule', { value: !0 }),
          n(Sl(), t),
          n(qh(), t),
          n(Ti(), t),
          n(Si, t),
          n(vl, t),
          n(vi, t),
          n(Rl, t);
      })(yo)),
    yo
  );
}
var Ic;
function fu() {
  return (
    Ic ||
      ((Ic = 1),
      (function (t) {
        var e = {},
          n =
            (w && w.__createBinding) ||
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
            (w && w.__setModuleDefault) ||
            (Object.create
              ? function ($, T) {
                  Object.defineProperty($, 'default', { enumerable: !0, value: T });
                }
              : function ($, T) {
                  $.default = T;
                }),
          o =
            (w && w.__importStar) ||
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
            (w && w.__importDefault) ||
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
        const u = ur,
          d = i(yl),
          p = i(Je),
          a = _e,
          _ = Pl(),
          A = o(Sl()),
          h = _e,
          m = Kn,
          g = i(Dr),
          R = Ur,
          b = lt,
          N = Bt,
          P = Bt,
          I = i(xr),
          x = ps;
        (t.limoId = new a.PublicKey('LiMoM9rMhrdYrfzUCxQppvxCSG1FcrUK9G8uLq4A1GF')),
          (t.WRAPPED_SOL_MINT = new a.PublicKey('So11111111111111111111111111111111111111112')),
          (t.ORDER_RENT_EXEMPTION_LAMPORTS = 3841920),
          (t.MAX_CLOSE_ORDER_AND_CLAIM_TIP_ORDERS_IN_TX = 14);
        class F {
          constructor(T, y, v) {
            c(this, '_connection');
            c(this, '_provider');
            c(this, '_limoProgram');
            c(this, 'programId');
            c(this, 'globalConfigState');
            c(this, '_globalConfig');
            (this._connection = T),
              (this._globalConfig = y != null ? y : a.PublicKey.default),
              (this._provider = new u.AnchorProvider(T, (0, _.getReadOnlyWallet)(), {
                commitment: T.commitment,
              })),
              (this.programId = t.limoId),
              (this._limoProgram = new u.Program(d.default, this.programId, this._provider)),
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
                j = new g.default(M.state.tipAmount.toString()),
                V = (0, _.lamportsToAmountDecimal)(j, 9);
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
                orderTipLamports: j,
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
              z = (ee, j) => {
                ee.state.remainingInputAmount.toNumber() < ee.state.initialInputAmount.toNumber() &&
                  v(ee, j);
              },
              S = (ee, j) => {
                ee.state.remainingInputAmount.toNumber() < ee.state.initialInputAmount.toNumber() &&
                  M(ee, j);
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
            const j = h.Keypair.generate(),
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
                  j,
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
                A.createOrder(T, S || this._globalConfig, j.publicKey, V, this.programId, se, ce)
              ),
              te.push(...ue),
              [te, j]
            );
          }
          async createOrderGeneric(T, y, v, M, G, J = 'execute', z, S, k) {
            const [q, ee] = await this.createOrderGenericIx(T.publicKey, y, v, M, G, z, S, k),
              j = 'Create Order: ' + ee.publicKey.toString();
            return [await this.processTxn(T, q, J, j, [ee]), ee];
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
            const [ee, j] = await this.placeBidIxs(T.publicKey, y, v, M, G, z, S, k, q),
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
                j.publicKey.toString();
            return [await this.processTxn(T, ee, J, V, [j]), j];
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
            const [ee, j] = await this.placeAskIxs(T.publicKey, y, v, M, G, z, S, k, q),
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
                j.publicKey.toString();
            return [await this.processTxn(T, ee, J, V, [j]), j];
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
            let j;
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
              (j = ge), S && (k.push(...ce, ...ue), q.push(...pe));
            } else {
              const { ata: se, createAtaIx: ce } = (0, _.createAtaIdempotent)(
                T,
                T,
                y.state.outputMint,
                y.state.outputMintProgramId
              );
              (j = se), k.push(ce);
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
                  takerOutputAta: j,
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
              j = (0, _.divCeil)(y.state.expectedOutputAmount.mul(v), y.state.initialInputAmount),
              V =
                'Taker Order: ' +
                y.address.toString() +
                ' selling ' +
                (0, _.lamportsToAmountBN)(v, k).toString() +
                ' token ';
            return (
              y.state.inputMint.toString().slice(0, 5) +
                '' +
                (0, _.lamportsToAmountBN)(j, q).toString() +
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
            let j;
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
              (j = Ne), S && (k.push(...pe), q.push(...Ae));
            } else {
              const { ata: ue, createAtaIx: pe } = (0, _.createAtaIdempotent)(
                T,
                T,
                y.state.outputMint,
                y.state.outputMintProgramId
              );
              (j = ue), k.push(pe);
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
              takerOutputAta: j,
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
            let ee, j;
            q && ((ee = q.get(y.state.inputMint)), (j = q.get(y.state.outputMint))),
              (ee = ee || (await (0, _.getMintDecimals)(this._connection, y.state.inputMint))),
              (j = j || (await (0, _.getMintDecimals)(this._connection, y.state.outputMint)));
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
                (0, _.lamportsToAmountBN)(ue, j).toString() +
                y.state.outputMint.toString().slice(0, 5),
              await this.processTxn(T, [...V, te, ...z, se, ...ce], J, pe, k, 3e5)
            );
          }
          logUserSwapBalancesIxs(T, y, v, M, G, J = this.programId) {
            const z = (0, N.getAssociatedTokenAddressSync)(y, T, !0, M),
              S = (0, N.getAssociatedTokenAddressSync)(v, T, !0, G),
              k = (0, x.logUserSwapBalances)({
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
              [j, V] = await this.createOrderGenericIx(y, v, M, G, J, z, S, k);
            return [[...ee, ...j], V];
          }
          async updateOrderGeneric(T, y, v, M, G, J, z, S, k = 'execute', q, ee = !0) {
            const [j, V] = await this.updateOrderGenericIx(T, y.publicKey, v, M, G, J, z, S, q, ee),
              te =
                'Update order: closing order: ' +
                T.toString() +
                ' and creating order ' +
                V.publicKey.toString();
            return [await this.processTxn(y, j, k, te, [V]), V];
          }
          updateGlobalConfigIx(T, y, v) {
            const M = [],
              G = this.getGlobalConfigStateSync();
            return (
              M.push(
                A.updateGlobalConfigIx(
                  G.adminAuthority,
                  v || this._globalConfig,
                  b.UpdateGlobalConfigMode.fromDecoded({ [T]: '' }),
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
      })(Ro)),
    Ro
  );
}
(function (t) {
  var e =
      (w && w.__createBinding) ||
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
      (w && w.__exportStar) ||
      function (r, o) {
        for (var i in r)
          i !== 'default' && !Object.prototype.hasOwnProperty.call(o, i) && e(o, r, i);
      };
  Object.defineProperty(t, '__esModule', { value: !0 }), n(fu(), t), n(lt, t), n(du, t);
})(Lr);
var Ml = {},
  Vn = {},
  Oe = {};
function Jh(t, e) {
  return Array.apply(0, new Array(Math.ceil(t.length / e))).map((n, r) =>
    t.slice(r * e, (r + 1) * e)
  );
}
const cn = (t) => 'version' in t;
function Qh(t) {
  return t.reduce((e, n) => e + n.toString(16).padStart(2, '0'), '0x');
}
function Zh(t) {
  t.indexOf('0x') === 0 && (t = t.substr(2)), t.length % 2 === 1 && (t = '0' + t);
  let e = t.match(/.{2}/g);
  return e === null ? Pe.Buffer.from([]) : Pe.Buffer.from(e.map((n) => parseInt(n, 16)));
}
var em = Object.freeze({ __proto__: null, encode: Qh, decode: Zh });
function kl(t) {
  return new TextDecoder('utf-8').decode(t);
}
function tm(t) {
  return new TextEncoder().encode(t);
}
var nm = Object.freeze({ __proto__: null, decode: kl, encode: tm });
function Yo(t) {
  return xn.encode(t);
}
function rm(t) {
  return xn.decode(t);
}
var im = Object.freeze({ __proto__: null, encode: Yo, decode: rm });
function Xo(t) {
  return t.toString('base64');
}
function pu(t) {
  return Pe.Buffer.from(t, 'base64');
}
var om = Object.freeze({ __proto__: null, encode: Xo, decode: pu }),
  sm = Object.freeze({ __proto__: null, hex: em, utf8: nm, bs58: im, base64: om });
function kn(t) {
  return 'accounts' in t;
}
async function am(t) {
  const e = (await Ve.findProgramAddress([], t))[0];
  return await Ve.createWithSeed(e, um(), t);
}
function um() {
  return 'anchor:idl';
}
const cm = me.struct([me.publicKey('authority'), me.vecU8('data')]);
function lm(t) {
  return cm.decode(t);
}
function dm(t) {
  const e = ['name', 'path', 'account', 'relations', 'generic'],
    n = (i) => i.split('.').map(__).join('.'),
    r = (i) => {
      for (const u in i) {
        const d = i[u];
        e.includes(u) ? (i[u] = Array.isArray(d) ? d.map(n) : n(d)) : typeof d == 'object' && r(d);
      }
    },
    o = structuredClone(t);
  return r(o), o;
}
function Dn(t, e, n, r) {
  return t != null && t.length ? (t[0].name ? n(t) : r(t)) : e();
}
function Dl(t) {
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
function xl(t, ...e) {
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
function _u(t, e = {}) {
  t.forEach((n) => {
    if (kn(n)) _u(n.accounts, e[n.name]);
    else if (!e[n.name]) throw new Error('Account `'.concat(n.name, '` not provided.'));
  });
}
function nt(t) {
  return t instanceof Ve ? t : new Ve(t);
}
class fm extends TypeError {
  constructor(e, n) {
    let r;
    const p = e,
      { message: o } = p,
      i = hc(p, ['message']),
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
        var a;
        return (a = r) != null ? a : (r = [e, ...n()]);
      });
  }
}
function pm(t) {
  return Bn(t) && typeof t[Symbol.iterator] == 'function';
}
function Bn(t) {
  return typeof t == 'object' && t != null;
}
function Jt(t) {
  return typeof t == 'string' ? JSON.stringify(t) : '' + t;
}
function _m(t) {
  const { done: e, value: n } = t.next();
  return e ? void 0 : n;
}
function hm(t, e, n, r) {
  if (t === !0) return;
  t === !1 ? (t = {}) : typeof t == 'string' && (t = { message: t });
  const { path: o, branch: i } = e,
    { type: u } = n,
    {
      refinement: d,
      message: p = 'Expected a value of type `' +
        u +
        '`' +
        (d ? ' with refinement `' + d + '`' : '') +
        ', but received: `' +
        Jt(r) +
        '`',
    } = t;
  return at(Be({ value: r, type: u, refinement: d, key: o[o.length - 1], path: o, branch: i }, t), {
    message: p,
  });
}
function* wc(t, e, n, r) {
  pm(t) || (t = [t]);
  for (const o of t) {
    const i = hm(o, e, n, r);
    i && (yield i);
  }
}
function* hu(t, e, n) {
  n === void 0 && (n = {});
  const { path: r = [], branch: o = [t], coerce: i = !1, mask: u = !1 } = n,
    d = { path: r, branch: o };
  if (
    i &&
    ((t = e.coercer(t, d)), u && e.type !== 'type' && Bn(e.schema) && Bn(t) && !Array.isArray(t))
  )
    for (const a in t) e.schema[a] === void 0 && delete t[a];
  let p = !0;
  for (const a of e.validator(t, d)) (p = !1), yield [a, void 0];
  for (let [a, _, A] of e.entries(t, d)) {
    const h = hu(_, A, {
      path: a === void 0 ? r : [...r, a],
      branch: a === void 0 ? o : [...o, _],
      coerce: i,
      mask: u,
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
                : Bn(t) && (t[a] = _));
  }
  if (p) for (const a of e.refiner(t, d)) (p = !1), yield [a, void 0];
  p && (yield [void 0, t]);
}
class tn {
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
      coercer: u = (p) => p,
      entries: d = function* () {},
    } = e;
    (this.type = n),
      (this.schema = r),
      (this.entries = d),
      (this.coercer = u),
      o
        ? (this.validator = (p, a) => {
            const _ = o(p, a);
            return wc(_, a, this, p);
          })
        : (this.validator = () => []),
      i
        ? (this.refiner = (p, a) => {
            const _ = i(p, a);
            return wc(_, a, this, p);
          })
        : (this.refiner = () => []);
  }
  assert(e) {
    return mm(e, this);
  }
  create(e) {
    return mu(e, this);
  }
  is(e) {
    return Bl(e, this);
  }
  mask(e) {
    return gm(e, this);
  }
  validate(e, n) {
    return n === void 0 && (n = {}), $r(e, this, n);
  }
}
function mm(t, e) {
  const n = $r(t, e);
  if (n[0]) throw n[0];
}
function mu(t, e) {
  const n = $r(t, e, { coerce: !0 });
  if (n[0]) throw n[0];
  return n[1];
}
function gm(t, e) {
  const n = $r(t, e, { coerce: !0, mask: !0 });
  if (n[0]) throw n[0];
  return n[1];
}
function Bl(t, e) {
  return !$r(t, e)[0];
}
function $r(t, e, n) {
  n === void 0 && (n = {});
  const r = hu(t, e, n),
    o = _m(r);
  return o[0]
    ? [
        new fm(o[0], function* () {
          for (const u of r) u[0] && (yield u[0]);
        }),
        void 0,
      ]
    : [void 0, o[1]];
}
function jr(t, e) {
  return new tn({ type: t, schema: null, validator: e });
}
function Am() {
  return jr('any', () => !0);
}
function Io(t) {
  return new tn({
    type: 'array',
    schema: t,
    *entries(e) {
      if (t && Array.isArray(e)) for (const [n, r] of e.entries()) yield [n, r, t];
    },
    coercer(e) {
      return Array.isArray(e) ? e.slice() : e;
    },
    validator(e) {
      return Array.isArray(e) || 'Expected an array value, but received: ' + Jt(e);
    },
  });
}
function Om() {
  return jr('boolean', (t) => typeof t == 'boolean');
}
function bc(t) {
  const e = Jt(t);
  return new tn({
    type: 'literal',
    schema: t,
    validator(n) {
      return n === t || 'Expected the literal `' + e + '`, but received: ' + Jt(n);
    },
  });
}
function ui(t) {
  return new tn(
    at(Be({}, t), {
      validator: (e, n) => e === null || t.validator(e, n),
      refiner: (e, n) => e === null || t.refiner(e, n),
    })
  );
}
function Oi() {
  return jr(
    'number',
    (t) => (typeof t == 'number' && !isNaN(t)) || 'Expected a number, but received: ' + Jt(t)
  );
}
function Ri(t) {
  return new tn(
    at(Be({}, t), {
      validator: (e, n) => e === void 0 || t.validator(e, n),
      refiner: (e, n) => e === void 0 || t.refiner(e, n),
    })
  );
}
function hn() {
  return jr('string', (t) => typeof t == 'string' || 'Expected a string, but received: ' + Jt(t));
}
function Yt(t) {
  const e = Object.keys(t);
  return new tn({
    type: 'type',
    schema: t,
    *entries(n) {
      if (Bn(n)) for (const r of e) yield [r, n[r], t[r]];
    },
    validator(n) {
      return Bn(n) || 'Expected an object, but received: ' + Jt(n);
    },
  });
}
function Ll(t) {
  const e = t.map((n) => n.type).join(' | ');
  return new tn({
    type: 'union',
    schema: null,
    coercer(n, r) {
      return (
        t.find((i) => {
          const [u] = i.validate(n, { coerce: !0 });
          return !u;
        }) || gu()
      ).coercer(n, r);
    },
    validator(n, r) {
      const o = [];
      for (const i of t) {
        const [...u] = hu(n, i, r),
          [d] = u;
        if (d[0]) for (const [p] of u) p && o.push(p);
        else return [];
      }
      return ['Expected the value to satisfy a union of `' + e + '`, but received: ' + Jt(n), ...o];
    },
  });
}
function gu() {
  return jr('unknown', () => !0);
}
function Rm(t, e, n) {
  return new tn(
    at(Be({}, t), { coercer: (r, o) => (Bl(r, e) ? t.coercer(n(r, o), o) : t.coercer(r, o)) })
  );
}
async function ym(t, e, n, r) {
  (t = nt(t)), r || (r = Sr());
  const o = new pl();
  if (
    (o.add(new _l({ programId: t, keys: e != null ? e : [], data: n })),
    r.sendAndConfirm === void 0)
  )
    throw new Error("This function requires 'Provider.sendAndConfirm' to be implemented.");
  return await r.sendAndConfirm(o, []);
}
const Nc = 99;
async function Tm(t, e, n) {
  return (await Au(t, e, n)).map((o) =>
    o ? { publicKey: o.publicKey, account: o.account } : null
  );
}
async function Au(t, e, n) {
  if (e.length <= Nc) return await Cc(t, e, n);
  {
    const r = Jh(e, Nc);
    return (await Promise.all(r.map((i) => Cc(t, i, n)))).flat();
  }
}
async function Cc(t, e, n) {
  const r = n != null ? n : t.commitment,
    { value: o, context: i } = await t.getMultipleAccountsInfoAndContext(e, r);
  return o.map((d, p) => (d === null ? null : { publicKey: e[p], account: d, context: i }));
}
async function Ul(t, e, n, r, o) {
  var i;
  n && n.length > 0 && e.sign(...n);
  const u = e._compile(),
    d = u.serialize(),
    a = e._serialize(d).toString('base64'),
    _ = { encoding: 'base64', commitment: r != null ? r : t.commitment };
  if (o) {
    const g = (Array.isArray(o) ? o : u.nonProgramIds()).map((R) => R.toBase58());
    _.accounts = { encoding: 'base64', addresses: g };
  }
  n && n.length > 0 && (_.sigVerify = !0);
  const A = [a, _],
    h = await t._rpcRequest('simulateTransaction', A),
    m = mu(h, bm);
  if ('error' in m) {
    let g;
    if (
      'data' in m.error &&
      ((g = (i = m.error.data) === null || i === void 0 ? void 0 : i.logs), g && Array.isArray(g))
    ) {
      const R = '\n    ',
        b = R + g.join(R);
      console.error(m.error.message, b);
    }
    throw new Wo('failed to simulate transaction: ' + m.error.message, g);
  }
  return m.result;
}
function Em(t) {
  return Rm($l(t), Im, (e) => ('error' in e ? e : at(Be({}, e), { result: mu(e.result, t) })));
}
const Im = $l(gu());
function $l(t) {
  return Ll([
    Yt({ jsonrpc: bc('2.0'), id: hn(), result: t }),
    Yt({ jsonrpc: bc('2.0'), id: hn(), error: Yt({ code: gu(), message: hn(), data: Ri(Am()) }) }),
  ]);
}
function wm(t) {
  return Em(Yt({ context: Yt({ slot: Oi() }), value: t }));
}
const bm = wm(
  Yt({
    err: ui(Ll([Yt({}), hn()])),
    logs: ui(Io(hn())),
    accounts: Ri(
      ui(
        Io(
          ui(
            Yt({
              executable: Om(),
              owner: hn(),
              lamports: Oi(),
              data: Io(hn()),
              rentEpoch: Ri(Oi()),
            })
          )
        )
      )
    ),
    unitsConsumed: Ri(Oi()),
  })
);
var Nm = Object.freeze({
  __proto__: null,
  invoke: ym,
  getMultipleAccounts: Tm,
  getMultipleAccountsAndContext: Au,
  simulateTransaction: Ul,
});
class Cr {
  constructor(e, n, r = Cr.defaultOptions()) {
    (this.connection = e),
      (this.wallet = n),
      (this.opts = r),
      (this.publicKey = n == null ? void 0 : n.publicKey);
  }
  static defaultOptions() {
    return { preflightCommitment: 'processed', commitment: 'processed' };
  }
  static local(e, n = Cr.defaultOptions()) {
    throw new Error('Provider local is not available on browser.');
  }
  static env() {
    throw new Error('Provider env is not available on browser.');
  }
  async sendAndConfirm(e, n, r) {
    var o, i, u, d;
    if ((r === void 0 && (r = this.opts), cn(e))) n && e.sign(n);
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
      return await Sc(this.connection, p, r);
    } catch (a) {
      if (a instanceof Jo) {
        const _ = Yo(
            cn(e)
              ? ((i = e.signatures) === null || i === void 0 ? void 0 : i[0]) || new Uint8Array()
              : (u = e.signature) !== null && u !== void 0
                ? u
                : new Uint8Array()
          ),
          A = cn(e) ? 0 : void 0,
          h = await this.connection.getTransaction(_, {
            commitment: 'confirmed',
            maxSupportedTransactionVersion: A,
          });
        if (h) {
          const m = (d = h.meta) === null || d === void 0 ? void 0 : d.logMessages;
          throw m ? new Wo(a.message, m) : a;
        } else throw a;
      } else throw a;
    }
  }
  async sendAll(e, n) {
    var r, o, i;
    n === void 0 && (n = this.opts);
    const u = (await this.connection.getLatestBlockhash(n.preflightCommitment)).blockhash;
    let d = e.map((_) => {
      var A, h;
      if (cn(_.tx)) {
        let m = _.tx;
        return _.signers && m.sign(_.signers), m;
      } else {
        let m = _.tx,
          g = (A = _.signers) !== null && A !== void 0 ? A : [];
        return (
          (m.feePayer = (h = m.feePayer) !== null && h !== void 0 ? h : this.wallet.publicKey),
          (m.recentBlockhash = u),
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
        a.push(await Sc(this.connection, h, n));
      } catch (m) {
        if (m instanceof Jo) {
          const g = Yo(
              cn(A)
                ? ((r = A.signatures) === null || r === void 0 ? void 0 : r[0]) || new Uint8Array()
                : (o = A.signature) !== null && o !== void 0
                  ? o
                  : new Uint8Array()
            ),
            R = cn(A) ? 0 : void 0,
            b = await this.connection.getTransaction(g, {
              commitment: 'confirmed',
              maxSupportedTransactionVersion: R,
            });
          if (b) {
            const N = (i = b.meta) === null || i === void 0 ? void 0 : i.logMessages;
            throw N ? new Wo(m.message, N) : m;
          } else throw m;
        } else throw m;
      }
    }
    return a;
  }
  async simulate(e, n, r, o) {
    let i = (await this.connection.getLatestBlockhash(r != null ? r : this.connection.commitment))
        .blockhash,
      u;
    if (
      (cn(e)
        ? (n && n.length > 0 && (e.sign(n), (e = await this.wallet.signTransaction(e))),
          (u = await this.connection.simulateTransaction(e, { commitment: r })))
        : ((e.feePayer = e.feePayer || this.wallet.publicKey),
          (e.recentBlockhash = i),
          n && n.length > 0 && (e = await this.wallet.signTransaction(e)),
          (u = await Ul(this.connection, e, n, r, o))),
      u.value.err)
    )
      throw new Cm(u.value);
    return u.value;
  }
}
class Cm extends Error {
  constructor(e, n) {
    super(n), (this.simulationResponse = e);
  }
}
async function Sc(t, e, n) {
  const r = n && {
      skipPreflight: n.skipPreflight,
      preflightCommitment: n.preflightCommitment || n.commitment,
    },
    o = await t.sendRawTransaction(e, r),
    i = (await t.confirmTransaction(o, n && n.commitment)).value;
  if (i.err) throw new Jo('Raw transaction '.concat(o, ' failed (').concat(JSON.stringify(i), ')'));
  return o;
}
class Jo extends Error {
  constructor(e) {
    super(e);
  }
}
function Sm(t) {
  Qo = t;
}
function Sr() {
  return Qo === null ? Cr.local() : Qo;
}
let Qo = null;
var vm =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof ie.global < 'u'
        ? ie.global
        : typeof self < 'u'
          ? self
          : {};
function Pm(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default') ? t.default : t;
}
var U = {};
Object.defineProperty(U, '__esModule', { value: !0 });
var jl =
    (U.ANCHOR_ERROR__REQUIRE_EQ_VIOLATED =
    Bd =
    U.ANCHOR_ERROR__REQUIRE_VIOLATED =
    xd =
    U.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION_PROGRAM_ID =
    Dd =
    U.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION_AUTHORITY =
    kd =
    U.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION =
    Md =
    U.ANCHOR_ERROR__CONSTRAINT_MINT_PERMANENT_DELEGATE_EXTENSION_DELEGATE =
    Pd =
    U.ANCHOR_ERROR__CONSTRAINT_MINT_PERMANENT_DELEGATE_EXTENSION =
    vd =
    U.ANCHOR_ERROR__CONSTRAINT_MINT_CLOSE_AUTHORITY_EXTENSION_AUTHORITY =
    Sd =
    U.ANCHOR_ERROR__CONSTRAINT_MINT_CLOSE_AUTHORITY_EXTENSION =
    Cd =
    U.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION_METADATA_ADDRESS =
    Nd =
    U.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION_AUTHORITY =
    bd =
    U.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION =
    wd =
    U.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION_MEMBER_ADDRESS =
    Id =
    U.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION_AUTHORITY =
    Ed =
    U.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION =
    Td =
    U.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION_GROUP_ADDRESS =
    yd =
    U.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION_AUTHORITY =
    Rd =
    U.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION =
    Od =
    U.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED_TOKEN_TOKEN_PROGRAM =
    Ad =
    U.ANCHOR_ERROR__CONSTRAINT_MINT_TOKEN_PROGRAM =
    gd =
    U.ANCHOR_ERROR__CONSTRAINT_TOKEN_TOKEN_PROGRAM =
    md =
    U.ANCHOR_ERROR__CONSTRAINT_ACCOUNT_IS_NONE =
    hd =
    U.ANCHOR_ERROR__CONSTRAINT_SPACE =
    _d =
    U.ANCHOR_ERROR__CONSTRAINT_MINT_DECIMALS =
    pd =
    U.ANCHOR_ERROR__CONSTRAINT_MINT_FREEZE_AUTHORITY =
    fd =
    U.ANCHOR_ERROR__CONSTRAINT_MINT_MINT_AUTHORITY =
    dd =
    U.ANCHOR_ERROR__CONSTRAINT_TOKEN_OWNER =
    ld =
    U.ANCHOR_ERROR__CONSTRAINT_TOKEN_MINT =
    cd =
    U.ANCHOR_ERROR__CONSTRAINT_ZERO =
    ud =
    U.ANCHOR_ERROR__CONSTRAINT_ADDRESS =
    ad =
    U.ANCHOR_ERROR__CONSTRAINT_CLOSE =
    sd =
    U.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED_INIT =
    od =
    U.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED =
    id =
    U.ANCHOR_ERROR__CONSTRAINT_STATE =
    rd =
    U.ANCHOR_ERROR__CONSTRAINT_EXECUTABLE =
    nd =
    U.ANCHOR_ERROR__CONSTRAINT_SEEDS =
    td =
    U.ANCHOR_ERROR__CONSTRAINT_RENT_EXEMPT =
    ed =
    U.ANCHOR_ERROR__CONSTRAINT_OWNER =
    Zl =
    U.ANCHOR_ERROR__CONSTRAINT_RAW =
    Ql =
    U.ANCHOR_ERROR__CONSTRAINT_SIGNER =
    Jl =
    U.ANCHOR_ERROR__CONSTRAINT_HAS_ONE =
    Xl =
    U.ANCHOR_ERROR__CONSTRAINT_MUT =
    Yl =
    U.ANCHOR_ERROR__EVENT_INSTRUCTION_STUB =
    zl =
    U.ANCHOR_ERROR__IDL_ACCOUNT_NOT_EMPTY =
    ql =
    U.ANCHOR_ERROR__IDL_INSTRUCTION_INVALID_PROGRAM =
    Wl =
    U.ANCHOR_ERROR__IDL_INSTRUCTION_STUB =
    Vl =
    U.ANCHOR_ERROR__INSTRUCTION_DID_NOT_SERIALIZE =
    Kl =
    U.ANCHOR_ERROR__INSTRUCTION_DID_NOT_DESERIALIZE =
    Fl =
    U.ANCHOR_ERROR__INSTRUCTION_FALLBACK_NOT_FOUND =
    Gl =
    U.ANCHOR_ERROR__INSTRUCTION_MISSING =
      void 0),
  Hl =
    (U.ANCHOR_ERROR__DEPRECATED =
    cf =
    U.ANCHOR_ERROR__INVALID_NUMERIC_CONVERSION =
    uf =
    U.ANCHOR_ERROR__TRYING_TO_INIT_PAYER_AS_PROGRAM_ACCOUNT =
    af =
    U.ANCHOR_ERROR__DECLARED_PROGRAM_ID_MISMATCH =
    sf =
    U.ANCHOR_ERROR__ACCOUNT_DUPLICATE_REALLOCS =
    of =
    U.ANCHOR_ERROR__ACCOUNT_REALLOC_EXCEEDS_LIMIT =
    rf =
    U.ANCHOR_ERROR__ACCOUNT_SYSVAR_MISMATCH =
    nf =
    U.ANCHOR_ERROR__ACCOUNT_NOT_ASSOCIATED_TOKEN_ACCOUNT =
    tf =
    U.ANCHOR_ERROR__ACCOUNT_NOT_PROGRAM_DATA =
    ef =
    U.ANCHOR_ERROR__ACCOUNT_NOT_INITIALIZED =
    Zd =
    U.ANCHOR_ERROR__ACCOUNT_NOT_SYSTEM_OWNED =
    Qd =
    U.ANCHOR_ERROR__ACCOUNT_NOT_SIGNER =
    Jd =
    U.ANCHOR_ERROR__INVALID_PROGRAM_EXECUTABLE =
    Xd =
    U.ANCHOR_ERROR__INVALID_PROGRAM_ID =
    Yd =
    U.ANCHOR_ERROR__ACCOUNT_OWNED_BY_WRONG_PROGRAM =
    zd =
    U.ANCHOR_ERROR__ACCOUNT_NOT_MUTABLE =
    qd =
    U.ANCHOR_ERROR__ACCOUNT_NOT_ENOUGH_KEYS =
    Wd =
    U.ANCHOR_ERROR__ACCOUNT_DID_NOT_SERIALIZE =
    Vd =
    U.ANCHOR_ERROR__ACCOUNT_DID_NOT_DESERIALIZE =
    Kd =
    U.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_MISMATCH =
    Fd =
    U.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_NOT_FOUND =
    Gd =
    U.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_ALREADY_SET =
    Hd =
    U.ANCHOR_ERROR__REQUIRE_GTE_VIOLATED =
    jd =
    U.ANCHOR_ERROR__REQUIRE_GT_VIOLATED =
    $d =
    U.ANCHOR_ERROR__REQUIRE_KEYS_NEQ_VIOLATED =
    Ud =
    U.ANCHOR_ERROR__REQUIRE_NEQ_VIOLATED =
    Ld =
    U.ANCHOR_ERROR__REQUIRE_KEYS_EQ_VIOLATED =
      void 0),
  Gl = (U.ANCHOR_ERROR__INSTRUCTION_MISSING = 100),
  Fl = (U.ANCHOR_ERROR__INSTRUCTION_FALLBACK_NOT_FOUND = 101),
  Kl = (U.ANCHOR_ERROR__INSTRUCTION_DID_NOT_DESERIALIZE = 102),
  Vl = (U.ANCHOR_ERROR__INSTRUCTION_DID_NOT_SERIALIZE = 103),
  Wl = (U.ANCHOR_ERROR__IDL_INSTRUCTION_STUB = 1e3),
  ql = (U.ANCHOR_ERROR__IDL_INSTRUCTION_INVALID_PROGRAM = 1001),
  zl = (U.ANCHOR_ERROR__IDL_ACCOUNT_NOT_EMPTY = 1002),
  Yl = (U.ANCHOR_ERROR__EVENT_INSTRUCTION_STUB = 1500),
  Xl = (U.ANCHOR_ERROR__CONSTRAINT_MUT = 2e3),
  Jl = (U.ANCHOR_ERROR__CONSTRAINT_HAS_ONE = 2001),
  Ql = (U.ANCHOR_ERROR__CONSTRAINT_SIGNER = 2002),
  Zl = (U.ANCHOR_ERROR__CONSTRAINT_RAW = 2003),
  ed = (U.ANCHOR_ERROR__CONSTRAINT_OWNER = 2004),
  td = (U.ANCHOR_ERROR__CONSTRAINT_RENT_EXEMPT = 2005),
  nd = (U.ANCHOR_ERROR__CONSTRAINT_SEEDS = 2006),
  rd = (U.ANCHOR_ERROR__CONSTRAINT_EXECUTABLE = 2007),
  id = (U.ANCHOR_ERROR__CONSTRAINT_STATE = 2008),
  od = (U.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED = 2009),
  sd = (U.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED_INIT = 2010),
  ad = (U.ANCHOR_ERROR__CONSTRAINT_CLOSE = 2011),
  ud = (U.ANCHOR_ERROR__CONSTRAINT_ADDRESS = 2012),
  cd = (U.ANCHOR_ERROR__CONSTRAINT_ZERO = 2013),
  ld = (U.ANCHOR_ERROR__CONSTRAINT_TOKEN_MINT = 2014),
  dd = (U.ANCHOR_ERROR__CONSTRAINT_TOKEN_OWNER = 2015),
  fd = (U.ANCHOR_ERROR__CONSTRAINT_MINT_MINT_AUTHORITY = 2016),
  pd = (U.ANCHOR_ERROR__CONSTRAINT_MINT_FREEZE_AUTHORITY = 2017),
  _d = (U.ANCHOR_ERROR__CONSTRAINT_MINT_DECIMALS = 2018),
  hd = (U.ANCHOR_ERROR__CONSTRAINT_SPACE = 2019),
  md = (U.ANCHOR_ERROR__CONSTRAINT_ACCOUNT_IS_NONE = 2020),
  gd = (U.ANCHOR_ERROR__CONSTRAINT_TOKEN_TOKEN_PROGRAM = 2021),
  Ad = (U.ANCHOR_ERROR__CONSTRAINT_MINT_TOKEN_PROGRAM = 2022),
  Od = (U.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED_TOKEN_TOKEN_PROGRAM = 2023),
  Rd = (U.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION = 2024),
  yd = (U.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION_AUTHORITY = 2025),
  Td = (U.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION_GROUP_ADDRESS = 2026),
  Ed = (U.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION = 2027),
  Id = (U.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION_AUTHORITY = 2028),
  wd = (U.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION_MEMBER_ADDRESS = 2029),
  bd = (U.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION = 2030),
  Nd = (U.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION_AUTHORITY = 2031),
  Cd = (U.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION_METADATA_ADDRESS = 2032),
  Sd = (U.ANCHOR_ERROR__CONSTRAINT_MINT_CLOSE_AUTHORITY_EXTENSION = 2033),
  vd = (U.ANCHOR_ERROR__CONSTRAINT_MINT_CLOSE_AUTHORITY_EXTENSION_AUTHORITY = 2034),
  Pd = (U.ANCHOR_ERROR__CONSTRAINT_MINT_PERMANENT_DELEGATE_EXTENSION = 2035),
  Md = (U.ANCHOR_ERROR__CONSTRAINT_MINT_PERMANENT_DELEGATE_EXTENSION_DELEGATE = 2036),
  kd = (U.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION = 2037),
  Dd = (U.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION_AUTHORITY = 2038),
  xd = (U.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION_PROGRAM_ID = 2039),
  Bd = (U.ANCHOR_ERROR__REQUIRE_VIOLATED = 2500);
jl = U.ANCHOR_ERROR__REQUIRE_EQ_VIOLATED = 2501;
var Ld = (U.ANCHOR_ERROR__REQUIRE_KEYS_EQ_VIOLATED = 2502),
  Ud = (U.ANCHOR_ERROR__REQUIRE_NEQ_VIOLATED = 2503),
  $d = (U.ANCHOR_ERROR__REQUIRE_KEYS_NEQ_VIOLATED = 2504),
  jd = (U.ANCHOR_ERROR__REQUIRE_GT_VIOLATED = 2505),
  Hd = (U.ANCHOR_ERROR__REQUIRE_GTE_VIOLATED = 2506),
  Gd = (U.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_ALREADY_SET = 3e3),
  Fd = (U.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_NOT_FOUND = 3001),
  Kd = (U.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_MISMATCH = 3002),
  Vd = (U.ANCHOR_ERROR__ACCOUNT_DID_NOT_DESERIALIZE = 3003),
  Wd = (U.ANCHOR_ERROR__ACCOUNT_DID_NOT_SERIALIZE = 3004),
  qd = (U.ANCHOR_ERROR__ACCOUNT_NOT_ENOUGH_KEYS = 3005),
  zd = (U.ANCHOR_ERROR__ACCOUNT_NOT_MUTABLE = 3006),
  Yd = (U.ANCHOR_ERROR__ACCOUNT_OWNED_BY_WRONG_PROGRAM = 3007),
  Xd = (U.ANCHOR_ERROR__INVALID_PROGRAM_ID = 3008),
  Jd = (U.ANCHOR_ERROR__INVALID_PROGRAM_EXECUTABLE = 3009),
  Qd = (U.ANCHOR_ERROR__ACCOUNT_NOT_SIGNER = 3010),
  Zd = (U.ANCHOR_ERROR__ACCOUNT_NOT_SYSTEM_OWNED = 3011),
  ef = (U.ANCHOR_ERROR__ACCOUNT_NOT_INITIALIZED = 3012),
  tf = (U.ANCHOR_ERROR__ACCOUNT_NOT_PROGRAM_DATA = 3013),
  nf = (U.ANCHOR_ERROR__ACCOUNT_NOT_ASSOCIATED_TOKEN_ACCOUNT = 3014),
  rf = (U.ANCHOR_ERROR__ACCOUNT_SYSVAR_MISMATCH = 3015),
  of = (U.ANCHOR_ERROR__ACCOUNT_REALLOC_EXCEEDS_LIMIT = 3016),
  sf = (U.ANCHOR_ERROR__ACCOUNT_DUPLICATE_REALLOCS = 3017),
  af = (U.ANCHOR_ERROR__DECLARED_PROGRAM_ID_MISMATCH = 4100),
  uf = (U.ANCHOR_ERROR__TRYING_TO_INIT_PAYER_AS_PROGRAM_ACCOUNT = 4101),
  cf = (U.ANCHOR_ERROR__INVALID_NUMERIC_CONVERSION = 4102);
Hl = U.ANCHOR_ERROR__DEPRECATED = 5e3;
const Mm = new Set(['debug-logs']),
  lf = new Map();
function km(t) {
  if (!Mm.has(t)) throw new Error('Invalid feature');
  lf.set(t, !0);
}
function Ou(t) {
  return lf.get(t) !== void 0;
}
var Dm = Object.freeze({ __proto__: null, set: km, isSet: Ou });
class Mt extends Error {
  constructor(e) {
    super(e), (this.name = 'IdlError');
  }
}
class Wn {
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
      d && i.push(new Ve(d));
    }
    return new Wn(i);
  }
}
class Ln extends Error {
  constructor(e, n, r, o, i, u) {
    super(r.join('\n').replace('Program log: ', '')),
      (this.errorLogs = r),
      (this.logs = o),
      (this.error = { errorCode: e, errorMessage: n, comparedValues: u, origin: i }),
      (this._programErrorStack = Wn.parse(o));
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
        (i = [new Ve(m), new Ve(g)]), o.push(...e.slice(n + 1, n + 5));
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
      return new Ln(R, g, o, e, void 0, i);
    } else if (a) {
      const [h, m, g, R, b] = a.slice(1, 6),
        N = { code: g, number: parseInt(R) },
        P = { file: h, line: parseInt(m) };
      return new Ln(N, b, o, e, P, i);
    } else if (A) {
      const [h, m, g, R] = A.slice(1, 5),
        b = h,
        N = { code: m, number: parseInt(g) };
      return new Ln(N, R, o, e, b, i);
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
class vr extends Error {
  constructor(e, n, r) {
    super(),
      (this.code = e),
      (this.msg = n),
      (this.logs = r),
      r && (this._programErrorStack = Wn.parse(r));
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
      ? new vr(i, u, e.logs)
      : ((u = df.get(i)), u !== void 0 ? new vr(i, u, e.logs) : null);
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
function Ru(t, e) {
  Ou('debug-logs') && console.log('Translating error:', t);
  const n = Ln.parse(t.logs);
  if (n) return n;
  const r = vr.parse(t, e);
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
    return (t.programErrorStack = Wn.parse(t.logs)), new Proxy(t, o);
  }
  return t;
}
const oe = {
    InstructionMissing: Gl,
    InstructionFallbackNotFound: Fl,
    InstructionDidNotDeserialize: Kl,
    InstructionDidNotSerialize: Vl,
    IdlInstructionStub: Wl,
    IdlInstructionInvalidProgram: ql,
    IdlAccountNotEmpty: zl,
    EventInstructionStub: Yl,
    ConstraintMut: Xl,
    ConstraintHasOne: Jl,
    ConstraintSigner: Ql,
    ConstraintRaw: Zl,
    ConstraintOwner: ed,
    ConstraintRentExempt: td,
    ConstraintSeeds: nd,
    ConstraintExecutable: rd,
    ConstraintState: id,
    ConstraintAssociated: od,
    ConstraintAssociatedInit: sd,
    ConstraintClose: ad,
    ConstraintAddress: ud,
    ConstraintZero: cd,
    ConstraintTokenMint: ld,
    ConstraintTokenOwner: dd,
    ConstraintMintMintAuthority: fd,
    ConstraintMintFreezeAuthority: pd,
    ConstraintMintDecimals: _d,
    ConstraintSpace: hd,
    ConstraintAccountIsNone: md,
    ConstraintTokenTokenProgram: gd,
    ConstraintMintTokenProgram: Ad,
    ConstraintAssociatedTokenTokenProgram: Od,
    ConstraintMintGroupPointerExtension: Rd,
    ConstraintMintGroupPointerExtensionAuthority: yd,
    ConstraintMintGroupPointerExtensionGroupAddress: Td,
    ConstraintMintGroupMemberPointerExtension: Ed,
    ConstraintMintGroupMemberPointerExtensionAuthority: Id,
    ConstraintMintGroupMemberPointerExtensionMemberAddress: wd,
    ConstraintMintMetadataPointerExtension: bd,
    ConstraintMintMetadataPointerExtensionAuthority: Nd,
    ConstraintMintMetadataPointerExtensionMetadataAddress: Cd,
    ConstraintMintCloseAuthorityExtension: Sd,
    ConstraintMintCloseAuthorityExtensionAuthority: vd,
    ConstraintMintPermanentDelegateExtension: Pd,
    ConstraintMintPermanentDelegateExtensionDelegate: Md,
    ConstraintMintTransferHookExtension: kd,
    ConstraintMintTransferHookExtensionAuthority: Dd,
    ConstraintMintTransferHookExtensionProgramId: xd,
    RequireViolated: Bd,
    RequireEqViolated: jl,
    RequireKeysEqViolated: Ld,
    RequireNeqViolated: Ud,
    RequireKeysNeqViolated: $d,
    RequireGtViolated: jd,
    RequireGteViolated: Hd,
    AccountDiscriminatorAlreadySet: Gd,
    AccountDiscriminatorNotFound: Fd,
    AccountDiscriminatorMismatch: Kd,
    AccountDidNotDeserialize: Vd,
    AccountDidNotSerialize: Wd,
    AccountNotEnoughKeys: qd,
    AccountNotMutable: zd,
    AccountOwnedByWrongProgram: Yd,
    InvalidProgramId: Xd,
    InvalidProgramExecutable: Jd,
    AccountNotSigner: Qd,
    AccountNotSystemOwned: Zd,
    AccountNotInitialized: ef,
    AccountNotProgramData: tf,
    AccountNotAssociatedTokenAccount: nf,
    AccountSysvarMismatch: rf,
    AccountReallocExceedsLimit: of,
    AccountDuplicateReallocs: sf,
    DeclaredProgramIdMismatch: af,
    TryingToInitPayerAsProgramAccount: uf,
    InvalidNumericConversion: cf,
    Deprecated: Hl,
  },
  df = new Map([
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
let An = class be {
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
          let [i, u] = e.type.array;
          return (u = be.resolveArrayLen(u, r)), me.array(be.fieldLayout({ type: i }, n, r), u, o);
        }
        if ('defined' in e.type) {
          if (!n) throw new Mt('User defined types not provided');
          const i = e.type.defined.name,
            u = n.find((d) => d.name === i);
          if (!u) throw new Mt('Type not found: '.concat(e.name));
          return be.typeDefLayout({
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
          return be.fieldLayout(at(Be({}, e), { type: i.type }), n);
        }
        throw new Mt('Not yet implemented: '.concat(JSON.stringify(e.type)));
      }
    }
  }
  static typeDefLayout({ typeDef: e, types: n, name: r, genericArgs: o }) {
    switch (e.type.kind) {
      case 'struct': {
        const i = Dn(
          e.type.fields,
          () => [],
          (u) =>
            u.map((d) => {
              const p = o && be.resolveGenericArgs({ type: d.type, typeDef: e, genericArgs: o });
              return be.fieldLayout(d, n, p);
            }),
          (u) =>
            u.map((d, p) => {
              const a = o && be.resolveGenericArgs({ type: d, typeDef: e, genericArgs: o });
              return be.fieldLayout({ name: p.toString(), type: d }, n, a);
            })
        );
        return me.struct(i, r);
      }
      case 'enum': {
        const i = e.type.variants.map((u) => {
          const d = Dn(
            u.fields,
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
          return me.struct(d, u.name);
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
          let [i, u] = e.array;
          return (u = be.resolveArrayLen(u, r)), be.typeSize(i, n, r) * u;
        }
        if ('defined' in e) {
          const i =
            (o = n.types) === null || o === void 0
              ? void 0
              : o.find((d) => d.name === e.defined.name);
          if (!i) throw new Mt('Type not found: '.concat(JSON.stringify(e)));
          const u = (d) => {
            const p = r != null ? r : e.defined.generics,
              a = p && be.resolveGenericArgs({ type: d, typeDef: i, genericArgs: p });
            return be.typeSize(d, n, a);
          };
          switch (i.type.kind) {
            case 'struct':
              return Dn(
                i.type.fields,
                () => [0],
                (d) => d.map((p) => u(p.type)),
                (d) => d.map((p) => u(p))
              ).reduce((d, p) => d + p, 0);
            case 'enum': {
              const d = i.type.variants.map((p) =>
                Dn(
                  p.fields,
                  () => [0],
                  (a) => a.map((_) => u(_.type)),
                  (a) => a.map((_) => u(_))
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
            throw new Mt('Invalid generic: '.concat(e.generic));
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
    if (typeof e != 'number') throw new Mt('Generic array length did not resolve');
    return e;
  }
  static resolveGenericArgs({ type: e, typeDef: n, genericArgs: r, isDefined: o }) {
    if (typeof e != 'object') return null;
    for (const i in n.generics) {
      const u = n.generics[i];
      if ('generic' in e && u.name === e.generic) return [r[i]];
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
        if (a && u.name === p.generic) {
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
class ff {
  constructor(e) {
    this.idl = e;
    const n = e.instructions.map((o) => {
      const i = o.name,
        u = o.args.map((p) => An.fieldLayout(p, e.types)),
        d = me.struct(u, i);
      return [i, { discriminator: o.discriminator, layout: d }];
    });
    this.ixLayouts = new Map(n);
    const r = n.map(([o, { discriminator: i, layout: u }]) => [
      xn.encode(i),
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
    typeof e == 'string' && (e = n === 'hex' ? Pe.Buffer.from(e, 'hex') : xn.decode(e));
    const r = e.slice(0, mn),
      o = e.slice(mn),
      i = this.sighashLayouts.get(xn.encode(r));
    return i ? { name: i.name, data: i.layout.decode(o) } : null;
  }
  format(e, n) {
    return et.format(e, n, this.idl);
  }
}
class et {
  static format(e, n, r) {
    const o = r.instructions.find((p) => e.name === p.name);
    if (!o) return console.error('Invalid instruction given'), null;
    const i = o.args.map((p) => ({
        name: p.name,
        type: et.formatIdlType(p.type),
        data: et.formatIdlData(p, e.data[p.name], r.types),
      })),
      u = et.flattenIdlAccounts(o.accounts),
      d = n.map((p, a) => (a < u.length ? Be({ name: u[a].name }, p) : Be({ name: void 0 }, p)));
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
                return et.formatIdlType(o.type);
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
      return et.formatIdlDataDefined(i, n, r);
    }
    return 'unknown';
  }
  static formatIdlDataDefined(e, n, r) {
    switch (e.type.kind) {
      case 'struct':
        return (
          '{ ' +
          Dn(
            e.type.fields,
            () => '',
            (o) =>
              Object.entries(n)
                .map(([i, u]) => {
                  const d = o.find((p) => p.name === i);
                  if (!d) throw new Error('Field not found: '.concat(i));
                  return i + ': ' + et.formatIdlData(d, u, r);
                })
                .join(', '),
            (o) =>
              Object.entries(n)
                .map(([i, u]) => i + ': ' + et.formatIdlData({ name: '', type: o[i] }, u, r))
                .join(', ')
          ) +
          ' }'
        );
      case 'enum': {
        const o = Object.keys(n)[0],
          i = e.type.variants.find((d) => d.name === o);
        if (!i) throw new Error('Unable to find variant: '.concat(o));
        const u = n[o];
        return Dn(
          i.fields,
          () => o,
          (d) => {
            const p = Object.keys(u)
              .map((a) => {
                const _ = u[a],
                  A = d.find((h) => h.name === a);
                if (!A) throw new Error('Field not found: '.concat(a));
                return a + ': ' + et.formatIdlData(A, _, r);
              })
              .join(', ');
            return ''.concat(o, ' { ').concat(p, ' }');
          },
          (d) => {
            const p = Object.entries(u)
              .map(([a, _]) => a + ': ' + et.formatIdlData({ name: '', type: d[a] }, _, r))
              .join(', ');
            return ''.concat(o, ' { ').concat(p, ' }');
          }
        );
      }
      case 'type':
        return et.formatIdlType(e.type.alias);
    }
  }
  static flattenIdlAccounts(e, n) {
    return e
      .map((r) => {
        const o = xm(r.name);
        if (r.hasOwnProperty('accounts')) {
          const i = n ? ''.concat(n, ' > ').concat(o) : o;
          return et.flattenIdlAccounts(r.accounts, i);
        } else return at(Be({}, r), { name: n ? ''.concat(n, ' > ').concat(o) : o });
      })
      .flat();
  }
}
function xm(t) {
  const e = t.replace(/([A-Z])/g, ' $1');
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const mn = 8;
let pf = class {
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
        return [o.name, An.typeDefLayout({ typeDef: i, types: n })];
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
      if (this.accountDiscriminator(e).compare(n.slice(0, mn)))
        throw new Error('Invalid account discriminator');
      return this.decodeUnchecked(e, n);
    }
    decodeAny(e) {
      const n = e.slice(0, mn),
        r = Array.from(this.accountLayouts.keys()).find((o) =>
          this.accountDiscriminator(o).equals(n)
        );
      if (!r) throw new Error('Account not found');
      return this.decodeUnchecked(r, e);
    }
    decodeUnchecked(e, n) {
      const r = n.subarray(mn),
        o = this.accountLayouts.get(e);
      if (!o) throw new Error('Unknown account: '.concat(e));
      return o.decode(r);
    }
    memcmp(e, n) {
      const r = this.accountDiscriminator(e);
      return { offset: 0, bytes: xn.encode(n ? Pe.Buffer.concat([r, n]) : r) };
    }
    size(e) {
      return mn + An.typeSize({ defined: { name: e } }, this.idl);
    }
    accountDiscriminator(e) {
      var n;
      const r =
        (n = this.idl.accounts) === null || n === void 0 ? void 0 : n.find((o) => o.name === e);
      if (!r) throw new Error('Account not found: '.concat(e));
      return Pe.Buffer.from(r.discriminator);
    }
  },
  _f = class {
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
        return [i.name, An.typeDefLayout({ typeDef: u, types: r })];
      });
      (this.layouts = new Map(o)),
        (this.discriminators = new Map(
          ((n = e.events) !== null && n !== void 0 ? n : []).map((i) => [
            Xo(Pe.Buffer.from(i.discriminator)),
            i.name,
          ])
        ));
    }
    decode(e) {
      let n;
      try {
        n = pu(e);
      } catch (d) {
        return null;
      }
      const r = Xo(n.slice(0, 8)),
        o = this.discriminators.get(r);
      if (!o) return null;
      const i = this.layouts.get(o);
      if (!i) throw new Error('Unknown event: '.concat(o));
      return { data: i.decode(n.slice(8)), name: o };
    }
  },
  Bm = class {
    constructor(e) {
      const n = e.types;
      if (!n) {
        this.typeLayouts = new Map();
        return;
      }
      const r = n
        .filter((o) => !o.generics)
        .map((o) => [o.name, An.typeDefLayout({ typeDef: o, types: n })]);
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
class yu {
  constructor(e) {
    (this.instruction = new ff(e)),
      (this.accounts = new pf(e)),
      (this.events = new _f(e)),
      (this.types = new Bm(e));
  }
}
class Xe {
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
var Pi = Xe;
function Lm(t, e) {
  return e.property ? t + '[' + e.property + ']' : t;
}
class gn extends Xe {
  isCount() {
    throw new Error('ExternalLayout is abstract');
  }
}
class hf extends gn {
  constructor(e, n, r) {
    if (!(e instanceof Xe)) throw new TypeError('layout must be a Layout');
    if (n === void 0) n = 0;
    else if (!Number.isInteger(n)) throw new TypeError('offset must be integer or undefined');
    super(e.span, r || e.property), (this.layout = e), (this.offset = n);
  }
  isCount() {
    return this.layout instanceof Mi || this.layout instanceof mf;
  }
  decode(e, n) {
    return n === void 0 && (n = 0), this.layout.decode(e, n + this.offset);
  }
  encode(e, n, r) {
    return r === void 0 && (r = 0), this.layout.encode(e, n, r + this.offset);
  }
}
class Mi extends Xe {
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
class mf extends Xe {
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
const Zo = Math.pow(2, 32);
function gf(t) {
  const e = Math.floor(t / Zo),
    n = t - e * Zo;
  return { hi32: e, lo32: n };
}
function Af(t, e) {
  return t * Zo + e;
}
class Um extends Xe {
  constructor(e) {
    super(8, e);
  }
  decode(e, n) {
    n === void 0 && (n = 0);
    const r = e.readUInt32LE(n),
      o = e.readUInt32LE(n + 4);
    return Af(o, r);
  }
  encode(e, n, r) {
    r === void 0 && (r = 0);
    const o = gf(e);
    return n.writeUInt32LE(o.lo32, r), n.writeUInt32LE(o.hi32, r + 4), 8;
  }
}
class $m extends Xe {
  constructor(e) {
    super(8, e);
  }
  decode(e, n) {
    n === void 0 && (n = 0);
    const r = e.readUInt32LE(n),
      o = e.readInt32LE(n + 4);
    return Af(o, r);
  }
  encode(e, n, r) {
    r === void 0 && (r = 0);
    const o = gf(e);
    return n.writeUInt32LE(o.lo32, r), n.writeInt32LE(o.hi32, r + 4), 8;
  }
}
class jm extends Xe {
  constructor(e, n, r) {
    if (!(Array.isArray(e) && e.reduce((i, u) => i && u instanceof Xe, !0)))
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
      let p = d.span;
      if (((u = 0 < p ? p : 0), d.property !== void 0)) {
        const a = e[d.property];
        a !== void 0 && ((u = d.encode(a, n, r)), 0 > p && (p = d.getSpan(n, r)));
      }
      (i = r), (r += p);
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
class Of {
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
class vc extends Of {
  constructor(e, n) {
    if (!(e instanceof gn && e.isCount()))
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
class Rf extends Xe {
  constructor(e, n, r) {
    const o = e instanceof Mi || e instanceof mf;
    if (o) e = new vc(new hf(e));
    else if (e instanceof gn && e.isCount()) e = new vc(e);
    else if (!(e instanceof Of))
      throw new TypeError('discr must be a UnionDiscriminator or an unsigned integer layout');
    if ((n === void 0 && (n = null), !(n === null || n instanceof Xe)))
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
    const o = new Hm(this, e, n, r);
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
class Hm extends Xe {
  constructor(e, n, r, o) {
    if (!(e instanceof Rf)) throw new TypeError('union must be a Union');
    if (!Number.isInteger(n) || 0 > n)
      throw new TypeError('variant must be a (non-negative) integer');
    if ((typeof r == 'string' && o === void 0 && ((o = r), (r = null)), r)) {
      if (!(r instanceof Xe)) throw new TypeError('layout must be a Layout');
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
class Gm extends Xe {
  constructor(e, n) {
    if (!((e instanceof gn && e.isCount()) || (Number.isInteger(e) && 0 <= e)))
      throw new TypeError('length must be positive integer or an unsigned integer ExternalLayout');
    let r = -1;
    e instanceof gn || (r = e), super(r, n), (this.length = e);
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
    if ((this.length instanceof gn && (o = e.length), !(ie.Buffer.isBuffer(e) && o === e.length)))
      throw new TypeError(Lm('Blob.encode', this) + ' requires (length ' + o + ') Buffer as src');
    if (r + o > n.length) throw new RangeError('encoding overruns Buffer');
    return (
      n.write(e.toString('hex'), r, o, 'hex'),
      this.length instanceof gn && this.length.encode(o, n, r),
      o
    );
  }
}
var Fm = (t, e, n) => new hf(t, e, n),
  Km = (t) => new Mi(1, t),
  Dt = (t) => new Mi(4, t),
  Vm = (t) => new Um(t),
  Lt = (t) => new $m(t),
  $e = (t, e, n) => new jm(t, e, n),
  yf = (t, e, n) => new Rf(t, e, n),
  Hr = (t, e) => new Gm(t, e);
let Wm = class {
    constructor(e) {}
    encode(e, n) {
      switch (e) {
        case 'createAccount':
          return zm(n);
        case 'assign':
          return Ym(n);
        case 'transfer':
          return Xm(n);
        case 'createAccountWithSeed':
          return Jm(n);
        case 'advanceNonceAccount':
          return Zm(n);
        case 'withdrawNonceAccount':
          return eg(n);
        case 'initializeNonceAccount':
          return Qm(n);
        case 'authorizeNonceAccount':
          return tg(n);
        case 'allocate':
          return ng(n);
        case 'allocateWithSeed':
          return rg(n);
        case 'assignWithSeed':
          return ig(n);
        case 'transferWithSeed':
          return og(n);
        default:
          throw new Error('Invalid instruction: '.concat(e));
      }
    }
    encodeState(e, n) {
      throw new Error('System does not have state');
    }
  },
  qm = class extends Pi {
    constructor(e) {
      super(-1, e),
        (this.property = e),
        (this.layout = $e(
          [Dt('length'), Dt('lengthPadding'), Hr(Fm(Dt(), -8), 'chars')],
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
      return Dt().span + Dt().span + new zt(new Uint8Array(e).slice(n, n + 4), 10, 'le').toNumber();
    }
  };
function ki(t) {
  return new qm(t);
}
function ft(t) {
  return Hr(32, t);
}
function zm({ lamports: t, space: e, owner: n }) {
  return _t({ createAccount: { lamports: t, space: e, owner: n.toBuffer() } });
}
function Ym({ owner: t }) {
  return _t({ assign: { owner: t.toBuffer() } });
}
function Xm({ lamports: t }) {
  return _t({ transfer: { lamports: t } });
}
function Jm({ base: t, seed: e, lamports: n, space: r, owner: o }) {
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
    je.getVariant(3).span + e.length
  );
}
function Qm({ authorized: t }) {
  return _t({ initializeNonceAccount: { authorized: t.toBuffer() } });
}
function Zm({ authorized: t }) {
  return _t({ advanceNonceAccount: { authorized: t.toBuffer() } });
}
function eg({ lamports: t }) {
  return _t({ withdrawNonceAccount: { lamports: t } });
}
function tg({ authorized: t }) {
  return _t({ authorizeNonceAccount: { authorized: t.toBuffer() } });
}
function ng({ space: t }) {
  return _t({ allocate: { space: t } });
}
function rg({ base: t, seed: e, space: n, owner: r }) {
  return _t(
    { allocateWithSeed: { base: t.toBuffer(), seed: e, space: n, owner: r.toBuffer() } },
    je.getVariant(9).span + e.length
  );
}
function ig({ base: t, seed: e, owner: n }) {
  return _t(
    { assignWithSeed: { base: t.toBuffer(), seed: e, owner: n.toBuffer() } },
    je.getVariant(10).span + e.length
  );
}
function og({ lamports: t, seed: e, owner: n }) {
  return _t(
    { transferWithSeed: { lamports: t, seed: e, owner: n.toBuffer() } },
    je.getVariant(11).span + e.length
  );
}
const je = yf(Dt('instruction'));
je.addVariant(0, $e([Lt('lamports'), Lt('space'), ft('owner')]), 'createAccount');
je.addVariant(1, $e([ft('owner')]), 'assign');
je.addVariant(2, $e([Lt('lamports')]), 'transfer');
je.addVariant(
  3,
  $e([ft('base'), ki('seed'), Lt('lamports'), Lt('space'), ft('owner')]),
  'createAccountWithSeed'
);
je.addVariant(4, $e([ft('authorized')]), 'advanceNonceAccount');
je.addVariant(5, $e([Lt('lamports')]), 'withdrawNonceAccount');
je.addVariant(6, $e([ft('authorized')]), 'initializeNonceAccount');
je.addVariant(7, $e([ft('authorized')]), 'authorizeNonceAccount');
je.addVariant(8, $e([Lt('space')]), 'allocate');
je.addVariant(9, $e([ft('base'), ki('seed'), Lt('space'), ft('owner')]), 'allocateWithSeed');
je.addVariant(10, $e([ft('base'), ki('seed'), ft('owner')]), 'assignWithSeed');
je.addVariant(11, $e([Lt('lamports'), ki('seed'), ft('owner')]), 'transferWithSeed');
function _t(t, e) {
  const n = ie.Buffer.alloc(e != null ? e : sg),
    r = je.encode(t, n);
  return e === void 0 ? n.slice(0, r) : n;
}
const sg = Math.max(...Object.values(je.registry).map((t) => t.span));
let ag = class {
  constructor(e) {
    this.idl = e;
  }
  async encode(e, n) {
    switch (e) {
      case 'nonce': {
        const r = ie.Buffer.alloc(mc),
          o = Tf.encode(n, r);
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
        return ug(n);
      default:
        throw new Error('Invalid account name: '.concat(e));
    }
  }
  memcmp(e, n) {
    switch (e) {
      case 'nonce':
        return { dataSize: mc };
      default:
        throw new Error('Invalid account name: '.concat(e));
    }
  }
  size(e) {
    return An.typeSize({ defined: { name: e } }, this.idl);
  }
};
function ug(t) {
  return Tf.decode(t);
}
let cg = class extends Pi {
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
function Pc(t) {
  return new cg(
    Hr(32),
    (e) => new Ve(e),
    (e) => e.toBuffer(),
    t
  );
}
const Tf = $e([
  Dt('version'),
  Dt('state'),
  Pc('authorizedPubkey'),
  Pc('nonce'),
  $e([Vm('lamportsPerSignature')], 'feeCalculator'),
]);
let lg = class {
    constructor(e) {}
    decode(e) {
      throw new Error('System program does not have events');
    }
  },
  dg = class {
    constructor(e) {}
    encode(e, n) {
      throw new Error('System does not have user-defined types');
    }
    decode(e, n) {
      throw new Error('System does not have user-defined types');
    }
  },
  Ef = class {
    constructor(e) {
      (this.instruction = new Wm(e)),
        (this.accounts = new ag(e)),
        (this.events = new lg(e)),
        (this.types = new dg(e));
    }
  };
function fg(t) {
  return new TextDecoder().decode(hl(t));
}
var pg = Object.freeze({ __proto__: null, hash: fg });
function _g(t, e, n) {
  const r = Pe.Buffer.concat([t.toBuffer(), Pe.Buffer.from(e), n.toBuffer()]);
  return new Ve(hl(r));
}
var hg = Object.freeze({ __proto__: null, createWithSeedSync: _g });
const If = new Ve('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'),
  wf = new Ve('ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL');
function mg({ mint: t, owner: e }) {
  return Ve.findProgramAddressSync([e.toBuffer(), If.toBuffer(), t.toBuffer()], wf)[0];
}
var gg = Object.freeze({
    __proto__: null,
    TOKEN_PROGRAM_ID: If,
    ASSOCIATED_PROGRAM_ID: wf,
    associatedAddress: mg,
  }),
  es = { exports: {} };
(function (t, e) {
  var n = typeof self < 'u' ? self : vm,
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
      function b(S) {
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
          q = b(k);
        return k.readAsArrayBuffer(S), q;
      }
      function P(S) {
        var k = new FileReader(),
          q = b(k);
        return k.readAsText(S), q;
      }
      function I(S) {
        for (var k = new Uint8Array(S), q = new Array(k.length), ee = 0; ee < k.length; ee++)
          q[ee] = String.fromCharCode(k[ee]);
        return q.join('');
      }
      function x(S) {
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
                          ? ((this._bodyArrayBuffer = x(S.buffer)),
                            (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                          : d.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(S) || _(S))
                            ? (this._bodyArrayBuffer = x(S))
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
                  j = ee.shift().replace(/\+/g, ' '),
                  V = ee.join('=').replace(/\+/g, ' ');
                k.append(decodeURIComponent(j), decodeURIComponent(V));
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
            var j = ee.split(':'),
              V = j.shift().trim();
            if (V) {
              var te = j.join(':').trim();
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
        (u.DOMException = i.DOMException);
      try {
        new u.DOMException();
      } catch (S) {
        (u.DOMException = function (k, q) {
          (this.message = k), (this.name = q);
          var ee = Error(k);
          this.stack = ee.stack;
        }),
          (u.DOMException.prototype = Object.create(Error.prototype)),
          (u.DOMException.prototype.constructor = u.DOMException);
      }
      function z(S, k) {
        return new Promise(function (q, ee) {
          var j = new y(S, k);
          if (j.signal && j.signal.aborted) return ee(new u.DOMException('Aborted', 'AbortError'));
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
              ee(new u.DOMException('Aborted', 'AbortError'));
            }),
            V.open(j.method, j.url, !0),
            j.credentials === 'include'
              ? (V.withCredentials = !0)
              : j.credentials === 'omit' && (V.withCredentials = !1),
            'responseType' in V && d.blob && (V.responseType = 'blob'),
            j.headers.forEach(function (se, ce) {
              V.setRequestHeader(ce, se);
            }),
            j.signal &&
              (j.signal.addEventListener('abort', te),
              (V.onreadystatechange = function () {
                V.readyState === 4 && j.signal.removeEventListener('abort', te);
              })),
            V.send(typeof j._bodyInit > 'u' ? null : j._bodyInit);
        });
      }
      return (
        (z.polyfill = !0),
        i.fetch || ((i.fetch = z), (i.Headers = g), (i.Request = y), (i.Response = G)),
        (u.Headers = g),
        (u.Request = y),
        (u.Response = G),
        (u.fetch = z),
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
})(es, es.exports);
var Ag = Pm(es.exports);
async function Og(t, e, n = 5) {
  const r = 'https://api.apr.dev/api/v0/program/'.concat(e.toString(), '/latest?limit=').concat(n),
    [o, i] = await Promise.all([bf(t, e), Ag(r)]),
    u = (await i.json()).filter(
      (p) => !p.aborted && p.state === 'Built' && p.verified === 'Verified'
    );
  if (u.length === 0) return null;
  const d = u[0];
  return o.slot.toNumber() !== d.verified_slot ? null : d;
}
async function bf(t, e) {
  const n = await t.getAccountInfo(e);
  if (n === null) throw new Error('program account not found');
  const { program: r } = ts(n.data),
    o = await t.getAccountInfo(r.programdataAddress);
  if (o === null) throw new Error('program data account not found');
  const { programData: i } = ts(o.data);
  return i;
}
const Rg = me.rustEnum(
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
function ts(t) {
  return Rg.decode(t);
}
var yg = Object.freeze({
    __proto__: null,
    verifiedBuild: Og,
    fetchData: bf,
    decodeUpgradeableLoaderState: ts,
  }),
  Tg = Object.freeze({
    __proto__: null,
    sha256: pg,
    rpc: Nm,
    publicKey: hg,
    bytes: sm,
    token: gg,
    features: Dm,
    registry: yg,
  });
function Gr(t, e) {
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
let Eg = class ns {
  static build(e, n, r) {
    if (e.name === '_inner') throw new Mt('the _inner name is reserved');
    const o = (...i) => {
      const [u, d] = Gr(e, [...i]);
      _u(e.accounts, d.accounts), Ig(e, ...i);
      const p = o.accounts(d.accounts);
      return (
        d.remainingAccounts !== void 0 && p.push(...d.remainingAccounts),
        Ou('debug-logs') && console.log('Outgoing account metas:', p),
        new _l({ keys: p, programId: r, data: n(e.name, xl(e, ...u)) })
      );
    };
    return (o.accounts = (i) => ns.accountsArray(i, e.accounts, r, e.name)), o;
  }
  static accountsArray(e, n, r, o) {
    return e
      ? n
          .map((i) => {
            if (kn(i)) {
              const _ = e[i.name];
              return ns.accountsArray(_, i.accounts, r, o).flat();
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
              p = !!(i.writable && !d),
              a = !!(i.signer && !d);
            return { pubkey: u, isWritable: p, isSigner: a };
          })
          .flat()
      : [];
  }
};
function Ig(t, ...e) {}
let wg = class {
    static build(e, n) {
      return (...o) => {
        var i, u, d;
        const [, p] = Gr(e, [...o]),
          a = new pl();
        if (p.preInstructions && p.instructions)
          throw new Error('instructions is deprecated, use preInstructions');
        return (
          (i = p.preInstructions) === null || i === void 0 || i.forEach((_) => a.add(_)),
          (u = p.instructions) === null || u === void 0 || u.forEach((_) => a.add(_)),
          a.add(n(...o)),
          (d = p.postInstructions) === null || d === void 0 || d.forEach((_) => a.add(_)),
          a
        );
      };
    }
  },
  bg = class {
    static build(e, n, r, o) {
      return async (...u) => {
        var d;
        const p = n(...u),
          [, a] = Gr(e, [...u]);
        if (o.sendAndConfirm === void 0)
          throw new Error("This function requires 'Provider.sendAndConfirm' to be implemented.");
        try {
          return await o.sendAndConfirm(
            p,
            (d = a.signers) !== null && d !== void 0 ? d : [],
            a.options
          );
        } catch (_) {
          throw Ru(_, r);
        }
      };
    }
  },
  Ng = class {
    static build(e, n, r, o) {
      var i;
      return ((i = e.accounts) !== null && i !== void 0 ? i : []).reduce(
        (u, d) => ((u[d.name] = new Nf(e, d, r, o, n)), u),
        {}
      );
    }
  },
  Nf = class {
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
        (this._provider = o != null ? o : Sr()),
        (this._coder = i != null ? i : new yu(e)),
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
        await Au(
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
        ).map(({ pubkey: i, account: u }) => ({
          publicKey: i,
          account: this._coder.accounts.decode(this._idlAccount.name, u.data),
        }))
      );
    }
    subscribe(e, n) {
      const r = nr.get(e.toString());
      if (r) return r.ee;
      const o = new d_();
      e = nt(e);
      const i = this._provider.connection.onAccountChange(
        e,
        (u) => {
          const d = this._coder.accounts.decode(this._idlAccount.name, u.data);
          o.emit('change', d);
        },
        n
      );
      return nr.set(e.toString(), { ee: o, listener: i }), o;
    }
    async unsubscribe(e) {
      let n = nr.get(e.toString());
      if (!n) {
        console.warn('Address is not subscribed');
        return;
      }
      nr &&
        (await this._provider.connection
          .removeAccountChangeListener(n.listener)
          .then(() => {
            nr.delete(e.toString());
          })
          .catch(console.error));
    }
    async createInstruction(e, n) {
      const r = this.size;
      if (this._provider.publicKey === void 0)
        throw new Error(
          "This function requires the Provider interface implementor to have a 'publicKey' field."
        );
      return f_.createAccount({
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
const nr = new Map(),
  rs = 'Program log: ',
  Cf = 'Program data: ',
  Cg = rs.length,
  Sg = Cf.length;
let Sf = class {
    constructor(e, n, r) {
      (this._programId = e),
        (this._provider = n),
        (this._eventParser = new Tu(e, r)),
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
                  const p = this._eventListeners.get(d.name);
                  p &&
                    p.forEach((a) => {
                      const _ = this._eventCallbacks.get(a);
                      if (_) {
                        const [, A] = _;
                        A(d.data, u.slot, i.signature);
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
  Tu = class {
    constructor(e, n) {
      (this.coder = n), (this.programId = e);
    }
    *parseLogs(e, n = !1) {
      const r = new Pg(e),
        o = new vg();
      let i = r.next();
      for (; i !== null; ) {
        let [u, d, p] = this.handleLog(o, i, n);
        u && (yield u), d && o.push(d), p && o.pop(), (i = r.next());
      }
    }
    handleLog(e, n, r) {
      return e.stack.length > 0 && e.program() === this.programId.toString()
        ? this.handleProgramLog(n, r)
        : [null, ...this.handleSystemLog(n)];
    }
    handleProgramLog(e, n) {
      if (e.startsWith(rs) || e.startsWith(Cf)) {
        const r = e.startsWith(rs) ? e.slice(Cg) : e.slice(Sg),
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
  vg = class {
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
  Pg = class {
    constructor(e) {
      this.logs = e;
    }
    next() {
      if (this.logs.length === 0) return null;
      let e = this.logs[0];
      return (this.logs = this.logs.slice(1)), e;
    }
  },
  Mg = class {
    static build(e, n, r, o, i, u, d) {
      return async (...a) => {
        var _;
        const A = n(...a),
          [, h] = Gr(e, [...a]);
        let m;
        if (o.simulate === void 0)
          throw new Error("This function requires 'Provider.simulate' to be implemented.");
        try {
          m = await o.simulate(
            A,
            h.signers,
            (_ = h.options) === null || _ === void 0 ? void 0 : _.commitment
          );
        } catch (b) {
          throw Ru(b, r);
        }
        if (m === void 0) throw new Error('Unable to simulate transaction');
        const g = m.logs;
        if (!g) throw new Error('Simulated logs not found');
        const R = [];
        if (d.events) {
          let b = new Tu(u, i);
          for (const N of b.parseLogs(g)) R.push(N);
        }
        return { events: R, raw: g };
      };
    }
  };
function wo(t) {
  return new vf(
    Hr(8),
    (e) => Dg.fromBuffer(e),
    (e) => e.toBuffer(),
    t
  );
}
function ci(t) {
  return new vf(
    Hr(32),
    (e) => new Ve(e),
    (e) => e.toBuffer(),
    t
  );
}
function bo(t, e) {
  return new kg(t, e);
}
let vf = class extends Pi {
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
  kg = class extends Pi {
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
  Dg = class Pf extends zt {
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
      return new Pf(
        [...e]
          .reverse()
          .map((n) => '00'.concat(n.toString(16)).slice(-2))
          .join(''),
        16
      );
    }
  };
const xg = $e([
  ci('mint'),
  ci('owner'),
  wo('amount'),
  bo(ci(), 'delegate'),
  ((t) => {
    const e = yf(Km('discriminator'), null, t);
    return (
      e.addVariant(0, $e([]), 'uninitialized'),
      e.addVariant(1, $e([]), 'initialized'),
      e.addVariant(2, $e([]), 'frozen'),
      e
    );
  })('state'),
  bo(wo(), 'isNative'),
  wo('delegatedAmount'),
  bo(ci(), 'closeAuthority'),
]);
function Bg(t) {
  return xg.decode(t);
}
class Lg {
  constructor(e, n, r, o, i, u, d, p) {
    (this._args = e),
      (this._accounts = n),
      (this._provider = r),
      (this._programId = o),
      (this._idlIx = i),
      (this._idlTypes = d),
      (this._customResolver = p),
      (this._accountStore = new Ug(r, u, o));
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
        (kf(u)
          ? kn(o)
            ? (r[i] = this.resolveOptionalsHelper(u, o.accounts))
            : (r[i] = Df(u))
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
      kn(o) && this.resolveEventCpi(o.accounts, [...n, o.name]);
      const i = +r + 1;
      if (i === e.length) return;
      const u = e[r].name,
        d = e[i].name;
      if (u === 'eventAuthority' && d === 'program') {
        const p = [...n, u],
          a = [...n, d];
        this.get(p) ||
          this.set(
            p,
            Ve.findProgramAddressSync([ie.Buffer.from('__event_authority')], this._programId)[0]
          ),
          this.get(a) || this.set(a, this._programId);
        return;
      }
    }
  }
  resolveConst(e, n = []) {
    for (const r of e) {
      const o = r.name;
      if (kn(r)) this.resolveConst(r.accounts, [...n, o]);
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
      if (kn(o)) r += await this.resolvePdasAndRelations(o.accounts, [...n, i]);
      else {
        const u = o;
        if ((u.pda || u.relations) && !this.get([...n, i])) {
          r++;
          try {
            if (u.pda) {
              const d = await Promise.all(u.pda.seeds.map((_) => this.toBuffer(_, n)));
              if (d.some((_) => !_)) continue;
              const p = await this.parseProgramId(u, n),
                [a] = Ve.findProgramAddressSync(d, p);
              this.set([...n, i], a);
            }
          } catch (d) {}
          try {
            if (u.relations) {
              const d = this.get([...n, u.relations[0]]);
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
    return new Ve(o);
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
        return new zt(n).toArrayLike(ie.Buffer, 'le', 2);
      case 'u32':
      case 'i32':
        return new zt(n).toArrayLike(ie.Buffer, 'le', 4);
      case 'u64':
      case 'i64':
        return new zt(n).toArrayLike(ie.Buffer, 'le', 8);
      case 'u128':
      case 'i128':
        return new zt(n).toArrayLike(ie.Buffer, 'le', 16);
      case 'u256':
      case 'i256':
        return new zt(n).toArrayLike(ie.Buffer, 'le', 32);
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
      const [u, ...d] = n,
        a = i.type.fields.find((_) => _.name === u);
      if (!a) throw new Error('Field not found: '.concat(u));
      return this.getType(a.type, d);
    }
    return e;
  }
}
class Ug {
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
        const i = Bg(o.data);
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
      const r = await On.fetchIdl(e, this._provider);
      if (r) {
        const o = new On(r, this._provider);
        this._idls[n] = o.account;
      }
    }
    return this._idls[n];
  }
}
class Mf {
  static build(e, n, r, o, i, u, d, p, a, _, A) {
    return (...h) => new $g(h, o, i, u, d, p, e, n, r, a, _, A);
  }
}
function kf(t) {
  return typeof t == 'object' && t !== null && !('_bn' in t);
}
function Df(t, e) {
  const n = {};
  for (const r in t) {
    const o = t[r];
    if (o === null)
      throw new Error('Failed to resolve optionals due to IDL type mismatch with input accounts!');
    n[r] = kf(o) ? Df(o) : nt(o);
  }
  return n;
}
class $g {
  constructor(e, n, r, o, i, u, d, p, a, _, A, h) {
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
      (this._accountsResolver = new Lg(e, this._accounts, d, p, a, _, A, h));
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
let jg = class {
  static build(e, n, r, o) {
    const i = n.accounts.find((p) => p.writable),
      u = !!n.returns;
    return i || !u
      ? void 0
      : async (...p) => {
          let a = await r(...p);
          const _ = 'Program return: '.concat(e, ' ');
          let A = a.raw.find((R) => R.startsWith(_));
          if (!A) throw new Error('View expected return log');
          let h = pu(A.slice(_.length)),
            m = n.returns;
          if (!m) throw new Error('View expected return type');
          return An.fieldLayout({ type: m }, o.types).decode(h);
        };
  }
};
class Hg {
  static build(e, n, r, o, i) {
    const u = {},
      d = {},
      p = {},
      a = {},
      _ = {},
      A = {},
      h = Dl(e),
      m = e.accounts ? Ng.build(e, n, r, o) : {};
    return (
      e.instructions.forEach((g) => {
        const R = Eg.build(g, ($, T) => n.instruction.encode($, T), r),
          b = wg.build(g, R),
          N = bg.build(g, b, h, o),
          P = Mg.build(g, b, h, o, n, r, e),
          I = jg.build(r, g, P, e),
          x = Mf.build(o, r, g, R, b, N, P, I, m, e.types || [], i == null ? void 0 : i(g)),
          F = g.name;
        (d[F] = R), (p[F] = b), (u[F] = N), (a[F] = P), (_[F] = x), I && (A[F] = I);
      }),
      [u, d, p, m, a, _, A]
    );
  }
}
class On {
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
  constructor(e, n = Sr(), r, o) {
    const i = dm(e);
    (this._idl = i),
      (this._rawIdl = e),
      (this._provider = n),
      (this._programId = nt(e.address)),
      (this._coder = r != null ? r : new yu(i)),
      (this._events = new Sf(this._programId, n, this._coder));
    const [u, d, p, a, _, A, h] = Hg.build(i, this._coder, this._programId, n, o);
    (this.rpc = u),
      (this.instruction = d),
      (this.transaction = p),
      (this.account = a),
      (this.simulate = _),
      (this.methods = A),
      (this.views = h);
  }
  static async at(e, n) {
    const r = nt(e),
      o = await On.fetchIdl(r, n);
    if (!o) throw new Error('IDL not found for program: '.concat(e.toString()));
    return new On(o, n);
  }
  static async fetchIdl(e, n) {
    n = n != null ? n : Sr();
    const r = nt(e),
      o = await am(r),
      i = await n.connection.getAccountInfo(o);
    if (!i) return null;
    let u = lm(i.data.slice(8));
    const d = p_(u.data);
    return JSON.parse(kl(d));
  }
  addEventListener(e, n) {
    return this._events.addEventListener(e, n);
  }
  async removeEventListener(e) {
    return await this._events.removeEventListener(e);
  }
}
new Ve('11111111111111111111111111111111');
function Gg(t) {
  return new On(xf, t, Fg());
}
function Fg() {
  return new Ef(xf);
}
const xf = {
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
let Kg = class {
  static system(e) {
    return Gg(e);
  }
};
const Vg = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        AccountClient: Nf,
        AnchorError: Ln,
        AnchorProvider: Cr,
        BN: zt,
        BorshAccountsCoder: pf,
        BorshCoder: yu,
        BorshEventCoder: _f,
        BorshInstructionCoder: ff,
        DISCRIMINATOR_SIZE: mn,
        EventManager: Sf,
        EventParser: Tu,
        IdlError: Mt,
        LangErrorCode: oe,
        LangErrorMessage: df,
        MethodsBuilderFactory: Mf,
        Native: Kg,
        Program: On,
        ProgramError: vr,
        ProgramErrorStack: Wn,
        SystemCoder: Ef,
        getProvider: Sr,
        parseIdlErrors: Dl,
        setProvider: Sm,
        splitArgsAndCtx: Gr,
        toInstruction: xl,
        translateAddress: nt,
        translateError: Ru,
        utils: Tg,
        validateAccounts: _u,
        web3: h_,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Eu = Br(Vg);
var ht = {};
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
      'jupiterLite',
      'jupiterSelfHosted',
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
      jupiterLite: 11,
      jupiterSelfHosted: 12,
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
  };
  (t.ROUTER_PROGRAM_MAP = Object.fromEntries(t.SUPPORTED_ROUTER_TYPES.map((u) => [u, i[u]]))),
    (t.TRITON_VOTE_ACCOUNT = new e.PublicKey('9GJmEHGom9eWo4np4L5vC6b6ri1Df2xN8KFoWixvD1Bs'));
})(ht);
var Mc = {};
Object.defineProperty(Oe, '__esModule', { value: !0 });
Oe.getEnvOrDefault = Oe.TokenInfo = void 0;
Oe.removeComputeBudgetProgram = Yg;
Oe.parseKeypairFile = Xg;
Oe.divCeil = Jg;
Oe.amountToLamportsBN = Qg;
Oe.amountToLamportsDecimal = Zg;
Oe.lamportsToAmountBN = eA;
Oe.lamportsToAmountDecimal = Bf;
Oe.getMintDecimals = tA;
Oe.printMultisigTx = nA;
Oe.printSimulateTx = rA;
Oe.checkIfAccountExists = iA;
Oe.getAssociatedTokenAddress = Lf;
Oe.createAssociatedTokenAccountIdempotentInstruction = Uf;
Oe.createAtaIdempotent = oA;
Oe.getTokenAccountBalance = sA;
Oe.getSolBalanceInLamports = $f;
Oe.getSolBalance = aA;
Oe.endpointFromCluster = uA;
Oe.u16ToBytes = cA;
Oe.accountExist = lA;
Oe.executeTransaction = dA;
Oe.buildAndSendTxnWithLogs = fA;
Oe.sleep = os;
Oe.compareUint8Arrays = _A;
Oe.getMintsProgramOwner = hA;
Oe.withTimeout = gA;
const is = _e,
  Ei = Dr,
  Pr = Bt,
  Wg = fl,
  Iu = Eu,
  qg = ht;
class zg {
  constructor(e, n, r) {
    c(this, 'symbol');
    c(this, 'mint');
    c(this, 'mintDecimals');
    (this.symbol = e), (this.mint = n), (this.mintDecimals = r);
  }
}
Oe.TokenInfo = zg;
function Yg(t) {
  return t.filter((n) => !n.programId.equals(qg.COMPUTE_BUDGET_PROGRAM_ID));
}
function Xg(t) {
  return is.Keypair.fromSecretKey(ie.Buffer.from(JSON.parse(cr.readFileSync(t))));
}
function Jg(t, e) {
  return t.add(e).sub(new Iu.BN(1)).div(e);
}
function Qg(t, e) {
  let n = Math.pow(10, e);
  return new Iu.BN(t.mul(n).floor().toString());
}
function Zg(t, e) {
  let n = Math.pow(10, e);
  return t.mul(n);
}
function eA(t, e) {
  let n = new Iu.BN(Math.pow(10, e));
  return new Ei.Decimal(t.div(n).toString());
}
function Bf(t, e) {
  let n = Math.pow(10, e);
  return t.div(n);
}
async function tA(t, e, n) {
  return (await (0, Pr.getMint)(t, e, void 0, n)).decimals;
}
async function nA(t) {
  console.log((0, Wg.binary_to_base58)(t.serializeMessage()));
}
async function rA(t, e) {
  console.log(
    'Tx in B64',
    'https://explorer.solana.com/tx/inspector?message='.concat(
      encodeURIComponent(e.serializeMessage().toString('base64'))
    )
  );
  let n = await t.simulateTransaction(e);
  console.log('Simulate Response', n), console.log('');
}
async function iA(t, e) {
  return (await t.getAccountInfo(e)) != null;
}
function Lf(t, e, n) {
  return (0, Pr.getAssociatedTokenAddressSync)(e, t, !0, n, Pr.ASSOCIATED_TOKEN_PROGRAM_ID);
}
function Uf(t, e, n = t, r, o) {
  let i = o;
  i || (i = Lf(t, e, r));
  const u = (0, Pr.createAssociatedTokenAccountInstruction)(
    n,
    i,
    t,
    e,
    r,
    Pr.ASSOCIATED_TOKEN_PROGRAM_ID
  );
  return (u.data = ie.Buffer.from([1])), [i, u];
}
function oA(t, e, n, r) {
  const [o, i] = Uf(t, n, e, r);
  return { ata: o, createAtaIx: i };
}
async function sA(t, e) {
  const n = await t.getTokenAccountBalance(e);
  return new Ei.Decimal(n.value.amount).div(Ei.Decimal.pow(10, n.value.decimals));
}
async function $f(t, e) {
  var r;
  let n;
  for (; n === void 0; )
    n = (r = await t.connection.getAccountInfo(e)) == null ? void 0 : r.lamports;
  return n;
}
async function aA(t, e) {
  const n = new Ei.Decimal(await $f(t, e));
  return Bf(n, 9);
}
function uA(t) {
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
function cA(t) {
  const e = new ArrayBuffer(2);
  return new DataView(e).setUint16(0, t, !1), new Uint8Array(e);
}
async function lA(t, e) {
  const n = await t.getAccountInfo(e);
  return !(n === null || n.data.length === 0);
}
async function dA(t, e, n, r = []) {
  const o = new is.Transaction(),
    { blockhash: i } = await t.getLatestBlockhash();
  return (
    (o.recentBlockhash = i),
    (o.feePayer = n.publicKey),
    o.add(...e),
    await (0, is.sendAndConfirmTransaction)(t, o, [n, ...r], { commitment: 'confirmed' })
  );
}
async function fA(t, e, n, r) {
  const { blockhash: o } = await t.getLatestBlockhash();
  (e.recentBlockhash = o), (e.feePayer = n.publicKey);
  try {
    const i = await t.sendTransaction(e, [n, ...r]);
    console.log('Transaction Hash:', i), await os(5e3);
    const u = await t.getTransaction(i, { commitment: 'confirmed' });
    console.log('Transaction Logs:\n', u.meta.logMessages);
  } catch (i) {
    console.log(i), await os(5e3);
    const u = i.toString().split(' failed ')[0].split('Transaction ')[1],
      d = await t.getTransaction(u, { commitment: 'confirmed' });
    console.log('Txn', d.meta.logMessages);
  }
}
function os(t) {
  return new Promise((e) => setTimeout(e, t));
}
const pA = (t, e) => (t in Mc ? Mc[t] : e);
Oe.getEnvOrDefault = pA;
function _A(t, e) {
  if (t.length !== e.length) return !1;
  for (let n = 0; n < t.length; n++) if (t[n] !== e[n]) return !1;
  return !0;
}
async function hA(t, e) {
  const n = await t.getAccountInfo(e);
  if (!n) throw new Error('Mint not found');
  return n.owner;
}
function mA(t) {
  return new Promise((e, n) => {
    setTimeout(() => {
      n(new Error('Request timed out after '.concat(t, 'ms')));
    }, t);
  });
}
async function gA(t, e, n) {
  try {
    return await Promise.race([t, mA(e)]);
  } catch (r) {
    if (r instanceof Error && r.message.includes('timed out')) return n(), null;
    throw r;
  }
}
var jf = {},
  Hf = {},
  $n = {},
  rt = {},
  AA = {},
  No;
Object.defineProperty(rt, '__esModule', { value: !0 });
rt.isVersionedTransaction = rt.chunks = rt.isBrowser = void 0;
rt.isBrowser =
  AA.ANCHOR_BROWSER ||
  (typeof window < 'u' &&
    !(!((No = window.process) === null || No === void 0) && No.hasOwnProperty('type')));
function OA(t, e) {
  return Array.apply(0, new Array(Math.ceil(t.length / e))).map((n, r) =>
    t.slice(r * e, (r + 1) * e)
  );
}
rt.chunks = OA;
const RA = (t) => 'version' in t;
rt.isVersionedTransaction = RA;
Object.defineProperty($n, '__esModule', { value: !0 });
const yA = Pe,
  TA = _e,
  kc = rt;
class wu {
  constructor(e) {
    this.payer = e;
  }
  static local() {
    const e = ml;
    if (!e.env.ANCHOR_WALLET || e.env.ANCHOR_WALLET === '')
      throw new Error('expected environment variable `ANCHOR_WALLET` is not set.');
    const n = TA.Keypair.fromSecretKey(
      yA.Buffer.from(JSON.parse(cr.readFileSync(e.env.ANCHOR_WALLET, { encoding: 'utf-8' })))
    );
    return new wu(n);
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
$n.default = wu;
var vt = {},
  dt = {},
  jn = {};
Object.defineProperty(jn, '__esModule', { value: !0 });
jn.decode = jn.encode = void 0;
const Dc = Pe;
function EA(t) {
  return t.reduce((e, n) => e + n.toString(16).padStart(2, '0'), '0x');
}
jn.encode = EA;
function IA(t) {
  t.indexOf('0x') === 0 && (t = t.substr(2)), t.length % 2 === 1 && (t = '0' + t);
  let e = t.match(/.{2}/g);
  return e === null ? Dc.Buffer.from([]) : Dc.Buffer.from(e.map((n) => parseInt(n, 16)));
}
jn.decode = IA;
var Hn = {};
Object.defineProperty(Hn, '__esModule', { value: !0 });
Hn.encode = Hn.decode = void 0;
const Gf = rt;
function wA(t) {
  return (Gf.isBrowser ? new TextDecoder('utf-8') : new gl.TextDecoder('utf-8')).decode(t);
}
Hn.decode = wA;
function bA(t) {
  return (Gf.isBrowser ? new TextEncoder() : new gl.TextEncoder('utf-8')).encode(t);
}
Hn.encode = bA;
var Gn = {},
  NA =
    (w && w.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(Gn, '__esModule', { value: !0 });
Gn.decode = Gn.encode = void 0;
const Ff = NA(xr);
function CA(t) {
  return Ff.default.encode(t);
}
Gn.encode = CA;
function SA(t) {
  return Ff.default.decode(t);
}
Gn.decode = SA;
var Qt = {};
Object.defineProperty(Qt, '__esModule', { value: !0 });
Qt.decode = Qt.encode = void 0;
const vA = Pe;
function PA(t) {
  return t.toString('base64');
}
Qt.encode = PA;
function MA(t) {
  return vA.Buffer.from(t, 'base64');
}
Qt.decode = MA;
var kA =
    (w && w.__createBinding) ||
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
  DA =
    (w && w.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  Di =
    (w && w.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null)
        for (var n in t)
          n !== 'default' && Object.prototype.hasOwnProperty.call(t, n) && kA(e, t, n);
      return DA(e, t), e;
    };
Object.defineProperty(dt, '__esModule', { value: !0 });
dt.base64 = dt.bs58 = dt.utf8 = dt.hex = void 0;
dt.hex = Di(jn);
dt.utf8 = Di(Hn);
dt.bs58 = Di(Gn);
dt.base64 = Di(Qt);
var At = {},
  qe = {},
  Le = {},
  xA =
    (w && w.__createBinding) ||
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
  BA =
    (w && w.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  LA =
    (w && w.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null)
        for (var n in t)
          n !== 'default' && Object.prototype.hasOwnProperty.call(t, n) && xA(e, t, n);
      return BA(e, t), e;
    },
  UA =
    (w && w.__importDefault) ||
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
const $A = UA(m_),
  jA = Pe,
  xc = _e,
  Co = LA(me);
function HA(t) {
  return 'accounts' in t;
}
Le.isCompositeAccounts = HA;
async function GA(t) {
  const e = (await xc.PublicKey.findProgramAddress([], t))[0];
  return await xc.PublicKey.createWithSeed(e, Kf(), t);
}
Le.idlAddress = GA;
function Kf() {
  return 'anchor:idl';
}
Le.seed = Kf;
const Vf = Co.struct([Co.publicKey('authority'), Co.vecU8('data')]);
function FA(t) {
  return Vf.decode(t);
}
Le.decodeIdlAccount = FA;
function KA(t) {
  const e = jA.Buffer.alloc(1e3),
    n = Vf.encode(t, e);
  return e.slice(0, n);
}
Le.encodeIdlAccount = KA;
function VA(t) {
  const e = ['name', 'path', 'account', 'relations', 'generic'],
    n = (i) => i.split('.').map($A.default).join('.'),
    r = (i) => {
      for (const u in i) {
        const d = i[u];
        e.includes(u) ? (i[u] = Array.isArray(d) ? d.map(n) : n(d)) : typeof d == 'object' && r(d);
      }
    },
    o = structuredClone(t);
  return r(o), o;
}
Le.convertIdlToCamelCase = VA;
function WA(t, e, n, r) {
  return t != null && t.length ? (t[0].name ? n(t) : r(t)) : e();
}
Le.handleDefinedFields = WA;
Object.defineProperty(qe, '__esModule', { value: !0 });
qe.translateAddress = qe.validateAccounts = qe.toInstruction = qe.parseIdlErrors = void 0;
const Bc = _e,
  qA = Le;
function zA(t) {
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
qe.parseIdlErrors = zA;
function YA(t, ...e) {
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
qe.toInstruction = YA;
function Wf(t, e = {}) {
  t.forEach((n) => {
    if ((0, qA.isCompositeAccounts)(n)) Wf(n.accounts, e[n.name]);
    else if (!e[n.name]) throw new Error('Account `'.concat(n.name, '` not provided.'));
  });
}
qe.validateAccounts = Wf;
function XA(t) {
  return t instanceof Bc.PublicKey ? t : new Bc.PublicKey(t);
}
qe.translateAddress = XA;
var Lc;
function bu() {
  if (Lc) return At;
  (Lc = 1),
    Object.defineProperty(At, '__esModule', { value: !0 }),
    (At.simulateTransaction =
      At.getMultipleAccountsAndContext =
      At.getMultipleAccounts =
      At.invoke =
        void 0);
  const t = _e,
    e = rt,
    n = qe,
    r = xi(),
    o = g_;
  async function i(b, N, P, I) {
    (b = (0, n.translateAddress)(b)), I || (I = (0, r.getProvider)());
    const x = new t.Transaction();
    if (
      (x.add(new t.TransactionInstruction({ programId: b, keys: N != null ? N : [], data: P })),
      I.sendAndConfirm === void 0)
    )
      throw new Error("This function requires 'Provider.sendAndConfirm' to be implemented.");
    return await I.sendAndConfirm(x, []);
  }
  At.invoke = i;
  const u = 99;
  async function d(b, N, P) {
    return (await p(b, N, P)).map((x) =>
      x ? { publicKey: x.publicKey, account: x.account } : null
    );
  }
  At.getMultipleAccounts = d;
  async function p(b, N, P) {
    if (N.length <= u) return await a(b, N, P);
    {
      const I = (0, e.chunks)(N, u);
      return (await Promise.all(I.map((F) => a(b, F, P)))).flat();
    }
  }
  At.getMultipleAccountsAndContext = p;
  async function a(b, N, P) {
    const I = P != null ? P : b.commitment,
      { value: x, context: F } = await b.getMultipleAccountsInfoAndContext(N, I);
    return x.map((T, y) => (T === null ? null : { publicKey: N[y], account: T, context: F }));
  }
  async function _(b, N, P, I, x) {
    var F;
    P && P.length > 0 && N.sign(...P);
    const $ = N._compile(),
      T = $.serialize(),
      v = N._serialize(T).toString('base64'),
      M = { encoding: 'base64', commitment: I != null ? I : b.commitment };
    if (x) {
      const S = (Array.isArray(x) ? x : $.nonProgramIds()).map((k) => k.toBase58());
      M.accounts = { encoding: 'base64', addresses: S };
    }
    P && P.length > 0 && (M.sigVerify = !0);
    const G = [v, M],
      J = await b._rpcRequest('simulateTransaction', G),
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
  At.simulateTransaction = _;
  function A(b) {
    return (0, o.coerce)(m(b), h, (N) =>
      'error' in N ? N : at(Be({}, N), { result: (0, o.create)(N.result, b) })
    );
  }
  const h = m((0, o.unknown)());
  function m(b) {
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
  function g(b) {
    return A((0, o.type)({ context: (0, o.type)({ slot: (0, o.number)() }), value: b }));
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
  return At;
}
var Uc;
function xi() {
  if (Uc) return vt;
  (Uc = 1),
    Object.defineProperty(vt, '__esModule', { value: !0 }),
    (vt.getProvider = vt.setProvider = vt.AnchorProvider = void 0);
  const t = _e,
    e = dt,
    n = rt,
    r = bu();
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
        b = $n.default.local();
      return new o(g, b, m);
    }
    static env() {
      if (n.isBrowser) throw new Error('Provider env is not available on browser.');
      const m = ml.env.ANCHOR_PROVIDER_URL;
      if (m === void 0) throw new Error('ANCHOR_PROVIDER_URL is not defined');
      const g = o.defaultOptions(),
        R = new t.Connection(m, g.commitment),
        N = $n.default.local();
      return new o(R, N, g);
    }
    async sendAndConfirm(h, m, g) {
      var R, b, N, P;
      if ((g === void 0 && (g = this.opts), (0, n.isVersionedTransaction)(h))) m && h.sign(m);
      else if (
        ((h.feePayer = (R = h.feePayer) !== null && R !== void 0 ? R : this.wallet.publicKey),
        (h.recentBlockhash = (
          await this.connection.getLatestBlockhash(g.preflightCommitment)
        ).blockhash),
        m)
      )
        for (const x of m) h.partialSign(x);
      h = await this.wallet.signTransaction(h);
      const I = h.serialize();
      try {
        return await u(this.connection, I, g);
      } catch (x) {
        if (x instanceof d) {
          const F = e.bs58.encode(
              (0, n.isVersionedTransaction)(h)
                ? ((b = h.signatures) === null || b === void 0 ? void 0 : b[0]) || new Uint8Array()
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
            throw y ? new t.SendTransactionError(x.message, y) : x;
          } else throw x;
        } else throw x;
      }
    }
    async sendAll(h, m) {
      var g, R, b;
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
        x = [];
      for (let F = 0; F < P.length; F += 1) {
        const $ = I[F],
          T = $.serialize();
        try {
          x.push(await u(this.connection, T, m));
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
              const J = (b = G.meta) === null || b === void 0 ? void 0 : b.logMessages;
              throw J ? new t.SendTransactionError(y.message, J) : y;
            } else throw y;
          } else throw y;
        }
      }
      return x;
    }
    async simulate(h, m, g, R) {
      let b = (await this.connection.getLatestBlockhash(g != null ? g : this.connection.commitment))
          .blockhash,
        N;
      if (
        ((0, n.isVersionedTransaction)(h)
          ? (m && m.length > 0 && (h.sign(m), (h = await this.wallet.signTransaction(h))),
            (N = await this.connection.simulateTransaction(h, { commitment: g })))
          : ((h.feePayer = h.feePayer || this.wallet.publicKey),
            (h.recentBlockhash = b),
            m && m.length > 0 && (h = await this.wallet.signTransaction(h)),
            (N = await (0, r.simulateTransaction)(this.connection, h, m, g, R))),
        N.value.err)
      )
        throw new i(N.value);
      return N.value;
    }
  }
  vt.AnchorProvider = o;
  class i extends Error {
    constructor(h, m) {
      super(m), (this.simulationResponse = h);
    }
  }
  async function u(A, h, m) {
    const g = m && {
        skipPreflight: m.skipPreflight,
        preflightCommitment: m.preflightCommitment || m.commitment,
      },
      R = await A.sendRawTransaction(h, g),
      b = (await A.confirmTransaction(R, m && m.commitment)).value;
    if (b.err)
      throw new d('Raw transaction '.concat(R, ' failed (').concat(JSON.stringify(b), ')'));
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
  vt.setProvider = p;
  function a() {
    return _ === null ? o.local() : _;
  }
  vt.getProvider = a;
  let _ = null;
  return vt;
}
var qn = {},
  L = {};
Object.defineProperty(L, '__esModule', { value: !0 });
L.ANCHOR_ERROR__REQUIRE_EQ_VIOLATED =
  L.ANCHOR_ERROR__REQUIRE_VIOLATED =
  L.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION_PROGRAM_ID =
  L.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION_AUTHORITY =
  L.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION =
  L.ANCHOR_ERROR__CONSTRAINT_MINT_PERMANENT_DELEGATE_EXTENSION_DELEGATE =
  L.ANCHOR_ERROR__CONSTRAINT_MINT_PERMANENT_DELEGATE_EXTENSION =
  L.ANCHOR_ERROR__CONSTRAINT_MINT_CLOSE_AUTHORITY_EXTENSION_AUTHORITY =
  L.ANCHOR_ERROR__CONSTRAINT_MINT_CLOSE_AUTHORITY_EXTENSION =
  L.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION_METADATA_ADDRESS =
  L.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION_AUTHORITY =
  L.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION =
  L.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION_MEMBER_ADDRESS =
  L.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION_AUTHORITY =
  L.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION =
  L.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION_GROUP_ADDRESS =
  L.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION_AUTHORITY =
  L.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION =
  L.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED_TOKEN_TOKEN_PROGRAM =
  L.ANCHOR_ERROR__CONSTRAINT_MINT_TOKEN_PROGRAM =
  L.ANCHOR_ERROR__CONSTRAINT_TOKEN_TOKEN_PROGRAM =
  L.ANCHOR_ERROR__CONSTRAINT_ACCOUNT_IS_NONE =
  L.ANCHOR_ERROR__CONSTRAINT_SPACE =
  L.ANCHOR_ERROR__CONSTRAINT_MINT_DECIMALS =
  L.ANCHOR_ERROR__CONSTRAINT_MINT_FREEZE_AUTHORITY =
  L.ANCHOR_ERROR__CONSTRAINT_MINT_MINT_AUTHORITY =
  L.ANCHOR_ERROR__CONSTRAINT_TOKEN_OWNER =
  L.ANCHOR_ERROR__CONSTRAINT_TOKEN_MINT =
  L.ANCHOR_ERROR__CONSTRAINT_ZERO =
  L.ANCHOR_ERROR__CONSTRAINT_ADDRESS =
  L.ANCHOR_ERROR__CONSTRAINT_CLOSE =
  L.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED_INIT =
  L.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED =
  L.ANCHOR_ERROR__CONSTRAINT_STATE =
  L.ANCHOR_ERROR__CONSTRAINT_EXECUTABLE =
  L.ANCHOR_ERROR__CONSTRAINT_SEEDS =
  L.ANCHOR_ERROR__CONSTRAINT_RENT_EXEMPT =
  L.ANCHOR_ERROR__CONSTRAINT_OWNER =
  L.ANCHOR_ERROR__CONSTRAINT_RAW =
  L.ANCHOR_ERROR__CONSTRAINT_SIGNER =
  L.ANCHOR_ERROR__CONSTRAINT_HAS_ONE =
  L.ANCHOR_ERROR__CONSTRAINT_MUT =
  L.ANCHOR_ERROR__EVENT_INSTRUCTION_STUB =
  L.ANCHOR_ERROR__IDL_ACCOUNT_NOT_EMPTY =
  L.ANCHOR_ERROR__IDL_INSTRUCTION_INVALID_PROGRAM =
  L.ANCHOR_ERROR__IDL_INSTRUCTION_STUB =
  L.ANCHOR_ERROR__INSTRUCTION_DID_NOT_SERIALIZE =
  L.ANCHOR_ERROR__INSTRUCTION_DID_NOT_DESERIALIZE =
  L.ANCHOR_ERROR__INSTRUCTION_FALLBACK_NOT_FOUND =
  L.ANCHOR_ERROR__INSTRUCTION_MISSING =
    void 0;
L.ANCHOR_ERROR__DEPRECATED =
  L.ANCHOR_ERROR__INVALID_NUMERIC_CONVERSION =
  L.ANCHOR_ERROR__TRYING_TO_INIT_PAYER_AS_PROGRAM_ACCOUNT =
  L.ANCHOR_ERROR__DECLARED_PROGRAM_ID_MISMATCH =
  L.ANCHOR_ERROR__ACCOUNT_DUPLICATE_REALLOCS =
  L.ANCHOR_ERROR__ACCOUNT_REALLOC_EXCEEDS_LIMIT =
  L.ANCHOR_ERROR__ACCOUNT_SYSVAR_MISMATCH =
  L.ANCHOR_ERROR__ACCOUNT_NOT_ASSOCIATED_TOKEN_ACCOUNT =
  L.ANCHOR_ERROR__ACCOUNT_NOT_PROGRAM_DATA =
  L.ANCHOR_ERROR__ACCOUNT_NOT_INITIALIZED =
  L.ANCHOR_ERROR__ACCOUNT_NOT_SYSTEM_OWNED =
  L.ANCHOR_ERROR__ACCOUNT_NOT_SIGNER =
  L.ANCHOR_ERROR__INVALID_PROGRAM_EXECUTABLE =
  L.ANCHOR_ERROR__INVALID_PROGRAM_ID =
  L.ANCHOR_ERROR__ACCOUNT_OWNED_BY_WRONG_PROGRAM =
  L.ANCHOR_ERROR__ACCOUNT_NOT_MUTABLE =
  L.ANCHOR_ERROR__ACCOUNT_NOT_ENOUGH_KEYS =
  L.ANCHOR_ERROR__ACCOUNT_DID_NOT_SERIALIZE =
  L.ANCHOR_ERROR__ACCOUNT_DID_NOT_DESERIALIZE =
  L.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_MISMATCH =
  L.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_NOT_FOUND =
  L.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_ALREADY_SET =
  L.ANCHOR_ERROR__REQUIRE_GTE_VIOLATED =
  L.ANCHOR_ERROR__REQUIRE_GT_VIOLATED =
  L.ANCHOR_ERROR__REQUIRE_KEYS_NEQ_VIOLATED =
  L.ANCHOR_ERROR__REQUIRE_NEQ_VIOLATED =
  L.ANCHOR_ERROR__REQUIRE_KEYS_EQ_VIOLATED =
    void 0;
L.ANCHOR_ERROR__INSTRUCTION_MISSING = 100;
L.ANCHOR_ERROR__INSTRUCTION_FALLBACK_NOT_FOUND = 101;
L.ANCHOR_ERROR__INSTRUCTION_DID_NOT_DESERIALIZE = 102;
L.ANCHOR_ERROR__INSTRUCTION_DID_NOT_SERIALIZE = 103;
L.ANCHOR_ERROR__IDL_INSTRUCTION_STUB = 1e3;
L.ANCHOR_ERROR__IDL_INSTRUCTION_INVALID_PROGRAM = 1001;
L.ANCHOR_ERROR__IDL_ACCOUNT_NOT_EMPTY = 1002;
L.ANCHOR_ERROR__EVENT_INSTRUCTION_STUB = 1500;
L.ANCHOR_ERROR__CONSTRAINT_MUT = 2e3;
L.ANCHOR_ERROR__CONSTRAINT_HAS_ONE = 2001;
L.ANCHOR_ERROR__CONSTRAINT_SIGNER = 2002;
L.ANCHOR_ERROR__CONSTRAINT_RAW = 2003;
L.ANCHOR_ERROR__CONSTRAINT_OWNER = 2004;
L.ANCHOR_ERROR__CONSTRAINT_RENT_EXEMPT = 2005;
L.ANCHOR_ERROR__CONSTRAINT_SEEDS = 2006;
L.ANCHOR_ERROR__CONSTRAINT_EXECUTABLE = 2007;
L.ANCHOR_ERROR__CONSTRAINT_STATE = 2008;
L.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED = 2009;
L.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED_INIT = 2010;
L.ANCHOR_ERROR__CONSTRAINT_CLOSE = 2011;
L.ANCHOR_ERROR__CONSTRAINT_ADDRESS = 2012;
L.ANCHOR_ERROR__CONSTRAINT_ZERO = 2013;
L.ANCHOR_ERROR__CONSTRAINT_TOKEN_MINT = 2014;
L.ANCHOR_ERROR__CONSTRAINT_TOKEN_OWNER = 2015;
L.ANCHOR_ERROR__CONSTRAINT_MINT_MINT_AUTHORITY = 2016;
L.ANCHOR_ERROR__CONSTRAINT_MINT_FREEZE_AUTHORITY = 2017;
L.ANCHOR_ERROR__CONSTRAINT_MINT_DECIMALS = 2018;
L.ANCHOR_ERROR__CONSTRAINT_SPACE = 2019;
L.ANCHOR_ERROR__CONSTRAINT_ACCOUNT_IS_NONE = 2020;
L.ANCHOR_ERROR__CONSTRAINT_TOKEN_TOKEN_PROGRAM = 2021;
L.ANCHOR_ERROR__CONSTRAINT_MINT_TOKEN_PROGRAM = 2022;
L.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED_TOKEN_TOKEN_PROGRAM = 2023;
L.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION = 2024;
L.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION_AUTHORITY = 2025;
L.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION_GROUP_ADDRESS = 2026;
L.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION = 2027;
L.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION_AUTHORITY = 2028;
L.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION_MEMBER_ADDRESS = 2029;
L.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION = 2030;
L.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION_AUTHORITY = 2031;
L.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION_METADATA_ADDRESS = 2032;
L.ANCHOR_ERROR__CONSTRAINT_MINT_CLOSE_AUTHORITY_EXTENSION = 2033;
L.ANCHOR_ERROR__CONSTRAINT_MINT_CLOSE_AUTHORITY_EXTENSION_AUTHORITY = 2034;
L.ANCHOR_ERROR__CONSTRAINT_MINT_PERMANENT_DELEGATE_EXTENSION = 2035;
L.ANCHOR_ERROR__CONSTRAINT_MINT_PERMANENT_DELEGATE_EXTENSION_DELEGATE = 2036;
L.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION = 2037;
L.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION_AUTHORITY = 2038;
L.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION_PROGRAM_ID = 2039;
L.ANCHOR_ERROR__REQUIRE_VIOLATED = 2500;
L.ANCHOR_ERROR__REQUIRE_EQ_VIOLATED = 2501;
L.ANCHOR_ERROR__REQUIRE_KEYS_EQ_VIOLATED = 2502;
L.ANCHOR_ERROR__REQUIRE_NEQ_VIOLATED = 2503;
L.ANCHOR_ERROR__REQUIRE_KEYS_NEQ_VIOLATED = 2504;
L.ANCHOR_ERROR__REQUIRE_GT_VIOLATED = 2505;
L.ANCHOR_ERROR__REQUIRE_GTE_VIOLATED = 2506;
L.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_ALREADY_SET = 3e3;
L.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_NOT_FOUND = 3001;
L.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_MISMATCH = 3002;
L.ANCHOR_ERROR__ACCOUNT_DID_NOT_DESERIALIZE = 3003;
L.ANCHOR_ERROR__ACCOUNT_DID_NOT_SERIALIZE = 3004;
L.ANCHOR_ERROR__ACCOUNT_NOT_ENOUGH_KEYS = 3005;
L.ANCHOR_ERROR__ACCOUNT_NOT_MUTABLE = 3006;
L.ANCHOR_ERROR__ACCOUNT_OWNED_BY_WRONG_PROGRAM = 3007;
L.ANCHOR_ERROR__INVALID_PROGRAM_ID = 3008;
L.ANCHOR_ERROR__INVALID_PROGRAM_EXECUTABLE = 3009;
L.ANCHOR_ERROR__ACCOUNT_NOT_SIGNER = 3010;
L.ANCHOR_ERROR__ACCOUNT_NOT_SYSTEM_OWNED = 3011;
L.ANCHOR_ERROR__ACCOUNT_NOT_INITIALIZED = 3012;
L.ANCHOR_ERROR__ACCOUNT_NOT_PROGRAM_DATA = 3013;
L.ANCHOR_ERROR__ACCOUNT_NOT_ASSOCIATED_TOKEN_ACCOUNT = 3014;
L.ANCHOR_ERROR__ACCOUNT_SYSVAR_MISMATCH = 3015;
L.ANCHOR_ERROR__ACCOUNT_REALLOC_EXCEEDS_LIMIT = 3016;
L.ANCHOR_ERROR__ACCOUNT_DUPLICATE_REALLOCS = 3017;
L.ANCHOR_ERROR__DECLARED_PROGRAM_ID_MISMATCH = 4100;
L.ANCHOR_ERROR__TRYING_TO_INIT_PAYER_AS_PROGRAM_ACCOUNT = 4101;
L.ANCHOR_ERROR__INVALID_NUMERIC_CONVERSION = 4102;
L.ANCHOR_ERROR__DEPRECATED = 5e3;
var Zt = {};
Object.defineProperty(Zt, '__esModule', { value: !0 });
Zt.isSet = Zt.set = void 0;
const JA = new Set(['debug-logs']),
  qf = new Map();
function QA(t) {
  if (!JA.has(t)) throw new Error('Invalid feature');
  qf.set(t, !0);
}
Zt.set = QA;
function ZA(t) {
  return qf.get(t) !== void 0;
}
Zt.isSet = ZA;
(function (t) {
  var e =
      (w && w.__createBinding) ||
      (Object.create
        ? function (h, m, g, R) {
            R === void 0 && (R = g);
            var b = Object.getOwnPropertyDescriptor(m, g);
            (!b || ('get' in b ? !m.__esModule : b.writable || b.configurable)) &&
              (b = {
                enumerable: !0,
                get: function () {
                  return m[g];
                },
              }),
              Object.defineProperty(h, R, b);
          }
        : function (h, m, g, R) {
            R === void 0 && (R = g), (h[R] = m[g]);
          }),
    n =
      (w && w.__setModuleDefault) ||
      (Object.create
        ? function (h, m) {
            Object.defineProperty(h, 'default', { enumerable: !0, value: m });
          }
        : function (h, m) {
            h.default = m;
          }),
    r =
      (w && w.__importStar) ||
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
    i = r(L),
    u = r(Zt);
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
        b = /^Program \w* success/,
        N = [];
      for (let P = 0; P < m.length; P++) {
        if (b.exec(m[P])) {
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
    constructor(m, g, R, b, N, P) {
      super(R.join('\n').replace('Program log: ', '')),
        (this.errorLogs = R),
        (this.logs = b),
        (this.error = { errorCode: m, errorMessage: g, comparedValues: P, origin: N }),
        (this._programErrorStack = p.parse(b));
    }
    static parse(m) {
      if (!m) return null;
      const g = m.findIndex((y) => y.startsWith('Program log: AnchorError'));
      if (g === -1) return null;
      const R = m[g],
        b = [R];
      let N;
      if (g + 1 < m.length) {
        if (m[g + 1] === 'Program log: Left:') {
          const y = /^Program log: (.*)$/,
            v = y.exec(m[g + 2])[1],
            M = y.exec(m[g + 4])[1];
          (N = [new o.PublicKey(v), new o.PublicKey(M)]), b.push(...m.slice(g + 1, g + 5));
        } else if (m[g + 1].startsWith('Program log: Left:')) {
          const y = /^Program log: (Left|Right): (.*)$/,
            v = y.exec(m[g + 1])[2],
            M = y.exec(m[g + 2])[2];
          b.push(...m.slice(g + 1, g + 3)), (N = [v, M]);
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
        return new a(G, M, b, m, void 0, N);
      } else if (F) {
        const [y, v, M, G, J] = F.slice(1, 6),
          z = { code: M, number: parseInt(G) },
          S = { file: y, line: parseInt(v) };
        return new a(z, J, b, m, S, N);
      } else if (T) {
        const [y, v, M, G] = T.slice(1, 5),
          J = y,
          z = { code: v, number: parseInt(M) };
        return new a(z, G, b, m, J, N);
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
      let b;
      if (R.includes('custom program error:')) {
        let I = R.split('custom program error: ');
        if (I.length !== 2) return null;
        b = I[1];
      } else {
        const I = R.match(/"Custom":([0-9]+)}/g);
        if (!I || I.length > 1) return null;
        b = I[0].match(/([0-9]+)/g)[0];
      }
      let N;
      try {
        N = parseInt(b);
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
    u.isSet('debug-logs') && console.log('Translating error:', h);
    const g = a.parse(h.logs);
    if (g) return g;
    const R = _.parse(h, m);
    if (R) return R;
    if (h.logs) {
      const b = {
        get: function (N, P) {
          return P === 'programErrorStack'
            ? N.programErrorStack.stack
            : P === 'program'
              ? N.programErrorStack.stack[h.programErrorStack.stack.length - 1]
              : Reflect.get(...arguments);
        },
      };
      return (h.programErrorStack = p.parse(h.logs)), new Proxy(h, b);
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
})(qn);
var So = {},
  vo = {},
  rr = {},
  Ut = {},
  eO =
    (w && w.__createBinding) ||
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
    (w && w.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  nO =
    (w && w.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null)
        for (var n in t)
          n !== 'default' && Object.prototype.hasOwnProperty.call(t, n) && eO(e, t, n);
      return tO(e, t), e;
    };
Object.defineProperty(Ut, '__esModule', { value: !0 });
Ut.IdlCoder = void 0;
const Ce = nO(me),
  li = Le,
  ln = qn;
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
          let [i, u] = e.type.array;
          return (u = we.resolveArrayLen(u, r)), Ce.array(we.fieldLayout({ type: i }, n, r), u, o);
        }
        if ('defined' in e.type) {
          if (!n) throw new ln.IdlError('User defined types not provided');
          const i = e.type.defined.name,
            u = n.find((d) => d.name === i);
          if (!u) throw new ln.IdlError('Type not found: '.concat(e.name));
          return we.typeDefLayout({
            typeDef: u,
            types: n,
            genericArgs: r != null ? r : e.type.defined.generics,
            name: o,
          });
        }
        if ('generic' in e.type) {
          const i = r == null ? void 0 : r.at(0);
          if ((i == null ? void 0 : i.kind) !== 'type')
            throw new ln.IdlError('Invalid generic field: '.concat(e.name));
          return we.fieldLayout(at(Be({}, e), { type: i.type }), n);
        }
        throw new ln.IdlError('Not yet implemented: '.concat(JSON.stringify(e.type)));
      }
    }
  }
  static typeDefLayout({ typeDef: e, types: n, name: r, genericArgs: o }) {
    switch (e.type.kind) {
      case 'struct': {
        const i = (0, li.handleDefinedFields)(
          e.type.fields,
          () => [],
          (u) =>
            u.map((d) => {
              const p = o && we.resolveGenericArgs({ type: d.type, typeDef: e, genericArgs: o });
              return we.fieldLayout(d, n, p);
            }),
          (u) =>
            u.map((d, p) => {
              const a = o && we.resolveGenericArgs({ type: d, typeDef: e, genericArgs: o });
              return we.fieldLayout({ name: p.toString(), type: d }, n, a);
            })
        );
        return Ce.struct(i, r);
      }
      case 'enum': {
        const i = e.type.variants.map((u) => {
          const d = (0, li.handleDefinedFields)(
            u.fields,
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
          return Ce.struct(d, u.name);
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
          let [i, u] = e.array;
          return (u = we.resolveArrayLen(u, r)), we.typeSize(i, n, r) * u;
        }
        if ('defined' in e) {
          const i =
            (o = n.types) === null || o === void 0
              ? void 0
              : o.find((d) => d.name === e.defined.name);
          if (!i) throw new ln.IdlError('Type not found: '.concat(JSON.stringify(e)));
          const u = (d) => {
            const p = r != null ? r : e.defined.generics,
              a = p && we.resolveGenericArgs({ type: d, typeDef: i, genericArgs: p });
            return we.typeSize(d, n, a);
          };
          switch (i.type.kind) {
            case 'struct':
              return (0, li.handleDefinedFields)(
                i.type.fields,
                () => [0],
                (d) => d.map((p) => u(p.type)),
                (d) => d.map((p) => u(p))
              ).reduce((d, p) => d + p, 0);
            case 'enum': {
              const d = i.type.variants.map((p) =>
                (0, li.handleDefinedFields)(
                  p.fields,
                  () => [0],
                  (a) => a.map((_) => u(_.type)),
                  (a) => a.map((_) => u(_))
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
            throw new ln.IdlError('Invalid generic: '.concat(e.generic));
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
    if (typeof e != 'number') throw new ln.IdlError('Generic array length did not resolve');
    return e;
  }
  static resolveGenericArgs({ type: e, typeDef: n, genericArgs: r, isDefined: o }) {
    if (typeof e != 'object') return null;
    for (const i in n.generics) {
      const u = n.generics[i];
      if ('generic' in e && u.name === e.generic) return [r[i]];
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
        if (a && u.name === p.generic) {
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
Ut.IdlCoder = we;
var $c;
function jc() {
  if ($c) return rr;
  $c = 1;
  var t =
      (w && w.__createBinding) ||
      (Object.create
        ? function (m, g, R, b) {
            b === void 0 && (b = R);
            var N = Object.getOwnPropertyDescriptor(g, R);
            (!N || ('get' in N ? !g.__esModule : N.writable || N.configurable)) &&
              (N = {
                enumerable: !0,
                get: function () {
                  return g[R];
                },
              }),
              Object.defineProperty(m, b, N);
          }
        : function (m, g, R, b) {
            b === void 0 && (b = R), (m[b] = g[R]);
          }),
    e =
      (w && w.__setModuleDefault) ||
      (Object.create
        ? function (m, g) {
            Object.defineProperty(m, 'default', { enumerable: !0, value: g });
          }
        : function (m, g) {
            m.default = g;
          }),
    n =
      (w && w.__importStar) ||
      function (m) {
        if (m && m.__esModule) return m;
        var g = {};
        if (m != null)
          for (var R in m)
            R !== 'default' && Object.prototype.hasOwnProperty.call(m, R) && t(g, m, R);
        return e(g, m), g;
      },
    r =
      (w && w.__importDefault) ||
      function (m) {
        return m && m.__esModule ? m : { default: m };
      };
  Object.defineProperty(rr, '__esModule', { value: !0 }), (rr.BorshInstructionCoder = void 0);
  const o = r(xr),
    i = Pe,
    u = n(me),
    d = Le,
    p = Ut,
    a = Gi();
  class _ {
    constructor(g) {
      this.idl = g;
      const R = g.instructions.map((N) => {
        const P = N.name,
          I = N.args.map((F) => p.IdlCoder.fieldLayout(F, g.types)),
          x = u.struct(I, P);
        return [P, { discriminator: N.discriminator, layout: x }];
      });
      this.ixLayouts = new Map(R);
      const b = R.map(([N, { discriminator: P, layout: I }]) => [
        o.default.encode(P),
        { name: N, layout: I },
      ]);
      this.sighashLayouts = new Map(b);
    }
    encode(g, R) {
      const b = i.Buffer.alloc(1e3),
        N = this.ixLayouts.get(g);
      if (!N) throw new Error('Unknown method: '.concat(g));
      const P = N.layout.encode(R, b),
        I = b.slice(0, P);
      return i.Buffer.concat([i.Buffer.from(N.discriminator), I]);
    }
    decode(g, R = 'hex') {
      typeof g == 'string' && (g = R === 'hex' ? i.Buffer.from(g, 'hex') : o.default.decode(g));
      const b = g.slice(0, a.DISCRIMINATOR_SIZE),
        N = g.slice(a.DISCRIMINATOR_SIZE),
        P = this.sighashLayouts.get(o.default.encode(b));
      return P ? { name: P.name, data: P.layout.decode(N) } : null;
    }
    format(g, R) {
      return A.format(g, R, this.idl);
    }
  }
  rr.BorshInstructionCoder = _;
  class A {
    static format(g, R, b) {
      const N = b.instructions.find((F) => g.name === F.name);
      if (!N) return console.error('Invalid instruction given'), null;
      const P = N.args.map((F) => ({
          name: F.name,
          type: A.formatIdlType(F.type),
          data: A.formatIdlData(F, g.data[F.name], b.types),
        })),
        I = A.flattenIdlAccounts(N.accounts),
        x = R.map((F, $) => ($ < I.length ? Be({ name: I[$].name }, F) : Be({ name: void 0 }, F)));
      return { args: P, accounts: x };
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
          const b = g.defined.generics
            .map((N) => {
              switch (N.kind) {
                case 'type':
                  return A.formatIdlType(N.type);
                case 'const':
                  return N.value;
              }
            })
            .join(', ');
          return ''.concat(R, '<').concat(b, '>');
        }
        return R;
      }
      throw new Error('Unknown IDL type: '.concat(g));
    }
    static formatIdlData(g, R, b) {
      if (typeof g.type == 'string') return R.toString();
      if ('vec' in g.type)
        return (
          '[' +
          R.map((N) => this.formatIdlData({ name: '', type: g.type.vec }, N, b)).join(', ') +
          ']'
        );
      if ('option' in g.type)
        return R === null ? 'null' : this.formatIdlData({ name: '', type: g.type.option }, R, b);
      if ('defined' in g.type) {
        if (!b) throw new Error('User defined types not provided');
        const N = g.type.defined.name,
          P = b.find((I) => I.name === N);
        if (!P) throw new Error('Type not found: '.concat(N));
        return A.formatIdlDataDefined(P, R, b);
      }
      return 'unknown';
    }
    static formatIdlDataDefined(g, R, b) {
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
                    const x = N.find((F) => F.name === P);
                    if (!x) throw new Error('Field not found: '.concat(P));
                    return P + ': ' + A.formatIdlData(x, I, b);
                  })
                  .join(', '),
              (N) =>
                Object.entries(R)
                  .map(([P, I]) => P + ': ' + A.formatIdlData({ name: '', type: N[P] }, I, b))
                  .join(', ')
            ) +
            ' }'
          );
        case 'enum': {
          const N = Object.keys(R)[0],
            P = g.type.variants.find((x) => x.name === N);
          if (!P) throw new Error('Unable to find variant: '.concat(N));
          const I = R[N];
          return (0, d.handleDefinedFields)(
            P.fields,
            () => N,
            (x) => {
              const F = Object.keys(I)
                .map(($) => {
                  const T = I[$],
                    y = x.find((v) => v.name === $);
                  if (!y) throw new Error('Field not found: '.concat($));
                  return $ + ': ' + A.formatIdlData(y, T, b);
                })
                .join(', ');
              return ''.concat(N, ' { ').concat(F, ' }');
            },
            (x) => {
              const F = Object.entries(I)
                .map(([$, T]) => $ + ': ' + A.formatIdlData({ name: '', type: x[$] }, T, b))
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
        .map((b) => {
          const N = h(b.name);
          if (b.hasOwnProperty('accounts')) {
            const P = R ? ''.concat(R, ' > ').concat(N) : N;
            return A.flattenIdlAccounts(b.accounts, P);
          } else return at(Be({}, b), { name: R ? ''.concat(R, ' > ').concat(N) : N });
        })
        .flat();
    }
  }
  function h(m) {
    const g = m.replace(/([A-Z])/g, ' $1');
    return g.charAt(0).toUpperCase() + g.slice(1);
  }
  return rr;
}
var Mr = {},
  Fr = {};
Object.defineProperty(Fr, '__esModule', { value: !0 });
Fr.DISCRIMINATOR_SIZE = void 0;
Fr.DISCRIMINATOR_SIZE = 8;
var rO =
  (w && w.__importDefault) ||
  function (t) {
    return t && t.__esModule ? t : { default: t };
  };
Object.defineProperty(Mr, '__esModule', { value: !0 });
Mr.BorshAccountsCoder = void 0;
const iO = rO(xr),
  di = Pe,
  Hc = Ut,
  fi = Fr;
class oO {
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
    const r = di.Buffer.alloc(1e3),
      o = this.accountLayouts.get(e);
    if (!o) throw new Error('Unknown account: '.concat(e));
    const i = o.encode(n, r),
      u = r.slice(0, i),
      d = this.accountDiscriminator(e);
    return di.Buffer.concat([d, u]);
  }
  decode(e, n) {
    if (this.accountDiscriminator(e).compare(n.slice(0, fi.DISCRIMINATOR_SIZE)))
      throw new Error('Invalid account discriminator');
    return this.decodeUnchecked(e, n);
  }
  decodeAny(e) {
    const n = e.slice(0, fi.DISCRIMINATOR_SIZE),
      r = Array.from(this.accountLayouts.keys()).find((o) =>
        this.accountDiscriminator(o).equals(n)
      );
    if (!r) throw new Error('Account not found');
    return this.decodeUnchecked(r, e);
  }
  decodeUnchecked(e, n) {
    const r = n.subarray(fi.DISCRIMINATOR_SIZE),
      o = this.accountLayouts.get(e);
    if (!o) throw new Error('Unknown account: '.concat(e));
    return o.decode(r);
  }
  memcmp(e, n) {
    const r = this.accountDiscriminator(e);
    return { offset: 0, bytes: iO.default.encode(n ? di.Buffer.concat([r, n]) : r) };
  }
  size(e) {
    return fi.DISCRIMINATOR_SIZE + Hc.IdlCoder.typeSize({ defined: { name: e } }, this.idl);
  }
  accountDiscriminator(e) {
    var n;
    const r =
      (n = this.idl.accounts) === null || n === void 0 ? void 0 : n.find((o) => o.name === e);
    if (!r) throw new Error('Account not found: '.concat(e));
    return di.Buffer.from(r.discriminator);
  }
}
Mr.BorshAccountsCoder = oO;
var kr = {},
  sO =
    (w && w.__createBinding) ||
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
  aO =
    (w && w.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  uO =
    (w && w.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null)
        for (var n in t)
          n !== 'default' && Object.prototype.hasOwnProperty.call(t, n) && sO(e, t, n);
      return aO(e, t), e;
    };
Object.defineProperty(kr, '__esModule', { value: !0 });
kr.BorshEventCoder = void 0;
const cO = Pe,
  Po = uO(Qt),
  lO = Ut;
class dO {
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
      return [i.name, lO.IdlCoder.typeDefLayout({ typeDef: u, types: r })];
    });
    (this.layouts = new Map(o)),
      (this.discriminators = new Map(
        ((n = e.events) !== null && n !== void 0 ? n : []).map((i) => [
          Po.encode(cO.Buffer.from(i.discriminator)),
          i.name,
        ])
      ));
  }
  decode(e) {
    let n;
    try {
      n = Po.decode(e);
    } catch (d) {
      return null;
    }
    const r = Po.encode(n.slice(0, 8)),
      o = this.discriminators.get(r);
    if (!o) return null;
    const i = this.layouts.get(o);
    if (!i) throw new Error('Unknown event: '.concat(o));
    return { data: i.decode(n.slice(8)), name: o };
  }
}
kr.BorshEventCoder = dO;
var Bi = {};
Object.defineProperty(Bi, '__esModule', { value: !0 });
Bi.BorshTypesCoder = void 0;
const fO = Pe,
  pO = Ut;
class _O {
  constructor(e) {
    const n = e.types;
    if (!n) {
      this.typeLayouts = new Map();
      return;
    }
    const r = n
      .filter((o) => !o.generics)
      .map((o) => [o.name, pO.IdlCoder.typeDefLayout({ typeDef: o, types: n })]);
    this.typeLayouts = new Map(r);
  }
  encode(e, n) {
    const r = fO.Buffer.alloc(1e3),
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
Bi.BorshTypesCoder = _O;
var Gc;
function hO() {
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
          n = Mr,
          r = kr,
          o = Bi;
        var i = jc();
        Object.defineProperty(t, 'BorshInstructionCoder', {
          enumerable: !0,
          get: function () {
            return i.BorshInstructionCoder;
          },
        });
        var u = Mr;
        Object.defineProperty(t, 'BorshAccountsCoder', {
          enumerable: !0,
          get: function () {
            return u.BorshAccountsCoder;
          },
        });
        var d = Fr;
        Object.defineProperty(t, 'DISCRIMINATOR_SIZE', {
          enumerable: !0,
          get: function () {
            return d.DISCRIMINATOR_SIZE;
          },
        });
        var p = kr;
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
      })(vo)),
    vo
  );
}
var Kr = {},
  Li = {},
  mO =
    (w && w.__createBinding) ||
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
  gO =
    (w && w.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  AO =
    (w && w.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null)
        for (var n in t)
          n !== 'default' && Object.prototype.hasOwnProperty.call(t, n) && mO(e, t, n);
      return gO(e, t), e;
    },
  OO =
    (w && w.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(Li, '__esModule', { value: !0 });
Li.SystemInstructionCoder = void 0;
const RO = OO(Je),
  Re = AO(bi);
class yO {
  constructor(e) {}
  encode(e, n) {
    switch (e) {
      case 'createAccount':
        return EO(n);
      case 'assign':
        return IO(n);
      case 'transfer':
        return wO(n);
      case 'createAccountWithSeed':
        return bO(n);
      case 'advanceNonceAccount':
        return CO(n);
      case 'withdrawNonceAccount':
        return SO(n);
      case 'initializeNonceAccount':
        return NO(n);
      case 'authorizeNonceAccount':
        return vO(n);
      case 'allocate':
        return PO(n);
      case 'allocateWithSeed':
        return MO(n);
      case 'assignWithSeed':
        return kO(n);
      case 'transferWithSeed':
        return DO(n);
      default:
        throw new Error('Invalid instruction: '.concat(e));
    }
  }
  encodeState(e, n) {
    throw new Error('System does not have state');
  }
}
Li.SystemInstructionCoder = yO;
class TO extends Re.Layout {
  constructor(e) {
    super(-1, e),
      (this.property = e),
      (this.layout = Re.struct(
        [Re.u32('length'), Re.u32('lengthPadding'), Re.blob(Re.offset(Re.u32(), -8), 'chars')],
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
      Re.u32().span +
      Re.u32().span +
      new RO.default(new Uint8Array(e).slice(n, n + 4), 10, 'le').toNumber()
    );
  }
}
function Ui(t) {
  return new TO(t);
}
function pt(t) {
  return Re.blob(32, t);
}
function EO({ lamports: t, space: e, owner: n }) {
  return mt({ createAccount: { lamports: t, space: e, owner: n.toBuffer() } });
}
function IO({ owner: t }) {
  return mt({ assign: { owner: t.toBuffer() } });
}
function wO({ lamports: t }) {
  return mt({ transfer: { lamports: t } });
}
function bO({ base: t, seed: e, lamports: n, space: r, owner: o }) {
  return mt(
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
function NO({ authorized: t }) {
  return mt({ initializeNonceAccount: { authorized: t.toBuffer() } });
}
function CO({ authorized: t }) {
  return mt({ advanceNonceAccount: { authorized: t.toBuffer() } });
}
function SO({ lamports: t }) {
  return mt({ withdrawNonceAccount: { lamports: t } });
}
function vO({ authorized: t }) {
  return mt({ authorizeNonceAccount: { authorized: t.toBuffer() } });
}
function PO({ space: t }) {
  return mt({ allocate: { space: t } });
}
function MO({ base: t, seed: e, space: n, owner: r }) {
  return mt(
    { allocateWithSeed: { base: t.toBuffer(), seed: e, space: n, owner: r.toBuffer() } },
    He.getVariant(9).span + e.length
  );
}
function kO({ base: t, seed: e, owner: n }) {
  return mt(
    { assignWithSeed: { base: t.toBuffer(), seed: e, owner: n.toBuffer() } },
    He.getVariant(10).span + e.length
  );
}
function DO({ lamports: t, seed: e, owner: n }) {
  return mt(
    { transferWithSeed: { lamports: t, seed: e, owner: n.toBuffer() } },
    He.getVariant(11).span + e.length
  );
}
const He = Re.union(Re.u32('instruction'));
He.addVariant(0, Re.struct([Re.ns64('lamports'), Re.ns64('space'), pt('owner')]), 'createAccount');
He.addVariant(1, Re.struct([pt('owner')]), 'assign');
He.addVariant(2, Re.struct([Re.ns64('lamports')]), 'transfer');
He.addVariant(
  3,
  Re.struct([pt('base'), Ui('seed'), Re.ns64('lamports'), Re.ns64('space'), pt('owner')]),
  'createAccountWithSeed'
);
He.addVariant(4, Re.struct([pt('authorized')]), 'advanceNonceAccount');
He.addVariant(5, Re.struct([Re.ns64('lamports')]), 'withdrawNonceAccount');
He.addVariant(6, Re.struct([pt('authorized')]), 'initializeNonceAccount');
He.addVariant(7, Re.struct([pt('authorized')]), 'authorizeNonceAccount');
He.addVariant(8, Re.struct([Re.ns64('space')]), 'allocate');
He.addVariant(
  9,
  Re.struct([pt('base'), Ui('seed'), Re.ns64('space'), pt('owner')]),
  'allocateWithSeed'
);
He.addVariant(10, Re.struct([pt('base'), Ui('seed'), pt('owner')]), 'assignWithSeed');
He.addVariant(11, Re.struct([Re.ns64('lamports'), Ui('seed'), pt('owner')]), 'transferWithSeed');
function mt(t, e) {
  const n = ie.Buffer.alloc(e != null ? e : xO),
    r = He.encode(t, n);
  return e === void 0 ? n.slice(0, r) : n;
}
const xO = Math.max(...Object.values(He.registry).map((t) => t.span));
var $i = {},
  BO =
    (w && w.__createBinding) ||
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
  LO =
    (w && w.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  UO =
    (w && w.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null)
        for (var n in t)
          n !== 'default' && Object.prototype.hasOwnProperty.call(t, n) && BO(e, t, n);
      return LO(e, t), e;
    };
Object.defineProperty($i, '__esModule', { value: !0 });
$i.SystemAccountsCoder = void 0;
const _n = UO(bi),
  ss = _e,
  $O = Ut;
class jO {
  constructor(e) {
    this.idl = e;
  }
  async encode(e, n) {
    switch (e) {
      case 'nonce': {
        const r = ie.Buffer.alloc(ss.NONCE_ACCOUNT_LENGTH),
          o = zf.encode(n, r);
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
        return HO(n);
      default:
        throw new Error('Invalid account name: '.concat(e));
    }
  }
  memcmp(e, n) {
    switch (e) {
      case 'nonce':
        return { dataSize: ss.NONCE_ACCOUNT_LENGTH };
      default:
        throw new Error('Invalid account name: '.concat(e));
    }
  }
  size(e) {
    return $O.IdlCoder.typeSize({ defined: { name: e } }, this.idl);
  }
}
$i.SystemAccountsCoder = jO;
function HO(t) {
  return zf.decode(t);
}
let GO = class extends _n.Layout {
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
  return new GO(
    _n.blob(32),
    (e) => new ss.PublicKey(e),
    (e) => e.toBuffer(),
    t
  );
}
const zf = _n.struct([
  _n.u32('version'),
  _n.u32('state'),
  Fc('authorizedPubkey'),
  Fc('nonce'),
  _n.struct([_n.nu64('lamportsPerSignature')], 'feeCalculator'),
]);
var ji = {};
Object.defineProperty(ji, '__esModule', { value: !0 });
ji.SystemEventsCoder = void 0;
class FO {
  constructor(e) {}
  decode(e) {
    throw new Error('System program does not have events');
  }
}
ji.SystemEventsCoder = FO;
var Hi = {};
Object.defineProperty(Hi, '__esModule', { value: !0 });
Hi.SystemTypesCoder = void 0;
class KO {
  constructor(e) {}
  encode(e, n) {
    throw new Error('System does not have user-defined types');
  }
  decode(e, n) {
    throw new Error('System does not have user-defined types');
  }
}
Hi.SystemTypesCoder = KO;
Object.defineProperty(Kr, '__esModule', { value: !0 });
Kr.SystemCoder = void 0;
const VO = Li,
  WO = $i,
  qO = ji,
  zO = Hi;
class YO {
  constructor(e) {
    (this.instruction = new VO.SystemInstructionCoder(e)),
      (this.accounts = new WO.SystemAccountsCoder(e)),
      (this.events = new qO.SystemEventsCoder(e)),
      (this.types = new zO.SystemTypesCoder(e));
  }
}
Kr.SystemCoder = YO;
var Kc;
function Gi() {
  return (
    Kc ||
      ((Kc = 1),
      (function (t) {
        var e =
            (w && w.__createBinding) ||
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
            (w && w.__exportStar) ||
            function (r, o) {
              for (var i in r)
                i !== 'default' && !Object.prototype.hasOwnProperty.call(o, i) && e(o, r, i);
            };
        Object.defineProperty(t, '__esModule', { value: !0 }), n(hO(), t), n(Kr, t);
      })(So)),
    So
  );
}
var We = {},
  Fi = {};
const Yf = Br(A_);
Object.defineProperty(Fi, '__esModule', { value: !0 });
Fi.hash = void 0;
const XO = Yf;
function JO(t) {
  return new TextDecoder().decode((0, XO.sha256)(t));
}
Fi.hash = JO;
var Ki = {};
Object.defineProperty(Ki, '__esModule', { value: !0 });
Ki.createWithSeedSync = void 0;
const Vc = Pe,
  QO = _e,
  ZO = Yf;
function eR(t, e, n) {
  const r = Vc.Buffer.concat([t.toBuffer(), Vc.Buffer.from(e), n.toBuffer()]);
  return new QO.PublicKey((0, ZO.sha256)(r));
}
Ki.createWithSeedSync = eR;
var Xf = {};
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
})(Xf);
var Xt = {},
  tR =
    (w && w.__createBinding) ||
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
  nR =
    (w && w.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  rR =
    (w && w.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null)
        for (var n in t)
          n !== 'default' && Object.prototype.hasOwnProperty.call(t, n) && tR(e, t, n);
      return nR(e, t), e;
    },
  iR =
    (w && w.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(Xt, '__esModule', { value: !0 });
Xt.decodeUpgradeableLoaderState = Xt.fetchData = Xt.verifiedBuild = void 0;
const oR = iR(O_),
  ct = rR(me);
async function sR(t, e, n = 5) {
  const r = 'https://api.apr.dev/api/v0/program/'.concat(e.toString(), '/latest?limit=').concat(n),
    [o, i] = await Promise.all([Jf(t, e), (0, oR.default)(r)]),
    u = (await i.json()).filter(
      (p) => !p.aborted && p.state === 'Built' && p.verified === 'Verified'
    );
  if (u.length === 0) return null;
  const d = u[0];
  return o.slot.toNumber() !== d.verified_slot ? null : d;
}
Xt.verifiedBuild = sR;
async function Jf(t, e) {
  const n = await t.getAccountInfo(e);
  if (n === null) throw new Error('program account not found');
  const { program: r } = as(n.data),
    o = await t.getAccountInfo(r.programdataAddress);
  if (o === null) throw new Error('program data account not found');
  const { programData: i } = as(o.data);
  return i;
}
Xt.fetchData = Jf;
const aR = ct.rustEnum(
  [
    ct.struct([], 'uninitialized'),
    ct.struct([ct.option(ct.publicKey(), 'authorityAddress')], 'buffer'),
    ct.struct([ct.publicKey('programdataAddress')], 'program'),
    ct.struct(
      [ct.u64('slot'), ct.option(ct.publicKey(), 'upgradeAuthorityAddress')],
      'programData'
    ),
  ],
  void 0,
  ct.u32()
);
function as(t) {
  return aR.decode(t);
}
Xt.decodeUpgradeableLoaderState = as;
var uR =
    (w && w.__createBinding) ||
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
  cR =
    (w && w.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  yn =
    (w && w.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null)
        for (var n in t)
          n !== 'default' && Object.prototype.hasOwnProperty.call(t, n) && uR(e, t, n);
      return cR(e, t), e;
    };
Object.defineProperty(We, '__esModule', { value: !0 });
We.registry = We.features = We.token = We.bytes = We.publicKey = We.rpc = We.sha256 = void 0;
We.sha256 = yn(Fi);
We.rpc = yn(bu());
We.publicKey = yn(Ki);
We.bytes = yn(dt);
We.token = yn(Xf);
We.features = yn(Zt);
We.registry = yn(Xt);
var Mo = {};
const lR = Br(R_);
var ko = {},
  Nu = {},
  nn = {};
Object.defineProperty(nn, '__esModule', { value: !0 });
nn.splitArgsAndCtx = void 0;
function dR(t, e) {
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
nn.splitArgsAndCtx = dR;
var fR =
    (w && w.__createBinding) ||
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
  pR =
    (w && w.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  _R =
    (w && w.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null)
        for (var n in t)
          n !== 'default' && Object.prototype.hasOwnProperty.call(t, n) && fR(e, t, n);
      return pR(e, t), e;
    };
Object.defineProperty(Nu, '__esModule', { value: !0 });
const hR = _e,
  mR = Le,
  gR = qn,
  Do = qe,
  AR = nn,
  OR = _R(Zt);
class Ii {
  static build(e, n, r) {
    if (e.name === '_inner') throw new gR.IdlError('the _inner name is reserved');
    const o = (...i) => {
      const [u, d] = (0, AR.splitArgsAndCtx)(e, [...i]);
      (0, Do.validateAccounts)(e.accounts, d.accounts), RR(e, ...i);
      const p = o.accounts(d.accounts);
      return (
        d.remainingAccounts !== void 0 && p.push(...d.remainingAccounts),
        OR.isSet('debug-logs') && console.log('Outgoing account metas:', p),
        new hR.TransactionInstruction({
          keys: p,
          programId: r,
          data: n(e.name, (0, Do.toInstruction)(e, ...u)),
        })
      );
    };
    return (o.accounts = (i) => Ii.accountsArray(i, e.accounts, r, e.name)), o;
  }
  static accountsArray(e, n, r, o) {
    return e
      ? n
          .map((i) => {
            if ((0, mR.isCompositeAccounts)(i)) {
              const _ = e[i.name];
              return Ii.accountsArray(_, i.accounts, r, o).flat();
            }
            let u;
            try {
              u = (0, Do.translateAddress)(e[i.name]);
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
              p = !!(i.writable && !d),
              a = !!(i.signer && !d);
            return { pubkey: u, isWritable: p, isSigner: a };
          })
          .flat()
      : [];
  }
}
Nu.default = Ii;
function RR(t, ...e) {}
var Cu = {};
Object.defineProperty(Cu, '__esModule', { value: !0 });
const yR = _e,
  TR = nn;
class ER {
  static build(e, n) {
    return (...o) => {
      var i, u, d;
      const [, p] = (0, TR.splitArgsAndCtx)(e, [...o]),
        a = new yR.Transaction();
      if (p.preInstructions && p.instructions)
        throw new Error('instructions is deprecated, use preInstructions');
      return (
        (i = p.preInstructions) === null || i === void 0 || i.forEach((_) => a.add(_)),
        (u = p.instructions) === null || u === void 0 || u.forEach((_) => a.add(_)),
        a.add(n(...o)),
        (d = p.postInstructions) === null || d === void 0 || d.forEach((_) => a.add(_)),
        a
      );
    };
  }
}
Cu.default = ER;
var Su = {};
Object.defineProperty(Su, '__esModule', { value: !0 });
const IR = nn,
  wR = qn;
class bR {
  static build(e, n, r, o) {
    return async (...u) => {
      var d;
      const p = n(...u),
        [, a] = (0, IR.splitArgsAndCtx)(e, [...u]);
      if (o.sendAndConfirm === void 0)
        throw new Error("This function requires 'Provider.sendAndConfirm' to be implemented.");
      try {
        return await o.sendAndConfirm(
          p,
          (d = a.signers) !== null && d !== void 0 ? d : [],
          a.options
        );
      } catch (_) {
        throw (0, wR.translateError)(_, r);
      }
    };
  }
}
Su.default = bR;
var Fn = {},
  NR =
    (w && w.__createBinding) ||
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
  CR =
    (w && w.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  SR =
    (w && w.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null)
        for (var n in t)
          n !== 'default' && Object.prototype.hasOwnProperty.call(t, n) && NR(e, t, n);
      return CR(e, t), e;
    },
  vR =
    (w && w.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(Fn, '__esModule', { value: !0 });
Fn.AccountClient = void 0;
const PR = vR(y_),
  MR = _e,
  kR = xi(),
  DR = Gi(),
  pi = qe,
  xR = SR(bu());
class BR {
  static build(e, n, r, o) {
    var i;
    return ((i = e.accounts) !== null && i !== void 0 ? i : []).reduce(
      (u, d) => ((u[d.name] = new Qf(e, d, r, o, n)), u),
      {}
    );
  }
}
Fn.default = BR;
class Qf {
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
      (this._provider = o != null ? o : (0, kR.getProvider)()),
      (this._coder = i != null ? i : new DR.BorshCoder(e)),
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
      await xR.getMultipleAccountsAndContext(
        this._provider.connection,
        e.map((o) => (0, pi.translateAddress)(o)),
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
      ).map(({ pubkey: i, account: u }) => ({
        publicKey: i,
        account: this._coder.accounts.decode(this._idlAccount.name, u.data),
      }))
    );
  }
  subscribe(e, n) {
    const r = ir.get(e.toString());
    if (r) return r.ee;
    const o = new PR.default();
    e = (0, pi.translateAddress)(e);
    const i = this._provider.connection.onAccountChange(
      e,
      (u) => {
        const d = this._coder.accounts.decode(this._idlAccount.name, u.data);
        o.emit('change', d);
      },
      n
    );
    return ir.set(e.toString(), { ee: o, listener: i }), o;
  }
  async unsubscribe(e) {
    let n = ir.get(e.toString());
    if (!n) {
      console.warn('Address is not subscribed');
      return;
    }
    ir &&
      (await this._provider.connection
        .removeAccountChangeListener(n.listener)
        .then(() => {
          ir.delete(e.toString());
        })
        .catch(console.error));
  }
  async createInstruction(e, n) {
    const r = this.size;
    if (this._provider.publicKey === void 0)
      throw new Error(
        "This function requires the Provider interface implementor to have a 'publicKey' field."
      );
    return MR.SystemProgram.createAccount({
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
    return await this._provider.connection.getAccountInfo((0, pi.translateAddress)(e), n);
  }
  async getAccountInfoAndContext(e, n) {
    return await this._provider.connection.getAccountInfoAndContext((0, pi.translateAddress)(e), n);
  }
}
Fn.AccountClient = Qf;
const ir = new Map();
var vu = {},
  en = {};
Object.defineProperty(en, '__esModule', { value: !0 });
en.EventParser = en.EventManager = void 0;
const us = 'Program log: ',
  Zf = 'Program data: ',
  LR = us.length,
  UR = Zf.length;
class $R {
  constructor(e, n, r) {
    (this._programId = e),
      (this._provider = n),
      (this._eventParser = new ep(e, r)),
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
              const p = this._eventListeners.get(d.name);
              p &&
                p.forEach((a) => {
                  const _ = this._eventCallbacks.get(a);
                  if (_) {
                    const [, A] = _;
                    A(d.data, u.slot, i.signature);
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
en.EventManager = $R;
class ep {
  constructor(e, n) {
    (this.coder = n), (this.programId = e);
  }
  *parseLogs(e, n = !1) {
    const r = new HR(e),
      o = new jR();
    let i = r.next();
    for (; i !== null; ) {
      let [u, d, p] = this.handleLog(o, i, n);
      u && (yield u), d && o.push(d), p && o.pop(), (i = r.next());
    }
  }
  handleLog(e, n, r) {
    return e.stack.length > 0 && e.program() === this.programId.toString()
      ? this.handleProgramLog(n, r)
      : [null, ...this.handleSystemLog(n)];
  }
  handleProgramLog(e, n) {
    if (e.startsWith(us) || e.startsWith(Zf)) {
      const r = e.startsWith(us) ? e.slice(LR) : e.slice(UR),
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
en.EventParser = ep;
class jR {
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
class HR {
  constructor(e) {
    this.logs = e;
  }
  next() {
    if (this.logs.length === 0) return null;
    let e = this.logs[0];
    return (this.logs = this.logs.slice(1)), e;
  }
}
Object.defineProperty(vu, '__esModule', { value: !0 });
const GR = nn,
  FR = en,
  KR = qn;
class VR {
  static build(e, n, r, o, i, u, d) {
    return async (...a) => {
      var _;
      const A = n(...a),
        [, h] = (0, GR.splitArgsAndCtx)(e, [...a]);
      let m;
      if (o.simulate === void 0)
        throw new Error("This function requires 'Provider.simulate' to be implemented.");
      try {
        m = await o.simulate(
          A,
          h.signers,
          (_ = h.options) === null || _ === void 0 ? void 0 : _.commitment
        );
      } catch (b) {
        throw (0, KR.translateError)(b, r);
      }
      if (m === void 0) throw new Error('Unable to simulate transaction');
      const g = m.logs;
      if (!g) throw new Error('Simulated logs not found');
      const R = [];
      if (d.events) {
        let b = new FR.EventParser(u, i);
        for (const N of b.parseLogs(g)) R.push(N);
      }
      return { events: R, raw: g };
    };
  }
}
vu.default = VR;
var Ot = {},
  dn = {},
  Vi = {},
  WR =
    (w && w.__createBinding) ||
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
  qR =
    (w && w.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  zR =
    (w && w.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null)
        for (var n in t)
          n !== 'default' && Object.prototype.hasOwnProperty.call(t, n) && WR(e, t, n);
      return qR(e, t), e;
    },
  YR =
    (w && w.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(Vi, '__esModule', { value: !0 });
Vi.decodeTokenAccount = void 0;
const XR = YR(Je),
  kt = zR(bi),
  tp = bi,
  JR = _e;
function xo(t) {
  return new np(
    kt.blob(8),
    (e) => Pu.fromBuffer(e),
    (e) => e.toBuffer(),
    t
  );
}
function _i(t) {
  return new np(
    kt.blob(32),
    (e) => new JR.PublicKey(e),
    (e) => e.toBuffer(),
    t
  );
}
function Bo(t, e) {
  return new QR(t, e);
}
class np extends tp.Layout {
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
class QR extends tp.Layout {
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
class Pu extends XR.default {
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
    return new Pu(
      [...e]
        .reverse()
        .map((n) => '00'.concat(n.toString(16)).slice(-2))
        .join(''),
      16
    );
  }
}
const ZR = kt.struct([
  _i('mint'),
  _i('owner'),
  xo('amount'),
  Bo(_i(), 'delegate'),
  ((t) => {
    const e = kt.union(kt.u8('discriminator'), null, t);
    return (
      e.addVariant(0, kt.struct([]), 'uninitialized'),
      e.addVariant(1, kt.struct([]), 'initialized'),
      e.addVariant(2, kt.struct([]), 'frozen'),
      e
    );
  })('state'),
  Bo(xo(), 'isNative'),
  xo('delegatedAmount'),
  Bo(_i(), 'closeAuthority'),
]);
function ey(t) {
  return ZR.decode(t);
}
Vi.decodeTokenAccount = ey;
var Wc;
function ty() {
  if (Wc) return dn;
  Wc = 1;
  var t =
    (w && w.__importDefault) ||
    function (_) {
      return _ && _.__esModule ? _ : { default: _ };
    };
  Object.defineProperty(dn, '__esModule', { value: !0 }),
    (dn.AccountsResolver = dn.isAccountsGeneric = void 0);
  const e = t(Je),
    n = _e,
    r = Le,
    o = Vi,
    i = Wi(),
    u = cs();
  function d(_) {
    return !(_ instanceof n.PublicKey);
  }
  dn.isAccountsGeneric = d;
  class p {
    constructor(A, h, m, g, R, b, N, P) {
      (this._args = A),
        (this._accounts = h),
        (this._provider = m),
        (this._programId = g),
        (this._idlIx = R),
        (this._idlTypes = N),
        (this._customResolver = P),
        (this._accountStore = new a(m, b, g));
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
        var b;
        R === A.length - 1 && (m[g] = h),
          (m[g] = (b = m[g]) !== null && b !== void 0 ? b : {}),
          (m = m[g]);
      });
    }
    resolveOptionalsHelper(A, h) {
      const m = {};
      for (const g of h) {
        const R = g.name,
          b = A[R];
        b !== void 0 &&
          ((0, u.isPartialAccounts)(b)
            ? (0, r.isCompositeAccounts)(g)
              ? (m[R] = this.resolveOptionalsHelper(b, g.accounts))
              : (m[R] = (0, u.flattenPartialAccounts)(b, !0))
            : b !== null
              ? (m[R] = (0, i.translateAddress)(b))
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
        const b = A[m].name,
          N = A[R].name;
        if (b === 'eventAuthority' && N === 'program') {
          const P = [...h, b],
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
          const b = g;
          if ((b.pda || b.relations) && !this.get([...h, R])) {
            m++;
            try {
              if (b.pda) {
                const N = await Promise.all(b.pda.seeds.map((x) => this.toBuffer(x, h)));
                if (N.some((x) => !x)) continue;
                const P = await this.parseProgramId(b, h),
                  [I] = n.PublicKey.findProgramAddressSync(N, P);
                this.set([...h, R], I);
              }
            } catch (N) {}
            try {
              if (b.relations) {
                const N = this.get([...h, b.relations[0]]);
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
      const b = this.getType(this._idlIx.args[g].type, m);
      return this.toBufferValue(b, R);
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
        const R = this._idlTypes.find((x) => x.name === g);
        if (!R) throw new Error('Type not found: '.concat(g));
        const [b, ...N] = h,
          I = R.type.fields.find((x) => x.name === b);
        if (!I) throw new Error('Field not found: '.concat(b));
        return this.getType(I.type, N);
      }
      return A;
    }
  }
  dn.AccountsResolver = p;
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
            const b = Object.values(R)[0];
            if (b) {
              const N = b.coder.accounts.decodeAny(g.data);
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
  return dn;
}
var qc;
function cs() {
  if (qc) return Ot;
  (qc = 1),
    Object.defineProperty(Ot, '__esModule', { value: !0 }),
    (Ot.MethodsBuilder =
      Ot.flattenPartialAccounts =
      Ot.isPartialAccounts =
      Ot.MethodsBuilderFactory =
        void 0);
  const t = ty(),
    e = qe;
  class n {
    static build(d, p, a, _, A, h, m, g, R, b, N) {
      return (...P) => new i(P, _, A, h, m, g, d, p, a, R, b, N);
    }
  }
  Ot.MethodsBuilderFactory = n;
  function r(u) {
    return typeof u == 'object' && u !== null && !('_bn' in u);
  }
  Ot.isPartialAccounts = r;
  function o(u, d) {
    const p = {};
    for (const a in u) {
      const _ = u[a];
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
  Ot.flattenPartialAccounts = o;
  class i {
    constructor(d, p, a, _, A, h, m, g, R, b, N, P) {
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
        (this._accountsResolver = new t.AccountsResolver(d, this._accounts, m, g, R, b, N, P));
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
  return (Ot.MethodsBuilder = i), Ot;
}
var Mu = {};
Object.defineProperty(Mu, '__esModule', { value: !0 });
const ny = Ut,
  ry = Qt;
class iy {
  static build(e, n, r, o) {
    const i = n.accounts.find((p) => p.writable),
      u = !!n.returns;
    return i || !u
      ? void 0
      : async (...p) => {
          let a = await r(...p);
          const _ = 'Program return: '.concat(e, ' ');
          let A = a.raw.find((R) => R.startsWith(_));
          if (!A) throw new Error('View expected return log');
          let h = (0, ry.decode)(A.slice(_.length)),
            m = n.returns;
          if (!m) throw new Error('View expected return type');
          return ny.IdlCoder.fieldLayout({ type: m }, o.types).decode(h);
        };
  }
}
Mu.default = iy;
var zc;
function Yc() {
  return (
    zc ||
      ((zc = 1),
      (function (t) {
        var e =
          (w && w.__importDefault) ||
          function (m) {
            return m && m.__esModule ? m : { default: m };
          };
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.MethodsBuilderFactory = t.AccountClient = void 0);
        const n = e(Nu),
          r = e(Cu),
          o = e(Su),
          i = e(Fn),
          u = e(vu),
          d = qe,
          p = cs(),
          a = e(Mu);
        var _ = Fn;
        Object.defineProperty(t, 'AccountClient', {
          enumerable: !0,
          get: function () {
            return _.AccountClient;
          },
        });
        var A = cs();
        Object.defineProperty(t, 'MethodsBuilderFactory', {
          enumerable: !0,
          get: function () {
            return A.MethodsBuilderFactory;
          },
        });
        class h {
          static build(g, R, b, N, P) {
            const I = {},
              x = {},
              F = {},
              $ = {},
              T = {},
              y = {},
              v = (0, d.parseIdlErrors)(g),
              M = g.accounts ? i.default.build(g, R, b, N) : {};
            return (
              g.instructions.forEach((G) => {
                const J = n.default.build(G, (V, te) => R.instruction.encode(V, te), b),
                  z = r.default.build(G, J),
                  S = o.default.build(G, z, v, N),
                  k = u.default.build(G, z, v, N, R, b, g),
                  q = a.default.build(b, G, k, g),
                  ee = p.MethodsBuilderFactory.build(
                    N,
                    b,
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
                  j = G.name;
                (x[j] = J), (F[j] = z), (I[j] = S), ($[j] = k), (T[j] = ee), q && (y[j] = q);
              }),
              [I, x, F, M, $, T, y]
            );
          }
        }
        t.default = h;
      })(ko)),
    ko
  );
}
var Xc;
function Wi() {
  return (
    Xc ||
      ((Xc = 1),
      (function (t) {
        var e =
            (w && w.__createBinding) ||
            (Object.create
              ? function (m, g, R, b) {
                  b === void 0 && (b = R);
                  var N = Object.getOwnPropertyDescriptor(g, R);
                  (!N || ('get' in N ? !g.__esModule : N.writable || N.configurable)) &&
                    (N = {
                      enumerable: !0,
                      get: function () {
                        return g[R];
                      },
                    }),
                    Object.defineProperty(m, b, N);
                }
              : function (m, g, R, b) {
                  b === void 0 && (b = R), (m[b] = g[R]);
                }),
          n =
            (w && w.__exportStar) ||
            function (m, g) {
              for (var R in m)
                R !== 'default' && !Object.prototype.hasOwnProperty.call(g, R) && e(g, m, R);
            },
          r =
            (w && w.__importDefault) ||
            function (m) {
              return m && m.__esModule ? m : { default: m };
            };
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Program = void 0);
        const o = lR,
          i = xi(),
          u = Le,
          d = Gi(),
          p = r(Yc()),
          a = dt,
          _ = en,
          A = qe;
        n(qe, t), n(nn, t), n(en, t), n(Yc(), t);
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
          constructor(g, R = (0, i.getProvider)(), b, N) {
            const P = (0, u.convertIdlToCamelCase)(g);
            (this._idl = P),
              (this._rawIdl = g),
              (this._provider = R),
              (this._programId = (0, A.translateAddress)(g.address)),
              (this._coder = b != null ? b : new d.BorshCoder(P)),
              (this._events = new _.EventManager(this._programId, R, this._coder));
            const [I, x, F, $, T, y, v] = p.default.build(P, this._coder, this._programId, R, N);
            (this.rpc = I),
              (this.instruction = x),
              (this.transaction = F),
              (this.account = $),
              (this.simulate = T),
              (this.methods = y),
              (this.views = v);
          }
          static async at(g, R) {
            const b = (0, A.translateAddress)(g),
              N = await h.fetchIdl(b, R);
            if (!N) throw new Error('IDL not found for program: '.concat(g.toString()));
            return new h(N, R);
          }
          static async fetchIdl(g, R) {
            R = R != null ? R : (0, i.getProvider)();
            const b = (0, A.translateAddress)(g),
              N = await (0, u.idlAddress)(b),
              P = await R.connection.getAccountInfo(N);
            if (!P) return null;
            let I = (0, u.decodeIdlAccount)(P.data.slice(8));
            const x = (0, o.inflate)(I.data);
            return JSON.parse(a.utf8.decode(x));
          }
          addEventListener(g, R) {
            return this._events.addEventListener(g, R);
          }
          async removeEventListener(g) {
            return await this._events.removeEventListener(g);
          }
        }
        t.Program = h;
      })(Mo)),
    Mo
  );
}
var qi = {},
  rp = {};
(function (t) {
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.IDL = t.coder = t.program = t.SYSTEM_PROGRAM_ID = void 0);
  const e = _e,
    n = Wi(),
    r = Kr;
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
})(rp);
Object.defineProperty(qi, '__esModule', { value: !0 });
qi.Native = void 0;
const oy = rp;
class sy {
  static system(e) {
    return (0, oy.program)(e);
  }
}
qi.Native = sy;
var hi = {},
  Lo,
  Jc;
function ay() {
  return (
    Jc ||
      ((Jc = 1),
      (Lo = (function () {
        function t(r, o) {
          function i() {
            this.constructor = r;
          }
          (i.prototype = o.prototype), (r.prototype = new i());
        }
        function e(r, o, i, u, d, p) {
          (this.message = r),
            (this.expected = o),
            (this.found = i),
            (this.offset = u),
            (this.line = d),
            (this.column = p),
            (this.name = 'SyntaxError');
        }
        t(e, Error);
        function n(r) {
          var o = arguments.length > 1 ? arguments[1] : {},
            i = {},
            u = { start: Wu },
            d = Wu,
            p = function () {
              return dc;
            },
            a = i,
            _ = '#',
            A = { type: 'literal', value: '#', description: '"#"' },
            h = void 0,
            m = { type: 'any', description: 'any character' },
            g = '[',
            R = { type: 'literal', value: '[', description: '"["' },
            b = ']',
            N = { type: 'literal', value: ']', description: '"]"' },
            P = function (s) {
              go(Ke('ObjectPath', s, Ge, Fe));
            },
            I = function (s) {
              go(Ke('ArrayPath', s, Ge, Fe));
            },
            x = function (s, f) {
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
              go(Ke('Assign', f, Ge, Fe, s));
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
              return Ke('String', s.join(''), Ge, Fe);
            },
            j = '"',
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
            It = 'e',
            jt = { type: 'literal', value: 'e', description: '"e"' },
            In = 'E',
            wn = { type: 'literal', value: 'E', description: '"E"' },
            bn = function (s, f) {
              return Ke('Float', parseFloat(s + 'e' + f), Ge, Fe);
            },
            wt = function (s) {
              return Ke('Float', parseFloat(s), Ge, Fe);
            },
            rn = '+',
            Jn = { type: 'literal', value: '+', description: '"+"' },
            zr = function (s) {
              return s.join('');
            },
            Ht = '-',
            Tt = { type: 'literal', value: '-', description: '"-"' },
            Yr = function (s) {
              return '-' + s.join('');
            },
            Xi = function (s) {
              return Ke('Integer', parseInt(s, 10), Ge, Fe);
            },
            Xr = 'true',
            Ji = { type: 'literal', value: 'true', description: '"true"' },
            Qi = function () {
              return Ke('Boolean', !0, Ge, Fe);
            },
            Jr = 'false',
            Zi = { type: 'literal', value: 'false', description: '"false"' },
            eo = function () {
              return Ke('Boolean', !1, Ge, Fe);
            },
            to = function () {
              return Ke('Array', [], Ge, Fe);
            },
            no = function (s) {
              return Ke('Array', s ? [s] : [], Ge, Fe);
            },
            ro = function (s) {
              return Ke('Array', s, Ge, Fe);
            },
            io = function (s, f) {
              return Ke('Array', s.concat(f), Ge, Fe);
            },
            Qr = function (s) {
              return s;
            },
            Zr = ',',
            Qn = { type: 'literal', value: ',', description: '","' },
            oo = '{',
            ei = { type: 'literal', value: '{', description: '"{"' },
            so = '}',
            ao = { type: 'literal', value: '}', description: '"}"' },
            uo = function (s) {
              return Ke('InlineTable', s, Ge, Fe);
            },
            bt = function (s, f) {
              return Ke('InlineTableValue', f, Ge, Fe, s);
            },
            co = function (s) {
              return '.' + s;
            },
            lo = function (s) {
              return s.join('');
            },
            on = ':',
            sn = { type: 'literal', value: ':', description: '":"' },
            D = function (s) {
              return s.join('');
            },
            H = 'T',
            K = { type: 'literal', value: 'T', description: '"T"' },
            re = 'Z',
            de = { type: 'literal', value: 'Z', description: '"Z"' },
            ye = function (s, f) {
              return Ke('Date', new Date(s + 'T' + f + 'Z'), Ge, Fe);
            },
            Ye = function (s, f) {
              return Ke('Date', new Date(s + 'T' + f), Ge, Fe);
            },
            an = /^[ \t]/,
            Nn = { type: 'class', value: '[ \\t]', description: '[ \\t]' },
            Gt = '\n',
            xu = { type: 'literal', value: '\n', description: '"\\n"' },
            pp = '\r',
            _p = { type: 'literal', value: '\r', description: '"\\r"' },
            hp = /^[0-9a-f]/i,
            mp = { type: 'class', value: '[0-9a-f]i', description: '[0-9a-f]i' },
            gp = /^[0-9]/,
            Ap = { type: 'class', value: '[0-9]', description: '[0-9]' },
            Op = '_',
            Rp = { type: 'literal', value: '_', description: '"_"' },
            yp = function () {
              return '';
            },
            Tp = /^[A-Za-z0-9_\-]/,
            Ep = { type: 'class', value: '[A-Za-z0-9_\\-]', description: '[A-Za-z0-9_\\-]' },
            Ip = function (s) {
              return s.join('');
            },
            Bu = '\\"',
            wp = { type: 'literal', value: '\\"', description: '"\\\\\\""' },
            bp = function () {
              return '"';
            },
            Lu = '\\\\',
            Np = { type: 'literal', value: '\\\\', description: '"\\\\\\\\"' },
            Cp = function () {
              return '\\';
            },
            Uu = '\\b',
            Sp = { type: 'literal', value: '\\b', description: '"\\\\b"' },
            vp = function () {
              return '\b';
            },
            $u = '\\t',
            Pp = { type: 'literal', value: '\\t', description: '"\\\\t"' },
            Mp = function () {
              return '	';
            },
            ju = '\\n',
            kp = { type: 'literal', value: '\\n', description: '"\\\\n"' },
            Dp = function () {
              return '\n';
            },
            Hu = '\\f',
            xp = { type: 'literal', value: '\\f', description: '"\\\\f"' },
            Bp = function () {
              return '\f';
            },
            Gu = '\\r',
            Lp = { type: 'literal', value: '\\r', description: '"\\\\r"' },
            Up = function () {
              return '\r';
            },
            Fu = '\\U',
            $p = { type: 'literal', value: '\\U', description: '"\\\\U"' },
            Ku = function (s) {
              return s_(s.join(''));
            },
            Vu = '\\u',
            jp = { type: 'literal', value: '\\u', description: '"\\\\u"' },
            l = 0,
            fe = 0,
            Zn = 0,
            fo = { line: 1, column: 1, seenCR: !1 },
            ti = 0,
            po = [],
            X = 0,
            Q = {},
            ni;
          if ('startRule' in o) {
            if (!(o.startRule in u))
              throw new Error('Can\'t start parsing from rule "' + o.startRule + '".');
            d = u[o.startRule];
          }
          function Ge() {
            return _o(fe).line;
          }
          function Fe() {
            return _o(fe).column;
          }
          function _o(s) {
            function f(O, E, C) {
              var B, W;
              for (B = E; B < C; B++)
                (W = r.charAt(B)),
                  W === '\n'
                    ? (O.seenCR || O.line++, (O.column = 1), (O.seenCR = !1))
                    : W === '\r' || W === '\u2028' || W === '\u2029'
                      ? (O.line++, (O.column = 1), (O.seenCR = !0))
                      : (O.column++, (O.seenCR = !1));
            }
            return (
              Zn !== s &&
                (Zn > s && ((Zn = 0), (fo = { line: 1, column: 1, seenCR: !1 })),
                f(fo, Zn, s),
                (Zn = s)),
              fo
            );
          }
          function ne(s) {
            l < ti || (l > ti && ((ti = l), (po = [])), po.push(s));
          }
          function Hp(s, f, O) {
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
              function Ie(Sn) {
                function Ft(Ze) {
                  return Ze.charCodeAt(0).toString(16).toUpperCase();
                }
                return Sn.replace(/\\/g, '\\\\')
                  .replace(/"/g, '\\"')
                  .replace(/\x08/g, '\\b')
                  .replace(/\t/g, '\\t')
                  .replace(/\n/g, '\\n')
                  .replace(/\f/g, '\\f')
                  .replace(/\r/g, '\\r')
                  .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (Ze) {
                    return '\\x0' + Ft(Ze);
                  })
                  .replace(/[\x10-\x1F\x80-\xFF]/g, function (Ze) {
                    return '\\x' + Ft(Ze);
                  })
                  .replace(/[\u0180-\u0FFF]/g, function (Ze) {
                    return '\\u0' + Ft(Ze);
                  })
                  .replace(/[\u1080-\uFFFF]/g, function (Ze) {
                    return '\\u' + Ft(Ze);
                  });
              }
              var Te = new Array(ae.length),
                Me,
                xe,
                Qe;
              for (Qe = 0; Qe < ae.length; Qe++) Te[Qe] = ae[Qe].description;
              return (
                (Me =
                  ae.length > 1 ? Te.slice(0, -1).join(', ') + ' or ' + Te[ae.length - 1] : Te[0]),
                (xe = he ? '"' + Ie(he) + '"' : 'end of input'),
                'Expected ' + Me + ' but ' + xe + ' found.'
              );
            }
            var B = _o(O),
              W = O < r.length ? r.charAt(O) : null;
            return f !== null && E(f), new e(C(f, W), f, W, O, B.line, B.column);
          }
          function Wu() {
            var s,
              f,
              O,
              E = l * 49 + 0,
              C = Q[E];
            if (C) return (l = C.nextPos), C.result;
            for (s = l, f = [], O = qu(); O !== i; ) f.push(O), (O = qu());
            return f !== i && ((fe = s), (f = p())), (s = f), (Q[E] = { nextPos: l, result: s }), s;
          }
          function qu() {
            var s,
              f,
              O,
              E,
              C,
              B,
              W,
              ae = l * 49 + 1,
              he = Q[ae];
            if (he) return (l = he.nextPos), he.result;
            for (s = l, f = [], O = le(); O !== i; ) f.push(O), (O = le());
            if (f !== i)
              if (((O = Gp()), O !== i)) {
                for (E = [], C = le(); C !== i; ) E.push(C), (C = le());
                if (E !== i) {
                  for (C = [], B = ri(); B !== i; ) C.push(B), (B = ri());
                  if (C !== i) {
                    if (((B = []), (W = ot()), W !== i)) for (; W !== i; ) B.push(W), (W = ot());
                    else B = a;
                    B === i && (B = oi()),
                      B !== i ? ((f = [f, O, E, C, B]), (s = f)) : ((l = s), (s = a));
                  } else (l = s), (s = a);
                } else (l = s), (s = a);
              } else (l = s), (s = a);
            else (l = s), (s = a);
            if (s === i) {
              if (((s = l), (f = []), (O = le()), O !== i)) for (; O !== i; ) f.push(O), (O = le());
              else f = a;
              if (f !== i) {
                if (((O = []), (E = ot()), E !== i)) for (; E !== i; ) O.push(E), (E = ot());
                else O = a;
                O === i && (O = oi()), O !== i ? ((f = [f, O]), (s = f)) : ((l = s), (s = a));
              } else (l = s), (s = a);
              s === i && (s = ot());
            }
            return (Q[ae] = { nextPos: l, result: s }), s;
          }
          function Gp() {
            var s,
              f = l * 49 + 2,
              O = Q[f];
            return O
              ? ((l = O.nextPos), O.result)
              : ((s = ri()),
                s === i && ((s = Fp()), s === i && ((s = Kp()), s === i && (s = Vp()))),
                (Q[f] = { nextPos: l, result: s }),
                s);
          }
          function ri() {
            var s,
              f,
              O,
              E,
              C,
              B,
              W = l * 49 + 3,
              ae = Q[W];
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
                  B = ot(),
                  B === i && (B = oi()),
                  X--,
                  B === i ? (C = h) : ((l = C), (C = a)),
                  C !== i
                    ? (r.length > l ? ((B = r.charAt(l)), l++) : ((B = i), X === 0 && ne(m)),
                      B !== i ? ((C = [C, B]), (E = C)) : ((l = E), (E = a)))
                    : ((l = E), (E = a));
                E !== i;

              )
                O.push(E),
                  (E = l),
                  (C = l),
                  X++,
                  (B = ot()),
                  B === i && (B = oi()),
                  X--,
                  B === i ? (C = h) : ((l = C), (C = a)),
                  C !== i
                    ? (r.length > l ? ((B = r.charAt(l)), l++) : ((B = i), X === 0 && ne(m)),
                      B !== i ? ((C = [C, B]), (E = C)) : ((l = E), (E = a)))
                    : ((l = E), (E = a));
              O !== i ? ((f = [f, O]), (s = f)) : ((l = s), (s = a));
            } else (l = s), (s = a);
            return (Q[W] = { nextPos: l, result: s }), s;
          }
          function Fp() {
            var s,
              f,
              O,
              E,
              C,
              B,
              W = l * 49 + 4,
              ae = Q[W];
            if (ae) return (l = ae.nextPos), ae.result;
            if (
              ((s = l),
              r.charCodeAt(l) === 91 ? ((f = g), l++) : ((f = i), X === 0 && ne(R)),
              f !== i)
            ) {
              for (O = [], E = le(); E !== i; ) O.push(E), (E = le());
              if (O !== i)
                if (((E = zu()), E !== i)) {
                  for (C = [], B = le(); B !== i; ) C.push(B), (B = le());
                  C !== i
                    ? (r.charCodeAt(l) === 93 ? ((B = b), l++) : ((B = i), X === 0 && ne(N)),
                      B !== i ? ((fe = s), (f = P(E)), (s = f)) : ((l = s), (s = a)))
                    : ((l = s), (s = a));
                } else (l = s), (s = a);
              else (l = s), (s = a);
            } else (l = s), (s = a);
            return (Q[W] = { nextPos: l, result: s }), s;
          }
          function Kp() {
            var s,
              f,
              O,
              E,
              C,
              B,
              W,
              ae,
              he = l * 49 + 5,
              Ie = Q[he];
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
                  if (((C = zu()), C !== i)) {
                    for (B = [], W = le(); W !== i; ) B.push(W), (W = le());
                    B !== i
                      ? (r.charCodeAt(l) === 93 ? ((W = b), l++) : ((W = i), X === 0 && ne(N)),
                        W !== i
                          ? (r.charCodeAt(l) === 93
                              ? ((ae = b), l++)
                              : ((ae = i), X === 0 && ne(N)),
                            ae !== i ? ((fe = s), (f = I(C)), (s = f)) : ((l = s), (s = a)))
                          : ((l = s), (s = a)))
                      : ((l = s), (s = a));
                  } else (l = s), (s = a);
                else (l = s), (s = a);
              } else (l = s), (s = a);
            else (l = s), (s = a);
            return (Q[he] = { nextPos: l, result: s }), s;
          }
          function zu() {
            var s,
              f,
              O,
              E = l * 49 + 6,
              C = Q[E];
            if (C) return (l = C.nextPos), C.result;
            if (((s = l), (f = []), (O = Xu()), O !== i)) for (; O !== i; ) f.push(O), (O = Xu());
            else f = a;
            return (
              f !== i
                ? ((O = Yu()), O !== i ? ((fe = s), (f = x(f, O)), (s = f)) : ((l = s), (s = a)))
                : ((l = s), (s = a)),
              s === i && ((s = l), (f = Yu()), f !== i && ((fe = s), (f = F(f))), (s = f)),
              (Q[E] = { nextPos: l, result: s }),
              s
            );
          }
          function Yu() {
            var s,
              f,
              O,
              E,
              C,
              B = l * 49 + 7,
              W = Q[B];
            if (W) return (l = W.nextPos), W.result;
            for (s = l, f = [], O = le(); O !== i; ) f.push(O), (O = le());
            if (f !== i)
              if (((O = er()), O !== i)) {
                for (E = [], C = le(); C !== i; ) E.push(C), (C = le());
                E !== i ? ((fe = s), (f = $(O)), (s = f)) : ((l = s), (s = a));
              } else (l = s), (s = a);
            else (l = s), (s = a);
            if (s === i) {
              for (s = l, f = [], O = le(); O !== i; ) f.push(O), (O = le());
              if (f !== i)
                if (((O = ho()), O !== i)) {
                  for (E = [], C = le(); C !== i; ) E.push(C), (C = le());
                  E !== i ? ((fe = s), (f = $(O)), (s = f)) : ((l = s), (s = a));
                } else (l = s), (s = a);
              else (l = s), (s = a);
            }
            return (Q[B] = { nextPos: l, result: s }), s;
          }
          function Xu() {
            var s,
              f,
              O,
              E,
              C,
              B,
              W,
              ae = l * 49 + 8,
              he = Q[ae];
            if (he) return (l = he.nextPos), he.result;
            for (s = l, f = [], O = le(); O !== i; ) f.push(O), (O = le());
            if (f !== i)
              if (((O = er()), O !== i)) {
                for (E = [], C = le(); C !== i; ) E.push(C), (C = le());
                if (E !== i)
                  if (
                    (r.charCodeAt(l) === 46 ? ((C = T), l++) : ((C = i), X === 0 && ne(y)), C !== i)
                  ) {
                    for (B = [], W = le(); W !== i; ) B.push(W), (W = le());
                    B !== i ? ((fe = s), (f = $(O)), (s = f)) : ((l = s), (s = a));
                  } else (l = s), (s = a);
                else (l = s), (s = a);
              } else (l = s), (s = a);
            else (l = s), (s = a);
            if (s === i) {
              for (s = l, f = [], O = le(); O !== i; ) f.push(O), (O = le());
              if (f !== i)
                if (((O = ho()), O !== i)) {
                  for (E = [], C = le(); C !== i; ) E.push(C), (C = le());
                  if (E !== i)
                    if (
                      (r.charCodeAt(l) === 46 ? ((C = T), l++) : ((C = i), X === 0 && ne(y)),
                      C !== i)
                    ) {
                      for (B = [], W = le(); W !== i; ) B.push(W), (W = le());
                      B !== i ? ((fe = s), (f = $(O)), (s = f)) : ((l = s), (s = a));
                    } else (l = s), (s = a);
                  else (l = s), (s = a);
                } else (l = s), (s = a);
              else (l = s), (s = a);
            }
            return (Q[ae] = { nextPos: l, result: s }), s;
          }
          function Vp() {
            var s,
              f,
              O,
              E,
              C,
              B,
              W = l * 49 + 9,
              ae = Q[W];
            if (ae) return (l = ae.nextPos), ae.result;
            if (((s = l), (f = er()), f !== i)) {
              for (O = [], E = le(); E !== i; ) O.push(E), (E = le());
              if (O !== i)
                if (
                  (r.charCodeAt(l) === 61 ? ((E = v), l++) : ((E = i), X === 0 && ne(M)), E !== i)
                ) {
                  for (C = [], B = le(); B !== i; ) C.push(B), (B = le());
                  C !== i
                    ? ((B = Cn()),
                      B !== i ? ((fe = s), (f = G(f, B)), (s = f)) : ((l = s), (s = a)))
                    : ((l = s), (s = a));
                } else (l = s), (s = a);
              else (l = s), (s = a);
            } else (l = s), (s = a);
            if (s === i)
              if (((s = l), (f = ho()), f !== i)) {
                for (O = [], E = le(); E !== i; ) O.push(E), (E = le());
                if (O !== i)
                  if (
                    (r.charCodeAt(l) === 61 ? ((E = v), l++) : ((E = i), X === 0 && ne(M)), E !== i)
                  ) {
                    for (C = [], B = le(); B !== i; ) C.push(B), (B = le());
                    C !== i
                      ? ((B = Cn()),
                        B !== i ? ((fe = s), (f = G(f, B)), (s = f)) : ((l = s), (s = a)))
                      : ((l = s), (s = a));
                  } else (l = s), (s = a);
                else (l = s), (s = a);
              } else (l = s), (s = a);
            return (Q[W] = { nextPos: l, result: s }), s;
          }
          function er() {
            var s,
              f,
              O,
              E = l * 49 + 10,
              C = Q[E];
            if (C) return (l = C.nextPos), C.result;
            if (((s = l), (f = []), (O = cc()), O !== i)) for (; O !== i; ) f.push(O), (O = cc());
            else f = a;
            return (
              f !== i && ((fe = s), (f = J(f))), (s = f), (Q[E] = { nextPos: l, result: s }), s
            );
          }
          function ho() {
            var s,
              f,
              O = l * 49 + 11,
              E = Q[O];
            return E
              ? ((l = E.nextPos), E.result)
              : ((s = l),
                (f = Ju()),
                f !== i && ((fe = s), (f = z(f))),
                (s = f),
                s === i && ((s = l), (f = Qu()), f !== i && ((fe = s), (f = z(f))), (s = f)),
                (Q[O] = { nextPos: l, result: s }),
                s);
          }
          function Cn() {
            var s,
              f = l * 49 + 12,
              O = Q[f];
            return O
              ? ((l = O.nextPos), O.result)
              : ((s = Wp()),
                s === i &&
                  ((s = r_()),
                  s === i &&
                    ((s = Xp()),
                    s === i &&
                      ((s = Jp()),
                      s === i && ((s = Qp()), s === i && ((s = Zp()), s === i && (s = e_())))))),
                (Q[f] = { nextPos: l, result: s }),
                s);
          }
          function Wp() {
            var s,
              f = l * 49 + 13,
              O = Q[f];
            return O
              ? ((l = O.nextPos), O.result)
              : ((s = qp()),
                s === i && ((s = Ju()), s === i && ((s = zp()), s === i && (s = Qu()))),
                (Q[f] = { nextPos: l, result: s }),
                s);
          }
          function qp() {
            var s,
              f,
              O,
              E,
              C,
              B = l * 49 + 14,
              W = Q[B];
            if (W) return (l = W.nextPos), W.result;
            if (
              ((s = l),
              r.substr(l, 3) === S ? ((f = S), (l += 3)) : ((f = i), X === 0 && ne(k)),
              f !== i)
            )
              if (((O = ot()), O === i && (O = q), O !== i)) {
                for (E = [], C = tc(); C !== i; ) E.push(C), (C = tc());
                E !== i
                  ? (r.substr(l, 3) === S ? ((C = S), (l += 3)) : ((C = i), X === 0 && ne(k)),
                    C !== i ? ((fe = s), (f = ee(E)), (s = f)) : ((l = s), (s = a)))
                  : ((l = s), (s = a));
              } else (l = s), (s = a);
            else (l = s), (s = a);
            return (Q[B] = { nextPos: l, result: s }), s;
          }
          function Ju() {
            var s,
              f,
              O,
              E,
              C = l * 49 + 15,
              B = Q[C];
            if (B) return (l = B.nextPos), B.result;
            if (
              ((s = l),
              r.charCodeAt(l) === 34 ? ((f = j), l++) : ((f = i), X === 0 && ne(V)),
              f !== i)
            ) {
              for (O = [], E = Zu(); E !== i; ) O.push(E), (E = Zu());
              O !== i
                ? (r.charCodeAt(l) === 34 ? ((E = j), l++) : ((E = i), X === 0 && ne(V)),
                  E !== i ? ((fe = s), (f = ee(O)), (s = f)) : ((l = s), (s = a)))
                : ((l = s), (s = a));
            } else (l = s), (s = a);
            return (Q[C] = { nextPos: l, result: s }), s;
          }
          function zp() {
            var s,
              f,
              O,
              E,
              C,
              B = l * 49 + 16,
              W = Q[B];
            if (W) return (l = W.nextPos), W.result;
            if (
              ((s = l),
              r.substr(l, 3) === te ? ((f = te), (l += 3)) : ((f = i), X === 0 && ne(se)),
              f !== i)
            )
              if (((O = ot()), O === i && (O = q), O !== i)) {
                for (E = [], C = nc(); C !== i; ) E.push(C), (C = nc());
                E !== i
                  ? (r.substr(l, 3) === te ? ((C = te), (l += 3)) : ((C = i), X === 0 && ne(se)),
                    C !== i ? ((fe = s), (f = ee(E)), (s = f)) : ((l = s), (s = a)))
                  : ((l = s), (s = a));
              } else (l = s), (s = a);
            else (l = s), (s = a);
            return (Q[B] = { nextPos: l, result: s }), s;
          }
          function Qu() {
            var s,
              f,
              O,
              E,
              C = l * 49 + 17,
              B = Q[C];
            if (B) return (l = B.nextPos), B.result;
            if (
              ((s = l),
              r.charCodeAt(l) === 39 ? ((f = ce), l++) : ((f = i), X === 0 && ne(ue)),
              f !== i)
            ) {
              for (O = [], E = ec(); E !== i; ) O.push(E), (E = ec());
              O !== i
                ? (r.charCodeAt(l) === 39 ? ((E = ce), l++) : ((E = i), X === 0 && ne(ue)),
                  E !== i ? ((fe = s), (f = ee(O)), (s = f)) : ((l = s), (s = a)))
                : ((l = s), (s = a));
            } else (l = s), (s = a);
            return (Q[C] = { nextPos: l, result: s }), s;
          }
          function Zu() {
            var s,
              f,
              O,
              E = l * 49 + 18,
              C = Q[E];
            return C
              ? ((l = C.nextPos), C.result)
              : ((s = lc()),
                s === i &&
                  ((s = l),
                  (f = l),
                  X++,
                  r.charCodeAt(l) === 34 ? ((O = j), l++) : ((O = i), X === 0 && ne(V)),
                  X--,
                  O === i ? (f = h) : ((l = f), (f = a)),
                  f !== i
                    ? (r.length > l ? ((O = r.charAt(l)), l++) : ((O = i), X === 0 && ne(m)),
                      O !== i ? ((fe = s), (f = pe(O)), (s = f)) : ((l = s), (s = a)))
                    : ((l = s), (s = a))),
                (Q[E] = { nextPos: l, result: s }),
                s);
          }
          function ec() {
            var s,
              f,
              O,
              E = l * 49 + 19,
              C = Q[E];
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
                (Q[E] = { nextPos: l, result: s }),
                s);
          }
          function tc() {
            var s,
              f,
              O,
              E = l * 49 + 20,
              C = Q[E];
            return C
              ? ((l = C.nextPos), C.result)
              : ((s = lc()),
                s === i &&
                  ((s = Yp()),
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
                (Q[E] = { nextPos: l, result: s }),
                s);
          }
          function Yp() {
            var s,
              f,
              O,
              E,
              C,
              B = l * 49 + 21,
              W = Q[B];
            if (W) return (l = W.nextPos), W.result;
            if (
              ((s = l),
              r.charCodeAt(l) === 92 ? ((f = Ae), l++) : ((f = i), X === 0 && ne(Ne)),
              f !== i)
            )
              if (((O = ot()), O !== i)) {
                for (E = [], C = uc(); C !== i; ) E.push(C), (C = uc());
                E !== i ? ((fe = s), (f = ve()), (s = f)) : ((l = s), (s = a));
              } else (l = s), (s = a);
            else (l = s), (s = a);
            return (Q[B] = { nextPos: l, result: s }), s;
          }
          function nc() {
            var s,
              f,
              O,
              E = l * 49 + 22,
              C = Q[E];
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
                (Q[E] = { nextPos: l, result: s }),
                s);
          }
          function Xp() {
            var s,
              f,
              O,
              E,
              C = l * 49 + 23,
              B = Q[C];
            return B
              ? ((l = B.nextPos), B.result)
              : ((s = l),
                (f = rc()),
                f === i && (f = mo()),
                f !== i
                  ? (r.charCodeAt(l) === 101 ? ((O = It), l++) : ((O = i), X === 0 && ne(jt)),
                    O === i &&
                      (r.charCodeAt(l) === 69 ? ((O = In), l++) : ((O = i), X === 0 && ne(wn))),
                    O !== i
                      ? ((E = mo()),
                        E !== i ? ((fe = s), (f = bn(f, E)), (s = f)) : ((l = s), (s = a)))
                      : ((l = s), (s = a)))
                  : ((l = s), (s = a)),
                s === i && ((s = l), (f = rc()), f !== i && ((fe = s), (f = wt(f))), (s = f)),
                (Q[C] = { nextPos: l, result: s }),
                s);
          }
          function rc() {
            var s,
              f,
              O,
              E,
              C,
              B,
              W = l * 49 + 24,
              ae = Q[W];
            return ae
              ? ((l = ae.nextPos), ae.result)
              : ((s = l),
                r.charCodeAt(l) === 43 ? ((f = rn), l++) : ((f = i), X === 0 && ne(Jn)),
                f === i && (f = q),
                f !== i
                  ? ((O = l),
                    (E = tr()),
                    E !== i
                      ? (r.charCodeAt(l) === 46 ? ((C = T), l++) : ((C = i), X === 0 && ne(y)),
                        C !== i
                          ? ((B = tr()), B !== i ? ((E = [E, C, B]), (O = E)) : ((l = O), (O = a)))
                          : ((l = O), (O = a)))
                      : ((l = O), (O = a)),
                    O !== i ? ((fe = s), (f = zr(O)), (s = f)) : ((l = s), (s = a)))
                  : ((l = s), (s = a)),
                s === i &&
                  ((s = l),
                  r.charCodeAt(l) === 45 ? ((f = Ht), l++) : ((f = i), X === 0 && ne(Tt)),
                  f !== i
                    ? ((O = l),
                      (E = tr()),
                      E !== i
                        ? (r.charCodeAt(l) === 46 ? ((C = T), l++) : ((C = i), X === 0 && ne(y)),
                          C !== i
                            ? ((B = tr()),
                              B !== i ? ((E = [E, C, B]), (O = E)) : ((l = O), (O = a)))
                            : ((l = O), (O = a)))
                        : ((l = O), (O = a)),
                      O !== i ? ((fe = s), (f = Yr(O)), (s = f)) : ((l = s), (s = a)))
                    : ((l = s), (s = a))),
                (Q[W] = { nextPos: l, result: s }),
                s);
          }
          function Jp() {
            var s,
              f,
              O = l * 49 + 25,
              E = Q[O];
            return E
              ? ((l = E.nextPos), E.result)
              : ((s = l),
                (f = mo()),
                f !== i && ((fe = s), (f = Xi(f))),
                (s = f),
                (Q[O] = { nextPos: l, result: s }),
                s);
          }
          function mo() {
            var s,
              f,
              O,
              E,
              C,
              B = l * 49 + 26,
              W = Q[B];
            if (W) return (l = W.nextPos), W.result;
            if (
              ((s = l),
              r.charCodeAt(l) === 43 ? ((f = rn), l++) : ((f = i), X === 0 && ne(Jn)),
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
                  E !== i ? ((fe = s), (f = zr(O)), (s = f)) : ((l = s), (s = a)))
                : ((l = s), (s = a));
            } else (l = s), (s = a);
            if (s === i)
              if (
                ((s = l),
                r.charCodeAt(l) === 45 ? ((f = Ht), l++) : ((f = i), X === 0 && ne(Tt)),
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
                    E !== i ? ((fe = s), (f = Yr(O)), (s = f)) : ((l = s), (s = a)))
                  : ((l = s), (s = a));
              } else (l = s), (s = a);
            return (Q[B] = { nextPos: l, result: s }), s;
          }
          function Qp() {
            var s,
              f,
              O = l * 49 + 27,
              E = Q[O];
            return E
              ? ((l = E.nextPos), E.result)
              : ((s = l),
                r.substr(l, 4) === Xr ? ((f = Xr), (l += 4)) : ((f = i), X === 0 && ne(Ji)),
                f !== i && ((fe = s), (f = Qi())),
                (s = f),
                s === i &&
                  ((s = l),
                  r.substr(l, 5) === Jr ? ((f = Jr), (l += 5)) : ((f = i), X === 0 && ne(Zi)),
                  f !== i && ((fe = s), (f = eo())),
                  (s = f)),
                (Q[O] = { nextPos: l, result: s }),
                s);
          }
          function Zp() {
            var s,
              f,
              O,
              E,
              C,
              B = l * 49 + 28,
              W = Q[B];
            if (W) return (l = W.nextPos), W.result;
            if (
              ((s = l),
              r.charCodeAt(l) === 91 ? ((f = g), l++) : ((f = i), X === 0 && ne(R)),
              f !== i)
            ) {
              for (O = [], E = it(); E !== i; ) O.push(E), (E = it());
              O !== i
                ? (r.charCodeAt(l) === 93 ? ((E = b), l++) : ((E = i), X === 0 && ne(N)),
                  E !== i ? ((fe = s), (f = to()), (s = f)) : ((l = s), (s = a)))
                : ((l = s), (s = a));
            } else (l = s), (s = a);
            if (
              s === i &&
              ((s = l),
              r.charCodeAt(l) === 91 ? ((f = g), l++) : ((f = i), X === 0 && ne(R)),
              f !== i
                ? ((O = ic()),
                  O === i && (O = q),
                  O !== i
                    ? (r.charCodeAt(l) === 93 ? ((E = b), l++) : ((E = i), X === 0 && ne(N)),
                      E !== i ? ((fe = s), (f = no(O)), (s = f)) : ((l = s), (s = a)))
                    : ((l = s), (s = a)))
                : ((l = s), (s = a)),
              s === i)
            ) {
              if (
                ((s = l),
                r.charCodeAt(l) === 91 ? ((f = g), l++) : ((f = i), X === 0 && ne(R)),
                f !== i)
              ) {
                if (((O = []), (E = ii()), E !== i)) for (; E !== i; ) O.push(E), (E = ii());
                else O = a;
                O !== i
                  ? (r.charCodeAt(l) === 93 ? ((E = b), l++) : ((E = i), X === 0 && ne(N)),
                    E !== i ? ((fe = s), (f = ro(O)), (s = f)) : ((l = s), (s = a)))
                  : ((l = s), (s = a));
              } else (l = s), (s = a);
              if (s === i)
                if (
                  ((s = l),
                  r.charCodeAt(l) === 91 ? ((f = g), l++) : ((f = i), X === 0 && ne(R)),
                  f !== i)
                ) {
                  if (((O = []), (E = ii()), E !== i)) for (; E !== i; ) O.push(E), (E = ii());
                  else O = a;
                  O !== i
                    ? ((E = ic()),
                      E !== i
                        ? (r.charCodeAt(l) === 93 ? ((C = b), l++) : ((C = i), X === 0 && ne(N)),
                          C !== i ? ((fe = s), (f = io(O, E)), (s = f)) : ((l = s), (s = a)))
                        : ((l = s), (s = a)))
                    : ((l = s), (s = a));
                } else (l = s), (s = a);
            }
            return (Q[B] = { nextPos: l, result: s }), s;
          }
          function ic() {
            var s,
              f,
              O,
              E,
              C,
              B = l * 49 + 29,
              W = Q[B];
            if (W) return (l = W.nextPos), W.result;
            for (s = l, f = [], O = it(); O !== i; ) f.push(O), (O = it());
            if (f !== i)
              if (((O = Cn()), O !== i)) {
                for (E = [], C = it(); C !== i; ) E.push(C), (C = it());
                E !== i ? ((fe = s), (f = Qr(O)), (s = f)) : ((l = s), (s = a));
              } else (l = s), (s = a);
            else (l = s), (s = a);
            return (Q[B] = { nextPos: l, result: s }), s;
          }
          function ii() {
            var s,
              f,
              O,
              E,
              C,
              B,
              W,
              ae = l * 49 + 30,
              he = Q[ae];
            if (he) return (l = he.nextPos), he.result;
            for (s = l, f = [], O = it(); O !== i; ) f.push(O), (O = it());
            if (f !== i)
              if (((O = Cn()), O !== i)) {
                for (E = [], C = it(); C !== i; ) E.push(C), (C = it());
                if (E !== i)
                  if (
                    (r.charCodeAt(l) === 44 ? ((C = Zr), l++) : ((C = i), X === 0 && ne(Qn)),
                    C !== i)
                  ) {
                    for (B = [], W = it(); W !== i; ) B.push(W), (W = it());
                    B !== i ? ((fe = s), (f = Qr(O)), (s = f)) : ((l = s), (s = a));
                  } else (l = s), (s = a);
                else (l = s), (s = a);
              } else (l = s), (s = a);
            else (l = s), (s = a);
            return (Q[ae] = { nextPos: l, result: s }), s;
          }
          function it() {
            var s,
              f = l * 49 + 31,
              O = Q[f];
            return O
              ? ((l = O.nextPos), O.result)
              : ((s = le()),
                s === i && ((s = ot()), s === i && (s = ri())),
                (Q[f] = { nextPos: l, result: s }),
                s);
          }
          function e_() {
            var s,
              f,
              O,
              E,
              C,
              B,
              W = l * 49 + 32,
              ae = Q[W];
            if (ae) return (l = ae.nextPos), ae.result;
            if (
              ((s = l),
              r.charCodeAt(l) === 123 ? ((f = oo), l++) : ((f = i), X === 0 && ne(ei)),
              f !== i)
            ) {
              for (O = [], E = le(); E !== i; ) O.push(E), (E = le());
              if (O !== i) {
                for (E = [], C = oc(); C !== i; ) E.push(C), (C = oc());
                if (E !== i) {
                  for (C = [], B = le(); B !== i; ) C.push(B), (B = le());
                  C !== i
                    ? (r.charCodeAt(l) === 125 ? ((B = so), l++) : ((B = i), X === 0 && ne(ao)),
                      B !== i ? ((fe = s), (f = uo(E)), (s = f)) : ((l = s), (s = a)))
                    : ((l = s), (s = a));
                } else (l = s), (s = a);
              } else (l = s), (s = a);
            } else (l = s), (s = a);
            return (Q[W] = { nextPos: l, result: s }), s;
          }
          function oc() {
            var s,
              f,
              O,
              E,
              C,
              B,
              W,
              ae,
              he,
              Ie,
              Te,
              Me = l * 49 + 33,
              xe = Q[Me];
            if (xe) return (l = xe.nextPos), xe.result;
            for (s = l, f = [], O = le(); O !== i; ) f.push(O), (O = le());
            if (f !== i)
              if (((O = er()), O !== i)) {
                for (E = [], C = le(); C !== i; ) E.push(C), (C = le());
                if (E !== i)
                  if (
                    (r.charCodeAt(l) === 61 ? ((C = v), l++) : ((C = i), X === 0 && ne(M)), C !== i)
                  ) {
                    for (B = [], W = le(); W !== i; ) B.push(W), (W = le());
                    if (B !== i)
                      if (((W = Cn()), W !== i)) {
                        for (ae = [], he = le(); he !== i; ) ae.push(he), (he = le());
                        if (ae !== i)
                          if (
                            (r.charCodeAt(l) === 44
                              ? ((he = Zr), l++)
                              : ((he = i), X === 0 && ne(Qn)),
                            he !== i)
                          ) {
                            for (Ie = [], Te = le(); Te !== i; ) Ie.push(Te), (Te = le());
                            Ie !== i ? ((fe = s), (f = bt(O, W)), (s = f)) : ((l = s), (s = a));
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
                if (((O = er()), O !== i)) {
                  for (E = [], C = le(); C !== i; ) E.push(C), (C = le());
                  if (E !== i)
                    if (
                      (r.charCodeAt(l) === 61 ? ((C = v), l++) : ((C = i), X === 0 && ne(M)),
                      C !== i)
                    ) {
                      for (B = [], W = le(); W !== i; ) B.push(W), (W = le());
                      B !== i
                        ? ((W = Cn()),
                          W !== i ? ((fe = s), (f = bt(O, W)), (s = f)) : ((l = s), (s = a)))
                        : ((l = s), (s = a));
                    } else (l = s), (s = a);
                  else (l = s), (s = a);
                } else (l = s), (s = a);
              else (l = s), (s = a);
            }
            return (Q[Me] = { nextPos: l, result: s }), s;
          }
          function sc() {
            var s,
              f,
              O,
              E = l * 49 + 34,
              C = Q[E];
            return C
              ? ((l = C.nextPos), C.result)
              : ((s = l),
                r.charCodeAt(l) === 46 ? ((f = T), l++) : ((f = i), X === 0 && ne(y)),
                f !== i
                  ? ((O = tr()), O !== i ? ((fe = s), (f = co(O)), (s = f)) : ((l = s), (s = a)))
                  : ((l = s), (s = a)),
                (Q[E] = { nextPos: l, result: s }),
                s);
          }
          function ac() {
            var s,
              f,
              O,
              E,
              C,
              B,
              W,
              ae,
              he,
              Ie,
              Te,
              Me,
              xe = l * 49 + 35,
              Qe = Q[xe];
            return Qe
              ? ((l = Qe.nextPos), Qe.result)
              : ((s = l),
                (f = l),
                (O = Ee()),
                O !== i
                  ? ((E = Ee()),
                    E !== i
                      ? ((C = Ee()),
                        C !== i
                          ? ((B = Ee()),
                            B !== i
                              ? (r.charCodeAt(l) === 45
                                  ? ((W = Ht), l++)
                                  : ((W = i), X === 0 && ne(Tt)),
                                W !== i
                                  ? ((ae = Ee()),
                                    ae !== i
                                      ? ((he = Ee()),
                                        he !== i
                                          ? (r.charCodeAt(l) === 45
                                              ? ((Ie = Ht), l++)
                                              : ((Ie = i), X === 0 && ne(Tt)),
                                            Ie !== i
                                              ? ((Te = Ee()),
                                                Te !== i
                                                  ? ((Me = Ee()),
                                                    Me !== i
                                                      ? ((O = [O, E, C, B, W, ae, he, Ie, Te, Me]),
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
                f !== i && ((fe = s), (f = lo(f))),
                (s = f),
                (Q[xe] = { nextPos: l, result: s }),
                s);
          }
          function t_() {
            var s,
              f,
              O,
              E,
              C,
              B,
              W,
              ae,
              he,
              Ie,
              Te,
              Me = l * 49 + 36,
              xe = Q[Me];
            return xe
              ? ((l = xe.nextPos), xe.result)
              : ((s = l),
                (f = l),
                (O = Ee()),
                O !== i
                  ? ((E = Ee()),
                    E !== i
                      ? (r.charCodeAt(l) === 58 ? ((C = on), l++) : ((C = i), X === 0 && ne(sn)),
                        C !== i
                          ? ((B = Ee()),
                            B !== i
                              ? ((W = Ee()),
                                W !== i
                                  ? (r.charCodeAt(l) === 58
                                      ? ((ae = on), l++)
                                      : ((ae = i), X === 0 && ne(sn)),
                                    ae !== i
                                      ? ((he = Ee()),
                                        he !== i
                                          ? ((Ie = Ee()),
                                            Ie !== i
                                              ? ((Te = sc()),
                                                Te === i && (Te = q),
                                                Te !== i
                                                  ? ((O = [O, E, C, B, W, ae, he, Ie, Te]), (f = O))
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
                (Q[Me] = { nextPos: l, result: s }),
                s);
          }
          function n_() {
            var s,
              f,
              O,
              E,
              C,
              B,
              W,
              ae,
              he,
              Ie,
              Te,
              Me,
              xe,
              Qe,
              Sn,
              Ft,
              Ze,
              fc = l * 49 + 37,
              Ao = Q[fc];
            return Ao
              ? ((l = Ao.nextPos), Ao.result)
              : ((s = l),
                (f = l),
                (O = Ee()),
                O !== i
                  ? ((E = Ee()),
                    E !== i
                      ? (r.charCodeAt(l) === 58 ? ((C = on), l++) : ((C = i), X === 0 && ne(sn)),
                        C !== i
                          ? ((B = Ee()),
                            B !== i
                              ? ((W = Ee()),
                                W !== i
                                  ? (r.charCodeAt(l) === 58
                                      ? ((ae = on), l++)
                                      : ((ae = i), X === 0 && ne(sn)),
                                    ae !== i
                                      ? ((he = Ee()),
                                        he !== i
                                          ? ((Ie = Ee()),
                                            Ie !== i
                                              ? ((Te = sc()),
                                                Te === i && (Te = q),
                                                Te !== i
                                                  ? (r.charCodeAt(l) === 45
                                                      ? ((Me = Ht), l++)
                                                      : ((Me = i), X === 0 && ne(Tt)),
                                                    Me === i &&
                                                      (r.charCodeAt(l) === 43
                                                        ? ((Me = rn), l++)
                                                        : ((Me = i), X === 0 && ne(Jn))),
                                                    Me !== i
                                                      ? ((xe = Ee()),
                                                        xe !== i
                                                          ? ((Qe = Ee()),
                                                            Qe !== i
                                                              ? (r.charCodeAt(l) === 58
                                                                  ? ((Sn = on), l++)
                                                                  : ((Sn = i), X === 0 && ne(sn)),
                                                                Sn !== i
                                                                  ? ((Ft = Ee()),
                                                                    Ft !== i
                                                                      ? ((Ze = Ee()),
                                                                        Ze !== i
                                                                          ? ((O = [
                                                                              O,
                                                                              E,
                                                                              C,
                                                                              B,
                                                                              W,
                                                                              ae,
                                                                              he,
                                                                              Ie,
                                                                              Te,
                                                                              Me,
                                                                              xe,
                                                                              Qe,
                                                                              Sn,
                                                                              Ft,
                                                                              Ze,
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
                (Q[fc] = { nextPos: l, result: s }),
                s);
          }
          function r_() {
            var s,
              f,
              O,
              E,
              C,
              B = l * 49 + 38,
              W = Q[B];
            return W
              ? ((l = W.nextPos), W.result)
              : ((s = l),
                (f = ac()),
                f !== i
                  ? (r.charCodeAt(l) === 84 ? ((O = H), l++) : ((O = i), X === 0 && ne(K)),
                    O !== i
                      ? ((E = t_()),
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
                  (f = ac()),
                  f !== i
                    ? (r.charCodeAt(l) === 84 ? ((O = H), l++) : ((O = i), X === 0 && ne(K)),
                      O !== i
                        ? ((E = n_()),
                          E !== i ? ((fe = s), (f = Ye(f, E)), (s = f)) : ((l = s), (s = a)))
                        : ((l = s), (s = a)))
                    : ((l = s), (s = a))),
                (Q[B] = { nextPos: l, result: s }),
                s);
          }
          function le() {
            var s,
              f = l * 49 + 39,
              O = Q[f];
            return O
              ? ((l = O.nextPos), O.result)
              : (an.test(r.charAt(l)) ? ((s = r.charAt(l)), l++) : ((s = i), X === 0 && ne(Nn)),
                (Q[f] = { nextPos: l, result: s }),
                s);
          }
          function ot() {
            var s,
              f,
              O,
              E = l * 49 + 40,
              C = Q[E];
            return C
              ? ((l = C.nextPos), C.result)
              : (r.charCodeAt(l) === 10 ? ((s = Gt), l++) : ((s = i), X === 0 && ne(xu)),
                s === i &&
                  ((s = l),
                  r.charCodeAt(l) === 13 ? ((f = pp), l++) : ((f = i), X === 0 && ne(_p)),
                  f !== i
                    ? (r.charCodeAt(l) === 10 ? ((O = Gt), l++) : ((O = i), X === 0 && ne(xu)),
                      O !== i ? ((f = [f, O]), (s = f)) : ((l = s), (s = a)))
                    : ((l = s), (s = a))),
                (Q[E] = { nextPos: l, result: s }),
                s);
          }
          function uc() {
            var s,
              f = l * 49 + 41,
              O = Q[f];
            return O
              ? ((l = O.nextPos), O.result)
              : ((s = ot()), s === i && (s = le()), (Q[f] = { nextPos: l, result: s }), s);
          }
          function oi() {
            var s,
              f,
              O = l * 49 + 42,
              E = Q[O];
            return E
              ? ((l = E.nextPos), E.result)
              : ((s = l),
                X++,
                r.length > l ? ((f = r.charAt(l)), l++) : ((f = i), X === 0 && ne(m)),
                X--,
                f === i ? (s = h) : ((l = s), (s = a)),
                (Q[O] = { nextPos: l, result: s }),
                s);
          }
          function st() {
            var s,
              f = l * 49 + 43,
              O = Q[f];
            return O
              ? ((l = O.nextPos), O.result)
              : (hp.test(r.charAt(l)) ? ((s = r.charAt(l)), l++) : ((s = i), X === 0 && ne(mp)),
                (Q[f] = { nextPos: l, result: s }),
                s);
          }
          function Ee() {
            var s,
              f,
              O = l * 49 + 44,
              E = Q[O];
            return E
              ? ((l = E.nextPos), E.result)
              : (gp.test(r.charAt(l)) ? ((s = r.charAt(l)), l++) : ((s = i), X === 0 && ne(Ap)),
                s === i &&
                  ((s = l),
                  r.charCodeAt(l) === 95 ? ((f = Op), l++) : ((f = i), X === 0 && ne(Rp)),
                  f !== i && ((fe = s), (f = yp())),
                  (s = f)),
                (Q[O] = { nextPos: l, result: s }),
                s);
          }
          function cc() {
            var s,
              f = l * 49 + 45,
              O = Q[f];
            return O
              ? ((l = O.nextPos), O.result)
              : (Tp.test(r.charAt(l)) ? ((s = r.charAt(l)), l++) : ((s = i), X === 0 && ne(Ep)),
                (Q[f] = { nextPos: l, result: s }),
                s);
          }
          function tr() {
            var s,
              f,
              O,
              E = l * 49 + 46,
              C = Q[E];
            if (C) return (l = C.nextPos), C.result;
            if (((s = l), (f = []), (O = Ee()), O !== i)) for (; O !== i; ) f.push(O), (O = Ee());
            else f = a;
            return (
              f !== i && ((fe = s), (f = Ip(f))), (s = f), (Q[E] = { nextPos: l, result: s }), s
            );
          }
          function lc() {
            var s,
              f,
              O = l * 49 + 47,
              E = Q[O];
            return E
              ? ((l = E.nextPos), E.result)
              : ((s = l),
                r.substr(l, 2) === Bu ? ((f = Bu), (l += 2)) : ((f = i), X === 0 && ne(wp)),
                f !== i && ((fe = s), (f = bp())),
                (s = f),
                s === i &&
                  ((s = l),
                  r.substr(l, 2) === Lu ? ((f = Lu), (l += 2)) : ((f = i), X === 0 && ne(Np)),
                  f !== i && ((fe = s), (f = Cp())),
                  (s = f),
                  s === i &&
                    ((s = l),
                    r.substr(l, 2) === Uu ? ((f = Uu), (l += 2)) : ((f = i), X === 0 && ne(Sp)),
                    f !== i && ((fe = s), (f = vp())),
                    (s = f),
                    s === i &&
                      ((s = l),
                      r.substr(l, 2) === $u ? ((f = $u), (l += 2)) : ((f = i), X === 0 && ne(Pp)),
                      f !== i && ((fe = s), (f = Mp())),
                      (s = f),
                      s === i &&
                        ((s = l),
                        r.substr(l, 2) === ju ? ((f = ju), (l += 2)) : ((f = i), X === 0 && ne(kp)),
                        f !== i && ((fe = s), (f = Dp())),
                        (s = f),
                        s === i &&
                          ((s = l),
                          r.substr(l, 2) === Hu
                            ? ((f = Hu), (l += 2))
                            : ((f = i), X === 0 && ne(xp)),
                          f !== i && ((fe = s), (f = Bp())),
                          (s = f),
                          s === i &&
                            ((s = l),
                            r.substr(l, 2) === Gu
                              ? ((f = Gu), (l += 2))
                              : ((f = i), X === 0 && ne(Lp)),
                            f !== i && ((fe = s), (f = Up())),
                            (s = f),
                            s === i && (s = i_()))))))),
                (Q[O] = { nextPos: l, result: s }),
                s);
          }
          function i_() {
            var s,
              f,
              O,
              E,
              C,
              B,
              W,
              ae,
              he,
              Ie,
              Te,
              Me = l * 49 + 48,
              xe = Q[Me];
            return xe
              ? ((l = xe.nextPos), xe.result)
              : ((s = l),
                r.substr(l, 2) === Fu ? ((f = Fu), (l += 2)) : ((f = i), X === 0 && ne($p)),
                f !== i
                  ? ((O = l),
                    (E = st()),
                    E !== i
                      ? ((C = st()),
                        C !== i
                          ? ((B = st()),
                            B !== i
                              ? ((W = st()),
                                W !== i
                                  ? ((ae = st()),
                                    ae !== i
                                      ? ((he = st()),
                                        he !== i
                                          ? ((Ie = st()),
                                            Ie !== i
                                              ? ((Te = st()),
                                                Te !== i
                                                  ? ((E = [E, C, B, W, ae, he, Ie, Te]), (O = E))
                                                  : ((l = O), (O = a)))
                                              : ((l = O), (O = a)))
                                          : ((l = O), (O = a)))
                                      : ((l = O), (O = a)))
                                  : ((l = O), (O = a)))
                              : ((l = O), (O = a)))
                          : ((l = O), (O = a)))
                      : ((l = O), (O = a)),
                    O !== i ? ((fe = s), (f = Ku(O)), (s = f)) : ((l = s), (s = a)))
                  : ((l = s), (s = a)),
                s === i &&
                  ((s = l),
                  r.substr(l, 2) === Vu ? ((f = Vu), (l += 2)) : ((f = i), X === 0 && ne(jp)),
                  f !== i
                    ? ((O = l),
                      (E = st()),
                      E !== i
                        ? ((C = st()),
                          C !== i
                            ? ((B = st()),
                              B !== i
                                ? ((W = st()),
                                  W !== i ? ((E = [E, C, B, W]), (O = E)) : ((l = O), (O = a)))
                                : ((l = O), (O = a)))
                            : ((l = O), (O = a)))
                        : ((l = O), (O = a)),
                      O !== i ? ((fe = s), (f = Ku(O)), (s = f)) : ((l = s), (s = a)))
                    : ((l = s), (s = a))),
                (Q[Me] = { nextPos: l, result: s }),
                s);
          }
          var dc = [];
          function o_(s, f, O) {
            var E = new Error(s);
            throw ((E.line = f), (E.column = O), E);
          }
          function go(s) {
            dc.push(s);
          }
          function Ke(s, f, O, E, C) {
            var B = { type: s, value: f, line: O(), column: E() };
            return C && (B.key = C), B;
          }
          function s_(s, f, O) {
            var E = parseInt('0x' + s);
            if (
              !isFinite(E) ||
              Math.floor(E) != E ||
              E < 0 ||
              E > 1114111 ||
              (E > 55295 && E < 57344)
            )
              o_('Invalid Unicode escape code: ' + s, f, O);
            else return a_(E);
          }
          function a_() {
            var s = 16384,
              f = [],
              O,
              E,
              C = -1,
              B = arguments.length;
            if (!B) return '';
            for (var W = ''; ++C < B; ) {
              var ae = Number(arguments[C]);
              ae <= 65535
                ? f.push(ae)
                : ((ae -= 65536),
                  (O = (ae >> 10) + 55296),
                  (E = (ae % 1024) + 56320),
                  f.push(O, E)),
                (C + 1 == B || f.length > s) &&
                  ((W += String.fromCharCode.apply(null, f)), (f.length = 0));
            }
            return W;
          }
          if (((ni = d()), ni !== i && l === r.length)) return ni;
          throw (
            (ni !== i && l < r.length && ne({ type: 'end', description: 'end of input' }),
            Hp(null, po, ti))
          );
        }
        return { SyntaxError: e, parse: n };
      })())),
    Lo
  );
}
var Uo, Qc;
function uy() {
  if (Qc) return Uo;
  Qc = 1;
  function t(e) {
    var n = [],
      r = [],
      o = '',
      i = Object.create(null),
      u = i;
    return d(e);
    function d(P) {
      for (var I, x = 0; x < P.length; x++)
        switch (((I = P[x]), I.type)) {
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
    function p(P, I, x) {
      var F = new Error(P);
      throw ((F.line = I), (F.column = x), F);
    }
    function a(P) {
      var I = P.key,
        x = P.value,
        F = P.line,
        $ = P.column,
        T;
      o ? (T = o + '.' + I) : (T = I),
        typeof u[I] < 'u' && p("Cannot redefine existing key '" + T + "'.", F, $),
        (u[I] = A(x)),
        _(T) || (n.push(T), r.push(T));
    }
    function _(P) {
      return n.indexOf(P) !== -1;
    }
    function A(P) {
      return P.type === 'Array' ? b(P.value) : P.type === 'InlineTable' ? h(P.value) : P.value;
    }
    function h(P) {
      for (var I = Object.create(null), x = 0; x < P.length; x++) {
        var F = P[x];
        F.value.type === 'InlineTable'
          ? (I[F.key] = h(F.value.value))
          : F.type === 'InlineTableValue' && (I[F.key] = A(F.value));
      }
      return I;
    }
    function m(P) {
      var I = P.value,
        x = I.map(N).join('.'),
        F = P.line,
        $ = P.column;
      _(x) && p("Cannot redefine existing key '" + I + "'.", F, $),
        n.push(x),
        (u = R(i, I, Object.create(null), F, $)),
        (o = I);
    }
    function g(P) {
      var I = P.value,
        x = I.map(N).join('.'),
        F = P.line,
        $ = P.column;
      if (
        (_(x) || n.push(x),
        (n = n.filter(function (y) {
          return y.indexOf(x) !== 0;
        })),
        n.push(x),
        (u = R(i, I, [], F, $)),
        (o = x),
        u instanceof Array)
      ) {
        var T = Object.create(null);
        u.push(T), (u = T);
      } else p("Cannot redefine existing key '" + I + "'.", F, $);
    }
    function R(P, I, x, F, $) {
      var T = [],
        y = '';
      I.join('.');
      for (var v = P, M = 0; M < I.length; M++) {
        var G = I[M];
        T.push(G),
          (y = T.join('.')),
          typeof v[G] > 'u'
            ? M === I.length - 1
              ? (v[G] = x)
              : (v[G] = Object.create(null))
            : M !== I.length - 1 &&
              r.indexOf(y) > -1 &&
              p("Cannot redefine existing key '" + y + "'.", F, $),
          (v = v[G]),
          v instanceof Array && v.length && M < I.length - 1 && (v = v[v.length - 1]);
      }
      return v;
    }
    function b(P) {
      for (var I = null, x = 0; x < P.length; x++) {
        var F = P[x];
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
  return (Uo = { compile: t }), Uo;
}
var $o, Zc;
function cy() {
  if (Zc) return $o;
  Zc = 1;
  var t = ay(),
    e = uy();
  return (
    ($o = {
      parse: function (n) {
        var r = t.parse(n.toString());
        return e.compile(r);
      },
    }),
    $o
  );
}
function ly(t) {
  return t.toLowerCase();
}
var dy = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g],
  fy = /[^A-Z0-9]+/gi;
function py(t, e) {
  e === void 0 && (e = {});
  for (
    var n = e.splitRegexp,
      r = n === void 0 ? dy : n,
      o = e.stripRegexp,
      i = o === void 0 ? fy : o,
      u = e.transform,
      d = u === void 0 ? ly : u,
      p = e.delimiter,
      a = p === void 0 ? ' ' : p,
      _ = el(el(t, r, '$1\0$2'), i, '\0'),
      A = 0,
      h = _.length;
    _.charAt(A) === '\0';

  )
    A++;
  for (; _.charAt(h - 1) === '\0'; ) h--;
  return _.slice(A, h).split('\0').map(d).join(a);
}
function el(t, e, n) {
  return e instanceof RegExp
    ? t.replace(e, n)
    : e.reduce(function (r, o) {
        return r.replace(o, n);
      }, t);
}
function _y(t, e) {
  return e === void 0 && (e = {}), py(t, Al({ delimiter: '.' }, e));
}
function hy(t, e) {
  return e === void 0 && (e = {}), _y(t, Al({ delimiter: '_' }, e));
}
const my = Object.freeze(
    Object.defineProperty({ __proto__: null, snakeCase: hy }, Symbol.toStringTag, {
      value: 'Module',
    })
  ),
  gy = Br(my);
var jo, tl;
function Ay() {
  if (tl) return jo;
  tl = 1;
  function t(o) {
    if (typeof o != 'string')
      throw new TypeError('Path must be a string. Received ' + JSON.stringify(o));
  }
  function e(o, i) {
    for (var u = '', d = 0, p = -1, a = 0, _, A = 0; A <= o.length; ++A) {
      if (A < o.length) _ = o.charCodeAt(A);
      else {
        if (_ === 47) break;
        _ = 47;
      }
      if (_ === 47) {
        if (!(p === A - 1 || a === 1))
          if (p !== A - 1 && a === 2) {
            if (
              u.length < 2 ||
              d !== 2 ||
              u.charCodeAt(u.length - 1) !== 46 ||
              u.charCodeAt(u.length - 2) !== 46
            ) {
              if (u.length > 2) {
                var h = u.lastIndexOf('/');
                if (h !== u.length - 1) {
                  h === -1
                    ? ((u = ''), (d = 0))
                    : ((u = u.slice(0, h)), (d = u.length - 1 - u.lastIndexOf('/'))),
                    (p = A),
                    (a = 0);
                  continue;
                }
              } else if (u.length === 2 || u.length === 1) {
                (u = ''), (d = 0), (p = A), (a = 0);
                continue;
              }
            }
            i && (u.length > 0 ? (u += '/..') : (u = '..'), (d = 2));
          } else
            u.length > 0 ? (u += '/' + o.slice(p + 1, A)) : (u = o.slice(p + 1, A)),
              (d = A - p - 1);
        (p = A), (a = 0);
      } else _ === 46 && a !== -1 ? ++a : (a = -1);
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
      for (var i = '', u = !1, d, p = arguments.length - 1; p >= -1 && !u; p--) {
        var a;
        p >= 0 ? (a = arguments[p]) : (d === void 0 && (d = ie.process.cwd()), (a = d)),
          t(a),
          a.length !== 0 && ((i = a + '/' + i), (u = a.charCodeAt(0) === 47));
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
      for (var p = i.length, a = p - d, _ = 1; _ < u.length && u.charCodeAt(_) === 47; ++_);
      for (var A = u.length, h = A - _, m = a < h ? a : h, g = -1, R = 0; R <= m; ++R) {
        if (R === m) {
          if (h > m) {
            if (u.charCodeAt(_ + R) === 47) return u.slice(_ + R + 1);
            if (R === 0) return u.slice(_ + R);
          } else a > m && (i.charCodeAt(d + R) === 47 ? (g = R) : R === 0 && (g = 0));
          break;
        }
        var b = i.charCodeAt(d + R),
          N = u.charCodeAt(_ + R);
        if (b !== N) break;
        b === 47 && (g = R);
      }
      var P = '';
      for (R = d + g + 1; R <= p; ++R)
        (R === p || i.charCodeAt(R) === 47) && (P.length === 0 ? (P += '..') : (P += '/..'));
      return P.length > 0
        ? P + u.slice(_ + g)
        : ((_ += g), u.charCodeAt(_) === 47 && ++_, u.slice(_));
    },
    _makeLong: function (i) {
      return i;
    },
    dirname: function (i) {
      if ((t(i), i.length === 0)) return '.';
      for (var u = i.charCodeAt(0), d = u === 47, p = -1, a = !0, _ = i.length - 1; _ >= 1; --_)
        if (((u = i.charCodeAt(_)), u === 47)) {
          if (!a) {
            p = _;
            break;
          }
        } else a = !1;
      return p === -1 ? (d ? '/' : '.') : d && p === 1 ? '//' : i.slice(0, p);
    },
    basename: function (i, u) {
      if (u !== void 0 && typeof u != 'string')
        throw new TypeError('"ext" argument must be a string');
      t(i);
      var d = 0,
        p = -1,
        a = !0,
        _;
      if (u !== void 0 && u.length > 0 && u.length <= i.length) {
        if (u.length === i.length && u === i) return '';
        var A = u.length - 1,
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
              A >= 0 && (m === u.charCodeAt(A) ? --A === -1 && (p = _) : ((A = -1), (p = h)));
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
      for (var u = -1, d = 0, p = -1, a = !0, _ = 0, A = i.length - 1; A >= 0; --A) {
        var h = i.charCodeAt(A);
        if (h === 47) {
          if (!a) {
            d = A + 1;
            break;
          }
          continue;
        }
        p === -1 && ((a = !1), (p = A + 1)),
          h === 46 ? (u === -1 ? (u = A) : _ !== 1 && (_ = 1)) : u !== -1 && (_ = -1);
      }
      return u === -1 || p === -1 || _ === 0 || (_ === 1 && u === p - 1 && u === d + 1)
        ? ''
        : i.slice(u, p);
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
        p = d === 47,
        a;
      p ? ((u.root = '/'), (a = 1)) : (a = 0);
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
            (A === 0 && p ? (u.base = u.name = i.slice(1, h)) : (u.base = u.name = i.slice(A, h)))
          : (A === 0 && p
              ? ((u.name = i.slice(1, _)), (u.base = i.slice(1, h)))
              : ((u.name = i.slice(A, _)), (u.base = i.slice(A, h))),
            (u.ext = i.slice(_, h))),
        A > 0 ? (u.dir = i.slice(0, A - 1)) : p && (u.dir = '/'),
        u
      );
    },
    sep: '/',
    delimiter: ':',
    win32: null,
    posix: null,
  };
  return (r.posix = r), (jo = r), jo;
}
var nl;
function Oy() {
  if (nl) return hi;
  nl = 1;
  var t =
      (w && w.__createBinding) ||
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
      (w && w.__setModuleDefault) ||
      (Object.create
        ? function (p, a) {
            Object.defineProperty(p, 'default', { enumerable: !0, value: a });
          }
        : function (p, a) {
            p.default = a;
          }),
    n =
      (w && w.__importStar) ||
      function (p) {
        if (p && p.__esModule) return p;
        var a = {};
        if (p != null)
          for (var _ in p)
            _ !== 'default' && Object.prototype.hasOwnProperty.call(p, _) && t(a, p, _);
        return e(a, p), a;
      };
  Object.defineProperty(hi, '__esModule', { value: !0 });
  const r = n(cy()),
    o = gy,
    i = Wi(),
    u = rt,
    d = new Proxy(
      {},
      {
        get(p, a) {
          var _, A;
          if (u.isBrowser) throw new Error("Workspaces aren't available in the browser");
          if (
            ((a = (0, o.snakeCase)(a)),
            /\d/.test(a) && (a = a.replace(/\d+/g, (x) => '_' + x).replace('__', '_')),
            p[a])
          )
            return p[a];
          const h = cr,
            m = Ay(),
            g = r.parse(h.readFileSync('Anchor.toml')),
            R = g.provider.cluster,
            b =
              (A = (_ = g.programs) === null || _ === void 0 ? void 0 : _[R]) === null ||
              A === void 0
                ? void 0
                : A[a];
          let N, P;
          if (
            (typeof b == 'object' && b.idl
              ? ((N = b.idl), (P = b.address))
              : (N = m.join('target', 'idl', ''.concat(a, '.json'))),
            !h.existsSync(N))
          )
            throw new Error(''.concat(N, " doesn't exist. Did you run `anchor build`?"));
          const I = JSON.parse(h.readFileSync(N));
          return P && (I.address = P), (p[a] = new i.Program(I)), p[a];
        },
      }
    );
  return (hi.default = d), hi;
}
(function (t) {
  var e =
      (w && w.__createBinding) ||
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
      (w && w.__setModuleDefault) ||
      (Object.create
        ? function (a, _) {
            Object.defineProperty(a, 'default', { enumerable: !0, value: _ });
          }
        : function (a, _) {
            a.default = _;
          }),
    r =
      (w && w.__importStar) ||
      function (a) {
        if (a && a.__esModule) return a;
        var _ = {};
        if (a != null)
          for (var A in a)
            A !== 'default' && Object.prototype.hasOwnProperty.call(a, A) && e(_, a, A);
        return n(_, a), _;
      },
    o =
      (w && w.__exportStar) ||
      function (a, _) {
        for (var A in a)
          A !== 'default' && !Object.prototype.hasOwnProperty.call(_, A) && e(_, a, A);
      },
    i =
      (w && w.__importDefault) ||
      function (a) {
        return a && a.__esModule ? a : { default: a };
      };
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.utils = t.AnchorProvider = t.setProvider = t.getProvider = t.web3 = t.BN = void 0),
    i($n);
  const u = rt;
  var d = Je;
  Object.defineProperty(t, 'BN', {
    enumerable: !0,
    get: function () {
      return i(d).default;
    },
  }),
    (t.web3 = r(_e));
  var p = xi();
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
    o(qn, t),
    o(Gi(), t),
    (t.utils = r(We)),
    o(Wi(), t),
    o(qi, t),
    u.isBrowser || ((t.workspace = Oy().default), (t.Wallet = $n.default));
})(Hf);
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
  const e = Hf,
    n = _e;
  t.NULL_PUBKEY = new n.PublicKey('nu11111111111111111111111111111111111111111');
  function r(A) {
    return A && !A.equals(t.NULL_PUBKEY) && !A.equals(n.PublicKey.default);
  }
  class o {
    constructor(h) {
      c(this, 'items', []);
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
      c(this, 'record', []);
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
  class u {
    constructor(h) {
      c(this, 'buckets');
      c(this, 'size');
      c(this, p, 'PubkeyHashMap');
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
        const b = R.find((N) => N.key.equals(h));
        b ? (b.value = m) : (R.push({ key: h, value: m }), this.size++);
      }
      return this;
    }
    get(h) {
      const m = new d(h).hashCode(),
        g = this.buckets.get(m);
      if (!g) return;
      const R = g.find((b) => b.key.equals(h));
      return R ? R.value : void 0;
    }
    has(h) {
      const m = new d(h).hashCode(),
        g = this.buckets.get(m);
      return g ? !!g.find((b) => b.key.equals(h)) : !1;
    }
    delete(h) {
      const m = new d(h).hashCode(),
        g = this.buckets.get(m);
      if (!g) return !1;
      const R = g.findIndex((b) => b.key.equals(h));
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
  t.PubkeyHashMap = u;
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
  c(_, 'MASK', new e.BN(1).shln(32).subn(1));
  let d = _;
  t.HashablePublicKey = d;
})(jf);
var ku = {};
Object.defineProperty(ku, '__esModule', { value: !0 });
ku.getAllLookupTables = Ry;
const rl = _e;
async function Ry(t, e) {
  return (await t.getMultipleAccountsInfo(e)).map((o, i) => {
    const u = rl.AddressLookupTableAccount.deserialize(o.data);
    return new rl.AddressLookupTableAccount({ key: e[i], state: u });
  });
}
var ip = {};
const yy = Br(T_);
(function (t) {
  var e =
    (w && w.__importDefault) ||
    function (j) {
      return j && j.__esModule ? j : { default: j };
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
    (t.getSimulationComputeUnits = b),
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
    r = e(Dr),
    o = yy,
    i = Oe,
    u = ht;
  t.MAX_LOCKED_ACCOUNTS = 64;
  function d(j, V, te, se = void 0) {
    const ce = new n.TransactionMessage({
        payerKey: V,
        recentBlockhash: n.PublicKey.default.toBase58(),
        instructions: te,
      }).compileToV0Message(se),
      ue = new n.VersionedTransaction(ce),
      pe = ie.Buffer.from(ue.message.serialize()).toString('base64'),
      ge = ie.Buffer.from(ue.serialize()).toString('base64'),
      Ae =
        j === 'localnet'
          ? '?cluster=custom&customUrl=http://localhost:8899'
          : '?cluster='.concat(j.toString()),
      Ne = 'https://explorer.solana.com/tx/inspector'
        .concat(Ae, '&message=')
        .concat(encodeURIComponent(pe), '&signatures=')
        .concat(encodeURIComponent('['.concat(V.toBase58(), ']')));
    return { encodedTx: ge, simulationUrl: Ne };
  }
  async function p(j, V, te, se, ce, ue = '', pe = console.log) {
    let ge = te,
      Ae;
    const [Ne, ve] = await Promise.all([
      b(j, te, V.publicKey, se, ue, pe),
      j.getLatestBlockhashAndContext('finalized'),
    ]);
    ge = _(ge);
    const It = T(Ne ? Ne * 1.5 : 12e5, new r.default(await S(15)));
    ge.unshift(...It), (Ae = ve);
    const jt = h(V, ge, se, ce, Ae);
    return A(j, jt, Ae, ''.concat(ue, ' (confirm)'), pe);
  }
  async function a(j, V, te, se = '', ce = console.log) {
    var ue;
    try {
      const pe = await j.sendTransaction(V, {
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
        const Ne = await g(j, Ae);
        if (Ne) {
          const ve = ((ue = Ne.meta) == null ? void 0 : ue.logMessages) || void 0;
          throw new $(pe.message, Ae, ve);
        } else throw new $(pe.message, Ae);
      } else throw pe;
    }
  }
  function _(j) {
    return j.filter(({ programId: V }) => V !== u.COMPUTE_BUDGET_PROGRAM_ID);
  }
  async function A(j, V, te, se = '', ce = console.log) {
    var ge;
    const ue = await a(j, V, te, se, ce);
    if ((await m(j, te.value, ue)).value.err) {
      const Ae = await g(j, ue);
      if (Ae) {
        const Ne = ((ge = Ae.meta) == null ? void 0 : ge.logMessages) || void 0;
        throw new $('Failed to send transaction: '.concat(se, ' ').concat(ue), ue, Ne);
      } else throw new $('Failed to send transaction: '.concat(se, ' ').concat(ue), ue);
    }
    return ue;
  }
  function h(j, V, te, se, ce) {
    const { blockhash: ue } = ce.value,
      pe = new n.TransactionMessage({
        payerKey: j.publicKey,
        recentBlockhash: ue,
        instructions: V,
      }).compileToV0Message(te),
      ge = new n.VersionedTransaction(pe);
    return ge.sign([j, ...se]), ge;
  }
  async function m(j, V, te) {
    return (
      await j.confirmTransaction(
        { blockhash: V.blockhash, lastValidBlockHeight: V.lastValidBlockHeight, signature: te },
        'processed'
      ),
      j.confirmTransaction(
        { blockhash: V.blockhash, lastValidBlockHeight: V.lastValidBlockHeight, signature: te },
        'confirmed'
      )
    );
  }
  async function g(j, V) {
    console.log('forceGetConfirmedTx: '.concat(V));
    const te = { commitment: 'confirmed', maxSupportedTransactionVersion: 0 },
      se = Date.now() + 5e3;
    let ce = null,
      ue = null;
    for (;;) {
      try {
        if (((ue = await j.getTransaction(V, te)), ue)) return ue;
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
  function R(j) {
    return new Promise((V) => setTimeout(V, j));
  }
  async function b(j, V, te, se, ce = '', ue = console.log) {
    const pe = G(V, 2e6),
      ge = new n.VersionedTransaction(
        new n.TransactionMessage({
          instructions: pe,
          payerKey: te,
          recentBlockhash: n.PublicKey.default.toString(),
        }).compileToV0Message(se)
      );
    try {
      const Ae = await j.simulateTransaction(ge, { replaceRecentBlockhash: !0, sigVerify: !1 });
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
  const N = async (j, V) => {
    const te = [];
    for (const se of V) {
      const ce = await j.getAddressLookupTable(new n.PublicKey(se)).then((ue) => ue.value);
      if (!ce)
        throw (console.error('lookup table is not found'), new Error('lookup table is not found'));
      te.push(ce);
    }
    return te;
  };
  t.getLookupTableAccountsFromKeys = N;
  function P(j) {
    return t.MAX_LOCKED_ACCOUNTS - j;
  }
  function I(j, V = []) {
    let te;
    V.length > 0 && V[0] instanceof n.AddressLookupTableAccount
      ? (te = V.map((ce) => ce.key.toBase58()))
      : (te = V.map((ce) => ce.toBase58()));
    const se = j
      .map((ce) => ce.keys.map((ue) => ue.pubkey.toBase58()))
      .flat()
      .concat(...te);
    return new Set(se);
  }
  const x = (j, V) =>
    j.programId.equals(V.programId) &&
    F(
      j.keys,
      V.keys,
      (te, se) =>
        te.isSigner === se.isSigner &&
        te.isWritable === se.isWritable &&
        te.pubkey.equals(se.pubkey)
    ) &&
    F(Array.from(j.data), Array.from(V.data), (te, se) => te === se);
  t.instructionEquals = x;
  function F(j, V, te) {
    return j.length !== V.length
      ? !1
      : j.reduce((se, ce, ue) => {
          const pe = V[ue];
          return pe == null ? !1 : se && te(ce, pe);
        }, !0);
  }
  class $ extends Error {
    constructor(te, se, ce, ue) {
      super(te);
      c(this, 'sig');
      c(this, 'logs');
      c(this, 'err');
      (this.sig = se), (this.logs = ce), (this.err = ue);
    }
  }
  t.TransactionError = $;
  function T(j, V) {
    const te = [];
    if ((te.push(n.ComputeBudgetProgram.setComputeUnitLimit({ units: j })), V)) {
      const { microLamports: se } = y(j, V);
      te.push(n.ComputeBudgetProgram.setComputeUnitPrice({ microLamports: se }));
    }
    return te;
  }
  function y(j, V) {
    const ce = V.mul(1e6).div(j).mul(1).floor().toString();
    return (
      console.debug(
        'Fee per CU lamports: '
          .concat(V, ', units: ')
          .concat(j, ', compute unit price: ')
          .concat(ce)
      ),
      { microLamports: BigInt(ce) }
    );
  }
  function v(j) {
    return j === 'SetComputeUnitLimit';
  }
  function M(j) {
    return j === 'SetComputeUnitPrice';
  }
  function G(j, V) {
    const te = j.filter(
      (se) =>
        !se.programId.equals(u.COMPUTE_BUDGET_PROGRAM_ID) ||
        !v(n.ComputeBudgetInstruction.decodeInstructionType(se))
    );
    return te.unshift(n.ComputeBudgetProgram.setComputeUnitLimit({ units: V })), te;
  }
  const J = (0, i.getEnvOrDefault)('SOLANA_COMPASS_API_URL', 'https://solanacompass.com/api');
  async function z(j) {
    try {
      return j === 'mainnet-beta' ? new r.default(await S(1)) : void 0;
    } catch (V) {
      console.warn('Failed to get average fees', V);
      return;
    }
  }
  async function S(j) {
    return (await k())[j].avg;
  }
  async function k() {
    return await (await fetch(''.concat(J, '/fees'))).json();
  }
  async function q(j, V) {
    var bn;
    const te = ''.concat(V.percentile ? ' P['.concat(V.percentile / 100, ']') : ''),
      se = ((bn = V.lockedWritableAccounts) == null ? void 0 : bn.length) || 'all global';
    console.log(
      'Fetching recent'.concat(te, ' priority fees from RPC for ').concat(se, ' accounts')
    );
    const [ce, ue] = await Promise.all([ee(V, j), j.getSlot()]),
      pe = ue - u.SLOTS_PER_MINUTE;
    let ge = 0,
      Ae = 0,
      Ne = new r.default('0');
    const ve = ce.result
      .filter((wt) =>
        wt.prioritizationFee <= 0
          ? (ge++, !1)
          : wt.slot < pe
            ? (Ae++, !1)
            : ((Ne = Ne.add(wt.prioritizationFee)), !0)
      )
      .sort((wt, rn) => wt.prioritizationFee - rn.prioritizationFee);
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
    const It = new r.default(ve[0].prioritizationFee),
      jt = new r.default(ve[ve.length - 1].prioritizationFee),
      In = Ne.div(ve.length),
      wn = new r.default(ve[Math.floor(ve.length / 2)].prioritizationFee);
    return (
      console.log(
        'Fetched '
          .concat(ve.length, ' valid 1 minute')
          .concat(te, ' priority fees from RPC for ')
          .concat(se, ' accounts, median: ')
          .concat(wn, ' uLamports/CU, average: ')
          .concat(In, ' uLamports/CU, min: ')
          .concat(It, ' uLamports/CU, max: ')
          .concat(jt, ' uLamports/CU. Filtered ')
          .concat(ge, ' zero fees and ')
          .concat(Ae, ' >1 minute fees')
      ),
      { min: It, max: jt, average: In, median: wn }
    );
  }
  async function ee(j, V) {
    var pe;
    const te =
        ((pe = j == null ? void 0 : j.lockedWritableAccounts) == null
          ? void 0
          : pe.map((ge) => ge.toBase58())) || [],
      se = j.percentile ? { percentile: j.percentile } : {},
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
          params: [[...te], Be({}, se)],
          id: (0, o.v4)(),
        }),
      });
    if (!ce.ok) throw new Error('Network response was not ok: '.concat(ce.statusText));
    const ue = await ce.json();
    if ('error' in ue)
      throw new n.SolanaJSONRPCError(
        ue.error,
        'Failed to get recent priority fees by accounts: '.concat(
          (j == null ? void 0 : j.lockedWritableAccounts) || []
        )
      );
    return ue;
  }
})(ip);
var zn = {};
Object.defineProperty(zn, '__esModule', { value: !0 });
zn.simulateSwapWithATABalances = Ey;
zn.extractTokenBalance = or;
zn.isSimulationSlippageError = sp;
zn.convertSimulatedAccount = ls;
const sr = Bt,
  op = _e,
  xt = Eu,
  Ty = ht;
async function Ey(t, e, n, r, o, i, u) {
  var d;
  try {
    const p = (0, sr.getAssociatedTokenAddressSync)(r, n, !0, i),
      a = (0, sr.getAssociatedTokenAddressSync)(o, n, !0, u),
      _ = [p.toString(), a.toString(), n.toString()],
      [A, h, m] = await Promise.all([
        t.getAccountInfo(p),
        t.getAccountInfo(a),
        t.getAccountInfo(n),
      ]),
      g = or(A, r.toString()),
      R = or(h, o.toString()),
      b = (m == null ? void 0 : m.lamports) || 0,
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
        nativeChangeAmount: new xt.BN(0),
        isSlippageError: sp(P),
        simulationResponse: P,
      };
    const I = P.value.accounts || [],
      x = or(ls(I[0]), r.toString()),
      F = or(ls(I[1]), o.toString()),
      $ = ((d = I[2]) == null ? void 0 : d.lamports) || 0,
      T = il(r.toString(), g, x),
      y = il(o.toString(), R, F),
      v = new xt.BN($).sub(new xt.BN(b)),
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
      nativeChangeAmount: new xt.BN(0),
    };
  }
}
function or(t, e) {
  if (!t) return { mint: e, amount: new xt.BN(0) };
  try {
    if (ie.Buffer.isBuffer(t.data)) {
      if (t.owner.equals(Ty.SYSTEM_PROGRAM_ID)) return { mint: e, amount: new xt.BN(0) };
      if (!(t.owner.equals(sr.TOKEN_PROGRAM_ID) || t.owner.equals(sr.TOKEN_2022_PROGRAM_ID)))
        return null;
      const n = sr.AccountLayout.decode(t.data);
      if (new op.PublicKey(n.mint).toString() !== e) return null;
      const o = new xt.BN(n.amount.toString());
      return { mint: e, amount: o };
    }
    return null;
  } catch (n) {
    return null;
  }
}
function sp(t) {
  return (
    Array.isArray(t.value.logs) &&
    t.value.logs.some((e) => e && typeof e == 'string' && e.toLowerCase().includes('slippage'))
  );
}
function ls(t) {
  var n;
  if (!t) return null;
  const e = Array.isArray(t.data) ? ie.Buffer.from(t.data[0], 'base64') : ie.Buffer.alloc(0);
  return {
    executable: t.executable,
    owner: new op.PublicKey(t.owner),
    lamports: t.lamports,
    data: e,
    rentEpoch: (n = t.rentEpoch) != null ? n : 0,
  };
}
function il(t, e, n) {
  if (!e && !n) return null;
  const r = e || { mint: t, amount: new xt.BN(0) },
    o = n || { mint: t, amount: new xt.BN(0) };
  return { mint: t, beforeAmount: r.amount, afterAmount: o.amount, change: o.amount.sub(r.amount) };
}
var Tn = {};
Object.defineProperty(Tn, '__esModule', { value: !0 });
Tn.addPricesAndPriceImpactToRouteOutput = Iy;
Tn.calculatePriceImpactBps = pn;
Tn.getAsyncDataFromApiRouteOutput = wy;
Tn.addAsyncDataToRouteOutput = by;
function Iy(t, e) {
  var n, r, o, i;
  return (
    e !== void 0 &&
      e.birdeyeTokenInPriceInSol &&
      e.birdeyeTokenOutPriceInSol &&
      e.inputTokenDecimals &&
      e.outputTokenDecimals &&
      (t.swapType === 'exactIn'
        ? ((e.priceImpactBps = Math.max(
            pn(
              e.birdeyeTokenInPriceInSol,
              e.birdeyeTokenOutPriceInSol,
              e.amountsExactIn.amountIn.toNumber() / 10 ** e.inputTokenDecimals,
              e.amountsExactIn.amountOut.toNumber() / 10 ** e.outputTokenDecimals
            ),
            0
          )),
          (e.guaranteedPriceImpactBps = Math.max(
            pn(
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
                  pn(
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
            pn(
              e.birdeyeTokenInPriceInSol,
              e.birdeyeTokenOutPriceInSol,
              e.amountsExactOut.amountOut.toNumber() / 10 ** e.outputTokenDecimals,
              e.amountsExactOut.amountIn.toNumber() / 10 ** e.inputTokenDecimals
            ),
            0
          )),
          (e.guaranteedPriceImpactBps = Math.max(
            pn(
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
                  pn(
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
function pn(t, e, n, r) {
  const o = (n * t) / e;
  return (1 - r / o) * 100 * 100;
}
function wy(t) {
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
function by(t, e) {
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
      (w && w.__createBinding) ||
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
      (w && w.__exportStar) ||
      function (r, o) {
        for (var i in r)
          i !== 'default' && !Object.prototype.hasOwnProperty.call(o, i) && e(o, r, i);
      };
  Object.defineProperty(t, '__esModule', { value: !0 }),
    n(Oe, t),
    n(jf, t),
    n(ku, t),
    n(ip, t),
    n(zn, t),
    n(Tn, t);
})(Vn);
var Du = {},
  ap = {};
Object.defineProperty(ap, '__esModule', { value: !0 });
var Yn = {};
Object.defineProperty(Yn, '__esModule', { value: !0 });
Yn.serializeRouteOutput = xy;
Yn.deserializeRouteOutput = By;
Yn.serializeRouteParams = Ly;
Yn.serializeQuoteParams = Uy;
const Et = _e,
  Kt = Eu,
  Ny = Lr,
  Cy = ht;
function Sy(t) {
  const e = t.serialize();
  return ie.Buffer.from(e).toString('base64');
}
function vy(t) {
  if (!t) return;
  const e = ie.Buffer.from(t, 'base64');
  return Et.VersionedTransaction.deserialize(e);
}
function Py(t) {
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
function My(t) {
  return t
    ? t.map((e) => {
        const { programId: n, data: r, keys: o } = e,
          i = new Et.PublicKey(n),
          u = ie.Buffer.from(r, 'base64'),
          d = o.map((p) => ({
            pubkey: new Et.PublicKey(p.pubkey),
            isSigner: p.isSigner,
            isWritable: p.isWritable,
          }));
        return new Et.TransactionInstruction({ programId: i, data: u, keys: d });
      })
    : [];
}
function ky(t) {
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
function Dy(t) {
  return t.map((e) => {
    const n = {
        deactivationSlot: BigInt(e.state.deactivationSlot),
        lastExtendedSlot: e.state.lastExtendedSlot,
        lastExtendedSlotStartIndex: e.state.lastExtendedSlotStartIndex,
        authority: e.state.authority ? new Et.PublicKey(e.state.authority) : void 0,
        addresses: e.state.addresses.map((o) => new Et.PublicKey(o)),
      },
      r = new Et.PublicKey(e.key);
    return new Et.AddressLookupTableAccount({ key: r, state: n });
  });
}
function xy(t) {
  return {
    ixsRouterBs58: Py(t.ixsRouter),
    transactionBs58: t.transaction ? Sy(t.transaction) : void 0,
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
    lookupTableAccountsBs58: t.lookupTableAccounts ? ky(t.lookupTableAccounts) : void 0,
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
function By(t) {
  if ((0, Cy.isValidRouterType)(t.routerType))
    return {
      ixsRouter: My(t.ixsRouterBs58),
      transaction: vy(t.transactionBs58),
      amountsExactIn: {
        amountIn: new Kt.BN(t.amountsExactIn.amountIn),
        amountOutGuaranteed: new Kt.BN(t.amountsExactIn.amountOutGuaranteed),
        amountOut: new Kt.BN(t.amountsExactIn.amountOut),
        amountOutSimulated: t.amountsExactIn.amountOutSimulated
          ? new Kt.BN(t.amountsExactIn.amountOutSimulated)
          : void 0,
      },
      amountsExactOut: {
        amountOut: new Kt.BN(t.amountsExactOut.amountOut),
        amountInGuaranteed: new Kt.BN(t.amountsExactOut.amountInGuaranteed),
        amountIn: new Kt.BN(t.amountsExactOut.amountIn),
        amountInSimulated: t.amountsExactOut.amountInSimulated
          ? new Kt.BN(t.amountsExactOut.amountInSimulated)
          : void 0,
      },
      swapType: t.swapType,
      responseTimeGetQuoteMs: t.responseTimeGetQuoteMs,
      responseTimeSwapIxsMs: t.responseTimeSwapIxsMs,
      routerType: t.routerType,
      lookupTableAccounts: Dy(t.lookupTableAccountsBs58 || []),
      expiryTime: t.expiryTime,
      perReferenceId: t.perReferenceId,
      priceImpactBps: t.priceImpactBps,
      simulatedPriceImpactBps: t.simulatedPriceImpactBps,
      guaranteedPriceImpactBps: t.guaranteedPriceImpactBps,
      birdeyeTokenInPriceInSol: t.birdeyeTokenInPriceInSol,
      birdeyeTokenOutPriceInSol: t.birdeyeTokenOutPriceInSol,
      simulationTimestamp: t.simulationTimestamp,
      inputMintProgramOwner: t.inputMintProgramOwner
        ? new Et.PublicKey(t.inputMintProgramOwner)
        : void 0,
      outputMintProgramOwner: t.outputMintProgramOwner
        ? new Et.PublicKey(t.outputMintProgramOwner)
        : void 0,
      inputTokenDecimals: t.inputTokenDecimals,
      outputTokenDecimals: t.outputTokenDecimals,
      jupRequestId: t.jupRequestId,
    };
}
function Ly(t) {
  return {
    tokenIn: t.tokenIn.toBase58(),
    tokenOut: t.tokenOut.toBase58(),
    amount: t.amount.toString(),
    swapType: t.swapType,
    executor: t.executor.toBase58(),
    referrerPda: t.referrerPda ? t.referrerPda.toBase58() : Ny.limoId.toBase58(),
    maxSlippageBps: t.maxSlippageBps,
    includeSetupIxs: t.includeSetupIxs !== void 0 && !t.includeSetupIxs ? 'false' : 'true',
    wrapAndUnwrapSol: t.wrapAndUnwrapSol !== void 0 && !t.wrapAndUnwrapSol ? 'false' : 'true',
    routerTypes: t.routerTypes,
    includeLimoLogs: t.includeLimoLogs !== void 0 && !t.includeLimoLogs ? 'false' : 'true',
    includeRfq: t.includeRfq !== void 0 && !t.includeRfq ? 'false' : 'true',
    timeoutMs: t.timeoutMs,
  };
}
function Uy(t) {
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
var Xn = {},
  $y =
    (w && w.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(Xn, '__esModule', { value: !0 });
Xn.wrapLimoLogsAroundRoute = Gy;
Xn.removeLimoLogsIxns = Ky;
Xn.includeLimoLogs = Vy;
const yi = ht,
  jy = Bt,
  Ho = $y(Je),
  Hy = Pl();
function Gy(t) {
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
        swapProgarmId: yi.ROUTER_PROGRAM_MAP[e.routerType],
        simulatedSwapAmountOut: p || new Ho.default(0),
        simulatedTs: a ? new Ho.default(a) : new Ho.default(0),
        minimumAmountOut: _,
        swapAmountIn: A,
        simulatedAmountOutNextBest: u,
        aggregatorId: (0, yi.getRouterTypeID)(e.routerType),
        nextBestAggregatorId: d,
        pdaReferrer: n.referrerPda ? n.referrerPda : r.getProgramID(),
        voteAccount: yi.TRITON_VOTE_ACCOUNT,
      });
    e.ixsRouter = Fy(e.ixsRouter, e.routerType, h.beforeSwapIx, h.afterSwapIx, n);
  }
  return e;
}
function Fy(t, e, n, r, o) {
  try {
    const i = yi.ROUTER_PROGRAM_MAP[e];
    let u = -1;
    const d = [];
    if (
      (t.forEach((a, _) => a.programId.equals(i) && d.push(_)), e === 'raydium' || e === 'dflow')
    ) {
      if (d.length === 0) return t;
      o.tokenIn.equals(jy.NATIVE_MINT) && o.wrapAndUnwrapSol && d.length > 1
        ? (u = d[1])
        : (u = d[0]);
    } else {
      if (d.length > 1 || d.length === 0) return t;
      u = d[0];
    }
    if (u === -1) throw new Error('Instruction for router '.concat(e, ' not found'));
    const p = [...t];
    return p.splice(u, 0, n), p.splice(u + 2, 0, r), p;
  } catch (i) {
    return t;
  }
}
function Ky(t) {
  return t.filter(({ programId: e }) => !e.equals((0, Hy.getLimoProgramId)('mainnet-beta')));
}
function Vy(t) {
  return t === void 0 ? !0 : t;
}
var $t = {};
Object.defineProperty($t, '__esModule', { value: !0 });
$t.unwrapSolIx = qy;
$t.wrapSolIxs = zy;
$t.getDepositWsolIxs = cp;
$t.isRequestedRouterType = Yy;
$t.filterArrayRouterTypes = Xy;
const ol = _e,
  wi = Bt,
  up = Lr,
  Wy = Oe,
  sl = ht;
function qy(t) {
  const e = (0, wi.getAssociatedTokenAddressSync)(up.WRAPPED_SOL_MINT, t.executor);
  return (0, wi.createCloseAccountInstruction)(e, t.executor, t.executor, []);
}
function zy(t) {
  const e = [],
    { ata: n, createAtaIx: r } = (0, Wy.createAtaIdempotent)(
      t.executor,
      t.executor,
      up.WRAPPED_SOL_MINT,
      wi.TOKEN_PROGRAM_ID
    );
  return e.push(r), t.amount && e.push(...cp(t.executor, n, t.amount)), e;
}
function cp(t, e, n) {
  const r = [];
  return (
    r.push(
      ol.SystemProgram.transfer({ fromPubkey: t, toPubkey: e, lamports: BigInt(n.toString()) })
    ),
    r.push(
      new ol.TransactionInstruction({
        keys: [{ pubkey: e, isSigner: !1, isWritable: !0 }],
        data: ie.Buffer.from(new Uint8Array([17])),
        programId: wi.TOKEN_PROGRAM_ID,
      })
    ),
    r
  );
}
function Yy(t, e) {
  return t.length == 0 || t.includes(e);
}
function Xy(t, e) {
  const n = !t || t.length === 0 ? [...sl.SUPPORTED_ROUTER_TYPES] : t;
  return e ? n : n.filter((r) => !sl.RFQ_ROUTERS.includes(r));
}
(function (t) {
  var e =
      (w && w.__createBinding) ||
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
      (w && w.__exportStar) ||
      function (r, o) {
        for (var i in r)
          i !== 'default' && !Object.prototype.hasOwnProperty.call(o, i) && e(o, r, i);
      };
  Object.defineProperty(t, '__esModule', { value: !0 }), n(ap, t), n(Yn, t), n(Xn, t), n($t, t);
})(Du);
var zi = {},
  En = {},
  Yi = {};
Object.defineProperty(Yi, '__esModule', { value: !0 });
Yi.base64ToVersionedTransaction = Qy;
Yi.extractInstructionsAndLookupTablesFromTxn = Zy;
const ds = _e,
  Jy = Vn;
function Qy(t) {
  const e = ie.Buffer.from(t, 'base64');
  return ds.VersionedTransaction.deserialize(e);
}
async function Zy(t, e) {
  const n = e.message.addressTableLookups.map((u) => new ds.PublicKey(u.accountKey)),
    r = await (0, Jy.getAllLookupTables)(t, n),
    o = e.message.getAccountKeys({ addressLookupTableAccounts: r });
  return {
    instructions: e.message.compiledInstructions.map(
      (u) =>
        new ds.TransactionInstruction({
          programId: o.get(u.programIdIndex),
          keys: u.accountKeyIndexes.map((d) => ({
            pubkey: o.get(d),
            isSigner: e.message.isAccountSigner(d),
            isWritable: e.message.isAccountWritable(d),
          })),
          data: ie.Buffer.from(u.data),
        })
    ),
    lookupTables: r,
  };
}
var lp =
  (w && w.__importDefault) ||
  function (t) {
    return t && t.__esModule ? t : { default: t };
  };
Object.defineProperty(En, '__esModule', { value: !0 });
En.JupiterUltraRouter = void 0;
En.executeJupiterZTransaction = nT;
En.fetchJupiterPrice = rT;
const Un = lp(fs),
  Pn = lp(Je),
  ar = ht,
  eT = Vn,
  al = Yi;
class tT {
  constructor(e) {
    c(this, 'connection');
    c(this, 'baseUrl', ar.JUP_ULTRA_BASE_URL);
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
        u = (0, al.base64ToVersionedTransaction)(r.transaction);
      let d, p;
      const { instructions: a, lookupTables: _ } = await (0,
      al.extractInstructionsAndLookupTablesFromTxn)(this.connection, u);
      d = (0, eT.removeComputeBudgetProgram)(a);
      let A = !1;
      for (const m of d)
        if (
          m.programId.equals(ar.ROUTER_PROGRAM_MAP.jupiterU) ||
          m.programId.equals(ar.ROUTER_PROGRAM_MAP.jupiterZ)
        ) {
          A = !0;
          break;
        }
      if (!A) return;
      p = _;
      const h = Date.now();
      return at(Be({}, this.buildRouteOutput(r, e.swapType, o - n, h - o)), {
        transaction: u,
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
      return (await Un.default.get(''.concat(this.baseUrl, '/order'), { params: e, headers: {} }))
        .data;
    } catch (n) {
      throw (
        (console.error(
          'Failed to fetch swap quote: '.concat(
            Un.default.isAxiosError(n) ? n.message : 'Unknown error'
          )
        ),
        new Error(
          'Failed to fetch swap quote: '.concat(
            Un.default.isAxiosError(n) ? n.message : 'Unknown error'
          )
        ))
      );
    }
  }
  buildRouteOutput(e, n, r, o) {
    return {
      amountsExactIn: {
        amountIn: new Pn.default(e.inAmount),
        amountOutGuaranteed: new Pn.default(e.otherAmountThreshold),
        amountOut: new Pn.default(e.outAmount),
      },
      amountsExactOut: {
        amountOut: new Pn.default(0),
        amountInGuaranteed: new Pn.default(0),
        amountIn: new Pn.default(0),
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
En.JupiterUltraRouter = tT;
async function nT(t) {
  try {
    return (
      await Un.default.post(
        ''.concat(ar.JUP_ULTRA_BASE_URL, '/execute'),
        { signedTransaction: t.signedTransaction, requestId: t.requestId },
        { headers: { 'Content-Type': 'application/json', Accept: 'application/json' } }
      )
    ).data;
  } catch (e) {
    throw Un.default.isAxiosError(e) && e.response
      ? (console.error('Execute transaction failed:', e.response.data),
        new Error('Execute transaction failed: '.concat(JSON.stringify(e.response.data))))
      : (console.error('Execute transaction error:', e),
        new Error('Failed to execute transaction'));
  }
}
async function rT(t) {
  return (
    await Un.default.get(ar.JUPITER_PRICE_API, {
      params: t,
      headers: { 'Content-Type': 'application/json' },
    })
  ).data;
}
var Vr = {},
  Wr = {},
  qr = {},
  iT =
    (w && w.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(qr, '__esModule', { value: !0 });
qr.JupiterBase = void 0;
const Ue = iT(Je),
  mi = _e,
  oT = $t,
  ul = Vn,
  cl = Lr;
class sT {
  constructor(e, n) {
    c(this, 'routerType');
    c(this, 'connection');
    (this.routerType = e), (this.connection = n);
  }
  async getRouteOutput(e, n, r, o, i) {
    const { setupInstructions: u, swapInstruction: d, addressLookupTableAddresses: p } = e,
      a = p.map((N) => new mi.PublicKey(N)),
      _ = await (0, ul.getAllLookupTables)(this.connection, a),
      A = Date.now(),
      m = [
        ...u.map((N) => this.convertJupiterToTransactionInstruction(N)),
        this.convertJupiterToTransactionInstruction(d),
      ],
      g = (0, ul.removeComputeBudgetIxns)(m),
      R = Number(n.priceImpactPct) * 100;
    return (
      (r.tokenOut.equals(cl.WRAPPED_SOL_MINT) || r.tokenIn.equals(cl.WRAPPED_SOL_MINT)) &&
        g.push((0, oT.unwrapSolIx)(r)),
      {
        ixsRouter: g,
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
        responseTimeSwapIxsMs: A - o,
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
    return new mi.TransactionInstruction({
      programId: new mi.PublicKey(e.programId),
      keys: e.accounts.map((n) => ({
        pubkey: new mi.PublicKey(n.pubkey),
        isSigner: n.isSigner,
        isWritable: n.isWritable,
      })),
      data: ie.Buffer.from(e.data, 'base64'),
    });
  }
}
qr.JupiterBase = sT;
var aT =
  (w && w.__importDefault) ||
  function (t) {
    return t && t.__esModule ? t : { default: t };
  };
Object.defineProperty(Wr, '__esModule', { value: !0 });
Wr.JupiterRouterBase = void 0;
Wr.getJupiterPrice = fT;
const Go = Ol,
  uT = aT(fs),
  cT = qr,
  lT = ht;
class dT extends cT.JupiterBase {
  constructor(n, r, o, i, u) {
    super(r, n);
    c(this, 'maxAccounts');
    c(this, 'jupiterClient');
    c(this, 'logger');
    (this.maxAccounts = i),
      (this.jupiterClient = (0, Go.createJupiterApiClient)({ basePath: o })),
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
          swapMode: n.swapType === 'exactIn' ? Go.SwapMode.ExactIn : Go.SwapMode.ExactOut,
        }),
        i = Date.now(),
        u = await this.jupiterClient.swapInstructionsPost({
          swapRequest: {
            userPublicKey: n.executor.toBase58(),
            quoteResponse: o,
            wrapAndUnwrapSol: n.wrapAndUnwrapSol,
          },
        });
      return await this.getRouteOutput(u, o, n, i, r);
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
          maxAccounts: this.maxAccounts,
          swapMode: n.swapType === 'exactIn' ? 'ExactIn' : 'ExactOut',
        }),
        i = Date.now();
      return this.getQuoteOutput(o, n, i, r);
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
Wr.JupiterRouterBase = dT;
async function fT(t, e) {
  var r;
  const n = { ids: t.toString(), vsToken: e.toString() };
  try {
    return (
      ((r = (await uT.default.get(lT.JUPITER_PRICE_API, { params: n })).data.data[t.toString()]) ==
      null
        ? void 0
        : r.price) || 0
    );
  } catch (o) {
    return 0;
  }
}
Object.defineProperty(Vr, '__esModule', { value: !0 });
Vr.JupiterRouterLite = void 0;
const pT = ht,
  _T = Wr;
class hT extends _T.JupiterRouterBase {
  constructor(e, n) {
    super(e, 'jupiterLite', pT.JUP_V6_BASE_URL, n, console.debug);
  }
}
Vr.JupiterRouterLite = hT;
var dp =
  (w && w.__importDefault) ||
  function (t) {
    return t && t.__esModule ? t : { default: t };
  };
Object.defineProperty(zi, '__esModule', { value: !0 });
zi.KswapSdk = void 0;
const gi = _e,
  Mn = Du,
  mT = fs,
  Vt = Vn,
  gT = dp(xr),
  Pt = ht,
  Fo = En,
  ll = Bt,
  dl = dp(Je),
  AT = Lr,
  Ko = Xn,
  Vo = Ol,
  fn = Tn,
  OT = Vr,
  Ai = $t;
class RT {
  constructor(e, n, r) {
    c(this, 'apiBaseUrl');
    c(this, 'connection');
    c(this, '_apiClient');
    c(this, 'limoClient');
    c(this, 'routers', []);
    c(this, 'allRouterTypes', [...Pt.SUPPORTED_ROUTER_TYPES]);
    (this.apiBaseUrl = e),
      (this.connection = n),
      (this._apiClient = new mT.Axios({
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
      this.routers.push(new Fo.JupiterUltraRouter(this.connection)),
      this.routers.push(new OT.JupiterRouterLite(this.connection, 60)),
      (this.limoClient = new AT.LimoClient(this.connection, void 0));
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
      r = Be({}, e),
      o = e.routerTypes && e.routerTypes.length > 0 ? e.routerTypes : this.allRouterTypes;
    r.routerTypes = o;
    const i = (0, Mn.serializeRouteParams)(r),
      u = e.timeoutMs ? e.timeoutMs : Pt.DEFAULT_TIMEOUT_MS;
    try {
      const d = this.getClientSideRouteOutputPromises(r, u),
        p = this._apiClient.get(n, { params: i });
      let [a, _, A] = await Promise.all([
        p,
        Promise.all(d.filter((R) => R !== void 0)),
        this.connection.getLatestBlockhash(),
      ]);
      const m = a.data.data
        .map((R) => (0, Mn.deserializeRouteOutput)(R))
        .filter((R) => R !== void 0);
      return await this.processClientSideRouteOutput(m, _, r, A);
    } catch (d) {
      return console.error('Error fetching all routes', d), [];
    }
  }
  async getAllQuotes(e) {
    const n = '/all-quotes',
      r = Be({}, e);
    (r.routerTypes = this.filterRouterTypes(e.routerTypes)),
      (r.routerTypes = r.routerTypes.filter((u) => !Pt.EXCLUDED_QUOTES_ROUTERS.includes(u)));
    const o = (0, Mn.serializeQuoteParams)(r),
      i = r.timeoutMs ? r.timeoutMs : Pt.DEFAULT_TIMEOUT_MS;
    try {
      const u = this.getClientSideQuoteRouteOutputPromises(r, i),
        d = this._apiClient.get(n, { params: o });
      let [p, a] = await Promise.all([d, Promise.all(u.filter((m) => m !== void 0))]);
      const A = p.data.data
        .map((m) => (0, Mn.deserializeRouteOutput)(m))
        .filter((m) => m !== void 0);
      return this.processClientSideQuoteRouteOutput(A, a, r);
    } catch (u) {
      return console.error('Error fetching all routes', u), [];
    }
  }
  async getBestRoute(e) {
    const n = '/best-route',
      r = Be({}, e);
    r.routerTypes = this.filterRouterTypes(e.routerTypes);
    const o = (0, Mn.serializeRouteParams)(r);
    try {
      const u = (await this._apiClient.get(n, { params: o })).data.data;
      return (0, Mn.deserializeRouteOutput)(u);
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
        u = new Map();
      return (
        Object.entries(i).forEach(([d, p]) => {
          u.set(d, p);
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
      return await (0, Fo.fetchJupiterPrice)(e);
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
      return await (0, Vo.createJupiterApiClient)({ basePath: Pt.JUP_V6_BASE_URL }).quoteGet(e);
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
      return await (0, Vo.createJupiterApiClient)({
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
      return await (0, Vo.createJupiterApiClient)({ basePath: Pt.JUP_V6_BASE_URL }).swapPost({
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
    const n = Be({}, e.routeOutput),
      o = [...(0, Vt.createAddExtraComputeUnitsTransaction)(8e5), ...e.routeOutput.ixsRouter],
      i = new gi.TransactionMessage({
        payerKey: e.executor,
        recentBlockhash: e.bh,
        instructions: o,
      }).compileToV0Message(e.routeOutput.lookupTableAccounts),
      u = new gi.VersionedTransaction(i);
    let d, p;
    if (!e.routeOutput.inputMintProgramOwner || !e.routeOutput.outputMintProgramOwner) {
      const _ = (0, Vt.getMintsProgramOwner)(this.connection, e.tokenIn),
        A = (0, Vt.getMintsProgramOwner)(this.connection, e.tokenOut);
      [d, p] = await Promise.all([_, A]);
    } else (d = e.routeOutput.inputMintProgramOwner), (p = e.routeOutput.outputMintProgramOwner);
    const a = await (0, Vt.simulateSwapWithATABalances)(
      this.connection,
      u,
      e.executor,
      e.tokenIn,
      e.tokenOut,
      d,
      p
    );
    if (a !== void 0 && a.outputToken !== null && a.inputToken !== null) {
      const _ = e.tokenOut.equals(ll.NATIVE_MINT)
          ? a.outputToken.change.add(a.nativeChangeAmount)
          : a.outputToken.change,
        A = e.tokenIn.equals(ll.NATIVE_MINT)
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
        ((n = (0, Vt.removeComputeBudgetIxns)(n)), n.unshift(...e.computeBudgetInstructions));
      const r = new gi.TransactionMessage({
          payerKey: e.userToExecute,
          recentBlockhash: e.recentBlockhash,
          instructions: n,
        }).compileToV0Message(e.router.lookupTableAccounts),
        o = new gi.VersionedTransaction(r),
        i = await e.signTransaction(o),
        u = await e.executeTransaction(i);
      return await e.confirmTransaction(u), u;
    }
  }
  async getClientSideRouteOutputSimulationAndPriceImpact(e, n, r, o) {
    const i = (0, fn.getAsyncDataFromApiRouteOutput)(e);
    return Promise.all(
      n.map(async (d) => {
        d = (0, fn.addAsyncDataToRouteOutput)(d, i);
        let p;
        return (
          d.routerType === 'jupiterZ'
            ? ((p = d),
              r.swapType === 'exactIn'
                ? (p.amountsExactIn.amountOutSimulated = p.amountsExactIn.amountOut)
                : (p.amountsExactOut.amountInSimulated = p.amountsExactOut.amountIn),
              (p.simulationTimestamp = Date.now()))
            : (p = (
                await this.simulateRouteAndGetNewSimulatedValuesRouteOutput({
                  routeOutput: d,
                  executor: r.executor,
                  tokenIn: r.tokenIn,
                  tokenOut: r.tokenOut,
                  swapType: r.swapType,
                  bh: o.blockhash,
                })
              ).routeOutput),
          (0, fn.addPricesAndPriceImpactToRouteOutput)(r, p)
        );
      })
    );
  }
  addOrReplaceLimoLogsInstructionWithNextBest(e, n) {
    try {
      let r = new dl.default(0),
        o = 0,
        i = new dl.default(0),
        u = 0,
        d = -1;
      const p = (0, fn.getAsyncDataFromApiRouteOutput)(e);
      return (
        e.forEach((a, _) => {
          if (a.amountsExactIn.amountOutSimulated !== void 0) {
            const A = a.amountsExactIn.amountOutSimulated;
            A.gt(i)
              ? ((r = i), (o = u), (i = A), (u = (0, Pt.getRouterTypeID)(a.routerType)), (d = _))
              : A.gt(r) && A.lte(i) && ((r = A), (o = (0, Pt.getRouterTypeID)(a.routerType)));
          }
        }),
        e.forEach((a) => {
          (a.ixsRouter = (0, Ko.removeLimoLogsIxns)(a.ixsRouter)),
            (a = (0, Ko.wrapLimoLogsAroundRoute)({
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
        if ((0, Vt.compareUint8Arrays)(d, a)) {
          p = !1;
          break;
        }
      if (p) {
        i = gT.default.encode(d);
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
      o = ie.Buffer.from(r.serialize()).toString('base64'),
      i = await (0, Fo.executeJupiterZTransaction)({
        signedTransaction: o,
        requestId: e.router.jupRequestId,
      });
    if (i.status !== 'Success' || !i.signature)
      throw new Error('Failed to submit Jupiter Z transaction');
    const u = i.signature;
    return await e.confirmTransaction(u), u;
  }
  getClientSideRouteOutputPromises(e, n) {
    const r = (0, Ai.filterArrayRouterTypes)(
      e.routerTypes,
      e.includeRfq !== void 0 ? e.includeRfq : !0
    );
    return this.routers
      .map((i) => {
        if ((0, Ai.isRequestedRouterType)(r, i.routerType))
          return (0, Vt.withTimeout)(i.route(e), n, () =>
            console.debug(
              'Router '.concat(i.routerType || 'unknown', ' timed out after ').concat(n, 'ms')
            )
          );
      })
      .filter((i) => i !== void 0);
  }
  getClientSideQuoteRouteOutputPromises(e, n) {
    const r = (0, Ai.filterArrayRouterTypes)(
      e.routerTypes,
      e.includeRfq !== void 0 ? e.includeRfq : !0
    );
    return this.routers
      .map((i) => {
        if ((0, Ai.isRequestedRouterType)(r, i.routerType))
          return (0, Vt.withTimeout)(i.quote(e), n, () =>
            console.debug(
              'Router '.concat(i.routerType || 'unknown', ' timed out after ').concat(n, 'ms')
            )
          );
      })
      .filter((i) => i !== void 0);
  }
  async processClientSideRouteOutput(e, n, r, o) {
    const i = n.filter(
        (p) =>
          p != null && !(p.routerType === 'jupiterZ' && r.includeRfq !== void 0 && !r.includeRfq)
      ),
      u = await this.getClientSideRouteOutputSimulationAndPriceImpact(e, i, r, o);
    let d = [];
    return (
      u.length > 0
        ? (e.push(...u),
          (0, Ko.includeLimoLogs)(r.includeLimoLogs)
            ? (d = this.addOrReplaceLimoLogsInstructionWithNextBest(e, r))
            : (d = e))
        : (d = e),
      d
    );
  }
  processClientSideQuoteRouteOutput(e, n, r) {
    const o = n.filter(
        (d) =>
          d != null && !(d.routerType === 'jupiterZ' && r.includeRfq !== void 0 && !r.includeRfq)
      ),
      i = (0, fn.getAsyncDataFromApiRouteOutput)(e),
      u = o.map(
        (d) => (
          (d = (0, fn.addAsyncDataToRouteOutput)(d, i)),
          (0, fn.addPricesAndPriceImpactToRouteOutput)(r, d)
        )
      );
    return e.push(...u), e;
  }
  filterRouterTypes(e) {
    return e && e.length > 0 ? e : this.allRouterTypes;
  }
  hasJupiterUltraRouter(e) {
    return !e || e.includes('jupiterU') || e.includes('jupiterZ');
  }
}
zi.KswapSdk = RT;
var fp = {};
(function (t) {
  var e =
      (w && w.__createBinding) ||
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
      (w && w.__exportStar) ||
      function (r, o) {
        for (var i in r)
          i !== 'default' && !Object.prototype.hasOwnProperty.call(o, i) && e(o, r, i);
      };
  Object.defineProperty(t, '__esModule', { value: !0 }), n(qr, t), n(Vr, t), n(En, t);
})(fp);
(function (t) {
  var e =
      (w && w.__createBinding) ||
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
      (w && w.__exportStar) ||
      function (r, o) {
        for (var i in r)
          i !== 'default' && !Object.prototype.hasOwnProperty.call(o, i) && e(o, r, i);
      };
  Object.defineProperty(t, '__esModule', { value: !0 }),
    n(Vn, t),
    n(ht, t),
    n(Du, t),
    n(zi, t),
    n(fp, t);
})(Ml);
const yT = 'https://api.kamino.finance/kswap',
  YT = () => {
    const { web3client: t } = I_();
    return { kswapSdk: E_.useMemo(() => new Ml.KswapSdk(yT, t.connection), [t]) };
  };
export { Lr as d, Rl as p, Pl as r, YT as u };
//# sourceMappingURL=useKswapSdk-CDkxmQxX.js.map
