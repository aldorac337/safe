'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3846],
  {
    46669: function (e, t, n) {
      n.d(t, {
        G: function () {
          return u;
        },
      });
      var a,
        r,
        i = n(12880);
      let s = () => `@wagmi/core@${i.i}`;
      var o = function (e, t, n, a) {
        if ('a' === n && !a) throw TypeError('Private accessor was defined without a getter');
        if ('function' == typeof t ? e !== t || !a : !t.has(e))
          throw TypeError(
            'Cannot read private member from an object whose class did not declare it'
          );
        return 'm' === n ? a : 'a' === n ? a.call(e) : a ? a.value : t.get(e);
      };
      class u extends Error {
        get docsBaseUrl() {
          return 'https://wagmi.sh/core';
        }
        get version() {
          return s();
        }
        constructor(e, t = {}) {
          super(),
            a.add(this),
            Object.defineProperty(this, 'details', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'docsPath', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'metaMessages', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'shortMessage', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'WagmiCoreError',
            });
          let n =
              t.cause instanceof u
                ? t.cause.details
                : t.cause?.message
                  ? t.cause.message
                  : t.details,
            r = (t.cause instanceof u && t.cause.docsPath) || t.docsPath;
          (this.message = [
            e || 'An error occurred.',
            '',
            ...(t.metaMessages ? [...t.metaMessages, ''] : []),
            ...(r
              ? [`Docs: ${this.docsBaseUrl}${r}.html${t.docsSlug ? `#${t.docsSlug}` : ''}`]
              : []),
            ...(n ? [`Details: ${n}`] : []),
            `Version: ${this.version}`,
          ].join('\n')),
            t.cause && (this.cause = t.cause),
            (this.details = n),
            (this.docsPath = r),
            (this.metaMessages = t.metaMessages),
            (this.shortMessage = e);
        }
        walk(e) {
          return o(this, a, 'm', r).call(this, this, e);
        }
      }
      (a = new WeakSet()),
        (r = function e(t, n) {
          return n?.(t) ? t : t.cause ? o(this, a, 'm', e).call(this, t.cause, n) : t;
        });
    },
    12880: function (e, t, n) {
      n.d(t, {
        i: function () {
          return a;
        },
      });
      let a = '2.16.5';
    },
    70713: function (e, t, n) {
      n.d(t, {
        G: function () {
          return a;
        },
      });
      class a extends Error {
        constructor(e, t = {}) {
          let n =
              t.cause instanceof a
                ? t.cause.details
                : t.cause?.message
                  ? t.cause.message
                  : t.details,
            r = (t.cause instanceof a && t.cause.docsPath) || t.docsPath;
          super(
            [
              e || 'An error occurred.',
              '',
              ...(t.metaMessages ? [...t.metaMessages, ''] : []),
              ...(r ? [`Docs: https://abitype.dev${r}`] : []),
              ...(n ? [`Details: ${n}`] : []),
              'Version: abitype@1.0.8',
            ].join('\n')
          ),
            Object.defineProperty(this, 'details', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'docsPath', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'metaMessages', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'shortMessage', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'AbiTypeError',
            }),
            t.cause && (this.cause = t.cause),
            (this.details = n),
            (this.docsPath = r),
            (this.metaMessages = t.metaMessages),
            (this.shortMessage = e);
        }
      }
    },
    30504: function (e, t, n) {
      n.d(t, {
        F: function () {
          return i;
        },
        Hk: function () {
          return s;
        },
        a_: function () {
          return r;
        },
      });
      var a = n(70713);
      class r extends a.G {
        constructor({ signature: e }) {
          super('Failed to parse ABI item.', {
            details: `parseAbiItem(${JSON.stringify(e, null, 2)})`,
            docsPath: '/api/human#parseabiitem-1',
          }),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'InvalidAbiItemError',
            });
        }
      }
      class i extends a.G {
        constructor({ type: e }) {
          super('Unknown type.', {
            metaMessages: [
              `Type "${e}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`,
            ],
          }),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'UnknownTypeError',
            });
        }
      }
      class s extends a.G {
        constructor({ type: e }) {
          super('Unknown type.', { metaMessages: [`Type "${e}" is not a valid ABI type.`] }),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'UnknownSolidityTypeError',
            });
        }
      }
    },
    31529: function (e, t, n) {
      n.d(t, {
        TT: function () {
          return i;
        },
        _D: function () {
          return o;
        },
        aZ: function () {
          return u;
        },
        jO: function () {
          return r;
        },
        zL: function () {
          return s;
        },
      });
      var a = n(70713);
      class r extends a.G {
        constructor({ param: e }) {
          super('Invalid ABI parameter.', { details: e }),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'InvalidParameterError',
            });
        }
      }
      class i extends a.G {
        constructor({ param: e, name: t }) {
          super('Invalid ABI parameter.', {
            details: e,
            metaMessages: [
              `"${t}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`,
            ],
          }),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'SolidityProtectedKeywordError',
            });
        }
      }
      class s extends a.G {
        constructor({ param: e, type: t, modifier: n }) {
          super('Invalid ABI parameter.', {
            details: e,
            metaMessages: [`Modifier "${n}" not allowed${t ? ` in "${t}" type` : ''}.`],
          }),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'InvalidModifierError',
            });
        }
      }
      class o extends a.G {
        constructor({ param: e, type: t, modifier: n }) {
          super('Invalid ABI parameter.', {
            details: e,
            metaMessages: [
              `Modifier "${n}" not allowed${t ? ` in "${t}" type` : ''}.`,
              `Data location can only be specified for array, struct, or mapping types, but "${n}" was given.`,
            ],
          }),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'InvalidFunctionModifierError',
            });
        }
      }
      class u extends a.G {
        constructor({ abiParameter: e }) {
          super('Invalid ABI parameter.', {
            details: JSON.stringify(e, null, 2),
            metaMessages: ['ABI parameter type is invalid.'],
          }),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'InvalidAbiTypeParameterError',
            });
        }
      }
    },
    31378: function (e, t, n) {
      n.d(t, {
        H6: function () {
          return s;
        },
        Vs: function () {
          return i;
        },
        wn: function () {
          return r;
        },
      });
      var a = n(70713);
      class r extends a.G {
        constructor({ signature: e, type: t }) {
          super(`Invalid ${t} signature.`, { details: e }),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'InvalidSignatureError',
            });
        }
      }
      class i extends a.G {
        constructor({ signature: e }) {
          super('Unknown signature.', { details: e }),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'UnknownSignatureError',
            });
        }
      }
      class s extends a.G {
        constructor({ signature: e }) {
          super('Invalid struct signature.', {
            details: e,
            metaMessages: ['No properties exist.'],
          }),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'InvalidStructSignatureError',
            });
        }
      }
    },
    9923: function (e, t, n) {
      n.d(t, {
        Dt: function () {
          return A;
        },
        EC: function () {
          return g;
        },
        N0: function () {
          return b;
        },
        PI: function () {
          return w;
        },
        QM: function () {
          return x;
        },
        SA: function () {
          return s;
        },
        Wg: function () {
          return k;
        },
        _c: function () {
          return i;
        },
        a4: function () {
          return h;
        },
        c3: function () {
          return u;
        },
        g1: function () {
          return y;
        },
        l$: function () {
          return p;
        },
        qm: function () {
          return $;
        },
        rh: function () {
          return l;
        },
        wA: function () {
          return d;
        },
      });
      var a = n(52885);
      let r = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
      function i(e) {
        return r.test(e);
      }
      function s(e) {
        return (0, a.Zw)(r, e);
      }
      let o = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
      function u(e) {
        return o.test(e);
      }
      function d(e) {
        return (0, a.Zw)(o, e);
      }
      let c =
        /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
      function l(e) {
        return c.test(e);
      }
      function p(e) {
        return (0, a.Zw)(c, e);
      }
      let f = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;
      function b(e) {
        return f.test(e);
      }
      function y(e) {
        return (0, a.Zw)(f, e);
      }
      let m = /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
      function h(e) {
        return m.test(e);
      }
      function w(e) {
        return (0, a.Zw)(m, e);
      }
      let v = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;
      function g(e) {
        return v.test(e);
      }
      function $(e) {
        return (0, a.Zw)(v, e);
      }
      let M = /^receive\(\) external payable$/;
      function x(e) {
        return M.test(e);
      }
      let k = new Set(['indexed']),
        A = new Set(['calldata', 'memory', 'storage']);
    },
    46927: function (e, t, n) {
      n.d(t, {
        D: function () {
          return l;
        },
      });
      var a = n(52885),
        r = n(30504),
        i = n(31529),
        s = n(31378),
        o = n(70713);
      class u extends o.G {
        constructor({ type: e }) {
          super('Circular reference detected.', {
            metaMessages: [`Struct "${e}" is a circular reference.`],
          }),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'CircularReferenceError',
            });
        }
      }
      var d = n(9923),
        c = n(37074);
      function l(e) {
        let t = {},
          n = e.length;
        for (let a = 0; a < n; a++) {
          let n = e[a];
          if (!(0, d.N0)(n)) continue;
          let r = (0, d.g1)(n);
          if (!r) throw new s.wn({ signature: n, type: 'struct' });
          let i = r.properties.split(';'),
            o = [],
            u = i.length;
          for (let e = 0; e < u; e++) {
            let t = i[e].trim();
            if (!t) continue;
            let n = (0, c.C$)(t, { type: 'struct' });
            o.push(n);
          }
          if (!o.length) throw new s.H6({ signature: n });
          t[r.name] = o;
        }
        let o = {},
          l = Object.entries(t),
          f = l.length;
        for (let e = 0; e < f; e++) {
          let [n, s] = l[e];
          o[n] = (function e(t, n, s = new Set()) {
            let o = [],
              d = t.length;
            for (let l = 0; l < d; l++) {
              let d = t[l];
              if (a.cN.test(d.type)) o.push(d);
              else {
                let t = (0, a.Zw)(p, d.type);
                if (!t?.type) throw new i.aZ({ abiParameter: d });
                let { array: l, type: f } = t;
                if (f in n) {
                  if (s.has(f)) throw new u({ type: f });
                  o.push({
                    ...d,
                    type: `tuple${l ?? ''}`,
                    components: e(n[f] ?? [], n, new Set([...s, f])),
                  });
                } else if ((0, c.uN)(f)) o.push(d);
                else throw new r.F({ type: f });
              }
            }
            return o;
          })(s, t);
        }
        return o;
      }
      let p = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
    },
    37074: function (e, t, n) {
      n.d(t, {
        uN: function () {
          return h;
        },
        C$: function () {
          return y;
        },
        cK: function () {
          return l;
        },
      });
      var a = n(52885),
        r = n(30504),
        i = n(31529),
        s = n(31378),
        o = n(70713);
      class u extends o.G {
        constructor({ current: e, depth: t }) {
          super('Unbalanced parentheses.', {
            metaMessages: [
              `"${e.trim()}" has too many ${t > 0 ? 'opening' : 'closing'} parentheses.`,
            ],
            details: `Depth "${t}"`,
          }),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'InvalidParenthesisError',
            });
        }
      }
      let d = new Map([
        ['address', { type: 'address' }],
        ['bool', { type: 'bool' }],
        ['bytes', { type: 'bytes' }],
        ['bytes32', { type: 'bytes32' }],
        ['int', { type: 'int256' }],
        ['int256', { type: 'int256' }],
        ['string', { type: 'string' }],
        ['uint', { type: 'uint256' }],
        ['uint8', { type: 'uint8' }],
        ['uint16', { type: 'uint16' }],
        ['uint24', { type: 'uint24' }],
        ['uint32', { type: 'uint32' }],
        ['uint64', { type: 'uint64' }],
        ['uint96', { type: 'uint96' }],
        ['uint112', { type: 'uint112' }],
        ['uint160', { type: 'uint160' }],
        ['uint192', { type: 'uint192' }],
        ['uint256', { type: 'uint256' }],
        ['address owner', { type: 'address', name: 'owner' }],
        ['address to', { type: 'address', name: 'to' }],
        ['bool approved', { type: 'bool', name: 'approved' }],
        ['bytes _data', { type: 'bytes', name: '_data' }],
        ['bytes data', { type: 'bytes', name: 'data' }],
        ['bytes signature', { type: 'bytes', name: 'signature' }],
        ['bytes32 hash', { type: 'bytes32', name: 'hash' }],
        ['bytes32 r', { type: 'bytes32', name: 'r' }],
        ['bytes32 root', { type: 'bytes32', name: 'root' }],
        ['bytes32 s', { type: 'bytes32', name: 's' }],
        ['string name', { type: 'string', name: 'name' }],
        ['string symbol', { type: 'string', name: 'symbol' }],
        ['string tokenURI', { type: 'string', name: 'tokenURI' }],
        ['uint tokenId', { type: 'uint256', name: 'tokenId' }],
        ['uint8 v', { type: 'uint8', name: 'v' }],
        ['uint256 balance', { type: 'uint256', name: 'balance' }],
        ['uint256 tokenId', { type: 'uint256', name: 'tokenId' }],
        ['uint256 value', { type: 'uint256', name: 'value' }],
        ['event:address indexed from', { type: 'address', name: 'from', indexed: !0 }],
        ['event:address indexed to', { type: 'address', name: 'to', indexed: !0 }],
        ['event:uint indexed tokenId', { type: 'uint256', name: 'tokenId', indexed: !0 }],
        ['event:uint256 indexed tokenId', { type: 'uint256', name: 'tokenId', indexed: !0 }],
      ]);
      var c = n(9923);
      function l(e, t = {}) {
        if ((0, c.rh)(e))
          return (function (e, t = {}) {
            let n = (0, c.l$)(e);
            if (!n) throw new s.wn({ signature: e, type: 'function' });
            let a = m(n.parameters),
              r = [],
              i = a.length;
            for (let e = 0; e < i; e++)
              r.push(y(a[e], { modifiers: c.Dt, structs: t, type: 'function' }));
            let o = [];
            if (n.returns) {
              let e = m(n.returns),
                a = e.length;
              for (let n = 0; n < a; n++)
                o.push(y(e[n], { modifiers: c.Dt, structs: t, type: 'function' }));
            }
            return {
              name: n.name,
              type: 'function',
              stateMutability: n.stateMutability ?? 'nonpayable',
              inputs: r,
              outputs: o,
            };
          })(e, t);
        if ((0, c.c3)(e))
          return (function (e, t = {}) {
            let n = (0, c.wA)(e);
            if (!n) throw new s.wn({ signature: e, type: 'event' });
            let a = m(n.parameters),
              r = [],
              i = a.length;
            for (let e = 0; e < i; e++)
              r.push(y(a[e], { modifiers: c.Wg, structs: t, type: 'event' }));
            return { name: n.name, type: 'event', inputs: r };
          })(e, t);
        if ((0, c._c)(e))
          return (function (e, t = {}) {
            let n = (0, c.SA)(e);
            if (!n) throw new s.wn({ signature: e, type: 'error' });
            let a = m(n.parameters),
              r = [],
              i = a.length;
            for (let e = 0; e < i; e++) r.push(y(a[e], { structs: t, type: 'error' }));
            return { name: n.name, type: 'error', inputs: r };
          })(e, t);
        if ((0, c.a4)(e))
          return (function (e, t = {}) {
            let n = (0, c.PI)(e);
            if (!n) throw new s.wn({ signature: e, type: 'constructor' });
            let a = m(n.parameters),
              r = [],
              i = a.length;
            for (let e = 0; e < i; e++) r.push(y(a[e], { structs: t, type: 'constructor' }));
            return {
              type: 'constructor',
              stateMutability: n.stateMutability ?? 'nonpayable',
              inputs: r,
            };
          })(e, t);
        if ((0, c.EC)(e))
          return (function (e) {
            let t = (0, c.qm)(e);
            if (!t) throw new s.wn({ signature: e, type: 'fallback' });
            return { type: 'fallback', stateMutability: t.stateMutability ?? 'nonpayable' };
          })(e);
        if ((0, c.QM)(e)) return { type: 'receive', stateMutability: 'payable' };
        throw new s.Vs({ signature: e });
      }
      let p =
          /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
        f =
          /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
        b = /^u?int$/;
      function y(e, t) {
        var n, s;
        let o;
        let u = (function (e, t, n) {
          let a = '';
          if (n)
            for (let e of Object.entries(n)) {
              if (!e) continue;
              let t = '';
              for (let n of e[1]) t += `[${n.type}${n.name ? `:${n.name}` : ''}]`;
              a += `(${e[0]}{${t}})`;
            }
          return t ? `${t}:${e}${a}` : e;
        })(e, t?.type, t?.structs);
        if (d.has(u)) return d.get(u);
        let l = a.cN.test(e),
          v = (0, a.Zw)(l ? f : p, e);
        if (!v) throw new i.jO({ param: e });
        if (
          v.name &&
          ('address' === (n = v.name) ||
            'bool' === n ||
            'function' === n ||
            'string' === n ||
            'tuple' === n ||
            a.eL.test(n) ||
            a.lh.test(n) ||
            w.test(n))
        )
          throw new i.TT({ param: e, name: v.name });
        let g = v.name ? { name: v.name } : {},
          $ = 'indexed' === v.modifier ? { indexed: !0 } : {},
          M = t?.structs ?? {},
          x = {};
        if (l) {
          o = 'tuple';
          let e = m(v.type),
            t = [],
            n = e.length;
          for (let a = 0; a < n; a++) t.push(y(e[a], { structs: M }));
          x = { components: t };
        } else if (v.type in M) (o = 'tuple'), (x = { components: M[v.type] });
        else if (b.test(v.type)) o = `${v.type}256`;
        else if (((o = v.type), t?.type !== 'struct' && !h(o))) throw new r.Hk({ type: o });
        if (v.modifier) {
          if (!t?.modifiers?.has?.(v.modifier))
            throw new i.zL({ param: e, type: t?.type, modifier: v.modifier });
          if (
            c.Dt.has(v.modifier) &&
            ((s = o), !v.array && 'bytes' !== s && 'string' !== s && 'tuple' !== s)
          )
            throw new i._D({ param: e, type: t?.type, modifier: v.modifier });
        }
        let k = { type: `${o}${v.array ?? ''}`, ...g, ...$, ...x };
        return d.set(u, k), k;
      }
      function m(e, t = [], n = '', a = 0) {
        let r = e.trim().length;
        for (let i = 0; i < r; i++) {
          let r = e[i],
            s = e.slice(i + 1);
          switch (r) {
            case ',':
              return 0 === a ? m(s, [...t, n.trim()]) : m(s, t, `${n}${r}`, a);
            case '(':
              return m(s, t, `${n}${r}`, a + 1);
            case ')':
              return m(s, t, `${n}${r}`, a - 1);
            default:
              return m(s, t, `${n}${r}`, a);
          }
        }
        if ('' === n) return t;
        if (0 !== a) throw new u({ current: n, depth: a });
        return t.push(n.trim()), t;
      }
      function h(e) {
        return (
          'address' === e ||
          'bool' === e ||
          'function' === e ||
          'string' === e ||
          a.eL.test(e) ||
          a.lh.test(e)
        );
      }
      let w =
        /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
    },
    84770: function (e, t, n) {
      n.d(t, {
        w: function () {
          return c;
        },
      });
      var a = n(13317),
        r = n(70731),
        i = n(79150),
        s = n(24116),
        o = n(80097),
        u = n(72427),
        d = n(70542);
      async function c(
        e,
        {
          address: t,
          blockNumber: n,
          blockTag: c,
          gatewayUrls: l,
          strict: p,
          universalResolverAddress: f,
        }
      ) {
        let b = f;
        if (!b) {
          if (!e.chain)
            throw Error('client chain not configured. universalResolverAddress is required.');
          b = (0, r.L)({ blockNumber: n, chain: e.chain, contract: 'ensUniversalResolver' });
        }
        let y = `${t.toLowerCase().substring(2)}.addr.reverse`;
        try {
          let r = {
              address: b,
              abi: a.du,
              functionName: 'reverse',
              args: [(0, i.NC)((0, o.T)(y))],
              blockNumber: n,
              blockTag: c,
            },
            s = (0, u.s)(e, d.L, 'readContract'),
            [p, f] = l ? await s({ ...r, args: [...r.args, l] }) : await s(r);
          if (t.toLowerCase() !== f.toLowerCase()) return null;
          return p;
        } catch (e) {
          if (p) throw e;
          if ((0, s.c)(e, 'reverse')) return null;
          throw e;
        }
      }
    },
    19934: function (e, t, n) {
      n.d(t, {
        R: function () {
          return A;
        },
      });
      var a = n(9923),
        r = n(46927),
        i = n(37074);
      function s(e) {
        let t = (0, r.D)(e),
          n = [],
          s = e.length;
        for (let r = 0; r < s; r++) {
          let s = e[r];
          (0, a.N0)(s) || n.push((0, i.cK)(s, t));
        }
        return n;
      }
      var o = n(39858),
        u = n(13317),
        d = n(9915),
        c = n(77854),
        l = n(22268),
        p = n(22262),
        f = n(31359),
        b = n(68853),
        y = n(48666),
        m = n(70731),
        h = n(79150),
        w = n(41524),
        v = n(40639),
        g = n(14999),
        $ = n(42816);
      let M = new Map();
      var x = n(64924),
        k = n(64233);
      async function A(e, t) {
        let {
            account: a = e.account,
            batch: r = !!e.batch?.multicall,
            blockNumber: i,
            blockTag: u = 'latest',
            accessList: f,
            blobs: y,
            code: m,
            data: $,
            factory: M,
            factoryData: A,
            gas: P,
            gasPrice: O,
            maxFeePerBlobGas: _,
            maxFeePerGas: N,
            maxPriorityFeePerGas: j,
            nonce: S,
            to: E,
            value: Z,
            stateOverride: C,
            ...D
          } = t,
          R = a ? (0, o.T)(a) : void 0;
        if (m && (M || A))
          throw new c.G('Cannot provide both `code` & `factory`/`factoryData` as parameters.');
        if (m && E) throw new c.G('Cannot provide both `code` & `to` as parameters.');
        let z = m && $,
          F = M && A && E && $,
          G = z || F,
          L = z
            ? (function (e) {
                let { code: t, data: n } = e;
                return (0, b.w)({
                  abi: s(['constructor(bytes, bytes)']),
                  bytecode: d.NO,
                  args: [t, n],
                });
              })({ code: m, data: $ })
            : F
              ? (function (e) {
                  let { data: t, factory: n, factoryData: a, to: r } = e;
                  return (0, b.w)({
                    abi: s(['constructor(address, bytes, address, bytes)']),
                    bytecode: d.pG,
                    args: [r, t, n, a],
                  });
                })({ data: $, factory: M, factoryData: A, to: E })
              : $;
        try {
          (0, k.F)(t);
          let n = (i ? (0, h.eC)(i) : void 0) || u,
            a = (0, x.mF)(C),
            s = e.chain?.formatters?.transactionRequest?.format,
            o = (s || g.tG)({
              ...(0, v.K)(D, { format: s }),
              from: R?.address,
              accessList: f,
              blobs: y,
              data: L,
              gas: P,
              gasPrice: O,
              maxFeePerBlobGas: _,
              maxFeePerGas: N,
              maxPriorityFeePerGas: j,
              nonce: S,
              to: G ? void 0 : E,
              value: Z,
            });
          if (
            r &&
            (function ({ request: e }) {
              let { data: t, to: n, ...a } = e;
              return (
                !(!t || t.startsWith('0x82ad56cb')) &&
                !!n &&
                !(Object.values(a).filter((e) => void 0 !== e).length > 0)
              );
            })({ request: o }) &&
            !a
          )
            try {
              return await I(e, { ...o, blockNumber: i, blockTag: u });
            } catch (e) {
              if (!(e instanceof l.pZ) && !(e instanceof l.mm)) throw e;
            }
          let d = await e.request({ method: 'eth_call', params: a ? [o, n, a] : [o, n] });
          if ('0x' === d) return { data: void 0 };
          return { data: d };
        } catch (s) {
          let a = (function (e) {
              if (!(e instanceof c.G)) return;
              let t = e.walk();
              return 'object' == typeof t?.data ? t.data?.data : t.data;
            })(s),
            { offchainLookup: r, offchainLookupSignature: i } = await n
              .e(7618)
              .then(n.bind(n, 27618));
          if (!1 !== e.ccipRead && a?.slice(0, 10) === i && E)
            return { data: await r(e, { data: a, to: E }) };
          if (G && a?.slice(0, 10) === '0x101bb98d') throw new p.Mo({ factory: M });
          throw (0, w.P)(s, { ...t, account: R, chain: e.chain });
        }
      }
      async function I(e, t) {
        let { batchSize: n = 1024, wait: a = 0 } =
            'object' == typeof e.batch?.multicall ? e.batch.multicall : {},
          { blockNumber: r, blockTag: i = 'latest', data: s, multicallAddress: o, to: d } = t,
          c = o;
        if (!c) {
          if (!e.chain) throw new l.pZ();
          c = (0, m.L)({ blockNumber: r, chain: e.chain, contract: 'multicall3' });
        }
        let b = (r ? (0, h.eC)(r) : void 0) || i,
          { schedule: w } = (function ({
            fn: e,
            id: t,
            shouldSplitBatch: n,
            wait: a = 0,
            sort: r,
          }) {
            let i = async () => {
                let t = u();
                s();
                let n = t.map(({ args: e }) => e);
                0 !== n.length &&
                  e(n)
                    .then((e) => {
                      r && Array.isArray(e) && e.sort(r);
                      for (let n = 0; n < t.length; n++) {
                        let { resolve: a } = t[n];
                        a?.([e[n], e]);
                      }
                    })
                    .catch((e) => {
                      for (let n = 0; n < t.length; n++) {
                        let { reject: a } = t[n];
                        a?.(e);
                      }
                    });
              },
              s = () => M.delete(t),
              o = () => u().map(({ args: e }) => e),
              u = () => M.get(t) || [],
              d = (e) => M.set(t, [...u(), e]);
            return {
              flush: s,
              async schedule(e) {
                let { promise: t, resolve: r, reject: s } = (0, $.n)();
                return (
                  (n?.([...o(), e]) && i(), u().length > 0)
                    ? d({ args: e, resolve: r, reject: s })
                    : (d({ args: e, resolve: r, reject: s }), setTimeout(i, a)),
                  t
                );
              },
            };
          })({
            id: `${e.uid}.${b}`,
            wait: a,
            shouldSplitBatch: (e) => e.reduce((e, { data: t }) => e + (t.length - 2), 0) > 2 * n,
            fn: async (t) => {
              let n = t.map((e) => ({ allowFailure: !0, callData: e.data, target: e.to })),
                a = (0, y.R)({ abi: u.F8, args: [n], functionName: 'aggregate3' }),
                r = await e.request({ method: 'eth_call', params: [{ data: a, to: c }, b] });
              return (0, f.k)({
                abi: u.F8,
                args: [n],
                functionName: 'aggregate3',
                data: r || '0x',
              });
            },
          }),
          [{ returnData: v, success: g }] = await w({ data: s, to: d });
        if (!g) throw new p.VQ({ data: v });
        return '0x' === v ? { data: void 0 } : { data: v };
      }
    },
    70542: function (e, t, n) {
      n.d(t, {
        L: function () {
          return u;
        },
      });
      var a = n(31359),
        r = n(48666),
        i = n(45123),
        s = n(72427),
        o = n(19934);
      async function u(e, t) {
        let { abi: n, address: u, args: d, functionName: c, ...l } = t,
          p = (0, r.R)({ abi: n, args: d, functionName: c });
        try {
          let { data: t } = await (0, s.s)(e, o.R, 'call')({ ...l, data: p, to: u });
          return (0, a.k)({ abi: n, args: d, functionName: c, data: t || '0x' });
        } catch (e) {
          throw (0, i.S)(e, {
            abi: n,
            address: u,
            args: d,
            docsPath: '/docs/contract/readContract',
            functionName: c,
          });
        }
      }
    },
    13317: function (e, t, n) {
      n.d(t, {
        $o: function () {
          return d;
        },
        F8: function () {
          return a;
        },
        Hr: function () {
          return l;
        },
        Wo: function () {
          return c;
        },
        X$: function () {
          return u;
        },
        du: function () {
          return s;
        },
        k3: function () {
          return i;
        },
        nZ: function () {
          return o;
        },
      });
      let a = [
          {
            inputs: [
              {
                components: [
                  { name: 'target', type: 'address' },
                  { name: 'allowFailure', type: 'bool' },
                  { name: 'callData', type: 'bytes' },
                ],
                name: 'calls',
                type: 'tuple[]',
              },
            ],
            name: 'aggregate3',
            outputs: [
              {
                components: [
                  { name: 'success', type: 'bool' },
                  { name: 'returnData', type: 'bytes' },
                ],
                name: 'returnData',
                type: 'tuple[]',
              },
            ],
            stateMutability: 'view',
            type: 'function',
          },
        ],
        r = [
          { inputs: [], name: 'ResolverNotFound', type: 'error' },
          { inputs: [], name: 'ResolverWildcardNotSupported', type: 'error' },
          { inputs: [], name: 'ResolverNotContract', type: 'error' },
          { inputs: [{ name: 'returnData', type: 'bytes' }], name: 'ResolverError', type: 'error' },
          {
            inputs: [
              {
                components: [
                  { name: 'status', type: 'uint16' },
                  { name: 'message', type: 'string' },
                ],
                name: 'errors',
                type: 'tuple[]',
              },
            ],
            name: 'HttpError',
            type: 'error',
          },
        ],
        i = [
          ...r,
          {
            name: 'resolve',
            type: 'function',
            stateMutability: 'view',
            inputs: [
              { name: 'name', type: 'bytes' },
              { name: 'data', type: 'bytes' },
            ],
            outputs: [
              { name: '', type: 'bytes' },
              { name: 'address', type: 'address' },
            ],
          },
          {
            name: 'resolve',
            type: 'function',
            stateMutability: 'view',
            inputs: [
              { name: 'name', type: 'bytes' },
              { name: 'data', type: 'bytes' },
              { name: 'gateways', type: 'string[]' },
            ],
            outputs: [
              { name: '', type: 'bytes' },
              { name: 'address', type: 'address' },
            ],
          },
        ],
        s = [
          ...r,
          {
            name: 'reverse',
            type: 'function',
            stateMutability: 'view',
            inputs: [{ type: 'bytes', name: 'reverseName' }],
            outputs: [
              { type: 'string', name: 'resolvedName' },
              { type: 'address', name: 'resolvedAddress' },
              { type: 'address', name: 'reverseResolver' },
              { type: 'address', name: 'resolver' },
            ],
          },
          {
            name: 'reverse',
            type: 'function',
            stateMutability: 'view',
            inputs: [
              { type: 'bytes', name: 'reverseName' },
              { type: 'string[]', name: 'gateways' },
            ],
            outputs: [
              { type: 'string', name: 'resolvedName' },
              { type: 'address', name: 'resolvedAddress' },
              { type: 'address', name: 'reverseResolver' },
              { type: 'address', name: 'resolver' },
            ],
          },
        ],
        o = [
          {
            name: 'text',
            type: 'function',
            stateMutability: 'view',
            inputs: [
              { name: 'name', type: 'bytes32' },
              { name: 'key', type: 'string' },
            ],
            outputs: [{ name: '', type: 'string' }],
          },
        ],
        u = [
          {
            name: 'addr',
            type: 'function',
            stateMutability: 'view',
            inputs: [{ name: 'name', type: 'bytes32' }],
            outputs: [{ name: '', type: 'address' }],
          },
          {
            name: 'addr',
            type: 'function',
            stateMutability: 'view',
            inputs: [
              { name: 'name', type: 'bytes32' },
              { name: 'coinType', type: 'uint256' },
            ],
            outputs: [{ name: '', type: 'bytes' }],
          },
        ],
        d = [
          {
            inputs: [
              { name: '_signer', type: 'address' },
              { name: '_hash', type: 'bytes32' },
              { name: '_signature', type: 'bytes' },
            ],
            stateMutability: 'nonpayable',
            type: 'constructor',
          },
          {
            inputs: [
              { name: '_signer', type: 'address' },
              { name: '_hash', type: 'bytes32' },
              { name: '_signature', type: 'bytes' },
            ],
            outputs: [{ type: 'bool' }],
            stateMutability: 'nonpayable',
            type: 'function',
            name: 'isValidSig',
          },
        ],
        c = [
          {
            type: 'event',
            name: 'Approval',
            inputs: [
              { indexed: !0, name: 'owner', type: 'address' },
              { indexed: !0, name: 'spender', type: 'address' },
              { indexed: !1, name: 'value', type: 'uint256' },
            ],
          },
          {
            type: 'event',
            name: 'Transfer',
            inputs: [
              { indexed: !0, name: 'from', type: 'address' },
              { indexed: !0, name: 'to', type: 'address' },
              { indexed: !1, name: 'value', type: 'uint256' },
            ],
          },
          {
            type: 'function',
            name: 'allowance',
            stateMutability: 'view',
            inputs: [
              { name: 'owner', type: 'address' },
              { name: 'spender', type: 'address' },
            ],
            outputs: [{ type: 'uint256' }],
          },
          {
            type: 'function',
            name: 'approve',
            stateMutability: 'nonpayable',
            inputs: [
              { name: 'spender', type: 'address' },
              { name: 'amount', type: 'uint256' },
            ],
            outputs: [{ type: 'bool' }],
          },
          {
            type: 'function',
            name: 'balanceOf',
            stateMutability: 'view',
            inputs: [{ name: 'account', type: 'address' }],
            outputs: [{ type: 'uint256' }],
          },
          {
            type: 'function',
            name: 'decimals',
            stateMutability: 'view',
            inputs: [],
            outputs: [{ type: 'uint8' }],
          },
          {
            type: 'function',
            name: 'name',
            stateMutability: 'view',
            inputs: [],
            outputs: [{ type: 'string' }],
          },
          {
            type: 'function',
            name: 'symbol',
            stateMutability: 'view',
            inputs: [],
            outputs: [{ type: 'string' }],
          },
          {
            type: 'function',
            name: 'totalSupply',
            stateMutability: 'view',
            inputs: [],
            outputs: [{ type: 'uint256' }],
          },
          {
            type: 'function',
            name: 'transfer',
            stateMutability: 'nonpayable',
            inputs: [
              { name: 'recipient', type: 'address' },
              { name: 'amount', type: 'uint256' },
            ],
            outputs: [{ type: 'bool' }],
          },
          {
            type: 'function',
            name: 'transferFrom',
            stateMutability: 'nonpayable',
            inputs: [
              { name: 'sender', type: 'address' },
              { name: 'recipient', type: 'address' },
              { name: 'amount', type: 'uint256' },
            ],
            outputs: [{ type: 'bool' }],
          },
        ],
        l = [
          {
            type: 'event',
            name: 'Approval',
            inputs: [
              { indexed: !0, name: 'owner', type: 'address' },
              { indexed: !0, name: 'spender', type: 'address' },
              { indexed: !0, name: 'tokenId', type: 'uint256' },
            ],
          },
          {
            type: 'event',
            name: 'ApprovalForAll',
            inputs: [
              { indexed: !0, name: 'owner', type: 'address' },
              { indexed: !0, name: 'operator', type: 'address' },
              { indexed: !1, name: 'approved', type: 'bool' },
            ],
          },
          {
            type: 'event',
            name: 'Transfer',
            inputs: [
              { indexed: !0, name: 'from', type: 'address' },
              { indexed: !0, name: 'to', type: 'address' },
              { indexed: !0, name: 'tokenId', type: 'uint256' },
            ],
          },
          {
            type: 'function',
            name: 'approve',
            stateMutability: 'payable',
            inputs: [
              { name: 'spender', type: 'address' },
              { name: 'tokenId', type: 'uint256' },
            ],
            outputs: [],
          },
          {
            type: 'function',
            name: 'balanceOf',
            stateMutability: 'view',
            inputs: [{ name: 'account', type: 'address' }],
            outputs: [{ type: 'uint256' }],
          },
          {
            type: 'function',
            name: 'getApproved',
            stateMutability: 'view',
            inputs: [{ name: 'tokenId', type: 'uint256' }],
            outputs: [{ type: 'address' }],
          },
          {
            type: 'function',
            name: 'isApprovedForAll',
            stateMutability: 'view',
            inputs: [
              { name: 'owner', type: 'address' },
              { name: 'operator', type: 'address' },
            ],
            outputs: [{ type: 'bool' }],
          },
          {
            type: 'function',
            name: 'name',
            stateMutability: 'view',
            inputs: [],
            outputs: [{ type: 'string' }],
          },
          {
            type: 'function',
            name: 'ownerOf',
            stateMutability: 'view',
            inputs: [{ name: 'tokenId', type: 'uint256' }],
            outputs: [{ name: 'owner', type: 'address' }],
          },
          {
            type: 'function',
            name: 'safeTransferFrom',
            stateMutability: 'payable',
            inputs: [
              { name: 'from', type: 'address' },
              { name: 'to', type: 'address' },
              { name: 'tokenId', type: 'uint256' },
            ],
            outputs: [],
          },
          {
            type: 'function',
            name: 'safeTransferFrom',
            stateMutability: 'nonpayable',
            inputs: [
              { name: 'from', type: 'address' },
              { name: 'to', type: 'address' },
              { name: 'id', type: 'uint256' },
              { name: 'data', type: 'bytes' },
            ],
            outputs: [],
          },
          {
            type: 'function',
            name: 'setApprovalForAll',
            stateMutability: 'nonpayable',
            inputs: [
              { name: 'operator', type: 'address' },
              { name: 'approved', type: 'bool' },
            ],
            outputs: [],
          },
          {
            type: 'function',
            name: 'symbol',
            stateMutability: 'view',
            inputs: [],
            outputs: [{ type: 'string' }],
          },
          {
            type: 'function',
            name: 'tokenByIndex',
            stateMutability: 'view',
            inputs: [{ name: 'index', type: 'uint256' }],
            outputs: [{ type: 'uint256' }],
          },
          {
            type: 'function',
            name: 'tokenByIndex',
            stateMutability: 'view',
            inputs: [
              { name: 'owner', type: 'address' },
              { name: 'index', type: 'uint256' },
            ],
            outputs: [{ name: 'tokenId', type: 'uint256' }],
          },
          {
            type: 'function',
            name: 'tokenURI',
            stateMutability: 'view',
            inputs: [{ name: 'tokenId', type: 'uint256' }],
            outputs: [{ type: 'string' }],
          },
          {
            type: 'function',
            name: 'totalSupply',
            stateMutability: 'view',
            inputs: [],
            outputs: [{ type: 'uint256' }],
          },
          {
            type: 'function',
            name: 'transferFrom',
            stateMutability: 'payable',
            inputs: [
              { name: 'sender', type: 'address' },
              { name: 'recipient', type: 'address' },
              { name: 'tokeId', type: 'uint256' },
            ],
            outputs: [],
          },
        ];
    },
    9915: function (e, t, n) {
      n.d(t, {
        NO: function () {
          return a;
        },
        ST: function () {
          return i;
        },
        pG: function () {
          return r;
        },
      });
      let a =
          '0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe',
        r =
          '0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe',
        i =
          '0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572';
    },
    31359: function (e, t, n) {
      n.d(t, {
        k: function () {
          return o;
        },
      });
      var a = n(6153),
        r = n(5718),
        i = n(89042);
      let s = '/docs/contract/decodeFunctionResult';
      function o(e) {
        let { abi: t, args: n, functionName: o, data: u } = e,
          d = t[0];
        if (o) {
          let e = (0, i.mE)({ abi: t, args: n, name: o });
          if (!e) throw new a.xL(o, { docsPath: s });
          d = e;
        }
        if ('function' !== d.type) throw new a.xL(void 0, { docsPath: s });
        if (!d.outputs) throw new a.MX(d.name, { docsPath: s });
        let c = (0, r.r)(d.outputs, u);
        return c && c.length > 1 ? c : c && 1 === c.length ? c[0] : void 0;
      }
    },
    68853: function (e, t, n) {
      n.d(t, {
        w: function () {
          return o;
        },
      });
      var a = n(6153),
        r = n(1155),
        i = n(26836);
      let s = '/docs/contract/encodeDeployData';
      function o(e) {
        let { abi: t, args: n, bytecode: o } = e;
        if (!n || 0 === n.length) return o;
        let u = t.find((e) => 'type' in e && 'constructor' === e.type);
        if (!u) throw new a.fM({ docsPath: s });
        if (!('inputs' in u) || !u.inputs || 0 === u.inputs.length) throw new a.cO({ docsPath: s });
        let d = (0, i.E)(u.inputs, n);
        return (0, r.SM)([o, d]);
      }
    },
    48666: function (e, t, n) {
      n.d(t, {
        R: function () {
          return c;
        },
      });
      var a = n(1155),
        r = n(26836),
        i = n(6153),
        s = n(74851),
        o = n(78978),
        u = n(89042);
      let d = '/docs/contract/encodeFunctionData';
      function c(e) {
        let { args: t } = e,
          { abi: n, functionName: c } =
            1 === e.abi.length && e.functionName?.startsWith('0x')
              ? e
              : (function (e) {
                  let { abi: t, args: n, functionName: a } = e,
                    r = t[0];
                  if (a) {
                    let e = (0, u.mE)({ abi: t, args: n, name: a });
                    if (!e) throw new i.xL(a, { docsPath: d });
                    r = e;
                  }
                  if ('function' !== r.type) throw new i.xL(void 0, { docsPath: d });
                  return { abi: [r], functionName: (0, s.C)((0, o.t)(r)) };
                })(e),
          l = n[0],
          p = 'inputs' in l && l.inputs ? (0, r.E)(l.inputs, t ?? []) : void 0;
        return (0, a.SM)([c, p ?? '0x']);
      }
    },
    70731: function (e, t, n) {
      n.d(t, {
        L: function () {
          return r;
        },
      });
      var a = n(22268);
      function r({ blockNumber: e, chain: t, contract: n }) {
        let r = t?.contracts?.[n];
        if (!r) throw new a.mm({ chain: t, contract: { name: n } });
        if (e && r.blockCreated && r.blockCreated > e)
          throw new a.mm({
            blockNumber: e,
            chain: t,
            contract: { name: n, blockCreated: r.blockCreated },
          });
        return r.address;
      }
    },
    52847: function (e, t, n) {
      n.d(t, {
        i: function () {
          return r;
        },
      });
      var a = n(13393);
      function r(e) {
        if (66 !== e.length || 0 !== e.indexOf('[') || 65 !== e.indexOf(']')) return null;
        let t = `0x${e.slice(1, 65)}`;
        return (0, a.v)(t) ? t : null;
      }
    },
    24116: function (e, t, n) {
      n.d(t, {
        c: function () {
          return s;
        },
      });
      var a = n(99459),
        r = n(77854),
        i = n(22262);
      function s(e, t) {
        if (!(e instanceof r.G)) return !1;
        let n = e.walk((e) => e instanceof i.Lu);
        return (
          n instanceof i.Lu &&
          (!!(
            n.data?.errorName === 'ResolverNotFound' ||
            n.data?.errorName === 'ResolverWildcardNotSupported' ||
            n.data?.errorName === 'ResolverNotContract' ||
            n.data?.errorName === 'ResolverError' ||
            n.data?.errorName === 'HttpError' ||
            n.reason?.includes('Wildcard on non-extended resolvers is not supported')
          ) ||
            ('reverse' === t && n.reason === a.$[50]))
        );
      }
    },
    80097: function (e, t, n) {
      n.d(t, {
        T: function () {
          return o;
        },
      });
      var a = n(13990),
        r = n(79150),
        i = n(60977),
        s = n(52847);
      function o(e) {
        let t = e.replace(/^\.|\.$/gm, '');
        if (0 === t.length) return new Uint8Array(1);
        let n = new Uint8Array((0, a.qX)(t).byteLength + 2),
          o = 0,
          u = t.split('.');
        for (let e = 0; e < u.length; e++) {
          let t = (0, a.qX)(u[e]);
          if (t.byteLength > 255) {
            var d;
            t = (0, a.qX)(
              ((d = (function (e) {
                let t = new Uint8Array(32).fill(0);
                return e ? (0, s.i)(e) || (0, i.w)((0, a.qX)(e)) : (0, r.ci)(t);
              })(u[e])),
              `[${d.slice(2)}]`)
            );
          }
          (n[o] = t.length), n.set(t, o + 1), (o += t.length + 1);
        }
        return n.byteLength !== o + 1 ? n.slice(0, o + 1) : n;
      }
    },
    41524: function (e, t, n) {
      n.d(t, {
        P: function () {
          return s;
        },
      });
      var a = n(22262),
        r = n(42850),
        i = n(18626);
      function s(e, { docsPath: t, ...n }) {
        let s = (() => {
          let t = (0, i.k)(e, n);
          return t instanceof r.cj ? e : t;
        })();
        return new a.cg(s, { docsPath: t, ...n });
      }
    },
    45123: function (e, t, n) {
      n.d(t, {
        S: function () {
          return u;
        },
      });
      var a = n(6153),
        r = n(77854),
        i = n(22262),
        s = n(68901),
        o = n(38350);
      function u(e, { abi: t, address: n, args: u, docsPath: d, functionName: c, sender: l }) {
        let p =
            e instanceof i.VQ ? e : e instanceof r.G ? e.walk((e) => 'data' in e) || e.walk() : {},
          { code: f, data: b, details: y, message: m, shortMessage: h } = p,
          w =
            e instanceof a.wb
              ? new i.Dk({ functionName: c })
              : [3, o.XS.code].includes(f) && (b || y || m || h)
                ? new i.Lu({
                    abi: t,
                    data: 'object' == typeof b ? b.data : b,
                    functionName: c,
                    message: p instanceof s.bs ? y : (h ?? m),
                  })
                : e;
        return new i.uq(w, {
          abi: t,
          args: u,
          contractAddress: n,
          docsPath: d,
          functionName: c,
          sender: l,
        });
      }
    },
    72427: function (e, t, n) {
      n.d(t, {
        s: function () {
          return a;
        },
      });
      function a(e, t, n) {
        let a = e[t.name];
        if ('function' == typeof a) return a;
        let r = e[n];
        return 'function' == typeof r ? r : (n) => t(e, n);
      }
    },
    42816: function (e, t, n) {
      n.d(t, {
        n: function () {
          return a;
        },
      });
      function a() {
        let e = () => void 0,
          t = () => void 0;
        return {
          promise: new Promise((n, a) => {
            (e = n), (t = a);
          }),
          resolve: e,
          reject: t,
        };
      }
    },
    64924: function (e, t, n) {
      n.d(t, {
        mF: function () {
          return d;
        },
      });
      var a = n(48141),
        r = n(37014),
        i = n(29545),
        s = n(84545),
        o = n(79150);
      function u(e) {
        if (e && 0 !== e.length)
          return e.reduce((e, { slot: t, value: n }) => {
            if (66 !== t.length) throw new r.W_({ size: t.length, targetSize: 66, type: 'hex' });
            if (66 !== n.length) throw new r.W_({ size: n.length, targetSize: 66, type: 'hex' });
            return (e[t] = n), e;
          }, {});
      }
      function d(e) {
        if (!e) return;
        let t = {};
        for (let { address: n, ...r } of e) {
          if (!(0, s.U)(n, { strict: !1 })) throw new a.b({ address: n });
          if (t[n]) throw new i.Nc({ address: n });
          t[n] = (function (e) {
            let { balance: t, nonce: n, state: a, stateDiff: r, code: s } = e,
              d = {};
            if (
              (void 0 !== s && (d.code = s),
              void 0 !== t && (d.balance = (0, o.eC)(t)),
              void 0 !== n && (d.nonce = (0, o.eC)(n)),
              void 0 !== a && (d.state = u(a)),
              void 0 !== r)
            ) {
              if (d.state) throw new i.Z8();
              d.stateDiff = u(r);
            }
            return d;
          })(r);
        }
        return t;
      }
    },
  },
]);
