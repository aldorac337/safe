var DM = Object.create;
var Bc = Object.defineProperty;
var UM = Object.getOwnPropertyDescriptor;
var FM = Object.getOwnPropertyNames;
var jM = Object.getPrototypeOf,
  HM = Object.prototype.hasOwnProperty;
var og = (r) => {
  throw TypeError(r);
};
var WM = (r, e, t) =>
  e in r ? Bc(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (r[e] = t);
var KM = (r, e) => () => (r && (e = r((r = 0))), e);
var te = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports),
  $ = (r, e) => {
    for (var t in e) Bc(r, t, { get: e[t], enumerable: !0 });
  },
  VM = (r, e, t, n) => {
    if ((e && typeof e == 'object') || typeof e == 'function')
      for (let o of FM(e))
        !HM.call(r, o) &&
          o !== t &&
          Bc(r, o, { get: () => e[o], enumerable: !(n = UM(e, o)) || n.enumerable });
    return r;
  };
var _e = (r, e, t) => (
  (t = r != null ? DM(jM(r)) : {}),
  VM(e || !r || !r.__esModule ? Bc(t, 'default', { value: r, enumerable: !0 }) : t, r)
);
var Pe = (r, e, t) => WM(r, typeof e != 'symbol' ? e + '' : e, t),
  ld = (r, e, t) => e.has(r) || og('Cannot ' + t);
var oe = (r, e, t) => (ld(r, e, 'read from private field'), t ? t.call(r) : e.get(r)),
  Ne = (r, e, t) =>
    e.has(r)
      ? og('Cannot add the same private member more than once')
      : e instanceof WeakSet
        ? e.add(r)
        : e.set(r, t),
  Ze = (r, e, t, n) => (ld(r, e, 'write to private field'), n ? n.call(r, t) : e.set(r, t), t),
  sa = (r, e, t) => (ld(r, e, 'access private method'), t);
var hd = te((Mc) => {
  'use strict';
  f();
  Mc.byteLength = GM;
  Mc.toByteArray = ZM;
  Mc.fromByteArray = QM;
  var sn = [],
    Nr = [],
    $M = typeof Uint8Array < 'u' ? Uint8Array : Array,
    dd = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  for (ns = 0, sg = dd.length; ns < sg; ++ns) (sn[ns] = dd[ns]), (Nr[dd.charCodeAt(ns)] = ns);
  var ns, sg;
  Nr[45] = 62;
  Nr[95] = 63;
  function ig(r) {
    var e = r.length;
    if (e % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    var t = r.indexOf('=');
    t === -1 && (t = e);
    var n = t === e ? 0 : 4 - (t % 4);
    return [t, n];
  }
  function GM(r) {
    var e = ig(r),
      t = e[0],
      n = e[1];
    return ((t + n) * 3) / 4 - n;
  }
  function YM(r, e, t) {
    return ((e + t) * 3) / 4 - t;
  }
  function ZM(r) {
    var e,
      t = ig(r),
      n = t[0],
      o = t[1],
      s = new $M(YM(r, n, o)),
      i = 0,
      c = o > 0 ? n - 4 : n,
      u;
    for (u = 0; u < c; u += 4)
      (e =
        (Nr[r.charCodeAt(u)] << 18) |
        (Nr[r.charCodeAt(u + 1)] << 12) |
        (Nr[r.charCodeAt(u + 2)] << 6) |
        Nr[r.charCodeAt(u + 3)]),
        (s[i++] = (e >> 16) & 255),
        (s[i++] = (e >> 8) & 255),
        (s[i++] = e & 255);
    return (
      o === 2 &&
        ((e = (Nr[r.charCodeAt(u)] << 2) | (Nr[r.charCodeAt(u + 1)] >> 4)), (s[i++] = e & 255)),
      o === 1 &&
        ((e =
          (Nr[r.charCodeAt(u)] << 10) |
          (Nr[r.charCodeAt(u + 1)] << 4) |
          (Nr[r.charCodeAt(u + 2)] >> 2)),
        (s[i++] = (e >> 8) & 255),
        (s[i++] = e & 255)),
      s
    );
  }
  function JM(r) {
    return sn[(r >> 18) & 63] + sn[(r >> 12) & 63] + sn[(r >> 6) & 63] + sn[r & 63];
  }
  function XM(r, e, t) {
    for (var n, o = [], s = e; s < t; s += 3)
      (n = ((r[s] << 16) & 16711680) + ((r[s + 1] << 8) & 65280) + (r[s + 2] & 255)), o.push(JM(n));
    return o.join('');
  }
  function QM(r) {
    for (var e, t = r.length, n = t % 3, o = [], s = 16383, i = 0, c = t - n; i < c; i += s)
      o.push(XM(r, i, i + s > c ? c : i + s));
    return (
      n === 1
        ? ((e = r[t - 1]), o.push(sn[e >> 2] + sn[(e << 4) & 63] + '=='))
        : n === 2 &&
          ((e = (r[t - 2] << 8) + r[t - 1]),
          o.push(sn[e >> 10] + sn[(e >> 4) & 63] + sn[(e << 2) & 63] + '=')),
      o.join('')
    );
  }
});
var yd = te((md) => {
  f();
  md.read = function (r, e, t, n, o) {
    var s,
      i,
      c = o * 8 - n - 1,
      u = (1 << c) - 1,
      l = u >> 1,
      w = -7,
      x = t ? o - 1 : 0,
      A = t ? -1 : 1,
      _ = r[e + x];
    for (
      x += A, s = _ & ((1 << -w) - 1), _ >>= -w, w += c;
      w > 0;
      s = s * 256 + r[e + x], x += A, w -= 8
    );
    for (i = s & ((1 << -w) - 1), s >>= -w, w += n; w > 0; i = i * 256 + r[e + x], x += A, w -= 8);
    if (s === 0) s = 1 - l;
    else {
      if (s === u) return i ? NaN : (_ ? -1 : 1) * (1 / 0);
      (i = i + Math.pow(2, n)), (s = s - l);
    }
    return (_ ? -1 : 1) * i * Math.pow(2, s - n);
  };
  md.write = function (r, e, t, n, o, s) {
    var i,
      c,
      u,
      l = s * 8 - o - 1,
      w = (1 << l) - 1,
      x = w >> 1,
      A = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
      _ = n ? 0 : s - 1,
      O = n ? 1 : -1,
      D = e < 0 || (e === 0 && 1 / e < 0) ? 1 : 0;
    for (
      e = Math.abs(e),
        isNaN(e) || e === 1 / 0
          ? ((c = isNaN(e) ? 1 : 0), (i = w))
          : ((i = Math.floor(Math.log(e) / Math.LN2)),
            e * (u = Math.pow(2, -i)) < 1 && (i--, (u *= 2)),
            i + x >= 1 ? (e += A / u) : (e += A * Math.pow(2, 1 - x)),
            e * u >= 2 && (i++, (u /= 2)),
            i + x >= w
              ? ((c = 0), (i = w))
              : i + x >= 1
                ? ((c = (e * u - 1) * Math.pow(2, o)), (i = i + x))
                : ((c = e * Math.pow(2, x - 1) * Math.pow(2, o)), (i = 0)));
      o >= 8;
      r[t + _] = c & 255, _ += O, c /= 256, o -= 8
    );
    for (i = (i << o) | c, l += o; l > 0; r[t + _] = i & 255, _ += O, i /= 256, l -= 8);
    r[t + _ - O] |= D * 128;
  };
});
var ss = te((Vs) => {
  'use strict';
  f();
  var gd = hd(),
    Ws = yd(),
    ag =
      typeof Symbol == 'function' && typeof Symbol.for == 'function'
        ? Symbol.for('nodejs.util.inspect.custom')
        : null;
  Vs.Buffer = X;
  Vs.SlowBuffer = sz;
  Vs.INSPECT_MAX_BYTES = 50;
  var zc = 2147483647;
  Vs.kMaxLength = zc;
  X.TYPED_ARRAY_SUPPORT = ez();
  !X.TYPED_ARRAY_SUPPORT &&
    typeof console < 'u' &&
    typeof console.error == 'function' &&
    console.error(
      'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
    );
  function ez() {
    try {
      let r = new Uint8Array(1),
        e = {
          foo: function () {
            return 42;
          },
        };
      return (
        Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(r, e), r.foo() === 42
      );
    } catch {
      return !1;
    }
  }
  Object.defineProperty(X.prototype, 'parent', {
    enumerable: !0,
    get: function () {
      if (X.isBuffer(this)) return this.buffer;
    },
  });
  Object.defineProperty(X.prototype, 'offset', {
    enumerable: !0,
    get: function () {
      if (X.isBuffer(this)) return this.byteOffset;
    },
  });
  function kn(r) {
    if (r > zc) throw new RangeError('The value "' + r + '" is invalid for option "size"');
    let e = new Uint8Array(r);
    return Object.setPrototypeOf(e, X.prototype), e;
  }
  function X(r, e, t) {
    if (typeof r == 'number') {
      if (typeof e == 'string')
        throw new TypeError('The "string" argument must be of type string. Received type number');
      return vd(r);
    }
    return fg(r, e, t);
  }
  X.poolSize = 8192;
  function fg(r, e, t) {
    if (typeof r == 'string') return rz(r, e);
    if (ArrayBuffer.isView(r)) return nz(r);
    if (r == null)
      throw new TypeError(
        'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
          typeof r
      );
    if (
      an(r, ArrayBuffer) ||
      (r && an(r.buffer, ArrayBuffer)) ||
      (typeof SharedArrayBuffer < 'u' &&
        (an(r, SharedArrayBuffer) || (r && an(r.buffer, SharedArrayBuffer))))
    )
      return bd(r, e, t);
    if (typeof r == 'number')
      throw new TypeError('The "value" argument must not be of type number. Received type number');
    let n = r.valueOf && r.valueOf();
    if (n != null && n !== r) return X.from(n, e, t);
    let o = oz(r);
    if (o) return o;
    if (
      typeof Symbol < 'u' &&
      Symbol.toPrimitive != null &&
      typeof r[Symbol.toPrimitive] == 'function'
    )
      return X.from(r[Symbol.toPrimitive]('string'), e, t);
    throw new TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
        typeof r
    );
  }
  X.from = function (r, e, t) {
    return fg(r, e, t);
  };
  Object.setPrototypeOf(X.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(X, Uint8Array);
  function lg(r) {
    if (typeof r != 'number') throw new TypeError('"size" argument must be of type number');
    if (r < 0) throw new RangeError('The value "' + r + '" is invalid for option "size"');
  }
  function tz(r, e, t) {
    return (
      lg(r),
      r <= 0
        ? kn(r)
        : e !== void 0
          ? typeof t == 'string'
            ? kn(r).fill(e, t)
            : kn(r).fill(e)
          : kn(r)
    );
  }
  X.alloc = function (r, e, t) {
    return tz(r, e, t);
  };
  function vd(r) {
    return lg(r), kn(r < 0 ? 0 : Sd(r) | 0);
  }
  X.allocUnsafe = function (r) {
    return vd(r);
  };
  X.allocUnsafeSlow = function (r) {
    return vd(r);
  };
  function rz(r, e) {
    if (((typeof e != 'string' || e === '') && (e = 'utf8'), !X.isEncoding(e)))
      throw new TypeError('Unknown encoding: ' + e);
    let t = dg(r, e) | 0,
      n = kn(t),
      o = n.write(r, e);
    return o !== t && (n = n.slice(0, o)), n;
  }
  function xd(r) {
    let e = r.length < 0 ? 0 : Sd(r.length) | 0,
      t = kn(e);
    for (let n = 0; n < e; n += 1) t[n] = r[n] & 255;
    return t;
  }
  function nz(r) {
    if (an(r, Uint8Array)) {
      let e = new Uint8Array(r);
      return bd(e.buffer, e.byteOffset, e.byteLength);
    }
    return xd(r);
  }
  function bd(r, e, t) {
    if (e < 0 || r.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
    if (r.byteLength < e + (t || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let n;
    return (
      e === void 0 && t === void 0
        ? (n = new Uint8Array(r))
        : t === void 0
          ? (n = new Uint8Array(r, e))
          : (n = new Uint8Array(r, e, t)),
      Object.setPrototypeOf(n, X.prototype),
      n
    );
  }
  function oz(r) {
    if (X.isBuffer(r)) {
      let e = Sd(r.length) | 0,
        t = kn(e);
      return t.length === 0 || r.copy(t, 0, 0, e), t;
    }
    if (r.length !== void 0) return typeof r.length != 'number' || _d(r.length) ? kn(0) : xd(r);
    if (r.type === 'Buffer' && Array.isArray(r.data)) return xd(r.data);
  }
  function Sd(r) {
    if (r >= zc)
      throw new RangeError(
        'Attempt to allocate Buffer larger than maximum size: 0x' + zc.toString(16) + ' bytes'
      );
    return r | 0;
  }
  function sz(r) {
    return +r != r && (r = 0), X.alloc(+r);
  }
  X.isBuffer = function (e) {
    return e != null && e._isBuffer === !0 && e !== X.prototype;
  };
  X.compare = function (e, t) {
    if (
      (an(e, Uint8Array) && (e = X.from(e, e.offset, e.byteLength)),
      an(t, Uint8Array) && (t = X.from(t, t.offset, t.byteLength)),
      !X.isBuffer(e) || !X.isBuffer(t))
    )
      throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (e === t) return 0;
    let n = e.length,
      o = t.length;
    for (let s = 0, i = Math.min(n, o); s < i; ++s)
      if (e[s] !== t[s]) {
        (n = e[s]), (o = t[s]);
        break;
      }
    return n < o ? -1 : o < n ? 1 : 0;
  };
  X.isEncoding = function (e) {
    switch (String(e).toLowerCase()) {
      case 'hex':
      case 'utf8':
      case 'utf-8':
      case 'ascii':
      case 'latin1':
      case 'binary':
      case 'base64':
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return !0;
      default:
        return !1;
    }
  };
  X.concat = function (e, t) {
    if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (e.length === 0) return X.alloc(0);
    let n;
    if (t === void 0) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
    let o = X.allocUnsafe(t),
      s = 0;
    for (n = 0; n < e.length; ++n) {
      let i = e[n];
      if (an(i, Uint8Array))
        s + i.length > o.length
          ? (X.isBuffer(i) || (i = X.from(i)), i.copy(o, s))
          : Uint8Array.prototype.set.call(o, i, s);
      else if (X.isBuffer(i)) i.copy(o, s);
      else throw new TypeError('"list" argument must be an Array of Buffers');
      s += i.length;
    }
    return o;
  };
  function dg(r, e) {
    if (X.isBuffer(r)) return r.length;
    if (ArrayBuffer.isView(r) || an(r, ArrayBuffer)) return r.byteLength;
    if (typeof r != 'string')
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
          typeof r
      );
    let t = r.length,
      n = arguments.length > 2 && arguments[2] === !0;
    if (!n && t === 0) return 0;
    let o = !1;
    for (;;)
      switch (e) {
        case 'ascii':
        case 'latin1':
        case 'binary':
          return t;
        case 'utf8':
        case 'utf-8':
          return wd(r).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return t * 2;
        case 'hex':
          return t >>> 1;
        case 'base64':
          return Sg(r).length;
        default:
          if (o) return n ? -1 : wd(r).length;
          (e = ('' + e).toLowerCase()), (o = !0);
      }
  }
  X.byteLength = dg;
  function iz(r, e, t) {
    let n = !1;
    if (
      ((e === void 0 || e < 0) && (e = 0),
      e > this.length ||
        ((t === void 0 || t > this.length) && (t = this.length), t <= 0) ||
        ((t >>>= 0), (e >>>= 0), t <= e))
    )
      return '';
    for (r || (r = 'utf8'); ; )
      switch (r) {
        case 'hex':
          return yz(this, e, t);
        case 'utf8':
        case 'utf-8':
          return mg(this, e, t);
        case 'ascii':
          return hz(this, e, t);
        case 'latin1':
        case 'binary':
          return mz(this, e, t);
        case 'base64':
          return lz(this, e, t);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return gz(this, e, t);
        default:
          if (n) throw new TypeError('Unknown encoding: ' + r);
          (r = (r + '').toLowerCase()), (n = !0);
      }
  }
  X.prototype._isBuffer = !0;
  function os(r, e, t) {
    let n = r[e];
    (r[e] = r[t]), (r[t] = n);
  }
  X.prototype.swap16 = function () {
    let e = this.length;
    if (e % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
    for (let t = 0; t < e; t += 2) os(this, t, t + 1);
    return this;
  };
  X.prototype.swap32 = function () {
    let e = this.length;
    if (e % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
    for (let t = 0; t < e; t += 4) os(this, t, t + 3), os(this, t + 1, t + 2);
    return this;
  };
  X.prototype.swap64 = function () {
    let e = this.length;
    if (e % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
    for (let t = 0; t < e; t += 8)
      os(this, t, t + 7), os(this, t + 1, t + 6), os(this, t + 2, t + 5), os(this, t + 3, t + 4);
    return this;
  };
  X.prototype.toString = function () {
    let e = this.length;
    return e === 0 ? '' : arguments.length === 0 ? mg(this, 0, e) : iz.apply(this, arguments);
  };
  X.prototype.toLocaleString = X.prototype.toString;
  X.prototype.equals = function (e) {
    if (!X.isBuffer(e)) throw new TypeError('Argument must be a Buffer');
    return this === e ? !0 : X.compare(this, e) === 0;
  };
  X.prototype.inspect = function () {
    let e = '',
      t = Vs.INSPECT_MAX_BYTES;
    return (
      (e = this.toString('hex', 0, t)
        .replace(/(.{2})/g, '$1 ')
        .trim()),
      this.length > t && (e += ' ... '),
      '<Buffer ' + e + '>'
    );
  };
  ag && (X.prototype[ag] = X.prototype.inspect);
  X.prototype.compare = function (e, t, n, o, s) {
    if ((an(e, Uint8Array) && (e = X.from(e, e.offset, e.byteLength)), !X.isBuffer(e)))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e
      );
    if (
      (t === void 0 && (t = 0),
      n === void 0 && (n = e ? e.length : 0),
      o === void 0 && (o = 0),
      s === void 0 && (s = this.length),
      t < 0 || n > e.length || o < 0 || s > this.length)
    )
      throw new RangeError('out of range index');
    if (o >= s && t >= n) return 0;
    if (o >= s) return -1;
    if (t >= n) return 1;
    if (((t >>>= 0), (n >>>= 0), (o >>>= 0), (s >>>= 0), this === e)) return 0;
    let i = s - o,
      c = n - t,
      u = Math.min(i, c),
      l = this.slice(o, s),
      w = e.slice(t, n);
    for (let x = 0; x < u; ++x)
      if (l[x] !== w[x]) {
        (i = l[x]), (c = w[x]);
        break;
      }
    return i < c ? -1 : c < i ? 1 : 0;
  };
  function hg(r, e, t, n, o) {
    if (r.length === 0) return -1;
    if (
      (typeof t == 'string'
        ? ((n = t), (t = 0))
        : t > 2147483647
          ? (t = 2147483647)
          : t < -2147483648 && (t = -2147483648),
      (t = +t),
      _d(t) && (t = o ? 0 : r.length - 1),
      t < 0 && (t = r.length + t),
      t >= r.length)
    ) {
      if (o) return -1;
      t = r.length - 1;
    } else if (t < 0)
      if (o) t = 0;
      else return -1;
    if ((typeof e == 'string' && (e = X.from(e, n)), X.isBuffer(e)))
      return e.length === 0 ? -1 : cg(r, e, t, n, o);
    if (typeof e == 'number')
      return (
        (e = e & 255),
        typeof Uint8Array.prototype.indexOf == 'function'
          ? o
            ? Uint8Array.prototype.indexOf.call(r, e, t)
            : Uint8Array.prototype.lastIndexOf.call(r, e, t)
          : cg(r, [e], t, n, o)
      );
    throw new TypeError('val must be string, number or Buffer');
  }
  function cg(r, e, t, n, o) {
    let s = 1,
      i = r.length,
      c = e.length;
    if (
      n !== void 0 &&
      ((n = String(n).toLowerCase()),
      n === 'ucs2' || n === 'ucs-2' || n === 'utf16le' || n === 'utf-16le')
    ) {
      if (r.length < 2 || e.length < 2) return -1;
      (s = 2), (i /= 2), (c /= 2), (t /= 2);
    }
    function u(w, x) {
      return s === 1 ? w[x] : w.readUInt16BE(x * s);
    }
    let l;
    if (o) {
      let w = -1;
      for (l = t; l < i; l++)
        if (u(r, l) === u(e, w === -1 ? 0 : l - w)) {
          if ((w === -1 && (w = l), l - w + 1 === c)) return w * s;
        } else w !== -1 && (l -= l - w), (w = -1);
    } else
      for (t + c > i && (t = i - c), l = t; l >= 0; l--) {
        let w = !0;
        for (let x = 0; x < c; x++)
          if (u(r, l + x) !== u(e, x)) {
            w = !1;
            break;
          }
        if (w) return l;
      }
    return -1;
  }
  X.prototype.includes = function (e, t, n) {
    return this.indexOf(e, t, n) !== -1;
  };
  X.prototype.indexOf = function (e, t, n) {
    return hg(this, e, t, n, !0);
  };
  X.prototype.lastIndexOf = function (e, t, n) {
    return hg(this, e, t, n, !1);
  };
  function az(r, e, t, n) {
    t = Number(t) || 0;
    let o = r.length - t;
    n ? ((n = Number(n)), n > o && (n = o)) : (n = o);
    let s = e.length;
    n > s / 2 && (n = s / 2);
    let i;
    for (i = 0; i < n; ++i) {
      let c = parseInt(e.substr(i * 2, 2), 16);
      if (_d(c)) return i;
      r[t + i] = c;
    }
    return i;
  }
  function cz(r, e, t, n) {
    return Lc(wd(e, r.length - t), r, t, n);
  }
  function uz(r, e, t, n) {
    return Lc(vz(e), r, t, n);
  }
  function pz(r, e, t, n) {
    return Lc(Sg(e), r, t, n);
  }
  function fz(r, e, t, n) {
    return Lc(Sz(e, r.length - t), r, t, n);
  }
  X.prototype.write = function (e, t, n, o) {
    if (t === void 0) (o = 'utf8'), (n = this.length), (t = 0);
    else if (n === void 0 && typeof t == 'string') (o = t), (n = this.length), (t = 0);
    else if (isFinite(t))
      (t = t >>> 0),
        isFinite(n) ? ((n = n >>> 0), o === void 0 && (o = 'utf8')) : ((o = n), (n = void 0));
    else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    let s = this.length - t;
    if (((n === void 0 || n > s) && (n = s), (e.length > 0 && (n < 0 || t < 0)) || t > this.length))
      throw new RangeError('Attempt to write outside buffer bounds');
    o || (o = 'utf8');
    let i = !1;
    for (;;)
      switch (o) {
        case 'hex':
          return az(this, e, t, n);
        case 'utf8':
        case 'utf-8':
          return cz(this, e, t, n);
        case 'ascii':
        case 'latin1':
        case 'binary':
          return uz(this, e, t, n);
        case 'base64':
          return pz(this, e, t, n);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return fz(this, e, t, n);
        default:
          if (i) throw new TypeError('Unknown encoding: ' + o);
          (o = ('' + o).toLowerCase()), (i = !0);
      }
  };
  X.prototype.toJSON = function () {
    return { type: 'Buffer', data: Array.prototype.slice.call(this._arr || this, 0) };
  };
  function lz(r, e, t) {
    return e === 0 && t === r.length ? gd.fromByteArray(r) : gd.fromByteArray(r.slice(e, t));
  }
  function mg(r, e, t) {
    t = Math.min(r.length, t);
    let n = [],
      o = e;
    for (; o < t; ) {
      let s = r[o],
        i = null,
        c = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;
      if (o + c <= t) {
        let u, l, w, x;
        switch (c) {
          case 1:
            s < 128 && (i = s);
            break;
          case 2:
            (u = r[o + 1]),
              (u & 192) === 128 && ((x = ((s & 31) << 6) | (u & 63)), x > 127 && (i = x));
            break;
          case 3:
            (u = r[o + 1]),
              (l = r[o + 2]),
              (u & 192) === 128 &&
                (l & 192) === 128 &&
                ((x = ((s & 15) << 12) | ((u & 63) << 6) | (l & 63)),
                x > 2047 && (x < 55296 || x > 57343) && (i = x));
            break;
          case 4:
            (u = r[o + 1]),
              (l = r[o + 2]),
              (w = r[o + 3]),
              (u & 192) === 128 &&
                (l & 192) === 128 &&
                (w & 192) === 128 &&
                ((x = ((s & 15) << 18) | ((u & 63) << 12) | ((l & 63) << 6) | (w & 63)),
                x > 65535 && x < 1114112 && (i = x));
        }
      }
      i === null
        ? ((i = 65533), (c = 1))
        : i > 65535 &&
          ((i -= 65536), n.push(((i >>> 10) & 1023) | 55296), (i = 56320 | (i & 1023))),
        n.push(i),
        (o += c);
    }
    return dz(n);
  }
  var ug = 4096;
  function dz(r) {
    let e = r.length;
    if (e <= ug) return String.fromCharCode.apply(String, r);
    let t = '',
      n = 0;
    for (; n < e; ) t += String.fromCharCode.apply(String, r.slice(n, (n += ug)));
    return t;
  }
  function hz(r, e, t) {
    let n = '';
    t = Math.min(r.length, t);
    for (let o = e; o < t; ++o) n += String.fromCharCode(r[o] & 127);
    return n;
  }
  function mz(r, e, t) {
    let n = '';
    t = Math.min(r.length, t);
    for (let o = e; o < t; ++o) n += String.fromCharCode(r[o]);
    return n;
  }
  function yz(r, e, t) {
    let n = r.length;
    (!e || e < 0) && (e = 0), (!t || t < 0 || t > n) && (t = n);
    let o = '';
    for (let s = e; s < t; ++s) o += Ez[r[s]];
    return o;
  }
  function gz(r, e, t) {
    let n = r.slice(e, t),
      o = '';
    for (let s = 0; s < n.length - 1; s += 2) o += String.fromCharCode(n[s] + n[s + 1] * 256);
    return o;
  }
  X.prototype.slice = function (e, t) {
    let n = this.length;
    (e = ~~e),
      (t = t === void 0 ? n : ~~t),
      e < 0 ? ((e += n), e < 0 && (e = 0)) : e > n && (e = n),
      t < 0 ? ((t += n), t < 0 && (t = 0)) : t > n && (t = n),
      t < e && (t = e);
    let o = this.subarray(e, t);
    return Object.setPrototypeOf(o, X.prototype), o;
  };
  function Gt(r, e, t) {
    if (r % 1 !== 0 || r < 0) throw new RangeError('offset is not uint');
    if (r + e > t) throw new RangeError('Trying to access beyond buffer length');
  }
  X.prototype.readUintLE = X.prototype.readUIntLE = function (e, t, n) {
    (e = e >>> 0), (t = t >>> 0), n || Gt(e, t, this.length);
    let o = this[e],
      s = 1,
      i = 0;
    for (; ++i < t && (s *= 256); ) o += this[e + i] * s;
    return o;
  };
  X.prototype.readUintBE = X.prototype.readUIntBE = function (e, t, n) {
    (e = e >>> 0), (t = t >>> 0), n || Gt(e, t, this.length);
    let o = this[e + --t],
      s = 1;
    for (; t > 0 && (s *= 256); ) o += this[e + --t] * s;
    return o;
  };
  X.prototype.readUint8 = X.prototype.readUInt8 = function (e, t) {
    return (e = e >>> 0), t || Gt(e, 1, this.length), this[e];
  };
  X.prototype.readUint16LE = X.prototype.readUInt16LE = function (e, t) {
    return (e = e >>> 0), t || Gt(e, 2, this.length), this[e] | (this[e + 1] << 8);
  };
  X.prototype.readUint16BE = X.prototype.readUInt16BE = function (e, t) {
    return (e = e >>> 0), t || Gt(e, 2, this.length), (this[e] << 8) | this[e + 1];
  };
  X.prototype.readUint32LE = X.prototype.readUInt32LE = function (e, t) {
    return (
      (e = e >>> 0),
      t || Gt(e, 4, this.length),
      (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) + this[e + 3] * 16777216
    );
  };
  X.prototype.readUint32BE = X.prototype.readUInt32BE = function (e, t) {
    return (
      (e = e >>> 0),
      t || Gt(e, 4, this.length),
      this[e] * 16777216 + ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
    );
  };
  X.prototype.readBigUInt64LE = to(function (e) {
    (e = e >>> 0), Ks(e, 'offset');
    let t = this[e],
      n = this[e + 7];
    (t === void 0 || n === void 0) && ia(e, this.length - 8);
    let o = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24,
      s = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
    return BigInt(o) + (BigInt(s) << BigInt(32));
  });
  X.prototype.readBigUInt64BE = to(function (e) {
    (e = e >>> 0), Ks(e, 'offset');
    let t = this[e],
      n = this[e + 7];
    (t === void 0 || n === void 0) && ia(e, this.length - 8);
    let o = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e],
      s = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
    return (BigInt(o) << BigInt(32)) + BigInt(s);
  });
  X.prototype.readIntLE = function (e, t, n) {
    (e = e >>> 0), (t = t >>> 0), n || Gt(e, t, this.length);
    let o = this[e],
      s = 1,
      i = 0;
    for (; ++i < t && (s *= 256); ) o += this[e + i] * s;
    return (s *= 128), o >= s && (o -= Math.pow(2, 8 * t)), o;
  };
  X.prototype.readIntBE = function (e, t, n) {
    (e = e >>> 0), (t = t >>> 0), n || Gt(e, t, this.length);
    let o = t,
      s = 1,
      i = this[e + --o];
    for (; o > 0 && (s *= 256); ) i += this[e + --o] * s;
    return (s *= 128), i >= s && (i -= Math.pow(2, 8 * t)), i;
  };
  X.prototype.readInt8 = function (e, t) {
    return (
      (e = e >>> 0), t || Gt(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e]
    );
  };
  X.prototype.readInt16LE = function (e, t) {
    (e = e >>> 0), t || Gt(e, 2, this.length);
    let n = this[e] | (this[e + 1] << 8);
    return n & 32768 ? n | 4294901760 : n;
  };
  X.prototype.readInt16BE = function (e, t) {
    (e = e >>> 0), t || Gt(e, 2, this.length);
    let n = this[e + 1] | (this[e] << 8);
    return n & 32768 ? n | 4294901760 : n;
  };
  X.prototype.readInt32LE = function (e, t) {
    return (
      (e = e >>> 0),
      t || Gt(e, 4, this.length),
      this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24)
    );
  };
  X.prototype.readInt32BE = function (e, t) {
    return (
      (e = e >>> 0),
      t || Gt(e, 4, this.length),
      (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]
    );
  };
  X.prototype.readBigInt64LE = to(function (e) {
    (e = e >>> 0), Ks(e, 'offset');
    let t = this[e],
      n = this[e + 7];
    (t === void 0 || n === void 0) && ia(e, this.length - 8);
    let o = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
    return (
      (BigInt(o) << BigInt(32)) +
      BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24)
    );
  });
  X.prototype.readBigInt64BE = to(function (e) {
    (e = e >>> 0), Ks(e, 'offset');
    let t = this[e],
      n = this[e + 7];
    (t === void 0 || n === void 0) && ia(e, this.length - 8);
    let o = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
    return (
      (BigInt(o) << BigInt(32)) +
      BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n)
    );
  });
  X.prototype.readFloatLE = function (e, t) {
    return (e = e >>> 0), t || Gt(e, 4, this.length), Ws.read(this, e, !0, 23, 4);
  };
  X.prototype.readFloatBE = function (e, t) {
    return (e = e >>> 0), t || Gt(e, 4, this.length), Ws.read(this, e, !1, 23, 4);
  };
  X.prototype.readDoubleLE = function (e, t) {
    return (e = e >>> 0), t || Gt(e, 8, this.length), Ws.read(this, e, !0, 52, 8);
  };
  X.prototype.readDoubleBE = function (e, t) {
    return (e = e >>> 0), t || Gt(e, 8, this.length), Ws.read(this, e, !1, 52, 8);
  };
  function vr(r, e, t, n, o, s) {
    if (!X.isBuffer(r)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (e > o || e < s) throw new RangeError('"value" argument is out of bounds');
    if (t + n > r.length) throw new RangeError('Index out of range');
  }
  X.prototype.writeUintLE = X.prototype.writeUIntLE = function (e, t, n, o) {
    if (((e = +e), (t = t >>> 0), (n = n >>> 0), !o)) {
      let c = Math.pow(2, 8 * n) - 1;
      vr(this, e, t, n, c, 0);
    }
    let s = 1,
      i = 0;
    for (this[t] = e & 255; ++i < n && (s *= 256); ) this[t + i] = (e / s) & 255;
    return t + n;
  };
  X.prototype.writeUintBE = X.prototype.writeUIntBE = function (e, t, n, o) {
    if (((e = +e), (t = t >>> 0), (n = n >>> 0), !o)) {
      let c = Math.pow(2, 8 * n) - 1;
      vr(this, e, t, n, c, 0);
    }
    let s = n - 1,
      i = 1;
    for (this[t + s] = e & 255; --s >= 0 && (i *= 256); ) this[t + s] = (e / i) & 255;
    return t + n;
  };
  X.prototype.writeUint8 = X.prototype.writeUInt8 = function (e, t, n) {
    return (e = +e), (t = t >>> 0), n || vr(this, e, t, 1, 255, 0), (this[t] = e & 255), t + 1;
  };
  X.prototype.writeUint16LE = X.prototype.writeUInt16LE = function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || vr(this, e, t, 2, 65535, 0),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      t + 2
    );
  };
  X.prototype.writeUint16BE = X.prototype.writeUInt16BE = function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || vr(this, e, t, 2, 65535, 0),
      (this[t] = e >>> 8),
      (this[t + 1] = e & 255),
      t + 2
    );
  };
  X.prototype.writeUint32LE = X.prototype.writeUInt32LE = function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || vr(this, e, t, 4, 4294967295, 0),
      (this[t + 3] = e >>> 24),
      (this[t + 2] = e >>> 16),
      (this[t + 1] = e >>> 8),
      (this[t] = e & 255),
      t + 4
    );
  };
  X.prototype.writeUint32BE = X.prototype.writeUInt32BE = function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || vr(this, e, t, 4, 4294967295, 0),
      (this[t] = e >>> 24),
      (this[t + 1] = e >>> 16),
      (this[t + 2] = e >>> 8),
      (this[t + 3] = e & 255),
      t + 4
    );
  };
  function yg(r, e, t, n, o) {
    vg(e, n, o, r, t, 7);
    let s = Number(e & BigInt(4294967295));
    (r[t++] = s),
      (s = s >> 8),
      (r[t++] = s),
      (s = s >> 8),
      (r[t++] = s),
      (s = s >> 8),
      (r[t++] = s);
    let i = Number((e >> BigInt(32)) & BigInt(4294967295));
    return (
      (r[t++] = i),
      (i = i >> 8),
      (r[t++] = i),
      (i = i >> 8),
      (r[t++] = i),
      (i = i >> 8),
      (r[t++] = i),
      t
    );
  }
  function gg(r, e, t, n, o) {
    vg(e, n, o, r, t, 7);
    let s = Number(e & BigInt(4294967295));
    (r[t + 7] = s),
      (s = s >> 8),
      (r[t + 6] = s),
      (s = s >> 8),
      (r[t + 5] = s),
      (s = s >> 8),
      (r[t + 4] = s);
    let i = Number((e >> BigInt(32)) & BigInt(4294967295));
    return (
      (r[t + 3] = i),
      (i = i >> 8),
      (r[t + 2] = i),
      (i = i >> 8),
      (r[t + 1] = i),
      (i = i >> 8),
      (r[t] = i),
      t + 8
    );
  }
  X.prototype.writeBigUInt64LE = to(function (e, t = 0) {
    return yg(this, e, t, BigInt(0), BigInt('0xffffffffffffffff'));
  });
  X.prototype.writeBigUInt64BE = to(function (e, t = 0) {
    return gg(this, e, t, BigInt(0), BigInt('0xffffffffffffffff'));
  });
  X.prototype.writeIntLE = function (e, t, n, o) {
    if (((e = +e), (t = t >>> 0), !o)) {
      let u = Math.pow(2, 8 * n - 1);
      vr(this, e, t, n, u - 1, -u);
    }
    let s = 0,
      i = 1,
      c = 0;
    for (this[t] = e & 255; ++s < n && (i *= 256); )
      e < 0 && c === 0 && this[t + s - 1] !== 0 && (c = 1),
        (this[t + s] = (((e / i) >> 0) - c) & 255);
    return t + n;
  };
  X.prototype.writeIntBE = function (e, t, n, o) {
    if (((e = +e), (t = t >>> 0), !o)) {
      let u = Math.pow(2, 8 * n - 1);
      vr(this, e, t, n, u - 1, -u);
    }
    let s = n - 1,
      i = 1,
      c = 0;
    for (this[t + s] = e & 255; --s >= 0 && (i *= 256); )
      e < 0 && c === 0 && this[t + s + 1] !== 0 && (c = 1),
        (this[t + s] = (((e / i) >> 0) - c) & 255);
    return t + n;
  };
  X.prototype.writeInt8 = function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || vr(this, e, t, 1, 127, -128),
      e < 0 && (e = 255 + e + 1),
      (this[t] = e & 255),
      t + 1
    );
  };
  X.prototype.writeInt16LE = function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || vr(this, e, t, 2, 32767, -32768),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      t + 2
    );
  };
  X.prototype.writeInt16BE = function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || vr(this, e, t, 2, 32767, -32768),
      (this[t] = e >>> 8),
      (this[t + 1] = e & 255),
      t + 2
    );
  };
  X.prototype.writeInt32LE = function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || vr(this, e, t, 4, 2147483647, -2147483648),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      (this[t + 2] = e >>> 16),
      (this[t + 3] = e >>> 24),
      t + 4
    );
  };
  X.prototype.writeInt32BE = function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || vr(this, e, t, 4, 2147483647, -2147483648),
      e < 0 && (e = 4294967295 + e + 1),
      (this[t] = e >>> 24),
      (this[t + 1] = e >>> 16),
      (this[t + 2] = e >>> 8),
      (this[t + 3] = e & 255),
      t + 4
    );
  };
  X.prototype.writeBigInt64LE = to(function (e, t = 0) {
    return yg(this, e, t, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
  });
  X.prototype.writeBigInt64BE = to(function (e, t = 0) {
    return gg(this, e, t, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
  });
  function xg(r, e, t, n, o, s) {
    if (t + n > r.length) throw new RangeError('Index out of range');
    if (t < 0) throw new RangeError('Index out of range');
  }
  function bg(r, e, t, n, o) {
    return (
      (e = +e),
      (t = t >>> 0),
      o || xg(r, e, t, 4, 34028234663852886e22, -34028234663852886e22),
      Ws.write(r, e, t, n, 23, 4),
      t + 4
    );
  }
  X.prototype.writeFloatLE = function (e, t, n) {
    return bg(this, e, t, !0, n);
  };
  X.prototype.writeFloatBE = function (e, t, n) {
    return bg(this, e, t, !1, n);
  };
  function wg(r, e, t, n, o) {
    return (
      (e = +e),
      (t = t >>> 0),
      o || xg(r, e, t, 8, 17976931348623157e292, -17976931348623157e292),
      Ws.write(r, e, t, n, 52, 8),
      t + 8
    );
  }
  X.prototype.writeDoubleLE = function (e, t, n) {
    return wg(this, e, t, !0, n);
  };
  X.prototype.writeDoubleBE = function (e, t, n) {
    return wg(this, e, t, !1, n);
  };
  X.prototype.copy = function (e, t, n, o) {
    if (!X.isBuffer(e)) throw new TypeError('argument should be a Buffer');
    if (
      (n || (n = 0),
      !o && o !== 0 && (o = this.length),
      t >= e.length && (t = e.length),
      t || (t = 0),
      o > 0 && o < n && (o = n),
      o === n || e.length === 0 || this.length === 0)
    )
      return 0;
    if (t < 0) throw new RangeError('targetStart out of bounds');
    if (n < 0 || n >= this.length) throw new RangeError('Index out of range');
    if (o < 0) throw new RangeError('sourceEnd out of bounds');
    o > this.length && (o = this.length), e.length - t < o - n && (o = e.length - t + n);
    let s = o - n;
    return (
      this === e && typeof Uint8Array.prototype.copyWithin == 'function'
        ? this.copyWithin(t, n, o)
        : Uint8Array.prototype.set.call(e, this.subarray(n, o), t),
      s
    );
  };
  X.prototype.fill = function (e, t, n, o) {
    if (typeof e == 'string') {
      if (
        (typeof t == 'string'
          ? ((o = t), (t = 0), (n = this.length))
          : typeof n == 'string' && ((o = n), (n = this.length)),
        o !== void 0 && typeof o != 'string')
      )
        throw new TypeError('encoding must be a string');
      if (typeof o == 'string' && !X.isEncoding(o)) throw new TypeError('Unknown encoding: ' + o);
      if (e.length === 1) {
        let i = e.charCodeAt(0);
        ((o === 'utf8' && i < 128) || o === 'latin1') && (e = i);
      }
    } else typeof e == 'number' ? (e = e & 255) : typeof e == 'boolean' && (e = Number(e));
    if (t < 0 || this.length < t || this.length < n) throw new RangeError('Out of range index');
    if (n <= t) return this;
    (t = t >>> 0), (n = n === void 0 ? this.length : n >>> 0), e || (e = 0);
    let s;
    if (typeof e == 'number') for (s = t; s < n; ++s) this[s] = e;
    else {
      let i = X.isBuffer(e) ? e : X.from(e, o),
        c = i.length;
      if (c === 0) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
      for (s = 0; s < n - t; ++s) this[s + t] = i[s % c];
    }
    return this;
  };
  var Hs = {};
  function Ed(r, e, t) {
    Hs[r] = class extends t {
      constructor() {
        super(),
          Object.defineProperty(this, 'message', {
            value: e.apply(this, arguments),
            writable: !0,
            configurable: !0,
          }),
          (this.name = `${this.name} [${r}]`),
          this.stack,
          delete this.name;
      }
      get code() {
        return r;
      }
      set code(o) {
        Object.defineProperty(this, 'code', {
          configurable: !0,
          enumerable: !0,
          value: o,
          writable: !0,
        });
      }
      toString() {
        return `${this.name} [${r}]: ${this.message}`;
      }
    };
  }
  Ed(
    'ERR_BUFFER_OUT_OF_BOUNDS',
    function (r) {
      return r
        ? `${r} is outside of buffer bounds`
        : 'Attempt to access memory outside buffer bounds';
    },
    RangeError
  );
  Ed(
    'ERR_INVALID_ARG_TYPE',
    function (r, e) {
      return `The "${r}" argument must be of type number. Received type ${typeof e}`;
    },
    TypeError
  );
  Ed(
    'ERR_OUT_OF_RANGE',
    function (r, e, t) {
      let n = `The value of "${r}" is out of range.`,
        o = t;
      return (
        Number.isInteger(t) && Math.abs(t) > 2 ** 32
          ? (o = pg(String(t)))
          : typeof t == 'bigint' &&
            ((o = String(t)),
            (t > BigInt(2) ** BigInt(32) || t < -(BigInt(2) ** BigInt(32))) && (o = pg(o)),
            (o += 'n')),
        (n += ` It must be ${e}. Received ${o}`),
        n
      );
    },
    RangeError
  );
  function pg(r) {
    let e = '',
      t = r.length,
      n = r[0] === '-' ? 1 : 0;
    for (; t >= n + 4; t -= 3) e = `_${r.slice(t - 3, t)}${e}`;
    return `${r.slice(0, t)}${e}`;
  }
  function xz(r, e, t) {
    Ks(e, 'offset'), (r[e] === void 0 || r[e + t] === void 0) && ia(e, r.length - (t + 1));
  }
  function vg(r, e, t, n, o, s) {
    if (r > t || r < e) {
      let i = typeof e == 'bigint' ? 'n' : '',
        c;
      throw (
        (s > 3
          ? e === 0 || e === BigInt(0)
            ? (c = `>= 0${i} and < 2${i} ** ${(s + 1) * 8}${i}`)
            : (c = `>= -(2${i} ** ${(s + 1) * 8 - 1}${i}) and < 2 ** ${(s + 1) * 8 - 1}${i}`)
          : (c = `>= ${e}${i} and <= ${t}${i}`),
        new Hs.ERR_OUT_OF_RANGE('value', c, r))
      );
    }
    xz(n, o, s);
  }
  function Ks(r, e) {
    if (typeof r != 'number') throw new Hs.ERR_INVALID_ARG_TYPE(e, 'number', r);
  }
  function ia(r, e, t) {
    throw Math.floor(r) !== r
      ? (Ks(r, t), new Hs.ERR_OUT_OF_RANGE(t || 'offset', 'an integer', r))
      : e < 0
        ? new Hs.ERR_BUFFER_OUT_OF_BOUNDS()
        : new Hs.ERR_OUT_OF_RANGE(t || 'offset', `>= ${t ? 1 : 0} and <= ${e}`, r);
  }
  var bz = /[^+/0-9A-Za-z-_]/g;
  function wz(r) {
    if (((r = r.split('=')[0]), (r = r.trim().replace(bz, '')), r.length < 2)) return '';
    for (; r.length % 4 !== 0; ) r = r + '=';
    return r;
  }
  function wd(r, e) {
    e = e || 1 / 0;
    let t,
      n = r.length,
      o = null,
      s = [];
    for (let i = 0; i < n; ++i) {
      if (((t = r.charCodeAt(i)), t > 55295 && t < 57344)) {
        if (!o) {
          if (t > 56319) {
            (e -= 3) > -1 && s.push(239, 191, 189);
            continue;
          } else if (i + 1 === n) {
            (e -= 3) > -1 && s.push(239, 191, 189);
            continue;
          }
          o = t;
          continue;
        }
        if (t < 56320) {
          (e -= 3) > -1 && s.push(239, 191, 189), (o = t);
          continue;
        }
        t = (((o - 55296) << 10) | (t - 56320)) + 65536;
      } else o && (e -= 3) > -1 && s.push(239, 191, 189);
      if (((o = null), t < 128)) {
        if ((e -= 1) < 0) break;
        s.push(t);
      } else if (t < 2048) {
        if ((e -= 2) < 0) break;
        s.push((t >> 6) | 192, (t & 63) | 128);
      } else if (t < 65536) {
        if ((e -= 3) < 0) break;
        s.push((t >> 12) | 224, ((t >> 6) & 63) | 128, (t & 63) | 128);
      } else if (t < 1114112) {
        if ((e -= 4) < 0) break;
        s.push((t >> 18) | 240, ((t >> 12) & 63) | 128, ((t >> 6) & 63) | 128, (t & 63) | 128);
      } else throw new Error('Invalid code point');
    }
    return s;
  }
  function vz(r) {
    let e = [];
    for (let t = 0; t < r.length; ++t) e.push(r.charCodeAt(t) & 255);
    return e;
  }
  function Sz(r, e) {
    let t,
      n,
      o,
      s = [];
    for (let i = 0; i < r.length && !((e -= 2) < 0); ++i)
      (t = r.charCodeAt(i)), (n = t >> 8), (o = t % 256), s.push(o), s.push(n);
    return s;
  }
  function Sg(r) {
    return gd.toByteArray(wz(r));
  }
  function Lc(r, e, t, n) {
    let o;
    for (o = 0; o < n && !(o + t >= e.length || o >= r.length); ++o) e[o + t] = r[o];
    return o;
  }
  function an(r, e) {
    return (
      r instanceof e ||
      (r != null &&
        r.constructor != null &&
        r.constructor.name != null &&
        r.constructor.name === e.name)
    );
  }
  function _d(r) {
    return r !== r;
  }
  var Ez = (function () {
    let r = '0123456789abcdef',
      e = new Array(256);
    for (let t = 0; t < 16; ++t) {
      let n = t * 16;
      for (let o = 0; o < 16; ++o) e[n + o] = r[t] + r[o];
    }
    return e;
  })();
  function to(r) {
    return typeof BigInt > 'u' ? _z : r;
  }
  function _z() {
    throw new Error('BigInt not supported');
  }
});
var Ig = te((fK, Rg) => {
  f();
  var Ht = (Rg.exports = {}),
    cn,
    un;
  function Ad() {
    throw new Error('setTimeout has not been defined');
  }
  function Rd() {
    throw new Error('clearTimeout has not been defined');
  }
  (function () {
    try {
      typeof setTimeout == 'function' ? (cn = setTimeout) : (cn = Ad);
    } catch {
      cn = Ad;
    }
    try {
      typeof clearTimeout == 'function' ? (un = clearTimeout) : (un = Rd);
    } catch {
      un = Rd;
    }
  })();
  function Eg(r) {
    if (cn === setTimeout) return setTimeout(r, 0);
    if ((cn === Ad || !cn) && setTimeout) return (cn = setTimeout), setTimeout(r, 0);
    try {
      return cn(r, 0);
    } catch {
      try {
        return cn.call(null, r, 0);
      } catch {
        return cn.call(this, r, 0);
      }
    }
  }
  function Az(r) {
    if (un === clearTimeout) return clearTimeout(r);
    if ((un === Rd || !un) && clearTimeout) return (un = clearTimeout), clearTimeout(r);
    try {
      return un(r);
    } catch {
      try {
        return un.call(null, r);
      } catch {
        return un.call(this, r);
      }
    }
  }
  var Tn = [],
    $s = !1,
    is,
    Nc = -1;
  function Rz() {
    !$s || !is || (($s = !1), is.length ? (Tn = is.concat(Tn)) : (Nc = -1), Tn.length && _g());
  }
  function _g() {
    if (!$s) {
      var r = Eg(Rz);
      $s = !0;
      for (var e = Tn.length; e; ) {
        for (is = Tn, Tn = []; ++Nc < e; ) is && is[Nc].run();
        (Nc = -1), (e = Tn.length);
      }
      (is = null), ($s = !1), Az(r);
    }
  }
  Ht.nextTick = function (r) {
    var e = new Array(arguments.length - 1);
    if (arguments.length > 1) for (var t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
    Tn.push(new Ag(r, e)), Tn.length === 1 && !$s && Eg(_g);
  };
  function Ag(r, e) {
    (this.fun = r), (this.array = e);
  }
  Ag.prototype.run = function () {
    this.fun.apply(null, this.array);
  };
  Ht.title = 'browser';
  Ht.browser = !0;
  Ht.env = {};
  Ht.argv = [];
  Ht.version = '';
  Ht.versions = {};
  function Pn() {}
  Ht.on = Pn;
  Ht.addListener = Pn;
  Ht.once = Pn;
  Ht.off = Pn;
  Ht.removeListener = Pn;
  Ht.removeAllListeners = Pn;
  Ht.emit = Pn;
  Ht.prependListener = Pn;
  Ht.prependOnceListener = Pn;
  Ht.listeners = function (r) {
    return [];
  };
  Ht.binding = function (r) {
    throw new Error('process.binding is not supported');
  };
  Ht.cwd = function () {
    return '/';
  };
  Ht.chdir = function (r) {
    throw new Error('process.chdir is not supported');
  };
  Ht.umask = function () {
    return 0;
  };
});
var kg,
  Tg,
  S,
  v,
  f = KM(() => {
    'use strict';
    (kg = _e(ss())), (Tg = _e(Ig())), (S = Tg.default), (v = kg.Buffer);
  });
var rx = te(() => {
  f();
});
var $c = te((nx, jd) => {
  f();
  (function (r, e) {
    'use strict';
    function t(y, p) {
      if (!y) throw new Error(p || 'Assertion failed');
    }
    function n(y, p) {
      y.super_ = p;
      var d = function () {};
      (d.prototype = p.prototype), (y.prototype = new d()), (y.prototype.constructor = y);
    }
    function o(y, p, d) {
      if (o.isBN(y)) return y;
      (this.negative = 0),
        (this.words = null),
        (this.length = 0),
        (this.red = null),
        y !== null &&
          ((p === 'le' || p === 'be') && ((d = p), (p = 10)),
          this._init(y || 0, p || 10, d || 'be'));
    }
    typeof r == 'object' ? (r.exports = o) : (e.BN = o), (o.BN = o), (o.wordSize = 26);
    var s;
    try {
      typeof window < 'u' && typeof window.Buffer < 'u' ? (s = window.Buffer) : (s = rx().Buffer);
    } catch {}
    (o.isBN = function (p) {
      return p instanceof o
        ? !0
        : p !== null &&
            typeof p == 'object' &&
            p.constructor.wordSize === o.wordSize &&
            Array.isArray(p.words);
    }),
      (o.max = function (p, d) {
        return p.cmp(d) > 0 ? p : d;
      }),
      (o.min = function (p, d) {
        return p.cmp(d) < 0 ? p : d;
      }),
      (o.prototype._init = function (p, d, h) {
        if (typeof p == 'number') return this._initNumber(p, d, h);
        if (typeof p == 'object') return this._initArray(p, d, h);
        d === 'hex' && (d = 16),
          t(d === (d | 0) && d >= 2 && d <= 36),
          (p = p.toString().replace(/\s+/g, ''));
        var g = 0;
        p[0] === '-' && (g++, (this.negative = 1)),
          g < p.length &&
            (d === 16
              ? this._parseHex(p, g, h)
              : (this._parseBase(p, d, g), h === 'le' && this._initArray(this.toArray(), d, h)));
      }),
      (o.prototype._initNumber = function (p, d, h) {
        p < 0 && ((this.negative = 1), (p = -p)),
          p < 67108864
            ? ((this.words = [p & 67108863]), (this.length = 1))
            : p < 4503599627370496
              ? ((this.words = [p & 67108863, (p / 67108864) & 67108863]), (this.length = 2))
              : (t(p < 9007199254740992),
                (this.words = [p & 67108863, (p / 67108864) & 67108863, 1]),
                (this.length = 3)),
          h === 'le' && this._initArray(this.toArray(), d, h);
      }),
      (o.prototype._initArray = function (p, d, h) {
        if ((t(typeof p.length == 'number'), p.length <= 0))
          return (this.words = [0]), (this.length = 1), this;
        (this.length = Math.ceil(p.length / 3)), (this.words = new Array(this.length));
        for (var g = 0; g < this.length; g++) this.words[g] = 0;
        var b,
          I,
          M = 0;
        if (h === 'be')
          for (g = p.length - 1, b = 0; g >= 0; g -= 3)
            (I = p[g] | (p[g - 1] << 8) | (p[g - 2] << 16)),
              (this.words[b] |= (I << M) & 67108863),
              (this.words[b + 1] = (I >>> (26 - M)) & 67108863),
              (M += 24),
              M >= 26 && ((M -= 26), b++);
        else if (h === 'le')
          for (g = 0, b = 0; g < p.length; g += 3)
            (I = p[g] | (p[g + 1] << 8) | (p[g + 2] << 16)),
              (this.words[b] |= (I << M) & 67108863),
              (this.words[b + 1] = (I >>> (26 - M)) & 67108863),
              (M += 24),
              M >= 26 && ((M -= 26), b++);
        return this._strip();
      });
    function i(y, p) {
      var d = y.charCodeAt(p);
      if (d >= 48 && d <= 57) return d - 48;
      if (d >= 65 && d <= 70) return d - 55;
      if (d >= 97 && d <= 102) return d - 87;
      t(!1, 'Invalid character in ' + y);
    }
    function c(y, p, d) {
      var h = i(y, d);
      return d - 1 >= p && (h |= i(y, d - 1) << 4), h;
    }
    o.prototype._parseHex = function (p, d, h) {
      (this.length = Math.ceil((p.length - d) / 6)), (this.words = new Array(this.length));
      for (var g = 0; g < this.length; g++) this.words[g] = 0;
      var b = 0,
        I = 0,
        M;
      if (h === 'be')
        for (g = p.length - 1; g >= d; g -= 2)
          (M = c(p, d, g) << b),
            (this.words[I] |= M & 67108863),
            b >= 18 ? ((b -= 18), (I += 1), (this.words[I] |= M >>> 26)) : (b += 8);
      else {
        var k = p.length - d;
        for (g = k % 2 === 0 ? d + 1 : d; g < p.length; g += 2)
          (M = c(p, d, g) << b),
            (this.words[I] |= M & 67108863),
            b >= 18 ? ((b -= 18), (I += 1), (this.words[I] |= M >>> 26)) : (b += 8);
      }
      this._strip();
    };
    function u(y, p, d, h) {
      for (var g = 0, b = 0, I = Math.min(y.length, d), M = p; M < I; M++) {
        var k = y.charCodeAt(M) - 48;
        (g *= h),
          k >= 49 ? (b = k - 49 + 10) : k >= 17 ? (b = k - 17 + 10) : (b = k),
          t(k >= 0 && b < h, 'Invalid character'),
          (g += b);
      }
      return g;
    }
    (o.prototype._parseBase = function (p, d, h) {
      (this.words = [0]), (this.length = 1);
      for (var g = 0, b = 1; b <= 67108863; b *= d) g++;
      g--, (b = (b / d) | 0);
      for (var I = p.length - h, M = I % g, k = Math.min(I, I - M) + h, m = 0, B = h; B < k; B += g)
        (m = u(p, B, B + g, d)),
          this.imuln(b),
          this.words[0] + m < 67108864 ? (this.words[0] += m) : this._iaddn(m);
      if (M !== 0) {
        var ce = 1;
        for (m = u(p, B, p.length, d), B = 0; B < M; B++) ce *= d;
        this.imuln(ce), this.words[0] + m < 67108864 ? (this.words[0] += m) : this._iaddn(m);
      }
      this._strip();
    }),
      (o.prototype.copy = function (p) {
        p.words = new Array(this.length);
        for (var d = 0; d < this.length; d++) p.words[d] = this.words[d];
        (p.length = this.length), (p.negative = this.negative), (p.red = this.red);
      });
    function l(y, p) {
      (y.words = p.words), (y.length = p.length), (y.negative = p.negative), (y.red = p.red);
    }
    if (
      ((o.prototype._move = function (p) {
        l(p, this);
      }),
      (o.prototype.clone = function () {
        var p = new o(null);
        return this.copy(p), p;
      }),
      (o.prototype._expand = function (p) {
        for (; this.length < p; ) this.words[this.length++] = 0;
        return this;
      }),
      (o.prototype._strip = function () {
        for (; this.length > 1 && this.words[this.length - 1] === 0; ) this.length--;
        return this._normSign();
      }),
      (o.prototype._normSign = function () {
        return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
      }),
      typeof Symbol < 'u' && typeof Symbol.for == 'function')
    )
      try {
        o.prototype[Symbol.for('nodejs.util.inspect.custom')] = w;
      } catch {
        o.prototype.inspect = w;
      }
    else o.prototype.inspect = w;
    function w() {
      return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
    }
    var x = [
        '',
        '0',
        '00',
        '000',
        '0000',
        '00000',
        '000000',
        '0000000',
        '00000000',
        '000000000',
        '0000000000',
        '00000000000',
        '000000000000',
        '0000000000000',
        '00000000000000',
        '000000000000000',
        '0000000000000000',
        '00000000000000000',
        '000000000000000000',
        '0000000000000000000',
        '00000000000000000000',
        '000000000000000000000',
        '0000000000000000000000',
        '00000000000000000000000',
        '000000000000000000000000',
        '0000000000000000000000000',
      ],
      A = [
        0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5,
        5, 5, 5, 5, 5, 5, 5, 5,
      ],
      _ = [
        0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7,
        19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881,
        64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149,
        243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176,
      ];
    (o.prototype.toString = function (p, d) {
      (p = p || 10), (d = d | 0 || 1);
      var h;
      if (p === 16 || p === 'hex') {
        h = '';
        for (var g = 0, b = 0, I = 0; I < this.length; I++) {
          var M = this.words[I],
            k = (((M << g) | b) & 16777215).toString(16);
          (b = (M >>> (24 - g)) & 16777215),
            (g += 2),
            g >= 26 && ((g -= 26), I--),
            b !== 0 || I !== this.length - 1 ? (h = x[6 - k.length] + k + h) : (h = k + h);
        }
        for (b !== 0 && (h = b.toString(16) + h); h.length % d !== 0; ) h = '0' + h;
        return this.negative !== 0 && (h = '-' + h), h;
      }
      if (p === (p | 0) && p >= 2 && p <= 36) {
        var m = A[p],
          B = _[p];
        h = '';
        var ce = this.clone();
        for (ce.negative = 0; !ce.isZero(); ) {
          var E = ce.modrn(B).toString(p);
          (ce = ce.idivn(B)), ce.isZero() ? (h = E + h) : (h = x[m - E.length] + E + h);
        }
        for (this.isZero() && (h = '0' + h); h.length % d !== 0; ) h = '0' + h;
        return this.negative !== 0 && (h = '-' + h), h;
      }
      t(!1, 'Base should be between 2 and 36');
    }),
      (o.prototype.toNumber = function () {
        var p = this.words[0];
        return (
          this.length === 2
            ? (p += this.words[1] * 67108864)
            : this.length === 3 && this.words[2] === 1
              ? (p += 4503599627370496 + this.words[1] * 67108864)
              : this.length > 2 && t(!1, 'Number can only safely store up to 53 bits'),
          this.negative !== 0 ? -p : p
        );
      }),
      (o.prototype.toJSON = function () {
        return this.toString(16, 2);
      }),
      s &&
        (o.prototype.toBuffer = function (p, d) {
          return this.toArrayLike(s, p, d);
        }),
      (o.prototype.toArray = function (p, d) {
        return this.toArrayLike(Array, p, d);
      });
    var O = function (p, d) {
      return p.allocUnsafe ? p.allocUnsafe(d) : new p(d);
    };
    (o.prototype.toArrayLike = function (p, d, h) {
      this._strip();
      var g = this.byteLength(),
        b = h || Math.max(1, g);
      t(g <= b, 'byte array longer than desired length'), t(b > 0, 'Requested array length <= 0');
      var I = O(p, b),
        M = d === 'le' ? 'LE' : 'BE';
      return this['_toArrayLike' + M](I, g), I;
    }),
      (o.prototype._toArrayLikeLE = function (p, d) {
        for (var h = 0, g = 0, b = 0, I = 0; b < this.length; b++) {
          var M = (this.words[b] << I) | g;
          (p[h++] = M & 255),
            h < p.length && (p[h++] = (M >> 8) & 255),
            h < p.length && (p[h++] = (M >> 16) & 255),
            I === 6
              ? (h < p.length && (p[h++] = (M >> 24) & 255), (g = 0), (I = 0))
              : ((g = M >>> 24), (I += 2));
        }
        if (h < p.length) for (p[h++] = g; h < p.length; ) p[h++] = 0;
      }),
      (o.prototype._toArrayLikeBE = function (p, d) {
        for (var h = p.length - 1, g = 0, b = 0, I = 0; b < this.length; b++) {
          var M = (this.words[b] << I) | g;
          (p[h--] = M & 255),
            h >= 0 && (p[h--] = (M >> 8) & 255),
            h >= 0 && (p[h--] = (M >> 16) & 255),
            I === 6
              ? (h >= 0 && (p[h--] = (M >> 24) & 255), (g = 0), (I = 0))
              : ((g = M >>> 24), (I += 2));
        }
        if (h >= 0) for (p[h--] = g; h >= 0; ) p[h--] = 0;
      }),
      Math.clz32
        ? (o.prototype._countBits = function (p) {
            return 32 - Math.clz32(p);
          })
        : (o.prototype._countBits = function (p) {
            var d = p,
              h = 0;
            return (
              d >= 4096 && ((h += 13), (d >>>= 13)),
              d >= 64 && ((h += 7), (d >>>= 7)),
              d >= 8 && ((h += 4), (d >>>= 4)),
              d >= 2 && ((h += 2), (d >>>= 2)),
              h + d
            );
          }),
      (o.prototype._zeroBits = function (p) {
        if (p === 0) return 26;
        var d = p,
          h = 0;
        return (
          d & 8191 || ((h += 13), (d >>>= 13)),
          d & 127 || ((h += 7), (d >>>= 7)),
          d & 15 || ((h += 4), (d >>>= 4)),
          d & 3 || ((h += 2), (d >>>= 2)),
          d & 1 || h++,
          h
        );
      }),
      (o.prototype.bitLength = function () {
        var p = this.words[this.length - 1],
          d = this._countBits(p);
        return (this.length - 1) * 26 + d;
      });
    function D(y) {
      for (var p = new Array(y.bitLength()), d = 0; d < p.length; d++) {
        var h = (d / 26) | 0,
          g = d % 26;
        p[d] = (y.words[h] >>> g) & 1;
      }
      return p;
    }
    (o.prototype.zeroBits = function () {
      if (this.isZero()) return 0;
      for (var p = 0, d = 0; d < this.length; d++) {
        var h = this._zeroBits(this.words[d]);
        if (((p += h), h !== 26)) break;
      }
      return p;
    }),
      (o.prototype.byteLength = function () {
        return Math.ceil(this.bitLength() / 8);
      }),
      (o.prototype.toTwos = function (p) {
        return this.negative !== 0 ? this.abs().inotn(p).iaddn(1) : this.clone();
      }),
      (o.prototype.fromTwos = function (p) {
        return this.testn(p - 1) ? this.notn(p).iaddn(1).ineg() : this.clone();
      }),
      (o.prototype.isNeg = function () {
        return this.negative !== 0;
      }),
      (o.prototype.neg = function () {
        return this.clone().ineg();
      }),
      (o.prototype.ineg = function () {
        return this.isZero() || (this.negative ^= 1), this;
      }),
      (o.prototype.iuor = function (p) {
        for (; this.length < p.length; ) this.words[this.length++] = 0;
        for (var d = 0; d < p.length; d++) this.words[d] = this.words[d] | p.words[d];
        return this._strip();
      }),
      (o.prototype.ior = function (p) {
        return t((this.negative | p.negative) === 0), this.iuor(p);
      }),
      (o.prototype.or = function (p) {
        return this.length > p.length ? this.clone().ior(p) : p.clone().ior(this);
      }),
      (o.prototype.uor = function (p) {
        return this.length > p.length ? this.clone().iuor(p) : p.clone().iuor(this);
      }),
      (o.prototype.iuand = function (p) {
        var d;
        this.length > p.length ? (d = p) : (d = this);
        for (var h = 0; h < d.length; h++) this.words[h] = this.words[h] & p.words[h];
        return (this.length = d.length), this._strip();
      }),
      (o.prototype.iand = function (p) {
        return t((this.negative | p.negative) === 0), this.iuand(p);
      }),
      (o.prototype.and = function (p) {
        return this.length > p.length ? this.clone().iand(p) : p.clone().iand(this);
      }),
      (o.prototype.uand = function (p) {
        return this.length > p.length ? this.clone().iuand(p) : p.clone().iuand(this);
      }),
      (o.prototype.iuxor = function (p) {
        var d, h;
        this.length > p.length ? ((d = this), (h = p)) : ((d = p), (h = this));
        for (var g = 0; g < h.length; g++) this.words[g] = d.words[g] ^ h.words[g];
        if (this !== d) for (; g < d.length; g++) this.words[g] = d.words[g];
        return (this.length = d.length), this._strip();
      }),
      (o.prototype.ixor = function (p) {
        return t((this.negative | p.negative) === 0), this.iuxor(p);
      }),
      (o.prototype.xor = function (p) {
        return this.length > p.length ? this.clone().ixor(p) : p.clone().ixor(this);
      }),
      (o.prototype.uxor = function (p) {
        return this.length > p.length ? this.clone().iuxor(p) : p.clone().iuxor(this);
      }),
      (o.prototype.inotn = function (p) {
        t(typeof p == 'number' && p >= 0);
        var d = Math.ceil(p / 26) | 0,
          h = p % 26;
        this._expand(d), h > 0 && d--;
        for (var g = 0; g < d; g++) this.words[g] = ~this.words[g] & 67108863;
        return h > 0 && (this.words[g] = ~this.words[g] & (67108863 >> (26 - h))), this._strip();
      }),
      (o.prototype.notn = function (p) {
        return this.clone().inotn(p);
      }),
      (o.prototype.setn = function (p, d) {
        t(typeof p == 'number' && p >= 0);
        var h = (p / 26) | 0,
          g = p % 26;
        return (
          this._expand(h + 1),
          d
            ? (this.words[h] = this.words[h] | (1 << g))
            : (this.words[h] = this.words[h] & ~(1 << g)),
          this._strip()
        );
      }),
      (o.prototype.iadd = function (p) {
        var d;
        if (this.negative !== 0 && p.negative === 0)
          return (this.negative = 0), (d = this.isub(p)), (this.negative ^= 1), this._normSign();
        if (this.negative === 0 && p.negative !== 0)
          return (p.negative = 0), (d = this.isub(p)), (p.negative = 1), d._normSign();
        var h, g;
        this.length > p.length ? ((h = this), (g = p)) : ((h = p), (g = this));
        for (var b = 0, I = 0; I < g.length; I++)
          (d = (h.words[I] | 0) + (g.words[I] | 0) + b),
            (this.words[I] = d & 67108863),
            (b = d >>> 26);
        for (; b !== 0 && I < h.length; I++)
          (d = (h.words[I] | 0) + b), (this.words[I] = d & 67108863), (b = d >>> 26);
        if (((this.length = h.length), b !== 0)) (this.words[this.length] = b), this.length++;
        else if (h !== this) for (; I < h.length; I++) this.words[I] = h.words[I];
        return this;
      }),
      (o.prototype.add = function (p) {
        var d;
        return p.negative !== 0 && this.negative === 0
          ? ((p.negative = 0), (d = this.sub(p)), (p.negative ^= 1), d)
          : p.negative === 0 && this.negative !== 0
            ? ((this.negative = 0), (d = p.sub(this)), (this.negative = 1), d)
            : this.length > p.length
              ? this.clone().iadd(p)
              : p.clone().iadd(this);
      }),
      (o.prototype.isub = function (p) {
        if (p.negative !== 0) {
          p.negative = 0;
          var d = this.iadd(p);
          return (p.negative = 1), d._normSign();
        } else if (this.negative !== 0)
          return (this.negative = 0), this.iadd(p), (this.negative = 1), this._normSign();
        var h = this.cmp(p);
        if (h === 0) return (this.negative = 0), (this.length = 1), (this.words[0] = 0), this;
        var g, b;
        h > 0 ? ((g = this), (b = p)) : ((g = p), (b = this));
        for (var I = 0, M = 0; M < b.length; M++)
          (d = (g.words[M] | 0) - (b.words[M] | 0) + I),
            (I = d >> 26),
            (this.words[M] = d & 67108863);
        for (; I !== 0 && M < g.length; M++)
          (d = (g.words[M] | 0) + I), (I = d >> 26), (this.words[M] = d & 67108863);
        if (I === 0 && M < g.length && g !== this)
          for (; M < g.length; M++) this.words[M] = g.words[M];
        return (
          (this.length = Math.max(this.length, M)), g !== this && (this.negative = 1), this._strip()
        );
      }),
      (o.prototype.sub = function (p) {
        return this.clone().isub(p);
      });
    function j(y, p, d) {
      d.negative = p.negative ^ y.negative;
      var h = (y.length + p.length) | 0;
      (d.length = h), (h = (h - 1) | 0);
      var g = y.words[0] | 0,
        b = p.words[0] | 0,
        I = g * b,
        M = I & 67108863,
        k = (I / 67108864) | 0;
      d.words[0] = M;
      for (var m = 1; m < h; m++) {
        for (
          var B = k >>> 26,
            ce = k & 67108863,
            E = Math.min(m, p.length - 1),
            F = Math.max(0, m - y.length + 1);
          F <= E;
          F++
        ) {
          var W = (m - F) | 0;
          (g = y.words[W] | 0),
            (b = p.words[F] | 0),
            (I = g * b + ce),
            (B += (I / 67108864) | 0),
            (ce = I & 67108863);
        }
        (d.words[m] = ce | 0), (k = B | 0);
      }
      return k !== 0 ? (d.words[m] = k | 0) : d.length--, d._strip();
    }
    var G = function (p, d, h) {
      var g = p.words,
        b = d.words,
        I = h.words,
        M = 0,
        k,
        m,
        B,
        ce = g[0] | 0,
        E = ce & 8191,
        F = ce >>> 13,
        W = g[1] | 0,
        Z = W & 8191,
        se = W >>> 13,
        ge = g[2] | 0,
        pe = ge & 8191,
        fe = ge >>> 13,
        Fe = g[3] | 0,
        le = Fe & 8191,
        we = Fe >>> 13,
        Fo = g[4] | 0,
        nt = Fo & 8191,
        ot = Fo >>> 13,
        jo = g[5] | 0,
        st = jo & 8191,
        it = jo >>> 13,
        Ho = g[6] | 0,
        at = Ho & 8191,
        ct = Ho >>> 13,
        Wo = g[7] | 0,
        ut = Wo & 8191,
        pt = Wo >>> 13,
        Ko = g[8] | 0,
        ft = Ko & 8191,
        lt = Ko >>> 13,
        Vo = g[9] | 0,
        dt = Vo & 8191,
        ht = Vo >>> 13,
        $o = b[0] | 0,
        mt = $o & 8191,
        yt = $o >>> 13,
        Go = b[1] | 0,
        gt = Go & 8191,
        xt = Go >>> 13,
        Yo = b[2] | 0,
        bt = Yo & 8191,
        wt = Yo >>> 13,
        Zo = b[3] | 0,
        vt = Zo & 8191,
        St = Zo >>> 13,
        Jo = b[4] | 0,
        Et = Jo & 8191,
        _t = Jo >>> 13,
        Xo = b[5] | 0,
        At = Xo & 8191,
        Rt = Xo >>> 13,
        Qo = b[6] | 0,
        It = Qo & 8191,
        kt = Qo >>> 13,
        es = b[7] | 0,
        Tt = es & 8191,
        Pt = es >>> 13,
        ts = b[8] | 0,
        Bt = ts & 8191,
        Mt = ts >>> 13,
        rs = b[9] | 0,
        zt = rs & 8191,
        Lt = rs >>> 13;
      (h.negative = p.negative ^ d.negative),
        (h.length = 19),
        (k = Math.imul(E, mt)),
        (m = Math.imul(E, yt)),
        (m = (m + Math.imul(F, mt)) | 0),
        (B = Math.imul(F, yt));
      var Zn = (((M + k) | 0) + ((m & 8191) << 13)) | 0;
      (M = (((B + (m >>> 13)) | 0) + (Zn >>> 26)) | 0),
        (Zn &= 67108863),
        (k = Math.imul(Z, mt)),
        (m = Math.imul(Z, yt)),
        (m = (m + Math.imul(se, mt)) | 0),
        (B = Math.imul(se, yt)),
        (k = (k + Math.imul(E, gt)) | 0),
        (m = (m + Math.imul(E, xt)) | 0),
        (m = (m + Math.imul(F, gt)) | 0),
        (B = (B + Math.imul(F, xt)) | 0);
      var Jn = (((M + k) | 0) + ((m & 8191) << 13)) | 0;
      (M = (((B + (m >>> 13)) | 0) + (Jn >>> 26)) | 0),
        (Jn &= 67108863),
        (k = Math.imul(pe, mt)),
        (m = Math.imul(pe, yt)),
        (m = (m + Math.imul(fe, mt)) | 0),
        (B = Math.imul(fe, yt)),
        (k = (k + Math.imul(Z, gt)) | 0),
        (m = (m + Math.imul(Z, xt)) | 0),
        (m = (m + Math.imul(se, gt)) | 0),
        (B = (B + Math.imul(se, xt)) | 0),
        (k = (k + Math.imul(E, bt)) | 0),
        (m = (m + Math.imul(E, wt)) | 0),
        (m = (m + Math.imul(F, bt)) | 0),
        (B = (B + Math.imul(F, wt)) | 0);
      var Xn = (((M + k) | 0) + ((m & 8191) << 13)) | 0;
      (M = (((B + (m >>> 13)) | 0) + (Xn >>> 26)) | 0),
        (Xn &= 67108863),
        (k = Math.imul(le, mt)),
        (m = Math.imul(le, yt)),
        (m = (m + Math.imul(we, mt)) | 0),
        (B = Math.imul(we, yt)),
        (k = (k + Math.imul(pe, gt)) | 0),
        (m = (m + Math.imul(pe, xt)) | 0),
        (m = (m + Math.imul(fe, gt)) | 0),
        (B = (B + Math.imul(fe, xt)) | 0),
        (k = (k + Math.imul(Z, bt)) | 0),
        (m = (m + Math.imul(Z, wt)) | 0),
        (m = (m + Math.imul(se, bt)) | 0),
        (B = (B + Math.imul(se, wt)) | 0),
        (k = (k + Math.imul(E, vt)) | 0),
        (m = (m + Math.imul(E, St)) | 0),
        (m = (m + Math.imul(F, vt)) | 0),
        (B = (B + Math.imul(F, St)) | 0);
      var Qn = (((M + k) | 0) + ((m & 8191) << 13)) | 0;
      (M = (((B + (m >>> 13)) | 0) + (Qn >>> 26)) | 0),
        (Qn &= 67108863),
        (k = Math.imul(nt, mt)),
        (m = Math.imul(nt, yt)),
        (m = (m + Math.imul(ot, mt)) | 0),
        (B = Math.imul(ot, yt)),
        (k = (k + Math.imul(le, gt)) | 0),
        (m = (m + Math.imul(le, xt)) | 0),
        (m = (m + Math.imul(we, gt)) | 0),
        (B = (B + Math.imul(we, xt)) | 0),
        (k = (k + Math.imul(pe, bt)) | 0),
        (m = (m + Math.imul(pe, wt)) | 0),
        (m = (m + Math.imul(fe, bt)) | 0),
        (B = (B + Math.imul(fe, wt)) | 0),
        (k = (k + Math.imul(Z, vt)) | 0),
        (m = (m + Math.imul(Z, St)) | 0),
        (m = (m + Math.imul(se, vt)) | 0),
        (B = (B + Math.imul(se, St)) | 0),
        (k = (k + Math.imul(E, Et)) | 0),
        (m = (m + Math.imul(E, _t)) | 0),
        (m = (m + Math.imul(F, Et)) | 0),
        (B = (B + Math.imul(F, _t)) | 0);
      var eo = (((M + k) | 0) + ((m & 8191) << 13)) | 0;
      (M = (((B + (m >>> 13)) | 0) + (eo >>> 26)) | 0),
        (eo &= 67108863),
        (k = Math.imul(st, mt)),
        (m = Math.imul(st, yt)),
        (m = (m + Math.imul(it, mt)) | 0),
        (B = Math.imul(it, yt)),
        (k = (k + Math.imul(nt, gt)) | 0),
        (m = (m + Math.imul(nt, xt)) | 0),
        (m = (m + Math.imul(ot, gt)) | 0),
        (B = (B + Math.imul(ot, xt)) | 0),
        (k = (k + Math.imul(le, bt)) | 0),
        (m = (m + Math.imul(le, wt)) | 0),
        (m = (m + Math.imul(we, bt)) | 0),
        (B = (B + Math.imul(we, wt)) | 0),
        (k = (k + Math.imul(pe, vt)) | 0),
        (m = (m + Math.imul(pe, St)) | 0),
        (m = (m + Math.imul(fe, vt)) | 0),
        (B = (B + Math.imul(fe, St)) | 0),
        (k = (k + Math.imul(Z, Et)) | 0),
        (m = (m + Math.imul(Z, _t)) | 0),
        (m = (m + Math.imul(se, Et)) | 0),
        (B = (B + Math.imul(se, _t)) | 0),
        (k = (k + Math.imul(E, At)) | 0),
        (m = (m + Math.imul(E, Rt)) | 0),
        (m = (m + Math.imul(F, At)) | 0),
        (B = (B + Math.imul(F, Rt)) | 0);
      var Xl = (((M + k) | 0) + ((m & 8191) << 13)) | 0;
      (M = (((B + (m >>> 13)) | 0) + (Xl >>> 26)) | 0),
        (Xl &= 67108863),
        (k = Math.imul(at, mt)),
        (m = Math.imul(at, yt)),
        (m = (m + Math.imul(ct, mt)) | 0),
        (B = Math.imul(ct, yt)),
        (k = (k + Math.imul(st, gt)) | 0),
        (m = (m + Math.imul(st, xt)) | 0),
        (m = (m + Math.imul(it, gt)) | 0),
        (B = (B + Math.imul(it, xt)) | 0),
        (k = (k + Math.imul(nt, bt)) | 0),
        (m = (m + Math.imul(nt, wt)) | 0),
        (m = (m + Math.imul(ot, bt)) | 0),
        (B = (B + Math.imul(ot, wt)) | 0),
        (k = (k + Math.imul(le, vt)) | 0),
        (m = (m + Math.imul(le, St)) | 0),
        (m = (m + Math.imul(we, vt)) | 0),
        (B = (B + Math.imul(we, St)) | 0),
        (k = (k + Math.imul(pe, Et)) | 0),
        (m = (m + Math.imul(pe, _t)) | 0),
        (m = (m + Math.imul(fe, Et)) | 0),
        (B = (B + Math.imul(fe, _t)) | 0),
        (k = (k + Math.imul(Z, At)) | 0),
        (m = (m + Math.imul(Z, Rt)) | 0),
        (m = (m + Math.imul(se, At)) | 0),
        (B = (B + Math.imul(se, Rt)) | 0),
        (k = (k + Math.imul(E, It)) | 0),
        (m = (m + Math.imul(E, kt)) | 0),
        (m = (m + Math.imul(F, It)) | 0),
        (B = (B + Math.imul(F, kt)) | 0);
      var Ql = (((M + k) | 0) + ((m & 8191) << 13)) | 0;
      (M = (((B + (m >>> 13)) | 0) + (Ql >>> 26)) | 0),
        (Ql &= 67108863),
        (k = Math.imul(ut, mt)),
        (m = Math.imul(ut, yt)),
        (m = (m + Math.imul(pt, mt)) | 0),
        (B = Math.imul(pt, yt)),
        (k = (k + Math.imul(at, gt)) | 0),
        (m = (m + Math.imul(at, xt)) | 0),
        (m = (m + Math.imul(ct, gt)) | 0),
        (B = (B + Math.imul(ct, xt)) | 0),
        (k = (k + Math.imul(st, bt)) | 0),
        (m = (m + Math.imul(st, wt)) | 0),
        (m = (m + Math.imul(it, bt)) | 0),
        (B = (B + Math.imul(it, wt)) | 0),
        (k = (k + Math.imul(nt, vt)) | 0),
        (m = (m + Math.imul(nt, St)) | 0),
        (m = (m + Math.imul(ot, vt)) | 0),
        (B = (B + Math.imul(ot, St)) | 0),
        (k = (k + Math.imul(le, Et)) | 0),
        (m = (m + Math.imul(le, _t)) | 0),
        (m = (m + Math.imul(we, Et)) | 0),
        (B = (B + Math.imul(we, _t)) | 0),
        (k = (k + Math.imul(pe, At)) | 0),
        (m = (m + Math.imul(pe, Rt)) | 0),
        (m = (m + Math.imul(fe, At)) | 0),
        (B = (B + Math.imul(fe, Rt)) | 0),
        (k = (k + Math.imul(Z, It)) | 0),
        (m = (m + Math.imul(Z, kt)) | 0),
        (m = (m + Math.imul(se, It)) | 0),
        (B = (B + Math.imul(se, kt)) | 0),
        (k = (k + Math.imul(E, Tt)) | 0),
        (m = (m + Math.imul(E, Pt)) | 0),
        (m = (m + Math.imul(F, Tt)) | 0),
        (B = (B + Math.imul(F, Pt)) | 0);
      var ed = (((M + k) | 0) + ((m & 8191) << 13)) | 0;
      (M = (((B + (m >>> 13)) | 0) + (ed >>> 26)) | 0),
        (ed &= 67108863),
        (k = Math.imul(ft, mt)),
        (m = Math.imul(ft, yt)),
        (m = (m + Math.imul(lt, mt)) | 0),
        (B = Math.imul(lt, yt)),
        (k = (k + Math.imul(ut, gt)) | 0),
        (m = (m + Math.imul(ut, xt)) | 0),
        (m = (m + Math.imul(pt, gt)) | 0),
        (B = (B + Math.imul(pt, xt)) | 0),
        (k = (k + Math.imul(at, bt)) | 0),
        (m = (m + Math.imul(at, wt)) | 0),
        (m = (m + Math.imul(ct, bt)) | 0),
        (B = (B + Math.imul(ct, wt)) | 0),
        (k = (k + Math.imul(st, vt)) | 0),
        (m = (m + Math.imul(st, St)) | 0),
        (m = (m + Math.imul(it, vt)) | 0),
        (B = (B + Math.imul(it, St)) | 0),
        (k = (k + Math.imul(nt, Et)) | 0),
        (m = (m + Math.imul(nt, _t)) | 0),
        (m = (m + Math.imul(ot, Et)) | 0),
        (B = (B + Math.imul(ot, _t)) | 0),
        (k = (k + Math.imul(le, At)) | 0),
        (m = (m + Math.imul(le, Rt)) | 0),
        (m = (m + Math.imul(we, At)) | 0),
        (B = (B + Math.imul(we, Rt)) | 0),
        (k = (k + Math.imul(pe, It)) | 0),
        (m = (m + Math.imul(pe, kt)) | 0),
        (m = (m + Math.imul(fe, It)) | 0),
        (B = (B + Math.imul(fe, kt)) | 0),
        (k = (k + Math.imul(Z, Tt)) | 0),
        (m = (m + Math.imul(Z, Pt)) | 0),
        (m = (m + Math.imul(se, Tt)) | 0),
        (B = (B + Math.imul(se, Pt)) | 0),
        (k = (k + Math.imul(E, Bt)) | 0),
        (m = (m + Math.imul(E, Mt)) | 0),
        (m = (m + Math.imul(F, Bt)) | 0),
        (B = (B + Math.imul(F, Mt)) | 0);
      var td = (((M + k) | 0) + ((m & 8191) << 13)) | 0;
      (M = (((B + (m >>> 13)) | 0) + (td >>> 26)) | 0),
        (td &= 67108863),
        (k = Math.imul(dt, mt)),
        (m = Math.imul(dt, yt)),
        (m = (m + Math.imul(ht, mt)) | 0),
        (B = Math.imul(ht, yt)),
        (k = (k + Math.imul(ft, gt)) | 0),
        (m = (m + Math.imul(ft, xt)) | 0),
        (m = (m + Math.imul(lt, gt)) | 0),
        (B = (B + Math.imul(lt, xt)) | 0),
        (k = (k + Math.imul(ut, bt)) | 0),
        (m = (m + Math.imul(ut, wt)) | 0),
        (m = (m + Math.imul(pt, bt)) | 0),
        (B = (B + Math.imul(pt, wt)) | 0),
        (k = (k + Math.imul(at, vt)) | 0),
        (m = (m + Math.imul(at, St)) | 0),
        (m = (m + Math.imul(ct, vt)) | 0),
        (B = (B + Math.imul(ct, St)) | 0),
        (k = (k + Math.imul(st, Et)) | 0),
        (m = (m + Math.imul(st, _t)) | 0),
        (m = (m + Math.imul(it, Et)) | 0),
        (B = (B + Math.imul(it, _t)) | 0),
        (k = (k + Math.imul(nt, At)) | 0),
        (m = (m + Math.imul(nt, Rt)) | 0),
        (m = (m + Math.imul(ot, At)) | 0),
        (B = (B + Math.imul(ot, Rt)) | 0),
        (k = (k + Math.imul(le, It)) | 0),
        (m = (m + Math.imul(le, kt)) | 0),
        (m = (m + Math.imul(we, It)) | 0),
        (B = (B + Math.imul(we, kt)) | 0),
        (k = (k + Math.imul(pe, Tt)) | 0),
        (m = (m + Math.imul(pe, Pt)) | 0),
        (m = (m + Math.imul(fe, Tt)) | 0),
        (B = (B + Math.imul(fe, Pt)) | 0),
        (k = (k + Math.imul(Z, Bt)) | 0),
        (m = (m + Math.imul(Z, Mt)) | 0),
        (m = (m + Math.imul(se, Bt)) | 0),
        (B = (B + Math.imul(se, Mt)) | 0),
        (k = (k + Math.imul(E, zt)) | 0),
        (m = (m + Math.imul(E, Lt)) | 0),
        (m = (m + Math.imul(F, zt)) | 0),
        (B = (B + Math.imul(F, Lt)) | 0);
      var rd = (((M + k) | 0) + ((m & 8191) << 13)) | 0;
      (M = (((B + (m >>> 13)) | 0) + (rd >>> 26)) | 0),
        (rd &= 67108863),
        (k = Math.imul(dt, gt)),
        (m = Math.imul(dt, xt)),
        (m = (m + Math.imul(ht, gt)) | 0),
        (B = Math.imul(ht, xt)),
        (k = (k + Math.imul(ft, bt)) | 0),
        (m = (m + Math.imul(ft, wt)) | 0),
        (m = (m + Math.imul(lt, bt)) | 0),
        (B = (B + Math.imul(lt, wt)) | 0),
        (k = (k + Math.imul(ut, vt)) | 0),
        (m = (m + Math.imul(ut, St)) | 0),
        (m = (m + Math.imul(pt, vt)) | 0),
        (B = (B + Math.imul(pt, St)) | 0),
        (k = (k + Math.imul(at, Et)) | 0),
        (m = (m + Math.imul(at, _t)) | 0),
        (m = (m + Math.imul(ct, Et)) | 0),
        (B = (B + Math.imul(ct, _t)) | 0),
        (k = (k + Math.imul(st, At)) | 0),
        (m = (m + Math.imul(st, Rt)) | 0),
        (m = (m + Math.imul(it, At)) | 0),
        (B = (B + Math.imul(it, Rt)) | 0),
        (k = (k + Math.imul(nt, It)) | 0),
        (m = (m + Math.imul(nt, kt)) | 0),
        (m = (m + Math.imul(ot, It)) | 0),
        (B = (B + Math.imul(ot, kt)) | 0),
        (k = (k + Math.imul(le, Tt)) | 0),
        (m = (m + Math.imul(le, Pt)) | 0),
        (m = (m + Math.imul(we, Tt)) | 0),
        (B = (B + Math.imul(we, Pt)) | 0),
        (k = (k + Math.imul(pe, Bt)) | 0),
        (m = (m + Math.imul(pe, Mt)) | 0),
        (m = (m + Math.imul(fe, Bt)) | 0),
        (B = (B + Math.imul(fe, Mt)) | 0),
        (k = (k + Math.imul(Z, zt)) | 0),
        (m = (m + Math.imul(Z, Lt)) | 0),
        (m = (m + Math.imul(se, zt)) | 0),
        (B = (B + Math.imul(se, Lt)) | 0);
      var nd = (((M + k) | 0) + ((m & 8191) << 13)) | 0;
      (M = (((B + (m >>> 13)) | 0) + (nd >>> 26)) | 0),
        (nd &= 67108863),
        (k = Math.imul(dt, bt)),
        (m = Math.imul(dt, wt)),
        (m = (m + Math.imul(ht, bt)) | 0),
        (B = Math.imul(ht, wt)),
        (k = (k + Math.imul(ft, vt)) | 0),
        (m = (m + Math.imul(ft, St)) | 0),
        (m = (m + Math.imul(lt, vt)) | 0),
        (B = (B + Math.imul(lt, St)) | 0),
        (k = (k + Math.imul(ut, Et)) | 0),
        (m = (m + Math.imul(ut, _t)) | 0),
        (m = (m + Math.imul(pt, Et)) | 0),
        (B = (B + Math.imul(pt, _t)) | 0),
        (k = (k + Math.imul(at, At)) | 0),
        (m = (m + Math.imul(at, Rt)) | 0),
        (m = (m + Math.imul(ct, At)) | 0),
        (B = (B + Math.imul(ct, Rt)) | 0),
        (k = (k + Math.imul(st, It)) | 0),
        (m = (m + Math.imul(st, kt)) | 0),
        (m = (m + Math.imul(it, It)) | 0),
        (B = (B + Math.imul(it, kt)) | 0),
        (k = (k + Math.imul(nt, Tt)) | 0),
        (m = (m + Math.imul(nt, Pt)) | 0),
        (m = (m + Math.imul(ot, Tt)) | 0),
        (B = (B + Math.imul(ot, Pt)) | 0),
        (k = (k + Math.imul(le, Bt)) | 0),
        (m = (m + Math.imul(le, Mt)) | 0),
        (m = (m + Math.imul(we, Bt)) | 0),
        (B = (B + Math.imul(we, Mt)) | 0),
        (k = (k + Math.imul(pe, zt)) | 0),
        (m = (m + Math.imul(pe, Lt)) | 0),
        (m = (m + Math.imul(fe, zt)) | 0),
        (B = (B + Math.imul(fe, Lt)) | 0);
      var od = (((M + k) | 0) + ((m & 8191) << 13)) | 0;
      (M = (((B + (m >>> 13)) | 0) + (od >>> 26)) | 0),
        (od &= 67108863),
        (k = Math.imul(dt, vt)),
        (m = Math.imul(dt, St)),
        (m = (m + Math.imul(ht, vt)) | 0),
        (B = Math.imul(ht, St)),
        (k = (k + Math.imul(ft, Et)) | 0),
        (m = (m + Math.imul(ft, _t)) | 0),
        (m = (m + Math.imul(lt, Et)) | 0),
        (B = (B + Math.imul(lt, _t)) | 0),
        (k = (k + Math.imul(ut, At)) | 0),
        (m = (m + Math.imul(ut, Rt)) | 0),
        (m = (m + Math.imul(pt, At)) | 0),
        (B = (B + Math.imul(pt, Rt)) | 0),
        (k = (k + Math.imul(at, It)) | 0),
        (m = (m + Math.imul(at, kt)) | 0),
        (m = (m + Math.imul(ct, It)) | 0),
        (B = (B + Math.imul(ct, kt)) | 0),
        (k = (k + Math.imul(st, Tt)) | 0),
        (m = (m + Math.imul(st, Pt)) | 0),
        (m = (m + Math.imul(it, Tt)) | 0),
        (B = (B + Math.imul(it, Pt)) | 0),
        (k = (k + Math.imul(nt, Bt)) | 0),
        (m = (m + Math.imul(nt, Mt)) | 0),
        (m = (m + Math.imul(ot, Bt)) | 0),
        (B = (B + Math.imul(ot, Mt)) | 0),
        (k = (k + Math.imul(le, zt)) | 0),
        (m = (m + Math.imul(le, Lt)) | 0),
        (m = (m + Math.imul(we, zt)) | 0),
        (B = (B + Math.imul(we, Lt)) | 0);
      var sd = (((M + k) | 0) + ((m & 8191) << 13)) | 0;
      (M = (((B + (m >>> 13)) | 0) + (sd >>> 26)) | 0),
        (sd &= 67108863),
        (k = Math.imul(dt, Et)),
        (m = Math.imul(dt, _t)),
        (m = (m + Math.imul(ht, Et)) | 0),
        (B = Math.imul(ht, _t)),
        (k = (k + Math.imul(ft, At)) | 0),
        (m = (m + Math.imul(ft, Rt)) | 0),
        (m = (m + Math.imul(lt, At)) | 0),
        (B = (B + Math.imul(lt, Rt)) | 0),
        (k = (k + Math.imul(ut, It)) | 0),
        (m = (m + Math.imul(ut, kt)) | 0),
        (m = (m + Math.imul(pt, It)) | 0),
        (B = (B + Math.imul(pt, kt)) | 0),
        (k = (k + Math.imul(at, Tt)) | 0),
        (m = (m + Math.imul(at, Pt)) | 0),
        (m = (m + Math.imul(ct, Tt)) | 0),
        (B = (B + Math.imul(ct, Pt)) | 0),
        (k = (k + Math.imul(st, Bt)) | 0),
        (m = (m + Math.imul(st, Mt)) | 0),
        (m = (m + Math.imul(it, Bt)) | 0),
        (B = (B + Math.imul(it, Mt)) | 0),
        (k = (k + Math.imul(nt, zt)) | 0),
        (m = (m + Math.imul(nt, Lt)) | 0),
        (m = (m + Math.imul(ot, zt)) | 0),
        (B = (B + Math.imul(ot, Lt)) | 0);
      var id = (((M + k) | 0) + ((m & 8191) << 13)) | 0;
      (M = (((B + (m >>> 13)) | 0) + (id >>> 26)) | 0),
        (id &= 67108863),
        (k = Math.imul(dt, At)),
        (m = Math.imul(dt, Rt)),
        (m = (m + Math.imul(ht, At)) | 0),
        (B = Math.imul(ht, Rt)),
        (k = (k + Math.imul(ft, It)) | 0),
        (m = (m + Math.imul(ft, kt)) | 0),
        (m = (m + Math.imul(lt, It)) | 0),
        (B = (B + Math.imul(lt, kt)) | 0),
        (k = (k + Math.imul(ut, Tt)) | 0),
        (m = (m + Math.imul(ut, Pt)) | 0),
        (m = (m + Math.imul(pt, Tt)) | 0),
        (B = (B + Math.imul(pt, Pt)) | 0),
        (k = (k + Math.imul(at, Bt)) | 0),
        (m = (m + Math.imul(at, Mt)) | 0),
        (m = (m + Math.imul(ct, Bt)) | 0),
        (B = (B + Math.imul(ct, Mt)) | 0),
        (k = (k + Math.imul(st, zt)) | 0),
        (m = (m + Math.imul(st, Lt)) | 0),
        (m = (m + Math.imul(it, zt)) | 0),
        (B = (B + Math.imul(it, Lt)) | 0);
      var ad = (((M + k) | 0) + ((m & 8191) << 13)) | 0;
      (M = (((B + (m >>> 13)) | 0) + (ad >>> 26)) | 0),
        (ad &= 67108863),
        (k = Math.imul(dt, It)),
        (m = Math.imul(dt, kt)),
        (m = (m + Math.imul(ht, It)) | 0),
        (B = Math.imul(ht, kt)),
        (k = (k + Math.imul(ft, Tt)) | 0),
        (m = (m + Math.imul(ft, Pt)) | 0),
        (m = (m + Math.imul(lt, Tt)) | 0),
        (B = (B + Math.imul(lt, Pt)) | 0),
        (k = (k + Math.imul(ut, Bt)) | 0),
        (m = (m + Math.imul(ut, Mt)) | 0),
        (m = (m + Math.imul(pt, Bt)) | 0),
        (B = (B + Math.imul(pt, Mt)) | 0),
        (k = (k + Math.imul(at, zt)) | 0),
        (m = (m + Math.imul(at, Lt)) | 0),
        (m = (m + Math.imul(ct, zt)) | 0),
        (B = (B + Math.imul(ct, Lt)) | 0);
      var cd = (((M + k) | 0) + ((m & 8191) << 13)) | 0;
      (M = (((B + (m >>> 13)) | 0) + (cd >>> 26)) | 0),
        (cd &= 67108863),
        (k = Math.imul(dt, Tt)),
        (m = Math.imul(dt, Pt)),
        (m = (m + Math.imul(ht, Tt)) | 0),
        (B = Math.imul(ht, Pt)),
        (k = (k + Math.imul(ft, Bt)) | 0),
        (m = (m + Math.imul(ft, Mt)) | 0),
        (m = (m + Math.imul(lt, Bt)) | 0),
        (B = (B + Math.imul(lt, Mt)) | 0),
        (k = (k + Math.imul(ut, zt)) | 0),
        (m = (m + Math.imul(ut, Lt)) | 0),
        (m = (m + Math.imul(pt, zt)) | 0),
        (B = (B + Math.imul(pt, Lt)) | 0);
      var ud = (((M + k) | 0) + ((m & 8191) << 13)) | 0;
      (M = (((B + (m >>> 13)) | 0) + (ud >>> 26)) | 0),
        (ud &= 67108863),
        (k = Math.imul(dt, Bt)),
        (m = Math.imul(dt, Mt)),
        (m = (m + Math.imul(ht, Bt)) | 0),
        (B = Math.imul(ht, Mt)),
        (k = (k + Math.imul(ft, zt)) | 0),
        (m = (m + Math.imul(ft, Lt)) | 0),
        (m = (m + Math.imul(lt, zt)) | 0),
        (B = (B + Math.imul(lt, Lt)) | 0);
      var pd = (((M + k) | 0) + ((m & 8191) << 13)) | 0;
      (M = (((B + (m >>> 13)) | 0) + (pd >>> 26)) | 0),
        (pd &= 67108863),
        (k = Math.imul(dt, zt)),
        (m = Math.imul(dt, Lt)),
        (m = (m + Math.imul(ht, zt)) | 0),
        (B = Math.imul(ht, Lt));
      var fd = (((M + k) | 0) + ((m & 8191) << 13)) | 0;
      return (
        (M = (((B + (m >>> 13)) | 0) + (fd >>> 26)) | 0),
        (fd &= 67108863),
        (I[0] = Zn),
        (I[1] = Jn),
        (I[2] = Xn),
        (I[3] = Qn),
        (I[4] = eo),
        (I[5] = Xl),
        (I[6] = Ql),
        (I[7] = ed),
        (I[8] = td),
        (I[9] = rd),
        (I[10] = nd),
        (I[11] = od),
        (I[12] = sd),
        (I[13] = id),
        (I[14] = ad),
        (I[15] = cd),
        (I[16] = ud),
        (I[17] = pd),
        (I[18] = fd),
        M !== 0 && ((I[19] = M), h.length++),
        h
      );
    };
    Math.imul || (G = j);
    function H(y, p, d) {
      (d.negative = p.negative ^ y.negative), (d.length = y.length + p.length);
      for (var h = 0, g = 0, b = 0; b < d.length - 1; b++) {
        var I = g;
        g = 0;
        for (
          var M = h & 67108863, k = Math.min(b, p.length - 1), m = Math.max(0, b - y.length + 1);
          m <= k;
          m++
        ) {
          var B = b - m,
            ce = y.words[B] | 0,
            E = p.words[m] | 0,
            F = ce * E,
            W = F & 67108863;
          (I = (I + ((F / 67108864) | 0)) | 0),
            (W = (W + M) | 0),
            (M = W & 67108863),
            (I = (I + (W >>> 26)) | 0),
            (g += I >>> 26),
            (I &= 67108863);
        }
        (d.words[b] = M), (h = I), (I = g);
      }
      return h !== 0 ? (d.words[b] = h) : d.length--, d._strip();
    }
    function ae(y, p, d) {
      return H(y, p, d);
    }
    o.prototype.mulTo = function (p, d) {
      var h,
        g = this.length + p.length;
      return (
        this.length === 10 && p.length === 10
          ? (h = G(this, p, d))
          : g < 63
            ? (h = j(this, p, d))
            : g < 1024
              ? (h = H(this, p, d))
              : (h = ae(this, p, d)),
        h
      );
    };
    function ee(y, p) {
      (this.x = y), (this.y = p);
    }
    (ee.prototype.makeRBT = function (p) {
      for (var d = new Array(p), h = o.prototype._countBits(p) - 1, g = 0; g < p; g++)
        d[g] = this.revBin(g, h, p);
      return d;
    }),
      (ee.prototype.revBin = function (p, d, h) {
        if (p === 0 || p === h - 1) return p;
        for (var g = 0, b = 0; b < d; b++) (g |= (p & 1) << (d - b - 1)), (p >>= 1);
        return g;
      }),
      (ee.prototype.permute = function (p, d, h, g, b, I) {
        for (var M = 0; M < I; M++) (g[M] = d[p[M]]), (b[M] = h[p[M]]);
      }),
      (ee.prototype.transform = function (p, d, h, g, b, I) {
        this.permute(I, p, d, h, g, b);
        for (var M = 1; M < b; M <<= 1)
          for (
            var k = M << 1,
              m = Math.cos((2 * Math.PI) / k),
              B = Math.sin((2 * Math.PI) / k),
              ce = 0;
            ce < b;
            ce += k
          )
            for (var E = m, F = B, W = 0; W < M; W++) {
              var Z = h[ce + W],
                se = g[ce + W],
                ge = h[ce + W + M],
                pe = g[ce + W + M],
                fe = E * ge - F * pe;
              (pe = E * pe + F * ge),
                (ge = fe),
                (h[ce + W] = Z + ge),
                (g[ce + W] = se + pe),
                (h[ce + W + M] = Z - ge),
                (g[ce + W + M] = se - pe),
                W !== k && ((fe = m * E - B * F), (F = m * F + B * E), (E = fe));
            }
      }),
      (ee.prototype.guessLen13b = function (p, d) {
        var h = Math.max(d, p) | 1,
          g = h & 1,
          b = 0;
        for (h = (h / 2) | 0; h; h = h >>> 1) b++;
        return 1 << (b + 1 + g);
      }),
      (ee.prototype.conjugate = function (p, d, h) {
        if (!(h <= 1))
          for (var g = 0; g < h / 2; g++) {
            var b = p[g];
            (p[g] = p[h - g - 1]),
              (p[h - g - 1] = b),
              (b = d[g]),
              (d[g] = -d[h - g - 1]),
              (d[h - g - 1] = -b);
          }
      }),
      (ee.prototype.normalize13b = function (p, d) {
        for (var h = 0, g = 0; g < d / 2; g++) {
          var b = Math.round(p[2 * g + 1] / d) * 8192 + Math.round(p[2 * g] / d) + h;
          (p[g] = b & 67108863), b < 67108864 ? (h = 0) : (h = (b / 67108864) | 0);
        }
        return p;
      }),
      (ee.prototype.convert13b = function (p, d, h, g) {
        for (var b = 0, I = 0; I < d; I++)
          (b = b + (p[I] | 0)),
            (h[2 * I] = b & 8191),
            (b = b >>> 13),
            (h[2 * I + 1] = b & 8191),
            (b = b >>> 13);
        for (I = 2 * d; I < g; ++I) h[I] = 0;
        t(b === 0), t((b & -8192) === 0);
      }),
      (ee.prototype.stub = function (p) {
        for (var d = new Array(p), h = 0; h < p; h++) d[h] = 0;
        return d;
      }),
      (ee.prototype.mulp = function (p, d, h) {
        var g = 2 * this.guessLen13b(p.length, d.length),
          b = this.makeRBT(g),
          I = this.stub(g),
          M = new Array(g),
          k = new Array(g),
          m = new Array(g),
          B = new Array(g),
          ce = new Array(g),
          E = new Array(g),
          F = h.words;
        (F.length = g),
          this.convert13b(p.words, p.length, M, g),
          this.convert13b(d.words, d.length, B, g),
          this.transform(M, I, k, m, g, b),
          this.transform(B, I, ce, E, g, b);
        for (var W = 0; W < g; W++) {
          var Z = k[W] * ce[W] - m[W] * E[W];
          (m[W] = k[W] * E[W] + m[W] * ce[W]), (k[W] = Z);
        }
        return (
          this.conjugate(k, m, g),
          this.transform(k, m, F, I, g, b),
          this.conjugate(F, I, g),
          this.normalize13b(F, g),
          (h.negative = p.negative ^ d.negative),
          (h.length = p.length + d.length),
          h._strip()
        );
      }),
      (o.prototype.mul = function (p) {
        var d = new o(null);
        return (d.words = new Array(this.length + p.length)), this.mulTo(p, d);
      }),
      (o.prototype.mulf = function (p) {
        var d = new o(null);
        return (d.words = new Array(this.length + p.length)), ae(this, p, d);
      }),
      (o.prototype.imul = function (p) {
        return this.clone().mulTo(p, this);
      }),
      (o.prototype.imuln = function (p) {
        var d = p < 0;
        d && (p = -p), t(typeof p == 'number'), t(p < 67108864);
        for (var h = 0, g = 0; g < this.length; g++) {
          var b = (this.words[g] | 0) * p,
            I = (b & 67108863) + (h & 67108863);
          (h >>= 26), (h += (b / 67108864) | 0), (h += I >>> 26), (this.words[g] = I & 67108863);
        }
        return h !== 0 && ((this.words[g] = h), this.length++), d ? this.ineg() : this;
      }),
      (o.prototype.muln = function (p) {
        return this.clone().imuln(p);
      }),
      (o.prototype.sqr = function () {
        return this.mul(this);
      }),
      (o.prototype.isqr = function () {
        return this.imul(this.clone());
      }),
      (o.prototype.pow = function (p) {
        var d = D(p);
        if (d.length === 0) return new o(1);
        for (var h = this, g = 0; g < d.length && d[g] === 0; g++, h = h.sqr());
        if (++g < d.length)
          for (var b = h.sqr(); g < d.length; g++, b = b.sqr()) d[g] !== 0 && (h = h.mul(b));
        return h;
      }),
      (o.prototype.iushln = function (p) {
        t(typeof p == 'number' && p >= 0);
        var d = p % 26,
          h = (p - d) / 26,
          g = (67108863 >>> (26 - d)) << (26 - d),
          b;
        if (d !== 0) {
          var I = 0;
          for (b = 0; b < this.length; b++) {
            var M = this.words[b] & g,
              k = ((this.words[b] | 0) - M) << d;
            (this.words[b] = k | I), (I = M >>> (26 - d));
          }
          I && ((this.words[b] = I), this.length++);
        }
        if (h !== 0) {
          for (b = this.length - 1; b >= 0; b--) this.words[b + h] = this.words[b];
          for (b = 0; b < h; b++) this.words[b] = 0;
          this.length += h;
        }
        return this._strip();
      }),
      (o.prototype.ishln = function (p) {
        return t(this.negative === 0), this.iushln(p);
      }),
      (o.prototype.iushrn = function (p, d, h) {
        t(typeof p == 'number' && p >= 0);
        var g;
        d ? (g = (d - (d % 26)) / 26) : (g = 0);
        var b = p % 26,
          I = Math.min((p - b) / 26, this.length),
          M = 67108863 ^ ((67108863 >>> b) << b),
          k = h;
        if (((g -= I), (g = Math.max(0, g)), k)) {
          for (var m = 0; m < I; m++) k.words[m] = this.words[m];
          k.length = I;
        }
        if (I !== 0)
          if (this.length > I)
            for (this.length -= I, m = 0; m < this.length; m++) this.words[m] = this.words[m + I];
          else (this.words[0] = 0), (this.length = 1);
        var B = 0;
        for (m = this.length - 1; m >= 0 && (B !== 0 || m >= g); m--) {
          var ce = this.words[m] | 0;
          (this.words[m] = (B << (26 - b)) | (ce >>> b)), (B = ce & M);
        }
        return (
          k && B !== 0 && (k.words[k.length++] = B),
          this.length === 0 && ((this.words[0] = 0), (this.length = 1)),
          this._strip()
        );
      }),
      (o.prototype.ishrn = function (p, d, h) {
        return t(this.negative === 0), this.iushrn(p, d, h);
      }),
      (o.prototype.shln = function (p) {
        return this.clone().ishln(p);
      }),
      (o.prototype.ushln = function (p) {
        return this.clone().iushln(p);
      }),
      (o.prototype.shrn = function (p) {
        return this.clone().ishrn(p);
      }),
      (o.prototype.ushrn = function (p) {
        return this.clone().iushrn(p);
      }),
      (o.prototype.testn = function (p) {
        t(typeof p == 'number' && p >= 0);
        var d = p % 26,
          h = (p - d) / 26,
          g = 1 << d;
        if (this.length <= h) return !1;
        var b = this.words[h];
        return !!(b & g);
      }),
      (o.prototype.imaskn = function (p) {
        t(typeof p == 'number' && p >= 0);
        var d = p % 26,
          h = (p - d) / 26;
        if ((t(this.negative === 0, 'imaskn works only with positive numbers'), this.length <= h))
          return this;
        if ((d !== 0 && h++, (this.length = Math.min(h, this.length)), d !== 0)) {
          var g = 67108863 ^ ((67108863 >>> d) << d);
          this.words[this.length - 1] &= g;
        }
        return this._strip();
      }),
      (o.prototype.maskn = function (p) {
        return this.clone().imaskn(p);
      }),
      (o.prototype.iaddn = function (p) {
        return (
          t(typeof p == 'number'),
          t(p < 67108864),
          p < 0
            ? this.isubn(-p)
            : this.negative !== 0
              ? this.length === 1 && (this.words[0] | 0) <= p
                ? ((this.words[0] = p - (this.words[0] | 0)), (this.negative = 0), this)
                : ((this.negative = 0), this.isubn(p), (this.negative = 1), this)
              : this._iaddn(p)
        );
      }),
      (o.prototype._iaddn = function (p) {
        this.words[0] += p;
        for (var d = 0; d < this.length && this.words[d] >= 67108864; d++)
          (this.words[d] -= 67108864),
            d === this.length - 1 ? (this.words[d + 1] = 1) : this.words[d + 1]++;
        return (this.length = Math.max(this.length, d + 1)), this;
      }),
      (o.prototype.isubn = function (p) {
        if ((t(typeof p == 'number'), t(p < 67108864), p < 0)) return this.iaddn(-p);
        if (this.negative !== 0)
          return (this.negative = 0), this.iaddn(p), (this.negative = 1), this;
        if (((this.words[0] -= p), this.length === 1 && this.words[0] < 0))
          (this.words[0] = -this.words[0]), (this.negative = 1);
        else
          for (var d = 0; d < this.length && this.words[d] < 0; d++)
            (this.words[d] += 67108864), (this.words[d + 1] -= 1);
        return this._strip();
      }),
      (o.prototype.addn = function (p) {
        return this.clone().iaddn(p);
      }),
      (o.prototype.subn = function (p) {
        return this.clone().isubn(p);
      }),
      (o.prototype.iabs = function () {
        return (this.negative = 0), this;
      }),
      (o.prototype.abs = function () {
        return this.clone().iabs();
      }),
      (o.prototype._ishlnsubmul = function (p, d, h) {
        var g = p.length + h,
          b;
        this._expand(g);
        var I,
          M = 0;
        for (b = 0; b < p.length; b++) {
          I = (this.words[b + h] | 0) + M;
          var k = (p.words[b] | 0) * d;
          (I -= k & 67108863),
            (M = (I >> 26) - ((k / 67108864) | 0)),
            (this.words[b + h] = I & 67108863);
        }
        for (; b < this.length - h; b++)
          (I = (this.words[b + h] | 0) + M), (M = I >> 26), (this.words[b + h] = I & 67108863);
        if (M === 0) return this._strip();
        for (t(M === -1), M = 0, b = 0; b < this.length; b++)
          (I = -(this.words[b] | 0) + M), (M = I >> 26), (this.words[b] = I & 67108863);
        return (this.negative = 1), this._strip();
      }),
      (o.prototype._wordDiv = function (p, d) {
        var h = this.length - p.length,
          g = this.clone(),
          b = p,
          I = b.words[b.length - 1] | 0,
          M = this._countBits(I);
        (h = 26 - M), h !== 0 && ((b = b.ushln(h)), g.iushln(h), (I = b.words[b.length - 1] | 0));
        var k = g.length - b.length,
          m;
        if (d !== 'mod') {
          (m = new o(null)), (m.length = k + 1), (m.words = new Array(m.length));
          for (var B = 0; B < m.length; B++) m.words[B] = 0;
        }
        var ce = g.clone()._ishlnsubmul(b, 1, k);
        ce.negative === 0 && ((g = ce), m && (m.words[k] = 1));
        for (var E = k - 1; E >= 0; E--) {
          var F = (g.words[b.length + E] | 0) * 67108864 + (g.words[b.length + E - 1] | 0);
          for (F = Math.min((F / I) | 0, 67108863), g._ishlnsubmul(b, F, E); g.negative !== 0; )
            F--, (g.negative = 0), g._ishlnsubmul(b, 1, E), g.isZero() || (g.negative ^= 1);
          m && (m.words[E] = F);
        }
        return (
          m && m._strip(),
          g._strip(),
          d !== 'div' && h !== 0 && g.iushrn(h),
          { div: m || null, mod: g }
        );
      }),
      (o.prototype.divmod = function (p, d, h) {
        if ((t(!p.isZero()), this.isZero())) return { div: new o(0), mod: new o(0) };
        var g, b, I;
        return this.negative !== 0 && p.negative === 0
          ? ((I = this.neg().divmod(p, d)),
            d !== 'mod' && (g = I.div.neg()),
            d !== 'div' && ((b = I.mod.neg()), h && b.negative !== 0 && b.iadd(p)),
            { div: g, mod: b })
          : this.negative === 0 && p.negative !== 0
            ? ((I = this.divmod(p.neg(), d)),
              d !== 'mod' && (g = I.div.neg()),
              { div: g, mod: I.mod })
            : this.negative & p.negative
              ? ((I = this.neg().divmod(p.neg(), d)),
                d !== 'div' && ((b = I.mod.neg()), h && b.negative !== 0 && b.isub(p)),
                { div: I.div, mod: b })
              : p.length > this.length || this.cmp(p) < 0
                ? { div: new o(0), mod: this }
                : p.length === 1
                  ? d === 'div'
                    ? { div: this.divn(p.words[0]), mod: null }
                    : d === 'mod'
                      ? { div: null, mod: new o(this.modrn(p.words[0])) }
                      : { div: this.divn(p.words[0]), mod: new o(this.modrn(p.words[0])) }
                  : this._wordDiv(p, d);
      }),
      (o.prototype.div = function (p) {
        return this.divmod(p, 'div', !1).div;
      }),
      (o.prototype.mod = function (p) {
        return this.divmod(p, 'mod', !1).mod;
      }),
      (o.prototype.umod = function (p) {
        return this.divmod(p, 'mod', !0).mod;
      }),
      (o.prototype.divRound = function (p) {
        var d = this.divmod(p);
        if (d.mod.isZero()) return d.div;
        var h = d.div.negative !== 0 ? d.mod.isub(p) : d.mod,
          g = p.ushrn(1),
          b = p.andln(1),
          I = h.cmp(g);
        return I < 0 || (b === 1 && I === 0)
          ? d.div
          : d.div.negative !== 0
            ? d.div.isubn(1)
            : d.div.iaddn(1);
      }),
      (o.prototype.modrn = function (p) {
        var d = p < 0;
        d && (p = -p), t(p <= 67108863);
        for (var h = (1 << 26) % p, g = 0, b = this.length - 1; b >= 0; b--)
          g = (h * g + (this.words[b] | 0)) % p;
        return d ? -g : g;
      }),
      (o.prototype.modn = function (p) {
        return this.modrn(p);
      }),
      (o.prototype.idivn = function (p) {
        var d = p < 0;
        d && (p = -p), t(p <= 67108863);
        for (var h = 0, g = this.length - 1; g >= 0; g--) {
          var b = (this.words[g] | 0) + h * 67108864;
          (this.words[g] = (b / p) | 0), (h = b % p);
        }
        return this._strip(), d ? this.ineg() : this;
      }),
      (o.prototype.divn = function (p) {
        return this.clone().idivn(p);
      }),
      (o.prototype.egcd = function (p) {
        t(p.negative === 0), t(!p.isZero());
        var d = this,
          h = p.clone();
        d.negative !== 0 ? (d = d.umod(p)) : (d = d.clone());
        for (
          var g = new o(1), b = new o(0), I = new o(0), M = new o(1), k = 0;
          d.isEven() && h.isEven();

        )
          d.iushrn(1), h.iushrn(1), ++k;
        for (var m = h.clone(), B = d.clone(); !d.isZero(); ) {
          for (var ce = 0, E = 1; !(d.words[0] & E) && ce < 26; ++ce, E <<= 1);
          if (ce > 0)
            for (d.iushrn(ce); ce-- > 0; )
              (g.isOdd() || b.isOdd()) && (g.iadd(m), b.isub(B)), g.iushrn(1), b.iushrn(1);
          for (var F = 0, W = 1; !(h.words[0] & W) && F < 26; ++F, W <<= 1);
          if (F > 0)
            for (h.iushrn(F); F-- > 0; )
              (I.isOdd() || M.isOdd()) && (I.iadd(m), M.isub(B)), I.iushrn(1), M.iushrn(1);
          d.cmp(h) >= 0 ? (d.isub(h), g.isub(I), b.isub(M)) : (h.isub(d), I.isub(g), M.isub(b));
        }
        return { a: I, b: M, gcd: h.iushln(k) };
      }),
      (o.prototype._invmp = function (p) {
        t(p.negative === 0), t(!p.isZero());
        var d = this,
          h = p.clone();
        d.negative !== 0 ? (d = d.umod(p)) : (d = d.clone());
        for (var g = new o(1), b = new o(0), I = h.clone(); d.cmpn(1) > 0 && h.cmpn(1) > 0; ) {
          for (var M = 0, k = 1; !(d.words[0] & k) && M < 26; ++M, k <<= 1);
          if (M > 0) for (d.iushrn(M); M-- > 0; ) g.isOdd() && g.iadd(I), g.iushrn(1);
          for (var m = 0, B = 1; !(h.words[0] & B) && m < 26; ++m, B <<= 1);
          if (m > 0) for (h.iushrn(m); m-- > 0; ) b.isOdd() && b.iadd(I), b.iushrn(1);
          d.cmp(h) >= 0 ? (d.isub(h), g.isub(b)) : (h.isub(d), b.isub(g));
        }
        var ce;
        return d.cmpn(1) === 0 ? (ce = g) : (ce = b), ce.cmpn(0) < 0 && ce.iadd(p), ce;
      }),
      (o.prototype.gcd = function (p) {
        if (this.isZero()) return p.abs();
        if (p.isZero()) return this.abs();
        var d = this.clone(),
          h = p.clone();
        (d.negative = 0), (h.negative = 0);
        for (var g = 0; d.isEven() && h.isEven(); g++) d.iushrn(1), h.iushrn(1);
        do {
          for (; d.isEven(); ) d.iushrn(1);
          for (; h.isEven(); ) h.iushrn(1);
          var b = d.cmp(h);
          if (b < 0) {
            var I = d;
            (d = h), (h = I);
          } else if (b === 0 || h.cmpn(1) === 0) break;
          d.isub(h);
        } while (!0);
        return h.iushln(g);
      }),
      (o.prototype.invm = function (p) {
        return this.egcd(p).a.umod(p);
      }),
      (o.prototype.isEven = function () {
        return (this.words[0] & 1) === 0;
      }),
      (o.prototype.isOdd = function () {
        return (this.words[0] & 1) === 1;
      }),
      (o.prototype.andln = function (p) {
        return this.words[0] & p;
      }),
      (o.prototype.bincn = function (p) {
        t(typeof p == 'number');
        var d = p % 26,
          h = (p - d) / 26,
          g = 1 << d;
        if (this.length <= h) return this._expand(h + 1), (this.words[h] |= g), this;
        for (var b = g, I = h; b !== 0 && I < this.length; I++) {
          var M = this.words[I] | 0;
          (M += b), (b = M >>> 26), (M &= 67108863), (this.words[I] = M);
        }
        return b !== 0 && ((this.words[I] = b), this.length++), this;
      }),
      (o.prototype.isZero = function () {
        return this.length === 1 && this.words[0] === 0;
      }),
      (o.prototype.cmpn = function (p) {
        var d = p < 0;
        if (this.negative !== 0 && !d) return -1;
        if (this.negative === 0 && d) return 1;
        this._strip();
        var h;
        if (this.length > 1) h = 1;
        else {
          d && (p = -p), t(p <= 67108863, 'Number is too big');
          var g = this.words[0] | 0;
          h = g === p ? 0 : g < p ? -1 : 1;
        }
        return this.negative !== 0 ? -h | 0 : h;
      }),
      (o.prototype.cmp = function (p) {
        if (this.negative !== 0 && p.negative === 0) return -1;
        if (this.negative === 0 && p.negative !== 0) return 1;
        var d = this.ucmp(p);
        return this.negative !== 0 ? -d | 0 : d;
      }),
      (o.prototype.ucmp = function (p) {
        if (this.length > p.length) return 1;
        if (this.length < p.length) return -1;
        for (var d = 0, h = this.length - 1; h >= 0; h--) {
          var g = this.words[h] | 0,
            b = p.words[h] | 0;
          if (g !== b) {
            g < b ? (d = -1) : g > b && (d = 1);
            break;
          }
        }
        return d;
      }),
      (o.prototype.gtn = function (p) {
        return this.cmpn(p) === 1;
      }),
      (o.prototype.gt = function (p) {
        return this.cmp(p) === 1;
      }),
      (o.prototype.gten = function (p) {
        return this.cmpn(p) >= 0;
      }),
      (o.prototype.gte = function (p) {
        return this.cmp(p) >= 0;
      }),
      (o.prototype.ltn = function (p) {
        return this.cmpn(p) === -1;
      }),
      (o.prototype.lt = function (p) {
        return this.cmp(p) === -1;
      }),
      (o.prototype.lten = function (p) {
        return this.cmpn(p) <= 0;
      }),
      (o.prototype.lte = function (p) {
        return this.cmp(p) <= 0;
      }),
      (o.prototype.eqn = function (p) {
        return this.cmpn(p) === 0;
      }),
      (o.prototype.eq = function (p) {
        return this.cmp(p) === 0;
      }),
      (o.red = function (p) {
        return new U(p);
      }),
      (o.prototype.toRed = function (p) {
        return (
          t(!this.red, 'Already a number in reduction context'),
          t(this.negative === 0, 'red works only with positives'),
          p.convertTo(this)._forceRed(p)
        );
      }),
      (o.prototype.fromRed = function () {
        return (
          t(this.red, 'fromRed works only with numbers in reduction context'),
          this.red.convertFrom(this)
        );
      }),
      (o.prototype._forceRed = function (p) {
        return (this.red = p), this;
      }),
      (o.prototype.forceRed = function (p) {
        return t(!this.red, 'Already a number in reduction context'), this._forceRed(p);
      }),
      (o.prototype.redAdd = function (p) {
        return t(this.red, 'redAdd works only with red numbers'), this.red.add(this, p);
      }),
      (o.prototype.redIAdd = function (p) {
        return t(this.red, 'redIAdd works only with red numbers'), this.red.iadd(this, p);
      }),
      (o.prototype.redSub = function (p) {
        return t(this.red, 'redSub works only with red numbers'), this.red.sub(this, p);
      }),
      (o.prototype.redISub = function (p) {
        return t(this.red, 'redISub works only with red numbers'), this.red.isub(this, p);
      }),
      (o.prototype.redShl = function (p) {
        return t(this.red, 'redShl works only with red numbers'), this.red.shl(this, p);
      }),
      (o.prototype.redMul = function (p) {
        return (
          t(this.red, 'redMul works only with red numbers'),
          this.red._verify2(this, p),
          this.red.mul(this, p)
        );
      }),
      (o.prototype.redIMul = function (p) {
        return (
          t(this.red, 'redMul works only with red numbers'),
          this.red._verify2(this, p),
          this.red.imul(this, p)
        );
      }),
      (o.prototype.redSqr = function () {
        return (
          t(this.red, 'redSqr works only with red numbers'),
          this.red._verify1(this),
          this.red.sqr(this)
        );
      }),
      (o.prototype.redISqr = function () {
        return (
          t(this.red, 'redISqr works only with red numbers'),
          this.red._verify1(this),
          this.red.isqr(this)
        );
      }),
      (o.prototype.redSqrt = function () {
        return (
          t(this.red, 'redSqrt works only with red numbers'),
          this.red._verify1(this),
          this.red.sqrt(this)
        );
      }),
      (o.prototype.redInvm = function () {
        return (
          t(this.red, 'redInvm works only with red numbers'),
          this.red._verify1(this),
          this.red.invm(this)
        );
      }),
      (o.prototype.redNeg = function () {
        return (
          t(this.red, 'redNeg works only with red numbers'),
          this.red._verify1(this),
          this.red.neg(this)
        );
      }),
      (o.prototype.redPow = function (p) {
        return (
          t(this.red && !p.red, 'redPow(normalNum)'), this.red._verify1(this), this.red.pow(this, p)
        );
      });
    var re = { k256: null, p224: null, p192: null, p25519: null };
    function Y(y, p) {
      (this.name = y),
        (this.p = new o(p, 16)),
        (this.n = this.p.bitLength()),
        (this.k = new o(1).iushln(this.n).isub(this.p)),
        (this.tmp = this._tmp());
    }
    (Y.prototype._tmp = function () {
      var p = new o(null);
      return (p.words = new Array(Math.ceil(this.n / 13))), p;
    }),
      (Y.prototype.ireduce = function (p) {
        var d = p,
          h;
        do
          this.split(d, this.tmp), (d = this.imulK(d)), (d = d.iadd(this.tmp)), (h = d.bitLength());
        while (h > this.n);
        var g = h < this.n ? -1 : d.ucmp(this.p);
        return (
          g === 0
            ? ((d.words[0] = 0), (d.length = 1))
            : g > 0
              ? d.isub(this.p)
              : d.strip !== void 0
                ? d.strip()
                : d._strip(),
          d
        );
      }),
      (Y.prototype.split = function (p, d) {
        p.iushrn(this.n, 0, d);
      }),
      (Y.prototype.imulK = function (p) {
        return p.imul(this.k);
      });
    function he() {
      Y.call(
        this,
        'k256',
        'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f'
      );
    }
    n(he, Y),
      (he.prototype.split = function (p, d) {
        for (var h = 4194303, g = Math.min(p.length, 9), b = 0; b < g; b++) d.words[b] = p.words[b];
        if (((d.length = g), p.length <= 9)) {
          (p.words[0] = 0), (p.length = 1);
          return;
        }
        var I = p.words[9];
        for (d.words[d.length++] = I & h, b = 10; b < p.length; b++) {
          var M = p.words[b] | 0;
          (p.words[b - 10] = ((M & h) << 4) | (I >>> 22)), (I = M);
        }
        (I >>>= 22),
          (p.words[b - 10] = I),
          I === 0 && p.length > 10 ? (p.length -= 10) : (p.length -= 9);
      }),
      (he.prototype.imulK = function (p) {
        (p.words[p.length] = 0), (p.words[p.length + 1] = 0), (p.length += 2);
        for (var d = 0, h = 0; h < p.length; h++) {
          var g = p.words[h] | 0;
          (d += g * 977), (p.words[h] = d & 67108863), (d = g * 64 + ((d / 67108864) | 0));
        }
        return (
          p.words[p.length - 1] === 0 && (p.length--, p.words[p.length - 1] === 0 && p.length--), p
        );
      });
    function R() {
      Y.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
    }
    n(R, Y);
    function P() {
      Y.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
    }
    n(P, Y);
    function C() {
      Y.call(this, '25519', '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
    }
    n(C, Y),
      (C.prototype.imulK = function (p) {
        for (var d = 0, h = 0; h < p.length; h++) {
          var g = (p.words[h] | 0) * 19 + d,
            b = g & 67108863;
          (g >>>= 26), (p.words[h] = b), (d = g);
        }
        return d !== 0 && (p.words[p.length++] = d), p;
      }),
      (o._prime = function (p) {
        if (re[p]) return re[p];
        var d;
        if (p === 'k256') d = new he();
        else if (p === 'p224') d = new R();
        else if (p === 'p192') d = new P();
        else if (p === 'p25519') d = new C();
        else throw new Error('Unknown prime ' + p);
        return (re[p] = d), d;
      });
    function U(y) {
      if (typeof y == 'string') {
        var p = o._prime(y);
        (this.m = p.p), (this.prime = p);
      } else t(y.gtn(1), 'modulus must be greater than 1'), (this.m = y), (this.prime = null);
    }
    (U.prototype._verify1 = function (p) {
      t(p.negative === 0, 'red works only with positives'),
        t(p.red, 'red works only with red numbers');
    }),
      (U.prototype._verify2 = function (p, d) {
        t((p.negative | d.negative) === 0, 'red works only with positives'),
          t(p.red && p.red === d.red, 'red works only with red numbers');
      }),
      (U.prototype.imod = function (p) {
        return this.prime
          ? this.prime.ireduce(p)._forceRed(this)
          : (l(p, p.umod(this.m)._forceRed(this)), p);
      }),
      (U.prototype.neg = function (p) {
        return p.isZero() ? p.clone() : this.m.sub(p)._forceRed(this);
      }),
      (U.prototype.add = function (p, d) {
        this._verify2(p, d);
        var h = p.add(d);
        return h.cmp(this.m) >= 0 && h.isub(this.m), h._forceRed(this);
      }),
      (U.prototype.iadd = function (p, d) {
        this._verify2(p, d);
        var h = p.iadd(d);
        return h.cmp(this.m) >= 0 && h.isub(this.m), h;
      }),
      (U.prototype.sub = function (p, d) {
        this._verify2(p, d);
        var h = p.sub(d);
        return h.cmpn(0) < 0 && h.iadd(this.m), h._forceRed(this);
      }),
      (U.prototype.isub = function (p, d) {
        this._verify2(p, d);
        var h = p.isub(d);
        return h.cmpn(0) < 0 && h.iadd(this.m), h;
      }),
      (U.prototype.shl = function (p, d) {
        return this._verify1(p), this.imod(p.ushln(d));
      }),
      (U.prototype.imul = function (p, d) {
        return this._verify2(p, d), this.imod(p.imul(d));
      }),
      (U.prototype.mul = function (p, d) {
        return this._verify2(p, d), this.imod(p.mul(d));
      }),
      (U.prototype.isqr = function (p) {
        return this.imul(p, p.clone());
      }),
      (U.prototype.sqr = function (p) {
        return this.mul(p, p);
      }),
      (U.prototype.sqrt = function (p) {
        if (p.isZero()) return p.clone();
        var d = this.m.andln(3);
        if ((t(d % 2 === 1), d === 3)) {
          var h = this.m.add(new o(1)).iushrn(2);
          return this.pow(p, h);
        }
        for (var g = this.m.subn(1), b = 0; !g.isZero() && g.andln(1) === 0; ) b++, g.iushrn(1);
        t(!g.isZero());
        var I = new o(1).toRed(this),
          M = I.redNeg(),
          k = this.m.subn(1).iushrn(1),
          m = this.m.bitLength();
        for (m = new o(2 * m * m).toRed(this); this.pow(m, k).cmp(M) !== 0; ) m.redIAdd(M);
        for (
          var B = this.pow(m, g), ce = this.pow(p, g.addn(1).iushrn(1)), E = this.pow(p, g), F = b;
          E.cmp(I) !== 0;

        ) {
          for (var W = E, Z = 0; W.cmp(I) !== 0; Z++) W = W.redSqr();
          t(Z < F);
          var se = this.pow(B, new o(1).iushln(F - Z - 1));
          (ce = ce.redMul(se)), (B = se.redSqr()), (E = E.redMul(B)), (F = Z);
        }
        return ce;
      }),
      (U.prototype.invm = function (p) {
        var d = p._invmp(this.m);
        return d.negative !== 0 ? ((d.negative = 0), this.imod(d).redNeg()) : this.imod(d);
      }),
      (U.prototype.pow = function (p, d) {
        if (d.isZero()) return new o(1).toRed(this);
        if (d.cmpn(1) === 0) return p.clone();
        var h = 4,
          g = new Array(1 << h);
        (g[0] = new o(1).toRed(this)), (g[1] = p);
        for (var b = 2; b < g.length; b++) g[b] = this.mul(g[b - 1], p);
        var I = g[0],
          M = 0,
          k = 0,
          m = d.bitLength() % 26;
        for (m === 0 && (m = 26), b = d.length - 1; b >= 0; b--) {
          for (var B = d.words[b], ce = m - 1; ce >= 0; ce--) {
            var E = (B >> ce) & 1;
            if ((I !== g[0] && (I = this.sqr(I)), E === 0 && M === 0)) {
              k = 0;
              continue;
            }
            (M <<= 1),
              (M |= E),
              k++,
              !(k !== h && (b !== 0 || ce !== 0)) && ((I = this.mul(I, g[M])), (k = 0), (M = 0));
          }
          m = 26;
        }
        return I;
      }),
      (U.prototype.convertTo = function (p) {
        var d = p.umod(this.m);
        return d === p ? d.clone() : d;
      }),
      (U.prototype.convertFrom = function (p) {
        var d = p.clone();
        return (d.red = null), d;
      }),
      (o.mont = function (p) {
        return new T(p);
      });
    function T(y) {
      U.call(this, y),
        (this.shift = this.m.bitLength()),
        this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
        (this.r = new o(1).iushln(this.shift)),
        (this.r2 = this.imod(this.r.sqr())),
        (this.rinv = this.r._invmp(this.m)),
        (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
        (this.minv = this.minv.umod(this.r)),
        (this.minv = this.r.sub(this.minv));
    }
    n(T, U),
      (T.prototype.convertTo = function (p) {
        return this.imod(p.ushln(this.shift));
      }),
      (T.prototype.convertFrom = function (p) {
        var d = this.imod(p.mul(this.rinv));
        return (d.red = null), d;
      }),
      (T.prototype.imul = function (p, d) {
        if (p.isZero() || d.isZero()) return (p.words[0] = 0), (p.length = 1), p;
        var h = p.imul(d),
          g = h.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          b = h.isub(g).iushrn(this.shift),
          I = b;
        return (
          b.cmp(this.m) >= 0 ? (I = b.isub(this.m)) : b.cmpn(0) < 0 && (I = b.iadd(this.m)),
          I._forceRed(this)
        );
      }),
      (T.prototype.mul = function (p, d) {
        if (p.isZero() || d.isZero()) return new o(0)._forceRed(this);
        var h = p.mul(d),
          g = h.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          b = h.isub(g).iushrn(this.shift),
          I = b;
        return (
          b.cmp(this.m) >= 0 ? (I = b.isub(this.m)) : b.cmpn(0) < 0 && (I = b.iadd(this.m)),
          I._forceRed(this)
        );
      }),
      (T.prototype.invm = function (p) {
        var d = this.imod(p._invmp(this.m).mul(this.r2));
        return d._forceRed(this);
      });
  })(typeof jd > 'u' || jd, nx);
});
var ix = te(($V, Gc) => {
  f();
  (function () {
    'use strict';
    var r = 'input is invalid type',
      e = 'finalize already called',
      t = typeof window == 'object',
      n = t ? window : {};
    n.JS_SHA3_NO_WINDOW && (t = !1);
    var o = !t && typeof self == 'object',
      s = !n.JS_SHA3_NO_NODE_JS && typeof S == 'object' && S.versions && S.versions.node;
    s ? (n = global) : o && (n = self);
    var i = !n.JS_SHA3_NO_COMMON_JS && typeof Gc == 'object' && Gc.exports,
      c = typeof define == 'function' && define.amd,
      u = !n.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < 'u',
      l = '0123456789abcdef'.split(''),
      w = [31, 7936, 2031616, 520093696],
      x = [4, 1024, 262144, 67108864],
      A = [1, 256, 65536, 16777216],
      _ = [6, 1536, 393216, 100663296],
      O = [0, 8, 16, 24],
      D = [
        1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0,
        2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0,
        2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648,
        128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896,
        2147483648, 2147483649, 0, 2147516424, 2147483648,
      ],
      j = [224, 256, 384, 512],
      G = [128, 256],
      H = ['hex', 'buffer', 'arrayBuffer', 'array', 'digest'],
      ae = { 128: 168, 256: 136 };
    (n.JS_SHA3_NO_NODE_JS || !Array.isArray) &&
      (Array.isArray = function (E) {
        return Object.prototype.toString.call(E) === '[object Array]';
      }),
      u &&
        (n.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) &&
        (ArrayBuffer.isView = function (E) {
          return typeof E == 'object' && E.buffer && E.buffer.constructor === ArrayBuffer;
        });
    for (
      var ee = function (E, F, W) {
          return function (Z) {
            return new m(E, F, E).update(Z)[W]();
          };
        },
        re = function (E, F, W) {
          return function (Z, se) {
            return new m(E, F, se).update(Z)[W]();
          };
        },
        Y = function (E, F, W) {
          return function (Z, se, ge, pe) {
            return p['cshake' + E].update(Z, se, ge, pe)[W]();
          };
        },
        he = function (E, F, W) {
          return function (Z, se, ge, pe) {
            return p['kmac' + E].update(Z, se, ge, pe)[W]();
          };
        },
        R = function (E, F, W, Z) {
          for (var se = 0; se < H.length; ++se) {
            var ge = H[se];
            E[ge] = F(W, Z, ge);
          }
          return E;
        },
        P = function (E, F) {
          var W = ee(E, F, 'hex');
          return (
            (W.create = function () {
              return new m(E, F, E);
            }),
            (W.update = function (Z) {
              return W.create().update(Z);
            }),
            R(W, ee, E, F)
          );
        },
        C = function (E, F) {
          var W = re(E, F, 'hex');
          return (
            (W.create = function (Z) {
              return new m(E, F, Z);
            }),
            (W.update = function (Z, se) {
              return W.create(se).update(Z);
            }),
            R(W, re, E, F)
          );
        },
        U = function (E, F) {
          var W = ae[E],
            Z = Y(E, F, 'hex');
          return (
            (Z.create = function (se, ge, pe) {
              return !ge && !pe ? p['shake' + E].create(se) : new m(E, F, se).bytepad([ge, pe], W);
            }),
            (Z.update = function (se, ge, pe, fe) {
              return Z.create(ge, pe, fe).update(se);
            }),
            R(Z, Y, E, F)
          );
        },
        T = function (E, F) {
          var W = ae[E],
            Z = he(E, F, 'hex');
          return (
            (Z.create = function (se, ge, pe) {
              return new B(E, F, ge).bytepad(['KMAC', pe], W).bytepad([se], W);
            }),
            (Z.update = function (se, ge, pe, fe) {
              return Z.create(se, pe, fe).update(ge);
            }),
            R(Z, he, E, F)
          );
        },
        y = [
          { name: 'keccak', padding: A, bits: j, createMethod: P },
          { name: 'sha3', padding: _, bits: j, createMethod: P },
          { name: 'shake', padding: w, bits: G, createMethod: C },
          { name: 'cshake', padding: x, bits: G, createMethod: U },
          { name: 'kmac', padding: x, bits: G, createMethod: T },
        ],
        p = {},
        d = [],
        h = 0;
      h < y.length;
      ++h
    )
      for (var g = y[h], b = g.bits, I = 0; I < b.length; ++I) {
        var M = g.name + '_' + b[I];
        if ((d.push(M), (p[M] = g.createMethod(b[I], g.padding)), g.name !== 'sha3')) {
          var k = g.name + b[I];
          d.push(k), (p[k] = p[M]);
        }
      }
    function m(E, F, W) {
      (this.blocks = []),
        (this.s = []),
        (this.padding = F),
        (this.outputBits = W),
        (this.reset = !0),
        (this.finalized = !1),
        (this.block = 0),
        (this.start = 0),
        (this.blockCount = (1600 - (E << 1)) >> 5),
        (this.byteCount = this.blockCount << 2),
        (this.outputBlocks = W >> 5),
        (this.extraBytes = (W & 31) >> 3);
      for (var Z = 0; Z < 50; ++Z) this.s[Z] = 0;
    }
    (m.prototype.update = function (E) {
      if (this.finalized) throw new Error(e);
      var F,
        W = typeof E;
      if (W !== 'string') {
        if (W === 'object') {
          if (E === null) throw new Error(r);
          if (u && E.constructor === ArrayBuffer) E = new Uint8Array(E);
          else if (!Array.isArray(E) && (!u || !ArrayBuffer.isView(E))) throw new Error(r);
        } else throw new Error(r);
        F = !0;
      }
      for (
        var Z = this.blocks,
          se = this.byteCount,
          ge = E.length,
          pe = this.blockCount,
          fe = 0,
          Fe = this.s,
          le,
          we;
        fe < ge;

      ) {
        if (this.reset)
          for (this.reset = !1, Z[0] = this.block, le = 1; le < pe + 1; ++le) Z[le] = 0;
        if (F) for (le = this.start; fe < ge && le < se; ++fe) Z[le >> 2] |= E[fe] << O[le++ & 3];
        else
          for (le = this.start; fe < ge && le < se; ++fe)
            (we = E.charCodeAt(fe)),
              we < 128
                ? (Z[le >> 2] |= we << O[le++ & 3])
                : we < 2048
                  ? ((Z[le >> 2] |= (192 | (we >> 6)) << O[le++ & 3]),
                    (Z[le >> 2] |= (128 | (we & 63)) << O[le++ & 3]))
                  : we < 55296 || we >= 57344
                    ? ((Z[le >> 2] |= (224 | (we >> 12)) << O[le++ & 3]),
                      (Z[le >> 2] |= (128 | ((we >> 6) & 63)) << O[le++ & 3]),
                      (Z[le >> 2] |= (128 | (we & 63)) << O[le++ & 3]))
                    : ((we = 65536 + (((we & 1023) << 10) | (E.charCodeAt(++fe) & 1023))),
                      (Z[le >> 2] |= (240 | (we >> 18)) << O[le++ & 3]),
                      (Z[le >> 2] |= (128 | ((we >> 12) & 63)) << O[le++ & 3]),
                      (Z[le >> 2] |= (128 | ((we >> 6) & 63)) << O[le++ & 3]),
                      (Z[le >> 2] |= (128 | (we & 63)) << O[le++ & 3]));
        if (((this.lastByteIndex = le), le >= se)) {
          for (this.start = le - se, this.block = Z[pe], le = 0; le < pe; ++le) Fe[le] ^= Z[le];
          ce(Fe), (this.reset = !0);
        } else this.start = le;
      }
      return this;
    }),
      (m.prototype.encode = function (E, F) {
        var W = E & 255,
          Z = 1,
          se = [W];
        for (E = E >> 8, W = E & 255; W > 0; ) se.unshift(W), (E = E >> 8), (W = E & 255), ++Z;
        return F ? se.push(Z) : se.unshift(Z), this.update(se), se.length;
      }),
      (m.prototype.encodeString = function (E) {
        var F,
          W = typeof E;
        if (W !== 'string') {
          if (W === 'object') {
            if (E === null) throw new Error(r);
            if (u && E.constructor === ArrayBuffer) E = new Uint8Array(E);
            else if (!Array.isArray(E) && (!u || !ArrayBuffer.isView(E))) throw new Error(r);
          } else throw new Error(r);
          F = !0;
        }
        var Z = 0,
          se = E.length;
        if (F) Z = se;
        else
          for (var ge = 0; ge < E.length; ++ge) {
            var pe = E.charCodeAt(ge);
            pe < 128
              ? (Z += 1)
              : pe < 2048
                ? (Z += 2)
                : pe < 55296 || pe >= 57344
                  ? (Z += 3)
                  : ((pe = 65536 + (((pe & 1023) << 10) | (E.charCodeAt(++ge) & 1023))), (Z += 4));
          }
        return (Z += this.encode(Z * 8)), this.update(E), Z;
      }),
      (m.prototype.bytepad = function (E, F) {
        for (var W = this.encode(F), Z = 0; Z < E.length; ++Z) W += this.encodeString(E[Z]);
        var se = F - (W % F),
          ge = [];
        return (ge.length = se), this.update(ge), this;
      }),
      (m.prototype.finalize = function () {
        if (!this.finalized) {
          this.finalized = !0;
          var E = this.blocks,
            F = this.lastByteIndex,
            W = this.blockCount,
            Z = this.s;
          if (((E[F >> 2] |= this.padding[F & 3]), this.lastByteIndex === this.byteCount))
            for (E[0] = E[W], F = 1; F < W + 1; ++F) E[F] = 0;
          for (E[W - 1] |= 2147483648, F = 0; F < W; ++F) Z[F] ^= E[F];
          ce(Z);
        }
      }),
      (m.prototype.toString = m.prototype.hex =
        function () {
          this.finalize();
          for (
            var E = this.blockCount,
              F = this.s,
              W = this.outputBlocks,
              Z = this.extraBytes,
              se = 0,
              ge = 0,
              pe = '',
              fe;
            ge < W;

          ) {
            for (se = 0; se < E && ge < W; ++se, ++ge)
              (fe = F[se]),
                (pe +=
                  l[(fe >> 4) & 15] +
                  l[fe & 15] +
                  l[(fe >> 12) & 15] +
                  l[(fe >> 8) & 15] +
                  l[(fe >> 20) & 15] +
                  l[(fe >> 16) & 15] +
                  l[(fe >> 28) & 15] +
                  l[(fe >> 24) & 15]);
            ge % E === 0 && (ce(F), (se = 0));
          }
          return (
            Z &&
              ((fe = F[se]),
              (pe += l[(fe >> 4) & 15] + l[fe & 15]),
              Z > 1 && (pe += l[(fe >> 12) & 15] + l[(fe >> 8) & 15]),
              Z > 2 && (pe += l[(fe >> 20) & 15] + l[(fe >> 16) & 15])),
            pe
          );
        }),
      (m.prototype.arrayBuffer = function () {
        this.finalize();
        var E = this.blockCount,
          F = this.s,
          W = this.outputBlocks,
          Z = this.extraBytes,
          se = 0,
          ge = 0,
          pe = this.outputBits >> 3,
          fe;
        Z ? (fe = new ArrayBuffer((W + 1) << 2)) : (fe = new ArrayBuffer(pe));
        for (var Fe = new Uint32Array(fe); ge < W; ) {
          for (se = 0; se < E && ge < W; ++se, ++ge) Fe[ge] = F[se];
          ge % E === 0 && ce(F);
        }
        return Z && ((Fe[se] = F[se]), (fe = fe.slice(0, pe))), fe;
      }),
      (m.prototype.buffer = m.prototype.arrayBuffer),
      (m.prototype.digest = m.prototype.array =
        function () {
          this.finalize();
          for (
            var E = this.blockCount,
              F = this.s,
              W = this.outputBlocks,
              Z = this.extraBytes,
              se = 0,
              ge = 0,
              pe = [],
              fe,
              Fe;
            ge < W;

          ) {
            for (se = 0; se < E && ge < W; ++se, ++ge)
              (fe = ge << 2),
                (Fe = F[se]),
                (pe[fe] = Fe & 255),
                (pe[fe + 1] = (Fe >> 8) & 255),
                (pe[fe + 2] = (Fe >> 16) & 255),
                (pe[fe + 3] = (Fe >> 24) & 255);
            ge % E === 0 && ce(F);
          }
          return (
            Z &&
              ((fe = ge << 2),
              (Fe = F[se]),
              (pe[fe] = Fe & 255),
              Z > 1 && (pe[fe + 1] = (Fe >> 8) & 255),
              Z > 2 && (pe[fe + 2] = (Fe >> 16) & 255)),
            pe
          );
        });
    function B(E, F, W) {
      m.call(this, E, F, W);
    }
    (B.prototype = new m()),
      (B.prototype.finalize = function () {
        return this.encode(this.outputBits, !0), m.prototype.finalize.call(this);
      });
    var ce = function (E) {
      var F,
        W,
        Z,
        se,
        ge,
        pe,
        fe,
        Fe,
        le,
        we,
        Fo,
        nt,
        ot,
        jo,
        st,
        it,
        Ho,
        at,
        ct,
        Wo,
        ut,
        pt,
        Ko,
        ft,
        lt,
        Vo,
        dt,
        ht,
        $o,
        mt,
        yt,
        Go,
        gt,
        xt,
        Yo,
        bt,
        wt,
        Zo,
        vt,
        St,
        Jo,
        Et,
        _t,
        Xo,
        At,
        Rt,
        Qo,
        It,
        kt,
        es,
        Tt,
        Pt,
        ts,
        Bt,
        Mt,
        rs,
        zt,
        Lt,
        Zn,
        Jn,
        Xn,
        Qn,
        eo;
      for (Z = 0; Z < 48; Z += 2)
        (se = E[0] ^ E[10] ^ E[20] ^ E[30] ^ E[40]),
          (ge = E[1] ^ E[11] ^ E[21] ^ E[31] ^ E[41]),
          (pe = E[2] ^ E[12] ^ E[22] ^ E[32] ^ E[42]),
          (fe = E[3] ^ E[13] ^ E[23] ^ E[33] ^ E[43]),
          (Fe = E[4] ^ E[14] ^ E[24] ^ E[34] ^ E[44]),
          (le = E[5] ^ E[15] ^ E[25] ^ E[35] ^ E[45]),
          (we = E[6] ^ E[16] ^ E[26] ^ E[36] ^ E[46]),
          (Fo = E[7] ^ E[17] ^ E[27] ^ E[37] ^ E[47]),
          (nt = E[8] ^ E[18] ^ E[28] ^ E[38] ^ E[48]),
          (ot = E[9] ^ E[19] ^ E[29] ^ E[39] ^ E[49]),
          (F = nt ^ ((pe << 1) | (fe >>> 31))),
          (W = ot ^ ((fe << 1) | (pe >>> 31))),
          (E[0] ^= F),
          (E[1] ^= W),
          (E[10] ^= F),
          (E[11] ^= W),
          (E[20] ^= F),
          (E[21] ^= W),
          (E[30] ^= F),
          (E[31] ^= W),
          (E[40] ^= F),
          (E[41] ^= W),
          (F = se ^ ((Fe << 1) | (le >>> 31))),
          (W = ge ^ ((le << 1) | (Fe >>> 31))),
          (E[2] ^= F),
          (E[3] ^= W),
          (E[12] ^= F),
          (E[13] ^= W),
          (E[22] ^= F),
          (E[23] ^= W),
          (E[32] ^= F),
          (E[33] ^= W),
          (E[42] ^= F),
          (E[43] ^= W),
          (F = pe ^ ((we << 1) | (Fo >>> 31))),
          (W = fe ^ ((Fo << 1) | (we >>> 31))),
          (E[4] ^= F),
          (E[5] ^= W),
          (E[14] ^= F),
          (E[15] ^= W),
          (E[24] ^= F),
          (E[25] ^= W),
          (E[34] ^= F),
          (E[35] ^= W),
          (E[44] ^= F),
          (E[45] ^= W),
          (F = Fe ^ ((nt << 1) | (ot >>> 31))),
          (W = le ^ ((ot << 1) | (nt >>> 31))),
          (E[6] ^= F),
          (E[7] ^= W),
          (E[16] ^= F),
          (E[17] ^= W),
          (E[26] ^= F),
          (E[27] ^= W),
          (E[36] ^= F),
          (E[37] ^= W),
          (E[46] ^= F),
          (E[47] ^= W),
          (F = we ^ ((se << 1) | (ge >>> 31))),
          (W = Fo ^ ((ge << 1) | (se >>> 31))),
          (E[8] ^= F),
          (E[9] ^= W),
          (E[18] ^= F),
          (E[19] ^= W),
          (E[28] ^= F),
          (E[29] ^= W),
          (E[38] ^= F),
          (E[39] ^= W),
          (E[48] ^= F),
          (E[49] ^= W),
          (jo = E[0]),
          (st = E[1]),
          (Rt = (E[11] << 4) | (E[10] >>> 28)),
          (Qo = (E[10] << 4) | (E[11] >>> 28)),
          (ht = (E[20] << 3) | (E[21] >>> 29)),
          ($o = (E[21] << 3) | (E[20] >>> 29)),
          (Jn = (E[31] << 9) | (E[30] >>> 23)),
          (Xn = (E[30] << 9) | (E[31] >>> 23)),
          (Et = (E[40] << 18) | (E[41] >>> 14)),
          (_t = (E[41] << 18) | (E[40] >>> 14)),
          (xt = (E[2] << 1) | (E[3] >>> 31)),
          (Yo = (E[3] << 1) | (E[2] >>> 31)),
          (it = (E[13] << 12) | (E[12] >>> 20)),
          (Ho = (E[12] << 12) | (E[13] >>> 20)),
          (It = (E[22] << 10) | (E[23] >>> 22)),
          (kt = (E[23] << 10) | (E[22] >>> 22)),
          (mt = (E[33] << 13) | (E[32] >>> 19)),
          (yt = (E[32] << 13) | (E[33] >>> 19)),
          (Qn = (E[42] << 2) | (E[43] >>> 30)),
          (eo = (E[43] << 2) | (E[42] >>> 30)),
          (Bt = (E[5] << 30) | (E[4] >>> 2)),
          (Mt = (E[4] << 30) | (E[5] >>> 2)),
          (bt = (E[14] << 6) | (E[15] >>> 26)),
          (wt = (E[15] << 6) | (E[14] >>> 26)),
          (at = (E[25] << 11) | (E[24] >>> 21)),
          (ct = (E[24] << 11) | (E[25] >>> 21)),
          (es = (E[34] << 15) | (E[35] >>> 17)),
          (Tt = (E[35] << 15) | (E[34] >>> 17)),
          (Go = (E[45] << 29) | (E[44] >>> 3)),
          (gt = (E[44] << 29) | (E[45] >>> 3)),
          (ft = (E[6] << 28) | (E[7] >>> 4)),
          (lt = (E[7] << 28) | (E[6] >>> 4)),
          (rs = (E[17] << 23) | (E[16] >>> 9)),
          (zt = (E[16] << 23) | (E[17] >>> 9)),
          (Zo = (E[26] << 25) | (E[27] >>> 7)),
          (vt = (E[27] << 25) | (E[26] >>> 7)),
          (Wo = (E[36] << 21) | (E[37] >>> 11)),
          (ut = (E[37] << 21) | (E[36] >>> 11)),
          (Pt = (E[47] << 24) | (E[46] >>> 8)),
          (ts = (E[46] << 24) | (E[47] >>> 8)),
          (Xo = (E[8] << 27) | (E[9] >>> 5)),
          (At = (E[9] << 27) | (E[8] >>> 5)),
          (Vo = (E[18] << 20) | (E[19] >>> 12)),
          (dt = (E[19] << 20) | (E[18] >>> 12)),
          (Lt = (E[29] << 7) | (E[28] >>> 25)),
          (Zn = (E[28] << 7) | (E[29] >>> 25)),
          (St = (E[38] << 8) | (E[39] >>> 24)),
          (Jo = (E[39] << 8) | (E[38] >>> 24)),
          (pt = (E[48] << 14) | (E[49] >>> 18)),
          (Ko = (E[49] << 14) | (E[48] >>> 18)),
          (E[0] = jo ^ (~it & at)),
          (E[1] = st ^ (~Ho & ct)),
          (E[10] = ft ^ (~Vo & ht)),
          (E[11] = lt ^ (~dt & $o)),
          (E[20] = xt ^ (~bt & Zo)),
          (E[21] = Yo ^ (~wt & vt)),
          (E[30] = Xo ^ (~Rt & It)),
          (E[31] = At ^ (~Qo & kt)),
          (E[40] = Bt ^ (~rs & Lt)),
          (E[41] = Mt ^ (~zt & Zn)),
          (E[2] = it ^ (~at & Wo)),
          (E[3] = Ho ^ (~ct & ut)),
          (E[12] = Vo ^ (~ht & mt)),
          (E[13] = dt ^ (~$o & yt)),
          (E[22] = bt ^ (~Zo & St)),
          (E[23] = wt ^ (~vt & Jo)),
          (E[32] = Rt ^ (~It & es)),
          (E[33] = Qo ^ (~kt & Tt)),
          (E[42] = rs ^ (~Lt & Jn)),
          (E[43] = zt ^ (~Zn & Xn)),
          (E[4] = at ^ (~Wo & pt)),
          (E[5] = ct ^ (~ut & Ko)),
          (E[14] = ht ^ (~mt & Go)),
          (E[15] = $o ^ (~yt & gt)),
          (E[24] = Zo ^ (~St & Et)),
          (E[25] = vt ^ (~Jo & _t)),
          (E[34] = It ^ (~es & Pt)),
          (E[35] = kt ^ (~Tt & ts)),
          (E[44] = Lt ^ (~Jn & Qn)),
          (E[45] = Zn ^ (~Xn & eo)),
          (E[6] = Wo ^ (~pt & jo)),
          (E[7] = ut ^ (~Ko & st)),
          (E[16] = mt ^ (~Go & ft)),
          (E[17] = yt ^ (~gt & lt)),
          (E[26] = St ^ (~Et & xt)),
          (E[27] = Jo ^ (~_t & Yo)),
          (E[36] = es ^ (~Pt & Xo)),
          (E[37] = Tt ^ (~ts & At)),
          (E[46] = Jn ^ (~Qn & Bt)),
          (E[47] = Xn ^ (~eo & Mt)),
          (E[8] = pt ^ (~jo & it)),
          (E[9] = Ko ^ (~st & Ho)),
          (E[18] = Go ^ (~ft & Vo)),
          (E[19] = gt ^ (~lt & dt)),
          (E[28] = Et ^ (~xt & bt)),
          (E[29] = _t ^ (~Yo & wt)),
          (E[38] = Pt ^ (~Xo & Rt)),
          (E[39] = ts ^ (~At & Qo)),
          (E[48] = Qn ^ (~Bt & rs)),
          (E[49] = eo ^ (~Mt & zt)),
          (E[0] ^= D[Z]),
          (E[1] ^= D[Z + 1]);
    };
    if (i) Gc.exports = p;
    else {
      for (h = 0; h < d.length; ++h) n[d[h]] = p[d[h]];
      c &&
        define(function () {
          return p;
        });
    }
  })();
});
var hx = te((Vd, dx) => {
  f();
  var Yc = ss(),
    dn = Yc.Buffer;
  function lx(r, e) {
    for (var t in r) e[t] = r[t];
  }
  dn.from && dn.alloc && dn.allocUnsafe && dn.allocUnsafeSlow
    ? (dx.exports = Yc)
    : (lx(Yc, Vd), (Vd.Buffer = Ss));
  function Ss(r, e, t) {
    return dn(r, e, t);
  }
  Ss.prototype = Object.create(dn.prototype);
  lx(dn, Ss);
  Ss.from = function (r, e, t) {
    if (typeof r == 'number') throw new TypeError('Argument must not be a number');
    return dn(r, e, t);
  };
  Ss.alloc = function (r, e, t) {
    if (typeof r != 'number') throw new TypeError('Argument must be a number');
    var n = dn(r);
    return e !== void 0 ? (typeof t == 'string' ? n.fill(e, t) : n.fill(e)) : n.fill(0), n;
  };
  Ss.allocUnsafe = function (r) {
    if (typeof r != 'number') throw new TypeError('Argument must be a number');
    return dn(r);
  };
  Ss.allocUnsafeSlow = function (r) {
    if (typeof r != 'number') throw new TypeError('Argument must be a number');
    return Yc.SlowBuffer(r);
  };
});
var yx = te((d$, mx) => {
  'use strict';
  f();
  var Zc = hx().Buffer;
  function $L(r) {
    if (r.length >= 255) throw new TypeError('Alphabet too long');
    for (var e = new Uint8Array(256), t = 0; t < e.length; t++) e[t] = 255;
    for (var n = 0; n < r.length; n++) {
      var o = r.charAt(n),
        s = o.charCodeAt(0);
      if (e[s] !== 255) throw new TypeError(o + ' is ambiguous');
      e[s] = n;
    }
    var i = r.length,
      c = r.charAt(0),
      u = Math.log(i) / Math.log(256),
      l = Math.log(256) / Math.log(i);
    function w(_) {
      if (((Array.isArray(_) || _ instanceof Uint8Array) && (_ = Zc.from(_)), !Zc.isBuffer(_)))
        throw new TypeError('Expected Buffer');
      if (_.length === 0) return '';
      for (var O = 0, D = 0, j = 0, G = _.length; j !== G && _[j] === 0; ) j++, O++;
      for (var H = ((G - j) * l + 1) >>> 0, ae = new Uint8Array(H); j !== G; ) {
        for (var ee = _[j], re = 0, Y = H - 1; (ee !== 0 || re < D) && Y !== -1; Y--, re++)
          (ee += (256 * ae[Y]) >>> 0), (ae[Y] = ee % i >>> 0), (ee = (ee / i) >>> 0);
        if (ee !== 0) throw new Error('Non-zero carry');
        (D = re), j++;
      }
      for (var he = H - D; he !== H && ae[he] === 0; ) he++;
      for (var R = c.repeat(O); he < H; ++he) R += r.charAt(ae[he]);
      return R;
    }
    function x(_) {
      if (typeof _ != 'string') throw new TypeError('Expected String');
      if (_.length === 0) return Zc.alloc(0);
      for (var O = 0, D = 0, j = 0; _[O] === c; ) D++, O++;
      for (var G = ((_.length - O) * u + 1) >>> 0, H = new Uint8Array(G); _[O]; ) {
        var ae = e[_.charCodeAt(O)];
        if (ae === 255) return;
        for (var ee = 0, re = G - 1; (ae !== 0 || ee < j) && re !== -1; re--, ee++)
          (ae += (i * H[re]) >>> 0), (H[re] = ae % 256 >>> 0), (ae = (ae / 256) >>> 0);
        if (ae !== 0) throw new Error('Non-zero carry');
        (j = ee), O++;
      }
      for (var Y = G - j; Y !== G && H[Y] === 0; ) Y++;
      var he = Zc.allocUnsafe(D + (G - Y));
      he.fill(0, 0, D);
      for (var R = D; Y !== G; ) he[R++] = H[Y++];
      return he;
    }
    function A(_) {
      var O = x(_);
      if (O) return O;
      throw new Error('Non-base' + i + ' character');
    }
    return { encode: w, decodeUnsafe: x, decode: A };
  }
  mx.exports = $L;
});
var io = te((m$, gx) => {
  f();
  var GL = yx(),
    YL = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
  gx.exports = GL(YL);
});
var fi = te((mh, yh) => {
  f();
  (function (r, e) {
    typeof mh == 'object' && typeof yh < 'u'
      ? (yh.exports = e())
      : typeof define == 'function' && define.amd
        ? define(e)
        : ((r = typeof globalThis < 'u' ? globalThis : r || self).dayjs = e());
  })(mh, function () {
    'use strict';
    var r = 1e3,
      e = 6e4,
      t = 36e5,
      n = 'millisecond',
      o = 'second',
      s = 'minute',
      i = 'hour',
      c = 'day',
      u = 'week',
      l = 'month',
      w = 'quarter',
      x = 'year',
      A = 'date',
      _ = 'Invalid Date',
      O =
        /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      D = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      j = {
        name: 'en',
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        months:
          'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_'
          ),
        ordinal: function (T) {
          var y = ['th', 'st', 'nd', 'rd'],
            p = T % 100;
          return '[' + T + (y[(p - 20) % 10] || y[p] || y[0]) + ']';
        },
      },
      G = function (T, y, p) {
        var d = String(T);
        return !d || d.length >= y ? T : '' + Array(y + 1 - d.length).join(p) + T;
      },
      H = {
        s: G,
        z: function (T) {
          var y = -T.utcOffset(),
            p = Math.abs(y),
            d = Math.floor(p / 60),
            h = p % 60;
          return (y <= 0 ? '+' : '-') + G(d, 2, '0') + ':' + G(h, 2, '0');
        },
        m: function T(y, p) {
          if (y.date() < p.date()) return -T(p, y);
          var d = 12 * (p.year() - y.year()) + (p.month() - y.month()),
            h = y.clone().add(d, l),
            g = p - h < 0,
            b = y.clone().add(d + (g ? -1 : 1), l);
          return +(-(d + (p - h) / (g ? h - b : b - h)) || 0);
        },
        a: function (T) {
          return T < 0 ? Math.ceil(T) || 0 : Math.floor(T);
        },
        p: function (T) {
          return (
            { M: l, y: x, w: u, d: c, D: A, h: i, m: s, s: o, ms: n, Q: w }[T] ||
            String(T || '')
              .toLowerCase()
              .replace(/s$/, '')
          );
        },
        u: function (T) {
          return T === void 0;
        },
      },
      ae = 'en',
      ee = {};
    ee[ae] = j;
    var re = '$isDayjsObject',
      Y = function (T) {
        return T instanceof C || !(!T || !T[re]);
      },
      he = function T(y, p, d) {
        var h;
        if (!y) return ae;
        if (typeof y == 'string') {
          var g = y.toLowerCase();
          ee[g] && (h = g), p && ((ee[g] = p), (h = g));
          var b = y.split('-');
          if (!h && b.length > 1) return T(b[0]);
        } else {
          var I = y.name;
          (ee[I] = y), (h = I);
        }
        return !d && h && (ae = h), h || (!d && ae);
      },
      R = function (T, y) {
        if (Y(T)) return T.clone();
        var p = typeof y == 'object' ? y : {};
        return (p.date = T), (p.args = arguments), new C(p);
      },
      P = H;
    (P.l = he),
      (P.i = Y),
      (P.w = function (T, y) {
        return R(T, { locale: y.$L, utc: y.$u, x: y.$x, $offset: y.$offset });
      });
    var C = (function () {
        function T(p) {
          (this.$L = he(p.locale, null, !0)),
            this.parse(p),
            (this.$x = this.$x || p.x || {}),
            (this[re] = !0);
        }
        var y = T.prototype;
        return (
          (y.parse = function (p) {
            (this.$d = (function (d) {
              var h = d.date,
                g = d.utc;
              if (h === null) return new Date(NaN);
              if (P.u(h)) return new Date();
              if (h instanceof Date) return new Date(h);
              if (typeof h == 'string' && !/Z$/i.test(h)) {
                var b = h.match(O);
                if (b) {
                  var I = b[2] - 1 || 0,
                    M = (b[7] || '0').substring(0, 3);
                  return g
                    ? new Date(Date.UTC(b[1], I, b[3] || 1, b[4] || 0, b[5] || 0, b[6] || 0, M))
                    : new Date(b[1], I, b[3] || 1, b[4] || 0, b[5] || 0, b[6] || 0, M);
                }
              }
              return new Date(h);
            })(p)),
              this.init();
          }),
          (y.init = function () {
            var p = this.$d;
            (this.$y = p.getFullYear()),
              (this.$M = p.getMonth()),
              (this.$D = p.getDate()),
              (this.$W = p.getDay()),
              (this.$H = p.getHours()),
              (this.$m = p.getMinutes()),
              (this.$s = p.getSeconds()),
              (this.$ms = p.getMilliseconds());
          }),
          (y.$utils = function () {
            return P;
          }),
          (y.isValid = function () {
            return this.$d.toString() !== _;
          }),
          (y.isSame = function (p, d) {
            var h = R(p);
            return this.startOf(d) <= h && h <= this.endOf(d);
          }),
          (y.isAfter = function (p, d) {
            return R(p) < this.startOf(d);
          }),
          (y.isBefore = function (p, d) {
            return this.endOf(d) < R(p);
          }),
          (y.$g = function (p, d, h) {
            return P.u(p) ? this[d] : this.set(h, p);
          }),
          (y.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (y.valueOf = function () {
            return this.$d.getTime();
          }),
          (y.startOf = function (p, d) {
            var h = this,
              g = !!P.u(d) || d,
              b = P.p(p),
              I = function (W, Z) {
                var se = P.w(h.$u ? Date.UTC(h.$y, Z, W) : new Date(h.$y, Z, W), h);
                return g ? se : se.endOf(c);
              },
              M = function (W, Z) {
                return P.w(
                  h
                    .toDate()
                    [W].apply(h.toDate('s'), (g ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Z)),
                  h
                );
              },
              k = this.$W,
              m = this.$M,
              B = this.$D,
              ce = 'set' + (this.$u ? 'UTC' : '');
            switch (b) {
              case x:
                return g ? I(1, 0) : I(31, 11);
              case l:
                return g ? I(1, m) : I(0, m + 1);
              case u:
                var E = this.$locale().weekStart || 0,
                  F = (k < E ? k + 7 : k) - E;
                return I(g ? B - F : B + (6 - F), m);
              case c:
              case A:
                return M(ce + 'Hours', 0);
              case i:
                return M(ce + 'Minutes', 1);
              case s:
                return M(ce + 'Seconds', 2);
              case o:
                return M(ce + 'Milliseconds', 3);
              default:
                return this.clone();
            }
          }),
          (y.endOf = function (p) {
            return this.startOf(p, !1);
          }),
          (y.$set = function (p, d) {
            var h,
              g = P.p(p),
              b = 'set' + (this.$u ? 'UTC' : ''),
              I = ((h = {}),
              (h[c] = b + 'Date'),
              (h[A] = b + 'Date'),
              (h[l] = b + 'Month'),
              (h[x] = b + 'FullYear'),
              (h[i] = b + 'Hours'),
              (h[s] = b + 'Minutes'),
              (h[o] = b + 'Seconds'),
              (h[n] = b + 'Milliseconds'),
              h)[g],
              M = g === c ? this.$D + (d - this.$W) : d;
            if (g === l || g === x) {
              var k = this.clone().set(A, 1);
              k.$d[I](M), k.init(), (this.$d = k.set(A, Math.min(this.$D, k.daysInMonth())).$d);
            } else I && this.$d[I](M);
            return this.init(), this;
          }),
          (y.set = function (p, d) {
            return this.clone().$set(p, d);
          }),
          (y.get = function (p) {
            return this[P.p(p)]();
          }),
          (y.add = function (p, d) {
            var h,
              g = this;
            p = Number(p);
            var b = P.p(d),
              I = function (m) {
                var B = R(g);
                return P.w(B.date(B.date() + Math.round(m * p)), g);
              };
            if (b === l) return this.set(l, this.$M + p);
            if (b === x) return this.set(x, this.$y + p);
            if (b === c) return I(1);
            if (b === u) return I(7);
            var M = ((h = {}), (h[s] = e), (h[i] = t), (h[o] = r), h)[b] || 1,
              k = this.$d.getTime() + p * M;
            return P.w(k, this);
          }),
          (y.subtract = function (p, d) {
            return this.add(-1 * p, d);
          }),
          (y.format = function (p) {
            var d = this,
              h = this.$locale();
            if (!this.isValid()) return h.invalidDate || _;
            var g = p || 'YYYY-MM-DDTHH:mm:ssZ',
              b = P.z(this),
              I = this.$H,
              M = this.$m,
              k = this.$M,
              m = h.weekdays,
              B = h.months,
              ce = h.meridiem,
              E = function (Z, se, ge, pe) {
                return (Z && (Z[se] || Z(d, g))) || ge[se].slice(0, pe);
              },
              F = function (Z) {
                return P.s(I % 12 || 12, Z, '0');
              },
              W =
                ce ||
                function (Z, se, ge) {
                  var pe = Z < 12 ? 'AM' : 'PM';
                  return ge ? pe.toLowerCase() : pe;
                };
            return g.replace(D, function (Z, se) {
              return (
                se ||
                (function (ge) {
                  switch (ge) {
                    case 'YY':
                      return String(d.$y).slice(-2);
                    case 'YYYY':
                      return P.s(d.$y, 4, '0');
                    case 'M':
                      return k + 1;
                    case 'MM':
                      return P.s(k + 1, 2, '0');
                    case 'MMM':
                      return E(h.monthsShort, k, B, 3);
                    case 'MMMM':
                      return E(B, k);
                    case 'D':
                      return d.$D;
                    case 'DD':
                      return P.s(d.$D, 2, '0');
                    case 'd':
                      return String(d.$W);
                    case 'dd':
                      return E(h.weekdaysMin, d.$W, m, 2);
                    case 'ddd':
                      return E(h.weekdaysShort, d.$W, m, 3);
                    case 'dddd':
                      return m[d.$W];
                    case 'H':
                      return String(I);
                    case 'HH':
                      return P.s(I, 2, '0');
                    case 'h':
                      return F(1);
                    case 'hh':
                      return F(2);
                    case 'a':
                      return W(I, M, !0);
                    case 'A':
                      return W(I, M, !1);
                    case 'm':
                      return String(M);
                    case 'mm':
                      return P.s(M, 2, '0');
                    case 's':
                      return String(d.$s);
                    case 'ss':
                      return P.s(d.$s, 2, '0');
                    case 'SSS':
                      return P.s(d.$ms, 3, '0');
                    case 'Z':
                      return b;
                  }
                  return null;
                })(Z) ||
                b.replace(':', '')
              );
            });
          }),
          (y.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }),
          (y.diff = function (p, d, h) {
            var g,
              b = this,
              I = P.p(d),
              M = R(p),
              k = (M.utcOffset() - this.utcOffset()) * e,
              m = this - M,
              B = function () {
                return P.m(b, M);
              };
            switch (I) {
              case x:
                g = B() / 12;
                break;
              case l:
                g = B();
                break;
              case w:
                g = B() / 3;
                break;
              case u:
                g = (m - k) / 6048e5;
                break;
              case c:
                g = (m - k) / 864e5;
                break;
              case i:
                g = m / t;
                break;
              case s:
                g = m / e;
                break;
              case o:
                g = m / r;
                break;
              default:
                g = m;
            }
            return h ? g : P.a(g);
          }),
          (y.daysInMonth = function () {
            return this.endOf(l).$D;
          }),
          (y.$locale = function () {
            return ee[this.$L];
          }),
          (y.locale = function (p, d) {
            if (!p) return this.$L;
            var h = this.clone(),
              g = he(p, d, !0);
            return g && (h.$L = g), h;
          }),
          (y.clone = function () {
            return P.w(this.$d, this);
          }),
          (y.toDate = function () {
            return new Date(this.valueOf());
          }),
          (y.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
          }),
          (y.toISOString = function () {
            return this.$d.toISOString();
          }),
          (y.toString = function () {
            return this.$d.toUTCString();
          }),
          T
        );
      })(),
      U = C.prototype;
    return (
      (R.prototype = U),
      [
        ['$ms', n],
        ['$s', o],
        ['$m', s],
        ['$H', i],
        ['$W', c],
        ['$M', l],
        ['$y', x],
        ['$D', A],
      ].forEach(function (T) {
        U[T[1]] = function (y) {
          return this.$g(y, T[0], T[1]);
        };
      }),
      (R.extend = function (T, y) {
        return T.$i || (T(y, C, R), (T.$i = !0)), R;
      }),
      (R.locale = he),
      (R.isDayjs = Y),
      (R.unix = function (T) {
        return R(1e3 * T);
      }),
      (R.en = ee[ae]),
      (R.Ls = ee),
      (R.p = {}),
      R
    );
  });
});
var bh = te((gh, xh) => {
  f();
  (function (r, e) {
    typeof gh == 'object' && typeof xh < 'u'
      ? (xh.exports = e())
      : typeof define == 'function' && define.amd
        ? define(e)
        : ((r = typeof globalThis < 'u' ? globalThis : r || self).dayjs_plugin_duration = e());
  })(gh, function () {
    'use strict';
    var r,
      e,
      t = 1e3,
      n = 6e4,
      o = 36e5,
      s = 864e5,
      i = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      c = 31536e6,
      u = 2628e6,
      l =
        /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,
      w = {
        years: c,
        months: u,
        days: s,
        hours: o,
        minutes: n,
        seconds: t,
        milliseconds: 1,
        weeks: 6048e5,
      },
      x = function (ee) {
        return ee instanceof H;
      },
      A = function (ee, re, Y) {
        return new H(ee, Y, re.$l);
      },
      _ = function (ee) {
        return e.p(ee) + 's';
      },
      O = function (ee) {
        return ee < 0;
      },
      D = function (ee) {
        return O(ee) ? Math.ceil(ee) : Math.floor(ee);
      },
      j = function (ee) {
        return Math.abs(ee);
      },
      G = function (ee, re) {
        return ee
          ? O(ee)
            ? { negative: !0, format: '' + j(ee) + re }
            : { negative: !1, format: '' + ee + re }
          : { negative: !1, format: '' };
      },
      H = (function () {
        function ee(Y, he, R) {
          var P = this;
          if (
            ((this.$d = {}),
            (this.$l = R),
            Y === void 0 && ((this.$ms = 0), this.parseFromMilliseconds()),
            he)
          )
            return A(Y * w[_(he)], this);
          if (typeof Y == 'number') return (this.$ms = Y), this.parseFromMilliseconds(), this;
          if (typeof Y == 'object')
            return (
              Object.keys(Y).forEach(function (T) {
                P.$d[_(T)] = Y[T];
              }),
              this.calMilliseconds(),
              this
            );
          if (typeof Y == 'string') {
            var C = Y.match(l);
            if (C) {
              var U = C.slice(2).map(function (T) {
                return T != null ? Number(T) : 0;
              });
              return (
                (this.$d.years = U[0]),
                (this.$d.months = U[1]),
                (this.$d.weeks = U[2]),
                (this.$d.days = U[3]),
                (this.$d.hours = U[4]),
                (this.$d.minutes = U[5]),
                (this.$d.seconds = U[6]),
                this.calMilliseconds(),
                this
              );
            }
          }
          return this;
        }
        var re = ee.prototype;
        return (
          (re.calMilliseconds = function () {
            var Y = this;
            this.$ms = Object.keys(this.$d).reduce(function (he, R) {
              return he + (Y.$d[R] || 0) * w[R];
            }, 0);
          }),
          (re.parseFromMilliseconds = function () {
            var Y = this.$ms;
            (this.$d.years = D(Y / c)),
              (Y %= c),
              (this.$d.months = D(Y / u)),
              (Y %= u),
              (this.$d.days = D(Y / s)),
              (Y %= s),
              (this.$d.hours = D(Y / o)),
              (Y %= o),
              (this.$d.minutes = D(Y / n)),
              (Y %= n),
              (this.$d.seconds = D(Y / t)),
              (Y %= t),
              (this.$d.milliseconds = Y);
          }),
          (re.toISOString = function () {
            var Y = G(this.$d.years, 'Y'),
              he = G(this.$d.months, 'M'),
              R = +this.$d.days || 0;
            this.$d.weeks && (R += 7 * this.$d.weeks);
            var P = G(R, 'D'),
              C = G(this.$d.hours, 'H'),
              U = G(this.$d.minutes, 'M'),
              T = this.$d.seconds || 0;
            this.$d.milliseconds &&
              ((T += this.$d.milliseconds / 1e3), (T = Math.round(1e3 * T) / 1e3));
            var y = G(T, 'S'),
              p = Y.negative || he.negative || P.negative || C.negative || U.negative || y.negative,
              d = C.format || U.format || y.format ? 'T' : '',
              h =
                (p ? '-' : '') +
                'P' +
                Y.format +
                he.format +
                P.format +
                d +
                C.format +
                U.format +
                y.format;
            return h === 'P' || h === '-P' ? 'P0D' : h;
          }),
          (re.toJSON = function () {
            return this.toISOString();
          }),
          (re.format = function (Y) {
            var he = Y || 'YYYY-MM-DDTHH:mm:ss',
              R = {
                Y: this.$d.years,
                YY: e.s(this.$d.years, 2, '0'),
                YYYY: e.s(this.$d.years, 4, '0'),
                M: this.$d.months,
                MM: e.s(this.$d.months, 2, '0'),
                D: this.$d.days,
                DD: e.s(this.$d.days, 2, '0'),
                H: this.$d.hours,
                HH: e.s(this.$d.hours, 2, '0'),
                m: this.$d.minutes,
                mm: e.s(this.$d.minutes, 2, '0'),
                s: this.$d.seconds,
                ss: e.s(this.$d.seconds, 2, '0'),
                SSS: e.s(this.$d.milliseconds, 3, '0'),
              };
            return he.replace(i, function (P, C) {
              return C || String(R[P]);
            });
          }),
          (re.as = function (Y) {
            return this.$ms / w[_(Y)];
          }),
          (re.get = function (Y) {
            var he = this.$ms,
              R = _(Y);
            return (
              R === 'milliseconds' ? (he %= 1e3) : (he = R === 'weeks' ? D(he / w[R]) : this.$d[R]),
              he || 0
            );
          }),
          (re.add = function (Y, he, R) {
            var P;
            return (
              (P = he ? Y * w[_(he)] : x(Y) ? Y.$ms : A(Y, this).$ms),
              A(this.$ms + P * (R ? -1 : 1), this)
            );
          }),
          (re.subtract = function (Y, he) {
            return this.add(Y, he, !0);
          }),
          (re.locale = function (Y) {
            var he = this.clone();
            return (he.$l = Y), he;
          }),
          (re.clone = function () {
            return A(this.$ms, this);
          }),
          (re.humanize = function (Y) {
            return r().add(this.$ms, 'ms').locale(this.$l).fromNow(!Y);
          }),
          (re.valueOf = function () {
            return this.asMilliseconds();
          }),
          (re.milliseconds = function () {
            return this.get('milliseconds');
          }),
          (re.asMilliseconds = function () {
            return this.as('milliseconds');
          }),
          (re.seconds = function () {
            return this.get('seconds');
          }),
          (re.asSeconds = function () {
            return this.as('seconds');
          }),
          (re.minutes = function () {
            return this.get('minutes');
          }),
          (re.asMinutes = function () {
            return this.as('minutes');
          }),
          (re.hours = function () {
            return this.get('hours');
          }),
          (re.asHours = function () {
            return this.as('hours');
          }),
          (re.days = function () {
            return this.get('days');
          }),
          (re.asDays = function () {
            return this.as('days');
          }),
          (re.weeks = function () {
            return this.get('weeks');
          }),
          (re.asWeeks = function () {
            return this.as('weeks');
          }),
          (re.months = function () {
            return this.get('months');
          }),
          (re.asMonths = function () {
            return this.as('months');
          }),
          (re.years = function () {
            return this.get('years');
          }),
          (re.asYears = function () {
            return this.as('years');
          }),
          ee
        );
      })(),
      ae = function (ee, re, Y) {
        return ee
          .add(re.years() * Y, 'y')
          .add(re.months() * Y, 'M')
          .add(re.days() * Y, 'd')
          .add(re.hours() * Y, 'h')
          .add(re.minutes() * Y, 'm')
          .add(re.seconds() * Y, 's')
          .add(re.milliseconds() * Y, 'ms');
      };
    return function (ee, re, Y) {
      (r = Y),
        (e = Y().$utils()),
        (Y.duration = function (P, C) {
          var U = Y.locale();
          return A(P, { $l: U }, C);
        }),
        (Y.isDuration = x);
      var he = re.prototype.add,
        R = re.prototype.subtract;
      (re.prototype.add = function (P, C) {
        return x(P) ? ae(this, P, 1) : he.bind(this)(P, C);
      }),
        (re.prototype.subtract = function (P, C) {
          return x(P) ? ae(this, P, -1) : R.bind(this)(P, C);
        });
    };
  });
});
var gE = te((wh, vh) => {
  f();
  (function (r, e) {
    typeof wh == 'object' && typeof vh < 'u'
      ? (vh.exports = e())
      : typeof define == 'function' && define.amd
        ? define(e)
        : ((r = typeof globalThis < 'u' ? globalThis : r || self).dayjs_plugin_isToday = e());
  })(wh, function () {
    'use strict';
    return function (r, e, t) {
      e.prototype.isToday = function () {
        var n = 'YYYY-MM-DD',
          o = t();
        return this.format(n) === o.format(n);
      };
    };
  });
});
var xE = te((Sh, Eh) => {
  f();
  (function (r, e) {
    typeof Sh == 'object' && typeof Eh < 'u'
      ? (Eh.exports = e())
      : typeof define == 'function' && define.amd
        ? define(e)
        : ((r = typeof globalThis < 'u' ? globalThis : r || self).dayjs_plugin_isYesterday = e());
  })(Sh, function () {
    'use strict';
    return function (r, e, t) {
      e.prototype.isYesterday = function () {
        var n = 'YYYY-MM-DD',
          o = t().subtract(1, 'day');
        return this.format(n) === o.format(n);
      };
    };
  });
});
var vE = te((Ah, Rh) => {
  f();
  (function (r, e) {
    typeof Ah == 'object' && typeof Rh < 'u'
      ? (Rh.exports = e())
      : typeof define == 'function' && define.amd
        ? define(e)
        : ((r = typeof globalThis < 'u' ? globalThis : r || self).dayjs_plugin_relativeTime = e());
  })(Ah, function () {
    'use strict';
    return function (r, e, t) {
      r = r || {};
      var n = e.prototype,
        o = {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years',
        };
      function s(c, u, l, w) {
        return n.fromToBase(c, u, l, w);
      }
      (t.en.relativeTime = o),
        (n.fromToBase = function (c, u, l, w, x) {
          for (
            var A,
              _,
              O,
              D = l.$locale().relativeTime || o,
              j = r.thresholds || [
                { l: 's', r: 44, d: 'second' },
                { l: 'm', r: 89 },
                { l: 'mm', r: 44, d: 'minute' },
                { l: 'h', r: 89 },
                { l: 'hh', r: 21, d: 'hour' },
                { l: 'd', r: 35 },
                { l: 'dd', r: 25, d: 'day' },
                { l: 'M', r: 45 },
                { l: 'MM', r: 10, d: 'month' },
                { l: 'y', r: 17 },
                { l: 'yy', d: 'year' },
              ],
              G = j.length,
              H = 0;
            H < G;
            H += 1
          ) {
            var ae = j[H];
            ae.d && (A = w ? t(c).diff(l, ae.d, !0) : l.diff(c, ae.d, !0));
            var ee = (r.rounding || Math.round)(Math.abs(A));
            if (((O = A > 0), ee <= ae.r || !ae.r)) {
              ee <= 1 && H > 0 && (ae = j[H - 1]);
              var re = D[ae.l];
              x && (ee = x('' + ee)),
                (_ = typeof re == 'string' ? re.replace('%d', ee) : re(ee, u, ae.l, O));
              break;
            }
          }
          if (u) return _;
          var Y = O ? D.future : D.past;
          return typeof Y == 'function' ? Y(_) : Y.replace('%s', _);
        }),
        (n.to = function (c, u) {
          return s(c, u, this, !0);
        }),
        (n.from = function (c, u) {
          return s(c, u, this);
        });
      var i = function (c) {
        return c.$u ? t.utc() : t();
      };
      (n.toNow = function (c) {
        return this.to(i(this), c);
      }),
        (n.fromNow = function (c) {
          return this.from(i(this), c);
        });
    };
  });
});
var SE = te((Ih, kh) => {
  f();
  (function (r, e) {
    typeof Ih == 'object' && typeof kh < 'u'
      ? (kh.exports = e())
      : typeof define == 'function' && define.amd
        ? define(e)
        : ((r = typeof globalThis < 'u' ? globalThis : r || self).dayjs_plugin_utc = e());
  })(Ih, function () {
    'use strict';
    var r = 'minute',
      e = /[+-]\d\d(?::?\d\d)?/g,
      t = /([+-]|\d\d)/g;
    return function (n, o, s) {
      var i = o.prototype;
      (s.utc = function (_) {
        var O = { date: _, utc: !0, args: arguments };
        return new o(O);
      }),
        (i.utc = function (_) {
          var O = s(this.toDate(), { locale: this.$L, utc: !0 });
          return _ ? O.add(this.utcOffset(), r) : O;
        }),
        (i.local = function () {
          return s(this.toDate(), { locale: this.$L, utc: !1 });
        });
      var c = i.parse;
      i.parse = function (_) {
        _.utc && (this.$u = !0),
          this.$utils().u(_.$offset) || (this.$offset = _.$offset),
          c.call(this, _);
      };
      var u = i.init;
      i.init = function () {
        if (this.$u) {
          var _ = this.$d;
          (this.$y = _.getUTCFullYear()),
            (this.$M = _.getUTCMonth()),
            (this.$D = _.getUTCDate()),
            (this.$W = _.getUTCDay()),
            (this.$H = _.getUTCHours()),
            (this.$m = _.getUTCMinutes()),
            (this.$s = _.getUTCSeconds()),
            (this.$ms = _.getUTCMilliseconds());
        } else u.call(this);
      };
      var l = i.utcOffset;
      i.utcOffset = function (_, O) {
        var D = this.$utils().u;
        if (D(_)) return this.$u ? 0 : D(this.$offset) ? l.call(this) : this.$offset;
        if (
          typeof _ == 'string' &&
          ((_ = (function (ae) {
            ae === void 0 && (ae = '');
            var ee = ae.match(e);
            if (!ee) return null;
            var re = ('' + ee[0]).match(t) || ['-', 0, 0],
              Y = re[0],
              he = 60 * +re[1] + +re[2];
            return he === 0 ? 0 : Y === '+' ? he : -he;
          })(_)),
          _ === null)
        )
          return this;
        var j = Math.abs(_) <= 16 ? 60 * _ : _,
          G = this;
        if (O) return (G.$offset = j), (G.$u = _ === 0), G;
        if (_ !== 0) {
          var H = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          ((G = this.local().add(j + H, r)).$offset = j), (G.$x.$localOffset = H);
        } else G = this.utc();
        return G;
      };
      var w = i.format;
      (i.format = function (_) {
        var O = _ || (this.$u ? 'YYYY-MM-DDTHH:mm:ss[Z]' : '');
        return w.call(this, O);
      }),
        (i.valueOf = function () {
          var _ = this.$utils().u(this.$offset)
            ? 0
            : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
          return this.$d.valueOf() - 6e4 * _;
        }),
        (i.isUTC = function () {
          return !!this.$u;
        }),
        (i.toISOString = function () {
          return this.toDate().toISOString();
        }),
        (i.toString = function () {
          return this.toDate().toUTCString();
        });
      var x = i.toDate;
      i.toDate = function (_) {
        return _ === 's' && this.$offset
          ? s(this.format('YYYY-MM-DD HH:mm:ss:SSS')).toDate()
          : x.call(this);
      };
      var A = i.diff;
      i.diff = function (_, O, D) {
        if (_ && this.$u === _.$u) return A.call(this, _, O, D);
        var j = this.local(),
          G = s(_).local();
        return A.call(j, G, O, D);
      };
    };
  });
});
var jE = te((Ue) => {
  'use strict';
  f();
  var Ma = Symbol.for('react.element'),
    y6 = Symbol.for('react.portal'),
    g6 = Symbol.for('react.fragment'),
    x6 = Symbol.for('react.strict_mode'),
    b6 = Symbol.for('react.profiler'),
    w6 = Symbol.for('react.provider'),
    v6 = Symbol.for('react.context'),
    S6 = Symbol.for('react.forward_ref'),
    E6 = Symbol.for('react.suspense'),
    _6 = Symbol.for('react.memo'),
    A6 = Symbol.for('react.lazy'),
    BE = Symbol.iterator;
  function R6(r) {
    return r === null || typeof r != 'object'
      ? null
      : ((r = (BE && r[BE]) || r['@@iterator']), typeof r == 'function' ? r : null);
  }
  var LE = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    NE = Object.assign,
    OE = {};
  function li(r, e, t) {
    (this.props = r), (this.context = e), (this.refs = OE), (this.updater = t || LE);
  }
  li.prototype.isReactComponent = {};
  li.prototype.setState = function (r, e) {
    if (typeof r != 'object' && typeof r != 'function' && r != null)
      throw Error(
        'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
      );
    this.updater.enqueueSetState(this, r, e, 'setState');
  };
  li.prototype.forceUpdate = function (r) {
    this.updater.enqueueForceUpdate(this, r, 'forceUpdate');
  };
  function CE() {}
  CE.prototype = li.prototype;
  function Bh(r, e, t) {
    (this.props = r), (this.context = e), (this.refs = OE), (this.updater = t || LE);
  }
  var Mh = (Bh.prototype = new CE());
  Mh.constructor = Bh;
  NE(Mh, li.prototype);
  Mh.isPureReactComponent = !0;
  var ME = Array.isArray,
    qE = Object.prototype.hasOwnProperty,
    zh = { current: null },
    DE = { key: !0, ref: !0, __self: !0, __source: !0 };
  function UE(r, e, t) {
    var n,
      o = {},
      s = null,
      i = null;
    if (e != null)
      for (n in (e.ref !== void 0 && (i = e.ref), e.key !== void 0 && (s = '' + e.key), e))
        qE.call(e, n) && !DE.hasOwnProperty(n) && (o[n] = e[n]);
    var c = arguments.length - 2;
    if (c === 1) o.children = t;
    else if (1 < c) {
      for (var u = Array(c), l = 0; l < c; l++) u[l] = arguments[l + 2];
      o.children = u;
    }
    if (r && r.defaultProps) for (n in ((c = r.defaultProps), c)) o[n] === void 0 && (o[n] = c[n]);
    return { $$typeof: Ma, type: r, key: s, ref: i, props: o, _owner: zh.current };
  }
  function I6(r, e) {
    return { $$typeof: Ma, type: r.type, key: e, ref: r.ref, props: r.props, _owner: r._owner };
  }
  function Lh(r) {
    return typeof r == 'object' && r !== null && r.$$typeof === Ma;
  }
  function k6(r) {
    var e = { '=': '=0', ':': '=2' };
    return (
      '$' +
      r.replace(/[=:]/g, function (t) {
        return e[t];
      })
    );
  }
  var zE = /\/+/g;
  function Ph(r, e) {
    return typeof r == 'object' && r !== null && r.key != null ? k6('' + r.key) : e.toString(36);
  }
  function Ep(r, e, t, n, o) {
    var s = typeof r;
    (s === 'undefined' || s === 'boolean') && (r = null);
    var i = !1;
    if (r === null) i = !0;
    else
      switch (s) {
        case 'string':
        case 'number':
          i = !0;
          break;
        case 'object':
          switch (r.$$typeof) {
            case Ma:
            case y6:
              i = !0;
          }
      }
    if (i)
      return (
        (i = r),
        (o = o(i)),
        (r = n === '' ? '.' + Ph(i, 0) : n),
        ME(o)
          ? ((t = ''),
            r != null && (t = r.replace(zE, '$&/') + '/'),
            Ep(o, e, t, '', function (l) {
              return l;
            }))
          : o != null &&
            (Lh(o) &&
              (o = I6(
                o,
                t +
                  (!o.key || (i && i.key === o.key) ? '' : ('' + o.key).replace(zE, '$&/') + '/') +
                  r
              )),
            e.push(o)),
        1
      );
    if (((i = 0), (n = n === '' ? '.' : n + ':'), ME(r)))
      for (var c = 0; c < r.length; c++) {
        s = r[c];
        var u = n + Ph(s, c);
        i += Ep(s, e, t, u, o);
      }
    else if (((u = R6(r)), typeof u == 'function'))
      for (r = u.call(r), c = 0; !(s = r.next()).done; )
        (s = s.value), (u = n + Ph(s, c++)), (i += Ep(s, e, t, u, o));
    else if (s === 'object')
      throw (
        ((e = String(r)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (e === '[object Object]' ? 'object with keys {' + Object.keys(r).join(', ') + '}' : e) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      );
    return i;
  }
  function Sp(r, e, t) {
    if (r == null) return r;
    var n = [],
      o = 0;
    return (
      Ep(r, n, '', '', function (s) {
        return e.call(t, s, o++);
      }),
      n
    );
  }
  function T6(r) {
    if (r._status === -1) {
      var e = r._result;
      (e = e()),
        e.then(
          function (t) {
            (r._status === 0 || r._status === -1) && ((r._status = 1), (r._result = t));
          },
          function (t) {
            (r._status === 0 || r._status === -1) && ((r._status = 2), (r._result = t));
          }
        ),
        r._status === -1 && ((r._status = 0), (r._result = e));
    }
    if (r._status === 1) return r._result.default;
    throw r._result;
  }
  var mr = { current: null },
    _p = { transition: null },
    P6 = { ReactCurrentDispatcher: mr, ReactCurrentBatchConfig: _p, ReactCurrentOwner: zh };
  function FE() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  Ue.Children = {
    map: Sp,
    forEach: function (r, e, t) {
      Sp(
        r,
        function () {
          e.apply(this, arguments);
        },
        t
      );
    },
    count: function (r) {
      var e = 0;
      return (
        Sp(r, function () {
          e++;
        }),
        e
      );
    },
    toArray: function (r) {
      return (
        Sp(r, function (e) {
          return e;
        }) || []
      );
    },
    only: function (r) {
      if (!Lh(r))
        throw Error('React.Children.only expected to receive a single React element child.');
      return r;
    },
  };
  Ue.Component = li;
  Ue.Fragment = g6;
  Ue.Profiler = b6;
  Ue.PureComponent = Bh;
  Ue.StrictMode = x6;
  Ue.Suspense = E6;
  Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P6;
  Ue.act = FE;
  Ue.cloneElement = function (r, e, t) {
    if (r == null)
      throw Error(
        'React.cloneElement(...): The argument must be a React element, but you passed ' + r + '.'
      );
    var n = NE({}, r.props),
      o = r.key,
      s = r.ref,
      i = r._owner;
    if (e != null) {
      if (
        (e.ref !== void 0 && ((s = e.ref), (i = zh.current)),
        e.key !== void 0 && (o = '' + e.key),
        r.type && r.type.defaultProps)
      )
        var c = r.type.defaultProps;
      for (u in e)
        qE.call(e, u) &&
          !DE.hasOwnProperty(u) &&
          (n[u] = e[u] === void 0 && c !== void 0 ? c[u] : e[u]);
    }
    var u = arguments.length - 2;
    if (u === 1) n.children = t;
    else if (1 < u) {
      c = Array(u);
      for (var l = 0; l < u; l++) c[l] = arguments[l + 2];
      n.children = c;
    }
    return { $$typeof: Ma, type: r.type, key: o, ref: s, props: n, _owner: i };
  };
  Ue.createContext = function (r) {
    return (
      (r = {
        $$typeof: v6,
        _currentValue: r,
        _currentValue2: r,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }),
      (r.Provider = { $$typeof: w6, _context: r }),
      (r.Consumer = r)
    );
  };
  Ue.createElement = UE;
  Ue.createFactory = function (r) {
    var e = UE.bind(null, r);
    return (e.type = r), e;
  };
  Ue.createRef = function () {
    return { current: null };
  };
  Ue.forwardRef = function (r) {
    return { $$typeof: S6, render: r };
  };
  Ue.isValidElement = Lh;
  Ue.lazy = function (r) {
    return { $$typeof: A6, _payload: { _status: -1, _result: r }, _init: T6 };
  };
  Ue.memo = function (r, e) {
    return { $$typeof: _6, type: r, compare: e === void 0 ? null : e };
  };
  Ue.startTransition = function (r) {
    var e = _p.transition;
    _p.transition = {};
    try {
      r();
    } finally {
      _p.transition = e;
    }
  };
  Ue.unstable_act = FE;
  Ue.useCallback = function (r, e) {
    return mr.current.useCallback(r, e);
  };
  Ue.useContext = function (r) {
    return mr.current.useContext(r);
  };
  Ue.useDebugValue = function () {};
  Ue.useDeferredValue = function (r) {
    return mr.current.useDeferredValue(r);
  };
  Ue.useEffect = function (r, e) {
    return mr.current.useEffect(r, e);
  };
  Ue.useId = function () {
    return mr.current.useId();
  };
  Ue.useImperativeHandle = function (r, e, t) {
    return mr.current.useImperativeHandle(r, e, t);
  };
  Ue.useInsertionEffect = function (r, e) {
    return mr.current.useInsertionEffect(r, e);
  };
  Ue.useLayoutEffect = function (r, e) {
    return mr.current.useLayoutEffect(r, e);
  };
  Ue.useMemo = function (r, e) {
    return mr.current.useMemo(r, e);
  };
  Ue.useReducer = function (r, e, t) {
    return mr.current.useReducer(r, e, t);
  };
  Ue.useRef = function (r) {
    return mr.current.useRef(r);
  };
  Ue.useState = function (r) {
    return mr.current.useState(r);
  };
  Ue.useSyncExternalStore = function (r, e, t) {
    return mr.current.useSyncExternalStore(r, e, t);
  };
  Ue.useTransition = function () {
    return mr.current.useTransition();
  };
  Ue.version = '18.3.1';
});
var qn = te((ine, HE) => {
  'use strict';
  f();
  HE.exports = jE();
});
var jh = te((One, $E) => {
  f();
  var j6 = typeof global == 'object' && global && global.Object === Object && global;
  $E.exports = j6;
});
var kp = te((qne, GE) => {
  f();
  var H6 = jh(),
    W6 = typeof self == 'object' && self && self.Object === Object && self,
    K6 = H6 || W6 || Function('return this')();
  GE.exports = K6;
});
var Hh = te((Une, YE) => {
  f();
  var V6 = kp(),
    $6 = V6.Symbol;
  YE.exports = $6;
});
var QE = te((jne, XE) => {
  f();
  var ZE = Hh(),
    JE = Object.prototype,
    G6 = JE.hasOwnProperty,
    Y6 = JE.toString,
    za = ZE ? ZE.toStringTag : void 0;
  function Z6(r) {
    var e = G6.call(r, za),
      t = r[za];
    try {
      r[za] = void 0;
      var n = !0;
    } catch {}
    var o = Y6.call(r);
    return n && (e ? (r[za] = t) : delete r[za]), o;
  }
  XE.exports = Z6;
});
var t_ = te((Wne, e_) => {
  f();
  var J6 = Object.prototype,
    X6 = J6.toString;
  function Q6(r) {
    return X6.call(r);
  }
  e_.exports = Q6;
});
var Tp = te((Vne, o_) => {
  f();
  var r_ = Hh(),
    eC = QE(),
    tC = t_(),
    rC = '[object Null]',
    nC = '[object Undefined]',
    n_ = r_ ? r_.toStringTag : void 0;
  function oC(r) {
    return r == null ? (r === void 0 ? nC : rC) : n_ && n_ in Object(r) ? eC(r) : tC(r);
  }
  o_.exports = oC;
});
var Pp = te((Gne, s_) => {
  f();
  function sC(r) {
    var e = typeof r;
    return r != null && (e == 'object' || e == 'function');
  }
  s_.exports = sC;
});
var Wh = te((Zne, i_) => {
  f();
  var iC = Tp(),
    aC = Pp(),
    cC = '[object AsyncFunction]',
    uC = '[object Function]',
    pC = '[object GeneratorFunction]',
    fC = '[object Proxy]';
  function lC(r) {
    if (!aC(r)) return !1;
    var e = iC(r);
    return e == uC || e == pC || e == cC || e == fC;
  }
  i_.exports = lC;
});
var c_ = te((Xne, a_) => {
  f();
  var dC = kp(),
    hC = dC['__core-js_shared__'];
  a_.exports = hC;
});
var f_ = te((eoe, p_) => {
  f();
  var Kh = c_(),
    u_ = (function () {
      var r = /[^.]+$/.exec((Kh && Kh.keys && Kh.keys.IE_PROTO) || '');
      return r ? 'Symbol(src)_1.' + r : '';
    })();
  function mC(r) {
    return !!u_ && u_ in r;
  }
  p_.exports = mC;
});
var d_ = te((roe, l_) => {
  f();
  var yC = Function.prototype,
    gC = yC.toString;
  function xC(r) {
    if (r != null) {
      try {
        return gC.call(r);
      } catch {}
      try {
        return r + '';
      } catch {}
    }
    return '';
  }
  l_.exports = xC;
});
var m_ = te((ooe, h_) => {
  f();
  var bC = Wh(),
    wC = f_(),
    vC = Pp(),
    SC = d_(),
    EC = /[\\^$.*+?()[\]{}|]/g,
    _C = /^\[object .+?Constructor\]$/,
    AC = Function.prototype,
    RC = Object.prototype,
    IC = AC.toString,
    kC = RC.hasOwnProperty,
    TC = RegExp(
      '^' +
        IC.call(kC)
          .replace(EC, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
        '$'
    );
  function PC(r) {
    if (!vC(r) || wC(r)) return !1;
    var e = bC(r) ? TC : _C;
    return e.test(SC(r));
  }
  h_.exports = PC;
});
var g_ = te((ioe, y_) => {
  f();
  function BC(r, e) {
    return r == null ? void 0 : r[e];
  }
  y_.exports = BC;
});
var b_ = te((coe, x_) => {
  f();
  var MC = m_(),
    zC = g_();
  function LC(r, e) {
    var t = zC(r, e);
    return MC(t) ? t : void 0;
  }
  x_.exports = LC;
});
var Vh = te((poe, w_) => {
  f();
  var NC = b_(),
    OC = (function () {
      try {
        var r = NC(Object, 'defineProperty');
        return r({}, '', {}), r;
      } catch {}
    })();
  w_.exports = OC;
});
var $h = te((loe, S_) => {
  f();
  var v_ = Vh();
  function CC(r, e, t) {
    e == '__proto__' && v_
      ? v_(r, e, { configurable: !0, enumerable: !0, value: t, writable: !0 })
      : (r[e] = t);
  }
  S_.exports = CC;
});
var Gh = te((hoe, E_) => {
  f();
  function qC(r, e) {
    return r === e || (r !== r && e !== e);
  }
  E_.exports = qC;
});
var Yh = te((yoe, __) => {
  f();
  var DC = $h(),
    UC = Gh(),
    FC = Object.prototype,
    jC = FC.hasOwnProperty;
  function HC(r, e, t) {
    var n = r[e];
    (!(jC.call(r, e) && UC(n, t)) || (t === void 0 && !(e in r))) && DC(r, e, t);
  }
  __.exports = HC;
});
var R_ = te((xoe, A_) => {
  f();
  var WC = Yh(),
    KC = $h();
  function VC(r, e, t, n) {
    var o = !t;
    t || (t = {});
    for (var s = -1, i = e.length; ++s < i; ) {
      var c = e[s],
        u = n ? n(t[c], r[c], c, t, r) : void 0;
      u === void 0 && (u = r[c]), o ? KC(t, c, u) : WC(t, c, u);
    }
    return t;
  }
  A_.exports = VC;
});
var Zh = te((woe, I_) => {
  f();
  function $C(r) {
    return r;
  }
  I_.exports = $C;
});
var T_ = te((Soe, k_) => {
  f();
  function GC(r, e, t) {
    switch (t.length) {
      case 0:
        return r.call(e);
      case 1:
        return r.call(e, t[0]);
      case 2:
        return r.call(e, t[0], t[1]);
      case 3:
        return r.call(e, t[0], t[1], t[2]);
    }
    return r.apply(e, t);
  }
  k_.exports = GC;
});
var M_ = te((_oe, B_) => {
  f();
  var YC = T_(),
    P_ = Math.max;
  function ZC(r, e, t) {
    return (
      (e = P_(e === void 0 ? r.length - 1 : e, 0)),
      function () {
        for (var n = arguments, o = -1, s = P_(n.length - e, 0), i = Array(s); ++o < s; )
          i[o] = n[e + o];
        o = -1;
        for (var c = Array(e + 1); ++o < e; ) c[o] = n[o];
        return (c[e] = t(i)), YC(r, this, c);
      }
    );
  }
  B_.exports = ZC;
});
var L_ = te((Roe, z_) => {
  f();
  function JC(r) {
    return function () {
      return r;
    };
  }
  z_.exports = JC;
});
var C_ = te((koe, O_) => {
  f();
  var XC = L_(),
    N_ = Vh(),
    QC = Zh(),
    e4 = N_
      ? function (r, e) {
          return N_(r, 'toString', {
            configurable: !0,
            enumerable: !1,
            value: XC(e),
            writable: !0,
          });
        }
      : QC;
  O_.exports = e4;
});
var D_ = te((Poe, q_) => {
  f();
  var t4 = 800,
    r4 = 16,
    n4 = Date.now;
  function o4(r) {
    var e = 0,
      t = 0;
    return function () {
      var n = n4(),
        o = r4 - (n - t);
      if (((t = n), o > 0)) {
        if (++e >= t4) return arguments[0];
      } else e = 0;
      return r.apply(void 0, arguments);
    };
  }
  q_.exports = o4;
});
var F_ = te((Moe, U_) => {
  f();
  var s4 = C_(),
    i4 = D_(),
    a4 = i4(s4);
  U_.exports = a4;
});
var H_ = te((Loe, j_) => {
  f();
  var c4 = Zh(),
    u4 = M_(),
    p4 = F_();
  function f4(r, e) {
    return p4(u4(r, e, c4), r + '');
  }
  j_.exports = f4;
});
var Jh = te((Ooe, W_) => {
  f();
  var l4 = 9007199254740991;
  function d4(r) {
    return typeof r == 'number' && r > -1 && r % 1 == 0 && r <= l4;
  }
  W_.exports = d4;
});
var Bp = te((qoe, K_) => {
  f();
  var h4 = Wh(),
    m4 = Jh();
  function y4(r) {
    return r != null && m4(r.length) && !h4(r);
  }
  K_.exports = y4;
});
var Xh = te((Uoe, V_) => {
  f();
  var g4 = 9007199254740991,
    x4 = /^(?:0|[1-9]\d*)$/;
  function b4(r, e) {
    var t = typeof r;
    return (
      (e = e == null ? g4 : e),
      !!e && (t == 'number' || (t != 'symbol' && x4.test(r))) && r > -1 && r % 1 == 0 && r < e
    );
  }
  V_.exports = b4;
});
var G_ = te((joe, $_) => {
  f();
  var w4 = Gh(),
    v4 = Bp(),
    S4 = Xh(),
    E4 = Pp();
  function _4(r, e, t) {
    if (!E4(t)) return !1;
    var n = typeof e;
    return (n == 'number' ? v4(t) && S4(e, t.length) : n == 'string' && e in t) ? w4(t[e], r) : !1;
  }
  $_.exports = _4;
});
var Z_ = te((Woe, Y_) => {
  f();
  var A4 = H_(),
    R4 = G_();
  function I4(r) {
    return A4(function (e, t) {
      var n = -1,
        o = t.length,
        s = o > 1 ? t[o - 1] : void 0,
        i = o > 2 ? t[2] : void 0;
      for (
        s = r.length > 3 && typeof s == 'function' ? (o--, s) : void 0,
          i && R4(t[0], t[1], i) && ((s = o < 3 ? void 0 : s), (o = 1)),
          e = Object(e);
        ++n < o;

      ) {
        var c = t[n];
        c && r(e, c, n, s);
      }
      return e;
    });
  }
  Y_.exports = I4;
});
var Qh = te((Voe, J_) => {
  f();
  var k4 = Object.prototype;
  function T4(r) {
    var e = r && r.constructor,
      t = (typeof e == 'function' && e.prototype) || k4;
    return r === t;
  }
  J_.exports = T4;
});
var Q_ = te((Goe, X_) => {
  f();
  function P4(r, e) {
    for (var t = -1, n = Array(r); ++t < r; ) n[t] = e(t);
    return n;
  }
  X_.exports = P4;
});
var Mp = te((Zoe, eA) => {
  f();
  function B4(r) {
    return r != null && typeof r == 'object';
  }
  eA.exports = B4;
});
var rA = te((Xoe, tA) => {
  f();
  var M4 = Tp(),
    z4 = Mp(),
    L4 = '[object Arguments]';
  function N4(r) {
    return z4(r) && M4(r) == L4;
  }
  tA.exports = N4;
});
var iA = te((ese, sA) => {
  f();
  var nA = rA(),
    O4 = Mp(),
    oA = Object.prototype,
    C4 = oA.hasOwnProperty,
    q4 = oA.propertyIsEnumerable,
    D4 = nA(
      (function () {
        return arguments;
      })()
    )
      ? nA
      : function (r) {
          return O4(r) && C4.call(r, 'callee') && !q4.call(r, 'callee');
        };
  sA.exports = D4;
});
var cA = te((rse, aA) => {
  f();
  var U4 = Array.isArray;
  aA.exports = U4;
});
var pA = te((ose, uA) => {
  f();
  function F4() {
    return !1;
  }
  uA.exports = F4;
});
var hA = te((La, hi) => {
  f();
  var j4 = kp(),
    H4 = pA(),
    dA = typeof La == 'object' && La && !La.nodeType && La,
    fA = dA && typeof hi == 'object' && hi && !hi.nodeType && hi,
    W4 = fA && fA.exports === dA,
    lA = W4 ? j4.Buffer : void 0,
    K4 = lA ? lA.isBuffer : void 0,
    V4 = K4 || H4;
  hi.exports = V4;
});
var yA = te((ase, mA) => {
  f();
  var $4 = Tp(),
    G4 = Jh(),
    Y4 = Mp(),
    Z4 = '[object Arguments]',
    J4 = '[object Array]',
    X4 = '[object Boolean]',
    Q4 = '[object Date]',
    eq = '[object Error]',
    tq = '[object Function]',
    rq = '[object Map]',
    nq = '[object Number]',
    oq = '[object Object]',
    sq = '[object RegExp]',
    iq = '[object Set]',
    aq = '[object String]',
    cq = '[object WeakMap]',
    uq = '[object ArrayBuffer]',
    pq = '[object DataView]',
    fq = '[object Float32Array]',
    lq = '[object Float64Array]',
    dq = '[object Int8Array]',
    hq = '[object Int16Array]',
    mq = '[object Int32Array]',
    yq = '[object Uint8Array]',
    gq = '[object Uint8ClampedArray]',
    xq = '[object Uint16Array]',
    bq = '[object Uint32Array]',
    Nt = {};
  Nt[fq] = Nt[lq] = Nt[dq] = Nt[hq] = Nt[mq] = Nt[yq] = Nt[gq] = Nt[xq] = Nt[bq] = !0;
  Nt[Z4] =
    Nt[J4] =
    Nt[uq] =
    Nt[X4] =
    Nt[pq] =
    Nt[Q4] =
    Nt[eq] =
    Nt[tq] =
    Nt[rq] =
    Nt[nq] =
    Nt[oq] =
    Nt[sq] =
    Nt[iq] =
    Nt[aq] =
    Nt[cq] =
      !1;
  function wq(r) {
    return Y4(r) && G4(r.length) && !!Nt[$4(r)];
  }
  mA.exports = wq;
});
var xA = te((use, gA) => {
  f();
  function vq(r) {
    return function (e) {
      return r(e);
    };
  }
  gA.exports = vq;
});
var wA = te((Na, mi) => {
  f();
  var Sq = jh(),
    bA = typeof Na == 'object' && Na && !Na.nodeType && Na,
    Oa = bA && typeof mi == 'object' && mi && !mi.nodeType && mi,
    Eq = Oa && Oa.exports === bA,
    em = Eq && Sq.process,
    _q = (function () {
      try {
        var r = Oa && Oa.require && Oa.require('util').types;
        return r || (em && em.binding && em.binding('util'));
      } catch {}
    })();
  mi.exports = _q;
});
var _A = te((lse, EA) => {
  f();
  var Aq = yA(),
    Rq = xA(),
    vA = wA(),
    SA = vA && vA.isTypedArray,
    Iq = SA ? Rq(SA) : Aq;
  EA.exports = Iq;
});
var RA = te((hse, AA) => {
  f();
  var kq = Q_(),
    Tq = iA(),
    Pq = cA(),
    Bq = hA(),
    Mq = Xh(),
    zq = _A(),
    Lq = Object.prototype,
    Nq = Lq.hasOwnProperty;
  function Oq(r, e) {
    var t = Pq(r),
      n = !t && Tq(r),
      o = !t && !n && Bq(r),
      s = !t && !n && !o && zq(r),
      i = t || n || o || s,
      c = i ? kq(r.length, String) : [],
      u = c.length;
    for (var l in r)
      (e || Nq.call(r, l)) &&
        !(
          i &&
          (l == 'length' ||
            (o && (l == 'offset' || l == 'parent')) ||
            (s && (l == 'buffer' || l == 'byteLength' || l == 'byteOffset')) ||
            Mq(l, u))
        ) &&
        c.push(l);
    return c;
  }
  AA.exports = Oq;
});
var kA = te((yse, IA) => {
  f();
  function Cq(r, e) {
    return function (t) {
      return r(e(t));
    };
  }
  IA.exports = Cq;
});
var PA = te((xse, TA) => {
  f();
  var qq = kA(),
    Dq = qq(Object.keys, Object);
  TA.exports = Dq;
});
var MA = te((wse, BA) => {
  f();
  var Uq = Qh(),
    Fq = PA(),
    jq = Object.prototype,
    Hq = jq.hasOwnProperty;
  function Wq(r) {
    if (!Uq(r)) return Fq(r);
    var e = [];
    for (var t in Object(r)) Hq.call(r, t) && t != 'constructor' && e.push(t);
    return e;
  }
  BA.exports = Wq;
});
var LA = te((Sse, zA) => {
  f();
  var Kq = RA(),
    Vq = MA(),
    $q = Bp();
  function Gq(r) {
    return $q(r) ? Kq(r) : Vq(r);
  }
  zA.exports = Gq;
});
var OA = te((_se, NA) => {
  f();
  var Yq = Yh(),
    Zq = R_(),
    Jq = Z_(),
    Xq = Bp(),
    Qq = Qh(),
    eD = LA(),
    tD = Object.prototype,
    rD = tD.hasOwnProperty,
    nD = Jq(function (r, e) {
      if (Qq(e) || Xq(e)) {
        Zq(e, eD(e), r);
        return;
      }
      for (var t in e) rD.call(e, t) && Yq(r, t, e[t]);
    });
  NA.exports = nD;
});
var qA = te((CA, zp) => {
  f();
  (function (r, e) {
    typeof define == 'function' && define.amd
      ? define(e)
      : typeof zp == 'object' && zp.exports
        ? (zp.exports = e())
        : (r.numeral = e());
  })(CA, function () {
    var r,
      e,
      t = '2.0.6',
      n = {},
      o = {},
      s = {
        currentLocale: 'en',
        zeroFormat: null,
        nullFormat: null,
        defaultFormat: '0,0',
        scalePercentBy100: !0,
      },
      i = {
        currentLocale: s.currentLocale,
        zeroFormat: s.zeroFormat,
        nullFormat: s.nullFormat,
        defaultFormat: s.defaultFormat,
        scalePercentBy100: s.scalePercentBy100,
      };
    function c(u, l) {
      (this._input = u), (this._value = l);
    }
    return (
      (r = function (u) {
        var l, w, x, A;
        if (r.isNumeral(u)) l = u.value();
        else if (u === 0 || typeof u > 'u') l = 0;
        else if (u === null || e.isNaN(u)) l = null;
        else if (typeof u == 'string')
          if (i.zeroFormat && u === i.zeroFormat) l = 0;
          else if ((i.nullFormat && u === i.nullFormat) || !u.replace(/[^0-9]+/g, '').length)
            l = null;
          else {
            for (w in n)
              if (
                ((A =
                  typeof n[w].regexps.unformat == 'function'
                    ? n[w].regexps.unformat()
                    : n[w].regexps.unformat),
                A && u.match(A))
              ) {
                x = n[w].unformat;
                break;
              }
            (x = x || r._.stringToNumber), (l = x(u));
          }
        else l = Number(u) || null;
        return new c(u, l);
      }),
      (r.version = t),
      (r.isNumeral = function (u) {
        return u instanceof c;
      }),
      (r._ = e =
        {
          numberToFormat: function (u, l, w) {
            var x = o[r.options.currentLocale],
              A = !1,
              _ = !1,
              O = 0,
              D = '',
              j = 1e12,
              G = 1e9,
              H = 1e6,
              ae = 1e3,
              ee = '',
              re = !1,
              Y,
              he,
              R,
              P,
              C,
              U,
              T,
              y,
              p,
              d;
            if (
              ((u = u || 0),
              (he = Math.abs(u)),
              r._.includes(l, '(')
                ? ((A = !0), (l = l.replace(/[\(|\)]/g, '')))
                : (r._.includes(l, '+') || r._.includes(l, '-')) &&
                  ((y = r._.includes(l, '+') ? l.indexOf('+') : u < 0 ? l.indexOf('-') : -1),
                  (l = l.replace(/[\+|\-]/g, ''))),
              r._.includes(l, 'a') &&
                ((Y = l.match(/a(k|m|b|t)?/)),
                (Y = Y ? Y[1] : !1),
                r._.includes(l, ' a') && (D = ' '),
                (l = l.replace(new RegExp(D + 'a[kmbt]?'), '')),
                (he >= j && !Y) || Y === 't'
                  ? ((D += x.abbreviations.trillion), (u = u / j))
                  : (he < j && he >= G && !Y) || Y === 'b'
                    ? ((D += x.abbreviations.billion), (u = u / G))
                    : (he < G && he >= H && !Y) || Y === 'm'
                      ? ((D += x.abbreviations.million), (u = u / H))
                      : ((he < H && he >= ae && !Y) || Y === 'k') &&
                        ((D += x.abbreviations.thousand), (u = u / ae))),
              r._.includes(l, '[.]') && ((_ = !0), (l = l.replace('[.]', '.'))),
              (U = u.toString().split('.')[0]),
              (T = l.split('.')[1]),
              (p = l.indexOf(',')),
              (O = (l.split('.')[0].split(',')[0].match(/0/g) || []).length),
              T
                ? (r._.includes(T, '[')
                    ? ((T = T.replace(']', '')),
                      (T = T.split('[')),
                      (ee = r._.toFixed(u, T[0].length + T[1].length, w, T[1].length)))
                    : (ee = r._.toFixed(u, T.length, w)),
                  (U = ee.split('.')[0]),
                  r._.includes(ee, '.')
                    ? (ee = x.delimiters.decimal + ee.split('.')[1])
                    : (ee = ''),
                  _ && Number(ee.slice(1)) === 0 && (ee = ''))
                : (U = r._.toFixed(u, 0, w)),
              D && !Y && Number(U) >= 1e3 && D !== x.abbreviations.trillion)
            )
              switch (((U = String(Number(U) / 1e3)), D)) {
                case x.abbreviations.thousand:
                  D = x.abbreviations.million;
                  break;
                case x.abbreviations.million:
                  D = x.abbreviations.billion;
                  break;
                case x.abbreviations.billion:
                  D = x.abbreviations.trillion;
                  break;
              }
            if ((r._.includes(U, '-') && ((U = U.slice(1)), (re = !0)), U.length < O))
              for (var h = O - U.length; h > 0; h--) U = '0' + U;
            return (
              p > -1 &&
                (U = U.toString().replace(
                  /(\d)(?=(\d{3})+(?!\d))/g,
                  '$1' + x.delimiters.thousands
                )),
              l.indexOf('.') === 0 && (U = ''),
              (d = U + ee + (D || '')),
              A
                ? (d = (A && re ? '(' : '') + d + (A && re ? ')' : ''))
                : y >= 0
                  ? (d = y === 0 ? (re ? '-' : '+') + d : d + (re ? '-' : '+'))
                  : re && (d = '-' + d),
              d
            );
          },
          stringToNumber: function (u) {
            var l = o[i.currentLocale],
              w = u,
              x = { thousand: 3, million: 6, billion: 9, trillion: 12 },
              A,
              _,
              O,
              D;
            if (i.zeroFormat && u === i.zeroFormat) _ = 0;
            else if ((i.nullFormat && u === i.nullFormat) || !u.replace(/[^0-9]+/g, '').length)
              _ = null;
            else {
              (_ = 1),
                l.delimiters.decimal !== '.' &&
                  (u = u.replace(/\./g, '').replace(l.delimiters.decimal, '.'));
              for (A in x)
                if (
                  ((D = new RegExp(
                    '[^a-zA-Z]' +
                      l.abbreviations[A] +
                      '(?:\\)|(\\' +
                      l.currency.symbol +
                      ')?(?:\\))?)?$'
                  )),
                  w.match(D))
                ) {
                  _ *= Math.pow(10, x[A]);
                  break;
                }
              (_ *=
                (u.split('-').length + Math.min(u.split('(').length - 1, u.split(')').length - 1)) %
                2
                  ? 1
                  : -1),
                (u = u.replace(/[^0-9\.]+/g, '')),
                (_ *= Number(u));
            }
            return _;
          },
          isNaN: function (u) {
            return typeof u == 'number' && isNaN(u);
          },
          includes: function (u, l) {
            return u.indexOf(l) !== -1;
          },
          insert: function (u, l, w) {
            return u.slice(0, w) + l + u.slice(w);
          },
          reduce: function (u, l) {
            if (this === null)
              throw new TypeError('Array.prototype.reduce called on null or undefined');
            if (typeof l != 'function') throw new TypeError(l + ' is not a function');
            var w = Object(u),
              x = w.length >>> 0,
              A = 0,
              _;
            if (arguments.length === 3) _ = arguments[2];
            else {
              for (; A < x && !(A in w); ) A++;
              if (A >= x) throw new TypeError('Reduce of empty array with no initial value');
              _ = w[A++];
            }
            for (; A < x; A++) A in w && (_ = l(_, w[A], A, w));
            return _;
          },
          multiplier: function (u) {
            var l = u.toString().split('.');
            return l.length < 2 ? 1 : Math.pow(10, l[1].length);
          },
          correctionFactor: function () {
            var u = Array.prototype.slice.call(arguments);
            return u.reduce(function (l, w) {
              var x = e.multiplier(w);
              return l > x ? l : x;
            }, 1);
          },
          toFixed: function (u, l, w, x) {
            var A = u.toString().split('.'),
              _ = l - (x || 0),
              O,
              D,
              j,
              G;
            return (
              A.length === 2 ? (O = Math.min(Math.max(A[1].length, _), l)) : (O = _),
              (j = Math.pow(10, O)),
              (G = (w(u + 'e+' + O) / j).toFixed(O)),
              x > l - O &&
                ((D = new RegExp('\\.?0{1,' + (x - (l - O)) + '}$')), (G = G.replace(D, ''))),
              G
            );
          },
        }),
      (r.options = i),
      (r.formats = n),
      (r.locales = o),
      (r.locale = function (u) {
        return u && (i.currentLocale = u.toLowerCase()), i.currentLocale;
      }),
      (r.localeData = function (u) {
        if (!u) return o[i.currentLocale];
        if (((u = u.toLowerCase()), !o[u])) throw new Error('Unknown locale : ' + u);
        return o[u];
      }),
      (r.reset = function () {
        for (var u in s) i[u] = s[u];
      }),
      (r.zeroFormat = function (u) {
        i.zeroFormat = typeof u == 'string' ? u : null;
      }),
      (r.nullFormat = function (u) {
        i.nullFormat = typeof u == 'string' ? u : null;
      }),
      (r.defaultFormat = function (u) {
        i.defaultFormat = typeof u == 'string' ? u : '0.0';
      }),
      (r.register = function (u, l, w) {
        if (((l = l.toLowerCase()), this[u + 's'][l]))
          throw new TypeError(l + ' ' + u + ' already registered.');
        return (this[u + 's'][l] = w), w;
      }),
      (r.validate = function (u, l) {
        var w, x, A, _, O, D, j, G;
        if (
          (typeof u != 'string' &&
            ((u += ''),
            console.warn &&
              console.warn('Numeral.js: Value is not string. It has been co-erced to: ', u)),
          (u = u.trim()),
          u.match(/^\d+$/))
        )
          return !0;
        if (u === '') return !1;
        try {
          j = r.localeData(l);
        } catch {
          j = r.localeData(r.locale());
        }
        return (
          (A = j.currency.symbol),
          (O = j.abbreviations),
          (w = j.delimiters.decimal),
          j.delimiters.thousands === '.' ? (x = '\\.') : (x = j.delimiters.thousands),
          (G = u.match(/^[^\d]+/)),
          (G !== null && ((u = u.substr(1)), G[0] !== A)) ||
          ((G = u.match(/[^\d]+$/)),
          G !== null &&
            ((u = u.slice(0, -1)),
            G[0] !== O.thousand && G[0] !== O.million && G[0] !== O.billion && G[0] !== O.trillion))
            ? !1
            : ((D = new RegExp(x + '{2}')),
              u.match(/[^\d.,]/g)
                ? !1
                : ((_ = u.split(w)),
                  _.length > 2
                    ? !1
                    : _.length < 2
                      ? !!_[0].match(/^\d+.*\d$/) && !_[0].match(D)
                      : _[0].length === 1
                        ? !!_[0].match(/^\d+$/) && !_[0].match(D) && !!_[1].match(/^\d+$/)
                        : !!_[0].match(/^\d+.*\d$/) && !_[0].match(D) && !!_[1].match(/^\d+$/)))
        );
      }),
      (r.fn = c.prototype =
        {
          clone: function () {
            return r(this);
          },
          format: function (u, l) {
            var w = this._value,
              x = u || i.defaultFormat,
              A,
              _,
              O;
            if (((l = l || Math.round), w === 0 && i.zeroFormat !== null)) _ = i.zeroFormat;
            else if (w === null && i.nullFormat !== null) _ = i.nullFormat;
            else {
              for (A in n)
                if (x.match(n[A].regexps.format)) {
                  O = n[A].format;
                  break;
                }
              (O = O || r._.numberToFormat), (_ = O(w, x, l));
            }
            return _;
          },
          value: function () {
            return this._value;
          },
          input: function () {
            return this._input;
          },
          set: function (u) {
            return (this._value = Number(u)), this;
          },
          add: function (u) {
            var l = e.correctionFactor.call(null, this._value, u);
            function w(x, A, _, O) {
              return x + Math.round(l * A);
            }
            return (this._value = e.reduce([this._value, u], w, 0) / l), this;
          },
          subtract: function (u) {
            var l = e.correctionFactor.call(null, this._value, u);
            function w(x, A, _, O) {
              return x - Math.round(l * A);
            }
            return (this._value = e.reduce([u], w, Math.round(this._value * l)) / l), this;
          },
          multiply: function (u) {
            function l(w, x, A, _) {
              var O = e.correctionFactor(w, x);
              return (Math.round(w * O) * Math.round(x * O)) / Math.round(O * O);
            }
            return (this._value = e.reduce([this._value, u], l, 1)), this;
          },
          divide: function (u) {
            function l(w, x, A, _) {
              var O = e.correctionFactor(w, x);
              return Math.round(w * O) / Math.round(x * O);
            }
            return (this._value = e.reduce([this._value, u], l)), this;
          },
          difference: function (u) {
            return Math.abs(r(this._value).subtract(u).value());
          },
        }),
      r.register('locale', 'en', {
        delimiters: { thousands: ',', decimal: '.' },
        abbreviations: { thousand: 'k', million: 'm', billion: 'b', trillion: 't' },
        ordinal: function (u) {
          var l = u % 10;
          return ~~((u % 100) / 10) === 1
            ? 'th'
            : l === 1
              ? 'st'
              : l === 2
                ? 'nd'
                : l === 3
                  ? 'rd'
                  : 'th';
        },
        currency: { symbol: '$' },
      }),
      (function () {
        r.register('format', 'bps', {
          regexps: { format: /(BPS)/, unformat: /(BPS)/ },
          format: function (u, l, w) {
            var x = r._.includes(l, ' BPS') ? ' ' : '',
              A;
            return (
              (u = u * 1e4),
              (l = l.replace(/\s?BPS/, '')),
              (A = r._.numberToFormat(u, l, w)),
              r._.includes(A, ')')
                ? ((A = A.split('')), A.splice(-1, 0, x + 'BPS'), (A = A.join('')))
                : (A = A + x + 'BPS'),
              A
            );
          },
          unformat: function (u) {
            return +(r._.stringToNumber(u) * 1e-4).toFixed(15);
          },
        });
      })(),
      (function () {
        var u = { base: 1e3, suffixes: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] },
          l = {
            base: 1024,
            suffixes: ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'],
          },
          w = u.suffixes.concat(
            l.suffixes.filter(function (A) {
              return u.suffixes.indexOf(A) < 0;
            })
          ),
          x = w.join('|');
        (x = '(' + x.replace('B', 'B(?!PS)') + ')'),
          r.register('format', 'bytes', {
            regexps: { format: /([0\s]i?b)/, unformat: new RegExp(x) },
            format: function (A, _, O) {
              var D,
                j = r._.includes(_, 'ib') ? l : u,
                G = r._.includes(_, ' b') || r._.includes(_, ' ib') ? ' ' : '',
                H,
                ae,
                ee;
              for (_ = _.replace(/\s?i?b/, ''), H = 0; H <= j.suffixes.length; H++)
                if (
                  ((ae = Math.pow(j.base, H)),
                  (ee = Math.pow(j.base, H + 1)),
                  A === null || A === 0 || (A >= ae && A < ee))
                ) {
                  (G += j.suffixes[H]), ae > 0 && (A = A / ae);
                  break;
                }
              return (D = r._.numberToFormat(A, _, O)), D + G;
            },
            unformat: function (A) {
              var _ = r._.stringToNumber(A),
                O,
                D;
              if (_) {
                for (O = u.suffixes.length - 1; O >= 0; O--) {
                  if (r._.includes(A, u.suffixes[O])) {
                    D = Math.pow(u.base, O);
                    break;
                  }
                  if (r._.includes(A, l.suffixes[O])) {
                    D = Math.pow(l.base, O);
                    break;
                  }
                }
                _ *= D || 1;
              }
              return _;
            },
          });
      })(),
      (function () {
        r.register('format', 'currency', {
          regexps: { format: /(\$)/ },
          format: function (u, l, w) {
            var x = r.locales[r.options.currentLocale],
              A = {
                before: l.match(/^([\+|\-|\(|\s|\$]*)/)[0],
                after: l.match(/([\+|\-|\)|\s|\$]*)$/)[0],
              },
              _,
              O,
              D;
            for (
              l = l.replace(/\s?\$\s?/, ''),
                _ = r._.numberToFormat(u, l, w),
                u >= 0
                  ? ((A.before = A.before.replace(/[\-\(]/, '')),
                    (A.after = A.after.replace(/[\-\)]/, '')))
                  : u < 0 &&
                    !r._.includes(A.before, '-') &&
                    !r._.includes(A.before, '(') &&
                    (A.before = '-' + A.before),
                D = 0;
              D < A.before.length;
              D++
            )
              switch (((O = A.before[D]), O)) {
                case '$':
                  _ = r._.insert(_, x.currency.symbol, D);
                  break;
                case ' ':
                  _ = r._.insert(_, ' ', D + x.currency.symbol.length - 1);
                  break;
              }
            for (D = A.after.length - 1; D >= 0; D--)
              switch (((O = A.after[D]), O)) {
                case '$':
                  _ =
                    D === A.after.length - 1
                      ? _ + x.currency.symbol
                      : r._.insert(_, x.currency.symbol, -(A.after.length - (1 + D)));
                  break;
                case ' ':
                  _ =
                    D === A.after.length - 1
                      ? _ + ' '
                      : r._.insert(
                          _,
                          ' ',
                          -(A.after.length - (1 + D) + x.currency.symbol.length - 1)
                        );
                  break;
              }
            return _;
          },
        });
      })(),
      (function () {
        r.register('format', 'exponential', {
          regexps: { format: /(e\+|e-)/, unformat: /(e\+|e-)/ },
          format: function (u, l, w) {
            var x,
              A = typeof u == 'number' && !r._.isNaN(u) ? u.toExponential() : '0e+0',
              _ = A.split('e');
            return (
              (l = l.replace(/e[\+|\-]{1}0/, '')),
              (x = r._.numberToFormat(Number(_[0]), l, w)),
              x + 'e' + _[1]
            );
          },
          unformat: function (u) {
            var l = r._.includes(u, 'e+') ? u.split('e+') : u.split('e-'),
              w = Number(l[0]),
              x = Number(l[1]);
            x = r._.includes(u, 'e-') ? (x *= -1) : x;
            function A(_, O, D, j) {
              var G = r._.correctionFactor(_, O),
                H = (_ * G * (O * G)) / (G * G);
              return H;
            }
            return r._.reduce([w, Math.pow(10, x)], A, 1);
          },
        });
      })(),
      (function () {
        r.register('format', 'ordinal', {
          regexps: { format: /(o)/ },
          format: function (u, l, w) {
            var x = r.locales[r.options.currentLocale],
              A,
              _ = r._.includes(l, ' o') ? ' ' : '';
            return (
              (l = l.replace(/\s?o/, '')),
              (_ += x.ordinal(u)),
              (A = r._.numberToFormat(u, l, w)),
              A + _
            );
          },
        });
      })(),
      (function () {
        r.register('format', 'percentage', {
          regexps: { format: /(%)/, unformat: /(%)/ },
          format: function (u, l, w) {
            var x = r._.includes(l, ' %') ? ' ' : '',
              A;
            return (
              r.options.scalePercentBy100 && (u = u * 100),
              (l = l.replace(/\s?\%/, '')),
              (A = r._.numberToFormat(u, l, w)),
              r._.includes(A, ')')
                ? ((A = A.split('')), A.splice(-1, 0, x + '%'), (A = A.join('')))
                : (A = A + x + '%'),
              A
            );
          },
          unformat: function (u) {
            var l = r._.stringToNumber(u);
            return r.options.scalePercentBy100 ? l * 0.01 : l;
          },
        });
      })(),
      (function () {
        r.register('format', 'time', {
          regexps: { format: /(:)/, unformat: /(:)/ },
          format: function (u, l, w) {
            var x = Math.floor(u / 60 / 60),
              A = Math.floor((u - x * 60 * 60) / 60),
              _ = Math.round(u - x * 60 * 60 - A * 60);
            return x + ':' + (A < 10 ? '0' + A : A) + ':' + (_ < 10 ? '0' + _ : _);
          },
          unformat: function (u) {
            var l = u.split(':'),
              w = 0;
            return (
              l.length === 3
                ? ((w = w + Number(l[0]) * 60 * 60),
                  (w = w + Number(l[1]) * 60),
                  (w = w + Number(l[2])))
                : l.length === 2 && ((w = w + Number(l[0]) * 60), (w = w + Number(l[1]))),
              Number(w)
            );
          },
        });
      })(),
      r
    );
  });
});
var wi = te((K) => {
  'use strict';
  f();
  Object.defineProperty(K, '__esModule', { value: !0 });
  K.s16 =
    K.s8 =
    K.nu64be =
    K.u48be =
    K.u40be =
    K.u32be =
    K.u24be =
    K.u16be =
    K.nu64 =
    K.u48 =
    K.u40 =
    K.u32 =
    K.u24 =
    K.u16 =
    K.u8 =
    K.offset =
    K.greedy =
    K.Constant =
    K.UTF8 =
    K.CString =
    K.Blob =
    K.Boolean =
    K.BitField =
    K.BitStructure =
    K.VariantLayout =
    K.Union =
    K.UnionLayoutDiscriminator =
    K.UnionDiscriminator =
    K.Structure =
    K.Sequence =
    K.DoubleBE =
    K.Double =
    K.FloatBE =
    K.Float =
    K.NearInt64BE =
    K.NearInt64 =
    K.NearUInt64BE =
    K.NearUInt64 =
    K.IntBE =
    K.Int =
    K.UIntBE =
    K.UInt =
    K.OffsetLayout =
    K.GreedyCount =
    K.ExternalLayout =
    K.bindConstructorLayout =
    K.nameWithProperty =
    K.Layout =
    K.uint8ArrayToBuffer =
    K.checkUint8Array =
      void 0;
  K.constant =
    K.utf8 =
    K.cstr =
    K.blob =
    K.unionLayoutDiscriminator =
    K.union =
    K.seq =
    K.bits =
    K.struct =
    K.f64be =
    K.f64 =
    K.f32be =
    K.f32 =
    K.ns64be =
    K.s48be =
    K.s40be =
    K.s32be =
    K.s24be =
    K.s16be =
    K.ns64 =
    K.s48 =
    K.s40 =
    K.s32 =
    K.s24 =
      void 0;
  var hy = ss();
  function bi(r) {
    if (!(r instanceof Uint8Array)) throw new TypeError('b must be a Uint8Array');
  }
  K.checkUint8Array = bi;
  function Ge(r) {
    return bi(r), hy.Buffer.from(r.buffer, r.byteOffset, r.length);
  }
  K.uint8ArrayToBuffer = Ge;
  var Xe = class {
    constructor(e, t) {
      if (!Number.isInteger(e)) throw new TypeError('span must be an integer');
      (this.span = e), (this.property = t);
    }
    makeDestinationObject() {
      return {};
    }
    getSpan(e, t) {
      if (0 > this.span) throw new RangeError('indeterminate span');
      return this.span;
    }
    replicate(e) {
      let t = Object.create(this.constructor.prototype);
      return Object.assign(t, this), (t.property = e), t;
    }
    fromArray(e) {}
  };
  K.Layout = Xe;
  function my(r, e) {
    return e.property ? r + '[' + e.property + ']' : r;
  }
  K.nameWithProperty = my;
  function uF(r, e) {
    if (typeof r != 'function') throw new TypeError('Class must be constructor');
    if (Object.prototype.hasOwnProperty.call(r, 'layout_'))
      throw new Error('Class is already bound to a layout');
    if (!(e && e instanceof Xe)) throw new TypeError('layout must be a Layout');
    if (Object.prototype.hasOwnProperty.call(e, 'boundConstructor_'))
      throw new Error('layout is already bound to a constructor');
    (r.layout_ = e),
      (e.boundConstructor_ = r),
      (e.makeDestinationObject = () => new r()),
      Object.defineProperty(r.prototype, 'encode', {
        value(t, n) {
          return e.encode(this, t, n);
        },
        writable: !0,
      }),
      Object.defineProperty(r, 'decode', {
        value(t, n) {
          return e.decode(t, n);
        },
        writable: !0,
      });
  }
  K.bindConstructorLayout = uF;
  var sr = class extends Xe {
    isCount() {
      throw new Error('ExternalLayout is abstract');
    }
  };
  K.ExternalLayout = sr;
  var $p = class extends sr {
    constructor(e = 1, t) {
      if (!Number.isInteger(e) || 0 >= e)
        throw new TypeError('elementSpan must be a (positive) integer');
      super(-1, t), (this.elementSpan = e);
    }
    isCount() {
      return !0;
    }
    decode(e, t = 0) {
      bi(e);
      let n = e.length - t;
      return Math.floor(n / this.elementSpan);
    }
    encode(e, t, n) {
      return 0;
    }
  };
  K.GreedyCount = $p;
  var qa = class extends sr {
    constructor(e, t = 0, n) {
      if (!(e instanceof Xe)) throw new TypeError('layout must be a Layout');
      if (!Number.isInteger(t)) throw new TypeError('offset must be integer or undefined');
      super(e.span, n || e.property), (this.layout = e), (this.offset = t);
    }
    isCount() {
      return this.layout instanceof Ar || this.layout instanceof Pr;
    }
    decode(e, t = 0) {
      return this.layout.decode(e, t + this.offset);
    }
    encode(e, t, n = 0) {
      return this.layout.encode(e, t, n + this.offset);
    }
  };
  K.OffsetLayout = qa;
  var Ar = class extends Xe {
    constructor(e, t) {
      if ((super(e, t), 6 < this.span)) throw new RangeError('span must not exceed 6 bytes');
    }
    decode(e, t = 0) {
      return Ge(e).readUIntLE(t, this.span);
    }
    encode(e, t, n = 0) {
      return Ge(t).writeUIntLE(e, n, this.span), this.span;
    }
  };
  K.UInt = Ar;
  var Pr = class extends Xe {
    constructor(e, t) {
      if ((super(e, t), 6 < this.span)) throw new RangeError('span must not exceed 6 bytes');
    }
    decode(e, t = 0) {
      return Ge(e).readUIntBE(t, this.span);
    }
    encode(e, t, n = 0) {
      return Ge(t).writeUIntBE(e, n, this.span), this.span;
    }
  };
  K.UIntBE = Pr;
  var Un = class extends Xe {
    constructor(e, t) {
      if ((super(e, t), 6 < this.span)) throw new RangeError('span must not exceed 6 bytes');
    }
    decode(e, t = 0) {
      return Ge(e).readIntLE(t, this.span);
    }
    encode(e, t, n = 0) {
      return Ge(t).writeIntLE(e, n, this.span), this.span;
    }
  };
  K.Int = Un;
  var po = class extends Xe {
    constructor(e, t) {
      if ((super(e, t), 6 < this.span)) throw new RangeError('span must not exceed 6 bytes');
    }
    decode(e, t = 0) {
      return Ge(e).readIntBE(t, this.span);
    }
    encode(e, t, n = 0) {
      return Ge(t).writeIntBE(e, n, this.span), this.span;
    }
  };
  K.IntBE = po;
  var dy = Math.pow(2, 32);
  function ff(r) {
    let e = Math.floor(r / dy),
      t = r - e * dy;
    return { hi32: e, lo32: t };
  }
  function lf(r, e) {
    return r * dy + e;
  }
  var Gp = class extends Xe {
    constructor(e) {
      super(8, e);
    }
    decode(e, t = 0) {
      let n = Ge(e),
        o = n.readUInt32LE(t),
        s = n.readUInt32LE(t + 4);
      return lf(s, o);
    }
    encode(e, t, n = 0) {
      let o = ff(e),
        s = Ge(t);
      return s.writeUInt32LE(o.lo32, n), s.writeUInt32LE(o.hi32, n + 4), 8;
    }
  };
  K.NearUInt64 = Gp;
  var Yp = class extends Xe {
    constructor(e) {
      super(8, e);
    }
    decode(e, t = 0) {
      let n = Ge(e),
        o = n.readUInt32BE(t),
        s = n.readUInt32BE(t + 4);
      return lf(o, s);
    }
    encode(e, t, n = 0) {
      let o = ff(e),
        s = Ge(t);
      return s.writeUInt32BE(o.hi32, n), s.writeUInt32BE(o.lo32, n + 4), 8;
    }
  };
  K.NearUInt64BE = Yp;
  var Zp = class extends Xe {
    constructor(e) {
      super(8, e);
    }
    decode(e, t = 0) {
      let n = Ge(e),
        o = n.readUInt32LE(t),
        s = n.readInt32LE(t + 4);
      return lf(s, o);
    }
    encode(e, t, n = 0) {
      let o = ff(e),
        s = Ge(t);
      return s.writeUInt32LE(o.lo32, n), s.writeInt32LE(o.hi32, n + 4), 8;
    }
  };
  K.NearInt64 = Zp;
  var Jp = class extends Xe {
    constructor(e) {
      super(8, e);
    }
    decode(e, t = 0) {
      let n = Ge(e),
        o = n.readInt32BE(t),
        s = n.readUInt32BE(t + 4);
      return lf(o, s);
    }
    encode(e, t, n = 0) {
      let o = ff(e),
        s = Ge(t);
      return s.writeInt32BE(o.hi32, n), s.writeUInt32BE(o.lo32, n + 4), 8;
    }
  };
  K.NearInt64BE = Jp;
  var Xp = class extends Xe {
    constructor(e) {
      super(4, e);
    }
    decode(e, t = 0) {
      return Ge(e).readFloatLE(t);
    }
    encode(e, t, n = 0) {
      return Ge(t).writeFloatLE(e, n), 4;
    }
  };
  K.Float = Xp;
  var Qp = class extends Xe {
    constructor(e) {
      super(4, e);
    }
    decode(e, t = 0) {
      return Ge(e).readFloatBE(t);
    }
    encode(e, t, n = 0) {
      return Ge(t).writeFloatBE(e, n), 4;
    }
  };
  K.FloatBE = Qp;
  var ef = class extends Xe {
    constructor(e) {
      super(8, e);
    }
    decode(e, t = 0) {
      return Ge(e).readDoubleLE(t);
    }
    encode(e, t, n = 0) {
      return Ge(t).writeDoubleLE(e, n), 8;
    }
  };
  K.Double = ef;
  var tf = class extends Xe {
    constructor(e) {
      super(8, e);
    }
    decode(e, t = 0) {
      return Ge(e).readDoubleBE(t);
    }
    encode(e, t, n = 0) {
      return Ge(t).writeDoubleBE(e, n), 8;
    }
  };
  K.DoubleBE = tf;
  var rf = class extends Xe {
    constructor(e, t, n) {
      if (!(e instanceof Xe)) throw new TypeError('elementLayout must be a Layout');
      if (!((t instanceof sr && t.isCount()) || (Number.isInteger(t) && 0 <= t)))
        throw new TypeError(
          'count must be non-negative integer or an unsigned integer ExternalLayout'
        );
      let o = -1;
      !(t instanceof sr) && 0 < e.span && (o = t * e.span),
        super(o, n),
        (this.elementLayout = e),
        (this.count = t);
    }
    getSpan(e, t = 0) {
      if (0 <= this.span) return this.span;
      let n = 0,
        o = this.count;
      if ((o instanceof sr && (o = o.decode(e, t)), 0 < this.elementLayout.span))
        n = o * this.elementLayout.span;
      else {
        let s = 0;
        for (; s < o; ) (n += this.elementLayout.getSpan(e, t + n)), ++s;
      }
      return n;
    }
    decode(e, t = 0) {
      let n = [],
        o = 0,
        s = this.count;
      for (s instanceof sr && (s = s.decode(e, t)); o < s; )
        n.push(this.elementLayout.decode(e, t)), (t += this.elementLayout.getSpan(e, t)), (o += 1);
      return n;
    }
    encode(e, t, n = 0) {
      let o = this.elementLayout,
        s = e.reduce((i, c) => i + o.encode(c, t, n + i), 0);
      return this.count instanceof sr && this.count.encode(e.length, t, n), s;
    }
  };
  K.Sequence = rf;
  var nf = class extends Xe {
    constructor(e, t, n) {
      if (!(Array.isArray(e) && e.reduce((s, i) => s && i instanceof Xe, !0)))
        throw new TypeError('fields must be array of Layout instances');
      typeof t == 'boolean' && n === void 0 && ((n = t), (t = void 0));
      for (let s of e)
        if (0 > s.span && s.property === void 0)
          throw new Error('fields cannot contain unnamed variable-length layout');
      let o = -1;
      try {
        o = e.reduce((s, i) => s + i.getSpan(), 0);
      } catch {}
      super(o, t), (this.fields = e), (this.decodePrefixes = !!n);
    }
    getSpan(e, t = 0) {
      if (0 <= this.span) return this.span;
      let n = 0;
      try {
        n = this.fields.reduce((o, s) => {
          let i = s.getSpan(e, t);
          return (t += i), o + i;
        }, 0);
      } catch {
        throw new RangeError('indeterminate span');
      }
      return n;
    }
    decode(e, t = 0) {
      bi(e);
      let n = this.makeDestinationObject();
      for (let o of this.fields)
        if (
          (o.property !== void 0 && (n[o.property] = o.decode(e, t)),
          (t += o.getSpan(e, t)),
          this.decodePrefixes && e.length === t)
        )
          break;
      return n;
    }
    encode(e, t, n = 0) {
      let o = n,
        s = 0,
        i = 0;
      for (let c of this.fields) {
        let u = c.span;
        if (((i = 0 < u ? u : 0), c.property !== void 0)) {
          let l = e[c.property];
          l !== void 0 && ((i = c.encode(l, t, n)), 0 > u && (u = c.getSpan(t, n)));
        }
        (s = n), (n += u);
      }
      return s + i - o;
    }
    fromArray(e) {
      let t = this.makeDestinationObject();
      for (let n of this.fields)
        n.property !== void 0 && 0 < e.length && (t[n.property] = e.shift());
      return t;
    }
    layoutFor(e) {
      if (typeof e != 'string') throw new TypeError('property must be string');
      for (let t of this.fields) if (t.property === e) return t;
    }
    offsetOf(e) {
      if (typeof e != 'string') throw new TypeError('property must be string');
      let t = 0;
      for (let n of this.fields) {
        if (n.property === e) return t;
        0 > n.span ? (t = -1) : 0 <= t && (t += n.span);
      }
    }
  };
  K.Structure = nf;
  var Da = class {
    constructor(e) {
      this.property = e;
    }
    decode(e, t) {
      throw new Error('UnionDiscriminator is abstract');
    }
    encode(e, t, n) {
      throw new Error('UnionDiscriminator is abstract');
    }
  };
  K.UnionDiscriminator = Da;
  var xi = class extends Da {
    constructor(e, t) {
      if (!(e instanceof sr && e.isCount()))
        throw new TypeError('layout must be an unsigned integer ExternalLayout');
      super(t || e.property || 'variant'), (this.layout = e);
    }
    decode(e, t) {
      return this.layout.decode(e, t);
    }
    encode(e, t, n) {
      return this.layout.encode(e, t, n);
    }
  };
  K.UnionLayoutDiscriminator = xi;
  var Ua = class extends Xe {
    constructor(e, t, n) {
      let o;
      if (e instanceof Ar || e instanceof Pr) o = new xi(new qa(e));
      else if (e instanceof sr && e.isCount()) o = new xi(e);
      else if (e instanceof Da) o = e;
      else throw new TypeError('discr must be a UnionDiscriminator or an unsigned integer layout');
      if ((t === void 0 && (t = null), !(t === null || t instanceof Xe)))
        throw new TypeError('defaultLayout must be null or a Layout');
      if (t !== null) {
        if (0 > t.span) throw new Error('defaultLayout must have constant span');
        t.property === void 0 && (t = t.replicate('content'));
      }
      let s = -1;
      t && ((s = t.span), 0 <= s && (e instanceof Ar || e instanceof Pr) && (s += o.layout.span)),
        super(s, n),
        (this.discriminator = o),
        (this.usesPrefixDiscriminator = e instanceof Ar || e instanceof Pr),
        (this.defaultLayout = t),
        (this.registry = {});
      let i = this.defaultGetSourceVariant.bind(this);
      (this.getSourceVariant = function (c) {
        return i(c);
      }),
        (this.configGetSourceVariant = function (c) {
          i = c.bind(this);
        });
    }
    getSpan(e, t = 0) {
      if (0 <= this.span) return this.span;
      let n = this.getVariant(e, t);
      if (!n) throw new Error('unable to determine span for unrecognized variant');
      return n.getSpan(e, t);
    }
    defaultGetSourceVariant(e) {
      if (Object.prototype.hasOwnProperty.call(e, this.discriminator.property)) {
        if (
          this.defaultLayout &&
          this.defaultLayout.property &&
          Object.prototype.hasOwnProperty.call(e, this.defaultLayout.property)
        )
          return;
        let t = this.registry[e[this.discriminator.property]];
        if (t && (!t.layout || (t.property && Object.prototype.hasOwnProperty.call(e, t.property))))
          return t;
      } else
        for (let t in this.registry) {
          let n = this.registry[t];
          if (n.property && Object.prototype.hasOwnProperty.call(e, n.property)) return n;
        }
      throw new Error('unable to infer src variant');
    }
    decode(e, t = 0) {
      let n,
        o = this.discriminator,
        s = o.decode(e, t),
        i = this.registry[s];
      if (i === void 0) {
        let c = this.defaultLayout,
          u = 0;
        this.usesPrefixDiscriminator && (u = o.layout.span),
          (n = this.makeDestinationObject()),
          (n[o.property] = s),
          (n[c.property] = c.decode(e, t + u));
      } else n = i.decode(e, t);
      return n;
    }
    encode(e, t, n = 0) {
      let o = this.getSourceVariant(e);
      if (o === void 0) {
        let s = this.discriminator,
          i = this.defaultLayout,
          c = 0;
        return (
          this.usesPrefixDiscriminator && (c = s.layout.span),
          s.encode(e[s.property], t, n),
          c + i.encode(e[i.property], t, n + c)
        );
      }
      return o.encode(e, t, n);
    }
    addVariant(e, t, n) {
      let o = new of(this, e, t, n);
      return (this.registry[e] = o), o;
    }
    getVariant(e, t = 0) {
      let n;
      return (
        e instanceof Uint8Array ? (n = this.discriminator.decode(e, t)) : (n = e), this.registry[n]
      );
    }
  };
  K.Union = Ua;
  var of = class extends Xe {
    constructor(e, t, n, o) {
      if (!(e instanceof Ua)) throw new TypeError('union must be a Union');
      if (!Number.isInteger(t) || 0 > t)
        throw new TypeError('variant must be a (non-negative) integer');
      if ((typeof n == 'string' && o === void 0 && ((o = n), (n = null)), n)) {
        if (!(n instanceof Xe)) throw new TypeError('layout must be a Layout');
        if (e.defaultLayout !== null && 0 <= n.span && n.span > e.defaultLayout.span)
          throw new Error('variant span exceeds span of containing union');
        if (typeof o != 'string') throw new TypeError('variant must have a String property');
      }
      let s = e.span;
      0 > e.span &&
        ((s = n ? n.span : 0),
        0 <= s && e.usesPrefixDiscriminator && (s += e.discriminator.layout.span)),
        super(s, o),
        (this.union = e),
        (this.variant = t),
        (this.layout = n || null);
    }
    getSpan(e, t = 0) {
      if (0 <= this.span) return this.span;
      let n = 0;
      this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span);
      let o = 0;
      return this.layout && (o = this.layout.getSpan(e, t + n)), n + o;
    }
    decode(e, t = 0) {
      let n = this.makeDestinationObject();
      if (this !== this.union.getVariant(e, t)) throw new Error('variant mismatch');
      let o = 0;
      return (
        this.union.usesPrefixDiscriminator && (o = this.union.discriminator.layout.span),
        this.layout
          ? (n[this.property] = this.layout.decode(e, t + o))
          : this.property
            ? (n[this.property] = !0)
            : this.union.usesPrefixDiscriminator &&
              (n[this.union.discriminator.property] = this.variant),
        n
      );
    }
    encode(e, t, n = 0) {
      let o = 0;
      if (
        (this.union.usesPrefixDiscriminator && (o = this.union.discriminator.layout.span),
        this.layout && !Object.prototype.hasOwnProperty.call(e, this.property))
      )
        throw new TypeError('variant lacks property ' + this.property);
      this.union.discriminator.encode(this.variant, t, n);
      let s = o;
      if (
        this.layout &&
        (this.layout.encode(e[this.property], t, n + o),
        (s += this.layout.getSpan(t, n + o)),
        0 <= this.union.span && s > this.union.span)
      )
        throw new Error('encoded variant overruns containing union');
      return s;
    }
    fromArray(e) {
      if (this.layout) return this.layout.fromArray(e);
    }
  };
  K.VariantLayout = of;
  function gi(r) {
    return 0 > r && (r += 4294967296), r;
  }
  var Fa = class extends Xe {
    constructor(e, t, n) {
      if (!(e instanceof Ar || e instanceof Pr))
        throw new TypeError('word must be a UInt or UIntBE layout');
      if ((typeof t == 'string' && n === void 0 && ((n = t), (t = !1)), 4 < e.span))
        throw new RangeError('word cannot exceed 32 bits');
      super(e.span, n), (this.word = e), (this.msb = !!t), (this.fields = []);
      let o = 0;
      (this._packedSetValue = function (s) {
        return (o = gi(s)), this;
      }),
        (this._packedGetValue = function () {
          return o;
        });
    }
    decode(e, t = 0) {
      let n = this.makeDestinationObject(),
        o = this.word.decode(e, t);
      this._packedSetValue(o);
      for (let s of this.fields) s.property !== void 0 && (n[s.property] = s.decode(e));
      return n;
    }
    encode(e, t, n = 0) {
      let o = this.word.decode(t, n);
      this._packedSetValue(o);
      for (let s of this.fields)
        if (s.property !== void 0) {
          let i = e[s.property];
          i !== void 0 && s.encode(i);
        }
      return this.word.encode(this._packedGetValue(), t, n);
    }
    addField(e, t) {
      let n = new ja(this, e, t);
      return this.fields.push(n), n;
    }
    addBoolean(e) {
      let t = new sf(this, e);
      return this.fields.push(t), t;
    }
    fieldFor(e) {
      if (typeof e != 'string') throw new TypeError('property must be string');
      for (let t of this.fields) if (t.property === e) return t;
    }
  };
  K.BitStructure = Fa;
  var ja = class {
    constructor(e, t, n) {
      if (!(e instanceof Fa)) throw new TypeError('container must be a BitStructure');
      if (!Number.isInteger(t) || 0 >= t) throw new TypeError('bits must be positive integer');
      let o = 8 * e.span,
        s = e.fields.reduce((i, c) => i + c.bits, 0);
      if (t + s > o)
        throw new Error('bits too long for span remainder (' + (o - s) + ' of ' + o + ' remain)');
      (this.container = e),
        (this.bits = t),
        (this.valueMask = (1 << t) - 1),
        t === 32 && (this.valueMask = 4294967295),
        (this.start = s),
        this.container.msb && (this.start = o - s - t),
        (this.wordMask = gi(this.valueMask << this.start)),
        (this.property = n);
    }
    decode(e, t) {
      let n = this.container._packedGetValue();
      return gi(n & this.wordMask) >>> this.start;
    }
    encode(e) {
      if (typeof e != 'number' || !Number.isInteger(e) || e !== gi(e & this.valueMask))
        throw new TypeError(
          my('BitField.encode', this) + ' value must be integer not exceeding ' + this.valueMask
        );
      let t = this.container._packedGetValue(),
        n = gi(e << this.start);
      this.container._packedSetValue(gi(t & ~this.wordMask) | n);
    }
  };
  K.BitField = ja;
  var sf = class extends ja {
    constructor(e, t) {
      super(e, 1, t);
    }
    decode(e, t) {
      return !!super.decode(e, t);
    }
    encode(e) {
      typeof e == 'boolean' && (e = +e), super.encode(e);
    }
  };
  K.Boolean = sf;
  var af = class extends Xe {
    constructor(e, t) {
      if (!((e instanceof sr && e.isCount()) || (Number.isInteger(e) && 0 <= e)))
        throw new TypeError(
          'length must be positive integer or an unsigned integer ExternalLayout'
        );
      let n = -1;
      e instanceof sr || (n = e), super(n, t), (this.length = e);
    }
    getSpan(e, t) {
      let n = this.span;
      return 0 > n && (n = this.length.decode(e, t)), n;
    }
    decode(e, t = 0) {
      let n = this.span;
      return 0 > n && (n = this.length.decode(e, t)), Ge(e).slice(t, t + n);
    }
    encode(e, t, n) {
      let o = this.length;
      if (
        (this.length instanceof sr && (o = e.length), !(e instanceof Uint8Array && o === e.length))
      )
        throw new TypeError(
          my('Blob.encode', this) + ' requires (length ' + o + ') Uint8Array as src'
        );
      if (n + o > t.length) throw new RangeError('encoding overruns Uint8Array');
      let s = Ge(e);
      return (
        Ge(t).write(s.toString('hex'), n, o, 'hex'),
        this.length instanceof sr && this.length.encode(o, t, n),
        o
      );
    }
  };
  K.Blob = af;
  var cf = class extends Xe {
    constructor(e) {
      super(-1, e);
    }
    getSpan(e, t = 0) {
      bi(e);
      let n = t;
      for (; n < e.length && e[n] !== 0; ) n += 1;
      return 1 + n - t;
    }
    decode(e, t = 0) {
      let n = this.getSpan(e, t);
      return Ge(e)
        .slice(t, t + n - 1)
        .toString('utf-8');
    }
    encode(e, t, n = 0) {
      typeof e != 'string' && (e = String(e));
      let o = hy.Buffer.from(e, 'utf8'),
        s = o.length;
      if (n + s > t.length) throw new RangeError('encoding overruns Buffer');
      let i = Ge(t);
      return o.copy(i, n), (i[n + s] = 0), s + 1;
    }
  };
  K.CString = cf;
  var uf = class extends Xe {
    constructor(e, t) {
      if ((typeof e == 'string' && t === void 0 && ((t = e), (e = void 0)), e === void 0)) e = -1;
      else if (!Number.isInteger(e)) throw new TypeError('maxSpan must be an integer');
      super(-1, t), (this.maxSpan = e);
    }
    getSpan(e, t = 0) {
      return bi(e), e.length - t;
    }
    decode(e, t = 0) {
      let n = this.getSpan(e, t);
      if (0 <= this.maxSpan && this.maxSpan < n)
        throw new RangeError('text length exceeds maxSpan');
      return Ge(e)
        .slice(t, t + n)
        .toString('utf-8');
    }
    encode(e, t, n = 0) {
      typeof e != 'string' && (e = String(e));
      let o = hy.Buffer.from(e, 'utf8'),
        s = o.length;
      if (0 <= this.maxSpan && this.maxSpan < s)
        throw new RangeError('text length exceeds maxSpan');
      if (n + s > t.length) throw new RangeError('encoding overruns Buffer');
      return o.copy(Ge(t), n), s;
    }
  };
  K.UTF8 = uf;
  var pf = class extends Xe {
    constructor(e, t) {
      super(0, t), (this.value = e);
    }
    decode(e, t) {
      return this.value;
    }
    encode(e, t, n) {
      return 0;
    }
  };
  K.Constant = pf;
  K.greedy = (r, e) => new $p(r, e);
  K.offset = (r, e, t) => new qa(r, e, t);
  K.u8 = (r) => new Ar(1, r);
  K.u16 = (r) => new Ar(2, r);
  K.u24 = (r) => new Ar(3, r);
  K.u32 = (r) => new Ar(4, r);
  K.u40 = (r) => new Ar(5, r);
  K.u48 = (r) => new Ar(6, r);
  K.nu64 = (r) => new Gp(r);
  K.u16be = (r) => new Pr(2, r);
  K.u24be = (r) => new Pr(3, r);
  K.u32be = (r) => new Pr(4, r);
  K.u40be = (r) => new Pr(5, r);
  K.u48be = (r) => new Pr(6, r);
  K.nu64be = (r) => new Yp(r);
  K.s8 = (r) => new Un(1, r);
  K.s16 = (r) => new Un(2, r);
  K.s24 = (r) => new Un(3, r);
  K.s32 = (r) => new Un(4, r);
  K.s40 = (r) => new Un(5, r);
  K.s48 = (r) => new Un(6, r);
  K.ns64 = (r) => new Zp(r);
  K.s16be = (r) => new po(2, r);
  K.s24be = (r) => new po(3, r);
  K.s32be = (r) => new po(4, r);
  K.s40be = (r) => new po(5, r);
  K.s48be = (r) => new po(6, r);
  K.ns64be = (r) => new Jp(r);
  K.f32 = (r) => new Xp(r);
  K.f32be = (r) => new Qp(r);
  K.f64 = (r) => new ef(r);
  K.f64be = (r) => new tf(r);
  K.struct = (r, e, t) => new nf(r, e, t);
  K.bits = (r, e, t) => new Fa(r, e, t);
  K.seq = (r, e, t) => new rf(r, e, t);
  K.union = (r, e, t) => new Ua(r, e, t);
  K.unionLayoutDiscriminator = (r, e) => new xi(r, e);
  K.blob = (r, e) => new af(r, e);
  K.cstr = (r) => new cf(r);
  K.utf8 = (r, e) => new uf(r, e);
  K.constant = (r, e) => new pf(r, e);
});
var Wa = te((_i) => {
  'use strict';
  f();
  var yy = hd(),
    Si = yd(),
    T2 =
      typeof Symbol == 'function' && typeof Symbol.for == 'function'
        ? Symbol.for('nodejs.util.inspect.custom')
        : null;
  _i.Buffer = Q;
  _i.SlowBuffer = mF;
  _i.INSPECT_MAX_BYTES = 50;
  var df = 2147483647;
  _i.kMaxLength = df;
  Q.TYPED_ARRAY_SUPPORT = pF();
  !Q.TYPED_ARRAY_SUPPORT &&
    typeof console < 'u' &&
    typeof console.error == 'function' &&
    console.error(
      'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
    );
  function pF() {
    try {
      let r = new Uint8Array(1),
        e = {
          foo: function () {
            return 42;
          },
        };
      return (
        Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(r, e), r.foo() === 42
      );
    } catch {
      return !1;
    }
  }
  Object.defineProperty(Q.prototype, 'parent', {
    enumerable: !0,
    get: function () {
      if (Q.isBuffer(this)) return this.buffer;
    },
  });
  Object.defineProperty(Q.prototype, 'offset', {
    enumerable: !0,
    get: function () {
      if (Q.isBuffer(this)) return this.byteOffset;
    },
  });
  function Fn(r) {
    if (r > df) throw new RangeError('The value "' + r + '" is invalid for option "size"');
    let e = new Uint8Array(r);
    return Object.setPrototypeOf(e, Q.prototype), e;
  }
  function Q(r, e, t) {
    if (typeof r == 'number') {
      if (typeof e == 'string')
        throw new TypeError('The "string" argument must be of type string. Received type number');
      return wy(r);
    }
    return z2(r, e, t);
  }
  Q.poolSize = 8192;
  function z2(r, e, t) {
    if (typeof r == 'string') return lF(r, e);
    if (ArrayBuffer.isView(r)) return dF(r);
    if (r == null)
      throw new TypeError(
        'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
          typeof r
      );
    if (
      wn(r, ArrayBuffer) ||
      (r && wn(r.buffer, ArrayBuffer)) ||
      (typeof SharedArrayBuffer < 'u' &&
        (wn(r, SharedArrayBuffer) || (r && wn(r.buffer, SharedArrayBuffer))))
    )
      return xy(r, e, t);
    if (typeof r == 'number')
      throw new TypeError('The "value" argument must not be of type number. Received type number');
    let n = r.valueOf && r.valueOf();
    if (n != null && n !== r) return Q.from(n, e, t);
    let o = hF(r);
    if (o) return o;
    if (
      typeof Symbol < 'u' &&
      Symbol.toPrimitive != null &&
      typeof r[Symbol.toPrimitive] == 'function'
    )
      return Q.from(r[Symbol.toPrimitive]('string'), e, t);
    throw new TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
        typeof r
    );
  }
  Q.from = function (r, e, t) {
    return z2(r, e, t);
  };
  Object.setPrototypeOf(Q.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(Q, Uint8Array);
  function L2(r) {
    if (typeof r != 'number') throw new TypeError('"size" argument must be of type number');
    if (r < 0) throw new RangeError('The value "' + r + '" is invalid for option "size"');
  }
  function fF(r, e, t) {
    return (
      L2(r),
      r <= 0
        ? Fn(r)
        : e !== void 0
          ? typeof t == 'string'
            ? Fn(r).fill(e, t)
            : Fn(r).fill(e)
          : Fn(r)
    );
  }
  Q.alloc = function (r, e, t) {
    return fF(r, e, t);
  };
  function wy(r) {
    return L2(r), Fn(r < 0 ? 0 : vy(r) | 0);
  }
  Q.allocUnsafe = function (r) {
    return wy(r);
  };
  Q.allocUnsafeSlow = function (r) {
    return wy(r);
  };
  function lF(r, e) {
    if (((typeof e != 'string' || e === '') && (e = 'utf8'), !Q.isEncoding(e)))
      throw new TypeError('Unknown encoding: ' + e);
    let t = N2(r, e) | 0,
      n = Fn(t),
      o = n.write(r, e);
    return o !== t && (n = n.slice(0, o)), n;
  }
  function gy(r) {
    let e = r.length < 0 ? 0 : vy(r.length) | 0,
      t = Fn(e);
    for (let n = 0; n < e; n += 1) t[n] = r[n] & 255;
    return t;
  }
  function dF(r) {
    if (wn(r, Uint8Array)) {
      let e = new Uint8Array(r);
      return xy(e.buffer, e.byteOffset, e.byteLength);
    }
    return gy(r);
  }
  function xy(r, e, t) {
    if (e < 0 || r.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
    if (r.byteLength < e + (t || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let n;
    return (
      e === void 0 && t === void 0
        ? (n = new Uint8Array(r))
        : t === void 0
          ? (n = new Uint8Array(r, e))
          : (n = new Uint8Array(r, e, t)),
      Object.setPrototypeOf(n, Q.prototype),
      n
    );
  }
  function hF(r) {
    if (Q.isBuffer(r)) {
      let e = vy(r.length) | 0,
        t = Fn(e);
      return t.length === 0 || r.copy(t, 0, 0, e), t;
    }
    if (r.length !== void 0) return typeof r.length != 'number' || Ey(r.length) ? Fn(0) : gy(r);
    if (r.type === 'Buffer' && Array.isArray(r.data)) return gy(r.data);
  }
  function vy(r) {
    if (r >= df)
      throw new RangeError(
        'Attempt to allocate Buffer larger than maximum size: 0x' + df.toString(16) + ' bytes'
      );
    return r | 0;
  }
  function mF(r) {
    return +r != r && (r = 0), Q.alloc(+r);
  }
  Q.isBuffer = function (e) {
    return e != null && e._isBuffer === !0 && e !== Q.prototype;
  };
  Q.compare = function (e, t) {
    if (
      (wn(e, Uint8Array) && (e = Q.from(e, e.offset, e.byteLength)),
      wn(t, Uint8Array) && (t = Q.from(t, t.offset, t.byteLength)),
      !Q.isBuffer(e) || !Q.isBuffer(t))
    )
      throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (e === t) return 0;
    let n = e.length,
      o = t.length;
    for (let s = 0, i = Math.min(n, o); s < i; ++s)
      if (e[s] !== t[s]) {
        (n = e[s]), (o = t[s]);
        break;
      }
    return n < o ? -1 : o < n ? 1 : 0;
  };
  Q.isEncoding = function (e) {
    switch (String(e).toLowerCase()) {
      case 'hex':
      case 'utf8':
      case 'utf-8':
      case 'ascii':
      case 'latin1':
      case 'binary':
      case 'base64':
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return !0;
      default:
        return !1;
    }
  };
  Q.concat = function (e, t) {
    if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (e.length === 0) return Q.alloc(0);
    let n;
    if (t === void 0) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
    let o = Q.allocUnsafe(t),
      s = 0;
    for (n = 0; n < e.length; ++n) {
      let i = e[n];
      if (wn(i, Uint8Array))
        s + i.length > o.length
          ? (Q.isBuffer(i) || (i = Q.from(i)), i.copy(o, s))
          : Uint8Array.prototype.set.call(o, i, s);
      else if (Q.isBuffer(i)) i.copy(o, s);
      else throw new TypeError('"list" argument must be an Array of Buffers');
      s += i.length;
    }
    return o;
  };
  function N2(r, e) {
    if (Q.isBuffer(r)) return r.length;
    if (ArrayBuffer.isView(r) || wn(r, ArrayBuffer)) return r.byteLength;
    if (typeof r != 'string')
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
          typeof r
      );
    let t = r.length,
      n = arguments.length > 2 && arguments[2] === !0;
    if (!n && t === 0) return 0;
    let o = !1;
    for (;;)
      switch (e) {
        case 'ascii':
        case 'latin1':
        case 'binary':
          return t;
        case 'utf8':
        case 'utf-8':
          return by(r).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return t * 2;
        case 'hex':
          return t >>> 1;
        case 'base64':
          return W2(r).length;
        default:
          if (o) return n ? -1 : by(r).length;
          (e = ('' + e).toLowerCase()), (o = !0);
      }
  }
  Q.byteLength = N2;
  function yF(r, e, t) {
    let n = !1;
    if (
      ((e === void 0 || e < 0) && (e = 0),
      e > this.length ||
        ((t === void 0 || t > this.length) && (t = this.length), t <= 0) ||
        ((t >>>= 0), (e >>>= 0), t <= e))
    )
      return '';
    for (r || (r = 'utf8'); ; )
      switch (r) {
        case 'hex':
          return RF(this, e, t);
        case 'utf8':
        case 'utf-8':
          return C2(this, e, t);
        case 'ascii':
          return _F(this, e, t);
        case 'latin1':
        case 'binary':
          return AF(this, e, t);
        case 'base64':
          return SF(this, e, t);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return IF(this, e, t);
        default:
          if (n) throw new TypeError('Unknown encoding: ' + r);
          (r = (r + '').toLowerCase()), (n = !0);
      }
  }
  Q.prototype._isBuffer = !0;
  function Is(r, e, t) {
    let n = r[e];
    (r[e] = r[t]), (r[t] = n);
  }
  Q.prototype.swap16 = function () {
    let e = this.length;
    if (e % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
    for (let t = 0; t < e; t += 2) Is(this, t, t + 1);
    return this;
  };
  Q.prototype.swap32 = function () {
    let e = this.length;
    if (e % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
    for (let t = 0; t < e; t += 4) Is(this, t, t + 3), Is(this, t + 1, t + 2);
    return this;
  };
  Q.prototype.swap64 = function () {
    let e = this.length;
    if (e % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
    for (let t = 0; t < e; t += 8)
      Is(this, t, t + 7), Is(this, t + 1, t + 6), Is(this, t + 2, t + 5), Is(this, t + 3, t + 4);
    return this;
  };
  Q.prototype.toString = function () {
    let e = this.length;
    return e === 0 ? '' : arguments.length === 0 ? C2(this, 0, e) : yF.apply(this, arguments);
  };
  Q.prototype.toLocaleString = Q.prototype.toString;
  Q.prototype.equals = function (e) {
    if (!Q.isBuffer(e)) throw new TypeError('Argument must be a Buffer');
    return this === e ? !0 : Q.compare(this, e) === 0;
  };
  Q.prototype.inspect = function () {
    let e = '',
      t = _i.INSPECT_MAX_BYTES;
    return (
      (e = this.toString('hex', 0, t)
        .replace(/(.{2})/g, '$1 ')
        .trim()),
      this.length > t && (e += ' ... '),
      '<Buffer ' + e + '>'
    );
  };
  T2 && (Q.prototype[T2] = Q.prototype.inspect);
  Q.prototype.compare = function (e, t, n, o, s) {
    if ((wn(e, Uint8Array) && (e = Q.from(e, e.offset, e.byteLength)), !Q.isBuffer(e)))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e
      );
    if (
      (t === void 0 && (t = 0),
      n === void 0 && (n = e ? e.length : 0),
      o === void 0 && (o = 0),
      s === void 0 && (s = this.length),
      t < 0 || n > e.length || o < 0 || s > this.length)
    )
      throw new RangeError('out of range index');
    if (o >= s && t >= n) return 0;
    if (o >= s) return -1;
    if (t >= n) return 1;
    if (((t >>>= 0), (n >>>= 0), (o >>>= 0), (s >>>= 0), this === e)) return 0;
    let i = s - o,
      c = n - t,
      u = Math.min(i, c),
      l = this.slice(o, s),
      w = e.slice(t, n);
    for (let x = 0; x < u; ++x)
      if (l[x] !== w[x]) {
        (i = l[x]), (c = w[x]);
        break;
      }
    return i < c ? -1 : c < i ? 1 : 0;
  };
  function O2(r, e, t, n, o) {
    if (r.length === 0) return -1;
    if (
      (typeof t == 'string'
        ? ((n = t), (t = 0))
        : t > 2147483647
          ? (t = 2147483647)
          : t < -2147483648 && (t = -2147483648),
      (t = +t),
      Ey(t) && (t = o ? 0 : r.length - 1),
      t < 0 && (t = r.length + t),
      t >= r.length)
    ) {
      if (o) return -1;
      t = r.length - 1;
    } else if (t < 0)
      if (o) t = 0;
      else return -1;
    if ((typeof e == 'string' && (e = Q.from(e, n)), Q.isBuffer(e)))
      return e.length === 0 ? -1 : P2(r, e, t, n, o);
    if (typeof e == 'number')
      return (
        (e = e & 255),
        typeof Uint8Array.prototype.indexOf == 'function'
          ? o
            ? Uint8Array.prototype.indexOf.call(r, e, t)
            : Uint8Array.prototype.lastIndexOf.call(r, e, t)
          : P2(r, [e], t, n, o)
      );
    throw new TypeError('val must be string, number or Buffer');
  }
  function P2(r, e, t, n, o) {
    let s = 1,
      i = r.length,
      c = e.length;
    if (
      n !== void 0 &&
      ((n = String(n).toLowerCase()),
      n === 'ucs2' || n === 'ucs-2' || n === 'utf16le' || n === 'utf-16le')
    ) {
      if (r.length < 2 || e.length < 2) return -1;
      (s = 2), (i /= 2), (c /= 2), (t /= 2);
    }
    function u(w, x) {
      return s === 1 ? w[x] : w.readUInt16BE(x * s);
    }
    let l;
    if (o) {
      let w = -1;
      for (l = t; l < i; l++)
        if (u(r, l) === u(e, w === -1 ? 0 : l - w)) {
          if ((w === -1 && (w = l), l - w + 1 === c)) return w * s;
        } else w !== -1 && (l -= l - w), (w = -1);
    } else
      for (t + c > i && (t = i - c), l = t; l >= 0; l--) {
        let w = !0;
        for (let x = 0; x < c; x++)
          if (u(r, l + x) !== u(e, x)) {
            w = !1;
            break;
          }
        if (w) return l;
      }
    return -1;
  }
  Q.prototype.includes = function (e, t, n) {
    return this.indexOf(e, t, n) !== -1;
  };
  Q.prototype.indexOf = function (e, t, n) {
    return O2(this, e, t, n, !0);
  };
  Q.prototype.lastIndexOf = function (e, t, n) {
    return O2(this, e, t, n, !1);
  };
  function gF(r, e, t, n) {
    t = Number(t) || 0;
    let o = r.length - t;
    n ? ((n = Number(n)), n > o && (n = o)) : (n = o);
    let s = e.length;
    n > s / 2 && (n = s / 2);
    let i;
    for (i = 0; i < n; ++i) {
      let c = parseInt(e.substr(i * 2, 2), 16);
      if (Ey(c)) return i;
      r[t + i] = c;
    }
    return i;
  }
  function xF(r, e, t, n) {
    return hf(by(e, r.length - t), r, t, n);
  }
  function bF(r, e, t, n) {
    return hf(BF(e), r, t, n);
  }
  function wF(r, e, t, n) {
    return hf(W2(e), r, t, n);
  }
  function vF(r, e, t, n) {
    return hf(MF(e, r.length - t), r, t, n);
  }
  Q.prototype.write = function (e, t, n, o) {
    if (t === void 0) (o = 'utf8'), (n = this.length), (t = 0);
    else if (n === void 0 && typeof t == 'string') (o = t), (n = this.length), (t = 0);
    else if (isFinite(t))
      (t = t >>> 0),
        isFinite(n) ? ((n = n >>> 0), o === void 0 && (o = 'utf8')) : ((o = n), (n = void 0));
    else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    let s = this.length - t;
    if (((n === void 0 || n > s) && (n = s), (e.length > 0 && (n < 0 || t < 0)) || t > this.length))
      throw new RangeError('Attempt to write outside buffer bounds');
    o || (o = 'utf8');
    let i = !1;
    for (;;)
      switch (o) {
        case 'hex':
          return gF(this, e, t, n);
        case 'utf8':
        case 'utf-8':
          return xF(this, e, t, n);
        case 'ascii':
        case 'latin1':
        case 'binary':
          return bF(this, e, t, n);
        case 'base64':
          return wF(this, e, t, n);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return vF(this, e, t, n);
        default:
          if (i) throw new TypeError('Unknown encoding: ' + o);
          (o = ('' + o).toLowerCase()), (i = !0);
      }
  };
  Q.prototype.toJSON = function () {
    return { type: 'Buffer', data: Array.prototype.slice.call(this._arr || this, 0) };
  };
  function SF(r, e, t) {
    return e === 0 && t === r.length ? yy.fromByteArray(r) : yy.fromByteArray(r.slice(e, t));
  }
  function C2(r, e, t) {
    t = Math.min(r.length, t);
    let n = [],
      o = e;
    for (; o < t; ) {
      let s = r[o],
        i = null,
        c = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;
      if (o + c <= t) {
        let u, l, w, x;
        switch (c) {
          case 1:
            s < 128 && (i = s);
            break;
          case 2:
            (u = r[o + 1]),
              (u & 192) === 128 && ((x = ((s & 31) << 6) | (u & 63)), x > 127 && (i = x));
            break;
          case 3:
            (u = r[o + 1]),
              (l = r[o + 2]),
              (u & 192) === 128 &&
                (l & 192) === 128 &&
                ((x = ((s & 15) << 12) | ((u & 63) << 6) | (l & 63)),
                x > 2047 && (x < 55296 || x > 57343) && (i = x));
            break;
          case 4:
            (u = r[o + 1]),
              (l = r[o + 2]),
              (w = r[o + 3]),
              (u & 192) === 128 &&
                (l & 192) === 128 &&
                (w & 192) === 128 &&
                ((x = ((s & 15) << 18) | ((u & 63) << 12) | ((l & 63) << 6) | (w & 63)),
                x > 65535 && x < 1114112 && (i = x));
        }
      }
      i === null
        ? ((i = 65533), (c = 1))
        : i > 65535 &&
          ((i -= 65536), n.push(((i >>> 10) & 1023) | 55296), (i = 56320 | (i & 1023))),
        n.push(i),
        (o += c);
    }
    return EF(n);
  }
  var B2 = 4096;
  function EF(r) {
    let e = r.length;
    if (e <= B2) return String.fromCharCode.apply(String, r);
    let t = '',
      n = 0;
    for (; n < e; ) t += String.fromCharCode.apply(String, r.slice(n, (n += B2)));
    return t;
  }
  function _F(r, e, t) {
    let n = '';
    t = Math.min(r.length, t);
    for (let o = e; o < t; ++o) n += String.fromCharCode(r[o] & 127);
    return n;
  }
  function AF(r, e, t) {
    let n = '';
    t = Math.min(r.length, t);
    for (let o = e; o < t; ++o) n += String.fromCharCode(r[o]);
    return n;
  }
  function RF(r, e, t) {
    let n = r.length;
    (!e || e < 0) && (e = 0), (!t || t < 0 || t > n) && (t = n);
    let o = '';
    for (let s = e; s < t; ++s) o += zF[r[s]];
    return o;
  }
  function IF(r, e, t) {
    let n = r.slice(e, t),
      o = '';
    for (let s = 0; s < n.length - 1; s += 2) o += String.fromCharCode(n[s] + n[s + 1] * 256);
    return o;
  }
  Q.prototype.slice = function (e, t) {
    let n = this.length;
    (e = ~~e),
      (t = t === void 0 ? n : ~~t),
      e < 0 ? ((e += n), e < 0 && (e = 0)) : e > n && (e = n),
      t < 0 ? ((t += n), t < 0 && (t = 0)) : t > n && (t = n),
      t < e && (t = e);
    let o = this.subarray(e, t);
    return Object.setPrototypeOf(o, Q.prototype), o;
  };
  function Zt(r, e, t) {
    if (r % 1 !== 0 || r < 0) throw new RangeError('offset is not uint');
    if (r + e > t) throw new RangeError('Trying to access beyond buffer length');
  }
  Q.prototype.readUintLE = Q.prototype.readUIntLE = function (e, t, n) {
    (e = e >>> 0), (t = t >>> 0), n || Zt(e, t, this.length);
    let o = this[e],
      s = 1,
      i = 0;
    for (; ++i < t && (s *= 256); ) o += this[e + i] * s;
    return o;
  };
  Q.prototype.readUintBE = Q.prototype.readUIntBE = function (e, t, n) {
    (e = e >>> 0), (t = t >>> 0), n || Zt(e, t, this.length);
    let o = this[e + --t],
      s = 1;
    for (; t > 0 && (s *= 256); ) o += this[e + --t] * s;
    return o;
  };
  Q.prototype.readUint8 = Q.prototype.readUInt8 = function (e, t) {
    return (e = e >>> 0), t || Zt(e, 1, this.length), this[e];
  };
  Q.prototype.readUint16LE = Q.prototype.readUInt16LE = function (e, t) {
    return (e = e >>> 0), t || Zt(e, 2, this.length), this[e] | (this[e + 1] << 8);
  };
  Q.prototype.readUint16BE = Q.prototype.readUInt16BE = function (e, t) {
    return (e = e >>> 0), t || Zt(e, 2, this.length), (this[e] << 8) | this[e + 1];
  };
  Q.prototype.readUint32LE = Q.prototype.readUInt32LE = function (e, t) {
    return (
      (e = e >>> 0),
      t || Zt(e, 4, this.length),
      (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) + this[e + 3] * 16777216
    );
  };
  Q.prototype.readUint32BE = Q.prototype.readUInt32BE = function (e, t) {
    return (
      (e = e >>> 0),
      t || Zt(e, 4, this.length),
      this[e] * 16777216 + ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
    );
  };
  Q.prototype.readBigUInt64LE = fo(function (e) {
    (e = e >>> 0), Ei(e, 'offset');
    let t = this[e],
      n = this[e + 7];
    (t === void 0 || n === void 0) && Ha(e, this.length - 8);
    let o = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24,
      s = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
    return BigInt(o) + (BigInt(s) << BigInt(32));
  });
  Q.prototype.readBigUInt64BE = fo(function (e) {
    (e = e >>> 0), Ei(e, 'offset');
    let t = this[e],
      n = this[e + 7];
    (t === void 0 || n === void 0) && Ha(e, this.length - 8);
    let o = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e],
      s = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
    return (BigInt(o) << BigInt(32)) + BigInt(s);
  });
  Q.prototype.readIntLE = function (e, t, n) {
    (e = e >>> 0), (t = t >>> 0), n || Zt(e, t, this.length);
    let o = this[e],
      s = 1,
      i = 0;
    for (; ++i < t && (s *= 256); ) o += this[e + i] * s;
    return (s *= 128), o >= s && (o -= Math.pow(2, 8 * t)), o;
  };
  Q.prototype.readIntBE = function (e, t, n) {
    (e = e >>> 0), (t = t >>> 0), n || Zt(e, t, this.length);
    let o = t,
      s = 1,
      i = this[e + --o];
    for (; o > 0 && (s *= 256); ) i += this[e + --o] * s;
    return (s *= 128), i >= s && (i -= Math.pow(2, 8 * t)), i;
  };
  Q.prototype.readInt8 = function (e, t) {
    return (
      (e = e >>> 0), t || Zt(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e]
    );
  };
  Q.prototype.readInt16LE = function (e, t) {
    (e = e >>> 0), t || Zt(e, 2, this.length);
    let n = this[e] | (this[e + 1] << 8);
    return n & 32768 ? n | 4294901760 : n;
  };
  Q.prototype.readInt16BE = function (e, t) {
    (e = e >>> 0), t || Zt(e, 2, this.length);
    let n = this[e + 1] | (this[e] << 8);
    return n & 32768 ? n | 4294901760 : n;
  };
  Q.prototype.readInt32LE = function (e, t) {
    return (
      (e = e >>> 0),
      t || Zt(e, 4, this.length),
      this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24)
    );
  };
  Q.prototype.readInt32BE = function (e, t) {
    return (
      (e = e >>> 0),
      t || Zt(e, 4, this.length),
      (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]
    );
  };
  Q.prototype.readBigInt64LE = fo(function (e) {
    (e = e >>> 0), Ei(e, 'offset');
    let t = this[e],
      n = this[e + 7];
    (t === void 0 || n === void 0) && Ha(e, this.length - 8);
    let o = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
    return (
      (BigInt(o) << BigInt(32)) +
      BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24)
    );
  });
  Q.prototype.readBigInt64BE = fo(function (e) {
    (e = e >>> 0), Ei(e, 'offset');
    let t = this[e],
      n = this[e + 7];
    (t === void 0 || n === void 0) && Ha(e, this.length - 8);
    let o = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
    return (
      (BigInt(o) << BigInt(32)) +
      BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n)
    );
  });
  Q.prototype.readFloatLE = function (e, t) {
    return (e = e >>> 0), t || Zt(e, 4, this.length), Si.read(this, e, !0, 23, 4);
  };
  Q.prototype.readFloatBE = function (e, t) {
    return (e = e >>> 0), t || Zt(e, 4, this.length), Si.read(this, e, !1, 23, 4);
  };
  Q.prototype.readDoubleLE = function (e, t) {
    return (e = e >>> 0), t || Zt(e, 8, this.length), Si.read(this, e, !0, 52, 8);
  };
  Q.prototype.readDoubleBE = function (e, t) {
    return (e = e >>> 0), t || Zt(e, 8, this.length), Si.read(this, e, !1, 52, 8);
  };
  function Rr(r, e, t, n, o, s) {
    if (!Q.isBuffer(r)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (e > o || e < s) throw new RangeError('"value" argument is out of bounds');
    if (t + n > r.length) throw new RangeError('Index out of range');
  }
  Q.prototype.writeUintLE = Q.prototype.writeUIntLE = function (e, t, n, o) {
    if (((e = +e), (t = t >>> 0), (n = n >>> 0), !o)) {
      let c = Math.pow(2, 8 * n) - 1;
      Rr(this, e, t, n, c, 0);
    }
    let s = 1,
      i = 0;
    for (this[t] = e & 255; ++i < n && (s *= 256); ) this[t + i] = (e / s) & 255;
    return t + n;
  };
  Q.prototype.writeUintBE = Q.prototype.writeUIntBE = function (e, t, n, o) {
    if (((e = +e), (t = t >>> 0), (n = n >>> 0), !o)) {
      let c = Math.pow(2, 8 * n) - 1;
      Rr(this, e, t, n, c, 0);
    }
    let s = n - 1,
      i = 1;
    for (this[t + s] = e & 255; --s >= 0 && (i *= 256); ) this[t + s] = (e / i) & 255;
    return t + n;
  };
  Q.prototype.writeUint8 = Q.prototype.writeUInt8 = function (e, t, n) {
    return (e = +e), (t = t >>> 0), n || Rr(this, e, t, 1, 255, 0), (this[t] = e & 255), t + 1;
  };
  Q.prototype.writeUint16LE = Q.prototype.writeUInt16LE = function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || Rr(this, e, t, 2, 65535, 0),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      t + 2
    );
  };
  Q.prototype.writeUint16BE = Q.prototype.writeUInt16BE = function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || Rr(this, e, t, 2, 65535, 0),
      (this[t] = e >>> 8),
      (this[t + 1] = e & 255),
      t + 2
    );
  };
  Q.prototype.writeUint32LE = Q.prototype.writeUInt32LE = function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || Rr(this, e, t, 4, 4294967295, 0),
      (this[t + 3] = e >>> 24),
      (this[t + 2] = e >>> 16),
      (this[t + 1] = e >>> 8),
      (this[t] = e & 255),
      t + 4
    );
  };
  Q.prototype.writeUint32BE = Q.prototype.writeUInt32BE = function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || Rr(this, e, t, 4, 4294967295, 0),
      (this[t] = e >>> 24),
      (this[t + 1] = e >>> 16),
      (this[t + 2] = e >>> 8),
      (this[t + 3] = e & 255),
      t + 4
    );
  };
  function q2(r, e, t, n, o) {
    H2(e, n, o, r, t, 7);
    let s = Number(e & BigInt(4294967295));
    (r[t++] = s),
      (s = s >> 8),
      (r[t++] = s),
      (s = s >> 8),
      (r[t++] = s),
      (s = s >> 8),
      (r[t++] = s);
    let i = Number((e >> BigInt(32)) & BigInt(4294967295));
    return (
      (r[t++] = i),
      (i = i >> 8),
      (r[t++] = i),
      (i = i >> 8),
      (r[t++] = i),
      (i = i >> 8),
      (r[t++] = i),
      t
    );
  }
  function D2(r, e, t, n, o) {
    H2(e, n, o, r, t, 7);
    let s = Number(e & BigInt(4294967295));
    (r[t + 7] = s),
      (s = s >> 8),
      (r[t + 6] = s),
      (s = s >> 8),
      (r[t + 5] = s),
      (s = s >> 8),
      (r[t + 4] = s);
    let i = Number((e >> BigInt(32)) & BigInt(4294967295));
    return (
      (r[t + 3] = i),
      (i = i >> 8),
      (r[t + 2] = i),
      (i = i >> 8),
      (r[t + 1] = i),
      (i = i >> 8),
      (r[t] = i),
      t + 8
    );
  }
  Q.prototype.writeBigUInt64LE = fo(function (e, t = 0) {
    return q2(this, e, t, BigInt(0), BigInt('0xffffffffffffffff'));
  });
  Q.prototype.writeBigUInt64BE = fo(function (e, t = 0) {
    return D2(this, e, t, BigInt(0), BigInt('0xffffffffffffffff'));
  });
  Q.prototype.writeIntLE = function (e, t, n, o) {
    if (((e = +e), (t = t >>> 0), !o)) {
      let u = Math.pow(2, 8 * n - 1);
      Rr(this, e, t, n, u - 1, -u);
    }
    let s = 0,
      i = 1,
      c = 0;
    for (this[t] = e & 255; ++s < n && (i *= 256); )
      e < 0 && c === 0 && this[t + s - 1] !== 0 && (c = 1),
        (this[t + s] = (((e / i) >> 0) - c) & 255);
    return t + n;
  };
  Q.prototype.writeIntBE = function (e, t, n, o) {
    if (((e = +e), (t = t >>> 0), !o)) {
      let u = Math.pow(2, 8 * n - 1);
      Rr(this, e, t, n, u - 1, -u);
    }
    let s = n - 1,
      i = 1,
      c = 0;
    for (this[t + s] = e & 255; --s >= 0 && (i *= 256); )
      e < 0 && c === 0 && this[t + s + 1] !== 0 && (c = 1),
        (this[t + s] = (((e / i) >> 0) - c) & 255);
    return t + n;
  };
  Q.prototype.writeInt8 = function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || Rr(this, e, t, 1, 127, -128),
      e < 0 && (e = 255 + e + 1),
      (this[t] = e & 255),
      t + 1
    );
  };
  Q.prototype.writeInt16LE = function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || Rr(this, e, t, 2, 32767, -32768),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      t + 2
    );
  };
  Q.prototype.writeInt16BE = function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || Rr(this, e, t, 2, 32767, -32768),
      (this[t] = e >>> 8),
      (this[t + 1] = e & 255),
      t + 2
    );
  };
  Q.prototype.writeInt32LE = function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || Rr(this, e, t, 4, 2147483647, -2147483648),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      (this[t + 2] = e >>> 16),
      (this[t + 3] = e >>> 24),
      t + 4
    );
  };
  Q.prototype.writeInt32BE = function (e, t, n) {
    return (
      (e = +e),
      (t = t >>> 0),
      n || Rr(this, e, t, 4, 2147483647, -2147483648),
      e < 0 && (e = 4294967295 + e + 1),
      (this[t] = e >>> 24),
      (this[t + 1] = e >>> 16),
      (this[t + 2] = e >>> 8),
      (this[t + 3] = e & 255),
      t + 4
    );
  };
  Q.prototype.writeBigInt64LE = fo(function (e, t = 0) {
    return q2(this, e, t, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
  });
  Q.prototype.writeBigInt64BE = fo(function (e, t = 0) {
    return D2(this, e, t, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
  });
  function U2(r, e, t, n, o, s) {
    if (t + n > r.length) throw new RangeError('Index out of range');
    if (t < 0) throw new RangeError('Index out of range');
  }
  function F2(r, e, t, n, o) {
    return (
      (e = +e),
      (t = t >>> 0),
      o || U2(r, e, t, 4, 34028234663852886e22, -34028234663852886e22),
      Si.write(r, e, t, n, 23, 4),
      t + 4
    );
  }
  Q.prototype.writeFloatLE = function (e, t, n) {
    return F2(this, e, t, !0, n);
  };
  Q.prototype.writeFloatBE = function (e, t, n) {
    return F2(this, e, t, !1, n);
  };
  function j2(r, e, t, n, o) {
    return (
      (e = +e),
      (t = t >>> 0),
      o || U2(r, e, t, 8, 17976931348623157e292, -17976931348623157e292),
      Si.write(r, e, t, n, 52, 8),
      t + 8
    );
  }
  Q.prototype.writeDoubleLE = function (e, t, n) {
    return j2(this, e, t, !0, n);
  };
  Q.prototype.writeDoubleBE = function (e, t, n) {
    return j2(this, e, t, !1, n);
  };
  Q.prototype.copy = function (e, t, n, o) {
    if (!Q.isBuffer(e)) throw new TypeError('argument should be a Buffer');
    if (
      (n || (n = 0),
      !o && o !== 0 && (o = this.length),
      t >= e.length && (t = e.length),
      t || (t = 0),
      o > 0 && o < n && (o = n),
      o === n || e.length === 0 || this.length === 0)
    )
      return 0;
    if (t < 0) throw new RangeError('targetStart out of bounds');
    if (n < 0 || n >= this.length) throw new RangeError('Index out of range');
    if (o < 0) throw new RangeError('sourceEnd out of bounds');
    o > this.length && (o = this.length), e.length - t < o - n && (o = e.length - t + n);
    let s = o - n;
    return (
      this === e && typeof Uint8Array.prototype.copyWithin == 'function'
        ? this.copyWithin(t, n, o)
        : Uint8Array.prototype.set.call(e, this.subarray(n, o), t),
      s
    );
  };
  Q.prototype.fill = function (e, t, n, o) {
    if (typeof e == 'string') {
      if (
        (typeof t == 'string'
          ? ((o = t), (t = 0), (n = this.length))
          : typeof n == 'string' && ((o = n), (n = this.length)),
        o !== void 0 && typeof o != 'string')
      )
        throw new TypeError('encoding must be a string');
      if (typeof o == 'string' && !Q.isEncoding(o)) throw new TypeError('Unknown encoding: ' + o);
      if (e.length === 1) {
        let i = e.charCodeAt(0);
        ((o === 'utf8' && i < 128) || o === 'latin1') && (e = i);
      }
    } else typeof e == 'number' ? (e = e & 255) : typeof e == 'boolean' && (e = Number(e));
    if (t < 0 || this.length < t || this.length < n) throw new RangeError('Out of range index');
    if (n <= t) return this;
    (t = t >>> 0), (n = n === void 0 ? this.length : n >>> 0), e || (e = 0);
    let s;
    if (typeof e == 'number') for (s = t; s < n; ++s) this[s] = e;
    else {
      let i = Q.isBuffer(e) ? e : Q.from(e, o),
        c = i.length;
      if (c === 0) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
      for (s = 0; s < n - t; ++s) this[s + t] = i[s % c];
    }
    return this;
  };
  var vi = {};
  function Sy(r, e, t) {
    vi[r] = class extends t {
      constructor() {
        super(),
          Object.defineProperty(this, 'message', {
            value: e.apply(this, arguments),
            writable: !0,
            configurable: !0,
          }),
          (this.name = `${this.name} [${r}]`),
          this.stack,
          delete this.name;
      }
      get code() {
        return r;
      }
      set code(o) {
        Object.defineProperty(this, 'code', {
          configurable: !0,
          enumerable: !0,
          value: o,
          writable: !0,
        });
      }
      toString() {
        return `${this.name} [${r}]: ${this.message}`;
      }
    };
  }
  Sy(
    'ERR_BUFFER_OUT_OF_BOUNDS',
    function (r) {
      return r
        ? `${r} is outside of buffer bounds`
        : 'Attempt to access memory outside buffer bounds';
    },
    RangeError
  );
  Sy(
    'ERR_INVALID_ARG_TYPE',
    function (r, e) {
      return `The "${r}" argument must be of type number. Received type ${typeof e}`;
    },
    TypeError
  );
  Sy(
    'ERR_OUT_OF_RANGE',
    function (r, e, t) {
      let n = `The value of "${r}" is out of range.`,
        o = t;
      return (
        Number.isInteger(t) && Math.abs(t) > 2 ** 32
          ? (o = M2(String(t)))
          : typeof t == 'bigint' &&
            ((o = String(t)),
            (t > BigInt(2) ** BigInt(32) || t < -(BigInt(2) ** BigInt(32))) && (o = M2(o)),
            (o += 'n')),
        (n += ` It must be ${e}. Received ${o}`),
        n
      );
    },
    RangeError
  );
  function M2(r) {
    let e = '',
      t = r.length,
      n = r[0] === '-' ? 1 : 0;
    for (; t >= n + 4; t -= 3) e = `_${r.slice(t - 3, t)}${e}`;
    return `${r.slice(0, t)}${e}`;
  }
  function kF(r, e, t) {
    Ei(e, 'offset'), (r[e] === void 0 || r[e + t] === void 0) && Ha(e, r.length - (t + 1));
  }
  function H2(r, e, t, n, o, s) {
    if (r > t || r < e) {
      let i = typeof e == 'bigint' ? 'n' : '',
        c;
      throw (
        (s > 3
          ? e === 0 || e === BigInt(0)
            ? (c = `>= 0${i} and < 2${i} ** ${(s + 1) * 8}${i}`)
            : (c = `>= -(2${i} ** ${(s + 1) * 8 - 1}${i}) and < 2 ** ${(s + 1) * 8 - 1}${i}`)
          : (c = `>= ${e}${i} and <= ${t}${i}`),
        new vi.ERR_OUT_OF_RANGE('value', c, r))
      );
    }
    kF(n, o, s);
  }
  function Ei(r, e) {
    if (typeof r != 'number') throw new vi.ERR_INVALID_ARG_TYPE(e, 'number', r);
  }
  function Ha(r, e, t) {
    throw Math.floor(r) !== r
      ? (Ei(r, t), new vi.ERR_OUT_OF_RANGE(t || 'offset', 'an integer', r))
      : e < 0
        ? new vi.ERR_BUFFER_OUT_OF_BOUNDS()
        : new vi.ERR_OUT_OF_RANGE(t || 'offset', `>= ${t ? 1 : 0} and <= ${e}`, r);
  }
  var TF = /[^+/0-9A-Za-z-_]/g;
  function PF(r) {
    if (((r = r.split('=')[0]), (r = r.trim().replace(TF, '')), r.length < 2)) return '';
    for (; r.length % 4 !== 0; ) r = r + '=';
    return r;
  }
  function by(r, e) {
    e = e || 1 / 0;
    let t,
      n = r.length,
      o = null,
      s = [];
    for (let i = 0; i < n; ++i) {
      if (((t = r.charCodeAt(i)), t > 55295 && t < 57344)) {
        if (!o) {
          if (t > 56319) {
            (e -= 3) > -1 && s.push(239, 191, 189);
            continue;
          } else if (i + 1 === n) {
            (e -= 3) > -1 && s.push(239, 191, 189);
            continue;
          }
          o = t;
          continue;
        }
        if (t < 56320) {
          (e -= 3) > -1 && s.push(239, 191, 189), (o = t);
          continue;
        }
        t = (((o - 55296) << 10) | (t - 56320)) + 65536;
      } else o && (e -= 3) > -1 && s.push(239, 191, 189);
      if (((o = null), t < 128)) {
        if ((e -= 1) < 0) break;
        s.push(t);
      } else if (t < 2048) {
        if ((e -= 2) < 0) break;
        s.push((t >> 6) | 192, (t & 63) | 128);
      } else if (t < 65536) {
        if ((e -= 3) < 0) break;
        s.push((t >> 12) | 224, ((t >> 6) & 63) | 128, (t & 63) | 128);
      } else if (t < 1114112) {
        if ((e -= 4) < 0) break;
        s.push((t >> 18) | 240, ((t >> 12) & 63) | 128, ((t >> 6) & 63) | 128, (t & 63) | 128);
      } else throw new Error('Invalid code point');
    }
    return s;
  }
  function BF(r) {
    let e = [];
    for (let t = 0; t < r.length; ++t) e.push(r.charCodeAt(t) & 255);
    return e;
  }
  function MF(r, e) {
    let t,
      n,
      o,
      s = [];
    for (let i = 0; i < r.length && !((e -= 2) < 0); ++i)
      (t = r.charCodeAt(i)), (n = t >> 8), (o = t % 256), s.push(o), s.push(n);
    return s;
  }
  function W2(r) {
    return yy.toByteArray(PF(r));
  }
  function hf(r, e, t, n) {
    let o;
    for (o = 0; o < n && !(o + t >= e.length || o >= r.length); ++o) e[o + t] = r[o];
    return o;
  }
  function wn(r, e) {
    return (
      r instanceof e ||
      (r != null &&
        r.constructor != null &&
        r.constructor.name != null &&
        r.constructor.name === e.name)
    );
  }
  function Ey(r) {
    return r !== r;
  }
  var zF = (function () {
    let r = '0123456789abcdef',
      e = new Array(256);
    for (let t = 0; t < 16; ++t) {
      let n = t * 16;
      for (let o = 0; o < 16; ++o) e[n + o] = r[t] + r[o];
    }
    return e;
  })();
  function fo(r) {
    return typeof BigInt > 'u' ? LF : r;
  }
  function LF() {
    throw new Error('BigInt not supported');
  }
});
var Ty = te(() => {
  f();
});
var iP = te((Uy) => {
  'use strict';
  f();
  function jn(r, e, t) {
    return e <= r && r <= t;
  }
  function kf(r) {
    if (r === void 0) return {};
    if (r === Object(r)) return r;
    throw TypeError('Could not convert argument to dictionary');
  }
  function Nj(r) {
    for (var e = String(r), t = e.length, n = 0, o = []; n < t; ) {
      var s = e.charCodeAt(n);
      if (s < 55296 || s > 57343) o.push(s);
      else if (56320 <= s && s <= 57343) o.push(65533);
      else if (55296 <= s && s <= 56319)
        if (n === t - 1) o.push(65533);
        else {
          var i = r.charCodeAt(n + 1);
          if (56320 <= i && i <= 57343) {
            var c = s & 1023,
              u = i & 1023;
            o.push(65536 + (c << 10) + u), (n += 1);
          } else o.push(65533);
        }
      n += 1;
    }
    return o;
  }
  function Oj(r) {
    for (var e = '', t = 0; t < r.length; ++t) {
      var n = r[t];
      n <= 65535
        ? (e += String.fromCharCode(n))
        : ((n -= 65536), (e += String.fromCharCode((n >> 10) + 55296, (n & 1023) + 56320)));
    }
    return e;
  }
  var _f = -1;
  function Dy(r) {
    this.tokens = [].slice.call(r);
  }
  Dy.prototype = {
    endOfStream: function () {
      return !this.tokens.length;
    },
    read: function () {
      return this.tokens.length ? this.tokens.shift() : _f;
    },
    prepend: function (r) {
      if (Array.isArray(r)) for (var e = r; e.length; ) this.tokens.unshift(e.pop());
      else this.tokens.unshift(r);
    },
    push: function (r) {
      if (Array.isArray(r)) for (var e = r; e.length; ) this.tokens.push(e.shift());
      else this.tokens.push(r);
    },
  };
  var Ii = -1;
  function qy(r, e) {
    if (r) throw TypeError('Decoder error');
    return e || 65533;
  }
  var Af = 'utf-8';
  function Rf(r, e) {
    if (!(this instanceof Rf)) return new Rf(r, e);
    if (((r = r !== void 0 ? String(r).toLowerCase() : Af), r !== Af))
      throw new Error('Encoding not supported. Only utf-8 is supported');
    (e = kf(e)),
      (this._streaming = !1),
      (this._BOMseen = !1),
      (this._decoder = null),
      (this._fatal = !!e.fatal),
      (this._ignoreBOM = !!e.ignoreBOM),
      Object.defineProperty(this, 'encoding', { value: 'utf-8' }),
      Object.defineProperty(this, 'fatal', { value: this._fatal }),
      Object.defineProperty(this, 'ignoreBOM', { value: this._ignoreBOM });
  }
  Rf.prototype = {
    decode: function (e, t) {
      var n;
      typeof e == 'object' && e instanceof ArrayBuffer
        ? (n = new Uint8Array(e))
        : typeof e == 'object' && 'buffer' in e && e.buffer instanceof ArrayBuffer
          ? (n = new Uint8Array(e.buffer, e.byteOffset, e.byteLength))
          : (n = new Uint8Array(0)),
        (t = kf(t)),
        this._streaming || ((this._decoder = new Cj({ fatal: this._fatal })), (this._BOMseen = !1)),
        (this._streaming = !!t.stream);
      for (
        var o = new Dy(n), s = [], i;
        !o.endOfStream() && ((i = this._decoder.handler(o, o.read())), i !== Ii);

      )
        i !== null && (Array.isArray(i) ? s.push.apply(s, i) : s.push(i));
      if (!this._streaming) {
        do {
          if (((i = this._decoder.handler(o, o.read())), i === Ii)) break;
          i !== null && (Array.isArray(i) ? s.push.apply(s, i) : s.push(i));
        } while (!o.endOfStream());
        this._decoder = null;
      }
      return (
        s.length &&
          ['utf-8'].indexOf(this.encoding) !== -1 &&
          !this._ignoreBOM &&
          !this._BOMseen &&
          (s[0] === 65279 ? ((this._BOMseen = !0), s.shift()) : (this._BOMseen = !0)),
        Oj(s)
      );
    },
  };
  function If(r, e) {
    if (!(this instanceof If)) return new If(r, e);
    if (((r = r !== void 0 ? String(r).toLowerCase() : Af), r !== Af))
      throw new Error('Encoding not supported. Only utf-8 is supported');
    (e = kf(e)),
      (this._streaming = !1),
      (this._encoder = null),
      (this._options = { fatal: !!e.fatal }),
      Object.defineProperty(this, 'encoding', { value: 'utf-8' });
  }
  If.prototype = {
    encode: function (e, t) {
      (e = e ? String(e) : ''),
        (t = kf(t)),
        this._streaming || (this._encoder = new qj(this._options)),
        (this._streaming = !!t.stream);
      for (
        var n = [], o = new Dy(Nj(e)), s;
        !o.endOfStream() && ((s = this._encoder.handler(o, o.read())), s !== Ii);

      )
        Array.isArray(s) ? n.push.apply(n, s) : n.push(s);
      if (!this._streaming) {
        for (; (s = this._encoder.handler(o, o.read())), s !== Ii; )
          Array.isArray(s) ? n.push.apply(n, s) : n.push(s);
        this._encoder = null;
      }
      return new Uint8Array(n);
    },
  };
  function Cj(r) {
    var e = r.fatal,
      t = 0,
      n = 0,
      o = 0,
      s = 128,
      i = 191;
    this.handler = function (c, u) {
      if (u === _f && o !== 0) return (o = 0), qy(e);
      if (u === _f) return Ii;
      if (o === 0) {
        if (jn(u, 0, 127)) return u;
        if (jn(u, 194, 223)) (o = 1), (t = u - 192);
        else if (jn(u, 224, 239))
          u === 224 && (s = 160), u === 237 && (i = 159), (o = 2), (t = u - 224);
        else if (jn(u, 240, 244))
          u === 240 && (s = 144), u === 244 && (i = 143), (o = 3), (t = u - 240);
        else return qy(e);
        return (t = t << (6 * o)), null;
      }
      if (!jn(u, s, i)) return (t = o = n = 0), (s = 128), (i = 191), c.prepend(u), qy(e);
      if (((s = 128), (i = 191), (n += 1), (t += (u - 128) << (6 * (o - n))), n !== o)) return null;
      var l = t;
      return (t = o = n = 0), l;
    };
  }
  function qj(r) {
    var e = r.fatal;
    this.handler = function (t, n) {
      if (n === _f) return Ii;
      if (jn(n, 0, 127)) return n;
      var o, s;
      jn(n, 128, 2047)
        ? ((o = 1), (s = 192))
        : jn(n, 2048, 65535)
          ? ((o = 2), (s = 224))
          : jn(n, 65536, 1114111) && ((o = 3), (s = 240));
      for (var i = [(n >> (6 * o)) + s]; o > 0; ) {
        var c = n >> (6 * (o - 1));
        i.push(128 | (c & 63)), (o -= 1);
      }
      return i;
    };
  }
  Uy.TextEncoder = If;
  Uy.TextDecoder = Rf;
});
var fP = te((Qe) => {
  'use strict';
  f();
  var Dj =
      (Qe && Qe.__createBinding) ||
      (Object.create
        ? function (r, e, t, n) {
            n === void 0 && (n = t),
              Object.defineProperty(r, n, {
                enumerable: !0,
                get: function () {
                  return e[t];
                },
              });
          }
        : function (r, e, t, n) {
            n === void 0 && (n = t), (r[n] = e[t]);
          }),
    Uj =
      (Qe && Qe.__setModuleDefault) ||
      (Object.create
        ? function (r, e) {
            Object.defineProperty(r, 'default', { enumerable: !0, value: e });
          }
        : function (r, e) {
            r.default = e;
          }),
    En =
      (Qe && Qe.__decorate) ||
      function (r, e, t, n) {
        var o = arguments.length,
          s = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, t)) : n,
          i;
        if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
          s = Reflect.decorate(r, e, t, n);
        else
          for (var c = r.length - 1; c >= 0; c--)
            (i = r[c]) && (s = (o < 3 ? i(s) : o > 3 ? i(e, t, s) : i(e, t)) || s);
        return o > 3 && s && Object.defineProperty(e, t, s), s;
      },
    Fj =
      (Qe && Qe.__importStar) ||
      function (r) {
        if (r && r.__esModule) return r;
        var e = {};
        if (r != null)
          for (var t in r) t !== 'default' && Object.hasOwnProperty.call(r, t) && Dj(e, r, t);
        return Uj(e, r), e;
      },
    aP =
      (Qe && Qe.__importDefault) ||
      function (r) {
        return r && r.__esModule ? r : { default: r };
      };
  Object.defineProperty(Qe, '__esModule', { value: !0 });
  Qe.deserializeUnchecked =
    Qe.deserialize =
    Qe.serialize =
    Qe.BinaryReader =
    Qe.BinaryWriter =
    Qe.BorshError =
    Qe.baseDecode =
    Qe.baseEncode =
      void 0;
  var _o = aP($c()),
    cP = aP(io()),
    jj = Fj(iP()),
    Hj = typeof TextDecoder != 'function' ? jj.TextDecoder : TextDecoder,
    Wj = new Hj('utf-8', { fatal: !0 });
  function Kj(r) {
    return typeof r == 'string' && (r = v.from(r, 'utf8')), cP.default.encode(v.from(r));
  }
  Qe.baseEncode = Kj;
  function Vj(r) {
    return v.from(cP.default.decode(r));
  }
  Qe.baseDecode = Vj;
  var Fy = 1024,
    Qt = class extends Error {
      constructor(e) {
        super(e), (this.fieldPath = []), (this.originalMessage = e);
      }
      addToFieldPath(e) {
        this.fieldPath.splice(0, 0, e),
          (this.message = this.originalMessage + ': ' + this.fieldPath.join('.'));
      }
    };
  Qe.BorshError = Qt;
  var Tf = class {
    constructor() {
      (this.buf = v.alloc(Fy)), (this.length = 0);
    }
    maybeResize() {
      this.buf.length < 16 + this.length && (this.buf = v.concat([this.buf, v.alloc(Fy)]));
    }
    writeU8(e) {
      this.maybeResize(), this.buf.writeUInt8(e, this.length), (this.length += 1);
    }
    writeU16(e) {
      this.maybeResize(), this.buf.writeUInt16LE(e, this.length), (this.length += 2);
    }
    writeU32(e) {
      this.maybeResize(), this.buf.writeUInt32LE(e, this.length), (this.length += 4);
    }
    writeU64(e) {
      this.maybeResize(), this.writeBuffer(v.from(new _o.default(e).toArray('le', 8)));
    }
    writeU128(e) {
      this.maybeResize(), this.writeBuffer(v.from(new _o.default(e).toArray('le', 16)));
    }
    writeU256(e) {
      this.maybeResize(), this.writeBuffer(v.from(new _o.default(e).toArray('le', 32)));
    }
    writeU512(e) {
      this.maybeResize(), this.writeBuffer(v.from(new _o.default(e).toArray('le', 64)));
    }
    writeBuffer(e) {
      (this.buf = v.concat([v.from(this.buf.subarray(0, this.length)), e, v.alloc(Fy)])),
        (this.length += e.length);
    }
    writeString(e) {
      this.maybeResize();
      let t = v.from(e, 'utf8');
      this.writeU32(t.length), this.writeBuffer(t);
    }
    writeFixedArray(e) {
      this.writeBuffer(v.from(e));
    }
    writeArray(e, t) {
      this.maybeResize(), this.writeU32(e.length);
      for (let n of e) this.maybeResize(), t(n);
    }
    toArray() {
      return this.buf.subarray(0, this.length);
    }
  };
  Qe.BinaryWriter = Tf;
  function _n(r, e, t) {
    let n = t.value;
    t.value = function (...o) {
      try {
        return n.apply(this, o);
      } catch (s) {
        if (s instanceof RangeError) {
          let i = s.code;
          if (['ERR_BUFFER_OUT_OF_BOUNDS', 'ERR_OUT_OF_RANGE'].indexOf(i) >= 0)
            throw new Qt('Reached the end of buffer when deserializing');
        }
        throw s;
      }
    };
  }
  var yr = class {
    constructor(e) {
      (this.buf = e), (this.offset = 0);
    }
    readU8() {
      let e = this.buf.readUInt8(this.offset);
      return (this.offset += 1), e;
    }
    readU16() {
      let e = this.buf.readUInt16LE(this.offset);
      return (this.offset += 2), e;
    }
    readU32() {
      let e = this.buf.readUInt32LE(this.offset);
      return (this.offset += 4), e;
    }
    readU64() {
      let e = this.readBuffer(8);
      return new _o.default(e, 'le');
    }
    readU128() {
      let e = this.readBuffer(16);
      return new _o.default(e, 'le');
    }
    readU256() {
      let e = this.readBuffer(32);
      return new _o.default(e, 'le');
    }
    readU512() {
      let e = this.readBuffer(64);
      return new _o.default(e, 'le');
    }
    readBuffer(e) {
      if (this.offset + e > this.buf.length)
        throw new Qt(`Expected buffer length ${e} isn't within bounds`);
      let t = this.buf.slice(this.offset, this.offset + e);
      return (this.offset += e), t;
    }
    readString() {
      let e = this.readU32(),
        t = this.readBuffer(e);
      try {
        return Wj.decode(t);
      } catch (n) {
        throw new Qt(`Error decoding UTF-8 string: ${n}`);
      }
    }
    readFixedArray(e) {
      return new Uint8Array(this.readBuffer(e));
    }
    readArray(e) {
      let t = this.readU32(),
        n = Array();
      for (let o = 0; o < t; ++o) n.push(e());
      return n;
    }
  };
  En([_n], yr.prototype, 'readU8', null);
  En([_n], yr.prototype, 'readU16', null);
  En([_n], yr.prototype, 'readU32', null);
  En([_n], yr.prototype, 'readU64', null);
  En([_n], yr.prototype, 'readU128', null);
  En([_n], yr.prototype, 'readU256', null);
  En([_n], yr.prototype, 'readU512', null);
  En([_n], yr.prototype, 'readString', null);
  En([_n], yr.prototype, 'readFixedArray', null);
  En([_n], yr.prototype, 'readArray', null);
  Qe.BinaryReader = yr;
  function uP(r) {
    return r.charAt(0).toUpperCase() + r.slice(1);
  }
  function Ts(r, e, t, n, o) {
    try {
      if (typeof n == 'string') o[`write${uP(n)}`](t);
      else if (n instanceof Array)
        if (typeof n[0] == 'number') {
          if (t.length !== n[0])
            throw new Qt(`Expecting byte array of length ${n[0]}, but got ${t.length} bytes`);
          o.writeFixedArray(t);
        } else if (n.length === 2 && typeof n[1] == 'number') {
          if (t.length !== n[1])
            throw new Qt(`Expecting byte array of length ${n[1]}, but got ${t.length} bytes`);
          for (let s = 0; s < n[1]; s++) Ts(r, null, t[s], n[0], o);
        } else
          o.writeArray(t, (s) => {
            Ts(r, e, s, n[0], o);
          });
      else if (n.kind !== void 0)
        switch (n.kind) {
          case 'option': {
            t == null ? o.writeU8(0) : (o.writeU8(1), Ts(r, e, t, n.type, o));
            break;
          }
          case 'map': {
            o.writeU32(t.size),
              t.forEach((s, i) => {
                Ts(r, e, i, n.key, o), Ts(r, e, s, n.value, o);
              });
            break;
          }
          default:
            throw new Qt(`FieldType ${n} unrecognized`);
        }
      else pP(r, t, o);
    } catch (s) {
      throw (s instanceof Qt && s.addToFieldPath(e), s);
    }
  }
  function pP(r, e, t) {
    if (typeof e.borshSerialize == 'function') {
      e.borshSerialize(t);
      return;
    }
    let n = r.get(e.constructor);
    if (!n) throw new Qt(`Class ${e.constructor.name} is missing in schema`);
    if (n.kind === 'struct')
      n.fields.map(([o, s]) => {
        Ts(r, o, e[o], s, t);
      });
    else if (n.kind === 'enum') {
      let o = e[n.field];
      for (let s = 0; s < n.values.length; ++s) {
        let [i, c] = n.values[s];
        if (i === o) {
          t.writeU8(s), Ts(r, i, e[i], c, t);
          break;
        }
      }
    } else throw new Qt(`Unexpected schema kind: ${n.kind} for ${e.constructor.name}`);
  }
  function $j(r, e, t = Tf) {
    let n = new t();
    return pP(r, e, n), n.toArray();
  }
  Qe.serialize = $j;
  function Ps(r, e, t, n) {
    try {
      if (typeof t == 'string') return n[`read${uP(t)}`]();
      if (t instanceof Array) {
        if (typeof t[0] == 'number') return n.readFixedArray(t[0]);
        if (typeof t[1] == 'number') {
          let o = [];
          for (let s = 0; s < t[1]; s++) o.push(Ps(r, null, t[0], n));
          return o;
        } else return n.readArray(() => Ps(r, e, t[0], n));
      }
      if (t.kind === 'option') return n.readU8() ? Ps(r, e, t.type, n) : void 0;
      if (t.kind === 'map') {
        let o = new Map(),
          s = n.readU32();
        for (let i = 0; i < s; i++) {
          let c = Ps(r, e, t.key, n),
            u = Ps(r, e, t.value, n);
          o.set(c, u);
        }
        return o;
      }
      return jy(r, t, n);
    } catch (o) {
      throw (o instanceof Qt && o.addToFieldPath(e), o);
    }
  }
  function jy(r, e, t) {
    if (typeof e.borshDeserialize == 'function') return e.borshDeserialize(t);
    let n = r.get(e);
    if (!n) throw new Qt(`Class ${e.name} is missing in schema`);
    if (n.kind === 'struct') {
      let o = {};
      for (let [s, i] of r.get(e).fields) o[s] = Ps(r, s, i, t);
      return new e(o);
    }
    if (n.kind === 'enum') {
      let o = t.readU8();
      if (o >= n.values.length) throw new Qt(`Enum index: ${o} is out of range`);
      let [s, i] = n.values[o],
        c = Ps(r, s, i, t);
      return new e({ [s]: c });
    }
    throw new Qt(`Unexpected schema kind: ${n.kind} for ${e.constructor.name}`);
  }
  function Gj(r, e, t, n = yr) {
    let o = new n(t),
      s = jy(r, e, o);
    if (o.offset < t.length)
      throw new Qt(`Unexpected ${t.length - o.offset} bytes after deserialized data`);
    return s;
  }
  Qe.deserialize = Gj;
  function Yj(r, e, t, n = yr) {
    let o = new n(t);
    return jy(r, e, o);
  }
  Qe.deserializeUnchecked = Yj;
});
var Hy = te((ki) => {
  'use strict';
  f();
  Object.defineProperty(ki, '__esModule', { value: !0 });
  var Pf;
  function Zj(r) {
    {
      let e = v.from(r);
      e.reverse();
      let t = e.toString('hex');
      return t.length === 0 ? BigInt(0) : BigInt(`0x${t}`);
    }
    return Pf.toBigInt(r, !1);
  }
  ki.toBigIntLE = Zj;
  function Jj(r) {
    {
      let e = r.toString('hex');
      return e.length === 0 ? BigInt(0) : BigInt(`0x${e}`);
    }
    return Pf.toBigInt(r, !0);
  }
  ki.toBigIntBE = Jj;
  function Xj(r, e) {
    {
      let t = r.toString(16),
        n = v.from(t.padStart(e * 2, '0').slice(0, e * 2), 'hex');
      return n.reverse(), n;
    }
    return Pf.fromBigInt(r, v.allocUnsafe(e), !1);
  }
  ki.toBufferLE = Xj;
  function Qj(r, e) {
    {
      let t = r.toString(16);
      return v.from(t.padStart(e * 2, '0').slice(0, e * 2), 'hex');
    }
    return Pf.fromBigInt(r, v.allocUnsafe(e), !0);
  }
  ki.toBufferBE = Qj;
});
var Gy = te(($y) => {
  'use strict';
  f();
  Object.defineProperty($y, '__esModule', { value: !0 });
  $y.default = iH;
  var zf,
    sH = new Uint8Array(16);
  function iH() {
    if (
      !zf &&
      ((zf = typeof crypto < 'u' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)),
      !zf)
    )
      throw new Error(
        'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported'
      );
    return zf(sH);
  }
});
var yP = te((Lf) => {
  'use strict';
  f();
  Object.defineProperty(Lf, '__esModule', { value: !0 });
  Lf.default = void 0;
  var aH =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  Lf.default = aH;
});
var Xa = te((Nf) => {
  'use strict';
  f();
  Object.defineProperty(Nf, '__esModule', { value: !0 });
  Nf.default = void 0;
  var cH = uH(yP());
  function uH(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function pH(r) {
    return typeof r == 'string' && cH.default.test(r);
  }
  var fH = pH;
  Nf.default = fH;
});
var ec = te((Qa) => {
  'use strict';
  f();
  Object.defineProperty(Qa, '__esModule', { value: !0 });
  Qa.default = void 0;
  Qa.unsafeStringify = gP;
  var lH = dH(Xa());
  function dH(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var er = [];
  for (let r = 0; r < 256; ++r) er.push((r + 256).toString(16).slice(1));
  function gP(r, e = 0) {
    return (
      er[r[e + 0]] +
      er[r[e + 1]] +
      er[r[e + 2]] +
      er[r[e + 3]] +
      '-' +
      er[r[e + 4]] +
      er[r[e + 5]] +
      '-' +
      er[r[e + 6]] +
      er[r[e + 7]] +
      '-' +
      er[r[e + 8]] +
      er[r[e + 9]] +
      '-' +
      er[r[e + 10]] +
      er[r[e + 11]] +
      er[r[e + 12]] +
      er[r[e + 13]] +
      er[r[e + 14]] +
      er[r[e + 15]]
    );
  }
  function hH(r, e = 0) {
    let t = gP(r, e);
    if (!(0, lH.default)(t)) throw TypeError('Stringified UUID is invalid');
    return t;
  }
  var mH = hH;
  Qa.default = mH;
});
var bP = te((Of) => {
  'use strict';
  f();
  Object.defineProperty(Of, '__esModule', { value: !0 });
  Of.default = void 0;
  var yH = xH(Gy()),
    gH = ec();
  function xH(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var xP,
    Yy,
    Zy = 0,
    Jy = 0;
  function bH(r, e, t) {
    let n = (e && t) || 0,
      o = e || new Array(16);
    r = r || {};
    let s = r.node || xP,
      i = r.clockseq !== void 0 ? r.clockseq : Yy;
    if (s == null || i == null) {
      let A = r.random || (r.rng || yH.default)();
      s == null && (s = xP = [A[0] | 1, A[1], A[2], A[3], A[4], A[5]]),
        i == null && (i = Yy = ((A[6] << 8) | A[7]) & 16383);
    }
    let c = r.msecs !== void 0 ? r.msecs : Date.now(),
      u = r.nsecs !== void 0 ? r.nsecs : Jy + 1,
      l = c - Zy + (u - Jy) / 1e4;
    if (
      (l < 0 && r.clockseq === void 0 && (i = (i + 1) & 16383),
      (l < 0 || c > Zy) && r.nsecs === void 0 && (u = 0),
      u >= 1e4)
    )
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    (Zy = c), (Jy = u), (Yy = i), (c += 122192928e5);
    let w = ((c & 268435455) * 1e4 + u) % 4294967296;
    (o[n++] = (w >>> 24) & 255),
      (o[n++] = (w >>> 16) & 255),
      (o[n++] = (w >>> 8) & 255),
      (o[n++] = w & 255);
    let x = ((c / 4294967296) * 1e4) & 268435455;
    (o[n++] = (x >>> 8) & 255),
      (o[n++] = x & 255),
      (o[n++] = ((x >>> 24) & 15) | 16),
      (o[n++] = (x >>> 16) & 255),
      (o[n++] = (i >>> 8) | 128),
      (o[n++] = i & 255);
    for (let A = 0; A < 6; ++A) o[n + A] = s[A];
    return e || (0, gH.unsafeStringify)(o);
  }
  var wH = bH;
  Of.default = wH;
});
var Xy = te((Cf) => {
  'use strict';
  f();
  Object.defineProperty(Cf, '__esModule', { value: !0 });
  Cf.default = void 0;
  var vH = SH(Xa());
  function SH(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function EH(r) {
    if (!(0, vH.default)(r)) throw TypeError('Invalid UUID');
    let e,
      t = new Uint8Array(16);
    return (
      (t[0] = (e = parseInt(r.slice(0, 8), 16)) >>> 24),
      (t[1] = (e >>> 16) & 255),
      (t[2] = (e >>> 8) & 255),
      (t[3] = e & 255),
      (t[4] = (e = parseInt(r.slice(9, 13), 16)) >>> 8),
      (t[5] = e & 255),
      (t[6] = (e = parseInt(r.slice(14, 18), 16)) >>> 8),
      (t[7] = e & 255),
      (t[8] = (e = parseInt(r.slice(19, 23), 16)) >>> 8),
      (t[9] = e & 255),
      (t[10] = ((e = parseInt(r.slice(24, 36), 16)) / 1099511627776) & 255),
      (t[11] = (e / 4294967296) & 255),
      (t[12] = (e >>> 24) & 255),
      (t[13] = (e >>> 16) & 255),
      (t[14] = (e >>> 8) & 255),
      (t[15] = e & 255),
      t
    );
  }
  var _H = EH;
  Cf.default = _H;
});
var Qy = te((Ms) => {
  'use strict';
  f();
  Object.defineProperty(Ms, '__esModule', { value: !0 });
  Ms.URL = Ms.DNS = void 0;
  Ms.default = TH;
  var AH = ec(),
    RH = IH(Xy());
  function IH(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function kH(r) {
    r = unescape(encodeURIComponent(r));
    let e = [];
    for (let t = 0; t < r.length; ++t) e.push(r.charCodeAt(t));
    return e;
  }
  var wP = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
  Ms.DNS = wP;
  var vP = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
  Ms.URL = vP;
  function TH(r, e, t) {
    function n(o, s, i, c) {
      var u;
      if (
        (typeof o == 'string' && (o = kH(o)),
        typeof s == 'string' && (s = (0, RH.default)(s)),
        ((u = s) === null || u === void 0 ? void 0 : u.length) !== 16)
      )
        throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
      let l = new Uint8Array(16 + o.length);
      if (
        (l.set(s),
        l.set(o, s.length),
        (l = t(l)),
        (l[6] = (l[6] & 15) | e),
        (l[8] = (l[8] & 63) | 128),
        i)
      ) {
        c = c || 0;
        for (let w = 0; w < 16; ++w) i[c + w] = l[w];
        return i;
      }
      return (0, AH.unsafeStringify)(l);
    }
    try {
      n.name = r;
    } catch {}
    return (n.DNS = wP), (n.URL = vP), n;
  }
});
var EP = te((Df) => {
  'use strict';
  f();
  Object.defineProperty(Df, '__esModule', { value: !0 });
  Df.default = void 0;
  function PH(r) {
    if (typeof r == 'string') {
      let e = unescape(encodeURIComponent(r));
      r = new Uint8Array(e.length);
      for (let t = 0; t < e.length; ++t) r[t] = e.charCodeAt(t);
    }
    return BH(MH(zH(r), r.length * 8));
  }
  function BH(r) {
    let e = [],
      t = r.length * 32,
      n = '0123456789abcdef';
    for (let o = 0; o < t; o += 8) {
      let s = (r[o >> 5] >>> o % 32) & 255,
        i = parseInt(n.charAt((s >>> 4) & 15) + n.charAt(s & 15), 16);
      e.push(i);
    }
    return e;
  }
  function SP(r) {
    return (((r + 64) >>> 9) << 4) + 14 + 1;
  }
  function MH(r, e) {
    (r[e >> 5] |= 128 << e % 32), (r[SP(e) - 1] = e);
    let t = 1732584193,
      n = -271733879,
      o = -1732584194,
      s = 271733878;
    for (let i = 0; i < r.length; i += 16) {
      let c = t,
        u = n,
        l = o,
        w = s;
      (t = ar(t, n, o, s, r[i], 7, -680876936)),
        (s = ar(s, t, n, o, r[i + 1], 12, -389564586)),
        (o = ar(o, s, t, n, r[i + 2], 17, 606105819)),
        (n = ar(n, o, s, t, r[i + 3], 22, -1044525330)),
        (t = ar(t, n, o, s, r[i + 4], 7, -176418897)),
        (s = ar(s, t, n, o, r[i + 5], 12, 1200080426)),
        (o = ar(o, s, t, n, r[i + 6], 17, -1473231341)),
        (n = ar(n, o, s, t, r[i + 7], 22, -45705983)),
        (t = ar(t, n, o, s, r[i + 8], 7, 1770035416)),
        (s = ar(s, t, n, o, r[i + 9], 12, -1958414417)),
        (o = ar(o, s, t, n, r[i + 10], 17, -42063)),
        (n = ar(n, o, s, t, r[i + 11], 22, -1990404162)),
        (t = ar(t, n, o, s, r[i + 12], 7, 1804603682)),
        (s = ar(s, t, n, o, r[i + 13], 12, -40341101)),
        (o = ar(o, s, t, n, r[i + 14], 17, -1502002290)),
        (n = ar(n, o, s, t, r[i + 15], 22, 1236535329)),
        (t = cr(t, n, o, s, r[i + 1], 5, -165796510)),
        (s = cr(s, t, n, o, r[i + 6], 9, -1069501632)),
        (o = cr(o, s, t, n, r[i + 11], 14, 643717713)),
        (n = cr(n, o, s, t, r[i], 20, -373897302)),
        (t = cr(t, n, o, s, r[i + 5], 5, -701558691)),
        (s = cr(s, t, n, o, r[i + 10], 9, 38016083)),
        (o = cr(o, s, t, n, r[i + 15], 14, -660478335)),
        (n = cr(n, o, s, t, r[i + 4], 20, -405537848)),
        (t = cr(t, n, o, s, r[i + 9], 5, 568446438)),
        (s = cr(s, t, n, o, r[i + 14], 9, -1019803690)),
        (o = cr(o, s, t, n, r[i + 3], 14, -187363961)),
        (n = cr(n, o, s, t, r[i + 8], 20, 1163531501)),
        (t = cr(t, n, o, s, r[i + 13], 5, -1444681467)),
        (s = cr(s, t, n, o, r[i + 2], 9, -51403784)),
        (o = cr(o, s, t, n, r[i + 7], 14, 1735328473)),
        (n = cr(n, o, s, t, r[i + 12], 20, -1926607734)),
        (t = ur(t, n, o, s, r[i + 5], 4, -378558)),
        (s = ur(s, t, n, o, r[i + 8], 11, -2022574463)),
        (o = ur(o, s, t, n, r[i + 11], 16, 1839030562)),
        (n = ur(n, o, s, t, r[i + 14], 23, -35309556)),
        (t = ur(t, n, o, s, r[i + 1], 4, -1530992060)),
        (s = ur(s, t, n, o, r[i + 4], 11, 1272893353)),
        (o = ur(o, s, t, n, r[i + 7], 16, -155497632)),
        (n = ur(n, o, s, t, r[i + 10], 23, -1094730640)),
        (t = ur(t, n, o, s, r[i + 13], 4, 681279174)),
        (s = ur(s, t, n, o, r[i], 11, -358537222)),
        (o = ur(o, s, t, n, r[i + 3], 16, -722521979)),
        (n = ur(n, o, s, t, r[i + 6], 23, 76029189)),
        (t = ur(t, n, o, s, r[i + 9], 4, -640364487)),
        (s = ur(s, t, n, o, r[i + 12], 11, -421815835)),
        (o = ur(o, s, t, n, r[i + 15], 16, 530742520)),
        (n = ur(n, o, s, t, r[i + 2], 23, -995338651)),
        (t = pr(t, n, o, s, r[i], 6, -198630844)),
        (s = pr(s, t, n, o, r[i + 7], 10, 1126891415)),
        (o = pr(o, s, t, n, r[i + 14], 15, -1416354905)),
        (n = pr(n, o, s, t, r[i + 5], 21, -57434055)),
        (t = pr(t, n, o, s, r[i + 12], 6, 1700485571)),
        (s = pr(s, t, n, o, r[i + 3], 10, -1894986606)),
        (o = pr(o, s, t, n, r[i + 10], 15, -1051523)),
        (n = pr(n, o, s, t, r[i + 1], 21, -2054922799)),
        (t = pr(t, n, o, s, r[i + 8], 6, 1873313359)),
        (s = pr(s, t, n, o, r[i + 15], 10, -30611744)),
        (o = pr(o, s, t, n, r[i + 6], 15, -1560198380)),
        (n = pr(n, o, s, t, r[i + 13], 21, 1309151649)),
        (t = pr(t, n, o, s, r[i + 4], 6, -145523070)),
        (s = pr(s, t, n, o, r[i + 11], 10, -1120210379)),
        (o = pr(o, s, t, n, r[i + 2], 15, 718787259)),
        (n = pr(n, o, s, t, r[i + 9], 21, -343485551)),
        (t = Ro(t, c)),
        (n = Ro(n, u)),
        (o = Ro(o, l)),
        (s = Ro(s, w));
    }
    return [t, n, o, s];
  }
  function zH(r) {
    if (r.length === 0) return [];
    let e = r.length * 8,
      t = new Uint32Array(SP(e));
    for (let n = 0; n < e; n += 8) t[n >> 5] |= (r[n / 8] & 255) << n % 32;
    return t;
  }
  function Ro(r, e) {
    let t = (r & 65535) + (e & 65535);
    return (((r >> 16) + (e >> 16) + (t >> 16)) << 16) | (t & 65535);
  }
  function LH(r, e) {
    return (r << e) | (r >>> (32 - e));
  }
  function qf(r, e, t, n, o, s) {
    return Ro(LH(Ro(Ro(e, r), Ro(n, s)), o), t);
  }
  function ar(r, e, t, n, o, s, i) {
    return qf((e & t) | (~e & n), r, e, o, s, i);
  }
  function cr(r, e, t, n, o, s, i) {
    return qf((e & n) | (t & ~n), r, e, o, s, i);
  }
  function ur(r, e, t, n, o, s, i) {
    return qf(e ^ t ^ n, r, e, o, s, i);
  }
  function pr(r, e, t, n, o, s, i) {
    return qf(t ^ (e | ~n), r, e, o, s, i);
  }
  var NH = PH;
  Df.default = NH;
});
var AP = te((Uf) => {
  'use strict';
  f();
  Object.defineProperty(Uf, '__esModule', { value: !0 });
  Uf.default = void 0;
  var OH = _P(Qy()),
    CH = _P(EP());
  function _P(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var qH = (0, OH.default)('v3', 48, CH.default),
    DH = qH;
  Uf.default = DH;
});
var RP = te((Ff) => {
  'use strict';
  f();
  Object.defineProperty(Ff, '__esModule', { value: !0 });
  Ff.default = void 0;
  var UH = typeof crypto < 'u' && crypto.randomUUID && crypto.randomUUID.bind(crypto),
    FH = { randomUUID: UH };
  Ff.default = FH;
});
var TP = te((jf) => {
  'use strict';
  f();
  Object.defineProperty(jf, '__esModule', { value: !0 });
  jf.default = void 0;
  var IP = kP(RP()),
    jH = kP(Gy()),
    HH = ec();
  function kP(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function WH(r, e, t) {
    if (IP.default.randomUUID && !e && !r) return IP.default.randomUUID();
    r = r || {};
    let n = r.random || (r.rng || jH.default)();
    if (((n[6] = (n[6] & 15) | 64), (n[8] = (n[8] & 63) | 128), e)) {
      t = t || 0;
      for (let o = 0; o < 16; ++o) e[t + o] = n[o];
      return e;
    }
    return (0, HH.unsafeStringify)(n);
  }
  var KH = WH;
  jf.default = KH;
});
var PP = te((Hf) => {
  'use strict';
  f();
  Object.defineProperty(Hf, '__esModule', { value: !0 });
  Hf.default = void 0;
  function VH(r, e, t, n) {
    switch (r) {
      case 0:
        return (e & t) ^ (~e & n);
      case 1:
        return e ^ t ^ n;
      case 2:
        return (e & t) ^ (e & n) ^ (t & n);
      case 3:
        return e ^ t ^ n;
    }
  }
  function e0(r, e) {
    return (r << e) | (r >>> (32 - e));
  }
  function $H(r) {
    let e = [1518500249, 1859775393, 2400959708, 3395469782],
      t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if (typeof r == 'string') {
      let i = unescape(encodeURIComponent(r));
      r = [];
      for (let c = 0; c < i.length; ++c) r.push(i.charCodeAt(c));
    } else Array.isArray(r) || (r = Array.prototype.slice.call(r));
    r.push(128);
    let n = r.length / 4 + 2,
      o = Math.ceil(n / 16),
      s = new Array(o);
    for (let i = 0; i < o; ++i) {
      let c = new Uint32Array(16);
      for (let u = 0; u < 16; ++u)
        c[u] =
          (r[i * 64 + u * 4] << 24) |
          (r[i * 64 + u * 4 + 1] << 16) |
          (r[i * 64 + u * 4 + 2] << 8) |
          r[i * 64 + u * 4 + 3];
      s[i] = c;
    }
    (s[o - 1][14] = ((r.length - 1) * 8) / Math.pow(2, 32)),
      (s[o - 1][14] = Math.floor(s[o - 1][14])),
      (s[o - 1][15] = ((r.length - 1) * 8) & 4294967295);
    for (let i = 0; i < o; ++i) {
      let c = new Uint32Array(80);
      for (let _ = 0; _ < 16; ++_) c[_] = s[i][_];
      for (let _ = 16; _ < 80; ++_) c[_] = e0(c[_ - 3] ^ c[_ - 8] ^ c[_ - 14] ^ c[_ - 16], 1);
      let u = t[0],
        l = t[1],
        w = t[2],
        x = t[3],
        A = t[4];
      for (let _ = 0; _ < 80; ++_) {
        let O = Math.floor(_ / 20),
          D = (e0(u, 5) + VH(O, l, w, x) + A + e[O] + c[_]) >>> 0;
        (A = x), (x = w), (w = e0(l, 30) >>> 0), (l = u), (u = D);
      }
      (t[0] = (t[0] + u) >>> 0),
        (t[1] = (t[1] + l) >>> 0),
        (t[2] = (t[2] + w) >>> 0),
        (t[3] = (t[3] + x) >>> 0),
        (t[4] = (t[4] + A) >>> 0);
    }
    return [
      (t[0] >> 24) & 255,
      (t[0] >> 16) & 255,
      (t[0] >> 8) & 255,
      t[0] & 255,
      (t[1] >> 24) & 255,
      (t[1] >> 16) & 255,
      (t[1] >> 8) & 255,
      t[1] & 255,
      (t[2] >> 24) & 255,
      (t[2] >> 16) & 255,
      (t[2] >> 8) & 255,
      t[2] & 255,
      (t[3] >> 24) & 255,
      (t[3] >> 16) & 255,
      (t[3] >> 8) & 255,
      t[3] & 255,
      (t[4] >> 24) & 255,
      (t[4] >> 16) & 255,
      (t[4] >> 8) & 255,
      t[4] & 255,
    ];
  }
  var GH = $H;
  Hf.default = GH;
});
var MP = te((Wf) => {
  'use strict';
  f();
  Object.defineProperty(Wf, '__esModule', { value: !0 });
  Wf.default = void 0;
  var YH = BP(Qy()),
    ZH = BP(PP());
  function BP(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var JH = (0, YH.default)('v5', 80, ZH.default),
    XH = JH;
  Wf.default = XH;
});
var zP = te((Kf) => {
  'use strict';
  f();
  Object.defineProperty(Kf, '__esModule', { value: !0 });
  Kf.default = void 0;
  var QH = '00000000-0000-0000-0000-000000000000';
  Kf.default = QH;
});
var LP = te((Vf) => {
  'use strict';
  f();
  Object.defineProperty(Vf, '__esModule', { value: !0 });
  Vf.default = void 0;
  var e7 = t7(Xa());
  function t7(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function r7(r) {
    if (!(0, e7.default)(r)) throw TypeError('Invalid UUID');
    return parseInt(r.slice(14, 15), 16);
  }
  var n7 = r7;
  Vf.default = n7;
});
var t0 = te((Qr) => {
  'use strict';
  f();
  Object.defineProperty(Qr, '__esModule', { value: !0 });
  Object.defineProperty(Qr, 'NIL', {
    enumerable: !0,
    get: function () {
      return c7.default;
    },
  });
  Object.defineProperty(Qr, 'parse', {
    enumerable: !0,
    get: function () {
      return l7.default;
    },
  });
  Object.defineProperty(Qr, 'stringify', {
    enumerable: !0,
    get: function () {
      return f7.default;
    },
  });
  Object.defineProperty(Qr, 'v1', {
    enumerable: !0,
    get: function () {
      return o7.default;
    },
  });
  Object.defineProperty(Qr, 'v3', {
    enumerable: !0,
    get: function () {
      return s7.default;
    },
  });
  Object.defineProperty(Qr, 'v4', {
    enumerable: !0,
    get: function () {
      return i7.default;
    },
  });
  Object.defineProperty(Qr, 'v5', {
    enumerable: !0,
    get: function () {
      return a7.default;
    },
  });
  Object.defineProperty(Qr, 'validate', {
    enumerable: !0,
    get: function () {
      return p7.default;
    },
  });
  Object.defineProperty(Qr, 'version', {
    enumerable: !0,
    get: function () {
      return u7.default;
    },
  });
  var o7 = Hn(bP()),
    s7 = Hn(AP()),
    i7 = Hn(TP()),
    a7 = Hn(MP()),
    c7 = Hn(zP()),
    u7 = Hn(LP()),
    p7 = Hn(Xa()),
    f7 = Hn(ec()),
    l7 = Hn(Xy());
  function Hn(r) {
    return r && r.__esModule ? r : { default: r };
  }
});
var OP = te((The, NP) => {
  'use strict';
  f();
  var d7 = t0().v4,
    h7 = function (r, e, t, n) {
      if (typeof r != 'string') throw new TypeError(r + ' must be a string');
      n = n || {};
      let o = typeof n.version == 'number' ? n.version : 2;
      if (o !== 1 && o !== 2) throw new TypeError(o + ' must be 1 or 2');
      let s = { method: r };
      if ((o === 2 && (s.jsonrpc = '2.0'), e)) {
        if (typeof e != 'object' && !Array.isArray(e))
          throw new TypeError(e + ' must be an object, array or omitted');
        s.params = e;
      }
      if (typeof t > 'u') {
        let i =
          typeof n.generator == 'function'
            ? n.generator
            : function () {
                return d7();
              };
        s.id = i(s, n);
      } else o === 2 && t === null ? n.notificationIdNull && (s.id = null) : (s.id = t);
      return s;
    };
  NP.exports = h7;
});
var qP = te((Bhe, CP) => {
  'use strict';
  f();
  var m7 = t0().v4,
    y7 = OP(),
    tc = function (r, e) {
      if (!(this instanceof tc)) return new tc(r, e);
      e || (e = {}),
        (this.options = {
          reviver: typeof e.reviver < 'u' ? e.reviver : null,
          replacer: typeof e.replacer < 'u' ? e.replacer : null,
          generator:
            typeof e.generator < 'u'
              ? e.generator
              : function () {
                  return m7();
                },
          version: typeof e.version < 'u' ? e.version : 2,
          notificationIdNull: typeof e.notificationIdNull == 'boolean' ? e.notificationIdNull : !1,
        }),
        (this.callServer = r);
    };
  CP.exports = tc;
  tc.prototype.request = function (r, e, t, n) {
    let o = this,
      s = null,
      i = Array.isArray(r) && typeof e == 'function';
    if (this.options.version === 1 && i)
      throw new TypeError('JSON-RPC 1.0 does not support batching');
    if (i || (!i && r && typeof r == 'object' && typeof e == 'function')) (n = e), (s = r);
    else {
      typeof t == 'function' && ((n = t), (t = void 0));
      let l = typeof n == 'function';
      try {
        s = y7(r, e, t, {
          generator: this.options.generator,
          version: this.options.version,
          notificationIdNull: this.options.notificationIdNull,
        });
      } catch (w) {
        if (l) return n(w);
        throw w;
      }
      if (!l) return s;
    }
    let u;
    try {
      u = JSON.stringify(s, this.options.replacer);
    } catch (l) {
      return n(l);
    }
    return (
      this.callServer(u, function (l, w) {
        o._parseResponse(l, w, n);
      }),
      s
    );
  };
  tc.prototype._parseResponse = function (r, e, t) {
    if (r) {
      t(r);
      return;
    }
    if (!e) return t();
    let n;
    try {
      n = JSON.parse(e, this.options.reviver);
    } catch (o) {
      return t(o);
    }
    if (t.length === 3)
      if (Array.isArray(n)) {
        let o = function (i) {
            return typeof i.error < 'u';
          },
          s = function (i) {
            return !o(i);
          };
        return t(null, n.filter(o), n.filter(s));
      } else return t(null, n.error, n.result);
    t(null, n);
  };
});
var r0 = te((zhe, rc) => {
  f();
  function g7(r) {
    return r && r.__esModule ? r : { default: r };
  }
  (rc.exports = g7), (rc.exports.__esModule = !0), (rc.exports.default = rc.exports);
});
var Mi = te((Nhe, Wn) => {
  f();
  function n0(r) {
    '@babel/helpers - typeof';
    return (
      (Wn.exports = n0 =
        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                typeof Symbol == 'function' &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            }),
      (Wn.exports.__esModule = !0),
      (Wn.exports.default = Wn.exports),
      n0(r)
    );
  }
  (Wn.exports = n0), (Wn.exports.__esModule = !0), (Wn.exports.default = Wn.exports);
});
var UP = te((Che, Kn) => {
  f();
  var x7 = Mi().default;
  function DP() {
    'use strict';
    (Kn.exports = DP =
      function () {
        return r;
      }),
      (Kn.exports.__esModule = !0),
      (Kn.exports.default = Kn.exports);
    var r = {},
      e = Object.prototype,
      t = e.hasOwnProperty,
      n =
        Object.defineProperty ||
        function (T, y, p) {
          T[y] = p.value;
        },
      o = typeof Symbol == 'function' ? Symbol : {},
      s = o.iterator || '@@iterator',
      i = o.asyncIterator || '@@asyncIterator',
      c = o.toStringTag || '@@toStringTag';
    function u(T, y, p) {
      return (
        Object.defineProperty(T, y, { value: p, enumerable: !0, configurable: !0, writable: !0 }),
        T[y]
      );
    }
    try {
      u({}, '');
    } catch {
      u = function (p, d, h) {
        return (p[d] = h);
      };
    }
    function l(T, y, p, d) {
      var h = y && y.prototype instanceof A ? y : A,
        g = Object.create(h.prototype),
        b = new P(d || []);
      return n(g, '_invoke', { value: re(T, p, b) }), g;
    }
    function w(T, y, p) {
      try {
        return { type: 'normal', arg: T.call(y, p) };
      } catch (d) {
        return { type: 'throw', arg: d };
      }
    }
    r.wrap = l;
    var x = {};
    function A() {}
    function _() {}
    function O() {}
    var D = {};
    u(D, s, function () {
      return this;
    });
    var j = Object.getPrototypeOf,
      G = j && j(j(C([])));
    G && G !== e && t.call(G, s) && (D = G);
    var H = (O.prototype = A.prototype = Object.create(D));
    function ae(T) {
      ['next', 'throw', 'return'].forEach(function (y) {
        u(T, y, function (p) {
          return this._invoke(y, p);
        });
      });
    }
    function ee(T, y) {
      function p(h, g, b, I) {
        var M = w(T[h], T, g);
        if (M.type !== 'throw') {
          var k = M.arg,
            m = k.value;
          return m && x7(m) == 'object' && t.call(m, '__await')
            ? y.resolve(m.__await).then(
                function (B) {
                  p('next', B, b, I);
                },
                function (B) {
                  p('throw', B, b, I);
                }
              )
            : y.resolve(m).then(
                function (B) {
                  (k.value = B), b(k);
                },
                function (B) {
                  return p('throw', B, b, I);
                }
              );
        }
        I(M.arg);
      }
      var d;
      n(this, '_invoke', {
        value: function (g, b) {
          function I() {
            return new y(function (M, k) {
              p(g, b, M, k);
            });
          }
          return (d = d ? d.then(I, I) : I());
        },
      });
    }
    function re(T, y, p) {
      var d = 'suspendedStart';
      return function (h, g) {
        if (d === 'executing') throw new Error('Generator is already running');
        if (d === 'completed') {
          if (h === 'throw') throw g;
          return U();
        }
        for (p.method = h, p.arg = g; ; ) {
          var b = p.delegate;
          if (b) {
            var I = Y(b, p);
            if (I) {
              if (I === x) continue;
              return I;
            }
          }
          if (p.method === 'next') p.sent = p._sent = p.arg;
          else if (p.method === 'throw') {
            if (d === 'suspendedStart') throw ((d = 'completed'), p.arg);
            p.dispatchException(p.arg);
          } else p.method === 'return' && p.abrupt('return', p.arg);
          d = 'executing';
          var M = w(T, y, p);
          if (M.type === 'normal') {
            if (((d = p.done ? 'completed' : 'suspendedYield'), M.arg === x)) continue;
            return { value: M.arg, done: p.done };
          }
          M.type === 'throw' && ((d = 'completed'), (p.method = 'throw'), (p.arg = M.arg));
        }
      };
    }
    function Y(T, y) {
      var p = y.method,
        d = T.iterator[p];
      if (d === void 0)
        return (
          (y.delegate = null),
          (p === 'throw' &&
            T.iterator.return &&
            ((y.method = 'return'), (y.arg = void 0), Y(T, y), y.method === 'throw')) ||
            (p !== 'return' &&
              ((y.method = 'throw'),
              (y.arg = new TypeError("The iterator does not provide a '" + p + "' method")))),
          x
        );
      var h = w(d, T.iterator, y.arg);
      if (h.type === 'throw') return (y.method = 'throw'), (y.arg = h.arg), (y.delegate = null), x;
      var g = h.arg;
      return g
        ? g.done
          ? ((y[T.resultName] = g.value),
            (y.next = T.nextLoc),
            y.method !== 'return' && ((y.method = 'next'), (y.arg = void 0)),
            (y.delegate = null),
            x)
          : g
        : ((y.method = 'throw'),
          (y.arg = new TypeError('iterator result is not an object')),
          (y.delegate = null),
          x);
    }
    function he(T) {
      var y = { tryLoc: T[0] };
      1 in T && (y.catchLoc = T[1]),
        2 in T && ((y.finallyLoc = T[2]), (y.afterLoc = T[3])),
        this.tryEntries.push(y);
    }
    function R(T) {
      var y = T.completion || {};
      (y.type = 'normal'), delete y.arg, (T.completion = y);
    }
    function P(T) {
      (this.tryEntries = [{ tryLoc: 'root' }]), T.forEach(he, this), this.reset(!0);
    }
    function C(T) {
      if (T) {
        var y = T[s];
        if (y) return y.call(T);
        if (typeof T.next == 'function') return T;
        if (!isNaN(T.length)) {
          var p = -1,
            d = function h() {
              for (; ++p < T.length; ) if (t.call(T, p)) return (h.value = T[p]), (h.done = !1), h;
              return (h.value = void 0), (h.done = !0), h;
            };
          return (d.next = d);
        }
      }
      return { next: U };
    }
    function U() {
      return { value: void 0, done: !0 };
    }
    return (
      (_.prototype = O),
      n(H, 'constructor', { value: O, configurable: !0 }),
      n(O, 'constructor', { value: _, configurable: !0 }),
      (_.displayName = u(O, c, 'GeneratorFunction')),
      (r.isGeneratorFunction = function (T) {
        var y = typeof T == 'function' && T.constructor;
        return !!y && (y === _ || (y.displayName || y.name) === 'GeneratorFunction');
      }),
      (r.mark = function (T) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(T, O)
            : ((T.__proto__ = O), u(T, c, 'GeneratorFunction')),
          (T.prototype = Object.create(H)),
          T
        );
      }),
      (r.awrap = function (T) {
        return { __await: T };
      }),
      ae(ee.prototype),
      u(ee.prototype, i, function () {
        return this;
      }),
      (r.AsyncIterator = ee),
      (r.async = function (T, y, p, d, h) {
        h === void 0 && (h = Promise);
        var g = new ee(l(T, y, p, d), h);
        return r.isGeneratorFunction(y)
          ? g
          : g.next().then(function (b) {
              return b.done ? b.value : g.next();
            });
      }),
      ae(H),
      u(H, c, 'Generator'),
      u(H, s, function () {
        return this;
      }),
      u(H, 'toString', function () {
        return '[object Generator]';
      }),
      (r.keys = function (T) {
        var y = Object(T),
          p = [];
        for (var d in y) p.push(d);
        return (
          p.reverse(),
          function h() {
            for (; p.length; ) {
              var g = p.pop();
              if (g in y) return (h.value = g), (h.done = !1), h;
            }
            return (h.done = !0), h;
          }
        );
      }),
      (r.values = C),
      (P.prototype = {
        constructor: P,
        reset: function (y) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = void 0),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = void 0),
            this.tryEntries.forEach(R),
            !y)
          )
            for (var p in this)
              p.charAt(0) === 't' && t.call(this, p) && !isNaN(+p.slice(1)) && (this[p] = void 0);
        },
        stop: function () {
          this.done = !0;
          var y = this.tryEntries[0].completion;
          if (y.type === 'throw') throw y.arg;
          return this.rval;
        },
        dispatchException: function (y) {
          if (this.done) throw y;
          var p = this;
          function d(k, m) {
            return (
              (b.type = 'throw'),
              (b.arg = y),
              (p.next = k),
              m && ((p.method = 'next'), (p.arg = void 0)),
              !!m
            );
          }
          for (var h = this.tryEntries.length - 1; h >= 0; --h) {
            var g = this.tryEntries[h],
              b = g.completion;
            if (g.tryLoc === 'root') return d('end');
            if (g.tryLoc <= this.prev) {
              var I = t.call(g, 'catchLoc'),
                M = t.call(g, 'finallyLoc');
              if (I && M) {
                if (this.prev < g.catchLoc) return d(g.catchLoc, !0);
                if (this.prev < g.finallyLoc) return d(g.finallyLoc);
              } else if (I) {
                if (this.prev < g.catchLoc) return d(g.catchLoc, !0);
              } else {
                if (!M) throw new Error('try statement without catch or finally');
                if (this.prev < g.finallyLoc) return d(g.finallyLoc);
              }
            }
          }
        },
        abrupt: function (y, p) {
          for (var d = this.tryEntries.length - 1; d >= 0; --d) {
            var h = this.tryEntries[d];
            if (h.tryLoc <= this.prev && t.call(h, 'finallyLoc') && this.prev < h.finallyLoc) {
              var g = h;
              break;
            }
          }
          g &&
            (y === 'break' || y === 'continue') &&
            g.tryLoc <= p &&
            p <= g.finallyLoc &&
            (g = null);
          var b = g ? g.completion : {};
          return (
            (b.type = y),
            (b.arg = p),
            g ? ((this.method = 'next'), (this.next = g.finallyLoc), x) : this.complete(b)
          );
        },
        complete: function (y, p) {
          if (y.type === 'throw') throw y.arg;
          return (
            y.type === 'break' || y.type === 'continue'
              ? (this.next = y.arg)
              : y.type === 'return'
                ? ((this.rval = this.arg = y.arg), (this.method = 'return'), (this.next = 'end'))
                : y.type === 'normal' && p && (this.next = p),
            x
          );
        },
        finish: function (y) {
          for (var p = this.tryEntries.length - 1; p >= 0; --p) {
            var d = this.tryEntries[p];
            if (d.finallyLoc === y) return this.complete(d.completion, d.afterLoc), R(d), x;
          }
        },
        catch: function (y) {
          for (var p = this.tryEntries.length - 1; p >= 0; --p) {
            var d = this.tryEntries[p];
            if (d.tryLoc === y) {
              var h = d.completion;
              if (h.type === 'throw') {
                var g = h.arg;
                R(d);
              }
              return g;
            }
          }
          throw new Error('illegal catch attempt');
        },
        delegateYield: function (y, p, d) {
          return (
            (this.delegate = { iterator: C(y), resultName: p, nextLoc: d }),
            this.method === 'next' && (this.arg = void 0),
            x
          );
        },
      }),
      r
    );
  }
  (Kn.exports = DP), (Kn.exports.__esModule = !0), (Kn.exports.default = Kn.exports);
});
var jP = te((Dhe, FP) => {
  f();
  var $f = UP()();
  FP.exports = $f;
  try {
    regeneratorRuntime = $f;
  } catch {
    typeof globalThis == 'object'
      ? (globalThis.regeneratorRuntime = $f)
      : Function('r', 'regeneratorRuntime = r')($f);
  }
});
var WP = te((Fhe, nc) => {
  f();
  function HP(r, e, t, n, o, s, i) {
    try {
      var c = r[s](i),
        u = c.value;
    } catch (l) {
      t(l);
      return;
    }
    c.done ? e(u) : Promise.resolve(u).then(n, o);
  }
  function b7(r) {
    return function () {
      var e = this,
        t = arguments;
      return new Promise(function (n, o) {
        var s = r.apply(e, t);
        function i(u) {
          HP(s, n, o, i, c, 'next', u);
        }
        function c(u) {
          HP(s, n, o, i, c, 'throw', u);
        }
        i(void 0);
      });
    };
  }
  (nc.exports = b7), (nc.exports.__esModule = !0), (nc.exports.default = nc.exports);
});
var o0 = te((Hhe, oc) => {
  f();
  function w7(r, e) {
    if (!(r instanceof e)) throw new TypeError('Cannot call a class as a function');
  }
  (oc.exports = w7), (oc.exports.__esModule = !0), (oc.exports.default = oc.exports);
});
var VP = te((Khe, sc) => {
  f();
  var KP = Mi().default;
  function v7(r, e) {
    if (KP(r) !== 'object' || r === null) return r;
    var t = r[Symbol.toPrimitive];
    if (t !== void 0) {
      var n = t.call(r, e || 'default');
      if (KP(n) !== 'object') return n;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (e === 'string' ? String : Number)(r);
  }
  (sc.exports = v7), (sc.exports.__esModule = !0), (sc.exports.default = sc.exports);
});
var $P = te(($he, ic) => {
  f();
  var S7 = Mi().default,
    E7 = VP();
  function _7(r) {
    var e = E7(r, 'string');
    return S7(e) === 'symbol' ? e : String(e);
  }
  (ic.exports = _7), (ic.exports.__esModule = !0), (ic.exports.default = ic.exports);
});
var s0 = te((Yhe, ac) => {
  f();
  var A7 = $P();
  function GP(r, e) {
    for (var t = 0; t < e.length; t++) {
      var n = e[t];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        'value' in n && (n.writable = !0),
        Object.defineProperty(r, A7(n.key), n);
    }
  }
  function R7(r, e, t) {
    return (
      e && GP(r.prototype, e),
      t && GP(r, t),
      Object.defineProperty(r, 'prototype', { writable: !1 }),
      r
    );
  }
  (ac.exports = R7), (ac.exports.__esModule = !0), (ac.exports.default = ac.exports);
});
var YP = te((Jhe, Vn) => {
  f();
  function i0(r, e) {
    return (
      (Vn.exports = i0 =
        Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (n, o) {
              return (n.__proto__ = o), n;
            }),
      (Vn.exports.__esModule = !0),
      (Vn.exports.default = Vn.exports),
      i0(r, e)
    );
  }
  (Vn.exports = i0), (Vn.exports.__esModule = !0), (Vn.exports.default = Vn.exports);
});
var a0 = te((Qhe, cc) => {
  f();
  var I7 = YP();
  function k7(r, e) {
    if (typeof e != 'function' && e !== null)
      throw new TypeError('Super expression must either be null or a function');
    (r.prototype = Object.create(e && e.prototype, {
      constructor: { value: r, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(r, 'prototype', { writable: !1 }),
      e && I7(r, e);
  }
  (cc.exports = k7), (cc.exports.__esModule = !0), (cc.exports.default = cc.exports);
});
var ZP = te((tme, uc) => {
  f();
  function T7(r) {
    if (r === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return r;
  }
  (uc.exports = T7), (uc.exports.__esModule = !0), (uc.exports.default = uc.exports);
});
var c0 = te((nme, pc) => {
  f();
  var P7 = Mi().default,
    B7 = ZP();
  function M7(r, e) {
    if (e && (P7(e) === 'object' || typeof e == 'function')) return e;
    if (e !== void 0)
      throw new TypeError('Derived constructors may only return object or undefined');
    return B7(r);
  }
  (pc.exports = M7), (pc.exports.__esModule = !0), (pc.exports.default = pc.exports);
});
var p0 = te((sme, $n) => {
  f();
  function u0(r) {
    return (
      ($n.exports = u0 =
        Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            }),
      ($n.exports.__esModule = !0),
      ($n.exports.default = $n.exports),
      u0(r)
    );
  }
  ($n.exports = u0), ($n.exports.__esModule = !0), ($n.exports.default = $n.exports);
});
var Io = te((ame, f0) => {
  'use strict';
  f();
  var z7 = Object.prototype.hasOwnProperty,
    xr = '~';
  function fc() {}
  Object.create && ((fc.prototype = Object.create(null)), new fc().__proto__ || (xr = !1));
  function L7(r, e, t) {
    (this.fn = r), (this.context = e), (this.once = t || !1);
  }
  function JP(r, e, t, n, o) {
    if (typeof t != 'function') throw new TypeError('The listener must be a function');
    var s = new L7(t, n || r, o),
      i = xr ? xr + e : e;
    return (
      r._events[i]
        ? r._events[i].fn
          ? (r._events[i] = [r._events[i], s])
          : r._events[i].push(s)
        : ((r._events[i] = s), r._eventsCount++),
      r
    );
  }
  function Gf(r, e) {
    --r._eventsCount === 0 ? (r._events = new fc()) : delete r._events[e];
  }
  function fr() {
    (this._events = new fc()), (this._eventsCount = 0);
  }
  fr.prototype.eventNames = function () {
    var e = [],
      t,
      n;
    if (this._eventsCount === 0) return e;
    for (n in (t = this._events)) z7.call(t, n) && e.push(xr ? n.slice(1) : n);
    return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
  };
  fr.prototype.listeners = function (e) {
    var t = xr ? xr + e : e,
      n = this._events[t];
    if (!n) return [];
    if (n.fn) return [n.fn];
    for (var o = 0, s = n.length, i = new Array(s); o < s; o++) i[o] = n[o].fn;
    return i;
  };
  fr.prototype.listenerCount = function (e) {
    var t = xr ? xr + e : e,
      n = this._events[t];
    return n ? (n.fn ? 1 : n.length) : 0;
  };
  fr.prototype.emit = function (e, t, n, o, s, i) {
    var c = xr ? xr + e : e;
    if (!this._events[c]) return !1;
    var u = this._events[c],
      l = arguments.length,
      w,
      x;
    if (u.fn) {
      switch ((u.once && this.removeListener(e, u.fn, void 0, !0), l)) {
        case 1:
          return u.fn.call(u.context), !0;
        case 2:
          return u.fn.call(u.context, t), !0;
        case 3:
          return u.fn.call(u.context, t, n), !0;
        case 4:
          return u.fn.call(u.context, t, n, o), !0;
        case 5:
          return u.fn.call(u.context, t, n, o, s), !0;
        case 6:
          return u.fn.call(u.context, t, n, o, s, i), !0;
      }
      for (x = 1, w = new Array(l - 1); x < l; x++) w[x - 1] = arguments[x];
      u.fn.apply(u.context, w);
    } else {
      var A = u.length,
        _;
      for (x = 0; x < A; x++)
        switch ((u[x].once && this.removeListener(e, u[x].fn, void 0, !0), l)) {
          case 1:
            u[x].fn.call(u[x].context);
            break;
          case 2:
            u[x].fn.call(u[x].context, t);
            break;
          case 3:
            u[x].fn.call(u[x].context, t, n);
            break;
          case 4:
            u[x].fn.call(u[x].context, t, n, o);
            break;
          default:
            if (!w) for (_ = 1, w = new Array(l - 1); _ < l; _++) w[_ - 1] = arguments[_];
            u[x].fn.apply(u[x].context, w);
        }
    }
    return !0;
  };
  fr.prototype.on = function (e, t, n) {
    return JP(this, e, t, n, !1);
  };
  fr.prototype.once = function (e, t, n) {
    return JP(this, e, t, n, !0);
  };
  fr.prototype.removeListener = function (e, t, n, o) {
    var s = xr ? xr + e : e;
    if (!this._events[s]) return this;
    if (!t) return Gf(this, s), this;
    var i = this._events[s];
    if (i.fn) i.fn === t && (!o || i.once) && (!n || i.context === n) && Gf(this, s);
    else {
      for (var c = 0, u = [], l = i.length; c < l; c++)
        (i[c].fn !== t || (o && !i[c].once) || (n && i[c].context !== n)) && u.push(i[c]);
      u.length ? (this._events[s] = u.length === 1 ? u[0] : u) : Gf(this, s);
    }
    return this;
  };
  fr.prototype.removeAllListeners = function (e) {
    var t;
    return (
      e
        ? ((t = xr ? xr + e : e), this._events[t] && Gf(this, t))
        : ((this._events = new fc()), (this._eventsCount = 0)),
      this
    );
  };
  fr.prototype.off = fr.prototype.removeListener;
  fr.prototype.addListener = fr.prototype.on;
  fr.prefixed = xr;
  fr.EventEmitter = fr;
  typeof f0 < 'u' && (f0.exports = fr);
});
var QP = te((Zf) => {
  'use strict';
  f();
  var To = r0();
  Object.defineProperty(Zf, '__esModule', { value: !0 });
  Zf.default = void 0;
  var ko = To(jP()),
    Yf = To(WP()),
    N7 = To(Mi()),
    O7 = To(o0()),
    C7 = To(s0()),
    q7 = To(a0()),
    D7 = To(c0()),
    XP = To(p0()),
    U7 = Io();
  function F7(r) {
    var e = j7();
    return function () {
      var n = (0, XP.default)(r),
        o;
      if (e) {
        var s = (0, XP.default)(this).constructor;
        o = Reflect.construct(n, arguments, s);
      } else o = n.apply(this, arguments);
      return (0, D7.default)(this, o);
    };
  }
  function j7() {
    if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == 'function') return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch {
      return !1;
    }
  }
  var H7 = function (r, e) {
      var t = {};
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
      if (r != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, n = Object.getOwnPropertySymbols(r); o < n.length; o++)
          e.indexOf(n[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(r, n[o]) &&
            (t[n[o]] = r[n[o]]);
      return t;
    },
    W7 = (function (r) {
      (0, q7.default)(t, r);
      var e = F7(t);
      function t(n) {
        var o,
          s =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'ws://localhost:8080',
          i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
          c = arguments.length > 3 ? arguments[3] : void 0;
        (0, O7.default)(this, t);
        var u = i.autoconnect,
          l = u === void 0 ? !0 : u,
          w = i.reconnect,
          x = w === void 0 ? !0 : w,
          A = i.reconnect_interval,
          _ = A === void 0 ? 1e3 : A,
          O = i.max_reconnects,
          D = O === void 0 ? 5 : O,
          j = H7(i, ['autoconnect', 'reconnect', 'reconnect_interval', 'max_reconnects']);
        return (
          (o = e.call(this)),
          (o.webSocketFactory = n),
          (o.queue = {}),
          (o.rpc_id = 0),
          (o.address = s),
          (o.autoconnect = l),
          (o.ready = !1),
          (o.reconnect = x),
          (o.reconnect_timer_id = void 0),
          (o.reconnect_interval = _),
          (o.max_reconnects = D),
          (o.rest_options = j),
          (o.current_reconnects = 0),
          (o.generate_request_id =
            c ||
            function () {
              return ++o.rpc_id;
            }),
          o.autoconnect &&
            o._connect(
              o.address,
              Object.assign(
                {
                  autoconnect: o.autoconnect,
                  reconnect: o.reconnect,
                  reconnect_interval: o.reconnect_interval,
                  max_reconnects: o.max_reconnects,
                },
                o.rest_options
              )
            ),
          o
        );
      }
      return (
        (0, C7.default)(t, [
          {
            key: 'connect',
            value: function () {
              this.socket ||
                this._connect(
                  this.address,
                  Object.assign(
                    {
                      autoconnect: this.autoconnect,
                      reconnect: this.reconnect,
                      reconnect_interval: this.reconnect_interval,
                      max_reconnects: this.max_reconnects,
                    },
                    this.rest_options
                  )
                );
            },
          },
          {
            key: 'call',
            value: function (o, s, i, c) {
              var u = this;
              return (
                !c && (0, N7.default)(i) === 'object' && ((c = i), (i = null)),
                new Promise(function (l, w) {
                  if (!u.ready) return w(new Error('socket not ready'));
                  var x = u.generate_request_id(o, s),
                    A = { jsonrpc: '2.0', method: o, params: s || null, id: x };
                  u.socket.send(JSON.stringify(A), c, function (_) {
                    if (_) return w(_);
                    (u.queue[x] = { promise: [l, w] }),
                      i &&
                        (u.queue[x].timeout = setTimeout(function () {
                          delete u.queue[x], w(new Error('reply timeout'));
                        }, i));
                  });
                })
              );
            },
          },
          {
            key: 'login',
            value: (function () {
              var n = (0, Yf.default)(
                ko.default.mark(function s(i) {
                  var c;
                  return ko.default.wrap(
                    function (l) {
                      for (;;)
                        switch ((l.prev = l.next)) {
                          case 0:
                            return (l.next = 2), this.call('rpc.login', i);
                          case 2:
                            if (((c = l.sent), c)) {
                              l.next = 5;
                              break;
                            }
                            throw new Error('authentication failed');
                          case 5:
                            return l.abrupt('return', c);
                          case 6:
                          case 'end':
                            return l.stop();
                        }
                    },
                    s,
                    this
                  );
                })
              );
              function o(s) {
                return n.apply(this, arguments);
              }
              return o;
            })(),
          },
          {
            key: 'listMethods',
            value: (function () {
              var n = (0, Yf.default)(
                ko.default.mark(function s() {
                  return ko.default.wrap(
                    function (c) {
                      for (;;)
                        switch ((c.prev = c.next)) {
                          case 0:
                            return (c.next = 2), this.call('__listMethods');
                          case 2:
                            return c.abrupt('return', c.sent);
                          case 3:
                          case 'end':
                            return c.stop();
                        }
                    },
                    s,
                    this
                  );
                })
              );
              function o() {
                return n.apply(this, arguments);
              }
              return o;
            })(),
          },
          {
            key: 'notify',
            value: function (o, s) {
              var i = this;
              return new Promise(function (c, u) {
                if (!i.ready) return u(new Error('socket not ready'));
                var l = { jsonrpc: '2.0', method: o, params: s || null };
                i.socket.send(JSON.stringify(l), function (w) {
                  if (w) return u(w);
                  c();
                });
              });
            },
          },
          {
            key: 'subscribe',
            value: (function () {
              var n = (0, Yf.default)(
                ko.default.mark(function s(i) {
                  var c;
                  return ko.default.wrap(
                    function (l) {
                      for (;;)
                        switch ((l.prev = l.next)) {
                          case 0:
                            return (
                              typeof i == 'string' && (i = [i]),
                              (l.next = 3),
                              this.call('rpc.on', i)
                            );
                          case 3:
                            if (((c = l.sent), !(typeof i == 'string' && c[i] !== 'ok'))) {
                              l.next = 6;
                              break;
                            }
                            throw new Error(
                              "Failed subscribing to an event '" + i + "' with: " + c[i]
                            );
                          case 6:
                            return l.abrupt('return', c);
                          case 7:
                          case 'end':
                            return l.stop();
                        }
                    },
                    s,
                    this
                  );
                })
              );
              function o(s) {
                return n.apply(this, arguments);
              }
              return o;
            })(),
          },
          {
            key: 'unsubscribe',
            value: (function () {
              var n = (0, Yf.default)(
                ko.default.mark(function s(i) {
                  var c;
                  return ko.default.wrap(
                    function (l) {
                      for (;;)
                        switch ((l.prev = l.next)) {
                          case 0:
                            return (
                              typeof i == 'string' && (i = [i]),
                              (l.next = 3),
                              this.call('rpc.off', i)
                            );
                          case 3:
                            if (((c = l.sent), !(typeof i == 'string' && c[i] !== 'ok'))) {
                              l.next = 6;
                              break;
                            }
                            throw new Error('Failed unsubscribing from an event with: ' + c);
                          case 6:
                            return l.abrupt('return', c);
                          case 7:
                          case 'end':
                            return l.stop();
                        }
                    },
                    s,
                    this
                  );
                })
              );
              function o(s) {
                return n.apply(this, arguments);
              }
              return o;
            })(),
          },
          {
            key: 'close',
            value: function (o, s) {
              this.socket.close(o || 1e3, s);
            },
          },
          {
            key: '_connect',
            value: function (o, s) {
              var i = this;
              clearTimeout(this.reconnect_timer_id),
                (this.socket = this.webSocketFactory(o, s)),
                this.socket.addEventListener('open', function () {
                  (i.ready = !0), i.emit('open'), (i.current_reconnects = 0);
                }),
                this.socket.addEventListener('message', function (c) {
                  var u = c.data;
                  u instanceof ArrayBuffer && (u = v.from(u).toString());
                  try {
                    u = JSON.parse(u);
                  } catch {
                    return;
                  }
                  if (u.notification && i.listeners(u.notification).length) {
                    if (!Object.keys(u.params).length) return i.emit(u.notification);
                    var l = [u.notification];
                    if (u.params.constructor === Object) l.push(u.params);
                    else for (var w = 0; w < u.params.length; w++) l.push(u.params[w]);
                    return Promise.resolve().then(function () {
                      i.emit.apply(i, l);
                    });
                  }
                  if (!i.queue[u.id])
                    return u.method && u.params
                      ? Promise.resolve().then(function () {
                          i.emit(u.method, u.params);
                        })
                      : void 0;
                  'error' in u == 'result' in u &&
                    i.queue[u.id].promise[1](
                      new Error(
                        'Server response malformed. Response must include either "result" or "error", but not both.'
                      )
                    ),
                    i.queue[u.id].timeout && clearTimeout(i.queue[u.id].timeout),
                    u.error
                      ? i.queue[u.id].promise[1](u.error)
                      : i.queue[u.id].promise[0](u.result),
                    delete i.queue[u.id];
                }),
                this.socket.addEventListener('error', function (c) {
                  return i.emit('error', c);
                }),
                this.socket.addEventListener('close', function (c) {
                  var u = c.code,
                    l = c.reason;
                  i.ready &&
                    setTimeout(function () {
                      return i.emit('close', u, l);
                    }, 0),
                    (i.ready = !1),
                    (i.socket = void 0),
                    u !== 1e3 &&
                      (i.current_reconnects++,
                      i.reconnect &&
                        (i.max_reconnects > i.current_reconnects || i.max_reconnects === 0) &&
                        (i.reconnect_timer_id = setTimeout(function () {
                          return i._connect(o, s);
                        }, i.reconnect_interval)));
                });
            },
          },
        ]),
        t
      );
    })(U7.EventEmitter);
  Zf.default = W7;
});
var tB = te((l0) => {
  'use strict';
  f();
  var lc = r0();
  Object.defineProperty(l0, '__esModule', { value: !0 });
  l0.default = Q7;
  var K7 = lc(o0()),
    V7 = lc(s0()),
    $7 = lc(a0()),
    G7 = lc(c0()),
    eB = lc(p0()),
    Y7 = Io();
  function Z7(r) {
    var e = J7();
    return function () {
      var n = (0, eB.default)(r),
        o;
      if (e) {
        var s = (0, eB.default)(this).constructor;
        o = Reflect.construct(n, arguments, s);
      } else o = n.apply(this, arguments);
      return (0, G7.default)(this, o);
    };
  }
  function J7() {
    if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == 'function') return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch {
      return !1;
    }
  }
  var X7 = (function (r) {
    (0, $7.default)(t, r);
    var e = Z7(t);
    function t(n, o, s) {
      var i;
      return (
        (0, K7.default)(this, t),
        (i = e.call(this)),
        (i.socket = new self.WebSocket(n, s)),
        (i.socket.onopen = function () {
          return i.emit('open');
        }),
        (i.socket.onmessage = function (c) {
          return i.emit('message', c.data);
        }),
        (i.socket.onerror = function (c) {
          return i.emit('error', c);
        }),
        (i.socket.onclose = function (c) {
          i.emit('close', c.code, c.reason);
        }),
        i
      );
    }
    return (
      (0, V7.default)(t, [
        {
          key: 'send',
          value: function (o, s, i) {
            var c = i || s;
            try {
              this.socket.send(o), c();
            } catch (u) {
              c(u);
            }
          },
        },
        {
          key: 'close',
          value: function (o, s) {
            this.socket.close(o, s);
          },
        },
        {
          key: 'addEventListener',
          value: function (o, s, i) {
            this.socket.addEventListener(o, s, i);
          },
        },
      ]),
      t
    );
  })(Y7.EventEmitter);
  function Q7(r, e) {
    return new X7(r, e);
  }
});
var tM = te((Ac, V0) => {
  f();
  (function (r, e) {
    typeof Ac == 'object' && typeof V0 == 'object'
      ? (V0.exports = e())
      : typeof define == 'function' && define.amd
        ? define([], e)
        : typeof Ac == 'object'
          ? (Ac.bowser = e())
          : (r.bowser = e());
  })(Ac, function () {
    return (function (r) {
      var e = {};
      function t(n) {
        if (e[n]) return e[n].exports;
        var o = (e[n] = { i: n, l: !1, exports: {} });
        return r[n].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
      }
      return (
        (t.m = r),
        (t.c = e),
        (t.d = function (n, o, s) {
          t.o(n, o) || Object.defineProperty(n, o, { enumerable: !0, get: s });
        }),
        (t.r = function (n) {
          typeof Symbol < 'u' &&
            Symbol.toStringTag &&
            Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(n, '__esModule', { value: !0 });
        }),
        (t.t = function (n, o) {
          if ((1 & o && (n = t(n)), 8 & o || (4 & o && typeof n == 'object' && n && n.__esModule)))
            return n;
          var s = Object.create(null);
          if (
            (t.r(s),
            Object.defineProperty(s, 'default', { enumerable: !0, value: n }),
            2 & o && typeof n != 'string')
          )
            for (var i in n)
              t.d(
                s,
                i,
                function (c) {
                  return n[c];
                }.bind(null, i)
              );
          return s;
        }),
        (t.n = function (n) {
          var o =
            n && n.__esModule
              ? function () {
                  return n.default;
                }
              : function () {
                  return n;
                };
          return t.d(o, 'a', o), o;
        }),
        (t.o = function (n, o) {
          return Object.prototype.hasOwnProperty.call(n, o);
        }),
        (t.p = ''),
        t((t.s = 90))
      );
    })({
      17: function (r, e, t) {
        'use strict';
        (e.__esModule = !0), (e.default = void 0);
        var n = t(18),
          o = (function () {
            function s() {}
            return (
              (s.getFirstMatch = function (i, c) {
                var u = c.match(i);
                return (u && u.length > 0 && u[1]) || '';
              }),
              (s.getSecondMatch = function (i, c) {
                var u = c.match(i);
                return (u && u.length > 1 && u[2]) || '';
              }),
              (s.matchAndReturnConst = function (i, c, u) {
                if (i.test(c)) return u;
              }),
              (s.getWindowsVersionName = function (i) {
                switch (i) {
                  case 'NT':
                    return 'NT';
                  case 'XP':
                    return 'XP';
                  case 'NT 5.0':
                    return '2000';
                  case 'NT 5.1':
                    return 'XP';
                  case 'NT 5.2':
                    return '2003';
                  case 'NT 6.0':
                    return 'Vista';
                  case 'NT 6.1':
                    return '7';
                  case 'NT 6.2':
                    return '8';
                  case 'NT 6.3':
                    return '8.1';
                  case 'NT 10.0':
                    return '10';
                  default:
                    return;
                }
              }),
              (s.getMacOSVersionName = function (i) {
                var c = i
                  .split('.')
                  .splice(0, 2)
                  .map(function (u) {
                    return parseInt(u, 10) || 0;
                  });
                if ((c.push(0), c[0] === 10))
                  switch (c[1]) {
                    case 5:
                      return 'Leopard';
                    case 6:
                      return 'Snow Leopard';
                    case 7:
                      return 'Lion';
                    case 8:
                      return 'Mountain Lion';
                    case 9:
                      return 'Mavericks';
                    case 10:
                      return 'Yosemite';
                    case 11:
                      return 'El Capitan';
                    case 12:
                      return 'Sierra';
                    case 13:
                      return 'High Sierra';
                    case 14:
                      return 'Mojave';
                    case 15:
                      return 'Catalina';
                    default:
                      return;
                  }
              }),
              (s.getAndroidVersionName = function (i) {
                var c = i
                  .split('.')
                  .splice(0, 2)
                  .map(function (u) {
                    return parseInt(u, 10) || 0;
                  });
                if ((c.push(0), !(c[0] === 1 && c[1] < 5)))
                  return c[0] === 1 && c[1] < 6
                    ? 'Cupcake'
                    : c[0] === 1 && c[1] >= 6
                      ? 'Donut'
                      : c[0] === 2 && c[1] < 2
                        ? 'Eclair'
                        : c[0] === 2 && c[1] === 2
                          ? 'Froyo'
                          : c[0] === 2 && c[1] > 2
                            ? 'Gingerbread'
                            : c[0] === 3
                              ? 'Honeycomb'
                              : c[0] === 4 && c[1] < 1
                                ? 'Ice Cream Sandwich'
                                : c[0] === 4 && c[1] < 4
                                  ? 'Jelly Bean'
                                  : c[0] === 4 && c[1] >= 4
                                    ? 'KitKat'
                                    : c[0] === 5
                                      ? 'Lollipop'
                                      : c[0] === 6
                                        ? 'Marshmallow'
                                        : c[0] === 7
                                          ? 'Nougat'
                                          : c[0] === 8
                                            ? 'Oreo'
                                            : c[0] === 9
                                              ? 'Pie'
                                              : void 0;
              }),
              (s.getVersionPrecision = function (i) {
                return i.split('.').length;
              }),
              (s.compareVersions = function (i, c, u) {
                u === void 0 && (u = !1);
                var l = s.getVersionPrecision(i),
                  w = s.getVersionPrecision(c),
                  x = Math.max(l, w),
                  A = 0,
                  _ = s.map([i, c], function (O) {
                    var D = x - s.getVersionPrecision(O),
                      j = O + new Array(D + 1).join('.0');
                    return s
                      .map(j.split('.'), function (G) {
                        return new Array(20 - G.length).join('0') + G;
                      })
                      .reverse();
                  });
                for (u && (A = x - Math.min(l, w)), x -= 1; x >= A; ) {
                  if (_[0][x] > _[1][x]) return 1;
                  if (_[0][x] === _[1][x]) {
                    if (x === A) return 0;
                    x -= 1;
                  } else if (_[0][x] < _[1][x]) return -1;
                }
              }),
              (s.map = function (i, c) {
                var u,
                  l = [];
                if (Array.prototype.map) return Array.prototype.map.call(i, c);
                for (u = 0; u < i.length; u += 1) l.push(c(i[u]));
                return l;
              }),
              (s.find = function (i, c) {
                var u, l;
                if (Array.prototype.find) return Array.prototype.find.call(i, c);
                for (u = 0, l = i.length; u < l; u += 1) {
                  var w = i[u];
                  if (c(w, u)) return w;
                }
              }),
              (s.assign = function (i) {
                for (
                  var c, u, l = i, w = arguments.length, x = new Array(w > 1 ? w - 1 : 0), A = 1;
                  A < w;
                  A++
                )
                  x[A - 1] = arguments[A];
                if (Object.assign) return Object.assign.apply(Object, [i].concat(x));
                var _ = function () {
                  var O = x[c];
                  typeof O == 'object' &&
                    O !== null &&
                    Object.keys(O).forEach(function (D) {
                      l[D] = O[D];
                    });
                };
                for (c = 0, u = x.length; c < u; c += 1) _();
                return i;
              }),
              (s.getBrowserAlias = function (i) {
                return n.BROWSER_ALIASES_MAP[i];
              }),
              (s.getBrowserTypeByAlias = function (i) {
                return n.BROWSER_MAP[i] || '';
              }),
              s
            );
          })();
        (e.default = o), (r.exports = e.default);
      },
      18: function (r, e, t) {
        'use strict';
        (e.__esModule = !0),
          (e.ENGINE_MAP =
            e.OS_MAP =
            e.PLATFORMS_MAP =
            e.BROWSER_MAP =
            e.BROWSER_ALIASES_MAP =
              void 0),
          (e.BROWSER_ALIASES_MAP = {
            'Amazon Silk': 'amazon_silk',
            'Android Browser': 'android',
            Bada: 'bada',
            BlackBerry: 'blackberry',
            Chrome: 'chrome',
            Chromium: 'chromium',
            Electron: 'electron',
            Epiphany: 'epiphany',
            Firefox: 'firefox',
            Focus: 'focus',
            Generic: 'generic',
            'Google Search': 'google_search',
            Googlebot: 'googlebot',
            'Internet Explorer': 'ie',
            'K-Meleon': 'k_meleon',
            Maxthon: 'maxthon',
            'Microsoft Edge': 'edge',
            'MZ Browser': 'mz',
            'NAVER Whale Browser': 'naver',
            Opera: 'opera',
            'Opera Coast': 'opera_coast',
            PhantomJS: 'phantomjs',
            Puffin: 'puffin',
            QupZilla: 'qupzilla',
            QQ: 'qq',
            QQLite: 'qqlite',
            Safari: 'safari',
            Sailfish: 'sailfish',
            'Samsung Internet for Android': 'samsung_internet',
            SeaMonkey: 'seamonkey',
            Sleipnir: 'sleipnir',
            Swing: 'swing',
            Tizen: 'tizen',
            'UC Browser': 'uc',
            Vivaldi: 'vivaldi',
            'WebOS Browser': 'webos',
            WeChat: 'wechat',
            'Yandex Browser': 'yandex',
            Roku: 'roku',
          }),
          (e.BROWSER_MAP = {
            amazon_silk: 'Amazon Silk',
            android: 'Android Browser',
            bada: 'Bada',
            blackberry: 'BlackBerry',
            chrome: 'Chrome',
            chromium: 'Chromium',
            electron: 'Electron',
            epiphany: 'Epiphany',
            firefox: 'Firefox',
            focus: 'Focus',
            generic: 'Generic',
            googlebot: 'Googlebot',
            google_search: 'Google Search',
            ie: 'Internet Explorer',
            k_meleon: 'K-Meleon',
            maxthon: 'Maxthon',
            edge: 'Microsoft Edge',
            mz: 'MZ Browser',
            naver: 'NAVER Whale Browser',
            opera: 'Opera',
            opera_coast: 'Opera Coast',
            phantomjs: 'PhantomJS',
            puffin: 'Puffin',
            qupzilla: 'QupZilla',
            qq: 'QQ Browser',
            qqlite: 'QQ Browser Lite',
            safari: 'Safari',
            sailfish: 'Sailfish',
            samsung_internet: 'Samsung Internet for Android',
            seamonkey: 'SeaMonkey',
            sleipnir: 'Sleipnir',
            swing: 'Swing',
            tizen: 'Tizen',
            uc: 'UC Browser',
            vivaldi: 'Vivaldi',
            webos: 'WebOS Browser',
            wechat: 'WeChat',
            yandex: 'Yandex Browser',
          }),
          (e.PLATFORMS_MAP = { tablet: 'tablet', mobile: 'mobile', desktop: 'desktop', tv: 'tv' }),
          (e.OS_MAP = {
            WindowsPhone: 'Windows Phone',
            Windows: 'Windows',
            MacOS: 'macOS',
            iOS: 'iOS',
            Android: 'Android',
            WebOS: 'WebOS',
            BlackBerry: 'BlackBerry',
            Bada: 'Bada',
            Tizen: 'Tizen',
            Linux: 'Linux',
            ChromeOS: 'Chrome OS',
            PlayStation4: 'PlayStation 4',
            Roku: 'Roku',
          }),
          (e.ENGINE_MAP = {
            EdgeHTML: 'EdgeHTML',
            Blink: 'Blink',
            Trident: 'Trident',
            Presto: 'Presto',
            Gecko: 'Gecko',
            WebKit: 'WebKit',
          });
      },
      90: function (r, e, t) {
        'use strict';
        (e.__esModule = !0), (e.default = void 0);
        var n,
          o = (n = t(91)) && n.__esModule ? n : { default: n },
          s = t(18);
        function i(u, l) {
          for (var w = 0; w < l.length; w++) {
            var x = l[w];
            (x.enumerable = x.enumerable || !1),
              (x.configurable = !0),
              'value' in x && (x.writable = !0),
              Object.defineProperty(u, x.key, x);
          }
        }
        var c = (function () {
          function u() {}
          var l, w, x;
          return (
            (u.getParser = function (A, _) {
              if ((_ === void 0 && (_ = !1), typeof A != 'string'))
                throw new Error('UserAgent should be a string');
              return new o.default(A, _);
            }),
            (u.parse = function (A) {
              return new o.default(A).getResult();
            }),
            (l = u),
            (x = [
              {
                key: 'BROWSER_MAP',
                get: function () {
                  return s.BROWSER_MAP;
                },
              },
              {
                key: 'ENGINE_MAP',
                get: function () {
                  return s.ENGINE_MAP;
                },
              },
              {
                key: 'OS_MAP',
                get: function () {
                  return s.OS_MAP;
                },
              },
              {
                key: 'PLATFORMS_MAP',
                get: function () {
                  return s.PLATFORMS_MAP;
                },
              },
            ]),
            (w = null) && i(l.prototype, w),
            x && i(l, x),
            u
          );
        })();
        (e.default = c), (r.exports = e.default);
      },
      91: function (r, e, t) {
        'use strict';
        (e.__esModule = !0), (e.default = void 0);
        var n = u(t(92)),
          o = u(t(93)),
          s = u(t(94)),
          i = u(t(95)),
          c = u(t(17));
        function u(w) {
          return w && w.__esModule ? w : { default: w };
        }
        var l = (function () {
          function w(A, _) {
            if ((_ === void 0 && (_ = !1), A == null || A === ''))
              throw new Error("UserAgent parameter can't be empty");
            (this._ua = A), (this.parsedResult = {}), _ !== !0 && this.parse();
          }
          var x = w.prototype;
          return (
            (x.getUA = function () {
              return this._ua;
            }),
            (x.test = function (A) {
              return A.test(this._ua);
            }),
            (x.parseBrowser = function () {
              var A = this;
              this.parsedResult.browser = {};
              var _ = c.default.find(n.default, function (O) {
                if (typeof O.test == 'function') return O.test(A);
                if (O.test instanceof Array)
                  return O.test.some(function (D) {
                    return A.test(D);
                  });
                throw new Error("Browser's test function is not valid");
              });
              return (
                _ && (this.parsedResult.browser = _.describe(this.getUA())),
                this.parsedResult.browser
              );
            }),
            (x.getBrowser = function () {
              return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
            }),
            (x.getBrowserName = function (A) {
              return A
                ? String(this.getBrowser().name).toLowerCase() || ''
                : this.getBrowser().name || '';
            }),
            (x.getBrowserVersion = function () {
              return this.getBrowser().version;
            }),
            (x.getOS = function () {
              return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
            }),
            (x.parseOS = function () {
              var A = this;
              this.parsedResult.os = {};
              var _ = c.default.find(o.default, function (O) {
                if (typeof O.test == 'function') return O.test(A);
                if (O.test instanceof Array)
                  return O.test.some(function (D) {
                    return A.test(D);
                  });
                throw new Error("Browser's test function is not valid");
              });
              return _ && (this.parsedResult.os = _.describe(this.getUA())), this.parsedResult.os;
            }),
            (x.getOSName = function (A) {
              var _ = this.getOS().name;
              return A ? String(_).toLowerCase() || '' : _ || '';
            }),
            (x.getOSVersion = function () {
              return this.getOS().version;
            }),
            (x.getPlatform = function () {
              return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
            }),
            (x.getPlatformType = function (A) {
              A === void 0 && (A = !1);
              var _ = this.getPlatform().type;
              return A ? String(_).toLowerCase() || '' : _ || '';
            }),
            (x.parsePlatform = function () {
              var A = this;
              this.parsedResult.platform = {};
              var _ = c.default.find(s.default, function (O) {
                if (typeof O.test == 'function') return O.test(A);
                if (O.test instanceof Array)
                  return O.test.some(function (D) {
                    return A.test(D);
                  });
                throw new Error("Browser's test function is not valid");
              });
              return (
                _ && (this.parsedResult.platform = _.describe(this.getUA())),
                this.parsedResult.platform
              );
            }),
            (x.getEngine = function () {
              return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
            }),
            (x.getEngineName = function (A) {
              return A
                ? String(this.getEngine().name).toLowerCase() || ''
                : this.getEngine().name || '';
            }),
            (x.parseEngine = function () {
              var A = this;
              this.parsedResult.engine = {};
              var _ = c.default.find(i.default, function (O) {
                if (typeof O.test == 'function') return O.test(A);
                if (O.test instanceof Array)
                  return O.test.some(function (D) {
                    return A.test(D);
                  });
                throw new Error("Browser's test function is not valid");
              });
              return (
                _ && (this.parsedResult.engine = _.describe(this.getUA())), this.parsedResult.engine
              );
            }),
            (x.parse = function () {
              return (
                this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this
              );
            }),
            (x.getResult = function () {
              return c.default.assign({}, this.parsedResult);
            }),
            (x.satisfies = function (A) {
              var _ = this,
                O = {},
                D = 0,
                j = {},
                G = 0;
              if (
                (Object.keys(A).forEach(function (P) {
                  var C = A[P];
                  typeof C == 'string'
                    ? ((j[P] = C), (G += 1))
                    : typeof C == 'object' && ((O[P] = C), (D += 1));
                }),
                D > 0)
              ) {
                var H = Object.keys(O),
                  ae = c.default.find(H, function (P) {
                    return _.isOS(P);
                  });
                if (ae) {
                  var ee = this.satisfies(O[ae]);
                  if (ee !== void 0) return ee;
                }
                var re = c.default.find(H, function (P) {
                  return _.isPlatform(P);
                });
                if (re) {
                  var Y = this.satisfies(O[re]);
                  if (Y !== void 0) return Y;
                }
              }
              if (G > 0) {
                var he = Object.keys(j),
                  R = c.default.find(he, function (P) {
                    return _.isBrowser(P, !0);
                  });
                if (R !== void 0) return this.compareVersion(j[R]);
              }
            }),
            (x.isBrowser = function (A, _) {
              _ === void 0 && (_ = !1);
              var O = this.getBrowserName().toLowerCase(),
                D = A.toLowerCase(),
                j = c.default.getBrowserTypeByAlias(D);
              return _ && j && (D = j.toLowerCase()), D === O;
            }),
            (x.compareVersion = function (A) {
              var _ = [0],
                O = A,
                D = !1,
                j = this.getBrowserVersion();
              if (typeof j == 'string')
                return (
                  A[0] === '>' || A[0] === '<'
                    ? ((O = A.substr(1)),
                      A[1] === '=' ? ((D = !0), (O = A.substr(2))) : (_ = []),
                      A[0] === '>' ? _.push(1) : _.push(-1))
                    : A[0] === '='
                      ? (O = A.substr(1))
                      : A[0] === '~' && ((D = !0), (O = A.substr(1))),
                  _.indexOf(c.default.compareVersions(j, O, D)) > -1
                );
            }),
            (x.isOS = function (A) {
              return this.getOSName(!0) === String(A).toLowerCase();
            }),
            (x.isPlatform = function (A) {
              return this.getPlatformType(!0) === String(A).toLowerCase();
            }),
            (x.isEngine = function (A) {
              return this.getEngineName(!0) === String(A).toLowerCase();
            }),
            (x.is = function (A, _) {
              return (
                _ === void 0 && (_ = !1), this.isBrowser(A, _) || this.isOS(A) || this.isPlatform(A)
              );
            }),
            (x.some = function (A) {
              var _ = this;
              return (
                A === void 0 && (A = []),
                A.some(function (O) {
                  return _.is(O);
                })
              );
            }),
            w
          );
        })();
        (e.default = l), (r.exports = e.default);
      },
      92: function (r, e, t) {
        'use strict';
        (e.__esModule = !0), (e.default = void 0);
        var n,
          o = (n = t(17)) && n.__esModule ? n : { default: n },
          s = /version\/(\d+(\.?_?\d+)+)/i,
          i = [
            {
              test: [/googlebot/i],
              describe: function (c) {
                var u = { name: 'Googlebot' },
                  l =
                    o.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, c) ||
                    o.default.getFirstMatch(s, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/opera/i],
              describe: function (c) {
                var u = { name: 'Opera' },
                  l =
                    o.default.getFirstMatch(s, c) ||
                    o.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/opr\/|opios/i],
              describe: function (c) {
                var u = { name: 'Opera' },
                  l =
                    o.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, c) ||
                    o.default.getFirstMatch(s, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/SamsungBrowser/i],
              describe: function (c) {
                var u = { name: 'Samsung Internet for Android' },
                  l =
                    o.default.getFirstMatch(s, c) ||
                    o.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/Whale/i],
              describe: function (c) {
                var u = { name: 'NAVER Whale Browser' },
                  l =
                    o.default.getFirstMatch(s, c) ||
                    o.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/MZBrowser/i],
              describe: function (c) {
                var u = { name: 'MZ Browser' },
                  l =
                    o.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, c) ||
                    o.default.getFirstMatch(s, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/focus/i],
              describe: function (c) {
                var u = { name: 'Focus' },
                  l =
                    o.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, c) ||
                    o.default.getFirstMatch(s, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/swing/i],
              describe: function (c) {
                var u = { name: 'Swing' },
                  l =
                    o.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, c) ||
                    o.default.getFirstMatch(s, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/coast/i],
              describe: function (c) {
                var u = { name: 'Opera Coast' },
                  l =
                    o.default.getFirstMatch(s, c) ||
                    o.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/opt\/\d+(?:.?_?\d+)+/i],
              describe: function (c) {
                var u = { name: 'Opera Touch' },
                  l =
                    o.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, c) ||
                    o.default.getFirstMatch(s, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/yabrowser/i],
              describe: function (c) {
                var u = { name: 'Yandex Browser' },
                  l =
                    o.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, c) ||
                    o.default.getFirstMatch(s, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/ucbrowser/i],
              describe: function (c) {
                var u = { name: 'UC Browser' },
                  l =
                    o.default.getFirstMatch(s, c) ||
                    o.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/Maxthon|mxios/i],
              describe: function (c) {
                var u = { name: 'Maxthon' },
                  l =
                    o.default.getFirstMatch(s, c) ||
                    o.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/epiphany/i],
              describe: function (c) {
                var u = { name: 'Epiphany' },
                  l =
                    o.default.getFirstMatch(s, c) ||
                    o.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/puffin/i],
              describe: function (c) {
                var u = { name: 'Puffin' },
                  l =
                    o.default.getFirstMatch(s, c) ||
                    o.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/sleipnir/i],
              describe: function (c) {
                var u = { name: 'Sleipnir' },
                  l =
                    o.default.getFirstMatch(s, c) ||
                    o.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/k-meleon/i],
              describe: function (c) {
                var u = { name: 'K-Meleon' },
                  l =
                    o.default.getFirstMatch(s, c) ||
                    o.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/micromessenger/i],
              describe: function (c) {
                var u = { name: 'WeChat' },
                  l =
                    o.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, c) ||
                    o.default.getFirstMatch(s, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/qqbrowser/i],
              describe: function (c) {
                var u = { name: /qqbrowserlite/i.test(c) ? 'QQ Browser Lite' : 'QQ Browser' },
                  l =
                    o.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, c) ||
                    o.default.getFirstMatch(s, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/msie|trident/i],
              describe: function (c) {
                var u = { name: 'Internet Explorer' },
                  l = o.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/\sedg\//i],
              describe: function (c) {
                var u = { name: 'Microsoft Edge' },
                  l = o.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/edg([ea]|ios)/i],
              describe: function (c) {
                var u = { name: 'Microsoft Edge' },
                  l = o.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/vivaldi/i],
              describe: function (c) {
                var u = { name: 'Vivaldi' },
                  l = o.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/seamonkey/i],
              describe: function (c) {
                var u = { name: 'SeaMonkey' },
                  l = o.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/sailfish/i],
              describe: function (c) {
                var u = { name: 'Sailfish' },
                  l = o.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/silk/i],
              describe: function (c) {
                var u = { name: 'Amazon Silk' },
                  l = o.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/phantom/i],
              describe: function (c) {
                var u = { name: 'PhantomJS' },
                  l = o.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/slimerjs/i],
              describe: function (c) {
                var u = { name: 'SlimerJS' },
                  l = o.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
              describe: function (c) {
                var u = { name: 'BlackBerry' },
                  l =
                    o.default.getFirstMatch(s, c) ||
                    o.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/(web|hpw)[o0]s/i],
              describe: function (c) {
                var u = { name: 'WebOS Browser' },
                  l =
                    o.default.getFirstMatch(s, c) ||
                    o.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/bada/i],
              describe: function (c) {
                var u = { name: 'Bada' },
                  l = o.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/tizen/i],
              describe: function (c) {
                var u = { name: 'Tizen' },
                  l =
                    o.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, c) ||
                    o.default.getFirstMatch(s, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/qupzilla/i],
              describe: function (c) {
                var u = { name: 'QupZilla' },
                  l =
                    o.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, c) ||
                    o.default.getFirstMatch(s, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/firefox|iceweasel|fxios/i],
              describe: function (c) {
                var u = { name: 'Firefox' },
                  l = o.default.getFirstMatch(
                    /(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,
                    c
                  );
                return l && (u.version = l), u;
              },
            },
            {
              test: [/electron/i],
              describe: function (c) {
                var u = { name: 'Electron' },
                  l = o.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/MiuiBrowser/i],
              describe: function (c) {
                var u = { name: 'Miui' },
                  l = o.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/chromium/i],
              describe: function (c) {
                var u = { name: 'Chromium' },
                  l =
                    o.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, c) ||
                    o.default.getFirstMatch(s, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/chrome|crios|crmo/i],
              describe: function (c) {
                var u = { name: 'Chrome' },
                  l = o.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/GSA/i],
              describe: function (c) {
                var u = { name: 'Google Search' },
                  l = o.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: function (c) {
                var u = !c.test(/like android/i),
                  l = c.test(/android/i);
                return u && l;
              },
              describe: function (c) {
                var u = { name: 'Android Browser' },
                  l = o.default.getFirstMatch(s, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/playstation 4/i],
              describe: function (c) {
                var u = { name: 'PlayStation 4' },
                  l = o.default.getFirstMatch(s, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/safari|applewebkit/i],
              describe: function (c) {
                var u = { name: 'Safari' },
                  l = o.default.getFirstMatch(s, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/.*/i],
              describe: function (c) {
                var u = c.search('\\(') !== -1 ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                return {
                  name: o.default.getFirstMatch(u, c),
                  version: o.default.getSecondMatch(u, c),
                };
              },
            },
          ];
        (e.default = i), (r.exports = e.default);
      },
      93: function (r, e, t) {
        'use strict';
        (e.__esModule = !0), (e.default = void 0);
        var n,
          o = (n = t(17)) && n.__esModule ? n : { default: n },
          s = t(18),
          i = [
            {
              test: [/Roku\/DVP/],
              describe: function (c) {
                var u = o.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, c);
                return { name: s.OS_MAP.Roku, version: u };
              },
            },
            {
              test: [/windows phone/i],
              describe: function (c) {
                var u = o.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, c);
                return { name: s.OS_MAP.WindowsPhone, version: u };
              },
            },
            {
              test: [/windows /i],
              describe: function (c) {
                var u = o.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, c),
                  l = o.default.getWindowsVersionName(u);
                return { name: s.OS_MAP.Windows, version: u, versionName: l };
              },
            },
            {
              test: [/Macintosh(.*?) FxiOS(.*?)\//],
              describe: function (c) {
                var u = { name: s.OS_MAP.iOS },
                  l = o.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/macintosh/i],
              describe: function (c) {
                var u = o.default
                    .getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, c)
                    .replace(/[_\s]/g, '.'),
                  l = o.default.getMacOSVersionName(u),
                  w = { name: s.OS_MAP.MacOS, version: u };
                return l && (w.versionName = l), w;
              },
            },
            {
              test: [/(ipod|iphone|ipad)/i],
              describe: function (c) {
                var u = o.default
                  .getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, c)
                  .replace(/[_\s]/g, '.');
                return { name: s.OS_MAP.iOS, version: u };
              },
            },
            {
              test: function (c) {
                var u = !c.test(/like android/i),
                  l = c.test(/android/i);
                return u && l;
              },
              describe: function (c) {
                var u = o.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, c),
                  l = o.default.getAndroidVersionName(u),
                  w = { name: s.OS_MAP.Android, version: u };
                return l && (w.versionName = l), w;
              },
            },
            {
              test: [/(web|hpw)[o0]s/i],
              describe: function (c) {
                var u = o.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, c),
                  l = { name: s.OS_MAP.WebOS };
                return u && u.length && (l.version = u), l;
              },
            },
            {
              test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
              describe: function (c) {
                var u =
                  o.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, c) ||
                  o.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, c) ||
                  o.default.getFirstMatch(/\bbb(\d+)/i, c);
                return { name: s.OS_MAP.BlackBerry, version: u };
              },
            },
            {
              test: [/bada/i],
              describe: function (c) {
                var u = o.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, c);
                return { name: s.OS_MAP.Bada, version: u };
              },
            },
            {
              test: [/tizen/i],
              describe: function (c) {
                var u = o.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, c);
                return { name: s.OS_MAP.Tizen, version: u };
              },
            },
            {
              test: [/linux/i],
              describe: function () {
                return { name: s.OS_MAP.Linux };
              },
            },
            {
              test: [/CrOS/],
              describe: function () {
                return { name: s.OS_MAP.ChromeOS };
              },
            },
            {
              test: [/PlayStation 4/],
              describe: function (c) {
                var u = o.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, c);
                return { name: s.OS_MAP.PlayStation4, version: u };
              },
            },
          ];
        (e.default = i), (r.exports = e.default);
      },
      94: function (r, e, t) {
        'use strict';
        (e.__esModule = !0), (e.default = void 0);
        var n,
          o = (n = t(17)) && n.__esModule ? n : { default: n },
          s = t(18),
          i = [
            {
              test: [/googlebot/i],
              describe: function () {
                return { type: 'bot', vendor: 'Google' };
              },
            },
            {
              test: [/huawei/i],
              describe: function (c) {
                var u = o.default.getFirstMatch(/(can-l01)/i, c) && 'Nova',
                  l = { type: s.PLATFORMS_MAP.mobile, vendor: 'Huawei' };
                return u && (l.model = u), l;
              },
            },
            {
              test: [/nexus\s*(?:7|8|9|10).*/i],
              describe: function () {
                return { type: s.PLATFORMS_MAP.tablet, vendor: 'Nexus' };
              },
            },
            {
              test: [/ipad/i],
              describe: function () {
                return { type: s.PLATFORMS_MAP.tablet, vendor: 'Apple', model: 'iPad' };
              },
            },
            {
              test: [/Macintosh(.*?) FxiOS(.*?)\//],
              describe: function () {
                return { type: s.PLATFORMS_MAP.tablet, vendor: 'Apple', model: 'iPad' };
              },
            },
            {
              test: [/kftt build/i],
              describe: function () {
                return {
                  type: s.PLATFORMS_MAP.tablet,
                  vendor: 'Amazon',
                  model: 'Kindle Fire HD 7',
                };
              },
            },
            {
              test: [/silk/i],
              describe: function () {
                return { type: s.PLATFORMS_MAP.tablet, vendor: 'Amazon' };
              },
            },
            {
              test: [/tablet(?! pc)/i],
              describe: function () {
                return { type: s.PLATFORMS_MAP.tablet };
              },
            },
            {
              test: function (c) {
                var u = c.test(/ipod|iphone/i),
                  l = c.test(/like (ipod|iphone)/i);
                return u && !l;
              },
              describe: function (c) {
                var u = o.default.getFirstMatch(/(ipod|iphone)/i, c);
                return { type: s.PLATFORMS_MAP.mobile, vendor: 'Apple', model: u };
              },
            },
            {
              test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
              describe: function () {
                return { type: s.PLATFORMS_MAP.mobile, vendor: 'Nexus' };
              },
            },
            {
              test: [/[^-]mobi/i],
              describe: function () {
                return { type: s.PLATFORMS_MAP.mobile };
              },
            },
            {
              test: function (c) {
                return c.getBrowserName(!0) === 'blackberry';
              },
              describe: function () {
                return { type: s.PLATFORMS_MAP.mobile, vendor: 'BlackBerry' };
              },
            },
            {
              test: function (c) {
                return c.getBrowserName(!0) === 'bada';
              },
              describe: function () {
                return { type: s.PLATFORMS_MAP.mobile };
              },
            },
            {
              test: function (c) {
                return c.getBrowserName() === 'windows phone';
              },
              describe: function () {
                return { type: s.PLATFORMS_MAP.mobile, vendor: 'Microsoft' };
              },
            },
            {
              test: function (c) {
                var u = Number(String(c.getOSVersion()).split('.')[0]);
                return c.getOSName(!0) === 'android' && u >= 3;
              },
              describe: function () {
                return { type: s.PLATFORMS_MAP.tablet };
              },
            },
            {
              test: function (c) {
                return c.getOSName(!0) === 'android';
              },
              describe: function () {
                return { type: s.PLATFORMS_MAP.mobile };
              },
            },
            {
              test: function (c) {
                return c.getOSName(!0) === 'macos';
              },
              describe: function () {
                return { type: s.PLATFORMS_MAP.desktop, vendor: 'Apple' };
              },
            },
            {
              test: function (c) {
                return c.getOSName(!0) === 'windows';
              },
              describe: function () {
                return { type: s.PLATFORMS_MAP.desktop };
              },
            },
            {
              test: function (c) {
                return c.getOSName(!0) === 'linux';
              },
              describe: function () {
                return { type: s.PLATFORMS_MAP.desktop };
              },
            },
            {
              test: function (c) {
                return c.getOSName(!0) === 'playstation 4';
              },
              describe: function () {
                return { type: s.PLATFORMS_MAP.tv };
              },
            },
            {
              test: function (c) {
                return c.getOSName(!0) === 'roku';
              },
              describe: function () {
                return { type: s.PLATFORMS_MAP.tv };
              },
            },
          ];
        (e.default = i), (r.exports = e.default);
      },
      95: function (r, e, t) {
        'use strict';
        (e.__esModule = !0), (e.default = void 0);
        var n,
          o = (n = t(17)) && n.__esModule ? n : { default: n },
          s = t(18),
          i = [
            {
              test: function (c) {
                return c.getBrowserName(!0) === 'microsoft edge';
              },
              describe: function (c) {
                if (/\sedg\//i.test(c)) return { name: s.ENGINE_MAP.Blink };
                var u = o.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, c);
                return { name: s.ENGINE_MAP.EdgeHTML, version: u };
              },
            },
            {
              test: [/trident/i],
              describe: function (c) {
                var u = { name: s.ENGINE_MAP.Trident },
                  l = o.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: function (c) {
                return c.test(/presto/i);
              },
              describe: function (c) {
                var u = { name: s.ENGINE_MAP.Presto },
                  l = o.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: function (c) {
                var u = c.test(/gecko/i),
                  l = c.test(/like gecko/i);
                return u && !l;
              },
              describe: function (c) {
                var u = { name: s.ENGINE_MAP.Gecko },
                  l = o.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, c);
                return l && (u.version = l), u;
              },
            },
            {
              test: [/(apple)?webkit\/537\.36/i],
              describe: function () {
                return { name: s.ENGINE_MAP.Blink };
              },
            },
            {
              test: [/(apple)?webkit/i],
              describe: function (c) {
                var u = { name: s.ENGINE_MAP.WebKit },
                  l = o.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, c);
                return l && (u.version = l), u;
              },
            },
          ];
        (e.default = i), (r.exports = e.default);
      },
    });
  });
});
f();
f();
f();
var Gs,
  Ys,
  Zs,
  Js,
  ca,
  ua,
  Id = class Id {
    constructor({ address: e, publicKey: t, label: n, icon: o, chains: s, features: i }) {
      Ne(this, Gs);
      Ne(this, Ys);
      Ne(this, Zs);
      Ne(this, Js);
      Ne(this, ca);
      Ne(this, ua);
      new.target === Id && Object.freeze(this),
        Ze(this, Gs, e),
        Ze(this, Ys, t),
        Ze(this, Zs, s),
        Ze(this, Js, i),
        Ze(this, ca, n),
        Ze(this, ua, o);
    }
    get address() {
      return oe(this, Gs);
    }
    get publicKey() {
      return oe(this, Ys).slice();
    }
    get chains() {
      return oe(this, Zs).slice();
    }
    get features() {
      return oe(this, Js).slice();
    }
    get label() {
      return oe(this, ca);
    }
    get icon() {
      return oe(this, ua);
    }
    equals(e) {
      return (
        oe(this, Gs) === e.address &&
        Iz(oe(this, Ys), e.publicKey) &&
        Pg(oe(this, Zs), e.chains) &&
        Pg(oe(this, Js), e.features)
      );
    }
  };
(Gs = new WeakMap()),
  (Ys = new WeakMap()),
  (Zs = new WeakMap()),
  (Js = new WeakMap()),
  (ca = new WeakMap()),
  (ua = new WeakMap());
var aa = Id;
function Iz(r, e) {
  if (r.length !== e.length) return !1;
  for (let t = 0; t < r.length; t++) if (r[t] !== e[t]) return !1;
  return !0;
}
function Pg(r, e) {
  if (r.length !== e.length) return !1;
  for (let t = 0; t < r.length; t++) if (r[t] !== e[t]) return !1;
  return !0;
}
f();
var kd =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA4IiBoZWlnaHQ9IjEwOCIgdmlld0JveD0iMCAwIDEwOCAxMDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiByeD0iMjYiIGZpbGw9IiNBQjlGRjIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ni41MjY3IDY5LjkyMjlDNDIuMDA1NCA3Ni44NTA5IDM0LjQyOTIgODUuNjE4MiAyNC4zNDggODUuNjE4MkMxOS41ODI0IDg1LjYxODIgMTUgODMuNjU2MyAxNSA3NS4xMzQyQzE1IDUzLjQzMDUgNDQuNjMyNiAxOS44MzI3IDcyLjEyNjggMTkuODMyN0M4Ny43NjggMTkuODMyNyA5NCAzMC42ODQ2IDk0IDQzLjAwNzlDOTQgNTguODI1OCA4My43MzU1IDc2LjkxMjIgNzMuNTMyMSA3Ni45MTIyQzcwLjI5MzkgNzYuOTEyMiA2OC43MDUzIDc1LjEzNDIgNjguNzA1MyA3Mi4zMTRDNjguNzA1MyA3MS41NzgzIDY4LjgyNzUgNzAuNzgxMiA2OS4wNzE5IDY5LjkyMjlDNjUuNTg5MyA3NS44Njk5IDU4Ljg2ODUgODEuMzg3OCA1Mi41NzU0IDgxLjM4NzhDNDcuOTkzIDgxLjM4NzggNDUuNjcxMyA3OC41MDYzIDQ1LjY3MTMgNzQuNDU5OEM0NS42NzEzIDcyLjk4ODQgNDUuOTc2OCA3MS40NTU2IDQ2LjUyNjcgNjkuOTIyOVpNODMuNjc2MSA0Mi41Nzk0QzgzLjY3NjEgNDYuMTcwNCA4MS41NTc1IDQ3Ljk2NTggNzkuMTg3NSA0Ny45NjU4Qzc2Ljc4MTYgNDcuOTY1OCA3NC42OTg5IDQ2LjE3MDQgNzQuNjk4OSA0Mi41Nzk0Qzc0LjY5ODkgMzguOTg4NSA3Ni43ODE2IDM3LjE5MzEgNzkuMTg3NSAzNy4xOTMxQzgxLjU1NzUgMzcuMTkzMSA4My42NzYxIDM4Ljk4ODUgODMuNjc2MSA0Mi41Nzk0Wk03MC4yMTAzIDQyLjU3OTVDNzAuMjEwMyA0Ni4xNzA0IDY4LjA5MTYgNDcuOTY1OCA2NS43MjE2IDQ3Ljk2NThDNjMuMzE1NyA0Ny45NjU4IDYxLjIzMyA0Ni4xNzA0IDYxLjIzMyA0Mi41Nzk1QzYxLjIzMyAzOC45ODg1IDYzLjMxNTcgMzcuMTkzMSA2NS43MjE2IDM3LjE5MzFDNjguMDkxNiAzNy4xOTMxIDcwLjIxMDMgMzguOTg4NSA3MC4yMTAzIDQyLjU3OTVaIiBmaWxsPSIjRkZGREY4Ii8+Cjwvc3ZnPgo=';
f();
function Pd(r) {
  let e = ({ register: t }) => t(r);
  try {
    window.dispatchEvent(new Td(e));
  } catch (t) {
    console.error(
      `wallet-standard:register-wallet event could not be dispatched
`,
      t
    );
  }
  try {
    window.addEventListener('wallet-standard:app-ready', ({ detail: t }) => e(t));
  } catch (t) {
    console.error(
      `wallet-standard:app-ready event listener could not be added
`,
      t
    );
  }
}
var pa,
  Td = class extends Event {
    constructor(t) {
      super('wallet-standard:register-wallet', { bubbles: !1, cancelable: !1, composed: !1 });
      Ne(this, pa);
      Ze(this, pa, t);
    }
    get detail() {
      return oe(this, pa);
    }
    get type() {
      return 'wallet-standard:register-wallet';
    }
    preventDefault() {
      throw new Error('preventDefault cannot be called');
    }
    stopImmediatePropagation() {
      throw new Error('stopImmediatePropagation cannot be called');
    }
    stopPropagation() {
      throw new Error('stopPropagation cannot be called');
    }
  };
pa = new WeakMap();
f();
var Bg = 'solana:mainnet',
  Mg = 'solana:devnet',
  zg = 'solana:testnet',
  Lg = 'solana:localnet',
  fa = [Bg, Mg, zg, Lg];
function Bd(r) {
  return fa.includes(r);
}
f();
f();
function Md(r, e) {
  return Ng(r, e);
}
function Ng(r, e) {
  if (r === e) return !0;
  let t = r.length;
  if (t !== e.length) return !1;
  for (let n = 0; n < t; n++) if (r[n] !== e[n]) return !1;
  return !0;
}
f();
f();
f();
var Ve = class extends Error {
  constructor({ code: t, message: n }, o) {
    super(n);
    Pe(this, 'message');
    Pe(this, 'code');
    Pe(this, 'data');
    (this.code = t), (this.message = n), typeof o < 'u' && (this.data = o);
  }
  toString() {
    return this.message;
  }
};
f();
f();
f();
f();
f();
var kz = {
    canSerialize: (r) => typeof r == 'number' && Number.isNaN(r),
    serialize: (r) => ({ ['$NAN']: 1 }),
    deserialize: (r) => NaN,
  },
  Tz = {
    canSerialize: (r) => r instanceof Date,
    serialize: (r) => ({ ['$DATE']: r.valueOf() }),
    deserialize: (r) => new Date(r['$DATE']),
  },
  Pz = {
    canSerialize: (r) => r instanceof Uint8Array,
    serialize: (r) => ({ ['$UINT8ARRAY']: Array.from(r) }),
    deserialize: (r) => Uint8Array.from(r['$UINT8ARRAY']),
  },
  Bz = {
    canSerialize: (r) => typeof r == 'bigint',
    serialize: (r) => ({ ['$BIGINT']: r.toString() }),
    deserialize: (r) => BigInt(r['$BIGINT']),
  },
  Mz = {
    canSerialize: (r) => r instanceof URL,
    serialize: (r) => ({ ['$URL']: r.href }),
    deserialize: (r) => new URL(r['$URL']),
  },
  Oc = { NAN: kz, DATE: Tz, UINT8ARRAY: Pz, BIGINT: Bz, URL: Mz };
var zz = function (r) {
    let e = this[r];
    for (let t of Object.values(Oc)) if (t.canSerialize(e)) return t.serialize(e);
    return e;
  },
  Lz = (r, e) => {
    if (e && typeof e == 'object' && Object.keys(e)[0]) {
      let t = Object.keys(e)[0].slice(1);
      if (t in Oc) return Oc[t].deserialize(e);
    }
    return e;
  },
  la = (r) => JSON.stringify(r, zz),
  Cc = (r) => JSON.parse(r, Lz);
f();
f();
f();
var sh = {};
$(sh, {
  error: () => Jx,
  method: () => Gx,
  params: () => Yx,
  request: () => R3,
  response: () => I3,
  result: () => Zx,
});
f();
f();
var He;
(function (r) {
  r.assertEqual = (o) => o;
  function e(o) {}
  r.assertIs = e;
  function t(o) {
    throw new Error();
  }
  (r.assertNever = t),
    (r.arrayToEnum = (o) => {
      let s = {};
      for (let i of o) s[i] = i;
      return s;
    }),
    (r.getValidEnumValues = (o) => {
      let s = r.objectKeys(o).filter((c) => typeof o[o[c]] != 'number'),
        i = {};
      for (let c of s) i[c] = o[c];
      return r.objectValues(i);
    }),
    (r.objectValues = (o) =>
      r.objectKeys(o).map(function (s) {
        return o[s];
      })),
    (r.objectKeys =
      typeof Object.keys == 'function'
        ? (o) => Object.keys(o)
        : (o) => {
            let s = [];
            for (let i in o) Object.prototype.hasOwnProperty.call(o, i) && s.push(i);
            return s;
          }),
    (r.find = (o, s) => {
      for (let i of o) if (s(i)) return i;
    }),
    (r.isInteger =
      typeof Number.isInteger == 'function'
        ? (o) => Number.isInteger(o)
        : (o) => typeof o == 'number' && isFinite(o) && Math.floor(o) === o);
  function n(o, s = ' | ') {
    return o.map((i) => (typeof i == 'string' ? `'${i}'` : i)).join(s);
  }
  (r.joinValues = n),
    (r.jsonStringifyReplacer = (o, s) => (typeof s == 'bigint' ? s.toString() : s));
})(He || (He = {}));
var Ld;
(function (r) {
  r.mergeShapes = (e, t) => ({ ...e, ...t });
})(Ld || (Ld = {}));
var xe = He.arrayToEnum([
    'string',
    'nan',
    'number',
    'integer',
    'float',
    'boolean',
    'date',
    'bigint',
    'symbol',
    'function',
    'undefined',
    'null',
    'array',
    'object',
    'unknown',
    'promise',
    'void',
    'never',
    'map',
    'set',
  ]),
  ro = (r) => {
    switch (typeof r) {
      case 'undefined':
        return xe.undefined;
      case 'string':
        return xe.string;
      case 'number':
        return isNaN(r) ? xe.nan : xe.number;
      case 'boolean':
        return xe.boolean;
      case 'function':
        return xe.function;
      case 'bigint':
        return xe.bigint;
      case 'symbol':
        return xe.symbol;
      case 'object':
        return Array.isArray(r)
          ? xe.array
          : r === null
            ? xe.null
            : r.then && typeof r.then == 'function' && r.catch && typeof r.catch == 'function'
              ? xe.promise
              : typeof Map < 'u' && r instanceof Map
                ? xe.map
                : typeof Set < 'u' && r instanceof Set
                  ? xe.set
                  : typeof Date < 'u' && r instanceof Date
                    ? xe.date
                    : xe.object;
      default:
        return xe.unknown;
    }
  },
  ue = He.arrayToEnum([
    'invalid_type',
    'invalid_literal',
    'custom',
    'invalid_union',
    'invalid_union_discriminator',
    'invalid_enum_value',
    'unrecognized_keys',
    'invalid_arguments',
    'invalid_return_type',
    'invalid_date',
    'invalid_string',
    'too_small',
    'too_big',
    'invalid_intersection_types',
    'not_multiple_of',
    'not_finite',
  ]),
  Oz = (r) => JSON.stringify(r, null, 2).replace(/"([^"]+)":/g, '$1:'),
  Kt = class r extends Error {
    constructor(e) {
      super(),
        (this.issues = []),
        (this.addIssue = (n) => {
          this.issues = [...this.issues, n];
        }),
        (this.addIssues = (n = []) => {
          this.issues = [...this.issues, ...n];
        });
      let t = new.target.prototype;
      Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : (this.__proto__ = t),
        (this.name = 'ZodError'),
        (this.issues = e);
    }
    get errors() {
      return this.issues;
    }
    format(e) {
      let t =
          e ||
          function (s) {
            return s.message;
          },
        n = { _errors: [] },
        o = (s) => {
          for (let i of s.issues)
            if (i.code === 'invalid_union') i.unionErrors.map(o);
            else if (i.code === 'invalid_return_type') o(i.returnTypeError);
            else if (i.code === 'invalid_arguments') o(i.argumentsError);
            else if (i.path.length === 0) n._errors.push(t(i));
            else {
              let c = n,
                u = 0;
              for (; u < i.path.length; ) {
                let l = i.path[u];
                u === i.path.length - 1
                  ? ((c[l] = c[l] || { _errors: [] }), c[l]._errors.push(t(i)))
                  : (c[l] = c[l] || { _errors: [] }),
                  (c = c[l]),
                  u++;
              }
            }
        };
      return o(this), n;
    }
    static assert(e) {
      if (!(e instanceof r)) throw new Error(`Not a ZodError: ${e}`);
    }
    toString() {
      return this.message;
    }
    get message() {
      return JSON.stringify(this.issues, He.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
      return this.issues.length === 0;
    }
    flatten(e = (t) => t.message) {
      let t = {},
        n = [];
      for (let o of this.issues)
        o.path.length > 0
          ? ((t[o.path[0]] = t[o.path[0]] || []), t[o.path[0]].push(e(o)))
          : n.push(e(o));
      return { formErrors: n, fieldErrors: t };
    }
    get formErrors() {
      return this.flatten();
    }
  };
Kt.create = (r) => new Kt(r);
var ei = (r, e) => {
    let t;
    switch (r.code) {
      case ue.invalid_type:
        r.received === xe.undefined
          ? (t = 'Required')
          : (t = `Expected ${r.expected}, received ${r.received}`);
        break;
      case ue.invalid_literal:
        t = `Invalid literal value, expected ${JSON.stringify(r.expected, He.jsonStringifyReplacer)}`;
        break;
      case ue.unrecognized_keys:
        t = `Unrecognized key(s) in object: ${He.joinValues(r.keys, ', ')}`;
        break;
      case ue.invalid_union:
        t = 'Invalid input';
        break;
      case ue.invalid_union_discriminator:
        t = `Invalid discriminator value. Expected ${He.joinValues(r.options)}`;
        break;
      case ue.invalid_enum_value:
        t = `Invalid enum value. Expected ${He.joinValues(r.options)}, received '${r.received}'`;
        break;
      case ue.invalid_arguments:
        t = 'Invalid function arguments';
        break;
      case ue.invalid_return_type:
        t = 'Invalid function return type';
        break;
      case ue.invalid_date:
        t = 'Invalid date';
        break;
      case ue.invalid_string:
        typeof r.validation == 'object'
          ? 'includes' in r.validation
            ? ((t = `Invalid input: must include "${r.validation.includes}"`),
              typeof r.validation.position == 'number' &&
                (t = `${t} at one or more positions greater than or equal to ${r.validation.position}`))
            : 'startsWith' in r.validation
              ? (t = `Invalid input: must start with "${r.validation.startsWith}"`)
              : 'endsWith' in r.validation
                ? (t = `Invalid input: must end with "${r.validation.endsWith}"`)
                : He.assertNever(r.validation)
          : r.validation !== 'regex'
            ? (t = `Invalid ${r.validation}`)
            : (t = 'Invalid');
        break;
      case ue.too_small:
        r.type === 'array'
          ? (t = `Array must contain ${r.exact ? 'exactly' : r.inclusive ? 'at least' : 'more than'} ${r.minimum} element(s)`)
          : r.type === 'string'
            ? (t = `String must contain ${r.exact ? 'exactly' : r.inclusive ? 'at least' : 'over'} ${r.minimum} character(s)`)
            : r.type === 'number'
              ? (t = `Number must be ${r.exact ? 'exactly equal to ' : r.inclusive ? 'greater than or equal to ' : 'greater than '}${r.minimum}`)
              : r.type === 'date'
                ? (t = `Date must be ${r.exact ? 'exactly equal to ' : r.inclusive ? 'greater than or equal to ' : 'greater than '}${new Date(Number(r.minimum))}`)
                : (t = 'Invalid input');
        break;
      case ue.too_big:
        r.type === 'array'
          ? (t = `Array must contain ${r.exact ? 'exactly' : r.inclusive ? 'at most' : 'less than'} ${r.maximum} element(s)`)
          : r.type === 'string'
            ? (t = `String must contain ${r.exact ? 'exactly' : r.inclusive ? 'at most' : 'under'} ${r.maximum} character(s)`)
            : r.type === 'number'
              ? (t = `Number must be ${r.exact ? 'exactly' : r.inclusive ? 'less than or equal to' : 'less than'} ${r.maximum}`)
              : r.type === 'bigint'
                ? (t = `BigInt must be ${r.exact ? 'exactly' : r.inclusive ? 'less than or equal to' : 'less than'} ${r.maximum}`)
                : r.type === 'date'
                  ? (t = `Date must be ${r.exact ? 'exactly' : r.inclusive ? 'smaller than or equal to' : 'smaller than'} ${new Date(Number(r.maximum))}`)
                  : (t = 'Invalid input');
        break;
      case ue.custom:
        t = 'Invalid input';
        break;
      case ue.invalid_intersection_types:
        t = 'Intersection results could not be merged';
        break;
      case ue.not_multiple_of:
        t = `Number must be a multiple of ${r.multipleOf}`;
        break;
      case ue.not_finite:
        t = 'Number must be finite';
        break;
      default:
        (t = e.defaultError), He.assertNever(r);
    }
    return { message: t };
  },
  qg = ei;
function Cz(r) {
  qg = r;
}
function qc() {
  return qg;
}
var Dc = (r) => {
    let { data: e, path: t, errorMaps: n, issueData: o } = r,
      s = [...t, ...(o.path || [])],
      i = { ...o, path: s };
    if (o.message !== void 0) return { ...o, path: s, message: o.message };
    let c = '',
      u = n
        .filter((l) => !!l)
        .slice()
        .reverse();
    for (let l of u) c = l(i, { data: e, defaultError: c }).message;
    return { ...o, path: s, message: c };
  },
  qz = [];
function ye(r, e) {
  let t = qc(),
    n = Dc({
      issueData: e,
      data: r.data,
      path: r.path,
      errorMaps: [r.common.contextualErrorMap, r.schemaErrorMap, t, t === ei ? void 0 : ei].filter(
        (o) => !!o
      ),
    });
  r.common.issues.push(n);
}
var nr = class r {
    constructor() {
      this.value = 'valid';
    }
    dirty() {
      this.value === 'valid' && (this.value = 'dirty');
    }
    abort() {
      this.value !== 'aborted' && (this.value = 'aborted');
    }
    static mergeArray(e, t) {
      let n = [];
      for (let o of t) {
        if (o.status === 'aborted') return Be;
        o.status === 'dirty' && e.dirty(), n.push(o.value);
      }
      return { status: e.value, value: n };
    }
    static async mergeObjectAsync(e, t) {
      let n = [];
      for (let o of t) {
        let s = await o.key,
          i = await o.value;
        n.push({ key: s, value: i });
      }
      return r.mergeObjectSync(e, n);
    }
    static mergeObjectSync(e, t) {
      let n = {};
      for (let o of t) {
        let { key: s, value: i } = o;
        if (s.status === 'aborted' || i.status === 'aborted') return Be;
        s.status === 'dirty' && e.dirty(),
          i.status === 'dirty' && e.dirty(),
          s.value !== '__proto__' &&
            (typeof i.value < 'u' || o.alwaysSet) &&
            (n[s.value] = i.value);
      }
      return { status: e.value, value: n };
    }
  },
  Be = Object.freeze({ status: 'aborted' }),
  Qs = (r) => ({ status: 'dirty', value: r }),
  hr = (r) => ({ status: 'valid', value: r }),
  Nd = (r) => r.status === 'aborted',
  Od = (r) => r.status === 'dirty',
  ma = (r) => r.status === 'valid',
  ya = (r) => typeof Promise < 'u' && r instanceof Promise;
function Uc(r, e, t, n) {
  if (t === 'a' && !n) throw new TypeError('Private accessor was defined without a getter');
  if (typeof e == 'function' ? r !== e || !n : !e.has(r))
    throw new TypeError('Cannot read private member from an object whose class did not declare it');
  return t === 'm' ? n : t === 'a' ? n.call(r) : n ? n.value : e.get(r);
}
function Dg(r, e, t, n, o) {
  if (n === 'm') throw new TypeError('Private method is not writable');
  if (n === 'a' && !o) throw new TypeError('Private accessor was defined without a setter');
  if (typeof e == 'function' ? r !== e || !o : !e.has(r))
    throw new TypeError('Cannot write private member to an object whose class did not declare it');
  return n === 'a' ? o.call(r, t) : o ? (o.value = t) : e.set(r, t), t;
}
var Re;
(function (r) {
  (r.errToObj = (e) => (typeof e == 'string' ? { message: e } : e || {})),
    (r.toString = (e) => (typeof e == 'string' ? e : e == null ? void 0 : e.message));
})(Re || (Re = {}));
var da,
  ha,
  Cr = class {
    constructor(e, t, n, o) {
      (this._cachedPath = []),
        (this.parent = e),
        (this.data = t),
        (this._path = n),
        (this._key = o);
    }
    get path() {
      return (
        this._cachedPath.length ||
          (this._key instanceof Array
            ? this._cachedPath.push(...this._path, ...this._key)
            : this._cachedPath.push(...this._path, this._key)),
        this._cachedPath
      );
    }
  },
  Og = (r, e) => {
    if (ma(e)) return { success: !0, data: e.value };
    if (!r.common.issues.length) throw new Error('Validation failed but no issues detected.');
    return {
      success: !1,
      get error() {
        if (this._error) return this._error;
        let t = new Kt(r.common.issues);
        return (this._error = t), this._error;
      },
    };
  };
function Ce(r) {
  if (!r) return {};
  let { errorMap: e, invalid_type_error: t, required_error: n, description: o } = r;
  if (e && (t || n))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`
    );
  return e
    ? { errorMap: e, description: o }
    : {
        errorMap: (i, c) => {
          var u, l;
          let { message: w } = r;
          return i.code === 'invalid_enum_value'
            ? { message: w != null ? w : c.defaultError }
            : typeof c.data > 'u'
              ? { message: (u = w != null ? w : n) !== null && u !== void 0 ? u : c.defaultError }
              : i.code !== 'invalid_type'
                ? { message: c.defaultError }
                : {
                    message: (l = w != null ? w : t) !== null && l !== void 0 ? l : c.defaultError,
                  };
        },
        description: o,
      };
}
var qe = class {
    constructor(e) {
      (this.spa = this.safeParseAsync),
        (this._def = e),
        (this.parse = this.parse.bind(this)),
        (this.safeParse = this.safeParse.bind(this)),
        (this.parseAsync = this.parseAsync.bind(this)),
        (this.safeParseAsync = this.safeParseAsync.bind(this)),
        (this.spa = this.spa.bind(this)),
        (this.refine = this.refine.bind(this)),
        (this.refinement = this.refinement.bind(this)),
        (this.superRefine = this.superRefine.bind(this)),
        (this.optional = this.optional.bind(this)),
        (this.nullable = this.nullable.bind(this)),
        (this.nullish = this.nullish.bind(this)),
        (this.array = this.array.bind(this)),
        (this.promise = this.promise.bind(this)),
        (this.or = this.or.bind(this)),
        (this.and = this.and.bind(this)),
        (this.transform = this.transform.bind(this)),
        (this.brand = this.brand.bind(this)),
        (this.default = this.default.bind(this)),
        (this.catch = this.catch.bind(this)),
        (this.describe = this.describe.bind(this)),
        (this.pipe = this.pipe.bind(this)),
        (this.readonly = this.readonly.bind(this)),
        (this.isNullable = this.isNullable.bind(this)),
        (this.isOptional = this.isOptional.bind(this));
    }
    get description() {
      return this._def.description;
    }
    _getType(e) {
      return ro(e.data);
    }
    _getOrReturnCtx(e, t) {
      return (
        t || {
          common: e.parent.common,
          data: e.data,
          parsedType: ro(e.data),
          schemaErrorMap: this._def.errorMap,
          path: e.path,
          parent: e.parent,
        }
      );
    }
    _processInputParams(e) {
      return {
        status: new nr(),
        ctx: {
          common: e.parent.common,
          data: e.data,
          parsedType: ro(e.data),
          schemaErrorMap: this._def.errorMap,
          path: e.path,
          parent: e.parent,
        },
      };
    }
    _parseSync(e) {
      let t = this._parse(e);
      if (ya(t)) throw new Error('Synchronous parse encountered promise.');
      return t;
    }
    _parseAsync(e) {
      let t = this._parse(e);
      return Promise.resolve(t);
    }
    parse(e, t) {
      let n = this.safeParse(e, t);
      if (n.success) return n.data;
      throw n.error;
    }
    safeParse(e, t) {
      var n;
      let o = {
          common: {
            issues: [],
            async: (n = t == null ? void 0 : t.async) !== null && n !== void 0 ? n : !1,
            contextualErrorMap: t == null ? void 0 : t.errorMap,
          },
          path: (t == null ? void 0 : t.path) || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data: e,
          parsedType: ro(e),
        },
        s = this._parseSync({ data: e, path: o.path, parent: o });
      return Og(o, s);
    }
    async parseAsync(e, t) {
      let n = await this.safeParseAsync(e, t);
      if (n.success) return n.data;
      throw n.error;
    }
    async safeParseAsync(e, t) {
      let n = {
          common: { issues: [], contextualErrorMap: t == null ? void 0 : t.errorMap, async: !0 },
          path: (t == null ? void 0 : t.path) || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data: e,
          parsedType: ro(e),
        },
        o = this._parse({ data: e, path: n.path, parent: n }),
        s = await (ya(o) ? o : Promise.resolve(o));
      return Og(n, s);
    }
    refine(e, t) {
      let n = (o) =>
        typeof t == 'string' || typeof t > 'u' ? { message: t } : typeof t == 'function' ? t(o) : t;
      return this._refinement((o, s) => {
        let i = e(o),
          c = () => s.addIssue({ code: ue.custom, ...n(o) });
        return typeof Promise < 'u' && i instanceof Promise
          ? i.then((u) => (u ? !0 : (c(), !1)))
          : i
            ? !0
            : (c(), !1);
      });
    }
    refinement(e, t) {
      return this._refinement((n, o) =>
        e(n) ? !0 : (o.addIssue(typeof t == 'function' ? t(n, o) : t), !1)
      );
    }
    _refinement(e) {
      return new kr({
        schema: this,
        typeName: Te.ZodEffects,
        effect: { type: 'refinement', refinement: e },
      });
    }
    superRefine(e) {
      return this._refinement(e);
    }
    optional() {
      return Or.create(this, this._def);
    }
    nullable() {
      return fn.create(this, this._def);
    }
    nullish() {
      return this.nullable().optional();
    }
    array() {
      return zn.create(this, this._def);
    }
    promise() {
      return so.create(this, this._def);
    }
    or(e) {
      return ds.create([this, e], this._def);
    }
    and(e) {
      return hs.create(this, e, this._def);
    }
    transform(e) {
      return new kr({
        ...Ce(this._def),
        schema: this,
        typeName: Te.ZodEffects,
        effect: { type: 'transform', transform: e },
      });
    }
    default(e) {
      let t = typeof e == 'function' ? e : () => e;
      return new bs({
        ...Ce(this._def),
        innerType: this,
        defaultValue: t,
        typeName: Te.ZodDefault,
      });
    }
    brand() {
      return new ga({ typeName: Te.ZodBranded, type: this, ...Ce(this._def) });
    }
    catch(e) {
      let t = typeof e == 'function' ? e : () => e;
      return new ws({ ...Ce(this._def), innerType: this, catchValue: t, typeName: Te.ZodCatch });
    }
    describe(e) {
      let t = this.constructor;
      return new t({ ...this._def, description: e });
    }
    pipe(e) {
      return xa.create(this, e);
    }
    readonly() {
      return vs.create(this);
    }
    isOptional() {
      return this.safeParse(void 0).success;
    }
    isNullable() {
      return this.safeParse(null).success;
    }
  },
  Dz = /^c[^\s-]{8,}$/i,
  Uz = /^[0-9a-z]+$/,
  Fz = /^[0-9A-HJKMNP-TV-Z]{26}$/,
  jz = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  Hz = /^[a-z0-9_-]{21}$/i,
  Wz =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  Kz = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  Vz = '^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$',
  zd,
  $z =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  Gz =
    /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  Yz = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  Ug =
    '((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))',
  Zz = new RegExp(`^${Ug}$`);
function Fg(r) {
  let e = '([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d';
  return (
    r.precision
      ? (e = `${e}\\.\\d{${r.precision}}`)
      : r.precision == null && (e = `${e}(\\.\\d+)?`),
    e
  );
}
function Jz(r) {
  return new RegExp(`^${Fg(r)}$`);
}
function jg(r) {
  let e = `${Ug}T${Fg(r)}`,
    t = [];
  return (
    t.push(r.local ? 'Z?' : 'Z'),
    r.offset && t.push('([+-]\\d{2}:?\\d{2})'),
    (e = `${e}(${t.join('|')})`),
    new RegExp(`^${e}$`)
  );
}
function Xz(r, e) {
  return !!(((e === 'v4' || !e) && $z.test(r)) || ((e === 'v6' || !e) && Gz.test(r)));
}
var no = class r extends qe {
  _parse(e) {
    if ((this._def.coerce && (e.data = String(e.data)), this._getType(e) !== xe.string)) {
      let s = this._getOrReturnCtx(e);
      return ye(s, { code: ue.invalid_type, expected: xe.string, received: s.parsedType }), Be;
    }
    let n = new nr(),
      o;
    for (let s of this._def.checks)
      if (s.kind === 'min')
        e.data.length < s.value &&
          ((o = this._getOrReturnCtx(e, o)),
          ye(o, {
            code: ue.too_small,
            minimum: s.value,
            type: 'string',
            inclusive: !0,
            exact: !1,
            message: s.message,
          }),
          n.dirty());
      else if (s.kind === 'max')
        e.data.length > s.value &&
          ((o = this._getOrReturnCtx(e, o)),
          ye(o, {
            code: ue.too_big,
            maximum: s.value,
            type: 'string',
            inclusive: !0,
            exact: !1,
            message: s.message,
          }),
          n.dirty());
      else if (s.kind === 'length') {
        let i = e.data.length > s.value,
          c = e.data.length < s.value;
        (i || c) &&
          ((o = this._getOrReturnCtx(e, o)),
          i
            ? ye(o, {
                code: ue.too_big,
                maximum: s.value,
                type: 'string',
                inclusive: !0,
                exact: !0,
                message: s.message,
              })
            : c &&
              ye(o, {
                code: ue.too_small,
                minimum: s.value,
                type: 'string',
                inclusive: !0,
                exact: !0,
                message: s.message,
              }),
          n.dirty());
      } else if (s.kind === 'email')
        Kz.test(e.data) ||
          ((o = this._getOrReturnCtx(e, o)),
          ye(o, { validation: 'email', code: ue.invalid_string, message: s.message }),
          n.dirty());
      else if (s.kind === 'emoji')
        zd || (zd = new RegExp(Vz, 'u')),
          zd.test(e.data) ||
            ((o = this._getOrReturnCtx(e, o)),
            ye(o, { validation: 'emoji', code: ue.invalid_string, message: s.message }),
            n.dirty());
      else if (s.kind === 'uuid')
        jz.test(e.data) ||
          ((o = this._getOrReturnCtx(e, o)),
          ye(o, { validation: 'uuid', code: ue.invalid_string, message: s.message }),
          n.dirty());
      else if (s.kind === 'nanoid')
        Hz.test(e.data) ||
          ((o = this._getOrReturnCtx(e, o)),
          ye(o, { validation: 'nanoid', code: ue.invalid_string, message: s.message }),
          n.dirty());
      else if (s.kind === 'cuid')
        Dz.test(e.data) ||
          ((o = this._getOrReturnCtx(e, o)),
          ye(o, { validation: 'cuid', code: ue.invalid_string, message: s.message }),
          n.dirty());
      else if (s.kind === 'cuid2')
        Uz.test(e.data) ||
          ((o = this._getOrReturnCtx(e, o)),
          ye(o, { validation: 'cuid2', code: ue.invalid_string, message: s.message }),
          n.dirty());
      else if (s.kind === 'ulid')
        Fz.test(e.data) ||
          ((o = this._getOrReturnCtx(e, o)),
          ye(o, { validation: 'ulid', code: ue.invalid_string, message: s.message }),
          n.dirty());
      else if (s.kind === 'url')
        try {
          new URL(e.data);
        } catch {
          (o = this._getOrReturnCtx(e, o)),
            ye(o, { validation: 'url', code: ue.invalid_string, message: s.message }),
            n.dirty();
        }
      else
        s.kind === 'regex'
          ? ((s.regex.lastIndex = 0),
            s.regex.test(e.data) ||
              ((o = this._getOrReturnCtx(e, o)),
              ye(o, { validation: 'regex', code: ue.invalid_string, message: s.message }),
              n.dirty()))
          : s.kind === 'trim'
            ? (e.data = e.data.trim())
            : s.kind === 'includes'
              ? e.data.includes(s.value, s.position) ||
                ((o = this._getOrReturnCtx(e, o)),
                ye(o, {
                  code: ue.invalid_string,
                  validation: { includes: s.value, position: s.position },
                  message: s.message,
                }),
                n.dirty())
              : s.kind === 'toLowerCase'
                ? (e.data = e.data.toLowerCase())
                : s.kind === 'toUpperCase'
                  ? (e.data = e.data.toUpperCase())
                  : s.kind === 'startsWith'
                    ? e.data.startsWith(s.value) ||
                      ((o = this._getOrReturnCtx(e, o)),
                      ye(o, {
                        code: ue.invalid_string,
                        validation: { startsWith: s.value },
                        message: s.message,
                      }),
                      n.dirty())
                    : s.kind === 'endsWith'
                      ? e.data.endsWith(s.value) ||
                        ((o = this._getOrReturnCtx(e, o)),
                        ye(o, {
                          code: ue.invalid_string,
                          validation: { endsWith: s.value },
                          message: s.message,
                        }),
                        n.dirty())
                      : s.kind === 'datetime'
                        ? jg(s).test(e.data) ||
                          ((o = this._getOrReturnCtx(e, o)),
                          ye(o, {
                            code: ue.invalid_string,
                            validation: 'datetime',
                            message: s.message,
                          }),
                          n.dirty())
                        : s.kind === 'date'
                          ? Zz.test(e.data) ||
                            ((o = this._getOrReturnCtx(e, o)),
                            ye(o, {
                              code: ue.invalid_string,
                              validation: 'date',
                              message: s.message,
                            }),
                            n.dirty())
                          : s.kind === 'time'
                            ? Jz(s).test(e.data) ||
                              ((o = this._getOrReturnCtx(e, o)),
                              ye(o, {
                                code: ue.invalid_string,
                                validation: 'time',
                                message: s.message,
                              }),
                              n.dirty())
                            : s.kind === 'duration'
                              ? Wz.test(e.data) ||
                                ((o = this._getOrReturnCtx(e, o)),
                                ye(o, {
                                  validation: 'duration',
                                  code: ue.invalid_string,
                                  message: s.message,
                                }),
                                n.dirty())
                              : s.kind === 'ip'
                                ? Xz(e.data, s.version) ||
                                  ((o = this._getOrReturnCtx(e, o)),
                                  ye(o, {
                                    validation: 'ip',
                                    code: ue.invalid_string,
                                    message: s.message,
                                  }),
                                  n.dirty())
                                : s.kind === 'base64'
                                  ? Yz.test(e.data) ||
                                    ((o = this._getOrReturnCtx(e, o)),
                                    ye(o, {
                                      validation: 'base64',
                                      code: ue.invalid_string,
                                      message: s.message,
                                    }),
                                    n.dirty())
                                  : He.assertNever(s);
    return { status: n.value, value: e.data };
  }
  _regex(e, t, n) {
    return this.refinement((o) => e.test(o), {
      validation: t,
      code: ue.invalid_string,
      ...Re.errToObj(n),
    });
  }
  _addCheck(e) {
    return new r({ ...this._def, checks: [...this._def.checks, e] });
  }
  email(e) {
    return this._addCheck({ kind: 'email', ...Re.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: 'url', ...Re.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: 'emoji', ...Re.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: 'uuid', ...Re.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: 'nanoid', ...Re.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: 'cuid', ...Re.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: 'cuid2', ...Re.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: 'ulid', ...Re.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: 'base64', ...Re.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: 'ip', ...Re.errToObj(e) });
  }
  datetime(e) {
    var t, n;
    return typeof e == 'string'
      ? this._addCheck({ kind: 'datetime', precision: null, offset: !1, local: !1, message: e })
      : this._addCheck({
          kind: 'datetime',
          precision:
            typeof (e == null ? void 0 : e.precision) > 'u'
              ? null
              : e == null
                ? void 0
                : e.precision,
          offset: (t = e == null ? void 0 : e.offset) !== null && t !== void 0 ? t : !1,
          local: (n = e == null ? void 0 : e.local) !== null && n !== void 0 ? n : !1,
          ...Re.errToObj(e == null ? void 0 : e.message),
        });
  }
  date(e) {
    return this._addCheck({ kind: 'date', message: e });
  }
  time(e) {
    return typeof e == 'string'
      ? this._addCheck({ kind: 'time', precision: null, message: e })
      : this._addCheck({
          kind: 'time',
          precision:
            typeof (e == null ? void 0 : e.precision) > 'u'
              ? null
              : e == null
                ? void 0
                : e.precision,
          ...Re.errToObj(e == null ? void 0 : e.message),
        });
  }
  duration(e) {
    return this._addCheck({ kind: 'duration', ...Re.errToObj(e) });
  }
  regex(e, t) {
    return this._addCheck({ kind: 'regex', regex: e, ...Re.errToObj(t) });
  }
  includes(e, t) {
    return this._addCheck({
      kind: 'includes',
      value: e,
      position: t == null ? void 0 : t.position,
      ...Re.errToObj(t == null ? void 0 : t.message),
    });
  }
  startsWith(e, t) {
    return this._addCheck({ kind: 'startsWith', value: e, ...Re.errToObj(t) });
  }
  endsWith(e, t) {
    return this._addCheck({ kind: 'endsWith', value: e, ...Re.errToObj(t) });
  }
  min(e, t) {
    return this._addCheck({ kind: 'min', value: e, ...Re.errToObj(t) });
  }
  max(e, t) {
    return this._addCheck({ kind: 'max', value: e, ...Re.errToObj(t) });
  }
  length(e, t) {
    return this._addCheck({ kind: 'length', value: e, ...Re.errToObj(t) });
  }
  nonempty(e) {
    return this.min(1, Re.errToObj(e));
  }
  trim() {
    return new r({ ...this._def, checks: [...this._def.checks, { kind: 'trim' }] });
  }
  toLowerCase() {
    return new r({ ...this._def, checks: [...this._def.checks, { kind: 'toLowerCase' }] });
  }
  toUpperCase() {
    return new r({ ...this._def, checks: [...this._def.checks, { kind: 'toUpperCase' }] });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === 'datetime');
  }
  get isDate() {
    return !!this._def.checks.find((e) => e.kind === 'date');
  }
  get isTime() {
    return !!this._def.checks.find((e) => e.kind === 'time');
  }
  get isDuration() {
    return !!this._def.checks.find((e) => e.kind === 'duration');
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === 'email');
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === 'url');
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === 'emoji');
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === 'uuid');
  }
  get isNANOID() {
    return !!this._def.checks.find((e) => e.kind === 'nanoid');
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === 'cuid');
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === 'cuid2');
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === 'ulid');
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === 'ip');
  }
  get isBase64() {
    return !!this._def.checks.find((e) => e.kind === 'base64');
  }
  get minLength() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === 'min' && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === 'max' && (e === null || t.value < e) && (e = t.value);
    return e;
  }
};
no.create = (r) => {
  var e;
  return new no({
    checks: [],
    typeName: Te.ZodString,
    coerce: (e = r == null ? void 0 : r.coerce) !== null && e !== void 0 ? e : !1,
    ...Ce(r),
  });
};
function Qz(r, e) {
  let t = (r.toString().split('.')[1] || '').length,
    n = (e.toString().split('.')[1] || '').length,
    o = t > n ? t : n,
    s = parseInt(r.toFixed(o).replace('.', '')),
    i = parseInt(e.toFixed(o).replace('.', ''));
  return (s % i) / Math.pow(10, o);
}
var as = class r extends qe {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf);
  }
  _parse(e) {
    if ((this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== xe.number)) {
      let s = this._getOrReturnCtx(e);
      return ye(s, { code: ue.invalid_type, expected: xe.number, received: s.parsedType }), Be;
    }
    let n,
      o = new nr();
    for (let s of this._def.checks)
      s.kind === 'int'
        ? He.isInteger(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          ye(n, {
            code: ue.invalid_type,
            expected: 'integer',
            received: 'float',
            message: s.message,
          }),
          o.dirty())
        : s.kind === 'min'
          ? (s.inclusive ? e.data < s.value : e.data <= s.value) &&
            ((n = this._getOrReturnCtx(e, n)),
            ye(n, {
              code: ue.too_small,
              minimum: s.value,
              type: 'number',
              inclusive: s.inclusive,
              exact: !1,
              message: s.message,
            }),
            o.dirty())
          : s.kind === 'max'
            ? (s.inclusive ? e.data > s.value : e.data >= s.value) &&
              ((n = this._getOrReturnCtx(e, n)),
              ye(n, {
                code: ue.too_big,
                maximum: s.value,
                type: 'number',
                inclusive: s.inclusive,
                exact: !1,
                message: s.message,
              }),
              o.dirty())
            : s.kind === 'multipleOf'
              ? Qz(e.data, s.value) !== 0 &&
                ((n = this._getOrReturnCtx(e, n)),
                ye(n, { code: ue.not_multiple_of, multipleOf: s.value, message: s.message }),
                o.dirty())
              : s.kind === 'finite'
                ? Number.isFinite(e.data) ||
                  ((n = this._getOrReturnCtx(e, n)),
                  ye(n, { code: ue.not_finite, message: s.message }),
                  o.dirty())
                : He.assertNever(s);
    return { status: o.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit('min', e, !0, Re.toString(t));
  }
  gt(e, t) {
    return this.setLimit('min', e, !1, Re.toString(t));
  }
  lte(e, t) {
    return this.setLimit('max', e, !0, Re.toString(t));
  }
  lt(e, t) {
    return this.setLimit('max', e, !1, Re.toString(t));
  }
  setLimit(e, t, n, o) {
    return new r({
      ...this._def,
      checks: [...this._def.checks, { kind: e, value: t, inclusive: n, message: Re.toString(o) }],
    });
  }
  _addCheck(e) {
    return new r({ ...this._def, checks: [...this._def.checks, e] });
  }
  int(e) {
    return this._addCheck({ kind: 'int', message: Re.toString(e) });
  }
  positive(e) {
    return this._addCheck({ kind: 'min', value: 0, inclusive: !1, message: Re.toString(e) });
  }
  negative(e) {
    return this._addCheck({ kind: 'max', value: 0, inclusive: !1, message: Re.toString(e) });
  }
  nonpositive(e) {
    return this._addCheck({ kind: 'max', value: 0, inclusive: !0, message: Re.toString(e) });
  }
  nonnegative(e) {
    return this._addCheck({ kind: 'min', value: 0, inclusive: !0, message: Re.toString(e) });
  }
  multipleOf(e, t) {
    return this._addCheck({ kind: 'multipleOf', value: e, message: Re.toString(t) });
  }
  finite(e) {
    return this._addCheck({ kind: 'finite', message: Re.toString(e) });
  }
  safe(e) {
    return this._addCheck({
      kind: 'min',
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: Re.toString(e),
    })._addCheck({
      kind: 'max',
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: Re.toString(e),
    });
  }
  get minValue() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === 'min' && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === 'max' && (e === null || t.value < e) && (e = t.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find(
      (e) => e.kind === 'int' || (e.kind === 'multipleOf' && He.isInteger(e.value))
    );
  }
  get isFinite() {
    let e = null,
      t = null;
    for (let n of this._def.checks) {
      if (n.kind === 'finite' || n.kind === 'int' || n.kind === 'multipleOf') return !0;
      n.kind === 'min'
        ? (t === null || n.value > t) && (t = n.value)
        : n.kind === 'max' && (e === null || n.value < e) && (e = n.value);
    }
    return Number.isFinite(t) && Number.isFinite(e);
  }
};
as.create = (r) =>
  new as({
    checks: [],
    typeName: Te.ZodNumber,
    coerce: (r == null ? void 0 : r.coerce) || !1,
    ...Ce(r),
  });
var cs = class r extends qe {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte);
  }
  _parse(e) {
    if ((this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== xe.bigint)) {
      let s = this._getOrReturnCtx(e);
      return ye(s, { code: ue.invalid_type, expected: xe.bigint, received: s.parsedType }), Be;
    }
    let n,
      o = new nr();
    for (let s of this._def.checks)
      s.kind === 'min'
        ? (s.inclusive ? e.data < s.value : e.data <= s.value) &&
          ((n = this._getOrReturnCtx(e, n)),
          ye(n, {
            code: ue.too_small,
            type: 'bigint',
            minimum: s.value,
            inclusive: s.inclusive,
            message: s.message,
          }),
          o.dirty())
        : s.kind === 'max'
          ? (s.inclusive ? e.data > s.value : e.data >= s.value) &&
            ((n = this._getOrReturnCtx(e, n)),
            ye(n, {
              code: ue.too_big,
              type: 'bigint',
              maximum: s.value,
              inclusive: s.inclusive,
              message: s.message,
            }),
            o.dirty())
          : s.kind === 'multipleOf'
            ? e.data % s.value !== BigInt(0) &&
              ((n = this._getOrReturnCtx(e, n)),
              ye(n, { code: ue.not_multiple_of, multipleOf: s.value, message: s.message }),
              o.dirty())
            : He.assertNever(s);
    return { status: o.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit('min', e, !0, Re.toString(t));
  }
  gt(e, t) {
    return this.setLimit('min', e, !1, Re.toString(t));
  }
  lte(e, t) {
    return this.setLimit('max', e, !0, Re.toString(t));
  }
  lt(e, t) {
    return this.setLimit('max', e, !1, Re.toString(t));
  }
  setLimit(e, t, n, o) {
    return new r({
      ...this._def,
      checks: [...this._def.checks, { kind: e, value: t, inclusive: n, message: Re.toString(o) }],
    });
  }
  _addCheck(e) {
    return new r({ ...this._def, checks: [...this._def.checks, e] });
  }
  positive(e) {
    return this._addCheck({
      kind: 'min',
      value: BigInt(0),
      inclusive: !1,
      message: Re.toString(e),
    });
  }
  negative(e) {
    return this._addCheck({
      kind: 'max',
      value: BigInt(0),
      inclusive: !1,
      message: Re.toString(e),
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: 'max',
      value: BigInt(0),
      inclusive: !0,
      message: Re.toString(e),
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: 'min',
      value: BigInt(0),
      inclusive: !0,
      message: Re.toString(e),
    });
  }
  multipleOf(e, t) {
    return this._addCheck({ kind: 'multipleOf', value: e, message: Re.toString(t) });
  }
  get minValue() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === 'min' && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === 'max' && (e === null || t.value < e) && (e = t.value);
    return e;
  }
};
cs.create = (r) => {
  var e;
  return new cs({
    checks: [],
    typeName: Te.ZodBigInt,
    coerce: (e = r == null ? void 0 : r.coerce) !== null && e !== void 0 ? e : !1,
    ...Ce(r),
  });
};
var us = class extends qe {
  _parse(e) {
    if ((this._def.coerce && (e.data = !!e.data), this._getType(e) !== xe.boolean)) {
      let n = this._getOrReturnCtx(e);
      return ye(n, { code: ue.invalid_type, expected: xe.boolean, received: n.parsedType }), Be;
    }
    return hr(e.data);
  }
};
us.create = (r) =>
  new us({ typeName: Te.ZodBoolean, coerce: (r == null ? void 0 : r.coerce) || !1, ...Ce(r) });
var ps = class r extends qe {
  _parse(e) {
    if ((this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== xe.date)) {
      let s = this._getOrReturnCtx(e);
      return ye(s, { code: ue.invalid_type, expected: xe.date, received: s.parsedType }), Be;
    }
    if (isNaN(e.data.getTime())) {
      let s = this._getOrReturnCtx(e);
      return ye(s, { code: ue.invalid_date }), Be;
    }
    let n = new nr(),
      o;
    for (let s of this._def.checks)
      s.kind === 'min'
        ? e.data.getTime() < s.value &&
          ((o = this._getOrReturnCtx(e, o)),
          ye(o, {
            code: ue.too_small,
            message: s.message,
            inclusive: !0,
            exact: !1,
            minimum: s.value,
            type: 'date',
          }),
          n.dirty())
        : s.kind === 'max'
          ? e.data.getTime() > s.value &&
            ((o = this._getOrReturnCtx(e, o)),
            ye(o, {
              code: ue.too_big,
              message: s.message,
              inclusive: !0,
              exact: !1,
              maximum: s.value,
              type: 'date',
            }),
            n.dirty())
          : He.assertNever(s);
    return { status: n.value, value: new Date(e.data.getTime()) };
  }
  _addCheck(e) {
    return new r({ ...this._def, checks: [...this._def.checks, e] });
  }
  min(e, t) {
    return this._addCheck({ kind: 'min', value: e.getTime(), message: Re.toString(t) });
  }
  max(e, t) {
    return this._addCheck({ kind: 'max', value: e.getTime(), message: Re.toString(t) });
  }
  get minDate() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === 'min' && (e === null || t.value > e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === 'max' && (e === null || t.value < e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
};
ps.create = (r) =>
  new ps({
    checks: [],
    coerce: (r == null ? void 0 : r.coerce) || !1,
    typeName: Te.ZodDate,
    ...Ce(r),
  });
var ti = class extends qe {
  _parse(e) {
    if (this._getType(e) !== xe.symbol) {
      let n = this._getOrReturnCtx(e);
      return ye(n, { code: ue.invalid_type, expected: xe.symbol, received: n.parsedType }), Be;
    }
    return hr(e.data);
  }
};
ti.create = (r) => new ti({ typeName: Te.ZodSymbol, ...Ce(r) });
var fs = class extends qe {
  _parse(e) {
    if (this._getType(e) !== xe.undefined) {
      let n = this._getOrReturnCtx(e);
      return ye(n, { code: ue.invalid_type, expected: xe.undefined, received: n.parsedType }), Be;
    }
    return hr(e.data);
  }
};
fs.create = (r) => new fs({ typeName: Te.ZodUndefined, ...Ce(r) });
var ls = class extends qe {
  _parse(e) {
    if (this._getType(e) !== xe.null) {
      let n = this._getOrReturnCtx(e);
      return ye(n, { code: ue.invalid_type, expected: xe.null, received: n.parsedType }), Be;
    }
    return hr(e.data);
  }
};
ls.create = (r) => new ls({ typeName: Te.ZodNull, ...Ce(r) });
var oo = class extends qe {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(e) {
    return hr(e.data);
  }
};
oo.create = (r) => new oo({ typeName: Te.ZodAny, ...Ce(r) });
var Mn = class extends qe {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(e) {
    return hr(e.data);
  }
};
Mn.create = (r) => new Mn({ typeName: Te.ZodUnknown, ...Ce(r) });
var Vr = class extends qe {
  _parse(e) {
    let t = this._getOrReturnCtx(e);
    return ye(t, { code: ue.invalid_type, expected: xe.never, received: t.parsedType }), Be;
  }
};
Vr.create = (r) => new Vr({ typeName: Te.ZodNever, ...Ce(r) });
var ri = class extends qe {
  _parse(e) {
    if (this._getType(e) !== xe.undefined) {
      let n = this._getOrReturnCtx(e);
      return ye(n, { code: ue.invalid_type, expected: xe.void, received: n.parsedType }), Be;
    }
    return hr(e.data);
  }
};
ri.create = (r) => new ri({ typeName: Te.ZodVoid, ...Ce(r) });
var zn = class r extends qe {
  _parse(e) {
    let { ctx: t, status: n } = this._processInputParams(e),
      o = this._def;
    if (t.parsedType !== xe.array)
      return ye(t, { code: ue.invalid_type, expected: xe.array, received: t.parsedType }), Be;
    if (o.exactLength !== null) {
      let i = t.data.length > o.exactLength.value,
        c = t.data.length < o.exactLength.value;
      (i || c) &&
        (ye(t, {
          code: i ? ue.too_big : ue.too_small,
          minimum: c ? o.exactLength.value : void 0,
          maximum: i ? o.exactLength.value : void 0,
          type: 'array',
          inclusive: !0,
          exact: !0,
          message: o.exactLength.message,
        }),
        n.dirty());
    }
    if (
      (o.minLength !== null &&
        t.data.length < o.minLength.value &&
        (ye(t, {
          code: ue.too_small,
          minimum: o.minLength.value,
          type: 'array',
          inclusive: !0,
          exact: !1,
          message: o.minLength.message,
        }),
        n.dirty()),
      o.maxLength !== null &&
        t.data.length > o.maxLength.value &&
        (ye(t, {
          code: ue.too_big,
          maximum: o.maxLength.value,
          type: 'array',
          inclusive: !0,
          exact: !1,
          message: o.maxLength.message,
        }),
        n.dirty()),
      t.common.async)
    )
      return Promise.all(
        [...t.data].map((i, c) => o.type._parseAsync(new Cr(t, i, t.path, c)))
      ).then((i) => nr.mergeArray(n, i));
    let s = [...t.data].map((i, c) => o.type._parseSync(new Cr(t, i, t.path, c)));
    return nr.mergeArray(n, s);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new r({ ...this._def, minLength: { value: e, message: Re.toString(t) } });
  }
  max(e, t) {
    return new r({ ...this._def, maxLength: { value: e, message: Re.toString(t) } });
  }
  length(e, t) {
    return new r({ ...this._def, exactLength: { value: e, message: Re.toString(t) } });
  }
  nonempty(e) {
    return this.min(1, e);
  }
};
zn.create = (r, e) =>
  new zn({
    type: r,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: Te.ZodArray,
    ...Ce(e),
  });
function Xs(r) {
  if (r instanceof Sr) {
    let e = {};
    for (let t in r.shape) {
      let n = r.shape[t];
      e[t] = Or.create(Xs(n));
    }
    return new Sr({ ...r._def, shape: () => e });
  } else
    return r instanceof zn
      ? new zn({ ...r._def, type: Xs(r.element) })
      : r instanceof Or
        ? Or.create(Xs(r.unwrap()))
        : r instanceof fn
          ? fn.create(Xs(r.unwrap()))
          : r instanceof pn
            ? pn.create(r.items.map((e) => Xs(e)))
            : r;
}
var Sr = class r extends qe {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend);
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    let e = this._def.shape(),
      t = He.objectKeys(e);
    return (this._cached = { shape: e, keys: t });
  }
  _parse(e) {
    if (this._getType(e) !== xe.object) {
      let l = this._getOrReturnCtx(e);
      return ye(l, { code: ue.invalid_type, expected: xe.object, received: l.parsedType }), Be;
    }
    let { status: n, ctx: o } = this._processInputParams(e),
      { shape: s, keys: i } = this._getCached(),
      c = [];
    if (!(this._def.catchall instanceof Vr && this._def.unknownKeys === 'strip'))
      for (let l in o.data) i.includes(l) || c.push(l);
    let u = [];
    for (let l of i) {
      let w = s[l],
        x = o.data[l];
      u.push({
        key: { status: 'valid', value: l },
        value: w._parse(new Cr(o, x, o.path, l)),
        alwaysSet: l in o.data,
      });
    }
    if (this._def.catchall instanceof Vr) {
      let l = this._def.unknownKeys;
      if (l === 'passthrough')
        for (let w of c)
          u.push({
            key: { status: 'valid', value: w },
            value: { status: 'valid', value: o.data[w] },
          });
      else if (l === 'strict')
        c.length > 0 && (ye(o, { code: ue.unrecognized_keys, keys: c }), n.dirty());
      else if (l !== 'strip')
        throw new Error('Internal ZodObject error: invalid unknownKeys value.');
    } else {
      let l = this._def.catchall;
      for (let w of c) {
        let x = o.data[w];
        u.push({
          key: { status: 'valid', value: w },
          value: l._parse(new Cr(o, x, o.path, w)),
          alwaysSet: w in o.data,
        });
      }
    }
    return o.common.async
      ? Promise.resolve()
          .then(async () => {
            let l = [];
            for (let w of u) {
              let x = await w.key,
                A = await w.value;
              l.push({ key: x, value: A, alwaysSet: w.alwaysSet });
            }
            return l;
          })
          .then((l) => nr.mergeObjectSync(n, l))
      : nr.mergeObjectSync(n, u);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return (
      Re.errToObj,
      new r({
        ...this._def,
        unknownKeys: 'strict',
        ...(e !== void 0
          ? {
              errorMap: (t, n) => {
                var o, s, i, c;
                let u =
                  (i =
                    (s = (o = this._def).errorMap) === null || s === void 0
                      ? void 0
                      : s.call(o, t, n).message) !== null && i !== void 0
                    ? i
                    : n.defaultError;
                return t.code === 'unrecognized_keys'
                  ? { message: (c = Re.errToObj(e).message) !== null && c !== void 0 ? c : u }
                  : { message: u };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new r({ ...this._def, unknownKeys: 'strip' });
  }
  passthrough() {
    return new r({ ...this._def, unknownKeys: 'passthrough' });
  }
  extend(e) {
    return new r({ ...this._def, shape: () => ({ ...this._def.shape(), ...e }) });
  }
  merge(e) {
    return new r({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
      typeName: Te.ZodObject,
    });
  }
  setKey(e, t) {
    return this.augment({ [e]: t });
  }
  catchall(e) {
    return new r({ ...this._def, catchall: e });
  }
  pick(e) {
    let t = {};
    return (
      He.objectKeys(e).forEach((n) => {
        e[n] && this.shape[n] && (t[n] = this.shape[n]);
      }),
      new r({ ...this._def, shape: () => t })
    );
  }
  omit(e) {
    let t = {};
    return (
      He.objectKeys(this.shape).forEach((n) => {
        e[n] || (t[n] = this.shape[n]);
      }),
      new r({ ...this._def, shape: () => t })
    );
  }
  deepPartial() {
    return Xs(this);
  }
  partial(e) {
    let t = {};
    return (
      He.objectKeys(this.shape).forEach((n) => {
        let o = this.shape[n];
        e && !e[n] ? (t[n] = o) : (t[n] = o.optional());
      }),
      new r({ ...this._def, shape: () => t })
    );
  }
  required(e) {
    let t = {};
    return (
      He.objectKeys(this.shape).forEach((n) => {
        if (e && !e[n]) t[n] = this.shape[n];
        else {
          let s = this.shape[n];
          for (; s instanceof Or; ) s = s._def.innerType;
          t[n] = s;
        }
      }),
      new r({ ...this._def, shape: () => t })
    );
  }
  keyof() {
    return Hg(He.objectKeys(this.shape));
  }
};
Sr.create = (r, e) =>
  new Sr({
    shape: () => r,
    unknownKeys: 'strip',
    catchall: Vr.create(),
    typeName: Te.ZodObject,
    ...Ce(e),
  });
Sr.strictCreate = (r, e) =>
  new Sr({
    shape: () => r,
    unknownKeys: 'strict',
    catchall: Vr.create(),
    typeName: Te.ZodObject,
    ...Ce(e),
  });
Sr.lazycreate = (r, e) =>
  new Sr({
    shape: r,
    unknownKeys: 'strip',
    catchall: Vr.create(),
    typeName: Te.ZodObject,
    ...Ce(e),
  });
var ds = class extends qe {
  _parse(e) {
    let { ctx: t } = this._processInputParams(e),
      n = this._def.options;
    function o(s) {
      for (let c of s) if (c.result.status === 'valid') return c.result;
      for (let c of s)
        if (c.result.status === 'dirty')
          return t.common.issues.push(...c.ctx.common.issues), c.result;
      let i = s.map((c) => new Kt(c.ctx.common.issues));
      return ye(t, { code: ue.invalid_union, unionErrors: i }), Be;
    }
    if (t.common.async)
      return Promise.all(
        n.map(async (s) => {
          let i = { ...t, common: { ...t.common, issues: [] }, parent: null };
          return { result: await s._parseAsync({ data: t.data, path: t.path, parent: i }), ctx: i };
        })
      ).then(o);
    {
      let s,
        i = [];
      for (let u of n) {
        let l = { ...t, common: { ...t.common, issues: [] }, parent: null },
          w = u._parseSync({ data: t.data, path: t.path, parent: l });
        if (w.status === 'valid') return w;
        w.status === 'dirty' && !s && (s = { result: w, ctx: l }),
          l.common.issues.length && i.push(l.common.issues);
      }
      if (s) return t.common.issues.push(...s.ctx.common.issues), s.result;
      let c = i.map((u) => new Kt(u));
      return ye(t, { code: ue.invalid_union, unionErrors: c }), Be;
    }
  }
  get options() {
    return this._def.options;
  }
};
ds.create = (r, e) => new ds({ options: r, typeName: Te.ZodUnion, ...Ce(e) });
var Bn = (r) =>
    r instanceof ms
      ? Bn(r.schema)
      : r instanceof kr
        ? Bn(r.innerType())
        : r instanceof ys
          ? [r.value]
          : r instanceof gs
            ? r.options
            : r instanceof xs
              ? He.objectValues(r.enum)
              : r instanceof bs
                ? Bn(r._def.innerType)
                : r instanceof fs
                  ? [void 0]
                  : r instanceof ls
                    ? [null]
                    : r instanceof Or
                      ? [void 0, ...Bn(r.unwrap())]
                      : r instanceof fn
                        ? [null, ...Bn(r.unwrap())]
                        : r instanceof ga || r instanceof vs
                          ? Bn(r.unwrap())
                          : r instanceof ws
                            ? Bn(r._def.innerType)
                            : [],
  Fc = class r extends qe {
    _parse(e) {
      let { ctx: t } = this._processInputParams(e);
      if (t.parsedType !== xe.object)
        return ye(t, { code: ue.invalid_type, expected: xe.object, received: t.parsedType }), Be;
      let n = this.discriminator,
        o = t.data[n],
        s = this.optionsMap.get(o);
      return s
        ? t.common.async
          ? s._parseAsync({ data: t.data, path: t.path, parent: t })
          : s._parseSync({ data: t.data, path: t.path, parent: t })
        : (ye(t, {
            code: ue.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [n],
          }),
          Be);
    }
    get discriminator() {
      return this._def.discriminator;
    }
    get options() {
      return this._def.options;
    }
    get optionsMap() {
      return this._def.optionsMap;
    }
    static create(e, t, n) {
      let o = new Map();
      for (let s of t) {
        let i = Bn(s.shape[e]);
        if (!i.length)
          throw new Error(
            `A discriminator value for key \`${e}\` could not be extracted from all schema options`
          );
        for (let c of i) {
          if (o.has(c))
            throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(c)}`);
          o.set(c, s);
        }
      }
      return new r({
        typeName: Te.ZodDiscriminatedUnion,
        discriminator: e,
        options: t,
        optionsMap: o,
        ...Ce(n),
      });
    }
  };
function Cd(r, e) {
  let t = ro(r),
    n = ro(e);
  if (r === e) return { valid: !0, data: r };
  if (t === xe.object && n === xe.object) {
    let o = He.objectKeys(e),
      s = He.objectKeys(r).filter((c) => o.indexOf(c) !== -1),
      i = { ...r, ...e };
    for (let c of s) {
      let u = Cd(r[c], e[c]);
      if (!u.valid) return { valid: !1 };
      i[c] = u.data;
    }
    return { valid: !0, data: i };
  } else if (t === xe.array && n === xe.array) {
    if (r.length !== e.length) return { valid: !1 };
    let o = [];
    for (let s = 0; s < r.length; s++) {
      let i = r[s],
        c = e[s],
        u = Cd(i, c);
      if (!u.valid) return { valid: !1 };
      o.push(u.data);
    }
    return { valid: !0, data: o };
  } else return t === xe.date && n === xe.date && +r == +e ? { valid: !0, data: r } : { valid: !1 };
}
var hs = class extends qe {
  _parse(e) {
    let { status: t, ctx: n } = this._processInputParams(e),
      o = (s, i) => {
        if (Nd(s) || Nd(i)) return Be;
        let c = Cd(s.value, i.value);
        return c.valid
          ? ((Od(s) || Od(i)) && t.dirty(), { status: t.value, value: c.data })
          : (ye(n, { code: ue.invalid_intersection_types }), Be);
      };
    return n.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: n.data, path: n.path, parent: n }),
          this._def.right._parseAsync({ data: n.data, path: n.path, parent: n }),
        ]).then(([s, i]) => o(s, i))
      : o(
          this._def.left._parseSync({ data: n.data, path: n.path, parent: n }),
          this._def.right._parseSync({ data: n.data, path: n.path, parent: n })
        );
  }
};
hs.create = (r, e, t) => new hs({ left: r, right: e, typeName: Te.ZodIntersection, ...Ce(t) });
var pn = class r extends qe {
  _parse(e) {
    let { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== xe.array)
      return ye(n, { code: ue.invalid_type, expected: xe.array, received: n.parsedType }), Be;
    if (n.data.length < this._def.items.length)
      return (
        ye(n, {
          code: ue.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: 'array',
        }),
        Be
      );
    !this._def.rest &&
      n.data.length > this._def.items.length &&
      (ye(n, {
        code: ue.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: 'array',
      }),
      t.dirty());
    let s = [...n.data]
      .map((i, c) => {
        let u = this._def.items[c] || this._def.rest;
        return u ? u._parse(new Cr(n, i, n.path, c)) : null;
      })
      .filter((i) => !!i);
    return n.common.async ? Promise.all(s).then((i) => nr.mergeArray(t, i)) : nr.mergeArray(t, s);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new r({ ...this._def, rest: e });
  }
};
pn.create = (r, e) => {
  if (!Array.isArray(r)) throw new Error('You must pass an array of schemas to z.tuple([ ... ])');
  return new pn({ items: r, typeName: Te.ZodTuple, rest: null, ...Ce(e) });
};
var jc = class r extends qe {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(e) {
      let { status: t, ctx: n } = this._processInputParams(e);
      if (n.parsedType !== xe.object)
        return ye(n, { code: ue.invalid_type, expected: xe.object, received: n.parsedType }), Be;
      let o = [],
        s = this._def.keyType,
        i = this._def.valueType;
      for (let c in n.data)
        o.push({
          key: s._parse(new Cr(n, c, n.path, c)),
          value: i._parse(new Cr(n, n.data[c], n.path, c)),
          alwaysSet: c in n.data,
        });
      return n.common.async ? nr.mergeObjectAsync(t, o) : nr.mergeObjectSync(t, o);
    }
    get element() {
      return this._def.valueType;
    }
    static create(e, t, n) {
      return t instanceof qe
        ? new r({ keyType: e, valueType: t, typeName: Te.ZodRecord, ...Ce(n) })
        : new r({ keyType: no.create(), valueType: e, typeName: Te.ZodRecord, ...Ce(t) });
    }
  },
  ni = class extends qe {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(e) {
      let { status: t, ctx: n } = this._processInputParams(e);
      if (n.parsedType !== xe.map)
        return ye(n, { code: ue.invalid_type, expected: xe.map, received: n.parsedType }), Be;
      let o = this._def.keyType,
        s = this._def.valueType,
        i = [...n.data.entries()].map(([c, u], l) => ({
          key: o._parse(new Cr(n, c, n.path, [l, 'key'])),
          value: s._parse(new Cr(n, u, n.path, [l, 'value'])),
        }));
      if (n.common.async) {
        let c = new Map();
        return Promise.resolve().then(async () => {
          for (let u of i) {
            let l = await u.key,
              w = await u.value;
            if (l.status === 'aborted' || w.status === 'aborted') return Be;
            (l.status === 'dirty' || w.status === 'dirty') && t.dirty(), c.set(l.value, w.value);
          }
          return { status: t.value, value: c };
        });
      } else {
        let c = new Map();
        for (let u of i) {
          let l = u.key,
            w = u.value;
          if (l.status === 'aborted' || w.status === 'aborted') return Be;
          (l.status === 'dirty' || w.status === 'dirty') && t.dirty(), c.set(l.value, w.value);
        }
        return { status: t.value, value: c };
      }
    }
  };
ni.create = (r, e, t) => new ni({ valueType: e, keyType: r, typeName: Te.ZodMap, ...Ce(t) });
var oi = class r extends qe {
  _parse(e) {
    let { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== xe.set)
      return ye(n, { code: ue.invalid_type, expected: xe.set, received: n.parsedType }), Be;
    let o = this._def;
    o.minSize !== null &&
      n.data.size < o.minSize.value &&
      (ye(n, {
        code: ue.too_small,
        minimum: o.minSize.value,
        type: 'set',
        inclusive: !0,
        exact: !1,
        message: o.minSize.message,
      }),
      t.dirty()),
      o.maxSize !== null &&
        n.data.size > o.maxSize.value &&
        (ye(n, {
          code: ue.too_big,
          maximum: o.maxSize.value,
          type: 'set',
          inclusive: !0,
          exact: !1,
          message: o.maxSize.message,
        }),
        t.dirty());
    let s = this._def.valueType;
    function i(u) {
      let l = new Set();
      for (let w of u) {
        if (w.status === 'aborted') return Be;
        w.status === 'dirty' && t.dirty(), l.add(w.value);
      }
      return { status: t.value, value: l };
    }
    let c = [...n.data.values()].map((u, l) => s._parse(new Cr(n, u, n.path, l)));
    return n.common.async ? Promise.all(c).then((u) => i(u)) : i(c);
  }
  min(e, t) {
    return new r({ ...this._def, minSize: { value: e, message: Re.toString(t) } });
  }
  max(e, t) {
    return new r({ ...this._def, maxSize: { value: e, message: Re.toString(t) } });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
};
oi.create = (r, e) =>
  new oi({ valueType: r, minSize: null, maxSize: null, typeName: Te.ZodSet, ...Ce(e) });
var Hc = class r extends qe {
    constructor() {
      super(...arguments), (this.validate = this.implement);
    }
    _parse(e) {
      let { ctx: t } = this._processInputParams(e);
      if (t.parsedType !== xe.function)
        return ye(t, { code: ue.invalid_type, expected: xe.function, received: t.parsedType }), Be;
      function n(c, u) {
        return Dc({
          data: c,
          path: t.path,
          errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, qc(), ei].filter((l) => !!l),
          issueData: { code: ue.invalid_arguments, argumentsError: u },
        });
      }
      function o(c, u) {
        return Dc({
          data: c,
          path: t.path,
          errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, qc(), ei].filter((l) => !!l),
          issueData: { code: ue.invalid_return_type, returnTypeError: u },
        });
      }
      let s = { errorMap: t.common.contextualErrorMap },
        i = t.data;
      if (this._def.returns instanceof so) {
        let c = this;
        return hr(async function (...u) {
          let l = new Kt([]),
            w = await c._def.args.parseAsync(u, s).catch((_) => {
              throw (l.addIssue(n(u, _)), l);
            }),
            x = await Reflect.apply(i, this, w);
          return await c._def.returns._def.type.parseAsync(x, s).catch((_) => {
            throw (l.addIssue(o(x, _)), l);
          });
        });
      } else {
        let c = this;
        return hr(function (...u) {
          let l = c._def.args.safeParse(u, s);
          if (!l.success) throw new Kt([n(u, l.error)]);
          let w = Reflect.apply(i, this, l.data),
            x = c._def.returns.safeParse(w, s);
          if (!x.success) throw new Kt([o(w, x.error)]);
          return x.data;
        });
      }
    }
    parameters() {
      return this._def.args;
    }
    returnType() {
      return this._def.returns;
    }
    args(...e) {
      return new r({ ...this._def, args: pn.create(e).rest(Mn.create()) });
    }
    returns(e) {
      return new r({ ...this._def, returns: e });
    }
    implement(e) {
      return this.parse(e);
    }
    strictImplement(e) {
      return this.parse(e);
    }
    static create(e, t, n) {
      return new r({
        args: e || pn.create([]).rest(Mn.create()),
        returns: t || Mn.create(),
        typeName: Te.ZodFunction,
        ...Ce(n),
      });
    }
  },
  ms = class extends qe {
    get schema() {
      return this._def.getter();
    }
    _parse(e) {
      let { ctx: t } = this._processInputParams(e);
      return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
    }
  };
ms.create = (r, e) => new ms({ getter: r, typeName: Te.ZodLazy, ...Ce(e) });
var ys = class extends qe {
  _parse(e) {
    if (e.data !== this._def.value) {
      let t = this._getOrReturnCtx(e);
      return ye(t, { received: t.data, code: ue.invalid_literal, expected: this._def.value }), Be;
    }
    return { status: 'valid', value: e.data };
  }
  get value() {
    return this._def.value;
  }
};
ys.create = (r, e) => new ys({ value: r, typeName: Te.ZodLiteral, ...Ce(e) });
function Hg(r, e) {
  return new gs({ values: r, typeName: Te.ZodEnum, ...Ce(e) });
}
var gs = class r extends qe {
  constructor() {
    super(...arguments), da.set(this, void 0);
  }
  _parse(e) {
    if (typeof e.data != 'string') {
      let t = this._getOrReturnCtx(e),
        n = this._def.values;
      return (
        ye(t, { expected: He.joinValues(n), received: t.parsedType, code: ue.invalid_type }), Be
      );
    }
    if (
      (Uc(this, da, 'f') || Dg(this, da, new Set(this._def.values), 'f'),
      !Uc(this, da, 'f').has(e.data))
    ) {
      let t = this._getOrReturnCtx(e),
        n = this._def.values;
      return ye(t, { received: t.data, code: ue.invalid_enum_value, options: n }), Be;
    }
    return hr(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    let e = {};
    for (let t of this._def.values) e[t] = t;
    return e;
  }
  get Values() {
    let e = {};
    for (let t of this._def.values) e[t] = t;
    return e;
  }
  get Enum() {
    let e = {};
    for (let t of this._def.values) e[t] = t;
    return e;
  }
  extract(e, t = this._def) {
    return r.create(e, { ...this._def, ...t });
  }
  exclude(e, t = this._def) {
    return r.create(
      this.options.filter((n) => !e.includes(n)),
      { ...this._def, ...t }
    );
  }
};
da = new WeakMap();
gs.create = Hg;
var xs = class extends qe {
  constructor() {
    super(...arguments), ha.set(this, void 0);
  }
  _parse(e) {
    let t = He.getValidEnumValues(this._def.values),
      n = this._getOrReturnCtx(e);
    if (n.parsedType !== xe.string && n.parsedType !== xe.number) {
      let o = He.objectValues(t);
      return (
        ye(n, { expected: He.joinValues(o), received: n.parsedType, code: ue.invalid_type }), Be
      );
    }
    if (
      (Uc(this, ha, 'f') || Dg(this, ha, new Set(He.getValidEnumValues(this._def.values)), 'f'),
      !Uc(this, ha, 'f').has(e.data))
    ) {
      let o = He.objectValues(t);
      return ye(n, { received: n.data, code: ue.invalid_enum_value, options: o }), Be;
    }
    return hr(e.data);
  }
  get enum() {
    return this._def.values;
  }
};
ha = new WeakMap();
xs.create = (r, e) => new xs({ values: r, typeName: Te.ZodNativeEnum, ...Ce(e) });
var so = class extends qe {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    let { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== xe.promise && t.common.async === !1)
      return ye(t, { code: ue.invalid_type, expected: xe.promise, received: t.parsedType }), Be;
    let n = t.parsedType === xe.promise ? t.data : Promise.resolve(t.data);
    return hr(
      n.then((o) =>
        this._def.type.parseAsync(o, { path: t.path, errorMap: t.common.contextualErrorMap })
      )
    );
  }
};
so.create = (r, e) => new so({ type: r, typeName: Te.ZodPromise, ...Ce(e) });
var kr = class extends qe {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Te.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(e) {
    let { status: t, ctx: n } = this._processInputParams(e),
      o = this._def.effect || null,
      s = {
        addIssue: (i) => {
          ye(n, i), i.fatal ? t.abort() : t.dirty();
        },
        get path() {
          return n.path;
        },
      };
    if (((s.addIssue = s.addIssue.bind(s)), o.type === 'preprocess')) {
      let i = o.transform(n.data, s);
      if (n.common.async)
        return Promise.resolve(i).then(async (c) => {
          if (t.value === 'aborted') return Be;
          let u = await this._def.schema._parseAsync({ data: c, path: n.path, parent: n });
          return u.status === 'aborted'
            ? Be
            : u.status === 'dirty' || t.value === 'dirty'
              ? Qs(u.value)
              : u;
        });
      {
        if (t.value === 'aborted') return Be;
        let c = this._def.schema._parseSync({ data: i, path: n.path, parent: n });
        return c.status === 'aborted'
          ? Be
          : c.status === 'dirty' || t.value === 'dirty'
            ? Qs(c.value)
            : c;
      }
    }
    if (o.type === 'refinement') {
      let i = (c) => {
        let u = o.refinement(c, s);
        if (n.common.async) return Promise.resolve(u);
        if (u instanceof Promise)
          throw new Error(
            'Async refinement encountered during synchronous parse operation. Use .parseAsync instead.'
          );
        return c;
      };
      if (n.common.async === !1) {
        let c = this._def.schema._parseSync({ data: n.data, path: n.path, parent: n });
        return c.status === 'aborted'
          ? Be
          : (c.status === 'dirty' && t.dirty(), i(c.value), { status: t.value, value: c.value });
      } else
        return this._def.schema
          ._parseAsync({ data: n.data, path: n.path, parent: n })
          .then((c) =>
            c.status === 'aborted'
              ? Be
              : (c.status === 'dirty' && t.dirty(),
                i(c.value).then(() => ({ status: t.value, value: c.value })))
          );
    }
    if (o.type === 'transform')
      if (n.common.async === !1) {
        let i = this._def.schema._parseSync({ data: n.data, path: n.path, parent: n });
        if (!ma(i)) return i;
        let c = o.transform(i.value, s);
        if (c instanceof Promise)
          throw new Error(
            'Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.'
          );
        return { status: t.value, value: c };
      } else
        return this._def.schema
          ._parseAsync({ data: n.data, path: n.path, parent: n })
          .then((i) =>
            ma(i)
              ? Promise.resolve(o.transform(i.value, s)).then((c) => ({
                  status: t.value,
                  value: c,
                }))
              : i
          );
    He.assertNever(o);
  }
};
kr.create = (r, e, t) => new kr({ schema: r, typeName: Te.ZodEffects, effect: e, ...Ce(t) });
kr.createWithPreprocess = (r, e, t) =>
  new kr({
    schema: e,
    effect: { type: 'preprocess', transform: r },
    typeName: Te.ZodEffects,
    ...Ce(t),
  });
var Or = class extends qe {
  _parse(e) {
    return this._getType(e) === xe.undefined ? hr(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
};
Or.create = (r, e) => new Or({ innerType: r, typeName: Te.ZodOptional, ...Ce(e) });
var fn = class extends qe {
  _parse(e) {
    return this._getType(e) === xe.null ? hr(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
};
fn.create = (r, e) => new fn({ innerType: r, typeName: Te.ZodNullable, ...Ce(e) });
var bs = class extends qe {
  _parse(e) {
    let { ctx: t } = this._processInputParams(e),
      n = t.data;
    return (
      t.parsedType === xe.undefined && (n = this._def.defaultValue()),
      this._def.innerType._parse({ data: n, path: t.path, parent: t })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
};
bs.create = (r, e) =>
  new bs({
    innerType: r,
    typeName: Te.ZodDefault,
    defaultValue: typeof e.default == 'function' ? e.default : () => e.default,
    ...Ce(e),
  });
var ws = class extends qe {
  _parse(e) {
    let { ctx: t } = this._processInputParams(e),
      n = { ...t, common: { ...t.common, issues: [] } },
      o = this._def.innerType._parse({ data: n.data, path: n.path, parent: { ...n } });
    return ya(o)
      ? o.then((s) => ({
          status: 'valid',
          value:
            s.status === 'valid'
              ? s.value
              : this._def.catchValue({
                  get error() {
                    return new Kt(n.common.issues);
                  },
                  input: n.data,
                }),
        }))
      : {
          status: 'valid',
          value:
            o.status === 'valid'
              ? o.value
              : this._def.catchValue({
                  get error() {
                    return new Kt(n.common.issues);
                  },
                  input: n.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ws.create = (r, e) =>
  new ws({
    innerType: r,
    typeName: Te.ZodCatch,
    catchValue: typeof e.catch == 'function' ? e.catch : () => e.catch,
    ...Ce(e),
  });
var si = class extends qe {
  _parse(e) {
    if (this._getType(e) !== xe.nan) {
      let n = this._getOrReturnCtx(e);
      return ye(n, { code: ue.invalid_type, expected: xe.nan, received: n.parsedType }), Be;
    }
    return { status: 'valid', value: e.data };
  }
};
si.create = (r) => new si({ typeName: Te.ZodNaN, ...Ce(r) });
var eL = Symbol('zod_brand'),
  ga = class extends qe {
    _parse(e) {
      let { ctx: t } = this._processInputParams(e),
        n = t.data;
      return this._def.type._parse({ data: n, path: t.path, parent: t });
    }
    unwrap() {
      return this._def.type;
    }
  },
  xa = class r extends qe {
    _parse(e) {
      let { status: t, ctx: n } = this._processInputParams(e);
      if (n.common.async)
        return (async () => {
          let s = await this._def.in._parseAsync({ data: n.data, path: n.path, parent: n });
          return s.status === 'aborted'
            ? Be
            : s.status === 'dirty'
              ? (t.dirty(), Qs(s.value))
              : this._def.out._parseAsync({ data: s.value, path: n.path, parent: n });
        })();
      {
        let o = this._def.in._parseSync({ data: n.data, path: n.path, parent: n });
        return o.status === 'aborted'
          ? Be
          : o.status === 'dirty'
            ? (t.dirty(), { status: 'dirty', value: o.value })
            : this._def.out._parseSync({ data: o.value, path: n.path, parent: n });
      }
    }
    static create(e, t) {
      return new r({ in: e, out: t, typeName: Te.ZodPipeline });
    }
  },
  vs = class extends qe {
    _parse(e) {
      let t = this._def.innerType._parse(e),
        n = (o) => (ma(o) && (o.value = Object.freeze(o.value)), o);
      return ya(t) ? t.then((o) => n(o)) : n(t);
    }
    unwrap() {
      return this._def.innerType;
    }
  };
vs.create = (r, e) => new vs({ innerType: r, typeName: Te.ZodReadonly, ...Ce(e) });
function Wg(r, e = {}, t) {
  return r
    ? oo.create().superRefine((n, o) => {
        var s, i;
        if (!r(n)) {
          let c = typeof e == 'function' ? e(n) : typeof e == 'string' ? { message: e } : e,
            u =
              (i = (s = c.fatal) !== null && s !== void 0 ? s : t) !== null && i !== void 0
                ? i
                : !0,
            l = typeof c == 'string' ? { message: c } : c;
          o.addIssue({ code: 'custom', ...l, fatal: u });
        }
      })
    : oo.create();
}
var tL = { object: Sr.lazycreate },
  Te;
(function (r) {
  (r.ZodString = 'ZodString'),
    (r.ZodNumber = 'ZodNumber'),
    (r.ZodNaN = 'ZodNaN'),
    (r.ZodBigInt = 'ZodBigInt'),
    (r.ZodBoolean = 'ZodBoolean'),
    (r.ZodDate = 'ZodDate'),
    (r.ZodSymbol = 'ZodSymbol'),
    (r.ZodUndefined = 'ZodUndefined'),
    (r.ZodNull = 'ZodNull'),
    (r.ZodAny = 'ZodAny'),
    (r.ZodUnknown = 'ZodUnknown'),
    (r.ZodNever = 'ZodNever'),
    (r.ZodVoid = 'ZodVoid'),
    (r.ZodArray = 'ZodArray'),
    (r.ZodObject = 'ZodObject'),
    (r.ZodUnion = 'ZodUnion'),
    (r.ZodDiscriminatedUnion = 'ZodDiscriminatedUnion'),
    (r.ZodIntersection = 'ZodIntersection'),
    (r.ZodTuple = 'ZodTuple'),
    (r.ZodRecord = 'ZodRecord'),
    (r.ZodMap = 'ZodMap'),
    (r.ZodSet = 'ZodSet'),
    (r.ZodFunction = 'ZodFunction'),
    (r.ZodLazy = 'ZodLazy'),
    (r.ZodLiteral = 'ZodLiteral'),
    (r.ZodEnum = 'ZodEnum'),
    (r.ZodEffects = 'ZodEffects'),
    (r.ZodNativeEnum = 'ZodNativeEnum'),
    (r.ZodOptional = 'ZodOptional'),
    (r.ZodNullable = 'ZodNullable'),
    (r.ZodDefault = 'ZodDefault'),
    (r.ZodCatch = 'ZodCatch'),
    (r.ZodPromise = 'ZodPromise'),
    (r.ZodBranded = 'ZodBranded'),
    (r.ZodPipeline = 'ZodPipeline'),
    (r.ZodReadonly = 'ZodReadonly');
})(Te || (Te = {}));
var rL = (r, e = { message: `Input not instance of ${r.name}` }) => Wg((t) => t instanceof r, e),
  Kg = no.create,
  Vg = as.create,
  nL = si.create,
  oL = cs.create,
  $g = us.create,
  sL = ps.create,
  iL = ti.create,
  aL = fs.create,
  cL = ls.create,
  uL = oo.create,
  pL = Mn.create,
  fL = Vr.create,
  lL = ri.create,
  dL = zn.create,
  hL = Sr.create,
  mL = Sr.strictCreate,
  yL = ds.create,
  gL = Fc.create,
  xL = hs.create,
  bL = pn.create,
  wL = jc.create,
  vL = ni.create,
  SL = oi.create,
  EL = Hc.create,
  _L = ms.create,
  AL = ys.create,
  RL = gs.create,
  IL = xs.create,
  kL = so.create,
  Cg = kr.create,
  TL = Or.create,
  PL = fn.create,
  BL = kr.createWithPreprocess,
  ML = xa.create,
  zL = () => Kg().optional(),
  LL = () => Vg().optional(),
  NL = () => $g().optional(),
  OL = {
    string: (r) => no.create({ ...r, coerce: !0 }),
    number: (r) => as.create({ ...r, coerce: !0 }),
    boolean: (r) => us.create({ ...r, coerce: !0 }),
    bigint: (r) => cs.create({ ...r, coerce: !0 }),
    date: (r) => ps.create({ ...r, coerce: !0 }),
  },
  CL = Be,
  a = Object.freeze({
    __proto__: null,
    defaultErrorMap: ei,
    setErrorMap: Cz,
    getErrorMap: qc,
    makeIssue: Dc,
    EMPTY_PATH: qz,
    addIssueToContext: ye,
    ParseStatus: nr,
    INVALID: Be,
    DIRTY: Qs,
    OK: hr,
    isAborted: Nd,
    isDirty: Od,
    isValid: ma,
    isAsync: ya,
    get util() {
      return He;
    },
    get objectUtil() {
      return Ld;
    },
    ZodParsedType: xe,
    getParsedType: ro,
    ZodType: qe,
    datetimeRegex: jg,
    ZodString: no,
    ZodNumber: as,
    ZodBigInt: cs,
    ZodBoolean: us,
    ZodDate: ps,
    ZodSymbol: ti,
    ZodUndefined: fs,
    ZodNull: ls,
    ZodAny: oo,
    ZodUnknown: Mn,
    ZodNever: Vr,
    ZodVoid: ri,
    ZodArray: zn,
    ZodObject: Sr,
    ZodUnion: ds,
    ZodDiscriminatedUnion: Fc,
    ZodIntersection: hs,
    ZodTuple: pn,
    ZodRecord: jc,
    ZodMap: ni,
    ZodSet: oi,
    ZodFunction: Hc,
    ZodLazy: ms,
    ZodLiteral: ys,
    ZodEnum: gs,
    ZodNativeEnum: xs,
    ZodPromise: so,
    ZodEffects: kr,
    ZodTransformer: kr,
    ZodOptional: Or,
    ZodNullable: fn,
    ZodDefault: bs,
    ZodCatch: ws,
    ZodNaN: si,
    BRAND: eL,
    ZodBranded: ga,
    ZodPipeline: xa,
    ZodReadonly: vs,
    custom: Wg,
    Schema: qe,
    ZodSchema: qe,
    late: tL,
    get ZodFirstPartyTypeKind() {
      return Te;
    },
    coerce: OL,
    any: uL,
    array: dL,
    bigint: oL,
    boolean: $g,
    date: sL,
    discriminatedUnion: gL,
    effect: Cg,
    enum: RL,
    function: EL,
    instanceof: rL,
    intersection: xL,
    lazy: _L,
    literal: AL,
    map: vL,
    nan: nL,
    nativeEnum: IL,
    never: fL,
    null: cL,
    nullable: PL,
    number: Vg,
    object: hL,
    oboolean: NL,
    onumber: LL,
    optional: TL,
    ostring: zL,
    pipeline: ML,
    preprocess: BL,
    promise: kL,
    record: wL,
    set: SL,
    strictObject: mL,
    string: Kg,
    symbol: iL,
    transformer: Cg,
    tuple: bL,
    undefined: aL,
    union: yL,
    unknown: pL,
    void: lL,
    NEVER: CL,
    ZodIssueCode: ue,
    quotelessJson: Oz,
    ZodError: Kt,
  });
f();
var qr = a.object({ blinkUrl: a.string().url(), blinkTitle: a.string().optional() });
f();
var xx = _e(ss());
f();
f();
f();
f();
var Gg = 'logger/5.7.0';
var Yg = !1,
  Zg = !1,
  Wc = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 },
  Jg = Wc.default,
  qd = null;
function qL() {
  try {
    let r = [];
    if (
      (['NFD', 'NFC', 'NFKD', 'NFKC'].forEach((e) => {
        try {
          if ('test'.normalize(e) !== 'test') throw new Error('bad normalize');
        } catch {
          r.push(e);
        }
      }),
      r.length)
    )
      throw new Error('missing ' + r.join(', '));
    if ('\xE9'.normalize('NFD') !== 'e\u0301') throw new Error('broken implementation');
  } catch (r) {
    return r.message;
  }
  return null;
}
var Xg = qL(),
  Dd;
(function (r) {
  (r.DEBUG = 'DEBUG'),
    (r.INFO = 'INFO'),
    (r.WARNING = 'WARNING'),
    (r.ERROR = 'ERROR'),
    (r.OFF = 'OFF');
})(Dd || (Dd = {}));
var $r;
(function (r) {
  (r.UNKNOWN_ERROR = 'UNKNOWN_ERROR'),
    (r.NOT_IMPLEMENTED = 'NOT_IMPLEMENTED'),
    (r.UNSUPPORTED_OPERATION = 'UNSUPPORTED_OPERATION'),
    (r.NETWORK_ERROR = 'NETWORK_ERROR'),
    (r.SERVER_ERROR = 'SERVER_ERROR'),
    (r.TIMEOUT = 'TIMEOUT'),
    (r.BUFFER_OVERRUN = 'BUFFER_OVERRUN'),
    (r.NUMERIC_FAULT = 'NUMERIC_FAULT'),
    (r.MISSING_NEW = 'MISSING_NEW'),
    (r.INVALID_ARGUMENT = 'INVALID_ARGUMENT'),
    (r.MISSING_ARGUMENT = 'MISSING_ARGUMENT'),
    (r.UNEXPECTED_ARGUMENT = 'UNEXPECTED_ARGUMENT'),
    (r.CALL_EXCEPTION = 'CALL_EXCEPTION'),
    (r.INSUFFICIENT_FUNDS = 'INSUFFICIENT_FUNDS'),
    (r.NONCE_EXPIRED = 'NONCE_EXPIRED'),
    (r.REPLACEMENT_UNDERPRICED = 'REPLACEMENT_UNDERPRICED'),
    (r.UNPREDICTABLE_GAS_LIMIT = 'UNPREDICTABLE_GAS_LIMIT'),
    (r.TRANSACTION_REPLACED = 'TRANSACTION_REPLACED'),
    (r.ACTION_REJECTED = 'ACTION_REJECTED');
})($r || ($r = {}));
var Qg = '0123456789abcdef',
  ln = class r {
    constructor(e) {
      Object.defineProperty(this, 'version', { enumerable: !0, value: e, writable: !1 });
    }
    _log(e, t) {
      let n = e.toLowerCase();
      Wc[n] == null && this.throwArgumentError('invalid log level name', 'logLevel', e),
        !(Jg > Wc[n]) && console.log.apply(console, t);
    }
    debug(...e) {
      this._log(r.levels.DEBUG, e);
    }
    info(...e) {
      this._log(r.levels.INFO, e);
    }
    warn(...e) {
      this._log(r.levels.WARNING, e);
    }
    makeError(e, t, n) {
      if (Zg) return this.makeError('censored error', t, {});
      t || (t = r.errors.UNKNOWN_ERROR), n || (n = {});
      let o = [];
      Object.keys(n).forEach((u) => {
        let l = n[u];
        try {
          if (l instanceof Uint8Array) {
            let w = '';
            for (let x = 0; x < l.length; x++) (w += Qg[l[x] >> 4]), (w += Qg[l[x] & 15]);
            o.push(u + '=Uint8Array(0x' + w + ')');
          } else o.push(u + '=' + JSON.stringify(l));
        } catch {
          o.push(u + '=' + JSON.stringify(n[u].toString()));
        }
      }),
        o.push(`code=${t}`),
        o.push(`version=${this.version}`);
      let s = e,
        i = '';
      switch (t) {
        case $r.NUMERIC_FAULT: {
          i = 'NUMERIC_FAULT';
          let u = e;
          switch (u) {
            case 'overflow':
            case 'underflow':
            case 'division-by-zero':
              i += '-' + u;
              break;
            case 'negative-power':
            case 'negative-width':
              i += '-unsupported';
              break;
            case 'unbound-bitwise-result':
              i += '-unbound-result';
              break;
          }
          break;
        }
        case $r.CALL_EXCEPTION:
        case $r.INSUFFICIENT_FUNDS:
        case $r.MISSING_NEW:
        case $r.NONCE_EXPIRED:
        case $r.REPLACEMENT_UNDERPRICED:
        case $r.TRANSACTION_REPLACED:
        case $r.UNPREDICTABLE_GAS_LIMIT:
          i = t;
          break;
      }
      i && (e += ' [ See: https://links.ethers.org/v5-errors-' + i + ' ]'),
        o.length && (e += ' (' + o.join(', ') + ')');
      let c = new Error(e);
      return (
        (c.reason = s),
        (c.code = t),
        Object.keys(n).forEach(function (u) {
          c[u] = n[u];
        }),
        c
      );
    }
    throwError(e, t, n) {
      throw this.makeError(e, t, n);
    }
    throwArgumentError(e, t, n) {
      return this.throwError(e, r.errors.INVALID_ARGUMENT, { argument: t, value: n });
    }
    assert(e, t, n, o) {
      e || this.throwError(t, n, o);
    }
    assertArgument(e, t, n, o) {
      e || this.throwArgumentError(t, n, o);
    }
    checkNormalize(e) {
      e == null && (e = 'platform missing String.prototype.normalize'),
        Xg &&
          this.throwError(
            'platform missing String.prototype.normalize',
            r.errors.UNSUPPORTED_OPERATION,
            { operation: 'String.prototype.normalize', form: Xg }
          );
    }
    checkSafeUint53(e, t) {
      typeof e == 'number' &&
        (t == null && (t = 'value not safe'),
        (e < 0 || e >= 9007199254740991) &&
          this.throwError(t, r.errors.NUMERIC_FAULT, {
            operation: 'checkSafeInteger',
            fault: 'out-of-safe-range',
            value: e,
          }),
        e % 1 &&
          this.throwError(t, r.errors.NUMERIC_FAULT, {
            operation: 'checkSafeInteger',
            fault: 'non-integer',
            value: e,
          }));
    }
    checkArgumentCount(e, t, n) {
      n ? (n = ': ' + n) : (n = ''),
        e < t &&
          this.throwError('missing argument' + n, r.errors.MISSING_ARGUMENT, {
            count: e,
            expectedCount: t,
          }),
        e > t &&
          this.throwError('too many arguments' + n, r.errors.UNEXPECTED_ARGUMENT, {
            count: e,
            expectedCount: t,
          });
    }
    checkNew(e, t) {
      (e === Object || e == null) &&
        this.throwError('missing new', r.errors.MISSING_NEW, { name: t.name });
    }
    checkAbstract(e, t) {
      e === t
        ? this.throwError(
            'cannot instantiate abstract class ' +
              JSON.stringify(t.name) +
              ' directly; use a sub-class',
            r.errors.UNSUPPORTED_OPERATION,
            { name: e.name, operation: 'new' }
          )
        : (e === Object || e == null) &&
          this.throwError('missing new', r.errors.MISSING_NEW, { name: t.name });
    }
    static globalLogger() {
      return qd || (qd = new r(Gg)), qd;
    }
    static setCensorship(e, t) {
      if (
        (!e &&
          t &&
          this.globalLogger().throwError(
            'cannot permanently disable censorship',
            r.errors.UNSUPPORTED_OPERATION,
            { operation: 'setCensorship' }
          ),
        Yg)
      ) {
        if (!e) return;
        this.globalLogger().throwError(
          'error censorship permanent',
          r.errors.UNSUPPORTED_OPERATION,
          { operation: 'setCensorship' }
        );
      }
      (Zg = !!e), (Yg = !!t);
    }
    static setLogLevel(e) {
      let t = Wc[e.toLowerCase()];
      if (t == null) {
        r.globalLogger().warn('invalid log level - ' + e);
        return;
      }
      Jg = t;
    }
    static from(e) {
      return new r(e);
    }
  };
ln.errors = $r;
ln.levels = Dd;
f();
var ex = 'bytes/5.7.0';
var Ud = new ln(ex);
function DL(r) {
  return !!r.toHexString;
}
function Kc(r) {
  return (
    r.slice ||
      (r.slice = function () {
        let e = Array.prototype.slice.call(arguments);
        return Kc(new Uint8Array(Array.prototype.slice.apply(r, e)));
      }),
    r
  );
}
function tx(r) {
  return typeof r == 'number' && r == r && r % 1 === 0;
}
function UL(r) {
  if (r == null) return !1;
  if (r.constructor === Uint8Array) return !0;
  if (typeof r == 'string' || !tx(r.length) || r.length < 0) return !1;
  for (let e = 0; e < r.length; e++) {
    let t = r[e];
    if (!tx(t) || t < 0 || t >= 256) return !1;
  }
  return !0;
}
function Vc(r, e) {
  if ((e || (e = {}), typeof r == 'number')) {
    Ud.checkSafeUint53(r, 'invalid arrayify value');
    let t = [];
    for (; r; ) t.unshift(r & 255), (r = parseInt(String(r / 256)));
    return t.length === 0 && t.push(0), Kc(new Uint8Array(t));
  }
  if (
    (e.allowMissingPrefix && typeof r == 'string' && r.substring(0, 2) !== '0x' && (r = '0x' + r),
    DL(r) && (r = r.toHexString()),
    Fd(r))
  ) {
    let t = r.substring(2);
    t.length % 2 &&
      (e.hexPad === 'left'
        ? (t = '0' + t)
        : e.hexPad === 'right'
          ? (t += '0')
          : Ud.throwArgumentError('hex data is odd-length', 'value', r));
    let n = [];
    for (let o = 0; o < t.length; o += 2) n.push(parseInt(t.substring(o, o + 2), 16));
    return Kc(new Uint8Array(n));
  }
  return UL(r)
    ? Kc(new Uint8Array(r))
    : Ud.throwArgumentError('invalid arrayify value', 'value', r);
}
function Fd(r, e) {
  return !(typeof r != 'string' || !r.match(/^0x[0-9A-Fa-f]*$/) || (e && r.length !== 2 + 2 * e));
}
f();
f();
var sx = _e($c());
f();
var ox = 'bignumber/5.7.0';
var FL = sx.default.BN,
  FV = new ln(ox);
function Hd(r) {
  return new FL(r, 36).toString(16);
}
f();
var ax = _e(ix());
function cx(r) {
  return '0x' + ax.default.keccak_256(Vc(r));
}
f();
var ux = 'address/5.7.0';
var ba = new ln(ux);
function px(r) {
  Fd(r, 20) || ba.throwArgumentError('invalid address', 'address', r), (r = r.toLowerCase());
  let e = r.substring(2).split(''),
    t = new Uint8Array(40);
  for (let o = 0; o < 40; o++) t[o] = e[o].charCodeAt(0);
  let n = Vc(cx(t));
  for (let o = 0; o < 40; o += 2)
    n[o >> 1] >> 4 >= 8 && (e[o] = e[o].toUpperCase()),
      (n[o >> 1] & 15) >= 8 && (e[o + 1] = e[o + 1].toUpperCase());
  return '0x' + e.join('');
}
var HL = 9007199254740991;
function WL(r) {
  return Math.log10 ? Math.log10(r) : Math.log(r) / Math.LN10;
}
var Wd = {};
for (let r = 0; r < 10; r++) Wd[String(r)] = String(r);
for (let r = 0; r < 26; r++) Wd[String.fromCharCode(65 + r)] = String(10 + r);
var fx = Math.floor(WL(HL));
function KL(r) {
  (r = r.toUpperCase()), (r = r.substring(4) + r.substring(0, 2) + '00');
  let e = r
    .split('')
    .map((n) => Wd[n])
    .join('');
  for (; e.length >= fx; ) {
    let n = e.substring(0, fx);
    e = (parseInt(n, 10) % 97) + e.substring(n.length);
  }
  let t = String(98 - (parseInt(e, 10) % 97));
  for (; t.length < 2; ) t = '0' + t;
  return t;
}
function VL(r) {
  let e = null;
  if (
    (typeof r != 'string' && ba.throwArgumentError('invalid address', 'address', r),
    r.match(/^(0x)?[0-9a-fA-F]{40}$/))
  )
    r.substring(0, 2) !== '0x' && (r = '0x' + r),
      (e = px(r)),
      r.match(/([A-F].*[a-f])|([a-f].*[A-F])/) &&
        e !== r &&
        ba.throwArgumentError('bad address checksum', 'address', r);
  else if (r.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    for (
      r.substring(2, 4) !== KL(r) && ba.throwArgumentError('bad icap checksum', 'address', r),
        e = Hd(r.substring(4));
      e.length < 40;

    )
      e = '0' + e;
    e = px('0x' + e);
  } else ba.throwArgumentError('invalid address', 'address', r);
  return e;
}
function Kd(r) {
  try {
    return VL(r), !0;
  } catch {}
  return !1;
}
var $d = _e(io());
var Je = a
    .string()
    .min(2, { message: 'Must be 2 or more characters long' })
    .regex(/^0x[0-9A-Fa-f]*$/, {
      message: "String must be '0x'-prefixed and followed by valid hex characters",
    }),
  J = a
    .number()
    .transform((r) => `0x${r.toString(16)}`)
    .or(
      Je.min(3, {
        message:
          "Must be 3 or more characters long (should always have at least one digit - zero is '0x0').",
      })
    )
    .refine((r) => (r === '0x0' ? !0 : r[2] !== '0'), {
      message: 'Invalid hex quantity: leading zero digits are not allowed.',
    }),
  De = Je.refine((r) => r.length % 2 === 0, {
    message: 'Invalid hex-encoded data: must be even number of digits',
  }),
  ao = a.string().transform((r) => {
    let e = De.safeParse(r);
    return e.success ? e.data : `0x${xx.Buffer.from(r).toString('hex')}`;
  }),
  Gd = a.union([a.string(), a.number()]).transform((r, e) => {
    if (typeof r == 'number') return r;
    let t = r.startsWith('0x') ? 16 : 10,
      n = parseInt(r, t);
    return (
      Number.isNaN(n) &&
        e.addIssue({ code: a.ZodIssueCode.custom, message: 'Could not parse as LenientInteger' }),
      n
    );
  }),
  Yd = (r) =>
    De.refine((e) => e.length === r * 2 + 2, {
      message: `Invalid byte length. (Expected ${r} bytes)`,
    }),
  Ee = Je.refine(Kd, { message: 'Invalid Ethereum address.' }),
  Ae = Yd(32),
  Zd = Yd(256),
  hn = a.object({
    blockHash: Ae,
    address: Ee,
    logIndex: J,
    data: De,
    removed: a.boolean().optional(),
    topics: a.array(Ae),
    blockNumber: J.nullish().default(null),
    transactionIndex: J,
    transactionHash: Ae,
  }),
  wa = a.object({
    transactionHash: Ae,
    transactionIndex: J,
    blockHash: Ae,
    blockNumber: J,
    from: Ee,
    to: Ee.nullish().default(null).optional(),
    root: Ae.optional(),
    status: a.literal('0x1').or(a.literal('0x0')).optional(),
    cumulativeGasUsed: J,
    gasUsed: J,
    contractAddress: Ee.nullish().default(null),
    logs: a.array(hn),
    logsBloom: Zd,
    effectiveGasPrice: J.optional(),
    type: J.optional(),
  }),
  va = a.object({
    from: Ee.optional(),
    chainId: J.optional(),
    to: Ee.optional(),
    gas: J.optional(),
    gasPrice: J.optional(),
    value: J.optional(),
    data: De.optional(),
    nonce: J.optional(),
  }),
  Ln = a.object({ name: a.string(), type: a.string() }),
  Jc = a.array(Ln),
  bx = a.object({
    chainId: Gd.optional(),
    name: a.string(),
    verifyingContract: Ee,
    version: a.string().optional(),
  }),
  Jd = a.object({ type: a.string(), name: a.string(), value: a.string() }).array(),
  Xc = a.object({
    domain: bx,
    message: a.record(a.any()),
    primaryType: a.string(),
    types: a.object({ EIP712Domain: Jc }).and(a.record(Ln.array())),
  }),
  Xd = a.object({
    chainId: Gd.optional(),
    name: a.string().optional(),
    verifyingContract: Ee.optional(),
    version: a.string().optional(),
    salt: a.string().optional(),
  }),
  Qc = a.object({
    domain: Xd,
    message: a.record(a.any()),
    primaryType: a.string(),
    types: a.object({ EIP712Domain: Jc }).and(a.record(Ln.array())),
  }),
  wx = a.object({ name: a.literal('owner'), type: a.literal('address') }),
  vx = a.object({ name: a.literal('spender'), type: a.literal('address') }),
  Sx = a.object({ name: a.literal('value'), type: a.literal('uint256') }),
  Ex = a.object({ name: a.literal('value'), type: a.literal('uint256') }),
  _x = a.object({ name: a.literal('deadline'), type: a.literal('uint256') }),
  Ax = a
    .tuple([Ln, Ln, Ln, Ln, Ln])
    .refine((r) => {
      let e = [wx, vx, Sx, Ex, _x],
        t = new Set(['owner', 'spender', 'value', 'nonce', 'deadline']);
      for (let n of r)
        for (let o of e) {
          let s = o.safeParse(n);
          s.success && t.delete(s.data.name);
        }
      return t.size === 0;
    })
    .transform(() => [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'nonce', type: 'uint256' },
      { name: 'deadline', type: 'uint256' },
    ]),
  Rx = a.literal('Permit'),
  Ix = a.object({ EIP712Domain: Jc, Permit: Ax }),
  kx = a.object({ owner: Ee, spender: Ee, value: J, nonce: J, deadline: J }),
  ZL = a.object({ domain: Xd, primaryType: Rx, types: Ix, message: kx }),
  Qd = ((n) => ((n.legacy = '0x0'), (n.eip2930 = '0x1'), (n.eip1559 = '0x2'), n))(Qd || {}),
  Tx = a.tuple([Ee, a.array(Ae)]),
  Nn = a
    .object({
      chainId: J.optional(),
      data: De.optional(),
      from: Ee,
      gas: J.optional(),
      gasPrice: J.optional(),
      nonce: J.optional(),
      to: Ee.optional(),
      value: J.optional(),
      type: a.nativeEnum(Qd).optional(),
      accessList: a.array(Tx).optional(),
      maxPriorityFeePerGas: J.optional(),
      maxFeePerGas: J.optional(),
      gasLimit: J.optional(),
    })
    .transform(
      (r) => (r.gas == null && r.gasLimit != null && ((r.gas = r.gasLimit), delete r.gasLimit), r)
    )
    .brand('EthUnsignedTransactionObject'),
  mn = a.object({
    blockHash: Ae.nullish(),
    blockNumber: J.nullish(),
    from: Ee,
    gas: J,
    gasPrice: J.nullish(),
    hash: Ae,
    input: De,
    nonce: J,
    to: Ee.nullish().default(null),
    transactionIndex: J.nullish(),
    value: J,
    v: J,
    r: J,
    s: J,
  }),
  eh = a.object({
    address: Ee.optional(),
    balance: J,
    codeHash: Ae,
    nonce: J,
    storageHash: Ae,
    accountProof: a.array(Je),
    storageProof: a.array(a.object({ key: J, value: J, proof: a.array(Je) })),
  }),
  tt = a
    .literal('latest')
    .or(a.literal('earliest'))
    .or(a.literal('pending'))
    .or(a.literal('finalized')),
  On = a.object({
    number: J.nullish().default(null),
    hash: Ae.nullish().default(null),
    parentHash: Ae,
    nonce: Yd(8).nullish().default(null),
    sha3Uncles: Ae,
    logsBloom: Zd.nullish().default(null),
    transactionsRoot: Ae,
    stateRoot: Ae,
    receiptsRoot: Ae,
    miner: Ee.nullish().default(null),
    mixHash: Ae.optional(),
    difficulty: J,
    totalDifficulty: J.nullish().default(null),
    extraData: De,
    size: J,
    gasLimit: J,
    gasUsed: J,
    timestamp: J,
    transactions: a.array(mn).or(a.array(Ae)),
    uncles: a.array(Ae),
    baseFeePerGas: J.optional(),
  }),
  Sa = a.enum([
    'CONTINUE_WITH_PHANTOM',
    'CONTINUE_WITH_METAMASK',
    'ALWAYS_USE_PHANTOM',
    'ALWAYS_USE_METAMASK',
  ]),
  Ea = a.string().refine(
    (r) => {
      try {
        return (
          $d.default.decode(r).byteLength === 32 &&
          r.match(/^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+$/)
        );
      } catch {
        return !1;
      }
    },
    { message: 'String must be a valid solana public key of 32 bytes' }
  ),
  Px = a.union([
    a.literal('bip122_p2tr'),
    a.literal('bip122_p2wpkh'),
    a.literal('bip122_p2sh'),
    a.literal('bip122_p2pkh'),
  ]),
  Bx = a.object({ address: a.string(), publicKey: a.string(), addressType: Px }),
  Es = Bx.and(a.object({ purpose: a.union([a.literal('payment'), a.literal('ordinals')]) })),
  Mx = a.string().refine((r) => XL(r), { message: 'Invalid Sui address format' }),
  JL = /^0x[a-fA-F0-9]{64}$/;
function XL(r) {
  return r ? JL.test(r) : !1;
}
var _s = a.object({ address: Mx, publicKey: a.string() }),
  QL = Je.refine(Kd, { message: 'Invalid Hypercore address.' }),
  e3 = a.string().refine(
    (r) => {
      try {
        return $d.default.decode(r).byteLength === 64;
      } catch {
        return !1;
      }
    },
    { message: 'String must be a valid solana address of 64 bytes' }
  ),
  me = a.string().regex(/^[123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ]*$/),
  Ie = a.object({ url: a.string().url(), icon: a.string().nullish().default(null) }),
  zx = a.array(a.any()),
  eu = a
    .unknown()
    .transform((r, e) =>
      typeof r == 'object' && r !== null
        ? r
        : (e.addIssue({ code: a.ZodIssueCode.custom, message: 'Not an object' }), a.NEVER)
    ),
  ii = a.union([a.null(), a.string(), a.number(), a.boolean(), zx, eu]),
  _a = a.literal('2.0'),
  ai = a.union([a.string(), a.number(), a.null()]),
  tu = a.object({ jsonrpc: a.literal('2.0'), id: ai, method: a.string(), params: ii.optional() }),
  th = a.array(tu),
  yn = a.object({ jsonrpc: a.literal('2.0'), method: a.string(), params: ii }),
  co = ((j) => (
    (j[(j.ParseError = -32700)] = 'ParseError'),
    (j[(j.InternalError = -32603)] = 'InternalError'),
    (j[(j.InvalidParams = -32602)] = 'InvalidParams'),
    (j[(j.MethodNotFound = -32601)] = 'MethodNotFound'),
    (j[(j.InvalidRequest = -32600)] = 'InvalidRequest'),
    (j[(j.RequestCancelled = -32800)] = 'RequestCancelled'),
    (j[(j.TransactionRejected = -32003)] = 'TransactionRejected'),
    (j[(j.ResourceUnavailable = -32002)] = 'ResourceUnavailable'),
    (j[(j.InvalidInput = -32e3)] = 'InvalidInput'),
    (j[(j.UserRejectedRequest = 4001)] = 'UserRejectedRequest'),
    (j[(j.Unauthorized = 4100)] = 'Unauthorized'),
    (j[(j.UnsupportedMethod = 4200)] = 'UnsupportedMethod'),
    (j[(j.RateLimited = 4290)] = 'RateLimited'),
    (j[(j.Disconnected = 4900)] = 'Disconnected'),
    (j[(j.ChainDisconnected = 4901)] = 'ChainDisconnected'),
    (j[(j.ExecutionReverted = 3)] = 'ExecutionReverted'),
    j
  ))(co || {});
var z = a.object({ code: a.nativeEnum(co).or(a.number()), message: a.string() }),
  Lx = a.object({ error: z }).or(a.object({ result: ii })),
  ru = a.object({ jsonrpc: a.literal('2.0'), id: ai }).and(Lx),
  rh = a.array(ru),
  As = a.object({
    domain: a.string().optional(),
    address: a.string().optional(),
    statement: a.string().optional(),
    uri: a.string().optional(),
    version: a.string().optional(),
    chainId: a.string().optional(),
    nonce: a.string().optional(),
    issuedAt: a.string().optional(),
    expirationTime: a.string().optional(),
    notBefore: a.string().optional(),
    requestId: a.string().optional(),
    resources: a.array(a.string()).optional(),
  }),
  Nx = a.literal('mainnet'),
  Ox = a.literal('testnet'),
  t3 = a.literal('devnet'),
  r3 = a.literal('localnet'),
  Cx = a.enum([Nx.value, Ox.value, t3.value, r3.value]),
  n3 = a.literal('1'),
  o3 = a.literal('11155111'),
  qx = a.enum([n3.value, o3.value]),
  s3 = a.literal('0x1'),
  i3 = a.literal('0xaa36a7'),
  Dx = a.enum([s3.value, i3.value]),
  a3 = a.literal('137'),
  c3 = a.literal('80002'),
  Ux = a.enum([a3.value, c3.value]),
  u3 = a.literal('0x89'),
  p3 = a.literal('0x13882'),
  Fx = a.enum([u3.value, p3.value]),
  f3 = a.literal('8453'),
  l3 = a.literal('84532'),
  jx = a.enum([f3.value, l3.value]),
  d3 = a.literal('0x2105'),
  h3 = a.literal('0x14a34'),
  Hx = a.enum([d3.value, h3.value]),
  m3 = a.literal('143'),
  y3 = a.literal('10143'),
  g3 = a.literal('41454'),
  Wx = a.enum([m3.value, y3.value, g3.value]),
  x3 = a.literal('0x8f'),
  b3 = a.literal('0x279f'),
  w3 = a.literal('0xa1ee'),
  Kx = a.enum([x3.value, b3.value, w3.value]),
  v3 = a.literal('mainnet-beta'),
  S3 = a.literal('testnet'),
  E3 = a.literal('devnet'),
  Aa = me,
  nu = me,
  ci = me,
  nh = me,
  Ra = me,
  ou = a.string().url(),
  Ia = a.string().url(),
  su = a.enum([v3.value, S3.value, E3.value]),
  Dr = a.object({ dapp_encryption_public_key: Aa, nonce: ci, redirect_link: Ia, payload: nh }),
  gn = a.object({ nonce: ci, data: Ra }),
  _3 = a.object({
    name: a.string(),
    label: a.string().optional(),
    required: a.boolean().optional(),
  }),
  A3 = a.object({ message: a.string() }),
  Vx = a.object({ href: a.string(), label: a.string(), parameters: a.array(_3).optional() }),
  $x = a.object({ label: a.string(), url: a.string() }),
  ui = a.object({
    successMessage: a.string().optional(),
    failureMessage: a.string().optional(),
    pendingMessage: a.string().optional(),
    onSuccessAction: $x.optional(),
  }),
  oh = a.object({
    domain: a.string(),
    name: a.string(),
    category: a.string(),
    actionUrl: a.string(),
    icon: a.string(),
    title: a.string(),
    description: a.string(),
    label: a.string(),
    disabled: a.boolean().optional(),
    links: a.object({ actions: a.array(Vx) }).optional(),
    error: A3.optional(),
    postAction: ui.optional(),
  });
f();
function L(r, e) {
  return a.object({ jsonrpc: _a, id: ai, method: r, params: e });
}
function N(r, e) {
  return a.object({ jsonrpc: _a, id: ai }).and(a.object({ result: r }).or(a.object({ error: e })));
}
function Tr(r, e) {
  return a.object({ jsonrpc: _a, method: r, params: e });
}
var Gx = a.literal('eth_blink_requestAccounts'),
  Yx = a.object({ context: qr }),
  Zx = a.array(Ee),
  Jx = z,
  R3 = L(Gx, Yx),
  I3 = N(Zx, Jx);
var ih = {};
$(ih, {
  error: () => tb,
  method: () => Xx,
  params: () => Qx,
  request: () => k3,
  response: () => T3,
  result: () => eb,
});
f();
var Xx = a.literal('eth_blink_sendTransaction'),
  Qx = a.tuple([Nn, a.object({ context: qr })]),
  eb = Ae,
  tb = z,
  k3 = L(Xx, Qx),
  T3 = N(eb, tb);
var ah = {};
$(ah, {
  error: () => sb,
  method: () => rb,
  params: () => nb,
  request: () => P3,
  response: () => B3,
  result: () => ob,
});
f();
var rb = a.literal('eth_blink_sign'),
  nb = a.tuple([Ee, ao, a.object({ context: qr })]),
  ob = De,
  sb = z,
  P3 = L(rb, nb),
  B3 = N(ob, sb);
f();
var ch = {};
$(ch, {
  error: () => lb,
  method: () => ub,
  params: () => pb,
  request: () => N3,
  response: () => O3,
  result: () => fb,
});
f();
var ka = {};
$(ka, {
  error: () => cb,
  method: () => ib,
  params: () => ab,
  request: () => z3,
  response: () => L3,
  result: () => iu,
});
f();
var ib = a.literal('sol_connect'),
  ab = a.object({ onlyIfTrusted: a.optional(a.boolean()) }),
  iu = a.object({ publicKey: a.string() }),
  cb = z,
  z3 = L(ib, ab),
  L3 = N(iu, cb);
var ub = a.literal('sol_blink_connect'),
  pb = a.object({ context: qr }),
  fb = iu,
  lb = z,
  N3 = L(ub, pb),
  O3 = N(fb, lb);
var ph = {};
$(ph, {
  error: () => xb,
  method: () => mb,
  params: () => yb,
  request: () => D3,
  response: () => U3,
  result: () => gb,
});
f();
var Ta = {};
$(Ta, {
  error: () => hb,
  method: () => db,
  params: () => cu,
  request: () => C3,
  response: () => q3,
  result: () => uu,
});
f();
var au = {};
$(au, { SolanaProviderEvent: () => uh, SolanaSendOptions: () => Cn });
f();
var Cn = a.optional(
    a.object({
      skipPreflight: a.optional(a.boolean()),
      preflightCommitment: a.optional(
        a.union([
          a.literal('processed'),
          a.literal('confirmed'),
          a.literal('finalized'),
          a.literal('recent'),
          a.literal('single'),
          a.literal('singleGossip'),
          a.literal('root'),
          a.literal('max'),
        ])
      ),
      maxRetries: a.optional(a.number()),
      minContextSlot: a.optional(a.number()),
      method: a.optional(
        a.union([a.literal('signAndSendTransaction'), a.literal('signTransaction')])
      ),
    })
  ),
  uh = ((n) => (
    (n.Connect = 'connect'), (n.Disconnect = 'disconnect'), (n.AccountChanged = 'accountChanged'), n
  ))(uh || {}),
  J$ = a.nativeEnum(uh);
var db = a.literal('sol_signAndSendAllTransactions'),
  cu = a.object({ transactions: a.array(me), options: Cn }),
  uu = a.object({ signatures: a.array(a.union([a.string(), a.null()])), publicKey: a.string() }),
  hb = z,
  C3 = L(db, cu),
  q3 = N(uu, hb);
var mb = a.literal('sol_blink_signAndSendAllTransactions'),
  yb = cu.merge(a.object({ context: qr })),
  gb = uu,
  xb = z,
  D3 = L(mb, yb),
  U3 = N(gb, xb);
var fh = {};
$(fh, {
  error: () => Ab,
  method: () => Sb,
  params: () => Eb,
  request: () => H3,
  response: () => W3,
  result: () => _b,
});
f();
var Pa = {};
$(Pa, {
  error: () => vb,
  method: () => bb,
  params: () => pu,
  request: () => F3,
  response: () => j3,
  result: () => wb,
});
f();
var bb = a.literal('sol_signMessage'),
  pu = a.object({ message: me, display: a.union([a.literal('utf8'), a.literal('hex')]) }),
  wb = a.object({ signature: a.string(), publicKey: a.string() }),
  vb = z,
  F3 = L(bb, pu),
  j3 = N(wb, vb);
var Sb = a.literal('sol_blink_signMessage'),
  Eb = pu.merge(a.object({ context: qr })),
  _b = a.object({ signature: a.string(), publicKey: a.string() }),
  Ab = z,
  H3 = L(Sb, Eb),
  W3 = N(_b, Ab);
f();
var lh = {};
$(lh, {
  error: () => Tb,
  method: () => Rb,
  params: () => Ib,
  request: () => V3,
  response: () => $3,
  result: () => kb,
});
f();
var Rb = a.literal('btc_requestAccounts'),
  Ib = a.tuple([]),
  kb = a.array(Es),
  Tb = z,
  V3 = L(Rb, Ib),
  $3 = N(kb, Tb);
var dh = {};
$(dh, {
  error: () => zb,
  method: () => Pb,
  params: () => Bb,
  request: () => G3,
  response: () => Y3,
  result: () => Mb,
});
f();
var Pb = a.literal('btc_signPSBT'),
  Bb = a.tuple([
    a.instanceof(Uint8Array),
    a.object({
      inputsToSign: a.array(
        a.object({
          address: a.string(),
          signingIndexes: a.array(a.number()),
          sigHash: a.number().optional(),
        })
      ),
      finalize: a.boolean(),
    }),
  ]),
  Mb = a.instanceof(Uint8Array),
  zb = z,
  G3 = L(Pb, Bb),
  Y3 = N(Mb, zb);
var hh = {};
$(hh, {
  error: () => Cb,
  method: () => Lb,
  params: () => Nb,
  request: () => Z3,
  response: () => J3,
  result: () => Ob,
});
f();
var Lb = a.literal('btc_signMessage'),
  Nb = a.object({ address: a.string(), message: a.instanceof(Uint8Array) }),
  Ob = a.object({ signature: a.instanceof(Uint8Array), signedMessage: a.instanceof(Uint8Array) }),
  Cb = z,
  Z3 = L(Lb, Nb),
  J3 = N(Ob, Cb);
var pi = {};
$(pi, {
  eth_accounts: () => fu,
  eth_blockNumber: () => lu,
  eth_call: () => du,
  eth_cancelPrivateTransaction: () => hu,
  eth_chainId: () => mu,
  eth_estimateGas: () => yu,
  eth_feeHistory: () => gu,
  eth_gasPrice: () => xu,
  eth_getBalance: () => bu,
  eth_getBlockByHash: () => wu,
  eth_getBlockByNumber: () => vu,
  eth_getBlockReceipts: () => Su,
  eth_getBlockTransactionCountByHash: () => Eu,
  eth_getBlockTransactionCountByNumber: () => _u,
  eth_getCode: () => Au,
  eth_getFilterChanges: () => Ru,
  eth_getFilterLogs: () => Iu,
  eth_getLogs: () => ku,
  eth_getProof: () => Tu,
  eth_getStorageAt: () => Pu,
  eth_getTransactionByBlockHashAndIndex: () => Bu,
  eth_getTransactionByBlockNumberAndIndex: () => Mu,
  eth_getTransactionByHash: () => zu,
  eth_getTransactionCount: () => Lu,
  eth_getTransactionReceipt: () => Nu,
  eth_getUncleByBlockHashAndIndex: () => Ou,
  eth_getUncleByBlockNumberAndIndex: () => Cu,
  eth_getUncleCountByBlockHash: () => qu,
  eth_getUncleCountByBlockNumber: () => Du,
  eth_maxPriorityFeePerGas: () => Uu,
  eth_newBlockFilter: () => Fu,
  eth_newFilter: () => ju,
  eth_newPendingTransactionFilter: () => Hu,
  eth_protocolVersion: () => Ku,
  eth_requestAccounts: () => Vu,
  eth_sendPrivateTransaction: () => $u,
  eth_sendRawTransaction: () => Gu,
  eth_sendTransaction: () => Yu,
  eth_sign: () => Zu,
  eth_signTransaction: () => Ju,
  eth_signTypedData: () => Xu,
  eth_signTypedData_v3: () => Qu,
  eth_signTypedData_v4: () => ep,
  eth_subscribe: () => tp,
  eth_syncing: () => rp,
  eth_uninstallFilter: () => np,
  eth_unsubscribe: () => op,
  net_listening: () => sp,
  net_version: () => ip,
  personal_sign: () => Wu,
  wallet_addEthereumChain: () => ap,
  wallet_getPermissions: () => hp,
  wallet_requestPermissions: () => dp,
  wallet_selectEthereumProvider: () => cp,
  wallet_switchEthereumChain: () => up,
  wallet_watchAsset: () => pp,
  web3_clientVersion: () => fp,
  web3_sha3: () => lp,
});
f();
var fu = {};
$(fu, {
  error: () => jb,
  method: () => Db,
  params: () => Ub,
  request: () => X3,
  response: () => Q3,
  result: () => Fb,
});
f();
var Db = a.literal('eth_accounts'),
  Ub = a.tuple([]),
  Fb = a.array(Ee),
  jb = z,
  X3 = L(Db, Ub),
  Q3 = N(Fb, jb);
var lu = {};
$(lu, {
  error: () => Vb,
  method: () => Hb,
  params: () => Wb,
  request: () => eN,
  response: () => tN,
  result: () => Kb,
});
f();
var Hb = a.literal('eth_blockNumber'),
  Wb = a.tuple([]),
  Kb = J,
  Vb = z,
  eN = L(Hb, Wb),
  tN = N(Kb, Vb);
var du = {};
$(du, {
  error: () => Zb,
  method: () => $b,
  params: () => Gb,
  request: () => rN,
  response: () => nN,
  result: () => Yb,
});
f();
var $b = a.literal('eth_call'),
  Gb = a.tuple([va, J.or(tt)]),
  Yb = De,
  Zb = z,
  rN = L($b, Gb),
  nN = N(Yb, Zb);
var hu = {};
$(hu, {
  error: () => ew,
  method: () => Jb,
  params: () => Xb,
  request: () => oN,
  response: () => sN,
  result: () => Qb,
});
f();
var Jb = a.literal('eth_cancelPrivateTransaction'),
  Xb = a.tuple([a.object({ txHash: Ae })]),
  Qb = a.boolean(),
  ew = z,
  oN = L(Jb, Xb),
  sN = N(Qb, ew);
var mu = {};
$(mu, {
  error: () => ow,
  method: () => tw,
  params: () => rw,
  request: () => iN,
  response: () => aN,
  result: () => nw,
});
f();
var tw = a.literal('eth_chainId'),
  rw = a.tuple([]),
  nw = Je,
  ow = z,
  iN = L(tw, rw),
  aN = N(nw, ow);
var yu = {};
$(yu, {
  error: () => cw,
  method: () => sw,
  params: () => iw,
  request: () => cN,
  response: () => uN,
  result: () => aw,
});
f();
var sw = a.literal('eth_estimateGas'),
  iw = a.tuple([va]),
  aw = J,
  cw = z,
  cN = L(sw, iw),
  uN = N(aw, cw);
var gu = {};
$(gu, {
  error: () => lw,
  method: () => uw,
  params: () => pw,
  request: () => pN,
  response: () => fN,
  result: () => fw,
});
f();
var uw = a.literal('eth_feeHistory'),
  pw = a.tuple([a.number(), J.or(tt), a.array(a.number()).optional()]),
  fw = a.object({
    oldestBlock: a.number(),
    reward: a.array(a.tuple([J, J])).optional(),
    baseFeePerGas: a.array(J),
    gasUsedRatio: a.array(a.number()),
  }),
  lw = z,
  pN = L(uw, pw),
  fN = N(fw, lw);
var xu = {};
$(xu, {
  error: () => yw,
  method: () => dw,
  params: () => hw,
  request: () => lN,
  response: () => dN,
  result: () => mw,
});
f();
var dw = a.literal('eth_gasPrice'),
  hw = a.tuple([]),
  mw = J,
  yw = z,
  lN = L(dw, hw),
  dN = N(mw, yw);
var bu = {};
$(bu, {
  error: () => ww,
  method: () => gw,
  params: () => xw,
  request: () => hN,
  response: () => mN,
  result: () => bw,
});
f();
var gw = a.literal('eth_getBalance'),
  xw = a.tuple([Ee, J.or(tt)]),
  bw = J,
  ww = z,
  hN = L(gw, xw),
  mN = N(bw, ww);
var wu = {};
$(wu, {
  error: () => _w,
  method: () => vw,
  params: () => Sw,
  request: () => yN,
  response: () => gN,
  result: () => Ew,
});
f();
var vw = a.literal('eth_getBlockByHash'),
  Sw = a.tuple([Ae, a.boolean()]),
  Ew = On,
  _w = z,
  yN = L(vw, Sw),
  gN = N(Ew, _w);
var vu = {};
$(vu, {
  error: () => kw,
  method: () => Aw,
  params: () => Rw,
  request: () => xN,
  response: () => bN,
  result: () => Iw,
});
f();
var Aw = a.literal('eth_getBlockByNumber'),
  Rw = a.tuple([J.or(tt), a.boolean()]),
  Iw = On,
  kw = z,
  xN = L(Aw, Rw),
  bN = N(Iw, kw);
var Su = {};
$(Su, {
  error: () => Mw,
  method: () => Tw,
  params: () => Pw,
  request: () => wN,
  response: () => vN,
  result: () => Bw,
});
f();
var Tw = a.literal('eth_getBlockReceipts'),
  Pw = a.tuple([Ae.or(J).or(tt)]),
  Bw = a.array(wa),
  Mw = z,
  wN = L(Tw, Pw),
  vN = N(Bw, Mw);
var Eu = {};
$(Eu, {
  error: () => Ow,
  method: () => zw,
  params: () => Lw,
  request: () => SN,
  response: () => EN,
  result: () => Nw,
});
f();
var zw = a.literal('eth_getBlockTransactionCountByHash'),
  Lw = a.tuple([Ae]),
  Nw = J,
  Ow = z,
  SN = L(zw, Lw),
  EN = N(Nw, Ow);
var _u = {};
$(_u, {
  error: () => Uw,
  method: () => Cw,
  params: () => qw,
  request: () => _N,
  response: () => AN,
  result: () => Dw,
});
f();
var Cw = a.literal('eth_getBlockTransactionCountByNumber'),
  qw = a.tuple([J]),
  Dw = J,
  Uw = z,
  _N = L(Cw, qw),
  AN = N(Dw, Uw);
var Au = {};
$(Au, {
  error: () => Ww,
  method: () => Fw,
  params: () => jw,
  request: () => RN,
  response: () => IN,
  result: () => Hw,
});
f();
var Fw = a.literal('eth_getCode'),
  jw = a.tuple([Ee, a.union([J, tt])]),
  Hw = De,
  Ww = z,
  RN = L(Fw, jw),
  IN = N(Hw, Ww);
var Ru = {};
$(Ru, {
  error: () => Gw,
  method: () => Kw,
  params: () => Vw,
  request: () => kN,
  response: () => TN,
  result: () => $w,
});
f();
var Kw = a.literal('eth_getFilterChanges'),
  Vw = a.tuple([J]),
  $w = a.array(hn),
  Gw = z,
  kN = L(Kw, Vw),
  TN = N($w, Gw);
var Iu = {};
$(Iu, {
  error: () => Xw,
  method: () => Yw,
  params: () => Zw,
  request: () => PN,
  response: () => BN,
  result: () => Jw,
});
f();
var Yw = a.literal('eth_getFilterLogs'),
  Zw = a.tuple([J]),
  Jw = a.array(hn),
  Xw = z,
  PN = L(Yw, Zw),
  BN = N(Jw, Xw);
var ku = {};
$(ku, {
  error: () => r1,
  method: () => Qw,
  params: () => e1,
  request: () => MN,
  response: () => zN,
  result: () => t1,
});
f();
var Qw = a.literal('eth_getLogs'),
  e1 = a.tuple([
    a.object({
      fromBlock: J.or(tt).optional(),
      toBlock: a.string().optional(),
      address: Ee.optional(),
      topics: a.array(Ae).optional(),
      blockHash: Ae.optional(),
    }),
  ]),
  t1 = a.array(hn),
  r1 = z,
  MN = L(Qw, e1),
  zN = N(t1, r1);
var Tu = {};
$(Tu, {
  error: () => i1,
  method: () => n1,
  params: () => o1,
  request: () => LN,
  response: () => NN,
  result: () => s1,
});
f();
var n1 = a.literal('eth_getProof'),
  o1 = a.tuple([Ee, a.array(Ae), J.or(tt)]),
  s1 = eh,
  i1 = z,
  LN = L(n1, o1),
  NN = N(s1, i1);
var Pu = {};
$(Pu, {
  error: () => p1,
  method: () => a1,
  params: () => c1,
  request: () => ON,
  response: () => CN,
  result: () => u1,
});
f();
var a1 = a.literal('eth_getStorageAt'),
  c1 = a.tuple([Ee, J, J.or(tt)]),
  u1 = De,
  p1 = z,
  ON = L(a1, c1),
  CN = N(u1, p1);
var Bu = {};
$(Bu, {
  error: () => h1,
  method: () => f1,
  params: () => l1,
  request: () => qN,
  response: () => DN,
  result: () => d1,
});
f();
var f1 = a.literal('eth_getTransactionByBlockHashAndIndex'),
  l1 = a.tuple([Ae, J]),
  d1 = mn.nullish().default(null),
  h1 = z,
  qN = L(f1, l1),
  DN = N(d1, h1);
var Mu = {};
$(Mu, {
  error: () => x1,
  method: () => m1,
  params: () => y1,
  request: () => UN,
  response: () => FN,
  result: () => g1,
});
f();
var m1 = a.literal('eth_getTransactionByBlockNumberAndIndex'),
  y1 = a.tuple([a.string(), J]),
  g1 = mn,
  x1 = z,
  UN = L(m1, y1),
  FN = N(g1, x1);
var zu = {};
$(zu, {
  error: () => S1,
  method: () => b1,
  params: () => w1,
  request: () => jN,
  response: () => HN,
  result: () => v1,
});
f();
var b1 = a.literal('eth_getTransactionByHash'),
  w1 = a.tuple([Ae]),
  v1 = mn.nullable(),
  S1 = z,
  jN = L(b1, w1),
  HN = N(v1, S1);
var Lu = {};
$(Lu, {
  error: () => R1,
  method: () => E1,
  params: () => _1,
  request: () => WN,
  response: () => KN,
  result: () => A1,
});
f();
var E1 = a.literal('eth_getTransactionCount'),
  _1 = a.tuple([Ee, J.or(tt)]),
  A1 = J,
  R1 = z,
  WN = L(E1, _1),
  KN = N(A1, R1);
var Nu = {};
$(Nu, {
  error: () => P1,
  method: () => I1,
  params: () => k1,
  request: () => VN,
  response: () => $N,
  result: () => T1,
});
f();
var I1 = a.literal('eth_getTransactionReceipt'),
  k1 = a.tuple([Ae]),
  T1 = wa.nullish().default(null),
  P1 = z,
  VN = L(I1, k1),
  $N = N(T1, P1);
var Ou = {};
$(Ou, {
  error: () => L1,
  method: () => B1,
  params: () => M1,
  request: () => GN,
  response: () => YN,
  result: () => z1,
});
f();
var B1 = a.literal('eth_getUncleByBlockHashAndIndex'),
  M1 = a.tuple([J.or(tt), J]),
  z1 = On,
  L1 = z,
  GN = L(B1, M1),
  YN = N(z1, L1);
var Cu = {};
$(Cu, {
  error: () => q1,
  method: () => N1,
  params: () => O1,
  request: () => ZN,
  response: () => JN,
  result: () => C1,
});
f();
var N1 = a.literal('eth_getUncleByBlockNumberAndIndex'),
  O1 = a.tuple([J.or(tt), J]),
  C1 = On,
  q1 = z,
  ZN = L(N1, O1),
  JN = N(C1, q1);
var qu = {};
$(qu, {
  error: () => j1,
  method: () => D1,
  params: () => U1,
  request: () => XN,
  response: () => QN,
  result: () => F1,
});
f();
var D1 = a.literal('eth_getUncleCountByBlockHash'),
  U1 = a.tuple([Ae]),
  F1 = J,
  j1 = z,
  XN = L(D1, U1),
  QN = N(F1, j1);
var Du = {};
$(Du, {
  error: () => V1,
  method: () => H1,
  params: () => W1,
  request: () => e8,
  response: () => t8,
  result: () => K1,
});
f();
var H1 = a.literal('eth_getUncleCountByBlockNumber'),
  W1 = a.tuple([J.or(tt)]),
  K1 = J,
  V1 = z,
  e8 = L(H1, W1),
  t8 = N(K1, V1);
var Uu = {};
$(Uu, {
  error: () => Z1,
  method: () => $1,
  params: () => G1,
  request: () => r8,
  response: () => n8,
  result: () => Y1,
});
f();
var $1 = a.literal('eth_maxPriorityFeePerGas'),
  G1 = a.tuple([]),
  Y1 = J,
  Z1 = z,
  r8 = L($1, G1),
  n8 = N(Y1, Z1);
var Fu = {};
$(Fu, {
  error: () => ev,
  method: () => J1,
  params: () => X1,
  request: () => o8,
  response: () => s8,
  result: () => Q1,
});
f();
var J1 = a.literal('eth_newBlockFilter'),
  X1 = a.tuple([]),
  Q1 = J,
  ev = z,
  o8 = L(J1, X1),
  s8 = N(Q1, ev);
var ju = {};
$(ju, {
  error: () => ov,
  method: () => tv,
  params: () => rv,
  request: () => i8,
  response: () => a8,
  result: () => nv,
});
f();
var tv = a.literal('eth_newFilter'),
  rv = a.tuple([
    a.object({
      fromBlock: J.optional(),
      toBlock: J.optional(),
      address: Ee.or(a.array(Ee)).optional(),
      topics: a
        .array(
          De.nullish()
            .default(null)
            .or(a.array(De.nullish().default(null)))
        )
        .optional(),
    }),
  ]),
  nv = J,
  ov = z,
  i8 = L(tv, rv),
  a8 = N(nv, ov);
var Hu = {};
$(Hu, {
  error: () => cv,
  method: () => sv,
  params: () => iv,
  request: () => c8,
  response: () => u8,
  result: () => av,
});
f();
var sv = a.literal('eth_newPendingTransactionFilter'),
  iv = a.tuple([]),
  av = J,
  cv = z,
  c8 = L(sv, iv),
  u8 = N(av, cv);
var Wu = {};
$(Wu, {
  error: () => lv,
  method: () => uv,
  params: () => pv,
  request: () => p8,
  response: () => f8,
  result: () => fv,
});
f();
var uv = a.literal('personal_sign'),
  pv = a.union([a.tuple([ao, Ee]), a.tuple([ao, Ee, a.unknown()])]),
  fv = De,
  lv = z,
  p8 = L(uv, pv),
  f8 = N(fv, lv);
var Ku = {};
$(Ku, {
  error: () => yv,
  method: () => dv,
  params: () => hv,
  request: () => l8,
  response: () => d8,
  result: () => mv,
});
f();
var dv = a.literal('eth_protocolVersion'),
  hv = a.tuple([]),
  mv = a.string(),
  yv = z,
  l8 = L(dv, hv),
  d8 = N(mv, yv);
var Vu = {};
$(Vu, {
  error: () => wv,
  method: () => gv,
  params: () => xv,
  request: () => h8,
  response: () => m8,
  result: () => bv,
});
f();
var gv = a.literal('eth_requestAccounts'),
  xv = a.tuple([]),
  bv = a.array(Ee),
  wv = z,
  h8 = L(gv, xv),
  m8 = N(bv, wv);
var $u = {};
$($u, {
  error: () => _v,
  method: () => vv,
  params: () => Sv,
  request: () => y8,
  response: () => g8,
  result: () => Ev,
});
f();
var vv = a.literal('eth_sendPrivateTransaction'),
  Sv = a.tuple([
    a.object({
      tx: Ae,
      maxBlockNumber: J.optional(),
      preferences: a.object({ fast: a.boolean() }).optional(),
    }),
  ]),
  Ev = Ae,
  _v = z,
  y8 = L(vv, Sv),
  g8 = N(Ev, _v);
var Gu = {};
$(Gu, {
  error: () => kv,
  method: () => Av,
  params: () => Rv,
  request: () => x8,
  response: () => b8,
  result: () => Iv,
});
f();
var Av = a.literal('eth_sendRawTransaction'),
  Rv = a.tuple([De]),
  Iv = Ae,
  kv = z,
  x8 = L(Av, Rv),
  b8 = N(Iv, kv);
var Yu = {};
$(Yu, {
  error: () => Mv,
  method: () => Tv,
  params: () => Pv,
  request: () => w8,
  response: () => v8,
  result: () => Bv,
});
f();
var Tv = a.literal('eth_sendTransaction'),
  Pv = a.tuple([Nn]),
  Bv = Ae,
  Mv = z,
  w8 = L(Tv, Pv),
  v8 = N(Bv, Mv);
var Zu = {};
$(Zu, {
  error: () => Ov,
  method: () => zv,
  params: () => Lv,
  request: () => S8,
  response: () => E8,
  result: () => Nv,
});
f();
var zv = a.literal('eth_sign'),
  Lv = a.tuple([Ee, ao]),
  Nv = De,
  Ov = z,
  S8 = L(zv, Lv),
  E8 = N(Nv, Ov);
var Ju = {};
$(Ju, {
  error: () => Uv,
  method: () => Cv,
  params: () => qv,
  request: () => _8,
  response: () => A8,
  result: () => Dv,
});
f();
var Cv = a.literal('eth_signTransaction'),
  qv = a.tuple([Nn]),
  Dv = De,
  Uv = z,
  _8 = L(Cv, qv),
  A8 = N(Dv, Uv);
var Xu = {};
$(Xu, {
  error: () => Wv,
  method: () => Fv,
  params: () => jv,
  request: () => R8,
  response: () => I8,
  result: () => Hv,
});
f();
var Fv = a.literal('eth_signTypedData'),
  jv = a.tuple([Jd, Ee]),
  Hv = De,
  Wv = z,
  R8 = L(Fv, jv),
  I8 = N(Hv, Wv);
var Qu = {};
$(Qu, {
  error: () => Gv,
  method: () => Kv,
  params: () => Vv,
  request: () => k8,
  response: () => T8,
  result: () => $v,
});
f();
var Kv = a.literal('eth_signTypedData_v3'),
  Vv = a.tuple([
    Ee,
    a
      .string()
      .transform((r, e) => {
        try {
          let t = JSON.parse(r);
          return Xc.parse(t);
        } catch (t) {
          return (
            e.addIssue({
              code: a.ZodIssueCode.custom,
              message: 'Invalid typed data:' + t.message,
              fatal: !0,
            }),
            a.NEVER
          );
        }
      })
      .or(Xc),
  ]),
  $v = De,
  Gv = z,
  k8 = L(Kv, Vv),
  T8 = N($v, Gv);
var ep = {};
$(ep, {
  error: () => Xv,
  method: () => Yv,
  params: () => Zv,
  request: () => P8,
  response: () => B8,
  result: () => Jv,
});
f();
var Yv = a.literal('eth_signTypedData_v4'),
  Zv = a.tuple([
    Ee,
    a
      .string()
      .transform((r, e) => {
        try {
          let t = JSON.parse(r);
          return Qc.parse(t);
        } catch (t) {
          return (
            e.addIssue({
              code: a.ZodIssueCode.custom,
              message: 'Invalid typed data:' + t.message,
              fatal: !0,
            }),
            a.NEVER
          );
        }
      })
      .or(Qc),
  ]),
  Jv = De,
  Xv = z,
  P8 = L(Yv, Zv),
  B8 = N(Jv, Xv);
var tp = {};
$(tp, {
  error: () => rS,
  method: () => Qv,
  params: () => eS,
  request: () => M8,
  response: () => z8,
  result: () => tS,
});
f();
var Qv = a.literal('eth_subscribe'),
  eS = a.any(),
  tS = a.union([
    Je,
    a.object({ result: mn, subscription: Je }),
    a.object({ result: Ae, subscription: Je }),
    a.object({
      result: a.object({
        difficulty: Je,
        extraData: Je,
        gasLimit: Je,
        gasUsed: Je,
        logsBloom: Je,
        miner: Ee,
        nonce: Je,
        number: Je,
        parentHash: Ae,
        receiptRoot: Ae,
        sha3Uncles: Ae,
        stateRoot: Ae,
        timestamp: Je,
        transactionsRoot: Ae,
      }),
      subscription: Je,
    }),
    a.object({ result: hn, subscription: Je }),
  ]),
  rS = z,
  M8 = L(Qv, eS),
  z8 = N(tS, rS);
var rp = {};
$(rp, {
  error: () => iS,
  method: () => nS,
  params: () => oS,
  request: () => L8,
  response: () => N8,
  result: () => sS,
});
f();
var nS = a.literal('eth_syncing'),
  oS = a.tuple([]),
  sS = a.union([a.object({ currentBlock: J, highestBlock: J, startingBlock: J }), a.literal(!1)]),
  iS = z,
  L8 = L(nS, oS),
  N8 = N(sS, iS);
var np = {};
$(np, {
  error: () => pS,
  method: () => aS,
  params: () => cS,
  request: () => O8,
  response: () => C8,
  result: () => uS,
});
f();
var aS = a.literal('eth_uninstallFilter'),
  cS = a.tuple([J]),
  uS = a.boolean(),
  pS = z,
  O8 = L(aS, cS),
  C8 = N(uS, pS);
var op = {};
$(op, {
  error: () => hS,
  method: () => fS,
  params: () => lS,
  request: () => q8,
  response: () => D8,
  result: () => dS,
});
f();
var fS = a.literal('eth_unsubscribe'),
  lS = a.any(),
  dS = a.boolean(),
  hS = z,
  q8 = L(fS, lS),
  D8 = N(dS, hS);
var sp = {};
$(sp, {
  error: () => xS,
  method: () => mS,
  params: () => yS,
  request: () => U8,
  response: () => F8,
  result: () => gS,
});
f();
var mS = a.literal('net_listening'),
  yS = a.tuple([]),
  gS = a.boolean(),
  xS = z,
  U8 = L(mS, yS),
  F8 = N(gS, xS);
var ip = {};
$(ip, {
  error: () => SS,
  method: () => bS,
  params: () => wS,
  request: () => j8,
  response: () => H8,
  result: () => vS,
});
f();
var bS = a.literal('net_version'),
  wS = a.tuple([]),
  vS = a.string(),
  SS = z,
  j8 = L(bS, wS),
  H8 = N(vS, SS);
var ap = {};
$(ap, {
  error: () => RS,
  method: () => ES,
  params: () => _S,
  request: () => W8,
  response: () => K8,
  result: () => AS,
});
f();
var ES = a.literal('wallet_addEthereumChain'),
  _S = a.tuple([
    a.object({
      chainId: Je,
      chainName: a.string(),
      nativeCurrency: a.object({
        name: a.string(),
        symbol: a.string().refine(
          (r) => {
            let { length: e } = r;
            return e >= 2 && e <= 6;
          },
          { message: 'Value is not a valid symbol.' }
        ),
        decimals: a.number(),
      }),
      rpcUrls: a.array(a.string()),
      blockExplorerUrls: a.union([a.tuple([a.string()]), a.null()]).optional(),
      iconUrls: a.array(a.string()).optional(),
    }),
  ]),
  AS = a.null(),
  RS = z,
  W8 = L(ES, _S),
  K8 = N(AS, RS);
var cp = {};
$(cp, {
  error: () => PS,
  method: () => IS,
  params: () => kS,
  request: () => V8,
  response: () => $8,
  result: () => TS,
});
f();
var IS = a.literal('wallet_selectEthereumProvider'),
  kS = a.tuple([]),
  TS = Sa,
  PS = z,
  V8 = L(IS, kS),
  $8 = N(TS, PS);
var up = {};
$(up, {
  error: () => LS,
  method: () => BS,
  params: () => MS,
  request: () => G8,
  response: () => Y8,
  result: () => zS,
});
f();
var BS = a.literal('wallet_switchEthereumChain'),
  MS = a.tuple([a.object({ chainId: Je })]),
  zS = a.null(),
  LS = z,
  G8 = L(BS, MS),
  Y8 = N(zS, LS);
var pp = {};
$(pp, {
  error: () => qS,
  method: () => NS,
  params: () => OS,
  request: () => Z8,
  response: () => J8,
  result: () => CS,
});
f();
var NS = a.literal('wallet_watchAsset'),
  OS = a.object({
    type: a.literal('ERC20'),
    options: a.object({ address: Ee, symbol: a.string(), decimals: a.number(), image: a.string() }),
  }),
  CS = a.boolean(),
  qS = z,
  Z8 = L(NS, OS),
  J8 = N(CS, qS);
var fp = {};
$(fp, {
  error: () => jS,
  method: () => DS,
  params: () => US,
  request: () => X8,
  response: () => Q8,
  result: () => FS,
});
f();
var DS = a.literal('web3_clientVersion'),
  US = a.tuple([]),
  FS = a.string(),
  jS = z,
  X8 = L(DS, US),
  Q8 = N(FS, jS);
var lp = {};
$(lp, {
  error: () => VS,
  method: () => HS,
  params: () => WS,
  request: () => eO,
  response: () => tO,
  result: () => KS,
});
f();
var HS = a.literal('web3_sha3'),
  WS = a.tuple([De]),
  KS = De,
  VS = z,
  eO = L(HS, WS),
  tO = N(KS, VS);
var dp = {};
$(dp, {
  error: () => ZS,
  method: () => $S,
  params: () => GS,
  request: () => sO,
  response: () => iO,
  result: () => YS,
});
f();
var rO = a.record(a.string(), a.any()),
  nO = a.record(a.string(), rO),
  oO = a.object({ parentCapability: a.string(), date: a.number().optional() }),
  $S = a.literal('wallet_requestPermissions'),
  GS = a.tuple([nO]),
  YS = a.array(oO),
  ZS = z,
  sO = L($S, GS),
  iO = N(YS, ZS);
var hp = {};
$(hp, {
  error: () => eE,
  method: () => JS,
  params: () => XS,
  request: () => uO,
  response: () => pO,
  result: () => QS,
});
f();
var aO = a.object({ type: a.string(), value: a.any() }),
  cO = a.object({ invoker: a.string().url(), parentCapability: a.string(), caveats: a.array(aO) }),
  JS = a.literal('wallet_getPermissions'),
  XS = a.tuple([]),
  QS = a.array(cO),
  eE = z,
  uO = L(JS, XS),
  pO = N(QS, eE);
var Er = {};
$(Er, {
  phantom_accountChanged: () => mp,
  phantom_chainChanged: () => gp,
  phantom_dappIcon: () => xp,
  phantom_dappMeta: () => bp,
  phantom_metaMaskOverrideSettingsChanged: () => yp,
  phantom_trustRevoked: () => wp,
});
f();
var mp = {};
$(mp, { method: () => tE, notification: () => fO, params: () => rE });
f();
var tE = a.literal('phantom_accountChanged'),
  rE = a
    .object({
      evm: a.optional(Ee),
      sol: a.optional(Ea),
      btc: a.array(Es).optional(),
      sui: a.optional(_s),
    })
    .nullish()
    .default(null),
  fO = Tr(tE, rE);
var yp = {};
$(yp, { method: () => nE, notification: () => lO, params: () => oE });
f();
var nE = a.literal('phantom_metaMaskOverrideSettingsChanged'),
  oE = a.null(),
  lO = Tr(nE, oE);
var gp = {};
$(gp, { method: () => sE, notification: () => dO, params: () => iE });
f();
var sE = a.literal('phantom_chainChanged'),
  iE = a.object({ evm: J }).nullish().default(null),
  dO = Tr(sE, iE);
var xp = {};
$(xp, { method: () => aE, notification: () => hO, params: () => cE });
f();
var aE = a.literal('phantom_dappIcon'),
  cE = a.string().nullish().default(null),
  hO = Tr(aE, cE);
var bp = {};
$(bp, { method: () => uE, notification: () => mO, params: () => pE });
f();
var uE = a.literal('phantom_dappMeta'),
  pE = a.object({
    title: a.string(),
    url: a.string(),
    icons: a
      .object({ href: a.string(), size: a.object({ width: a.number(), height: a.number() }) })
      .array(),
  }),
  mO = Tr(uE, pE);
var wp = {};
$(wp, { method: () => fE, notification: () => yO, params: () => lE });
f();
var fE = a.literal('phantom_trustRevoked'),
  lE = a
    .object({
      evm: a.optional(Ee),
      sol: a.optional(Ea),
      btc: a.array(Es).optional(),
      sui: a.optional(_s),
    })
    .nullish()
    .default(null),
  yO = Tr(fE, lE);
f();
var sm = {};
$(sm, {
  error: () => $A,
  method: () => WA,
  params: () => KA,
  path: () => vD,
  request: () => bD,
  response: () => wD,
  result: () => VA,
});
f();
f();
f();
f();
f();
f();
f();
f();
f();
f();
f();
f();
f();
f();
f();
f();
f();
f();
f();
var uee = new Error('Unsupported path.');
f();
f();
f();
f();
f();
f();
f();
f();
f();
f();
f();
f();
f();
f();
f();
f();
f();
f();
f();
var WO = {
  days: (r) => r * 864e5,
  hours: (r) => r * 36e5,
  minutes: (r) => r * 6e4,
  seconds: (r) => r * 1e3,
  milliseconds: (r) => r,
  microseconds: (r) => r / 1e3,
  nanoseconds: (r) => r / 1e6,
};
function Ba(r) {
  let e = 0;
  for (let [t, n] of Object.entries(r)) {
    let o = WO[t];
    e += o(n);
  }
  return e;
}
f();
f();
f();
var mE = _e(fi()),
  yE = _e(bh());
mE.default.extend(yE.default);
f();
var KO = _e(fi());
f();
var _h = _e(fi()),
  bE = _e(gE()),
  wE = _e(xE());
_h.default.extend(bE.default);
_h.default.extend(wE.default);
f();
var VO = _e(fi());
f();
f();
f();
var vp = _e(fi()),
  EE = _e(bh()),
  _E = _e(vE()),
  AE = _e(SE());
vp.default.extend(_E.default);
vp.default.extend(EE.default);
vp.default.extend(AE.default);
var Pte = new Date().getTimezoneOffset() * 6e4;
f();
f();
f();
f();
f();
f();
var IE = Ba({ seconds: 10 }),
  kE = Ba({ seconds: 5 });
f();
f();
f();
f();
f();
f();
f();
f();
f();
f();
f();
f();
f();
f();
f();
f();
var Nh = _e(qn());
f();
var Ap = _e(qn());
f();
var Oh = _e(qn());
f();
var B6 = _e(qn());
f();
var Ch = _e(qn());
f();
f();
var qh = _e(qn());
f();
f();
f();
var F6 = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
  Dh = Math.ceil,
  xn = Math.floor,
  _r = '[BigNumber Error] ',
  WE = _r + 'Number primitive has more than 15 significant digits: ',
  Gr = 1e14,
  Oe = 14,
  Uh = 9007199254740991,
  Fh = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
  uo = 1e7,
  Yt = 1e9;
function KE(r) {
  var e,
    t,
    n,
    o = (H.prototype = { constructor: H, toString: null, valueOf: null }),
    s = new H(1),
    i = 20,
    c = 4,
    u = -7,
    l = 21,
    w = -1e7,
    x = 1e7,
    A = !1,
    _ = 1,
    O = 0,
    D = {
      prefix: '',
      groupSize: 3,
      secondaryGroupSize: 0,
      groupSeparator: ',',
      decimalSeparator: '.',
      fractionGroupSize: 0,
      fractionGroupSeparator: '\xA0',
      suffix: '',
    },
    j = '0123456789abcdefghijklmnopqrstuvwxyz',
    G = !0;
  function H(R, P) {
    var C,
      U,
      T,
      y,
      p,
      d,
      h,
      g,
      b = this;
    if (!(b instanceof H)) return new H(R, P);
    if (P == null) {
      if (R && R._isBigNumber === !0) {
        (b.s = R.s),
          !R.c || R.e > x
            ? (b.c = b.e = null)
            : R.e < w
              ? (b.c = [(b.e = 0)])
              : ((b.e = R.e), (b.c = R.c.slice()));
        return;
      }
      if ((d = typeof R == 'number') && R * 0 == 0) {
        if (((b.s = 1 / R < 0 ? ((R = -R), -1) : 1), R === ~~R)) {
          for (y = 0, p = R; p >= 10; p /= 10, y++);
          y > x ? (b.c = b.e = null) : ((b.e = y), (b.c = [R]));
          return;
        }
        g = String(R);
      } else {
        if (!F6.test((g = String(R)))) return n(b, g, d);
        b.s = g.charCodeAt(0) == 45 ? ((g = g.slice(1)), -1) : 1;
      }
      (y = g.indexOf('.')) > -1 && (g = g.replace('.', '')),
        (p = g.search(/e/i)) > 0
          ? (y < 0 && (y = p), (y += +g.slice(p + 1)), (g = g.substring(0, p)))
          : y < 0 && (y = g.length);
    } else {
      if ((Ft(P, 2, j.length, 'Base'), P == 10 && G)) return (b = new H(R)), Y(b, i + b.e + 1, c);
      if (((g = String(R)), (d = typeof R == 'number'))) {
        if (R * 0 != 0) return n(b, g, d, P);
        if (
          ((b.s = 1 / R < 0 ? ((g = g.slice(1)), -1) : 1),
          H.DEBUG && g.replace(/^0\.0*|\./, '').length > 15)
        )
          throw Error(WE + R);
      } else b.s = g.charCodeAt(0) === 45 ? ((g = g.slice(1)), -1) : 1;
      for (C = j.slice(0, P), y = p = 0, h = g.length; p < h; p++)
        if (C.indexOf((U = g.charAt(p))) < 0) {
          if (U == '.') {
            if (p > y) {
              y = h;
              continue;
            }
          } else if (
            !T &&
            ((g == g.toUpperCase() && (g = g.toLowerCase())) ||
              (g == g.toLowerCase() && (g = g.toUpperCase())))
          ) {
            (T = !0), (p = -1), (y = 0);
            continue;
          }
          return n(b, String(R), d, P);
        }
      (d = !1),
        (g = t(g, P, 10, b.s)),
        (y = g.indexOf('.')) > -1 ? (g = g.replace('.', '')) : (y = g.length);
    }
    for (p = 0; g.charCodeAt(p) === 48; p++);
    for (h = g.length; g.charCodeAt(--h) === 48; );
    if ((g = g.slice(p, ++h))) {
      if (((h -= p), d && H.DEBUG && h > 15 && (R > Uh || R !== xn(R)))) throw Error(WE + b.s * R);
      if ((y = y - p - 1) > x) b.c = b.e = null;
      else if (y < w) b.c = [(b.e = 0)];
      else {
        if (((b.e = y), (b.c = []), (p = (y + 1) % Oe), y < 0 && (p += Oe), p < h)) {
          for (p && b.c.push(+g.slice(0, p)), h -= Oe; p < h; ) b.c.push(+g.slice(p, (p += Oe)));
          p = Oe - (g = g.slice(p)).length;
        } else p -= h;
        for (; p--; g += '0');
        b.c.push(+g);
      }
    } else b.c = [(b.e = 0)];
  }
  (H.clone = KE),
    (H.ROUND_UP = 0),
    (H.ROUND_DOWN = 1),
    (H.ROUND_CEIL = 2),
    (H.ROUND_FLOOR = 3),
    (H.ROUND_HALF_UP = 4),
    (H.ROUND_HALF_DOWN = 5),
    (H.ROUND_HALF_EVEN = 6),
    (H.ROUND_HALF_CEIL = 7),
    (H.ROUND_HALF_FLOOR = 8),
    (H.EUCLID = 9),
    (H.config = H.set =
      function (R) {
        var P, C;
        if (R != null)
          if (typeof R == 'object') {
            if (
              (R.hasOwnProperty((P = 'DECIMAL_PLACES')) && ((C = R[P]), Ft(C, 0, Yt, P), (i = C)),
              R.hasOwnProperty((P = 'ROUNDING_MODE')) && ((C = R[P]), Ft(C, 0, 8, P), (c = C)),
              R.hasOwnProperty((P = 'EXPONENTIAL_AT')) &&
                ((C = R[P]),
                C && C.pop
                  ? (Ft(C[0], -Yt, 0, P), Ft(C[1], 0, Yt, P), (u = C[0]), (l = C[1]))
                  : (Ft(C, -Yt, Yt, P), (u = -(l = C < 0 ? -C : C)))),
              R.hasOwnProperty((P = 'RANGE')))
            )
              if (((C = R[P]), C && C.pop))
                Ft(C[0], -Yt, -1, P), Ft(C[1], 1, Yt, P), (w = C[0]), (x = C[1]);
              else if ((Ft(C, -Yt, Yt, P), C)) w = -(x = C < 0 ? -C : C);
              else throw Error(_r + P + ' cannot be zero: ' + C);
            if (R.hasOwnProperty((P = 'CRYPTO')))
              if (((C = R[P]), C === !!C))
                if (C)
                  if (
                    typeof crypto < 'u' &&
                    crypto &&
                    (crypto.getRandomValues || crypto.randomBytes)
                  )
                    A = C;
                  else throw ((A = !C), Error(_r + 'crypto unavailable'));
                else A = C;
              else throw Error(_r + P + ' not true or false: ' + C);
            if (
              (R.hasOwnProperty((P = 'MODULO_MODE')) && ((C = R[P]), Ft(C, 0, 9, P), (_ = C)),
              R.hasOwnProperty((P = 'POW_PRECISION')) && ((C = R[P]), Ft(C, 0, Yt, P), (O = C)),
              R.hasOwnProperty((P = 'FORMAT')))
            )
              if (((C = R[P]), typeof C == 'object')) D = C;
              else throw Error(_r + P + ' not an object: ' + C);
            if (R.hasOwnProperty((P = 'ALPHABET')))
              if (((C = R[P]), typeof C == 'string' && !/^.?$|[+\-.\s]|(.).*\1/.test(C)))
                (G = C.slice(0, 10) == '0123456789'), (j = C);
              else throw Error(_r + P + ' invalid: ' + C);
          } else throw Error(_r + 'Object expected: ' + R);
        return {
          DECIMAL_PLACES: i,
          ROUNDING_MODE: c,
          EXPONENTIAL_AT: [u, l],
          RANGE: [w, x],
          CRYPTO: A,
          MODULO_MODE: _,
          POW_PRECISION: O,
          FORMAT: D,
          ALPHABET: j,
        };
      }),
    (H.isBigNumber = function (R) {
      if (!R || R._isBigNumber !== !0) return !1;
      if (!H.DEBUG) return !0;
      var P,
        C,
        U = R.c,
        T = R.e,
        y = R.s;
      e: if ({}.toString.call(U) == '[object Array]') {
        if ((y === 1 || y === -1) && T >= -Yt && T <= Yt && T === xn(T)) {
          if (U[0] === 0) {
            if (T === 0 && U.length === 1) return !0;
            break e;
          }
          if (((P = (T + 1) % Oe), P < 1 && (P += Oe), String(U[0]).length == P)) {
            for (P = 0; P < U.length; P++)
              if (((C = U[P]), C < 0 || C >= Gr || C !== xn(C))) break e;
            if (C !== 0) return !0;
          }
        }
      } else if (U === null && T === null && (y === null || y === 1 || y === -1)) return !0;
      throw Error(_r + 'Invalid BigNumber: ' + R);
    }),
    (H.maximum = H.max =
      function () {
        return ee(arguments, o.lt);
      }),
    (H.minimum = H.min =
      function () {
        return ee(arguments, o.gt);
      }),
    (H.random = (function () {
      var R = 9007199254740992,
        P =
          (Math.random() * R) & 2097151
            ? function () {
                return xn(Math.random() * R);
              }
            : function () {
                return (
                  ((Math.random() * 1073741824) | 0) * 8388608 + ((Math.random() * 8388608) | 0)
                );
              };
      return function (C) {
        var U,
          T,
          y,
          p,
          d,
          h = 0,
          g = [],
          b = new H(s);
        if ((C == null ? (C = i) : Ft(C, 0, Yt), (p = Dh(C / Oe)), A))
          if (crypto.getRandomValues) {
            for (U = crypto.getRandomValues(new Uint32Array((p *= 2))); h < p; )
              (d = U[h] * 131072 + (U[h + 1] >>> 11)),
                d >= 9e15
                  ? ((T = crypto.getRandomValues(new Uint32Array(2))),
                    (U[h] = T[0]),
                    (U[h + 1] = T[1]))
                  : (g.push(d % 1e14), (h += 2));
            h = p / 2;
          } else if (crypto.randomBytes) {
            for (U = crypto.randomBytes((p *= 7)); h < p; )
              (d =
                (U[h] & 31) * 281474976710656 +
                U[h + 1] * 1099511627776 +
                U[h + 2] * 4294967296 +
                U[h + 3] * 16777216 +
                (U[h + 4] << 16) +
                (U[h + 5] << 8) +
                U[h + 6]),
                d >= 9e15 ? crypto.randomBytes(7).copy(U, h) : (g.push(d % 1e14), (h += 7));
            h = p / 7;
          } else throw ((A = !1), Error(_r + 'crypto unavailable'));
        if (!A) for (; h < p; ) (d = P()), d < 9e15 && (g[h++] = d % 1e14);
        for (
          p = g[--h], C %= Oe, p && C && ((d = Fh[Oe - C]), (g[h] = xn(p / d) * d));
          g[h] === 0;
          g.pop(), h--
        );
        if (h < 0) g = [(y = 0)];
        else {
          for (y = -1; g[0] === 0; g.splice(0, 1), y -= Oe);
          for (h = 1, d = g[0]; d >= 10; d /= 10, h++);
          h < Oe && (y -= Oe - h);
        }
        return (b.e = y), (b.c = g), b;
      };
    })()),
    (H.sum = function () {
      for (var R = 1, P = arguments, C = new H(P[0]); R < P.length; ) C = C.plus(P[R++]);
      return C;
    }),
    (t = (function () {
      var R = '0123456789';
      function P(C, U, T, y) {
        for (var p, d = [0], h, g = 0, b = C.length; g < b; ) {
          for (h = d.length; h--; d[h] *= U);
          for (d[0] += y.indexOf(C.charAt(g++)), p = 0; p < d.length; p++)
            d[p] > T - 1 &&
              (d[p + 1] == null && (d[p + 1] = 0), (d[p + 1] += (d[p] / T) | 0), (d[p] %= T));
        }
        return d.reverse();
      }
      return function (C, U, T, y, p) {
        var d,
          h,
          g,
          b,
          I,
          M,
          k,
          m,
          B = C.indexOf('.'),
          ce = i,
          E = c;
        for (
          B >= 0 &&
            ((b = O),
            (O = 0),
            (C = C.replace('.', '')),
            (m = new H(U)),
            (M = m.pow(C.length - B)),
            (O = b),
            (m.c = P(Dn(Ur(M.c), M.e, '0'), 10, T, R)),
            (m.e = m.c.length)),
            k = P(C, U, T, p ? ((d = j), R) : ((d = R), j)),
            g = b = k.length;
          k[--b] == 0;
          k.pop()
        );
        if (!k[0]) return d.charAt(0);
        if (
          (B < 0
            ? --g
            : ((M.c = k),
              (M.e = g),
              (M.s = y),
              (M = e(M, m, ce, E, T)),
              (k = M.c),
              (I = M.r),
              (g = M.e)),
          (h = g + ce + 1),
          (B = k[h]),
          (b = T / 2),
          (I = I || h < 0 || k[h + 1] != null),
          (I =
            E < 4
              ? (B != null || I) && (E == 0 || E == (M.s < 0 ? 3 : 2))
              : B > b ||
                (B == b && (E == 4 || I || (E == 6 && k[h - 1] & 1) || E == (M.s < 0 ? 8 : 7)))),
          h < 1 || !k[0])
        )
          C = I ? Dn(d.charAt(1), -ce, d.charAt(0)) : d.charAt(0);
        else {
          if (((k.length = h), I))
            for (--T; ++k[--h] > T; ) (k[h] = 0), h || (++g, (k = [1].concat(k)));
          for (b = k.length; !k[--b]; );
          for (B = 0, C = ''; B <= b; C += d.charAt(k[B++]));
          C = Dn(C, g, d.charAt(0));
        }
        return C;
      };
    })()),
    (e = (function () {
      function R(U, T, y) {
        var p,
          d,
          h,
          g,
          b = 0,
          I = U.length,
          M = T % uo,
          k = (T / uo) | 0;
        for (U = U.slice(); I--; )
          (h = U[I] % uo),
            (g = (U[I] / uo) | 0),
            (p = k * h + g * M),
            (d = M * h + (p % uo) * uo + b),
            (b = ((d / y) | 0) + ((p / uo) | 0) + k * g),
            (U[I] = d % y);
        return b && (U = [b].concat(U)), U;
      }
      function P(U, T, y, p) {
        var d, h;
        if (y != p) h = y > p ? 1 : -1;
        else
          for (d = h = 0; d < y; d++)
            if (U[d] != T[d]) {
              h = U[d] > T[d] ? 1 : -1;
              break;
            }
        return h;
      }
      function C(U, T, y, p) {
        for (var d = 0; y--; ) (U[y] -= d), (d = U[y] < T[y] ? 1 : 0), (U[y] = d * p + U[y] - T[y]);
        for (; !U[0] && U.length > 1; U.splice(0, 1));
      }
      return function (U, T, y, p, d) {
        var h,
          g,
          b,
          I,
          M,
          k,
          m,
          B,
          ce,
          E,
          F,
          W,
          Z,
          se,
          ge,
          pe,
          fe,
          Fe = U.s == T.s ? 1 : -1,
          le = U.c,
          we = T.c;
        if (!le || !le[0] || !we || !we[0])
          return new H(
            !U.s || !T.s || (le ? we && le[0] == we[0] : !we)
              ? NaN
              : (le && le[0] == 0) || !we
                ? Fe * 0
                : Fe / 0
          );
        for (
          B = new H(Fe),
            ce = B.c = [],
            g = U.e - T.e,
            Fe = y + g + 1,
            d || ((d = Gr), (g = Fr(U.e / Oe) - Fr(T.e / Oe)), (Fe = (Fe / Oe) | 0)),
            b = 0;
          we[b] == (le[b] || 0);
          b++
        );
        if ((we[b] > (le[b] || 0) && g--, Fe < 0)) ce.push(1), (I = !0);
        else {
          for (
            se = le.length,
              pe = we.length,
              b = 0,
              Fe += 2,
              M = xn(d / (we[0] + 1)),
              M > 1 && ((we = R(we, M, d)), (le = R(le, M, d)), (pe = we.length), (se = le.length)),
              Z = pe,
              E = le.slice(0, pe),
              F = E.length;
            F < pe;
            E[F++] = 0
          );
          (fe = we.slice()), (fe = [0].concat(fe)), (ge = we[0]), we[1] >= d / 2 && ge++;
          do {
            if (((M = 0), (h = P(we, E, pe, F)), h < 0)) {
              if (((W = E[0]), pe != F && (W = W * d + (E[1] || 0)), (M = xn(W / ge)), M > 1))
                for (
                  M >= d && (M = d - 1), k = R(we, M, d), m = k.length, F = E.length;
                  P(k, E, m, F) == 1;

                )
                  M--, C(k, pe < m ? fe : we, m, d), (m = k.length), (h = 1);
              else M == 0 && (h = M = 1), (k = we.slice()), (m = k.length);
              if ((m < F && (k = [0].concat(k)), C(E, k, F, d), (F = E.length), h == -1))
                for (; P(we, E, pe, F) < 1; ) M++, C(E, pe < F ? fe : we, F, d), (F = E.length);
            } else h === 0 && (M++, (E = [0]));
            (ce[b++] = M), E[0] ? (E[F++] = le[Z] || 0) : ((E = [le[Z]]), (F = 1));
          } while ((Z++ < se || E[0] != null) && Fe--);
          (I = E[0] != null), ce[0] || ce.splice(0, 1);
        }
        if (d == Gr) {
          for (b = 1, Fe = ce[0]; Fe >= 10; Fe /= 10, b++);
          Y(B, y + (B.e = b + g * Oe - 1) + 1, p, I);
        } else (B.e = g), (B.r = +I);
        return B;
      };
    })());
  function ae(R, P, C, U) {
    var T, y, p, d, h;
    if ((C == null ? (C = c) : Ft(C, 0, 8), !R.c)) return R.toString();
    if (((T = R.c[0]), (p = R.e), P == null))
      (h = Ur(R.c)), (h = U == 1 || (U == 2 && (p <= u || p >= l)) ? Ip(h, p) : Dn(h, p, '0'));
    else if (
      ((R = Y(new H(R), P, C)),
      (y = R.e),
      (h = Ur(R.c)),
      (d = h.length),
      U == 1 || (U == 2 && (P <= y || y <= u)))
    ) {
      for (; d < P; h += '0', d++);
      h = Ip(h, y);
    } else if (((P -= p), (h = Dn(h, y, '0')), y + 1 > d)) {
      if (--P > 0) for (h += '.'; P--; h += '0');
    } else if (((P += y - d), P > 0)) for (y + 1 == d && (h += '.'); P--; h += '0');
    return R.s < 0 && T ? '-' + h : h;
  }
  function ee(R, P) {
    for (var C, U = 1, T = new H(R[0]); U < R.length; U++)
      if (((C = new H(R[U])), C.s)) P.call(T, C) && (T = C);
      else {
        T = C;
        break;
      }
    return T;
  }
  function re(R, P, C) {
    for (var U = 1, T = P.length; !P[--T]; P.pop());
    for (T = P[0]; T >= 10; T /= 10, U++);
    return (
      (C = U + C * Oe - 1) > x
        ? (R.c = R.e = null)
        : C < w
          ? (R.c = [(R.e = 0)])
          : ((R.e = C), (R.c = P)),
      R
    );
  }
  n = (function () {
    var R = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
      P = /^([^.]+)\.$/,
      C = /^\.([^.]+)$/,
      U = /^-?(Infinity|NaN)$/,
      T = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function (y, p, d, h) {
      var g,
        b = d ? p : p.replace(T, '');
      if (U.test(b)) y.s = isNaN(b) ? null : b < 0 ? -1 : 1;
      else {
        if (
          !d &&
          ((b = b.replace(R, function (I, M, k) {
            return (g = (k = k.toLowerCase()) == 'x' ? 16 : k == 'b' ? 2 : 8), !h || h == g ? M : I;
          })),
          h && ((g = h), (b = b.replace(P, '$1').replace(C, '0.$1'))),
          p != b)
        )
          return new H(b, g);
        if (H.DEBUG) throw Error(_r + 'Not a' + (h ? ' base ' + h : '') + ' number: ' + p);
        y.s = null;
      }
      y.c = y.e = null;
    };
  })();
  function Y(R, P, C, U) {
    var T,
      y,
      p,
      d,
      h,
      g,
      b,
      I = R.c,
      M = Fh;
    if (I) {
      e: {
        for (T = 1, d = I[0]; d >= 10; d /= 10, T++);
        if (((y = P - T), y < 0))
          (y += Oe), (p = P), (h = I[(g = 0)]), (b = (h / M[T - p - 1]) % 10 | 0);
        else if (((g = Dh((y + 1) / Oe)), g >= I.length))
          if (U) {
            for (; I.length <= g; I.push(0));
            (h = b = 0), (T = 1), (y %= Oe), (p = y - Oe + 1);
          } else break e;
        else {
          for (h = d = I[g], T = 1; d >= 10; d /= 10, T++);
          (y %= Oe), (p = y - Oe + T), (b = p < 0 ? 0 : (h / M[T - p - 1]) % 10 | 0);
        }
        if (
          ((U = U || P < 0 || I[g + 1] != null || (p < 0 ? h : h % M[T - p - 1])),
          (U =
            C < 4
              ? (b || U) && (C == 0 || C == (R.s < 0 ? 3 : 2))
              : b > 5 ||
                (b == 5 &&
                  (C == 4 ||
                    U ||
                    (C == 6 && (y > 0 ? (p > 0 ? h / M[T - p] : 0) : I[g - 1]) % 10 & 1) ||
                    C == (R.s < 0 ? 8 : 7)))),
          P < 1 || !I[0])
        )
          return (
            (I.length = 0),
            U
              ? ((P -= R.e + 1), (I[0] = M[(Oe - (P % Oe)) % Oe]), (R.e = -P || 0))
              : (I[0] = R.e = 0),
            R
          );
        if (
          (y == 0
            ? ((I.length = g), (d = 1), g--)
            : ((I.length = g + 1),
              (d = M[Oe - y]),
              (I[g] = p > 0 ? xn((h / M[T - p]) % M[p]) * d : 0)),
          U)
        )
          for (;;)
            if (g == 0) {
              for (y = 1, p = I[0]; p >= 10; p /= 10, y++);
              for (p = I[0] += d, d = 1; p >= 10; p /= 10, d++);
              y != d && (R.e++, I[0] == Gr && (I[0] = 1));
              break;
            } else {
              if (((I[g] += d), I[g] != Gr)) break;
              (I[g--] = 0), (d = 1);
            }
        for (y = I.length; I[--y] === 0; I.pop());
      }
      R.e > x ? (R.c = R.e = null) : R.e < w && (R.c = [(R.e = 0)]);
    }
    return R;
  }
  function he(R) {
    var P,
      C = R.e;
    return C === null
      ? R.toString()
      : ((P = Ur(R.c)), (P = C <= u || C >= l ? Ip(P, C) : Dn(P, C, '0')), R.s < 0 ? '-' + P : P);
  }
  return (
    (o.absoluteValue = o.abs =
      function () {
        var R = new H(this);
        return R.s < 0 && (R.s = 1), R;
      }),
    (o.comparedTo = function (R, P) {
      return di(this, new H(R, P));
    }),
    (o.decimalPlaces = o.dp =
      function (R, P) {
        var C,
          U,
          T,
          y = this;
        if (R != null)
          return Ft(R, 0, Yt), P == null ? (P = c) : Ft(P, 0, 8), Y(new H(y), R + y.e + 1, P);
        if (!(C = y.c)) return null;
        if (((U = ((T = C.length - 1) - Fr(this.e / Oe)) * Oe), (T = C[T])))
          for (; T % 10 == 0; T /= 10, U--);
        return U < 0 && (U = 0), U;
      }),
    (o.dividedBy = o.div =
      function (R, P) {
        return e(this, new H(R, P), i, c);
      }),
    (o.dividedToIntegerBy = o.idiv =
      function (R, P) {
        return e(this, new H(R, P), 0, 1);
      }),
    (o.exponentiatedBy = o.pow =
      function (R, P) {
        var C,
          U,
          T,
          y,
          p,
          d,
          h,
          g,
          b,
          I = this;
        if (((R = new H(R)), R.c && !R.isInteger()))
          throw Error(_r + 'Exponent not an integer: ' + he(R));
        if (
          (P != null && (P = new H(P)),
          (d = R.e > 14),
          !I.c || !I.c[0] || (I.c[0] == 1 && !I.e && I.c.length == 1) || !R.c || !R.c[0])
        )
          return (b = new H(Math.pow(+he(I), d ? R.s * (2 - Rp(R)) : +he(R)))), P ? b.mod(P) : b;
        if (((h = R.s < 0), P)) {
          if (P.c ? !P.c[0] : !P.s) return new H(NaN);
          (U = !h && I.isInteger() && P.isInteger()), U && (I = I.mod(P));
        } else {
          if (
            R.e > 9 &&
            (I.e > 0 ||
              I.e < -1 ||
              (I.e == 0
                ? I.c[0] > 1 || (d && I.c[1] >= 24e7)
                : I.c[0] < 8e13 || (d && I.c[0] <= 9999975e7)))
          )
            return (y = I.s < 0 && Rp(R) ? -0 : 0), I.e > -1 && (y = 1 / y), new H(h ? 1 / y : y);
          O && (y = Dh(O / Oe + 2));
        }
        for (
          d
            ? ((C = new H(0.5)), h && (R.s = 1), (g = Rp(R)))
            : ((T = Math.abs(+he(R))), (g = T % 2)),
            b = new H(s);
          ;

        ) {
          if (g) {
            if (((b = b.times(I)), !b.c)) break;
            y ? b.c.length > y && (b.c.length = y) : U && (b = b.mod(P));
          }
          if (T) {
            if (((T = xn(T / 2)), T === 0)) break;
            g = T % 2;
          } else if (((R = R.times(C)), Y(R, R.e + 1, 1), R.e > 14)) g = Rp(R);
          else {
            if (((T = +he(R)), T === 0)) break;
            g = T % 2;
          }
          (I = I.times(I)), y ? I.c && I.c.length > y && (I.c.length = y) : U && (I = I.mod(P));
        }
        return U ? b : (h && (b = s.div(b)), P ? b.mod(P) : y ? Y(b, O, c, p) : b);
      }),
    (o.integerValue = function (R) {
      var P = new H(this);
      return R == null ? (R = c) : Ft(R, 0, 8), Y(P, P.e + 1, R);
    }),
    (o.isEqualTo = o.eq =
      function (R, P) {
        return di(this, new H(R, P)) === 0;
      }),
    (o.isFinite = function () {
      return !!this.c;
    }),
    (o.isGreaterThan = o.gt =
      function (R, P) {
        return di(this, new H(R, P)) > 0;
      }),
    (o.isGreaterThanOrEqualTo = o.gte =
      function (R, P) {
        return (P = di(this, new H(R, P))) === 1 || P === 0;
      }),
    (o.isInteger = function () {
      return !!this.c && Fr(this.e / Oe) > this.c.length - 2;
    }),
    (o.isLessThan = o.lt =
      function (R, P) {
        return di(this, new H(R, P)) < 0;
      }),
    (o.isLessThanOrEqualTo = o.lte =
      function (R, P) {
        return (P = di(this, new H(R, P))) === -1 || P === 0;
      }),
    (o.isNaN = function () {
      return !this.s;
    }),
    (o.isNegative = function () {
      return this.s < 0;
    }),
    (o.isPositive = function () {
      return this.s > 0;
    }),
    (o.isZero = function () {
      return !!this.c && this.c[0] == 0;
    }),
    (o.minus = function (R, P) {
      var C,
        U,
        T,
        y,
        p = this,
        d = p.s;
      if (((R = new H(R, P)), (P = R.s), !d || !P)) return new H(NaN);
      if (d != P) return (R.s = -P), p.plus(R);
      var h = p.e / Oe,
        g = R.e / Oe,
        b = p.c,
        I = R.c;
      if (!h || !g) {
        if (!b || !I) return b ? ((R.s = -P), R) : new H(I ? p : NaN);
        if (!b[0] || !I[0]) return I[0] ? ((R.s = -P), R) : new H(b[0] ? p : c == 3 ? -0 : 0);
      }
      if (((h = Fr(h)), (g = Fr(g)), (b = b.slice()), (d = h - g))) {
        for (
          (y = d < 0) ? ((d = -d), (T = b)) : ((g = h), (T = I)), T.reverse(), P = d;
          P--;
          T.push(0)
        );
        T.reverse();
      } else
        for (U = (y = (d = b.length) < (P = I.length)) ? d : P, d = P = 0; P < U; P++)
          if (b[P] != I[P]) {
            y = b[P] < I[P];
            break;
          }
      if (
        (y && ((T = b), (b = I), (I = T), (R.s = -R.s)),
        (P = (U = I.length) - (C = b.length)),
        P > 0)
      )
        for (; P--; b[C++] = 0);
      for (P = Gr - 1; U > d; ) {
        if (b[--U] < I[U]) {
          for (C = U; C && !b[--C]; b[C] = P);
          --b[C], (b[U] += Gr);
        }
        b[U] -= I[U];
      }
      for (; b[0] == 0; b.splice(0, 1), --g);
      return b[0] ? re(R, b, g) : ((R.s = c == 3 ? -1 : 1), (R.c = [(R.e = 0)]), R);
    }),
    (o.modulo = o.mod =
      function (R, P) {
        var C,
          U,
          T = this;
        return (
          (R = new H(R, P)),
          !T.c || !R.s || (R.c && !R.c[0])
            ? new H(NaN)
            : !R.c || (T.c && !T.c[0])
              ? new H(T)
              : (_ == 9
                  ? ((U = R.s), (R.s = 1), (C = e(T, R, 0, 3)), (R.s = U), (C.s *= U))
                  : (C = e(T, R, 0, _)),
                (R = T.minus(C.times(R))),
                !R.c[0] && _ == 1 && (R.s = T.s),
                R)
        );
      }),
    (o.multipliedBy = o.times =
      function (R, P) {
        var C,
          U,
          T,
          y,
          p,
          d,
          h,
          g,
          b,
          I,
          M,
          k,
          m,
          B,
          ce,
          E = this,
          F = E.c,
          W = (R = new H(R, P)).c;
        if (!F || !W || !F[0] || !W[0])
          return (
            !E.s || !R.s || (F && !F[0] && !W) || (W && !W[0] && !F)
              ? (R.c = R.e = R.s = null)
              : ((R.s *= E.s), !F || !W ? (R.c = R.e = null) : ((R.c = [0]), (R.e = 0))),
            R
          );
        for (
          U = Fr(E.e / Oe) + Fr(R.e / Oe),
            R.s *= E.s,
            h = F.length,
            I = W.length,
            h < I && ((m = F), (F = W), (W = m), (T = h), (h = I), (I = T)),
            T = h + I,
            m = [];
          T--;
          m.push(0)
        );
        for (B = Gr, ce = uo, T = I; --T >= 0; ) {
          for (C = 0, M = W[T] % ce, k = (W[T] / ce) | 0, p = h, y = T + p; y > T; )
            (g = F[--p] % ce),
              (b = (F[p] / ce) | 0),
              (d = k * g + b * M),
              (g = M * g + (d % ce) * ce + m[y] + C),
              (C = ((g / B) | 0) + ((d / ce) | 0) + k * b),
              (m[y--] = g % B);
          m[y] = C;
        }
        return C ? ++U : m.splice(0, 1), re(R, m, U);
      }),
    (o.negated = function () {
      var R = new H(this);
      return (R.s = -R.s || null), R;
    }),
    (o.plus = function (R, P) {
      var C,
        U = this,
        T = U.s;
      if (((R = new H(R, P)), (P = R.s), !T || !P)) return new H(NaN);
      if (T != P) return (R.s = -P), U.minus(R);
      var y = U.e / Oe,
        p = R.e / Oe,
        d = U.c,
        h = R.c;
      if (!y || !p) {
        if (!d || !h) return new H(T / 0);
        if (!d[0] || !h[0]) return h[0] ? R : new H(d[0] ? U : T * 0);
      }
      if (((y = Fr(y)), (p = Fr(p)), (d = d.slice()), (T = y - p))) {
        for (T > 0 ? ((p = y), (C = h)) : ((T = -T), (C = d)), C.reverse(); T--; C.push(0));
        C.reverse();
      }
      for (
        T = d.length, P = h.length, T - P < 0 && ((C = h), (h = d), (d = C), (P = T)), T = 0;
        P;

      )
        (T = ((d[--P] = d[P] + h[P] + T) / Gr) | 0), (d[P] = Gr === d[P] ? 0 : d[P] % Gr);
      return T && ((d = [T].concat(d)), ++p), re(R, d, p);
    }),
    (o.precision = o.sd =
      function (R, P) {
        var C,
          U,
          T,
          y = this;
        if (R != null && R !== !!R)
          return Ft(R, 1, Yt), P == null ? (P = c) : Ft(P, 0, 8), Y(new H(y), R, P);
        if (!(C = y.c)) return null;
        if (((T = C.length - 1), (U = T * Oe + 1), (T = C[T]))) {
          for (; T % 10 == 0; T /= 10, U--);
          for (T = C[0]; T >= 10; T /= 10, U++);
        }
        return R && y.e + 1 > U && (U = y.e + 1), U;
      }),
    (o.shiftedBy = function (R) {
      return Ft(R, -Uh, Uh), this.times('1e' + R);
    }),
    (o.squareRoot = o.sqrt =
      function () {
        var R,
          P,
          C,
          U,
          T,
          y = this,
          p = y.c,
          d = y.s,
          h = y.e,
          g = i + 4,
          b = new H('0.5');
        if (d !== 1 || !p || !p[0])
          return new H(!d || (d < 0 && (!p || p[0])) ? NaN : p ? y : 1 / 0);
        if (
          ((d = Math.sqrt(+he(y))),
          d == 0 || d == 1 / 0
            ? ((P = Ur(p)),
              (P.length + h) % 2 == 0 && (P += '0'),
              (d = Math.sqrt(+P)),
              (h = Fr((h + 1) / 2) - (h < 0 || h % 2)),
              d == 1 / 0
                ? (P = '5e' + h)
                : ((P = d.toExponential()), (P = P.slice(0, P.indexOf('e') + 1) + h)),
              (C = new H(P)))
            : (C = new H(d + '')),
          C.c[0])
        ) {
          for (h = C.e, d = h + g, d < 3 && (d = 0); ; )
            if (
              ((T = C),
              (C = b.times(T.plus(e(y, T, g, 1)))),
              Ur(T.c).slice(0, d) === (P = Ur(C.c)).slice(0, d))
            )
              if (
                (C.e < h && --d, (P = P.slice(d - 3, d + 1)), P == '9999' || (!U && P == '4999'))
              ) {
                if (!U && (Y(T, T.e + i + 2, 0), T.times(T).eq(y))) {
                  C = T;
                  break;
                }
                (g += 4), (d += 4), (U = 1);
              } else {
                (!+P || (!+P.slice(1) && P.charAt(0) == '5')) &&
                  (Y(C, C.e + i + 2, 1), (R = !C.times(C).eq(y)));
                break;
              }
        }
        return Y(C, C.e + i + 1, c, R);
      }),
    (o.toExponential = function (R, P) {
      return R != null && (Ft(R, 0, Yt), R++), ae(this, R, P, 1);
    }),
    (o.toFixed = function (R, P) {
      return R != null && (Ft(R, 0, Yt), (R = R + this.e + 1)), ae(this, R, P);
    }),
    (o.toFormat = function (R, P, C) {
      var U,
        T = this;
      if (C == null)
        R != null && P && typeof P == 'object'
          ? ((C = P), (P = null))
          : R && typeof R == 'object'
            ? ((C = R), (R = P = null))
            : (C = D);
      else if (typeof C != 'object') throw Error(_r + 'Argument not an object: ' + C);
      if (((U = T.toFixed(R, P)), T.c)) {
        var y,
          p = U.split('.'),
          d = +C.groupSize,
          h = +C.secondaryGroupSize,
          g = C.groupSeparator || '',
          b = p[0],
          I = p[1],
          M = T.s < 0,
          k = M ? b.slice(1) : b,
          m = k.length;
        if ((h && ((y = d), (d = h), (h = y), (m -= y)), d > 0 && m > 0)) {
          for (y = m % d || d, b = k.substr(0, y); y < m; y += d) b += g + k.substr(y, d);
          h > 0 && (b += g + k.slice(y)), M && (b = '-' + b);
        }
        U = I
          ? b +
            (C.decimalSeparator || '') +
            ((h = +C.fractionGroupSize)
              ? I.replace(
                  new RegExp('\\d{' + h + '}\\B', 'g'),
                  '$&' + (C.fractionGroupSeparator || '')
                )
              : I)
          : b;
      }
      return (C.prefix || '') + U + (C.suffix || '');
    }),
    (o.toFraction = function (R) {
      var P,
        C,
        U,
        T,
        y,
        p,
        d,
        h,
        g,
        b,
        I,
        M,
        k = this,
        m = k.c;
      if (R != null && ((d = new H(R)), (!d.isInteger() && (d.c || d.s !== 1)) || d.lt(s)))
        throw Error(
          _r + 'Argument ' + (d.isInteger() ? 'out of range: ' : 'not an integer: ') + he(d)
        );
      if (!m) return new H(k);
      for (
        P = new H(s),
          g = C = new H(s),
          U = h = new H(s),
          M = Ur(m),
          y = P.e = M.length - k.e - 1,
          P.c[0] = Fh[(p = y % Oe) < 0 ? Oe + p : p],
          R = !R || d.comparedTo(P) > 0 ? (y > 0 ? P : g) : d,
          p = x,
          x = 1 / 0,
          d = new H(M),
          h.c[0] = 0;
        (b = e(d, P, 0, 1)), (T = C.plus(b.times(U))), T.comparedTo(R) != 1;

      )
        (C = U),
          (U = T),
          (g = h.plus(b.times((T = g)))),
          (h = T),
          (P = d.minus(b.times((T = P)))),
          (d = T);
      return (
        (T = e(R.minus(C), U, 0, 1)),
        (h = h.plus(T.times(g))),
        (C = C.plus(T.times(U))),
        (h.s = g.s = k.s),
        (y = y * 2),
        (I =
          e(g, U, y, c)
            .minus(k)
            .abs()
            .comparedTo(e(h, C, y, c).minus(k).abs()) < 1
            ? [g, U]
            : [h, C]),
        (x = p),
        I
      );
    }),
    (o.toNumber = function () {
      return +he(this);
    }),
    (o.toPrecision = function (R, P) {
      return R != null && Ft(R, 1, Yt), ae(this, R, P, 2);
    }),
    (o.toString = function (R) {
      var P,
        C = this,
        U = C.s,
        T = C.e;
      return (
        T === null
          ? U
            ? ((P = 'Infinity'), U < 0 && (P = '-' + P))
            : (P = 'NaN')
          : (R == null
              ? (P = T <= u || T >= l ? Ip(Ur(C.c), T) : Dn(Ur(C.c), T, '0'))
              : R === 10 && G
                ? ((C = Y(new H(C), i + T + 1, c)), (P = Dn(Ur(C.c), C.e, '0')))
                : (Ft(R, 2, j.length, 'Base'), (P = t(Dn(Ur(C.c), T, '0'), 10, R, U, !0))),
            U < 0 && C.c[0] && (P = '-' + P)),
        P
      );
    }),
    (o.valueOf = o.toJSON =
      function () {
        return he(this);
      }),
    (o._isBigNumber = !0),
    (o[Symbol.toStringTag] = 'BigNumber'),
    (o[Symbol.for('nodejs.util.inspect.custom')] = o.valueOf),
    r != null && H.set(r),
    H
  );
}
function Fr(r) {
  var e = r | 0;
  return r > 0 || r === e ? e : e - 1;
}
function Ur(r) {
  for (var e, t, n = 1, o = r.length, s = r[0] + ''; n < o; ) {
    for (e = r[n++] + '', t = Oe - e.length; t--; e = '0' + e);
    s += e;
  }
  for (o = s.length; s.charCodeAt(--o) === 48; );
  return s.slice(0, o + 1 || 1);
}
function di(r, e) {
  var t,
    n,
    o = r.c,
    s = e.c,
    i = r.s,
    c = e.s,
    u = r.e,
    l = e.e;
  if (!i || !c) return null;
  if (((t = o && !o[0]), (n = s && !s[0]), t || n)) return t ? (n ? 0 : -c) : i;
  if (i != c) return i;
  if (((t = i < 0), (n = u == l), !o || !s)) return n ? 0 : !o ^ t ? 1 : -1;
  if (!n) return (u > l) ^ t ? 1 : -1;
  for (c = (u = o.length) < (l = s.length) ? u : l, i = 0; i < c; i++)
    if (o[i] != s[i]) return (o[i] > s[i]) ^ t ? 1 : -1;
  return u == l ? 0 : (u > l) ^ t ? 1 : -1;
}
function Ft(r, e, t, n) {
  if (r < e || r > t || r !== xn(r))
    throw Error(
      _r +
        (n || 'Argument') +
        (typeof r == 'number'
          ? r < e || r > t
            ? ' out of range: '
            : ' not an integer: '
          : ' not a primitive number: ') +
        String(r)
    );
}
function Rp(r) {
  var e = r.c.length - 1;
  return Fr(r.e / Oe) == e && r.c[e] % 2 != 0;
}
function Ip(r, e) {
  return (r.length > 1 ? r.charAt(0) + '.' + r.slice(1) : r) + (e < 0 ? 'e' : 'e+') + e;
}
function Dn(r, e, t) {
  var n, o;
  if (e < 0) {
    for (o = t + '.'; ++e; o += t);
    r = o + r;
  } else if (((n = r.length), ++e > n)) {
    for (o = t, e -= n; --e; o += t);
    r += o;
  } else e < n && (r = r.slice(0, e) + '.' + r.slice(e));
  return r;
}
var Xt = KE(),
  VE = Xt;
Xt.config({ EXPONENTIAL_AT: 1e3, DECIMAL_PLACES: 78 });
f();
var DA = _e(OA()),
  Rs = _e(qA());
(0, DA.default)(Rs.default.localeData('en'), {
  abbreviations: { thousand: 'K', million: 'M', billion: 'B', trillion: 'T' },
});
f();
f();
f();
f();
f();
f();
f();
f();
var UA = oD;
function oD(r, e) {
  if (typeof r != 'function') throw new Error('`callback` should be a function');
  if (e !== void 0 && typeof e != 'function') throw new Error('`resolver` should be a function');
  var t = {},
    n = function () {
      var o = Array.prototype.slice.call(arguments),
        s = e ? e.apply(this, o) : JSON.stringify(o);
      return s in t || (t[s] = r.apply(this, o)), t[s];
    };
  return (n.cache = t), n;
}
var sD = (...r) => {
    let e = r.map((t) => (t instanceof Map || t instanceof Set ? Array.from(t) : t));
    return JSON.stringify(e);
  },
  tm = (r, e = { forceRefresh: !1 }) => {
    let { resolver: t = sD } = e,
      n = UA(r, t),
      o = function (...s) {
        if (e.forceRefresh) {
          let i = t(...s);
          delete n.cache[i];
        }
        return n.apply(this, s);
      };
    return (o.cache = n.cache), o;
  };
var iD = (r) => new Xt(10).pow(r),
  yi = tm(iD);
f();
f();
f();
f();
f();
f();
f();
f();
f();
var rm = _e(qn()),
  Fie = rm.default.createContext(!1);
f();
var nm = _e(qn()),
  Wie = nm.default.createContext(!1);
f();
function om(r) {
  try {
    let e = new URL(r);
    return !['javascript:', 'data:', 'vbscript:'].includes(e.protocol.toLowerCase());
  } catch {
    return !1;
  }
}
var WA = a.literal('phantom_deep_link_browse'),
  KA = a.object({
    url: a.string().refine(
      (r) => {
        try {
          let e = decodeURIComponent(r);
          return om(e);
        } catch {
          return !1;
        }
      },
      {
        message:
          'The browse URL is improperly encoded, uses an unsafe protocol (must be HTTP/HTTPS), or is otherwise invalid.',
        path: ['url'],
      }
    ),
    ref: a.string(),
  }),
  VA = a.null(),
  $A = z,
  bD = L(WA, KA),
  wD = N(VA, $A),
  vD = 'browse/:url';
var im = {};
$(im, {
  error: () => JA,
  method: () => GA,
  params: () => YA,
  request: () => SD,
  response: () => ED,
  result: () => ZA,
});
f();
var GA = a.literal('phantom_deep_link_swap'),
  YA = a.object({ buy: a.string(), sell: a.string().optional(), amount: a.string().optional() }),
  ZA = a.null(),
  JA = z,
  SD = L(GA, YA),
  ED = N(ZA, JA);
var am = {};
$(am, {
  error: () => tR,
  method: () => XA,
  params: () => QA,
  request: () => _D,
  response: () => AD,
  result: () => eR,
});
f();
var XA = a.literal('phantom_deep_link_fungible'),
  QA = a.object({ token: a.string() }),
  eR = a.null(),
  tR = z,
  _D = L(XA, QA),
  AD = N(eR, tR);
var cm = {};
$(cm, {
  error: () => sR,
  method: () => rR,
  params: () => nR,
  path: () => kD,
  request: () => RD,
  response: () => ID,
  result: () => oR,
});
f();
var rR = a.literal('phantom_deep_link_user'),
  nR = a.object({ username: a.string(), action: a.enum(['send']).optional() }),
  oR = a.null(),
  sR = z,
  RD = L(rR, nR),
  ID = N(oR, sR),
  kD = 'user/:username{/:action}';
var um = {};
$(um, {
  error: () => uR,
  method: () => iR,
  params: () => aR,
  path: () => BD,
  request: () => TD,
  response: () => PD,
  result: () => cR,
});
f();
var iR = a.literal('phantom_deep_link_notification_center'),
  aR = a.object({}),
  cR = a.null(),
  uR = z,
  TD = L(iR, aR),
  PD = N(cR, uR),
  BD = 'notification_center';
var pm = {};
$(pm, {
  error: () => dR,
  method: () => pR,
  params: () => fR,
  request: () => MD,
  response: () => zD,
  responsePayload: () => LD,
  result: () => lR,
});
f();
var pR = a.literal('phantom_deep_link_connect'),
  fR = a.object({
    app_url: ou,
    dapp_encryption_public_key: Aa,
    redirect_link: Ia,
    cluster: su.optional(),
  }),
  lR = a.object({ phantom_encryption_public_key: nu, nonce: ci, data: Ra }),
  dR = z,
  MD = L(pR, fR),
  zD = N(lR, dR),
  LD = a.object({ public_key: me, session: me });
var fm = {};
$(fm, {
  error: () => gR,
  method: () => hR,
  params: () => mR,
  request: () => ND,
  requestPayload: () => CD,
  response: () => OD,
  result: () => yR,
});
f();
var hR = a.literal('phantom_deep_link_disconnect'),
  mR = Dr,
  yR = a.null(),
  gR = z,
  ND = L(hR, mR),
  OD = N(yR, gR),
  CD = a.object({ session: me });
var lm = {};
$(lm, {
  error: () => vR,
  method: () => xR,
  params: () => bR,
  request: () => qD,
  requestPayload: () => UD,
  response: () => DD,
  responsePayload: () => FD,
  result: () => wR,
});
f();
var xR = a.literal('phantom_deep_link_signMessage'),
  bR = Dr,
  wR = gn,
  vR = z,
  qD = L(xR, bR),
  DD = N(wR, vR),
  UD = a.object({
    session: me,
    message: me,
    display: a.union([a.literal('utf8'), a.literal('hex')]).optional(),
  }),
  FD = a.object({ signature: me, publicKey: me });
var dm = {};
$(dm, {
  error: () => AR,
  method: () => SR,
  params: () => ER,
  request: () => jD,
  requestPayload: () => WD,
  response: () => HD,
  responsePayload: () => KD,
  result: () => _R,
});
f();
var SR = a.literal('phantom_deep_link_signIn'),
  ER = a.object({
    app_url: ou,
    dapp_encryption_public_key: Aa,
    redirect_link: Ia,
    cluster: su.optional(),
    payload: nh,
  }),
  _R = a.object({ phantom_encryption_public_key: nu, nonce: ci, data: Ra }),
  AR = z,
  jD = L(SR, ER),
  HD = N(_R, AR),
  WD = As,
  KD = a.object({ address: me, signedMessage: me, signature: me, session: me });
var hm = {};
$(hm, {
  error: () => TR,
  method: () => RR,
  params: () => IR,
  request: () => VD,
  requestPayload: () => GD,
  response: () => $D,
  responsePayload: () => YD,
  result: () => kR,
});
f();
var RR = a.literal('phantom_deep_link_signTransaction'),
  IR = Dr,
  kR = gn,
  TR = z,
  VD = L(RR, IR),
  $D = N(kR, TR),
  GD = a.object({ session: me, transaction: me }),
  YD = a.object({ transaction: me });
var mm = {};
$(mm, {
  error: () => zR,
  method: () => PR,
  params: () => BR,
  request: () => ZD,
  requestPayload: () => XD,
  response: () => JD,
  responsePayload: () => QD,
  result: () => MR,
});
f();
var PR = a.literal('phantom_deep_link_signAllTransactions'),
  BR = Dr,
  MR = gn,
  zR = z,
  ZD = L(PR, BR),
  JD = N(MR, zR),
  XD = a.object({ session: me, transactions: a.array(me) }),
  QD = a.object({ transactions: a.array(me) });
var ym = {};
$(ym, {
  error: () => CR,
  method: () => LR,
  params: () => NR,
  request: () => eU,
  requestPayload: () => rU,
  response: () => tU,
  responsePayload: () => nU,
  result: () => OR,
});
f();
var LR = a.literal('phantom_deep_link_signAndSendTransaction'),
  NR = Dr,
  OR = gn,
  CR = z,
  eU = L(LR, NR),
  tU = N(OR, CR),
  rU = a.object({ session: me, transaction: me, sendOptions: Cn.optional() }),
  nU = a.object({ signature: me });
var gm = {};
$(gm, {
  error: () => FR,
  method: () => qR,
  params: () => DR,
  request: () => oU,
  requestPayload: () => iU,
  response: () => sU,
  responsePayload: () => aU,
  result: () => UR,
});
f();
var qR = a.literal('phantom_deep_link_signAndSendAllTransactions'),
  DR = Dr,
  UR = gn,
  FR = z,
  oU = L(qR, DR),
  sU = N(UR, FR),
  iU = a.object({ session: me, transactions: a.array(me), sendOptions: Cn.optional() }),
  aU = a.object({ signatures: a.array(a.union([me, a.null()])) });
var xm = {};
$(xm, {
  error: () => KR,
  method: () => jR,
  params: () => HR,
  path: () => pU,
  request: () => cU,
  response: () => uU,
  result: () => WR,
});
f();
var jR = a.literal('phantom_deep_link_tokens'),
  HR = a.object({
    chain: a.string(),
    address: a.string().optional(),
    referralId: a.string().optional(),
  }),
  WR = a.null(),
  KR = z,
  cU = L(jR, HR),
  uU = N(WR, KR),
  pU = 'tokens/:chain{/:address}';
var bm = {};
$(bm, {
  error: () => YR,
  method: () => VR,
  params: () => $R,
  request: () => fU,
  response: () => lU,
  result: () => GR,
});
f();
var VR = a.literal('phantom_deep_link_onboard'),
  $R = a.object({ value: a.string().optional(), accounts: a.string().optional() }),
  GR = a.null(),
  YR = z,
  fU = L(VR, $R),
  lU = N(GR, YR);
var wm = {};
$(wm, {
  error: () => QR,
  method: () => ZR,
  params: () => JR,
  request: () => dU,
  response: () => hU,
  result: () => XR,
});
f();
var ZR = a.literal('phantom_deep_link_onramp'),
  JR = a.object({
    buy: a.string(),
    amount: a.string().optional(),
    redirectURL: a.string().url().optional(),
  }),
  XR = a.null(),
  QR = z,
  dU = L(ZR, JR),
  hU = N(XR, QR);
var vm = {};
$(vm, {
  error: () => nI,
  method: () => eI,
  params: () => tI,
  request: () => mU,
  response: () => yU,
  result: () => rI,
});
f();
var eI = a.literal('phantom_deep_link_navigate'),
  tI = a.object({ route: a.string(), params: a.any().optional() }),
  rI = a.null(),
  nI = z,
  mU = L(eI, tI),
  yU = N(rI, nI);
var Sm = {};
$(Sm, {
  error: () => aI,
  method: () => oI,
  params: () => sI,
  path: () => bU,
  request: () => gU,
  response: () => xU,
  result: () => iI,
});
f();
var oI = a.literal('phantom_deep_link_social'),
  sI = a.object({}),
  iI = a.null(),
  aI = z,
  gU = L(oI, sI),
  xU = N(iI, aI),
  bU = 'social';
f();
var Em = {};
$(Em, {
  error: () => dI,
  method: () => pI,
  params: () => fI,
  request: () => vU,
  response: () => SU,
  result: () => lI,
});
f();
f();
var cI = ((c) => (
    (c.BitcoinTaproot = 'bip122_p2tr'),
    (c.BitcoinNativeSegwit = 'bip122_p2wpkh'),
    (c.BitcoinNestedSegwit = 'bip122_p2sh'),
    (c.BitcoinLegacy = 'bip122_p2pkh'),
    (c.Solana = 'solana'),
    (c.EVM = 'eip155'),
    (c.Sui = 'sui'),
    c
  ))(cI || {}),
  uI = a.object({ type: a.nativeEnum(cI), address: a.string() });
var pI = a.literal('phantom_getUser'),
  fI = a.object({}),
  lI = a
    .object({ addresses: a.array(uI) })
    .nullish()
    .default(null),
  dI = z,
  vU = L(pI, fI),
  SU = N(lI, dI);
var _m = {};
$(_m, {
  error: () => gI,
  method: () => hI,
  params: () => mI,
  request: () => EU,
  response: () => _U,
  result: () => yI,
});
f();
var hI = a.literal('phantom_login'),
  mI = a.object({}),
  yI = a.null(),
  gI = z,
  EU = L(hI, mI),
  _U = N(yI, gI);
var Am = {};
$(Am, {
  error: () => vI,
  method: () => xI,
  params: () => bI,
  request: () => AU,
  response: () => RU,
  result: () => wI,
});
f();
var xI = a.literal('phantom_logout'),
  bI = a.object({}),
  wI = a.null(),
  vI = z,
  AU = L(xI, bI),
  RU = N(wI, vI);
var jr = {};
$(jr, {
  common: () => au,
  sol_connect: () => ka,
  sol_disconnect: () => Lp,
  sol_signAllTransactions: () => Np,
  sol_signAndSendAllTransactions: () => Ta,
  sol_signAndSendTransaction: () => Op,
  sol_signIn: () => Cp,
  sol_signMessage: () => Pa,
  sol_signTransaction: () => qp,
});
f();
var Lp = {};
$(Lp, {
  error: () => AI,
  method: () => SI,
  params: () => EI,
  request: () => kU,
  response: () => TU,
  result: () => _I,
});
f();
var SI = a.literal('sol_disconnect'),
  EI = ii.optional(),
  _I = a.null(),
  AI = z,
  kU = L(SI, EI),
  TU = N(_I, AI);
var Np = {};
$(Np, {
  error: () => TI,
  method: () => RI,
  params: () => II,
  request: () => PU,
  response: () => BU,
  result: () => kI,
});
f();
var RI = a.literal('sol_signAllTransactions'),
  II = a.object({ transactions: a.array(me) }),
  kI = a.array(
    a.object({
      signature: a.string(),
      transaction: me,
      version: a.union([a.literal('legacy'), a.number()]),
    })
  ),
  TI = z,
  PU = L(RI, II),
  BU = N(kI, TI);
var Op = {};
$(Op, {
  error: () => zI,
  method: () => PI,
  params: () => BI,
  request: () => MU,
  response: () => zU,
  result: () => MI,
});
f();
var PI = a.literal('sol_signAndSendTransaction'),
  BI = a.object({
    transaction: me,
    options: Cn,
    showConfirmation: a.boolean().optional(),
    postAction: ui.optional(),
    isSharingEligible: a.boolean().optional(),
  }),
  MI = a.object({ signature: a.string(), publicKey: a.string() }),
  zI = z,
  MU = L(PI, BI),
  zU = N(MI, zI);
var Cp = {};
$(Cp, {
  error: () => CI,
  method: () => LI,
  params: () => NI,
  request: () => LU,
  response: () => NU,
  result: () => OI,
});
f();
var LI = a.literal('sol_signIn'),
  NI = a.object({ signInData: As }),
  OI = a.object({ address: a.string(), signedMessage: a.string(), signature: a.string() }),
  CI = z,
  LU = L(LI, NI),
  NU = N(OI, CI);
var qp = {};
$(qp, {
  error: () => FI,
  method: () => qI,
  params: () => DI,
  request: () => OU,
  response: () => CU,
  result: () => UI,
});
f();
var qI = a.literal('sol_signTransaction'),
  DI = a.object({
    transaction: me,
    isSharingEligible: a.boolean().optional(),
    transactionSharingDelayMs: a.number().optional(),
  }),
  UI = a.object({
    signature: a.string(),
    transaction: me,
    version: a.union([a.literal('legacy'), a.number()]),
  }),
  FI = z,
  OU = L(qI, DI),
  CU = N(UI, FI);
f();
var Lm = {};
$(Lm, {
  error: () => KI,
  method: () => jI,
  params: () => HI,
  request: () => UU,
  response: () => FU,
  result: () => WI,
});
f();
f();
var Dp = a.object({
    identityName: a.string().nullish(),
    identityUri: a.string().nullish(),
    iconRelativeUri: a.string().nullish(),
  }),
  qU = a.object({ identity: Dp, authorizationScope: a.string() }),
  Up = a.object({ verifiableIdentity: qU, publicKey: a.string(), payloads: a.array(a.string()) }),
  Rm = a.object({ identity: Dp, cluster: a.string().optional() }),
  Im = a.object({ verifiableIdentity: Dp }),
  km = a.object({ signPayloads: Up, minContextSlot: a.number() }),
  Tm = a.object({ signPayloads: Up }),
  Pm = a.object({ signPayloads: Up }),
  Rue = a.union([Rm, Im, km, Tm, Pm]),
  Bm = a.union([
    a.object({
      type: a.literal('AUTHORIZE_SUCCESS'),
      publicKey: a.string(),
      accountLabel: a.string().optional(),
      walletUriBase: a.string().optional(),
      scope: a.string().optional(),
    }),
    a.object({ type: a.literal('AUTHORIZE_DECLINE') }),
  ]),
  Mm = a.union([
    a.object({ type: a.literal('REAUTHORIZE_SUCCESS') }),
    a.object({ type: a.literal('REAUTHORIZE_DECLINE') }),
  ]),
  Ca = a.union([
    a.object({ type: a.literal('SIGN_PAYLOADS_SUCCESS'), signedPayloads: a.array(a.string()) }),
    a.object({ type: a.literal('SIGN_PAYLOADS_DECLINE') }),
    a.object({
      type: a.literal('SIGN_PAYLOADS_ERROR_INVALID_PAYLOADS'),
      valid: a.array(a.boolean()),
    }),
    a.object({ type: a.literal('SIGN_PAYLOADS_ERROR_AUTHORIZATION_NOT_VALID') }),
    a.object({ type: a.literal('SIGN_PAYLOADS_ERROR_TOO_MANY_PAYLOADS') }),
  ]),
  zm = a.union([
    a.object({
      type: a.literal('SIGN_AND_SEND_TRANSACTIONS_SUCCESS'),
      signedPayloads: a.array(a.string()),
    }),
    a.object({ type: a.literal('SIGN_AND_SEND_TRANSACTIONS_DECLINE') }),
    a.object({
      type: a.literal('SIGN_AND_SEND_TRANSACTIONS_ERROR_INVALID_PAYLOADS'),
      valid: a.array(a.boolean()),
    }),
    a.object({
      type: a.literal('SIGN_AND_SEND_TRANSACTIONS_ERROR_NOT_SUBMITTED'),
      signatures: a.array(a.string()),
    }),
    a.object({ type: a.literal('SIGN_AND_SEND_TRANSACTIONS_ERROR_TOO_MANY_PAYLOADS') }),
    a.object({ type: a.literal('SIGN_AND_SEND_TRANSACTIONS_ERROR_AUTHORIZATION_NOT_VALID') }),
  ]),
  DU = a.union([Bm, Mm, Ca, zm]);
var jI = a.literal('sol_mwa_authorize'),
  HI = Rm,
  WI = Bm,
  KI = z,
  UU = L(jI, HI),
  FU = N(WI, KI);
var Nm = {};
$(Nm, {
  error: () => YI,
  method: () => VI,
  params: () => $I,
  request: () => jU,
  response: () => HU,
  result: () => GI,
});
f();
var VI = a.literal('sol_mwa_reauthorize'),
  $I = Im,
  GI = Mm,
  YI = z,
  jU = L(VI, $I),
  HU = N(GI, YI);
var Om = {};
$(Om, {
  error: () => QI,
  method: () => ZI,
  params: () => JI,
  request: () => WU,
  response: () => KU,
  result: () => XI,
});
f();
var ZI = a.literal('sol_mwa_sign_transactions'),
  JI = Tm,
  XI = Ca,
  QI = z,
  WU = L(ZI, JI),
  KU = N(XI, QI);
var Cm = {};
$(Cm, {
  error: () => nk,
  method: () => ek,
  params: () => tk,
  request: () => VU,
  response: () => $U,
  result: () => rk,
});
f();
var ek = a.literal('sol_mwa_sign_messages'),
  tk = Pm,
  rk = Ca,
  nk = z,
  VU = L(ek, tk),
  $U = N(rk, nk);
var qm = {};
$(qm, {
  error: () => ak,
  method: () => ok,
  params: () => sk,
  request: () => GU,
  response: () => YU,
  result: () => ik,
});
f();
var ok = a.literal('sol_mwa_sign_and_send_transactions'),
  sk = km,
  ik = zm,
  ak = z,
  GU = L(ok, sk),
  YU = N(ik, ak);
f();
var Dm = {};
$(Dm, {
  error: () => fk,
  method: () => ck,
  params: () => uk,
  request: () => JU,
  response: () => XU,
  result: () => pk,
});
f();
var ck = a.literal('sol_pay_transfer'),
  uk = a.object({
    amount: a.instanceof(VE).optional(),
    recipient: a.string(),
    splToken: a.string().optional(),
    reference: a.array(a.string()).optional(),
    memo: a.string().optional(),
    label: a.string().optional(),
    message: a.string().optional(),
  }),
  pk = a.null(),
  fk = z,
  JU = L(ck, uk),
  XU = N(pk, fk);
var Um = {};
$(Um, {
  error: () => mk,
  method: () => lk,
  params: () => dk,
  request: () => QU,
  response: () => e5,
  result: () => hk,
});
f();
var lk = a.literal('sol_pay_transaction'),
  dk = a.object({ link: a.string().url() }),
  hk = a.null(),
  mk = z,
  QU = L(lk, dk),
  e5 = N(hk, mk);
var Kp = {};
$(Kp, {
  sui_requestAccounts: () => Fp,
  sui_signAndExecuteTransaction: () => Wp,
  sui_signMessage: () => Hp,
  sui_signTransaction: () => jp,
});
f();
var Fp = {};
$(Fp, {
  error: () => bk,
  method: () => yk,
  params: () => gk,
  request: () => r5,
  response: () => n5,
  result: () => xk,
});
f();
var yk = a.literal('sui_requestAccounts'),
  gk = a.tuple([]),
  xk = _s,
  bk = z,
  r5 = L(yk, gk),
  n5 = N(xk, bk);
var jp = {};
$(jp, {
  error: () => Ek,
  method: () => wk,
  params: () => vk,
  request: () => o5,
  response: () => s5,
  result: () => Sk,
});
f();
var wk = a.literal('sui_signTransaction'),
  vk = a.object({ transaction: a.string(), address: a.string(), networkID: a.string() }),
  Sk = a.object({ transaction: a.string(), signature: a.string() }),
  Ek = z,
  o5 = L(wk, vk),
  s5 = N(Sk, Ek);
var Hp = {};
$(Hp, {
  error: () => Ik,
  method: () => _k,
  params: () => Ak,
  request: () => i5,
  response: () => a5,
  result: () => Rk,
});
f();
var _k = a.literal('sui_signMessage'),
  Ak = a.object({ message: a.instanceof(Uint8Array), address: a.string() }),
  Rk = a.object({ message: a.string(), signature: a.string() }),
  Ik = z,
  i5 = L(_k, Ak),
  a5 = N(Rk, Ik);
var Wp = {};
$(Wp, {
  error: () => Bk,
  method: () => kk,
  params: () => Tk,
  request: () => c5,
  response: () => u5,
  result: () => Pk,
});
f();
var kk = a.literal('sui_signAndExecuteTransaction'),
  Tk = a.object({ transaction: a.string(), address: a.string(), networkID: a.string() }),
  Pk = a.object({
    transaction: a.string(),
    signature: a.string(),
    digest: a.string(),
    effects: a.string(),
  }),
  Bk = z,
  c5 = L(kk, Tk),
  u5 = N(Pk, Bk);
f();
var Fm = {};
$(Fm, {
  error: () => Nk,
  method: () => Mk,
  params: () => zk,
  request: () => p5,
  response: () => f5,
  result: () => Lk,
});
f();
var Mk = a.literal('user_approveBtcRequestAccounts'),
  zk = a.tuple([Ie]),
  Lk = a.null(),
  Nk = z,
  p5 = L(Mk, zk),
  f5 = N(Lk, Nk);
var jm = {};
$(jm, {
  error: () => Dk,
  method: () => Ok,
  params: () => Ck,
  request: () => l5,
  response: () => d5,
  result: () => qk,
});
f();
var Ok = a.literal('user_approveBtcSignPSBT'),
  Ck = a.tuple([
    Ie,
    a.object({
      psbt: a.instanceof(Uint8Array),
      inputsToSign: a.array(
        a.object({
          address: a.string(),
          signingIndexes: a.array(a.number()),
          sigHash: a.number().optional(),
        })
      ),
      finalize: a.boolean(),
    }),
  ]),
  qk = a.discriminatedUnion('type', [
    a.object({ type: a.literal('signAndSend') }),
    a.object({ type: a.literal('send'), signature: a.instanceof(Uint8Array) }),
  ]),
  Dk = z,
  l5 = L(Ok, Ck),
  d5 = N(qk, Dk);
var Hm = {};
$(Hm, {
  error: () => Hk,
  method: () => Uk,
  params: () => Fk,
  request: () => h5,
  response: () => m5,
  result: () => jk,
});
f();
var Uk = a.literal('user_approveBtcSignMessage'),
  Fk = a.tuple([Ie, a.object({ message: a.instanceof(Uint8Array) })]),
  jk = a.discriminatedUnion('type', [
    a.object({ type: a.literal('signAndSend') }),
    a.object({
      type: a.literal('send'),
      signature: a.instanceof(Uint8Array),
      signedMessage: a.instanceof(Uint8Array),
    }),
  ]),
  Hk = z,
  h5 = L(Uk, Fk),
  m5 = N(jk, Hk);
var Wm = {};
$(Wm, {
  error: () => $k,
  method: () => Wk,
  params: () => Kk,
  request: () => y5,
  response: () => g5,
  result: () => Vk,
});
f();
var Wk = a.literal('user_approveEthRequestAccounts'),
  Kk = a.tuple([Ie]),
  Vk = a.null(),
  $k = z,
  y5 = L(Wk, Kk),
  g5 = N(Vk, $k);
var Km = {};
$(Km, {
  error: () => Jk,
  method: () => Gk,
  params: () => Yk,
  request: () => x5,
  response: () => b5,
  result: () => Zk,
});
f();
var Gk = a.literal('user_approveWalletRequestPermissions'),
  Yk = a.tuple([Ie]),
  Zk = a.null(),
  Jk = z,
  x5 = L(Gk, Yk),
  b5 = N(Zk, Jk);
var Vm = {};
$(Vm, {
  error: () => tT,
  method: () => Xk,
  params: () => Qk,
  request: () => w5,
  response: () => v5,
  result: () => eT,
});
f();
f();
var or = ((_) => (
  (_.OK = 'OK'),
  (_.FeatureKilled = 'FEATURE_KILLED'),
  (_.WalletLocked = 'WALLET_LOCKED'),
  (_.TabNotFocused = 'TAB_NOT_FOCUSED'),
  (_.Disabled = 'DISABLED'),
  (_.SessionExpired = 'SESSION_EXPIRED'),
  (_.RateLimitExceeded = 'RATE_LIMIT_EXCEEDED'),
  (_.SimulationFailed = 'SIMULATION_FAILED'),
  (_.UnsupportedDapp = 'UNSUPPORTED_DAPP'),
  (_.UnsupportedNetworkId = 'UNSUPPORTED_NETWORK_ID'),
  (_.UnsupportedMethod = 'UNSUPPORTED_METHOD'),
  (_.Unimplemented = 'UNIMPLEMENTED'),
  (_.Unknown = 'UNKNOWN'),
  _
))(or || {});
var Xk = a.literal('user_approveEthSendTransaction'),
  Qk = a.tuple([Ie, a.object({ transaction: Nn, autoConfirmStatusCode: a.nativeEnum(or) })]),
  eT = a.discriminatedUnion('type', [
    a.object({ type: a.literal('signAndSend'), maxFeePerGas: J, maxPriorityFeePerGas: J }),
    a.object({ type: a.literal('send'), signature: Je, maxFeePerGas: J, maxPriorityFeePerGas: J }),
  ]),
  tT = z,
  w5 = L(Xk, Qk),
  v5 = N(eT, tT);
var $m = {};
$($m, {
  error: () => sT,
  method: () => rT,
  params: () => nT,
  request: () => S5,
  response: () => E5,
  result: () => oT,
});
f();
var rT = a.literal('user_approveEthSignMessage'),
  nT = a.tuple([
    Ie,
    a.object({
      signer: Ee,
      message: De,
      originalMethod: a.enum([
        'eth_sign',
        'personal_sign',
        'eth_signTypedData',
        'eth_signTypedData_v3',
        'eth_signTypedData_v4',
      ]),
      chainId: a.string(),
      autoConfirmStatusCode: a.nativeEnum(or),
    }),
  ]),
  oT = a.discriminatedUnion('approvalType', [
    a.object({ approvalType: a.literal('user') }),
    a.object({ approvalType: a.literal('hardware'), signature: Je }),
  ]),
  sT = z,
  S5 = L(rT, nT),
  E5 = N(oT, sT);
var Gm = {};
$(Gm, {
  error: () => uT,
  method: () => iT,
  params: () => aT,
  request: () => _5,
  response: () => A5,
  result: () => cT,
});
f();
var iT = a.literal('user_approveSolConnect'),
  aT = a.tuple([Ie]),
  cT = a.null(),
  uT = z,
  _5 = L(iT, aT),
  A5 = N(cT, uT);
var Ym = {};
$(Ym, {
  error: () => dT,
  method: () => pT,
  params: () => fT,
  request: () => R5,
  response: () => I5,
  result: () => lT,
});
f();
var pT = a.literal('user_approveSolSignAllTransactions'),
  fT = a.tuple([
    Ie,
    a.object({ transactions: a.array(me), autoConfirmStatusCode: a.nativeEnum(or) }),
  ]),
  lT = a.discriminatedUnion('type', [
    a.object({ type: a.literal('signAndSend'), overwriteTransactions: a.array(me).optional() }),
    a.object({
      type: a.literal('send'),
      result: a.array(
        a.object({
          signedTransaction: me,
          signature: me,
          version: a.union([a.literal('legacy'), a.number()]),
        })
      ),
    }),
  ]),
  dT = z,
  R5 = L(pT, fT),
  I5 = N(lT, dT);
var Zm = {};
$(Zm, {
  error: () => gT,
  method: () => hT,
  params: () => mT,
  request: () => k5,
  response: () => T5,
  result: () => yT,
});
f();
var hT = a.literal('user_approveSolSignAndSendTransaction'),
  mT = a.tuple([
    Ie,
    a.object({ transaction: a.string(), autoConfirmStatusCode: a.nativeEnum(or) }),
  ]),
  yT = a.discriminatedUnion('type', [
    a.object({
      type: a.literal('signAndSend'),
      overwriteTransactions: a.array(me).optional(),
      isSharingEligible: a.boolean().optional(),
    }),
    a.object({
      type: a.literal('send'),
      signedTransaction: me,
      signature: me,
      version: a.union([a.literal('legacy'), a.number()]),
    }),
  ]),
  gT = z,
  k5 = L(hT, mT),
  T5 = N(yT, gT);
var Jm = {};
$(Jm, {
  error: () => vT,
  method: () => xT,
  params: () => bT,
  request: () => P5,
  response: () => B5,
  result: () => wT,
});
f();
var xT = a.literal('user_approveSolSignAndSendAllTransactions'),
  bT = a.tuple([
    Ie,
    a.object({ transactions: a.array(me), autoConfirmStatusCode: a.nativeEnum(or) }),
  ]),
  wT = a.discriminatedUnion('type', [
    a.object({ type: a.literal('signAndSend'), overwriteTransactions: a.array(me).optional() }),
    a.object({
      type: a.literal('send'),
      result: a.array(
        a.object({
          signedTransaction: me,
          signature: me,
          version: a.union([a.literal('legacy'), a.number()]),
        })
      ),
    }),
  ]),
  vT = z,
  P5 = L(xT, bT),
  B5 = N(wT, vT);
var Xm = {};
$(Xm, {
  error: () => AT,
  method: () => ST,
  params: () => ET,
  request: () => M5,
  response: () => z5,
  result: () => _T,
});
f();
var ST = a.literal('user_approveSolSignIn'),
  ET = a.tuple([
    Ie,
    a.object({
      connect: a.boolean(),
      signInData: As,
      message: me,
      errorDetails: a.array(a.object({ label: a.string(), message: a.string() })).optional(),
    }),
  ]),
  _T = a.discriminatedUnion('type', [
    a.object({ type: a.literal('signAndSend') }),
    a.object({ type: a.literal('send'), signature: me }),
  ]),
  AT = z,
  M5 = L(ST, ET),
  z5 = N(_T, AT);
var Qm = {};
$(Qm, {
  error: () => TT,
  method: () => RT,
  params: () => IT,
  request: () => L5,
  response: () => N5,
  result: () => kT,
});
f();
var RT = a.literal('user_approveSolSignMessage'),
  IT = a.tuple([
    Ie,
    a.object({
      message: me,
      display: a.union([a.literal('utf8'), a.literal('hex')]),
      autoConfirmStatusCode: a.nativeEnum(or),
    }),
  ]),
  kT = a.discriminatedUnion('type', [
    a.object({ type: a.literal('signAndSend') }),
    a.object({ type: a.literal('send'), signature: me }),
  ]),
  TT = z,
  L5 = L(RT, IT),
  N5 = N(kT, TT);
var ey = {};
$(ey, {
  error: () => zT,
  method: () => PT,
  params: () => BT,
  request: () => O5,
  response: () => C5,
  result: () => MT,
});
f();
var PT = a.literal('user_approveSolSignTransaction'),
  BT = a.tuple([
    Ie,
    a.object({ transaction: a.string(), autoConfirmStatusCode: a.nativeEnum(or) }),
  ]),
  MT = a.discriminatedUnion('type', [
    a.object({
      type: a.literal('signAndSend'),
      overwriteTransactions: a.array(me).optional(),
      isSharingEligible: a.boolean().optional(),
      transactionSharingDelayMs: a.number().optional(),
    }),
    a.object({
      type: a.literal('send'),
      signedTransaction: me,
      signature: me,
      version: a.union([a.literal('legacy'), a.number()]),
    }),
  ]),
  zT = z,
  O5 = L(PT, BT),
  C5 = N(MT, zT);
var ty = {};
$(ty, {
  error: () => CT,
  method: () => LT,
  params: () => NT,
  request: () => q5,
  response: () => D5,
  result: () => OT,
});
f();
var LT = a.literal('user_confirmEIP712IncorrectChainId'),
  NT = a.tuple([Ie, a.object({ connectedChainId: a.string(), messageChainId: a.string() })]),
  OT = a.null(),
  CT = z,
  q5 = L(LT, NT),
  D5 = N(OT, CT);
var ry = {};
$(ry, {
  error: () => FT,
  method: () => qT,
  params: () => DT,
  request: () => U5,
  response: () => F5,
  result: () => UT,
});
f();
var qT = a.literal('user_confirmIncorrectMode'),
  DT = a.tuple([Ie, a.enum(['mainnet', 'testnet'])]),
  UT = a.null(),
  FT = z,
  U5 = L(qT, DT),
  F5 = N(UT, FT);
var ny = {};
$(ny, {
  error: () => KT,
  method: () => jT,
  params: () => HT,
  request: () => j5,
  response: () => H5,
  result: () => WT,
});
f();
var jT = a.literal('user_confirmDisabledNetwork'),
  HT = a.tuple([Ie, a.string()]),
  WT = a.null(),
  KT = z,
  j5 = L(jT, HT),
  H5 = N(WT, KT);
var oy = {};
$(oy, {
  error: () => YT,
  method: () => VT,
  params: () => $T,
  request: () => W5,
  response: () => K5,
  result: () => GT,
});
f();
var VT = a.literal('user_confirmUnsupportedAccount'),
  $T = a.tuple([Ie, a.literal('ethereum').or(a.literal('solana'))]),
  GT = a.null(),
  YT = z,
  W5 = L(VT, $T),
  K5 = N(GT, YT);
var sy = {};
$(sy, {
  error: () => QT,
  method: () => ZT,
  params: () => JT,
  request: () => V5,
  response: () => $5,
  result: () => XT,
});
f();
var ZT = a.literal('user_confirmUnsupportedNetwork'),
  JT = a.tuple([Ie, a.string()]),
  XT = a.null(),
  QT = z,
  V5 = L(ZT, JT),
  $5 = N(XT, QT);
var iy = {};
$(iy, {
  error: () => n2,
  method: () => e2,
  params: () => t2,
  request: () => G5,
  response: () => Y5,
  result: () => r2,
});
f();
var e2 = a.literal('user_selectEthWallet'),
  t2 = a.tuple([Ie]),
  r2 = Sa,
  n2 = z,
  G5 = L(e2, t2),
  Y5 = N(r2, n2);
var ay = {};
$(ay, {
  error: () => a2,
  method: () => o2,
  params: () => s2,
  request: () => Z5,
  response: () => J5,
  result: () => i2,
});
f();
var o2 = a.literal('user_approveSolPayTransaction'),
  s2 = a.tuple([Ie, a.object({ label: a.string().optional(), transaction: a.string() })]),
  i2 = a.discriminatedUnion('type', [
    a.object({ type: a.literal('signAndSend') }),
    a.object({
      type: a.literal('send'),
      signedTransaction: me,
      signature: me,
      version: a.union([a.literal('legacy'), a.number()]),
    }),
  ]),
  a2 = z,
  Z5 = L(o2, s2),
  J5 = N(i2, a2);
var cy = {};
$(cy, {
  error: () => f2,
  method: () => c2,
  params: () => u2,
  request: () => X5,
  response: () => Q5,
  result: () => p2,
});
f();
var c2 = a.literal('user_approveSolFeaturedAction'),
  u2 = a.tuple([Ie, a.object({ featuredTransaction: oh })]),
  p2 = a.object({ transaction: a.string().optional(), message: a.string().optional() }),
  f2 = z,
  X5 = L(c2, u2),
  Q5 = N(p2, f2);
var uy = {};
$(uy, {
  error: () => m2,
  method: () => l2,
  params: () => d2,
  request: () => eF,
  response: () => tF,
  result: () => h2,
});
f();
var l2 = a.literal('user_solTransactionConfirmation'),
  d2 = a.tuple([Ie, a.object({ signature: me, postAction: ui.optional() })]),
  h2 = a.null(),
  m2 = z,
  eF = L(l2, d2),
  tF = N(h2, m2);
var py = {};
$(py, {
  error: () => b2,
  method: () => y2,
  params: () => g2,
  request: () => rF,
  response: () => nF,
  result: () => x2,
});
f();
var y2 = a.literal('user_approveSuiRequestAccounts'),
  g2 = a.tuple([Ie]),
  x2 = a.null(),
  b2 = z,
  rF = L(y2, g2),
  nF = N(x2, b2);
var fy = {};
$(fy, {
  error: () => E2,
  method: () => w2,
  params: () => v2,
  request: () => oF,
  response: () => sF,
  result: () => S2,
});
f();
var w2 = a.literal('user_approveSuiSignTransaction'),
  v2 = a.tuple([Ie, a.object({ transaction: a.string() })]),
  S2 = a.object({ transaction: a.string() }),
  E2 = z,
  oF = L(w2, v2),
  sF = N(S2, E2);
var ly = {};
$(ly, {
  error: () => I2,
  method: () => _2,
  params: () => A2,
  request: () => iF,
  response: () => aF,
  result: () => R2,
});
f();
var _2 = a.literal('user_approveSuiSignMessage'),
  A2 = a.tuple([Ie, a.object({ message: a.instanceof(Uint8Array) })]),
  R2 = a.object({ message: a.string() }),
  I2 = z,
  iF = L(_2, A2),
  aF = N(R2, I2);
f();
var k2 = (r) => {
  try {
    if (r == null) throw 'JSON must be set';
    if (!isNaN(parseInt(r))) throw 'Numbers are not valid JSON';
    return JSON.parse(r), !0;
  } catch {
    return !1;
  }
};
var Yr,
  Zr,
  Vp = class {
    constructor({ port: e }) {
      Ne(this, Yr);
      Ne(this, Zr, !1);
      Ze(this, Yr, e), Ze(this, Zr, !1);
    }
    get status() {
      return oe(this, Zr) ? 'started' : 'stopped';
    }
    async start() {
      if (oe(this, Zr)) return;
      let e = oe(this, Yr).onClose(() => {
        Ze(this, Zr, !1), e();
      });
      await oe(this, Yr).start(), Ze(this, Zr, !0);
    }
    async close() {
      oe(this, Zr) && (await oe(this, Yr).close(), Ze(this, Zr, !1));
    }
    async send(e) {
      if (!oe(this, Zr)) throw new Error('Cannot read stream: RpcTransport has not been started');
      if (Array.isArray(e)) {
        let t = th.parse(e),
          n = new Set(t.map((s) => s.id)),
          o = la(t);
        oe(this, Yr).postMessage(o);
        for await (let s of this.recv())
          if (Array.isArray(s) && s.every((i) => n.has(i.id))) return s;
        throw new Error('Failed to get response: request ids=' + n);
      } else {
        let t = tu.parse(e),
          { id: n } = t,
          o = la(t);
        oe(this, Yr).postMessage(o);
        for await (let s of this.recv()) if ('id' in s && s.id === n && !('method' in s)) return s;
        throw new Error('Failed to get response: request id=' + n);
      }
    }
    addListener(e) {
      let t = async (o) => {
          let s = this.recv()[Symbol.asyncIterator](),
            i = () => {},
            c = () => new Promise((l) => (i = () => l(null)));
          function u() {
            var l;
            (l = s.return) == null || l.call(s), i(), o.signal.removeEventListener('abort', u);
          }
          try {
            for (o.signal.addEventListener('abort', u); ; ) {
              let l = await Promise.race([s.next(), c()]);
              if (!l) break;
              try {
                e(l.value);
              } catch (w) {
                console.error(w);
              }
            }
            u();
          } catch (l) {
            throw (u(), l);
          }
        },
        n = new AbortController();
      return t(n), () => n.abort();
    }
    recv() {
      let e = [],
        t = () => {},
        n = () => new Promise((l) => (t = l)),
        o = !1,
        s = oe(this, Yr).onClose(() => {
          (o = !0), t(), s();
        }),
        i = oe(this, Yr).onMessage((l) => {
          if (k2(l))
            try {
              let w = Cc(l);
              if ('method' in w && 'id' in w) {
                t();
                return;
              }
              if (Array.isArray(w)) {
                let x = rh.parse(w);
                e.push(x), t();
              } else if ('id' in eu.parse(w)) {
                let A = ru.parse(w);
                e.push(A), t();
              } else {
                let A = yn.parse(w);
                e.push(A), t();
              }
            } catch (w) {
              console.error(w);
            }
        }),
        c = () => {
          s(), i();
        },
        u = {
          async next() {
            for (; !o; ) {
              let l = e.shift();
              if (l) return { done: !1, value: l };
              await n();
            }
            return c(), { done: !0, value: void 0 };
          },
          async throw() {
            return c(), { done: !0, value: void 0 };
          },
          async return() {
            return c(), { done: !0, value: void 0 };
          },
        };
      return {
        [Symbol.asyncIterator]() {
          return u;
        },
      };
    }
  };
(Yr = new WeakMap()), (Zr = new WeakMap());
var bn = class r extends Vp {
  static createPort(e) {
    let t = [],
      n = [];
    function o(i) {
      for (let c of t)
        try {
          typeof i.data == 'string' && c(i.data);
        } catch (u) {
          console.error(u);
        }
    }
    function s() {
      for (let i of n)
        try {
          i();
        } catch (c) {
          console.error(c);
        }
    }
    return {
      async start() {
        window.addEventListener('message', o);
      },
      async close() {
        window.removeEventListener('message', o), s();
      },
      postMessage(i) {
        setTimeout(() => {
          var c;
          (c = e.contentWindow) == null || c.postMessage(i, '*');
        }, 0);
      },
      onMessage(i) {
        return (
          t.push(i),
          () => {
            t.splice(t.indexOf(i), 1);
          }
        );
      },
      onClose(i) {
        return (
          n.push(i),
          () => {
            n.splice(n.indexOf(i), 1);
          }
        );
      },
    };
  }
  constructor(e) {
    super({ port: r.createPort(e) });
  }
};
f();
f();
var W0e = _e(wi());
f();
var Me = _e(Wa());
f();
f();
f();
function _y(r) {
  if (!Number.isSafeInteger(r) || r < 0) throw new Error(`Wrong positive integer: ${r}`);
}
function NF(r) {
  if (typeof r != 'boolean') throw new Error(`Expected boolean, not ${r}`);
}
function K2(r, ...e) {
  if (!(r instanceof Uint8Array)) throw new TypeError('Expected Uint8Array');
  if (e.length > 0 && !e.includes(r.length))
    throw new TypeError(`Expected Uint8Array of length ${e}, not of length=${r.length}`);
}
function OF(r) {
  if (typeof r != 'function' || typeof r.create != 'function')
    throw new Error('Hash should be wrapped by utils.wrapConstructor');
  _y(r.outputLen), _y(r.blockLen);
}
function CF(r, e = !0) {
  if (r.destroyed) throw new Error('Hash instance has been destroyed');
  if (e && r.finished) throw new Error('Hash#digest() has already been called');
}
function qF(r, e) {
  K2(r);
  let t = e.outputLen;
  if (r.length < t) throw new Error(`digestInto() expects output buffer of length at least ${t}`);
}
var DF = { number: _y, bool: NF, bytes: K2, hash: OF, exists: CF, output: qF },
  ir = DF;
f();
f();
var UF = { node: void 0, web: typeof self == 'object' && 'crypto' in self ? self.crypto : void 0 };
var V2 = (r) => new Uint32Array(r.buffer, r.byteOffset, Math.floor(r.byteLength / 4)),
  mf = (r) => new DataView(r.buffer, r.byteOffset, r.byteLength),
  Jr = (r, e) => (r << (32 - e)) | (r >>> e),
  FF = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!FF) throw new Error('Non little-endian hardware is not supported');
var yde = Array.from({ length: 256 }, (r, e) => e.toString(16).padStart(2, '0'));
function jF(r) {
  if (typeof r != 'string') throw new TypeError(`utf8ToBytes expected string, got ${typeof r}`);
  return new TextEncoder().encode(r);
}
function ho(r) {
  if ((typeof r == 'string' && (r = jF(r)), !(r instanceof Uint8Array)))
    throw new TypeError(`Expected input type is Uint8Array (got ${typeof r})`);
  return r;
}
var lo = class {
  clone() {
    return this._cloneInto();
  }
};
function vn(r) {
  let e = (n) => r().update(ho(n)).digest(),
    t = r();
  return (e.outputLen = t.outputLen), (e.blockLen = t.blockLen), (e.create = () => r()), e;
}
function $2(r) {
  let e = (n, o) => r(o).update(ho(n)).digest(),
    t = r({});
  return (e.outputLen = t.outputLen), (e.blockLen = t.blockLen), (e.create = (n) => r(n)), e;
}
function HF(r, e, t, n) {
  if (typeof r.setBigUint64 == 'function') return r.setBigUint64(e, t, n);
  let o = BigInt(32),
    s = BigInt(4294967295),
    i = Number((t >> o) & s),
    c = Number(t & s),
    u = n ? 4 : 0,
    l = n ? 0 : 4;
  r.setUint32(e + u, i, n), r.setUint32(e + l, c, n);
}
var Ai = class extends lo {
  constructor(e, t, n, o) {
    super(),
      (this.blockLen = e),
      (this.outputLen = t),
      (this.padOffset = n),
      (this.isLE = o),
      (this.finished = !1),
      (this.length = 0),
      (this.pos = 0),
      (this.destroyed = !1),
      (this.buffer = new Uint8Array(e)),
      (this.view = mf(this.buffer));
  }
  update(e) {
    ir.exists(this);
    let { view: t, buffer: n, blockLen: o } = this;
    e = ho(e);
    let s = e.length;
    for (let i = 0; i < s; ) {
      let c = Math.min(o - this.pos, s - i);
      if (c === o) {
        let u = mf(e);
        for (; o <= s - i; i += o) this.process(u, i);
        continue;
      }
      n.set(e.subarray(i, i + c), this.pos),
        (this.pos += c),
        (i += c),
        this.pos === o && (this.process(t, 0), (this.pos = 0));
    }
    return (this.length += e.length), this.roundClean(), this;
  }
  digestInto(e) {
    ir.exists(this), ir.output(e, this), (this.finished = !0);
    let { buffer: t, view: n, blockLen: o, isLE: s } = this,
      { pos: i } = this;
    (t[i++] = 128),
      this.buffer.subarray(i).fill(0),
      this.padOffset > o - i && (this.process(n, 0), (i = 0));
    for (let x = i; x < o; x++) t[x] = 0;
    HF(n, o - 8, BigInt(this.length * 8), s), this.process(n, 0);
    let c = mf(e),
      u = this.outputLen;
    if (u % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
    let l = u / 4,
      w = this.get();
    if (l > w.length) throw new Error('_sha2: outputLen bigger than state');
    for (let x = 0; x < l; x++) c.setUint32(4 * x, w[x], s);
  }
  digest() {
    let { buffer: e, outputLen: t } = this;
    this.digestInto(e);
    let n = e.slice(0, t);
    return this.destroy(), n;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    let { blockLen: t, buffer: n, length: o, finished: s, destroyed: i, pos: c } = this;
    return (
      (e.length = o), (e.pos = c), (e.finished = s), (e.destroyed = i), o % t && e.buffer.set(n), e
    );
  }
};
f();
var yf = BigInt(4294967295),
  Ay = BigInt(32);
function G2(r, e = !1) {
  return e
    ? { h: Number(r & yf), l: Number((r >> Ay) & yf) }
    : { h: Number((r >> Ay) & yf) | 0, l: Number(r & yf) | 0 };
}
function WF(r, e = !1) {
  let t = new Uint32Array(r.length),
    n = new Uint32Array(r.length);
  for (let o = 0; o < r.length; o++) {
    let { h: s, l: i } = G2(r[o], e);
    [t[o], n[o]] = [s, i];
  }
  return [t, n];
}
var KF = (r, e) => (BigInt(r >>> 0) << Ay) | BigInt(e >>> 0),
  VF = (r, e, t) => r >>> t,
  $F = (r, e, t) => (r << (32 - t)) | (e >>> t),
  GF = (r, e, t) => (r >>> t) | (e << (32 - t)),
  YF = (r, e, t) => (r << (32 - t)) | (e >>> t),
  ZF = (r, e, t) => (r << (64 - t)) | (e >>> (t - 32)),
  JF = (r, e, t) => (r >>> (t - 32)) | (e << (64 - t)),
  XF = (r, e) => e,
  QF = (r, e) => r,
  ej = (r, e, t) => (r << t) | (e >>> (32 - t)),
  tj = (r, e, t) => (e << t) | (r >>> (32 - t)),
  rj = (r, e, t) => (e << (t - 32)) | (r >>> (64 - t)),
  nj = (r, e, t) => (r << (t - 32)) | (e >>> (64 - t));
function oj(r, e, t, n) {
  let o = (e >>> 0) + (n >>> 0);
  return { h: (r + t + ((o / 2 ** 32) | 0)) | 0, l: o | 0 };
}
var sj = (r, e, t) => (r >>> 0) + (e >>> 0) + (t >>> 0),
  ij = (r, e, t, n) => (e + t + n + ((r / 2 ** 32) | 0)) | 0,
  aj = (r, e, t, n) => (r >>> 0) + (e >>> 0) + (t >>> 0) + (n >>> 0),
  cj = (r, e, t, n, o) => (e + t + n + o + ((r / 2 ** 32) | 0)) | 0,
  uj = (r, e, t, n, o) => (r >>> 0) + (e >>> 0) + (t >>> 0) + (n >>> 0) + (o >>> 0),
  pj = (r, e, t, n, o, s) => (e + t + n + o + s + ((r / 2 ** 32) | 0)) | 0,
  fj = {
    fromBig: G2,
    split: WF,
    toBig: KF,
    shrSH: VF,
    shrSL: $F,
    rotrSH: GF,
    rotrSL: YF,
    rotrBH: ZF,
    rotrBL: JF,
    rotr32H: XF,
    rotr32L: QF,
    rotlSH: ej,
    rotlSL: tj,
    rotlBH: rj,
    rotlBL: nj,
    add: oj,
    add3L: sj,
    add3H: ij,
    add4L: aj,
    add4H: cj,
    add5H: pj,
    add5L: uj,
  },
  Le = fj;
var [lj, dj] = Le.split(
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
    ].map((r) => BigInt(r))
  ),
  mo = new Uint32Array(80),
  yo = new Uint32Array(80),
  Ri = class extends Ai {
    constructor() {
      super(128, 64, 16, !1),
        (this.Ah = 1779033703),
        (this.Al = -205731576),
        (this.Bh = -1150833019),
        (this.Bl = -2067093701),
        (this.Ch = 1013904242),
        (this.Cl = -23791573),
        (this.Dh = -1521486534),
        (this.Dl = 1595750129),
        (this.Eh = 1359893119),
        (this.El = -1377402159),
        (this.Fh = -1694144372),
        (this.Fl = 725511199),
        (this.Gh = 528734635),
        (this.Gl = -79577749),
        (this.Hh = 1541459225),
        (this.Hl = 327033209);
    }
    get() {
      let {
        Ah: e,
        Al: t,
        Bh: n,
        Bl: o,
        Ch: s,
        Cl: i,
        Dh: c,
        Dl: u,
        Eh: l,
        El: w,
        Fh: x,
        Fl: A,
        Gh: _,
        Gl: O,
        Hh: D,
        Hl: j,
      } = this;
      return [e, t, n, o, s, i, c, u, l, w, x, A, _, O, D, j];
    }
    set(e, t, n, o, s, i, c, u, l, w, x, A, _, O, D, j) {
      (this.Ah = e | 0),
        (this.Al = t | 0),
        (this.Bh = n | 0),
        (this.Bl = o | 0),
        (this.Ch = s | 0),
        (this.Cl = i | 0),
        (this.Dh = c | 0),
        (this.Dl = u | 0),
        (this.Eh = l | 0),
        (this.El = w | 0),
        (this.Fh = x | 0),
        (this.Fl = A | 0),
        (this.Gh = _ | 0),
        (this.Gl = O | 0),
        (this.Hh = D | 0),
        (this.Hl = j | 0);
    }
    process(e, t) {
      for (let ae = 0; ae < 16; ae++, t += 4)
        (mo[ae] = e.getUint32(t)), (yo[ae] = e.getUint32((t += 4)));
      for (let ae = 16; ae < 80; ae++) {
        let ee = mo[ae - 15] | 0,
          re = yo[ae - 15] | 0,
          Y = Le.rotrSH(ee, re, 1) ^ Le.rotrSH(ee, re, 8) ^ Le.shrSH(ee, re, 7),
          he = Le.rotrSL(ee, re, 1) ^ Le.rotrSL(ee, re, 8) ^ Le.shrSL(ee, re, 7),
          R = mo[ae - 2] | 0,
          P = yo[ae - 2] | 0,
          C = Le.rotrSH(R, P, 19) ^ Le.rotrBH(R, P, 61) ^ Le.shrSH(R, P, 6),
          U = Le.rotrSL(R, P, 19) ^ Le.rotrBL(R, P, 61) ^ Le.shrSL(R, P, 6),
          T = Le.add4L(he, U, yo[ae - 7], yo[ae - 16]),
          y = Le.add4H(T, Y, C, mo[ae - 7], mo[ae - 16]);
        (mo[ae] = y | 0), (yo[ae] = T | 0);
      }
      let {
        Ah: n,
        Al: o,
        Bh: s,
        Bl: i,
        Ch: c,
        Cl: u,
        Dh: l,
        Dl: w,
        Eh: x,
        El: A,
        Fh: _,
        Fl: O,
        Gh: D,
        Gl: j,
        Hh: G,
        Hl: H,
      } = this;
      for (let ae = 0; ae < 80; ae++) {
        let ee = Le.rotrSH(x, A, 14) ^ Le.rotrSH(x, A, 18) ^ Le.rotrBH(x, A, 41),
          re = Le.rotrSL(x, A, 14) ^ Le.rotrSL(x, A, 18) ^ Le.rotrBL(x, A, 41),
          Y = (x & _) ^ (~x & D),
          he = (A & O) ^ (~A & j),
          R = Le.add5L(H, re, he, dj[ae], yo[ae]),
          P = Le.add5H(R, G, ee, Y, lj[ae], mo[ae]),
          C = R | 0,
          U = Le.rotrSH(n, o, 28) ^ Le.rotrBH(n, o, 34) ^ Le.rotrBH(n, o, 39),
          T = Le.rotrSL(n, o, 28) ^ Le.rotrBL(n, o, 34) ^ Le.rotrBL(n, o, 39),
          y = (n & s) ^ (n & c) ^ (s & c),
          p = (o & i) ^ (o & u) ^ (i & u);
        (G = D | 0),
          (H = j | 0),
          (D = _ | 0),
          (j = O | 0),
          (_ = x | 0),
          (O = A | 0),
          ({ h: x, l: A } = Le.add(l | 0, w | 0, P | 0, C | 0)),
          (l = c | 0),
          (w = u | 0),
          (c = s | 0),
          (u = i | 0),
          (s = n | 0),
          (i = o | 0);
        let d = Le.add3L(C, T, p);
        (n = Le.add3H(d, P, U, y)), (o = d | 0);
      }
      ({ h: n, l: o } = Le.add(this.Ah | 0, this.Al | 0, n | 0, o | 0)),
        ({ h: s, l: i } = Le.add(this.Bh | 0, this.Bl | 0, s | 0, i | 0)),
        ({ h: c, l: u } = Le.add(this.Ch | 0, this.Cl | 0, c | 0, u | 0)),
        ({ h: l, l: w } = Le.add(this.Dh | 0, this.Dl | 0, l | 0, w | 0)),
        ({ h: x, l: A } = Le.add(this.Eh | 0, this.El | 0, x | 0, A | 0)),
        ({ h: _, l: O } = Le.add(this.Fh | 0, this.Fl | 0, _ | 0, O | 0)),
        ({ h: D, l: j } = Le.add(this.Gh | 0, this.Gl | 0, D | 0, j | 0)),
        ({ h: G, l: H } = Le.add(this.Hh | 0, this.Hl | 0, G | 0, H | 0)),
        this.set(n, o, s, i, c, u, l, w, x, A, _, O, D, j, G, H);
    }
    roundClean() {
      mo.fill(0), yo.fill(0);
    }
    destroy() {
      this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  },
  Ry = class extends Ri {
    constructor() {
      super(),
        (this.Ah = -1942145080),
        (this.Al = 424955298),
        (this.Bh = 1944164710),
        (this.Bl = -1982016298),
        (this.Ch = 502970286),
        (this.Cl = 855612546),
        (this.Dh = 1738396948),
        (this.Dl = 1479516111),
        (this.Eh = 258812777),
        (this.El = 2077511080),
        (this.Fh = 2011393907),
        (this.Fl = 79989058),
        (this.Gh = 1067287976),
        (this.Gl = 1780299464),
        (this.Hh = 286451373),
        (this.Hl = -1848208735),
        (this.outputLen = 28);
    }
  },
  Iy = class extends Ri {
    constructor() {
      super(),
        (this.Ah = 573645204),
        (this.Al = -64227540),
        (this.Bh = -1621794909),
        (this.Bl = -934517566),
        (this.Ch = 596883563),
        (this.Cl = 1867755857),
        (this.Dh = -1774684391),
        (this.Dl = 1497426621),
        (this.Eh = -1775747358),
        (this.El = -1467023389),
        (this.Fh = -1101128155),
        (this.Fl = 1401305490),
        (this.Gh = 721525244),
        (this.Gl = 746961066),
        (this.Hh = 246885852),
        (this.Hl = -2117784414),
        (this.outputLen = 32);
    }
  },
  ky = class extends Ri {
    constructor() {
      super(),
        (this.Ah = -876896931),
        (this.Al = -1056596264),
        (this.Bh = 1654270250),
        (this.Bl = 914150663),
        (this.Ch = -1856437926),
        (this.Cl = 812702999),
        (this.Dh = 355462360),
        (this.Dl = -150054599),
        (this.Eh = 1731405415),
        (this.El = -4191439),
        (this.Fh = -1900787065),
        (this.Fl = 1750603025),
        (this.Gh = -619958771),
        (this.Gl = 1694076839),
        (this.Hh = 1203062813),
        (this.Hl = -1090891868),
        (this.outputLen = 48);
    }
  },
  Y2 = vn(() => new Ri()),
  kde = vn(() => new Ry()),
  Tde = vn(() => new Iy()),
  Pde = vn(() => new ky());
f();
var hj = _e(Ty(), 1);
var Jt = BigInt(0),
  We = BigInt(1),
  bo = BigInt(2),
  mj = BigInt(8),
  Z2 = BigInt('7237005577332262213973186563042994240857116359379907606001950938285454250989'),
  Ot = Object.freeze({
    a: BigInt(-1),
    d: BigInt('37095705934669439343138083508754565189542113879843219016388785533085940283555'),
    P: BigInt('57896044618658097711785492504343953926634992332820282019728792003956564819949'),
    l: Z2,
    n: Z2,
    h: BigInt(8),
    Gx: BigInt('15112221349535400772501151409588531511454012693041857206046113283949847762202'),
    Gy: BigInt('46316835694926478169428394003475163141307993866256225615783033603165251855960'),
  });
var tP = BigInt('0x10000000000000000000000000000000000000000000000000000000000000000'),
  Ka = BigInt('19681161376707505956807079304988542015446066515923890162744021073123829784752'),
  Ode = BigInt('6853475219497561581579357271197624642482790079785650197046958215289687604742'),
  yj = BigInt('25063068953384623474111414158702152701244531502492656460079210482610430750235'),
  gj = BigInt('54469307008909316920995813868745141605393597292927456921205312896311721017578'),
  xj = BigInt('1159843021668779879193775521855586647937357759715417654439879720876111806838'),
  bj = BigInt('40440834346308536858101042469323190826248399146238708352240133220865137265952'),
  Vt = class r {
    constructor(e, t, n, o) {
      (this.x = e), (this.y = t), (this.z = n), (this.t = o);
    }
    static fromAffine(e) {
      if (!(e instanceof jt)) throw new TypeError('ExtendedPoint#fromAffine: expected Point');
      return e.equals(jt.ZERO) ? r.ZERO : new r(e.x, e.y, We, ne(e.x * e.y));
    }
    static toAffineBatch(e) {
      let t = Sj(e.map((n) => n.z));
      return e.map((n, o) => n.toAffine(t[o]));
    }
    static normalizeZ(e) {
      return this.toAffineBatch(e).map(this.fromAffine);
    }
    equals(e) {
      X2(e);
      let { x: t, y: n, z: o } = this,
        { x: s, y: i, z: c } = e,
        u = ne(t * c),
        l = ne(s * o),
        w = ne(n * c),
        x = ne(i * o);
      return u === l && w === x;
    }
    negate() {
      return new r(ne(-this.x), this.y, this.z, ne(-this.t));
    }
    double() {
      let { x: e, y: t, z: n } = this,
        { a: o } = Ot,
        s = ne(e * e),
        i = ne(t * t),
        c = ne(bo * ne(n * n)),
        u = ne(o * s),
        l = e + t,
        w = ne(ne(l * l) - s - i),
        x = u + i,
        A = x - c,
        _ = u - i,
        O = ne(w * A),
        D = ne(x * _),
        j = ne(w * _),
        G = ne(A * x);
      return new r(O, D, G, j);
    }
    add(e) {
      X2(e);
      let { x: t, y: n, z: o, t: s } = this,
        { x: i, y: c, z: u, t: l } = e,
        w = ne((n - t) * (c + i)),
        x = ne((n + t) * (c - i)),
        A = ne(x - w);
      if (A === Jt) return this.double();
      let _ = ne(o * bo * l),
        O = ne(s * bo * u),
        D = O + _,
        j = x + w,
        G = O - _,
        H = ne(D * A),
        ae = ne(j * G),
        ee = ne(D * G),
        re = ne(A * j);
      return new r(H, ae, re, ee);
    }
    subtract(e) {
      return this.add(e.negate());
    }
    precomputeWindow(e) {
      let t = 1 + 256 / e,
        n = [],
        o = this,
        s = o;
      for (let i = 0; i < t; i++) {
        (s = o), n.push(s);
        for (let c = 1; c < 2 ** (e - 1); c++) (s = s.add(o)), n.push(s);
        o = s.double();
      }
      return n;
    }
    wNAF(e, t) {
      !t && this.equals(r.BASE) && (t = jt.BASE);
      let n = (t && t._WINDOW_SIZE) || 1;
      if (256 % n) throw new Error('Point#wNAF: Invalid precomputation window, must be power of 2');
      let o = t && zy.get(t);
      o || ((o = this.precomputeWindow(n)), t && n !== 1 && ((o = r.normalizeZ(o)), zy.set(t, o)));
      let s = r.ZERO,
        i = r.BASE,
        c = 1 + 256 / n,
        u = 2 ** (n - 1),
        l = BigInt(2 ** n - 1),
        w = 2 ** n,
        x = BigInt(n);
      for (let A = 0; A < c; A++) {
        let _ = A * u,
          O = Number(e & l);
        (e >>= x), O > u && ((O -= w), (e += We));
        let D = _,
          j = _ + Math.abs(O) - 1,
          G = A % 2 !== 0,
          H = O < 0;
        O === 0 ? (i = i.add(J2(G, o[D]))) : (s = s.add(J2(H, o[j])));
      }
      return r.normalizeZ([s, i])[0];
    }
    multiply(e, t) {
      return this.wNAF(xf(e, Ot.l), t);
    }
    multiplyUnsafe(e) {
      let t = xf(e, Ot.l, !1),
        n = r.BASE,
        o = r.ZERO;
      if (t === Jt) return o;
      if (this.equals(o) || t === We) return this;
      if (this.equals(n)) return this.wNAF(t);
      let s = o,
        i = this;
      for (; t > Jt; ) t & We && (s = s.add(i)), (i = i.double()), (t >>= We);
      return s;
    }
    isSmallOrder() {
      return this.multiplyUnsafe(Ot.h).equals(r.ZERO);
    }
    isTorsionFree() {
      let e = this.multiplyUnsafe(Ot.l / bo).double();
      return Ot.l % bo && (e = e.add(this)), e.equals(r.ZERO);
    }
    toAffine(e) {
      let { x: t, y: n, z: o } = this,
        s = this.equals(r.ZERO);
      e == null && (e = s ? mj : wf(o));
      let i = ne(t * e),
        c = ne(n * e),
        u = ne(o * e);
      if (s) return jt.ZERO;
      if (u !== We) throw new Error('invZ was invalid');
      return new jt(i, c);
    }
    fromRistrettoBytes() {
      By();
    }
    toRistrettoBytes() {
      By();
    }
    fromRistrettoHash() {
      By();
    }
  };
Vt.BASE = new Vt(Ot.Gx, Ot.Gy, We, ne(Ot.Gx * Ot.Gy));
Vt.ZERO = new Vt(Jt, We, We, Jt);
function J2(r, e) {
  let t = e.negate();
  return r ? t : e;
}
function X2(r) {
  if (!(r instanceof Vt)) throw new TypeError('ExtendedPoint expected');
}
function Py(r) {
  if (!(r instanceof ks)) throw new TypeError('RistrettoPoint expected');
}
function By() {
  throw new Error('Legacy method: switch to RistrettoPoint');
}
var ks = class r {
  constructor(e) {
    this.ep = e;
  }
  static calcElligatorRistrettoMap(e) {
    let { d: t } = Ot,
      n = ne(Ka * e * e),
      o = ne((n + We) * xj),
      s = BigInt(-1),
      i = ne((s - t * n) * ne(n + t)),
      { isValid: c, value: u } = Ny(o, i),
      l = ne(u * e);
    xo(l) || (l = ne(-l)), c || (u = l), c || (s = n);
    let w = ne(s * (n - We) * bj - i),
      x = u * u,
      A = ne((u + u) * i),
      _ = ne(w * yj),
      O = ne(We - x),
      D = ne(We + x);
    return new Vt(ne(A * D), ne(O * _), ne(_ * D), ne(A * O));
  }
  static hashToCurve(e) {
    e = wo(e, 64);
    let t = My(e.slice(0, 32)),
      n = this.calcElligatorRistrettoMap(t),
      o = My(e.slice(32, 64)),
      s = this.calcElligatorRistrettoMap(o);
    return new r(n.add(s));
  }
  static fromHex(e) {
    e = wo(e, 32);
    let { a: t, d: n } = Ot,
      o = 'RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint',
      s = My(e);
    if (!_j(Ga(s), e) || xo(s)) throw new Error(o);
    let i = ne(s * s),
      c = ne(We + t * i),
      u = ne(We - t * i),
      l = ne(c * c),
      w = ne(u * u),
      x = ne(t * n * l - w),
      { isValid: A, value: _ } = eP(ne(x * w)),
      O = ne(_ * u),
      D = ne(_ * O * x),
      j = ne((s + s) * O);
    xo(j) && (j = ne(-j));
    let G = ne(c * D),
      H = ne(j * G);
    if (!A || xo(H) || G === Jt) throw new Error(o);
    return new r(new Vt(j, G, We, H));
  }
  toRawBytes() {
    let { x: e, y: t, z: n, t: o } = this.ep,
      s = ne(ne(n + t) * ne(n - t)),
      i = ne(e * t),
      c = ne(i * i),
      { value: u } = eP(ne(s * c)),
      l = ne(u * s),
      w = ne(u * i),
      x = ne(l * w * o),
      A;
    if (xo(o * x)) {
      let O = ne(t * Ka),
        D = ne(e * Ka);
      (e = O), (t = D), (A = ne(l * gj));
    } else A = w;
    xo(e * x) && (t = ne(-t));
    let _ = ne((n - t) * A);
    return xo(_) && (_ = ne(-_)), Ga(_);
  }
  toHex() {
    return Ya(this.toRawBytes());
  }
  toString() {
    return this.toHex();
  }
  equals(e) {
    Py(e);
    let t = this.ep,
      n = e.ep,
      o = ne(t.x * n.y) === ne(t.y * n.x),
      s = ne(t.y * n.y) === ne(t.x * n.x);
    return o || s;
  }
  add(e) {
    return Py(e), new r(this.ep.add(e.ep));
  }
  subtract(e) {
    return Py(e), new r(this.ep.subtract(e.ep));
  }
  multiply(e) {
    return new r(this.ep.multiply(e));
  }
  multiplyUnsafe(e) {
    return new r(this.ep.multiplyUnsafe(e));
  }
};
ks.BASE = new ks(Vt.BASE);
ks.ZERO = new ks(Vt.ZERO);
var zy = new WeakMap(),
  jt = class r {
    constructor(e, t) {
      (this.x = e), (this.y = t);
    }
    _setWindowSize(e) {
      (this._WINDOW_SIZE = e), zy.delete(this);
    }
    static fromHex(e, t = !0) {
      let { d: n, P: o } = Ot;
      e = wo(e, 32);
      let s = e.slice();
      s[31] = e[31] & -129;
      let i = Za(s);
      if (t && i >= o) throw new Error('Expected 0 < hex < P');
      if (!t && i >= tP) throw new Error('Expected 0 < hex < 2**256');
      let c = ne(i * i),
        u = ne(c - We),
        l = ne(n * c + We),
        { isValid: w, value: x } = Ny(u, l);
      if (!w) throw new Error('Point.fromHex: invalid y coordinate');
      let A = (x & We) === We;
      return ((e[31] & 128) !== 0) !== A && (x = ne(-x)), new r(x, i);
    }
    static async fromPrivateKey(e) {
      return (await sP(e)).point;
    }
    toRawBytes() {
      let e = Ga(this.y);
      return (e[31] |= this.x & We ? 128 : 0), e;
    }
    toHex() {
      return Ya(this.toRawBytes());
    }
    toX25519() {
      let { y: e } = this,
        t = ne((We + e) * wf(We - e));
      return Ga(t);
    }
    isTorsionFree() {
      return Vt.fromAffine(this).isTorsionFree();
    }
    equals(e) {
      return this.x === e.x && this.y === e.y;
    }
    negate() {
      return new r(ne(-this.x), this.y);
    }
    add(e) {
      return Vt.fromAffine(this).add(Vt.fromAffine(e)).toAffine();
    }
    subtract(e) {
      return this.add(e.negate());
    }
    multiply(e) {
      return Vt.fromAffine(this).multiply(e, this).toAffine();
    }
  };
jt.BASE = new jt(Ot.Gx, Ot.Gy);
jt.ZERO = new jt(Jt, We);
var $a = class r {
  constructor(e, t) {
    (this.r = e), (this.s = t), this.assertValidity();
  }
  static fromHex(e) {
    let t = wo(e, 64),
      n = jt.fromHex(t.slice(0, 32), !1),
      o = Za(t.slice(32, 64));
    return new r(n, o);
  }
  assertValidity() {
    let { r: e, s: t } = this;
    if (!(e instanceof jt)) throw new Error('Expected Point instance');
    return xf(t, Ot.l, !1), this;
  }
  toRawBytes() {
    let e = new Uint8Array(64);
    return e.set(this.r.toRawBytes()), e.set(Ga(this.s), 32), e;
  }
  toHex() {
    return Ya(this.toRawBytes());
  }
};
function Q2(...r) {
  if (!r.every((n) => n instanceof Uint8Array)) throw new Error('Expected Uint8Array list');
  if (r.length === 1) return r[0];
  let e = r.reduce((n, o) => n + o.length, 0),
    t = new Uint8Array(e);
  for (let n = 0, o = 0; n < r.length; n++) {
    let s = r[n];
    t.set(s, o), (o += s.length);
  }
  return t;
}
var wj = Array.from({ length: 256 }, (r, e) => e.toString(16).padStart(2, '0'));
function Ya(r) {
  if (!(r instanceof Uint8Array)) throw new Error('Uint8Array expected');
  let e = '';
  for (let t = 0; t < r.length; t++) e += wj[r[t]];
  return e;
}
function Ly(r) {
  if (typeof r != 'string') throw new TypeError('hexToBytes: expected string, got ' + typeof r);
  if (r.length % 2) throw new Error('hexToBytes: received invalid unpadded hex');
  let e = new Uint8Array(r.length / 2);
  for (let t = 0; t < e.length; t++) {
    let n = t * 2,
      o = r.slice(n, n + 2),
      s = Number.parseInt(o, 16);
    if (Number.isNaN(s) || s < 0) throw new Error('Invalid byte sequence');
    e[t] = s;
  }
  return e;
}
function rP(r) {
  let t = r.toString(16).padStart(64, '0');
  return Ly(t);
}
function Ga(r) {
  return rP(r).reverse();
}
function xo(r) {
  return (ne(r) & We) === We;
}
function Za(r) {
  if (!(r instanceof Uint8Array)) throw new Error('Expected Uint8Array');
  return BigInt('0x' + Ya(Uint8Array.from(r).reverse()));
}
var vj = BigInt('0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
function My(r) {
  return ne(Za(r) & vj);
}
function ne(r, e = Ot.P) {
  let t = r % e;
  return t >= Jt ? t : e + t;
}
function wf(r, e = Ot.P) {
  if (r === Jt || e <= Jt)
    throw new Error(`invert: expected positive integers, got n=${r} mod=${e}`);
  let t = ne(r, e),
    n = e,
    o = Jt,
    s = We,
    i = We,
    c = Jt;
  for (; t !== Jt; ) {
    let l = n / t,
      w = n % t,
      x = o - i * l,
      A = s - c * l;
    (n = t), (t = w), (o = i), (s = c), (i = x), (c = A);
  }
  if (n !== We) throw new Error('invert: does not exist');
  return ne(o, e);
}
function Sj(r, e = Ot.P) {
  let t = new Array(r.length),
    n = r.reduce((s, i, c) => (i === Jt ? s : ((t[c] = s), ne(s * i, e))), We),
    o = wf(n, e);
  return (
    r.reduceRight((s, i, c) => (i === Jt ? s : ((t[c] = ne(s * t[c], e)), ne(s * i, e))), o), t
  );
}
function Sn(r, e) {
  let { P: t } = Ot,
    n = r;
  for (; e-- > Jt; ) (n *= n), (n %= t);
  return n;
}
function Ej(r) {
  let { P: e } = Ot,
    t = BigInt(5),
    n = BigInt(10),
    o = BigInt(20),
    s = BigInt(40),
    i = BigInt(80),
    u = (((r * r) % e) * r) % e,
    l = (Sn(u, bo) * u) % e,
    w = (Sn(l, We) * r) % e,
    x = (Sn(w, t) * w) % e,
    A = (Sn(x, n) * x) % e,
    _ = (Sn(A, o) * A) % e,
    O = (Sn(_, s) * _) % e,
    D = (Sn(O, i) * O) % e,
    j = (Sn(D, i) * O) % e,
    G = (Sn(j, n) * x) % e;
  return { pow_p_5_8: (Sn(G, bo) * r) % e, b2: u };
}
function Ny(r, e) {
  let t = ne(e * e * e),
    n = ne(t * t * e),
    o = Ej(r * n).pow_p_5_8,
    s = ne(r * t * o),
    i = ne(e * s * s),
    c = s,
    u = ne(s * Ka),
    l = i === r,
    w = i === ne(-r),
    x = i === ne(-r * Ka);
  return l && (s = c), (w || x) && (s = u), xo(s) && (s = ne(-s)), { isValid: l || w, value: s };
}
function eP(r) {
  return Ny(We, r);
}
function gf(r) {
  return ne(Za(r), Ot.l);
}
function _j(r, e) {
  if (r.length !== e.length) return !1;
  for (let t = 0; t < r.length; t++) if (r[t] !== e[t]) return !1;
  return !0;
}
function wo(r, e) {
  let t = r instanceof Uint8Array ? Uint8Array.from(r) : Ly(r);
  if (typeof e == 'number' && t.length !== e) throw new Error(`Expected ${e} bytes`);
  return t;
}
function xf(r, e, t = !0) {
  if (!e) throw new TypeError('Specify max value');
  if (
    (typeof r == 'number' && Number.isSafeInteger(r) && (r = BigInt(r)),
    typeof r == 'bigint' && r < e)
  ) {
    if (t) {
      if (Jt < r) return r;
    } else if (Jt <= r) return r;
  }
  throw new TypeError('Expected valid scalar: 0 < scalar < max');
}
function Aj(r) {
  return (r[0] &= 248), (r[31] &= 127), (r[31] |= 64), r;
}
function nP(r) {
  if (((r = typeof r == 'bigint' || typeof r == 'number' ? rP(xf(r, tP)) : wo(r)), r.length !== 32))
    throw new Error('Expected 32 bytes');
  return r;
}
function oP(r) {
  let e = Aj(r.slice(0, 32)),
    t = r.slice(32, 64),
    n = gf(e),
    o = jt.BASE.multiply(n),
    s = o.toRawBytes();
  return { head: e, prefix: t, scalar: n, point: o, pointBytes: s };
}
var Va;
function bf(...r) {
  if (typeof Va != 'function') throw new Error('utils.sha512Sync must be set to use sync methods');
  return Va(...r);
}
async function sP(r) {
  return oP(await vo.sha512(nP(r)));
}
function Oy(r) {
  return oP(bf(nP(r)));
}
function Rj(r) {
  return Oy(r).pointBytes;
}
function Ij(r, e) {
  r = wo(r);
  let { prefix: t, scalar: n, pointBytes: o } = Oy(e),
    s = gf(bf(t, r)),
    i = jt.BASE.multiply(s),
    c = gf(bf(i.toRawBytes(), o, r)),
    u = ne(s + c * n, Ot.l);
  return new $a(i, u).toRawBytes();
}
function kj(r, e, t) {
  (e = wo(e)), t instanceof jt || (t = jt.fromHex(t, !1));
  let { r: n, s: o } = r instanceof $a ? r.assertValidity() : $a.fromHex(r),
    s = Vt.BASE.multiplyUnsafe(o);
  return { r: n, s: o, SB: s, pub: t, msg: e };
}
function Tj(r, e, t, n) {
  let o = gf(n),
    s = Vt.fromAffine(r).multiplyUnsafe(o);
  return Vt.fromAffine(e).add(s).subtract(t).multiplyUnsafe(Ot.h).equals(Vt.ZERO);
}
function Pj(r, e, t) {
  let { r: n, SB: o, msg: s, pub: i } = kj(r, e, t),
    c = bf(n.toRawBytes(), i.toRawBytes(), s);
  return Tj(i, n, o, c);
}
var vf = { getExtendedPublicKey: Oy, getPublicKey: Rj, sign: Ij, verify: Pj };
jt.BASE._setWindowSize(8);
var go = { node: hj, web: typeof self == 'object' && 'crypto' in self ? self.crypto : void 0 },
  vo = {
    bytesToHex: Ya,
    hexToBytes: Ly,
    concatBytes: Q2,
    getExtendedPublicKey: sP,
    mod: ne,
    invert: wf,
    TORSION_SUBGROUP: [
      '0100000000000000000000000000000000000000000000000000000000000000',
      'c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac037a',
      '0000000000000000000000000000000000000000000000000000000000000080',
      '26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc05',
      'ecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f',
      '26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc85',
      '0000000000000000000000000000000000000000000000000000000000000000',
      'c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac03fa',
    ],
    hashToPrivateScalar: (r) => {
      if (((r = wo(r)), r.length < 40 || r.length > 1024))
        throw new Error('Expected 40-1024 bytes of private key as per FIPS 186');
      return ne(Za(r), Ot.l - We) + We;
    },
    randomBytes: (r = 32) => {
      if (go.web) return go.web.getRandomValues(new Uint8Array(r));
      if (go.node) {
        let { randomBytes: e } = go.node;
        return new Uint8Array(e(r).buffer);
      } else throw new Error("The environment doesn't have randomBytes function");
    },
    randomPrivateKey: () => vo.randomBytes(32),
    sha512: async (...r) => {
      let e = Q2(...r);
      if (go.web) {
        let t = await go.web.subtle.digest('SHA-512', e.buffer);
        return new Uint8Array(t);
      } else {
        if (go.node) return Uint8Array.from(go.node.createHash('sha512').update(e).digest());
        throw new Error("The environment doesn't have sha512 function");
      }
    },
    precompute(r = 8, e = jt.BASE) {
      let t = e.equals(jt.BASE) ? e : new jt(e.x, e.y);
      return t._setWindowSize(r), t.multiply(bo), t;
    },
    sha512Sync: void 0,
  };
Object.defineProperties(vo, {
  sha512Sync: {
    configurable: !1,
    get() {
      return Va;
    },
    set(r) {
      Va || (Va = r);
    },
  },
});
var _0 = _e($c()),
  lr = _e(io());
f();
var Mj = (r, e, t) => (r & e) ^ (~r & t),
  zj = (r, e, t) => (r & e) ^ (r & t) ^ (e & t),
  Lj = new Uint32Array([
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221,
    3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580,
    3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895,
    666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
    2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
    1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298,
  ]),
  So = new Uint32Array([
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225,
  ]),
  Eo = new Uint32Array(64),
  Sf = class extends Ai {
    constructor() {
      super(64, 32, 8, !1),
        (this.A = So[0] | 0),
        (this.B = So[1] | 0),
        (this.C = So[2] | 0),
        (this.D = So[3] | 0),
        (this.E = So[4] | 0),
        (this.F = So[5] | 0),
        (this.G = So[6] | 0),
        (this.H = So[7] | 0);
    }
    get() {
      let { A: e, B: t, C: n, D: o, E: s, F: i, G: c, H: u } = this;
      return [e, t, n, o, s, i, c, u];
    }
    set(e, t, n, o, s, i, c, u) {
      (this.A = e | 0),
        (this.B = t | 0),
        (this.C = n | 0),
        (this.D = o | 0),
        (this.E = s | 0),
        (this.F = i | 0),
        (this.G = c | 0),
        (this.H = u | 0);
    }
    process(e, t) {
      for (let x = 0; x < 16; x++, t += 4) Eo[x] = e.getUint32(t, !1);
      for (let x = 16; x < 64; x++) {
        let A = Eo[x - 15],
          _ = Eo[x - 2],
          O = Jr(A, 7) ^ Jr(A, 18) ^ (A >>> 3),
          D = Jr(_, 17) ^ Jr(_, 19) ^ (_ >>> 10);
        Eo[x] = (D + Eo[x - 7] + O + Eo[x - 16]) | 0;
      }
      let { A: n, B: o, C: s, D: i, E: c, F: u, G: l, H: w } = this;
      for (let x = 0; x < 64; x++) {
        let A = Jr(c, 6) ^ Jr(c, 11) ^ Jr(c, 25),
          _ = (w + A + Mj(c, u, l) + Lj[x] + Eo[x]) | 0,
          D = ((Jr(n, 2) ^ Jr(n, 13) ^ Jr(n, 22)) + zj(n, o, s)) | 0;
        (w = l), (l = u), (u = c), (c = (i + _) | 0), (i = s), (s = o), (o = n), (n = (_ + D) | 0);
      }
      (n = (n + this.A) | 0),
        (o = (o + this.B) | 0),
        (s = (s + this.C) | 0),
        (i = (i + this.D) | 0),
        (c = (c + this.E) | 0),
        (u = (u + this.F) | 0),
        (l = (l + this.G) | 0),
        (w = (w + this.H) | 0),
        this.set(n, o, s, i, c, u, l, w);
    }
    roundClean() {
      Eo.fill(0);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
    }
  },
  Cy = class extends Sf {
    constructor() {
      super(),
        (this.A = -1056596264),
        (this.B = 914150663),
        (this.C = 812702999),
        (this.D = -150054599),
        (this.E = -4191439),
        (this.F = 1750603025),
        (this.G = 1694076839),
        (this.H = -1090891868),
        (this.outputLen = 28);
    }
  },
  Ef = vn(() => new Sf()),
  Ude = vn(() => new Cy());
var Fi = _e(fP()),
  q = _e(wi()),
  LB = _e(wi()),
  Ec = _e(Hy());
f();
var Wy = class extends TypeError {
  constructor(e, t) {
    let n,
      { message: o, ...s } = e,
      { path: i } = e,
      c = i.length === 0 ? o : 'At path: ' + i.join('.') + ' -- ' + o;
    super(c),
      Object.assign(this, s),
      (this.name = this.constructor.name),
      (this.failures = () => {
        var u;
        return (u = n) != null ? u : (n = [e, ...t()]);
      });
  }
};
function eH(r) {
  return Ao(r) && typeof r[Symbol.iterator] == 'function';
}
function Ao(r) {
  return typeof r == 'object' && r != null;
}
function Xr(r) {
  return typeof r == 'string' ? JSON.stringify(r) : '' + r;
}
function tH(r) {
  let { done: e, value: t } = r.next();
  return e ? void 0 : t;
}
function rH(r, e, t, n) {
  if (r === !0) return;
  r === !1 ? (r = {}) : typeof r == 'string' && (r = { message: r });
  let { path: o, branch: s } = e,
    { type: i } = t,
    {
      refinement: c,
      message: u = 'Expected a value of type `' +
        i +
        '`' +
        (c ? ' with refinement `' + c + '`' : '') +
        ', but received: `' +
        Xr(n) +
        '`',
    } = r;
  return {
    value: n,
    type: i,
    refinement: c,
    key: o[o.length - 1],
    path: o,
    branch: s,
    ...r,
    message: u,
  };
}
function* lP(r, e, t, n) {
  eH(r) || (r = [r]);
  for (let o of r) {
    let s = rH(o, e, t, n);
    s && (yield s);
  }
}
function* Ky(r, e, t = {}) {
  let { path: n = [], branch: o = [r], coerce: s = !1, mask: i = !1 } = t,
    c = { path: n, branch: o };
  if (
    s &&
    ((r = e.coercer(r, c)), i && e.type !== 'type' && Ao(e.schema) && Ao(r) && !Array.isArray(r))
  )
    for (let l in r) e.schema[l] === void 0 && delete r[l];
  let u = !0;
  for (let l of e.validator(r, c)) (u = !1), yield [l, void 0];
  for (let [l, w, x] of e.entries(r, c)) {
    let A = Ky(w, x, {
      path: l === void 0 ? n : [...n, l],
      branch: l === void 0 ? o : [...o, w],
      coerce: s,
      mask: i,
    });
    for (let _ of A)
      _[0]
        ? ((u = !1), yield [_[0], void 0])
        : s &&
          ((w = _[1]),
          l === void 0
            ? (r = w)
            : r instanceof Map
              ? r.set(l, w)
              : r instanceof Set
                ? r.add(w)
                : Ao(r) && (r[l] = w));
  }
  if (u) for (let l of e.refiner(r, c)) (u = !1), yield [l, void 0];
  u && (yield [void 0, r]);
}
var Hr = class {
  constructor(e) {
    let {
      type: t,
      schema: n,
      validator: o,
      refiner: s,
      coercer: i = (u) => u,
      entries: c = function* () {},
    } = e;
    (this.type = t),
      (this.schema = n),
      (this.entries = c),
      (this.coercer = i),
      o
        ? (this.validator = (u, l) => {
            let w = o(u, l);
            return lP(w, l, this, u);
          })
        : (this.validator = () => []),
      s
        ? (this.refiner = (u, l) => {
            let w = s(u, l);
            return lP(w, l, this, u);
          })
        : (this.refiner = () => []);
  }
  assert(e) {
    return dP(e, this);
  }
  create(e) {
    return Ti(e, this);
  }
  is(e) {
    return hP(e, this);
  }
  mask(e) {
    return nH(e, this);
  }
  validate(e, t = {}) {
    return Ja(e, this, t);
  }
};
function dP(r, e) {
  let t = Ja(r, e);
  if (t[0]) throw t[0];
}
function Ti(r, e) {
  let t = Ja(r, e, { coerce: !0 });
  if (t[0]) throw t[0];
  return t[1];
}
function nH(r, e) {
  let t = Ja(r, e, { coerce: !0, mask: !0 });
  if (t[0]) throw t[0];
  return t[1];
}
function hP(r, e) {
  return !Ja(r, e)[0];
}
function Ja(r, e, t = {}) {
  let n = Ky(r, e, t),
    o = tH(n);
  return o[0]
    ? [
        new Wy(o[0], function* () {
          for (let i of n) i[0] && (yield i[0]);
        }),
        void 0,
      ]
    : [void 0, o[1]];
}
function Bs(r, e) {
  return new Hr({ type: r, schema: null, validator: e });
}
function mP() {
  return Bs('any', () => !0);
}
function Se(r) {
  return new Hr({
    type: 'array',
    schema: r,
    *entries(e) {
      if (r && Array.isArray(e)) for (let [t, n] of e.entries()) yield [t, n, r];
    },
    coercer(e) {
      return Array.isArray(e) ? e.slice() : e;
    },
    validator(e) {
      return Array.isArray(e) || 'Expected an array value, but received: ' + Xr(e);
    },
  });
}
function An() {
  return Bs('boolean', (r) => typeof r == 'boolean');
}
function Bf(r) {
  return Bs(
    'instance',
    (e) => e instanceof r || 'Expected a `' + r.name + '` instance, but received: ' + Xr(e)
  );
}
function Ut(r) {
  let e = Xr(r),
    t = typeof r;
  return new Hr({
    type: 'literal',
    schema: t === 'string' || t === 'number' || t === 'boolean' ? r : null,
    validator(n) {
      return n === r || 'Expected the literal `' + e + '`, but received: ' + Xr(n);
    },
  });
}
function oH() {
  return Bs('never', () => !1);
}
function be(r) {
  return new Hr({
    ...r,
    validator: (e, t) => e === null || r.validator(e, t),
    refiner: (e, t) => e === null || r.refiner(e, t),
  });
}
function V() {
  return Bs(
    'number',
    (r) => (typeof r == 'number' && !isNaN(r)) || 'Expected a number, but received: ' + Xr(r)
  );
}
function ke(r) {
  return new Hr({
    ...r,
    validator: (e, t) => e === void 0 || r.validator(e, t),
    refiner: (e, t) => e === void 0 || r.refiner(e, t),
  });
}
function Vy(r, e) {
  return new Hr({
    type: 'record',
    schema: null,
    *entries(t) {
      if (Ao(t))
        for (let n in t) {
          let o = t[n];
          yield [n, n, r], yield [n, o, e];
        }
    },
    validator(t) {
      return Ao(t) || 'Expected an object, but received: ' + Xr(t);
    },
  });
}
function de() {
  return Bs('string', (r) => typeof r == 'string' || 'Expected a string, but received: ' + Xr(r));
}
function Mf(r) {
  let e = oH();
  return new Hr({
    type: 'tuple',
    schema: null,
    *entries(t) {
      if (Array.isArray(t)) {
        let n = Math.max(r.length, t.length);
        for (let o = 0; o < n; o++) yield [o, t[o], r[o] || e];
      }
    },
    validator(t) {
      return Array.isArray(t) || 'Expected an array, but received: ' + Xr(t);
    },
  });
}
function ie(r) {
  let e = Object.keys(r);
  return new Hr({
    type: 'type',
    schema: r,
    *entries(t) {
      if (Ao(t)) for (let n of e) yield [n, t[n], r[n]];
    },
    validator(t) {
      return Ao(t) || 'Expected an object, but received: ' + Xr(t);
    },
  });
}
function gr(r) {
  let e = r.map((t) => t.type).join(' | ');
  return new Hr({
    type: 'union',
    schema: null,
    validator(t, n) {
      let o = [];
      for (let s of r) {
        let [...i] = Ky(t, s, n),
          [c] = i;
        if (c[0]) for (let [u] of i) u && o.push(u);
        else return [];
      }
      return ['Expected the value to satisfy a union of `' + e + '`, but received: ' + Xr(t), ...o];
    },
  });
}
function Pi() {
  return Bs('unknown', () => !0);
}
function Bi(r, e, t) {
  return new Hr({ ...r, coercer: (n, o) => (hP(n, e) ? r.coercer(t(n, o), o) : r.coercer(n, o)) });
}
var S9 = _e(qP()),
  E9 = _e(QP()),
  _9 = _e(tB());
f();
var [oB, sB, iB] = [[], [], []],
  e9 = BigInt(0),
  dc = BigInt(1),
  t9 = BigInt(2),
  r9 = BigInt(7),
  n9 = BigInt(256),
  o9 = BigInt(113);
for (let r = 0, e = dc, t = 1, n = 0; r < 24; r++) {
  ([t, n] = [n, (2 * t + 3 * n) % 5]),
    oB.push(2 * (5 * n + t)),
    sB.push((((r + 1) * (r + 2)) / 2) % 64);
  let o = e9;
  for (let s = 0; s < 7; s++)
    (e = ((e << dc) ^ ((e >> r9) * o9)) % n9), e & t9 && (o ^= dc << ((dc << BigInt(s)) - dc));
  iB.push(o);
}
var [s9, i9] = Le.split(iB, !0),
  rB = (r, e, t) => (t > 32 ? Le.rotlBH(r, e, t) : Le.rotlSH(r, e, t)),
  nB = (r, e, t) => (t > 32 ? Le.rotlBL(r, e, t) : Le.rotlSL(r, e, t));
function a9(r, e = 24) {
  let t = new Uint32Array(10);
  for (let n = 24 - e; n < 24; n++) {
    for (let i = 0; i < 10; i++) t[i] = r[i] ^ r[i + 10] ^ r[i + 20] ^ r[i + 30] ^ r[i + 40];
    for (let i = 0; i < 10; i += 2) {
      let c = (i + 8) % 10,
        u = (i + 2) % 10,
        l = t[u],
        w = t[u + 1],
        x = rB(l, w, 1) ^ t[c],
        A = nB(l, w, 1) ^ t[c + 1];
      for (let _ = 0; _ < 50; _ += 10) (r[i + _] ^= x), (r[i + _ + 1] ^= A);
    }
    let o = r[2],
      s = r[3];
    for (let i = 0; i < 24; i++) {
      let c = sB[i],
        u = rB(o, s, c),
        l = nB(o, s, c),
        w = oB[i];
      (o = r[w]), (s = r[w + 1]), (r[w] = u), (r[w + 1] = l);
    }
    for (let i = 0; i < 50; i += 10) {
      for (let c = 0; c < 10; c++) t[c] = r[i + c];
      for (let c = 0; c < 10; c++) r[i + c] ^= ~t[(c + 2) % 10] & t[(c + 4) % 10];
    }
    (r[0] ^= s9[n]), (r[1] ^= i9[n]);
  }
  t.fill(0);
}
var Jf = class r extends lo {
    constructor(e, t, n, o = !1, s = 24) {
      if (
        (super(),
        (this.blockLen = e),
        (this.suffix = t),
        (this.outputLen = n),
        (this.enableXOF = o),
        (this.rounds = s),
        (this.pos = 0),
        (this.posOut = 0),
        (this.finished = !1),
        (this.destroyed = !1),
        ir.number(n),
        0 >= this.blockLen || this.blockLen >= 200)
      )
        throw new Error('Sha3 supports only keccak-f1600 function');
      (this.state = new Uint8Array(200)), (this.state32 = V2(this.state));
    }
    keccak() {
      a9(this.state32, this.rounds), (this.posOut = 0), (this.pos = 0);
    }
    update(e) {
      ir.exists(this);
      let { blockLen: t, state: n } = this;
      e = ho(e);
      let o = e.length;
      for (let s = 0; s < o; ) {
        let i = Math.min(t - this.pos, o - s);
        for (let c = 0; c < i; c++) n[this.pos++] ^= e[s++];
        this.pos === t && this.keccak();
      }
      return this;
    }
    finish() {
      if (this.finished) return;
      this.finished = !0;
      let { state: e, suffix: t, pos: n, blockLen: o } = this;
      (e[n] ^= t), t & 128 && n === o - 1 && this.keccak(), (e[o - 1] ^= 128), this.keccak();
    }
    writeInto(e) {
      ir.exists(this, !1), ir.bytes(e), this.finish();
      let t = this.state,
        { blockLen: n } = this;
      for (let o = 0, s = e.length; o < s; ) {
        this.posOut >= n && this.keccak();
        let i = Math.min(n - this.posOut, s - o);
        e.set(t.subarray(this.posOut, this.posOut + i), o), (this.posOut += i), (o += i);
      }
      return e;
    }
    xofInto(e) {
      if (!this.enableXOF) throw new Error('XOF is not possible for this instance');
      return this.writeInto(e);
    }
    xof(e) {
      return ir.number(e), this.xofInto(new Uint8Array(e));
    }
    digestInto(e) {
      if ((ir.output(e, this), this.finished)) throw new Error('digest() was already called');
      return this.writeInto(e), this.destroy(), e;
    }
    digest() {
      return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
      (this.destroyed = !0), this.state.fill(0);
    }
    _cloneInto(e) {
      let { blockLen: t, suffix: n, outputLen: o, rounds: s, enableXOF: i } = this;
      return (
        e || (e = new r(t, n, o, i, s)),
        e.state32.set(this.state32),
        (e.pos = this.pos),
        (e.posOut = this.posOut),
        (e.finished = this.finished),
        (e.rounds = s),
        (e.suffix = n),
        (e.outputLen = o),
        (e.enableXOF = i),
        (e.destroyed = this.destroyed),
        e
      );
    }
  },
  Po = (r, e, t) => vn(() => new Jf(e, r, t)),
  yme = Po(6, 144, 224 / 8),
  gme = Po(6, 136, 256 / 8),
  xme = Po(6, 104, 384 / 8),
  bme = Po(6, 72, 512 / 8),
  wme = Po(1, 144, 224 / 8),
  d0 = Po(1, 136, 256 / 8),
  vme = Po(1, 104, 384 / 8),
  Sme = Po(1, 72, 512 / 8),
  aB = (r, e, t) => $2((n = {}) => new Jf(e, r, n.dkLen === void 0 ? t : n.dkLen, !0)),
  Eme = aB(31, 168, 128 / 8),
  _me = aB(31, 136, 256 / 8);
f();
var Xf = class extends lo {
    constructor(e, t) {
      super(), (this.finished = !1), (this.destroyed = !1), ir.hash(e);
      let n = ho(t);
      if (((this.iHash = e.create()), typeof this.iHash.update != 'function'))
        throw new TypeError('Expected instance of class which extends utils.Hash');
      (this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen);
      let o = this.blockLen,
        s = new Uint8Array(o);
      s.set(n.length > o ? e.create().update(n).digest() : n);
      for (let i = 0; i < s.length; i++) s[i] ^= 54;
      this.iHash.update(s), (this.oHash = e.create());
      for (let i = 0; i < s.length; i++) s[i] ^= 106;
      this.oHash.update(s), s.fill(0);
    }
    update(e) {
      return ir.exists(this), this.iHash.update(e), this;
    }
    digestInto(e) {
      ir.exists(this),
        ir.bytes(e, this.outputLen),
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
      let { oHash: t, iHash: n, finished: o, destroyed: s, blockLen: i, outputLen: c } = this;
      return (
        (e = e),
        (e.finished = o),
        (e.destroyed = s),
        (e.blockLen = i),
        (e.outputLen = c),
        (e.oHash = t._cloneInto(e.oHash)),
        (e.iHash = n._cloneInto(e.iHash)),
        e
      );
    }
    destroy() {
      (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
    }
  },
  h0 = (r, e, t) => new Xf(r, e).update(t).digest();
h0.create = (r, e) => new Xf(r, e);
f();
var c9 = _e(Ty(), 1);
var Ke = BigInt(0),
  Ct = BigInt(1),
  Mo = BigInt(2),
  mc = BigInt(3),
  cB = BigInt(8),
  Wt = Object.freeze({
    a: Ke,
    b: BigInt(7),
    P: BigInt('0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f'),
    n: BigInt('0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141'),
    h: Ct,
    Gx: BigInt('55066263022277343669578718895168534326250603453777594175500187360389116729240'),
    Gy: BigInt('32670510020758816978083085130507043184471273380659243275938904335757337482424'),
    beta: BigInt('0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee'),
  }),
  uB = (r, e) => (r + e / Mo) / e,
  Qf = {
    beta: BigInt('0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee'),
    splitScalar(r) {
      let { n: e } = Wt,
        t = BigInt('0x3086d221a7d46bcde86c90e49284eb15'),
        n = -Ct * BigInt('0xe4437ed6010e88286f547fa90abfe4c3'),
        o = BigInt('0x114ca50f7a8e2f3f657c1108d9d44cfd8'),
        s = t,
        i = BigInt('0x100000000000000000000000000000000'),
        c = uB(s * r, e),
        u = uB(-n * r, e),
        l = ve(r - c * t - u * o, e),
        w = ve(-c * n - u * s, e),
        x = l > i,
        A = w > i;
      if ((x && (l = e - l), A && (w = e - w), l > i || w > i))
        throw new Error('splitScalarEndo: Endomorphism failed, k=' + r);
      return { k1neg: x, k1: l, k2neg: A, k2: w };
    },
  },
  en = 32,
  Oi = 32,
  u9 = 32,
  pB = en + 1,
  fB = 2 * en + 1;
function lB(r) {
  let { a: e, b: t } = Wt,
    n = ve(r * r),
    o = ve(n * r);
  return ve(o + e * r + t);
}
var el = Wt.a === Ke,
  nl = class extends Error {
    constructor(e) {
      super(e);
    }
  };
function dB(r) {
  if (!(r instanceof br)) throw new TypeError('JacobianPoint expected');
}
var br = class r {
  constructor(e, t, n) {
    (this.x = e), (this.y = t), (this.z = n);
  }
  static fromAffine(e) {
    if (!(e instanceof tr)) throw new TypeError('JacobianPoint#fromAffine: expected Point');
    return e.equals(tr.ZERO) ? r.ZERO : new r(e.x, e.y, Ct);
  }
  static toAffineBatch(e) {
    let t = h9(e.map((n) => n.z));
    return e.map((n, o) => n.toAffine(t[o]));
  }
  static normalizeZ(e) {
    return r.toAffineBatch(e).map(r.fromAffine);
  }
  equals(e) {
    dB(e);
    let { x: t, y: n, z: o } = this,
      { x: s, y: i, z: c } = e,
      u = ve(o * o),
      l = ve(c * c),
      w = ve(t * l),
      x = ve(s * u),
      A = ve(ve(n * c) * l),
      _ = ve(ve(i * o) * u);
    return w === x && A === _;
  }
  negate() {
    return new r(this.x, ve(-this.y), this.z);
  }
  double() {
    let { x: e, y: t, z: n } = this,
      o = ve(e * e),
      s = ve(t * t),
      i = ve(s * s),
      c = e + s,
      u = ve(Mo * (ve(c * c) - o - i)),
      l = ve(mc * o),
      w = ve(l * l),
      x = ve(w - Mo * u),
      A = ve(l * (u - x) - cB * i),
      _ = ve(Mo * t * n);
    return new r(x, A, _);
  }
  add(e) {
    dB(e);
    let { x: t, y: n, z: o } = this,
      { x: s, y: i, z: c } = e;
    if (s === Ke || i === Ke) return this;
    if (t === Ke || n === Ke) return e;
    let u = ve(o * o),
      l = ve(c * c),
      w = ve(t * l),
      x = ve(s * u),
      A = ve(ve(n * c) * l),
      _ = ve(ve(i * o) * u),
      O = ve(x - w),
      D = ve(_ - A);
    if (O === Ke) return D === Ke ? this.double() : r.ZERO;
    let j = ve(O * O),
      G = ve(O * j),
      H = ve(w * j),
      ae = ve(D * D - G - Mo * H),
      ee = ve(D * (H - ae) - A * G),
      re = ve(o * c * O);
    return new r(ae, ee, re);
  }
  subtract(e) {
    return this.add(e.negate());
  }
  multiplyUnsafe(e) {
    let t = r.ZERO;
    if (typeof e == 'bigint' && e === Ke) return t;
    let n = yB(e);
    if (n === Ct) return this;
    if (!el) {
      let x = t,
        A = this;
      for (; n > Ke; ) n & Ct && (x = x.add(A)), (A = A.double()), (n >>= Ct);
      return x;
    }
    let { k1neg: o, k1: s, k2neg: i, k2: c } = Qf.splitScalar(n),
      u = t,
      l = t,
      w = this;
    for (; s > Ke || c > Ke; )
      s & Ct && (u = u.add(w)), c & Ct && (l = l.add(w)), (w = w.double()), (s >>= Ct), (c >>= Ct);
    return (
      o && (u = u.negate()),
      i && (l = l.negate()),
      (l = new r(ve(l.x * Qf.beta), l.y, l.z)),
      u.add(l)
    );
  }
  precomputeWindow(e) {
    let t = el ? 128 / e + 1 : 256 / e + 1,
      n = [],
      o = this,
      s = o;
    for (let i = 0; i < t; i++) {
      (s = o), n.push(s);
      for (let c = 1; c < 2 ** (e - 1); c++) (s = s.add(o)), n.push(s);
      o = s.double();
    }
    return n;
  }
  wNAF(e, t) {
    !t && this.equals(r.BASE) && (t = tr.BASE);
    let n = (t && t._WINDOW_SIZE) || 1;
    if (256 % n) throw new Error('Point#wNAF: Invalid precomputation window, must be power of 2');
    let o = t && y0.get(t);
    o || ((o = this.precomputeWindow(n)), t && n !== 1 && ((o = r.normalizeZ(o)), y0.set(t, o)));
    let s = r.ZERO,
      i = r.BASE,
      c = 1 + (el ? 128 / n : 256 / n),
      u = 2 ** (n - 1),
      l = BigInt(2 ** n - 1),
      w = 2 ** n,
      x = BigInt(n);
    for (let A = 0; A < c; A++) {
      let _ = A * u,
        O = Number(e & l);
      (e >>= x), O > u && ((O -= w), (e += Ct));
      let D = _,
        j = _ + Math.abs(O) - 1,
        G = A % 2 !== 0,
        H = O < 0;
      O === 0 ? (i = i.add(tl(G, o[D]))) : (s = s.add(tl(H, o[j])));
    }
    return { p: s, f: i };
  }
  multiply(e, t) {
    let n = yB(e),
      o,
      s;
    if (el) {
      let { k1neg: i, k1: c, k2neg: u, k2: l } = Qf.splitScalar(n),
        { p: w, f: x } = this.wNAF(c, t),
        { p: A, f: _ } = this.wNAF(l, t);
      (w = tl(i, w)),
        (A = tl(u, A)),
        (A = new r(ve(A.x * Qf.beta), A.y, A.z)),
        (o = w.add(A)),
        (s = x.add(_));
    } else {
      let { p: i, f: c } = this.wNAF(n, t);
      (o = i), (s = c);
    }
    return r.normalizeZ([o, s])[0];
  }
  toAffine(e) {
    let { x: t, y: n, z: o } = this,
      s = this.equals(r.ZERO);
    e == null && (e = s ? cB : bc(o));
    let i = e,
      c = ve(i * i),
      u = ve(c * i),
      l = ve(t * c),
      w = ve(n * u),
      x = ve(o * i);
    if (s) return tr.ZERO;
    if (x !== Ct) throw new Error('invZ was invalid');
    return new tr(l, w);
  }
};
br.BASE = new br(Wt.Gx, Wt.Gy, Ct);
br.ZERO = new br(Ke, Ct, Ke);
function tl(r, e) {
  let t = e.negate();
  return r ? t : e;
}
var y0 = new WeakMap(),
  tr = class r {
    constructor(e, t) {
      (this.x = e), (this.y = t);
    }
    _setWindowSize(e) {
      (this._WINDOW_SIZE = e), y0.delete(this);
    }
    hasEvenY() {
      return this.y % Mo === Ke;
    }
    static fromCompressedHex(e) {
      let t = e.length === 32,
        n = zo(t ? e : e.subarray(1));
      if (!m0(n)) throw new Error('Point is not on curve');
      let o = lB(n),
        s = d9(o),
        i = (s & Ct) === Ct;
      t ? i && (s = ve(-s)) : ((e[0] & 1) === 1) !== i && (s = ve(-s));
      let c = new r(n, s);
      return c.assertValidity(), c;
    }
    static fromUncompressedHex(e) {
      let t = zo(e.subarray(1, en + 1)),
        n = zo(e.subarray(en + 1, en * 2 + 1)),
        o = new r(t, n);
      return o.assertValidity(), o;
    }
    static fromHex(e) {
      let t = gc(e),
        n = t.length,
        o = t[0];
      if (n === en) return this.fromCompressedHex(t);
      if (n === pB && (o === 2 || o === 3)) return this.fromCompressedHex(t);
      if (n === fB && o === 4) return this.fromUncompressedHex(t);
      throw new Error(
        `Point.fromHex: received invalid point. Expected 32-${pB} compressed bytes or ${fB} uncompressed bytes, not ${n}`
      );
    }
    static fromPrivateKey(e) {
      return r.BASE.multiply(sl(e));
    }
    static fromSignature(e, t, n) {
      let { r: o, s } = g9(t);
      if (![0, 1, 2, 3].includes(n)) throw new Error('Cannot recover: invalid recovery bit');
      let i = gB(gc(e)),
        { n: c } = Wt,
        u = n === 2 || n === 3 ? o + c : o,
        l = bc(u, c),
        w = ve(-i * l, c),
        x = ve(s * l, c),
        A = n & 1 ? '03' : '02',
        _ = r.fromHex(A + Li(u)),
        O = r.BASE.multiplyAndAddUnsafe(_, w, x);
      if (!O) throw new Error('Cannot recover signature: point at infinify');
      return O.assertValidity(), O;
    }
    toRawBytes(e = !1) {
      return zs(this.toHex(e));
    }
    toHex(e = !1) {
      let t = Li(this.x);
      return e ? `${this.hasEvenY() ? '02' : '03'}${t}` : `04${t}${Li(this.y)}`;
    }
    toHexX() {
      return this.toHex(!0).slice(2);
    }
    toRawX() {
      return this.toRawBytes(!0).slice(1);
    }
    assertValidity() {
      let e = 'Point is not on elliptic curve',
        { x: t, y: n } = this;
      if (!m0(t) || !m0(n)) throw new Error(e);
      let o = ve(n * n),
        s = lB(t);
      if (ve(o - s) !== Ke) throw new Error(e);
    }
    equals(e) {
      return this.x === e.x && this.y === e.y;
    }
    negate() {
      return new r(this.x, ve(-this.y));
    }
    double() {
      return br.fromAffine(this).double().toAffine();
    }
    add(e) {
      return br.fromAffine(this).add(br.fromAffine(e)).toAffine();
    }
    subtract(e) {
      return this.add(e.negate());
    }
    multiply(e) {
      return br.fromAffine(this).multiply(e, this).toAffine();
    }
    multiplyAndAddUnsafe(e, t, n) {
      let o = br.fromAffine(this),
        s = t === Ke || t === Ct || this !== r.BASE ? o.multiplyUnsafe(t) : o.multiply(t),
        i = br.fromAffine(e).multiplyUnsafe(n),
        c = s.add(i);
      return c.equals(br.ZERO) ? void 0 : c.toAffine();
    }
  };
tr.BASE = new tr(Wt.Gx, Wt.Gy);
tr.ZERO = new tr(Ke, Ke);
function hB(r) {
  return Number.parseInt(r[0], 16) >= 8 ? '00' + r : r;
}
function mB(r) {
  if (r.length < 2 || r[0] !== 2) throw new Error(`Invalid signature integer tag: ${Ci(r)}`);
  let e = r[1],
    t = r.subarray(2, e + 2);
  if (!e || t.length !== e) throw new Error('Invalid signature integer: wrong length');
  if (t[0] === 0 && t[1] <= 127) throw new Error('Invalid signature integer: trailing length');
  return { data: zo(t), left: r.subarray(e + 2) };
}
function p9(r) {
  if (r.length < 2 || r[0] != 48) throw new Error(`Invalid signature tag: ${Ci(r)}`);
  if (r[1] !== r.length - 2) throw new Error('Invalid signature: incorrect length');
  let { data: e, left: t } = mB(r.subarray(2)),
    { data: n, left: o } = mB(t);
  if (o.length) throw new Error(`Invalid signature: left bytes after parsing: ${Ci(o)}`);
  return { r: e, s: n };
}
var zi = class r {
  constructor(e, t) {
    (this.r = e), (this.s = t), this.assertValidity();
  }
  static fromCompact(e) {
    let t = e instanceof Uint8Array,
      n = 'Signature.fromCompact';
    if (typeof e != 'string' && !t) throw new TypeError(`${n}: Expected string or Uint8Array`);
    let o = t ? Ci(e) : e;
    if (o.length !== 128) throw new Error(`${n}: Expected 64-byte hex`);
    return new r(ol(o.slice(0, 64)), ol(o.slice(64, 128)));
  }
  static fromDER(e) {
    let t = e instanceof Uint8Array;
    if (typeof e != 'string' && !t)
      throw new TypeError('Signature.fromDER: Expected string or Uint8Array');
    let { r: n, s: o } = p9(t ? e : zs(e));
    return new r(n, o);
  }
  static fromHex(e) {
    return this.fromDER(e);
  }
  assertValidity() {
    let { r: e, s: t } = this;
    if (!xc(e)) throw new Error('Invalid Signature: r must be 0 < r < n');
    if (!xc(t)) throw new Error('Invalid Signature: s must be 0 < s < n');
  }
  hasHighS() {
    let e = Wt.n >> Ct;
    return this.s > e;
  }
  normalizeS() {
    return this.hasHighS() ? new r(this.r, ve(-this.s, Wt.n)) : this;
  }
  toDERRawBytes() {
    return zs(this.toDERHex());
  }
  toDERHex() {
    let e = hB(hc(this.s)),
      t = hB(hc(this.r)),
      n = e.length / 2,
      o = t.length / 2,
      s = hc(n),
      i = hc(o);
    return `30${hc(o + n + 4)}02${i}${t}02${s}${e}`;
  }
  toRawBytes() {
    return this.toDERRawBytes();
  }
  toHex() {
    return this.toDERHex();
  }
  toCompactRawBytes() {
    return zs(this.toCompactHex());
  }
  toCompactHex() {
    return Li(this.r) + Li(this.s);
  }
};
function Bo(...r) {
  if (!r.every((n) => n instanceof Uint8Array)) throw new Error('Uint8Array list expected');
  if (r.length === 1) return r[0];
  let e = r.reduce((n, o) => n + o.length, 0),
    t = new Uint8Array(e);
  for (let n = 0, o = 0; n < r.length; n++) {
    let s = r[n];
    t.set(s, o), (o += s.length);
  }
  return t;
}
var f9 = Array.from({ length: 256 }, (r, e) => e.toString(16).padStart(2, '0'));
function Ci(r) {
  if (!(r instanceof Uint8Array)) throw new Error('Expected Uint8Array');
  let e = '';
  for (let t = 0; t < r.length; t++) e += f9[r[t]];
  return e;
}
var l9 = BigInt('0x10000000000000000000000000000000000000000000000000000000000000000');
function Li(r) {
  if (typeof r != 'bigint') throw new Error('Expected bigint');
  if (!(Ke <= r && r < l9)) throw new Error('Expected number 0 <= n < 2^256');
  return r.toString(16).padStart(64, '0');
}
function g0(r) {
  let e = zs(Li(r));
  if (e.length !== 32) throw new Error('Error: expected 32 bytes');
  return e;
}
function hc(r) {
  let e = r.toString(16);
  return e.length & 1 ? `0${e}` : e;
}
function ol(r) {
  if (typeof r != 'string') throw new TypeError('hexToNumber: expected string, got ' + typeof r);
  return BigInt(`0x${r}`);
}
function zs(r) {
  if (typeof r != 'string') throw new TypeError('hexToBytes: expected string, got ' + typeof r);
  if (r.length % 2) throw new Error('hexToBytes: received invalid unpadded hex' + r.length);
  let e = new Uint8Array(r.length / 2);
  for (let t = 0; t < e.length; t++) {
    let n = t * 2,
      o = r.slice(n, n + 2),
      s = Number.parseInt(o, 16);
    if (Number.isNaN(s) || s < 0) throw new Error('Invalid byte sequence');
    e[t] = s;
  }
  return e;
}
function zo(r) {
  return ol(Ci(r));
}
function gc(r) {
  return r instanceof Uint8Array ? Uint8Array.from(r) : zs(r);
}
function yB(r) {
  if (typeof r == 'number' && Number.isSafeInteger(r) && r > 0) return BigInt(r);
  if (typeof r == 'bigint' && xc(r)) return r;
  throw new TypeError('Expected valid private scalar: 0 < scalar < curve.n');
}
function ve(r, e = Wt.P) {
  let t = r % e;
  return t >= Ke ? t : e + t;
}
function Wr(r, e) {
  let { P: t } = Wt,
    n = r;
  for (; e-- > Ke; ) (n *= n), (n %= t);
  return n;
}
function d9(r) {
  let { P: e } = Wt,
    t = BigInt(6),
    n = BigInt(11),
    o = BigInt(22),
    s = BigInt(23),
    i = BigInt(44),
    c = BigInt(88),
    u = (r * r * r) % e,
    l = (u * u * r) % e,
    w = (Wr(l, mc) * l) % e,
    x = (Wr(w, mc) * l) % e,
    A = (Wr(x, Mo) * u) % e,
    _ = (Wr(A, n) * A) % e,
    O = (Wr(_, o) * _) % e,
    D = (Wr(O, i) * O) % e,
    j = (Wr(D, c) * D) % e,
    G = (Wr(j, i) * O) % e,
    H = (Wr(G, mc) * l) % e,
    ae = (Wr(H, s) * _) % e,
    ee = (Wr(ae, t) * u) % e,
    re = Wr(ee, Mo);
  if ((re * re) % e !== r) throw new Error('Cannot find square root');
  return re;
}
function bc(r, e = Wt.P) {
  if (r === Ke || e <= Ke)
    throw new Error(`invert: expected positive integers, got n=${r} mod=${e}`);
  let t = ve(r, e),
    n = e,
    o = Ke,
    s = Ct,
    i = Ct,
    c = Ke;
  for (; t !== Ke; ) {
    let l = n / t,
      w = n % t,
      x = o - i * l,
      A = s - c * l;
    (n = t), (t = w), (o = i), (s = c), (i = x), (c = A);
  }
  if (n !== Ct) throw new Error('invert: does not exist');
  return ve(o, e);
}
function h9(r, e = Wt.P) {
  let t = new Array(r.length),
    n = r.reduce((s, i, c) => (i === Ke ? s : ((t[c] = s), ve(s * i, e))), Ct),
    o = bc(n, e);
  return (
    r.reduceRight((s, i, c) => (i === Ke ? s : ((t[c] = ve(s * t[c], e)), ve(s * i, e))), o), t
  );
}
function m9(r) {
  let e = r.length * 8 - Oi * 8,
    t = zo(r);
  return e > 0 ? t >> BigInt(e) : t;
}
function gB(r, e = !1) {
  let t = m9(r);
  if (e) return t;
  let { n } = Wt;
  return t >= n ? t - n : t;
}
var Ni,
  yc,
  x0 = class {
    constructor(e, t) {
      if (((this.hashLen = e), (this.qByteLen = t), typeof e != 'number' || e < 2))
        throw new Error('hashLen must be a number');
      if (typeof t != 'number' || t < 2) throw new Error('qByteLen must be a number');
      (this.v = new Uint8Array(e).fill(1)),
        (this.k = new Uint8Array(e).fill(0)),
        (this.counter = 0);
    }
    hmac(...e) {
      return Rn.hmacSha256(this.k, ...e);
    }
    hmacSync(...e) {
      return yc(this.k, ...e);
    }
    checkSync() {
      if (typeof yc != 'function') throw new nl('hmacSha256Sync needs to be set');
    }
    incr() {
      if (this.counter >= 1e3) throw new Error('Tried 1,000 k values for sign(), all were invalid');
      this.counter += 1;
    }
    async reseed(e = new Uint8Array()) {
      (this.k = await this.hmac(this.v, Uint8Array.from([0]), e)),
        (this.v = await this.hmac(this.v)),
        e.length !== 0 &&
          ((this.k = await this.hmac(this.v, Uint8Array.from([1]), e)),
          (this.v = await this.hmac(this.v)));
    }
    reseedSync(e = new Uint8Array()) {
      this.checkSync(),
        (this.k = this.hmacSync(this.v, Uint8Array.from([0]), e)),
        (this.v = this.hmacSync(this.v)),
        e.length !== 0 &&
          ((this.k = this.hmacSync(this.v, Uint8Array.from([1]), e)),
          (this.v = this.hmacSync(this.v)));
    }
    async generate() {
      this.incr();
      let e = 0,
        t = [];
      for (; e < this.qByteLen; ) {
        this.v = await this.hmac(this.v);
        let n = this.v.slice();
        t.push(n), (e += this.v.length);
      }
      return Bo(...t);
    }
    generateSync() {
      this.checkSync(), this.incr();
      let e = 0,
        t = [];
      for (; e < this.qByteLen; ) {
        this.v = this.hmacSync(this.v);
        let n = this.v.slice();
        t.push(n), (e += this.v.length);
      }
      return Bo(...t);
    }
  };
function xc(r) {
  return Ke < r && r < Wt.n;
}
function m0(r) {
  return Ke < r && r < Wt.P;
}
function y9(r, e, t, n = !0) {
  let { n: o } = Wt,
    s = gB(r, !0);
  if (!xc(s)) return;
  let i = bc(s, o),
    c = tr.BASE.multiply(s),
    u = ve(c.x, o);
  if (u === Ke) return;
  let l = ve(i * ve(e + t * u, o), o);
  if (l === Ke) return;
  let w = new zi(u, l),
    x = (c.x === w.r ? 0 : 2) | Number(c.y & Ct);
  return n && w.hasHighS() && ((w = w.normalizeS()), (x ^= 1)), { sig: w, recovery: x };
}
function sl(r) {
  let e;
  if (typeof r == 'bigint') e = r;
  else if (typeof r == 'number' && Number.isSafeInteger(r) && r > 0) e = BigInt(r);
  else if (typeof r == 'string') {
    if (r.length !== 2 * Oi) throw new Error('Expected 32 bytes of private key');
    e = ol(r);
  } else if (r instanceof Uint8Array) {
    if (r.length !== Oi) throw new Error('Expected 32 bytes of private key');
    e = zo(r);
  } else throw new TypeError('Expected valid private key');
  if (!xc(e)) throw new Error('Expected private key: 0 < key < n');
  return e;
}
function g9(r) {
  if (r instanceof zi) return r.assertValidity(), r;
  try {
    return zi.fromDER(r);
  } catch {
    return zi.fromCompact(r);
  }
}
function xB(r, e = !1) {
  return tr.fromPrivateKey(r).toRawBytes(e);
}
function bB(r) {
  let e = r.length > en ? r.slice(0, en) : r;
  return zo(e);
}
function x9(r) {
  let e = bB(r),
    t = ve(e, Wt.n);
  return wB(t < Ke ? e : t);
}
function wB(r) {
  return g0(r);
}
function b9(r, e, t) {
  if (r == null) throw new Error(`sign: expected valid message hash, not "${r}"`);
  let n = gc(r),
    o = sl(e),
    s = [wB(o), x9(n)];
  if (t != null) {
    t === !0 && (t = Rn.randomBytes(en));
    let u = gc(t);
    if (u.length !== en) throw new Error(`sign: Expected ${en} bytes of extra data`);
    s.push(u);
  }
  let i = Bo(...s),
    c = bB(n);
  return { seed: i, m: c, d: o };
}
function w9(r, e) {
  let { sig: t, recovery: n } = r,
    { der: o, recovered: s } = Object.assign({ canonical: !0, der: !0 }, e),
    i = o ? t.toDERRawBytes() : t.toCompactRawBytes();
  return s ? [i, n] : i;
}
function vB(r, e, t = {}) {
  let { seed: n, m: o, d: s } = b9(r, e, t.extraEntropy),
    i = new x0(u9, Oi);
  i.reseedSync(n);
  let c;
  for (; !(c = y9(i.generateSync(), o, s, t.canonical)); ) i.reseedSync();
  return w9(c, t);
}
tr.BASE._setWindowSize(8);
var Br = { node: c9, web: typeof self == 'object' && 'crypto' in self ? self.crypto : void 0 };
var rl = {},
  Rn = {
    bytesToHex: Ci,
    hexToBytes: zs,
    concatBytes: Bo,
    mod: ve,
    invert: bc,
    isValidPrivateKey(r) {
      try {
        return sl(r), !0;
      } catch {
        return !1;
      }
    },
    _bigintTo32Bytes: g0,
    _normalizePrivateKey: sl,
    hashToPrivateKey: (r) => {
      r = gc(r);
      let e = Oi + 8;
      if (r.length < e || r.length > 1024)
        throw new Error('Expected valid bytes of private key as per FIPS 186');
      let t = ve(zo(r), Wt.n - Ct) + Ct;
      return g0(t);
    },
    randomBytes: (r = 32) => {
      if (Br.web) return Br.web.getRandomValues(new Uint8Array(r));
      if (Br.node) {
        let { randomBytes: e } = Br.node;
        return Uint8Array.from(e(r));
      } else throw new Error("The environment doesn't have randomBytes function");
    },
    randomPrivateKey: () => Rn.hashToPrivateKey(Rn.randomBytes(Oi + 8)),
    precompute(r = 8, e = tr.BASE) {
      let t = e === tr.BASE ? e : new tr(e.x, e.y);
      return t._setWindowSize(r), t.multiply(mc), t;
    },
    sha256: async (...r) => {
      if (Br.web) {
        let e = await Br.web.subtle.digest('SHA-256', Bo(...r));
        return new Uint8Array(e);
      } else if (Br.node) {
        let { createHash: e } = Br.node,
          t = e('sha256');
        return r.forEach((n) => t.update(n)), Uint8Array.from(t.digest());
      } else throw new Error("The environment doesn't have sha256 function");
    },
    hmacSha256: async (r, ...e) => {
      if (Br.web) {
        let t = await Br.web.subtle.importKey(
            'raw',
            r,
            { name: 'HMAC', hash: { name: 'SHA-256' } },
            !1,
            ['sign']
          ),
          n = Bo(...e),
          o = await Br.web.subtle.sign('HMAC', t, n);
        return new Uint8Array(o);
      } else if (Br.node) {
        let { createHmac: t } = Br.node,
          n = t('sha256', r);
        return e.forEach((o) => n.update(o)), Uint8Array.from(n.digest());
      } else throw new Error("The environment doesn't have hmac-sha256 function");
    },
    sha256Sync: void 0,
    hmacSha256Sync: void 0,
    taggedHash: async (r, ...e) => {
      let t = rl[r];
      if (t === void 0) {
        let n = await Rn.sha256(Uint8Array.from(r, (o) => o.charCodeAt(0)));
        (t = Bo(n, n)), (rl[r] = t);
      }
      return Rn.sha256(t, ...e);
    },
    taggedHashSync: (r, ...e) => {
      if (typeof Ni != 'function') throw new nl('sha256Sync is undefined, you need to set it');
      let t = rl[r];
      if (t === void 0) {
        let n = Ni(Uint8Array.from(r, (o) => o.charCodeAt(0)));
        (t = Bo(n, n)), (rl[r] = t);
      }
      return Ni(t, ...e);
    },
    _JacobianPoint: br,
  };
Object.defineProperties(Rn, {
  sha256Sync: {
    configurable: !1,
    get() {
      return Ni;
    },
    set(r) {
      Ni || (Ni = r);
    },
  },
  hmacSha256Sync: {
    configurable: !1,
    get() {
      return yc;
    },
    set(r) {
      yc || (yc = r);
    },
  },
});
vo.sha512Sync = (...r) => Y2(vo.concatBytes(...r));
var Cme = vo.randomPrivateKey,
  SB = () => {
    let r = vo.randomPrivateKey(),
      e = A0(r),
      t = new Uint8Array(64);
    return t.set(r), t.set(e, 32), { publicKey: e, secretKey: t };
  },
  A0 = vf.getPublicKey;
function EB(r) {
  try {
    return jt.fromHex(r, !0), !0;
  } catch {
    return !1;
  }
}
var C0 = (r, e) => vf.sign(r, e.slice(0, 32)),
  A9 = vf.verify,
  Ye = (r) =>
    Me.Buffer.isBuffer(r)
      ? r
      : r instanceof Uint8Array
        ? Me.Buffer.from(r.buffer, r.byteOffset, r.byteLength)
        : Me.Buffer.from(r),
  R0 = class {
    constructor(e) {
      Object.assign(this, e);
    }
    encode() {
      return Me.Buffer.from((0, Fi.serialize)(cl, this));
    }
    static decode(e) {
      return (0, Fi.deserialize)(cl, this, e);
    }
    static decodeUnchecked(e) {
      return (0, Fi.deserializeUnchecked)(cl, this, e);
    }
  };
var cl = new Map(),
  NB,
  R9 = 32,
  No = 32;
function I9(r) {
  return r._bn !== void 0;
}
var _B = 1;
NB = Symbol.toStringTag;
var ze = class r extends R0 {
  constructor(e) {
    if ((super({}), (this._bn = void 0), I9(e))) this._bn = e._bn;
    else {
      if (typeof e == 'string') {
        let t = lr.default.decode(e);
        if (t.length != No) throw new Error('Invalid public key input');
        this._bn = new _0.default(t);
      } else this._bn = new _0.default(e);
      if (this._bn.byteLength() > No) throw new Error('Invalid public key input');
    }
  }
  static unique() {
    let e = new r(_B);
    return (_B += 1), new r(e.toBuffer());
  }
  equals(e) {
    return this._bn.eq(e._bn);
  }
  toBase58() {
    return lr.default.encode(this.toBytes());
  }
  toJSON() {
    return this.toBase58();
  }
  toBytes() {
    let e = this.toBuffer();
    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  }
  toBuffer() {
    let e = this._bn.toArrayLike(Me.Buffer);
    if (e.length === No) return e;
    let t = Me.Buffer.alloc(32);
    return e.copy(t, 32 - e.length), t;
  }
  get [NB]() {
    return `PublicKey(${this.toString()})`;
  }
  toString() {
    return this.toBase58();
  }
  static async createWithSeed(e, t, n) {
    let o = Me.Buffer.concat([e.toBuffer(), Me.Buffer.from(t), n.toBuffer()]),
      s = Ef(o);
    return new r(s);
  }
  static createProgramAddressSync(e, t) {
    let n = Me.Buffer.alloc(0);
    e.forEach(function (s) {
      if (s.length > R9) throw new TypeError('Max seed length exceeded');
      n = Me.Buffer.concat([n, Ye(s)]);
    }),
      (n = Me.Buffer.concat([n, t.toBuffer(), Me.Buffer.from('ProgramDerivedAddress')]));
    let o = Ef(n);
    if (EB(o)) throw new Error('Invalid seeds, address must fall off the curve');
    return new r(o);
  }
  static async createProgramAddress(e, t) {
    return this.createProgramAddressSync(e, t);
  }
  static findProgramAddressSync(e, t) {
    let n = 255,
      o;
    for (; n != 0; ) {
      try {
        let s = e.concat(Me.Buffer.from([n]));
        o = this.createProgramAddressSync(s, t);
      } catch (s) {
        if (s instanceof TypeError) throw s;
        n--;
        continue;
      }
      return [o, n];
    }
    throw new Error('Unable to find a viable program address nonce');
  }
  static async findProgramAddress(e, t) {
    return this.findProgramAddressSync(e, t);
  }
  static isOnCurve(e) {
    let t = new r(e);
    return EB(t.toBytes());
  }
};
ze.default = new ze('11111111111111111111111111111111');
cl.set(ze, { kind: 'struct', fields: [['_bn', 'u256']] });
var qme = new ze('BPFLoader1111111111111111111111111111111111'),
  Ls = 1232,
  q0 = 127,
  ul = 64,
  I0 = class extends Error {
    constructor(e) {
      super(`Signature ${e} has expired: block height exceeded.`),
        (this.signature = void 0),
        (this.signature = e);
    }
  };
Object.defineProperty(I0.prototype, 'name', {
  value: 'TransactionExpiredBlockheightExceededError',
});
var k0 = class extends Error {
  constructor(e, t) {
    super(
      `Transaction was not confirmed in ${t.toFixed(2)} seconds. It is unknown if it succeeded or failed. Check signature ${e} using the Solana Explorer or CLI tools.`
    ),
      (this.signature = void 0),
      (this.signature = e);
  }
};
Object.defineProperty(k0.prototype, 'name', { value: 'TransactionExpiredTimeoutError' });
var T0 = class extends Error {
  constructor(e) {
    super(`Signature ${e} has expired: the nonce is no longer valid.`),
      (this.signature = void 0),
      (this.signature = e);
  }
};
Object.defineProperty(T0.prototype, 'name', { value: 'TransactionExpiredNonceInvalidError' });
var Di = class {
    constructor(e, t) {
      (this.staticAccountKeys = void 0),
        (this.accountKeysFromLookups = void 0),
        (this.staticAccountKeys = e),
        (this.accountKeysFromLookups = t);
    }
    keySegments() {
      let e = [this.staticAccountKeys];
      return (
        this.accountKeysFromLookups &&
          (e.push(this.accountKeysFromLookups.writable),
          e.push(this.accountKeysFromLookups.readonly)),
        e
      );
    }
    get(e) {
      for (let t of this.keySegments()) {
        if (e < t.length) return t[e];
        e -= t.length;
      }
    }
    get length() {
      return this.keySegments().flat().length;
    }
    compileInstructions(e) {
      if (this.length > 256)
        throw new Error('Account index overflow encountered during compilation');
      let n = new Map();
      this.keySegments()
        .flat()
        .forEach((s, i) => {
          n.set(s.toBase58(), i);
        });
      let o = (s) => {
        let i = n.get(s.toBase58());
        if (i === void 0)
          throw new Error('Encountered an unknown instruction account key during compilation');
        return i;
      };
      return e.map((s) => ({
        programIdIndex: o(s.programId),
        accountKeyIndexes: s.keys.map((i) => o(i.pubkey)),
        data: s.data,
      }));
    }
  },
  je = (r = 'publicKey') => q.blob(32, r),
  k9 = (r = 'signature') => q.blob(64, r),
  qi = (r = 'string') => {
    let e = q.struct(
        [q.u32('length'), q.u32('lengthPadding'), q.blob(q.offset(q.u32(), -8), 'chars')],
        r
      ),
      t = e.decode.bind(e),
      n = e.encode.bind(e),
      o = e;
    return (
      (o.decode = (s, i) => t(s, i).chars.toString()),
      (o.encode = (s, i, c) => {
        let u = { chars: Me.Buffer.from(s, 'utf8') };
        return n(u, i, c);
      }),
      (o.alloc = (s) => q.u32().span + q.u32().span + Me.Buffer.from(s, 'utf8').length),
      o
    );
  },
  T9 = (r = 'authorized') => q.struct([je('staker'), je('withdrawer')], r),
  P9 = (r = 'lockup') => q.struct([q.ns64('unixTimestamp'), q.ns64('epoch'), je('custodian')], r),
  B9 = (r = 'voteInit') =>
    q.struct(
      [je('nodePubkey'), je('authorizedVoter'), je('authorizedWithdrawer'), q.u8('commission')],
      r
    ),
  M9 = (r = 'voteAuthorizeWithSeedArgs') =>
    q.struct(
      [
        q.u32('voteAuthorizationType'),
        je('currentAuthorityDerivedKeyOwnerPubkey'),
        qi('currentAuthorityDerivedKeySeed'),
        je('newAuthorized'),
      ],
      r
    );
function OB(r, e) {
  let t = (o) => {
      if (o.span >= 0) return o.span;
      if (typeof o.alloc == 'function') return o.alloc(e[o.property]);
      if ('count' in o && 'elementLayout' in o) {
        let s = e[o.property];
        if (Array.isArray(s)) return s.length * t(o.elementLayout);
      } else if ('fields' in o) return OB({ layout: o }, e[o.property]);
      return 0;
    },
    n = 0;
  return (
    r.layout.fields.forEach((o) => {
      n += t(o);
    }),
    n
  );
}
function Mr(r) {
  let e = 0,
    t = 0;
  for (;;) {
    let n = r.shift();
    if (((e |= (n & 127) << (t * 7)), (t += 1), !(n & 128))) break;
  }
  return e;
}
function zr(r, e) {
  let t = e;
  for (;;) {
    let n = t & 127;
    if (((t >>= 7), t == 0)) {
      r.push(n);
      break;
    } else (n |= 128), r.push(n);
  }
}
function qt(r, e) {
  if (!r) throw new Error(e || 'Assertion failed');
}
var pl = class r {
    constructor(e, t) {
      (this.payer = void 0), (this.keyMetaMap = void 0), (this.payer = e), (this.keyMetaMap = t);
    }
    static compile(e, t) {
      let n = new Map(),
        o = (i) => {
          let c = i.toBase58(),
            u = n.get(c);
          return (
            u === void 0 && ((u = { isSigner: !1, isWritable: !1, isInvoked: !1 }), n.set(c, u)), u
          );
        },
        s = o(t);
      (s.isSigner = !0), (s.isWritable = !0);
      for (let i of e) {
        o(i.programId).isInvoked = !0;
        for (let c of i.keys) {
          let u = o(c.pubkey);
          u.isSigner || (u.isSigner = c.isSigner), u.isWritable || (u.isWritable = c.isWritable);
        }
      }
      return new r(t, n);
    }
    getMessageComponents() {
      let e = [...this.keyMetaMap.entries()];
      qt(e.length <= 256, 'Max static account keys length exceeded');
      let t = e.filter(([, u]) => u.isSigner && u.isWritable),
        n = e.filter(([, u]) => u.isSigner && !u.isWritable),
        o = e.filter(([, u]) => !u.isSigner && u.isWritable),
        s = e.filter(([, u]) => !u.isSigner && !u.isWritable),
        i = {
          numRequiredSignatures: t.length + n.length,
          numReadonlySignedAccounts: n.length,
          numReadonlyUnsignedAccounts: s.length,
        };
      {
        qt(t.length > 0, 'Expected at least one writable signer key');
        let [u] = t[0];
        qt(u === this.payer.toBase58(), 'Expected first writable signer key to be the fee payer');
      }
      let c = [
        ...t.map(([u]) => new ze(u)),
        ...n.map(([u]) => new ze(u)),
        ...o.map(([u]) => new ze(u)),
        ...s.map(([u]) => new ze(u)),
      ];
      return [i, c];
    }
    extractTableLookup(e) {
      let [t, n] = this.drainKeysFoundInLookupTable(
          e.state.addresses,
          (i) => !i.isSigner && !i.isInvoked && i.isWritable
        ),
        [o, s] = this.drainKeysFoundInLookupTable(
          e.state.addresses,
          (i) => !i.isSigner && !i.isInvoked && !i.isWritable
        );
      if (!(t.length === 0 && o.length === 0))
        return [
          { accountKey: e.key, writableIndexes: t, readonlyIndexes: o },
          { writable: n, readonly: s },
        ];
    }
    drainKeysFoundInLookupTable(e, t) {
      let n = new Array(),
        o = new Array();
      for (let [s, i] of this.keyMetaMap.entries())
        if (t(i)) {
          let c = new ze(s),
            u = e.findIndex((l) => l.equals(c));
          u >= 0 &&
            (qt(u < 256, 'Max lookup table index exceeded'),
            n.push(u),
            o.push(c),
            this.keyMetaMap.delete(s));
        }
      return [n, o];
    }
  },
  CB = 'Reached end of buffer unexpectedly';
function Yn(r) {
  if (r.length === 0) throw new Error(CB);
  return r.shift();
}
function Lr(r, ...e) {
  var n;
  let [t] = e;
  if (e.length === 2 ? t + ((n = e[1]) != null ? n : 0) > r.length : t >= r.length)
    throw new Error(CB);
  return r.splice(...e);
}
var Ns = class r {
    constructor(e) {
      (this.header = void 0),
        (this.accountKeys = void 0),
        (this.recentBlockhash = void 0),
        (this.instructions = void 0),
        (this.indexToProgramIds = new Map()),
        (this.header = e.header),
        (this.accountKeys = e.accountKeys.map((t) => new ze(t))),
        (this.recentBlockhash = e.recentBlockhash),
        (this.instructions = e.instructions),
        this.instructions.forEach((t) =>
          this.indexToProgramIds.set(t.programIdIndex, this.accountKeys[t.programIdIndex])
        );
    }
    get version() {
      return 'legacy';
    }
    get staticAccountKeys() {
      return this.accountKeys;
    }
    get compiledInstructions() {
      return this.instructions.map((e) => ({
        programIdIndex: e.programIdIndex,
        accountKeyIndexes: e.accounts,
        data: lr.default.decode(e.data),
      }));
    }
    get addressTableLookups() {
      return [];
    }
    getAccountKeys() {
      return new Di(this.staticAccountKeys);
    }
    static compile(e) {
      let t = pl.compile(e.instructions, e.payerKey),
        [n, o] = t.getMessageComponents(),
        i = new Di(o)
          .compileInstructions(e.instructions)
          .map((c) => ({
            programIdIndex: c.programIdIndex,
            accounts: c.accountKeyIndexes,
            data: lr.default.encode(c.data),
          }));
      return new r({
        header: n,
        accountKeys: o,
        recentBlockhash: e.recentBlockhash,
        instructions: i,
      });
    }
    isAccountSigner(e) {
      return e < this.header.numRequiredSignatures;
    }
    isAccountWritable(e) {
      let t = this.header.numRequiredSignatures;
      if (e >= this.header.numRequiredSignatures) {
        let n = e - t,
          s = this.accountKeys.length - t - this.header.numReadonlyUnsignedAccounts;
        return n < s;
      } else {
        let n = t - this.header.numReadonlySignedAccounts;
        return e < n;
      }
    }
    isProgramId(e) {
      return this.indexToProgramIds.has(e);
    }
    programIds() {
      return [...this.indexToProgramIds.values()];
    }
    nonProgramIds() {
      return this.accountKeys.filter((e, t) => !this.isProgramId(t));
    }
    serialize() {
      let e = this.accountKeys.length,
        t = [];
      zr(t, e);
      let n = this.instructions.map((x) => {
          let { accounts: A, programIdIndex: _ } = x,
            O = Array.from(lr.default.decode(x.data)),
            D = [];
          zr(D, A.length);
          let j = [];
          return (
            zr(j, O.length),
            {
              programIdIndex: _,
              keyIndicesCount: Me.Buffer.from(D),
              keyIndices: A,
              dataLength: Me.Buffer.from(j),
              data: O,
            }
          );
        }),
        o = [];
      zr(o, n.length);
      let s = Me.Buffer.alloc(Ls);
      Me.Buffer.from(o).copy(s);
      let i = o.length;
      n.forEach((x) => {
        let _ = q
          .struct([
            q.u8('programIdIndex'),
            q.blob(x.keyIndicesCount.length, 'keyIndicesCount'),
            q.seq(q.u8('keyIndex'), x.keyIndices.length, 'keyIndices'),
            q.blob(x.dataLength.length, 'dataLength'),
            q.seq(q.u8('userdatum'), x.data.length, 'data'),
          ])
          .encode(x, s, i);
        i += _;
      }),
        (s = s.slice(0, i));
      let c = q.struct([
          q.blob(1, 'numRequiredSignatures'),
          q.blob(1, 'numReadonlySignedAccounts'),
          q.blob(1, 'numReadonlyUnsignedAccounts'),
          q.blob(t.length, 'keyCount'),
          q.seq(je('key'), e, 'keys'),
          je('recentBlockhash'),
        ]),
        u = {
          numRequiredSignatures: Me.Buffer.from([this.header.numRequiredSignatures]),
          numReadonlySignedAccounts: Me.Buffer.from([this.header.numReadonlySignedAccounts]),
          numReadonlyUnsignedAccounts: Me.Buffer.from([this.header.numReadonlyUnsignedAccounts]),
          keyCount: Me.Buffer.from(t),
          keys: this.accountKeys.map((x) => Ye(x.toBytes())),
          recentBlockhash: lr.default.decode(this.recentBlockhash),
        },
        l = Me.Buffer.alloc(2048),
        w = c.encode(u, l);
      return s.copy(l, w), l.slice(0, w + s.length);
    }
    static from(e) {
      let t = [...e],
        n = Yn(t);
      if (n !== (n & q0))
        throw new Error(
          'Versioned messages must be deserialized with VersionedMessage.deserialize()'
        );
      let o = Yn(t),
        s = Yn(t),
        i = Mr(t),
        c = [];
      for (let A = 0; A < i; A++) {
        let _ = Lr(t, 0, No);
        c.push(new ze(Me.Buffer.from(_)));
      }
      let u = Lr(t, 0, No),
        l = Mr(t),
        w = [];
      for (let A = 0; A < l; A++) {
        let _ = Yn(t),
          O = Mr(t),
          D = Lr(t, 0, O),
          j = Mr(t),
          G = Lr(t, 0, j),
          H = lr.default.encode(Me.Buffer.from(G));
        w.push({ programIdIndex: _, accounts: D, data: H });
      }
      let x = {
        header: {
          numRequiredSignatures: n,
          numReadonlySignedAccounts: o,
          numReadonlyUnsignedAccounts: s,
        },
        recentBlockhash: lr.default.encode(Me.Buffer.from(u)),
        accountKeys: c,
        instructions: w,
      };
      return new r(x);
    }
  },
  fl = class r {
    constructor(e) {
      (this.header = void 0),
        (this.staticAccountKeys = void 0),
        (this.recentBlockhash = void 0),
        (this.compiledInstructions = void 0),
        (this.addressTableLookups = void 0),
        (this.header = e.header),
        (this.staticAccountKeys = e.staticAccountKeys),
        (this.recentBlockhash = e.recentBlockhash),
        (this.compiledInstructions = e.compiledInstructions),
        (this.addressTableLookups = e.addressTableLookups);
    }
    get version() {
      return 0;
    }
    get numAccountKeysFromLookups() {
      let e = 0;
      for (let t of this.addressTableLookups)
        e += t.readonlyIndexes.length + t.writableIndexes.length;
      return e;
    }
    getAccountKeys(e) {
      let t;
      if (e && 'accountKeysFromLookups' in e && e.accountKeysFromLookups) {
        if (
          this.numAccountKeysFromLookups !=
          e.accountKeysFromLookups.writable.length + e.accountKeysFromLookups.readonly.length
        )
          throw new Error(
            'Failed to get account keys because of a mismatch in the number of account keys from lookups'
          );
        t = e.accountKeysFromLookups;
      } else if (e && 'addressLookupTableAccounts' in e && e.addressLookupTableAccounts)
        t = this.resolveAddressTableLookups(e.addressLookupTableAccounts);
      else if (this.addressTableLookups.length > 0)
        throw new Error(
          'Failed to get account keys because address table lookups were not resolved'
        );
      return new Di(this.staticAccountKeys, t);
    }
    isAccountSigner(e) {
      return e < this.header.numRequiredSignatures;
    }
    isAccountWritable(e) {
      let t = this.header.numRequiredSignatures,
        n = this.staticAccountKeys.length;
      if (e >= n) {
        let o = e - n,
          s = this.addressTableLookups.reduce((i, c) => i + c.writableIndexes.length, 0);
        return o < s;
      } else if (e >= this.header.numRequiredSignatures) {
        let o = e - t,
          i = n - t - this.header.numReadonlyUnsignedAccounts;
        return o < i;
      } else {
        let o = t - this.header.numReadonlySignedAccounts;
        return e < o;
      }
    }
    resolveAddressTableLookups(e) {
      let t = { writable: [], readonly: [] };
      for (let n of this.addressTableLookups) {
        let o = e.find((s) => s.key.equals(n.accountKey));
        if (!o)
          throw new Error(
            `Failed to find address lookup table account for table key ${n.accountKey.toBase58()}`
          );
        for (let s of n.writableIndexes)
          if (s < o.state.addresses.length) t.writable.push(o.state.addresses[s]);
          else
            throw new Error(
              `Failed to find address for index ${s} in address lookup table ${n.accountKey.toBase58()}`
            );
        for (let s of n.readonlyIndexes)
          if (s < o.state.addresses.length) t.readonly.push(o.state.addresses[s]);
          else
            throw new Error(
              `Failed to find address for index ${s} in address lookup table ${n.accountKey.toBase58()}`
            );
      }
      return t;
    }
    static compile(e) {
      let t = pl.compile(e.instructions, e.payerKey),
        n = new Array(),
        o = { writable: new Array(), readonly: new Array() },
        s = e.addressLookupTableAccounts || [];
      for (let w of s) {
        let x = t.extractTableLookup(w);
        if (x !== void 0) {
          let [A, { writable: _, readonly: O }] = x;
          n.push(A), o.writable.push(..._), o.readonly.push(...O);
        }
      }
      let [i, c] = t.getMessageComponents(),
        l = new Di(c, o).compileInstructions(e.instructions);
      return new r({
        header: i,
        staticAccountKeys: c,
        recentBlockhash: e.recentBlockhash,
        compiledInstructions: l,
        addressTableLookups: n,
      });
    }
    serialize() {
      let e = Array();
      zr(e, this.staticAccountKeys.length);
      let t = this.serializeInstructions(),
        n = Array();
      zr(n, this.compiledInstructions.length);
      let o = this.serializeAddressTableLookups(),
        s = Array();
      zr(s, this.addressTableLookups.length);
      let i = q.struct([
          q.u8('prefix'),
          q.struct(
            [
              q.u8('numRequiredSignatures'),
              q.u8('numReadonlySignedAccounts'),
              q.u8('numReadonlyUnsignedAccounts'),
            ],
            'header'
          ),
          q.blob(e.length, 'staticAccountKeysLength'),
          q.seq(je(), this.staticAccountKeys.length, 'staticAccountKeys'),
          je('recentBlockhash'),
          q.blob(n.length, 'instructionsLength'),
          q.blob(t.length, 'serializedInstructions'),
          q.blob(s.length, 'addressTableLookupsLength'),
          q.blob(o.length, 'serializedAddressTableLookups'),
        ]),
        c = new Uint8Array(Ls),
        l = i.encode(
          {
            prefix: 128,
            header: this.header,
            staticAccountKeysLength: new Uint8Array(e),
            staticAccountKeys: this.staticAccountKeys.map((w) => w.toBytes()),
            recentBlockhash: lr.default.decode(this.recentBlockhash),
            instructionsLength: new Uint8Array(n),
            serializedInstructions: t,
            addressTableLookupsLength: new Uint8Array(s),
            serializedAddressTableLookups: o,
          },
          c
        );
      return c.slice(0, l);
    }
    serializeInstructions() {
      let e = 0,
        t = new Uint8Array(Ls);
      for (let n of this.compiledInstructions) {
        let o = Array();
        zr(o, n.accountKeyIndexes.length);
        let s = Array();
        zr(s, n.data.length);
        let i = q.struct([
          q.u8('programIdIndex'),
          q.blob(o.length, 'encodedAccountKeyIndexesLength'),
          q.seq(q.u8(), n.accountKeyIndexes.length, 'accountKeyIndexes'),
          q.blob(s.length, 'encodedDataLength'),
          q.blob(n.data.length, 'data'),
        ]);
        e += i.encode(
          {
            programIdIndex: n.programIdIndex,
            encodedAccountKeyIndexesLength: new Uint8Array(o),
            accountKeyIndexes: n.accountKeyIndexes,
            encodedDataLength: new Uint8Array(s),
            data: n.data,
          },
          t,
          e
        );
      }
      return t.slice(0, e);
    }
    serializeAddressTableLookups() {
      let e = 0,
        t = new Uint8Array(Ls);
      for (let n of this.addressTableLookups) {
        let o = Array();
        zr(o, n.writableIndexes.length);
        let s = Array();
        zr(s, n.readonlyIndexes.length);
        let i = q.struct([
          je('accountKey'),
          q.blob(o.length, 'encodedWritableIndexesLength'),
          q.seq(q.u8(), n.writableIndexes.length, 'writableIndexes'),
          q.blob(s.length, 'encodedReadonlyIndexesLength'),
          q.seq(q.u8(), n.readonlyIndexes.length, 'readonlyIndexes'),
        ]);
        e += i.encode(
          {
            accountKey: n.accountKey.toBytes(),
            encodedWritableIndexesLength: new Uint8Array(o),
            writableIndexes: n.writableIndexes,
            encodedReadonlyIndexesLength: new Uint8Array(s),
            readonlyIndexes: n.readonlyIndexes,
          },
          t,
          e
        );
      }
      return t.slice(0, e);
    }
    static deserialize(e) {
      let t = [...e],
        n = Yn(t),
        o = n & q0;
      qt(n !== o, 'Expected versioned message but received legacy message');
      let s = o;
      qt(s === 0, `Expected versioned message with version 0 but found version ${s}`);
      let i = {
          numRequiredSignatures: Yn(t),
          numReadonlySignedAccounts: Yn(t),
          numReadonlyUnsignedAccounts: Yn(t),
        },
        c = [],
        u = Mr(t);
      for (let O = 0; O < u; O++) c.push(new ze(Lr(t, 0, No)));
      let l = lr.default.encode(Lr(t, 0, No)),
        w = Mr(t),
        x = [];
      for (let O = 0; O < w; O++) {
        let D = Yn(t),
          j = Mr(t),
          G = Lr(t, 0, j),
          H = Mr(t),
          ae = new Uint8Array(Lr(t, 0, H));
        x.push({ programIdIndex: D, accountKeyIndexes: G, data: ae });
      }
      let A = Mr(t),
        _ = [];
      for (let O = 0; O < A; O++) {
        let D = new ze(Lr(t, 0, No)),
          j = Mr(t),
          G = Lr(t, 0, j),
          H = Mr(t),
          ae = Lr(t, 0, H);
        _.push({ accountKey: D, writableIndexes: G, readonlyIndexes: ae });
      }
      return new r({
        header: i,
        staticAccountKeys: c,
        recentBlockhash: l,
        compiledInstructions: x,
        addressTableLookups: _,
      });
    }
  },
  ml = {
    deserializeMessageVersion(r) {
      let e = r[0],
        t = e & q0;
      return t === e ? 'legacy' : t;
    },
    deserialize: (r) => {
      let e = ml.deserializeMessageVersion(r);
      if (e === 'legacy') return Ns.from(r);
      if (e === 0) return fl.deserialize(r);
      throw new Error(`Transaction message version ${e} deserialization is not supported`);
    },
  },
  AB;
(function (r) {
  (r[(r.BLOCKHEIGHT_EXCEEDED = 0)] = 'BLOCKHEIGHT_EXCEEDED'),
    (r[(r.PROCESSED = 1)] = 'PROCESSED'),
    (r[(r.TIMED_OUT = 2)] = 'TIMED_OUT'),
    (r[(r.NONCE_INVALID = 3)] = 'NONCE_INVALID');
})(AB || (AB = {}));
var z9 = Me.Buffer.alloc(ul).fill(0),
  et = class {
    constructor(e) {
      (this.keys = void 0),
        (this.programId = void 0),
        (this.data = Me.Buffer.alloc(0)),
        (this.programId = e.programId),
        (this.keys = e.keys),
        e.data && (this.data = e.data);
    }
    toJSON() {
      return {
        keys: this.keys.map(({ pubkey: e, isSigner: t, isWritable: n }) => ({
          pubkey: e.toJSON(),
          isSigner: t,
          isWritable: n,
        })),
        programId: this.programId.toJSON(),
        data: [...this.data],
      };
    }
  },
  rt = class r {
    get signature() {
      return this.signatures.length > 0 ? this.signatures[0].signature : null;
    }
    constructor(e) {
      if (
        ((this.signatures = []),
        (this.feePayer = void 0),
        (this.instructions = []),
        (this.recentBlockhash = void 0),
        (this.lastValidBlockHeight = void 0),
        (this.nonceInfo = void 0),
        (this.minNonceContextSlot = void 0),
        (this._message = void 0),
        (this._json = void 0),
        !!e)
      )
        if (
          (e.feePayer && (this.feePayer = e.feePayer),
          e.signatures && (this.signatures = e.signatures),
          Object.prototype.hasOwnProperty.call(e, 'nonceInfo'))
        ) {
          let { minContextSlot: t, nonceInfo: n } = e;
          (this.minNonceContextSlot = t), (this.nonceInfo = n);
        } else if (Object.prototype.hasOwnProperty.call(e, 'lastValidBlockHeight')) {
          let { blockhash: t, lastValidBlockHeight: n } = e;
          (this.recentBlockhash = t), (this.lastValidBlockHeight = n);
        } else {
          let { recentBlockhash: t, nonceInfo: n } = e;
          n && (this.nonceInfo = n), (this.recentBlockhash = t);
        }
    }
    toJSON() {
      return {
        recentBlockhash: this.recentBlockhash || null,
        feePayer: this.feePayer ? this.feePayer.toJSON() : null,
        nonceInfo: this.nonceInfo
          ? {
              nonce: this.nonceInfo.nonce,
              nonceInstruction: this.nonceInfo.nonceInstruction.toJSON(),
            }
          : null,
        instructions: this.instructions.map((e) => e.toJSON()),
        signers: this.signatures.map(({ publicKey: e }) => e.toJSON()),
      };
    }
    add(...e) {
      if (e.length === 0) throw new Error('No instructions');
      return (
        e.forEach((t) => {
          'instructions' in t
            ? (this.instructions = this.instructions.concat(t.instructions))
            : 'data' in t && 'programId' in t && 'keys' in t
              ? this.instructions.push(t)
              : this.instructions.push(new et(t));
        }),
        this
      );
    }
    compileMessage() {
      if (this._message && JSON.stringify(this.toJSON()) === JSON.stringify(this._json))
        return this._message;
      let e, t;
      if (
        (this.nonceInfo
          ? ((e = this.nonceInfo.nonce),
            this.instructions[0] != this.nonceInfo.nonceInstruction
              ? (t = [this.nonceInfo.nonceInstruction, ...this.instructions])
              : (t = this.instructions))
          : ((e = this.recentBlockhash), (t = this.instructions)),
        !e)
      )
        throw new Error('Transaction recentBlockhash required');
      t.length < 1 && console.warn('No instructions provided');
      let n;
      if (this.feePayer) n = this.feePayer;
      else if (this.signatures.length > 0 && this.signatures[0].publicKey)
        n = this.signatures[0].publicKey;
      else throw new Error('Transaction fee payer required');
      for (let D = 0; D < t.length; D++)
        if (t[D].programId === void 0)
          throw new Error(`Transaction instruction index ${D} has undefined program id`);
      let o = [],
        s = [];
      t.forEach((D) => {
        D.keys.forEach((G) => {
          s.push({ ...G });
        });
        let j = D.programId.toString();
        o.includes(j) || o.push(j);
      }),
        o.forEach((D) => {
          s.push({ pubkey: new ze(D), isSigner: !1, isWritable: !1 });
        });
      let i = [];
      s.forEach((D) => {
        let j = D.pubkey.toString(),
          G = i.findIndex((H) => H.pubkey.toString() === j);
        G > -1
          ? ((i[G].isWritable = i[G].isWritable || D.isWritable),
            (i[G].isSigner = i[G].isSigner || D.isSigner))
          : i.push(D);
      }),
        i.sort(function (D, j) {
          return D.isSigner !== j.isSigner
            ? D.isSigner
              ? -1
              : 1
            : D.isWritable !== j.isWritable
              ? D.isWritable
                ? -1
                : 1
              : D.pubkey.toBase58().localeCompare(j.pubkey.toBase58());
        });
      let c = i.findIndex((D) => D.pubkey.equals(n));
      if (c > -1) {
        let [D] = i.splice(c, 1);
        (D.isSigner = !0), (D.isWritable = !0), i.unshift(D);
      } else i.unshift({ pubkey: n, isSigner: !0, isWritable: !0 });
      for (let D of this.signatures) {
        let j = i.findIndex((G) => G.pubkey.equals(D.publicKey));
        if (j > -1)
          i[j].isSigner ||
            ((i[j].isSigner = !0),
            console.warn(
              'Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release.'
            ));
        else throw new Error(`unknown signer: ${D.publicKey.toString()}`);
      }
      let u = 0,
        l = 0,
        w = 0,
        x = [],
        A = [];
      i.forEach(({ pubkey: D, isSigner: j, isWritable: G }) => {
        j ? (x.push(D.toString()), (u += 1), G || (l += 1)) : (A.push(D.toString()), G || (w += 1));
      });
      let _ = x.concat(A),
        O = t.map((D) => {
          let { data: j, programId: G } = D;
          return {
            programIdIndex: _.indexOf(G.toString()),
            accounts: D.keys.map((H) => _.indexOf(H.pubkey.toString())),
            data: lr.default.encode(j),
          };
        });
      return (
        O.forEach((D) => {
          qt(D.programIdIndex >= 0), D.accounts.forEach((j) => qt(j >= 0));
        }),
        new Ns({
          header: {
            numRequiredSignatures: u,
            numReadonlySignedAccounts: l,
            numReadonlyUnsignedAccounts: w,
          },
          accountKeys: _,
          recentBlockhash: e,
          instructions: O,
        })
      );
    }
    _compile() {
      let e = this.compileMessage(),
        t = e.accountKeys.slice(0, e.header.numRequiredSignatures);
      return (
        (this.signatures.length === t.length &&
          this.signatures.every((o, s) => t[s].equals(o.publicKey))) ||
          (this.signatures = t.map((n) => ({ signature: null, publicKey: n }))),
        e
      );
    }
    serializeMessage() {
      return this._compile().serialize();
    }
    async getEstimatedFee(e) {
      return (await e.getFeeForMessage(this.compileMessage())).value;
    }
    setSigners(...e) {
      if (e.length === 0) throw new Error('No signers');
      let t = new Set();
      this.signatures = e
        .filter((n) => {
          let o = n.toString();
          return t.has(o) ? !1 : (t.add(o), !0);
        })
        .map((n) => ({ signature: null, publicKey: n }));
    }
    sign(...e) {
      if (e.length === 0) throw new Error('No signers');
      let t = new Set(),
        n = [];
      for (let s of e) {
        let i = s.publicKey.toString();
        t.has(i) || (t.add(i), n.push(s));
      }
      this.signatures = n.map((s) => ({ signature: null, publicKey: s.publicKey }));
      let o = this._compile();
      this._partialSign(o, ...n);
    }
    partialSign(...e) {
      if (e.length === 0) throw new Error('No signers');
      let t = new Set(),
        n = [];
      for (let s of e) {
        let i = s.publicKey.toString();
        t.has(i) || (t.add(i), n.push(s));
      }
      let o = this._compile();
      this._partialSign(o, ...n);
    }
    _partialSign(e, ...t) {
      let n = e.serialize();
      t.forEach((o) => {
        let s = C0(n, o.secretKey);
        this._addSignature(o.publicKey, Ye(s));
      });
    }
    addSignature(e, t) {
      this._compile(), this._addSignature(e, t);
    }
    _addSignature(e, t) {
      qt(t.length === 64);
      let n = this.signatures.findIndex((o) => e.equals(o.publicKey));
      if (n < 0) throw new Error(`unknown signer: ${e.toString()}`);
      this.signatures[n].signature = Me.Buffer.from(t);
    }
    verifySignatures(e) {
      return this._verifySignatures(this.serializeMessage(), e === void 0 ? !0 : e);
    }
    _verifySignatures(e, t) {
      for (let { signature: n, publicKey: o } of this.signatures)
        if (n === null) {
          if (t) return !1;
        } else if (!A9(n, e, o.toBytes())) return !1;
      return !0;
    }
    serialize(e) {
      let { requireAllSignatures: t, verifySignatures: n } = Object.assign(
          { requireAllSignatures: !0, verifySignatures: !0 },
          e
        ),
        o = this.serializeMessage();
      if (n && !this._verifySignatures(o, t)) throw new Error('Signature verification failed');
      return this._serialize(o);
    }
    _serialize(e) {
      let { signatures: t } = this,
        n = [];
      zr(n, t.length);
      let o = n.length + t.length * 64 + e.length,
        s = Me.Buffer.alloc(o);
      return (
        qt(t.length < 256),
        Me.Buffer.from(n).copy(s, 0),
        t.forEach(({ signature: i }, c) => {
          i !== null &&
            (qt(i.length === 64, 'signature has invalid length'),
            Me.Buffer.from(i).copy(s, n.length + c * 64));
        }),
        e.copy(s, n.length + t.length * 64),
        qt(s.length <= Ls, `Transaction too large: ${s.length} > ${Ls}`),
        s
      );
    }
    get keys() {
      return qt(this.instructions.length === 1), this.instructions[0].keys.map((e) => e.pubkey);
    }
    get programId() {
      return qt(this.instructions.length === 1), this.instructions[0].programId;
    }
    get data() {
      return qt(this.instructions.length === 1), this.instructions[0].data;
    }
    static from(e) {
      let t = [...e],
        n = Mr(t),
        o = [];
      for (let s = 0; s < n; s++) {
        let i = Lr(t, 0, ul);
        o.push(lr.default.encode(Me.Buffer.from(i)));
      }
      return r.populate(Ns.from(t), o);
    }
    static populate(e, t = []) {
      let n = new r();
      return (
        (n.recentBlockhash = e.recentBlockhash),
        e.header.numRequiredSignatures > 0 && (n.feePayer = e.accountKeys[0]),
        t.forEach((o, s) => {
          let i = {
            signature: o == lr.default.encode(z9) ? null : lr.default.decode(o),
            publicKey: e.accountKeys[s],
          };
          n.signatures.push(i);
        }),
        e.instructions.forEach((o) => {
          let s = o.accounts.map((i) => {
            let c = e.accountKeys[i];
            return {
              pubkey: c,
              isSigner:
                n.signatures.some((u) => u.publicKey.toString() === c.toString()) ||
                e.isAccountSigner(i),
              isWritable: e.isAccountWritable(i),
            };
          });
          n.instructions.push(
            new et({
              keys: s,
              programId: e.accountKeys[o.programIdIndex],
              data: lr.default.decode(o.data),
            })
          );
        }),
        (n._message = e),
        (n._json = n.toJSON()),
        n
      );
    }
  };
var tn = class r {
    get version() {
      return this.message.version;
    }
    constructor(e, t) {
      if (((this.signatures = void 0), (this.message = void 0), t !== void 0))
        qt(
          t.length === e.header.numRequiredSignatures,
          'Expected signatures length to be equal to the number of required signatures'
        ),
          (this.signatures = t);
      else {
        let n = [];
        for (let o = 0; o < e.header.numRequiredSignatures; o++) n.push(new Uint8Array(ul));
        this.signatures = n;
      }
      this.message = e;
    }
    serialize() {
      let e = this.message.serialize(),
        t = Array();
      zr(t, this.signatures.length);
      let n = q.struct([
          q.blob(t.length, 'encodedSignaturesLength'),
          q.seq(k9(), this.signatures.length, 'signatures'),
          q.blob(e.length, 'serializedMessage'),
        ]),
        o = new Uint8Array(2048),
        s = n.encode(
          {
            encodedSignaturesLength: new Uint8Array(t),
            signatures: this.signatures,
            serializedMessage: e,
          },
          o
        );
      return o.slice(0, s);
    }
    static deserialize(e) {
      let t = [...e],
        n = [],
        o = Mr(t);
      for (let i = 0; i < o; i++) n.push(new Uint8Array(Lr(t, 0, ul)));
      let s = ml.deserialize(new Uint8Array(t));
      return new r(s, n);
    }
    sign(e) {
      let t = this.message.serialize(),
        n = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures);
      for (let o of e) {
        let s = n.findIndex((i) => i.equals(o.publicKey));
        qt(s >= 0, `Cannot sign with non signer key ${o.publicKey.toBase58()}`),
          (this.signatures[s] = C0(t, o.secretKey));
      }
    }
    addSignature(e, t) {
      qt(t.byteLength === 64, 'Signature must be 64 bytes long');
      let o = this.message.staticAccountKeys
        .slice(0, this.message.header.numRequiredSignatures)
        .findIndex((s) => s.equals(e));
      qt(
        o >= 0,
        `Can not add signature; \`${e.toBase58()}\` is not required to sign this transaction`
      ),
        (this.signatures[o] = t);
    }
  },
  Gn = new ze('SysvarC1ock11111111111111111111111111111111'),
  Dme = new ze('SysvarEpochSchedu1e111111111111111111111111'),
  Ume = new ze('Sysvar1nstructions1111111111111111111111111'),
  b0 = new ze('SysvarRecentB1ockHashes11111111111111111111'),
  vc = new ze('SysvarRent111111111111111111111111111111111'),
  Fme = new ze('SysvarRewards111111111111111111111111111111'),
  jme = new ze('SysvarS1otHashes111111111111111111111111111'),
  Hme = new ze('SysvarS1otHistory11111111111111111111111111'),
  w0 = new ze('SysvarStakeHistory1111111111111111111111111');
async function v0(r, e, t, n) {
  let o = n && {
      skipPreflight: n.skipPreflight,
      preflightCommitment: n.preflightCommitment || n.commitment,
      maxRetries: n.maxRetries,
      minContextSlot: n.minContextSlot,
    },
    s = await r.sendTransaction(e, t, o),
    i;
  if (e.recentBlockhash != null && e.lastValidBlockHeight != null)
    i = (
      await r.confirmTransaction(
        {
          abortSignal: n == null ? void 0 : n.abortSignal,
          signature: s,
          blockhash: e.recentBlockhash,
          lastValidBlockHeight: e.lastValidBlockHeight,
        },
        n && n.commitment
      )
    ).value;
  else if (e.minNonceContextSlot != null && e.nonceInfo != null) {
    let { nonceInstruction: c } = e.nonceInfo,
      u = c.keys[0].pubkey;
    i = (
      await r.confirmTransaction(
        {
          abortSignal: n == null ? void 0 : n.abortSignal,
          minContextSlot: e.minNonceContextSlot,
          nonceAccountPubkey: u,
          nonceValue: e.nonceInfo.nonce,
          signature: s,
        },
        n && n.commitment
      )
    ).value;
  } else
    (n == null ? void 0 : n.abortSignal) != null &&
      console.warn(
        'sendAndConfirmTransaction(): A transaction with a deprecated confirmation strategy was supplied along with an `abortSignal`. Only transactions having `lastValidBlockHeight` or a combination of `nonceInfo` and `minNonceContextSlot` are abortable.'
      ),
      (i = (await r.confirmTransaction(s, n && n.commitment)).value);
  if (i.err) throw new Error(`Transaction ${s} failed (${JSON.stringify(i)})`);
  return s;
}
function L9(r) {
  return new Promise((e) => setTimeout(e, r));
}
function $e(r, e) {
  let t = r.layout.span >= 0 ? r.layout.span : OB(r, e),
    n = Me.Buffer.alloc(t),
    o = Object.assign({ instruction: r.index }, e);
  return r.layout.encode(o, n), n;
}
var N9 = q.nu64('lamportsPerSignature'),
  O9 = q.struct([
    q.u32('version'),
    q.u32('state'),
    je('authorizedPubkey'),
    je('nonce'),
    q.struct([N9], 'feeCalculator'),
  ]),
  RB = O9.span;
var C9 = (r) => {
    let e = r.decode.bind(r),
      t = r.encode.bind(r);
    return { decode: e, encode: t };
  },
  q9 = (r) => (e) => {
    let t = (0, LB.blob)(r, e),
      { encode: n, decode: o } = C9(t),
      s = t;
    return (
      (s.decode = (i, c) => {
        let u = o(i, c);
        return (0, Ec.toBigIntLE)(Me.Buffer.from(u));
      }),
      (s.encode = (i, c, u) => {
        let l = (0, Ec.toBufferLE)(i, r);
        return n(l, c, u);
      }),
      s
    );
  },
  Ui = q9(8);
var Kr = Object.freeze({
    Create: {
      index: 0,
      layout: q.struct([
        q.u32('instruction'),
        q.ns64('lamports'),
        q.ns64('space'),
        je('programId'),
      ]),
    },
    Assign: { index: 1, layout: q.struct([q.u32('instruction'), je('programId')]) },
    Transfer: { index: 2, layout: q.struct([q.u32('instruction'), Ui('lamports')]) },
    CreateWithSeed: {
      index: 3,
      layout: q.struct([
        q.u32('instruction'),
        je('base'),
        qi('seed'),
        q.ns64('lamports'),
        q.ns64('space'),
        je('programId'),
      ]),
    },
    AdvanceNonceAccount: { index: 4, layout: q.struct([q.u32('instruction')]) },
    WithdrawNonceAccount: {
      index: 5,
      layout: q.struct([q.u32('instruction'), q.ns64('lamports')]),
    },
    InitializeNonceAccount: {
      index: 6,
      layout: q.struct([q.u32('instruction'), je('authorized')]),
    },
    AuthorizeNonceAccount: { index: 7, layout: q.struct([q.u32('instruction'), je('authorized')]) },
    Allocate: { index: 8, layout: q.struct([q.u32('instruction'), q.ns64('space')]) },
    AllocateWithSeed: {
      index: 9,
      layout: q.struct([
        q.u32('instruction'),
        je('base'),
        qi('seed'),
        q.ns64('space'),
        je('programId'),
      ]),
    },
    AssignWithSeed: {
      index: 10,
      layout: q.struct([q.u32('instruction'), je('base'), qi('seed'), je('programId')]),
    },
    TransferWithSeed: {
      index: 11,
      layout: q.struct([q.u32('instruction'), Ui('lamports'), qi('seed'), je('programId')]),
    },
    UpgradeNonceAccount: { index: 12, layout: q.struct([q.u32('instruction')]) },
  }),
  Ir = class r {
    constructor() {}
    static createAccount(e) {
      let t = Kr.Create,
        n = $e(t, { lamports: e.lamports, space: e.space, programId: Ye(e.programId.toBuffer()) });
      return new et({
        keys: [
          { pubkey: e.fromPubkey, isSigner: !0, isWritable: !0 },
          { pubkey: e.newAccountPubkey, isSigner: !0, isWritable: !0 },
        ],
        programId: this.programId,
        data: n,
      });
    }
    static transfer(e) {
      let t, n;
      if ('basePubkey' in e) {
        let o = Kr.TransferWithSeed;
        (t = $e(o, {
          lamports: BigInt(e.lamports),
          seed: e.seed,
          programId: Ye(e.programId.toBuffer()),
        })),
          (n = [
            { pubkey: e.fromPubkey, isSigner: !1, isWritable: !0 },
            { pubkey: e.basePubkey, isSigner: !0, isWritable: !1 },
            { pubkey: e.toPubkey, isSigner: !1, isWritable: !0 },
          ]);
      } else {
        let o = Kr.Transfer;
        (t = $e(o, { lamports: BigInt(e.lamports) })),
          (n = [
            { pubkey: e.fromPubkey, isSigner: !0, isWritable: !0 },
            { pubkey: e.toPubkey, isSigner: !1, isWritable: !0 },
          ]);
      }
      return new et({ keys: n, programId: this.programId, data: t });
    }
    static assign(e) {
      let t, n;
      if ('basePubkey' in e) {
        let o = Kr.AssignWithSeed;
        (t = $e(o, {
          base: Ye(e.basePubkey.toBuffer()),
          seed: e.seed,
          programId: Ye(e.programId.toBuffer()),
        })),
          (n = [
            { pubkey: e.accountPubkey, isSigner: !1, isWritable: !0 },
            { pubkey: e.basePubkey, isSigner: !0, isWritable: !1 },
          ]);
      } else {
        let o = Kr.Assign;
        (t = $e(o, { programId: Ye(e.programId.toBuffer()) })),
          (n = [{ pubkey: e.accountPubkey, isSigner: !0, isWritable: !0 }]);
      }
      return new et({ keys: n, programId: this.programId, data: t });
    }
    static createAccountWithSeed(e) {
      let t = Kr.CreateWithSeed,
        n = $e(t, {
          base: Ye(e.basePubkey.toBuffer()),
          seed: e.seed,
          lamports: e.lamports,
          space: e.space,
          programId: Ye(e.programId.toBuffer()),
        }),
        o = [
          { pubkey: e.fromPubkey, isSigner: !0, isWritable: !0 },
          { pubkey: e.newAccountPubkey, isSigner: !1, isWritable: !0 },
        ];
      return (
        e.basePubkey != e.fromPubkey &&
          o.push({ pubkey: e.basePubkey, isSigner: !0, isWritable: !1 }),
        new et({ keys: o, programId: this.programId, data: n })
      );
    }
    static createNonceAccount(e) {
      let t = new rt();
      'basePubkey' in e && 'seed' in e
        ? t.add(
            r.createAccountWithSeed({
              fromPubkey: e.fromPubkey,
              newAccountPubkey: e.noncePubkey,
              basePubkey: e.basePubkey,
              seed: e.seed,
              lamports: e.lamports,
              space: RB,
              programId: this.programId,
            })
          )
        : t.add(
            r.createAccount({
              fromPubkey: e.fromPubkey,
              newAccountPubkey: e.noncePubkey,
              lamports: e.lamports,
              space: RB,
              programId: this.programId,
            })
          );
      let n = { noncePubkey: e.noncePubkey, authorizedPubkey: e.authorizedPubkey };
      return t.add(this.nonceInitialize(n)), t;
    }
    static nonceInitialize(e) {
      let t = Kr.InitializeNonceAccount,
        n = $e(t, { authorized: Ye(e.authorizedPubkey.toBuffer()) }),
        o = {
          keys: [
            { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
            { pubkey: b0, isSigner: !1, isWritable: !1 },
            { pubkey: vc, isSigner: !1, isWritable: !1 },
          ],
          programId: this.programId,
          data: n,
        };
      return new et(o);
    }
    static nonceAdvance(e) {
      let t = Kr.AdvanceNonceAccount,
        n = $e(t),
        o = {
          keys: [
            { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
            { pubkey: b0, isSigner: !1, isWritable: !1 },
            { pubkey: e.authorizedPubkey, isSigner: !0, isWritable: !1 },
          ],
          programId: this.programId,
          data: n,
        };
      return new et(o);
    }
    static nonceWithdraw(e) {
      let t = Kr.WithdrawNonceAccount,
        n = $e(t, { lamports: e.lamports });
      return new et({
        keys: [
          { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
          { pubkey: e.toPubkey, isSigner: !1, isWritable: !0 },
          { pubkey: b0, isSigner: !1, isWritable: !1 },
          { pubkey: vc, isSigner: !1, isWritable: !1 },
          { pubkey: e.authorizedPubkey, isSigner: !0, isWritable: !1 },
        ],
        programId: this.programId,
        data: n,
      });
    }
    static nonceAuthorize(e) {
      let t = Kr.AuthorizeNonceAccount,
        n = $e(t, { authorized: Ye(e.newAuthorizedPubkey.toBuffer()) });
      return new et({
        keys: [
          { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
          { pubkey: e.authorizedPubkey, isSigner: !0, isWritable: !1 },
        ],
        programId: this.programId,
        data: n,
      });
    }
    static allocate(e) {
      let t, n;
      if ('basePubkey' in e) {
        let o = Kr.AllocateWithSeed;
        (t = $e(o, {
          base: Ye(e.basePubkey.toBuffer()),
          seed: e.seed,
          space: e.space,
          programId: Ye(e.programId.toBuffer()),
        })),
          (n = [
            { pubkey: e.accountPubkey, isSigner: !1, isWritable: !0 },
            { pubkey: e.basePubkey, isSigner: !0, isWritable: !1 },
          ]);
      } else {
        let o = Kr.Allocate;
        (t = $e(o, { space: e.space })),
          (n = [{ pubkey: e.accountPubkey, isSigner: !0, isWritable: !0 }]);
      }
      return new et({ keys: n, programId: this.programId, data: t });
    }
  };
Ir.programId = new ze('11111111111111111111111111111111');
var D9 = Ls - 300,
  P0 = class r {
    constructor() {}
    static getMinNumSignatures(e) {
      return 2 * (Math.ceil(e / r.chunkSize) + 1 + 1);
    }
    static async load(e, t, n, o, s) {
      {
        let x = await e.getMinimumBalanceForRentExemption(s.length),
          A = await e.getAccountInfo(n.publicKey, 'confirmed'),
          _ = null;
        if (A !== null) {
          if (A.executable)
            return console.error('Program load failed, account is already executable'), !1;
          A.data.length !== s.length &&
            ((_ = _ || new rt()),
            _.add(Ir.allocate({ accountPubkey: n.publicKey, space: s.length }))),
            A.owner.equals(o) ||
              ((_ = _ || new rt()), _.add(Ir.assign({ accountPubkey: n.publicKey, programId: o }))),
            A.lamports < x &&
              ((_ = _ || new rt()),
              _.add(
                Ir.transfer({
                  fromPubkey: t.publicKey,
                  toPubkey: n.publicKey,
                  lamports: x - A.lamports,
                })
              ));
        } else
          _ = new rt().add(
            Ir.createAccount({
              fromPubkey: t.publicKey,
              newAccountPubkey: n.publicKey,
              lamports: x > 0 ? x : 1,
              space: s.length,
              programId: o,
            })
          );
        _ !== null && (await v0(e, _, [t, n], { commitment: 'confirmed' }));
      }
      let i = q.struct([
          q.u32('instruction'),
          q.u32('offset'),
          q.u32('bytesLength'),
          q.u32('bytesLengthPadding'),
          q.seq(q.u8('byte'), q.offset(q.u32(), -8), 'bytes'),
        ]),
        c = r.chunkSize,
        u = 0,
        l = s,
        w = [];
      for (; l.length > 0; ) {
        let x = l.slice(0, c),
          A = Me.Buffer.alloc(c + 16);
        i.encode({ instruction: 0, offset: u, bytes: x, bytesLength: 0, bytesLengthPadding: 0 }, A);
        let _ = new rt().add({
          keys: [{ pubkey: n.publicKey, isSigner: !0, isWritable: !0 }],
          programId: o,
          data: A,
        });
        w.push(v0(e, _, [t, n], { commitment: 'confirmed' })),
          e._rpcEndpoint.includes('solana.com') && (await L9(1e3 / 4)),
          (u += c),
          (l = l.slice(c));
      }
      await Promise.all(w);
      {
        let x = q.struct([q.u32('instruction')]),
          A = Me.Buffer.alloc(x.span);
        x.encode({ instruction: 1 }, A);
        let _ = new rt().add({
          keys: [
            { pubkey: n.publicKey, isSigner: !0, isWritable: !0 },
            { pubkey: vc, isSigner: !1, isWritable: !1 },
          ],
          programId: o,
          data: A,
        });
        await v0(e, _, [t, n], { commitment: 'confirmed' });
      }
      return !0;
    }
  };
P0.chunkSize = D9;
var Wme = new ze('BPFLoader2111111111111111111111111111111111');
var Kme = globalThis.fetch;
var U9 = 160,
  F9 = 64,
  j9 = U9 / F9,
  Vme = 1e3 / j9;
var $me = {
  index: 1,
  layout: q.struct([
    q.u32('typeIndex'),
    Ui('deactivationSlot'),
    q.nu64('lastExtendedSlot'),
    q.u8('lastExtendedStartIndex'),
    q.u8(),
    q.seq(je(), q.offset(q.u8(), -1), 'authority'),
  ]),
};
var $t = Bi(Bf(ze), de(), (r) => new ze(r)),
  qB = Mf([de(), Ut('base64')]),
  D0 = Bi(Bf(Me.Buffer), qB, (r) => Me.Buffer.from(r[0], 'base64')),
  Gme = 30 * 1e3;
function DB(r) {
  return gr([
    ie({ jsonrpc: Ut('2.0'), id: de(), result: r }),
    ie({ jsonrpc: Ut('2.0'), id: de(), error: ie({ code: Pi(), message: de(), data: ke(mP()) }) }),
  ]);
}
var H9 = DB(Pi());
function Dt(r) {
  return Bi(DB(r), H9, (e) => ('error' in e ? e : { ...e, result: Ti(e.result, r) }));
}
function rn(r) {
  return Dt(ie({ context: ie({ slot: V() }), value: r }));
}
function yl(r) {
  return ie({ context: ie({ slot: V() }), value: r });
}
var W9 = ie({ foundation: V(), foundationTerm: V(), initial: V(), taper: V(), terminal: V() }),
  Yme = Dt(
    Se(
      be(
        ie({
          epoch: V(),
          effectiveSlot: V(),
          amount: V(),
          postBalance: V(),
          commission: ke(be(V())),
        })
      )
    )
  ),
  K9 = ie({ total: V(), validator: V(), foundation: V(), epoch: V() }),
  V9 = ie({
    epoch: V(),
    slotIndex: V(),
    slotsInEpoch: V(),
    absoluteSlot: V(),
    blockHeight: ke(V()),
    transactionCount: ke(V()),
  }),
  $9 = ie({
    slotsPerEpoch: V(),
    leaderScheduleSlotOffset: V(),
    warmup: An(),
    firstNormalEpoch: V(),
    firstNormalSlot: V(),
  }),
  G9 = Vy(de(), Se(V())),
  Os = be(gr([ie({}), de()])),
  Y9 = ie({ err: Os }),
  Z9 = Ut('receivedSignature'),
  Zme = ie({ 'solana-core': de(), 'feature-set': ke(V()) }),
  Jme = rn(
    ie({
      err: be(gr([ie({}), de()])),
      logs: be(Se(de())),
      accounts: ke(
        be(
          Se(
            be(
              ie({
                executable: An(),
                owner: de(),
                lamports: V(),
                data: Se(de()),
                rentEpoch: ke(V()),
              })
            )
          )
        )
      ),
      unitsConsumed: ke(V()),
      returnData: ke(be(ie({ programId: de(), data: Mf([de(), Ut('base64')]) }))),
    })
  ),
  Xme = rn(ie({ byIdentity: Vy(de(), Se(V())), range: ie({ firstSlot: V(), lastSlot: V() }) }));
var Qme = Dt(W9),
  eye = Dt(K9),
  tye = Dt(V9),
  rye = Dt($9),
  nye = Dt(G9),
  oye = Dt(V()),
  sye = rn(
    ie({ total: V(), circulating: V(), nonCirculating: V(), nonCirculatingAccounts: Se($t) })
  ),
  J9 = ie({ amount: de(), uiAmount: be(V()), decimals: V(), uiAmountString: ke(de()) }),
  iye = rn(
    Se(
      ie({ address: $t, amount: de(), uiAmount: be(V()), decimals: V(), uiAmountString: ke(de()) })
    )
  ),
  aye = rn(
    Se(
      ie({
        pubkey: $t,
        account: ie({ executable: An(), owner: $t, lamports: V(), data: D0, rentEpoch: V() }),
      })
    )
  ),
  B0 = ie({ program: de(), parsed: Pi(), space: V() }),
  cye = rn(
    Se(
      ie({
        pubkey: $t,
        account: ie({ executable: An(), owner: $t, lamports: V(), data: B0, rentEpoch: V() }),
      })
    )
  ),
  uye = rn(Se(ie({ lamports: V(), address: $t }))),
  U0 = ie({ executable: An(), owner: $t, lamports: V(), data: D0, rentEpoch: V() }),
  pye = ie({ pubkey: $t, account: U0 }),
  X9 = Bi(gr([Bf(Me.Buffer), B0]), gr([qB, B0]), (r) => (Array.isArray(r) ? Ti(r, D0) : r)),
  Q9 = ie({ executable: An(), owner: $t, lamports: V(), data: X9, rentEpoch: V() }),
  fye = ie({ pubkey: $t, account: Q9 }),
  lye = ie({
    state: gr([Ut('active'), Ut('inactive'), Ut('activating'), Ut('deactivating')]),
    active: V(),
    inactive: V(),
  }),
  dye = Dt(Se(ie({ signature: de(), slot: V(), err: Os, memo: be(de()), blockTime: ke(be(V())) }))),
  hye = Dt(Se(ie({ signature: de(), slot: V(), err: Os, memo: be(de()), blockTime: ke(be(V())) }))),
  mye = ie({ subscription: V(), result: yl(U0) }),
  eW = ie({ pubkey: $t, account: U0 }),
  yye = ie({ subscription: V(), result: yl(eW) }),
  tW = ie({ parent: V(), slot: V(), root: V() }),
  gye = ie({ subscription: V(), result: tW }),
  rW = gr([
    ie({
      type: gr([
        Ut('firstShredReceived'),
        Ut('completed'),
        Ut('optimisticConfirmation'),
        Ut('root'),
      ]),
      slot: V(),
      timestamp: V(),
    }),
    ie({ type: Ut('createdBank'), parent: V(), slot: V(), timestamp: V() }),
    ie({
      type: Ut('frozen'),
      slot: V(),
      timestamp: V(),
      stats: ie({
        numTransactionEntries: V(),
        numSuccessfulTransactions: V(),
        numFailedTransactions: V(),
        maxTransactionsPerEntry: V(),
      }),
    }),
    ie({ type: Ut('dead'), slot: V(), timestamp: V(), err: de() }),
  ]),
  xye = ie({ subscription: V(), result: rW }),
  bye = ie({ subscription: V(), result: yl(gr([Y9, Z9])) }),
  wye = ie({ subscription: V(), result: V() }),
  vye = ie({ pubkey: de(), gossip: be(de()), tpu: be(de()), rpc: be(de()), version: be(de()) }),
  IB = ie({
    votePubkey: de(),
    nodePubkey: de(),
    activatedStake: V(),
    epochVoteAccount: An(),
    epochCredits: Se(Mf([V(), V(), V()])),
    commission: V(),
    lastVote: V(),
    rootSlot: be(V()),
  }),
  Sye = Dt(ie({ current: Se(IB), delinquent: Se(IB) })),
  nW = gr([Ut('processed'), Ut('confirmed'), Ut('finalized')]),
  oW = ie({ slot: V(), confirmations: be(V()), err: Os, confirmationStatus: ke(nW) }),
  Eye = rn(Se(be(oW))),
  _ye = Dt(V()),
  UB = ie({ accountKey: $t, writableIndexes: Se(V()), readonlyIndexes: Se(V()) }),
  F0 = ie({
    signatures: Se(de()),
    message: ie({
      accountKeys: Se(de()),
      header: ie({
        numRequiredSignatures: V(),
        numReadonlySignedAccounts: V(),
        numReadonlyUnsignedAccounts: V(),
      }),
      instructions: Se(ie({ accounts: Se(V()), data: de(), programIdIndex: V() })),
      recentBlockhash: de(),
      addressTableLookups: ke(Se(UB)),
    }),
  }),
  FB = ie({
    pubkey: $t,
    signer: An(),
    writable: An(),
    source: ke(gr([Ut('transaction'), Ut('lookupTable')])),
  }),
  jB = ie({ accountKeys: Se(FB), signatures: Se(de()) }),
  HB = ie({ parsed: Pi(), program: de(), programId: $t }),
  WB = ie({ accounts: Se($t), data: de(), programId: $t }),
  sW = gr([WB, HB]),
  iW = gr([
    ie({ parsed: Pi(), program: de(), programId: de() }),
    ie({ accounts: Se(de()), data: de(), programId: de() }),
  ]),
  KB = Bi(sW, iW, (r) => ('accounts' in r ? Ti(r, WB) : Ti(r, HB))),
  VB = ie({
    signatures: Se(de()),
    message: ie({
      accountKeys: Se(FB),
      instructions: Se(KB),
      recentBlockhash: de(),
      addressTableLookups: ke(be(Se(UB))),
    }),
  }),
  ll = ie({ accountIndex: V(), mint: de(), owner: ke(de()), uiTokenAmount: J9 }),
  $B = ie({ writable: Se($t), readonly: Se($t) }),
  gl = ie({
    err: Os,
    fee: V(),
    innerInstructions: ke(
      be(
        Se(
          ie({
            index: V(),
            instructions: Se(ie({ accounts: Se(V()), data: de(), programIdIndex: V() })),
          })
        )
      )
    ),
    preBalances: Se(V()),
    postBalances: Se(V()),
    logMessages: ke(be(Se(de()))),
    preTokenBalances: ke(be(Se(ll))),
    postTokenBalances: ke(be(Se(ll))),
    loadedAddresses: ke($B),
    computeUnitsConsumed: ke(V()),
  }),
  j0 = ie({
    err: Os,
    fee: V(),
    innerInstructions: ke(be(Se(ie({ index: V(), instructions: Se(KB) })))),
    preBalances: Se(V()),
    postBalances: Se(V()),
    logMessages: ke(be(Se(de()))),
    preTokenBalances: ke(be(Se(ll))),
    postTokenBalances: ke(be(Se(ll))),
    loadedAddresses: ke($B),
    computeUnitsConsumed: ke(V()),
  }),
  ji = gr([Ut(0), Ut('legacy')]),
  Cs = ie({
    pubkey: de(),
    lamports: V(),
    postBalance: be(V()),
    rewardType: be(de()),
    commission: ke(be(V())),
  }),
  Aye = Dt(
    be(
      ie({
        blockhash: de(),
        previousBlockhash: de(),
        parentSlot: V(),
        transactions: Se(ie({ transaction: F0, meta: be(gl), version: ke(ji) })),
        rewards: ke(Se(Cs)),
        blockTime: be(V()),
        blockHeight: be(V()),
      })
    )
  ),
  Rye = Dt(
    be(
      ie({
        blockhash: de(),
        previousBlockhash: de(),
        parentSlot: V(),
        rewards: ke(Se(Cs)),
        blockTime: be(V()),
        blockHeight: be(V()),
      })
    )
  ),
  Iye = Dt(
    be(
      ie({
        blockhash: de(),
        previousBlockhash: de(),
        parentSlot: V(),
        transactions: Se(ie({ transaction: jB, meta: be(gl), version: ke(ji) })),
        rewards: ke(Se(Cs)),
        blockTime: be(V()),
        blockHeight: be(V()),
      })
    )
  ),
  kye = Dt(
    be(
      ie({
        blockhash: de(),
        previousBlockhash: de(),
        parentSlot: V(),
        transactions: Se(ie({ transaction: VB, meta: be(j0), version: ke(ji) })),
        rewards: ke(Se(Cs)),
        blockTime: be(V()),
        blockHeight: be(V()),
      })
    )
  ),
  Tye = Dt(
    be(
      ie({
        blockhash: de(),
        previousBlockhash: de(),
        parentSlot: V(),
        transactions: Se(ie({ transaction: jB, meta: be(j0), version: ke(ji) })),
        rewards: ke(Se(Cs)),
        blockTime: be(V()),
        blockHeight: be(V()),
      })
    )
  ),
  Pye = Dt(
    be(
      ie({
        blockhash: de(),
        previousBlockhash: de(),
        parentSlot: V(),
        rewards: ke(Se(Cs)),
        blockTime: be(V()),
        blockHeight: be(V()),
      })
    )
  ),
  Bye = Dt(
    be(
      ie({
        blockhash: de(),
        previousBlockhash: de(),
        parentSlot: V(),
        transactions: Se(ie({ transaction: F0, meta: be(gl) })),
        rewards: ke(Se(Cs)),
        blockTime: be(V()),
      })
    )
  ),
  Mye = Dt(
    be(
      ie({
        blockhash: de(),
        previousBlockhash: de(),
        parentSlot: V(),
        signatures: Se(de()),
        blockTime: be(V()),
      })
    )
  ),
  zye = Dt(
    be(ie({ slot: V(), meta: gl, blockTime: ke(be(V())), transaction: F0, version: ke(ji) }))
  ),
  Lye = Dt(
    be(ie({ slot: V(), transaction: VB, meta: be(j0), blockTime: ke(be(V())), version: ke(ji) }))
  ),
  Nye = rn(ie({ blockhash: de(), feeCalculator: ie({ lamportsPerSignature: V() }) })),
  Oye = rn(ie({ blockhash: de(), lastValidBlockHeight: V() })),
  aW = ie({ slot: V(), numTransactions: V(), numSlots: V(), samplePeriodSecs: V() }),
  Cye = Dt(Se(aW)),
  qye = rn(be(ie({ feeCalculator: ie({ lamportsPerSignature: V() }) }))),
  Dye = Dt(de()),
  Uye = Dt(de()),
  cW = ie({ err: Os, logs: Se(de()), signature: de() }),
  Fye = ie({ result: yl(cW), subscription: V() });
var M0 = class r {
    constructor(e) {
      (this._keypair = void 0), (this._keypair = e != null ? e : SB());
    }
    static generate() {
      return new r(SB());
    }
    static fromSecretKey(e, t) {
      if (e.byteLength !== 64) throw new Error('bad secret key size');
      let n = e.slice(32, 64);
      if (!t || !t.skipValidation) {
        let o = e.slice(0, 32),
          s = A0(o);
        for (let i = 0; i < 32; i++)
          if (n[i] !== s[i]) throw new Error('provided secretKey is invalid');
      }
      return new r({ publicKey: n, secretKey: e });
    }
    static fromSeed(e) {
      let t = A0(e),
        n = new Uint8Array(64);
      return n.set(e), n.set(t, 32), new r({ publicKey: t, secretKey: n });
    }
    get publicKey() {
      return new ze(this._keypair.publicKey);
    }
    get secretKey() {
      return new Uint8Array(this._keypair.secretKey);
    }
  },
  wc = Object.freeze({
    CreateLookupTable: {
      index: 0,
      layout: q.struct([q.u32('instruction'), Ui('recentSlot'), q.u8('bumpSeed')]),
    },
    FreezeLookupTable: { index: 1, layout: q.struct([q.u32('instruction')]) },
    ExtendLookupTable: {
      index: 2,
      layout: q.struct([
        q.u32('instruction'),
        Ui(),
        q.seq(je(), q.offset(q.u32(), -8), 'addresses'),
      ]),
    },
    DeactivateLookupTable: { index: 3, layout: q.struct([q.u32('instruction')]) },
    CloseLookupTable: { index: 4, layout: q.struct([q.u32('instruction')]) },
  });
var z0 = class {
  constructor() {}
  static createLookupTable(e) {
    let [t, n] = ze.findProgramAddressSync(
        [e.authority.toBuffer(), (0, Ec.toBufferLE)(BigInt(e.recentSlot), 8)],
        this.programId
      ),
      o = wc.CreateLookupTable,
      s = $e(o, { recentSlot: BigInt(e.recentSlot), bumpSeed: n }),
      i = [
        { pubkey: t, isSigner: !1, isWritable: !0 },
        { pubkey: e.authority, isSigner: !0, isWritable: !1 },
        { pubkey: e.payer, isSigner: !0, isWritable: !0 },
        { pubkey: Ir.programId, isSigner: !1, isWritable: !1 },
      ];
    return [new et({ programId: this.programId, keys: i, data: s }), t];
  }
  static freezeLookupTable(e) {
    let t = wc.FreezeLookupTable,
      n = $e(t),
      o = [
        { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
        { pubkey: e.authority, isSigner: !0, isWritable: !1 },
      ];
    return new et({ programId: this.programId, keys: o, data: n });
  }
  static extendLookupTable(e) {
    let t = wc.ExtendLookupTable,
      n = $e(t, { addresses: e.addresses.map((s) => s.toBytes()) }),
      o = [
        { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
        { pubkey: e.authority, isSigner: !0, isWritable: !1 },
      ];
    return (
      e.payer &&
        o.push(
          { pubkey: e.payer, isSigner: !0, isWritable: !0 },
          { pubkey: Ir.programId, isSigner: !1, isWritable: !1 }
        ),
      new et({ programId: this.programId, keys: o, data: n })
    );
  }
  static deactivateLookupTable(e) {
    let t = wc.DeactivateLookupTable,
      n = $e(t),
      o = [
        { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
        { pubkey: e.authority, isSigner: !0, isWritable: !1 },
      ];
    return new et({ programId: this.programId, keys: o, data: n });
  }
  static closeLookupTable(e) {
    let t = wc.CloseLookupTable,
      n = $e(t),
      o = [
        { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
        { pubkey: e.authority, isSigner: !0, isWritable: !1 },
        { pubkey: e.recipient, isSigner: !1, isWritable: !0 },
      ];
    return new et({ programId: this.programId, keys: o, data: n });
  }
};
z0.programId = new ze('AddressLookupTab1e1111111111111111111111111');
var il = Object.freeze({
    RequestUnits: {
      index: 0,
      layout: q.struct([q.u8('instruction'), q.u32('units'), q.u32('additionalFee')]),
    },
    RequestHeapFrame: { index: 1, layout: q.struct([q.u8('instruction'), q.u32('bytes')]) },
    SetComputeUnitLimit: { index: 2, layout: q.struct([q.u8('instruction'), q.u32('units')]) },
    SetComputeUnitPrice: { index: 3, layout: q.struct([q.u8('instruction'), Ui('microLamports')]) },
  }),
  L0 = class {
    constructor() {}
    static requestUnits(e) {
      let t = il.RequestUnits,
        n = $e(t, e);
      return new et({ keys: [], programId: this.programId, data: n });
    }
    static requestHeapFrame(e) {
      let t = il.RequestHeapFrame,
        n = $e(t, e);
      return new et({ keys: [], programId: this.programId, data: n });
    }
    static setComputeUnitLimit(e) {
      let t = il.SetComputeUnitLimit,
        n = $e(t, e);
      return new et({ keys: [], programId: this.programId, data: n });
    }
    static setComputeUnitPrice(e) {
      let t = il.SetComputeUnitPrice,
        n = $e(t, { microLamports: BigInt(e.microLamports) });
      return new et({ keys: [], programId: this.programId, data: n });
    }
  };
L0.programId = new ze('ComputeBudget111111111111111111111111111111');
var kB = 64,
  TB = 32,
  PB = 64,
  BB = q.struct([
    q.u8('numSignatures'),
    q.u8('padding'),
    q.u16('signatureOffset'),
    q.u16('signatureInstructionIndex'),
    q.u16('publicKeyOffset'),
    q.u16('publicKeyInstructionIndex'),
    q.u16('messageDataOffset'),
    q.u16('messageDataSize'),
    q.u16('messageInstructionIndex'),
  ]),
  N0 = class r {
    constructor() {}
    static createInstructionWithPublicKey(e) {
      let { publicKey: t, message: n, signature: o, instructionIndex: s } = e;
      qt(t.length === TB, `Public Key must be ${TB} bytes but received ${t.length} bytes`),
        qt(o.length === PB, `Signature must be ${PB} bytes but received ${o.length} bytes`);
      let i = BB.span,
        c = i + t.length,
        u = c + o.length,
        l = 1,
        w = Me.Buffer.alloc(u + n.length),
        x = s == null ? 65535 : s;
      return (
        BB.encode(
          {
            numSignatures: l,
            padding: 0,
            signatureOffset: c,
            signatureInstructionIndex: x,
            publicKeyOffset: i,
            publicKeyInstructionIndex: x,
            messageDataOffset: u,
            messageDataSize: n.length,
            messageInstructionIndex: x,
          },
          w
        ),
        w.fill(t, i),
        w.fill(o, c),
        w.fill(n, u),
        new et({ keys: [], programId: r.programId, data: w })
      );
    }
    static createInstructionWithPrivateKey(e) {
      let { privateKey: t, message: n, instructionIndex: o } = e;
      qt(t.length === kB, `Private key must be ${kB} bytes but received ${t.length} bytes`);
      try {
        let s = M0.fromSecretKey(t),
          i = s.publicKey.toBytes(),
          c = C0(n, s.secretKey);
        return this.createInstructionWithPublicKey({
          publicKey: i,
          message: n,
          signature: c,
          instructionIndex: o,
        });
      } catch (s) {
        throw new Error(`Error creating instruction; ${s}`);
      }
    }
  };
N0.programId = new ze('Ed25519SigVerify111111111111111111111111111');
Rn.hmacSha256Sync = (r, ...e) => {
  let t = h0.create(Ef, r);
  return e.forEach((n) => t.update(n)), t.digest();
};
var uW = (r, e) => vB(r, e, { der: !1, recovered: !0 });
Rn.isValidPrivateKey;
var pW = xB,
  MB = 32,
  S0 = 20,
  zB = 64,
  fW = 11,
  E0 = q.struct([
    q.u8('numSignatures'),
    q.u16('signatureOffset'),
    q.u8('signatureInstructionIndex'),
    q.u16('ethAddressOffset'),
    q.u8('ethAddressInstructionIndex'),
    q.u16('messageDataOffset'),
    q.u16('messageDataSize'),
    q.u8('messageInstructionIndex'),
    q.blob(20, 'ethAddress'),
    q.blob(64, 'signature'),
    q.u8('recoveryId'),
  ]),
  O0 = class r {
    constructor() {}
    static publicKeyToEthAddress(e) {
      qt(e.length === zB, `Public key must be ${zB} bytes but received ${e.length} bytes`);
      try {
        return Me.Buffer.from(d0(Ye(e))).slice(-S0);
      } catch (t) {
        throw new Error(`Error constructing Ethereum address: ${t}`);
      }
    }
    static createInstructionWithPublicKey(e) {
      let { publicKey: t, message: n, signature: o, recoveryId: s, instructionIndex: i } = e;
      return r.createInstructionWithEthAddress({
        ethAddress: r.publicKeyToEthAddress(t),
        message: n,
        signature: o,
        recoveryId: s,
        instructionIndex: i,
      });
    }
    static createInstructionWithEthAddress(e) {
      let { ethAddress: t, message: n, signature: o, recoveryId: s, instructionIndex: i = 0 } = e,
        c;
      typeof t == 'string'
        ? t.startsWith('0x')
          ? (c = Me.Buffer.from(t.substr(2), 'hex'))
          : (c = Me.Buffer.from(t, 'hex'))
        : (c = t),
        qt(c.length === S0, `Address must be ${S0} bytes but received ${c.length} bytes`);
      let u = 1 + fW,
        l = u,
        w = u + c.length,
        x = w + o.length + 1,
        A = 1,
        _ = Me.Buffer.alloc(E0.span + n.length);
      return (
        E0.encode(
          {
            numSignatures: A,
            signatureOffset: w,
            signatureInstructionIndex: i,
            ethAddressOffset: l,
            ethAddressInstructionIndex: i,
            messageDataOffset: x,
            messageDataSize: n.length,
            messageInstructionIndex: i,
            signature: Ye(o),
            ethAddress: Ye(c),
            recoveryId: s,
          },
          _
        ),
        _.fill(Ye(n), E0.span),
        new et({ keys: [], programId: r.programId, data: _ })
      );
    }
    static createInstructionWithPrivateKey(e) {
      let { privateKey: t, message: n, instructionIndex: o } = e;
      qt(t.length === MB, `Private key must be ${MB} bytes but received ${t.length} bytes`);
      try {
        let s = Ye(t),
          i = pW(s, !1).slice(1),
          c = Me.Buffer.from(d0(Ye(n))),
          [u, l] = uW(c, s);
        return this.createInstructionWithPublicKey({
          publicKey: i,
          message: n,
          signature: u,
          recoveryId: l,
          instructionIndex: o,
        });
      } catch (s) {
        throw new Error(`Error creating instruction; ${s}`);
      }
    }
  };
O0.programId = new ze('KeccakSecp256k11111111111111111111111111111');
var lW = new ze('StakeConfig11111111111111111111111111111111');
var Sc = class {
  constructor(e, t, n) {
    (this.unixTimestamp = void 0),
      (this.epoch = void 0),
      (this.custodian = void 0),
      (this.unixTimestamp = e),
      (this.epoch = t),
      (this.custodian = n);
  }
};
Sc.default = new Sc(0, 0, ze.default);
var Lo = Object.freeze({
    Initialize: { index: 0, layout: q.struct([q.u32('instruction'), T9(), P9()]) },
    Authorize: {
      index: 1,
      layout: q.struct([
        q.u32('instruction'),
        je('newAuthorized'),
        q.u32('stakeAuthorizationType'),
      ]),
    },
    Delegate: { index: 2, layout: q.struct([q.u32('instruction')]) },
    Split: { index: 3, layout: q.struct([q.u32('instruction'), q.ns64('lamports')]) },
    Withdraw: { index: 4, layout: q.struct([q.u32('instruction'), q.ns64('lamports')]) },
    Deactivate: { index: 5, layout: q.struct([q.u32('instruction')]) },
    Merge: { index: 7, layout: q.struct([q.u32('instruction')]) },
    AuthorizeWithSeed: {
      index: 8,
      layout: q.struct([
        q.u32('instruction'),
        je('newAuthorized'),
        q.u32('stakeAuthorizationType'),
        qi('authoritySeed'),
        je('authorityOwner'),
      ]),
    },
  }),
  jye = Object.freeze({ Staker: { index: 0 }, Withdrawer: { index: 1 } }),
  dl = class {
    constructor() {}
    static initialize(e) {
      let { stakePubkey: t, authorized: n, lockup: o } = e,
        s = o || Sc.default,
        i = Lo.Initialize,
        c = $e(i, {
          authorized: { staker: Ye(n.staker.toBuffer()), withdrawer: Ye(n.withdrawer.toBuffer()) },
          lockup: {
            unixTimestamp: s.unixTimestamp,
            epoch: s.epoch,
            custodian: Ye(s.custodian.toBuffer()),
          },
        }),
        u = {
          keys: [
            { pubkey: t, isSigner: !1, isWritable: !0 },
            { pubkey: vc, isSigner: !1, isWritable: !1 },
          ],
          programId: this.programId,
          data: c,
        };
      return new et(u);
    }
    static createAccountWithSeed(e) {
      let t = new rt();
      t.add(
        Ir.createAccountWithSeed({
          fromPubkey: e.fromPubkey,
          newAccountPubkey: e.stakePubkey,
          basePubkey: e.basePubkey,
          seed: e.seed,
          lamports: e.lamports,
          space: this.space,
          programId: this.programId,
        })
      );
      let { stakePubkey: n, authorized: o, lockup: s } = e;
      return t.add(this.initialize({ stakePubkey: n, authorized: o, lockup: s }));
    }
    static createAccount(e) {
      let t = new rt();
      t.add(
        Ir.createAccount({
          fromPubkey: e.fromPubkey,
          newAccountPubkey: e.stakePubkey,
          lamports: e.lamports,
          space: this.space,
          programId: this.programId,
        })
      );
      let { stakePubkey: n, authorized: o, lockup: s } = e;
      return t.add(this.initialize({ stakePubkey: n, authorized: o, lockup: s }));
    }
    static delegate(e) {
      let { stakePubkey: t, authorizedPubkey: n, votePubkey: o } = e,
        s = Lo.Delegate,
        i = $e(s);
      return new rt().add({
        keys: [
          { pubkey: t, isSigner: !1, isWritable: !0 },
          { pubkey: o, isSigner: !1, isWritable: !1 },
          { pubkey: Gn, isSigner: !1, isWritable: !1 },
          { pubkey: w0, isSigner: !1, isWritable: !1 },
          { pubkey: lW, isSigner: !1, isWritable: !1 },
          { pubkey: n, isSigner: !0, isWritable: !1 },
        ],
        programId: this.programId,
        data: i,
      });
    }
    static authorize(e) {
      let {
          stakePubkey: t,
          authorizedPubkey: n,
          newAuthorizedPubkey: o,
          stakeAuthorizationType: s,
          custodianPubkey: i,
        } = e,
        c = Lo.Authorize,
        u = $e(c, { newAuthorized: Ye(o.toBuffer()), stakeAuthorizationType: s.index }),
        l = [
          { pubkey: t, isSigner: !1, isWritable: !0 },
          { pubkey: Gn, isSigner: !1, isWritable: !0 },
          { pubkey: n, isSigner: !0, isWritable: !1 },
        ];
      return (
        i && l.push({ pubkey: i, isSigner: !1, isWritable: !1 }),
        new rt().add({ keys: l, programId: this.programId, data: u })
      );
    }
    static authorizeWithSeed(e) {
      let {
          stakePubkey: t,
          authorityBase: n,
          authoritySeed: o,
          authorityOwner: s,
          newAuthorizedPubkey: i,
          stakeAuthorizationType: c,
          custodianPubkey: u,
        } = e,
        l = Lo.AuthorizeWithSeed,
        w = $e(l, {
          newAuthorized: Ye(i.toBuffer()),
          stakeAuthorizationType: c.index,
          authoritySeed: o,
          authorityOwner: Ye(s.toBuffer()),
        }),
        x = [
          { pubkey: t, isSigner: !1, isWritable: !0 },
          { pubkey: n, isSigner: !0, isWritable: !1 },
          { pubkey: Gn, isSigner: !1, isWritable: !1 },
        ];
      return (
        u && x.push({ pubkey: u, isSigner: !1, isWritable: !1 }),
        new rt().add({ keys: x, programId: this.programId, data: w })
      );
    }
    static splitInstruction(e) {
      let { stakePubkey: t, authorizedPubkey: n, splitStakePubkey: o, lamports: s } = e,
        i = Lo.Split,
        c = $e(i, { lamports: s });
      return new et({
        keys: [
          { pubkey: t, isSigner: !1, isWritable: !0 },
          { pubkey: o, isSigner: !1, isWritable: !0 },
          { pubkey: n, isSigner: !0, isWritable: !1 },
        ],
        programId: this.programId,
        data: c,
      });
    }
    static split(e) {
      let t = new rt();
      return (
        t.add(
          Ir.createAccount({
            fromPubkey: e.authorizedPubkey,
            newAccountPubkey: e.splitStakePubkey,
            lamports: 0,
            space: this.space,
            programId: this.programId,
          })
        ),
        t.add(this.splitInstruction(e))
      );
    }
    static splitWithSeed(e) {
      let {
          stakePubkey: t,
          authorizedPubkey: n,
          splitStakePubkey: o,
          basePubkey: s,
          seed: i,
          lamports: c,
        } = e,
        u = new rt();
      return (
        u.add(
          Ir.allocate({
            accountPubkey: o,
            basePubkey: s,
            seed: i,
            space: this.space,
            programId: this.programId,
          })
        ),
        u.add(
          this.splitInstruction({
            stakePubkey: t,
            authorizedPubkey: n,
            splitStakePubkey: o,
            lamports: c,
          })
        )
      );
    }
    static merge(e) {
      let { stakePubkey: t, sourceStakePubKey: n, authorizedPubkey: o } = e,
        s = Lo.Merge,
        i = $e(s);
      return new rt().add({
        keys: [
          { pubkey: t, isSigner: !1, isWritable: !0 },
          { pubkey: n, isSigner: !1, isWritable: !0 },
          { pubkey: Gn, isSigner: !1, isWritable: !1 },
          { pubkey: w0, isSigner: !1, isWritable: !1 },
          { pubkey: o, isSigner: !0, isWritable: !1 },
        ],
        programId: this.programId,
        data: i,
      });
    }
    static withdraw(e) {
      let { stakePubkey: t, authorizedPubkey: n, toPubkey: o, lamports: s, custodianPubkey: i } = e,
        c = Lo.Withdraw,
        u = $e(c, { lamports: s }),
        l = [
          { pubkey: t, isSigner: !1, isWritable: !0 },
          { pubkey: o, isSigner: !1, isWritable: !0 },
          { pubkey: Gn, isSigner: !1, isWritable: !1 },
          { pubkey: w0, isSigner: !1, isWritable: !1 },
          { pubkey: n, isSigner: !0, isWritable: !1 },
        ];
      return (
        i && l.push({ pubkey: i, isSigner: !1, isWritable: !1 }),
        new rt().add({ keys: l, programId: this.programId, data: u })
      );
    }
    static deactivate(e) {
      let { stakePubkey: t, authorizedPubkey: n } = e,
        o = Lo.Deactivate,
        s = $e(o);
      return new rt().add({
        keys: [
          { pubkey: t, isSigner: !1, isWritable: !0 },
          { pubkey: Gn, isSigner: !1, isWritable: !1 },
          { pubkey: n, isSigner: !0, isWritable: !1 },
        ],
        programId: this.programId,
        data: s,
      });
    }
  };
dl.programId = new ze('Stake11111111111111111111111111111111111111');
dl.space = 200;
var al = Object.freeze({
    InitializeAccount: { index: 0, layout: q.struct([q.u32('instruction'), B9()]) },
    Authorize: {
      index: 1,
      layout: q.struct([q.u32('instruction'), je('newAuthorized'), q.u32('voteAuthorizationType')]),
    },
    Withdraw: { index: 3, layout: q.struct([q.u32('instruction'), q.ns64('lamports')]) },
    AuthorizeWithSeed: { index: 10, layout: q.struct([q.u32('instruction'), M9()]) },
  }),
  Hye = Object.freeze({ Voter: { index: 0 }, Withdrawer: { index: 1 } }),
  hl = class r {
    constructor() {}
    static initializeAccount(e) {
      let { votePubkey: t, nodePubkey: n, voteInit: o } = e,
        s = al.InitializeAccount,
        i = $e(s, {
          voteInit: {
            nodePubkey: Ye(o.nodePubkey.toBuffer()),
            authorizedVoter: Ye(o.authorizedVoter.toBuffer()),
            authorizedWithdrawer: Ye(o.authorizedWithdrawer.toBuffer()),
            commission: o.commission,
          },
        }),
        c = {
          keys: [
            { pubkey: t, isSigner: !1, isWritable: !0 },
            { pubkey: vc, isSigner: !1, isWritable: !1 },
            { pubkey: Gn, isSigner: !1, isWritable: !1 },
            { pubkey: n, isSigner: !0, isWritable: !1 },
          ],
          programId: this.programId,
          data: i,
        };
      return new et(c);
    }
    static createAccount(e) {
      let t = new rt();
      return (
        t.add(
          Ir.createAccount({
            fromPubkey: e.fromPubkey,
            newAccountPubkey: e.votePubkey,
            lamports: e.lamports,
            space: this.space,
            programId: this.programId,
          })
        ),
        t.add(
          this.initializeAccount({
            votePubkey: e.votePubkey,
            nodePubkey: e.voteInit.nodePubkey,
            voteInit: e.voteInit,
          })
        )
      );
    }
    static authorize(e) {
      let {
          votePubkey: t,
          authorizedPubkey: n,
          newAuthorizedPubkey: o,
          voteAuthorizationType: s,
        } = e,
        i = al.Authorize,
        c = $e(i, { newAuthorized: Ye(o.toBuffer()), voteAuthorizationType: s.index }),
        u = [
          { pubkey: t, isSigner: !1, isWritable: !0 },
          { pubkey: Gn, isSigner: !1, isWritable: !1 },
          { pubkey: n, isSigner: !0, isWritable: !1 },
        ];
      return new rt().add({ keys: u, programId: this.programId, data: c });
    }
    static authorizeWithSeed(e) {
      let {
          currentAuthorityDerivedKeyBasePubkey: t,
          currentAuthorityDerivedKeyOwnerPubkey: n,
          currentAuthorityDerivedKeySeed: o,
          newAuthorizedPubkey: s,
          voteAuthorizationType: i,
          votePubkey: c,
        } = e,
        u = al.AuthorizeWithSeed,
        l = $e(u, {
          voteAuthorizeWithSeedArgs: {
            currentAuthorityDerivedKeyOwnerPubkey: Ye(n.toBuffer()),
            currentAuthorityDerivedKeySeed: o,
            newAuthorized: Ye(s.toBuffer()),
            voteAuthorizationType: i.index,
          },
        }),
        w = [
          { pubkey: c, isSigner: !1, isWritable: !0 },
          { pubkey: Gn, isSigner: !1, isWritable: !1 },
          { pubkey: t, isSigner: !0, isWritable: !1 },
        ];
      return new rt().add({ keys: w, programId: this.programId, data: l });
    }
    static withdraw(e) {
      let { votePubkey: t, authorizedWithdrawerPubkey: n, lamports: o, toPubkey: s } = e,
        i = al.Withdraw,
        c = $e(i, { lamports: o }),
        u = [
          { pubkey: t, isSigner: !1, isWritable: !0 },
          { pubkey: s, isSigner: !1, isWritable: !0 },
          { pubkey: n, isSigner: !0, isWritable: !1 },
        ];
      return new rt().add({ keys: u, programId: this.programId, data: c });
    }
    static safeWithdraw(e, t, n) {
      if (e.lamports > t - n)
        throw new Error('Withdraw will leave vote account with insuffcient funds.');
      return r.withdraw(e);
    }
  };
hl.programId = new ze('Vote111111111111111111111111111111111111111');
hl.space = 3731;
var Wye = new ze('Va1idator1nfo111111111111111111111111111111'),
  Kye = ie({ name: de(), website: ke(de()), details: ke(de()), keybaseUsername: ke(de()) });
var Vye = new ze('Vote111111111111111111111111111111111111111'),
  $ye = q.struct([
    je('nodePubkey'),
    je('authorizedWithdrawer'),
    q.u8('commission'),
    q.nu64(),
    q.seq(q.struct([q.nu64('slot'), q.u32('confirmationCount')]), q.offset(q.u32(), -8), 'votes'),
    q.u8('rootSlotValid'),
    q.nu64('rootSlot'),
    q.nu64(),
    q.seq(
      q.struct([q.nu64('epoch'), je('authorizedVoter')]),
      q.offset(q.u32(), -8),
      'authorizedVoters'
    ),
    q.struct(
      [
        q.seq(
          q.struct([
            je('authorizedPubkey'),
            q.nu64('epochOfLastAuthorizedSwitch'),
            q.nu64('targetEpoch'),
          ]),
          32,
          'buf'
        ),
        q.nu64('idx'),
        q.u8('isEmpty'),
      ],
      'priorVoters'
    ),
    q.nu64(),
    q.seq(
      q.struct([q.nu64('epoch'), q.nu64('credits'), q.nu64('prevCredits')]),
      q.offset(q.u32(), -8),
      'epochCredits'
    ),
    q.struct([q.nu64('slot'), q.nu64('timestamp')], 'lastTimestamp'),
  ]);
f();
var GB = _e(Wa()),
  YB = _e(wi()),
  xl = _e(Hy()),
  dW = (r) => {
    let e = r.decode.bind(r),
      t = r.encode.bind(r);
    return { decode: e, encode: t };
  },
  bl = (r) => (e) => {
    let t = (0, YB.blob)(r, e),
      { encode: n, decode: o } = dW(t),
      s = t;
    return (
      (s.decode = (i, c) => {
        let u = o(i, c);
        return (0, xl.toBigIntLE)(GB.Buffer.from(u));
      }),
      (s.encode = (i, c, u) => {
        let l = (0, xl.toBufferLE)(i, r);
        return n(l, c, u);
      }),
      s
    );
  },
  hW = bl(8),
  Jye = bl(16),
  Xye = bl(24),
  Qye = bl(32);
f();
var gW = _e(Wa());
f();
var mW = _e(Wa()),
  Hi = _e(wi());
f();
var wl = _e(ss());
var H0 = _e(io());
f();
Xt.config({ EXPONENTIAL_AT: 1e3, DECIMAL_PLACES: 78 });
f();
var y0e = wl.Buffer.alloc(64).fill(0);
var vl = (r) => r && 'version' in r,
  ZB = (r, e) =>
    vl(r)
      ? wl.Buffer.from(r.serialize())
      : r.serialize(e != null ? e : { requireAllSignatures: !1, verifySignatures: !1 }),
  Wi = (r, e) => H0.default.encode(ZB(r, e));
var _c = (r, e) => {
  let t;
  if (e === 'base64') t = wl.Buffer.from(r, 'base64');
  else if (e === 'bs58') t = H0.default.decode(r);
  else throw new Error('Unsupported encoding');
  return tn.deserialize(t);
};
var W0 = _e(io());
f();
function Sl(r) {
  return vl(r) ? 'versioned' : 'legacy';
}
function JB(r) {
  let e = W0.default.decode(r),
    t = tn.deserialize(e);
  return {
    transaction: t,
    metadata: { numInstructions: t.message.compiledInstructions.length, type: 0 },
  };
}
function El(r) {
  let { transaction: e, type: t } = r,
    n = W0.default.decode(e);
  if (t === 'legacy') {
    let o = rt.from(n);
    return { transaction: o, metadata: { numInstructions: o.instructions.length, type: t } };
  } else {
    if (t === 0) return JB(e);
    throw new Error(`Unknown transaction type => ${t}`);
  }
}
function _l(r) {
  return Uint8Array.from(v.from(r, 'base64'));
}
f();
f();
f();
f();
f();
f();
var Ki = () => !1;
f();
f();
var Al = () => S.env.DEPLOY_ENVIRONMENT === 'staging';
f();
f();
f();
var K0 = () => S.env.ENVIRONMENT === 'e2e';
var xW = Al() || Ki() || K0() ? 'https://staging-api.phantom.app' : 'https://api.phantom.app',
  Rl = () => xW;
f();
var QB,
  bW =
    Ki() ||
    ((QB = ['t', 'y', '1', 'true', 'yes'].some((r) => {
      var e;
      return ((e = S.env.ENABLE_DEV_SETTINGS) == null ? void 0 : e.toLowerCase()) === r;
    })) != null
      ? QB
      : !1);
f();
var wW = ['t', 'y', '1', 'true', 'yes'],
  vW = ['f', 'n', '0', 'false', 'no'],
  Il = a
    .string()
    .toLowerCase()
    .pipe(a.enum([...wW, ...vW])),
  SW = a.object({
    NODE_ENV: a
      .enum(['development', 'production', 'staging', 'test'])
      .optional()
      .default('production'),
    EPPO_API_KEY: a.string().optional(),
    DATADOG_CLIENT_TOKEN: a.string().optional(),
    RUDDERSTACK_DATAPLANE: a.string().optional(),
    DISABLE_ANALYTICS: Il.optional().default('false'),
    DISABLE_TELEMETRY: Il.optional().default('false'),
    ENABLED_FLAGS: a.string().optional(),
    __DEV__: a.literal('true').optional(),
    ENABLE_DEV_SETTINGS: Il.optional().default('false'),
    BASE_AUTH_ENDPOINT: a.string().optional(),
  }),
  EW = SW.extend({
    RUDDERSTACK_KEY_EXT: a.string(),
    CUSTOM_CRYPTO_BIP39: Il.optional(),
    IS_FIREFOX: a.literal('true').optional(),
    ENVIRONMENT: a.enum(['e2e']).optional(),
  });
f();
var qs, eM;
typeof browser < 'u' && typeof browser.runtime.getManifest == 'function'
  ? (qs = browser.runtime.getManifest().version)
  : typeof chrome < 'u' &&
      typeof ((eM = chrome.runtime) == null ? void 0 : eM.getManifest) == 'function'
    ? (qs = chrome.runtime.getManifest().version)
    : typeof S < 'u' && typeof S.env < 'u' && typeof S.env.APP_VERSION == 'string'
      ? (qs = S.env.APP_VERSION)
      : (qs = '0.0.0-dev');
f();
f();
var Vi = _e(tM()),
  kl = Vi.default.parse(typeof navigator < 'u' ? navigator.userAgent : 'Chrome'),
  rM = {
    PLATFORM: 'extension',
    IS_EXTENSION: !0,
    IS_MOBILE: !1,
    IS_ANDROID: !1,
    IS_IOS: !1,
    IS_FIREFOX: kl.browser.name === Vi.default.BROWSER_MAP.firefox,
    IS_SAFARI: kl.browser.name === Vi.default.BROWSER_MAP.safari,
    IS_MAC: kl.os.name === Vi.default.OS_MAP.MacOS,
    IS_WINDOWS: kl.os.name === Vi.default.OS_MAP.Windows,
  };
var Tl,
  nM,
  oM,
  sM,
  iM,
  aM,
  cM,
  uM,
  pM,
  _W = (r) =>
    ({
      PLATFORM: Tl,
      IS_EXTENSION: nM,
      IS_MOBILE: oM,
      IS_ANDROID: sM,
      IS_IOS: iM,
      IS_FIREFOX: aM,
      IS_SAFARI: cM,
      IS_MAC: uM,
      IS_WINDOWS: pM,
    } = r);
_W(rM);
f();
var AW = null;
function fM() {
  return AW;
}
function lM(r) {
  let e = fM();
  if (e) {
    let t = new Headers(r);
    return t.set('X-Phantom-AnonymousId', e), t;
  }
  return r;
}
f();
var dM = null;
async function hM() {
  if (!dM)
    throw new Error(
      'No fetch bearer token function registered. Register one with registerFetchBearerToken().'
    );
  return await dM();
}
f();
f();
function mM(...r) {
  let e = new AbortController();
  for (let t of r) {
    let n = t instanceof AbortController ? t.signal : t;
    if (n != null && n.aborted) return e.abort(n.reason), e.signal;
    n == null ||
      n.addEventListener(
        'abort',
        () => {
          e.abort(n.reason);
        },
        { once: !0 }
      );
  }
  return e.signal;
}
var RW = 2 * 60 * 1e3,
  IW = [];
function yM(r, e) {
  var l, w;
  let { fetchTimeout: t, retryDelays: n, ...o } = e || {},
    s = (l = e == null ? void 0 : e.fetchTimeout) != null ? l : RW,
    i = (w = e == null ? void 0 : e.retryDelays) != null ? w : IW,
    c = 0,
    u = 0;
  return new Promise((x, A) => {
    function _() {
      c++, (u = Date.now());
      let j = !0,
        G = new AbortController(),
        H = fetch(r, { ...o, signal: mM(...(o.signal ? [o.signal, G.signal] : [G.signal])) }),
        ae = setTimeout(() => {
          G.abort(),
            (j = !1),
            D(c)
              ? O()
              : A(
                  new Error(
                    `fetchWithTimeoutAndRetry(): Failed to get response from server due to timeout of ${s} ms, tried ${c} times.`
                  )
                );
        }, s);
      H.then((ee) => {
        clearTimeout(ae),
          j && (ee.status >= 200 && ee.status < 300 ? x(ee) : D(c, ee.status) ? O() : x(ee));
      }).catch((ee) => {
        clearTimeout(ae), D(c) ? O() : A(ee);
      });
    }
    function O() {
      let j = i[c - 1],
        G = u + j;
      setTimeout(_, Math.max(G - Date.now(), 0));
    }
    function D(j, G) {
      let H = G ? G >= 400 && G <= 499 : !1;
      return j <= i.length && !H;
    }
    _();
  });
}
f();
var Pl = (r = {}, e = {}) => {
  let t = new Headers(r),
    n = new Headers(e);
  for (let [o, s] of n.entries()) s === void 0 || s === 'undefined' ? t.delete(o) : t.set(o, s);
  return t;
};
f();
var Yi = _e(ss());
f();
f();
function gM(r) {
  if (!Number.isSafeInteger(r) || r < 0) throw new Error(`Wrong positive integer: ${r}`);
}
function $0(r, ...e) {
  if (!(r instanceof Uint8Array)) throw new Error('Expected Uint8Array');
  if (e.length > 0 && !e.includes(r.length))
    throw new Error(`Expected Uint8Array of length ${e}, not of length=${r.length}`);
}
function xM(r) {
  if (typeof r != 'function' || typeof r.create != 'function')
    throw new Error('Hash should be wrapped by utils.wrapConstructor');
  gM(r.outputLen), gM(r.blockLen);
}
function $i(r, e = !0) {
  if (r.destroyed) throw new Error('Hash instance has been destroyed');
  if (e && r.finished) throw new Error('Hash#digest() has already been called');
}
function bM(r, e) {
  $0(r);
  let t = e.outputLen;
  if (r.length < t) throw new Error(`digestInto() expects output buffer of length at least ${t}`);
}
f();
var kW = (r) => r instanceof Uint8Array;
var Bl = (r) => new DataView(r.buffer, r.byteOffset, r.byteLength),
  nn = (r, e) => (r << (32 - e)) | (r >>> e),
  TW = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!TW) throw new Error('Non little-endian hardware is not supported');
function PW(r) {
  if (typeof r != 'string') throw new Error(`utf8ToBytes expected string, got ${typeof r}`);
  return new Uint8Array(new TextEncoder().encode(r));
}
function Rc(r) {
  if ((typeof r == 'string' && (r = PW(r)), !kW(r)))
    throw new Error(`expected Uint8Array, got ${typeof r}`);
  return r;
}
var Gi = class {
    clone() {
      return this._cloneInto();
    }
  },
  Rxe = {}.toString;
function wM(r) {
  let e = (n) => r().update(Rc(n)).digest(),
    t = r();
  return (e.outputLen = t.outputLen), (e.blockLen = t.blockLen), (e.create = () => r()), e;
}
var Ml = class extends Gi {
    constructor(e, t) {
      super(), (this.finished = !1), (this.destroyed = !1), xM(e);
      let n = Rc(t);
      if (((this.iHash = e.create()), typeof this.iHash.update != 'function'))
        throw new Error('Expected instance of class which extends utils.Hash');
      (this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen);
      let o = this.blockLen,
        s = new Uint8Array(o);
      s.set(n.length > o ? e.create().update(n).digest() : n);
      for (let i = 0; i < s.length; i++) s[i] ^= 54;
      this.iHash.update(s), (this.oHash = e.create());
      for (let i = 0; i < s.length; i++) s[i] ^= 106;
      this.oHash.update(s), s.fill(0);
    }
    update(e) {
      return $i(this), this.iHash.update(e), this;
    }
    digestInto(e) {
      $i(this),
        $0(e, this.outputLen),
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
      let { oHash: t, iHash: n, finished: o, destroyed: s, blockLen: i, outputLen: c } = this;
      return (
        (e = e),
        (e.finished = o),
        (e.destroyed = s),
        (e.blockLen = i),
        (e.outputLen = c),
        (e.oHash = t._cloneInto(e.oHash)),
        (e.iHash = n._cloneInto(e.iHash)),
        e
      );
    }
    destroy() {
      (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
    }
  },
  G0 = (r, e, t) => new Ml(r, e).update(t).digest();
G0.create = (r, e) => new Ml(r, e);
f();
f();
function BW(r, e, t, n) {
  if (typeof r.setBigUint64 == 'function') return r.setBigUint64(e, t, n);
  let o = BigInt(32),
    s = BigInt(4294967295),
    i = Number((t >> o) & s),
    c = Number(t & s),
    u = n ? 4 : 0,
    l = n ? 0 : 4;
  r.setUint32(e + u, i, n), r.setUint32(e + l, c, n);
}
var zl = class extends Gi {
  constructor(e, t, n, o) {
    super(),
      (this.blockLen = e),
      (this.outputLen = t),
      (this.padOffset = n),
      (this.isLE = o),
      (this.finished = !1),
      (this.length = 0),
      (this.pos = 0),
      (this.destroyed = !1),
      (this.buffer = new Uint8Array(e)),
      (this.view = Bl(this.buffer));
  }
  update(e) {
    $i(this);
    let { view: t, buffer: n, blockLen: o } = this;
    e = Rc(e);
    let s = e.length;
    for (let i = 0; i < s; ) {
      let c = Math.min(o - this.pos, s - i);
      if (c === o) {
        let u = Bl(e);
        for (; o <= s - i; i += o) this.process(u, i);
        continue;
      }
      n.set(e.subarray(i, i + c), this.pos),
        (this.pos += c),
        (i += c),
        this.pos === o && (this.process(t, 0), (this.pos = 0));
    }
    return (this.length += e.length), this.roundClean(), this;
  }
  digestInto(e) {
    $i(this), bM(e, this), (this.finished = !0);
    let { buffer: t, view: n, blockLen: o, isLE: s } = this,
      { pos: i } = this;
    (t[i++] = 128),
      this.buffer.subarray(i).fill(0),
      this.padOffset > o - i && (this.process(n, 0), (i = 0));
    for (let x = i; x < o; x++) t[x] = 0;
    BW(n, o - 8, BigInt(this.length * 8), s), this.process(n, 0);
    let c = Bl(e),
      u = this.outputLen;
    if (u % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
    let l = u / 4,
      w = this.get();
    if (l > w.length) throw new Error('_sha2: outputLen bigger than state');
    for (let x = 0; x < l; x++) c.setUint32(4 * x, w[x], s);
  }
  digest() {
    let { buffer: e, outputLen: t } = this;
    this.digestInto(e);
    let n = e.slice(0, t);
    return this.destroy(), n;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    let { blockLen: t, buffer: n, length: o, finished: s, destroyed: i, pos: c } = this;
    return (
      (e.length = o), (e.pos = c), (e.finished = s), (e.destroyed = i), o % t && e.buffer.set(n), e
    );
  }
};
var MW = (r, e, t) => (r & e) ^ (~r & t),
  zW = (r, e, t) => (r & e) ^ (r & t) ^ (e & t),
  LW = new Uint32Array([
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221,
    3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580,
    3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895,
    666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
    2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
    1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298,
  ]),
  Oo = new Uint32Array([
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225,
  ]),
  Co = new Uint32Array(64),
  Y0 = class extends zl {
    constructor() {
      super(64, 32, 8, !1),
        (this.A = Oo[0] | 0),
        (this.B = Oo[1] | 0),
        (this.C = Oo[2] | 0),
        (this.D = Oo[3] | 0),
        (this.E = Oo[4] | 0),
        (this.F = Oo[5] | 0),
        (this.G = Oo[6] | 0),
        (this.H = Oo[7] | 0);
    }
    get() {
      let { A: e, B: t, C: n, D: o, E: s, F: i, G: c, H: u } = this;
      return [e, t, n, o, s, i, c, u];
    }
    set(e, t, n, o, s, i, c, u) {
      (this.A = e | 0),
        (this.B = t | 0),
        (this.C = n | 0),
        (this.D = o | 0),
        (this.E = s | 0),
        (this.F = i | 0),
        (this.G = c | 0),
        (this.H = u | 0);
    }
    process(e, t) {
      for (let x = 0; x < 16; x++, t += 4) Co[x] = e.getUint32(t, !1);
      for (let x = 16; x < 64; x++) {
        let A = Co[x - 15],
          _ = Co[x - 2],
          O = nn(A, 7) ^ nn(A, 18) ^ (A >>> 3),
          D = nn(_, 17) ^ nn(_, 19) ^ (_ >>> 10);
        Co[x] = (D + Co[x - 7] + O + Co[x - 16]) | 0;
      }
      let { A: n, B: o, C: s, D: i, E: c, F: u, G: l, H: w } = this;
      for (let x = 0; x < 64; x++) {
        let A = nn(c, 6) ^ nn(c, 11) ^ nn(c, 25),
          _ = (w + A + MW(c, u, l) + LW[x] + Co[x]) | 0,
          D = ((nn(n, 2) ^ nn(n, 13) ^ nn(n, 22)) + zW(n, o, s)) | 0;
        (w = l), (l = u), (u = c), (c = (i + _) | 0), (i = s), (s = o), (o = n), (n = (_ + D) | 0);
      }
      (n = (n + this.A) | 0),
        (o = (o + this.B) | 0),
        (s = (s + this.C) | 0),
        (i = (i + this.D) | 0),
        (c = (c + this.E) | 0),
        (u = (u + this.F) | 0),
        (l = (l + this.G) | 0),
        (w = (w + this.H) | 0),
        this.set(n, o, s, i, c, u, l, w);
    }
    roundClean() {
      Co.fill(0);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
    }
  };
var vM = wM(() => new Y0());
var NW = [
    86, 120, 48, 81, 89, 86, 110, 49, 100, 114, 111, 113, 49, 70, 56, 84, 77, 115, 80, 81, 66, 75,
    72, 51, 90, 83, 110, 100, 110, 116, 68, 88, 107, 118, 83, 53, 102, 80, 114, 89, 111, 88, 85, 75,
    57, 43, 67, 57, 97, 103, 74, 113, 68, 76, 112, 112, 100, 48, 102, 101, 80, 122, 83, 111, 108,
    113, 75, 90, 56, 114, 66, 70, 119, 87, 84, 104, 98, 57, 110, 119, 43, 79, 70, 51, 51, 65, 61,
    61,
  ],
  OW = [
    87, 67, 49, 81, 97, 71, 70, 117, 100, 71, 57, 116, 81, 88, 86, 48, 97, 70, 82, 118, 97, 50, 86,
    117,
  ],
  CW = [87, 67, 49, 81, 97, 71, 70, 117, 100, 71, 57, 116, 84, 109, 57, 117, 89, 50, 85, 61];
function qW(r) {
  let e = new URL(r);
  return e.pathname + e.search;
}
function SM(r, e) {
  let t = qW(r),
    n = JSON.stringify(Math.floor(Date.now() / 1e3)),
    o = t + n,
    s = G0(vM, Yi.Buffer.from(String.fromCharCode(...NW)), Yi.Buffer.from(o)),
    i = new Headers(e);
  return (
    i.set(
      Yi.Buffer.from(String.fromCharCode(...OW), 'base64').toString(),
      encodeURIComponent(Yi.Buffer.from(s).toString('base64'))
    ),
    i.set(Yi.Buffer.from(String.fromCharCode(...CW), 'base64').toString(), n),
    i
  );
}
var Ji = class extends Error {
    constructor(t, n) {
      super(t);
      Pe(this, 'response');
      this.response = n;
    }
  },
  DW = { 'Content-Type': 'application/json', 'X-Phantom-Version': qs, 'X-Phantom-Platform': Tl },
  Zi = async (r) => {
    let e, t;
    try {
      t = await r.clone().blob();
    } catch {}
    try {
      e = await r.clone().json();
    } catch {}
    let { status: n, statusText: o } = r;
    return { blob: t, data: e, status: n, statusText: o };
  },
  Z0 = class r {
    constructor(e = {}) {
      Pe(this, 'config');
      Pe(this, 'fetch', async (e, t = {}) => {
        try {
          if (typeof e == 'function') {
            let u = Rl() === 'https://api.phantom.app' ? 'prod' : 'staging';
            e = e({ apiEnv: u });
          }
          let n = '';
          this.config.withApiEnvironment === 'prod'
            ? (n = 'https://api.phantom.app')
            : this.config.withApiEnvironment === 'staging'
              ? (n = 'https://staging-api.phantom.app')
              : this.config.withApiEnvironment === 'default'
                ? (n = Rl())
                : this.config.withApiEnvironment === 'custom' &&
                  this.config.customApiEnv &&
                  (n = this.config.customApiEnv);
          let o = new URL(`${n}${e}`);
          t != null && t.params && (o.search = new URLSearchParams(t.params).toString());
          let s = t;
          (t.headers = Pl(this.config.headers, t.headers)),
            (t.headers = lM(t.headers)),
            this.config.withClientAuth && (t.headers = SM(o.toString(), t.headers));
          let i = this.config.validateStatus;
          if (
            (t != null && t.validateStatus && (i = t == null ? void 0 : t.validateStatus),
            s.body && typeof s.body != 'string' && (s.body = JSON.stringify(s.body)),
            this.config.timeoutMs && (s.fetchTimeout = this.config.timeoutMs),
            this.config.numRetries &&
              (s.retryDelays = Array(this.config.numRetries).fill(
                this.config.delayBetweenEachRetryMs
              )),
            this.config.fetchBearerToken)
          ) {
            let u = await hM();
            if (u) s.headers = Pl(s.headers, { authorization: `Bearer ${u}` });
            else throw new Ji('Unable to get bearer token. Full auth is required.');
          }
          let c = await yM(o.toString(), s);
          if (i && !c.ok) throw new Ji(`Request failed with status code ${c.status}`, await Zi(c));
          return c;
        } catch (n) {
          throw n instanceof Ji
            ? n
            : new Ji(n == null ? void 0 : n.message, n == null ? void 0 : n.response);
        }
      });
      this.config = {
        withClientAuth: !0,
        numRetries: 0,
        delayBetweenEachRetryMs: 0,
        timeoutMs: null,
        validateStatus: !1,
        headers: DW,
        withApiEnvironment: 'none',
        fetchBearerToken: !1,
        ...e,
      };
    }
    auth(e) {
      return new r({ ...this.config, withClientAuth: e });
    }
    bearer(e) {
      return typeof e == 'string' && e
        ? this.headers({ authorization: `Bearer ${e}` })
        : typeof e == 'boolean' && e
          ? new r({ ...this.config, fetchBearerToken: !0 })
          : this;
    }
    headers(e, t) {
      let n = (t == null ? void 0 : t.mergeHeaders) === !1 ? e : Pl(this.config.headers, e);
      return new r({ ...this.config, headers: n });
    }
    timeout(e) {
      return new r({ ...this.config, timeoutMs: e });
    }
    retry(e, t) {
      return new r({ ...this.config, numRetries: e, delayBetweenEachRetryMs: t });
    }
    validateStatus(e) {
      return new r({ ...this.config, validateStatus: e });
    }
    api(e = 'default', t) {
      return new r({
        ...this.config,
        withApiEnvironment: e,
        customApiEnv: e === 'custom' ? t : void 0,
      });
    }
    async get(e, t = {}) {
      t.method = 'GET';
      let n = await this.fetch(e, t);
      return Zi(n);
    }
    async post(e, t, n = {}) {
      n.method = 'POST';
      let o = await this.fetch(e, { ...n, body: t });
      return Zi(o);
    }
    async put(e, t, n = {}) {
      n.method = 'PUT';
      let o = await this.fetch(e, { ...n, body: t });
      return Zi(o);
    }
    async patch(e, t, n = {}) {
      n.method = 'PATCH';
      let o = await this.fetch(e, { ...n, body: t });
      return Zi(o);
    }
    async delete(e, t, n = {}) {
      n.method = 'DELETE';
      let o = await this.fetch(e, { ...n, body: t });
      return Zi(o);
    }
  },
  EM = new Z0();
f();
f();
var UW = a.object({
    hostname: a.string(),
    hideProvidersArray: a.boolean(),
    dontOverrideWindowEthereum: a.boolean(),
  }),
  Sbe = a.object({ dApps: a.array(UW).optional() }).optional();
f();
var Ic = _e(io()),
  AM = _e(Io());
f();
f();
var rr = [];
for (let r = 0; r < 256; ++r) rr.push((r + 256).toString(16).slice(1));
function _M(r, e = 0) {
  return (
    rr[r[e + 0]] +
    rr[r[e + 1]] +
    rr[r[e + 2]] +
    rr[r[e + 3]] +
    '-' +
    rr[r[e + 4]] +
    rr[r[e + 5]] +
    '-' +
    rr[r[e + 6]] +
    rr[r[e + 7]] +
    '-' +
    rr[r[e + 8]] +
    rr[r[e + 9]] +
    '-' +
    rr[r[e + 10]] +
    rr[r[e + 11]] +
    rr[r[e + 12]] +
    rr[r[e + 13]] +
    rr[r[e + 14]] +
    rr[r[e + 15]]
  ).toLowerCase();
}
f();
var J0,
  FW = new Uint8Array(16);
function X0() {
  if (!J0) {
    if (typeof crypto > 'u' || !crypto.getRandomValues)
      throw new Error(
        'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported'
      );
    J0 = crypto.getRandomValues.bind(crypto);
  }
  return J0(FW);
}
f();
f();
var jW = typeof crypto < 'u' && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  Q0 = { randomUUID: jW };
function HW(r, e, t) {
  var o, s, i;
  if (Q0.randomUUID && !e && !r) return Q0.randomUUID();
  r = r || {};
  let n =
    (i = (s = r.random) != null ? s : (o = r.rng) == null ? void 0 : o.call(r)) != null ? i : X0();
  if (n.length < 16) throw new Error('Random bytes length must be >= 16');
  if (((n[6] = (n[6] & 15) | 64), (n[8] = (n[8] & 63) | 128), e)) {
    if (((t = t || 0), t < 0 || t + 16 > e.length))
      throw new RangeError(`UUID byte range ${t}:${t + 15} is out of buffer bounds`);
    for (let c = 0; c < 16; ++c) e[t + c] = n[c];
    return e;
  }
  return _M(n);
}
var In = HW;
var WW = new Error('Unsupported path.'),
  KW = (r, e = WW) => {
    throw e;
  },
  eg = (r) => jr.common.SolanaSendOptions.safeParse(r).success,
  Ds,
  kc,
  on,
  Ll = class extends AM.EventEmitter {
    constructor(t) {
      super();
      Pe(this, '_injectionEndMs', null);
      Pe(this, '_injectionStartMs', null);
      Pe(this, 'isPhantom', !0);
      Pe(this, '_publicKey', null);
      Ne(this, Ds);
      Ne(this, kc, () => {
        this.addListener(jr.common.SolanaProviderEvent.AccountChanged, (t) => {
          t
            ? (this._publicKey = t)
            : ((this._publicKey = null), this.emit(jr.common.SolanaProviderEvent.Disconnect));
        });
      });
      Ne(this, on, async (t) => {
        var o;
        let n;
        try {
          let { method: s } = t,
            i = 'params' in t ? ((o = t.params) != null ? o : []) : [],
            c = jr[s];
          if (!c) throw new Error('MethodNotFound');
          let u = c.request.safeParse({
            jsonrpc: '2.0',
            id: In().toString(),
            method: s,
            params: i,
          });
          if (!u.success) throw u.error;
          let l = u.data;
          if (
            (await oe(this, Ds).start(),
            (n = c.response.parse(await oe(this, Ds).send(l))),
            'error' in n)
          )
            throw new Ve(n.error);
          try {
            s === 'sol_connect'
              ? ((this._publicKey = new ze(n.result.publicKey)),
                this.emit(jr.common.SolanaProviderEvent.Connect, this._publicKey))
              : s === 'sol_signIn' &&
                !this.isConnected &&
                ((this._publicKey = new ze(n.result.address)),
                this.emit(jr.common.SolanaProviderEvent.Connect, this._publicKey)),
              s === 'sol_disconnect' &&
                ((this._publicKey = null), this.emit(jr.common.SolanaProviderEvent.Disconnect));
          } catch (w) {
            console.error('event emitter error', w);
          }
          return n.result;
        } catch (s) {
          throw s instanceof Ve
            ? s
            : s instanceof Kt
              ? new Ve(
                  { code: -32e3, message: 'Missing or invalid parameters.' },
                  { method: t.method }
                )
              : s instanceof Error && s.message === 'MethodNotFound'
                ? new Ve(
                    {
                      code: -32601,
                      message: `The method ${t.method} does not exist / is not available.`,
                    },
                    { method: t.method }
                  )
                : new Ve(
                    { code: -32603, message: 'Internal JSON-RPC error.' },
                    { method: t.method }
                  );
        }
      });
      Pe(this, 'connect', async (t) => {
        let n = await oe(this, on).call(this, {
          method: 'sol_connect',
          params:
            (t == null ? void 0 : t.onlyIfTrusted) === void 0
              ? {}
              : { onlyIfTrusted: t == null ? void 0 : t.onlyIfTrusted },
        });
        return { publicKey: new ze(n.publicKey) };
      });
      Pe(this, 'disconnect', async () => {
        this.isConnected &&
          (await oe(this, on).call(this, { method: 'sol_disconnect', params: void 0 }));
      });
      Pe(this, 'signTransaction', async (t) => {
        if (!t) throw new Ve({ code: -32e3, message: 'Missing or invalid parameters.' });
        let n = Sl(t),
          o = await oe(this, on).call(this, {
            method: 'sol_signTransaction',
            params: { transaction: Wi(t) },
          });
        return El({ transaction: o.transaction, type: n === 'versioned' ? 0 : 'legacy' })
          .transaction;
      });
      Pe(this, 'signAllTransactions', async (t = []) => {
        if (!t || t.length === 0)
          throw new Ve({ code: -32e3, message: 'Missing or invalid parameters.' });
        let n = t.map((s) => Sl(s)),
          o = await oe(this, on).call(this, {
            method: 'sol_signAllTransactions',
            params: { transactions: t.map((s) => Wi(s)) },
          });
        if (o.length !== t.length) throw new Error('Invalid number of transactions returned');
        return o.map((s, i) => {
          let c = n[i];
          return El({ transaction: s.transaction, type: c === 'versioned' ? 0 : 'legacy' })
            .transaction;
        });
      });
      Pe(this, 'signAndSendTransaction', async (t, n = {}) => {
        if (!t) throw new Ve({ code: -32e3, message: 'Missing or invalid parameters.' });
        let o = {};
        if (n)
          if (eg(n))
            (o.skipPreflight = n.skipPreflight), (o.preflightCommitment = n.preflightCommitment);
          else throw new Ve({ code: -32e3, message: 'Missing or invalid parameters.' });
        return await oe(this, on).call(this, {
          method: 'sol_signAndSendTransaction',
          params: { transaction: Wi(t), options: o },
        });
      });
      Pe(this, 'signAndSendAllTransactions', async (t, n = {}) => {
        if (!t) throw new Ve({ code: -32e3, message: 'Missing or invalid parameters.' });
        let o = {};
        if (n)
          if (eg(n))
            (o.skipPreflight = n.skipPreflight), (o.preflightCommitment = n.preflightCommitment);
          else throw new Ve({ code: -32e3, message: 'Missing or invalid parameters.' });
        return await oe(this, on).call(this, {
          method: 'sol_signAndSendAllTransactions',
          params: { transactions: t.map((i) => Wi(i)), options: o },
        });
      });
      Pe(this, 'signMessage', async (t, n = 'utf8') => {
        let o = await oe(this, on).call(this, {
            method: 'sol_signMessage',
            params: { message: Ic.default.encode(t), display: n },
          }),
          s = Ic.default.decode(o.signature),
          i = new ze(o.publicKey);
        return { signature: s, publicKey: i };
      });
      Pe(this, 'signIn', async (t) => {
        let n = await oe(this, on).call(this, { method: 'sol_signIn', params: { signInData: t } }),
          o = new ze(n.address),
          s = Ic.default.decode(n.signedMessage),
          i = Ic.default.decode(n.signature);
        return { address: o, signedMessage: s, signature: i };
      });
      Pe(this, 'handleNotification', async (t) => {
        var n, o, s, i;
        switch (t.method) {
          case 'phantom_accountChanged': {
            let c = Er.phantom_accountChanged.notification.safeParse(t);
            if (!c.success) return;
            let u = (n = c.data.params) == null ? void 0 : n.sol;
            u !== ((o = this.publicKey) == null ? void 0 : o.toBase58()) &&
              this.emit(jr.common.SolanaProviderEvent.AccountChanged, u ? new ze(u) : null);
            break;
          }
          case 'phantom_trustRevoked': {
            let c = Er.phantom_trustRevoked.notification.safeParse(t);
            if (!c.success) return;
            ((s = c.data.params) == null ? void 0 : s.sol) ===
              ((i = this.publicKey) == null ? void 0 : i.toBase58()) &&
              this.emit(jr.common.SolanaProviderEvent.AccountChanged, null);
            break;
          }
        }
      });
      Pe(this, 'request', async ({ method: t, params: n }) => {
        switch (t) {
          case 'connect':
            return await this.connect(n);
          case 'disconnect':
            return await this.disconnect();
          case 'signMessage':
            return await this.signMessage(
              n == null ? void 0 : n.message,
              n == null ? void 0 : n.display
            );
          case 'signTransaction': {
            let o = _c(n == null ? void 0 : n.message, 'bs58');
            return await this.signTransaction(o);
          }
          case 'signAllTransactions': {
            let o = [];
            n != null && n.message && typeof (n == null ? void 0 : n.message) == 'string'
              ? (o = [n == null ? void 0 : n.message])
              : n != null && n.message && Array.isArray(n == null ? void 0 : n.message)
                ? (o = n == null ? void 0 : n.message)
                : n != null && n.messages && (o = n == null ? void 0 : n.messages);
            let s = o.map((i) => _c(i, 'bs58'));
            return await this.signAllTransactions(s);
          }
          case 'signAndSendTransaction': {
            let o = _c(n == null ? void 0 : n.message, 'bs58');
            return await this.signAndSendTransaction(o);
          }
          default:
            throw (KW(t), new Error('unsupported method: ' + t));
        }
      });
      Pe(this, 'removeAllListeners', (t) => {
        try {
          return super.removeAllListeners(t);
        } finally {
          oe(this, kc).call(this);
        }
      });
      Ze(this, Ds, t),
        oe(this, Ds).start(),
        t.addListener((n) => {
          let o = yn.safeParse(n);
          o.success && this.handleNotification(o.data);
        }),
        oe(this, kc).call(this);
    }
    get publicKey() {
      return this._publicKey;
    }
    get isConnected() {
      return this._publicKey !== null;
    }
  };
(Ds = new WeakMap()), (kc = new WeakMap()), (on = new WeakMap());
var Xi = class r extends Ll {
  static inject(e, t, n = 'phantom') {
    let o = window;
    o.isPhantomInstalled = !0;
    let s = new r(t);
    return (
      e &&
        Object.defineProperty(window, n, {
          get() {
            return s;
          },
          set(i) {},
          configurable: !1,
        }),
      window[n] || Object.defineProperty(window, n, { value: {}, writable: !1 }),
      Object.defineProperty(window[n], 'solana', { value: s, writable: !1 }),
      s
    );
  }
  constructor(e) {
    super(new bn(e));
  }
};
f();
var tg = `
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAKkElEQVR4Ae2dQW8bxxmGv9ldGmikJFQBO4bdWERiA40OkQrIl+QgGkjbS4rYaN2iJ4f9A61/gaV/kPyB0j61hY0qBYoe0oOpg32RgUg9OAGcoEycCk4MWFQsqYBJ7mTeJdehKFLcXc7sDnfmAShSFFei9nvnnW9mvh0yUsBqlRebtFci8hcY8RIjNovnOZF4jhfFfbH39eLnJTIQTrze+704D/XO89RgTDzm/g4Xz+F5j6Y3LlVYgyTDSAKdgD+96BAt+cTLpgZUNSJYdZ9oQzz8R4EKtUuVH9VpTMYSwM3q07LQ6zXxsEyW1BHBuy4c4sblyos1SkgiAdjAa0fNo0IliSPEEgCsvkW7IvD8T2TRELYs3GAl1hFRX7ha/X+pTc3bnUTOoivIE1wqXIjqBk6UF9368+4VEfxPbPD1BzFqiVj9rfrdxSivHymAW9XdP3LmX+8fulm0pigCuypytWujXnikAPALOPkfkGVC4ct/re4cma8NzQFgIVARWSYexp33f/OH6RsDfzboyW7C94m1/dzQEMPEnw1KDAd2Ad1s3wY/PxQR09Xq9qGYHhJAp9+32X7e6IwOvENJ4YEuANYvhhD/JUuOYRd6p44POIAIfpUsOYcfcIHnAujM79u5fQMod2Md8FwAjPErZDGEH1wgyAFs328eHrVnLlVmGoEDNKlZJotR+OQGawWBABxG75HFKMSwcAn3Tve7BbKYRhlfGGaHWuRuk8U4kAc4YnbItn5DaYrZQYcTL5HFSFxyFxxmBWAsvoi9EIBd9TMVXLDjiCnAWbIYi8e5dYC4FI4xcRPW+WNGx8R9odB5rpf9PU57u5yaz4gaTzjpCGdU8sgykuMnGRVnGL0849AJ8fiF6fjX0zx+xIUQfNr62g8e6wDnvOihUEDKBYI5Aq359BlGp37iiuAfbt1JgIiOn3Tp3JxL+8IZ/vfQpwef+sHjrBD9f9E6QA8I0tybnrB2OUEfBhzk3BtucHtwv00PPstOCMYLAIE+94YT3FQGfRhwhNNnHLq/2ab6Fz6ljbECQCuce9Oh0lmXsgbvZfFtT9y3AyGkiccMKwDVKfD9zM279MIU0b276YgA+Z8xDgB7n5t3gn5XZ0JhpiUCIwSA/h2tK4s+PgkQwf4epdId5FoAyOrnF71gwmbSgGAfPxJzBt+oHR1Eujx80kBLnz/v0tIvChMZ/JDzIjHEjKNKcicABPzn73ra9/VRCOcLVJIrAaCvf+fdQqKpWl2BAFS6QC4EAMuH3c+fz19Kg+CrdIGJF0Bo+Uj48ooVwBBKrzui5Xu5svxBwAWOv6Lmf5xYAWCYtBhkyWasZZ46oyZUEymAxbfdQAAmcfpVNaGaqKwJrf2tcr77+2Ggm8NN9rLxxDhAJ9PPNvjNZzwo78J9XBC4pMeGnFCQB0yEA0D55QyTPQRu817rQCkXhHj+rdHvaZxj+1Hx/2vvAFkHHy137ePWoTo+fP/vfzaPLPgcdWxcOzdOAFkHH9REAIfZNip+N9dbiY9dvzP82EFMTRkkgDDhyzL4aN2jWilW6wa5AFp5lGPjuMDUNElHWwEg4ct6Ja+xHS04g17X2I5W3/et4uXeUWgpACzl6rCMG7V1DnodLD7psWminQAwwaPLUq7qtfi4fyP3SWBYuqULU9PRTg+uGuonarDiJHYq3EIbAcDydVvOxQJMlBY6qLuKOnWb9aymFgJAa0HGrxtR1uLhWoNae5Rj4xaqPouYV8RBCwFkPdw7CgRx2FJsUHR6hGshwIO6B4Cl7LjdXVOBADJvdsFJ0rhwEy156ZcFqn/epq2vO3P5aLWl15yRS7Q49p1fHTx2Sgh99jU3kfXv7cnPATIVQHAx5oQs66JWv3SWEjHOsb3kKgmE5WNBxBId7C8gm8wEgOvz8l7KJRtcLSSbTASABEjHizN1RtVWM6kLILg617ByLhmo2mcodQFY609G1MWluKQqAATeWn8yth7mQAAo7rAkQ9XOYqkJAImftf5kbD1Ut2ScmgBs4pecra/UbRSRigBs6x8PlVVDqQjAtv7kwP5VVg0pF4Bt/eNR/zxe5XBclAvAtv7koOWrTACBUgEcT7ixsqVDGruEKRXAuZ/a1p8UzP2nUTKuTABo+aquaTcB7CaeRsm4sgideMVaf1JQOZTWnsHKBHA2B9u0ZUWanyOgRACw/0neoDFLEHgIIC2UCMDaf3Jg/eNsIhEXJQI49apN/pKAD4xI+0MjlETKxD18xgXWn/aHRQDpAkDfb8rWbTLZWG9ncqWwdAHgEy90II2Tub/LpfTXaPmqKn5GocAB9Oj/v32k/oSivx7X7R582s7E+kPkC2Ame/vHSVVRQ9+LjISt/kWbNtezCz6QLoCs+3/YMk6qSiHKSNgQ/Ht3sg0+kF6lmcauGsNAf4yduTrvQ40Awr8R5hjhxaJxgENl3fJDpDvAsQwFsH5HbSaNYK/1BB/E6QZw/N3bLW2CD3JTp92fSXeyc3kuEAa//wod/F3sBnJU3QOOxfQubmnO8kUhFwIYlEnLvJYeLf5urTXw8iys2//r782g9G32dTf43OHwebz+8TdIFrl2gQ+RLgD802lWAQ3LpLe+8qXsNob/B8Ef1bVkMY0rA+kCULGLxTCOyqSxCyeuphlnWrrjLPrZtkykJ4E7T9I5WVGGUet3W4mSQghn7eNm4Cx5Dj6Q7gAoZVoktaC/jzIOR/AxZIu64TQCf/8/LWXX4emIJ/7VusxPEEfyM671Dv/dPBjqxZk3hwjCJO1UN1sPh6rPuonazrbeiZoqRITqSkYB9zdbtHSyQDKBqJJaOpjUJE01SlZukIDJWuBAq0RfjD45642V84iyeYBQAEmvDNJ58iRPeIxYg0jNCYYIYLvYDi5KTtD5UCYx/PqsHVi+DbxaOAtyAN4ghXQ+N6fZrRTGcrFIxHp2yN4X8wa4IRlrPLEBTxsI4EuZc+bDgBD2d9VudmCJB+d8x5bvmk0dAqiTxUiE7zccTqxOFiNxROydAjkbZDESHwIQg686WYzEo9aGc6ky0+A2DzAOTryO2AejAEZ8jSymsYkvgQBEIlgji2Gwj/A1EECB2h+RxSja1K7hPhAA+gJxVyOLEYjx//XfV2bqeNwzE8hWyGIEosu/ET5+LoDLlRdrZF0g/zCqdWMd0LcWYF0g77R4u9L7/QEBQBliSPghWXIKXwn7/pBDq4Eu+cuYJCBLrkBML1deXu5//pAAMCJok38BK0VkyQk8iOmgnwysB4BN+ERXyZILxKJPpd/6Q4YWhPy28tJ1oRwrgomHr/yu8tLQib6RtWA3qzvL4mXXyDKB8Kui3//gqFdEKga8Vf3uoririlXDIlkmAC5W+djVXwcufjSRq0H/Ut0uueTcZsRKZNEWZPtI+Ib1+f3ELge2XYK+iOB/WBDD+O7aTiQS1YPDDTzmVsVfLJMle8T0LnG20jvFG/3QMbhZfVoWg4z3xa+5Qpb0GSPwP/wKCXTyA7fsMHrP53zB5glqQP/uMFbzOa2hhiOO1Q9DySVBq9XtYou8BfGGS2JtoYTRg3jjs+EognNeOvgmWIkMpH/KnTHMvrIG69ZoivP0Zads39koULMuI+D9fA+fpXSL3JH8YAAAAABJRU5ErkJggg==
`;
f();
var IM = _e(Io());
function RM(r, e) {
  window.dispatchEvent(
    new CustomEvent('eip6963:announceProvider', { detail: Object.freeze({ info: r, provider: e }) })
  );
}
var Qi,
  Tc,
  Cl = class extends IM.EventEmitter {
    constructor(t) {
      super();
      Pe(this, '_injectionEndMs', null);
      Pe(this, '_injectionStartMs', null);
      Pe(this, 'isPhantom', !0);
      Pe(this, 'isMetaMask', !0);
      Ne(this, Qi);
      Ne(this, Tc, () => {
        this.addListener('accountsChanged', (t) => {
          let [n] = t;
          n
            ? ((this.selectedAddress = n.toLowerCase()),
              this.request({ method: 'eth_chainId', params: [] }))
            : (this.selectedAddress = null);
        });
      });
      Pe(this, 'request', async (t) => {
        var o, s, i, c;
        let n;
        try {
          let { method: u } = t,
            l = 'params' in t ? ((o = t.params) != null ? o : []) : [],
            w = pi[u];
          if (!w) throw new Error('MethodNotFound');
          let x = w.request.safeParse({
            jsonrpc: '2.0',
            id: In().toString(),
            method: u,
            params: l,
          });
          if (!x.success) {
            if (u === 'personal_sign') {
              let _ = pi.eth_sign.params.safeParse(l);
              if (_.success) {
                let [O, D] = _.data;
                return this.request({ method: 'personal_sign', params: [D, O] });
              }
            }
            if (u === 'eth_signTypedData') {
              let _ = pi.eth_signTypedData_v4.params.safeParse(l);
              if (_.success)
                return this.request({ method: 'eth_signTypedData_v4', params: _.data });
            }
            throw x.error;
          }
          let A = x.data;
          if (((n = w.response.parse(await oe(this, Qi).send(A))), 'error' in n))
            throw new Ve(n.error);
          try {
            if (u === 'eth_requestAccounts') {
              let _ = (s = n.result) == null ? void 0 : s[0].toLowerCase();
              _ !== this.selectedAddress && this.emit('accountsChanged', [_]);
            }
            if (u === 'eth_accounts') {
              let _ =
                (c = (i = n.result) == null ? void 0 : i[0]) == null ? void 0 : c.toLowerCase();
              _ && _ !== this.selectedAddress && (this.selectedAddress = _);
            }
            if (u === 'eth_chainId') {
              let _ = n.result;
              _ !== this.chainId &&
                ((this.chainId = _),
                (this.networkVersion = parseInt(_.substring(2), 16).toString()),
                this.emit('chainChanged', this.chainId));
            }
            if (u === 'wallet_addEthereumChain') {
              let _ = A.params[0].chainId;
              _ !== this.chainId &&
                ((this.chainId = _),
                (this.networkVersion = parseInt(_.substring(2), 16).toString()),
                this.emit('chainChanged', this.chainId));
            }
            if (u === 'wallet_switchEthereumChain') {
              let _ = A.params[0].chainId;
              _ !== this.chainId &&
                ((this.chainId = _),
                (this.networkVersion = parseInt(_.substring(2), 16).toString()),
                this.emit('chainChanged', this.chainId));
            }
          } catch (_) {
            console.error('event emitter error', _);
          }
          return n.result;
        } catch (u) {
          throw u instanceof Ve
            ? u
            : u instanceof Kt
              ? new Ve(
                  { code: -32e3, message: 'Missing or invalid parameters.' },
                  { method: t.method }
                )
              : u instanceof Error && u.message === 'MethodNotFound'
                ? new Ve(
                    {
                      code: -32601,
                      message: `The method ${t.method} does not exist / is not available.`,
                    },
                    { method: t.method }
                  )
                : new Ve(
                    { code: -32603, message: 'Internal JSON-RPC error.' },
                    { method: t.method }
                  );
        }
      });
      Pe(this, 'selectedAddress');
      Pe(this, 'chainId');
      Pe(this, 'networkVersion');
      Pe(this, '_metamask', { isUnlocked: () => !!this.selectedAddress });
      Pe(this, 'handleNotification', async (t) => {
        var n, o, s, i, c, u, l, w;
        switch (t.method) {
          case 'phantom_accountChanged': {
            let x = Er.phantom_accountChanged.notification.safeParse(t);
            if (!x.success) return;
            let A =
              (s =
                (o = (n = x.data.params) == null ? void 0 : n.evm) == null
                  ? void 0
                  : o.toLowerCase()) != null
                ? s
                : null;
            A !== this.selectedAddress && this.emit('accountsChanged', A ? [A] : []);
            break;
          }
          case 'phantom_trustRevoked': {
            let x = Er.phantom_trustRevoked.notification.safeParse(t);
            if (!x.success) return;
            ((c = (i = x.data.params) == null ? void 0 : i.evm) == null
              ? void 0
              : c.toLowerCase()) === this.selectedAddress && this.emit('accountsChanged', []);
            break;
          }
          case 'phantom_chainChanged': {
            let x = Er.phantom_chainChanged.notification.safeParse(t);
            if (!x.success) return;
            let A =
              (w =
                (l = (u = x.data.params) == null ? void 0 : u.evm) == null
                  ? void 0
                  : l.toLowerCase()) != null
                ? w
                : null;
            A &&
              A !== this.chainId &&
              ((this.chainId = A),
              (this.networkVersion = parseInt(A.substring(2), 16).toString()),
              this.emit('chainChanged', A));
            break;
          }
        }
      });
      Pe(this, 'removeAllListeners', (t) => {
        try {
          return super.removeAllListeners(t);
        } finally {
          oe(this, Tc).call(this);
        }
      });
      Ze(this, Qi, t),
        oe(this, Qi).start(),
        (this.selectedAddress = null),
        (this.chainId = '0x1'),
        (this.networkVersion = '1'),
        (this.request = this.request.bind(this)),
        t.addListener((n) => {
          let o = yn.safeParse(n);
          o.success && this.handleNotification(o.data);
        }),
        oe(this, Tc).call(this),
        this.emit('connect', { chainId: this.chainId });
    }
    isConnected() {
      return navigator.onLine;
    }
    enable() {
      return this.request({ method: 'eth_requestAccounts', params: [] });
    }
    sendAsync(t, n) {
      let o = 'id' in t && typeof t.id < 'u' ? t.id : null;
      this.request(t)
        .then((s) => n(null, { jsonrpc: '2.0', id: o, result: s }))
        .catch((s) => n(s, null));
    }
    send(t, n) {
      return typeof t != 'string' ? this.sendAsync(t, n) : this.request({ method: t, params: n });
    }
  };
(Qi = new WeakMap()), (Tc = new WeakMap());
var ea = class r extends Cl {
  static inject(e, t = 'phantom') {
    let n = window;
    n.isPhantomInstalled = !0;
    try {
      delete window.web3;
    } catch {}
    let o = new r(e);
    window[t] || Object.defineProperty(window, t, { value: {}, writable: !1 }),
      Object.defineProperty(window[t], 'ethereum', { value: o, writable: !1 });
    let s = { uuid: In().toString(), name: 'Phantom', icon: tg, rdns: 'app.phantom' };
    try {
      window.addEventListener('eip6963:requestProvider', () => {
        RM(s, o);
      }),
        RM(s, o);
    } catch {
      console.error('PHANTOM error announcing multi-injection provider');
    }
    return o;
  }
  constructor(e) {
    super(new bn(e));
  }
};
f();
f();
var kM = Object.prototype.hasOwnProperty;
function TM(r, e, t) {
  for (t of r.keys()) if (qo(t, e)) return t;
}
function qo(r, e) {
  var t, n, o;
  if (r === e) return !0;
  if (r && e && (t = r.constructor) === e.constructor) {
    if (t === Date) return r.getTime() === e.getTime();
    if (t === RegExp) return r.toString() === e.toString();
    if (t === Array) {
      if ((n = r.length) === e.length) for (; n-- && qo(r[n], e[n]); );
      return n === -1;
    }
    if (t === Set) {
      if (r.size !== e.size) return !1;
      for (n of r)
        if (((o = n), (o && typeof o == 'object' && ((o = TM(e, o)), !o)) || !e.has(o))) return !1;
      return !0;
    }
    if (t === Map) {
      if (r.size !== e.size) return !1;
      for (n of r)
        if (
          ((o = n[0]), (o && typeof o == 'object' && ((o = TM(e, o)), !o)) || !qo(n[1], e.get(o)))
        )
          return !1;
      return !0;
    }
    if (t === ArrayBuffer) (r = new Uint8Array(r)), (e = new Uint8Array(e));
    else if (t === DataView) {
      if ((n = r.byteLength) === e.byteLength) for (; n-- && r.getInt8(n) === e.getInt8(n); );
      return n === -1;
    }
    if (ArrayBuffer.isView(r)) {
      if ((n = r.byteLength) === e.byteLength) for (; n-- && r[n] === e[n]; );
      return n === -1;
    }
    if (!t || typeof r == 'object') {
      n = 0;
      for (t in r)
        if ((kM.call(r, t) && ++n && !kM.call(e, t)) || !(t in e) || !qo(r[t], e[t])) return !1;
      return Object.keys(e).length === n;
    }
  }
  return r !== r && e !== e;
}
var PM = _e(Io());
var ta,
  Do,
  Us,
  ql = class extends PM.default {
    constructor(t) {
      super();
      Pe(this, '_injectionEndMs', null);
      Pe(this, '_injectionStartMs', null);
      Pe(this, 'isPhantom', !0);
      Ne(this, ta);
      Ne(this, Do);
      Pe(this, 'requestAccount', async () => {
        let t = await oe(this, Us).call(this, { method: 'sui_requestAccounts', params: [] }),
          n = { address: t.address, publicKey: _l(t.publicKey) };
        return this.emit('accountChanged', n), n;
      });
      Pe(
        this,
        'signMessage',
        async (t, n) =>
          await oe(this, Us).call(this, {
            method: 'sui_signMessage',
            params: { message: t, address: n },
          })
      );
      Pe(this, 'signTransaction', async (t) => {
        let { networkID: n, transaction: o, address: s } = t;
        return await oe(this, Us).call(this, {
          method: 'sui_signTransaction',
          params: { transaction: o, address: s, networkID: n },
        });
      });
      Pe(this, 'signAndExecuteTransaction', async (t) => {
        let { networkID: n, transaction: o, address: s } = t;
        return await oe(this, Us).call(this, {
          method: 'sui_signAndExecuteTransaction',
          params: { transaction: o, address: s, networkID: n },
        });
      });
      Pe(this, 'handleNotification', async (t) => {
        var n, o;
        switch (t.method) {
          case 'phantom_accountChanged': {
            let s = Er.phantom_accountChanged.notification.safeParse(t);
            if (!s.success) return;
            let i = (n = s.data.params) == null ? void 0 : n.sui;
            if (!i) {
              this.emit('accountChanged', null);
              return;
            }
            let c = { address: i.address, publicKey: _l(i.publicKey) };
            qo(c, oe(this, Do)) || this.emit('accountChanged', c);
            break;
          }
          case 'phantom_trustRevoked': {
            let s = Er.phantom_trustRevoked.notification.safeParse(t);
            if (!s.success) return;
            let i = (o = s.data.params) == null ? void 0 : o.sui;
            if (!i) {
              this.emit('accountChanged', null);
              return;
            }
            let c = { address: i.address, publicKey: _l(i.publicKey) };
            qo(c, oe(this, Do)) && this.emit('accountChanged', null);
            break;
          }
        }
      });
      Ne(this, Us, async (t) => {
        var o;
        let n;
        try {
          let { method: s } = t,
            i = 'params' in t ? ((o = t.params) != null ? o : []) : [],
            c = Kp[s];
          if (!c) throw new Error('MethodNotFound');
          let u = c.request.safeParse({
            jsonrpc: '2.0',
            id: In().toString(),
            method: s,
            params: i,
          });
          if (!u.success) throw u.error;
          let l = u.data,
            w = await oe(this, ta).send(l);
          if (((n = c.response.parse(w)), 'error' in n)) throw new Ve(n.error);
          return n.result;
        } catch (s) {
          throw s instanceof Ve
            ? s
            : s instanceof Kt
              ? new Ve(
                  { code: -32e3, message: 'Missing or invalid parameters.' },
                  { method: t.method }
                )
              : s instanceof Error && s.message === 'MethodNotFound'
                ? new Ve(
                    {
                      code: -32601,
                      message: `The method ${t.method} does not exist / is not available.`,
                    },
                    { method: t.method }
                  )
                : new Ve(
                    { code: -32603, message: 'Internal JSON-RPC error.' },
                    { method: t.method }
                  );
        }
      });
      Ze(this, ta, t),
        oe(this, ta).start(),
        Ze(this, Do, null),
        t.addListener((n) => {
          let o = yn.safeParse(n);
          o.success && this.handleNotification(o.data);
        }),
        this.on('accountChanged', (n) => {
          n ? Ze(this, Do, n) : (Ze(this, Do, null), this.emit('disconnect'));
        });
    }
  };
(ta = new WeakMap()), (Do = new WeakMap()), (Us = new WeakMap());
var ra = class r extends ql {
  static inject(e, t = 'phantom') {
    let n = window;
    n.isPhantomInstalled = !0;
    let o = new r(e);
    return (
      window[t] || Object.defineProperty(window, t, { value: {}, writable: !1 }),
      Object.defineProperty(window[t], 'sui', { value: o, writable: !1 }),
      o
    );
  }
  constructor(e) {
    super(new bn(e));
  }
};
f();
var BM = _e(Io());
var na,
  Dl = class extends BM.EventEmitter {
    constructor(t) {
      super();
      Ne(this, na);
      Ze(this, na, t), oe(this, na).start();
    }
    async buy({ buy: t, amount: n, redirectURL: o }) {
      let s = o || window.location.origin + window.location.pathname;
      this.request({
        method: 'phantom_deep_link_onramp',
        params: { buy: t, amount: n, redirectURL: s },
      });
    }
    async swap({ buy: t, sell: n, amount: o }) {
      return this.request({
        method: 'phantom_deep_link_swap',
        params: { buy: t, sell: n, amount: o },
      });
    }
    async navigate({ route: t, params: n }) {
      return this.request({
        method: 'phantom_deep_link_navigate',
        params: { route: t, params: n },
      });
    }
    async login() {
      return this.request({ method: 'phantom_login', params: {} });
    }
    async logout() {
      return this.request({ method: 'phantom_logout', params: {} });
    }
    async getUser() {
      return this.request({ method: 'phantom_getUser', params: {} });
    }
    async request(t) {
      let { method: n, params: o } = t;
      if (!n.startsWith('phantom_'))
        throw new Ve({
          code: -32601,
          message: `The method ${n} does not exist / is not available.`,
        });
      try {
        let s = await oe(this, na).send({
          jsonrpc: '2.0',
          id: In().toString(),
          method: n,
          params: o,
        });
        if ('error' in s) throw new Ve(s.error);
        return s.result;
      } catch (s) {
        throw s instanceof Ve ? s : new Ve({ code: -32603, message: 'Internal JSON-RPC error.' });
      }
    }
  };
na = new WeakMap();
var oa = class r extends Dl {
  static inject(e, t = 'phantom') {
    window[t] || Object.defineProperty(window, t, { value: {}, writable: !1 });
    let n = new r(e);
    return Object.defineProperty(window[t], 'app', { value: n, writable: !1 }), n;
  }
  constructor(e) {
    super(new bn(e));
  }
};
f();
var VW = _e(Io());
f();
var MM = _e(io());
var $W = [
    'solana:signAndSendTransaction',
    'solana:signMessage',
    'solana:signTransaction',
    'solana:signIn',
  ],
  Uo,
  Fl,
  jl,
  Hl,
  dr,
  wr,
  Wl,
  js,
  rg,
  zM,
  Fs,
  Pc,
  Kl,
  Vl,
  $l,
  Gl,
  Yl,
  Zl,
  Jl,
  ng = class ng {
    constructor(e) {
      Ne(this, js);
      Ne(this, Uo, {});
      Ne(this, Fl, '1.0.0');
      Ne(this, jl, 'Phantom');
      Ne(this, Hl, kd);
      Ne(this, dr, null);
      Ne(this, wr);
      Ne(this, Wl, (e, t) => {
        var n;
        return (
          ((n = oe(this, Uo)[e]) != null && n.push(t)) || (oe(this, Uo)[e] = [t]),
          () => sa(this, js, zM).call(this, e, t)
        );
      });
      Ne(this, Fs, () => {
        var t;
        let e = (t = oe(this, wr).publicKey) == null ? void 0 : t.toBase58();
        if (e) {
          let n = oe(this, wr).publicKey.toBytes(),
            o = oe(this, dr);
          (!o || o.address !== e || !Md(o.publicKey, n)) &&
            (Ze(this, dr, new aa({ address: e, publicKey: n, chains: fa, features: $W })),
            sa(this, js, rg).call(this, 'change', { accounts: this.accounts }));
        }
      });
      Ne(this, Pc, () => {
        oe(this, dr) &&
          (Ze(this, dr, null), sa(this, js, rg).call(this, 'change', { accounts: this.accounts }));
      });
      Ne(this, Kl, () => {
        oe(this, wr).publicKey ? oe(this, Fs).call(this) : oe(this, Pc).call(this);
      });
      Ne(
        this,
        Vl,
        async ({ silent: e } = {}) => (
          oe(this, dr) || (await oe(this, wr).connect(e ? { onlyIfTrusted: !0 } : void 0)),
          oe(this, Fs).call(this),
          { accounts: this.accounts }
        )
      );
      Ne(this, $l, async () => {
        await oe(this, wr).disconnect();
      });
      Ne(this, Gl, async (...e) => {
        if (!oe(this, dr)) throw new Error('not connected');
        let t = [];
        for (let n of e) {
          let { transaction: o, account: s, chain: i, options: c } = n,
            { preflightCommitment: u, skipPreflight: l, maxRetries: w } = c || {};
          if (!oe(this, dr).equals(s)) throw new Error('invalid account');
          if (!Bd(i)) throw new Error('invalid chain');
          let { signature: x } = await oe(this, wr).signAndSendTransaction(tn.deserialize(o), {
            preflightCommitment: u,
            maxRetries: w,
            skipPreflight: l,
          });
          t.push({ signature: MM.default.decode(x) });
        }
        return t;
      });
      Ne(this, Yl, async (...e) => {
        if (!oe(this, dr)) throw new Error('not connected');
        let t = [];
        if (e.length === 1) {
          let n = e[0],
            o = tn.deserialize(n.transaction),
            s = await oe(this, wr).signTransaction(o);
          if (!s) return [];
          t.push({ signedTransaction: s.serialize() });
        } else if (e.length > 1) {
          let n = new Map();
          for (let [o, s] of e.entries()) {
            let i = n.get(s.account);
            i || ((i = []), n.set(s.account, i)), i.push([o, tn.deserialize(s.transaction)]);
          }
          for (let [o, s] of n.entries()) {
            let [i, c] = s.reduce(([l, w], [x, A]) => (l.push(x), w.push(A), [l, w]), [[], []]),
              u = await oe(this, wr).signAllTransactions(c);
            for (let [l, w] of i.entries()) t[w] = { signedTransaction: u[l].serialize() };
          }
        }
        return t;
      });
      Ne(this, Zl, async (...e) => {
        if (!oe(this, dr)) throw new Error('not connected');
        let t = [];
        for (let n of e) {
          let { message: o, account: s } = n;
          if (!oe(this, dr).equals(s)) throw new Error('invalid account');
          let { signature: i } = await oe(this, wr).signMessage(o);
          t.push({ signedMessage: o, signature: i });
        }
        return t;
      });
      Ne(this, Jl, async (...e) => {
        let t = [];
        for (let n of e) {
          let o = { ...n, resources: n.resources ? Array.from(n.resources) : void 0 },
            { signedMessage: s, signature: i } = await oe(this, wr).signIn(o);
          t.push({ account: oe(this, dr), signedMessage: s, signature: i });
        }
        return t;
      });
      new.target === ng && Object.freeze(this),
        Ze(this, wr, e),
        e.on('connect', oe(this, Fs), this),
        e.on('disconnect', oe(this, Pc), this),
        e.on('accountChanged', oe(this, Kl), this),
        oe(this, Fs).call(this);
    }
    get version() {
      return oe(this, Fl);
    }
    get name() {
      return oe(this, jl);
    }
    get icon() {
      return oe(this, Hl);
    }
    get chains() {
      return fa.slice();
    }
    get features() {
      return {
        'standard:connect': { version: '1.0.0', connect: oe(this, Vl) },
        'standard:disconnect': { version: '1.0.0', disconnect: oe(this, $l) },
        'standard:events': { version: '1.0.0', on: oe(this, Wl) },
        'solana:signAndSendTransaction': {
          version: '1.0.0',
          supportedTransactionVersions: ['legacy', 0],
          signAndSendTransaction: oe(this, Gl),
        },
        'solana:signTransaction': {
          version: '1.0.0',
          supportedTransactionVersions: ['legacy', 0],
          signTransaction: oe(this, Yl),
        },
        'solana:signMessage': { version: '1.0.0', signMessage: oe(this, Zl) },
        'solana:signIn': { version: '1.0.0', signIn: oe(this, Jl) },
        'phantom:': { phantom: oe(this, wr) },
      };
    }
    get accounts() {
      return oe(this, dr) ? [oe(this, dr)] : [];
    }
  };
(Uo = new WeakMap()),
  (Fl = new WeakMap()),
  (jl = new WeakMap()),
  (Hl = new WeakMap()),
  (dr = new WeakMap()),
  (wr = new WeakMap()),
  (Wl = new WeakMap()),
  (js = new WeakSet()),
  (rg = function (e, ...t) {
    var n;
    (n = oe(this, Uo)[e]) == null || n.forEach((o) => o.apply(null, t));
  }),
  (zM = function (e, t) {
    var n;
    oe(this, Uo)[e] = (n = oe(this, Uo)[e]) == null ? void 0 : n.filter((o) => t !== o);
  }),
  (Fs = new WeakMap()),
  (Pc = new WeakMap()),
  (Kl = new WeakMap()),
  (Vl = new WeakMap()),
  ($l = new WeakMap()),
  (Gl = new WeakMap()),
  (Yl = new WeakMap()),
  (Zl = new WeakMap()),
  (Jl = new WeakMap());
var Ul = ng;
f();
var GW = () => !!window.solana,
  YW = () => !!window.ethereum,
  ZW = async () => {
    var r, e, t;
    return !!(
      (t =
        (e = await ((r = navigator.userAgentData) == null
          ? void 0
          : r.getHighEntropyValues(['model']))) == null
          ? void 0
          : e.model) != null && t.match(/Saga/i)
    );
  },
  JW = (r = 'phantom') => {
    var e, t, n, o, s;
    return (
      ((e = window == null ? void 0 : window[r]) == null ? void 0 : e.solana) &&
      ((n = (t = window == null ? void 0 : window[r]) == null ? void 0 : t.solana) == null
        ? void 0
        : n.isPhantom) &&
      !(
        (s = (o = window == null ? void 0 : window[r]) == null ? void 0 : o.solana) != null &&
        s.isMagicEden
      )
    );
  },
  LM = async (r = 'phantom') =>
    !(
      JW(r) ||
      ((navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i)) &&
        (GW() || YW()) &&
        r === 'phantom') ||
      (await ZW()) ||
      document.getElementById(`${r}-wallet`)
    );
f();
var NM = a.object({
    width: a.string(),
    maxWidth: a.string(),
    height: a.string(),
    maxHeight: a.string(),
    position: a.string().optional(),
    transform: a.string().optional(),
    top: a.string().optional(),
    left: a.string().optional(),
    bottom: a.string().optional(),
    right: a.string().optional(),
    zIndex: a.string().optional(),
  }),
  OM = 'RESIZE_DONE',
  CM = 'GET_ORIGIN_MESSAGE',
  qM = 'PROVIDE_ORIGIN_MESSAGE';
var XW = '10000';
function QW(r, e, t, n) {
  var s;
  let o = (s = n.get('zIndex')) != null ? s : XW;
  (r.id = `${t}-wallet`),
    (r.src = e.toString()),
    r.setAttribute('frameborder', '0'),
    (r.style.outline = '0'),
    r.setAttribute('marginwidth', '0'),
    r.setAttribute('marginheight', '0'),
    (r.style.position = 'fixed'),
    (r.style.pointerEvents = 'auto'),
    (r.style.bottom = '0'),
    (r.style.right = '0'),
    (r.style.width = '0'),
    (r.style.height = '0'),
    (r.style.zIndex = o),
    n.get('element') &&
      ((r.style.position = 'relative'),
      (r.style.bottom = 'auto'),
      (r.style.right = 'auto'),
      (r.style.width = '100%'),
      (r.style.height = '100%'),
      (r.style.display = 'none'));
}
function eK(r, e) {
  (r.style.width = e.width),
    (r.style.height = e.height),
    (r.style.maxWidth = e.maxWidth),
    (r.style.maxHeight = e.maxHeight),
    e.position && (r.style.position = e.position),
    e.transform && (r.style.transform = e.transform),
    e.top && (r.style.top = e.top),
    e.left && (r.style.left = e.left),
    e.bottom && (r.style.bottom = e.bottom),
    e.right && (r.style.right = e.right),
    e.zIndex && (r.style.zIndex = e.zIndex);
}
function tK(r, e) {
  var u;
  let t = new URL(r);
  e.forEach((l, w) => t.searchParams.set(w, l)),
    t.searchParams.set('clientWidth', document.documentElement.clientWidth.toString()),
    t.searchParams.set('clientHeight', document.documentElement.clientHeight.toString());
  let n = document.createElement('iframe'),
    o = (u = e.get('namespace')) != null ? u : 'phantom';
  QW(n, t, o, e);
  let s = e.get('skipInjection') === 'true',
    i = e.get('uuid');
  window.addEventListener('message', (l) => {
    var x, A;
    if (new URL(r).origin !== l.origin) return;
    if (l.data === CM) {
      (x = n.contentWindow) == null || x.postMessage(qM, '*');
      return;
    }
    let w = NM.safeParse(l.data);
    if (w.success)
      if ((eK(n, w.data), (A = n.contentWindow) == null || A.postMessage(OM, '*'), s)) {
        let _ = new Xi(n),
          O = new ea(n),
          D = new ra(n),
          j = new oa(n),
          G = { solana: _, ethereum: O, sui: D, app: j };
        window.dispatchEvent(
          new CustomEvent(`phantom#embedded#initialized${i ? `#${i}` : ''}`, {
            detail: { providers: G },
          })
        );
      } else {
        let _ = Xi.inject(!0, n, o),
          O = ea.inject(n, o),
          D = ra.inject(n, o),
          j = oa.inject(n, o),
          G = { solana: _, ethereum: O, sui: D, app: j };
        Pd(new Ul(_)),
          window.dispatchEvent(
            new CustomEvent(`phantom#embedded#initialized${i ? `#${i}` : ''}`, {
              detail: { providers: G },
            })
          );
      }
  });
  let c = e.get('element');
  if (c) {
    let l = document.getElementById(c);
    l ? l.appendChild(n) : console.error(`Phantom: Element with id ${c} not found`);
  } else document.body.appendChild(n);
  return () => {
    document.body.removeChild(n);
  };
}
async function rK() {
  var o;
  let r = new URL(import.meta.url),
    e = r.origin,
    t = (o = r.searchParams.get('namespace')) != null ? o : 'phantom';
  (await LM(t))
    ? e
      ? tK(e, r.searchParams)
      : console.error('Phantom: No wallet URL provided.')
    : console.log(
        'Phantom: Another wallet provider is available. Skipping injection of the Phantom Embedded Wallet.'
      );
}
rK();
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)

js-sha3/src/sha3.js:
  (**
   * [js-sha3]{@link https://github.com/emn178/js-sha3}
   *
   * @version 0.8.0
   * @author Chen, Yi-Cyuan [emn178@gmail.com]
   * @copyright Chen, Yi-Cyuan 2015-2018
   * @license MIT
   *)

safe-buffer/index.js:
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

numeral/numeral.js:
  (*! @preserve
   * numeral.js
   * version : 2.0.6
   * author : Adam Draper
   * license : MIT
   * http://adamwdraper.github.com/Numeral-js/
   *)

@solana/buffer-layout/lib/Layout.js:
  (**
   * Support for translating between Uint8Array instances and JavaScript
   * native types.
   *
   * {@link module:Layout~Layout|Layout} is the basis of a class
   * hierarchy that associates property names with sequences of encoded
   * bytes.
   *
   * Layouts are supported for these scalar (numeric) types:
   * * {@link module:Layout~UInt|Unsigned integers in little-endian
   *   format} with {@link module:Layout.u8|8-bit}, {@link
   *   module:Layout.u16|16-bit}, {@link module:Layout.u24|24-bit},
   *   {@link module:Layout.u32|32-bit}, {@link
   *   module:Layout.u40|40-bit}, and {@link module:Layout.u48|48-bit}
   *   representation ranges;
   * * {@link module:Layout~UIntBE|Unsigned integers in big-endian
   *   format} with {@link module:Layout.u16be|16-bit}, {@link
   *   module:Layout.u24be|24-bit}, {@link module:Layout.u32be|32-bit},
   *   {@link module:Layout.u40be|40-bit}, and {@link
   *   module:Layout.u48be|48-bit} representation ranges;
   * * {@link module:Layout~Int|Signed integers in little-endian
   *   format} with {@link module:Layout.s8|8-bit}, {@link
   *   module:Layout.s16|16-bit}, {@link module:Layout.s24|24-bit},
   *   {@link module:Layout.s32|32-bit}, {@link
   *   module:Layout.s40|40-bit}, and {@link module:Layout.s48|48-bit}
   *   representation ranges;
   * * {@link module:Layout~IntBE|Signed integers in big-endian format}
   *   with {@link module:Layout.s16be|16-bit}, {@link
   *   module:Layout.s24be|24-bit}, {@link module:Layout.s32be|32-bit},
   *   {@link module:Layout.s40be|40-bit}, and {@link
   *   module:Layout.s48be|48-bit} representation ranges;
   * * 64-bit integral values that decode to an exact (if magnitude is
   *   less than 2^53) or nearby integral Number in {@link
   *   module:Layout.nu64|unsigned little-endian}, {@link
   *   module:Layout.nu64be|unsigned big-endian}, {@link
   *   module:Layout.ns64|signed little-endian}, and {@link
   *   module:Layout.ns64be|unsigned big-endian} encodings;
   * * 32-bit floating point values with {@link
   *   module:Layout.f32|little-endian} and {@link
   *   module:Layout.f32be|big-endian} representations;
   * * 64-bit floating point values with {@link
   *   module:Layout.f64|little-endian} and {@link
   *   module:Layout.f64be|big-endian} representations;
   * * {@link module:Layout.const|Constants} that take no space in the
   *   encoded expression.
   *
   * and for these aggregate types:
   * * {@link module:Layout.seq|Sequence}s of instances of a {@link
   *   module:Layout~Layout|Layout}, with JavaScript representation as
   *   an Array and constant or data-dependent {@link
   *   module:Layout~Sequence#count|length};
   * * {@link module:Layout.struct|Structure}s that aggregate a
   *   heterogeneous sequence of {@link module:Layout~Layout|Layout}
   *   instances, with JavaScript representation as an Object;
   * * {@link module:Layout.union|Union}s that support multiple {@link
   *   module:Layout~VariantLayout|variant layouts} over a fixed
   *   (padded) or variable (not padded) span of bytes, using an
   *   unsigned integer at the start of the data or a separate {@link
   *   module:Layout.unionLayoutDiscriminator|layout element} to
   *   determine which layout to use when interpreting the buffer
   *   contents;
   * * {@link module:Layout.bits|BitStructure}s that contain a sequence
   *   of individual {@link
   *   module:Layout~BitStructure#addField|BitField}s packed into an 8,
   *   16, 24, or 32-bit unsigned integer starting at the least- or
   *   most-significant bit;
   * * {@link module:Layout.cstr|C strings} of varying length;
   * * {@link module:Layout.blob|Blobs} of fixed- or variable-{@link
   *   module:Layout~Blob#length|length} raw data.
   *
   * All {@link module:Layout~Layout|Layout} instances are immutable
   * after construction, to prevent internal state from becoming
   * inconsistent.
   *
   * @local Layout
   * @local ExternalLayout
   * @local GreedyCount
   * @local OffsetLayout
   * @local UInt
   * @local UIntBE
   * @local Int
   * @local IntBE
   * @local NearUInt64
   * @local NearUInt64BE
   * @local NearInt64
   * @local NearInt64BE
   * @local Float
   * @local FloatBE
   * @local Double
   * @local DoubleBE
   * @local Sequence
   * @local Structure
   * @local UnionDiscriminator
   * @local UnionLayoutDiscriminator
   * @local Union
   * @local VariantLayout
   * @local BitStructure
   * @local BitField
   * @local Boolean
   * @local Blob
   * @local CString
   * @local Constant
   * @local bindConstructorLayout
   * @module Layout
   * @license MIT
   * @author Peter A. Bigot
   * @see {@link https://github.com/pabigot/buffer-layout|buffer-layout on GitHub}
   *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)

@babel/runtime/helpers/regeneratorRuntime.js:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE *)

@noble/hashes/esm/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/ed25519/lib/esm/index.js:
  (*! noble-ed25519 - MIT License (c) 2019 Paul Miller (paulmillr.com) *)

@noble/secp256k1/lib/esm/index.js:
  (*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) *)

@noble/hashes/esm/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
*/
