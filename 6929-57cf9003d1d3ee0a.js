try {
  let e =
      'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
          ? global
          : 'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof self
              ? self
              : {},
    t = new e.Error().stack;
  t &&
    ((e._sentryDebugIds = e._sentryDebugIds || {}),
    (e._sentryDebugIds[t] = '59881905-6f25-4ad5-9074-90d714989c8b'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-59881905-6f25-4ad5-9074-90d714989c8b'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6929],
  {
    36929: function (e, t, s) {
      s.d(t, {
        default: function () {
          return C;
        },
      });
      let a = () => '9.1.0',
        n = (e) => e.toString(16).padStart(2, '0'),
        i = (e) => {
          let t = new Uint8Array((e || 40) / 2);
          return window.crypto.getRandomValues(t), Array.from(t, n).join('');
        },
        r = () => ('undefined' != typeof window ? i(10) : new Date().getTime().toString(36));
      class o {}
      (o.makeRequest = (e, t) => ({ id: r(), method: e, params: t, env: { sdkVersion: a() } })),
        (o.makeResponse = (e, t, s) => ({ id: e, success: !0, version: s, data: t })),
        (o.makeErrorResponse = (e, t, s) => ({ id: e, success: !1, error: t, version: s })),
        ((f = p || (p = {})).sendTransactions = 'sendTransactions'),
        (f.rpcCall = 'rpcCall'),
        (f.getChainInfo = 'getChainInfo'),
        (f.getSafeInfo = 'getSafeInfo'),
        (f.getTxBySafeTxHash = 'getTxBySafeTxHash'),
        (f.getSafeBalances = 'getSafeBalances'),
        (f.signMessage = 'signMessage'),
        (f.signTypedMessage = 'signTypedMessage'),
        (f.getEnvironmentInfo = 'getEnvironmentInfo'),
        (f.getOffChainSignature = 'getOffChainSignature'),
        (f.requestAddressBook = 'requestAddressBook'),
        (f.wallet_getPermissions = 'wallet_getPermissions'),
        (f.wallet_requestPermissions = 'wallet_requestPermissions'),
        ((w || (w = {})).requestAddressBook = 'requestAddressBook');
      class c {
        constructor(e = null, t = !1) {
          (this.allowedOrigins = null),
            (this.callbacks = new Map()),
            (this.debugMode = !1),
            (this.isServer = 'undefined' == typeof window),
            (this.isValidMessage = ({ origin: e, data: t, source: s }) => {
              let a = !this.isServer && s === window.parent,
                n = void 0 !== t.version && parseInt(t.version.split('.')[0]),
                i = !0;
              return (
                Array.isArray(this.allowedOrigins) &&
                  (i = void 0 !== this.allowedOrigins.find((t) => t.test(e))),
                !!t && a && 'number' == typeof n && n >= 1 && i
              );
            }),
            (this.logIncomingMessage = (e) => {
              console.info(
                `Safe Apps SDK v1: A message was received from origin ${e.origin}. `,
                e.data
              );
            }),
            (this.onParentMessage = (e) => {
              this.isValidMessage(e) &&
                (this.debugMode && this.logIncomingMessage(e), this.handleIncomingMessage(e.data));
            }),
            (this.handleIncomingMessage = (e) => {
              let { id: t } = e,
                s = this.callbacks.get(t);
              s && (s(e), this.callbacks.delete(t));
            }),
            (this.send = (e, t) => {
              let s = o.makeRequest(e, t);
              if (this.isServer) throw Error("Window doesn't exist");
              return (
                window.parent.postMessage(s, '*'),
                new Promise((e, t) => {
                  this.callbacks.set(s.id, (s) => {
                    if (!s.success) {
                      t(Error(s.error));
                      return;
                    }
                    e(s);
                  });
                })
              );
            }),
            (this.allowedOrigins = e),
            (this.debugMode = t),
            this.isServer || window.addEventListener('message', this.onParentMessage);
        }
      }
      let l = (e) =>
        'object' == typeof e && null != e && 'domain' in e && 'types' in e && 'message' in e;
      s(97287);
      class u {
        constructor(e) {
          this.communicator = e;
        }
        async getBySafeTxHash(e) {
          if (!e) throw Error('Invalid safeTxHash');
          return (await this.communicator.send(p.getTxBySafeTxHash, { safeTxHash: e })).data;
        }
        async signMessage(e) {
          return (await this.communicator.send(p.signMessage, { message: e })).data;
        }
        async signTypedMessage(e) {
          if (!l(e)) throw Error('Invalid typed data');
          return (await this.communicator.send(p.signTypedMessage, { typedData: e })).data;
        }
        async send({ txs: e, params: t }) {
          if (!e || !e.length) throw Error('No transactions were passed');
          return (await this.communicator.send(p.sendTransactions, { txs: e, params: t })).data;
        }
      }
      let d = 'eth_call',
        h = (e = 'latest') => e,
        g = (e = !1) => e,
        m = (e) => (Number.isInteger(e) ? `0x${e.toString(16)}` : e);
      class y {
        constructor(e) {
          (this.communicator = e),
            (this.call = this.buildRequest({ call: d, formatters: [null, h] })),
            (this.getBalance = this.buildRequest({
              call: 'eth_getBalance',
              formatters: [null, h],
            })),
            (this.getCode = this.buildRequest({ call: 'eth_getCode', formatters: [null, h] })),
            (this.getStorageAt = this.buildRequest({
              call: 'eth_getStorageAt',
              formatters: [null, m, h],
            })),
            (this.getPastLogs = this.buildRequest({ call: 'eth_getLogs' })),
            (this.getBlockByHash = this.buildRequest({
              call: 'eth_getBlockByHash',
              formatters: [null, g],
            })),
            (this.getBlockByNumber = this.buildRequest({
              call: 'eth_getBlockByNumber',
              formatters: [m, g],
            })),
            (this.getTransactionByHash = this.buildRequest({ call: 'eth_getTransactionByHash' })),
            (this.getTransactionReceipt = this.buildRequest({ call: 'eth_getTransactionReceipt' })),
            (this.getTransactionCount = this.buildRequest({
              call: 'eth_getTransactionCount',
              formatters: [null, h],
            })),
            (this.getGasPrice = this.buildRequest({ call: 'eth_gasPrice' })),
            (this.getEstimateGas = (e) => this.buildRequest({ call: 'eth_estimateGas' })([e])),
            (this.setSafeSettings = this.buildRequest({ call: 'safe_setSettings' }));
        }
        buildRequest(e) {
          let { call: t, formatters: s } = e;
          return async (e) => (
            s &&
              Array.isArray(e) &&
              s.forEach((t, s) => {
                t && (e[s] = t(e[s]));
              }),
            (await this.communicator.send(p.rpcCall, { call: t, params: e || [] })).data
          );
        }
      }
      var f,
        p,
        w,
        b = s(392),
        v = s(1264),
        I = s(78035);
      class S extends Error {
        constructor(e, t, s) {
          super(e), (this.code = t), (this.data = s), Object.setPrototypeOf(this, S.prototype);
        }
      }
      class P {
        constructor(e) {
          this.communicator = e;
        }
        async getPermissions() {
          return (await this.communicator.send(p.wallet_getPermissions, void 0)).data;
        }
        async requestPermissions(e) {
          if (!this.isPermissionRequestValid(e))
            throw new S('Permissions request is invalid', 4001);
          try {
            return (await this.communicator.send(p.wallet_requestPermissions, e)).data;
          } catch {
            throw new S('Permissions rejected', 4001);
          }
        }
        isPermissionRequestValid(e) {
          return e.every(
            (e) =>
              'object' == typeof e && Object.keys(e).every((e) => !!Object.values(w).includes(e))
          );
        }
      }
      let M = (e, t) => t.some((t) => t.parentCapability === e);
      class k {
        constructor(e) {
          this.communicator = e;
        }
        async getChainInfo() {
          return (await this.communicator.send(p.getChainInfo, void 0)).data;
        }
        async getInfo() {
          return (await this.communicator.send(p.getSafeInfo, void 0)).data;
        }
        async experimental_getBalances({ currency: e = 'usd' } = {}) {
          return (await this.communicator.send(p.getSafeBalances, { currency: e })).data;
        }
        async check1271Signature(e, t = '0x') {
          let s = await this.getInfo(),
            a = (0, b.R)({
              abi: [
                {
                  constant: !1,
                  inputs: [
                    { name: '_dataHash', type: 'bytes32' },
                    { name: '_signature', type: 'bytes' },
                  ],
                  name: 'isValidSignature',
                  outputs: [{ name: '', type: 'bytes4' }],
                  payable: !1,
                  stateMutability: 'nonpayable',
                  type: 'function',
                },
              ],
              functionName: 'isValidSignature',
              args: [e, t],
            }),
            n = { call: d, params: [{ to: s.safeAddress, data: a }, 'latest'] };
          try {
            return (
              '0x1626ba7e' ===
              (await this.communicator.send(p.rpcCall, n)).data.slice(0, 10).toLowerCase()
            );
          } catch (e) {
            return !1;
          }
        }
        async check1271SignatureBytes(e, t = '0x') {
          let s = await this.getInfo(),
            a = (0, b.R)({
              abi: [
                {
                  constant: !1,
                  inputs: [
                    { name: '_data', type: 'bytes' },
                    { name: '_signature', type: 'bytes' },
                  ],
                  name: 'isValidSignature',
                  outputs: [{ name: '', type: 'bytes4' }],
                  payable: !1,
                  stateMutability: 'nonpayable',
                  type: 'function',
                },
              ],
              functionName: 'isValidSignature',
              args: [e, t],
            }),
            n = { call: d, params: [{ to: s.safeAddress, data: a }, 'latest'] };
          try {
            return (
              '0x20c13b0b' ===
              (await this.communicator.send(p.rpcCall, n)).data.slice(0, 10).toLowerCase()
            );
          } catch (e) {
            return !1;
          }
        }
        calculateMessageHash(e) {
          return (0, v.r)(e);
        }
        calculateTypedMessageHash(e) {
          let t =
              'object' == typeof e.domain.chainId
                ? e.domain.chainId.toNumber()
                : Number(e.domain.chainId),
            s = e.primaryType;
          if (!s) {
            let t = Object.values(e.types),
              a = Object.keys(e.types).filter((e) =>
                t.every((t) => t.every(({ type: t }) => t.replace('[', '').replace(']', '') !== e))
              );
            if (0 === a.length || a.length > 1) throw Error('Please specify primaryType');
            s = a[0];
          }
          return (0, I.Jv)({
            message: e.message,
            domain: {
              ...e.domain,
              chainId: t,
              verifyingContract: e.domain.verifyingContract,
              salt: e.domain.salt,
            },
            types: e.types,
            primaryType: s,
          });
        }
        async getOffChainSignature(e) {
          return (await this.communicator.send(p.getOffChainSignature, e)).data;
        }
        async isMessageSigned(e, t = '0x') {
          let s;
          if (
            ('string' == typeof e &&
              (s = async () => {
                let s = this.calculateMessageHash(e);
                return await this.isMessageHashSigned(s, t);
              }),
            l(e) &&
              (s = async () => {
                let s = this.calculateTypedMessageHash(e);
                return await this.isMessageHashSigned(s, t);
              }),
            s)
          )
            return await s();
          throw Error('Invalid message type');
        }
        async isMessageHashSigned(e, t = '0x') {
          for (let s of [
            this.check1271Signature.bind(this),
            this.check1271SignatureBytes.bind(this),
          ])
            if (await s(e, t)) return !0;
          return !1;
        }
        async getEnvironmentInfo() {
          return (await this.communicator.send(p.getEnvironmentInfo, void 0)).data;
        }
        async requestAddressBook() {
          return (await this.communicator.send(p.requestAddressBook, void 0)).data;
        }
      }
      !(function (e, t, s, a) {
        var n,
          i = arguments.length,
          r = i < 3 ? t : null === a ? (a = Object.getOwnPropertyDescriptor(t, s)) : a;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          r = Reflect.decorate(e, t, s, a);
        else
          for (var o = e.length - 1; o >= 0; o--)
            (n = e[o]) && (r = (i < 3 ? n(r) : i > 3 ? n(t, s, r) : n(t, s)) || r);
        i > 3 && r && Object.defineProperty(t, s, r);
      })(
        [
          (e, t, s) => {
            let a = s.value;
            return (
              (s.value = async function () {
                let e = new P(this.communicator),
                  s = await e.getPermissions();
                if ((M(t, s) || (s = await e.requestPermissions([{ [t]: {} }])), !M(t, s)))
                  throw new S('Permissions rejected', 4001);
                return a.apply(this);
              }),
              s
            );
          },
        ],
        k.prototype,
        'requestAddressBook',
        null
      );
      class E {
        constructor(e = {}) {
          let { allowedDomains: t = null, debug: s = !1 } = e;
          (this.communicator = new c(t, s)),
            (this.eth = new y(this.communicator)),
            (this.txs = new u(this.communicator)),
            (this.safe = new k(this.communicator)),
            (this.wallet = new P(this.communicator));
        }
      }
      var C = E;
    },
    1264: function (e, t, s) {
      s.d(t, {
        r: function () {
          return o;
        },
      });
      var a = s(47824),
        n = s(63171),
        i = s(88155),
        r = s(84196);
      function o(e, t) {
        return (0, a.w)(
          (function (e) {
            let t =
                'string' == typeof e
                  ? (0, r.$G)(e)
                  : 'string' == typeof e.raw
                    ? e.raw
                    : (0, r.ci)(e.raw),
              s = (0, r.$G)(`\x19Ethereum Signed Message:
${(0, i.d)(t)}`);
            return (0, n.zo)([s, t]);
          })(e),
          t
        );
      }
    },
    78035: function (e, t, s) {
      s.d(t, {
        Jv: function () {
          return c;
        },
      });
      var a = s(9691),
        n = s(63171),
        i = s(84196),
        r = s(47824),
        o = s(47387);
      function c(e) {
        let { domain: t = {}, message: s, primaryType: a } = e,
          i = { EIP712Domain: (0, o.cj)({ domain: t }), ...e.types };
        (0, o.iC)({ domain: t, message: s, primaryType: a, types: i });
        let c = ['0x1901'];
        return (
          t &&
            c.push(
              (function ({ domain: e, types: t }) {
                return l({ data: e, primaryType: 'EIP712Domain', types: t });
              })({ domain: t, types: i })
            ),
          'EIP712Domain' !== a && c.push(l({ data: s, primaryType: a, types: i })),
          (0, r.w)((0, n.zo)(c))
        );
      }
      function l({ data: e, primaryType: t, types: s }) {
        let n = (function e({ data: t, primaryType: s, types: n }) {
          let o = [{ type: 'bytes32' }],
            c = [
              (function ({ primaryType: e, types: t }) {
                let s = (0, i.NC)(
                  (function ({ primaryType: e, types: t }) {
                    let s = '',
                      a = (function e({ primaryType: t, types: s }, a = new Set()) {
                        let n = t.match(/^\w*/u),
                          i = n?.[0];
                        if (a.has(i) || void 0 === s[i]) return a;
                        for (let t of (a.add(i), s[i])) e({ primaryType: t.type, types: s }, a);
                        return a;
                      })({ primaryType: e, types: t });
                    for (let n of (a.delete(e), [e, ...Array.from(a).sort()]))
                      s += `${n}(${t[n].map(({ name: e, type: t }) => `${t} ${e}`).join(',')})`;
                    return s;
                  })({ primaryType: e, types: t })
                );
                return (0, r.w)(s);
              })({ primaryType: s, types: n }),
            ];
          for (let l of n[s]) {
            let [s, u] = (function t({ types: s, name: n, type: o, value: c }) {
              if (void 0 !== s[o])
                return [{ type: 'bytes32' }, (0, r.w)(e({ data: c, primaryType: o, types: s }))];
              if ('bytes' === o) {
                let e = c.length % 2 ? '0' : '';
                return (c = `0x${e + c.slice(2)}`), [{ type: 'bytes32' }, (0, r.w)(c)];
              }
              if ('string' === o) return [{ type: 'bytes32' }, (0, r.w)((0, i.NC)(c))];
              if (o.lastIndexOf(']') === o.length - 1) {
                let e = o.slice(0, o.lastIndexOf('[')),
                  i = c.map((a) => t({ name: n, type: e, types: s, value: a }));
                return [
                  { type: 'bytes32' },
                  (0, r.w)(
                    (0, a.E)(
                      i.map(([e]) => e),
                      i.map(([, e]) => e)
                    )
                  ),
                ];
              }
              return [{ type: o }, c];
            })({ types: n, name: l.name, type: l.type, value: t[l.name] });
            o.push(s), c.push(u);
          }
          return (0, a.E)(o, c);
        })({ data: e, primaryType: t, types: s });
        return (0, r.w)(n);
      }
    },
    47387: function (e, t, s) {
      s.d(t, {
        cj: function () {
          return f;
        },
        H6: function () {
          return m;
        },
        iC: function () {
          return y;
        },
      });
      var a = s(57585),
        n = s(37039),
        i = s(97352),
        r = s(88154);
      class o extends r.G {
        constructor({ domain: e }) {
          super(`Invalid domain "${(0, i.P)(e)}".`, {
            metaMessages: ['Must be a valid EIP-712 domain.'],
          });
        }
      }
      class c extends r.G {
        constructor({ primaryType: e, types: t }) {
          super(
            `Invalid primary type \`${e}\` must be one of \`${JSON.stringify(Object.keys(t))}\`.`,
            {
              docsPath: '/api/glossary/Errors#typeddatainvalidprimarytypeerror',
              metaMessages: ['Check that the primary type is a key in `types`.'],
            }
          );
        }
      }
      class l extends r.G {
        constructor({ type: e }) {
          super(`Struct type "${e}" is invalid.`, {
            metaMessages: ['Struct type must not be a Solidity type.'],
            name: 'InvalidStructTypeError',
          });
        }
      }
      var u = s(77102),
        d = s(88155),
        h = s(84196),
        g = s(69349);
      function m(e) {
        let { domain: t, message: s, primaryType: a, types: n } = e,
          r = (e, t) => {
            let s = { ...t };
            for (let t of e) {
              let { name: e, type: a } = t;
              'address' === a && (s[e] = s[e].toLowerCase());
            }
            return s;
          },
          o = n.EIP712Domain && t ? r(n.EIP712Domain, t) : {},
          c = (() => {
            if ('EIP712Domain' !== a) return r(n[a], s);
          })();
        return (0, i.P)({ domain: o, message: c, primaryType: a, types: n });
      }
      function y(e) {
        let { domain: t, message: s, primaryType: i, types: r } = e,
          m = (e, t) => {
            for (let s of e) {
              let { name: e, type: i } = s,
                o = t[e],
                c = i.match(g.lh);
              if (c && ('number' == typeof o || 'bigint' == typeof o)) {
                let [e, t, s] = c;
                (0, h.eC)(o, { signed: 'int' === t, size: Number.parseInt(s) / 8 });
              }
              if ('address' === i && 'string' == typeof o && !(0, u.U)(o))
                throw new n.b({ address: o });
              let y = i.match(g.eL);
              if (y) {
                let [e, t] = y;
                if (t && (0, d.d)(o) !== Number.parseInt(t))
                  throw new a.KY({ expectedSize: Number.parseInt(t), givenSize: (0, d.d)(o) });
              }
              let f = r[i];
              f &&
                ((function (e) {
                  if (
                    'address' === e ||
                    'bool' === e ||
                    'string' === e ||
                    e.startsWith('bytes') ||
                    e.startsWith('uint') ||
                    e.startsWith('int')
                  )
                    throw new l({ type: e });
                })(i),
                m(f, o));
            }
          };
        if (r.EIP712Domain && t) {
          if ('object' != typeof t) throw new o({ domain: t });
          m(r.EIP712Domain, t);
        }
        if ('EIP712Domain' !== i) {
          if (r[i]) m(r[i], s);
          else throw new c({ primaryType: i, types: r });
        }
      }
      function f({ domain: e }) {
        return [
          'string' == typeof e?.name && { name: 'name', type: 'string' },
          e?.version && { name: 'version', type: 'string' },
          ('number' == typeof e?.chainId || 'bigint' == typeof e?.chainId) && {
            name: 'chainId',
            type: 'uint256',
          },
          e?.verifyingContract && { name: 'verifyingContract', type: 'address' },
          e?.salt && { name: 'salt', type: 'bytes32' },
        ].filter(Boolean);
      }
    },
  },
]);
