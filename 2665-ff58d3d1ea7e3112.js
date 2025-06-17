(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2665],
  {
    95426: function (e, a, n) {
      'use strict';
      n.d(a, {
        C: function () {
          return c;
        },
        b: function () {
          return r;
        },
      });
      var t = n(75040),
        s = n(22405),
        i = n.n(s),
        o = n(26934),
        l = n(31601);
      let r = (e) => {
          let { children: a, hideIcon: n, variant: s, tooltipMessage: r } = e;
          return (0, t.jsx)('div', {
            className: i().container,
            'data-variant': s,
            'data-tooltip': r,
            children: (0, t.jsxs)('div', {
              className: i().content,
              children: [
                !n &&
                  (0, t.jsxs)(t.Fragment, {
                    children: [
                      'danger' === s &&
                        (0, t.jsx)('span', {
                          className: i().icon,
                          children: (0, t.jsx)(o.J, { name: 'danger' }),
                        }),
                      'success' === s &&
                        (0, t.jsx)('span', {
                          className: i().icon,
                          children: (0, t.jsx)(o.J, { name: 'success' }),
                        }),
                      'warning' === s &&
                        (0, t.jsx)('span', {
                          className: i().icon,
                          children: (0, t.jsx)(o.J, { name: 'warning' }),
                        }),
                    ],
                  }),
                (0, t.jsx)('div', { children: a }),
                r && (0, t.jsx)(l.u, { message: r, children: (0, t.jsx)(o.J, { name: 'info' }) }),
              ],
            }),
          });
        },
        c = (e) => {
          let { children: a, variant: n, checkbox: s } = e;
          return (0, t.jsxs)('div', {
            className: i().container,
            'data-variant': n,
            children: [
              (0, t.jsxs)('div', {
                className: i().content,
                children: [
                  'danger' === n &&
                    (0, t.jsx)('span', {
                      className: i().icon,
                      children: (0, t.jsx)(o.J, { name: 'danger' }),
                    }),
                  'success' === n &&
                    (0, t.jsx)('span', {
                      className: i().icon,
                      children: (0, t.jsx)(o.J, { name: 'success' }),
                    }),
                  'warning' === n &&
                    (0, t.jsx)('span', {
                      className: i().icon,
                      children: (0, t.jsx)(o.J, { name: 'warning' }),
                    }),
                  (0, t.jsx)('div', { children: a }),
                ],
              }),
              (0, t.jsxs)('div', { children: [(0, t.jsx)('hr', {}), s] }),
            ],
          });
        };
    },
    66978: function (e, a, n) {
      'use strict';
      n.d(a, {
        $b: function () {
          return p;
        },
        FR: function () {
          return d;
        },
        iz: function () {
          return g;
        },
        rR: function () {
          return m;
        },
      });
      var t = n(75040),
        s = n(76986),
        i = n(40910),
        o = n(27910),
        l = n.n(o),
        r = n(31601),
        c = n(81145);
      let d = (e) => {
          let { gap: a, style: n, className: i, withSeparators: o, children: r, ...c } = e;
          return (0, t.jsx)('dl', {
            className: ''
              .concat(o ? l().datalistWithSeparators : '', ' ')
              .concat(null != i ? i : ''),
            ...c,
            style: { gap: (0, s.Q)(a), ...n },
            children: r,
          });
        },
        m = (e) => {
          let { gap: a, children: n } = e;
          return (0, t.jsx)('div', {
            className: l().dataListSection,
            style: { gap: (0, s.Q)(a), paddingBottom: (0, s.Q)(a) },
            children: n,
          });
        },
        u = {},
        p = (e) =>
          'string' == typeof e.children && u[e.children]
            ? (0, t.jsxs)(c.x, {
                as: 'dt',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
                children: [
                  (0, t.jsx)(i.x, { as: 'span', size: 14, weight: 500, ...e }),
                  (0, t.jsx)(r.u, { message: u[e.children] }),
                ],
              })
            : (0, t.jsx)(i.x, { as: 'dt', size: 14, weight: 500, ...e }),
        g = (e) => (0, t.jsx)(i.x, { as: 'dd', size: 14, weight: 500, ...e });
    },
    25945: function (e, a, n) {
      'use strict';
      n.d(a, {
        z: function () {
          return m;
        },
      });
      var t = n(75040),
        s = n(58854),
        i = n(12432),
        o = n(81289),
        l = n(81562),
        r = n.n(l),
        c = n(9486);
      let d = { duration: 0.4, ease: c.easeSnappyOut },
        m = (e) => {
          let { children: a, byWord: n } = e,
            l = (0, s.useId)(),
            u = n || a.split(' ').length > 1 ? 'word' : 'character',
            p = s.useMemo(
              () =>
                a
                  ? ('character' === u ? a.split('') : a.split(' ')).reduce(
                      (e, a, n) =>
                        ' ' === a
                          ? [...e, { string: '\xa0', id: 'space-'.concat(n) }]
                          : e.find((e) => e.string === a)
                            ? [...e, { string: a, id: ''.concat(a, '-').concat(n) }]
                            : [...e, { string: a, id: a }],
                      []
                    )
                  : [],
              [a]
            );
          return (0, t.jsx)('span', {
            className: r().container,
            children: (0, t.jsx)(i.M, {
              initial: !1,
              mode: 'popLayout',
              children:
                'word' === u
                  ? p.map((e, a) =>
                      (0, t.jsxs)(
                        o.E.span,
                        {
                          layout: 'position',
                          layoutId: ''.concat(l, '-').concat(a),
                          ...c.baseMotionVariants,
                          transition: d,
                          children: [
                            n ? e.string : (0, t.jsx)(m, { children: e.string }),
                            a === p.length - 1 ? '' : '\xa0',
                          ],
                        },
                        ''.concat(l, '-').concat(a)
                      )
                    )
                  : p.map((e) =>
                      (0, t.jsx)(
                        o.E.span,
                        {
                          layout: 'position',
                          layoutId: ''.concat(l, '-').concat(e.id),
                          ...c.baseMotionVariants,
                          transition: d,
                          children: e.string,
                        },
                        ''.concat(l, '-').concat(e.id)
                      )
                    ),
            }),
          });
        };
    },
    17938: function (e, a, n) {
      'use strict';
      n.d(a, {
        S: function () {
          return c;
        },
      });
      var t = n(75040),
        s = n(51298),
        i = n.n(s),
        o = n(35410),
        l = n(33972),
        r = n(61563);
      let c = (e) => {
        var a;
        let {
          address: n = '0x0000000000000000000000000000000000000000',
          symbol: s,
          network: c,
          alt: d,
          size: m,
          showNetworkLogo: u = !0,
        } = e;
        return (0, t.jsxs)('div', {
          className: i().container,
          children: [
            (0, t.jsx)(l.E, {
              src: ''
                .concat((0, o.getApiHttpUrl)(), '/proxy/token-logo/?address=')
                .concat(n, '&chainId=')
                .concat(
                  null !== (a = null == c ? void 0 : c.chainId.value) && void 0 !== a ? a : 1,
                  '&symbol='
                )
                .concat(s),
              alt: d,
              width: m,
              height: m,
              radius: m,
            }),
            c &&
              u &&
              1 !== c.chainId.value &&
              (0, t.jsx)('div', {
                className: i().networkIcon,
                children: (0, t.jsx)(r.A, { network: c, alt: '' }),
              }),
          ],
        });
      };
    },
    82435: function (e, a, n) {
      'use strict';
      n.d(a, {
        D: function () {
          return g;
        },
        M: function () {
          return p;
        },
      });
      var t = n(75040),
        s = n(12432),
        i = n(81289),
        o = n(81145),
        l = n(41954),
        r = n(40910),
        c = n(71965),
        d = n(68779),
        m = n(9486),
        u = n(49466);
      let p = (e) => {
          var a;
          let {
              wallet: n,
              address: d,
              name: p,
              avatarSize: g = 'medium',
              displayTransactionCount: h,
            } = e,
            {
              displayName: f,
              displayPicture: w,
              displayEmoji: x,
              displayIcon: v,
              displayColor: y,
            } = (0, c.W)({ address: null != d ? d : n.ethereumAddress }),
            b = d ? (null != p ? p : f) : null !== (a = n.metadata.label) && void 0 !== a ? a : f;
          return (0, t.jsx)(o.x, {
            as: 'div',
            justifyContent: 'flex-end',
            flexDirection: 'row',
            style: { minWidth: 0 },
            children: (0, t.jsxs)('div', {
              style: {
                display: 'flex',
                gap: 'extraSmall' === g ? 8 : 12,
                alignItems: 'center',
                justifyContent: 'flex-end',
                width: '100%',
              },
              children: [
                d
                  ? (0, t.jsx)(l.q, {
                      address: d.toHexString(),
                      size: g,
                      metadata: { emoji: x, picture: w, icon: v, color: y },
                    })
                  : (0, t.jsx)(l.q, {
                      address: n.ethereumAddress.toHexString(),
                      size: g,
                      metadata: n.metadata,
                    }),
                (0, t.jsx)('div', {
                  style: { minWidth: 0, flex: 1 },
                  children: (0, t.jsx)(s.M, {
                    initial: !1,
                    mode: 'popLayout',
                    children: (0, t.jsx)(
                      i.E.div,
                      {
                        ...m.baseMotionVariants,
                        style: { width: '100%' },
                        children: (0, t.jsxs)('div', {
                          style: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            gap: 4,
                            textAlign: 'left',
                            width: '100%',
                          },
                          children: [
                            (0, t.jsx)(r.x, {
                              as: 'h2',
                              size: h ? 16 : 14,
                              weight: 500,
                              style: {
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                width: '100%',
                              },
                              children: b,
                            }),
                            h &&
                              (0, t.jsx)(r.x, {
                                as: 'p',
                                children: (0, u.FP)(
                                  (null != d ? d : n.ethereumAddress).toHexString()
                                ),
                              }),
                          ],
                        }),
                      },
                      b
                    ),
                  }),
                }),
              ],
            }),
          });
        },
        g = (e) => {
          let { avatarSize: a = 'medium' } = e;
          return (0, t.jsxs)(o.x, {
            as: 'div',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            children: [
              (0, t.jsx)(d.O, {
                width: (0, l.B)(a).width,
                height: (0, l.B)(a).height,
                radius: (0, l.B)(a).height,
              }),
              (0, t.jsxs)(o.x, {
                as: 'div',
                alignItems: 'flex-start',
                gap: 6,
                style: { padding: '0.25rem 0' },
                children: [
                  (0, t.jsx)(d.O, { width: 120, height: 14, radius: 14 }),
                  (0, t.jsx)(d.O, { width: 100, height: 14, radius: 14 }),
                ],
              }),
            ],
          });
        };
    },
    58012: function (e, a, n) {
      'use strict';
      n.d(a, {
        c: function () {
          return o;
        },
      });
      var t = n(33867),
        s = n(84545);
      let i = async (e) => {
          let a = (0, s.U)(e) ? e : void 0,
            n = a ? void 0 : e,
            t = {
              ...(a ? { address: a } : { filter: { searchBy: { localNameQuery: n } } }),
              orderBy: 'BEST_MATCH',
            };
          return (
            await fetch('https://api.lens.xyz/graphql', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                query:
                  '\n        query ($request: AccountsRequest!) {\n          accounts(request: $request) {\n            items {\n              address\n              username { value }\n              metadata { name }\n            }\n          }\n        }\n      ',
                variables: { request: t },
              }),
            }).then((e) => e.json())
          ).data.accounts.items;
        },
        o = (e) => (0, t.a)({ queryKey: ['lensAccounts', e], queryFn: () => i(e), enabled: !!e });
    },
    7182: function (e, a, n) {
      'use strict';
      n.d(a, {
        R: function () {
          return l;
        },
        X: function () {
          return r;
        },
      });
      var t = n(38031),
        s = n(21819),
        i = n(14393),
        o = n(14221);
      let l = (e, a) =>
          (0, t.C)({
            queryKey: ['addressBook', a.value],
            queryFn: async () => {
              let { items: a } = await e.userAddressBook.list({ offset: 0, limit: 100 });
              return a;
            },
          }),
        r = () => {
          let { sdk: e } = (0, i.K)(),
            a = l(e, (0, o.zS)().id);
          return (0, s.k)(a).data;
        };
    },
    71965: function (e, a, n) {
      'use strict';
      n.d(a, {
        W: function () {
          return r;
        },
      });
      var t = n(49466),
        s = n(48160),
        i = n(87468),
        o = n(7182),
        l = n(58012);
      let r = (e) => {
        var a, n, r, c, d, m, u, p, g, h, f, w, x;
        let { address: v } = e,
          { name: y, avatar: b } = (0, s.O)({ address: v.toHexString() }),
          { data: j } = (0, l.c)(v.toHexString()),
          { data: z } = (0, i.S)(),
          I = (0, o.X)().find((e) => e.address === v.toHexString()),
          C = z.find((e) => e.ethereumAddress.equals(v)),
          S =
            null !==
              (r =
                null !==
                  (n =
                    null !== (a = null == I ? void 0 : I.label) && void 0 !== a
                      ? a
                      : null == C
                        ? void 0
                        : C.metadata.label) && void 0 !== n
                  ? n
                  : y) && void 0 !== r
              ? r
              : (0, t.FP)(v.toHexString()),
          _ =
            null !==
              (m =
                null !==
                  (d =
                    null !== (c = null == I ? void 0 : I.picture) && void 0 !== c
                      ? c
                      : null == C
                        ? void 0
                        : C.metadata.picture) && void 0 !== d
                  ? d
                  : b) && void 0 !== m
              ? m
              : void 0;
        return {
          displayName: S,
          displayPicture: _,
          displayEmoji:
            null !==
              (p =
                null !== (u = null == I ? void 0 : I.emoji) && void 0 !== u
                  ? u
                  : null == C
                    ? void 0
                    : C.metadata.emoji) && void 0 !== p
              ? p
              : void 0,
          displayIcon:
            null !==
              (h =
                null !== (g = null == I ? void 0 : I.icon) && void 0 !== g
                  ? g
                  : null == C
                    ? void 0
                    : C.metadata.icon) && void 0 !== h
              ? h
              : void 0,
          displayColor:
            null !==
              (w =
                null !== (f = null == I ? void 0 : I.color) && void 0 !== f
                  ? f
                  : null == C
                    ? void 0
                    : C.metadata.color) && void 0 !== w
              ? w
              : void 0,
          lensData:
            null !==
              (x =
                null == j
                  ? void 0
                  : j.map((e) => {
                      var a;
                      return null === (a = e.username.value) || void 0 === a
                        ? void 0
                        : a.replace('lens/', '');
                    })) && void 0 !== x
              ? x
              : [],
        };
      };
    },
    48160: function (e, a, n) {
      'use strict';
      n.d(a, {
        O: function () {
          return r;
        },
      });
      var t = n(23724),
        s = n(45688),
        i = n(87769),
        o = n(25454);
      let l = {
          refetchInterval: 0,
          refetchOnMount: !1,
          refetchIntervalInBackground: !1,
          refetchOnWindowFocus: !0,
          refetchOnReconnect: !0,
          staleTime: 3e5,
          gcTime: 3e5,
          retryOnMount: !1,
          retry: !1,
        },
        r = (e) => {
          let { address: a, name: n } = e,
            r = o.R.id,
            { data: c, isLoading: d } = (0, t.S)({
              name: n,
              chainId: r,
              query: { enabled: !!n, ...l },
            }),
            m = n && null != c ? c : a,
            { data: u } = (0, s.F)({
              address: null != m ? m : void 0,
              chainId: r,
              query: { enabled: !!m, ...l },
            }),
            { data: p } = (0, i.c)({
              name: null != u ? u : void 0,
              chainId: r,
              query: { enabled: !!u, ...l },
            });
          return { address: m, name: u, avatar: null == p ? void 0 : p.toString(), isLoading: d };
        };
    },
    2223: function (e, a, n) {
      'use strict';
      n.d(a, {
        i: function () {
          return o;
        },
      });
      var t = n(75040),
        s = n(58854);
      let i =
        '\n  a[href]:not(:disabled),\n  button:not(:disabled),\n  textarea:not(:disabled),\n  input[type="text"]:not(:disabled),\n  input[type="radio"]:not(:disabled),\n  input[type="checkbox"]:not(:disabled),\n  input[type="search"]:not(:disabled),\n  select:not(:disabled)\n';
      function o(e) {
        let { children: a } = e,
          n = (function () {
            let e = (0, s.useRef)(null);
            function a(a) {
              if (!e.current) return;
              let n = e.current.querySelectorAll(i);
              if (0 === n.length) return;
              let t = n[0],
                s = n[n.length - 1];
              ('Tab' === a.key || 9 === a.keyCode) &&
                (a.shiftKey
                  ? document.activeElement === t && (a.preventDefault(), s.focus())
                  : document.activeElement === s && (a.preventDefault(), t.focus()));
            }
            return (
              (0, s.useEffect)(() => {
                let n = e.current;
                return (
                  n && (n.addEventListener('keydown', a), n.focus({ preventScroll: !0 })),
                  () => {
                    n && n.removeEventListener('keydown', a);
                  }
                );
              }, []),
              e
            );
          })();
        return (
          (0, s.useEffect)(() => {
            if (!n.current) return;
            let e = n.current.querySelectorAll(i);
            e.length > 0
              ? e[0].focus({ preventScroll: !0 })
              : n.current.focus({ preventScroll: !0 });
          }, [n]),
          (0, t.jsx)('div', { ref: n, tabIndex: 0, children: a })
        );
      }
    },
    52155: function (e, a, n) {
      'use strict';
      n.d(a, {
        K: function () {
          return s;
        },
      });
      var t = n(58854);
      let s = (e, a) => {
        (0, t.useEffect)(() => {
          let n = (n) => {
            n.key === e && a();
          };
          return (
            window.addEventListener('keydown', n),
            () => {
              window.removeEventListener('keydown', n);
            }
          );
        }, [e, a]);
      };
    },
    87738: function (e, a, n) {
      'use strict';
      n.d(a, {
        d: function () {
          return o;
        },
      });
      var t = n(33867),
        s = n(40285),
        i = n(14221);
      let o = (e, a) => {
        let n = (0, i.dB)();
        return (0, t.a)({
          queryKey: ['getAddressCollectibles', e, null == a ? void 0 : a.toSorted().join(',')],
          queryFn: async () => {
            let { items: t } = await (0, s.V)(n, e);
            return a ? t.filter((e) => a.includes(e.network.chain)) : t;
          },
        });
      };
    },
    40285: function (e, a, n) {
      'use strict';
      n.d(a, {
        V: function () {
          return g;
        },
      });
      var t,
        s,
        i = n(35410),
        o = n(9284),
        l = n(48235),
        r = n(240),
        c = n(88376),
        d = n(17620);
      let m = (e) => {
        let a = [];
        return (
          e.forEach((e) => {
            try {
              let n = u(e);
              if (!n) return;
              a.push(n);
            } catch (e) {}
          }),
          a
            .filter((e) => (0, r.p)(e.network))
            .map((e) => {
              let a = e.image.optimized || e.image.original || '';
              return e.type === d.P.ERC1155 ||
                a.endsWith('.mp4') ||
                a.endsWith('.mov') ||
                a.endsWith('.mp3') ||
                a.endsWith('.wav')
                ? { ...e, isUnsupported: !0 }
                : e;
            })
        );
      };
      ((t = s || (s = {})).ERC1155 = 'ERC1155'), (t.ERC721 = 'ERC721');
      let u = (e) => {
          let a = c.AJ[e.chain_id],
            n = (0, l.f)(a);
          if (!(0, r.p)(n)) return null;
          switch (e.contract_type.toUpperCase()) {
            case 'ERC1155':
              return {
                type: d.P.ERC1155,
                network: n,
                collection: { address: e.contract_address, name: e.name },
                amount: e.collectibles_count.toString(),
                amountOwned: e.collectibles_count.toString(),
                tokenId: e.collectibles[0].token_id,
                image: { optimized: e.collectibles[0].assets[0].url },
                metadata: {
                  name: e.name,
                  description: e.description,
                  tokenUri: e.collectibles[0].raw_urls.external_url,
                },
                isSpam: e.collectibles[0].is_spam,
              };
            case 'ERC721':
              return {
                type: d.P.ERC721,
                network: n,
                collection: { address: e.contract_address, name: e.name },
                tokenId: e.collectibles[0].token_id,
                image: { optimized: e.collectibles[0].assets[0].url },
                metadata: {
                  name: e.name,
                  description: e.description,
                  tokenUri: e.collectibles[0].raw_urls.external_url,
                },
                isSpam: e.collectibles[0].is_spam,
              };
            default:
              (0, o.kG)(!1, 'Unsupported collectible type.');
          }
        },
        p = ''.concat((0, i.getApiHttpUrl)(), '/proxy/family/v3'),
        g = async function (e, a) {
          var n, t;
          let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 25,
            i = arguments.length > 3 ? arguments[3] : void 0,
            o = new URLSearchParams();
          o.append('limit', s.toString()), i && o.append('pageId', i);
          let l = ''.concat(p, '/wallets/').concat(a, '/collectibles?').concat(o.toString()),
            r = await fetch(l, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: e.jwtInfo.accessToken.value,
                'x-device-id': e.deviceId.value,
              },
            }).then((e) => e.json());
          if ('error' in r) throw Error(r.error);
          let c = m(r.data),
            d = null === (n = r.data[0]) || void 0 === n ? void 0 : n.id;
          return {
            items: c,
            next: null === (t = r.data[r.data.length - 1]) || void 0 === t ? void 0 : t.id,
            prev: d,
            count: r.data.length,
          };
        };
    },
    51741: function (e, a, n) {
      'use strict';
      n.d(a, {
        M: function () {
          return l;
        },
      });
      var t = n(35410);
      let s = (e) => e;
      var i = n(11041);
      let o = ''.concat((0, t.getApiHttpUrl)(), '/proxy/family/v3'),
        l = async (e, a, n) => {
          var t, l, r, c, d;
          let m = ''.concat(o, '/wallets/').concat(a, '/tx/analyze'),
            u = {
              from: n.from,
              gas: null !== (t = n.gas) && void 0 !== t ? t : null,
              gas_price: null !== (l = n.gasPrice) && void 0 !== l ? l : null,
              input: null !== (r = n.input) && void 0 !== r ? r : '',
              max_fee_per_gas: null !== (c = n.maxFeePerGas) && void 0 !== c ? c : null,
              max_priority_fee_per_gas:
                null !== (d = n.maxPriorityFeePerGas) && void 0 !== d ? d : null,
              metadata: { source: e.appOrigin.value, ...n.metadata },
              to: n.to,
              value: n.value,
            },
            p = await fetch(m, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: e.jwtInfo.accessToken.value,
                'x-device-id': e.deviceId.value,
              },
              body: JSON.stringify(u),
            }).then((e) => e.json());
          return 'error' in p
            ? { status: i._.INSUFFICIENT_FUNDS_TO_COVER_GAS }
            : { status: i._.OK, ...s(p) };
        };
    },
    11041: function (e, a, n) {
      'use strict';
      var t, s;
      n.d(a, {
        _: function () {
          return t;
        },
      }),
        ((s = t || (t = {})).OK = 'OK'),
        (s.INSUFFICIENT_FUNDS_TO_COVER_GAS = 'INSUFFICIENT_FUNDS_TO_COVER_GAS');
    },
    87036: function (e, a, n) {
      'use strict';
      n.d(a, {
        G: function () {
          return y;
        },
      });
      var t = n(75040),
        s = n(37968),
        i = n(59171),
        o = n(66978),
        l = n(81145),
        r = n(11041),
        c = n(40910),
        d = n(31601),
        m = n(26934),
        u = n(27564),
        p = n(95426),
        g = n(63233),
        h = n(17938),
        f = n(87738),
        w = n(33972),
        x = n(68779),
        v = n(49466);
      let y = (e) => {
          var a;
          let { simulation: n, isPending: s, wallet: i, network: o } = e,
            g = n ? (0, u.M)(n, i.ethereumAddress.toHexString()) : void 0;
          if ((null == n ? void 0 : n.status) !== r._.OK) return;
          let h = 'success' === n.validation.status;
          if (
            (null == g
              ? void 0
              : null === (a = g.assetChanges) || void 0 === a
                ? void 0
                : a.length) !== 0
          )
            return (0, t.jsxs)(l.x, {
              as: 'div',
              gap: 16,
              children: [
                (0, t.jsxs)(l.x, {
                  as: 'div',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  children: [
                    (0, t.jsx)(c.x, {
                      as: 'p',
                      size: 14,
                      weight: 400,
                      children: 'Estimated Wallet Changes',
                    }),
                    (0, t.jsx)(d.u, {
                      cursor: 'help',
                      message:
                        "Estimated wallet changes provide a detailed preview of how a transaction will potentially alter your wallet's state.",
                      children: (0, t.jsx)('span', {
                        style: { color: 'var(--body-color-muted)' },
                        children: (0, t.jsx)(m.J, { name: 'question' }),
                      }),
                    }),
                  ],
                }),
                s
                  ? (0, t.jsx)(b, {})
                  : h
                    ? null
                    : (0, t.jsx)(p.b, {
                        variant: 'info',
                        children: (0, t.jsxs)(c.x, {
                          as: 'p',
                          align: 'center',
                          children: [
                            "This request couldn't be simulated.",
                            (0, t.jsx)('br', {}),
                            'Please proceed with caution.',
                          ],
                        }),
                      }),
                (0, t.jsx)(j, { simulation: n, wallet: i, network: o }),
              ],
            });
        },
        b = () =>
          (0, t.jsx)(o.FR, {
            gap: 16,
            withSeparators: !0,
            children: (0, t.jsxs)(o.rR, {
              gap: 16,
              children: [
                (0, t.jsx)(o.$b, { children: (0, t.jsx)(x.O, { height: 14, width: 60 }) }),
                (0, t.jsx)(o.iz, {
                  children: (0, t.jsxs)(l.x, {
                    as: 'div',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 8,
                    children: [
                      (0, t.jsx)(x.O, { width: 18, height: 18, radius: 4 }),
                      (0, t.jsx)(x.O, { height: 14, width: 80 }),
                    ],
                  }),
                }),
                (0, t.jsx)(o.$b, { children: (0, t.jsx)(x.O, { height: 14, width: 80 }) }),
                (0, t.jsx)(o.iz, {
                  children: (0, t.jsx)(l.x, {
                    as: 'div',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 8,
                    children: (0, t.jsx)(x.O, { height: 14, width: 40 }),
                  }),
                }),
              ],
            }),
          }),
        j = (e) => {
          var a;
          let { simulation: n, wallet: s, network: i } = e,
            l = (0, u.M)(n, s.ethereumAddress.toHexString());
          if (!l) return;
          let r = l.exposureChanges ? Object.values(l.exposureChanges) : void 0;
          return (0, t.jsxs)(o.FR, {
            gap: 16,
            withSeparators: !0,
            children: [
              null === (a = l.assetChanges) || void 0 === a
                ? void 0
                : a.map((e, a) => (0, t.jsx)(z, { change: e, network: i }, a)),
              null == r ? void 0 : r.map((e, a) => (0, t.jsx)(C, { change: e, network: i }, a)),
            ],
          });
        },
        z = (e) => {
          var a, n, s, i, r, d, m;
          let { change: p, network: f } = e;
          return (0, t.jsxs)(o.rR, {
            gap: 16,
            children: [
              p.dollarValue &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)(o.$b, { children: (0, u.x)(p.type) }),
                    (0, t.jsx)(o.iz, {
                      children: (0, t.jsxs)(l.x, {
                        as: 'div',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 8,
                        children: [
                          (0, t.jsx)(h.S, {
                            address:
                              (null === (a = p.assetInfo) || void 0 === a
                                ? void 0
                                : a.contractAddress) || void 0,
                            symbol:
                              (null === (s = p.assetInfo) || void 0 === s
                                ? void 0
                                : null === (n = s.symbol) || void 0 === n
                                  ? void 0
                                  : n.toUpperCase()) || '',
                            alt: '',
                            size: 20,
                            network: f,
                            showNetworkLogo: !1,
                          }),
                          (0, t.jsxs)(c.x, {
                            as: 'span',
                            size: 14,
                            weight: 500,
                            style: { fontFamily: 'var(--font-secondary)', whiteSpace: 'nowrap' },
                            children: [
                              p.amount,
                              ' ',
                              null === (r = p.assetInfo) || void 0 === r
                                ? void 0
                                : null === (i = r.symbol) || void 0 === i
                                  ? void 0
                                  : i.toUpperCase(),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, t.jsx)(o.$b, { children: 'Total Value' }),
                    (0, t.jsx)(o.iz, { children: (0, t.jsx)(g.tL, { amount: p.dollarValue }) }),
                  ],
                }),
              ((null === (d = p.assetInfo) || void 0 === d ? void 0 : d.standard) === 'ERC721' ||
                (null === (m = p.assetInfo) || void 0 === m ? void 0 : m.standard) === 'ERC1155') &&
                (0, t.jsx)(I, { change: p, from: p.from }),
            ],
          });
        },
        I = (e) => {
          var a, n, i;
          let { change: r, from: c } = e,
            { data: d, isPending: m } = (0, f.d)(c),
            u = (0, s.H_)(r.tokenId, 'bigint').toString(),
            p =
              null == d
                ? void 0
                : d.find((e) => {
                    var a;
                    return (
                      e.collection.address ===
                        (null === (a = r.assetInfo) || void 0 === a ? void 0 : a.contractAddress) &&
                      e.tokenId === u
                    );
                  });
          if (p || m)
            return (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(o.$b, { children: 'Collectible' }),
                (0, t.jsx)(o.iz, {
                  children:
                    !p || m
                      ? (0, t.jsxs)(l.x, {
                          as: 'div',
                          gap: 8,
                          flexDirection: 'row',
                          alignItems: 'center',
                          children: [
                            (0, t.jsx)(x.O, { width: 18, height: 18, radius: 4 }),
                            (0, t.jsx)(x.O, { height: 14, width: 80 }),
                          ],
                        })
                      : (0, t.jsxs)(l.x, {
                          as: 'div',
                          gap: 8,
                          flexDirection: 'row',
                          alignItems: 'center',
                          children: [
                            (0, t.jsx)(w.E, {
                              expandedSrc: p.image.optimized,
                              src:
                                null !==
                                  (i =
                                    null !==
                                      (n =
                                        null !== (a = p.image.thumbnail) && void 0 !== a
                                          ? a
                                          : p.image.optimized) && void 0 !== n
                                      ? n
                                      : p.image.original) && void 0 !== i
                                  ? i
                                  : '/default-collectible-icon.png',
                              alt: '',
                              width: 18,
                              height: 18,
                              radius: 4,
                            }),
                            (0, t.jsx)('span', { children: p.metadata.name }),
                          ],
                        }),
                }),
              ],
            });
        },
        C = (e) => {
          var a, n, s, r, m, p, g, f, w;
          let { change: x, network: y } = e,
            b = x.rawAmount && i.zL === BigInt(x.rawAmount);
          return (0, t.jsxs)(o.rR, {
            gap: 16,
            children: [
              (0, t.jsx)(o.$b, { children: (0, u.x)(x.type) }),
              (0, t.jsx)(o.iz, {
                children: (0, t.jsxs)(l.x, {
                  as: 'div',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 8,
                  children: [
                    (0, t.jsx)(h.S, {
                      address:
                        (null === (a = x.assetInfo) || void 0 === a ? void 0 : a.contractAddress) ||
                        void 0,
                      symbol:
                        (null === (s = x.assetInfo) || void 0 === s
                          ? void 0
                          : null === (n = s.symbol) || void 0 === n
                            ? void 0
                            : n.toUpperCase()) ||
                        (null == y ? void 0 : y.nativeCurrency.symbol) ||
                        '',
                      alt: '',
                      size: 20,
                      network: y,
                      showNetworkLogo: !1,
                    }),
                    b
                      ? (0, t.jsxs)(c.x, {
                          as: 'span',
                          children: [
                            'Unlimited ',
                            null === (m = x.assetInfo) || void 0 === m
                              ? void 0
                              : null === (r = m.symbol) || void 0 === r
                                ? void 0
                                : r.toUpperCase(),
                          ],
                        })
                      : (0, t.jsxs)(c.x, {
                          as: 'span',
                          children: [
                            x.amount,
                            ' ',
                            (null === (p = x.assetInfo) || void 0 === p ? void 0 : p.symbol)
                              ? x.assetInfo.symbol.toUpperCase()
                              : (0, t.jsx)(d.u, {
                                  message:
                                    null === (g = x.assetInfo) || void 0 === g
                                      ? void 0
                                      : g.contractAddress,
                                  children: (0, v.FP)(
                                    null !==
                                      (w =
                                        null === (f = x.assetInfo) || void 0 === f
                                          ? void 0
                                          : f.contractAddress) && void 0 !== w
                                      ? w
                                      : ''
                                  ),
                                }),
                          ],
                        }),
                  ],
                }),
              }),
            ],
          });
        };
    },
    45951: function (e, a, n) {
      'use strict';
      n.d(a, {
        z: function () {
          return g;
        },
      });
      var t = n(75040),
        s = n(66978),
        i = n(81145),
        o = n(82435),
        l = n(40910),
        r = n(61563),
        c = n(240),
        d = n(88376);
      let m = { 18: 8, 12: 4 },
        u = (e) => {
          let { network: a, chain: n, logoSize: s, ...o } = e;
          return n
            ? (0, t.jsxs)(i.x, {
                as: 'div',
                flexDirection: 'row',
                alignItems: 'center',
                gap: m[s],
                children: [
                  (0, t.jsx)(r.A, { chain: n, alt: '', size: s }),
                  (0, t.jsx)(l.x, { as: 'span', ...o, children: d.Mo[n].name }),
                ],
              })
            : (0, t.jsxs)(i.x, {
                as: 'div',
                flexDirection: 'row',
                alignItems: 'center',
                gap: m[s],
                children: [
                  (0, c.p)(a) && (0, t.jsx)(r.A, { network: a, alt: '', size: s }),
                  (0, t.jsx)(l.x, { as: 'span', ...o, children: a.name }),
                ],
              });
        };
      var p = n(31601);
      let g = (e) => {
        let { wallet: a, network: n } = e;
        return (0, t.jsx)(i.x, {
          as: 'div',
          gap: 4,
          children: (0, t.jsx)(s.FR, {
            gap: 16,
            withSeparators: !0,
            children: (0, t.jsxs)(s.rR, {
              gap: 16,
              children: [
                (0, t.jsx)(s.$b, { children: 'Wallet' }),
                (0, t.jsx)(s.iz, {
                  style: { minWidth: 0, flex: 1 },
                  children: (0, t.jsx)(p.u, {
                    message: a.ethereumAddress.toHexString(),
                    children: (0, t.jsx)(o.M, { wallet: a, avatarSize: 'extraSmall' }),
                  }),
                }),
                n &&
                  (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)(s.$b, { children: 'Chain' }),
                      (0, t.jsx)(s.iz, {
                        style: { minWidth: 0, flex: 1 },
                        children: (0, t.jsx)(p.u, {
                          message: 'Chain ID: '.concat(n.chainId.value),
                          children: (0, t.jsx)(u, { network: n, logoSize: 18 }),
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          }),
        });
      };
    },
    90710: function (e, a, n) {
      'use strict';
      n.d(a, {
        i: function () {
          return w;
        },
      });
      var t = n(75040),
        s = n(37968),
        i = n(59171),
        o = n(59755),
        l = n.n(o),
        r = n(11041),
        c = n(81145),
        d = n(40910),
        m = n(63233),
        u = n(17938),
        p = n(27564);
      let g = () =>
        (0, t.jsx)('svg', {
          width: '19',
          height: '25',
          viewBox: '0 0 19 25',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: (0, t.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M12.3443 6.00467C12.4563 6.03397 12.6179 6.03397 12.9412 6.03397H13.8806C14.3985 6.03397 14.6575 6.03397 14.8824 5.88639C15.0515 5.77542 15.2245 5.52406 15.2677 5.3265C15.3253 5.06376 15.2522 4.87282 15.1062 4.49093L15.1062 4.49093C14.2437 2.23521 12.0589 0.633301 9.5 0.633301C6.18629 0.633301 3.5 3.31959 3.5 6.6333V10.1959C2.19519 10.8431 1.19503 11.9978 0.749929 13.4095C0.5 14.2022 0.5 15.1792 0.5 17.1333C0.5 19.0874 0.5 20.0644 0.749929 20.8571C1.27972 22.5374 2.5959 23.8536 4.27619 24.3834C5.06886 24.6333 6.04591 24.6333 8 24.6333H11C12.9541 24.6333 13.9311 24.6333 14.7238 24.3834C16.4041 23.8536 17.7203 22.5374 18.2501 20.8571C18.5 20.0644 18.5 19.0874 18.5 17.1333C18.5 15.1792 18.5 14.2022 18.2501 13.4095C17.7203 11.7292 16.4041 10.413 14.7238 9.88323C13.9311 9.6333 12.9541 9.6333 11 9.6333H8C7.67404 9.6333 7.37527 9.6333 7.1 9.63446V6.6333C7.1 5.30782 8.17452 4.2333 9.5 4.2333C10.2213 4.2333 10.8683 4.5515 11.3082 5.05518C11.7496 5.56054 11.9704 5.81322 12.0661 5.8783C12.1319 5.92305 12.163 5.94457 12.1968 5.95994C12.2306 5.97531 12.2672 5.98453 12.3443 6.00467Z',
            fill: 'currentColor',
          }),
        });
      var h = n(33972),
        f = n(87738);
      let w = (e) => {
          let { simulation: a, wallet: n, network: s } = e;
          if (a.status !== r._.OK)
            return (0, t.jsx)('div', {
              className: l().container,
              children: (0, t.jsxs)(d.x, {
                as: 'p',
                align: 'center',
                children: [
                  "This request couldn't be simulated.",
                  (0, t.jsx)('br', {}),
                  'Please proceed with caution.',
                ],
              }),
            });
          let i = (0, p.M)(a, n.ethereumAddress.toHexString());
          if (!i || !i.assetChanges)
            return (0, t.jsx)('div', {
              className: l().container,
              children: (0, t.jsxs)(c.x, {
                as: 'div',
                gap: 8,
                alignItems: 'center',
                children: [
                  (0, t.jsx)('h1', { children: 'Fee Only' }),
                  (0, t.jsx)('p', {
                    children: 'This transaction requires only the network fee shown below.',
                  }),
                ],
              }),
            });
          let o = i.exposureChanges ? Object.values(i.exposureChanges) : void 0;
          return (0, t.jsx)('div', {
            className: l().container,
            children: (0, t.jsxs)(c.x, {
              as: 'div',
              gap: 24,
              children: [
                i.assetChanges.map((e, a) => (0, t.jsx)(x, { change: e, network: s }, a)),
                null == o ? void 0 : o.map((e, a) => (0, t.jsx)(y, { change: e, network: s }, a)),
              ],
            }),
          });
        },
        x = (e) => {
          var a, n, s, i, o, l, r;
          let { change: p, network: h } = e;
          return (0, t.jsxs)('div', {
            children: [
              p.dollarValue &&
                (0, t.jsxs)(c.x, {
                  as: 'div',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 8,
                  children: [
                    (0, t.jsxs)('h1', {
                      children: [
                        'Approve' === p.type && (0, t.jsx)(g, {}),
                        (0, t.jsx)(m.tL, { amount: p.dollarValue, tabularNums: !1 }),
                      ],
                    }),
                    (0, t.jsxs)(c.x, {
                      as: 'div',
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 8,
                      children: [
                        (0, t.jsx)(u.S, {
                          address:
                            (null === (a = p.assetInfo) || void 0 === a
                              ? void 0
                              : a.contractAddress) || void 0,
                          symbol:
                            (null === (s = p.assetInfo) || void 0 === s
                              ? void 0
                              : null === (n = s.symbol) || void 0 === n
                                ? void 0
                                : n.toUpperCase()) || '',
                          alt: '',
                          size: 20,
                          network: h,
                          showNetworkLogo: !1,
                        }),
                        (0, t.jsxs)(d.x, {
                          as: 'span',
                          size: 16,
                          weight: 600,
                          children: [
                            p.amount,
                            ' ',
                            null === (o = p.assetInfo) || void 0 === o
                              ? void 0
                              : null === (i = o.symbol) || void 0 === i
                                ? void 0
                                : i.toUpperCase(),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ((null === (l = p.assetInfo) || void 0 === l ? void 0 : l.standard) === 'ERC721' ||
                (null === (r = p.assetInfo) || void 0 === r ? void 0 : r.standard) === 'ERC1155') &&
                (0, t.jsx)(v, { change: p, from: p.from }),
            ],
          });
        },
        v = (e) => {
          var a, n, i;
          let { change: o, from: l } = e,
            { data: r } = (0, f.d)(l),
            d = (0, s.H_)(o.tokenId, 'bigint').toString(),
            m =
              null == r
                ? void 0
                : r.find((e) => {
                    var a;
                    return (
                      e.collection.address ===
                        (null === (a = o.assetInfo) || void 0 === a ? void 0 : a.contractAddress) &&
                      e.tokenId === d
                    );
                  });
          return m
            ? (0, t.jsxs)(c.x, {
                as: 'div',
                flexDirection: 'column',
                gap: 16,
                alignItems: 'center',
                children: [
                  (0, t.jsx)(h.E, {
                    expandedSrc: m.image.optimized,
                    src:
                      null !==
                        (i =
                          null !==
                            (n =
                              null !== (a = m.image.thumbnail) && void 0 !== a
                                ? a
                                : m.image.optimized) && void 0 !== n
                            ? n
                            : m.image.original) && void 0 !== i
                        ? i
                        : '/default-collectible-icon.png',
                    alt: '',
                    width: 256,
                    height: 256,
                    radius: 8,
                  }),
                  (0, t.jsxs)(c.x, {
                    as: 'div',
                    flexDirection: 'column',
                    gap: 4,
                    alignItems: 'center',
                    children: [
                      (0, t.jsx)('h1', { children: m.metadata.name }),
                      (0, t.jsx)('p', { children: m.collection.name }),
                    ],
                  }),
                ],
              })
            : "You don't own this collectible.";
        },
        y = (e) => {
          var a, n, s, o, l, r, p;
          let { change: h, network: f } = e,
            w = h.rawAmount && i.zL === BigInt(h.rawAmount);
          return h.amount
            ? (0, t.jsx)('div', {
                children: (0, t.jsxs)(c.x, {
                  as: 'div',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 8,
                  children: [
                    (0, t.jsxs)('h1', {
                      children: [
                        'Approve' === h.type && (0, t.jsx)(g, {}),
                        w
                          ? 'Unlimited'
                          : h.dollarValue
                            ? (0, t.jsx)(m.tL, { amount: h.dollarValue, tabularNums: !1 })
                            : (0, t.jsx)(t.Fragment, { children: h.amount }),
                      ],
                    }),
                    (0, t.jsxs)(c.x, {
                      as: 'div',
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 8,
                      children: [
                        (0, t.jsx)(u.S, {
                          address:
                            (null === (a = h.assetInfo) || void 0 === a
                              ? void 0
                              : a.contractAddress) || void 0,
                          symbol:
                            (null === (s = h.assetInfo) || void 0 === s
                              ? void 0
                              : null === (n = s.symbol) || void 0 === n
                                ? void 0
                                : n.toUpperCase()) ||
                            (null == f ? void 0 : f.nativeCurrency.symbol) ||
                            '',
                          alt: '',
                          size: 20,
                          network: f,
                          showNetworkLogo: !1,
                        }),
                        w
                          ? (0, t.jsx)(d.x, {
                              as: 'span',
                              size: 16,
                              weight: 600,
                              children:
                                null === (l = h.assetInfo) || void 0 === l
                                  ? void 0
                                  : null === (o = l.symbol) || void 0 === o
                                    ? void 0
                                    : o.toUpperCase(),
                            })
                          : (0, t.jsxs)(d.x, {
                              as: 'span',
                              size: 16,
                              weight: 600,
                              children: [
                                h.amount,
                                ' ',
                                null === (p = h.assetInfo) || void 0 === p
                                  ? void 0
                                  : null === (r = p.symbol) || void 0 === r
                                    ? void 0
                                    : r.toUpperCase(),
                              ],
                            }),
                      ],
                    }),
                  ],
                }),
              })
            : null;
        };
    },
    5214: function (e, a, n) {
      'use strict';
      n.d(a, {
        X: function () {
          return p;
        },
        G: function () {
          return u;
        },
      });
      var t,
        s,
        i = n(75040),
        o = n(95426),
        l = n(81145),
        r = n(11041);
      ((t = s || (s = {}))[(t.VERY_LOW = 0)] = 'VERY_LOW'),
        (t[(t.LOW = 1)] = 'LOW'),
        (t[(t.MEDIUM = 2)] = 'MEDIUM'),
        (t[(t.HIGH = 3)] = 'HIGH'),
        (t[(t.VERY_HIGH = 4)] = 'VERY_HIGH');
      let c = (e) => e === s.VERY_HIGH || e === s.HIGH || e === s.MEDIUM,
        d = (e) => {
          let { warnings: a, warningSeverity: n } = e;
          if (0 === a.length) return;
          let t = a.filter((e) => c(e.severity));
          if (1 === a.length) {
            let e = a[0];
            return (0, i.jsx)(o.b, { variant: c(n) ? 'danger' : 'warning', children: e.reason });
          }
          return (0, i.jsxs)(o.b, {
            variant: t.length > 0 ? 'danger' : 'warning',
            children: [
              (0, i.jsxs)('strong', { children: [a.length, ' Transaction Warnings'] }),
              (0, i.jsx)('ol', {
                children: a.map((e) => (0, i.jsx)('li', { children: e.reason }, e.kind)),
              }),
            ],
          });
        };
      var m = n(49933);
      let u = (e) =>
          Object.entries(e)
            .map((e) => {
              let [a, n] = e;
              return n.label
                ? { kind: a, severity: n.label.severity, reason: n.label.reason }
                : null;
            })
            .filter((e) => null !== e),
        p = (e) => {
          let { simulation: a, appOrigin: n } = e;
          if (a.status === r._.INSUFFICIENT_FUNDS_TO_COVER_GAS)
            return (0, i.jsx)(o.b, {
              variant: 'info',
              children: 'Insufficient balance to complete this transaction.',
            });
          if ('success' !== a.validation.status) return;
          let t = u(a.validation.scanners),
            c = (0, m.N)(n),
            p = g(t);
          if (
            (c.verified && (p = s.VERY_LOW), 0 !== t.length || 'Safe' !== a.validation.actionType)
          )
            return (0, i.jsx)(l.x, {
              as: 'div',
              gap: 24,
              children: (0, i.jsx)(d, { warnings: t, warningSeverity: p }),
            });
        },
        g = (e) => {
          let a = [...e],
            n = Math.max(...a.map((e) => e.severity)),
            t = a.find((e) => e.severity === n);
          return t ? t.severity : s.LOW;
        };
    },
    27564: function (e, a, n) {
      'use strict';
      n.d(a, {
        M: function () {
          return s;
        },
        x: function () {
          return i;
        },
      });
      var t = n(11041);
      let s = (e, a) => (e.status !== t._.OK ? null : e.aggregated[a.toLowerCase()]),
        i = (e) => ({ Transfer: 'Send' })[e] || e;
    },
    49933: function (e, a, n) {
      'use strict';
      n.d(a, {
        N: function () {
          return s;
        },
      });
      var t = JSON.parse(
        '{"1inch.io":{"name":"1inch","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267e7c73792dec42b37d7.png"},"88mph.app":{"name":"88mph","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267e8c73792dec42b37f8.png"},"aave.com":{"name":"Aave","uri":"https://family-tokens-stg.s3.us-east-2.amazonaws.com/default/AAVE.png"},"artblocks.io":{"name":"Art Blocks","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267e8c73792dec42b384f.png"},"astrofrens.com":{"name":"Astro Frens","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267e8c73792dec42b3860.png"},"badger.finance":{"name":"Badger DAO","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267e8c73792dec42b3871.png"},"balancer.exchange":{"name":"Balancer","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267e8c73792dec42b3886.png"},"blit.house":{"name":"Blit House","uri":null},"blitmap.com":{"name":"Blitmap","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267e9c73792dec42b389d.png"},"collab.land":{"name":"Collab.Land","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267e9c73792dec42b38ab.png"},"compound.finance":{"name":"Compound","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267e9c73792dec42b38ba.png"},"cream.finance":{"name":"Cream","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267e9c73792dec42b38cf.png"},"curve.fi":{"name":"Curve","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267eac73792dec42b38da.png"},"defisaver.com":{"name":"DeFi Saver","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267eac73792dec42b38e5.png"},"dydx.exchange":{"name":"dYdX","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267eac73792dec42b38f0.png"},"ens.domains":{"name":"ENS","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267eac73792dec42b38fb.png"},"etherscan.io":{"name":"Etherscan","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267eac73792dec42b3906.png"},"flexa.network":{"name":"Flexa","uri":null},"foundation.app":{"name":"Foundation","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267ebc73792dec42b3924.png"},"furucombo.app":{"name":"Furucombo","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267ebc73792dec42b392f.png"},"safe.global":{"name":"Safe","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267ebc73792dec42b393c.png"},"indexcoop.com":{"name":"Index","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267ebc73792dec42b3948.png"},"instadapp.io":{"name":"Instadapp","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267ebc73792dec42b395b.png"},"kyberswap.com":{"name":"KyberSwap","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267ecc73792dec42b396a.png"},"matcha.xyz":{"name":"Matcha","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267ecc73792dec42b3977.png"},"mirror.xyz":{"name":"Mirror","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267ecc73792dec42b3990.png"},"mstable.org":{"name":"mStable","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267ecc73792dec42b399b.png"},"mycrypto.com":{"name":"MyCrypto","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267ecc73792dec42b39a6.png"},"nft20.io":{"name":"NFT20","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267ecc73792dec42b39b9.png"},"niftygateway.com":{"name":"Nifty Gateway","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267edc73792dec42b39c4.png"},"oasis.app":{"name":"Oasis","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267edc73792dec42b39ef.png"},"opensea.io":{"name":"OpenSea","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267edc73792dec42b39fc.png"},"optimism.io":{"name":"Optimism Gateway","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267edc73792dec42b3a09.png"},"party.app":{"name":"Party","uri":"https://family-wc-mapping-logos.s3.us-west-1.amazonaws.com/72a719ca-fe3d-4d38-8b5c-cd6f7e97624d.png"},"piedao.org":{"name":"PieDAO","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267eec73792dec42b3a27.webp"},"pooltogether.com":{"name":"PoolTogether","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267eec73792dec42b3a32.png"},"punks.house":{"name":"Punk House","uri":null},"quickswap.exchange":{"name":"QuickSwap","uri":null},"rainbowkit.com":{"name":"RainbowKit","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267eec73792dec42b3a67.png"},"rarible.com":{"name":"Rarible","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267eec73792dec42b3a7a.png"},"snapshot.org":{"name":"Snapshot","uri":"https://family-wc-mapping-logos.s3.us-west-1.amazonaws.com/2da99176-9ce1-42d0-864e-ec6adf8c5a52.jpg"},"superrare.com":{"name":"SuperRare","uri":"https://family-wc-mapping-logos.s3.us-west-1.amazonaws.com/65d4123e-299b-4b61-a655-6ce9ffe23639.png"},"sushi.com":{"name":"Sushi","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267efc73792dec42b3a9f.png"},"swerve.fi":{"name":"Swerve","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267efc73792dec42b3aab.png"},"synthetix.exchange":{"name":"Synthetix","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267efc73792dec42b3ab6.png"},"tokensets.com":{"name":"TokenSets","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267efc73792dec42b3acb.png"},"twitter.com":{"name":"Twitter","uri":"https://family-wc-mapping-logos.s3.us-west-1.amazonaws.com/9c07b3ba-9698-41db-bd85-2a4b90b7249d.jpg"},"umaproject.org":{"name":"UMA","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267f0c73792dec42b3ae5.png"},"unisocks.exchange":{"name":"Unisocks Exchange","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267f0c73792dec42b3af8.png"},"uniswap.org":{"name":"Uniswap","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267f0c73792dec42b3b04.png"},"walletconnect.org":{"name":"WalletConnect","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267f0c73792dec42b3b19.png"},"yam.finance":{"name":"YAM","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267f1c73792dec42b3b2a.png"},"yearn.finance":{"name":"yearn","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267f1c73792dec42b3b51.png"},"zapper.fi":{"name":"Zapper","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267f1c73792dec42b3b67.png"},"zerion.io":{"name":"Zerion","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267f1c73792dec42b3b7d.png"},"zora.co":{"name":"Zora","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267f1c73792dec42b3b8e.png"},"blur.io":{"name":"Blur","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/636267f1c73792dec42b3bb1.jpg"},"gem.xyz":{"name":"Gem","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/63853ef6bf3ec16eff341929.png"},"nouns.wtf":{"name":"Nouns","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/63853fe6bf3ec16eff343a0b.png"},"mint.fun":{"name":"mint.fun","uri":"https://family-wc-mapping-logos.s3.us-west-1.amazonaws.com/c47da42d-dfa4-4734-a115-e9edda2f4ae8.png"},"context.app":{"name":"Context","uri":"https://family-wc-mapping-logos.s3-accelerate.amazonaws.com/63857ea3bf3ec16eff3c9aae.png"},"showtime.xyz":{"name":"Showtime","uri":"https://family-wc-mapping-logos.s3.us-west-1.amazonaws.com/1416f5bc-e505-40d8-bc64-bb6ebedcd144.jpg"},"family.co":{"name":"Family","uri":null},"endaoment.org":{"name":"Endaoment","uri":"https://family-wc-mapping-logos.s3.us-west-1.amazonaws.com/2514460a-5c03-4291-88f6-80d1c567a502.png"},"warpcast.com":{"name":"Warpcast","uri":"https://family-wc-mapping-logos.s3.us-west-1.amazonaws.com/5104779c-7e28-4fca-a233-16b3870b3805.png"},"alongside.xyz":{"name":"Alongside","uri":"https://family-wc-mapping-logos.s3.us-west-1.amazonaws.com/84fd5a71-49d9-41fb-8d95-3b7e77713532.jpg"},"x.com":{"name":"X","uri":"https://family-wc-mapping-logos.s3.us-west-1.amazonaws.com/9c07b3ba-9698-41db-bd85-2a4b90b7249d.jpg"},"skiff.com":{"name":"Skiff","uri":"https://family-wc-mapping-logos.s3.us-west-1.amazonaws.com/c2bf18f9-ea2b-4a40-8a6a-0b7f0d17e9ac.jpg"},"lido.fi":{"name":"Lido","uri":"https://family-wc-mapping-logos.s3.us-west-1.amazonaws.com/88684a80-1504-47bb-a991-ca93e7a08b34.png"},"lens.xyz":{"name":"Lens","uri":"https://family-wc-mapping-logos.s3.us-west-1.amazonaws.com/ad902bf7-354f-4c06-9ca4-e20102ac2d54.png"},"polymarket.com":{"name":"Polymarket","uri":"https://family-wc-mapping-logos.s3.us-west-1.amazonaws.com/0841e97a-3024-4cf2-b9c7-4bee1d353b02.png"},"magiceden.io":{"name":"Magic Eden","uri":"https://family-wc-mapping-logos.s3.us-west-1.amazonaws.com/1758f5b5-f604-4dc6-a32d-be9cebd33df8.png"},"t2.world":{"name":"t2","uri":"https://family-wc-mapping-logos.s3.us-west-1.amazonaws.com/2503594c-a357-46a7-a357-9c0440a3cb95.png"},"dev.lens.xyz":{"name":"Lens Developer","uri":"https://family-wc-mapping-logos.s3.us-west-1.amazonaws.com/ad902bf7-354f-4c06-9ca4-e20102ac2d54.png"},"developer-dashboard-eight.vercel.app":{"name":"Lens Developer","uri":"https://family-wc-mapping-logos.s3.us-west-1.amazonaws.com/ad902bf7-354f-4c06-9ca4-e20102ac2d54.png"},"dexscreener.com":{"name":"Dexscreener","uri":"https://family-wc-mapping-logos.s3.us-west-1.amazonaws.com/8d40bc6a-eccc-4f65-88cd-cf62a48e2848.png"},"across.to":{"name":"Across","uri":"https://family-wc-mapping-logos.s3.us-west-1.amazonaws.com/4773a640-588a-426e-b407-47c1a6bba770.png"},"flaunch.gg":{"name":"flaunch","uri":"https://family-wc-mapping-logos.s3.us-west-1.amazonaws.com/eb24c5b4-dcf9-4be2-84f8-d53a906a8efa.jpg"}}'
      );
      let s = (e) => {
        if (!e) return { domain: '', name: '', verified: !1 };
        let a = e
            .replace('https://', '')
            .replace('http://', '')
            .replace('www.', '')
            .split(/[/?#]/)[0],
          n = Object.keys(t).find((e) => e === a),
          s = t[n];
        return { domain: e, name: n ? s.name : a, verified: n };
      };
    },
    22405: function (e) {
      e.exports = {
        container: 'styles_container__J8a8D',
        content: 'styles_content__1DU3z',
        icon: 'styles_icon__RaBCM',
      };
    },
    27910: function (e) {
      e.exports = {
        datalistWithSeparators: 'styles_datalistWithSeparators__hR_Xx',
        dataListSection: 'styles_dataListSection____JjY',
      };
    },
    81562: function (e) {
      e.exports = { container: 'styles_container__NS79F' };
    },
    51298: function (e) {
      e.exports = {
        container: 'styles_container__hVkQq',
        networkIcon: 'styles_networkIcon__4jBJl',
      };
    },
    59755: function (e) {
      e.exports = { container: 'styles_container___1avz' };
    },
  },
]);
