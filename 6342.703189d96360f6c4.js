(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6342],
  {
    62753: function (e, t, n) {
      'use strict';
      var r = n(64836);
      t.Z = void 0;
      var o = r(n(64938)),
        a = n(85893);
      t.Z = (0, o.default)(
        (0, a.jsx)('path', {
          d: 'm19.77 7.23.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77M12 10H6V5h6zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
        }),
        'LocalGasStation'
      );
    },
    21737: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return E;
        },
      });
      var r = n(63366),
        o = n(87462),
        a = n(67294),
        s = n(63961),
        i = n(94780),
        c = n(2101),
        l = n(90948),
        u = n(28628),
        p = n(80560),
        d = n(98216),
        m = n(90629),
        f = n(1588),
        h = n(34867);
      function v(e) {
        return (0, h.ZP)('MuiAlert', e);
      }
      var b = (0, f.Z)('MuiAlert', [
          'root',
          'action',
          'icon',
          'message',
          'filled',
          'colorSuccess',
          'colorInfo',
          'colorWarning',
          'colorError',
          'filledSuccess',
          'filledInfo',
          'filledWarning',
          'filledError',
          'outlined',
          'outlinedSuccess',
          'outlinedInfo',
          'outlinedWarning',
          'outlinedError',
          'standard',
          'standardSuccess',
          'standardInfo',
          'standardWarning',
          'standardError',
        ]),
        g = n(93946),
        y = n(82066),
        x = n(85893),
        k = (0, y.Z)(
          (0, x.jsx)('path', {
            d: 'M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z',
          }),
          'SuccessOutlined'
        ),
        C = (0, y.Z)(
          (0, x.jsx)('path', {
            d: 'M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z',
          }),
          'ReportProblemOutlined'
        ),
        T = (0, y.Z)(
          (0, x.jsx)('path', {
            d: 'M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
          }),
          'ErrorOutline'
        ),
        w = (0, y.Z)(
          (0, x.jsx)('path', {
            d: 'M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z',
          }),
          'InfoOutlined'
        ),
        A = (0, y.Z)(
          (0, x.jsx)('path', {
            d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
          }),
          'Close'
        );
      const S = [
          'action',
          'children',
          'className',
          'closeText',
          'color',
          'components',
          'componentsProps',
          'icon',
          'iconMapping',
          'onClose',
          'role',
          'severity',
          'slotProps',
          'slots',
          'variant',
        ],
        O = (0, l.ZP)(m.Z, {
          name: 'MuiAlert',
          slot: 'Root',
          overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [t.root, t[n.variant], t[`${n.variant}${(0, d.Z)(n.color || n.severity)}`]];
          },
        })(({ theme: e }) => {
          const t = 'light' === e.palette.mode ? c._j : c.$n,
            n = 'light' === e.palette.mode ? c.$n : c._j;
          return (0, o.Z)({}, e.typography.body2, {
            backgroundColor: 'transparent',
            display: 'flex',
            padding: '6px 16px',
            variants: [
              ...Object.entries(e.palette)
                .filter(([, e]) => e.main && e.light)
                .map(([r]) => ({
                  props: { colorSeverity: r, variant: 'standard' },
                  style: {
                    color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
                    backgroundColor: e.vars
                      ? e.vars.palette.Alert[`${r}StandardBg`]
                      : n(e.palette[r].light, 0.9),
                    [`& .${b.icon}`]: e.vars
                      ? { color: e.vars.palette.Alert[`${r}IconColor`] }
                      : { color: e.palette[r].main },
                  },
                })),
              ...Object.entries(e.palette)
                .filter(([, e]) => e.main && e.light)
                .map(([n]) => ({
                  props: { colorSeverity: n, variant: 'outlined' },
                  style: {
                    color: e.vars ? e.vars.palette.Alert[`${n}Color`] : t(e.palette[n].light, 0.6),
                    border: `1px solid ${(e.vars || e).palette[n].light}`,
                    [`& .${b.icon}`]: e.vars
                      ? { color: e.vars.palette.Alert[`${n}IconColor`] }
                      : { color: e.palette[n].main },
                  },
                })),
              ...Object.entries(e.palette)
                .filter(([, e]) => e.main && e.dark)
                .map(([t]) => ({
                  props: { colorSeverity: t, variant: 'filled' },
                  style: (0, o.Z)(
                    { fontWeight: e.typography.fontWeightMedium },
                    e.vars
                      ? {
                          color: e.vars.palette.Alert[`${t}FilledColor`],
                          backgroundColor: e.vars.palette.Alert[`${t}FilledBg`],
                        }
                      : {
                          backgroundColor:
                            'dark' === e.palette.mode ? e.palette[t].dark : e.palette[t].main,
                          color: e.palette.getContrastText(e.palette[t].main),
                        }
                  ),
                })),
            ],
          });
        }),
        M = (0, l.ZP)('div', {
          name: 'MuiAlert',
          slot: 'Icon',
          overridesResolver: (e, t) => t.icon,
        })({ marginRight: 12, padding: '7px 0', display: 'flex', fontSize: 22, opacity: 0.9 }),
        N = (0, l.ZP)('div', {
          name: 'MuiAlert',
          slot: 'Message',
          overridesResolver: (e, t) => t.message,
        })({ padding: '8px 0', minWidth: 0, overflow: 'auto' }),
        j = (0, l.ZP)('div', {
          name: 'MuiAlert',
          slot: 'Action',
          overridesResolver: (e, t) => t.action,
        })({
          display: 'flex',
          alignItems: 'flex-start',
          padding: '4px 0 0 16px',
          marginLeft: 'auto',
          marginRight: -8,
        }),
        Z = {
          success: (0, x.jsx)(k, { fontSize: 'inherit' }),
          warning: (0, x.jsx)(C, { fontSize: 'inherit' }),
          error: (0, x.jsx)(T, { fontSize: 'inherit' }),
          info: (0, x.jsx)(w, { fontSize: 'inherit' }),
        };
      var E = a.forwardRef(function (e, t) {
        const n = (0, u.i)({ props: e, name: 'MuiAlert' }),
          {
            action: a,
            children: c,
            className: l,
            closeText: m = 'Close',
            color: f,
            components: h = {},
            componentsProps: b = {},
            icon: y,
            iconMapping: k = Z,
            onClose: C,
            role: T = 'alert',
            severity: w = 'success',
            slotProps: E = {},
            slots: R = {},
            variant: P = 'standard',
          } = n,
          z = (0, r.Z)(n, S),
          I = (0, o.Z)({}, n, { color: f, severity: w, variant: P, colorSeverity: f || w }),
          D = ((e) => {
            const { variant: t, color: n, severity: r, classes: o } = e,
              a = {
                root: ['root', `color${(0, d.Z)(n || r)}`, `${t}${(0, d.Z)(n || r)}`, `${t}`],
                icon: ['icon'],
                message: ['message'],
                action: ['action'],
              };
            return (0, i.Z)(a, v, o);
          })(I),
          F = {
            slots: (0, o.Z)({ closeButton: h.CloseButton, closeIcon: h.CloseIcon }, R),
            slotProps: (0, o.Z)({}, b, E),
          },
          [_, B] = (0, p.Z)('closeButton', {
            elementType: g.Z,
            externalForwardedProps: F,
            ownerState: I,
          }),
          [L, $] = (0, p.Z)('closeIcon', {
            elementType: A,
            externalForwardedProps: F,
            ownerState: I,
          });
        return (0, x.jsxs)(
          O,
          (0, o.Z)(
            { role: T, elevation: 0, ownerState: I, className: (0, s.Z)(D.root, l), ref: t },
            z,
            {
              children: [
                !1 !== y
                  ? (0, x.jsx)(M, { ownerState: I, className: D.icon, children: y || k[w] || Z[w] })
                  : null,
                (0, x.jsx)(N, { ownerState: I, className: D.message, children: c }),
                null != a
                  ? (0, x.jsx)(j, { ownerState: I, className: D.action, children: a })
                  : null,
                null == a && C
                  ? (0, x.jsx)(j, {
                      ownerState: I,
                      className: D.action,
                      children: (0, x.jsx)(
                        _,
                        (0, o.Z)(
                          {
                            size: 'small',
                            'aria-label': m,
                            title: m,
                            color: 'inherit',
                            onClick: C,
                          },
                          B,
                          { children: (0, x.jsx)(L, (0, o.Z)({ fontSize: 'small' }, $)) }
                        )
                      ),
                    })
                  : null,
              ],
            }
          )
        );
      });
    },
    53966: function (e, t, n) {
      'use strict';
      n.d(t, {
        m: function () {
          return h;
        },
      });
      var r,
        o,
        a = n(8198),
        s = n(64146),
        i = n(21815),
        c = n(2593),
        l = n(44199),
        u = n(56371);
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
        })(o || (o = {}));
      var p = (function () {
          function e() {}
          return (
            (e.deepClone = function (e) {
              return JSON.parse(JSON.stringify(e));
            }),
            e
          );
        })(),
        d = function () {
          return (
            (d =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            d.apply(this, arguments)
          );
        },
        m = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, a) {
            function s(e) {
              try {
                c(r.next(e));
              } catch (t) {
                a(t);
              }
            }
            function i(e) {
              try {
                c(r.throw(e));
              } catch (t) {
                a(t);
              }
            }
            function c(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(s, i);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        f = function (e, t) {
          var n,
            r,
            o,
            a,
            s = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (a = { next: i(0), throw: i(1), return: i(2) }),
            'function' === typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function i(a) {
            return function (i) {
              return (function (a) {
                if (n) throw new TypeError('Generator is already executing.');
                for (; s; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & a[0]
                            ? r.return
                            : a[0]
                              ? r.throw || ((o = r.return) && o.call(r), 0)
                              : r.next) &&
                        !(o = o.call(r, a[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                      case 0:
                      case 1:
                        o = a;
                        break;
                      case 4:
                        return s.label++, { value: a[1], done: !1 };
                      case 5:
                        s.label++, (r = a[1]), (a = [0]);
                        continue;
                      case 7:
                        (a = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !(o = (o = s.trys).length > 0 && o[o.length - 1]) &&
                          (6 === a[0] || 2 === a[0])
                        ) {
                          s = 0;
                          continue;
                        }
                        if (3 === a[0] && (!o || (a[1] > o[0] && a[1] < o[3]))) {
                          s.label = a[1];
                          break;
                        }
                        if (6 === a[0] && s.label < o[1]) {
                          (s.label = o[1]), (o = a);
                          break;
                        }
                        if (o && s.label < o[2]) {
                          (s.label = o[2]), s.ops.push(a);
                          break;
                        }
                        o[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    a = t.call(e, s);
                  } catch (i) {
                    (a = [6, i]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, i]);
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
                m(this, void 0, void 0, function () {
                  var n, r, o, a, s, i, c, l, d, m, h;
                  return f(this, function (f) {
                    switch (f.label) {
                      case 0:
                        return (
                          Array.isArray(e) || (e = [e]),
                          [4, this.execute(this.buildAggregateCallContext(e), t)]
                        );
                      case 1:
                        for (
                          n = f.sent(), r = { results: {}, blockNumber: n.blockNumber }, o = 0;
                          o < n.results.length;
                          o++
                        ) {
                          for (
                            a = n.results[o],
                              s = e[a.contractContextIndex],
                              i = {
                                originalContractCallContext: p.deepClone(s),
                                callsReturnContext: [],
                              },
                              c = 0;
                            c < a.methodResults.length;
                            c++
                          )
                            if (
                              ((l = a.methodResults[c]),
                              (d = s.calls[l.contractMethodIndex]),
                              (m = this.findOutputTypesFromAbi(s.abi, d.methodName)),
                              !this._options.tryAggregate || l.result.success)
                            )
                              if (m && m.length > 0)
                                try {
                                  (h = u.defaultAbiCoder.decode(
                                    m,
                                    this.getReturnDataFromResult(l.result)
                                  )),
                                    i.callsReturnContext.push(
                                      p.deepClone({
                                        returnValues: this.formatReturnValues(h),
                                        decoded: !0,
                                        reference: d.reference,
                                        methodName: d.methodName,
                                        methodParameters: d.methodParameters,
                                        success: !0,
                                      })
                                    );
                                } catch (v) {
                                  if (!this._options.tryAggregate) throw v;
                                  i.callsReturnContext.push(
                                    p.deepClone({
                                      returnValues: [],
                                      decoded: !1,
                                      reference: d.reference,
                                      methodName: d.methodName,
                                      methodParameters: d.methodParameters,
                                      success: !1,
                                    })
                                  );
                                }
                              else
                                i.callsReturnContext.push(
                                  p.deepClone({
                                    returnValues: this.getReturnDataFromResult(l.result),
                                    decoded: !1,
                                    reference: d.reference,
                                    methodName: d.methodName,
                                    methodParameters: d.methodParameters,
                                    success: !0,
                                  })
                                );
                            else
                              i.callsReturnContext.push(
                                p.deepClone({
                                  returnValues: [],
                                  decoded: !1,
                                  reference: d.reference,
                                  methodName: d.methodName,
                                  methodParameters: d.methodParameters,
                                  success: !1,
                                })
                              );
                          r.results[i.originalContractCallContext.reference] = i;
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
                  var r = e[n], o = new a.vU(JSON.stringify(r.abi)), s = 0;
                  s < r.calls.length;
                  s++
                ) {
                  var i = r.calls[s],
                    c = o.encodeFunctionData(i.methodName, i.methodParameters);
                  t.push({
                    contractContextIndex: p.deepClone(n),
                    contractMethodIndex: p.deepClone(s),
                    target: r.contractAddress,
                    encodedData: c,
                  });
                }
              return t;
            }),
            (e.prototype.findOutputTypesFromAbi = function (e, t) {
              var n,
                r = new s.Contract(i.AddressZero, e);
              if (((t = t.trim()), r.interface.functions[t]))
                return r.interface.functions[t].outputs;
              for (var o = 0; o < e.length; o++)
                if ((null === (n = e[o].name) || void 0 === n ? void 0 : n.trim()) === t)
                  return e[o].outputs;
            }),
            (e.prototype.execute = function (e, t) {
              return m(this, void 0, void 0, function () {
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
              return m(this, void 0, void 0, function () {
                var r, o, a, s, i;
                return f(this, function (l) {
                  switch (l.label) {
                    case 0:
                      return [4, (r = this.getTypedOptions().web3Instance).eth.net.getId()];
                    case 1:
                      return (
                        (o = l.sent()),
                        (a = new r.eth.Contract(e.ABI, this.getContractBasedOnNetwork(o))),
                        (s = 'latest'),
                        n.blockNumber && (s = n.blockNumber),
                        this._options.tryAggregate
                          ? [
                              4,
                              a.methods
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
                        ((i = l.sent()).blockNumber = c.O$.from(i.blockNumber)),
                        [2, this.buildUpAggregateResponse(i, t)]
                      );
                    case 3:
                      return [
                        4,
                        a.methods
                          .aggregate(this.mapCallContextToMatchContractFormat(t))
                          .call({}, s),
                      ];
                  }
                });
              });
            }),
            (e.prototype.executeWithEthersOrCustom = function (t, n) {
              return m(this, void 0, void 0, function () {
                var r, o, a, i, c, u;
                return f(this, function (p) {
                  switch (p.label) {
                    case 0:
                      return (
                        (r = this.getTypedOptions().ethersProvider) ||
                          ((o = this.getTypedOptions()),
                          (r = o.nodeUrl
                            ? new l.JsonRpcProvider(o.nodeUrl)
                            : l.getDefaultProvider())),
                        [4, r.getNetwork()]
                      );
                    case 1:
                      return (
                        (a = p.sent()),
                        (i = new s.Contract(this.getContractBasedOnNetwork(a.chainId), e.ABI, r)),
                        (c = {}),
                        n.blockNumber && (c = d(d({}, c), { blockTag: Number(n.blockNumber) })),
                        this._options.tryAggregate
                          ? [
                              4,
                              i.callStatic.tryBlockAndAggregate(
                                !1,
                                this.mapCallContextToMatchContractFormat(t),
                                c
                              ),
                            ]
                          : [3, 3]
                      );
                    case 2:
                    case 4:
                      return (u = p.sent()), [2, this.buildUpAggregateResponse(u, t)];
                    case 3:
                      return [
                        4,
                        i.callStatic.aggregate(this.mapCallContextToMatchContractFormat(t), c),
                      ];
                  }
                });
              });
            }),
            (e.prototype.buildUpAggregateResponse = function (e, t) {
              for (
                var n = { blockNumber: e.blockNumber.toNumber(), results: [] },
                  r = function (r) {
                    var o = n.results.find(function (e) {
                      return e.contractContextIndex === t[r].contractContextIndex;
                    });
                    o
                      ? o.methodResults.push({
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
                  o = 0;
                o < e.returnData.length;
                o++
              )
                r(o);
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
                case o.mainnet:
                case o.ropsten:
                case o.rinkeby:
                case o.goerli:
                case o.optimism:
                case o.kovan:
                case o.matic:
                case o.kovanOptimism:
                case o.xdai:
                case o.xDaiTestnet:
                case o.goerliOptimism:
                case o.sepoliaOptimism:
                case o.arbitrum:
                case o.rinkebyArbitrum:
                case o.goerliArbitrum:
                case o.sepoliaArbitrum:
                case o.mumbai:
                case o.sepolia:
                case o.avalancheMainnet:
                case o.avalancheFuji:
                case o.fantomTestnet:
                case o.fantom:
                case o.bsc:
                case o.bsc_testnet:
                case o.moonbeam:
                case o.moonriver:
                case o.moonbaseAlphaTestnet:
                case o.harmony:
                case o.cronos:
                case o.fuse:
                case o.songbirdCanaryNetwork:
                case o.costonTestnet:
                case o.boba:
                case o.aurora:
                case o.astar:
                case o.okc:
                case o.heco:
                case o.metis:
                case o.rsk:
                case o.rskTestnet:
                case o.evmos:
                case o.evmosTestnet:
                case o.thundercore:
                case o.thundercoreTestnet:
                case o.oasis:
                case o.celo:
                case o.godwoken:
                case o.godwokentestnet:
                case o.klatyn:
                case o.milkomeda:
                case o.kcc:
                case o.lineaTestnet:
                case o.linea:
                case o.mantle:
                case o.mantleTestnet:
                case o.base:
                case o.baseTestnet:
                case o.blastSepolia:
                case o.polygonZkEvm:
                case o.polygonZkEvmTestnet:
                case o.zora:
                case o.zoraTestnet:
                case o.flare:
                case o.pulsechain:
                case o.scroll:
                case o.scrollSepolia:
                case o.sapphire:
                case o.blast:
                case o.amoy:
                case o.mantaPacific:
                case o.mode:
                  return '0xcA11bde05977b3631167028862bE2a173976CA11';
                case o.modeTestnet:
                  return '0xBAba8373113Fb7a68f195deF18732e01aF8eDfCF';
                case o.etherlite:
                  return '0x21681750D7ddCB8d1240eD47338dC984f94AF2aC';
                case o.zkSyncEra:
                case o.zkSyncEraTestnet:
                case o.zkSyncEraSepoliaTestnet:
                  return '0xF9cda624FBC7e059355ce98a31693d299FACd963';
                case o.shibarium:
                  return '0xd1727fC8F78aBA7DD6294f6033D74c72Ccd3D3B0';
                case o.starknet:
                  return '0xc662c410C0ECf747543f5bA90660f6ABeBD9C8c4';
                case o.starknetTestnet:
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
        o = n(89607),
        a = n(2333),
        s = r ? r.toStringTag : void 0;
      e.exports = function (e) {
        return null == e
          ? void 0 === e
            ? '[object Undefined]'
            : '[object Null]'
          : s && s in Object(e)
            ? o(e)
            : a(e);
      };
    },
    27561: function (e, t, n) {
      var r = n(67990),
        o = /^\s+/;
      e.exports = function (e) {
        return e ? e.slice(0, r(e) + 1).replace(o, '') : e;
      };
    },
    31957: function (e, t, n) {
      var r = 'object' == typeof n.g && n.g && n.g.Object === Object && n.g;
      e.exports = r;
    },
    89607: function (e, t, n) {
      var r = n(62705),
        o = Object.prototype,
        a = o.hasOwnProperty,
        s = o.toString,
        i = r ? r.toStringTag : void 0;
      e.exports = function (e) {
        var t = a.call(e, i),
          n = e[i];
        try {
          e[i] = void 0;
          var r = !0;
        } catch (c) {}
        var o = s.call(e);
        return r && (t ? (e[i] = n) : delete e[i]), o;
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
        o = 'object' == typeof self && self && self.Object === Object && self,
        a = r || o || Function('return this')();
      e.exports = a;
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
        o = n(7771),
        a = n(14841),
        s = Math.max,
        i = Math.min;
      e.exports = function (e, t, n) {
        var c,
          l,
          u,
          p,
          d,
          m,
          f = 0,
          h = !1,
          v = !1,
          b = !0;
        if ('function' != typeof e) throw new TypeError('Expected a function');
        function g(t) {
          var n = c,
            r = l;
          return (c = l = void 0), (f = t), (p = e.apply(r, n));
        }
        function y(e) {
          return (f = e), (d = setTimeout(k, t)), h ? g(e) : p;
        }
        function x(e) {
          var n = e - m;
          return void 0 === m || n >= t || n < 0 || (v && e - f >= u);
        }
        function k() {
          var e = o();
          if (x(e)) return C(e);
          d = setTimeout(
            k,
            (function (e) {
              var n = t - (e - m);
              return v ? i(n, u - (e - f)) : n;
            })(e)
          );
        }
        function C(e) {
          return (d = void 0), b && c ? g(e) : ((c = l = void 0), p);
        }
        function T() {
          var e = o(),
            n = x(e);
          if (((c = arguments), (l = this), (m = e), n)) {
            if (void 0 === d) return y(m);
            if (v) return clearTimeout(d), (d = setTimeout(k, t)), g(m);
          }
          return void 0 === d && (d = setTimeout(k, t)), p;
        }
        return (
          (t = a(t) || 0),
          r(n) &&
            ((h = !!n.leading),
            (u = (v = 'maxWait' in n) ? s(a(n.maxWait) || 0, t) : u),
            (b = 'trailing' in n ? !!n.trailing : b)),
          (T.cancel = function () {
            void 0 !== d && clearTimeout(d), (f = 0), (c = m = l = d = void 0);
          }),
          (T.flush = function () {
            return void 0 === d ? p : C(o());
          }),
          T
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
        o = n(37005);
      e.exports = function (e) {
        return 'symbol' == typeof e || (o(e) && '[object Symbol]' == r(e));
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
        o = n(13218),
        a = n(33448),
        s = /^[-+]0x[0-9a-f]+$/i,
        i = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        l = parseInt;
      e.exports = function (e) {
        if ('number' == typeof e) return e;
        if (a(e)) return NaN;
        if (o(e)) {
          var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
          e = o(t) ? t + '' : t;
        }
        if ('string' != typeof e) return 0 === e ? e : +e;
        e = r(e);
        var n = i.test(e);
        return n || c.test(e) ? l(e.slice(2), n ? 2 : 8) : s.test(e) ? NaN : +e;
      };
    },
    64343: function (e, t, n) {
      'use strict';
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
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
            d: 'M5 13l4 4L19 7',
          })
        );
      });
      t.Z = o;
    },
    67484: function (e, t, n) {
      'use strict';
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
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
      t.Z = o;
    },
    80227: function (e, t, n) {
      'use strict';
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          'svg',
          Object.assign(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 20 20',
              fill: 'currentColor',
              'aria-hidden': 'true',
              ref: t,
            },
            e
          ),
          r.createElement('path', {
            fillRule: 'evenodd',
            d: 'M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z',
            clipRule: 'evenodd',
          })
        );
      });
      t.Z = o;
    },
  },
]);
