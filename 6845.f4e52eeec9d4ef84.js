(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6845],
  {
    3761: (e, t, r) => {
      'use strict';
      r.d(t, {
        bEt: () => iN,
        EWt: () => iR,
        Pa8: () => ij,
        nyL: () => sY,
        Lp_: () => ik,
        EHS: () => iU,
        Van: () => su,
        Xw0: () => eN,
        Wx8: () => eP,
        e8_: () => tU,
        K3g: () => eS,
        x0t: () => iH,
        F$L: () => iZ,
        YcA: () => iW,
        ovp: () => i$,
        iui: () => iQ,
        Tw2: () => iY,
        wa2: () => iG,
        hEn: () => ej,
        PAk: () => tb,
        gOF: () => eC,
        hwK: () => tR,
        jUZ: () => e_,
        ADD: () => eA,
        ojD: () => eE,
        QJh: () => i4,
        TZl: () => iB,
        two: () => iq,
        Zz7: () => ee,
        R7U: () => eb,
        lFF: () => ev,
        WWN: () => t$,
        jTh: () => eU,
        q_h: () => tT,
        GuA: () => sf,
        $Bq: () => i9,
        sc_: () => tq,
        xkc: () => tC,
        VBM: () => tM,
        aa1: () => i5,
        n6V: () => i3,
        Hjj: () => sg,
        $hI: () => eB,
        n3s: () => ek,
        EN$: () => iM,
        ALl: () => iz,
        m01: () => ef,
        BdH: () => ey,
        nWe: () => sl,
        XqR: () => sz,
        _dF: () => eR,
        aRZ: () => eg,
        Lln: () => ed,
        sc7: () => sV,
        CTo: () => sD,
        lVv: () => ep,
        HNf: () => sE,
        mr0: () => sx,
        w8K: () => e$,
        V7m: () => i1,
        ps1: () => i2,
        b07: () => sb,
        OP1: () => sy,
        tk0: () => sP,
        X3c: () => sL,
        FR8: () => sB,
        Alu: () => sR,
        FiO: () => sC,
        tLy: () => sq,
        z2N: () => sM,
        oKp: () => s$,
        aF0: () => sm,
        TeY: () => sj,
        kuU: () => sT,
        V9G: () => sN,
        iV1: () => sk,
        Hbs: () => sH,
        esh: () => sA,
        M8n: () => sU,
        Qhg: () => sw,
        AYU: () => sI,
        h0Y: () => eD,
        TRk: () => eL,
        hVC: () => tB,
        PUk: () => ex,
        _Yb: () => Q,
        c82: () => eT,
        kob: () => sh,
        wYp: () => i6,
        Ds_: () => ew,
        yy4: () => ez,
        uym: () => sG,
        gZm: () => eq,
        C5G: () => iX,
        AwN: () => i0,
        IjX: () => tN,
        U0i: () => i8,
      });
      var i = r(40459),
        s = function (e, t, r) {
          if (r || 2 == arguments.length)
            for (var i, s = 0, n = t.length; s < n; s++)
              (!i && s in t) || (i || (i = Array.prototype.slice.call(t, 0, s)), (i[s] = t[s]));
          return e.concat(i || Array.prototype.slice.call(t));
        },
        n = function (e, t, r) {
          (this.name = e), (this.version = t), (this.os = r), (this.type = 'browser');
        },
        o = function (e) {
          (this.version = e), (this.type = 'node'), (this.name = 'node'), (this.os = i.platform);
        },
        a = function (e, t, r, i) {
          (this.name = e),
            (this.version = t),
            (this.os = r),
            (this.bot = i),
            (this.type = 'bot-device');
        },
        c = function () {
          (this.type = 'bot'),
            (this.bot = !0),
            (this.name = 'bot'),
            (this.version = null),
            (this.os = null);
        },
        l = function () {
          (this.type = 'react-native'),
            (this.name = 'react-native'),
            (this.version = null),
            (this.os = null);
        },
        h = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
        u = [
          ['aol', /AOLShield\/([0-9\._]+)/],
          ['edge', /Edge\/([0-9\._]+)/],
          ['edge-ios', /EdgiOS\/([0-9\._]+)/],
          ['yandexbrowser', /YaBrowser\/([0-9\._]+)/],
          ['kakaotalk', /KAKAOTALK\s([0-9\.]+)/],
          ['samsung', /SamsungBrowser\/([0-9\.]+)/],
          ['silk', /\bSilk\/([0-9._-]+)\b/],
          ['miui', /MiuiBrowser\/([0-9\.]+)$/],
          ['beaker', /BeakerBrowser\/([0-9\.]+)/],
          ['edge-chromium', /EdgA?\/([0-9\.]+)/],
          ['chromium-webview', /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ['phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/],
          ['crios', /CriOS\/([0-9\.]+)(:?\s|$)/],
          ['firefox', /Firefox\/([0-9\.]+)(?:\s|$)/],
          ['fxios', /FxiOS\/([0-9\.]+)/],
          ['opera-mini', /Opera Mini.*Version\/([0-9\.]+)/],
          ['opera', /Opera\/([0-9\.]+)(?:\s|$)/],
          ['opera', /OPR\/([0-9\.]+)(:?\s|$)/],
          ['pie', /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
          [
            'pie',
            /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/,
          ],
          ['netfront', /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
          ['ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
          ['ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
          ['ie', /MSIE\s(7\.0)/],
          ['bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/],
          ['android', /Android\s([0-9\.]+)/],
          ['ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/],
          ['safari', /Version\/([0-9\._]+).*Safari/],
          ['facebook', /FB[AS]V\/([0-9\.]+)/],
          ['instagram', /Instagram\s([0-9\.]+)/],
          ['ios-webview', /AppleWebKit\/([0-9\.]+).*Mobile/],
          ['ios-webview', /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
          ['curl', /^curl\/([0-9\.]+)$/],
          [
            'searchbot',
            /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
          ],
        ],
        d = [
          ['iOS', /iP(hone|od|ad)/],
          ['Android OS', /Android/],
          ['BlackBerry OS', /BlackBerry|BB10/],
          ['Windows Mobile', /IEMobile/],
          ['Amazon OS', /Kindle/],
          ['Windows 3.11', /Win16/],
          ['Windows 95', /(Windows 95)|(Win95)|(Windows_95)/],
          ['Windows 98', /(Windows 98)|(Win98)/],
          ['Windows 2000', /(Windows NT 5.0)|(Windows 2000)/],
          ['Windows XP', /(Windows NT 5.1)|(Windows XP)/],
          ['Windows Server 2003', /(Windows NT 5.2)/],
          ['Windows Vista', /(Windows NT 6.0)/],
          ['Windows 7', /(Windows NT 6.1)/],
          ['Windows 8', /(Windows NT 6.2)/],
          ['Windows 8.1', /(Windows NT 6.3)/],
          ['Windows 10', /(Windows NT 10.0)/],
          ['Windows ME', /Windows ME/],
          ['Windows CE', /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
          ['Open BSD', /OpenBSD/],
          ['Sun OS', /SunOS/],
          ['Chrome OS', /CrOS/],
          ['Linux', /(Linux)|(X11)/],
          ['Mac OS', /(Mac_PowerPC)|(Macintosh)/],
          ['QNX', /QNX/],
          ['BeOS', /BeOS/],
          ['OS/2', /OS\/2/],
        ],
        p = r(95572),
        f = r(37752),
        g = r(58421);
      let y = '2.23.2',
        m = {
          getDocsUrl: ({ docsBaseUrl: e, docsPath: t = '', docsSlug: r }) =>
            t ? `${e ?? 'https://viem.sh'}${t}${r ? `#${r}` : ''}` : void 0,
          version: `viem@${y}`,
        };
      class b extends Error {
        constructor(e, t = {}) {
          let r =
              t.cause instanceof b
                ? t.cause.details
                : t.cause?.message
                  ? t.cause.message
                  : t.details,
            i = (t.cause instanceof b && t.cause.docsPath) || t.docsPath,
            s = m.getDocsUrl?.({ ...t, docsPath: i });
          super(
            [
              e || 'An error occurred.',
              '',
              ...(t.metaMessages ? [...t.metaMessages, ''] : []),
              ...(s ? [`Docs: ${s}`] : []),
              ...(r ? [`Details: ${r}`] : []),
              ...(m.version ? [`Version: ${m.version}`] : []),
            ].join('\n'),
            t.cause ? { cause: t.cause } : void 0
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
            Object.defineProperty(this, 'version', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, 'name', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 'BaseError',
            }),
            (this.details = r),
            (this.docsPath = i),
            (this.metaMessages = t.metaMessages),
            (this.name = t.name ?? this.name),
            (this.shortMessage = e),
            (this.version = y);
        }
        walk(e) {
          return (function e(t, r) {
            return r?.(t)
              ? t
              : t && 'object' == typeof t && 'cause' in t && void 0 !== t.cause
                ? e(t.cause, r)
                : r
                  ? null
                  : t;
          })(this, e);
        }
      }
      function w(e, { strict: t = !0 } = {}) {
        return !!e && 'string' == typeof e && (t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith('0x'));
      }
      class v extends b {
        constructor({ size: e, targetSize: t, type: r }) {
          super(
            `${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`,
            { name: 'SizeExceedsPaddingSizeError' }
          );
        }
      }
      function E(e, { dir: t, size: r = 32 } = {}) {
        return 'string' == typeof e
          ? (function (e, { dir: t, size: r = 32 } = {}) {
              if (null === r) return e;
              let i = e.replace('0x', '');
              if (i.length > 2 * r)
                throw new v({ size: Math.ceil(i.length / 2), targetSize: r, type: 'hex' });
              return `0x${i['right' === t ? 'padEnd' : 'padStart'](2 * r, '0')}`;
            })(e, { dir: t, size: r })
          : (function (e, { dir: t, size: r = 32 } = {}) {
              if (null === r) return e;
              if (e.length > r) throw new v({ size: e.length, targetSize: r, type: 'bytes' });
              let i = new Uint8Array(r);
              for (let s = 0; s < r; s++) {
                let n = 'right' === t;
                i[n ? s : r - s - 1] = e[n ? s : e.length - s - 1];
              }
              return i;
            })(e, { dir: t, size: r });
      }
      class _ extends b {
        constructor({ max: e, min: t, signed: r, size: i, value: s }) {
          super(
            `Number "${s}" is not in safe ${i ? `${8 * i}-bit ${r ? 'signed' : 'unsigned'} ` : ''}integer range ${e ? `(${t} to ${e})` : `(above ${t})`}`,
            { name: 'IntegerOutOfRangeError' }
          );
        }
      }
      class I extends b {
        constructor({ givenSize: e, maxSize: t }) {
          super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`, {
            name: 'SizeOverflowError',
          });
        }
      }
      function D(e) {
        return w(e, { strict: !1 }) ? Math.ceil((e.length - 2) / 2) : e.length;
      }
      function x(e, { size: t }) {
        if (D(e) > t) throw new I({ givenSize: D(e), maxSize: t });
      }
      function P(e, t = {}) {
        let { signed: r } = t;
        t.size && x(e, { size: t.size });
        let i = BigInt(e);
        if (!r) return i;
        let s = (e.length - 2) / 2;
        return i <= (1n << (8n * BigInt(s) - 1n)) - 1n
          ? i
          : i - BigInt(`0x${'f'.padStart(2 * s, 'f')}`) - 1n;
      }
      let S = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
      function O(e, t = {}) {
        return 'number' == typeof e || 'bigint' == typeof e
          ? C(e, t)
          : 'string' == typeof e
            ? (function (e, t = {}) {
                return A(T.encode(e), t);
              })(e, t)
            : 'boolean' == typeof e
              ? (function (e, t = {}) {
                  let r = `0x${Number(e)}`;
                  return 'number' == typeof t.size
                    ? (x(r, { size: t.size }), E(r, { size: t.size }))
                    : r;
                })(e, t)
              : A(e, t);
      }
      function A(e, t = {}) {
        let r = '';
        for (let t = 0; t < e.length; t++) r += S[e[t]];
        let i = `0x${r}`;
        return 'number' == typeof t.size
          ? (x(i, { size: t.size }), E(i, { dir: 'right', size: t.size }))
          : i;
      }
      function C(e, t = {}) {
        let r;
        let { signed: i, size: s } = t,
          n = BigInt(e);
        s
          ? (r = i ? (1n << (8n * BigInt(s) - 1n)) - 1n : 2n ** (8n * BigInt(s)) - 1n)
          : 'number' == typeof e && (r = BigInt(Number.MAX_SAFE_INTEGER));
        let o = 'bigint' == typeof r && i ? -r - 1n : 0;
        if ((r && n > r) || n < o) {
          let t = 'bigint' == typeof e ? 'n' : '';
          throw new _({
            max: r ? `${r}${t}` : void 0,
            min: `${o}${t}`,
            signed: i,
            size: s,
            value: `${e}${t}`,
          });
        }
        let a = `0x${(i && n < 0 ? (1n << BigInt(8 * s)) + BigInt(n) : n).toString(16)}`;
        return s ? E(a, { size: s }) : a;
      }
      let T = new TextEncoder(),
        N = new TextEncoder(),
        R = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function j(e) {
        return e >= R.zero && e <= R.nine
          ? e - R.zero
          : e >= R.A && e <= R.F
            ? e - (R.A - 10)
            : e >= R.a && e <= R.f
              ? e - (R.a - 10)
              : void 0;
      }
      function L(e, t = {}) {
        let r = e;
        t.size && (x(r, { size: t.size }), (r = E(r, { dir: 'right', size: t.size })));
        let i = r.slice(2);
        i.length % 2 && (i = `0${i}`);
        let s = i.length / 2,
          n = new Uint8Array(s);
        for (let e = 0, t = 0; e < s; e++) {
          let r = j(i.charCodeAt(t++)),
            s = j(i.charCodeAt(t++));
          if (void 0 === r || void 0 === s)
            throw new b(`Invalid byte sequence ("${i[t - 2]}${i[t - 1]}" in "${i}").`);
          n[e] = 16 * r + s;
        }
        return n;
      }
      function k(e, t = {}) {
        let r = N.encode(e);
        return 'number' == typeof t.size
          ? (x(r, { size: t.size }), E(r, { dir: 'right', size: t.size }))
          : r;
      }
      var U = r(62923);
      function B(e, t) {
        let r = (0, U.lY)(
          w(e, { strict: !1 })
            ? (function (e, t = {}) {
                return 'number' == typeof e || 'bigint' == typeof e
                  ? L(C(e, t))
                  : 'boolean' == typeof e
                    ? (function (e, t = {}) {
                        let r = new Uint8Array(1);
                        return ((r[0] = Number(e)), 'number' == typeof t.size)
                          ? (x(r, { size: t.size }), E(r, { size: t.size }))
                          : r;
                      })(e, t)
                    : w(e)
                      ? L(e, t)
                      : k(e, t);
              })(e)
            : e
        );
        return 'bytes' === (t || 'hex') ? r : O(r);
      }
      class q extends Map {
        constructor(e) {
          super(),
            Object.defineProperty(this, 'maxSize', {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.maxSize = e);
        }
        get(e) {
          let t = super.get(e);
          return super.has(e) && void 0 !== t && (this.delete(e), super.set(e, t)), t;
        }
        set(e, t) {
          if ((super.set(e, t), this.maxSize && this.size > this.maxSize)) {
            let e = this.keys().next().value;
            e && this.delete(e);
          }
          return this;
        }
      }
      let $ = new q(8192);
      async function M({ hash: e, signature: t }) {
        let i = w(e) ? e : O(e),
          { secp256k1: s } = await r.e(6373).then(r.bind(r, 16373)),
          n = (() => {
            if ('object' == typeof t && 'r' in t && 's' in t) {
              let { r: e, s: r, v: i, yParity: n } = t,
                o = z(Number(n ?? i));
              return new s.Signature(P(e), P(r)).addRecoveryBit(o);
            }
            let e = w(t) ? t : O(t),
              r = z(
                (function (e, t = {}) {
                  return Number(P(e, t));
                })(`0x${e.slice(130)}`)
              );
            return s.Signature.fromCompact(e.substring(2, 130)).addRecoveryBit(r);
          })()
            .recoverPublicKey(i.substring(2))
            .toHex(!1);
        return `0x${n}`;
      }
      function z(e) {
        if (0 === e || 1 === e) return e;
        if (27 === e) return 0;
        if (28 === e) return 1;
        throw Error('Invalid yParityOrV value');
      }
      async function F({ hash: e, signature: t }) {
        return (function (e) {
          let t = B(`0x${e.substring(4)}`).substring(26);
          return (function (e, t) {
            if ($.has(`${e}.${void 0}`)) return $.get(`${e}.${t}`);
            let r = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
              i = B(k(r), 'bytes'),
              s = (t ? r.substring(`${t}0x`.length) : r).split('');
            for (let e = 0; e < 40; e += 2)
              i[e >> 1] >> 4 >= 8 && s[e] && (s[e] = s[e].toUpperCase()),
                (15 & i[e >> 1]) >= 8 && s[e + 1] && (s[e + 1] = s[e + 1].toUpperCase());
            let n = `0x${s.join('')}`;
            return $.set(`${e}.${t}`, n), n;
          })(`0x${t}`);
        })(await M({ hash: e, signature: t }));
      }
      let H = (function (e) {
        if (e.length >= 255) throw TypeError('Alphabet too long');
        let t = new Uint8Array(256);
        for (let e = 0; e < t.length; e++) t[e] = 255;
        for (let r = 0; r < e.length; r++) {
          let i = e.charAt(r),
            s = i.charCodeAt(0);
          if (255 !== t[s]) throw TypeError(i + ' is ambiguous');
          t[s] = r;
        }
        let r = e.length,
          i = e.charAt(0),
          s = Math.log(r) / Math.log(256),
          n = Math.log(256) / Math.log(r);
        function o(e) {
          if ('string' != typeof e) throw TypeError('Expected String');
          if (0 === e.length) return new Uint8Array();
          let n = 0,
            o = 0,
            a = 0;
          for (; e[n] === i; ) o++, n++;
          let c = ((e.length - n) * s + 1) >>> 0,
            l = new Uint8Array(c);
          for (; n < e.length; ) {
            let i = e.charCodeAt(n);
            if (i > 255) return;
            let s = t[i];
            if (255 === s) return;
            let o = 0;
            for (let e = c - 1; (0 !== s || o < a) && -1 !== e; e--, o++)
              (s += (r * l[e]) >>> 0), (l[e] = s % 256 >>> 0), (s = (s / 256) >>> 0);
            if (0 !== s) throw Error('Non-zero carry');
            (a = o), n++;
          }
          let h = c - a;
          for (; h !== c && 0 === l[h]; ) h++;
          let u = new Uint8Array(o + (c - h)),
            d = o;
          for (; h !== c; ) u[d++] = l[h++];
          return u;
        }
        return {
          encode: function (t) {
            if (
              (t instanceof Uint8Array ||
                (ArrayBuffer.isView(t)
                  ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                  : Array.isArray(t) && (t = Uint8Array.from(t))),
              !(t instanceof Uint8Array))
            )
              throw TypeError('Expected Uint8Array');
            if (0 === t.length) return '';
            let s = 0,
              o = 0,
              a = 0,
              c = t.length;
            for (; a !== c && 0 === t[a]; ) a++, s++;
            let l = ((c - a) * n + 1) >>> 0,
              h = new Uint8Array(l);
            for (; a !== c; ) {
              let e = t[a],
                i = 0;
              for (let t = l - 1; (0 !== e || i < o) && -1 !== t; t--, i++)
                (e += (256 * h[t]) >>> 0), (h[t] = e % r >>> 0), (e = (e / r) >>> 0);
              if (0 !== e) throw Error('Non-zero carry');
              (o = i), a++;
            }
            let u = l - o;
            for (; u !== l && 0 === h[u]; ) u++;
            let d = i.repeat(s);
            for (; u < l; ++u) d += e.charAt(h[u]);
            return d;
          },
          decodeUnsafe: o,
          decode: function (e) {
            let t = o(e);
            if (t) return t;
            throw Error('Non-base' + r + ' character');
          },
        };
      })('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');
      var V = r(78618),
        K = r(34322);
      function G(e, t, r) {
        var i, s;
        let n;
        return (
          (r.length
            ? ((i = t.length), Array.isArray(e) ? e.length >= i : Object.keys(e).length >= i)
            : ((s = t.length), Array.isArray(e) ? e.length === s : Object.keys(e).length === s)) &&
          ((n = !0),
          t.forEach((t) => {
            t in e || (n = !1);
          }),
          n)
        );
      }
      function W(e, t, r = '_') {
        let i = e.split(r);
        return i[i.length - 1].trim().toLowerCase() === t.trim().toLowerCase();
      }
      let Y = {
        waku: {
          publish: 'waku_publish',
          batchPublish: 'waku_batchPublish',
          subscribe: 'waku_subscribe',
          batchSubscribe: 'waku_batchSubscribe',
          subscription: 'waku_subscription',
          unsubscribe: 'waku_unsubscribe',
          batchUnsubscribe: 'waku_batchUnsubscribe',
          batchFetchMessages: 'waku_batchFetchMessages',
        },
        irn: {
          publish: 'irn_publish',
          batchPublish: 'irn_batchPublish',
          subscribe: 'irn_subscribe',
          batchSubscribe: 'irn_batchSubscribe',
          subscription: 'irn_subscription',
          unsubscribe: 'irn_unsubscribe',
          batchUnsubscribe: 'irn_batchUnsubscribe',
          batchFetchMessages: 'irn_batchFetchMessages',
        },
        iridium: {
          publish: 'iridium_publish',
          batchPublish: 'iridium_batchPublish',
          subscribe: 'iridium_subscribe',
          batchSubscribe: 'iridium_batchSubscribe',
          subscription: 'iridium_subscription',
          unsubscribe: 'iridium_unsubscribe',
          batchUnsubscribe: 'iridium_batchUnsubscribe',
          batchFetchMessages: 'iridium_batchFetchMessages',
        },
      };
      var Z = r(40459),
        J = r(50887).Buffer;
      function Q(e) {
        let [t, r] = e.split(':');
        return { namespace: t, reference: r };
      }
      function X(e) {
        let [t, r, i] = e.split(':');
        return { namespace: t, reference: r, address: i };
      }
      function ee(e, t = []) {
        let r = [];
        return (
          Object.keys(e).forEach((i) => {
            if (t.length && !t.includes(i)) return;
            let s = e[i];
            r.push(...s.accounts);
          }),
          r
        );
      }
      function et(e, t) {
        return e.includes(':') ? [e] : t.chains || [];
      }
      var er = Object.defineProperty,
        ei = Object.defineProperties,
        es = Object.getOwnPropertyDescriptors,
        en = Object.getOwnPropertySymbols,
        eo = Object.prototype.hasOwnProperty,
        ea = Object.prototype.propertyIsEnumerable,
        ec = (e, t, r) =>
          t in e
            ? er(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        el = (e, t) => {
          for (var r in t || (t = {})) eo.call(t, r) && ec(e, r, t[r]);
          if (en) for (var r of en(t)) ea.call(t, r) && ec(e, r, t[r]);
          return e;
        },
        eh = (e, t) => ei(e, es(t));
      let eu = {
        reactNative: 'react-native',
        node: 'node',
        browser: 'browser',
        unknown: 'unknown',
      };
      function ed() {
        return 'u' > typeof Z && 'u' > typeof Z.versions && 'u' > typeof Z.versions.node;
      }
      function ep() {
        return (
          !(0, f.getDocument)() && !!(0, f.getNavigator)() && 'ReactNative' === navigator.product
        );
      }
      function ef() {
        return (
          ep() &&
          'u' > typeof r.g &&
          'u' > typeof (null == r.g ? void 0 : r.g.Platform) &&
          (null == r.g ? void 0 : r.g.Platform.OS) === 'android'
        );
      }
      function eg() {
        return (
          ep() &&
          'u' > typeof r.g &&
          'u' > typeof (null == r.g ? void 0 : r.g.Platform) &&
          (null == r.g ? void 0 : r.g.Platform.OS) === 'ios'
        );
      }
      function ey() {
        return !ed() && !!(0, f.getNavigator)() && !!(0, f.getDocument)();
      }
      function em() {
        return ep() ? eu.reactNative : ed() ? eu.node : ey() ? eu.browser : eu.unknown;
      }
      function eb() {
        var e;
        try {
          return ep() && 'u' > typeof r.g && 'u' > typeof (null == r.g ? void 0 : r.g.Application)
            ? null == (e = r.g.Application)
              ? void 0
              : e.applicationId
            : void 0;
        } catch {
          return;
        }
      }
      function ew(e) {
        var t, r;
        let i = ev();
        try {
          return (
            null != e &&
              e.url &&
              i.url &&
              e.url !== i.url &&
              (console.warn(
                `The configured WalletConnect 'metadata.url':${e.url} differs from the actual page url:${i.url}. This is probably unintended and can lead to issues.`
              ),
              (e.url = i.url)),
            null != (t = e?.icons) &&
              t.length &&
              e.icons.length > 0 &&
              (e.icons = e.icons.filter((e) => '' !== e)),
            eh(el(el({}, i), e), {
              url: e?.url || i.url,
              name: e?.name || i.name,
              description: e?.description || i.description,
              icons: null != (r = e?.icons) && r.length && e.icons.length > 0 ? e.icons : i.icons,
            })
          );
        } catch (t) {
          return console.warn('Error populating app metadata', t), e || i;
        }
      }
      function ev() {
        return (0, g.g)() || { name: '', description: '', url: '', icons: [''] };
      }
      function eE(e, t, p) {
        let g = (function () {
            if (
              em() === eu.reactNative &&
              'u' > typeof r.g &&
              'u' > typeof (null == r.g ? void 0 : r.g.Platform)
            ) {
              let { OS: e, Version: t } = r.g.Platform;
              return [e, t].join('-');
            }
            let e =
              'undefined' == typeof document &&
              'undefined' != typeof navigator &&
              'ReactNative' === navigator.product
                ? new l()
                : 'undefined' != typeof navigator
                  ? (function (e) {
                      var t,
                        r =
                          '' !== (t = e) &&
                          u.reduce(function (e, r) {
                            var i = r[0],
                              s = r[1];
                            if (e) return e;
                            var n = s.exec(t);
                            return !!n && [i, n];
                          }, !1);
                      if (!r) return null;
                      var i = r[0],
                        o = r[1];
                      if ('searchbot' === i) return new c();
                      var l = o[1] && o[1].split('.').join('_').split('_').slice(0, 3);
                      l
                        ? l.length < 3 &&
                          (l = s(
                            s([], l, !0),
                            (function (e) {
                              for (var t = [], r = 0; r < e; r++) t.push('0');
                              return t;
                            })(3 - l.length),
                            !0
                          ))
                        : (l = []);
                      var p = l.join('.'),
                        f = (function (e) {
                          for (var t = 0, r = d.length; t < r; t++) {
                            var i = d[t],
                              s = i[0];
                            if (i[1].exec(e)) return s;
                          }
                          return null;
                        })(e),
                        g = h.exec(e);
                      return g && g[1] ? new a(i, p, f, g[1]) : new n(i, p, f);
                    })(navigator.userAgent)
                  : void 0 !== i && i.version
                    ? new o(i.version.slice(1))
                    : null;
            if (null === e) return 'unknown';
            let t = e.os ? e.os.replace(' ', '').toLowerCase() : 'unknown';
            return 'browser' === e.type
              ? [t, e.name, e.version].join('-')
              : [t, e.version].join('-');
          })(),
          y = (function () {
            var e;
            let t = em();
            return t === eu.browser
              ? [t, (null == (e = (0, f.getLocation)()) ? void 0 : e.host) || 'unknown'].join(':')
              : t;
          })();
        return [[e, t].join('-'), ['js', p].join('-'), g, y].join('/');
      }
      function e_({
        protocol: e,
        version: t,
        relayUrl: r,
        sdkVersion: i,
        auth: s,
        projectId: n,
        useOnCloseEvent: o,
        bundleId: a,
        packageName: c,
      }) {
        let l = r.split('?'),
          h = eE(e, t, i),
          u = (function (e, t) {
            let r = new URLSearchParams(e);
            for (let e of Object.keys(t).sort())
              if (t.hasOwnProperty(e)) {
                let i = t[e];
                void 0 !== i && r.set(e, i);
              }
            return r.toString();
          })(l[1] || '', {
            auth: s,
            ua: h,
            projectId: n,
            useOnCloseEvent: o || void 0,
            packageName: c || void 0,
            bundleId: a || void 0,
          });
        return l[0] + '?' + u;
      }
      function eI(e, t) {
        return e.filter((e) => t.includes(e)).length === e.length;
      }
      function eD(e) {
        return Object.fromEntries(e.entries());
      }
      function ex(e) {
        return new Map(Object.entries(e));
      }
      function eP(e = p.FIVE_MINUTES, t) {
        let r, i, s, n;
        let o = (0, p.toMiliseconds)(e || p.FIVE_MINUTES);
        return {
          resolve: (e) => {
            s && r && (clearTimeout(s), r(e), (n = Promise.resolve(e)));
          },
          reject: (e) => {
            s && i && (clearTimeout(s), i(e));
          },
          done: () =>
            new Promise((e, a) => {
              if (n) return e(n);
              (s = setTimeout(() => {
                let e = Error(t);
                (n = Promise.reject(e)), a(e);
              }, o)),
                (r = e),
                (i = a);
            }),
        };
      }
      function eS(e, t, r) {
        return new Promise(async (i, s) => {
          let n = setTimeout(() => s(Error(r)), t);
          try {
            let t = await e;
            i(t);
          } catch (e) {
            s(e);
          }
          clearTimeout(n);
        });
      }
      function eO(e, t) {
        if ('string' == typeof t && t.startsWith(`${e}:`)) return t;
        if ('topic' === e.toLowerCase()) {
          if ('string' != typeof t)
            throw Error('Value must be "string" for expirer target type: topic');
          return `topic:${t}`;
        }
        if ('id' === e.toLowerCase()) {
          if ('number' != typeof t)
            throw Error('Value must be "number" for expirer target type: id');
          return `id:${t}`;
        }
        throw Error(`Unknown expirer target type: ${e}`);
      }
      function eA(e) {
        return eO('topic', e);
      }
      function eC(e) {
        return eO('id', e);
      }
      function eT(e) {
        let [t, r] = e.split(':'),
          i = { id: void 0, topic: void 0 };
        if ('topic' === t && 'string' == typeof r) i.topic = r;
        else if ('id' === t && Number.isInteger(Number(r))) i.id = Number(r);
        else throw Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);
        return i;
      }
      function eN(e, t) {
        return (0, p.fromMiliseconds)((t || Date.now()) + (0, p.toMiliseconds)(e));
      }
      function eR(e) {
        return Date.now() >= (0, p.toMiliseconds)(e);
      }
      function ej(e, t) {
        return `${e}${t ? `:${t}` : ''}`;
      }
      function eL(e = [], t = []) {
        return [...new Set([...e, ...t])];
      }
      async function ek({ id: e, topic: t, wcDeepLink: i }) {
        var s, n;
        try {
          if (!i) return;
          let o = 'string' == typeof i ? JSON.parse(i) : i,
            a = o?.href;
          if ('string' != typeof a) return;
          let c = (function (e, t, r) {
              let i = `requestId=${t}&sessionTopic=${r}`;
              e.endsWith('/') && (e = e.slice(0, -1));
              let s = `${e}`;
              if (e.startsWith('https://t.me')) {
                let t = e.includes('?') ? '&startapp=' : '?startapp=';
                s = `${s}${t}${(function (e, t = !1) {
                  let r = J.from(e).toString('base64');
                  return t ? r.replace(/[=]/g, '') : r;
                })(i, !0)}`;
              } else s = `${s}/wc?${i}`;
              return s;
            })(a, e, t),
            l = em();
          if (l === eu.browser) {
            let e;
            if (!(null != (s = (0, f.getDocument)()) && s.hasFocus())) {
              console.warn('Document does not have focus, skipping deeplink.');
              return;
            }
            (n = c),
              (e = '_self'),
              !(function () {
                try {
                  return window.self !== window.top;
                } catch {
                  return !1;
                }
              })()
                ? (('u' > typeof window &&
                    (!!window.TelegramWebviewProxy ||
                      !!window.Telegram ||
                      !!window.TelegramWebviewProxyProto)) ||
                    n.startsWith('https://') ||
                    n.startsWith('http://')) &&
                  (e = '_blank')
                : (e = '_top'),
              window.open(n, e, 'noreferrer noopener');
          } else
            l === eu.reactNative &&
              'u' > typeof (null == r.g ? void 0 : r.g.Linking) &&
              (await r.g.Linking.openURL(c));
        } catch (e) {
          console.error(e);
        }
      }
      async function eU(e, t) {
        let r = '';
        try {
          if (ey() && (r = localStorage.getItem(t))) return r;
          r = await e.getItem(t);
        } catch (e) {
          console.error(e);
        }
        return r;
      }
      function eB(e, t) {
        if (!e.includes(t)) return null;
        let r = e.split(/([&,?,=])/),
          i = r.indexOf(t);
        return r[i + 2];
      }
      function eq() {
        return 'u' > typeof crypto && null != crypto && crypto.randomUUID
          ? crypto.randomUUID()
          : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/gu, (e) => {
              let t = (16 * Math.random()) | 0;
              return ('x' === e ? t : (3 & t) | 8).toString(16);
            });
      }
      function e$() {
        return 'u' > typeof Z && 'true' === Z.env.IS_VITEST;
      }
      function eM(e) {
        return J.from(e, 'base64').toString('utf-8');
      }
      function ez(e) {
        return new Promise((t) => setTimeout(t, e));
      }
      function eF(e) {
        if (!Number.isSafeInteger(e) || e < 0) throw Error('positive integer expected, got ' + e);
      }
      function eH(e, ...t) {
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
      function eV(e) {
        if ('function' != typeof e || 'function' != typeof e.create)
          throw Error('Hash should be wrapped by utils.wrapConstructor');
        eF(e.outputLen), eF(e.blockLen);
      }
      function eK(e, t = !0) {
        if (e.destroyed) throw Error('Hash instance has been destroyed');
        if (t && e.finished) throw Error('Hash#digest() has already been called');
      }
      function eG(e, t) {
        eH(e);
        let r = t.outputLen;
        if (e.length < r) throw Error('digestInto() expects output buffer of length at least ' + r);
      }
      let eW = BigInt(0x100000000 - 1),
        eY = BigInt(32),
        eZ = (e, t, r) => (e << r) | (t >>> (32 - r)),
        eJ = (e, t, r) => (t << r) | (e >>> (32 - r)),
        eQ = (e, t, r) => (t << (r - 32)) | (e >>> (64 - r)),
        eX = (e, t, r) => (e << (r - 32)) | (t >>> (64 - r)),
        e0 = 'object' == typeof globalThis && 'crypto' in globalThis ? globalThis.crypto : void 0;
      function e1(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function e2(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      let e8 = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0];
      function e3(e) {
        for (let r = 0; r < e.length; r++) {
          var t;
          e[r] =
            (((t = e[r]) << 24) & 0xff000000) |
            ((t << 8) & 0xff0000) |
            ((t >>> 8) & 65280) |
            ((t >>> 24) & 255);
        }
      }
      function e5(e) {
        return (
          'string' == typeof e &&
            (e = (function (e) {
              if ('string' != typeof e) throw Error('utf8ToBytes expected string, got ' + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          eH(e),
          e
        );
      }
      class e6 {
        clone() {
          return this._cloneInto();
        }
      }
      function e4(e) {
        let t = (t) => e().update(e5(t)).digest(),
          r = e();
        return (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = () => e()), t;
      }
      function e9(e = 32) {
        if (e0 && 'function' == typeof e0.getRandomValues)
          return e0.getRandomValues(new Uint8Array(e));
        if (e0 && 'function' == typeof e0.randomBytes) return e0.randomBytes(e);
        throw Error('crypto.getRandomValues must be defined');
      }
      let e7 = [],
        te = [],
        tt = [],
        tr = BigInt(0),
        ti = BigInt(1),
        ts = BigInt(2),
        tn = BigInt(7),
        to = BigInt(256),
        ta = BigInt(113);
      for (let e = 0, t = ti, r = 1, i = 0; e < 24; e++) {
        ([r, i] = [i, (2 * r + 3 * i) % 5]),
          e7.push(2 * (5 * i + r)),
          te.push((((e + 1) * (e + 2)) / 2) % 64);
        let s = tr;
        for (let e = 0; e < 7; e++)
          (t = ((t << ti) ^ ((t >> tn) * ta)) % to) & ts && (s ^= ti << ((ti << BigInt(e)) - ti));
        tt.push(s);
      }
      let [tc, tl] = (function (e, t = !1) {
          let r = new Uint32Array(e.length),
            i = new Uint32Array(e.length);
          for (let s = 0; s < e.length; s++) {
            let { h: n, l: o } = (function (e, t = !1) {
              return t
                ? { h: Number(e & eW), l: Number((e >> eY) & eW) }
                : { h: 0 | Number((e >> eY) & eW), l: 0 | Number(e & eW) };
            })(e[s], t);
            [r[s], i[s]] = [n, o];
          }
          return [r, i];
        })(tt, !0),
        th = (e, t, r) => (r > 32 ? eQ(e, t, r) : eZ(e, t, r)),
        tu = (e, t, r) => (r > 32 ? eX(e, t, r) : eJ(e, t, r));
      class td extends e6 {
        constructor(e, t, r, i = !1, s = 24) {
          if (
            (super(),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = r),
            (this.enableXOF = i),
            (this.rounds = s),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            eF(r),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error('Sha3 supports only keccak-f1600 function');
          (this.state = new Uint8Array(200)),
            (this.state32 = (function (e) {
              return new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
            })(this.state));
        }
        keccak() {
          e8 || e3(this.state32),
            (function (e, t = 24) {
              let r = new Uint32Array(10);
              for (let i = 24 - t; i < 24; i++) {
                for (let t = 0; t < 10; t++)
                  r[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                for (let t = 0; t < 10; t += 2) {
                  let i = (t + 8) % 10,
                    s = (t + 2) % 10,
                    n = r[s],
                    o = r[s + 1],
                    a = th(n, o, 1) ^ r[i],
                    c = tu(n, o, 1) ^ r[i + 1];
                  for (let r = 0; r < 50; r += 10) (e[t + r] ^= a), (e[t + r + 1] ^= c);
                }
                let t = e[2],
                  s = e[3];
                for (let r = 0; r < 24; r++) {
                  let i = te[r],
                    n = th(t, s, i),
                    o = tu(t, s, i),
                    a = e7[r];
                  (t = e[a]), (s = e[a + 1]), (e[a] = n), (e[a + 1] = o);
                }
                for (let t = 0; t < 50; t += 10) {
                  for (let i = 0; i < 10; i++) r[i] = e[t + i];
                  for (let i = 0; i < 10; i++) e[t + i] ^= ~r[(i + 2) % 10] & r[(i + 4) % 10];
                }
                (e[0] ^= tc[i]), (e[1] ^= tl[i]);
              }
              r.fill(0);
            })(this.state32, this.rounds),
            e8 || e3(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          eK(this);
          let { blockLen: t, state: r } = this,
            i = (e = e5(e)).length;
          for (let s = 0; s < i; ) {
            let n = Math.min(t - this.pos, i - s);
            for (let t = 0; t < n; t++) r[this.pos++] ^= e[s++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: r, blockLen: i } = this;
          (e[r] ^= t),
            (128 & t) != 0 && r === i - 1 && this.keccak(),
            (e[i - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          eK(this, !1), eH(e), this.finish();
          let t = this.state,
            { blockLen: r } = this;
          for (let i = 0, s = e.length; i < s; ) {
            this.posOut >= r && this.keccak();
            let n = Math.min(r - this.posOut, s - i);
            e.set(t.subarray(this.posOut, this.posOut + n), i), (this.posOut += n), (i += n);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF) throw Error('XOF is not possible for this instance');
          return this.writeInto(e);
        }
        xof(e) {
          return eF(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if ((eG(e, this), this.finished)) throw Error('digest() was already called');
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(e) {
          let { blockLen: t, suffix: r, outputLen: i, rounds: s, enableXOF: n } = this;
          return (
            e || (e = new td(t, r, i, n, s)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = s),
            (e.suffix = r),
            (e.outputLen = i),
            (e.enableXOF = n),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      let tp = e4(() => new td(136, 1, 32));
      function tf(e) {
        let t = `Ethereum Signed Message:
${e.length}`,
          r = new TextEncoder().encode(t + e);
        return '0x' + J.from(tp(r)).toString('hex');
      }
      async function tg(e, t, r, i, s, n) {
        switch (r.t) {
          case 'eip191':
            return await ty(e, t, r.s);
          case 'eip1271':
            return await tm(e, t, r.s, i, s, n);
          default:
            throw Error(
              `verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${r.t}`
            );
        }
      }
      async function ty(e, t, r) {
        return (await F({ hash: tf(t), signature: r })).toLowerCase() === e.toLowerCase();
      }
      async function tm(e, t, r, i, s, n) {
        let o = Q(i);
        if (!o.namespace || !o.reference)
          throw Error(
            `isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${i}`
          );
        try {
          let o = '0x1626ba7e',
            a = r.substring(2),
            c = tf(t).substring(2),
            l =
              o +
              c +
              '00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000041' +
              a,
            h = await fetch(
              `${n || 'https://rpc.walletconnect.org/v1'}/?chainId=${i}&projectId=${s}`,
              {
                method: 'POST',
                body: JSON.stringify({
                  id: Date.now() + Math.floor(1e3 * Math.random()),
                  jsonrpc: '2.0',
                  method: 'eth_call',
                  params: [{ to: e, data: l }, 'latest'],
                }),
              }
            ),
            { result: u } = await h.json();
          return !!u && u.slice(0, o.length).toLowerCase() === o.toLowerCase();
        } catch (e) {
          return console.error('isValidEip1271Signature: ', e), !1;
        }
      }
      function tb(e) {
        let t = atob(e),
          r = new Uint8Array(t.length);
        for (let e = 0; e < t.length; e++) r[e] = t.charCodeAt(e);
        let i = r[0];
        if (0 === i) throw Error('No signatures found');
        if (r.length < 1 + 64 * i)
          throw Error('Transaction data too short for claimed signature count');
        if (r.length < 100) throw Error('Transaction too short');
        let s = J.from(e, 'base64').slice(1, 65);
        return H.encode(s);
      }
      var tw = Object.defineProperty,
        tv = Object.defineProperties,
        tE = Object.getOwnPropertyDescriptors,
        t_ = Object.getOwnPropertySymbols,
        tI = Object.prototype.hasOwnProperty,
        tD = Object.prototype.propertyIsEnumerable,
        tx = (e, t, r) =>
          t in e
            ? tw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        tP = (e, t) => {
          for (var r in t || (t = {})) tI.call(t, r) && tx(e, r, t[r]);
          if (t_) for (var r of t_(t)) tD.call(t, r) && tx(e, r, t[r]);
          return e;
        },
        tS = (e, t) => tv(e, tE(t));
      let tO = (e) => e?.split(':'),
        tA = (e) => {
          let t = e && tO(e);
          if (t) return e.includes('did:pkh:') ? t[3] : t[1];
        },
        tC = (e) => {
          let t = e && tO(e);
          if (t) return t[2] + ':' + t[3];
        },
        tT = (e) => {
          let t = e && tO(e);
          if (t) return t.pop();
        };
      async function tN(e) {
        let { cacao: t, projectId: r } = e,
          { s: i, p: s } = t,
          n = tR(s, s.iss),
          o = tT(s.iss);
        return await tg(o, n, i, tC(s.iss), r);
      }
      let tR = (e, t) => {
        let r = `${e.domain} wants you to sign in with your Ethereum account:`,
          i = tT(t);
        if (!e.aud && !e.uri)
          throw Error('Either `aud` or `uri` is required to construct the message');
        let s = e.statement || void 0,
          n = `URI: ${e.aud || e.uri}`,
          o = `Version: ${e.version}`,
          a = `Chain ID: ${tA(t)}`,
          c = `Nonce: ${e.nonce}`,
          l = `Issued At: ${e.iat}`,
          h = e.exp ? `Expiration Time: ${e.exp}` : void 0,
          u = e.nbf ? `Not Before: ${e.nbf}` : void 0,
          d = e.requestId ? `Request ID: ${e.requestId}` : void 0,
          p = e.resources
            ? `Resources:${e.resources
                .map(
                  (e) => `
- ${e}`
                )
                .join('')}`
            : void 0,
          f = tM(e.resources);
        return (
          f &&
            (s = (function (e = '', t) {
              tj(t);
              let r =
                'I further authorize the stated URI to perform the following actions on my behalf: ';
              if (e.includes(r)) return e;
              let i = [],
                s = 0;
              Object.keys(t.att).forEach((e) => {
                let r = Object.keys(t.att[e]).map((e) => ({
                  ability: e.split('/')[0],
                  action: e.split('/')[1],
                }));
                r.sort((e, t) => e.action.localeCompare(t.action));
                let n = {};
                r.forEach((e) => {
                  n[e.ability] || (n[e.ability] = []), n[e.ability].push(e.action);
                });
                let o = Object.keys(n).map(
                  (t) => (s++, `(${s}) '${t}': '${n[t].join("', '")}' for '${e}'.`)
                );
                i.push(o.join(', ').replace('.,', '.'));
              });
              let n = i.join(' '),
                o = `${r}${n}`;
              return `${e ? e + ' ' : ''}${o}`;
            })(s, tk(f))),
          [r, i, '', s, '', n, o, a, c, l, h, u, d, p].filter((e) => null != e).join(`
`)
        );
      };
      function tj(e) {
        if (!e) throw Error('No recap provided, value is undefined');
        if (!e.att) throw Error('No `att` property found');
        let t = Object.keys(e.att);
        if (!(null != t && t.length)) throw Error('No resources found in `att` property');
        t.forEach((t) => {
          let r = e.att[t];
          if (Array.isArray(r) || 'object' != typeof r)
            throw Error(`Resource must be an object: ${t}`);
          if (!Object.keys(r).length) throw Error(`Resource object is empty: ${t}`);
          Object.keys(r).forEach((e) => {
            let t = r[e];
            if (!Array.isArray(t))
              throw Error(`Ability limits ${e} must be an array of objects, found: ${t}`);
            if (!t.length)
              throw Error(`Value of ${e} is empty array, must be an array with objects`);
            t.forEach((t) => {
              if ('object' != typeof t)
                throw Error(`Ability limits (${e}) must be an array of objects, found: ${t}`);
            });
          });
        });
      }
      function tL(e) {
        return tj(e), `urn:recap:${J.from(JSON.stringify(e)).toString('base64').replace(/=/g, '')}`;
      }
      function tk(e) {
        var t;
        let r =
          ((t = e.replace('urn:recap:', '')), JSON.parse(J.from(t, 'base64').toString('utf-8')));
        return tj(r), r;
      }
      function tU(e, t, r) {
        return tL(
          (function (e, t, r, i = {}) {
            return (
              r?.sort((e, t) => e.localeCompare(t)),
              {
                att: {
                  [e]: (function (e, t, r = {}) {
                    return Object.assign(
                      {},
                      ...(t = t?.sort((e, t) => e.localeCompare(t))).map((t) => ({
                        [`${e}/${t}`]: [r],
                      }))
                    );
                  })(t, r, i),
                },
              }
            );
          })(e, t, r)
        );
      }
      function tB(e, t) {
        return tL(
          (function (e, t) {
            tj(e), tj(t);
            let r = Object.keys(e.att)
                .concat(Object.keys(t.att))
                .sort((e, t) => e.localeCompare(t)),
              i = { att: {} };
            return (
              r.forEach((r) => {
                var s, n;
                Object.keys((null == (s = e.att) ? void 0 : s[r]) || {})
                  .concat(Object.keys((null == (n = t.att) ? void 0 : n[r]) || {}))
                  .sort((e, t) => e.localeCompare(t))
                  .forEach((s) => {
                    var n, o;
                    i.att[r] = tS(tP({}, i.att[r]), {
                      [s]:
                        (null == (n = e.att[r]) ? void 0 : n[s]) ||
                        (null == (o = t.att[r]) ? void 0 : o[s]),
                    });
                  });
              }),
              i
            );
          })(tk(e), tk(t))
        );
      }
      function tq(e) {
        var t;
        let r = tk(e);
        tj(r);
        let i = null == (t = r.att) ? void 0 : t.eip155;
        return i ? Object.keys(i).map((e) => e.split('/')[1]) : [];
      }
      function t$(e) {
        let t = tk(e);
        tj(t);
        let r = [];
        return (
          Object.values(t.att).forEach((e) => {
            Object.values(e).forEach((e) => {
              var t;
              null != (t = e?.[0]) && t.chains && r.push(e[0].chains);
            });
          }),
          [...new Set(r.flat())]
        );
      }
      function tM(e) {
        var t;
        if (!e) return;
        let r = e?.[e.length - 1];
        return (t = r) && t.includes('urn:recap:') ? r : void 0;
      }
      function tz(e) {
        if (!Number.isSafeInteger(e) || e < 0) throw Error('positive integer expected, got ' + e);
      }
      function tF(e) {
        return (
          e instanceof Uint8Array || (ArrayBuffer.isView(e) && 'Uint8Array' === e.constructor.name)
        );
      }
      function tH(e, ...t) {
        if (!tF(e)) throw Error('Uint8Array expected');
        if (t.length > 0 && !t.includes(e.length))
          throw Error('Uint8Array expected of length ' + t + ', got length=' + e.length);
      }
      function tV(e, t = !0) {
        if (e.destroyed) throw Error('Hash instance has been destroyed');
        if (t && e.finished) throw Error('Hash#digest() has already been called');
      }
      function tK(e) {
        if ('boolean' != typeof e) throw Error(`boolean expected, not ${e}`);
      }
      let tG = (e) => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
        tW = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength);
      if (68 !== new Uint8Array(new Uint32Array([0x11223344]).buffer)[0])
        throw Error('Non little-endian hardware is not supported');
      function tY(e) {
        if ('string' == typeof e)
          e = (function (e) {
            if ('string' != typeof e) throw Error('string expected');
            return new Uint8Array(new TextEncoder().encode(e));
          })(e);
        else if (tF(e)) e = tQ(e);
        else throw Error('Uint8Array expected, got ' + typeof e);
        return e;
      }
      function tZ(e, t, r = !0) {
        if (void 0 === t) return new Uint8Array(e);
        if (t.length !== e)
          throw Error('invalid output length, expected ' + e + ', got: ' + t.length);
        if (r && t.byteOffset % 4 != 0) throw Error('invalid output, must be aligned');
        return t;
      }
      function tJ(e, t, r, i) {
        if ('function' == typeof e.setBigUint64) return e.setBigUint64(t, r, i);
        let s = BigInt(32),
          n = BigInt(0xffffffff),
          o = Number((r >> s) & n),
          a = Number(r & n),
          c = 4 * !!i,
          l = 4 * !i;
        e.setUint32(t + c, o, i), e.setUint32(t + l, a, i);
      }
      function tQ(e) {
        return Uint8Array.from(e);
      }
      function tX(...e) {
        for (let t = 0; t < e.length; t++) e[t].fill(0);
      }
      let t0 = (e) => Uint8Array.from(e.split('').map((e) => e.charCodeAt(0))),
        t1 = t0('expand 16-byte k'),
        t2 = t0('expand 32-byte k'),
        t8 = tG(t1),
        t3 = tG(t2);
      function t5(e, t) {
        return (e << t) | (e >>> (32 - t));
      }
      function t6(e) {
        return e.byteOffset % 4 == 0;
      }
      let t4 = 0x100000000 - 1,
        t9 = new Uint32Array(),
        t7 = (e, t) => (255 & e[t++]) | ((255 & e[t++]) << 8);
      class re {
        constructor(e) {
          (this.blockLen = 16),
            (this.outputLen = 16),
            (this.buffer = new Uint8Array(16)),
            (this.r = new Uint16Array(10)),
            (this.h = new Uint16Array(10)),
            (this.pad = new Uint16Array(8)),
            (this.pos = 0),
            (this.finished = !1),
            tH((e = tY(e)), 32);
          let t = t7(e, 0),
            r = t7(e, 2),
            i = t7(e, 4),
            s = t7(e, 6),
            n = t7(e, 8),
            o = t7(e, 10),
            a = t7(e, 12),
            c = t7(e, 14);
          (this.r[0] = 8191 & t),
            (this.r[1] = ((t >>> 13) | (r << 3)) & 8191),
            (this.r[2] = ((r >>> 10) | (i << 6)) & 7939),
            (this.r[3] = ((i >>> 7) | (s << 9)) & 8191),
            (this.r[4] = ((s >>> 4) | (n << 12)) & 255),
            (this.r[5] = (n >>> 1) & 8190),
            (this.r[6] = ((n >>> 14) | (o << 2)) & 8191),
            (this.r[7] = ((o >>> 11) | (a << 5)) & 8065),
            (this.r[8] = ((a >>> 8) | (c << 8)) & 8191),
            (this.r[9] = (c >>> 5) & 127);
          for (let t = 0; t < 8; t++) this.pad[t] = t7(e, 16 + 2 * t);
        }
        process(e, t, r = !1) {
          let { h: i, r: s } = this,
            n = s[0],
            o = s[1],
            a = s[2],
            c = s[3],
            l = s[4],
            h = s[5],
            u = s[6],
            d = s[7],
            p = s[8],
            f = s[9],
            g = t7(e, t + 0),
            y = t7(e, t + 2),
            m = t7(e, t + 4),
            b = t7(e, t + 6),
            w = t7(e, t + 8),
            v = t7(e, t + 10),
            E = t7(e, t + 12),
            _ = t7(e, t + 14),
            I = i[0] + (8191 & g),
            D = i[1] + (((g >>> 13) | (y << 3)) & 8191),
            x = i[2] + (((y >>> 10) | (m << 6)) & 8191),
            P = i[3] + (((m >>> 7) | (b << 9)) & 8191),
            S = i[4] + (((b >>> 4) | (w << 12)) & 8191),
            O = i[5] + ((w >>> 1) & 8191),
            A = i[6] + (((w >>> 14) | (v << 2)) & 8191),
            C = i[7] + (((v >>> 11) | (E << 5)) & 8191),
            T = i[8] + (((E >>> 8) | (_ << 8)) & 8191),
            N = i[9] + ((_ >>> 5) | (2048 * !r)),
            R = 0,
            j = 0 + I * n + 5 * f * D + 5 * p * x + 5 * d * P + 5 * u * S;
          (R = j >>> 13),
            (j &= 8191),
            (j += 5 * h * O + 5 * l * A + 5 * c * C + 5 * a * T + 5 * o * N),
            (R += j >>> 13),
            (j &= 8191);
          let L = R + I * o + D * n + 5 * f * x + 5 * p * P + 5 * d * S;
          (R = L >>> 13),
            (L &= 8191),
            (L += 5 * u * O + 5 * h * A + 5 * l * C + 5 * c * T + 5 * a * N),
            (R += L >>> 13),
            (L &= 8191);
          let k = R + I * a + D * o + x * n + 5 * f * P + 5 * p * S;
          (R = k >>> 13),
            (k &= 8191),
            (k += 5 * d * O + 5 * u * A + 5 * h * C + 5 * l * T + 5 * c * N),
            (R += k >>> 13),
            (k &= 8191);
          let U = R + I * c + D * a + x * o + P * n + 5 * f * S;
          (R = U >>> 13),
            (U &= 8191),
            (U += 5 * p * O + 5 * d * A + 5 * u * C + 5 * h * T + 5 * l * N),
            (R += U >>> 13),
            (U &= 8191);
          let B = R + I * l + D * c + x * a + P * o + S * n;
          (R = B >>> 13),
            (B &= 8191),
            (B += 5 * f * O + 5 * p * A + 5 * d * C + 5 * u * T + 5 * h * N),
            (R += B >>> 13),
            (B &= 8191);
          let q = R + I * h + D * l + x * c + P * a + S * o;
          (R = q >>> 13),
            (q &= 8191),
            (q += O * n + 5 * f * A + 5 * p * C + 5 * d * T + 5 * u * N),
            (R += q >>> 13),
            (q &= 8191);
          let $ = R + I * u + D * h + x * l + P * c + S * a;
          (R = $ >>> 13),
            ($ &= 8191),
            ($ += O * o + A * n + 5 * f * C + 5 * p * T + 5 * d * N),
            (R += $ >>> 13),
            ($ &= 8191);
          let M = R + I * d + D * u + x * h + P * l + S * c;
          (R = M >>> 13),
            (M &= 8191),
            (M += O * a + A * o + C * n + 5 * f * T + 5 * p * N),
            (R += M >>> 13),
            (M &= 8191);
          let z = R + I * p + D * d + x * u + P * h + S * l;
          (R = z >>> 13),
            (z &= 8191),
            (z += O * c + A * a + C * o + T * n + 5 * f * N),
            (R += z >>> 13),
            (z &= 8191);
          let F = R + I * f + D * p + x * d + P * u + S * h;
          (R = F >>> 13),
            (F &= 8191),
            (F += O * l + A * c + C * a + T * o + N * n),
            (R += F >>> 13),
            (F &= 8191),
            (j = 8191 & (R = ((R = ((R << 2) + R) | 0) + j) | 0)),
            (R >>>= 13),
            (L += R),
            (i[0] = j),
            (i[1] = L),
            (i[2] = k),
            (i[3] = U),
            (i[4] = B),
            (i[5] = q),
            (i[6] = $),
            (i[7] = M),
            (i[8] = z),
            (i[9] = F);
        }
        finalize() {
          let { h: e, pad: t } = this,
            r = new Uint16Array(10),
            i = e[1] >>> 13;
          e[1] &= 8191;
          for (let t = 2; t < 10; t++) (e[t] += i), (i = e[t] >>> 13), (e[t] &= 8191);
          (e[0] += 5 * i),
            (i = e[0] >>> 13),
            (e[0] &= 8191),
            (e[1] += i),
            (i = e[1] >>> 13),
            (e[1] &= 8191),
            (e[2] += i),
            (r[0] = e[0] + 5),
            (i = r[0] >>> 13),
            (r[0] &= 8191);
          for (let t = 1; t < 10; t++) (r[t] = e[t] + i), (i = r[t] >>> 13), (r[t] &= 8191);
          r[9] -= 8192;
          let s = (1 ^ i) - 1;
          for (let e = 0; e < 10; e++) r[e] &= s;
          s = ~s;
          for (let t = 0; t < 10; t++) e[t] = (e[t] & s) | r[t];
          (e[0] = (e[0] | (e[1] << 13)) & 65535),
            (e[1] = ((e[1] >>> 3) | (e[2] << 10)) & 65535),
            (e[2] = ((e[2] >>> 6) | (e[3] << 7)) & 65535),
            (e[3] = ((e[3] >>> 9) | (e[4] << 4)) & 65535),
            (e[4] = ((e[4] >>> 12) | (e[5] << 1) | (e[6] << 14)) & 65535),
            (e[5] = ((e[6] >>> 2) | (e[7] << 11)) & 65535),
            (e[6] = ((e[7] >>> 5) | (e[8] << 8)) & 65535),
            (e[7] = ((e[8] >>> 8) | (e[9] << 5)) & 65535);
          let n = e[0] + t[0];
          e[0] = 65535 & n;
          for (let r = 1; r < 8; r++)
            (n = (((e[r] + t[r]) | 0) + (n >>> 16)) | 0), (e[r] = 65535 & n);
          tX(r);
        }
        update(e) {
          tV(this);
          let { buffer: t, blockLen: r } = this,
            i = (e = tY(e)).length;
          for (let s = 0; s < i; ) {
            let n = Math.min(r - this.pos, i - s);
            if (n === r) {
              for (; r <= i - s; s += r) this.process(e, s);
              continue;
            }
            t.set(e.subarray(s, s + n), this.pos),
              (this.pos += n),
              (s += n),
              this.pos === r && (this.process(t, 0, !1), (this.pos = 0));
          }
          return this;
        }
        destroy() {
          tX(this.h, this.r, this.buffer, this.pad);
        }
        digestInto(e) {
          tV(this),
            (function (e, t) {
              tH(e);
              let r = t.outputLen;
              if (e.length < r)
                throw Error('digestInto() expects output buffer of length at least ' + r);
            })(e, this),
            (this.finished = !0);
          let { buffer: t, h: r } = this,
            { pos: i } = this;
          if (i) {
            for (t[i++] = 1; i < 16; i++) t[i] = 0;
            this.process(t, 0, !0);
          }
          this.finalize();
          let s = 0;
          for (let t = 0; t < 8; t++) (e[s++] = r[t] >>> 0), (e[s++] = r[t] >>> 8);
          return e;
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let r = e.slice(0, t);
          return this.destroy(), r;
        }
      }
      let rt = (function (e) {
          let t = (t, r) => e(r).update(tY(t)).digest(),
            r = e(new Uint8Array(32));
          return (
            (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = (t) => e(t)), t
          );
        })((e) => new re(e)),
        rr = (function (e, t) {
          let {
            allowShortKeys: r,
            extendNonceFn: i,
            counterLength: s,
            counterRight: n,
            rounds: o,
          } = (function (e, t) {
            if (null == t || 'object' != typeof t) throw Error('options must be defined');
            return Object.assign(e, t);
          })({ allowShortKeys: !1, counterLength: 8, counterRight: !1, rounds: 20 }, t);
          if ('function' != typeof e) throw Error('core must be a function');
          return (
            tz(s),
            tz(o),
            tK(n),
            tK(r),
            (t, a, c, l, h = 0) => {
              tH(t), tH(a), tH(c);
              let u = c.length;
              if ((void 0 === l && (l = new Uint8Array(u)), tH(l), tz(h), h < 0 || h >= t4))
                throw Error('arx: counter overflow');
              if (l.length < u)
                throw Error(`arx: output (${l.length}) is shorter than data (${u})`);
              let d = [],
                p = t.length,
                f,
                g;
              if (32 === p) d.push((f = tQ(t))), (g = t3);
              else if (16 === p && r)
                (f = new Uint8Array(32)).set(t), f.set(t, 16), (g = t8), d.push(f);
              else throw Error(`arx: invalid 32-byte key, got length=${p}`);
              t6(a) || d.push((a = tQ(a)));
              let y = tG(f);
              if (i) {
                if (24 !== a.length) throw Error('arx: extended nonce must be 24 bytes');
                i(g, y, tG(a.subarray(0, 16)), y), (a = a.subarray(16));
              }
              let m = 16 - s;
              if (m !== a.length) throw Error(`arx: nonce must be ${m} or 16 bytes`);
              if (12 !== m) {
                let e = new Uint8Array(12);
                e.set(a, n ? 0 : 12 - a.length), (a = e), d.push(a);
              }
              return (
                (function (e, t, r, i, s, n, o, a) {
                  let c = s.length,
                    l = new Uint8Array(64),
                    h = tG(l),
                    u = t6(s) && t6(n),
                    d = u ? tG(s) : t9,
                    p = u ? tG(n) : t9;
                  for (let f = 0; f < c; o++) {
                    if ((e(t, r, i, h, o, a), o >= t4)) throw Error('arx: counter overflow');
                    let g = Math.min(64, c - f);
                    if (u && 64 === g) {
                      let e = f / 4;
                      if (f % 4 != 0) throw Error('arx: invalid block position');
                      for (let t = 0, r; t < 16; t++) p[(r = e + t)] = d[r] ^ h[t];
                      f += 64;
                      continue;
                    }
                    for (let e = 0, t; e < g; e++) n[(t = f + e)] = s[t] ^ l[e];
                    f += g;
                  }
                })(e, g, y, tG(a), c, l, h, o),
                tX(...d),
                l
              );
            }
          );
        })(
          function (e, t, r, i, s, n = 20) {
            let o = e[0],
              a = e[1],
              c = e[2],
              l = e[3],
              h = t[0],
              u = t[1],
              d = t[2],
              p = t[3],
              f = t[4],
              g = t[5],
              y = t[6],
              m = t[7],
              b = r[0],
              w = r[1],
              v = r[2],
              E = o,
              _ = a,
              I = c,
              D = l,
              x = h,
              P = u,
              S = d,
              O = p,
              A = f,
              C = g,
              T = y,
              N = m,
              R = s,
              j = b,
              L = w,
              k = v;
            for (let e = 0; e < n; e += 2)
              (A = (A + (R = t5(R ^ (E = (E + x) | 0), 16))) | 0),
                (E = (E + (x = t5(x ^ A, 12))) | 0),
                (A = (A + (R = t5(R ^ E, 8))) | 0),
                (x = t5(x ^ A, 7)),
                (C = (C + (j = t5(j ^ (_ = (_ + P) | 0), 16))) | 0),
                (_ = (_ + (P = t5(P ^ C, 12))) | 0),
                (C = (C + (j = t5(j ^ _, 8))) | 0),
                (P = t5(P ^ C, 7)),
                (T = (T + (L = t5(L ^ (I = (I + S) | 0), 16))) | 0),
                (I = (I + (S = t5(S ^ T, 12))) | 0),
                (T = (T + (L = t5(L ^ I, 8))) | 0),
                (S = t5(S ^ T, 7)),
                (N = (N + (k = t5(k ^ (D = (D + O) | 0), 16))) | 0),
                (D = (D + (O = t5(O ^ N, 12))) | 0),
                (N = (N + (k = t5(k ^ D, 8))) | 0),
                (O = t5(O ^ N, 7)),
                (T = (T + (k = t5(k ^ (E = (E + P) | 0), 16))) | 0),
                (E = (E + (P = t5(P ^ T, 12))) | 0),
                (T = (T + (k = t5(k ^ E, 8))) | 0),
                (P = t5(P ^ T, 7)),
                (N = (N + (R = t5(R ^ (_ = (_ + S) | 0), 16))) | 0),
                (_ = (_ + (S = t5(S ^ N, 12))) | 0),
                (N = (N + (R = t5(R ^ _, 8))) | 0),
                (S = t5(S ^ N, 7)),
                (A = (A + (j = t5(j ^ (I = (I + O) | 0), 16))) | 0),
                (I = (I + (O = t5(O ^ A, 12))) | 0),
                (A = (A + (j = t5(j ^ I, 8))) | 0),
                (O = t5(O ^ A, 7)),
                (C = (C + (L = t5(L ^ (D = (D + x) | 0), 16))) | 0),
                (D = (D + (x = t5(x ^ C, 12))) | 0),
                (C = (C + (L = t5(L ^ D, 8))) | 0),
                (x = t5(x ^ C, 7));
            let U = 0;
            (i[U++] = (o + E) | 0),
              (i[U++] = (a + _) | 0),
              (i[U++] = (c + I) | 0),
              (i[U++] = (l + D) | 0),
              (i[U++] = (h + x) | 0),
              (i[U++] = (u + P) | 0),
              (i[U++] = (d + S) | 0),
              (i[U++] = (p + O) | 0),
              (i[U++] = (f + A) | 0),
              (i[U++] = (g + C) | 0),
              (i[U++] = (y + T) | 0),
              (i[U++] = (m + N) | 0),
              (i[U++] = (s + R) | 0),
              (i[U++] = (b + j) | 0),
              (i[U++] = (w + L) | 0),
              (i[U++] = (v + k) | 0);
          },
          { counterRight: !1, counterLength: 4, allowShortKeys: !1 }
        ),
        ri = new Uint8Array(16),
        rs = (e, t) => {
          e.update(t);
          let r = t.length % 16;
          r && e.update(ri.subarray(r));
        },
        rn = new Uint8Array(32);
      function ro(e, t, r, i, s) {
        let n = e(t, r, rn),
          o = rt.create(n);
        s && rs(o, s), rs(o, i);
        let a = new Uint8Array(16),
          c = tW(a);
        tJ(c, 0, BigInt(s ? s.length : 0), !0), tJ(c, 8, BigInt(i.length), !0), o.update(a);
        let l = o.digest();
        return tX(n, a), l;
      }
      let ra = ((e, t) => {
        function r(i, ...s) {
          if ((tH(i), void 0 !== e.nonceLength)) {
            let t = s[0];
            if (!t) throw Error('nonce / iv required');
            e.varSizeNonce ? tH(t) : tH(t, e.nonceLength);
          }
          let n = e.tagLength;
          n && void 0 !== s[1] && tH(s[1]);
          let o = t(i, ...s),
            a = (e, t) => {
              if (void 0 !== t) {
                if (2 !== e) throw Error('cipher output not supported');
                tH(t);
              }
            },
            c = !1;
          return {
            encrypt(e, t) {
              if (c) throw Error('cannot encrypt() twice with same key + nonce');
              return (c = !0), tH(e), a(o.encrypt.length, t), o.encrypt(e, t);
            },
            decrypt(e, t) {
              if ((tH(e), n && e.length < n))
                throw Error('invalid ciphertext length: smaller than tagLength=' + n);
              return a(o.decrypt.length, t), o.decrypt(e, t);
            },
          };
        }
        return Object.assign(r, e), r;
      })(
        { blockSize: 64, nonceLength: 12, tagLength: 16 },
        ((e) => (t, r, i) => ({
          encrypt(s, n) {
            let o = s.length;
            (n = tZ(o + 16, n, !1)).set(s);
            let a = n.subarray(0, -16);
            e(t, r, a, a, 1);
            let c = ro(e, t, r, a, i);
            return n.set(c, o), tX(c), n;
          },
          decrypt(s, n) {
            n = tZ(s.length - 16, n, !1);
            let o = s.subarray(0, -16),
              a = s.subarray(-16),
              c = ro(e, t, r, o, i);
            if (
              !(function (e, t) {
                if (e.length !== t.length) return !1;
                let r = 0;
                for (let i = 0; i < e.length; i++) r |= e[i] ^ t[i];
                return 0 === r;
              })(a, c)
            )
              throw Error('invalid tag');
            return n.set(s.subarray(0, -16)), e(t, r, n, n, 1), tX(c), n;
          },
        }))(rr)
      );
      class rc extends e6 {
        constructor(e, t) {
          super(), (this.finished = !1), (this.destroyed = !1), eV(e);
          let r = e5(t);
          if (((this.iHash = e.create()), 'function' != typeof this.iHash.update))
            throw Error('Expected instance of class which extends utils.Hash');
          (this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen);
          let i = this.blockLen,
            s = new Uint8Array(i);
          s.set(r.length > i ? e.create().update(r).digest() : r);
          for (let e = 0; e < s.length; e++) s[e] ^= 54;
          this.iHash.update(s), (this.oHash = e.create());
          for (let e = 0; e < s.length; e++) s[e] ^= 106;
          this.oHash.update(s), s.fill(0);
        }
        update(e) {
          return eK(this), this.iHash.update(e), this;
        }
        digestInto(e) {
          eK(this),
            eH(e, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(e),
            this.oHash.update(e),
            this.oHash.digestInto(e),
            this.destroy();
        }
        digest() {
          let e = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(e), e;
        }
        _cloneInto(e) {
          e || (e = Object.create(Object.getPrototypeOf(this), {}));
          let { oHash: t, iHash: r, finished: i, destroyed: s, blockLen: n, outputLen: o } = this;
          return (
            (e.finished = i),
            (e.destroyed = s),
            (e.blockLen = n),
            (e.outputLen = o),
            (e.oHash = t._cloneInto(e.oHash)),
            (e.iHash = r._cloneInto(e.iHash)),
            e
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let rl = (e, t, r) => new rc(e, t).update(r).digest();
      rl.create = (e, t) => new rc(e, t);
      let rh = new Uint8Array([0]),
        ru = new Uint8Array(),
        rd = (e, t, r, i, s) =>
          (function (e, t, r, i = 32) {
            if ((eV(e), eF(i), i > 255 * e.outputLen))
              throw Error('Length should be <= 255*HashLen');
            let s = Math.ceil(i / e.outputLen);
            void 0 === r && (r = ru);
            let n = new Uint8Array(s * e.outputLen),
              o = rl.create(e, t),
              a = o._cloneInto(),
              c = new Uint8Array(o.outputLen);
            for (let t = 0; t < s; t++)
              (rh[0] = t + 1),
                a
                  .update(0 === t ? ru : c)
                  .update(r)
                  .update(rh)
                  .digestInto(c),
                n.set(c, e.outputLen * t),
                o._cloneInto(a);
            return o.destroy(), a.destroy(), c.fill(0), rh.fill(0), n.slice(0, i);
          })(
            e,
            (function (e, t, r) {
              return eV(e), void 0 === r && (r = new Uint8Array(e.outputLen)), rl(e, e5(r), e5(t));
            })(e, t, r),
            i,
            s
          );
      class rp extends e6 {
        constructor(e, t, r, i) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = r),
            (this.isLE = i),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = e1(this.buffer));
        }
        update(e) {
          eK(this);
          let { view: t, buffer: r, blockLen: i } = this,
            s = (e = e5(e)).length;
          for (let n = 0; n < s; ) {
            let o = Math.min(i - this.pos, s - n);
            if (o === i) {
              let t = e1(e);
              for (; i <= s - n; n += i) this.process(t, n);
              continue;
            }
            r.set(e.subarray(n, n + o), this.pos),
              (this.pos += o),
              (n += o),
              this.pos === i && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          eK(this), eG(e, this), (this.finished = !0);
          let { buffer: t, view: r, blockLen: i, isLE: s } = this,
            { pos: n } = this;
          (t[n++] = 128),
            this.buffer.subarray(n).fill(0),
            this.padOffset > i - n && (this.process(r, 0), (n = 0));
          for (let e = n; e < i; e++) t[e] = 0;
          (function (e, t, r, i) {
            if ('function' == typeof e.setBigUint64) return e.setBigUint64(t, r, i);
            let s = BigInt(32),
              n = BigInt(0xffffffff),
              o = Number((r >> s) & n),
              a = Number(r & n),
              c = 4 * !!i,
              l = 4 * !i;
            e.setUint32(t + c, o, i), e.setUint32(t + l, a, i);
          })(r, i - 8, BigInt(8 * this.length), s),
            this.process(r, 0);
          let o = e1(e),
            a = this.outputLen;
          if (a % 4) throw Error('_sha2: outputLen should be aligned to 32bit');
          let c = a / 4,
            l = this.get();
          if (c > l.length) throw Error('_sha2: outputLen bigger than state');
          for (let e = 0; e < c; e++) o.setUint32(4 * e, l[e], s);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let r = e.slice(0, t);
          return this.destroy(), r;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let { blockLen: t, buffer: r, length: i, finished: s, destroyed: n, pos: o } = this;
          return (
            (e.length = i),
            (e.pos = o),
            (e.finished = s),
            (e.destroyed = n),
            i % t && e.buffer.set(r),
            e
          );
        }
      }
      let rf = new Uint32Array([
          0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4,
          0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe,
          0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f,
          0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7,
          0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc,
          0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
          0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116,
          0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
          0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7,
          0xc67178f2,
        ]),
        rg = new Uint32Array([
          0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab,
          0x5be0cd19,
        ]),
        ry = new Uint32Array(64);
      class rm extends rp {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | rg[0]),
            (this.B = 0 | rg[1]),
            (this.C = 0 | rg[2]),
            (this.D = 0 | rg[3]),
            (this.E = 0 | rg[4]),
            (this.F = 0 | rg[5]),
            (this.G = 0 | rg[6]),
            (this.H = 0 | rg[7]);
        }
        get() {
          let { A: e, B: t, C: r, D: i, E: s, F: n, G: o, H: a } = this;
          return [e, t, r, i, s, n, o, a];
        }
        set(e, t, r, i, s, n, o, a) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | r),
            (this.D = 0 | i),
            (this.E = 0 | s),
            (this.F = 0 | n),
            (this.G = 0 | o),
            (this.H = 0 | a);
        }
        process(e, t) {
          for (let r = 0; r < 16; r++, t += 4) ry[r] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = ry[e - 15],
              r = ry[e - 2],
              i = e2(t, 7) ^ e2(t, 18) ^ (t >>> 3),
              s = e2(r, 17) ^ e2(r, 19) ^ (r >>> 10);
            ry[e] = (s + ry[e - 7] + i + ry[e - 16]) | 0;
          }
          let { A: r, B: i, C: s, D: n, E: o, F: a, G: c, H: l } = this;
          for (let e = 0; e < 64; e++) {
            var h, u, d, p;
            let t =
                (l +
                  (e2(o, 6) ^ e2(o, 11) ^ e2(o, 25)) +
                  (((h = o) & a) ^ (~h & c)) +
                  rf[e] +
                  ry[e]) |
                0,
              f =
                ((e2(r, 2) ^ e2(r, 13) ^ e2(r, 22)) +
                  (((u = r) & (d = i)) ^ (u & (p = s)) ^ (d & p))) |
                0;
            (l = c),
              (c = a),
              (a = o),
              (o = (n + t) | 0),
              (n = s),
              (s = i),
              (i = r),
              (r = (t + f) | 0);
          }
          (r = (r + this.A) | 0),
            (i = (i + this.B) | 0),
            (s = (s + this.C) | 0),
            (n = (n + this.D) | 0),
            (o = (o + this.E) | 0),
            (a = (a + this.F) | 0),
            (c = (c + this.G) | 0),
            (l = (l + this.H) | 0),
            this.set(r, i, s, n, o, a, c, l);
        }
        roundClean() {
          ry.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let rb = e4(() => new rm()),
        rw = BigInt(0),
        rv = BigInt(1),
        rE = BigInt(2);
      function r_(e) {
        return (
          e instanceof Uint8Array || (ArrayBuffer.isView(e) && 'Uint8Array' === e.constructor.name)
        );
      }
      function rI(e) {
        if (!r_(e)) throw Error('Uint8Array expected');
      }
      function rD(e, t) {
        if ('boolean' != typeof t) throw Error(e + ' boolean expected, got ' + t);
      }
      let rx = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
      function rP(e) {
        rI(e);
        let t = '';
        for (let r = 0; r < e.length; r++) t += rx[e[r]];
        return t;
      }
      function rS(e) {
        let t = e.toString(16);
        return 1 & t.length ? '0' + t : t;
      }
      function rO(e) {
        if ('string' != typeof e) throw Error('hex string expected, got ' + typeof e);
        return '' === e ? rw : BigInt('0x' + e);
      }
      let rA = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function rC(e) {
        return e >= rA._0 && e <= rA._9
          ? e - rA._0
          : e >= rA.A && e <= rA.F
            ? e - (rA.A - 10)
            : e >= rA.a && e <= rA.f
              ? e - (rA.a - 10)
              : void 0;
      }
      function rT(e) {
        if ('string' != typeof e) throw Error('hex string expected, got ' + typeof e);
        let t = e.length,
          r = t / 2;
        if (t % 2) throw Error('hex string expected, got unpadded hex of length ' + t);
        let i = new Uint8Array(r);
        for (let t = 0, s = 0; t < r; t++, s += 2) {
          let r = rC(e.charCodeAt(s)),
            n = rC(e.charCodeAt(s + 1));
          if (void 0 === r || void 0 === n)
            throw Error(
              'hex string expected, got non-hex character "' + (e[s] + e[s + 1]) + '" at index ' + s
            );
          i[t] = 16 * r + n;
        }
        return i;
      }
      function rN(e) {
        return rO(rP(e));
      }
      function rR(e) {
        return rI(e), rO(rP(Uint8Array.from(e).reverse()));
      }
      function rj(e, t) {
        return rT(e.toString(16).padStart(2 * t, '0'));
      }
      function rL(e, t) {
        return rj(e, t).reverse();
      }
      function rk(e, t, r) {
        let i;
        if ('string' == typeof t)
          try {
            i = rT(t);
          } catch (t) {
            throw Error(e + ' must be hex string or Uint8Array, cause: ' + t);
          }
        else if (r_(t)) i = Uint8Array.from(t);
        else throw Error(e + ' must be hex string or Uint8Array');
        let s = i.length;
        if ('number' == typeof r && s !== r)
          throw Error(e + ' of length ' + r + ' expected, got ' + s);
        return i;
      }
      function rU(...e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
          let i = e[r];
          rI(i), (t += i.length);
        }
        let r = new Uint8Array(t);
        for (let t = 0, i = 0; t < e.length; t++) {
          let s = e[t];
          r.set(s, i), (i += s.length);
        }
        return r;
      }
      let rB = (e) => 'bigint' == typeof e && rw <= e;
      function rq(e, t, r) {
        return rB(e) && rB(t) && rB(r) && t <= e && e < r;
      }
      function r$(e, t, r, i) {
        if (!rq(t, r, i))
          throw Error('expected valid ' + e + ': ' + r + ' <= n < ' + i + ', got ' + t);
      }
      function rM(e) {
        let t;
        for (t = 0; e > rw; e >>= rv, t += 1);
        return t;
      }
      let rz = (e) => (rE << BigInt(e - 1)) - rv,
        rF = (e) => new Uint8Array(e),
        rH = (e) => Uint8Array.from(e);
      function rV(e, t, r) {
        if ('number' != typeof e || e < 2) throw Error('hashLen must be a number');
        if ('number' != typeof t || t < 2) throw Error('qByteLen must be a number');
        if ('function' != typeof r) throw Error('hmacFn must be a function');
        let i = rF(e),
          s = rF(e),
          n = 0,
          o = () => {
            i.fill(1), s.fill(0), (n = 0);
          },
          a = (...e) => r(s, i, ...e),
          c = (e = rF()) => {
            (s = a(rH([0]), e)), (i = a()), 0 !== e.length && ((s = a(rH([1]), e)), (i = a()));
          },
          l = () => {
            if (n++ >= 1e3) throw Error('drbg: tried 1000 values');
            let e = 0,
              r = [];
            for (; e < t; ) {
              let t = (i = a()).slice();
              r.push(t), (e += i.length);
            }
            return rU(...r);
          };
        return (e, t) => {
          let r;
          for (o(), c(e); !(r = t(l())); ) c();
          return o(), r;
        };
      }
      let rK = {
        bigint: (e) => 'bigint' == typeof e,
        function: (e) => 'function' == typeof e,
        boolean: (e) => 'boolean' == typeof e,
        string: (e) => 'string' == typeof e,
        stringOrUint8Array: (e) => 'string' == typeof e || r_(e),
        isSafeInteger: (e) => Number.isSafeInteger(e),
        array: (e) => Array.isArray(e),
        field: (e, t) => t.Fp.isValid(e),
        hash: (e) => 'function' == typeof e && Number.isSafeInteger(e.outputLen),
      };
      function rG(e, t, r = {}) {
        let i = (t, r, i) => {
          let s = rK[r];
          if ('function' != typeof s) throw Error('invalid validator function');
          let n = e[t];
          if (!(i && void 0 === n) && !s(n, e))
            throw Error('param ' + String(t) + ' is invalid. Expected ' + r + ', got ' + n);
        };
        for (let [e, r] of Object.entries(t)) i(e, r, !1);
        for (let [e, t] of Object.entries(r)) i(e, t, !0);
        return e;
      }
      function rW(e) {
        let t = new WeakMap();
        return (r, ...i) => {
          let s = t.get(r);
          if (void 0 !== s) return s;
          let n = e(r, ...i);
          return t.set(r, n), n;
        };
      }
      var rY = Object.freeze({
        __proto__: null,
        isBytes: r_,
        abytes: rI,
        abool: rD,
        bytesToHex: rP,
        numberToHexUnpadded: rS,
        hexToNumber: rO,
        hexToBytes: rT,
        bytesToNumberBE: rN,
        bytesToNumberLE: rR,
        numberToBytesBE: rj,
        numberToBytesLE: rL,
        numberToVarBytesBE: function (e) {
          return rT(rS(e));
        },
        ensureBytes: rk,
        concatBytes: rU,
        equalBytes: function (e, t) {
          if (e.length !== t.length) return !1;
          let r = 0;
          for (let i = 0; i < e.length; i++) r |= e[i] ^ t[i];
          return 0 === r;
        },
        utf8ToBytes: function (e) {
          if ('string' != typeof e) throw Error('string expected');
          return new Uint8Array(new TextEncoder().encode(e));
        },
        inRange: rq,
        aInRange: r$,
        bitLen: rM,
        bitGet: function (e, t) {
          return (e >> BigInt(t)) & rv;
        },
        bitSet: function (e, t, r) {
          return e | ((r ? rv : rw) << BigInt(t));
        },
        bitMask: rz,
        createHmacDrbg: rV,
        validateObject: rG,
        notImplemented: () => {
          throw Error('not implemented');
        },
        memoized: rW,
      });
      let rZ = BigInt(0),
        rJ = BigInt(1),
        rQ = BigInt(2),
        rX = BigInt(3),
        r0 = BigInt(4),
        r1 = BigInt(5),
        r2 = BigInt(8);
      function r8(e, t) {
        let r = e % t;
        return r >= rZ ? r : t + r;
      }
      function r3(e, t, r) {
        if (t < rZ) throw Error('invalid exponent, negatives unsupported');
        if (r <= rZ) throw Error('invalid modulus');
        if (r === rJ) return rZ;
        let i = rJ;
        for (; t > rZ; ) t & rJ && (i = (i * e) % r), (e = (e * e) % r), (t >>= rJ);
        return i;
      }
      function r5(e, t, r) {
        let i = e;
        for (; t-- > rZ; ) (i *= i), (i %= r);
        return i;
      }
      function r6(e, t) {
        if (e === rZ) throw Error('invert: expected non-zero number');
        if (t <= rZ) throw Error('invert: expected positive modulus, got ' + t);
        let r = r8(e, t),
          i = t,
          s = rZ,
          n = rJ;
        for (; r !== rZ; ) {
          let e = i / r,
            t = i % r,
            o = s - n * e;
          (i = r), (r = t), (s = n), (n = o);
        }
        if (i !== rJ) throw Error('invert: does not exist');
        return r8(s, t);
      }
      let r4 = [
        'create',
        'isValid',
        'is0',
        'neg',
        'inv',
        'sqrt',
        'sqr',
        'eql',
        'add',
        'sub',
        'mul',
        'pow',
        'div',
        'addN',
        'subN',
        'mulN',
        'sqrN',
      ];
      function r9(e, t) {
        let r = void 0 !== t ? t : e.toString(2).length,
          i = Math.ceil(r / 8);
        return { nBitLength: r, nByteLength: i };
      }
      function r7(e, t, r = !1, i = {}) {
        let s;
        if (e <= rZ) throw Error('invalid field: expected ORDER > 0, got ' + e);
        let { nBitLength: n, nByteLength: o } = r9(e, t);
        if (o > 2048) throw Error('invalid field: expected ORDER of <= 2048 bytes');
        let a = Object.freeze({
          ORDER: e,
          isLE: r,
          BITS: n,
          BYTES: o,
          MASK: rz(n),
          ZERO: rZ,
          ONE: rJ,
          create: (t) => r8(t, e),
          isValid: (t) => {
            if ('bigint' != typeof t)
              throw Error('invalid field element: expected bigint, got ' + typeof t);
            return rZ <= t && t < e;
          },
          is0: (e) => e === rZ,
          isOdd: (e) => (e & rJ) === rJ,
          neg: (t) => r8(-t, e),
          eql: (e, t) => e === t,
          sqr: (t) => r8(t * t, e),
          add: (t, r) => r8(t + r, e),
          sub: (t, r) => r8(t - r, e),
          mul: (t, r) => r8(t * r, e),
          pow: (e, t) =>
            (function (e, t, r) {
              if (r < rZ) throw Error('invalid exponent, negatives unsupported');
              if (r === rZ) return e.ONE;
              if (r === rJ) return t;
              let i = e.ONE,
                s = t;
              for (; r > rZ; ) r & rJ && (i = e.mul(i, s)), (s = e.sqr(s)), (r >>= rJ);
              return i;
            })(a, e, t),
          div: (t, r) => r8(t * r6(r, e), e),
          sqrN: (e) => e * e,
          addN: (e, t) => e + t,
          subN: (e, t) => e - t,
          mulN: (e, t) => e * t,
          inv: (t) => r6(t, e),
          sqrt:
            i.sqrt ||
            ((t) => (
              s ||
                (s = (function (e) {
                  if (e % r0 === rX) {
                    let t = (e + rJ) / r0;
                    return function (e, r) {
                      let i = e.pow(r, t);
                      if (!e.eql(e.sqr(i), r)) throw Error('Cannot find square root');
                      return i;
                    };
                  }
                  if (e % r2 === r1) {
                    let t = (e - r1) / r2;
                    return function (e, r) {
                      let i = e.mul(r, rQ),
                        s = e.pow(i, t),
                        n = e.mul(r, s),
                        o = e.mul(e.mul(n, rQ), s),
                        a = e.mul(n, e.sub(o, e.ONE));
                      if (!e.eql(e.sqr(a), r)) throw Error('Cannot find square root');
                      return a;
                    };
                  }
                  return (function (e) {
                    let t, r, i;
                    let s = (e - rJ) / rQ;
                    for (t = e - rJ, r = 0; t % rQ === rZ; t /= rQ, r++);
                    for (i = rQ; i < e && r3(i, s, e) !== e - rJ; i++)
                      if (i > 1e3) throw Error('Cannot find square root: likely non-prime P');
                    if (1 === r) {
                      let t = (e + rJ) / r0;
                      return function (e, r) {
                        let i = e.pow(r, t);
                        if (!e.eql(e.sqr(i), r)) throw Error('Cannot find square root');
                        return i;
                      };
                    }
                    let n = (t + rJ) / rQ;
                    return function (e, o) {
                      if (e.pow(o, s) === e.neg(e.ONE)) throw Error('Cannot find square root');
                      let a = r,
                        c = e.pow(e.mul(e.ONE, i), t),
                        l = e.pow(o, n),
                        h = e.pow(o, t);
                      for (; !e.eql(h, e.ONE); ) {
                        if (e.eql(h, e.ZERO)) return e.ZERO;
                        let t = 1;
                        for (let r = e.sqr(h); t < a && !e.eql(r, e.ONE); t++) r = e.sqr(r);
                        let r = e.pow(c, rJ << BigInt(a - t - 1));
                        (c = e.sqr(r)), (l = e.mul(l, r)), (h = e.mul(h, c)), (a = t);
                      }
                      return l;
                    };
                  })(e);
                })(e)),
              s(a, t)
            )),
          invertBatch: (e) =>
            (function (e, t) {
              let r = Array(t.length),
                i = t.reduce((t, i, s) => (e.is0(i) ? t : ((r[s] = t), e.mul(t, i))), e.ONE),
                s = e.inv(i);
              return (
                t.reduceRight(
                  (t, i, s) => (e.is0(i) ? t : ((r[s] = e.mul(t, r[s])), e.mul(t, i))),
                  s
                ),
                r
              );
            })(a, e),
          cmov: (e, t, r) => (r ? t : e),
          toBytes: (e) => (r ? rL(e, o) : rj(e, o)),
          fromBytes: (e) => {
            if (e.length !== o)
              throw Error('Field.fromBytes: expected ' + o + ' bytes, got ' + e.length);
            return r ? rR(e) : rN(e);
          },
        });
        return Object.freeze(a);
      }
      function ie(e) {
        if ('bigint' != typeof e) throw Error('field order must be bigint');
        return Math.ceil(e.toString(2).length / 8);
      }
      function it(e) {
        let t = ie(e);
        return t + Math.ceil(t / 2);
      }
      let ir = BigInt(0),
        ii = BigInt(1);
      function is(e, t) {
        let r = t.negate();
        return e ? r : t;
      }
      function io(e, t) {
        if (!Number.isSafeInteger(e) || e <= 0 || e > t)
          throw Error('invalid window size, expected [1..' + t + '], got W=' + e);
      }
      function ia(e, t) {
        return io(e, t), { windows: Math.ceil(t / e) + 1, windowSize: 2 ** (e - 1) };
      }
      let ic = new WeakMap(),
        il = new WeakMap();
      function ih(e) {
        return il.get(e) || 1;
      }
      function iu(e) {
        return (
          rG(
            e.Fp,
            r4.reduce((e, t) => ((e[t] = 'function'), e), {
              ORDER: 'bigint',
              MASK: 'bigint',
              BYTES: 'isSafeInteger',
              BITS: 'isSafeInteger',
            })
          ),
          rG(
            e,
            { n: 'bigint', h: 'bigint', Gx: 'field', Gy: 'field' },
            { nBitLength: 'isSafeInteger', nByteLength: 'isSafeInteger' }
          ),
          Object.freeze({ ...r9(e.n, e.nBitLength), ...e, p: e.Fp.ORDER })
        );
      }
      BigInt(0), BigInt(1), BigInt(2), BigInt(8);
      let id = BigInt(0),
        ip = BigInt(1),
        ig = BigInt(
          '57896044618658097711785492504343953926634992332820282019728792003956564819949'
        );
      BigInt(0);
      let iy = BigInt(1),
        im = BigInt(2),
        ib = BigInt(3),
        iw = BigInt(5);
      BigInt(8);
      let iv = (function (e) {
        let t =
            (rG(
              e,
              { a: 'bigint' },
              {
                montgomeryBits: 'isSafeInteger',
                nByteLength: 'isSafeInteger',
                adjustScalarBytes: 'function',
                domain: 'function',
                powPminus2: 'function',
                Gu: 'bigint',
              }
            ),
            Object.freeze({ ...e })),
          { P: r } = t,
          i = (e) => r8(e, r),
          s = t.montgomeryBits,
          n = Math.ceil(s / 8),
          o = t.nByteLength,
          a = t.adjustScalarBytes || ((e) => e),
          c = t.powPminus2 || ((e) => r3(e, r - BigInt(2), r));
        function l(e, t, r) {
          let s = i(e * (t - r));
          return [(t = i(t - s)), (r = i(r + s))];
        }
        let h = (t.a - BigInt(2)) / BigInt(4);
        function u(e, t) {
          let u = (function (e, t) {
            r$('u', e, id, r), r$('scalar', t, id, r);
            let n = ip,
              o = id,
              a = e,
              u = ip,
              d = id,
              p;
            for (let r = BigInt(s - 1); r >= id; r--) {
              let s = (t >> r) & ip;
              (d ^= s),
                (n = (p = l(d, n, a))[0]),
                (a = p[1]),
                (o = (p = l(d, o, u))[0]),
                (u = p[1]),
                (d = s);
              let c = n + o,
                f = i(c * c),
                g = n - o,
                y = i(g * g),
                m = f - y,
                b = a + u,
                w = i((a - u) * c),
                v = i(b * g),
                E = w + v,
                _ = w - v;
              (a = i(E * E)), (u = i(e * i(_ * _))), (n = i(f * y)), (o = i(m * (f + i(h * m))));
            }
            return (
              (n = (p = l(d, n, a))[0]),
              (a = p[1]),
              (o = (p = l(d, o, u))[0]),
              (u = p[1]),
              i(n * c(o))
            );
          })(
            (function (e) {
              let t = rk('u coordinate', e, n);
              return 32 === o && (t[31] &= 127), rR(t);
            })(t),
            (function (e) {
              let t = rk('scalar', e),
                r = t.length;
              if (r !== n && r !== o)
                throw Error(
                  'invalid scalar, expected ' + ('' + n + ' or ') + o + ' bytes, got ' + r
                );
              return rR(a(t));
            })(e)
          );
          if (u === id) throw Error('invalid private or public key received');
          return rL(i(u), n);
        }
        let d = rL(i(t.Gu), n);
        function p(e) {
          return u(e, d);
        }
        return {
          scalarMult: u,
          scalarMultBase: p,
          getSharedSecret: (e, t) => u(e, t),
          getPublicKey: (e) => p(e),
          utils: { randomPrivateKey: () => t.randomBytes(t.nByteLength) },
          GuBytes: d,
        };
      })({
        P: ig,
        a: BigInt(486662),
        montgomeryBits: 255,
        nByteLength: 32,
        Gu: BigInt(9),
        powPminus2: (e) => {
          let { pow_p_5_8: t, b2: r } = (function (e) {
            let t = BigInt(10),
              r = BigInt(20),
              i = BigInt(40),
              s = BigInt(80),
              n = (((e * e) % ig) * e) % ig,
              o = (r5(n, im, ig) * n) % ig,
              a = (r5(o, iy, ig) * e) % ig,
              c = (r5(a, iw, ig) * a) % ig,
              l = (r5(c, t, ig) * c) % ig,
              h = (r5(l, r, ig) * l) % ig,
              u = (r5(h, i, ig) * h) % ig,
              d = (r5(u, s, ig) * u) % ig,
              p = (r5(d, s, ig) * u) % ig,
              f = (r5(p, t, ig) * c) % ig;
            return { pow_p_5_8: (r5(f, im, ig) * e) % ig, b2: n };
          })(e);
          return r8(r5(t, ib, ig) * r, ig);
        },
        adjustScalarBytes: function (e) {
          return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
        },
        randomBytes: e9,
      });
      function iE(e) {
        void 0 !== e.lowS && rD('lowS', e.lowS), void 0 !== e.prehash && rD('prehash', e.prehash);
      }
      let { bytesToNumberBE: i_, hexToBytes: iI } = rY;
      class iD extends Error {
        constructor(e = '') {
          super(e);
        }
      }
      let ix = {
          Err: iD,
          _tlv: {
            encode: (e, t) => {
              let { Err: r } = ix;
              if (e < 0 || e > 256) throw new r('tlv.encode: wrong tag');
              if (1 & t.length) throw new r('tlv.encode: unpadded data');
              let i = t.length / 2,
                s = rS(i);
              if ((s.length / 2) & 128) throw new r('tlv.encode: long form length too big');
              let n = i > 127 ? rS((s.length / 2) | 128) : '';
              return rS(e) + n + s + t;
            },
            decode(e, t) {
              let { Err: r } = ix,
                i = 0;
              if (e < 0 || e > 256) throw new r('tlv.encode: wrong tag');
              if (t.length < 2 || t[i++] !== e) throw new r('tlv.decode: wrong tlv');
              let s = t[i++],
                n = 0;
              if (128 & s) {
                let e = 127 & s;
                if (!e) throw new r('tlv.decode(long): indefinite length not supported');
                if (e > 4) throw new r('tlv.decode(long): byte length is too big');
                let o = t.subarray(i, i + e);
                if (o.length !== e) throw new r('tlv.decode: length bytes not complete');
                if (0 === o[0]) throw new r('tlv.decode(long): zero leftmost byte');
                for (let e of o) n = (n << 8) | e;
                if (((i += e), n < 128)) throw new r('tlv.decode(long): not minimal encoding');
              } else n = s;
              let o = t.subarray(i, i + n);
              if (o.length !== n) throw new r('tlv.decode: wrong value length');
              return { v: o, l: t.subarray(i + n) };
            },
          },
          _int: {
            encode(e) {
              let { Err: t } = ix;
              if (e < iP) throw new t('integer: negative integers are not allowed');
              let r = rS(e);
              if ((8 & Number.parseInt(r[0], 16) && (r = '00' + r), 1 & r.length))
                throw new t('unexpected DER parsing assertion: unpadded hex');
              return r;
            },
            decode(e) {
              let { Err: t } = ix;
              if (128 & e[0]) throw new t('invalid signature integer: negative');
              if (0 === e[0] && !(128 & e[1]))
                throw new t('invalid signature integer: unnecessary leading zero');
              return i_(e);
            },
          },
          toSig(e) {
            let { Err: t, _int: r, _tlv: i } = ix,
              s = 'string' == typeof e ? iI(e) : e;
            rI(s);
            let { v: n, l: o } = i.decode(48, s);
            if (o.length) throw new t('invalid signature: left bytes after parsing');
            let { v: a, l: c } = i.decode(2, n),
              { v: l, l: h } = i.decode(2, c);
            if (h.length) throw new t('invalid signature: left bytes after parsing');
            return { r: r.decode(a), s: r.decode(l) };
          },
          hexFromSig(e) {
            let { _tlv: t, _int: r } = ix,
              i = t.encode(2, r.encode(e.r)),
              s = t.encode(2, r.encode(e.s));
            return t.encode(48, i + s);
          },
        },
        iP = BigInt(0),
        iS = BigInt(1);
      BigInt(2);
      let iO = BigInt(3);
      BigInt(4);
      let iA = r7(BigInt('0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff')),
        iC = (function (e, t) {
          let r = (t) =>
            (function (e) {
              let t = (function (e) {
                  let t = iu(e);
                  return (
                    rG(
                      t,
                      { hash: 'hash', hmac: 'function', randomBytes: 'function' },
                      { bits2int: 'function', bits2int_modN: 'function', lowS: 'boolean' }
                    ),
                    Object.freeze({ lowS: !0, ...t })
                  );
                })(e),
                { Fp: r, n: i } = t,
                s = r.BYTES + 1,
                n = 2 * r.BYTES + 1;
              function o(e) {
                return r8(e, i);
              }
              let {
                  ProjectivePoint: a,
                  normPrivateKeyToScalar: c,
                  weierstrassEquation: l,
                  isWithinCurveOrder: h,
                } = (function (e) {
                  var t;
                  let r = (function (e) {
                      let t = iu(e);
                      rG(
                        t,
                        { a: 'field', b: 'field' },
                        {
                          allowedPrivateKeyLengths: 'array',
                          wrapPrivateKey: 'boolean',
                          isTorsionFree: 'function',
                          clearCofactor: 'function',
                          allowInfinityPoint: 'boolean',
                          fromBytes: 'function',
                          toBytes: 'function',
                        }
                      );
                      let { endo: r, Fp: i, a: s } = t;
                      if (r) {
                        if (!i.eql(s, i.ZERO))
                          throw Error(
                            'invalid endomorphism, can only be defined for Koblitz curves that have a=0'
                          );
                        if (
                          'object' != typeof r ||
                          'bigint' != typeof r.beta ||
                          'function' != typeof r.splitScalar
                        )
                          throw Error(
                            'invalid endomorphism, expected beta: bigint and splitScalar: function'
                          );
                      }
                      return Object.freeze({ ...t });
                    })(e),
                    { Fp: i } = r,
                    s = r7(r.n, r.nBitLength),
                    n =
                      r.toBytes ||
                      ((e, t, r) => {
                        let s = t.toAffine();
                        return rU(Uint8Array.from([4]), i.toBytes(s.x), i.toBytes(s.y));
                      }),
                    o =
                      r.fromBytes ||
                      ((e) => {
                        let t = e.subarray(1);
                        return {
                          x: i.fromBytes(t.subarray(0, i.BYTES)),
                          y: i.fromBytes(t.subarray(i.BYTES, 2 * i.BYTES)),
                        };
                      });
                  function a(e) {
                    let { a: t, b: s } = r,
                      n = i.sqr(e),
                      o = i.mul(n, e);
                    return i.add(i.add(o, i.mul(e, t)), s);
                  }
                  if (!i.eql(i.sqr(r.Gy), a(r.Gx)))
                    throw Error('bad generator point: equation left != right');
                  function c(e) {
                    let t;
                    let {
                      allowedPrivateKeyLengths: i,
                      nByteLength: s,
                      wrapPrivateKey: n,
                      n: o,
                    } = r;
                    if (i && 'bigint' != typeof e) {
                      if ((r_(e) && (e = rP(e)), 'string' != typeof e || !i.includes(e.length)))
                        throw Error('invalid private key');
                      e = e.padStart(2 * s, '0');
                    }
                    try {
                      t = 'bigint' == typeof e ? e : rN(rk('private key', e, s));
                    } catch {
                      throw Error(
                        'invalid private key, expected hex or ' + s + ' bytes, got ' + typeof e
                      );
                    }
                    return n && (t = r8(t, o)), r$('private key', t, iS, o), t;
                  }
                  function l(e) {
                    if (!(e instanceof d)) throw Error('ProjectivePoint expected');
                  }
                  let h = rW((e, t) => {
                      let { px: r, py: s, pz: n } = e;
                      if (i.eql(n, i.ONE)) return { x: r, y: s };
                      let o = e.is0();
                      null == t && (t = o ? i.ONE : i.inv(n));
                      let a = i.mul(r, t),
                        c = i.mul(s, t),
                        l = i.mul(n, t);
                      if (o) return { x: i.ZERO, y: i.ZERO };
                      if (!i.eql(l, i.ONE)) throw Error('invZ was invalid');
                      return { x: a, y: c };
                    }),
                    u = rW((e) => {
                      if (e.is0()) {
                        if (r.allowInfinityPoint && !i.is0(e.py)) return;
                        throw Error('bad point: ZERO');
                      }
                      let { x: t, y: s } = e.toAffine();
                      if (!i.isValid(t) || !i.isValid(s)) throw Error('bad point: x or y not FE');
                      let n = i.sqr(s),
                        o = a(t);
                      if (!i.eql(n, o)) throw Error('bad point: equation left != right');
                      if (!e.isTorsionFree()) throw Error('bad point: not in prime-order subgroup');
                      return !0;
                    });
                  class d {
                    constructor(e, t, r) {
                      if (((this.px = e), (this.py = t), (this.pz = r), null == e || !i.isValid(e)))
                        throw Error('x required');
                      if (null == t || !i.isValid(t)) throw Error('y required');
                      if (null == r || !i.isValid(r)) throw Error('z required');
                      Object.freeze(this);
                    }
                    static fromAffine(e) {
                      let { x: t, y: r } = e || {};
                      if (!e || !i.isValid(t) || !i.isValid(r)) throw Error('invalid affine point');
                      if (e instanceof d) throw Error('projective point not allowed');
                      let s = (e) => i.eql(e, i.ZERO);
                      return s(t) && s(r) ? d.ZERO : new d(t, r, i.ONE);
                    }
                    get x() {
                      return this.toAffine().x;
                    }
                    get y() {
                      return this.toAffine().y;
                    }
                    static normalizeZ(e) {
                      let t = i.invertBatch(e.map((e) => e.pz));
                      return e.map((e, r) => e.toAffine(t[r])).map(d.fromAffine);
                    }
                    static fromHex(e) {
                      let t = d.fromAffine(o(rk('pointHex', e)));
                      return t.assertValidity(), t;
                    }
                    static fromPrivateKey(e) {
                      return d.BASE.multiply(c(e));
                    }
                    static msm(e, t) {
                      return (function (e, t, r, i) {
                        if (
                          ((function (e, t) {
                            if (!Array.isArray(e)) throw Error('array expected');
                            e.forEach((e, r) => {
                              if (!(e instanceof t)) throw Error('invalid point at index ' + r);
                            });
                          })(r, e),
                          (function (e, t) {
                            if (!Array.isArray(e)) throw Error('array of scalars expected');
                            e.forEach((e, r) => {
                              if (!t.isValid(e)) throw Error('invalid scalar at index ' + r);
                            });
                          })(i, t),
                          r.length !== i.length)
                        )
                          throw Error('arrays of points and scalars must have equal length');
                        let s = e.ZERO,
                          n = rM(BigInt(r.length)),
                          o = n > 12 ? n - 3 : n > 4 ? n - 2 : n ? 2 : 1,
                          a = (1 << o) - 1,
                          c = Array(a + 1).fill(s),
                          l = Math.floor((t.BITS - 1) / o) * o,
                          h = s;
                        for (let e = l; e >= 0; e -= o) {
                          c.fill(s);
                          for (let t = 0; t < i.length; t++) {
                            let s = Number((i[t] >> BigInt(e)) & BigInt(a));
                            c[s] = c[s].add(r[t]);
                          }
                          let t = s;
                          for (let e = c.length - 1, r = s; e > 0; e--)
                            (r = r.add(c[e])), (t = t.add(r));
                          if (((h = h.add(t)), 0 !== e)) for (let e = 0; e < o; e++) h = h.double();
                        }
                        return h;
                      })(d, s, e, t);
                    }
                    _setWindowSize(e) {
                      f.setWindowSize(this, e);
                    }
                    assertValidity() {
                      u(this);
                    }
                    hasEvenY() {
                      let { y: e } = this.toAffine();
                      if (i.isOdd) return !i.isOdd(e);
                      throw Error("Field doesn't support isOdd");
                    }
                    equals(e) {
                      l(e);
                      let { px: t, py: r, pz: s } = this,
                        { px: n, py: o, pz: a } = e,
                        c = i.eql(i.mul(t, a), i.mul(n, s)),
                        h = i.eql(i.mul(r, a), i.mul(o, s));
                      return c && h;
                    }
                    negate() {
                      return new d(this.px, i.neg(this.py), this.pz);
                    }
                    double() {
                      let { a: e, b: t } = r,
                        s = i.mul(t, iO),
                        { px: n, py: o, pz: a } = this,
                        c = i.ZERO,
                        l = i.ZERO,
                        h = i.ZERO,
                        u = i.mul(n, n),
                        p = i.mul(o, o),
                        f = i.mul(a, a),
                        g = i.mul(n, o);
                      return (
                        (g = i.add(g, g)),
                        (h = i.mul(n, a)),
                        (h = i.add(h, h)),
                        (c = i.mul(e, h)),
                        (l = i.mul(s, f)),
                        (l = i.add(c, l)),
                        (c = i.sub(p, l)),
                        (l = i.add(p, l)),
                        (l = i.mul(c, l)),
                        (c = i.mul(g, c)),
                        (h = i.mul(s, h)),
                        (f = i.mul(e, f)),
                        (g = i.sub(u, f)),
                        (g = i.mul(e, g)),
                        (g = i.add(g, h)),
                        (h = i.add(u, u)),
                        (u = i.add(h, u)),
                        (u = i.add(u, f)),
                        (u = i.mul(u, g)),
                        (l = i.add(l, u)),
                        (f = i.mul(o, a)),
                        (f = i.add(f, f)),
                        (u = i.mul(f, g)),
                        (c = i.sub(c, u)),
                        (h = i.mul(f, p)),
                        (h = i.add(h, h)),
                        new d(c, l, (h = i.add(h, h)))
                      );
                    }
                    add(e) {
                      l(e);
                      let { px: t, py: s, pz: n } = this,
                        { px: o, py: a, pz: c } = e,
                        h = i.ZERO,
                        u = i.ZERO,
                        p = i.ZERO,
                        f = r.a,
                        g = i.mul(r.b, iO),
                        y = i.mul(t, o),
                        m = i.mul(s, a),
                        b = i.mul(n, c),
                        w = i.add(t, s),
                        v = i.add(o, a);
                      (w = i.mul(w, v)), (v = i.add(y, m)), (w = i.sub(w, v)), (v = i.add(t, n));
                      let E = i.add(o, c);
                      return (
                        (v = i.mul(v, E)),
                        (E = i.add(y, b)),
                        (v = i.sub(v, E)),
                        (E = i.add(s, n)),
                        (h = i.add(a, c)),
                        (E = i.mul(E, h)),
                        (h = i.add(m, b)),
                        (E = i.sub(E, h)),
                        (p = i.mul(f, v)),
                        (h = i.mul(g, b)),
                        (p = i.add(h, p)),
                        (h = i.sub(m, p)),
                        (p = i.add(m, p)),
                        (u = i.mul(h, p)),
                        (m = i.add(y, y)),
                        (m = i.add(m, y)),
                        (b = i.mul(f, b)),
                        (v = i.mul(g, v)),
                        (m = i.add(m, b)),
                        (b = i.sub(y, b)),
                        (b = i.mul(f, b)),
                        (v = i.add(v, b)),
                        (y = i.mul(m, v)),
                        (u = i.add(u, y)),
                        (y = i.mul(E, v)),
                        (h = i.mul(w, h)),
                        (h = i.sub(h, y)),
                        (y = i.mul(w, m)),
                        (p = i.mul(E, p)),
                        new d(h, u, (p = i.add(p, y)))
                      );
                    }
                    subtract(e) {
                      return this.add(e.negate());
                    }
                    is0() {
                      return this.equals(d.ZERO);
                    }
                    wNAF(e) {
                      return f.wNAFCached(this, e, d.normalizeZ);
                    }
                    multiplyUnsafe(e) {
                      let { endo: t, n: s } = r;
                      r$('scalar', e, iP, s);
                      let n = d.ZERO;
                      if (e === iP) return n;
                      if (this.is0() || e === iS) return this;
                      if (!t || f.hasPrecomputes(this))
                        return f.wNAFCachedUnsafe(this, e, d.normalizeZ);
                      let { k1neg: o, k1: a, k2neg: c, k2: l } = t.splitScalar(e),
                        h = n,
                        u = n,
                        p = this;
                      for (; a > iP || l > iP; )
                        a & iS && (h = h.add(p)),
                          l & iS && (u = u.add(p)),
                          (p = p.double()),
                          (a >>= iS),
                          (l >>= iS);
                      return (
                        o && (h = h.negate()),
                        c && (u = u.negate()),
                        (u = new d(i.mul(u.px, t.beta), u.py, u.pz)),
                        h.add(u)
                      );
                    }
                    multiply(e) {
                      let t, s;
                      let { endo: n, n: o } = r;
                      if ((r$('scalar', e, iS, o), n)) {
                        let { k1neg: r, k1: o, k2neg: a, k2: c } = n.splitScalar(e),
                          { p: l, f: h } = this.wNAF(o),
                          { p: u, f: p } = this.wNAF(c);
                        (l = f.constTimeNegate(r, l)),
                          (u = f.constTimeNegate(a, u)),
                          (u = new d(i.mul(u.px, n.beta), u.py, u.pz)),
                          (t = l.add(u)),
                          (s = h.add(p));
                      } else {
                        let { p: r, f: i } = this.wNAF(e);
                        (t = r), (s = i);
                      }
                      return d.normalizeZ([t, s])[0];
                    }
                    multiplyAndAddUnsafe(e, t, r) {
                      let i = d.BASE,
                        s = (e, t) =>
                          t !== iP && t !== iS && e.equals(i) ? e.multiply(t) : e.multiplyUnsafe(t),
                        n = s(this, t).add(s(e, r));
                      return n.is0() ? void 0 : n;
                    }
                    toAffine(e) {
                      return h(this, e);
                    }
                    isTorsionFree() {
                      let { h: e, isTorsionFree: t } = r;
                      if (e === iS) return !0;
                      if (t) return t(d, this);
                      throw Error('isTorsionFree() has not been declared for the elliptic curve');
                    }
                    clearCofactor() {
                      let { h: e, clearCofactor: t } = r;
                      return e === iS ? this : t ? t(d, this) : this.multiplyUnsafe(r.h);
                    }
                    toRawBytes(e = !0) {
                      return rD('isCompressed', e), this.assertValidity(), n(d, this, e);
                    }
                    toHex(e = !0) {
                      return rD('isCompressed', e), rP(this.toRawBytes(e));
                    }
                  }
                  (d.BASE = new d(r.Gx, r.Gy, i.ONE)), (d.ZERO = new d(i.ZERO, i.ONE, i.ZERO));
                  let p = r.nBitLength,
                    f =
                      ((t = r.endo ? Math.ceil(p / 2) : p),
                      {
                        constTimeNegate: is,
                        hasPrecomputes: (e) => 1 !== ih(e),
                        unsafeLadder(e, t, r = d.ZERO) {
                          let i = e;
                          for (; t > ir; ) t & ii && (r = r.add(i)), (i = i.double()), (t >>= ii);
                          return r;
                        },
                        precomputeWindow(e, r) {
                          let { windows: i, windowSize: s } = ia(r, t),
                            n = [],
                            o = e,
                            a = o;
                          for (let e = 0; e < i; e++) {
                            (a = o), n.push(a);
                            for (let e = 1; e < s; e++) (a = a.add(o)), n.push(a);
                            o = a.double();
                          }
                          return n;
                        },
                        wNAF(e, r, i) {
                          let { windows: s, windowSize: n } = ia(e, t),
                            o = d.ZERO,
                            a = d.BASE,
                            c = BigInt(2 ** e - 1),
                            l = 2 ** e,
                            h = BigInt(e);
                          for (let e = 0; e < s; e++) {
                            let t = e * n,
                              s = Number(i & c);
                            (i >>= h), s > n && ((s -= l), (i += ii));
                            let u = t + Math.abs(s) - 1,
                              d = e % 2 != 0,
                              p = s < 0;
                            0 === s ? (a = a.add(is(d, r[t]))) : (o = o.add(is(p, r[u])));
                          }
                          return { p: o, f: a };
                        },
                        wNAFUnsafe(e, r, i, s = d.ZERO) {
                          let { windows: n, windowSize: o } = ia(e, t),
                            a = BigInt(2 ** e - 1),
                            c = 2 ** e,
                            l = BigInt(e);
                          for (let e = 0; e < n; e++) {
                            let t = e * o;
                            if (i === ir) break;
                            let n = Number(i & a);
                            if (((i >>= l), n > o && ((n -= c), (i += ii)), 0 === n)) continue;
                            let h = r[t + Math.abs(n) - 1];
                            n < 0 && (h = h.negate()), (s = s.add(h));
                          }
                          return s;
                        },
                        getPrecomputes(e, t, r) {
                          let i = ic.get(t);
                          return (
                            i || ((i = this.precomputeWindow(t, e)), 1 !== e && ic.set(t, r(i))), i
                          );
                        },
                        wNAFCached(e, t, r) {
                          let i = ih(e);
                          return this.wNAF(i, this.getPrecomputes(i, e, r), t);
                        },
                        wNAFCachedUnsafe(e, t, r, i) {
                          let s = ih(e);
                          return 1 === s
                            ? this.unsafeLadder(e, t, i)
                            : this.wNAFUnsafe(s, this.getPrecomputes(s, e, r), t, i);
                        },
                        setWindowSize(e, r) {
                          io(r, t), il.set(e, r), ic.delete(e);
                        },
                      });
                  return {
                    CURVE: r,
                    ProjectivePoint: d,
                    normPrivateKeyToScalar: c,
                    weierstrassEquation: a,
                    isWithinCurveOrder: function (e) {
                      return rq(e, iS, r.n);
                    },
                  };
                })({
                  ...t,
                  toBytes(e, t, i) {
                    let s = t.toAffine(),
                      n = r.toBytes(s.x);
                    return (
                      rD('isCompressed', i),
                      i
                        ? rU(Uint8Array.from([t.hasEvenY() ? 2 : 3]), n)
                        : rU(Uint8Array.from([4]), n, r.toBytes(s.y))
                    );
                  },
                  fromBytes(e) {
                    let t = e.length,
                      i = e[0],
                      o = e.subarray(1);
                    if (t === s && (2 === i || 3 === i)) {
                      let e;
                      let t = rN(o);
                      if (!rq(t, iS, r.ORDER)) throw Error('Point is not on curve');
                      let s = l(t);
                      try {
                        e = r.sqrt(s);
                      } catch (e) {
                        throw Error(
                          'Point is not on curve' + (e instanceof Error ? ': ' + e.message : '')
                        );
                      }
                      return ((1 & i) == 1) != ((e & iS) === iS) && (e = r.neg(e)), { x: t, y: e };
                    }
                    if (t === n && 4 === i)
                      return {
                        x: r.fromBytes(o.subarray(0, r.BYTES)),
                        y: r.fromBytes(o.subarray(r.BYTES, 2 * r.BYTES)),
                      };
                    throw Error(
                      'invalid Point, expected length of ' +
                        s +
                        ', or uncompressed ' +
                        n +
                        ', got ' +
                        t
                    );
                  },
                }),
                u = (e) => rP(rj(e, t.nByteLength)),
                d = (e, t, r) => rN(e.slice(t, r));
              class p {
                constructor(e, t, r) {
                  (this.r = e), (this.s = t), (this.recovery = r), this.assertValidity();
                }
                static fromCompact(e) {
                  let r = t.nByteLength;
                  return new p(d((e = rk('compactSignature', e, 2 * r)), 0, r), d(e, r, 2 * r));
                }
                static fromDER(e) {
                  let { r: t, s: r } = ix.toSig(rk('DER', e));
                  return new p(t, r);
                }
                assertValidity() {
                  r$('r', this.r, iS, i), r$('s', this.s, iS, i);
                }
                addRecoveryBit(e) {
                  return new p(this.r, this.s, e);
                }
                recoverPublicKey(e) {
                  let { r: s, s: n, recovery: c } = this,
                    l = y(rk('msgHash', e));
                  if (null == c || ![0, 1, 2, 3].includes(c)) throw Error('recovery id invalid');
                  let h = 2 === c || 3 === c ? s + t.n : s;
                  if (h >= r.ORDER) throw Error('recovery id 2 or 3 invalid');
                  let d = (1 & c) == 0 ? '02' : '03',
                    p = a.fromHex(d + u(h)),
                    f = r6(h, i),
                    g = o(-l * f),
                    m = o(n * f),
                    b = a.BASE.multiplyAndAddUnsafe(p, g, m);
                  if (!b) throw Error('point at infinify');
                  return b.assertValidity(), b;
                }
                hasHighS() {
                  return this.s > i >> iS;
                }
                normalizeS() {
                  return this.hasHighS() ? new p(this.r, o(-this.s), this.recovery) : this;
                }
                toDERRawBytes() {
                  return rT(this.toDERHex());
                }
                toDERHex() {
                  return ix.hexFromSig({ r: this.r, s: this.s });
                }
                toCompactRawBytes() {
                  return rT(this.toCompactHex());
                }
                toCompactHex() {
                  return u(this.r) + u(this.s);
                }
              }
              function f(e) {
                let t = r_(e),
                  r = 'string' == typeof e,
                  i = (t || r) && e.length;
                return t ? i === s || i === n : r ? i === 2 * s || i === 2 * n : e instanceof a;
              }
              let g =
                  t.bits2int ||
                  function (e) {
                    if (e.length > 8192) throw Error('input is too large');
                    let r = rN(e),
                      i = 8 * e.length - t.nBitLength;
                    return i > 0 ? r >> BigInt(i) : r;
                  },
                y =
                  t.bits2int_modN ||
                  function (e) {
                    return o(g(e));
                  },
                m = rz(t.nBitLength);
              function b(e) {
                return r$('num < 2^' + t.nBitLength, e, iP, m), rj(e, t.nByteLength);
              }
              let w = { lowS: t.lowS, prehash: !1 },
                v = { lowS: t.lowS, prehash: !1 };
              return (
                a.BASE._setWindowSize(8),
                {
                  CURVE: t,
                  getPublicKey: function (e, t = !0) {
                    return a.fromPrivateKey(e).toRawBytes(t);
                  },
                  getSharedSecret: function (e, t, r = !0) {
                    if (f(e)) throw Error('first arg must be private key');
                    if (!f(t)) throw Error('second arg must be public key');
                    return a.fromHex(t).multiply(c(e)).toRawBytes(r);
                  },
                  sign: function (e, s, n = w) {
                    let { seed: l, k2sig: u } = (function (e, s, n = w) {
                      if (['recovered', 'canonical'].some((e) => e in n))
                        throw Error('sign() legacy options not supported');
                      let { hash: l, randomBytes: u } = t,
                        { lowS: d, prehash: f, extraEntropy: m } = n;
                      null == d && (d = !0),
                        (e = rk('msgHash', e)),
                        iE(n),
                        f && (e = rk('prehashed msgHash', l(e)));
                      let v = y(e),
                        E = c(s),
                        _ = [b(E), b(v)];
                      if (null != m && !1 !== m) {
                        let e = !0 === m ? u(r.BYTES) : m;
                        _.push(rk('extraEntropy', e));
                      }
                      return {
                        seed: rU(..._),
                        k2sig: function (e) {
                          var t;
                          let r = g(e);
                          if (!h(r)) return;
                          let s = r6(r, i),
                            n = a.BASE.multiply(r).toAffine(),
                            c = o(n.x);
                          if (c === iP) return;
                          let l = o(s * o(v + c * E));
                          if (l === iP) return;
                          let u = (2 * (n.x !== c)) | Number(n.y & iS),
                            f = l;
                          return (
                            d && l > i >> iS && ((f = (t = l) > i >> iS ? o(-t) : t), (u ^= 1)),
                            new p(c, f, u)
                          );
                        },
                      };
                    })(e, s, n);
                    return rV(t.hash.outputLen, t.nByteLength, t.hmac)(l, u);
                  },
                  verify: function (e, r, s, n = v) {
                    let c, l;
                    (r = rk('msgHash', r)), (s = rk('publicKey', s));
                    let { lowS: h, prehash: u, format: d } = n;
                    if ((iE(n), 'strict' in n)) throw Error('options.strict was renamed to lowS');
                    if (void 0 !== d && 'compact' !== d && 'der' !== d)
                      throw Error('format must be compact or der');
                    let f = 'string' == typeof e || r_(e),
                      g =
                        !f &&
                        !d &&
                        'object' == typeof e &&
                        null !== e &&
                        'bigint' == typeof e.r &&
                        'bigint' == typeof e.s;
                    if (!f && !g)
                      throw Error(
                        'invalid signature, expected Uint8Array, hex string or Signature instance'
                      );
                    try {
                      if ((g && (c = new p(e.r, e.s)), f)) {
                        try {
                          'compact' !== d && (c = p.fromDER(e));
                        } catch (e) {
                          if (!(e instanceof ix.Err)) throw e;
                        }
                        c || 'der' === d || (c = p.fromCompact(e));
                      }
                      l = a.fromHex(s);
                    } catch {
                      return !1;
                    }
                    if (!c || (h && c.hasHighS())) return !1;
                    u && (r = t.hash(r));
                    let { r: m, s: b } = c,
                      w = y(r),
                      E = r6(b, i),
                      _ = o(w * E),
                      I = o(m * E),
                      D = a.BASE.multiplyAndAddUnsafe(l, _, I)?.toAffine();
                    return !!D && o(D.x) === m;
                  },
                  ProjectivePoint: a,
                  Signature: p,
                  utils: {
                    isValidPrivateKey(e) {
                      try {
                        return c(e), !0;
                      } catch {
                        return !1;
                      }
                    },
                    normPrivateKeyToScalar: c,
                    randomPrivateKey: () => {
                      let e = it(t.n);
                      return (function (e, t, r = !1) {
                        let i = e.length,
                          s = ie(t),
                          n = it(t);
                        if (i < 16 || i < n || i > 1024)
                          throw Error('expected ' + n + '-1024 bytes of input, got ' + i);
                        let o = r8(r ? rR(e) : rN(e), t - rJ) + rJ;
                        return r ? rL(o, s) : rj(o, s);
                      })(t.randomBytes(e), t.n);
                    },
                    precompute: (e = 8, t = a.BASE) => (
                      t._setWindowSize(e), t.multiply(BigInt(3)), t
                    ),
                  },
                }
              );
            })({
              ...e,
              hash: t,
              hmac: (e, ...r) =>
                rl(
                  t,
                  e,
                  (function (...e) {
                    let t = 0;
                    for (let r = 0; r < e.length; r++) {
                      let i = e[r];
                      eH(i), (t += i.length);
                    }
                    let r = new Uint8Array(t);
                    for (let t = 0, i = 0; t < e.length; t++) {
                      let s = e[t];
                      r.set(s, i), (i += s.length);
                    }
                    return r;
                  })(...r)
                ),
              randomBytes: e9,
            });
          return { ...r(t), create: r };
        })(
          {
            a: iA.create(BigInt('-3')),
            b: BigInt('0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b'),
            Fp: iA,
            n: BigInt('0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551'),
            Gx: BigInt('0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296'),
            Gy: BigInt('0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5'),
            h: BigInt(1),
            lowS: !1,
          },
          rb
        ),
        iT = 'base10',
        iN = 'base16',
        iR = 'base64pad',
        ij = 'base64url',
        iL = 'utf8',
        ik = 1,
        iU = 2;
      function iB() {
        let e = iv.utils.randomPrivateKey(),
          t = iv.getPublicKey(e);
        return { privateKey: (0, K.dI)(e, iN), publicKey: (0, K.dI)(t, iN) };
      }
      function iq() {
        let e = e9(32);
        return (0, K.dI)(e, iN);
      }
      function i$(e, t) {
        let r = rd(rb, iv.getSharedSecret((0, K.sH)(e, iN), (0, K.sH)(t, iN)), void 0, void 0, 32);
        return (0, K.dI)(r, iN);
      }
      function iM(e) {
        let t = rb((0, K.sH)(e, iN));
        return (0, K.dI)(t, iN);
      }
      function iz(e) {
        let t = rb((0, K.sH)(e, iL));
        return (0, K.dI)(t, iN);
      }
      function iF(e) {
        return (0, K.sH)(`${e}`, iT);
      }
      function iH(e) {
        return Number((0, K.dI)(e, iT));
      }
      function iV(e) {
        return e.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
      }
      function iK(e) {
        let t = e.replace(/-/g, '+').replace(/_/g, '/'),
          r = (4 - (t.length % 4)) % 4;
        return t + '='.repeat(r);
      }
      function iG(e) {
        let t = iF('u' > typeof e.type ? e.type : 0);
        if (iH(t) === ik && typeof e.senderPublicKey > 'u')
          throw Error('Missing sender public key for type 1 envelope');
        let r = 'u' > typeof e.senderPublicKey ? (0, K.sH)(e.senderPublicKey, iN) : void 0,
          i = 'u' > typeof e.iv ? (0, K.sH)(e.iv, iN) : e9(12),
          s = iJ({
            type: t,
            sealed: ra((0, K.sH)(e.symKey, iN), i).encrypt((0, K.sH)(e.message, iL)),
            iv: i,
            senderPublicKey: r,
          });
        return e.encoding === ij ? iV(s) : s;
      }
      function iW(e) {
        let t = (0, K.sH)(e.symKey, iN),
          { sealed: r, iv: i } = iQ({ encoded: e.encoded, encoding: e.encoding }),
          s = ra(t, i).decrypt(r);
        if (null === s) throw Error('Failed to decrypt');
        return (0, K.dI)(s, iL);
      }
      function iY(e, t) {
        let r = iF(iU),
          i = e9(12),
          s = iJ({ type: r, sealed: (0, K.sH)(e, iL), iv: i });
        return t === ij ? iV(s) : s;
      }
      function iZ(e, t) {
        let { sealed: r } = iQ({ encoded: e, encoding: t });
        return (0, K.dI)(r, iL);
      }
      function iJ(e) {
        if (iH(e.type) === iU) return (0, K.dI)((0, K.xW)([e.type, e.sealed]), iR);
        if (iH(e.type) === ik) {
          if (typeof e.senderPublicKey > 'u')
            throw Error('Missing sender public key for type 1 envelope');
          return (0, K.dI)((0, K.xW)([e.type, e.senderPublicKey, e.iv, e.sealed]), iR);
        }
        return (0, K.dI)((0, K.xW)([e.type, e.iv, e.sealed]), iR);
      }
      function iQ(e) {
        let t = (e.encoding || iR) === ij ? iK(e.encoded) : e.encoded,
          r = (0, K.sH)(t, iR),
          i = r.slice(0, 1);
        if (iH(i) === ik) {
          let e = r.slice(1, 33),
            t = r.slice(33, 45);
          return { type: i, sealed: r.slice(45), iv: t, senderPublicKey: e };
        }
        if (iH(i) === iU) return { type: i, sealed: r.slice(1), iv: e9(12) };
        let s = r.slice(1, 13);
        return { type: i, sealed: r.slice(13), iv: s };
      }
      function iX(e, t) {
        let r = iQ({ encoded: e, encoding: t?.encoding });
        return i0({
          type: iH(r.type),
          senderPublicKey:
            'u' > typeof r.senderPublicKey ? (0, K.dI)(r.senderPublicKey, iN) : void 0,
          receiverPublicKey: t?.receiverPublicKey,
        });
      }
      function i0(e) {
        let t = e?.type || 0;
        if (t === ik) {
          if (typeof e?.senderPublicKey > 'u') throw Error('missing sender public key');
          if (typeof e?.receiverPublicKey > 'u') throw Error('missing receiver public key');
        }
        return {
          type: t,
          senderPublicKey: e?.senderPublicKey,
          receiverPublicKey: e?.receiverPublicKey,
        };
      }
      function i1(e) {
        return (
          e.type === ik &&
          'string' == typeof e.senderPublicKey &&
          'string' == typeof e.receiverPublicKey
        );
      }
      function i2(e) {
        return e.type === iU;
      }
      function i8(e, t) {
        let [r, i, s] = e.split('.'),
          n = J.from(iK(s), 'base64');
        if (64 !== n.length) throw Error('Invalid signature length');
        let o = n.slice(0, 32),
          a = n.slice(32, 64),
          c = rb(`${r}.${i}`),
          l = (function (e) {
            let t = J.from(e.x, 'base64'),
              r = J.from(e.y, 'base64');
            return (0, K.xW)([new Uint8Array([4]), t, r]);
          })(t);
        if (!iC.verify((0, K.xW)([o, a]), c, l)) throw Error('Invalid signature');
        return (0, V.Cq)(e).payload;
      }
      function i3(e) {
        return e?.relay || { protocol: 'irn' };
      }
      function i5(e) {
        let t = Y[e];
        if (typeof t > 'u') throw Error(`Relay Protocol not supported: ${e}`);
        return t;
      }
      function i6(e) {
        var t;
        if (!e.includes('wc:')) {
          let t = eM(e);
          null != t && t.includes('wc:') && (e = t);
        }
        let r = (e = (e = e.includes('wc://') ? e.replace('wc://', '') : e).includes('wc:')
            ? e.replace('wc:', '')
            : e).indexOf(':'),
          i = -1 !== e.indexOf('?') ? e.indexOf('?') : void 0,
          s = e.substring(0, r),
          n = e.substring(r + 1, i).split('@'),
          o = new URLSearchParams('u' > typeof i ? e.substring(i) : ''),
          a = {};
        o.forEach((e, t) => {
          a[t] = e;
        });
        let c = 'string' == typeof a.methods ? a.methods.split(',') : void 0;
        return {
          protocol: s,
          topic: (t = n[0]).startsWith('//') ? t.substring(2) : t,
          version: parseInt(n[1], 10),
          symKey: a.symKey,
          relay: (function (e, t = '-') {
            let r = {},
              i = 'relay' + t;
            return (
              Object.keys(e).forEach((t) => {
                if (t.startsWith(i)) {
                  let s = t.replace(i, ''),
                    n = e[t];
                  r[s] = n;
                }
              }),
              r
            );
          })(a),
          methods: c,
          expiryTimestamp: a.expiryTimestamp ? parseInt(a.expiryTimestamp, 10) : void 0,
        };
      }
      function i4(e) {
        let t = new URLSearchParams(),
          r = (function (e, t = '-') {
            let r = {};
            return (
              Object.keys(e).forEach((i) => {
                e[i] && (r['relay' + t + i] = e[i]);
              }),
              r
            );
          })(e.relay);
        Object.keys(r)
          .sort()
          .forEach((e) => {
            t.set(e, r[e]);
          }),
          t.set('symKey', e.symKey),
          e.expiryTimestamp && t.set('expiryTimestamp', e.expiryTimestamp.toString()),
          e.methods && t.set('methods', e.methods.join(','));
        let i = t.toString();
        return `${e.protocol}:${e.topic}@${e.version}?${i}`;
      }
      function i9(e, t, r) {
        return `${e}?wc_ev=${r}&topic=${t}`;
      }
      var i7 = Object.defineProperty,
        se = Object.defineProperties,
        st = Object.getOwnPropertyDescriptors,
        sr = Object.getOwnPropertySymbols,
        si = Object.prototype.hasOwnProperty,
        ss = Object.prototype.propertyIsEnumerable,
        sn = (e, t, r) =>
          t in e
            ? i7(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        so = (e, t) => {
          for (var r in t || (t = {})) si.call(t, r) && sn(e, r, t[r]);
          if (sr) for (var r of sr(t)) ss.call(t, r) && sn(e, r, t[r]);
          return e;
        },
        sa = (e, t) => se(e, st(t));
      function sc(e) {
        let t = [];
        return (
          e.forEach((e) => {
            let [r, i] = e.split(':');
            t.push(`${r}:${i}`);
          }),
          t
        );
      }
      function sl(e) {
        return e.includes(':');
      }
      function sh(e) {
        return sl(e) ? e.split(':')[0] : e;
      }
      function su(e, t) {
        let r = (function (e) {
          let t = {};
          return (
            e?.forEach((e) => {
              var r;
              let [i, s] = e.split(':');
              t[i] || (t[i] = { accounts: [], chains: [], events: [], methods: [] }),
                t[i].accounts.push(e),
                null == (r = t[i].chains) || r.push(`${i}:${s}`);
            }),
            t
          );
        })((t = t.map((e) => e.replace('did:pkh:', ''))));
        for (let [t, i] of Object.entries(r))
          i.methods ? (i.methods = eL(i.methods, e)) : (i.methods = e),
            (i.events = ['chainChanged', 'accountsChanged']);
        return r;
      }
      let sd = {
          INVALID_METHOD: { message: 'Invalid method.', code: 1001 },
          INVALID_EVENT: { message: 'Invalid event.', code: 1002 },
          INVALID_UPDATE_REQUEST: { message: 'Invalid update request.', code: 1003 },
          INVALID_EXTEND_REQUEST: { message: 'Invalid extend request.', code: 1004 },
          INVALID_SESSION_SETTLE_REQUEST: {
            message: 'Invalid session settle request.',
            code: 1005,
          },
          UNAUTHORIZED_METHOD: { message: 'Unauthorized method.', code: 3001 },
          UNAUTHORIZED_EVENT: { message: 'Unauthorized event.', code: 3002 },
          UNAUTHORIZED_UPDATE_REQUEST: { message: 'Unauthorized update request.', code: 3003 },
          UNAUTHORIZED_EXTEND_REQUEST: { message: 'Unauthorized extend request.', code: 3004 },
          USER_REJECTED: { message: 'User rejected.', code: 5e3 },
          USER_REJECTED_CHAINS: { message: 'User rejected chains.', code: 5001 },
          USER_REJECTED_METHODS: { message: 'User rejected methods.', code: 5002 },
          USER_REJECTED_EVENTS: { message: 'User rejected events.', code: 5003 },
          UNSUPPORTED_CHAINS: { message: 'Unsupported chains.', code: 5100 },
          UNSUPPORTED_METHODS: { message: 'Unsupported methods.', code: 5101 },
          UNSUPPORTED_EVENTS: { message: 'Unsupported events.', code: 5102 },
          UNSUPPORTED_ACCOUNTS: { message: 'Unsupported accounts.', code: 5103 },
          UNSUPPORTED_NAMESPACE_KEY: { message: 'Unsupported namespace key.', code: 5104 },
          USER_DISCONNECTED: { message: 'User disconnected.', code: 6e3 },
          SESSION_SETTLEMENT_FAILED: { message: 'Session settlement failed.', code: 7e3 },
          WC_METHOD_UNSUPPORTED: { message: 'Unsupported wc_ method.', code: 10001 },
        },
        sp = {
          NOT_INITIALIZED: { message: 'Not initialized.', code: 1 },
          NO_MATCHING_KEY: { message: 'No matching key.', code: 2 },
          RESTORE_WILL_OVERRIDE: { message: 'Restore will override.', code: 3 },
          RESUBSCRIBED: { message: 'Resubscribed.', code: 4 },
          MISSING_OR_INVALID: { message: 'Missing or invalid.', code: 5 },
          EXPIRED: { message: 'Expired.', code: 6 },
          UNKNOWN_TYPE: { message: 'Unknown type.', code: 7 },
          MISMATCHED_TOPIC: { message: 'Mismatched topic.', code: 8 },
          NON_CONFORMING_NAMESPACES: { message: 'Non conforming namespaces.', code: 9 },
        };
      function sf(e, t) {
        let { message: r, code: i } = sp[e];
        return { message: t ? `${r} ${t}` : r, code: i };
      }
      function sg(e, t) {
        let { message: r, code: i } = sd[e];
        return { message: t ? `${r} ${t}` : r, code: i };
      }
      function sy(e, t) {
        return !!Array.isArray(e) && (!('u' > typeof t) || !e.length || e.every(t));
      }
      function sm(e) {
        return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length;
      }
      function sb(e) {
        return typeof e > 'u';
      }
      function sw(e, t) {
        return !!(t && sb(e)) || ('string' == typeof e && !!e.trim().length);
      }
      function sv(e, t) {
        return !!(t && sb(e)) || ('number' == typeof e && !isNaN(e));
      }
      function sE(e, t) {
        let { requiredNamespaces: r } = t,
          i = Object.keys(e.namespaces),
          s = Object.keys(r),
          n = !0;
        return (
          !!eI(s, i) &&
          (i.forEach((t) => {
            let { accounts: i, methods: s, events: o } = e.namespaces[t],
              a = sc(i),
              c = r[t];
            (eI(et(t, c), a) && eI(c.methods, s) && eI(c.events, o)) || (n = !1);
          }),
          n)
        );
      }
      function s_(e) {
        return !!(sw(e, !1) && e.includes(':')) && 2 === e.split(':').length;
      }
      function sI(e) {
        function t(e) {
          try {
            return 'u' > typeof new URL(e);
          } catch {
            return !1;
          }
        }
        try {
          if (sw(e, !1)) {
            if (t(e)) return !0;
            let r = eM(e);
            return t(r);
          }
        } catch {}
        return !1;
      }
      function sD(e) {
        var t;
        return null == (t = e?.proposer) ? void 0 : t.publicKey;
      }
      function sx(e) {
        return e?.topic;
      }
      function sP(e, t) {
        let r = null;
        return (
          sw(e?.publicKey, !1) ||
            (r = sf('MISSING_OR_INVALID', `${t} controller public key should be a string`)),
          r
        );
      }
      function sS(e) {
        let t = !0;
        return sy(e) ? e.length && (t = e.every((e) => sw(e, !1))) : (t = !1), t;
      }
      function sO(e, t) {
        let r = null;
        return (
          Object.values(e).forEach((e) => {
            var i;
            let s;
            if (r) return;
            let n =
              ((i = `${t}, namespace`),
              (s = null),
              sS(e?.methods)
                ? sS(e?.events) ||
                  (s = sg(
                    'UNSUPPORTED_EVENTS',
                    `${i}, events should be an array of strings or empty array for no events`
                  ))
                : (s = sg(
                    'UNSUPPORTED_METHODS',
                    `${i}, methods should be an array of strings or empty array for no methods`
                  )),
              s);
            n && (r = n);
          }),
          r
        );
      }
      function sA(e, t, r) {
        let i = null;
        if (e && sm(e)) {
          let s;
          let n = sO(e, t);
          n && (i = n);
          let o =
            ((s = null),
            Object.entries(e).forEach(([e, i]) => {
              var n, o;
              let a;
              if (s) return;
              let c =
                ((n = et(e, i)),
                (o = `${t} ${r}`),
                (a = null),
                sy(n) && n.length
                  ? n.forEach((e) => {
                      a ||
                        s_(e) ||
                        (a = sg(
                          'UNSUPPORTED_CHAINS',
                          `${o}, chain ${e} should be a string and conform to "namespace:chainId" format`
                        ));
                    })
                  : s_(e) ||
                    (a = sg(
                      'UNSUPPORTED_CHAINS',
                      `${o}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`
                    )),
                a);
              c && (s = c);
            }),
            s);
          o && (i = o);
        } else i = sf('MISSING_OR_INVALID', `${t}, ${r} should be an object with data`);
        return i;
      }
      function sC(e, t) {
        let r = null;
        if (e && sm(e)) {
          let i;
          let s = sO(e, t);
          s && (r = s);
          let n =
            ((i = null),
            Object.values(e).forEach((e) => {
              var r, s;
              let n;
              if (i) return;
              let o =
                ((r = e?.accounts),
                (s = `${t} namespace`),
                (n = null),
                sy(r)
                  ? r.forEach((e) => {
                      n ||
                        (function (e) {
                          if (sw(e, !1) && e.includes(':')) {
                            let t = e.split(':');
                            if (3 === t.length) {
                              let e = t[0] + ':' + t[1];
                              return !!t[2] && s_(e);
                            }
                          }
                          return !1;
                        })(e) ||
                        (n = sg(
                          'UNSUPPORTED_ACCOUNTS',
                          `${s}, account ${e} should be a string and conform to "namespace:chainId:address" format`
                        ));
                    })
                  : (n = sg(
                      'UNSUPPORTED_ACCOUNTS',
                      `${s}, accounts should be an array of strings conforming to "namespace:chainId:address" format`
                    )),
                n);
              o && (i = o);
            }),
            i);
          n && (r = n);
        } else r = sf('MISSING_OR_INVALID', `${t}, namespaces should be an object with data`);
        return r;
      }
      function sT(e) {
        return sw(e.protocol, !0);
      }
      function sN(e, t) {
        let r = !1;
        return (
          t && !e
            ? (r = !0)
            : e &&
              sy(e) &&
              e.length &&
              e.forEach((e) => {
                r = sT(e);
              }),
          r
        );
      }
      function sR(e) {
        return 'number' == typeof e;
      }
      function sj(e) {
        return 'u' > typeof e;
      }
      function sL(e) {
        return !(
          !e ||
          'object' != typeof e ||
          !e.code ||
          !sv(e.code, !1) ||
          !e.message ||
          !sw(e.message, !1)
        );
      }
      function sk(e) {
        return !(sb(e) || !sw(e.method, !1));
      }
      function sU(e) {
        return !(sb(e) || (sb(e.result) && sb(e.error)) || !sv(e.id, !1) || !sw(e.jsonrpc, !1));
      }
      function sB(e) {
        return !(sb(e) || !sw(e.name, !1));
      }
      function sq(e, t) {
        return !(
          !s_(t) ||
          !(function (e) {
            let t = [];
            return (
              Object.values(e).forEach((e) => {
                t.push(...sc(e.accounts));
              }),
              t
            );
          })(e).includes(t)
        );
      }
      function s$(e, t, r) {
        return (
          !!sw(r, !1) &&
          (function (e, t) {
            let r = [];
            return (
              Object.values(e).forEach((e) => {
                sc(e.accounts).includes(t) && r.push(...e.methods);
              }),
              r
            );
          })(e, t).includes(r)
        );
      }
      function sM(e, t, r) {
        return (
          !!sw(r, !1) &&
          (function (e, t) {
            let r = [];
            return (
              Object.values(e).forEach((e) => {
                sc(e.accounts).includes(t) && r.push(...e.events);
              }),
              r
            );
          })(e, t).includes(r)
        );
      }
      function sz(e, t, r) {
        let i = null,
          s = (function (e) {
            let t = {};
            return (
              Object.keys(e).forEach((r) => {
                var i;
                r.includes(':')
                  ? (t[r] = e[r])
                  : null == (i = e[r].chains) ||
                    i.forEach((i) => {
                      t[i] = { methods: e[r].methods, events: e[r].events };
                    });
              }),
              t
            );
          })(e),
          n = (function (e) {
            let t = {};
            return (
              Object.keys(e).forEach((r) => {
                if (r.includes(':')) t[r] = e[r];
                else {
                  let i = sc(e[r].accounts);
                  i?.forEach((i) => {
                    t[i] = {
                      accounts: e[r].accounts.filter((e) => e.includes(`${i}:`)),
                      methods: e[r].methods,
                      events: e[r].events,
                    };
                  });
                }
              }),
              t
            );
          })(t),
          o = Object.keys(s),
          a = Object.keys(n),
          c = sF(Object.keys(e)),
          l = sF(Object.keys(t)),
          h = c.filter((e) => !l.includes(e));
        return (
          h.length &&
            (i = sf(
              'NON_CONFORMING_NAMESPACES',
              `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${h.toString()}
      Received: ${Object.keys(t).toString()}`
            )),
          eI(o, a) ||
            (i = sf(
              'NON_CONFORMING_NAMESPACES',
              `${r} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`
            )),
          Object.keys(t).forEach((e) => {
            if (!e.includes(':') || i) return;
            let s = sc(t[e].accounts);
            s.includes(e) ||
              (i = sf(
                'NON_CONFORMING_NAMESPACES',
                `${r} namespaces accounts don't satisfy namespace accounts for ${e}
        Required: ${e}
        Approved: ${s.toString()}`
              ));
          }),
          o.forEach((e) => {
            i ||
              (eI(s[e].methods, n[e].methods)
                ? eI(s[e].events, n[e].events) ||
                  (i = sf(
                    'NON_CONFORMING_NAMESPACES',
                    `${r} namespaces events don't satisfy namespace events for ${e}`
                  ))
                : (i = sf(
                    'NON_CONFORMING_NAMESPACES',
                    `${r} namespaces methods don't satisfy namespace methods for ${e}`
                  )));
          }),
          i
        );
      }
      function sF(e) {
        return [...new Set(e.map((e) => (e.includes(':') ? e.split(':')[0] : e)))];
      }
      function sH(e, t) {
        return sv(e, !1) && e <= t.max && e >= t.min;
      }
      function sV() {
        let e = em();
        return new Promise((t) => {
          switch (e) {
            case eu.browser:
              t(ey() && navigator?.onLine);
              break;
            case eu.reactNative:
              t(sK());
              break;
            case eu.node:
            default:
              t(!0);
          }
        });
      }
      async function sK() {
        if (ep() && 'u' > typeof r.g && null != r.g && r.g.NetInfo) {
          let e = await (null == r.g ? void 0 : r.g.NetInfo.fetch());
          return e?.isConnected;
        }
        return !0;
      }
      function sG(e) {
        var t, i;
        switch (em()) {
          case eu.browser:
            (t = e),
              !ep() &&
                ey() &&
                (window.addEventListener('online', () => t(!0)),
                window.addEventListener('offline', () => t(!1)));
            break;
          case eu.reactNative:
            (i = e),
              ep() &&
                'u' > typeof r.g &&
                null != r.g &&
                r.g.NetInfo &&
                r.g?.NetInfo.addEventListener((e) => i(e?.isConnected));
          case eu.node:
        }
      }
      let sW = {};
      class sY {
        static get(e) {
          return sW[e];
        }
        static set(e, t) {
          sW[e] = t;
        }
        static delete(e) {
          delete sW[e];
        }
      }
    },
    9912: (e, t, r) => {
      var i =
          ('undefined' != typeof globalThis && globalThis) ||
          ('undefined' != typeof self && self) ||
          (void 0 !== r.g && r.g),
        s = (function () {
          function e() {
            (this.fetch = !1), (this.DOMException = i.DOMException);
          }
          return (e.prototype = i), new e();
        })();
      !(function (e) {
        !(function (t) {
          var i =
              (void 0 !== e && e) ||
              ('undefined' != typeof self && self) ||
              (void 0 !== r.g && r.g) ||
              {},
            s = {
              searchParams: 'URLSearchParams' in i,
              iterable: 'Symbol' in i && 'iterator' in Symbol,
              blob:
                'FileReader' in i &&
                'Blob' in i &&
                (function () {
                  try {
                    return new Blob(), !0;
                  } catch (e) {
                    return !1;
                  }
                })(),
              formData: 'FormData' in i,
              arrayBuffer: 'ArrayBuffer' in i,
            };
          if (s.arrayBuffer)
            var n = [
                '[object Int8Array]',
                '[object Uint8Array]',
                '[object Uint8ClampedArray]',
                '[object Int16Array]',
                '[object Uint16Array]',
                '[object Int32Array]',
                '[object Uint32Array]',
                '[object Float32Array]',
                '[object Float64Array]',
              ],
              o =
                ArrayBuffer.isView ||
                function (e) {
                  return e && n.indexOf(Object.prototype.toString.call(e)) > -1;
                };
          function a(e) {
            if (
              ('string' != typeof e && (e = String(e)),
              /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || '' === e)
            )
              throw TypeError('Invalid character in header field name: "' + e + '"');
            return e.toLowerCase();
          }
          function c(e) {
            return 'string' != typeof e && (e = String(e)), e;
          }
          function l(e) {
            var t = {
              next: function () {
                var t = e.shift();
                return { done: void 0 === t, value: t };
              },
            };
            return (
              s.iterable &&
                (t[Symbol.iterator] = function () {
                  return t;
                }),
              t
            );
          }
          function h(e) {
            (this.map = {}),
              e instanceof h
                ? e.forEach(function (e, t) {
                    this.append(t, e);
                  }, this)
                : Array.isArray(e)
                  ? e.forEach(function (e) {
                      if (2 != e.length)
                        throw TypeError(
                          'Headers constructor: expected name/value pair to be length 2, found' +
                            e.length
                        );
                      this.append(e[0], e[1]);
                    }, this)
                  : e &&
                    Object.getOwnPropertyNames(e).forEach(function (t) {
                      this.append(t, e[t]);
                    }, this);
          }
          function u(e) {
            if (!e._noBody) {
              if (e.bodyUsed) return Promise.reject(TypeError('Already read'));
              e.bodyUsed = !0;
            }
          }
          function d(e) {
            return new Promise(function (t, r) {
              (e.onload = function () {
                t(e.result);
              }),
                (e.onerror = function () {
                  r(e.error);
                });
            });
          }
          function p(e) {
            var t = new FileReader(),
              r = d(t);
            return t.readAsArrayBuffer(e), r;
          }
          function f(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer;
          }
          function g() {
            return (
              (this.bodyUsed = !1),
              (this._initBody = function (e) {
                if (((this.bodyUsed = this.bodyUsed), (this._bodyInit = e), e)) {
                  if ('string' == typeof e) this._bodyText = e;
                  else if (s.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                  else if (s.formData && FormData.prototype.isPrototypeOf(e))
                    this._bodyFormData = e;
                  else if (s.searchParams && URLSearchParams.prototype.isPrototypeOf(e))
                    this._bodyText = e.toString();
                  else {
                    var t;
                    s.arrayBuffer && s.blob && (t = e) && DataView.prototype.isPrototypeOf(t)
                      ? ((this._bodyArrayBuffer = f(e.buffer)),
                        (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                      : s.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || o(e))
                        ? (this._bodyArrayBuffer = f(e))
                        : (this._bodyText = e = Object.prototype.toString.call(e));
                  }
                } else (this._noBody = !0), (this._bodyText = '');
                !this.headers.get('content-type') &&
                  ('string' == typeof e
                    ? this.headers.set('content-type', 'text/plain;charset=UTF-8')
                    : this._bodyBlob && this._bodyBlob.type
                      ? this.headers.set('content-type', this._bodyBlob.type)
                      : s.searchParams &&
                        URLSearchParams.prototype.isPrototypeOf(e) &&
                        this.headers.set(
                          'content-type',
                          'application/x-www-form-urlencoded;charset=UTF-8'
                        ));
              }),
              s.blob &&
                (this.blob = function () {
                  var e = u(this);
                  if (e) return e;
                  if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                  if (this._bodyArrayBuffer)
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                  if (!this._bodyFormData) return Promise.resolve(new Blob([this._bodyText]));
                  throw Error('could not read FormData body as blob');
                }),
              (this.arrayBuffer = function () {
                if (this._bodyArrayBuffer) {
                  var e = u(this);
                  return (
                    e ||
                    (ArrayBuffer.isView(this._bodyArrayBuffer)
                      ? Promise.resolve(
                          this._bodyArrayBuffer.buffer.slice(
                            this._bodyArrayBuffer.byteOffset,
                            this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
                          )
                        )
                      : Promise.resolve(this._bodyArrayBuffer))
                  );
                }
                if (s.blob) return this.blob().then(p);
                throw Error('could not read as ArrayBuffer');
              }),
              (this.text = function () {
                var e,
                  t,
                  r,
                  i,
                  s,
                  n = u(this);
                if (n) return n;
                if (this._bodyBlob)
                  return (
                    (e = this._bodyBlob),
                    (r = d((t = new FileReader()))),
                    (s = (i = /charset=([A-Za-z0-9_-]+)/.exec(e.type)) ? i[1] : 'utf-8'),
                    t.readAsText(e, s),
                    r
                  );
                if (this._bodyArrayBuffer)
                  return Promise.resolve(
                    (function (e) {
                      for (var t = new Uint8Array(e), r = Array(t.length), i = 0; i < t.length; i++)
                        r[i] = String.fromCharCode(t[i]);
                      return r.join('');
                    })(this._bodyArrayBuffer)
                  );
                if (!this._bodyFormData) return Promise.resolve(this._bodyText);
                throw Error('could not read FormData body as text');
              }),
              s.formData &&
                (this.formData = function () {
                  return this.text().then(b);
                }),
              (this.json = function () {
                return this.text().then(JSON.parse);
              }),
              this
            );
          }
          (h.prototype.append = function (e, t) {
            (e = a(e)), (t = c(t));
            var r = this.map[e];
            this.map[e] = r ? r + ', ' + t : t;
          }),
            (h.prototype.delete = function (e) {
              delete this.map[a(e)];
            }),
            (h.prototype.get = function (e) {
              return (e = a(e)), this.has(e) ? this.map[e] : null;
            }),
            (h.prototype.has = function (e) {
              return this.map.hasOwnProperty(a(e));
            }),
            (h.prototype.set = function (e, t) {
              this.map[a(e)] = c(t);
            }),
            (h.prototype.forEach = function (e, t) {
              for (var r in this.map) this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this);
            }),
            (h.prototype.keys = function () {
              var e = [];
              return (
                this.forEach(function (t, r) {
                  e.push(r);
                }),
                l(e)
              );
            }),
            (h.prototype.values = function () {
              var e = [];
              return (
                this.forEach(function (t) {
                  e.push(t);
                }),
                l(e)
              );
            }),
            (h.prototype.entries = function () {
              var e = [];
              return (
                this.forEach(function (t, r) {
                  e.push([r, t]);
                }),
                l(e)
              );
            }),
            s.iterable && (h.prototype[Symbol.iterator] = h.prototype.entries);
          var y = ['CONNECT', 'DELETE', 'GET', 'HEAD', 'OPTIONS', 'PATCH', 'POST', 'PUT', 'TRACE'];
          function m(e, t) {
            if (!(this instanceof m))
              throw TypeError(
                'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
              );
            var r,
              s,
              n = (t = t || {}).body;
            if (e instanceof m) {
              if (e.bodyUsed) throw TypeError('Already read');
              (this.url = e.url),
                (this.credentials = e.credentials),
                t.headers || (this.headers = new h(e.headers)),
                (this.method = e.method),
                (this.mode = e.mode),
                (this.signal = e.signal),
                n || null == e._bodyInit || ((n = e._bodyInit), (e.bodyUsed = !0));
            } else this.url = String(e);
            if (
              ((this.credentials = t.credentials || this.credentials || 'same-origin'),
              (t.headers || !this.headers) && (this.headers = new h(t.headers)),
              (this.method =
                ((s = (r = t.method || this.method || 'GET').toUpperCase()),
                y.indexOf(s) > -1 ? s : r)),
              (this.mode = t.mode || this.mode || null),
              (this.signal =
                t.signal ||
                this.signal ||
                (function () {
                  if ('AbortController' in i) return new AbortController().signal;
                })()),
              (this.referrer = null),
              ('GET' === this.method || 'HEAD' === this.method) && n)
            )
              throw TypeError('Body not allowed for GET or HEAD requests');
            if (
              (this._initBody(n),
              ('GET' === this.method || 'HEAD' === this.method) &&
                ('no-store' === t.cache || 'no-cache' === t.cache))
            ) {
              var o = /([?&])_=[^&]*/;
              o.test(this.url)
                ? (this.url = this.url.replace(o, '$1_=' + new Date().getTime()))
                : (this.url += (/\?/.test(this.url) ? '&' : '?') + '_=' + new Date().getTime());
            }
          }
          function b(e) {
            var t = new FormData();
            return (
              e
                .trim()
                .split('&')
                .forEach(function (e) {
                  if (e) {
                    var r = e.split('='),
                      i = r.shift().replace(/\+/g, ' '),
                      s = r.join('=').replace(/\+/g, ' ');
                    t.append(decodeURIComponent(i), decodeURIComponent(s));
                  }
                }),
              t
            );
          }
          function w(e, t) {
            if (!(this instanceof w))
              throw TypeError(
                'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
              );
            if (
              (t || (t = {}),
              (this.type = 'default'),
              (this.status = void 0 === t.status ? 200 : t.status),
              this.status < 200 || this.status > 599)
            )
              throw RangeError(
                "Failed to construct 'Response': The status provided (0) is outside the range [200, 599]."
              );
            (this.ok = this.status >= 200 && this.status < 300),
              (this.statusText = void 0 === t.statusText ? '' : '' + t.statusText),
              (this.headers = new h(t.headers)),
              (this.url = t.url || ''),
              this._initBody(e);
          }
          (m.prototype.clone = function () {
            return new m(this, { body: this._bodyInit });
          }),
            g.call(m.prototype),
            g.call(w.prototype),
            (w.prototype.clone = function () {
              return new w(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new h(this.headers),
                url: this.url,
              });
            }),
            (w.error = function () {
              var e = new w(null, { status: 200, statusText: '' });
              return (e.ok = !1), (e.status = 0), (e.type = 'error'), e;
            });
          var v = [301, 302, 303, 307, 308];
          (w.redirect = function (e, t) {
            if (-1 === v.indexOf(t)) throw RangeError('Invalid status code');
            return new w(null, { status: t, headers: { location: e } });
          }),
            (t.DOMException = i.DOMException);
          try {
            new t.DOMException();
          } catch (e) {
            (t.DOMException = function (e, t) {
              (this.message = e), (this.name = t);
              var r = Error(e);
              this.stack = r.stack;
            }),
              (t.DOMException.prototype = Object.create(Error.prototype)),
              (t.DOMException.prototype.constructor = t.DOMException);
          }
          function E(e, r) {
            return new Promise(function (n, o) {
              var l = new m(e, r);
              if (l.signal && l.signal.aborted)
                return o(new t.DOMException('Aborted', 'AbortError'));
              var u = new XMLHttpRequest();
              function d() {
                u.abort();
              }
              if (
                ((u.onload = function () {
                  var e,
                    t,
                    r = {
                      statusText: u.statusText,
                      headers:
                        ((e = u.getAllResponseHeaders() || ''),
                        (t = new h()),
                        e
                          .replace(/\r?\n[\t ]+/g, ' ')
                          .split('\r')
                          .map(function (e) {
                            return 0 === e.indexOf('\n') ? e.substr(1, e.length) : e;
                          })
                          .forEach(function (e) {
                            var r = e.split(':'),
                              i = r.shift().trim();
                            if (i) {
                              var s = r.join(':').trim();
                              try {
                                t.append(i, s);
                              } catch (e) {
                                console.warn('Response ' + e.message);
                              }
                            }
                          }),
                        t),
                    };
                  0 === l.url.indexOf('file://') && (u.status < 200 || u.status > 599)
                    ? (r.status = 200)
                    : (r.status = u.status),
                    (r.url = 'responseURL' in u ? u.responseURL : r.headers.get('X-Request-URL'));
                  var i = 'response' in u ? u.response : u.responseText;
                  setTimeout(function () {
                    n(new w(i, r));
                  }, 0);
                }),
                (u.onerror = function () {
                  setTimeout(function () {
                    o(TypeError('Network request failed'));
                  }, 0);
                }),
                (u.ontimeout = function () {
                  setTimeout(function () {
                    o(TypeError('Network request timed out'));
                  }, 0);
                }),
                (u.onabort = function () {
                  setTimeout(function () {
                    o(new t.DOMException('Aborted', 'AbortError'));
                  }, 0);
                }),
                u.open(
                  l.method,
                  (function (e) {
                    try {
                      return '' === e && i.location.href ? i.location.href : e;
                    } catch (t) {
                      return e;
                    }
                  })(l.url),
                  !0
                ),
                'include' === l.credentials
                  ? (u.withCredentials = !0)
                  : 'omit' === l.credentials && (u.withCredentials = !1),
                'responseType' in u &&
                  (s.blob
                    ? (u.responseType = 'blob')
                    : s.arrayBuffer && (u.responseType = 'arraybuffer')),
                r &&
                  'object' == typeof r.headers &&
                  !(r.headers instanceof h || (i.Headers && r.headers instanceof i.Headers)))
              ) {
                var p = [];
                Object.getOwnPropertyNames(r.headers).forEach(function (e) {
                  p.push(a(e)), u.setRequestHeader(e, c(r.headers[e]));
                }),
                  l.headers.forEach(function (e, t) {
                    -1 === p.indexOf(t) && u.setRequestHeader(t, e);
                  });
              } else
                l.headers.forEach(function (e, t) {
                  u.setRequestHeader(t, e);
                });
              l.signal &&
                (l.signal.addEventListener('abort', d),
                (u.onreadystatechange = function () {
                  4 === u.readyState && l.signal.removeEventListener('abort', d);
                })),
                u.send(void 0 === l._bodyInit ? null : l._bodyInit);
            });
          }
          (E.polyfill = !0),
            i.fetch || ((i.fetch = E), (i.Headers = h), (i.Request = m), (i.Response = w)),
            (t.Headers = h),
            (t.Request = m),
            (t.Response = w),
            (t.fetch = E),
            Object.defineProperty(t, '__esModule', { value: !0 });
        })({});
      })(s),
        (s.fetch.ponyfill = !0),
        delete s.fetch.polyfill;
      var n = i.fetch ? i : s;
      ((t = n.fetch).default = n.fetch),
        (t.fetch = n.fetch),
        (t.Headers = n.Headers),
        (t.Request = n.Request),
        (t.Response = n.Response),
        (e.exports = t);
    },
    13996: (e, t, r) => {
      'use strict';
      r.r(t),
        r.d(t, {
          __assign: () => n,
          __asyncDelegator: () => v,
          __asyncGenerator: () => w,
          __asyncValues: () => E,
          __await: () => b,
          __awaiter: () => h,
          __classPrivateFieldGet: () => x,
          __classPrivateFieldSet: () => P,
          __createBinding: () => d,
          __decorate: () => a,
          __exportStar: () => p,
          __extends: () => s,
          __generator: () => u,
          __importDefault: () => D,
          __importStar: () => I,
          __makeTemplateObject: () => _,
          __metadata: () => l,
          __param: () => c,
          __read: () => g,
          __rest: () => o,
          __spread: () => y,
          __spreadArrays: () => m,
          __values: () => f,
        });
      var i = function (e, t) {
        return (i =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
          })(e, t);
      };
      function s(e, t) {
        function r() {
          this.constructor = e;
        }
        i(e, t),
          (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
      }
      var n = function () {
        return (n =
          Object.assign ||
          function (e) {
            for (var t, r = 1, i = arguments.length; r < i; r++)
              for (var s in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
            return e;
          }).apply(this, arguments);
      };
      function o(e, t) {
        var r = {};
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (r[i] = e[i]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
          for (var s = 0, i = Object.getOwnPropertySymbols(e); s < i.length; s++)
            0 > t.indexOf(i[s]) &&
              Object.prototype.propertyIsEnumerable.call(e, i[s]) &&
              (r[i[s]] = e[i[s]]);
        return r;
      }
      function a(e, t, r, i) {
        var s,
          n = arguments.length,
          o = n < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, r)) : i;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          o = Reflect.decorate(e, t, r, i);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (s = e[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(t, r, o) : s(t, r)) || o);
        return n > 3 && o && Object.defineProperty(t, r, o), o;
      }
      function c(e, t) {
        return function (r, i) {
          t(r, i, e);
        };
      }
      function l(e, t) {
        if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function h(e, t, r, i) {
        return new (r || (r = Promise))(function (s, n) {
          function o(e) {
            try {
              c(i.next(e));
            } catch (e) {
              n(e);
            }
          }
          function a(e) {
            try {
              c(i.throw(e));
            } catch (e) {
              n(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? s(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(o, a);
          }
          c((i = i.apply(e, t || [])).next());
        });
      }
      function u(e, t) {
        var r,
          i,
          s,
          n,
          o = {
            label: 0,
            sent: function () {
              if (1 & s[0]) throw s[1];
              return s[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (n = { next: a(0), throw: a(1), return: a(2) }),
          'function' == typeof Symbol &&
            (n[Symbol.iterator] = function () {
              return this;
            }),
          n
        );
        function a(n) {
          return function (a) {
            return (function (n) {
              if (r) throw TypeError('Generator is already executing.');
              for (; o; )
                try {
                  if (
                    ((r = 1),
                    i &&
                      (s =
                        2 & n[0]
                          ? i.return
                          : n[0]
                            ? i.throw || ((s = i.return) && s.call(i), 0)
                            : i.next) &&
                      !(s = s.call(i, n[1])).done)
                  )
                    return s;
                  switch (((i = 0), s && (n = [2 & n[0], s.value]), n[0])) {
                    case 0:
                    case 1:
                      s = n;
                      break;
                    case 4:
                      return o.label++, { value: n[1], done: !1 };
                    case 5:
                      o.label++, (i = n[1]), (n = [0]);
                      continue;
                    case 7:
                      (n = o.ops.pop()), o.trys.pop();
                      continue;
                    default:
                      if (
                        !(s = (s = o.trys).length > 0 && s[s.length - 1]) &&
                        (6 === n[0] || 2 === n[0])
                      ) {
                        o = 0;
                        continue;
                      }
                      if (3 === n[0] && (!s || (n[1] > s[0] && n[1] < s[3]))) {
                        o.label = n[1];
                        break;
                      }
                      if (6 === n[0] && o.label < s[1]) {
                        (o.label = s[1]), (s = n);
                        break;
                      }
                      if (s && o.label < s[2]) {
                        (o.label = s[2]), o.ops.push(n);
                        break;
                      }
                      s[2] && o.ops.pop(), o.trys.pop();
                      continue;
                  }
                  n = t.call(e, o);
                } catch (e) {
                  (n = [6, e]), (i = 0);
                } finally {
                  r = s = 0;
                }
              if (5 & n[0]) throw n[1];
              return { value: n[0] ? n[1] : void 0, done: !0 };
            })([n, a]);
          };
        }
      }
      function d(e, t, r, i) {
        void 0 === i && (i = r), (e[i] = t[r]);
      }
      function p(e, t) {
        for (var r in e) 'default' === r || t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      function f(e) {
        var t = 'function' == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          i = 0;
        if (r) return r.call(e);
        if (e && 'number' == typeof e.length)
          return {
            next: function () {
              return e && i >= e.length && (e = void 0), { value: e && e[i++], done: !e };
            },
          };
        throw TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
      }
      function g(e, t) {
        var r = 'function' == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var i,
          s,
          n = r.call(e),
          o = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(i = n.next()).done; ) o.push(i.value);
        } catch (e) {
          s = { error: e };
        } finally {
          try {
            i && !i.done && (r = n.return) && r.call(n);
          } finally {
            if (s) throw s.error;
          }
        }
        return o;
      }
      function y() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
        return e;
      }
      function m() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
        for (var i = Array(e), s = 0, t = 0; t < r; t++)
          for (var n = arguments[t], o = 0, a = n.length; o < a; o++, s++) i[s] = n[o];
        return i;
      }
      function b(e) {
        return this instanceof b ? ((this.v = e), this) : new b(e);
      }
      function w(e, t, r) {
        if (!Symbol.asyncIterator) throw TypeError('Symbol.asyncIterator is not defined.');
        var i,
          s = r.apply(e, t || []),
          n = [];
        return (
          (i = {}),
          o('next'),
          o('throw'),
          o('return'),
          (i[Symbol.asyncIterator] = function () {
            return this;
          }),
          i
        );
        function o(e) {
          s[e] &&
            (i[e] = function (t) {
              return new Promise(function (r, i) {
                n.push([e, t, r, i]) > 1 || a(e, t);
              });
            });
        }
        function a(e, t) {
          try {
            var r;
            (r = s[e](t)).value instanceof b
              ? Promise.resolve(r.value.v).then(c, l)
              : h(n[0][2], r);
          } catch (e) {
            h(n[0][3], e);
          }
        }
        function c(e) {
          a('next', e);
        }
        function l(e) {
          a('throw', e);
        }
        function h(e, t) {
          e(t), n.shift(), n.length && a(n[0][0], n[0][1]);
        }
      }
      function v(e) {
        var t, r;
        return (
          (t = {}),
          i('next'),
          i('throw', function (e) {
            throw e;
          }),
          i('return'),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function i(i, s) {
          t[i] = e[i]
            ? function (t) {
                return (r = !r) ? { value: b(e[i](t)), done: 'return' === i } : s ? s(t) : t;
              }
            : s;
        }
      }
      function E(e) {
        if (!Symbol.asyncIterator) throw TypeError('Symbol.asyncIterator is not defined.');
        var t,
          r = e[Symbol.asyncIterator];
        return r
          ? r.call(e)
          : ((e = f(e)),
            (t = {}),
            i('next'),
            i('throw'),
            i('return'),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function i(r) {
          t[r] =
            e[r] &&
            function (t) {
              return new Promise(function (i, s) {
                !(function (e, t, r, i) {
                  Promise.resolve(i).then(function (t) {
                    e({ value: t, done: r });
                  }, t);
                })(i, s, (t = e[r](t)).done, t.value);
              });
            };
        }
      }
      function _(e, t) {
        return (
          Object.defineProperty ? Object.defineProperty(e, 'raw', { value: t }) : (e.raw = t), e
        );
      }
      function I(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      }
      function D(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function x(e, t) {
        if (!t.has(e)) throw TypeError('attempted to get private field on non-instance');
        return t.get(e);
      }
      function P(e, t, r) {
        if (!t.has(e)) throw TypeError('attempted to set private field on non-instance');
        return t.set(e, r), r;
      }
    },
    20561: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.fromMiliseconds = t.toMiliseconds = void 0);
      let i = r(82914);
      (t.toMiliseconds = function (e) {
        return e * i.ONE_THOUSAND;
      }),
        (t.fromMiliseconds = function (e) {
          return Math.floor(e / i.ONE_THOUSAND);
        });
    },
    24025: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.IWatch = void 0);
      class r {}
      t.IWatch = r;
    },
    24584: (e, t, r) => {
      'use strict';
      r.r(t),
        r.d(t, {
          __assign: () => n,
          __asyncDelegator: () => v,
          __asyncGenerator: () => w,
          __asyncValues: () => E,
          __await: () => b,
          __awaiter: () => h,
          __classPrivateFieldGet: () => x,
          __classPrivateFieldSet: () => P,
          __createBinding: () => d,
          __decorate: () => a,
          __exportStar: () => p,
          __extends: () => s,
          __generator: () => u,
          __importDefault: () => D,
          __importStar: () => I,
          __makeTemplateObject: () => _,
          __metadata: () => l,
          __param: () => c,
          __read: () => g,
          __rest: () => o,
          __spread: () => y,
          __spreadArrays: () => m,
          __values: () => f,
        });
      var i = function (e, t) {
        return (i =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
          })(e, t);
      };
      function s(e, t) {
        function r() {
          this.constructor = e;
        }
        i(e, t),
          (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
      }
      var n = function () {
        return (n =
          Object.assign ||
          function (e) {
            for (var t, r = 1, i = arguments.length; r < i; r++)
              for (var s in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
            return e;
          }).apply(this, arguments);
      };
      function o(e, t) {
        var r = {};
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (r[i] = e[i]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
          for (var s = 0, i = Object.getOwnPropertySymbols(e); s < i.length; s++)
            0 > t.indexOf(i[s]) &&
              Object.prototype.propertyIsEnumerable.call(e, i[s]) &&
              (r[i[s]] = e[i[s]]);
        return r;
      }
      function a(e, t, r, i) {
        var s,
          n = arguments.length,
          o = n < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, r)) : i;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          o = Reflect.decorate(e, t, r, i);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (s = e[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(t, r, o) : s(t, r)) || o);
        return n > 3 && o && Object.defineProperty(t, r, o), o;
      }
      function c(e, t) {
        return function (r, i) {
          t(r, i, e);
        };
      }
      function l(e, t) {
        if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function h(e, t, r, i) {
        return new (r || (r = Promise))(function (s, n) {
          function o(e) {
            try {
              c(i.next(e));
            } catch (e) {
              n(e);
            }
          }
          function a(e) {
            try {
              c(i.throw(e));
            } catch (e) {
              n(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? s(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(o, a);
          }
          c((i = i.apply(e, t || [])).next());
        });
      }
      function u(e, t) {
        var r,
          i,
          s,
          n,
          o = {
            label: 0,
            sent: function () {
              if (1 & s[0]) throw s[1];
              return s[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (n = { next: a(0), throw: a(1), return: a(2) }),
          'function' == typeof Symbol &&
            (n[Symbol.iterator] = function () {
              return this;
            }),
          n
        );
        function a(n) {
          return function (a) {
            return (function (n) {
              if (r) throw TypeError('Generator is already executing.');
              for (; o; )
                try {
                  if (
                    ((r = 1),
                    i &&
                      (s =
                        2 & n[0]
                          ? i.return
                          : n[0]
                            ? i.throw || ((s = i.return) && s.call(i), 0)
                            : i.next) &&
                      !(s = s.call(i, n[1])).done)
                  )
                    return s;
                  switch (((i = 0), s && (n = [2 & n[0], s.value]), n[0])) {
                    case 0:
                    case 1:
                      s = n;
                      break;
                    case 4:
                      return o.label++, { value: n[1], done: !1 };
                    case 5:
                      o.label++, (i = n[1]), (n = [0]);
                      continue;
                    case 7:
                      (n = o.ops.pop()), o.trys.pop();
                      continue;
                    default:
                      if (
                        !(s = (s = o.trys).length > 0 && s[s.length - 1]) &&
                        (6 === n[0] || 2 === n[0])
                      ) {
                        o = 0;
                        continue;
                      }
                      if (3 === n[0] && (!s || (n[1] > s[0] && n[1] < s[3]))) {
                        o.label = n[1];
                        break;
                      }
                      if (6 === n[0] && o.label < s[1]) {
                        (o.label = s[1]), (s = n);
                        break;
                      }
                      if (s && o.label < s[2]) {
                        (o.label = s[2]), o.ops.push(n);
                        break;
                      }
                      s[2] && o.ops.pop(), o.trys.pop();
                      continue;
                  }
                  n = t.call(e, o);
                } catch (e) {
                  (n = [6, e]), (i = 0);
                } finally {
                  r = s = 0;
                }
              if (5 & n[0]) throw n[1];
              return { value: n[0] ? n[1] : void 0, done: !0 };
            })([n, a]);
          };
        }
      }
      function d(e, t, r, i) {
        void 0 === i && (i = r), (e[i] = t[r]);
      }
      function p(e, t) {
        for (var r in e) 'default' === r || t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      function f(e) {
        var t = 'function' == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          i = 0;
        if (r) return r.call(e);
        if (e && 'number' == typeof e.length)
          return {
            next: function () {
              return e && i >= e.length && (e = void 0), { value: e && e[i++], done: !e };
            },
          };
        throw TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
      }
      function g(e, t) {
        var r = 'function' == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var i,
          s,
          n = r.call(e),
          o = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(i = n.next()).done; ) o.push(i.value);
        } catch (e) {
          s = { error: e };
        } finally {
          try {
            i && !i.done && (r = n.return) && r.call(n);
          } finally {
            if (s) throw s.error;
          }
        }
        return o;
      }
      function y() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
        return e;
      }
      function m() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
        for (var i = Array(e), s = 0, t = 0; t < r; t++)
          for (var n = arguments[t], o = 0, a = n.length; o < a; o++, s++) i[s] = n[o];
        return i;
      }
      function b(e) {
        return this instanceof b ? ((this.v = e), this) : new b(e);
      }
      function w(e, t, r) {
        if (!Symbol.asyncIterator) throw TypeError('Symbol.asyncIterator is not defined.');
        var i,
          s = r.apply(e, t || []),
          n = [];
        return (
          (i = {}),
          o('next'),
          o('throw'),
          o('return'),
          (i[Symbol.asyncIterator] = function () {
            return this;
          }),
          i
        );
        function o(e) {
          s[e] &&
            (i[e] = function (t) {
              return new Promise(function (r, i) {
                n.push([e, t, r, i]) > 1 || a(e, t);
              });
            });
        }
        function a(e, t) {
          try {
            var r;
            (r = s[e](t)).value instanceof b
              ? Promise.resolve(r.value.v).then(c, l)
              : h(n[0][2], r);
          } catch (e) {
            h(n[0][3], e);
          }
        }
        function c(e) {
          a('next', e);
        }
        function l(e) {
          a('throw', e);
        }
        function h(e, t) {
          e(t), n.shift(), n.length && a(n[0][0], n[0][1]);
        }
      }
      function v(e) {
        var t, r;
        return (
          (t = {}),
          i('next'),
          i('throw', function (e) {
            throw e;
          }),
          i('return'),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function i(i, s) {
          t[i] = e[i]
            ? function (t) {
                return (r = !r) ? { value: b(e[i](t)), done: 'return' === i } : s ? s(t) : t;
              }
            : s;
        }
      }
      function E(e) {
        if (!Symbol.asyncIterator) throw TypeError('Symbol.asyncIterator is not defined.');
        var t,
          r = e[Symbol.asyncIterator];
        return r
          ? r.call(e)
          : ((e = f(e)),
            (t = {}),
            i('next'),
            i('throw'),
            i('return'),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function i(r) {
          t[r] =
            e[r] &&
            function (t) {
              return new Promise(function (i, s) {
                !(function (e, t, r, i) {
                  Promise.resolve(i).then(function (t) {
                    e({ value: t, done: r });
                  }, t);
                })(i, s, (t = e[r](t)).done, t.value);
              });
            };
        }
      }
      function _(e, t) {
        return (
          Object.defineProperty ? Object.defineProperty(e, 'raw', { value: t }) : (e.raw = t), e
        );
      }
      function I(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      }
      function D(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function x(e, t) {
        if (!t.has(e)) throw TypeError('attempted to get private field on non-instance');
        return t.get(e);
      }
      function P(e, t, r) {
        if (!t.has(e)) throw TypeError('attempted to set private field on non-instance');
        return t.set(e, r), r;
      }
    },
    25476: (e, t, r) => {
      'use strict';
      r.d(t, { h: () => o, j: () => n });
      let i = (e) => JSON.stringify(e, (e, t) => ('bigint' == typeof t ? t.toString() + 'n' : t)),
        s = (e) =>
          JSON.parse(
            e.replace(
              /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
              '$1"$2n"$3'
            ),
            (e, t) =>
              'string' == typeof t && t.match(/^\d+n$/) ? BigInt(t.substring(0, t.length - 1)) : t
          );
      function n(e) {
        if ('string' != typeof e) throw Error(`Cannot safe json parse value of type ${typeof e}`);
        try {
          return s(e);
        } catch (t) {
          return e;
        }
      }
      function o(e) {
        return 'string' == typeof e ? e : i(e) || '';
      }
    },
    31873: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.delay = void 0),
        (t.delay = function (e) {
          return new Promise((t) => {
            setTimeout(() => {
              t(!0);
            }, e);
          });
        });
    },
    32214: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      let i = r(24584);
      i.__exportStar(r(31873), t), i.__exportStar(r(20561), t);
    },
    34322: (e, t, r) => {
      'use strict';
      r.d(t, { xW: () => b, sH: () => eZ, dI: () => eJ });
      var i = {};
      r.r(i), r.d(i, { identity: () => j });
      var s = {};
      r.r(s), r.d(s, { base2: () => L });
      var n = {};
      r.r(n), r.d(n, { base8: () => k });
      var o = {};
      r.r(o), r.d(o, { base10: () => U });
      var a = {};
      r.r(a), r.d(a, { base16: () => B, base16upper: () => q });
      var c = {};
      r.r(c),
        r.d(c, {
          base32: () => $,
          base32hex: () => H,
          base32hexpad: () => K,
          base32hexpadupper: () => G,
          base32hexupper: () => V,
          base32pad: () => z,
          base32padupper: () => F,
          base32upper: () => M,
          base32z: () => W,
        });
      var l = {};
      r.r(l), r.d(l, { base36: () => Y, base36upper: () => Z });
      var h = {};
      r.r(h), r.d(h, { base58btc: () => J, base58flickr: () => Q });
      var u = {};
      r.r(u),
        r.d(u, {
          base64: () => X,
          base64pad: () => ee,
          base64url: () => et,
          base64urlpad: () => er,
        });
      var d = {};
      r.r(d), r.d(d, { base256emoji: () => eo });
      var p = {};
      r.r(p), r.d(p, { sha256: () => ev, sha512: () => eE });
      var f = {};
      r.r(f), r.d(f, { identity: () => e_ });
      var g = {};
      r.r(g), r.d(g, { code: () => eD, decode: () => eP, encode: () => ex, name: () => eI });
      var y = {};
      function m(e = 0) {
        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe
          ? globalThis.Buffer.allocUnsafe(e)
          : new Uint8Array(e);
      }
      function b(e, t) {
        t || (t = e.reduce((e, t) => e + t.length, 0));
        let r = m(t),
          i = 0;
        for (let t of e) r.set(t, i), (i += t.length);
        return r;
      }
      r.r(y), r.d(y, { code: () => eC, decode: () => eN, encode: () => eT, name: () => eA });
      let w = function (e, t) {
        if (e.length >= 255) throw TypeError('Alphabet too long');
        for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
        for (var s = 0; s < e.length; s++) {
          var n = e.charAt(s),
            o = n.charCodeAt(0);
          if (255 !== r[o]) throw TypeError(n + ' is ambiguous');
          r[o] = s;
        }
        var a = e.length,
          c = e.charAt(0),
          l = Math.log(a) / Math.log(256),
          h = Math.log(256) / Math.log(a);
        function u(e) {
          if ('string' != typeof e) throw TypeError('Expected String');
          if (0 === e.length) return new Uint8Array();
          var t = 0;
          if (' ' !== e[0]) {
            for (var i = 0, s = 0; e[t] === c; ) i++, t++;
            for (var n = ((e.length - t) * l + 1) >>> 0, o = new Uint8Array(n); e[t]; ) {
              var h = r[e.charCodeAt(t)];
              if (255 === h) return;
              for (var u = 0, d = n - 1; (0 !== h || u < s) && -1 !== d; d--, u++)
                (h += (a * o[d]) >>> 0), (o[d] = h % 256 >>> 0), (h = (h / 256) >>> 0);
              if (0 !== h) throw Error('Non-zero carry');
              (s = u), t++;
            }
            if (' ' !== e[t]) {
              for (var p = n - s; p !== n && 0 === o[p]; ) p++;
              for (var f = new Uint8Array(i + (n - p)), g = i; p !== n; ) f[g++] = o[p++];
              return f;
            }
          }
        }
        return {
          encode: function (t) {
            if (
              (t instanceof Uint8Array ||
                (ArrayBuffer.isView(t)
                  ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                  : Array.isArray(t) && (t = Uint8Array.from(t))),
              !(t instanceof Uint8Array))
            )
              throw TypeError('Expected Uint8Array');
            if (0 === t.length) return '';
            for (var r = 0, i = 0, s = 0, n = t.length; s !== n && 0 === t[s]; ) s++, r++;
            for (var o = ((n - s) * h + 1) >>> 0, l = new Uint8Array(o); s !== n; ) {
              for (var u = t[s], d = 0, p = o - 1; (0 !== u || d < i) && -1 !== p; p--, d++)
                (u += (256 * l[p]) >>> 0), (l[p] = u % a >>> 0), (u = (u / a) >>> 0);
              if (0 !== u) throw Error('Non-zero carry');
              (i = d), s++;
            }
            for (var f = o - i; f !== o && 0 === l[f]; ) f++;
            for (var g = c.repeat(r); f < o; ++f) g += e.charAt(l[f]);
            return g;
          },
          decodeUnsafe: u,
          decode: function (e) {
            var r = u(e);
            if (r) return r;
            throw Error(`Non-${t} character`);
          },
        };
      };
      new Uint8Array(0);
      let v = (e, t) => {
          if (e === t) return !0;
          if (e.byteLength !== t.byteLength) return !1;
          for (let r = 0; r < e.byteLength; r++) if (e[r] !== t[r]) return !1;
          return !0;
        },
        E = (e) => {
          if (e instanceof Uint8Array && 'Uint8Array' === e.constructor.name) return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw Error('Unknown type, must be binary type');
        },
        _ = (e) => new TextEncoder().encode(e),
        I = (e) => new TextDecoder().decode(e);
      class D {
        constructor(e, t, r) {
          (this.name = e), (this.prefix = t), (this.baseEncode = r);
        }
        encode(e) {
          if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
          throw Error('Unknown type, must be binary type');
        }
      }
      class x {
        constructor(e, t, r) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw Error('Invalid prefix character');
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = r);
        }
        decode(e) {
          if ('string' == typeof e) {
            if (e.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`
              );
            return this.baseDecode(e.slice(this.prefix.length));
          }
          throw Error('Can only multibase decode strings');
        }
        or(e) {
          return S(this, e);
        }
      }
      class P {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return S(this, e);
        }
        decode(e) {
          let t = e[0],
            r = this.decoders[t];
          if (r) return r.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`
          );
        }
      }
      let S = (e, t) =>
        new P({ ...(e.decoders || { [e.prefix]: e }), ...(t.decoders || { [t.prefix]: t }) });
      class O {
        constructor(e, t, r, i) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = r),
            (this.baseDecode = i),
            (this.encoder = new D(e, t, r)),
            (this.decoder = new x(e, t, i));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      let A = ({ name: e, prefix: t, encode: r, decode: i }) => new O(e, t, r, i),
        C = ({ prefix: e, name: t, alphabet: r }) => {
          let { encode: i, decode: s } = w(r, t);
          return A({ prefix: e, name: t, encode: i, decode: (e) => E(s(e)) });
        },
        T = (e, t, r, i) => {
          let s = {};
          for (let e = 0; e < t.length; ++e) s[t[e]] = e;
          let n = e.length;
          for (; '=' === e[n - 1]; ) --n;
          let o = new Uint8Array(((n * r) / 8) | 0),
            a = 0,
            c = 0,
            l = 0;
          for (let t = 0; t < n; ++t) {
            let n = s[e[t]];
            if (void 0 === n) throw SyntaxError(`Non-${i} character`);
            (c = (c << r) | n), (a += r) >= 8 && ((a -= 8), (o[l++] = 255 & (c >> a)));
          }
          if (a >= r || 255 & (c << (8 - a))) throw SyntaxError('Unexpected end of data');
          return o;
        },
        N = (e, t, r) => {
          let i = '=' === t[t.length - 1],
            s = (1 << r) - 1,
            n = '',
            o = 0,
            a = 0;
          for (let i = 0; i < e.length; ++i)
            for (a = (a << 8) | e[i], o += 8; o > r; ) (o -= r), (n += t[s & (a >> o)]);
          if ((o && (n += t[s & (a << (r - o))]), i)) for (; (n.length * r) & 7; ) n += '=';
          return n;
        },
        R = ({ name: e, prefix: t, bitsPerChar: r, alphabet: i }) =>
          A({ prefix: t, name: e, encode: (e) => N(e, i, r), decode: (t) => T(t, i, r, e) }),
        j = A({ prefix: '\0', name: 'identity', encode: (e) => I(e), decode: (e) => _(e) }),
        L = R({ prefix: '0', name: 'base2', alphabet: '01', bitsPerChar: 1 }),
        k = R({ prefix: '7', name: 'base8', alphabet: '01234567', bitsPerChar: 3 }),
        U = C({ prefix: '9', name: 'base10', alphabet: '0123456789' }),
        B = R({ prefix: 'f', name: 'base16', alphabet: '0123456789abcdef', bitsPerChar: 4 }),
        q = R({ prefix: 'F', name: 'base16upper', alphabet: '0123456789ABCDEF', bitsPerChar: 4 }),
        $ = R({
          prefix: 'b',
          name: 'base32',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567',
          bitsPerChar: 5,
        }),
        M = R({
          prefix: 'B',
          name: 'base32upper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
          bitsPerChar: 5,
        }),
        z = R({
          prefix: 'c',
          name: 'base32pad',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567=',
          bitsPerChar: 5,
        }),
        F = R({
          prefix: 'C',
          name: 'base32padupper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=',
          bitsPerChar: 5,
        }),
        H = R({
          prefix: 'v',
          name: 'base32hex',
          alphabet: '0123456789abcdefghijklmnopqrstuv',
          bitsPerChar: 5,
        }),
        V = R({
          prefix: 'V',
          name: 'base32hexupper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV',
          bitsPerChar: 5,
        }),
        K = R({
          prefix: 't',
          name: 'base32hexpad',
          alphabet: '0123456789abcdefghijklmnopqrstuv=',
          bitsPerChar: 5,
        }),
        G = R({
          prefix: 'T',
          name: 'base32hexpadupper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV=',
          bitsPerChar: 5,
        }),
        W = R({
          prefix: 'h',
          name: 'base32z',
          alphabet: 'ybndrfg8ejkmcpqxot1uwisza345h769',
          bitsPerChar: 5,
        }),
        Y = C({ prefix: 'k', name: 'base36', alphabet: '0123456789abcdefghijklmnopqrstuvwxyz' }),
        Z = C({
          prefix: 'K',
          name: 'base36upper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        }),
        J = C({
          name: 'base58btc',
          prefix: 'z',
          alphabet: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
        }),
        Q = C({
          name: 'base58flickr',
          prefix: 'Z',
          alphabet: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ',
        }),
        X = R({
          prefix: 'm',
          name: 'base64',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          bitsPerChar: 6,
        }),
        ee = R({
          prefix: 'M',
          name: 'base64pad',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
          bitsPerChar: 6,
        }),
        et = R({
          prefix: 'u',
          name: 'base64url',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
          bitsPerChar: 6,
        }),
        er = R({
          prefix: 'U',
          name: 'base64urlpad',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=',
          bitsPerChar: 6,
        }),
        ei = Array.from(
          '\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42'
        ),
        es = ei.reduce((e, t, r) => ((e[r] = t), e), []),
        en = ei.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []),
        eo = A({
          prefix: '\uD83D\uDE80',
          name: 'base256emoji',
          encode: function (e) {
            return e.reduce((e, t) => (e += es[t]), '');
          },
          decode: function (e) {
            let t = [];
            for (let r of e) {
              let e = en[r.codePointAt(0)];
              if (void 0 === e) throw Error(`Non-base256emoji character: ${r}`);
              t.push(e);
            }
            return new Uint8Array(t);
          },
        });
      function ea(e, t, r) {
        t = t || [];
        for (var i = (r = r || 0); e >= 0x80000000; ) (t[r++] = (255 & e) | 128), (e /= 128);
        for (; -128 & e; ) (t[r++] = (255 & e) | 128), (e >>>= 7);
        return (t[r] = 0 | e), (ea.bytes = r - i + 1), t;
      }
      function ec(e, t) {
        var r,
          i = 0,
          t = t || 0,
          s = 0,
          n = t,
          o = e.length;
        do {
          if (n >= o) throw ((ec.bytes = 0), RangeError('Could not decode varint'));
          (r = e[n++]), (i += s < 28 ? (127 & r) << s : (127 & r) * Math.pow(2, s)), (s += 7);
        } while (r >= 128);
        return (ec.bytes = n - t), i;
      }
      let el = {
          encode: ea,
          decode: ec,
          encodingLength: function (e) {
            return e < 128
              ? 1
              : e < 16384
                ? 2
                : e < 2097152
                  ? 3
                  : e < 0x10000000
                    ? 4
                    : e < 0x800000000
                      ? 5
                      : e < 0x40000000000
                        ? 6
                        : e < 0x2000000000000
                          ? 7
                          : e < 0x100000000000000
                            ? 8
                            : e < 0x8000000000000000
                              ? 9
                              : 10;
          },
        },
        eh = (e, t = 0) => [el.decode(e, t), el.decode.bytes],
        eu = (e, t, r = 0) => (el.encode(e, t, r), t),
        ed = (e) => el.encodingLength(e),
        ep = (e, t) => {
          let r = t.byteLength,
            i = ed(e),
            s = i + ed(r),
            n = new Uint8Array(s + r);
          return eu(e, n, 0), eu(r, n, i), n.set(t, s), new ey(e, r, t, n);
        },
        ef = (e) => {
          let t = E(e),
            [r, i] = eh(t),
            [s, n] = eh(t.subarray(i)),
            o = t.subarray(i + n);
          if (o.byteLength !== s) throw Error('Incorrect length');
          return new ey(r, s, o, t);
        },
        eg = (e, t) => e === t || (e.code === t.code && e.size === t.size && v(e.bytes, t.bytes));
      class ey {
        constructor(e, t, r, i) {
          (this.code = e), (this.size = t), (this.digest = r), (this.bytes = i);
        }
      }
      let em = ({ name: e, code: t, encode: r }) => new eb(e, t, r);
      class eb {
        constructor(e, t, r) {
          (this.name = e), (this.code = t), (this.encode = r);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            let t = this.encode(e);
            return t instanceof Uint8Array ? ep(this.code, t) : t.then((e) => ep(this.code, e));
          }
          throw Error('Unknown type, must be binary type');
        }
      }
      let ew = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t)),
        ev = em({ name: 'sha2-256', code: 18, encode: ew('SHA-256') }),
        eE = em({ name: 'sha2-512', code: 19, encode: ew('SHA-512') }),
        e_ = { code: 0, name: 'identity', encode: E, digest: (e) => ep(0, E(e)) },
        eI = 'raw',
        eD = 85,
        ex = (e) => E(e),
        eP = (e) => E(e),
        eS = new TextEncoder(),
        eO = new TextDecoder(),
        eA = 'json',
        eC = 512,
        eT = (e) => eS.encode(JSON.stringify(e)),
        eN = (e) => JSON.parse(eO.decode(e));
      class eR {
        constructor(e, t, r, i) {
          (this.code = t),
            (this.version = e),
            (this.multihash = r),
            (this.bytes = i),
            (this.byteOffset = i.byteOffset),
            (this.byteLength = i.byteLength),
            (this.asCID = this),
            (this._baseCache = new Map()),
            Object.defineProperties(this, {
              byteOffset: ez,
              byteLength: ez,
              code: eM,
              version: eM,
              multihash: eM,
              bytes: eM,
              _baseCache: ez,
              asCID: ez,
            });
        }
        toV0() {
          if (0 === this.version) return this;
          {
            let { code: e, multihash: t } = this;
            if (e !== eU) throw Error('Cannot convert a non dag-pb CID to CIDv0');
            if (t.code !== eB) throw Error('Cannot convert non sha2-256 multihash CID to CIDv0');
            return eR.createV0(t);
          }
        }
        toV1() {
          switch (this.version) {
            case 0: {
              let { code: e, digest: t } = this.multihash,
                r = ep(e, t);
              return eR.createV1(this.code, r);
            }
            case 1:
              return this;
            default:
              throw Error(
                `Can not convert CID version ${this.version} to version 0. This is a bug please report`
              );
          }
        }
        equals(e) {
          return (
            e &&
            this.code === e.code &&
            this.version === e.version &&
            eg(this.multihash, e.multihash)
          );
        }
        toString(e) {
          let { bytes: t, version: r, _baseCache: i } = this;
          return 0 === r ? eL(t, i, e || J.encoder) : ek(t, i, e || $.encoder);
        }
        toJSON() {
          return { code: this.code, version: this.version, hash: this.multihash.bytes };
        }
        get [Symbol.toStringTag]() {
          return 'CID';
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
          return 'CID(' + this.toString() + ')';
        }
        static isCID(e) {
          return eF(/^0\.0/, eH), !!(e && (e[e$] || e.asCID === e));
        }
        get toBaseEncodedString() {
          throw Error('Deprecated, use .toString()');
        }
        get codec() {
          throw Error('"codec" property is deprecated, use integer "code" property instead');
        }
        get buffer() {
          throw Error('Deprecated .buffer property, use .bytes to get Uint8Array instead');
        }
        get multibaseName() {
          throw Error('"multibaseName" property is deprecated');
        }
        get prefix() {
          throw Error('"prefix" property is deprecated');
        }
        static asCID(e) {
          if (e instanceof eR) return e;
          if (null != e && e.asCID === e) {
            let { version: t, code: r, multihash: i, bytes: s } = e;
            return new eR(t, r, i, s || eq(t, r, i.bytes));
          }
          if (null == e || !0 !== e[e$]) return null;
          {
            let { version: t, multihash: r, code: i } = e,
              s = ef(r);
            return eR.create(t, i, s);
          }
        }
        static create(e, t, r) {
          if ('number' != typeof t) throw Error('String codecs are no longer supported');
          switch (e) {
            case 0:
              if (t === eU) return new eR(e, t, r, r.bytes);
              throw Error(`Version 0 CID must use dag-pb (code: ${eU}) block encoding`);
            case 1: {
              let i = eq(e, t, r.bytes);
              return new eR(e, t, r, i);
            }
            default:
              throw Error('Invalid version');
          }
        }
        static createV0(e) {
          return eR.create(0, eU, e);
        }
        static createV1(e, t) {
          return eR.create(1, e, t);
        }
        static decode(e) {
          let [t, r] = eR.decodeFirst(e);
          if (r.length) throw Error('Incorrect length');
          return t;
        }
        static decodeFirst(e) {
          let t = eR.inspectBytes(e),
            r = t.size - t.multihashSize,
            i = E(e.subarray(r, r + t.multihashSize));
          if (i.byteLength !== t.multihashSize) throw Error('Incorrect length');
          let s = i.subarray(t.multihashSize - t.digestSize),
            n = new ey(t.multihashCode, t.digestSize, s, i);
          return [0 === t.version ? eR.createV0(n) : eR.createV1(t.codec, n), e.subarray(t.size)];
        }
        static inspectBytes(e) {
          let t = 0,
            r = () => {
              let [r, i] = eh(e.subarray(t));
              return (t += i), r;
            },
            i = r(),
            s = eU;
          if ((18 === i ? ((i = 0), (t = 0)) : 1 === i && (s = r()), 0 !== i && 1 !== i))
            throw RangeError(`Invalid CID version ${i}`);
          let n = t,
            o = r(),
            a = r(),
            c = t + a;
          return {
            version: i,
            codec: s,
            multihashCode: o,
            digestSize: a,
            multihashSize: c - n,
            size: c,
          };
        }
        static parse(e, t) {
          let [r, i] = ej(e, t),
            s = eR.decode(i);
          return s._baseCache.set(r, e), s;
        }
      }
      let ej = (e, t) => {
          switch (e[0]) {
            case 'Q': {
              let r = t || J;
              return [J.prefix, r.decode(`${J.prefix}${e}`)];
            }
            case J.prefix: {
              let r = t || J;
              return [J.prefix, r.decode(e)];
            }
            case $.prefix: {
              let r = t || $;
              return [$.prefix, r.decode(e)];
            }
            default:
              if (null == t)
                throw Error(
                  'To parse non base32 or base58btc encoded CID multibase decoder must be provided'
                );
              return [e[0], t.decode(e)];
          }
        },
        eL = (e, t, r) => {
          let { prefix: i } = r;
          if (i !== J.prefix) throw Error(`Cannot string encode V0 in ${r.name} encoding`);
          let s = t.get(i);
          if (null != s) return s;
          {
            let s = r.encode(e).slice(1);
            return t.set(i, s), s;
          }
        },
        ek = (e, t, r) => {
          let { prefix: i } = r,
            s = t.get(i);
          if (null != s) return s;
          {
            let s = r.encode(e);
            return t.set(i, s), s;
          }
        },
        eU = 112,
        eB = 18,
        eq = (e, t, r) => {
          let i = ed(e),
            s = i + ed(t),
            n = new Uint8Array(s + r.byteLength);
          return eu(e, n, 0), eu(t, n, i), n.set(r, s), n;
        },
        e$ = Symbol.for('@ipld/js-cid/CID'),
        eM = { writable: !1, configurable: !1, enumerable: !0 },
        ez = { writable: !1, enumerable: !1, configurable: !1 },
        eF = (e, t) => {
          if (e.test('0.0.0-dev')) console.warn(t);
          else throw Error(t);
        },
        eH = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`,
        eV = { ...i, ...s, ...n, ...o, ...a, ...c, ...l, ...h, ...u, ...d };
      function eK(e, t, r, i) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: i },
        };
      }
      ({ ...p, ...f });
      let eG = eK(
          'utf8',
          'u',
          (e) => 'u' + new TextDecoder('utf8').decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        eW = eK(
          'ascii',
          'a',
          (e) => {
            let t = 'a';
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t;
          },
          (e) => {
            let t = m((e = e.substring(1)).length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          }
        ),
        eY = { utf8: eG, 'utf-8': eG, hex: eV.base16, latin1: eW, ascii: eW, binary: eW, ...eV };
      function eZ(e, t = 'utf8') {
        let r = eY[t];
        if (!r) throw Error(`Unsupported encoding "${t}"`);
        return ('utf8' === t || 'utf-8' === t) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? globalThis.Buffer.from(e, 'utf8')
          : r.decoder.decode(`${r.prefix}${e}`);
      }
      function eJ(e, t = 'utf8') {
        let r = eY[t];
        if (!r) throw Error(`Unsupported encoding "${t}"`);
        return ('utf8' === t || 'utf-8' === t) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString('utf8')
          : r.encoder.encode(e).substring(1);
      }
    },
    36672: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      let i = r(13996);
      i.__exportStar(r(44045), t), i.__exportStar(r(55239), t);
    },
    37752: (e, t) => {
      'use strict';
      function r(e) {
        let t;
        return 'undefined' != typeof window && void 0 !== window[e] && (t = window[e]), t;
      }
      function i(e) {
        let t = r(e);
        if (!t) throw Error(`${e} is not defined in Window`);
        return t;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.getLocalStorage =
          t.getLocalStorageOrThrow =
          t.getCrypto =
          t.getCryptoOrThrow =
          t.getLocation =
          t.getLocationOrThrow =
          t.getNavigator =
          t.getNavigatorOrThrow =
          t.getDocument =
          t.getDocumentOrThrow =
          t.getFromWindowOrThrow =
          t.getFromWindow =
            void 0),
        (t.getFromWindow = r),
        (t.getFromWindowOrThrow = i),
        (t.getDocumentOrThrow = function () {
          return i('document');
        }),
        (t.getDocument = function () {
          return r('document');
        }),
        (t.getNavigatorOrThrow = function () {
          return i('navigator');
        }),
        (t.getNavigator = function () {
          return r('navigator');
        }),
        (t.getLocationOrThrow = function () {
          return i('location');
        }),
        (t.getLocation = function () {
          return r('location');
        }),
        (t.getCryptoOrThrow = function () {
          return i('crypto');
        }),
        (t.getCrypto = function () {
          return r('crypto');
        }),
        (t.getLocalStorageOrThrow = function () {
          return i('localStorage');
        }),
        (t.getLocalStorage = function () {
          return r('localStorage');
        });
    },
    44045: (e, t, r) => {
      'use strict';
      function i() {
        return (
          (null === r.g || void 0 === r.g ? void 0 : r.g.crypto) ||
          (null === r.g || void 0 === r.g ? void 0 : r.g.msCrypto) ||
          {}
        );
      }
      function s() {
        let e = i();
        return e.subtle || e.webkitSubtle;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.isBrowserCryptoAvailable = t.getSubtleCrypto = t.getBrowerCrypto = void 0),
        (t.getBrowerCrypto = i),
        (t.getSubtleCrypto = s),
        (t.isBrowserCryptoAvailable = function () {
          return !!i() && !!s();
        });
    },
    45103: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.Watch = void 0);
      class r {
        constructor() {
          this.timestamps = new Map();
        }
        start(e) {
          if (this.timestamps.has(e)) throw Error(`Watch already started for label: ${e}`);
          this.timestamps.set(e, { started: Date.now() });
        }
        stop(e) {
          let t = this.get(e);
          if (void 0 !== t.elapsed) throw Error(`Watch already stopped for label: ${e}`);
          let r = Date.now() - t.started;
          this.timestamps.set(e, { started: t.started, elapsed: r });
        }
        get(e) {
          let t = this.timestamps.get(e);
          if (void 0 === t) throw Error(`No timestamp found for label: ${e}`);
          return t;
        }
        elapsed(e) {
          let t = this.get(e);
          return t.elapsed || Date.now() - t.started;
        }
      }
      (t.Watch = r), (t.default = r);
    },
    53516: (e) => {
      'use strict';
      e.exports = function () {
        throw Error(
          'ws does not work in the browser. Browser clients must use the native WebSocket object'
        );
      };
    },
    55239: (e, t, r) => {
      'use strict';
      var i = r(40459);
      function s() {
        return (
          'undefined' == typeof document &&
          'undefined' != typeof navigator &&
          'ReactNative' === navigator.product
        );
      }
      function n() {
        return void 0 !== i && void 0 !== i.versions && void 0 !== i.versions.node;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.isBrowser = t.isNode = t.isReactNative = void 0),
        (t.isReactNative = s),
        (t.isNode = n),
        (t.isBrowser = function () {
          return !s() && !n();
        });
    },
    58393: (e) => {
      'use strict';
      function t(e) {
        try {
          return JSON.stringify(e);
        } catch (e) {
          return '"[Circular]"';
        }
      }
      e.exports = function (e, r, i) {
        var s = (i && i.stringify) || t;
        if ('object' == typeof e && null !== e) {
          var n = r.length + 1;
          if (1 === n) return e;
          var o = Array(n);
          o[0] = s(e);
          for (var a = 1; a < n; a++) o[a] = s(r[a]);
          return o.join(' ');
        }
        if ('string' != typeof e) return e;
        var c = r.length;
        if (0 === c) return e;
        for (var l = '', h = 0, u = -1, d = (e && e.length) || 0, p = 0; p < d; ) {
          if (37 === e.charCodeAt(p) && p + 1 < d) {
            switch (((u = u > -1 ? u : 0), e.charCodeAt(p + 1))) {
              case 100:
              case 102:
                if (h >= c || null == r[h]) break;
                u < p && (l += e.slice(u, p)), (l += Number(r[h])), (u = p + 2), p++;
                break;
              case 105:
                if (h >= c || null == r[h]) break;
                u < p && (l += e.slice(u, p)), (l += Math.floor(Number(r[h]))), (u = p + 2), p++;
                break;
              case 79:
              case 111:
              case 106:
                if (h >= c || void 0 === r[h]) break;
                u < p && (l += e.slice(u, p));
                var f = typeof r[h];
                if ('string' === f) {
                  (l += "'" + r[h] + "'"), (u = p + 2), p++;
                  break;
                }
                if ('function' === f) {
                  (l += r[h].name || '<anonymous>'), (u = p + 2), p++;
                  break;
                }
                (l += s(r[h])), (u = p + 2), p++;
                break;
              case 115:
                if (h >= c) break;
                u < p && (l += e.slice(u, p)), (l += String(r[h])), (u = p + 2), p++;
                break;
              case 37:
                u < p && (l += e.slice(u, p)), (l += '%'), (u = p + 2), p++, h--;
            }
            ++h;
          }
          ++p;
        }
        return -1 === u ? e : (u < d && (l += e.slice(u)), l);
      };
    },
    58421: (e, t, r) => {
      'use strict';
      t.g = void 0;
      let i = r(37752);
      t.g = function () {
        let e, t, r;
        try {
          (e = i.getDocumentOrThrow()), (t = i.getLocationOrThrow());
        } catch (e) {
          return null;
        }
        function s(...t) {
          let r = e.getElementsByTagName('meta');
          for (let e = 0; e < r.length; e++) {
            let i = r[e],
              s = ['itemprop', 'property', 'name']
                .map((e) => i.getAttribute(e))
                .filter((e) => !!e && t.includes(e));
            if (s.length && s) {
              let e = i.getAttribute('content');
              if (e) return e;
            }
          }
          return '';
        }
        let n = ((r = s('name', 'og:site_name', 'og:title', 'twitter:title')) || (r = e.title), r),
          o = s('description', 'og:description', 'twitter:description', 'keywords'),
          a = t.origin;
        return {
          description: o,
          url: a,
          icons: (function () {
            let r = e.getElementsByTagName('link'),
              i = [];
            for (let e = 0; e < r.length; e++) {
              let s = r[e],
                n = s.getAttribute('rel');
              if (n && n.toLowerCase().indexOf('icon') > -1) {
                let e = s.getAttribute('href');
                if (e) {
                  if (
                    -1 === e.toLowerCase().indexOf('https:') &&
                    -1 === e.toLowerCase().indexOf('http:') &&
                    0 !== e.indexOf('//')
                  ) {
                    let r = t.protocol + '//' + t.host;
                    if (0 === e.indexOf('/')) r += e;
                    else {
                      let i = t.pathname.split('/');
                      i.pop(), (r += i.join('/') + '/' + e);
                    }
                    i.push(r);
                  } else if (0 === e.indexOf('//')) {
                    let r = t.protocol + e;
                    i.push(r);
                  } else i.push(e);
                }
              }
            }
            return i;
          })(),
          name: n,
        };
      };
    },
    58621: (e) => {
      'use strict';
      var t,
        r = 'object' == typeof Reflect ? Reflect : null,
        i =
          r && 'function' == typeof r.apply
            ? r.apply
            : function (e, t, r) {
                return Function.prototype.apply.call(e, t, r);
              };
      t =
        r && 'function' == typeof r.ownKeys
          ? r.ownKeys
          : Object.getOwnPropertySymbols
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
              }
            : function (e) {
                return Object.getOwnPropertyNames(e);
              };
      var s =
        Number.isNaN ||
        function (e) {
          return e != e;
        };
      function n() {
        n.init.call(this);
      }
      (e.exports = n),
        (e.exports.once = function (e, t) {
          return new Promise(function (r, i) {
            var s, n, o;
            function a(r) {
              e.removeListener(t, c), i(r);
            }
            function c() {
              'function' == typeof e.removeListener && e.removeListener('error', a),
                r([].slice.call(arguments));
            }
            g(e, t, c, { once: !0 }),
              'error' !== t &&
                ((s = e),
                (n = a),
                (o = { once: !0 }),
                'function' == typeof s.on && g(s, 'error', n, o));
          });
        }),
        (n.EventEmitter = n),
        (n.prototype._events = void 0),
        (n.prototype._eventsCount = 0),
        (n.prototype._maxListeners = void 0);
      var o = 10;
      function a(e) {
        if ('function' != typeof e)
          throw TypeError(
            'The "listener" argument must be of type Function. Received type ' + typeof e
          );
      }
      function c(e) {
        return void 0 === e._maxListeners ? n.defaultMaxListeners : e._maxListeners;
      }
      function l(e, t, r, i) {
        if (
          (a(r),
          void 0 === (n = e._events)
            ? ((n = e._events = Object.create(null)), (e._eventsCount = 0))
            : (void 0 !== n.newListener &&
                (e.emit('newListener', t, r.listener ? r.listener : r), (n = e._events)),
              (o = n[t])),
          void 0 === o)
        )
          (o = n[t] = r), ++e._eventsCount;
        else if (
          ('function' == typeof o ? (o = n[t] = i ? [r, o] : [o, r]) : i ? o.unshift(r) : o.push(r),
          (s = c(e)) > 0 && o.length > s && !o.warned)
        ) {
          o.warned = !0;
          var s,
            n,
            o,
            l = Error(
              'Possible EventEmitter memory leak detected. ' +
                o.length +
                ' ' +
                String(t) +
                ' listeners added. Use emitter.setMaxListeners() to increase limit'
            );
          (l.name = 'MaxListenersExceededWarning'),
            (l.emitter = e),
            (l.type = t),
            (l.count = o.length),
            console && console.warn && console.warn(l);
        }
        return e;
      }
      function h() {
        if (!this.fired)
          return (this.target.removeListener(this.type, this.wrapFn),
          (this.fired = !0),
          0 == arguments.length)
            ? this.listener.call(this.target)
            : this.listener.apply(this.target, arguments);
      }
      function u(e, t, r) {
        var i = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r },
          s = h.bind(i);
        return (s.listener = r), (i.wrapFn = s), s;
      }
      function d(e, t, r) {
        var i = e._events;
        if (void 0 === i) return [];
        var s = i[t];
        return void 0 === s
          ? []
          : 'function' == typeof s
            ? r
              ? [s.listener || s]
              : [s]
            : r
              ? (function (e) {
                  for (var t = Array(e.length), r = 0; r < t.length; ++r)
                    t[r] = e[r].listener || e[r];
                  return t;
                })(s)
              : f(s, s.length);
      }
      function p(e) {
        var t = this._events;
        if (void 0 !== t) {
          var r = t[e];
          if ('function' == typeof r) return 1;
          if (void 0 !== r) return r.length;
        }
        return 0;
      }
      function f(e, t) {
        for (var r = Array(t), i = 0; i < t; ++i) r[i] = e[i];
        return r;
      }
      function g(e, t, r, i) {
        if ('function' == typeof e.on) i.once ? e.once(t, r) : e.on(t, r);
        else if ('function' == typeof e.addEventListener)
          e.addEventListener(t, function s(n) {
            i.once && e.removeEventListener(t, s), r(n);
          });
        else
          throw TypeError(
            'The "emitter" argument must be of type EventEmitter. Received type ' + typeof e
          );
      }
      Object.defineProperty(n, 'defaultMaxListeners', {
        enumerable: !0,
        get: function () {
          return o;
        },
        set: function (e) {
          if ('number' != typeof e || e < 0 || s(e))
            throw RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                e +
                '.'
            );
          o = e;
        },
      }),
        (n.init = function () {
          (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) &&
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (n.prototype.setMaxListeners = function (e) {
          if ('number' != typeof e || e < 0 || s(e))
            throw RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                e +
                '.'
            );
          return (this._maxListeners = e), this;
        }),
        (n.prototype.getMaxListeners = function () {
          return c(this);
        }),
        (n.prototype.emit = function (e) {
          for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
          var s = 'error' === e,
            n = this._events;
          if (void 0 !== n) s = s && void 0 === n.error;
          else if (!s) return !1;
          if (s) {
            if ((t.length > 0 && (o = t[0]), o instanceof Error)) throw o;
            var o,
              a = Error('Unhandled error.' + (o ? ' (' + o.message + ')' : ''));
            throw ((a.context = o), a);
          }
          var c = n[e];
          if (void 0 === c) return !1;
          if ('function' == typeof c) i(c, this, t);
          else for (var l = c.length, h = f(c, l), r = 0; r < l; ++r) i(h[r], this, t);
          return !0;
        }),
        (n.prototype.addListener = function (e, t) {
          return l(this, e, t, !1);
        }),
        (n.prototype.on = n.prototype.addListener),
        (n.prototype.prependListener = function (e, t) {
          return l(this, e, t, !0);
        }),
        (n.prototype.once = function (e, t) {
          return a(t), this.on(e, u(this, e, t)), this;
        }),
        (n.prototype.prependOnceListener = function (e, t) {
          return a(t), this.prependListener(e, u(this, e, t)), this;
        }),
        (n.prototype.removeListener = function (e, t) {
          var r, i, s, n, o;
          if ((a(t), void 0 === (i = this._events) || void 0 === (r = i[e]))) return this;
          if (r === t || r.listener === t)
            0 == --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete i[e], i.removeListener && this.emit('removeListener', e, r.listener || t));
          else if ('function' != typeof r) {
            for (s = -1, n = r.length - 1; n >= 0; n--)
              if (r[n] === t || r[n].listener === t) {
                (o = r[n].listener), (s = n);
                break;
              }
            if (s < 0) return this;
            0 === s
              ? r.shift()
              : (function (e, t) {
                  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                  e.pop();
                })(r, s),
              1 === r.length && (i[e] = r[0]),
              void 0 !== i.removeListener && this.emit('removeListener', e, o || t);
          }
          return this;
        }),
        (n.prototype.off = n.prototype.removeListener),
        (n.prototype.removeAllListeners = function (e) {
          var t, r, i;
          if (void 0 === (r = this._events)) return this;
          if (void 0 === r.removeListener)
            return (
              0 == arguments.length
                ? ((this._events = Object.create(null)), (this._eventsCount = 0))
                : void 0 !== r[e] &&
                  (0 == --this._eventsCount ? (this._events = Object.create(null)) : delete r[e]),
              this
            );
          if (0 == arguments.length) {
            var s,
              n = Object.keys(r);
            for (i = 0; i < n.length; ++i)
              'removeListener' !== (s = n[i]) && this.removeAllListeners(s);
            return (
              this.removeAllListeners('removeListener'),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ('function' == typeof (t = r[e])) this.removeListener(e, t);
          else if (void 0 !== t) for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
          return this;
        }),
        (n.prototype.listeners = function (e) {
          return d(this, e, !0);
        }),
        (n.prototype.rawListeners = function (e) {
          return d(this, e, !1);
        }),
        (n.listenerCount = function (e, t) {
          return 'function' == typeof e.listenerCount ? e.listenerCount(t) : p.call(e, t);
        }),
        (n.prototype.listenerCount = p),
        (n.prototype.eventNames = function () {
          return this._eventsCount > 0 ? t(this._events) : [];
        });
    },
    59213: (e, t, r) => {
      'use strict';
      let i = r(58393);
      e.exports = n;
      let s =
        (function () {
          function e(e) {
            return void 0 !== e && e;
          }
          try {
            if ('undefined' != typeof globalThis) return globalThis;
            return (
              Object.defineProperty(Object.prototype, 'globalThis', {
                get: function () {
                  return delete Object.prototype.globalThis, (this.globalThis = this);
                },
                configurable: !0,
              }),
              globalThis
            );
          } catch (t) {
            return e(self) || e(window) || e(this) || {};
          }
        })().console || {};
      function n(e) {
        var t, r;
        (e = e || {}).browser = e.browser || {};
        let i = e.browser.transmit;
        if (i && 'function' != typeof i.send)
          throw Error('pino: transmit option must have a send function');
        let h = e.browser.write || s;
        e.browser.write && (e.browser.asObject = !0);
        let u = e.serializers || {},
          g = Array.isArray((t = e.browser.serialize))
            ? t.filter(function (e) {
                return '!stdSerializers.err' !== e;
              })
            : !0 === t && Object.keys(u),
          y = e.browser.serialize;
        Array.isArray(e.browser.serialize) &&
          e.browser.serialize.indexOf('!stdSerializers.err') > -1 &&
          (y = !1),
          'function' == typeof h && (h.error = h.fatal = h.warn = h.info = h.debug = h.trace = h),
          !1 === e.enabled && (e.level = 'silent');
        let m = e.level || 'info',
          b = Object.create(h);
        b.log || (b.log = d),
          Object.defineProperty(b, 'levelVal', {
            get: function () {
              return 'silent' === this.level ? 1 / 0 : this.levels.values[this.level];
            },
          }),
          Object.defineProperty(b, 'level', {
            get: function () {
              return this._level;
            },
            set: function (e) {
              if ('silent' !== e && !this.levels.values[e]) throw Error('unknown level ' + e);
              (this._level = e),
                o(w, b, 'error', 'log'),
                o(w, b, 'fatal', 'error'),
                o(w, b, 'warn', 'error'),
                o(w, b, 'info', 'log'),
                o(w, b, 'debug', 'log'),
                o(w, b, 'trace', 'log');
            },
          });
        let w = {
          transmit: i,
          serialize: g,
          asObject: e.browser.asObject,
          levels: ['error', 'fatal', 'warn', 'info', 'debug', 'trace'],
          timestamp:
            'function' == typeof (r = e).timestamp ? r.timestamp : !1 === r.timestamp ? p : f,
        };
        return (
          (b.levels = n.levels),
          (b.level = m),
          (b.setMaxListeners =
            b.getMaxListeners =
            b.emit =
            b.addListener =
            b.on =
            b.prependListener =
            b.once =
            b.prependOnceListener =
            b.removeListener =
            b.removeAllListeners =
            b.listeners =
            b.listenerCount =
            b.eventNames =
            b.write =
            b.flush =
              d),
          (b.serializers = u),
          (b._serialize = g),
          (b._stdErrSerialize = y),
          (b.child = function (t, r) {
            if (!t) throw Error('missing bindings for child Pino');
            (r = r || {}), g && t.serializers && (r.serializers = t.serializers);
            let s = r.serializers;
            if (g && s) {
              var n = Object.assign({}, u, s),
                o = !0 === e.browser.serialize ? Object.keys(n) : g;
              delete t.serializers, a([t], o, n, this._stdErrSerialize);
            }
            function h(e) {
              (this._childLevel = (0 | e._childLevel) + 1),
                (this.error = c(e, t, 'error')),
                (this.fatal = c(e, t, 'fatal')),
                (this.warn = c(e, t, 'warn')),
                (this.info = c(e, t, 'info')),
                (this.debug = c(e, t, 'debug')),
                (this.trace = c(e, t, 'trace')),
                n && ((this.serializers = n), (this._serialize = o)),
                i && (this._logEvent = l([].concat(e._logEvent.bindings, t)));
            }
            return (h.prototype = this), new h(this);
          }),
          i && (b._logEvent = l()),
          b
        );
      }
      function o(e, t, r, o) {
        let c = Object.getPrototypeOf(t);
        (t[r] = t.levelVal > t.levels.values[r] ? d : c[r] ? c[r] : s[r] || s[o] || d),
          (function (e, t, r) {
            if (e.transmit || t[r] !== d) {
              var o;
              t[r] =
                ((o = t[r]),
                function () {
                  let c = e.timestamp(),
                    h = Array(arguments.length),
                    u = Object.getPrototypeOf && Object.getPrototypeOf(this) === s ? s : this;
                  for (var d = 0; d < h.length; d++) h[d] = arguments[d];
                  if (
                    (e.serialize &&
                      !e.asObject &&
                      a(h, this._serialize, this.serializers, this._stdErrSerialize),
                    e.asObject
                      ? o.call(
                          u,
                          (function (e, t, r, s) {
                            e._serialize && a(r, e._serialize, e.serializers, e._stdErrSerialize);
                            let o = r.slice(),
                              c = o[0],
                              l = {};
                            s && (l.time = s), (l.level = n.levels.values[t]);
                            let h = (0 | e._childLevel) + 1;
                            if ((h < 1 && (h = 1), null !== c && 'object' == typeof c)) {
                              for (; h-- && 'object' == typeof o[0]; ) Object.assign(l, o.shift());
                              c = o.length ? i(o.shift(), o) : void 0;
                            } else 'string' == typeof c && (c = i(o.shift(), o));
                            return void 0 !== c && (l.msg = c), l;
                          })(this, r, h, c)
                        )
                      : o.apply(u, h),
                    e.transmit)
                  ) {
                    let i = e.transmit.level || t.level,
                      s = n.levels.values[i],
                      o = n.levels.values[r];
                    if (o < s) return;
                    (function (e, t, r) {
                      let i = t.send,
                        s = t.ts,
                        n = t.methodLevel,
                        o = t.methodValue,
                        c = t.val,
                        h = e._logEvent.bindings;
                      a(
                        r,
                        e._serialize || Object.keys(e.serializers),
                        e.serializers,
                        void 0 === e._stdErrSerialize || e._stdErrSerialize
                      ),
                        (e._logEvent.ts = s),
                        (e._logEvent.messages = r.filter(function (e) {
                          return -1 === h.indexOf(e);
                        })),
                        (e._logEvent.level.label = n),
                        (e._logEvent.level.value = o),
                        i(n, e._logEvent, c),
                        (e._logEvent = l(h));
                    })(
                      this,
                      {
                        ts: c,
                        methodLevel: r,
                        methodValue: o,
                        transmitLevel: i,
                        transmitValue: n.levels.values[e.transmit.level || t.level],
                        send: e.transmit.send,
                        val: t.levelVal,
                      },
                      h
                    );
                  }
                });
            }
          })(e, t, r);
      }
      function a(e, t, r, i) {
        for (let s in e)
          if (i && e[s] instanceof Error) e[s] = n.stdSerializers.err(e[s]);
          else if ('object' == typeof e[s] && !Array.isArray(e[s]))
            for (let i in e[s]) t && t.indexOf(i) > -1 && i in r && (e[s][i] = r[i](e[s][i]));
      }
      function c(e, t, r) {
        return function () {
          let i = Array(1 + arguments.length);
          i[0] = t;
          for (var s = 1; s < i.length; s++) i[s] = arguments[s - 1];
          return e[r].apply(this, i);
        };
      }
      function l(e) {
        return { ts: 0, messages: [], bindings: e || [], level: { label: '', value: 0 } };
      }
      function h() {
        return {};
      }
      function u(e) {
        return e;
      }
      function d() {}
      function p() {
        return !1;
      }
      function f() {
        return Date.now();
      }
      (n.levels = {
        values: { fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10 },
        labels: { 10: 'trace', 20: 'debug', 30: 'info', 40: 'warn', 50: 'error', 60: 'fatal' },
      }),
        (n.stdSerializers = {
          mapHttpRequest: h,
          mapHttpResponse: h,
          wrapRequestSerializer: u,
          wrapResponseSerializer: u,
          wrapErrorSerializer: u,
          req: h,
          res: h,
          err: function (e) {
            let t = { type: e.constructor.name, msg: e.message, stack: e.stack };
            for (let r in e) void 0 === t[r] && (t[r] = e[r]);
            return t;
          },
        }),
        (n.stdTimeFunctions = Object.assign(
          {},
          {
            nullTime: p,
            epochTime: f,
            unixTime: function () {
              return Math.round(Date.now() / 1e3);
            },
            isoTime: function () {
              return new Date(Date.now()).toISOString();
            },
          }
        ));
    },
    59226: (e, t, r) => {
      'use strict';
      let i;
      r.d(t, { l: () => ov, A: () => ow });
      var s = r(58621),
        n = r.n(s),
        o = r(95572);
      class a {}
      class c extends a {
        constructor(e) {
          super();
        }
      }
      let l = o.FIVE_SECONDS,
        h = { pulse: 'heartbeat_pulse' };
      class u extends c {
        constructor(e) {
          super(e),
            (this.events = new s.EventEmitter()),
            (this.interval = l),
            (this.interval = e?.interval || l);
        }
        static async init(e) {
          let t = new u(e);
          return await t.init(), t;
        }
        async init() {
          await this.initialize();
        }
        stop() {
          clearInterval(this.intervalRef);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async initialize() {
          this.intervalRef = setInterval(() => this.pulse(), (0, o.toMiliseconds)(this.interval));
        }
        pulse() {
          this.events.emit(h.pulse);
        }
      }
      let d =
          /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
        p =
          /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
        f = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
      function g(e, t) {
        if (
          '__proto__' === e ||
          ('constructor' === e && t && 'object' == typeof t && 'prototype' in t)
        ) {
          var r;
          (r = e), console.warn(`[destr] Dropping "${r}" key to prevent prototype pollution.`);
          return;
        }
        return t;
      }
      function y(e, t = {}) {
        if ('string' != typeof e) return e;
        let r = e.trim();
        if ('"' === e[0] && e.endsWith('"') && !e.includes('\\')) return r.slice(1, -1);
        if (r.length <= 9) {
          let e = r.toLowerCase();
          if ('true' === e) return !0;
          if ('false' === e) return !1;
          if ('undefined' === e) return;
          if ('null' === e) return null;
          if ('nan' === e) return Number.NaN;
          if ('infinity' === e) return Number.POSITIVE_INFINITY;
          if ('-infinity' === e) return Number.NEGATIVE_INFINITY;
        }
        if (!f.test(e)) {
          if (t.strict) throw SyntaxError('[destr] Invalid JSON');
          return e;
        }
        try {
          if (d.test(e) || p.test(e)) {
            if (t.strict) throw Error('[destr] Possible prototype pollution');
            return JSON.parse(e, g);
          }
          return JSON.parse(e);
        } catch (r) {
          if (t.strict) throw r;
          return e;
        }
      }
      var m = r(50887).Buffer;
      function b(e, ...t) {
        try {
          var r;
          return (r = e(...t)) && 'function' == typeof r.then ? r : Promise.resolve(r);
        } catch (e) {
          return Promise.reject(e);
        }
      }
      function w(e) {
        if (
          (function (e) {
            let t = typeof e;
            return null === e || ('object' !== t && 'function' !== t);
          })(e)
        )
          return String(e);
        if (
          (function (e) {
            let t = Object.getPrototypeOf(e);
            return !t || t.isPrototypeOf(Object);
          })(e) ||
          Array.isArray(e)
        )
          return JSON.stringify(e);
        if ('function' == typeof e.toJSON) return w(e.toJSON());
        throw Error('[unstorage] Cannot stringify value!');
      }
      let v = 'base64:';
      function E(e) {
        return (
          (e &&
            e.split('?')[0]?.replace(/[/\\]/g, ':').replace(/:+/g, ':').replace(/^:|:$/g, '')) ||
          ''
        );
      }
      function _(e) {
        return (e = E(e)) ? e + ':' : '';
      }
      let I = () => {
        let e = new Map();
        return {
          name: 'memory',
          getInstance: () => e,
          hasItem: (t) => e.has(t),
          getItem: (t) => e.get(t) ?? null,
          getItemRaw: (t) => e.get(t) ?? null,
          setItem(t, r) {
            e.set(t, r);
          },
          setItemRaw(t, r) {
            e.set(t, r);
          },
          removeItem(t) {
            e.delete(t);
          },
          getKeys: () => [...e.keys()],
          clear() {
            e.clear();
          },
          dispose() {
            e.clear();
          },
        };
      };
      function D(e, t, r) {
        return e.watch ? e.watch((e, i) => t(e, r + i)) : () => {};
      }
      async function x(e) {
        'function' == typeof e.dispose && (await b(e.dispose));
      }
      function P(e) {
        return new Promise((t, r) => {
          (e.oncomplete = e.onsuccess = () => t(e.result)),
            (e.onabort = e.onerror = () => r(e.error));
        });
      }
      function S(e, t) {
        let r = indexedDB.open(e);
        r.onupgradeneeded = () => r.result.createObjectStore(t);
        let i = P(r);
        return (e, r) => i.then((i) => r(i.transaction(t, e).objectStore(t)));
      }
      function O() {
        return i || (i = S('keyval-store', 'keyval')), i;
      }
      function A(e, t = O()) {
        return t('readonly', (t) => P(t.get(e)));
      }
      var C = r(25476),
        T = (e = {}) => {
          let t;
          let r = e.base && e.base.length > 0 ? `${e.base}:` : '',
            i = (e) => r + e;
          return (
            e.dbName && e.storeName && (t = S(e.dbName, e.storeName)),
            {
              name: 'idb-keyval',
              options: e,
              hasItem: async (e) => !(typeof (await A(i(e), t)) > 'u'),
              getItem: async (e) => (await A(i(e), t)) ?? null,
              setItem: (e, r) =>
                (function (e, t, r = O()) {
                  return r('readwrite', (r) => (r.put(t, e), P(r.transaction)));
                })(i(e), r, t),
              removeItem: (e) =>
                (function (e, t = O()) {
                  return t('readwrite', (t) => (t.delete(e), P(t.transaction)));
                })(i(e), t),
              getKeys: () =>
                (function (e = O()) {
                  return e('readonly', (e) => {
                    var t, r;
                    if (e.getAllKeys) return P(e.getAllKeys());
                    let i = [];
                    return ((t = e),
                    (r = (e) => i.push(e.key)),
                    (t.openCursor().onsuccess = function () {
                      this.result && (r(this.result), this.result.continue());
                    }),
                    P(t.transaction)).then(() => i);
                  });
                })(t),
              clear: () =>
                (function (e = O()) {
                  return e('readwrite', (e) => (e.clear(), P(e.transaction)));
                })(t),
            }
          );
        };
      class N {
        constructor() {
          this.indexedDb = (function (e = {}) {
            let t = {
                mounts: { '': e.driver || I() },
                mountpoints: [''],
                watching: !1,
                watchListeners: [],
                unwatch: {},
              },
              r = (e) => {
                for (let r of t.mountpoints)
                  if (e.startsWith(r))
                    return { base: r, relativeKey: e.slice(r.length), driver: t.mounts[r] };
                return { base: '', relativeKey: e, driver: t.mounts[''] };
              },
              i = (e, r) =>
                t.mountpoints
                  .filter((t) => t.startsWith(e) || (r && e.startsWith(t)))
                  .map((r) => ({
                    relativeBase: e.length > r.length ? e.slice(r.length) : void 0,
                    mountpoint: r,
                    driver: t.mounts[r],
                  })),
              s = (e, r) => {
                if (t.watching) for (let i of ((r = E(r)), t.watchListeners)) i(e, r);
              },
              n = async () => {
                if (!t.watching)
                  for (let e in ((t.watching = !0), t.mounts))
                    t.unwatch[e] = await D(t.mounts[e], s, e);
              },
              o = async () => {
                if (t.watching) {
                  for (let e in t.unwatch) await t.unwatch[e]();
                  (t.unwatch = {}), (t.watching = !1);
                }
              },
              a = (e, t, i) => {
                let s = new Map(),
                  n = (e) => {
                    let t = s.get(e.base);
                    return (
                      t || ((t = { driver: e.driver, base: e.base, items: [] }), s.set(e.base, t)),
                      t
                    );
                  };
                for (let i of e) {
                  let e = 'string' == typeof i,
                    s = E(e ? i : i.key),
                    o = e ? void 0 : i.value,
                    a = e || !i.options ? t : { ...t, ...i.options },
                    c = r(s);
                  n(c).items.push({ key: s, value: o, relativeKey: c.relativeKey, options: a });
                }
                return Promise.all([...s.values()].map((e) => i(e))).then((e) => e.flat());
              },
              c = {
                hasItem(e, t = {}) {
                  let { relativeKey: i, driver: s } = r((e = E(e)));
                  return b(s.hasItem, i, t);
                },
                getItem(e, t = {}) {
                  let { relativeKey: i, driver: s } = r((e = E(e)));
                  return b(s.getItem, i, t).then((e) => y(e));
                },
                getItems: (e, t = {}) =>
                  a(e, t, (e) =>
                    e.driver.getItems
                      ? b(
                          e.driver.getItems,
                          e.items.map((e) => ({ key: e.relativeKey, options: e.options })),
                          t
                        ).then((t) =>
                          t.map((t) => ({
                            key: (function (...e) {
                              return E(e.join(':'));
                            })(e.base, t.key),
                            value: y(t.value),
                          }))
                        )
                      : Promise.all(
                          e.items.map((t) =>
                            b(e.driver.getItem, t.relativeKey, t.options).then((e) => ({
                              key: t.key,
                              value: y(e),
                            }))
                          )
                        )
                  ),
                getItemRaw(e, t = {}) {
                  let { relativeKey: i, driver: s } = r((e = E(e)));
                  return s.getItemRaw
                    ? b(s.getItemRaw, i, t)
                    : b(s.getItem, i, t).then((e) => {
                        var t;
                        return 'string' == typeof e && e.startsWith(v)
                          ? ((t = e.slice(v.length)),
                            globalThis.Buffer
                              ? m.from(t, 'base64')
                              : Uint8Array.from(globalThis.atob(t), (e) => e.codePointAt(0)))
                          : e;
                      });
                },
                async setItem(e, t, i = {}) {
                  if (void 0 === t) return c.removeItem(e);
                  let { relativeKey: n, driver: o } = r((e = E(e)));
                  o.setItem && (await b(o.setItem, n, w(t), i), o.watch || s('update', e));
                },
                async setItems(e, t) {
                  await a(e, t, async (e) => {
                    if (e.driver.setItems)
                      return b(
                        e.driver.setItems,
                        e.items.map((e) => ({
                          key: e.relativeKey,
                          value: w(e.value),
                          options: e.options,
                        })),
                        t
                      );
                    e.driver.setItem &&
                      (await Promise.all(
                        e.items.map((t) =>
                          b(e.driver.setItem, t.relativeKey, w(t.value), t.options)
                        )
                      ));
                  });
                },
                async setItemRaw(e, t, i = {}) {
                  if (void 0 === t) return c.removeItem(e, i);
                  let { relativeKey: n, driver: o } = r((e = E(e)));
                  if (o.setItemRaw) await b(o.setItemRaw, n, t, i);
                  else {
                    var a;
                    if (!o.setItem) return;
                    await b(
                      o.setItem,
                      n,
                      'string' == typeof t
                        ? t
                        : v +
                            ((a = t),
                            globalThis.Buffer
                              ? m.from(a).toString('base64')
                              : globalThis.btoa(String.fromCodePoint(...a))),
                      i
                    );
                  }
                  o.watch || s('update', e);
                },
                async removeItem(e, t = {}) {
                  'boolean' == typeof t && (t = { removeMeta: t });
                  let { relativeKey: i, driver: n } = r((e = E(e)));
                  n.removeItem &&
                    (await b(n.removeItem, i, t),
                    (t.removeMeta || t.removeMata) && (await b(n.removeItem, i + '$', t)),
                    n.watch || s('remove', e));
                },
                async getMeta(e, t = {}) {
                  'boolean' == typeof t && (t = { nativeOnly: t });
                  let { relativeKey: i, driver: s } = r((e = E(e))),
                    n = Object.create(null);
                  if ((s.getMeta && Object.assign(n, await b(s.getMeta, i, t)), !t.nativeOnly)) {
                    let e = await b(s.getItem, i + '$', t).then((e) => y(e));
                    e &&
                      'object' == typeof e &&
                      ('string' == typeof e.atime && (e.atime = new Date(e.atime)),
                      'string' == typeof e.mtime && (e.mtime = new Date(e.mtime)),
                      Object.assign(n, e));
                  }
                  return n;
                },
                setMeta(e, t, r = {}) {
                  return this.setItem(e + '$', t, r);
                },
                removeMeta(e, t = {}) {
                  return this.removeItem(e + '$', t);
                },
                async getKeys(e, t = {}) {
                  let r = i((e = _(e)), !0),
                    s = [],
                    n = [],
                    o = !0;
                  for (let e of r) {
                    for (let r of (e.driver.flags?.maxDepth || (o = !1),
                    await b(e.driver.getKeys, e.relativeBase, t))) {
                      let t = e.mountpoint + E(r);
                      s.some((e) => t.startsWith(e)) || n.push(t);
                    }
                    s = [e.mountpoint, ...s.filter((t) => !t.startsWith(e.mountpoint))];
                  }
                  let a = void 0 !== t.maxDepth && !o;
                  return n.filter((r) => {
                    var i;
                    return (
                      (!a ||
                        (function (e, t) {
                          if (void 0 === t) return !0;
                          let r = 0,
                            i = e.indexOf(':');
                          for (; i > -1; ) r++, (i = e.indexOf(':', i + 1));
                          return r <= t;
                        })(r, t.maxDepth)) &&
                      ((i = e)
                        ? r.startsWith(i) && '$' !== r[r.length - 1]
                        : '$' !== r[r.length - 1])
                    );
                  });
                },
                async clear(e, t = {}) {
                  (e = _(e)),
                    await Promise.all(
                      i(e, !1).map(async (e) =>
                        e.driver.clear
                          ? b(e.driver.clear, e.relativeBase, t)
                          : e.driver.removeItem
                            ? Promise.all(
                                (await e.driver.getKeys(e.relativeBase || '', t)).map((r) =>
                                  e.driver.removeItem(r, t)
                                )
                              )
                            : void 0
                      )
                    );
                },
                async dispose() {
                  await Promise.all(Object.values(t.mounts).map((e) => x(e)));
                },
                watch: async (e) => (
                  await n(),
                  t.watchListeners.push(e),
                  async () => {
                    (t.watchListeners = t.watchListeners.filter((t) => t !== e)),
                      0 === t.watchListeners.length && (await o());
                  }
                ),
                async unwatch() {
                  (t.watchListeners = []), await o();
                },
                mount(e, r) {
                  if ((e = _(e)) && t.mounts[e]) throw Error(`already mounted at ${e}`);
                  return (
                    e && (t.mountpoints.push(e), t.mountpoints.sort((e, t) => t.length - e.length)),
                    (t.mounts[e] = r),
                    t.watching &&
                      Promise.resolve(D(r, s, e))
                        .then((r) => {
                          t.unwatch[e] = r;
                        })
                        .catch(console.error),
                    c
                  );
                },
                async unmount(e, r = !0) {
                  (e = _(e)) &&
                    t.mounts[e] &&
                    (t.watching && e in t.unwatch && (t.unwatch[e]?.(), delete t.unwatch[e]),
                    r && (await x(t.mounts[e])),
                    (t.mountpoints = t.mountpoints.filter((t) => t !== e)),
                    delete t.mounts[e]);
                },
                getMount(e = '') {
                  let t = r((e = E(e) + ':'));
                  return { driver: t.driver, base: t.base };
                },
                getMounts: (e = '', t = {}) =>
                  i((e = E(e)), t.parents).map((e) => ({ driver: e.driver, base: e.mountpoint })),
                keys: (e, t = {}) => c.getKeys(e, t),
                get: (e, t = {}) => c.getItem(e, t),
                set: (e, t, r = {}) => c.setItem(e, t, r),
                has: (e, t = {}) => c.hasItem(e, t),
                del: (e, t = {}) => c.removeItem(e, t),
                remove: (e, t = {}) => c.removeItem(e, t),
              };
            return c;
          })({
            driver: T({ dbName: 'WALLET_CONNECT_V2_INDEXED_DB', storeName: 'keyvaluestorage' }),
          });
        }
        async getKeys() {
          return this.indexedDb.getKeys();
        }
        async getEntries() {
          return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((e) => [
            e.key,
            e.value,
          ]);
        }
        async getItem(e) {
          let t = await this.indexedDb.getItem(e);
          if (null !== t) return t;
        }
        async setItem(e, t) {
          await this.indexedDb.setItem(e, (0, C.h)(t));
        }
        async removeItem(e) {
          await this.indexedDb.removeItem(e);
        }
      }
      var R =
          'u' > typeof globalThis
            ? globalThis
            : 'u' > typeof window
              ? window
              : 'u' > typeof r.g
                ? r.g
                : 'u' > typeof self
                  ? self
                  : {},
        j = { exports: {} };
      function L(e) {
        var t;
        return [e[0], (0, C.j)(null != (t = e[1]) ? t : '')];
      }
      !(function () {
        function e() {}
        (e.prototype.getItem = function (e) {
          return this.hasOwnProperty(e) ? String(this[e]) : null;
        }),
          (e.prototype.setItem = function (e, t) {
            this[e] = String(t);
          }),
          (e.prototype.removeItem = function (e) {
            delete this[e];
          }),
          (e.prototype.clear = function () {
            let e = this;
            Object.keys(e).forEach(function (t) {
              (e[t] = void 0), delete e[t];
            });
          }),
          (e.prototype.key = function (e) {
            return (e = e || 0), Object.keys(this)[e];
          }),
          e.prototype.__defineGetter__('length', function () {
            return Object.keys(this).length;
          }),
          'u' > typeof R && R.localStorage
            ? (j.exports = R.localStorage)
            : 'u' > typeof window && window.localStorage
              ? (j.exports = window.localStorage)
              : (j.exports = new e());
      })();
      class k {
        constructor() {
          this.localStorage = j.exports;
        }
        async getKeys() {
          return Object.keys(this.localStorage);
        }
        async getEntries() {
          return Object.entries(this.localStorage).map(L);
        }
        async getItem(e) {
          let t = this.localStorage.getItem(e);
          if (null !== t) return (0, C.j)(t);
        }
        async setItem(e, t) {
          this.localStorage.setItem(e, (0, C.h)(t));
        }
        async removeItem(e) {
          this.localStorage.removeItem(e);
        }
      }
      let U = async (e, t, r) => {
          let i = 'wc_storage_version',
            s = await t.getItem(i);
          if (s && s >= 1) {
            r(t);
            return;
          }
          let n = await e.getKeys();
          if (!n.length) {
            r(t);
            return;
          }
          let o = [];
          for (; n.length; ) {
            let r = n.shift();
            if (!r) continue;
            let i = r.toLowerCase();
            if (
              i.includes('wc@') ||
              i.includes('walletconnect') ||
              i.includes('wc_') ||
              i.includes('wallet_connect')
            ) {
              let i = await e.getItem(r);
              await t.setItem(r, i), o.push(r);
            }
          }
          await t.setItem(i, 1), r(t), B(e, o);
        },
        B = async (e, t) => {
          t.length &&
            t.forEach(async (t) => {
              await e.removeItem(t);
            });
        };
      class q {
        constructor() {
          (this.initialized = !1),
            (this.setInitialized = (e) => {
              (this.storage = e), (this.initialized = !0);
            });
          let e = new k();
          this.storage = e;
          try {
            let t = new N();
            U(e, t, this.setInitialized);
          } catch {
            this.initialized = !0;
          }
        }
        async getKeys() {
          return await this.initialize(), this.storage.getKeys();
        }
        async getEntries() {
          return await this.initialize(), this.storage.getEntries();
        }
        async getItem(e) {
          return await this.initialize(), this.storage.getItem(e);
        }
        async setItem(e, t) {
          return await this.initialize(), this.storage.setItem(e, t);
        }
        async removeItem(e) {
          return await this.initialize(), this.storage.removeItem(e);
        }
        async initialize() {
          this.initialized ||
            (await new Promise((e) => {
              let t = setInterval(() => {
                this.initialized && (clearInterval(t), e());
              }, 20);
            }));
        }
      }
      var $ = r(59213),
        M = r.n($);
      let z = { level: 'info' },
        F = 'custom_context';
      class H {
        constructor(e) {
          (this.nodeValue = e),
            (this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length),
            (this.next = null);
        }
        get value() {
          return this.nodeValue;
        }
        get size() {
          return this.sizeInBytes;
        }
      }
      class V {
        constructor(e) {
          (this.head = null),
            (this.tail = null),
            (this.lengthInNodes = 0),
            (this.maxSizeInBytes = e),
            (this.sizeInBytes = 0);
        }
        append(e) {
          let t = new H(e);
          if (t.size > this.maxSizeInBytes)
            throw Error(`[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`);
          for (; this.size + t.size > this.maxSizeInBytes; ) this.shift();
          this.head ? this.tail && (this.tail.next = t) : (this.head = t),
            (this.tail = t),
            this.lengthInNodes++,
            (this.sizeInBytes += t.size);
        }
        shift() {
          if (!this.head) return;
          let e = this.head;
          (this.head = this.head.next),
            this.head || (this.tail = null),
            this.lengthInNodes--,
            (this.sizeInBytes -= e.size);
        }
        toArray() {
          let e = [],
            t = this.head;
          for (; null !== t; ) e.push(t.value), (t = t.next);
          return e;
        }
        get length() {
          return this.lengthInNodes;
        }
        get size() {
          return this.sizeInBytes;
        }
        toOrderedArray() {
          return Array.from(this);
        }
        [Symbol.iterator]() {
          let e = this.head;
          return {
            next: () => {
              if (!e) return { done: !0, value: null };
              let t = e.value;
              return (e = e.next), { done: !1, value: t };
            },
          };
        }
      }
      class K {
        constructor(e, t = 1024e3) {
          (this.level = e ?? 'error'),
            (this.levelValue = $.levels.values[this.level]),
            (this.MAX_LOG_SIZE_IN_BYTES = t),
            (this.logs = new V(this.MAX_LOG_SIZE_IN_BYTES));
        }
        forwardToConsole(e, t) {
          t === $.levels.values.error
            ? console.error(e)
            : t === $.levels.values.warn
              ? console.warn(e)
              : t === $.levels.values.debug
                ? console.debug(e)
                : t === $.levels.values.trace
                  ? console.trace(e)
                  : console.log(e);
        }
        appendToLogs(e) {
          this.logs.append((0, C.h)({ timestamp: new Date().toISOString(), log: e }));
          let t = 'string' == typeof e ? JSON.parse(e).level : e.level;
          t >= this.levelValue && this.forwardToConsole(e, t);
        }
        getLogs() {
          return this.logs;
        }
        clearLogs() {
          this.logs = new V(this.MAX_LOG_SIZE_IN_BYTES);
        }
        getLogArray() {
          return Array.from(this.logs);
        }
        logsToBlob(e) {
          let t = this.getLogArray();
          return t.push((0, C.h)({ extraMetadata: e })), new Blob(t, { type: 'application/json' });
        }
      }
      class G {
        constructor(e, t = 1024e3) {
          this.baseChunkLogger = new K(e, t);
        }
        write(e) {
          this.baseChunkLogger.appendToLogs(e);
        }
        getLogs() {
          return this.baseChunkLogger.getLogs();
        }
        clearLogs() {
          this.baseChunkLogger.clearLogs();
        }
        getLogArray() {
          return this.baseChunkLogger.getLogArray();
        }
        logsToBlob(e) {
          return this.baseChunkLogger.logsToBlob(e);
        }
        downloadLogsBlobInBrowser(e) {
          let t = URL.createObjectURL(this.logsToBlob(e)),
            r = document.createElement('a');
          (r.href = t),
            (r.download = `walletconnect-logs-${new Date().toISOString()}.txt`),
            document.body.appendChild(r),
            r.click(),
            document.body.removeChild(r),
            URL.revokeObjectURL(t);
        }
      }
      class W {
        constructor(e, t = 1024e3) {
          this.baseChunkLogger = new K(e, t);
        }
        write(e) {
          this.baseChunkLogger.appendToLogs(e);
        }
        getLogs() {
          return this.baseChunkLogger.getLogs();
        }
        clearLogs() {
          this.baseChunkLogger.clearLogs();
        }
        getLogArray() {
          return this.baseChunkLogger.getLogArray();
        }
        logsToBlob(e) {
          return this.baseChunkLogger.logsToBlob(e);
        }
      }
      var Y = Object.defineProperty,
        Z = Object.defineProperties,
        J = Object.getOwnPropertyDescriptors,
        Q = Object.getOwnPropertySymbols,
        X = Object.prototype.hasOwnProperty,
        ee = Object.prototype.propertyIsEnumerable,
        et = (e, t, r) =>
          t in e
            ? Y(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        er = (e, t) => {
          for (var r in t || (t = {})) X.call(t, r) && et(e, r, t[r]);
          if (Q) for (var r of Q(t)) ee.call(t, r) && et(e, r, t[r]);
          return e;
        },
        ei = (e, t) => Z(e, J(t));
      function es(e) {
        return ei(er({}, e), { level: e?.level || z.level });
      }
      function en(e, t = F) {
        return typeof e.bindings > 'u'
          ? (function (e, t = F) {
              return e[t] || '';
            })(e, t)
          : e.bindings().context || '';
      }
      function eo(e, t, r = F) {
        let i = (function (e, t, r = F) {
          let i = en(e, r);
          return i.trim() ? `${i}/${t}` : t;
        })(e, t, r);
        return (function (e, t, r = F) {
          return (e[r] = t), e;
        })(e.child({ context: i }), i, r);
      }
      var ea = Object.defineProperty,
        ec = (e, t, r) =>
          t in e
            ? ea(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        el = (e, t, r) => ec(e, 'symbol' != typeof t ? t + '' : t, r);
      class eh extends a {
        constructor(e) {
          super(), (this.opts = e), el(this, 'protocol', 'wc'), el(this, 'version', 2);
        }
      }
      var eu = Object.defineProperty,
        ed = (e, t, r) =>
          t in e
            ? eu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        ep = (e, t, r) => ed(e, 'symbol' != typeof t ? t + '' : t, r);
      class ef extends a {
        constructor(e, t) {
          super(), (this.core = e), (this.logger = t), ep(this, 'records', new Map());
        }
      }
      class eg {
        constructor(e, t) {
          (this.logger = e), (this.core = t);
        }
      }
      class ey extends a {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class em extends a {
        constructor(e) {
          super();
        }
      }
      class eb {
        constructor(e, t, r, i) {
          (this.core = e), (this.logger = t), (this.name = r);
        }
      }
      var ew = Object.defineProperty;
      class ev extends a {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class eE extends a {
        constructor(e, t) {
          super(), (this.core = e), (this.logger = t);
        }
      }
      class e_ {
        constructor(e, t, r) {
          (this.core = e), (this.logger = t), (this.store = r);
        }
      }
      class eI {
        constructor(e, t) {
          (this.projectId = e), (this.logger = t);
        }
      }
      class eD {
        constructor(e, t, r) {
          (this.core = e), (this.logger = t), (this.telemetryEnabled = r);
        }
      }
      var ex = Object.defineProperty,
        eP = (e, t, r) =>
          t in e
            ? ex(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        eS = (e, t, r) => eP(e, 'symbol' != typeof t ? t + '' : t, r);
      n();
      class eO {
        constructor(e) {
          (this.opts = e), eS(this, 'protocol', 'wc'), eS(this, 'version', 2);
        }
      }
      s.EventEmitter;
      class eA {
        constructor(e) {
          this.client = e;
        }
      }
      var eC = r(78618),
        eT = r(3761),
        eN = r(34322);
      let eR = 'INTERNAL_ERROR',
        ej = 'SERVER_ERROR',
        eL = [-32700, -32600, -32601, -32602, -32603],
        ek = {
          PARSE_ERROR: { code: -32700, message: 'Parse error' },
          INVALID_REQUEST: { code: -32600, message: 'Invalid Request' },
          METHOD_NOT_FOUND: { code: -32601, message: 'Method not found' },
          INVALID_PARAMS: { code: -32602, message: 'Invalid params' },
          [eR]: { code: -32603, message: 'Internal error' },
          [ej]: { code: -32e3, message: 'Server error' },
        };
      function eU(e) {
        return Object.keys(ek).includes(e) ? ek[e] : ek[ej];
      }
      function eB(e, t, r) {
        return e.message.includes('getaddrinfo ENOTFOUND') ||
          e.message.includes('connect ECONNREFUSED')
          ? Error(`Unavailable ${r} RPC url at ${t}`)
          : e;
      }
      var eq = r(36672);
      function e$(e = 3) {
        return Date.now() * Math.pow(10, e) + Math.floor(Math.random() * Math.pow(10, e));
      }
      function eM(e = 6) {
        return BigInt(e$(e));
      }
      function ez(e, t, r) {
        return { id: r || e$(), jsonrpc: '2.0', method: e, params: t };
      }
      function eF(e, t) {
        return { id: e, jsonrpc: '2.0', result: t };
      }
      function eH(e, t, r) {
        var i, s, n;
        return {
          id: e,
          jsonrpc: '2.0',
          error:
            ((i = t),
            (s = r),
            void 0 === i
              ? eU(eR)
              : ('string' == typeof i &&
                  (i = Object.assign(Object.assign({}, eU(ej)), { message: i })),
                void 0 !== s && (i.data = s),
                (n = i.code),
                eL.includes(n) &&
                  (i = (function (e) {
                    let t = Object.values(ek).find((t) => t.code === e);
                    return t || ek[ej];
                  })(i.code)),
                i)),
        };
      }
      class eV {}
      class eK extends eV {
        constructor() {
          super();
        }
      }
      class eG extends eK {
        constructor(e) {
          super();
        }
      }
      function eW(e, t) {
        let r = (function (e) {
          let t = e.match(RegExp(/^\w+:/, 'gi'));
          if (t && t.length) return t[0];
        })(e);
        return void 0 !== r && new RegExp(t).test(r);
      }
      function eY(e) {
        return eW(e, '^https?:');
      }
      function eZ(e) {
        return eW(e, '^wss?:');
      }
      function eJ(e) {
        return 'object' == typeof e && 'id' in e && 'jsonrpc' in e && '2.0' === e.jsonrpc;
      }
      function eQ(e) {
        return eJ(e) && 'method' in e;
      }
      function eX(e) {
        return eJ(e) && (e0(e) || e1(e));
      }
      function e0(e) {
        return 'result' in e;
      }
      function e1(e) {
        return 'error' in e;
      }
      class e2 extends eG {
        constructor(e) {
          super(e),
            (this.events = new s.EventEmitter()),
            (this.hasRegisteredEventListeners = !1),
            (this.connection = this.setConnection(e)),
            this.connection.connected && this.registerEventListeners();
        }
        async connect(e = this.connection) {
          await this.open(e);
        }
        async disconnect() {
          await this.close();
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async request(e, t) {
          return this.requestStrict(ez(e.method, e.params || [], e.id || eM().toString()), t);
        }
        async requestStrict(e, t) {
          return new Promise(async (r, i) => {
            if (!this.connection.connected)
              try {
                await this.open();
              } catch (e) {
                i(e);
              }
            this.events.on(`${e.id}`, (e) => {
              e1(e) ? i(e.error) : r(e.result);
            });
            try {
              await this.connection.send(e, t);
            } catch (e) {
              i(e);
            }
          });
        }
        setConnection(e = this.connection) {
          return e;
        }
        onPayload(e) {
          this.events.emit('payload', e),
            eX(e)
              ? this.events.emit(`${e.id}`, e)
              : this.events.emit('message', { type: e.method, data: e.params });
        }
        onClose(e) {
          e &&
            3e3 === e.code &&
            this.events.emit(
              'error',
              Error(
                `WebSocket connection closed abnormally with code: ${e.code} ${e.reason ? `(${e.reason})` : ''}`
              )
            ),
            this.events.emit('disconnect');
        }
        async open(e = this.connection) {
          (this.connection === e && this.connection.connected) ||
            (this.connection.connected && this.close(),
            'string' == typeof e && (await this.connection.open(e), (e = this.connection)),
            (this.connection = this.setConnection(e)),
            await this.connection.open(),
            this.registerEventListeners(),
            this.events.emit('connect'));
        }
        async close() {
          await this.connection.close();
        }
        registerEventListeners() {
          this.hasRegisteredEventListeners ||
            (this.connection.on('payload', (e) => this.onPayload(e)),
            this.connection.on('close', (e) => this.onClose(e)),
            this.connection.on('error', (e) => this.events.emit('error', e)),
            this.connection.on('register_error', (e) => this.onClose()),
            (this.hasRegisteredEventListeners = !0));
        }
      }
      let e8 = () =>
          'u' > typeof WebSocket ||
          ('u' > typeof r.g && 'u' > typeof r.g.WebSocket) ||
          ('u' > typeof window && 'u' > typeof window.WebSocket) ||
          ('u' > typeof self && 'u' > typeof self.WebSocket),
        e3 = (e) => e.split('?')[0],
        e5 =
          'u' > typeof WebSocket
            ? WebSocket
            : 'u' > typeof r.g && 'u' > typeof r.g.WebSocket
              ? r.g.WebSocket
              : 'u' > typeof window && 'u' > typeof window.WebSocket
                ? window.WebSocket
                : 'u' > typeof self && 'u' > typeof self.WebSocket
                  ? self.WebSocket
                  : r(53516);
      class e6 {
        constructor(e) {
          if (
            ((this.url = e), (this.events = new s.EventEmitter()), (this.registering = !1), !eZ(e))
          )
            throw Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
          this.url = e;
        }
        get connected() {
          return 'u' > typeof this.socket;
        }
        get connecting() {
          return this.registering;
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async open(e = this.url) {
          await this.register(e);
        }
        async close() {
          return new Promise((e, t) => {
            if (typeof this.socket > 'u') {
              t(Error('Connection already closed'));
              return;
            }
            (this.socket.onclose = (t) => {
              this.onClose(t), e();
            }),
              this.socket.close();
          });
        }
        async send(e) {
          typeof this.socket > 'u' && (this.socket = await this.register());
          try {
            this.socket.send((0, C.h)(e));
          } catch (t) {
            this.onError(e.id, t);
          }
        }
        register(e = this.url) {
          if (!eZ(e)) throw Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
          if (this.registering) {
            let e = this.events.getMaxListeners();
            return (
              (this.events.listenerCount('register_error') >= e ||
                this.events.listenerCount('open') >= e) &&
                this.events.setMaxListeners(e + 1),
              new Promise((e, t) => {
                this.events.once('register_error', (e) => {
                  this.resetMaxListeners(), t(e);
                }),
                  this.events.once('open', () => {
                    if ((this.resetMaxListeners(), typeof this.socket > 'u'))
                      return t(Error('WebSocket connection is missing or invalid'));
                    e(this.socket);
                  });
              })
            );
          }
          return (
            (this.url = e),
            (this.registering = !0),
            new Promise((t, r) => {
              let i = (0, eq.isReactNative)()
                  ? void 0
                  : { rejectUnauthorized: !RegExp('wss?://localhost(:d{2,5})?').test(e) },
                s = new e5(e, [], i);
              e8()
                ? (s.onerror = (e) => {
                    r(this.emitError(e.error));
                  })
                : s.on('error', (e) => {
                    r(this.emitError(e));
                  }),
                (s.onopen = () => {
                  this.onOpen(s), t(s);
                });
            })
          );
        }
        onOpen(e) {
          (e.onmessage = (e) => this.onPayload(e)),
            (e.onclose = (e) => this.onClose(e)),
            (this.socket = e),
            (this.registering = !1),
            this.events.emit('open');
        }
        onClose(e) {
          (this.socket = void 0), (this.registering = !1), this.events.emit('close', e);
        }
        onPayload(e) {
          if (typeof e.data > 'u') return;
          let t = 'string' == typeof e.data ? (0, C.j)(e.data) : e.data;
          this.events.emit('payload', t);
        }
        onError(e, t) {
          let r = this.parseError(t),
            i = eH(e, r.message || r.toString());
          this.events.emit('payload', i);
        }
        parseError(e, t = this.url) {
          return eB(e, e3(t), 'WS');
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
        emitError(e) {
          let t = this.parseError(
            Error(e?.message || `WebSocket connection failed for host: ${e3(this.url)}`)
          );
          return this.events.emit('register_error', t), t;
        }
      }
      var e4 = r(37752),
        e9 = r(50887).Buffer,
        e7 = r(40459);
      let te = 'core',
        tt = `wc@2:${te}:`,
        tr = { logger: 'error' },
        ti = { database: ':memory:' },
        ts = 'client_ed25519_seed',
        tn = o.ONE_DAY,
        to = o.SIX_HOURS,
        ta = 'wss://relay.walletconnect.org',
        tc = {
          message: 'relayer_message',
          message_ack: 'relayer_message_ack',
          connect: 'relayer_connect',
          disconnect: 'relayer_disconnect',
          error: 'relayer_error',
          connection_stalled: 'relayer_connection_stalled',
          publish: 'relayer_publish',
        },
        tl = { payload: 'payload', connect: 'connect', disconnect: 'disconnect', error: 'error' },
        th = '2.20.2',
        tu = { link_mode: 'link_mode', relay: 'relay' },
        td = { inbound: 'inbound', outbound: 'outbound' },
        tp = 'WALLETCONNECT_LINK_MODE_APPS',
        tf = {
          created: 'subscription_created',
          deleted: 'subscription_deleted',
          sync: 'subscription_sync',
          resubscribed: 'subscription_resubscribed',
        },
        tg =
          (o.FIVE_SECONDS,
          {
            wc_pairingDelete: {
              req: { ttl: o.ONE_DAY, prompt: !1, tag: 1e3 },
              res: { ttl: o.ONE_DAY, prompt: !1, tag: 1001 },
            },
            wc_pairingPing: {
              req: { ttl: o.THIRTY_SECONDS, prompt: !1, tag: 1002 },
              res: { ttl: o.THIRTY_SECONDS, prompt: !1, tag: 1003 },
            },
            unregistered_method: {
              req: { ttl: o.ONE_DAY, prompt: !1, tag: 0 },
              res: { ttl: o.ONE_DAY, prompt: !1, tag: 0 },
            },
          }),
        ty = {
          create: 'pairing_create',
          expire: 'pairing_expire',
          delete: 'pairing_delete',
          ping: 'pairing_ping',
        },
        tm = {
          created: 'history_created',
          updated: 'history_updated',
          deleted: 'history_deleted',
          sync: 'history_sync',
        },
        tb = {
          created: 'expirer_created',
          deleted: 'expirer_deleted',
          expired: 'expirer_expired',
          sync: 'expirer_sync',
        },
        tw = 'https://verify.walletconnect.org',
        tv = `${tw}/v3`,
        tE = ['https://verify.walletconnect.com', tw],
        t_ = {
          pairing_started: 'pairing_started',
          pairing_uri_validation_success: 'pairing_uri_validation_success',
          pairing_uri_not_expired: 'pairing_uri_not_expired',
          store_new_pairing: 'store_new_pairing',
          subscribing_pairing_topic: 'subscribing_pairing_topic',
          subscribe_pairing_topic_success: 'subscribe_pairing_topic_success',
          existing_pairing: 'existing_pairing',
          pairing_not_expired: 'pairing_not_expired',
          emit_inactive_pairing: 'emit_inactive_pairing',
          emit_session_proposal: 'emit_session_proposal',
        },
        tI = {
          no_internet_connection: 'no_internet_connection',
          malformed_pairing_uri: 'malformed_pairing_uri',
          active_pairing_already_exists: 'active_pairing_already_exists',
          subscribe_pairing_topic_failure: 'subscribe_pairing_topic_failure',
          pairing_expired: 'pairing_expired',
          proposal_listener_not_found: 'proposal_listener_not_found',
        },
        tD = {
          session_approve_started: 'session_approve_started',
          session_namespaces_validation_success: 'session_namespaces_validation_success',
          subscribing_session_topic: 'subscribing_session_topic',
          subscribe_session_topic_success: 'subscribe_session_topic_success',
          publishing_session_approve: 'publishing_session_approve',
          session_approve_publish_success: 'session_approve_publish_success',
          store_session: 'store_session',
          publishing_session_settle: 'publishing_session_settle',
          session_settle_publish_success: 'session_settle_publish_success',
        },
        tx = {
          no_internet_connection: 'no_internet_connection',
          proposal_expired: 'proposal_expired',
          subscribe_session_topic_failure: 'subscribe_session_topic_failure',
          session_approve_publish_failure: 'session_approve_publish_failure',
          session_settle_publish_failure: 'session_settle_publish_failure',
          session_approve_namespace_validation_failure:
            'session_approve_namespace_validation_failure',
          proposal_not_found: 'proposal_not_found',
        },
        tP = {
          authenticated_session_approve_started: 'authenticated_session_approve_started',
          create_authenticated_session_topic: 'create_authenticated_session_topic',
          cacaos_verified: 'cacaos_verified',
          store_authenticated_session: 'store_authenticated_session',
          subscribing_authenticated_session_topic: 'subscribing_authenticated_session_topic',
          subscribe_authenticated_session_topic_success:
            'subscribe_authenticated_session_topic_success',
          publishing_authenticated_session_approve: 'publishing_authenticated_session_approve',
        },
        tS = {
          no_internet_connection: 'no_internet_connection',
          invalid_cacao: 'invalid_cacao',
          subscribe_authenticated_session_topic_failure:
            'subscribe_authenticated_session_topic_failure',
          authenticated_session_approve_publish_failure:
            'authenticated_session_approve_publish_failure',
          authenticated_session_pending_request_not_found:
            'authenticated_session_pending_request_not_found',
        };
      var tO = function (e, t) {
        if (e.length >= 255) throw TypeError('Alphabet too long');
        for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
        for (var s = 0; s < e.length; s++) {
          var n = e.charAt(s),
            o = n.charCodeAt(0);
          if (255 !== r[o]) throw TypeError(n + ' is ambiguous');
          r[o] = s;
        }
        var a = e.length,
          c = e.charAt(0),
          l = Math.log(a) / Math.log(256),
          h = Math.log(256) / Math.log(a);
        function u(e) {
          if ('string' != typeof e) throw TypeError('Expected String');
          if (0 === e.length) return new Uint8Array();
          var t = 0;
          if (' ' !== e[0]) {
            for (var i = 0, s = 0; e[t] === c; ) i++, t++;
            for (var n = ((e.length - t) * l + 1) >>> 0, o = new Uint8Array(n); e[t]; ) {
              var h = r[e.charCodeAt(t)];
              if (255 === h) return;
              for (var u = 0, d = n - 1; (0 !== h || u < s) && -1 !== d; d--, u++)
                (h += (a * o[d]) >>> 0), (o[d] = h % 256 >>> 0), (h = (h / 256) >>> 0);
              if (0 !== h) throw Error('Non-zero carry');
              (s = u), t++;
            }
            if (' ' !== e[t]) {
              for (var p = n - s; p !== n && 0 === o[p]; ) p++;
              for (var f = new Uint8Array(i + (n - p)), g = i; p !== n; ) f[g++] = o[p++];
              return f;
            }
          }
        }
        return {
          encode: function (t) {
            if (
              (t instanceof Uint8Array ||
                (ArrayBuffer.isView(t)
                  ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                  : Array.isArray(t) && (t = Uint8Array.from(t))),
              !(t instanceof Uint8Array))
            )
              throw TypeError('Expected Uint8Array');
            if (0 === t.length) return '';
            for (var r = 0, i = 0, s = 0, n = t.length; s !== n && 0 === t[s]; ) s++, r++;
            for (var o = ((n - s) * h + 1) >>> 0, l = new Uint8Array(o); s !== n; ) {
              for (var u = t[s], d = 0, p = o - 1; (0 !== u || d < i) && -1 !== p; p--, d++)
                (u += (256 * l[p]) >>> 0), (l[p] = u % a >>> 0), (u = (u / a) >>> 0);
              if (0 !== u) throw Error('Non-zero carry');
              (i = d), s++;
            }
            for (var f = o - i; f !== o && 0 === l[f]; ) f++;
            for (var g = c.repeat(r); f < o; ++f) g += e.charAt(l[f]);
            return g;
          },
          decodeUnsafe: u,
          decode: function (e) {
            var r = u(e);
            if (r) return r;
            throw Error(`Non-${t} character`);
          },
        };
      };
      let tA = (e) => {
          if (e instanceof Uint8Array && 'Uint8Array' === e.constructor.name) return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw Error('Unknown type, must be binary type');
        },
        tC = (e) => new TextEncoder().encode(e),
        tT = (e) => new TextDecoder().decode(e);
      class tN {
        constructor(e, t, r) {
          (this.name = e), (this.prefix = t), (this.baseEncode = r);
        }
        encode(e) {
          if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
          throw Error('Unknown type, must be binary type');
        }
      }
      class tR {
        constructor(e, t, r) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw Error('Invalid prefix character');
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = r);
        }
        decode(e) {
          if ('string' == typeof e) {
            if (e.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`
              );
            return this.baseDecode(e.slice(this.prefix.length));
          }
          throw Error('Can only multibase decode strings');
        }
        or(e) {
          return tL(this, e);
        }
      }
      class tj {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return tL(this, e);
        }
        decode(e) {
          let t = e[0],
            r = this.decoders[t];
          if (r) return r.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`
          );
        }
      }
      let tL = (e, t) =>
        new tj({ ...(e.decoders || { [e.prefix]: e }), ...(t.decoders || { [t.prefix]: t }) });
      class tk {
        constructor(e, t, r, i) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = r),
            (this.baseDecode = i),
            (this.encoder = new tN(e, t, r)),
            (this.decoder = new tR(e, t, i));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      let tU = ({ name: e, prefix: t, encode: r, decode: i }) => new tk(e, t, r, i),
        tB = ({ prefix: e, name: t, alphabet: r }) => {
          let { encode: i, decode: s } = tO(r, t);
          return tU({ prefix: e, name: t, encode: i, decode: (e) => tA(s(e)) });
        },
        tq = (e, t, r, i) => {
          let s = {};
          for (let e = 0; e < t.length; ++e) s[t[e]] = e;
          let n = e.length;
          for (; '=' === e[n - 1]; ) --n;
          let o = new Uint8Array(((n * r) / 8) | 0),
            a = 0,
            c = 0,
            l = 0;
          for (let t = 0; t < n; ++t) {
            let n = s[e[t]];
            if (void 0 === n) throw SyntaxError(`Non-${i} character`);
            (c = (c << r) | n), (a += r) >= 8 && ((a -= 8), (o[l++] = 255 & (c >> a)));
          }
          if (a >= r || 255 & (c << (8 - a))) throw SyntaxError('Unexpected end of data');
          return o;
        },
        t$ = (e, t, r) => {
          let i = '=' === t[t.length - 1],
            s = (1 << r) - 1,
            n = '',
            o = 0,
            a = 0;
          for (let i = 0; i < e.length; ++i)
            for (a = (a << 8) | e[i], o += 8; o > r; ) (o -= r), (n += t[s & (a >> o)]);
          if ((o && (n += t[s & (a << (r - o))]), i)) for (; (n.length * r) & 7; ) n += '=';
          return n;
        },
        tM = ({ name: e, prefix: t, bitsPerChar: r, alphabet: i }) =>
          tU({ prefix: t, name: e, encode: (e) => t$(e, i, r), decode: (t) => tq(t, i, r, e) });
      var tz = Object.freeze({
          __proto__: null,
          identity: tU({
            prefix: '\0',
            name: 'identity',
            encode: (e) => tT(e),
            decode: (e) => tC(e),
          }),
        }),
        tF = Object.freeze({
          __proto__: null,
          base2: tM({ prefix: '0', name: 'base2', alphabet: '01', bitsPerChar: 1 }),
        }),
        tH = Object.freeze({
          __proto__: null,
          base8: tM({ prefix: '7', name: 'base8', alphabet: '01234567', bitsPerChar: 3 }),
        }),
        tV = Object.freeze({
          __proto__: null,
          base10: tB({ prefix: '9', name: 'base10', alphabet: '0123456789' }),
        }),
        tK = Object.freeze({
          __proto__: null,
          base16: tM({ prefix: 'f', name: 'base16', alphabet: '0123456789abcdef', bitsPerChar: 4 }),
          base16upper: tM({
            prefix: 'F',
            name: 'base16upper',
            alphabet: '0123456789ABCDEF',
            bitsPerChar: 4,
          }),
        });
      let tG = tM({
          prefix: 'b',
          name: 'base32',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567',
          bitsPerChar: 5,
        }),
        tW = tM({
          prefix: 'B',
          name: 'base32upper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
          bitsPerChar: 5,
        }),
        tY = tM({
          prefix: 'c',
          name: 'base32pad',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567=',
          bitsPerChar: 5,
        }),
        tZ = tM({
          prefix: 'C',
          name: 'base32padupper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=',
          bitsPerChar: 5,
        }),
        tJ = tM({
          prefix: 'v',
          name: 'base32hex',
          alphabet: '0123456789abcdefghijklmnopqrstuv',
          bitsPerChar: 5,
        }),
        tQ = tM({
          prefix: 'V',
          name: 'base32hexupper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV',
          bitsPerChar: 5,
        }),
        tX = tM({
          prefix: 't',
          name: 'base32hexpad',
          alphabet: '0123456789abcdefghijklmnopqrstuv=',
          bitsPerChar: 5,
        });
      var t0 = Object.freeze({
          __proto__: null,
          base32: tG,
          base32upper: tW,
          base32pad: tY,
          base32padupper: tZ,
          base32hex: tJ,
          base32hexupper: tQ,
          base32hexpad: tX,
          base32hexpadupper: tM({
            prefix: 'T',
            name: 'base32hexpadupper',
            alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV=',
            bitsPerChar: 5,
          }),
          base32z: tM({
            prefix: 'h',
            name: 'base32z',
            alphabet: 'ybndrfg8ejkmcpqxot1uwisza345h769',
            bitsPerChar: 5,
          }),
        }),
        t1 = Object.freeze({
          __proto__: null,
          base36: tB({
            prefix: 'k',
            name: 'base36',
            alphabet: '0123456789abcdefghijklmnopqrstuvwxyz',
          }),
          base36upper: tB({
            prefix: 'K',
            name: 'base36upper',
            alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
          }),
        }),
        t2 = Object.freeze({
          __proto__: null,
          base58btc: tB({
            name: 'base58btc',
            prefix: 'z',
            alphabet: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
          }),
          base58flickr: tB({
            name: 'base58flickr',
            prefix: 'Z',
            alphabet: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ',
          }),
        });
      let t8 = tM({
          prefix: 'm',
          name: 'base64',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          bitsPerChar: 6,
        }),
        t3 = tM({
          prefix: 'M',
          name: 'base64pad',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
          bitsPerChar: 6,
        });
      var t5 = Object.freeze({
        __proto__: null,
        base64: t8,
        base64pad: t3,
        base64url: tM({
          prefix: 'u',
          name: 'base64url',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
          bitsPerChar: 6,
        }),
        base64urlpad: tM({
          prefix: 'U',
          name: 'base64urlpad',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=',
          bitsPerChar: 6,
        }),
      });
      let t6 = Array.from(
          '\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42'
        ),
        t4 = t6.reduce((e, t, r) => ((e[r] = t), e), []),
        t9 = t6.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []);
      var t7 = Object.freeze({
        __proto__: null,
        base256emoji: tU({
          prefix: '\uD83D\uDE80',
          name: 'base256emoji',
          encode: function (e) {
            return e.reduce((e, t) => (e += t4[t]), '');
          },
          decode: function (e) {
            let t = [];
            for (let r of e) {
              let e = t9[r.codePointAt(0)];
              if (void 0 === e) throw Error(`Non-base256emoji character: ${r}`);
              t.push(e);
            }
            return new Uint8Array(t);
          },
        }),
      });
      function re(e, t, r) {
        (t = t || []), (r = r || 0);
        for (var i = r; e >= 0x80000000; ) (t[r++] = (255 & e) | 128), (e /= 128);
        for (; -128 & e; ) (t[r++] = (255 & e) | 128), (e >>>= 7);
        return (t[r] = 0 | e), (re.bytes = r - i + 1), t;
      }
      function rt(e, t) {
        var r,
          i = 0,
          t = t || 0,
          s = 0,
          n = t,
          o = e.length;
        do {
          if (n >= o) throw ((rt.bytes = 0), RangeError('Could not decode varint'));
          (r = e[n++]), (i += s < 28 ? (127 & r) << s : (127 & r) * Math.pow(2, s)), (s += 7);
        } while (r >= 128);
        return (rt.bytes = n - t), i;
      }
      var rr = {
        encode: re,
        encodingLength: function (e) {
          return e < 128
            ? 1
            : e < 16384
              ? 2
              : e < 2097152
                ? 3
                : e < 0x10000000
                  ? 4
                  : e < 0x800000000
                    ? 5
                    : e < 0x40000000000
                      ? 6
                      : e < 0x2000000000000
                        ? 7
                        : e < 0x100000000000000
                          ? 8
                          : e < 0x8000000000000000
                            ? 9
                            : 10;
        },
      };
      let ri = (e, t, r = 0) => (rr.encode(e, t, r), t),
        rs = (e) => rr.encodingLength(e),
        rn = (e, t) => {
          let r = t.byteLength,
            i = rs(e),
            s = i + rs(r),
            n = new Uint8Array(s + r);
          return ri(e, n, 0), ri(r, n, i), n.set(t, s), new ro(e, r, t, n);
        };
      class ro {
        constructor(e, t, r, i) {
          (this.code = e), (this.size = t), (this.digest = r), (this.bytes = i);
        }
      }
      let ra = ({ name: e, code: t, encode: r }) => new rc(e, t, r);
      class rc {
        constructor(e, t, r) {
          (this.name = e), (this.code = t), (this.encode = r);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            let t = this.encode(e);
            return t instanceof Uint8Array ? rn(this.code, t) : t.then((e) => rn(this.code, e));
          }
          throw Error('Unknown type, must be binary type');
        }
      }
      let rl = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t));
      var rh = Object.freeze({
          __proto__: null,
          sha256: ra({ name: 'sha2-256', code: 18, encode: rl('SHA-256') }),
          sha512: ra({ name: 'sha2-512', code: 19, encode: rl('SHA-512') }),
        }),
        ru = Object.freeze({
          __proto__: null,
          identity: { code: 0, name: 'identity', encode: tA, digest: (e) => rn(0, tA(e)) },
        });
      new TextEncoder(), new TextDecoder();
      let rd = { ...tz, ...tF, ...tH, ...tV, ...tK, ...t0, ...t1, ...t2, ...t5, ...t7 };
      function rp(e, t, r, i) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: i },
        };
      }
      ({ ...rh, ...ru });
      let rf = rp(
          'utf8',
          'u',
          (e) => 'u' + new TextDecoder('utf8').decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        rg = rp(
          'ascii',
          'a',
          (e) => {
            let t = 'a';
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t;
          },
          (e) => {
            let t = (function (e = 0) {
              return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe
                ? globalThis.Buffer.allocUnsafe(e)
                : new Uint8Array(e);
            })((e = e.substring(1)).length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          }
        ),
        ry = { utf8: rf, 'utf-8': rf, hex: rd.base16, latin1: rg, ascii: rg, binary: rg, ...rd };
      var rm = Object.defineProperty,
        rb = (e, t, r) =>
          t in e
            ? rm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        rw = (e, t, r) => rb(e, 'symbol' != typeof t ? t + '' : t, r);
      class rv {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            rw(this, 'keychain', new Map()),
            rw(this, 'name', 'keychain'),
            rw(this, 'version', '0.3'),
            rw(this, 'initialized', !1),
            rw(this, 'storagePrefix', tt),
            rw(this, 'init', async () => {
              if (!this.initialized) {
                let e = await this.getKeyChain();
                'u' > typeof e && (this.keychain = e), (this.initialized = !0);
              }
            }),
            rw(this, 'has', (e) => (this.isInitialized(), this.keychain.has(e))),
            rw(this, 'set', async (e, t) => {
              this.isInitialized(), this.keychain.set(e, t), await this.persist();
            }),
            rw(this, 'get', (e) => {
              this.isInitialized();
              let t = this.keychain.get(e);
              if (typeof t > 'u') {
                let { message: t } = (0, eT.GuA)('NO_MATCHING_KEY', `${this.name}: ${e}`);
                throw Error(t);
              }
              return t;
            }),
            rw(this, 'del', async (e) => {
              this.isInitialized(), this.keychain.delete(e), await this.persist();
            }),
            (this.core = e),
            (this.logger = eo(t, this.name));
        }
        get context() {
          return en(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix + this.version + this.core.customStoragePrefix + '//' + this.name
          );
        }
        async setKeyChain(e) {
          await this.core.storage.setItem(this.storageKey, (0, eT.h0Y)(e));
        }
        async getKeyChain() {
          let e = await this.core.storage.getItem(this.storageKey);
          return 'u' > typeof e ? (0, eT.PUk)(e) : void 0;
        }
        async persist() {
          await this.setKeyChain(this.keychain);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, eT.GuA)('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var rE = Object.defineProperty,
        r_ = (e, t, r) =>
          t in e
            ? rE(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        rI = (e, t, r) => r_(e, 'symbol' != typeof t ? t + '' : t, r);
      class rD {
        constructor(e, t, r) {
          (this.core = e),
            (this.logger = t),
            rI(this, 'name', 'crypto'),
            rI(this, 'keychain'),
            rI(this, 'randomSessionIdentifier', (0, eT.two)()),
            rI(this, 'initialized', !1),
            rI(this, 'init', async () => {
              this.initialized || (await this.keychain.init(), (this.initialized = !0));
            }),
            rI(this, 'hasKeys', (e) => (this.isInitialized(), this.keychain.has(e))),
            rI(this, 'getClientId', async () => {
              this.isInitialized();
              let e = await this.getClientSeed(),
                t = eC.TZ(e);
              return eC.UF(t.publicKey);
            }),
            rI(this, 'generateKeyPair', () => {
              this.isInitialized();
              let e = (0, eT.TZl)();
              return this.setPrivateKey(e.publicKey, e.privateKey);
            }),
            rI(this, 'signJWT', async (e) => {
              this.isInitialized();
              let t = await this.getClientSeed(),
                r = eC.TZ(t),
                i = this.randomSessionIdentifier;
              return await eC.FA(i, e, tn, r);
            }),
            rI(this, 'generateSharedKey', (e, t, r) => {
              this.isInitialized();
              let i = this.getPrivateKey(e),
                s = (0, eT.ovp)(i, t);
              return this.setSymKey(s, r);
            }),
            rI(this, 'setSymKey', async (e, t) => {
              this.isInitialized();
              let r = t || (0, eT.EN$)(e);
              return await this.keychain.set(r, e), r;
            }),
            rI(this, 'deleteKeyPair', async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            rI(this, 'deleteSymKey', async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            rI(this, 'encode', async (e, t, r) => {
              this.isInitialized();
              let i = (0, eT.AwN)(r),
                s = (0, C.h)(t);
              if ((0, eT.ps1)(i)) return (0, eT.Tw2)(s, r?.encoding);
              if ((0, eT.V7m)(i)) {
                let t = i.senderPublicKey,
                  r = i.receiverPublicKey;
                e = await this.generateSharedKey(t, r);
              }
              let n = this.getSymKey(e),
                { type: o, senderPublicKey: a } = i;
              return (0, eT.wa2)({
                type: o,
                symKey: n,
                message: s,
                senderPublicKey: a,
                encoding: r?.encoding,
              });
            }),
            rI(this, 'decode', async (e, t, r) => {
              this.isInitialized();
              let i = (0, eT.C5G)(t, r);
              if ((0, eT.ps1)(i)) {
                let e = (0, eT.F$L)(t, r?.encoding);
                return (0, C.j)(e);
              }
              if ((0, eT.V7m)(i)) {
                let t = i.receiverPublicKey,
                  r = i.senderPublicKey;
                e = await this.generateSharedKey(t, r);
              }
              try {
                let i = this.getSymKey(e),
                  s = (0, eT.YcA)({ symKey: i, encoded: t, encoding: r?.encoding });
                return (0, C.j)(s);
              } catch (t) {
                this.logger.error(
                  `Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`
                ),
                  this.logger.error(t);
              }
            }),
            rI(this, 'getPayloadType', (e, t = eT.EWt) => {
              let r = (0, eT.iui)({ encoded: e, encoding: t });
              return (0, eT.x0t)(r.type);
            }),
            rI(this, 'getPayloadSenderPublicKey', (e, t = eT.EWt) => {
              let r = (0, eT.iui)({ encoded: e, encoding: t });
              return r.senderPublicKey ? (0, eN.dI)(r.senderPublicKey, eT.bEt) : void 0;
            }),
            (this.core = e),
            (this.logger = eo(t, this.name)),
            (this.keychain = r || new rv(this.core, this.logger));
        }
        get context() {
          return en(this.logger);
        }
        async setPrivateKey(e, t) {
          return await this.keychain.set(e, t), e;
        }
        getPrivateKey(e) {
          return this.keychain.get(e);
        }
        async getClientSeed() {
          let e = '';
          try {
            e = this.keychain.get(ts);
          } catch {
            (e = (0, eT.two)()), await this.keychain.set(ts, e);
          }
          return (function (e, t = 'utf8') {
            let r = ry[t];
            if (!r) throw Error(`Unsupported encoding "${t}"`);
            return ('utf8' === t || 'utf-8' === t) &&
              null != globalThis.Buffer &&
              null != globalThis.Buffer.from
              ? globalThis.Buffer.from(e, 'utf8')
              : r.decoder.decode(`${r.prefix}${e}`);
          })(e, 'base16');
        }
        getSymKey(e) {
          return this.keychain.get(e);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, eT.GuA)('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var rx = Object.defineProperty,
        rP = Object.defineProperties,
        rS = Object.getOwnPropertyDescriptors,
        rO = Object.getOwnPropertySymbols,
        rA = Object.prototype.hasOwnProperty,
        rC = Object.prototype.propertyIsEnumerable,
        rT = (e, t, r) =>
          t in e
            ? rx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        rN = (e, t) => {
          for (var r in t || (t = {})) rA.call(t, r) && rT(e, r, t[r]);
          if (rO) for (var r of rO(t)) rC.call(t, r) && rT(e, r, t[r]);
          return e;
        },
        rR = (e, t) => rP(e, rS(t)),
        rj = (e, t, r) => rT(e, 'symbol' != typeof t ? t + '' : t, r);
      class rL extends eg {
        constructor(e, t) {
          super(e, t),
            (this.logger = e),
            (this.core = t),
            rj(this, 'messages', new Map()),
            rj(this, 'messagesWithoutClientAck', new Map()),
            rj(this, 'name', 'messages'),
            rj(this, 'version', '0.3'),
            rj(this, 'initialized', !1),
            rj(this, 'storagePrefix', tt),
            rj(this, 'init', async () => {
              if (!this.initialized) {
                this.logger.trace('Initialized');
                try {
                  let e = await this.getRelayerMessages();
                  'u' > typeof e && (this.messages = e);
                  let t = await this.getRelayerMessagesWithoutClientAck();
                  'u' > typeof t && (this.messagesWithoutClientAck = t),
                    this.logger.debug(`Successfully Restored records for ${this.name}`),
                    this.logger.trace({
                      type: 'method',
                      method: 'restore',
                      size: this.messages.size,
                    });
                } catch (e) {
                  this.logger.debug(`Failed to Restore records for ${this.name}`),
                    this.logger.error(e);
                } finally {
                  this.initialized = !0;
                }
              }
            }),
            rj(this, 'set', async (e, t, r) => {
              this.isInitialized();
              let i = (0, eT.ALl)(t),
                s = this.messages.get(e);
              if ((typeof s > 'u' && (s = {}), 'u' > typeof s[i])) return i;
              if (((s[i] = t), this.messages.set(e, s), r === td.inbound)) {
                let r = this.messagesWithoutClientAck.get(e) || {};
                this.messagesWithoutClientAck.set(e, rR(rN({}, r), { [i]: t }));
              }
              return await this.persist(), i;
            }),
            rj(this, 'get', (e) => {
              this.isInitialized();
              let t = this.messages.get(e);
              return typeof t > 'u' && (t = {}), t;
            }),
            rj(this, 'getWithoutAck', (e) => {
              this.isInitialized();
              let t = {};
              for (let r of e) {
                let e = this.messagesWithoutClientAck.get(r) || {};
                t[r] = Object.values(e);
              }
              return t;
            }),
            rj(
              this,
              'has',
              (e, t) => (this.isInitialized(), 'u' > typeof this.get(e)[(0, eT.ALl)(t)])
            ),
            rj(this, 'ack', async (e, t) => {
              this.isInitialized();
              let r = this.messagesWithoutClientAck.get(e);
              if (typeof r > 'u') return;
              let i = (0, eT.ALl)(t);
              delete r[i],
                0 === Object.keys(r).length
                  ? this.messagesWithoutClientAck.delete(e)
                  : this.messagesWithoutClientAck.set(e, r),
                await this.persist();
            }),
            rj(this, 'del', async (e) => {
              this.isInitialized(),
                this.messages.delete(e),
                this.messagesWithoutClientAck.delete(e),
                await this.persist();
            }),
            (this.logger = eo(e, this.name)),
            (this.core = t);
        }
        get context() {
          return en(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix + this.version + this.core.customStoragePrefix + '//' + this.name
          );
        }
        get storageKeyWithoutClientAck() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            '//' +
            this.name +
            '_withoutClientAck'
          );
        }
        async setRelayerMessages(e) {
          await this.core.storage.setItem(this.storageKey, (0, eT.h0Y)(e));
        }
        async setRelayerMessagesWithoutClientAck(e) {
          await this.core.storage.setItem(this.storageKeyWithoutClientAck, (0, eT.h0Y)(e));
        }
        async getRelayerMessages() {
          let e = await this.core.storage.getItem(this.storageKey);
          return 'u' > typeof e ? (0, eT.PUk)(e) : void 0;
        }
        async getRelayerMessagesWithoutClientAck() {
          let e = await this.core.storage.getItem(this.storageKeyWithoutClientAck);
          return 'u' > typeof e ? (0, eT.PUk)(e) : void 0;
        }
        async persist() {
          await this.setRelayerMessages(this.messages),
            await this.setRelayerMessagesWithoutClientAck(this.messagesWithoutClientAck);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, eT.GuA)('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var rk = Object.defineProperty,
        rU = Object.defineProperties,
        rB = Object.getOwnPropertyDescriptors,
        rq = Object.getOwnPropertySymbols,
        r$ = Object.prototype.hasOwnProperty,
        rM = Object.prototype.propertyIsEnumerable,
        rz = (e, t, r) =>
          t in e
            ? rk(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        rF = (e, t) => {
          for (var r in t || (t = {})) r$.call(t, r) && rz(e, r, t[r]);
          if (rq) for (var r of rq(t)) rM.call(t, r) && rz(e, r, t[r]);
          return e;
        },
        rH = (e, t) => rU(e, rB(t)),
        rV = (e, t, r) => rz(e, 'symbol' != typeof t ? t + '' : t, r);
      class rK extends ey {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            rV(this, 'events', new s.EventEmitter()),
            rV(this, 'name', 'publisher'),
            rV(this, 'queue', new Map()),
            rV(this, 'publishTimeout', (0, o.toMiliseconds)(o.ONE_MINUTE)),
            rV(this, 'initialPublishTimeout', (0, o.toMiliseconds)(15 * o.ONE_SECOND)),
            rV(this, 'needsTransportRestart', !1),
            rV(this, 'publish', async (e, t, r) => {
              var i;
              this.logger.debug('Publishing Payload'),
                this.logger.trace({
                  type: 'method',
                  method: 'publish',
                  params: { topic: e, message: t, opts: r },
                });
              let s = r?.ttl || to,
                n = (0, eT.n6V)(r),
                o = r?.prompt || !1,
                a = r?.tag || 0,
                c = r?.id || eM().toString(),
                l = {
                  topic: e,
                  message: t,
                  opts: {
                    ttl: s,
                    relay: n,
                    prompt: o,
                    tag: a,
                    id: c,
                    attestation: r?.attestation,
                    tvf: r?.tvf,
                  },
                },
                h = `Failed to publish payload, please try again. id:${c} tag:${a}`;
              try {
                let i = new Promise(async (i) => {
                  let n = ({ id: e }) => {
                    l.opts.id === e &&
                      (this.removeRequestFromQueue(e),
                      this.relayer.events.removeListener(tc.publish, n),
                      i(l));
                  };
                  this.relayer.events.on(tc.publish, n);
                  let h = (0, eT.K3g)(
                    new Promise((i, n) => {
                      this.rpcPublish({
                        topic: e,
                        message: t,
                        ttl: s,
                        prompt: o,
                        tag: a,
                        id: c,
                        attestation: r?.attestation,
                        tvf: r?.tvf,
                      })
                        .then(i)
                        .catch((e) => {
                          this.logger.warn(e, e?.message), n(e);
                        });
                    }),
                    this.initialPublishTimeout,
                    `Failed initial publish, retrying.... id:${c} tag:${a}`
                  );
                  try {
                    await h, this.events.removeListener(tc.publish, n);
                  } catch (e) {
                    this.queue.set(c, rH(rF({}, l), { attempt: 1 })),
                      this.logger.warn(e, e?.message);
                  }
                });
                this.logger.trace({
                  type: 'method',
                  method: 'publish',
                  params: { id: c, topic: e, message: t, opts: r },
                }),
                  await (0, eT.K3g)(i, this.publishTimeout, h);
              } catch (e) {
                if (
                  (this.logger.debug('Failed to Publish Payload'),
                  this.logger.error(e),
                  null != (i = r?.internal) && i.throwOnFailedPublish)
                )
                  throw e;
              } finally {
                this.queue.delete(c);
              }
            }),
            rV(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            rV(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            rV(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            rV(this, 'removeListener', (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.relayer = e),
            (this.logger = eo(t, this.name)),
            this.registerEventListeners();
        }
        get context() {
          return en(this.logger);
        }
        async rpcPublish(e) {
          var t, r, i, s;
          let {
              topic: n,
              message: o,
              ttl: a = to,
              prompt: c,
              tag: l,
              id: h,
              attestation: u,
              tvf: d,
            } = e,
            p = {
              method: (0, eT.aa1)((0, eT.n6V)().protocol).publish,
              params: rF({ topic: n, message: o, ttl: a, prompt: c, tag: l, attestation: u }, d),
              id: h,
            };
          (0, eT.b07)(null == (t = p.params) ? void 0 : t.prompt) &&
            (null == (r = p.params) || delete r.prompt),
            (0, eT.b07)(null == (i = p.params) ? void 0 : i.tag) &&
              (null == (s = p.params) || delete s.tag),
            this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'message', direction: 'outgoing', request: p });
          let f = await this.relayer.request(p);
          return (
            this.relayer.events.emit(tc.publish, e),
            this.logger.debug('Successfully Published Payload'),
            f
          );
        }
        removeRequestFromQueue(e) {
          this.queue.delete(e);
        }
        checkQueue() {
          this.queue.forEach(async (e, t) => {
            let r = e.attempt + 1;
            this.queue.set(t, rH(rF({}, e), { attempt: r }));
            let { topic: i, message: s, opts: n, attestation: o } = e;
            this.logger.warn(
              {},
              `Publisher: queue->publishing: ${e.opts.id}, tag: ${e.opts.tag}, attempt: ${r}`
            ),
              await this.rpcPublish(
                rH(rF({}, e), {
                  topic: i,
                  message: s,
                  ttl: n.ttl,
                  prompt: n.prompt,
                  tag: n.tag,
                  id: n.id,
                  attestation: o,
                  tvf: n.tvf,
                })
              ),
              this.logger.warn({}, `Publisher: queue->published: ${e.opts.id}`);
          });
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(h.pulse, () => {
            if (this.needsTransportRestart) {
              (this.needsTransportRestart = !1), this.relayer.events.emit(tc.connection_stalled);
              return;
            }
            this.checkQueue();
          }),
            this.relayer.on(tc.message_ack, (e) => {
              this.removeRequestFromQueue(e.id.toString());
            });
        }
      }
      var rG = Object.defineProperty,
        rW = (e, t, r) =>
          t in e
            ? rG(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        rY = (e, t, r) => rW(e, 'symbol' != typeof t ? t + '' : t, r);
      class rZ {
        constructor() {
          rY(this, 'map', new Map()),
            rY(this, 'set', (e, t) => {
              let r = this.get(e);
              this.exists(e, t) || this.map.set(e, [...r, t]);
            }),
            rY(this, 'get', (e) => this.map.get(e) || []),
            rY(this, 'exists', (e, t) => this.get(e).includes(t)),
            rY(this, 'delete', (e, t) => {
              if (typeof t > 'u') {
                this.map.delete(e);
                return;
              }
              if (!this.map.has(e)) return;
              let r = this.get(e);
              if (!this.exists(e, t)) return;
              let i = r.filter((e) => e !== t);
              if (!i.length) {
                this.map.delete(e);
                return;
              }
              this.map.set(e, i);
            }),
            rY(this, 'clear', () => {
              this.map.clear();
            });
        }
        get topics() {
          return Array.from(this.map.keys());
        }
      }
      var rJ = Object.defineProperty,
        rQ = Object.defineProperties,
        rX = Object.getOwnPropertyDescriptors,
        r0 = Object.getOwnPropertySymbols,
        r1 = Object.prototype.hasOwnProperty,
        r2 = Object.prototype.propertyIsEnumerable,
        r8 = (e, t, r) =>
          t in e
            ? rJ(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        r3 = (e, t) => {
          for (var r in t || (t = {})) r1.call(t, r) && r8(e, r, t[r]);
          if (r0) for (var r of r0(t)) r2.call(t, r) && r8(e, r, t[r]);
          return e;
        },
        r5 = (e, t) => rQ(e, rX(t)),
        r6 = (e, t, r) => r8(e, 'symbol' != typeof t ? t + '' : t, r);
      class r4 extends ev {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            r6(this, 'subscriptions', new Map()),
            r6(this, 'topicMap', new rZ()),
            r6(this, 'events', new s.EventEmitter()),
            r6(this, 'name', 'subscription'),
            r6(this, 'version', '0.3'),
            r6(this, 'pending', new Map()),
            r6(this, 'cached', []),
            r6(this, 'initialized', !1),
            r6(this, 'storagePrefix', tt),
            r6(this, 'subscribeTimeout', (0, o.toMiliseconds)(o.ONE_MINUTE)),
            r6(this, 'initialSubscribeTimeout', (0, o.toMiliseconds)(15 * o.ONE_SECOND)),
            r6(this, 'clientId'),
            r6(this, 'batchSubscribeTopicsLimit', 500),
            r6(this, 'init', async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                this.registerEventListeners(),
                await this.restore()),
                (this.initialized = !0);
            }),
            r6(this, 'subscribe', async (e, t) => {
              this.isInitialized(),
                this.logger.debug('Subscribing Topic'),
                this.logger.trace({
                  type: 'method',
                  method: 'subscribe',
                  params: { topic: e, opts: t },
                });
              try {
                let r = (0, eT.n6V)(t),
                  i = { topic: e, relay: r, transportType: t?.transportType };
                this.pending.set(e, i);
                let s = await this.rpcSubscribe(e, r, t);
                return (
                  'string' == typeof s &&
                    (this.onSubscribe(s, i),
                    this.logger.debug('Successfully Subscribed Topic'),
                    this.logger.trace({
                      type: 'method',
                      method: 'subscribe',
                      params: { topic: e, opts: t },
                    })),
                  s
                );
              } catch (e) {
                throw (this.logger.debug('Failed to Subscribe Topic'), this.logger.error(e), e);
              }
            }),
            r6(this, 'unsubscribe', async (e, t) => {
              this.isInitialized(),
                'u' > typeof t?.id
                  ? await this.unsubscribeById(e, t.id, t)
                  : await this.unsubscribeByTopic(e, t);
            }),
            r6(
              this,
              'isSubscribed',
              (e) =>
                new Promise((t) => {
                  t(this.topicMap.topics.includes(e));
                })
            ),
            r6(
              this,
              'isKnownTopic',
              (e) =>
                new Promise((t) => {
                  t(
                    this.topicMap.topics.includes(e) ||
                      this.pending.has(e) ||
                      this.cached.some((t) => t.topic === e)
                  );
                })
            ),
            r6(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            r6(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            r6(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            r6(this, 'removeListener', (e, t) => {
              this.events.removeListener(e, t);
            }),
            r6(this, 'start', async () => {
              await this.onConnect();
            }),
            r6(this, 'stop', async () => {
              await this.onDisconnect();
            }),
            r6(this, 'restart', async () => {
              await this.restore(), await this.onRestart();
            }),
            r6(this, 'checkPending', async () => {
              if (0 === this.pending.size && (!this.initialized || !this.relayer.connected)) return;
              let e = [];
              this.pending.forEach((t) => {
                e.push(t);
              }),
                await this.batchSubscribe(e);
            }),
            r6(this, 'registerEventListeners', () => {
              this.relayer.core.heartbeat.on(h.pulse, async () => {
                await this.checkPending();
              }),
                this.events.on(tf.created, async (e) => {
                  let t = tf.created;
                  this.logger.info(`Emitting ${t}`),
                    this.logger.debug({ type: 'event', event: t, data: e }),
                    await this.persist();
                }),
                this.events.on(tf.deleted, async (e) => {
                  let t = tf.deleted;
                  this.logger.info(`Emitting ${t}`),
                    this.logger.debug({ type: 'event', event: t, data: e }),
                    await this.persist();
                });
            }),
            (this.relayer = e),
            (this.logger = eo(t, this.name)),
            (this.clientId = '');
        }
        get context() {
          return en(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.relayer.core.customStoragePrefix +
            '//' +
            this.name
          );
        }
        get length() {
          return this.subscriptions.size;
        }
        get ids() {
          return Array.from(this.subscriptions.keys());
        }
        get values() {
          return Array.from(this.subscriptions.values());
        }
        get topics() {
          return this.topicMap.topics;
        }
        get hasAnyTopics() {
          return (
            this.topicMap.topics.length > 0 ||
            this.pending.size > 0 ||
            this.cached.length > 0 ||
            this.subscriptions.size > 0
          );
        }
        hasSubscription(e, t) {
          let r = !1;
          try {
            r = this.getSubscription(e).topic === t;
          } catch {}
          return r;
        }
        reset() {
          (this.cached = []), (this.initialized = !0);
        }
        onDisable() {
          this.values.length > 0 && (this.cached = this.values),
            this.subscriptions.clear(),
            this.topicMap.clear();
        }
        async unsubscribeByTopic(e, t) {
          let r = this.topicMap.get(e);
          await Promise.all(r.map(async (r) => await this.unsubscribeById(e, r, t)));
        }
        async unsubscribeById(e, t, r) {
          this.logger.debug('Unsubscribing Topic'),
            this.logger.trace({
              type: 'method',
              method: 'unsubscribe',
              params: { topic: e, id: t, opts: r },
            });
          try {
            let i = (0, eT.n6V)(r);
            await this.restartToComplete({ topic: e, id: t, relay: i }),
              await this.rpcUnsubscribe(e, t, i);
            let s = (0, eT.Hjj)('USER_DISCONNECTED', `${this.name}, ${e}`);
            await this.onUnsubscribe(e, t, s),
              this.logger.debug('Successfully Unsubscribed Topic'),
              this.logger.trace({
                type: 'method',
                method: 'unsubscribe',
                params: { topic: e, id: t, opts: r },
              });
          } catch (e) {
            throw (this.logger.debug('Failed to Unsubscribe Topic'), this.logger.error(e), e);
          }
        }
        async rpcSubscribe(e, t, r) {
          var i;
          (r && r?.transportType !== tu.relay) ||
            (await this.restartToComplete({ topic: e, id: e, relay: t }));
          let s = { method: (0, eT.aa1)(t.protocol).subscribe, params: { topic: e } };
          this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'outgoing', request: s });
          let n = null == (i = r?.internal) ? void 0 : i.throwOnFailedPublish;
          try {
            let t = await this.getSubscriptionId(e);
            if (r?.transportType === tu.link_mode)
              return (
                setTimeout(
                  () => {
                    (this.relayer.connected || this.relayer.connecting) &&
                      this.relayer.request(s).catch((e) => this.logger.warn(e));
                  },
                  (0, o.toMiliseconds)(o.ONE_SECOND)
                ),
                t
              );
            let i = new Promise(async (t) => {
                let r = (i) => {
                  i.topic === e && (this.events.removeListener(tf.created, r), t(i.id));
                };
                this.events.on(tf.created, r);
                try {
                  let i = await (0, eT.K3g)(
                    new Promise((e, t) => {
                      this.relayer
                        .request(s)
                        .catch((e) => {
                          this.logger.warn(e, e?.message), t(e);
                        })
                        .then(e);
                    }),
                    this.initialSubscribeTimeout,
                    `Subscribing to ${e} failed, please try again`
                  );
                  this.events.removeListener(tf.created, r), t(i);
                } catch {}
              }),
              a = await (0, eT.K3g)(
                i,
                this.subscribeTimeout,
                `Subscribing to ${e} failed, please try again`
              );
            if (!a && n) throw Error(`Subscribing to ${e} failed, please try again`);
            return a ? t : null;
          } catch (e) {
            if (
              (this.logger.debug('Outgoing Relay Subscribe Payload stalled'),
              this.relayer.events.emit(tc.connection_stalled),
              n)
            )
              throw e;
          }
          return null;
        }
        async rpcBatchSubscribe(e) {
          if (!e.length) return;
          let t = e[0].relay,
            r = {
              method: (0, eT.aa1)(t.protocol).batchSubscribe,
              params: { topics: e.map((e) => e.topic) },
            };
          this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'outgoing', request: r });
          try {
            await await (0, eT.K3g)(
              new Promise((e) => {
                this.relayer
                  .request(r)
                  .catch((e) => this.logger.warn(e))
                  .then(e);
              }),
              this.subscribeTimeout,
              'rpcBatchSubscribe failed, please try again'
            );
          } catch {
            this.relayer.events.emit(tc.connection_stalled);
          }
        }
        async rpcBatchFetchMessages(e) {
          let t;
          if (!e.length) return;
          let r = e[0].relay,
            i = {
              method: (0, eT.aa1)(r.protocol).batchFetchMessages,
              params: { topics: e.map((e) => e.topic) },
            };
          this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'outgoing', request: i });
          try {
            t = await await (0, eT.K3g)(
              new Promise((e, t) => {
                this.relayer
                  .request(i)
                  .catch((e) => {
                    this.logger.warn(e), t(e);
                  })
                  .then(e);
              }),
              this.subscribeTimeout,
              'rpcBatchFetchMessages failed, please try again'
            );
          } catch {
            this.relayer.events.emit(tc.connection_stalled);
          }
          return t;
        }
        rpcUnsubscribe(e, t, r) {
          let i = { method: (0, eT.aa1)(r.protocol).unsubscribe, params: { topic: e, id: t } };
          return (
            this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'outgoing', request: i }),
            this.relayer.request(i)
          );
        }
        onSubscribe(e, t) {
          this.setSubscription(e, r5(r3({}, t), { id: e })), this.pending.delete(t.topic);
        }
        onBatchSubscribe(e) {
          e.length &&
            e.forEach((e) => {
              this.setSubscription(e.id, r3({}, e)), this.pending.delete(e.topic);
            });
        }
        async onUnsubscribe(e, t, r) {
          this.events.removeAllListeners(t),
            this.hasSubscription(t, e) && this.deleteSubscription(t, r),
            await this.relayer.messages.del(e);
        }
        async setRelayerSubscriptions(e) {
          await this.relayer.core.storage.setItem(this.storageKey, e);
        }
        async getRelayerSubscriptions() {
          return await this.relayer.core.storage.getItem(this.storageKey);
        }
        setSubscription(e, t) {
          this.logger.debug('Setting subscription'),
            this.logger.trace({
              type: 'method',
              method: 'setSubscription',
              id: e,
              subscription: t,
            }),
            this.addSubscription(e, t);
        }
        addSubscription(e, t) {
          this.subscriptions.set(e, r3({}, t)),
            this.topicMap.set(t.topic, e),
            this.events.emit(tf.created, t);
        }
        getSubscription(e) {
          this.logger.debug('Getting subscription'),
            this.logger.trace({ type: 'method', method: 'getSubscription', id: e });
          let t = this.subscriptions.get(e);
          if (!t) {
            let { message: t } = (0, eT.GuA)('NO_MATCHING_KEY', `${this.name}: ${e}`);
            throw Error(t);
          }
          return t;
        }
        deleteSubscription(e, t) {
          this.logger.debug('Deleting subscription'),
            this.logger.trace({ type: 'method', method: 'deleteSubscription', id: e, reason: t });
          let r = this.getSubscription(e);
          this.subscriptions.delete(e),
            this.topicMap.delete(r.topic, e),
            this.events.emit(tf.deleted, r5(r3({}, r), { reason: t }));
        }
        async persist() {
          await this.setRelayerSubscriptions(this.values), this.events.emit(tf.sync);
        }
        async onRestart() {
          if (this.cached.length) {
            let e = [...this.cached],
              t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
            for (let r = 0; r < t; r++) {
              let t = e.splice(0, this.batchSubscribeTopicsLimit);
              await this.batchSubscribe(t);
            }
          }
          this.events.emit(tf.resubscribed);
        }
        async restore() {
          try {
            let e = await this.getRelayerSubscriptions();
            if (typeof e > 'u' || !e.length) return;
            if (this.subscriptions.size) {
              let { message: e } = (0, eT.GuA)('RESTORE_WILL_OVERRIDE', this.name);
              throw (
                (this.logger.error(e),
                this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),
                Error(e))
              );
            }
            (this.cached = e),
              this.logger.debug(`Successfully Restored subscriptions for ${this.name}`),
              this.logger.trace({ type: 'method', method: 'restore', subscriptions: this.values });
          } catch (e) {
            this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),
              this.logger.error(e);
          }
        }
        async batchSubscribe(e) {
          e.length &&
            (await this.rpcBatchSubscribe(e),
            this.onBatchSubscribe(
              await Promise.all(
                e.map(async (e) => r5(r3({}, e), { id: await this.getSubscriptionId(e.topic) }))
              )
            ));
        }
        async batchFetchMessages(e) {
          if (!e.length) return;
          this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);
          let t = await this.rpcBatchFetchMessages(e);
          t &&
            t.messages &&
            (await (0, eT.yy4)((0, o.toMiliseconds)(o.ONE_SECOND)),
            await this.relayer.handleBatchMessageEvents(t.messages));
        }
        async onConnect() {
          await this.restart(), this.reset();
        }
        onDisconnect() {
          this.onDisable();
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, eT.GuA)('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
        async restartToComplete(e) {
          this.relayer.connected ||
            this.relayer.connecting ||
            (this.cached.push(e), await this.relayer.transportOpen());
        }
        async getClientId() {
          return (
            this.clientId || (this.clientId = await this.relayer.core.crypto.getClientId()),
            this.clientId
          );
        }
        async getSubscriptionId(e) {
          return (0, eT.ALl)(e + (await this.getClientId()));
        }
      }
      var r9 = Object.defineProperty,
        r7 = Object.getOwnPropertySymbols,
        ie = Object.prototype.hasOwnProperty,
        it = Object.prototype.propertyIsEnumerable,
        ir = (e, t, r) =>
          t in e
            ? r9(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        ii = (e, t) => {
          for (var r in t || (t = {})) ie.call(t, r) && ir(e, r, t[r]);
          if (r7) for (var r of r7(t)) it.call(t, r) && ir(e, r, t[r]);
          return e;
        },
        is = (e, t, r) => ir(e, 'symbol' != typeof t ? t + '' : t, r);
      class io extends em {
        constructor(e) {
          super(e),
            is(this, 'protocol', 'wc'),
            is(this, 'version', 2),
            is(this, 'core'),
            is(this, 'logger'),
            is(this, 'events', new s.EventEmitter()),
            is(this, 'provider'),
            is(this, 'messages'),
            is(this, 'subscriber'),
            is(this, 'publisher'),
            is(this, 'name', 'relayer'),
            is(this, 'transportExplicitlyClosed', !1),
            is(this, 'initialized', !1),
            is(this, 'connectionAttemptInProgress', !1),
            is(this, 'relayUrl'),
            is(this, 'projectId'),
            is(this, 'packageName'),
            is(this, 'bundleId'),
            is(this, 'hasExperiencedNetworkDisruption', !1),
            is(this, 'pingTimeout'),
            is(this, 'heartBeatTimeout', (0, o.toMiliseconds)(o.THIRTY_SECONDS + o.FIVE_SECONDS)),
            is(this, 'reconnectTimeout'),
            is(this, 'connectPromise'),
            is(this, 'reconnectInProgress', !1),
            is(this, 'requestsInFlight', []),
            is(this, 'connectTimeout', (0, o.toMiliseconds)(15 * o.ONE_SECOND)),
            is(this, 'request', async (e) => {
              var t, r;
              this.logger.debug('Publishing Request Payload');
              let i = e.id || eM().toString();
              await this.toEstablishConnection();
              try {
                this.logger.trace(
                  { id: i, method: e.method, topic: null == (t = e.params) ? void 0 : t.topic },
                  'relayer.request - publishing...'
                );
                let s = `${i}:${(null == (r = e.params) ? void 0 : r.tag) || ''}`;
                this.requestsInFlight.push(s);
                let n = await this.provider.request(e);
                return (this.requestsInFlight = this.requestsInFlight.filter((e) => e !== s)), n;
              } catch (e) {
                throw (this.logger.debug(`Failed to Publish Request: ${i}`), e);
              }
            }),
            is(this, 'resetPingTimeout', () => {
              (0, eT.Lln)() &&
                (clearTimeout(this.pingTimeout),
                (this.pingTimeout = setTimeout(() => {
                  var e, t, r, i;
                  try {
                    this.logger.debug({}, 'pingTimeout: Connection stalled, terminating...'),
                      null ==
                        (i =
                          null ==
                          (r =
                            null == (t = null == (e = this.provider) ? void 0 : e.connection)
                              ? void 0
                              : t.socket)
                            ? void 0
                            : r.terminate) || i.call(r);
                  } catch (e) {
                    this.logger.warn(e, e?.message);
                  }
                }, this.heartBeatTimeout)));
            }),
            is(this, 'onPayloadHandler', (e) => {
              this.onProviderPayload(e), this.resetPingTimeout();
            }),
            is(this, 'onConnectHandler', () => {
              this.logger.warn({}, 'Relayer connected \uD83D\uDEDC'),
                this.startPingTimeout(),
                this.events.emit(tc.connect);
            }),
            is(this, 'onDisconnectHandler', () => {
              this.logger.warn({}, 'Relayer disconnected \uD83D\uDED1'),
                (this.requestsInFlight = []),
                this.onProviderDisconnect();
            }),
            is(this, 'onProviderErrorHandler', (e) => {
              this.logger.fatal(`Fatal socket error: ${e.message}`),
                this.events.emit(tc.error, e),
                this.logger.fatal('Fatal socket error received, closing transport'),
                this.transportClose();
            }),
            is(this, 'registerProviderListeners', () => {
              this.provider.on(tl.payload, this.onPayloadHandler),
                this.provider.on(tl.connect, this.onConnectHandler),
                this.provider.on(tl.disconnect, this.onDisconnectHandler),
                this.provider.on(tl.error, this.onProviderErrorHandler);
            }),
            (this.core = e.core),
            (this.logger =
              'u' > typeof e.logger && 'string' != typeof e.logger
                ? eo(e.logger, this.name)
                : M()(es({ level: e.logger || 'error' }))),
            (this.messages = new rL(this.logger, e.core)),
            (this.subscriber = new r4(this, this.logger)),
            (this.publisher = new rK(this, this.logger)),
            (this.relayUrl = e?.relayUrl || ta),
            (this.projectId = e.projectId),
            (0, eT.m01)()
              ? (this.packageName = (0, eT.R7U)())
              : (0, eT.aRZ)() && (this.bundleId = (0, eT.R7U)()),
            (this.provider = {});
        }
        async init() {
          if (
            (this.logger.trace('Initialized'),
            this.registerEventListeners(),
            await Promise.all([this.messages.init(), this.subscriber.init()]),
            (this.initialized = !0),
            this.subscriber.hasAnyTopics)
          )
            try {
              await this.transportOpen();
            } catch (e) {
              this.logger.warn(e, e?.message);
            }
        }
        get context() {
          return en(this.logger);
        }
        get connected() {
          var e, t, r;
          return (
            (null ==
            (r =
              null == (t = null == (e = this.provider) ? void 0 : e.connection) ? void 0 : t.socket)
              ? void 0
              : r.readyState) === 1
          );
        }
        get connecting() {
          var e, t, r;
          return (
            (null ==
            (r =
              null == (t = null == (e = this.provider) ? void 0 : e.connection) ? void 0 : t.socket)
              ? void 0
              : r.readyState) === 0 || void 0 !== this.connectPromise
          );
        }
        async publish(e, t, r) {
          this.isInitialized(),
            await this.publisher.publish(e, t, r),
            await this.recordMessageEvent(
              { topic: e, message: t, publishedAt: Date.now(), transportType: tu.relay },
              td.outbound
            );
        }
        async subscribe(e, t) {
          var r, i, s;
          this.isInitialized(),
            (null != t && t.transportType && t?.transportType !== 'relay') ||
              (await this.toEstablishConnection());
          let n =
              typeof (null == (r = t?.internal) ? void 0 : r.throwOnFailedPublish) > 'u' ||
              (null == (i = t?.internal) ? void 0 : i.throwOnFailedPublish),
            o = (null == (s = this.subscriber.topicMap.get(e)) ? void 0 : s[0]) || '',
            a,
            c = (t) => {
              t.topic === e && (this.subscriber.off(tf.created, c), a());
            };
          return (
            await Promise.all([
              new Promise((e) => {
                (a = e), this.subscriber.on(tf.created, c);
              }),
              new Promise(async (r, i) => {
                (o =
                  (await this.subscriber
                    .subscribe(e, ii({ internal: { throwOnFailedPublish: n } }, t))
                    .catch((e) => {
                      n && i(e);
                    })) || o),
                  r();
              }),
            ]),
            o
          );
        }
        async unsubscribe(e, t) {
          this.isInitialized(), await this.subscriber.unsubscribe(e, t);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async transportDisconnect() {
          this.provider.disconnect && (this.hasExperiencedNetworkDisruption || this.connected)
            ? await (0, eT.K3g)(this.provider.disconnect(), 2e3, 'provider.disconnect()').catch(
                () => this.onProviderDisconnect()
              )
            : this.onProviderDisconnect();
        }
        async transportClose() {
          (this.transportExplicitlyClosed = !0), await this.transportDisconnect();
        }
        async transportOpen(e) {
          if (!this.subscriber.hasAnyTopics) {
            this.logger.warn(
              'Starting WS connection skipped because the client has no topics to work with.'
            );
            return;
          }
          if (
            (this.connectPromise
              ? (this.logger.debug({}, 'Waiting for existing connection attempt to resolve...'),
                await this.connectPromise,
                this.logger.debug({}, 'Existing connection attempt resolved'))
              : ((this.connectPromise = new Promise(async (t, r) => {
                  await this.connect(e)
                    .then(t)
                    .catch(r)
                    .finally(() => {
                      this.connectPromise = void 0;
                    });
                })),
                await this.connectPromise),
            !this.connected)
          )
            throw Error(
              `Couldn't establish socket connection to the relay server: ${this.relayUrl}`
            );
        }
        async restartTransport(e) {
          this.logger.debug({}, 'Restarting transport...'),
            this.connectionAttemptInProgress ||
              ((this.relayUrl = e || this.relayUrl),
              await this.confirmOnlineStateOrThrow(),
              await this.transportClose(),
              await this.transportOpen());
        }
        async confirmOnlineStateOrThrow() {
          if (!(await (0, eT.sc7)()))
            throw Error(
              'No internet connection detected. Please restart your network and try again.'
            );
        }
        async handleBatchMessageEvents(e) {
          if (e?.length === 0) {
            this.logger.trace('Batch message events is empty. Ignoring...');
            return;
          }
          let t = e.sort((e, t) => e.publishedAt - t.publishedAt);
          for (let e of (this.logger.debug(`Batch of ${t.length} message events sorted`), t))
            try {
              await this.onMessageEvent(e);
            } catch (e) {
              this.logger.warn(e, 'Error while processing batch message event: ' + e?.message);
            }
          this.logger.trace(`Batch of ${t.length} message events processed`);
        }
        async onLinkMessageEvent(e, t) {
          let { topic: r } = e;
          if (!t.sessionExists) {
            let e = (0, eT.Xw0)(o.FIVE_MINUTES);
            await this.core.pairing.pairings.set(r, {
              topic: r,
              expiry: e,
              relay: { protocol: 'irn' },
              active: !1,
            });
          }
          this.events.emit(tc.message, e), await this.recordMessageEvent(e, td.inbound);
        }
        async connect(e) {
          await this.confirmOnlineStateOrThrow(),
            e && e !== this.relayUrl && ((this.relayUrl = e), await this.transportDisconnect()),
            (this.connectionAttemptInProgress = !0),
            (this.transportExplicitlyClosed = !1);
          let t = 1;
          for (; t < 6; ) {
            try {
              if (this.transportExplicitlyClosed) break;
              this.logger.debug({}, `Connecting to ${this.relayUrl}, attempt: ${t}...`),
                await this.createProvider(),
                await new Promise(async (e, t) => {
                  let r = () => {
                    t(Error('Connection interrupted while trying to subscribe'));
                  };
                  this.provider.once(tl.disconnect, r),
                    await (0, eT.K3g)(
                      new Promise((e, t) => {
                        this.provider.connect().then(e).catch(t);
                      }),
                      this.connectTimeout,
                      `Socket stalled when trying to connect to ${this.relayUrl}`
                    )
                      .catch((e) => {
                        t(e);
                      })
                      .finally(() => {
                        this.provider.off(tl.disconnect, r), clearTimeout(this.reconnectTimeout);
                      }),
                    await new Promise(async (e, t) => {
                      let r = () => {
                        t(Error('Connection interrupted while trying to subscribe'));
                      };
                      this.provider.once(tl.disconnect, r),
                        await this.subscriber
                          .start()
                          .then(e)
                          .catch(t)
                          .finally(() => {
                            this.provider.off(tl.disconnect, r);
                          });
                    }),
                    (this.hasExperiencedNetworkDisruption = !1),
                    e();
                });
            } catch (e) {
              await this.subscriber.stop(),
                this.logger.warn({}, e.message),
                (this.hasExperiencedNetworkDisruption = !0);
            } finally {
              this.connectionAttemptInProgress = !1;
            }
            if (this.connected) {
              this.logger.debug({}, `Connected to ${this.relayUrl} successfully on attempt: ${t}`);
              break;
            }
            await new Promise((e) => setTimeout(e, (0, o.toMiliseconds)(+t))), t++;
          }
        }
        startPingTimeout() {
          var e, t, r, i, s;
          if ((0, eT.Lln)())
            try {
              null != (t = null == (e = this.provider) ? void 0 : e.connection) &&
                t.socket &&
                (null ==
                  (s =
                    null == (i = null == (r = this.provider) ? void 0 : r.connection)
                      ? void 0
                      : i.socket) ||
                  s.on('ping', () => {
                    this.resetPingTimeout();
                  })),
                this.resetPingTimeout();
            } catch (e) {
              this.logger.warn(e, e?.message);
            }
        }
        async createProvider() {
          this.provider.connection && this.unregisterProviderListeners();
          let e = await this.core.crypto.signJWT(this.relayUrl);
          (this.provider = new e2(
            new e6(
              (0, eT.jUZ)({
                sdkVersion: th,
                protocol: this.protocol,
                version: this.version,
                relayUrl: this.relayUrl,
                projectId: this.projectId,
                auth: e,
                useOnCloseEvent: !0,
                bundleId: this.bundleId,
                packageName: this.packageName,
              })
            )
          )),
            this.registerProviderListeners();
        }
        async recordMessageEvent(e, t) {
          let { topic: r, message: i } = e;
          await this.messages.set(r, i, t);
        }
        async shouldIgnoreMessageEvent(e) {
          let { topic: t, message: r } = e;
          if (!r || 0 === r.length)
            return this.logger.warn(`Ignoring invalid/empty message: ${r}`), !0;
          if (!(await this.subscriber.isKnownTopic(t)))
            return this.logger.warn(`Ignoring message for unknown topic ${t}`), !0;
          let i = this.messages.has(t, r);
          return i && this.logger.warn(`Ignoring duplicate message: ${r}`), i;
        }
        async onProviderPayload(e) {
          if (
            (this.logger.debug('Incoming Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'incoming', payload: e }),
            eQ(e))
          ) {
            if (!e.method.endsWith('_subscription')) return;
            let t = e.params,
              { topic: r, message: i, publishedAt: s, attestation: n } = t.data,
              o = { topic: r, message: i, publishedAt: s, transportType: tu.relay, attestation: n };
            this.logger.debug('Emitting Relayer Payload'),
              this.logger.trace(ii({ type: 'event', event: t.id }, o)),
              this.events.emit(t.id, o),
              await this.acknowledgePayload(e),
              await this.onMessageEvent(o);
          } else eX(e) && this.events.emit(tc.message_ack, e);
        }
        async onMessageEvent(e) {
          (await this.shouldIgnoreMessageEvent(e)) ||
            (await this.recordMessageEvent(e, td.inbound), this.events.emit(tc.message, e));
        }
        async acknowledgePayload(e) {
          let t = eF(e.id, !0);
          await this.provider.connection.send(t);
        }
        unregisterProviderListeners() {
          this.provider.off(tl.payload, this.onPayloadHandler),
            this.provider.off(tl.connect, this.onConnectHandler),
            this.provider.off(tl.disconnect, this.onDisconnectHandler),
            this.provider.off(tl.error, this.onProviderErrorHandler),
            clearTimeout(this.pingTimeout);
        }
        async registerEventListeners() {
          let e = await (0, eT.sc7)();
          (0, eT.uym)(async (t) => {
            e !== t &&
              ((e = t),
              t
                ? await this.transportOpen().catch((e) => this.logger.error(e, e?.message))
                : ((this.hasExperiencedNetworkDisruption = !0),
                  await this.transportDisconnect(),
                  (this.transportExplicitlyClosed = !1)));
          });
        }
        async onProviderDisconnect() {
          clearTimeout(this.pingTimeout),
            this.events.emit(tc.disconnect),
            (this.connectionAttemptInProgress = !1),
            !this.reconnectInProgress &&
              ((this.reconnectInProgress = !0),
              await this.subscriber.stop(),
              this.subscriber.hasAnyTopics &&
                (this.transportExplicitlyClosed ||
                  (this.reconnectTimeout = setTimeout(
                    async () => {
                      await this.transportOpen().catch((e) => this.logger.error(e, e?.message)),
                        (this.reconnectTimeout = void 0),
                        (this.reconnectInProgress = !1);
                    },
                    (0, o.toMiliseconds)(0.1)
                  ))));
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, eT.GuA)('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
        async toEstablishConnection() {
          if ((await this.confirmOnlineStateOrThrow(), !this.connected)) {
            if (this.connectPromise) {
              await this.connectPromise;
              return;
            }
            await this.connect();
          }
        }
      }
      function ia() {}
      function ic(e) {
        if (!e || 'object' != typeof e) return !1;
        let t = Object.getPrototypeOf(e);
        return (
          (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) &&
          '[object Object]' === Object.prototype.toString.call(e)
        );
      }
      function il(e) {
        return Object.getOwnPropertySymbols(e).filter((t) =>
          Object.prototype.propertyIsEnumerable.call(e, t)
        );
      }
      function ih(e) {
        return null == e
          ? void 0 === e
            ? '[object Undefined]'
            : '[object Null]'
          : Object.prototype.toString.call(e);
      }
      let iu = '[object Arguments]',
        id = '[object Object]';
      var ip = Object.defineProperty,
        ig = Object.getOwnPropertySymbols,
        iy = Object.prototype.hasOwnProperty,
        im = Object.prototype.propertyIsEnumerable,
        ib = (e, t, r) =>
          t in e
            ? ip(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        iw = (e, t) => {
          for (var r in t || (t = {})) iy.call(t, r) && ib(e, r, t[r]);
          if (ig) for (var r of ig(t)) im.call(t, r) && ib(e, r, t[r]);
          return e;
        },
        iv = (e, t, r) => ib(e, 'symbol' != typeof t ? t + '' : t, r);
      class iE extends eb {
        constructor(e, t, r, i = tt, s) {
          super(e, t, r, i),
            (this.core = e),
            (this.logger = t),
            (this.name = r),
            iv(this, 'map', new Map()),
            iv(this, 'version', '0.3'),
            iv(this, 'cached', []),
            iv(this, 'initialized', !1),
            iv(this, 'getKey'),
            iv(this, 'storagePrefix', tt),
            iv(this, 'recentlyDeleted', []),
            iv(this, 'recentlyDeletedLimit', 200),
            iv(this, 'init', async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                await this.restore(),
                this.cached.forEach((e) => {
                  this.getKey && null !== e && !(0, eT.b07)(e)
                    ? this.map.set(this.getKey(e), e)
                    : (0, eT.CTo)(e)
                      ? this.map.set(e.id, e)
                      : (0, eT.mr0)(e) && this.map.set(e.topic, e);
                }),
                (this.cached = []),
                (this.initialized = !0));
            }),
            iv(this, 'set', async (e, t) => {
              this.isInitialized(),
                this.map.has(e)
                  ? await this.update(e, t)
                  : (this.logger.debug('Setting value'),
                    this.logger.trace({ type: 'method', method: 'set', key: e, value: t }),
                    this.map.set(e, t),
                    await this.persist());
            }),
            iv(
              this,
              'get',
              (e) => (
                this.isInitialized(),
                this.logger.debug('Getting value'),
                this.logger.trace({ type: 'method', method: 'get', key: e }),
                this.getData(e)
              )
            ),
            iv(
              this,
              'getAll',
              (e) => (
                this.isInitialized(),
                e
                  ? this.values.filter((t) =>
                      Object.keys(e).every((r) => {
                        var i;
                        return (
                          (i = t[r]),
                          (function e(t, r, i, s, n, o, a) {
                            let c = a(t, r, i, s, n, o);
                            if (void 0 !== c) return c;
                            if (typeof t == typeof r)
                              switch (typeof t) {
                                case 'bigint':
                                case 'string':
                                case 'boolean':
                                case 'symbol':
                                case 'undefined':
                                case 'function':
                                  return t === r;
                                case 'number':
                                  return t === r || Object.is(t, r);
                              }
                            return (function t(r, i, s, n) {
                              if (Object.is(r, i)) return !0;
                              let o = ih(r),
                                a = ih(i);
                              if ((o === iu && (o = id), a === iu && (a = id), o !== a)) return !1;
                              switch (o) {
                                case '[object String]':
                                  return r.toString() === i.toString();
                                case '[object Number]': {
                                  let e = r.valueOf(),
                                    t = i.valueOf();
                                  return e === t || (Number.isNaN(e) && Number.isNaN(t));
                                }
                                case '[object Boolean]':
                                case '[object Date]':
                                case '[object Symbol]':
                                  return Object.is(r.valueOf(), i.valueOf());
                                case '[object RegExp]':
                                  return r.source === i.source && r.flags === i.flags;
                                case '[object Function]':
                                  return r === i;
                              }
                              let c = (s = s ?? new Map()).get(r),
                                l = s.get(i);
                              if (null != c && null != l) return c === i;
                              s.set(r, i), s.set(i, r);
                              try {
                                switch (o) {
                                  case '[object Map]':
                                    if (r.size !== i.size) return !1;
                                    for (let [t, o] of r.entries())
                                      if (!i.has(t) || !e(o, i.get(t), t, r, i, s, n)) return !1;
                                    return !0;
                                  case '[object Set]': {
                                    if (r.size !== i.size) return !1;
                                    let t = Array.from(r.values()),
                                      o = Array.from(i.values());
                                    for (let a = 0; a < t.length; a++) {
                                      let c = t[a],
                                        l = o.findIndex((t) => e(c, t, void 0, r, i, s, n));
                                      if (-1 === l) return !1;
                                      o.splice(l, 1);
                                    }
                                    return !0;
                                  }
                                  case '[object Array]':
                                  case '[object Uint8Array]':
                                  case '[object Uint8ClampedArray]':
                                  case '[object Uint16Array]':
                                  case '[object Uint32Array]':
                                  case '[object BigUint64Array]':
                                  case '[object Int8Array]':
                                  case '[object Int16Array]':
                                  case '[object Int32Array]':
                                  case '[object BigInt64Array]':
                                  case '[object Float32Array]':
                                  case '[object Float64Array]':
                                    if (
                                      ('u' > typeof e9 && e9.isBuffer(r) !== e9.isBuffer(i)) ||
                                      r.length !== i.length
                                    )
                                      return !1;
                                    for (let t = 0; t < r.length; t++)
                                      if (!e(r[t], i[t], t, r, i, s, n)) return !1;
                                    return !0;
                                  case '[object ArrayBuffer]':
                                    return (
                                      r.byteLength === i.byteLength &&
                                      t(new Uint8Array(r), new Uint8Array(i), s, n)
                                    );
                                  case '[object DataView]':
                                    return (
                                      r.byteLength === i.byteLength &&
                                      r.byteOffset === i.byteOffset &&
                                      t(new Uint8Array(r), new Uint8Array(i), s, n)
                                    );
                                  case '[object Error]':
                                    return r.name === i.name && r.message === i.message;
                                  case id: {
                                    if (
                                      !(t(r.constructor, i.constructor, s, n) || (ic(r) && ic(i)))
                                    )
                                      return !1;
                                    let o = [...Object.keys(r), ...il(r)],
                                      a = [...Object.keys(i), ...il(i)];
                                    if (o.length !== a.length) return !1;
                                    for (let t = 0; t < o.length; t++) {
                                      let a = o[t],
                                        c = r[a];
                                      if (!Object.hasOwn(i, a)) return !1;
                                      let l = i[a];
                                      if (!e(c, l, a, r, i, s, n)) return !1;
                                    }
                                    return !0;
                                  }
                                  default:
                                    return !1;
                                }
                              } finally {
                                s.delete(r), s.delete(i);
                              }
                            })(t, r, o, a);
                          })(i, e[r], void 0, void 0, void 0, void 0, ia)
                        );
                      })
                    )
                  : this.values
              )
            ),
            iv(this, 'update', async (e, t) => {
              this.isInitialized(),
                this.logger.debug('Updating value'),
                this.logger.trace({ type: 'method', method: 'update', key: e, update: t });
              let r = iw(iw({}, this.getData(e)), t);
              this.map.set(e, r), await this.persist();
            }),
            iv(this, 'delete', async (e, t) => {
              this.isInitialized(),
                this.map.has(e) &&
                  (this.logger.debug('Deleting value'),
                  this.logger.trace({ type: 'method', method: 'delete', key: e, reason: t }),
                  this.map.delete(e),
                  this.addToRecentlyDeleted(e),
                  await this.persist());
            }),
            (this.logger = eo(t, this.name)),
            (this.storagePrefix = i),
            (this.getKey = s);
        }
        get context() {
          return en(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix + this.version + this.core.customStoragePrefix + '//' + this.name
          );
        }
        get length() {
          return this.map.size;
        }
        get keys() {
          return Array.from(this.map.keys());
        }
        get values() {
          return Array.from(this.map.values());
        }
        addToRecentlyDeleted(e) {
          this.recentlyDeleted.push(e),
            this.recentlyDeleted.length >= this.recentlyDeletedLimit &&
              this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
        }
        async setDataStore(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getDataStore() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getData(e) {
          let t = this.map.get(e);
          if (!t) {
            if (this.recentlyDeleted.includes(e)) {
              let { message: t } = (0, eT.GuA)(
                'MISSING_OR_INVALID',
                `Record was recently deleted - ${this.name}: ${e}`
              );
              throw (this.logger.error(t), Error(t));
            }
            let { message: t } = (0, eT.GuA)('NO_MATCHING_KEY', `${this.name}: ${e}`);
            throw (this.logger.error(t), Error(t));
          }
          return t;
        }
        async persist() {
          await this.setDataStore(this.values);
        }
        async restore() {
          try {
            let e = await this.getDataStore();
            if (typeof e > 'u' || !e.length) return;
            if (this.map.size) {
              let { message: e } = (0, eT.GuA)('RESTORE_WILL_OVERRIDE', this.name);
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e),
              this.logger.debug(`Successfully Restored value for ${this.name}`),
              this.logger.trace({ type: 'method', method: 'restore', value: this.values });
          } catch (e) {
            this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, eT.GuA)('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var i_ = Object.defineProperty,
        iI = (e, t, r) =>
          t in e
            ? i_(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        iD = (e, t, r) => iI(e, 'symbol' != typeof t ? t + '' : t, r);
      class ix {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            iD(this, 'name', 'pairing'),
            iD(this, 'version', '0.3'),
            iD(this, 'events', new (n())()),
            iD(this, 'pairings'),
            iD(this, 'initialized', !1),
            iD(this, 'storagePrefix', tt),
            iD(this, 'ignoredPayloadTypes', [eT.Lp_]),
            iD(this, 'registeredMethods', []),
            iD(this, 'init', async () => {
              this.initialized ||
                (await this.pairings.init(),
                await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                (this.initialized = !0),
                this.logger.trace('Initialized'));
            }),
            iD(this, 'register', ({ methods: e }) => {
              this.isInitialized(),
                (this.registeredMethods = [...new Set([...this.registeredMethods, ...e])]);
            }),
            iD(this, 'create', async (e) => {
              this.isInitialized();
              let t = (0, eT.two)(),
                r = await this.core.crypto.setSymKey(t),
                i = (0, eT.Xw0)(o.FIVE_MINUTES),
                s = { protocol: 'irn' },
                n = { topic: r, expiry: i, relay: s, active: !1, methods: e?.methods },
                a = (0, eT.QJh)({
                  protocol: this.core.protocol,
                  version: this.core.version,
                  topic: r,
                  symKey: t,
                  relay: s,
                  expiryTimestamp: i,
                  methods: e?.methods,
                });
              return (
                this.events.emit(ty.create, n),
                this.core.expirer.set(r, i),
                await this.pairings.set(r, n),
                await this.core.relayer.subscribe(r, { transportType: e?.transportType }),
                { topic: r, uri: a }
              );
            }),
            iD(this, 'pair', async (e) => {
              let t;
              this.isInitialized();
              let r = this.core.eventClient.createEvent({
                properties: { topic: e?.uri, trace: [t_.pairing_started] },
              });
              this.isValidPair(e, r);
              let {
                topic: i,
                symKey: s,
                relay: n,
                expiryTimestamp: a,
                methods: c,
              } = (0, eT.wYp)(e.uri);
              if (
                ((r.props.properties.topic = i),
                r.addTrace(t_.pairing_uri_validation_success),
                r.addTrace(t_.pairing_uri_not_expired),
                this.pairings.keys.includes(i))
              ) {
                if (((t = this.pairings.get(i)), r.addTrace(t_.existing_pairing), t.active))
                  throw (
                    (r.setError(tI.active_pairing_already_exists),
                    Error(
                      `Pairing already exists: ${i}. Please try again with a new connection URI.`
                    ))
                  );
                r.addTrace(t_.pairing_not_expired);
              }
              let l = a || (0, eT.Xw0)(o.FIVE_MINUTES),
                h = { topic: i, relay: n, expiry: l, active: !1, methods: c };
              this.core.expirer.set(i, l),
                await this.pairings.set(i, h),
                r.addTrace(t_.store_new_pairing),
                e.activatePairing && (await this.activate({ topic: i })),
                this.events.emit(ty.create, h),
                r.addTrace(t_.emit_inactive_pairing),
                this.core.crypto.keychain.has(i) || (await this.core.crypto.setSymKey(s, i)),
                r.addTrace(t_.subscribing_pairing_topic);
              try {
                await this.core.relayer.confirmOnlineStateOrThrow();
              } catch {
                r.setError(tI.no_internet_connection);
              }
              try {
                await this.core.relayer.subscribe(i, { relay: n });
              } catch (e) {
                throw (r.setError(tI.subscribe_pairing_topic_failure), e);
              }
              return r.addTrace(t_.subscribe_pairing_topic_success), h;
            }),
            iD(this, 'activate', async ({ topic: e }) => {
              this.isInitialized();
              let t = (0, eT.Xw0)(o.FIVE_MINUTES);
              this.core.expirer.set(e, t), await this.pairings.update(e, { active: !0, expiry: t });
            }),
            iD(this, 'ping', async (e) => {
              this.isInitialized(),
                await this.isValidPing(e),
                this.logger.warn(
                  'ping() is deprecated and will be removed in the next major release.'
                );
              let { topic: t } = e;
              if (this.pairings.keys.includes(t)) {
                let e = await this.sendRequest(t, 'wc_pairingPing', {}),
                  { done: r, resolve: i, reject: s } = (0, eT.Wx8)();
                this.events.once((0, eT.hEn)('pairing_ping', e), ({ error: e }) => {
                  e ? s(e) : i();
                }),
                  await r();
              }
            }),
            iD(this, 'updateExpiry', async ({ topic: e, expiry: t }) => {
              this.isInitialized(), await this.pairings.update(e, { expiry: t });
            }),
            iD(this, 'updateMetadata', async ({ topic: e, metadata: t }) => {
              this.isInitialized(), await this.pairings.update(e, { peerMetadata: t });
            }),
            iD(this, 'getPairings', () => (this.isInitialized(), this.pairings.values)),
            iD(this, 'disconnect', async (e) => {
              this.isInitialized(), await this.isValidDisconnect(e);
              let { topic: t } = e;
              this.pairings.keys.includes(t) &&
                (await this.sendRequest(t, 'wc_pairingDelete', (0, eT.Hjj)('USER_DISCONNECTED')),
                await this.deletePairing(t));
            }),
            iD(this, 'formatUriFromPairing', (e) => {
              this.isInitialized();
              let { topic: t, relay: r, expiry: i, methods: s } = e,
                n = this.core.crypto.keychain.get(t);
              return (0, eT.QJh)({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: t,
                symKey: n,
                relay: r,
                expiryTimestamp: i,
                methods: s,
              });
            }),
            iD(this, 'sendRequest', async (e, t, r) => {
              let i = ez(t, r),
                s = await this.core.crypto.encode(e, i),
                n = tg[t].req;
              return this.core.history.set(e, i), this.core.relayer.publish(e, s, n), i.id;
            }),
            iD(this, 'sendResult', async (e, t, r) => {
              let i = eF(e, r),
                s = await this.core.crypto.encode(t, i),
                n = tg[(await this.core.history.get(t, e)).request.method].res;
              await this.core.relayer.publish(t, s, n), await this.core.history.resolve(i);
            }),
            iD(this, 'sendError', async (e, t, r) => {
              let i = eH(e, r),
                s = await this.core.crypto.encode(t, i),
                n = (await this.core.history.get(t, e)).request.method,
                o = tg[n] ? tg[n].res : tg.unregistered_method.res;
              await this.core.relayer.publish(t, s, o), await this.core.history.resolve(i);
            }),
            iD(this, 'deletePairing', async (e, t) => {
              await this.core.relayer.unsubscribe(e),
                await Promise.all([
                  this.pairings.delete(e, (0, eT.Hjj)('USER_DISCONNECTED')),
                  this.core.crypto.deleteSymKey(e),
                  t ? Promise.resolve() : this.core.expirer.del(e),
                ]);
            }),
            iD(this, 'cleanup', async () => {
              let e = this.pairings.getAll().filter((e) => (0, eT._dF)(e.expiry));
              await Promise.all(e.map((e) => this.deletePairing(e.topic)));
            }),
            iD(this, 'onRelayEventRequest', async (e) => {
              let { topic: t, payload: r } = e;
              switch (r.method) {
                case 'wc_pairingPing':
                  return await this.onPairingPingRequest(t, r);
                case 'wc_pairingDelete':
                  return await this.onPairingDeleteRequest(t, r);
                default:
                  return await this.onUnknownRpcMethodRequest(t, r);
              }
            }),
            iD(this, 'onRelayEventResponse', async (e) => {
              let { topic: t, payload: r } = e,
                i = (await this.core.history.get(t, r.id)).request.method;
              return 'wc_pairingPing' === i
                ? this.onPairingPingResponse(t, r)
                : this.onUnknownRpcMethodResponse(i);
            }),
            iD(this, 'onPairingPingRequest', async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult(r, e, !0),
                  this.events.emit(ty.ping, { id: r, topic: e });
              } catch (t) {
                await this.sendError(r, e, t), this.logger.error(t);
              }
            }),
            iD(this, 'onPairingPingResponse', (e, t) => {
              let { id: r } = t;
              setTimeout(() => {
                e0(t)
                  ? this.events.emit((0, eT.hEn)('pairing_ping', r), {})
                  : e1(t) && this.events.emit((0, eT.hEn)('pairing_ping', r), { error: t.error });
              }, 500);
            }),
            iD(this, 'onPairingDeleteRequest', async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidDisconnect({ topic: e }),
                  await this.deletePairing(e),
                  this.events.emit(ty.delete, { id: r, topic: e });
              } catch (t) {
                await this.sendError(r, e, t), this.logger.error(t);
              }
            }),
            iD(this, 'onUnknownRpcMethodRequest', async (e, t) => {
              let { id: r, method: i } = t;
              try {
                if (this.registeredMethods.includes(i)) return;
                let t = (0, eT.Hjj)('WC_METHOD_UNSUPPORTED', i);
                await this.sendError(r, e, t), this.logger.error(t);
              } catch (t) {
                await this.sendError(r, e, t), this.logger.error(t);
              }
            }),
            iD(this, 'onUnknownRpcMethodResponse', (e) => {
              this.registeredMethods.includes(e) ||
                this.logger.error((0, eT.Hjj)('WC_METHOD_UNSUPPORTED', e));
            }),
            iD(this, 'isValidPair', (e, t) => {
              var r;
              if (!(0, eT.TeY)(e)) {
                let { message: r } = (0, eT.GuA)('MISSING_OR_INVALID', `pair() params: ${e}`);
                throw (t.setError(tI.malformed_pairing_uri), Error(r));
              }
              if (!(0, eT.AYU)(e.uri)) {
                let { message: r } = (0, eT.GuA)('MISSING_OR_INVALID', `pair() uri: ${e.uri}`);
                throw (t.setError(tI.malformed_pairing_uri), Error(r));
              }
              let i = (0, eT.wYp)(e?.uri);
              if (!(null != (r = i?.relay) && r.protocol)) {
                let { message: e } = (0, eT.GuA)('MISSING_OR_INVALID', 'pair() uri#relay-protocol');
                throw (t.setError(tI.malformed_pairing_uri), Error(e));
              }
              if (!(null != i && i.symKey)) {
                let { message: e } = (0, eT.GuA)('MISSING_OR_INVALID', 'pair() uri#symKey');
                throw (t.setError(tI.malformed_pairing_uri), Error(e));
              }
              if (
                null != i &&
                i.expiryTimestamp &&
                (0, o.toMiliseconds)(i?.expiryTimestamp) < Date.now()
              ) {
                t.setError(tI.pairing_expired);
                let { message: e } = (0, eT.GuA)(
                  'EXPIRED',
                  'pair() URI has expired. Please try again with a new connection URI.'
                );
                throw Error(e);
              }
            }),
            iD(this, 'isValidPing', async (e) => {
              if (!(0, eT.TeY)(e)) {
                let { message: t } = (0, eT.GuA)('MISSING_OR_INVALID', `ping() params: ${e}`);
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            iD(this, 'isValidDisconnect', async (e) => {
              if (!(0, eT.TeY)(e)) {
                let { message: t } = (0, eT.GuA)('MISSING_OR_INVALID', `disconnect() params: ${e}`);
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            iD(this, 'isValidPairingTopic', async (e) => {
              if (!(0, eT.Qhg)(e, !1)) {
                let { message: t } = (0, eT.GuA)(
                  'MISSING_OR_INVALID',
                  `pairing topic should be a string: ${e}`
                );
                throw Error(t);
              }
              if (!this.pairings.keys.includes(e)) {
                let { message: t } = (0, eT.GuA)(
                  'NO_MATCHING_KEY',
                  `pairing topic doesn't exist: ${e}`
                );
                throw Error(t);
              }
              if ((0, eT._dF)(this.pairings.get(e).expiry)) {
                await this.deletePairing(e);
                let { message: t } = (0, eT.GuA)('EXPIRED', `pairing topic: ${e}`);
                throw Error(t);
              }
            }),
            (this.core = e),
            (this.logger = eo(t, this.name)),
            (this.pairings = new iE(this.core, this.logger, this.name, this.storagePrefix));
        }
        get context() {
          return en(this.logger);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, eT.GuA)('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
        registerRelayerEvents() {
          this.core.relayer.on(tc.message, async (e) => {
            let { topic: t, message: r, transportType: i } = e;
            if (
              this.pairings.keys.includes(t) &&
              i !== tu.link_mode &&
              !this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r))
            )
              try {
                let e = await this.core.crypto.decode(t, r);
                eQ(e)
                  ? (this.core.history.set(t, e),
                    await this.onRelayEventRequest({ topic: t, payload: e }))
                  : eX(e) &&
                    (await this.core.history.resolve(e),
                    await this.onRelayEventResponse({ topic: t, payload: e }),
                    this.core.history.delete(t, e.id)),
                  await this.core.relayer.messages.ack(t, r);
              } catch (e) {
                this.logger.error(e);
              }
          });
        }
        registerExpirerEvents() {
          this.core.expirer.on(tb.expired, async (e) => {
            let { topic: t } = (0, eT.c82)(e.target);
            t &&
              this.pairings.keys.includes(t) &&
              (await this.deletePairing(t, !0), this.events.emit(ty.expire, { topic: t }));
          });
        }
      }
      var iP = Object.defineProperty,
        iS = (e, t, r) =>
          t in e
            ? iP(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        iO = (e, t, r) => iS(e, 'symbol' != typeof t ? t + '' : t, r);
      class iA extends ef {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            iO(this, 'records', new Map()),
            iO(this, 'events', new s.EventEmitter()),
            iO(this, 'name', 'history'),
            iO(this, 'version', '0.3'),
            iO(this, 'cached', []),
            iO(this, 'initialized', !1),
            iO(this, 'storagePrefix', tt),
            iO(this, 'init', async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                await this.restore(),
                this.cached.forEach((e) => this.records.set(e.id, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            iO(this, 'set', (e, t, r) => {
              if (
                (this.isInitialized(),
                this.logger.debug('Setting JSON-RPC request history record'),
                this.logger.trace({
                  type: 'method',
                  method: 'set',
                  topic: e,
                  request: t,
                  chainId: r,
                }),
                this.records.has(t.id))
              )
                return;
              let i = {
                id: t.id,
                topic: e,
                request: { method: t.method, params: t.params || null },
                chainId: r,
                expiry: (0, eT.Xw0)(o.THIRTY_DAYS),
              };
              this.records.set(i.id, i), this.persist(), this.events.emit(tm.created, i);
            }),
            iO(this, 'resolve', async (e) => {
              if (
                (this.isInitialized(),
                this.logger.debug('Updating JSON-RPC response history record'),
                this.logger.trace({ type: 'method', method: 'update', response: e }),
                !this.records.has(e.id))
              )
                return;
              let t = await this.getRecord(e.id);
              typeof t.response > 'u' &&
                ((t.response = e1(e) ? { error: e.error } : { result: e.result }),
                this.records.set(t.id, t),
                this.persist(),
                this.events.emit(tm.updated, t));
            }),
            iO(
              this,
              'get',
              async (e, t) => (
                this.isInitialized(),
                this.logger.debug('Getting record'),
                this.logger.trace({ type: 'method', method: 'get', topic: e, id: t }),
                await this.getRecord(t)
              )
            ),
            iO(this, 'delete', (e, t) => {
              this.isInitialized(),
                this.logger.debug('Deleting record'),
                this.logger.trace({ type: 'method', method: 'delete', id: t }),
                this.values.forEach((r) => {
                  r.topic !== e ||
                    ('u' > typeof t && r.id !== t) ||
                    (this.records.delete(r.id), this.events.emit(tm.deleted, r));
                }),
                this.persist();
            }),
            iO(
              this,
              'exists',
              async (e, t) => (
                this.isInitialized(), !!this.records.has(t) && (await this.getRecord(t)).topic === e
              )
            ),
            iO(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            iO(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            iO(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            iO(this, 'removeListener', (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = eo(t, this.name));
        }
        get context() {
          return en(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix + this.version + this.core.customStoragePrefix + '//' + this.name
          );
        }
        get size() {
          return this.records.size;
        }
        get keys() {
          return Array.from(this.records.keys());
        }
        get values() {
          return Array.from(this.records.values());
        }
        get pending() {
          let e = [];
          return (
            this.values.forEach((t) => {
              if ('u' > typeof t.response) return;
              let r = {
                topic: t.topic,
                request: ez(t.request.method, t.request.params, t.id),
                chainId: t.chainId,
              };
              return e.push(r);
            }),
            e
          );
        }
        async setJsonRpcRecords(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getJsonRpcRecords() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getRecord(e) {
          this.isInitialized();
          let t = this.records.get(e);
          if (!t) {
            let { message: t } = (0, eT.GuA)('NO_MATCHING_KEY', `${this.name}: ${e}`);
            throw Error(t);
          }
          return t;
        }
        async persist() {
          await this.setJsonRpcRecords(this.values), this.events.emit(tm.sync);
        }
        async restore() {
          try {
            let e = await this.getJsonRpcRecords();
            if (typeof e > 'u' || !e.length) return;
            if (this.records.size) {
              let { message: e } = (0, eT.GuA)('RESTORE_WILL_OVERRIDE', this.name);
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e),
              this.logger.debug(`Successfully Restored records for ${this.name}`),
              this.logger.trace({ type: 'method', method: 'restore', records: this.values });
          } catch (e) {
            this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
          }
        }
        registerEventListeners() {
          this.events.on(tm.created, (e) => {
            let t = tm.created;
            this.logger.info(`Emitting ${t}`),
              this.logger.debug({ type: 'event', event: t, record: e });
          }),
            this.events.on(tm.updated, (e) => {
              let t = tm.updated;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, record: e });
            }),
            this.events.on(tm.deleted, (e) => {
              let t = tm.deleted;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, record: e });
            }),
            this.core.heartbeat.on(h.pulse, () => {
              this.cleanup();
            });
        }
        cleanup() {
          try {
            this.isInitialized();
            let e = !1;
            this.records.forEach((t) => {
              (0, o.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 &&
                (this.logger.info(`Deleting expired history log: ${t.id}`),
                this.records.delete(t.id),
                this.events.emit(tm.deleted, t, !1),
                (e = !0));
            }),
              e && this.persist();
          } catch (e) {
            this.logger.warn(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, eT.GuA)('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var iC = Object.defineProperty,
        iT = (e, t, r) =>
          t in e
            ? iC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        iN = (e, t, r) => iT(e, 'symbol' != typeof t ? t + '' : t, r);
      class iR extends eE {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            iN(this, 'expirations', new Map()),
            iN(this, 'events', new s.EventEmitter()),
            iN(this, 'name', 'expirer'),
            iN(this, 'version', '0.3'),
            iN(this, 'cached', []),
            iN(this, 'initialized', !1),
            iN(this, 'storagePrefix', tt),
            iN(this, 'init', async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                await this.restore(),
                this.cached.forEach((e) => this.expirations.set(e.target, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            iN(this, 'has', (e) => {
              try {
                let t = this.formatTarget(e);
                return 'u' > typeof this.getExpiration(t);
              } catch {
                return !1;
              }
            }),
            iN(this, 'set', (e, t) => {
              this.isInitialized();
              let r = this.formatTarget(e),
                i = { target: r, expiry: t };
              this.expirations.set(r, i),
                this.checkExpiry(r, i),
                this.events.emit(tb.created, { target: r, expiration: i });
            }),
            iN(this, 'get', (e) => {
              this.isInitialized();
              let t = this.formatTarget(e);
              return this.getExpiration(t);
            }),
            iN(this, 'del', (e) => {
              if ((this.isInitialized(), this.has(e))) {
                let t = this.formatTarget(e),
                  r = this.getExpiration(t);
                this.expirations.delete(t),
                  this.events.emit(tb.deleted, { target: t, expiration: r });
              }
            }),
            iN(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            iN(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            iN(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            iN(this, 'removeListener', (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = eo(t, this.name));
        }
        get context() {
          return en(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix + this.version + this.core.customStoragePrefix + '//' + this.name
          );
        }
        get length() {
          return this.expirations.size;
        }
        get keys() {
          return Array.from(this.expirations.keys());
        }
        get values() {
          return Array.from(this.expirations.values());
        }
        formatTarget(e) {
          if ('string' == typeof e) return (0, eT.ADD)(e);
          if ('number' == typeof e) return (0, eT.gOF)(e);
          let { message: t } = (0, eT.GuA)('UNKNOWN_TYPE', `Target type: ${typeof e}`);
          throw Error(t);
        }
        async setExpirations(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getExpirations() {
          return await this.core.storage.getItem(this.storageKey);
        }
        async persist() {
          await this.setExpirations(this.values), this.events.emit(tb.sync);
        }
        async restore() {
          try {
            let e = await this.getExpirations();
            if (typeof e > 'u' || !e.length) return;
            if (this.expirations.size) {
              let { message: e } = (0, eT.GuA)('RESTORE_WILL_OVERRIDE', this.name);
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e),
              this.logger.debug(`Successfully Restored expirations for ${this.name}`),
              this.logger.trace({ type: 'method', method: 'restore', expirations: this.values });
          } catch (e) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`),
              this.logger.error(e);
          }
        }
        getExpiration(e) {
          let t = this.expirations.get(e);
          if (!t) {
            let { message: t } = (0, eT.GuA)('NO_MATCHING_KEY', `${this.name}: ${e}`);
            throw (this.logger.warn(t), Error(t));
          }
          return t;
        }
        checkExpiry(e, t) {
          let { expiry: r } = t;
          (0, o.toMiliseconds)(r) - Date.now() <= 0 && this.expire(e, t);
        }
        expire(e, t) {
          this.expirations.delete(e), this.events.emit(tb.expired, { target: e, expiration: t });
        }
        checkExpirations() {
          this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e));
        }
        registerEventListeners() {
          this.core.heartbeat.on(h.pulse, () => this.checkExpirations()),
            this.events.on(tb.created, (e) => {
              let t = tb.created;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, data: e }),
                this.persist();
            }),
            this.events.on(tb.expired, (e) => {
              let t = tb.expired;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, data: e }),
                this.persist();
            }),
            this.events.on(tb.deleted, (e) => {
              let t = tb.deleted;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, data: e }),
                this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, eT.GuA)('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
      }
      var ij = Object.defineProperty,
        iL = (e, t, r) =>
          t in e
            ? ij(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        ik = (e, t, r) => iL(e, 'symbol' != typeof t ? t + '' : t, r);
      class iU extends e_ {
        constructor(e, t, r) {
          super(e, t, r),
            (this.core = e),
            (this.logger = t),
            (this.store = r),
            ik(this, 'name', 'verify-api'),
            ik(this, 'abortController'),
            ik(this, 'isDevEnv'),
            ik(this, 'verifyUrlV3', tv),
            ik(this, 'storagePrefix', tt),
            ik(this, 'version', 2),
            ik(this, 'publicKey'),
            ik(this, 'fetchPromise'),
            ik(this, 'init', async () => {
              var e;
              this.isDevEnv ||
                ((this.publicKey = await this.store.getItem(this.storeKey)),
                this.publicKey &&
                  (0, o.toMiliseconds)(null == (e = this.publicKey) ? void 0 : e.expiresAt) <
                    Date.now() &&
                  (this.logger.debug('verify v2 public key expired'),
                  await this.removePublicKey()));
            }),
            ik(this, 'register', async (e) => {
              if (!(0, eT.BdH)() || this.isDevEnv) return;
              let t = window.location.origin,
                { id: r, decryptedId: i } = e,
                s = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${t}&id=${r}&decryptedId=${i}`;
              try {
                let e = (0, e4.getDocument)(),
                  t = this.startAbortTimer(5 * o.ONE_SECOND),
                  i = await new Promise((i, n) => {
                    let o = () => {
                      window.removeEventListener('message', c),
                        e.body.removeChild(a),
                        n('attestation aborted');
                    };
                    this.abortController.signal.addEventListener('abort', o);
                    let a = e.createElement('iframe');
                    (a.src = s),
                      (a.style.display = 'none'),
                      a.addEventListener('error', o, { signal: this.abortController.signal });
                    let c = (s) => {
                      if (s.data && 'string' == typeof s.data)
                        try {
                          let n = JSON.parse(s.data);
                          if ('verify_attestation' === n.type) {
                            if ((0, eC.Cq)(n.attestation).payload.id !== r) return;
                            clearInterval(t),
                              e.body.removeChild(a),
                              this.abortController.signal.removeEventListener('abort', o),
                              window.removeEventListener('message', c),
                              i(null === n.attestation ? '' : n.attestation);
                          }
                        } catch (e) {
                          this.logger.warn(e);
                        }
                    };
                    e.body.appendChild(a),
                      window.addEventListener('message', c, {
                        signal: this.abortController.signal,
                      });
                  });
                return this.logger.debug('jwt attestation', i), i;
              } catch (e) {
                this.logger.warn(e);
              }
              return '';
            }),
            ik(this, 'resolve', async (e) => {
              if (this.isDevEnv) return '';
              let { attestationId: t, hash: r, encryptedId: i } = e;
              if ('' === t) {
                this.logger.debug('resolve: attestationId is empty, skipping');
                return;
              }
              if (t) {
                if ((0, eC.Cq)(t).payload.id !== i) return;
                let e = await this.isValidJwtAttestation(t);
                if (e) {
                  if (!e.isVerified) {
                    this.logger.warn('resolve: jwt attestation: origin url not verified');
                    return;
                  }
                  return e;
                }
              }
              if (!r) return;
              let s = this.getVerifyUrl(e?.verifyUrl);
              return this.fetchAttestation(r, s);
            }),
            ik(this, 'fetchAttestation', async (e, t) => {
              this.logger.debug(`resolving attestation: ${e} from url: ${t}`);
              let r = this.startAbortTimer(5 * o.ONE_SECOND),
                i = await fetch(`${t}/attestation/${e}?v2Supported=true`, {
                  signal: this.abortController.signal,
                });
              return clearTimeout(r), 200 === i.status ? await i.json() : void 0;
            }),
            ik(this, 'getVerifyUrl', (e) => {
              let t = e || tw;
              return (
                tE.includes(t) ||
                  (this.logger.info(
                    `verify url: ${t}, not included in trusted list, assigning default: ${tw}`
                  ),
                  (t = tw)),
                t
              );
            }),
            ik(this, 'fetchPublicKey', async () => {
              try {
                this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
                let e = this.startAbortTimer(o.FIVE_SECONDS),
                  t = await fetch(`${this.verifyUrlV3}/public-key`, {
                    signal: this.abortController.signal,
                  });
                return clearTimeout(e), await t.json();
              } catch (e) {
                this.logger.warn(e);
              }
            }),
            ik(this, 'persistPublicKey', async (e) => {
              this.logger.debug('persisting public key to local storage', e),
                await this.store.setItem(this.storeKey, e),
                (this.publicKey = e);
            }),
            ik(this, 'removePublicKey', async () => {
              this.logger.debug('removing verify v2 public key from storage'),
                await this.store.removeItem(this.storeKey),
                (this.publicKey = void 0);
            }),
            ik(this, 'isValidJwtAttestation', async (e) => {
              let t = await this.getPublicKey();
              try {
                if (t) return this.validateAttestation(e, t);
              } catch (e) {
                this.logger.error(e), this.logger.warn('error validating attestation');
              }
              let r = await this.fetchAndPersistPublicKey();
              try {
                if (r) return this.validateAttestation(e, r);
              } catch (e) {
                this.logger.error(e), this.logger.warn('error validating attestation');
              }
            }),
            ik(this, 'getPublicKey', async () =>
              this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey()
            ),
            ik(this, 'fetchAndPersistPublicKey', async () => {
              if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
              this.fetchPromise = new Promise(async (e) => {
                let t = await this.fetchPublicKey();
                t && (await this.persistPublicKey(t), e(t));
              });
              let e = await this.fetchPromise;
              return (this.fetchPromise = void 0), e;
            }),
            ik(this, 'validateAttestation', (e, t) => {
              let r = (0, eT.U0i)(e, t.publicKey),
                i = { hasExpired: (0, o.toMiliseconds)(r.exp) < Date.now(), payload: r };
              if (i.hasExpired)
                throw (
                  (this.logger.warn('resolve: jwt attestation expired'),
                  Error('JWT attestation expired'))
                );
              return {
                origin: i.payload.origin,
                isScam: i.payload.isScam,
                isVerified: i.payload.isVerified,
              };
            }),
            (this.logger = eo(t, this.name)),
            (this.abortController = new AbortController()),
            (this.isDevEnv = (0, eT.w8K)()),
            this.init();
        }
        get storeKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            '//verify:public:key'
          );
        }
        get context() {
          return en(this.logger);
        }
        startAbortTimer(e) {
          return (
            (this.abortController = new AbortController()),
            setTimeout(() => this.abortController.abort(), (0, o.toMiliseconds)(e))
          );
        }
      }
      var iB = Object.defineProperty,
        iq = (e, t, r) =>
          t in e
            ? iB(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        i$ = (e, t, r) => iq(e, 'symbol' != typeof t ? t + '' : t, r);
      class iM extends eI {
        constructor(e, t) {
          super(e, t),
            (this.projectId = e),
            (this.logger = t),
            i$(this, 'context', 'echo'),
            i$(this, 'registerDeviceToken', async (e) => {
              let { clientId: t, token: r, notificationType: i, enableEncrypted: s = !1 } = e,
                n = `https://echo.walletconnect.com/${this.projectId}/clients`;
              await fetch(n, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ client_id: t, type: i, token: r, always_raw: s }),
              });
            }),
            (this.logger = eo(t, this.context));
        }
      }
      var iz = Object.defineProperty,
        iF = Object.getOwnPropertySymbols,
        iH = Object.prototype.hasOwnProperty,
        iV = Object.prototype.propertyIsEnumerable,
        iK = (e, t, r) =>
          t in e
            ? iz(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        iG = (e, t) => {
          for (var r in t || (t = {})) iH.call(t, r) && iK(e, r, t[r]);
          if (iF) for (var r of iF(t)) iV.call(t, r) && iK(e, r, t[r]);
          return e;
        },
        iW = (e, t, r) => iK(e, 'symbol' != typeof t ? t + '' : t, r);
      class iY extends eD {
        constructor(e, t, r = !0) {
          super(e, t, r),
            (this.core = e),
            (this.logger = t),
            iW(this, 'context', 'event-client'),
            iW(this, 'storagePrefix', tt),
            iW(this, 'storageVersion', 0.1),
            iW(this, 'events', new Map()),
            iW(this, 'shouldPersist', !1),
            iW(this, 'init', async () => {
              if (!(0, eT.w8K)())
                try {
                  let e = {
                    eventId: (0, eT.gZm)(),
                    timestamp: Date.now(),
                    domain: this.getAppDomain(),
                    props: {
                      event: 'INIT',
                      type: '',
                      properties: {
                        client_id: await this.core.crypto.getClientId(),
                        user_agent: (0, eT.ojD)(
                          this.core.relayer.protocol,
                          this.core.relayer.version,
                          th
                        ),
                      },
                    },
                  };
                  await this.sendEvent([e]);
                } catch (e) {
                  this.logger.warn(e);
                }
            }),
            iW(this, 'createEvent', (e) => {
              let {
                  event: t = 'ERROR',
                  type: r = '',
                  properties: { topic: i, trace: s },
                } = e,
                n = (0, eT.gZm)(),
                o = this.core.projectId || '',
                a = iG(
                  {
                    eventId: n,
                    timestamp: Date.now(),
                    props: { event: t, type: r, properties: { topic: i, trace: s } },
                    bundleId: o,
                    domain: this.getAppDomain(),
                  },
                  this.setMethods(n)
                );
              return this.telemetryEnabled && (this.events.set(n, a), (this.shouldPersist = !0)), a;
            }),
            iW(this, 'getEvent', (e) => {
              let { eventId: t, topic: r } = e;
              if (t) return this.events.get(t);
              let i = Array.from(this.events.values()).find((e) => e.props.properties.topic === r);
              if (i) return iG(iG({}, i), this.setMethods(i.eventId));
            }),
            iW(this, 'deleteEvent', (e) => {
              let { eventId: t } = e;
              this.events.delete(t), (this.shouldPersist = !0);
            }),
            iW(this, 'setEventListeners', () => {
              this.core.heartbeat.on(h.pulse, async () => {
                this.shouldPersist && (await this.persist()),
                  this.events.forEach((e) => {
                    (0, o.fromMiliseconds)(Date.now()) - (0, o.fromMiliseconds)(e.timestamp) >
                      86400 && (this.events.delete(e.eventId), (this.shouldPersist = !0));
                  });
              });
            }),
            iW(this, 'setMethods', (e) => ({
              addTrace: (t) => this.addTrace(e, t),
              setError: (t) => this.setError(e, t),
            })),
            iW(this, 'addTrace', (e, t) => {
              let r = this.events.get(e);
              r &&
                (r.props.properties.trace.push(t),
                this.events.set(e, r),
                (this.shouldPersist = !0));
            }),
            iW(this, 'setError', (e, t) => {
              let r = this.events.get(e);
              r &&
                ((r.props.type = t),
                (r.timestamp = Date.now()),
                this.events.set(e, r),
                (this.shouldPersist = !0));
            }),
            iW(this, 'persist', async () => {
              await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())),
                (this.shouldPersist = !1);
            }),
            iW(this, 'restore', async () => {
              try {
                let e = (await this.core.storage.getItem(this.storageKey)) || [];
                if (!e.length) return;
                e.forEach((e) => {
                  this.events.set(e.eventId, iG(iG({}, e), this.setMethods(e.eventId)));
                });
              } catch (e) {
                this.logger.warn(e);
              }
            }),
            iW(this, 'submit', async () => {
              if (!this.telemetryEnabled || 0 === this.events.size) return;
              let e = [];
              for (let [t, r] of this.events) r.props.type && e.push(r);
              if (0 !== e.length)
                try {
                  if ((await this.sendEvent(e)).ok)
                    for (let t of e) this.events.delete(t.eventId), (this.shouldPersist = !0);
                } catch (e) {
                  this.logger.warn(e);
                }
            }),
            iW(this, 'sendEvent', async (e) => {
              let t = this.getAppDomain() ? '' : '&sp=desktop';
              return await fetch(
                `https://pulse.walletconnect.org/batch?projectId=${this.core.projectId}&st=events_sdk&sv=js-${th}${t}`,
                { method: 'POST', body: JSON.stringify(e) }
              );
            }),
            iW(this, 'getAppDomain', () => (0, eT.lFF)().url),
            (this.logger = eo(t, this.context)),
            (this.telemetryEnabled = r),
            r
              ? this.restore().then(async () => {
                  await this.submit(), this.setEventListeners();
                })
              : this.persist();
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.storageVersion +
            this.core.customStoragePrefix +
            '//' +
            this.context
          );
        }
      }
      var iZ = Object.defineProperty,
        iJ = Object.getOwnPropertySymbols,
        iQ = Object.prototype.hasOwnProperty,
        iX = Object.prototype.propertyIsEnumerable,
        i0 = (e, t, r) =>
          t in e
            ? iZ(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        i1 = (e, t) => {
          for (var r in t || (t = {})) iQ.call(t, r) && i0(e, r, t[r]);
          if (iJ) for (var r of iJ(t)) iX.call(t, r) && i0(e, r, t[r]);
          return e;
        },
        i2 = (e, t, r) => i0(e, 'symbol' != typeof t ? t + '' : t, r);
      class i8 extends eh {
        constructor(e) {
          var t;
          super(e),
            i2(this, 'protocol', 'wc'),
            i2(this, 'version', 2),
            i2(this, 'name', te),
            i2(this, 'relayUrl'),
            i2(this, 'projectId'),
            i2(this, 'customStoragePrefix'),
            i2(this, 'events', new s.EventEmitter()),
            i2(this, 'logger'),
            i2(this, 'heartbeat'),
            i2(this, 'relayer'),
            i2(this, 'crypto'),
            i2(this, 'storage'),
            i2(this, 'history'),
            i2(this, 'expirer'),
            i2(this, 'pairing'),
            i2(this, 'verify'),
            i2(this, 'echoClient'),
            i2(this, 'linkModeSupportedApps'),
            i2(this, 'eventClient'),
            i2(this, 'initialized', !1),
            i2(this, 'logChunkController'),
            i2(this, 'on', (e, t) => this.events.on(e, t)),
            i2(this, 'once', (e, t) => this.events.once(e, t)),
            i2(this, 'off', (e, t) => this.events.off(e, t)),
            i2(this, 'removeListener', (e, t) => this.events.removeListener(e, t)),
            i2(this, 'dispatchEnvelope', ({ topic: e, message: t, sessionExists: r }) => {
              if (!e || !t) return;
              let i = {
                topic: e,
                message: t,
                publishedAt: Date.now(),
                transportType: tu.link_mode,
              };
              this.relayer.onLinkMessageEvent(i, { sessionExists: r });
            });
          let r = this.getGlobalCore(e?.customStoragePrefix);
          if (r)
            try {
              return (
                (this.customStoragePrefix = r.customStoragePrefix),
                (this.logger = r.logger),
                (this.heartbeat = r.heartbeat),
                (this.crypto = r.crypto),
                (this.history = r.history),
                (this.expirer = r.expirer),
                (this.storage = r.storage),
                (this.relayer = r.relayer),
                (this.pairing = r.pairing),
                (this.verify = r.verify),
                (this.echoClient = r.echoClient),
                (this.linkModeSupportedApps = r.linkModeSupportedApps),
                (this.eventClient = r.eventClient),
                (this.initialized = r.initialized),
                (this.logChunkController = r.logChunkController),
                r
              );
            } catch (e) {
              console.warn('Failed to copy global core', e);
            }
          (this.projectId = e?.projectId),
            (this.relayUrl = e?.relayUrl || ta),
            (this.customStoragePrefix =
              null != e && e.customStoragePrefix ? `:${e.customStoragePrefix}` : '');
          let { logger: i, chunkLoggerController: n } = (function (e) {
            return 'u' > typeof e.loggerOverride && 'string' != typeof e.loggerOverride
              ? { logger: e.loggerOverride, chunkLoggerController: null }
              : 'u' > typeof window
                ? (function (e) {
                    var t, r;
                    let i = new G(null == (t = e.opts) ? void 0 : t.level, e.maxSizeInBytes);
                    return {
                      logger: M()(
                        ei(er({}, e.opts), {
                          level: 'trace',
                          browser: ei(er({}, null == (r = e.opts) ? void 0 : r.browser), {
                            write: (e) => i.write(e),
                          }),
                        })
                      ),
                      chunkLoggerController: i,
                    };
                  })(e)
                : (function (e) {
                    var t;
                    let r = new W(null == (t = e.opts) ? void 0 : t.level, e.maxSizeInBytes);
                    return {
                      logger: M()(ei(er({}, e.opts), { level: 'trace' }), r),
                      chunkLoggerController: r,
                    };
                  })(e);
          })({
            opts: es({
              level: 'string' == typeof e?.logger && e.logger ? e.logger : tr.logger,
              name: te,
            }),
            maxSizeInBytes: e?.maxLogBlobSizeInBytes,
            loggerOverride: e?.logger,
          });
          (this.logChunkController = n),
            null != (t = this.logChunkController) &&
              t.downloadLogsBlobInBrowser &&
              (window.downloadLogsBlobInBrowser = async () => {
                var e, t;
                null != (e = this.logChunkController) &&
                  e.downloadLogsBlobInBrowser &&
                  (null == (t = this.logChunkController) ||
                    t.downloadLogsBlobInBrowser({ clientId: await this.crypto.getClientId() }));
              }),
            (this.logger = eo(i, this.name)),
            (this.heartbeat = new u()),
            (this.crypto = new rD(this, this.logger, e?.keychain)),
            (this.history = new iA(this, this.logger)),
            (this.expirer = new iR(this, this.logger)),
            (this.storage =
              null != e && e.storage ? e.storage : new q(i1(i1({}, ti), e?.storageOptions))),
            (this.relayer = new io({
              core: this,
              logger: this.logger,
              relayUrl: this.relayUrl,
              projectId: this.projectId,
            })),
            (this.pairing = new ix(this, this.logger)),
            (this.verify = new iU(this, this.logger, this.storage)),
            (this.echoClient = new iM(this.projectId || '', this.logger)),
            (this.linkModeSupportedApps = []),
            (this.eventClient = new iY(this, this.logger, e?.telemetryEnabled)),
            this.setGlobalCore(this);
        }
        static async init(e) {
          let t = new i8(e);
          await t.initialize();
          let r = await t.crypto.getClientId();
          return await t.storage.setItem('WALLETCONNECT_CLIENT_ID', r), t;
        }
        get context() {
          return en(this.logger);
        }
        async start() {
          this.initialized || (await this.initialize());
        }
        async getLogsBlob() {
          var e;
          return null == (e = this.logChunkController)
            ? void 0
            : e.logsToBlob({ clientId: await this.crypto.getClientId() });
        }
        async addLinkModeSupportedApp(e) {
          this.linkModeSupportedApps.includes(e) ||
            (this.linkModeSupportedApps.push(e),
            await this.storage.setItem(tp, this.linkModeSupportedApps));
        }
        async initialize() {
          this.logger.trace('Initialized');
          try {
            await this.crypto.init(),
              await this.history.init(),
              await this.expirer.init(),
              await this.relayer.init(),
              await this.heartbeat.init(),
              await this.pairing.init(),
              (this.linkModeSupportedApps = (await this.storage.getItem(tp)) || []),
              (this.initialized = !0),
              this.logger.info('Core Initialization Success');
          } catch (e) {
            throw (
              (this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e),
              this.logger.error(e.message),
              e)
            );
          }
        }
        getGlobalCore(e = '') {
          try {
            if (this.isGlobalCoreDisabled()) return;
            let t = `_walletConnectCore_${e}`,
              r = `${t}_count`;
            return (
              (globalThis[r] = (globalThis[r] || 0) + 1),
              globalThis[r] > 1 &&
                console.warn(
                  `WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ${globalThis[r]} times.`
                ),
              globalThis[t]
            );
          } catch (e) {
            console.warn('Failed to get global WalletConnect core', e);
            return;
          }
        }
        setGlobalCore(e) {
          var t;
          try {
            if (this.isGlobalCoreDisabled()) return;
            let r = `_walletConnectCore_${(null == (t = e.opts) ? void 0 : t.customStoragePrefix) || ''}`;
            globalThis[r] = e;
          } catch (e) {
            console.warn('Failed to set global WalletConnect core', e);
          }
        }
        isGlobalCoreDisabled() {
          try {
            return 'u' > typeof e7 && 'true' === e7.env.DISABLE_GLOBAL_CORE;
          } catch {
            return !0;
          }
        }
      }
      let i3 = 'client',
        i5 = `wc@2:${i3}:`,
        i6 = { name: i3, logger: 'error' },
        i4 = 'WALLETCONNECT_DEEPLINK_CHOICE',
        i9 = 'Proposal expired',
        i7 = o.SEVEN_DAYS,
        se = {
          wc_sessionPropose: {
            req: { ttl: o.FIVE_MINUTES, prompt: !0, tag: 1100 },
            res: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1101 },
            reject: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1120 },
            autoReject: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1121 },
          },
          wc_sessionSettle: {
            req: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1102 },
            res: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1103 },
          },
          wc_sessionUpdate: {
            req: { ttl: o.ONE_DAY, prompt: !1, tag: 1104 },
            res: { ttl: o.ONE_DAY, prompt: !1, tag: 1105 },
          },
          wc_sessionExtend: {
            req: { ttl: o.ONE_DAY, prompt: !1, tag: 1106 },
            res: { ttl: o.ONE_DAY, prompt: !1, tag: 1107 },
          },
          wc_sessionRequest: {
            req: { ttl: o.FIVE_MINUTES, prompt: !0, tag: 1108 },
            res: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1109 },
          },
          wc_sessionEvent: {
            req: { ttl: o.FIVE_MINUTES, prompt: !0, tag: 1110 },
            res: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1111 },
          },
          wc_sessionDelete: {
            req: { ttl: o.ONE_DAY, prompt: !1, tag: 1112 },
            res: { ttl: o.ONE_DAY, prompt: !1, tag: 1113 },
          },
          wc_sessionPing: {
            req: { ttl: o.ONE_DAY, prompt: !1, tag: 1114 },
            res: { ttl: o.ONE_DAY, prompt: !1, tag: 1115 },
          },
          wc_sessionAuthenticate: {
            req: { ttl: o.ONE_HOUR, prompt: !0, tag: 1116 },
            res: { ttl: o.ONE_HOUR, prompt: !1, tag: 1117 },
            reject: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1118 },
            autoReject: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1119 },
          },
        },
        st = { min: o.FIVE_MINUTES, max: o.SEVEN_DAYS },
        sr = { idle: 'IDLE', active: 'ACTIVE' },
        si = {
          eth_sendTransaction: { key: '' },
          eth_sendRawTransaction: { key: '' },
          wallet_sendCalls: { key: '' },
          solana_signTransaction: { key: 'signature' },
          solana_signAllTransactions: { key: 'transactions' },
          solana_signAndSendTransaction: { key: 'signature' },
        },
        ss = ['wc_sessionPropose', 'wc_sessionRequest', 'wc_authRequest', 'wc_sessionAuthenticate'],
        sn = 'wc@1.5:auth:',
        so = `${sn}:PUB_KEY`;
      var sa = Object.defineProperty,
        sc = Object.defineProperties,
        sl = Object.getOwnPropertyDescriptors,
        sh = Object.getOwnPropertySymbols,
        su = Object.prototype.hasOwnProperty,
        sd = Object.prototype.propertyIsEnumerable,
        sp = (e, t, r) =>
          t in e
            ? sa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        sf = (e, t) => {
          for (var r in t || (t = {})) su.call(t, r) && sp(e, r, t[r]);
          if (sh) for (var r of sh(t)) sd.call(t, r) && sp(e, r, t[r]);
          return e;
        },
        sg = (e, t) => sc(e, sl(t)),
        sy = (e, t, r) => sp(e, 'symbol' != typeof t ? t + '' : t, r);
      class sm extends eA {
        constructor(e) {
          super(e),
            sy(this, 'name', 'engine'),
            sy(this, 'events', new (n())()),
            sy(this, 'initialized', !1),
            sy(this, 'requestQueue', { state: sr.idle, queue: [] }),
            sy(this, 'sessionRequestQueue', { state: sr.idle, queue: [] }),
            sy(this, 'requestQueueDelay', o.ONE_SECOND),
            sy(this, 'expectedPairingMethodMap', new Map()),
            sy(this, 'recentlyDeletedMap', new Map()),
            sy(this, 'recentlyDeletedLimit', 200),
            sy(this, 'relayMessageCache', []),
            sy(this, 'pendingSessions', new Map()),
            sy(this, 'init', async () => {
              this.initialized ||
                (await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                this.registerPairingEvents(),
                await this.registerLinkModeListeners(),
                this.client.core.pairing.register({ methods: Object.keys(se) }),
                (this.initialized = !0),
                setTimeout(
                  async () => {
                    await this.processPendingMessageEvents(),
                      (this.sessionRequestQueue.queue = this.getPendingSessionRequests()),
                      this.processSessionRequestQueue();
                  },
                  (0, o.toMiliseconds)(this.requestQueueDelay)
                ));
            }),
            sy(this, 'connect', async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              let t = sg(sf({}, e), {
                requiredNamespaces: e.requiredNamespaces || {},
                optionalNamespaces: e.optionalNamespaces || {},
              });
              await this.isValidConnect(t);
              let {
                  pairingTopic: r,
                  requiredNamespaces: i,
                  optionalNamespaces: s,
                  sessionProperties: n,
                  scopedProperties: a,
                  relays: c,
                } = t,
                l = r,
                h,
                u = !1;
              try {
                if (l) {
                  let e = this.client.core.pairing.pairings.get(l);
                  this.client.logger.warn(
                    'connect() with existing pairing topic is deprecated and will be removed in the next major release.'
                  ),
                    (u = e.active);
                }
              } catch (e) {
                throw (this.client.logger.error(`connect() -> pairing.get(${l}) failed`), e);
              }
              if (!l || !u) {
                let { topic: e, uri: t } = await this.client.core.pairing.create();
                (l = e), (h = t);
              }
              if (!l) {
                let { message: e } = (0, eT.GuA)(
                  'NO_MATCHING_KEY',
                  `connect() pairing topic: ${l}`
                );
                throw Error(e);
              }
              let d = await this.client.core.crypto.generateKeyPair(),
                p = se.wc_sessionPropose.req.ttl || o.FIVE_MINUTES,
                f = (0, eT.Xw0)(p),
                g = sg(
                  sf(
                    sf(
                      {
                        requiredNamespaces: i,
                        optionalNamespaces: s,
                        relays: c ?? [{ protocol: 'irn' }],
                        proposer: { publicKey: d, metadata: this.client.metadata },
                        expiryTimestamp: f,
                        pairingTopic: l,
                      },
                      n && { sessionProperties: n }
                    ),
                    a && { scopedProperties: a }
                  ),
                  { id: e$() }
                ),
                y = (0, eT.hEn)('session_connect', g.id),
                { reject: m, resolve: b, done: w } = (0, eT.Wx8)(p, i9),
                v = ({ id: e }) => {
                  e === g.id &&
                    (this.client.events.off('proposal_expire', v),
                    this.pendingSessions.delete(g.id),
                    this.events.emit(y, { error: { message: i9, code: 0 } }));
                };
              return (
                this.client.events.on('proposal_expire', v),
                this.events.once(y, ({ error: e, session: t }) => {
                  this.client.events.off('proposal_expire', v), e ? m(e) : t && b(t);
                }),
                await this.sendRequest({
                  topic: l,
                  method: 'wc_sessionPropose',
                  params: g,
                  throwOnFailedPublish: !0,
                  clientRpcId: g.id,
                }),
                await this.setProposal(g.id, g),
                { uri: h, approval: w }
              );
            }),
            sy(this, 'pair', async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                return await this.client.core.pairing.pair(e);
              } catch (e) {
                throw (this.client.logger.error('pair() failed'), e);
              }
            }),
            sy(this, 'approve', async (e) => {
              var t, r, i;
              let s = this.client.core.eventClient.createEvent({
                properties: {
                  topic: null == (t = e?.id) ? void 0 : t.toString(),
                  trace: [tD.session_approve_started],
                },
              });
              try {
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
              } catch (e) {
                throw (s.setError(tx.no_internet_connection), e);
              }
              try {
                await this.isValidProposalId(e?.id);
              } catch (t) {
                throw (
                  (this.client.logger.error(`approve() -> proposal.get(${e?.id}) failed`),
                  s.setError(tx.proposal_not_found),
                  t)
                );
              }
              try {
                await this.isValidApprove(e);
              } catch (e) {
                throw (
                  (this.client.logger.error('approve() -> isValidApprove() failed'),
                  s.setError(tx.session_approve_namespace_validation_failure),
                  e)
                );
              }
              let {
                  id: n,
                  relayProtocol: o,
                  namespaces: a,
                  sessionProperties: c,
                  scopedProperties: l,
                  sessionConfig: h,
                } = e,
                u = this.client.proposal.get(n);
              this.client.core.eventClient.deleteEvent({ eventId: s.eventId });
              let {
                  pairingTopic: d,
                  proposer: p,
                  requiredNamespaces: f,
                  optionalNamespaces: g,
                } = u,
                y = null == (r = this.client.core.eventClient) ? void 0 : r.getEvent({ topic: d });
              y ||
                (y =
                  null == (i = this.client.core.eventClient)
                    ? void 0
                    : i.createEvent({
                        type: tD.session_approve_started,
                        properties: {
                          topic: d,
                          trace: [
                            tD.session_approve_started,
                            tD.session_namespaces_validation_success,
                          ],
                        },
                      }));
              let m = await this.client.core.crypto.generateKeyPair(),
                b = p.publicKey,
                w = await this.client.core.crypto.generateSharedKey(m, b),
                v = sf(
                  sf(
                    sf(
                      {
                        relay: { protocol: o ?? 'irn' },
                        namespaces: a,
                        controller: { publicKey: m, metadata: this.client.metadata },
                        expiry: (0, eT.Xw0)(i7),
                      },
                      c && { sessionProperties: c }
                    ),
                    l && { scopedProperties: l }
                  ),
                  h && { sessionConfig: h }
                ),
                E = tu.relay;
              y.addTrace(tD.subscribing_session_topic);
              try {
                await this.client.core.relayer.subscribe(w, { transportType: E });
              } catch (e) {
                throw (y.setError(tx.subscribe_session_topic_failure), e);
              }
              y.addTrace(tD.subscribe_session_topic_success);
              let _ = sg(sf({}, v), {
                topic: w,
                requiredNamespaces: f,
                optionalNamespaces: g,
                pairingTopic: d,
                acknowledged: !1,
                self: v.controller,
                peer: { publicKey: p.publicKey, metadata: p.metadata },
                controller: m,
                transportType: tu.relay,
              });
              await this.client.session.set(w, _), y.addTrace(tD.store_session);
              try {
                y.addTrace(tD.publishing_session_settle),
                  await this.sendRequest({
                    topic: w,
                    method: 'wc_sessionSettle',
                    params: v,
                    throwOnFailedPublish: !0,
                  }).catch((e) => {
                    throw (y?.setError(tx.session_settle_publish_failure), e);
                  }),
                  y.addTrace(tD.session_settle_publish_success),
                  y.addTrace(tD.publishing_session_approve),
                  await this.sendResult({
                    id: n,
                    topic: d,
                    result: { relay: { protocol: o ?? 'irn' }, responderPublicKey: m },
                    throwOnFailedPublish: !0,
                  }).catch((e) => {
                    throw (y?.setError(tx.session_approve_publish_failure), e);
                  }),
                  y.addTrace(tD.session_approve_publish_success);
              } catch (e) {
                throw (
                  (this.client.logger.error(e),
                  this.client.session.delete(w, (0, eT.Hjj)('USER_DISCONNECTED')),
                  await this.client.core.relayer.unsubscribe(w),
                  e)
                );
              }
              return (
                this.client.core.eventClient.deleteEvent({ eventId: y.eventId }),
                await this.client.core.pairing.updateMetadata({ topic: d, metadata: p.metadata }),
                await this.client.proposal.delete(n, (0, eT.Hjj)('USER_DISCONNECTED')),
                await this.client.core.pairing.activate({ topic: d }),
                await this.setExpiry(w, (0, eT.Xw0)(i7)),
                { topic: w, acknowledged: () => Promise.resolve(this.client.session.get(w)) }
              );
            }),
            sy(this, 'reject', async (e) => {
              let t;
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidReject(e);
              } catch (e) {
                throw (this.client.logger.error('reject() -> isValidReject() failed'), e);
              }
              let { id: r, reason: i } = e;
              try {
                t = this.client.proposal.get(r).pairingTopic;
              } catch (e) {
                throw (this.client.logger.error(`reject() -> proposal.get(${r}) failed`), e);
              }
              t &&
                (await this.sendError({
                  id: r,
                  topic: t,
                  error: i,
                  rpcOpts: se.wc_sessionPropose.reject,
                }),
                await this.client.proposal.delete(r, (0, eT.Hjj)('USER_DISCONNECTED')));
            }),
            sy(this, 'update', async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidUpdate(e);
              } catch (e) {
                throw (this.client.logger.error('update() -> isValidUpdate() failed'), e);
              }
              let { topic: t, namespaces: r } = e,
                { done: i, resolve: s, reject: n } = (0, eT.Wx8)(),
                o = e$(),
                a = eM().toString(),
                c = this.client.session.get(t).namespaces;
              return (
                this.events.once((0, eT.hEn)('session_update', o), ({ error: e }) => {
                  e ? n(e) : s();
                }),
                await this.client.session.update(t, { namespaces: r }),
                await this.sendRequest({
                  topic: t,
                  method: 'wc_sessionUpdate',
                  params: { namespaces: r },
                  throwOnFailedPublish: !0,
                  clientRpcId: o,
                  relayRpcId: a,
                }).catch((e) => {
                  this.client.logger.error(e),
                    this.client.session.update(t, { namespaces: c }),
                    n(e);
                }),
                { acknowledged: i }
              );
            }),
            sy(this, 'extend', async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidExtend(e);
              } catch (e) {
                throw (this.client.logger.error('extend() -> isValidExtend() failed'), e);
              }
              let { topic: t } = e,
                r = e$(),
                { done: i, resolve: s, reject: n } = (0, eT.Wx8)();
              return (
                this.events.once((0, eT.hEn)('session_extend', r), ({ error: e }) => {
                  e ? n(e) : s();
                }),
                await this.setExpiry(t, (0, eT.Xw0)(i7)),
                this.sendRequest({
                  topic: t,
                  method: 'wc_sessionExtend',
                  params: {},
                  clientRpcId: r,
                  throwOnFailedPublish: !0,
                }).catch((e) => {
                  n(e);
                }),
                { acknowledged: i }
              );
            }),
            sy(this, 'request', async (e) => {
              this.isInitialized();
              try {
                await this.isValidRequest(e);
              } catch (e) {
                throw (this.client.logger.error('request() -> isValidRequest() failed'), e);
              }
              let {
                  chainId: t,
                  request: r,
                  topic: i,
                  expiry: s = se.wc_sessionRequest.req.ttl,
                } = e,
                n = this.client.session.get(i);
              n?.transportType === tu.relay && (await this.confirmOnlineStateOrThrow());
              let o = e$(),
                a = eM().toString(),
                {
                  done: c,
                  resolve: l,
                  reject: h,
                } = (0, eT.Wx8)(s, 'Request expired. Please try again.');
              this.events.once((0, eT.hEn)('session_request', o), ({ error: e, result: t }) => {
                e ? h(e) : l(t);
              });
              let u = 'wc_sessionRequest',
                d = this.getAppLinkIfEnabled(n.peer.metadata, n.transportType);
              if (d)
                return (
                  await this.sendRequest({
                    clientRpcId: o,
                    relayRpcId: a,
                    topic: i,
                    method: u,
                    params: {
                      request: sg(sf({}, r), { expiryTimestamp: (0, eT.Xw0)(s) }),
                      chainId: t,
                    },
                    expiry: s,
                    throwOnFailedPublish: !0,
                    appLink: d,
                  }).catch((e) => h(e)),
                  this.client.events.emit('session_request_sent', {
                    topic: i,
                    request: r,
                    chainId: t,
                    id: o,
                  }),
                  await c()
                );
              let p = { request: sg(sf({}, r), { expiryTimestamp: (0, eT.Xw0)(s) }), chainId: t },
                f = this.shouldSetTVF(u, p);
              return await Promise.all([
                new Promise(async (e) => {
                  await this.sendRequest(
                    sf(
                      {
                        clientRpcId: o,
                        relayRpcId: a,
                        topic: i,
                        method: u,
                        params: p,
                        expiry: s,
                        throwOnFailedPublish: !0,
                      },
                      f && { tvf: this.getTVFParams(o, p) }
                    )
                  ).catch((e) => h(e)),
                    this.client.events.emit('session_request_sent', {
                      topic: i,
                      request: r,
                      chainId: t,
                      id: o,
                    }),
                    e();
                }),
                new Promise(async (e) => {
                  var t;
                  if (!(null != (t = n.sessionConfig) && t.disableDeepLink)) {
                    let e = await (0, eT.jTh)(this.client.core.storage, i4);
                    await (0, eT.n3s)({ id: o, topic: i, wcDeepLink: e });
                  }
                  e();
                }),
                c(),
              ]).then((e) => e[2]);
            }),
            sy(this, 'respond', async (e) => {
              this.isInitialized(), await this.isValidRespond(e);
              let { topic: t, response: r } = e,
                { id: i } = r,
                s = this.client.session.get(t);
              s.transportType === tu.relay && (await this.confirmOnlineStateOrThrow());
              let n = this.getAppLinkIfEnabled(s.peer.metadata, s.transportType);
              e0(r)
                ? await this.sendResult({
                    id: i,
                    topic: t,
                    result: r.result,
                    throwOnFailedPublish: !0,
                    appLink: n,
                  })
                : e1(r) && (await this.sendError({ id: i, topic: t, error: r.error, appLink: n })),
                this.cleanupAfterResponse(e);
            }),
            sy(this, 'ping', async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidPing(e);
              } catch (e) {
                throw (this.client.logger.error('ping() -> isValidPing() failed'), e);
              }
              let { topic: t } = e;
              if (this.client.session.keys.includes(t)) {
                let e = e$(),
                  r = eM().toString(),
                  { done: i, resolve: s, reject: n } = (0, eT.Wx8)();
                this.events.once((0, eT.hEn)('session_ping', e), ({ error: e }) => {
                  e ? n(e) : s();
                }),
                  await Promise.all([
                    this.sendRequest({
                      topic: t,
                      method: 'wc_sessionPing',
                      params: {},
                      throwOnFailedPublish: !0,
                      clientRpcId: e,
                      relayRpcId: r,
                    }),
                    i(),
                  ]);
              } else
                this.client.core.pairing.pairings.keys.includes(t) &&
                  (this.client.logger.warn(
                    'ping() on pairing topic is deprecated and will be removed in the next major release.'
                  ),
                  await this.client.core.pairing.ping({ topic: t }));
            }),
            sy(this, 'emit', async (e) => {
              this.isInitialized(),
                await this.confirmOnlineStateOrThrow(),
                await this.isValidEmit(e);
              let { topic: t, event: r, chainId: i } = e,
                s = eM().toString(),
                n = e$();
              await this.sendRequest({
                topic: t,
                method: 'wc_sessionEvent',
                params: { event: r, chainId: i },
                throwOnFailedPublish: !0,
                relayRpcId: s,
                clientRpcId: n,
              });
            }),
            sy(this, 'disconnect', async (e) => {
              this.isInitialized(),
                await this.confirmOnlineStateOrThrow(),
                await this.isValidDisconnect(e);
              let { topic: t } = e;
              if (this.client.session.keys.includes(t))
                await this.sendRequest({
                  topic: t,
                  method: 'wc_sessionDelete',
                  params: (0, eT.Hjj)('USER_DISCONNECTED'),
                  throwOnFailedPublish: !0,
                }),
                  await this.deleteSession({ topic: t, emitEvent: !1 });
              else if (this.client.core.pairing.pairings.keys.includes(t))
                await this.client.core.pairing.disconnect({ topic: t });
              else {
                let { message: e } = (0, eT.GuA)(
                  'MISMATCHED_TOPIC',
                  `Session or pairing topic not found: ${t}`
                );
                throw Error(e);
              }
            }),
            sy(
              this,
              'find',
              (e) => (
                this.isInitialized(), this.client.session.getAll().filter((t) => (0, eT.HNf)(t, e))
              )
            ),
            sy(this, 'getPendingSessionRequests', () => this.client.pendingRequest.getAll()),
            sy(this, 'authenticate', async (e, t) => {
              var r;
              let i;
              this.isInitialized(), this.isValidAuthenticate(e);
              let s =
                  t &&
                  this.client.core.linkModeSupportedApps.includes(t) &&
                  (null == (r = this.client.metadata.redirect) ? void 0 : r.linkMode),
                n = s ? tu.link_mode : tu.relay;
              n === tu.relay && (await this.confirmOnlineStateOrThrow());
              let {
                  chains: o,
                  statement: a = '',
                  uri: c,
                  domain: l,
                  nonce: h,
                  type: u,
                  exp: d,
                  nbf: p,
                  methods: f = [],
                  expiry: g,
                } = e,
                y = [...(e.resources || [])],
                { topic: m, uri: b } = await this.client.core.pairing.create({
                  methods: ['wc_sessionAuthenticate'],
                  transportType: n,
                });
              this.client.logger.info({
                message: 'Generated new pairing',
                pairing: { topic: m, uri: b },
              });
              let w = await this.client.core.crypto.generateKeyPair(),
                v = (0, eT.EN$)(w);
              if (
                (await Promise.all([
                  this.client.auth.authKeys.set(so, { responseTopic: v, publicKey: w }),
                  this.client.auth.pairingTopics.set(v, { topic: v, pairingTopic: m }),
                ]),
                await this.client.core.relayer.subscribe(v, { transportType: n }),
                this.client.logger.info(`sending request to new pairing topic: ${m}`),
                f.length > 0)
              ) {
                let { namespace: e } = (0, eT._Yb)(o[0]),
                  t = (0, eT.e8_)(e, 'request', f);
                (0, eT.VBM)(y) && (t = (0, eT.hVC)(t, y.pop())), y.push(t);
              }
              let E =
                  g && g > se.wc_sessionAuthenticate.req.ttl
                    ? g
                    : se.wc_sessionAuthenticate.req.ttl,
                _ = {
                  authPayload: {
                    type: u ?? 'caip122',
                    chains: o,
                    statement: a,
                    aud: c,
                    domain: l,
                    version: '1',
                    nonce: h,
                    iat: new Date().toISOString(),
                    exp: d,
                    nbf: p,
                    resources: y,
                  },
                  requester: { publicKey: w, metadata: this.client.metadata },
                  expiryTimestamp: (0, eT.Xw0)(E),
                },
                I = {
                  requiredNamespaces: {},
                  optionalNamespaces: {
                    eip155: {
                      chains: o,
                      methods: [...new Set(['personal_sign', ...f])],
                      events: ['chainChanged', 'accountsChanged'],
                    },
                  },
                  relays: [{ protocol: 'irn' }],
                  pairingTopic: m,
                  proposer: { publicKey: w, metadata: this.client.metadata },
                  expiryTimestamp: (0, eT.Xw0)(se.wc_sessionPropose.req.ttl),
                  id: e$(),
                },
                { done: D, resolve: x, reject: P } = (0, eT.Wx8)(E, 'Request expired'),
                S = e$(),
                O = (0, eT.hEn)('session_connect', I.id),
                A = (0, eT.hEn)('session_request', S),
                C = async ({ error: e, session: t }) => {
                  this.events.off(A, T), e ? P(e) : t && x({ session: t });
                },
                T = async (e) => {
                  var r, i, s;
                  let o;
                  if (
                    (await this.deletePendingAuthRequest(S, { message: 'fulfilled', code: 0 }),
                    e.error)
                  ) {
                    let t = (0, eT.Hjj)('WC_METHOD_UNSUPPORTED', 'wc_sessionAuthenticate');
                    return e.error.code === t.code
                      ? void 0
                      : (this.events.off(O, C), P(e.error.message));
                  }
                  await this.deleteProposal(I.id), this.events.off(O, C);
                  let { cacaos: a, responder: c } = e.result,
                    l = [],
                    h = [];
                  for (let e of a) {
                    (await (0, eT.IjX)({ cacao: e, projectId: this.client.core.projectId })) ||
                      (this.client.logger.error(e, 'Signature verification failed'),
                      P((0, eT.Hjj)('SESSION_SETTLEMENT_FAILED', 'Signature verification failed')));
                    let { p: t } = e,
                      r = (0, eT.VBM)(t.resources),
                      i = [(0, eT.xkc)(t.iss)],
                      s = (0, eT.q_h)(t.iss);
                    if (r) {
                      let e = (0, eT.sc_)(r),
                        t = (0, eT.WWN)(r);
                      l.push(...e), i.push(...t);
                    }
                    for (let e of i) h.push(`${e}:${s}`);
                  }
                  let u = await this.client.core.crypto.generateSharedKey(w, c.publicKey);
                  l.length > 0 &&
                    ((o = {
                      topic: u,
                      acknowledged: !0,
                      self: { publicKey: w, metadata: this.client.metadata },
                      peer: c,
                      controller: c.publicKey,
                      expiry: (0, eT.Xw0)(i7),
                      requiredNamespaces: {},
                      optionalNamespaces: {},
                      relay: { protocol: 'irn' },
                      pairingTopic: m,
                      namespaces: (0, eT.Van)([...new Set(l)], [...new Set(h)]),
                      transportType: n,
                    }),
                    await this.client.core.relayer.subscribe(u, { transportType: n }),
                    await this.client.session.set(u, o),
                    m &&
                      (await this.client.core.pairing.updateMetadata({
                        topic: m,
                        metadata: c.metadata,
                      })),
                    (o = this.client.session.get(u))),
                    null != (r = this.client.metadata.redirect) &&
                      r.linkMode &&
                      null != (i = c.metadata.redirect) &&
                      i.linkMode &&
                      null != (s = c.metadata.redirect) &&
                      s.universal &&
                      t &&
                      (this.client.core.addLinkModeSupportedApp(c.metadata.redirect.universal),
                      this.client.session.update(u, { transportType: tu.link_mode })),
                    x({ auths: a, session: o });
                };
              this.events.once(O, C), this.events.once(A, T);
              try {
                if (s) {
                  let e = ez('wc_sessionAuthenticate', _, S);
                  this.client.core.history.set(m, e);
                  let r = await this.client.core.crypto.encode('', e, {
                    type: eT.EHS,
                    encoding: eT.Pa8,
                  });
                  i = (0, eT.$Bq)(t, m, r);
                } else
                  await Promise.all([
                    this.sendRequest({
                      topic: m,
                      method: 'wc_sessionAuthenticate',
                      params: _,
                      expiry: e.expiry,
                      throwOnFailedPublish: !0,
                      clientRpcId: S,
                    }),
                    this.sendRequest({
                      topic: m,
                      method: 'wc_sessionPropose',
                      params: I,
                      expiry: se.wc_sessionPropose.req.ttl,
                      throwOnFailedPublish: !0,
                      clientRpcId: I.id,
                    }),
                  ]);
              } catch (e) {
                throw (this.events.off(O, C), this.events.off(A, T), e);
              }
              return (
                await this.setProposal(I.id, I),
                await this.setAuthRequest(S, {
                  request: sg(sf({}, _), { verifyContext: {} }),
                  pairingTopic: m,
                  transportType: n,
                }),
                { uri: i ?? b, response: D }
              );
            }),
            sy(this, 'approveSessionAuthenticate', async (e) => {
              let t;
              let { id: r, auths: i } = e,
                s = this.client.core.eventClient.createEvent({
                  properties: {
                    topic: r.toString(),
                    trace: [tP.authenticated_session_approve_started],
                  },
                });
              try {
                this.isInitialized();
              } catch (e) {
                throw (s.setError(tS.no_internet_connection), e);
              }
              let n = this.getPendingAuthRequest(r);
              if (!n)
                throw (
                  (s.setError(tS.authenticated_session_pending_request_not_found),
                  Error(`Could not find pending auth request with id ${r}`))
                );
              let o = n.transportType || tu.relay;
              o === tu.relay && (await this.confirmOnlineStateOrThrow());
              let a = n.requester.publicKey,
                c = await this.client.core.crypto.generateKeyPair(),
                l = (0, eT.EN$)(a),
                h = { type: eT.Lp_, receiverPublicKey: a, senderPublicKey: c },
                u = [],
                d = [];
              for (let e of i) {
                if (!(await (0, eT.IjX)({ cacao: e, projectId: this.client.core.projectId }))) {
                  s.setError(tS.invalid_cacao);
                  let e = (0, eT.Hjj)('SESSION_SETTLEMENT_FAILED', 'Signature verification failed');
                  throw (
                    (await this.sendError({ id: r, topic: l, error: e, encodeOpts: h }),
                    Error(e.message))
                  );
                }
                s.addTrace(tP.cacaos_verified);
                let { p: t } = e,
                  i = (0, eT.VBM)(t.resources),
                  n = [(0, eT.xkc)(t.iss)],
                  o = (0, eT.q_h)(t.iss);
                if (i) {
                  let e = (0, eT.sc_)(i),
                    t = (0, eT.WWN)(i);
                  u.push(...e), n.push(...t);
                }
                for (let e of n) d.push(`${e}:${o}`);
              }
              let p = await this.client.core.crypto.generateSharedKey(c, a);
              if ((s.addTrace(tP.create_authenticated_session_topic), u?.length > 0)) {
                (t = {
                  topic: p,
                  acknowledged: !0,
                  self: { publicKey: c, metadata: this.client.metadata },
                  peer: { publicKey: a, metadata: n.requester.metadata },
                  controller: a,
                  expiry: (0, eT.Xw0)(i7),
                  authentication: i,
                  requiredNamespaces: {},
                  optionalNamespaces: {},
                  relay: { protocol: 'irn' },
                  pairingTopic: n.pairingTopic,
                  namespaces: (0, eT.Van)([...new Set(u)], [...new Set(d)]),
                  transportType: o,
                }),
                  s.addTrace(tP.subscribing_authenticated_session_topic);
                try {
                  await this.client.core.relayer.subscribe(p, { transportType: o });
                } catch (e) {
                  throw (s.setError(tS.subscribe_authenticated_session_topic_failure), e);
                }
                s.addTrace(tP.subscribe_authenticated_session_topic_success),
                  await this.client.session.set(p, t),
                  s.addTrace(tP.store_authenticated_session),
                  await this.client.core.pairing.updateMetadata({
                    topic: n.pairingTopic,
                    metadata: n.requester.metadata,
                  });
              }
              s.addTrace(tP.publishing_authenticated_session_approve);
              try {
                await this.sendResult({
                  topic: l,
                  id: r,
                  result: {
                    cacaos: i,
                    responder: { publicKey: c, metadata: this.client.metadata },
                  },
                  encodeOpts: h,
                  throwOnFailedPublish: !0,
                  appLink: this.getAppLinkIfEnabled(n.requester.metadata, o),
                });
              } catch (e) {
                throw (s.setError(tS.authenticated_session_approve_publish_failure), e);
              }
              return (
                await this.client.auth.requests.delete(r, { message: 'fulfilled', code: 0 }),
                await this.client.core.pairing.activate({ topic: n.pairingTopic }),
                this.client.core.eventClient.deleteEvent({ eventId: s.eventId }),
                { session: t }
              );
            }),
            sy(this, 'rejectSessionAuthenticate', async (e) => {
              this.isInitialized();
              let { id: t, reason: r } = e,
                i = this.getPendingAuthRequest(t);
              if (!i) throw Error(`Could not find pending auth request with id ${t}`);
              i.transportType === tu.relay && (await this.confirmOnlineStateOrThrow());
              let s = i.requester.publicKey,
                n = await this.client.core.crypto.generateKeyPair(),
                o = (0, eT.EN$)(s),
                a = { type: eT.Lp_, receiverPublicKey: s, senderPublicKey: n };
              await this.sendError({
                id: t,
                topic: o,
                error: r,
                encodeOpts: a,
                rpcOpts: se.wc_sessionAuthenticate.reject,
                appLink: this.getAppLinkIfEnabled(i.requester.metadata, i.transportType),
              }),
                await this.client.auth.requests.delete(t, { message: 'rejected', code: 0 }),
                await this.client.proposal.delete(t, (0, eT.Hjj)('USER_DISCONNECTED'));
            }),
            sy(this, 'formatAuthMessage', (e) => {
              this.isInitialized();
              let { request: t, iss: r } = e;
              return (0, eT.hwK)(t, r);
            }),
            sy(this, 'processRelayMessageCache', () => {
              setTimeout(async () => {
                if (0 !== this.relayMessageCache.length)
                  for (; this.relayMessageCache.length > 0; )
                    try {
                      let e = this.relayMessageCache.shift();
                      e && (await this.onRelayMessage(e));
                    } catch (e) {
                      this.client.logger.error(e);
                    }
              }, 50);
            }),
            sy(this, 'cleanupDuplicatePairings', async (e) => {
              if (e.pairingTopic)
                try {
                  let t = this.client.core.pairing.pairings.get(e.pairingTopic),
                    r = this.client.core.pairing.pairings.getAll().filter((r) => {
                      var i, s;
                      return (
                        (null == (i = r.peerMetadata) ? void 0 : i.url) &&
                        (null == (s = r.peerMetadata) ? void 0 : s.url) === e.peer.metadata.url &&
                        r.topic &&
                        r.topic !== t.topic
                      );
                    });
                  if (0 === r.length) return;
                  this.client.logger.info(`Cleaning up ${r.length} duplicate pairing(s)`),
                    await Promise.all(
                      r.map((e) => this.client.core.pairing.disconnect({ topic: e.topic }))
                    ),
                    this.client.logger.info('Duplicate pairings clean up finished');
                } catch (e) {
                  this.client.logger.error(e);
                }
            }),
            sy(this, 'deleteSession', async (e) => {
              var t;
              let { topic: r, expirerHasDeleted: i = !1, emitEvent: s = !0, id: n = 0 } = e,
                { self: o } = this.client.session.get(r);
              await this.client.core.relayer.unsubscribe(r),
                await this.client.session.delete(r, (0, eT.Hjj)('USER_DISCONNECTED')),
                this.addToRecentlyDeleted(r, 'session'),
                this.client.core.crypto.keychain.has(o.publicKey) &&
                  (await this.client.core.crypto.deleteKeyPair(o.publicKey)),
                this.client.core.crypto.keychain.has(r) &&
                  (await this.client.core.crypto.deleteSymKey(r)),
                i || this.client.core.expirer.del(r),
                this.client.core.storage.removeItem(i4).catch((e) => this.client.logger.warn(e)),
                this.getPendingSessionRequests().forEach((e) => {
                  e.topic === r &&
                    this.deletePendingSessionRequest(e.id, (0, eT.Hjj)('USER_DISCONNECTED'));
                }),
                r === (null == (t = this.sessionRequestQueue.queue[0]) ? void 0 : t.topic) &&
                  (this.sessionRequestQueue.state = sr.idle),
                s && this.client.events.emit('session_delete', { id: n, topic: r });
            }),
            sy(this, 'deleteProposal', async (e, t) => {
              if (t)
                try {
                  let t = this.client.proposal.get(e),
                    r = this.client.core.eventClient.getEvent({ topic: t.pairingTopic });
                  r?.setError(tx.proposal_expired);
                } catch {}
              await Promise.all([
                this.client.proposal.delete(e, (0, eT.Hjj)('USER_DISCONNECTED')),
                t ? Promise.resolve() : this.client.core.expirer.del(e),
              ]),
                this.addToRecentlyDeleted(e, 'proposal');
            }),
            sy(this, 'deletePendingSessionRequest', async (e, t, r = !1) => {
              await Promise.all([
                this.client.pendingRequest.delete(e, t),
                r ? Promise.resolve() : this.client.core.expirer.del(e),
              ]),
                this.addToRecentlyDeleted(e, 'request'),
                (this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter(
                  (t) => t.id !== e
                )),
                r &&
                  ((this.sessionRequestQueue.state = sr.idle),
                  this.client.events.emit('session_request_expire', { id: e }));
            }),
            sy(this, 'deletePendingAuthRequest', async (e, t, r = !1) => {
              await Promise.all([
                this.client.auth.requests.delete(e, t),
                r ? Promise.resolve() : this.client.core.expirer.del(e),
              ]);
            }),
            sy(this, 'setExpiry', async (e, t) => {
              this.client.session.keys.includes(e) &&
                (this.client.core.expirer.set(e, t),
                await this.client.session.update(e, { expiry: t }));
            }),
            sy(this, 'setProposal', async (e, t) => {
              this.client.core.expirer.set(e, (0, eT.Xw0)(se.wc_sessionPropose.req.ttl)),
                await this.client.proposal.set(e, t);
            }),
            sy(this, 'setAuthRequest', async (e, t) => {
              let { request: r, pairingTopic: i, transportType: s = tu.relay } = t;
              this.client.core.expirer.set(e, r.expiryTimestamp),
                await this.client.auth.requests.set(e, {
                  authPayload: r.authPayload,
                  requester: r.requester,
                  expiryTimestamp: r.expiryTimestamp,
                  id: e,
                  pairingTopic: i,
                  verifyContext: r.verifyContext,
                  transportType: s,
                });
            }),
            sy(this, 'setPendingSessionRequest', async (e) => {
              let { id: t, topic: r, params: i, verifyContext: s } = e,
                n = i.request.expiryTimestamp || (0, eT.Xw0)(se.wc_sessionRequest.req.ttl);
              this.client.core.expirer.set(t, n),
                await this.client.pendingRequest.set(t, {
                  id: t,
                  topic: r,
                  params: i,
                  verifyContext: s,
                });
            }),
            sy(this, 'sendRequest', async (e) => {
              let t, i;
              let {
                  topic: s,
                  method: n,
                  params: o,
                  expiry: a,
                  relayRpcId: c,
                  clientRpcId: l,
                  throwOnFailedPublish: h,
                  appLink: u,
                  tvf: d,
                } = e,
                p = ez(n, o, l),
                f = !!u;
              try {
                let e = f ? eT.Pa8 : eT.EWt;
                t = await this.client.core.crypto.encode(s, p, { encoding: e });
              } catch (e) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendRequest() -> core.crypto.encode() for topic ${s} failed`
                  ),
                  e)
                );
              }
              if (ss.includes(n)) {
                let e = (0, eT.ALl)(JSON.stringify(p)),
                  r = (0, eT.ALl)(t);
                i = await this.client.core.verify.register({ id: r, decryptedId: e });
              }
              let g = se[n].req;
              if (
                ((g.attestation = i),
                a && (g.ttl = a),
                c && (g.id = c),
                this.client.core.history.set(s, p),
                f)
              ) {
                let e = (0, eT.$Bq)(u, s, t);
                await r.g.Linking.openURL(e, this.client.name);
              } else {
                let e = se[n].req;
                a && (e.ttl = a),
                  c && (e.id = c),
                  (e.tvf = sg(sf({}, d), { correlationId: p.id })),
                  h
                    ? ((e.internal = sg(sf({}, e.internal), { throwOnFailedPublish: !0 })),
                      await this.client.core.relayer.publish(s, t, e))
                    : this.client.core.relayer
                        .publish(s, t, e)
                        .catch((e) => this.client.logger.error(e));
              }
              return p.id;
            }),
            sy(this, 'sendResult', async (e) => {
              let t, i, s;
              let {
                  id: n,
                  topic: o,
                  result: a,
                  throwOnFailedPublish: c,
                  encodeOpts: l,
                  appLink: h,
                } = e,
                u = eF(n, a),
                d = h && 'u' > typeof (null == r.g ? void 0 : r.g.Linking);
              try {
                let e = d ? eT.Pa8 : eT.EWt;
                t = await this.client.core.crypto.encode(
                  o,
                  u,
                  sg(sf({}, l || {}), { encoding: e })
                );
              } catch (e) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendResult() -> core.crypto.encode() for topic ${o} failed`
                  ),
                  e)
                );
              }
              try {
                let e = (i = await this.client.core.history.get(o, n)).request;
                try {
                  this.shouldSetTVF(e.method, e.params) && (s = this.getTVFParams(n, e.params, a));
                } catch (e) {
                  this.client.logger.warn('sendResult() -> getTVFParams() failed', e);
                }
              } catch (e) {
                throw (
                  (this.client.logger.error(`sendResult() -> history.get(${o}, ${n}) failed`), e)
                );
              }
              if (d) {
                let e = (0, eT.$Bq)(h, o, t);
                await r.g.Linking.openURL(e, this.client.name);
              } else {
                let e = se[i.request.method].res;
                (e.tvf = sg(sf({}, s), { correlationId: n })),
                  c
                    ? ((e.internal = sg(sf({}, e.internal), { throwOnFailedPublish: !0 })),
                      await this.client.core.relayer.publish(o, t, e))
                    : this.client.core.relayer
                        .publish(o, t, e)
                        .catch((e) => this.client.logger.error(e));
              }
              await this.client.core.history.resolve(u);
            }),
            sy(this, 'sendError', async (e) => {
              let t, i;
              let { id: s, topic: n, error: o, encodeOpts: a, rpcOpts: c, appLink: l } = e,
                h = eH(s, o),
                u = l && 'u' > typeof (null == r.g ? void 0 : r.g.Linking);
              try {
                let e = u ? eT.Pa8 : eT.EWt;
                t = await this.client.core.crypto.encode(
                  n,
                  h,
                  sg(sf({}, a || {}), { encoding: e })
                );
              } catch (e) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendError() -> core.crypto.encode() for topic ${n} failed`
                  ),
                  e)
                );
              }
              try {
                i = await this.client.core.history.get(n, s);
              } catch (e) {
                throw (
                  (this.client.logger.error(`sendError() -> history.get(${n}, ${s}) failed`), e)
                );
              }
              if (u) {
                let e = (0, eT.$Bq)(l, n, t);
                await r.g.Linking.openURL(e, this.client.name);
              } else {
                let e = i.request.method,
                  r = c || se[e].res;
                this.client.core.relayer.publish(n, t, r);
              }
              await this.client.core.history.resolve(h);
            }),
            sy(this, 'cleanup', async () => {
              let e = [],
                t = [];
              this.client.session.getAll().forEach((t) => {
                let r = !1;
                (0, eT._dF)(t.expiry) && (r = !0),
                  this.client.core.crypto.keychain.has(t.topic) || (r = !0),
                  r && e.push(t.topic);
              }),
                this.client.proposal.getAll().forEach((e) => {
                  (0, eT._dF)(e.expiryTimestamp) && t.push(e.id);
                }),
                await Promise.all([
                  ...e.map((e) => this.deleteSession({ topic: e })),
                  ...t.map((e) => this.deleteProposal(e)),
                ]);
            }),
            sy(this, 'onProviderMessageEvent', async (e) => {
              !this.initialized || this.relayMessageCache.length > 0
                ? this.relayMessageCache.push(e)
                : await this.onRelayMessage(e);
            }),
            sy(this, 'onRelayEventRequest', async (e) => {
              this.requestQueue.queue.push(e), await this.processRequestsQueue();
            }),
            sy(this, 'processRequestsQueue', async () => {
              if (this.requestQueue.state === sr.active) {
                this.client.logger.info('Request queue already active, skipping...');
                return;
              }
              for (
                this.client.logger.info(
                  `Request queue starting with ${this.requestQueue.queue.length} requests`
                );
                this.requestQueue.queue.length > 0;

              ) {
                this.requestQueue.state = sr.active;
                let e = this.requestQueue.queue.shift();
                if (e)
                  try {
                    await this.processRequest(e);
                  } catch (e) {
                    this.client.logger.warn(e);
                  }
              }
              this.requestQueue.state = sr.idle;
            }),
            sy(this, 'processRequest', async (e) => {
              let { topic: t, payload: r, attestation: i, transportType: s, encryptedId: n } = e,
                o = r.method;
              if (!this.shouldIgnorePairingRequest({ topic: t, requestMethod: o }))
                switch (o) {
                  case 'wc_sessionPropose':
                    return await this.onSessionProposeRequest({
                      topic: t,
                      payload: r,
                      attestation: i,
                      encryptedId: n,
                    });
                  case 'wc_sessionSettle':
                    return await this.onSessionSettleRequest(t, r);
                  case 'wc_sessionUpdate':
                    return await this.onSessionUpdateRequest(t, r);
                  case 'wc_sessionExtend':
                    return await this.onSessionExtendRequest(t, r);
                  case 'wc_sessionPing':
                    return await this.onSessionPingRequest(t, r);
                  case 'wc_sessionDelete':
                    return await this.onSessionDeleteRequest(t, r);
                  case 'wc_sessionRequest':
                    return await this.onSessionRequest({
                      topic: t,
                      payload: r,
                      attestation: i,
                      encryptedId: n,
                      transportType: s,
                    });
                  case 'wc_sessionEvent':
                    return await this.onSessionEventRequest(t, r);
                  case 'wc_sessionAuthenticate':
                    return await this.onSessionAuthenticateRequest({
                      topic: t,
                      payload: r,
                      attestation: i,
                      encryptedId: n,
                      transportType: s,
                    });
                  default:
                    return this.client.logger.info(`Unsupported request method ${o}`);
                }
            }),
            sy(this, 'onRelayEventResponse', async (e) => {
              let { topic: t, payload: r, transportType: i } = e,
                s = (await this.client.core.history.get(t, r.id)).request.method;
              switch (s) {
                case 'wc_sessionPropose':
                  return this.onSessionProposeResponse(t, r, i);
                case 'wc_sessionSettle':
                  return this.onSessionSettleResponse(t, r);
                case 'wc_sessionUpdate':
                  return this.onSessionUpdateResponse(t, r);
                case 'wc_sessionExtend':
                  return this.onSessionExtendResponse(t, r);
                case 'wc_sessionPing':
                  return this.onSessionPingResponse(t, r);
                case 'wc_sessionRequest':
                  return this.onSessionRequestResponse(t, r);
                case 'wc_sessionAuthenticate':
                  return this.onSessionAuthenticateResponse(t, r);
                default:
                  return this.client.logger.info(`Unsupported response method ${s}`);
              }
            }),
            sy(this, 'onRelayEventUnknownPayload', (e) => {
              let { topic: t } = e,
                { message: r } = (0, eT.GuA)(
                  'MISSING_OR_INVALID',
                  `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`
                );
              throw Error(r);
            }),
            sy(this, 'shouldIgnorePairingRequest', (e) => {
              let { topic: t, requestMethod: r } = e,
                i = this.expectedPairingMethodMap.get(t);
              return (
                !(!i || i.includes(r)) &&
                !!(
                  i.includes('wc_sessionAuthenticate') &&
                  this.client.events.listenerCount('session_authenticate') > 0
                )
              );
            }),
            sy(this, 'onSessionProposeRequest', async (e) => {
              let { topic: t, payload: r, attestation: i, encryptedId: s } = e,
                { params: n, id: o } = r;
              try {
                let e = this.client.core.eventClient.getEvent({ topic: t });
                0 === this.client.events.listenerCount('session_proposal') &&
                  (console.warn('No listener for session_proposal event'),
                  e?.setError(tI.proposal_listener_not_found)),
                  this.isValidConnect(sf({}, r.params));
                let a = n.expiryTimestamp || (0, eT.Xw0)(se.wc_sessionPropose.req.ttl),
                  c = sf({ id: o, pairingTopic: t, expiryTimestamp: a }, n);
                await this.setProposal(o, c);
                let l = await this.getVerifyContext({
                  attestationId: i,
                  hash: (0, eT.ALl)(JSON.stringify(r)),
                  encryptedId: s,
                  metadata: c.proposer.metadata,
                });
                e?.addTrace(t_.emit_session_proposal),
                  this.client.events.emit('session_proposal', {
                    id: o,
                    params: c,
                    verifyContext: l,
                  });
              } catch (e) {
                await this.sendError({
                  id: o,
                  topic: t,
                  error: e,
                  rpcOpts: se.wc_sessionPropose.autoReject,
                }),
                  this.client.logger.error(e);
              }
            }),
            sy(this, 'onSessionProposeResponse', async (e, t, r) => {
              let { id: i } = t;
              if (e0(t)) {
                let { result: s } = t;
                this.client.logger.trace({
                  type: 'method',
                  method: 'onSessionProposeResponse',
                  result: s,
                });
                let n = this.client.proposal.get(i);
                this.client.logger.trace({
                  type: 'method',
                  method: 'onSessionProposeResponse',
                  proposal: n,
                });
                let o = n.proposer.publicKey;
                this.client.logger.trace({
                  type: 'method',
                  method: 'onSessionProposeResponse',
                  selfPublicKey: o,
                });
                let a = s.responderPublicKey;
                this.client.logger.trace({
                  type: 'method',
                  method: 'onSessionProposeResponse',
                  peerPublicKey: a,
                });
                let c = await this.client.core.crypto.generateSharedKey(o, a);
                this.pendingSessions.set(i, {
                  sessionTopic: c,
                  pairingTopic: e,
                  proposalId: i,
                  publicKey: o,
                });
                let l = await this.client.core.relayer.subscribe(c, { transportType: r });
                this.client.logger.trace({
                  type: 'method',
                  method: 'onSessionProposeResponse',
                  subscriptionId: l,
                }),
                  await this.client.core.pairing.activate({ topic: e });
              } else if (e1(t)) {
                await this.client.proposal.delete(i, (0, eT.Hjj)('USER_DISCONNECTED'));
                let e = (0, eT.hEn)('session_connect', i);
                if (0 === this.events.listenerCount(e))
                  throw Error(`emitting ${e} without any listeners, 954`);
                this.events.emit(e, { error: t.error });
              }
            }),
            sy(this, 'onSessionSettleRequest', async (e, t) => {
              let { id: r, params: i } = t;
              try {
                this.isValidSessionSettleRequest(i);
                let {
                    relay: r,
                    controller: s,
                    expiry: n,
                    namespaces: o,
                    sessionProperties: a,
                    scopedProperties: c,
                    sessionConfig: l,
                  } = t.params,
                  h = [...this.pendingSessions.values()].find((t) => t.sessionTopic === e);
                if (!h) return this.client.logger.error(`Pending session not found for topic ${e}`);
                let u = this.client.proposal.get(h.proposalId),
                  d = sg(
                    sf(
                      sf(
                        sf(
                          {
                            topic: e,
                            relay: r,
                            expiry: n,
                            namespaces: o,
                            acknowledged: !0,
                            pairingTopic: h.pairingTopic,
                            requiredNamespaces: u.requiredNamespaces,
                            optionalNamespaces: u.optionalNamespaces,
                            controller: s.publicKey,
                            self: { publicKey: h.publicKey, metadata: this.client.metadata },
                            peer: { publicKey: s.publicKey, metadata: s.metadata },
                          },
                          a && { sessionProperties: a }
                        ),
                        c && { scopedProperties: c }
                      ),
                      l && { sessionConfig: l }
                    ),
                    { transportType: tu.relay }
                  );
                await this.client.session.set(d.topic, d),
                  await this.setExpiry(d.topic, d.expiry),
                  await this.client.core.pairing.updateMetadata({
                    topic: h.pairingTopic,
                    metadata: d.peer.metadata,
                  }),
                  this.client.events.emit('session_connect', { session: d }),
                  this.events.emit((0, eT.hEn)('session_connect', h.proposalId), { session: d }),
                  this.pendingSessions.delete(h.proposalId),
                  this.deleteProposal(h.proposalId, !1),
                  this.cleanupDuplicatePairings(d),
                  await this.sendResult({
                    id: t.id,
                    topic: e,
                    result: !0,
                    throwOnFailedPublish: !0,
                  });
              } catch (t) {
                await this.sendError({ id: r, topic: e, error: t }), this.client.logger.error(t);
              }
            }),
            sy(this, 'onSessionSettleResponse', async (e, t) => {
              let { id: r } = t;
              e0(t)
                ? (await this.client.session.update(e, { acknowledged: !0 }),
                  this.events.emit((0, eT.hEn)('session_approve', r), {}))
                : e1(t) &&
                  (await this.client.session.delete(e, (0, eT.Hjj)('USER_DISCONNECTED')),
                  this.events.emit((0, eT.hEn)('session_approve', r), { error: t.error }));
            }),
            sy(this, 'onSessionUpdateRequest', async (e, t) => {
              let { params: r, id: i } = t;
              try {
                let t = `${e}_session_update`,
                  s = eT.nyL.get(t);
                if (s && this.isRequestOutOfSync(s, i)) {
                  this.client.logger.warn(`Discarding out of sync request - ${i}`),
                    this.sendError({
                      id: i,
                      topic: e,
                      error: (0, eT.Hjj)('INVALID_UPDATE_REQUEST'),
                    });
                  return;
                }
                this.isValidUpdate(sf({ topic: e }, r));
                try {
                  eT.nyL.set(t, i),
                    await this.client.session.update(e, { namespaces: r.namespaces }),
                    await this.sendResult({
                      id: i,
                      topic: e,
                      result: !0,
                      throwOnFailedPublish: !0,
                    });
                } catch (e) {
                  throw (eT.nyL.delete(t), e);
                }
                this.client.events.emit('session_update', { id: i, topic: e, params: r });
              } catch (t) {
                await this.sendError({ id: i, topic: e, error: t }), this.client.logger.error(t);
              }
            }),
            sy(
              this,
              'isRequestOutOfSync',
              (e, t) => t.toString().slice(0, -3) < e.toString().slice(0, -3)
            ),
            sy(this, 'onSessionUpdateResponse', (e, t) => {
              let { id: r } = t,
                i = (0, eT.hEn)('session_update', r);
              if (0 === this.events.listenerCount(i))
                throw Error(`emitting ${i} without any listeners`);
              e0(t)
                ? this.events.emit((0, eT.hEn)('session_update', r), {})
                : e1(t) && this.events.emit((0, eT.hEn)('session_update', r), { error: t.error });
            }),
            sy(this, 'onSessionExtendRequest', async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidExtend({ topic: e }),
                  await this.setExpiry(e, (0, eT.Xw0)(i7)),
                  await this.sendResult({ id: r, topic: e, result: !0, throwOnFailedPublish: !0 }),
                  this.client.events.emit('session_extend', { id: r, topic: e });
              } catch (t) {
                await this.sendError({ id: r, topic: e, error: t }), this.client.logger.error(t);
              }
            }),
            sy(this, 'onSessionExtendResponse', (e, t) => {
              let { id: r } = t,
                i = (0, eT.hEn)('session_extend', r);
              if (0 === this.events.listenerCount(i))
                throw Error(`emitting ${i} without any listeners`);
              e0(t)
                ? this.events.emit((0, eT.hEn)('session_extend', r), {})
                : e1(t) && this.events.emit((0, eT.hEn)('session_extend', r), { error: t.error });
            }),
            sy(this, 'onSessionPingRequest', async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult({ id: r, topic: e, result: !0, throwOnFailedPublish: !0 }),
                  this.client.events.emit('session_ping', { id: r, topic: e });
              } catch (t) {
                await this.sendError({ id: r, topic: e, error: t }), this.client.logger.error(t);
              }
            }),
            sy(this, 'onSessionPingResponse', (e, t) => {
              let { id: r } = t,
                i = (0, eT.hEn)('session_ping', r);
              setTimeout(() => {
                if (0 === this.events.listenerCount(i))
                  throw Error(`emitting ${i} without any listeners 2176`);
                e0(t)
                  ? this.events.emit((0, eT.hEn)('session_ping', r), {})
                  : e1(t) && this.events.emit((0, eT.hEn)('session_ping', r), { error: t.error });
              }, 500);
            }),
            sy(this, 'onSessionDeleteRequest', async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidDisconnect({ topic: e, reason: t.params }),
                  Promise.all([
                    new Promise((t) => {
                      this.client.core.relayer.once(tc.publish, async () => {
                        t(await this.deleteSession({ topic: e, id: r }));
                      });
                    }),
                    this.sendResult({ id: r, topic: e, result: !0, throwOnFailedPublish: !0 }),
                    this.cleanupPendingSentRequestsForTopic({
                      topic: e,
                      error: (0, eT.Hjj)('USER_DISCONNECTED'),
                    }),
                  ]).catch((e) => this.client.logger.error(e));
              } catch (e) {
                this.client.logger.error(e);
              }
            }),
            sy(this, 'onSessionRequest', async (e) => {
              var t, r, i;
              let { topic: s, payload: n, attestation: o, encryptedId: a, transportType: c } = e,
                { id: l, params: h } = n;
              try {
                await this.isValidRequest(sf({ topic: s }, h));
                let e = this.client.session.get(s),
                  n = await this.getVerifyContext({
                    attestationId: o,
                    hash: (0, eT.ALl)(JSON.stringify(ez('wc_sessionRequest', h, l))),
                    encryptedId: a,
                    metadata: e.peer.metadata,
                    transportType: c,
                  }),
                  u = { id: l, topic: s, params: h, verifyContext: n };
                await this.setPendingSessionRequest(u),
                  c === tu.link_mode &&
                    null != (t = e.peer.metadata.redirect) &&
                    t.universal &&
                    this.client.core.addLinkModeSupportedApp(
                      null == (r = e.peer.metadata.redirect) ? void 0 : r.universal
                    ),
                  null != (i = this.client.signConfig) && i.disableRequestQueue
                    ? this.emitSessionRequest(u)
                    : (this.addSessionRequestToSessionRequestQueue(u),
                      this.processSessionRequestQueue());
              } catch (e) {
                await this.sendError({ id: l, topic: s, error: e }), this.client.logger.error(e);
              }
            }),
            sy(this, 'onSessionRequestResponse', (e, t) => {
              let { id: r } = t,
                i = (0, eT.hEn)('session_request', r);
              if (0 === this.events.listenerCount(i))
                throw Error(`emitting ${i} without any listeners`);
              e0(t)
                ? this.events.emit((0, eT.hEn)('session_request', r), { result: t.result })
                : e1(t) && this.events.emit((0, eT.hEn)('session_request', r), { error: t.error });
            }),
            sy(this, 'onSessionEventRequest', async (e, t) => {
              let { id: r, params: i } = t;
              try {
                let t = `${e}_session_event_${i.event.name}`,
                  s = eT.nyL.get(t);
                if (s && this.isRequestOutOfSync(s, r)) {
                  this.client.logger.info(`Discarding out of sync request - ${r}`);
                  return;
                }
                this.isValidEmit(sf({ topic: e }, i)),
                  this.client.events.emit('session_event', { id: r, topic: e, params: i }),
                  eT.nyL.set(t, r);
              } catch (t) {
                await this.sendError({ id: r, topic: e, error: t }), this.client.logger.error(t);
              }
            }),
            sy(this, 'onSessionAuthenticateResponse', (e, t) => {
              let { id: r } = t;
              this.client.logger.trace({
                type: 'method',
                method: 'onSessionAuthenticateResponse',
                topic: e,
                payload: t,
              }),
                e0(t)
                  ? this.events.emit((0, eT.hEn)('session_request', r), { result: t.result })
                  : e1(t) &&
                    this.events.emit((0, eT.hEn)('session_request', r), { error: t.error });
            }),
            sy(this, 'onSessionAuthenticateRequest', async (e) => {
              var t;
              let { topic: r, payload: i, attestation: s, encryptedId: n, transportType: o } = e;
              try {
                let { requester: e, authPayload: a, expiryTimestamp: c } = i.params,
                  l = await this.getVerifyContext({
                    attestationId: s,
                    hash: (0, eT.ALl)(JSON.stringify(i)),
                    encryptedId: n,
                    metadata: e.metadata,
                    transportType: o,
                  }),
                  h = {
                    requester: e,
                    pairingTopic: r,
                    id: i.id,
                    authPayload: a,
                    verifyContext: l,
                    expiryTimestamp: c,
                  };
                await this.setAuthRequest(i.id, { request: h, pairingTopic: r, transportType: o }),
                  o === tu.link_mode &&
                    null != (t = e.metadata.redirect) &&
                    t.universal &&
                    this.client.core.addLinkModeSupportedApp(e.metadata.redirect.universal),
                  this.client.events.emit('session_authenticate', {
                    topic: r,
                    params: i.params,
                    id: i.id,
                    verifyContext: l,
                  });
              } catch (a) {
                this.client.logger.error(a);
                let e = i.params.requester.publicKey,
                  t = await this.client.core.crypto.generateKeyPair(),
                  s = this.getAppLinkIfEnabled(i.params.requester.metadata, o),
                  n = { type: eT.Lp_, receiverPublicKey: e, senderPublicKey: t };
                await this.sendError({
                  id: i.id,
                  topic: r,
                  error: a,
                  encodeOpts: n,
                  rpcOpts: se.wc_sessionAuthenticate.autoReject,
                  appLink: s,
                });
              }
            }),
            sy(this, 'addSessionRequestToSessionRequestQueue', (e) => {
              this.sessionRequestQueue.queue.push(e);
            }),
            sy(this, 'cleanupAfterResponse', (e) => {
              this.deletePendingSessionRequest(e.response.id, { message: 'fulfilled', code: 0 }),
                setTimeout(
                  () => {
                    (this.sessionRequestQueue.state = sr.idle), this.processSessionRequestQueue();
                  },
                  (0, o.toMiliseconds)(this.requestQueueDelay)
                );
            }),
            sy(this, 'cleanupPendingSentRequestsForTopic', ({ topic: e, error: t }) => {
              let r = this.client.core.history.pending;
              r.length > 0 &&
                r
                  .filter((t) => t.topic === e && 'wc_sessionRequest' === t.request.method)
                  .forEach((e) => {
                    let r = e.request.id,
                      i = (0, eT.hEn)('session_request', r);
                    if (0 === this.events.listenerCount(i))
                      throw Error(`emitting ${i} without any listeners`);
                    this.events.emit((0, eT.hEn)('session_request', e.request.id), { error: t });
                  });
            }),
            sy(this, 'processSessionRequestQueue', () => {
              if (this.sessionRequestQueue.state === sr.active) {
                this.client.logger.info('session request queue is already active.');
                return;
              }
              let e = this.sessionRequestQueue.queue[0];
              if (!e) {
                this.client.logger.info('session request queue is empty.');
                return;
              }
              try {
                (this.sessionRequestQueue.state = sr.active), this.emitSessionRequest(e);
              } catch (e) {
                this.client.logger.error(e);
              }
            }),
            sy(this, 'emitSessionRequest', (e) => {
              this.client.events.emit('session_request', e);
            }),
            sy(this, 'onPairingCreated', (e) => {
              if ((e.methods && this.expectedPairingMethodMap.set(e.topic, e.methods), e.active))
                return;
              let t = this.client.proposal.getAll().find((t) => t.pairingTopic === e.topic);
              t &&
                this.onSessionProposeRequest({
                  topic: e.topic,
                  payload: ez(
                    'wc_sessionPropose',
                    sg(sf({}, t), {
                      requiredNamespaces: t.requiredNamespaces,
                      optionalNamespaces: t.optionalNamespaces,
                      relays: t.relays,
                      proposer: t.proposer,
                      sessionProperties: t.sessionProperties,
                      scopedProperties: t.scopedProperties,
                    }),
                    t.id
                  ),
                });
            }),
            sy(this, 'isValidConnect', async (e) => {
              if (!(0, eT.TeY)(e)) {
                let { message: t } = (0, eT.GuA)(
                  'MISSING_OR_INVALID',
                  `connect() params: ${JSON.stringify(e)}`
                );
                throw Error(t);
              }
              let {
                pairingTopic: t,
                requiredNamespaces: r,
                optionalNamespaces: i,
                sessionProperties: s,
                scopedProperties: n,
                relays: o,
              } = e;
              if (((0, eT.b07)(t) || (await this.isValidPairingTopic(t)), !(0, eT.V9G)(o, !0))) {
                let { message: e } = (0, eT.GuA)('MISSING_OR_INVALID', `connect() relays: ${o}`);
                throw Error(e);
              }
              if (
                ((0, eT.b07)(r) ||
                  0 === (0, eT.aF0)(r) ||
                  this.validateNamespaces(r, 'requiredNamespaces'),
                (0, eT.b07)(i) ||
                  0 === (0, eT.aF0)(i) ||
                  this.validateNamespaces(i, 'optionalNamespaces'),
                (0, eT.b07)(s) || this.validateSessionProps(s, 'sessionProperties'),
                !(0, eT.b07)(n))
              ) {
                this.validateSessionProps(n, 'scopedProperties');
                let e = Object.keys(r || {}).concat(Object.keys(i || {}));
                if (!Object.keys(n).every((t) => e.includes(t)))
                  throw Error(
                    `Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(n)}, required/optional namespaces: ${JSON.stringify(e)}`
                  );
              }
            }),
            sy(this, 'validateNamespaces', (e, t) => {
              let r = (0, eT.esh)(e, 'connect()', t);
              if (r) throw Error(r.message);
            }),
            sy(this, 'isValidApprove', async (e) => {
              if (!(0, eT.TeY)(e))
                throw Error((0, eT.GuA)('MISSING_OR_INVALID', `approve() params: ${e}`).message);
              let {
                id: t,
                namespaces: r,
                relayProtocol: i,
                sessionProperties: s,
                scopedProperties: n,
              } = e;
              this.checkRecentlyDeleted(t), await this.isValidProposalId(t);
              let o = this.client.proposal.get(t),
                a = (0, eT.FiO)(r, 'approve()');
              if (a) throw Error(a.message);
              let c = (0, eT.XqR)(o.requiredNamespaces, r, 'approve()');
              if (c) throw Error(c.message);
              if (!(0, eT.Qhg)(i, !0)) {
                let { message: e } = (0, eT.GuA)(
                  'MISSING_OR_INVALID',
                  `approve() relayProtocol: ${i}`
                );
                throw Error(e);
              }
              if (
                ((0, eT.b07)(s) || this.validateSessionProps(s, 'sessionProperties'),
                !(0, eT.b07)(n))
              ) {
                this.validateSessionProps(n, 'scopedProperties');
                let e = new Set(Object.keys(r));
                if (!Object.keys(n).every((t) => e.has(t)))
                  throw Error(
                    `Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(n)}, approved namespaces: ${Array.from(e).join(', ')}`
                  );
              }
            }),
            sy(this, 'isValidReject', async (e) => {
              if (!(0, eT.TeY)(e)) {
                let { message: t } = (0, eT.GuA)('MISSING_OR_INVALID', `reject() params: ${e}`);
                throw Error(t);
              }
              let { id: t, reason: r } = e;
              if (
                (this.checkRecentlyDeleted(t), await this.isValidProposalId(t), !(0, eT.X3c)(r))
              ) {
                let { message: e } = (0, eT.GuA)(
                  'MISSING_OR_INVALID',
                  `reject() reason: ${JSON.stringify(r)}`
                );
                throw Error(e);
              }
            }),
            sy(this, 'isValidSessionSettleRequest', (e) => {
              if (!(0, eT.TeY)(e)) {
                let { message: t } = (0, eT.GuA)(
                  'MISSING_OR_INVALID',
                  `onSessionSettleRequest() params: ${e}`
                );
                throw Error(t);
              }
              let { relay: t, controller: r, namespaces: i, expiry: s } = e;
              if (!(0, eT.kuU)(t)) {
                let { message: e } = (0, eT.GuA)(
                  'MISSING_OR_INVALID',
                  'onSessionSettleRequest() relay protocol should be a string'
                );
                throw Error(e);
              }
              let n = (0, eT.tk0)(r, 'onSessionSettleRequest()');
              if (n) throw Error(n.message);
              let o = (0, eT.FiO)(i, 'onSessionSettleRequest()');
              if (o) throw Error(o.message);
              if ((0, eT._dF)(s)) {
                let { message: e } = (0, eT.GuA)('EXPIRED', 'onSessionSettleRequest()');
                throw Error(e);
              }
            }),
            sy(this, 'isValidUpdate', async (e) => {
              if (!(0, eT.TeY)(e)) {
                let { message: t } = (0, eT.GuA)('MISSING_OR_INVALID', `update() params: ${e}`);
                throw Error(t);
              }
              let { topic: t, namespaces: r } = e;
              this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
              let i = this.client.session.get(t),
                s = (0, eT.FiO)(r, 'update()');
              if (s) throw Error(s.message);
              let n = (0, eT.XqR)(i.requiredNamespaces, r, 'update()');
              if (n) throw Error(n.message);
            }),
            sy(this, 'isValidExtend', async (e) => {
              if (!(0, eT.TeY)(e)) {
                let { message: t } = (0, eT.GuA)('MISSING_OR_INVALID', `extend() params: ${e}`);
                throw Error(t);
              }
              let { topic: t } = e;
              this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
            }),
            sy(this, 'isValidRequest', async (e) => {
              if (!(0, eT.TeY)(e)) {
                let { message: t } = (0, eT.GuA)('MISSING_OR_INVALID', `request() params: ${e}`);
                throw Error(t);
              }
              let { topic: t, request: r, chainId: i, expiry: s } = e;
              this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
              let { namespaces: n } = this.client.session.get(t);
              if (!(0, eT.tLy)(n, i)) {
                let { message: e } = (0, eT.GuA)('MISSING_OR_INVALID', `request() chainId: ${i}`);
                throw Error(e);
              }
              if (!(0, eT.iV1)(r)) {
                let { message: e } = (0, eT.GuA)(
                  'MISSING_OR_INVALID',
                  `request() ${JSON.stringify(r)}`
                );
                throw Error(e);
              }
              if (!(0, eT.oKp)(n, i, r.method)) {
                let { message: e } = (0, eT.GuA)(
                  'MISSING_OR_INVALID',
                  `request() method: ${r.method}`
                );
                throw Error(e);
              }
              if (s && !(0, eT.Hbs)(s, st)) {
                let { message: e } = (0, eT.GuA)(
                  'MISSING_OR_INVALID',
                  `request() expiry: ${s}. Expiry must be a number (in seconds) between ${st.min} and ${st.max}`
                );
                throw Error(e);
              }
            }),
            sy(this, 'isValidRespond', async (e) => {
              var t;
              if (!(0, eT.TeY)(e)) {
                let { message: t } = (0, eT.GuA)('MISSING_OR_INVALID', `respond() params: ${e}`);
                throw Error(t);
              }
              let { topic: r, response: i } = e;
              try {
                await this.isValidSessionTopic(r);
              } catch (r) {
                throw (null != (t = e?.response) && t.id && this.cleanupAfterResponse(e), r);
              }
              if (!(0, eT.M8n)(i)) {
                let { message: e } = (0, eT.GuA)(
                  'MISSING_OR_INVALID',
                  `respond() response: ${JSON.stringify(i)}`
                );
                throw Error(e);
              }
            }),
            sy(this, 'isValidPing', async (e) => {
              if (!(0, eT.TeY)(e)) {
                let { message: t } = (0, eT.GuA)('MISSING_OR_INVALID', `ping() params: ${e}`);
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            sy(this, 'isValidEmit', async (e) => {
              if (!(0, eT.TeY)(e)) {
                let { message: t } = (0, eT.GuA)('MISSING_OR_INVALID', `emit() params: ${e}`);
                throw Error(t);
              }
              let { topic: t, event: r, chainId: i } = e;
              await this.isValidSessionTopic(t);
              let { namespaces: s } = this.client.session.get(t);
              if (!(0, eT.tLy)(s, i)) {
                let { message: e } = (0, eT.GuA)('MISSING_OR_INVALID', `emit() chainId: ${i}`);
                throw Error(e);
              }
              if (!(0, eT.FR8)(r) || !(0, eT.z2N)(s, i, r.name)) {
                let { message: e } = (0, eT.GuA)(
                  'MISSING_OR_INVALID',
                  `emit() event: ${JSON.stringify(r)}`
                );
                throw Error(e);
              }
            }),
            sy(this, 'isValidDisconnect', async (e) => {
              if (!(0, eT.TeY)(e)) {
                let { message: t } = (0, eT.GuA)('MISSING_OR_INVALID', `disconnect() params: ${e}`);
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            sy(this, 'isValidAuthenticate', (e) => {
              let { chains: t, uri: r, domain: i, nonce: s } = e;
              if (!Array.isArray(t) || 0 === t.length)
                throw Error('chains is required and must be a non-empty array');
              if (!(0, eT.Qhg)(r, !1)) throw Error('uri is required parameter');
              if (!(0, eT.Qhg)(i, !1)) throw Error('domain is required parameter');
              if (!(0, eT.Qhg)(s, !1)) throw Error('nonce is required parameter');
              if ([...new Set(t.map((e) => (0, eT._Yb)(e).namespace))].length > 1)
                throw Error(
                  'Multi-namespace requests are not supported. Please request single namespace only.'
                );
              let { namespace: n } = (0, eT._Yb)(t[0]);
              if ('eip155' !== n)
                throw Error(
                  'Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.'
                );
            }),
            sy(this, 'getVerifyContext', async (e) => {
              let { attestationId: t, hash: r, encryptedId: i, metadata: s, transportType: n } = e,
                o = {
                  verified: {
                    verifyUrl: s.verifyUrl || tw,
                    validation: 'UNKNOWN',
                    origin: s.url || '',
                  },
                };
              try {
                if (n === tu.link_mode) {
                  let e = this.getAppLinkIfEnabled(s, n);
                  return (
                    (o.verified.validation =
                      e && new URL(e).origin === new URL(s.url).origin ? 'VALID' : 'INVALID'),
                    o
                  );
                }
                let e = await this.client.core.verify.resolve({
                  attestationId: t,
                  hash: r,
                  encryptedId: i,
                  verifyUrl: s.verifyUrl,
                });
                e &&
                  ((o.verified.origin = e.origin),
                  (o.verified.isScam = e.isScam),
                  (o.verified.validation =
                    e.origin === new URL(s.url).origin ? 'VALID' : 'INVALID'));
              } catch (e) {
                this.client.logger.warn(e);
              }
              return this.client.logger.debug(`Verify context: ${JSON.stringify(o)}`), o;
            }),
            sy(this, 'validateSessionProps', (e, t) => {
              Object.values(e).forEach((r, i) => {
                if (null == r) {
                  let { message: s } = (0, eT.GuA)(
                    'MISSING_OR_INVALID',
                    `${t} must contain an existing value for each key. Received: ${r} for key ${Object.keys(e)[i]}`
                  );
                  throw Error(s);
                }
              });
            }),
            sy(this, 'getPendingAuthRequest', (e) => {
              let t = this.client.auth.requests.get(e);
              return 'object' == typeof t ? t : void 0;
            }),
            sy(this, 'addToRecentlyDeleted', (e, t) => {
              if (
                (this.recentlyDeletedMap.set(e, t),
                this.recentlyDeletedMap.size >= this.recentlyDeletedLimit)
              ) {
                let e = 0,
                  t = this.recentlyDeletedLimit / 2;
                for (let r of this.recentlyDeletedMap.keys()) {
                  if (e++ >= t) break;
                  this.recentlyDeletedMap.delete(r);
                }
              }
            }),
            sy(this, 'checkRecentlyDeleted', (e) => {
              let t = this.recentlyDeletedMap.get(e);
              if (t) {
                let { message: r } = (0, eT.GuA)(
                  'MISSING_OR_INVALID',
                  `Record was recently deleted - ${t}: ${e}`
                );
                throw Error(r);
              }
            }),
            sy(this, 'isLinkModeEnabled', (e, t) => {
              var i, s, n, o, a, c, l, h, u;
              return (
                !!e &&
                t === tu.link_mode &&
                (null == (s = null == (i = this.client.metadata) ? void 0 : i.redirect)
                  ? void 0
                  : s.linkMode) === !0 &&
                (null == (o = null == (n = this.client.metadata) ? void 0 : n.redirect)
                  ? void 0
                  : o.universal) !== void 0 &&
                (null == (c = null == (a = this.client.metadata) ? void 0 : a.redirect)
                  ? void 0
                  : c.universal) !== '' &&
                (null == (l = e?.redirect) ? void 0 : l.universal) !== void 0 &&
                (null == (h = e?.redirect) ? void 0 : h.universal) !== '' &&
                (null == (u = e?.redirect) ? void 0 : u.linkMode) === !0 &&
                this.client.core.linkModeSupportedApps.includes(e.redirect.universal) &&
                'u' > typeof (null == r.g ? void 0 : r.g.Linking)
              );
            }),
            sy(this, 'getAppLinkIfEnabled', (e, t) => {
              var r;
              return this.isLinkModeEnabled(e, t)
                ? null == (r = e?.redirect)
                  ? void 0
                  : r.universal
                : void 0;
            }),
            sy(this, 'handleLinkModeMessage', ({ url: e }) => {
              if (!e || !e.includes('wc_ev') || !e.includes('topic')) return;
              let t = (0, eT.$hI)(e, 'topic') || '',
                r = decodeURIComponent((0, eT.$hI)(e, 'wc_ev') || ''),
                i = this.client.session.keys.includes(t);
              i && this.client.session.update(t, { transportType: tu.link_mode }),
                this.client.core.dispatchEnvelope({ topic: t, message: r, sessionExists: i });
            }),
            sy(this, 'registerLinkModeListeners', async () => {
              var e;
              if (
                (0, eT.w8K)() ||
                ((0, eT.lVv)() && null != (e = this.client.metadata.redirect) && e.linkMode)
              ) {
                let e = null == r.g ? void 0 : r.g.Linking;
                if ('u' > typeof e) {
                  e.addEventListener('url', this.handleLinkModeMessage, this.client.name);
                  let t = await e.getInitialURL();
                  t &&
                    setTimeout(() => {
                      this.handleLinkModeMessage({ url: t });
                    }, 50);
                }
              }
            }),
            sy(this, 'shouldSetTVF', (e, t) => {
              if (!t || 'wc_sessionRequest' !== e) return !1;
              let { request: r } = t;
              return Object.keys(si).includes(r.method);
            }),
            sy(this, 'getTVFParams', (e, t, r) => {
              var i, s;
              try {
                let n = t.request.method,
                  o = this.extractTxHashesFromResult(n, r);
                return sg(
                  sf(
                    { correlationId: e, rpcMethods: [n], chainId: t.chainId },
                    this.isValidContractData(t.request.params) && {
                      contractAddresses: [
                        null == (s = null == (i = t.request.params) ? void 0 : i[0])
                          ? void 0
                          : s.to,
                      ],
                    }
                  ),
                  { txHashes: o }
                );
              } catch (e) {
                this.client.logger.warn('Error getting TVF params', e);
              }
              return {};
            }),
            sy(this, 'isValidContractData', (e) => {
              var t;
              if (!e) return !1;
              try {
                let r = e?.data || (null == (t = e?.[0]) ? void 0 : t.data);
                if (!r.startsWith('0x')) return !1;
                let i = r.slice(2);
                return !!/^[0-9a-fA-F]*$/.test(i) && i.length % 2 == 0;
              } catch {}
              return !1;
            }),
            sy(this, 'extractTxHashesFromResult', (e, t) => {
              try {
                let r = si[e];
                if ('string' == typeof t) return [t];
                let i = t[r.key];
                if ((0, eT.OP1)(i))
                  return 'solana_signAllTransactions' === e ? i.map((e) => (0, eT.PAk)(e)) : i;
                if ('string' == typeof i) return [i];
              } catch (e) {
                this.client.logger.warn('Error extracting tx hashes from result', e);
              }
              return [];
            });
        }
        async processPendingMessageEvents() {
          try {
            let e = this.client.session.keys,
              t = this.client.core.relayer.messages.getWithoutAck(e);
            for (let [e, r] of Object.entries(t))
              for (let t of r)
                try {
                  await this.onProviderMessageEvent({
                    topic: e,
                    message: t,
                    publishedAt: Date.now(),
                  });
                } catch {
                  this.client.logger.warn(
                    `Error processing pending message event for topic: ${e}, message: ${t}`
                  );
                }
          } catch (e) {
            this.client.logger.warn('processPendingMessageEvents failed', e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, eT.GuA)('NOT_INITIALIZED', this.name);
            throw Error(e);
          }
        }
        async confirmOnlineStateOrThrow() {
          await this.client.core.relayer.confirmOnlineStateOrThrow();
        }
        registerRelayerEvents() {
          this.client.core.relayer.on(tc.message, (e) => {
            this.onProviderMessageEvent(e);
          });
        }
        async onRelayMessage(e) {
          let { topic: t, message: r, attestation: i, transportType: s } = e,
            { publicKey: n } = this.client.auth.authKeys.keys.includes(so)
              ? this.client.auth.authKeys.get(so)
              : { responseTopic: void 0, publicKey: void 0 };
          try {
            let e = await this.client.core.crypto.decode(t, r, {
              receiverPublicKey: n,
              encoding: s === tu.link_mode ? eT.Pa8 : eT.EWt,
            });
            eQ(e)
              ? (this.client.core.history.set(t, e),
                await this.onRelayEventRequest({
                  topic: t,
                  payload: e,
                  attestation: i,
                  transportType: s,
                  encryptedId: (0, eT.ALl)(r),
                }))
              : eX(e)
                ? (await this.client.core.history.resolve(e),
                  await this.onRelayEventResponse({ topic: t, payload: e, transportType: s }),
                  this.client.core.history.delete(t, e.id))
                : await this.onRelayEventUnknownPayload({ topic: t, payload: e, transportType: s }),
              await this.client.core.relayer.messages.ack(t, r);
          } catch (e) {
            this.client.logger.error(e);
          }
        }
        registerExpirerEvents() {
          this.client.core.expirer.on(tb.expired, async (e) => {
            let { topic: t, id: r } = (0, eT.c82)(e.target);
            return r && this.client.pendingRequest.keys.includes(r)
              ? await this.deletePendingSessionRequest(r, (0, eT.GuA)('EXPIRED'), !0)
              : r && this.client.auth.requests.keys.includes(r)
                ? await this.deletePendingAuthRequest(r, (0, eT.GuA)('EXPIRED'), !0)
                : void (t
                    ? this.client.session.keys.includes(t) &&
                      (await this.deleteSession({ topic: t, expirerHasDeleted: !0 }),
                      this.client.events.emit('session_expire', { topic: t }))
                    : r &&
                      (await this.deleteProposal(r, !0),
                      this.client.events.emit('proposal_expire', { id: r })));
          });
        }
        registerPairingEvents() {
          this.client.core.pairing.events.on(ty.create, (e) => this.onPairingCreated(e)),
            this.client.core.pairing.events.on(ty.delete, (e) => {
              this.addToRecentlyDeleted(e.topic, 'pairing');
            });
        }
        isValidPairingTopic(e) {
          if (!(0, eT.Qhg)(e, !1)) {
            let { message: t } = (0, eT.GuA)(
              'MISSING_OR_INVALID',
              `pairing topic should be a string: ${e}`
            );
            throw Error(t);
          }
          if (!this.client.core.pairing.pairings.keys.includes(e)) {
            let { message: t } = (0, eT.GuA)(
              'NO_MATCHING_KEY',
              `pairing topic doesn't exist: ${e}`
            );
            throw Error(t);
          }
          if ((0, eT._dF)(this.client.core.pairing.pairings.get(e).expiry)) {
            let { message: t } = (0, eT.GuA)('EXPIRED', `pairing topic: ${e}`);
            throw Error(t);
          }
        }
        async isValidSessionTopic(e) {
          if (!(0, eT.Qhg)(e, !1)) {
            let { message: t } = (0, eT.GuA)(
              'MISSING_OR_INVALID',
              `session topic should be a string: ${e}`
            );
            throw Error(t);
          }
          if ((this.checkRecentlyDeleted(e), !this.client.session.keys.includes(e))) {
            let { message: t } = (0, eT.GuA)(
              'NO_MATCHING_KEY',
              `session topic doesn't exist: ${e}`
            );
            throw Error(t);
          }
          if ((0, eT._dF)(this.client.session.get(e).expiry)) {
            await this.deleteSession({ topic: e });
            let { message: t } = (0, eT.GuA)('EXPIRED', `session topic: ${e}`);
            throw Error(t);
          }
          if (!this.client.core.crypto.keychain.has(e)) {
            let { message: t } = (0, eT.GuA)(
              'MISSING_OR_INVALID',
              `session topic does not exist in keychain: ${e}`
            );
            throw (await this.deleteSession({ topic: e }), Error(t));
          }
        }
        async isValidSessionOrPairingTopic(e) {
          if ((this.checkRecentlyDeleted(e), this.client.session.keys.includes(e)))
            await this.isValidSessionTopic(e);
          else if (this.client.core.pairing.pairings.keys.includes(e)) this.isValidPairingTopic(e);
          else if ((0, eT.Qhg)(e, !1)) {
            let { message: t } = (0, eT.GuA)(
              'NO_MATCHING_KEY',
              `session or pairing topic doesn't exist: ${e}`
            );
            throw Error(t);
          } else {
            let { message: t } = (0, eT.GuA)(
              'MISSING_OR_INVALID',
              `session or pairing topic should be a string: ${e}`
            );
            throw Error(t);
          }
        }
        async isValidProposalId(e) {
          if (!(0, eT.Alu)(e)) {
            let { message: t } = (0, eT.GuA)(
              'MISSING_OR_INVALID',
              `proposal id should be a number: ${e}`
            );
            throw Error(t);
          }
          if (!this.client.proposal.keys.includes(e)) {
            let { message: t } = (0, eT.GuA)('NO_MATCHING_KEY', `proposal id doesn't exist: ${e}`);
            throw Error(t);
          }
          if ((0, eT._dF)(this.client.proposal.get(e).expiryTimestamp)) {
            await this.deleteProposal(e);
            let { message: t } = (0, eT.GuA)('EXPIRED', `proposal id: ${e}`);
            throw Error(t);
          }
        }
      }
      class sb extends iE {
        constructor(e, t) {
          super(e, t, 'proposal', i5), (this.core = e), (this.logger = t);
        }
      }
      class sw extends iE {
        constructor(e, t) {
          super(e, t, 'session', i5), (this.core = e), (this.logger = t);
        }
      }
      class sv extends iE {
        constructor(e, t) {
          super(e, t, 'request', i5, (e) => e.id), (this.core = e), (this.logger = t);
        }
      }
      class sE extends iE {
        constructor(e, t) {
          super(e, t, 'authKeys', sn, () => so), (this.core = e), (this.logger = t);
        }
      }
      class s_ extends iE {
        constructor(e, t) {
          super(e, t, 'pairingTopics', sn), (this.core = e), (this.logger = t);
        }
      }
      class sI extends iE {
        constructor(e, t) {
          super(e, t, 'requests', sn, (e) => e.id), (this.core = e), (this.logger = t);
        }
      }
      var sD = Object.defineProperty,
        sx = (e, t, r) =>
          t in e
            ? sD(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        sP = (e, t, r) => sx(e, 'symbol' != typeof t ? t + '' : t, r);
      class sS {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            sP(this, 'authKeys'),
            sP(this, 'pairingTopics'),
            sP(this, 'requests'),
            (this.authKeys = new sE(this.core, this.logger)),
            (this.pairingTopics = new s_(this.core, this.logger)),
            (this.requests = new sI(this.core, this.logger));
        }
        async init() {
          await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init();
        }
      }
      var sO = Object.defineProperty,
        sA = (e, t, r) =>
          t in e
            ? sO(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        sC = (e, t, r) => sA(e, 'symbol' != typeof t ? t + '' : t, r);
      class sT extends eO {
        constructor(e) {
          super(e),
            sC(this, 'protocol', 'wc'),
            sC(this, 'version', 2),
            sC(this, 'name', i6.name),
            sC(this, 'metadata'),
            sC(this, 'core'),
            sC(this, 'logger'),
            sC(this, 'events', new s.EventEmitter()),
            sC(this, 'engine'),
            sC(this, 'session'),
            sC(this, 'proposal'),
            sC(this, 'pendingRequest'),
            sC(this, 'auth'),
            sC(this, 'signConfig'),
            sC(this, 'on', (e, t) => this.events.on(e, t)),
            sC(this, 'once', (e, t) => this.events.once(e, t)),
            sC(this, 'off', (e, t) => this.events.off(e, t)),
            sC(this, 'removeListener', (e, t) => this.events.removeListener(e, t)),
            sC(this, 'removeAllListeners', (e) => this.events.removeAllListeners(e)),
            sC(this, 'connect', async (e) => {
              try {
                return await this.engine.connect(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            sC(this, 'pair', async (e) => {
              try {
                return await this.engine.pair(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            sC(this, 'approve', async (e) => {
              try {
                return await this.engine.approve(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            sC(this, 'reject', async (e) => {
              try {
                return await this.engine.reject(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            sC(this, 'update', async (e) => {
              try {
                return await this.engine.update(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            sC(this, 'extend', async (e) => {
              try {
                return await this.engine.extend(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            sC(this, 'request', async (e) => {
              try {
                return await this.engine.request(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            sC(this, 'respond', async (e) => {
              try {
                return await this.engine.respond(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            sC(this, 'ping', async (e) => {
              try {
                return await this.engine.ping(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            sC(this, 'emit', async (e) => {
              try {
                return await this.engine.emit(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            sC(this, 'disconnect', async (e) => {
              try {
                return await this.engine.disconnect(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            sC(this, 'find', (e) => {
              try {
                return this.engine.find(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            sC(this, 'getPendingSessionRequests', () => {
              try {
                return this.engine.getPendingSessionRequests();
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            sC(this, 'authenticate', async (e, t) => {
              try {
                return await this.engine.authenticate(e, t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            sC(this, 'formatAuthMessage', (e) => {
              try {
                return this.engine.formatAuthMessage(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            sC(this, 'approveSessionAuthenticate', async (e) => {
              try {
                return await this.engine.approveSessionAuthenticate(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            sC(this, 'rejectSessionAuthenticate', async (e) => {
              try {
                return await this.engine.rejectSessionAuthenticate(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.name = e?.name || i6.name),
            (this.metadata = (0, eT.Ds_)(e?.metadata)),
            (this.signConfig = e?.signConfig);
          let t =
            'u' > typeof e?.logger && 'string' != typeof e?.logger
              ? e.logger
              : M()(es({ level: e?.logger || i6.logger }));
          (this.core = e?.core || new i8(e)),
            (this.logger = eo(t, this.name)),
            (this.session = new sw(this.core, this.logger)),
            (this.proposal = new sb(this.core, this.logger)),
            (this.pendingRequest = new sv(this.core, this.logger)),
            (this.engine = new sm(this)),
            (this.auth = new sS(this.core, this.logger));
        }
        static async init(e) {
          let t = new sT(e);
          return await t.initialize(), t;
        }
        get context() {
          return en(this.logger);
        }
        get pairing() {
          return this.core.pairing.pairings;
        }
        async initialize() {
          this.logger.trace('Initialized');
          try {
            await this.core.start(),
              await this.session.init(),
              await this.proposal.init(),
              await this.pendingRequest.init(),
              await this.auth.init(),
              await this.engine.init(),
              this.logger.info('SignClient Initialization Success'),
              setTimeout(
                () => {
                  this.engine.processRelayMessageCache();
                },
                (0, o.toMiliseconds)(o.ONE_SECOND)
              );
          } catch (e) {
            throw (
              (this.logger.info('SignClient Initialization Failure'),
              this.logger.error(e.message),
              e)
            );
          }
        }
      }
      var sN = r(9912),
        sR = r.n(sN),
        sj = Object.defineProperty,
        sL = Object.defineProperties,
        sk = Object.getOwnPropertyDescriptors,
        sU = Object.getOwnPropertySymbols,
        sB = Object.prototype.hasOwnProperty,
        sq = Object.prototype.propertyIsEnumerable,
        s$ = (e, t, r) =>
          t in e
            ? sj(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        sM = (e, t) => {
          for (var r in t || (t = {})) sB.call(t, r) && s$(e, r, t[r]);
          if (sU) for (var r of sU(t)) sq.call(t, r) && s$(e, r, t[r]);
          return e;
        },
        sz = (e, t) => sL(e, sk(t));
      let sF = {
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        method: 'POST',
      };
      class sH {
        constructor(e, t = !1) {
          if (
            ((this.url = e),
            (this.disableProviderPing = t),
            (this.events = new s.EventEmitter()),
            (this.isAvailable = !1),
            (this.registering = !1),
            !eY(e))
          )
            throw Error(`Provided URL is not compatible with HTTP connection: ${e}`);
          (this.url = e), (this.disableProviderPing = t);
        }
        get connected() {
          return this.isAvailable;
        }
        get connecting() {
          return this.registering;
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async open(e = this.url) {
          await this.register(e);
        }
        async close() {
          if (!this.isAvailable) throw Error('Connection already closed');
          this.onClose();
        }
        async send(e) {
          this.isAvailable || (await this.register());
          try {
            let t = (0, C.h)(e),
              r = await (await sR()(this.url, sz(sM({}, sF), { body: t }))).json();
            this.onPayload({ data: r });
          } catch (t) {
            this.onError(e.id, t);
          }
        }
        async register(e = this.url) {
          if (!eY(e)) throw Error(`Provided URL is not compatible with HTTP connection: ${e}`);
          if (this.registering) {
            let e = this.events.getMaxListeners();
            return (
              (this.events.listenerCount('register_error') >= e ||
                this.events.listenerCount('open') >= e) &&
                this.events.setMaxListeners(e + 1),
              new Promise((e, t) => {
                this.events.once('register_error', (e) => {
                  this.resetMaxListeners(), t(e);
                }),
                  this.events.once('open', () => {
                    if ((this.resetMaxListeners(), typeof this.isAvailable > 'u'))
                      return t(Error('HTTP connection is missing or invalid'));
                    e();
                  });
              })
            );
          }
          (this.url = e), (this.registering = !0);
          try {
            if (!this.disableProviderPing) {
              let t = (0, C.h)({ id: 1, jsonrpc: '2.0', method: 'test', params: [] });
              await sR()(e, sz(sM({}, sF), { body: t }));
            }
            this.onOpen();
          } catch (t) {
            let e = this.parseError(t);
            throw (this.events.emit('register_error', e), this.onClose(), e);
          }
        }
        onOpen() {
          (this.isAvailable = !0), (this.registering = !1), this.events.emit('open');
        }
        onClose() {
          (this.isAvailable = !1), (this.registering = !1), this.events.emit('close');
        }
        onPayload(e) {
          if (typeof e.data > 'u') return;
          let t = 'string' == typeof e.data ? (0, C.j)(e.data) : e.data;
          this.events.emit('payload', t);
        }
        onError(e, t) {
          let r = this.parseError(t),
            i = eH(e, r.message || r.toString());
          this.events.emit('payload', i);
        }
        parseError(e, t = this.url) {
          return eB(e, t, 'HTTP');
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
      }
      var sV = r(50887).Buffer;
      let sK = 'error',
        sG = 'wc@2:universal_provider:',
        sW = 'https://rpc.walletconnect.org/v1/',
        sY = 'generic',
        sZ = `${sW}bundler`,
        sJ = { DEFAULT_CHAIN_CHANGED: 'default_chain_changed' };
      function sQ() {}
      function sX(e) {
        return null == e || ('object' != typeof e && 'function' != typeof e);
      }
      function s0(e) {
        return ArrayBuffer.isView(e) && !(e instanceof DataView);
      }
      function s1(e) {
        return 'object' == typeof e && null !== e;
      }
      function s2(e) {
        return Object.getOwnPropertySymbols(e).filter((t) =>
          Object.prototype.propertyIsEnumerable.call(e, t)
        );
      }
      function s8(e) {
        return null == e
          ? void 0 === e
            ? '[object Undefined]'
            : '[object Null]'
          : Object.prototype.toString.call(e);
      }
      let s3 = '[object String]',
        s5 = '[object Number]',
        s6 = '[object Boolean]',
        s4 = '[object Arguments]';
      function s9(e, t, r, i = new Map(), s) {
        let n = s?.(e, t, r, i);
        if (null != n) return n;
        if (sX(e)) return e;
        if (i.has(e)) return i.get(e);
        if (Array.isArray(e)) {
          let t = Array(e.length);
          i.set(e, t);
          for (let n = 0; n < e.length; n++) t[n] = s9(e[n], n, r, i, s);
          return (
            Object.hasOwn(e, 'index') && (t.index = e.index),
            Object.hasOwn(e, 'input') && (t.input = e.input),
            t
          );
        }
        if (e instanceof Date) return new Date(e.getTime());
        if (e instanceof RegExp) {
          let t = new RegExp(e.source, e.flags);
          return (t.lastIndex = e.lastIndex), t;
        }
        if (e instanceof Map) {
          let t = new Map();
          for (let [n, o] of (i.set(e, t), e)) t.set(n, s9(o, n, r, i, s));
          return t;
        }
        if (e instanceof Set) {
          let t = new Set();
          for (let n of (i.set(e, t), e)) t.add(s9(n, void 0, r, i, s));
          return t;
        }
        if ('u' > typeof sV && sV.isBuffer(e)) return e.subarray();
        if (s0(e)) {
          let t = new (Object.getPrototypeOf(e).constructor)(e.length);
          i.set(e, t);
          for (let n = 0; n < e.length; n++) t[n] = s9(e[n], n, r, i, s);
          return t;
        }
        if (
          e instanceof ArrayBuffer ||
          ('u' > typeof SharedArrayBuffer && e instanceof SharedArrayBuffer)
        )
          return e.slice(0);
        if (e instanceof DataView) {
          let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
          return i.set(e, t), s7(t, e, r, i, s), t;
        }
        if ('u' > typeof File && e instanceof File) {
          let t = new File([e], e.name, { type: e.type });
          return i.set(e, t), s7(t, e, r, i, s), t;
        }
        if (e instanceof Blob) {
          let t = new Blob([e], { type: e.type });
          return i.set(e, t), s7(t, e, r, i, s), t;
        }
        if (e instanceof Error) {
          let t = new e.constructor();
          return (
            i.set(e, t),
            (t.message = e.message),
            (t.name = e.name),
            (t.stack = e.stack),
            (t.cause = e.cause),
            s7(t, e, r, i, s),
            t
          );
        }
        if (
          'object' == typeof e &&
          (function (e) {
            switch (s8(e)) {
              case s4:
              case '[object Array]':
              case '[object ArrayBuffer]':
              case '[object DataView]':
              case s6:
              case '[object Date]':
              case '[object Float32Array]':
              case '[object Float64Array]':
              case '[object Int8Array]':
              case '[object Int16Array]':
              case '[object Int32Array]':
              case '[object Map]':
              case s5:
              case '[object Object]':
              case '[object RegExp]':
              case '[object Set]':
              case s3:
              case '[object Symbol]':
              case '[object Uint8Array]':
              case '[object Uint8ClampedArray]':
              case '[object Uint16Array]':
              case '[object Uint32Array]':
                return !0;
              default:
                return !1;
            }
          })(e)
        ) {
          let t = Object.create(Object.getPrototypeOf(e));
          return i.set(e, t), s7(t, e, r, i, s), t;
        }
        return e;
      }
      function s7(e, t, r = e, i, s) {
        let n = [...Object.keys(t), ...s2(t)];
        for (let o = 0; o < n.length; o++) {
          let a = n[o],
            c = Object.getOwnPropertyDescriptor(e, a);
          (null == c || c.writable) && (e[a] = s9(t[a], a, r, i, s));
        }
      }
      function ne(e) {
        return s9(e, void 0, e, new Map(), (t, r, i, s) => {
          let n = void 0;
          if (null != n) return n;
          if ('object' == typeof e)
            switch (Object.prototype.toString.call(e)) {
              case s5:
              case s3:
              case s6: {
                let t = new e.constructor(e?.valueOf());
                return s7(t, e), t;
              }
              case s4: {
                let t = {};
                return (
                  s7(t, e), (t.length = e.length), (t[Symbol.iterator] = e[Symbol.iterator]), t
                );
              }
              default:
                return;
            }
        });
      }
      function nt(e) {
        return null !== e && 'object' == typeof e && '[object Arguments]' === s8(e);
      }
      var nr = Object.defineProperty,
        ni = Object.defineProperties,
        ns = Object.getOwnPropertyDescriptors,
        nn = Object.getOwnPropertySymbols,
        no = Object.prototype.hasOwnProperty,
        na = Object.prototype.propertyIsEnumerable,
        nc = (e, t, r) =>
          t in e
            ? nr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        nl = (e, t) => {
          for (var r in t || (t = {})) no.call(t, r) && nc(e, r, t[r]);
          if (nn) for (var r of nn(t)) na.call(t, r) && nc(e, r, t[r]);
          return e;
        },
        nh = (e, t) => ni(e, ns(t));
      function nu(e, t, r) {
        var i;
        let s = (0, eT._Yb)(e);
        return (
          (null == (i = t.rpcMap) ? void 0 : i[s.reference]) ||
          `${sW}?chainId=${s.namespace}:${s.reference}&projectId=${r}`
        );
      }
      function nd(e) {
        return e.includes(':') ? e.split(':')[1] : e;
      }
      function np(e) {
        return e.map((e) => `${e.split(':')[0]}:${e.split(':')[1]}`);
      }
      function nf(e = {}, t = {}) {
        return (function (e, ...t) {
          return (function (e, ...t) {
            let r = t.slice(0, -1),
              i = t[t.length - 1],
              s = e;
            for (let e = 0; e < r.length; e++)
              s = (function e(t, r, i, s) {
                if ((sX(t) && (t = Object(t)), null == r || 'object' != typeof r)) return t;
                if (s.has(r))
                  return (function (e) {
                    if (sX(e)) return e;
                    if (
                      Array.isArray(e) ||
                      s0(e) ||
                      e instanceof ArrayBuffer ||
                      ('u' > typeof SharedArrayBuffer && e instanceof SharedArrayBuffer)
                    )
                      return e.slice(0);
                    let t = Object.getPrototypeOf(e),
                      r = t.constructor;
                    if (e instanceof Date || e instanceof Map || e instanceof Set) return new r(e);
                    if (e instanceof RegExp) {
                      let t = new r(e);
                      return (t.lastIndex = e.lastIndex), t;
                    }
                    if (e instanceof DataView) return new r(e.buffer.slice(0));
                    if (e instanceof Error) {
                      let t = new r(e.message);
                      return (t.stack = e.stack), (t.name = e.name), (t.cause = e.cause), t;
                    }
                    return 'u' > typeof File && e instanceof File
                      ? new r([e], e.name, { type: e.type, lastModified: e.lastModified })
                      : 'object' == typeof e
                        ? Object.assign(Object.create(t), e)
                        : e;
                  })(s.get(r));
                if ((s.set(r, t), Array.isArray(r))) {
                  r = r.slice();
                  for (let e = 0; e < r.length; e++) r[e] = r[e] ?? void 0;
                }
                let n = [...Object.keys(r), ...s2(r)];
                for (let o = 0; o < n.length; o++) {
                  let a = n[o],
                    c = r[a],
                    l = t[a];
                  if (
                    (nt(c) && (c = { ...c }),
                    nt(l) && (l = { ...l }),
                    'u' > typeof sV && sV.isBuffer(c) && (c = ne(c)),
                    Array.isArray(c))
                  ) {
                    if ('object' == typeof l && null != l) {
                      let e = [],
                        t = Reflect.ownKeys(l);
                      for (let r = 0; r < t.length; r++) {
                        let i = t[r];
                        e[i] = l[i];
                      }
                      l = e;
                    } else l = [];
                  }
                  let h = i(l, c, a, t, r, s);
                  null != h
                    ? (t[a] = h)
                    : Array.isArray(c) || (s1(l) && s1(c))
                      ? (t[a] = e(l, c, i, s))
                      : null == l &&
                          (function (e) {
                            if ('object' != typeof e || null == e) return !1;
                            if (null === Object.getPrototypeOf(e)) return !0;
                            if ('[object Object]' !== Object.prototype.toString.call(e)) {
                              let t = e[Symbol.toStringTag];
                              return (
                                !!(
                                  null != t &&
                                  Object.getOwnPropertyDescriptor(e, Symbol.toStringTag)?.writable
                                ) && e.toString() === `[object ${t}]`
                              );
                            }
                            let t = e;
                            for (; null !== Object.getPrototypeOf(t); )
                              t = Object.getPrototypeOf(t);
                            return Object.getPrototypeOf(e) === t;
                          })(c)
                        ? (t[a] = e({}, c, i, s))
                        : null == l && s0(c)
                          ? (t[a] = ne(c))
                          : (void 0 === l || void 0 !== c) && (t[a] = c);
                }
                return t;
              })(s, r[e], i, new Map());
            return s;
          })(e, ...t, sQ);
        })(ng(e), ng(t));
      }
      function ng(e) {
        var t, r, i, s;
        let n = {};
        if (!(0, eT.aF0)(e)) return n;
        for (let [o, a] of Object.entries(e)) {
          let e = (0, eT.nWe)(o) ? [o] : a.chains,
            c = a.methods || [],
            l = a.events || [],
            h = a.rpcMap || {},
            u = (0, eT.kob)(o);
          n[u] = nh(nl(nl({}, n[u]), a), {
            chains: (0, eT.TRk)(e, null == (t = n[u]) ? void 0 : t.chains),
            methods: (0, eT.TRk)(c, null == (r = n[u]) ? void 0 : r.methods),
            events: (0, eT.TRk)(l, null == (i = n[u]) ? void 0 : i.events),
            rpcMap: nl(nl({}, h), null == (s = n[u]) ? void 0 : s.rpcMap),
          });
        }
        return n;
      }
      function ny(e) {
        return e.includes(':') ? e.split(':')[2] : e;
      }
      function nm(e) {
        let t = {};
        for (let [r, i] of Object.entries(e)) {
          let e = i.methods || [],
            s = i.events || [],
            n = i.accounts || [],
            o = (0, eT.nWe)(r) ? [r] : i.chains ? i.chains : np(i.accounts);
          t[r] = { chains: o, methods: e, events: s, accounts: n };
        }
        return t;
      }
      function nb(e) {
        return 'number' == typeof e
          ? e
          : e.includes('0x')
            ? parseInt(e, 16)
            : isNaN(Number((e = e.includes(':') ? e.split(':')[1] : e)))
              ? e
              : Number(e);
      }
      let nw = {},
        nv = (e) => nw[e],
        nE = (e, t) => {
          nw[e] = t;
        };
      var n_ = Object.defineProperty,
        nI = (e, t, r) =>
          t in e
            ? n_(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        nD = (e, t, r) => nI(e, 'symbol' != typeof t ? t + '' : t, r);
      class nx {
        constructor(e) {
          nD(this, 'name', 'polkadot'),
            nD(this, 'client'),
            nD(this, 'httpProviders'),
            nD(this, 'events'),
            nD(this, 'namespace'),
            nD(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = nv('events')),
            (this.client = nv('client')),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error('ChainId not found');
          return e.split(':')[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(sJ.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(':')[1] === this.chainId.toString())
                .map((e) => e.split(':')[2])) ||
            []
          );
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              let i = nd(t);
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || nu(e, this.namespace, this.client.core.projectId);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new e2(new sH(r, nv('disableProviderPing')));
        }
      }
      var nP = Object.defineProperty,
        nS = Object.defineProperties,
        nO = Object.getOwnPropertyDescriptors,
        nA = Object.getOwnPropertySymbols,
        nC = Object.prototype.hasOwnProperty,
        nT = Object.prototype.propertyIsEnumerable,
        nN = (e, t, r) =>
          t in e
            ? nP(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        nR = (e, t) => {
          for (var r in t || (t = {})) nC.call(t, r) && nN(e, r, t[r]);
          if (nA) for (var r of nA(t)) nT.call(t, r) && nN(e, r, t[r]);
          return e;
        },
        nj = (e, t) => nS(e, nO(t)),
        nL = (e, t, r) => nN(e, 'symbol' != typeof t ? t + '' : t, r);
      class nk {
        constructor(e) {
          nL(this, 'name', 'eip155'),
            nL(this, 'client'),
            nL(this, 'chainId'),
            nL(this, 'namespace'),
            nL(this, 'httpProviders'),
            nL(this, 'events'),
            (this.namespace = e.namespace),
            (this.events = nv('events')),
            (this.client = nv('client')),
            (this.httpProviders = this.createHttpProviders()),
            (this.chainId = parseInt(this.getDefaultChain()));
        }
        async request(e) {
          switch (e.request.method) {
            case 'eth_requestAccounts':
            case 'eth_accounts':
              return this.getAccounts();
            case 'wallet_switchEthereumChain':
              return await this.handleSwitchChain(e);
            case 'eth_chainId':
              return parseInt(this.getDefaultChain());
            case 'wallet_getCapabilities':
              return await this.getCapabilities(e);
            case 'wallet_getCallsStatus':
              return await this.getCallStatus(e);
          }
          return this.namespace.methods.includes(e.request.method)
            ? await this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(parseInt(e), t),
            (this.chainId = parseInt(e)),
            this.events.emit(sJ.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId.toString();
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error('ChainId not found');
          return e.split(':')[1];
        }
        createHttpProvider(e, t) {
          let r = t || nu(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new e2(new sH(r, nv('disableProviderPing')));
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              let i = parseInt(nd(t));
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(':')[1] === this.chainId.toString())
                    .map((e) => e.split(':')[2])
                ),
              ]
            : [];
        }
        getHttpProvider() {
          let e = this.chainId,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        async handleSwitchChain(e) {
          var t, r;
          let i = e.request.params
              ? null == (t = e.request.params[0])
                ? void 0
                : t.chainId
              : '0x0',
            s = parseInt((i = i.startsWith('0x') ? i : `0x${i}`), 16);
          if (this.isChainApproved(s)) this.setDefaultChain(`${s}`);
          else if (this.namespace.methods.includes('wallet_switchEthereumChain'))
            await this.client.request({
              topic: e.topic,
              request: { method: e.request.method, params: [{ chainId: i }] },
              chainId: null == (r = this.namespace.chains) ? void 0 : r[0],
            }),
              this.setDefaultChain(`${s}`);
          else
            throw Error(
              `Failed to switch to chain 'eip155:${s}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`
            );
          return null;
        }
        isChainApproved(e) {
          return this.namespace.chains.includes(`${this.name}:${e}`);
        }
        async getCapabilities(e) {
          var t, r, i;
          let s = null == (r = null == (t = e.request) ? void 0 : t.params) ? void 0 : r[0];
          if (!s) throw Error('Missing address parameter in `wallet_getCapabilities` request');
          let n = this.client.session.get(e.topic),
            o = (null == (i = n?.sessionProperties) ? void 0 : i.capabilities) || {};
          if (null != o && o[s]) return o?.[s];
          let a = await this.client.request(e);
          try {
            await this.client.session.update(e.topic, {
              sessionProperties: nj(nR({}, n.sessionProperties || {}), {
                capabilities: nj(nR({}, o || {}), { [s]: a }),
              }),
            });
          } catch (e) {
            console.warn('Failed to update session with capabilities', e);
          }
          return a;
        }
        async getCallStatus(e) {
          var t, r;
          let i = this.client.session.get(e.topic),
            s = null == (t = i.sessionProperties) ? void 0 : t.bundler_name;
          if (s) {
            let t = this.getBundlerUrl(e.chainId, s);
            try {
              return await this.getUserOperationReceipt(t, e);
            } catch (e) {
              console.warn('Failed to fetch call status from bundler', e, t);
            }
          }
          let n = null == (r = i.sessionProperties) ? void 0 : r.bundler_url;
          if (n)
            try {
              return await this.getUserOperationReceipt(n, e);
            } catch (e) {
              console.warn('Failed to fetch call status from custom bundler', e, n);
            }
          if (this.namespace.methods.includes(e.request.method))
            return await this.client.request(e);
          throw Error('Fetching call status not approved by the wallet.');
        }
        async getUserOperationReceipt(e, t) {
          var r;
          let i = new URL(e),
            s = await fetch(i, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(
                ez('eth_getUserOperationReceipt', [null == (r = t.request.params) ? void 0 : r[0]])
              ),
            });
          if (!s.ok) throw Error(`Failed to fetch user operation receipt - ${s.status}`);
          return await s.json();
        }
        getBundlerUrl(e, t) {
          return `${sZ}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${t}`;
        }
      }
      var nU = Object.defineProperty,
        nB = (e, t, r) =>
          t in e
            ? nU(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        nq = (e, t, r) => nB(e, 'symbol' != typeof t ? t + '' : t, r);
      class n$ {
        constructor(e) {
          nq(this, 'name', 'solana'),
            nq(this, 'client'),
            nq(this, 'httpProviders'),
            nq(this, 'events'),
            nq(this, 'namespace'),
            nq(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = nv('events')),
            (this.client = nv('client')),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(sJ.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error('ChainId not found');
          return e.split(':')[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(':')[1] === this.chainId.toString())
                    .map((e) => e.split(':')[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              let i = nd(t);
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || nu(e, this.namespace, this.client.core.projectId);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new e2(new sH(r, nv('disableProviderPing')));
        }
      }
      var nM = Object.defineProperty,
        nz = (e, t, r) =>
          t in e
            ? nM(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        nF = (e, t, r) => nz(e, 'symbol' != typeof t ? t + '' : t, r);
      class nH {
        constructor(e) {
          nF(this, 'name', 'cosmos'),
            nF(this, 'client'),
            nF(this, 'httpProviders'),
            nF(this, 'events'),
            nF(this, 'namespace'),
            nF(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = nv('events')),
            (this.client = nv('client')),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error('ChainId not found');
          return e.split(':')[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(sJ.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(':')[1] === this.chainId.toString())
                    .map((e) => e.split(':')[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              let i = nd(t);
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || nu(e, this.namespace, this.client.core.projectId);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new e2(new sH(r, nv('disableProviderPing')));
        }
      }
      var nV = Object.defineProperty,
        nK = (e, t, r) =>
          t in e
            ? nV(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        nG = (e, t, r) => nK(e, 'symbol' != typeof t ? t + '' : t, r);
      class nW {
        constructor(e) {
          nG(this, 'name', 'algorand'),
            nG(this, 'client'),
            nG(this, 'httpProviders'),
            nG(this, 'events'),
            nG(this, 'namespace'),
            nG(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = nv('events')),
            (this.client = nv('client')),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (!this.httpProviders[e]) {
            let r = t || nu(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
            if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          (this.chainId = e),
            this.events.emit(sJ.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error('ChainId not found');
          return e.split(':')[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(':')[1] === this.chainId.toString())
                    .map((e) => e.split(':')[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              e[t] = this.createHttpProvider(
                t,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || nu(e, this.namespace, this.client.core.projectId);
          return typeof r > 'u' ? void 0 : new e2(new sH(r, nv('disableProviderPing')));
        }
      }
      var nY = Object.defineProperty,
        nZ = (e, t, r) =>
          t in e
            ? nY(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        nJ = (e, t, r) => nZ(e, 'symbol' != typeof t ? t + '' : t, r);
      class nQ {
        constructor(e) {
          nJ(this, 'name', 'cip34'),
            nJ(this, 'client'),
            nJ(this, 'httpProviders'),
            nJ(this, 'events'),
            nJ(this, 'namespace'),
            nJ(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = nv('events')),
            (this.client = nv('client')),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error('ChainId not found');
          return e.split(':')[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(sJ.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(':')[1] === this.chainId.toString())
                    .map((e) => e.split(':')[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              let r = this.getCardanoRPCUrl(t),
                i = nd(t);
              e[i] = this.createHttpProvider(i, r);
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        getCardanoRPCUrl(e) {
          let t = this.namespace.rpcMap;
          if (t) return t[e];
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || this.getCardanoRPCUrl(e);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new e2(new sH(r, nv('disableProviderPing')));
        }
      }
      var nX = Object.defineProperty,
        n0 = (e, t, r) =>
          t in e
            ? nX(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        n1 = (e, t, r) => n0(e, 'symbol' != typeof t ? t + '' : t, r);
      class n2 {
        constructor(e) {
          n1(this, 'name', 'elrond'),
            n1(this, 'client'),
            n1(this, 'httpProviders'),
            n1(this, 'events'),
            n1(this, 'namespace'),
            n1(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = nv('events')),
            (this.client = nv('client')),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(sJ.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error('ChainId not found');
          return e.split(':')[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(':')[1] === this.chainId.toString())
                    .map((e) => e.split(':')[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              let i = nd(t);
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || nu(e, this.namespace, this.client.core.projectId);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new e2(new sH(r, nv('disableProviderPing')));
        }
      }
      var n8 = Object.defineProperty,
        n3 = (e, t, r) =>
          t in e
            ? n8(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        n5 = (e, t, r) => n3(e, 'symbol' != typeof t ? t + '' : t, r);
      class n6 {
        constructor(e) {
          n5(this, 'name', 'multiversx'),
            n5(this, 'client'),
            n5(this, 'httpProviders'),
            n5(this, 'events'),
            n5(this, 'namespace'),
            n5(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = nv('events')),
            (this.client = nv('client')),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(sJ.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error('ChainId not found');
          return e.split(':')[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(':')[1] === this.chainId.toString())
                    .map((e) => e.split(':')[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              let i = nd(t);
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || nu(e, this.namespace, this.client.core.projectId);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new e2(new sH(r, nv('disableProviderPing')));
        }
      }
      var n4 = Object.defineProperty,
        n9 = (e, t, r) =>
          t in e
            ? n4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        n7 = (e, t, r) => n9(e, 'symbol' != typeof t ? t + '' : t, r);
      class oe {
        constructor(e) {
          n7(this, 'name', 'near'),
            n7(this, 'client'),
            n7(this, 'httpProviders'),
            n7(this, 'events'),
            n7(this, 'namespace'),
            n7(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = nv('events')),
            (this.client = nv('client')),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error('ChainId not found');
          return e.split(':')[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (((this.chainId = e), !this.httpProviders[e])) {
            let r = t || nu(`${this.name}:${e}`, this.namespace);
            if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          this.events.emit(sJ.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(':')[1] === this.chainId.toString())
                .map((e) => e.split(':')[2])) ||
            []
          );
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              e[t] = this.createHttpProvider(
                t,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || nu(e, this.namespace);
          return typeof r > 'u' ? void 0 : new e2(new sH(r, nv('disableProviderPing')));
        }
      }
      var ot = Object.defineProperty,
        or = (e, t, r) =>
          t in e
            ? ot(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        oi = (e, t, r) => or(e, 'symbol' != typeof t ? t + '' : t, r);
      class os {
        constructor(e) {
          oi(this, 'name', 'tezos'),
            oi(this, 'client'),
            oi(this, 'httpProviders'),
            oi(this, 'events'),
            oi(this, 'namespace'),
            oi(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = nv('events')),
            (this.client = nv('client')),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error('ChainId not found');
          return e.split(':')[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (((this.chainId = e), !this.httpProviders[e])) {
            let r = t || nu(`${this.name}:${e}`, this.namespace);
            if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          this.events.emit(sJ.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(':')[1] === this.chainId.toString())
                .map((e) => e.split(':')[2])) ||
            []
          );
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              e[t] = this.createHttpProvider(t);
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || nu(e, this.namespace);
          return typeof r > 'u' ? void 0 : new e2(new sH(r));
        }
      }
      var on = Object.defineProperty,
        oo = (e, t, r) =>
          t in e
            ? on(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        oa = (e, t, r) => oo(e, 'symbol' != typeof t ? t + '' : t, r);
      class oc {
        constructor(e) {
          oa(this, 'name', sY),
            oa(this, 'client'),
            oa(this, 'httpProviders'),
            oa(this, 'events'),
            oa(this, 'namespace'),
            oa(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = nv('events')),
            (this.client = nv('client')),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          (this.namespace.chains = [
            ...new Set((this.namespace.chains || []).concat(e.chains || [])),
          ]),
            (this.namespace.accounts = [
              ...new Set((this.namespace.accounts || []).concat(e.accounts || [])),
            ]),
            (this.namespace.methods = [
              ...new Set((this.namespace.methods || []).concat(e.methods || [])),
            ]),
            (this.namespace.events = [
              ...new Set((this.namespace.events || []).concat(e.events || [])),
            ]),
            (this.httpProviders = this.createHttpProviders());
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider(e.chainId).request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(sJ.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error('ChainId not found');
          return e.split(':')[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(':')[1] === this.chainId.toString())
                    .map((e) => e.split(':')[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          var e, t;
          let r = {};
          return (
            null == (t = null == (e = this.namespace) ? void 0 : e.accounts) ||
              t.forEach((e) => {
                let t = (0, eT._Yb)(e);
                r[`${t.namespace}:${t.reference}`] = this.createHttpProvider(e);
              }),
            r
          );
        }
        getHttpProvider(e) {
          let t = this.httpProviders[e];
          if (typeof t > 'u') throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || nu(e, this.namespace, this.client.core.projectId);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new e2(new sH(r, nv('disableProviderPing')));
        }
      }
      var ol = Object.defineProperty,
        oh = Object.defineProperties,
        ou = Object.getOwnPropertyDescriptors,
        od = Object.getOwnPropertySymbols,
        op = Object.prototype.hasOwnProperty,
        of = Object.prototype.propertyIsEnumerable,
        og = (e, t, r) =>
          t in e
            ? ol(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        oy = (e, t) => {
          for (var r in t || (t = {})) op.call(t, r) && og(e, r, t[r]);
          if (od) for (var r of od(t)) of.call(t, r) && og(e, r, t[r]);
          return e;
        },
        om = (e, t) => oh(e, ou(t)),
        ob = (e, t, r) => og(e, 'symbol' != typeof t ? t + '' : t, r);
      class ow {
        constructor(e) {
          ob(this, 'client'),
            ob(this, 'namespaces'),
            ob(this, 'optionalNamespaces'),
            ob(this, 'sessionProperties'),
            ob(this, 'scopedProperties'),
            ob(this, 'events', new (n())()),
            ob(this, 'rpcProviders', {}),
            ob(this, 'session'),
            ob(this, 'providerOpts'),
            ob(this, 'logger'),
            ob(this, 'uri'),
            ob(this, 'disableProviderPing', !1),
            (this.providerOpts = e),
            (this.logger =
              'u' > typeof e?.logger && 'string' != typeof e?.logger
                ? e.logger
                : M()(es({ level: e?.logger || sK }))),
            (this.disableProviderPing = e?.disableProviderPing || !1);
        }
        static async init(e) {
          let t = new ow(e);
          return await t.initialize(), t;
        }
        async request(e, t, r) {
          let [i, s] = this.validateChain(t);
          if (!this.session) throw Error('Please call connect() before request()');
          return await this.getProvider(i).request({
            request: oy({}, e),
            chainId: `${i}:${s}`,
            topic: this.session.topic,
            expiry: r,
          });
        }
        sendAsync(e, t, r, i) {
          let s = new Date().getTime();
          this.request(e, r, i)
            .then((e) => t(null, eF(s, e)))
            .catch((e) => t(e, void 0));
        }
        async enable() {
          if (!this.client) throw Error('Sign Client not initialized');
          return (
            this.session ||
              (await this.connect({
                namespaces: this.namespaces,
                optionalNamespaces: this.optionalNamespaces,
                sessionProperties: this.sessionProperties,
                scopedProperties: this.scopedProperties,
              })),
            await this.requestAccounts()
          );
        }
        async disconnect() {
          var e;
          if (!this.session) throw Error('Please call connect() before enable()');
          await this.client.disconnect({
            topic: null == (e = this.session) ? void 0 : e.topic,
            reason: (0, eT.Hjj)('USER_DISCONNECTED'),
          }),
            await this.cleanup();
        }
        async connect(e) {
          if (!this.client) throw Error('Sign Client not initialized');
          if ((this.setNamespaces(e), await this.cleanupPendingPairings(), !e.skipPairing))
            return await this.pair(e.pairingTopic);
        }
        async authenticate(e, t) {
          if (!this.client) throw Error('Sign Client not initialized');
          this.setNamespaces(e), await this.cleanupPendingPairings();
          let { uri: r, response: i } = await this.client.authenticate(e, t);
          r && ((this.uri = r), this.events.emit('display_uri', r));
          let s = await i();
          if (((this.session = s.session), this.session)) {
            let e = nm(this.session.namespaces);
            (this.namespaces = nf(this.namespaces, e)),
              await this.persist('namespaces', this.namespaces),
              this.onConnect();
          }
          return s;
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        get isWalletConnect() {
          return !0;
        }
        async pair(e) {
          let { uri: t, approval: r } = await this.client.connect({
            pairingTopic: e,
            requiredNamespaces: this.namespaces,
            optionalNamespaces: this.optionalNamespaces,
            sessionProperties: this.sessionProperties,
            scopedProperties: this.scopedProperties,
          });
          t && ((this.uri = t), this.events.emit('display_uri', t));
          let i = await r();
          this.session = i;
          let s = nm(i.namespaces);
          return (
            (this.namespaces = nf(this.namespaces, s)),
            await this.persist('namespaces', this.namespaces),
            await this.persist('optionalNamespaces', this.optionalNamespaces),
            this.onConnect(),
            this.session
          );
        }
        setDefaultChain(e, t) {
          try {
            if (!this.session) return;
            let [r, i] = this.validateChain(e),
              s = this.getProvider(r);
            s.name === sY ? s.setDefaultChain(`${r}:${i}`, t) : s.setDefaultChain(i, t);
          } catch (e) {
            if (!/Please call connect/.test(e.message)) throw e;
          }
        }
        async cleanupPendingPairings(e = {}) {
          this.logger.info('Cleaning up inactive pairings...');
          let t = this.client.pairing.getAll();
          if ((0, eT.OP1)(t)) {
            for (let r of t)
              e.deletePairings
                ? this.client.core.expirer.set(r.topic, 0)
                : await this.client.core.relayer.subscriber.unsubscribe(r.topic);
            this.logger.info(`Inactive pairings cleared: ${t.length}`);
          }
        }
        abortPairingAttempt() {
          this.logger.warn('abortPairingAttempt is deprecated. This is now a no-op.');
        }
        async checkStorage() {
          (this.namespaces = (await this.getFromStore('namespaces')) || {}),
            (this.optionalNamespaces = (await this.getFromStore('optionalNamespaces')) || {}),
            this.session && this.createProviders();
        }
        async initialize() {
          this.logger.trace('Initialized'),
            await this.createClient(),
            await this.checkStorage(),
            this.registerEventListeners();
        }
        async createClient() {
          var e, t;
          if (
            ((this.client =
              this.providerOpts.client ||
              (await sT.init({
                core: this.providerOpts.core,
                logger: this.providerOpts.logger || sK,
                relayUrl: this.providerOpts.relayUrl || 'wss://relay.walletconnect.org',
                projectId: this.providerOpts.projectId,
                metadata: this.providerOpts.metadata,
                storageOptions: this.providerOpts.storageOptions,
                storage: this.providerOpts.storage,
                name: this.providerOpts.name,
                customStoragePrefix: this.providerOpts.customStoragePrefix,
                telemetryEnabled: this.providerOpts.telemetryEnabled,
              }))),
            this.providerOpts.session)
          )
            try {
              this.session = this.client.session.get(this.providerOpts.session.topic);
            } catch (r) {
              throw (
                (this.logger.error('Failed to get session', r),
                Error(
                  `The provided session: ${null == (t = null == (e = this.providerOpts) ? void 0 : e.session) ? void 0 : t.topic} doesn't exist in the Sign client`
                ))
              );
            }
          else {
            let e = this.client.session.getAll();
            this.session = e[0];
          }
          this.logger.trace('SignClient Initialized');
        }
        createProviders() {
          if (!this.client) throw Error('Sign Client not initialized');
          if (!this.session)
            throw Error('Session not initialized. Please call connect() before enable()');
          let e = [...new Set(Object.keys(this.session.namespaces).map((e) => (0, eT.kob)(e)))];
          nE('client', this.client),
            nE('events', this.events),
            nE('disableProviderPing', this.disableProviderPing),
            e.forEach((e) => {
              if (!this.session) return;
              let t = (function (e, t) {
                  let r = Object.keys(t.namespaces).filter((t) => t.includes(e));
                  if (!r.length) return [];
                  let i = [];
                  return (
                    r.forEach((e) => {
                      let r = t.namespaces[e].accounts;
                      i.push(...r);
                    }),
                    i
                  );
                })(e, this.session),
                r = np(t),
                i = om(oy({}, nf(this.namespaces, this.optionalNamespaces)[e]), {
                  accounts: t,
                  chains: r,
                });
              switch (e) {
                case 'eip155':
                  this.rpcProviders[e] = new nk({ namespace: i });
                  break;
                case 'algorand':
                  this.rpcProviders[e] = new nW({ namespace: i });
                  break;
                case 'solana':
                  this.rpcProviders[e] = new n$({ namespace: i });
                  break;
                case 'cosmos':
                  this.rpcProviders[e] = new nH({ namespace: i });
                  break;
                case 'polkadot':
                  this.rpcProviders[e] = new nx({ namespace: i });
                  break;
                case 'cip34':
                  this.rpcProviders[e] = new nQ({ namespace: i });
                  break;
                case 'elrond':
                  this.rpcProviders[e] = new n2({ namespace: i });
                  break;
                case 'multiversx':
                  this.rpcProviders[e] = new n6({ namespace: i });
                  break;
                case 'near':
                  this.rpcProviders[e] = new oe({ namespace: i });
                  break;
                case 'tezos':
                  this.rpcProviders[e] = new os({ namespace: i });
                  break;
                default:
                  this.rpcProviders[sY]
                    ? this.rpcProviders[sY].updateNamespace(i)
                    : (this.rpcProviders[sY] = new oc({ namespace: i }));
              }
            });
        }
        registerEventListeners() {
          if (typeof this.client > 'u') throw Error('Sign Client is not initialized');
          this.client.on('session_ping', (e) => {
            var t;
            let { topic: r } = e;
            r === (null == (t = this.session) ? void 0 : t.topic) &&
              this.events.emit('session_ping', e);
          }),
            this.client.on('session_event', (e) => {
              var t;
              let { params: r, topic: i } = e;
              if (i !== (null == (t = this.session) ? void 0 : t.topic)) return;
              let { event: s } = r;
              if ('accountsChanged' === s.name) {
                let e = s.data;
                e && (0, eT.OP1)(e) && this.events.emit('accountsChanged', e.map(ny));
              } else if ('chainChanged' === s.name) {
                let e = r.chainId,
                  t = r.event.data,
                  i = (0, eT.kob)(e),
                  s = nb(e) !== nb(t) ? `${i}:${nb(t)}` : e;
                this.onChainChanged(s);
              } else this.events.emit(s.name, s.data);
              this.events.emit('session_event', e);
            }),
            this.client.on('session_update', ({ topic: e, params: t }) => {
              var r, i;
              if (e !== (null == (r = this.session) ? void 0 : r.topic)) return;
              let { namespaces: s } = t,
                n = null == (i = this.client) ? void 0 : i.session.get(e);
              (this.session = om(oy({}, n), { namespaces: s })),
                this.onSessionUpdate(),
                this.events.emit('session_update', { topic: e, params: t });
            }),
            this.client.on('session_delete', async (e) => {
              var t;
              e.topic === (null == (t = this.session) ? void 0 : t.topic) &&
                (await this.cleanup(),
                this.events.emit('session_delete', e),
                this.events.emit(
                  'disconnect',
                  om(oy({}, (0, eT.Hjj)('USER_DISCONNECTED')), { data: e.topic })
                ));
            }),
            this.on(sJ.DEFAULT_CHAIN_CHANGED, (e) => {
              this.onChainChanged(e, !0);
            });
        }
        getProvider(e) {
          return this.rpcProviders[e] || this.rpcProviders[sY];
        }
        onSessionUpdate() {
          Object.keys(this.rpcProviders).forEach((e) => {
            var t;
            this.getProvider(e).updateNamespace(
              null == (t = this.session) ? void 0 : t.namespaces[e]
            );
          });
        }
        setNamespaces(e) {
          let {
            namespaces: t,
            optionalNamespaces: r,
            sessionProperties: i,
            scopedProperties: s,
          } = e;
          t && Object.keys(t).length && (this.namespaces = t),
            r && Object.keys(r).length && (this.optionalNamespaces = r),
            (this.sessionProperties = i),
            (this.scopedProperties = s);
        }
        validateChain(e) {
          let [t, r] = e?.split(':') || ['', ''];
          if (!this.namespaces || !Object.keys(this.namespaces).length) return [t, r];
          if (
            t &&
            !Object.keys(this.namespaces || {})
              .map((e) => (0, eT.kob)(e))
              .includes(t)
          )
            throw Error(
              `Namespace '${t}' is not configured. Please call connect() first with namespace config.`
            );
          if (t && r) return [t, r];
          let i = (0, eT.kob)(Object.keys(this.namespaces)[0]),
            s = this.rpcProviders[i].getDefaultChain();
          return [i, s];
        }
        async requestAccounts() {
          let [e] = this.validateChain();
          return await this.getProvider(e).requestAccounts();
        }
        async onChainChanged(e, t = !1) {
          if (!this.namespaces) return;
          let [r, i] = this.validateChain(e);
          if (!i) return;
          this.updateNamespaceChain(r, i), this.events.emit('chainChanged', i);
          let s = this.getProvider(r).getDefaultChain();
          t || this.getProvider(r).setDefaultChain(i),
            this.emitAccountsChangedOnChainChange({
              namespace: r,
              previousChainId: s,
              newChainId: e,
            }),
            await this.persist('namespaces', this.namespaces);
        }
        emitAccountsChangedOnChainChange({ namespace: e, previousChainId: t, newChainId: r }) {
          var i, s;
          try {
            if (t === r) return;
            let n =
              null == (s = null == (i = this.session) ? void 0 : i.namespaces[e])
                ? void 0
                : s.accounts;
            if (!n) return;
            let o = n.filter((e) => e.includes(`${r}:`)).map(ny);
            if (!(0, eT.OP1)(o)) return;
            this.events.emit('accountsChanged', o);
          } catch (e) {
            this.logger.warn('Failed to emit accountsChanged on chain change', e);
          }
        }
        updateNamespaceChain(e, t) {
          if (!this.namespaces) return;
          let r = this.namespaces[e] ? e : `${e}:${t}`;
          this.namespaces[r]
            ? this.namespaces[r] && (this.namespaces[r].defaultChain = t)
            : (this.namespaces[r] = { chains: [], methods: [], events: [], defaultChain: t });
        }
        onConnect() {
          this.createProviders(), this.events.emit('connect', { session: this.session });
        }
        async cleanup() {
          (this.namespaces = void 0),
            (this.optionalNamespaces = void 0),
            (this.sessionProperties = void 0),
            await this.deleteFromStore('namespaces'),
            await this.deleteFromStore('optionalNamespaces'),
            await this.deleteFromStore('sessionProperties'),
            (this.session = void 0),
            await this.cleanupPendingPairings({ deletePairings: !0 }),
            await this.cleanupStorage();
        }
        async persist(e, t) {
          var r;
          let i = (null == (r = this.session) ? void 0 : r.topic) || '';
          await this.client.core.storage.setItem(`${sG}/${e}${i}`, t);
        }
        async getFromStore(e) {
          var t;
          let r = (null == (t = this.session) ? void 0 : t.topic) || '';
          return await this.client.core.storage.getItem(`${sG}/${e}${r}`);
        }
        async deleteFromStore(e) {
          var t;
          let r = (null == (t = this.session) ? void 0 : t.topic) || '';
          await this.client.core.storage.removeItem(`${sG}/${e}${r}`);
        }
        async cleanupStorage() {
          var e;
          try {
            if ((null == (e = this.client) ? void 0 : e.session.length) > 0) return;
            for (let e of await this.client.core.storage.getKeys())
              e.startsWith(sG) && (await this.client.core.storage.removeItem(e));
          } catch (e) {
            this.logger.warn('Failed to cleanup storage', e);
          }
        }
      }
      let ov = ow;
    },
    73642: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), r(24584).__exportStar(r(24025), t);
    },
    78618: (e, t, r) => {
      'use strict';
      r.d(t, { Cq: () => tS, FA: () => tA, TZ: () => tO, UF: () => tP });
      var i = r(95572),
        s = r(25476);
      function n(e, ...t) {
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
      function o(e, t = !0) {
        if (e.destroyed) throw Error('Hash instance has been destroyed');
        if (t && e.finished) throw Error('Hash#digest() has already been called');
      }
      let a = 'object' == typeof globalThis && 'crypto' in globalThis ? globalThis.crypto : void 0,
        c = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength);
      function l(e) {
        return (
          'string' == typeof e &&
            (e = (function (e) {
              if ('string' != typeof e) throw Error('utf8ToBytes expected string, got ' + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          n(e),
          e
        );
      }
      class h {
        clone() {
          return this._cloneInto();
        }
      }
      function u(e = 32) {
        if (a && 'function' == typeof a.getRandomValues)
          return a.getRandomValues(new Uint8Array(e));
        if (a && 'function' == typeof a.randomBytes) return a.randomBytes(e);
        throw Error('crypto.getRandomValues must be defined');
      }
      class d extends h {
        constructor(e, t, r, i) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = r),
            (this.isLE = i),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = c(this.buffer));
        }
        update(e) {
          o(this);
          let { view: t, buffer: r, blockLen: i } = this,
            s = (e = l(e)).length;
          for (let n = 0; n < s; ) {
            let o = Math.min(i - this.pos, s - n);
            if (o === i) {
              let t = c(e);
              for (; i <= s - n; n += i) this.process(t, n);
              continue;
            }
            r.set(e.subarray(n, n + o), this.pos),
              (this.pos += o),
              (n += o),
              this.pos === i && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          o(this),
            (function (e, t) {
              n(e);
              let r = t.outputLen;
              if (e.length < r)
                throw Error('digestInto() expects output buffer of length at least ' + r);
            })(e, this),
            (this.finished = !0);
          let { buffer: t, view: r, blockLen: i, isLE: s } = this,
            { pos: a } = this;
          (t[a++] = 128),
            this.buffer.subarray(a).fill(0),
            this.padOffset > i - a && (this.process(r, 0), (a = 0));
          for (let e = a; e < i; e++) t[e] = 0;
          (function (e, t, r, i) {
            if ('function' == typeof e.setBigUint64) return e.setBigUint64(t, r, i);
            let s = BigInt(32),
              n = BigInt(0xffffffff),
              o = Number((r >> s) & n),
              a = Number(r & n),
              c = 4 * !!i,
              l = 4 * !i;
            e.setUint32(t + c, o, i), e.setUint32(t + l, a, i);
          })(r, i - 8, BigInt(8 * this.length), s),
            this.process(r, 0);
          let l = c(e),
            h = this.outputLen;
          if (h % 4) throw Error('_sha2: outputLen should be aligned to 32bit');
          let u = h / 4,
            d = this.get();
          if (u > d.length) throw Error('_sha2: outputLen bigger than state');
          for (let e = 0; e < u; e++) l.setUint32(4 * e, d[e], s);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let r = e.slice(0, t);
          return this.destroy(), r;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let { blockLen: t, buffer: r, length: i, finished: s, destroyed: n, pos: o } = this;
          return (
            (e.length = i),
            (e.pos = o),
            (e.finished = s),
            (e.destroyed = n),
            i % t && e.buffer.set(r),
            e
          );
        }
      }
      let p = BigInt(0x100000000 - 1),
        f = BigInt(32),
        g = {
          split: function (e, t = !1) {
            let r = new Uint32Array(e.length),
              i = new Uint32Array(e.length);
            for (let s = 0; s < e.length; s++) {
              let { h: n, l: o } = (function (e, t = !1) {
                return t
                  ? { h: Number(e & p), l: Number((e >> f) & p) }
                  : { h: 0 | Number((e >> f) & p), l: 0 | Number(e & p) };
              })(e[s], t);
              [r[s], i[s]] = [n, o];
            }
            return [r, i];
          },
          shrSH: (e, t, r) => e >>> r,
          shrSL: (e, t, r) => (e << (32 - r)) | (t >>> r),
          rotrSH: (e, t, r) => (e >>> r) | (t << (32 - r)),
          rotrSL: (e, t, r) => (e << (32 - r)) | (t >>> r),
          rotrBH: (e, t, r) => (e << (64 - r)) | (t >>> (r - 32)),
          rotrBL: (e, t, r) => (e >>> (r - 32)) | (t << (64 - r)),
          add: function (e, t, r, i) {
            let s = (t >>> 0) + (i >>> 0);
            return { h: (e + r + ((s / 0x100000000) | 0)) | 0, l: 0 | s };
          },
          add3L: (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0),
          add3H: (e, t, r, i) => (t + r + i + ((e / 0x100000000) | 0)) | 0,
          add4L: (e, t, r, i) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (i >>> 0),
          add4H: (e, t, r, i, s) => (t + r + i + s + ((e / 0x100000000) | 0)) | 0,
          add5H: (e, t, r, i, s, n) => (t + r + i + s + n + ((e / 0x100000000) | 0)) | 0,
          add5L: (e, t, r, i, s) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (i >>> 0) + (s >>> 0),
        },
        [y, m] = g.split(
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
        ),
        b = new Uint32Array(80),
        w = new Uint32Array(80);
      class v extends d {
        constructor() {
          super(128, 64, 16, !1),
            (this.Ah = 0x6a09e667),
            (this.Al = -0xc4336f8),
            (this.Bh = -0x4498517b),
            (this.Bl = -0x7b3558c5),
            (this.Ch = 0x3c6ef372),
            (this.Cl = -0x16b07d5),
            (this.Dh = -0x5ab00ac6),
            (this.Dl = 0x5f1d36f1),
            (this.Eh = 0x510e527f),
            (this.El = -0x52197d2f),
            (this.Fh = -0x64fa9774),
            (this.Fl = 0x2b3e6c1f),
            (this.Gh = 0x1f83d9ab),
            (this.Gl = -0x4be4295),
            (this.Hh = 0x5be0cd19),
            (this.Hl = 0x137e2179);
        }
        get() {
          let {
            Ah: e,
            Al: t,
            Bh: r,
            Bl: i,
            Ch: s,
            Cl: n,
            Dh: o,
            Dl: a,
            Eh: c,
            El: l,
            Fh: h,
            Fl: u,
            Gh: d,
            Gl: p,
            Hh: f,
            Hl: g,
          } = this;
          return [e, t, r, i, s, n, o, a, c, l, h, u, d, p, f, g];
        }
        set(e, t, r, i, s, n, o, a, c, l, h, u, d, p, f, g) {
          (this.Ah = 0 | e),
            (this.Al = 0 | t),
            (this.Bh = 0 | r),
            (this.Bl = 0 | i),
            (this.Ch = 0 | s),
            (this.Cl = 0 | n),
            (this.Dh = 0 | o),
            (this.Dl = 0 | a),
            (this.Eh = 0 | c),
            (this.El = 0 | l),
            (this.Fh = 0 | h),
            (this.Fl = 0 | u),
            (this.Gh = 0 | d),
            (this.Gl = 0 | p),
            (this.Hh = 0 | f),
            (this.Hl = 0 | g);
        }
        process(e, t) {
          for (let r = 0; r < 16; r++, t += 4)
            (b[r] = e.getUint32(t)), (w[r] = e.getUint32((t += 4)));
          for (let e = 16; e < 80; e++) {
            let t = 0 | b[e - 15],
              r = 0 | w[e - 15],
              i = g.rotrSH(t, r, 1) ^ g.rotrSH(t, r, 8) ^ g.shrSH(t, r, 7),
              s = g.rotrSL(t, r, 1) ^ g.rotrSL(t, r, 8) ^ g.shrSL(t, r, 7),
              n = 0 | b[e - 2],
              o = 0 | w[e - 2],
              a = g.rotrSH(n, o, 19) ^ g.rotrBH(n, o, 61) ^ g.shrSH(n, o, 6),
              c = g.rotrSL(n, o, 19) ^ g.rotrBL(n, o, 61) ^ g.shrSL(n, o, 6),
              l = g.add4L(s, c, w[e - 7], w[e - 16]),
              h = g.add4H(l, i, a, b[e - 7], b[e - 16]);
            (b[e] = 0 | h), (w[e] = 0 | l);
          }
          let {
            Ah: r,
            Al: i,
            Bh: s,
            Bl: n,
            Ch: o,
            Cl: a,
            Dh: c,
            Dl: l,
            Eh: h,
            El: u,
            Fh: d,
            Fl: p,
            Gh: f,
            Gl: v,
            Hh: E,
            Hl: _,
          } = this;
          for (let e = 0; e < 80; e++) {
            let t = g.rotrSH(h, u, 14) ^ g.rotrSH(h, u, 18) ^ g.rotrBH(h, u, 41),
              I = g.rotrSL(h, u, 14) ^ g.rotrSL(h, u, 18) ^ g.rotrBL(h, u, 41),
              D = (h & d) ^ (~h & f),
              x = (u & p) ^ (~u & v),
              P = g.add5L(_, I, x, m[e], w[e]),
              S = g.add5H(P, E, t, D, y[e], b[e]),
              O = 0 | P,
              A = g.rotrSH(r, i, 28) ^ g.rotrBH(r, i, 34) ^ g.rotrBH(r, i, 39),
              C = g.rotrSL(r, i, 28) ^ g.rotrBL(r, i, 34) ^ g.rotrBL(r, i, 39),
              T = (r & s) ^ (r & o) ^ (s & o),
              N = (i & n) ^ (i & a) ^ (n & a);
            (E = 0 | f),
              (_ = 0 | v),
              (f = 0 | d),
              (v = 0 | p),
              (d = 0 | h),
              (p = 0 | u),
              ({ h: h, l: u } = g.add(0 | c, 0 | l, 0 | S, 0 | O)),
              (c = 0 | o),
              (l = 0 | a),
              (o = 0 | s),
              (a = 0 | n),
              (s = 0 | r),
              (n = 0 | i);
            let R = g.add3L(O, C, N);
            (r = g.add3H(R, S, A, T)), (i = 0 | R);
          }
          ({ h: r, l: i } = g.add(0 | this.Ah, 0 | this.Al, 0 | r, 0 | i)),
            ({ h: s, l: n } = g.add(0 | this.Bh, 0 | this.Bl, 0 | s, 0 | n)),
            ({ h: o, l: a } = g.add(0 | this.Ch, 0 | this.Cl, 0 | o, 0 | a)),
            ({ h: c, l: l } = g.add(0 | this.Dh, 0 | this.Dl, 0 | c, 0 | l)),
            ({ h: h, l: u } = g.add(0 | this.Eh, 0 | this.El, 0 | h, 0 | u)),
            ({ h: d, l: p } = g.add(0 | this.Fh, 0 | this.Fl, 0 | d, 0 | p)),
            ({ h: f, l: v } = g.add(0 | this.Gh, 0 | this.Gl, 0 | f, 0 | v)),
            ({ h: E, l: _ } = g.add(0 | this.Hh, 0 | this.Hl, 0 | E, 0 | _)),
            this.set(r, i, s, n, o, a, c, l, h, u, d, p, f, v, E, _);
        }
        roundClean() {
          b.fill(0), w.fill(0);
        }
        destroy() {
          this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      }
      let E = (function (e) {
          let t = (t) => e().update(l(t)).digest(),
            r = e();
          return (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = () => e()), t;
        })(() => new v()),
        _ = BigInt(0),
        I = BigInt(1),
        D = BigInt(2);
      function x(e) {
        return (
          e instanceof Uint8Array || (ArrayBuffer.isView(e) && 'Uint8Array' === e.constructor.name)
        );
      }
      function P(e) {
        if (!x(e)) throw Error('Uint8Array expected');
      }
      function S(e, t) {
        if ('boolean' != typeof t) throw Error(e + ' boolean expected, got ' + t);
      }
      let O = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
      function A(e) {
        P(e);
        let t = '';
        for (let r = 0; r < e.length; r++) t += O[e[r]];
        return t;
      }
      function C(e) {
        if ('string' != typeof e) throw Error('hex string expected, got ' + typeof e);
        return '' === e ? _ : BigInt('0x' + e);
      }
      let T = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function N(e) {
        return e >= T._0 && e <= T._9
          ? e - T._0
          : e >= T.A && e <= T.F
            ? e - (T.A - 10)
            : e >= T.a && e <= T.f
              ? e - (T.a - 10)
              : void 0;
      }
      function R(e) {
        if ('string' != typeof e) throw Error('hex string expected, got ' + typeof e);
        let t = e.length,
          r = t / 2;
        if (t % 2) throw Error('hex string expected, got unpadded hex of length ' + t);
        let i = new Uint8Array(r);
        for (let t = 0, s = 0; t < r; t++, s += 2) {
          let r = N(e.charCodeAt(s)),
            n = N(e.charCodeAt(s + 1));
          if (void 0 === r || void 0 === n)
            throw Error(
              'hex string expected, got non-hex character "' + (e[s] + e[s + 1]) + '" at index ' + s
            );
          i[t] = 16 * r + n;
        }
        return i;
      }
      function j(e) {
        return P(e), C(A(Uint8Array.from(e).reverse()));
      }
      function L(e, t) {
        return R(e.toString(16).padStart(2 * t, '0'));
      }
      function k(e, t) {
        return L(e, t).reverse();
      }
      function U(e, t, r) {
        let i;
        if ('string' == typeof t)
          try {
            i = R(t);
          } catch (t) {
            throw Error(e + ' must be hex string or Uint8Array, cause: ' + t);
          }
        else if (x(t)) i = Uint8Array.from(t);
        else throw Error(e + ' must be hex string or Uint8Array');
        let s = i.length;
        if ('number' == typeof r && s !== r)
          throw Error(e + ' of length ' + r + ' expected, got ' + s);
        return i;
      }
      function B(...e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
          let i = e[r];
          P(i), (t += i.length);
        }
        let r = new Uint8Array(t);
        for (let t = 0, i = 0; t < e.length; t++) {
          let s = e[t];
          r.set(s, i), (i += s.length);
        }
        return r;
      }
      let q = (e) => 'bigint' == typeof e && _ <= e;
      function $(e, t, r, i) {
        if (!(q(t) && q(r) && q(i)) || !(r <= t) || !(t < i))
          throw Error('expected valid ' + e + ': ' + r + ' <= n < ' + i + ', got ' + t);
      }
      let M = (e) => (D << BigInt(e - 1)) - I,
        z = {
          bigint: (e) => 'bigint' == typeof e,
          function: (e) => 'function' == typeof e,
          boolean: (e) => 'boolean' == typeof e,
          string: (e) => 'string' == typeof e,
          stringOrUint8Array: (e) => 'string' == typeof e || x(e),
          isSafeInteger: (e) => Number.isSafeInteger(e),
          array: (e) => Array.isArray(e),
          field: (e, t) => t.Fp.isValid(e),
          hash: (e) => 'function' == typeof e && Number.isSafeInteger(e.outputLen),
        };
      function F(e, t, r = {}) {
        let i = (t, r, i) => {
          let s = z[r];
          if ('function' != typeof s) throw Error('invalid validator function');
          let n = e[t];
          if (!(i && void 0 === n) && !s(n, e))
            throw Error('param ' + String(t) + ' is invalid. Expected ' + r + ', got ' + n);
        };
        for (let [e, r] of Object.entries(t)) i(e, r, !1);
        for (let [e, t] of Object.entries(r)) i(e, t, !0);
        return e;
      }
      function H(e) {
        let t = new WeakMap();
        return (r, ...i) => {
          let s = t.get(r);
          if (void 0 !== s) return s;
          let n = e(r, ...i);
          return t.set(r, n), n;
        };
      }
      let V = BigInt(0),
        K = BigInt(1),
        G = BigInt(2),
        W = BigInt(3),
        Y = BigInt(4),
        Z = BigInt(5),
        J = BigInt(8);
      function Q(e, t) {
        let r = e % t;
        return r >= V ? r : t + r;
      }
      function X(e, t, r) {
        let i = e;
        for (; t-- > V; ) (i *= i), (i %= r);
        return i;
      }
      function ee(e, t) {
        if (e === V) throw Error('invert: expected non-zero number');
        if (t <= V) throw Error('invert: expected positive modulus, got ' + t);
        let r = Q(e, t),
          i = t,
          s = V,
          n = K;
        for (; r !== V; ) {
          let e = i / r,
            t = i % r,
            o = s - n * e;
          (i = r), (r = t), (s = n), (n = o);
        }
        if (i !== K) throw Error('invert: does not exist');
        return Q(s, t);
      }
      let et = (e, t) => (Q(e, t) & K) === K,
        er = [
          'create',
          'isValid',
          'is0',
          'neg',
          'inv',
          'sqrt',
          'sqr',
          'eql',
          'add',
          'sub',
          'mul',
          'pow',
          'div',
          'addN',
          'subN',
          'mulN',
          'sqrN',
        ];
      function ei(e, t) {
        let r = void 0 !== t ? t : e.toString(2).length,
          i = Math.ceil(r / 8);
        return { nBitLength: r, nByteLength: i };
      }
      function es(e, t, r = !1, i = {}) {
        let s;
        if (e <= V) throw Error('invalid field: expected ORDER > 0, got ' + e);
        let { nBitLength: n, nByteLength: o } = ei(e, t);
        if (o > 2048) throw Error('invalid field: expected ORDER of <= 2048 bytes');
        let a = Object.freeze({
          ORDER: e,
          isLE: r,
          BITS: n,
          BYTES: o,
          MASK: M(n),
          ZERO: V,
          ONE: K,
          create: (t) => Q(t, e),
          isValid: (t) => {
            if ('bigint' != typeof t)
              throw Error('invalid field element: expected bigint, got ' + typeof t);
            return V <= t && t < e;
          },
          is0: (e) => e === V,
          isOdd: (e) => (e & K) === K,
          neg: (t) => Q(-t, e),
          eql: (e, t) => e === t,
          sqr: (t) => Q(t * t, e),
          add: (t, r) => Q(t + r, e),
          sub: (t, r) => Q(t - r, e),
          mul: (t, r) => Q(t * r, e),
          pow: (e, t) =>
            (function (e, t, r) {
              if (r < V) throw Error('invalid exponent, negatives unsupported');
              if (r === V) return e.ONE;
              if (r === K) return t;
              let i = e.ONE,
                s = t;
              for (; r > V; ) r & K && (i = e.mul(i, s)), (s = e.sqr(s)), (r >>= K);
              return i;
            })(a, e, t),
          div: (t, r) => Q(t * ee(r, e), e),
          sqrN: (e) => e * e,
          addN: (e, t) => e + t,
          subN: (e, t) => e - t,
          mulN: (e, t) => e * t,
          inv: (t) => ee(t, e),
          sqrt:
            i.sqrt ||
            ((t) => (
              s ||
                (s = (function (e) {
                  if (e % Y === W) {
                    let t = (e + K) / Y;
                    return function (e, r) {
                      let i = e.pow(r, t);
                      if (!e.eql(e.sqr(i), r)) throw Error('Cannot find square root');
                      return i;
                    };
                  }
                  if (e % J === Z) {
                    let t = (e - Z) / J;
                    return function (e, r) {
                      let i = e.mul(r, G),
                        s = e.pow(i, t),
                        n = e.mul(r, s),
                        o = e.mul(e.mul(n, G), s),
                        a = e.mul(n, e.sub(o, e.ONE));
                      if (!e.eql(e.sqr(a), r)) throw Error('Cannot find square root');
                      return a;
                    };
                  }
                  return (function (e) {
                    let t, r, i;
                    let s = (e - K) / G;
                    for (t = e - K, r = 0; t % G === V; t /= G, r++);
                    for (
                      i = G;
                      i < e &&
                      (function (e, t, r) {
                        if (t < V) throw Error('invalid exponent, negatives unsupported');
                        if (r <= V) throw Error('invalid modulus');
                        if (r === K) return V;
                        let i = K;
                        for (; t > V; ) t & K && (i = (i * e) % r), (e = (e * e) % r), (t >>= K);
                        return i;
                      })(i, s, e) !==
                        e - K;
                      i++
                    )
                      if (i > 1e3) throw Error('Cannot find square root: likely non-prime P');
                    if (1 === r) {
                      let t = (e + K) / Y;
                      return function (e, r) {
                        let i = e.pow(r, t);
                        if (!e.eql(e.sqr(i), r)) throw Error('Cannot find square root');
                        return i;
                      };
                    }
                    let n = (t + K) / G;
                    return function (e, o) {
                      if (e.pow(o, s) === e.neg(e.ONE)) throw Error('Cannot find square root');
                      let a = r,
                        c = e.pow(e.mul(e.ONE, i), t),
                        l = e.pow(o, n),
                        h = e.pow(o, t);
                      for (; !e.eql(h, e.ONE); ) {
                        if (e.eql(h, e.ZERO)) return e.ZERO;
                        let t = 1;
                        for (let r = e.sqr(h); t < a && !e.eql(r, e.ONE); t++) r = e.sqr(r);
                        let r = e.pow(c, K << BigInt(a - t - 1));
                        (c = e.sqr(r)), (l = e.mul(l, r)), (h = e.mul(h, c)), (a = t);
                      }
                      return l;
                    };
                  })(e);
                })(e)),
              s(a, t)
            )),
          invertBatch: (e) =>
            (function (e, t) {
              let r = Array(t.length),
                i = t.reduce((t, i, s) => (e.is0(i) ? t : ((r[s] = t), e.mul(t, i))), e.ONE),
                s = e.inv(i);
              return (
                t.reduceRight(
                  (t, i, s) => (e.is0(i) ? t : ((r[s] = e.mul(t, r[s])), e.mul(t, i))),
                  s
                ),
                r
              );
            })(a, e),
          cmov: (e, t, r) => (r ? t : e),
          toBytes: (e) => (r ? k(e, o) : L(e, o)),
          fromBytes: (e) => {
            if (e.length !== o)
              throw Error('Field.fromBytes: expected ' + o + ' bytes, got ' + e.length);
            return r ? j(e) : C(A(e));
          },
        });
        return Object.freeze(a);
      }
      let en = BigInt(0),
        eo = BigInt(1);
      function ea(e, t) {
        let r = t.negate();
        return e ? r : t;
      }
      function ec(e, t) {
        if (!Number.isSafeInteger(e) || e <= 0 || e > t)
          throw Error('invalid window size, expected [1..' + t + '], got W=' + e);
      }
      function el(e, t) {
        return ec(e, t), { windows: Math.ceil(t / e) + 1, windowSize: 2 ** (e - 1) };
      }
      let eh = new WeakMap(),
        eu = new WeakMap();
      function ed(e) {
        return eu.get(e) || 1;
      }
      let ep = BigInt(0),
        ef = BigInt(1),
        eg = BigInt(2),
        ey = BigInt(8),
        em = { zip215: !0 };
      BigInt(0), BigInt(1);
      let eb = BigInt(
          '57896044618658097711785492504343953926634992332820282019728792003956564819949'
        ),
        ew = BigInt(
          '19681161376707505956807079304988542015446066515923890162744021073123829784752'
        );
      BigInt(0);
      let ev = BigInt(1),
        eE = BigInt(2);
      BigInt(3);
      let e_ = BigInt(5),
        eI = BigInt(8),
        eD = es(eb, void 0, !0),
        ex = (function (e) {
          var t;
          let r = (function (e) {
              let t =
                (F(
                  e.Fp,
                  er.reduce((e, t) => ((e[t] = 'function'), e), {
                    ORDER: 'bigint',
                    MASK: 'bigint',
                    BYTES: 'isSafeInteger',
                    BITS: 'isSafeInteger',
                  })
                ),
                F(
                  e,
                  { n: 'bigint', h: 'bigint', Gx: 'field', Gy: 'field' },
                  { nBitLength: 'isSafeInteger', nByteLength: 'isSafeInteger' }
                ),
                Object.freeze({ ...ei(e.n, e.nBitLength), ...e, p: e.Fp.ORDER }));
              return (
                F(
                  e,
                  { hash: 'function', a: 'bigint', d: 'bigint', randomBytes: 'function' },
                  {
                    adjustScalarBytes: 'function',
                    domain: 'function',
                    uvRatio: 'function',
                    mapToCurve: 'function',
                  }
                ),
                Object.freeze({ ...t })
              );
            })(e),
            { Fp: i, n: s, prehash: n, hash: o, randomBytes: a, nByteLength: c, h: l } = r,
            h = eg << (BigInt(8 * c) - ef),
            u = i.create,
            d = es(r.n, r.nBitLength),
            p =
              r.uvRatio ||
              ((e, t) => {
                try {
                  return { isValid: !0, value: i.sqrt(e * i.inv(t)) };
                } catch {
                  return { isValid: !1, value: ep };
                }
              }),
            f = r.adjustScalarBytes || ((e) => e),
            g =
              r.domain ||
              ((e, t, r) => {
                if ((S('phflag', r), t.length || r))
                  throw Error('Contexts/pre-hash are not supported');
                return e;
              });
          function y(e, t) {
            $('coordinate ' + e, t, ep, h);
          }
          function m(e) {
            if (!(e instanceof v)) throw Error('ExtendedPoint expected');
          }
          let b = H((e, t) => {
              let { ex: r, ey: s, ez: n } = e,
                o = e.is0();
              null == t && (t = o ? ey : i.inv(n));
              let a = u(r * t),
                c = u(s * t),
                l = u(n * t);
              if (o) return { x: ep, y: ef };
              if (l !== ef) throw Error('invZ was invalid');
              return { x: a, y: c };
            }),
            w = H((e) => {
              let { a: t, d: i } = r;
              if (e.is0()) throw Error('bad point: ZERO');
              let { ex: s, ey: n, ez: o, et: a } = e,
                c = u(s * s),
                l = u(n * n),
                h = u(o * o),
                d = u(h * h),
                p = u(c * t);
              if (u(h * u(p + l)) !== u(d + u(i * u(c * l))))
                throw Error('bad point: equation left != right (1)');
              if (u(s * n) !== u(o * a)) throw Error('bad point: equation left != right (2)');
              return !0;
            });
          class v {
            constructor(e, t, r, i) {
              (this.ex = e),
                (this.ey = t),
                (this.ez = r),
                (this.et = i),
                y('x', e),
                y('y', t),
                y('z', r),
                y('t', i),
                Object.freeze(this);
            }
            get x() {
              return this.toAffine().x;
            }
            get y() {
              return this.toAffine().y;
            }
            static fromAffine(e) {
              if (e instanceof v) throw Error('extended point not allowed');
              let { x: t, y: r } = e || {};
              return y('x', t), y('y', r), new v(t, r, ef, u(t * r));
            }
            static normalizeZ(e) {
              let t = i.invertBatch(e.map((e) => e.ez));
              return e.map((e, r) => e.toAffine(t[r])).map(v.fromAffine);
            }
            static msm(e, t) {
              return (function (e, t, r, i) {
                if (
                  ((function (e, t) {
                    if (!Array.isArray(e)) throw Error('array expected');
                    e.forEach((e, r) => {
                      if (!(e instanceof t)) throw Error('invalid point at index ' + r);
                    });
                  })(r, e),
                  (function (e, t) {
                    if (!Array.isArray(e)) throw Error('array of scalars expected');
                    e.forEach((e, r) => {
                      if (!t.isValid(e)) throw Error('invalid scalar at index ' + r);
                    });
                  })(i, t),
                  r.length !== i.length)
                )
                  throw Error('arrays of points and scalars must have equal length');
                let s = e.ZERO,
                  n = (function (e) {
                    let t;
                    for (t = 0; e > _; e >>= I, t += 1);
                    return t;
                  })(BigInt(r.length)),
                  o = n > 12 ? n - 3 : n > 4 ? n - 2 : n ? 2 : 1,
                  a = (1 << o) - 1,
                  c = Array(a + 1).fill(s),
                  l = Math.floor((t.BITS - 1) / o) * o,
                  h = s;
                for (let e = l; e >= 0; e -= o) {
                  c.fill(s);
                  for (let t = 0; t < i.length; t++) {
                    let s = Number((i[t] >> BigInt(e)) & BigInt(a));
                    c[s] = c[s].add(r[t]);
                  }
                  let t = s;
                  for (let e = c.length - 1, r = s; e > 0; e--) (r = r.add(c[e])), (t = t.add(r));
                  if (((h = h.add(t)), 0 !== e)) for (let e = 0; e < o; e++) h = h.double();
                }
                return h;
              })(v, d, e, t);
            }
            _setWindowSize(e) {
              x.setWindowSize(this, e);
            }
            assertValidity() {
              w(this);
            }
            equals(e) {
              m(e);
              let { ex: t, ey: r, ez: i } = this,
                { ex: s, ey: n, ez: o } = e,
                a = u(t * o),
                c = u(s * i),
                l = u(r * o),
                h = u(n * i);
              return a === c && l === h;
            }
            is0() {
              return this.equals(v.ZERO);
            }
            negate() {
              return new v(u(-this.ex), this.ey, this.ez, u(-this.et));
            }
            double() {
              let { a: e } = r,
                { ex: t, ey: i, ez: s } = this,
                n = u(t * t),
                o = u(i * i),
                a = u(eg * u(s * s)),
                c = u(e * n),
                l = t + i,
                h = u(u(l * l) - n - o),
                d = c + o,
                p = d - a,
                f = c - o,
                g = u(h * p),
                y = u(d * f),
                m = u(h * f);
              return new v(g, y, u(p * d), m);
            }
            add(e) {
              m(e);
              let { a: t, d: i } = r,
                { ex: s, ey: n, ez: o, et: a } = this,
                { ex: c, ey: l, ez: h, et: d } = e;
              if (t === BigInt(-1)) {
                let e = u((n - s) * (l + c)),
                  t = u((n + s) * (l - c)),
                  r = u(t - e);
                if (r === ep) return this.double();
                let i = u(o * eg * d),
                  p = u(a * eg * h),
                  f = p + i,
                  g = t + e,
                  y = p - i,
                  m = u(f * r),
                  b = u(g * y),
                  w = u(f * y);
                return new v(m, b, u(r * g), w);
              }
              let p = u(s * c),
                f = u(n * l),
                g = u(a * i * d),
                y = u(o * h),
                b = u((s + n) * (c + l) - p - f),
                w = y - g,
                E = y + g,
                _ = u(f - t * p),
                I = u(b * w),
                D = u(E * _),
                x = u(b * _);
              return new v(I, D, u(w * E), x);
            }
            subtract(e) {
              return this.add(e.negate());
            }
            wNAF(e) {
              return x.wNAFCached(this, e, v.normalizeZ);
            }
            multiply(e) {
              $('scalar', e, ef, s);
              let { p: t, f: r } = this.wNAF(e);
              return v.normalizeZ([t, r])[0];
            }
            multiplyUnsafe(e, t = v.ZERO) {
              return (
                $('scalar', e, ep, s),
                e === ep
                  ? D
                  : this.is0() || e === ef
                    ? this
                    : x.wNAFCachedUnsafe(this, e, v.normalizeZ, t)
              );
            }
            isSmallOrder() {
              return this.multiplyUnsafe(l).is0();
            }
            isTorsionFree() {
              return x.unsafeLadder(this, s).is0();
            }
            toAffine(e) {
              return b(this, e);
            }
            clearCofactor() {
              let { h: e } = r;
              return e === ef ? this : this.multiplyUnsafe(e);
            }
            static fromHex(e, t = !1) {
              let { d: s, a: n } = r,
                o = i.BYTES;
              (e = U('pointHex', e, o)), S('zip215', t);
              let a = e.slice(),
                c = e[o - 1];
              a[o - 1] = -129 & c;
              let l = j(a);
              $('pointHex.y', l, ep, t ? h : i.ORDER);
              let d = u(l * l),
                { isValid: f, value: g } = p(u(d - ef), u(s * d - n));
              if (!f) throw Error('Point.fromHex: invalid y coordinate');
              let y = (g & ef) === ef,
                m = (128 & c) != 0;
              if (!t && g === ep && m) throw Error('Point.fromHex: x=0 and x_0=1');
              return m !== y && (g = u(-g)), v.fromAffine({ x: g, y: l });
            }
            static fromPrivateKey(e) {
              return P(e).point;
            }
            toRawBytes() {
              let { x: e, y: t } = this.toAffine(),
                r = k(t, i.BYTES);
              return (r[r.length - 1] |= e & ef ? 128 : 0), r;
            }
            toHex() {
              return A(this.toRawBytes());
            }
          }
          (v.BASE = new v(r.Gx, r.Gy, ef, u(r.Gx * r.Gy))), (v.ZERO = new v(ep, ef, ef, ep));
          let { BASE: E, ZERO: D } = v,
            x =
              ((t = 8 * c),
              {
                constTimeNegate: ea,
                hasPrecomputes: (e) => 1 !== ed(e),
                unsafeLadder(e, t, r = v.ZERO) {
                  let i = e;
                  for (; t > en; ) t & eo && (r = r.add(i)), (i = i.double()), (t >>= eo);
                  return r;
                },
                precomputeWindow(e, r) {
                  let { windows: i, windowSize: s } = el(r, t),
                    n = [],
                    o = e,
                    a = o;
                  for (let e = 0; e < i; e++) {
                    (a = o), n.push(a);
                    for (let e = 1; e < s; e++) (a = a.add(o)), n.push(a);
                    o = a.double();
                  }
                  return n;
                },
                wNAF(e, r, i) {
                  let { windows: s, windowSize: n } = el(e, t),
                    o = v.ZERO,
                    a = v.BASE,
                    c = BigInt(2 ** e - 1),
                    l = 2 ** e,
                    h = BigInt(e);
                  for (let e = 0; e < s; e++) {
                    let t = e * n,
                      s = Number(i & c);
                    (i >>= h), s > n && ((s -= l), (i += eo));
                    let u = t + Math.abs(s) - 1,
                      d = e % 2 != 0,
                      p = s < 0;
                    0 === s ? (a = a.add(ea(d, r[t]))) : (o = o.add(ea(p, r[u])));
                  }
                  return { p: o, f: a };
                },
                wNAFUnsafe(e, r, i, s = v.ZERO) {
                  let { windows: n, windowSize: o } = el(e, t),
                    a = BigInt(2 ** e - 1),
                    c = 2 ** e,
                    l = BigInt(e);
                  for (let e = 0; e < n; e++) {
                    let t = e * o;
                    if (i === en) break;
                    let n = Number(i & a);
                    if (((i >>= l), n > o && ((n -= c), (i += eo)), 0 === n)) continue;
                    let h = r[t + Math.abs(n) - 1];
                    n < 0 && (h = h.negate()), (s = s.add(h));
                  }
                  return s;
                },
                getPrecomputes(e, t, r) {
                  let i = eh.get(t);
                  return i || ((i = this.precomputeWindow(t, e)), 1 !== e && eh.set(t, r(i))), i;
                },
                wNAFCached(e, t, r) {
                  let i = ed(e);
                  return this.wNAF(i, this.getPrecomputes(i, e, r), t);
                },
                wNAFCachedUnsafe(e, t, r, i) {
                  let s = ed(e);
                  return 1 === s
                    ? this.unsafeLadder(e, t, i)
                    : this.wNAFUnsafe(s, this.getPrecomputes(s, e, r), t, i);
                },
                setWindowSize(e, r) {
                  ec(r, t), eu.set(e, r), eh.delete(e);
                },
              });
          function P(e) {
            let t = i.BYTES;
            e = U('private key', e, t);
            let r = U('hashed private key', o(e), 2 * t),
              n = f(r.slice(0, t)),
              a = r.slice(t, 2 * t),
              c = Q(j(n), s),
              l = E.multiply(c),
              h = l.toRawBytes();
            return { head: n, prefix: a, scalar: c, point: l, pointBytes: h };
          }
          function O(e = new Uint8Array(), ...t) {
            return Q(j(o(g(B(...t), U('context', e), !!n))), s);
          }
          return (
            E._setWindowSize(8),
            {
              CURVE: r,
              getPublicKey: function (e) {
                return P(e).pointBytes;
              },
              sign: function (e, t, r = {}) {
                (e = U('message', e)), n && (e = n(e));
                let { prefix: o, scalar: a, pointBytes: c } = P(t),
                  l = O(r.context, o, e),
                  h = E.multiply(l).toRawBytes(),
                  u = Q(l + O(r.context, h, c, e) * a, s);
                return $('signature.s', u, ep, s), U('result', B(h, k(u, i.BYTES)), 2 * i.BYTES);
              },
              verify: function (e, t, r, s = em) {
                let o, a, c;
                let { context: l, zip215: h } = s,
                  u = i.BYTES;
                (e = U('signature', e, 2 * u)),
                  (t = U('message', t)),
                  (r = U('publicKey', r, u)),
                  void 0 !== h && S('zip215', h),
                  n && (t = n(t));
                let d = j(e.slice(u, 2 * u));
                try {
                  (o = v.fromHex(r, h)),
                    (a = v.fromHex(e.slice(0, u), h)),
                    (c = E.multiplyUnsafe(d));
                } catch {
                  return !1;
                }
                if (!h && o.isSmallOrder()) return !1;
                let p = O(l, a.toRawBytes(), o.toRawBytes(), t);
                return a.add(o.multiplyUnsafe(p)).subtract(c).clearCofactor().equals(v.ZERO);
              },
              ExtendedPoint: v,
              utils: {
                getExtendedPublicKey: P,
                randomPrivateKey: () => a(i.BYTES),
                precompute: (e = 8, t = v.BASE) => (t._setWindowSize(e), t.multiply(BigInt(3)), t),
              },
            }
          );
        })({
          a: BigInt(-1),
          d: BigInt(
            '37095705934669439343138083508754565189542113879843219016388785533085940283555'
          ),
          Fp: eD,
          n: BigInt('7237005577332262213973186563042994240857116359379907606001950938285454250989'),
          h: eI,
          Gx: BigInt(
            '15112221349535400772501151409588531511454012693041857206046113283949847762202'
          ),
          Gy: BigInt(
            '46316835694926478169428394003475163141307993866256225615783033603165251855960'
          ),
          hash: E,
          randomBytes: u,
          adjustScalarBytes: function (e) {
            return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
          },
          uvRatio: function (e, t) {
            let r = Q(t * t * t, eb),
              i = (function (e) {
                let t = BigInt(10),
                  r = BigInt(20),
                  i = BigInt(40),
                  s = BigInt(80),
                  n = (((e * e) % eb) * e) % eb,
                  o = (X(n, eE, eb) * n) % eb,
                  a = (X(o, ev, eb) * e) % eb,
                  c = (X(a, e_, eb) * a) % eb,
                  l = (X(c, t, eb) * c) % eb,
                  h = (X(l, r, eb) * l) % eb,
                  u = (X(h, i, eb) * h) % eb,
                  d = (X(u, s, eb) * u) % eb,
                  p = (X(d, s, eb) * u) % eb,
                  f = (X(p, t, eb) * c) % eb;
                return { pow_p_5_8: (X(f, eE, eb) * e) % eb, b2: n };
              })(e * Q(r * r * t, eb)).pow_p_5_8,
              s = Q(e * r * i, eb),
              n = Q(t * s * s, eb),
              o = s,
              a = Q(s * ew, eb),
              c = n === e,
              l = n === Q(-e, eb),
              h = n === Q(-e * ew, eb);
            return (
              c && (s = o),
              (l || h) && (s = a),
              et(s, eb) && (s = Q(-s, eb)),
              { isValid: c || l, value: s }
            );
          },
        }),
        eP = 'base64url',
        eS = 'utf8',
        eO = 'utf8',
        eA = 'base58btc';
      function eC(e) {
        return null != globalThis.Buffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e;
      }
      function eT(e = 0) {
        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe
          ? eC(globalThis.Buffer.allocUnsafe(e))
          : new Uint8Array(e);
      }
      function eN(e, t) {
        t || (t = e.reduce((e, t) => e + t.length, 0));
        let r = eT(t),
          i = 0;
        for (let t of e) r.set(t, i), (i += t.length);
        return eC(r);
      }
      var eR = function (e, t) {
        if (e.length >= 255) throw TypeError('Alphabet too long');
        for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
        for (var s = 0; s < e.length; s++) {
          var n = e.charAt(s),
            o = n.charCodeAt(0);
          if (255 !== r[o]) throw TypeError(n + ' is ambiguous');
          r[o] = s;
        }
        var a = e.length,
          c = e.charAt(0),
          l = Math.log(a) / Math.log(256),
          h = Math.log(256) / Math.log(a);
        function u(e) {
          if ('string' != typeof e) throw TypeError('Expected String');
          if (0 === e.length) return new Uint8Array();
          var t = 0;
          if (' ' !== e[0]) {
            for (var i = 0, s = 0; e[t] === c; ) i++, t++;
            for (var n = ((e.length - t) * l + 1) >>> 0, o = new Uint8Array(n); e[t]; ) {
              var h = r[e.charCodeAt(t)];
              if (255 === h) return;
              for (var u = 0, d = n - 1; (0 !== h || u < s) && -1 !== d; d--, u++)
                (h += (a * o[d]) >>> 0), (o[d] = h % 256 >>> 0), (h = (h / 256) >>> 0);
              if (0 !== h) throw Error('Non-zero carry');
              (s = u), t++;
            }
            if (' ' !== e[t]) {
              for (var p = n - s; p !== n && 0 === o[p]; ) p++;
              for (var f = new Uint8Array(i + (n - p)), g = i; p !== n; ) f[g++] = o[p++];
              return f;
            }
          }
        }
        return {
          encode: function (t) {
            if (
              (t instanceof Uint8Array ||
                (ArrayBuffer.isView(t)
                  ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                  : Array.isArray(t) && (t = Uint8Array.from(t))),
              !(t instanceof Uint8Array))
            )
              throw TypeError('Expected Uint8Array');
            if (0 === t.length) return '';
            for (var r = 0, i = 0, s = 0, n = t.length; s !== n && 0 === t[s]; ) s++, r++;
            for (var o = ((n - s) * h + 1) >>> 0, l = new Uint8Array(o); s !== n; ) {
              for (var u = t[s], d = 0, p = o - 1; (0 !== u || d < i) && -1 !== p; p--, d++)
                (u += (256 * l[p]) >>> 0), (l[p] = u % a >>> 0), (u = (u / a) >>> 0);
              if (0 !== u) throw Error('Non-zero carry');
              (i = d), s++;
            }
            for (var f = o - i; f !== o && 0 === l[f]; ) f++;
            for (var g = c.repeat(r); f < o; ++f) g += e.charAt(l[f]);
            return g;
          },
          decodeUnsafe: u,
          decode: function (e) {
            var r = u(e);
            if (r) return r;
            throw Error(`Non-${t} character`);
          },
        };
      };
      let ej = (e) => {
          if (e instanceof Uint8Array && 'Uint8Array' === e.constructor.name) return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw Error('Unknown type, must be binary type');
        },
        eL = (e) => new TextEncoder().encode(e),
        ek = (e) => new TextDecoder().decode(e);
      class eU {
        constructor(e, t, r) {
          (this.name = e), (this.prefix = t), (this.baseEncode = r);
        }
        encode(e) {
          if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
          throw Error('Unknown type, must be binary type');
        }
      }
      class eB {
        constructor(e, t, r) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw Error('Invalid prefix character');
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = r);
        }
        decode(e) {
          if ('string' == typeof e) {
            if (e.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`
              );
            return this.baseDecode(e.slice(this.prefix.length));
          }
          throw Error('Can only multibase decode strings');
        }
        or(e) {
          return e$(this, e);
        }
      }
      class eq {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return e$(this, e);
        }
        decode(e) {
          let t = e[0],
            r = this.decoders[t];
          if (r) return r.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`
          );
        }
      }
      let e$ = (e, t) =>
        new eq({ ...(e.decoders || { [e.prefix]: e }), ...(t.decoders || { [t.prefix]: t }) });
      class eM {
        constructor(e, t, r, i) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = r),
            (this.baseDecode = i),
            (this.encoder = new eU(e, t, r)),
            (this.decoder = new eB(e, t, i));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      let ez = ({ name: e, prefix: t, encode: r, decode: i }) => new eM(e, t, r, i),
        eF = ({ prefix: e, name: t, alphabet: r }) => {
          let { encode: i, decode: s } = eR(r, t);
          return ez({ prefix: e, name: t, encode: i, decode: (e) => ej(s(e)) });
        },
        eH = (e, t, r, i) => {
          let s = {};
          for (let e = 0; e < t.length; ++e) s[t[e]] = e;
          let n = e.length;
          for (; '=' === e[n - 1]; ) --n;
          let o = new Uint8Array(((n * r) / 8) | 0),
            a = 0,
            c = 0,
            l = 0;
          for (let t = 0; t < n; ++t) {
            let n = s[e[t]];
            if (void 0 === n) throw SyntaxError(`Non-${i} character`);
            (c = (c << r) | n), (a += r) >= 8 && ((a -= 8), (o[l++] = 255 & (c >> a)));
          }
          if (a >= r || 255 & (c << (8 - a))) throw SyntaxError('Unexpected end of data');
          return o;
        },
        eV = (e, t, r) => {
          let i = '=' === t[t.length - 1],
            s = (1 << r) - 1,
            n = '',
            o = 0,
            a = 0;
          for (let i = 0; i < e.length; ++i)
            for (a = (a << 8) | e[i], o += 8; o > r; ) (o -= r), (n += t[s & (a >> o)]);
          if ((o && (n += t[s & (a << (r - o))]), i)) for (; (n.length * r) & 7; ) n += '=';
          return n;
        },
        eK = ({ name: e, prefix: t, bitsPerChar: r, alphabet: i }) =>
          ez({ prefix: t, name: e, encode: (e) => eV(e, i, r), decode: (t) => eH(t, i, r, e) });
      var eG = Object.freeze({
          __proto__: null,
          identity: ez({
            prefix: '\0',
            name: 'identity',
            encode: (e) => ek(e),
            decode: (e) => eL(e),
          }),
        }),
        eW = Object.freeze({
          __proto__: null,
          base2: eK({ prefix: '0', name: 'base2', alphabet: '01', bitsPerChar: 1 }),
        }),
        eY = Object.freeze({
          __proto__: null,
          base8: eK({ prefix: '7', name: 'base8', alphabet: '01234567', bitsPerChar: 3 }),
        }),
        eZ = Object.freeze({
          __proto__: null,
          base10: eF({ prefix: '9', name: 'base10', alphabet: '0123456789' }),
        }),
        eJ = Object.freeze({
          __proto__: null,
          base16: eK({ prefix: 'f', name: 'base16', alphabet: '0123456789abcdef', bitsPerChar: 4 }),
          base16upper: eK({
            prefix: 'F',
            name: 'base16upper',
            alphabet: '0123456789ABCDEF',
            bitsPerChar: 4,
          }),
        });
      let eQ = eK({
          prefix: 'b',
          name: 'base32',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567',
          bitsPerChar: 5,
        }),
        eX = eK({
          prefix: 'B',
          name: 'base32upper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
          bitsPerChar: 5,
        }),
        e0 = eK({
          prefix: 'c',
          name: 'base32pad',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567=',
          bitsPerChar: 5,
        }),
        e1 = eK({
          prefix: 'C',
          name: 'base32padupper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=',
          bitsPerChar: 5,
        }),
        e2 = eK({
          prefix: 'v',
          name: 'base32hex',
          alphabet: '0123456789abcdefghijklmnopqrstuv',
          bitsPerChar: 5,
        }),
        e8 = eK({
          prefix: 'V',
          name: 'base32hexupper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV',
          bitsPerChar: 5,
        }),
        e3 = eK({
          prefix: 't',
          name: 'base32hexpad',
          alphabet: '0123456789abcdefghijklmnopqrstuv=',
          bitsPerChar: 5,
        });
      var e5 = Object.freeze({
          __proto__: null,
          base32: eQ,
          base32upper: eX,
          base32pad: e0,
          base32padupper: e1,
          base32hex: e2,
          base32hexupper: e8,
          base32hexpad: e3,
          base32hexpadupper: eK({
            prefix: 'T',
            name: 'base32hexpadupper',
            alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV=',
            bitsPerChar: 5,
          }),
          base32z: eK({
            prefix: 'h',
            name: 'base32z',
            alphabet: 'ybndrfg8ejkmcpqxot1uwisza345h769',
            bitsPerChar: 5,
          }),
        }),
        e6 = Object.freeze({
          __proto__: null,
          base36: eF({
            prefix: 'k',
            name: 'base36',
            alphabet: '0123456789abcdefghijklmnopqrstuvwxyz',
          }),
          base36upper: eF({
            prefix: 'K',
            name: 'base36upper',
            alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
          }),
        }),
        e4 = Object.freeze({
          __proto__: null,
          base58btc: eF({
            name: 'base58btc',
            prefix: 'z',
            alphabet: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
          }),
          base58flickr: eF({
            name: 'base58flickr',
            prefix: 'Z',
            alphabet: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ',
          }),
        });
      let e9 = eK({
          prefix: 'm',
          name: 'base64',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          bitsPerChar: 6,
        }),
        e7 = eK({
          prefix: 'M',
          name: 'base64pad',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
          bitsPerChar: 6,
        });
      var te = Object.freeze({
        __proto__: null,
        base64: e9,
        base64pad: e7,
        base64url: eK({
          prefix: 'u',
          name: 'base64url',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
          bitsPerChar: 6,
        }),
        base64urlpad: eK({
          prefix: 'U',
          name: 'base64urlpad',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=',
          bitsPerChar: 6,
        }),
      });
      let tt = Array.from(
          '\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42'
        ),
        tr = tt.reduce((e, t, r) => ((e[r] = t), e), []),
        ti = tt.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []);
      var ts = Object.freeze({
        __proto__: null,
        base256emoji: ez({
          prefix: '\uD83D\uDE80',
          name: 'base256emoji',
          encode: function (e) {
            return e.reduce((e, t) => (e += tr[t]), '');
          },
          decode: function (e) {
            let t = [];
            for (let r of e) {
              let e = ti[r.codePointAt(0)];
              if (void 0 === e) throw Error(`Non-base256emoji character: ${r}`);
              t.push(e);
            }
            return new Uint8Array(t);
          },
        }),
      });
      function tn(e, t, r) {
        (t = t || []), (r = r || 0);
        for (var i = r; e >= 0x80000000; ) (t[r++] = (255 & e) | 128), (e /= 128);
        for (; -128 & e; ) (t[r++] = (255 & e) | 128), (e >>>= 7);
        return (t[r] = 0 | e), (tn.bytes = r - i + 1), t;
      }
      function to(e, t) {
        var r,
          i = 0,
          t = t || 0,
          s = 0,
          n = t,
          o = e.length;
        do {
          if (n >= o) throw ((to.bytes = 0), RangeError('Could not decode varint'));
          (r = e[n++]), (i += s < 28 ? (127 & r) << s : (127 & r) * Math.pow(2, s)), (s += 7);
        } while (r >= 128);
        return (to.bytes = n - t), i;
      }
      var ta = {
        encode: tn,
        encodingLength: function (e) {
          return e < 128
            ? 1
            : e < 16384
              ? 2
              : e < 2097152
                ? 3
                : e < 0x10000000
                  ? 4
                  : e < 0x800000000
                    ? 5
                    : e < 0x40000000000
                      ? 6
                      : e < 0x2000000000000
                        ? 7
                        : e < 0x100000000000000
                          ? 8
                          : e < 0x8000000000000000
                            ? 9
                            : 10;
        },
      };
      let tc = (e, t, r = 0) => (ta.encode(e, t, r), t),
        tl = (e) => ta.encodingLength(e),
        th = (e, t) => {
          let r = t.byteLength,
            i = tl(e),
            s = i + tl(r),
            n = new Uint8Array(s + r);
          return tc(e, n, 0), tc(r, n, i), n.set(t, s), new tu(e, r, t, n);
        };
      class tu {
        constructor(e, t, r, i) {
          (this.code = e), (this.size = t), (this.digest = r), (this.bytes = i);
        }
      }
      let td = ({ name: e, code: t, encode: r }) => new tp(e, t, r);
      class tp {
        constructor(e, t, r) {
          (this.name = e), (this.code = t), (this.encode = r);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            let t = this.encode(e);
            return t instanceof Uint8Array ? th(this.code, t) : t.then((e) => th(this.code, e));
          }
          throw Error('Unknown type, must be binary type');
        }
      }
      let tf = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t));
      var tg = Object.freeze({
          __proto__: null,
          sha256: td({ name: 'sha2-256', code: 18, encode: tf('SHA-256') }),
          sha512: td({ name: 'sha2-512', code: 19, encode: tf('SHA-512') }),
        }),
        ty = Object.freeze({
          __proto__: null,
          identity: { code: 0, name: 'identity', encode: ej, digest: (e) => th(0, ej(e)) },
        });
      new TextEncoder(), new TextDecoder();
      let tm = { ...eG, ...eW, ...eY, ...eZ, ...eJ, ...e5, ...e6, ...e4, ...te, ...ts };
      function tb(e, t, r, i) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: i },
        };
      }
      ({ ...tg, ...ty });
      let tw = tb(
          'utf8',
          'u',
          (e) => 'u' + new TextDecoder('utf8').decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        tv = tb(
          'ascii',
          'a',
          (e) => {
            let t = 'a';
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t;
          },
          (e) => {
            let t = eT((e = e.substring(1)).length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          }
        ),
        tE = { utf8: tw, 'utf-8': tw, hex: tm.base16, latin1: tv, ascii: tv, binary: tv, ...tm };
      function t_(e, t = 'utf8') {
        let r = tE[t];
        if (!r) throw Error(`Unsupported encoding "${t}"`);
        return ('utf8' === t || 'utf-8' === t) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString('utf8')
          : r.encoder.encode(e).substring(1);
      }
      function tI(e, t = 'utf8') {
        let r = tE[t];
        if (!r) throw Error(`Unsupported encoding "${t}"`);
        return ('utf8' === t || 'utf-8' === t) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? eC(globalThis.Buffer.from(e, 'utf-8'))
          : r.decoder.decode(`${r.prefix}${e}`);
      }
      function tD(e) {
        return (0, s.j)(t_(tI(e, eP), eS));
      }
      function tx(e) {
        return t_(tI((0, s.h)(e), eS), eP);
      }
      function tP(e) {
        return ['did', 'key', 'z' + t_(eN([tI('K36', eA), e]), eA)].join(':');
      }
      function tS(e) {
        let t = e.split('.'),
          r = tD(t[0]),
          i = tD(t[1]);
        return {
          header: r,
          payload: i,
          signature: tI(t[2], eP),
          data: tI(t.slice(0, 2).join('.'), eO),
        };
      }
      function tO(e = u(32)) {
        let t = ex.getPublicKey(e);
        return { secretKey: eN([e, t]), publicKey: t };
      }
      async function tA(e, t, r, s, n = (0, i.fromMiliseconds)(Date.now())) {
        var o, a;
        let c = { alg: 'EdDSA', typ: 'JWT' },
          l = { iss: tP(s.publicKey), sub: e, aud: t, iat: n, exp: n + r },
          h = tI([tx((o = { header: c, payload: l }).header), tx(o.payload)].join('.'), eO);
        return [
          tx(
            (a = { header: c, payload: l, signature: ex.sign(h, s.secretKey.slice(0, 32)) }).header
          ),
          tx(a.payload),
          t_(a.signature, eP),
        ].join('.');
      }
    },
    82914: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      let i = r(24584);
      i.__exportStar(r(98358), t), i.__exportStar(r(88707), t);
    },
    88707: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.ONE_YEAR =
          t.FOUR_WEEKS =
          t.THREE_WEEKS =
          t.TWO_WEEKS =
          t.ONE_WEEK =
          t.THIRTY_DAYS =
          t.SEVEN_DAYS =
          t.FIVE_DAYS =
          t.THREE_DAYS =
          t.ONE_DAY =
          t.TWENTY_FOUR_HOURS =
          t.TWELVE_HOURS =
          t.SIX_HOURS =
          t.THREE_HOURS =
          t.ONE_HOUR =
          t.SIXTY_MINUTES =
          t.THIRTY_MINUTES =
          t.TEN_MINUTES =
          t.FIVE_MINUTES =
          t.ONE_MINUTE =
          t.SIXTY_SECONDS =
          t.THIRTY_SECONDS =
          t.TEN_SECONDS =
          t.FIVE_SECONDS =
          t.ONE_SECOND =
            void 0),
        (t.ONE_SECOND = 1),
        (t.FIVE_SECONDS = 5),
        (t.TEN_SECONDS = 10),
        (t.THIRTY_SECONDS = 30),
        (t.SIXTY_SECONDS = 60),
        (t.ONE_MINUTE = t.SIXTY_SECONDS),
        (t.FIVE_MINUTES = 5 * t.ONE_MINUTE),
        (t.TEN_MINUTES = 10 * t.ONE_MINUTE),
        (t.THIRTY_MINUTES = 30 * t.ONE_MINUTE),
        (t.SIXTY_MINUTES = 60 * t.ONE_MINUTE),
        (t.ONE_HOUR = t.SIXTY_MINUTES),
        (t.THREE_HOURS = 3 * t.ONE_HOUR),
        (t.SIX_HOURS = 6 * t.ONE_HOUR),
        (t.TWELVE_HOURS = 12 * t.ONE_HOUR),
        (t.TWENTY_FOUR_HOURS = 24 * t.ONE_HOUR),
        (t.ONE_DAY = t.TWENTY_FOUR_HOURS),
        (t.THREE_DAYS = 3 * t.ONE_DAY),
        (t.FIVE_DAYS = 5 * t.ONE_DAY),
        (t.SEVEN_DAYS = 7 * t.ONE_DAY),
        (t.THIRTY_DAYS = 30 * t.ONE_DAY),
        (t.ONE_WEEK = t.SEVEN_DAYS),
        (t.TWO_WEEKS = 2 * t.ONE_WEEK),
        (t.THREE_WEEKS = 3 * t.ONE_WEEK),
        (t.FOUR_WEEKS = 4 * t.ONE_WEEK),
        (t.ONE_YEAR = 365 * t.ONE_DAY);
    },
    95572: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      let i = r(24584);
      i.__exportStar(r(32214), t),
        i.__exportStar(r(45103), t),
        i.__exportStar(r(73642), t),
        i.__exportStar(r(82914), t);
    },
    98358: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.ONE_THOUSAND = t.ONE_HUNDRED = void 0),
        (t.ONE_HUNDRED = 100),
        (t.ONE_THOUSAND = 1e3);
    },
  },
]);
