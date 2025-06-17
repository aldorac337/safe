(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9671],
  {
    53966: function (e, t, n) {
      'use strict';
      n.d(t, {
        m: function () {
          return h;
        },
      });
      var r,
        a,
        o = n(8198),
        s = n(33174),
        c = n(21815),
        i = n(2593),
        u = n(44199),
        l = n(56371);
      !(function (e) {
        (e.web3 = 'web3'), (e.ethers = 'ethers'), (e.customHttp = 'custom');
      })(r || (r = {})),
        (function (e) {
          (e[(e.mainnet = 1)] = 'mainnet'),
            (e[(e.ropsten = 3)] = 'ropsten'),
            (e[(e.rinkeby = 4)] = 'rinkeby'),
            (e[(e.goerli = 5)] = 'goerli'),
            (e[(e.optimism = 10)] = 'optimism'),
            (e[(e.kovan = 42)] = 'kovan'),
            (e[(e.matic = 137)] = 'matic'),
            (e[(e.kovanOptimism = 69)] = 'kovanOptimism'),
            (e[(e.xdai = 100)] = 'xdai'),
            (e[(e.xDaiTestnet = 10200)] = 'xDaiTestnet'),
            (e[(e.goerliOptimism = 420)] = 'goerliOptimism'),
            (e[(e.sepoliaOptimism = 11155420)] = 'sepoliaOptimism'),
            (e[(e.arbitrum = 42161)] = 'arbitrum'),
            (e[(e.rinkebyArbitrum = 421611)] = 'rinkebyArbitrum'),
            (e[(e.goerliArbitrum = 421613)] = 'goerliArbitrum'),
            (e[(e.sepoliaArbitrum = 421614)] = 'sepoliaArbitrum'),
            (e[(e.mumbai = 80001)] = 'mumbai'),
            (e[(e.sepolia = 11155111)] = 'sepolia'),
            (e[(e.avalancheMainnet = 43114)] = 'avalancheMainnet'),
            (e[(e.avalancheFuji = 43113)] = 'avalancheFuji'),
            (e[(e.fantomTestnet = 4002)] = 'fantomTestnet'),
            (e[(e.fantom = 250)] = 'fantom'),
            (e[(e.bsc = 56)] = 'bsc'),
            (e[(e.bsc_testnet = 97)] = 'bsc_testnet'),
            (e[(e.moonbeam = 1284)] = 'moonbeam'),
            (e[(e.moonriver = 1285)] = 'moonriver'),
            (e[(e.moonbaseAlphaTestnet = 1287)] = 'moonbaseAlphaTestnet'),
            (e[(e.harmony = 16666e5)] = 'harmony'),
            (e[(e.cronos = 25)] = 'cronos'),
            (e[(e.fuse = 122)] = 'fuse'),
            (e[(e.songbirdCanaryNetwork = 19)] = 'songbirdCanaryNetwork'),
            (e[(e.costonTestnet = 16)] = 'costonTestnet'),
            (e[(e.boba = 288)] = 'boba'),
            (e[(e.aurora = 1313161554)] = 'aurora'),
            (e[(e.astar = 592)] = 'astar'),
            (e[(e.okc = 66)] = 'okc'),
            (e[(e.heco = 128)] = 'heco'),
            (e[(e.metis = 1088)] = 'metis'),
            (e[(e.rsk = 30)] = 'rsk'),
            (e[(e.rskTestnet = 31)] = 'rskTestnet'),
            (e[(e.evmos = 9001)] = 'evmos'),
            (e[(e.evmosTestnet = 9e3)] = 'evmosTestnet'),
            (e[(e.thundercore = 108)] = 'thundercore'),
            (e[(e.thundercoreTestnet = 18)] = 'thundercoreTestnet'),
            (e[(e.oasis = 26863)] = 'oasis'),
            (e[(e.celo = 42220)] = 'celo'),
            (e[(e.godwoken = 71402)] = 'godwoken'),
            (e[(e.godwokentestnet = 71401)] = 'godwokentestnet'),
            (e[(e.klatyn = 8217)] = 'klatyn'),
            (e[(e.milkomeda = 2001)] = 'milkomeda'),
            (e[(e.kcc = 321)] = 'kcc'),
            (e[(e.etherlite = 111)] = 'etherlite'),
            (e[(e.lineaTestnet = 59140)] = 'lineaTestnet'),
            (e[(e.linea = 59144)] = 'linea'),
            (e[(e.scroll = 534352)] = 'scroll'),
            (e[(e.scrollSepolia = 534351)] = 'scrollSepolia'),
            (e[(e.zkSyncEra = 324)] = 'zkSyncEra'),
            (e[(e.zkSyncEraTestnet = 280)] = 'zkSyncEraTestnet'),
            (e[(e.zkSyncEraSepoliaTestnet = 300)] = 'zkSyncEraSepoliaTestnet'),
            (e[(e.starknet = 300)] = 'starknet'),
            (e[(e.starknetTestnet = 301)] = 'starknetTestnet'),
            (e[(e.shibarium = 109)] = 'shibarium'),
            (e[(e.mantle = 5e3)] = 'mantle'),
            (e[(e.mantleTestnet = 5001)] = 'mantleTestnet'),
            (e[(e.base = 8453)] = 'base'),
            (e[(e.baseTestnet = 84531)] = 'baseTestnet'),
            (e[(e.blastSepolia = 168587773)] = 'blastSepolia'),
            (e[(e.polygonZkEvm = 1101)] = 'polygonZkEvm'),
            (e[(e.polygonZkEvmTestnet = 1442)] = 'polygonZkEvmTestnet'),
            (e[(e.zora = 7777777)] = 'zora'),
            (e[(e.zoraTestnet = 999)] = 'zoraTestnet'),
            (e[(e.flare = 14)] = 'flare'),
            (e[(e.pulsechain = 369)] = 'pulsechain'),
            (e[(e.sapphire = 23294)] = 'sapphire'),
            (e[(e.blast = 81457)] = 'blast'),
            (e[(e.amoy = 80002)] = 'amoy'),
            (e[(e.mantaPacific = 169)] = 'mantaPacific'),
            (e[(e.mode = 34443)] = 'mode'),
            (e[(e.modeTestnet = 919)] = 'modeTestnet');
        })(a || (a = {}));
      var m = (function () {
          function e() {}
          return (
            (e.deepClone = function (e) {
              return JSON.parse(JSON.stringify(e));
            }),
            e
          );
        })(),
        p = function () {
          return (
            (p =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var a in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e;
              }),
            p.apply(this, arguments)
          );
        },
        d = function (e, t, n, r) {
          return new (n || (n = Promise))(function (a, o) {
            function s(e) {
              try {
                i(r.next(e));
              } catch (t) {
                o(t);
              }
            }
            function c(e) {
              try {
                i(r.throw(e));
              } catch (t) {
                o(t);
              }
            }
            function i(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(s, c);
            }
            i((r = r.apply(e, t || [])).next());
          });
        },
        f = function (e, t) {
          var n,
            r,
            a,
            o,
            s = {
              label: 0,
              sent: function () {
                if (1 & a[0]) throw a[1];
                return a[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: c(0), throw: c(1), return: c(2) }),
            'function' === typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function c(o) {
            return function (c) {
              return (function (o) {
                if (n) throw new TypeError('Generator is already executing.');
                for (; s; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (a =
                          2 & o[0]
                            ? r.return
                            : o[0]
                              ? r.throw || ((a = r.return) && a.call(r), 0)
                              : r.next) &&
                        !(a = a.call(r, o[1])).done)
                    )
                      return a;
                    switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                      case 0:
                      case 1:
                        a = o;
                        break;
                      case 4:
                        return s.label++, { value: o[1], done: !1 };
                      case 5:
                        s.label++, (r = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !(a = (a = s.trys).length > 0 && a[a.length - 1]) &&
                          (6 === o[0] || 2 === o[0])
                        ) {
                          s = 0;
                          continue;
                        }
                        if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                          s.label = o[1];
                          break;
                        }
                        if (6 === o[0] && s.label < a[1]) {
                          (s.label = a[1]), (a = o);
                          break;
                        }
                        if (a && s.label < a[2]) {
                          (s.label = a[2]), s.ops.push(o);
                          break;
                        }
                        a[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    o = t.call(e, s);
                  } catch (c) {
                    (o = [6, c]), (r = 0);
                  } finally {
                    n = a = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, c]);
            };
          }
        },
        h = (function () {
          function e(e) {
            if (((this._options = e), this._options.web3Instance)) this._executionType = r.web3;
            else if (this._options.ethersProvider) this._executionType = r.ethers;
            else {
              if (!this._options.nodeUrl)
                throw new Error(
                  'Your options passed in our incorrect they need to match either `MulticallOptionsEthers`, `MulticallOptionsWeb3` or `MulticallOptionsCustomJsonRpcProvider` interfaces'
                );
              this._executionType = r.customHttp;
            }
          }
          return (
            (e.prototype.call = function (e, t) {
              return (
                void 0 === t && (t = {}),
                d(this, void 0, void 0, function () {
                  var n, r, a, o, s, c, i, u, p, d, h;
                  return f(this, function (f) {
                    switch (f.label) {
                      case 0:
                        return (
                          Array.isArray(e) || (e = [e]),
                          [4, this.execute(this.buildAggregateCallContext(e), t)]
                        );
                      case 1:
                        for (
                          n = f.sent(), r = { results: {}, blockNumber: n.blockNumber }, a = 0;
                          a < n.results.length;
                          a++
                        ) {
                          for (
                            o = n.results[a],
                              s = e[o.contractContextIndex],
                              c = {
                                originalContractCallContext: m.deepClone(s),
                                callsReturnContext: [],
                              },
                              i = 0;
                            i < o.methodResults.length;
                            i++
                          )
                            if (
                              ((u = o.methodResults[i]),
                              (p = s.calls[u.contractMethodIndex]),
                              (d = this.findOutputTypesFromAbi(s.abi, p.methodName)),
                              !this._options.tryAggregate || u.result.success)
                            )
                              if (d && d.length > 0)
                                try {
                                  (h = l.defaultAbiCoder.decode(
                                    d,
                                    this.getReturnDataFromResult(u.result)
                                  )),
                                    c.callsReturnContext.push(
                                      m.deepClone({
                                        returnValues: this.formatReturnValues(h),
                                        decoded: !0,
                                        reference: p.reference,
                                        methodName: p.methodName,
                                        methodParameters: p.methodParameters,
                                        success: !0,
                                      })
                                    );
                                } catch (b) {
                                  if (!this._options.tryAggregate) throw b;
                                  c.callsReturnContext.push(
                                    m.deepClone({
                                      returnValues: [],
                                      decoded: !1,
                                      reference: p.reference,
                                      methodName: p.methodName,
                                      methodParameters: p.methodParameters,
                                      success: !1,
                                    })
                                  );
                                }
                              else
                                c.callsReturnContext.push(
                                  m.deepClone({
                                    returnValues: this.getReturnDataFromResult(u.result),
                                    decoded: !1,
                                    reference: p.reference,
                                    methodName: p.methodName,
                                    methodParameters: p.methodParameters,
                                    success: !0,
                                  })
                                );
                            else
                              c.callsReturnContext.push(
                                m.deepClone({
                                  returnValues: [],
                                  decoded: !1,
                                  reference: p.reference,
                                  methodName: p.methodName,
                                  methodParameters: p.methodParameters,
                                  success: !1,
                                })
                              );
                          r.results[c.originalContractCallContext.reference] = c;
                        }
                        return [2, r];
                    }
                  });
                })
              );
            }),
            (e.prototype.getReturnDataFromResult = function (e) {
              return this._options.tryAggregate ? e.returnData : e;
            }),
            (e.prototype.formatReturnValues = function (e) {
              var t = e;
              return 1 === e.length && (t = e[0]), Array.isArray(t) ? t : [t];
            }),
            (e.prototype.buildAggregateCallContext = function (e) {
              for (var t = [], n = 0; n < e.length; n++)
                for (
                  var r = e[n], a = new o.vU(JSON.stringify(r.abi)), s = 0;
                  s < r.calls.length;
                  s++
                ) {
                  var c = r.calls[s],
                    i = a.encodeFunctionData(c.methodName, c.methodParameters);
                  t.push({
                    contractContextIndex: m.deepClone(n),
                    contractMethodIndex: m.deepClone(s),
                    target: r.contractAddress,
                    encodedData: i,
                  });
                }
              return t;
            }),
            (e.prototype.findOutputTypesFromAbi = function (e, t) {
              var n,
                r = new s.Contract(c.AddressZero, e);
              if (((t = t.trim()), r.interface.functions[t]))
                return r.interface.functions[t].outputs;
              for (var a = 0; a < e.length; a++)
                if ((null === (n = e[a].name) || void 0 === n ? void 0 : n.trim()) === t)
                  return e[a].outputs;
            }),
            (e.prototype.execute = function (e, t) {
              return d(this, void 0, void 0, function () {
                return f(this, function (n) {
                  switch (n.label) {
                    case 0:
                      switch (this._executionType) {
                        case r.web3:
                          return [3, 1];
                        case r.ethers:
                        case r.customHttp:
                          return [3, 3];
                      }
                      return [3, 5];
                    case 1:
                      return [4, this.executeWithWeb3(e, t)];
                    case 2:
                    case 4:
                      return [2, n.sent()];
                    case 3:
                      return [4, this.executeWithEthersOrCustom(e, t)];
                    case 5:
                      throw new Error(this._executionType + ' is not defined');
                  }
                });
              });
            }),
            (e.prototype.executeWithWeb3 = function (t, n) {
              return d(this, void 0, void 0, function () {
                var r, a, o, s, c;
                return f(this, function (u) {
                  switch (u.label) {
                    case 0:
                      return [4, (r = this.getTypedOptions().web3Instance).eth.net.getId()];
                    case 1:
                      return (
                        (a = u.sent()),
                        (o = new r.eth.Contract(e.ABI, this.getContractBasedOnNetwork(a))),
                        (s = 'latest'),
                        n.blockNumber && (s = n.blockNumber),
                        this._options.tryAggregate
                          ? [
                              4,
                              o.methods
                                .tryBlockAndAggregate(
                                  !1,
                                  this.mapCallContextToMatchContractFormat(t)
                                )
                                .call({}, s),
                            ]
                          : [3, 3]
                      );
                    case 2:
                    case 4:
                      return (
                        ((c = u.sent()).blockNumber = i.O$.from(c.blockNumber)),
                        [2, this.buildUpAggregateResponse(c, t)]
                      );
                    case 3:
                      return [
                        4,
                        o.methods
                          .aggregate(this.mapCallContextToMatchContractFormat(t))
                          .call({}, s),
                      ];
                  }
                });
              });
            }),
            (e.prototype.executeWithEthersOrCustom = function (t, n) {
              return d(this, void 0, void 0, function () {
                var r, a, o, c, i, l;
                return f(this, function (m) {
                  switch (m.label) {
                    case 0:
                      return (
                        (r = this.getTypedOptions().ethersProvider) ||
                          ((a = this.getTypedOptions()),
                          (r = a.nodeUrl
                            ? new u.JsonRpcProvider(a.nodeUrl)
                            : u.getDefaultProvider())),
                        [4, r.getNetwork()]
                      );
                    case 1:
                      return (
                        (o = m.sent()),
                        (c = new s.Contract(this.getContractBasedOnNetwork(o.chainId), e.ABI, r)),
                        (i = {}),
                        n.blockNumber && (i = p(p({}, i), { blockTag: Number(n.blockNumber) })),
                        this._options.tryAggregate
                          ? [
                              4,
                              c.callStatic.tryBlockAndAggregate(
                                !1,
                                this.mapCallContextToMatchContractFormat(t),
                                i
                              ),
                            ]
                          : [3, 3]
                      );
                    case 2:
                    case 4:
                      return (l = m.sent()), [2, this.buildUpAggregateResponse(l, t)];
                    case 3:
                      return [
                        4,
                        c.callStatic.aggregate(this.mapCallContextToMatchContractFormat(t), i),
                      ];
                  }
                });
              });
            }),
            (e.prototype.buildUpAggregateResponse = function (e, t) {
              for (
                var n = { blockNumber: e.blockNumber.toNumber(), results: [] },
                  r = function (r) {
                    var a = n.results.find(function (e) {
                      return e.contractContextIndex === t[r].contractContextIndex;
                    });
                    a
                      ? a.methodResults.push({
                          result: e.returnData[r],
                          contractMethodIndex: t[r].contractMethodIndex,
                        })
                      : n.results.push({
                          methodResults: [
                            {
                              result: e.returnData[r],
                              contractMethodIndex: t[r].contractMethodIndex,
                            },
                          ],
                          contractContextIndex: t[r].contractContextIndex,
                        });
                  },
                  a = 0;
                a < e.returnData.length;
                a++
              )
                r(a);
              return n;
            }),
            (e.prototype.mapCallContextToMatchContractFormat = function (e) {
              return e.map(function (e) {
                return { target: e.target, callData: e.encodedData };
              });
            }),
            (e.prototype.getTypedOptions = function () {
              return this._options;
            }),
            (e.prototype.getContractBasedOnNetwork = function (e) {
              if (this._options.multicallCustomContractAddress)
                return this._options.multicallCustomContractAddress;
              switch (e) {
                case a.mainnet:
                case a.ropsten:
                case a.rinkeby:
                case a.goerli:
                case a.optimism:
                case a.kovan:
                case a.matic:
                case a.kovanOptimism:
                case a.xdai:
                case a.xDaiTestnet:
                case a.goerliOptimism:
                case a.sepoliaOptimism:
                case a.arbitrum:
                case a.rinkebyArbitrum:
                case a.goerliArbitrum:
                case a.sepoliaArbitrum:
                case a.mumbai:
                case a.sepolia:
                case a.avalancheMainnet:
                case a.avalancheFuji:
                case a.fantomTestnet:
                case a.fantom:
                case a.bsc:
                case a.bsc_testnet:
                case a.moonbeam:
                case a.moonriver:
                case a.moonbaseAlphaTestnet:
                case a.harmony:
                case a.cronos:
                case a.fuse:
                case a.songbirdCanaryNetwork:
                case a.costonTestnet:
                case a.boba:
                case a.aurora:
                case a.astar:
                case a.okc:
                case a.heco:
                case a.metis:
                case a.rsk:
                case a.rskTestnet:
                case a.evmos:
                case a.evmosTestnet:
                case a.thundercore:
                case a.thundercoreTestnet:
                case a.oasis:
                case a.celo:
                case a.godwoken:
                case a.godwokentestnet:
                case a.klatyn:
                case a.milkomeda:
                case a.kcc:
                case a.lineaTestnet:
                case a.linea:
                case a.mantle:
                case a.mantleTestnet:
                case a.base:
                case a.baseTestnet:
                case a.blastSepolia:
                case a.polygonZkEvm:
                case a.polygonZkEvmTestnet:
                case a.zora:
                case a.zoraTestnet:
                case a.flare:
                case a.pulsechain:
                case a.scroll:
                case a.scrollSepolia:
                case a.sapphire:
                case a.blast:
                case a.amoy:
                case a.mantaPacific:
                case a.mode:
                  return '0xcA11bde05977b3631167028862bE2a173976CA11';
                case a.modeTestnet:
                  return '0xBAba8373113Fb7a68f195deF18732e01aF8eDfCF';
                case a.etherlite:
                  return '0x21681750D7ddCB8d1240eD47338dC984f94AF2aC';
                case a.zkSyncEra:
                case a.zkSyncEraTestnet:
                case a.zkSyncEraSepoliaTestnet:
                  return '0xF9cda624FBC7e059355ce98a31693d299FACd963';
                case a.shibarium:
                  return '0xd1727fC8F78aBA7DD6294f6033D74c72Ccd3D3B0';
                case a.starknet:
                  return '0xc662c410C0ECf747543f5bA90660f6ABeBD9C8c4';
                case a.starknetTestnet:
                  return '0xde29d060D45901Fb19ED6C6e959EB22d8626708e';
                default:
                  throw new Error(
                    'Network - ' +
                      e +
                      " doesn't have a multicall contract address defined. Please check your network or deploy your own contract on it."
                  );
              }
            }),
            (e.ABI = [
              {
                constant: !1,
                inputs: [
                  {
                    components: [
                      { name: 'target', type: 'address' },
                      { name: 'callData', type: 'bytes' },
                    ],
                    name: 'calls',
                    type: 'tuple[]',
                  },
                ],
                name: 'aggregate',
                outputs: [
                  { name: 'blockNumber', type: 'uint256' },
                  { name: 'returnData', type: 'bytes[]' },
                ],
                payable: !1,
                stateMutability: 'nonpayable',
                type: 'function',
              },
              {
                inputs: [
                  { internalType: 'bool', name: 'requireSuccess', type: 'bool' },
                  {
                    components: [
                      { internalType: 'address', name: 'target', type: 'address' },
                      { internalType: 'bytes', name: 'callData', type: 'bytes' },
                    ],
                    internalType: 'struct Multicall2.Call[]',
                    name: 'calls',
                    type: 'tuple[]',
                  },
                ],
                name: 'tryBlockAndAggregate',
                outputs: [
                  { internalType: 'uint256', name: 'blockNumber', type: 'uint256' },
                  { internalType: 'bytes32', name: 'blockHash', type: 'bytes32' },
                  {
                    components: [
                      { internalType: 'bool', name: 'success', type: 'bool' },
                      { internalType: 'bytes', name: 'returnData', type: 'bytes' },
                    ],
                    internalType: 'struct Multicall2.Result[]',
                    name: 'returnData',
                    type: 'tuple[]',
                  },
                ],
                stateMutability: 'nonpayable',
                type: 'function',
              },
            ]),
            e
          );
        })();
    },
    62705: function (e, t, n) {
      var r = n(55639).Symbol;
      e.exports = r;
    },
    44239: function (e, t, n) {
      var r = n(62705),
        a = n(89607),
        o = n(2333),
        s = r ? r.toStringTag : void 0;
      e.exports = function (e) {
        return null == e
          ? void 0 === e
            ? '[object Undefined]'
            : '[object Null]'
          : s && s in Object(e)
            ? a(e)
            : o(e);
      };
    },
    27561: function (e, t, n) {
      var r = n(67990),
        a = /^\s+/;
      e.exports = function (e) {
        return e ? e.slice(0, r(e) + 1).replace(a, '') : e;
      };
    },
    31957: function (e, t, n) {
      var r = 'object' == typeof n.g && n.g && n.g.Object === Object && n.g;
      e.exports = r;
    },
    89607: function (e, t, n) {
      var r = n(62705),
        a = Object.prototype,
        o = a.hasOwnProperty,
        s = a.toString,
        c = r ? r.toStringTag : void 0;
      e.exports = function (e) {
        var t = o.call(e, c),
          n = e[c];
        try {
          e[c] = void 0;
          var r = !0;
        } catch (i) {}
        var a = s.call(e);
        return r && (t ? (e[c] = n) : delete e[c]), a;
      };
    },
    2333: function (e) {
      var t = Object.prototype.toString;
      e.exports = function (e) {
        return t.call(e);
      };
    },
    55639: function (e, t, n) {
      var r = n(31957),
        a = 'object' == typeof self && self && self.Object === Object && self,
        o = r || a || Function('return this')();
      e.exports = o;
    },
    67990: function (e) {
      var t = /\s/;
      e.exports = function (e) {
        for (var n = e.length; n-- && t.test(e.charAt(n)); );
        return n;
      };
    },
    23279: function (e, t, n) {
      var r = n(13218),
        a = n(7771),
        o = n(14841),
        s = Math.max,
        c = Math.min;
      e.exports = function (e, t, n) {
        var i,
          u,
          l,
          m,
          p,
          d,
          f = 0,
          h = !1,
          b = !1,
          y = !0;
        if ('function' != typeof e) throw new TypeError('Expected a function');
        function g(t) {
          var n = i,
            r = u;
          return (i = u = void 0), (f = t), (m = e.apply(r, n));
        }
        function v(e) {
          return (f = e), (p = setTimeout(T, t)), h ? g(e) : m;
        }
        function k(e) {
          var n = e - d;
          return void 0 === d || n >= t || n < 0 || (b && e - f >= l);
        }
        function T() {
          var e = a();
          if (k(e)) return x(e);
          p = setTimeout(
            T,
            (function (e) {
              var n = t - (e - d);
              return b ? c(n, l - (e - f)) : n;
            })(e)
          );
        }
        function x(e) {
          return (p = void 0), y && i ? g(e) : ((i = u = void 0), m);
        }
        function C() {
          var e = a(),
            n = k(e);
          if (((i = arguments), (u = this), (d = e), n)) {
            if (void 0 === p) return v(d);
            if (b) return clearTimeout(p), (p = setTimeout(T, t)), g(d);
          }
          return void 0 === p && (p = setTimeout(T, t)), m;
        }
        return (
          (t = o(t) || 0),
          r(n) &&
            ((h = !!n.leading),
            (l = (b = 'maxWait' in n) ? s(o(n.maxWait) || 0, t) : l),
            (y = 'trailing' in n ? !!n.trailing : y)),
          (C.cancel = function () {
            void 0 !== p && clearTimeout(p), (f = 0), (i = d = u = p = void 0);
          }),
          (C.flush = function () {
            return void 0 === p ? m : x(a());
          }),
          C
        );
      };
    },
    13218: function (e) {
      e.exports = function (e) {
        var t = typeof e;
        return null != e && ('object' == t || 'function' == t);
      };
    },
    37005: function (e) {
      e.exports = function (e) {
        return null != e && 'object' == typeof e;
      };
    },
    33448: function (e, t, n) {
      var r = n(44239),
        a = n(37005);
      e.exports = function (e) {
        return 'symbol' == typeof e || (a(e) && '[object Symbol]' == r(e));
      };
    },
    7771: function (e, t, n) {
      var r = n(55639);
      e.exports = function () {
        return r.Date.now();
      };
    },
    14841: function (e, t, n) {
      var r = n(27561),
        a = n(13218),
        o = n(33448),
        s = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        i = /^0o[0-7]+$/i,
        u = parseInt;
      e.exports = function (e) {
        if ('number' == typeof e) return e;
        if (o(e)) return NaN;
        if (a(e)) {
          var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
          e = a(t) ? t + '' : t;
        }
        if ('string' != typeof e) return 0 === e ? e : +e;
        e = r(e);
        var n = c.test(e);
        return n || i.test(e) ? u(e.slice(2), n ? 2 : 8) : s.test(e) ? NaN : +e;
      };
    },
    67484: function (e, t, n) {
      'use strict';
      var r = n(67294);
      const a = r.forwardRef(function (e, t) {
        return r.createElement(
          'svg',
          Object.assign(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              fill: 'none',
              viewBox: '0 0 24 24',
              strokeWidth: 2,
              stroke: 'currentColor',
              'aria-hidden': 'true',
              ref: t,
            },
            e
          ),
          r.createElement('path', {
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            d: 'M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4',
          })
        );
      });
      t.Z = a;
    },
  },
]);
