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
    (e._sentryDebugIds[t] = '702a641b-203c-43b8-959b-90cf1b4f011e'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-702a641b-203c-43b8-959b-90cf1b4f011e'));
} catch (e) {}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5766],
  {
    16422: function (e, t, n) {
      'use strict';
      function i() {
        for (var e, t, n = 0, i = ''; n < arguments.length; )
          (e = arguments[n++]) &&
            (t = (function e(t) {
              var n,
                i,
                r = '';
              if ('string' == typeof t || 'number' == typeof t) r += t;
              else if ('object' == typeof t) {
                if (Array.isArray(t))
                  for (n = 0; n < t.length; n++)
                    t[n] && (i = e(t[n])) && (r && (r += ' '), (r += i));
                else for (n in t) t[n] && (r && (r += ' '), (r += n));
              }
              return r;
            })(e)) &&
            (i && (i += ' '), (i += t));
        return i;
      }
      n.r(t),
        n.d(t, {
          clsx: function () {
            return i;
          },
        }),
        (t.default = i);
    },
    85848: function (e, t, n) {
      var i = n(87150).Buffer;
      let r = n(77435);
      function s(e) {
        if (e.startsWith('int[')) return 'int256' + e.slice(3);
        if ('int' === e) return 'int256';
        if (e.startsWith('uint[')) return 'uint256' + e.slice(4);
        if ('uint' === e) return 'uint256';
        if (e.startsWith('fixed[')) return 'fixed128x128' + e.slice(5);
        if ('fixed' === e) return 'fixed128x128';
        if (e.startsWith('ufixed[')) return 'ufixed128x128' + e.slice(6);
        else if ('ufixed' === e) return 'ufixed128x128';
        return e;
      }
      function a(e) {
        return Number.parseInt(/^\D+(\d+)$/.exec(e)[1], 10);
      }
      function o(e) {
        var t = /^\D+(\d+)x(\d+)$/.exec(e);
        return [Number.parseInt(t[1], 10), Number.parseInt(t[2], 10)];
      }
      function c(e) {
        var t = e.match(/(.*)\[(.*?)\]$/);
        return t ? ('' === t[2] ? 'dynamic' : Number.parseInt(t[2], 10)) : null;
      }
      function l(e) {
        var t = typeof e;
        if ('string' === t || 'number' === t) return BigInt(e);
        if ('bigint' === t) return e;
        throw Error('Argument is not a number');
      }
      function d(e, t) {
        if ('address' === e) return d('uint160', l(t));
        if ('bool' === e) return d('uint8', t ? 1 : 0);
        if ('string' === e) return d('bytes', new i(t, 'utf8'));
        if ((p = e).lastIndexOf(']') === p.length - 1) {
          if (void 0 === t.length) throw Error('Not an array?');
          if ('dynamic' !== (n = c(e)) && 0 !== n && t.length > n)
            throw Error('Elements exceed array size: ' + n);
          for (h in ((u = []),
          (e = e.slice(0, e.lastIndexOf('['))),
          'string' == typeof t && (t = JSON.parse(t)),
          t))
            u.push(d(e, t[h]));
          if ('dynamic' === n) {
            var n,
              s,
              u,
              h,
              p,
              f = d('uint256', t.length);
            u.unshift(f);
          }
          return i.concat(u);
        }
        if ('bytes' === e)
          return (
            (t = new i(t)),
            (u = i.concat([d('uint256', t.length), t])),
            t.length % 32 != 0 && (u = i.concat([u, r.zeros(32 - (t.length % 32))])),
            u
          );
        if (e.startsWith('bytes')) {
          if ((n = a(e)) < 1 || n > 32) throw Error('Invalid bytes<N> width: ' + n);
          return r.setLengthRight(t, 32);
        } else if (e.startsWith('uint')) {
          if ((n = a(e)) % 8 || n < 8 || n > 256) throw Error('Invalid uint<N> width: ' + n);
          s = l(t);
          let i = r.bitLengthFromBigInt(s);
          if (i > n) throw Error('Supplied uint exceeds width: ' + n + ' vs ' + i);
          if (s < 0) throw Error('Supplied uint is negative');
          return r.bufferBEFromBigInt(s, 32);
        } else if (e.startsWith('int')) {
          if ((n = a(e)) % 8 || n < 8 || n > 256) throw Error('Invalid int<N> width: ' + n);
          s = l(t);
          let i = r.bitLengthFromBigInt(s);
          if (i > n) throw Error('Supplied int exceeds width: ' + n + ' vs ' + i);
          let o = r.twosFromBigInt(s, 256);
          return r.bufferBEFromBigInt(o, 32);
        } else if (e.startsWith('ufixed')) {
          if (((n = o(e)), (s = l(t)) < 0)) throw Error('Supplied ufixed is negative');
          return d('uint256', s * BigInt(2) ** BigInt(n[1]));
        } else if (e.startsWith('fixed'))
          return (n = o(e)), d('int256', l(t) * BigInt(2) ** BigInt(n[1]));
        throw Error('Unsupported or invalid type: ' + e);
      }
      function u(e, t) {
        if (e.length !== t.length) throw Error('Number of types are not matching the values');
        for (var n, o, c = [], d = 0; d < e.length; d++) {
          var u = s(e[d]),
            h = t[d];
          if ('bytes' === u) c.push(h);
          else if ('string' === u) c.push(new i(h, 'utf8'));
          else if ('bool' === u) c.push(new i(h ? '01' : '00', 'hex'));
          else if ('address' === u) c.push(r.setLength(h, 20));
          else if (u.startsWith('bytes')) {
            if ((n = a(u)) < 1 || n > 32) throw Error('Invalid bytes<N> width: ' + n);
            c.push(r.setLengthRight(h, n));
          } else if (u.startsWith('uint')) {
            if ((n = a(u)) % 8 || n < 8 || n > 256) throw Error('Invalid uint<N> width: ' + n);
            o = l(h);
            let e = r.bitLengthFromBigInt(o);
            if (e > n) throw Error('Supplied uint exceeds width: ' + n + ' vs ' + e);
            c.push(r.bufferBEFromBigInt(o, n / 8));
          } else if (u.startsWith('int')) {
            if ((n = a(u)) % 8 || n < 8 || n > 256) throw Error('Invalid int<N> width: ' + n);
            o = l(h);
            let e = r.bitLengthFromBigInt(o);
            if (e > n) throw Error('Supplied int exceeds width: ' + n + ' vs ' + e);
            let t = r.twosFromBigInt(o, n);
            c.push(r.bufferBEFromBigInt(t, n / 8));
          } else throw Error('Unsupported or invalid type: ' + u);
        }
        return i.concat(c);
      }
      e.exports = {
        rawEncode: function (e, t) {
          var n = [],
            r = [],
            a = 32 * e.length;
          for (var o in e) {
            var l = s(e[o]),
              u = d(l, t[o]);
            'string' === l || 'bytes' === l || 'dynamic' === c(l)
              ? (n.push(d('uint256', a)), r.push(u), (a += u.length))
              : n.push(u);
          }
          return i.concat(n.concat(r));
        },
        solidityPack: u,
        soliditySHA3: function (e, t) {
          return r.keccak(u(e, t));
        },
      };
    },
    46006: function (e, t, n) {
      var i = n(87150).Buffer;
      let r = n(77435),
        s = n(85848),
        a = {
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
        },
        o = {
          encodeData(e, t, n, a = !0) {
            let o = ['bytes32'],
              c = [this.hashType(e, n)];
            if (a) {
              let l = (e, t, o) => {
                if (void 0 !== n[t])
                  return [
                    'bytes32',
                    null == o
                      ? '0x0000000000000000000000000000000000000000000000000000000000000000'
                      : r.keccak(this.encodeData(t, o, n, a)),
                  ];
                if (void 0 === o) throw Error(`missing value for field ${e} of type ${t}`);
                if ('bytes' === t) return ['bytes32', r.keccak(o)];
                if ('string' === t)
                  return 'string' == typeof o && (o = i.from(o, 'utf8')), ['bytes32', r.keccak(o)];
                if (t.lastIndexOf(']') === t.length - 1) {
                  let n = t.slice(0, t.lastIndexOf('[')),
                    i = o.map((t) => l(e, n, t));
                  return [
                    'bytes32',
                    r.keccak(
                      s.rawEncode(
                        i.map(([e]) => e),
                        i.map(([, e]) => e)
                      )
                    ),
                  ];
                }
                return [t, o];
              };
              for (let i of n[e]) {
                let [e, n] = l(i.name, i.type, t[i.name]);
                o.push(e), c.push(n);
              }
            } else
              for (let s of n[e]) {
                let e = t[s.name];
                if (void 0 !== e) {
                  if ('bytes' === s.type) o.push('bytes32'), (e = r.keccak(e)), c.push(e);
                  else if ('string' === s.type)
                    o.push('bytes32'),
                      'string' == typeof e && (e = i.from(e, 'utf8')),
                      (e = r.keccak(e)),
                      c.push(e);
                  else if (void 0 !== n[s.type])
                    o.push('bytes32'), (e = r.keccak(this.encodeData(s.type, e, n, a))), c.push(e);
                  else if (s.type.lastIndexOf(']') === s.type.length - 1)
                    throw Error('Arrays currently unimplemented in encodeData');
                  else o.push(s.type), c.push(e);
                }
              }
            return s.rawEncode(o, c);
          },
          encodeType(e, t) {
            let n = '',
              i = this.findTypeDependencies(e, t).filter((t) => t !== e);
            for (let r of (i = [e].concat(i.sort()))) {
              if (!t[r]) throw Error('No type definition specified: ' + r);
              n += r + '(' + t[r].map(({ name: e, type: t }) => t + ' ' + e).join(',') + ')';
            }
            return n;
          },
          findTypeDependencies(e, t, n = []) {
            if (((e = e.match(/^\w*/)[0]), n.includes(e) || void 0 === t[e])) return n;
            for (let i of (n.push(e), t[e]))
              for (let e of this.findTypeDependencies(i.type, t, n)) n.includes(e) || n.push(e);
            return n;
          },
          hashStruct(e, t, n, i = !0) {
            return r.keccak(this.encodeData(e, t, n, i));
          },
          hashType(e, t) {
            return r.keccak(this.encodeType(e, t));
          },
          sanitizeData(e) {
            let t = {};
            for (let n in a.properties) e[n] && (t[n] = e[n]);
            return t.types && (t.types = Object.assign({ EIP712Domain: [] }, t.types)), t;
          },
          hash(e, t = !0) {
            let n = this.sanitizeData(e),
              s = [i.from('1901', 'hex')];
            return (
              s.push(this.hashStruct('EIP712Domain', n.domain, n.types, t)),
              'EIP712Domain' !== n.primaryType &&
                s.push(this.hashStruct(n.primaryType, n.message, n.types, t)),
              r.keccak(i.concat(s))
            );
          },
        };
      e.exports = {
        TYPED_MESSAGE_SCHEMA: a,
        TypedDataUtils: o,
        hashForSignTypedDataLegacy: function (e) {
          return (function (e) {
            let t = Error('Expect argument to be non-empty array');
            if ('object' != typeof e || !e.length) throw t;
            let n = e.map(function (e) {
                return 'bytes' === e.type ? r.toBuffer(e.value) : e.value;
              }),
              i = e.map(function (e) {
                return e.type;
              }),
              a = e.map(function (e) {
                if (!e.name) throw t;
                return e.type + ' ' + e.name;
              });
            return s.soliditySHA3(
              ['bytes32', 'bytes32'],
              [s.soliditySHA3(Array(e.length).fill('string'), a), s.soliditySHA3(i, n)]
            );
          })(e.data);
        },
        hashForSignTypedData_v3: function (e) {
          return o.hash(e.data, !1);
        },
        hashForSignTypedData_v4: function (e) {
          return o.hash(e.data);
        },
      };
    },
    77435: function (e, t, n) {
      var i = n(87150).Buffer;
      let { keccak_256: r } = n(1350);
      function s(e) {
        return i.allocUnsafe(e).fill(0);
      }
      function a(e, t) {
        let n = e.toString(16);
        n.length % 2 != 0 && (n = '0' + n);
        let r = n.match(/.{1,2}/g).map((e) => parseInt(e, 16));
        for (; r.length < t; ) r.unshift(0);
        return i.from(r);
      }
      function o(e, t, n) {
        let i = s(t);
        return ((e = c(e)), n)
          ? e.length < t
            ? (e.copy(i), i)
            : e.slice(0, t)
          : e.length < t
            ? (e.copy(i, t - e.length), i)
            : e.slice(-t);
      }
      function c(e) {
        if (!i.isBuffer(e)) {
          if (Array.isArray(e)) e = i.from(e);
          else if ('string' == typeof e) {
            var t;
            e = l(e) ? i.from((t = d(e)).length % 2 ? '0' + t : t, 'hex') : i.from(e);
          } else if ('number' == typeof e) e = intToBuffer(e);
          else if (null == e) e = i.allocUnsafe(0);
          else if ('bigint' == typeof e) e = a(e);
          else if (e.toArray) e = i.from(e.toArray());
          else throw Error('invalid type');
        }
        return e;
      }
      function l(e) {
        return 'string' == typeof e && e.match(/^0x[0-9A-Fa-f]*$/);
      }
      function d(e) {
        return 'string' == typeof e && e.startsWith('0x') ? e.slice(2) : e;
      }
      e.exports = {
        zeros: s,
        setLength: o,
        setLengthRight: function (e, t) {
          return o(e, t, !0);
        },
        isHexString: l,
        stripHexPrefix: d,
        toBuffer: c,
        bufferToHex: function (e) {
          return '0x' + (e = c(e)).toString('hex');
        },
        keccak: function (e, t) {
          if (((e = c(e)), t || (t = 256), 256 !== t)) throw Error('unsupported');
          return i.from(r(new Uint8Array(e)));
        },
        bitLengthFromBigInt: function (e) {
          return e.toString(2).length;
        },
        bufferBEFromBigInt: a,
        twosFromBigInt: function (e, t) {
          return (e < 0n ? (~e & ((1n << BigInt(t)) - 1n)) + 1n : e) & ((1n << BigInt(t)) - 1n);
        },
      };
    },
    15766: function (e, t, n) {
      'use strict';
      let i;
      n.d(t, {
        createCoinbaseWalletSDK: function () {
          return tY;
        },
      });
      class r {
        constructor(e, t) {
          (this.scope = e), (this.module = t);
        }
        storeObject(e, t) {
          this.setItem(e, JSON.stringify(t));
        }
        loadObject(e) {
          let t = this.getItem(e);
          return t ? JSON.parse(t) : void 0;
        }
        setItem(e, t) {
          localStorage.setItem(this.scopedKey(e), t);
        }
        getItem(e) {
          return localStorage.getItem(this.scopedKey(e));
        }
        removeItem(e) {
          localStorage.removeItem(this.scopedKey(e));
        }
        clear() {
          let e = this.scopedKey(''),
            t = [];
          for (let n = 0; n < localStorage.length; n++) {
            let i = localStorage.key(n);
            'string' == typeof i && i.startsWith(e) && t.push(i);
          }
          t.forEach((e) => localStorage.removeItem(e));
        }
        scopedKey(e) {
          return `-${this.scope}${this.module ? `:${this.module}` : ''}:${e}`;
        }
        static clearAll() {
          new r('CBWSDK').clear(), new r('walletlink').clear();
        }
      }
      let s = {
          rpc: {
            invalidInput: -32e3,
            resourceNotFound: -32001,
            resourceUnavailable: -32002,
            transactionRejected: -32003,
            methodNotSupported: -32004,
            limitExceeded: -32005,
            parse: -32700,
            invalidRequest: -32600,
            methodNotFound: -32601,
            invalidParams: -32602,
            internal: -32603,
          },
          provider: {
            userRejectedRequest: 4001,
            unauthorized: 4100,
            unsupportedMethod: 4200,
            disconnected: 4900,
            chainDisconnected: 4901,
            unsupportedChain: 4902,
          },
        },
        a = {
          '-32700': {
            standard: 'JSON RPC 2.0',
            message:
              'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.',
          },
          '-32600': {
            standard: 'JSON RPC 2.0',
            message: 'The JSON sent is not a valid Request object.',
          },
          '-32601': {
            standard: 'JSON RPC 2.0',
            message: 'The method does not exist / is not available.',
          },
          '-32602': { standard: 'JSON RPC 2.0', message: 'Invalid method parameter(s).' },
          '-32603': { standard: 'JSON RPC 2.0', message: 'Internal JSON-RPC error.' },
          '-32000': { standard: 'EIP-1474', message: 'Invalid input.' },
          '-32001': { standard: 'EIP-1474', message: 'Resource not found.' },
          '-32002': { standard: 'EIP-1474', message: 'Resource unavailable.' },
          '-32003': { standard: 'EIP-1474', message: 'Transaction rejected.' },
          '-32004': { standard: 'EIP-1474', message: 'Method not supported.' },
          '-32005': { standard: 'EIP-1474', message: 'Request limit exceeded.' },
          4001: { standard: 'EIP-1193', message: 'User rejected the request.' },
          4100: {
            standard: 'EIP-1193',
            message: 'The requested account and/or method has not been authorized by the user.',
          },
          4200: {
            standard: 'EIP-1193',
            message: 'The requested method is not supported by this Ethereum provider.',
          },
          4900: { standard: 'EIP-1193', message: 'The provider is disconnected from all chains.' },
          4901: {
            standard: 'EIP-1193',
            message: 'The provider is disconnected from the specified chain.',
          },
          4902: { standard: 'EIP-3085', message: 'Unrecognized chain ID.' },
        },
        o = 'Unspecified error message.';
      function c(e, t = o) {
        if (e && Number.isInteger(e)) {
          let t = e.toString();
          if (d(a, t)) return a[t].message;
          if (e >= -32099 && e <= -32e3) return 'Unspecified server error.';
        }
        return t;
      }
      function l(e) {
        return e && 'object' == typeof e && !Array.isArray(e) ? Object.assign({}, e) : e;
      }
      function d(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function u(e, t) {
        return 'object' == typeof e && null !== e && t in e && 'string' == typeof e[t];
      }
      let h = {
        rpc: {
          parse: (e) => p(s.rpc.parse, e),
          invalidRequest: (e) => p(s.rpc.invalidRequest, e),
          invalidParams: (e) => p(s.rpc.invalidParams, e),
          methodNotFound: (e) => p(s.rpc.methodNotFound, e),
          internal: (e) => p(s.rpc.internal, e),
          server: (e) => {
            if (!e || 'object' != typeof e || Array.isArray(e))
              throw Error('Ethereum RPC Server errors must provide single object argument.');
            let { code: t } = e;
            if (!Number.isInteger(t) || t > -32005 || t < -32099)
              throw Error('"code" must be an integer such that: -32099 <= code <= -32005');
            return p(t, e);
          },
          invalidInput: (e) => p(s.rpc.invalidInput, e),
          resourceNotFound: (e) => p(s.rpc.resourceNotFound, e),
          resourceUnavailable: (e) => p(s.rpc.resourceUnavailable, e),
          transactionRejected: (e) => p(s.rpc.transactionRejected, e),
          methodNotSupported: (e) => p(s.rpc.methodNotSupported, e),
          limitExceeded: (e) => p(s.rpc.limitExceeded, e),
        },
        provider: {
          userRejectedRequest: (e) => f(s.provider.userRejectedRequest, e),
          unauthorized: (e) => f(s.provider.unauthorized, e),
          unsupportedMethod: (e) => f(s.provider.unsupportedMethod, e),
          disconnected: (e) => f(s.provider.disconnected, e),
          chainDisconnected: (e) => f(s.provider.chainDisconnected, e),
          unsupportedChain: (e) => f(s.provider.unsupportedChain, e),
          custom: (e) => {
            if (!e || 'object' != typeof e || Array.isArray(e))
              throw Error('Ethereum Provider custom errors must provide single object argument.');
            let { code: t, message: n, data: i } = e;
            if (!n || 'string' != typeof n) throw Error('"message" must be a nonempty string');
            return new b(t, n, i);
          },
        },
      };
      function p(e, t) {
        let [n, i] = g(t);
        return new m(e, n || c(e), i);
      }
      function f(e, t) {
        let [n, i] = g(t);
        return new b(e, n || c(e), i);
      }
      function g(e) {
        if (e) {
          if ('string' == typeof e) return [e];
          if ('object' == typeof e && !Array.isArray(e)) {
            let { message: t, data: n } = e;
            if (t && 'string' != typeof t) throw Error('Must specify string message.');
            return [t || void 0, n];
          }
        }
        return [];
      }
      class m extends Error {
        constructor(e, t, n) {
          if (!Number.isInteger(e)) throw Error('"code" must be an integer.');
          if (!t || 'string' != typeof t) throw Error('"message" must be a nonempty string.');
          super(t), (this.code = e), void 0 !== n && (this.data = n);
        }
      }
      class b extends m {
        constructor(e, t, n) {
          if (!(Number.isInteger(e) && e >= 1e3 && e <= 4999))
            throw Error('"code" must be an integer such that: 1000 <= code <= 4999');
          super(e, t, n);
        }
      }
      let _ = (e) => e,
        y = (e) => e,
        w = (e) => e;
      function v(e) {
        return Math.floor(e);
      }
      var k = n(87150).Buffer;
      let x = /^[0-9]*$/,
        I = /^[a-f0-9]*$/;
      function E(e) {
        return C(crypto.getRandomValues(new Uint8Array(e)));
      }
      function C(e) {
        return [...e].map((e) => e.toString(16).padStart(2, '0')).join('');
      }
      function S(e) {
        return new Uint8Array(e.match(/.{1,2}/g).map((e) => Number.parseInt(e, 16)));
      }
      function M(e, t = !1) {
        let n = e.toString('hex');
        return _(t ? `0x${n}` : n);
      }
      function A(e) {
        return M(O(e), !0);
      }
      function P(e) {
        return w(e.toString(10));
      }
      function L(e) {
        return _(`0x${BigInt(e).toString(16)}`);
      }
      function N(e) {
        return e.startsWith('0x') || e.startsWith('0X');
      }
      function D(e) {
        return N(e) ? e.slice(2) : e;
      }
      function R(e) {
        return N(e) ? `0x${e.slice(2)}` : `0x${e}`;
      }
      function T(e) {
        if ('string' != typeof e) return !1;
        let t = D(e).toLowerCase();
        return I.test(t);
      }
      function j(e, t = !1) {
        let n = (function (e, t = !1) {
          if ('string' == typeof e) {
            let n = D(e).toLowerCase();
            if (I.test(n)) return _(t ? `0x${n}` : n);
          }
          throw h.rpc.invalidParams(`"${String(e)}" is not a hexadecimal string`);
        })(e, !1);
        return n.length % 2 == 1 && (n = _(`0${n}`)), t ? _(`0x${n}`) : n;
      }
      function U(e) {
        if ('string' == typeof e) {
          let t = D(e).toLowerCase();
          if (T(t) && 40 === t.length) return y(R(t));
        }
        throw h.rpc.invalidParams(`Invalid Ethereum address: ${String(e)}`);
      }
      function O(e) {
        if (k.isBuffer(e)) return e;
        if ('string' == typeof e) {
          if (T(e)) {
            let t = j(e, !1);
            return k.from(t, 'hex');
          }
          return k.from(e, 'utf8');
        }
        throw h.rpc.invalidParams(`Not binary data: ${String(e)}`);
      }
      function W(e) {
        if ('number' == typeof e && Number.isInteger(e)) return v(e);
        if ('string' == typeof e) {
          if (x.test(e)) return v(Number(e));
          if (T(e)) return v(Number(BigInt(j(e, !0))));
        }
        throw h.rpc.invalidParams(`Not an integer: ${String(e)}`);
      }
      function q(e) {
        if (
          null !== e &&
          ('bigint' == typeof e ||
            (function (e) {
              if (null == e || 'function' != typeof e.constructor) return !1;
              let { constructor: t } = e;
              return 'function' == typeof t.config && 'number' == typeof t.EUCLID;
            })(e))
        )
          return BigInt(e.toString(10));
        if ('number' == typeof e) return BigInt(W(e));
        if ('string' == typeof e) {
          if (x.test(e)) return BigInt(e);
          if (T(e)) return BigInt(j(e, !0));
        }
        throw h.rpc.invalidParams(`Not an integer: ${String(e)}`);
      }
      async function z() {
        return crypto.subtle.generateKey({ name: 'ECDH', namedCurve: 'P-256' }, !0, ['deriveKey']);
      }
      async function K(e, t) {
        return crypto.subtle.deriveKey(
          { name: 'ECDH', public: t },
          e,
          { name: 'AES-GCM', length: 256 },
          !1,
          ['encrypt', 'decrypt']
        );
      }
      async function B(e, t) {
        let n = crypto.getRandomValues(new Uint8Array(12)),
          i = await crypto.subtle.encrypt(
            { name: 'AES-GCM', iv: n },
            e,
            new TextEncoder().encode(t)
          );
        return { iv: n, cipherText: i };
      }
      async function F(e, { iv: t, cipherText: n }) {
        let i = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: t }, e, n);
        return new TextDecoder().decode(i);
      }
      function H(e) {
        switch (e) {
          case 'public':
            return 'spki';
          case 'private':
            return 'pkcs8';
        }
      }
      async function G(e, t) {
        let n = H(e);
        return C(new Uint8Array(await crypto.subtle.exportKey(n, t)));
      }
      async function $(e, t) {
        let n = H(e),
          i = S(t).buffer;
        return await crypto.subtle.importKey(
          n,
          new Uint8Array(i),
          { name: 'ECDH', namedCurve: 'P-256' },
          !0,
          'private' === e ? ['deriveKey'] : []
        );
      }
      async function J(e, t) {
        return B(
          t,
          JSON.stringify(e, (e, t) =>
            t instanceof Error
              ? Object.assign(Object.assign({}, t.code ? { code: t.code } : {}), {
                  message: t.message,
                })
              : t
          )
        );
      }
      async function Y(e, t) {
        return JSON.parse(await F(t, e));
      }
      let V = { storageKey: 'ownPrivateKey', keyType: 'private' },
        Q = { storageKey: 'ownPublicKey', keyType: 'public' },
        Z = { storageKey: 'peerPublicKey', keyType: 'public' };
      class X {
        constructor() {
          (this.storage = new r('CBWSDK', 'SCWKeyManager')),
            (this.ownPrivateKey = null),
            (this.ownPublicKey = null),
            (this.peerPublicKey = null),
            (this.sharedSecret = null);
        }
        async getOwnPublicKey() {
          return await this.loadKeysIfNeeded(), this.ownPublicKey;
        }
        async getSharedSecret() {
          return await this.loadKeysIfNeeded(), this.sharedSecret;
        }
        async setPeerPublicKey(e) {
          (this.sharedSecret = null),
            (this.peerPublicKey = e),
            await this.storeKey(Z, e),
            await this.loadKeysIfNeeded();
        }
        async clear() {
          (this.ownPrivateKey = null),
            (this.ownPublicKey = null),
            (this.peerPublicKey = null),
            (this.sharedSecret = null),
            this.storage.removeItem(Q.storageKey),
            this.storage.removeItem(V.storageKey),
            this.storage.removeItem(Z.storageKey);
        }
        async generateKeyPair() {
          let e = await z();
          (this.ownPrivateKey = e.privateKey),
            (this.ownPublicKey = e.publicKey),
            await this.storeKey(V, e.privateKey),
            await this.storeKey(Q, e.publicKey);
        }
        async loadKeysIfNeeded() {
          null === this.ownPrivateKey && (this.ownPrivateKey = await this.loadKey(V)),
            null === this.ownPublicKey && (this.ownPublicKey = await this.loadKey(Q)),
            (null === this.ownPrivateKey || null === this.ownPublicKey) &&
              (await this.generateKeyPair()),
            null === this.peerPublicKey && (this.peerPublicKey = await this.loadKey(Z)),
            null === this.sharedSecret &&
              null !== this.ownPrivateKey &&
              null !== this.peerPublicKey &&
              (this.sharedSecret = await K(this.ownPrivateKey, this.peerPublicKey));
        }
        async loadKey(e) {
          let t = this.storage.getItem(e.storageKey);
          return t ? $(e.keyType, t) : null;
        }
        async storeKey(e, t) {
          let n = await G(e.keyType, t);
          this.storage.setItem(e.storageKey, n);
        }
      }
      let ee = '4.3.0',
        et = '@coinbase/wallet-sdk';
      async function en(e, t) {
        let n = Object.assign(Object.assign({}, e), { jsonrpc: '2.0', id: crypto.randomUUID() }),
          i = await window.fetch(t, {
            method: 'POST',
            body: JSON.stringify(n),
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              'X-Cbw-Sdk-Version': ee,
              'X-Cbw-Sdk-Platform': et,
            },
          }),
          { result: r, error: s } = await i.json();
        if (s) throw s;
        return r;
      }
      let ei = 'accounts',
        er = 'activeChain',
        es = 'availableChains',
        ea = 'walletCapabilities';
      class eo {
        constructor(e) {
          var t, n, i;
          (this.metadata = e.metadata),
            (this.communicator = e.communicator),
            (this.callback = e.callback),
            (this.keyManager = new X()),
            (this.storage = new r('CBWSDK', 'SCWStateManager')),
            (this.accounts = null !== (t = this.storage.loadObject(ei)) && void 0 !== t ? t : []),
            (this.chain = this.storage.loadObject(er) || {
              id:
                null !==
                  (i = null === (n = e.metadata.appChainIds) || void 0 === n ? void 0 : n[0]) &&
                void 0 !== i
                  ? i
                  : 1,
            }),
            (this.handshake = this.handshake.bind(this)),
            (this.request = this.request.bind(this)),
            (this.createRequestMessage = this.createRequestMessage.bind(this)),
            (this.decryptResponseMessage = this.decryptResponseMessage.bind(this));
        }
        async handshake(e) {
          var t, n, i, r;
          await (null === (n = (t = this.communicator).waitForPopupLoaded) || void 0 === n
            ? void 0
            : n.call(t));
          let s = await this.createRequestMessage({
              handshake: {
                method: e.method,
                params: Object.assign(
                  {},
                  this.metadata,
                  null !== (i = e.params) && void 0 !== i ? i : {}
                ),
              },
            }),
            a = await this.communicator.postRequestAndWaitForResponse(s);
          if ('failure' in a.content) throw a.content.failure;
          let o = await $('public', a.sender);
          await this.keyManager.setPeerPublicKey(o);
          let c = (await this.decryptResponseMessage(a)).result;
          if ('error' in c) throw c.error;
          if ('eth_requestAccounts' === e.method) {
            let e = c.value;
            (this.accounts = e),
              this.storage.storeObject(ei, e),
              null === (r = this.callback) || void 0 === r || r.call(this, 'accountsChanged', e);
          }
        }
        async request(e) {
          var t;
          if (0 === this.accounts.length) {
            if ('wallet_sendCalls' === e.method) return this.sendRequestToPopup(e);
            throw h.provider.unauthorized();
          }
          switch (e.method) {
            case 'eth_requestAccounts':
              return (
                null === (t = this.callback) ||
                  void 0 === t ||
                  t.call(this, 'connect', { chainId: L(this.chain.id) }),
                this.accounts
              );
            case 'eth_accounts':
              return this.accounts;
            case 'eth_coinbase':
              return this.accounts[0];
            case 'net_version':
              return this.chain.id;
            case 'eth_chainId':
              return L(this.chain.id);
            case 'wallet_getCapabilities':
              return this.storage.loadObject(ea);
            case 'wallet_switchEthereumChain':
              return this.handleSwitchChainRequest(e);
            case 'eth_ecRecover':
            case 'personal_sign':
            case 'wallet_sign':
            case 'personal_ecRecover':
            case 'eth_signTransaction':
            case 'eth_sendTransaction':
            case 'eth_signTypedData_v1':
            case 'eth_signTypedData_v3':
            case 'eth_signTypedData_v4':
            case 'eth_signTypedData':
            case 'wallet_addEthereumChain':
            case 'wallet_watchAsset':
            case 'wallet_sendCalls':
            case 'wallet_showCallsStatus':
            case 'wallet_grantPermissions':
              return this.sendRequestToPopup(e);
            default:
              if (!this.chain.rpcUrl) throw h.rpc.internal('No RPC URL set for chain');
              return en(e, this.chain.rpcUrl);
          }
        }
        async sendRequestToPopup(e) {
          var t, n;
          await (null === (n = (t = this.communicator).waitForPopupLoaded) || void 0 === n
            ? void 0
            : n.call(t));
          let i = await this.sendEncryptedRequest(e),
            r = (await this.decryptResponseMessage(i)).result;
          if ('error' in r) throw r.error;
          return r.value;
        }
        async cleanup() {
          var e, t;
          this.storage.clear(),
            await this.keyManager.clear(),
            (this.accounts = []),
            (this.chain = {
              id:
                null !==
                  (t = null === (e = this.metadata.appChainIds) || void 0 === e ? void 0 : e[0]) &&
                void 0 !== t
                  ? t
                  : 1,
            });
        }
        async handleSwitchChainRequest(e) {
          var t;
          let n = e.params;
          if (!n || !(null === (t = n[0]) || void 0 === t ? void 0 : t.chainId))
            throw h.rpc.invalidParams();
          let i = W(n[0].chainId);
          if (this.updateChain(i)) return null;
          let r = await this.sendRequestToPopup(e);
          return null === r && this.updateChain(i), r;
        }
        async sendEncryptedRequest(e) {
          let t = await this.keyManager.getSharedSecret();
          if (!t)
            throw h.provider.unauthorized(
              'No valid session found, try requestAccounts before other methods'
            );
          let n = await J({ action: e, chainId: this.chain.id }, t),
            i = await this.createRequestMessage({ encrypted: n });
          return this.communicator.postRequestAndWaitForResponse(i);
        }
        async createRequestMessage(e) {
          let t = await G('public', await this.keyManager.getOwnPublicKey());
          return { id: crypto.randomUUID(), sender: t, content: e, timestamp: new Date() };
        }
        async decryptResponseMessage(e) {
          var t, n;
          let i = e.content;
          if ('failure' in i) throw i.failure;
          let r = await this.keyManager.getSharedSecret();
          if (!r) throw h.provider.unauthorized('Invalid session');
          let s = await Y(i.encrypted, r),
            a = null === (t = s.data) || void 0 === t ? void 0 : t.chains;
          if (a) {
            let e = Object.entries(a).map(([e, t]) => ({ id: Number(e), rpcUrl: t }));
            this.storage.storeObject(es, e), this.updateChain(this.chain.id, e);
          }
          let o = null === (n = s.data) || void 0 === n ? void 0 : n.capabilities;
          return o && this.storage.storeObject(ea, o), s;
        }
        updateChain(e, t) {
          var n;
          let i = null != t ? t : this.storage.loadObject(es),
            r = null == i ? void 0 : i.find((t) => t.id === e);
          return (
            !!r &&
            (r !== this.chain &&
              ((this.chain = r),
              this.storage.storeObject(er, r),
              null === (n = this.callback) ||
                void 0 === n ||
                n.call(this, 'chainChanged', L(r.id))),
            !0)
          );
        }
      }
      var ec = n(46006);
      let el = 'Addresses';
      function ed(e) {
        return void 0 !== e.errorMessage;
      }
      class eu {
        constructor(e) {
          this.secret = e;
        }
        async encrypt(e) {
          let t = this.secret;
          if (64 !== t.length) throw Error('secret must be 256 bits');
          let n = crypto.getRandomValues(new Uint8Array(12)),
            i = await crypto.subtle.importKey('raw', S(t), { name: 'aes-gcm' }, !1, [
              'encrypt',
              'decrypt',
            ]),
            r = new TextEncoder(),
            s = await window.crypto.subtle.encrypt({ name: 'AES-GCM', iv: n }, i, r.encode(e)),
            a = s.slice(s.byteLength - 16),
            o = s.slice(0, s.byteLength - 16),
            c = new Uint8Array(a),
            l = new Uint8Array(o);
          return C(new Uint8Array([...n, ...c, ...l]));
        }
        async decrypt(e) {
          let t = this.secret;
          if (64 !== t.length) throw Error('secret must be 256 bits');
          return new Promise((n, i) => {
            !(async function () {
              let r = await crypto.subtle.importKey('raw', S(t), { name: 'aes-gcm' }, !1, [
                  'encrypt',
                  'decrypt',
                ]),
                s = S(e),
                a = s.slice(0, 12),
                o = s.slice(12, 28),
                c = new Uint8Array([...s.slice(28), ...o]),
                l = { name: 'AES-GCM', iv: new Uint8Array(a) };
              try {
                let e = await window.crypto.subtle.decrypt(l, r, c),
                  t = new TextDecoder();
                n(t.decode(e));
              } catch (e) {
                i(e);
              }
            })();
          });
        }
      }
      class eh {
        constructor(e, t, n) {
          (this.linkAPIUrl = e), (this.sessionId = t);
          let i = `${t}:${n}`;
          this.auth = `Basic ${btoa(i)}`;
        }
        async markUnseenEventsAsSeen(e) {
          return Promise.all(
            e.map((e) =>
              fetch(`${this.linkAPIUrl}/events/${e.eventId}/seen`, {
                method: 'POST',
                headers: { Authorization: this.auth },
              })
            )
          ).catch((e) => console.error('Unabled to mark event as failed:', e));
        }
        async fetchUnseenEvents() {
          var e;
          let t = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
            headers: { Authorization: this.auth },
          });
          if (t.ok) {
            let { events: n, error: i } = await t.json();
            if (i) throw Error(`Check unseen events failed: ${i}`);
            let r =
              null !==
                (e =
                  null == n
                    ? void 0
                    : n
                        .filter((e) => 'Web3Response' === e.event)
                        .map((e) => ({
                          type: 'Event',
                          sessionId: this.sessionId,
                          eventId: e.id,
                          event: e.event,
                          data: e.data,
                        }))) && void 0 !== e
                ? e
                : [];
            return this.markUnseenEventsAsSeen(r), r;
          }
          throw Error(`Check unseen events failed: ${t.status}`);
        }
      }
      ((eL = eN || (eN = {}))[(eL.DISCONNECTED = 0)] = 'DISCONNECTED'),
        (eL[(eL.CONNECTING = 1)] = 'CONNECTING'),
        (eL[(eL.CONNECTED = 2)] = 'CONNECTED');
      class ep {
        setConnectionStateListener(e) {
          this.connectionStateListener = e;
        }
        setIncomingDataListener(e) {
          this.incomingDataListener = e;
        }
        constructor(e, t = WebSocket) {
          (this.WebSocketClass = t),
            (this.webSocket = null),
            (this.pendingData = []),
            (this.url = e.replace(/^http/, 'ws'));
        }
        async connect() {
          if (this.webSocket) throw Error('webSocket object is not null');
          return new Promise((e, t) => {
            var n;
            let i;
            try {
              this.webSocket = i = new this.WebSocketClass(this.url);
            } catch (e) {
              t(e);
              return;
            }
            null === (n = this.connectionStateListener) ||
              void 0 === n ||
              n.call(this, eN.CONNECTING),
              (i.onclose = (e) => {
                var n;
                this.clearWebSocket(),
                  t(Error(`websocket error ${e.code}: ${e.reason}`)),
                  null === (n = this.connectionStateListener) ||
                    void 0 === n ||
                    n.call(this, eN.DISCONNECTED);
              }),
              (i.onopen = (t) => {
                var n;
                e(),
                  null === (n = this.connectionStateListener) ||
                    void 0 === n ||
                    n.call(this, eN.CONNECTED),
                  this.pendingData.length > 0 &&
                    ([...this.pendingData].forEach((e) => this.sendData(e)),
                    (this.pendingData = []));
              }),
              (i.onmessage = (e) => {
                var t, n;
                if ('h' === e.data)
                  null === (t = this.incomingDataListener) ||
                    void 0 === t ||
                    t.call(this, { type: 'Heartbeat' });
                else
                  try {
                    let t = JSON.parse(e.data);
                    null === (n = this.incomingDataListener) || void 0 === n || n.call(this, t);
                  } catch (e) {}
              });
          });
        }
        disconnect() {
          var e;
          let { webSocket: t } = this;
          if (t) {
            this.clearWebSocket(),
              null === (e = this.connectionStateListener) ||
                void 0 === e ||
                e.call(this, eN.DISCONNECTED),
              (this.connectionStateListener = void 0),
              (this.incomingDataListener = void 0);
            try {
              t.close();
            } catch (e) {}
          }
        }
        sendData(e) {
          let { webSocket: t } = this;
          if (!t) {
            this.pendingData.push(e), this.connect();
            return;
          }
          t.send(e);
        }
        clearWebSocket() {
          let { webSocket: e } = this;
          e &&
            ((this.webSocket = null),
            (e.onclose = null),
            (e.onerror = null),
            (e.onmessage = null),
            (e.onopen = null));
        }
      }
      class ef {
        constructor({ session: e, linkAPIUrl: t, listener: n }) {
          (this.destroyed = !1),
            (this.lastHeartbeatResponse = 0),
            (this.nextReqId = v(1)),
            (this._connected = !1),
            (this._linked = !1),
            (this.shouldFetchUnseenEventsOnConnect = !1),
            (this.requestResolutions = new Map()),
            (this.handleSessionMetadataUpdated = (e) => {
              e &&
                new Map([
                  ['__destroyed', this.handleDestroyed],
                  ['EthereumAddress', this.handleAccountUpdated],
                  ['WalletUsername', this.handleWalletUsernameUpdated],
                  ['AppVersion', this.handleAppVersionUpdated],
                  ['ChainId', (t) => e.JsonRpcUrl && this.handleChainUpdated(t, e.JsonRpcUrl)],
                ]).forEach((t, n) => {
                  let i = e[n];
                  void 0 !== i && t(i);
                });
            }),
            (this.handleDestroyed = (e) => {
              var t;
              '1' === e && (null === (t = this.listener) || void 0 === t || t.resetAndReload());
            }),
            (this.handleAccountUpdated = async (e) => {
              var t;
              let n = await this.cipher.decrypt(e);
              null === (t = this.listener) || void 0 === t || t.accountUpdated(n);
            }),
            (this.handleMetadataUpdated = async (e, t) => {
              var n;
              let i = await this.cipher.decrypt(t);
              null === (n = this.listener) || void 0 === n || n.metadataUpdated(e, i);
            }),
            (this.handleWalletUsernameUpdated = async (e) => {
              this.handleMetadataUpdated('walletUsername', e);
            }),
            (this.handleAppVersionUpdated = async (e) => {
              this.handleMetadataUpdated('AppVersion', e);
            }),
            (this.handleChainUpdated = async (e, t) => {
              var n;
              let i = await this.cipher.decrypt(e),
                r = await this.cipher.decrypt(t);
              null === (n = this.listener) || void 0 === n || n.chainUpdated(i, r);
            }),
            (this.session = e),
            (this.cipher = new eu(e.secret)),
            (this.listener = n);
          let i = new ep(`${t}/rpc`, WebSocket);
          i.setConnectionStateListener(async (e) => {
            let t = !1;
            switch (e) {
              case eN.DISCONNECTED:
                if (!this.destroyed) {
                  let e = async () => {
                    await new Promise((e) => setTimeout(e, 5e3)),
                      this.destroyed ||
                        i.connect().catch(() => {
                          e();
                        });
                  };
                  e();
                }
                break;
              case eN.CONNECTED:
                (t = await this.handleConnected()),
                  this.updateLastHeartbeat(),
                  setInterval(() => {
                    this.heartbeat();
                  }, 1e4),
                  this.shouldFetchUnseenEventsOnConnect && this.fetchUnseenEventsAPI();
              case eN.CONNECTING:
            }
            this.connected !== t && (this.connected = t);
          }),
            i.setIncomingDataListener((e) => {
              var t;
              switch (e.type) {
                case 'Heartbeat':
                  this.updateLastHeartbeat();
                  return;
                case 'IsLinkedOK':
                case 'Linked': {
                  let t = 'IsLinkedOK' === e.type ? e.linked : void 0;
                  this.linked = t || e.onlineGuests > 0;
                  break;
                }
                case 'GetSessionConfigOK':
                case 'SessionConfigUpdated':
                  this.handleSessionMetadataUpdated(e.metadata);
                  break;
                case 'Event':
                  this.handleIncomingEvent(e);
              }
              void 0 !== e.id &&
                (null === (t = this.requestResolutions.get(e.id)) || void 0 === t || t(e));
            }),
            (this.ws = i),
            (this.http = new eh(t, e.id, e.key));
        }
        connect() {
          if (this.destroyed) throw Error('instance is destroyed');
          this.ws.connect();
        }
        async destroy() {
          this.destroyed ||
            (await this.makeRequest(
              {
                type: 'SetSessionConfig',
                id: v(this.nextReqId++),
                sessionId: this.session.id,
                metadata: { __destroyed: '1' },
              },
              { timeout: 1e3 }
            ),
            (this.destroyed = !0),
            this.ws.disconnect(),
            (this.listener = void 0));
        }
        get connected() {
          return this._connected;
        }
        set connected(e) {
          this._connected = e;
        }
        get linked() {
          return this._linked;
        }
        set linked(e) {
          var t, n;
          (this._linked = e),
            e && (null === (t = this.onceLinked) || void 0 === t || t.call(this)),
            null === (n = this.listener) || void 0 === n || n.linkedUpdated(e);
        }
        setOnceLinked(e) {
          return new Promise((t) => {
            this.linked
              ? e().then(t)
              : (this.onceLinked = () => {
                  e().then(t), (this.onceLinked = void 0);
                });
          });
        }
        async handleIncomingEvent(e) {
          var t;
          if ('Event' !== e.type || 'Web3Response' !== e.event) return;
          let n = JSON.parse(await this.cipher.decrypt(e.data));
          if ('WEB3_RESPONSE' !== n.type) return;
          let { id: i, response: r } = n;
          null === (t = this.listener) || void 0 === t || t.handleWeb3ResponseMessage(i, r);
        }
        async checkUnseenEvents() {
          if (!this.connected) {
            this.shouldFetchUnseenEventsOnConnect = !0;
            return;
          }
          await new Promise((e) => setTimeout(e, 250));
          try {
            await this.fetchUnseenEventsAPI();
          } catch (e) {
            console.error('Unable to check for unseen events', e);
          }
        }
        async fetchUnseenEventsAPI() {
          (this.shouldFetchUnseenEventsOnConnect = !1),
            (await this.http.fetchUnseenEvents()).forEach((e) => this.handleIncomingEvent(e));
        }
        async publishEvent(e, t, n = !1) {
          let i = await this.cipher.encrypt(
              JSON.stringify(
                Object.assign(Object.assign({}, t), {
                  origin: location.origin,
                  location: location.href,
                  relaySource:
                    'coinbaseWalletExtension' in window && window.coinbaseWalletExtension
                      ? 'injected_sdk'
                      : 'sdk',
                })
              )
            ),
            r = {
              type: 'PublishEvent',
              id: v(this.nextReqId++),
              sessionId: this.session.id,
              event: e,
              data: i,
              callWebhook: n,
            };
          return this.setOnceLinked(async () => {
            let e = await this.makeRequest(r);
            if ('Fail' === e.type) throw Error(e.error || 'failed to publish event');
            return e.eventId;
          });
        }
        sendData(e) {
          this.ws.sendData(JSON.stringify(e));
        }
        updateLastHeartbeat() {
          this.lastHeartbeatResponse = Date.now();
        }
        heartbeat() {
          if (Date.now() - this.lastHeartbeatResponse > 2e4) {
            this.ws.disconnect();
            return;
          }
          try {
            this.ws.sendData('h');
          } catch (e) {}
        }
        async makeRequest(e, t = { timeout: 6e4 }) {
          let n;
          let i = e.id;
          return (
            this.sendData(e),
            Promise.race([
              new Promise((e, r) => {
                n = window.setTimeout(() => {
                  r(Error(`request ${i} timed out`));
                }, t.timeout);
              }),
              new Promise((e) => {
                this.requestResolutions.set(i, (t) => {
                  clearTimeout(n), e(t), this.requestResolutions.delete(i);
                });
              }),
            ])
          );
        }
        async handleConnected() {
          return (
            'Fail' !==
              (
                await this.makeRequest({
                  type: 'HostSession',
                  id: v(this.nextReqId++),
                  sessionId: this.session.id,
                  sessionKey: this.session.key,
                })
              ).type &&
            (this.sendData({
              type: 'IsLinked',
              id: v(this.nextReqId++),
              sessionId: this.session.id,
            }),
            this.sendData({
              type: 'GetSessionConfig',
              id: v(this.nextReqId++),
              sessionId: this.session.id,
            }),
            !0)
          );
        }
      }
      class eg {
        constructor() {
          (this._nextRequestId = 0), (this.callbacks = new Map());
        }
        makeRequestId() {
          this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
          let e = this._nextRequestId,
            t = R(e.toString(16));
          return this.callbacks.get(t) && this.callbacks.delete(t), e;
        }
      }
      var em = n(5965);
      class eb extends em.kb {
        constructor(e, t, n, i) {
          super(),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = n),
            (this.isLE = i),
            (this.buffer = new Uint8Array(e)),
            (this.view = (0, em.GL)(this.buffer));
        }
        update(e) {
          (0, em.$h)(this), (e = (0, em.O0)(e)), (0, em.gk)(e);
          let { view: t, buffer: n, blockLen: i } = this,
            r = e.length;
          for (let s = 0; s < r; ) {
            let a = Math.min(i - this.pos, r - s);
            if (a === i) {
              let t = (0, em.GL)(e);
              for (; i <= r - s; s += i) this.process(t, s);
              continue;
            }
            n.set(e.subarray(s, s + a), this.pos),
              (this.pos += a),
              (s += a),
              this.pos === i && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          (0, em.$h)(this), (0, em.eB)(e, this), (this.finished = !0);
          let { buffer: t, view: n, blockLen: i, isLE: r } = this,
            { pos: s } = this;
          (t[s++] = 128),
            (0, em.ru)(this.buffer.subarray(s)),
            this.padOffset > i - s && (this.process(n, 0), (s = 0));
          for (let e = s; e < i; e++) t[e] = 0;
          !(function (e, t, n, i) {
            if ('function' == typeof e.setBigUint64) return e.setBigUint64(t, n, i);
            let r = BigInt(32),
              s = BigInt(4294967295),
              a = Number((n >> r) & s),
              o = Number(n & s),
              c = i ? 4 : 0,
              l = i ? 0 : 4;
            e.setUint32(t + c, a, i), e.setUint32(t + l, o, i);
          })(n, i - 8, BigInt(8 * this.length), r),
            this.process(n, 0);
          let a = (0, em.GL)(e),
            o = this.outputLen;
          if (o % 4) throw Error('_sha2: outputLen should be aligned to 32bit');
          let c = o / 4,
            l = this.get();
          if (c > l.length) throw Error('_sha2: outputLen bigger than state');
          for (let e = 0; e < c; e++) a.setUint32(4 * e, l[e], r);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let n = e.slice(0, t);
          return this.destroy(), n;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let { blockLen: t, buffer: n, length: i, finished: r, destroyed: s, pos: a } = this;
          return (
            (e.destroyed = s),
            (e.finished = r),
            (e.length = i),
            (e.pos = a),
            i % t && e.buffer.set(n),
            e
          );
        }
        clone() {
          return this._cloneInto();
        }
      }
      let e_ = Uint32Array.from([
        1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635,
        1541459225,
      ]);
      var ey = n(2217);
      let ew = Uint32Array.from([
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748,
          2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206,
          2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983,
          1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372,
          1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
          3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734,
          506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479,
          3329325298,
        ]),
        ev = new Uint32Array(64);
      class ek extends eb {
        constructor(e = 32) {
          super(64, e, 8, !1),
            (this.A = 0 | e_[0]),
            (this.B = 0 | e_[1]),
            (this.C = 0 | e_[2]),
            (this.D = 0 | e_[3]),
            (this.E = 0 | e_[4]),
            (this.F = 0 | e_[5]),
            (this.G = 0 | e_[6]),
            (this.H = 0 | e_[7]);
        }
        get() {
          let { A: e, B: t, C: n, D: i, E: r, F: s, G: a, H: o } = this;
          return [e, t, n, i, r, s, a, o];
        }
        set(e, t, n, i, r, s, a, o) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | n),
            (this.D = 0 | i),
            (this.E = 0 | r),
            (this.F = 0 | s),
            (this.G = 0 | a),
            (this.H = 0 | o);
        }
        process(e, t) {
          for (let n = 0; n < 16; n++, t += 4) ev[n] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = ev[e - 15],
              n = ev[e - 2],
              i = (0, em.np)(t, 7) ^ (0, em.np)(t, 18) ^ (t >>> 3),
              r = (0, em.np)(n, 17) ^ (0, em.np)(n, 19) ^ (n >>> 10);
            ev[e] = (r + ev[e - 7] + i + ev[e - 16]) | 0;
          }
          let { A: n, B: i, C: r, D: s, E: a, F: o, G: c, H: l } = this;
          for (let e = 0; e < 64; e++) {
            var d, u, h, p;
            let t =
                (l +
                  ((0, em.np)(a, 6) ^ (0, em.np)(a, 11) ^ (0, em.np)(a, 25)) +
                  (((d = a) & o) ^ (~d & c)) +
                  ew[e] +
                  ev[e]) |
                0,
              f =
                (((0, em.np)(n, 2) ^ (0, em.np)(n, 13) ^ (0, em.np)(n, 22)) +
                  (((u = n) & (h = i)) ^ (u & (p = r)) ^ (h & p))) |
                0;
            (l = c),
              (c = o),
              (o = a),
              (a = (s + t) | 0),
              (s = r),
              (r = i),
              (i = n),
              (n = (t + f) | 0);
          }
          (n = (n + this.A) | 0),
            (i = (i + this.B) | 0),
            (r = (r + this.C) | 0),
            (s = (s + this.D) | 0),
            (a = (a + this.E) | 0),
            (o = (o + this.F) | 0),
            (c = (c + this.G) | 0),
            (l = (l + this.H) | 0),
            this.set(n, i, r, s, a, o, c, l);
        }
        roundClean() {
          (0, em.ru)(ev);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), (0, em.ru)(this.buffer);
        }
      }
      let ex = ey.Vl(
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
      );
      ex[0], ex[1];
      let eI = (0, em.V1)(() => new ek()),
        eE = 'session:id',
        eC = 'session:secret',
        eS = 'session:linked';
      class eM {
        constructor(e, t, n, i = !1) {
          (this.storage = e),
            (this.id = t),
            (this.secret = n),
            (this.key = (0, em.ci)(eI(`${t}, ${n} WalletLink`))),
            (this._linked = !!i);
        }
        static create(e) {
          return new eM(e, E(16), E(32)).save();
        }
        static load(e) {
          let t = e.getItem(eE),
            n = e.getItem(eS),
            i = e.getItem(eC);
          return t && i ? new eM(e, t, i, '1' === n) : null;
        }
        get linked() {
          return this._linked;
        }
        set linked(e) {
          (this._linked = e), this.persistLinked();
        }
        save() {
          return (
            this.storage.setItem(eE, this.id),
            this.storage.setItem(eC, this.secret),
            this.persistLinked(),
            this
          );
        }
        persistLinked() {
          this.storage.setItem(eS, this._linked ? '1' : '0');
        }
      }
      function eA() {
        var e, t;
        return (
          null !==
            (t =
              null === (e = null == window ? void 0 : window.matchMedia) || void 0 === e
                ? void 0
                : e.call(window, '(prefers-color-scheme: dark)').matches) &&
          void 0 !== t &&
          t
        );
      }
      function eP() {
        let e = document.createElement('style');
        (e.type = 'text/css'),
          e.appendChild(
            document.createTextNode(
              '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}'
            )
          ),
          document.documentElement.appendChild(e);
      }
      var eL,
        eN,
        eD,
        eR,
        eT,
        ej,
        eU,
        eO,
        eW,
        eq,
        ez,
        eK,
        eB,
        eF = n(16422),
        eH = {},
        eG = [],
        e$ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
        eJ = Array.isArray;
      function eY(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      }
      function eV(e) {
        e && e.parentNode && e.parentNode.removeChild(e);
      }
      function eQ(e, t, n) {
        var i,
          r,
          s,
          a = {};
        for (s in t) 'key' == s ? (i = t[s]) : 'ref' == s ? (r = t[s]) : (a[s] = t[s]);
        if (
          (arguments.length > 2 && (a.children = arguments.length > 3 ? eD.call(arguments, 2) : n),
          'function' == typeof e && null != e.defaultProps)
        )
          for (s in e.defaultProps) null == a[s] && (a[s] = e.defaultProps[s]);
        return eZ(e, a, i, r, null);
      }
      function eZ(e, t, n, i, r) {
        var s = {
          type: e,
          props: t,
          key: n,
          ref: i,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __c: null,
          constructor: void 0,
          __v: null == r ? ++eT : r,
          __i: -1,
          __u: 0,
        };
        return null == r && null != eR.vnode && eR.vnode(s), s;
      }
      function eX(e) {
        return e.children;
      }
      function e0(e, t) {
        (this.props = e), (this.context = t);
      }
      function e2(e, t) {
        if (null == t) return e.__ ? e2(e.__, e.__i + 1) : null;
        for (var n; t < e.__k.length; t++)
          if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
        return 'function' == typeof e.type ? e2(e) : null;
      }
      function e1(e) {
        ((!e.__d && (e.__d = !0) && ej.push(e) && !e3.__r++) || eU != eR.debounceRendering) &&
          ((eU = eR.debounceRendering) || eO)(e3);
      }
      function e3() {
        for (var e, t, n, i, r, s, a = 1; ej.length; )
          ej.length > a && ej.sort(eW),
            (e = ej.shift()),
            (a = ej.length),
            e.__d &&
              ((t = void 0),
              (i = (n = e.__v).__e),
              (r = []),
              (s = []),
              e.__P &&
                (((t = eY({}, n)).__v = n.__v + 1),
                eR.vnode && eR.vnode(t),
                e6(
                  e.__P,
                  t,
                  n,
                  e.__n,
                  e.__P.namespaceURI,
                  32 & n.__u ? [i] : null,
                  r,
                  null == i ? e2(n) : i,
                  !!(32 & n.__u),
                  s
                ),
                (t.__v = n.__v),
                (t.__.__k[t.__i] = t),
                e9(r, t, s),
                t.__e != i &&
                  (function e(t) {
                    var n, i;
                    if (null != (t = t.__) && null != t.__c) {
                      for (t.__e = t.__c.base = null, n = 0; n < t.__k.length; n++)
                        if (null != (i = t.__k[n]) && null != i.__e) {
                          t.__e = t.__c.base = i.__e;
                          break;
                        }
                      return e(t);
                    }
                  })(t)));
        e3.__r = 0;
      }
      function e4(e, t, n, i, r, s, a, o, c, l, d) {
        var u,
          h,
          p,
          f,
          g,
          m,
          b = (i && i.__k) || eG,
          _ = t.length;
        for (
          c = (function (e, t, n, i, r) {
            var s,
              a,
              o,
              c,
              l,
              d = n.length,
              u = d,
              h = 0;
            for (e.__k = Array(r), s = 0; s < r; s++)
              null != (a = t[s]) && 'boolean' != typeof a && 'function' != typeof a
                ? ((c = s + h),
                  ((a = e.__k[s] =
                    'string' == typeof a ||
                    'number' == typeof a ||
                    'bigint' == typeof a ||
                    a.constructor == String
                      ? eZ(null, a, null, null, null)
                      : eJ(a)
                        ? eZ(eX, { children: a }, null, null, null)
                        : null == a.constructor && a.__b > 0
                          ? eZ(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v)
                          : a).__ = e),
                  (a.__b = e.__b + 1),
                  (o = null),
                  -1 !=
                    (l = a.__i =
                      (function (e, t, n, i) {
                        var r,
                          s,
                          a = e.key,
                          o = e.type,
                          c = t[n];
                        if (
                          (null === c && null == e.key) ||
                          (c && a == c.key && o == c.type && 0 == (2 & c.__u))
                        )
                          return n;
                        if (i > (null != c && 0 == (2 & c.__u) ? 1 : 0))
                          for (r = n - 1, s = n + 1; r >= 0 || s < t.length; ) {
                            if (r >= 0) {
                              if ((c = t[r]) && 0 == (2 & c.__u) && a == c.key && o == c.type)
                                return r;
                              r--;
                            }
                            if (s < t.length) {
                              if ((c = t[s]) && 0 == (2 & c.__u) && a == c.key && o == c.type)
                                return s;
                              s++;
                            }
                          }
                        return -1;
                      })(a, n, c, u)) && (u--, (o = n[l]) && (o.__u |= 2)),
                  null == o || null == o.__v
                    ? (-1 == l && (r > d ? h-- : r < d && h++),
                      'function' != typeof a.type && (a.__u |= 4))
                    : l != c &&
                      (l == c - 1 ? h-- : l == c + 1 ? h++ : (l > c ? h-- : h++, (a.__u |= 4))))
                : (e.__k[s] = null);
            if (u)
              for (s = 0; s < d; s++)
                null != (o = n[s]) &&
                  0 == (2 & o.__u) &&
                  (o.__e == i && (i = e2(o)),
                  (function e(t, n, i) {
                    var r, s;
                    if (
                      (eR.unmount && eR.unmount(t),
                      (r = t.ref) && ((r.current && r.current != t.__e) || te(r, null, n)),
                      null != (r = t.__c))
                    ) {
                      if (r.componentWillUnmount)
                        try {
                          r.componentWillUnmount();
                        } catch (e) {
                          eR.__e(e, n);
                        }
                      r.base = r.__P = null;
                    }
                    if ((r = t.__k))
                      for (s = 0; s < r.length; s++)
                        r[s] && e(r[s], n, i || 'function' != typeof t.type);
                    i || eV(t.__e), (t.__c = t.__ = t.__e = void 0);
                  })(o, o));
            return i;
          })(n, t, b, c, _),
            u = 0;
          u < _;
          u++
        )
          null != (p = n.__k[u]) &&
            ((h = -1 == p.__i ? eH : b[p.__i] || eH),
            (p.__i = u),
            (m = e6(e, p, h, r, s, a, o, c, l, d)),
            (f = p.__e),
            p.ref && h.ref != p.ref && (h.ref && te(h.ref, null, p), d.push(p.ref, p.__c || f, p)),
            null == g && null != f && (g = f),
            4 & p.__u || h.__k === p.__k
              ? (c = (function e(t, n, i) {
                  var r, s;
                  if ('function' == typeof t.type) {
                    for (r = t.__k, s = 0; r && s < r.length; s++)
                      r[s] && ((r[s].__ = t), (n = e(r[s], n, i)));
                    return n;
                  }
                  t.__e != n &&
                    (n && t.type && !i.contains(n) && (n = e2(t)),
                    i.insertBefore(t.__e, n || null),
                    (n = t.__e));
                  do n = n && n.nextSibling;
                  while (null != n && 8 == n.nodeType);
                  return n;
                })(p, c, e))
              : 'function' == typeof p.type && void 0 !== m
                ? (c = m)
                : f && (c = f.nextSibling),
            (p.__u &= -7));
        return (n.__e = g), c;
      }
      function e5(e, t, n) {
        '-' == t[0]
          ? e.setProperty(t, null == n ? '' : n)
          : (e[t] = null == n ? '' : 'number' != typeof n || e$.test(t) ? n : n + 'px');
      }
      function e8(e, t, n, i, r) {
        var s;
        e: if ('style' == t) {
          if ('string' == typeof n) e.style.cssText = n;
          else {
            if (('string' == typeof i && (e.style.cssText = i = ''), i))
              for (t in i) (n && t in n) || e5(e.style, t, '');
            if (n) for (t in n) (i && n[t] == i[t]) || e5(e.style, t, n[t]);
          }
        } else if ('o' == t[0] && 'n' == t[1])
          (s = t != (t = t.replace(eq, '$1'))),
            (t =
              t.toLowerCase() in e || 'onFocusOut' == t || 'onFocusIn' == t
                ? t.toLowerCase().slice(2)
                : t.slice(2)),
            e.l || (e.l = {}),
            (e.l[t + s] = n),
            n
              ? i
                ? (n.u = i.u)
                : ((n.u = ez), e.addEventListener(t, s ? eB : eK, s))
              : e.removeEventListener(t, s ? eB : eK, s);
        else {
          if ('http://www.w3.org/2000/svg' == r)
            t = t.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
          else if (
            'width' != t &&
            'height' != t &&
            'href' != t &&
            'list' != t &&
            'form' != t &&
            'tabIndex' != t &&
            'download' != t &&
            'rowSpan' != t &&
            'colSpan' != t &&
            'role' != t &&
            'popover' != t &&
            t in e
          )
            try {
              e[t] = null == n ? '' : n;
              break e;
            } catch (e) {}
          'function' == typeof n ||
            (null == n || (!1 === n && '-' != t[4])
              ? e.removeAttribute(t)
              : e.setAttribute(t, 'popover' == t && 1 == n ? '' : n));
        }
      }
      function e7(e) {
        return function (t) {
          if (this.l) {
            var n = this.l[t.type + e];
            if (null == t.t) t.t = ez++;
            else if (t.t < n.u) return;
            return n(eR.event ? eR.event(t) : t);
          }
        };
      }
      function e6(e, t, n, i, r, s, a, o, c, l) {
        var d,
          u,
          h,
          p,
          f,
          g,
          m,
          b,
          _,
          y,
          w,
          v,
          k,
          x,
          I,
          E,
          C,
          S = t.type;
        if (null != t.constructor) return null;
        128 & n.__u && ((c = !!(32 & n.__u)), (s = [(o = t.__e = n.__e)])), (d = eR.__b) && d(t);
        e: if ('function' == typeof S)
          try {
            if (
              ((b = t.props),
              (_ = 'prototype' in S && S.prototype.render),
              (y = (d = S.contextType) && i[d.__c]),
              (w = d ? (y ? y.props.value : d.__) : i),
              n.__c
                ? (m = (u = t.__c = n.__c).__ = u.__E)
                : (_
                    ? (t.__c = u = new S(b, w))
                    : ((t.__c = u = new e0(b, w)), (u.constructor = S), (u.render = tt)),
                  y && y.sub(u),
                  (u.props = b),
                  u.state || (u.state = {}),
                  (u.context = w),
                  (u.__n = i),
                  (h = u.__d = !0),
                  (u.__h = []),
                  (u._sb = [])),
              _ && null == u.__s && (u.__s = u.state),
              _ &&
                null != S.getDerivedStateFromProps &&
                (u.__s == u.state && (u.__s = eY({}, u.__s)),
                eY(u.__s, S.getDerivedStateFromProps(b, u.__s))),
              (p = u.props),
              (f = u.state),
              (u.__v = t),
              h)
            )
              _ &&
                null == S.getDerivedStateFromProps &&
                null != u.componentWillMount &&
                u.componentWillMount(),
                _ && null != u.componentDidMount && u.__h.push(u.componentDidMount);
            else {
              if (
                (_ &&
                  null == S.getDerivedStateFromProps &&
                  b !== p &&
                  null != u.componentWillReceiveProps &&
                  u.componentWillReceiveProps(b, w),
                (!u.__e &&
                  null != u.shouldComponentUpdate &&
                  !1 === u.shouldComponentUpdate(b, u.__s, w)) ||
                  t.__v == n.__v)
              ) {
                for (
                  t.__v != n.__v && ((u.props = b), (u.state = u.__s), (u.__d = !1)),
                    t.__e = n.__e,
                    t.__k = n.__k,
                    t.__k.some(function (e) {
                      e && (e.__ = t);
                    }),
                    v = 0;
                  v < u._sb.length;
                  v++
                )
                  u.__h.push(u._sb[v]);
                (u._sb = []), u.__h.length && a.push(u);
                break e;
              }
              null != u.componentWillUpdate && u.componentWillUpdate(b, u.__s, w),
                _ &&
                  null != u.componentDidUpdate &&
                  u.__h.push(function () {
                    u.componentDidUpdate(p, f, g);
                  });
            }
            if (
              ((u.context = w), (u.props = b), (u.__P = e), (u.__e = !1), (k = eR.__r), (x = 0), _)
            ) {
              for (
                u.state = u.__s,
                  u.__d = !1,
                  k && k(t),
                  d = u.render(u.props, u.state, u.context),
                  I = 0;
                I < u._sb.length;
                I++
              )
                u.__h.push(u._sb[I]);
              u._sb = [];
            } else
              do
                (u.__d = !1),
                  k && k(t),
                  (d = u.render(u.props, u.state, u.context)),
                  (u.state = u.__s);
              while (u.__d && ++x < 25);
            (u.state = u.__s),
              null != u.getChildContext && (i = eY(eY({}, i), u.getChildContext())),
              _ && !h && null != u.getSnapshotBeforeUpdate && (g = u.getSnapshotBeforeUpdate(p, f)),
              (E = d),
              null != d &&
                d.type === eX &&
                null == d.key &&
                (E = (function e(t) {
                  return 'object' != typeof t || null == t || (t.__b && t.__b > 0)
                    ? t
                    : eJ(t)
                      ? t.map(e)
                      : eY({}, t);
                })(d.props.children)),
              (o = e4(e, eJ(E) ? E : [E], t, n, i, r, s, a, o, c, l)),
              (u.base = t.__e),
              (t.__u &= -161),
              u.__h.length && a.push(u),
              m && (u.__E = u.__ = null);
          } catch (e) {
            if (((t.__v = null), c || null != s)) {
              if (e.then) {
                for (t.__u |= c ? 160 : 128; o && 8 == o.nodeType && o.nextSibling; )
                  o = o.nextSibling;
                (s[s.indexOf(o)] = null), (t.__e = o);
              } else for (C = s.length; C--; ) eV(s[C]);
            } else (t.__e = n.__e), (t.__k = n.__k);
            eR.__e(e, t, n);
          }
        else
          null == s && t.__v == n.__v
            ? ((t.__k = n.__k), (t.__e = n.__e))
            : (o = t.__e =
                (function (e, t, n, i, r, s, a, o, c) {
                  var l,
                    d,
                    u,
                    h,
                    p,
                    f,
                    g,
                    m = n.props,
                    b = t.props,
                    _ = t.type;
                  if (
                    ('svg' == _
                      ? (r = 'http://www.w3.org/2000/svg')
                      : 'math' == _
                        ? (r = 'http://www.w3.org/1998/Math/MathML')
                        : r || (r = 'http://www.w3.org/1999/xhtml'),
                    null != s)
                  ) {
                    for (l = 0; l < s.length; l++)
                      if (
                        (p = s[l]) &&
                        'setAttribute' in p == !!_ &&
                        (_ ? p.localName == _ : 3 == p.nodeType)
                      ) {
                        (e = p), (s[l] = null);
                        break;
                      }
                  }
                  if (null == e) {
                    if (null == _) return document.createTextNode(b);
                    (e = document.createElementNS(r, _, b.is && b)),
                      o && (eR.__m && eR.__m(t, s), (o = !1)),
                      (s = null);
                  }
                  if (null == _) m === b || (o && e.data == b) || (e.data = b);
                  else {
                    if (((s = s && eD.call(e.childNodes)), (m = n.props || eH), !o && null != s))
                      for (m = {}, l = 0; l < e.attributes.length; l++)
                        m[(p = e.attributes[l]).name] = p.value;
                    for (l in m)
                      if (((p = m[l]), 'children' == l));
                      else if ('dangerouslySetInnerHTML' == l) u = p;
                      else if (!(l in b)) {
                        if (
                          ('value' == l && 'defaultValue' in b) ||
                          ('checked' == l && 'defaultChecked' in b)
                        )
                          continue;
                        e8(e, l, null, p, r);
                      }
                    for (l in b)
                      (p = b[l]),
                        'children' == l
                          ? (h = p)
                          : 'dangerouslySetInnerHTML' == l
                            ? (d = p)
                            : 'value' == l
                              ? (f = p)
                              : 'checked' == l
                                ? (g = p)
                                : (o && 'function' != typeof p) ||
                                  m[l] === p ||
                                  e8(e, l, p, m[l], r);
                    if (d)
                      o ||
                        (u && (d.__html == u.__html || d.__html == e.innerHTML)) ||
                        (e.innerHTML = d.__html),
                        (t.__k = []);
                    else if (
                      (u && (e.innerHTML = ''),
                      e4(
                        'template' == t.type ? e.content : e,
                        eJ(h) ? h : [h],
                        t,
                        n,
                        i,
                        'foreignObject' == _ ? 'http://www.w3.org/1999/xhtml' : r,
                        s,
                        a,
                        s ? s[0] : n.__k && e2(n, 0),
                        o,
                        c
                      ),
                      null != s)
                    )
                      for (l = s.length; l--; ) eV(s[l]);
                    o ||
                      ((l = 'value'),
                      'progress' == _ && null == f
                        ? e.removeAttribute('value')
                        : null == f ||
                          (f === e[l] && ('progress' != _ || f) && ('option' != _ || f == m[l])) ||
                          e8(e, l, f, m[l], r),
                      (l = 'checked'),
                      null != g && g != e[l] && e8(e, l, g, m[l], r));
                  }
                  return e;
                })(n.__e, t, n, i, r, s, a, c, l));
        return (d = eR.diffed) && d(t), 128 & t.__u ? void 0 : o;
      }
      function e9(e, t, n) {
        for (var i = 0; i < n.length; i++) te(n[i], n[++i], n[++i]);
        eR.__c && eR.__c(t, e),
          e.some(function (t) {
            try {
              (e = t.__h),
                (t.__h = []),
                e.some(function (e) {
                  e.call(t);
                });
            } catch (e) {
              eR.__e(e, t.__v);
            }
          });
      }
      function te(e, t, n) {
        try {
          if ('function' == typeof e) {
            var i = 'function' == typeof e.__u;
            i && e.__u(), (i && null == t) || (e.__u = e(t));
          } else e.current = t;
        } catch (e) {
          eR.__e(e, n);
        }
      }
      function tt(e, t, n) {
        return this.constructor(e, n);
      }
      function tn(e, t, n) {
        var i, r, s, a;
        t == document && (t = document.documentElement),
          eR.__ && eR.__(e, t),
          (r = (i = 'function' == typeof n) ? null : (n && n.__k) || t.__k),
          (s = []),
          (a = []),
          e6(
            t,
            (e = ((!i && n) || t).__k = eQ(eX, null, [e])),
            r || eH,
            eH,
            t.namespaceURI,
            !i && n ? [n] : r ? null : t.firstChild ? eD.call(t.childNodes) : null,
            s,
            !i && n ? n : r ? r.__e : t.firstChild,
            i,
            a
          ),
          e9(s, e, a);
      }
      (eD = eG.slice),
        (eR = {
          __e: function (e, t, n, i) {
            for (var r, s, a; (t = t.__); )
              if ((r = t.__c) && !r.__)
                try {
                  if (
                    ((s = r.constructor) &&
                      null != s.getDerivedStateFromError &&
                      (r.setState(s.getDerivedStateFromError(e)), (a = r.__d)),
                    null != r.componentDidCatch && (r.componentDidCatch(e, i || {}), (a = r.__d)),
                    a)
                  )
                    return (r.__E = r);
                } catch (t) {
                  e = t;
                }
            throw e;
          },
        }),
        (eT = 0),
        (e0.prototype.setState = function (e, t) {
          var n;
          (n =
            null != this.__s && this.__s != this.state
              ? this.__s
              : (this.__s = eY({}, this.state))),
            'function' == typeof e && (e = e(eY({}, n), this.props)),
            e && eY(n, e),
            null != e && this.__v && (t && this._sb.push(t), e1(this));
        }),
        (e0.prototype.forceUpdate = function (e) {
          this.__v && ((this.__e = !0), e && this.__h.push(e), e1(this));
        }),
        (e0.prototype.render = eX),
        (ej = []),
        (eO =
          'function' == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (eW = function (e, t) {
          return e.__v.__b - t.__v.__b;
        }),
        (e3.__r = 0),
        (eq = /(PointerCapture)$|Capture$/i),
        (ez = 0),
        (eK = e7(!1)),
        (eB = e7(!0));
      var ti,
        tr,
        ts,
        ta,
        to = 0,
        tc = [],
        tl = eR,
        td = tl.__b,
        tu = tl.__r,
        th = tl.diffed,
        tp = tl.__c,
        tf = tl.unmount,
        tg = tl.__;
      function tm(e, t) {
        tl.__h && tl.__h(tr, e, to || t), (to = 0);
        var n = tr.__H || (tr.__H = { __: [], __h: [] });
        return e >= n.__.length && n.__.push({}), n.__[e];
      }
      function tb(e, t, n) {
        var i = tm(ti++, 2);
        if (
          ((i.t = e),
          !i.__c &&
            ((i.__ = [
              n ? n(t) : tk(void 0, t),
              function (e) {
                var t = i.__N ? i.__N[0] : i.__[0],
                  n = i.t(t, e);
                t !== n && ((i.__N = [n, i.__[1]]), i.__c.setState({}));
              },
            ]),
            (i.__c = tr),
            !tr.__f))
        ) {
          var r = function (e, t, n) {
            if (!i.__c.__H) return !0;
            var r = i.__c.__H.__.filter(function (e) {
              return !!e.__c;
            });
            if (
              r.every(function (e) {
                return !e.__N;
              })
            )
              return !s || s.call(this, e, t, n);
            var a = i.__c.props !== e;
            return (
              r.forEach(function (e) {
                if (e.__N) {
                  var t = e.__[0];
                  (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (a = !0);
                }
              }),
              (s && s.call(this, e, t, n)) || a
            );
          };
          tr.__f = !0;
          var s = tr.shouldComponentUpdate,
            a = tr.componentWillUpdate;
          (tr.componentWillUpdate = function (e, t, n) {
            if (this.__e) {
              var i = s;
              (s = void 0), r(e, t, n), (s = i);
            }
            a && a.call(this, e, t, n);
          }),
            (tr.shouldComponentUpdate = r);
        }
        return i.__N || i.__;
      }
      function t_() {
        for (var e; (e = tc.shift()); )
          if (e.__P && e.__H)
            try {
              e.__H.__h.forEach(tw), e.__H.__h.forEach(tv), (e.__H.__h = []);
            } catch (t) {
              (e.__H.__h = []), tl.__e(t, e.__v);
            }
      }
      (tl.__b = function (e) {
        (tr = null), td && td(e);
      }),
        (tl.__ = function (e, t) {
          e && t.__k && t.__k.__m && (e.__m = t.__k.__m), tg && tg(e, t);
        }),
        (tl.__r = function (e) {
          tu && tu(e), (ti = 0);
          var t = (tr = e.__c).__H;
          t &&
            (ts === tr
              ? ((t.__h = []),
                (tr.__h = []),
                t.__.forEach(function (e) {
                  e.__N && (e.__ = e.__N), (e.u = e.__N = void 0);
                }))
              : (t.__h.forEach(tw), t.__h.forEach(tv), (t.__h = []), (ti = 0))),
            (ts = tr);
        }),
        (tl.diffed = function (e) {
          th && th(e);
          var t = e.__c;
          t &&
            t.__H &&
            (t.__H.__h.length &&
              ((1 !== tc.push(t) && ta === tl.requestAnimationFrame) ||
                (
                  (ta = tl.requestAnimationFrame) ||
                  function (e) {
                    var t,
                      n = function () {
                        clearTimeout(i), ty && cancelAnimationFrame(t), setTimeout(e);
                      },
                      i = setTimeout(n, 100);
                    ty && (t = requestAnimationFrame(n));
                  }
                )(t_)),
            t.__H.__.forEach(function (e) {
              e.u && (e.__H = e.u), (e.u = void 0);
            })),
            (ts = tr = null);
        }),
        (tl.__c = function (e, t) {
          t.some(function (e) {
            try {
              e.__h.forEach(tw),
                (e.__h = e.__h.filter(function (e) {
                  return !e.__ || tv(e);
                }));
            } catch (n) {
              t.some(function (e) {
                e.__h && (e.__h = []);
              }),
                (t = []),
                tl.__e(n, e.__v);
            }
          }),
            tp && tp(e, t);
        }),
        (tl.unmount = function (e) {
          tf && tf(e);
          var t,
            n = e.__c;
          n &&
            n.__H &&
            (n.__H.__.forEach(function (e) {
              try {
                tw(e);
              } catch (e) {
                t = e;
              }
            }),
            (n.__H = void 0),
            t && tl.__e(t, n.__v));
        });
      var ty = 'function' == typeof requestAnimationFrame;
      function tw(e) {
        var t = tr,
          n = e.__c;
        'function' == typeof n && ((e.__c = void 0), n()), (tr = t);
      }
      function tv(e) {
        var t = tr;
        (e.__c = e.__()), (tr = t);
      }
      function tk(e, t) {
        return 'function' == typeof t ? t(e) : t;
      }
      class tx {
        constructor() {
          (this.items = new Map()),
            (this.nextItemKey = 0),
            (this.root = null),
            (this.darkMode = eA());
        }
        attach(e) {
          (this.root = document.createElement('div')),
            (this.root.className = '-cbwsdk-snackbar-root'),
            e.appendChild(this.root),
            this.render();
        }
        presentItem(e) {
          let t = this.nextItemKey++;
          return (
            this.items.set(t, e),
            this.render(),
            () => {
              this.items.delete(t), this.render();
            }
          );
        }
        clear() {
          this.items.clear(), this.render();
        }
        render() {
          this.root &&
            tn(
              eQ(
                'div',
                null,
                eQ(
                  tI,
                  { darkMode: this.darkMode },
                  Array.from(this.items.entries()).map(([e, t]) =>
                    eQ(tE, Object.assign({}, t, { key: e }))
                  )
                )
              ),
              this.root
            );
        }
      }
      let tI = (e) =>
          eQ(
            'div',
            { class: (0, eF.clsx)('-cbwsdk-snackbar-container') },
            eQ(
              'style',
              null,
              '.-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}'
            ),
            eQ('div', { class: '-cbwsdk-snackbar' }, e.children)
          ),
        tE = ({ autoExpand: e, message: t, menuItems: n }) => {
          var i, r, s, a, o;
          let [c, l] = ((to = 1), tb(tk, !0)),
            [d, u] = ((to = 1), tb(tk, null != e && e));
          return (
            (i = () => {
              let e = [
                window.setTimeout(() => {
                  l(!1);
                }, 1),
                window.setTimeout(() => {
                  u(!0);
                }, 1e4),
              ];
              return () => {
                e.forEach(window.clearTimeout);
              };
            }),
            (s = tm(ti++, 3)),
            !tl.__s &&
              ((a = s.__H),
              (o = void 0),
              !a ||
                a.length !== o.length ||
                o.some(function (e, t) {
                  return e !== a[t];
                })) &&
              ((s.__ = i), (s.u = r), tr.__H.__h.push(s)),
            eQ(
              'div',
              {
                class: (0, eF.clsx)(
                  '-cbwsdk-snackbar-instance',
                  c && '-cbwsdk-snackbar-instance-hidden',
                  d && '-cbwsdk-snackbar-instance-expanded'
                ),
              },
              eQ(
                'div',
                {
                  class: '-cbwsdk-snackbar-instance-header',
                  onClick: () => {
                    u(!d);
                  },
                },
                eQ('img', {
                  src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+',
                  class: '-cbwsdk-snackbar-instance-header-cblogo',
                }),
                ' ',
                eQ('div', { class: '-cbwsdk-snackbar-instance-header-message' }, t),
                eQ(
                  'div',
                  { class: '-gear-container' },
                  !d &&
                    eQ(
                      'svg',
                      {
                        width: '24',
                        height: '24',
                        viewBox: '0 0 24 24',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                      },
                      eQ('circle', { cx: '12', cy: '12', r: '12', fill: '#F5F7F8' })
                    ),
                  eQ('img', {
                    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=',
                    class: '-gear-icon',
                    title: 'Expand',
                  })
                )
              ),
              n &&
                n.length > 0 &&
                eQ(
                  'div',
                  { class: '-cbwsdk-snackbar-instance-menu' },
                  n.map((e, t) =>
                    eQ(
                      'div',
                      {
                        class: (0, eF.clsx)(
                          '-cbwsdk-snackbar-instance-menu-item',
                          e.isRed && '-cbwsdk-snackbar-instance-menu-item-is-red'
                        ),
                        onClick: e.onClick,
                        key: t,
                      },
                      eQ(
                        'svg',
                        {
                          width: e.svgWidth,
                          height: e.svgHeight,
                          viewBox: '0 0 10 11',
                          fill: 'none',
                          xmlns: 'http://www.w3.org/2000/svg',
                        },
                        eQ('path', {
                          'fill-rule': e.defaultFillRule,
                          'clip-rule': e.defaultClipRule,
                          d: e.path,
                          fill: '#AAAAAA',
                        })
                      ),
                      eQ(
                        'span',
                        {
                          class: (0, eF.clsx)(
                            '-cbwsdk-snackbar-instance-menu-item-info',
                            e.isRed && '-cbwsdk-snackbar-instance-menu-item-info-is-red'
                          ),
                        },
                        e.info
                      )
                    )
                  )
                )
            )
          );
        };
      class tC {
        constructor() {
          (this.attached = !1), (this.snackbar = new tx());
        }
        attach() {
          if (this.attached) throw Error('Coinbase Wallet SDK UI is already attached');
          let e = document.documentElement,
            t = document.createElement('div');
          (t.className = '-cbwsdk-css-reset'),
            e.appendChild(t),
            this.snackbar.attach(t),
            (this.attached = !0),
            eP();
        }
        showConnecting(e) {
          let t;
          return (
            (t = e.isUnlinkedErrorState
              ? {
                  autoExpand: !0,
                  message: 'Connection lost',
                  menuItems: [
                    {
                      isRed: !1,
                      info: 'Reset connection',
                      svgWidth: '10',
                      svgHeight: '11',
                      path: 'M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z',
                      defaultFillRule: 'evenodd',
                      defaultClipRule: 'evenodd',
                      onClick: e.onResetConnection,
                    },
                  ],
                }
              : {
                  message: 'Confirm on phone',
                  menuItems: [
                    {
                      isRed: !0,
                      info: 'Cancel transaction',
                      svgWidth: '11',
                      svgHeight: '11',
                      path: 'M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z',
                      defaultFillRule: 'inherit',
                      defaultClipRule: 'inherit',
                      onClick: e.onCancel,
                    },
                    {
                      isRed: !1,
                      info: 'Reset connection',
                      svgWidth: '10',
                      svgHeight: '11',
                      path: 'M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z',
                      defaultFillRule: 'evenodd',
                      defaultClipRule: 'evenodd',
                      onClick: e.onResetConnection,
                    },
                  ],
                }),
            this.snackbar.presentItem(t)
          );
        }
      }
      class tS {
        constructor() {
          (this.root = null), (this.darkMode = eA());
        }
        attach() {
          let e = document.documentElement;
          (this.root = document.createElement('div')),
            (this.root.className = '-cbwsdk-css-reset'),
            e.appendChild(this.root),
            eP();
        }
        present(e) {
          this.render(e);
        }
        clear() {
          this.render(null);
        }
        render(e) {
          this.root &&
            (tn(null, this.root),
            e &&
              tn(
                eQ(
                  tM,
                  Object.assign({}, e, {
                    onDismiss: () => {
                      this.clear();
                    },
                    darkMode: this.darkMode,
                  })
                ),
                this.root
              ));
        }
      }
      let tM = ({ title: e, buttonText: t, darkMode: n, onButtonClick: i, onDismiss: r }) =>
          eQ(
            tI,
            { darkMode: n },
            eQ(
              'div',
              { class: '-cbwsdk-redirect-dialog' },
              eQ(
                'style',
                null,
                '.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}'
              ),
              eQ('div', { class: '-cbwsdk-redirect-dialog-backdrop', onClick: r }),
              eQ(
                'div',
                { class: (0, eF.clsx)('-cbwsdk-redirect-dialog-box', n ? 'dark' : 'light') },
                eQ('p', null, e),
                eQ('button', { onClick: i }, t)
              )
            )
          ),
        tA = 'https://www.walletlink.org';
      class tP {
        constructor() {
          (this.attached = !1), (this.redirectDialog = new tS());
        }
        attach() {
          if (this.attached) throw Error('Coinbase Wallet SDK UI is already attached');
          this.redirectDialog.attach(), (this.attached = !0);
        }
        redirectToCoinbaseWallet(e) {
          let t = new URL('https://go.cb-w.com/walletlink');
          t.searchParams.append(
            'redirect_url',
            (function () {
              try {
                if (
                  (function () {
                    try {
                      return null !== window.frameElement;
                    } catch (e) {
                      return !1;
                    }
                  })() &&
                  window.top
                )
                  return window.top.location;
                return window.location;
              } catch (e) {
                return window.location;
              }
            })().href
          ),
            e && t.searchParams.append('wl_url', e);
          let n = document.createElement('a');
          (n.target = 'cbw-opener'), (n.href = t.href), (n.rel = 'noreferrer noopener'), n.click();
        }
        openCoinbaseWalletDeeplink(e) {
          this.redirectDialog.present({
            title: 'Redirecting to Coinbase Wallet...',
            buttonText: 'Open',
            onButtonClick: () => {
              this.redirectToCoinbaseWallet(e);
            },
          }),
            setTimeout(() => {
              this.redirectToCoinbaseWallet(e);
            }, 99);
        }
        showConnecting(e) {
          return () => {
            this.redirectDialog.clear();
          };
        }
      }
      class tL {
        constructor(e) {
          var t;
          (this.chainCallbackParams = { chainId: '', jsonRpcUrl: '' }),
            (this.isMobileWeb =
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                null === (t = null == window ? void 0 : window.navigator) || void 0 === t
                  ? void 0
                  : t.userAgent
              )),
            (this.linkedUpdated = (e) => {
              this.isLinked = e;
              let t = this.storage.getItem(el);
              if ((e && (this._session.linked = e), (this.isUnlinkedErrorState = !1), t)) {
                let n = t.split(' '),
                  i = 'true' === this.storage.getItem('IsStandaloneSigning');
                '' === n[0] || e || !this._session.linked || i || (this.isUnlinkedErrorState = !0);
              }
            }),
            (this.metadataUpdated = (e, t) => {
              this.storage.setItem(e, t);
            }),
            (this.chainUpdated = (e, t) => {
              (this.chainCallbackParams.chainId !== e ||
                this.chainCallbackParams.jsonRpcUrl !== t) &&
                ((this.chainCallbackParams = { chainId: e, jsonRpcUrl: t }),
                this.chainCallback && this.chainCallback(t, Number.parseInt(e, 10)));
            }),
            (this.accountUpdated = (e) => {
              this.accountsCallback && this.accountsCallback([e]),
                tL.accountRequestCallbackIds.size > 0 &&
                  (Array.from(tL.accountRequestCallbackIds.values()).forEach((t) => {
                    this.invokeCallback(t, { method: 'requestEthereumAccounts', result: [e] });
                  }),
                  tL.accountRequestCallbackIds.clear());
            }),
            (this.resetAndReload = this.resetAndReload.bind(this)),
            (this.linkAPIUrl = e.linkAPIUrl),
            (this.storage = e.storage),
            (this.metadata = e.metadata),
            (this.accountsCallback = e.accountsCallback),
            (this.chainCallback = e.chainCallback);
          let { session: n, ui: i, connection: r } = this.subscribe();
          (this._session = n),
            (this.connection = r),
            (this.relayEventManager = new eg()),
            (this.ui = i),
            this.ui.attach();
        }
        subscribe() {
          let e = eM.load(this.storage) || eM.create(this.storage),
            { linkAPIUrl: t } = this,
            n = new ef({ session: e, linkAPIUrl: t, listener: this }),
            i = this.isMobileWeb ? new tP() : new tC();
          return n.connect(), { session: e, ui: i, connection: n };
        }
        resetAndReload() {
          this.connection
            .destroy()
            .then(() => {
              let e = eM.load(this.storage);
              (null == e ? void 0 : e.id) === this._session.id && r.clearAll(),
                document.location.reload();
            })
            .catch((e) => {});
        }
        signEthereumTransaction(e) {
          return this.sendRequest({
            method: 'signEthereumTransaction',
            params: {
              fromAddress: e.fromAddress,
              toAddress: e.toAddress,
              weiValue: P(e.weiValue),
              data: M(e.data, !0),
              nonce: e.nonce,
              gasPriceInWei: e.gasPriceInWei ? P(e.gasPriceInWei) : null,
              maxFeePerGas: e.gasPriceInWei ? P(e.gasPriceInWei) : null,
              maxPriorityFeePerGas: e.gasPriceInWei ? P(e.gasPriceInWei) : null,
              gasLimit: e.gasLimit ? P(e.gasLimit) : null,
              chainId: e.chainId,
              shouldSubmit: !1,
            },
          });
        }
        signAndSubmitEthereumTransaction(e) {
          return this.sendRequest({
            method: 'signEthereumTransaction',
            params: {
              fromAddress: e.fromAddress,
              toAddress: e.toAddress,
              weiValue: P(e.weiValue),
              data: M(e.data, !0),
              nonce: e.nonce,
              gasPriceInWei: e.gasPriceInWei ? P(e.gasPriceInWei) : null,
              maxFeePerGas: e.maxFeePerGas ? P(e.maxFeePerGas) : null,
              maxPriorityFeePerGas: e.maxPriorityFeePerGas ? P(e.maxPriorityFeePerGas) : null,
              gasLimit: e.gasLimit ? P(e.gasLimit) : null,
              chainId: e.chainId,
              shouldSubmit: !0,
            },
          });
        }
        submitEthereumTransaction(e, t) {
          return this.sendRequest({
            method: 'submitEthereumTransaction',
            params: { signedTransaction: M(e, !0), chainId: t },
          });
        }
        getWalletLinkSession() {
          return this._session;
        }
        sendRequest(e) {
          let t = null,
            n = E(8),
            i = (i) => {
              this.publishWeb3RequestCanceledEvent(n),
                this.handleErrorResponse(n, e.method, i),
                null == t || t();
            };
          return new Promise((r, s) => {
            (t = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: i,
              onResetConnection: this.resetAndReload,
            })),
              this.relayEventManager.callbacks.set(n, (e) => {
                if ((null == t || t(), ed(e))) return s(Error(e.errorMessage));
                r(e);
              }),
              this.publishWeb3RequestEvent(n, e);
          });
        }
        publishWeb3RequestEvent(e, t) {
          let n = { type: 'WEB3_REQUEST', id: e, request: t };
          this.publishEvent('Web3Request', n, !0)
            .then((e) => {})
            .catch((e) => {
              this.handleWeb3ResponseMessage(n.id, { method: t.method, errorMessage: e.message });
            }),
            this.isMobileWeb && this.openCoinbaseWalletDeeplink(t.method);
        }
        openCoinbaseWalletDeeplink(e) {
          if (this.ui instanceof tP)
            switch (e) {
              case 'requestEthereumAccounts':
              case 'switchEthereumChain':
                return;
              default:
                window.addEventListener(
                  'blur',
                  () => {
                    window.addEventListener(
                      'focus',
                      () => {
                        this.connection.checkUnseenEvents();
                      },
                      { once: !0 }
                    );
                  },
                  { once: !0 }
                ),
                  this.ui.openCoinbaseWalletDeeplink();
            }
        }
        publishWeb3RequestCanceledEvent(e) {
          this.publishEvent(
            'Web3RequestCanceled',
            { type: 'WEB3_REQUEST_CANCELED', id: e },
            !1
          ).then();
        }
        publishEvent(e, t, n) {
          return this.connection.publishEvent(e, t, n);
        }
        handleWeb3ResponseMessage(e, t) {
          if ('requestEthereumAccounts' === t.method) {
            tL.accountRequestCallbackIds.forEach((e) => this.invokeCallback(e, t)),
              tL.accountRequestCallbackIds.clear();
            return;
          }
          this.invokeCallback(e, t);
        }
        handleErrorResponse(e, t, n) {
          var i;
          let r =
            null !== (i = null == n ? void 0 : n.message) && void 0 !== i
              ? i
              : 'Unspecified error message.';
          this.handleWeb3ResponseMessage(e, { method: t, errorMessage: r });
        }
        invokeCallback(e, t) {
          let n = this.relayEventManager.callbacks.get(e);
          n && (n(t), this.relayEventManager.callbacks.delete(e));
        }
        requestEthereumAccounts() {
          let { appName: e, appLogoUrl: t } = this.metadata,
            n = { method: 'requestEthereumAccounts', params: { appName: e, appLogoUrl: t } },
            i = E(8);
          return new Promise((e, t) => {
            this.relayEventManager.callbacks.set(i, (n) => {
              if (ed(n)) return t(Error(n.errorMessage));
              e(n);
            }),
              tL.accountRequestCallbackIds.add(i),
              this.publishWeb3RequestEvent(i, n);
          });
        }
        watchAsset(e, t, n, i, r, s) {
          let a = {
              method: 'watchAsset',
              params: {
                type: e,
                options: { address: t, symbol: n, decimals: i, image: r },
                chainId: s,
              },
            },
            o = null,
            c = E(8);
          return (
            (o = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(c),
                  this.handleErrorResponse(c, a.method, e),
                  null == o || o();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(c, (n) => {
                if ((null == o || o(), ed(n))) return t(Error(n.errorMessage));
                e(n);
              }),
                this.publishWeb3RequestEvent(c, a);
            })
          );
        }
        addEthereumChain(e, t, n, i, r, s) {
          let a = {
              method: 'addEthereumChain',
              params: {
                chainId: e,
                rpcUrls: t,
                blockExplorerUrls: i,
                chainName: r,
                iconUrls: n,
                nativeCurrency: s,
              },
            },
            o = null,
            c = E(8);
          return (
            (o = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(c),
                  this.handleErrorResponse(c, a.method, e),
                  null == o || o();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(c, (n) => {
                if ((null == o || o(), ed(n))) return t(Error(n.errorMessage));
                e(n);
              }),
                this.publishWeb3RequestEvent(c, a);
            })
          );
        }
        switchEthereumChain(e, t) {
          let n = {
              method: 'switchEthereumChain',
              params: Object.assign({ chainId: e }, { address: t }),
            },
            i = null,
            r = E(8);
          return (
            (i = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(r),
                  this.handleErrorResponse(r, n.method, e),
                  null == i || i();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(r, (n) =>
                (null == i || i(), ed(n) && n.errorCode)
                  ? t(
                      h.provider.custom({
                        code: n.errorCode,
                        message:
                          'Unrecognized chain ID. Try adding the chain using addEthereumChain first.',
                      })
                    )
                  : ed(n)
                    ? t(Error(n.errorMessage))
                    : void e(n)
              ),
                this.publishWeb3RequestEvent(r, n);
            })
          );
        }
      }
      tL.accountRequestCallbackIds = new Set();
      var tN = n(87150).Buffer;
      let tD = 'DefaultChainId',
        tR = 'DefaultJsonRpcUrl';
      class tT {
        constructor(e) {
          (this._relay = null),
            (this._addresses = []),
            (this.metadata = e.metadata),
            (this._storage = new r('walletlink', tA)),
            (this.callback = e.callback || null);
          let t = this._storage.getItem(el);
          if (t) {
            let e = t.split(' ');
            '' !== e[0] && (this._addresses = e.map((e) => U(e)));
          }
          this.initializeRelay();
        }
        getSession() {
          let { id: e, secret: t } = this.initializeRelay().getWalletLinkSession();
          return { id: e, secret: t };
        }
        async handshake() {
          await this._eth_requestAccounts();
        }
        get selectedAddress() {
          return this._addresses[0] || void 0;
        }
        get jsonRpcUrl() {
          var e;
          return null !== (e = this._storage.getItem(tR)) && void 0 !== e ? e : void 0;
        }
        set jsonRpcUrl(e) {
          this._storage.setItem(tR, e);
        }
        updateProviderInfo(e, t) {
          var n;
          this.jsonRpcUrl = e;
          let i = this.getChainId();
          this._storage.setItem(tD, t.toString(10)),
            W(t) !== i &&
              (null === (n = this.callback) || void 0 === n || n.call(this, 'chainChanged', L(t)));
        }
        async watchAsset(e) {
          let t = Array.isArray(e) ? e[0] : e;
          if (!t.type) throw h.rpc.invalidParams('Type is required');
          if ((null == t ? void 0 : t.type) !== 'ERC20')
            throw h.rpc.invalidParams(`Asset of type '${t.type}' is not supported`);
          if (!(null == t ? void 0 : t.options)) throw h.rpc.invalidParams('Options are required');
          if (!(null == t ? void 0 : t.options.address))
            throw h.rpc.invalidParams('Address is required');
          let n = this.getChainId(),
            { address: i, symbol: r, image: s, decimals: a } = t.options,
            o = this.initializeRelay(),
            c = await o.watchAsset(t.type, i, r, a, s, null == n ? void 0 : n.toString());
          return !ed(c) && !!c.result;
        }
        async addEthereumChain(e) {
          var t, n;
          let i = e[0];
          if ((null === (t = i.rpcUrls) || void 0 === t ? void 0 : t.length) === 0)
            throw h.rpc.invalidParams('please pass in at least 1 rpcUrl');
          if (!i.chainName || '' === i.chainName.trim())
            throw h.rpc.invalidParams('chainName is a required field');
          if (!i.nativeCurrency) throw h.rpc.invalidParams('nativeCurrency is a required field');
          let r = Number.parseInt(i.chainId, 16);
          if (r === this.getChainId()) return !1;
          let s = this.initializeRelay(),
            {
              rpcUrls: a = [],
              blockExplorerUrls: o = [],
              chainName: c,
              iconUrls: l = [],
              nativeCurrency: d,
            } = i,
            u = await s.addEthereumChain(r.toString(), a, l, o, c, d);
          if (ed(u)) return !1;
          if ((null === (n = u.result) || void 0 === n ? void 0 : n.isApproved) === !0)
            return this.updateProviderInfo(a[0], r), null;
          throw h.rpc.internal('unable to add ethereum chain');
        }
        async switchEthereumChain(e) {
          let t = Number.parseInt(e[0].chainId, 16),
            n = this.initializeRelay(),
            i = await n.switchEthereumChain(t.toString(10), this.selectedAddress || void 0);
          if (ed(i)) throw i;
          let r = i.result;
          return r.isApproved && r.rpcUrl.length > 0 && this.updateProviderInfo(r.rpcUrl, t), null;
        }
        async cleanup() {
          (this.callback = null),
            this._relay && this._relay.resetAndReload(),
            this._storage.clear();
        }
        _setAddresses(e, t) {
          var n;
          if (!Array.isArray(e)) throw Error('addresses is not an array');
          let i = e.map((e) => U(e));
          JSON.stringify(i) !== JSON.stringify(this._addresses) &&
            ((this._addresses = i),
            null === (n = this.callback) || void 0 === n || n.call(this, 'accountsChanged', i),
            this._storage.setItem(el, i.join(' ')));
        }
        async request(e) {
          let t = e.params || [];
          switch (e.method) {
            case 'eth_accounts':
              return [...this._addresses];
            case 'eth_coinbase':
              return this.selectedAddress || null;
            case 'net_version':
              return this.getChainId().toString(10);
            case 'eth_chainId':
              return L(this.getChainId());
            case 'eth_requestAccounts':
              return this._eth_requestAccounts();
            case 'eth_ecRecover':
            case 'personal_ecRecover':
              return this.ecRecover(e);
            case 'personal_sign':
              return this.personalSign(e);
            case 'eth_signTransaction':
              return this._eth_signTransaction(t);
            case 'eth_sendRawTransaction':
              return this._eth_sendRawTransaction(t);
            case 'eth_sendTransaction':
              return this._eth_sendTransaction(t);
            case 'eth_signTypedData_v1':
            case 'eth_signTypedData_v3':
            case 'eth_signTypedData_v4':
            case 'eth_signTypedData':
              return this.signTypedData(e);
            case 'wallet_addEthereumChain':
              return this.addEthereumChain(t);
            case 'wallet_switchEthereumChain':
              return this.switchEthereumChain(t);
            case 'wallet_watchAsset':
              return this.watchAsset(t);
            default:
              if (!this.jsonRpcUrl) throw h.rpc.internal('No RPC URL set for chain');
              return en(e, this.jsonRpcUrl);
          }
        }
        _ensureKnownAddress(e) {
          let t = U(e);
          if (!this._addresses.map((e) => U(e)).includes(t))
            throw Error('Unknown Ethereum address');
        }
        _prepareTransactionParams(e) {
          let t = e.from ? U(e.from) : this.selectedAddress;
          if (!t) throw Error('Ethereum address is unavailable');
          this._ensureKnownAddress(t);
          let n = e.to ? U(e.to) : null,
            i = null != e.value ? q(e.value) : BigInt(0),
            r = e.data ? O(e.data) : tN.alloc(0),
            s = null != e.nonce ? W(e.nonce) : null,
            a = null != e.gasPrice ? q(e.gasPrice) : null,
            o = null != e.maxFeePerGas ? q(e.maxFeePerGas) : null;
          return {
            fromAddress: t,
            toAddress: n,
            weiValue: i,
            data: r,
            nonce: s,
            gasPriceInWei: a,
            maxFeePerGas: o,
            maxPriorityFeePerGas: null != e.maxPriorityFeePerGas ? q(e.maxPriorityFeePerGas) : null,
            gasLimit: null != e.gas ? q(e.gas) : null,
            chainId: e.chainId ? W(e.chainId) : this.getChainId(),
          };
        }
        async ecRecover(e) {
          let { method: t, params: n } = e;
          if (!Array.isArray(n)) throw h.rpc.invalidParams();
          let i = this.initializeRelay(),
            r = await i.sendRequest({
              method: 'ethereumAddressFromSignedMessage',
              params: {
                message: A(n[0]),
                signature: A(n[1]),
                addPrefix: 'personal_ecRecover' === t,
              },
            });
          if (ed(r)) throw r;
          return r.result;
        }
        getChainId() {
          var e;
          return Number.parseInt(
            null !== (e = this._storage.getItem(tD)) && void 0 !== e ? e : '1',
            10
          );
        }
        async _eth_requestAccounts() {
          var e, t;
          if (this._addresses.length > 0)
            return (
              null === (e = this.callback) ||
                void 0 === e ||
                e.call(this, 'connect', { chainId: L(this.getChainId()) }),
              this._addresses
            );
          let n = this.initializeRelay(),
            i = await n.requestEthereumAccounts();
          if (ed(i)) throw i;
          if (!i.result) throw Error('accounts received is empty');
          return (
            this._setAddresses(i.result),
            null === (t = this.callback) ||
              void 0 === t ||
              t.call(this, 'connect', { chainId: L(this.getChainId()) }),
            this._addresses
          );
        }
        async personalSign({ params: e }) {
          if (!Array.isArray(e)) throw h.rpc.invalidParams();
          let t = e[1],
            n = e[0];
          this._ensureKnownAddress(t);
          let i = this.initializeRelay(),
            r = await i.sendRequest({
              method: 'signEthereumMessage',
              params: { address: U(t), message: A(n), addPrefix: !0, typedDataJson: null },
            });
          if (ed(r)) throw r;
          return r.result;
        }
        async _eth_signTransaction(e) {
          let t = this._prepareTransactionParams(e[0] || {}),
            n = this.initializeRelay(),
            i = await n.signEthereumTransaction(t);
          if (ed(i)) throw i;
          return i.result;
        }
        async _eth_sendRawTransaction(e) {
          let t = O(e[0]),
            n = this.initializeRelay(),
            i = await n.submitEthereumTransaction(t, this.getChainId());
          if (ed(i)) throw i;
          return i.result;
        }
        async _eth_sendTransaction(e) {
          let t = this._prepareTransactionParams(e[0] || {}),
            n = this.initializeRelay(),
            i = await n.signAndSubmitEthereumTransaction(t);
          if (ed(i)) throw i;
          return i.result;
        }
        async signTypedData(e) {
          let { method: t, params: n } = e;
          if (!Array.isArray(n)) throw h.rpc.invalidParams();
          let i = n['eth_signTypedData_v1' === t ? 1 : 0],
            r = n['eth_signTypedData_v1' === t ? 0 : 1];
          this._ensureKnownAddress(i);
          let s = this.initializeRelay(),
            a = await s.sendRequest({
              method: 'signEthereumMessage',
              params: {
                address: U(i),
                message: M(
                  {
                    eth_signTypedData_v1: ec.hashForSignTypedDataLegacy,
                    eth_signTypedData_v3: ec.hashForSignTypedData_v3,
                    eth_signTypedData_v4: ec.hashForSignTypedData_v4,
                    eth_signTypedData: ec.hashForSignTypedData_v4,
                  }[t]({
                    data: (function (e) {
                      if ('string' == typeof e) return JSON.parse(e);
                      if ('object' == typeof e) return e;
                      throw h.rpc.invalidParams(`Not a JSON string or an object: ${String(e)}`);
                    })(r),
                  }),
                  !0
                ),
                typedDataJson: JSON.stringify(r, null, 2),
                addPrefix: !1,
              },
            });
          if (ed(a)) throw a;
          return a.result;
        }
        initializeRelay() {
          return (
            this._relay ||
              (this._relay = new tL({
                linkAPIUrl: tA,
                storage: this._storage,
                metadata: this.metadata,
                accountsCallback: this._setAddresses.bind(this),
                chainCallback: this.updateProviderInfo.bind(this),
              })),
            this._relay
          );
        }
      }
      let tj = 'SignerType',
        tU = new r('CBWSDK', 'SignerConfigurator');
      async function tO(e) {
        let { communicator: t, metadata: n, handshakeRequest: i, callback: r } = e;
        tW(t, n, r).catch(() => {});
        let s = {
            id: crypto.randomUUID(),
            event: 'selectSignerType',
            data: Object.assign(Object.assign({}, e.preference), { handshakeRequest: i }),
          },
          { data: a } = await t.postRequestAndWaitForResponse(s);
        return a;
      }
      async function tW(e, t, n) {
        await e.onMessage(({ event: e }) => 'WalletLinkSessionRequest' === e);
        let i = new tT({ metadata: t, callback: n });
        e.postMessage({ event: 'WalletLinkUpdate', data: { session: i.getSession() } }),
          await i.handshake(),
          e.postMessage({ event: 'WalletLinkUpdate', data: { connected: !0 } });
      }
      let tq = `Coinbase Wallet SDK requires the Cross-Origin-Opener-Policy header to not be set to 'same-origin'. This is to ensure that the SDK can communicate with the Coinbase Smart Wallet app.

Please see https://www.smartwallet.dev/guides/tips/popup-tips#cross-origin-opener-policy for more information.`,
        { checkCrossOriginOpenerPolicy: tz, getCrossOriginOpenerPolicy: tK } = {
          getCrossOriginOpenerPolicy: () => (void 0 === i ? 'undefined' : i),
          checkCrossOriginOpenerPolicy: async () => {
            if ('undefined' == typeof window) {
              i = 'non-browser-env';
              return;
            }
            try {
              let e = `${window.location.origin}${window.location.pathname}`,
                t = await fetch(e, { method: 'HEAD' });
              if (!t.ok) throw Error(`HTTP error! status: ${t.status}`);
              let n = t.headers.get('Cross-Origin-Opener-Policy');
              (i = null != n ? n : 'null'), 'same-origin' === i && console.error(tq);
            } catch (e) {
              console.error('Error checking Cross-Origin-Opener-Policy:', e.message), (i = 'error');
            }
          },
        };
      class tB {
        constructor({ url: e = 'https://keys.coinbase.com/connect', metadata: t, preference: n }) {
          (this.popup = null),
            (this.listeners = new Map()),
            (this.postMessage = async (e) => {
              (await this.waitForPopupLoaded()).postMessage(e, this.url.origin);
            }),
            (this.postRequestAndWaitForResponse = async (e) => {
              let t = this.onMessage(({ requestId: t }) => t === e.id);
              return this.postMessage(e), await t;
            }),
            (this.onMessage = async (e) =>
              new Promise((t, n) => {
                let i = (n) => {
                  if (n.origin !== this.url.origin) return;
                  let r = n.data;
                  e(r) &&
                    (t(r), window.removeEventListener('message', i), this.listeners.delete(i));
                };
                window.addEventListener('message', i), this.listeners.set(i, { reject: n });
              })),
            (this.disconnect = () => {
              var e;
              (e = this.popup) && !e.closed && e.close(),
                (this.popup = null),
                this.listeners.forEach(({ reject: e }, t) => {
                  e(h.provider.userRejectedRequest('Request rejected')),
                    window.removeEventListener('message', t);
                }),
                this.listeners.clear();
            }),
            (this.waitForPopupLoaded = async () =>
              this.popup && !this.popup.closed
                ? (this.popup.focus(), this.popup)
                : ((this.popup = (function (e) {
                    let t = (window.innerWidth - 420) / 2 + window.screenX,
                      n = (window.innerHeight - 540) / 2 + window.screenY;
                    (function (e) {
                      for (let [t, n] of Object.entries({
                        sdkName: et,
                        sdkVersion: ee,
                        origin: window.location.origin,
                        coop: tK(),
                      }))
                        e.searchParams.append(t, n.toString());
                    })(e);
                    let i = `wallet_${crypto.randomUUID()}`,
                      r = window.open(e, i, `width=420, height=540, left=${t}, top=${n}`);
                    if ((null == r || r.focus(), !r))
                      throw h.rpc.internal('Pop up window failed to open');
                    return r;
                  })(this.url)),
                  this.onMessage(({ event: e }) => 'PopupUnload' === e)
                    .then(this.disconnect)
                    .catch(() => {}),
                  this.onMessage(({ event: e }) => 'PopupLoaded' === e)
                    .then((e) => {
                      this.postMessage({
                        requestId: e.id,
                        data: {
                          version: ee,
                          metadata: this.metadata,
                          preference: this.preference,
                          location: window.location.toString(),
                        },
                      });
                    })
                    .then(() => {
                      if (!this.popup) throw h.rpc.internal();
                      return this.popup;
                    }))),
            (this.url = new URL(e)),
            (this.metadata = t),
            (this.preference = n);
        }
      }
      var tF = n(66467);
      class tH extends tF.v {}
      var tG = function (e, t) {
        var n = {};
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (n[i] = e[i]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
          for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++)
            0 > t.indexOf(i[r]) &&
              Object.prototype.propertyIsEnumerable.call(e, i[r]) &&
              (n[i[r]] = e[i[r]]);
        return n;
      };
      class t$ extends tH {
        constructor(e) {
          var { metadata: t } = e,
            n = e.preference,
            { keysUrl: i } = n,
            r = tG(n, ['keysUrl']);
          super(),
            (this.signer = null),
            (this.isCoinbaseWallet = !0),
            (this.metadata = t),
            (this.preference = r),
            (this.communicator = new tB({ url: i, metadata: t, preference: r }));
          let s = tU.getItem(tj);
          s && (this.signer = this.initSigner(s));
        }
        async request(e) {
          try {
            if (
              (!(function (e) {
                if (!e || 'object' != typeof e || Array.isArray(e))
                  throw h.rpc.invalidParams({
                    message: 'Expected a single, non-array, object argument.',
                    data: e,
                  });
                let { method: t, params: n } = e;
                if ('string' != typeof t || 0 === t.length)
                  throw h.rpc.invalidParams({
                    message: "'args.method' must be a non-empty string.",
                    data: e,
                  });
                if (void 0 !== n && !Array.isArray(n) && ('object' != typeof n || null === n))
                  throw h.rpc.invalidParams({
                    message: "'args.params' must be an object or array if provided.",
                    data: e,
                  });
                switch (t) {
                  case 'eth_sign':
                  case 'eth_signTypedData_v2':
                  case 'eth_subscribe':
                  case 'eth_unsubscribe':
                    throw h.provider.unsupportedMethod();
                }
              })(e),
              !this.signer)
            )
              switch (e.method) {
                case 'eth_requestAccounts': {
                  let t = await this.requestSignerSelection(e),
                    n = this.initSigner(t);
                  await n.handshake(e), (this.signer = n), tU.setItem(tj, t);
                  break;
                }
                case 'wallet_sendCalls': {
                  let t = this.initSigner('scw');
                  await t.handshake({ method: 'handshake' });
                  let n = await t.request(e);
                  return await t.cleanup(), n;
                }
                case 'wallet_getCallsStatus':
                  return en(e, 'http://rpc.wallet.coinbase.com');
                case 'net_version':
                  return 1;
                case 'eth_chainId':
                  return L(1);
                default:
                  throw h.provider.unauthorized(
                    "Must call 'eth_requestAccounts' before other methods"
                  );
              }
            return await this.signer.request(e);
          } catch (t) {
            let { code: e } = t;
            return (
              e === s.provider.unauthorized && this.disconnect(),
              Promise.reject(
                (function (e) {
                  let t = (function (e, { shouldIncludeStack: t = !1 } = {}) {
                      var n, i;
                      let r = {};
                      return (
                        e &&
                        'object' == typeof e &&
                        !Array.isArray(e) &&
                        d(e, 'code') &&
                        Number.isInteger((n = e.code)) &&
                        (a[n.toString()] || ((i = n) >= -32099 && i <= -32e3))
                          ? ((r.code = e.code),
                            e.message && 'string' == typeof e.message
                              ? ((r.message = e.message), d(e, 'data') && (r.data = e.data))
                              : ((r.message = c(r.code)), (r.data = { originalError: l(e) })))
                          : ((r.code = s.rpc.internal),
                            (r.message = u(e, 'message') ? e.message : o),
                            (r.data = { originalError: l(e) })),
                        t && (r.stack = u(e, 'stack') ? e.stack : void 0),
                        r
                      );
                    })(
                      (function (e) {
                        var t;
                        if ('string' == typeof e) return { message: e, code: s.rpc.internal };
                        if (ed(e)) {
                          let n = e.errorMessage,
                            i =
                              null !== (t = e.errorCode) && void 0 !== t
                                ? t
                                : n.match(/(denied|rejected)/i)
                                  ? s.provider.userRejectedRequest
                                  : void 0;
                          return Object.assign(Object.assign({}, e), {
                            message: n,
                            code: i,
                            data: { method: e.method },
                          });
                        }
                        return e;
                      })(e),
                      { shouldIncludeStack: !0 }
                    ),
                    n = new URL('https://docs.cloud.coinbase.com/wallet-sdk/docs/errors');
                  return (
                    n.searchParams.set('version', ee),
                    n.searchParams.set('code', t.code.toString()),
                    n.searchParams.set('message', t.message),
                    Object.assign(Object.assign({}, t), { docUrl: n.href })
                  );
                })(t)
              )
            );
          }
        }
        async enable() {
          return (
            console.warn(
              '.enable() has been deprecated. Please use .request({ method: "eth_requestAccounts" }) instead.'
            ),
            await this.request({ method: 'eth_requestAccounts' })
          );
        }
        async disconnect() {
          var e;
          await (null === (e = this.signer) || void 0 === e ? void 0 : e.cleanup()),
            (this.signer = null),
            r.clearAll(),
            this.emit('disconnect', h.provider.disconnected('User initiated disconnection'));
        }
        requestSignerSelection(e) {
          return tO({
            communicator: this.communicator,
            preference: this.preference,
            metadata: this.metadata,
            handshakeRequest: e,
            callback: this.emit.bind(this),
          });
        }
        initSigner(e) {
          return (function (e) {
            let { signerType: t, metadata: n, communicator: i, callback: r } = e;
            switch (t) {
              case 'scw':
                return new eo({ metadata: n, callback: r, communicator: i });
              case 'walletlink':
                return new tT({ metadata: n, callback: r });
            }
          })({
            signerType: e,
            metadata: this.metadata,
            communicator: this.communicator,
            callback: this.emit.bind(this),
          });
        }
      }
      let tJ = { options: 'all' };
      function tY(e) {
        var t;
        new r('CBWSDK').setItem('VERSION', ee), tz();
        let n = {
          metadata: {
            appName: e.appName || 'Dapp',
            appLogoUrl: e.appLogoUrl || '',
            appChainIds: e.appChainIds || [],
          },
          preference: Object.assign(tJ, null !== (t = e.preference) && void 0 !== t ? t : {}),
        };
        !(function (e) {
          if (e) {
            if (!['all', 'smartWalletOnly', 'eoaOnly'].includes(e.options))
              throw Error(`Invalid options: ${e.options}`);
            if (
              e.attribution &&
              void 0 !== e.attribution.auto &&
              void 0 !== e.attribution.dataSuffix
            )
              throw Error('Attribution cannot contain both auto and dataSuffix properties');
          }
        })(n.preference);
        let i = null;
        return {
          getProvider: () => (
            i ||
              (i = (function (e) {
                var t;
                let n = { metadata: e.metadata, preference: e.preference };
                return null !==
                  (t = (function ({ metadata: e, preference: t }) {
                    var n, i;
                    let { appName: r, appLogoUrl: s, appChainIds: a } = e;
                    if ('smartWalletOnly' !== t.options) {
                      let e = globalThis.coinbaseWalletExtension;
                      if (e)
                        return (
                          null === (n = e.setAppInfo) || void 0 === n || n.call(e, r, s, a, t), e
                        );
                    }
                    let o = (function () {
                      var e, t;
                      try {
                        let n = globalThis;
                        return null !== (e = n.ethereum) && void 0 !== e
                          ? e
                          : null === (t = n.top) || void 0 === t
                            ? void 0
                            : t.ethereum;
                      } catch (e) {
                        return;
                      }
                    })();
                    if (null == o ? void 0 : o.isCoinbaseBrowser)
                      return (
                        null === (i = o.setAppInfo) || void 0 === i || i.call(o, r, s, a, t), o
                      );
                  })(n)) && void 0 !== t
                  ? t
                  : new t$(n);
              })(n)),
            i
          ),
        };
      }
    },
    2217: function (e, t, n) {
      'use strict';
      n.d(t, {
        $p: function () {
          return u;
        },
        EP: function () {
          return h;
        },
        FL: function () {
          return d;
        },
        Fn: function () {
          return _;
        },
        IH: function () {
          return m;
        },
        Iq: function () {
          return o;
        },
        NI: function () {
          return a;
        },
        Ou: function () {
          return l;
        },
        SD: function () {
          return f;
        },
        Vl: function () {
          return s;
        },
        Xb: function () {
          return y;
        },
        ac: function () {
          return b;
        },
        gm: function () {
          return p;
        },
        m_: function () {
          return c;
        },
        mk: function () {
          return g;
        },
        pp: function () {
          return k;
        },
        u8: function () {
          return w;
        },
        zP: function () {
          return v;
        },
      });
      let i = BigInt(4294967296 - 1),
        r = BigInt(32);
      function s(e, t = !1) {
        let n = e.length,
          s = new Uint32Array(n),
          a = new Uint32Array(n);
        for (let o = 0; o < n; o++) {
          let { h: n, l: c } = (function (e, t = !1) {
            return t
              ? { h: Number(e & i), l: Number((e >> r) & i) }
              : { h: 0 | Number((e >> r) & i), l: 0 | Number(e & i) };
          })(e[o], t);
          [s[o], a[o]] = [n, c];
        }
        return [s, a];
      }
      let a = (e, t, n) => e >>> n,
        o = (e, t, n) => (e << (32 - n)) | (t >>> n),
        c = (e, t, n) => (e >>> n) | (t << (32 - n)),
        l = (e, t, n) => (e << (32 - n)) | (t >>> n),
        d = (e, t, n) => (e << (64 - n)) | (t >>> (n - 32)),
        u = (e, t, n) => (e >>> (n - 32)) | (t << (64 - n)),
        h = (e, t, n) => (e << n) | (t >>> (32 - n)),
        p = (e, t, n) => (t << n) | (e >>> (32 - n)),
        f = (e, t, n) => (t << (n - 32)) | (e >>> (64 - n)),
        g = (e, t, n) => (e << (n - 32)) | (t >>> (64 - n));
      function m(e, t, n, i) {
        let r = (t >>> 0) + (i >>> 0);
        return { h: (e + n + ((r / 4294967296) | 0)) | 0, l: 0 | r };
      }
      let b = (e, t, n) => (e >>> 0) + (t >>> 0) + (n >>> 0),
        _ = (e, t, n, i) => (t + n + i + ((e / 4294967296) | 0)) | 0,
        y = (e, t, n, i) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (i >>> 0),
        w = (e, t, n, i, r) => (t + n + i + r + ((e / 4294967296) | 0)) | 0,
        v = (e, t, n, i, r) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (i >>> 0) + (r >>> 0),
        k = (e, t, n, i, r, s) => (t + n + i + r + s + ((e / 4294967296) | 0)) | 0;
    },
    5965: function (e, t, n) {
      'use strict';
      function i(e) {
        if (!Number.isSafeInteger(e) || e < 0) throw Error('positive integer expected, got ' + e);
      }
      function r(e, ...t) {
        if (
          !(
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && 'Uint8Array' === e.constructor.name)
          )
        )
          throw Error('Uint8Array expected');
        if (t.length > 0 && !t.includes(e.length))
          throw Error('Uint8Array expected of length ' + t + ', got length=' + e.length);
      }
      function s(e, t = !0) {
        if (e.destroyed) throw Error('Hash instance has been destroyed');
        if (t && e.finished) throw Error('Hash#digest() has already been called');
      }
      function a(e, t) {
        r(e);
        let n = t.outputLen;
        if (e.length < n) throw Error('digestInto() expects output buffer of length at least ' + n);
      }
      function o(e) {
        return new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
      }
      function c(...e) {
        for (let t = 0; t < e.length; t++) e[t].fill(0);
      }
      function l(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function d(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      n.d(t, {
        $h: function () {
          return s;
        },
        GL: function () {
          return l;
        },
        Jq: function () {
          return o;
        },
        O0: function () {
          return g;
        },
        Ux: function () {
          return u;
        },
        V1: function () {
          return b;
        },
        ci: function () {
          return f;
        },
        eB: function () {
          return a;
        },
        gk: function () {
          return r;
        },
        k8: function () {
          return i;
        },
        kb: function () {
          return m;
        },
        np: function () {
          return d;
        },
        ru: function () {
          return c;
        },
      });
      let u =
          68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0]
            ? (e) => e
            : function (e) {
                for (let n = 0; n < e.length; n++) {
                  var t;
                  e[n] =
                    (((t = e[n]) << 24) & 4278190080) |
                    ((t << 8) & 16711680) |
                    ((t >>> 8) & 65280) |
                    ((t >>> 24) & 255);
                }
                return e;
              },
        h =
          'function' == typeof Uint8Array.from([]).toHex && 'function' == typeof Uint8Array.fromHex,
        p = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
      function f(e) {
        if ((r(e), h)) return e.toHex();
        let t = '';
        for (let n = 0; n < e.length; n++) t += p[e[n]];
        return t;
      }
      function g(e) {
        return (
          'string' == typeof e &&
            (e = (function (e) {
              if ('string' != typeof e) throw Error('string expected');
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          r(e),
          e
        );
      }
      class m {}
      function b(e) {
        let t = (t) => e().update(g(t)).digest(),
          n = e();
        return (t.outputLen = n.outputLen), (t.blockLen = n.blockLen), (t.create = () => e()), t;
      }
    },
  },
]);
