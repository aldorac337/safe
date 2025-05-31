'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6728],
  {
    40926: function (e, t, r) {
      function i() {
        return (
          (null === r.g || void 0 === r.g ? void 0 : r.g.crypto) ||
          (null === r.g || void 0 === r.g ? void 0 : r.g.msCrypto) ||
          {}
        );
      }
      function n() {
        const e = i();
        return e.subtle || e.webkitSubtle;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.isBrowserCryptoAvailable = t.getSubtleCrypto = t.getBrowerCrypto = void 0),
        (t.getBrowerCrypto = i),
        (t.getSubtleCrypto = n),
        (t.isBrowserCryptoAvailable = function () {
          return !!i() && !!n();
        });
    },
    88618: function (e, t, r) {
      var i = r(34155);
      function n() {
        return (
          'undefined' === typeof document &&
          'undefined' !== typeof navigator &&
          'ReactNative' === navigator.product
        );
      }
      function s() {
        return (
          'undefined' !== typeof i &&
          'undefined' !== typeof i.versions &&
          'undefined' !== typeof i.versions.node
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.isBrowser = t.isNode = t.isReactNative = void 0),
        (t.isReactNative = n),
        (t.isNode = s),
        (t.isBrowser = function () {
          return !n() && !s();
        });
    },
    1468: function (e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const i = r(34308);
      i.__exportStar(r(40926), t), i.__exportStar(r(88618), t);
    },
    34308: function (e, t, r) {
      r.r(t),
        r.d(t, {
          __assign: function () {
            return s;
          },
          __asyncDelegator: function () {
            return v;
          },
          __asyncGenerator: function () {
            return b;
          },
          __asyncValues: function () {
            return E;
          },
          __await: function () {
            return w;
          },
          __awaiter: function () {
            return l;
          },
          __classPrivateFieldGet: function () {
            return O;
          },
          __classPrivateFieldSet: function () {
            return _;
          },
          __createBinding: function () {
            return d;
          },
          __decorate: function () {
            return a;
          },
          __exportStar: function () {
            return p;
          },
          __extends: function () {
            return n;
          },
          __generator: function () {
            return u;
          },
          __importDefault: function () {
            return P;
          },
          __importStar: function () {
            return S;
          },
          __makeTemplateObject: function () {
            return I;
          },
          __metadata: function () {
            return h;
          },
          __param: function () {
            return c;
          },
          __read: function () {
            return g;
          },
          __rest: function () {
            return o;
          },
          __spread: function () {
            return y;
          },
          __spreadArrays: function () {
            return m;
          },
          __values: function () {
            return f;
          },
        });
      var i = function (e, t) {
        return (
          (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            }),
          i(e, t)
        );
      };
      function n(e, t) {
        function r() {
          this.constructor = e;
        }
        i(e, t),
          (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
      }
      var s = function () {
        return (
          (s =
            Object.assign ||
            function (e) {
              for (var t, r = 1, i = arguments.length; r < i; r++)
                for (var n in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }),
          s.apply(this, arguments)
        );
      };
      function o(e, t) {
        var r = {};
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
        if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
          var n = 0;
          for (i = Object.getOwnPropertySymbols(e); n < i.length; n++)
            t.indexOf(i[n]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, i[n]) &&
              (r[i[n]] = e[i[n]]);
        }
        return r;
      }
      function a(e, t, r, i) {
        var n,
          s = arguments.length,
          o = s < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, r)) : i;
        if ('object' === typeof Reflect && 'function' === typeof Reflect.decorate)
          o = Reflect.decorate(e, t, r, i);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
        return s > 3 && o && Object.defineProperty(t, r, o), o;
      }
      function c(e, t) {
        return function (r, i) {
          t(r, i, e);
        };
      }
      function h(e, t) {
        if ('object' === typeof Reflect && 'function' === typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function l(e, t, r, i) {
        return new (r || (r = Promise))(function (n, s) {
          function o(e) {
            try {
              c(i.next(e));
            } catch (t) {
              s(t);
            }
          }
          function a(e) {
            try {
              c(i.throw(e));
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
                    })).then(o, a);
          }
          c((i = i.apply(e, t || [])).next());
        });
      }
      function u(e, t) {
        var r,
          i,
          n,
          s,
          o = {
            label: 0,
            sent: function () {
              if (1 & n[0]) throw n[1];
              return n[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (s = { next: a(0), throw: a(1), return: a(2) }),
          'function' === typeof Symbol &&
            (s[Symbol.iterator] = function () {
              return this;
            }),
          s
        );
        function a(s) {
          return function (a) {
            return (function (s) {
              if (r) throw new TypeError('Generator is already executing.');
              for (; o; )
                try {
                  if (
                    ((r = 1),
                    i &&
                      (n =
                        2 & s[0]
                          ? i.return
                          : s[0]
                            ? i.throw || ((n = i.return) && n.call(i), 0)
                            : i.next) &&
                      !(n = n.call(i, s[1])).done)
                  )
                    return n;
                  switch (((i = 0), n && (s = [2 & s[0], n.value]), s[0])) {
                    case 0:
                    case 1:
                      n = s;
                      break;
                    case 4:
                      return o.label++, { value: s[1], done: !1 };
                    case 5:
                      o.label++, (i = s[1]), (s = [0]);
                      continue;
                    case 7:
                      (s = o.ops.pop()), o.trys.pop();
                      continue;
                    default:
                      if (
                        !(n = (n = o.trys).length > 0 && n[n.length - 1]) &&
                        (6 === s[0] || 2 === s[0])
                      ) {
                        o = 0;
                        continue;
                      }
                      if (3 === s[0] && (!n || (s[1] > n[0] && s[1] < n[3]))) {
                        o.label = s[1];
                        break;
                      }
                      if (6 === s[0] && o.label < n[1]) {
                        (o.label = n[1]), (n = s);
                        break;
                      }
                      if (n && o.label < n[2]) {
                        (o.label = n[2]), o.ops.push(s);
                        break;
                      }
                      n[2] && o.ops.pop(), o.trys.pop();
                      continue;
                  }
                  s = t.call(e, o);
                } catch (a) {
                  (s = [6, a]), (i = 0);
                } finally {
                  r = n = 0;
                }
              if (5 & s[0]) throw s[1];
              return { value: s[0] ? s[1] : void 0, done: !0 };
            })([s, a]);
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
        var t = 'function' === typeof Symbol && Symbol.iterator,
          r = t && e[t],
          i = 0;
        if (r) return r.call(e);
        if (e && 'number' === typeof e.length)
          return {
            next: function () {
              return e && i >= e.length && (e = void 0), { value: e && e[i++], done: !e };
            },
          };
        throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
      }
      function g(e, t) {
        var r = 'function' === typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var i,
          n,
          s = r.call(e),
          o = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(i = s.next()).done; ) o.push(i.value);
        } catch (a) {
          n = { error: a };
        } finally {
          try {
            i && !i.done && (r = s.return) && r.call(s);
          } finally {
            if (n) throw n.error;
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
        var i = Array(e),
          n = 0;
        for (t = 0; t < r; t++)
          for (var s = arguments[t], o = 0, a = s.length; o < a; o++, n++) i[n] = s[o];
        return i;
      }
      function w(e) {
        return this instanceof w ? ((this.v = e), this) : new w(e);
      }
      function b(e, t, r) {
        if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
        var i,
          n = r.apply(e, t || []),
          s = [];
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
          n[e] &&
            (i[e] = function (t) {
              return new Promise(function (r, i) {
                s.push([e, t, r, i]) > 1 || a(e, t);
              });
            });
        }
        function a(e, t) {
          try {
            (r = n[e](t)).value instanceof w
              ? Promise.resolve(r.value.v).then(c, h)
              : l(s[0][2], r);
          } catch (i) {
            l(s[0][3], i);
          }
          var r;
        }
        function c(e) {
          a('next', e);
        }
        function h(e) {
          a('throw', e);
        }
        function l(e, t) {
          e(t), s.shift(), s.length && a(s[0][0], s[0][1]);
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
        function i(i, n) {
          t[i] = e[i]
            ? function (t) {
                return (r = !r) ? { value: w(e[i](t)), done: 'return' === i } : n ? n(t) : t;
              }
            : n;
        }
      }
      function E(e) {
        if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
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
              return new Promise(function (i, n) {
                (function (e, t, r, i) {
                  Promise.resolve(i).then(function (t) {
                    e({ value: t, done: r });
                  }, t);
                })(i, n, (t = e[r](t)).done, t.value);
              });
            };
        }
      }
      function I(e, t) {
        return (
          Object.defineProperty ? Object.defineProperty(e, 'raw', { value: t }) : (e.raw = t), e
        );
      }
      function S(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      }
      function P(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function O(e, t) {
        if (!t.has(e)) throw new TypeError('attempted to get private field on non-instance');
        return t.get(e);
      }
      function _(e, t, r) {
        if (!t.has(e)) throw new TypeError('attempted to set private field on non-instance');
        return t.set(e, r), r;
      }
    },
    46728: function (e, t, r) {
      r.d(t, {
        k: function () {
          return lh;
        },
        Z: function () {
          return hh;
        },
      });
      var i = r(17187),
        n = r.n(i),
        s = r(66736);
      class o {}
      class a extends o {
        constructor(e) {
          super();
        }
      }
      const c = s.FIVE_SECONDS,
        h = 'heartbeat_pulse';
      class l extends a {
        constructor(e) {
          super(e),
            (this.events = new i.EventEmitter()),
            (this.interval = c),
            (this.interval = e?.interval || c);
        }
        static async init(e) {
          const t = new l(e);
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
          this.intervalRef = setInterval(() => this.pulse(), (0, s.toMiliseconds)(this.interval));
        }
        pulse() {
          this.events.emit(h);
        }
      }
      const u =
          /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
        d =
          /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
        p = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
      function f(e, t) {
        if (
          !(
            '__proto__' === e ||
            ('constructor' === e && t && 'object' === typeof t && 'prototype' in t)
          )
        )
          return t;
        !(function (e) {
          console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`);
        })(e);
      }
      function g(e, t = {}) {
        if ('string' !== typeof e) return e;
        const r = e.trim();
        if ('"' === e[0] && e.endsWith('"') && !e.includes('\\')) return r.slice(1, -1);
        if (r.length <= 9) {
          const e = r.toLowerCase();
          if ('true' === e) return !0;
          if ('false' === e) return !1;
          if ('undefined' === e) return;
          if ('null' === e) return null;
          if ('nan' === e) return Number.NaN;
          if ('infinity' === e) return Number.POSITIVE_INFINITY;
          if ('-infinity' === e) return Number.NEGATIVE_INFINITY;
        }
        if (!p.test(e)) {
          if (t.strict) throw new SyntaxError('[destr] Invalid JSON');
          return e;
        }
        try {
          if (u.test(e) || d.test(e)) {
            if (t.strict) throw new Error('[destr] Possible prototype pollution');
            return JSON.parse(e, f);
          }
          return JSON.parse(e);
        } catch (i) {
          if (t.strict) throw i;
          return e;
        }
      }
      var y = r(48764).Buffer;
      function m(e, ...t) {
        try {
          return (r = e(...t)) && 'function' === typeof r.then ? r : Promise.resolve(r);
        } catch (i) {
          return Promise.reject(i);
        }
        var r;
      }
      function w(e) {
        if (
          (function (e) {
            const t = typeof e;
            return null === e || ('object' !== t && 'function' !== t);
          })(e)
        )
          return String(e);
        if (
          (function (e) {
            const t = Object.getPrototypeOf(e);
            return !t || t.isPrototypeOf(Object);
          })(e) ||
          Array.isArray(e)
        )
          return JSON.stringify(e);
        if ('function' === typeof e.toJSON) return w(e.toJSON());
        throw new Error('[unstorage] Cannot stringify value!');
      }
      function b() {
        if ('undefined' === typeof y) throw new TypeError('[unstorage] Buffer is not supported!');
      }
      const v = 'base64:';
      function E(e) {
        return e
          ? e.split('?')[0].replace(/[/\\]/g, ':').replace(/:+/g, ':').replace(/^:|:$/g, '')
          : '';
      }
      function I(...e) {
        return E(e.join(':'));
      }
      function S(e) {
        return (e = E(e)) ? e + ':' : '';
      }
      const P = () => {
        const e = new Map();
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
      function O(e = {}) {
        const t = {
            mounts: { '': e.driver || P() },
            mountpoints: [''],
            watching: !1,
            watchListeners: [],
            unwatch: {},
          },
          r = (e) => {
            for (const r of t.mountpoints)
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
          n = (e, r) => {
            if (t.watching) {
              r = E(r);
              for (const i of t.watchListeners) i(e, r);
            }
          },
          s = async () => {
            if (t.watching) {
              for (const e in t.unwatch) await t.unwatch[e]();
              (t.unwatch = {}), (t.watching = !1);
            }
          },
          o = (e, t, i) => {
            const n = new Map(),
              s = (e) => {
                let t = n.get(e.base);
                return (
                  t || ((t = { driver: e.driver, base: e.base, items: [] }), n.set(e.base, t)), t
                );
              };
            for (const o of e) {
              const e = 'string' === typeof o,
                i = E(e ? o : o.key),
                n = e ? void 0 : o.value,
                a = e || !o.options ? t : { ...t, ...o.options },
                c = r(i);
              s(c).items.push({ key: i, value: n, relativeKey: c.relativeKey, options: a });
            }
            return Promise.all([...n.values()].map((e) => i(e))).then((e) => e.flat());
          },
          a = {
            hasItem(e, t = {}) {
              e = E(e);
              const { relativeKey: i, driver: n } = r(e);
              return m(n.hasItem, i, t);
            },
            getItem(e, t = {}) {
              e = E(e);
              const { relativeKey: i, driver: n } = r(e);
              return m(n.getItem, i, t).then((e) => g(e));
            },
            getItems: (e, t) =>
              o(e, t, (e) =>
                e.driver.getItems
                  ? m(
                      e.driver.getItems,
                      e.items.map((e) => ({ key: e.relativeKey, options: e.options })),
                      t
                    ).then((t) => t.map((t) => ({ key: I(e.base, t.key), value: g(t.value) })))
                  : Promise.all(
                      e.items.map((t) =>
                        m(e.driver.getItem, t.relativeKey, t.options).then((e) => ({
                          key: t.key,
                          value: g(e),
                        }))
                      )
                    )
              ),
            getItemRaw(e, t = {}) {
              e = E(e);
              const { relativeKey: i, driver: n } = r(e);
              return n.getItemRaw
                ? m(n.getItemRaw, i, t)
                : m(n.getItem, i, t).then((e) =>
                    (function (e) {
                      return 'string' !== typeof e
                        ? e
                        : e.startsWith(v)
                          ? (b(), y.from(e.slice(v.length), 'base64'))
                          : e;
                    })(e)
                  );
            },
            async setItem(e, t, i = {}) {
              if (void 0 === t) return a.removeItem(e);
              e = E(e);
              const { relativeKey: s, driver: o } = r(e);
              o.setItem && (await m(o.setItem, s, w(t), i), o.watch || n('update', e));
            },
            async setItems(e, t) {
              await o(e, t, async (e) => {
                if (e.driver.setItems)
                  return m(
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
                    e.items.map((t) => m(e.driver.setItem, t.relativeKey, w(t.value), t.options))
                  ));
              });
            },
            async setItemRaw(e, t, i = {}) {
              if (void 0 === t) return a.removeItem(e, i);
              e = E(e);
              const { relativeKey: s, driver: o } = r(e);
              if (o.setItemRaw) await m(o.setItemRaw, s, t, i);
              else {
                if (!o.setItem) return;
                await m(
                  o.setItem,
                  s,
                  (function (e) {
                    if ('string' === typeof e) return e;
                    b();
                    const t = y.from(e).toString('base64');
                    return v + t;
                  })(t),
                  i
                );
              }
              o.watch || n('update', e);
            },
            async removeItem(e, t = {}) {
              'boolean' === typeof t && (t = { removeMeta: t }), (e = E(e));
              const { relativeKey: i, driver: s } = r(e);
              s.removeItem &&
                (await m(s.removeItem, i, t),
                (t.removeMeta || t.removeMata) && (await m(s.removeItem, i + '$', t)),
                s.watch || n('remove', e));
            },
            async getMeta(e, t = {}) {
              'boolean' === typeof t && (t = { nativeOnly: t }), (e = E(e));
              const { relativeKey: i, driver: n } = r(e),
                s = Object.create(null);
              if ((n.getMeta && Object.assign(s, await m(n.getMeta, i, t)), !t.nativeOnly)) {
                const e = await m(n.getItem, i + '$', t).then((e) => g(e));
                e &&
                  'object' === typeof e &&
                  ('string' === typeof e.atime && (e.atime = new Date(e.atime)),
                  'string' === typeof e.mtime && (e.mtime = new Date(e.mtime)),
                  Object.assign(s, e));
              }
              return s;
            },
            setMeta(e, t, r = {}) {
              return this.setItem(e + '$', t, r);
            },
            removeMeta(e, t = {}) {
              return this.removeItem(e + '$', t);
            },
            async getKeys(e, t = {}) {
              e = S(e);
              const r = i(e, !0);
              let n = [];
              const s = [];
              for (const i of r) {
                const e = await m(i.driver.getKeys, i.relativeBase, t);
                for (const t of e) {
                  const e = i.mountpoint + E(t);
                  n.some((t) => e.startsWith(t)) || s.push(e);
                }
                n = [i.mountpoint, ...n.filter((e) => !e.startsWith(i.mountpoint))];
              }
              return e
                ? s.filter((t) => t.startsWith(e) && '$' !== t[t.length - 1])
                : s.filter((e) => '$' !== e[e.length - 1]);
            },
            async clear(e, t = {}) {
              (e = S(e)),
                await Promise.all(
                  i(e, !1).map(async (e) => {
                    if (e.driver.clear) return m(e.driver.clear, e.relativeBase, t);
                    if (e.driver.removeItem) {
                      const r = await e.driver.getKeys(e.relativeBase || '', t);
                      return Promise.all(r.map((r) => e.driver.removeItem(r, t)));
                    }
                  })
                );
            },
            async dispose() {
              await Promise.all(Object.values(t.mounts).map((e) => x(e)));
            },
            watch: async (e) => (
              await (async () => {
                if (!t.watching) {
                  t.watching = !0;
                  for (const e in t.mounts) t.unwatch[e] = await _(t.mounts[e], n, e);
                }
              })(),
              t.watchListeners.push(e),
              async () => {
                (t.watchListeners = t.watchListeners.filter((t) => t !== e)),
                  0 === t.watchListeners.length && (await s());
              }
            ),
            async unwatch() {
              (t.watchListeners = []), await s();
            },
            mount(e, r) {
              if ((e = S(e)) && t.mounts[e]) throw new Error(`already mounted at ${e}`);
              return (
                e && (t.mountpoints.push(e), t.mountpoints.sort((e, t) => t.length - e.length)),
                (t.mounts[e] = r),
                t.watching &&
                  Promise.resolve(_(r, n, e))
                    .then((r) => {
                      t.unwatch[e] = r;
                    })
                    .catch(console.error),
                a
              );
            },
            async unmount(e, r = !0) {
              (e = S(e)) &&
                t.mounts[e] &&
                (t.watching && e in t.unwatch && (t.unwatch[e](), delete t.unwatch[e]),
                r && (await x(t.mounts[e])),
                (t.mountpoints = t.mountpoints.filter((t) => t !== e)),
                delete t.mounts[e]);
            },
            getMount(e = '') {
              e = E(e) + ':';
              const t = r(e);
              return { driver: t.driver, base: t.base };
            },
            getMounts(e = '', t = {}) {
              e = E(e);
              return i(e, t.parents).map((e) => ({ driver: e.driver, base: e.mountpoint }));
            },
            keys: (e, t = {}) => a.getKeys(e, t),
            get: (e, t = {}) => a.getItem(e, t),
            set: (e, t, r = {}) => a.setItem(e, t, r),
            has: (e, t = {}) => a.hasItem(e, t),
            del: (e, t = {}) => a.removeItem(e, t),
            remove: (e, t = {}) => a.removeItem(e, t),
          };
        return a;
      }
      function _(e, t, r) {
        return e.watch ? e.watch((e, i) => t(e, r + i)) : () => {};
      }
      async function x(e) {
        'function' === typeof e.dispose && (await m(e.dispose));
      }
      function A(e) {
        return new Promise((t, r) => {
          (e.oncomplete = e.onsuccess = () => t(e.result)),
            (e.onabort = e.onerror = () => r(e.error));
        });
      }
      function T(e, t) {
        const r = indexedDB.open(e);
        r.onupgradeneeded = () => r.result.createObjectStore(t);
        const i = A(r);
        return (e, r) => i.then((i) => r(i.transaction(t, e).objectStore(t)));
      }
      let N;
      function C() {
        return N || (N = T('keyval-store', 'keyval')), N;
      }
      function R(e, t = C()) {
        return t('readonly', (t) => A(t.get(e)));
      }
      function k(e, t) {
        return (
          (e.openCursor().onsuccess = function () {
            this.result && (t(this.result), this.result.continue());
          }),
          A(e.transaction)
        );
      }
      var j = r(85094);
      var D = (e = {}) => {
        const t = e.base && e.base.length > 0 ? `${e.base}:` : '',
          r = (e) => t + e;
        let i;
        return (
          e.dbName && e.storeName && (i = T(e.dbName, e.storeName)),
          {
            name: 'idb-keyval',
            options: e,
            hasItem: async (e) => !(typeof (await R(r(e), i)) > 'u'),
            getItem: async (e) => (await R(r(e), i)) ?? null,
            setItem: (e, t) =>
              (function (e, t, r = C()) {
                return r('readwrite', (r) => (r.put(t, e), A(r.transaction)));
              })(r(e), t, i),
            removeItem: (e) =>
              (function (e, t = C()) {
                return t('readwrite', (t) => (t.delete(e), A(t.transaction)));
              })(r(e), i),
            getKeys: () =>
              (function (e = C()) {
                return e('readonly', (e) => {
                  if (e.getAllKeys) return A(e.getAllKeys());
                  const t = [];
                  return k(e, (e) => t.push(e.key)).then(() => t);
                });
              })(i),
            clear: () =>
              (function (e = C()) {
                return e('readwrite', (e) => (e.clear(), A(e.transaction)));
              })(i),
          }
        );
      };
      class L {
        constructor() {
          this.indexedDb = O({
            driver: D({ dbName: 'WALLET_CONNECT_V2_INDEXED_DB', storeName: 'keyvaluestorage' }),
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
          const t = await this.indexedDb.getItem(e);
          if (null !== t) return t;
        }
        async setItem(e, t) {
          await this.indexedDb.setItem(e, (0, j.u)(t));
        }
        async removeItem(e) {
          await this.indexedDb.removeItem(e);
        }
      }
      var q =
          typeof globalThis < 'u'
            ? globalThis
            : typeof window < 'u'
              ? window
              : typeof r.g < 'u'
                ? r.g
                : typeof self < 'u'
                  ? self
                  : {},
        U = { exports: {} };
      function B(e) {
        var t;
        return [e[0], (0, j.D)(null != (t = e[1]) ? t : '')];
      }
      !(function () {
        let e;
        function t() {}
        (e = t),
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
            const e = this;
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
          typeof q < 'u' && q.localStorage
            ? (U.exports = q.localStorage)
            : typeof window < 'u' && window.localStorage
              ? (U.exports = window.localStorage)
              : (U.exports = new t());
      })();
      class $ {
        constructor() {
          this.localStorage = U.exports;
        }
        async getKeys() {
          return Object.keys(this.localStorage);
        }
        async getEntries() {
          return Object.entries(this.localStorage).map(B);
        }
        async getItem(e) {
          const t = this.localStorage.getItem(e);
          if (null !== t) return (0, j.D)(t);
        }
        async setItem(e, t) {
          this.localStorage.setItem(e, (0, j.u)(t));
        }
        async removeItem(e) {
          this.localStorage.removeItem(e);
        }
      }
      const M = async (e, t) => {
        t.length &&
          t.forEach(async (t) => {
            await e.removeItem(t);
          });
      };
      class z {
        constructor() {
          (this.initialized = !1),
            (this.setInitialized = (e) => {
              (this.storage = e), (this.initialized = !0);
            });
          const e = new $();
          this.storage = e;
          try {
            (async (e, t, r) => {
              const i = 'wc_storage_version',
                n = await t.getItem(i);
              if (n && n >= 1) return void r(t);
              const s = await e.getKeys();
              if (!s.length) return void r(t);
              const o = [];
              for (; s.length; ) {
                const r = s.shift();
                if (!r) continue;
                const i = r.toLowerCase();
                if (
                  i.includes('wc@') ||
                  i.includes('walletconnect') ||
                  i.includes('wc_') ||
                  i.includes('wallet_connect')
                ) {
                  const i = await e.getItem(r);
                  await t.setItem(r, i), o.push(r);
                }
              }
              await t.setItem(i, 1), r(t), M(e, o);
            })(e, new L(), this.setInitialized);
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
              const t = setInterval(() => {
                this.initialized && (clearInterval(t), e());
              }, 20);
            }));
        }
      }
      var H = r(36559),
        V = r.n(H);
      const K = 'info',
        F = 'custom_context';
      class W {
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
      class G {
        constructor(e) {
          (this.head = null),
            (this.tail = null),
            (this.lengthInNodes = 0),
            (this.maxSizeInBytes = e),
            (this.sizeInBytes = 0);
        }
        append(e) {
          const t = new W(e);
          if (t.size > this.maxSizeInBytes)
            throw new Error(
              `[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`
            );
          for (; this.size + t.size > this.maxSizeInBytes; ) this.shift();
          this.head
            ? (this.tail && (this.tail.next = t), (this.tail = t))
            : ((this.head = t), (this.tail = t)),
            this.lengthInNodes++,
            (this.sizeInBytes += t.size);
        }
        shift() {
          if (!this.head) return;
          const e = this.head;
          (this.head = this.head.next),
            this.head || (this.tail = null),
            this.lengthInNodes--,
            (this.sizeInBytes -= e.size);
        }
        toArray() {
          const e = [];
          let t = this.head;
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
              const t = e.value;
              return (e = e.next), { done: !1, value: t };
            },
          };
        }
      }
      class Y {
        constructor(e, t = 1024e3) {
          (this.level = e ?? 'error'),
            (this.levelValue = H.levels.values[this.level]),
            (this.MAX_LOG_SIZE_IN_BYTES = t),
            (this.logs = new G(this.MAX_LOG_SIZE_IN_BYTES));
        }
        forwardToConsole(e, t) {
          t === H.levels.values.error
            ? console.error(e)
            : t === H.levels.values.warn
              ? console.warn(e)
              : t === H.levels.values.debug
                ? console.debug(e)
                : t === H.levels.values.trace
                  ? console.trace(e)
                  : console.log(e);
        }
        appendToLogs(e) {
          this.logs.append((0, j.u)({ timestamp: new Date().toISOString(), log: e }));
          const t = 'string' == typeof e ? JSON.parse(e).level : e.level;
          t >= this.levelValue && this.forwardToConsole(e, t);
        }
        getLogs() {
          return this.logs;
        }
        clearLogs() {
          this.logs = new G(this.MAX_LOG_SIZE_IN_BYTES);
        }
        getLogArray() {
          return Array.from(this.logs);
        }
        logsToBlob(e) {
          const t = this.getLogArray();
          return t.push((0, j.u)({ extraMetadata: e })), new Blob(t, { type: 'application/json' });
        }
      }
      class J {
        constructor(e, t = 1024e3) {
          this.baseChunkLogger = new Y(e, t);
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
          const t = URL.createObjectURL(this.logsToBlob(e)),
            r = document.createElement('a');
          (r.href = t),
            (r.download = `walletconnect-logs-${new Date().toISOString()}.txt`),
            document.body.appendChild(r),
            r.click(),
            document.body.removeChild(r),
            URL.revokeObjectURL(t);
        }
      }
      class Z {
        constructor(e, t = 1024e3) {
          this.baseChunkLogger = new Y(e, t);
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
      var Q = Object.defineProperty,
        X = Object.defineProperties,
        ee = Object.getOwnPropertyDescriptors,
        te = Object.getOwnPropertySymbols,
        re = Object.prototype.hasOwnProperty,
        ie = Object.prototype.propertyIsEnumerable,
        ne = (e, t, r) =>
          t in e
            ? Q(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        se = (e, t) => {
          for (var r in t || (t = {})) re.call(t, r) && ne(e, r, t[r]);
          if (te) for (var r of te(t)) ie.call(t, r) && ne(e, r, t[r]);
          return e;
        },
        oe = (e, t) => X(e, ee(t));
      function ae(e) {
        return oe(se({}, e), { level: e?.level || K });
      }
      function ce(e, t = F) {
        let r = '';
        return (
          (r =
            typeof e.bindings > 'u'
              ? (function (e, t = F) {
                  return e[t] || '';
                })(e, t)
              : e.bindings().context || ''),
          r
        );
      }
      function he(e, t, r = F) {
        const i = (function (e, t, r = F) {
          const i = ce(e, r);
          return i.trim() ? `${i}/${t}` : t;
        })(e, t, r);
        return (function (e, t, r = F) {
          return (e[r] = t), e;
        })(e.child({ context: i }), i, r);
      }
      function le(e) {
        return typeof e.loggerOverride < 'u' && 'string' != typeof e.loggerOverride
          ? { logger: e.loggerOverride, chunkLoggerController: null }
          : typeof window < 'u'
            ? (function (e) {
                var t, r;
                const i = new J(null == (t = e.opts) ? void 0 : t.level, e.maxSizeInBytes);
                return {
                  logger: V()(
                    oe(se({}, e.opts), {
                      level: 'trace',
                      browser: oe(se({}, null == (r = e.opts) ? void 0 : r.browser), {
                        write: (e) => i.write(e),
                      }),
                    })
                  ),
                  chunkLoggerController: i,
                };
              })(e)
            : (function (e) {
                var t;
                const r = new Z(null == (t = e.opts) ? void 0 : t.level, e.maxSizeInBytes);
                return {
                  logger: V()(oe(se({}, e.opts), { level: 'trace' }), r),
                  chunkLoggerController: r,
                };
              })(e);
      }
      var ue = Object.defineProperty,
        de = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? ue(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class pe extends o {
        constructor(e) {
          super(), (this.opts = e), de(this, 'protocol', 'wc'), de(this, 'version', 2);
        }
      }
      var fe = Object.defineProperty,
        ge = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? fe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class ye extends o {
        constructor(e, t) {
          super(), (this.core = e), (this.logger = t), ge(this, 'records', new Map());
        }
      }
      class me extends o {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class we extends o {
        constructor(e) {
          super();
        }
      }
      Object.defineProperty;
      class be extends o {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class ve extends o {
        constructor(e, t) {
          super(), (this.core = e), (this.logger = t);
        }
      }
      Object.defineProperty;
      var Ee = r(49392),
        Ie = r(39639),
        Se = r(97883);
      function Pe(e, t, r, i) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: i },
        };
      }
      const Oe = Pe(
          'utf8',
          'u',
          (e) => 'u' + new TextDecoder('utf8').decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        _e = Pe(
          'ascii',
          'a',
          (e) => {
            let t = 'a';
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t;
          },
          (e) => {
            const t = (function (e = 0) {
              return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe
                ? globalThis.Buffer.allocUnsafe(e)
                : new Uint8Array(e);
            })((e = e.substring(1)).length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          }
        );
      var xe = {
        utf8: Oe,
        'utf-8': Oe,
        hex: Se.bases.base16,
        latin1: _e,
        ascii: _e,
        binary: _e,
        ...Se.bases,
      };
      const Ae = 'INTERNAL_ERROR',
        Te = 'SERVER_ERROR',
        Ne = [-32700, -32600, -32601, -32602, -32603],
        Ce = {
          PARSE_ERROR: { code: -32700, message: 'Parse error' },
          INVALID_REQUEST: { code: -32600, message: 'Invalid Request' },
          METHOD_NOT_FOUND: { code: -32601, message: 'Method not found' },
          INVALID_PARAMS: { code: -32602, message: 'Invalid params' },
          [Ae]: { code: -32603, message: 'Internal error' },
          [Te]: { code: -32e3, message: 'Server error' },
        };
      function Re(e) {
        return Ne.includes(e);
      }
      function ke(e) {
        return Object.keys(Ce).includes(e) ? Ce[e] : Ce.SERVER_ERROR;
      }
      function je(e) {
        const t = Object.values(Ce).find((t) => t.code === e);
        return t || Ce.SERVER_ERROR;
      }
      function De(e, t, r) {
        return e.message.includes('getaddrinfo ENOTFOUND') ||
          e.message.includes('connect ECONNREFUSED')
          ? new Error(`Unavailable ${r} RPC url at ${t}`)
          : e;
      }
      var Le = r(1468);
      function qe(e = 3) {
        return Date.now() * Math.pow(10, e) + Math.floor(Math.random() * Math.pow(10, e));
      }
      function Ue(e = 6) {
        return BigInt(qe(e));
      }
      function Be(e, t, r) {
        return { id: r || qe(), jsonrpc: '2.0', method: e, params: t };
      }
      function $e(e, t) {
        return { id: e, jsonrpc: '2.0', result: t };
      }
      function Me(e, t, r) {
        return { id: e, jsonrpc: '2.0', error: ze(t, r) };
      }
      function ze(e, t) {
        return 'undefined' === typeof e
          ? ke(Ae)
          : ('string' === typeof e &&
              (e = Object.assign(Object.assign({}, ke(Te)), { message: e })),
            'undefined' !== typeof t && (e.data = t),
            Re(e.code) && (e = je(e.code)),
            e);
      }
      class He {}
      class Ve extends He {
        constructor() {
          super();
        }
      }
      class Ke extends Ve {
        constructor(e) {
          super();
        }
      }
      function Fe(e, t) {
        const r = (function (e) {
          const t = e.match(new RegExp(/^\w+:/, 'gi'));
          if (t && t.length) return t[0];
        })(e);
        return 'undefined' !== typeof r && new RegExp(t).test(r);
      }
      function We(e) {
        return Fe(e, '^https?:');
      }
      function Ge(e) {
        return Fe(e, '^wss?:');
      }
      function Ye(e) {
        return 'object' === typeof e && 'id' in e && 'jsonrpc' in e && '2.0' === e.jsonrpc;
      }
      function Je(e) {
        return Ye(e) && 'method' in e;
      }
      function Ze(e) {
        return Ye(e) && (Qe(e) || Xe(e));
      }
      function Qe(e) {
        return 'result' in e;
      }
      function Xe(e) {
        return 'error' in e;
      }
      class et extends Ke {
        constructor(e) {
          super(e),
            (this.events = new i.EventEmitter()),
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
          return this.requestStrict(Be(e.method, e.params || [], e.id || Ue().toString()), t);
        }
        async requestStrict(e, t) {
          return new Promise(async (r, i) => {
            if (!this.connection.connected)
              try {
                await this.open();
              } catch (n) {
                i(n);
              }
            this.events.on(`${e.id}`, (e) => {
              Xe(e) ? i(e.error) : r(e.result);
            });
            try {
              await this.connection.send(e, t);
            } catch (n) {
              i(n);
            }
          });
        }
        setConnection(e = this.connection) {
          return e;
        }
        onPayload(e) {
          this.events.emit('payload', e),
            Ze(e)
              ? this.events.emit(`${e.id}`, e)
              : this.events.emit('message', { type: e.method, data: e.params });
        }
        onClose(e) {
          e &&
            3e3 === e.code &&
            this.events.emit(
              'error',
              new Error(
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
      const tt = (e) => e.split('?')[0],
        rt =
          typeof WebSocket < 'u'
            ? WebSocket
            : typeof r.g < 'u' && typeof r.g.WebSocket < 'u'
              ? r.g.WebSocket
              : typeof window < 'u' && typeof window.WebSocket < 'u'
                ? window.WebSocket
                : typeof self < 'u' && typeof self.WebSocket < 'u'
                  ? self.WebSocket
                  : r(72030);
      class it {
        constructor(e) {
          if (
            ((this.url = e), (this.events = new i.EventEmitter()), (this.registering = !1), !Ge(e))
          )
            throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
          this.url = e;
        }
        get connected() {
          return typeof this.socket < 'u';
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
            typeof this.socket > 'u'
              ? t(new Error('Connection already closed'))
              : ((this.socket.onclose = (t) => {
                  this.onClose(t), e();
                }),
                this.socket.close());
          });
        }
        async send(e) {
          typeof this.socket > 'u' && (this.socket = await this.register());
          try {
            this.socket.send((0, j.u)(e));
          } catch (t) {
            this.onError(e.id, t);
          }
        }
        register(e = this.url) {
          if (!Ge(e))
            throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
          if (this.registering) {
            const e = this.events.getMaxListeners();
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
                      return t(new Error('WebSocket connection is missing or invalid'));
                    e(this.socket);
                  });
              })
            );
          }
          return (
            (this.url = e),
            (this.registering = !0),
            new Promise((t, i) => {
              const n = (0, Le.isReactNative)()
                  ? void 0
                  : {
                      rejectUnauthorized:
                        ((o = e), !new RegExp('wss?://localhost(:d{2,5})?').test(o)),
                    },
                s = new rt(e, [], n);
              var o;
              typeof WebSocket < 'u' ||
              (typeof r.g < 'u' && typeof r.g.WebSocket < 'u') ||
              (typeof window < 'u' && typeof window.WebSocket < 'u') ||
              (typeof self < 'u' && typeof self.WebSocket < 'u')
                ? (s.onerror = (e) => {
                    const t = e;
                    i(this.emitError(t.error));
                  })
                : s.on('error', (e) => {
                    i(this.emitError(e));
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
          const t = 'string' == typeof e.data ? (0, j.D)(e.data) : e.data;
          this.events.emit('payload', t);
        }
        onError(e, t) {
          const r = this.parseError(t),
            i = Me(e, r.message || r.toString());
          this.events.emit('payload', i);
        }
        parseError(e, t = this.url) {
          return De(e, tt(t), 'WS');
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
        emitError(e) {
          const t = this.parseError(
            new Error(e?.message || `WebSocket connection failed for host: ${tt(this.url)}`)
          );
          return this.events.emit('register_error', t), t;
        }
      }
      var nt = r(62873),
        st = r(48764).Buffer,
        ot = r(34155);
      const at = 'core',
        ct = 'wc@2:core:',
        ht = 'error',
        lt = { database: ':memory:' },
        ut = 'client_ed25519_seed',
        dt = s.ONE_DAY,
        pt = s.SIX_HOURS,
        ft = 'wss://relay.walletconnect.org',
        gt = 'relayer_message',
        yt = 'relayer_message_ack',
        mt = 'relayer_connect',
        wt = 'relayer_disconnect',
        bt = 'relayer_error',
        vt = 'relayer_connection_stalled',
        Et = 'relayer_publish',
        It = 'payload',
        St = 'connect',
        Pt = 'disconnect',
        Ot = 'error',
        _t = '2.19.2',
        xt = { link_mode: 'link_mode', relay: 'relay' },
        At = 'inbound',
        Tt = 'outbound',
        Nt = 'WALLETCONNECT_LINK_MODE_APPS',
        Ct = 'subscription_created',
        Rt = 'subscription_deleted',
        kt = 'subscription_sync',
        jt = 'subscription_resubscribed',
        Dt =
          (s.FIVE_SECONDS,
          {
            wc_pairingDelete: {
              req: { ttl: s.ONE_DAY, prompt: !1, tag: 1e3 },
              res: { ttl: s.ONE_DAY, prompt: !1, tag: 1001 },
            },
            wc_pairingPing: {
              req: { ttl: s.THIRTY_SECONDS, prompt: !1, tag: 1002 },
              res: { ttl: s.THIRTY_SECONDS, prompt: !1, tag: 1003 },
            },
            unregistered_method: {
              req: { ttl: s.ONE_DAY, prompt: !1, tag: 0 },
              res: { ttl: s.ONE_DAY, prompt: !1, tag: 0 },
            },
          }),
        Lt = 'pairing_create',
        qt = 'pairing_expire',
        Ut = 'pairing_delete',
        Bt = 'pairing_ping',
        $t = 'history_created',
        Mt = 'history_updated',
        zt = 'history_deleted',
        Ht = 'history_sync',
        Vt = 'expirer_created',
        Kt = 'expirer_deleted',
        Ft = 'expirer_expired',
        Wt = 'expirer_sync',
        Gt = 'https://verify.walletconnect.org',
        Yt = Gt,
        Jt = `${Yt}/v3`,
        Zt = ['https://verify.walletconnect.com', Gt],
        Qt = 'pairing_started',
        Xt = 'pairing_uri_validation_success',
        er = 'pairing_uri_not_expired',
        tr = 'store_new_pairing',
        rr = 'subscribing_pairing_topic',
        ir = 'subscribe_pairing_topic_success',
        nr = 'existing_pairing',
        sr = 'pairing_not_expired',
        or = 'emit_inactive_pairing',
        ar = 'emit_session_proposal',
        cr = 'no_internet_connection',
        hr = 'malformed_pairing_uri',
        lr = 'active_pairing_already_exists',
        ur = 'subscribe_pairing_topic_failure',
        dr = 'pairing_expired',
        pr = 'proposal_listener_not_found',
        fr = 'session_approve_started',
        gr = 'session_namespaces_validation_success',
        yr = 'subscribing_session_topic',
        mr = 'subscribe_session_topic_success',
        wr = 'publishing_session_approve',
        br = 'session_approve_publish_success',
        vr = 'store_session',
        Er = 'publishing_session_settle',
        Ir = 'session_settle_publish_success',
        Sr = 'no_internet_connection',
        Pr = 'proposal_expired',
        Or = 'subscribe_session_topic_failure',
        _r = 'session_approve_publish_failure',
        xr = 'session_settle_publish_failure',
        Ar = 'session_approve_namespace_validation_failure',
        Tr = 'proposal_not_found',
        Nr = 'authenticated_session_approve_started',
        Cr = 'create_authenticated_session_topic',
        Rr = 'cacaos_verified',
        kr = 'store_authenticated_session',
        jr = 'subscribing_authenticated_session_topic',
        Dr = 'subscribe_authenticated_session_topic_success',
        Lr = 'publishing_authenticated_session_approve',
        qr = 'no_internet_connection',
        Ur = 'invalid_cacao',
        Br = 'subscribe_authenticated_session_topic_failure',
        $r = 'authenticated_session_approve_publish_failure',
        Mr = 'authenticated_session_pending_request_not_found';
      var zr = function (e, t) {
          if (e.length >= 255) throw new TypeError('Alphabet too long');
          for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
          for (var n = 0; n < e.length; n++) {
            var s = e.charAt(n),
              o = s.charCodeAt(0);
            if (255 !== r[o]) throw new TypeError(s + ' is ambiguous');
            r[o] = n;
          }
          var a = e.length,
            c = e.charAt(0),
            h = Math.log(a) / Math.log(256),
            l = Math.log(256) / Math.log(a);
          function u(e) {
            if ('string' != typeof e) throw new TypeError('Expected String');
            if (0 === e.length) return new Uint8Array();
            var t = 0;
            if (' ' !== e[t]) {
              for (var i = 0, n = 0; e[t] === c; ) i++, t++;
              for (var s = ((e.length - t) * h + 1) >>> 0, o = new Uint8Array(s); e[t]; ) {
                var l = r[e.charCodeAt(t)];
                if (255 === l) return;
                for (var u = 0, d = s - 1; (0 !== l || u < n) && -1 !== d; d--, u++)
                  (l += (a * o[d]) >>> 0), (o[d] = l % 256 >>> 0), (l = (l / 256) >>> 0);
                if (0 !== l) throw new Error('Non-zero carry');
                (n = u), t++;
              }
              if (' ' !== e[t]) {
                for (var p = s - n; p !== s && 0 === o[p]; ) p++;
                for (var f = new Uint8Array(i + (s - p)), g = i; p !== s; ) f[g++] = o[p++];
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
                throw new TypeError('Expected Uint8Array');
              if (0 === t.length) return '';
              for (var r = 0, i = 0, n = 0, s = t.length; n !== s && 0 === t[n]; ) n++, r++;
              for (var o = ((s - n) * l + 1) >>> 0, h = new Uint8Array(o); n !== s; ) {
                for (var u = t[n], d = 0, p = o - 1; (0 !== u || d < i) && -1 !== p; p--, d++)
                  (u += (256 * h[p]) >>> 0), (h[p] = u % a >>> 0), (u = (u / a) >>> 0);
                if (0 !== u) throw new Error('Non-zero carry');
                (i = d), n++;
              }
              for (var f = o - i; f !== o && 0 === h[f]; ) f++;
              for (var g = c.repeat(r); f < o; ++f) g += e.charAt(h[f]);
              return g;
            },
            decodeUnsafe: u,
            decode: function (e) {
              var r = u(e);
              if (r) return r;
              throw new Error(`Non-${t} character`);
            },
          };
        },
        Hr = zr;
      const Vr = (e) => {
        if (e instanceof Uint8Array && 'Uint8Array' === e.constructor.name) return e;
        if (e instanceof ArrayBuffer) return new Uint8Array(e);
        if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
        throw new Error('Unknown type, must be binary type');
      };
      class Kr {
        constructor(e, t, r) {
          (this.name = e), (this.prefix = t), (this.baseEncode = r);
        }
        encode(e) {
          if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
          throw Error('Unknown type, must be binary type');
        }
      }
      class Fr {
        constructor(e, t, r) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw new Error('Invalid prefix character');
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
          return Gr(this, e);
        }
      }
      class Wr {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return Gr(this, e);
        }
        decode(e) {
          const t = e[0],
            r = this.decoders[t];
          if (r) return r.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`
          );
        }
      }
      const Gr = (e, t) =>
        new Wr({ ...(e.decoders || { [e.prefix]: e }), ...(t.decoders || { [t.prefix]: t }) });
      class Yr {
        constructor(e, t, r, i) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = r),
            (this.baseDecode = i),
            (this.encoder = new Kr(e, t, r)),
            (this.decoder = new Fr(e, t, i));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      const Jr = ({ name: e, prefix: t, encode: r, decode: i }) => new Yr(e, t, r, i),
        Zr = ({ prefix: e, name: t, alphabet: r }) => {
          const { encode: i, decode: n } = Hr(r, t);
          return Jr({ prefix: e, name: t, encode: i, decode: (e) => Vr(n(e)) });
        },
        Qr = ({ name: e, prefix: t, bitsPerChar: r, alphabet: i }) =>
          Jr({
            prefix: t,
            name: e,
            encode: (e) =>
              ((e, t, r) => {
                const i = '=' === t[t.length - 1],
                  n = (1 << r) - 1;
                let s = '',
                  o = 0,
                  a = 0;
                for (let c = 0; c < e.length; ++c)
                  for (a = (a << 8) | e[c], o += 8; o > r; ) (o -= r), (s += t[n & (a >> o)]);
                if ((o && (s += t[n & (a << (r - o))]), i)) for (; (s.length * r) & 7; ) s += '=';
                return s;
              })(e, i, r),
            decode: (t) =>
              ((e, t, r, i) => {
                const n = {};
                for (let l = 0; l < t.length; ++l) n[t[l]] = l;
                let s = e.length;
                for (; '=' === e[s - 1]; ) --s;
                const o = new Uint8Array(((s * r) / 8) | 0);
                let a = 0,
                  c = 0,
                  h = 0;
                for (let l = 0; l < s; ++l) {
                  const t = n[e[l]];
                  if (void 0 === t) throw new SyntaxError(`Non-${i} character`);
                  (c = (c << r) | t), (a += r), a >= 8 && ((a -= 8), (o[h++] = 255 & (c >> a)));
                }
                if (a >= r || 255 & (c << (8 - a))) throw new SyntaxError('Unexpected end of data');
                return o;
              })(t, i, r, e),
          }),
        Xr = Jr({
          prefix: '\0',
          name: 'identity',
          encode: (e) => ((e) => new TextDecoder().decode(e))(e),
          decode: (e) => ((e) => new TextEncoder().encode(e))(e),
        });
      var ei = Object.freeze({ __proto__: null, identity: Xr });
      const ti = Qr({ prefix: '0', name: 'base2', alphabet: '01', bitsPerChar: 1 });
      var ri = Object.freeze({ __proto__: null, base2: ti });
      const ii = Qr({ prefix: '7', name: 'base8', alphabet: '01234567', bitsPerChar: 3 });
      var ni = Object.freeze({ __proto__: null, base8: ii });
      const si = Zr({ prefix: '9', name: 'base10', alphabet: '0123456789' });
      var oi = Object.freeze({ __proto__: null, base10: si });
      const ai = Qr({ prefix: 'f', name: 'base16', alphabet: '0123456789abcdef', bitsPerChar: 4 }),
        ci = Qr({ prefix: 'F', name: 'base16upper', alphabet: '0123456789ABCDEF', bitsPerChar: 4 });
      var hi = Object.freeze({ __proto__: null, base16: ai, base16upper: ci });
      const li = Qr({
          prefix: 'b',
          name: 'base32',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567',
          bitsPerChar: 5,
        }),
        ui = Qr({
          prefix: 'B',
          name: 'base32upper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
          bitsPerChar: 5,
        }),
        di = Qr({
          prefix: 'c',
          name: 'base32pad',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567=',
          bitsPerChar: 5,
        }),
        pi = Qr({
          prefix: 'C',
          name: 'base32padupper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=',
          bitsPerChar: 5,
        }),
        fi = Qr({
          prefix: 'v',
          name: 'base32hex',
          alphabet: '0123456789abcdefghijklmnopqrstuv',
          bitsPerChar: 5,
        }),
        gi = Qr({
          prefix: 'V',
          name: 'base32hexupper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV',
          bitsPerChar: 5,
        }),
        yi = Qr({
          prefix: 't',
          name: 'base32hexpad',
          alphabet: '0123456789abcdefghijklmnopqrstuv=',
          bitsPerChar: 5,
        }),
        mi = Qr({
          prefix: 'T',
          name: 'base32hexpadupper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV=',
          bitsPerChar: 5,
        }),
        wi = Qr({
          prefix: 'h',
          name: 'base32z',
          alphabet: 'ybndrfg8ejkmcpqxot1uwisza345h769',
          bitsPerChar: 5,
        });
      var bi = Object.freeze({
        __proto__: null,
        base32: li,
        base32upper: ui,
        base32pad: di,
        base32padupper: pi,
        base32hex: fi,
        base32hexupper: gi,
        base32hexpad: yi,
        base32hexpadupper: mi,
        base32z: wi,
      });
      const vi = Zr({
          prefix: 'k',
          name: 'base36',
          alphabet: '0123456789abcdefghijklmnopqrstuvwxyz',
        }),
        Ei = Zr({
          prefix: 'K',
          name: 'base36upper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        });
      var Ii = Object.freeze({ __proto__: null, base36: vi, base36upper: Ei });
      const Si = Zr({
          name: 'base58btc',
          prefix: 'z',
          alphabet: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
        }),
        Pi = Zr({
          name: 'base58flickr',
          prefix: 'Z',
          alphabet: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ',
        });
      var Oi = Object.freeze({ __proto__: null, base58btc: Si, base58flickr: Pi });
      const _i = Qr({
          prefix: 'm',
          name: 'base64',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          bitsPerChar: 6,
        }),
        xi = Qr({
          prefix: 'M',
          name: 'base64pad',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
          bitsPerChar: 6,
        }),
        Ai = Qr({
          prefix: 'u',
          name: 'base64url',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
          bitsPerChar: 6,
        }),
        Ti = Qr({
          prefix: 'U',
          name: 'base64urlpad',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=',
          bitsPerChar: 6,
        });
      var Ni = Object.freeze({
        __proto__: null,
        base64: _i,
        base64pad: xi,
        base64url: Ai,
        base64urlpad: Ti,
      });
      const Ci = Array.from(
          '\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42'
        ),
        Ri = Ci.reduce((e, t, r) => ((e[r] = t), e), []),
        ki = Ci.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []);
      const ji = Jr({
        prefix: '\ud83d\ude80',
        name: 'base256emoji',
        encode: function (e) {
          return e.reduce((e, t) => (e += Ri[t]), '');
        },
        decode: function (e) {
          const t = [];
          for (const r of e) {
            const e = ki[r.codePointAt(0)];
            if (void 0 === e) throw new Error(`Non-base256emoji character: ${r}`);
            t.push(e);
          }
          return new Uint8Array(t);
        },
      });
      var Di = Object.freeze({ __proto__: null, base256emoji: ji }),
        Li = function e(t, r, i) {
          r = r || [];
          for (var n = (i = i || 0); t >= qi; ) (r[i++] = (255 & t) | 128), (t /= 128);
          for (; -128 & t; ) (r[i++] = (255 & t) | 128), (t >>>= 7);
          return (r[i] = 0 | t), (e.bytes = i - n + 1), r;
        },
        qi = Math.pow(2, 31);
      var Ui = function e(t, r) {
        var i,
          n = 0,
          s = 0,
          o = (r = r || 0),
          a = t.length;
        do {
          if (o >= a) throw ((e.bytes = 0), new RangeError('Could not decode varint'));
          (i = t[o++]), (n += s < 28 ? (127 & i) << s : (127 & i) * Math.pow(2, s)), (s += 7);
        } while (i >= 128);
        return (e.bytes = o - r), n;
      };
      var Bi = Math.pow(2, 7),
        $i = Math.pow(2, 14),
        Mi = Math.pow(2, 21),
        zi = Math.pow(2, 28),
        Hi = Math.pow(2, 35),
        Vi = Math.pow(2, 42),
        Ki = Math.pow(2, 49),
        Fi = Math.pow(2, 56),
        Wi = Math.pow(2, 63),
        Gi = {
          encode: Li,
          decode: Ui,
          encodingLength: function (e) {
            return e < Bi
              ? 1
              : e < $i
                ? 2
                : e < Mi
                  ? 3
                  : e < zi
                    ? 4
                    : e < Hi
                      ? 5
                      : e < Vi
                        ? 6
                        : e < Ki
                          ? 7
                          : e < Fi
                            ? 8
                            : e < Wi
                              ? 9
                              : 10;
          },
        },
        Yi = Gi;
      const Ji = (e, t, r = 0) => (Yi.encode(e, t, r), t),
        Zi = (e) => Yi.encodingLength(e),
        Qi = (e, t) => {
          const r = t.byteLength,
            i = Zi(e),
            n = i + Zi(r),
            s = new Uint8Array(n + r);
          return Ji(e, s, 0), Ji(r, s, i), s.set(t, n), new Xi(e, r, t, s);
        };
      class Xi {
        constructor(e, t, r, i) {
          (this.code = e), (this.size = t), (this.digest = r), (this.bytes = i);
        }
      }
      const en = ({ name: e, code: t, encode: r }) => new tn(e, t, r);
      class tn {
        constructor(e, t, r) {
          (this.name = e), (this.code = t), (this.encode = r);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            const t = this.encode(e);
            return t instanceof Uint8Array ? Qi(this.code, t) : t.then((e) => Qi(this.code, e));
          }
          throw Error('Unknown type, must be binary type');
        }
      }
      const rn = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t)),
        nn = en({ name: 'sha2-256', code: 18, encode: rn('SHA-256') }),
        sn = en({ name: 'sha2-512', code: 19, encode: rn('SHA-512') });
      Object.freeze({ __proto__: null, sha256: nn, sha512: sn });
      const on = Vr,
        an = { code: 0, name: 'identity', encode: on, digest: (e) => Qi(0, on(e)) };
      Object.freeze({ __proto__: null, identity: an });
      new TextEncoder(), new TextDecoder();
      const cn = { ...ei, ...ri, ...ni, ...oi, ...hi, ...bi, ...Ii, ...Oi, ...Ni, ...Di };
      function hn(e, t, r, i) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: i },
        };
      }
      const ln = hn(
          'utf8',
          'u',
          (e) => 'u' + new TextDecoder('utf8').decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        un = hn(
          'ascii',
          'a',
          (e) => {
            let t = 'a';
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t;
          },
          (e) => {
            const t = (function (e = 0) {
              return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe
                ? globalThis.Buffer.allocUnsafe(e)
                : new Uint8Array(e);
            })((e = e.substring(1)).length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          }
        ),
        dn = { utf8: ln, 'utf-8': ln, hex: cn.base16, latin1: un, ascii: un, binary: un, ...cn };
      var pn = Object.defineProperty,
        fn = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? pn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class gn {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            fn(this, 'keychain', new Map()),
            fn(this, 'name', 'keychain'),
            fn(this, 'version', '0.3'),
            fn(this, 'initialized', !1),
            fn(this, 'storagePrefix', ct),
            fn(this, 'init', async () => {
              if (!this.initialized) {
                const e = await this.getKeyChain();
                typeof e < 'u' && (this.keychain = e), (this.initialized = !0);
              }
            }),
            fn(this, 'has', (e) => (this.isInitialized(), this.keychain.has(e))),
            fn(this, 'set', async (e, t) => {
              this.isInitialized(), this.keychain.set(e, t), await this.persist();
            }),
            fn(this, 'get', (e) => {
              this.isInitialized();
              const t = this.keychain.get(e);
              if (typeof t > 'u') {
                const { message: t } = (0, Ie.kCb)('NO_MATCHING_KEY', `${this.name}: ${e}`);
                throw new Error(t);
              }
              return t;
            }),
            fn(this, 'del', async (e) => {
              this.isInitialized(), this.keychain.delete(e), await this.persist();
            }),
            (this.core = e),
            (this.logger = he(t, this.name));
        }
        get context() {
          return ce(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix + this.version + this.core.customStoragePrefix + '//' + this.name
          );
        }
        async setKeyChain(e) {
          await this.core.storage.setItem(this.storageKey, (0, Ie.KCv)(e));
        }
        async getKeyChain() {
          const e = await this.core.storage.getItem(this.storageKey);
          return typeof e < 'u' ? (0, Ie.IPd)(e) : void 0;
        }
        async persist() {
          await this.setKeyChain(this.keychain);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = (0, Ie.kCb)('NOT_INITIALIZED', this.name);
            throw new Error(e);
          }
        }
      }
      var yn = Object.defineProperty,
        mn = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? yn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class wn {
        constructor(e, t, r) {
          (this.core = e),
            (this.logger = t),
            mn(this, 'name', 'crypto'),
            mn(this, 'keychain'),
            mn(this, 'randomSessionIdentifier', (0, Ie.jdp)()),
            mn(this, 'initialized', !1),
            mn(this, 'init', async () => {
              this.initialized || (await this.keychain.init(), (this.initialized = !0));
            }),
            mn(this, 'hasKeys', (e) => (this.isInitialized(), this.keychain.has(e))),
            mn(this, 'getClientId', async () => {
              this.isInitialized();
              const e = await this.getClientSeed(),
                t = Ee.Au(e);
              return Ee.bG(t.publicKey);
            }),
            mn(this, 'generateKeyPair', () => {
              this.isInitialized();
              const e = (0, Ie.Au2)();
              return this.setPrivateKey(e.publicKey, e.privateKey);
            }),
            mn(this, 'signJWT', async (e) => {
              this.isInitialized();
              const t = await this.getClientSeed(),
                r = Ee.Au(t),
                i = this.randomSessionIdentifier,
                n = dt;
              return await Ee.vf(i, e, n, r);
            }),
            mn(this, 'generateSharedKey', (e, t, r) => {
              this.isInitialized();
              const i = this.getPrivateKey(e),
                n = (0, Ie.m$A)(i, t);
              return this.setSymKey(n, r);
            }),
            mn(this, 'setSymKey', async (e, t) => {
              this.isInitialized();
              const r = t || (0, Ie.YmJ)(e);
              return await this.keychain.set(r, e), r;
            }),
            mn(this, 'deleteKeyPair', async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            mn(this, 'deleteSymKey', async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            mn(this, 'encode', async (e, t, r) => {
              this.isInitialized();
              const i = (0, Ie.ENt)(r),
                n = (0, j.u)(t);
              if ((0, Ie.Hs$)(i)) return (0, Ie.Spz)(n, r?.encoding);
              if ((0, Ie.Q8x)(i)) {
                const t = i.senderPublicKey,
                  r = i.receiverPublicKey;
                e = await this.generateSharedKey(t, r);
              }
              const s = this.getSymKey(e),
                { type: o, senderPublicKey: a } = i;
              return (0, Ie.HIp)({
                type: o,
                symKey: s,
                message: n,
                senderPublicKey: a,
                encoding: r?.encoding,
              });
            }),
            mn(this, 'decode', async (e, t, r) => {
              this.isInitialized();
              const i = (0, Ie.Llj)(t, r);
              if ((0, Ie.Hs$)(i)) {
                const e = (0, Ie.xQU)(t, r?.encoding);
                return (0, j.D)(e);
              }
              if ((0, Ie.Q8x)(i)) {
                const t = i.receiverPublicKey,
                  r = i.senderPublicKey;
                e = await this.generateSharedKey(t, r);
              }
              try {
                const i = this.getSymKey(e),
                  n = (0, Ie.peR)({ symKey: i, encoded: t, encoding: r?.encoding });
                return (0, j.D)(n);
              } catch (U) {
                this.logger.error(
                  `Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`
                ),
                  this.logger.error(U);
              }
            }),
            mn(this, 'getPayloadType', (e, t = Ie.$dT) => {
              const r = (0, Ie.vBi)({ encoded: e, encoding: t });
              return (0, Ie.WGe)(r.type);
            }),
            mn(this, 'getPayloadSenderPublicKey', (e, t = Ie.$dT) => {
              const r = (0, Ie.vBi)({ encoded: e, encoding: t });
              return r.senderPublicKey
                ? (function (e, t = 'utf8') {
                    const r = xe[t];
                    if (!r) throw new Error(`Unsupported encoding "${t}"`);
                    return ('utf8' !== t && 'utf-8' !== t) ||
                      null == globalThis.Buffer ||
                      null == globalThis.Buffer.from
                      ? r.encoder.encode(e).substring(1)
                      : globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString(
                          'utf8'
                        );
                  })(r.senderPublicKey, Ie.AWt)
                : void 0;
            }),
            (this.core = e),
            (this.logger = he(t, this.name)),
            (this.keychain = r || new gn(this.core, this.logger));
        }
        get context() {
          return ce(this.logger);
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
            e = this.keychain.get(ut);
          } catch {
            (e = (0, Ie.jdp)()), await this.keychain.set(ut, e);
          }
          return (function (e, t = 'utf8') {
            const r = dn[t];
            if (!r) throw new Error(`Unsupported encoding "${t}"`);
            return ('utf8' !== t && 'utf-8' !== t) ||
              null == globalThis.Buffer ||
              null == globalThis.Buffer.from
              ? r.decoder.decode(`${r.prefix}${e}`)
              : globalThis.Buffer.from(e, 'utf8');
          })(e, 'base16');
        }
        getSymKey(e) {
          return this.keychain.get(e);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = (0, Ie.kCb)('NOT_INITIALIZED', this.name);
            throw new Error(e);
          }
        }
      }
      var bn = Object.defineProperty,
        vn = Object.defineProperties,
        En = Object.getOwnPropertyDescriptors,
        In = Object.getOwnPropertySymbols,
        Sn = Object.prototype.hasOwnProperty,
        Pn = Object.prototype.propertyIsEnumerable,
        On = (e, t, r) =>
          t in e
            ? bn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        _n = (e, t, r) => On(e, 'symbol' != typeof t ? t + '' : t, r);
      class xn extends class {
        constructor(e, t) {
          (this.logger = e), (this.core = t);
        }
      } {
        constructor(e, t) {
          super(e, t),
            (this.logger = e),
            (this.core = t),
            _n(this, 'messages', new Map()),
            _n(this, 'messagesWithoutClientAck', new Map()),
            _n(this, 'name', 'messages'),
            _n(this, 'version', '0.3'),
            _n(this, 'initialized', !1),
            _n(this, 'storagePrefix', ct),
            _n(this, 'init', async () => {
              if (!this.initialized) {
                this.logger.trace('Initialized');
                try {
                  const e = await this.getRelayerMessages();
                  typeof e < 'u' && (this.messages = e);
                  const t = await this.getRelayerMessagesWithoutClientAck();
                  typeof t < 'u' && (this.messagesWithoutClientAck = t),
                    this.logger.debug(`Successfully Restored records for ${this.name}`),
                    this.logger.trace({
                      type: 'method',
                      method: 'restore',
                      size: this.messages.size,
                    });
                } catch (se) {
                  this.logger.debug(`Failed to Restore records for ${this.name}`),
                    this.logger.error(se);
                } finally {
                  this.initialized = !0;
                }
              }
            }),
            _n(this, 'set', async (e, t, r) => {
              this.isInitialized();
              const i = (0, Ie.rjm)(t);
              let n = this.messages.get(e);
              if ((typeof n > 'u' && (n = {}), typeof n[i] < 'u')) return i;
              if (((n[i] = t), this.messages.set(e, n), r === At)) {
                const r = this.messagesWithoutClientAck.get(e) || {};
                this.messagesWithoutClientAck.set(
                  e,
                  ((e, t) => vn(e, En(t)))(
                    ((e, t) => {
                      for (var r in t || (t = {})) Sn.call(t, r) && On(e, r, t[r]);
                      if (In) for (var r of In(t)) Pn.call(t, r) && On(e, r, t[r]);
                      return e;
                    })({}, r),
                    { [i]: t }
                  )
                );
              }
              return await this.persist(), i;
            }),
            _n(this, 'get', (e) => {
              this.isInitialized();
              let t = this.messages.get(e);
              return typeof t > 'u' && (t = {}), t;
            }),
            _n(this, 'getWithoutAck', (e) => {
              this.isInitialized();
              const t = {};
              for (const r of e) {
                const e = this.messagesWithoutClientAck.get(r) || {};
                t[r] = Object.values(e);
              }
              return t;
            }),
            _n(this, 'has', (e, t) => {
              this.isInitialized();
              return typeof this.get(e)[(0, Ie.rjm)(t)] < 'u';
            }),
            _n(this, 'ack', async (e, t) => {
              this.isInitialized();
              const r = this.messagesWithoutClientAck.get(e);
              if (typeof r > 'u') return;
              delete r[(0, Ie.rjm)(t)],
                0 === Object.keys(r).length
                  ? this.messagesWithoutClientAck.delete(e)
                  : this.messagesWithoutClientAck.set(e, r),
                await this.persist();
            }),
            _n(this, 'del', async (e) => {
              this.isInitialized(),
                this.messages.delete(e),
                this.messagesWithoutClientAck.delete(e),
                await this.persist();
            }),
            (this.logger = he(e, this.name)),
            (this.core = t);
        }
        get context() {
          return ce(this.logger);
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
          await this.core.storage.setItem(this.storageKey, (0, Ie.KCv)(e));
        }
        async setRelayerMessagesWithoutClientAck(e) {
          await this.core.storage.setItem(this.storageKeyWithoutClientAck, (0, Ie.KCv)(e));
        }
        async getRelayerMessages() {
          const e = await this.core.storage.getItem(this.storageKey);
          return typeof e < 'u' ? (0, Ie.IPd)(e) : void 0;
        }
        async getRelayerMessagesWithoutClientAck() {
          const e = await this.core.storage.getItem(this.storageKeyWithoutClientAck);
          return typeof e < 'u' ? (0, Ie.IPd)(e) : void 0;
        }
        async persist() {
          await this.setRelayerMessages(this.messages),
            await this.setRelayerMessagesWithoutClientAck(this.messagesWithoutClientAck);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = (0, Ie.kCb)('NOT_INITIALIZED', this.name);
            throw new Error(e);
          }
        }
      }
      var An = Object.defineProperty,
        Tn = Object.defineProperties,
        Nn = Object.getOwnPropertyDescriptors,
        Cn = Object.getOwnPropertySymbols,
        Rn = Object.prototype.hasOwnProperty,
        kn = Object.prototype.propertyIsEnumerable,
        jn = (e, t, r) =>
          t in e
            ? An(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        Dn = (e, t) => {
          for (var r in t || (t = {})) Rn.call(t, r) && jn(e, r, t[r]);
          if (Cn) for (var r of Cn(t)) kn.call(t, r) && jn(e, r, t[r]);
          return e;
        },
        Ln = (e, t) => Tn(e, Nn(t)),
        qn = (e, t, r) => jn(e, 'symbol' != typeof t ? t + '' : t, r);
      class Un extends me {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            qn(this, 'events', new i.EventEmitter()),
            qn(this, 'name', 'publisher'),
            qn(this, 'queue', new Map()),
            qn(this, 'publishTimeout', (0, s.toMiliseconds)(s.ONE_MINUTE)),
            qn(this, 'initialPublishTimeout', (0, s.toMiliseconds)(15 * s.ONE_SECOND)),
            qn(this, 'needsTransportRestart', !1),
            qn(this, 'publish', async (e, t, r) => {
              var i;
              this.logger.debug('Publishing Payload'),
                this.logger.trace({
                  type: 'method',
                  method: 'publish',
                  params: { topic: e, message: t, opts: r },
                });
              const n = r?.ttl || pt,
                s = (0, Ie._HE)(r),
                o = r?.prompt || !1,
                a = r?.tag || 0,
                c = r?.id || Ue().toString(),
                h = {
                  topic: e,
                  message: t,
                  opts: {
                    ttl: n,
                    relay: s,
                    prompt: o,
                    tag: a,
                    id: c,
                    attestation: r?.attestation,
                    tvf: r?.tvf,
                  },
                },
                l = `Failed to publish payload, please try again. id:${c} tag:${a}`;
              try {
                const i = new Promise(async (i) => {
                  const s = ({ id: e }) => {
                    h.opts.id === e &&
                      (this.removeRequestFromQueue(e),
                      this.relayer.events.removeListener(Et, s),
                      i(h));
                  };
                  this.relayer.events.on(Et, s);
                  const l = (0, Ie.hFY)(
                    new Promise((i, s) => {
                      this.rpcPublish({
                        topic: e,
                        message: t,
                        ttl: n,
                        prompt: o,
                        tag: a,
                        id: c,
                        attestation: r?.attestation,
                        tvf: r?.tvf,
                      })
                        .then(i)
                        .catch((e) => {
                          this.logger.warn(e, e?.message), s(e);
                        });
                    }),
                    this.initialPublishTimeout,
                    `Failed initial publish, retrying.... id:${c} tag:${a}`
                  );
                  try {
                    await l, this.events.removeListener(Et, s);
                  } catch (u) {
                    this.queue.set(c, Ln(Dn({}, h), { attempt: 1 })),
                      this.logger.warn(u, u?.message);
                  }
                });
                this.logger.trace({
                  type: 'method',
                  method: 'publish',
                  params: { id: c, topic: e, message: t, opts: r },
                }),
                  await (0, Ie.hFY)(i, this.publishTimeout, l);
              } catch (u) {
                if (
                  (this.logger.debug('Failed to Publish Payload'),
                  this.logger.error(u),
                  null != (i = r?.internal) && i.throwOnFailedPublish)
                )
                  throw u;
              } finally {
                this.queue.delete(c);
              }
            }),
            qn(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            qn(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            qn(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            qn(this, 'removeListener', (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.relayer = e),
            (this.logger = he(t, this.name)),
            this.registerEventListeners();
        }
        get context() {
          return ce(this.logger);
        }
        async rpcPublish(e) {
          var t, r, i, n;
          const {
              topic: s,
              message: o,
              ttl: a = pt,
              prompt: c,
              tag: h,
              id: l,
              attestation: u,
              tvf: d,
            } = e,
            p = {
              method: (0, Ie.cOS)((0, Ie._HE)().protocol).publish,
              params: Dn({ topic: s, message: o, ttl: a, prompt: c, tag: h, attestation: u }, d),
              id: l,
            };
          (0, Ie.o8e)(null == (t = p.params) ? void 0 : t.prompt) &&
            (null == (r = p.params) || delete r.prompt),
            (0, Ie.o8e)(null == (i = p.params) ? void 0 : i.tag) &&
              (null == (n = p.params) || delete n.tag),
            this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'message', direction: 'outgoing', request: p });
          const f = await this.relayer.request(p);
          return (
            this.relayer.events.emit(Et, e), this.logger.debug('Successfully Published Payload'), f
          );
        }
        removeRequestFromQueue(e) {
          this.queue.delete(e);
        }
        checkQueue() {
          this.queue.forEach(async (e, t) => {
            const r = e.attempt + 1;
            this.queue.set(t, Ln(Dn({}, e), { attempt: r }));
            const { topic: i, message: n, opts: s, attestation: o } = e;
            this.logger.warn(
              {},
              `Publisher: queue->publishing: ${e.opts.id}, tag: ${e.opts.tag}, attempt: ${r}`
            ),
              await this.rpcPublish(
                Ln(Dn({}, e), {
                  topic: i,
                  message: n,
                  ttl: s.ttl,
                  prompt: s.prompt,
                  tag: s.tag,
                  id: s.id,
                  attestation: o,
                  tvf: s.tvf,
                })
              ),
              this.logger.warn({}, `Publisher: queue->published: ${e.opts.id}`);
          });
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(h, () => {
            if (this.needsTransportRestart)
              return (this.needsTransportRestart = !1), void this.relayer.events.emit(vt);
            this.checkQueue();
          }),
            this.relayer.on(yt, (e) => {
              this.removeRequestFromQueue(e.id.toString());
            });
        }
      }
      var Bn = Object.defineProperty,
        $n = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? Bn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class Mn {
        constructor() {
          $n(this, 'map', new Map()),
            $n(this, 'set', (e, t) => {
              const r = this.get(e);
              this.exists(e, t) || this.map.set(e, [...r, t]);
            }),
            $n(this, 'get', (e) => this.map.get(e) || []),
            $n(this, 'exists', (e, t) => this.get(e).includes(t)),
            $n(this, 'delete', (e, t) => {
              if (typeof t > 'u') return void this.map.delete(e);
              if (!this.map.has(e)) return;
              const r = this.get(e);
              if (!this.exists(e, t)) return;
              const i = r.filter((e) => e !== t);
              i.length ? this.map.set(e, i) : this.map.delete(e);
            }),
            $n(this, 'clear', () => {
              this.map.clear();
            });
        }
        get topics() {
          return Array.from(this.map.keys());
        }
      }
      var zn = Object.defineProperty,
        Hn = Object.defineProperties,
        Vn = Object.getOwnPropertyDescriptors,
        Kn = Object.getOwnPropertySymbols,
        Fn = Object.prototype.hasOwnProperty,
        Wn = Object.prototype.propertyIsEnumerable,
        Gn = (e, t, r) =>
          t in e
            ? zn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        Yn = (e, t) => {
          for (var r in t || (t = {})) Fn.call(t, r) && Gn(e, r, t[r]);
          if (Kn) for (var r of Kn(t)) Wn.call(t, r) && Gn(e, r, t[r]);
          return e;
        },
        Jn = (e, t) => Hn(e, Vn(t)),
        Zn = (e, t, r) => Gn(e, 'symbol' != typeof t ? t + '' : t, r);
      class Qn extends be {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            Zn(this, 'subscriptions', new Map()),
            Zn(this, 'topicMap', new Mn()),
            Zn(this, 'events', new i.EventEmitter()),
            Zn(this, 'name', 'subscription'),
            Zn(this, 'version', '0.3'),
            Zn(this, 'pending', new Map()),
            Zn(this, 'cached', []),
            Zn(this, 'initialized', !1),
            Zn(this, 'storagePrefix', ct),
            Zn(this, 'subscribeTimeout', (0, s.toMiliseconds)(s.ONE_MINUTE)),
            Zn(this, 'initialSubscribeTimeout', (0, s.toMiliseconds)(15 * s.ONE_SECOND)),
            Zn(this, 'clientId'),
            Zn(this, 'batchSubscribeTopicsLimit', 500),
            Zn(this, 'init', async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                this.registerEventListeners(),
                await this.restore()),
                (this.initialized = !0);
            }),
            Zn(this, 'subscribe', async (e, t) => {
              this.isInitialized(),
                this.logger.debug('Subscribing Topic'),
                this.logger.trace({
                  type: 'method',
                  method: 'subscribe',
                  params: { topic: e, opts: t },
                });
              try {
                const r = (0, Ie._HE)(t),
                  i = { topic: e, relay: r, transportType: t?.transportType };
                this.pending.set(e, i);
                const n = await this.rpcSubscribe(e, r, t);
                return (
                  'string' == typeof n &&
                    (this.onSubscribe(n, i),
                    this.logger.debug('Successfully Subscribed Topic'),
                    this.logger.trace({
                      type: 'method',
                      method: 'subscribe',
                      params: { topic: e, opts: t },
                    })),
                  n
                );
              } catch (r) {
                throw (this.logger.debug('Failed to Subscribe Topic'), this.logger.error(r), r);
              }
            }),
            Zn(this, 'unsubscribe', async (e, t) => {
              this.isInitialized(),
                typeof t?.id < 'u'
                  ? await this.unsubscribeById(e, t.id, t)
                  : await this.unsubscribeByTopic(e, t);
            }),
            Zn(
              this,
              'isSubscribed',
              (e) =>
                new Promise((t) => {
                  t(this.topicMap.topics.includes(e));
                })
            ),
            Zn(
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
            Zn(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            Zn(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            Zn(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            Zn(this, 'removeListener', (e, t) => {
              this.events.removeListener(e, t);
            }),
            Zn(this, 'start', async () => {
              await this.onConnect();
            }),
            Zn(this, 'stop', async () => {
              await this.onDisconnect();
            }),
            Zn(this, 'restart', async () => {
              await this.restore(), await this.onRestart();
            }),
            Zn(this, 'checkPending', async () => {
              if (0 === this.pending.size && (!this.initialized || !this.relayer.connected)) return;
              const e = [];
              this.pending.forEach((t) => {
                e.push(t);
              }),
                await this.batchSubscribe(e);
            }),
            Zn(this, 'registerEventListeners', () => {
              this.relayer.core.heartbeat.on(h, async () => {
                await this.checkPending();
              }),
                this.events.on(Ct, async (e) => {
                  const t = Ct;
                  this.logger.info(`Emitting ${t}`),
                    this.logger.debug({ type: 'event', event: t, data: e }),
                    await this.persist();
                }),
                this.events.on(Rt, async (e) => {
                  const t = Rt;
                  this.logger.info(`Emitting ${t}`),
                    this.logger.debug({ type: 'event', event: t, data: e }),
                    await this.persist();
                });
            }),
            (this.relayer = e),
            (this.logger = he(t, this.name)),
            (this.clientId = '');
        }
        get context() {
          return ce(this.logger);
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
          (this.cached = this.values), this.subscriptions.clear(), this.topicMap.clear();
        }
        async unsubscribeByTopic(e, t) {
          const r = this.topicMap.get(e);
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
            const i = (0, Ie._HE)(r);
            await this.restartToComplete({ topic: e, id: t, relay: i }),
              await this.rpcUnsubscribe(e, t, i);
            const n = (0, Ie.D6H)('USER_DISCONNECTED', `${this.name}, ${e}`);
            await this.onUnsubscribe(e, t, n),
              this.logger.debug('Successfully Unsubscribed Topic'),
              this.logger.trace({
                type: 'method',
                method: 'unsubscribe',
                params: { topic: e, id: t, opts: r },
              });
          } catch (c) {
            throw (this.logger.debug('Failed to Unsubscribe Topic'), this.logger.error(c), c);
          }
        }
        async rpcSubscribe(e, t, r) {
          var i;
          (!r || r?.transportType === xt.relay) &&
            (await this.restartToComplete({ topic: e, id: e, relay: t }));
          const n = { method: (0, Ie.cOS)(t.protocol).subscribe, params: { topic: e } };
          this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'outgoing', request: n });
          const o = null == (i = r?.internal) ? void 0 : i.throwOnFailedPublish;
          try {
            const t = await this.getSubscriptionId(e);
            if (r?.transportType === xt.link_mode)
              return (
                setTimeout(
                  () => {
                    (this.relayer.connected || this.relayer.connecting) &&
                      this.relayer.request(n).catch((e) => this.logger.warn(e));
                  },
                  (0, s.toMiliseconds)(s.ONE_SECOND)
                ),
                t
              );
            const i = new Promise(async (t) => {
                const r = (i) => {
                  i.topic === e && (this.events.removeListener(Ct, r), t(i.id));
                };
                this.events.on(Ct, r);
                try {
                  const i = await (0, Ie.hFY)(
                    new Promise((e, t) => {
                      this.relayer
                        .request(n)
                        .catch((e) => {
                          this.logger.warn(e, e?.message), t(e);
                        })
                        .then(e);
                    }),
                    this.initialSubscribeTimeout,
                    `Subscribing to ${e} failed, please try again`
                  );
                  this.events.removeListener(Ct, r), t(i);
                } catch {}
              }),
              a = await (0, Ie.hFY)(
                i,
                this.subscribeTimeout,
                `Subscribing to ${e} failed, please try again`
              );
            if (!a && o) throw new Error(`Subscribing to ${e} failed, please try again`);
            return a ? t : null;
          } catch (ue) {
            if (
              (this.logger.debug('Outgoing Relay Subscribe Payload stalled'),
              this.relayer.events.emit(vt),
              o)
            )
              throw ue;
          }
          return null;
        }
        async rpcBatchSubscribe(e) {
          if (!e.length) return;
          const t = e[0].relay,
            r = {
              method: (0, Ie.cOS)(t.protocol).batchSubscribe,
              params: { topics: e.map((e) => e.topic) },
            };
          this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'outgoing', request: r });
          try {
            await await (0, Ie.hFY)(
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
            this.relayer.events.emit(vt);
          }
        }
        async rpcBatchFetchMessages(e) {
          if (!e.length) return;
          const t = e[0].relay,
            r = {
              method: (0, Ie.cOS)(t.protocol).batchFetchMessages,
              params: { topics: e.map((e) => e.topic) },
            };
          let i;
          this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'outgoing', request: r });
          try {
            i = await await (0, Ie.hFY)(
              new Promise((e, t) => {
                this.relayer
                  .request(r)
                  .catch((e) => {
                    this.logger.warn(e), t(e);
                  })
                  .then(e);
              }),
              this.subscribeTimeout,
              'rpcBatchFetchMessages failed, please try again'
            );
          } catch {
            this.relayer.events.emit(vt);
          }
          return i;
        }
        rpcUnsubscribe(e, t, r) {
          const i = { method: (0, Ie.cOS)(r.protocol).unsubscribe, params: { topic: e, id: t } };
          return (
            this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'outgoing', request: i }),
            this.relayer.request(i)
          );
        }
        onSubscribe(e, t) {
          this.setSubscription(e, Jn(Yn({}, t), { id: e })), this.pending.delete(t.topic);
        }
        onBatchSubscribe(e) {
          e.length &&
            e.forEach((e) => {
              this.setSubscription(e.id, Yn({}, e)), this.pending.delete(e.topic);
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
          this.subscriptions.set(e, Yn({}, t)),
            this.topicMap.set(t.topic, e),
            this.events.emit(Ct, t);
        }
        getSubscription(e) {
          this.logger.debug('Getting subscription'),
            this.logger.trace({ type: 'method', method: 'getSubscription', id: e });
          const t = this.subscriptions.get(e);
          if (!t) {
            const { message: t } = (0, Ie.kCb)('NO_MATCHING_KEY', `${this.name}: ${e}`);
            throw new Error(t);
          }
          return t;
        }
        deleteSubscription(e, t) {
          this.logger.debug('Deleting subscription'),
            this.logger.trace({ type: 'method', method: 'deleteSubscription', id: e, reason: t });
          const r = this.getSubscription(e);
          this.subscriptions.delete(e),
            this.topicMap.delete(r.topic, e),
            this.events.emit(Rt, Jn(Yn({}, r), { reason: t }));
        }
        async persist() {
          await this.setRelayerSubscriptions(this.values), this.events.emit(kt);
        }
        async onRestart() {
          if (this.cached.length) {
            const e = [...this.cached],
              t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
            for (let r = 0; r < t; r++) {
              const t = e.splice(0, this.batchSubscribeTopicsLimit);
              await this.batchSubscribe(t);
            }
          }
          this.events.emit(jt);
        }
        async restore() {
          try {
            const e = await this.getRelayerSubscriptions();
            if (typeof e > 'u' || !e.length) return;
            if (this.subscriptions.size) {
              const { message: e } = (0, Ie.kCb)('RESTORE_WILL_OVERRIDE', this.name);
              throw (
                (this.logger.error(e),
                this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),
                new Error(e))
              );
            }
            (this.cached = e),
              this.logger.debug(`Successfully Restored subscriptions for ${this.name}`),
              this.logger.trace({ type: 'method', method: 'restore', subscriptions: this.values });
          } catch (He) {
            this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),
              this.logger.error(He);
          }
        }
        async batchSubscribe(e) {
          e.length &&
            (await this.rpcBatchSubscribe(e),
            this.onBatchSubscribe(
              await Promise.all(
                e.map(async (e) => Jn(Yn({}, e), { id: await this.getSubscriptionId(e.topic) }))
              )
            ));
        }
        async batchFetchMessages(e) {
          if (!e.length) return;
          this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);
          const t = await this.rpcBatchFetchMessages(e);
          t &&
            t.messages &&
            (await (0, Ie._vH)((0, s.toMiliseconds)(s.ONE_SECOND)),
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
            const { message: e } = (0, Ie.kCb)('NOT_INITIALIZED', this.name);
            throw new Error(e);
          }
        }
        async restartToComplete(e) {
          !this.relayer.connected &&
            !this.relayer.connecting &&
            (this.cached.push(e), await this.relayer.transportOpen());
        }
        async getClientId() {
          return (
            this.clientId || (this.clientId = await this.relayer.core.crypto.getClientId()),
            this.clientId
          );
        }
        async getSubscriptionId(e) {
          return (0, Ie.rjm)(e + (await this.getClientId()));
        }
      }
      var Xn = Object.defineProperty,
        es = Object.getOwnPropertySymbols,
        ts = Object.prototype.hasOwnProperty,
        rs = Object.prototype.propertyIsEnumerable,
        is = (e, t, r) =>
          t in e
            ? Xn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        ns = (e, t) => {
          for (var r in t || (t = {})) ts.call(t, r) && is(e, r, t[r]);
          if (es) for (var r of es(t)) rs.call(t, r) && is(e, r, t[r]);
          return e;
        },
        ss = (e, t, r) => is(e, 'symbol' != typeof t ? t + '' : t, r);
      class os extends we {
        constructor(e) {
          super(e),
            ss(this, 'protocol', 'wc'),
            ss(this, 'version', 2),
            ss(this, 'core'),
            ss(this, 'logger'),
            ss(this, 'events', new i.EventEmitter()),
            ss(this, 'provider'),
            ss(this, 'messages'),
            ss(this, 'subscriber'),
            ss(this, 'publisher'),
            ss(this, 'name', 'relayer'),
            ss(this, 'transportExplicitlyClosed', !1),
            ss(this, 'initialized', !1),
            ss(this, 'connectionAttemptInProgress', !1),
            ss(this, 'relayUrl'),
            ss(this, 'projectId'),
            ss(this, 'packageName'),
            ss(this, 'bundleId'),
            ss(this, 'hasExperiencedNetworkDisruption', !1),
            ss(this, 'pingTimeout'),
            ss(this, 'heartBeatTimeout', (0, s.toMiliseconds)(s.THIRTY_SECONDS + s.FIVE_SECONDS)),
            ss(this, 'reconnectTimeout'),
            ss(this, 'connectPromise'),
            ss(this, 'reconnectInProgress', !1),
            ss(this, 'requestsInFlight', []),
            ss(this, 'connectTimeout', (0, s.toMiliseconds)(15 * s.ONE_SECOND)),
            ss(this, 'request', async (e) => {
              var t, r;
              this.logger.debug('Publishing Request Payload');
              const i = e.id || Ue().toString();
              await this.toEstablishConnection();
              try {
                this.logger.trace(
                  { id: i, method: e.method, topic: null == (t = e.params) ? void 0 : t.topic },
                  'relayer.request - publishing...'
                );
                const n = `${i}:${(null == (r = e.params) ? void 0 : r.tag) || ''}`;
                this.requestsInFlight.push(n);
                const s = await this.provider.request(e);
                return (this.requestsInFlight = this.requestsInFlight.filter((e) => e !== n)), s;
              } catch (n) {
                throw (this.logger.debug(`Failed to Publish Request: ${i}`), n);
              }
            }),
            ss(this, 'resetPingTimeout', () => {
              (0, Ie.UGU)() &&
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
                  } catch (n) {
                    this.logger.warn(n, n?.message);
                  }
                }, this.heartBeatTimeout)));
            }),
            ss(this, 'onPayloadHandler', (e) => {
              this.onProviderPayload(e), this.resetPingTimeout();
            }),
            ss(this, 'onConnectHandler', () => {
              this.logger.warn({}, 'Relayer connected \ud83d\udedc'),
                this.startPingTimeout(),
                this.events.emit(mt);
            }),
            ss(this, 'onDisconnectHandler', () => {
              this.logger.warn({}, 'Relayer disconnected \ud83d\uded1'),
                (this.requestsInFlight = []),
                this.onProviderDisconnect();
            }),
            ss(this, 'onProviderErrorHandler', (e) => {
              this.logger.fatal(`Fatal socket error: ${e.message}`),
                this.events.emit(bt, e),
                this.logger.fatal('Fatal socket error received, closing transport'),
                this.transportClose();
            }),
            ss(this, 'registerProviderListeners', () => {
              this.provider.on(It, this.onPayloadHandler),
                this.provider.on(St, this.onConnectHandler),
                this.provider.on(Pt, this.onDisconnectHandler),
                this.provider.on(Ot, this.onProviderErrorHandler);
            }),
            (this.core = e.core),
            (this.logger =
              typeof e.logger < 'u' && 'string' != typeof e.logger
                ? he(e.logger, this.name)
                : V()(ae({ level: e.logger || 'error' }))),
            (this.messages = new xn(this.logger, e.core)),
            (this.subscriber = new Qn(this, this.logger)),
            (this.publisher = new Un(this, this.logger)),
            (this.relayUrl = e?.relayUrl || ft),
            (this.projectId = e.projectId),
            (0, Ie.DtP)()
              ? (this.packageName = (0, Ie.rhL)())
              : (0, Ie.sa_)() && (this.bundleId = (0, Ie.rhL)()),
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
            } catch (He) {
              this.logger.warn(He, He?.message);
            }
        }
        get context() {
          return ce(this.logger);
        }
        get connected() {
          var e, t, r;
          return (
            1 ===
              (null ==
              (r =
                null == (t = null == (e = this.provider) ? void 0 : e.connection)
                  ? void 0
                  : t.socket)
                ? void 0
                : r.readyState) || !1
          );
        }
        get connecting() {
          var e, t, r;
          return (
            0 ===
              (null ==
              (r =
                null == (t = null == (e = this.provider) ? void 0 : e.connection)
                  ? void 0
                  : t.socket)
                ? void 0
                : r.readyState) ||
            void 0 !== this.connectPromise ||
            !1
          );
        }
        async publish(e, t, r) {
          this.isInitialized(),
            await this.publisher.publish(e, t, r),
            await this.recordMessageEvent(
              { topic: e, message: t, publishedAt: Date.now(), transportType: xt.relay },
              Tt
            );
        }
        async subscribe(e, t) {
          var r, i, n;
          this.isInitialized(),
            (null == t || !t.transportType || 'relay' === t?.transportType) &&
              (await this.toEstablishConnection());
          const s =
            typeof (null == (r = t?.internal) ? void 0 : r.throwOnFailedPublish) > 'u' ||
            (null == (i = t?.internal) ? void 0 : i.throwOnFailedPublish);
          let o,
            a = (null == (n = this.subscriber.topicMap.get(e)) ? void 0 : n[0]) || '';
          const c = (t) => {
            t.topic === e && (this.subscriber.off(Ct, c), o());
          };
          return (
            await Promise.all([
              new Promise((e) => {
                (o = e), this.subscriber.on(Ct, c);
              }),
              new Promise(async (r, i) => {
                (a =
                  (await this.subscriber
                    .subscribe(e, ns({ internal: { throwOnFailedPublish: s } }, t))
                    .catch((e) => {
                      s && i(e);
                    })) || a),
                  r();
              }),
            ]),
            a
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
            ? await (0, Ie.hFY)(this.provider.disconnect(), 2e3, 'provider.disconnect()').catch(
                () => this.onProviderDisconnect()
              )
            : this.onProviderDisconnect();
        }
        async transportClose() {
          (this.transportExplicitlyClosed = !0), await this.transportDisconnect();
        }
        async transportOpen(e) {
          if (this.subscriber.hasAnyTopics) {
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
              throw new Error(
                `Couldn't establish socket connection to the relay server: ${this.relayUrl}`
              );
          } else
            this.logger.warn(
              'Starting WS connection skipped because the client has no topics to work with.'
            );
        }
        async restartTransport(e) {
          this.logger.debug({}, 'Restarting transport...'),
            !this.connectionAttemptInProgress &&
              ((this.relayUrl = e || this.relayUrl),
              await this.confirmOnlineStateOrThrow(),
              await this.transportClose(),
              await this.transportOpen());
        }
        async confirmOnlineStateOrThrow() {
          if (!(await (0, Ie.Ggh)()))
            throw new Error(
              'No internet connection detected. Please restart your network and try again.'
            );
        }
        async handleBatchMessageEvents(e) {
          if (0 === e?.length)
            return void this.logger.trace('Batch message events is empty. Ignoring...');
          const t = e.sort((e, t) => e.publishedAt - t.publishedAt);
          this.logger.debug(`Batch of ${t.length} message events sorted`);
          for (const r of t)
            try {
              await this.onMessageEvent(r);
            } catch (c) {
              this.logger.warn(c, 'Error while processing batch message event: ' + c?.message);
            }
          this.logger.trace(`Batch of ${t.length} message events processed`);
        }
        async onLinkMessageEvent(e, t) {
          const { topic: r } = e;
          if (!t.sessionExists) {
            const e = {
              topic: r,
              expiry: (0, Ie.gn4)(s.FIVE_MINUTES),
              relay: { protocol: 'irn' },
              active: !1,
            };
            await this.core.pairing.pairings.set(r, e);
          }
          this.events.emit(gt, e), await this.recordMessageEvent(e, At);
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
                  const r = () => {
                    t(new Error('Connection interrupted while trying to subscribe'));
                  };
                  this.provider.once(Pt, r),
                    await (0, Ie.hFY)(
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
                        this.provider.off(Pt, r), clearTimeout(this.reconnectTimeout);
                      }),
                    await new Promise(async (e, t) => {
                      const r = () => {
                        t(new Error('Connection interrupted while trying to subscribe'));
                      };
                      this.provider.once(Pt, r),
                        await this.subscriber
                          .start()
                          .then(e)
                          .catch(t)
                          .finally(() => {
                            this.provider.off(Pt, r);
                          });
                    }),
                    (this.hasExperiencedNetworkDisruption = !1),
                    e();
                });
            } catch (se) {
              await this.subscriber.stop();
              const t = se;
              this.logger.warn({}, t.message), (this.hasExperiencedNetworkDisruption = !0);
            } finally {
              this.connectionAttemptInProgress = !1;
            }
            if (this.connected) {
              this.logger.debug({}, `Connected to ${this.relayUrl} successfully on attempt: ${t}`);
              break;
            }
            await new Promise((e) => setTimeout(e, (0, s.toMiliseconds)(1 * t))), t++;
          }
        }
        startPingTimeout() {
          var e, t, r, i, n;
          if ((0, Ie.UGU)())
            try {
              null != (t = null == (e = this.provider) ? void 0 : e.connection) &&
                t.socket &&
                (null ==
                  (n =
                    null == (i = null == (r = this.provider) ? void 0 : r.connection)
                      ? void 0
                      : i.socket) ||
                  n.on('ping', () => {
                    this.resetPingTimeout();
                  })),
                this.resetPingTimeout();
            } catch (s) {
              this.logger.warn(s, s?.message);
            }
        }
        async createProvider() {
          this.provider.connection && this.unregisterProviderListeners();
          const e = await this.core.crypto.signJWT(this.relayUrl);
          (this.provider = new et(
            new it(
              (0, Ie.$0m)({
                sdkVersion: _t,
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
          const { topic: r, message: i } = e;
          await this.messages.set(r, i, t);
        }
        async shouldIgnoreMessageEvent(e) {
          const { topic: t, message: r } = e;
          if (!r || 0 === r.length)
            return this.logger.warn(`Ignoring invalid/empty message: ${r}`), !0;
          if (!(await this.subscriber.isKnownTopic(t)))
            return this.logger.warn(`Ignoring message for unknown topic ${t}`), !0;
          const i = this.messages.has(t, r);
          return i && this.logger.warn(`Ignoring duplicate message: ${r}`), i;
        }
        async onProviderPayload(e) {
          if (
            (this.logger.debug('Incoming Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'incoming', payload: e }),
            Je(e))
          ) {
            if (!e.method.endsWith('_subscription')) return;
            const t = e.params,
              { topic: r, message: i, publishedAt: n, attestation: s } = t.data,
              o = { topic: r, message: i, publishedAt: n, transportType: xt.relay, attestation: s };
            this.logger.debug('Emitting Relayer Payload'),
              this.logger.trace(ns({ type: 'event', event: t.id }, o)),
              this.events.emit(t.id, o),
              await this.acknowledgePayload(e),
              await this.onMessageEvent(o);
          } else Ze(e) && this.events.emit(yt, e);
        }
        async onMessageEvent(e) {
          (await this.shouldIgnoreMessageEvent(e)) ||
            (await this.recordMessageEvent(e, At), this.events.emit(gt, e));
        }
        async acknowledgePayload(e) {
          const t = $e(e.id, !0);
          await this.provider.connection.send(t);
        }
        unregisterProviderListeners() {
          this.provider.off(It, this.onPayloadHandler),
            this.provider.off(St, this.onConnectHandler),
            this.provider.off(Pt, this.onDisconnectHandler),
            this.provider.off(Ot, this.onProviderErrorHandler),
            clearTimeout(this.pingTimeout);
        }
        async registerEventListeners() {
          let e = await (0, Ie.Ggh)();
          (0, Ie.uwg)(async (t) => {
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
            this.events.emit(wt),
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
                    (0, s.toMiliseconds)(0.1)
                  ))));
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = (0, Ie.kCb)('NOT_INITIALIZED', this.name);
            throw new Error(e);
          }
        }
        async toEstablishConnection() {
          await this.confirmOnlineStateOrThrow(), !this.connected && (await this.connect());
        }
      }
      function as() {}
      function cs(e) {
        if (!e || 'object' != typeof e) return !1;
        const t = Object.getPrototypeOf(e);
        return (
          (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) &&
          '[object Object]' === Object.prototype.toString.call(e)
        );
      }
      function hs(e) {
        return Object.getOwnPropertySymbols(e).filter((t) =>
          Object.prototype.propertyIsEnumerable.call(e, t)
        );
      }
      function ls(e) {
        return null == e
          ? void 0 === e
            ? '[object Undefined]'
            : '[object Null]'
          : Object.prototype.toString.call(e);
      }
      const us = '[object Arguments]',
        ds = '[object Object]';
      function ps(e, t, r, i, n, s, o) {
        const a = o(e, t, r, i, n, s);
        if (void 0 !== a) return a;
        if (typeof e == typeof t)
          switch (typeof e) {
            case 'bigint':
            case 'string':
            case 'boolean':
            case 'symbol':
            case 'undefined':
            case 'function':
              return e === t;
            case 'number':
              return e === t || Object.is(e, t);
            case 'object':
              return fs(e, t, s, o);
          }
        return fs(e, t, s, o);
      }
      function fs(e, t, r, i) {
        if (Object.is(e, t)) return !0;
        let n = ls(e),
          s = ls(t);
        if ((n === us && (n = ds), s === us && (s = ds), n !== s)) return !1;
        switch (n) {
          case '[object String]':
            return e.toString() === t.toString();
          case '[object Number]':
            return (function (e, t) {
              return e === t || (Number.isNaN(e) && Number.isNaN(t));
            })(e.valueOf(), t.valueOf());
          case '[object Boolean]':
          case '[object Date]':
          case '[object Symbol]':
            return Object.is(e.valueOf(), t.valueOf());
          case '[object RegExp]':
            return e.source === t.source && e.flags === t.flags;
          case '[object Function]':
            return e === t;
        }
        const o = (r = r ?? new Map()).get(e),
          a = r.get(t);
        if (null != o && null != a) return o === t;
        r.set(e, t), r.set(t, e);
        try {
          switch (n) {
            case '[object Map]':
              if (e.size !== t.size) return !1;
              for (const [n, s] of e.entries())
                if (!t.has(n) || !ps(s, t.get(n), n, e, t, r, i)) return !1;
              return !0;
            case '[object Set]': {
              if (e.size !== t.size) return !1;
              const n = Array.from(e.values()),
                s = Array.from(t.values());
              for (let o = 0; o < n.length; o++) {
                const a = n[o],
                  c = s.findIndex((n) => ps(a, n, void 0, e, t, r, i));
                if (-1 === c) return !1;
                s.splice(c, 1);
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
              if ((typeof st < 'u' && st.isBuffer(e) !== st.isBuffer(t)) || e.length !== t.length)
                return !1;
              for (let n = 0; n < e.length; n++) if (!ps(e[n], t[n], n, e, t, r, i)) return !1;
              return !0;
            case '[object ArrayBuffer]':
              return (
                e.byteLength === t.byteLength && fs(new Uint8Array(e), new Uint8Array(t), r, i)
              );
            case '[object DataView]':
              return (
                e.byteLength === t.byteLength &&
                e.byteOffset === t.byteOffset &&
                fs(new Uint8Array(e), new Uint8Array(t), r, i)
              );
            case '[object Error]':
              return e.name === t.name && e.message === t.message;
            case ds: {
              if (!(fs(e.constructor, t.constructor, r, i) || (cs(e) && cs(t)))) return !1;
              const n = [...Object.keys(e), ...hs(e)],
                s = [...Object.keys(t), ...hs(t)];
              if (n.length !== s.length) return !1;
              for (let o = 0; o < n.length; o++) {
                const s = n[o],
                  a = e[s];
                if (!Object.hasOwn(t, s)) return !1;
                if (!ps(a, t[s], s, e, t, r, i)) return !1;
              }
              return !0;
            }
            default:
              return !1;
          }
        } finally {
          r.delete(e), r.delete(t);
        }
      }
      function gs(e, t) {
        return (function (e, t, r) {
          return ps(e, t, void 0, void 0, void 0, void 0, r);
        })(e, t, as);
      }
      var ys = Object.defineProperty,
        ms = Object.getOwnPropertySymbols,
        ws = Object.prototype.hasOwnProperty,
        bs = Object.prototype.propertyIsEnumerable,
        vs = (e, t, r) =>
          t in e
            ? ys(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        Es = (e, t) => {
          for (var r in t || (t = {})) ws.call(t, r) && vs(e, r, t[r]);
          if (ms) for (var r of ms(t)) bs.call(t, r) && vs(e, r, t[r]);
          return e;
        },
        Is = (e, t, r) => vs(e, 'symbol' != typeof t ? t + '' : t, r);
      class Ss extends class {
        constructor(e, t, r, i) {
          (this.core = e), (this.logger = t), (this.name = r);
        }
      } {
        constructor(e, t, r, i = ct, n) {
          super(e, t, r, i),
            (this.core = e),
            (this.logger = t),
            (this.name = r),
            Is(this, 'map', new Map()),
            Is(this, 'version', '0.3'),
            Is(this, 'cached', []),
            Is(this, 'initialized', !1),
            Is(this, 'getKey'),
            Is(this, 'storagePrefix', ct),
            Is(this, 'recentlyDeleted', []),
            Is(this, 'recentlyDeletedLimit', 200),
            Is(this, 'init', async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                await this.restore(),
                this.cached.forEach((e) => {
                  this.getKey && null !== e && !(0, Ie.o8e)(e)
                    ? this.map.set(this.getKey(e), e)
                    : (0, Ie.xWS)(e)
                      ? this.map.set(e.id, e)
                      : (0, Ie.h1R)(e) && this.map.set(e.topic, e);
                }),
                (this.cached = []),
                (this.initialized = !0));
            }),
            Is(this, 'set', async (e, t) => {
              this.isInitialized(),
                this.map.has(e)
                  ? await this.update(e, t)
                  : (this.logger.debug('Setting value'),
                    this.logger.trace({ type: 'method', method: 'set', key: e, value: t }),
                    this.map.set(e, t),
                    await this.persist());
            }),
            Is(
              this,
              'get',
              (e) => (
                this.isInitialized(),
                this.logger.debug('Getting value'),
                this.logger.trace({ type: 'method', method: 'get', key: e }),
                this.getData(e)
              )
            ),
            Is(
              this,
              'getAll',
              (e) => (
                this.isInitialized(),
                e
                  ? this.values.filter((t) => Object.keys(e).every((r) => gs(t[r], e[r])))
                  : this.values
              )
            ),
            Is(this, 'update', async (e, t) => {
              this.isInitialized(),
                this.logger.debug('Updating value'),
                this.logger.trace({ type: 'method', method: 'update', key: e, update: t });
              const r = Es(Es({}, this.getData(e)), t);
              this.map.set(e, r), await this.persist();
            }),
            Is(this, 'delete', async (e, t) => {
              this.isInitialized(),
                this.map.has(e) &&
                  (this.logger.debug('Deleting value'),
                  this.logger.trace({ type: 'method', method: 'delete', key: e, reason: t }),
                  this.map.delete(e),
                  this.addToRecentlyDeleted(e),
                  await this.persist());
            }),
            (this.logger = he(t, this.name)),
            (this.storagePrefix = i),
            (this.getKey = n);
        }
        get context() {
          return ce(this.logger);
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
          const t = this.map.get(e);
          if (!t) {
            if (this.recentlyDeleted.includes(e)) {
              const { message: t } = (0, Ie.kCb)(
                'MISSING_OR_INVALID',
                `Record was recently deleted - ${this.name}: ${e}`
              );
              throw (this.logger.error(t), new Error(t));
            }
            const { message: t } = (0, Ie.kCb)('NO_MATCHING_KEY', `${this.name}: ${e}`);
            throw (this.logger.error(t), new Error(t));
          }
          return t;
        }
        async persist() {
          await this.setDataStore(this.values);
        }
        async restore() {
          try {
            const e = await this.getDataStore();
            if (typeof e > 'u' || !e.length) return;
            if (this.map.size) {
              const { message: e } = (0, Ie.kCb)('RESTORE_WILL_OVERRIDE', this.name);
              throw (this.logger.error(e), new Error(e));
            }
            (this.cached = e),
              this.logger.debug(`Successfully Restored value for ${this.name}`),
              this.logger.trace({ type: 'method', method: 'restore', value: this.values });
          } catch (He) {
            this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(He);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = (0, Ie.kCb)('NOT_INITIALIZED', this.name);
            throw new Error(e);
          }
        }
      }
      var Ps = Object.defineProperty,
        Os = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? Ps(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class _s {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            Os(this, 'name', 'pairing'),
            Os(this, 'version', '0.3'),
            Os(this, 'events', new (n())()),
            Os(this, 'pairings'),
            Os(this, 'initialized', !1),
            Os(this, 'storagePrefix', ct),
            Os(this, 'ignoredPayloadTypes', [Ie.rVF]),
            Os(this, 'registeredMethods', []),
            Os(this, 'init', async () => {
              this.initialized ||
                (await this.pairings.init(),
                await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                (this.initialized = !0),
                this.logger.trace('Initialized'));
            }),
            Os(this, 'register', ({ methods: e }) => {
              this.isInitialized(),
                (this.registeredMethods = [...new Set([...this.registeredMethods, ...e])]);
            }),
            Os(this, 'create', async (e) => {
              this.isInitialized();
              const t = (0, Ie.jdp)(),
                r = await this.core.crypto.setSymKey(t),
                i = (0, Ie.gn4)(s.FIVE_MINUTES),
                n = { protocol: 'irn' },
                o = { topic: r, expiry: i, relay: n, active: !1, methods: e?.methods },
                a = (0, Ie.Bvr)({
                  protocol: this.core.protocol,
                  version: this.core.version,
                  topic: r,
                  symKey: t,
                  relay: n,
                  expiryTimestamp: i,
                  methods: e?.methods,
                });
              return (
                this.events.emit(Lt, o),
                this.core.expirer.set(r, i),
                await this.pairings.set(r, o),
                await this.core.relayer.subscribe(r, { transportType: e?.transportType }),
                { topic: r, uri: a }
              );
            }),
            Os(this, 'pair', async (e) => {
              this.isInitialized();
              const t = this.core.eventClient.createEvent({
                properties: { topic: e?.uri, trace: [Qt] },
              });
              this.isValidPair(e, t);
              const {
                topic: r,
                symKey: i,
                relay: n,
                expiryTimestamp: o,
                methods: a,
              } = (0, Ie.heJ)(e.uri);
              let c;
              if (
                ((t.props.properties.topic = r),
                t.addTrace(Xt),
                t.addTrace(er),
                this.pairings.keys.includes(r))
              ) {
                if (((c = this.pairings.get(r)), t.addTrace(nr), c.active))
                  throw (
                    (t.setError(lr),
                    new Error(
                      `Pairing already exists: ${r}. Please try again with a new connection URI.`
                    ))
                  );
                t.addTrace(sr);
              }
              const h = o || (0, Ie.gn4)(s.FIVE_MINUTES),
                l = { topic: r, relay: n, expiry: h, active: !1, methods: a };
              this.core.expirer.set(r, h),
                await this.pairings.set(r, l),
                t.addTrace(tr),
                e.activatePairing && (await this.activate({ topic: r })),
                this.events.emit(Lt, l),
                t.addTrace(or),
                this.core.crypto.keychain.has(r) || (await this.core.crypto.setSymKey(i, r)),
                t.addTrace(rr);
              try {
                await this.core.relayer.confirmOnlineStateOrThrow();
              } catch {
                t.setError(cr);
              }
              try {
                await this.core.relayer.subscribe(r, { relay: n });
              } catch (L) {
                throw (t.setError(ur), L);
              }
              return t.addTrace(ir), l;
            }),
            Os(this, 'activate', async ({ topic: e }) => {
              this.isInitialized();
              const t = (0, Ie.gn4)(s.FIVE_MINUTES);
              this.core.expirer.set(e, t), await this.pairings.update(e, { active: !0, expiry: t });
            }),
            Os(this, 'ping', async (e) => {
              this.isInitialized(),
                await this.isValidPing(e),
                this.logger.warn(
                  'ping() is deprecated and will be removed in the next major release.'
                );
              const { topic: t } = e;
              if (this.pairings.keys.includes(t)) {
                const e = await this.sendRequest(t, 'wc_pairingPing', {}),
                  { done: r, resolve: i, reject: n } = (0, Ie.H1S)();
                this.events.once((0, Ie.E0T)('pairing_ping', e), ({ error: e }) => {
                  e ? n(e) : i();
                }),
                  await r();
              }
            }),
            Os(this, 'updateExpiry', async ({ topic: e, expiry: t }) => {
              this.isInitialized(), await this.pairings.update(e, { expiry: t });
            }),
            Os(this, 'updateMetadata', async ({ topic: e, metadata: t }) => {
              this.isInitialized(), await this.pairings.update(e, { peerMetadata: t });
            }),
            Os(this, 'getPairings', () => (this.isInitialized(), this.pairings.values)),
            Os(this, 'disconnect', async (e) => {
              this.isInitialized(), await this.isValidDisconnect(e);
              const { topic: t } = e;
              this.pairings.keys.includes(t) &&
                (await this.sendRequest(t, 'wc_pairingDelete', (0, Ie.D6H)('USER_DISCONNECTED')),
                await this.deletePairing(t));
            }),
            Os(this, 'formatUriFromPairing', (e) => {
              this.isInitialized();
              const { topic: t, relay: r, expiry: i, methods: n } = e,
                s = this.core.crypto.keychain.get(t);
              return (0, Ie.Bvr)({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: t,
                symKey: s,
                relay: r,
                expiryTimestamp: i,
                methods: n,
              });
            }),
            Os(this, 'sendRequest', async (e, t, r) => {
              const i = Be(t, r),
                n = await this.core.crypto.encode(e, i),
                s = Dt[t].req;
              return this.core.history.set(e, i), this.core.relayer.publish(e, n, s), i.id;
            }),
            Os(this, 'sendResult', async (e, t, r) => {
              const i = $e(e, r),
                n = await this.core.crypto.encode(t, i),
                s = (await this.core.history.get(t, e)).request.method,
                o = Dt[s].res;
              await this.core.relayer.publish(t, n, o), await this.core.history.resolve(i);
            }),
            Os(this, 'sendError', async (e, t, r) => {
              const i = Me(e, r),
                n = await this.core.crypto.encode(t, i),
                s = (await this.core.history.get(t, e)).request.method,
                o = Dt[s] ? Dt[s].res : Dt.unregistered_method.res;
              await this.core.relayer.publish(t, n, o), await this.core.history.resolve(i);
            }),
            Os(this, 'deletePairing', async (e, t) => {
              await this.core.relayer.unsubscribe(e),
                await Promise.all([
                  this.pairings.delete(e, (0, Ie.D6H)('USER_DISCONNECTED')),
                  this.core.crypto.deleteSymKey(e),
                  t ? Promise.resolve() : this.core.expirer.del(e),
                ]);
            }),
            Os(this, 'cleanup', async () => {
              const e = this.pairings.getAll().filter((e) => (0, Ie.BwD)(e.expiry));
              await Promise.all(e.map((e) => this.deletePairing(e.topic)));
            }),
            Os(this, 'onRelayEventRequest', async (e) => {
              const { topic: t, payload: r } = e;
              switch (r.method) {
                case 'wc_pairingPing':
                  return await this.onPairingPingRequest(t, r);
                case 'wc_pairingDelete':
                  return await this.onPairingDeleteRequest(t, r);
                default:
                  return await this.onUnknownRpcMethodRequest(t, r);
              }
            }),
            Os(this, 'onRelayEventResponse', async (e) => {
              const { topic: t, payload: r } = e,
                i = (await this.core.history.get(t, r.id)).request.method;
              return 'wc_pairingPing' === i
                ? this.onPairingPingResponse(t, r)
                : this.onUnknownRpcMethodResponse(i);
            }),
            Os(this, 'onPairingPingRequest', async (e, t) => {
              const { id: r } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult(r, e, !0),
                  this.events.emit(Bt, { id: r, topic: e });
              } catch (i) {
                await this.sendError(r, e, i), this.logger.error(i);
              }
            }),
            Os(this, 'onPairingPingResponse', (e, t) => {
              const { id: r } = t;
              setTimeout(() => {
                Qe(t)
                  ? this.events.emit((0, Ie.E0T)('pairing_ping', r), {})
                  : Xe(t) && this.events.emit((0, Ie.E0T)('pairing_ping', r), { error: t.error });
              }, 500);
            }),
            Os(this, 'onPairingDeleteRequest', async (e, t) => {
              const { id: r } = t;
              try {
                this.isValidDisconnect({ topic: e }),
                  await this.deletePairing(e),
                  this.events.emit(Ut, { id: r, topic: e });
              } catch (i) {
                await this.sendError(r, e, i), this.logger.error(i);
              }
            }),
            Os(this, 'onUnknownRpcMethodRequest', async (e, t) => {
              const { id: r, method: i } = t;
              try {
                if (this.registeredMethods.includes(i)) return;
                const t = (0, Ie.D6H)('WC_METHOD_UNSUPPORTED', i);
                await this.sendError(r, e, t), this.logger.error(t);
              } catch (ue) {
                await this.sendError(r, e, ue), this.logger.error(ue);
              }
            }),
            Os(this, 'onUnknownRpcMethodResponse', (e) => {
              this.registeredMethods.includes(e) ||
                this.logger.error((0, Ie.D6H)('WC_METHOD_UNSUPPORTED', e));
            }),
            Os(this, 'isValidPair', (e, t) => {
              var r;
              if (!(0, Ie.EJd)(e)) {
                const { message: r } = (0, Ie.kCb)('MISSING_OR_INVALID', `pair() params: ${e}`);
                throw (t.setError(hr), new Error(r));
              }
              if (!(0, Ie.jvJ)(e.uri)) {
                const { message: r } = (0, Ie.kCb)('MISSING_OR_INVALID', `pair() uri: ${e.uri}`);
                throw (t.setError(hr), new Error(r));
              }
              const i = (0, Ie.heJ)(e?.uri);
              if (null == (r = i?.relay) || !r.protocol) {
                const { message: e } = (0, Ie.kCb)(
                  'MISSING_OR_INVALID',
                  'pair() uri#relay-protocol'
                );
                throw (t.setError(hr), new Error(e));
              }
              if (null == i || !i.symKey) {
                const { message: e } = (0, Ie.kCb)('MISSING_OR_INVALID', 'pair() uri#symKey');
                throw (t.setError(hr), new Error(e));
              }
              if (
                null != i &&
                i.expiryTimestamp &&
                (0, s.toMiliseconds)(i?.expiryTimestamp) < Date.now()
              ) {
                t.setError(dr);
                const { message: e } = (0, Ie.kCb)(
                  'EXPIRED',
                  'pair() URI has expired. Please try again with a new connection URI.'
                );
                throw new Error(e);
              }
            }),
            Os(this, 'isValidPing', async (e) => {
              if (!(0, Ie.EJd)(e)) {
                const { message: t } = (0, Ie.kCb)('MISSING_OR_INVALID', `ping() params: ${e}`);
                throw new Error(t);
              }
              const { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            Os(this, 'isValidDisconnect', async (e) => {
              if (!(0, Ie.EJd)(e)) {
                const { message: t } = (0, Ie.kCb)(
                  'MISSING_OR_INVALID',
                  `disconnect() params: ${e}`
                );
                throw new Error(t);
              }
              const { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            Os(this, 'isValidPairingTopic', async (e) => {
              if (!(0, Ie.M_r)(e, !1)) {
                const { message: t } = (0, Ie.kCb)(
                  'MISSING_OR_INVALID',
                  `pairing topic should be a string: ${e}`
                );
                throw new Error(t);
              }
              if (!this.pairings.keys.includes(e)) {
                const { message: t } = (0, Ie.kCb)(
                  'NO_MATCHING_KEY',
                  `pairing topic doesn't exist: ${e}`
                );
                throw new Error(t);
              }
              if ((0, Ie.BwD)(this.pairings.get(e).expiry)) {
                await this.deletePairing(e);
                const { message: t } = (0, Ie.kCb)('EXPIRED', `pairing topic: ${e}`);
                throw new Error(t);
              }
            }),
            (this.core = e),
            (this.logger = he(t, this.name)),
            (this.pairings = new Ss(this.core, this.logger, this.name, this.storagePrefix));
        }
        get context() {
          return ce(this.logger);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = (0, Ie.kCb)('NOT_INITIALIZED', this.name);
            throw new Error(e);
          }
        }
        registerRelayerEvents() {
          this.core.relayer.on(gt, async (e) => {
            const { topic: t, message: r, transportType: i } = e;
            if (
              this.pairings.keys.includes(t) &&
              i !== xt.link_mode &&
              !this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r))
            )
              try {
                const e = await this.core.crypto.decode(t, r);
                Je(e)
                  ? (this.core.history.set(t, e),
                    await this.onRelayEventRequest({ topic: t, payload: e }))
                  : Ze(e) &&
                    (await this.core.history.resolve(e),
                    await this.onRelayEventResponse({ topic: t, payload: e }),
                    this.core.history.delete(t, e.id)),
                  await this.core.relayer.messages.ack(t, r);
              } catch (n) {
                this.logger.error(n);
              }
          });
        }
        registerExpirerEvents() {
          this.core.expirer.on(Ft, async (e) => {
            const { topic: t } = (0, Ie.iPz)(e.target);
            t &&
              this.pairings.keys.includes(t) &&
              (await this.deletePairing(t, !0), this.events.emit(qt, { topic: t }));
          });
        }
      }
      var xs = Object.defineProperty,
        As = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? xs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class Ts extends ye {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            As(this, 'records', new Map()),
            As(this, 'events', new i.EventEmitter()),
            As(this, 'name', 'history'),
            As(this, 'version', '0.3'),
            As(this, 'cached', []),
            As(this, 'initialized', !1),
            As(this, 'storagePrefix', ct),
            As(this, 'init', async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                await this.restore(),
                this.cached.forEach((e) => this.records.set(e.id, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            As(this, 'set', (e, t, r) => {
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
              const i = {
                id: t.id,
                topic: e,
                request: { method: t.method, params: t.params || null },
                chainId: r,
                expiry: (0, Ie.gn4)(s.THIRTY_DAYS),
              };
              this.records.set(i.id, i), this.persist(), this.events.emit($t, i);
            }),
            As(this, 'resolve', async (e) => {
              if (
                (this.isInitialized(),
                this.logger.debug('Updating JSON-RPC response history record'),
                this.logger.trace({ type: 'method', method: 'update', response: e }),
                !this.records.has(e.id))
              )
                return;
              const t = await this.getRecord(e.id);
              typeof t.response > 'u' &&
                ((t.response = Xe(e) ? { error: e.error } : { result: e.result }),
                this.records.set(t.id, t),
                this.persist(),
                this.events.emit(Mt, t));
            }),
            As(
              this,
              'get',
              async (e, t) => (
                this.isInitialized(),
                this.logger.debug('Getting record'),
                this.logger.trace({ type: 'method', method: 'get', topic: e, id: t }),
                await this.getRecord(t)
              )
            ),
            As(this, 'delete', (e, t) => {
              this.isInitialized(),
                this.logger.debug('Deleting record'),
                this.logger.trace({ type: 'method', method: 'delete', id: t }),
                this.values.forEach((r) => {
                  if (r.topic === e) {
                    if (typeof t < 'u' && r.id !== t) return;
                    this.records.delete(r.id), this.events.emit(zt, r);
                  }
                }),
                this.persist();
            }),
            As(
              this,
              'exists',
              async (e, t) => (
                this.isInitialized(), !!this.records.has(t) && (await this.getRecord(t)).topic === e
              )
            ),
            As(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            As(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            As(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            As(this, 'removeListener', (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = he(t, this.name));
        }
        get context() {
          return ce(this.logger);
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
          const e = [];
          return (
            this.values.forEach((t) => {
              if (typeof t.response < 'u') return;
              const r = {
                topic: t.topic,
                request: Be(t.request.method, t.request.params, t.id),
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
          const t = this.records.get(e);
          if (!t) {
            const { message: t } = (0, Ie.kCb)('NO_MATCHING_KEY', `${this.name}: ${e}`);
            throw new Error(t);
          }
          return t;
        }
        async persist() {
          await this.setJsonRpcRecords(this.values), this.events.emit(Ht);
        }
        async restore() {
          try {
            const e = await this.getJsonRpcRecords();
            if (typeof e > 'u' || !e.length) return;
            if (this.records.size) {
              const { message: e } = (0, Ie.kCb)('RESTORE_WILL_OVERRIDE', this.name);
              throw (this.logger.error(e), new Error(e));
            }
            (this.cached = e),
              this.logger.debug(`Successfully Restored records for ${this.name}`),
              this.logger.trace({ type: 'method', method: 'restore', records: this.values });
          } catch (He) {
            this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(He);
          }
        }
        registerEventListeners() {
          this.events.on($t, (e) => {
            const t = $t;
            this.logger.info(`Emitting ${t}`),
              this.logger.debug({ type: 'event', event: t, record: e });
          }),
            this.events.on(Mt, (e) => {
              const t = Mt;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, record: e });
            }),
            this.events.on(zt, (e) => {
              const t = zt;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, record: e });
            }),
            this.core.heartbeat.on(h, () => {
              this.cleanup();
            });
        }
        cleanup() {
          try {
            this.isInitialized();
            let e = !1;
            this.records.forEach((t) => {
              (0, s.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 &&
                (this.logger.info(`Deleting expired history log: ${t.id}`),
                this.records.delete(t.id),
                this.events.emit(zt, t, !1),
                (e = !0));
            }),
              e && this.persist();
          } catch (He) {
            this.logger.warn(He);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = (0, Ie.kCb)('NOT_INITIALIZED', this.name);
            throw new Error(e);
          }
        }
      }
      var Ns = Object.defineProperty,
        Cs = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? Ns(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class Rs extends ve {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            Cs(this, 'expirations', new Map()),
            Cs(this, 'events', new i.EventEmitter()),
            Cs(this, 'name', 'expirer'),
            Cs(this, 'version', '0.3'),
            Cs(this, 'cached', []),
            Cs(this, 'initialized', !1),
            Cs(this, 'storagePrefix', ct),
            Cs(this, 'init', async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                await this.restore(),
                this.cached.forEach((e) => this.expirations.set(e.target, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            Cs(this, 'has', (e) => {
              try {
                const t = this.formatTarget(e);
                return typeof this.getExpiration(t) < 'u';
              } catch {
                return !1;
              }
            }),
            Cs(this, 'set', (e, t) => {
              this.isInitialized();
              const r = this.formatTarget(e),
                i = { target: r, expiry: t };
              this.expirations.set(r, i),
                this.checkExpiry(r, i),
                this.events.emit(Vt, { target: r, expiration: i });
            }),
            Cs(this, 'get', (e) => {
              this.isInitialized();
              const t = this.formatTarget(e);
              return this.getExpiration(t);
            }),
            Cs(this, 'del', (e) => {
              if ((this.isInitialized(), this.has(e))) {
                const t = this.formatTarget(e),
                  r = this.getExpiration(t);
                this.expirations.delete(t), this.events.emit(Kt, { target: t, expiration: r });
              }
            }),
            Cs(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            Cs(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            Cs(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            Cs(this, 'removeListener', (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = he(t, this.name));
        }
        get context() {
          return ce(this.logger);
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
          if ('string' == typeof e) return (0, Ie.Z42)(e);
          if ('number' == typeof e) return (0, Ie.GqV)(e);
          const { message: t } = (0, Ie.kCb)('UNKNOWN_TYPE', 'Target type: ' + typeof e);
          throw new Error(t);
        }
        async setExpirations(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getExpirations() {
          return await this.core.storage.getItem(this.storageKey);
        }
        async persist() {
          await this.setExpirations(this.values), this.events.emit(Wt);
        }
        async restore() {
          try {
            const e = await this.getExpirations();
            if (typeof e > 'u' || !e.length) return;
            if (this.expirations.size) {
              const { message: e } = (0, Ie.kCb)('RESTORE_WILL_OVERRIDE', this.name);
              throw (this.logger.error(e), new Error(e));
            }
            (this.cached = e),
              this.logger.debug(`Successfully Restored expirations for ${this.name}`),
              this.logger.trace({ type: 'method', method: 'restore', expirations: this.values });
          } catch (He) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`),
              this.logger.error(He);
          }
        }
        getExpiration(e) {
          const t = this.expirations.get(e);
          if (!t) {
            const { message: t } = (0, Ie.kCb)('NO_MATCHING_KEY', `${this.name}: ${e}`);
            throw (this.logger.warn(t), new Error(t));
          }
          return t;
        }
        checkExpiry(e, t) {
          const { expiry: r } = t;
          (0, s.toMiliseconds)(r) - Date.now() <= 0 && this.expire(e, t);
        }
        expire(e, t) {
          this.expirations.delete(e), this.events.emit(Ft, { target: e, expiration: t });
        }
        checkExpirations() {
          this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e));
        }
        registerEventListeners() {
          this.core.heartbeat.on(h, () => this.checkExpirations()),
            this.events.on(Vt, (e) => {
              const t = Vt;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, data: e }),
                this.persist();
            }),
            this.events.on(Ft, (e) => {
              const t = Ft;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, data: e }),
                this.persist();
            }),
            this.events.on(Kt, (e) => {
              const t = Kt;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, data: e }),
                this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = (0, Ie.kCb)('NOT_INITIALIZED', this.name);
            throw new Error(e);
          }
        }
      }
      var ks = Object.defineProperty,
        js = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? ks(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class Ds extends class {
        constructor(e, t, r) {
          (this.core = e), (this.logger = t), (this.store = r);
        }
      } {
        constructor(e, t, r) {
          super(e, t, r),
            (this.core = e),
            (this.logger = t),
            (this.store = r),
            js(this, 'name', 'verify-api'),
            js(this, 'abortController'),
            js(this, 'isDevEnv'),
            js(this, 'verifyUrlV3', Jt),
            js(this, 'storagePrefix', ct),
            js(this, 'version', 2),
            js(this, 'publicKey'),
            js(this, 'fetchPromise'),
            js(this, 'init', async () => {
              var e;
              this.isDevEnv ||
                ((this.publicKey = await this.store.getItem(this.storeKey)),
                this.publicKey &&
                  (0, s.toMiliseconds)(null == (e = this.publicKey) ? void 0 : e.expiresAt) <
                    Date.now() &&
                  (this.logger.debug('verify v2 public key expired'),
                  await this.removePublicKey()));
            }),
            js(this, 'register', async (e) => {
              if (!(0, Ie.jUY)() || this.isDevEnv) return;
              const t = window.location.origin,
                { id: r, decryptedId: i } = e,
                n = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${t}&id=${r}&decryptedId=${i}`;
              try {
                const e = (0, nt.getDocument)(),
                  t = this.startAbortTimer(5 * s.ONE_SECOND),
                  i = await new Promise((i, s) => {
                    const o = () => {
                      window.removeEventListener('message', c),
                        e.body.removeChild(a),
                        s('attestation aborted');
                    };
                    this.abortController.signal.addEventListener('abort', o);
                    const a = e.createElement('iframe');
                    (a.src = n),
                      (a.style.display = 'none'),
                      a.addEventListener('error', o, { signal: this.abortController.signal });
                    const c = (n) => {
                      if (n.data && 'string' == typeof n.data)
                        try {
                          const s = JSON.parse(n.data);
                          if ('verify_attestation' === s.type) {
                            if ((0, Ee.xp)(s.attestation).payload.id !== r) return;
                            clearInterval(t),
                              e.body.removeChild(a),
                              this.abortController.signal.removeEventListener('abort', o),
                              window.removeEventListener('message', c),
                              i(null === s.attestation ? '' : s.attestation);
                          }
                        } catch (s) {
                          this.logger.warn(s);
                        }
                    };
                    e.body.appendChild(a),
                      window.addEventListener('message', c, {
                        signal: this.abortController.signal,
                      });
                  });
                return this.logger.debug('jwt attestation', i), i;
              } catch (z) {
                this.logger.warn(z);
              }
              return '';
            }),
            js(this, 'resolve', async (e) => {
              if (this.isDevEnv) return '';
              const { attestationId: t, hash: r, encryptedId: i } = e;
              if ('' === t)
                return void this.logger.debug('resolve: attestationId is empty, skipping');
              if (t) {
                if ((0, Ee.xp)(t).payload.id !== i) return;
                const e = await this.isValidJwtAttestation(t);
                if (e)
                  return e.isVerified
                    ? e
                    : void this.logger.warn('resolve: jwt attestation: origin url not verified');
              }
              if (!r) return;
              const n = this.getVerifyUrl(e?.verifyUrl);
              return this.fetchAttestation(r, n);
            }),
            js(this, 'fetchAttestation', async (e, t) => {
              this.logger.debug(`resolving attestation: ${e} from url: ${t}`);
              const r = this.startAbortTimer(5 * s.ONE_SECOND),
                i = await fetch(`${t}/attestation/${e}?v2Supported=true`, {
                  signal: this.abortController.signal,
                });
              return clearTimeout(r), 200 === i.status ? await i.json() : void 0;
            }),
            js(this, 'getVerifyUrl', (e) => {
              let t = e || Yt;
              return (
                Zt.includes(t) ||
                  (this.logger.info(
                    `verify url: ${t}, not included in trusted list, assigning default: ${Yt}`
                  ),
                  (t = Yt)),
                t
              );
            }),
            js(this, 'fetchPublicKey', async () => {
              try {
                this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
                const e = this.startAbortTimer(s.FIVE_SECONDS),
                  t = await fetch(`${this.verifyUrlV3}/public-key`, {
                    signal: this.abortController.signal,
                  });
                return clearTimeout(e), await t.json();
              } catch (c) {
                this.logger.warn(c);
              }
            }),
            js(this, 'persistPublicKey', async (e) => {
              this.logger.debug('persisting public key to local storage', e),
                await this.store.setItem(this.storeKey, e),
                (this.publicKey = e);
            }),
            js(this, 'removePublicKey', async () => {
              this.logger.debug('removing verify v2 public key from storage'),
                await this.store.removeItem(this.storeKey),
                (this.publicKey = void 0);
            }),
            js(this, 'isValidJwtAttestation', async (e) => {
              const t = await this.getPublicKey();
              try {
                if (t) return this.validateAttestation(e, t);
              } catch (ue) {
                this.logger.error(ue), this.logger.warn('error validating attestation');
              }
              const r = await this.fetchAndPersistPublicKey();
              try {
                if (r) return this.validateAttestation(e, r);
              } catch (ue) {
                this.logger.error(ue), this.logger.warn('error validating attestation');
              }
            }),
            js(this, 'getPublicKey', async () =>
              this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey()
            ),
            js(this, 'fetchAndPersistPublicKey', async () => {
              if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
              this.fetchPromise = new Promise(async (e) => {
                const t = await this.fetchPublicKey();
                t && (await this.persistPublicKey(t), e(t));
              });
              const e = await this.fetchPromise;
              return (this.fetchPromise = void 0), e;
            }),
            js(this, 'validateAttestation', (e, t) => {
              const r = (0, Ie.NbI)(e, t.publicKey),
                i = { hasExpired: (0, s.toMiliseconds)(r.exp) < Date.now(), payload: r };
              if (i.hasExpired)
                throw (
                  (this.logger.warn('resolve: jwt attestation expired'),
                  new Error('JWT attestation expired'))
                );
              return {
                origin: i.payload.origin,
                isScam: i.payload.isScam,
                isVerified: i.payload.isVerified,
              };
            }),
            (this.logger = he(t, this.name)),
            (this.abortController = new AbortController()),
            (this.isDevEnv = (0, Ie.h9F)()),
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
          return ce(this.logger);
        }
        startAbortTimer(e) {
          return (
            (this.abortController = new AbortController()),
            setTimeout(() => this.abortController.abort(), (0, s.toMiliseconds)(e))
          );
        }
      }
      var Ls = Object.defineProperty,
        qs = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? Ls(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class Us extends class {
        constructor(e, t) {
          (this.projectId = e), (this.logger = t);
        }
      } {
        constructor(e, t) {
          super(e, t),
            (this.projectId = e),
            (this.logger = t),
            qs(this, 'context', 'echo'),
            qs(this, 'registerDeviceToken', async (e) => {
              const { clientId: t, token: r, notificationType: i, enableEncrypted: n = !1 } = e,
                s = `https://echo.walletconnect.com/${this.projectId}/clients`;
              await fetch(s, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ client_id: t, type: i, token: r, always_raw: n }),
              });
            }),
            (this.logger = he(t, this.context));
        }
      }
      var Bs = Object.defineProperty,
        $s = Object.getOwnPropertySymbols,
        Ms = Object.prototype.hasOwnProperty,
        zs = Object.prototype.propertyIsEnumerable,
        Hs = (e, t, r) =>
          t in e
            ? Bs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        Vs = (e, t) => {
          for (var r in t || (t = {})) Ms.call(t, r) && Hs(e, r, t[r]);
          if ($s) for (var r of $s(t)) zs.call(t, r) && Hs(e, r, t[r]);
          return e;
        },
        Ks = (e, t, r) => Hs(e, 'symbol' != typeof t ? t + '' : t, r);
      class Fs extends class {
        constructor(e, t, r) {
          (this.core = e), (this.logger = t), (this.telemetryEnabled = r);
        }
      } {
        constructor(e, t, r = !0) {
          super(e, t, r),
            (this.core = e),
            (this.logger = t),
            Ks(this, 'context', 'event-client'),
            Ks(this, 'storagePrefix', ct),
            Ks(this, 'storageVersion', 0.1),
            Ks(this, 'events', new Map()),
            Ks(this, 'shouldPersist', !1),
            Ks(this, 'init', async () => {
              if (!(0, Ie.h9F)())
                try {
                  const e = {
                    eventId: (0, Ie.k$y)(),
                    timestamp: Date.now(),
                    domain: this.getAppDomain(),
                    props: {
                      event: 'INIT',
                      type: '',
                      properties: {
                        client_id: await this.core.crypto.getClientId(),
                        user_agent: (0, Ie.oIp)(
                          this.core.relayer.protocol,
                          this.core.relayer.version,
                          _t
                        ),
                      },
                    },
                  };
                  await this.sendEvent([e]);
                } catch (c) {
                  this.logger.warn(c);
                }
            }),
            Ks(this, 'createEvent', (e) => {
              const {
                  event: t = 'ERROR',
                  type: r = '',
                  properties: { topic: i, trace: n },
                } = e,
                s = (0, Ie.k$y)(),
                o = this.core.projectId || '',
                a = Date.now(),
                c = Vs(
                  {
                    eventId: s,
                    timestamp: a,
                    props: { event: t, type: r, properties: { topic: i, trace: n } },
                    bundleId: o,
                    domain: this.getAppDomain(),
                  },
                  this.setMethods(s)
                );
              return this.telemetryEnabled && (this.events.set(s, c), (this.shouldPersist = !0)), c;
            }),
            Ks(this, 'getEvent', (e) => {
              const { eventId: t, topic: r } = e;
              if (t) return this.events.get(t);
              const i = Array.from(this.events.values()).find(
                (e) => e.props.properties.topic === r
              );
              return i ? Vs(Vs({}, i), this.setMethods(i.eventId)) : void 0;
            }),
            Ks(this, 'deleteEvent', (e) => {
              const { eventId: t } = e;
              this.events.delete(t), (this.shouldPersist = !0);
            }),
            Ks(this, 'setEventListeners', () => {
              this.core.heartbeat.on(h, async () => {
                this.shouldPersist && (await this.persist()),
                  this.events.forEach((e) => {
                    (0, s.fromMiliseconds)(Date.now()) - (0, s.fromMiliseconds)(e.timestamp) >
                      86400 && (this.events.delete(e.eventId), (this.shouldPersist = !0));
                  });
              });
            }),
            Ks(this, 'setMethods', (e) => ({
              addTrace: (t) => this.addTrace(e, t),
              setError: (t) => this.setError(e, t),
            })),
            Ks(this, 'addTrace', (e, t) => {
              const r = this.events.get(e);
              r &&
                (r.props.properties.trace.push(t),
                this.events.set(e, r),
                (this.shouldPersist = !0));
            }),
            Ks(this, 'setError', (e, t) => {
              const r = this.events.get(e);
              r &&
                ((r.props.type = t),
                (r.timestamp = Date.now()),
                this.events.set(e, r),
                (this.shouldPersist = !0));
            }),
            Ks(this, 'persist', async () => {
              await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())),
                (this.shouldPersist = !1);
            }),
            Ks(this, 'restore', async () => {
              try {
                const e = (await this.core.storage.getItem(this.storageKey)) || [];
                if (!e.length) return;
                e.forEach((e) => {
                  this.events.set(e.eventId, Vs(Vs({}, e), this.setMethods(e.eventId)));
                });
              } catch (c) {
                this.logger.warn(c);
              }
            }),
            Ks(this, 'submit', async () => {
              if (!this.telemetryEnabled || 0 === this.events.size) return;
              const e = [];
              for (const [r, i] of this.events) i.props.type && e.push(i);
              if (0 !== e.length)
                try {
                  if ((await this.sendEvent(e)).ok)
                    for (const t of e) this.events.delete(t.eventId), (this.shouldPersist = !0);
                } catch (t) {
                  this.logger.warn(t);
                }
            }),
            Ks(this, 'sendEvent', async (e) => {
              const t = this.getAppDomain() ? '' : '&sp=desktop';
              return await fetch(
                `https://pulse.walletconnect.org/batch?projectId=${this.core.projectId}&st=events_sdk&sv=js-${_t}${t}`,
                { method: 'POST', body: JSON.stringify(e) }
              );
            }),
            Ks(this, 'getAppDomain', () => (0, Ie.DaH)().url),
            (this.logger = he(t, this.context)),
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
      var Ws = Object.defineProperty,
        Gs = Object.getOwnPropertySymbols,
        Ys = Object.prototype.hasOwnProperty,
        Js = Object.prototype.propertyIsEnumerable,
        Zs = (e, t, r) =>
          t in e
            ? Ws(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        Qs = (e, t) => {
          for (var r in t || (t = {})) Ys.call(t, r) && Zs(e, r, t[r]);
          if (Gs) for (var r of Gs(t)) Js.call(t, r) && Zs(e, r, t[r]);
          return e;
        },
        Xs = (e, t, r) => Zs(e, 'symbol' != typeof t ? t + '' : t, r);
      class eo extends pe {
        constructor(e) {
          var t;
          super(e),
            Xs(this, 'protocol', 'wc'),
            Xs(this, 'version', 2),
            Xs(this, 'name', at),
            Xs(this, 'relayUrl'),
            Xs(this, 'projectId'),
            Xs(this, 'customStoragePrefix'),
            Xs(this, 'events', new i.EventEmitter()),
            Xs(this, 'logger'),
            Xs(this, 'heartbeat'),
            Xs(this, 'relayer'),
            Xs(this, 'crypto'),
            Xs(this, 'storage'),
            Xs(this, 'history'),
            Xs(this, 'expirer'),
            Xs(this, 'pairing'),
            Xs(this, 'verify'),
            Xs(this, 'echoClient'),
            Xs(this, 'linkModeSupportedApps'),
            Xs(this, 'eventClient'),
            Xs(this, 'initialized', !1),
            Xs(this, 'logChunkController'),
            Xs(this, 'on', (e, t) => this.events.on(e, t)),
            Xs(this, 'once', (e, t) => this.events.once(e, t)),
            Xs(this, 'off', (e, t) => this.events.off(e, t)),
            Xs(this, 'removeListener', (e, t) => this.events.removeListener(e, t)),
            Xs(this, 'dispatchEnvelope', ({ topic: e, message: t, sessionExists: r }) => {
              if (!e || !t) return;
              const i = {
                topic: e,
                message: t,
                publishedAt: Date.now(),
                transportType: xt.link_mode,
              };
              this.relayer.onLinkMessageEvent(i, { sessionExists: r });
            });
          const r = this.getGlobalCore(e?.customStoragePrefix);
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
            } catch (ue) {
              console.warn('Failed to copy global core', ue);
            }
          (this.projectId = e?.projectId),
            (this.relayUrl = e?.relayUrl || ft),
            (this.customStoragePrefix =
              null != e && e.customStoragePrefix ? `:${e.customStoragePrefix}` : '');
          const n = ae({
              level: 'string' == typeof e?.logger && e.logger ? e.logger : ht,
              name: at,
            }),
            { logger: s, chunkLoggerController: o } = le({
              opts: n,
              maxSizeInBytes: e?.maxLogBlobSizeInBytes,
              loggerOverride: e?.logger,
            });
          (this.logChunkController = o),
            null != (t = this.logChunkController) &&
              t.downloadLogsBlobInBrowser &&
              (window.downloadLogsBlobInBrowser = async () => {
                var e, t;
                null != (e = this.logChunkController) &&
                  e.downloadLogsBlobInBrowser &&
                  (null == (t = this.logChunkController) ||
                    t.downloadLogsBlobInBrowser({ clientId: await this.crypto.getClientId() }));
              }),
            (this.logger = he(s, this.name)),
            (this.heartbeat = new l()),
            (this.crypto = new wn(this, this.logger, e?.keychain)),
            (this.history = new Ts(this, this.logger)),
            (this.expirer = new Rs(this, this.logger)),
            (this.storage =
              null != e && e.storage ? e.storage : new z(Qs(Qs({}, lt), e?.storageOptions))),
            (this.relayer = new os({
              core: this,
              logger: this.logger,
              relayUrl: this.relayUrl,
              projectId: this.projectId,
            })),
            (this.pairing = new _s(this, this.logger)),
            (this.verify = new Ds(this, this.logger, this.storage)),
            (this.echoClient = new Us(this.projectId || '', this.logger)),
            (this.linkModeSupportedApps = []),
            (this.eventClient = new Fs(this, this.logger, e?.telemetryEnabled)),
            this.setGlobalCore(this);
        }
        static async init(e) {
          const t = new eo(e);
          await t.initialize();
          const r = await t.crypto.getClientId();
          return await t.storage.setItem('WALLETCONNECT_CLIENT_ID', r), t;
        }
        get context() {
          return ce(this.logger);
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
            await this.storage.setItem(Nt, this.linkModeSupportedApps));
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
              (this.linkModeSupportedApps = (await this.storage.getItem(Nt)) || []),
              (this.initialized = !0),
              this.logger.info('Core Initialization Success');
          } catch (He) {
            throw (
              (this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, He),
              this.logger.error(He.message),
              He)
            );
          }
        }
        getGlobalCore(e = '') {
          try {
            if (this.isGlobalCoreDisabled()) return;
            const t = `_walletConnectCore_${e}`,
              r = `${t}_count`;
            return (
              (globalThis[r] = (globalThis[r] || 0) + 1),
              globalThis[r] > 1 &&
                console.warn(
                  `WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ${globalThis[r]} times.`
                ),
              globalThis[t]
            );
          } catch (t) {
            return void console.warn('Failed to get global WalletConnect core', t);
          }
        }
        setGlobalCore(e) {
          var t;
          try {
            if (this.isGlobalCoreDisabled()) return;
            const r = `_walletConnectCore_${(null == (t = e.opts) ? void 0 : t.customStoragePrefix) || ''}`;
            globalThis[r] = e;
          } catch (se) {
            console.warn('Failed to set global WalletConnect core', se);
          }
        }
        isGlobalCoreDisabled() {
          try {
            return typeof ot < 'u' && 'true' === ot.env.DISABLE_GLOBAL_CORE;
          } catch {
            return !0;
          }
        }
      }
      const to = eo;
      Object.defineProperty;
      Object.defineProperty;
      Object.defineProperty;
      var ro = Object.defineProperty,
        io = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? ro(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      const no = 'client',
        so = 'wc@2:client:',
        oo = no,
        ao = 'error',
        co = 'WALLETCONNECT_DEEPLINK_CHOICE',
        ho = 'Proposal expired',
        lo = s.SEVEN_DAYS,
        uo = {
          wc_sessionPropose: {
            req: { ttl: s.FIVE_MINUTES, prompt: !0, tag: 1100 },
            res: { ttl: s.FIVE_MINUTES, prompt: !1, tag: 1101 },
            reject: { ttl: s.FIVE_MINUTES, prompt: !1, tag: 1120 },
            autoReject: { ttl: s.FIVE_MINUTES, prompt: !1, tag: 1121 },
          },
          wc_sessionSettle: {
            req: { ttl: s.FIVE_MINUTES, prompt: !1, tag: 1102 },
            res: { ttl: s.FIVE_MINUTES, prompt: !1, tag: 1103 },
          },
          wc_sessionUpdate: {
            req: { ttl: s.ONE_DAY, prompt: !1, tag: 1104 },
            res: { ttl: s.ONE_DAY, prompt: !1, tag: 1105 },
          },
          wc_sessionExtend: {
            req: { ttl: s.ONE_DAY, prompt: !1, tag: 1106 },
            res: { ttl: s.ONE_DAY, prompt: !1, tag: 1107 },
          },
          wc_sessionRequest: {
            req: { ttl: s.FIVE_MINUTES, prompt: !0, tag: 1108 },
            res: { ttl: s.FIVE_MINUTES, prompt: !1, tag: 1109 },
          },
          wc_sessionEvent: {
            req: { ttl: s.FIVE_MINUTES, prompt: !0, tag: 1110 },
            res: { ttl: s.FIVE_MINUTES, prompt: !1, tag: 1111 },
          },
          wc_sessionDelete: {
            req: { ttl: s.ONE_DAY, prompt: !1, tag: 1112 },
            res: { ttl: s.ONE_DAY, prompt: !1, tag: 1113 },
          },
          wc_sessionPing: {
            req: { ttl: s.ONE_DAY, prompt: !1, tag: 1114 },
            res: { ttl: s.ONE_DAY, prompt: !1, tag: 1115 },
          },
          wc_sessionAuthenticate: {
            req: { ttl: s.ONE_HOUR, prompt: !0, tag: 1116 },
            res: { ttl: s.ONE_HOUR, prompt: !1, tag: 1117 },
            reject: { ttl: s.FIVE_MINUTES, prompt: !1, tag: 1118 },
            autoReject: { ttl: s.FIVE_MINUTES, prompt: !1, tag: 1119 },
          },
        },
        po = { min: s.FIVE_MINUTES, max: s.SEVEN_DAYS },
        fo = 'IDLE',
        go = 'ACTIVE',
        yo = {
          eth_sendTransaction: { key: '' },
          eth_sendRawTransaction: { key: '' },
          wallet_sendCalls: { key: '' },
          solana_signTransaction: { key: 'signature' },
          solana_signAllTransactions: { key: 'transactions' },
          solana_signAndSendTransaction: { key: 'signature' },
        },
        mo = ['wc_sessionPropose', 'wc_sessionRequest', 'wc_authRequest', 'wc_sessionAuthenticate'],
        wo = 'wc@1.5:auth:',
        bo = `${wo}:PUB_KEY`;
      var vo = Object.defineProperty,
        Eo = Object.defineProperties,
        Io = Object.getOwnPropertyDescriptors,
        So = Object.getOwnPropertySymbols,
        Po = Object.prototype.hasOwnProperty,
        Oo = Object.prototype.propertyIsEnumerable,
        _o = (e, t, r) =>
          t in e
            ? vo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        xo = (e, t) => {
          for (var r in t || (t = {})) Po.call(t, r) && _o(e, r, t[r]);
          if (So) for (var r of So(t)) Oo.call(t, r) && _o(e, r, t[r]);
          return e;
        },
        Ao = (e, t) => Eo(e, Io(t)),
        To = (e, t, r) => _o(e, 'symbol' != typeof t ? t + '' : t, r);
      class No extends class {
        constructor(e) {
          this.client = e;
        }
      } {
        constructor(e) {
          super(e),
            To(this, 'name', 'engine'),
            To(this, 'events', new (n())()),
            To(this, 'initialized', !1),
            To(this, 'requestQueue', { state: fo, queue: [] }),
            To(this, 'sessionRequestQueue', { state: fo, queue: [] }),
            To(this, 'requestQueueDelay', s.ONE_SECOND),
            To(this, 'expectedPairingMethodMap', new Map()),
            To(this, 'recentlyDeletedMap', new Map()),
            To(this, 'recentlyDeletedLimit', 200),
            To(this, 'relayMessageCache', []),
            To(this, 'pendingSessions', new Map()),
            To(this, 'init', async () => {
              this.initialized ||
                (await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                this.registerPairingEvents(),
                await this.registerLinkModeListeners(),
                this.client.core.pairing.register({ methods: Object.keys(uo) }),
                (this.initialized = !0),
                setTimeout(
                  async () => {
                    await this.processPendingMessageEvents(),
                      (this.sessionRequestQueue.queue = this.getPendingSessionRequests()),
                      this.processSessionRequestQueue();
                  },
                  (0, s.toMiliseconds)(this.requestQueueDelay)
                ));
            }),
            To(this, 'connect', async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              const t = Ao(xo({}, e), {
                requiredNamespaces: e.requiredNamespaces || {},
                optionalNamespaces: e.optionalNamespaces || {},
              });
              await this.isValidConnect(t);
              const {
                pairingTopic: r,
                requiredNamespaces: i,
                optionalNamespaces: n,
                sessionProperties: o,
                scopedProperties: a,
                relays: c,
              } = t;
              let h,
                l = r,
                u = !1;
              try {
                if (l) {
                  const e = this.client.core.pairing.pairings.get(l);
                  this.client.logger.warn(
                    'connect() with existing pairing topic is deprecated and will be removed in the next major release.'
                  ),
                    (u = e.active);
                }
              } catch (re) {
                throw (this.client.logger.error(`connect() -> pairing.get(${l}) failed`), re);
              }
              if (!l || !u) {
                const { topic: e, uri: t } = await this.client.core.pairing.create();
                (l = e), (h = t);
              }
              if (!l) {
                const { message: e } = (0, Ie.kCb)(
                  'NO_MATCHING_KEY',
                  `connect() pairing topic: ${l}`
                );
                throw new Error(e);
              }
              const d = await this.client.core.crypto.generateKeyPair(),
                p = uo.wc_sessionPropose.req.ttl || s.FIVE_MINUTES,
                f = (0, Ie.gn4)(p),
                g = Ao(
                  xo(
                    xo(
                      {
                        requiredNamespaces: i,
                        optionalNamespaces: n,
                        relays: c ?? [{ protocol: 'irn' }],
                        proposer: { publicKey: d, metadata: this.client.metadata },
                        expiryTimestamp: f,
                        pairingTopic: l,
                      },
                      o && { sessionProperties: o }
                    ),
                    a && { scopedProperties: a }
                  ),
                  { id: qe() }
                ),
                y = (0, Ie.E0T)('session_connect', g.id),
                { reject: m, resolve: w, done: b } = (0, Ie.H1S)(p, ho),
                v = ({ id: e }) => {
                  e === g.id &&
                    (this.client.events.off('proposal_expire', v),
                    this.pendingSessions.delete(g.id),
                    this.events.emit(y, { error: { message: ho, code: 0 } }));
                };
              return (
                this.client.events.on('proposal_expire', v),
                this.events.once(y, ({ error: e, session: t }) => {
                  this.client.events.off('proposal_expire', v), e ? m(e) : t && w(t);
                }),
                await this.sendRequest({
                  topic: l,
                  method: 'wc_sessionPropose',
                  params: g,
                  throwOnFailedPublish: !0,
                  clientRpcId: g.id,
                }),
                await this.setProposal(g.id, g),
                { uri: h, approval: b }
              );
            }),
            To(this, 'pair', async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                return await this.client.core.pairing.pair(e);
              } catch (t) {
                throw (this.client.logger.error('pair() failed'), t);
              }
            }),
            To(this, 'approve', async (e) => {
              var t, r, i;
              const n = this.client.core.eventClient.createEvent({
                properties: { topic: null == (t = e?.id) ? void 0 : t.toString(), trace: [fr] },
              });
              try {
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
              } catch (S) {
                throw (n.setError(Sr), S);
              }
              try {
                await this.isValidProposalId(e?.id);
              } catch (S) {
                throw (
                  (this.client.logger.error(`approve() -> proposal.get(${e?.id}) failed`),
                  n.setError(Tr),
                  S)
                );
              }
              try {
                await this.isValidApprove(e);
              } catch (S) {
                throw (
                  (this.client.logger.error('approve() -> isValidApprove() failed'),
                  n.setError(Ar),
                  S)
                );
              }
              const {
                  id: s,
                  relayProtocol: o,
                  namespaces: a,
                  sessionProperties: c,
                  scopedProperties: h,
                  sessionConfig: l,
                } = e,
                u = this.client.proposal.get(s);
              this.client.core.eventClient.deleteEvent({ eventId: n.eventId });
              const {
                pairingTopic: d,
                proposer: p,
                requiredNamespaces: f,
                optionalNamespaces: g,
              } = u;
              let y =
                null == (r = this.client.core.eventClient) ? void 0 : r.getEvent({ topic: d });
              y ||
                (y =
                  null == (i = this.client.core.eventClient)
                    ? void 0
                    : i.createEvent({ type: fr, properties: { topic: d, trace: [fr, gr] } }));
              const m = await this.client.core.crypto.generateKeyPair(),
                w = p.publicKey,
                b = await this.client.core.crypto.generateSharedKey(m, w),
                v = xo(
                  xo(
                    xo(
                      {
                        relay: { protocol: o ?? 'irn' },
                        namespaces: a,
                        controller: { publicKey: m, metadata: this.client.metadata },
                        expiry: (0, Ie.gn4)(lo),
                      },
                      c && { sessionProperties: c }
                    ),
                    h && { scopedProperties: h }
                  ),
                  l && { sessionConfig: l }
                ),
                E = xt.relay;
              y.addTrace(yr);
              try {
                await this.client.core.relayer.subscribe(b, { transportType: E });
              } catch (S) {
                throw (y.setError(Or), S);
              }
              y.addTrace(mr);
              const I = Ao(xo({}, v), {
                topic: b,
                requiredNamespaces: f,
                optionalNamespaces: g,
                pairingTopic: d,
                acknowledged: !1,
                self: v.controller,
                peer: { publicKey: p.publicKey, metadata: p.metadata },
                controller: m,
                transportType: xt.relay,
              });
              await this.client.session.set(b, I), y.addTrace(vr);
              try {
                y.addTrace(Er),
                  await this.sendRequest({
                    topic: b,
                    method: 'wc_sessionSettle',
                    params: v,
                    throwOnFailedPublish: !0,
                  }).catch((e) => {
                    throw (y?.setError(xr), e);
                  }),
                  y.addTrace(Ir),
                  y.addTrace(wr),
                  await this.sendResult({
                    id: s,
                    topic: d,
                    result: { relay: { protocol: o ?? 'irn' }, responderPublicKey: m },
                    throwOnFailedPublish: !0,
                  }).catch((e) => {
                    throw (y?.setError(_r), e);
                  }),
                  y.addTrace(br);
              } catch (S) {
                throw (
                  (this.client.logger.error(S),
                  this.client.session.delete(b, (0, Ie.D6H)('USER_DISCONNECTED')),
                  await this.client.core.relayer.unsubscribe(b),
                  S)
                );
              }
              return (
                this.client.core.eventClient.deleteEvent({ eventId: y.eventId }),
                await this.client.core.pairing.updateMetadata({ topic: d, metadata: p.metadata }),
                await this.client.proposal.delete(s, (0, Ie.D6H)('USER_DISCONNECTED')),
                await this.client.core.pairing.activate({ topic: d }),
                await this.setExpiry(b, (0, Ie.gn4)(lo)),
                { topic: b, acknowledged: () => Promise.resolve(this.client.session.get(b)) }
              );
            }),
            To(this, 'reject', async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidReject(e);
              } catch (n) {
                throw (this.client.logger.error('reject() -> isValidReject() failed'), n);
              }
              const { id: t, reason: r } = e;
              let i;
              try {
                i = this.client.proposal.get(t).pairingTopic;
              } catch (n) {
                throw (this.client.logger.error(`reject() -> proposal.get(${t}) failed`), n);
              }
              i &&
                (await this.sendError({
                  id: t,
                  topic: i,
                  error: r,
                  rpcOpts: uo.wc_sessionPropose.reject,
                }),
                await this.client.proposal.delete(t, (0, Ie.D6H)('USER_DISCONNECTED')));
            }),
            To(this, 'update', async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidUpdate(e);
              } catch (z) {
                throw (this.client.logger.error('update() -> isValidUpdate() failed'), z);
              }
              const { topic: t, namespaces: r } = e,
                { done: i, resolve: n, reject: s } = (0, Ie.H1S)(),
                o = qe(),
                a = Ue().toString(),
                c = this.client.session.get(t).namespaces;
              return (
                this.events.once((0, Ie.E0T)('session_update', o), ({ error: e }) => {
                  e ? s(e) : n();
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
                    s(e);
                }),
                { acknowledged: i }
              );
            }),
            To(this, 'extend', async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidExtend(e);
              } catch (ue) {
                throw (this.client.logger.error('extend() -> isValidExtend() failed'), ue);
              }
              const { topic: t } = e,
                r = qe(),
                { done: i, resolve: n, reject: s } = (0, Ie.H1S)();
              return (
                this.events.once((0, Ie.E0T)('session_extend', r), ({ error: e }) => {
                  e ? s(e) : n();
                }),
                await this.setExpiry(t, (0, Ie.gn4)(lo)),
                this.sendRequest({
                  topic: t,
                  method: 'wc_sessionExtend',
                  params: {},
                  clientRpcId: r,
                  throwOnFailedPublish: !0,
                }).catch((e) => {
                  s(e);
                }),
                { acknowledged: i }
              );
            }),
            To(this, 'request', async (e) => {
              this.isInitialized();
              try {
                await this.isValidRequest(e);
              } catch (L) {
                throw (this.client.logger.error('request() -> isValidRequest() failed'), L);
              }
              const {
                  chainId: t,
                  request: r,
                  topic: i,
                  expiry: n = uo.wc_sessionRequest.req.ttl,
                } = e,
                s = this.client.session.get(i);
              s?.transportType === xt.relay && (await this.confirmOnlineStateOrThrow());
              const o = qe(),
                a = Ue().toString(),
                {
                  done: c,
                  resolve: h,
                  reject: l,
                } = (0, Ie.H1S)(n, 'Request expired. Please try again.');
              this.events.once((0, Ie.E0T)('session_request', o), ({ error: e, result: t }) => {
                e ? l(e) : h(t);
              });
              const u = 'wc_sessionRequest',
                d = this.getAppLinkIfEnabled(s.peer.metadata, s.transportType);
              if (d)
                return (
                  await this.sendRequest({
                    clientRpcId: o,
                    relayRpcId: a,
                    topic: i,
                    method: u,
                    params: {
                      request: Ao(xo({}, r), { expiryTimestamp: (0, Ie.gn4)(n) }),
                      chainId: t,
                    },
                    expiry: n,
                    throwOnFailedPublish: !0,
                    appLink: d,
                  }).catch((e) => l(e)),
                  this.client.events.emit('session_request_sent', {
                    topic: i,
                    request: r,
                    chainId: t,
                    id: o,
                  }),
                  await c()
                );
              const p = { request: Ao(xo({}, r), { expiryTimestamp: (0, Ie.gn4)(n) }), chainId: t },
                f = this.shouldSetTVF(u, p);
              return await Promise.all([
                new Promise(async (e) => {
                  await this.sendRequest(
                    xo(
                      {
                        clientRpcId: o,
                        relayRpcId: a,
                        topic: i,
                        method: u,
                        params: p,
                        expiry: n,
                        throwOnFailedPublish: !0,
                      },
                      f && { tvf: this.getTVFParams(o, p) }
                    )
                  ).catch((e) => l(e)),
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
                  if (null == (t = s.sessionConfig) || !t.disableDeepLink) {
                    const e = await (0, Ie.bW6)(this.client.core.storage, co);
                    await (0, Ie.HhN)({ id: o, topic: i, wcDeepLink: e });
                  }
                  e();
                }),
                c(),
              ]).then((e) => e[2]);
            }),
            To(this, 'respond', async (e) => {
              this.isInitialized(), await this.isValidRespond(e);
              const { topic: t, response: r } = e,
                { id: i } = r,
                n = this.client.session.get(t);
              n.transportType === xt.relay && (await this.confirmOnlineStateOrThrow());
              const s = this.getAppLinkIfEnabled(n.peer.metadata, n.transportType);
              Qe(r)
                ? await this.sendResult({
                    id: i,
                    topic: t,
                    result: r.result,
                    throwOnFailedPublish: !0,
                    appLink: s,
                  })
                : Xe(r) && (await this.sendError({ id: i, topic: t, error: r.error, appLink: s })),
                this.cleanupAfterResponse(e);
            }),
            To(this, 'ping', async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidPing(e);
              } catch (c) {
                throw (this.client.logger.error('ping() -> isValidPing() failed'), c);
              }
              const { topic: t } = e;
              if (this.client.session.keys.includes(t)) {
                const e = qe(),
                  r = Ue().toString(),
                  { done: i, resolve: n, reject: s } = (0, Ie.H1S)();
                this.events.once((0, Ie.E0T)('session_ping', e), ({ error: e }) => {
                  e ? s(e) : n();
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
            To(this, 'emit', async (e) => {
              this.isInitialized(),
                await this.confirmOnlineStateOrThrow(),
                await this.isValidEmit(e);
              const { topic: t, event: r, chainId: i } = e,
                n = Ue().toString(),
                s = qe();
              await this.sendRequest({
                topic: t,
                method: 'wc_sessionEvent',
                params: { event: r, chainId: i },
                throwOnFailedPublish: !0,
                relayRpcId: n,
                clientRpcId: s,
              });
            }),
            To(this, 'disconnect', async (e) => {
              this.isInitialized(),
                await this.confirmOnlineStateOrThrow(),
                await this.isValidDisconnect(e);
              const { topic: t } = e;
              if (this.client.session.keys.includes(t))
                await this.sendRequest({
                  topic: t,
                  method: 'wc_sessionDelete',
                  params: (0, Ie.D6H)('USER_DISCONNECTED'),
                  throwOnFailedPublish: !0,
                }),
                  await this.deleteSession({ topic: t, emitEvent: !1 });
              else {
                if (!this.client.core.pairing.pairings.keys.includes(t)) {
                  const { message: e } = (0, Ie.kCb)(
                    'MISMATCHED_TOPIC',
                    `Session or pairing topic not found: ${t}`
                  );
                  throw new Error(e);
                }
                await this.client.core.pairing.disconnect({ topic: t });
              }
            }),
            To(
              this,
              'find',
              (e) => (
                this.isInitialized(), this.client.session.getAll().filter((t) => (0, Ie.Ih8)(t, e))
              )
            ),
            To(this, 'getPendingSessionRequests', () => this.client.pendingRequest.getAll()),
            To(this, 'authenticate', async (e, t) => {
              var r;
              this.isInitialized(), this.isValidAuthenticate(e);
              const i =
                  t &&
                  this.client.core.linkModeSupportedApps.includes(t) &&
                  (null == (r = this.client.metadata.redirect) ? void 0 : r.linkMode),
                n = i ? xt.link_mode : xt.relay;
              n === xt.relay && (await this.confirmOnlineStateOrThrow());
              const {
                  chains: s,
                  statement: o = '',
                  uri: a,
                  domain: c,
                  nonce: h,
                  type: l,
                  exp: u,
                  nbf: d,
                  methods: p = [],
                  expiry: f,
                } = e,
                g = [...(e.resources || [])],
                { topic: y, uri: m } = await this.client.core.pairing.create({
                  methods: ['wc_sessionAuthenticate'],
                  transportType: n,
                });
              this.client.logger.info({
                message: 'Generated new pairing',
                pairing: { topic: y, uri: m },
              });
              const w = await this.client.core.crypto.generateKeyPair(),
                b = (0, Ie.YmJ)(w);
              if (
                (await Promise.all([
                  this.client.auth.authKeys.set(bo, { responseTopic: b, publicKey: w }),
                  this.client.auth.pairingTopics.set(b, { topic: b, pairingTopic: y }),
                ]),
                await this.client.core.relayer.subscribe(b, { transportType: n }),
                this.client.logger.info(`sending request to new pairing topic: ${y}`),
                p.length > 0)
              ) {
                const { namespace: e } = (0, Ie.DQe)(s[0]);
                let t = (0, Ie.IkP)(e, 'request', p);
                (0, Ie.hA9)(g) && (t = (0, Ie.qJM)(t, g.pop())), g.push(t);
              }
              const v =
                  f && f > uo.wc_sessionAuthenticate.req.ttl
                    ? f
                    : uo.wc_sessionAuthenticate.req.ttl,
                E = {
                  authPayload: {
                    type: l ?? 'caip122',
                    chains: s,
                    statement: o,
                    aud: a,
                    domain: c,
                    version: '1',
                    nonce: h,
                    iat: new Date().toISOString(),
                    exp: u,
                    nbf: d,
                    resources: g,
                  },
                  requester: { publicKey: w, metadata: this.client.metadata },
                  expiryTimestamp: (0, Ie.gn4)(v),
                },
                I = {
                  requiredNamespaces: {},
                  optionalNamespaces: {
                    eip155: {
                      chains: s,
                      methods: [...new Set(['personal_sign', ...p])],
                      events: ['chainChanged', 'accountsChanged'],
                    },
                  },
                  relays: [{ protocol: 'irn' }],
                  pairingTopic: y,
                  proposer: { publicKey: w, metadata: this.client.metadata },
                  expiryTimestamp: (0, Ie.gn4)(uo.wc_sessionPropose.req.ttl),
                  id: qe(),
                },
                { done: S, resolve: P, reject: O } = (0, Ie.H1S)(v, 'Request expired'),
                _ = qe(),
                x = (0, Ie.E0T)('session_connect', I.id),
                A = (0, Ie.E0T)('session_request', _),
                T = async ({ error: e, session: t }) => {
                  this.events.off(A, N), e ? O(e) : t && P({ session: t });
                },
                N = async (e) => {
                  var r, i, s;
                  if (
                    (await this.deletePendingAuthRequest(_, { message: 'fulfilled', code: 0 }),
                    e.error)
                  ) {
                    const t = (0, Ie.D6H)('WC_METHOD_UNSUPPORTED', 'wc_sessionAuthenticate');
                    return e.error.code === t.code
                      ? void 0
                      : (this.events.off(x, T), O(e.error.message));
                  }
                  await this.deleteProposal(I.id), this.events.off(x, T);
                  const { cacaos: o, responder: a } = e.result,
                    c = [],
                    h = [];
                  for (const t of o) {
                    (await (0, Ie.c4l)({ cacao: t, projectId: this.client.core.projectId })) ||
                      (this.client.logger.error(t, 'Signature verification failed'),
                      O((0, Ie.D6H)('SESSION_SETTLEMENT_FAILED', 'Signature verification failed')));
                    const { p: e } = t,
                      r = (0, Ie.hA9)(e.resources),
                      i = [(0, Ie.DJo)(e.iss)],
                      n = (0, Ie.NmC)(e.iss);
                    if (r) {
                      const e = (0, Ie.Y31)(r),
                        t = (0, Ie.ouN)(r);
                      c.push(...e), i.push(...t);
                    }
                    for (const t of i) h.push(`${t}:${n}`);
                  }
                  const l = await this.client.core.crypto.generateSharedKey(w, a.publicKey);
                  let u;
                  c.length > 0 &&
                    ((u = {
                      topic: l,
                      acknowledged: !0,
                      self: { publicKey: w, metadata: this.client.metadata },
                      peer: a,
                      controller: a.publicKey,
                      expiry: (0, Ie.gn4)(lo),
                      requiredNamespaces: {},
                      optionalNamespaces: {},
                      relay: { protocol: 'irn' },
                      pairingTopic: y,
                      namespaces: (0, Ie.E12)([...new Set(c)], [...new Set(h)]),
                      transportType: n,
                    }),
                    await this.client.core.relayer.subscribe(l, { transportType: n }),
                    await this.client.session.set(l, u),
                    y &&
                      (await this.client.core.pairing.updateMetadata({
                        topic: y,
                        metadata: a.metadata,
                      })),
                    (u = this.client.session.get(l))),
                    null != (r = this.client.metadata.redirect) &&
                      r.linkMode &&
                      null != (i = a.metadata.redirect) &&
                      i.linkMode &&
                      null != (s = a.metadata.redirect) &&
                      s.universal &&
                      t &&
                      (this.client.core.addLinkModeSupportedApp(a.metadata.redirect.universal),
                      this.client.session.update(l, { transportType: xt.link_mode })),
                    P({ auths: o, session: u });
                };
              let C;
              this.events.once(x, T), this.events.once(A, N);
              try {
                if (i) {
                  const e = Be('wc_sessionAuthenticate', E, _);
                  this.client.core.history.set(y, e);
                  const r = await this.client.core.crypto.encode('', e, {
                    type: Ie.FpL,
                    encoding: Ie.zl_,
                  });
                  C = (0, Ie.L9d)(t, y, r);
                } else
                  await Promise.all([
                    this.sendRequest({
                      topic: y,
                      method: 'wc_sessionAuthenticate',
                      params: E,
                      expiry: e.expiry,
                      throwOnFailedPublish: !0,
                      clientRpcId: _,
                    }),
                    this.sendRequest({
                      topic: y,
                      method: 'wc_sessionPropose',
                      params: I,
                      expiry: uo.wc_sessionPropose.req.ttl,
                      throwOnFailedPublish: !0,
                      clientRpcId: I.id,
                    }),
                  ]);
              } catch (R) {
                throw (this.events.off(x, T), this.events.off(A, N), R);
              }
              return (
                await this.setProposal(I.id, I),
                await this.setAuthRequest(_, {
                  request: Ao(xo({}, E), { verifyContext: {} }),
                  pairingTopic: y,
                  transportType: n,
                }),
                { uri: C ?? m, response: S }
              );
            }),
            To(this, 'approveSessionAuthenticate', async (e) => {
              const { id: t, auths: r } = e,
                i = this.client.core.eventClient.createEvent({
                  properties: { topic: t.toString(), trace: [Nr] },
                });
              try {
                this.isInitialized();
              } catch (ne) {
                throw (i.setError(qr), ne);
              }
              const n = this.getPendingAuthRequest(t);
              if (!n)
                throw (
                  (i.setError(Mr), new Error(`Could not find pending auth request with id ${t}`))
                );
              const s = n.transportType || xt.relay;
              s === xt.relay && (await this.confirmOnlineStateOrThrow());
              const o = n.requester.publicKey,
                a = await this.client.core.crypto.generateKeyPair(),
                c = (0, Ie.YmJ)(o),
                h = { type: Ie.rVF, receiverPublicKey: o, senderPublicKey: a },
                l = [],
                u = [];
              for (const f of r) {
                if (!(await (0, Ie.c4l)({ cacao: f, projectId: this.client.core.projectId }))) {
                  i.setError(Ur);
                  const e = (0, Ie.D6H)(
                    'SESSION_SETTLEMENT_FAILED',
                    'Signature verification failed'
                  );
                  throw (
                    (await this.sendError({ id: t, topic: c, error: e, encodeOpts: h }),
                    new Error(e.message))
                  );
                }
                i.addTrace(Rr);
                const { p: e } = f,
                  r = (0, Ie.hA9)(e.resources),
                  n = [(0, Ie.DJo)(e.iss)],
                  s = (0, Ie.NmC)(e.iss);
                if (r) {
                  const e = (0, Ie.Y31)(r),
                    t = (0, Ie.ouN)(r);
                  l.push(...e), n.push(...t);
                }
                for (const t of n) u.push(`${t}:${s}`);
              }
              const d = await this.client.core.crypto.generateSharedKey(a, o);
              let p;
              if ((i.addTrace(Cr), l?.length > 0)) {
                (p = {
                  topic: d,
                  acknowledged: !0,
                  self: { publicKey: a, metadata: this.client.metadata },
                  peer: { publicKey: o, metadata: n.requester.metadata },
                  controller: o,
                  expiry: (0, Ie.gn4)(lo),
                  authentication: r,
                  requiredNamespaces: {},
                  optionalNamespaces: {},
                  relay: { protocol: 'irn' },
                  pairingTopic: n.pairingTopic,
                  namespaces: (0, Ie.E12)([...new Set(l)], [...new Set(u)]),
                  transportType: s,
                }),
                  i.addTrace(jr);
                try {
                  await this.client.core.relayer.subscribe(d, { transportType: s });
                } catch (ne) {
                  throw (i.setError(Br), ne);
                }
                i.addTrace(Dr),
                  await this.client.session.set(d, p),
                  i.addTrace(kr),
                  await this.client.core.pairing.updateMetadata({
                    topic: n.pairingTopic,
                    metadata: n.requester.metadata,
                  });
              }
              i.addTrace(Lr);
              try {
                await this.sendResult({
                  topic: c,
                  id: t,
                  result: {
                    cacaos: r,
                    responder: { publicKey: a, metadata: this.client.metadata },
                  },
                  encodeOpts: h,
                  throwOnFailedPublish: !0,
                  appLink: this.getAppLinkIfEnabled(n.requester.metadata, s),
                });
              } catch (ne) {
                throw (i.setError($r), ne);
              }
              return (
                await this.client.auth.requests.delete(t, { message: 'fulfilled', code: 0 }),
                await this.client.core.pairing.activate({ topic: n.pairingTopic }),
                this.client.core.eventClient.deleteEvent({ eventId: i.eventId }),
                { session: p }
              );
            }),
            To(this, 'rejectSessionAuthenticate', async (e) => {
              this.isInitialized();
              const { id: t, reason: r } = e,
                i = this.getPendingAuthRequest(t);
              if (!i) throw new Error(`Could not find pending auth request with id ${t}`);
              i.transportType === xt.relay && (await this.confirmOnlineStateOrThrow());
              const n = i.requester.publicKey,
                s = await this.client.core.crypto.generateKeyPair(),
                o = (0, Ie.YmJ)(n),
                a = { type: Ie.rVF, receiverPublicKey: n, senderPublicKey: s };
              await this.sendError({
                id: t,
                topic: o,
                error: r,
                encodeOpts: a,
                rpcOpts: uo.wc_sessionAuthenticate.reject,
                appLink: this.getAppLinkIfEnabled(i.requester.metadata, i.transportType),
              }),
                await this.client.auth.requests.delete(t, { message: 'rejected', code: 0 }),
                await this.client.proposal.delete(t, (0, Ie.D6H)('USER_DISCONNECTED'));
            }),
            To(this, 'formatAuthMessage', (e) => {
              this.isInitialized();
              const { request: t, iss: r } = e;
              return (0, Ie.wvx)(t, r);
            }),
            To(this, 'processRelayMessageCache', () => {
              setTimeout(async () => {
                if (0 !== this.relayMessageCache.length)
                  for (; this.relayMessageCache.length > 0; )
                    try {
                      const e = this.relayMessageCache.shift();
                      e && (await this.onRelayMessage(e));
                    } catch (He) {
                      this.client.logger.error(He);
                    }
              }, 50);
            }),
            To(this, 'cleanupDuplicatePairings', async (e) => {
              if (e.pairingTopic)
                try {
                  const t = this.client.core.pairing.pairings.get(e.pairingTopic),
                    r = this.client.core.pairing.pairings.getAll().filter((r) => {
                      var i, n;
                      return (
                        (null == (i = r.peerMetadata) ? void 0 : i.url) &&
                        (null == (n = r.peerMetadata) ? void 0 : n.url) === e.peer.metadata.url &&
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
                } catch (t) {
                  this.client.logger.error(t);
                }
            }),
            To(this, 'deleteSession', async (e) => {
              var t;
              const { topic: r, expirerHasDeleted: i = !1, emitEvent: n = !0, id: s = 0 } = e,
                { self: o } = this.client.session.get(r);
              await this.client.core.relayer.unsubscribe(r),
                await this.client.session.delete(r, (0, Ie.D6H)('USER_DISCONNECTED')),
                this.addToRecentlyDeleted(r, 'session'),
                this.client.core.crypto.keychain.has(o.publicKey) &&
                  (await this.client.core.crypto.deleteKeyPair(o.publicKey)),
                this.client.core.crypto.keychain.has(r) &&
                  (await this.client.core.crypto.deleteSymKey(r)),
                i || this.client.core.expirer.del(r),
                this.client.core.storage.removeItem(co).catch((e) => this.client.logger.warn(e)),
                this.getPendingSessionRequests().forEach((e) => {
                  e.topic === r &&
                    this.deletePendingSessionRequest(e.id, (0, Ie.D6H)('USER_DISCONNECTED'));
                }),
                r === (null == (t = this.sessionRequestQueue.queue[0]) ? void 0 : t.topic) &&
                  (this.sessionRequestQueue.state = fo),
                n && this.client.events.emit('session_delete', { id: s, topic: r });
            }),
            To(this, 'deleteProposal', async (e, t) => {
              if (t)
                try {
                  const t = this.client.proposal.get(e);
                  this.client.core.eventClient.getEvent({ topic: t.pairingTopic })?.setError(Pr);
                } catch {}
              await Promise.all([
                this.client.proposal.delete(e, (0, Ie.D6H)('USER_DISCONNECTED')),
                t ? Promise.resolve() : this.client.core.expirer.del(e),
              ]),
                this.addToRecentlyDeleted(e, 'proposal');
            }),
            To(this, 'deletePendingSessionRequest', async (e, t, r = !1) => {
              await Promise.all([
                this.client.pendingRequest.delete(e, t),
                r ? Promise.resolve() : this.client.core.expirer.del(e),
              ]),
                this.addToRecentlyDeleted(e, 'request'),
                (this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter(
                  (t) => t.id !== e
                )),
                r &&
                  ((this.sessionRequestQueue.state = fo),
                  this.client.events.emit('session_request_expire', { id: e }));
            }),
            To(this, 'deletePendingAuthRequest', async (e, t, r = !1) => {
              await Promise.all([
                this.client.auth.requests.delete(e, t),
                r ? Promise.resolve() : this.client.core.expirer.del(e),
              ]);
            }),
            To(this, 'setExpiry', async (e, t) => {
              this.client.session.keys.includes(e) &&
                (this.client.core.expirer.set(e, t),
                await this.client.session.update(e, { expiry: t }));
            }),
            To(this, 'setProposal', async (e, t) => {
              this.client.core.expirer.set(e, (0, Ie.gn4)(uo.wc_sessionPropose.req.ttl)),
                await this.client.proposal.set(e, t);
            }),
            To(this, 'setAuthRequest', async (e, t) => {
              const { request: r, pairingTopic: i, transportType: n = xt.relay } = t;
              this.client.core.expirer.set(e, r.expiryTimestamp),
                await this.client.auth.requests.set(e, {
                  authPayload: r.authPayload,
                  requester: r.requester,
                  expiryTimestamp: r.expiryTimestamp,
                  id: e,
                  pairingTopic: i,
                  verifyContext: r.verifyContext,
                  transportType: n,
                });
            }),
            To(this, 'setPendingSessionRequest', async (e) => {
              const { id: t, topic: r, params: i, verifyContext: n } = e,
                s = i.request.expiryTimestamp || (0, Ie.gn4)(uo.wc_sessionRequest.req.ttl);
              this.client.core.expirer.set(t, s),
                await this.client.pendingRequest.set(t, {
                  id: t,
                  topic: r,
                  params: i,
                  verifyContext: n,
                });
            }),
            To(this, 'sendRequest', async (e) => {
              const {
                  topic: t,
                  method: i,
                  params: n,
                  expiry: s,
                  relayRpcId: o,
                  clientRpcId: a,
                  throwOnFailedPublish: c,
                  appLink: h,
                  tvf: l,
                } = e,
                u = Be(i, n, a);
              let d;
              const p = !!h;
              try {
                const e = p ? Ie.zl_ : Ie.$dT;
                d = await this.client.core.crypto.encode(t, u, { encoding: e });
              } catch (L) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendRequest() -> core.crypto.encode() for topic ${t} failed`
                  ),
                  L)
                );
              }
              let f;
              if (mo.includes(i)) {
                const e = (0, Ie.rjm)(JSON.stringify(u)),
                  t = (0, Ie.rjm)(d);
                f = await this.client.core.verify.register({ id: t, decryptedId: e });
              }
              const g = uo[i].req;
              if (
                ((g.attestation = f),
                s && (g.ttl = s),
                o && (g.id = o),
                this.client.core.history.set(t, u),
                p)
              ) {
                const e = (0, Ie.L9d)(h, t, d);
                await r.g.Linking.openURL(e, this.client.name);
              } else {
                const e = uo[i].req;
                s && (e.ttl = s),
                  o && (e.id = o),
                  (e.tvf = Ao(xo({}, l), { correlationId: u.id })),
                  c
                    ? ((e.internal = Ao(xo({}, e.internal), { throwOnFailedPublish: !0 })),
                      await this.client.core.relayer.publish(t, d, e))
                    : this.client.core.relayer
                        .publish(t, d, e)
                        .catch((e) => this.client.logger.error(e));
              }
              return u.id;
            }),
            To(this, 'sendResult', async (e) => {
              const {
                  id: t,
                  topic: i,
                  result: n,
                  throwOnFailedPublish: s,
                  encodeOpts: o,
                  appLink: a,
                } = e,
                c = $e(t, n);
              let h;
              const l = a && typeof (null == r.g ? void 0 : r.g.Linking) < 'u';
              try {
                const e = l ? Ie.zl_ : Ie.$dT;
                h = await this.client.core.crypto.encode(
                  i,
                  c,
                  Ao(xo({}, o || {}), { encoding: e })
                );
              } catch (p) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendResult() -> core.crypto.encode() for topic ${i} failed`
                  ),
                  p)
                );
              }
              let u, d;
              try {
                u = await this.client.core.history.get(i, t);
                const e = u.request;
                try {
                  this.shouldSetTVF(e.method, e.params) && (d = this.getTVFParams(t, e.params, n));
                } catch (J) {
                  this.client.logger.warn('sendResult() -> getTVFParams() failed', J);
                }
              } catch (p) {
                throw (
                  (this.client.logger.error(`sendResult() -> history.get(${i}, ${t}) failed`), p)
                );
              }
              if (l) {
                const e = (0, Ie.L9d)(a, i, h);
                await r.g.Linking.openURL(e, this.client.name);
              } else {
                const e = u.request.method,
                  r = uo[e].res;
                (r.tvf = Ao(xo({}, d), { correlationId: t })),
                  s
                    ? ((r.internal = Ao(xo({}, r.internal), { throwOnFailedPublish: !0 })),
                      await this.client.core.relayer.publish(i, h, r))
                    : this.client.core.relayer
                        .publish(i, h, r)
                        .catch((e) => this.client.logger.error(e));
              }
              await this.client.core.history.resolve(c);
            }),
            To(this, 'sendError', async (e) => {
              const { id: t, topic: i, error: n, encodeOpts: s, rpcOpts: o, appLink: a } = e,
                c = Me(t, n);
              let h;
              const l = a && typeof (null == r.g ? void 0 : r.g.Linking) < 'u';
              try {
                const e = l ? Ie.zl_ : Ie.$dT;
                h = await this.client.core.crypto.encode(
                  i,
                  c,
                  Ao(xo({}, s || {}), { encoding: e })
                );
              } catch (G) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendError() -> core.crypto.encode() for topic ${i} failed`
                  ),
                  G)
                );
              }
              let u;
              try {
                u = await this.client.core.history.get(i, t);
              } catch (G) {
                throw (
                  (this.client.logger.error(`sendError() -> history.get(${i}, ${t}) failed`), G)
                );
              }
              if (l) {
                const e = (0, Ie.L9d)(a, i, h);
                await r.g.Linking.openURL(e, this.client.name);
              } else {
                const e = u.request.method,
                  t = o || uo[e].res;
                this.client.core.relayer.publish(i, h, t);
              }
              await this.client.core.history.resolve(c);
            }),
            To(this, 'cleanup', async () => {
              const e = [],
                t = [];
              this.client.session.getAll().forEach((t) => {
                let r = !1;
                (0, Ie.BwD)(t.expiry) && (r = !0),
                  this.client.core.crypto.keychain.has(t.topic) || (r = !0),
                  r && e.push(t.topic);
              }),
                this.client.proposal.getAll().forEach((e) => {
                  (0, Ie.BwD)(e.expiryTimestamp) && t.push(e.id);
                }),
                await Promise.all([
                  ...e.map((e) => this.deleteSession({ topic: e })),
                  ...t.map((e) => this.deleteProposal(e)),
                ]);
            }),
            To(this, 'onProviderMessageEvent', async (e) => {
              !this.initialized || this.relayMessageCache.length > 0
                ? this.relayMessageCache.push(e)
                : await this.onRelayMessage(e);
            }),
            To(this, 'onRelayEventRequest', async (e) => {
              this.requestQueue.queue.push(e), await this.processRequestsQueue();
            }),
            To(this, 'processRequestsQueue', async () => {
              if (this.requestQueue.state !== go) {
                for (
                  this.client.logger.info(
                    `Request queue starting with ${this.requestQueue.queue.length} requests`
                  );
                  this.requestQueue.queue.length > 0;

                ) {
                  this.requestQueue.state = go;
                  const t = this.requestQueue.queue.shift();
                  if (t)
                    try {
                      await this.processRequest(t);
                    } catch (e) {
                      this.client.logger.warn(e);
                    }
                }
                this.requestQueue.state = fo;
              } else this.client.logger.info('Request queue already active, skipping...');
            }),
            To(this, 'processRequest', async (e) => {
              const { topic: t, payload: r, attestation: i, transportType: n, encryptedId: s } = e,
                o = r.method;
              if (!this.shouldIgnorePairingRequest({ topic: t, requestMethod: o }))
                switch (o) {
                  case 'wc_sessionPropose':
                    return await this.onSessionProposeRequest({
                      topic: t,
                      payload: r,
                      attestation: i,
                      encryptedId: s,
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
                      encryptedId: s,
                      transportType: n,
                    });
                  case 'wc_sessionEvent':
                    return await this.onSessionEventRequest(t, r);
                  case 'wc_sessionAuthenticate':
                    return await this.onSessionAuthenticateRequest({
                      topic: t,
                      payload: r,
                      attestation: i,
                      encryptedId: s,
                      transportType: n,
                    });
                  default:
                    return this.client.logger.info(`Unsupported request method ${o}`);
                }
            }),
            To(this, 'onRelayEventResponse', async (e) => {
              const { topic: t, payload: r, transportType: i } = e,
                n = (await this.client.core.history.get(t, r.id)).request.method;
              switch (n) {
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
                  return this.client.logger.info(`Unsupported response method ${n}`);
              }
            }),
            To(this, 'onRelayEventUnknownPayload', (e) => {
              const { topic: t } = e,
                { message: r } = (0, Ie.kCb)(
                  'MISSING_OR_INVALID',
                  `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`
                );
              throw new Error(r);
            }),
            To(this, 'shouldIgnorePairingRequest', (e) => {
              const { topic: t, requestMethod: r } = e,
                i = this.expectedPairingMethodMap.get(t);
              return (
                !(!i || i.includes(r)) &&
                !!(
                  i.includes('wc_sessionAuthenticate') &&
                  this.client.events.listenerCount('session_authenticate') > 0
                )
              );
            }),
            To(this, 'onSessionProposeRequest', async (e) => {
              const { topic: t, payload: r, attestation: i, encryptedId: n } = e,
                { params: s, id: o } = r;
              try {
                const e = this.client.core.eventClient.getEvent({ topic: t });
                0 === this.client.events.listenerCount('session_proposal') &&
                  (console.warn('No listener for session_proposal event'), e?.setError(pr)),
                  this.isValidConnect(xo({}, r.params));
                const a = s.expiryTimestamp || (0, Ie.gn4)(uo.wc_sessionPropose.req.ttl),
                  c = xo({ id: o, pairingTopic: t, expiryTimestamp: a }, s);
                await this.setProposal(o, c);
                const h = await this.getVerifyContext({
                  attestationId: i,
                  hash: (0, Ie.rjm)(JSON.stringify(r)),
                  encryptedId: n,
                  metadata: c.proposer.metadata,
                });
                e?.addTrace(ar),
                  this.client.events.emit('session_proposal', {
                    id: o,
                    params: c,
                    verifyContext: h,
                  });
              } catch (a) {
                await this.sendError({
                  id: o,
                  topic: t,
                  error: a,
                  rpcOpts: uo.wc_sessionPropose.autoReject,
                }),
                  this.client.logger.error(a);
              }
            }),
            To(this, 'onSessionProposeResponse', async (e, t, r) => {
              const { id: i } = t;
              if (Qe(t)) {
                const { result: n } = t;
                this.client.logger.trace({
                  type: 'method',
                  method: 'onSessionProposeResponse',
                  result: n,
                });
                const s = this.client.proposal.get(i);
                this.client.logger.trace({
                  type: 'method',
                  method: 'onSessionProposeResponse',
                  proposal: s,
                });
                const o = s.proposer.publicKey;
                this.client.logger.trace({
                  type: 'method',
                  method: 'onSessionProposeResponse',
                  selfPublicKey: o,
                });
                const a = n.responderPublicKey;
                this.client.logger.trace({
                  type: 'method',
                  method: 'onSessionProposeResponse',
                  peerPublicKey: a,
                });
                const c = await this.client.core.crypto.generateSharedKey(o, a);
                this.pendingSessions.set(i, {
                  sessionTopic: c,
                  pairingTopic: e,
                  proposalId: i,
                  publicKey: o,
                });
                const h = await this.client.core.relayer.subscribe(c, { transportType: r });
                this.client.logger.trace({
                  type: 'method',
                  method: 'onSessionProposeResponse',
                  subscriptionId: h,
                }),
                  await this.client.core.pairing.activate({ topic: e });
              } else if (Xe(t)) {
                await this.client.proposal.delete(i, (0, Ie.D6H)('USER_DISCONNECTED'));
                const e = (0, Ie.E0T)('session_connect', i);
                if (0 === this.events.listenerCount(e))
                  throw new Error(`emitting ${e} without any listeners, 954`);
                this.events.emit(e, { error: t.error });
              }
            }),
            To(this, 'onSessionSettleRequest', async (e, t) => {
              const { id: r, params: i } = t;
              try {
                this.isValidSessionSettleRequest(i);
                const {
                    relay: r,
                    controller: n,
                    expiry: s,
                    namespaces: o,
                    sessionProperties: a,
                    scopedProperties: c,
                    sessionConfig: h,
                  } = t.params,
                  l = [...this.pendingSessions.values()].find((t) => t.sessionTopic === e);
                if (!l) return this.client.logger.error(`Pending session not found for topic ${e}`);
                const u = this.client.proposal.get(l.proposalId),
                  d = Ao(
                    xo(
                      xo(
                        xo(
                          {
                            topic: e,
                            relay: r,
                            expiry: s,
                            namespaces: o,
                            acknowledged: !0,
                            pairingTopic: l.pairingTopic,
                            requiredNamespaces: u.requiredNamespaces,
                            optionalNamespaces: u.optionalNamespaces,
                            controller: n.publicKey,
                            self: { publicKey: l.publicKey, metadata: this.client.metadata },
                            peer: { publicKey: n.publicKey, metadata: n.metadata },
                          },
                          a && { sessionProperties: a }
                        ),
                        c && { scopedProperties: c }
                      ),
                      h && { sessionConfig: h }
                    ),
                    { transportType: xt.relay }
                  );
                await this.client.session.set(d.topic, d),
                  await this.setExpiry(d.topic, d.expiry),
                  await this.client.core.pairing.updateMetadata({
                    topic: l.pairingTopic,
                    metadata: d.peer.metadata,
                  }),
                  this.client.events.emit('session_connect', { session: d }),
                  this.events.emit((0, Ie.E0T)('session_connect', l.proposalId), { session: d }),
                  this.pendingSessions.delete(l.proposalId),
                  this.deleteProposal(l.proposalId, !1),
                  this.cleanupDuplicatePairings(d),
                  await this.sendResult({
                    id: t.id,
                    topic: e,
                    result: !0,
                    throwOnFailedPublish: !0,
                  });
              } catch (n) {
                await this.sendError({ id: r, topic: e, error: n }), this.client.logger.error(n);
              }
            }),
            To(this, 'onSessionSettleResponse', async (e, t) => {
              const { id: r } = t;
              Qe(t)
                ? (await this.client.session.update(e, { acknowledged: !0 }),
                  this.events.emit((0, Ie.E0T)('session_approve', r), {}))
                : Xe(t) &&
                  (await this.client.session.delete(e, (0, Ie.D6H)('USER_DISCONNECTED')),
                  this.events.emit((0, Ie.E0T)('session_approve', r), { error: t.error }));
            }),
            To(this, 'onSessionUpdateRequest', async (e, t) => {
              const { params: r, id: i } = t;
              try {
                const t = `${e}_session_update`,
                  n = Ie.O6B.get(t);
                if (n && this.isRequestOutOfSync(n, i))
                  return (
                    this.client.logger.warn(`Discarding out of sync request - ${i}`),
                    void this.sendError({
                      id: i,
                      topic: e,
                      error: (0, Ie.D6H)('INVALID_UPDATE_REQUEST'),
                    })
                  );
                this.isValidUpdate(xo({ topic: e }, r));
                try {
                  Ie.O6B.set(t, i),
                    await this.client.session.update(e, { namespaces: r.namespaces }),
                    await this.sendResult({
                      id: i,
                      topic: e,
                      result: !0,
                      throwOnFailedPublish: !0,
                    });
                } catch (ue) {
                  throw (Ie.O6B.delete(t), ue);
                }
                this.client.events.emit('session_update', { id: i, topic: e, params: r });
              } catch (n) {
                await this.sendError({ id: i, topic: e, error: n }), this.client.logger.error(n);
              }
            }),
            To(
              this,
              'isRequestOutOfSync',
              (e, t) => t.toString().slice(0, -3) < e.toString().slice(0, -3)
            ),
            To(this, 'onSessionUpdateResponse', (e, t) => {
              const { id: r } = t,
                i = (0, Ie.E0T)('session_update', r);
              if (0 === this.events.listenerCount(i))
                throw new Error(`emitting ${i} without any listeners`);
              Qe(t)
                ? this.events.emit((0, Ie.E0T)('session_update', r), {})
                : Xe(t) && this.events.emit((0, Ie.E0T)('session_update', r), { error: t.error });
            }),
            To(this, 'onSessionExtendRequest', async (e, t) => {
              const { id: r } = t;
              try {
                this.isValidExtend({ topic: e }),
                  await this.setExpiry(e, (0, Ie.gn4)(lo)),
                  await this.sendResult({ id: r, topic: e, result: !0, throwOnFailedPublish: !0 }),
                  this.client.events.emit('session_extend', { id: r, topic: e });
              } catch (se) {
                await this.sendError({ id: r, topic: e, error: se }), this.client.logger.error(se);
              }
            }),
            To(this, 'onSessionExtendResponse', (e, t) => {
              const { id: r } = t,
                i = (0, Ie.E0T)('session_extend', r);
              if (0 === this.events.listenerCount(i))
                throw new Error(`emitting ${i} without any listeners`);
              Qe(t)
                ? this.events.emit((0, Ie.E0T)('session_extend', r), {})
                : Xe(t) && this.events.emit((0, Ie.E0T)('session_extend', r), { error: t.error });
            }),
            To(this, 'onSessionPingRequest', async (e, t) => {
              const { id: r } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult({ id: r, topic: e, result: !0, throwOnFailedPublish: !0 }),
                  this.client.events.emit('session_ping', { id: r, topic: e });
              } catch (se) {
                await this.sendError({ id: r, topic: e, error: se }), this.client.logger.error(se);
              }
            }),
            To(this, 'onSessionPingResponse', (e, t) => {
              const { id: r } = t,
                i = (0, Ie.E0T)('session_ping', r);
              setTimeout(() => {
                if (0 === this.events.listenerCount(i))
                  throw new Error(`emitting ${i} without any listeners 2176`);
                Qe(t)
                  ? this.events.emit((0, Ie.E0T)('session_ping', r), {})
                  : Xe(t) && this.events.emit((0, Ie.E0T)('session_ping', r), { error: t.error });
              }, 500);
            }),
            To(this, 'onSessionDeleteRequest', async (e, t) => {
              const { id: r } = t;
              try {
                this.isValidDisconnect({ topic: e, reason: t.params }),
                  Promise.all([
                    new Promise((t) => {
                      this.client.core.relayer.once(Et, async () => {
                        t(await this.deleteSession({ topic: e, id: r }));
                      });
                    }),
                    this.sendResult({ id: r, topic: e, result: !0, throwOnFailedPublish: !0 }),
                    this.cleanupPendingSentRequestsForTopic({
                      topic: e,
                      error: (0, Ie.D6H)('USER_DISCONNECTED'),
                    }),
                  ]).catch((e) => this.client.logger.error(e));
              } catch (se) {
                this.client.logger.error(se);
              }
            }),
            To(this, 'onSessionRequest', async (e) => {
              var t, r, i;
              const { topic: n, payload: s, attestation: o, encryptedId: a, transportType: c } = e,
                { id: h, params: l } = s;
              try {
                await this.isValidRequest(xo({ topic: n }, l));
                const e = this.client.session.get(n),
                  s = {
                    id: h,
                    topic: n,
                    params: l,
                    verifyContext: await this.getVerifyContext({
                      attestationId: o,
                      hash: (0, Ie.rjm)(JSON.stringify(Be('wc_sessionRequest', l, h))),
                      encryptedId: a,
                      metadata: e.peer.metadata,
                      transportType: c,
                    }),
                  };
                await this.setPendingSessionRequest(s),
                  c === xt.link_mode &&
                    null != (t = e.peer.metadata.redirect) &&
                    t.universal &&
                    this.client.core.addLinkModeSupportedApp(
                      null == (r = e.peer.metadata.redirect) ? void 0 : r.universal
                    ),
                  null != (i = this.client.signConfig) && i.disableRequestQueue
                    ? this.emitSessionRequest(s)
                    : (this.addSessionRequestToSessionRequestQueue(s),
                      this.processSessionRequestQueue());
              } catch (G) {
                await this.sendError({ id: h, topic: n, error: G }), this.client.logger.error(G);
              }
            }),
            To(this, 'onSessionRequestResponse', (e, t) => {
              const { id: r } = t,
                i = (0, Ie.E0T)('session_request', r);
              if (0 === this.events.listenerCount(i))
                throw new Error(`emitting ${i} without any listeners`);
              Qe(t)
                ? this.events.emit((0, Ie.E0T)('session_request', r), { result: t.result })
                : Xe(t) && this.events.emit((0, Ie.E0T)('session_request', r), { error: t.error });
            }),
            To(this, 'onSessionEventRequest', async (e, t) => {
              const { id: r, params: i } = t;
              try {
                const t = `${e}_session_event_${i.event.name}`,
                  n = Ie.O6B.get(t);
                if (n && this.isRequestOutOfSync(n, r))
                  return void this.client.logger.info(`Discarding out of sync request - ${r}`);
                this.isValidEmit(xo({ topic: e }, i)),
                  this.client.events.emit('session_event', { id: r, topic: e, params: i }),
                  Ie.O6B.set(t, r);
              } catch (n) {
                await this.sendError({ id: r, topic: e, error: n }), this.client.logger.error(n);
              }
            }),
            To(this, 'onSessionAuthenticateResponse', (e, t) => {
              const { id: r } = t;
              this.client.logger.trace({
                type: 'method',
                method: 'onSessionAuthenticateResponse',
                topic: e,
                payload: t,
              }),
                Qe(t)
                  ? this.events.emit((0, Ie.E0T)('session_request', r), { result: t.result })
                  : Xe(t) &&
                    this.events.emit((0, Ie.E0T)('session_request', r), { error: t.error });
            }),
            To(this, 'onSessionAuthenticateRequest', async (e) => {
              var t;
              const { topic: r, payload: i, attestation: n, encryptedId: s, transportType: o } = e;
              try {
                const { requester: e, authPayload: a, expiryTimestamp: c } = i.params,
                  h = await this.getVerifyContext({
                    attestationId: n,
                    hash: (0, Ie.rjm)(JSON.stringify(i)),
                    encryptedId: s,
                    metadata: e.metadata,
                    transportType: o,
                  }),
                  l = {
                    requester: e,
                    pairingTopic: r,
                    id: i.id,
                    authPayload: a,
                    verifyContext: h,
                    expiryTimestamp: c,
                  };
                await this.setAuthRequest(i.id, { request: l, pairingTopic: r, transportType: o }),
                  o === xt.link_mode &&
                    null != (t = e.metadata.redirect) &&
                    t.universal &&
                    this.client.core.addLinkModeSupportedApp(e.metadata.redirect.universal),
                  this.client.events.emit('session_authenticate', {
                    topic: r,
                    params: i.params,
                    id: i.id,
                    verifyContext: h,
                  });
              } catch (a) {
                this.client.logger.error(a);
                const e = i.params.requester.publicKey,
                  t = await this.client.core.crypto.generateKeyPair(),
                  n = this.getAppLinkIfEnabled(i.params.requester.metadata, o),
                  s = { type: Ie.rVF, receiverPublicKey: e, senderPublicKey: t };
                await this.sendError({
                  id: i.id,
                  topic: r,
                  error: a,
                  encodeOpts: s,
                  rpcOpts: uo.wc_sessionAuthenticate.autoReject,
                  appLink: n,
                });
              }
            }),
            To(this, 'addSessionRequestToSessionRequestQueue', (e) => {
              this.sessionRequestQueue.queue.push(e);
            }),
            To(this, 'cleanupAfterResponse', (e) => {
              this.deletePendingSessionRequest(e.response.id, { message: 'fulfilled', code: 0 }),
                setTimeout(
                  () => {
                    (this.sessionRequestQueue.state = fo), this.processSessionRequestQueue();
                  },
                  (0, s.toMiliseconds)(this.requestQueueDelay)
                );
            }),
            To(this, 'cleanupPendingSentRequestsForTopic', ({ topic: e, error: t }) => {
              const r = this.client.core.history.pending;
              r.length > 0 &&
                r
                  .filter((t) => t.topic === e && 'wc_sessionRequest' === t.request.method)
                  .forEach((e) => {
                    const r = e.request.id,
                      i = (0, Ie.E0T)('session_request', r);
                    if (0 === this.events.listenerCount(i))
                      throw new Error(`emitting ${i} without any listeners`);
                    this.events.emit((0, Ie.E0T)('session_request', e.request.id), { error: t });
                  });
            }),
            To(this, 'processSessionRequestQueue', () => {
              if (this.sessionRequestQueue.state === go)
                return void this.client.logger.info('session request queue is already active.');
              const e = this.sessionRequestQueue.queue[0];
              if (e)
                try {
                  (this.sessionRequestQueue.state = go), this.emitSessionRequest(e);
                } catch (t) {
                  this.client.logger.error(t);
                }
              else this.client.logger.info('session request queue is empty.');
            }),
            To(this, 'emitSessionRequest', (e) => {
              this.client.events.emit('session_request', e);
            }),
            To(this, 'onPairingCreated', (e) => {
              if ((e.methods && this.expectedPairingMethodMap.set(e.topic, e.methods), e.active))
                return;
              const t = this.client.proposal.getAll().find((t) => t.pairingTopic === e.topic);
              t &&
                this.onSessionProposeRequest({
                  topic: e.topic,
                  payload: Be(
                    'wc_sessionPropose',
                    Ao(xo({}, t), {
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
            To(this, 'isValidConnect', async (e) => {
              if (!(0, Ie.EJd)(e)) {
                const { message: t } = (0, Ie.kCb)(
                  'MISSING_OR_INVALID',
                  `connect() params: ${JSON.stringify(e)}`
                );
                throw new Error(t);
              }
              const {
                pairingTopic: t,
                requiredNamespaces: r,
                optionalNamespaces: i,
                sessionProperties: n,
                scopedProperties: s,
                relays: o,
              } = e;
              if (((0, Ie.o8e)(t) || (await this.isValidPairingTopic(t)), !(0, Ie.PMr)(o, !0))) {
                const { message: e } = (0, Ie.kCb)('MISSING_OR_INVALID', `connect() relays: ${o}`);
                throw new Error(e);
              }
              if (
                (!(0, Ie.o8e)(r) &&
                  0 !== (0, Ie.L5o)(r) &&
                  this.validateNamespaces(r, 'requiredNamespaces'),
                !(0, Ie.o8e)(i) &&
                  0 !== (0, Ie.L5o)(i) &&
                  this.validateNamespaces(i, 'optionalNamespaces'),
                (0, Ie.o8e)(n) || this.validateSessionProps(n, 'sessionProperties'),
                !(0, Ie.o8e)(s))
              ) {
                this.validateSessionProps(s, 'scopedProperties');
                const e = Object.keys(r || {}).concat(Object.keys(i || {}));
                if (!Object.keys(s).every((t) => e.includes(t)))
                  throw new Error(
                    `Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(s)}, required/optional namespaces: ${JSON.stringify(e)}`
                  );
              }
            }),
            To(this, 'validateNamespaces', (e, t) => {
              const r = (0, Ie.naP)(e, 'connect()', t);
              if (r) throw new Error(r.message);
            }),
            To(this, 'isValidApprove', async (e) => {
              if (!(0, Ie.EJd)(e))
                throw new Error(
                  (0, Ie.kCb)('MISSING_OR_INVALID', `approve() params: ${e}`).message
                );
              const {
                id: t,
                namespaces: r,
                relayProtocol: i,
                sessionProperties: n,
                scopedProperties: s,
              } = e;
              this.checkRecentlyDeleted(t), await this.isValidProposalId(t);
              const o = this.client.proposal.get(t),
                a = (0, Ie.ing)(r, 'approve()');
              if (a) throw new Error(a.message);
              const c = (0, Ie.rFo)(o.requiredNamespaces, r, 'approve()');
              if (c) throw new Error(c.message);
              if (!(0, Ie.M_r)(i, !0)) {
                const { message: e } = (0, Ie.kCb)(
                  'MISSING_OR_INVALID',
                  `approve() relayProtocol: ${i}`
                );
                throw new Error(e);
              }
              if (
                ((0, Ie.o8e)(n) || this.validateSessionProps(n, 'sessionProperties'),
                !(0, Ie.o8e)(s))
              ) {
                this.validateSessionProps(s, 'scopedProperties');
                const e = new Set(Object.keys(r));
                if (!Object.keys(s).every((t) => e.has(t)))
                  throw new Error(
                    `Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(s)}, approved namespaces: ${Array.from(e).join(', ')}`
                  );
              }
            }),
            To(this, 'isValidReject', async (e) => {
              if (!(0, Ie.EJd)(e)) {
                const { message: t } = (0, Ie.kCb)('MISSING_OR_INVALID', `reject() params: ${e}`);
                throw new Error(t);
              }
              const { id: t, reason: r } = e;
              if (
                (this.checkRecentlyDeleted(t), await this.isValidProposalId(t), !(0, Ie.H4H)(r))
              ) {
                const { message: e } = (0, Ie.kCb)(
                  'MISSING_OR_INVALID',
                  `reject() reason: ${JSON.stringify(r)}`
                );
                throw new Error(e);
              }
            }),
            To(this, 'isValidSessionSettleRequest', (e) => {
              if (!(0, Ie.EJd)(e)) {
                const { message: t } = (0, Ie.kCb)(
                  'MISSING_OR_INVALID',
                  `onSessionSettleRequest() params: ${e}`
                );
                throw new Error(t);
              }
              const { relay: t, controller: r, namespaces: i, expiry: n } = e;
              if (!(0, Ie.Z26)(t)) {
                const { message: e } = (0, Ie.kCb)(
                  'MISSING_OR_INVALID',
                  'onSessionSettleRequest() relay protocol should be a string'
                );
                throw new Error(e);
              }
              const s = (0, Ie.DdM)(r, 'onSessionSettleRequest()');
              if (s) throw new Error(s.message);
              const o = (0, Ie.ing)(i, 'onSessionSettleRequest()');
              if (o) throw new Error(o.message);
              if ((0, Ie.BwD)(n)) {
                const { message: e } = (0, Ie.kCb)('EXPIRED', 'onSessionSettleRequest()');
                throw new Error(e);
              }
            }),
            To(this, 'isValidUpdate', async (e) => {
              if (!(0, Ie.EJd)(e)) {
                const { message: t } = (0, Ie.kCb)('MISSING_OR_INVALID', `update() params: ${e}`);
                throw new Error(t);
              }
              const { topic: t, namespaces: r } = e;
              this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
              const i = this.client.session.get(t),
                n = (0, Ie.ing)(r, 'update()');
              if (n) throw new Error(n.message);
              const s = (0, Ie.rFo)(i.requiredNamespaces, r, 'update()');
              if (s) throw new Error(s.message);
            }),
            To(this, 'isValidExtend', async (e) => {
              if (!(0, Ie.EJd)(e)) {
                const { message: t } = (0, Ie.kCb)('MISSING_OR_INVALID', `extend() params: ${e}`);
                throw new Error(t);
              }
              const { topic: t } = e;
              this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
            }),
            To(this, 'isValidRequest', async (e) => {
              if (!(0, Ie.EJd)(e)) {
                const { message: t } = (0, Ie.kCb)('MISSING_OR_INVALID', `request() params: ${e}`);
                throw new Error(t);
              }
              const { topic: t, request: r, chainId: i, expiry: n } = e;
              this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
              const { namespaces: s } = this.client.session.get(t);
              if (!(0, Ie.p8o)(s, i)) {
                const { message: e } = (0, Ie.kCb)('MISSING_OR_INVALID', `request() chainId: ${i}`);
                throw new Error(e);
              }
              if (!(0, Ie.hHR)(r)) {
                const { message: e } = (0, Ie.kCb)(
                  'MISSING_OR_INVALID',
                  `request() ${JSON.stringify(r)}`
                );
                throw new Error(e);
              }
              if (!(0, Ie.alS)(s, i, r.method)) {
                const { message: e } = (0, Ie.kCb)(
                  'MISSING_OR_INVALID',
                  `request() method: ${r.method}`
                );
                throw new Error(e);
              }
              if (n && !(0, Ie.ONw)(n, po)) {
                const { message: e } = (0, Ie.kCb)(
                  'MISSING_OR_INVALID',
                  `request() expiry: ${n}. Expiry must be a number (in seconds) between ${po.min} and ${po.max}`
                );
                throw new Error(e);
              }
            }),
            To(this, 'isValidRespond', async (e) => {
              var t;
              if (!(0, Ie.EJd)(e)) {
                const { message: t } = (0, Ie.kCb)('MISSING_OR_INVALID', `respond() params: ${e}`);
                throw new Error(t);
              }
              const { topic: r, response: i } = e;
              try {
                await this.isValidSessionTopic(r);
              } catch (n) {
                throw (null != (t = e?.response) && t.id && this.cleanupAfterResponse(e), n);
              }
              if (!(0, Ie.JTI)(i)) {
                const { message: e } = (0, Ie.kCb)(
                  'MISSING_OR_INVALID',
                  `respond() response: ${JSON.stringify(i)}`
                );
                throw new Error(e);
              }
            }),
            To(this, 'isValidPing', async (e) => {
              if (!(0, Ie.EJd)(e)) {
                const { message: t } = (0, Ie.kCb)('MISSING_OR_INVALID', `ping() params: ${e}`);
                throw new Error(t);
              }
              const { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            To(this, 'isValidEmit', async (e) => {
              if (!(0, Ie.EJd)(e)) {
                const { message: t } = (0, Ie.kCb)('MISSING_OR_INVALID', `emit() params: ${e}`);
                throw new Error(t);
              }
              const { topic: t, event: r, chainId: i } = e;
              await this.isValidSessionTopic(t);
              const { namespaces: n } = this.client.session.get(t);
              if (!(0, Ie.p8o)(n, i)) {
                const { message: e } = (0, Ie.kCb)('MISSING_OR_INVALID', `emit() chainId: ${i}`);
                throw new Error(e);
              }
              if (!(0, Ie.nfW)(r)) {
                const { message: e } = (0, Ie.kCb)(
                  'MISSING_OR_INVALID',
                  `emit() event: ${JSON.stringify(r)}`
                );
                throw new Error(e);
              }
              if (!(0, Ie.B95)(n, i, r.name)) {
                const { message: e } = (0, Ie.kCb)(
                  'MISSING_OR_INVALID',
                  `emit() event: ${JSON.stringify(r)}`
                );
                throw new Error(e);
              }
            }),
            To(this, 'isValidDisconnect', async (e) => {
              if (!(0, Ie.EJd)(e)) {
                const { message: t } = (0, Ie.kCb)(
                  'MISSING_OR_INVALID',
                  `disconnect() params: ${e}`
                );
                throw new Error(t);
              }
              const { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            To(this, 'isValidAuthenticate', (e) => {
              const { chains: t, uri: r, domain: i, nonce: n } = e;
              if (!Array.isArray(t) || 0 === t.length)
                throw new Error('chains is required and must be a non-empty array');
              if (!(0, Ie.M_r)(r, !1)) throw new Error('uri is required parameter');
              if (!(0, Ie.M_r)(i, !1)) throw new Error('domain is required parameter');
              if (!(0, Ie.M_r)(n, !1)) throw new Error('nonce is required parameter');
              if ([...new Set(t.map((e) => (0, Ie.DQe)(e).namespace))].length > 1)
                throw new Error(
                  'Multi-namespace requests are not supported. Please request single namespace only.'
                );
              const { namespace: s } = (0, Ie.DQe)(t[0]);
              if ('eip155' !== s)
                throw new Error(
                  'Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.'
                );
            }),
            To(this, 'getVerifyContext', async (e) => {
              const {
                  attestationId: t,
                  hash: r,
                  encryptedId: i,
                  metadata: n,
                  transportType: s,
                } = e,
                o = {
                  verified: {
                    verifyUrl: n.verifyUrl || Yt,
                    validation: 'UNKNOWN',
                    origin: n.url || '',
                  },
                };
              try {
                if (s === xt.link_mode) {
                  const e = this.getAppLinkIfEnabled(n, s);
                  return (
                    (o.verified.validation =
                      e && new URL(e).origin === new URL(n.url).origin ? 'VALID' : 'INVALID'),
                    o
                  );
                }
                const e = await this.client.core.verify.resolve({
                  attestationId: t,
                  hash: r,
                  encryptedId: i,
                  verifyUrl: n.verifyUrl,
                });
                e &&
                  ((o.verified.origin = e.origin),
                  (o.verified.isScam = e.isScam),
                  (o.verified.validation =
                    e.origin === new URL(n.url).origin ? 'VALID' : 'INVALID'));
              } catch (a) {
                this.client.logger.warn(a);
              }
              return this.client.logger.debug(`Verify context: ${JSON.stringify(o)}`), o;
            }),
            To(this, 'validateSessionProps', (e, t) => {
              Object.values(e).forEach((r, i) => {
                if (null == r) {
                  const { message: n } = (0, Ie.kCb)(
                    'MISSING_OR_INVALID',
                    `${t} must contain an existing value for each key. Received: ${r} for key ${Object.keys(e)[i]}`
                  );
                  throw new Error(n);
                }
              });
            }),
            To(this, 'getPendingAuthRequest', (e) => {
              const t = this.client.auth.requests.get(e);
              return 'object' == typeof t ? t : void 0;
            }),
            To(this, 'addToRecentlyDeleted', (e, t) => {
              if (
                (this.recentlyDeletedMap.set(e, t),
                this.recentlyDeletedMap.size >= this.recentlyDeletedLimit)
              ) {
                let e = 0;
                const t = this.recentlyDeletedLimit / 2;
                for (const r of this.recentlyDeletedMap.keys()) {
                  if (e++ >= t) break;
                  this.recentlyDeletedMap.delete(r);
                }
              }
            }),
            To(this, 'checkRecentlyDeleted', (e) => {
              const t = this.recentlyDeletedMap.get(e);
              if (t) {
                const { message: r } = (0, Ie.kCb)(
                  'MISSING_OR_INVALID',
                  `Record was recently deleted - ${t}: ${e}`
                );
                throw new Error(r);
              }
            }),
            To(this, 'isLinkModeEnabled', (e, t) => {
              var i, n, s, o, a, c, h, l, u;
              return (
                !(!e || t !== xt.link_mode) &&
                !0 ===
                  (null == (n = null == (i = this.client.metadata) ? void 0 : i.redirect)
                    ? void 0
                    : n.linkMode) &&
                void 0 !==
                  (null == (o = null == (s = this.client.metadata) ? void 0 : s.redirect)
                    ? void 0
                    : o.universal) &&
                '' !==
                  (null == (c = null == (a = this.client.metadata) ? void 0 : a.redirect)
                    ? void 0
                    : c.universal) &&
                void 0 !== (null == (h = e?.redirect) ? void 0 : h.universal) &&
                '' !== (null == (l = e?.redirect) ? void 0 : l.universal) &&
                !0 === (null == (u = e?.redirect) ? void 0 : u.linkMode) &&
                this.client.core.linkModeSupportedApps.includes(e.redirect.universal) &&
                typeof (null == r.g ? void 0 : r.g.Linking) < 'u'
              );
            }),
            To(this, 'getAppLinkIfEnabled', (e, t) => {
              var r;
              return this.isLinkModeEnabled(e, t)
                ? null == (r = e?.redirect)
                  ? void 0
                  : r.universal
                : void 0;
            }),
            To(this, 'handleLinkModeMessage', ({ url: e }) => {
              if (!e || !e.includes('wc_ev') || !e.includes('topic')) return;
              const t = (0, Ie.waw)(e, 'topic') || '',
                r = decodeURIComponent((0, Ie.waw)(e, 'wc_ev') || ''),
                i = this.client.session.keys.includes(t);
              i && this.client.session.update(t, { transportType: xt.link_mode }),
                this.client.core.dispatchEnvelope({ topic: t, message: r, sessionExists: i });
            }),
            To(this, 'registerLinkModeListeners', async () => {
              var e;
              if (
                (0, Ie.h9F)() ||
                ((0, Ie.b$m)() && null != (e = this.client.metadata.redirect) && e.linkMode)
              ) {
                const e = null == r.g ? void 0 : r.g.Linking;
                if (typeof e < 'u') {
                  e.addEventListener('url', this.handleLinkModeMessage, this.client.name);
                  const t = await e.getInitialURL();
                  t &&
                    setTimeout(() => {
                      this.handleLinkModeMessage({ url: t });
                    }, 50);
                }
              }
            }),
            To(this, 'shouldSetTVF', (e, t) => {
              if (!t || 'wc_sessionRequest' !== e) return !1;
              const { request: r } = t;
              return Object.keys(yo).includes(r.method);
            }),
            To(this, 'getTVFParams', (e, t, r) => {
              var i, n;
              try {
                const s = t.request.method,
                  o = this.extractTxHashesFromResult(s, r);
                return Ao(
                  xo(
                    { correlationId: e, rpcMethods: [s], chainId: t.chainId },
                    this.isValidContractData(t.request.params) && {
                      contractAddresses: [
                        null == (n = null == (i = t.request.params) ? void 0 : i[0])
                          ? void 0
                          : n.to,
                      ],
                    }
                  ),
                  { txHashes: o }
                );
              } catch (s) {
                this.client.logger.warn('Error getting TVF params', s);
              }
              return {};
            }),
            To(this, 'isValidContractData', (e) => {
              var t;
              if (!e) return !1;
              try {
                const r = e?.data || (null == (t = e?.[0]) ? void 0 : t.data);
                if (!r.startsWith('0x')) return !1;
                const i = r.slice(2);
                return !!/^[0-9a-fA-F]*$/.test(i) && i.length % 2 === 0;
              } catch {}
              return !1;
            }),
            To(this, 'extractTxHashesFromResult', (e, t) => {
              try {
                if ('string' == typeof t) return [t];
                const r = t[yo[e].key];
                if ((0, Ie.qt8)(r))
                  return 'solana_signAllTransactions' === e ? r.map((e) => (0, Ie.P56)(e)) : r;
                if ('string' == typeof r) return [r];
              } catch (c) {
                this.client.logger.warn('Error extracting tx hashes from result', c);
              }
              return [];
            });
        }
        async processPendingMessageEvents() {
          try {
            const e = this.client.session.keys,
              t = this.client.core.relayer.messages.getWithoutAck(e);
            for (const [r, i] of Object.entries(t))
              for (const e of i)
                try {
                  await this.onProviderMessageEvent({
                    topic: r,
                    message: e,
                    publishedAt: Date.now(),
                  });
                } catch {
                  this.client.logger.warn(
                    `Error processing pending message event for topic: ${r}, message: ${e}`
                  );
                }
          } catch (e) {
            this.client.logger.warn('processPendingMessageEvents failed', e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = (0, Ie.kCb)('NOT_INITIALIZED', this.name);
            throw new Error(e);
          }
        }
        async confirmOnlineStateOrThrow() {
          await this.client.core.relayer.confirmOnlineStateOrThrow();
        }
        registerRelayerEvents() {
          this.client.core.relayer.on(gt, (e) => {
            this.onProviderMessageEvent(e);
          });
        }
        async onRelayMessage(e) {
          const { topic: t, message: r, attestation: i, transportType: n } = e,
            { publicKey: s } = this.client.auth.authKeys.keys.includes(bo)
              ? this.client.auth.authKeys.get(bo)
              : { responseTopic: void 0, publicKey: void 0 };
          try {
            const e = await this.client.core.crypto.decode(t, r, {
              receiverPublicKey: s,
              encoding: n === xt.link_mode ? Ie.zl_ : Ie.$dT,
            });
            Je(e)
              ? (this.client.core.history.set(t, e),
                await this.onRelayEventRequest({
                  topic: t,
                  payload: e,
                  attestation: i,
                  transportType: n,
                  encryptedId: (0, Ie.rjm)(r),
                }))
              : Ze(e)
                ? (await this.client.core.history.resolve(e),
                  await this.onRelayEventResponse({ topic: t, payload: e, transportType: n }),
                  this.client.core.history.delete(t, e.id))
                : await this.onRelayEventUnknownPayload({ topic: t, payload: e, transportType: n }),
              await this.client.core.relayer.messages.ack(t, r);
          } catch (o) {
            this.client.logger.error(o);
          }
        }
        registerExpirerEvents() {
          this.client.core.expirer.on(Ft, async (e) => {
            const { topic: t, id: r } = (0, Ie.iPz)(e.target);
            return r && this.client.pendingRequest.keys.includes(r)
              ? await this.deletePendingSessionRequest(r, (0, Ie.kCb)('EXPIRED'), !0)
              : r && this.client.auth.requests.keys.includes(r)
                ? await this.deletePendingAuthRequest(r, (0, Ie.kCb)('EXPIRED'), !0)
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
          this.client.core.pairing.events.on(Lt, (e) => this.onPairingCreated(e)),
            this.client.core.pairing.events.on(Ut, (e) => {
              this.addToRecentlyDeleted(e.topic, 'pairing');
            });
        }
        isValidPairingTopic(e) {
          if (!(0, Ie.M_r)(e, !1)) {
            const { message: t } = (0, Ie.kCb)(
              'MISSING_OR_INVALID',
              `pairing topic should be a string: ${e}`
            );
            throw new Error(t);
          }
          if (!this.client.core.pairing.pairings.keys.includes(e)) {
            const { message: t } = (0, Ie.kCb)(
              'NO_MATCHING_KEY',
              `pairing topic doesn't exist: ${e}`
            );
            throw new Error(t);
          }
          if ((0, Ie.BwD)(this.client.core.pairing.pairings.get(e).expiry)) {
            const { message: t } = (0, Ie.kCb)('EXPIRED', `pairing topic: ${e}`);
            throw new Error(t);
          }
        }
        async isValidSessionTopic(e) {
          if (!(0, Ie.M_r)(e, !1)) {
            const { message: t } = (0, Ie.kCb)(
              'MISSING_OR_INVALID',
              `session topic should be a string: ${e}`
            );
            throw new Error(t);
          }
          if ((this.checkRecentlyDeleted(e), !this.client.session.keys.includes(e))) {
            const { message: t } = (0, Ie.kCb)(
              'NO_MATCHING_KEY',
              `session topic doesn't exist: ${e}`
            );
            throw new Error(t);
          }
          if ((0, Ie.BwD)(this.client.session.get(e).expiry)) {
            await this.deleteSession({ topic: e });
            const { message: t } = (0, Ie.kCb)('EXPIRED', `session topic: ${e}`);
            throw new Error(t);
          }
          if (!this.client.core.crypto.keychain.has(e)) {
            const { message: t } = (0, Ie.kCb)(
              'MISSING_OR_INVALID',
              `session topic does not exist in keychain: ${e}`
            );
            throw (await this.deleteSession({ topic: e }), new Error(t));
          }
        }
        async isValidSessionOrPairingTopic(e) {
          if ((this.checkRecentlyDeleted(e), this.client.session.keys.includes(e)))
            await this.isValidSessionTopic(e);
          else {
            if (!this.client.core.pairing.pairings.keys.includes(e)) {
              if ((0, Ie.M_r)(e, !1)) {
                const { message: t } = (0, Ie.kCb)(
                  'NO_MATCHING_KEY',
                  `session or pairing topic doesn't exist: ${e}`
                );
                throw new Error(t);
              }
              {
                const { message: t } = (0, Ie.kCb)(
                  'MISSING_OR_INVALID',
                  `session or pairing topic should be a string: ${e}`
                );
                throw new Error(t);
              }
            }
            this.isValidPairingTopic(e);
          }
        }
        async isValidProposalId(e) {
          if (!(0, Ie.Q01)(e)) {
            const { message: t } = (0, Ie.kCb)(
              'MISSING_OR_INVALID',
              `proposal id should be a number: ${e}`
            );
            throw new Error(t);
          }
          if (!this.client.proposal.keys.includes(e)) {
            const { message: t } = (0, Ie.kCb)(
              'NO_MATCHING_KEY',
              `proposal id doesn't exist: ${e}`
            );
            throw new Error(t);
          }
          if ((0, Ie.BwD)(this.client.proposal.get(e).expiryTimestamp)) {
            await this.deleteProposal(e);
            const { message: t } = (0, Ie.kCb)('EXPIRED', `proposal id: ${e}`);
            throw new Error(t);
          }
        }
      }
      class Co extends Ss {
        constructor(e, t) {
          super(e, t, 'proposal', so), (this.core = e), (this.logger = t);
        }
      }
      class Ro extends Ss {
        constructor(e, t) {
          super(e, t, 'session', so), (this.core = e), (this.logger = t);
        }
      }
      class ko extends Ss {
        constructor(e, t) {
          super(e, t, 'request', so, (e) => e.id), (this.core = e), (this.logger = t);
        }
      }
      class jo extends Ss {
        constructor(e, t) {
          super(e, t, 'authKeys', wo, () => bo), (this.core = e), (this.logger = t);
        }
      }
      class Do extends Ss {
        constructor(e, t) {
          super(e, t, 'pairingTopics', wo), (this.core = e), (this.logger = t);
        }
      }
      class Lo extends Ss {
        constructor(e, t) {
          super(e, t, 'requests', wo, (e) => e.id), (this.core = e), (this.logger = t);
        }
      }
      var qo = Object.defineProperty,
        Uo = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? qo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class Bo {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            Uo(this, 'authKeys'),
            Uo(this, 'pairingTopics'),
            Uo(this, 'requests'),
            (this.authKeys = new jo(this.core, this.logger)),
            (this.pairingTopics = new Do(this.core, this.logger)),
            (this.requests = new Lo(this.core, this.logger));
        }
        async init() {
          await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init();
        }
      }
      var $o = Object.defineProperty,
        Mo = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? $o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class zo extends class {
        constructor(e) {
          (this.opts = e), io(this, 'protocol', 'wc'), io(this, 'version', 2);
        }
      } {
        constructor(e) {
          super(e),
            Mo(this, 'protocol', 'wc'),
            Mo(this, 'version', 2),
            Mo(this, 'name', oo),
            Mo(this, 'metadata'),
            Mo(this, 'core'),
            Mo(this, 'logger'),
            Mo(this, 'events', new i.EventEmitter()),
            Mo(this, 'engine'),
            Mo(this, 'session'),
            Mo(this, 'proposal'),
            Mo(this, 'pendingRequest'),
            Mo(this, 'auth'),
            Mo(this, 'signConfig'),
            Mo(this, 'on', (e, t) => this.events.on(e, t)),
            Mo(this, 'once', (e, t) => this.events.once(e, t)),
            Mo(this, 'off', (e, t) => this.events.off(e, t)),
            Mo(this, 'removeListener', (e, t) => this.events.removeListener(e, t)),
            Mo(this, 'removeAllListeners', (e) => this.events.removeAllListeners(e)),
            Mo(this, 'connect', async (e) => {
              try {
                return await this.engine.connect(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            Mo(this, 'pair', async (e) => {
              try {
                return await this.engine.pair(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            Mo(this, 'approve', async (e) => {
              try {
                return await this.engine.approve(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            Mo(this, 'reject', async (e) => {
              try {
                return await this.engine.reject(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            Mo(this, 'update', async (e) => {
              try {
                return await this.engine.update(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            Mo(this, 'extend', async (e) => {
              try {
                return await this.engine.extend(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            Mo(this, 'request', async (e) => {
              try {
                return await this.engine.request(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            Mo(this, 'respond', async (e) => {
              try {
                return await this.engine.respond(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            Mo(this, 'ping', async (e) => {
              try {
                return await this.engine.ping(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            Mo(this, 'emit', async (e) => {
              try {
                return await this.engine.emit(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            Mo(this, 'disconnect', async (e) => {
              try {
                return await this.engine.disconnect(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            Mo(this, 'find', (e) => {
              try {
                return this.engine.find(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            Mo(this, 'getPendingSessionRequests', () => {
              try {
                return this.engine.getPendingSessionRequests();
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            Mo(this, 'authenticate', async (e, t) => {
              try {
                return await this.engine.authenticate(e, t);
              } catch (se) {
                throw (this.logger.error(se.message), se);
              }
            }),
            Mo(this, 'formatAuthMessage', (e) => {
              try {
                return this.engine.formatAuthMessage(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            Mo(this, 'approveSessionAuthenticate', async (e) => {
              try {
                return await this.engine.approveSessionAuthenticate(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            Mo(this, 'rejectSessionAuthenticate', async (e) => {
              try {
                return await this.engine.rejectSessionAuthenticate(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            (this.name = e?.name || oo),
            (this.metadata = (0, Ie.WPw)(e?.metadata)),
            (this.signConfig = e?.signConfig);
          const t =
            typeof e?.logger < 'u' && 'string' != typeof e?.logger
              ? e.logger
              : V()(ae({ level: e?.logger || ao }));
          (this.core = e?.core || new to(e)),
            (this.logger = he(t, this.name)),
            (this.session = new Ro(this.core, this.logger)),
            (this.proposal = new Co(this.core, this.logger)),
            (this.pendingRequest = new ko(this.core, this.logger)),
            (this.engine = new No(this)),
            (this.auth = new Bo(this.core, this.logger));
        }
        static async init(e) {
          const t = new zo(e);
          return await t.initialize(), t;
        }
        get context() {
          return ce(this.logger);
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
                (0, s.toMiliseconds)(s.ONE_SECOND)
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
      var Ho = r(54098),
        Vo = r.n(Ho),
        Ko = Object.defineProperty,
        Fo = Object.defineProperties,
        Wo = Object.getOwnPropertyDescriptors,
        Go = Object.getOwnPropertySymbols,
        Yo = Object.prototype.hasOwnProperty,
        Jo = Object.prototype.propertyIsEnumerable,
        Zo = (e, t, r) =>
          t in e
            ? Ko(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        Qo = (e, t) => {
          for (var r in t || (t = {})) Yo.call(t, r) && Zo(e, r, t[r]);
          if (Go) for (var r of Go(t)) Jo.call(t, r) && Zo(e, r, t[r]);
          return e;
        },
        Xo = (e, t) => Fo(e, Wo(t));
      const ea = {
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        method: 'POST',
      };
      class ta {
        constructor(e, t = !1) {
          if (
            ((this.url = e),
            (this.disableProviderPing = t),
            (this.events = new i.EventEmitter()),
            (this.isAvailable = !1),
            (this.registering = !1),
            !We(e))
          )
            throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);
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
          if (!this.isAvailable) throw new Error('Connection already closed');
          this.onClose();
        }
        async send(e) {
          this.isAvailable || (await this.register());
          try {
            const t = (0, j.u)(e),
              r = await (await Vo()(this.url, Xo(Qo({}, ea), { body: t }))).json();
            this.onPayload({ data: r });
          } catch (He) {
            this.onError(e.id, He);
          }
        }
        async register(e = this.url) {
          if (!We(e)) throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);
          if (this.registering) {
            const e = this.events.getMaxListeners();
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
                      return t(new Error('HTTP connection is missing or invalid'));
                    e();
                  });
              })
            );
          }
          (this.url = e), (this.registering = !0);
          try {
            if (!this.disableProviderPing) {
              const t = (0, j.u)({ id: 1, jsonrpc: '2.0', method: 'test', params: [] });
              await Vo()(e, Xo(Qo({}, ea), { body: t }));
            }
            this.onOpen();
          } catch (He) {
            const t = this.parseError(He);
            throw (this.events.emit('register_error', t), this.onClose(), t);
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
          const t = 'string' == typeof e.data ? (0, j.D)(e.data) : e.data;
          this.events.emit('payload', t);
        }
        onError(e, t) {
          const r = this.parseError(t),
            i = Me(e, r.message || r.toString());
          this.events.emit('payload', i);
        }
        parseError(e, t = this.url) {
          return De(e, t, 'HTTP');
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
      }
      var ra = r(48764).Buffer;
      const ia = 'error',
        na = 'wc@2:universal_provider:',
        sa = 'https://rpc.walletconnect.org/v1/',
        oa = 'generic',
        aa = `${sa}bundler`,
        ca = 'default_chain_changed';
      function ha() {}
      function la(e) {
        return null == e || ('object' != typeof e && 'function' != typeof e);
      }
      function ua(e) {
        return ArrayBuffer.isView(e) && !(e instanceof DataView);
      }
      function da(e) {
        return 'object' == typeof e && null !== e;
      }
      function pa(e) {
        return Object.getOwnPropertySymbols(e).filter((t) =>
          Object.prototype.propertyIsEnumerable.call(e, t)
        );
      }
      function fa(e) {
        return null == e
          ? void 0 === e
            ? '[object Undefined]'
            : '[object Null]'
          : Object.prototype.toString.call(e);
      }
      const ga = '[object RegExp]',
        ya = '[object String]',
        ma = '[object Number]',
        wa = '[object Boolean]',
        ba = '[object Arguments]',
        va = '[object Symbol]',
        Ea = '[object Date]',
        Ia = '[object Map]',
        Sa = '[object Set]',
        Pa = '[object Array]',
        Oa = '[object ArrayBuffer]',
        _a = '[object Object]',
        xa = '[object DataView]',
        Aa = '[object Uint8Array]',
        Ta = '[object Uint8ClampedArray]',
        Na = '[object Uint16Array]',
        Ca = '[object Uint32Array]',
        Ra = '[object Int8Array]',
        ka = '[object Int16Array]',
        ja = '[object Int32Array]',
        Da = '[object Float32Array]',
        La = '[object Float64Array]';
      function qa(e, t, r, i = new Map(), n) {
        const s = n?.(e, t, r, i);
        if (null != s) return s;
        if (la(e)) return e;
        if (i.has(e)) return i.get(e);
        if (Array.isArray(e)) {
          const t = new Array(e.length);
          i.set(e, t);
          for (let s = 0; s < e.length; s++) t[s] = qa(e[s], s, r, i, n);
          return (
            Object.hasOwn(e, 'index') && (t.index = e.index),
            Object.hasOwn(e, 'input') && (t.input = e.input),
            t
          );
        }
        if (e instanceof Date) return new Date(e.getTime());
        if (e instanceof RegExp) {
          const t = new RegExp(e.source, e.flags);
          return (t.lastIndex = e.lastIndex), t;
        }
        if (e instanceof Map) {
          const t = new Map();
          i.set(e, t);
          for (const [s, o] of e) t.set(s, qa(o, s, r, i, n));
          return t;
        }
        if (e instanceof Set) {
          const t = new Set();
          i.set(e, t);
          for (const s of e) t.add(qa(s, void 0, r, i, n));
          return t;
        }
        if (typeof ra < 'u' && ra.isBuffer(e)) return e.subarray();
        if (ua(e)) {
          const t = new (Object.getPrototypeOf(e).constructor)(e.length);
          i.set(e, t);
          for (let s = 0; s < e.length; s++) t[s] = qa(e[s], s, r, i, n);
          return t;
        }
        if (
          e instanceof ArrayBuffer ||
          (typeof SharedArrayBuffer < 'u' && e instanceof SharedArrayBuffer)
        )
          return e.slice(0);
        if (e instanceof DataView) {
          const t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
          return i.set(e, t), Ua(t, e, r, i, n), t;
        }
        if (typeof File < 'u' && e instanceof File) {
          const t = new File([e], e.name, { type: e.type });
          return i.set(e, t), Ua(t, e, r, i, n), t;
        }
        if (e instanceof Blob) {
          const t = new Blob([e], { type: e.type });
          return i.set(e, t), Ua(t, e, r, i, n), t;
        }
        if (e instanceof Error) {
          const t = new e.constructor();
          return (
            i.set(e, t),
            (t.message = e.message),
            (t.name = e.name),
            (t.stack = e.stack),
            (t.cause = e.cause),
            Ua(t, e, r, i, n),
            t
          );
        }
        if (
          'object' == typeof e &&
          (function (e) {
            switch (fa(e)) {
              case ba:
              case Pa:
              case Oa:
              case xa:
              case wa:
              case Ea:
              case Da:
              case La:
              case Ra:
              case ka:
              case ja:
              case Ia:
              case ma:
              case _a:
              case ga:
              case Sa:
              case ya:
              case va:
              case Aa:
              case Ta:
              case Na:
              case Ca:
                return !0;
              default:
                return !1;
            }
          })(e)
        ) {
          const t = Object.create(Object.getPrototypeOf(e));
          return i.set(e, t), Ua(t, e, r, i, n), t;
        }
        return e;
      }
      function Ua(e, t, r = e, i, n) {
        const s = [...Object.keys(t), ...pa(t)];
        for (let o = 0; o < s.length; o++) {
          const a = s[o],
            c = Object.getOwnPropertyDescriptor(e, a);
          (null == c || c.writable) && (e[a] = qa(t[a], a, r, i, n));
        }
      }
      function Ba(e, t) {
        return (function (e, t) {
          return qa(e, void 0, e, new Map(), t);
        })(e, (r, i, n, s) => {
          const o = t?.(r, i, n, s);
          if (null != o) return o;
          if ('object' == typeof e)
            switch (Object.prototype.toString.call(e)) {
              case ma:
              case ya:
              case wa: {
                const t = new e.constructor(e?.valueOf());
                return Ua(t, e), t;
              }
              case ba: {
                const t = {};
                return (
                  Ua(t, e), (t.length = e.length), (t[Symbol.iterator] = e[Symbol.iterator]), t
                );
              }
              default:
                return;
            }
        });
      }
      function $a(e) {
        return Ba(e);
      }
      function Ma(e) {
        return null !== e && 'object' == typeof e && '[object Arguments]' === fa(e);
      }
      function za(e) {
        return ua(e);
      }
      function Ha(e) {
        if ('object' != typeof e || null == e) return !1;
        if (null === Object.getPrototypeOf(e)) return !0;
        if ('[object Object]' !== Object.prototype.toString.call(e)) {
          const t = e[Symbol.toStringTag];
          return (
            !(null == t || !Object.getOwnPropertyDescriptor(e, Symbol.toStringTag)?.writable) &&
            e.toString() === `[object ${t}]`
          );
        }
        let t = e;
        for (; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t;
      }
      function Va(e, t, r, i) {
        if ((la(e) && (e = Object(e)), null == t || 'object' != typeof t)) return e;
        if (i.has(t))
          return (function (e) {
            if (la(e)) return e;
            if (
              Array.isArray(e) ||
              ua(e) ||
              e instanceof ArrayBuffer ||
              (typeof SharedArrayBuffer < 'u' && e instanceof SharedArrayBuffer)
            )
              return e.slice(0);
            const t = Object.getPrototypeOf(e),
              r = t.constructor;
            if (e instanceof Date || e instanceof Map || e instanceof Set) return new r(e);
            if (e instanceof RegExp) {
              const t = new r(e);
              return (t.lastIndex = e.lastIndex), t;
            }
            if (e instanceof DataView) return new r(e.buffer.slice(0));
            if (e instanceof Error) {
              const t = new r(e.message);
              return (t.stack = e.stack), (t.name = e.name), (t.cause = e.cause), t;
            }
            if (typeof File < 'u' && e instanceof File)
              return new r([e], e.name, { type: e.type, lastModified: e.lastModified });
            if ('object' == typeof e) {
              const r = Object.create(t);
              return Object.assign(r, e);
            }
            return e;
          })(i.get(t));
        if ((i.set(t, e), Array.isArray(t))) {
          t = t.slice();
          for (let e = 0; e < t.length; e++) t[e] = t[e] ?? void 0;
        }
        const n = [...Object.keys(t), ...pa(t)];
        for (let s = 0; s < n.length; s++) {
          const o = n[s];
          let a = t[o],
            c = e[o];
          if (
            (Ma(a) && (a = { ...a }),
            Ma(c) && (c = { ...c }),
            typeof ra < 'u' && ra.isBuffer(a) && (a = $a(a)),
            Array.isArray(a))
          )
            if ('object' == typeof c && null != c) {
              const e = [],
                t = Reflect.ownKeys(c);
              for (let r = 0; r < t.length; r++) {
                const i = t[r];
                e[i] = c[i];
              }
              c = e;
            } else c = [];
          const h = r(c, a, o, e, t, i);
          null != h
            ? (e[o] = h)
            : Array.isArray(a) || (da(c) && da(a))
              ? (e[o] = Va(c, a, r, i))
              : null == c && Ha(a)
                ? (e[o] = Va({}, a, r, i))
                : null == c && za(a)
                  ? (e[o] = $a(a))
                  : (void 0 === c || void 0 !== a) && (e[o] = a);
        }
        return e;
      }
      function Ka(e, ...t) {
        return (function (e, ...t) {
          const r = t.slice(0, -1),
            i = t[t.length - 1];
          let n = e;
          for (let s = 0; s < r.length; s++) n = Va(n, r[s], i, new Map());
          return n;
        })(e, ...t, ha);
      }
      var Fa = Object.defineProperty,
        Wa = Object.defineProperties,
        Ga = Object.getOwnPropertyDescriptors,
        Ya = Object.getOwnPropertySymbols,
        Ja = Object.prototype.hasOwnProperty,
        Za = Object.prototype.propertyIsEnumerable,
        Qa = (e, t, r) =>
          t in e
            ? Fa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        Xa = (e, t) => {
          for (var r in t || (t = {})) Ja.call(t, r) && Qa(e, r, t[r]);
          if (Ya) for (var r of Ya(t)) Za.call(t, r) && Qa(e, r, t[r]);
          return e;
        },
        ec = (e, t) => Wa(e, Ga(t));
      function tc(e, t, r) {
        var i;
        const n = (0, Ie.DQe)(e);
        return (
          (null == (i = t.rpcMap) ? void 0 : i[n.reference]) ||
          `${sa}?chainId=${n.namespace}:${n.reference}&projectId=${r}`
        );
      }
      function rc(e) {
        return e.includes(':') ? e.split(':')[1] : e;
      }
      function ic(e) {
        return e.map((e) => `${e.split(':')[0]}:${e.split(':')[1]}`);
      }
      function nc(e = {}, t = {}) {
        return Ka(sc(e), sc(t));
      }
      function sc(e) {
        var t, r, i, n;
        const s = {};
        if (!(0, Ie.L5o)(e)) return s;
        for (const [o, a] of Object.entries(e)) {
          const e = (0, Ie.gpE)(o) ? [o] : a.chains,
            c = a.methods || [],
            h = a.events || [],
            l = a.rpcMap || {},
            u = (0, Ie.Maj)(o);
          s[u] = ec(Xa(Xa({}, s[u]), a), {
            chains: (0, Ie.eGA)(e, null == (t = s[u]) ? void 0 : t.chains),
            methods: (0, Ie.eGA)(c, null == (r = s[u]) ? void 0 : r.methods),
            events: (0, Ie.eGA)(h, null == (i = s[u]) ? void 0 : i.events),
            rpcMap: Xa(Xa({}, l), null == (n = s[u]) ? void 0 : n.rpcMap),
          });
        }
        return s;
      }
      function oc(e) {
        return e.includes(':') ? e.split(':')[2] : e;
      }
      function ac(e) {
        const t = {};
        for (const [r, i] of Object.entries(e)) {
          const e = i.methods || [],
            n = i.events || [],
            s = i.accounts || [],
            o = (0, Ie.gpE)(r) ? [r] : i.chains ? i.chains : ic(i.accounts);
          t[r] = { chains: o, methods: e, events: n, accounts: s };
        }
        return t;
      }
      function cc(e) {
        return 'number' == typeof e
          ? e
          : e.includes('0x')
            ? parseInt(e, 16)
            : ((e = e.includes(':') ? e.split(':')[1] : e), isNaN(Number(e)) ? e : Number(e));
      }
      const hc = {},
        lc = (e) => hc[e],
        uc = (e, t) => {
          hc[e] = t;
        };
      var dc = Object.defineProperty,
        pc = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? dc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class fc {
        constructor(e) {
          pc(this, 'name', 'polkadot'),
            pc(this, 'client'),
            pc(this, 'httpProviders'),
            pc(this, 'events'),
            pc(this, 'namespace'),
            pc(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = lc('events')),
            (this.client = lc('client')),
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
          const e = this.namespace.chains[0];
          if (!e) throw new Error('ChainId not found');
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
            this.events.emit(ca, `${this.name}:${e}`);
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(':')[1] === this.chainId.toString())
                .map((e) => e.split(':')[2])) ||
            []
          );
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              const i = rc(t);
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || tc(e, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
          return new et(new ta(r, lc('disableProviderPing')));
        }
      }
      var gc = Object.defineProperty,
        yc = Object.defineProperties,
        mc = Object.getOwnPropertyDescriptors,
        wc = Object.getOwnPropertySymbols,
        bc = Object.prototype.hasOwnProperty,
        vc = Object.prototype.propertyIsEnumerable,
        Ec = (e, t, r) =>
          t in e
            ? gc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        Ic = (e, t) => {
          for (var r in t || (t = {})) bc.call(t, r) && Ec(e, r, t[r]);
          if (wc) for (var r of wc(t)) vc.call(t, r) && Ec(e, r, t[r]);
          return e;
        },
        Sc = (e, t) => yc(e, mc(t)),
        Pc = (e, t, r) => Ec(e, 'symbol' != typeof t ? t + '' : t, r);
      class Oc {
        constructor(e) {
          Pc(this, 'name', 'eip155'),
            Pc(this, 'client'),
            Pc(this, 'chainId'),
            Pc(this, 'namespace'),
            Pc(this, 'httpProviders'),
            Pc(this, 'events'),
            (this.namespace = e.namespace),
            (this.events = lc('events')),
            (this.client = lc('client')),
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
            this.events.emit(ca, `${this.name}:${e}`);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId.toString();
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error('ChainId not found');
          return e.split(':')[1];
        }
        createHttpProvider(e, t) {
          const r = t || tc(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
          return new et(new ta(r, lc('disableProviderPing')));
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              const i = parseInt(rc(t));
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getAccounts() {
          const e = this.namespace.accounts;
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
          const e = this.chainId,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        async handleSwitchChain(e) {
          var t, r;
          let i = e.request.params
            ? null == (t = e.request.params[0])
              ? void 0
              : t.chainId
            : '0x0';
          i = i.startsWith('0x') ? i : `0x${i}`;
          const n = parseInt(i, 16);
          if (this.isChainApproved(n)) this.setDefaultChain(`${n}`);
          else {
            if (!this.namespace.methods.includes('wallet_switchEthereumChain'))
              throw new Error(
                `Failed to switch to chain 'eip155:${n}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`
              );
            await this.client.request({
              topic: e.topic,
              request: { method: e.request.method, params: [{ chainId: i }] },
              chainId: null == (r = this.namespace.chains) ? void 0 : r[0],
            }),
              this.setDefaultChain(`${n}`);
          }
          return null;
        }
        isChainApproved(e) {
          return this.namespace.chains.includes(`${this.name}:${e}`);
        }
        async getCapabilities(e) {
          var t, r, i;
          const n = null == (r = null == (t = e.request) ? void 0 : t.params) ? void 0 : r[0];
          if (!n) throw new Error('Missing address parameter in `wallet_getCapabilities` request');
          const s = this.client.session.get(e.topic),
            o = (null == (i = s?.sessionProperties) ? void 0 : i.capabilities) || {};
          if (null != o && o[n]) return o?.[n];
          const a = await this.client.request(e);
          try {
            await this.client.session.update(e.topic, {
              sessionProperties: Sc(Ic({}, s.sessionProperties || {}), {
                capabilities: Sc(Ic({}, o || {}), { [n]: a }),
              }),
            });
          } catch (c) {
            console.warn('Failed to update session with capabilities', c);
          }
          return a;
        }
        async getCallStatus(e) {
          var t, r;
          const i = this.client.session.get(e.topic),
            n = null == (t = i.sessionProperties) ? void 0 : t.bundler_name;
          if (n) {
            const t = this.getBundlerUrl(e.chainId, n);
            try {
              return await this.getUserOperationReceipt(t, e);
            } catch (o) {
              console.warn('Failed to fetch call status from bundler', o, t);
            }
          }
          const s = null == (r = i.sessionProperties) ? void 0 : r.bundler_url;
          if (s)
            try {
              return await this.getUserOperationReceipt(s, e);
            } catch (U) {
              console.warn('Failed to fetch call status from custom bundler', U, s);
            }
          if (this.namespace.methods.includes(e.request.method))
            return await this.client.request(e);
          throw new Error('Fetching call status not approved by the wallet.');
        }
        async getUserOperationReceipt(e, t) {
          var r;
          const i = new URL(e),
            n = await fetch(i, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(
                Be('eth_getUserOperationReceipt', [null == (r = t.request.params) ? void 0 : r[0]])
              ),
            });
          if (!n.ok) throw new Error(`Failed to fetch user operation receipt - ${n.status}`);
          return await n.json();
        }
        getBundlerUrl(e, t) {
          return `${aa}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${t}`;
        }
      }
      var _c = Object.defineProperty,
        xc = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? _c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class Ac {
        constructor(e) {
          xc(this, 'name', 'solana'),
            xc(this, 'client'),
            xc(this, 'httpProviders'),
            xc(this, 'events'),
            xc(this, 'namespace'),
            xc(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = lc('events')),
            (this.client = lc('client')),
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
            this.events.emit(ca, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error('ChainId not found');
          return e.split(':')[1];
        }
        getAccounts() {
          const e = this.namespace.accounts;
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
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              const i = rc(t);
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || tc(e, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
          return new et(new ta(r, lc('disableProviderPing')));
        }
      }
      var Tc = Object.defineProperty,
        Nc = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? Tc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class Cc {
        constructor(e) {
          Nc(this, 'name', 'cosmos'),
            Nc(this, 'client'),
            Nc(this, 'httpProviders'),
            Nc(this, 'events'),
            Nc(this, 'namespace'),
            Nc(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = lc('events')),
            (this.client = lc('client')),
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
          const e = this.namespace.chains[0];
          if (!e) throw new Error('ChainId not found');
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
            this.events.emit(ca, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          const e = this.namespace.accounts;
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
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              const i = rc(t);
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || tc(e, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
          return new et(new ta(r, lc('disableProviderPing')));
        }
      }
      var Rc = Object.defineProperty,
        kc = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? Rc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class jc {
        constructor(e) {
          kc(this, 'name', 'algorand'),
            kc(this, 'client'),
            kc(this, 'httpProviders'),
            kc(this, 'events'),
            kc(this, 'namespace'),
            kc(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = lc('events')),
            (this.client = lc('client')),
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
            const r = t || tc(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
            if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          (this.chainId = e), this.events.emit(ca, `${this.name}:${this.chainId}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error('ChainId not found');
          return e.split(':')[1];
        }
        getAccounts() {
          const e = this.namespace.accounts;
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
          const e = {};
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
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || tc(e, this.namespace, this.client.core.projectId);
          return typeof r > 'u' ? void 0 : new et(new ta(r, lc('disableProviderPing')));
        }
      }
      var Dc = Object.defineProperty,
        Lc = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? Dc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class qc {
        constructor(e) {
          Lc(this, 'name', 'cip34'),
            Lc(this, 'client'),
            Lc(this, 'httpProviders'),
            Lc(this, 'events'),
            Lc(this, 'namespace'),
            Lc(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = lc('events')),
            (this.client = lc('client')),
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
          const e = this.namespace.chains[0];
          if (!e) throw new Error('ChainId not found');
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
            this.events.emit(ca, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          const e = this.namespace.accounts;
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
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              const r = this.getCardanoRPCUrl(t),
                i = rc(t);
              e[i] = this.createHttpProvider(i, r);
            }),
            e
          );
        }
        getHttpProvider() {
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        getCardanoRPCUrl(e) {
          const t = this.namespace.rpcMap;
          if (t) return t[e];
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || this.getCardanoRPCUrl(e);
          if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
          return new et(new ta(r, lc('disableProviderPing')));
        }
      }
      var Uc = Object.defineProperty,
        Bc = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? Uc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class $c {
        constructor(e) {
          Bc(this, 'name', 'elrond'),
            Bc(this, 'client'),
            Bc(this, 'httpProviders'),
            Bc(this, 'events'),
            Bc(this, 'namespace'),
            Bc(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = lc('events')),
            (this.client = lc('client')),
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
            this.events.emit(ca, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error('ChainId not found');
          return e.split(':')[1];
        }
        getAccounts() {
          const e = this.namespace.accounts;
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
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              const i = rc(t);
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || tc(e, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
          return new et(new ta(r, lc('disableProviderPing')));
        }
      }
      var Mc = Object.defineProperty,
        zc = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? Mc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class Hc {
        constructor(e) {
          zc(this, 'name', 'multiversx'),
            zc(this, 'client'),
            zc(this, 'httpProviders'),
            zc(this, 'events'),
            zc(this, 'namespace'),
            zc(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = lc('events')),
            (this.client = lc('client')),
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
            this.events.emit(ca, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error('ChainId not found');
          return e.split(':')[1];
        }
        getAccounts() {
          const e = this.namespace.accounts;
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
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              const i = rc(t);
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || tc(e, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
          return new et(new ta(r, lc('disableProviderPing')));
        }
      }
      var Vc = Object.defineProperty,
        Kc = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? Vc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class Fc {
        constructor(e) {
          Kc(this, 'name', 'near'),
            Kc(this, 'client'),
            Kc(this, 'httpProviders'),
            Kc(this, 'events'),
            Kc(this, 'namespace'),
            Kc(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = lc('events')),
            (this.client = lc('client')),
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
          const e = this.namespace.chains[0];
          if (!e) throw new Error('ChainId not found');
          return e.split(':')[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (((this.chainId = e), !this.httpProviders[e])) {
            const r = t || tc(`${this.name}:${e}`, this.namespace);
            if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          this.events.emit(ca, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(':')[1] === this.chainId.toString())
                .map((e) => e.split(':')[2])) ||
            []
          );
        }
        createHttpProviders() {
          const e = {};
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
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || tc(e, this.namespace);
          return typeof r > 'u' ? void 0 : new et(new ta(r, lc('disableProviderPing')));
        }
      }
      var Wc = Object.defineProperty,
        Gc = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? Wc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class Yc {
        constructor(e) {
          Gc(this, 'name', 'tezos'),
            Gc(this, 'client'),
            Gc(this, 'httpProviders'),
            Gc(this, 'events'),
            Gc(this, 'namespace'),
            Gc(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = lc('events')),
            (this.client = lc('client')),
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
          const e = this.namespace.chains[0];
          if (!e) throw new Error('ChainId not found');
          return e.split(':')[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (((this.chainId = e), !this.httpProviders[e])) {
            const r = t || tc(`${this.name}:${e}`, this.namespace);
            if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          this.events.emit(ca, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(':')[1] === this.chainId.toString())
                .map((e) => e.split(':')[2])) ||
            []
          );
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              e[t] = this.createHttpProvider(t);
            }),
            e
          );
        }
        getHttpProvider() {
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > 'u') throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || tc(e, this.namespace);
          return typeof r > 'u' ? void 0 : new et(new ta(r));
        }
      }
      var Jc = Object.defineProperty,
        Zc = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? Jc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class Qc {
        constructor(e) {
          Zc(this, 'name', oa),
            Zc(this, 'client'),
            Zc(this, 'httpProviders'),
            Zc(this, 'events'),
            Zc(this, 'namespace'),
            Zc(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = lc('events')),
            (this.client = lc('client')),
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
            this.events.emit(ca, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error('ChainId not found');
          return e.split(':')[1];
        }
        getAccounts() {
          const e = this.namespace.accounts;
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
          const r = {};
          return (
            null == (t = null == (e = this.namespace) ? void 0 : e.accounts) ||
              t.forEach((e) => {
                const t = (0, Ie.DQe)(e);
                r[`${t.namespace}:${t.reference}`] = this.createHttpProvider(e);
              }),
            r
          );
        }
        getHttpProvider(e) {
          const t = this.httpProviders[e];
          if (typeof t > 'u') throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || tc(e, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
          return new et(new ta(r, lc('disableProviderPing')));
        }
      }
      var Xc = Object.defineProperty,
        eh = Object.defineProperties,
        th = Object.getOwnPropertyDescriptors,
        rh = Object.getOwnPropertySymbols,
        ih = Object.prototype.hasOwnProperty,
        nh = Object.prototype.propertyIsEnumerable,
        sh = (e, t, r) =>
          t in e
            ? Xc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        oh = (e, t) => {
          for (var r in t || (t = {})) ih.call(t, r) && sh(e, r, t[r]);
          if (rh) for (var r of rh(t)) nh.call(t, r) && sh(e, r, t[r]);
          return e;
        },
        ah = (e, t) => eh(e, th(t)),
        ch = (e, t, r) => sh(e, 'symbol' != typeof t ? t + '' : t, r);
      class hh {
        constructor(e) {
          ch(this, 'client'),
            ch(this, 'namespaces'),
            ch(this, 'optionalNamespaces'),
            ch(this, 'sessionProperties'),
            ch(this, 'scopedProperties'),
            ch(this, 'events', new (n())()),
            ch(this, 'rpcProviders', {}),
            ch(this, 'session'),
            ch(this, 'providerOpts'),
            ch(this, 'logger'),
            ch(this, 'uri'),
            ch(this, 'disableProviderPing', !1),
            (this.providerOpts = e),
            (this.logger =
              typeof e?.logger < 'u' && 'string' != typeof e?.logger
                ? e.logger
                : V()(ae({ level: e?.logger || ia }))),
            (this.disableProviderPing = e?.disableProviderPing || !1);
        }
        static async init(e) {
          const t = new hh(e);
          return await t.initialize(), t;
        }
        async request(e, t, r) {
          const [i, n] = this.validateChain(t);
          if (!this.session) throw new Error('Please call connect() before request()');
          return await this.getProvider(i).request({
            request: oh({}, e),
            chainId: `${i}:${n}`,
            topic: this.session.topic,
            expiry: r,
          });
        }
        sendAsync(e, t, r, i) {
          const n = new Date().getTime();
          this.request(e, r, i)
            .then((e) => t(null, $e(n, e)))
            .catch((e) => t(e, void 0));
        }
        async enable() {
          if (!this.client) throw new Error('Sign Client not initialized');
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
          if (!this.session) throw new Error('Please call connect() before enable()');
          await this.client.disconnect({
            topic: null == (e = this.session) ? void 0 : e.topic,
            reason: (0, Ie.D6H)('USER_DISCONNECTED'),
          }),
            await this.cleanup();
        }
        async connect(e) {
          if (!this.client) throw new Error('Sign Client not initialized');
          if ((this.setNamespaces(e), await this.cleanupPendingPairings(), !e.skipPairing))
            return await this.pair(e.pairingTopic);
        }
        async authenticate(e, t) {
          if (!this.client) throw new Error('Sign Client not initialized');
          this.setNamespaces(e), await this.cleanupPendingPairings();
          const { uri: r, response: i } = await this.client.authenticate(e, t);
          r && ((this.uri = r), this.events.emit('display_uri', r));
          const n = await i();
          if (((this.session = n.session), this.session)) {
            const e = ac(this.session.namespaces);
            (this.namespaces = nc(this.namespaces, e)),
              await this.persist('namespaces', this.namespaces),
              this.onConnect();
          }
          return n;
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
          const { uri: t, approval: r } = await this.client.connect({
            pairingTopic: e,
            requiredNamespaces: this.namespaces,
            optionalNamespaces: this.optionalNamespaces,
            sessionProperties: this.sessionProperties,
            scopedProperties: this.scopedProperties,
          });
          t && ((this.uri = t), this.events.emit('display_uri', t));
          const i = await r();
          this.session = i;
          const n = ac(i.namespaces);
          return (
            (this.namespaces = nc(this.namespaces, n)),
            await this.persist('namespaces', this.namespaces),
            await this.persist('optionalNamespaces', this.optionalNamespaces),
            this.onConnect(),
            this.session
          );
        }
        setDefaultChain(e, t) {
          try {
            if (!this.session) return;
            const [r, i] = this.validateChain(e),
              n = this.getProvider(r);
            n.name === oa ? n.setDefaultChain(`${r}:${i}`, t) : n.setDefaultChain(i, t);
          } catch (se) {
            if (!/Please call connect/.test(se.message)) throw se;
          }
        }
        async cleanupPendingPairings(e = {}) {
          this.logger.info('Cleaning up inactive pairings...');
          const t = this.client.pairing.getAll();
          if ((0, Ie.qt8)(t)) {
            for (const r of t)
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
              (await zo.init({
                core: this.providerOpts.core,
                logger: this.providerOpts.logger || ia,
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
            } catch (se) {
              throw (
                (this.logger.error('Failed to get session', se),
                new Error(
                  `The provided session: ${null == (t = null == (e = this.providerOpts) ? void 0 : e.session) ? void 0 : t.topic} doesn't exist in the Sign client`
                ))
              );
            }
          else {
            const e = this.client.session.getAll();
            this.session = e[0];
          }
          this.logger.trace('SignClient Initialized');
        }
        createProviders() {
          if (!this.client) throw new Error('Sign Client not initialized');
          if (!this.session)
            throw new Error('Session not initialized. Please call connect() before enable()');
          const e = [...new Set(Object.keys(this.session.namespaces).map((e) => (0, Ie.Maj)(e)))];
          uc('client', this.client),
            uc('events', this.events),
            uc('disableProviderPing', this.disableProviderPing),
            e.forEach((e) => {
              if (!this.session) return;
              const t = (function (e, t) {
                  const r = Object.keys(t.namespaces).filter((t) => t.includes(e));
                  if (!r.length) return [];
                  const i = [];
                  return (
                    r.forEach((e) => {
                      const r = t.namespaces[e].accounts;
                      i.push(...r);
                    }),
                    i
                  );
                })(e, this.session),
                r = ic(t),
                i = nc(this.namespaces, this.optionalNamespaces),
                n = ah(oh({}, i[e]), { accounts: t, chains: r });
              switch (e) {
                case 'eip155':
                  this.rpcProviders[e] = new Oc({ namespace: n });
                  break;
                case 'algorand':
                  this.rpcProviders[e] = new jc({ namespace: n });
                  break;
                case 'solana':
                  this.rpcProviders[e] = new Ac({ namespace: n });
                  break;
                case 'cosmos':
                  this.rpcProviders[e] = new Cc({ namespace: n });
                  break;
                case 'polkadot':
                  this.rpcProviders[e] = new fc({ namespace: n });
                  break;
                case 'cip34':
                  this.rpcProviders[e] = new qc({ namespace: n });
                  break;
                case 'elrond':
                  this.rpcProviders[e] = new $c({ namespace: n });
                  break;
                case 'multiversx':
                  this.rpcProviders[e] = new Hc({ namespace: n });
                  break;
                case 'near':
                  this.rpcProviders[e] = new Fc({ namespace: n });
                  break;
                case 'tezos':
                  this.rpcProviders[e] = new Yc({ namespace: n });
                  break;
                default:
                  this.rpcProviders.generic
                    ? this.rpcProviders.generic.updateNamespace(n)
                    : (this.rpcProviders.generic = new Qc({ namespace: n }));
              }
            });
        }
        registerEventListeners() {
          if (typeof this.client > 'u') throw new Error('Sign Client is not initialized');
          this.client.on('session_ping', (e) => {
            var t;
            const { topic: r } = e;
            r === (null == (t = this.session) ? void 0 : t.topic) &&
              this.events.emit('session_ping', e);
          }),
            this.client.on('session_event', (e) => {
              var t;
              const { params: r, topic: i } = e;
              if (i !== (null == (t = this.session) ? void 0 : t.topic)) return;
              const { event: n } = r;
              if ('accountsChanged' === n.name) {
                const e = n.data;
                e && (0, Ie.qt8)(e) && this.events.emit('accountsChanged', e.map(oc));
              } else if ('chainChanged' === n.name) {
                const e = r.chainId,
                  t = r.event.data,
                  i = (0, Ie.Maj)(e),
                  n = cc(e) !== cc(t) ? `${i}:${cc(t)}` : e;
                this.onChainChanged(n);
              } else this.events.emit(n.name, n.data);
              this.events.emit('session_event', e);
            }),
            this.client.on('session_update', ({ topic: e, params: t }) => {
              var r, i;
              if (e !== (null == (r = this.session) ? void 0 : r.topic)) return;
              const { namespaces: n } = t,
                s = null == (i = this.client) ? void 0 : i.session.get(e);
              (this.session = ah(oh({}, s), { namespaces: n })),
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
                  ah(oh({}, (0, Ie.D6H)('USER_DISCONNECTED')), { data: e.topic })
                ));
            }),
            this.on(ca, (e) => {
              this.onChainChanged(e, !0);
            });
        }
        getProvider(e) {
          return this.rpcProviders[e] || this.rpcProviders.generic;
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
          const {
            namespaces: t,
            optionalNamespaces: r,
            sessionProperties: i,
            scopedProperties: n,
          } = e;
          t && Object.keys(t).length && (this.namespaces = t),
            r && Object.keys(r).length && (this.optionalNamespaces = r),
            (this.sessionProperties = i),
            (this.scopedProperties = n);
        }
        validateChain(e) {
          const [t, r] = e?.split(':') || ['', ''];
          if (!this.namespaces || !Object.keys(this.namespaces).length) return [t, r];
          if (
            t &&
            !Object.keys(this.namespaces || {})
              .map((e) => (0, Ie.Maj)(e))
              .includes(t)
          )
            throw new Error(
              `Namespace '${t}' is not configured. Please call connect() first with namespace config.`
            );
          if (t && r) return [t, r];
          const i = (0, Ie.Maj)(Object.keys(this.namespaces)[0]);
          return [i, this.rpcProviders[i].getDefaultChain()];
        }
        async requestAccounts() {
          const [e] = this.validateChain();
          return await this.getProvider(e).requestAccounts();
        }
        async onChainChanged(e, t = !1) {
          if (!this.namespaces) return;
          const [r, i] = this.validateChain(e);
          if (!i) return;
          this.updateNamespaceChain(r, i), this.events.emit('chainChanged', i);
          const n = this.getProvider(r).getDefaultChain();
          t || this.getProvider(r).setDefaultChain(i),
            this.emitAccountsChangedOnChainChange({
              namespace: r,
              previousChainId: n,
              newChainId: e,
            }),
            await this.persist('namespaces', this.namespaces);
        }
        emitAccountsChangedOnChainChange({ namespace: e, previousChainId: t, newChainId: r }) {
          var i, n;
          try {
            if (t === r) return;
            const s =
              null == (n = null == (i = this.session) ? void 0 : i.namespaces[e])
                ? void 0
                : n.accounts;
            if (!s) return;
            const o = s.filter((e) => e.includes(`${r}:`)).map(oc);
            if (!(0, Ie.qt8)(o)) return;
            this.events.emit('accountsChanged', o);
          } catch (s) {
            this.logger.warn('Failed to emit accountsChanged on chain change', s);
          }
        }
        updateNamespaceChain(e, t) {
          if (!this.namespaces) return;
          const r = this.namespaces[e] ? e : `${e}:${t}`,
            i = { chains: [], methods: [], events: [], defaultChain: t };
          this.namespaces[r]
            ? this.namespaces[r] && (this.namespaces[r].defaultChain = t)
            : (this.namespaces[r] = i);
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
          const i = (null == (r = this.session) ? void 0 : r.topic) || '';
          await this.client.core.storage.setItem(`${na}/${e}${i}`, t);
        }
        async getFromStore(e) {
          var t;
          const r = (null == (t = this.session) ? void 0 : t.topic) || '';
          return await this.client.core.storage.getItem(`${na}/${e}${r}`);
        }
        async deleteFromStore(e) {
          var t;
          const r = (null == (t = this.session) ? void 0 : t.topic) || '';
          await this.client.core.storage.removeItem(`${na}/${e}${r}`);
        }
        async cleanupStorage() {
          var e;
          try {
            if ((null == (e = this.client) ? void 0 : e.session.length) > 0) return;
            const t = await this.client.core.storage.getKeys();
            for (const e of t) e.startsWith(na) && (await this.client.core.storage.removeItem(e));
          } catch (He) {
            this.logger.warn('Failed to cleanup storage', He);
          }
        }
      }
      const lh = hh;
    },
    72030: function (e) {
      e.exports = function () {
        throw new Error(
          'ws does not work in the browser. Browser clients must use the native WebSocket object'
        );
      };
    },
    49392: function (e, t, r) {
      r.d(t, {
        Au: function () {
          return Ir;
        },
        bG: function () {
          return br;
        },
        vf: function () {
          return Sr;
        },
        xp: function () {
          return Er;
        },
      });
      var i = r(66736),
        n = r(85094);
      function s(e, ...t) {
        if (
          !(function (e) {
            return (
              e instanceof Uint8Array ||
              (ArrayBuffer.isView(e) && 'Uint8Array' === e.constructor.name)
            );
          })(e)
        )
          throw new Error('Uint8Array expected');
        if (t.length > 0 && !t.includes(e.length))
          throw new Error('Uint8Array expected of length ' + t + ', got length=' + e.length);
      }
      function o(e, t = !0) {
        if (e.destroyed) throw new Error('Hash instance has been destroyed');
        if (t && e.finished) throw new Error('Hash#digest() has already been called');
      }
      const a =
          'object' == typeof globalThis && 'crypto' in globalThis ? globalThis.crypto : void 0,
        c = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength);
      function h(e) {
        return (
          'string' == typeof e &&
            (e = (function (e) {
              if ('string' != typeof e)
                throw new Error('utf8ToBytes expected string, got ' + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          s(e),
          e
        );
      }
      function l(e = 32) {
        if (a && 'function' == typeof a.getRandomValues)
          return a.getRandomValues(new Uint8Array(e));
        if (a && 'function' == typeof a.randomBytes) return a.randomBytes(e);
        throw new Error('crypto.getRandomValues must be defined');
      }
      const u = BigInt(2 ** 32 - 1),
        d = BigInt(32);
      function p(e, t = !1) {
        return t
          ? { h: Number(e & u), l: Number((e >> d) & u) }
          : { h: 0 | Number((e >> d) & u), l: 0 | Number(e & u) };
      }
      const f = {
          fromBig: p,
          split: function (e, t = !1) {
            let r = new Uint32Array(e.length),
              i = new Uint32Array(e.length);
            for (let n = 0; n < e.length; n++) {
              const { h: s, l: o } = p(e[n], t);
              [r[n], i[n]] = [s, o];
            }
            return [r, i];
          },
          toBig: (e, t) => (BigInt(e >>> 0) << d) | BigInt(t >>> 0),
          shrSH: (e, t, r) => e >>> r,
          shrSL: (e, t, r) => (e << (32 - r)) | (t >>> r),
          rotrSH: (e, t, r) => (e >>> r) | (t << (32 - r)),
          rotrSL: (e, t, r) => (e << (32 - r)) | (t >>> r),
          rotrBH: (e, t, r) => (e << (64 - r)) | (t >>> (r - 32)),
          rotrBL: (e, t, r) => (e >>> (r - 32)) | (t << (64 - r)),
          rotr32H: (e, t) => t,
          rotr32L: (e, t) => e,
          rotlSH: (e, t, r) => (e << r) | (t >>> (32 - r)),
          rotlSL: (e, t, r) => (t << r) | (e >>> (32 - r)),
          rotlBH: (e, t, r) => (t << (r - 32)) | (e >>> (64 - r)),
          rotlBL: (e, t, r) => (e << (r - 32)) | (t >>> (64 - r)),
          add: function (e, t, r, i) {
            const n = (t >>> 0) + (i >>> 0);
            return { h: (e + r + ((n / 2 ** 32) | 0)) | 0, l: 0 | n };
          },
          add3L: (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0),
          add3H: (e, t, r, i) => (t + r + i + ((e / 2 ** 32) | 0)) | 0,
          add4L: (e, t, r, i) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (i >>> 0),
          add4H: (e, t, r, i, n) => (t + r + i + n + ((e / 2 ** 32) | 0)) | 0,
          add5H: (e, t, r, i, n, s) => (t + r + i + n + s + ((e / 2 ** 32) | 0)) | 0,
          add5L: (e, t, r, i, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (i >>> 0) + (n >>> 0),
        },
        [g, y] = f.split(
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
        m = new Uint32Array(80),
        w = new Uint32Array(80);
      class b extends class extends class {
        clone() {
          return this._cloneInto();
        }
      } {
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
          const { view: t, buffer: r, blockLen: i } = this,
            n = (e = h(e)).length;
          for (let s = 0; s < n; ) {
            const o = Math.min(i - this.pos, n - s);
            if (o !== i)
              r.set(e.subarray(s, s + o), this.pos),
                (this.pos += o),
                (s += o),
                this.pos === i && (this.process(t, 0), (this.pos = 0));
            else {
              const t = c(e);
              for (; i <= n - s; s += i) this.process(t, s);
            }
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          o(this),
            (function (e, t) {
              s(e);
              const r = t.outputLen;
              if (e.length < r)
                throw new Error('digestInto() expects output buffer of length at least ' + r);
            })(e, this),
            (this.finished = !0);
          const { buffer: t, view: r, blockLen: i, isLE: n } = this;
          let { pos: a } = this;
          (t[a++] = 128),
            this.buffer.subarray(a).fill(0),
            this.padOffset > i - a && (this.process(r, 0), (a = 0));
          for (let s = a; s < i; s++) t[s] = 0;
          (function (e, t, r, i) {
            if ('function' == typeof e.setBigUint64) return e.setBigUint64(t, r, i);
            const n = BigInt(32),
              s = BigInt(4294967295),
              o = Number((r >> n) & s),
              a = Number(r & s),
              c = i ? 4 : 0,
              h = i ? 0 : 4;
            e.setUint32(t + c, o, i), e.setUint32(t + h, a, i);
          })(r, i - 8, BigInt(8 * this.length), n),
            this.process(r, 0);
          const h = c(e),
            l = this.outputLen;
          if (l % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
          const u = l / 4,
            d = this.get();
          if (u > d.length) throw new Error('_sha2: outputLen bigger than state');
          for (let s = 0; s < u; s++) h.setUint32(4 * s, d[s], n);
        }
        digest() {
          const { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          const r = e.slice(0, t);
          return this.destroy(), r;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          const { blockLen: t, buffer: r, length: i, finished: n, destroyed: s, pos: o } = this;
          return (
            (e.length = i),
            (e.pos = o),
            (e.finished = n),
            (e.destroyed = s),
            i % t && e.buffer.set(r),
            e
          );
        }
      } {
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
          const {
            Ah: e,
            Al: t,
            Bh: r,
            Bl: i,
            Ch: n,
            Cl: s,
            Dh: o,
            Dl: a,
            Eh: c,
            El: h,
            Fh: l,
            Fl: u,
            Gh: d,
            Gl: p,
            Hh: f,
            Hl: g,
          } = this;
          return [e, t, r, i, n, s, o, a, c, h, l, u, d, p, f, g];
        }
        set(e, t, r, i, n, s, o, a, c, h, l, u, d, p, f, g) {
          (this.Ah = 0 | e),
            (this.Al = 0 | t),
            (this.Bh = 0 | r),
            (this.Bl = 0 | i),
            (this.Ch = 0 | n),
            (this.Cl = 0 | s),
            (this.Dh = 0 | o),
            (this.Dl = 0 | a),
            (this.Eh = 0 | c),
            (this.El = 0 | h),
            (this.Fh = 0 | l),
            (this.Fl = 0 | u),
            (this.Gh = 0 | d),
            (this.Gl = 0 | p),
            (this.Hh = 0 | f),
            (this.Hl = 0 | g);
        }
        process(e, t) {
          for (let f = 0; f < 16; f++, t += 4)
            (m[f] = e.getUint32(t)), (w[f] = e.getUint32((t += 4)));
          for (let g = 16; g < 80; g++) {
            const e = 0 | m[g - 15],
              t = 0 | w[g - 15],
              r = f.rotrSH(e, t, 1) ^ f.rotrSH(e, t, 8) ^ f.shrSH(e, t, 7),
              i = f.rotrSL(e, t, 1) ^ f.rotrSL(e, t, 8) ^ f.shrSL(e, t, 7),
              n = 0 | m[g - 2],
              s = 0 | w[g - 2],
              o = f.rotrSH(n, s, 19) ^ f.rotrBH(n, s, 61) ^ f.shrSH(n, s, 6),
              a = f.rotrSL(n, s, 19) ^ f.rotrBL(n, s, 61) ^ f.shrSL(n, s, 6),
              c = f.add4L(i, a, w[g - 7], w[g - 16]),
              h = f.add4H(c, r, o, m[g - 7], m[g - 16]);
            (m[g] = 0 | h), (w[g] = 0 | c);
          }
          let {
            Ah: r,
            Al: i,
            Bh: n,
            Bl: s,
            Ch: o,
            Cl: a,
            Dh: c,
            Dl: h,
            Eh: l,
            El: u,
            Fh: d,
            Fl: p,
            Gh: b,
            Gl: v,
            Hh: E,
            Hl: I,
          } = this;
          for (let S = 0; S < 80; S++) {
            const e = f.rotrSH(l, u, 14) ^ f.rotrSH(l, u, 18) ^ f.rotrBH(l, u, 41),
              t = f.rotrSL(l, u, 14) ^ f.rotrSL(l, u, 18) ^ f.rotrBL(l, u, 41),
              P = (l & d) ^ (~l & b),
              O = (u & p) ^ (~u & v),
              _ = f.add5L(I, t, O, y[S], w[S]),
              x = f.add5H(_, E, e, P, g[S], m[S]),
              A = 0 | _,
              T = f.rotrSH(r, i, 28) ^ f.rotrBH(r, i, 34) ^ f.rotrBH(r, i, 39),
              N = f.rotrSL(r, i, 28) ^ f.rotrBL(r, i, 34) ^ f.rotrBL(r, i, 39),
              C = (r & n) ^ (r & o) ^ (n & o),
              R = (i & s) ^ (i & a) ^ (s & a);
            (E = 0 | b),
              (I = 0 | v),
              (b = 0 | d),
              (v = 0 | p),
              (d = 0 | l),
              (p = 0 | u),
              ({ h: l, l: u } = f.add(0 | c, 0 | h, 0 | x, 0 | A)),
              (c = 0 | o),
              (h = 0 | a),
              (o = 0 | n),
              (a = 0 | s),
              (n = 0 | r),
              (s = 0 | i);
            const k = f.add3L(A, N, R);
            (r = f.add3H(k, x, T, C)), (i = 0 | k);
          }
          ({ h: r, l: i } = f.add(0 | this.Ah, 0 | this.Al, 0 | r, 0 | i)),
            ({ h: n, l: s } = f.add(0 | this.Bh, 0 | this.Bl, 0 | n, 0 | s)),
            ({ h: o, l: a } = f.add(0 | this.Ch, 0 | this.Cl, 0 | o, 0 | a)),
            ({ h: c, l: h } = f.add(0 | this.Dh, 0 | this.Dl, 0 | c, 0 | h)),
            ({ h: l, l: u } = f.add(0 | this.Eh, 0 | this.El, 0 | l, 0 | u)),
            ({ h: d, l: p } = f.add(0 | this.Fh, 0 | this.Fl, 0 | d, 0 | p)),
            ({ h: b, l: v } = f.add(0 | this.Gh, 0 | this.Gl, 0 | b, 0 | v)),
            ({ h: E, l: I } = f.add(0 | this.Hh, 0 | this.Hl, 0 | E, 0 | I)),
            this.set(r, i, n, s, o, a, c, h, l, u, d, p, b, v, E, I);
        }
        roundClean() {
          m.fill(0), w.fill(0);
        }
        destroy() {
          this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      }
      const v = (function (e) {
          const t = (t) => e().update(h(t)).digest(),
            r = e();
          return (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = () => e()), t;
        })(() => new b()),
        E = BigInt(0),
        I = BigInt(1),
        S = BigInt(2);
      function P(e) {
        return (
          e instanceof Uint8Array || (ArrayBuffer.isView(e) && 'Uint8Array' === e.constructor.name)
        );
      }
      function O(e) {
        if (!P(e)) throw new Error('Uint8Array expected');
      }
      function _(e, t) {
        if ('boolean' != typeof t) throw new Error(e + ' boolean expected, got ' + t);
      }
      const x = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
      function A(e) {
        O(e);
        let t = '';
        for (let r = 0; r < e.length; r++) t += x[e[r]];
        return t;
      }
      function T(e) {
        if ('string' != typeof e) throw new Error('hex string expected, got ' + typeof e);
        return '' === e ? E : BigInt('0x' + e);
      }
      const N = 48,
        C = 57,
        R = 65,
        k = 70,
        j = 97,
        D = 102;
      function L(e) {
        return e >= N && e <= C
          ? e - N
          : e >= R && e <= k
            ? e - (R - 10)
            : e >= j && e <= D
              ? e - (j - 10)
              : void 0;
      }
      function q(e) {
        if ('string' != typeof e) throw new Error('hex string expected, got ' + typeof e);
        const t = e.length,
          r = t / 2;
        if (t % 2) throw new Error('hex string expected, got unpadded hex of length ' + t);
        const i = new Uint8Array(r);
        for (let n = 0, s = 0; n < r; n++, s += 2) {
          const t = L(e.charCodeAt(s)),
            r = L(e.charCodeAt(s + 1));
          if (void 0 === t || void 0 === r) {
            const t = e[s] + e[s + 1];
            throw new Error('hex string expected, got non-hex character "' + t + '" at index ' + s);
          }
          i[n] = 16 * t + r;
        }
        return i;
      }
      function U(e) {
        return O(e), T(A(Uint8Array.from(e).reverse()));
      }
      function B(e, t) {
        return q(e.toString(16).padStart(2 * t, '0'));
      }
      function $(e, t) {
        return B(e, t).reverse();
      }
      function M(e, t, r) {
        let i;
        if ('string' == typeof t)
          try {
            i = q(t);
          } catch (s) {
            throw new Error(e + ' must be hex string or Uint8Array, cause: ' + s);
          }
        else {
          if (!P(t)) throw new Error(e + ' must be hex string or Uint8Array');
          i = Uint8Array.from(t);
        }
        const n = i.length;
        if ('number' == typeof r && n !== r)
          throw new Error(e + ' of length ' + r + ' expected, got ' + n);
        return i;
      }
      function z(...e) {
        let t = 0;
        for (let i = 0; i < e.length; i++) {
          const r = e[i];
          O(r), (t += r.length);
        }
        const r = new Uint8Array(t);
        for (let i = 0, n = 0; i < e.length; i++) {
          const t = e[i];
          r.set(t, n), (n += t.length);
        }
        return r;
      }
      const H = (e) => 'bigint' == typeof e && E <= e;
      function V(e, t, r, i) {
        if (
          !(function (e, t, r) {
            return H(e) && H(t) && H(r) && t <= e && e < r;
          })(t, r, i)
        )
          throw new Error('expected valid ' + e + ': ' + r + ' <= n < ' + i + ', got ' + t);
      }
      const K = (e) => (S << BigInt(e - 1)) - I,
        F = {
          bigint: (e) => 'bigint' == typeof e,
          function: (e) => 'function' == typeof e,
          boolean: (e) => 'boolean' == typeof e,
          string: (e) => 'string' == typeof e,
          stringOrUint8Array: (e) => 'string' == typeof e || P(e),
          isSafeInteger: (e) => Number.isSafeInteger(e),
          array: (e) => Array.isArray(e),
          field: (e, t) => t.Fp.isValid(e),
          hash: (e) => 'function' == typeof e && Number.isSafeInteger(e.outputLen),
        };
      function W(e, t, r = {}) {
        const i = (t, r, i) => {
          const n = F[r];
          if ('function' != typeof n) throw new Error('invalid validator function');
          const s = e[t];
          if ((!i || void 0 !== s) && !n(s, e))
            throw new Error('param ' + String(t) + ' is invalid. Expected ' + r + ', got ' + s);
        };
        for (const [n, s] of Object.entries(t)) i(n, s, !1);
        for (const [n, s] of Object.entries(r)) i(n, s, !0);
        return e;
      }
      function G(e) {
        const t = new WeakMap();
        return (r, ...i) => {
          const n = t.get(r);
          if (void 0 !== n) return n;
          const s = e(r, ...i);
          return t.set(r, s), s;
        };
      }
      const Y = BigInt(0),
        J = BigInt(1),
        Z = BigInt(2),
        Q = BigInt(3),
        X = BigInt(4),
        ee = BigInt(5),
        te = BigInt(8);
      function re(e, t) {
        const r = e % t;
        return r >= Y ? r : t + r;
      }
      function ie(e, t, r) {
        if (t < Y) throw new Error('invalid exponent, negatives unsupported');
        if (r <= Y) throw new Error('invalid modulus');
        if (r === J) return Y;
        let i = J;
        for (; t > Y; ) t & J && (i = (i * e) % r), (e = (e * e) % r), (t >>= J);
        return i;
      }
      function ne(e, t, r) {
        let i = e;
        for (; t-- > Y; ) (i *= i), (i %= r);
        return i;
      }
      function se(e, t) {
        if (e === Y) throw new Error('invert: expected non-zero number');
        if (t <= Y) throw new Error('invert: expected positive modulus, got ' + t);
        let r = re(e, t),
          i = t,
          n = Y,
          s = J;
        for (; r !== Y; ) {
          const e = i % r,
            t = n - s * (i / r);
          (i = r), (r = e), (n = s), (s = t);
        }
        if (i !== J) throw new Error('invert: does not exist');
        return re(n, t);
      }
      function oe(e) {
        if (e % X === Q) {
          const t = (e + J) / X;
          return function (e, r) {
            const i = e.pow(r, t);
            if (!e.eql(e.sqr(i), r)) throw new Error('Cannot find square root');
            return i;
          };
        }
        if (e % te === ee) {
          const t = (e - ee) / te;
          return function (e, r) {
            const i = e.mul(r, Z),
              n = e.pow(i, t),
              s = e.mul(r, n),
              o = e.mul(e.mul(s, Z), n),
              a = e.mul(s, e.sub(o, e.ONE));
            if (!e.eql(e.sqr(a), r)) throw new Error('Cannot find square root');
            return a;
          };
        }
        return (function (e) {
          const t = (e - J) / Z;
          let r, i, n;
          for (r = e - J, i = 0; r % Z === Y; r /= Z, i++);
          for (n = Z; n < e && ie(n, t, e) !== e - J; n++)
            if (n > 1e3) throw new Error('Cannot find square root: likely non-prime P');
          if (1 === i) {
            const t = (e + J) / X;
            return function (e, r) {
              const i = e.pow(r, t);
              if (!e.eql(e.sqr(i), r)) throw new Error('Cannot find square root');
              return i;
            };
          }
          const s = (r + J) / Z;
          return function (e, o) {
            if (e.pow(o, t) === e.neg(e.ONE)) throw new Error('Cannot find square root');
            let a = i,
              c = e.pow(e.mul(e.ONE, n), r),
              h = e.pow(o, s),
              l = e.pow(o, r);
            for (; !e.eql(l, e.ONE); ) {
              if (e.eql(l, e.ZERO)) return e.ZERO;
              let t = 1;
              for (let i = e.sqr(l); t < a && !e.eql(i, e.ONE); t++) i = e.sqr(i);
              const r = e.pow(c, J << BigInt(a - t - 1));
              (c = e.sqr(r)), (h = e.mul(h, r)), (l = e.mul(l, c)), (a = t);
            }
            return h;
          };
        })(e);
      }
      const ae = [
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
      function ce(e, t) {
        const r = void 0 !== t ? t : e.toString(2).length;
        return { nBitLength: r, nByteLength: Math.ceil(r / 8) };
      }
      function he(e, t, r = !1, i = {}) {
        if (e <= Y) throw new Error('invalid field: expected ORDER > 0, got ' + e);
        const { nBitLength: n, nByteLength: s } = ce(e, t);
        if (s > 2048) throw new Error('invalid field: expected ORDER of <= 2048 bytes');
        let o;
        const a = Object.freeze({
          ORDER: e,
          isLE: r,
          BITS: n,
          BYTES: s,
          MASK: K(n),
          ZERO: Y,
          ONE: J,
          create: (t) => re(t, e),
          isValid: (t) => {
            if ('bigint' != typeof t)
              throw new Error('invalid field element: expected bigint, got ' + typeof t);
            return Y <= t && t < e;
          },
          is0: (e) => e === Y,
          isOdd: (e) => (e & J) === J,
          neg: (t) => re(-t, e),
          eql: (e, t) => e === t,
          sqr: (t) => re(t * t, e),
          add: (t, r) => re(t + r, e),
          sub: (t, r) => re(t - r, e),
          mul: (t, r) => re(t * r, e),
          pow: (e, t) =>
            (function (e, t, r) {
              if (r < Y) throw new Error('invalid exponent, negatives unsupported');
              if (r === Y) return e.ONE;
              if (r === J) return t;
              let i = e.ONE,
                n = t;
              for (; r > Y; ) r & J && (i = e.mul(i, n)), (n = e.sqr(n)), (r >>= J);
              return i;
            })(a, e, t),
          div: (t, r) => re(t * se(r, e), e),
          sqrN: (e) => e * e,
          addN: (e, t) => e + t,
          subN: (e, t) => e - t,
          mulN: (e, t) => e * t,
          inv: (t) => se(t, e),
          sqrt: i.sqrt || ((t) => (o || (o = oe(e)), o(a, t))),
          invertBatch: (e) =>
            (function (e, t) {
              const r = new Array(t.length),
                i = t.reduce((t, i, n) => (e.is0(i) ? t : ((r[n] = t), e.mul(t, i))), e.ONE),
                n = e.inv(i);
              return (
                t.reduceRight(
                  (t, i, n) => (e.is0(i) ? t : ((r[n] = e.mul(t, r[n])), e.mul(t, i))),
                  n
                ),
                r
              );
            })(a, e),
          cmov: (e, t, r) => (r ? t : e),
          toBytes: (e) => (r ? $(e, s) : B(e, s)),
          fromBytes: (e) => {
            if (e.length !== s)
              throw new Error('Field.fromBytes: expected ' + s + ' bytes, got ' + e.length);
            return r
              ? U(e)
              : (function (e) {
                  return T(A(e));
                })(e);
          },
        });
        return Object.freeze(a);
      }
      const le = BigInt(0),
        ue = BigInt(1);
      function de(e, t) {
        const r = t.negate();
        return e ? r : t;
      }
      function pe(e, t) {
        if (!Number.isSafeInteger(e) || e <= 0 || e > t)
          throw new Error('invalid window size, expected [1..' + t + '], got W=' + e);
      }
      function fe(e, t) {
        pe(e, t);
        return { windows: Math.ceil(t / e) + 1, windowSize: 2 ** (e - 1) };
      }
      const ge = new WeakMap(),
        ye = new WeakMap();
      function me(e) {
        return ye.get(e) || 1;
      }
      function we(e, t, r, i) {
        if (
          ((function (e, t) {
            if (!Array.isArray(e)) throw new Error('array expected');
            e.forEach((e, r) => {
              if (!(e instanceof t)) throw new Error('invalid point at index ' + r);
            });
          })(r, e),
          (function (e, t) {
            if (!Array.isArray(e)) throw new Error('array of scalars expected');
            e.forEach((e, r) => {
              if (!t.isValid(e)) throw new Error('invalid scalar at index ' + r);
            });
          })(i, t),
          r.length !== i.length)
        )
          throw new Error('arrays of points and scalars must have equal length');
        const n = e.ZERO,
          s = (function (e) {
            let t;
            for (t = 0; e > E; e >>= I, t += 1);
            return t;
          })(BigInt(r.length)),
          o = s > 12 ? s - 3 : s > 4 ? s - 2 : s ? 2 : 1,
          a = (1 << o) - 1,
          c = new Array(a + 1).fill(n);
        let h = n;
        for (let l = Math.floor((t.BITS - 1) / o) * o; l >= 0; l -= o) {
          c.fill(n);
          for (let t = 0; t < i.length; t++) {
            const e = i[t],
              n = Number((e >> BigInt(l)) & BigInt(a));
            c[n] = c[n].add(r[t]);
          }
          let e = n;
          for (let t = c.length - 1, r = n; t > 0; t--) (r = r.add(c[t])), (e = e.add(r));
          if (((h = h.add(e)), 0 !== l)) for (let t = 0; t < o; t++) h = h.double();
        }
        return h;
      }
      function be(e) {
        return (
          (function (e) {
            W(
              e,
              ae.reduce((e, t) => ((e[t] = 'function'), e), {
                ORDER: 'bigint',
                MASK: 'bigint',
                BYTES: 'isSafeInteger',
                BITS: 'isSafeInteger',
              })
            );
          })(e.Fp),
          W(
            e,
            { n: 'bigint', h: 'bigint', Gx: 'field', Gy: 'field' },
            { nBitLength: 'isSafeInteger', nByteLength: 'isSafeInteger' }
          ),
          Object.freeze({ ...ce(e.n, e.nBitLength), ...e, p: e.Fp.ORDER })
        );
      }
      const ve = BigInt(0),
        Ee = BigInt(1),
        Ie = BigInt(2),
        Se = BigInt(8),
        Pe = { zip215: !0 };
      function Oe(e) {
        const t = (function (e) {
            const t = be(e);
            return (
              W(
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
          { Fp: r, n: i, prehash: n, hash: s, randomBytes: o, nByteLength: a, h: c } = t,
          h = Ie << (BigInt(8 * a) - Ee),
          l = r.create,
          u = he(t.n, t.nBitLength),
          d =
            t.uvRatio ||
            ((e, t) => {
              try {
                return { isValid: !0, value: r.sqrt(e * r.inv(t)) };
              } catch {
                return { isValid: !1, value: ve };
              }
            }),
          p = t.adjustScalarBytes || ((e) => e),
          f =
            t.domain ||
            ((e, t, r) => {
              if ((_('phflag', r), t.length || r))
                throw new Error('Contexts/pre-hash are not supported');
              return e;
            });
        function g(e, t) {
          V('coordinate ' + e, t, ve, h);
        }
        function y(e) {
          if (!(e instanceof b)) throw new Error('ExtendedPoint expected');
        }
        const m = G((e, t) => {
            const { ex: i, ey: n, ez: s } = e,
              o = e.is0();
            null == t && (t = o ? Se : r.inv(s));
            const a = l(i * t),
              c = l(n * t),
              h = l(s * t);
            if (o) return { x: ve, y: Ee };
            if (h !== Ee) throw new Error('invZ was invalid');
            return { x: a, y: c };
          }),
          w = G((e) => {
            const { a: r, d: i } = t;
            if (e.is0()) throw new Error('bad point: ZERO');
            const { ex: n, ey: s, ez: o, et: a } = e,
              c = l(n * n),
              h = l(s * s),
              u = l(o * o),
              d = l(u * u),
              p = l(c * r);
            if (l(u * l(p + h)) !== l(d + l(i * l(c * h))))
              throw new Error('bad point: equation left != right (1)');
            if (l(n * s) !== l(o * a)) throw new Error('bad point: equation left != right (2)');
            return !0;
          });
        class b {
          constructor(e, t, r, i) {
            (this.ex = e),
              (this.ey = t),
              (this.ez = r),
              (this.et = i),
              g('x', e),
              g('y', t),
              g('z', r),
              g('t', i),
              Object.freeze(this);
          }
          get x() {
            return this.toAffine().x;
          }
          get y() {
            return this.toAffine().y;
          }
          static fromAffine(e) {
            if (e instanceof b) throw new Error('extended point not allowed');
            const { x: t, y: r } = e || {};
            return g('x', t), g('y', r), new b(t, r, Ee, l(t * r));
          }
          static normalizeZ(e) {
            const t = r.invertBatch(e.map((e) => e.ez));
            return e.map((e, r) => e.toAffine(t[r])).map(b.fromAffine);
          }
          static msm(e, t) {
            return we(b, u, e, t);
          }
          _setWindowSize(e) {
            I.setWindowSize(this, e);
          }
          assertValidity() {
            w(this);
          }
          equals(e) {
            y(e);
            const { ex: t, ey: r, ez: i } = this,
              { ex: n, ey: s, ez: o } = e,
              a = l(t * o),
              c = l(n * i),
              h = l(r * o),
              u = l(s * i);
            return a === c && h === u;
          }
          is0() {
            return this.equals(b.ZERO);
          }
          negate() {
            return new b(l(-this.ex), this.ey, this.ez, l(-this.et));
          }
          double() {
            const { a: e } = t,
              { ex: r, ey: i, ez: n } = this,
              s = l(r * r),
              o = l(i * i),
              a = l(Ie * l(n * n)),
              c = l(e * s),
              h = r + i,
              u = l(l(h * h) - s - o),
              d = c + o,
              p = d - a,
              f = c - o,
              g = l(u * p),
              y = l(d * f),
              m = l(u * f),
              w = l(p * d);
            return new b(g, y, w, m);
          }
          add(e) {
            y(e);
            const { a: r, d: i } = t,
              { ex: n, ey: s, ez: o, et: a } = this,
              { ex: c, ey: h, ez: u, et: d } = e;
            if (r === BigInt(-1)) {
              const e = l((s - n) * (h + c)),
                t = l((s + n) * (h - c)),
                r = l(t - e);
              if (r === ve) return this.double();
              const i = l(o * Ie * d),
                p = l(a * Ie * u),
                f = p + i,
                g = t + e,
                y = p - i,
                m = l(f * r),
                w = l(g * y),
                v = l(f * y),
                E = l(r * g);
              return new b(m, w, E, v);
            }
            const p = l(n * c),
              f = l(s * h),
              g = l(a * i * d),
              m = l(o * u),
              w = l((n + s) * (c + h) - p - f),
              v = m - g,
              E = m + g,
              I = l(f - r * p),
              S = l(w * v),
              P = l(E * I),
              O = l(w * I),
              _ = l(v * E);
            return new b(S, P, _, O);
          }
          subtract(e) {
            return this.add(e.negate());
          }
          wNAF(e) {
            return I.wNAFCached(this, e, b.normalizeZ);
          }
          multiply(e) {
            const t = e;
            V('scalar', t, Ee, i);
            const { p: r, f: n } = this.wNAF(t);
            return b.normalizeZ([r, n])[0];
          }
          multiplyUnsafe(e, t = b.ZERO) {
            const r = e;
            return (
              V('scalar', r, ve, i),
              r === ve
                ? E
                : this.is0() || r === Ee
                  ? this
                  : I.wNAFCachedUnsafe(this, r, b.normalizeZ, t)
            );
          }
          isSmallOrder() {
            return this.multiplyUnsafe(c).is0();
          }
          isTorsionFree() {
            return I.unsafeLadder(this, i).is0();
          }
          toAffine(e) {
            return m(this, e);
          }
          clearCofactor() {
            const { h: e } = t;
            return e === Ee ? this : this.multiplyUnsafe(e);
          }
          static fromHex(e, i = !1) {
            const { d: n, a: s } = t,
              o = r.BYTES;
            (e = M('pointHex', e, o)), _('zip215', i);
            const a = e.slice(),
              c = e[o - 1];
            a[o - 1] = -129 & c;
            const u = U(a),
              p = i ? h : r.ORDER;
            V('pointHex.y', u, ve, p);
            const f = l(u * u),
              g = l(f - Ee),
              y = l(n * f - s);
            let { isValid: m, value: w } = d(g, y);
            if (!m) throw new Error('Point.fromHex: invalid y coordinate');
            const v = (w & Ee) === Ee,
              E = 0 !== (128 & c);
            if (!i && w === ve && E) throw new Error('Point.fromHex: x=0 and x_0=1');
            return E !== v && (w = l(-w)), b.fromAffine({ x: w, y: u });
          }
          static fromPrivateKey(e) {
            return O(e).point;
          }
          toRawBytes() {
            const { x: e, y: t } = this.toAffine(),
              i = $(t, r.BYTES);
            return (i[i.length - 1] |= e & Ee ? 128 : 0), i;
          }
          toHex() {
            return A(this.toRawBytes());
          }
        }
        (b.BASE = new b(t.Gx, t.Gy, Ee, l(t.Gx * t.Gy))), (b.ZERO = new b(ve, Ee, Ee, ve));
        const { BASE: v, ZERO: E } = b,
          I = (function (e, t) {
            return {
              constTimeNegate: de,
              hasPrecomputes: (e) => 1 !== me(e),
              unsafeLadder(t, r, i = e.ZERO) {
                let n = t;
                for (; r > le; ) r & ue && (i = i.add(n)), (n = n.double()), (r >>= ue);
                return i;
              },
              precomputeWindow(e, r) {
                const { windows: i, windowSize: n } = fe(r, t),
                  s = [];
                let o = e,
                  a = o;
                for (let t = 0; t < i; t++) {
                  (a = o), s.push(a);
                  for (let e = 1; e < n; e++) (a = a.add(o)), s.push(a);
                  o = a.double();
                }
                return s;
              },
              wNAF(r, i, n) {
                const { windows: s, windowSize: o } = fe(r, t);
                let a = e.ZERO,
                  c = e.BASE;
                const h = BigInt(2 ** r - 1),
                  l = 2 ** r,
                  u = BigInt(r);
                for (let e = 0; e < s; e++) {
                  const t = e * o;
                  let r = Number(n & h);
                  (n >>= u), r > o && ((r -= l), (n += ue));
                  const s = t,
                    d = t + Math.abs(r) - 1,
                    p = e % 2 !== 0,
                    f = r < 0;
                  0 === r ? (c = c.add(de(p, i[s]))) : (a = a.add(de(f, i[d])));
                }
                return { p: a, f: c };
              },
              wNAFUnsafe(r, i, n, s = e.ZERO) {
                const { windows: o, windowSize: a } = fe(r, t),
                  c = BigInt(2 ** r - 1),
                  h = 2 ** r,
                  l = BigInt(r);
                for (let e = 0; e < o; e++) {
                  const t = e * a;
                  if (n === le) break;
                  let r = Number(n & c);
                  if (((n >>= l), r > a && ((r -= h), (n += ue)), 0 === r)) continue;
                  let o = i[t + Math.abs(r) - 1];
                  r < 0 && (o = o.negate()), (s = s.add(o));
                }
                return s;
              },
              getPrecomputes(e, t, r) {
                let i = ge.get(t);
                return i || ((i = this.precomputeWindow(t, e)), 1 !== e && ge.set(t, r(i))), i;
              },
              wNAFCached(e, t, r) {
                const i = me(e);
                return this.wNAF(i, this.getPrecomputes(i, e, r), t);
              },
              wNAFCachedUnsafe(e, t, r, i) {
                const n = me(e);
                return 1 === n
                  ? this.unsafeLadder(e, t, i)
                  : this.wNAFUnsafe(n, this.getPrecomputes(n, e, r), t, i);
              },
              setWindowSize(e, r) {
                pe(r, t), ye.set(e, r), ge.delete(e);
              },
            };
          })(b, 8 * a);
        function S(e) {
          return re(e, i);
        }
        function P(e) {
          return S(U(e));
        }
        function O(e) {
          const t = r.BYTES;
          e = M('private key', e, t);
          const i = M('hashed private key', s(e), 2 * t),
            n = p(i.slice(0, t)),
            o = i.slice(t, 2 * t),
            a = P(n),
            c = v.multiply(a),
            h = c.toRawBytes();
          return { head: n, prefix: o, scalar: a, point: c, pointBytes: h };
        }
        function x(e = new Uint8Array(), ...t) {
          const r = z(...t);
          return P(s(f(r, M('context', e), !!n)));
        }
        const T = Pe;
        return (
          v._setWindowSize(8),
          {
            CURVE: t,
            getPublicKey: function (e) {
              return O(e).pointBytes;
            },
            sign: function (e, t, s = {}) {
              (e = M('message', e)), n && (e = n(e));
              const { prefix: o, scalar: a, pointBytes: c } = O(t),
                h = x(s.context, o, e),
                l = v.multiply(h).toRawBytes(),
                u = S(h + x(s.context, l, c, e) * a);
              return V('signature.s', u, ve, i), M('result', z(l, $(u, r.BYTES)), 2 * r.BYTES);
            },
            verify: function (e, t, i, s = T) {
              const { context: o, zip215: a } = s,
                c = r.BYTES;
              (e = M('signature', e, 2 * c)),
                (t = M('message', t)),
                (i = M('publicKey', i, c)),
                void 0 !== a && _('zip215', a),
                n && (t = n(t));
              const h = U(e.slice(c, 2 * c));
              let l, u, d;
              try {
                (l = b.fromHex(i, a)), (u = b.fromHex(e.slice(0, c), a)), (d = v.multiplyUnsafe(h));
              } catch {
                return !1;
              }
              if (!a && l.isSmallOrder()) return !1;
              const p = x(o, u.toRawBytes(), l.toRawBytes(), t);
              return u.add(l.multiplyUnsafe(p)).subtract(d).clearCofactor().equals(b.ZERO);
            },
            ExtendedPoint: b,
            utils: {
              getExtendedPublicKey: O,
              randomPrivateKey: () => o(r.BYTES),
              precompute: (e = 8, t = b.BASE) => (t._setWindowSize(e), t.multiply(BigInt(3)), t),
            },
          }
        );
      }
      BigInt(0), BigInt(1);
      const _e = BigInt(
          '57896044618658097711785492504343953926634992332820282019728792003956564819949'
        ),
        xe = BigInt(
          '19681161376707505956807079304988542015446066515923890162744021073123829784752'
        );
      BigInt(0);
      const Ae = BigInt(1),
        Te = BigInt(2);
      BigInt(3);
      const Ne = BigInt(5),
        Ce = BigInt(8);
      function Re(e) {
        return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
      }
      function ke(e, t) {
        const r = _e,
          i = re(t * t * t, r),
          n = (function (e) {
            const t = BigInt(10),
              r = BigInt(20),
              i = BigInt(40),
              n = BigInt(80),
              s = _e,
              o = (((e * e) % s) * e) % s,
              a = (ne(o, Te, s) * o) % s,
              c = (ne(a, Ae, s) * e) % s,
              h = (ne(c, Ne, s) * c) % s,
              l = (ne(h, t, s) * h) % s,
              u = (ne(l, r, s) * l) % s,
              d = (ne(u, i, s) * u) % s,
              p = (ne(d, n, s) * d) % s,
              f = (ne(p, n, s) * d) % s,
              g = (ne(f, t, s) * h) % s;
            return { pow_p_5_8: (ne(g, Te, s) * e) % s, b2: o };
          })(e * re(i * i * t, r)).pow_p_5_8;
        let s = re(e * i * n, r);
        const o = re(t * s * s, r),
          a = s,
          c = re(s * xe, r),
          h = o === e,
          l = o === re(-e, r),
          u = o === re(-e * xe, r);
        return (
          h && (s = a),
          (l || u) && (s = c),
          ((e, t) => (re(e, t) & J) === J)(s, r) && (s = re(-s, r)),
          { isValid: h || l, value: s }
        );
      }
      const je = he(_e, void 0, !0),
        De = Oe({
          a: BigInt(-1),
          d: BigInt(
            '37095705934669439343138083508754565189542113879843219016388785533085940283555'
          ),
          Fp: je,
          n: BigInt('7237005577332262213973186563042994240857116359379907606001950938285454250989'),
          h: Ce,
          Gx: BigInt(
            '15112221349535400772501151409588531511454012693041857206046113283949847762202'
          ),
          Gy: BigInt(
            '46316835694926478169428394003475163141307993866256225615783033603165251855960'
          ),
          hash: v,
          randomBytes: l,
          adjustScalarBytes: Re,
          uvRatio: ke,
        }),
        Le = 'EdDSA',
        qe = '.',
        Ue = 'base64url',
        Be = 'utf8',
        $e = 'utf8',
        Me = 'did',
        ze = 'key',
        He = 'base58btc';
      function Ve(e) {
        return null != globalThis.Buffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e;
      }
      function Ke(e = 0) {
        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe
          ? Ve(globalThis.Buffer.allocUnsafe(e))
          : new Uint8Array(e);
      }
      function Fe(e, t) {
        t || (t = e.reduce((e, t) => e + t.length, 0));
        const r = Ke(t);
        let i = 0;
        for (const n of e) r.set(n, i), (i += n.length);
        return Ve(r);
      }
      var We = function (e, t) {
        if (e.length >= 255) throw new TypeError('Alphabet too long');
        for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
        for (var n = 0; n < e.length; n++) {
          var s = e.charAt(n),
            o = s.charCodeAt(0);
          if (255 !== r[o]) throw new TypeError(s + ' is ambiguous');
          r[o] = n;
        }
        var a = e.length,
          c = e.charAt(0),
          h = Math.log(a) / Math.log(256),
          l = Math.log(256) / Math.log(a);
        function u(e) {
          if ('string' != typeof e) throw new TypeError('Expected String');
          if (0 === e.length) return new Uint8Array();
          var t = 0;
          if (' ' !== e[t]) {
            for (var i = 0, n = 0; e[t] === c; ) i++, t++;
            for (var s = ((e.length - t) * h + 1) >>> 0, o = new Uint8Array(s); e[t]; ) {
              var l = r[e.charCodeAt(t)];
              if (255 === l) return;
              for (var u = 0, d = s - 1; (0 !== l || u < n) && -1 !== d; d--, u++)
                (l += (a * o[d]) >>> 0), (o[d] = l % 256 >>> 0), (l = (l / 256) >>> 0);
              if (0 !== l) throw new Error('Non-zero carry');
              (n = u), t++;
            }
            if (' ' !== e[t]) {
              for (var p = s - n; p !== s && 0 === o[p]; ) p++;
              for (var f = new Uint8Array(i + (s - p)), g = i; p !== s; ) f[g++] = o[p++];
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
              throw new TypeError('Expected Uint8Array');
            if (0 === t.length) return '';
            for (var r = 0, i = 0, n = 0, s = t.length; n !== s && 0 === t[n]; ) n++, r++;
            for (var o = ((s - n) * l + 1) >>> 0, h = new Uint8Array(o); n !== s; ) {
              for (var u = t[n], d = 0, p = o - 1; (0 !== u || d < i) && -1 !== p; p--, d++)
                (u += (256 * h[p]) >>> 0), (h[p] = u % a >>> 0), (u = (u / a) >>> 0);
              if (0 !== u) throw new Error('Non-zero carry');
              (i = d), n++;
            }
            for (var f = o - i; f !== o && 0 === h[f]; ) f++;
            for (var g = c.repeat(r); f < o; ++f) g += e.charAt(h[f]);
            return g;
          },
          decodeUnsafe: u,
          decode: function (e) {
            var r = u(e);
            if (r) return r;
            throw new Error(`Non-${t} character`);
          },
        };
      };
      const Ge = (e) => {
        if (e instanceof Uint8Array && 'Uint8Array' === e.constructor.name) return e;
        if (e instanceof ArrayBuffer) return new Uint8Array(e);
        if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
        throw new Error('Unknown type, must be binary type');
      };
      class Ye {
        constructor(e, t, r) {
          (this.name = e), (this.prefix = t), (this.baseEncode = r);
        }
        encode(e) {
          if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
          throw Error('Unknown type, must be binary type');
        }
      }
      class Je {
        constructor(e, t, r) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw new Error('Invalid prefix character');
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
          return Qe(this, e);
        }
      }
      class Ze {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return Qe(this, e);
        }
        decode(e) {
          const t = e[0],
            r = this.decoders[t];
          if (r) return r.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`
          );
        }
      }
      const Qe = (e, t) =>
        new Ze({ ...(e.decoders || { [e.prefix]: e }), ...(t.decoders || { [t.prefix]: t }) });
      class Xe {
        constructor(e, t, r, i) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = r),
            (this.baseDecode = i),
            (this.encoder = new Ye(e, t, r)),
            (this.decoder = new Je(e, t, i));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      const et = ({ name: e, prefix: t, encode: r, decode: i }) => new Xe(e, t, r, i),
        tt = ({ prefix: e, name: t, alphabet: r }) => {
          const { encode: i, decode: n } = We(r, t);
          return et({ prefix: e, name: t, encode: i, decode: (e) => Ge(n(e)) });
        },
        rt = ({ name: e, prefix: t, bitsPerChar: r, alphabet: i }) =>
          et({
            prefix: t,
            name: e,
            encode: (e) =>
              ((e, t, r) => {
                const i = '=' === t[t.length - 1],
                  n = (1 << r) - 1;
                let s = '',
                  o = 0,
                  a = 0;
                for (let c = 0; c < e.length; ++c)
                  for (a = (a << 8) | e[c], o += 8; o > r; ) (o -= r), (s += t[n & (a >> o)]);
                if ((o && (s += t[n & (a << (r - o))]), i)) for (; (s.length * r) & 7; ) s += '=';
                return s;
              })(e, i, r),
            decode: (t) =>
              ((e, t, r, i) => {
                const n = {};
                for (let l = 0; l < t.length; ++l) n[t[l]] = l;
                let s = e.length;
                for (; '=' === e[s - 1]; ) --s;
                const o = new Uint8Array(((s * r) / 8) | 0);
                let a = 0,
                  c = 0,
                  h = 0;
                for (let l = 0; l < s; ++l) {
                  const t = n[e[l]];
                  if (void 0 === t) throw new SyntaxError(`Non-${i} character`);
                  (c = (c << r) | t), (a += r), a >= 8 && ((a -= 8), (o[h++] = 255 & (c >> a)));
                }
                if (a >= r || 255 & (c << (8 - a))) throw new SyntaxError('Unexpected end of data');
                return o;
              })(t, i, r, e),
          }),
        it = et({
          prefix: '\0',
          name: 'identity',
          encode: (e) => ((e) => new TextDecoder().decode(e))(e),
          decode: (e) => ((e) => new TextEncoder().encode(e))(e),
        });
      var nt = Object.freeze({ __proto__: null, identity: it });
      const st = rt({ prefix: '0', name: 'base2', alphabet: '01', bitsPerChar: 1 });
      var ot = Object.freeze({ __proto__: null, base2: st });
      const at = rt({ prefix: '7', name: 'base8', alphabet: '01234567', bitsPerChar: 3 });
      var ct = Object.freeze({ __proto__: null, base8: at });
      const ht = tt({ prefix: '9', name: 'base10', alphabet: '0123456789' });
      var lt = Object.freeze({ __proto__: null, base10: ht });
      const ut = rt({ prefix: 'f', name: 'base16', alphabet: '0123456789abcdef', bitsPerChar: 4 }),
        dt = rt({ prefix: 'F', name: 'base16upper', alphabet: '0123456789ABCDEF', bitsPerChar: 4 });
      var pt = Object.freeze({ __proto__: null, base16: ut, base16upper: dt });
      const ft = rt({
          prefix: 'b',
          name: 'base32',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567',
          bitsPerChar: 5,
        }),
        gt = rt({
          prefix: 'B',
          name: 'base32upper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
          bitsPerChar: 5,
        }),
        yt = rt({
          prefix: 'c',
          name: 'base32pad',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567=',
          bitsPerChar: 5,
        }),
        mt = rt({
          prefix: 'C',
          name: 'base32padupper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=',
          bitsPerChar: 5,
        }),
        wt = rt({
          prefix: 'v',
          name: 'base32hex',
          alphabet: '0123456789abcdefghijklmnopqrstuv',
          bitsPerChar: 5,
        }),
        bt = rt({
          prefix: 'V',
          name: 'base32hexupper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV',
          bitsPerChar: 5,
        }),
        vt = rt({
          prefix: 't',
          name: 'base32hexpad',
          alphabet: '0123456789abcdefghijklmnopqrstuv=',
          bitsPerChar: 5,
        }),
        Et = rt({
          prefix: 'T',
          name: 'base32hexpadupper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV=',
          bitsPerChar: 5,
        }),
        It = rt({
          prefix: 'h',
          name: 'base32z',
          alphabet: 'ybndrfg8ejkmcpqxot1uwisza345h769',
          bitsPerChar: 5,
        });
      var St = Object.freeze({
        __proto__: null,
        base32: ft,
        base32upper: gt,
        base32pad: yt,
        base32padupper: mt,
        base32hex: wt,
        base32hexupper: bt,
        base32hexpad: vt,
        base32hexpadupper: Et,
        base32z: It,
      });
      const Pt = tt({
          prefix: 'k',
          name: 'base36',
          alphabet: '0123456789abcdefghijklmnopqrstuvwxyz',
        }),
        Ot = tt({
          prefix: 'K',
          name: 'base36upper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        });
      var _t = Object.freeze({ __proto__: null, base36: Pt, base36upper: Ot });
      const xt = tt({
          name: 'base58btc',
          prefix: 'z',
          alphabet: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
        }),
        At = tt({
          name: 'base58flickr',
          prefix: 'Z',
          alphabet: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ',
        });
      var Tt = Object.freeze({ __proto__: null, base58btc: xt, base58flickr: At });
      const Nt = rt({
          prefix: 'm',
          name: 'base64',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          bitsPerChar: 6,
        }),
        Ct = rt({
          prefix: 'M',
          name: 'base64pad',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
          bitsPerChar: 6,
        }),
        Rt = rt({
          prefix: 'u',
          name: 'base64url',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
          bitsPerChar: 6,
        }),
        kt = rt({
          prefix: 'U',
          name: 'base64urlpad',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=',
          bitsPerChar: 6,
        });
      var jt = Object.freeze({
        __proto__: null,
        base64: Nt,
        base64pad: Ct,
        base64url: Rt,
        base64urlpad: kt,
      });
      const Dt = Array.from(
          '\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42'
        ),
        Lt = Dt.reduce((e, t, r) => ((e[r] = t), e), []),
        qt = Dt.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []);
      const Ut = et({
        prefix: '\ud83d\ude80',
        name: 'base256emoji',
        encode: function (e) {
          return e.reduce((e, t) => (e += Lt[t]), '');
        },
        decode: function (e) {
          const t = [];
          for (const r of e) {
            const e = qt[r.codePointAt(0)];
            if (void 0 === e) throw new Error(`Non-base256emoji character: ${r}`);
            t.push(e);
          }
          return new Uint8Array(t);
        },
      });
      var Bt = Object.freeze({ __proto__: null, base256emoji: Ut }),
        $t = function e(t, r, i) {
          r = r || [];
          for (var n = (i = i || 0); t >= Mt; ) (r[i++] = (255 & t) | 128), (t /= 128);
          for (; -128 & t; ) (r[i++] = (255 & t) | 128), (t >>>= 7);
          return (r[i] = 0 | t), (e.bytes = i - n + 1), r;
        },
        Mt = Math.pow(2, 31);
      var zt = function e(t, r) {
        var i,
          n = 0,
          s = 0,
          o = (r = r || 0),
          a = t.length;
        do {
          if (o >= a) throw ((e.bytes = 0), new RangeError('Could not decode varint'));
          (i = t[o++]), (n += s < 28 ? (127 & i) << s : (127 & i) * Math.pow(2, s)), (s += 7);
        } while (i >= 128);
        return (e.bytes = o - r), n;
      };
      var Ht = Math.pow(2, 7),
        Vt = Math.pow(2, 14),
        Kt = Math.pow(2, 21),
        Ft = Math.pow(2, 28),
        Wt = Math.pow(2, 35),
        Gt = Math.pow(2, 42),
        Yt = Math.pow(2, 49),
        Jt = Math.pow(2, 56),
        Zt = Math.pow(2, 63),
        Qt = {
          encode: $t,
          decode: zt,
          encodingLength: function (e) {
            return e < Ht
              ? 1
              : e < Vt
                ? 2
                : e < Kt
                  ? 3
                  : e < Ft
                    ? 4
                    : e < Wt
                      ? 5
                      : e < Gt
                        ? 6
                        : e < Yt
                          ? 7
                          : e < Jt
                            ? 8
                            : e < Zt
                              ? 9
                              : 10;
          },
        };
      const Xt = (e, t, r = 0) => (Qt.encode(e, t, r), t),
        er = (e) => Qt.encodingLength(e),
        tr = (e, t) => {
          const r = t.byteLength,
            i = er(e),
            n = i + er(r),
            s = new Uint8Array(n + r);
          return Xt(e, s, 0), Xt(r, s, i), s.set(t, n), new rr(e, r, t, s);
        };
      class rr {
        constructor(e, t, r, i) {
          (this.code = e), (this.size = t), (this.digest = r), (this.bytes = i);
        }
      }
      const ir = ({ name: e, code: t, encode: r }) => new nr(e, t, r);
      class nr {
        constructor(e, t, r) {
          (this.name = e), (this.code = t), (this.encode = r);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            const t = this.encode(e);
            return t instanceof Uint8Array ? tr(this.code, t) : t.then((e) => tr(this.code, e));
          }
          throw Error('Unknown type, must be binary type');
        }
      }
      const sr = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t)),
        or = ir({ name: 'sha2-256', code: 18, encode: sr('SHA-256') }),
        ar = ir({ name: 'sha2-512', code: 19, encode: sr('SHA-512') });
      Object.freeze({ __proto__: null, sha256: or, sha512: ar });
      const cr = Ge,
        hr = { code: 0, name: 'identity', encode: cr, digest: (e) => tr(0, cr(e)) };
      Object.freeze({ __proto__: null, identity: hr });
      new TextEncoder(), new TextDecoder();
      const lr = { ...nt, ...ot, ...ct, ...lt, ...pt, ...St, ..._t, ...Tt, ...jt, ...Bt };
      function ur(e, t, r, i) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: i },
        };
      }
      const dr = ur(
          'utf8',
          'u',
          (e) => 'u' + new TextDecoder('utf8').decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        pr = ur(
          'ascii',
          'a',
          (e) => {
            let t = 'a';
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t;
          },
          (e) => {
            const t = Ke((e = e.substring(1)).length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          }
        ),
        fr = { utf8: dr, 'utf-8': dr, hex: lr.base16, latin1: pr, ascii: pr, binary: pr, ...lr };
      function gr(e, t = 'utf8') {
        const r = fr[t];
        if (!r) throw new Error(`Unsupported encoding "${t}"`);
        return ('utf8' !== t && 'utf-8' !== t) ||
          null == globalThis.Buffer ||
          null == globalThis.Buffer.from
          ? r.encoder.encode(e).substring(1)
          : globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString('utf8');
      }
      function yr(e, t = 'utf8') {
        const r = fr[t];
        if (!r) throw new Error(`Unsupported encoding "${t}"`);
        return ('utf8' !== t && 'utf-8' !== t) ||
          null == globalThis.Buffer ||
          null == globalThis.Buffer.from
          ? r.decoder.decode(`${r.prefix}${e}`)
          : Ve(globalThis.Buffer.from(e, 'utf-8'));
      }
      function mr(e) {
        return (0, n.D)(gr(yr(e, Ue), Be));
      }
      function wr(e) {
        return gr(yr((0, n.u)(e), Be), Ue);
      }
      function br(e) {
        const t = 'z' + gr(Fe([yr('K36', He), e]), He);
        return [Me, ze, t].join(':');
      }
      function vr(e) {
        return gr(e, Ue);
      }
      function Er(e) {
        const t = e.split(qe),
          r = mr(t[0]),
          i = mr(t[1]),
          n = (function (e) {
            return yr(e, Ue);
          })(t[2]);
        return { header: r, payload: i, signature: n, data: yr(t.slice(0, 2).join(qe), $e) };
      }
      function Ir(e = l(32)) {
        const t = De.getPublicKey(e);
        return { secretKey: Fe([e, t]), publicKey: t };
      }
      async function Sr(e, t, r, n, s = (0, i.fromMiliseconds)(Date.now())) {
        const o = { alg: Le, typ: 'JWT' },
          a = { iss: br(n.publicKey), sub: e, aud: t, iat: s, exp: s + r },
          c = (function (e) {
            return yr([wr(e.header), wr(e.payload)].join(qe), $e);
          })({ header: o, payload: a });
        return (function (e) {
          return [wr(e.header), wr(e.payload), vr(e.signature)].join(qe);
        })({ header: o, payload: a, signature: De.sign(c, n.secretKey.slice(0, 32)) });
      }
    },
    85094: function (e, t, r) {
      r.d(t, {
        D: function () {
          return i;
        },
        u: function () {
          return n;
        },
      });
      function i(e) {
        if ('string' !== typeof e)
          throw new Error('Cannot safe json parse value of type ' + typeof e);
        try {
          return ((e) => {
            const t = e.replace(
              /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
              '$1"$2n"$3'
            );
            return JSON.parse(t, (e, t) =>
              'string' === typeof t && t.match(/^\d+n$/) ? BigInt(t.substring(0, t.length - 1)) : t
            );
          })(e);
        } catch (t) {
          return e;
        }
      }
      function n(e) {
        return 'string' === typeof e
          ? e
          : ((t = e),
            JSON.stringify(t, (e, t) => ('bigint' === typeof t ? t.toString() + 'n' : t)) || '');
        var t;
      }
    },
    36900: function (e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const i = r(30004);
      i.__exportStar(r(46869), t), i.__exportStar(r(88033), t);
    },
    46869: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.ONE_THOUSAND = t.ONE_HUNDRED = void 0),
        (t.ONE_HUNDRED = 100),
        (t.ONE_THOUSAND = 1e3);
    },
    88033: function (e, t) {
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
    66736: function (e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const i = r(30004);
      i.__exportStar(r(44273), t),
        i.__exportStar(r(47001), t),
        i.__exportStar(r(52939), t),
        i.__exportStar(r(36900), t);
    },
    52939: function (e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      r(30004).__exportStar(r(88766), t);
    },
    88766: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.IWatch = void 0);
      t.IWatch = class {};
    },
    83207: function (e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.fromMiliseconds = t.toMiliseconds = void 0);
      const i = r(36900);
      (t.toMiliseconds = function (e) {
        return e * i.ONE_THOUSAND;
      }),
        (t.fromMiliseconds = function (e) {
          return Math.floor(e / i.ONE_THOUSAND);
        });
    },
    83873: function (e, t) {
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
    44273: function (e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const i = r(30004);
      i.__exportStar(r(83873), t), i.__exportStar(r(83207), t);
    },
    47001: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.Watch = void 0);
      class r {
        constructor() {
          this.timestamps = new Map();
        }
        start(e) {
          if (this.timestamps.has(e)) throw new Error(`Watch already started for label: ${e}`);
          this.timestamps.set(e, { started: Date.now() });
        }
        stop(e) {
          const t = this.get(e);
          if ('undefined' !== typeof t.elapsed)
            throw new Error(`Watch already stopped for label: ${e}`);
          const r = Date.now() - t.started;
          this.timestamps.set(e, { started: t.started, elapsed: r });
        }
        get(e) {
          const t = this.timestamps.get(e);
          if ('undefined' === typeof t) throw new Error(`No timestamp found for label: ${e}`);
          return t;
        }
        elapsed(e) {
          const t = this.get(e);
          return t.elapsed || Date.now() - t.started;
        }
      }
      (t.Watch = r), (t.default = r);
    },
    30004: function (e, t, r) {
      r.r(t),
        r.d(t, {
          __assign: function () {
            return s;
          },
          __asyncDelegator: function () {
            return v;
          },
          __asyncGenerator: function () {
            return b;
          },
          __asyncValues: function () {
            return E;
          },
          __await: function () {
            return w;
          },
          __awaiter: function () {
            return l;
          },
          __classPrivateFieldGet: function () {
            return O;
          },
          __classPrivateFieldSet: function () {
            return _;
          },
          __createBinding: function () {
            return d;
          },
          __decorate: function () {
            return a;
          },
          __exportStar: function () {
            return p;
          },
          __extends: function () {
            return n;
          },
          __generator: function () {
            return u;
          },
          __importDefault: function () {
            return P;
          },
          __importStar: function () {
            return S;
          },
          __makeTemplateObject: function () {
            return I;
          },
          __metadata: function () {
            return h;
          },
          __param: function () {
            return c;
          },
          __read: function () {
            return g;
          },
          __rest: function () {
            return o;
          },
          __spread: function () {
            return y;
          },
          __spreadArrays: function () {
            return m;
          },
          __values: function () {
            return f;
          },
        });
      var i = function (e, t) {
        return (
          (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            }),
          i(e, t)
        );
      };
      function n(e, t) {
        function r() {
          this.constructor = e;
        }
        i(e, t),
          (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
      }
      var s = function () {
        return (
          (s =
            Object.assign ||
            function (e) {
              for (var t, r = 1, i = arguments.length; r < i; r++)
                for (var n in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }),
          s.apply(this, arguments)
        );
      };
      function o(e, t) {
        var r = {};
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
        if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
          var n = 0;
          for (i = Object.getOwnPropertySymbols(e); n < i.length; n++)
            t.indexOf(i[n]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, i[n]) &&
              (r[i[n]] = e[i[n]]);
        }
        return r;
      }
      function a(e, t, r, i) {
        var n,
          s = arguments.length,
          o = s < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, r)) : i;
        if ('object' === typeof Reflect && 'function' === typeof Reflect.decorate)
          o = Reflect.decorate(e, t, r, i);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
        return s > 3 && o && Object.defineProperty(t, r, o), o;
      }
      function c(e, t) {
        return function (r, i) {
          t(r, i, e);
        };
      }
      function h(e, t) {
        if ('object' === typeof Reflect && 'function' === typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function l(e, t, r, i) {
        return new (r || (r = Promise))(function (n, s) {
          function o(e) {
            try {
              c(i.next(e));
            } catch (t) {
              s(t);
            }
          }
          function a(e) {
            try {
              c(i.throw(e));
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
                    })).then(o, a);
          }
          c((i = i.apply(e, t || [])).next());
        });
      }
      function u(e, t) {
        var r,
          i,
          n,
          s,
          o = {
            label: 0,
            sent: function () {
              if (1 & n[0]) throw n[1];
              return n[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (s = { next: a(0), throw: a(1), return: a(2) }),
          'function' === typeof Symbol &&
            (s[Symbol.iterator] = function () {
              return this;
            }),
          s
        );
        function a(s) {
          return function (a) {
            return (function (s) {
              if (r) throw new TypeError('Generator is already executing.');
              for (; o; )
                try {
                  if (
                    ((r = 1),
                    i &&
                      (n =
                        2 & s[0]
                          ? i.return
                          : s[0]
                            ? i.throw || ((n = i.return) && n.call(i), 0)
                            : i.next) &&
                      !(n = n.call(i, s[1])).done)
                  )
                    return n;
                  switch (((i = 0), n && (s = [2 & s[0], n.value]), s[0])) {
                    case 0:
                    case 1:
                      n = s;
                      break;
                    case 4:
                      return o.label++, { value: s[1], done: !1 };
                    case 5:
                      o.label++, (i = s[1]), (s = [0]);
                      continue;
                    case 7:
                      (s = o.ops.pop()), o.trys.pop();
                      continue;
                    default:
                      if (
                        !(n = (n = o.trys).length > 0 && n[n.length - 1]) &&
                        (6 === s[0] || 2 === s[0])
                      ) {
                        o = 0;
                        continue;
                      }
                      if (3 === s[0] && (!n || (s[1] > n[0] && s[1] < n[3]))) {
                        o.label = s[1];
                        break;
                      }
                      if (6 === s[0] && o.label < n[1]) {
                        (o.label = n[1]), (n = s);
                        break;
                      }
                      if (n && o.label < n[2]) {
                        (o.label = n[2]), o.ops.push(s);
                        break;
                      }
                      n[2] && o.ops.pop(), o.trys.pop();
                      continue;
                  }
                  s = t.call(e, o);
                } catch (a) {
                  (s = [6, a]), (i = 0);
                } finally {
                  r = n = 0;
                }
              if (5 & s[0]) throw s[1];
              return { value: s[0] ? s[1] : void 0, done: !0 };
            })([s, a]);
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
        var t = 'function' === typeof Symbol && Symbol.iterator,
          r = t && e[t],
          i = 0;
        if (r) return r.call(e);
        if (e && 'number' === typeof e.length)
          return {
            next: function () {
              return e && i >= e.length && (e = void 0), { value: e && e[i++], done: !e };
            },
          };
        throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
      }
      function g(e, t) {
        var r = 'function' === typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var i,
          n,
          s = r.call(e),
          o = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(i = s.next()).done; ) o.push(i.value);
        } catch (a) {
          n = { error: a };
        } finally {
          try {
            i && !i.done && (r = s.return) && r.call(s);
          } finally {
            if (n) throw n.error;
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
        var i = Array(e),
          n = 0;
        for (t = 0; t < r; t++)
          for (var s = arguments[t], o = 0, a = s.length; o < a; o++, n++) i[n] = s[o];
        return i;
      }
      function w(e) {
        return this instanceof w ? ((this.v = e), this) : new w(e);
      }
      function b(e, t, r) {
        if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
        var i,
          n = r.apply(e, t || []),
          s = [];
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
          n[e] &&
            (i[e] = function (t) {
              return new Promise(function (r, i) {
                s.push([e, t, r, i]) > 1 || a(e, t);
              });
            });
        }
        function a(e, t) {
          try {
            (r = n[e](t)).value instanceof w
              ? Promise.resolve(r.value.v).then(c, h)
              : l(s[0][2], r);
          } catch (i) {
            l(s[0][3], i);
          }
          var r;
        }
        function c(e) {
          a('next', e);
        }
        function h(e) {
          a('throw', e);
        }
        function l(e, t) {
          e(t), s.shift(), s.length && a(s[0][0], s[0][1]);
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
        function i(i, n) {
          t[i] = e[i]
            ? function (t) {
                return (r = !r) ? { value: w(e[i](t)), done: 'return' === i } : n ? n(t) : t;
              }
            : n;
        }
      }
      function E(e) {
        if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
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
              return new Promise(function (i, n) {
                (function (e, t, r, i) {
                  Promise.resolve(i).then(function (t) {
                    e({ value: t, done: r });
                  }, t);
                })(i, n, (t = e[r](t)).done, t.value);
              });
            };
        }
      }
      function I(e, t) {
        return (
          Object.defineProperty ? Object.defineProperty(e, 'raw', { value: t }) : (e.raw = t), e
        );
      }
      function S(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      }
      function P(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function O(e, t) {
        if (!t.has(e)) throw new TypeError('attempted to get private field on non-instance');
        return t.get(e);
      }
      function _(e, t, r) {
        if (!t.has(e)) throw new TypeError('attempted to set private field on non-instance');
        return t.set(e, r), r;
      }
    },
    39639: function (e, t, r) {
      r.d(t, {
        AWt: function () {
          return Xn;
        },
        $dT: function () {
          return es;
        },
        zl_: function () {
          return ts;
        },
        O6B: function () {
          return Eo;
        },
        rVF: function () {
          return is;
        },
        FpL: function () {
          return ns;
        },
        E12: function () {
          return Ds;
        },
        gn4: function () {
          return dt;
        },
        H1S: function () {
          return ot;
        },
        IkP: function () {
          return Or;
        },
        hFY: function () {
          return at;
        },
        WGe: function () {
          return us;
        },
        xQU: function () {
          return ms;
        },
        peR: function () {
          return gs;
        },
        m$A: function () {
          return as;
        },
        vBi: function () {
          return bs;
        },
        Spz: function () {
          return ys;
        },
        HIp: function () {
          return fs;
        },
        E0T: function () {
          return ft;
        },
        P56: function () {
          return or;
        },
        GqV: function () {
          return lt;
        },
        wvx: function () {
          return vr;
        },
        $0m: function () {
          return rt;
        },
        Z42: function () {
          return ht;
        },
        oIp: function () {
          return tt;
        },
        Bvr: function () {
          return Ns;
        },
        Au2: function () {
          return ss;
        },
        jdp: function () {
          return os;
        },
        guN: function () {
          return Ce;
        },
        rhL: function () {
          return Qe;
        },
        DaH: function () {
          return et;
        },
        ouN: function () {
          return Nr;
        },
        bW6: function () {
          return mt;
        },
        NmC: function () {
          return wr;
        },
        kCb: function () {
          return Us;
        },
        L9d: function () {
          return Cs;
        },
        Y31: function () {
          return Tr;
        },
        DJo: function () {
          return mr;
        },
        hA9: function () {
          return Cr;
        },
        cOS: function () {
          return _s;
        },
        _HE: function () {
          return Os;
        },
        D6H: function () {
          return Bs;
        },
        waw: function () {
          return wt;
        },
        HhN: function () {
          return yt;
        },
        YmJ: function () {
          return cs;
        },
        rjm: function () {
          return hs;
        },
        DtP: function () {
          return Ge;
        },
        jUY: function () {
          return Je;
        },
        gpE: function () {
          return ks;
        },
        rFo: function () {
          return go;
        },
        BwD: function () {
          return pt;
        },
        sa_: function () {
          return Ye;
        },
        UGU: function () {
          return Fe;
        },
        Ggh: function () {
          return wo;
        },
        xWS: function () {
          return Gs;
        },
        b$m: function () {
          return We;
        },
        Ih8: function () {
          return Ks;
        },
        h1R: function () {
          return Ys;
        },
        h9F: function () {
          return vt;
        },
        Q8x: function () {
          return Is;
        },
        Hs$: function () {
          return Ss;
        },
        o8e: function () {
          return zs;
        },
        qt8: function () {
          return $s;
        },
        DdM: function () {
          return Js;
        },
        H4H: function () {
          return ao;
        },
        nfW: function () {
          return lo;
        },
        Q01: function () {
          return so;
        },
        ing: function () {
          return ro;
        },
        p8o: function () {
          return uo;
        },
        B95: function () {
          return fo;
        },
        alS: function () {
          return po;
        },
        L5o: function () {
          return Ms;
        },
        EJd: function () {
          return oo;
        },
        Z26: function () {
          return io;
        },
        PMr: function () {
          return no;
        },
        hHR: function () {
          return co;
        },
        ONw: function () {
          return mo;
        },
        naP: function () {
          return to;
        },
        JTI: function () {
          return ho;
        },
        M_r: function () {
          return Hs;
        },
        jvJ: function () {
          return Ws;
        },
        KCv: function () {
          return nt;
        },
        eGA: function () {
          return gt;
        },
        qJM: function () {
          return xr;
        },
        IPd: function () {
          return st;
        },
        DQe: function () {
          return Ne;
        },
        iPz: function () {
          return ut;
        },
        Maj: function () {
          return js;
        },
        heJ: function () {
          return As;
        },
        WPw: function () {
          return Xe;
        },
        _vH: function () {
          return It;
        },
        uwg: function () {
          return bo;
        },
        k$y: function () {
          return bt;
        },
        Llj: function () {
          return vs;
        },
        ENt: function () {
          return Es;
        },
        c4l: function () {
          return br;
        },
        NbI: function () {
          return Ps;
        },
      });
      var i = r(43631),
        n = r(66736),
        s = r(62873),
        o = r(65755);
      const a = '2.23.2';
      let c = {
        getDocsUrl: ({ docsBaseUrl: e, docsPath: t = '', docsSlug: r }) =>
          t ? `${e ?? 'https://viem.sh'}${t}${r ? `#${r}` : ''}` : void 0,
        version: 'viem@2.23.2',
      };
      class h extends Error {
        constructor(e, t = {}) {
          const r =
              t.cause instanceof h
                ? t.cause.details
                : t.cause?.message
                  ? t.cause.message
                  : t.details,
            i = (t.cause instanceof h && t.cause.docsPath) || t.docsPath,
            n = c.getDocsUrl?.({ ...t, docsPath: i });
          super(
            [
              e || 'An error occurred.',
              '',
              ...(t.metaMessages ? [...t.metaMessages, ''] : []),
              ...(n ? [`Docs: ${n}`] : []),
              ...(r ? [`Details: ${r}`] : []),
              ...(c.version ? [`Version: ${c.version}`] : []),
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
            (this.version = a);
        }
        walk(e) {
          return l(this, e);
        }
      }
      function l(e, t) {
        return t?.(e)
          ? e
          : e && 'object' === typeof e && 'cause' in e && void 0 !== e.cause
            ? l(e.cause, t)
            : t
              ? null
              : e;
      }
      function u(e, { strict: t = !0 } = {}) {
        return (
          !!e && 'string' === typeof e && (t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith('0x'))
        );
      }
      class d extends h {
        constructor({ size: e, targetSize: t, type: r }) {
          super(
            `${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`,
            { name: 'SizeExceedsPaddingSizeError' }
          );
        }
      }
      function p(e, { dir: t, size: r = 32 } = {}) {
        return 'string' === typeof e
          ? (function (e, { dir: t, size: r = 32 } = {}) {
              if (null === r) return e;
              const i = e.replace('0x', '');
              if (i.length > 2 * r)
                throw new d({ size: Math.ceil(i.length / 2), targetSize: r, type: 'hex' });
              return `0x${i['right' === t ? 'padEnd' : 'padStart'](2 * r, '0')}`;
            })(e, { dir: t, size: r })
          : (function (e, { dir: t, size: r = 32 } = {}) {
              if (null === r) return e;
              if (e.length > r) throw new d({ size: e.length, targetSize: r, type: 'bytes' });
              const i = new Uint8Array(r);
              for (let n = 0; n < r; n++) {
                const s = 'right' === t;
                i[s ? n : r - n - 1] = e[s ? n : e.length - n - 1];
              }
              return i;
            })(e, { dir: t, size: r });
      }
      class f extends h {
        constructor({ max: e, min: t, signed: r, size: i, value: n }) {
          super(
            `Number "${n}" is not in safe ${i ? `${8 * i}-bit ${r ? 'signed' : 'unsigned'} ` : ''}integer range ${e ? `(${t} to ${e})` : `(above ${t})`}`,
            { name: 'IntegerOutOfRangeError' }
          );
        }
      }
      class g extends h {
        constructor({ givenSize: e, maxSize: t }) {
          super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`, {
            name: 'SizeOverflowError',
          });
        }
      }
      function y(e) {
        return u(e, { strict: !1 }) ? Math.ceil((e.length - 2) / 2) : e.length;
      }
      function m(e, { size: t }) {
        if (y(e) > t) throw new g({ givenSize: y(e), maxSize: t });
      }
      function w(e, t = {}) {
        const { signed: r } = t;
        t.size && m(e, { size: t.size });
        const i = BigInt(e);
        if (!r) return i;
        const n = (e.length - 2) / 2;
        return i <= (1n << (8n * BigInt(n) - 1n)) - 1n
          ? i
          : i - BigInt(`0x${'f'.padStart(2 * n, 'f')}`) - 1n;
      }
      function b(e, t = {}) {
        return Number(w(e, t));
      }
      const v = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
      function E(e, t = {}) {
        return 'number' === typeof e || 'bigint' === typeof e
          ? S(e, t)
          : 'string' === typeof e
            ? (function (e, t = {}) {
                return I(P.encode(e), t);
              })(e, t)
            : 'boolean' === typeof e
              ? (function (e, t = {}) {
                  const r = `0x${Number(e)}`;
                  if ('number' === typeof t.size)
                    return m(r, { size: t.size }), p(r, { size: t.size });
                  return r;
                })(e, t)
              : I(e, t);
      }
      function I(e, t = {}) {
        let r = '';
        for (let n = 0; n < e.length; n++) r += v[e[n]];
        const i = `0x${r}`;
        return 'number' === typeof t.size
          ? (m(i, { size: t.size }), p(i, { dir: 'right', size: t.size }))
          : i;
      }
      function S(e, t = {}) {
        const { signed: r, size: i } = t,
          n = BigInt(e);
        let s;
        i
          ? (s = r ? (1n << (8n * BigInt(i) - 1n)) - 1n : 2n ** (8n * BigInt(i)) - 1n)
          : 'number' === typeof e && (s = BigInt(Number.MAX_SAFE_INTEGER));
        const o = 'bigint' === typeof s && r ? -s - 1n : 0;
        if ((s && n > s) || n < o) {
          const t = 'bigint' === typeof e ? 'n' : '';
          throw new f({
            max: s ? `${s}${t}` : void 0,
            min: `${o}${t}`,
            signed: r,
            size: i,
            value: `${e}${t}`,
          });
        }
        const a = `0x${(r && n < 0 ? (1n << BigInt(8 * i)) + BigInt(n) : n).toString(16)}`;
        return i ? p(a, { size: i }) : a;
      }
      const P = new TextEncoder();
      const O = new TextEncoder();
      function _(e, t = {}) {
        return 'number' === typeof e || 'bigint' === typeof e
          ? (function (e, t) {
              return j(S(e, t));
            })(e, t)
          : 'boolean' === typeof e
            ? (function (e, t = {}) {
                const r = new Uint8Array(1);
                if (((r[0] = Number(e)), 'number' === typeof t.size))
                  return m(r, { size: t.size }), p(r, { size: t.size });
                return r;
              })(e, t)
            : u(e)
              ? j(e, t)
              : D(e, t);
      }
      const x = 48,
        A = 57,
        T = 65,
        N = 70,
        C = 97,
        R = 102;
      function k(e) {
        return e >= x && e <= A
          ? e - x
          : e >= T && e <= N
            ? e - (T - 10)
            : e >= C && e <= R
              ? e - (C - 10)
              : void 0;
      }
      function j(e, t = {}) {
        let r = e;
        t.size && (m(r, { size: t.size }), (r = p(r, { dir: 'right', size: t.size })));
        let i = r.slice(2);
        i.length % 2 && (i = `0${i}`);
        const n = i.length / 2,
          s = new Uint8Array(n);
        for (let o = 0, a = 0; o < n; o++) {
          const e = k(i.charCodeAt(a++)),
            t = k(i.charCodeAt(a++));
          if (void 0 === e || void 0 === t)
            throw new h(`Invalid byte sequence ("${i[a - 2]}${i[a - 1]}" in "${i}").`);
          s[o] = 16 * e + t;
        }
        return s;
      }
      function D(e, t = {}) {
        const r = O.encode(e);
        return 'number' === typeof t.size
          ? (m(r, { size: t.size }), p(r, { dir: 'right', size: t.size }))
          : r;
      }
      var L = r(12518);
      const q = BigInt(2 ** 32 - 1),
        U = BigInt(32);
      function B(e, t = !1) {
        return t
          ? { h: Number(e & q), l: Number((e >> U) & q) }
          : { h: 0 | Number((e >> U) & q), l: 0 | Number(e & q) };
      }
      function $(e, t = !1) {
        let r = new Uint32Array(e.length),
          i = new Uint32Array(e.length);
        for (let n = 0; n < e.length; n++) {
          const { h: s, l: o } = B(e[n], t);
          [r[n], i[n]] = [s, o];
        }
        return [r, i];
      }
      const M = (e, t, r) => (e << r) | (t >>> (32 - r)),
        z = (e, t, r) => (t << r) | (e >>> (32 - r)),
        H = (e, t, r) => (t << (r - 32)) | (e >>> (64 - r)),
        V = (e, t, r) => (e << (r - 32)) | (t >>> (64 - r));
      var K = r(91220);
      const F = [],
        W = [],
        G = [],
        Y = BigInt(0),
        J = BigInt(1),
        Z = BigInt(2),
        Q = BigInt(7),
        X = BigInt(256),
        ee = BigInt(113);
      for (let Io = 0, So = J, Po = 1, Oo = 0; Io < 24; Io++) {
        ([Po, Oo] = [Oo, (2 * Po + 3 * Oo) % 5]),
          F.push(2 * (5 * Oo + Po)),
          W.push((((Io + 1) * (Io + 2)) / 2) % 64);
        let e = Y;
        for (let t = 0; t < 7; t++)
          (So = ((So << J) ^ ((So >> Q) * ee)) % X), So & Z && (e ^= J << ((J << BigInt(t)) - J));
        G.push(e);
      }
      const [te, re] = $(G, !0),
        ie = (e, t, r) => (r > 32 ? H(e, t, r) : M(e, t, r)),
        ne = (e, t, r) => (r > 32 ? V(e, t, r) : z(e, t, r));
      class se extends K.kb {
        constructor(e, t, r, i = !1, n = 24) {
          if (
            (super(),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = r),
            (this.enableXOF = i),
            (this.rounds = n),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (0, L.k8)(r),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw new Error('Sha3 supports only keccak-f1600 function');
          (this.state = new Uint8Array(200)), (this.state32 = (0, K.Jq)(this.state));
        }
        keccak() {
          K.iA || (0, K.l1)(this.state32),
            (function (e, t = 24) {
              const r = new Uint32Array(10);
              for (let i = 24 - t; i < 24; i++) {
                for (let i = 0; i < 10; i++)
                  r[i] = e[i] ^ e[i + 10] ^ e[i + 20] ^ e[i + 30] ^ e[i + 40];
                for (let i = 0; i < 10; i += 2) {
                  const t = (i + 8) % 10,
                    n = (i + 2) % 10,
                    s = r[n],
                    o = r[n + 1],
                    a = ie(s, o, 1) ^ r[t],
                    c = ne(s, o, 1) ^ r[t + 1];
                  for (let r = 0; r < 50; r += 10) (e[i + r] ^= a), (e[i + r + 1] ^= c);
                }
                let t = e[2],
                  n = e[3];
                for (let r = 0; r < 24; r++) {
                  const i = W[r],
                    s = ie(t, n, i),
                    o = ne(t, n, i),
                    a = F[r];
                  (t = e[a]), (n = e[a + 1]), (e[a] = s), (e[a + 1] = o);
                }
                for (let i = 0; i < 50; i += 10) {
                  for (let t = 0; t < 10; t++) r[t] = e[i + t];
                  for (let t = 0; t < 10; t++) e[i + t] ^= ~r[(t + 2) % 10] & r[(t + 4) % 10];
                }
                (e[0] ^= te[i]), (e[1] ^= re[i]);
              }
              r.fill(0);
            })(this.state32, this.rounds),
            K.iA || (0, K.l1)(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          (0, L.$h)(this);
          const { blockLen: t, state: r } = this,
            i = (e = (0, K.O0)(e)).length;
          for (let n = 0; n < i; ) {
            const s = Math.min(t - this.pos, i - n);
            for (let t = 0; t < s; t++) r[this.pos++] ^= e[n++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          const { state: e, suffix: t, pos: r, blockLen: i } = this;
          (e[r] ^= t),
            0 !== (128 & t) && r === i - 1 && this.keccak(),
            (e[i - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          (0, L.$h)(this, !1), (0, L.gk)(e), this.finish();
          const t = this.state,
            { blockLen: r } = this;
          for (let i = 0, n = e.length; i < n; ) {
            this.posOut >= r && this.keccak();
            const s = Math.min(r - this.posOut, n - i);
            e.set(t.subarray(this.posOut, this.posOut + s), i), (this.posOut += s), (i += s);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF) throw new Error('XOF is not possible for this instance');
          return this.writeInto(e);
        }
        xof(e) {
          return (0, L.k8)(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if (((0, L.eB)(e, this), this.finished)) throw new Error('digest() was already called');
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(e) {
          const { blockLen: t, suffix: r, outputLen: i, rounds: n, enableXOF: s } = this;
          return (
            e || (e = new se(t, r, i, s, n)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = n),
            (e.suffix = r),
            (e.outputLen = i),
            (e.enableXOF = s),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      const oe = (e, t, r) => (0, K.hE)(() => new se(t, e, r)),
        ae = oe(1, 136, 32);
      function ce(e, t) {
        const r = t || 'hex',
          i = ae(u(e, { strict: !1 }) ? _(e) : e);
        return 'bytes' === r ? i : E(i);
      }
      class he extends Map {
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
          const t = super.get(e);
          return super.has(e) && void 0 !== t && (this.delete(e), super.set(e, t)), t;
        }
        set(e, t) {
          if ((super.set(e, t), this.maxSize && this.size > this.maxSize)) {
            const e = this.keys().next().value;
            e && this.delete(e);
          }
          return this;
        }
      }
      const le = new he(8192);
      function ue(e, t) {
        if (le.has(`${e}.${t}`)) return le.get(`${e}.${t}`);
        const r = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
          i = ce(D(r), 'bytes'),
          n = (t ? r.substring(`${t}0x`.length) : r).split('');
        for (let o = 0; o < 40; o += 2)
          i[o >> 1] >> 4 >= 8 && n[o] && (n[o] = n[o].toUpperCase()),
            (15 & i[o >> 1]) >= 8 && n[o + 1] && (n[o + 1] = n[o + 1].toUpperCase());
        const s = `0x${n.join('')}`;
        return le.set(`${e}.${t}`, s), s;
      }
      function de(e) {
        if (0 === e || 1 === e) return e;
        if (27 === e) return 0;
        if (28 === e) return 1;
        throw new Error('Invalid yParityOrV value');
      }
      async function pe({ hash: e, signature: t }) {
        return (
          (i = await (async function ({ hash: e, signature: t }) {
            const i = u(e) ? e : E(e),
              { secp256k1: n } = await r.e(8410).then(r.bind(r, 98410));
            return `0x${(() => {
              if ('object' === typeof t && 'r' in t && 's' in t) {
                const { r: e, s: r, v: i, yParity: s } = t,
                  o = de(Number(s ?? i));
                return new n.Signature(w(e), w(r)).addRecoveryBit(o);
              }
              const e = u(t) ? t : E(t),
                r = de(b(`0x${e.slice(130)}`));
              return n.Signature.fromCompact(e.substring(2, 130)).addRecoveryBit(r);
            })()
              .recoverPublicKey(i.substring(2))
              .toHex(!1)}`;
          })({ hash: e, signature: t })),
          ue(`0x${ce(`0x${i.substring(4)}`).substring(26)}`)
        );
        var i;
      }
      var fe = function (e) {
          if (e.length >= 255) throw new TypeError('Alphabet too long');
          const t = new Uint8Array(256);
          for (let a = 0; a < t.length; a++) t[a] = 255;
          for (let a = 0; a < e.length; a++) {
            const r = e.charAt(a),
              i = r.charCodeAt(0);
            if (255 !== t[i]) throw new TypeError(r + ' is ambiguous');
            t[i] = a;
          }
          const r = e.length,
            i = e.charAt(0),
            n = Math.log(r) / Math.log(256),
            s = Math.log(256) / Math.log(r);
          function o(e) {
            if ('string' !== typeof e) throw new TypeError('Expected String');
            if (0 === e.length) return new Uint8Array();
            let s = 0,
              o = 0,
              a = 0;
            for (; e[s] === i; ) o++, s++;
            const c = ((e.length - s) * n + 1) >>> 0,
              h = new Uint8Array(c);
            for (; s < e.length; ) {
              const i = e.charCodeAt(s);
              if (i > 255) return;
              let n = t[i];
              if (255 === n) return;
              let o = 0;
              for (let e = c - 1; (0 !== n || o < a) && -1 !== e; e--, o++)
                (n += (r * h[e]) >>> 0), (h[e] = n % 256 >>> 0), (n = (n / 256) >>> 0);
              if (0 !== n) throw new Error('Non-zero carry');
              (a = o), s++;
            }
            let l = c - a;
            for (; l !== c && 0 === h[l]; ) l++;
            const u = new Uint8Array(o + (c - l));
            let d = o;
            for (; l !== c; ) u[d++] = h[l++];
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
                throw new TypeError('Expected Uint8Array');
              if (0 === t.length) return '';
              let n = 0,
                o = 0,
                a = 0;
              const c = t.length;
              for (; a !== c && 0 === t[a]; ) a++, n++;
              const h = ((c - a) * s + 1) >>> 0,
                l = new Uint8Array(h);
              for (; a !== c; ) {
                let e = t[a],
                  i = 0;
                for (let t = h - 1; (0 !== e || i < o) && -1 !== t; t--, i++)
                  (e += (256 * l[t]) >>> 0), (l[t] = e % r >>> 0), (e = (e / r) >>> 0);
                if (0 !== e) throw new Error('Non-zero carry');
                (o = i), a++;
              }
              let u = h - o;
              for (; u !== h && 0 === l[u]; ) u++;
              let d = i.repeat(n);
              for (; u < h; ++u) d += e.charAt(l[u]);
              return d;
            },
            decodeUnsafe: o,
            decode: function (e) {
              const t = o(e);
              if (t) return t;
              throw new Error('Non-base' + r + ' character');
            },
          };
        },
        ge = fe('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'),
        ye = r(49392);
      function me(e = 0) {
        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe
          ? globalThis.Buffer.allocUnsafe(e)
          : new Uint8Array(e);
      }
      function we(e, t) {
        t || (t = e.reduce((e, t) => e + t.length, 0));
        const r = me(t);
        let i = 0;
        for (const n of e) r.set(n, i), (i += n.length);
        return r;
      }
      var be = r(97883);
      function ve(e, t, r, i) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: i },
        };
      }
      const Ee = ve(
          'utf8',
          'u',
          (e) => 'u' + new TextDecoder('utf8').decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        Ie = ve(
          'ascii',
          'a',
          (e) => {
            let t = 'a';
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t;
          },
          (e) => {
            const t = me((e = e.substring(1)).length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          }
        );
      var Se = {
        utf8: Ee,
        'utf-8': Ee,
        hex: be.bases.base16,
        latin1: Ie,
        ascii: Ie,
        binary: Ie,
        ...be.bases,
      };
      function Pe(e, t = 'utf8') {
        const r = Se[t];
        if (!r) throw new Error(`Unsupported encoding "${t}"`);
        return ('utf8' !== t && 'utf-8' !== t) ||
          null == globalThis.Buffer ||
          null == globalThis.Buffer.from
          ? r.decoder.decode(`${r.prefix}${e}`)
          : globalThis.Buffer.from(e, 'utf8');
      }
      function Oe(e, t = 'utf8') {
        const r = Se[t];
        if (!r) throw new Error(`Unsupported encoding "${t}"`);
        return ('utf8' !== t && 'utf-8' !== t) ||
          null == globalThis.Buffer ||
          null == globalThis.Buffer.from
          ? r.encoder.encode(e).substring(1)
          : globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString('utf8');
      }
      const _e = {
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
      var xe = r(34155),
        Ae = r(48764).Buffer;
      const Te = ':';
      function Ne(e) {
        const [t, r] = e.split(Te);
        return { namespace: t, reference: r };
      }
      function Ce(e, t = []) {
        const r = [];
        return (
          Object.keys(e).forEach((i) => {
            if (t.length && !t.includes(i)) return;
            const n = e[i];
            r.push(...n.accounts);
          }),
          r
        );
      }
      function Re(e, t) {
        return e.includes(':') ? [e] : t.chains || [];
      }
      var ke = Object.defineProperty,
        je = Object.defineProperties,
        De = Object.getOwnPropertyDescriptors,
        Le = Object.getOwnPropertySymbols,
        qe = Object.prototype.hasOwnProperty,
        Ue = Object.prototype.propertyIsEnumerable,
        Be = (e, t, r) =>
          t in e
            ? ke(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        $e = (e, t) => {
          for (var r in t || (t = {})) qe.call(t, r) && Be(e, r, t[r]);
          if (Le) for (var r of Le(t)) Ue.call(t, r) && Be(e, r, t[r]);
          return e;
        };
      const Me = 'react-native',
        ze = 'node',
        He = 'browser',
        Ve = 'unknown',
        Ke = 'js';
      function Fe() {
        return typeof xe < 'u' && typeof xe.versions < 'u' && typeof xe.versions.node < 'u';
      }
      function We() {
        return (
          !(0, s.getDocument)() && !!(0, s.getNavigator)() && 'ReactNative' === navigator.product
        );
      }
      function Ge() {
        return (
          We() &&
          typeof r.g < 'u' &&
          typeof (null == r.g ? void 0 : r.g.Platform) < 'u' &&
          'android' === (null == r.g ? void 0 : r.g.Platform.OS)
        );
      }
      function Ye() {
        return (
          We() &&
          typeof r.g < 'u' &&
          typeof (null == r.g ? void 0 : r.g.Platform) < 'u' &&
          'ios' === (null == r.g ? void 0 : r.g.Platform.OS)
        );
      }
      function Je() {
        return !Fe() && !!(0, s.getNavigator)() && !!(0, s.getDocument)();
      }
      function Ze() {
        return We() ? Me : Fe() ? ze : Je() ? He : Ve;
      }
      function Qe() {
        var e;
        try {
          return We() && typeof r.g < 'u' && typeof (null == r.g ? void 0 : r.g.Application) < 'u'
            ? null == (e = r.g.Application)
              ? void 0
              : e.applicationId
            : void 0;
        } catch {
          return;
        }
      }
      function Xe(e) {
        var t, r;
        const i = et();
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
            ((e, t) => je(e, De(t)))($e($e({}, i), e), {
              url: e?.url || i.url,
              name: e?.name || i.name,
              description: e?.description || i.description,
              icons: null != (r = e?.icons) && r.length && e.icons.length > 0 ? e.icons : i.icons,
            })
          );
        } catch (n) {
          return console.warn('Error populating app metadata', n), e || i;
        }
      }
      function et() {
        return (0, o.D)() || { name: '', description: '', url: '', icons: [''] };
      }
      function tt(e, t, n) {
        const o = (function () {
            if (
              Ze() === Me &&
              typeof r.g < 'u' &&
              typeof (null == r.g ? void 0 : r.g.Platform) < 'u'
            ) {
              const { OS: e, Version: t } = r.g.Platform;
              return [e, t].join('-');
            }
            const e = (0, i.qY)();
            if (null === e) return 'unknown';
            const t = e.os ? e.os.replace(' ', '').toLowerCase() : 'unknown';
            return 'browser' === e.type
              ? [t, e.name, e.version].join('-')
              : [t, e.version].join('-');
          })(),
          a = (function () {
            var e;
            const t = Ze();
            return t === He
              ? [t, (null == (e = (0, s.getLocation)()) ? void 0 : e.host) || 'unknown'].join(':')
              : t;
          })();
        return [[e, t].join('-'), [Ke, n].join('-'), o, a].join('/');
      }
      function rt({
        protocol: e,
        version: t,
        relayUrl: r,
        sdkVersion: i,
        auth: n,
        projectId: s,
        useOnCloseEvent: o,
        bundleId: a,
        packageName: c,
      }) {
        const h = r.split('?'),
          l = {
            auth: n,
            ua: tt(e, t, i),
            projectId: s,
            useOnCloseEvent: o || void 0,
            packageName: c || void 0,
            bundleId: a || void 0,
          },
          u = (function (e, t) {
            const r = new URLSearchParams(e);
            for (const i of Object.keys(t).sort())
              if (t.hasOwnProperty(i)) {
                const e = t[i];
                void 0 !== e && r.set(i, e);
              }
            return r.toString();
          })(h[1] || '', l);
        return h[0] + '?' + u;
      }
      function it(e, t) {
        return e.filter((e) => t.includes(e)).length === e.length;
      }
      function nt(e) {
        return Object.fromEntries(e.entries());
      }
      function st(e) {
        return new Map(Object.entries(e));
      }
      function ot(e = n.FIVE_MINUTES, t) {
        const r = (0, n.toMiliseconds)(e || n.FIVE_MINUTES);
        let i, s, o, a;
        return {
          resolve: (e) => {
            o && i && (clearTimeout(o), i(e), (a = Promise.resolve(e)));
          },
          reject: (e) => {
            o && s && (clearTimeout(o), s(e));
          },
          done: () =>
            new Promise((e, n) => {
              if (a) return e(a);
              (o = setTimeout(() => {
                const e = new Error(t);
                (a = Promise.reject(e)), n(e);
              }, r)),
                (i = e),
                (s = n);
            }),
        };
      }
      function at(e, t, r) {
        return new Promise(async (i, n) => {
          const s = setTimeout(() => n(new Error(r)), t);
          try {
            i(await e);
          } catch (o) {
            n(o);
          }
          clearTimeout(s);
        });
      }
      function ct(e, t) {
        if ('string' == typeof t && t.startsWith(`${e}:`)) return t;
        if ('topic' === e.toLowerCase()) {
          if ('string' != typeof t)
            throw new Error('Value must be "string" for expirer target type: topic');
          return `topic:${t}`;
        }
        if ('id' === e.toLowerCase()) {
          if ('number' != typeof t)
            throw new Error('Value must be "number" for expirer target type: id');
          return `id:${t}`;
        }
        throw new Error(`Unknown expirer target type: ${e}`);
      }
      function ht(e) {
        return ct('topic', e);
      }
      function lt(e) {
        return ct('id', e);
      }
      function ut(e) {
        const [t, r] = e.split(':'),
          i = { id: void 0, topic: void 0 };
        if ('topic' === t && 'string' == typeof r) i.topic = r;
        else {
          if ('id' !== t || !Number.isInteger(Number(r)))
            throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);
          i.id = Number(r);
        }
        return i;
      }
      function dt(e, t) {
        return (0, n.fromMiliseconds)((t || Date.now()) + (0, n.toMiliseconds)(e));
      }
      function pt(e) {
        return Date.now() >= (0, n.toMiliseconds)(e);
      }
      function ft(e, t) {
        return `${e}${t ? `:${t}` : ''}`;
      }
      function gt(e = [], t = []) {
        return [...new Set([...e, ...t])];
      }
      async function yt({ id: e, topic: t, wcDeepLink: i }) {
        var n;
        try {
          if (!i) return;
          const o = ('string' == typeof i ? JSON.parse(i) : i)?.href;
          if ('string' != typeof o) return;
          const a = (function (e, t, r) {
              const i = `requestId=${t}&sessionTopic=${r}`;
              e.endsWith('/') && (e = e.slice(0, -1));
              let n = `${e}`;
              if (e.startsWith('https://t.me')) {
                n = `${n}${e.includes('?') ? '&startapp=' : '?startapp='}${(function (e, t = !1) {
                  const r = Ae.from(e).toString('base64');
                  return t ? r.replace(/[=]/g, '') : r;
                })(i, !0)}`;
              } else n = `${n}/wc?${i}`;
              return n;
            })(o, e, t),
            c = Ze();
          if (c === He) {
            if (null == (n = (0, s.getDocument)()) || !n.hasFocus())
              return void console.warn('Document does not have focus, skipping deeplink.');
            !(function (e) {
              let t = '_self';
              !(function () {
                try {
                  return window.self !== window.top;
                } catch {
                  return !1;
                }
              })()
                ? ((typeof window < 'u' &&
                    (!!window.TelegramWebviewProxy ||
                      !!window.Telegram ||
                      !!window.TelegramWebviewProxyProto)) ||
                    e.startsWith('https://') ||
                    e.startsWith('http://')) &&
                  (t = '_blank')
                : (t = '_top'),
                window.open(e, t, 'noreferrer noopener');
            })(a);
          } else
            c === Me &&
              typeof (null == r.g ? void 0 : r.g.Linking) < 'u' &&
              (await r.g.Linking.openURL(a));
        } catch (o) {
          console.error(o);
        }
      }
      async function mt(e, t) {
        let r = '';
        try {
          if (Je() && ((r = localStorage.getItem(t)), r)) return r;
          r = await e.getItem(t);
        } catch (i) {
          console.error(i);
        }
        return r;
      }
      function wt(e, t) {
        if (!e.includes(t)) return null;
        const r = e.split(/([&,?,=])/),
          i = r.indexOf(t);
        return r[i + 2];
      }
      function bt() {
        return typeof crypto < 'u' && null != crypto && crypto.randomUUID
          ? crypto.randomUUID()
          : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/gu, (e) => {
              const t = (16 * Math.random()) | 0;
              return ('x' === e ? t : (3 & t) | 8).toString(16);
            });
      }
      function vt() {
        return typeof xe < 'u' && 'true' === xe.env.IS_VITEST;
      }
      function Et(e) {
        return Ae.from(e, 'base64').toString('utf-8');
      }
      function It(e) {
        return new Promise((t) => setTimeout(t, e));
      }
      function St(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw new Error('positive integer expected, got ' + e);
      }
      function Pt(e, ...t) {
        if (
          !(function (e) {
            return (
              e instanceof Uint8Array ||
              (ArrayBuffer.isView(e) && 'Uint8Array' === e.constructor.name)
            );
          })(e)
        )
          throw new Error('Uint8Array expected');
        if (t.length > 0 && !t.includes(e.length))
          throw new Error('Uint8Array expected of length ' + t + ', got length=' + e.length);
      }
      function Ot(e) {
        if ('function' != typeof e || 'function' != typeof e.create)
          throw new Error('Hash should be wrapped by utils.wrapConstructor');
        St(e.outputLen), St(e.blockLen);
      }
      function _t(e, t = !0) {
        if (e.destroyed) throw new Error('Hash instance has been destroyed');
        if (t && e.finished) throw new Error('Hash#digest() has already been called');
      }
      function xt(e, t) {
        Pt(e);
        const r = t.outputLen;
        if (e.length < r)
          throw new Error('digestInto() expects output buffer of length at least ' + r);
      }
      const At = BigInt(2 ** 32 - 1),
        Tt = BigInt(32);
      function Nt(e, t = !1) {
        return t
          ? { h: Number(e & At), l: Number((e >> Tt) & At) }
          : { h: 0 | Number((e >> Tt) & At), l: 0 | Number(e & At) };
      }
      const Ct =
        'object' == typeof globalThis && 'crypto' in globalThis ? globalThis.crypto : void 0;
      function Rt(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function kt(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      const jt = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0];
      function Dt(e) {
        return (
          ((e << 24) & 4278190080) |
          ((e << 8) & 16711680) |
          ((e >>> 8) & 65280) |
          ((e >>> 24) & 255)
        );
      }
      function Lt(e) {
        for (let t = 0; t < e.length; t++) e[t] = Dt(e[t]);
      }
      function qt(e) {
        return (
          'string' == typeof e &&
            (e = (function (e) {
              if ('string' != typeof e)
                throw new Error('utf8ToBytes expected string, got ' + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          Pt(e),
          e
        );
      }
      class Ut {
        clone() {
          return this._cloneInto();
        }
      }
      function Bt(e) {
        const t = (t) => e().update(qt(t)).digest(),
          r = e();
        return (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = () => e()), t;
      }
      function $t(e = 32) {
        if (Ct && 'function' == typeof Ct.getRandomValues)
          return Ct.getRandomValues(new Uint8Array(e));
        if (Ct && 'function' == typeof Ct.randomBytes) return Ct.randomBytes(e);
        throw new Error('crypto.getRandomValues must be defined');
      }
      const Mt = [],
        zt = [],
        Ht = [],
        Vt = BigInt(0),
        Kt = BigInt(1),
        Ft = BigInt(2),
        Wt = BigInt(7),
        Gt = BigInt(256),
        Yt = BigInt(113);
      for (let Io = 0, So = Kt, Po = 1, Oo = 0; Io < 24; Io++) {
        ([Po, Oo] = [Oo, (2 * Po + 3 * Oo) % 5]),
          Mt.push(2 * (5 * Oo + Po)),
          zt.push((((Io + 1) * (Io + 2)) / 2) % 64);
        let e = Vt;
        for (let t = 0; t < 7; t++)
          (So = ((So << Kt) ^ ((So >> Wt) * Yt)) % Gt),
            So & Ft && (e ^= Kt << ((Kt << BigInt(t)) - Kt));
        Ht.push(e);
      }
      const [Jt, Zt] = (function (e, t = !1) {
          let r = new Uint32Array(e.length),
            i = new Uint32Array(e.length);
          for (let n = 0; n < e.length; n++) {
            const { h: s, l: o } = Nt(e[n], t);
            [r[n], i[n]] = [s, o];
          }
          return [r, i];
        })(Ht, !0),
        Qt = (e, t, r) =>
          r > 32
            ? ((e, t, r) => (t << (r - 32)) | (e >>> (64 - r)))(e, t, r)
            : ((e, t, r) => (e << r) | (t >>> (32 - r)))(e, t, r),
        Xt = (e, t, r) =>
          r > 32
            ? ((e, t, r) => (e << (r - 32)) | (t >>> (64 - r)))(e, t, r)
            : ((e, t, r) => (t << r) | (e >>> (32 - r)))(e, t, r);
      class er extends Ut {
        constructor(e, t, r, i = !1, n = 24) {
          if (
            (super(),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = r),
            (this.enableXOF = i),
            (this.rounds = n),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            St(r),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw new Error('Sha3 supports only keccak-f1600 function');
          var s;
          (this.state = new Uint8Array(200)),
            (this.state32 =
              ((s = this.state),
              new Uint32Array(s.buffer, s.byteOffset, Math.floor(s.byteLength / 4))));
        }
        keccak() {
          jt || Lt(this.state32),
            (function (e, t = 24) {
              const r = new Uint32Array(10);
              for (let i = 24 - t; i < 24; i++) {
                for (let i = 0; i < 10; i++)
                  r[i] = e[i] ^ e[i + 10] ^ e[i + 20] ^ e[i + 30] ^ e[i + 40];
                for (let i = 0; i < 10; i += 2) {
                  const t = (i + 8) % 10,
                    n = (i + 2) % 10,
                    s = r[n],
                    o = r[n + 1],
                    a = Qt(s, o, 1) ^ r[t],
                    c = Xt(s, o, 1) ^ r[t + 1];
                  for (let r = 0; r < 50; r += 10) (e[i + r] ^= a), (e[i + r + 1] ^= c);
                }
                let t = e[2],
                  n = e[3];
                for (let r = 0; r < 24; r++) {
                  const i = zt[r],
                    s = Qt(t, n, i),
                    o = Xt(t, n, i),
                    a = Mt[r];
                  (t = e[a]), (n = e[a + 1]), (e[a] = s), (e[a + 1] = o);
                }
                for (let i = 0; i < 50; i += 10) {
                  for (let t = 0; t < 10; t++) r[t] = e[i + t];
                  for (let t = 0; t < 10; t++) e[i + t] ^= ~r[(t + 2) % 10] & r[(t + 4) % 10];
                }
                (e[0] ^= Jt[i]), (e[1] ^= Zt[i]);
              }
              r.fill(0);
            })(this.state32, this.rounds),
            jt || Lt(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          _t(this);
          const { blockLen: t, state: r } = this,
            i = (e = qt(e)).length;
          for (let n = 0; n < i; ) {
            const s = Math.min(t - this.pos, i - n);
            for (let t = 0; t < s; t++) r[this.pos++] ^= e[n++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          const { state: e, suffix: t, pos: r, blockLen: i } = this;
          (e[r] ^= t),
            0 !== (128 & t) && r === i - 1 && this.keccak(),
            (e[i - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          _t(this, !1), Pt(e), this.finish();
          const t = this.state,
            { blockLen: r } = this;
          for (let i = 0, n = e.length; i < n; ) {
            this.posOut >= r && this.keccak();
            const s = Math.min(r - this.posOut, n - i);
            e.set(t.subarray(this.posOut, this.posOut + s), i), (this.posOut += s), (i += s);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF) throw new Error('XOF is not possible for this instance');
          return this.writeInto(e);
        }
        xof(e) {
          return St(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if ((xt(e, this), this.finished)) throw new Error('digest() was already called');
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(e) {
          const { blockLen: t, suffix: r, outputLen: i, rounds: n, enableXOF: s } = this;
          return (
            e || (e = new er(t, r, i, s, n)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = n),
            (e.suffix = r),
            (e.outputLen = i),
            (e.enableXOF = s),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      const tr = ((e, t, r) => Bt(() => new er(t, e, r)))(1, 136, 32),
        rr = 'https://rpc.walletconnect.org/v1';
      function ir(e) {
        const t = `\x19Ethereum Signed Message:\n${e.length}`,
          r = new TextEncoder().encode(t + e);
        return '0x' + Ae.from(tr(r)).toString('hex');
      }
      async function nr(e, t, r, i, n, s) {
        switch (r.t) {
          case 'eip191':
            return await (async function (e, t, r) {
              return (await pe({ hash: ir(t), signature: r })).toLowerCase() === e.toLowerCase();
            })(e, t, r.s);
          case 'eip1271':
            return await (async function (e, t, r, i, n, s) {
              const o = Ne(i);
              if (!o.namespace || !o.reference)
                throw new Error(
                  `isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${i}`
                );
              try {
                const o = '0x1626ba7e',
                  a = '0000000000000000000000000000000000000000000000000000000000000040',
                  c = '0000000000000000000000000000000000000000000000000000000000000041',
                  h = r.substring(2),
                  l = o + ir(t).substring(2) + a + c + h,
                  u = await fetch(`${s || rr}/?chainId=${i}&projectId=${n}`, {
                    method: 'POST',
                    body: JSON.stringify({
                      id: sr(),
                      jsonrpc: '2.0',
                      method: 'eth_call',
                      params: [{ to: e, data: l }, 'latest'],
                    }),
                  }),
                  { result: d } = await u.json();
                return !!d && d.slice(0, o.length).toLowerCase() === o.toLowerCase();
              } catch (a) {
                return console.error('isValidEip1271Signature: ', a), !1;
              }
            })(e, t, r.s, i, n, s);
          default:
            throw new Error(
              `verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${r.t}`
            );
        }
      }
      function sr() {
        return Date.now() + Math.floor(1e3 * Math.random());
      }
      function or(e) {
        const t = atob(e),
          r = new Uint8Array(t.length);
        for (let o = 0; o < t.length; o++) r[o] = t.charCodeAt(o);
        const i = r[0];
        if (0 === i) throw new Error('No signatures found');
        const n = 1 + 64 * i;
        if (r.length < n) throw new Error('Transaction data too short for claimed signature count');
        if (r.length < 100) throw new Error('Transaction too short');
        const s = Ae.from(e, 'base64').slice(1, 65);
        return ge.encode(s);
      }
      var ar = Object.defineProperty,
        cr = Object.defineProperties,
        hr = Object.getOwnPropertyDescriptors,
        lr = Object.getOwnPropertySymbols,
        ur = Object.prototype.hasOwnProperty,
        dr = Object.prototype.propertyIsEnumerable,
        pr = (e, t, r) =>
          t in e
            ? ar(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        fr = (e, t) => {
          for (var r in t || (t = {})) ur.call(t, r) && pr(e, r, t[r]);
          if (lr) for (var r of lr(t)) dr.call(t, r) && pr(e, r, t[r]);
          return e;
        },
        gr = (e, t) => cr(e, hr(t));
      const yr = (e) => e?.split(':'),
        mr = (e) => {
          const t = e && yr(e);
          if (t) return t[2] + ':' + t[3];
        },
        wr = (e) => {
          const t = e && yr(e);
          if (t) return t.pop();
        };
      async function br(e) {
        const { cacao: t, projectId: r } = e,
          { s: i, p: n } = t,
          s = vr(n, n.iss),
          o = wr(n.iss);
        return await nr(o, s, i, mr(n.iss), r);
      }
      const vr = (e, t) => {
        const r = `${e.domain} wants you to sign in with your Ethereum account:`,
          i = wr(t);
        if (!e.aud && !e.uri)
          throw new Error('Either `aud` or `uri` is required to construct the message');
        let n = e.statement || void 0;
        const s = `URI: ${e.aud || e.uri}`,
          o = `Version: ${e.version}`,
          a = `Chain ID: ${((e) => {
            const t = e && yr(e);
            if (t) return e.includes('did:pkh:') ? t[3] : t[1];
          })(t)}`,
          c = `Nonce: ${e.nonce}`,
          h = `Issued At: ${e.iat}`,
          l = e.exp ? `Expiration Time: ${e.exp}` : void 0,
          u = e.nbf ? `Not Before: ${e.nbf}` : void 0,
          d = e.requestId ? `Request ID: ${e.requestId}` : void 0,
          p = e.resources ? `Resources:${e.resources.map((e) => `\n- ${e}`).join('')}` : void 0,
          f = Cr(e.resources);
        if (f) {
          n = Ar(n, Pr(f));
        }
        return [r, i, '', n, '', s, o, a, c, h, l, u, d, p].filter((e) => null != e).join('\n');
      };
      function Er(e) {
        if (!e) throw new Error('No recap provided, value is undefined');
        if (!e.att) throw new Error('No `att` property found');
        const t = Object.keys(e.att);
        if (null == t || !t.length) throw new Error('No resources found in `att` property');
        t.forEach((t) => {
          const r = e.att[t];
          if (Array.isArray(r)) throw new Error(`Resource must be an object: ${t}`);
          if ('object' != typeof r) throw new Error(`Resource must be an object: ${t}`);
          if (!Object.keys(r).length) throw new Error(`Resource object is empty: ${t}`);
          Object.keys(r).forEach((e) => {
            const t = r[e];
            if (!Array.isArray(t))
              throw new Error(`Ability limits ${e} must be an array of objects, found: ${t}`);
            if (!t.length)
              throw new Error(`Value of ${e} is empty array, must be an array with objects`);
            t.forEach((t) => {
              if ('object' != typeof t)
                throw new Error(`Ability limits (${e}) must be an array of objects, found: ${t}`);
            });
          });
        });
      }
      function Ir(e, t, r = {}) {
        t = t?.sort((e, t) => e.localeCompare(t));
        const i = t.map((t) => ({ [`${e}/${t}`]: [r] }));
        return Object.assign({}, ...i);
      }
      function Sr(e) {
        return (
          Er(e),
          `urn:recap:${(function (e) {
            return Ae.from(JSON.stringify(e)).toString('base64');
          })(e).replace(/=/g, '')}`
        );
      }
      function Pr(e) {
        const t = (function (e) {
          return JSON.parse(Ae.from(e, 'base64').toString('utf-8'));
        })(e.replace('urn:recap:', ''));
        return Er(t), t;
      }
      function Or(e, t, r) {
        const i = (function (e, t, r, i = {}) {
          return r?.sort((e, t) => e.localeCompare(t)), { att: { [e]: Ir(t, r, i) } };
        })(e, t, r);
        return Sr(i);
      }
      function _r(e) {
        return e && e.includes('urn:recap:');
      }
      function xr(e, t) {
        const r = (function (e, t) {
          Er(e), Er(t);
          const r = Object.keys(e.att)
              .concat(Object.keys(t.att))
              .sort((e, t) => e.localeCompare(t)),
            i = { att: {} };
          return (
            r.forEach((r) => {
              var n, s;
              Object.keys((null == (n = e.att) ? void 0 : n[r]) || {})
                .concat(Object.keys((null == (s = t.att) ? void 0 : s[r]) || {}))
                .sort((e, t) => e.localeCompare(t))
                .forEach((n) => {
                  var s, o;
                  i.att[r] = gr(fr({}, i.att[r]), {
                    [n]:
                      (null == (s = e.att[r]) ? void 0 : s[n]) ||
                      (null == (o = t.att[r]) ? void 0 : o[n]),
                  });
                });
            }),
            i
          );
        })(Pr(e), Pr(t));
        return Sr(r);
      }
      function Ar(e = '', t) {
        Er(t);
        const r =
          'I further authorize the stated URI to perform the following actions on my behalf: ';
        if (e.includes(r)) return e;
        const i = [];
        let n = 0;
        Object.keys(t.att).forEach((e) => {
          const r = Object.keys(t.att[e]).map((e) => ({
            ability: e.split('/')[0],
            action: e.split('/')[1],
          }));
          r.sort((e, t) => e.action.localeCompare(t.action));
          const s = {};
          r.forEach((e) => {
            s[e.ability] || (s[e.ability] = []), s[e.ability].push(e.action);
          });
          const o = Object.keys(s).map(
            (t) => (n++, `(${n}) '${t}': '${s[t].join("', '")}' for '${e}'.`)
          );
          i.push(o.join(', ').replace('.,', '.'));
        });
        return `${e ? e + ' ' : ''}${`${r}${i.join(' ')}`}`;
      }
      function Tr(e) {
        var t;
        const r = Pr(e);
        Er(r);
        const i = null == (t = r.att) ? void 0 : t.eip155;
        return i ? Object.keys(i).map((e) => e.split('/')[1]) : [];
      }
      function Nr(e) {
        const t = Pr(e);
        Er(t);
        const r = [];
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
      function Cr(e) {
        if (!e) return;
        const t = e?.[e.length - 1];
        return _r(t) ? t : void 0;
      }
      function Rr(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw new Error('positive integer expected, got ' + e);
      }
      function kr(e) {
        return (
          e instanceof Uint8Array || (ArrayBuffer.isView(e) && 'Uint8Array' === e.constructor.name)
        );
      }
      function jr(e, ...t) {
        if (!kr(e)) throw new Error('Uint8Array expected');
        if (t.length > 0 && !t.includes(e.length))
          throw new Error('Uint8Array expected of length ' + t + ', got length=' + e.length);
      }
      function Dr(e, t = !0) {
        if (e.destroyed) throw new Error('Hash instance has been destroyed');
        if (t && e.finished) throw new Error('Hash#digest() has already been called');
      }
      function Lr(e) {
        if ('boolean' != typeof e) throw new Error(`boolean expected, not ${e}`);
      }
      const qr = (e) => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
      if (!(68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0]))
        throw new Error('Non little-endian hardware is not supported');
      function Ur(e) {
        if ('string' == typeof e)
          e = (function (e) {
            if ('string' != typeof e) throw new Error('string expected');
            return new Uint8Array(new TextEncoder().encode(e));
          })(e);
        else {
          if (!kr(e)) throw new Error('Uint8Array expected, got ' + typeof e);
          e = Mr(e);
        }
        return e;
      }
      function Br(e, t, r = !0) {
        if (void 0 === t) return new Uint8Array(e);
        if (t.length !== e)
          throw new Error('invalid output length, expected ' + e + ', got: ' + t.length);
        if (
          r &&
          !(function (e) {
            return e.byteOffset % 4 === 0;
          })(t)
        )
          throw new Error('invalid output, must be aligned');
        return t;
      }
      function $r(e, t, r, i) {
        if ('function' == typeof e.setBigUint64) return e.setBigUint64(t, r, i);
        const n = BigInt(32),
          s = BigInt(4294967295),
          o = Number((r >> n) & s),
          a = Number(r & s),
          c = i ? 4 : 0,
          h = i ? 0 : 4;
        e.setUint32(t + c, o, i), e.setUint32(t + h, a, i);
      }
      function Mr(e) {
        return Uint8Array.from(e);
      }
      function zr(...e) {
        for (let t = 0; t < e.length; t++) e[t].fill(0);
      }
      const Hr = (e) => Uint8Array.from(e.split('').map((e) => e.charCodeAt(0))),
        Vr = Hr('expand 16-byte k'),
        Kr = Hr('expand 32-byte k'),
        Fr = qr(Vr),
        Wr = qr(Kr);
      function Gr(e, t) {
        return (e << t) | (e >>> (32 - t));
      }
      function Yr(e) {
        return e.byteOffset % 4 === 0;
      }
      const Jr = 2 ** 32 - 1,
        Zr = new Uint32Array();
      const Qr = (e, t) => (255 & e[t++]) | ((255 & e[t++]) << 8);
      class Xr {
        constructor(e) {
          (this.blockLen = 16),
            (this.outputLen = 16),
            (this.buffer = new Uint8Array(16)),
            (this.r = new Uint16Array(10)),
            (this.h = new Uint16Array(10)),
            (this.pad = new Uint16Array(8)),
            (this.pos = 0),
            (this.finished = !1),
            jr((e = Ur(e)), 32);
          const t = Qr(e, 0),
            r = Qr(e, 2),
            i = Qr(e, 4),
            n = Qr(e, 6),
            s = Qr(e, 8),
            o = Qr(e, 10),
            a = Qr(e, 12),
            c = Qr(e, 14);
          (this.r[0] = 8191 & t),
            (this.r[1] = 8191 & ((t >>> 13) | (r << 3))),
            (this.r[2] = 7939 & ((r >>> 10) | (i << 6))),
            (this.r[3] = 8191 & ((i >>> 7) | (n << 9))),
            (this.r[4] = 255 & ((n >>> 4) | (s << 12))),
            (this.r[5] = (s >>> 1) & 8190),
            (this.r[6] = 8191 & ((s >>> 14) | (o << 2))),
            (this.r[7] = 8065 & ((o >>> 11) | (a << 5))),
            (this.r[8] = 8191 & ((a >>> 8) | (c << 8))),
            (this.r[9] = (c >>> 5) & 127);
          for (let h = 0; h < 8; h++) this.pad[h] = Qr(e, 16 + 2 * h);
        }
        process(e, t, r = !1) {
          const i = r ? 0 : 2048,
            { h: n, r: s } = this,
            o = s[0],
            a = s[1],
            c = s[2],
            h = s[3],
            l = s[4],
            u = s[5],
            d = s[6],
            p = s[7],
            f = s[8],
            g = s[9],
            y = Qr(e, t + 0),
            m = Qr(e, t + 2),
            w = Qr(e, t + 4),
            b = Qr(e, t + 6),
            v = Qr(e, t + 8),
            E = Qr(e, t + 10),
            I = Qr(e, t + 12),
            S = Qr(e, t + 14);
          let P = n[0] + (8191 & y),
            O = n[1] + (8191 & ((y >>> 13) | (m << 3))),
            _ = n[2] + (8191 & ((m >>> 10) | (w << 6))),
            x = n[3] + (8191 & ((w >>> 7) | (b << 9))),
            A = n[4] + (8191 & ((b >>> 4) | (v << 12))),
            T = n[5] + ((v >>> 1) & 8191),
            N = n[6] + (8191 & ((v >>> 14) | (E << 2))),
            C = n[7] + (8191 & ((E >>> 11) | (I << 5))),
            R = n[8] + (8191 & ((I >>> 8) | (S << 8))),
            k = n[9] + ((S >>> 5) | i),
            j = 0,
            D = j + P * o + O * (5 * g) + _ * (5 * f) + x * (5 * p) + A * (5 * d);
          (j = D >>> 13),
            (D &= 8191),
            (D += T * (5 * u) + N * (5 * l) + C * (5 * h) + R * (5 * c) + k * (5 * a)),
            (j += D >>> 13),
            (D &= 8191);
          let L = j + P * a + O * o + _ * (5 * g) + x * (5 * f) + A * (5 * p);
          (j = L >>> 13),
            (L &= 8191),
            (L += T * (5 * d) + N * (5 * u) + C * (5 * l) + R * (5 * h) + k * (5 * c)),
            (j += L >>> 13),
            (L &= 8191);
          let q = j + P * c + O * a + _ * o + x * (5 * g) + A * (5 * f);
          (j = q >>> 13),
            (q &= 8191),
            (q += T * (5 * p) + N * (5 * d) + C * (5 * u) + R * (5 * l) + k * (5 * h)),
            (j += q >>> 13),
            (q &= 8191);
          let U = j + P * h + O * c + _ * a + x * o + A * (5 * g);
          (j = U >>> 13),
            (U &= 8191),
            (U += T * (5 * f) + N * (5 * p) + C * (5 * d) + R * (5 * u) + k * (5 * l)),
            (j += U >>> 13),
            (U &= 8191);
          let B = j + P * l + O * h + _ * c + x * a + A * o;
          (j = B >>> 13),
            (B &= 8191),
            (B += T * (5 * g) + N * (5 * f) + C * (5 * p) + R * (5 * d) + k * (5 * u)),
            (j += B >>> 13),
            (B &= 8191);
          let $ = j + P * u + O * l + _ * h + x * c + A * a;
          (j = $ >>> 13),
            ($ &= 8191),
            ($ += T * o + N * (5 * g) + C * (5 * f) + R * (5 * p) + k * (5 * d)),
            (j += $ >>> 13),
            ($ &= 8191);
          let M = j + P * d + O * u + _ * l + x * h + A * c;
          (j = M >>> 13),
            (M &= 8191),
            (M += T * a + N * o + C * (5 * g) + R * (5 * f) + k * (5 * p)),
            (j += M >>> 13),
            (M &= 8191);
          let z = j + P * p + O * d + _ * u + x * l + A * h;
          (j = z >>> 13),
            (z &= 8191),
            (z += T * c + N * a + C * o + R * (5 * g) + k * (5 * f)),
            (j += z >>> 13),
            (z &= 8191);
          let H = j + P * f + O * p + _ * d + x * u + A * l;
          (j = H >>> 13),
            (H &= 8191),
            (H += T * h + N * c + C * a + R * o + k * (5 * g)),
            (j += H >>> 13),
            (H &= 8191);
          let V = j + P * g + O * f + _ * p + x * d + A * u;
          (j = V >>> 13),
            (V &= 8191),
            (V += T * l + N * h + C * c + R * a + k * o),
            (j += V >>> 13),
            (V &= 8191),
            (j = ((j << 2) + j) | 0),
            (j = (j + D) | 0),
            (D = 8191 & j),
            (j >>>= 13),
            (L += j),
            (n[0] = D),
            (n[1] = L),
            (n[2] = q),
            (n[3] = U),
            (n[4] = B),
            (n[5] = $),
            (n[6] = M),
            (n[7] = z),
            (n[8] = H),
            (n[9] = V);
        }
        finalize() {
          const { h: e, pad: t } = this,
            r = new Uint16Array(10);
          let i = e[1] >>> 13;
          e[1] &= 8191;
          for (let o = 2; o < 10; o++) (e[o] += i), (i = e[o] >>> 13), (e[o] &= 8191);
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
          for (let o = 1; o < 10; o++) (r[o] = e[o] + i), (i = r[o] >>> 13), (r[o] &= 8191);
          r[9] -= 8192;
          let n = (1 ^ i) - 1;
          for (let o = 0; o < 10; o++) r[o] &= n;
          n = ~n;
          for (let o = 0; o < 10; o++) e[o] = (e[o] & n) | r[o];
          (e[0] = 65535 & (e[0] | (e[1] << 13))),
            (e[1] = 65535 & ((e[1] >>> 3) | (e[2] << 10))),
            (e[2] = 65535 & ((e[2] >>> 6) | (e[3] << 7))),
            (e[3] = 65535 & ((e[3] >>> 9) | (e[4] << 4))),
            (e[4] = 65535 & ((e[4] >>> 12) | (e[5] << 1) | (e[6] << 14))),
            (e[5] = 65535 & ((e[6] >>> 2) | (e[7] << 11))),
            (e[6] = 65535 & ((e[7] >>> 5) | (e[8] << 8))),
            (e[7] = 65535 & ((e[8] >>> 8) | (e[9] << 5)));
          let s = e[0] + t[0];
          e[0] = 65535 & s;
          for (let o = 1; o < 8; o++)
            (s = (((e[o] + t[o]) | 0) + (s >>> 16)) | 0), (e[o] = 65535 & s);
          zr(r);
        }
        update(e) {
          Dr(this);
          const { buffer: t, blockLen: r } = this,
            i = (e = Ur(e)).length;
          for (let n = 0; n < i; ) {
            const s = Math.min(r - this.pos, i - n);
            if (s !== r)
              t.set(e.subarray(n, n + s), this.pos),
                (this.pos += s),
                (n += s),
                this.pos === r && (this.process(t, 0, !1), (this.pos = 0));
            else for (; r <= i - n; n += r) this.process(e, n);
          }
          return this;
        }
        destroy() {
          zr(this.h, this.r, this.buffer, this.pad);
        }
        digestInto(e) {
          Dr(this),
            (function (e, t) {
              jr(e);
              const r = t.outputLen;
              if (e.length < r)
                throw new Error('digestInto() expects output buffer of length at least ' + r);
            })(e, this),
            (this.finished = !0);
          const { buffer: t, h: r } = this;
          let { pos: i } = this;
          if (i) {
            for (t[i++] = 1; i < 16; i++) t[i] = 0;
            this.process(t, 0, !0);
          }
          this.finalize();
          let n = 0;
          for (let s = 0; s < 8; s++) (e[n++] = r[s] >>> 0), (e[n++] = r[s] >>> 8);
          return e;
        }
        digest() {
          const { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          const r = e.slice(0, t);
          return this.destroy(), r;
        }
      }
      const ei = (function (e) {
        const t = (t, r) => e(r).update(Ur(t)).digest(),
          r = e(new Uint8Array(32));
        return (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = (t) => e(t)), t;
      })((e) => new Xr(e));
      const ti = (function (e, t) {
          const {
            allowShortKeys: r,
            extendNonceFn: i,
            counterLength: n,
            counterRight: s,
            rounds: o,
          } = (function (e, t) {
            if (null == t || 'object' != typeof t) throw new Error('options must be defined');
            return Object.assign(e, t);
          })({ allowShortKeys: !1, counterLength: 8, counterRight: !1, rounds: 20 }, t);
          if ('function' != typeof e) throw new Error('core must be a function');
          return (
            Rr(n),
            Rr(o),
            Lr(s),
            Lr(r),
            (t, a, c, h, l = 0) => {
              jr(t), jr(a), jr(c);
              const u = c.length;
              if ((void 0 === h && (h = new Uint8Array(u)), jr(h), Rr(l), l < 0 || l >= Jr))
                throw new Error('arx: counter overflow');
              if (h.length < u)
                throw new Error(`arx: output (${h.length}) is shorter than data (${u})`);
              const d = [];
              let p,
                f,
                g = t.length;
              if (32 === g) d.push((p = Mr(t))), (f = Wr);
              else {
                if (16 !== g || !r) throw new Error(`arx: invalid 32-byte key, got length=${g}`);
                (p = new Uint8Array(32)), p.set(t), p.set(t, 16), (f = Fr), d.push(p);
              }
              Yr(a) || d.push((a = Mr(a)));
              const y = qr(p);
              if (i) {
                if (24 !== a.length) throw new Error('arx: extended nonce must be 24 bytes');
                i(f, y, qr(a.subarray(0, 16)), y), (a = a.subarray(16));
              }
              const m = 16 - n;
              if (m !== a.length) throw new Error(`arx: nonce must be ${m} or 16 bytes`);
              if (12 !== m) {
                const e = new Uint8Array(12);
                e.set(a, s ? 0 : 12 - a.length), (a = e), d.push(a);
              }
              const w = qr(a);
              return (
                (function (e, t, r, i, n, s, o, a) {
                  const c = n.length,
                    h = new Uint8Array(64),
                    l = qr(h),
                    u = Yr(n) && Yr(s),
                    d = u ? qr(n) : Zr,
                    p = u ? qr(s) : Zr;
                  for (let f = 0; f < c; o++) {
                    if ((e(t, r, i, l, o, a), o >= Jr)) throw new Error('arx: counter overflow');
                    const g = Math.min(64, c - f);
                    if (u && 64 === g) {
                      const e = f / 4;
                      if (f % 4 !== 0) throw new Error('arx: invalid block position');
                      for (let t, r = 0; r < 16; r++) (t = e + r), (p[t] = d[t] ^ l[r]);
                      f += 64;
                    } else {
                      for (let e, t = 0; t < g; t++) (e = f + t), (s[e] = n[e] ^ h[t]);
                      f += g;
                    }
                  }
                })(e, f, y, w, c, h, l, o),
                zr(...d),
                h
              );
            }
          );
        })(
          function (e, t, r, i, n, s = 20) {
            let o = e[0],
              a = e[1],
              c = e[2],
              h = e[3],
              l = t[0],
              u = t[1],
              d = t[2],
              p = t[3],
              f = t[4],
              g = t[5],
              y = t[6],
              m = t[7],
              w = n,
              b = r[0],
              v = r[1],
              E = r[2],
              I = o,
              S = a,
              P = c,
              O = h,
              _ = l,
              x = u,
              A = d,
              T = p,
              N = f,
              C = g,
              R = y,
              k = m,
              j = w,
              D = b,
              L = v,
              q = E;
            for (let B = 0; B < s; B += 2)
              (I = (I + _) | 0),
                (j = Gr(j ^ I, 16)),
                (N = (N + j) | 0),
                (_ = Gr(_ ^ N, 12)),
                (I = (I + _) | 0),
                (j = Gr(j ^ I, 8)),
                (N = (N + j) | 0),
                (_ = Gr(_ ^ N, 7)),
                (S = (S + x) | 0),
                (D = Gr(D ^ S, 16)),
                (C = (C + D) | 0),
                (x = Gr(x ^ C, 12)),
                (S = (S + x) | 0),
                (D = Gr(D ^ S, 8)),
                (C = (C + D) | 0),
                (x = Gr(x ^ C, 7)),
                (P = (P + A) | 0),
                (L = Gr(L ^ P, 16)),
                (R = (R + L) | 0),
                (A = Gr(A ^ R, 12)),
                (P = (P + A) | 0),
                (L = Gr(L ^ P, 8)),
                (R = (R + L) | 0),
                (A = Gr(A ^ R, 7)),
                (O = (O + T) | 0),
                (q = Gr(q ^ O, 16)),
                (k = (k + q) | 0),
                (T = Gr(T ^ k, 12)),
                (O = (O + T) | 0),
                (q = Gr(q ^ O, 8)),
                (k = (k + q) | 0),
                (T = Gr(T ^ k, 7)),
                (I = (I + x) | 0),
                (q = Gr(q ^ I, 16)),
                (R = (R + q) | 0),
                (x = Gr(x ^ R, 12)),
                (I = (I + x) | 0),
                (q = Gr(q ^ I, 8)),
                (R = (R + q) | 0),
                (x = Gr(x ^ R, 7)),
                (S = (S + A) | 0),
                (j = Gr(j ^ S, 16)),
                (k = (k + j) | 0),
                (A = Gr(A ^ k, 12)),
                (S = (S + A) | 0),
                (j = Gr(j ^ S, 8)),
                (k = (k + j) | 0),
                (A = Gr(A ^ k, 7)),
                (P = (P + T) | 0),
                (D = Gr(D ^ P, 16)),
                (N = (N + D) | 0),
                (T = Gr(T ^ N, 12)),
                (P = (P + T) | 0),
                (D = Gr(D ^ P, 8)),
                (N = (N + D) | 0),
                (T = Gr(T ^ N, 7)),
                (O = (O + _) | 0),
                (L = Gr(L ^ O, 16)),
                (C = (C + L) | 0),
                (_ = Gr(_ ^ C, 12)),
                (O = (O + _) | 0),
                (L = Gr(L ^ O, 8)),
                (C = (C + L) | 0),
                (_ = Gr(_ ^ C, 7));
            let U = 0;
            (i[U++] = (o + I) | 0),
              (i[U++] = (a + S) | 0),
              (i[U++] = (c + P) | 0),
              (i[U++] = (h + O) | 0),
              (i[U++] = (l + _) | 0),
              (i[U++] = (u + x) | 0),
              (i[U++] = (d + A) | 0),
              (i[U++] = (p + T) | 0),
              (i[U++] = (f + N) | 0),
              (i[U++] = (g + C) | 0),
              (i[U++] = (y + R) | 0),
              (i[U++] = (m + k) | 0),
              (i[U++] = (w + j) | 0),
              (i[U++] = (b + D) | 0),
              (i[U++] = (v + L) | 0),
              (i[U++] = (E + q) | 0);
          },
          { counterRight: !1, counterLength: 4, allowShortKeys: !1 }
        ),
        ri = new Uint8Array(16),
        ii = (e, t) => {
          e.update(t);
          const r = t.length % 16;
          r && e.update(ri.subarray(r));
        },
        ni = new Uint8Array(32);
      function si(e, t, r, i, n) {
        const s = e(t, r, ni),
          o = ei.create(s);
        n && ii(o, n), ii(o, i);
        const a = new Uint8Array(16),
          c = ((e) => new DataView(e.buffer, e.byteOffset, e.byteLength))(a);
        $r(c, 0, BigInt(n ? n.length : 0), !0), $r(c, 8, BigInt(i.length), !0), o.update(a);
        const h = o.digest();
        return zr(s, a), h;
      }
      const oi = ((e, t) => {
        function r(r, ...i) {
          if ((jr(r), void 0 !== e.nonceLength)) {
            const t = i[0];
            if (!t) throw new Error('nonce / iv required');
            e.varSizeNonce ? jr(t) : jr(t, e.nonceLength);
          }
          const n = e.tagLength;
          n && void 0 !== i[1] && jr(i[1]);
          const s = t(r, ...i),
            o = (e, t) => {
              if (void 0 !== t) {
                if (2 !== e) throw new Error('cipher output not supported');
                jr(t);
              }
            };
          let a = !1;
          return {
            encrypt(e, t) {
              if (a) throw new Error('cannot encrypt() twice with same key + nonce');
              return (a = !0), jr(e), o(s.encrypt.length, t), s.encrypt(e, t);
            },
            decrypt(e, t) {
              if ((jr(e), n && e.length < n))
                throw new Error('invalid ciphertext length: smaller than tagLength=' + n);
              return o(s.decrypt.length, t), s.decrypt(e, t);
            },
          };
        }
        return Object.assign(r, e), r;
      })(
        { blockSize: 64, nonceLength: 12, tagLength: 16 },
        ((ai = ti),
        (e, t, r) => ({
          encrypt(i, n) {
            const s = i.length;
            (n = Br(s + 16, n, !1)).set(i);
            const o = n.subarray(0, -16);
            ai(e, t, o, o, 1);
            const a = si(ai, e, t, o, r);
            return n.set(a, s), zr(a), n;
          },
          decrypt(i, n) {
            n = Br(i.length - 16, n, !1);
            const s = i.subarray(0, -16),
              o = i.subarray(-16),
              a = si(ai, e, t, s, r);
            if (
              !(function (e, t) {
                if (e.length !== t.length) return !1;
                let r = 0;
                for (let i = 0; i < e.length; i++) r |= e[i] ^ t[i];
                return 0 === r;
              })(o, a)
            )
              throw new Error('invalid tag');
            return n.set(i.subarray(0, -16)), ai(e, t, n, n, 1), zr(a), n;
          },
        }))
      );
      var ai;
      class ci extends Ut {
        constructor(e, t) {
          super(), (this.finished = !1), (this.destroyed = !1), Ot(e);
          const r = qt(t);
          if (((this.iHash = e.create()), 'function' != typeof this.iHash.update))
            throw new Error('Expected instance of class which extends utils.Hash');
          (this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen);
          const i = this.blockLen,
            n = new Uint8Array(i);
          n.set(r.length > i ? e.create().update(r).digest() : r);
          for (let s = 0; s < n.length; s++) n[s] ^= 54;
          this.iHash.update(n), (this.oHash = e.create());
          for (let s = 0; s < n.length; s++) n[s] ^= 106;
          this.oHash.update(n), n.fill(0);
        }
        update(e) {
          return _t(this), this.iHash.update(e), this;
        }
        digestInto(e) {
          _t(this),
            Pt(e, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(e),
            this.oHash.update(e),
            this.oHash.digestInto(e),
            this.destroy();
        }
        digest() {
          const e = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(e), e;
        }
        _cloneInto(e) {
          e || (e = Object.create(Object.getPrototypeOf(this), {}));
          const { oHash: t, iHash: r, finished: i, destroyed: n, blockLen: s, outputLen: o } = this;
          return (
            (e.finished = i),
            (e.destroyed = n),
            (e.blockLen = s),
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
      const hi = (e, t, r) => new ci(e, t).update(r).digest();
      hi.create = (e, t) => new ci(e, t);
      const li = new Uint8Array([0]),
        ui = new Uint8Array();
      const di = (e, t, r, i, n) =>
        (function (e, t, r, i = 32) {
          if ((Ot(e), St(i), i > 255 * e.outputLen))
            throw new Error('Length should be <= 255*HashLen');
          const n = Math.ceil(i / e.outputLen);
          void 0 === r && (r = ui);
          const s = new Uint8Array(n * e.outputLen),
            o = hi.create(e, t),
            a = o._cloneInto(),
            c = new Uint8Array(o.outputLen);
          for (let h = 0; h < n; h++)
            (li[0] = h + 1),
              a
                .update(0 === h ? ui : c)
                .update(r)
                .update(li)
                .digestInto(c),
              s.set(c, e.outputLen * h),
              o._cloneInto(a);
          return o.destroy(), a.destroy(), c.fill(0), li.fill(0), s.slice(0, i);
        })(
          e,
          (function (e, t, r) {
            return Ot(e), void 0 === r && (r = new Uint8Array(e.outputLen)), hi(e, qt(r), qt(t));
          })(e, t, r),
          i,
          n
        );
      function pi(e, t, r) {
        return (e & t) ^ (~e & r);
      }
      function fi(e, t, r) {
        return (e & t) ^ (e & r) ^ (t & r);
      }
      class gi extends Ut {
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
            (this.view = Rt(this.buffer));
        }
        update(e) {
          _t(this);
          const { view: t, buffer: r, blockLen: i } = this,
            n = (e = qt(e)).length;
          for (let s = 0; s < n; ) {
            const o = Math.min(i - this.pos, n - s);
            if (o !== i)
              r.set(e.subarray(s, s + o), this.pos),
                (this.pos += o),
                (s += o),
                this.pos === i && (this.process(t, 0), (this.pos = 0));
            else {
              const t = Rt(e);
              for (; i <= n - s; s += i) this.process(t, s);
            }
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          _t(this), xt(e, this), (this.finished = !0);
          const { buffer: t, view: r, blockLen: i, isLE: n } = this;
          let { pos: s } = this;
          (t[s++] = 128),
            this.buffer.subarray(s).fill(0),
            this.padOffset > i - s && (this.process(r, 0), (s = 0));
          for (let l = s; l < i; l++) t[l] = 0;
          (function (e, t, r, i) {
            if ('function' == typeof e.setBigUint64) return e.setBigUint64(t, r, i);
            const n = BigInt(32),
              s = BigInt(4294967295),
              o = Number((r >> n) & s),
              a = Number(r & s),
              c = i ? 4 : 0,
              h = i ? 0 : 4;
            e.setUint32(t + c, o, i), e.setUint32(t + h, a, i);
          })(r, i - 8, BigInt(8 * this.length), n),
            this.process(r, 0);
          const o = Rt(e),
            a = this.outputLen;
          if (a % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
          const c = a / 4,
            h = this.get();
          if (c > h.length) throw new Error('_sha2: outputLen bigger than state');
          for (let l = 0; l < c; l++) o.setUint32(4 * l, h[l], n);
        }
        digest() {
          const { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          const r = e.slice(0, t);
          return this.destroy(), r;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          const { blockLen: t, buffer: r, length: i, finished: n, destroyed: s, pos: o } = this;
          return (
            (e.length = i),
            (e.pos = o),
            (e.finished = n),
            (e.destroyed = s),
            i % t && e.buffer.set(r),
            e
          );
        }
      }
      const yi = new Uint32Array([
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748,
          2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206,
          2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983,
          1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372,
          1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
          3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734,
          506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479,
          3329325298,
        ]),
        mi = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635,
          1541459225,
        ]),
        wi = new Uint32Array(64);
      class bi extends gi {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | mi[0]),
            (this.B = 0 | mi[1]),
            (this.C = 0 | mi[2]),
            (this.D = 0 | mi[3]),
            (this.E = 0 | mi[4]),
            (this.F = 0 | mi[5]),
            (this.G = 0 | mi[6]),
            (this.H = 0 | mi[7]);
        }
        get() {
          const { A: e, B: t, C: r, D: i, E: n, F: s, G: o, H: a } = this;
          return [e, t, r, i, n, s, o, a];
        }
        set(e, t, r, i, n, s, o, a) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | r),
            (this.D = 0 | i),
            (this.E = 0 | n),
            (this.F = 0 | s),
            (this.G = 0 | o),
            (this.H = 0 | a);
        }
        process(e, t) {
          for (let l = 0; l < 16; l++, t += 4) wi[l] = e.getUint32(t, !1);
          for (let l = 16; l < 64; l++) {
            const e = wi[l - 15],
              t = wi[l - 2],
              r = kt(e, 7) ^ kt(e, 18) ^ (e >>> 3),
              i = kt(t, 17) ^ kt(t, 19) ^ (t >>> 10);
            wi[l] = (i + wi[l - 7] + r + wi[l - 16]) | 0;
          }
          let { A: r, B: i, C: n, D: s, E: o, F: a, G: c, H: h } = this;
          for (let l = 0; l < 64; l++) {
            const e = (h + (kt(o, 6) ^ kt(o, 11) ^ kt(o, 25)) + pi(o, a, c) + yi[l] + wi[l]) | 0,
              t = ((kt(r, 2) ^ kt(r, 13) ^ kt(r, 22)) + fi(r, i, n)) | 0;
            (h = c),
              (c = a),
              (a = o),
              (o = (s + e) | 0),
              (s = n),
              (n = i),
              (i = r),
              (r = (e + t) | 0);
          }
          (r = (r + this.A) | 0),
            (i = (i + this.B) | 0),
            (n = (n + this.C) | 0),
            (s = (s + this.D) | 0),
            (o = (o + this.E) | 0),
            (a = (a + this.F) | 0),
            (c = (c + this.G) | 0),
            (h = (h + this.H) | 0),
            this.set(r, i, n, s, o, a, c, h);
        }
        roundClean() {
          wi.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      const vi = Bt(() => new bi()),
        Ei = BigInt(0),
        Ii = BigInt(1),
        Si = BigInt(2);
      function Pi(e) {
        return (
          e instanceof Uint8Array || (ArrayBuffer.isView(e) && 'Uint8Array' === e.constructor.name)
        );
      }
      function Oi(e) {
        if (!Pi(e)) throw new Error('Uint8Array expected');
      }
      function _i(e, t) {
        if ('boolean' != typeof t) throw new Error(e + ' boolean expected, got ' + t);
      }
      const xi = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
      function Ai(e) {
        Oi(e);
        let t = '';
        for (let r = 0; r < e.length; r++) t += xi[e[r]];
        return t;
      }
      function Ti(e) {
        const t = e.toString(16);
        return 1 & t.length ? '0' + t : t;
      }
      function Ni(e) {
        if ('string' != typeof e) throw new Error('hex string expected, got ' + typeof e);
        return '' === e ? Ei : BigInt('0x' + e);
      }
      const Ci = 48,
        Ri = 57,
        ki = 65,
        ji = 70,
        Di = 97,
        Li = 102;
      function qi(e) {
        return e >= Ci && e <= Ri
          ? e - Ci
          : e >= ki && e <= ji
            ? e - (ki - 10)
            : e >= Di && e <= Li
              ? e - (Di - 10)
              : void 0;
      }
      function Ui(e) {
        if ('string' != typeof e) throw new Error('hex string expected, got ' + typeof e);
        const t = e.length,
          r = t / 2;
        if (t % 2) throw new Error('hex string expected, got unpadded hex of length ' + t);
        const i = new Uint8Array(r);
        for (let n = 0, s = 0; n < r; n++, s += 2) {
          const t = qi(e.charCodeAt(s)),
            r = qi(e.charCodeAt(s + 1));
          if (void 0 === t || void 0 === r) {
            const t = e[s] + e[s + 1];
            throw new Error('hex string expected, got non-hex character "' + t + '" at index ' + s);
          }
          i[n] = 16 * t + r;
        }
        return i;
      }
      function Bi(e) {
        return Ni(Ai(e));
      }
      function $i(e) {
        return Oi(e), Ni(Ai(Uint8Array.from(e).reverse()));
      }
      function Mi(e, t) {
        return Ui(e.toString(16).padStart(2 * t, '0'));
      }
      function zi(e, t) {
        return Mi(e, t).reverse();
      }
      function Hi(e, t, r) {
        let i;
        if ('string' == typeof t)
          try {
            i = Ui(t);
          } catch (s) {
            throw new Error(e + ' must be hex string or Uint8Array, cause: ' + s);
          }
        else {
          if (!Pi(t)) throw new Error(e + ' must be hex string or Uint8Array');
          i = Uint8Array.from(t);
        }
        const n = i.length;
        if ('number' == typeof r && n !== r)
          throw new Error(e + ' of length ' + r + ' expected, got ' + n);
        return i;
      }
      function Vi(...e) {
        let t = 0;
        for (let i = 0; i < e.length; i++) {
          const r = e[i];
          Oi(r), (t += r.length);
        }
        const r = new Uint8Array(t);
        for (let i = 0, n = 0; i < e.length; i++) {
          const t = e[i];
          r.set(t, n), (n += t.length);
        }
        return r;
      }
      const Ki = (e) => 'bigint' == typeof e && Ei <= e;
      function Fi(e, t, r) {
        return Ki(e) && Ki(t) && Ki(r) && t <= e && e < r;
      }
      function Wi(e, t, r, i) {
        if (!Fi(t, r, i))
          throw new Error('expected valid ' + e + ': ' + r + ' <= n < ' + i + ', got ' + t);
      }
      function Gi(e) {
        let t;
        for (t = 0; e > Ei; e >>= Ii, t += 1);
        return t;
      }
      const Yi = (e) => (Si << BigInt(e - 1)) - Ii,
        Ji = (e) => new Uint8Array(e),
        Zi = (e) => Uint8Array.from(e);
      function Qi(e, t, r) {
        if ('number' != typeof e || e < 2) throw new Error('hashLen must be a number');
        if ('number' != typeof t || t < 2) throw new Error('qByteLen must be a number');
        if ('function' != typeof r) throw new Error('hmacFn must be a function');
        let i = Ji(e),
          n = Ji(e),
          s = 0;
        const o = () => {
            i.fill(1), n.fill(0), (s = 0);
          },
          a = (...e) => r(n, i, ...e),
          c = (e = Ji()) => {
            (n = a(Zi([0]), e)), (i = a()), 0 !== e.length && ((n = a(Zi([1]), e)), (i = a()));
          },
          h = () => {
            if (s++ >= 1e3) throw new Error('drbg: tried 1000 values');
            let e = 0;
            const r = [];
            for (; e < t; ) {
              i = a();
              const t = i.slice();
              r.push(t), (e += i.length);
            }
            return Vi(...r);
          };
        return (e, t) => {
          let r;
          for (o(), c(e); !(r = t(h())); ) c();
          return o(), r;
        };
      }
      const Xi = {
        bigint: (e) => 'bigint' == typeof e,
        function: (e) => 'function' == typeof e,
        boolean: (e) => 'boolean' == typeof e,
        string: (e) => 'string' == typeof e,
        stringOrUint8Array: (e) => 'string' == typeof e || Pi(e),
        isSafeInteger: (e) => Number.isSafeInteger(e),
        array: (e) => Array.isArray(e),
        field: (e, t) => t.Fp.isValid(e),
        hash: (e) => 'function' == typeof e && Number.isSafeInteger(e.outputLen),
      };
      function en(e, t, r = {}) {
        const i = (t, r, i) => {
          const n = Xi[r];
          if ('function' != typeof n) throw new Error('invalid validator function');
          const s = e[t];
          if ((!i || void 0 !== s) && !n(s, e))
            throw new Error('param ' + String(t) + ' is invalid. Expected ' + r + ', got ' + s);
        };
        for (const [n, s] of Object.entries(t)) i(n, s, !1);
        for (const [n, s] of Object.entries(r)) i(n, s, !0);
        return e;
      }
      function tn(e) {
        const t = new WeakMap();
        return (r, ...i) => {
          const n = t.get(r);
          if (void 0 !== n) return n;
          const s = e(r, ...i);
          return t.set(r, s), s;
        };
      }
      var rn = Object.freeze({
        __proto__: null,
        isBytes: Pi,
        abytes: Oi,
        abool: _i,
        bytesToHex: Ai,
        numberToHexUnpadded: Ti,
        hexToNumber: Ni,
        hexToBytes: Ui,
        bytesToNumberBE: Bi,
        bytesToNumberLE: $i,
        numberToBytesBE: Mi,
        numberToBytesLE: zi,
        numberToVarBytesBE: function (e) {
          return Ui(Ti(e));
        },
        ensureBytes: Hi,
        concatBytes: Vi,
        equalBytes: function (e, t) {
          if (e.length !== t.length) return !1;
          let r = 0;
          for (let i = 0; i < e.length; i++) r |= e[i] ^ t[i];
          return 0 === r;
        },
        utf8ToBytes: function (e) {
          if ('string' != typeof e) throw new Error('string expected');
          return new Uint8Array(new TextEncoder().encode(e));
        },
        inRange: Fi,
        aInRange: Wi,
        bitLen: Gi,
        bitGet: function (e, t) {
          return (e >> BigInt(t)) & Ii;
        },
        bitSet: function (e, t, r) {
          return e | ((r ? Ii : Ei) << BigInt(t));
        },
        bitMask: Yi,
        createHmacDrbg: Qi,
        validateObject: en,
        notImplemented: () => {
          throw new Error('not implemented');
        },
        memoized: tn,
      });
      const nn = BigInt(0),
        sn = BigInt(1),
        on = BigInt(2),
        an = BigInt(3),
        cn = BigInt(4),
        hn = BigInt(5),
        ln = BigInt(8);
      function un(e, t) {
        const r = e % t;
        return r >= nn ? r : t + r;
      }
      function dn(e, t, r) {
        if (t < nn) throw new Error('invalid exponent, negatives unsupported');
        if (r <= nn) throw new Error('invalid modulus');
        if (r === sn) return nn;
        let i = sn;
        for (; t > nn; ) t & sn && (i = (i * e) % r), (e = (e * e) % r), (t >>= sn);
        return i;
      }
      function pn(e, t, r) {
        let i = e;
        for (; t-- > nn; ) (i *= i), (i %= r);
        return i;
      }
      function fn(e, t) {
        if (e === nn) throw new Error('invert: expected non-zero number');
        if (t <= nn) throw new Error('invert: expected positive modulus, got ' + t);
        let r = un(e, t),
          i = t,
          n = nn,
          s = sn;
        for (; r !== nn; ) {
          const e = i % r,
            t = n - s * (i / r);
          (i = r), (r = e), (n = s), (s = t);
        }
        if (i !== sn) throw new Error('invert: does not exist');
        return un(n, t);
      }
      function gn(e) {
        if (e % cn === an) {
          const t = (e + sn) / cn;
          return function (e, r) {
            const i = e.pow(r, t);
            if (!e.eql(e.sqr(i), r)) throw new Error('Cannot find square root');
            return i;
          };
        }
        if (e % ln === hn) {
          const t = (e - hn) / ln;
          return function (e, r) {
            const i = e.mul(r, on),
              n = e.pow(i, t),
              s = e.mul(r, n),
              o = e.mul(e.mul(s, on), n),
              a = e.mul(s, e.sub(o, e.ONE));
            if (!e.eql(e.sqr(a), r)) throw new Error('Cannot find square root');
            return a;
          };
        }
        return (function (e) {
          const t = (e - sn) / on;
          let r, i, n;
          for (r = e - sn, i = 0; r % on === nn; r /= on, i++);
          for (n = on; n < e && dn(n, t, e) !== e - sn; n++)
            if (n > 1e3) throw new Error('Cannot find square root: likely non-prime P');
          if (1 === i) {
            const t = (e + sn) / cn;
            return function (e, r) {
              const i = e.pow(r, t);
              if (!e.eql(e.sqr(i), r)) throw new Error('Cannot find square root');
              return i;
            };
          }
          const s = (r + sn) / on;
          return function (e, o) {
            if (e.pow(o, t) === e.neg(e.ONE)) throw new Error('Cannot find square root');
            let a = i,
              c = e.pow(e.mul(e.ONE, n), r),
              h = e.pow(o, s),
              l = e.pow(o, r);
            for (; !e.eql(l, e.ONE); ) {
              if (e.eql(l, e.ZERO)) return e.ZERO;
              let t = 1;
              for (let i = e.sqr(l); t < a && !e.eql(i, e.ONE); t++) i = e.sqr(i);
              const r = e.pow(c, sn << BigInt(a - t - 1));
              (c = e.sqr(r)), (h = e.mul(h, r)), (l = e.mul(l, c)), (a = t);
            }
            return h;
          };
        })(e);
      }
      const yn = [
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
      function mn(e, t) {
        const r = void 0 !== t ? t : e.toString(2).length;
        return { nBitLength: r, nByteLength: Math.ceil(r / 8) };
      }
      function wn(e, t, r = !1, i = {}) {
        if (e <= nn) throw new Error('invalid field: expected ORDER > 0, got ' + e);
        const { nBitLength: n, nByteLength: s } = mn(e, t);
        if (s > 2048) throw new Error('invalid field: expected ORDER of <= 2048 bytes');
        let o;
        const a = Object.freeze({
          ORDER: e,
          isLE: r,
          BITS: n,
          BYTES: s,
          MASK: Yi(n),
          ZERO: nn,
          ONE: sn,
          create: (t) => un(t, e),
          isValid: (t) => {
            if ('bigint' != typeof t)
              throw new Error('invalid field element: expected bigint, got ' + typeof t);
            return nn <= t && t < e;
          },
          is0: (e) => e === nn,
          isOdd: (e) => (e & sn) === sn,
          neg: (t) => un(-t, e),
          eql: (e, t) => e === t,
          sqr: (t) => un(t * t, e),
          add: (t, r) => un(t + r, e),
          sub: (t, r) => un(t - r, e),
          mul: (t, r) => un(t * r, e),
          pow: (e, t) =>
            (function (e, t, r) {
              if (r < nn) throw new Error('invalid exponent, negatives unsupported');
              if (r === nn) return e.ONE;
              if (r === sn) return t;
              let i = e.ONE,
                n = t;
              for (; r > nn; ) r & sn && (i = e.mul(i, n)), (n = e.sqr(n)), (r >>= sn);
              return i;
            })(a, e, t),
          div: (t, r) => un(t * fn(r, e), e),
          sqrN: (e) => e * e,
          addN: (e, t) => e + t,
          subN: (e, t) => e - t,
          mulN: (e, t) => e * t,
          inv: (t) => fn(t, e),
          sqrt: i.sqrt || ((t) => (o || (o = gn(e)), o(a, t))),
          invertBatch: (e) =>
            (function (e, t) {
              const r = new Array(t.length),
                i = t.reduce((t, i, n) => (e.is0(i) ? t : ((r[n] = t), e.mul(t, i))), e.ONE),
                n = e.inv(i);
              return (
                t.reduceRight(
                  (t, i, n) => (e.is0(i) ? t : ((r[n] = e.mul(t, r[n])), e.mul(t, i))),
                  n
                ),
                r
              );
            })(a, e),
          cmov: (e, t, r) => (r ? t : e),
          toBytes: (e) => (r ? zi(e, s) : Mi(e, s)),
          fromBytes: (e) => {
            if (e.length !== s)
              throw new Error('Field.fromBytes: expected ' + s + ' bytes, got ' + e.length);
            return r ? $i(e) : Bi(e);
          },
        });
        return Object.freeze(a);
      }
      function bn(e) {
        if ('bigint' != typeof e) throw new Error('field order must be bigint');
        const t = e.toString(2).length;
        return Math.ceil(t / 8);
      }
      function vn(e) {
        const t = bn(e);
        return t + Math.ceil(t / 2);
      }
      const En = BigInt(0),
        In = BigInt(1);
      function Sn(e, t) {
        const r = t.negate();
        return e ? r : t;
      }
      function Pn(e, t) {
        if (!Number.isSafeInteger(e) || e <= 0 || e > t)
          throw new Error('invalid window size, expected [1..' + t + '], got W=' + e);
      }
      function On(e, t) {
        Pn(e, t);
        return { windows: Math.ceil(t / e) + 1, windowSize: 2 ** (e - 1) };
      }
      const _n = new WeakMap(),
        xn = new WeakMap();
      function An(e) {
        return xn.get(e) || 1;
      }
      function Tn(e, t, r, i) {
        if (
          ((function (e, t) {
            if (!Array.isArray(e)) throw new Error('array expected');
            e.forEach((e, r) => {
              if (!(e instanceof t)) throw new Error('invalid point at index ' + r);
            });
          })(r, e),
          (function (e, t) {
            if (!Array.isArray(e)) throw new Error('array of scalars expected');
            e.forEach((e, r) => {
              if (!t.isValid(e)) throw new Error('invalid scalar at index ' + r);
            });
          })(i, t),
          r.length !== i.length)
        )
          throw new Error('arrays of points and scalars must have equal length');
        const n = e.ZERO,
          s = Gi(BigInt(r.length)),
          o = s > 12 ? s - 3 : s > 4 ? s - 2 : s ? 2 : 1,
          a = (1 << o) - 1,
          c = new Array(a + 1).fill(n);
        let h = n;
        for (let l = Math.floor((t.BITS - 1) / o) * o; l >= 0; l -= o) {
          c.fill(n);
          for (let t = 0; t < i.length; t++) {
            const e = i[t],
              n = Number((e >> BigInt(l)) & BigInt(a));
            c[n] = c[n].add(r[t]);
          }
          let e = n;
          for (let t = c.length - 1, r = n; t > 0; t--) (r = r.add(c[t])), (e = e.add(r));
          if (((h = h.add(e)), 0 !== l)) for (let t = 0; t < o; t++) h = h.double();
        }
        return h;
      }
      function Nn(e) {
        return (
          (function (e) {
            const t = yn.reduce((e, t) => ((e[t] = 'function'), e), {
              ORDER: 'bigint',
              MASK: 'bigint',
              BYTES: 'isSafeInteger',
              BITS: 'isSafeInteger',
            });
            en(e, t);
          })(e.Fp),
          en(
            e,
            { n: 'bigint', h: 'bigint', Gx: 'field', Gy: 'field' },
            { nBitLength: 'isSafeInteger', nByteLength: 'isSafeInteger' }
          ),
          Object.freeze({ ...mn(e.n, e.nBitLength), ...e, p: e.Fp.ORDER })
        );
      }
      BigInt(0), BigInt(1), BigInt(2), BigInt(8);
      const Cn = BigInt(0),
        Rn = BigInt(1);
      const kn = BigInt(
        '57896044618658097711785492504343953926634992332820282019728792003956564819949'
      );
      BigInt(0);
      const jn = BigInt(1),
        Dn = BigInt(2),
        Ln = BigInt(3),
        qn = BigInt(5);
      BigInt(8);
      const Un = (function (e) {
        const t = (function (e) {
            return (
              en(
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
              Object.freeze({ ...e })
            );
          })(e),
          { P: r } = t,
          i = (e) => un(e, r),
          n = t.montgomeryBits,
          s = Math.ceil(n / 8),
          o = t.nByteLength,
          a = t.adjustScalarBytes || ((e) => e),
          c = t.powPminus2 || ((e) => dn(e, r - BigInt(2), r));
        function h(e, t, r) {
          const n = i(e * (t - r));
          return [(t = i(t - n)), (r = i(r + n))];
        }
        const l = (t.a - BigInt(2)) / BigInt(4);
        function u(e) {
          return zi(i(e), s);
        }
        function d(e, t) {
          const d = (function (e) {
              const t = Hi('u coordinate', e, s);
              return 32 === o && (t[31] &= 127), $i(t);
            })(t),
            p = (function (e) {
              const t = Hi('scalar', e),
                r = t.length;
              if (r !== s && r !== o)
                throw new Error('invalid scalar, expected ' + s + ' or ' + o + ' bytes, got ' + r);
              return $i(a(t));
            })(e),
            f = (function (e, t) {
              Wi('u', e, Cn, r), Wi('scalar', t, Cn, r);
              const s = t,
                o = e;
              let a,
                u = Rn,
                d = Cn,
                p = e,
                f = Rn,
                g = Cn;
              for (let r = BigInt(n - 1); r >= Cn; r--) {
                const e = (s >> r) & Rn;
                (g ^= e),
                  (a = h(g, u, p)),
                  (u = a[0]),
                  (p = a[1]),
                  (a = h(g, d, f)),
                  (d = a[0]),
                  (f = a[1]),
                  (g = e);
                const t = u + d,
                  n = i(t * t),
                  c = u - d,
                  y = i(c * c),
                  m = n - y,
                  w = p + f,
                  b = i((p - f) * t),
                  v = i(w * c),
                  E = b + v,
                  I = b - v;
                (p = i(E * E)), (f = i(o * i(I * I))), (u = i(n * y)), (d = i(m * (n + i(l * m))));
              }
              (a = h(g, u, p)), (u = a[0]), (p = a[1]), (a = h(g, d, f)), (d = a[0]), (f = a[1]);
              const y = c(d);
              return i(u * y);
            })(d, p);
          if (f === Cn) throw new Error('invalid private or public key received');
          return u(f);
        }
        const p = u(t.Gu);
        function f(e) {
          return d(e, p);
        }
        return {
          scalarMult: d,
          scalarMultBase: f,
          getSharedSecret: (e, t) => d(e, t),
          getPublicKey: (e) => f(e),
          utils: { randomPrivateKey: () => t.randomBytes(t.nByteLength) },
          GuBytes: p,
        };
      })({
        P: kn,
        a: BigInt(486662),
        montgomeryBits: 255,
        nByteLength: 32,
        Gu: BigInt(9),
        powPminus2: (e) => {
          const t = kn,
            { pow_p_5_8: r, b2: i } = (function (e) {
              const t = BigInt(10),
                r = BigInt(20),
                i = BigInt(40),
                n = BigInt(80),
                s = kn,
                o = (((e * e) % s) * e) % s,
                a = (pn(o, Dn, s) * o) % s,
                c = (pn(a, jn, s) * e) % s,
                h = (pn(c, qn, s) * c) % s,
                l = (pn(h, t, s) * h) % s,
                u = (pn(l, r, s) * l) % s,
                d = (pn(u, i, s) * u) % s,
                p = (pn(d, n, s) * d) % s,
                f = (pn(p, n, s) * d) % s,
                g = (pn(f, t, s) * h) % s;
              return { pow_p_5_8: (pn(g, Dn, s) * e) % s, b2: o };
            })(e);
          return un(pn(r, Ln, t) * i, t);
        },
        adjustScalarBytes: function (e) {
          return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
        },
        randomBytes: $t,
      });
      function Bn(e) {
        void 0 !== e.lowS && _i('lowS', e.lowS), void 0 !== e.prehash && _i('prehash', e.prehash);
      }
      const { bytesToNumberBE: $n, hexToBytes: Mn } = rn;
      class zn extends Error {
        constructor(e = '') {
          super(e);
        }
      }
      const Hn = {
          Err: zn,
          _tlv: {
            encode: (e, t) => {
              const { Err: r } = Hn;
              if (e < 0 || e > 256) throw new r('tlv.encode: wrong tag');
              if (1 & t.length) throw new r('tlv.encode: unpadded data');
              const i = t.length / 2,
                n = Ti(i);
              if ((n.length / 2) & 128) throw new r('tlv.encode: long form length too big');
              const s = i > 127 ? Ti((n.length / 2) | 128) : '';
              return Ti(e) + s + n + t;
            },
            decode(e, t) {
              const { Err: r } = Hn;
              let i = 0;
              if (e < 0 || e > 256) throw new r('tlv.encode: wrong tag');
              if (t.length < 2 || t[i++] !== e) throw new r('tlv.decode: wrong tlv');
              const n = t[i++];
              let s = 0;
              if (!!(128 & n)) {
                const e = 127 & n;
                if (!e) throw new r('tlv.decode(long): indefinite length not supported');
                if (e > 4) throw new r('tlv.decode(long): byte length is too big');
                const o = t.subarray(i, i + e);
                if (o.length !== e) throw new r('tlv.decode: length bytes not complete');
                if (0 === o[0]) throw new r('tlv.decode(long): zero leftmost byte');
                for (const t of o) s = (s << 8) | t;
                if (((i += e), s < 128)) throw new r('tlv.decode(long): not minimal encoding');
              } else s = n;
              const o = t.subarray(i, i + s);
              if (o.length !== s) throw new r('tlv.decode: wrong value length');
              return { v: o, l: t.subarray(i + s) };
            },
          },
          _int: {
            encode(e) {
              const { Err: t } = Hn;
              if (e < Vn) throw new t('integer: negative integers are not allowed');
              let r = Ti(e);
              if ((8 & Number.parseInt(r[0], 16) && (r = '00' + r), 1 & r.length))
                throw new t('unexpected DER parsing assertion: unpadded hex');
              return r;
            },
            decode(e) {
              const { Err: t } = Hn;
              if (128 & e[0]) throw new t('invalid signature integer: negative');
              if (0 === e[0] && !(128 & e[1]))
                throw new t('invalid signature integer: unnecessary leading zero');
              return $n(e);
            },
          },
          toSig(e) {
            const { Err: t, _int: r, _tlv: i } = Hn,
              n = 'string' == typeof e ? Mn(e) : e;
            Oi(n);
            const { v: s, l: o } = i.decode(48, n);
            if (o.length) throw new t('invalid signature: left bytes after parsing');
            const { v: a, l: c } = i.decode(2, s),
              { v: h, l: l } = i.decode(2, c);
            if (l.length) throw new t('invalid signature: left bytes after parsing');
            return { r: r.decode(a), s: r.decode(h) };
          },
          hexFromSig(e) {
            const { _tlv: t, _int: r } = Hn,
              i = t.encode(2, r.encode(e.r)) + t.encode(2, r.encode(e.s));
            return t.encode(48, i);
          },
        },
        Vn = BigInt(0),
        Kn = BigInt(1);
      BigInt(2);
      const Fn = BigInt(3);
      function Wn(e) {
        const t = (function (e) {
            const t = Nn(e);
            en(
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
            const { endo: r, Fp: i, a: n } = t;
            if (r) {
              if (!i.eql(n, i.ZERO))
                throw new Error(
                  'invalid endomorphism, can only be defined for Koblitz curves that have a=0'
                );
              if (
                'object' != typeof r ||
                'bigint' != typeof r.beta ||
                'function' != typeof r.splitScalar
              )
                throw new Error(
                  'invalid endomorphism, expected beta: bigint and splitScalar: function'
                );
            }
            return Object.freeze({ ...t });
          })(e),
          { Fp: r } = t,
          i = wn(t.n, t.nBitLength),
          n =
            t.toBytes ||
            ((e, t, i) => {
              const n = t.toAffine();
              return Vi(Uint8Array.from([4]), r.toBytes(n.x), r.toBytes(n.y));
            }),
          s =
            t.fromBytes ||
            ((e) => {
              const t = e.subarray(1);
              return {
                x: r.fromBytes(t.subarray(0, r.BYTES)),
                y: r.fromBytes(t.subarray(r.BYTES, 2 * r.BYTES)),
              };
            });
        function o(e) {
          const { a: i, b: n } = t,
            s = r.sqr(e),
            o = r.mul(s, e);
          return r.add(r.add(o, r.mul(e, i)), n);
        }
        if (!r.eql(r.sqr(t.Gy), o(t.Gx)))
          throw new Error('bad generator point: equation left != right');
        function a(e) {
          const { allowedPrivateKeyLengths: r, nByteLength: i, wrapPrivateKey: n, n: s } = t;
          if (r && 'bigint' != typeof e) {
            if ((Pi(e) && (e = Ai(e)), 'string' != typeof e || !r.includes(e.length)))
              throw new Error('invalid private key');
            e = e.padStart(2 * i, '0');
          }
          let o;
          try {
            o = 'bigint' == typeof e ? e : Bi(Hi('private key', e, i));
          } catch {
            throw new Error(
              'invalid private key, expected hex or ' + i + ' bytes, got ' + typeof e
            );
          }
          return n && (o = un(o, s)), Wi('private key', o, Kn, s), o;
        }
        function c(e) {
          if (!(e instanceof u)) throw new Error('ProjectivePoint expected');
        }
        const h = tn((e, t) => {
            const { px: i, py: n, pz: s } = e;
            if (r.eql(s, r.ONE)) return { x: i, y: n };
            const o = e.is0();
            null == t && (t = o ? r.ONE : r.inv(s));
            const a = r.mul(i, t),
              c = r.mul(n, t),
              h = r.mul(s, t);
            if (o) return { x: r.ZERO, y: r.ZERO };
            if (!r.eql(h, r.ONE)) throw new Error('invZ was invalid');
            return { x: a, y: c };
          }),
          l = tn((e) => {
            if (e.is0()) {
              if (t.allowInfinityPoint && !r.is0(e.py)) return;
              throw new Error('bad point: ZERO');
            }
            const { x: i, y: n } = e.toAffine();
            if (!r.isValid(i) || !r.isValid(n)) throw new Error('bad point: x or y not FE');
            const s = r.sqr(n),
              a = o(i);
            if (!r.eql(s, a)) throw new Error('bad point: equation left != right');
            if (!e.isTorsionFree()) throw new Error('bad point: not in prime-order subgroup');
            return !0;
          });
        class u {
          constructor(e, t, i) {
            if (((this.px = e), (this.py = t), (this.pz = i), null == e || !r.isValid(e)))
              throw new Error('x required');
            if (null == t || !r.isValid(t)) throw new Error('y required');
            if (null == i || !r.isValid(i)) throw new Error('z required');
            Object.freeze(this);
          }
          static fromAffine(e) {
            const { x: t, y: i } = e || {};
            if (!e || !r.isValid(t) || !r.isValid(i)) throw new Error('invalid affine point');
            if (e instanceof u) throw new Error('projective point not allowed');
            const n = (e) => r.eql(e, r.ZERO);
            return n(t) && n(i) ? u.ZERO : new u(t, i, r.ONE);
          }
          get x() {
            return this.toAffine().x;
          }
          get y() {
            return this.toAffine().y;
          }
          static normalizeZ(e) {
            const t = r.invertBatch(e.map((e) => e.pz));
            return e.map((e, r) => e.toAffine(t[r])).map(u.fromAffine);
          }
          static fromHex(e) {
            const t = u.fromAffine(s(Hi('pointHex', e)));
            return t.assertValidity(), t;
          }
          static fromPrivateKey(e) {
            return u.BASE.multiply(a(e));
          }
          static msm(e, t) {
            return Tn(u, i, e, t);
          }
          _setWindowSize(e) {
            p.setWindowSize(this, e);
          }
          assertValidity() {
            l(this);
          }
          hasEvenY() {
            const { y: e } = this.toAffine();
            if (r.isOdd) return !r.isOdd(e);
            throw new Error("Field doesn't support isOdd");
          }
          equals(e) {
            c(e);
            const { px: t, py: i, pz: n } = this,
              { px: s, py: o, pz: a } = e,
              h = r.eql(r.mul(t, a), r.mul(s, n)),
              l = r.eql(r.mul(i, a), r.mul(o, n));
            return h && l;
          }
          negate() {
            return new u(this.px, r.neg(this.py), this.pz);
          }
          double() {
            const { a: e, b: i } = t,
              n = r.mul(i, Fn),
              { px: s, py: o, pz: a } = this;
            let c = r.ZERO,
              h = r.ZERO,
              l = r.ZERO,
              d = r.mul(s, s),
              p = r.mul(o, o),
              f = r.mul(a, a),
              g = r.mul(s, o);
            return (
              (g = r.add(g, g)),
              (l = r.mul(s, a)),
              (l = r.add(l, l)),
              (c = r.mul(e, l)),
              (h = r.mul(n, f)),
              (h = r.add(c, h)),
              (c = r.sub(p, h)),
              (h = r.add(p, h)),
              (h = r.mul(c, h)),
              (c = r.mul(g, c)),
              (l = r.mul(n, l)),
              (f = r.mul(e, f)),
              (g = r.sub(d, f)),
              (g = r.mul(e, g)),
              (g = r.add(g, l)),
              (l = r.add(d, d)),
              (d = r.add(l, d)),
              (d = r.add(d, f)),
              (d = r.mul(d, g)),
              (h = r.add(h, d)),
              (f = r.mul(o, a)),
              (f = r.add(f, f)),
              (d = r.mul(f, g)),
              (c = r.sub(c, d)),
              (l = r.mul(f, p)),
              (l = r.add(l, l)),
              (l = r.add(l, l)),
              new u(c, h, l)
            );
          }
          add(e) {
            c(e);
            const { px: i, py: n, pz: s } = this,
              { px: o, py: a, pz: h } = e;
            let l = r.ZERO,
              d = r.ZERO,
              p = r.ZERO;
            const f = t.a,
              g = r.mul(t.b, Fn);
            let y = r.mul(i, o),
              m = r.mul(n, a),
              w = r.mul(s, h),
              b = r.add(i, n),
              v = r.add(o, a);
            (b = r.mul(b, v)), (v = r.add(y, m)), (b = r.sub(b, v)), (v = r.add(i, s));
            let E = r.add(o, h);
            return (
              (v = r.mul(v, E)),
              (E = r.add(y, w)),
              (v = r.sub(v, E)),
              (E = r.add(n, s)),
              (l = r.add(a, h)),
              (E = r.mul(E, l)),
              (l = r.add(m, w)),
              (E = r.sub(E, l)),
              (p = r.mul(f, v)),
              (l = r.mul(g, w)),
              (p = r.add(l, p)),
              (l = r.sub(m, p)),
              (p = r.add(m, p)),
              (d = r.mul(l, p)),
              (m = r.add(y, y)),
              (m = r.add(m, y)),
              (w = r.mul(f, w)),
              (v = r.mul(g, v)),
              (m = r.add(m, w)),
              (w = r.sub(y, w)),
              (w = r.mul(f, w)),
              (v = r.add(v, w)),
              (y = r.mul(m, v)),
              (d = r.add(d, y)),
              (y = r.mul(E, v)),
              (l = r.mul(b, l)),
              (l = r.sub(l, y)),
              (y = r.mul(b, m)),
              (p = r.mul(E, p)),
              (p = r.add(p, y)),
              new u(l, d, p)
            );
          }
          subtract(e) {
            return this.add(e.negate());
          }
          is0() {
            return this.equals(u.ZERO);
          }
          wNAF(e) {
            return p.wNAFCached(this, e, u.normalizeZ);
          }
          multiplyUnsafe(e) {
            const { endo: i, n: n } = t;
            Wi('scalar', e, Vn, n);
            const s = u.ZERO;
            if (e === Vn) return s;
            if (this.is0() || e === Kn) return this;
            if (!i || p.hasPrecomputes(this)) return p.wNAFCachedUnsafe(this, e, u.normalizeZ);
            let { k1neg: o, k1: a, k2neg: c, k2: h } = i.splitScalar(e),
              l = s,
              d = s,
              f = this;
            for (; a > Vn || h > Vn; )
              a & Kn && (l = l.add(f)),
                h & Kn && (d = d.add(f)),
                (f = f.double()),
                (a >>= Kn),
                (h >>= Kn);
            return (
              o && (l = l.negate()),
              c && (d = d.negate()),
              (d = new u(r.mul(d.px, i.beta), d.py, d.pz)),
              l.add(d)
            );
          }
          multiply(e) {
            const { endo: i, n: n } = t;
            let s, o;
            if ((Wi('scalar', e, Kn, n), i)) {
              const { k1neg: t, k1: n, k2neg: a, k2: c } = i.splitScalar(e);
              let { p: h, f: l } = this.wNAF(n),
                { p: d, f: f } = this.wNAF(c);
              (h = p.constTimeNegate(t, h)),
                (d = p.constTimeNegate(a, d)),
                (d = new u(r.mul(d.px, i.beta), d.py, d.pz)),
                (s = h.add(d)),
                (o = l.add(f));
            } else {
              const { p: t, f: r } = this.wNAF(e);
              (s = t), (o = r);
            }
            return u.normalizeZ([s, o])[0];
          }
          multiplyAndAddUnsafe(e, t, r) {
            const i = u.BASE,
              n = (e, t) =>
                t !== Vn && t !== Kn && e.equals(i) ? e.multiply(t) : e.multiplyUnsafe(t),
              s = n(this, t).add(n(e, r));
            return s.is0() ? void 0 : s;
          }
          toAffine(e) {
            return h(this, e);
          }
          isTorsionFree() {
            const { h: e, isTorsionFree: r } = t;
            if (e === Kn) return !0;
            if (r) return r(u, this);
            throw new Error('isTorsionFree() has not been declared for the elliptic curve');
          }
          clearCofactor() {
            const { h: e, clearCofactor: r } = t;
            return e === Kn ? this : r ? r(u, this) : this.multiplyUnsafe(t.h);
          }
          toRawBytes(e = !0) {
            return _i('isCompressed', e), this.assertValidity(), n(u, this, e);
          }
          toHex(e = !0) {
            return _i('isCompressed', e), Ai(this.toRawBytes(e));
          }
        }
        (u.BASE = new u(t.Gx, t.Gy, r.ONE)), (u.ZERO = new u(r.ZERO, r.ONE, r.ZERO));
        const d = t.nBitLength,
          p = (function (e, t) {
            return {
              constTimeNegate: Sn,
              hasPrecomputes: (e) => 1 !== An(e),
              unsafeLadder(t, r, i = e.ZERO) {
                let n = t;
                for (; r > En; ) r & In && (i = i.add(n)), (n = n.double()), (r >>= In);
                return i;
              },
              precomputeWindow(e, r) {
                const { windows: i, windowSize: n } = On(r, t),
                  s = [];
                let o = e,
                  a = o;
                for (let t = 0; t < i; t++) {
                  (a = o), s.push(a);
                  for (let e = 1; e < n; e++) (a = a.add(o)), s.push(a);
                  o = a.double();
                }
                return s;
              },
              wNAF(r, i, n) {
                const { windows: s, windowSize: o } = On(r, t);
                let a = e.ZERO,
                  c = e.BASE;
                const h = BigInt(2 ** r - 1),
                  l = 2 ** r,
                  u = BigInt(r);
                for (let e = 0; e < s; e++) {
                  const t = e * o;
                  let r = Number(n & h);
                  (n >>= u), r > o && ((r -= l), (n += In));
                  const s = t,
                    d = t + Math.abs(r) - 1,
                    p = e % 2 !== 0,
                    f = r < 0;
                  0 === r ? (c = c.add(Sn(p, i[s]))) : (a = a.add(Sn(f, i[d])));
                }
                return { p: a, f: c };
              },
              wNAFUnsafe(r, i, n, s = e.ZERO) {
                const { windows: o, windowSize: a } = On(r, t),
                  c = BigInt(2 ** r - 1),
                  h = 2 ** r,
                  l = BigInt(r);
                for (let e = 0; e < o; e++) {
                  const t = e * a;
                  if (n === En) break;
                  let r = Number(n & c);
                  if (((n >>= l), r > a && ((r -= h), (n += In)), 0 === r)) continue;
                  let o = i[t + Math.abs(r) - 1];
                  r < 0 && (o = o.negate()), (s = s.add(o));
                }
                return s;
              },
              getPrecomputes(e, t, r) {
                let i = _n.get(t);
                return i || ((i = this.precomputeWindow(t, e)), 1 !== e && _n.set(t, r(i))), i;
              },
              wNAFCached(e, t, r) {
                const i = An(e);
                return this.wNAF(i, this.getPrecomputes(i, e, r), t);
              },
              wNAFCachedUnsafe(e, t, r, i) {
                const n = An(e);
                return 1 === n
                  ? this.unsafeLadder(e, t, i)
                  : this.wNAFUnsafe(n, this.getPrecomputes(n, e, r), t, i);
              },
              setWindowSize(e, r) {
                Pn(r, t), xn.set(e, r), _n.delete(e);
              },
            };
          })(u, t.endo ? Math.ceil(d / 2) : d);
        return {
          CURVE: t,
          ProjectivePoint: u,
          normPrivateKeyToScalar: a,
          weierstrassEquation: o,
          isWithinCurveOrder: function (e) {
            return Fi(e, Kn, t.n);
          },
        };
      }
      function Gn(e) {
        const t = (function (e) {
            const t = Nn(e);
            return (
              en(
                t,
                { hash: 'hash', hmac: 'function', randomBytes: 'function' },
                { bits2int: 'function', bits2int_modN: 'function', lowS: 'boolean' }
              ),
              Object.freeze({ lowS: !0, ...t })
            );
          })(e),
          { Fp: r, n: i } = t,
          n = r.BYTES + 1,
          s = 2 * r.BYTES + 1;
        function o(e) {
          return un(e, i);
        }
        function a(e) {
          return fn(e, i);
        }
        const {
            ProjectivePoint: c,
            normPrivateKeyToScalar: h,
            weierstrassEquation: l,
            isWithinCurveOrder: u,
          } = Wn({
            ...t,
            toBytes(e, t, i) {
              const n = t.toAffine(),
                s = r.toBytes(n.x),
                o = Vi;
              return (
                _i('isCompressed', i),
                i
                  ? o(Uint8Array.from([t.hasEvenY() ? 2 : 3]), s)
                  : o(Uint8Array.from([4]), s, r.toBytes(n.y))
              );
            },
            fromBytes(e) {
              const t = e.length,
                i = e[0],
                o = e.subarray(1);
              if (t !== n || (2 !== i && 3 !== i)) {
                if (t === s && 4 === i) {
                  return {
                    x: r.fromBytes(o.subarray(0, r.BYTES)),
                    y: r.fromBytes(o.subarray(r.BYTES, 2 * r.BYTES)),
                  };
                }
                throw new Error(
                  'invalid Point, expected length of ' + n + ', or uncompressed ' + s + ', got ' + t
                );
              }
              {
                const e = Bi(o);
                if (!Fi(e, Kn, r.ORDER)) throw new Error('Point is not on curve');
                const t = l(e);
                let n;
                try {
                  n = r.sqrt(t);
                } catch (a) {
                  const e = a instanceof Error ? ': ' + a.message : '';
                  throw new Error('Point is not on curve' + e);
                }
                return (1 === (1 & i)) !== ((n & Kn) === Kn) && (n = r.neg(n)), { x: e, y: n };
              }
            },
          }),
          d = (e) => Ai(Mi(e, t.nByteLength));
        function p(e) {
          return e > i >> Kn;
        }
        const f = (e, t, r) => Bi(e.slice(t, r));
        class g {
          constructor(e, t, r) {
            (this.r = e), (this.s = t), (this.recovery = r), this.assertValidity();
          }
          static fromCompact(e) {
            const r = t.nByteLength;
            return (e = Hi('compactSignature', e, 2 * r)), new g(f(e, 0, r), f(e, r, 2 * r));
          }
          static fromDER(e) {
            const { r: t, s: r } = Hn.toSig(Hi('DER', e));
            return new g(t, r);
          }
          assertValidity() {
            Wi('r', this.r, Kn, i), Wi('s', this.s, Kn, i);
          }
          addRecoveryBit(e) {
            return new g(this.r, this.s, e);
          }
          recoverPublicKey(e) {
            const { r: i, s: n, recovery: s } = this,
              h = b(Hi('msgHash', e));
            if (null == s || ![0, 1, 2, 3].includes(s)) throw new Error('recovery id invalid');
            const l = 2 === s || 3 === s ? i + t.n : i;
            if (l >= r.ORDER) throw new Error('recovery id 2 or 3 invalid');
            const u = 0 === (1 & s) ? '02' : '03',
              p = c.fromHex(u + d(l)),
              f = a(l),
              g = o(-h * f),
              y = o(n * f),
              m = c.BASE.multiplyAndAddUnsafe(p, g, y);
            if (!m) throw new Error('point at infinify');
            return m.assertValidity(), m;
          }
          hasHighS() {
            return p(this.s);
          }
          normalizeS() {
            return this.hasHighS() ? new g(this.r, o(-this.s), this.recovery) : this;
          }
          toDERRawBytes() {
            return Ui(this.toDERHex());
          }
          toDERHex() {
            return Hn.hexFromSig({ r: this.r, s: this.s });
          }
          toCompactRawBytes() {
            return Ui(this.toCompactHex());
          }
          toCompactHex() {
            return d(this.r) + d(this.s);
          }
        }
        const y = {
          isValidPrivateKey(e) {
            try {
              return h(e), !0;
            } catch {
              return !1;
            }
          },
          normPrivateKeyToScalar: h,
          randomPrivateKey: () => {
            const e = vn(t.n);
            return (function (e, t, r = !1) {
              const i = e.length,
                n = bn(t),
                s = vn(t);
              if (i < 16 || i < s || i > 1024)
                throw new Error('expected ' + s + '-1024 bytes of input, got ' + i);
              const o = un(r ? $i(e) : Bi(e), t - sn) + sn;
              return r ? zi(o, n) : Mi(o, n);
            })(t.randomBytes(e), t.n);
          },
          precompute: (e = 8, t = c.BASE) => (t._setWindowSize(e), t.multiply(BigInt(3)), t),
        };
        function m(e) {
          const t = Pi(e),
            r = 'string' == typeof e,
            i = (t || r) && e.length;
          return t ? i === n || i === s : r ? i === 2 * n || i === 2 * s : e instanceof c;
        }
        const w =
            t.bits2int ||
            function (e) {
              if (e.length > 8192) throw new Error('input is too large');
              const r = Bi(e),
                i = 8 * e.length - t.nBitLength;
              return i > 0 ? r >> BigInt(i) : r;
            },
          b =
            t.bits2int_modN ||
            function (e) {
              return o(w(e));
            },
          v = Yi(t.nBitLength);
        function E(e) {
          return Wi('num < 2^' + t.nBitLength, e, Vn, v), Mi(e, t.nByteLength);
        }
        function I(e, i, n = S) {
          if (['recovered', 'canonical'].some((e) => e in n))
            throw new Error('sign() legacy options not supported');
          const { hash: s, randomBytes: l } = t;
          let { lowS: d, prehash: f, extraEntropy: y } = n;
          null == d && (d = !0),
            (e = Hi('msgHash', e)),
            Bn(n),
            f && (e = Hi('prehashed msgHash', s(e)));
          const m = b(e),
            v = h(i),
            I = [E(v), E(m)];
          if (null != y && !1 !== y) {
            const e = !0 === y ? l(r.BYTES) : y;
            I.push(Hi('extraEntropy', e));
          }
          const P = Vi(...I),
            O = m;
          return {
            seed: P,
            k2sig: function (e) {
              const t = w(e);
              if (!u(t)) return;
              const r = a(t),
                i = c.BASE.multiply(t).toAffine(),
                n = o(i.x);
              if (n === Vn) return;
              const s = o(r * o(O + n * v));
              if (s === Vn) return;
              let h = (i.x === n ? 0 : 2) | Number(i.y & Kn),
                l = s;
              return (
                d &&
                  p(s) &&
                  ((l = (function (e) {
                    return p(e) ? o(-e) : e;
                  })(s)),
                  (h ^= 1)),
                new g(n, l, h)
              );
            },
          };
        }
        const S = { lowS: t.lowS, prehash: !1 },
          P = { lowS: t.lowS, prehash: !1 };
        return (
          c.BASE._setWindowSize(8),
          {
            CURVE: t,
            getPublicKey: function (e, t = !0) {
              return c.fromPrivateKey(e).toRawBytes(t);
            },
            getSharedSecret: function (e, t, r = !0) {
              if (m(e)) throw new Error('first arg must be private key');
              if (!m(t)) throw new Error('second arg must be public key');
              return c.fromHex(t).multiply(h(e)).toRawBytes(r);
            },
            sign: function (e, r, i = S) {
              const { seed: n, k2sig: s } = I(e, r, i),
                o = t;
              return Qi(o.hash.outputLen, o.nByteLength, o.hmac)(n, s);
            },
            verify: function (e, r, i, n = P) {
              const s = e;
              (r = Hi('msgHash', r)), (i = Hi('publicKey', i));
              const { lowS: h, prehash: l, format: u } = n;
              if ((Bn(n), 'strict' in n)) throw new Error('options.strict was renamed to lowS');
              if (void 0 !== u && 'compact' !== u && 'der' !== u)
                throw new Error('format must be compact or der');
              const d = 'string' == typeof s || Pi(s),
                p =
                  !d &&
                  !u &&
                  'object' == typeof s &&
                  null !== s &&
                  'bigint' == typeof s.r &&
                  'bigint' == typeof s.s;
              if (!d && !p)
                throw new Error(
                  'invalid signature, expected Uint8Array, hex string or Signature instance'
                );
              let f, y;
              try {
                if ((p && (f = new g(s.r, s.s)), d)) {
                  try {
                    'compact' !== u && (f = g.fromDER(s));
                  } catch (_) {
                    if (!(_ instanceof Hn.Err)) throw _;
                  }
                  !f && 'der' !== u && (f = g.fromCompact(s));
                }
                y = c.fromHex(i);
              } catch {
                return !1;
              }
              if (!f || (h && f.hasHighS())) return !1;
              l && (r = t.hash(r));
              const { r: m, s: w } = f,
                v = b(r),
                E = a(w),
                I = o(v * E),
                S = o(m * E),
                O = c.BASE.multiplyAndAddUnsafe(y, I, S)?.toAffine();
              return !!O && o(O.x) === m;
            },
            ProjectivePoint: c,
            Signature: g,
            utils: y,
          }
        );
      }
      function Yn(e) {
        return {
          hash: e,
          hmac: (t, ...r) =>
            hi(
              e,
              t,
              (function (...e) {
                let t = 0;
                for (let i = 0; i < e.length; i++) {
                  const r = e[i];
                  Pt(r), (t += r.length);
                }
                const r = new Uint8Array(t);
                for (let i = 0, n = 0; i < e.length; i++) {
                  const t = e[i];
                  r.set(t, n), (n += t.length);
                }
                return r;
              })(...r)
            ),
          randomBytes: $t,
        };
      }
      BigInt(4);
      const Jn = wn(BigInt('0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff')),
        Zn = (function (e, t) {
          const r = (t) => Gn({ ...e, ...Yn(t) });
          return { ...r(t), create: r };
        })(
          {
            a: Jn.create(BigInt('-3')),
            b: BigInt('0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b'),
            Fp: Jn,
            n: BigInt('0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551'),
            Gx: BigInt('0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296'),
            Gy: BigInt('0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5'),
            h: BigInt(1),
            lowS: !1,
          },
          vi
        ),
        Qn = 'base10',
        Xn = 'base16',
        es = 'base64pad',
        ts = 'base64url',
        rs = 'utf8',
        is = 1,
        ns = 2;
      function ss() {
        const e = Un.utils.randomPrivateKey(),
          t = Un.getPublicKey(e);
        return { privateKey: Oe(e, Xn), publicKey: Oe(t, Xn) };
      }
      function os() {
        return Oe($t(32), Xn);
      }
      function as(e, t) {
        const r = Un.getSharedSecret(Pe(e, Xn), Pe(t, Xn));
        return Oe(di(vi, r, void 0, void 0, 32), Xn);
      }
      function cs(e) {
        return Oe(vi(Pe(e, Xn)), Xn);
      }
      function hs(e) {
        return Oe(vi(Pe(e, rs)), Xn);
      }
      function ls(e) {
        return Pe(`${e}`, Qn);
      }
      function us(e) {
        return Number(Oe(e, Qn));
      }
      function ds(e) {
        return e.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
      }
      function ps(e) {
        const t = e.replace(/-/g, '+').replace(/_/g, '/'),
          r = (4 - (t.length % 4)) % 4;
        return t + '='.repeat(r);
      }
      function fs(e) {
        const t = ls(typeof e.type < 'u' ? e.type : 0);
        if (us(t) === is && typeof e.senderPublicKey > 'u')
          throw new Error('Missing sender public key for type 1 envelope');
        const r = typeof e.senderPublicKey < 'u' ? Pe(e.senderPublicKey, Xn) : void 0,
          i = typeof e.iv < 'u' ? Pe(e.iv, Xn) : $t(12),
          n = Pe(e.symKey, Xn),
          s = ws({
            type: t,
            sealed: oi(n, i).encrypt(Pe(e.message, rs)),
            iv: i,
            senderPublicKey: r,
          });
        return e.encoding === ts ? ds(s) : s;
      }
      function gs(e) {
        const t = Pe(e.symKey, Xn),
          { sealed: r, iv: i } = bs({ encoded: e.encoded, encoding: e.encoding }),
          n = oi(t, i).decrypt(r);
        if (null === n) throw new Error('Failed to decrypt');
        return Oe(n, rs);
      }
      function ys(e, t) {
        const r = ls(ns),
          i = $t(12),
          n = ws({ type: r, sealed: Pe(e, rs), iv: i });
        return t === ts ? ds(n) : n;
      }
      function ms(e, t) {
        const { sealed: r } = bs({ encoded: e, encoding: t });
        return Oe(r, rs);
      }
      function ws(e) {
        if (us(e.type) === ns) return Oe(we([e.type, e.sealed]), es);
        if (us(e.type) === is) {
          if (typeof e.senderPublicKey > 'u')
            throw new Error('Missing sender public key for type 1 envelope');
          return Oe(we([e.type, e.senderPublicKey, e.iv, e.sealed]), es);
        }
        return Oe(we([e.type, e.iv, e.sealed]), es);
      }
      function bs(e) {
        const t = Pe((e.encoding || es) === ts ? ps(e.encoded) : e.encoded, es),
          r = t.slice(0, 1);
        if (us(r) === is) {
          const e = 33,
            i = e + 12,
            n = t.slice(1, e),
            s = t.slice(e, i);
          return { type: r, sealed: t.slice(i), iv: s, senderPublicKey: n };
        }
        if (us(r) === ns) {
          return { type: r, sealed: t.slice(1), iv: $t(12) };
        }
        const i = t.slice(1, 13);
        return { type: r, sealed: t.slice(13), iv: i };
      }
      function vs(e, t) {
        const r = bs({ encoded: e, encoding: t?.encoding });
        return Es({
          type: us(r.type),
          senderPublicKey: typeof r.senderPublicKey < 'u' ? Oe(r.senderPublicKey, Xn) : void 0,
          receiverPublicKey: t?.receiverPublicKey,
        });
      }
      function Es(e) {
        const t = e?.type || 0;
        if (t === is) {
          if (typeof e?.senderPublicKey > 'u') throw new Error('missing sender public key');
          if (typeof e?.receiverPublicKey > 'u') throw new Error('missing receiver public key');
        }
        return {
          type: t,
          senderPublicKey: e?.senderPublicKey,
          receiverPublicKey: e?.receiverPublicKey,
        };
      }
      function Is(e) {
        return (
          e.type === is &&
          'string' == typeof e.senderPublicKey &&
          'string' == typeof e.receiverPublicKey
        );
      }
      function Ss(e) {
        return e.type === ns;
      }
      function Ps(e, t) {
        const [r, i, n] = e.split('.'),
          s = Ae.from(ps(n), 'base64');
        if (64 !== s.length) throw new Error('Invalid signature length');
        const o = s.slice(0, 32),
          a = s.slice(32, 64),
          c = vi(`${r}.${i}`),
          h = (function (e) {
            const t = Ae.from(e.x, 'base64'),
              r = Ae.from(e.y, 'base64');
            return we([new Uint8Array([4]), t, r]);
          })(t);
        if (!Zn.verify(we([o, a]), c, h)) throw new Error('Invalid signature');
        return (0, ye.xp)(e).payload;
      }
      function Os(e) {
        return e?.relay || { protocol: 'irn' };
      }
      function _s(e) {
        const t = _e[e];
        if (typeof t > 'u') throw new Error(`Relay Protocol not supported: ${e}`);
        return t;
      }
      function xs(e, t = '-') {
        const r = {},
          i = 'relay' + t;
        return (
          Object.keys(e).forEach((t) => {
            if (t.startsWith(i)) {
              const n = t.replace(i, ''),
                s = e[t];
              r[n] = s;
            }
          }),
          r
        );
      }
      function As(e) {
        if (!e.includes('wc:')) {
          const t = Et(e);
          null != t && t.includes('wc:') && (e = t);
        }
        const t = (e = (e = e.includes('wc://') ? e.replace('wc://', '') : e).includes('wc:')
            ? e.replace('wc:', '')
            : e).indexOf(':'),
          r = -1 !== e.indexOf('?') ? e.indexOf('?') : void 0,
          i = e.substring(0, t),
          n = e.substring(t + 1, r).split('@'),
          s = typeof r < 'u' ? e.substring(r) : '',
          o = new URLSearchParams(s),
          a = {};
        o.forEach((e, t) => {
          a[t] = e;
        });
        const c = 'string' == typeof a.methods ? a.methods.split(',') : void 0;
        return {
          protocol: i,
          topic: Ts(n[0]),
          version: parseInt(n[1], 10),
          symKey: a.symKey,
          relay: xs(a),
          methods: c,
          expiryTimestamp: a.expiryTimestamp ? parseInt(a.expiryTimestamp, 10) : void 0,
        };
      }
      function Ts(e) {
        return e.startsWith('//') ? e.substring(2) : e;
      }
      function Ns(e) {
        const t = new URLSearchParams(),
          r = (function (e, t = '-') {
            const r = {};
            return (
              Object.keys(e).forEach((i) => {
                const n = i,
                  s = 'relay' + t + n;
                e[n] && (r[s] = e[n]);
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
        const i = t.toString();
        return `${e.protocol}:${e.topic}@${e.version}?${i}`;
      }
      function Cs(e, t, r) {
        return `${e}?wc_ev=${r}&topic=${t}`;
      }
      Object.defineProperty,
        Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      function Rs(e) {
        const t = [];
        return (
          e.forEach((e) => {
            const [r, i] = e.split(':');
            t.push(`${r}:${i}`);
          }),
          t
        );
      }
      function ks(e) {
        return e.includes(':');
      }
      function js(e) {
        return ks(e) ? e.split(':')[0] : e;
      }
      function Ds(e, t) {
        const r = (function (e) {
          const t = {};
          return (
            e?.forEach((e) => {
              var r;
              const [i, n] = e.split(':');
              t[i] || (t[i] = { accounts: [], chains: [], events: [], methods: [] }),
                t[i].accounts.push(e),
                null == (r = t[i].chains) || r.push(`${i}:${n}`);
            }),
            t
          );
        })((t = t.map((e) => e.replace('did:pkh:', ''))));
        for (const [i, n] of Object.entries(r))
          n.methods ? (n.methods = gt(n.methods, e)) : (n.methods = e),
            (n.events = ['chainChanged', 'accountsChanged']);
        return r;
      }
      const Ls = {
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
        qs = {
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
      function Us(e, t) {
        const { message: r, code: i } = qs[e];
        return { message: t ? `${r} ${t}` : r, code: i };
      }
      function Bs(e, t) {
        const { message: r, code: i } = Ls[e];
        return { message: t ? `${r} ${t}` : r, code: i };
      }
      function $s(e, t) {
        return !!Array.isArray(e) && (!(typeof t < 'u' && e.length) || e.every(t));
      }
      function Ms(e) {
        return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length;
      }
      function zs(e) {
        return typeof e > 'u';
      }
      function Hs(e, t) {
        return !(!t || !zs(e)) || ('string' == typeof e && !!e.trim().length);
      }
      function Vs(e, t) {
        return !(!t || !zs(e)) || ('number' == typeof e && !isNaN(e));
      }
      function Ks(e, t) {
        const { requiredNamespaces: r } = t,
          i = Object.keys(e.namespaces),
          n = Object.keys(r);
        let s = !0;
        return (
          !!it(n, i) &&
          (i.forEach((t) => {
            const { accounts: i, methods: n, events: o } = e.namespaces[t],
              a = Rs(i),
              c = r[t];
            (!it(Re(t, c), a) || !it(c.methods, n) || !it(c.events, o)) && (s = !1);
          }),
          s)
        );
      }
      function Fs(e) {
        return !(!Hs(e, !1) || !e.includes(':')) && 2 === e.split(':').length;
      }
      function Ws(e) {
        function t(e) {
          try {
            return typeof new URL(e) < 'u';
          } catch {
            return !1;
          }
        }
        try {
          if (Hs(e, !1)) {
            if (t(e)) return !0;
            return t(Et(e));
          }
        } catch {}
        return !1;
      }
      function Gs(e) {
        var t;
        return null == (t = e?.proposer) ? void 0 : t.publicKey;
      }
      function Ys(e) {
        return e?.topic;
      }
      function Js(e, t) {
        let r = null;
        return (
          Hs(e?.publicKey, !1) ||
            (r = Us('MISSING_OR_INVALID', `${t} controller public key should be a string`)),
          r
        );
      }
      function Zs(e) {
        let t = !0;
        return $s(e) ? e.length && (t = e.every((e) => Hs(e, !1))) : (t = !1), t;
      }
      function Qs(e, t, r) {
        let i = null;
        return (
          Object.entries(e).forEach(([e, n]) => {
            if (i) return;
            const s = (function (e, t, r) {
              let i = null;
              return (
                $s(t) && t.length
                  ? t.forEach((e) => {
                      i ||
                        Fs(e) ||
                        (i = Bs(
                          'UNSUPPORTED_CHAINS',
                          `${r}, chain ${e} should be a string and conform to "namespace:chainId" format`
                        ));
                    })
                  : Fs(e) ||
                    (i = Bs(
                      'UNSUPPORTED_CHAINS',
                      `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`
                    )),
                i
              );
            })(e, Re(e, n), `${t} ${r}`);
            s && (i = s);
          }),
          i
        );
      }
      function Xs(e, t) {
        let r = null;
        return (
          $s(e)
            ? e.forEach((e) => {
                r ||
                  (function (e) {
                    if (Hs(e, !1) && e.includes(':')) {
                      const t = e.split(':');
                      if (3 === t.length) {
                        const e = t[0] + ':' + t[1];
                        return !!t[2] && Fs(e);
                      }
                    }
                    return !1;
                  })(e) ||
                  (r = Bs(
                    'UNSUPPORTED_ACCOUNTS',
                    `${t}, account ${e} should be a string and conform to "namespace:chainId:address" format`
                  ));
              })
            : (r = Bs(
                'UNSUPPORTED_ACCOUNTS',
                `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`
              )),
          r
        );
      }
      function eo(e, t) {
        let r = null;
        return (
          Object.values(e).forEach((e) => {
            if (r) return;
            const i = (function (e, t) {
              let r = null;
              return (
                Zs(e?.methods)
                  ? Zs(e?.events) ||
                    (r = Bs(
                      'UNSUPPORTED_EVENTS',
                      `${t}, events should be an array of strings or empty array for no events`
                    ))
                  : (r = Bs(
                      'UNSUPPORTED_METHODS',
                      `${t}, methods should be an array of strings or empty array for no methods`
                    )),
                r
              );
            })(e, `${t}, namespace`);
            i && (r = i);
          }),
          r
        );
      }
      function to(e, t, r) {
        let i = null;
        if (e && Ms(e)) {
          const n = eo(e, t);
          n && (i = n);
          const s = Qs(e, t, r);
          s && (i = s);
        } else i = Us('MISSING_OR_INVALID', `${t}, ${r} should be an object with data`);
        return i;
      }
      function ro(e, t) {
        let r = null;
        if (e && Ms(e)) {
          const i = eo(e, t);
          i && (r = i);
          const n = (function (e, t) {
            let r = null;
            return (
              Object.values(e).forEach((e) => {
                if (r) return;
                const i = Xs(e?.accounts, `${t} namespace`);
                i && (r = i);
              }),
              r
            );
          })(e, t);
          n && (r = n);
        } else r = Us('MISSING_OR_INVALID', `${t}, namespaces should be an object with data`);
        return r;
      }
      function io(e) {
        return Hs(e.protocol, !0);
      }
      function no(e, t) {
        let r = !1;
        return (
          t && !e
            ? (r = !0)
            : e &&
              $s(e) &&
              e.length &&
              e.forEach((e) => {
                r = io(e);
              }),
          r
        );
      }
      function so(e) {
        return 'number' == typeof e;
      }
      function oo(e) {
        return typeof e < 'u' && null !== typeof e;
      }
      function ao(e) {
        return !(
          !e ||
          'object' != typeof e ||
          !e.code ||
          !Vs(e.code, !1) ||
          !e.message ||
          !Hs(e.message, !1)
        );
      }
      function co(e) {
        return !(zs(e) || !Hs(e.method, !1));
      }
      function ho(e) {
        return !(zs(e) || (zs(e.result) && zs(e.error)) || !Vs(e.id, !1) || !Hs(e.jsonrpc, !1));
      }
      function lo(e) {
        return !(zs(e) || !Hs(e.name, !1));
      }
      function uo(e, t) {
        return !(
          !Fs(t) ||
          !(function (e) {
            const t = [];
            return (
              Object.values(e).forEach((e) => {
                t.push(...Rs(e.accounts));
              }),
              t
            );
          })(e).includes(t)
        );
      }
      function po(e, t, r) {
        return (
          !!Hs(r, !1) &&
          (function (e, t) {
            const r = [];
            return (
              Object.values(e).forEach((e) => {
                Rs(e.accounts).includes(t) && r.push(...e.methods);
              }),
              r
            );
          })(e, t).includes(r)
        );
      }
      function fo(e, t, r) {
        return (
          !!Hs(r, !1) &&
          (function (e, t) {
            const r = [];
            return (
              Object.values(e).forEach((e) => {
                Rs(e.accounts).includes(t) && r.push(...e.events);
              }),
              r
            );
          })(e, t).includes(r)
        );
      }
      function go(e, t, r) {
        let i = null;
        const n = (function (e) {
            const t = {};
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
          s = (function (e) {
            const t = {};
            return (
              Object.keys(e).forEach((r) => {
                if (r.includes(':')) t[r] = e[r];
                else {
                  Rs(e[r].accounts)?.forEach((i) => {
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
          o = Object.keys(n),
          a = Object.keys(s),
          c = yo(Object.keys(e)),
          h = yo(Object.keys(t)),
          l = c.filter((e) => !h.includes(e));
        return (
          l.length &&
            (i = Us(
              'NON_CONFORMING_NAMESPACES',
              `${r} namespaces keys don't satisfy requiredNamespaces.\n      Required: ${l.toString()}\n      Received: ${Object.keys(t).toString()}`
            )),
          it(o, a) ||
            (i = Us(
              'NON_CONFORMING_NAMESPACES',
              `${r} namespaces chains don't satisfy required namespaces.\n      Required: ${o.toString()}\n      Approved: ${a.toString()}`
            )),
          Object.keys(t).forEach((e) => {
            if (!e.includes(':') || i) return;
            const n = Rs(t[e].accounts);
            n.includes(e) ||
              (i = Us(
                'NON_CONFORMING_NAMESPACES',
                `${r} namespaces accounts don't satisfy namespace accounts for ${e}\n        Required: ${e}\n        Approved: ${n.toString()}`
              ));
          }),
          o.forEach((e) => {
            i ||
              (it(n[e].methods, s[e].methods)
                ? it(n[e].events, s[e].events) ||
                  (i = Us(
                    'NON_CONFORMING_NAMESPACES',
                    `${r} namespaces events don't satisfy namespace events for ${e}`
                  ))
                : (i = Us(
                    'NON_CONFORMING_NAMESPACES',
                    `${r} namespaces methods don't satisfy namespace methods for ${e}`
                  )));
          }),
          i
        );
      }
      function yo(e) {
        return [...new Set(e.map((e) => (e.includes(':') ? e.split(':')[0] : e)))];
      }
      function mo(e, t) {
        return Vs(e, !1) && e <= t.max && e >= t.min;
      }
      function wo() {
        const e = Ze();
        return new Promise((t) => {
          switch (e) {
            case He:
              t(Je() && navigator?.onLine);
              break;
            case Me:
              t(
                (async function () {
                  if (We() && typeof r.g < 'u' && null != r.g && r.g.NetInfo) {
                    return (await (null == r.g ? void 0 : r.g.NetInfo.fetch()))?.isConnected;
                  }
                  return !0;
                })()
              );
              break;
            default:
              t(!0);
          }
        });
      }
      function bo(e) {
        switch (Ze()) {
          case He:
            !(function (e) {
              !We() &&
                Je() &&
                (window.addEventListener('online', () => e(!0)),
                window.addEventListener('offline', () => e(!1)));
            })(e);
            break;
          case Me:
            !(function (e) {
              We() &&
                typeof r.g < 'u' &&
                null != r.g &&
                r.g.NetInfo &&
                r.g?.NetInfo.addEventListener((t) => e(t?.isConnected));
            })(e);
        }
      }
      const vo = {};
      class Eo {
        static get(e) {
          return vo[e];
        }
        static set(e, t) {
          vo[e] = t;
        }
        static delete(e) {
          delete vo[e];
        }
      }
    },
    62873: function (e, t) {
      function r(e) {
        let t;
        return (
          'undefined' !== typeof window && 'undefined' !== typeof window[e] && (t = window[e]), t
        );
      }
      function i(e) {
        const t = r(e);
        if (!t) throw new Error(`${e} is not defined in Window`);
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
    65755: function (e, t, r) {
      t.D = void 0;
      const i = r(62873);
      t.D = function () {
        let e, t;
        try {
          (e = i.getDocumentOrThrow()), (t = i.getLocationOrThrow());
        } catch (s) {
          return null;
        }
        function r(...t) {
          const r = e.getElementsByTagName('meta');
          for (let e = 0; e < r.length; e++) {
            const i = r[e],
              n = ['itemprop', 'property', 'name']
                .map((e) => i.getAttribute(e))
                .filter((e) => !!e && t.includes(e));
            if (n.length && n) {
              const e = i.getAttribute('content');
              if (e) return e;
            }
          }
          return '';
        }
        const n = (function () {
          let t = r('name', 'og:site_name', 'og:title', 'twitter:title');
          return t || (t = e.title), t;
        })();
        return {
          description: r('description', 'og:description', 'twitter:description', 'keywords'),
          url: t.origin,
          icons: (function () {
            const r = e.getElementsByTagName('link'),
              i = [];
            for (let e = 0; e < r.length; e++) {
              const n = r[e],
                s = n.getAttribute('rel');
              if (s && s.toLowerCase().indexOf('icon') > -1) {
                const e = n.getAttribute('href');
                if (e)
                  if (
                    -1 === e.toLowerCase().indexOf('https:') &&
                    -1 === e.toLowerCase().indexOf('http:') &&
                    0 !== e.indexOf('//')
                  ) {
                    let r = t.protocol + '//' + t.host;
                    if (0 === e.indexOf('/')) r += e;
                    else {
                      const i = t.pathname.split('/');
                      i.pop();
                      r += i.join('/') + '/' + e;
                    }
                    i.push(r);
                  } else if (0 === e.indexOf('//')) {
                    const r = t.protocol + e;
                    i.push(r);
                  } else i.push(e);
              }
            }
            return i;
          })(),
          name: n,
        };
      };
    },
    85346: function (e) {
      function t(e) {
        try {
          return JSON.stringify(e);
        } catch (t) {
          return '"[Circular]"';
        }
      }
      e.exports = function (e, r, i) {
        var n = (i && i.stringify) || t;
        if ('object' === typeof e && null !== e) {
          var s = r.length + 1;
          if (1 === s) return e;
          var o = new Array(s);
          o[0] = n(e);
          for (var a = 1; a < s; a++) o[a] = n(r[a]);
          return o.join(' ');
        }
        if ('string' !== typeof e) return e;
        var c = r.length;
        if (0 === c) return e;
        for (var h = '', l = 0, u = -1, d = (e && e.length) || 0, p = 0; p < d; ) {
          if (37 === e.charCodeAt(p) && p + 1 < d) {
            switch (((u = u > -1 ? u : 0), e.charCodeAt(p + 1))) {
              case 100:
              case 102:
                if (l >= c) break;
                if (null == r[l]) break;
                u < p && (h += e.slice(u, p)), (h += Number(r[l])), (u = p + 2), p++;
                break;
              case 105:
                if (l >= c) break;
                if (null == r[l]) break;
                u < p && (h += e.slice(u, p)), (h += Math.floor(Number(r[l]))), (u = p + 2), p++;
                break;
              case 79:
              case 111:
              case 106:
                if (l >= c) break;
                if (void 0 === r[l]) break;
                u < p && (h += e.slice(u, p));
                var f = typeof r[l];
                if ('string' === f) {
                  (h += "'" + r[l] + "'"), (u = p + 2), p++;
                  break;
                }
                if ('function' === f) {
                  (h += r[l].name || '<anonymous>'), (u = p + 2), p++;
                  break;
                }
                (h += n(r[l])), (u = p + 2), p++;
                break;
              case 115:
                if (l >= c) break;
                u < p && (h += e.slice(u, p)), (h += String(r[l])), (u = p + 2), p++;
                break;
              case 37:
                u < p && (h += e.slice(u, p)), (h += '%'), (u = p + 2), p++, l--;
            }
            ++l;
          }
          ++p;
        }
        if (-1 === u) return e;
        u < d && (h += e.slice(u));
        return h;
      };
    },
    36559: function (e, t, r) {
      const i = r(85346);
      e.exports = o;
      const n =
          (function () {
            function e(e) {
              return 'undefined' !== typeof e && e;
            }
            try {
              return (
                'undefined' !== typeof globalThis ||
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
          })().console || {},
        s = {
          mapHttpRequest: f,
          mapHttpResponse: f,
          wrapRequestSerializer: g,
          wrapResponseSerializer: g,
          wrapErrorSerializer: g,
          req: f,
          res: f,
          err: function (e) {
            const t = { type: e.constructor.name, msg: e.message, stack: e.stack };
            for (const r in e) void 0 === t[r] && (t[r] = e[r]);
            return t;
          },
        };
      function o(e) {
        (e = e || {}).browser = e.browser || {};
        const t = e.browser.transmit;
        if (t && 'function' !== typeof t.send)
          throw Error('pino: transmit option must have a send function');
        const r = e.browser.write || n;
        e.browser.write && (e.browser.asObject = !0);
        const i = e.serializers || {},
          s = (function (e, t) {
            if (Array.isArray(e))
              return e.filter(function (e) {
                return '!stdSerializers.err' !== e;
              });
            return !0 === e && Object.keys(t);
          })(e.browser.serialize, i);
        let c = e.browser.serialize;
        Array.isArray(e.browser.serialize) &&
          e.browser.serialize.indexOf('!stdSerializers.err') > -1 &&
          (c = !1);
        'function' === typeof r && (r.error = r.fatal = r.warn = r.info = r.debug = r.trace = r),
          !1 === e.enabled && (e.level = 'silent');
        const u = e.level || 'info',
          f = Object.create(r);
        f.log || (f.log = y),
          Object.defineProperty(f, 'levelVal', {
            get: function () {
              return 'silent' === this.level ? 1 / 0 : this.levels.values[this.level];
            },
          }),
          Object.defineProperty(f, 'level', {
            get: function () {
              return this._level;
            },
            set: function (e) {
              if ('silent' !== e && !this.levels.values[e]) throw Error('unknown level ' + e);
              (this._level = e),
                a(g, f, 'error', 'log'),
                a(g, f, 'fatal', 'error'),
                a(g, f, 'warn', 'error'),
                a(g, f, 'info', 'log'),
                a(g, f, 'debug', 'log'),
                a(g, f, 'trace', 'log');
            },
          });
        const g = {
          transmit: t,
          serialize: s,
          asObject: e.browser.asObject,
          levels: ['error', 'fatal', 'warn', 'info', 'debug', 'trace'],
          timestamp: p(e),
        };
        return (
          (f.levels = o.levels),
          (f.level = u),
          (f.setMaxListeners =
            f.getMaxListeners =
            f.emit =
            f.addListener =
            f.on =
            f.prependListener =
            f.once =
            f.prependOnceListener =
            f.removeListener =
            f.removeAllListeners =
            f.listeners =
            f.listenerCount =
            f.eventNames =
            f.write =
            f.flush =
              y),
          (f.serializers = i),
          (f._serialize = s),
          (f._stdErrSerialize = c),
          (f.child = function (r, n) {
            if (!r) throw new Error('missing bindings for child Pino');
            (n = n || {}), s && r.serializers && (n.serializers = r.serializers);
            const o = n.serializers;
            if (s && o) {
              var a = Object.assign({}, i, o),
                c = !0 === e.browser.serialize ? Object.keys(a) : s;
              delete r.serializers, h([r], c, a, this._stdErrSerialize);
            }
            function u(e) {
              (this._childLevel = 1 + (0 | e._childLevel)),
                (this.error = l(e, r, 'error')),
                (this.fatal = l(e, r, 'fatal')),
                (this.warn = l(e, r, 'warn')),
                (this.info = l(e, r, 'info')),
                (this.debug = l(e, r, 'debug')),
                (this.trace = l(e, r, 'trace')),
                a && ((this.serializers = a), (this._serialize = c)),
                t && (this._logEvent = d([].concat(e._logEvent.bindings, r)));
            }
            return (u.prototype = this), new u(this);
          }),
          t && (f._logEvent = d()),
          f
        );
      }
      function a(e, t, r, i) {
        const s = Object.getPrototypeOf(t);
        (t[r] = t.levelVal > t.levels.values[r] ? y : s[r] ? s[r] : n[r] || n[i] || y),
          (function (e, t, r) {
            if (!e.transmit && t[r] === y) return;
            t[r] =
              ((i = t[r]),
              function () {
                const s = e.timestamp(),
                  a = new Array(arguments.length),
                  l = Object.getPrototypeOf && Object.getPrototypeOf(this) === n ? n : this;
                for (var d = 0; d < a.length; d++) a[d] = arguments[d];
                if (
                  (e.serialize &&
                    !e.asObject &&
                    h(a, this._serialize, this.serializers, this._stdErrSerialize),
                  e.asObject ? i.call(l, c(this, r, a, s)) : i.apply(l, a),
                  e.transmit)
                ) {
                  const i = e.transmit.level || t.level,
                    n = o.levels.values[i],
                    c = o.levels.values[r];
                  if (c < n) return;
                  u(
                    this,
                    {
                      ts: s,
                      methodLevel: r,
                      methodValue: c,
                      transmitLevel: i,
                      transmitValue: o.levels.values[e.transmit.level || t.level],
                      send: e.transmit.send,
                      val: t.levelVal,
                    },
                    a
                  );
                }
              });
            var i;
          })(e, t, r);
      }
      function c(e, t, r, n) {
        e._serialize && h(r, e._serialize, e.serializers, e._stdErrSerialize);
        const s = r.slice();
        let a = s[0];
        const c = {};
        n && (c.time = n), (c.level = o.levels.values[t]);
        let l = 1 + (0 | e._childLevel);
        if ((l < 1 && (l = 1), null !== a && 'object' === typeof a)) {
          for (; l-- && 'object' === typeof s[0]; ) Object.assign(c, s.shift());
          a = s.length ? i(s.shift(), s) : void 0;
        } else 'string' === typeof a && (a = i(s.shift(), s));
        return void 0 !== a && (c.msg = a), c;
      }
      function h(e, t, r, i) {
        for (const n in e)
          if (i && e[n] instanceof Error) e[n] = o.stdSerializers.err(e[n]);
          else if ('object' === typeof e[n] && !Array.isArray(e[n]))
            for (const i in e[n]) t && t.indexOf(i) > -1 && i in r && (e[n][i] = r[i](e[n][i]));
      }
      function l(e, t, r) {
        return function () {
          const i = new Array(1 + arguments.length);
          i[0] = t;
          for (var n = 1; n < i.length; n++) i[n] = arguments[n - 1];
          return e[r].apply(this, i);
        };
      }
      function u(e, t, r) {
        const i = t.send,
          n = t.ts,
          s = t.methodLevel,
          o = t.methodValue,
          a = t.val,
          c = e._logEvent.bindings;
        h(
          r,
          e._serialize || Object.keys(e.serializers),
          e.serializers,
          void 0 === e._stdErrSerialize || e._stdErrSerialize
        ),
          (e._logEvent.ts = n),
          (e._logEvent.messages = r.filter(function (e) {
            return -1 === c.indexOf(e);
          })),
          (e._logEvent.level.label = s),
          (e._logEvent.level.value = o),
          i(s, e._logEvent, a),
          (e._logEvent = d(c));
      }
      function d(e) {
        return { ts: 0, messages: [], bindings: e || [], level: { label: '', value: 0 } };
      }
      function p(e) {
        return 'function' === typeof e.timestamp ? e.timestamp : !1 === e.timestamp ? m : w;
      }
      function f() {
        return {};
      }
      function g(e) {
        return e;
      }
      function y() {}
      function m() {
        return !1;
      }
      function w() {
        return Date.now();
      }
      (o.levels = {
        values: { fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10 },
        labels: { 10: 'trace', 20: 'debug', 30: 'info', 40: 'warn', 50: 'error', 60: 'fatal' },
      }),
        (o.stdSerializers = s),
        (o.stdTimeFunctions = Object.assign(
          {},
          {
            nullTime: m,
            epochTime: w,
            unixTime: function () {
              return Math.round(Date.now() / 1e3);
            },
            isoTime: function () {
              return new Date(Date.now()).toISOString();
            },
          }
        ));
    },
    12518: function (e, t, r) {
      function i(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw new Error('positive integer expected, got ' + e);
      }
      function n(e, ...t) {
        if (
          !(
            (r = e) instanceof Uint8Array ||
            (ArrayBuffer.isView(r) && 'Uint8Array' === r.constructor.name)
          )
        )
          throw new Error('Uint8Array expected');
        var r;
        if (t.length > 0 && !t.includes(e.length))
          throw new Error('Uint8Array expected of length ' + t + ', got length=' + e.length);
      }
      function s(e) {
        if ('function' !== typeof e || 'function' !== typeof e.create)
          throw new Error('Hash should be wrapped by utils.wrapConstructor');
        i(e.outputLen), i(e.blockLen);
      }
      function o(e, t = !0) {
        if (e.destroyed) throw new Error('Hash instance has been destroyed');
        if (t && e.finished) throw new Error('Hash#digest() has already been called');
      }
      function a(e, t) {
        n(e);
        const r = t.outputLen;
        if (e.length < r)
          throw new Error('digestInto() expects output buffer of length at least ' + r);
      }
      r.d(t, {
        $h: function () {
          return o;
        },
        eB: function () {
          return a;
        },
        gk: function () {
          return n;
        },
        k8: function () {
          return i;
        },
        z3: function () {
          return s;
        },
      });
    },
    91220: function (e, t, r) {
      r.d(t, {
        kb: function () {
          return p;
        },
        l1: function () {
          return l;
        },
        eV: function () {
          return d;
        },
        GL: function () {
          return o;
        },
        iA: function () {
          return c;
        },
        O6: function () {
          return g;
        },
        np: function () {
          return a;
        },
        O0: function () {
          return u;
        },
        Jq: function () {
          return s;
        },
        hE: function () {
          return f;
        },
      });
      const i =
        'object' === typeof globalThis && 'crypto' in globalThis ? globalThis.crypto : void 0;
      var n = r(12518);
      function s(e) {
        return new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
      }
      function o(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function a(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      const c = (() => 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0])();
      function h(e) {
        return (
          ((e << 24) & 4278190080) |
          ((e << 8) & 16711680) |
          ((e >>> 8) & 65280) |
          ((e >>> 24) & 255)
        );
      }
      function l(e) {
        for (let t = 0; t < e.length; t++) e[t] = h(e[t]);
      }
      function u(e) {
        return (
          'string' === typeof e &&
            (e = (function (e) {
              if ('string' !== typeof e)
                throw new Error('utf8ToBytes expected string, got ' + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          (0, n.gk)(e),
          e
        );
      }
      function d(...e) {
        let t = 0;
        for (let i = 0; i < e.length; i++) {
          const r = e[i];
          (0, n.gk)(r), (t += r.length);
        }
        const r = new Uint8Array(t);
        for (let i = 0, n = 0; i < e.length; i++) {
          const t = e[i];
          r.set(t, n), (n += t.length);
        }
        return r;
      }
      class p {
        clone() {
          return this._cloneInto();
        }
      }
      function f(e) {
        const t = (t) => e().update(u(t)).digest(),
          r = e();
        return (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = () => e()), t;
      }
      function g(e = 32) {
        if (i && 'function' === typeof i.getRandomValues)
          return i.getRandomValues(new Uint8Array(e));
        if (i && 'function' === typeof i.randomBytes) return i.randomBytes(e);
        throw new Error('crypto.getRandomValues must be defined');
      }
    },
  },
]);
