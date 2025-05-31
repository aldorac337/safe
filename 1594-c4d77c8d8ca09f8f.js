try {
  let e =
      'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
          ? global
          : 'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof self
              ? self
              : {},
    t = new e.Error().stack;
  t &&
    ((e._sentryDebugIds = e._sentryDebugIds || {}),
    (e._sentryDebugIds[t] = '3c751b97-c509-4791-9460-29a5ca120496'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-3c751b97-c509-4791-9460-29a5ca120496'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1594],
  {
    34361: function (e, t, r) {
      let n, a, i, o, s;
      r.d(t, {
        ix: function () {
          return ri;
        },
      });
      var l,
        u,
        c,
        d = r(32608),
        f = r(87150).Buffer,
        h = Object.defineProperty,
        p = (e, t, r) =>
          t in e
            ? h(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        m = (e, t, r) => p(e, 'symbol' != typeof t ? t + '' : t, r);
      function g(e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      }
      let { toString: y } = Object.prototype,
        { getPrototypeOf: b } = Object,
        w =
          ((n = Object.create(null)),
          (e) => {
            let t = y.call(e);
            return n[t] || (n[t] = t.slice(8, -1).toLowerCase());
          }),
        E = (e) => ((e = e.toLowerCase()), (t) => w(t) === e),
        S = (e) => (t) => typeof t === e,
        { isArray: C } = Array,
        O = S('undefined'),
        R = E('ArrayBuffer'),
        v = S('string'),
        A = S('function'),
        T = S('number'),
        P = (e) => null !== e && 'object' == typeof e,
        _ = (e) => {
          if ('object' !== w(e)) return !1;
          let t = b(e);
          return (
            (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
          );
        },
        x = E('Date'),
        U = E('File'),
        j = E('Blob'),
        N = E('FileList'),
        L = E('URLSearchParams'),
        [D, F, k, B] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(E);
      function q(e, t, { allOwnKeys: r = !1 } = {}) {
        let n, a;
        if (null !== e && !(typeof e > 'u')) {
          if (('object' != typeof e && (e = [e]), C(e)))
            for (n = 0, a = e.length; n < a; n++) t.call(null, e[n], n, e);
          else {
            let a;
            let i = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
              o = i.length;
            for (n = 0; n < o; n++) (a = i[n]), t.call(null, e[a], a, e);
          }
        }
      }
      function I(e, t) {
        t = t.toLowerCase();
        let r = Object.keys(e),
          n = r.length,
          a;
        for (; n-- > 0; ) if (t === (a = r[n]).toLowerCase()) return a;
        return null;
      }
      let M =
          'u' > typeof globalThis
            ? globalThis
            : 'u' > typeof self
              ? self
              : 'u' > typeof window
                ? window
                : global,
        z = (e) => !O(e) && e !== M,
        K = ((a = 'u' > typeof Uint8Array && b(Uint8Array)), (e) => a && e instanceof a),
        H = E('HTMLFormElement'),
        $ = (
          ({ hasOwnProperty: e }) =>
          (t, r) =>
            e.call(t, r)
        )(Object.prototype),
        J = E('RegExp'),
        V = (e, t) => {
          let r = Object.getOwnPropertyDescriptors(e),
            n = {};
          q(r, (r, a) => {
            let i;
            !1 !== (i = t(r, a, e)) && (n[a] = i || r);
          }),
            Object.defineProperties(e, n);
        },
        W = 'abcdefghijklmnopqrstuvwxyz',
        Q = '0123456789',
        G = { DIGIT: Q, ALPHA: W, ALPHA_DIGIT: W + W.toUpperCase() + Q },
        X = E('AsyncFunction'),
        Y =
          ((l = 'function' == typeof setImmediate),
          (u = A(M.postMessage)),
          l
            ? setImmediate
            : u
              ? ((i = `axios@${Math.random()}`),
                (o = []),
                M.addEventListener(
                  'message',
                  ({ source: e, data: t }) => {
                    e === M && t === i && o.length && o.shift()();
                  },
                  !1
                ),
                (e) => {
                  o.push(e), M.postMessage(i, '*');
                })
              : (e) => setTimeout(e)),
        Z =
          'u' > typeof queueMicrotask
            ? queueMicrotask.bind(M)
            : ('u' > typeof d && d.nextTick) || Y,
        ee = {
          isArray: C,
          isArrayBuffer: R,
          isBuffer: function (e) {
            return (
              null !== e &&
              !O(e) &&
              null !== e.constructor &&
              !O(e.constructor) &&
              A(e.constructor.isBuffer) &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: (e) => {
            let t;
            return (
              e &&
              (('function' == typeof FormData && e instanceof FormData) ||
                (A(e.append) &&
                  ('formdata' === (t = w(e)) ||
                    ('object' === t && A(e.toString) && '[object FormData]' === e.toString()))))
            );
          },
          isArrayBufferView: function (e) {
            return 'u' > typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && R(e.buffer);
          },
          isString: v,
          isNumber: T,
          isBoolean: (e) => !0 === e || !1 === e,
          isObject: P,
          isPlainObject: _,
          isReadableStream: D,
          isRequest: F,
          isResponse: k,
          isHeaders: B,
          isUndefined: O,
          isDate: x,
          isFile: U,
          isBlob: j,
          isRegExp: J,
          isFunction: A,
          isStream: (e) => P(e) && A(e.pipe),
          isURLSearchParams: L,
          isTypedArray: K,
          isFileList: N,
          forEach: q,
          merge: function e() {
            let { caseless: t } = (z(this) && this) || {},
              r = {},
              n = (n, a) => {
                let i = (t && I(r, a)) || a;
                _(r[i]) && _(n)
                  ? (r[i] = e(r[i], n))
                  : _(n)
                    ? (r[i] = e({}, n))
                    : C(n)
                      ? (r[i] = n.slice())
                      : (r[i] = n);
              };
            for (let e = 0, t = arguments.length; e < t; e++) arguments[e] && q(arguments[e], n);
            return r;
          },
          extend: (e, t, r, { allOwnKeys: n } = {}) => (
            q(
              t,
              (t, n) => {
                r && A(t) ? (e[n] = g(t, r)) : (e[n] = t);
              },
              { allOwnKeys: n }
            ),
            e
          ),
          trim: (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')),
          stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
          inherits: (e, t, r, n) => {
            (e.prototype = Object.create(t.prototype, n)),
              (e.prototype.constructor = e),
              Object.defineProperty(e, 'super', { value: t.prototype }),
              r && Object.assign(e.prototype, r);
          },
          toFlatObject: (e, t, r, n) => {
            let a, i, o;
            let s = {};
            if (((t = t || {}), null == e)) return t;
            do {
              for (i = (a = Object.getOwnPropertyNames(e)).length; i-- > 0; )
                (o = a[i]), (!n || n(o, e, t)) && !s[o] && ((t[o] = e[o]), (s[o] = !0));
              e = !1 !== r && b(e);
            } while (e && (!r || r(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: w,
          kindOfTest: E,
          endsWith: (e, t, r) => {
            (e = String(e)), (void 0 === r || r > e.length) && (r = e.length), (r -= t.length);
            let n = e.indexOf(t, r);
            return -1 !== n && n === r;
          },
          toArray: (e) => {
            if (!e) return null;
            if (C(e)) return e;
            let t = e.length;
            if (!T(t)) return null;
            let r = Array(t);
            for (; t-- > 0; ) r[t] = e[t];
            return r;
          },
          forEachEntry: (e, t) => {
            let r;
            let n = (e && e[Symbol.iterator]).call(e);
            for (; (r = n.next()) && !r.done; ) {
              let n = r.value;
              t.call(e, n[0], n[1]);
            }
          },
          matchAll: (e, t) => {
            let r;
            let n = [];
            for (; null !== (r = e.exec(t)); ) n.push(r);
            return n;
          },
          isHTMLForm: H,
          hasOwnProperty: $,
          hasOwnProp: $,
          reduceDescriptors: V,
          freezeMethods: (e) => {
            V(e, (t, r) => {
              if (A(e) && -1 !== ['arguments', 'caller', 'callee'].indexOf(r)) return !1;
              if (A(e[r])) {
                if (((t.enumerable = !1), 'writable' in t)) {
                  t.writable = !1;
                  return;
                }
                t.set ||
                  (t.set = () => {
                    throw Error("Can not rewrite read-only method '" + r + "'");
                  });
              }
            });
          },
          toObjectSet: (e, t) => {
            let r = {};
            return (
              ((e) => {
                e.forEach((e) => {
                  r[e] = !0;
                });
              })(C(e) ? e : String(e).split(t)),
              r
            );
          },
          toCamelCase: (e) =>
            e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, r) {
              return t.toUpperCase() + r;
            }),
          noop: () => {},
          toFiniteNumber: (e, t) => (null != e && Number.isFinite((e = +e)) ? e : t),
          findKey: I,
          global: M,
          isContextDefined: z,
          ALPHABET: G,
          generateString: (e = 16, t = G.ALPHA_DIGIT) => {
            let r = '',
              { length: n } = t;
            for (; e--; ) r += t[(Math.random() * n) | 0];
            return r;
          },
          isSpecCompliantForm: function (e) {
            return !!(
              e &&
              A(e.append) &&
              'FormData' === e[Symbol.toStringTag] &&
              e[Symbol.iterator]
            );
          },
          toJSONObject: (e) => {
            let t = Array(10),
              r = (e, n) => {
                if (P(e)) {
                  if (t.indexOf(e) >= 0) return;
                  if (!('toJSON' in e)) {
                    t[n] = e;
                    let a = C(e) ? [] : {};
                    return (
                      q(e, (e, t) => {
                        let i = r(e, n + 1);
                        O(i) || (a[t] = i);
                      }),
                      (t[n] = void 0),
                      a
                    );
                  }
                }
                return e;
              };
            return r(e, 0);
          },
          isAsyncFn: X,
          isThenable: (e) => e && (P(e) || A(e)) && A(e.then) && A(e.catch),
          setImmediate: Y,
          asap: Z,
        };
      function et(e, t, r, n, a) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = Error().stack),
          (this.message = e),
          (this.name = 'AxiosError'),
          t && (this.code = t),
          r && (this.config = r),
          n && (this.request = n),
          a && ((this.response = a), (this.status = a.status ? a.status : null));
      }
      ee.inherits(et, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: ee.toJSONObject(this.config),
            code: this.code,
            status: this.status,
          };
        },
      });
      let er = et.prototype,
        en = {};
      function ea(e) {
        return ee.isPlainObject(e) || ee.isArray(e);
      }
      function ei(e) {
        return ee.endsWith(e, '[]') ? e.slice(0, -2) : e;
      }
      function eo(e, t, r) {
        return e
          ? e
              .concat(t)
              .map(function (e, t) {
                return (e = ei(e)), !r && t ? '[' + e + ']' : e;
              })
              .join(r ? '.' : '')
          : t;
      }
      [
        'ERR_BAD_OPTION_VALUE',
        'ERR_BAD_OPTION',
        'ECONNABORTED',
        'ETIMEDOUT',
        'ERR_NETWORK',
        'ERR_FR_TOO_MANY_REDIRECTS',
        'ERR_DEPRECATED',
        'ERR_BAD_RESPONSE',
        'ERR_BAD_REQUEST',
        'ERR_CANCELED',
        'ERR_NOT_SUPPORT',
        'ERR_INVALID_URL',
      ].forEach((e) => {
        en[e] = { value: e };
      }),
        Object.defineProperties(et, en),
        Object.defineProperty(er, 'isAxiosError', { value: !0 }),
        (et.from = (e, t, r, n, a, i) => {
          let o = Object.create(er);
          return (
            ee.toFlatObject(
              e,
              o,
              function (e) {
                return e !== Error.prototype;
              },
              (e) => 'isAxiosError' !== e
            ),
            et.call(o, e.message, t, r, n, a),
            (o.cause = e),
            (o.name = e.name),
            i && Object.assign(o, i),
            o
          );
        });
      let es = ee.toFlatObject(ee, {}, null, function (e) {
        return /^is[A-Z]/.test(e);
      });
      function el(e, t, r) {
        if (!ee.isObject(e)) throw TypeError('target must be an object');
        t = t || new FormData();
        let n = (r = ee.toFlatObject(
            r,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (e, t) {
              return !ee.isUndefined(t[e]);
            }
          )).metaTokens,
          a = r.visitor || u,
          i = r.dots,
          o = r.indexes,
          s = (r.Blob || ('u' > typeof Blob && Blob)) && ee.isSpecCompliantForm(t);
        if (!ee.isFunction(a)) throw TypeError('visitor must be a function');
        function l(e) {
          if (null === e) return '';
          if (ee.isDate(e)) return e.toISOString();
          if (!s && ee.isBlob(e)) throw new et('Blob is not supported. Use a Buffer instead.');
          return ee.isArrayBuffer(e) || ee.isTypedArray(e)
            ? s && 'function' == typeof Blob
              ? new Blob([e])
              : f.from(e)
            : e;
        }
        function u(e, r, a) {
          let s = e;
          if (e && !a && 'object' == typeof e) {
            if (ee.endsWith(r, '{}')) (r = n ? r : r.slice(0, -2)), (e = JSON.stringify(e));
            else {
              var u;
              if (
                (ee.isArray(e) && ((u = e), ee.isArray(u) && !u.some(ea))) ||
                ((ee.isFileList(e) || ee.endsWith(r, '[]')) && (s = ee.toArray(e)))
              )
                return (
                  (r = ei(r)),
                  s.forEach(function (e, n) {
                    ee.isUndefined(e) ||
                      null === e ||
                      t.append(!0 === o ? eo([r], n, i) : null === o ? r : r + '[]', l(e));
                  }),
                  !1
                );
            }
          }
          return !!ea(e) || (t.append(eo(a, r, i), l(e)), !1);
        }
        let c = [],
          d = Object.assign(es, { defaultVisitor: u, convertValue: l, isVisitable: ea });
        if (!ee.isObject(e)) throw TypeError('data must be an object');
        return (
          (function e(r, n) {
            if (!ee.isUndefined(r)) {
              if (-1 !== c.indexOf(r)) throw Error('Circular reference detected in ' + n.join('.'));
              c.push(r),
                ee.forEach(r, function (r, i) {
                  (!(ee.isUndefined(r) || null === r) &&
                    a.call(t, r, ee.isString(i) ? i.trim() : i, n, d)) === !0 &&
                    e(r, n ? n.concat(i) : [i]);
                }),
                c.pop();
            }
          })(e),
          t
        );
      }
      function eu(e) {
        let t = {
          '!': '%21',
          "'": '%27',
          '(': '%28',
          ')': '%29',
          '~': '%7E',
          '%20': '+',
          '%00': '\0',
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
          return t[e];
        });
      }
      function ec(e, t) {
        (this._pairs = []), e && el(e, this, t);
      }
      let ed = ec.prototype;
      function ef(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',')
          .replace(/%20/g, '+')
          .replace(/%5B/gi, '[')
          .replace(/%5D/gi, ']');
      }
      function eh(e, t, r) {
        let n;
        if (!t) return e;
        let a = (r && r.encode) || ef,
          i = r && r.serialize;
        if ((n = i ? i(t, r) : ee.isURLSearchParams(t) ? t.toString() : new ec(t, r).toString(a))) {
          let t = e.indexOf('#');
          -1 !== t && (e = e.slice(0, t)), (e += (-1 === e.indexOf('?') ? '?' : '&') + n);
        }
        return e;
      }
      (ed.append = function (e, t) {
        this._pairs.push([e, t]);
      }),
        (ed.toString = function (e) {
          let t = e
            ? function (t) {
                return e.call(this, t, eu);
              }
            : eu;
          return this._pairs
            .map(function (e) {
              return t(e[0]) + '=' + t(e[1]);
            }, '')
            .join('&');
        });
      class ep {
        constructor() {
          this.handlers = [];
        }
        use(e, t, r) {
          return (
            this.handlers.push({
              fulfilled: e,
              rejected: t,
              synchronous: !!r && r.synchronous,
              runWhen: r ? r.runWhen : null,
            }),
            this.handlers.length - 1
          );
        }
        eject(e) {
          this.handlers[e] && (this.handlers[e] = null);
        }
        clear() {
          this.handlers && (this.handlers = []);
        }
        forEach(e) {
          ee.forEach(this.handlers, function (t) {
            null !== t && e(t);
          });
        }
      }
      let em = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
        eg = 'u' > typeof URLSearchParams ? URLSearchParams : ec,
        ey = 'u' > typeof FormData ? FormData : null,
        eb = 'u' > typeof Blob ? Blob : null,
        ew = 'u' > typeof window && 'u' > typeof document,
        eE = ('object' == typeof navigator && navigator) || void 0,
        eS = ew && (!eE || 0 > ['ReactNative', 'NativeScript', 'NS'].indexOf(eE.product)),
        eC =
          'u' > typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          'function' == typeof self.importScripts,
        eO = (ew && window.location.href) || 'http://localhost',
        eR = {
          ...Object.freeze(
            Object.defineProperty(
              {
                __proto__: null,
                hasBrowserEnv: ew,
                hasStandardBrowserEnv: eS,
                hasStandardBrowserWebWorkerEnv: eC,
                navigator: eE,
                origin: eO,
              },
              Symbol.toStringTag,
              { value: 'Module' }
            )
          ),
          isBrowser: !0,
          classes: { URLSearchParams: eg, FormData: ey, Blob: eb },
          protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
        };
      function ev(e) {
        if (ee.isFormData(e) && ee.isFunction(e.entries)) {
          let t = {};
          return (
            ee.forEachEntry(e, (e, r) => {
              (function e(t, r, n, a) {
                let i = t[a++];
                if ('__proto__' === i) return !0;
                let o = Number.isFinite(+i),
                  s = a >= t.length;
                return (
                  (i = !i && ee.isArray(n) ? n.length : i),
                  s
                    ? ee.hasOwnProp(n, i)
                      ? (n[i] = [n[i], r])
                      : (n[i] = r)
                    : ((n[i] && ee.isObject(n[i])) || (n[i] = []),
                      e(t, r, n[i], a) &&
                        ee.isArray(n[i]) &&
                        (n[i] = (function (e) {
                          let t, r;
                          let n = {},
                            a = Object.keys(e),
                            i = a.length;
                          for (t = 0; t < i; t++) n[(r = a[t])] = e[r];
                          return n;
                        })(n[i]))),
                  !o
                );
              })(
                ee.matchAll(/\w+|\[(\w*)]/g, e).map((e) => ('[]' === e[0] ? '' : e[1] || e[0])),
                r,
                t,
                0
              );
            }),
            t
          );
        }
        return null;
      }
      let eA = {
        transitional: em,
        adapter: ['xhr', 'http', 'fetch'],
        transformRequest: [
          function (e, t) {
            let r;
            let n = t.getContentType() || '',
              a = n.indexOf('application/json') > -1,
              i = ee.isObject(e);
            if ((i && ee.isHTMLForm(e) && (e = new FormData(e)), ee.isFormData(e)))
              return a ? JSON.stringify(ev(e)) : e;
            if (
              ee.isArrayBuffer(e) ||
              ee.isBuffer(e) ||
              ee.isStream(e) ||
              ee.isFile(e) ||
              ee.isBlob(e) ||
              ee.isReadableStream(e)
            )
              return e;
            if (ee.isArrayBufferView(e)) return e.buffer;
            if (ee.isURLSearchParams(e))
              return (
                t.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1),
                e.toString()
              );
            if (i) {
              if (n.indexOf('application/x-www-form-urlencoded') > -1) {
                var o, s;
                return ((o = e),
                (s = this.formSerializer),
                el(
                  o,
                  new eR.classes.URLSearchParams(),
                  Object.assign(
                    {
                      visitor: function (e, t, r, n) {
                        return eR.isNode && ee.isBuffer(e)
                          ? (this.append(t, e.toString('base64')), !1)
                          : n.defaultVisitor.apply(this, arguments);
                      },
                    },
                    s
                  )
                )).toString();
              }
              if ((r = ee.isFileList(e)) || n.indexOf('multipart/form-data') > -1) {
                let t = this.env && this.env.FormData;
                return el(r ? { 'files[]': e } : e, t && new t(), this.formSerializer);
              }
            }
            return i || a
              ? (t.setContentType('application/json', !1),
                (function (e, t, r) {
                  if (ee.isString(e))
                    try {
                      return (0, JSON.parse)(e), ee.trim(e);
                    } catch (e) {
                      if ('SyntaxError' !== e.name) throw e;
                    }
                  return (0, JSON.stringify)(e);
                })(e))
              : e;
          },
        ],
        transformResponse: [
          function (e) {
            let t = this.transitional || eA.transitional,
              r = t && t.forcedJSONParsing,
              n = 'json' === this.responseType;
            if (ee.isResponse(e) || ee.isReadableStream(e)) return e;
            if (e && ee.isString(e) && ((r && !this.responseType) || n)) {
              let r = !(t && t.silentJSONParsing) && n;
              try {
                return JSON.parse(e);
              } catch (e) {
                if (r)
                  throw 'SyntaxError' === e.name
                    ? et.from(e, et.ERR_BAD_RESPONSE, this, null, this.response)
                    : e;
              }
            }
            return e;
          },
        ],
        timeout: 0,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        maxContentLength: -1,
        maxBodyLength: -1,
        env: { FormData: eR.classes.FormData, Blob: eR.classes.Blob },
        validateStatus: function (e) {
          return e >= 200 && e < 300;
        },
        headers: {
          common: { Accept: 'application/json, text/plain, */*', 'Content-Type': void 0 },
        },
      };
      ee.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
        eA.headers[e] = {};
      });
      let eT = ee.toObjectSet([
          'age',
          'authorization',
          'content-length',
          'content-type',
          'etag',
          'expires',
          'from',
          'host',
          'if-modified-since',
          'if-unmodified-since',
          'last-modified',
          'location',
          'max-forwards',
          'proxy-authorization',
          'referer',
          'retry-after',
          'user-agent',
        ]),
        eP = (e) => {
          let t, r, n;
          let a = {};
          return (
            e &&
              e
                .split(
                  `
`
                )
                .forEach(function (e) {
                  (n = e.indexOf(':')),
                    (t = e.substring(0, n).trim().toLowerCase()),
                    (r = e.substring(n + 1).trim()),
                    !t ||
                      (a[t] && eT[t]) ||
                      ('set-cookie' === t
                        ? a[t]
                          ? a[t].push(r)
                          : (a[t] = [r])
                        : (a[t] = a[t] ? a[t] + ', ' + r : r));
                }),
            a
          );
        },
        e_ = Symbol('internals');
      function ex(e) {
        return e && String(e).trim().toLowerCase();
      }
      function eU(e) {
        return !1 === e || null == e ? e : ee.isArray(e) ? e.map(eU) : String(e);
      }
      let ej = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
      function eN(e, t, r, n, a) {
        if (ee.isFunction(n)) return n.call(this, t, r);
        if ((a && (t = r), ee.isString(t))) {
          if (ee.isString(n)) return -1 !== t.indexOf(n);
          if (ee.isRegExp(n)) return n.test(t);
        }
      }
      let eL = class {
        constructor(e) {
          e && this.set(e);
        }
        set(e, t, r) {
          let n = this;
          function a(e, t, r) {
            let a = ex(t);
            if (!a) throw Error('header name must be a non-empty string');
            let i = ee.findKey(n, a);
            (i && void 0 !== n[i] && !0 !== r && (void 0 !== r || !1 === n[i])) ||
              (n[i || t] = eU(e));
          }
          let i = (e, t) => ee.forEach(e, (e, r) => a(e, r, t));
          if (ee.isPlainObject(e) || e instanceof this.constructor) i(e, t);
          else if (ee.isString(e) && (e = e.trim()) && !ej(e)) i(eP(e), t);
          else if (ee.isHeaders(e)) for (let [t, n] of e.entries()) a(n, t, r);
          else null != e && a(t, e, r);
          return this;
        }
        get(e, t) {
          if ((e = ex(e))) {
            let r = ee.findKey(this, e);
            if (r) {
              let e = this[r];
              if (!t) return e;
              if (!0 === t)
                return (function (e) {
                  let t;
                  let r = Object.create(null),
                    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                  for (; (t = n.exec(e)); ) r[t[1]] = t[2];
                  return r;
                })(e);
              if (ee.isFunction(t)) return t.call(this, e, r);
              if (ee.isRegExp(t)) return t.exec(e);
              throw TypeError('parser must be boolean|regexp|function');
            }
          }
        }
        has(e, t) {
          if ((e = ex(e))) {
            let r = ee.findKey(this, e);
            return !!(r && void 0 !== this[r] && (!t || eN(this, this[r], r, t)));
          }
          return !1;
        }
        delete(e, t) {
          let r = this,
            n = !1;
          function a(e) {
            if ((e = ex(e))) {
              let a = ee.findKey(r, e);
              a && (!t || eN(r, r[a], a, t)) && (delete r[a], (n = !0));
            }
          }
          return ee.isArray(e) ? e.forEach(a) : a(e), n;
        }
        clear(e) {
          let t = Object.keys(this),
            r = t.length,
            n = !1;
          for (; r--; ) {
            let a = t[r];
            (!e || eN(this, this[a], a, e, !0)) && (delete this[a], (n = !0));
          }
          return n;
        }
        normalize(e) {
          let t = this,
            r = {};
          return (
            ee.forEach(this, (n, a) => {
              let i = ee.findKey(r, a);
              if (i) {
                (t[i] = eU(n)), delete t[a];
                return;
              }
              let o = e
                ? a
                    .trim()
                    .toLowerCase()
                    .replace(/([a-z\d])(\w*)/g, (e, t, r) => t.toUpperCase() + r)
                : String(a).trim();
              o !== a && delete t[a], (t[o] = eU(n)), (r[o] = !0);
            }),
            this
          );
        }
        concat(...e) {
          return this.constructor.concat(this, ...e);
        }
        toJSON(e) {
          let t = Object.create(null);
          return (
            ee.forEach(this, (r, n) => {
              null != r && !1 !== r && (t[n] = e && ee.isArray(r) ? r.join(', ') : r);
            }),
            t
          );
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON()).map(([e, t]) => e + ': ' + t).join(`
`);
        }
        get [Symbol.toStringTag]() {
          return 'AxiosHeaders';
        }
        static from(e) {
          return e instanceof this ? e : new this(e);
        }
        static concat(e, ...t) {
          let r = new this(e);
          return t.forEach((e) => r.set(e)), r;
        }
        static accessor(e) {
          let t = (this[e_] = this[e_] = { accessors: {} }).accessors,
            r = this.prototype;
          function n(e) {
            let n = ex(e);
            t[n] ||
              ((function (e, t) {
                let r = ee.toCamelCase(' ' + t);
                ['get', 'set', 'has'].forEach((n) => {
                  Object.defineProperty(e, n + r, {
                    value: function (e, r, a) {
                      return this[n].call(this, t, e, r, a);
                    },
                    configurable: !0,
                  });
                });
              })(r, e),
              (t[n] = !0));
          }
          return ee.isArray(e) ? e.forEach(n) : n(e), this;
        }
      };
      function eD(e, t) {
        let r = this || eA,
          n = t || r,
          a = eL.from(n.headers),
          i = n.data;
        return (
          ee.forEach(e, function (e) {
            i = e.call(r, i, a.normalize(), t ? t.status : void 0);
          }),
          a.normalize(),
          i
        );
      }
      function eF(e) {
        return !!(e && e.__CANCEL__);
      }
      function ek(e, t, r) {
        et.call(this, e ?? 'canceled', et.ERR_CANCELED, t, r), (this.name = 'CanceledError');
      }
      function eB(e, t, r) {
        let n = r.config.validateStatus;
        !r.status || !n || n(r.status)
          ? e(r)
          : t(
              new et(
                'Request failed with status code ' + r.status,
                [et.ERR_BAD_REQUEST, et.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
                r.config,
                r.request,
                r
              )
            );
      }
      eL.accessor([
        'Content-Type',
        'Content-Length',
        'Accept',
        'Accept-Encoding',
        'User-Agent',
        'Authorization',
      ]),
        ee.reduceDescriptors(eL.prototype, ({ value: e }, t) => {
          let r = t[0].toUpperCase() + t.slice(1);
          return {
            get: () => e,
            set(e) {
              this[r] = e;
            },
          };
        }),
        ee.freezeMethods(eL),
        ee.inherits(ek, et, { __CANCEL__: !0 });
      let eq = (e, t, r = 3) => {
          let n = 0,
            a = (function (e, t) {
              let r = Array((e = e || 10)),
                n = Array(e),
                a = 0,
                i = 0,
                o;
              return (
                (t = void 0 !== t ? t : 1e3),
                function (s) {
                  let l = Date.now(),
                    u = n[i];
                  o || (o = l), (r[a] = s), (n[a] = l);
                  let c = i,
                    d = 0;
                  for (; c !== a; ) (d += r[c++]), (c %= e);
                  if (((a = (a + 1) % e) === i && (i = (i + 1) % e), l - o < t)) return;
                  let f = u && l - u;
                  return f ? Math.round((1e3 * d) / f) : void 0;
                }
              );
            })(50, 250);
          return (function (e, t) {
            let r = 0,
              n = 1e3 / t,
              a,
              i,
              o = (t, n = Date.now()) => {
                (r = n), (a = null), i && (clearTimeout(i), (i = null)), e.apply(null, t);
              };
            return [
              (...e) => {
                let t = Date.now(),
                  s = t - r;
                s >= n
                  ? o(e, t)
                  : ((a = e),
                    i ||
                      (i = setTimeout(() => {
                        (i = null), o(a);
                      }, n - s)));
              },
              () => a && o(a),
            ];
          })((r) => {
            let i = r.loaded,
              o = r.lengthComputable ? r.total : void 0,
              s = i - n,
              l = a(s);
            (n = i),
              e({
                loaded: i,
                total: o,
                progress: o ? i / o : void 0,
                bytes: s,
                rate: l || void 0,
                estimated: l && o && i <= o ? (o - i) / l : void 0,
                event: r,
                lengthComputable: null != o,
                [t ? 'download' : 'upload']: !0,
              });
          }, r);
        },
        eI = (e, t) => {
          let r = null != e;
          return [(n) => t[0]({ lengthComputable: r, total: e, loaded: n }), t[1]];
        },
        eM =
          (e) =>
          (...t) =>
            ee.asap(() => e(...t)),
        ez = eR.hasStandardBrowserEnv
          ? (function () {
              let e;
              let t = eR.navigator && /(msie|trident)/i.test(eR.navigator.userAgent),
                r = document.createElement('a');
              function n(e) {
                let n = e;
                return (
                  t && (r.setAttribute('href', n), (n = r.href)),
                  r.setAttribute('href', n),
                  {
                    href: r.href,
                    protocol: r.protocol ? r.protocol.replace(/:$/, '') : '',
                    host: r.host,
                    search: r.search ? r.search.replace(/^\?/, '') : '',
                    hash: r.hash ? r.hash.replace(/^#/, '') : '',
                    hostname: r.hostname,
                    port: r.port,
                    pathname: '/' === r.pathname.charAt(0) ? r.pathname : '/' + r.pathname,
                  }
                );
              }
              return (
                (e = n(window.location.href)),
                function (t) {
                  let r = ee.isString(t) ? n(t) : t;
                  return r.protocol === e.protocol && r.host === e.host;
                }
              );
            })()
          : function () {
              return !0;
            },
        eK = eR.hasStandardBrowserEnv
          ? {
              write(e, t, r, n, a, i) {
                let o = [e + '=' + encodeURIComponent(t)];
                ee.isNumber(r) && o.push('expires=' + new Date(r).toGMTString()),
                  ee.isString(n) && o.push('path=' + n),
                  ee.isString(a) && o.push('domain=' + a),
                  !0 === i && o.push('secure'),
                  (document.cookie = o.join('; '));
              },
              read(e) {
                let t = document.cookie.match(RegExp('(^|;\\s*)(' + e + ')=([^;]*)'));
                return t ? decodeURIComponent(t[3]) : null;
              },
              remove(e) {
                this.write(e, '', Date.now() - 864e5);
              },
            }
          : { write() {}, read: () => null, remove() {} };
      function eH(e, t) {
        return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
          ? t
            ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '')
            : e
          : t;
      }
      let e$ = (e) => (e instanceof eL ? { ...e } : e);
      function eJ(e, t) {
        t = t || {};
        let r = {};
        function n(e, t, r) {
          return ee.isPlainObject(e) && ee.isPlainObject(t)
            ? ee.merge.call({ caseless: r }, e, t)
            : ee.isPlainObject(t)
              ? ee.merge({}, t)
              : ee.isArray(t)
                ? t.slice()
                : t;
        }
        function a(e, t, r) {
          return ee.isUndefined(t) ? (ee.isUndefined(e) ? void 0 : n(void 0, e, r)) : n(e, t, r);
        }
        function i(e, t) {
          if (!ee.isUndefined(t)) return n(void 0, t);
        }
        function o(e, t) {
          return ee.isUndefined(t) ? (ee.isUndefined(e) ? void 0 : n(void 0, e)) : n(void 0, t);
        }
        function s(r, a, i) {
          return i in t ? n(r, a) : i in e ? n(void 0, r) : void 0;
        }
        let l = {
          url: i,
          method: i,
          data: i,
          baseURL: o,
          transformRequest: o,
          transformResponse: o,
          paramsSerializer: o,
          timeout: o,
          timeoutMessage: o,
          withCredentials: o,
          withXSRFToken: o,
          adapter: o,
          responseType: o,
          xsrfCookieName: o,
          xsrfHeaderName: o,
          onUploadProgress: o,
          onDownloadProgress: o,
          decompress: o,
          maxContentLength: o,
          maxBodyLength: o,
          beforeRedirect: o,
          transport: o,
          httpAgent: o,
          httpsAgent: o,
          cancelToken: o,
          socketPath: o,
          responseEncoding: o,
          validateStatus: s,
          headers: (e, t) => a(e$(e), e$(t), !0),
        };
        return (
          ee.forEach(Object.keys(Object.assign({}, e, t)), function (n) {
            let i = l[n] || a,
              o = i(e[n], t[n], n);
            (ee.isUndefined(o) && i !== s) || (r[n] = o);
          }),
          r
        );
      }
      let eV = (e) => {
          let t;
          let r = eJ({}, e),
            {
              data: n,
              withXSRFToken: a,
              xsrfHeaderName: i,
              xsrfCookieName: o,
              headers: s,
              auth: l,
            } = r;
          if (
            ((r.headers = s = eL.from(s)),
            (r.url = eh(eH(r.baseURL, r.url), e.params, e.paramsSerializer)),
            l &&
              s.set(
                'Authorization',
                'Basic ' +
                  btoa(
                    (l.username || '') +
                      ':' +
                      (l.password ? unescape(encodeURIComponent(l.password)) : '')
                  )
              ),
            ee.isFormData(n))
          ) {
            if (eR.hasStandardBrowserEnv || eR.hasStandardBrowserWebWorkerEnv)
              s.setContentType(void 0);
            else if (!1 !== (t = s.getContentType())) {
              let [e, ...r] = t
                ? t
                    .split(';')
                    .map((e) => e.trim())
                    .filter(Boolean)
                : [];
              s.setContentType([e || 'multipart/form-data', ...r].join('; '));
            }
          }
          if (
            eR.hasStandardBrowserEnv &&
            (a && ee.isFunction(a) && (a = a(r)), a || (!1 !== a && ez(r.url)))
          ) {
            let e = i && o && eK.read(o);
            e && s.set(i, e);
          }
          return r;
        },
        eW =
          'u' > typeof XMLHttpRequest &&
          function (e) {
            return new Promise(function (t, r) {
              let n = eV(e),
                a = n.data,
                i = eL.from(n.headers).normalize(),
                { responseType: o, onUploadProgress: s, onDownloadProgress: l } = n,
                u,
                c,
                d,
                f,
                h;
              function p() {
                f && f(),
                  h && h(),
                  n.cancelToken && n.cancelToken.unsubscribe(u),
                  n.signal && n.signal.removeEventListener('abort', u);
              }
              let m = new XMLHttpRequest();
              function g() {
                if (!m) return;
                let n = eL.from('getAllResponseHeaders' in m && m.getAllResponseHeaders());
                eB(
                  function (e) {
                    t(e), p();
                  },
                  function (e) {
                    r(e), p();
                  },
                  {
                    data: o && 'text' !== o && 'json' !== o ? m.response : m.responseText,
                    status: m.status,
                    statusText: m.statusText,
                    headers: n,
                    config: e,
                    request: m,
                  }
                ),
                  (m = null);
              }
              m.open(n.method.toUpperCase(), n.url, !0),
                (m.timeout = n.timeout),
                'onloadend' in m
                  ? (m.onloadend = g)
                  : (m.onreadystatechange = function () {
                      m &&
                        4 === m.readyState &&
                        (0 !== m.status ||
                          (m.responseURL && 0 === m.responseURL.indexOf('file:'))) &&
                        setTimeout(g);
                    }),
                (m.onabort = function () {
                  m && (r(new et('Request aborted', et.ECONNABORTED, e, m)), (m = null));
                }),
                (m.onerror = function () {
                  r(new et('Network Error', et.ERR_NETWORK, e, m)), (m = null);
                }),
                (m.ontimeout = function () {
                  let t = n.timeout
                      ? 'timeout of ' + n.timeout + 'ms exceeded'
                      : 'timeout exceeded',
                    a = n.transitional || em;
                  n.timeoutErrorMessage && (t = n.timeoutErrorMessage),
                    r(new et(t, a.clarifyTimeoutError ? et.ETIMEDOUT : et.ECONNABORTED, e, m)),
                    (m = null);
                }),
                void 0 === a && i.setContentType(null),
                'setRequestHeader' in m &&
                  ee.forEach(i.toJSON(), function (e, t) {
                    m.setRequestHeader(t, e);
                  }),
                ee.isUndefined(n.withCredentials) || (m.withCredentials = !!n.withCredentials),
                o && 'json' !== o && (m.responseType = n.responseType),
                l && (([d, h] = eq(l, !0)), m.addEventListener('progress', d)),
                s &&
                  m.upload &&
                  (([c, f] = eq(s)),
                  m.upload.addEventListener('progress', c),
                  m.upload.addEventListener('loadend', f)),
                (n.cancelToken || n.signal) &&
                  ((u = (t) => {
                    m && (r(!t || t.type ? new ek(null, e, m) : t), m.abort(), (m = null));
                  }),
                  n.cancelToken && n.cancelToken.subscribe(u),
                  n.signal && (n.signal.aborted ? u() : n.signal.addEventListener('abort', u)));
              let y = (function (e) {
                let t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                return (t && t[1]) || '';
              })(n.url);
              if (y && -1 === eR.protocols.indexOf(y)) {
                r(new et('Unsupported protocol ' + y + ':', et.ERR_BAD_REQUEST, e));
                return;
              }
              m.send(a || null);
            });
          },
        eQ = (e, t) => {
          let { length: r } = (e = e ? e.filter(Boolean) : []);
          if (t || r) {
            let r = new AbortController(),
              n,
              a = function (e) {
                if (!n) {
                  (n = !0), o();
                  let t = e instanceof Error ? e : this.reason;
                  r.abort(t instanceof et ? t : new ek(t instanceof Error ? t.message : t));
                }
              },
              i =
                t &&
                setTimeout(() => {
                  (i = null), a(new et(`timeout ${t} of ms exceeded`, et.ETIMEDOUT));
                }, t),
              o = () => {
                e &&
                  (i && clearTimeout(i),
                  (i = null),
                  e.forEach((e) => {
                    e.unsubscribe ? e.unsubscribe(a) : e.removeEventListener('abort', a);
                  }),
                  (e = null));
              };
            e.forEach((e) => e.addEventListener('abort', a));
            let { signal: s } = r;
            return (s.unsubscribe = () => ee.asap(o)), s;
          }
        },
        eG = function* (e, t) {
          let r = e.byteLength;
          if (r < t) {
            yield e;
            return;
          }
          let n = 0,
            a;
          for (; n < r; ) (a = n + t), yield e.slice(n, a), (n = a);
        },
        eX = async function* (e, t) {
          for await (let r of eY(e)) yield* eG(r, t);
        },
        eY = async function* (e) {
          if (e[Symbol.asyncIterator]) {
            yield* e;
            return;
          }
          let t = e.getReader();
          try {
            for (;;) {
              let { done: e, value: r } = await t.read();
              if (e) break;
              yield r;
            }
          } finally {
            await t.cancel();
          }
        },
        eZ = (e, t, r, n) => {
          let a = eX(e, t),
            i = 0,
            o,
            s = (e) => {
              o || ((o = !0), n && n(e));
            };
          return new ReadableStream(
            {
              async pull(e) {
                try {
                  let { done: t, value: n } = await a.next();
                  if (t) {
                    s(), e.close();
                    return;
                  }
                  let o = n.byteLength;
                  if (r) {
                    let e = (i += o);
                    r(e);
                  }
                  e.enqueue(new Uint8Array(n));
                } catch (e) {
                  throw (s(e), e);
                }
              },
              cancel: (e) => (s(e), a.return()),
            },
            { highWaterMark: 2 }
          );
        },
        e0 =
          'function' == typeof fetch &&
          'function' == typeof Request &&
          'function' == typeof Response,
        e1 = e0 && 'function' == typeof ReadableStream,
        e2 =
          e0 &&
          ('function' == typeof TextEncoder
            ? ((s = new TextEncoder()), (e) => s.encode(e))
            : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
        e4 = (e, ...t) => {
          try {
            return !!e(...t);
          } catch {
            return !1;
          }
        },
        e5 =
          e1 &&
          e4(() => {
            let e = !1,
              t = new Request(eR.origin, {
                body: new ReadableStream(),
                method: 'POST',
                get duplex() {
                  return (e = !0), 'half';
                },
              }).headers.has('Content-Type');
            return e && !t;
          }),
        e3 = e1 && e4(() => ee.isReadableStream(new Response('').body)),
        e6 = { stream: e3 && ((e) => e.body) };
      e0 &&
        ((c = new Response()),
        ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((e) => {
          e6[e] ||
            (e6[e] = ee.isFunction(c[e])
              ? (t) => t[e]()
              : (t, r) => {
                  throw new et(`Response type '${e}' is not supported`, et.ERR_NOT_SUPPORT, r);
                });
        }));
      let e8 = async (e) =>
          null == e
            ? 0
            : ee.isBlob(e)
              ? e.size
              : ee.isSpecCompliantForm(e)
                ? (await new Request(eR.origin, { method: 'POST', body: e }).arrayBuffer())
                    .byteLength
                : ee.isArrayBufferView(e) || ee.isArrayBuffer(e)
                  ? e.byteLength
                  : (ee.isURLSearchParams(e) && (e += ''), ee.isString(e))
                    ? (await e2(e)).byteLength
                    : void 0,
        e9 = async (e, t) => ee.toFiniteNumber(e.getContentLength()) ?? e8(t),
        e7 = {
          http: null,
          xhr: eW,
          fetch:
            e0 &&
            (async (e) => {
              let t,
                {
                  url: r,
                  method: n,
                  data: a,
                  signal: i,
                  cancelToken: o,
                  timeout: s,
                  onDownloadProgress: l,
                  onUploadProgress: u,
                  responseType: c,
                  headers: d,
                  withCredentials: f = 'same-origin',
                  fetchOptions: h,
                } = eV(e);
              c = c ? (c + '').toLowerCase() : 'text';
              let p = eQ([i, o && o.toAbortSignal()], s),
                m,
                g =
                  p &&
                  p.unsubscribe &&
                  (() => {
                    p.unsubscribe();
                  });
              try {
                if (u && e5 && 'get' !== n && 'head' !== n && 0 !== (t = await e9(d, a))) {
                  let e = new Request(r, { method: 'POST', body: a, duplex: 'half' }),
                    n;
                  if (
                    (ee.isFormData(a) && (n = e.headers.get('content-type')) && d.setContentType(n),
                    e.body)
                  ) {
                    let [r, n] = eI(t, eq(eM(u)));
                    a = eZ(e.body, 65536, r, n);
                  }
                }
                ee.isString(f) || (f = f ? 'include' : 'omit');
                let i = 'credentials' in Request.prototype;
                m = new Request(r, {
                  ...h,
                  signal: p,
                  method: n.toUpperCase(),
                  headers: d.normalize().toJSON(),
                  body: a,
                  duplex: 'half',
                  credentials: i ? f : void 0,
                });
                let o = await fetch(m),
                  s = e3 && ('stream' === c || 'response' === c);
                if (e3 && (l || (s && g))) {
                  let e = {};
                  ['status', 'statusText', 'headers'].forEach((t) => {
                    e[t] = o[t];
                  });
                  let t = ee.toFiniteNumber(o.headers.get('content-length')),
                    [r, n] = (l && eI(t, eq(eM(l), !0))) || [];
                  o = new Response(
                    eZ(o.body, 65536, r, () => {
                      n && n(), g && g();
                    }),
                    e
                  );
                }
                c = c || 'text';
                let y = await e6[ee.findKey(e6, c) || 'text'](o, e);
                return (
                  !s && g && g(),
                  await new Promise((t, r) => {
                    eB(t, r, {
                      data: y,
                      headers: eL.from(o.headers),
                      status: o.status,
                      statusText: o.statusText,
                      config: e,
                      request: m,
                    });
                  })
                );
              } catch (t) {
                throw (
                  (g && g(),
                  t && 'TypeError' === t.name && /fetch/i.test(t.message)
                    ? Object.assign(new et('Network Error', et.ERR_NETWORK, e, m), {
                        cause: t.cause || t,
                      })
                    : et.from(t, t && t.code, e, m))
                );
              }
            }),
        };
      ee.forEach(e7, (e, t) => {
        if (e) {
          try {
            Object.defineProperty(e, 'name', { value: t });
          } catch {}
          Object.defineProperty(e, 'adapterName', { value: t });
        }
      });
      let te = (e) => `- ${e}`,
        tt = (e) => ee.isFunction(e) || null === e || !1 === e,
        tr = (e) => {
          let t, r;
          let { length: n } = (e = ee.isArray(e) ? e : [e]),
            a = {};
          for (let i = 0; i < n; i++) {
            let n;
            if (((r = t = e[i]), !tt(t) && void 0 === (r = e7[(n = String(t)).toLowerCase()])))
              throw new et(`Unknown adapter '${n}'`);
            if (r) break;
            a[n || '#' + i] = r;
          }
          if (!r) {
            let e = Object.entries(a).map(
              ([e, t]) =>
                `adapter ${e} ` +
                (!1 === t ? 'is not supported by the environment' : 'is not available in the build')
            );
            throw new et(
              'There is no suitable adapter to dispatch the request ' +
                (n
                  ? e.length > 1
                    ? `since :
` +
                      e.map(te).join(`
`)
                    : ' ' + te(e[0])
                  : 'as no adapter specified'),
              'ERR_NOT_SUPPORT'
            );
          }
          return r;
        };
      function tn(e) {
        if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted))
          throw new ek(null, e);
      }
      function ta(e) {
        return (
          tn(e),
          (e.headers = eL.from(e.headers)),
          (e.data = eD.call(e, e.transformRequest)),
          -1 !== ['post', 'put', 'patch'].indexOf(e.method) &&
            e.headers.setContentType('application/x-www-form-urlencoded', !1),
          tr(e.adapter || eA.adapter)(e).then(
            function (t) {
              return (
                tn(e),
                (t.data = eD.call(e, e.transformResponse, t)),
                (t.headers = eL.from(t.headers)),
                t
              );
            },
            function (t) {
              return (
                eF(t) ||
                  (tn(e),
                  t &&
                    t.response &&
                    ((t.response.data = eD.call(e, e.transformResponse, t.response)),
                    (t.response.headers = eL.from(t.response.headers)))),
                Promise.reject(t)
              );
            }
          )
        );
      }
      let ti = '1.7.7',
        to = {};
      ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((e, t) => {
        to[e] = function (r) {
          return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
        };
      });
      let ts = {};
      to.transitional = function (e, t, r) {
        function n(e, t) {
          return '[Axios v' + ti + "] Transitional option '" + e + "'" + t + (r ? '. ' + r : '');
        }
        return (r, a, i) => {
          if (!1 === e)
            throw new et(n(a, ' has been removed' + (t ? ' in ' + t : '')), et.ERR_DEPRECATED);
          return (
            t &&
              !ts[a] &&
              ((ts[a] = !0),
              console.warn(
                n(a, ' has been deprecated since v' + t + ' and will be removed in the near future')
              )),
            !e || e(r, a, i)
          );
        };
      };
      let tl = {
          assertOptions: function (e, t, r) {
            if ('object' != typeof e)
              throw new et('options must be an object', et.ERR_BAD_OPTION_VALUE);
            let n = Object.keys(e),
              a = n.length;
            for (; a-- > 0; ) {
              let i = n[a],
                o = t[i];
              if (o) {
                let t = e[i],
                  r = void 0 === t || o(t, i, e);
                if (!0 !== r)
                  throw new et('option ' + i + ' must be ' + r, et.ERR_BAD_OPTION_VALUE);
                continue;
              }
              if (!0 !== r) throw new et('Unknown option ' + i, et.ERR_BAD_OPTION);
            }
          },
          validators: to,
        },
        tu = tl.validators,
        tc = class {
          constructor(e) {
            (this.defaults = e), (this.interceptors = { request: new ep(), response: new ep() });
          }
          async request(e, t) {
            try {
              return await this._request(e, t);
            } catch (e) {
              if (e instanceof Error) {
                let t;
                Error.captureStackTrace ? Error.captureStackTrace((t = {})) : (t = Error());
                let r = t.stack ? t.stack.replace(/^.+\n/, '') : '';
                try {
                  e.stack
                    ? r &&
                      !String(e.stack).endsWith(r.replace(/^.+\n.+\n/, '')) &&
                      (e.stack +=
                        `
` + r)
                    : (e.stack = r);
                } catch {}
              }
              throw e;
            }
          }
          _request(e, t) {
            'string' == typeof e ? ((t = t || {}).url = e) : (t = e || {});
            let { transitional: r, paramsSerializer: n, headers: a } = (t = eJ(this.defaults, t));
            void 0 !== r &&
              tl.assertOptions(
                r,
                {
                  silentJSONParsing: tu.transitional(tu.boolean),
                  forcedJSONParsing: tu.transitional(tu.boolean),
                  clarifyTimeoutError: tu.transitional(tu.boolean),
                },
                !1
              ),
              null != n &&
                (ee.isFunction(n)
                  ? (t.paramsSerializer = { serialize: n })
                  : tl.assertOptions(n, { encode: tu.function, serialize: tu.function }, !0)),
              (t.method = (t.method || this.defaults.method || 'get').toLowerCase());
            let i = a && ee.merge(a.common, a[t.method]);
            a &&
              ee.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], (e) => {
                delete a[e];
              }),
              (t.headers = eL.concat(i, a));
            let o = [],
              s = !0;
            this.interceptors.request.forEach(function (e) {
              ('function' == typeof e.runWhen && !1 === e.runWhen(t)) ||
                ((s = s && e.synchronous), o.unshift(e.fulfilled, e.rejected));
            });
            let l = [];
            this.interceptors.response.forEach(function (e) {
              l.push(e.fulfilled, e.rejected);
            });
            let u,
              c = 0,
              d;
            if (!s) {
              let e = [ta.bind(this), void 0];
              for (
                e.unshift.apply(e, o), e.push.apply(e, l), d = e.length, u = Promise.resolve(t);
                c < d;

              )
                u = u.then(e[c++], e[c++]);
              return u;
            }
            d = o.length;
            let f = t;
            for (c = 0; c < d; ) {
              let e = o[c++],
                t = o[c++];
              try {
                f = e(f);
              } catch (e) {
                t.call(this, e);
                break;
              }
            }
            try {
              u = ta.call(this, f);
            } catch (e) {
              return Promise.reject(e);
            }
            for (c = 0, d = l.length; c < d; ) u = u.then(l[c++], l[c++]);
            return u;
          }
          getUri(e) {
            return eh(eH((e = eJ(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer);
          }
        };
      ee.forEach(['delete', 'get', 'head', 'options'], function (e) {
        tc.prototype[e] = function (t, r) {
          return this.request(eJ(r || {}, { method: e, url: t, data: (r || {}).data }));
        };
      }),
        ee.forEach(['post', 'put', 'patch'], function (e) {
          function t(t) {
            return function (r, n, a) {
              return this.request(
                eJ(a || {}, {
                  method: e,
                  headers: t ? { 'Content-Type': 'multipart/form-data' } : {},
                  url: r,
                  data: n,
                })
              );
            };
          }
          (tc.prototype[e] = t()), (tc.prototype[e + 'Form'] = t(!0));
        });
      let td = class e {
          constructor(e) {
            let t;
            if ('function' != typeof e) throw TypeError('executor must be a function.');
            this.promise = new Promise(function (e) {
              t = e;
            });
            let r = this;
            this.promise.then((e) => {
              if (!r._listeners) return;
              let t = r._listeners.length;
              for (; t-- > 0; ) r._listeners[t](e);
              r._listeners = null;
            }),
              (this.promise.then = (e) => {
                let t;
                let n = new Promise((e) => {
                  r.subscribe(e), (t = e);
                }).then(e);
                return (
                  (n.cancel = function () {
                    r.unsubscribe(t);
                  }),
                  n
                );
              }),
              e(function (e, n, a) {
                r.reason || ((r.reason = new ek(e, n, a)), t(r.reason));
              });
          }
          throwIfRequested() {
            if (this.reason) throw this.reason;
          }
          subscribe(e) {
            if (this.reason) {
              e(this.reason);
              return;
            }
            this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
          }
          unsubscribe(e) {
            if (!this._listeners) return;
            let t = this._listeners.indexOf(e);
            -1 !== t && this._listeners.splice(t, 1);
          }
          toAbortSignal() {
            let e = new AbortController(),
              t = (t) => {
                e.abort(t);
              };
            return this.subscribe(t), (e.signal.unsubscribe = () => this.unsubscribe(t)), e.signal;
          }
          static source() {
            let t;
            return {
              token: new e(function (e) {
                t = e;
              }),
              cancel: t,
            };
          }
        },
        tf = {
          Continue: 100,
          SwitchingProtocols: 101,
          Processing: 102,
          EarlyHints: 103,
          Ok: 200,
          Created: 201,
          Accepted: 202,
          NonAuthoritativeInformation: 203,
          NoContent: 204,
          ResetContent: 205,
          PartialContent: 206,
          MultiStatus: 207,
          AlreadyReported: 208,
          ImUsed: 226,
          MultipleChoices: 300,
          MovedPermanently: 301,
          Found: 302,
          SeeOther: 303,
          NotModified: 304,
          UseProxy: 305,
          Unused: 306,
          TemporaryRedirect: 307,
          PermanentRedirect: 308,
          BadRequest: 400,
          Unauthorized: 401,
          PaymentRequired: 402,
          Forbidden: 403,
          NotFound: 404,
          MethodNotAllowed: 405,
          NotAcceptable: 406,
          ProxyAuthenticationRequired: 407,
          RequestTimeout: 408,
          Conflict: 409,
          Gone: 410,
          LengthRequired: 411,
          PreconditionFailed: 412,
          PayloadTooLarge: 413,
          UriTooLong: 414,
          UnsupportedMediaType: 415,
          RangeNotSatisfiable: 416,
          ExpectationFailed: 417,
          ImATeapot: 418,
          MisdirectedRequest: 421,
          UnprocessableEntity: 422,
          Locked: 423,
          FailedDependency: 424,
          TooEarly: 425,
          UpgradeRequired: 426,
          PreconditionRequired: 428,
          TooManyRequests: 429,
          RequestHeaderFieldsTooLarge: 431,
          UnavailableForLegalReasons: 451,
          InternalServerError: 500,
          NotImplemented: 501,
          BadGateway: 502,
          ServiceUnavailable: 503,
          GatewayTimeout: 504,
          HttpVersionNotSupported: 505,
          VariantAlsoNegotiates: 506,
          InsufficientStorage: 507,
          LoopDetected: 508,
          NotExtended: 510,
          NetworkAuthenticationRequired: 511,
        };
      Object.entries(tf).forEach(([e, t]) => {
        tf[t] = e;
      });
      let th = (function e(t) {
        let r = new tc(t),
          n = g(tc.prototype.request, r);
        return (
          ee.extend(n, tc.prototype, r, { allOwnKeys: !0 }),
          ee.extend(n, r, null, { allOwnKeys: !0 }),
          (n.create = function (r) {
            return e(eJ(t, r));
          }),
          n
        );
      })(eA);
      (th.Axios = tc),
        (th.CanceledError = ek),
        (th.CancelToken = td),
        (th.isCancel = eF),
        (th.VERSION = ti),
        (th.toFormData = el),
        (th.AxiosError = et),
        (th.Cancel = th.CanceledError),
        (th.all = function (e) {
          return Promise.all(e);
        }),
        (th.spread = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        }),
        (th.isAxiosError = function (e) {
          return ee.isObject(e) && !0 === e.isAxiosError;
        }),
        (th.mergeConfig = eJ),
        (th.AxiosHeaders = eL),
        (th.formToJSON = (e) => ev(ee.isHTMLForm(e) ? new FormData(e) : e)),
        (th.getAdapter = tr),
        (th.HttpStatusCode = tf),
        (th.default = th);
      let {
        Axios: tp,
        AxiosError: tm,
        CanceledError: tg,
        isCancel: ty,
        CancelToken: tb,
        VERSION: tw,
        all: tE,
        Cancel: tS,
        isAxiosError: tC,
        spread: tO,
        toFormData: tR,
        AxiosHeaders: tv,
        HttpStatusCode: tA,
        formToJSON: tT,
        getAdapter: tP,
        mergeConfig: t_,
      } = th;
      class tx extends Error {
        constructor(e) {
          super(e.join(', ')),
            m(this, 'errors'),
            (this.name = 'ValidationError'),
            (this.errors = e);
        }
      }
      class tU extends Error {
        constructor(e) {
          super('Address already registered.'),
            m(this, 'address'),
            (this.name = 'AddressInUseError'),
            (this.address = e);
        }
      }
      class tj extends Error {
        constructor(e) {
          super('Code already registered.'),
            m(this, 'code'),
            (this.name = 'CodeInUseError'),
            (this.code = e);
        }
      }
      class tN extends Error {
        constructor() {
          super('Invalid signature provided'), (this.name = 'InvalidSignatureError');
        }
      }
      class tL {
        constructor(e) {
          m(this, 'httpClient'),
            m(this, '_debug'),
            (this.httpClient = e.httpClient),
            (this._debug = e.debug);
        }
        async create(e, t, r, n) {
          var a;
          try {
            await this.httpClient.post({
              path: '/affiliates',
              postData: { address: e, name: t, code: t, signature: r, account_chain_id: n },
            });
          } catch (r) {
            if (r instanceof tm) {
              let n = null == (a = r.response) ? void 0 : a.data;
              if ('string' == typeof (null == n ? void 0 : n.message)) {
                let r = n.message.toLowerCase();
                throw 'invalid signature' == r
                  ? new tN()
                  : 'address in use' == r
                    ? new tU(e)
                    : 'code in use' == r
                      ? new tj(t)
                      : Error(r);
              }
              if ((null == n ? void 0 : n.message) instanceof Array) throw new tx(n.message);
            }
            throw r;
          }
        }
        async update(e, t, r, n) {
          var a;
          try {
            await this.httpClient.post({
              path: `/affiliates/${e}`,
              postData: { code: t, address: e, signature: r, account_chain_id: n },
            });
          } catch (r) {
            if (r instanceof tm) {
              let n = null == (a = r.response) ? void 0 : a.data;
              if ('string' == typeof (null == n ? void 0 : n.message)) {
                let r = n.message.toLowerCase();
                throw 'invalid signature' == r
                  ? new tN()
                  : 'address in use' == r
                    ? new tU(e)
                    : 'code in use' == r
                      ? new tj(t)
                      : Error(r);
              }
              if ((null == n ? void 0 : n.message) instanceof Array) throw new tx(n.message);
            }
            throw r;
          }
        }
        async isCodeFree(e) {
          var t;
          try {
            return await this.httpClient.get({ path: `/affiliates/codes/${e}` }), !1;
          } catch (e) {
            if (e instanceof tm && (null == (t = e.response) ? void 0 : t.status) === 404)
              return !0;
            throw (console.error('Fuul SDK: Could not check affiliate code', e), e);
          }
        }
        async getCode(e) {
          var t;
          try {
            return (await this.httpClient.get({ path: `/affiliates/${e}` })).data.code;
          } catch (e) {
            if (e instanceof tm && (null == (t = e.response) ? void 0 : t.status) === 404)
              return null;
            throw (console.error('Fuul SDK: Could not get affiliate code', e), e);
          }
        }
      }
      class tD {
        constructor(e) {
          m(this, 'httpClient'),
            m(this, '_debug'),
            (this.httpClient = e.httpClient),
            (this._debug = e.debug);
        }
        async getUserAudiences(e) {
          return (await this.httpClient.get({ path: '/audiences/user', queryParams: { ...e } }))
            .data;
        }
      }
      class tF {
        constructor(e) {
          m(this, 'httpClient'), (this.httpClient = e.httpClient);
        }
        async getAll(e) {
          let { data: t } = await this.httpClient.get({
            path: 'conversions',
            queryParams: { ...e },
          });
          return t;
        }
      }
      let tk = 'fuul.sent';
      class tB {
        constructor(e) {
          m(this, 'debug'),
            m(this, 'httpClient'),
            (this.httpClient = e.httpClient),
            (this.debug = !!e.debug);
        }
        async sendEvent(e, t) {
          if (this.isDuplicate(e)) {
            this.debug &&
              console.debug('Fuul SDK: Event is considered duplicate and will not be sent');
            return;
          }
          if (t && Array.isArray(t) && 0 !== t.length)
            for (let r of t) {
              let t = structuredClone({ ...e, project_id: r });
              (t.metadata.project_id = r),
                await this.httpClient.post({
                  path: 'events',
                  postData: t,
                  queryParams: { project_id: r },
                });
            }
          else await this.httpClient.post({ path: 'events', postData: e });
          this.debug && console.debug(`Fuul SDK: Sent '${e.name}' event`), this.saveSentEvent(e);
        }
        isDuplicate(e) {
          let t = `${tk}_${e.name}`,
            r = localStorage.getItem(t);
          if (!r) return !1;
          let n = JSON.parse(r);
          if (this.getCurrentTimestamp() - n.timestamp > 60) return !1;
          let a = !1;
          e.metadata &&
            (a =
              n.metadata.tracking_id === e.metadata.tracking_id &&
              n.metadata.project_id === e.metadata.project_id &&
              n.metadata.referrer === e.metadata.referrer &&
              n.metadata.source === e.metadata.source &&
              n.metadata.category === e.metadata.category &&
              n.metadata.title === e.metadata.title &&
              n.metadata.tag === e.metadata.tag &&
              n.user_address === e.user_address &&
              n.signature === e.signature &&
              n.signature_message === e.signature_message);
          let i = !1;
          return e.args && n.args && (i = n.args.page === e.args.page), i && a;
        }
        getCurrentTimestamp() {
          return Date.now() / 1e3;
        }
        saveSentEvent(e) {
          let t = `${tk}_${e.name}`,
            r = this.getCurrentTimestamp(),
            n = { ...e, timestamp: r };
          localStorage.setItem(t, JSON.stringify(n));
        }
      }
      class tq {
        constructor(e) {
          m(this, 'client'),
            m(this, 'defaultQueryParams'),
            (this.client = th.create({
              ...e,
              headers: { Authorization: `Bearer ${e.apiKey}`, 'X-Fuul-Sdk-Version': '4.12.2' },
            })),
            (this.defaultQueryParams = e.queryParams || {});
        }
        makeQueryParams(e) {
          return Object.assign({}, this.defaultQueryParams || {}, e || {});
        }
        async get(e) {
          return this.client.request({
            url: e.path,
            params: this.makeQueryParams(e.queryParams),
            method: 'GET',
          });
        }
        async post(e) {
          return this.client.request({
            url: e.path,
            params: this.makeQueryParams(e.queryParams),
            data: e.postData,
            method: 'POST',
          });
        }
        async put(e) {
          return this.client.request({
            url: e.path,
            params: this.makeQueryParams(e.queryParams),
            data: e.postData,
            method: 'PUT',
          });
        }
        async delete(e) {
          return this.client.request({
            url: e.path,
            params: this.makeQueryParams(e.queryParams),
            method: 'DELETE',
          });
        }
      }
      class tI {
        constructor(e) {
          m(this, 'httpClient'), (this.httpClient = e.httpClient);
        }
        async getPayoutsLeaderboard(e) {
          return (
            await this.httpClient.get({
              path: '/payouts/leaderboard/payouts',
              queryParams: { ...e },
            })
          ).data;
        }
        async getPointsLeaderboard(e) {
          return (
            await this.httpClient.get({
              path: '/payouts/leaderboard/points',
              queryParams: { ...e },
            })
          ).data;
        }
        async getReferredUsersLeaderboard(e) {
          return (
            await this.httpClient.get({ path: '/leaderboard/referred', queryParams: { ...e } })
          ).data;
        }
      }
      let tM = '/payouts';
      class tz {
        constructor(e) {
          m(this, 'httpClient'),
            m(this, '_debug'),
            (this.httpClient = e.httpClient),
            (this._debug = e.debug);
        }
        async getUserPayoutsByConversion(e) {
          return (
            await this.httpClient.get({ path: tM, queryParams: { ...e, type: 'onchain-currency' } })
          ).data;
        }
        async getUserPointsByConversion(e) {
          return (await this.httpClient.get({ path: tM, queryParams: { ...e, type: 'point' } }))
            .data;
        }
        async getUserPayoutMovements(e) {
          return (
            await this.httpClient.get({
              path: `${tM}/movements`,
              queryParams: { ...e, type: 'onchain-currency' },
            })
          ).data;
        }
        async getUserPointsMovements(e) {
          return (
            await this.httpClient.get({
              path: `${tM}/movements`,
              queryParams: { ...e, type: 'point' },
            })
          ).data;
        }
        async getVolumeLeaderboard(e) {
          return (
            await this.httpClient.get({ path: `${tM}/leaderboard/volume`, queryParams: { ...e } })
          ).data;
        }
      }
      let tK = (e = 21) =>
          crypto
            .getRandomValues(new Uint8Array(e))
            .reduce(
              (e, t) => (
                (t &= 63) < 36
                  ? (e += t.toString(36))
                  : t < 62
                    ? (e += (t - 26).toString(36).toUpperCase())
                    : t > 62
                      ? (e += '-')
                      : (e += '_'),
                e
              ),
              ''
            ),
        tH = () => tX('fuul.tracking_id', () => tK()),
        t$ = () => tY('af') || tY('referrer'),
        tJ = () => document.referrer,
        tV = () => tZ(),
        tW = () => tY('category'),
        tQ = () => tY('title'),
        tG = () => tY('tag'),
        tX = (e, t) => {
          let r = localStorage.getItem(e);
          if (r) return r;
          {
            let r = t();
            return r ? localStorage.setItem(e, r) : localStorage.removeItem(e), r;
          }
        },
        tY = (e) => new URLSearchParams(window.location.search).get(e),
        tZ = () => {
          let e = tY('source');
          if (e) return e;
        };
      class t0 {
        constructor(e) {
          m(this, 'httpClient'), (this.httpClient = e.httpClient);
        }
        async getUserAffiliates(e) {
          return (await this.httpClient.get({ path: '/user', queryParams: { ...e } })).data
            .affiliates;
        }
      }
      let t1 = !1,
        t2 = !1,
        t4,
        t5,
        t3,
        t6,
        t8,
        t9,
        t7,
        re,
        rt;
      function rr() {
        if (!t2)
          throw Error(
            'Fuul SDK: You need to call init() to initialize the library before using any methods'
          );
      }
      function rn() {
        if (typeof window > 'u' || typeof document > 'u')
          throw Error('Fuul SDK: Browser context required');
      }
      function ra() {
        if (navigator.webdriver) throw Error('Fuul SDK: You are using a browser automation tool');
      }
      let ri = {
        init: function (e) {
          (t1 = !!e.debug),
            !t2 &&
              ((t4 = e.apiKey),
              (function () {
                if (!t4) throw Error('Fuul SDK: Invalid API key');
              })(),
              (t3 = new tF({
                httpClient: (t5 = new tq({
                  baseURL: e.baseApiUrl ?? 'https://api.fuul.xyz/api/v1/',
                  timeout: 3e4,
                  apiKey: t4,
                  queryParams: e.defaultQueryParams ?? {},
                })),
                debug: t1,
              })),
              (t9 = new tB({ httpClient: t5, debug: t1 })),
              (t8 = new tL({ httpClient: t5, debug: t1 })),
              (t7 = new tz({ httpClient: t5, debug: t1 })),
              (t6 = new t0({ httpClient: t5 })),
              (re = new tD({ httpClient: t5, debug: t1 })),
              (rt = new tI({ httpClient: t5 })),
              (t2 = !0),
              t1 && console.debug('Fuul SDK: init() complete'));
        },
        sendEvent: async function (e, t) {
          rr(), rn(), ra();
          let r = { name: e, args: t ?? {}, metadata: { tracking_id: tH() } };
          await t9.sendEvent(r);
        },
        sendPageview: async function (e, t) {
          rr(), rn(), ra();
          let r = {
            name: 'pageview',
            args: {
              page: e ?? document.location.pathname,
              locationOrigin: document.location.origin,
            },
            metadata: {
              tracking_id: tH(),
              referrer_url: tJ(),
              source: tV(),
              affiliate_id: t$() ?? void 0,
              referrer: t$() ?? void 0,
              category: tW() ?? void 0,
              title: tQ() ?? void 0,
              tag: tG() ?? void 0,
            },
          };
          await t9.sendEvent(r, t);
        },
        sendConnectWallet: async function (e, t) {
          rr(), rn(), ra();
          let r = {
            name: 'connect_wallet',
            args: { page: document.location.pathname, locationOrigin: document.location.origin },
            metadata: { tracking_id: tH() },
          };
          null != e && e.address && (r.user_address = e.address),
            null != e &&
              e.signature &&
              ((r.signature = null == e ? void 0 : e.signature),
              (r.signature_message = null == e ? void 0 : e.message)),
            null != e && e.accountChainId && (r.account_chain_id = e.accountChainId),
            await t9.sendEvent(r, t);
        },
        generateTrackingLink: async function (e, t, r) {
          rr();
          let n = new URLSearchParams({ af: (await t8.getCode(t)) ?? t });
          return (
            null != r && r.title && n.append('af_title', r.title),
            null != r && r.format && n.append('af_format', r.format),
            null != r && r.place && n.append('af_place', r.place),
            `${e}?${n.toString()}`
          );
        },
        getConversions: async function (e) {
          return rr(), t3.getAll(e);
        },
        createAffiliateCode: async function (e) {
          rr(), await t8.create(e.address, e.code, e.signature, e.accountChainId);
        },
        updateAffiliateCode: async function (e) {
          rr(), await t8.update(e.address, e.code, e.signature, e.accountChainId);
        },
        getAffiliateCode: async function (e) {
          return rr(), await t8.getCode(e);
        },
        isAffiliateCodeFree: async function (e) {
          return rr(), await t8.isCodeFree(e);
        },
        getPayoutsLeaderboard: function (e) {
          return rt.getPayoutsLeaderboard(e);
        },
        getPointsLeaderboard: function (e) {
          return rt.getPointsLeaderboard(e);
        },
        getReferredUsersLeaderboard: function (e) {
          return rt.getReferredUsersLeaderboard(e);
        },
        getUserAudiences: async function (e) {
          return rr(), re.getUserAudiences(e);
        },
        getUserPayoutsByConversion: function (e) {
          return t7.getUserPayoutsByConversion(e);
        },
        getUserPointsByConversion: function (e) {
          return t7.getUserPointsByConversion(e);
        },
        getUserPointsMovements: function (e) {
          return t7.getUserPointsMovements(e);
        },
        getUserPayoutMovements: function (e) {
          return t7.getUserPayoutMovements(e);
        },
        getUserAffiliates: async function (e) {
          return rr(), t6.getUserAffiliates(e);
        },
        getVolumeLeaderboard: function (e) {
          return t7.getVolumeLeaderboard(e);
        },
      };
    },
    85605: function (e, t, r) {
      r.d(t, {
        n: function () {
          return l;
        },
      });
      var n = r(28346),
        a = r(8152),
        i = r(1264),
        o = r(45793);
      async function s({ message: e, signature: t }) {
        return (0, o.R)({ hash: (0, i.r)(e), signature: t });
      }
      async function l({ address: e, message: t, signature: r }) {
        return (0, a.E)((0, n.K)(e), await s({ message: t, signature: r }));
      }
    },
  },
]);
