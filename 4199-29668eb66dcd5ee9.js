'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4199],
  {
    44199: function (e, t, r) {
      r.r(t),
        r.d(t, {
          AlchemyProvider: function () {
            return v;
          },
          AlchemyWebSocketProvider: function () {
            return y;
          },
          AnkrProvider: function () {
            return R;
          },
          BaseProvider: function () {
            return s.Zk;
          },
          CloudflareProvider: function () {
            return S;
          },
          EtherscanProvider: function () {
            return q;
          },
          FallbackProvider: function () {
            return te;
          },
          Formatter: function () {
            return a.Mb;
          },
          InfuraProvider: function () {
            return ie;
          },
          InfuraWebSocketProvider: function () {
            return se;
          },
          IpcProvider: function () {
            return re;
          },
          JsonRpcBatchProvider: function () {
            return ae;
          },
          JsonRpcProvider: function () {
            return l.r;
          },
          JsonRpcSigner: function () {
            return l.C;
          },
          NodesmithProvider: function () {
            return le;
          },
          PocketProvider: function () {
            return de;
          },
          Provider: function () {
            return o.zt;
          },
          Resolver: function () {
            return s.H2;
          },
          StaticJsonRpcProvider: function () {
            return b.c;
          },
          UrlJsonRpcProvider: function () {
            return b.l;
          },
          Web3Provider: function () {
            return pe.Q;
          },
          WebSocketProvider: function () {
            return f;
          },
          getDefaultProvider: function () {
            return me;
          },
          getNetwork: function () {
            return n.H;
          },
          isCommunityResourcable: function () {
            return a.Ed;
          },
          isCommunityResource: function () {
            return a.Gp;
          },
          showThrottleMessage: function () {
            return a.vh;
          },
        });
      var o = r(81556),
        n = r(45710),
        s = r(97013),
        i = r(6881),
        a = r(30032),
        c = r(2593),
        l = r(79098),
        u = r(1581),
        h = r(34216);
      let d = null;
      try {
        if (((d = WebSocket), null == d)) throw new Error('inject please');
      } catch (fe) {
        const e = new u.Logger(h.i);
        d = function () {
          e.throwError(
            'WebSockets not supported in this environment',
            u.Logger.errors.UNSUPPORTED_OPERATION,
            { operation: 'new WebSocket()' }
          );
        };
      }
      var p = function (e, t, r, o) {
        return new (r || (r = Promise))(function (n, s) {
          function i(e) {
            try {
              c(o.next(e));
            } catch (t) {
              s(t);
            }
          }
          function a(e) {
            try {
              c(o.throw(e));
            } catch (t) {
              s(t);
            }
          }
          function c(e) {
            var t;
            e.done
              ? n(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(i, a);
          }
          c((o = o.apply(e, t || [])).next());
        });
      };
      const g = new u.Logger(h.i);
      let m = 1;
      class f extends l.r {
        constructor(e, t) {
          'any' === t &&
            g.throwError(
              "WebSocketProvider does not support 'any' network yet",
              u.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: 'network:any' }
            ),
            super('string' === typeof e ? e : '_websocket', t),
            (this._pollingInterval = -1),
            (this._wsReady = !1),
            'string' === typeof e
              ? (0, i.defineReadOnly)(this, '_websocket', new d(this.connection.url))
              : (0, i.defineReadOnly)(this, '_websocket', e),
            (0, i.defineReadOnly)(this, '_requests', {}),
            (0, i.defineReadOnly)(this, '_subs', {}),
            (0, i.defineReadOnly)(this, '_subIds', {}),
            (0, i.defineReadOnly)(this, '_detectNetwork', super.detectNetwork()),
            (this.websocket.onopen = () => {
              (this._wsReady = !0),
                Object.keys(this._requests).forEach((e) => {
                  this.websocket.send(this._requests[e].payload);
                });
            }),
            (this.websocket.onmessage = (e) => {
              const t = e.data,
                r = JSON.parse(t);
              if (null != r.id) {
                const e = String(r.id),
                  o = this._requests[e];
                if ((delete this._requests[e], void 0 !== r.result))
                  o.callback(null, r.result),
                    this.emit('debug', {
                      action: 'response',
                      request: JSON.parse(o.payload),
                      response: r.result,
                      provider: this,
                    });
                else {
                  let e = null;
                  r.error
                    ? ((e = new Error(r.error.message || 'unknown error')),
                      (0, i.defineReadOnly)(e, 'code', r.error.code || null),
                      (0, i.defineReadOnly)(e, 'response', t))
                    : (e = new Error('unknown error')),
                    o.callback(e, void 0),
                    this.emit('debug', {
                      action: 'response',
                      error: e,
                      request: JSON.parse(o.payload),
                      provider: this,
                    });
                }
              } else if ('eth_subscription' === r.method) {
                const e = this._subs[r.params.subscription];
                e && e.processFunc(r.params.result);
              } else console.warn('this should not happen');
            });
          const r = setInterval(() => {
            this.emit('poll');
          }, 1e3);
          r.unref && r.unref();
        }
        get websocket() {
          return this._websocket;
        }
        detectNetwork() {
          return this._detectNetwork;
        }
        get pollingInterval() {
          return 0;
        }
        resetEventsBlock(e) {
          g.throwError(
            'cannot reset events block on WebSocketProvider',
            u.Logger.errors.UNSUPPORTED_OPERATION,
            { operation: 'resetEventBlock' }
          );
        }
        set pollingInterval(e) {
          g.throwError(
            'cannot set polling interval on WebSocketProvider',
            u.Logger.errors.UNSUPPORTED_OPERATION,
            { operation: 'setPollingInterval' }
          );
        }
        poll() {
          return p(this, void 0, void 0, function* () {
            return null;
          });
        }
        set polling(e) {
          e &&
            g.throwError(
              'cannot set polling on WebSocketProvider',
              u.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: 'setPolling' }
            );
        }
        send(e, t) {
          const r = m++;
          return new Promise((o, n) => {
            const s = JSON.stringify({ method: e, params: t, id: r, jsonrpc: '2.0' });
            this.emit('debug', { action: 'request', request: JSON.parse(s), provider: this }),
              (this._requests[String(r)] = {
                callback: function (e, t) {
                  return e ? n(e) : o(t);
                },
                payload: s,
              }),
              this._wsReady && this.websocket.send(s);
          });
        }
        static defaultUrl() {
          return 'ws://localhost:8546';
        }
        _subscribe(e, t, r) {
          return p(this, void 0, void 0, function* () {
            let o = this._subIds[e];
            null == o &&
              ((o = Promise.all(t).then((e) => this.send('eth_subscribe', e))),
              (this._subIds[e] = o));
            const n = yield o;
            this._subs[n] = { tag: e, processFunc: r };
          });
        }
        _startEvent(e) {
          switch (e.type) {
            case 'block':
              this._subscribe('block', ['newHeads'], (e) => {
                const t = c.O$.from(e.number).toNumber();
                (this._emitted.block = t), this.emit('block', t);
              });
              break;
            case 'pending':
              this._subscribe('pending', ['newPendingTransactions'], (e) => {
                this.emit('pending', e);
              });
              break;
            case 'filter':
              this._subscribe(e.tag, ['logs', this._getFilter(e.filter)], (t) => {
                null == t.removed && (t.removed = !1),
                  this.emit(e.filter, this.formatter.filterLog(t));
              });
              break;
            case 'tx': {
              const t = (e) => {
                const t = e.hash;
                this.getTransactionReceipt(t).then((e) => {
                  e && this.emit(t, e);
                });
              };
              t(e),
                this._subscribe('tx', ['newHeads'], (e) => {
                  this._events.filter((e) => 'tx' === e.type).forEach(t);
                });
              break;
            }
            case 'debug':
            case 'poll':
            case 'willPoll':
            case 'didPoll':
            case 'error':
              break;
            default:
              console.log('unhandled:', e);
          }
        }
        _stopEvent(e) {
          let t = e.tag;
          if ('tx' === e.type) {
            if (this._events.filter((e) => 'tx' === e.type).length) return;
            t = 'tx';
          } else if (this.listenerCount(e.event)) return;
          const r = this._subIds[t];
          r &&
            (delete this._subIds[t],
            r.then((e) => {
              this._subs[e] && (delete this._subs[e], this.send('eth_unsubscribe', [e]));
            }));
        }
        destroy() {
          return p(this, void 0, void 0, function* () {
            this.websocket.readyState === d.CONNECTING &&
              (yield new Promise((e) => {
                (this.websocket.onopen = function () {
                  e(!0);
                }),
                  (this.websocket.onerror = function () {
                    e(!1);
                  });
              })),
              this.websocket.close(1e3);
          });
        }
      }
      var b = r(93901);
      const k = new u.Logger(h.i),
        w = '_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC';
      class y extends f {
        constructor(e, t) {
          const r = new v(e, t);
          super(
            r.connection.url.replace(/^http/i, 'ws').replace('.alchemyapi.', '.ws.alchemyapi.'),
            r.network
          ),
            (0, i.defineReadOnly)(this, 'apiKey', r.apiKey);
        }
        isCommunityResource() {
          return this.apiKey === w;
        }
      }
      class v extends b.l {
        static getWebSocketProvider(e, t) {
          return new y(e, t);
        }
        static getApiKey(e) {
          return null == e
            ? w
            : (e && 'string' !== typeof e && k.throwArgumentError('invalid apiKey', 'apiKey', e),
              e);
        }
        static getUrl(e, t) {
          let r = null;
          switch (e.name) {
            case 'homestead':
              r = 'eth-mainnet.alchemyapi.io/v2/';
              break;
            case 'goerli':
              r = 'eth-goerli.g.alchemy.com/v2/';
              break;
            case 'matic':
              r = 'polygon-mainnet.g.alchemy.com/v2/';
              break;
            case 'maticmum':
              r = 'polygon-mumbai.g.alchemy.com/v2/';
              break;
            case 'arbitrum':
              r = 'arb-mainnet.g.alchemy.com/v2/';
              break;
            case 'arbitrum-goerli':
              r = 'arb-goerli.g.alchemy.com/v2/';
              break;
            case 'optimism':
              r = 'opt-mainnet.g.alchemy.com/v2/';
              break;
            case 'optimism-goerli':
              r = 'opt-goerli.g.alchemy.com/v2/';
              break;
            default:
              k.throwArgumentError('unsupported network', 'network', arguments[0]);
          }
          return {
            allowGzip: !0,
            url: 'https://' + r + t,
            throttleCallback: (e, r) => (t === w && (0, a.vh)(), Promise.resolve(!0)),
          };
        }
        isCommunityResource() {
          return this.apiKey === w;
        }
      }
      const E = new u.Logger(h.i),
        P = '9f7d929b018cdffb338517efa06f58359e86ff1ffd350bc889738523659e7972';
      function _(e) {
        switch (e) {
          case 'homestead':
            return 'rpc.ankr.com/eth/';
          case 'ropsten':
            return 'rpc.ankr.com/eth_ropsten/';
          case 'rinkeby':
            return 'rpc.ankr.com/eth_rinkeby/';
          case 'goerli':
            return 'rpc.ankr.com/eth_goerli/';
          case 'matic':
            return 'rpc.ankr.com/polygon/';
          case 'arbitrum':
            return 'rpc.ankr.com/arbitrum/';
        }
        return E.throwArgumentError('unsupported network', 'name', e);
      }
      class R extends b.l {
        isCommunityResource() {
          return this.apiKey === P;
        }
        static getApiKey(e) {
          return null == e ? P : e;
        }
        static getUrl(e, t) {
          null == t && (t = P);
          const r = {
            allowGzip: !0,
            url: 'https://' + _(e.name) + t,
            throttleCallback: (e, r) => (t.apiKey === P && (0, a.vh)(), Promise.resolve(!0)),
          };
          return null != t.projectSecret && ((r.user = ''), (r.password = t.projectSecret)), r;
        }
      }
      var N = function (e, t, r, o) {
        return new (r || (r = Promise))(function (n, s) {
          function i(e) {
            try {
              c(o.next(e));
            } catch (t) {
              s(t);
            }
          }
          function a(e) {
            try {
              c(o.throw(e));
            } catch (t) {
              s(t);
            }
          }
          function c(e) {
            var t;
            e.done
              ? n(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(i, a);
          }
          c((o = o.apply(e, t || [])).next());
        });
      };
      const T = new u.Logger(h.i);
      class S extends b.l {
        static getApiKey(e) {
          return (
            null != e && T.throwArgumentError('apiKey not supported for cloudflare', 'apiKey', e),
            null
          );
        }
        static getUrl(e, t) {
          let r = null;
          if ('homestead' === e.name) r = 'https://cloudflare-eth.com/';
          else T.throwArgumentError('unsupported network', 'network', arguments[0]);
          return r;
        }
        perform(e, t) {
          const r = Object.create(null, { perform: { get: () => super.perform } });
          return N(this, void 0, void 0, function* () {
            if ('getBlockNumber' === e) {
              return (yield r.perform.call(this, 'getBlock', { blockTag: 'latest' })).number;
            }
            return r.perform.call(this, e, t);
          });
        }
      }
      var O = r(16441),
        I = r(83875),
        x = r(37707),
        A = function (e, t, r, o) {
          return new (r || (r = Promise))(function (n, s) {
            function i(e) {
              try {
                c(o.next(e));
              } catch (t) {
                s(t);
              }
            }
            function a(e) {
              try {
                c(o.throw(e));
              } catch (t) {
                s(t);
              }
            }
            function c(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })).then(i, a);
            }
            c((o = o.apply(e, t || [])).next());
          });
        };
      const C = new u.Logger(h.i);
      function j(e) {
        const t = {};
        for (let r in e) {
          if (null == e[r]) continue;
          let o = e[r];
          ('type' === r && 0 === o) ||
            ((o = {
              type: !0,
              gasLimit: !0,
              gasPrice: !0,
              maxFeePerGs: !0,
              maxPriorityFeePerGas: !0,
              nonce: !0,
              value: !0,
            }[r]
              ? (0, O.hexValue)((0, O.hexlify)(o))
              : 'accessList' === r
                ? '[' +
                  (0, I.accessListify)(o)
                    .map(
                      (e) => `{address:"${e.address}",storageKeys:["${e.storageKeys.join('","')}"]}`
                    )
                    .join(',') +
                  ']'
                : (0, O.hexlify)(o)),
            (t[r] = o));
        }
        return t;
      }
      function L(e) {
        if (
          0 == e.status &&
          ('No records found' === e.message || 'No transactions found' === e.message)
        )
          return e.result;
        if (1 != e.status || 'string' !== typeof e.message || !e.message.match(/^OK/)) {
          const t = new Error('invalid response');
          throw (
            ((t.result = JSON.stringify(e)),
            (e.result || '').toLowerCase().indexOf('rate limit') >= 0 && (t.throttleRetry = !0),
            t)
          );
        }
        return e.result;
      }
      function B(e) {
        if (
          e &&
          0 == e.status &&
          'NOTOK' == e.message &&
          (e.result || '').toLowerCase().indexOf('rate limit') >= 0
        ) {
          const t = new Error('throttled response');
          throw ((t.result = JSON.stringify(e)), (t.throttleRetry = !0), t);
        }
        if ('2.0' != e.jsonrpc) {
          const t = new Error('invalid response');
          throw ((t.result = JSON.stringify(e)), t);
        }
        if (e.error) {
          const t = new Error(e.error.message || 'unknown error');
          throw (
            (e.error.code && (t.code = e.error.code), e.error.data && (t.data = e.error.data), t)
          );
        }
        return e.result;
      }
      function U(e) {
        if ('pending' === e) throw new Error('pending not supported');
        return 'latest' === e ? e : parseInt(e.substring(2), 16);
      }
      function K(e, t, r) {
        if ('call' === e && t.code === u.Logger.errors.SERVER_ERROR) {
          const e = t.error;
          if (e && (e.message.match(/reverted/i) || e.message.match(/VM execution error/i))) {
            let r = e.data;
            if ((r && (r = '0x' + r.replace(/^.*0x/i, '')), (0, O.isHexString)(r))) return r;
            C.throwError('missing revert data in call exception', u.Logger.errors.CALL_EXCEPTION, {
              error: t,
              data: '0x',
            });
          }
        }
        let o = t.message;
        throw (
          (t.code === u.Logger.errors.SERVER_ERROR &&
            (t.error && 'string' === typeof t.error.message
              ? (o = t.error.message)
              : 'string' === typeof t.body
                ? (o = t.body)
                : 'string' === typeof t.responseText && (o = t.responseText)),
          (o = (o || '').toLowerCase()),
          o.match(/insufficient funds/) &&
            C.throwError(
              'insufficient funds for intrinsic transaction cost',
              u.Logger.errors.INSUFFICIENT_FUNDS,
              { error: t, method: e, transaction: r }
            ),
          o.match(/same hash was already imported|transaction nonce is too low|nonce too low/) &&
            C.throwError('nonce has already been used', u.Logger.errors.NONCE_EXPIRED, {
              error: t,
              method: e,
              transaction: r,
            }),
          o.match(/another transaction with same nonce/) &&
            C.throwError('replacement fee too low', u.Logger.errors.REPLACEMENT_UNDERPRICED, {
              error: t,
              method: e,
              transaction: r,
            }),
          o.match(/execution failed due to an exception|execution reverted/) &&
            C.throwError(
              'cannot estimate gas; transaction may fail or may require manual gas limit',
              u.Logger.errors.UNPREDICTABLE_GAS_LIMIT,
              { error: t, method: e, transaction: r }
            ),
          t)
        );
      }
      class q extends s.Zk {
        constructor(e, t) {
          super(e),
            (0, i.defineReadOnly)(this, 'baseUrl', this.getBaseUrl()),
            (0, i.defineReadOnly)(this, 'apiKey', t || null);
        }
        getBaseUrl() {
          switch (this.network ? this.network.name : 'invalid') {
            case 'homestead':
              return 'https://api.etherscan.io';
            case 'goerli':
              return 'https://api-goerli.etherscan.io';
            case 'sepolia':
              return 'https://api-sepolia.etherscan.io';
            case 'matic':
              return 'https://api.polygonscan.com';
            case 'maticmum':
              return 'https://api-testnet.polygonscan.com';
            case 'arbitrum':
              return 'https://api.arbiscan.io';
            case 'arbitrum-goerli':
              return 'https://api-goerli.arbiscan.io';
            case 'optimism':
              return 'https://api-optimistic.etherscan.io';
            case 'optimism-goerli':
              return 'https://api-goerli-optimistic.etherscan.io';
          }
          return C.throwArgumentError('unsupported network', 'network', this.network.name);
        }
        getUrl(e, t) {
          const r = Object.keys(t).reduce((e, r) => {
              const o = t[r];
              return null != o && (e += `&${r}=${o}`), e;
            }, ''),
            o = this.apiKey ? `&apikey=${this.apiKey}` : '';
          return `${this.baseUrl}/api?module=${e}${r}${o}`;
        }
        getPostUrl() {
          return `${this.baseUrl}/api`;
        }
        getPostData(e, t) {
          return (t.module = e), (t.apikey = this.apiKey), t;
        }
        fetch(e, t, r) {
          return A(this, void 0, void 0, function* () {
            const o = r ? this.getPostUrl() : this.getUrl(e, t),
              n = r ? this.getPostData(e, t) : null,
              s = 'proxy' === e ? B : L;
            this.emit('debug', { action: 'request', request: o, provider: this });
            const c = {
              url: o,
              throttleSlotInterval: 1e3,
              throttleCallback: (e, t) => (
                this.isCommunityResource() && (0, a.vh)(), Promise.resolve(!0)
              ),
            };
            let l = null;
            n &&
              ((c.headers = { 'content-type': 'application/x-www-form-urlencoded; charset=UTF-8' }),
              (l = Object.keys(n)
                .map((e) => `${e}=${n[e]}`)
                .join('&')));
            const u = yield (0, x.fetchJson)(c, l, s || B);
            return (
              this.emit('debug', {
                action: 'response',
                request: o,
                response: (0, i.deepCopy)(u),
                provider: this,
              }),
              u
            );
          });
        }
        detectNetwork() {
          return A(this, void 0, void 0, function* () {
            return this.network;
          });
        }
        perform(e, t) {
          const r = Object.create(null, { perform: { get: () => super.perform } });
          return A(this, void 0, void 0, function* () {
            switch (e) {
              case 'getBlockNumber':
                return this.fetch('proxy', { action: 'eth_blockNumber' });
              case 'getGasPrice':
                return this.fetch('proxy', { action: 'eth_gasPrice' });
              case 'getBalance':
                return this.fetch('account', {
                  action: 'balance',
                  address: t.address,
                  tag: t.blockTag,
                });
              case 'getTransactionCount':
                return this.fetch('proxy', {
                  action: 'eth_getTransactionCount',
                  address: t.address,
                  tag: t.blockTag,
                });
              case 'getCode':
                return this.fetch('proxy', {
                  action: 'eth_getCode',
                  address: t.address,
                  tag: t.blockTag,
                });
              case 'getStorageAt':
                return this.fetch('proxy', {
                  action: 'eth_getStorageAt',
                  address: t.address,
                  position: t.position,
                  tag: t.blockTag,
                });
              case 'sendTransaction':
                return this.fetch(
                  'proxy',
                  { action: 'eth_sendRawTransaction', hex: t.signedTransaction },
                  !0
                ).catch((e) => K('sendTransaction', e, t.signedTransaction));
              case 'getBlock':
                if (t.blockTag)
                  return this.fetch('proxy', {
                    action: 'eth_getBlockByNumber',
                    tag: t.blockTag,
                    boolean: t.includeTransactions ? 'true' : 'false',
                  });
                throw new Error('getBlock by blockHash not implemented');
              case 'getTransaction':
                return this.fetch('proxy', {
                  action: 'eth_getTransactionByHash',
                  txhash: t.transactionHash,
                });
              case 'getTransactionReceipt':
                return this.fetch('proxy', {
                  action: 'eth_getTransactionReceipt',
                  txhash: t.transactionHash,
                });
              case 'call': {
                if ('latest' !== t.blockTag)
                  throw new Error('EtherscanProvider does not support blockTag for call');
                const e = j(t.transaction);
                (e.module = 'proxy'), (e.action = 'eth_call');
                try {
                  return yield this.fetch('proxy', e, !0);
                } catch (fe) {
                  return K('call', fe, t.transaction);
                }
              }
              case 'estimateGas': {
                const e = j(t.transaction);
                (e.module = 'proxy'), (e.action = 'eth_estimateGas');
                try {
                  return yield this.fetch('proxy', e, !0);
                } catch (fe) {
                  return K('estimateGas', fe, t.transaction);
                }
              }
              case 'getLogs': {
                const e = { action: 'getLogs' };
                if (
                  (t.filter.fromBlock && (e.fromBlock = U(t.filter.fromBlock)),
                  t.filter.toBlock && (e.toBlock = U(t.filter.toBlock)),
                  t.filter.address && (e.address = t.filter.address),
                  t.filter.topics &&
                    t.filter.topics.length > 0 &&
                    (t.filter.topics.length > 1 &&
                      C.throwError(
                        'unsupported topic count',
                        u.Logger.errors.UNSUPPORTED_OPERATION,
                        { topics: t.filter.topics }
                      ),
                    1 === t.filter.topics.length))
                ) {
                  const r = t.filter.topics[0];
                  ('string' === typeof r && 66 === r.length) ||
                    C.throwError(
                      'unsupported topic format',
                      u.Logger.errors.UNSUPPORTED_OPERATION,
                      { topic0: r }
                    ),
                    (e.topic0 = r);
                }
                const r = yield this.fetch('logs', e);
                let o = {};
                for (let t = 0; t < r.length; t++) {
                  const e = r[t];
                  if (null == e.blockHash) {
                    if (null == o[e.blockNumber]) {
                      const t = yield this.getBlock(e.blockNumber);
                      t && (o[e.blockNumber] = t.hash);
                    }
                    e.blockHash = o[e.blockNumber];
                  }
                }
                return r;
              }
              case 'getEtherPrice':
                return 'homestead' !== this.network.name
                  ? 0
                  : parseFloat((yield this.fetch('stats', { action: 'ethprice' })).ethusd);
            }
            return r.perform.call(this, e, t);
          });
        }
        getHistory(e, t, r) {
          return A(this, void 0, void 0, function* () {
            const o = {
              action: 'txlist',
              address: yield this.resolveName(e),
              startblock: null == t ? 0 : t,
              endblock: null == r ? 99999999 : r,
              sort: 'asc',
            };
            return (yield this.fetch('account', o)).map((e) => {
              ['contractAddress', 'to'].forEach(function (t) {
                '' == e[t] && delete e[t];
              }),
                null == e.creates && null != e.contractAddress && (e.creates = e.contractAddress);
              const t = this.formatter.transactionResponse(e);
              return e.timeStamp && (t.timestamp = parseInt(e.timeStamp)), t;
            });
          });
        }
        isCommunityResource() {
          return null == this.apiKey;
        }
      }
      var D = r(52472),
        H = function (e, t, r, o) {
          return new (r || (r = Promise))(function (n, s) {
            function i(e) {
              try {
                c(o.next(e));
              } catch (t) {
                s(t);
              }
            }
            function a(e) {
              try {
                c(o.throw(e));
              } catch (t) {
                s(t);
              }
            }
            function c(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })).then(i, a);
            }
            c((o = o.apply(e, t || [])).next());
          });
        };
      const G = new u.Logger(h.i);
      function J() {
        return new Date().getTime();
      }
      function W(e) {
        let t = null;
        for (let r = 0; r < e.length; r++) {
          const o = e[r];
          if (null == o) return null;
          t
            ? (t.name === o.name &&
                t.chainId === o.chainId &&
                (t.ensAddress === o.ensAddress ||
                  (null == t.ensAddress && null == o.ensAddress))) ||
              G.throwArgumentError('provider mismatch', 'networks', e)
            : (t = o);
        }
        return t;
      }
      function F(e, t) {
        e = e.slice().sort();
        const r = Math.floor(e.length / 2);
        if (e.length % 2) return e[r];
        const o = e[r - 1],
          n = e[r];
        return null != t && Math.abs(o - n) > t ? null : (o + n) / 2;
      }
      function $(e) {
        if (null === e) return 'null';
        if ('number' === typeof e || 'boolean' === typeof e) return JSON.stringify(e);
        if ('string' === typeof e) return e;
        if (c.O$.isBigNumber(e)) return e.toString();
        if (Array.isArray(e)) return JSON.stringify(e.map((e) => $(e)));
        if ('object' === typeof e) {
          const t = Object.keys(e);
          return (
            t.sort(),
            '{' +
              t
                .map((t) => {
                  let r = e[t];
                  return (
                    (r = 'function' === typeof r ? '[function]' : $(r)), JSON.stringify(t) + ':' + r
                  );
                })
                .join(',') +
              '}'
          );
        }
        throw new Error('unknown value type: ' + typeof e);
      }
      let M = 1;
      function z(e) {
        let t = null,
          r = null,
          o = new Promise((o) => {
            (t = function () {
              r && (clearTimeout(r), (r = null)), o();
            }),
              (r = setTimeout(t, e));
          });
        return {
          cancel: t,
          getPromise: function () {
            return o;
          },
          wait: (e) => ((o = o.then(e)), o),
        };
      }
      const V = [
          u.Logger.errors.CALL_EXCEPTION,
          u.Logger.errors.INSUFFICIENT_FUNDS,
          u.Logger.errors.NONCE_EXPIRED,
          u.Logger.errors.REPLACEMENT_UNDERPRICED,
          u.Logger.errors.UNPREDICTABLE_GAS_LIMIT,
        ],
        X = ['address', 'args', 'errorArgs', 'errorSignature', 'method', 'transaction'];
      function Z(e, t) {
        const r = { weight: e.weight };
        return (
          Object.defineProperty(r, 'provider', { get: () => e.provider }),
          e.start && (r.start = e.start),
          t && (r.duration = t - e.start),
          e.done && (e.error ? (r.error = e.error) : (r.result = e.result || null)),
          r
        );
      }
      function Q(e, t, r) {
        let o = $;
        switch (t) {
          case 'getBlockNumber':
            return function (t) {
              const r = t.map((e) => e.result);
              let o = F(
                t.map((e) => e.result),
                2
              );
              if (null != o)
                return (
                  (o = Math.ceil(o)),
                  r.indexOf(o + 1) >= 0 && o++,
                  o >= e._highestBlockNumber && (e._highestBlockNumber = o),
                  e._highestBlockNumber
                );
            };
          case 'getGasPrice':
            return function (e) {
              const t = e.map((e) => e.result);
              return t.sort(), t[Math.floor(t.length / 2)];
            };
          case 'getEtherPrice':
            return function (e) {
              return F(e.map((e) => e.result));
            };
          case 'getBalance':
          case 'getTransactionCount':
          case 'getCode':
          case 'getStorageAt':
          case 'call':
          case 'estimateGas':
          case 'getLogs':
            break;
          case 'getTransaction':
          case 'getTransactionReceipt':
            o = function (e) {
              return null == e ? null : (((e = (0, i.shallowCopy)(e)).confirmations = -1), $(e));
            };
            break;
          case 'getBlock':
            o = r.includeTransactions
              ? function (e) {
                  return null == e
                    ? null
                    : (((e = (0, i.shallowCopy)(e)).transactions = e.transactions.map(
                        (e) => (((e = (0, i.shallowCopy)(e)).confirmations = -1), e)
                      )),
                      $(e));
                }
              : function (e) {
                  return null == e ? null : $(e);
                };
            break;
          default:
            throw new Error('unknown method: ' + t);
        }
        return (function (e, t) {
          return function (r) {
            const o = {};
            r.forEach((t) => {
              const r = e(t.result);
              o[r] || (o[r] = { count: 0, result: t.result }), o[r].count++;
            });
            const n = Object.keys(o);
            for (let e = 0; e < n.length; e++) {
              const r = o[n[e]];
              if (r.count >= t) return r.result;
            }
          };
        })(o, e.quorum);
      }
      function Y(e, t) {
        return H(this, void 0, void 0, function* () {
          const r = e.provider;
          return (null != r.blockNumber && r.blockNumber >= t) || -1 === t
            ? r
            : (0, x.poll)(
                () =>
                  new Promise((o, n) => {
                    setTimeout(function () {
                      return r.blockNumber >= t ? o(r) : e.cancelled ? o(null) : o(void 0);
                    }, 0);
                  }),
                { oncePoll: r }
              );
        });
      }
      function ee(e, t, r, o) {
        return H(this, void 0, void 0, function* () {
          let n = e.provider;
          switch (r) {
            case 'getBlockNumber':
            case 'getGasPrice':
              return n[r]();
            case 'getEtherPrice':
              if (n.getEtherPrice) return n.getEtherPrice();
              break;
            case 'getBalance':
            case 'getTransactionCount':
            case 'getCode':
              return (
                o.blockTag && (0, O.isHexString)(o.blockTag) && (n = yield Y(e, t)),
                n[r](o.address, o.blockTag || 'latest')
              );
            case 'getStorageAt':
              return (
                o.blockTag && (0, O.isHexString)(o.blockTag) && (n = yield Y(e, t)),
                n.getStorageAt(o.address, o.position, o.blockTag || 'latest')
              );
            case 'getBlock':
              return (
                o.blockTag && (0, O.isHexString)(o.blockTag) && (n = yield Y(e, t)),
                n[o.includeTransactions ? 'getBlockWithTransactions' : 'getBlock'](
                  o.blockTag || o.blockHash
                )
              );
            case 'call':
            case 'estimateGas':
              return (
                o.blockTag && (0, O.isHexString)(o.blockTag) && (n = yield Y(e, t)),
                'call' === r && o.blockTag ? n[r](o.transaction, o.blockTag) : n[r](o.transaction)
              );
            case 'getTransaction':
            case 'getTransactionReceipt':
              return n[r](o.transactionHash);
            case 'getLogs': {
              let r = o.filter;
              return (
                ((r.fromBlock && (0, O.isHexString)(r.fromBlock)) ||
                  (r.toBlock && (0, O.isHexString)(r.toBlock))) &&
                  (n = yield Y(e, t)),
                n.getLogs(r)
              );
            }
          }
          return G.throwError('unknown method error', u.Logger.errors.UNKNOWN_ERROR, {
            method: r,
            params: o,
          });
        });
      }
      class te extends s.Zk {
        constructor(e, t) {
          0 === e.length && G.throwArgumentError('missing providers', 'providers', e);
          const r = e.map((e, t) => {
              if (o.zt.isProvider(e)) {
                const t = (0, a.Gp)(e) ? 2e3 : 750,
                  r = 1;
                return Object.freeze({ provider: e, weight: 1, stallTimeout: t, priority: r });
              }
              const r = (0, i.shallowCopy)(e);
              null == r.priority && (r.priority = 1),
                null == r.stallTimeout && (r.stallTimeout = (0, a.Gp)(e) ? 2e3 : 750),
                null == r.weight && (r.weight = 1);
              const n = r.weight;
              return (
                (n % 1 || n > 512 || n < 1) &&
                  G.throwArgumentError(
                    'invalid weight; must be integer in [1, 512]',
                    `providers[${t}].weight`,
                    n
                  ),
                Object.freeze(r)
              );
            }),
            n = r.reduce((e, t) => e + t.weight, 0);
          null == t
            ? (t = n / 2)
            : t > n &&
              G.throwArgumentError(
                'quorum will always fail; larger than total weight',
                'quorum',
                t
              );
          let s = W(r.map((e) => e.provider.network));
          null == s &&
            (s = new Promise((e, t) => {
              setTimeout(() => {
                this.detectNetwork().then(e, t);
              }, 0);
            })),
            super(s),
            (0, i.defineReadOnly)(this, 'providerConfigs', Object.freeze(r)),
            (0, i.defineReadOnly)(this, 'quorum', t),
            (this._highestBlockNumber = -1);
        }
        detectNetwork() {
          return H(this, void 0, void 0, function* () {
            return W(yield Promise.all(this.providerConfigs.map((e) => e.provider.getNetwork())));
          });
        }
        perform(e, t) {
          return H(this, void 0, void 0, function* () {
            if ('sendTransaction' === e) {
              const e = yield Promise.all(
                this.providerConfigs.map((e) =>
                  e.provider.sendTransaction(t.signedTransaction).then(
                    (e) => e.hash,
                    (e) => e
                  )
                )
              );
              for (let t = 0; t < e.length; t++) {
                const r = e[t];
                if ('string' === typeof r) return r;
              }
              throw e[0];
            }
            -1 === this._highestBlockNumber &&
              'getBlockNumber' !== e &&
              (yield this.getBlockNumber());
            const r = Q(this, e, t),
              o = (0, D.y)(this.providerConfigs.map(i.shallowCopy));
            o.sort((e, t) => e.priority - t.priority);
            const n = this._highestBlockNumber;
            let s = 0,
              a = !0;
            for (;;) {
              const c = J();
              let l = o
                .filter((e) => e.runner && c - e.start < e.stallTimeout)
                .reduce((e, t) => e + t.weight, 0);
              for (; l < this.quorum && s < o.length; ) {
                const r = o[s++],
                  a = M++;
                (r.start = J()),
                  (r.staller = z(r.stallTimeout)),
                  r.staller.wait(() => {
                    r.staller = null;
                  }),
                  (r.runner = ee(r, n, e, t).then(
                    (o) => {
                      (r.done = !0),
                        (r.result = o),
                        this.listenerCount('debug') &&
                          this.emit('debug', {
                            action: 'request',
                            rid: a,
                            backend: Z(r, J()),
                            request: { method: e, params: (0, i.deepCopy)(t) },
                            provider: this,
                          });
                    },
                    (o) => {
                      (r.done = !0),
                        (r.error = o),
                        this.listenerCount('debug') &&
                          this.emit('debug', {
                            action: 'request',
                            rid: a,
                            backend: Z(r, J()),
                            request: { method: e, params: (0, i.deepCopy)(t) },
                            provider: this,
                          });
                    }
                  )),
                  this.listenerCount('debug') &&
                    this.emit('debug', {
                      action: 'request',
                      rid: a,
                      backend: Z(r, null),
                      request: { method: e, params: (0, i.deepCopy)(t) },
                      provider: this,
                    }),
                  (l += r.weight);
              }
              const u = [];
              o.forEach((e) => {
                !e.done &&
                  e.runner &&
                  (u.push(e.runner), e.staller && u.push(e.staller.getPromise()));
              }),
                u.length && (yield Promise.race(u));
              const h = o.filter((e) => e.done && null == e.error);
              if (h.length >= this.quorum) {
                const e = r(h);
                if (void 0 !== e)
                  return (
                    o.forEach((e) => {
                      e.staller && e.staller.cancel(), (e.cancelled = !0);
                    }),
                    e
                  );
                a || (yield z(100).getPromise()), (a = !1);
              }
              const d = o.reduce((e, t) => {
                if (!t.done || null == t.error) return e;
                const r = t.error.code;
                return (
                  V.indexOf(r) >= 0 &&
                    (e[r] || (e[r] = { error: t.error, weight: 0 }), (e[r].weight += t.weight)),
                  e
                );
              }, {});
              if (
                (Object.keys(d).forEach((e) => {
                  const t = d[e];
                  if (t.weight < this.quorum) return;
                  o.forEach((e) => {
                    e.staller && e.staller.cancel(), (e.cancelled = !0);
                  });
                  const r = t.error,
                    n = {};
                  X.forEach((e) => {
                    null != r[e] && (n[e] = r[e]);
                  }),
                    G.throwError(r.reason || r.message, e, n);
                }),
                0 === o.filter((e) => !e.done).length)
              )
                break;
            }
            return (
              o.forEach((e) => {
                e.staller && e.staller.cancel(), (e.cancelled = !0);
              }),
              G.throwError('failed to meet quorum', u.Logger.errors.SERVER_ERROR, {
                method: e,
                params: t,
                results: o.map((e) => Z(e)),
                provider: this,
              })
            );
          });
        }
      }
      const re = null,
        oe = new u.Logger(h.i),
        ne = '84842078b09946638c03157f83405213';
      class se extends f {
        constructor(e, t) {
          const r = new ie(e, t),
            o = r.connection;
          o.password &&
            oe.throwError(
              'INFURA WebSocket project secrets unsupported',
              u.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: 'InfuraProvider.getWebSocketProvider()' }
            );
          super(o.url.replace(/^http/i, 'ws').replace('/v3/', '/ws/v3/'), e),
            (0, i.defineReadOnly)(this, 'apiKey', r.projectId),
            (0, i.defineReadOnly)(this, 'projectId', r.projectId),
            (0, i.defineReadOnly)(this, 'projectSecret', r.projectSecret);
        }
        isCommunityResource() {
          return this.projectId === ne;
        }
      }
      class ie extends b.l {
        static getWebSocketProvider(e, t) {
          return new se(e, t);
        }
        static getApiKey(e) {
          const t = { apiKey: ne, projectId: ne, projectSecret: null };
          return (
            null == e ||
              ('string' === typeof e
                ? (t.projectId = e)
                : null != e.projectSecret
                  ? (oe.assertArgument(
                      'string' === typeof e.projectId,
                      'projectSecret requires a projectId',
                      'projectId',
                      e.projectId
                    ),
                    oe.assertArgument(
                      'string' === typeof e.projectSecret,
                      'invalid projectSecret',
                      'projectSecret',
                      '[REDACTED]'
                    ),
                    (t.projectId = e.projectId),
                    (t.projectSecret = e.projectSecret))
                  : e.projectId && (t.projectId = e.projectId),
              (t.apiKey = t.projectId)),
            t
          );
        }
        static getUrl(e, t) {
          let r = null;
          switch (e ? e.name : 'unknown') {
            case 'homestead':
              r = 'mainnet.infura.io';
              break;
            case 'goerli':
              r = 'goerli.infura.io';
              break;
            case 'sepolia':
              r = 'sepolia.infura.io';
              break;
            case 'matic':
              r = 'polygon-mainnet.infura.io';
              break;
            case 'maticmum':
              r = 'polygon-mumbai.infura.io';
              break;
            case 'optimism':
              r = 'optimism-mainnet.infura.io';
              break;
            case 'optimism-goerli':
              r = 'optimism-goerli.infura.io';
              break;
            case 'arbitrum':
              r = 'arbitrum-mainnet.infura.io';
              break;
            case 'arbitrum-goerli':
              r = 'arbitrum-goerli.infura.io';
              break;
            default:
              oe.throwError('unsupported network', u.Logger.errors.INVALID_ARGUMENT, {
                argument: 'network',
                value: e,
              });
          }
          const o = {
            allowGzip: !0,
            url: 'https://' + r + '/v3/' + t.projectId,
            throttleCallback: (e, r) => (t.projectId === ne && (0, a.vh)(), Promise.resolve(!0)),
          };
          return null != t.projectSecret && ((o.user = ''), (o.password = t.projectSecret)), o;
        }
        isCommunityResource() {
          return this.projectId === ne;
        }
      }
      class ae extends l.r {
        send(e, t) {
          const r = { method: e, params: t, id: this._nextId++, jsonrpc: '2.0' };
          null == this._pendingBatch && (this._pendingBatch = []);
          const o = { request: r, resolve: null, reject: null },
            n = new Promise((e, t) => {
              (o.resolve = e), (o.reject = t);
            });
          return (
            this._pendingBatch.push(o),
            this._pendingBatchAggregator ||
              (this._pendingBatchAggregator = setTimeout(() => {
                const e = this._pendingBatch;
                (this._pendingBatch = null), (this._pendingBatchAggregator = null);
                const t = e.map((e) => e.request);
                return (
                  this.emit('debug', {
                    action: 'requestBatch',
                    request: (0, i.deepCopy)(t),
                    provider: this,
                  }),
                  (0, x.fetchJson)(this.connection, JSON.stringify(t)).then(
                    (r) => {
                      this.emit('debug', {
                        action: 'response',
                        request: t,
                        response: r,
                        provider: this,
                      }),
                        e.forEach((e, t) => {
                          const o = r[t];
                          if (o.error) {
                            const t = new Error(o.error.message);
                            (t.code = o.error.code), (t.data = o.error.data), e.reject(t);
                          } else e.resolve(o.result);
                        });
                    },
                    (r) => {
                      this.emit('debug', {
                        action: 'response',
                        error: r,
                        request: t,
                        provider: this,
                      }),
                        e.forEach((e) => {
                          e.reject(r);
                        });
                    }
                  )
                );
              }, 10)),
            n
          );
        }
      }
      const ce = new u.Logger(h.i);
      class le extends b.l {
        static getApiKey(e) {
          return (
            e && 'string' !== typeof e && ce.throwArgumentError('invalid apiKey', 'apiKey', e),
            e || 'ETHERS_JS_SHARED'
          );
        }
        static getUrl(e, t) {
          ce.warn(
            'NodeSmith will be discontinued on 2019-12-20; please migrate to another platform.'
          );
          let r = null;
          switch (e.name) {
            case 'homestead':
              r = 'https://ethereum.api.nodesmith.io/v1/mainnet/jsonrpc';
              break;
            case 'ropsten':
              r = 'https://ethereum.api.nodesmith.io/v1/ropsten/jsonrpc';
              break;
            case 'rinkeby':
              r = 'https://ethereum.api.nodesmith.io/v1/rinkeby/jsonrpc';
              break;
            case 'goerli':
              r = 'https://ethereum.api.nodesmith.io/v1/goerli/jsonrpc';
              break;
            case 'kovan':
              r = 'https://ethereum.api.nodesmith.io/v1/kovan/jsonrpc';
              break;
            default:
              ce.throwArgumentError('unsupported network', 'network', arguments[0]);
          }
          return r + '?apiKey=' + t;
        }
      }
      const ue = new u.Logger(h.i),
        he = '62e1ad51b37b8e00394bda3b';
      class de extends b.l {
        static getApiKey(e) {
          const t = { applicationId: null, loadBalancer: !0, applicationSecretKey: null };
          return (
            null == e
              ? (t.applicationId = he)
              : 'string' === typeof e
                ? (t.applicationId = e)
                : null != e.applicationSecretKey
                  ? ((t.applicationId = e.applicationId),
                    (t.applicationSecretKey = e.applicationSecretKey))
                  : e.applicationId
                    ? (t.applicationId = e.applicationId)
                    : ue.throwArgumentError('unsupported PocketProvider apiKey', 'apiKey', e),
            t
          );
        }
        static getUrl(e, t) {
          let r = null;
          switch (e ? e.name : 'unknown') {
            case 'goerli':
              r = 'eth-goerli.gateway.pokt.network';
              break;
            case 'homestead':
              r = 'eth-mainnet.gateway.pokt.network';
              break;
            case 'kovan':
              r = 'poa-kovan.gateway.pokt.network';
              break;
            case 'matic':
              r = 'poly-mainnet.gateway.pokt.network';
              break;
            case 'maticmum':
              r = 'polygon-mumbai-rpc.gateway.pokt.network';
              break;
            case 'rinkeby':
              r = 'eth-rinkeby.gateway.pokt.network';
              break;
            case 'ropsten':
              r = 'eth-ropsten.gateway.pokt.network';
              break;
            default:
              ue.throwError('unsupported network', u.Logger.errors.INVALID_ARGUMENT, {
                argument: 'network',
                value: e,
              });
          }
          const o = { headers: {}, url: `https://${r}/v1/lb/${t.applicationId}` };
          return (
            null != t.applicationSecretKey &&
              ((o.user = ''), (o.password = t.applicationSecretKey)),
            o
          );
        }
        isCommunityResource() {
          return this.applicationId === he;
        }
      }
      var pe = r(241);
      const ge = new u.Logger(h.i);
      function me(e, t) {
        if ((null == e && (e = 'homestead'), 'string' === typeof e)) {
          const t = e.match(/^(ws|http)s?:/i);
          if (t)
            switch (t[1].toLowerCase()) {
              case 'http':
              case 'https':
                return new l.r(e);
              case 'ws':
              case 'wss':
                return new f(e);
              default:
                ge.throwArgumentError('unsupported URL scheme', 'network', e);
            }
        }
        const r = (0, n.H)(e);
        return (
          (r && r._defaultProvider) ||
            ge.throwError('unsupported getDefaultProvider network', u.Logger.errors.NETWORK_ERROR, {
              operation: 'getDefaultProvider',
              network: e,
            }),
          r._defaultProvider(
            {
              FallbackProvider: te,
              AlchemyProvider: v,
              AnkrProvider: R,
              CloudflareProvider: S,
              EtherscanProvider: q,
              InfuraProvider: ie,
              JsonRpcProvider: l.r,
              NodesmithProvider: le,
              PocketProvider: de,
              Web3Provider: pe.Q,
              IpcProvider: re,
            },
            t
          )
        );
      }
    },
  },
]);
