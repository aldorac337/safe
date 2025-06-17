'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2192],
  {
    32623: function (e, t, n) {
      n.d(t, {
        t: function () {
          return o;
        },
      });
      var r = n(99093);
      function o(e) {
        return 'function' === e.type
          ? `function ${e.name}(${(0, r.P)(e.inputs)})${e.stateMutability && 'nonpayable' !== e.stateMutability ? ` ${e.stateMutability}` : ''}${e.outputs?.length ? ` returns (${(0, r.P)(e.outputs)})` : ''}`
          : 'event' === e.type
            ? `event ${e.name}(${(0, r.P)(e.inputs)})`
            : 'error' === e.type
              ? `error ${e.name}(${(0, r.P)(e.inputs)})`
              : 'constructor' === e.type
                ? `constructor(${(0, r.P)(e.inputs)})${'payable' === e.stateMutability ? ' payable' : ''}`
                : 'fallback' === e.type
                  ? `fallback() external${'payable' === e.stateMutability ? ' payable' : ''}`
                  : 'receive() external payable';
      }
    },
    99093: function (e, t, n) {
      n.d(t, {
        P: function () {
          return i;
        },
      });
      var r = n(52885);
      let o = /^tuple(?<array>(\[(\d*)\])*)$/;
      function i(e) {
        let t = '',
          n = e.length;
        for (let i = 0; i < n; i++)
          (t += (function e(t) {
            let n = t.type;
            if (o.test(t.type) && 'components' in t) {
              n = '(';
              let i = t.components.length;
              for (let r = 0; r < i; r++) (n += e(t.components[r])), r < i - 1 && (n += ', ');
              let s = (0, r.Zw)(o, t.type);
              return (n += `)${s?.array ?? ''}`), e({ ...t, type: n });
            }
            return ('indexed' in t && t.indexed && (n = `${n} indexed`), t.name)
              ? `${n} ${t.name}`
              : n;
          })(e[i])),
            i !== n - 1 && (t += ', ');
        return t;
      }
    },
    52885: function (e, t, n) {
      function r(e, t) {
        let n = e.exec(t);
        return n?.groups;
      }
      n.d(t, {
        Zw: function () {
          return r;
        },
        cN: function () {
          return s;
        },
        eL: function () {
          return o;
        },
        lh: function () {
          return i;
        },
      });
      let o = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        i =
          /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
        s = /^\(.+?\).*?$/;
    },
    39858: function (e, t, n) {
      n.d(t, {
        T: function () {
          return r;
        },
      });
      function r(e) {
        return 'string' == typeof e ? { address: e, type: 'json-rpc' } : e;
      }
    },
    99459: function (e, t, n) {
      n.d(t, {
        $: function () {
          return r;
        },
        Up: function () {
          return o;
        },
        hZ: function () {
          return i;
        },
      });
      let r = {
          1: 'An `assert` condition failed.',
          17: 'Arithmetic operation resulted in underflow or overflow.',
          18: 'Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).',
          33: 'Attempted to convert to an invalid type.',
          34: 'Attempted to access a storage byte array that is incorrectly encoded.',
          49: 'Performed `.pop()` on an empty array',
          50: 'Array index is out of bounds.',
          65: 'Allocated too much memory or created an array which is too large.',
          81: 'Attempted to call a zero-initialized variable of internal function type.',
        },
        o = { inputs: [{ name: 'message', type: 'string' }], name: 'Error', type: 'error' },
        i = { inputs: [{ name: 'reason', type: 'uint256' }], name: 'Panic', type: 'error' };
    },
    6153: function (e, t, n) {
      n.d(t, {
        CI: function () {
          return M;
        },
        FM: function () {
          return h;
        },
        Gy: function () {
          return P;
        },
        KY: function () {
          return $;
        },
        M4: function () {
          return d;
        },
        MX: function () {
          return b;
        },
        S4: function () {
          return w;
        },
        SM: function () {
          return x;
        },
        cO: function () {
          return a;
        },
        dh: function () {
          return A;
        },
        eF: function () {
          return v;
        },
        fM: function () {
          return s;
        },
        fs: function () {
          return f;
        },
        gr: function () {
          return l;
        },
        hn: function () {
          return E;
        },
        lC: function () {
          return y;
        },
        mv: function () {
          return m;
        },
        wM: function () {
          return z;
        },
        wb: function () {
          return c;
        },
        xB: function () {
          return u;
        },
        xL: function () {
          return g;
        },
        yP: function () {
          return p;
        },
      });
      var r = n(78978),
        o = n(99543),
        i = n(77854);
      class s extends i.G {
        constructor({ docsPath: e }) {
          super(
            'A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.',
            { docsPath: e, name: 'AbiConstructorNotFoundError' }
          );
        }
      }
      class a extends i.G {
        constructor({ docsPath: e }) {
          super(
            'Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.',
            { docsPath: e, name: 'AbiConstructorParamsNotFoundError' }
          );
        }
      }
      class u extends i.G {
        constructor({ data: e, params: t, size: n }) {
          super(`Data size of ${n} bytes is too small for given parameters.`, {
            metaMessages: [
              `Params: (${(0, r.h)(t, { includeName: !0 })})`,
              `Data:   ${e} (${n} bytes)`,
            ],
            name: 'AbiDecodingDataSizeTooSmallError',
          }),
            Object.defineProperty(this, 'data', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'params', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'size', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = e),
            (this.params = t),
            (this.size = n);
        }
      }
      class c extends i.G {
        constructor() {
          super('Cannot decode zero data ("0x") with ABI parameters.', {
            name: 'AbiDecodingZeroDataError',
          });
        }
      }
      class l extends i.G {
        constructor({ expectedLength: e, givenLength: t, type: n }) {
          super(
            `ABI encoding array length mismatch for type ${n}.
Expected length: ${e}
Given length: ${t}`,
            { name: 'AbiEncodingArrayLengthMismatchError' }
          );
        }
      }
      class d extends i.G {
        constructor({ expectedSize: e, value: t }) {
          super(
            `Size of bytes "${t}" (bytes${(0, o.d)(t)}) does not match expected size (bytes${e}).`,
            { name: 'AbiEncodingBytesSizeMismatchError' }
          );
        }
      }
      class f extends i.G {
        constructor({ expectedLength: e, givenLength: t }) {
          super(
            `ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`,
            { name: 'AbiEncodingLengthMismatchError' }
          );
        }
      }
      class p extends i.G {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`,
            { docsPath: t, name: 'AbiErrorSignatureNotFoundError' }
          ),
            Object.defineProperty(this, 'signature', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.signature = e);
        }
      }
      class h extends i.G {
        constructor({ docsPath: e }) {
          super('Cannot extract event signature from empty topics.', {
            docsPath: e,
            name: 'AbiEventSignatureEmptyTopicsError',
          });
        }
      }
      class y extends i.G {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded event signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`,
            { docsPath: t, name: 'AbiEventSignatureNotFoundError' }
          );
        }
      }
      class m extends i.G {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Event ${e ? `"${e}" ` : ''}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`,
            { docsPath: t, name: 'AbiEventNotFoundError' }
          );
        }
      }
      class g extends i.G {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Function ${e ? `"${e}" ` : ''}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,
            { docsPath: t, name: 'AbiFunctionNotFoundError' }
          );
        }
      }
      class b extends i.G {
        constructor(e, { docsPath: t }) {
          super(
            `Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,
            { docsPath: t, name: 'AbiFunctionOutputsNotFoundError' }
          );
        }
      }
      class v extends i.G {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded function signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`,
            { docsPath: t, name: 'AbiFunctionSignatureNotFoundError' }
          );
        }
      }
      class w extends i.G {
        constructor(e, t) {
          super('Found ambiguous types in overloaded ABI items.', {
            metaMessages: [
              `\`${e.type}\` in \`${(0, r.t)(e.abiItem)}\`, and`,
              `\`${t.type}\` in \`${(0, r.t)(t.abiItem)}\``,
              '',
              'These types encode differently and cannot be distinguished at runtime.',
              'Remove one of the ambiguous items in the ABI.',
            ],
            name: 'AbiItemAmbiguityError',
          });
        }
      }
      class $ extends i.G {
        constructor({ expectedSize: e, givenSize: t }) {
          super(`Expected bytes${e}, got bytes${t}.`, { name: 'BytesSizeMismatchError' });
        }
      }
      class x extends i.G {
        constructor({ abiItem: e, data: t, params: n, size: o }) {
          super(`Data size of ${o} bytes is too small for non-indexed event parameters.`, {
            metaMessages: [
              `Params: (${(0, r.h)(n, { includeName: !0 })})`,
              `Data:   ${t} (${o} bytes)`,
            ],
            name: 'DecodeLogDataMismatch',
          }),
            Object.defineProperty(this, 'abiItem', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'data', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'params', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'size', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abiItem = e),
            (this.data = t),
            (this.params = n),
            (this.size = o);
        }
      }
      class P extends i.G {
        constructor({ abiItem: e, param: t }) {
          super(
            `Expected a topic for indexed event parameter${t.name ? ` "${t.name}"` : ''} on event "${(0, r.t)(e, { includeName: !0 })}".`,
            { name: 'DecodeLogTopicsMismatch' }
          ),
            Object.defineProperty(this, 'abiItem', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abiItem = e);
        }
      }
      class A extends i.G {
        constructor(e, { docsPath: t }) {
          super(
            `Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`,
            { docsPath: t, name: 'InvalidAbiEncodingType' }
          );
        }
      }
      class M extends i.G {
        constructor(e, { docsPath: t }) {
          super(
            `Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`,
            { docsPath: t, name: 'InvalidAbiDecodingType' }
          );
        }
      }
      class E extends i.G {
        constructor(e) {
          super(`Value "${e}" is not a valid array.`, { name: 'InvalidArrayError' });
        }
      }
      class z extends i.G {
        constructor(e) {
          super(
            `"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`,
            { name: 'InvalidDefinitionTypeError' }
          );
        }
      }
    },
    22262: function (e, t, n) {
      n.d(t, {
        cg: function () {
          return g;
        },
        uq: function () {
          return b;
        },
        Lu: function () {
          return v;
        },
        Dk: function () {
          return w;
        },
        Mo: function () {
          return $;
        },
        VQ: function () {
          return x;
        },
      });
      var r = n(39858),
        o = n(99459),
        i = n(90674),
        s = n(78978),
        a = n(45679);
      function u({ abiItem: e, args: t, includeFunctionName: n = !0, includeName: r = !1 }) {
        if ('name' in e && 'inputs' in e && e.inputs)
          return `${n ? e.name : ''}(${e.inputs.map((e, n) => `${r && e.name ? `${e.name}: ` : ''}${'object' == typeof t[n] ? (0, a.P)(t[n]) : t[n]}`).join(', ')})`;
      }
      var c = n(89042),
        l = n(11578),
        d = n(18838),
        f = n(6153),
        p = n(77854),
        h = n(29545),
        y = n(59134),
        m = n(53509);
      class g extends p.G {
        constructor(
          e,
          {
            account: t,
            docsPath: n,
            chain: o,
            data: i,
            gas: s,
            gasPrice: a,
            maxFeePerGas: u,
            maxPriorityFeePerGas: c,
            nonce: f,
            to: p,
            value: m,
            stateOverride: g,
          }
        ) {
          let b = t ? (0, r.T)(t) : void 0,
            v = (0, y.xr)({
              from: b?.address,
              to: p,
              value: void 0 !== m && `${(0, l.d)(m)} ${o?.nativeCurrency?.symbol || 'ETH'}`,
              data: i,
              gas: s,
              gasPrice: void 0 !== a && `${(0, d.o)(a)} gwei`,
              maxFeePerGas: void 0 !== u && `${(0, d.o)(u)} gwei`,
              maxPriorityFeePerGas: void 0 !== c && `${(0, d.o)(c)} gwei`,
              nonce: f,
            });
          g &&
            (v += `
${(0, h.Bj)(g)}`),
            super(e.shortMessage, {
              cause: e,
              docsPath: n,
              metaMessages: [
                ...(e.metaMessages ? [...e.metaMessages, ' '] : []),
                'Raw Call Arguments:',
                v,
              ].filter(Boolean),
              name: 'CallExecutionError',
            }),
            Object.defineProperty(this, 'cause', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = e);
        }
      }
      class b extends p.G {
        constructor(
          e,
          { abi: t, args: n, contractAddress: r, docsPath: o, functionName: i, sender: a }
        ) {
          let l = (0, c.mE)({ abi: t, args: n, name: i }),
            d = l ? u({ abiItem: l, args: n, includeFunctionName: !1, includeName: !1 }) : void 0,
            f = l ? (0, s.t)(l, { includeName: !0 }) : void 0,
            p = (0, y.xr)({
              address: r && (0, m.C)(r),
              function: f,
              args:
                d &&
                '()' !== d &&
                `${[...Array(i?.length ?? 0).keys()].map(() => ' ').join('')}${d}`,
              sender: a,
            });
          super(
            e.shortMessage ||
              `An unknown error occurred while executing the contract function "${i}".`,
            {
              cause: e,
              docsPath: o,
              metaMessages: [
                ...(e.metaMessages ? [...e.metaMessages, ' '] : []),
                p && 'Contract Call:',
                p,
              ].filter(Boolean),
              name: 'ContractFunctionExecutionError',
            }
          ),
            Object.defineProperty(this, 'abi', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'args', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'cause', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'contractAddress', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'formattedArgs', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'functionName', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'sender', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abi = t),
            (this.args = n),
            (this.cause = e),
            (this.contractAddress = r),
            (this.functionName = i),
            (this.sender = a);
        }
      }
      class v extends p.G {
        constructor({ abi: e, data: t, functionName: n, message: r }) {
          let a, c, l, d, p;
          if (t && '0x' !== t)
            try {
              let { abiItem: n, errorName: r, args: a } = (p = (0, i.p)({ abi: e, data: t }));
              if ('Error' === r) l = a[0];
              else if ('Panic' === r) {
                let [e] = a;
                l = o.$[e];
              } else {
                let e = n ? (0, s.t)(n, { includeName: !0 }) : void 0,
                  t =
                    n && a
                      ? u({ abiItem: n, args: a, includeFunctionName: !1, includeName: !1 })
                      : void 0;
                c = [
                  e ? `Error: ${e}` : '',
                  t && '()' !== t
                    ? `       ${[...Array(r?.length ?? 0).keys()].map(() => ' ').join('')}${t}`
                    : '',
                ];
              }
            } catch (e) {
              a = e;
            }
          else r && (l = r);
          a instanceof f.yP &&
            ((d = a.signature),
            (c = [
              `Unable to decode signature "${d}" as it was not found on the provided ABI.`,
              'Make sure you are using the correct ABI and that the error exists on it.',
              `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${d}.`,
            ])),
            super(
              (l && 'execution reverted' !== l) || d
                ? [
                    `The contract function "${n}" reverted with the following ${d ? 'signature' : 'reason'}:`,
                    l || d,
                  ].join('\n')
                : `The contract function "${n}" reverted.`,
              { cause: a, metaMessages: c, name: 'ContractFunctionRevertedError' }
            ),
            Object.defineProperty(this, 'data', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'raw', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'reason', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'signature', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = p),
            (this.raw = t),
            (this.reason = l),
            (this.signature = d);
        }
      }
      class w extends p.G {
        constructor({ functionName: e }) {
          super(`The contract function "${e}" returned no data ("0x").`, {
            metaMessages: [
              'This could be due to any of the following:',
              `  - The contract does not have the function "${e}",`,
              '  - The parameters passed to the contract function may be invalid, or',
              '  - The address is not a contract.',
            ],
            name: 'ContractFunctionZeroDataError',
          });
        }
      }
      class $ extends p.G {
        constructor({ factory: e }) {
          super(
            `Deployment for counterfactual contract call failed${e ? ` for factory "${e}".` : ''}`,
            {
              metaMessages: [
                'Please ensure:',
                '- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).',
                '- The `factoryData` is a valid encoded function call for contract deployment function on the factory.',
              ],
              name: 'CounterfactualDeploymentFailedError',
            }
          );
        }
      }
      class x extends p.G {
        constructor({ data: e, message: t }) {
          super(t || '', { name: 'RawContractError' }),
            Object.defineProperty(this, 'code', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 3,
            }),
            Object.defineProperty(this, 'data', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = e);
        }
      }
    },
    29545: function (e, t, n) {
      n.d(t, {
        Bj: function () {
          return a;
        },
        Nc: function () {
          return o;
        },
        Z8: function () {
          return i;
        },
      });
      var r = n(77854);
      class o extends r.G {
        constructor({ address: e }) {
          super(`State for account "${e}" is set multiple times.`, {
            name: 'AccountStateConflictError',
          });
        }
      }
      class i extends r.G {
        constructor() {
          super('state and stateDiff are set on the same account.', {
            name: 'StateAssignmentConflictError',
          });
        }
      }
      function s(e) {
        return e.reduce(
          (e, { slot: t, value: n }) => `${e}        ${t}: ${n}
`,
          ''
        );
      }
      function a(e) {
        return e
          .reduce((e, { address: t, ...n }) => {
            let r = `${e}    ${t}:
`;
            return (
              n.nonce &&
                (r += `      nonce: ${n.nonce}
`),
              n.balance &&
                (r += `      balance: ${n.balance}
`),
              n.code &&
                (r += `      code: ${n.code}
`),
              n.state && (r += '      state:\n' + s(n.state)),
              n.stateDiff && (r += '      stateDiff:\n' + s(n.stateDiff)),
              r
            );
          }, '  State Override:\n')
          .slice(0, -1);
      }
    },
    5718: function (e, t, n) {
      n.d(t, {
        r: function () {
          return y;
        },
      });
      var r = n(6153),
        o = n(11238),
        i = n(27572),
        s = n(99543),
        a = n(36571),
        u = n(79712),
        c = n(95045),
        l = n(37968),
        d = n(79150);
      function f(e, t = {}) {
        void 0 !== t.size && (0, l.Yf)(e, { size: t.size });
        let n = (0, d.ci)(e, t);
        return (0, l.ly)(n, t);
      }
      var p = n(13990),
        h = n(26836);
      function y(e, t) {
        let n = 'string' == typeof t ? (0, p.nr)(t) : t,
          y = (0, i.q)(n);
        if (0 === (0, s.d)(n) && e.length > 0) throw new r.wb();
        if ((0, s.d)(t) && 32 > (0, s.d)(t))
          throw new r.xB({
            data: 'string' == typeof t ? t : (0, d.ci)(t),
            params: e,
            size: (0, s.d)(t),
          });
        let g = 0,
          b = [];
        for (let t = 0; t < e.length; ++t) {
          let n = e[t];
          y.setPosition(g);
          let [i, s] = (function e(t, n, { staticPosition: i }) {
            let s = (0, h.S)(n.type);
            if (s) {
              let [r, o] = s;
              return (function (t, n, { length: r, staticPosition: o }) {
                if (!r) {
                  let r = o + f(t.readBytes(32)),
                    i = r + 32;
                  t.setPosition(r);
                  let s = f(t.readBytes(32)),
                    a = m(n),
                    u = 0,
                    c = [];
                  for (let r = 0; r < s; ++r) {
                    t.setPosition(i + (a ? 32 * r : u));
                    let [o, s] = e(t, n, { staticPosition: i });
                    (u += s), c.push(o);
                  }
                  return t.setPosition(o + 32), [c, 32];
                }
                if (m(n)) {
                  let i = o + f(t.readBytes(32)),
                    s = [];
                  for (let o = 0; o < r; ++o) {
                    t.setPosition(i + 32 * o);
                    let [r] = e(t, n, { staticPosition: i });
                    s.push(r);
                  }
                  return t.setPosition(o + 32), [s, 32];
                }
                let i = 0,
                  s = [];
                for (let a = 0; a < r; ++a) {
                  let [r, a] = e(t, n, { staticPosition: o + i });
                  (i += a), s.push(r);
                }
                return [s, i];
              })(t, { ...n, type: o }, { length: r, staticPosition: i });
            }
            if ('tuple' === n.type)
              return (function (t, n, { staticPosition: r }) {
                let o = 0 === n.components.length || n.components.some(({ name: e }) => !e),
                  i = o ? [] : {},
                  s = 0;
                if (m(n)) {
                  let a = r + f(t.readBytes(32));
                  for (let r = 0; r < n.components.length; ++r) {
                    let u = n.components[r];
                    t.setPosition(a + s);
                    let [c, l] = e(t, u, { staticPosition: a });
                    (s += l), (i[o ? r : u?.name] = c);
                  }
                  return t.setPosition(r + 32), [i, 32];
                }
                for (let a = 0; a < n.components.length; ++a) {
                  let u = n.components[a],
                    [c, l] = e(t, u, { staticPosition: r });
                  (i[o ? a : u?.name] = c), (s += l);
                }
                return [i, s];
              })(t, n, { staticPosition: i });
            if ('address' === n.type)
              return (function (e) {
                let t = e.readBytes(32);
                return [(0, o.x)((0, d.ci)((0, a.T4)(t, -20))), 32];
              })(t);
            if ('bool' === n.type)
              return [
                (function (e, t = {}) {
                  let n = e;
                  if (
                    (void 0 !== t.size && ((0, l.Yf)(n, { size: t.size }), (n = (0, u.f)(n))),
                    n.length > 1 || n[0] > 1)
                  )
                    throw new c.yr(n);
                  return !!n[0];
                })(t.readBytes(32), { size: 32 }),
                32,
              ];
            if (n.type.startsWith('bytes'))
              return (function (e, t, { staticPosition: n }) {
                let [r, o] = t.type.split('bytes');
                if (!o) {
                  let t = f(e.readBytes(32));
                  e.setPosition(n + t);
                  let r = f(e.readBytes(32));
                  if (0 === r) return e.setPosition(n + 32), ['0x', 32];
                  let o = e.readBytes(r);
                  return e.setPosition(n + 32), [(0, d.ci)(o), 32];
                }
                return [(0, d.ci)(e.readBytes(Number.parseInt(o), 32)), 32];
              })(t, n, { staticPosition: i });
            if (n.type.startsWith('uint') || n.type.startsWith('int'))
              return (function (e, t) {
                let n = t.type.startsWith('int'),
                  r = Number.parseInt(t.type.split('int')[1] || '256'),
                  o = e.readBytes(32);
                return [
                  r > 48
                    ? (function (e, t = {}) {
                        void 0 !== t.size && (0, l.Yf)(e, { size: t.size });
                        let n = (0, d.ci)(e, t);
                        return (0, l.y_)(n, t);
                      })(o, { signed: n })
                    : f(o, { signed: n }),
                  32,
                ];
              })(t, n);
            if ('string' === n.type)
              return (function (e, { staticPosition: t }) {
                let n = f(e.readBytes(32));
                e.setPosition(t + n);
                let r = f(e.readBytes(32));
                if (0 === r) return e.setPosition(t + 32), ['', 32];
                let o = e.readBytes(r, 32),
                  i = (function (e, t = {}) {
                    let n = e;
                    return (
                      void 0 !== t.size &&
                        ((0, l.Yf)(n, { size: t.size }), (n = (0, u.f)(n, { dir: 'right' }))),
                      new TextDecoder().decode(n)
                    );
                  })((0, u.f)(o));
                return e.setPosition(t + 32), [i, 32];
              })(t, { staticPosition: i });
            throw new r.CI(n.type, { docsPath: '/docs/contract/decodeAbiParameters' });
          })(y, n, { staticPosition: 0 });
          (g += s), b.push(i);
        }
        return b;
      }
      function m(e) {
        let { type: t } = e;
        if ('string' === t || 'bytes' === t || t.endsWith('[]')) return !0;
        if ('tuple' === t) return e.components?.some(m);
        let n = (0, h.S)(e.type);
        return !!(n && m({ ...e, type: n[1] }));
      }
    },
    90674: function (e, t, n) {
      n.d(t, {
        p: function () {
          return c;
        },
      });
      var r = n(99459),
        o = n(6153),
        i = n(36571),
        s = n(74851),
        a = n(5718),
        u = n(78978);
      function c(e) {
        let { abi: t, data: n } = e,
          c = (0, i.tP)(n, 0, 4);
        if ('0x' === c) throw new o.wb();
        let l = [...(t || []), r.Up, r.hZ].find(
          (e) => 'error' === e.type && c === (0, s.C)((0, u.t)(e))
        );
        if (!l) throw new o.yP(c, { docsPath: '/docs/contract/decodeErrorResult' });
        return {
          abiItem: l,
          args:
            'inputs' in l && l.inputs && l.inputs.length > 0
              ? (0, a.r)(l.inputs, (0, i.tP)(n, 4))
              : void 0,
          errorName: l.name,
        };
      }
    },
    26836: function (e, t, n) {
      n.d(t, {
        E: function () {
          return h;
        },
        S: function () {
          return m;
        },
      });
      var r = n(6153),
        o = n(48141),
        i = n(77854),
        s = n(95045),
        a = n(84545),
        u = n(1155),
        c = n(83254),
        l = n(99543),
        d = n(36571),
        f = n(79150),
        p = n(31517);
      function h(e, t) {
        if (e.length !== t.length)
          throw new r.fs({ expectedLength: e.length, givenLength: t.length });
        let n = y(
          (function ({ params: e, values: t }) {
            let n = [];
            for (let h = 0; h < e.length; h++)
              n.push(
                (function e({ param: t, value: n }) {
                  let h = m(t.type);
                  if (h) {
                    let [o, i] = h;
                    return (function (t, { length: n, param: o }) {
                      let i = null === n;
                      if (!Array.isArray(t)) throw new r.hn(t);
                      if (!i && t.length !== n)
                        throw new r.gr({
                          expectedLength: n,
                          givenLength: t.length,
                          type: `${o.type}[${n}]`,
                        });
                      let s = !1,
                        a = [];
                      for (let n = 0; n < t.length; n++) {
                        let r = e({ param: o, value: t[n] });
                        r.dynamic && (s = !0), a.push(r);
                      }
                      if (i || s) {
                        let e = y(a);
                        if (i) {
                          let t = (0, f.eC)(a.length, { size: 32 });
                          return { dynamic: !0, encoded: a.length > 0 ? (0, u.zo)([t, e]) : t };
                        }
                        if (s) return { dynamic: !0, encoded: e };
                      }
                      return { dynamic: !1, encoded: (0, u.zo)(a.map(({ encoded: e }) => e)) };
                    })(n, { length: o, param: { ...t, type: i } });
                  }
                  if ('tuple' === t.type)
                    return (function (t, { param: n }) {
                      let r = !1,
                        o = [];
                      for (let i = 0; i < n.components.length; i++) {
                        let s = n.components[i],
                          a = Array.isArray(t) ? i : s.name,
                          u = e({ param: s, value: t[a] });
                        o.push(u), u.dynamic && (r = !0);
                      }
                      return {
                        dynamic: r,
                        encoded: r ? y(o) : (0, u.zo)(o.map(({ encoded: e }) => e)),
                      };
                    })(n, { param: t });
                  if ('address' === t.type)
                    return (function (e) {
                      if (!(0, a.U)(e)) throw new o.b({ address: e });
                      return { dynamic: !1, encoded: (0, c.gc)(e.toLowerCase()) };
                    })(n);
                  if ('bool' === t.type)
                    return (function (e) {
                      if ('boolean' != typeof e)
                        throw new i.G(
                          `Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`
                        );
                      return { dynamic: !1, encoded: (0, c.gc)((0, f.C4)(e)) };
                    })(n);
                  if (t.type.startsWith('uint') || t.type.startsWith('int')) {
                    let e = t.type.startsWith('int'),
                      [, , r = '256'] = p.lh.exec(t.type) ?? [];
                    return (function (e, { signed: t, size: n = 256 }) {
                      if ('number' == typeof n) {
                        let r = 2n ** (BigInt(n) - (t ? 1n : 0n)) - 1n,
                          o = t ? -r - 1n : 0n;
                        if (e > r || e < o)
                          throw new s.J5({
                            max: r.toString(),
                            min: o.toString(),
                            signed: t,
                            size: n / 8,
                            value: e.toString(),
                          });
                      }
                      return { dynamic: !1, encoded: (0, f.eC)(e, { size: 32, signed: t }) };
                    })(n, { signed: e, size: Number(r) });
                  }
                  if (t.type.startsWith('bytes'))
                    return (function (e, { param: t }) {
                      let [, n] = t.type.split('bytes'),
                        o = (0, l.d)(e);
                      if (!n) {
                        let t = e;
                        return (
                          o % 32 != 0 &&
                            (t = (0, c.gc)(t, {
                              dir: 'right',
                              size: 32 * Math.ceil((e.length - 2) / 2 / 32),
                            })),
                          {
                            dynamic: !0,
                            encoded: (0, u.zo)([(0, c.gc)((0, f.eC)(o, { size: 32 })), t]),
                          }
                        );
                      }
                      if (o !== Number.parseInt(n))
                        throw new r.M4({ expectedSize: Number.parseInt(n), value: e });
                      return { dynamic: !1, encoded: (0, c.gc)(e, { dir: 'right' }) };
                    })(n, { param: t });
                  if ('string' === t.type)
                    return (function (e) {
                      let t = (0, f.$G)(e),
                        n = Math.ceil((0, l.d)(t) / 32),
                        r = [];
                      for (let e = 0; e < n; e++)
                        r.push((0, c.gc)((0, d.tP)(t, 32 * e, (e + 1) * 32), { dir: 'right' }));
                      return {
                        dynamic: !0,
                        encoded: (0, u.zo)([(0, c.gc)((0, f.eC)((0, l.d)(t), { size: 32 })), ...r]),
                      };
                    })(n);
                  throw new r.dh(t.type, { docsPath: '/docs/contract/encodeAbiParameters' });
                })({ param: e[h], value: t[h] })
              );
            return n;
          })({ params: e, values: t })
        );
        return 0 === n.length ? '0x' : n;
      }
      function y(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          let { dynamic: r, encoded: o } = e[n];
          r ? (t += 32) : (t += (0, l.d)(o));
        }
        let n = [],
          r = [],
          o = 0;
        for (let i = 0; i < e.length; i++) {
          let { dynamic: s, encoded: a } = e[i];
          s ? (n.push((0, f.eC)(t + o, { size: 32 })), r.push(a), (o += (0, l.d)(a))) : n.push(a);
        }
        return (0, u.zo)([...n, ...r]);
      }
      function m(e) {
        let t = e.match(/^(.*)\[(\d+)?\]$/);
        return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
      }
    },
    78978: function (e, t, n) {
      n.d(t, {
        h: function () {
          return i;
        },
        t: function () {
          return o;
        },
      });
      var r = n(6153);
      function o(e, { includeName: t = !1 } = {}) {
        if ('function' !== e.type && 'event' !== e.type && 'error' !== e.type)
          throw new r.wM(e.type);
        return `${e.name}(${i(e.inputs, { includeName: t })})`;
      }
      function i(e, { includeName: t = !1 } = {}) {
        return e
          ? e
              .map((e) =>
                (function (e, { includeName: t }) {
                  return e.type.startsWith('tuple')
                    ? `(${i(e.components, { includeName: t })})${e.type.slice(5)}`
                    : e.type + (t && e.name ? ` ${e.name}` : '');
                })(e, { includeName: t })
              )
              .join(t ? ', ' : ',')
          : '';
      }
    },
    89042: function (e, t, n) {
      n.d(t, {
        mE: function () {
          return u;
        },
      });
      var r = n(6153),
        o = n(13393),
        i = n(84545),
        s = n(84303),
        a = n(74851);
      function u(e) {
        let t;
        let { abi: n, args: u = [], name: c } = e,
          l = (0, o.v)(c, { strict: !1 }),
          d = n.filter((e) =>
            l
              ? 'function' === e.type
                ? (0, a.C)(e) === c
                : 'event' === e.type && (0, s.n)(e) === c
              : 'name' in e && e.name === c
          );
        if (0 !== d.length) {
          if (1 === d.length) return d[0];
          for (let e of d)
            if ('inputs' in e) {
              if (!u || 0 === u.length) {
                if (!e.inputs || 0 === e.inputs.length) return e;
                continue;
              }
              if (
                e.inputs &&
                0 !== e.inputs.length &&
                e.inputs.length === u.length &&
                u.every((t, n) => {
                  let r = 'inputs' in e && e.inputs[n];
                  return (
                    !!r &&
                    (function e(t, n) {
                      let r = typeof t,
                        o = n.type;
                      switch (o) {
                        case 'address':
                          return (0, i.U)(t, { strict: !1 });
                        case 'bool':
                          return 'boolean' === r;
                        case 'function':
                        case 'string':
                          return 'string' === r;
                        default:
                          if ('tuple' === o && 'components' in n)
                            return Object.values(n.components).every((n, r) =>
                              e(Object.values(t)[r], n)
                            );
                          if (
                            /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                              o
                            )
                          )
                            return 'number' === r || 'bigint' === r;
                          if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(o))
                            return 'string' === r || t instanceof Uint8Array;
                          if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(o))
                            return (
                              Array.isArray(t) &&
                              t.every((t) =>
                                e(t, { ...n, type: o.replace(/(\[[0-9]{0,}\])$/, '') })
                              )
                            );
                          return !1;
                      }
                    })(t, r)
                  );
                })
              ) {
                if (t && 'inputs' in t && t.inputs) {
                  let n = (function e(t, n, r) {
                    for (let o in t) {
                      let s = t[o],
                        a = n[o];
                      if (
                        'tuple' === s.type &&
                        'tuple' === a.type &&
                        'components' in s &&
                        'components' in a
                      )
                        return e(s.components, a.components, r[o]);
                      let u = [s.type, a.type];
                      if (
                        (u.includes('address') && u.includes('bytes20')) ||
                        (((u.includes('address') && u.includes('string')) ||
                          (u.includes('address') && u.includes('bytes'))) &&
                          (0, i.U)(r[o], { strict: !1 }))
                      )
                        return u;
                    }
                  })(e.inputs, t.inputs, u);
                  if (n) throw new r.S4({ abiItem: e, type: n[0] }, { abiItem: t, type: n[1] });
                }
                t = e;
              }
            }
          return t || d[0];
        }
      }
    },
    18626: function (e, t, n) {
      n.d(t, {
        k: function () {
          return i;
        },
      });
      var r = n(77854),
        o = n(42850);
      function i(e, t) {
        let n = (e.details || '').toLowerCase(),
          i = e instanceof r.G ? e.walk((e) => e?.code === o.M_.code) : e;
        return i instanceof r.G
          ? new o.M_({ cause: e, message: i.details })
          : o.M_.nodeMessage.test(n)
            ? new o.M_({ cause: e, message: e.details })
            : o.Hh.nodeMessage.test(n)
              ? new o.Hh({ cause: e, maxFeePerGas: t?.maxFeePerGas })
              : o.G$.nodeMessage.test(n)
                ? new o.G$({ cause: e, maxFeePerGas: t?.maxFeePerGas })
                : o.ZI.nodeMessage.test(n)
                  ? new o.ZI({ cause: e, nonce: t?.nonce })
                  : o.vU.nodeMessage.test(n)
                    ? new o.vU({ cause: e, nonce: t?.nonce })
                    : o.se.nodeMessage.test(n)
                      ? new o.se({ cause: e, nonce: t?.nonce })
                      : o.C_.nodeMessage.test(n)
                        ? new o.C_({ cause: e })
                        : o.WF.nodeMessage.test(n)
                          ? new o.WF({ cause: e, gas: t?.gas })
                          : o.dR.nodeMessage.test(n)
                            ? new o.dR({ cause: e, gas: t?.gas })
                            : o.pZ.nodeMessage.test(n)
                              ? new o.pZ({ cause: e })
                              : o.cs.nodeMessage.test(n)
                                ? new o.cs({
                                    cause: e,
                                    maxFeePerGas: t?.maxFeePerGas,
                                    maxPriorityFeePerGas: t?.maxPriorityFeePerGas,
                                  })
                                : new o.cj({ cause: e });
      }
    },
    40639: function (e, t, n) {
      n.d(t, {
        K: function () {
          return r;
        },
      });
      function r(e, { format: t }) {
        if (!t) return {};
        let n = {};
        return (
          !(function t(r) {
            for (let o of Object.keys(r))
              o in e && (n[o] = e[o]),
                r[o] && 'object' == typeof r[o] && !Array.isArray(r[o]) && t(r[o]);
          })(t(e || {})),
          n
        );
      }
    },
    84303: function (e, t, n) {
      n.d(t, {
        n: function () {
          return r;
        },
      });
      let r = n(69862).r;
    },
    74851: function (e, t, n) {
      n.d(t, {
        C: function () {
          return i;
        },
      });
      var r = n(36571),
        o = n(69862);
      let i = (e) => (0, r.tP)((0, o.r)(e), 0, 4);
    },
    69862: function (e, t, n) {
      n.d(t, {
        r: function () {
          return c;
        },
      });
      var r = n(13990),
        o = n(60977);
      let i = (e) => (0, o.w)((0, r.O0)(e));
      var s = n(32623),
        a = n(77854);
      let u = (e) =>
        (function (e) {
          let t = !0,
            n = '',
            r = 0,
            o = '',
            i = !1;
          for (let s = 0; s < e.length; s++) {
            let a = e[s];
            if ((['(', ')', ','].includes(a) && (t = !0), '(' === a && r++, ')' === a && r--, t)) {
              if (0 === r) {
                if (' ' === a && ['event', 'function', ''].includes(o)) o = '';
                else if (((o += a), ')' === a)) {
                  i = !0;
                  break;
                }
                continue;
              }
              if (' ' === a) {
                ',' !== e[s - 1] && ',' !== n && ',(' !== n && ((n = ''), (t = !1));
                continue;
              }
              (o += a), (n += a);
            }
          }
          if (!i) throw new a.G('Unable to normalize signature.');
          return o;
        })('string' == typeof e ? e : (0, s.t)(e));
      function c(e) {
        return i(u(e));
      }
    },
    31517: function (e, t, n) {
      n.d(t, {
        eL: function () {
          return r;
        },
        lh: function () {
          return o;
        },
      });
      let r = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        o =
          /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
    },
    64233: function (e, t, n) {
      n.d(t, {
        F: function () {
          return c;
        },
      });
      var r = n(39858),
        o = n(59171),
        i = n(48141),
        s = n(42850),
        a = n(59134),
        u = n(84545);
      function c(e) {
        let { account: t, gasPrice: n, maxFeePerGas: c, maxPriorityFeePerGas: l, to: d } = e,
          f = t ? (0, r.T)(t) : void 0;
        if (f && !(0, u.U)(f.address)) throw new i.b({ address: f.address });
        if (d && !(0, u.U)(d)) throw new i.b({ address: d });
        if (void 0 !== n && (void 0 !== c || void 0 !== l)) throw new a.xY();
        if (c && c > o.zL) throw new s.Hh({ maxFeePerGas: c });
        if (l && c && l > c) throw new s.cs({ maxFeePerGas: c, maxPriorityFeePerGas: l });
      }
    },
  },
]);
