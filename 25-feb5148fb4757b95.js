(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [25],
  {
    39362: function () {},
    47044: function (e, t, n) {
      'use strict';
      n.d(t, {
        CS: function () {
          return d;
        },
        DF: function () {
          return o;
        },
        NJ: function () {
          return m;
        },
        SJ: function () {
          return a;
        },
        XI: function () {
          return s;
        },
        bU: function () {
          return u;
        },
        cQ: function () {
          return h;
        },
        j6: function () {
          return c;
        },
        lc: function () {
          return l;
        },
      });
      var r,
        a,
        i = n(97137);
      let o = 'family-global-settings',
        s = 'family-completed-onboarding',
        c = 'family-per-account-settings',
        u = 'family-banners';
      ((r = a || (a = {})).LIGHT = 'light'), (r.DARK = 'dark');
      let l = { appTheme: 'light' },
        d = { showTestnets: !1, autoSwitchNetwork: !1, hideSpamCollectibles: !0 },
        m = [
          i.V9.Arbitrum,
          i.V9.Base,
          i.V9.Blast,
          i.V9.Ethereum,
          i.V9.Lens,
          i.V9.Optimism,
          i.V9.Polygon,
          i.V9.Scroll,
          i.V9.WorldChain,
          i.V9.Zksync,
        ],
        h = [i.V9.BaseSepolia, i.V9.EthereumSepolia, i.V9.LensTestnet, i.V9.PolygonAmoy];
    },
    63233: function (e, t, n) {
      'use strict';
      n.d(t, {
        $U: function () {
          return c;
        },
        ok: function () {
          return d;
        },
        tL: function () {
          return m;
        },
      });
      var r = n(75040),
        a = n(69488),
        i = n(40910),
        o = n(9731);
      let s = (e, t, n) => {
          let r = (0, a.Z)(e.toString()).dividedBy(10 ** t);
          return n ? r.decimalPlaces(3, n).toString() : r.toString();
        },
        c = (e) => {
          let {
              amount: t,
              metadata: n,
              decimals: a,
              roundingMode: c,
              showSymbol: u = !0,
              ...l
            } = e,
            d = parseFloat(s(t, n.decimals, c));
          return (
            0 === parseFloat(d.toFixed(a)) &&
              (a = (0 === d ? 0 : Math.max(0, -Math.floor(Math.log10(Math.abs(d))))) + 1),
            (0, r.jsxs)(i.x, {
              as: 'span',
              ...l,
              children: [
                (0, r.jsx)(o.E, { value: d, decimals: a }),
                u && (0, r.jsxs)(r.Fragment, { children: ['\xa0', n.symbol] }),
              ],
            })
          );
        },
        u = (e, t) => {
          let n = (0, a.Z)(e);
          return n.isLessThan(1e-4)
            ? '0'
            : n.isLessThan(0.01)
              ? n.decimalPlaces(4, t).toString()
              : n.isGreaterThanOrEqualTo(1e6)
                ? ''.concat(n.multipliedBy(1e6).decimalPlaces(0, t).toString(), 'M')
                : n.isGreaterThanOrEqualTo(1e3)
                  ? n.decimalPlaces(0, t).toString()
                  : n.decimalPlaces(2, t).toString();
        },
        l = function (e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = arguments.length > 3 ? arguments[3] : void 0,
            i = (0, a.Z)(e.toString());
          return i.isZero() ? '0' : u(i.dividedBy(10 ** t).multipliedBy(n), r);
        },
        d = (e) => {
          var t;
          let { amount: n, decimals: s, priceUsd: c, roundingMode: u = a.Z.ROUND_DOWN, ...d } = e,
            m = (0, a.Z)(l(n, s, c, u));
          return (0, r.jsx)(i.x, {
            as: 'span',
            ...d,
            children: (0, r.jsx)(o.E, {
              value: m.toNumber(),
              decimals: null !== (t = m.decimalPlaces()) && void 0 !== t ? t : 0,
              prefix: '$',
            }),
          });
        },
        m = (e) => {
          let {
              amount: t,
              roundingMode: n = a.Z.ROUND_DOWN,
              decimals: s = 2,
              tabularNums: c,
              ...l
            } = e,
            d = parseFloat(u(t, n));
          return (0, r.jsx)(i.x, {
            as: 'span',
            ...l,
            children: (0, r.jsx)(o.E, { value: d, decimals: s, prefix: '$', tabularNums: c }),
          });
        };
    },
    9731: function (e, t, n) {
      'use strict';
      n.d(t, {
        E: function () {
          return y;
        },
      });
      var r = n(75040),
        a = n(58854),
        i = n(10462),
        o = n(59114),
        s = n(84920),
        c = n(9284),
        u = n(12432),
        l = n(81289),
        d = n(5566),
        m = n.n(d),
        h = n(73005),
        p = n(9486);
      let f = { duration: 0.25, ease: p.easeInOutQuad },
        g = {
          up: { initial: { y: '100%' }, animate: { y: '0%' }, exit: { y: '-100%' }, transition: f },
          down: {
            initial: { y: '-100%' },
            animate: { y: '0%' },
            exit: { y: '100%' },
            transition: f,
          },
          punctuation: {
            initial: { y: '100%' },
            animate: { y: 0 },
            exit: { y: '100%' },
            transition: f,
          },
        },
        v = (e) => {
          let { children: t, decimals: n = 0, linear: i = !0 } = e,
            o = (0, a.useId)(),
            s = (0, h.D)(t),
            c = a.useMemo(() => {
              let e = t.toLocaleString(void 0, { minimumFractionDigits: n }).split(''),
                r = t > (null != s ? s : 0) ? 'up' : 'down';
              return e.reduce((e, t, n) => {
                if (' ' === t) return [...e, { string: '\xa0', id: 'space-'.concat(n) }];
                if (t.match(/[.,:;!?]/)) return [...e, { string: t, id: 'punctuation-'.concat(n) }];
                if (e.find((e) => e.string === t)) {
                  let n = e.filter((e) => e.string === t).length;
                  return [...e, { string: t, id: ''.concat(t, '_').concat(n), direction: r }];
                }
                return [...e, { string: t, id: t, direction: r }];
              }, []);
            }, [t]);
          return (0, r.jsx)('span', {
            className: m().container,
            children: (0, r.jsx)(u.M, {
              initial: !1,
              mode: 'popLayout',
              children: c.map((e, t) => {
                let n = i
                  ? ''.concat(o, '-').concat(t, '-').concat(e.id, '-').concat(e.string)
                  : ''.concat(o, '-').concat(e.id, '-').concat(e.string);
                return (0, r.jsx)(
                  l.E.span,
                  {
                    layout: 'position',
                    layoutId: n,
                    transition: f,
                    children: (0, r.jsx)(
                      l.E.span,
                      {
                        ...(e.id.includes('punctuation-')
                          ? g.punctuation
                          : 'up' === e.direction
                            ? g.up
                            : g.down),
                        children: e.string,
                      },
                      ''.concat(n, '-inner')
                    ),
                  },
                  n
                );
              }),
            }),
          });
        },
        y = (e) => {
          let {
            value: t,
            decimals: n,
            prefix: a,
            suffix: o,
            tabularNums: s,
            type: u = 'flow',
            duration: l,
          } = e;
          switch ((u = (0, i.J)() ? 'count' : u)) {
            case 'persistent':
              return (0, r.jsxs)('span', {
                style: { whiteSpace: 'nowrap' },
                children: [
                  a,
                  (0, r.jsx)('span', {
                    style: s ? { fontVariantNumeric: 'tabular-nums' } : void 0,
                    children: (0, r.jsx)(v, { decimals: n, children: t }),
                  }),
                  o,
                ],
              });
            case 'flow':
              return (0, r.jsx)(w, {
                value: t,
                decimals: n,
                prefix: a,
                suffix: o,
                tabularNums: s,
                duration: l,
              });
            case 'count':
              return (0, r.jsx)(E, { value: t, decimals: n, prefix: a, suffix: o, tabularNums: s });
            default:
              (0, c.vE)(u);
          }
        },
        E = (e) => {
          let { value: t, decimals: n, prefix: i, suffix: s, tabularNums: c } = e,
            u = (0, a.useRef)(null),
            l = (0, a.useRef)(t);
          return (
            (0, a.useEffect)(() => {
              let e = u.current;
              if (null === e) return;
              let r = (0, o.j)(l.current, t, {
                duration: 0.375,
                ease: p.easeInOutQuad,
                onUpdate(t) {
                  e.innerHTML = void 0 !== n ? ''.concat(t.toFixed(n)) : ''.concat(t);
                },
              });
              return (l.current = t), () => r.stop();
            }, [t, n]),
            (0, r.jsxs)('span', {
              style: { whiteSpace: 'nowrap' },
              children: [
                i,
                (0, r.jsx)('span', {
                  ref: u,
                  style: c ? { fontVariantNumeric: 'tabular-nums' } : void 0,
                }),
                s,
              ],
            })
          );
        },
        w = (e) => {
          let { value: t, decimals: n, prefix: a, suffix: i, tabularNums: o, duration: c } = e;
          return (0, r.jsx)(s.ZP, {
            transformTiming: {
              duration: null != c ? c : 375,
              easing: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
            },
            value: t,
            prefix: a,
            suffix: i,
            format: n ? { minimumFractionDigits: n, maximumFractionDigits: n } : void 0,
            style: {
              '--number-flow-char-height': '0.75em',
              '--number-flow-mask-height': '0.22em',
              display: 'inline-flex',
              alignItems: 'center',
              ...(o ? { fontVariantNumeric: 'tabular-nums' } : {}),
            },
          });
        };
    },
    87468: function (e, t, n) {
      'use strict';
      n.d(t, {
        S: function () {
          return c;
        },
        h: function () {
          return s;
        },
      });
      var r = n(38031),
        a = n(21819),
        i = n(14393),
        o = n(14221);
      let s = (e, t) =>
          (0, r.C)({
            queryKey: ['wallets', t.value],
            queryFn: async () => {
              let { items: t } = await e.wallet.getWallets({ pageInfo: { limit: 100, offset: 0 } });
              return t;
            },
          }),
        c = function () {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { sort: t, skipHidden: n } = e,
            { sdk: r } = (0, i.K)(),
            c = (0, o.zS)(),
            u = (0, a.k)(s(r, c.id));
          return (
            t &&
              (u = {
                ...u,
                data: u.data.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime()),
              }),
            n && (u = { ...u, data: u.data.filter((e) => !e.hidden) }),
            u
          );
        };
    },
    82805: function (e, t, n) {
      'use strict';
      n.d(t, {
        k: function () {
          return o;
        },
      });
      var r = n(35410),
        a = n(47044),
        i = n(79821);
      let o = () => {
        let { settings: e } = (0, i.c)();
        return r.IS_PRODUCTION || !e.showTestnets ? a.NJ : a.NJ.concat(a.cQ);
      };
    },
    79821: function (e, t, n) {
      'use strict';
      n.d(t, {
        c: function () {
          return s;
        },
      });
      var r = n(9284),
        a = n(47044),
        i = n(15642),
        o = n(14221);
      let s = () => {
        var e;
        let t = (0, o.zS)(),
          n = (0, r.Vj)(t.id.value),
          [s, c] = (0, i.Rr)(a.j6, { defaultValue: { [n]: a.CS } });
        return (
          s[n] || c((e) => ({ ...e, [n]: a.CS })),
          {
            settings: null !== (e = s[n]) && void 0 !== e ? e : a.CS,
            update: (e, t) => {
              c((r) => ({ ...r, [n]: { ...r[n], [e]: t } }));
            },
          }
        );
      };
    },
    73005: function (e, t, n) {
      'use strict';
      n.d(t, {
        D: function () {
          return a;
        },
      });
      var r = n(58854);
      let a = (e) => {
        let t = r.useRef();
        return (
          r.useEffect(() => {
            t.current = e;
          }, [e]),
          t.current
        );
      };
    },
    21783: function (e, t, n) {
      'use strict';
      n.d(t, {
        U: function () {
          return h;
        },
      });
      var r = n(33867),
        a = n(35410),
        i = n(31078),
        o = n(48235),
        s = n(88376),
        c = n(240);
      let u = (e) => {
          let t = e.balances,
            n = e.token_data,
            r = [];
          return (
            n.forEach((e, n) => {
              [...new Set(e.chain_ids)].forEach((a) => {
                try {
                  var u, l, d, m;
                  let h = s.AJ[a],
                    p = (0, o.f)(h);
                  if (!(0, c.p)(p)) return;
                  let f =
                    null !==
                      (d =
                        null === (u = t[n]) || void 0 === u
                          ? void 0
                          : u.balance[p.chainId.value]) && void 0 !== d
                      ? d
                      : '0';
                  if ('0' === f) return;
                  r.push({
                    type: i.i.NATIVE,
                    name: e.contract_name,
                    tokenAddress: e.contract_address[a],
                    network: p,
                    balance: f,
                    priceUsd:
                      null !==
                        (m = null === (l = e.current_price_usd) || void 0 === l ? void 0 : l.usd) &&
                      void 0 !== m
                        ? m
                        : 0,
                  });
                } catch (e) {}
              });
            }),
            r.flat()
          );
        },
        l = ''.concat((0, a.getApiHttpUrl)(), '/proxy/family/v3'),
        d = async (e, t) => {
          let n = ''.concat(l, '/wallets/').concat(t, '/native-balance'),
            r = await fetch(n, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: e.jwtInfo.accessToken.value,
                'x-device-id': e.deviceId.value,
              },
            }).then((e) => e.json());
          if ('error' in r) throw Error(r.error);
          return u(r);
        };
      var m = n(14221);
      let h = (e, t) => {
        let n = (0, m.dB)();
        return (0, r.a)({
          queryKey: ['nativeBalances', e, null == t ? void 0 : t.toSorted().join(',')],
          queryFn: async () => {
            let r = await d(n, e);
            return t ? r.filter((e) => t.includes(s.AJ[e.network.chainId.value])) : r;
          },
          refetchInterval: 3e4,
        });
      };
    },
    71736: function (e, t, n) {
      'use strict';
      n.d(t, {
        V: function () {
          return v;
        },
      });
      var r = n(33867),
        a = n(35410),
        i = n(31078),
        o = n(88376),
        s = n(240),
        c = n(48235);
      let u = (e) => {
          let t = [];
          return (
            e.forEach((e) => {
              let n = l(e);
              t.push(...n);
            }),
            t.filter((e) => (0, s.p)(e.network))
          );
        },
        l = (e) => {
          let t = e.data.chain_ids.map((e) => o.AJ[e]).filter(Boolean),
            n = [];
          return (
            t.forEach((t) => {
              var r, a, o, s, u, l;
              let d = (0, c.f)(t),
                m = e.balance[d.chainId.value];
              '0' !== m &&
                n.push({
                  type: i.i.ERC20,
                  metadata: {
                    name: null !== (a = e.data.contract_name) && void 0 !== a ? a : 'Unknown Token',
                    symbol: null !== (o = e.data.contract_symbol) && void 0 !== o ? o : '',
                    tokenAddress: e.data.contract_address[d.chainId.value],
                    decimals: null !== (s = e.data.contract_decimals) && void 0 !== s ? s : 18,
                    logo: null !== (u = e.data.contract_image) && void 0 !== u ? u : void 0,
                  },
                  network: d,
                  balance: m,
                  priceUsd:
                    null !==
                      (l =
                        null === (r = e.data.current_price_usd) || void 0 === r ? void 0 : r.usd) &&
                    void 0 !== l
                      ? l
                      : void 0,
                });
            }),
            n
          );
        },
        d = ''.concat((0, a.getApiHttpUrl)(), '/proxy/family/v3'),
        m = async (e, t) => {
          let n = ''.concat(d, '/wallets/').concat(t, '/tokens'),
            r = await fetch(n, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: e.jwtInfo.accessToken.value,
                'x-device-id': e.deviceId.value,
              },
            }).then((e) => e.json());
          if ('error' in r) throw Error(r.error);
          return u(r.data);
        };
      var h = n(14221);
      let p = (e, t) => {
        let n = (0, h.dB)();
        return (0, r.a)({
          queryKey: ['tokenBalances', e, t.toSorted().join(',')],
          queryFn: async () =>
            (await m(n, e)).filter((e) => t.includes(o.AJ[e.network.chainId.value])),
          refetchInterval: 3e4,
        });
      };
      var f = n(21783),
        g = n(82805);
      let v = (e, t) => {
        let n = (0, g.k)(),
          r = t || n,
          { data: a, isPending: i } = p(e.ethereumAddress.toHexString(), r),
          { data: o, isPending: s } = (0, f.U)(e.ethereumAddress.toHexString(), r);
        return {
          isPending: i || s,
          items: a && o ? [...o, ...a].filter((e) => e.balance) : void 0,
        };
      };
    },
    48235: function (e, t, n) {
      'use strict';
      n.d(t, {
        f: function () {
          return s;
        },
      });
      var r = n(42716),
        a = n(17665),
        i = n(9284),
        o = n(88376);
      let s = (e) => {
        let t = o.dE[e];
        return (
          (0, i.kG)(t, 'Chain '.concat(e, ' not supported')),
          {
            type: a.t.WELL_KNOWN,
            chain: e,
            chainId: new r.a_(t.id),
            rpcURL: new r.R9(t.rpcUrls.default.http[0]),
            name: t.name,
            nativeCurrency: {
              name: t.nativeCurrency.name,
              symbol: t.nativeCurrency.symbol,
              decimals: t.nativeCurrency.decimals,
            },
          }
        );
      };
    },
    2091: function (e, t, n) {
      'use strict';
      n.d(t, {
        PY: function () {
          return s;
        },
        gK: function () {
          return c;
        },
        jg: function () {
          return l;
        },
      });
      var r = n(9284),
        a = n(2669);
      let i = {
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
            unrecognizedChainId: 4902,
          },
        },
        o = {
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
          4902: {
            standard: 'EIP-3326',
            message:
              'Unrecognized chain ID. Try adding the chain using wallet_addEthereumChain first.',
          },
        },
        s = {
          parse: (e) => u(i.rpc.parse, e),
          invalidRequest: (e) => u(i.rpc.invalidRequest, e),
          invalidParams: (e) => u(i.rpc.invalidParams, e),
          methodNotFound: (e) => u(i.rpc.methodNotFound, e),
          internal: (e) => u(i.rpc.internal, e),
          server: (e) => {
            if ('object' != typeof e || Array.isArray(e))
              throw Error('Ethereum RPC Server errors must provide single object argument.');
            let { code: t } = e;
            if (!Number.isInteger(t) || t > -32005 || t < -32099)
              throw Error('"code" must be an integer such that: -32099 <= code <= -32005');
            return u(t, e);
          },
          invalidInput: (e) => u(i.rpc.invalidInput, e),
          resourceNotFound: (e) => u(i.rpc.resourceNotFound, e),
          resourceUnavailable: (e) => u(i.rpc.resourceUnavailable, e),
          transactionRejected: (e) => u(i.rpc.transactionRejected, e),
          methodNotSupported: (e) => u(i.rpc.methodNotSupported, e),
          limitExceeded: (e) => u(i.rpc.limitExceeded, e),
        },
        c = {
          userRejectedRequest: (e) => u(i.provider.userRejectedRequest, e),
          unauthorized: (e) => u(i.provider.unauthorized, e),
          unsupportedMethod: (e) => u(i.provider.unsupportedMethod, e),
          disconnected: (e) => u(i.provider.disconnected, e),
          chainDisconnected: (e) => u(i.provider.chainDisconnected, e),
          unrecognizedChainId: (e) => u(i.provider.unrecognizedChainId, e),
        };
      function u(e, t) {
        let [n, i] = (function (e) {
          if (e) {
            if ('string' == typeof e) return [e, void 0];
            if ('object' == typeof e && !Array.isArray(e)) {
              let { message: t, data: n } = e;
              return (0, r.kG)((0, r.HD)(t), 'Must specify string message.'), [t, n];
            }
          }
          return [];
        })(t);
        return new a.uc(e, null != n ? n : o[e].message, i);
      }
      let l = (e) => e instanceof a.uc || (e instanceof Error && 'code' in e && 'message' in e);
    },
    14619: function (e, t, n) {
      'use strict';
      n.d(t, {
        D: function () {
          return u;
        },
      });
      var r = n(29672),
        a = n(42716),
        i = n(9284),
        o = n(2091);
      let s = null,
        c = () => (
          null === s && (s = new Worker(n.tu(new URL(n.p + n.u(4066), n.b)), { type: void 0 })), s
        );
      class u extends r.c {
        send(e, t) {
          let n = new MessageChannel(),
            r = {
              url: this.proxyNetwork.rpcURL.value,
              chainId: this.proxyNetwork.chainId.value,
              method: e,
              params: t,
            },
            a = new Promise((e, t) => {
              n.port1.onmessage = (r) => {
                let { data: a } = r;
                n.port1.close(), a.error ? t(a.error) : e(a.result);
              };
            });
          return c().postMessage(r, [n.port2]), a;
        }
        static async create(e) {
          let t = new u(e),
            n = a.a_.fromHexString(await t.send('eth_chainId', []));
          return n.isFailure() || !n.value.equals(e.chainId)
            ? (0, i.Rn)(
                o.PY.server({
                  code: -32e3,
                  message: 'RPC chain id mismatch',
                  data: { expected: e.chainId, actual: n },
                })
              )
            : (0, i.Vp)(t);
        }
        constructor(e) {
          super('rpc-proxy', e.chainId.value), (this.proxyNetwork = e);
        }
      }
    },
    2669: function (e, t, n) {
      'use strict';
      n.d(t, {
        Ak: function () {
          return d;
        },
        Dv: function () {
          return p;
        },
        Kc: function () {
          return o;
        },
        Xj: function () {
          return f;
        },
        fS: function () {
          return h;
        },
        ny: function () {
          return i;
        },
        os: function () {
          return l;
        },
        t$: function () {
          return m;
        },
        uc: function () {
          return c;
        },
      });
      var r,
        a,
        i,
        o,
        s = n(23782);
      class c extends Error {
        constructor(e, t, n) {
          super(t), (this.code = e), (this.message = t), (this.data = n);
        }
      }
      ((r = i || (i = {})).wallet_watchAsset = 'wallet_watchAsset'),
        (r.wallet_addEthereumChain = 'wallet_addEthereumChain'),
        (r.wallet_switchEthereumChain = 'wallet_switchEthereumChain'),
        (r.wallet_revokePermissions = 'wallet_revokePermissions'),
        (r.personal_sign = 'personal_sign'),
        (r.eth_requestAccounts = 'eth_requestAccounts'),
        (r.eth_accounts = 'eth_accounts'),
        (r.eth_chainId = 'eth_chainId'),
        (r.eth_sendTransaction = 'eth_sendTransaction'),
        (r.eth_sign = 'eth_sign'),
        (r.eth_signTransaction = 'eth_signTransaction'),
        (r.eth_signTypedData_v4 = 'eth_signTypedData_v4'),
        (r.eth_sendRawTransaction = 'eth_sendRawTransaction'),
        (r.family_switchAccounts = 'family_switchAccounts');
      let u = /^0x[0-9a-fA-F]+$/,
        l = s.z.tuple([s.z.object({ chainId: s.z.string().regex(u) })]),
        d = s.z.tuple([
          s.z.object({
            chainId: s.z.string().regex(u),
            blockExplorerUrls: s.z.array(s.z.string()).optional(),
            chainName: s.z.string(),
            iconUrls: s.z.array(s.z.string()).optional(),
            nativeCurrency: s.z.object({
              name: s.z.string(),
              symbol: s.z.string(),
              decimals: s.z.number(),
            }),
            rpcUrls: s.z.array(s.z.string()).min(1),
          }),
        ]),
        m = s.z.tuple([s.z.record(s.z.any())]),
        h = s.z.array(s.z.unknown()).length(0),
        p = s.z.object({
          types: s.z.record(s.z.any()),
          domain: s.z.record(s.z.any()),
          message: s.z.record(s.z.any()),
          primaryType: s.z.string(),
        }),
        f = s.z.object({
          to: s.z.string().optional(),
          from: s.z.string(),
          value: s.z.string().optional(),
          data: s.z.string().optional(),
        });
      ((a = o || (o = {})).APPROVED = 'APPROVED'), (a.REJECTED = 'REJECTED'), (a.FAILED = 'FAILED');
    },
    49466: function (e, t, n) {
      'use strict';
      n.d(t, {
        FP: function () {
          return i;
        },
        Iv: function () {
          return u;
        },
        VG: function () {
          return c;
        },
        Wx: function () {
          return l;
        },
        rs: function () {
          return o;
        },
        rt: function () {
          return s;
        },
        yI: function () {
          return a;
        },
      });
      var r = n(58854);
      let a = (e, t) => r.isValidElement(e) && e.type === t,
        i = (e) => ''.concat(e.slice(0, 6), '...').concat(e.slice(-4)).split('x').join('\xd7'),
        o = (e, t) => e.replace(RegExp('(.{'.concat(t, '})(?!$)'), 'g'), '$1-'),
        s = (e) => e.replace(/-/g, '').replace(/ /g, '').trim(),
        c = (e) => {
          let t = Math.floor((new Date().getTime() - e.getTime()) / 1e3),
            n = t / 31536e3;
          return n > 1
            ? ''.concat(Math.floor(n), ' year').concat(Math.floor(n) > 1 ? 's' : '')
            : (n = t / 2592e3) > 1
              ? ''.concat(Math.floor(n), ' month').concat(Math.floor(n) > 1 ? 's' : '')
              : (n = t / 86400) > 1
                ? ''.concat(Math.floor(n), ' day').concat(Math.floor(n) > 1 ? 's' : '')
                : (n = t / 3600) > 1
                  ? ''.concat(Math.floor(n), ' hour').concat(Math.floor(n) > 1 ? 's' : '')
                  : (n = t / 60) > 1
                    ? ''.concat(Math.floor(n), ' min').concat(Math.floor(n) > 1 ? 's' : '')
                    : 'a minute';
        },
        u = (e) => !e.startsWith('+') && /^\d+$/.test(e),
        l = (e, t) => '+'.concat(e).concat(t.replace(/^0/, ''));
    },
    31078: function (e, t, n) {
      'use strict';
      var r, a;
      n.d(t, {
        i: function () {
          return r;
        },
      }),
        ((a = r || (r = {})).NATIVE = 'NATIVE'),
        (a.ERC20 = 'ERC20');
    },
    51034: function (e, t, n) {
      'use strict';
      n.d(t, {
        H: function () {
          return i;
        },
        ID: function () {
          return o;
        },
        LH: function () {
          return s;
        },
        Yk: function () {
          return u;
        },
        g1: function () {
          return d;
        },
        gi: function () {
          return c;
        },
        xP: function () {
          return l;
        },
      });
      var r = n(69488),
        a = n(84699);
      let i = (e, t) => (0, a.v)((0, r.Z)(e).toString(), t),
        o = (e, t) => {
          let n = (0, r.Z)(e.toString());
          return n.isZero() ? n : n.dividedBy(10 ** t);
        },
        s = function (e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.Z.ROUND_DOWN,
            a = o(e, t);
          return a.isLessThan(0.009)
            ? a.decimalPlaces(8, n).toString()
            : a.isLessThan(0.09)
              ? a.decimalPlaces(6, n).toString()
              : a.isLessThan(0.9)
                ? a.decimalPlaces(4, n).toString()
                : a.isGreaterThanOrEqualTo(1e3)
                  ? a.decimalPlaces(0, n).toString()
                  : a.decimalPlaces(2, n).toString();
        },
        c = function (e, t, n) {
          let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.Z.ROUND_DOWN;
          return s((0, r.Z)(e).dividedBy(n), t, a);
        },
        u = (e, t, n) => {
          let a = (0, r.Z)(e.toString());
          return a.isZero() ? a : a.dividedBy(10 ** t).multipliedBy(n);
        },
        l = function (e, t, n) {
          let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.Z.ROUND_DOWN,
            i = u(e, t, n);
          return i.isZero()
            ? '0'
            : i.isLessThan(0.09)
              ? i.decimalPlaces(4, a).toString()
              : i.isGreaterThanOrEqualTo(1e3)
                ? i.decimalPlaces(0, a).toString()
                : i.decimalPlaces(2, a).toString();
        },
        d = (e) => (0, r.Z)(e).isFinite();
    },
    11229: function (e, t, n) {
      'use strict';
      n.d(t, {
        J: function () {
          return i;
        },
        g: function () {
          return o;
        },
      });
      var r = n(71684),
        a = n(41216);
      let i = (0, r.a)({
          ...a.i,
          id: 37111,
          name: 'Lens Chain Testnet',
          nativeCurrency: { name: 'GRASS', symbol: 'GRASS', decimals: 18 },
          testnet: !0,
          rpcUrls: { default: { http: ['https://rpc.testnet.lens.xyz'] } },
        }),
        o = (0, r.a)({
          ...a.i,
          id: 232,
          name: 'Lens Chain',
          nativeCurrency: { name: 'GHO', symbol: 'GHO', decimals: 18 },
          testnet: !1,
          rpcUrls: { default: { http: ['https://rpc.lens.xyz'] } },
        });
    },
    240: function (e, t, n) {
      'use strict';
      n.d(t, {
        p: function () {
          return r;
        },
      });
      let r = (e) => 'chain' in e;
    },
    88376: function (e, t, n) {
      'use strict';
      n.d(t, {
        AJ: function () {
          return S;
        },
        Mo: function () {
          return V;
        },
        XW: function () {
          return P;
        },
        dE: function () {
          return w;
        },
        hC: function () {
          return N;
        },
      });
      var r = n(97137),
        a = n(9284),
        i = n(74088),
        o = n(21318),
        s = n(62308),
        c = n(1632),
        u = n(9991),
        l = n(25454),
        d = n(54482),
        m = n(46549),
        h = n(58594),
        p = n(712),
        f = n(77210),
        g = n(28948),
        v = n(71562),
        y = n(14619),
        E = n(11229);
      let w = {
          [r.V9.Arbitrum]: o.y,
          [r.V9.Base]: s.u,
          [r.V9.BaseSepolia]: c.L,
          [r.V9.Blast]: u.A,
          [r.V9.Ethereum]: l.R,
          [r.V9.EthereumSepolia]: d.F,
          [r.V9.Lens]: E.g,
          [r.V9.LensTestnet]: E.J,
          [r.V9.Optimism]: m.v,
          [r.V9.Polygon]: h.y,
          [r.V9.PolygonAmoy]: p.v,
          [r.V9.Scroll]: f.A,
          [r.V9.WorldChain]: g.D,
          [r.V9.Zksync]: v.l,
        },
        S = Object.entries(w).reduce((e, t) => {
          let [n, r] = t;
          return (e[r.id] = n), e;
        }, {}),
        x = '#8594ab',
        V = {
          [r.V9.Ethereum]: { name: 'Ethereum', color: '#25292E' },
          [r.V9.EthereumSepolia]: { name: 'Ethereum Sepolia', color: x },
          [r.V9.Polygon]: { name: 'Polygon', color: '#8347E5' },
          [r.V9.PolygonAmoy]: { name: 'Polygon Amoy', color: x },
          [r.V9.Base]: { name: 'Base', color: '#0052ff' },
          [r.V9.BaseSepolia]: { name: 'Base Sepolia', color: x },
          [r.V9.Optimism]: { name: 'Optimism', color: '#E84142' },
          [r.V9.Lens]: { name: 'Lens', color: '#36a136' },
          [r.V9.LensTestnet]: { name: 'Lens testnet', color: '#36a136' },
          [r.V9.Arbitrum]: { name: 'Arbitrum', color: '#28A0F0' },
          [r.V9.Blast]: { name: 'Blast', color: '#FFC700' },
          [r.V9.Scroll]: { name: 'Scroll', color: '#F8CF6E' },
          [r.V9.WorldChain]: { name: 'World Chain', color: '#FF9D00' },
          [r.V9.Zksync]: { name: 'ZKsync', color: '#8C8DFE' },
        },
        P = {
          Ethereum: r.V9.Ethereum,
          Base: r.V9.Base,
          Optimism: r.V9.Optimism,
          Scroll: r.V9.Scroll,
          Arbitrum: r.V9.Arbitrum,
          Zksync: r.V9.Zksync,
          Polygon: r.V9.Polygon,
          WorldChain: r.V9.WorldChain,
          Blast: r.V9.Blast,
          Lens: r.V9.Lens,
          EthereumSepolia: r.V9.EthereumSepolia,
          BaseSepolia: r.V9.BaseSepolia,
          PolygonAmoy: r.V9.PolygonAmoy,
          LensTestnet: r.V9.LensTestnet,
        };
      function N(e) {
        let t;
        return (n) => {
          let { chain: r } = n;
          (0, a.kG)(r, 'Chain is required');
          let o = async (n) => {
            t || (t = await e.network.getNetworks());
            let i = t.items.find((e) => e.chainId.value === r.id);
            return (
              (0, a.kG)(i, 'Network should exist'),
              new y.D(i).send(
                n.method,
                n.params ? (Array.isArray(n.params) ? n.params : [n.params]) : []
              )
            );
          };
          return (0, i.q)({
            request: o,
            key: 'httpProxy',
            name: 'HTTP JSON-RPC proxy',
            type: 'custom',
          });
        };
      }
    },
    17665: function (e, t, n) {
      'use strict';
      var r, a;
      n.d(t, {
        t: function () {
          return r;
        },
      }),
        ((a = r || (r = {})).UNKNOWN = 'UNKNOWN'),
        (a.WELL_KNOWN = 'WELL_KNOWN');
    },
    5566: function (e) {
      e.exports = { container: 'styles_container__jCBw1' };
    },
  },
]);
