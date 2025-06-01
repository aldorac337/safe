'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1992],
  {
    59171: function (e, t, r) {
      r.d(t, {
        rU: function () {
          return n;
        },
        zL: function () {
          return o;
        },
      });
      let n = 2n ** 16n - 1n,
        o = 2n ** 256n - 1n;
    },
    8256: function (e, t, r) {
      r.d(t, {
        Bd: function () {
          return s;
        },
        Zn: function () {
          return o;
        },
        ez: function () {
          return n;
        },
      });
      let n = { gwei: 9, wei: 18 },
        o = { ether: -9, wei: 9 },
        s = { ether: -18, gwei: -9 };
    },
    22268: function (e, t, r) {
      r.d(t, {
        Bk: function () {
          return i;
        },
        Yl: function () {
          return s;
        },
        hJ: function () {
          return c;
        },
        mm: function () {
          return o;
        },
        pZ: function () {
          return a;
        },
      });
      var n = r(77854);
      class o extends n.G {
        constructor({ blockNumber: e, chain: t, contract: r }) {
          super(`Chain "${t.name}" does not support contract "${r.name}".`, {
            metaMessages: [
              'This could be due to any of the following:',
              ...(e && r.blockCreated && r.blockCreated > e
                ? [
                    `- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`,
                  ]
                : [`- The chain does not have the contract "${r.name}" configured.`]),
            ],
            name: 'ChainDoesNotSupportContract',
          });
        }
      }
      class s extends n.G {
        constructor({ chain: e, currentChainId: t }) {
          super(
            `The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,
            {
              metaMessages: [`Current Chain ID:  ${t}`, `Expected Chain ID: ${e.id} – ${e.name}`],
              name: 'ChainMismatchError',
            }
          );
        }
      }
      class i extends n.G {
        constructor() {
          super(
            'No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.',
            { name: 'ChainNotFoundError' }
          );
        }
      }
      class a extends n.G {
        constructor() {
          super('No chain was provided to the Client.', { name: 'ClientChainNotConfiguredError' });
        }
      }
      class c extends n.G {
        constructor({ chainId: e }) {
          super('number' == typeof e ? `Chain ID "${e}" is invalid.` : 'Chain ID is invalid.', {
            name: 'InvalidChainIdError',
          });
        }
      }
    },
    20366: function (e, t, r) {
      r.d(t, {
        KD: function () {
          return i;
        },
        T_: function () {
          return o;
        },
        lQ: function () {
          return s;
        },
      });
      var n = r(77854);
      class o extends n.G {
        constructor({ offset: e }) {
          super(`Offset \`${e}\` cannot be negative.`, { name: 'NegativeOffsetError' });
        }
      }
      class s extends n.G {
        constructor({ length: e, position: t }) {
          super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`, {
            name: 'PositionOutOfBoundsError',
          });
        }
      }
      class i extends n.G {
        constructor({ count: e, limit: t }) {
          super(`Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`, {
            name: 'RecursiveReadLimitExceededError',
          });
        }
      }
    },
    42850: function (e, t, r) {
      r.d(t, {
        C_: function () {
          return l;
        },
        G$: function () {
          return a;
        },
        Hh: function () {
          return i;
        },
        M_: function () {
          return s;
        },
        WF: function () {
          return h;
        },
        ZI: function () {
          return c;
        },
        cj: function () {
          return m;
        },
        cs: function () {
          return b;
        },
        dR: function () {
          return f;
        },
        pZ: function () {
          return p;
        },
        se: function () {
          return d;
        },
        vU: function () {
          return u;
        },
      });
      var n = r(18838),
        o = r(77854);
      class s extends o.G {
        constructor({ cause: e, message: t } = {}) {
          let r = t?.replace('execution reverted: ', '')?.replace('execution reverted', '');
          super(`Execution reverted ${r ? `with reason: ${r}` : 'for an unknown reason'}.`, {
            cause: e,
            name: 'ExecutionRevertedError',
          });
        }
      }
      Object.defineProperty(s, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 3,
      }),
        Object.defineProperty(s, 'nodeMessage', {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /execution reverted/,
        });
      class i extends o.G {
        constructor({ cause: e, maxFeePerGas: t } = {}) {
          super(
            `The fee cap (\`maxFeePerGas\`${t ? ` = ${(0, n.o)(t)} gwei` : ''}) cannot be higher than the maximum allowed value (2^256-1).`,
            { cause: e, name: 'FeeCapTooHighError' }
          );
        }
      }
      Object.defineProperty(i, 'nodeMessage', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/,
      });
      class a extends o.G {
        constructor({ cause: e, maxFeePerGas: t } = {}) {
          super(
            `The fee cap (\`maxFeePerGas\`${t ? ` = ${(0, n.o)(t)}` : ''} gwei) cannot be lower than the block base fee.`,
            { cause: e, name: 'FeeCapTooLowError' }
          );
        }
      }
      Object.defineProperty(a, 'nodeMessage', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/,
      });
      class c extends o.G {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${t ? `(${t}) ` : ''}is higher than the next one expected.`,
            { cause: e, name: 'NonceTooHighError' }
          );
        }
      }
      Object.defineProperty(c, 'nodeMessage', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce too high/,
      });
      class u extends o.G {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${t ? `(${t}) ` : ''}is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,
            { cause: e, name: 'NonceTooLowError' }
          );
        }
      }
      Object.defineProperty(u, 'nodeMessage', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce too low|transaction already imported|already known/,
      });
      class d extends o.G {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${t ? `(${t}) ` : ''}exceeds the maximum allowed nonce.`,
            { cause: e, name: 'NonceMaxValueError' }
          );
        }
      }
      Object.defineProperty(d, 'nodeMessage', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce has max value/,
      });
      class l extends o.G {
        constructor({ cause: e } = {}) {
          super(
            'The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.',
            {
              cause: e,
              metaMessages: [
                'This error could arise when the account does not have enough funds to:',
                ' - pay for the total gas fee,',
                ' - pay for the value to send.',
                ' ',
                'The cost of the transaction is calculated as `gas * gas fee + value`, where:',
                ' - `gas` is the amount of gas needed for transaction to execute,',
                ' - `gas fee` is the gas fee,',
                ' - `value` is the amount of ether to send to the recipient.',
              ],
              name: 'InsufficientFundsError',
            }
          );
        }
      }
      Object.defineProperty(l, 'nodeMessage', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /insufficient funds|exceeds transaction sender account balance/,
      });
      class h extends o.G {
        constructor({ cause: e, gas: t } = {}) {
          super(
            `The amount of gas ${t ? `(${t}) ` : ''}provided for the transaction exceeds the limit allowed for the block.`,
            { cause: e, name: 'IntrinsicGasTooHighError' }
          );
        }
      }
      Object.defineProperty(h, 'nodeMessage', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /intrinsic gas too high|gas limit reached/,
      });
      class f extends o.G {
        constructor({ cause: e, gas: t } = {}) {
          super(`The amount of gas ${t ? `(${t}) ` : ''}provided for the transaction is too low.`, {
            cause: e,
            name: 'IntrinsicGasTooLowError',
          });
        }
      }
      Object.defineProperty(f, 'nodeMessage', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /intrinsic gas too low/,
      });
      class p extends o.G {
        constructor({ cause: e }) {
          super('The transaction type is not supported for this chain.', {
            cause: e,
            name: 'TransactionTypeNotSupportedError',
          });
        }
      }
      Object.defineProperty(p, 'nodeMessage', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /transaction type not valid/,
      });
      class b extends o.G {
        constructor({ cause: e, maxPriorityFeePerGas: t, maxFeePerGas: r } = {}) {
          super(
            `The provided tip (\`maxPriorityFeePerGas\`${t ? ` = ${(0, n.o)(t)} gwei` : ''}) cannot be higher than the fee cap (\`maxFeePerGas\`${r ? ` = ${(0, n.o)(r)} gwei` : ''}).`,
            { cause: e, name: 'TipAboveFeeCapError' }
          );
        }
      }
      Object.defineProperty(b, 'nodeMessage', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/,
      });
      class m extends o.G {
        constructor({ cause: e }) {
          super(`An error occurred while executing: ${e?.shortMessage}`, {
            cause: e,
            name: 'UnknownNodeError',
          });
        }
      }
    },
    68901: function (e, t, r) {
      r.d(t, {
        Gg: function () {
          return i;
        },
        bs: function () {
          return a;
        },
      });
      var n = r(45679),
        o = r(77854),
        s = r(53509);
      class i extends o.G {
        constructor({ body: e, cause: t, details: r, headers: o, status: i, url: a }) {
          super('HTTP request failed.', {
            cause: t,
            details: r,
            metaMessages: [
              i && `Status: ${i}`,
              `URL: ${(0, s.G)(a)}`,
              e && `Request body: ${(0, n.P)(e)}`,
            ].filter(Boolean),
            name: 'HttpRequestError',
          }),
            Object.defineProperty(this, 'body', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'headers', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'status', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'url', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.body = e),
            (this.headers = o),
            (this.status = i),
            (this.url = a);
        }
      }
      class a extends o.G {
        constructor({ body: e, error: t, url: r }) {
          super('RPC Request failed.', {
            cause: t,
            details: t.message,
            metaMessages: [`URL: ${(0, s.G)(r)}`, `Request body: ${(0, n.P)(e)}`],
            name: 'RpcRequestError',
          }),
            Object.defineProperty(this, 'code', {
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
            (this.code = t.code),
            (this.data = t.data);
        }
      }
    },
    38350: function (e, t, r) {
      r.d(t, {
        B: function () {
          return c;
        },
        GD: function () {
          return v;
        },
        I0: function () {
          return $;
        },
        KB: function () {
          return b;
        },
        LX: function () {
          return u;
        },
        Og: function () {
          return f;
        },
        PE: function () {
          return y;
        },
        Pv: function () {
          return g;
        },
        Ts: function () {
          return P;
        },
        XS: function () {
          return l;
        },
        ab: function () {
          return w;
        },
        gS: function () {
          return m;
        },
        ir: function () {
          return R;
        },
        nY: function () {
          return d;
        },
        pT: function () {
          return p;
        },
        s7: function () {
          return a;
        },
        u5: function () {
          return x;
        },
        x3: function () {
          return E;
        },
        yR: function () {
          return h;
        },
      });
      var n = r(77854),
        o = r(68901);
      class s extends n.G {
        constructor(e, { code: t, docsPath: r, metaMessages: n, name: s, shortMessage: i }) {
          super(i, {
            cause: e,
            docsPath: r,
            metaMessages: n || e?.metaMessages,
            name: s || 'RpcError',
          }),
            Object.defineProperty(this, 'code', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.name = s || e.name),
            (this.code = e instanceof o.bs ? e.code : (t ?? -1));
        }
      }
      class i extends s {
        constructor(e, t) {
          super(e, t),
            Object.defineProperty(this, 'data', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = t.data);
        }
      }
      class a extends s {
        constructor(e) {
          super(e, {
            code: a.code,
            name: 'ParseRpcError',
            shortMessage:
              'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.',
          });
        }
      }
      Object.defineProperty(a, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32700,
      });
      class c extends s {
        constructor(e) {
          super(e, {
            code: c.code,
            name: 'InvalidRequestRpcError',
            shortMessage: 'JSON is not a valid request object.',
          });
        }
      }
      Object.defineProperty(c, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32600,
      });
      class u extends s {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: u.code,
            name: 'MethodNotFoundRpcError',
            shortMessage: `The method${t ? ` "${t}"` : ''} does not exist / is not available.`,
          });
        }
      }
      Object.defineProperty(u, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32601,
      });
      class d extends s {
        constructor(e) {
          super(e, {
            code: d.code,
            name: 'InvalidParamsRpcError',
            shortMessage:
              'Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters.',
          });
        }
      }
      Object.defineProperty(d, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32602,
      });
      class l extends s {
        constructor(e) {
          super(e, {
            code: l.code,
            name: 'InternalRpcError',
            shortMessage: 'An internal error was received.',
          });
        }
      }
      Object.defineProperty(l, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32603,
      });
      class h extends s {
        constructor(e) {
          super(e, {
            code: h.code,
            name: 'InvalidInputRpcError',
            shortMessage:
              'Missing or invalid parameters.\nDouble check you have provided the correct parameters.',
          });
        }
      }
      Object.defineProperty(h, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32e3,
      });
      class f extends s {
        constructor(e) {
          super(e, {
            code: f.code,
            name: 'ResourceNotFoundRpcError',
            shortMessage: 'Requested resource not found.',
          }),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'ResourceNotFoundRpcError',
            });
        }
      }
      Object.defineProperty(f, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32001,
      });
      class p extends s {
        constructor(e) {
          super(e, {
            code: p.code,
            name: 'ResourceUnavailableRpcError',
            shortMessage: 'Requested resource not available.',
          });
        }
      }
      Object.defineProperty(p, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32002,
      });
      class b extends s {
        constructor(e) {
          super(e, {
            code: b.code,
            name: 'TransactionRejectedRpcError',
            shortMessage: 'Transaction creation failed.',
          });
        }
      }
      Object.defineProperty(b, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32003,
      });
      class m extends s {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: m.code,
            name: 'MethodNotSupportedRpcError',
            shortMessage: `Method${t ? ` "${t}"` : ''} is not supported.`,
          });
        }
      }
      Object.defineProperty(m, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32004,
      });
      class g extends s {
        constructor(e) {
          super(e, {
            code: g.code,
            name: 'LimitExceededRpcError',
            shortMessage: 'Request exceeds defined limit.',
          });
        }
      }
      Object.defineProperty(g, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32005,
      });
      class v extends s {
        constructor(e) {
          super(e, {
            code: v.code,
            name: 'JsonRpcVersionUnsupportedError',
            shortMessage: 'Version of JSON-RPC protocol is not supported.',
          });
        }
      }
      Object.defineProperty(v, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32006,
      });
      class w extends i {
        constructor(e) {
          super(e, {
            code: w.code,
            name: 'UserRejectedRequestError',
            shortMessage: 'User rejected the request.',
          });
        }
      }
      Object.defineProperty(w, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4001,
      });
      class y extends i {
        constructor(e) {
          super(e, {
            code: y.code,
            name: 'UnauthorizedProviderError',
            shortMessage:
              'The requested method and/or account has not been authorized by the user.',
          });
        }
      }
      Object.defineProperty(y, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4100,
      });
      class P extends i {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: P.code,
            name: 'UnsupportedProviderMethodError',
            shortMessage: `The Provider does not support the requested method${t ? ` " ${t}"` : ''}.`,
          });
        }
      }
      Object.defineProperty(P, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4200,
      });
      class x extends i {
        constructor(e) {
          super(e, {
            code: x.code,
            name: 'ProviderDisconnectedError',
            shortMessage: 'The Provider is disconnected from all chains.',
          });
        }
      }
      Object.defineProperty(x, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4900,
      });
      class $ extends i {
        constructor(e) {
          super(e, {
            code: $.code,
            name: 'ChainDisconnectedError',
            shortMessage: 'The Provider is not connected to the requested chain.',
          });
        }
      }
      Object.defineProperty($, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4901,
      });
      class E extends i {
        constructor(e) {
          super(e, {
            code: E.code,
            name: 'SwitchChainError',
            shortMessage: 'An error occurred when attempting to switch chain.',
          });
        }
      }
      Object.defineProperty(E, 'code', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4902,
      });
      class R extends s {
        constructor(e) {
          super(e, { name: 'UnknownRpcError', shortMessage: 'An unknown RPC error occurred.' });
        }
      }
    },
    59134: function (e, t, r) {
      r.d(t, {
        Bh: function () {
          return h;
        },
        JC: function () {
          return d;
        },
        Yb: function () {
          return f;
        },
        j3: function () {
          return u;
        },
        mc: function () {
          return p;
        },
        mk: function () {
          return l;
        },
        vl: function () {
          return c;
        },
        xY: function () {
          return a;
        },
        xr: function () {
          return i;
        },
      });
      var n = r(11578),
        o = r(18838),
        s = r(77854);
      function i(e) {
        let t = Object.entries(e)
            .map(([e, t]) => (void 0 === t || !1 === t ? null : [e, t]))
            .filter(Boolean),
          r = t.reduce((e, [t]) => Math.max(e, t.length), 0);
        return t.map(([e, t]) => `  ${`${e}:`.padEnd(r + 1)}  ${t}`).join('\n');
      }
      class a extends s.G {
        constructor() {
          super(
            'Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others.',
            { name: 'FeeConflictError' }
          );
        }
      }
      class c extends s.G {
        constructor({ v: e }) {
          super(`Invalid \`v\` value "${e}". Expected 27 or 28.`, { name: 'InvalidLegacyVError' });
        }
      }
      class u extends s.G {
        constructor({ transaction: e }) {
          super('Cannot infer a transaction type from provided transaction.', {
            metaMessages: [
              'Provided Transaction:',
              '{',
              i(e),
              '}',
              '',
              'To infer the type, either provide:',
              '- a `type` to the Transaction, or',
              '- an EIP-1559 Transaction with `maxFeePerGas`, or',
              '- an EIP-2930 Transaction with `gasPrice` & `accessList`, or',
              '- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or',
              '- an EIP-7702 Transaction with `authorizationList`, or',
              '- a Legacy Transaction with `gasPrice`',
            ],
            name: 'InvalidSerializableTransactionError',
          });
        }
      }
      class d extends s.G {
        constructor({ storageKey: e }) {
          super(
            `Size for storage key "${e}" is invalid. Expected 32 bytes. Got ${Math.floor((e.length - 2) / 2)} bytes.`,
            { name: 'InvalidStorageKeySizeError' }
          );
        }
      }
      class l extends s.G {
        constructor(
          e,
          {
            account: t,
            docsPath: r,
            chain: s,
            data: a,
            gas: c,
            gasPrice: u,
            maxFeePerGas: d,
            maxPriorityFeePerGas: l,
            nonce: h,
            to: f,
            value: p,
          }
        ) {
          super(e.shortMessage, {
            cause: e,
            docsPath: r,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, ' '] : []),
              'Request Arguments:',
              i({
                chain: s && `${s?.name} (id: ${s?.id})`,
                from: t?.address,
                to: f,
                value: void 0 !== p && `${(0, n.d)(p)} ${s?.nativeCurrency?.symbol || 'ETH'}`,
                data: a,
                gas: c,
                gasPrice: void 0 !== u && `${(0, o.o)(u)} gwei`,
                maxFeePerGas: void 0 !== d && `${(0, o.o)(d)} gwei`,
                maxPriorityFeePerGas: void 0 !== l && `${(0, o.o)(l)} gwei`,
                nonce: h,
              }),
            ].filter(Boolean),
            name: 'TransactionExecutionError',
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
      class h extends s.G {
        constructor({ blockHash: e, blockNumber: t, blockTag: r, hash: n, index: o }) {
          let s = 'Transaction';
          r && void 0 !== o && (s = `Transaction at block time "${r}" at index "${o}"`),
            e && void 0 !== o && (s = `Transaction at block hash "${e}" at index "${o}"`),
            t && void 0 !== o && (s = `Transaction at block number "${t}" at index "${o}"`),
            n && (s = `Transaction with hash "${n}"`),
            super(`${s} could not be found.`, { name: 'TransactionNotFoundError' });
        }
      }
      class f extends s.G {
        constructor({ hash: e }) {
          super(
            `Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`,
            { name: 'TransactionReceiptNotFoundError' }
          );
        }
      }
      class p extends s.G {
        constructor({ hash: e }) {
          super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`, {
            name: 'WaitForTransactionReceiptTimeoutError',
          });
        }
      }
    },
    53509: function (e, t, r) {
      r.d(t, {
        C: function () {
          return n;
        },
        G: function () {
          return o;
        },
      });
      let n = (e) => e,
        o = (e) => e;
    },
    27572: function (e, t, r) {
      r.d(t, {
        q: function () {
          return s;
        },
      });
      var n = r(20366);
      let o = {
        bytes: new Uint8Array(),
        dataView: new DataView(new ArrayBuffer(0)),
        position: 0,
        positionReadCount: new Map(),
        recursiveReadCount: 0,
        recursiveReadLimit: Number.POSITIVE_INFINITY,
        assertReadLimit() {
          if (this.recursiveReadCount >= this.recursiveReadLimit)
            throw new n.KD({ count: this.recursiveReadCount + 1, limit: this.recursiveReadLimit });
        },
        assertPosition(e) {
          if (e < 0 || e > this.bytes.length - 1)
            throw new n.lQ({ length: this.bytes.length, position: e });
        },
        decrementPosition(e) {
          if (e < 0) throw new n.T_({ offset: e });
          let t = this.position - e;
          this.assertPosition(t), (this.position = t);
        },
        getReadCount(e) {
          return this.positionReadCount.get(e || this.position) || 0;
        },
        incrementPosition(e) {
          if (e < 0) throw new n.T_({ offset: e });
          let t = this.position + e;
          this.assertPosition(t), (this.position = t);
        },
        inspectByte(e) {
          let t = e ?? this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectBytes(e, t) {
          let r = t ?? this.position;
          return this.assertPosition(r + e - 1), this.bytes.subarray(r, r + e);
        },
        inspectUint8(e) {
          let t = e ?? this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectUint16(e) {
          let t = e ?? this.position;
          return this.assertPosition(t + 1), this.dataView.getUint16(t);
        },
        inspectUint24(e) {
          let t = e ?? this.position;
          return (
            this.assertPosition(t + 2),
            (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
          );
        },
        inspectUint32(e) {
          let t = e ?? this.position;
          return this.assertPosition(t + 3), this.dataView.getUint32(t);
        },
        pushByte(e) {
          this.assertPosition(this.position), (this.bytes[this.position] = e), this.position++;
        },
        pushBytes(e) {
          this.assertPosition(this.position + e.length - 1),
            this.bytes.set(e, this.position),
            (this.position += e.length);
        },
        pushUint8(e) {
          this.assertPosition(this.position), (this.bytes[this.position] = e), this.position++;
        },
        pushUint16(e) {
          this.assertPosition(this.position + 1),
            this.dataView.setUint16(this.position, e),
            (this.position += 2);
        },
        pushUint24(e) {
          this.assertPosition(this.position + 2),
            this.dataView.setUint16(this.position, e >> 8),
            this.dataView.setUint8(this.position + 2, 255 & e),
            (this.position += 3);
        },
        pushUint32(e) {
          this.assertPosition(this.position + 3),
            this.dataView.setUint32(this.position, e),
            (this.position += 4);
        },
        readByte() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectByte();
          return this.position++, e;
        },
        readBytes(e, t) {
          this.assertReadLimit(), this._touch();
          let r = this.inspectBytes(e);
          return (this.position += t ?? e), r;
        },
        readUint8() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint8();
          return (this.position += 1), e;
        },
        readUint16() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint16();
          return (this.position += 2), e;
        },
        readUint24() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint24();
          return (this.position += 3), e;
        },
        readUint32() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint32();
          return (this.position += 4), e;
        },
        get remaining() {
          return this.bytes.length - this.position;
        },
        setPosition(e) {
          let t = this.position;
          return this.assertPosition(e), (this.position = e), () => (this.position = t);
        },
        _touch() {
          if (this.recursiveReadLimit === Number.POSITIVE_INFINITY) return;
          let e = this.getReadCount();
          this.positionReadCount.set(this.position, e + 1), e > 0 && this.recursiveReadCount++;
        },
      };
      function s(e, { recursiveReadLimit: t = 8192 } = {}) {
        let r = Object.create(o);
        return (
          (r.bytes = e),
          (r.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength)),
          (r.positionReadCount = new Map()),
          (r.recursiveReadLimit = t),
          r
        );
      }
    },
    1155: function (e, t, r) {
      function n(e) {
        return 'string' == typeof e[0]
          ? o(e)
          : (function (e) {
              let t = 0;
              for (let r of e) t += r.length;
              let r = new Uint8Array(t),
                n = 0;
              for (let t of e) r.set(t, n), (n += t.length);
              return r;
            })(e);
      }
      function o(e) {
        return `0x${e.reduce((e, t) => e + t.replace('0x', ''), '')}`;
      }
      r.d(t, {
        SM: function () {
          return o;
        },
        zo: function () {
          return n;
        },
      });
    },
    36571: function (e, t, r) {
      r.d(t, {
        T4: function () {
          return u;
        },
        p5: function () {
          return d;
        },
        tP: function () {
          return i;
        },
      });
      var n = r(37014),
        o = r(13393),
        s = r(99543);
      function i(e, t, r, { strict: n } = {}) {
        return (0, o.v)(e, { strict: !1 }) ? d(e, t, r, { strict: n }) : u(e, t, r, { strict: n });
      }
      function a(e, t) {
        if ('number' == typeof t && t > 0 && t > (0, s.d)(e) - 1)
          throw new n.mV({ offset: t, position: 'start', size: (0, s.d)(e) });
      }
      function c(e, t, r) {
        if ('number' == typeof t && 'number' == typeof r && (0, s.d)(e) !== r - t)
          throw new n.mV({ offset: r, position: 'end', size: (0, s.d)(e) });
      }
      function u(e, t, r, { strict: n } = {}) {
        a(e, t);
        let o = e.slice(t, r);
        return n && c(o, t, r), o;
      }
      function d(e, t, r, { strict: n } = {}) {
        a(e, t);
        let o = `0x${e.replace('0x', '').slice((t ?? 0) * 2, (r ?? e.length) * 2)}`;
        return n && c(o, t, r), o;
      }
    },
    85182: function (e, t, r) {
      r.d(t, {
        $: function () {
          return n;
        },
      });
      function n(e, t) {
        return ({ exclude: r, format: n }) => ({
          exclude: r,
          format: (e) => {
            let o = t(e);
            if (r) for (let e of r) delete o[e];
            return { ...o, ...n(e) };
          },
          type: e,
        });
      }
    },
    14999: function (e, t, r) {
      r.d(t, {
        iy: function () {
          return a;
        },
        tG: function () {
          return i;
        },
      });
      var n = r(79150),
        o = r(85182);
      let s = { legacy: '0x0', eip2930: '0x1', eip1559: '0x2', eip4844: '0x3', eip7702: '0x4' };
      function i(e) {
        let t = {};
        return (
          void 0 !== e.authorizationList &&
            (t.authorizationList = e.authorizationList.map((e) => ({
              address: e.contractAddress,
              r: e.r,
              s: e.s,
              chainId: (0, n.eC)(e.chainId),
              nonce: (0, n.eC)(e.nonce),
              ...(void 0 !== e.yParity ? { yParity: (0, n.eC)(e.yParity) } : {}),
              ...(void 0 !== e.v && void 0 === e.yParity ? { v: (0, n.eC)(e.v) } : {}),
            }))),
          void 0 !== e.accessList && (t.accessList = e.accessList),
          void 0 !== e.blobVersionedHashes && (t.blobVersionedHashes = e.blobVersionedHashes),
          void 0 !== e.blobs &&
            ('string' != typeof e.blobs[0]
              ? (t.blobs = e.blobs.map((e) => (0, n.ci)(e)))
              : (t.blobs = e.blobs)),
          void 0 !== e.data && (t.data = e.data),
          void 0 !== e.from && (t.from = e.from),
          void 0 !== e.gas && (t.gas = (0, n.eC)(e.gas)),
          void 0 !== e.gasPrice && (t.gasPrice = (0, n.eC)(e.gasPrice)),
          void 0 !== e.maxFeePerBlobGas && (t.maxFeePerBlobGas = (0, n.eC)(e.maxFeePerBlobGas)),
          void 0 !== e.maxFeePerGas && (t.maxFeePerGas = (0, n.eC)(e.maxFeePerGas)),
          void 0 !== e.maxPriorityFeePerGas &&
            (t.maxPriorityFeePerGas = (0, n.eC)(e.maxPriorityFeePerGas)),
          void 0 !== e.nonce && (t.nonce = (0, n.eC)(e.nonce)),
          void 0 !== e.to && (t.to = e.to),
          void 0 !== e.type && (t.type = s[e.type]),
          void 0 !== e.value && (t.value = (0, n.eC)(e.value)),
          t
        );
      }
      let a = (0, o.$)('transactionRequest', i);
    },
    45679: function (e, t, r) {
      r.d(t, {
        P: function () {
          return n;
        },
      });
      let n = (e, t, r) =>
        JSON.stringify(
          e,
          (e, r) => {
            let n = 'bigint' == typeof r ? r.toString() : r;
            return 'function' == typeof t ? t(e, n) : n;
          },
          r
        );
    },
    11578: function (e, t, r) {
      r.d(t, {
        d: function () {
          return s;
        },
      });
      var n = r(8256),
        o = r(92381);
      function s(e, t = 'wei') {
        return (0, o.b)(e, n.ez[t]);
      }
    },
    18838: function (e, t, r) {
      r.d(t, {
        o: function () {
          return s;
        },
      });
      var n = r(8256),
        o = r(92381);
      function s(e, t = 'wei') {
        return (0, o.b)(e, n.Zn[t]);
      }
    },
    92381: function (e, t, r) {
      r.d(t, {
        b: function () {
          return n;
        },
      });
      function n(e, t) {
        let r = e.toString(),
          n = r.startsWith('-');
        n && (r = r.slice(1));
        let [o, s] = [(r = r.padStart(t, '0')).slice(0, r.length - t), r.slice(r.length - t)];
        return (s = s.replace(/(0+)$/, '')), `${n ? '-' : ''}${o || '0'}${s ? `.${s}` : ''}`;
      }
    },
  },
]);
