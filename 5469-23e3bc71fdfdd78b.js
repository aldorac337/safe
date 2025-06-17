(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5469],
  {
    14221: function (t, e, r) {
      'use strict';
      r.d(e, {
        DU: function () {
          return u;
        },
        dB: function () {
          return c;
        },
        e: function () {
          return o;
        },
        zS: function () {
          return a;
        },
      });
      var n = r(58854),
        s = r(9284),
        i = r(66412);
      let u = (0, n.createContext)({
          account: null,
          jwtInfo: null,
          deviceId: null,
          appOrigin: null,
        }),
        o = () => {
          let { account: t } = (0, n.useContext)(u);
          return t;
        },
        a = () => {
          let t = o();
          return (0, s.kG)(t, 'Not connected to '.concat(i.iC, ' session')), t;
        },
        c = () => {
          let { account: t, deviceId: e, jwtInfo: r, appOrigin: i } = (0, n.useContext)(u);
          return (
            (0, s.kG)(t, 'Account should be set'),
            (0, s.kG)(e, 'Device ID should be set'),
            (0, s.kG)(r, 'JWT should be set'),
            (0, s.kG)(i, 'App origin should be set'),
            { account: t, deviceId: e, jwtInfo: r, appOrigin: i }
          );
        };
    },
    35410: function (t) {
      let e = (t, e) => {
          if (void 0 === e) throw Error('Environment variable '.concat(t, ' is required'));
          return e;
        },
        r = e('NODE_ENV', 'production'),
        n = e('NEXT_PUBLIC_DEPLOYMENT', 'production'),
        s = e('NEXT_PUBLIC_APP_ORIGIN', 'https://app.family.co');
      function i() {
        switch (n) {
          case 'local':
            return 'http://localhost:4009';
          case 'staging':
            return 'https://api.staging.family-account.co';
          default:
            return 'https://api.app.family.co';
        }
      }
      function u() {
        switch (n) {
          case 'local':
            return 'ws://localhost:4009';
          case 'staging':
            return 'wss://api.staging.family-account.co';
          default:
            return 'wss://api.app.family.co';
        }
      }
      t.exports = {
        getApiHttpUrl: i,
        getApiWebSocketUrl: u,
        getEnvironment: function () {
          return {
            name: n,
            apiHttpUrl: i(),
            apiWebSocketUrl: u(),
            externalAccountsConfig: {
              apple: { clientId: 'app.aaa.siwa', redirectURI: window.location.origin + '/' },
            },
          };
        },
        IS_LOCAL: 'development' === r,
        DEPLOYMENT: n,
        IS_PRODUCTION: 'production' === n,
        FAMILY_ACCOUNTS_ORIGIN: s,
      };
    },
    66412: function (t, e, r) {
      'use strict';
      r.d(e, {
        iC: function () {
          return s;
        },
        wz: function () {
          return i;
        },
      });
      var n = r(35410);
      let s = 'Family',
        i = n.FAMILY_ACCOUNTS_ORIGIN.replace('https://', ''),
        u = n.FAMILY_ACCOUNTS_ORIGIN;
      new URL(u);
    },
    10732: function (t, e, r) {
      'use strict';
      r.d(e, {
        $m: function () {
          return l;
        },
        A7: function () {
          return g;
        },
        Bu: function () {
          return f;
        },
        DT: function () {
          return _;
        },
        Dv: function () {
          return v;
        },
        IV: function () {
          return m;
        },
        N: function () {
          return y;
        },
        O6: function () {
          return S;
        },
        W9: function () {
          return x;
        },
        gg: function () {
          return w;
        },
        lE: function () {
          return h;
        },
        lq: function () {
          return p;
        },
        n6: function () {
          return E;
        },
      });
      let n = () => {
          let t = globalThis.crypto;
          if (!t) throw Error('Crypto not available');
          return t;
        },
        s = (t) => !!t.toHexString,
        i = (t) => (
          void 0 !== t.slice ||
            (t.slice = function () {
              let e = Array.prototype.slice.call(arguments);
              return i(new Uint8Array(Array.prototype.slice.apply(t, e)));
            }),
          t
        ),
        u = (t) => (g(t) && !(t.length % 2)) || a(t),
        o = (t) => 'number' == typeof t && t == t && t % 1 == 0,
        a = (t) => {
          if (null == t) return !1;
          if (t.constructor === Uint8Array) return !0;
          if ('string' == typeof t || !o(t.length) || t.length < 0) return !1;
          for (let e = 0; e < t.length; e++) {
            let r = t[e];
            if (!o(r) || r < 0 || r >= 256) return !1;
          }
          return !0;
        },
        c = (t, e) => {
          if ('number' == typeof t) {
            if (t < 0 || t >= 9007199254740991) throw Error(e + 'out-of-safe-range');
            if (t % 1) throw Error(e + 'non-integer');
          }
        },
        l = (t, e) => {
          if ('string' != typeof t) t = v(t);
          else if (!g(t)) throw Error('invalid hexlify value');
          if (t.length > 2 * e + 2) throw Error('value out of range');
          for (; t.length < 2 * e + 2; ) t = '0x0' + t.substring(2);
          return t;
        },
        h = (t) => {
          if ((s(t) && (t = t.toHexString()), g(t))) {
            let e = t.substring(2);
            if (e.length % 2) throw Error('hex data is odd-length');
            let r = [];
            for (let t = 0; t < e.length; t += 2) r.push(parseInt(e.substring(t, t + 2), 16));
            return i(new Uint8Array(r));
          }
          if (a(t)) return i(new Uint8Array(t));
          throw Error('invalid arrayify value');
        },
        f = (t, e) => {
          if ((t = h(t)).length > e) throw Error('value is longer than the expected length');
          let r = new Uint8Array(e);
          return r.set(t, e - t.length), i(r);
        },
        g = (t, e) =>
          'string' == typeof t && !!t.match(/^0x[0-9A-Fa-f]*$/) && (!e || t.length === 2 + 2 * e),
        d = '0123456789abcdef',
        v = (t) => {
          if ('number' == typeof t) {
            c(t, 'invalid hexlify value');
            let e = '';
            for (; t; ) (e = d[15 & t] + e), (t = Math.floor(t / 16));
            return e.length ? (e.length % 2 && (e = '0' + e), '0x' + e) : '0x00';
          }
          if (s(t)) return t.toHexString();
          if (g(t)) {
            if (t.length % 2) throw Error('hex data is odd-length');
            return t.toLowerCase();
          }
          if (a(t)) {
            let e = '0x';
            for (let r = 0; r < t.length; r++) {
              let n = t[r];
              e += d[(240 & n) >> 4] + d[15 & n];
            }
            return e;
          }
          throw Error('invalid hexlify value');
        },
        p = (t) => t instanceof Uint8Array,
        w = (t, e) => {
          if (t.byteLength !== e.byteLength) return !1;
          for (let r = 0; r !== t.byteLength; r++) if (t[r] !== e[r]) return !1;
          return !0;
        },
        y = (t) => {
          let e = {
            r: '0x',
            s: '0x',
            _vs: '0x',
            recoveryParam: 0,
            v: 0,
            yParityAndS: '0x',
            compact: '0x',
          };
          if (u(t)) {
            let r = h(t);
            if (64 === r.length)
              (e.v = 27 + (r[32] >> 7)),
                (r[32] &= 127),
                (e.r = v(r.slice(0, 32))),
                (e.s = v(r.slice(32, 64)));
            else if (65 === r.length)
              (e.r = v(r.slice(0, 32))), (e.s = v(r.slice(32, 64))), (e.v = r[64]);
            else throw Error('invalid signature string');
            if (e.v < 27) {
              if (0 === e.v || 1 === e.v) e.v += 27;
              else throw Error('signature invalid v byte');
            }
            (e.recoveryParam = 1 - (e.v % 2)),
              e.recoveryParam && (r[32] |= 128),
              (e._vs = v(r.slice(32, 64)));
          } else {
            if (
              ((e.r = t.r),
              (e.s = t.s),
              (e.v = t.v),
              (e.recoveryParam = t.recoveryParam),
              (e._vs = t._vs),
              null != e._vs)
            ) {
              let t = f(h(e._vs), 32);
              e._vs = v(t);
              let r = t[0] >= 128 ? 1 : 0;
              if (null == e.recoveryParam) e.recoveryParam = r;
              else if (e.recoveryParam !== r) throw Error('signature recoveryParam mismatch _vs');
              t[0] &= 127;
              let n = v(t);
              if (null == e.s) e.s = n;
              else if (e.s !== n) throw Error('signature v mismatch _vs');
            }
            if (null == e.recoveryParam) {
              if (null == e.v) throw Error('signature missing v and recoveryParam');
              0 === e.v || 1 === e.v ? (e.recoveryParam = e.v) : (e.recoveryParam = 1 - (e.v % 2));
            } else if (null == e.v) e.v = 27 + e.recoveryParam;
            else {
              let t = 0 === e.v || 1 === e.v ? e.v : 1 - (e.v % 2);
              if (e.recoveryParam !== t) throw Error('signature recoveryParam mismatch v');
            }
            if (null != e.r && g(e.r)) e.r = l(e.r, 32);
            else throw Error('signature missing or invalid r');
            if (null != e.s && g(e.s)) e.s = l(e.s, 32);
            else throw Error('signature missing or invalid s');
            let r = h(e.s);
            if (r[0] >= 128) throw Error('signature s out of range');
            e.recoveryParam && (r[0] |= 128);
            let n = v(r);
            if (e._vs) {
              if (!g(e._vs)) throw Error('signature invalid _vs');
              e._vs = l(e._vs, 32);
            }
            if (null == e._vs) e._vs = n;
            else if (e._vs !== n) throw Error('signature _vs mismatch v and s');
          }
          return (e.yParityAndS = e._vs), (e.compact = e.r + e.yParityAndS.substring(2)), e;
        },
        x = (t) => {
          let e = [],
            r = 0;
          for (let n = 0; n < t.length; n++) {
            let s = t.charCodeAt(n);
            s < 128
              ? (e[r++] = s)
              : (s < 2048
                  ? (e[r++] = (s >> 6) | 192)
                  : ((64512 & s) == 55296 &&
                    n + 1 < t.length &&
                    (64512 & t.charCodeAt(n + 1)) == 56320
                      ? ((s = 65536 + ((1023 & s) << 10) + (1023 & t.charCodeAt(++n))),
                        (e[r++] = (s >> 18) | 240),
                        (e[r++] = ((s >> 12) & 63) | 128))
                      : (e[r++] = (s >> 12) | 224),
                    (e[r++] = ((s >> 6) & 63) | 128)),
                (e[r++] = (63 & s) | 128));
          }
          return new Uint8Array(e);
        },
        m = (t) => {
          let e = [],
            r = 0,
            n = 0;
          for (; r < t.length; ) {
            let s = t[r++];
            if (s < 128) e[n++] = String.fromCharCode(s);
            else if (s > 191 && s < 224) {
              let i = t[r++];
              e[n++] = String.fromCharCode(((31 & s) << 6) | (63 & i));
            } else if (s > 239 && s < 365) {
              let i =
                (((7 & s) << 18) | ((63 & t[r++]) << 12) | ((63 & t[r++]) << 6) | (63 & t[r++])) -
                65536;
              (e[n++] = String.fromCharCode(55296 + (i >> 10))),
                (e[n++] = String.fromCharCode(56320 + (1023 & i)));
            } else {
              let i = t[r++],
                u = t[r++];
              e[n++] = String.fromCharCode(((15 & s) << 12) | ((63 & i) << 6) | (63 & u));
            }
          }
          return e.join('');
        },
        E = (t) => l(v(t), t.length),
        S = (t) => {
          let e = new Uint8Array(t);
          return n().getRandomValues(e), e;
        },
        _ = (t) => '0x'.concat(BigInt(t).toString(16));
    },
    42716: function (t, e, r) {
      'use strict';
      r.d(e, {
        $8: function () {
          return A;
        },
        $C: function () {
          return J;
        },
        BR: function () {
          return G;
        },
        En: function () {
          return K;
        },
        F0: function () {
          return tS;
        },
        GE: function () {
          return ty;
        },
        HJ: function () {
          return W;
        },
        K9: function () {
          return Y;
        },
        Kr: function () {
          return tu;
        },
        L5: function () {
          return tp;
        },
        MJ: function () {
          return te;
        },
        MQ: function () {
          return M;
        },
        Np: function () {
          return tw;
        },
        O3: function () {
          return Q;
        },
        OM: function () {
          return m;
        },
        Pc: function () {
          return tv;
        },
        R9: function () {
          return S;
        },
        RX: function () {
          return to;
        },
        Rq: function () {
          return O;
        },
        Ru: function () {
          return t_;
        },
        SJ: function () {
          return H;
        },
        Sn: function () {
          return tc;
        },
        So: function () {
          return X;
        },
        Sq: function () {
          return tP;
        },
        Tq: function () {
          return w;
        },
        UI: function () {
          return tL;
        },
        Ur: function () {
          return tn;
        },
        V1: function () {
          return Z;
        },
        Yp: function () {
          return b;
        },
        ZR: function () {
          return T;
        },
        _N: function () {
          return _;
        },
        _b: function () {
          return C;
        },
        _q: function () {
          return tr;
        },
        _v: function () {
          return tb;
        },
        a_: function () {
          return R;
        },
        au: function () {
          return p;
        },
        ay: function () {
          return U;
        },
        bH: function () {
          return P;
        },
        cY: function () {
          return tf;
        },
        ci: function () {
          return z;
        },
        d0: function () {
          return L;
        },
        dg: function () {
          return tg;
        },
        dm: function () {
          return B;
        },
        eM: function () {
          return N;
        },
        jZ: function () {
          return td;
        },
        jt: function () {
          return j;
        },
        kr: function () {
          return tm;
        },
        ld: function () {
          return tE;
        },
        lg: function () {
          return tR;
        },
        p9: function () {
          return ti;
        },
        pI: function () {
          return tl;
        },
        qH: function () {
          return y;
        },
        qR: function () {
          return F;
        },
        qT: function () {
          return I;
        },
        rY: function () {
          return tx;
        },
        ro: function () {
          return tt;
        },
        sk: function () {
          return th;
        },
        tS: function () {
          return $;
        },
        wz: function () {
          return ta;
        },
        xV: function () {
          return ts;
        },
        y1: function () {
          return V;
        },
      });
      var n,
        s,
        i,
        u,
        o = r(10732),
        a = r(9284);
      class c {
        get value() {
          if (void 0 === this._value) throw this.valueNotSetError();
          return this._value;
        }
        equals(t) {
          return t.value === this.value;
        }
        setValue(t) {
          this._value = t;
        }
        valueNotSetError() {
          return Error('Value set is undefined');
        }
        constructor(t, e = !1) {
          this.setValue(t), e || this.validate();
        }
      }
      let l = (t) => {
        if ('string' == typeof t) {
          if (!(0, o.A7)(t)) throw Error('String supplied is not a hex string - '.concat(t));
          return (0, o.lE)(t);
        }
        if ((0, o.lq)(t)) return t;
        throw Error('Value supplied is not a valid hex string or uint8array');
      };
      class h extends c {
        validate() {
          if (!this.isVaryingInLength() && this.value.length !== this.getRequiredByteLength())
            throw Error(
              'Invalid - Byte length must be '
                .concat(this.getRequiredByteLength(), ', length is ')
                .concat(this.value.length)
            );
        }
        setValue(t) {
          this._value = l(t);
        }
        isVaryingInLength() {
          return !1;
        }
        equals(t) {
          return (0, o.gg)(this.value, t._value);
        }
        toHexString() {
          return (0, o.n6)(this.value);
        }
        toJSON() {
          return this.toHexString();
        }
        get length() {
          return this.value.length;
        }
        constructor(t) {
          super(l(t));
        }
      }
      class f extends c {
        validate() {
          if ('number' != typeof this._value)
            throw Error('Number supplied is not type number - '.concat(String(this._value)));
        }
        toJSON() {
          return this._value;
        }
        constructor(t) {
          super(t);
        }
      }
      class g extends c {
        validate() {
          if ('string' != typeof this._value)
            throw Error('String supplied is not a string - '.concat(String(this._value)));
        }
        toJSON() {
          return this._value;
        }
        constructor(t, e = !1) {
          super(t, e);
        }
      }
      class d extends c {
        validate() {
          if (!(0, a.kQ)(this._value)) throw Error('String supplied is not a guid string');
          if (this._value.toLowerCase() !== this._value) throw Error('Guid must be lowercased');
        }
        toJSON() {
          return this._value;
        }
        static fromString(t) {
          try {
            return (0, a.Vp)(new this(t));
          } catch (t) {
            return (0, a.BD)(t), (0, a.Rn)(t);
          }
        }
        constructor(t) {
          super(t);
        }
      }
      let v = (t) =>
          t instanceof h || t instanceof f || t instanceof g || t instanceof d || t instanceof Date,
        p = (t) =>
          v(t)
            ? t.toJSON()
            : Array.isArray(t)
              ? t.map((t) => p(t))
              : 'object' == typeof t && null !== t
                ? Object.entries(t).reduce((t, e) => {
                    let [r, n] = e;
                    return { ...t, [r]: p(n) };
                  }, {})
                : t;
      class w extends h {
        getRequiredByteLength() {
          return 32;
        }
        static generate(t, e) {
          return new w(e(t.value));
        }
        constructor(t) {
          super(t);
        }
      }
      class y extends h {
        getRequiredByteLength() {
          return 32;
        }
        static generate(t) {
          return new y(t(32));
        }
        constructor(t) {
          super(t);
        }
      }
      let x = (t) => {
        try {
          let e = new URL(t);
          return (0, a.Vp)(e);
        } catch (t) {
          return (0, a.Rn)(Error('Invalid URL'));
        }
      };
      var m = (((n = m || {}).HTTPS = 'https:'), (n.HTTP = 'http:'), (n.IPFS = 'ipfs:'), n);
      let E = ['https:'];
      class S extends g {
        addQueryParams(t) {
          let e = new URL(this.value);
          return (
            Object.entries(t).forEach((t) => {
              let [r, n] = t;
              e.searchParams.set(r, n);
            }),
            new S(e.toString(), this.config)
          );
        }
        addPath(t) {
          let e = new URL(this.value),
            r = e.pathname.replace(/\/$/, ''),
            n = t.replace(/^\//, '');
          return (e.pathname = ''.concat(r, '/').concat(n)), new S(e.toString(), this.config);
        }
        validate() {
          var t, e, r, n;
          if (
            (null !== (r = null === (t = this.config) || void 0 === t ? void 0 : t.maxLength) &&
            void 0 !== r
              ? r
              : 500) < this.value.length
          )
            throw Error('URL is too long. Max length is '.concat(500, '.'));
          let s = x(this.value);
          if (s.isFailure()) throw s.error;
          if (
            !(
              null !==
                (n = null === (e = this.config) || void 0 === e ? void 0 : e.allowedProtocols) &&
              void 0 !== n
                ? n
                : E
            ).includes(s.value.protocol)
          )
            throw Error('Invalid URL protocol '.concat(s.value.protocol, '.'));
        }
        static validate(t, e) {
          try {
            return new S(t, e), !0;
          } catch (t) {
            return !1;
          }
        }
        constructor(t, e) {
          super(t, !0), (this.config = e), this.validate();
        }
      }
      class _ extends g {
        validate() {
          let t = x(this.value);
          if (t.isFailure()) throw t.error;
          if (
            ((this._value = t.value.origin),
            !('http:' === t.value.protocol && t.value.host.startsWith('localhost:')) &&
              'https:' !== t.value.protocol)
          )
            throw Error('Invalid app origin protocol '.concat(t.value.protocol, '.'));
        }
        get host() {
          return new URL(this.value).host;
        }
        get hostname() {
          return new URL(this.value).hostname;
        }
        get isLocalhost() {
          return this.host.startsWith('localhost:');
        }
        static fromString(t) {
          try {
            return (0, a.Vp)(new _(t));
          } catch (t) {
            return (0, a.BD)(t), (0, a.Rn)(t);
          }
        }
        constructor(t) {
          super(t);
        }
      }
      class R extends f {
        validate() {
          if (this.value < 1) throw Error('ChainId must be greater than 0');
        }
        toHexString() {
          return '0x'.concat(this.value.toString(16));
        }
        static fromHexString(t) {
          try {
            return (0, a.Vp)(new R(parseInt(t, 16)));
          } catch (t) {
            return (0, a.BD)(t), (0, a.Rn)(t);
          }
        }
        static ethereumMainnet() {
          return new R(1);
        }
        static polygonAmoy() {
          return new R(80002);
        }
        constructor(t) {
          super(t);
        }
      }
      class b extends h {
        getRequiredByteLength() {
          return 32;
        }
        static generate(t, e) {
          return new b(e(t.value));
        }
        constructor(t) {
          super(t);
        }
      }
      class L extends h {
        getRequiredByteLength() {
          throw Error('Varying in length');
        }
        isVaryingInLength() {
          return !0;
        }
        constructor(t) {
          super(t);
        }
      }
      class P extends L {
        toPEMString() {
          return (0, o.IV)(this.value);
        }
        toJSON() {
          return this.toPEMString();
        }
        constructor(t) {
          super((0, o.W9)(t));
        }
      }
      class A extends d {
        static generate() {
          return new A((0, a.Vj)());
        }
        constructor(t) {
          super(t);
        }
      }
      class I extends d {
        static generate() {
          return new I((0, a.Vj)());
        }
        constructor(t) {
          super(t);
        }
      }
      class C extends g {
        extractSignature() {
          return this.value.split('.')[1];
        }
        extractMessage() {
          return this.value.split('.')[0];
        }
        validate() {
          let t = this.value.split('.');
          if (2 !== t.length) throw Error('Invalid DevicePoP');
          let [e, r] = t;
          if (!(0, o.A7)(r)) throw Error('Invalid DevicePoP signature');
        }
        static generate(t, e) {
          return new C(''.concat(t, '.').concat(e));
        }
        static fromString(t) {
          try {
            return (0, a.Vp)(new C(t));
          } catch (t) {
            return (0, a.BD)(t), (0, a.Rn)(t);
          }
        }
      }
      class B extends h {
        getRequiredByteLength() {
          return 256;
        }
        constructor(t) {
          super(t);
        }
      }
      class N extends L {
        constructor(t) {
          super(t);
        }
      }
      class U extends L {
        constructor(t) {
          super(t);
        }
      }
      class V extends h {
        getRequiredByteLength() {
          return 20;
        }
        toHexString() {
          let t = (0, o.n6)(this.value);
          return (0, a.i6)(t);
        }
        static fromString(t) {
          try {
            return (0, a.Vp)(new V((0, a.i6)(t)));
          } catch (t) {
            return (0, a.BD)(t), (0, a.Rn)(t);
          }
        }
        static fromDecimalString(t) {
          try {
            return V.fromString((0, o.$m)((0, o.DT)(t), 20));
          } catch (t) {
            return (0, a.BD)(t), (0, a.Rn)(t);
          }
        }
        constructor(t) {
          super(t);
        }
      }
      var O = (((s = O || {}).APPLE = 'apple'), s);
      let q = { apple: 'c8435ae0-d256-11ed-8f0f-325096b39f47' };
      class H extends d {
        static fromProvider(t, e) {
          return new H((0, a.Vj)(e, q[t]));
        }
        static tryParse(t) {
          try {
            return (0, a.Vp)(new H(t));
          } catch (t) {
            return (0, a.Rn)(Error('Invalid external account id'));
          }
        }
        constructor(t) {
          super(t), (this.type = 'EXTERNAL_ID');
        }
      }
      let D = (t) => (4 === t.length ? '#' + t[1].repeat(2) + t[2].repeat(2) + t[3].repeat(2) : t),
        k = /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/;
      class T extends g {
        validate() {
          if (!k.test(this._value)) throw Error('Invalid - Expected a hex color');
          this._value = D(this._value);
        }
        constructor(t) {
          super(t);
        }
      }
      class j extends g {
        constructor(t) {
          super(t);
        }
      }
      class M extends h {
        getRequiredByteLength() {
          return 16;
        }
        static generate(t) {
          return new M(t(16));
        }
        constructor(t) {
          super(t);
        }
      }
      class F extends g {
        validate() {
          if (!/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/.test(this.value))
            throw Error('Invalid JWT Format ' + this.value);
        }
        static fromString(t) {
          try {
            return (0, a.Vp)(new F(t));
          } catch (t) {
            return (0, a.BD)(t), (0, a.Rn)(t);
          }
        }
        constructor(t) {
          t.startsWith('Bearer ') && (t = t.slice(7, t.length)), super(t);
        }
      }
      class $ extends g {
        validate() {
          if ('string' != typeof this._value)
            throw Error('String supplied is not a string - '.concat(String(this._value)));
          let t = this.value.split(' ');
          if (12 !== t.length && 24 !== t.length)
            throw Error('Invalid mnemonic it must be 12/24 words - '.concat(this.value));
          this.bytes = (0, o.W9)(this.value);
        }
        buildPath(t) {
          return this._mainPath + '/'.concat(t);
        }
        constructor(t) {
          super(t), (this._mainPath = "m/44'/60'/0'/0");
        }
      }
      class W extends L {}
      class J extends d {
        static generate() {
          return new J((0, a.Vj)());
        }
      }
      class z extends h {
        getRequiredByteLength() {
          return 32;
        }
        static generate(t) {
          return new z(t(32));
        }
        constructor(t) {
          super(t);
        }
      }
      class G extends L {}
      class Y extends L {}
      class Z extends h {
        getRequiredByteLength() {
          return 32;
        }
        static async generate(t, e, r) {
          return new Z(await r(t.toHexString(), e.toHexString()));
        }
        constructor(t) {
          super(t);
        }
      }
      class K extends h {
        getRequiredByteLength() {
          return 32;
        }
        static generate(t) {
          return new K(t(32));
        }
        constructor(t) {
          super(t);
        }
      }
      class Q extends L {}
      class X extends h {
        getRequiredByteLength() {
          return 32;
        }
        static async generate(t, e, r) {
          return new X(await r(t.value, e.value));
        }
        constructor(t) {
          super(t);
        }
      }
      class tt extends g {
        validate() {
          if (!tt.validatePassword(this.value).result) throw Error('Invalid password format');
        }
        constructor(t, e = !1) {
          super((t = t.normalize('NFKC')), e);
        }
      }
      (tt.criteria = {
        minLengthAllSatisfied: 8,
        minLengthOneNotSatisfied: 16,
        uppercase: 1,
        lowercase: 1,
        specialChar: 1,
        digit: 1,
      }),
        (tt.regex = {
          uppercase: RegExp('^(?=.*[A-Z]).+$'),
          lowercase: RegExp('^(?=.*[a-z]).+$'),
          specialChar: RegExp('^(?=.*[^A-Za-z0-9]).+$'),
          digit: RegExp('^(?=.*[0-9]).+$'),
        }),
        (tt.validatePassword = (t) => {
          let e = Object.entries(tt.regex).map((e) => {
            let [r, n] = e;
            return [r, n.test(t)];
          });
          if (
            1 ===
              e.filter((t) => {
                let [, e] = t;
                return !e;
              }).length &&
            t.length >= tt.criteria.minLengthOneNotSatisfied
          )
            return { result: !0, breakdown: { minLength: !0, ...Object.fromEntries(e) } };
          let r = t.length >= tt.criteria.minLengthAllSatisfied;
          return {
            result:
              e.every((t) => {
                let [, e] = t;
                return e;
              }) && r,
            breakdown: { minLength: r, ...Object.fromEntries(e) },
          };
        });
      class te extends L {
        constructor(t) {
          super(t);
        }
      }
      class tr extends h {
        getRequiredByteLength() {
          return 32;
        }
        constructor(t) {
          super(t);
        }
      }
      class tn extends h {
        getRequiredByteLength() {
          return 32;
        }
        static generate(t, e) {
          return new tn(e(t.value));
        }
        constructor(t) {
          super(t);
        }
      }
      class ts extends h {
        getRequiredByteLength() {
          return 256;
        }
        static async encrypt(t, e, r) {
          return new ts(await r(e.value, t.value));
        }
        constructor(t) {
          super(t);
        }
      }
      class ti extends L {
        constructor(t) {
          super(t);
        }
      }
      class tu extends h {
        getRequiredByteLength() {
          return 32;
        }
        static async generate(t, e, r) {
          return new tu(await r(t.value, e.toHexString()));
        }
        constructor(t) {
          super(t);
        }
      }
      class to extends h {
        getRequiredByteLength() {
          return 4;
        }
        toCrockfordBase32(t) {
          return t(this.value);
        }
        constructor(t) {
          super(t);
        }
      }
      class ta extends h {
        getRequiredByteLength() {
          return 16;
        }
        constructor(t) {
          super(t);
        }
      }
      class tc extends h {
        getRequiredByteLength() {
          return 20;
        }
        extractOfflineRecoveryCodeId() {
          let t = this.toHexString();
          return new to((0, a.g)(t.substring(0, 10)));
        }
        extractOfflineRecoveryCode() {
          let t = this.toHexString();
          return new ta((0, a.g)(t.substring(10)));
        }
        toCrockfordBase32(t) {
          return t(this.value);
        }
        static generate(t, e) {
          return new tc(e.toHexString() + (0, a.db)(t.toHexString()));
        }
        static fromCrockfordBase32(t, e) {
          return new tc(e(t));
        }
        constructor(t) {
          super(t);
        }
      }
      class tl extends L {
        toPEMString() {
          return (0, o.IV)(this.value);
        }
        toJSON() {
          return this.toPEMString();
        }
        constructor(t) {
          'string' == typeof t ? super((0, o.W9)(t)) : super(t);
        }
      }
      class th extends h {
        getRequiredByteLength() {
          return 32;
        }
        static generate(t, e) {
          return new th(e()(t.value));
        }
        constructor(t) {
          super(t);
        }
      }
      class tf extends g {
        constructor(t) {
          super(t);
        }
      }
      class tg extends h {
        getRequiredByteLength() {
          return 10;
        }
        toCrockfordBase32(t) {
          return t(this.value);
        }
        static fromCrockfordBase32(t, e) {
          try {
            return (0, a.Vp)(new tg(e(t)));
          } catch (t) {
            return (0, a.BD)(t), (0, a.Rn)(t);
          }
        }
        static generate(t) {
          return new tg(t(10));
        }
        constructor(t) {
          super(t);
        }
      }
      class td extends h {
        getRequiredByteLength() {
          return 16;
        }
        static generate(t) {
          return new td(t(16));
        }
        constructor(t) {
          super(t);
        }
      }
      class tv extends h {
        getRequiredByteLength() {
          return 65;
        }
        splitSignature() {
          return (0, o.N)(this.value);
        }
        constructor(t) {
          super(t);
        }
      }
      class tp extends g {
        static generate() {
          return new tp((0, a.Vj)());
        }
        constructor(t) {
          super(t);
        }
      }
      class tw extends g {
        constructor(t) {
          super(t);
        }
      }
      class ty extends g {
        constructor(t) {
          super(t);
        }
      }
      class tx extends L {
        constructor(t) {
          super(t);
        }
      }
      class tm extends g {
        toHexString() {
          return this._value;
        }
        toBigInt() {
          return BigInt(this._value);
        }
        validate() {
          if (!(0, o.A7)(this._value))
            throw Error(
              'String supplied is not a valid hexadecimal number - '.concat(String(this._value))
            );
        }
        static fromDecimalString(t) {
          try {
            return (0, a.Vp)(new tm((0, o.DT)(t)));
          } catch (t) {
            return (0, a.BD)(t), (0, a.Rn)(t);
          }
        }
        constructor(t) {
          super(t);
        }
      }
      class tE extends d {
        static generate() {
          return new tE((0, a.Vj)());
        }
        constructor(t) {
          super(t);
        }
      }
      var tS = (((i = tS || {}).EMAIL = 'EMAIL'), (i.PHONE = 'PHONE'), i);
      class t_ extends g {
        get type() {
          if ((0, a.oH)(this.value)) return 'EMAIL';
          if ((0, a.Y0)(this.value)) return 'PHONE';
          throw Error('Username should be a valid email address or phone number');
        }
        obfuscate() {
          switch (this.type) {
            case 'EMAIL':
              return this.value.slice(0, 1) + '***';
            case 'PHONE':
              return '***' + this.value.slice(-1);
            default:
              (0, a.vE)(this.type, 'Unknown username type');
          }
        }
        isEmail() {
          return 'EMAIL' === this.type;
        }
        isPhone() {
          return 'PHONE' === this.type;
        }
        validate() {
          if ('string' != typeof this._value)
            throw Error('String supplied is not a string - '.concat(String(this._value)));
          if (!(0, a.oH)(this.value) && !(0, a.Y0)(this.value))
            throw Error('Username should be a valid email address or phone number');
        }
        constructor(t) {
          super((t = t.normalize('NFKC')));
        }
      }
      class tR extends f {
        static generate(t) {
          return new tR(t(6));
        }
        constructor(t) {
          super(t);
        }
      }
      class tb extends d {
        static generate() {
          return new tb((0, a.Vj)());
        }
        constructor(t) {
          super(t);
        }
      }
      class tL extends d {
        static generate() {
          return new tL((0, a.Vj)());
        }
        constructor(t) {
          super(t);
        }
      }
      var tP = (((u = tP || {}).HD = 'HD'), (u.PRIVATE_KEY = 'PRIVATE_KEY'), u);
    },
    87850: function (t, e, r) {
      'use strict';
      r.d(e, {
        w: function () {
          return i;
        },
      });
      var n = r(10732),
        s = r(91184);
      let i = (t) => '0x'.concat((0, s.keccak_256)((0, n.lE)(t)));
    },
    9284: function (t, e, r) {
      'use strict';
      r.d(e, {
        BD: function () {
          return P;
        },
        BH: function () {
          return l;
        },
        CK: function () {
          return $;
        },
        Fi: function () {
          return B;
        },
        HD: function () {
          return o;
        },
        Jo: function () {
          return I;
        },
        P8: function () {
          return m;
        },
        Pe: function () {
          return C;
        },
        Rn: function () {
          return d;
        },
        Vj: function () {
          return U;
        },
        Vp: function () {
          return g;
        },
        WQ: function () {
          return x;
        },
        Wl: function () {
          return a;
        },
        Y0: function () {
          return O;
        },
        _X: function () {
          return J;
        },
        db: function () {
          return k;
        },
        g: function () {
          return T;
        },
        gw: function () {
          return v;
        },
        hx: function () {
          return M;
        },
        i6: function () {
          return q;
        },
        kG: function () {
          return L;
        },
        kQ: function () {
          return F;
        },
        lg: function () {
          return R;
        },
        oH: function () {
          return V;
        },
        pp: function () {
          return j;
        },
        tu: function () {
          return _;
        },
        vE: function () {
          return A;
        },
        vJ: function () {
          return N;
        },
        y2: function () {
          return E;
        },
        z7: function () {
          return S;
        },
      });
      var n = r(10732),
        s = r(87850),
        i = r(68588),
        u = r(70468);
      let o = (t) => 'string' == typeof t,
        a = (t, e, r) => t.map((t, n) => (e(t) ? r(t, n) : t));
      class c extends Error {
        constructor(t, e) {
          if (
            (super(t, e),
            (null == e ? void 0 : e.cause) &&
              ((this.cause = e.cause),
              (this.message = ''.concat(this.message, '\nCAUSE: ').concat(this.cause.message)),
              'string' == typeof this.cause.stack))
          ) {
            var r;
            this.stack =
              (null !== (r = this.stack) && void 0 !== r ? r : '') + '\nCAUSE: ' + this.cause.stack;
          }
        }
      }
      class l {
        constructor() {
          this.promise = new Promise((t, e) => {
            (this.resolve = t), (this.reject = e);
          });
        }
      }
      class h {
        isSuccess() {
          return !0;
        }
        isFailure() {
          return !1;
        }
        unwrap() {
          return this.value;
        }
        flatten() {
          return this.value instanceof h || this.value instanceof f ? this.value : this;
        }
        constructor(t) {
          this.value = t;
        }
      }
      class f {
        isSuccess() {
          return !1;
        }
        isFailure() {
          return !0;
        }
        unwrap() {
          throw this.error;
        }
        flatten() {
          return this;
        }
        constructor(t) {
          this.error = t;
        }
      }
      function g() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
        return new h(t);
      }
      let d = (t) => new f(t),
        v = (t) => new Promise((e) => setTimeout(e, t)),
        p = 0,
        w = new Set(),
        y = (t, e, r, n) => {
          let s = e - Date.now();
          setTimeout(
            () => {
              w.has(r) && (Date.now() >= e ? (w.delete(r), t()) : y(t, e, r, n));
            },
            s <= n.poolingTimeout ? s : n.poolingTimeout
          );
        },
        x = function (t, e) {
          let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : { poolingTimeout: 1e3 },
            n = ++p;
          return w.add(n), y(t, Date.now() + e, n, r), n;
        },
        m = (t) => {
          w.delete(t);
        },
        E = (t) => 6e4 * t,
        S = (t) => 60 * t,
        _ = (t) => t / 1e3,
        R = (t, e) => Math.floor(Math.random() * (e - t + 1)) + t;
      class b extends c {
        constructor(t, e) {
          super('InvariantError: '.concat(t), e);
        }
      }
      function L(t, e, r) {
        if (!t) throw new b(e, { cause: r });
      }
      function P(t) {
        if (!(t instanceof Error))
          throw new b(
            'Invalid error type. Received '.concat(typeof t, ', expected instance of Error')
          );
      }
      function A(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : 'Unexpected object: '.concat(String(t));
        throw new b(e);
      }
      let I = (t, e) => Object.values(t).includes(e),
        C = (t, e) => {
          let r = Object.entries(t).find((t) => {
            let [, r] = t;
            return r === e;
          });
          L(r, "Can't find enum key for a given value");
          let [n] = r;
          return n;
        };
      function B(t, e) {
        throw new b(t, e);
      }
      function N(t, e) {
        if (null != t) return t;
        throw new b(
          'Non nullable values expected, received '.concat(String(t), ' with message: ').concat(e)
        );
      }
      Symbol('brand');
      let U = function (t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : '6690cbb8-db4e-4e55-a2c0-c85893d2bb1f';
          return t ? (0, i.Z)(t, e) : (0, u.Z)();
        },
        V = (t) =>
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            t
          ),
        O = (t) => /^\+[1-9]\d{1,14}$/.test(t),
        q = (t) => {
          let e = D(t);
          if (!e) throw Error('Invalid address');
          return e;
        },
        H = (t) => {
          if (!(0, n.A7)(t, 20)) throw Error('Invalid address');
          let e = (t = t.toLowerCase()).substring(2).split(''),
            r = new Uint8Array(40);
          for (let t = 0; t < 40; t++) r[t] = e[t].charCodeAt(0);
          let i = (0, n.lE)((0, s.w)(r));
          for (let t = 0; t < 40; t += 2)
            i[t >> 1] >> 4 >= 8 && (e[t] = e[t].toUpperCase()),
              (15 & i[t >> 1]) >= 8 && (e[t + 1] = e[t + 1].toUpperCase());
          return '0x' + e.join('');
        },
        D = (t) => {
          let e = null;
          if (!o(t)) throw Error('Invalid address');
          if (
            t.match(/^(0x)?[0-9a-fA-F]{40}$/) &&
            (t.startsWith('0x') || (t = '0x' + t),
            (e = H(t)),
            t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && e !== t)
          )
            throw Error('Invalid address checksum');
          return e;
        },
        k = (t) => (t.startsWith('0x') ? t.substring(2) : t),
        T = (t) => (t.startsWith('0x') ? t : '0x'.concat(t)),
        j = (t, e) => {
          let r = 1;
          for (;;) {
            let n = e * r;
            if (n >= t) return n;
            r++;
          }
        },
        M = (t) => {
          let e = [];
          for (let r = 0; r < t.length; r++) 0 !== t[r] && e.push(t[r]);
          return new Uint8Array(e);
        },
        F = (t) =>
          /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(t),
        $ = () => W(new Date()),
        W = (t) => (t.getTime() / 1e3) | 0,
        J = (t) => 1e3 * t;
    },
  },
]);
