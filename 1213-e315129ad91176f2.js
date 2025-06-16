'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1213],
  {
    44385: function (t, e, a) {
      a.d(e, {
        O: function () {
          return h;
        },
      });
      var r = a(13317),
        n = a(31359),
        i = a(48666),
        s = a(70731),
        o = a(79712),
        u = a(79150),
        c = a(24116),
        l = a(67827),
        d = a(80097),
        f = a(72427),
        p = a(70542);
      async function h(
        t,
        {
          blockNumber: e,
          blockTag: a,
          coinType: h,
          name: m,
          gatewayUrls: w,
          strict: g,
          universalResolverAddress: v,
        }
      ) {
        let y = v;
        if (!y) {
          if (!t.chain)
            throw Error('client chain not configured. universalResolverAddress is required.');
          y = (0, s.L)({ blockNumber: e, chain: t.chain, contract: 'ensUniversalResolver' });
        }
        try {
          let s = (0, i.R)({
              abi: r.X$,
              functionName: 'addr',
              ...(null != h ? { args: [(0, l.V)(m), BigInt(h)] } : { args: [(0, l.V)(m)] }),
            }),
            c = {
              address: y,
              abi: r.k3,
              functionName: 'resolve',
              args: [(0, u.NC)((0, d.T)(m)), s],
              blockNumber: e,
              blockTag: a,
            },
            g = (0, f.s)(t, p.L, 'readContract'),
            v = w ? await g({ ...c, args: [...c.args, w] }) : await g(c);
          if ('0x' === v[0]) return null;
          let b = (0, n.k)({
            abi: r.X$,
            args: null != h ? [(0, l.V)(m), BigInt(h)] : void 0,
            functionName: 'addr',
            data: v[0],
          });
          if ('0x' === b || '0x00' === (0, o.f)(b)) return null;
          return b;
        } catch (t) {
          if (g) throw t;
          if ((0, c.c)(t, 'resolve')) return null;
          throw t;
        }
      }
    },
    79609: function (t, e, a) {
      a.d(e, {
        r: function () {
          return A;
        },
      });
      var r = a(70542),
        n = a(77854);
      class i extends n.G {
        constructor({ data: t }) {
          super(
            'Unable to extract image from metadata. The metadata may be malformed or invalid.',
            {
              metaMessages: [
                '- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.',
                '',
                `Provided data: ${JSON.stringify(t)}`,
              ],
              name: 'EnsAvatarInvalidMetadataError',
            }
          );
        }
      }
      class s extends n.G {
        constructor({ reason: t }) {
          super(`ENS NFT avatar URI is invalid. ${t}`, { name: 'EnsAvatarInvalidNftUriError' });
        }
      }
      class o extends n.G {
        constructor({ uri: t }) {
          super(
            `Unable to resolve ENS avatar URI "${t}". The URI may be malformed, invalid, or does not respond with a valid image.`,
            { name: 'EnsAvatarUriResolutionError' }
          );
        }
      }
      class u extends n.G {
        constructor({ namespace: t }) {
          super(
            `ENS NFT avatar namespace "${t}" is not supported. Must be "erc721" or "erc1155".`,
            { name: 'EnsAvatarUnsupportedNamespaceError' }
          );
        }
      }
      let c =
          /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
        l =
          /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
        d = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
        f = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
      async function p(t) {
        try {
          let e = await fetch(t, { method: 'HEAD' });
          if (200 === e.status) {
            let t = e.headers.get('content-type');
            return t?.startsWith('image/');
          }
          return !1;
        } catch (e) {
          if (
            ('object' == typeof e && void 0 !== e.response) ||
            !globalThis.hasOwnProperty('Image')
          )
            return !1;
          return new Promise((e) => {
            let a = new Image();
            (a.onload = () => {
              e(!0);
            }),
              (a.onerror = () => {
                e(!1);
              }),
              (a.src = t);
          });
        }
      }
      function h(t, e) {
        return t ? (t.endsWith('/') ? t.slice(0, -1) : t) : e;
      }
      function m({ uri: t, gatewayUrls: e }) {
        let a = d.test(t);
        if (a) return { uri: t, isOnChain: !0, isEncoded: a };
        let r = h(e?.ipfs, 'https://ipfs.io'),
          n = h(e?.arweave, 'https://arweave.net'),
          i = t.match(c),
          { protocol: s, subpath: u, target: p, subtarget: m = '' } = i?.groups || {},
          w = 'ipns:/' === s || 'ipns/' === u,
          g = 'ipfs:/' === s || 'ipfs/' === u || l.test(t);
        if (t.startsWith('http') && !w && !g) {
          let a = t;
          return (
            e?.arweave && (a = t.replace(/https:\/\/arweave.net/g, e?.arweave)),
            { uri: a, isOnChain: !1, isEncoded: !1 }
          );
        }
        if ((w || g) && p)
          return { uri: `${r}/${w ? 'ipns' : 'ipfs'}/${p}${m}`, isOnChain: !1, isEncoded: !1 };
        if ('ar:/' === s && p) return { uri: `${n}/${p}${m || ''}`, isOnChain: !1, isEncoded: !1 };
        let v = t.replace(f, '');
        if (
          (v.startsWith('<svg') && (v = `data:image/svg+xml;base64,${btoa(v)}`),
          v.startsWith('data:') || v.startsWith('{'))
        )
          return { uri: v, isOnChain: !0, isEncoded: !1 };
        throw new o({ uri: t });
      }
      function w(t) {
        if (
          'object' != typeof t ||
          (!('image' in t) && !('image_url' in t) && !('image_data' in t))
        )
          throw new i({ data: t });
        return t.image || t.image_url || t.image_data;
      }
      async function g({ gatewayUrls: t, uri: e }) {
        try {
          let a = await fetch(e).then((t) => t.json());
          return await v({ gatewayUrls: t, uri: w(a) });
        } catch {
          throw new o({ uri: e });
        }
      }
      async function v({ gatewayUrls: t, uri: e }) {
        let { uri: a, isOnChain: r } = m({ uri: e, gatewayUrls: t });
        if (r || (await p(a))) return a;
        throw new o({ uri: e });
      }
      async function y(t, { nft: e }) {
        if ('erc721' === e.namespace)
          return (0, r.L)(t, {
            address: e.contractAddress,
            abi: [
              {
                name: 'tokenURI',
                type: 'function',
                stateMutability: 'view',
                inputs: [{ name: 'tokenId', type: 'uint256' }],
                outputs: [{ name: '', type: 'string' }],
              },
            ],
            functionName: 'tokenURI',
            args: [BigInt(e.tokenID)],
          });
        if ('erc1155' === e.namespace)
          return (0, r.L)(t, {
            address: e.contractAddress,
            abi: [
              {
                name: 'uri',
                type: 'function',
                stateMutability: 'view',
                inputs: [{ name: '_id', type: 'uint256' }],
                outputs: [{ name: '', type: 'string' }],
              },
            ],
            functionName: 'uri',
            args: [BigInt(e.tokenID)],
          });
        throw new u({ namespace: e.namespace });
      }
      async function b(t, { gatewayUrls: e, record: a }) {
        return /eip155:/i.test(a)
          ? N(t, { gatewayUrls: e, record: a })
          : v({ uri: a, gatewayUrls: e });
      }
      async function N(t, { gatewayUrls: e, record: a }) {
        let r = (function (t) {
            let e = t;
            e.startsWith('did:nft:') && (e = e.replace('did:nft:', '').replace(/_/g, '/'));
            let [a, r, n] = e.split('/'),
              [i, o] = a.split(':'),
              [u, c] = r.split(':');
            if (!i || 'eip155' !== i.toLowerCase())
              throw new s({ reason: 'Only EIP-155 supported' });
            if (!o) throw new s({ reason: 'Chain ID not found' });
            if (!c) throw new s({ reason: 'Contract address not found' });
            if (!n) throw new s({ reason: 'Token ID not found' });
            if (!u) throw new s({ reason: 'ERC namespace not found' });
            return {
              chainID: Number.parseInt(o),
              namespace: u.toLowerCase(),
              contractAddress: c,
              tokenID: n,
            };
          })(a),
          {
            uri: n,
            isOnChain: i,
            isEncoded: o,
          } = m({ uri: await y(t, { nft: r }), gatewayUrls: e });
        if (i && (n.includes('data:application/json;base64,') || n.startsWith('{')))
          return v({
            uri: w(JSON.parse(o ? atob(n.replace('data:application/json;base64,', '')) : n)),
            gatewayUrls: e,
          });
        let u = r.tokenID;
        return (
          'erc1155' === r.namespace && (u = u.replace('0x', '').padStart(64, '0')),
          g({ gatewayUrls: e, uri: n.replace(/(?:0x)?{id}/, u) })
        );
      }
      var E = a(72427),
        I = a(62120);
      async function A(
        t,
        {
          blockNumber: e,
          blockTag: a,
          assetGatewayUrls: r,
          name: n,
          gatewayUrls: i,
          strict: s,
          universalResolverAddress: o,
        }
      ) {
        let u = await (0, E.s)(
          t,
          I.g,
          'getEnsText'
        )({
          blockNumber: e,
          blockTag: a,
          key: 'avatar',
          name: n,
          universalResolverAddress: o,
          gatewayUrls: i,
          strict: s,
        });
        if (!u) return null;
        try {
          return await b(t, { record: u, gatewayUrls: r });
        } catch {
          return null;
        }
      }
    },
    62120: function (t, e, a) {
      a.d(e, {
        g: function () {
          return p;
        },
      });
      var r = a(13317),
        n = a(31359),
        i = a(48666),
        s = a(70731),
        o = a(79150),
        u = a(24116),
        c = a(67827),
        l = a(80097),
        d = a(72427),
        f = a(70542);
      async function p(
        t,
        {
          blockNumber: e,
          blockTag: a,
          name: p,
          key: h,
          gatewayUrls: m,
          strict: w,
          universalResolverAddress: g,
        }
      ) {
        let v = g;
        if (!v) {
          if (!t.chain)
            throw Error('client chain not configured. universalResolverAddress is required.');
          v = (0, s.L)({ blockNumber: e, chain: t.chain, contract: 'ensUniversalResolver' });
        }
        try {
          let s = {
              address: v,
              abi: r.k3,
              functionName: 'resolve',
              args: [
                (0, o.NC)((0, l.T)(p)),
                (0, i.R)({ abi: r.nZ, functionName: 'text', args: [(0, c.V)(p), h] }),
              ],
              blockNumber: e,
              blockTag: a,
            },
            u = (0, d.s)(t, f.L, 'readContract'),
            w = m ? await u({ ...s, args: [...s.args, m] }) : await u(s);
          if ('0x' === w[0]) return null;
          let g = (0, n.k)({ abi: r.nZ, functionName: 'text', data: w[0] });
          return '' === g ? null : g;
        } catch (t) {
          if (w) throw t;
          if ((0, u.c)(t, 'resolve')) return null;
          throw t;
        }
      }
    },
    67827: function (t, e, a) {
      a.d(e, {
        V: function () {
          return u;
        },
      });
      var r = a(1155),
        n = a(13990),
        i = a(79150),
        s = a(60977),
        o = a(52847);
      function u(t) {
        let e = new Uint8Array(32).fill(0);
        if (!t) return (0, i.ci)(e);
        let a = t.split('.');
        for (let t = a.length - 1; t >= 0; t -= 1) {
          let i = (0, o.i)(a[t]),
            u = i ? (0, n.O0)(i) : (0, s.w)((0, n.qX)(a[t]), 'bytes');
          e = (0, s.w)((0, r.zo)([e, u]), 'bytes');
        }
        return (0, i.ci)(e);
      }
    },
  },
]);
