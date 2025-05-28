(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8053],
  {
    40926: function (e, t, r) {
      'use strict';
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
      'use strict';
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
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      const i = r(34308);
      i.__exportStar(r(40926), t), i.__exportStar(r(88618), t);
    },
    34308: function (e, t, r) {
      'use strict';
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
            return S;
          },
          __importStar: function () {
            return P;
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
      function P(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      }
      function S(e) {
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
    28053: function (e, t, r) {
      'use strict';
      r.d(t, {
        k: function () {
          return oh;
        },
        Z: function () {
          return sh;
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
      function P(e) {
        return (e = E(e)) ? e + ':' : '';
      }
      const S = () => {
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
            mounts: { '': e.driver || S() },
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
              e = P(e);
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
              (e = P(e)),
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
              if ((e = P(e)) && t.mounts[e]) throw new Error(`already mounted at ${e}`);
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
              (e = P(e)) &&
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
      let C;
      function N() {
        return C || (C = T('keyval-store', 'keyval')), C;
      }
      function R(e, t = N()) {
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
              (function (e, t, r = N()) {
                return r('readwrite', (r) => (r.put(t, e), A(r.transaction)));
              })(r(e), t, i),
            removeItem: (e) =>
              (function (e, t = N()) {
                return t('readwrite', (t) => (t.delete(e), A(t.transaction)));
              })(r(e), i),
            getKeys: () =>
              (function (e = N()) {
                return e('readonly', (e) => {
                  if (e.getAllKeys) return A(e.getAllKeys());
                  const t = [];
                  return k(e, (e) => t.push(e.key)).then(() => t);
                });
              })(i),
            clear: () =>
              (function (e = N()) {
                return e('readwrite', (e) => (e.clear(), A(e.transaction)));
              })(i),
          }
        );
      };
      class U {
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
      var L =
          typeof globalThis < 'u'
            ? globalThis
            : typeof window < 'u'
              ? window
              : typeof r.g < 'u'
                ? r.g
                : typeof self < 'u'
                  ? self
                  : {},
        B = { exports: {} };
      function q(e) {
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
          typeof L < 'u' && L.localStorage
            ? (B.exports = L.localStorage)
            : typeof window < 'u' && window.localStorage
              ? (B.exports = window.localStorage)
              : (B.exports = new t());
      })();
      class M {
        constructor() {
          this.localStorage = B.exports;
        }
        async getKeys() {
          return Object.keys(this.localStorage);
        }
        async getEntries() {
          return Object.entries(this.localStorage).map(q);
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
      const $ = async (e, t) => {
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
          const e = new M();
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
              await t.setItem(i, 1), r(t), $(e, o);
            })(e, new U(), this.setInitialized);
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
        Ie = r(86138),
        Pe = r(69391);
      const Se = 'INTERNAL_ERROR',
        Oe = 'SERVER_ERROR',
        _e = [-32700, -32600, -32601, -32602, -32603],
        xe = {
          PARSE_ERROR: { code: -32700, message: 'Parse error' },
          INVALID_REQUEST: { code: -32600, message: 'Invalid Request' },
          METHOD_NOT_FOUND: { code: -32601, message: 'Method not found' },
          INVALID_PARAMS: { code: -32602, message: 'Invalid params' },
          [Se]: { code: -32603, message: 'Internal error' },
          [Oe]: { code: -32e3, message: 'Server error' },
        };
      function Ae(e) {
        return _e.includes(e);
      }
      function Te(e) {
        return Object.keys(xe).includes(e) ? xe[e] : xe.SERVER_ERROR;
      }
      function Ce(e) {
        const t = Object.values(xe).find((t) => t.code === e);
        return t || xe.SERVER_ERROR;
      }
      function Ne(e, t, r) {
        return e.message.includes('getaddrinfo ENOTFOUND') ||
          e.message.includes('connect ECONNREFUSED')
          ? new Error(`Unavailable ${r} RPC url at ${t}`)
          : e;
      }
      var Re = r(1468);
      function ke(e = 3) {
        return Date.now() * Math.pow(10, e) + Math.floor(Math.random() * Math.pow(10, e));
      }
      function je(e = 6) {
        return BigInt(ke(e));
      }
      function De(e, t, r) {
        return { id: r || ke(), jsonrpc: '2.0', method: e, params: t };
      }
      function Ue(e, t) {
        return { id: e, jsonrpc: '2.0', result: t };
      }
      function Le(e, t, r) {
        return { id: e, jsonrpc: '2.0', error: Be(t, r) };
      }
      function Be(e, t) {
        return 'undefined' === typeof e
          ? Te(Se)
          : ('string' === typeof e &&
              (e = Object.assign(Object.assign({}, Te(Oe)), { message: e })),
            'undefined' !== typeof t && (e.data = t),
            Ae(e.code) && (e = Ce(e.code)),
            e);
      }
      class qe {}
      class Me extends qe {
        constructor() {
          super();
        }
      }
      class $e extends Me {
        constructor(e) {
          super();
        }
      }
      function ze(e, t) {
        const r = (function (e) {
          const t = e.match(new RegExp(/^\w+:/, 'gi'));
          if (t && t.length) return t[0];
        })(e);
        return 'undefined' !== typeof r && new RegExp(t).test(r);
      }
      function He(e) {
        return ze(e, '^https?:');
      }
      function Ve(e) {
        return ze(e, '^wss?:');
      }
      function Ke(e) {
        return 'object' === typeof e && 'id' in e && 'jsonrpc' in e && '2.0' === e.jsonrpc;
      }
      function Fe(e) {
        return Ke(e) && 'method' in e;
      }
      function We(e) {
        return Ke(e) && (Ge(e) || Ye(e));
      }
      function Ge(e) {
        return 'result' in e;
      }
      function Ye(e) {
        return 'error' in e;
      }
      class Je extends $e {
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
          return this.requestStrict(De(e.method, e.params || [], e.id || je().toString()), t);
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
              Ye(e) ? i(e.error) : r(e.result);
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
            We(e)
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
      const Ze = (e) => e.split('?')[0],
        Qe =
          typeof WebSocket < 'u'
            ? WebSocket
            : typeof r.g < 'u' && typeof r.g.WebSocket < 'u'
              ? r.g.WebSocket
              : typeof window < 'u' && typeof window.WebSocket < 'u'
                ? window.WebSocket
                : typeof self < 'u' && typeof self.WebSocket < 'u'
                  ? self.WebSocket
                  : r(72030);
      class Xe {
        constructor(e) {
          if (
            ((this.url = e), (this.events = new i.EventEmitter()), (this.registering = !1), !Ve(e))
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
          if (!Ve(e))
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
              const n = (0, Re.isReactNative)()
                  ? void 0
                  : {
                      rejectUnauthorized:
                        ((o = e), !new RegExp('wss?://localhost(:d{2,5})?').test(o)),
                    },
                s = new Qe(e, [], n);
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
            i = Le(e, r.message || r.toString());
          this.events.emit('payload', i);
        }
        parseError(e, t = this.url) {
          return Ne(e, Ze(t), 'WS');
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
        emitError(e) {
          const t = this.parseError(
            new Error(e?.message || `WebSocket connection failed for host: ${Ze(this.url)}`)
          );
          return this.events.emit('register_error', t), t;
        }
      }
      var et = r(62873),
        tt = r(48764).Buffer,
        rt = r(34155);
      const it = 'core',
        nt = 'wc@2:core:',
        st = 'error',
        ot = { database: ':memory:' },
        at = 'client_ed25519_seed',
        ct = s.ONE_DAY,
        ht = s.SIX_HOURS,
        lt = 'wss://relay.walletconnect.org',
        ut = 'relayer_message',
        dt = 'relayer_message_ack',
        pt = 'relayer_connect',
        ft = 'relayer_disconnect',
        gt = 'relayer_error',
        yt = 'relayer_connection_stalled',
        mt = 'relayer_publish',
        wt = 'payload',
        bt = 'connect',
        vt = 'disconnect',
        Et = 'error',
        It = '2.19.2',
        Pt = { link_mode: 'link_mode', relay: 'relay' },
        St = 'inbound',
        Ot = 'outbound',
        _t = 'WALLETCONNECT_LINK_MODE_APPS',
        xt = 'subscription_created',
        At = 'subscription_deleted',
        Tt = 'subscription_sync',
        Ct = 'subscription_resubscribed',
        Nt =
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
        Rt = 'pairing_create',
        kt = 'pairing_expire',
        jt = 'pairing_delete',
        Dt = 'pairing_ping',
        Ut = 'history_created',
        Lt = 'history_updated',
        Bt = 'history_deleted',
        qt = 'history_sync',
        Mt = 'expirer_created',
        $t = 'expirer_deleted',
        zt = 'expirer_expired',
        Ht = 'expirer_sync',
        Vt = 'https://verify.walletconnect.org',
        Kt = Vt,
        Ft = `${Kt}/v3`,
        Wt = ['https://verify.walletconnect.com', Vt],
        Gt = 'pairing_started',
        Yt = 'pairing_uri_validation_success',
        Jt = 'pairing_uri_not_expired',
        Zt = 'store_new_pairing',
        Qt = 'subscribing_pairing_topic',
        Xt = 'subscribe_pairing_topic_success',
        er = 'existing_pairing',
        tr = 'pairing_not_expired',
        rr = 'emit_inactive_pairing',
        ir = 'emit_session_proposal',
        nr = 'no_internet_connection',
        sr = 'malformed_pairing_uri',
        or = 'active_pairing_already_exists',
        ar = 'subscribe_pairing_topic_failure',
        cr = 'pairing_expired',
        hr = 'proposal_listener_not_found',
        lr = 'session_approve_started',
        ur = 'session_namespaces_validation_success',
        dr = 'subscribing_session_topic',
        pr = 'subscribe_session_topic_success',
        fr = 'publishing_session_approve',
        gr = 'session_approve_publish_success',
        yr = 'store_session',
        mr = 'publishing_session_settle',
        wr = 'session_settle_publish_success',
        br = 'no_internet_connection',
        vr = 'proposal_expired',
        Er = 'subscribe_session_topic_failure',
        Ir = 'session_approve_publish_failure',
        Pr = 'session_settle_publish_failure',
        Sr = 'session_approve_namespace_validation_failure',
        Or = 'proposal_not_found',
        _r = 'authenticated_session_approve_started',
        xr = 'create_authenticated_session_topic',
        Ar = 'cacaos_verified',
        Tr = 'store_authenticated_session',
        Cr = 'subscribing_authenticated_session_topic',
        Nr = 'subscribe_authenticated_session_topic_success',
        Rr = 'publishing_authenticated_session_approve',
        kr = 'no_internet_connection',
        jr = 'invalid_cacao',
        Dr = 'subscribe_authenticated_session_topic_failure',
        Ur = 'authenticated_session_approve_publish_failure',
        Lr = 'authenticated_session_pending_request_not_found';
      var Br = function (e, t) {
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
        qr = Br;
      const Mr = (e) => {
        if (e instanceof Uint8Array && 'Uint8Array' === e.constructor.name) return e;
        if (e instanceof ArrayBuffer) return new Uint8Array(e);
        if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
        throw new Error('Unknown type, must be binary type');
      };
      class $r {
        constructor(e, t, r) {
          (this.name = e), (this.prefix = t), (this.baseEncode = r);
        }
        encode(e) {
          if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
          throw Error('Unknown type, must be binary type');
        }
      }
      class zr {
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
          return Vr(this, e);
        }
      }
      class Hr {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return Vr(this, e);
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
      const Vr = (e, t) =>
        new Hr({ ...(e.decoders || { [e.prefix]: e }), ...(t.decoders || { [t.prefix]: t }) });
      class Kr {
        constructor(e, t, r, i) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = r),
            (this.baseDecode = i),
            (this.encoder = new $r(e, t, r)),
            (this.decoder = new zr(e, t, i));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      const Fr = ({ name: e, prefix: t, encode: r, decode: i }) => new Kr(e, t, r, i),
        Wr = ({ prefix: e, name: t, alphabet: r }) => {
          const { encode: i, decode: n } = qr(r, t);
          return Fr({ prefix: e, name: t, encode: i, decode: (e) => Mr(n(e)) });
        },
        Gr = ({ name: e, prefix: t, bitsPerChar: r, alphabet: i }) =>
          Fr({
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
        Yr = Fr({
          prefix: '\0',
          name: 'identity',
          encode: (e) => ((e) => new TextDecoder().decode(e))(e),
          decode: (e) => ((e) => new TextEncoder().encode(e))(e),
        });
      var Jr = Object.freeze({ __proto__: null, identity: Yr });
      const Zr = Gr({ prefix: '0', name: 'base2', alphabet: '01', bitsPerChar: 1 });
      var Qr = Object.freeze({ __proto__: null, base2: Zr });
      const Xr = Gr({ prefix: '7', name: 'base8', alphabet: '01234567', bitsPerChar: 3 });
      var ei = Object.freeze({ __proto__: null, base8: Xr });
      const ti = Wr({ prefix: '9', name: 'base10', alphabet: '0123456789' });
      var ri = Object.freeze({ __proto__: null, base10: ti });
      const ii = Gr({ prefix: 'f', name: 'base16', alphabet: '0123456789abcdef', bitsPerChar: 4 }),
        ni = Gr({ prefix: 'F', name: 'base16upper', alphabet: '0123456789ABCDEF', bitsPerChar: 4 });
      var si = Object.freeze({ __proto__: null, base16: ii, base16upper: ni });
      const oi = Gr({
          prefix: 'b',
          name: 'base32',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567',
          bitsPerChar: 5,
        }),
        ai = Gr({
          prefix: 'B',
          name: 'base32upper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
          bitsPerChar: 5,
        }),
        ci = Gr({
          prefix: 'c',
          name: 'base32pad',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567=',
          bitsPerChar: 5,
        }),
        hi = Gr({
          prefix: 'C',
          name: 'base32padupper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=',
          bitsPerChar: 5,
        }),
        li = Gr({
          prefix: 'v',
          name: 'base32hex',
          alphabet: '0123456789abcdefghijklmnopqrstuv',
          bitsPerChar: 5,
        }),
        ui = Gr({
          prefix: 'V',
          name: 'base32hexupper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV',
          bitsPerChar: 5,
        }),
        di = Gr({
          prefix: 't',
          name: 'base32hexpad',
          alphabet: '0123456789abcdefghijklmnopqrstuv=',
          bitsPerChar: 5,
        }),
        pi = Gr({
          prefix: 'T',
          name: 'base32hexpadupper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV=',
          bitsPerChar: 5,
        }),
        fi = Gr({
          prefix: 'h',
          name: 'base32z',
          alphabet: 'ybndrfg8ejkmcpqxot1uwisza345h769',
          bitsPerChar: 5,
        });
      var gi = Object.freeze({
        __proto__: null,
        base32: oi,
        base32upper: ai,
        base32pad: ci,
        base32padupper: hi,
        base32hex: li,
        base32hexupper: ui,
        base32hexpad: di,
        base32hexpadupper: pi,
        base32z: fi,
      });
      const yi = Wr({
          prefix: 'k',
          name: 'base36',
          alphabet: '0123456789abcdefghijklmnopqrstuvwxyz',
        }),
        mi = Wr({
          prefix: 'K',
          name: 'base36upper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        });
      var wi = Object.freeze({ __proto__: null, base36: yi, base36upper: mi });
      const bi = Wr({
          name: 'base58btc',
          prefix: 'z',
          alphabet: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
        }),
        vi = Wr({
          name: 'base58flickr',
          prefix: 'Z',
          alphabet: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ',
        });
      var Ei = Object.freeze({ __proto__: null, base58btc: bi, base58flickr: vi });
      const Ii = Gr({
          prefix: 'm',
          name: 'base64',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          bitsPerChar: 6,
        }),
        Pi = Gr({
          prefix: 'M',
          name: 'base64pad',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
          bitsPerChar: 6,
        }),
        Si = Gr({
          prefix: 'u',
          name: 'base64url',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
          bitsPerChar: 6,
        }),
        Oi = Gr({
          prefix: 'U',
          name: 'base64urlpad',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=',
          bitsPerChar: 6,
        });
      var _i = Object.freeze({
        __proto__: null,
        base64: Ii,
        base64pad: Pi,
        base64url: Si,
        base64urlpad: Oi,
      });
      const xi = Array.from(
          '\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42'
        ),
        Ai = xi.reduce((e, t, r) => ((e[r] = t), e), []),
        Ti = xi.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []);
      const Ci = Fr({
        prefix: '\ud83d\ude80',
        name: 'base256emoji',
        encode: function (e) {
          return e.reduce((e, t) => (e += Ai[t]), '');
        },
        decode: function (e) {
          const t = [];
          for (const r of e) {
            const e = Ti[r.codePointAt(0)];
            if (void 0 === e) throw new Error(`Non-base256emoji character: ${r}`);
            t.push(e);
          }
          return new Uint8Array(t);
        },
      });
      var Ni = Object.freeze({ __proto__: null, base256emoji: Ci }),
        Ri = function e(t, r, i) {
          r = r || [];
          for (var n = (i = i || 0); t >= ki; ) (r[i++] = (255 & t) | 128), (t /= 128);
          for (; -128 & t; ) (r[i++] = (255 & t) | 128), (t >>>= 7);
          return (r[i] = 0 | t), (e.bytes = i - n + 1), r;
        },
        ki = Math.pow(2, 31);
      var ji = function e(t, r) {
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
      var Di = Math.pow(2, 7),
        Ui = Math.pow(2, 14),
        Li = Math.pow(2, 21),
        Bi = Math.pow(2, 28),
        qi = Math.pow(2, 35),
        Mi = Math.pow(2, 42),
        $i = Math.pow(2, 49),
        zi = Math.pow(2, 56),
        Hi = Math.pow(2, 63),
        Vi = {
          encode: Ri,
          decode: ji,
          encodingLength: function (e) {
            return e < Di
              ? 1
              : e < Ui
                ? 2
                : e < Li
                  ? 3
                  : e < Bi
                    ? 4
                    : e < qi
                      ? 5
                      : e < Mi
                        ? 6
                        : e < $i
                          ? 7
                          : e < zi
                            ? 8
                            : e < Hi
                              ? 9
                              : 10;
          },
        },
        Ki = Vi;
      const Fi = (e, t, r = 0) => (Ki.encode(e, t, r), t),
        Wi = (e) => Ki.encodingLength(e),
        Gi = (e, t) => {
          const r = t.byteLength,
            i = Wi(e),
            n = i + Wi(r),
            s = new Uint8Array(n + r);
          return Fi(e, s, 0), Fi(r, s, i), s.set(t, n), new Yi(e, r, t, s);
        };
      class Yi {
        constructor(e, t, r, i) {
          (this.code = e), (this.size = t), (this.digest = r), (this.bytes = i);
        }
      }
      const Ji = ({ name: e, code: t, encode: r }) => new Zi(e, t, r);
      class Zi {
        constructor(e, t, r) {
          (this.name = e), (this.code = t), (this.encode = r);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            const t = this.encode(e);
            return t instanceof Uint8Array ? Gi(this.code, t) : t.then((e) => Gi(this.code, e));
          }
          throw Error('Unknown type, must be binary type');
        }
      }
      const Qi = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t)),
        Xi = Ji({ name: 'sha2-256', code: 18, encode: Qi('SHA-256') }),
        en = Ji({ name: 'sha2-512', code: 19, encode: Qi('SHA-512') });
      Object.freeze({ __proto__: null, sha256: Xi, sha512: en });
      const tn = Mr,
        rn = { code: 0, name: 'identity', encode: tn, digest: (e) => Gi(0, tn(e)) };
      Object.freeze({ __proto__: null, identity: rn });
      new TextEncoder(), new TextDecoder();
      const nn = { ...Jr, ...Qr, ...ei, ...ri, ...si, ...gi, ...wi, ...Ei, ..._i, ...Ni };
      function sn(e, t, r, i) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: i },
        };
      }
      const on = sn(
          'utf8',
          'u',
          (e) => 'u' + new TextDecoder('utf8').decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        an = sn(
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
        cn = { utf8: on, 'utf-8': on, hex: nn.base16, latin1: an, ascii: an, binary: an, ...nn };
      var hn = Object.defineProperty,
        ln = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? hn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class un {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            ln(this, 'keychain', new Map()),
            ln(this, 'name', 'keychain'),
            ln(this, 'version', '0.3'),
            ln(this, 'initialized', !1),
            ln(this, 'storagePrefix', nt),
            ln(this, 'init', async () => {
              if (!this.initialized) {
                const e = await this.getKeyChain();
                typeof e < 'u' && (this.keychain = e), (this.initialized = !0);
              }
            }),
            ln(this, 'has', (e) => (this.isInitialized(), this.keychain.has(e))),
            ln(this, 'set', async (e, t) => {
              this.isInitialized(), this.keychain.set(e, t), await this.persist();
            }),
            ln(this, 'get', (e) => {
              this.isInitialized();
              const t = this.keychain.get(e);
              if (typeof t > 'u') {
                const { message: t } = (0, Ie.kCb)('NO_MATCHING_KEY', `${this.name}: ${e}`);
                throw new Error(t);
              }
              return t;
            }),
            ln(this, 'del', async (e) => {
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
      var dn = Object.defineProperty,
        pn = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? dn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class fn {
        constructor(e, t, r) {
          (this.core = e),
            (this.logger = t),
            pn(this, 'name', 'crypto'),
            pn(this, 'keychain'),
            pn(this, 'randomSessionIdentifier', (0, Ie.jdp)()),
            pn(this, 'initialized', !1),
            pn(this, 'init', async () => {
              this.initialized || (await this.keychain.init(), (this.initialized = !0));
            }),
            pn(this, 'hasKeys', (e) => (this.isInitialized(), this.keychain.has(e))),
            pn(this, 'getClientId', async () => {
              this.isInitialized();
              const e = await this.getClientSeed(),
                t = Ee.Au(e);
              return Ee.bG(t.publicKey);
            }),
            pn(this, 'generateKeyPair', () => {
              this.isInitialized();
              const e = (0, Ie.Au2)();
              return this.setPrivateKey(e.publicKey, e.privateKey);
            }),
            pn(this, 'signJWT', async (e) => {
              this.isInitialized();
              const t = await this.getClientSeed(),
                r = Ee.Au(t),
                i = this.randomSessionIdentifier,
                n = ct;
              return await Ee.vf(i, e, n, r);
            }),
            pn(this, 'generateSharedKey', (e, t, r) => {
              this.isInitialized();
              const i = this.getPrivateKey(e),
                n = (0, Ie.m$A)(i, t);
              return this.setSymKey(n, r);
            }),
            pn(this, 'setSymKey', async (e, t) => {
              this.isInitialized();
              const r = t || (0, Ie.YmJ)(e);
              return await this.keychain.set(r, e), r;
            }),
            pn(this, 'deleteKeyPair', async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            pn(this, 'deleteSymKey', async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            pn(this, 'encode', async (e, t, r) => {
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
            pn(this, 'decode', async (e, t, r) => {
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
              } catch (B) {
                this.logger.error(
                  `Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`
                ),
                  this.logger.error(B);
              }
            }),
            pn(this, 'getPayloadType', (e, t = Ie.$dT) => {
              const r = (0, Ie.vBi)({ encoded: e, encoding: t });
              return (0, Ie.WGe)(r.type);
            }),
            pn(this, 'getPayloadSenderPublicKey', (e, t = Ie.$dT) => {
              const r = (0, Ie.vBi)({ encoded: e, encoding: t });
              return r.senderPublicKey ? (0, Pe.BB)(r.senderPublicKey, Ie.AWt) : void 0;
            }),
            (this.core = e),
            (this.logger = he(t, this.name)),
            (this.keychain = r || new un(this.core, this.logger));
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
            e = this.keychain.get(at);
          } catch {
            (e = (0, Ie.jdp)()), await this.keychain.set(at, e);
          }
          return (function (e, t = 'utf8') {
            const r = cn[t];
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
      var gn = Object.defineProperty,
        yn = Object.defineProperties,
        mn = Object.getOwnPropertyDescriptors,
        wn = Object.getOwnPropertySymbols,
        bn = Object.prototype.hasOwnProperty,
        vn = Object.prototype.propertyIsEnumerable,
        En = (e, t, r) =>
          t in e
            ? gn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        In = (e, t, r) => En(e, 'symbol' != typeof t ? t + '' : t, r);
      class Pn extends class {
        constructor(e, t) {
          (this.logger = e), (this.core = t);
        }
      } {
        constructor(e, t) {
          super(e, t),
            (this.logger = e),
            (this.core = t),
            In(this, 'messages', new Map()),
            In(this, 'messagesWithoutClientAck', new Map()),
            In(this, 'name', 'messages'),
            In(this, 'version', '0.3'),
            In(this, 'initialized', !1),
            In(this, 'storagePrefix', nt),
            In(this, 'init', async () => {
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
            In(this, 'set', async (e, t, r) => {
              this.isInitialized();
              const i = (0, Ie.rjm)(t);
              let n = this.messages.get(e);
              if ((typeof n > 'u' && (n = {}), typeof n[i] < 'u')) return i;
              if (((n[i] = t), this.messages.set(e, n), r === St)) {
                const r = this.messagesWithoutClientAck.get(e) || {};
                this.messagesWithoutClientAck.set(
                  e,
                  ((e, t) => yn(e, mn(t)))(
                    ((e, t) => {
                      for (var r in t || (t = {})) bn.call(t, r) && En(e, r, t[r]);
                      if (wn) for (var r of wn(t)) vn.call(t, r) && En(e, r, t[r]);
                      return e;
                    })({}, r),
                    { [i]: t }
                  )
                );
              }
              return await this.persist(), i;
            }),
            In(this, 'get', (e) => {
              this.isInitialized();
              let t = this.messages.get(e);
              return typeof t > 'u' && (t = {}), t;
            }),
            In(this, 'getWithoutAck', (e) => {
              this.isInitialized();
              const t = {};
              for (const r of e) {
                const e = this.messagesWithoutClientAck.get(r) || {};
                t[r] = Object.values(e);
              }
              return t;
            }),
            In(this, 'has', (e, t) => {
              this.isInitialized();
              return typeof this.get(e)[(0, Ie.rjm)(t)] < 'u';
            }),
            In(this, 'ack', async (e, t) => {
              this.isInitialized();
              const r = this.messagesWithoutClientAck.get(e);
              if (typeof r > 'u') return;
              delete r[(0, Ie.rjm)(t)],
                0 === Object.keys(r).length
                  ? this.messagesWithoutClientAck.delete(e)
                  : this.messagesWithoutClientAck.set(e, r),
                await this.persist();
            }),
            In(this, 'del', async (e) => {
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
      var Sn = Object.defineProperty,
        On = Object.defineProperties,
        _n = Object.getOwnPropertyDescriptors,
        xn = Object.getOwnPropertySymbols,
        An = Object.prototype.hasOwnProperty,
        Tn = Object.prototype.propertyIsEnumerable,
        Cn = (e, t, r) =>
          t in e
            ? Sn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        Nn = (e, t) => {
          for (var r in t || (t = {})) An.call(t, r) && Cn(e, r, t[r]);
          if (xn) for (var r of xn(t)) Tn.call(t, r) && Cn(e, r, t[r]);
          return e;
        },
        Rn = (e, t) => On(e, _n(t)),
        kn = (e, t, r) => Cn(e, 'symbol' != typeof t ? t + '' : t, r);
      class jn extends me {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            kn(this, 'events', new i.EventEmitter()),
            kn(this, 'name', 'publisher'),
            kn(this, 'queue', new Map()),
            kn(this, 'publishTimeout', (0, s.toMiliseconds)(s.ONE_MINUTE)),
            kn(this, 'initialPublishTimeout', (0, s.toMiliseconds)(15 * s.ONE_SECOND)),
            kn(this, 'needsTransportRestart', !1),
            kn(this, 'publish', async (e, t, r) => {
              var i;
              this.logger.debug('Publishing Payload'),
                this.logger.trace({
                  type: 'method',
                  method: 'publish',
                  params: { topic: e, message: t, opts: r },
                });
              const n = r?.ttl || ht,
                s = (0, Ie._HE)(r),
                o = r?.prompt || !1,
                a = r?.tag || 0,
                c = r?.id || je().toString(),
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
                      this.relayer.events.removeListener(mt, s),
                      i(h));
                  };
                  this.relayer.events.on(mt, s);
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
                    await l, this.events.removeListener(mt, s);
                  } catch (u) {
                    this.queue.set(c, Rn(Nn({}, h), { attempt: 1 })),
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
            kn(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            kn(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            kn(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            kn(this, 'removeListener', (e, t) => {
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
              ttl: a = ht,
              prompt: c,
              tag: h,
              id: l,
              attestation: u,
              tvf: d,
            } = e,
            p = {
              method: (0, Ie.cOS)((0, Ie._HE)().protocol).publish,
              params: Nn({ topic: s, message: o, ttl: a, prompt: c, tag: h, attestation: u }, d),
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
            this.relayer.events.emit(mt, e), this.logger.debug('Successfully Published Payload'), f
          );
        }
        removeRequestFromQueue(e) {
          this.queue.delete(e);
        }
        checkQueue() {
          this.queue.forEach(async (e, t) => {
            const r = e.attempt + 1;
            this.queue.set(t, Rn(Nn({}, e), { attempt: r }));
            const { topic: i, message: n, opts: s, attestation: o } = e;
            this.logger.warn(
              {},
              `Publisher: queue->publishing: ${e.opts.id}, tag: ${e.opts.tag}, attempt: ${r}`
            ),
              await this.rpcPublish(
                Rn(Nn({}, e), {
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
              return (this.needsTransportRestart = !1), void this.relayer.events.emit(yt);
            this.checkQueue();
          }),
            this.relayer.on(dt, (e) => {
              this.removeRequestFromQueue(e.id.toString());
            });
        }
      }
      var Dn = Object.defineProperty,
        Un = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? Dn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class Ln {
        constructor() {
          Un(this, 'map', new Map()),
            Un(this, 'set', (e, t) => {
              const r = this.get(e);
              this.exists(e, t) || this.map.set(e, [...r, t]);
            }),
            Un(this, 'get', (e) => this.map.get(e) || []),
            Un(this, 'exists', (e, t) => this.get(e).includes(t)),
            Un(this, 'delete', (e, t) => {
              if (typeof t > 'u') return void this.map.delete(e);
              if (!this.map.has(e)) return;
              const r = this.get(e);
              if (!this.exists(e, t)) return;
              const i = r.filter((e) => e !== t);
              i.length ? this.map.set(e, i) : this.map.delete(e);
            }),
            Un(this, 'clear', () => {
              this.map.clear();
            });
        }
        get topics() {
          return Array.from(this.map.keys());
        }
      }
      var Bn = Object.defineProperty,
        qn = Object.defineProperties,
        Mn = Object.getOwnPropertyDescriptors,
        $n = Object.getOwnPropertySymbols,
        zn = Object.prototype.hasOwnProperty,
        Hn = Object.prototype.propertyIsEnumerable,
        Vn = (e, t, r) =>
          t in e
            ? Bn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        Kn = (e, t) => {
          for (var r in t || (t = {})) zn.call(t, r) && Vn(e, r, t[r]);
          if ($n) for (var r of $n(t)) Hn.call(t, r) && Vn(e, r, t[r]);
          return e;
        },
        Fn = (e, t) => qn(e, Mn(t)),
        Wn = (e, t, r) => Vn(e, 'symbol' != typeof t ? t + '' : t, r);
      class Gn extends be {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            Wn(this, 'subscriptions', new Map()),
            Wn(this, 'topicMap', new Ln()),
            Wn(this, 'events', new i.EventEmitter()),
            Wn(this, 'name', 'subscription'),
            Wn(this, 'version', '0.3'),
            Wn(this, 'pending', new Map()),
            Wn(this, 'cached', []),
            Wn(this, 'initialized', !1),
            Wn(this, 'storagePrefix', nt),
            Wn(this, 'subscribeTimeout', (0, s.toMiliseconds)(s.ONE_MINUTE)),
            Wn(this, 'initialSubscribeTimeout', (0, s.toMiliseconds)(15 * s.ONE_SECOND)),
            Wn(this, 'clientId'),
            Wn(this, 'batchSubscribeTopicsLimit', 500),
            Wn(this, 'init', async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                this.registerEventListeners(),
                await this.restore()),
                (this.initialized = !0);
            }),
            Wn(this, 'subscribe', async (e, t) => {
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
            Wn(this, 'unsubscribe', async (e, t) => {
              this.isInitialized(),
                typeof t?.id < 'u'
                  ? await this.unsubscribeById(e, t.id, t)
                  : await this.unsubscribeByTopic(e, t);
            }),
            Wn(
              this,
              'isSubscribed',
              (e) =>
                new Promise((t) => {
                  t(this.topicMap.topics.includes(e));
                })
            ),
            Wn(
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
            Wn(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            Wn(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            Wn(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            Wn(this, 'removeListener', (e, t) => {
              this.events.removeListener(e, t);
            }),
            Wn(this, 'start', async () => {
              await this.onConnect();
            }),
            Wn(this, 'stop', async () => {
              await this.onDisconnect();
            }),
            Wn(this, 'restart', async () => {
              await this.restore(), await this.onRestart();
            }),
            Wn(this, 'checkPending', async () => {
              if (0 === this.pending.size && (!this.initialized || !this.relayer.connected)) return;
              const e = [];
              this.pending.forEach((t) => {
                e.push(t);
              }),
                await this.batchSubscribe(e);
            }),
            Wn(this, 'registerEventListeners', () => {
              this.relayer.core.heartbeat.on(h, async () => {
                await this.checkPending();
              }),
                this.events.on(xt, async (e) => {
                  const t = xt;
                  this.logger.info(`Emitting ${t}`),
                    this.logger.debug({ type: 'event', event: t, data: e }),
                    await this.persist();
                }),
                this.events.on(At, async (e) => {
                  const t = At;
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
          (!r || r?.transportType === Pt.relay) &&
            (await this.restartToComplete({ topic: e, id: e, relay: t }));
          const n = { method: (0, Ie.cOS)(t.protocol).subscribe, params: { topic: e } };
          this.logger.debug('Outgoing Relay Payload'),
            this.logger.trace({ type: 'payload', direction: 'outgoing', request: n });
          const o = null == (i = r?.internal) ? void 0 : i.throwOnFailedPublish;
          try {
            const t = await this.getSubscriptionId(e);
            if (r?.transportType === Pt.link_mode)
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
                  i.topic === e && (this.events.removeListener(xt, r), t(i.id));
                };
                this.events.on(xt, r);
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
                  this.events.removeListener(xt, r), t(i);
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
              this.relayer.events.emit(yt),
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
            this.relayer.events.emit(yt);
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
            this.relayer.events.emit(yt);
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
          this.setSubscription(e, Fn(Kn({}, t), { id: e })), this.pending.delete(t.topic);
        }
        onBatchSubscribe(e) {
          e.length &&
            e.forEach((e) => {
              this.setSubscription(e.id, Kn({}, e)), this.pending.delete(e.topic);
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
          this.subscriptions.set(e, Kn({}, t)),
            this.topicMap.set(t.topic, e),
            this.events.emit(xt, t);
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
            this.events.emit(At, Fn(Kn({}, r), { reason: t }));
        }
        async persist() {
          await this.setRelayerSubscriptions(this.values), this.events.emit(Tt);
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
          this.events.emit(Ct);
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
          } catch (qe) {
            this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),
              this.logger.error(qe);
          }
        }
        async batchSubscribe(e) {
          e.length &&
            (await this.rpcBatchSubscribe(e),
            this.onBatchSubscribe(
              await Promise.all(
                e.map(async (e) => Fn(Kn({}, e), { id: await this.getSubscriptionId(e.topic) }))
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
      var Yn = Object.defineProperty,
        Jn = Object.getOwnPropertySymbols,
        Zn = Object.prototype.hasOwnProperty,
        Qn = Object.prototype.propertyIsEnumerable,
        Xn = (e, t, r) =>
          t in e
            ? Yn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        es = (e, t) => {
          for (var r in t || (t = {})) Zn.call(t, r) && Xn(e, r, t[r]);
          if (Jn) for (var r of Jn(t)) Qn.call(t, r) && Xn(e, r, t[r]);
          return e;
        },
        ts = (e, t, r) => Xn(e, 'symbol' != typeof t ? t + '' : t, r);
      class rs extends we {
        constructor(e) {
          super(e),
            ts(this, 'protocol', 'wc'),
            ts(this, 'version', 2),
            ts(this, 'core'),
            ts(this, 'logger'),
            ts(this, 'events', new i.EventEmitter()),
            ts(this, 'provider'),
            ts(this, 'messages'),
            ts(this, 'subscriber'),
            ts(this, 'publisher'),
            ts(this, 'name', 'relayer'),
            ts(this, 'transportExplicitlyClosed', !1),
            ts(this, 'initialized', !1),
            ts(this, 'connectionAttemptInProgress', !1),
            ts(this, 'relayUrl'),
            ts(this, 'projectId'),
            ts(this, 'packageName'),
            ts(this, 'bundleId'),
            ts(this, 'hasExperiencedNetworkDisruption', !1),
            ts(this, 'pingTimeout'),
            ts(this, 'heartBeatTimeout', (0, s.toMiliseconds)(s.THIRTY_SECONDS + s.FIVE_SECONDS)),
            ts(this, 'reconnectTimeout'),
            ts(this, 'connectPromise'),
            ts(this, 'reconnectInProgress', !1),
            ts(this, 'requestsInFlight', []),
            ts(this, 'connectTimeout', (0, s.toMiliseconds)(15 * s.ONE_SECOND)),
            ts(this, 'request', async (e) => {
              var t, r;
              this.logger.debug('Publishing Request Payload');
              const i = e.id || je().toString();
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
            ts(this, 'resetPingTimeout', () => {
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
            ts(this, 'onPayloadHandler', (e) => {
              this.onProviderPayload(e), this.resetPingTimeout();
            }),
            ts(this, 'onConnectHandler', () => {
              this.logger.warn({}, 'Relayer connected \ud83d\udedc'),
                this.startPingTimeout(),
                this.events.emit(pt);
            }),
            ts(this, 'onDisconnectHandler', () => {
              this.logger.warn({}, 'Relayer disconnected \ud83d\uded1'),
                (this.requestsInFlight = []),
                this.onProviderDisconnect();
            }),
            ts(this, 'onProviderErrorHandler', (e) => {
              this.logger.fatal(`Fatal socket error: ${e.message}`),
                this.events.emit(gt, e),
                this.logger.fatal('Fatal socket error received, closing transport'),
                this.transportClose();
            }),
            ts(this, 'registerProviderListeners', () => {
              this.provider.on(wt, this.onPayloadHandler),
                this.provider.on(bt, this.onConnectHandler),
                this.provider.on(vt, this.onDisconnectHandler),
                this.provider.on(Et, this.onProviderErrorHandler);
            }),
            (this.core = e.core),
            (this.logger =
              typeof e.logger < 'u' && 'string' != typeof e.logger
                ? he(e.logger, this.name)
                : V()(ae({ level: e.logger || 'error' }))),
            (this.messages = new Pn(this.logger, e.core)),
            (this.subscriber = new Gn(this, this.logger)),
            (this.publisher = new jn(this, this.logger)),
            (this.relayUrl = e?.relayUrl || lt),
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
            } catch (qe) {
              this.logger.warn(qe, qe?.message);
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
              { topic: e, message: t, publishedAt: Date.now(), transportType: Pt.relay },
              Ot
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
            t.topic === e && (this.subscriber.off(xt, c), o());
          };
          return (
            await Promise.all([
              new Promise((e) => {
                (o = e), this.subscriber.on(xt, c);
              }),
              new Promise(async (r, i) => {
                (a =
                  (await this.subscriber
                    .subscribe(e, es({ internal: { throwOnFailedPublish: s } }, t))
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
          this.events.emit(ut, e), await this.recordMessageEvent(e, St);
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
                  this.provider.once(vt, r),
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
                        this.provider.off(vt, r), clearTimeout(this.reconnectTimeout);
                      }),
                    await new Promise(async (e, t) => {
                      const r = () => {
                        t(new Error('Connection interrupted while trying to subscribe'));
                      };
                      this.provider.once(vt, r),
                        await this.subscriber
                          .start()
                          .then(e)
                          .catch(t)
                          .finally(() => {
                            this.provider.off(vt, r);
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
          (this.provider = new Je(
            new Xe(
              (0, Ie.$0m)({
                sdkVersion: It,
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
            Fe(e))
          ) {
            if (!e.method.endsWith('_subscription')) return;
            const t = e.params,
              { topic: r, message: i, publishedAt: n, attestation: s } = t.data,
              o = { topic: r, message: i, publishedAt: n, transportType: Pt.relay, attestation: s };
            this.logger.debug('Emitting Relayer Payload'),
              this.logger.trace(es({ type: 'event', event: t.id }, o)),
              this.events.emit(t.id, o),
              await this.acknowledgePayload(e),
              await this.onMessageEvent(o);
          } else We(e) && this.events.emit(dt, e);
        }
        async onMessageEvent(e) {
          (await this.shouldIgnoreMessageEvent(e)) ||
            (await this.recordMessageEvent(e, St), this.events.emit(ut, e));
        }
        async acknowledgePayload(e) {
          const t = Ue(e.id, !0);
          await this.provider.connection.send(t);
        }
        unregisterProviderListeners() {
          this.provider.off(wt, this.onPayloadHandler),
            this.provider.off(bt, this.onConnectHandler),
            this.provider.off(vt, this.onDisconnectHandler),
            this.provider.off(Et, this.onProviderErrorHandler),
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
            this.events.emit(ft),
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
      function is() {}
      function ns(e) {
        if (!e || 'object' != typeof e) return !1;
        const t = Object.getPrototypeOf(e);
        return (
          (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) &&
          '[object Object]' === Object.prototype.toString.call(e)
        );
      }
      function ss(e) {
        return Object.getOwnPropertySymbols(e).filter((t) =>
          Object.prototype.propertyIsEnumerable.call(e, t)
        );
      }
      function os(e) {
        return null == e
          ? void 0 === e
            ? '[object Undefined]'
            : '[object Null]'
          : Object.prototype.toString.call(e);
      }
      const as = '[object Arguments]',
        cs = '[object Object]';
      function hs(e, t, r, i, n, s, o) {
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
              return ls(e, t, s, o);
          }
        return ls(e, t, s, o);
      }
      function ls(e, t, r, i) {
        if (Object.is(e, t)) return !0;
        let n = os(e),
          s = os(t);
        if ((n === as && (n = cs), s === as && (s = cs), n !== s)) return !1;
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
                if (!t.has(n) || !hs(s, t.get(n), n, e, t, r, i)) return !1;
              return !0;
            case '[object Set]': {
              if (e.size !== t.size) return !1;
              const n = Array.from(e.values()),
                s = Array.from(t.values());
              for (let o = 0; o < n.length; o++) {
                const a = n[o],
                  c = s.findIndex((n) => hs(a, n, void 0, e, t, r, i));
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
              if ((typeof tt < 'u' && tt.isBuffer(e) !== tt.isBuffer(t)) || e.length !== t.length)
                return !1;
              for (let n = 0; n < e.length; n++) if (!hs(e[n], t[n], n, e, t, r, i)) return !1;
              return !0;
            case '[object ArrayBuffer]':
              return (
                e.byteLength === t.byteLength && ls(new Uint8Array(e), new Uint8Array(t), r, i)
              );
            case '[object DataView]':
              return (
                e.byteLength === t.byteLength &&
                e.byteOffset === t.byteOffset &&
                ls(new Uint8Array(e), new Uint8Array(t), r, i)
              );
            case '[object Error]':
              return e.name === t.name && e.message === t.message;
            case cs: {
              if (!(ls(e.constructor, t.constructor, r, i) || (ns(e) && ns(t)))) return !1;
              const n = [...Object.keys(e), ...ss(e)],
                s = [...Object.keys(t), ...ss(t)];
              if (n.length !== s.length) return !1;
              for (let o = 0; o < n.length; o++) {
                const s = n[o],
                  a = e[s];
                if (!Object.hasOwn(t, s)) return !1;
                if (!hs(a, t[s], s, e, t, r, i)) return !1;
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
      function us(e, t) {
        return (function (e, t, r) {
          return hs(e, t, void 0, void 0, void 0, void 0, r);
        })(e, t, is);
      }
      var ds = Object.defineProperty,
        ps = Object.getOwnPropertySymbols,
        fs = Object.prototype.hasOwnProperty,
        gs = Object.prototype.propertyIsEnumerable,
        ys = (e, t, r) =>
          t in e
            ? ds(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        ms = (e, t) => {
          for (var r in t || (t = {})) fs.call(t, r) && ys(e, r, t[r]);
          if (ps) for (var r of ps(t)) gs.call(t, r) && ys(e, r, t[r]);
          return e;
        },
        ws = (e, t, r) => ys(e, 'symbol' != typeof t ? t + '' : t, r);
      class bs extends class {
        constructor(e, t, r, i) {
          (this.core = e), (this.logger = t), (this.name = r);
        }
      } {
        constructor(e, t, r, i = nt, n) {
          super(e, t, r, i),
            (this.core = e),
            (this.logger = t),
            (this.name = r),
            ws(this, 'map', new Map()),
            ws(this, 'version', '0.3'),
            ws(this, 'cached', []),
            ws(this, 'initialized', !1),
            ws(this, 'getKey'),
            ws(this, 'storagePrefix', nt),
            ws(this, 'recentlyDeleted', []),
            ws(this, 'recentlyDeletedLimit', 200),
            ws(this, 'init', async () => {
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
            ws(this, 'set', async (e, t) => {
              this.isInitialized(),
                this.map.has(e)
                  ? await this.update(e, t)
                  : (this.logger.debug('Setting value'),
                    this.logger.trace({ type: 'method', method: 'set', key: e, value: t }),
                    this.map.set(e, t),
                    await this.persist());
            }),
            ws(
              this,
              'get',
              (e) => (
                this.isInitialized(),
                this.logger.debug('Getting value'),
                this.logger.trace({ type: 'method', method: 'get', key: e }),
                this.getData(e)
              )
            ),
            ws(
              this,
              'getAll',
              (e) => (
                this.isInitialized(),
                e
                  ? this.values.filter((t) => Object.keys(e).every((r) => us(t[r], e[r])))
                  : this.values
              )
            ),
            ws(this, 'update', async (e, t) => {
              this.isInitialized(),
                this.logger.debug('Updating value'),
                this.logger.trace({ type: 'method', method: 'update', key: e, update: t });
              const r = ms(ms({}, this.getData(e)), t);
              this.map.set(e, r), await this.persist();
            }),
            ws(this, 'delete', async (e, t) => {
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
          } catch (qe) {
            this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(qe);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = (0, Ie.kCb)('NOT_INITIALIZED', this.name);
            throw new Error(e);
          }
        }
      }
      var vs = Object.defineProperty,
        Es = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? vs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class Is {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            Es(this, 'name', 'pairing'),
            Es(this, 'version', '0.3'),
            Es(this, 'events', new (n())()),
            Es(this, 'pairings'),
            Es(this, 'initialized', !1),
            Es(this, 'storagePrefix', nt),
            Es(this, 'ignoredPayloadTypes', [Ie.rVF]),
            Es(this, 'registeredMethods', []),
            Es(this, 'init', async () => {
              this.initialized ||
                (await this.pairings.init(),
                await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                (this.initialized = !0),
                this.logger.trace('Initialized'));
            }),
            Es(this, 'register', ({ methods: e }) => {
              this.isInitialized(),
                (this.registeredMethods = [...new Set([...this.registeredMethods, ...e])]);
            }),
            Es(this, 'create', async (e) => {
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
                this.events.emit(Rt, o),
                this.core.expirer.set(r, i),
                await this.pairings.set(r, o),
                await this.core.relayer.subscribe(r, { transportType: e?.transportType }),
                { topic: r, uri: a }
              );
            }),
            Es(this, 'pair', async (e) => {
              this.isInitialized();
              const t = this.core.eventClient.createEvent({
                properties: { topic: e?.uri, trace: [Gt] },
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
                t.addTrace(Yt),
                t.addTrace(Jt),
                this.pairings.keys.includes(r))
              ) {
                if (((c = this.pairings.get(r)), t.addTrace(er), c.active))
                  throw (
                    (t.setError(or),
                    new Error(
                      `Pairing already exists: ${r}. Please try again with a new connection URI.`
                    ))
                  );
                t.addTrace(tr);
              }
              const h = o || (0, Ie.gn4)(s.FIVE_MINUTES),
                l = { topic: r, relay: n, expiry: h, active: !1, methods: a };
              this.core.expirer.set(r, h),
                await this.pairings.set(r, l),
                t.addTrace(Zt),
                e.activatePairing && (await this.activate({ topic: r })),
                this.events.emit(Rt, l),
                t.addTrace(rr),
                this.core.crypto.keychain.has(r) || (await this.core.crypto.setSymKey(i, r)),
                t.addTrace(Qt);
              try {
                await this.core.relayer.confirmOnlineStateOrThrow();
              } catch {
                t.setError(nr);
              }
              try {
                await this.core.relayer.subscribe(r, { relay: n });
              } catch (U) {
                throw (t.setError(ar), U);
              }
              return t.addTrace(Xt), l;
            }),
            Es(this, 'activate', async ({ topic: e }) => {
              this.isInitialized();
              const t = (0, Ie.gn4)(s.FIVE_MINUTES);
              this.core.expirer.set(e, t), await this.pairings.update(e, { active: !0, expiry: t });
            }),
            Es(this, 'ping', async (e) => {
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
            Es(this, 'updateExpiry', async ({ topic: e, expiry: t }) => {
              this.isInitialized(), await this.pairings.update(e, { expiry: t });
            }),
            Es(this, 'updateMetadata', async ({ topic: e, metadata: t }) => {
              this.isInitialized(), await this.pairings.update(e, { peerMetadata: t });
            }),
            Es(this, 'getPairings', () => (this.isInitialized(), this.pairings.values)),
            Es(this, 'disconnect', async (e) => {
              this.isInitialized(), await this.isValidDisconnect(e);
              const { topic: t } = e;
              this.pairings.keys.includes(t) &&
                (await this.sendRequest(t, 'wc_pairingDelete', (0, Ie.D6H)('USER_DISCONNECTED')),
                await this.deletePairing(t));
            }),
            Es(this, 'formatUriFromPairing', (e) => {
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
            Es(this, 'sendRequest', async (e, t, r) => {
              const i = De(t, r),
                n = await this.core.crypto.encode(e, i),
                s = Nt[t].req;
              return this.core.history.set(e, i), this.core.relayer.publish(e, n, s), i.id;
            }),
            Es(this, 'sendResult', async (e, t, r) => {
              const i = Ue(e, r),
                n = await this.core.crypto.encode(t, i),
                s = (await this.core.history.get(t, e)).request.method,
                o = Nt[s].res;
              await this.core.relayer.publish(t, n, o), await this.core.history.resolve(i);
            }),
            Es(this, 'sendError', async (e, t, r) => {
              const i = Le(e, r),
                n = await this.core.crypto.encode(t, i),
                s = (await this.core.history.get(t, e)).request.method,
                o = Nt[s] ? Nt[s].res : Nt.unregistered_method.res;
              await this.core.relayer.publish(t, n, o), await this.core.history.resolve(i);
            }),
            Es(this, 'deletePairing', async (e, t) => {
              await this.core.relayer.unsubscribe(e),
                await Promise.all([
                  this.pairings.delete(e, (0, Ie.D6H)('USER_DISCONNECTED')),
                  this.core.crypto.deleteSymKey(e),
                  t ? Promise.resolve() : this.core.expirer.del(e),
                ]);
            }),
            Es(this, 'cleanup', async () => {
              const e = this.pairings.getAll().filter((e) => (0, Ie.BwD)(e.expiry));
              await Promise.all(e.map((e) => this.deletePairing(e.topic)));
            }),
            Es(this, 'onRelayEventRequest', async (e) => {
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
            Es(this, 'onRelayEventResponse', async (e) => {
              const { topic: t, payload: r } = e,
                i = (await this.core.history.get(t, r.id)).request.method;
              return 'wc_pairingPing' === i
                ? this.onPairingPingResponse(t, r)
                : this.onUnknownRpcMethodResponse(i);
            }),
            Es(this, 'onPairingPingRequest', async (e, t) => {
              const { id: r } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult(r, e, !0),
                  this.events.emit(Dt, { id: r, topic: e });
              } catch (i) {
                await this.sendError(r, e, i), this.logger.error(i);
              }
            }),
            Es(this, 'onPairingPingResponse', (e, t) => {
              const { id: r } = t;
              setTimeout(() => {
                Ge(t)
                  ? this.events.emit((0, Ie.E0T)('pairing_ping', r), {})
                  : Ye(t) && this.events.emit((0, Ie.E0T)('pairing_ping', r), { error: t.error });
              }, 500);
            }),
            Es(this, 'onPairingDeleteRequest', async (e, t) => {
              const { id: r } = t;
              try {
                this.isValidDisconnect({ topic: e }),
                  await this.deletePairing(e),
                  this.events.emit(jt, { id: r, topic: e });
              } catch (i) {
                await this.sendError(r, e, i), this.logger.error(i);
              }
            }),
            Es(this, 'onUnknownRpcMethodRequest', async (e, t) => {
              const { id: r, method: i } = t;
              try {
                if (this.registeredMethods.includes(i)) return;
                const t = (0, Ie.D6H)('WC_METHOD_UNSUPPORTED', i);
                await this.sendError(r, e, t), this.logger.error(t);
              } catch (ue) {
                await this.sendError(r, e, ue), this.logger.error(ue);
              }
            }),
            Es(this, 'onUnknownRpcMethodResponse', (e) => {
              this.registeredMethods.includes(e) ||
                this.logger.error((0, Ie.D6H)('WC_METHOD_UNSUPPORTED', e));
            }),
            Es(this, 'isValidPair', (e, t) => {
              var r;
              if (!(0, Ie.EJd)(e)) {
                const { message: r } = (0, Ie.kCb)('MISSING_OR_INVALID', `pair() params: ${e}`);
                throw (t.setError(sr), new Error(r));
              }
              if (!(0, Ie.jvJ)(e.uri)) {
                const { message: r } = (0, Ie.kCb)('MISSING_OR_INVALID', `pair() uri: ${e.uri}`);
                throw (t.setError(sr), new Error(r));
              }
              const i = (0, Ie.heJ)(e?.uri);
              if (null == (r = i?.relay) || !r.protocol) {
                const { message: e } = (0, Ie.kCb)(
                  'MISSING_OR_INVALID',
                  'pair() uri#relay-protocol'
                );
                throw (t.setError(sr), new Error(e));
              }
              if (null == i || !i.symKey) {
                const { message: e } = (0, Ie.kCb)('MISSING_OR_INVALID', 'pair() uri#symKey');
                throw (t.setError(sr), new Error(e));
              }
              if (
                null != i &&
                i.expiryTimestamp &&
                (0, s.toMiliseconds)(i?.expiryTimestamp) < Date.now()
              ) {
                t.setError(cr);
                const { message: e } = (0, Ie.kCb)(
                  'EXPIRED',
                  'pair() URI has expired. Please try again with a new connection URI.'
                );
                throw new Error(e);
              }
            }),
            Es(this, 'isValidPing', async (e) => {
              if (!(0, Ie.EJd)(e)) {
                const { message: t } = (0, Ie.kCb)('MISSING_OR_INVALID', `ping() params: ${e}`);
                throw new Error(t);
              }
              const { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            Es(this, 'isValidDisconnect', async (e) => {
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
            Es(this, 'isValidPairingTopic', async (e) => {
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
            (this.pairings = new bs(this.core, this.logger, this.name, this.storagePrefix));
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
          this.core.relayer.on(ut, async (e) => {
            const { topic: t, message: r, transportType: i } = e;
            if (
              this.pairings.keys.includes(t) &&
              i !== Pt.link_mode &&
              !this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r))
            )
              try {
                const e = await this.core.crypto.decode(t, r);
                Fe(e)
                  ? (this.core.history.set(t, e),
                    await this.onRelayEventRequest({ topic: t, payload: e }))
                  : We(e) &&
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
          this.core.expirer.on(zt, async (e) => {
            const { topic: t } = (0, Ie.iPz)(e.target);
            t &&
              this.pairings.keys.includes(t) &&
              (await this.deletePairing(t, !0), this.events.emit(kt, { topic: t }));
          });
        }
      }
      var Ps = Object.defineProperty,
        Ss = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? Ps(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class Os extends ye {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            Ss(this, 'records', new Map()),
            Ss(this, 'events', new i.EventEmitter()),
            Ss(this, 'name', 'history'),
            Ss(this, 'version', '0.3'),
            Ss(this, 'cached', []),
            Ss(this, 'initialized', !1),
            Ss(this, 'storagePrefix', nt),
            Ss(this, 'init', async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                await this.restore(),
                this.cached.forEach((e) => this.records.set(e.id, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            Ss(this, 'set', (e, t, r) => {
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
              this.records.set(i.id, i), this.persist(), this.events.emit(Ut, i);
            }),
            Ss(this, 'resolve', async (e) => {
              if (
                (this.isInitialized(),
                this.logger.debug('Updating JSON-RPC response history record'),
                this.logger.trace({ type: 'method', method: 'update', response: e }),
                !this.records.has(e.id))
              )
                return;
              const t = await this.getRecord(e.id);
              typeof t.response > 'u' &&
                ((t.response = Ye(e) ? { error: e.error } : { result: e.result }),
                this.records.set(t.id, t),
                this.persist(),
                this.events.emit(Lt, t));
            }),
            Ss(
              this,
              'get',
              async (e, t) => (
                this.isInitialized(),
                this.logger.debug('Getting record'),
                this.logger.trace({ type: 'method', method: 'get', topic: e, id: t }),
                await this.getRecord(t)
              )
            ),
            Ss(this, 'delete', (e, t) => {
              this.isInitialized(),
                this.logger.debug('Deleting record'),
                this.logger.trace({ type: 'method', method: 'delete', id: t }),
                this.values.forEach((r) => {
                  if (r.topic === e) {
                    if (typeof t < 'u' && r.id !== t) return;
                    this.records.delete(r.id), this.events.emit(Bt, r);
                  }
                }),
                this.persist();
            }),
            Ss(
              this,
              'exists',
              async (e, t) => (
                this.isInitialized(), !!this.records.has(t) && (await this.getRecord(t)).topic === e
              )
            ),
            Ss(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            Ss(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            Ss(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            Ss(this, 'removeListener', (e, t) => {
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
                request: De(t.request.method, t.request.params, t.id),
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
          await this.setJsonRpcRecords(this.values), this.events.emit(qt);
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
          } catch (qe) {
            this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(qe);
          }
        }
        registerEventListeners() {
          this.events.on(Ut, (e) => {
            const t = Ut;
            this.logger.info(`Emitting ${t}`),
              this.logger.debug({ type: 'event', event: t, record: e });
          }),
            this.events.on(Lt, (e) => {
              const t = Lt;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, record: e });
            }),
            this.events.on(Bt, (e) => {
              const t = Bt;
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
                this.events.emit(Bt, t, !1),
                (e = !0));
            }),
              e && this.persist();
          } catch (qe) {
            this.logger.warn(qe);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = (0, Ie.kCb)('NOT_INITIALIZED', this.name);
            throw new Error(e);
          }
        }
      }
      var _s = Object.defineProperty,
        xs = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? _s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class As extends ve {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            xs(this, 'expirations', new Map()),
            xs(this, 'events', new i.EventEmitter()),
            xs(this, 'name', 'expirer'),
            xs(this, 'version', '0.3'),
            xs(this, 'cached', []),
            xs(this, 'initialized', !1),
            xs(this, 'storagePrefix', nt),
            xs(this, 'init', async () => {
              this.initialized ||
                (this.logger.trace('Initialized'),
                await this.restore(),
                this.cached.forEach((e) => this.expirations.set(e.target, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            xs(this, 'has', (e) => {
              try {
                const t = this.formatTarget(e);
                return typeof this.getExpiration(t) < 'u';
              } catch {
                return !1;
              }
            }),
            xs(this, 'set', (e, t) => {
              this.isInitialized();
              const r = this.formatTarget(e),
                i = { target: r, expiry: t };
              this.expirations.set(r, i),
                this.checkExpiry(r, i),
                this.events.emit(Mt, { target: r, expiration: i });
            }),
            xs(this, 'get', (e) => {
              this.isInitialized();
              const t = this.formatTarget(e);
              return this.getExpiration(t);
            }),
            xs(this, 'del', (e) => {
              if ((this.isInitialized(), this.has(e))) {
                const t = this.formatTarget(e),
                  r = this.getExpiration(t);
                this.expirations.delete(t), this.events.emit($t, { target: t, expiration: r });
              }
            }),
            xs(this, 'on', (e, t) => {
              this.events.on(e, t);
            }),
            xs(this, 'once', (e, t) => {
              this.events.once(e, t);
            }),
            xs(this, 'off', (e, t) => {
              this.events.off(e, t);
            }),
            xs(this, 'removeListener', (e, t) => {
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
          await this.setExpirations(this.values), this.events.emit(Ht);
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
          } catch (qe) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`),
              this.logger.error(qe);
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
          this.expirations.delete(e), this.events.emit(zt, { target: e, expiration: t });
        }
        checkExpirations() {
          this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e));
        }
        registerEventListeners() {
          this.core.heartbeat.on(h, () => this.checkExpirations()),
            this.events.on(Mt, (e) => {
              const t = Mt;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, data: e }),
                this.persist();
            }),
            this.events.on(zt, (e) => {
              const t = zt;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: 'event', event: t, data: e }),
                this.persist();
            }),
            this.events.on($t, (e) => {
              const t = $t;
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
      var Ts = Object.defineProperty,
        Cs = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? Ts(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class Ns extends class {
        constructor(e, t, r) {
          (this.core = e), (this.logger = t), (this.store = r);
        }
      } {
        constructor(e, t, r) {
          super(e, t, r),
            (this.core = e),
            (this.logger = t),
            (this.store = r),
            Cs(this, 'name', 'verify-api'),
            Cs(this, 'abortController'),
            Cs(this, 'isDevEnv'),
            Cs(this, 'verifyUrlV3', Ft),
            Cs(this, 'storagePrefix', nt),
            Cs(this, 'version', 2),
            Cs(this, 'publicKey'),
            Cs(this, 'fetchPromise'),
            Cs(this, 'init', async () => {
              var e;
              this.isDevEnv ||
                ((this.publicKey = await this.store.getItem(this.storeKey)),
                this.publicKey &&
                  (0, s.toMiliseconds)(null == (e = this.publicKey) ? void 0 : e.expiresAt) <
                    Date.now() &&
                  (this.logger.debug('verify v2 public key expired'),
                  await this.removePublicKey()));
            }),
            Cs(this, 'register', async (e) => {
              if (!(0, Ie.jUY)() || this.isDevEnv) return;
              const t = window.location.origin,
                { id: r, decryptedId: i } = e,
                n = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${t}&id=${r}&decryptedId=${i}`;
              try {
                const e = (0, et.getDocument)(),
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
            Cs(this, 'resolve', async (e) => {
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
            Cs(this, 'fetchAttestation', async (e, t) => {
              this.logger.debug(`resolving attestation: ${e} from url: ${t}`);
              const r = this.startAbortTimer(5 * s.ONE_SECOND),
                i = await fetch(`${t}/attestation/${e}?v2Supported=true`, {
                  signal: this.abortController.signal,
                });
              return clearTimeout(r), 200 === i.status ? await i.json() : void 0;
            }),
            Cs(this, 'getVerifyUrl', (e) => {
              let t = e || Kt;
              return (
                Wt.includes(t) ||
                  (this.logger.info(
                    `verify url: ${t}, not included in trusted list, assigning default: ${Kt}`
                  ),
                  (t = Kt)),
                t
              );
            }),
            Cs(this, 'fetchPublicKey', async () => {
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
            Cs(this, 'persistPublicKey', async (e) => {
              this.logger.debug('persisting public key to local storage', e),
                await this.store.setItem(this.storeKey, e),
                (this.publicKey = e);
            }),
            Cs(this, 'removePublicKey', async () => {
              this.logger.debug('removing verify v2 public key from storage'),
                await this.store.removeItem(this.storeKey),
                (this.publicKey = void 0);
            }),
            Cs(this, 'isValidJwtAttestation', async (e) => {
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
            Cs(this, 'getPublicKey', async () =>
              this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey()
            ),
            Cs(this, 'fetchAndPersistPublicKey', async () => {
              if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
              this.fetchPromise = new Promise(async (e) => {
                const t = await this.fetchPublicKey();
                t && (await this.persistPublicKey(t), e(t));
              });
              const e = await this.fetchPromise;
              return (this.fetchPromise = void 0), e;
            }),
            Cs(this, 'validateAttestation', (e, t) => {
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
      var Rs = Object.defineProperty,
        ks = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? Rs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class js extends class {
        constructor(e, t) {
          (this.projectId = e), (this.logger = t);
        }
      } {
        constructor(e, t) {
          super(e, t),
            (this.projectId = e),
            (this.logger = t),
            ks(this, 'context', 'echo'),
            ks(this, 'registerDeviceToken', async (e) => {
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
      var Ds = Object.defineProperty,
        Us = Object.getOwnPropertySymbols,
        Ls = Object.prototype.hasOwnProperty,
        Bs = Object.prototype.propertyIsEnumerable,
        qs = (e, t, r) =>
          t in e
            ? Ds(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        Ms = (e, t) => {
          for (var r in t || (t = {})) Ls.call(t, r) && qs(e, r, t[r]);
          if (Us) for (var r of Us(t)) Bs.call(t, r) && qs(e, r, t[r]);
          return e;
        },
        $s = (e, t, r) => qs(e, 'symbol' != typeof t ? t + '' : t, r);
      class zs extends class {
        constructor(e, t, r) {
          (this.core = e), (this.logger = t), (this.telemetryEnabled = r);
        }
      } {
        constructor(e, t, r = !0) {
          super(e, t, r),
            (this.core = e),
            (this.logger = t),
            $s(this, 'context', 'event-client'),
            $s(this, 'storagePrefix', nt),
            $s(this, 'storageVersion', 0.1),
            $s(this, 'events', new Map()),
            $s(this, 'shouldPersist', !1),
            $s(this, 'init', async () => {
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
                          It
                        ),
                      },
                    },
                  };
                  await this.sendEvent([e]);
                } catch (c) {
                  this.logger.warn(c);
                }
            }),
            $s(this, 'createEvent', (e) => {
              const {
                  event: t = 'ERROR',
                  type: r = '',
                  properties: { topic: i, trace: n },
                } = e,
                s = (0, Ie.k$y)(),
                o = this.core.projectId || '',
                a = Date.now(),
                c = Ms(
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
            $s(this, 'getEvent', (e) => {
              const { eventId: t, topic: r } = e;
              if (t) return this.events.get(t);
              const i = Array.from(this.events.values()).find(
                (e) => e.props.properties.topic === r
              );
              return i ? Ms(Ms({}, i), this.setMethods(i.eventId)) : void 0;
            }),
            $s(this, 'deleteEvent', (e) => {
              const { eventId: t } = e;
              this.events.delete(t), (this.shouldPersist = !0);
            }),
            $s(this, 'setEventListeners', () => {
              this.core.heartbeat.on(h, async () => {
                this.shouldPersist && (await this.persist()),
                  this.events.forEach((e) => {
                    (0, s.fromMiliseconds)(Date.now()) - (0, s.fromMiliseconds)(e.timestamp) >
                      86400 && (this.events.delete(e.eventId), (this.shouldPersist = !0));
                  });
              });
            }),
            $s(this, 'setMethods', (e) => ({
              addTrace: (t) => this.addTrace(e, t),
              setError: (t) => this.setError(e, t),
            })),
            $s(this, 'addTrace', (e, t) => {
              const r = this.events.get(e);
              r &&
                (r.props.properties.trace.push(t),
                this.events.set(e, r),
                (this.shouldPersist = !0));
            }),
            $s(this, 'setError', (e, t) => {
              const r = this.events.get(e);
              r &&
                ((r.props.type = t),
                (r.timestamp = Date.now()),
                this.events.set(e, r),
                (this.shouldPersist = !0));
            }),
            $s(this, 'persist', async () => {
              await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())),
                (this.shouldPersist = !1);
            }),
            $s(this, 'restore', async () => {
              try {
                const e = (await this.core.storage.getItem(this.storageKey)) || [];
                if (!e.length) return;
                e.forEach((e) => {
                  this.events.set(e.eventId, Ms(Ms({}, e), this.setMethods(e.eventId)));
                });
              } catch (c) {
                this.logger.warn(c);
              }
            }),
            $s(this, 'submit', async () => {
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
            $s(this, 'sendEvent', async (e) => {
              const t = this.getAppDomain() ? '' : '&sp=desktop';
              return await fetch(
                `https://pulse.walletconnect.org/batch?projectId=${this.core.projectId}&st=events_sdk&sv=js-${It}${t}`,
                { method: 'POST', body: JSON.stringify(e) }
              );
            }),
            $s(this, 'getAppDomain', () => (0, Ie.DaH)().url),
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
      var Hs = Object.defineProperty,
        Vs = Object.getOwnPropertySymbols,
        Ks = Object.prototype.hasOwnProperty,
        Fs = Object.prototype.propertyIsEnumerable,
        Ws = (e, t, r) =>
          t in e
            ? Hs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        Gs = (e, t) => {
          for (var r in t || (t = {})) Ks.call(t, r) && Ws(e, r, t[r]);
          if (Vs) for (var r of Vs(t)) Fs.call(t, r) && Ws(e, r, t[r]);
          return e;
        },
        Ys = (e, t, r) => Ws(e, 'symbol' != typeof t ? t + '' : t, r);
      class Js extends pe {
        constructor(e) {
          var t;
          super(e),
            Ys(this, 'protocol', 'wc'),
            Ys(this, 'version', 2),
            Ys(this, 'name', it),
            Ys(this, 'relayUrl'),
            Ys(this, 'projectId'),
            Ys(this, 'customStoragePrefix'),
            Ys(this, 'events', new i.EventEmitter()),
            Ys(this, 'logger'),
            Ys(this, 'heartbeat'),
            Ys(this, 'relayer'),
            Ys(this, 'crypto'),
            Ys(this, 'storage'),
            Ys(this, 'history'),
            Ys(this, 'expirer'),
            Ys(this, 'pairing'),
            Ys(this, 'verify'),
            Ys(this, 'echoClient'),
            Ys(this, 'linkModeSupportedApps'),
            Ys(this, 'eventClient'),
            Ys(this, 'initialized', !1),
            Ys(this, 'logChunkController'),
            Ys(this, 'on', (e, t) => this.events.on(e, t)),
            Ys(this, 'once', (e, t) => this.events.once(e, t)),
            Ys(this, 'off', (e, t) => this.events.off(e, t)),
            Ys(this, 'removeListener', (e, t) => this.events.removeListener(e, t)),
            Ys(this, 'dispatchEnvelope', ({ topic: e, message: t, sessionExists: r }) => {
              if (!e || !t) return;
              const i = {
                topic: e,
                message: t,
                publishedAt: Date.now(),
                transportType: Pt.link_mode,
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
            (this.relayUrl = e?.relayUrl || lt),
            (this.customStoragePrefix =
              null != e && e.customStoragePrefix ? `:${e.customStoragePrefix}` : '');
          const n = ae({
              level: 'string' == typeof e?.logger && e.logger ? e.logger : st,
              name: it,
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
            (this.crypto = new fn(this, this.logger, e?.keychain)),
            (this.history = new Os(this, this.logger)),
            (this.expirer = new As(this, this.logger)),
            (this.storage =
              null != e && e.storage ? e.storage : new z(Gs(Gs({}, ot), e?.storageOptions))),
            (this.relayer = new rs({
              core: this,
              logger: this.logger,
              relayUrl: this.relayUrl,
              projectId: this.projectId,
            })),
            (this.pairing = new Is(this, this.logger)),
            (this.verify = new Ns(this, this.logger, this.storage)),
            (this.echoClient = new js(this.projectId || '', this.logger)),
            (this.linkModeSupportedApps = []),
            (this.eventClient = new zs(this, this.logger, e?.telemetryEnabled)),
            this.setGlobalCore(this);
        }
        static async init(e) {
          const t = new Js(e);
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
            await this.storage.setItem(_t, this.linkModeSupportedApps));
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
              (this.linkModeSupportedApps = (await this.storage.getItem(_t)) || []),
              (this.initialized = !0),
              this.logger.info('Core Initialization Success');
          } catch (qe) {
            throw (
              (this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, qe),
              this.logger.error(qe.message),
              qe)
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
            return typeof rt < 'u' && 'true' === rt.env.DISABLE_GLOBAL_CORE;
          } catch {
            return !0;
          }
        }
      }
      const Zs = Js;
      Object.defineProperty;
      Object.defineProperty;
      Object.defineProperty;
      var Qs = Object.defineProperty,
        Xs = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? Qs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      const eo = 'client',
        to = 'wc@2:client:',
        ro = eo,
        io = 'error',
        no = 'WALLETCONNECT_DEEPLINK_CHOICE',
        so = 'Proposal expired',
        oo = s.SEVEN_DAYS,
        ao = {
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
        co = { min: s.FIVE_MINUTES, max: s.SEVEN_DAYS },
        ho = 'IDLE',
        lo = 'ACTIVE',
        uo = {
          eth_sendTransaction: { key: '' },
          eth_sendRawTransaction: { key: '' },
          wallet_sendCalls: { key: '' },
          solana_signTransaction: { key: 'signature' },
          solana_signAllTransactions: { key: 'transactions' },
          solana_signAndSendTransaction: { key: 'signature' },
        },
        po = ['wc_sessionPropose', 'wc_sessionRequest', 'wc_authRequest', 'wc_sessionAuthenticate'],
        fo = 'wc@1.5:auth:',
        go = `${fo}:PUB_KEY`;
      var yo = Object.defineProperty,
        mo = Object.defineProperties,
        wo = Object.getOwnPropertyDescriptors,
        bo = Object.getOwnPropertySymbols,
        vo = Object.prototype.hasOwnProperty,
        Eo = Object.prototype.propertyIsEnumerable,
        Io = (e, t, r) =>
          t in e
            ? yo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        Po = (e, t) => {
          for (var r in t || (t = {})) vo.call(t, r) && Io(e, r, t[r]);
          if (bo) for (var r of bo(t)) Eo.call(t, r) && Io(e, r, t[r]);
          return e;
        },
        So = (e, t) => mo(e, wo(t)),
        Oo = (e, t, r) => Io(e, 'symbol' != typeof t ? t + '' : t, r);
      class _o extends class {
        constructor(e) {
          this.client = e;
        }
      } {
        constructor(e) {
          super(e),
            Oo(this, 'name', 'engine'),
            Oo(this, 'events', new (n())()),
            Oo(this, 'initialized', !1),
            Oo(this, 'requestQueue', { state: ho, queue: [] }),
            Oo(this, 'sessionRequestQueue', { state: ho, queue: [] }),
            Oo(this, 'requestQueueDelay', s.ONE_SECOND),
            Oo(this, 'expectedPairingMethodMap', new Map()),
            Oo(this, 'recentlyDeletedMap', new Map()),
            Oo(this, 'recentlyDeletedLimit', 200),
            Oo(this, 'relayMessageCache', []),
            Oo(this, 'pendingSessions', new Map()),
            Oo(this, 'init', async () => {
              this.initialized ||
                (await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                this.registerPairingEvents(),
                await this.registerLinkModeListeners(),
                this.client.core.pairing.register({ methods: Object.keys(ao) }),
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
            Oo(this, 'connect', async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              const t = So(Po({}, e), {
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
                p = ao.wc_sessionPropose.req.ttl || s.FIVE_MINUTES,
                f = (0, Ie.gn4)(p),
                g = So(
                  Po(
                    Po(
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
                  { id: ke() }
                ),
                y = (0, Ie.E0T)('session_connect', g.id),
                { reject: m, resolve: w, done: b } = (0, Ie.H1S)(p, so),
                v = ({ id: e }) => {
                  e === g.id &&
                    (this.client.events.off('proposal_expire', v),
                    this.pendingSessions.delete(g.id),
                    this.events.emit(y, { error: { message: so, code: 0 } }));
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
            Oo(this, 'pair', async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                return await this.client.core.pairing.pair(e);
              } catch (t) {
                throw (this.client.logger.error('pair() failed'), t);
              }
            }),
            Oo(this, 'approve', async (e) => {
              var t, r, i;
              const n = this.client.core.eventClient.createEvent({
                properties: { topic: null == (t = e?.id) ? void 0 : t.toString(), trace: [lr] },
              });
              try {
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
              } catch (P) {
                throw (n.setError(br), P);
              }
              try {
                await this.isValidProposalId(e?.id);
              } catch (P) {
                throw (
                  (this.client.logger.error(`approve() -> proposal.get(${e?.id}) failed`),
                  n.setError(Or),
                  P)
                );
              }
              try {
                await this.isValidApprove(e);
              } catch (P) {
                throw (
                  (this.client.logger.error('approve() -> isValidApprove() failed'),
                  n.setError(Sr),
                  P)
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
                    : i.createEvent({ type: lr, properties: { topic: d, trace: [lr, ur] } }));
              const m = await this.client.core.crypto.generateKeyPair(),
                w = p.publicKey,
                b = await this.client.core.crypto.generateSharedKey(m, w),
                v = Po(
                  Po(
                    Po(
                      {
                        relay: { protocol: o ?? 'irn' },
                        namespaces: a,
                        controller: { publicKey: m, metadata: this.client.metadata },
                        expiry: (0, Ie.gn4)(oo),
                      },
                      c && { sessionProperties: c }
                    ),
                    h && { scopedProperties: h }
                  ),
                  l && { sessionConfig: l }
                ),
                E = Pt.relay;
              y.addTrace(dr);
              try {
                await this.client.core.relayer.subscribe(b, { transportType: E });
              } catch (P) {
                throw (y.setError(Er), P);
              }
              y.addTrace(pr);
              const I = So(Po({}, v), {
                topic: b,
                requiredNamespaces: f,
                optionalNamespaces: g,
                pairingTopic: d,
                acknowledged: !1,
                self: v.controller,
                peer: { publicKey: p.publicKey, metadata: p.metadata },
                controller: m,
                transportType: Pt.relay,
              });
              await this.client.session.set(b, I), y.addTrace(yr);
              try {
                y.addTrace(mr),
                  await this.sendRequest({
                    topic: b,
                    method: 'wc_sessionSettle',
                    params: v,
                    throwOnFailedPublish: !0,
                  }).catch((e) => {
                    throw (y?.setError(Pr), e);
                  }),
                  y.addTrace(wr),
                  y.addTrace(fr),
                  await this.sendResult({
                    id: s,
                    topic: d,
                    result: { relay: { protocol: o ?? 'irn' }, responderPublicKey: m },
                    throwOnFailedPublish: !0,
                  }).catch((e) => {
                    throw (y?.setError(Ir), e);
                  }),
                  y.addTrace(gr);
              } catch (P) {
                throw (
                  (this.client.logger.error(P),
                  this.client.session.delete(b, (0, Ie.D6H)('USER_DISCONNECTED')),
                  await this.client.core.relayer.unsubscribe(b),
                  P)
                );
              }
              return (
                this.client.core.eventClient.deleteEvent({ eventId: y.eventId }),
                await this.client.core.pairing.updateMetadata({ topic: d, metadata: p.metadata }),
                await this.client.proposal.delete(s, (0, Ie.D6H)('USER_DISCONNECTED')),
                await this.client.core.pairing.activate({ topic: d }),
                await this.setExpiry(b, (0, Ie.gn4)(oo)),
                { topic: b, acknowledged: () => Promise.resolve(this.client.session.get(b)) }
              );
            }),
            Oo(this, 'reject', async (e) => {
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
                  rpcOpts: ao.wc_sessionPropose.reject,
                }),
                await this.client.proposal.delete(t, (0, Ie.D6H)('USER_DISCONNECTED')));
            }),
            Oo(this, 'update', async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidUpdate(e);
              } catch (z) {
                throw (this.client.logger.error('update() -> isValidUpdate() failed'), z);
              }
              const { topic: t, namespaces: r } = e,
                { done: i, resolve: n, reject: s } = (0, Ie.H1S)(),
                o = ke(),
                a = je().toString(),
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
            Oo(this, 'extend', async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidExtend(e);
              } catch (ue) {
                throw (this.client.logger.error('extend() -> isValidExtend() failed'), ue);
              }
              const { topic: t } = e,
                r = ke(),
                { done: i, resolve: n, reject: s } = (0, Ie.H1S)();
              return (
                this.events.once((0, Ie.E0T)('session_extend', r), ({ error: e }) => {
                  e ? s(e) : n();
                }),
                await this.setExpiry(t, (0, Ie.gn4)(oo)),
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
            Oo(this, 'request', async (e) => {
              this.isInitialized();
              try {
                await this.isValidRequest(e);
              } catch (U) {
                throw (this.client.logger.error('request() -> isValidRequest() failed'), U);
              }
              const {
                  chainId: t,
                  request: r,
                  topic: i,
                  expiry: n = ao.wc_sessionRequest.req.ttl,
                } = e,
                s = this.client.session.get(i);
              s?.transportType === Pt.relay && (await this.confirmOnlineStateOrThrow());
              const o = ke(),
                a = je().toString(),
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
                      request: So(Po({}, r), { expiryTimestamp: (0, Ie.gn4)(n) }),
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
              const p = { request: So(Po({}, r), { expiryTimestamp: (0, Ie.gn4)(n) }), chainId: t },
                f = this.shouldSetTVF(u, p);
              return await Promise.all([
                new Promise(async (e) => {
                  await this.sendRequest(
                    Po(
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
                    const e = await (0, Ie.bW6)(this.client.core.storage, no);
                    await (0, Ie.HhN)({ id: o, topic: i, wcDeepLink: e });
                  }
                  e();
                }),
                c(),
              ]).then((e) => e[2]);
            }),
            Oo(this, 'respond', async (e) => {
              this.isInitialized(), await this.isValidRespond(e);
              const { topic: t, response: r } = e,
                { id: i } = r,
                n = this.client.session.get(t);
              n.transportType === Pt.relay && (await this.confirmOnlineStateOrThrow());
              const s = this.getAppLinkIfEnabled(n.peer.metadata, n.transportType);
              Ge(r)
                ? await this.sendResult({
                    id: i,
                    topic: t,
                    result: r.result,
                    throwOnFailedPublish: !0,
                    appLink: s,
                  })
                : Ye(r) && (await this.sendError({ id: i, topic: t, error: r.error, appLink: s })),
                this.cleanupAfterResponse(e);
            }),
            Oo(this, 'ping', async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidPing(e);
              } catch (c) {
                throw (this.client.logger.error('ping() -> isValidPing() failed'), c);
              }
              const { topic: t } = e;
              if (this.client.session.keys.includes(t)) {
                const e = ke(),
                  r = je().toString(),
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
            Oo(this, 'emit', async (e) => {
              this.isInitialized(),
                await this.confirmOnlineStateOrThrow(),
                await this.isValidEmit(e);
              const { topic: t, event: r, chainId: i } = e,
                n = je().toString(),
                s = ke();
              await this.sendRequest({
                topic: t,
                method: 'wc_sessionEvent',
                params: { event: r, chainId: i },
                throwOnFailedPublish: !0,
                relayRpcId: n,
                clientRpcId: s,
              });
            }),
            Oo(this, 'disconnect', async (e) => {
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
            Oo(
              this,
              'find',
              (e) => (
                this.isInitialized(), this.client.session.getAll().filter((t) => (0, Ie.Ih8)(t, e))
              )
            ),
            Oo(this, 'getPendingSessionRequests', () => this.client.pendingRequest.getAll()),
            Oo(this, 'authenticate', async (e, t) => {
              var r;
              this.isInitialized(), this.isValidAuthenticate(e);
              const i =
                  t &&
                  this.client.core.linkModeSupportedApps.includes(t) &&
                  (null == (r = this.client.metadata.redirect) ? void 0 : r.linkMode),
                n = i ? Pt.link_mode : Pt.relay;
              n === Pt.relay && (await this.confirmOnlineStateOrThrow());
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
                  this.client.auth.authKeys.set(go, { responseTopic: b, publicKey: w }),
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
                  f && f > ao.wc_sessionAuthenticate.req.ttl
                    ? f
                    : ao.wc_sessionAuthenticate.req.ttl,
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
                  expiryTimestamp: (0, Ie.gn4)(ao.wc_sessionPropose.req.ttl),
                  id: ke(),
                },
                { done: P, resolve: S, reject: O } = (0, Ie.H1S)(v, 'Request expired'),
                _ = ke(),
                x = (0, Ie.E0T)('session_connect', I.id),
                A = (0, Ie.E0T)('session_request', _),
                T = async ({ error: e, session: t }) => {
                  this.events.off(A, C), e ? O(e) : t && S({ session: t });
                },
                C = async (e) => {
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
                      expiry: (0, Ie.gn4)(oo),
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
                      this.client.session.update(l, { transportType: Pt.link_mode })),
                    S({ auths: o, session: u });
                };
              let N;
              this.events.once(x, T), this.events.once(A, C);
              try {
                if (i) {
                  const e = De('wc_sessionAuthenticate', E, _);
                  this.client.core.history.set(y, e);
                  const r = await this.client.core.crypto.encode('', e, {
                    type: Ie.FpL,
                    encoding: Ie.zl_,
                  });
                  N = (0, Ie.L9d)(t, y, r);
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
                      expiry: ao.wc_sessionPropose.req.ttl,
                      throwOnFailedPublish: !0,
                      clientRpcId: I.id,
                    }),
                  ]);
              } catch (R) {
                throw (this.events.off(x, T), this.events.off(A, C), R);
              }
              return (
                await this.setProposal(I.id, I),
                await this.setAuthRequest(_, {
                  request: So(Po({}, E), { verifyContext: {} }),
                  pairingTopic: y,
                  transportType: n,
                }),
                { uri: N ?? m, response: P }
              );
            }),
            Oo(this, 'approveSessionAuthenticate', async (e) => {
              const { id: t, auths: r } = e,
                i = this.client.core.eventClient.createEvent({
                  properties: { topic: t.toString(), trace: [_r] },
                });
              try {
                this.isInitialized();
              } catch (ne) {
                throw (i.setError(kr), ne);
              }
              const n = this.getPendingAuthRequest(t);
              if (!n)
                throw (
                  (i.setError(Lr), new Error(`Could not find pending auth request with id ${t}`))
                );
              const s = n.transportType || Pt.relay;
              s === Pt.relay && (await this.confirmOnlineStateOrThrow());
              const o = n.requester.publicKey,
                a = await this.client.core.crypto.generateKeyPair(),
                c = (0, Ie.YmJ)(o),
                h = { type: Ie.rVF, receiverPublicKey: o, senderPublicKey: a },
                l = [],
                u = [];
              for (const f of r) {
                if (!(await (0, Ie.c4l)({ cacao: f, projectId: this.client.core.projectId }))) {
                  i.setError(jr);
                  const e = (0, Ie.D6H)(
                    'SESSION_SETTLEMENT_FAILED',
                    'Signature verification failed'
                  );
                  throw (
                    (await this.sendError({ id: t, topic: c, error: e, encodeOpts: h }),
                    new Error(e.message))
                  );
                }
                i.addTrace(Ar);
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
              if ((i.addTrace(xr), l?.length > 0)) {
                (p = {
                  topic: d,
                  acknowledged: !0,
                  self: { publicKey: a, metadata: this.client.metadata },
                  peer: { publicKey: o, metadata: n.requester.metadata },
                  controller: o,
                  expiry: (0, Ie.gn4)(oo),
                  authentication: r,
                  requiredNamespaces: {},
                  optionalNamespaces: {},
                  relay: { protocol: 'irn' },
                  pairingTopic: n.pairingTopic,
                  namespaces: (0, Ie.E12)([...new Set(l)], [...new Set(u)]),
                  transportType: s,
                }),
                  i.addTrace(Cr);
                try {
                  await this.client.core.relayer.subscribe(d, { transportType: s });
                } catch (ne) {
                  throw (i.setError(Dr), ne);
                }
                i.addTrace(Nr),
                  await this.client.session.set(d, p),
                  i.addTrace(Tr),
                  await this.client.core.pairing.updateMetadata({
                    topic: n.pairingTopic,
                    metadata: n.requester.metadata,
                  });
              }
              i.addTrace(Rr);
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
                throw (i.setError(Ur), ne);
              }
              return (
                await this.client.auth.requests.delete(t, { message: 'fulfilled', code: 0 }),
                await this.client.core.pairing.activate({ topic: n.pairingTopic }),
                this.client.core.eventClient.deleteEvent({ eventId: i.eventId }),
                { session: p }
              );
            }),
            Oo(this, 'rejectSessionAuthenticate', async (e) => {
              this.isInitialized();
              const { id: t, reason: r } = e,
                i = this.getPendingAuthRequest(t);
              if (!i) throw new Error(`Could not find pending auth request with id ${t}`);
              i.transportType === Pt.relay && (await this.confirmOnlineStateOrThrow());
              const n = i.requester.publicKey,
                s = await this.client.core.crypto.generateKeyPair(),
                o = (0, Ie.YmJ)(n),
                a = { type: Ie.rVF, receiverPublicKey: n, senderPublicKey: s };
              await this.sendError({
                id: t,
                topic: o,
                error: r,
                encodeOpts: a,
                rpcOpts: ao.wc_sessionAuthenticate.reject,
                appLink: this.getAppLinkIfEnabled(i.requester.metadata, i.transportType),
              }),
                await this.client.auth.requests.delete(t, { message: 'rejected', code: 0 }),
                await this.client.proposal.delete(t, (0, Ie.D6H)('USER_DISCONNECTED'));
            }),
            Oo(this, 'formatAuthMessage', (e) => {
              this.isInitialized();
              const { request: t, iss: r } = e;
              return (0, Ie.wvx)(t, r);
            }),
            Oo(this, 'processRelayMessageCache', () => {
              setTimeout(async () => {
                if (0 !== this.relayMessageCache.length)
                  for (; this.relayMessageCache.length > 0; )
                    try {
                      const e = this.relayMessageCache.shift();
                      e && (await this.onRelayMessage(e));
                    } catch (qe) {
                      this.client.logger.error(qe);
                    }
              }, 50);
            }),
            Oo(this, 'cleanupDuplicatePairings', async (e) => {
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
            Oo(this, 'deleteSession', async (e) => {
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
                this.client.core.storage.removeItem(no).catch((e) => this.client.logger.warn(e)),
                this.getPendingSessionRequests().forEach((e) => {
                  e.topic === r &&
                    this.deletePendingSessionRequest(e.id, (0, Ie.D6H)('USER_DISCONNECTED'));
                }),
                r === (null == (t = this.sessionRequestQueue.queue[0]) ? void 0 : t.topic) &&
                  (this.sessionRequestQueue.state = ho),
                n && this.client.events.emit('session_delete', { id: s, topic: r });
            }),
            Oo(this, 'deleteProposal', async (e, t) => {
              if (t)
                try {
                  const t = this.client.proposal.get(e);
                  this.client.core.eventClient.getEvent({ topic: t.pairingTopic })?.setError(vr);
                } catch {}
              await Promise.all([
                this.client.proposal.delete(e, (0, Ie.D6H)('USER_DISCONNECTED')),
                t ? Promise.resolve() : this.client.core.expirer.del(e),
              ]),
                this.addToRecentlyDeleted(e, 'proposal');
            }),
            Oo(this, 'deletePendingSessionRequest', async (e, t, r = !1) => {
              await Promise.all([
                this.client.pendingRequest.delete(e, t),
                r ? Promise.resolve() : this.client.core.expirer.del(e),
              ]),
                this.addToRecentlyDeleted(e, 'request'),
                (this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter(
                  (t) => t.id !== e
                )),
                r &&
                  ((this.sessionRequestQueue.state = ho),
                  this.client.events.emit('session_request_expire', { id: e }));
            }),
            Oo(this, 'deletePendingAuthRequest', async (e, t, r = !1) => {
              await Promise.all([
                this.client.auth.requests.delete(e, t),
                r ? Promise.resolve() : this.client.core.expirer.del(e),
              ]);
            }),
            Oo(this, 'setExpiry', async (e, t) => {
              this.client.session.keys.includes(e) &&
                (this.client.core.expirer.set(e, t),
                await this.client.session.update(e, { expiry: t }));
            }),
            Oo(this, 'setProposal', async (e, t) => {
              this.client.core.expirer.set(e, (0, Ie.gn4)(ao.wc_sessionPropose.req.ttl)),
                await this.client.proposal.set(e, t);
            }),
            Oo(this, 'setAuthRequest', async (e, t) => {
              const { request: r, pairingTopic: i, transportType: n = Pt.relay } = t;
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
            Oo(this, 'setPendingSessionRequest', async (e) => {
              const { id: t, topic: r, params: i, verifyContext: n } = e,
                s = i.request.expiryTimestamp || (0, Ie.gn4)(ao.wc_sessionRequest.req.ttl);
              this.client.core.expirer.set(t, s),
                await this.client.pendingRequest.set(t, {
                  id: t,
                  topic: r,
                  params: i,
                  verifyContext: n,
                });
            }),
            Oo(this, 'sendRequest', async (e) => {
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
                u = De(i, n, a);
              let d;
              const p = !!h;
              try {
                const e = p ? Ie.zl_ : Ie.$dT;
                d = await this.client.core.crypto.encode(t, u, { encoding: e });
              } catch (U) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendRequest() -> core.crypto.encode() for topic ${t} failed`
                  ),
                  U)
                );
              }
              let f;
              if (po.includes(i)) {
                const e = (0, Ie.rjm)(JSON.stringify(u)),
                  t = (0, Ie.rjm)(d);
                f = await this.client.core.verify.register({ id: t, decryptedId: e });
              }
              const g = ao[i].req;
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
                const e = ao[i].req;
                s && (e.ttl = s),
                  o && (e.id = o),
                  (e.tvf = So(Po({}, l), { correlationId: u.id })),
                  c
                    ? ((e.internal = So(Po({}, e.internal), { throwOnFailedPublish: !0 })),
                      await this.client.core.relayer.publish(t, d, e))
                    : this.client.core.relayer
                        .publish(t, d, e)
                        .catch((e) => this.client.logger.error(e));
              }
              return u.id;
            }),
            Oo(this, 'sendResult', async (e) => {
              const {
                  id: t,
                  topic: i,
                  result: n,
                  throwOnFailedPublish: s,
                  encodeOpts: o,
                  appLink: a,
                } = e,
                c = Ue(t, n);
              let h;
              const l = a && typeof (null == r.g ? void 0 : r.g.Linking) < 'u';
              try {
                const e = l ? Ie.zl_ : Ie.$dT;
                h = await this.client.core.crypto.encode(
                  i,
                  c,
                  So(Po({}, o || {}), { encoding: e })
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
                  r = ao[e].res;
                (r.tvf = So(Po({}, d), { correlationId: t })),
                  s
                    ? ((r.internal = So(Po({}, r.internal), { throwOnFailedPublish: !0 })),
                      await this.client.core.relayer.publish(i, h, r))
                    : this.client.core.relayer
                        .publish(i, h, r)
                        .catch((e) => this.client.logger.error(e));
              }
              await this.client.core.history.resolve(c);
            }),
            Oo(this, 'sendError', async (e) => {
              const { id: t, topic: i, error: n, encodeOpts: s, rpcOpts: o, appLink: a } = e,
                c = Le(t, n);
              let h;
              const l = a && typeof (null == r.g ? void 0 : r.g.Linking) < 'u';
              try {
                const e = l ? Ie.zl_ : Ie.$dT;
                h = await this.client.core.crypto.encode(
                  i,
                  c,
                  So(Po({}, s || {}), { encoding: e })
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
                  t = o || ao[e].res;
                this.client.core.relayer.publish(i, h, t);
              }
              await this.client.core.history.resolve(c);
            }),
            Oo(this, 'cleanup', async () => {
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
            Oo(this, 'onProviderMessageEvent', async (e) => {
              !this.initialized || this.relayMessageCache.length > 0
                ? this.relayMessageCache.push(e)
                : await this.onRelayMessage(e);
            }),
            Oo(this, 'onRelayEventRequest', async (e) => {
              this.requestQueue.queue.push(e), await this.processRequestsQueue();
            }),
            Oo(this, 'processRequestsQueue', async () => {
              if (this.requestQueue.state !== lo) {
                for (
                  this.client.logger.info(
                    `Request queue starting with ${this.requestQueue.queue.length} requests`
                  );
                  this.requestQueue.queue.length > 0;

                ) {
                  this.requestQueue.state = lo;
                  const t = this.requestQueue.queue.shift();
                  if (t)
                    try {
                      await this.processRequest(t);
                    } catch (e) {
                      this.client.logger.warn(e);
                    }
                }
                this.requestQueue.state = ho;
              } else this.client.logger.info('Request queue already active, skipping...');
            }),
            Oo(this, 'processRequest', async (e) => {
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
            Oo(this, 'onRelayEventResponse', async (e) => {
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
            Oo(this, 'onRelayEventUnknownPayload', (e) => {
              const { topic: t } = e,
                { message: r } = (0, Ie.kCb)(
                  'MISSING_OR_INVALID',
                  `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`
                );
              throw new Error(r);
            }),
            Oo(this, 'shouldIgnorePairingRequest', (e) => {
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
            Oo(this, 'onSessionProposeRequest', async (e) => {
              const { topic: t, payload: r, attestation: i, encryptedId: n } = e,
                { params: s, id: o } = r;
              try {
                const e = this.client.core.eventClient.getEvent({ topic: t });
                0 === this.client.events.listenerCount('session_proposal') &&
                  (console.warn('No listener for session_proposal event'), e?.setError(hr)),
                  this.isValidConnect(Po({}, r.params));
                const a = s.expiryTimestamp || (0, Ie.gn4)(ao.wc_sessionPropose.req.ttl),
                  c = Po({ id: o, pairingTopic: t, expiryTimestamp: a }, s);
                await this.setProposal(o, c);
                const h = await this.getVerifyContext({
                  attestationId: i,
                  hash: (0, Ie.rjm)(JSON.stringify(r)),
                  encryptedId: n,
                  metadata: c.proposer.metadata,
                });
                e?.addTrace(ir),
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
                  rpcOpts: ao.wc_sessionPropose.autoReject,
                }),
                  this.client.logger.error(a);
              }
            }),
            Oo(this, 'onSessionProposeResponse', async (e, t, r) => {
              const { id: i } = t;
              if (Ge(t)) {
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
              } else if (Ye(t)) {
                await this.client.proposal.delete(i, (0, Ie.D6H)('USER_DISCONNECTED'));
                const e = (0, Ie.E0T)('session_connect', i);
                if (0 === this.events.listenerCount(e))
                  throw new Error(`emitting ${e} without any listeners, 954`);
                this.events.emit(e, { error: t.error });
              }
            }),
            Oo(this, 'onSessionSettleRequest', async (e, t) => {
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
                  d = So(
                    Po(
                      Po(
                        Po(
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
                    { transportType: Pt.relay }
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
            Oo(this, 'onSessionSettleResponse', async (e, t) => {
              const { id: r } = t;
              Ge(t)
                ? (await this.client.session.update(e, { acknowledged: !0 }),
                  this.events.emit((0, Ie.E0T)('session_approve', r), {}))
                : Ye(t) &&
                  (await this.client.session.delete(e, (0, Ie.D6H)('USER_DISCONNECTED')),
                  this.events.emit((0, Ie.E0T)('session_approve', r), { error: t.error }));
            }),
            Oo(this, 'onSessionUpdateRequest', async (e, t) => {
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
                this.isValidUpdate(Po({ topic: e }, r));
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
            Oo(
              this,
              'isRequestOutOfSync',
              (e, t) => t.toString().slice(0, -3) < e.toString().slice(0, -3)
            ),
            Oo(this, 'onSessionUpdateResponse', (e, t) => {
              const { id: r } = t,
                i = (0, Ie.E0T)('session_update', r);
              if (0 === this.events.listenerCount(i))
                throw new Error(`emitting ${i} without any listeners`);
              Ge(t)
                ? this.events.emit((0, Ie.E0T)('session_update', r), {})
                : Ye(t) && this.events.emit((0, Ie.E0T)('session_update', r), { error: t.error });
            }),
            Oo(this, 'onSessionExtendRequest', async (e, t) => {
              const { id: r } = t;
              try {
                this.isValidExtend({ topic: e }),
                  await this.setExpiry(e, (0, Ie.gn4)(oo)),
                  await this.sendResult({ id: r, topic: e, result: !0, throwOnFailedPublish: !0 }),
                  this.client.events.emit('session_extend', { id: r, topic: e });
              } catch (se) {
                await this.sendError({ id: r, topic: e, error: se }), this.client.logger.error(se);
              }
            }),
            Oo(this, 'onSessionExtendResponse', (e, t) => {
              const { id: r } = t,
                i = (0, Ie.E0T)('session_extend', r);
              if (0 === this.events.listenerCount(i))
                throw new Error(`emitting ${i} without any listeners`);
              Ge(t)
                ? this.events.emit((0, Ie.E0T)('session_extend', r), {})
                : Ye(t) && this.events.emit((0, Ie.E0T)('session_extend', r), { error: t.error });
            }),
            Oo(this, 'onSessionPingRequest', async (e, t) => {
              const { id: r } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult({ id: r, topic: e, result: !0, throwOnFailedPublish: !0 }),
                  this.client.events.emit('session_ping', { id: r, topic: e });
              } catch (se) {
                await this.sendError({ id: r, topic: e, error: se }), this.client.logger.error(se);
              }
            }),
            Oo(this, 'onSessionPingResponse', (e, t) => {
              const { id: r } = t,
                i = (0, Ie.E0T)('session_ping', r);
              setTimeout(() => {
                if (0 === this.events.listenerCount(i))
                  throw new Error(`emitting ${i} without any listeners 2176`);
                Ge(t)
                  ? this.events.emit((0, Ie.E0T)('session_ping', r), {})
                  : Ye(t) && this.events.emit((0, Ie.E0T)('session_ping', r), { error: t.error });
              }, 500);
            }),
            Oo(this, 'onSessionDeleteRequest', async (e, t) => {
              const { id: r } = t;
              try {
                this.isValidDisconnect({ topic: e, reason: t.params }),
                  Promise.all([
                    new Promise((t) => {
                      this.client.core.relayer.once(mt, async () => {
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
            Oo(this, 'onSessionRequest', async (e) => {
              var t, r, i;
              const { topic: n, payload: s, attestation: o, encryptedId: a, transportType: c } = e,
                { id: h, params: l } = s;
              try {
                await this.isValidRequest(Po({ topic: n }, l));
                const e = this.client.session.get(n),
                  s = {
                    id: h,
                    topic: n,
                    params: l,
                    verifyContext: await this.getVerifyContext({
                      attestationId: o,
                      hash: (0, Ie.rjm)(JSON.stringify(De('wc_sessionRequest', l, h))),
                      encryptedId: a,
                      metadata: e.peer.metadata,
                      transportType: c,
                    }),
                  };
                await this.setPendingSessionRequest(s),
                  c === Pt.link_mode &&
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
            Oo(this, 'onSessionRequestResponse', (e, t) => {
              const { id: r } = t,
                i = (0, Ie.E0T)('session_request', r);
              if (0 === this.events.listenerCount(i))
                throw new Error(`emitting ${i} without any listeners`);
              Ge(t)
                ? this.events.emit((0, Ie.E0T)('session_request', r), { result: t.result })
                : Ye(t) && this.events.emit((0, Ie.E0T)('session_request', r), { error: t.error });
            }),
            Oo(this, 'onSessionEventRequest', async (e, t) => {
              const { id: r, params: i } = t;
              try {
                const t = `${e}_session_event_${i.event.name}`,
                  n = Ie.O6B.get(t);
                if (n && this.isRequestOutOfSync(n, r))
                  return void this.client.logger.info(`Discarding out of sync request - ${r}`);
                this.isValidEmit(Po({ topic: e }, i)),
                  this.client.events.emit('session_event', { id: r, topic: e, params: i }),
                  Ie.O6B.set(t, r);
              } catch (n) {
                await this.sendError({ id: r, topic: e, error: n }), this.client.logger.error(n);
              }
            }),
            Oo(this, 'onSessionAuthenticateResponse', (e, t) => {
              const { id: r } = t;
              this.client.logger.trace({
                type: 'method',
                method: 'onSessionAuthenticateResponse',
                topic: e,
                payload: t,
              }),
                Ge(t)
                  ? this.events.emit((0, Ie.E0T)('session_request', r), { result: t.result })
                  : Ye(t) &&
                    this.events.emit((0, Ie.E0T)('session_request', r), { error: t.error });
            }),
            Oo(this, 'onSessionAuthenticateRequest', async (e) => {
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
                  o === Pt.link_mode &&
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
                  rpcOpts: ao.wc_sessionAuthenticate.autoReject,
                  appLink: n,
                });
              }
            }),
            Oo(this, 'addSessionRequestToSessionRequestQueue', (e) => {
              this.sessionRequestQueue.queue.push(e);
            }),
            Oo(this, 'cleanupAfterResponse', (e) => {
              this.deletePendingSessionRequest(e.response.id, { message: 'fulfilled', code: 0 }),
                setTimeout(
                  () => {
                    (this.sessionRequestQueue.state = ho), this.processSessionRequestQueue();
                  },
                  (0, s.toMiliseconds)(this.requestQueueDelay)
                );
            }),
            Oo(this, 'cleanupPendingSentRequestsForTopic', ({ topic: e, error: t }) => {
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
            Oo(this, 'processSessionRequestQueue', () => {
              if (this.sessionRequestQueue.state === lo)
                return void this.client.logger.info('session request queue is already active.');
              const e = this.sessionRequestQueue.queue[0];
              if (e)
                try {
                  (this.sessionRequestQueue.state = lo), this.emitSessionRequest(e);
                } catch (t) {
                  this.client.logger.error(t);
                }
              else this.client.logger.info('session request queue is empty.');
            }),
            Oo(this, 'emitSessionRequest', (e) => {
              this.client.events.emit('session_request', e);
            }),
            Oo(this, 'onPairingCreated', (e) => {
              if ((e.methods && this.expectedPairingMethodMap.set(e.topic, e.methods), e.active))
                return;
              const t = this.client.proposal.getAll().find((t) => t.pairingTopic === e.topic);
              t &&
                this.onSessionProposeRequest({
                  topic: e.topic,
                  payload: De(
                    'wc_sessionPropose',
                    So(Po({}, t), {
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
            Oo(this, 'isValidConnect', async (e) => {
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
            Oo(this, 'validateNamespaces', (e, t) => {
              const r = (0, Ie.naP)(e, 'connect()', t);
              if (r) throw new Error(r.message);
            }),
            Oo(this, 'isValidApprove', async (e) => {
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
            Oo(this, 'isValidReject', async (e) => {
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
            Oo(this, 'isValidSessionSettleRequest', (e) => {
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
            Oo(this, 'isValidUpdate', async (e) => {
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
            Oo(this, 'isValidExtend', async (e) => {
              if (!(0, Ie.EJd)(e)) {
                const { message: t } = (0, Ie.kCb)('MISSING_OR_INVALID', `extend() params: ${e}`);
                throw new Error(t);
              }
              const { topic: t } = e;
              this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
            }),
            Oo(this, 'isValidRequest', async (e) => {
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
              if (n && !(0, Ie.ONw)(n, co)) {
                const { message: e } = (0, Ie.kCb)(
                  'MISSING_OR_INVALID',
                  `request() expiry: ${n}. Expiry must be a number (in seconds) between ${co.min} and ${co.max}`
                );
                throw new Error(e);
              }
            }),
            Oo(this, 'isValidRespond', async (e) => {
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
            Oo(this, 'isValidPing', async (e) => {
              if (!(0, Ie.EJd)(e)) {
                const { message: t } = (0, Ie.kCb)('MISSING_OR_INVALID', `ping() params: ${e}`);
                throw new Error(t);
              }
              const { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            Oo(this, 'isValidEmit', async (e) => {
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
            Oo(this, 'isValidDisconnect', async (e) => {
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
            Oo(this, 'isValidAuthenticate', (e) => {
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
            Oo(this, 'getVerifyContext', async (e) => {
              const {
                  attestationId: t,
                  hash: r,
                  encryptedId: i,
                  metadata: n,
                  transportType: s,
                } = e,
                o = {
                  verified: {
                    verifyUrl: n.verifyUrl || Kt,
                    validation: 'UNKNOWN',
                    origin: n.url || '',
                  },
                };
              try {
                if (s === Pt.link_mode) {
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
            Oo(this, 'validateSessionProps', (e, t) => {
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
            Oo(this, 'getPendingAuthRequest', (e) => {
              const t = this.client.auth.requests.get(e);
              return 'object' == typeof t ? t : void 0;
            }),
            Oo(this, 'addToRecentlyDeleted', (e, t) => {
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
            Oo(this, 'checkRecentlyDeleted', (e) => {
              const t = this.recentlyDeletedMap.get(e);
              if (t) {
                const { message: r } = (0, Ie.kCb)(
                  'MISSING_OR_INVALID',
                  `Record was recently deleted - ${t}: ${e}`
                );
                throw new Error(r);
              }
            }),
            Oo(this, 'isLinkModeEnabled', (e, t) => {
              var i, n, s, o, a, c, h, l, u;
              return (
                !(!e || t !== Pt.link_mode) &&
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
            Oo(this, 'getAppLinkIfEnabled', (e, t) => {
              var r;
              return this.isLinkModeEnabled(e, t)
                ? null == (r = e?.redirect)
                  ? void 0
                  : r.universal
                : void 0;
            }),
            Oo(this, 'handleLinkModeMessage', ({ url: e }) => {
              if (!e || !e.includes('wc_ev') || !e.includes('topic')) return;
              const t = (0, Ie.waw)(e, 'topic') || '',
                r = decodeURIComponent((0, Ie.waw)(e, 'wc_ev') || ''),
                i = this.client.session.keys.includes(t);
              i && this.client.session.update(t, { transportType: Pt.link_mode }),
                this.client.core.dispatchEnvelope({ topic: t, message: r, sessionExists: i });
            }),
            Oo(this, 'registerLinkModeListeners', async () => {
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
            Oo(this, 'shouldSetTVF', (e, t) => {
              if (!t || 'wc_sessionRequest' !== e) return !1;
              const { request: r } = t;
              return Object.keys(uo).includes(r.method);
            }),
            Oo(this, 'getTVFParams', (e, t, r) => {
              var i, n;
              try {
                const s = t.request.method,
                  o = this.extractTxHashesFromResult(s, r);
                return So(
                  Po(
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
            Oo(this, 'isValidContractData', (e) => {
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
            Oo(this, 'extractTxHashesFromResult', (e, t) => {
              try {
                if ('string' == typeof t) return [t];
                const r = t[uo[e].key];
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
          this.client.core.relayer.on(ut, (e) => {
            this.onProviderMessageEvent(e);
          });
        }
        async onRelayMessage(e) {
          const { topic: t, message: r, attestation: i, transportType: n } = e,
            { publicKey: s } = this.client.auth.authKeys.keys.includes(go)
              ? this.client.auth.authKeys.get(go)
              : { responseTopic: void 0, publicKey: void 0 };
          try {
            const e = await this.client.core.crypto.decode(t, r, {
              receiverPublicKey: s,
              encoding: n === Pt.link_mode ? Ie.zl_ : Ie.$dT,
            });
            Fe(e)
              ? (this.client.core.history.set(t, e),
                await this.onRelayEventRequest({
                  topic: t,
                  payload: e,
                  attestation: i,
                  transportType: n,
                  encryptedId: (0, Ie.rjm)(r),
                }))
              : We(e)
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
          this.client.core.expirer.on(zt, async (e) => {
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
          this.client.core.pairing.events.on(Rt, (e) => this.onPairingCreated(e)),
            this.client.core.pairing.events.on(jt, (e) => {
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
      class xo extends bs {
        constructor(e, t) {
          super(e, t, 'proposal', to), (this.core = e), (this.logger = t);
        }
      }
      class Ao extends bs {
        constructor(e, t) {
          super(e, t, 'session', to), (this.core = e), (this.logger = t);
        }
      }
      class To extends bs {
        constructor(e, t) {
          super(e, t, 'request', to, (e) => e.id), (this.core = e), (this.logger = t);
        }
      }
      class Co extends bs {
        constructor(e, t) {
          super(e, t, 'authKeys', fo, () => go), (this.core = e), (this.logger = t);
        }
      }
      class No extends bs {
        constructor(e, t) {
          super(e, t, 'pairingTopics', fo), (this.core = e), (this.logger = t);
        }
      }
      class Ro extends bs {
        constructor(e, t) {
          super(e, t, 'requests', fo, (e) => e.id), (this.core = e), (this.logger = t);
        }
      }
      var ko = Object.defineProperty,
        jo = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? ko(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class Do {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            jo(this, 'authKeys'),
            jo(this, 'pairingTopics'),
            jo(this, 'requests'),
            (this.authKeys = new Co(this.core, this.logger)),
            (this.pairingTopics = new No(this.core, this.logger)),
            (this.requests = new Ro(this.core, this.logger));
        }
        async init() {
          await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init();
        }
      }
      var Uo = Object.defineProperty,
        Lo = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? Uo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class Bo extends class {
        constructor(e) {
          (this.opts = e), Xs(this, 'protocol', 'wc'), Xs(this, 'version', 2);
        }
      } {
        constructor(e) {
          super(e),
            Lo(this, 'protocol', 'wc'),
            Lo(this, 'version', 2),
            Lo(this, 'name', ro),
            Lo(this, 'metadata'),
            Lo(this, 'core'),
            Lo(this, 'logger'),
            Lo(this, 'events', new i.EventEmitter()),
            Lo(this, 'engine'),
            Lo(this, 'session'),
            Lo(this, 'proposal'),
            Lo(this, 'pendingRequest'),
            Lo(this, 'auth'),
            Lo(this, 'signConfig'),
            Lo(this, 'on', (e, t) => this.events.on(e, t)),
            Lo(this, 'once', (e, t) => this.events.once(e, t)),
            Lo(this, 'off', (e, t) => this.events.off(e, t)),
            Lo(this, 'removeListener', (e, t) => this.events.removeListener(e, t)),
            Lo(this, 'removeAllListeners', (e) => this.events.removeAllListeners(e)),
            Lo(this, 'connect', async (e) => {
              try {
                return await this.engine.connect(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            Lo(this, 'pair', async (e) => {
              try {
                return await this.engine.pair(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            Lo(this, 'approve', async (e) => {
              try {
                return await this.engine.approve(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            Lo(this, 'reject', async (e) => {
              try {
                return await this.engine.reject(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            Lo(this, 'update', async (e) => {
              try {
                return await this.engine.update(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            Lo(this, 'extend', async (e) => {
              try {
                return await this.engine.extend(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            Lo(this, 'request', async (e) => {
              try {
                return await this.engine.request(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            Lo(this, 'respond', async (e) => {
              try {
                return await this.engine.respond(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            Lo(this, 'ping', async (e) => {
              try {
                return await this.engine.ping(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            Lo(this, 'emit', async (e) => {
              try {
                return await this.engine.emit(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            Lo(this, 'disconnect', async (e) => {
              try {
                return await this.engine.disconnect(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            Lo(this, 'find', (e) => {
              try {
                return this.engine.find(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            Lo(this, 'getPendingSessionRequests', () => {
              try {
                return this.engine.getPendingSessionRequests();
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            Lo(this, 'authenticate', async (e, t) => {
              try {
                return await this.engine.authenticate(e, t);
              } catch (se) {
                throw (this.logger.error(se.message), se);
              }
            }),
            Lo(this, 'formatAuthMessage', (e) => {
              try {
                return this.engine.formatAuthMessage(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            Lo(this, 'approveSessionAuthenticate', async (e) => {
              try {
                return await this.engine.approveSessionAuthenticate(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            Lo(this, 'rejectSessionAuthenticate', async (e) => {
              try {
                return await this.engine.rejectSessionAuthenticate(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            (this.name = e?.name || ro),
            (this.metadata = (0, Ie.WPw)(e?.metadata)),
            (this.signConfig = e?.signConfig);
          const t =
            typeof e?.logger < 'u' && 'string' != typeof e?.logger
              ? e.logger
              : V()(ae({ level: e?.logger || io }));
          (this.core = e?.core || new Zs(e)),
            (this.logger = he(t, this.name)),
            (this.session = new Ao(this.core, this.logger)),
            (this.proposal = new xo(this.core, this.logger)),
            (this.pendingRequest = new To(this.core, this.logger)),
            (this.engine = new _o(this)),
            (this.auth = new Do(this.core, this.logger));
        }
        static async init(e) {
          const t = new Bo(e);
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
      var qo = r(54098),
        Mo = r.n(qo),
        $o = Object.defineProperty,
        zo = Object.defineProperties,
        Ho = Object.getOwnPropertyDescriptors,
        Vo = Object.getOwnPropertySymbols,
        Ko = Object.prototype.hasOwnProperty,
        Fo = Object.prototype.propertyIsEnumerable,
        Wo = (e, t, r) =>
          t in e
            ? $o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        Go = (e, t) => {
          for (var r in t || (t = {})) Ko.call(t, r) && Wo(e, r, t[r]);
          if (Vo) for (var r of Vo(t)) Fo.call(t, r) && Wo(e, r, t[r]);
          return e;
        },
        Yo = (e, t) => zo(e, Ho(t));
      const Jo = {
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        method: 'POST',
      };
      class Zo {
        constructor(e, t = !1) {
          if (
            ((this.url = e),
            (this.disableProviderPing = t),
            (this.events = new i.EventEmitter()),
            (this.isAvailable = !1),
            (this.registering = !1),
            !He(e))
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
              r = await (await Mo()(this.url, Yo(Go({}, Jo), { body: t }))).json();
            this.onPayload({ data: r });
          } catch (qe) {
            this.onError(e.id, qe);
          }
        }
        async register(e = this.url) {
          if (!He(e)) throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);
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
              await Mo()(e, Yo(Go({}, Jo), { body: t }));
            }
            this.onOpen();
          } catch (qe) {
            const t = this.parseError(qe);
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
            i = Le(e, r.message || r.toString());
          this.events.emit('payload', i);
        }
        parseError(e, t = this.url) {
          return Ne(e, t, 'HTTP');
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
      }
      var Qo = r(48764).Buffer;
      const Xo = 'error',
        ea = 'wc@2:universal_provider:',
        ta = 'https://rpc.walletconnect.org/v1/',
        ra = 'generic',
        ia = `${ta}bundler`,
        na = 'default_chain_changed';
      function sa() {}
      function oa(e) {
        return null == e || ('object' != typeof e && 'function' != typeof e);
      }
      function aa(e) {
        return ArrayBuffer.isView(e) && !(e instanceof DataView);
      }
      function ca(e) {
        return 'object' == typeof e && null !== e;
      }
      function ha(e) {
        return Object.getOwnPropertySymbols(e).filter((t) =>
          Object.prototype.propertyIsEnumerable.call(e, t)
        );
      }
      function la(e) {
        return null == e
          ? void 0 === e
            ? '[object Undefined]'
            : '[object Null]'
          : Object.prototype.toString.call(e);
      }
      const ua = '[object RegExp]',
        da = '[object String]',
        pa = '[object Number]',
        fa = '[object Boolean]',
        ga = '[object Arguments]',
        ya = '[object Symbol]',
        ma = '[object Date]',
        wa = '[object Map]',
        ba = '[object Set]',
        va = '[object Array]',
        Ea = '[object ArrayBuffer]',
        Ia = '[object Object]',
        Pa = '[object DataView]',
        Sa = '[object Uint8Array]',
        Oa = '[object Uint8ClampedArray]',
        _a = '[object Uint16Array]',
        xa = '[object Uint32Array]',
        Aa = '[object Int8Array]',
        Ta = '[object Int16Array]',
        Ca = '[object Int32Array]',
        Na = '[object Float32Array]',
        Ra = '[object Float64Array]';
      function ka(e, t, r, i = new Map(), n) {
        const s = n?.(e, t, r, i);
        if (null != s) return s;
        if (oa(e)) return e;
        if (i.has(e)) return i.get(e);
        if (Array.isArray(e)) {
          const t = new Array(e.length);
          i.set(e, t);
          for (let s = 0; s < e.length; s++) t[s] = ka(e[s], s, r, i, n);
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
          for (const [s, o] of e) t.set(s, ka(o, s, r, i, n));
          return t;
        }
        if (e instanceof Set) {
          const t = new Set();
          i.set(e, t);
          for (const s of e) t.add(ka(s, void 0, r, i, n));
          return t;
        }
        if (typeof Qo < 'u' && Qo.isBuffer(e)) return e.subarray();
        if (aa(e)) {
          const t = new (Object.getPrototypeOf(e).constructor)(e.length);
          i.set(e, t);
          for (let s = 0; s < e.length; s++) t[s] = ka(e[s], s, r, i, n);
          return t;
        }
        if (
          e instanceof ArrayBuffer ||
          (typeof SharedArrayBuffer < 'u' && e instanceof SharedArrayBuffer)
        )
          return e.slice(0);
        if (e instanceof DataView) {
          const t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
          return i.set(e, t), ja(t, e, r, i, n), t;
        }
        if (typeof File < 'u' && e instanceof File) {
          const t = new File([e], e.name, { type: e.type });
          return i.set(e, t), ja(t, e, r, i, n), t;
        }
        if (e instanceof Blob) {
          const t = new Blob([e], { type: e.type });
          return i.set(e, t), ja(t, e, r, i, n), t;
        }
        if (e instanceof Error) {
          const t = new e.constructor();
          return (
            i.set(e, t),
            (t.message = e.message),
            (t.name = e.name),
            (t.stack = e.stack),
            (t.cause = e.cause),
            ja(t, e, r, i, n),
            t
          );
        }
        if (
          'object' == typeof e &&
          (function (e) {
            switch (la(e)) {
              case ga:
              case va:
              case Ea:
              case Pa:
              case fa:
              case ma:
              case Na:
              case Ra:
              case Aa:
              case Ta:
              case Ca:
              case wa:
              case pa:
              case Ia:
              case ua:
              case ba:
              case da:
              case ya:
              case Sa:
              case Oa:
              case _a:
              case xa:
                return !0;
              default:
                return !1;
            }
          })(e)
        ) {
          const t = Object.create(Object.getPrototypeOf(e));
          return i.set(e, t), ja(t, e, r, i, n), t;
        }
        return e;
      }
      function ja(e, t, r = e, i, n) {
        const s = [...Object.keys(t), ...ha(t)];
        for (let o = 0; o < s.length; o++) {
          const a = s[o],
            c = Object.getOwnPropertyDescriptor(e, a);
          (null == c || c.writable) && (e[a] = ka(t[a], a, r, i, n));
        }
      }
      function Da(e, t) {
        return (function (e, t) {
          return ka(e, void 0, e, new Map(), t);
        })(e, (r, i, n, s) => {
          const o = t?.(r, i, n, s);
          if (null != o) return o;
          if ('object' == typeof e)
            switch (Object.prototype.toString.call(e)) {
              case pa:
              case da:
              case fa: {
                const t = new e.constructor(e?.valueOf());
                return ja(t, e), t;
              }
              case ga: {
                const t = {};
                return (
                  ja(t, e), (t.length = e.length), (t[Symbol.iterator] = e[Symbol.iterator]), t
                );
              }
              default:
                return;
            }
        });
      }
      function Ua(e) {
        return Da(e);
      }
      function La(e) {
        return null !== e && 'object' == typeof e && '[object Arguments]' === la(e);
      }
      function Ba(e) {
        return aa(e);
      }
      function qa(e) {
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
      function Ma(e, t, r, i) {
        if ((oa(e) && (e = Object(e)), null == t || 'object' != typeof t)) return e;
        if (i.has(t))
          return (function (e) {
            if (oa(e)) return e;
            if (
              Array.isArray(e) ||
              aa(e) ||
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
        const n = [...Object.keys(t), ...ha(t)];
        for (let s = 0; s < n.length; s++) {
          const o = n[s];
          let a = t[o],
            c = e[o];
          if (
            (La(a) && (a = { ...a }),
            La(c) && (c = { ...c }),
            typeof Qo < 'u' && Qo.isBuffer(a) && (a = Ua(a)),
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
            : Array.isArray(a) || (ca(c) && ca(a))
              ? (e[o] = Ma(c, a, r, i))
              : null == c && qa(a)
                ? (e[o] = Ma({}, a, r, i))
                : null == c && Ba(a)
                  ? (e[o] = Ua(a))
                  : (void 0 === c || void 0 !== a) && (e[o] = a);
        }
        return e;
      }
      function $a(e, ...t) {
        return (function (e, ...t) {
          const r = t.slice(0, -1),
            i = t[t.length - 1];
          let n = e;
          for (let s = 0; s < r.length; s++) n = Ma(n, r[s], i, new Map());
          return n;
        })(e, ...t, sa);
      }
      var za = Object.defineProperty,
        Ha = Object.defineProperties,
        Va = Object.getOwnPropertyDescriptors,
        Ka = Object.getOwnPropertySymbols,
        Fa = Object.prototype.hasOwnProperty,
        Wa = Object.prototype.propertyIsEnumerable,
        Ga = (e, t, r) =>
          t in e
            ? za(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        Ya = (e, t) => {
          for (var r in t || (t = {})) Fa.call(t, r) && Ga(e, r, t[r]);
          if (Ka) for (var r of Ka(t)) Wa.call(t, r) && Ga(e, r, t[r]);
          return e;
        },
        Ja = (e, t) => Ha(e, Va(t));
      function Za(e, t, r) {
        var i;
        const n = (0, Ie.DQe)(e);
        return (
          (null == (i = t.rpcMap) ? void 0 : i[n.reference]) ||
          `${ta}?chainId=${n.namespace}:${n.reference}&projectId=${r}`
        );
      }
      function Qa(e) {
        return e.includes(':') ? e.split(':')[1] : e;
      }
      function Xa(e) {
        return e.map((e) => `${e.split(':')[0]}:${e.split(':')[1]}`);
      }
      function ec(e = {}, t = {}) {
        return $a(tc(e), tc(t));
      }
      function tc(e) {
        var t, r, i, n;
        const s = {};
        if (!(0, Ie.L5o)(e)) return s;
        for (const [o, a] of Object.entries(e)) {
          const e = (0, Ie.gpE)(o) ? [o] : a.chains,
            c = a.methods || [],
            h = a.events || [],
            l = a.rpcMap || {},
            u = (0, Ie.Maj)(o);
          s[u] = Ja(Ya(Ya({}, s[u]), a), {
            chains: (0, Ie.eGA)(e, null == (t = s[u]) ? void 0 : t.chains),
            methods: (0, Ie.eGA)(c, null == (r = s[u]) ? void 0 : r.methods),
            events: (0, Ie.eGA)(h, null == (i = s[u]) ? void 0 : i.events),
            rpcMap: Ya(Ya({}, l), null == (n = s[u]) ? void 0 : n.rpcMap),
          });
        }
        return s;
      }
      function rc(e) {
        return e.includes(':') ? e.split(':')[2] : e;
      }
      function ic(e) {
        const t = {};
        for (const [r, i] of Object.entries(e)) {
          const e = i.methods || [],
            n = i.events || [],
            s = i.accounts || [],
            o = (0, Ie.gpE)(r) ? [r] : i.chains ? i.chains : Xa(i.accounts);
          t[r] = { chains: o, methods: e, events: n, accounts: s };
        }
        return t;
      }
      function nc(e) {
        return 'number' == typeof e
          ? e
          : e.includes('0x')
            ? parseInt(e, 16)
            : ((e = e.includes(':') ? e.split(':')[1] : e), isNaN(Number(e)) ? e : Number(e));
      }
      const sc = {},
        oc = (e) => sc[e],
        ac = (e, t) => {
          sc[e] = t;
        };
      var cc = Object.defineProperty,
        hc = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? cc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class lc {
        constructor(e) {
          hc(this, 'name', 'polkadot'),
            hc(this, 'client'),
            hc(this, 'httpProviders'),
            hc(this, 'events'),
            hc(this, 'namespace'),
            hc(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = oc('events')),
            (this.client = oc('client')),
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
            this.events.emit(na, `${this.name}:${e}`);
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
              const i = Qa(t);
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
          const r = t || Za(e, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
          return new Je(new Zo(r, oc('disableProviderPing')));
        }
      }
      var uc = Object.defineProperty,
        dc = Object.defineProperties,
        pc = Object.getOwnPropertyDescriptors,
        fc = Object.getOwnPropertySymbols,
        gc = Object.prototype.hasOwnProperty,
        yc = Object.prototype.propertyIsEnumerable,
        mc = (e, t, r) =>
          t in e
            ? uc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        wc = (e, t) => {
          for (var r in t || (t = {})) gc.call(t, r) && mc(e, r, t[r]);
          if (fc) for (var r of fc(t)) yc.call(t, r) && mc(e, r, t[r]);
          return e;
        },
        bc = (e, t) => dc(e, pc(t)),
        vc = (e, t, r) => mc(e, 'symbol' != typeof t ? t + '' : t, r);
      class Ec {
        constructor(e) {
          vc(this, 'name', 'eip155'),
            vc(this, 'client'),
            vc(this, 'chainId'),
            vc(this, 'namespace'),
            vc(this, 'httpProviders'),
            vc(this, 'events'),
            (this.namespace = e.namespace),
            (this.events = oc('events')),
            (this.client = oc('client')),
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
            this.events.emit(na, `${this.name}:${e}`);
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
          const r = t || Za(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
          return new Je(new Zo(r, oc('disableProviderPing')));
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
              const i = parseInt(Qa(t));
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
              sessionProperties: bc(wc({}, s.sessionProperties || {}), {
                capabilities: bc(wc({}, o || {}), { [n]: a }),
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
            } catch (B) {
              console.warn('Failed to fetch call status from custom bundler', B, s);
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
                De('eth_getUserOperationReceipt', [null == (r = t.request.params) ? void 0 : r[0]])
              ),
            });
          if (!n.ok) throw new Error(`Failed to fetch user operation receipt - ${n.status}`);
          return await n.json();
        }
        getBundlerUrl(e, t) {
          return `${ia}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${t}`;
        }
      }
      var Ic = Object.defineProperty,
        Pc = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? Ic(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class Sc {
        constructor(e) {
          Pc(this, 'name', 'solana'),
            Pc(this, 'client'),
            Pc(this, 'httpProviders'),
            Pc(this, 'events'),
            Pc(this, 'namespace'),
            Pc(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = oc('events')),
            (this.client = oc('client')),
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
            this.events.emit(na, `${this.name}:${e}`);
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
              const i = Qa(t);
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
          const r = t || Za(e, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
          return new Je(new Zo(r, oc('disableProviderPing')));
        }
      }
      var Oc = Object.defineProperty,
        _c = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? Oc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class xc {
        constructor(e) {
          _c(this, 'name', 'cosmos'),
            _c(this, 'client'),
            _c(this, 'httpProviders'),
            _c(this, 'events'),
            _c(this, 'namespace'),
            _c(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = oc('events')),
            (this.client = oc('client')),
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
            this.events.emit(na, `${this.name}:${this.chainId}`);
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
              const i = Qa(t);
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
          const r = t || Za(e, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
          return new Je(new Zo(r, oc('disableProviderPing')));
        }
      }
      var Ac = Object.defineProperty,
        Tc = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? Ac(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class Cc {
        constructor(e) {
          Tc(this, 'name', 'algorand'),
            Tc(this, 'client'),
            Tc(this, 'httpProviders'),
            Tc(this, 'events'),
            Tc(this, 'namespace'),
            Tc(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = oc('events')),
            (this.client = oc('client')),
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
            const r = t || Za(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
            if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          (this.chainId = e), this.events.emit(na, `${this.name}:${this.chainId}`);
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
          const r = t || Za(e, this.namespace, this.client.core.projectId);
          return typeof r > 'u' ? void 0 : new Je(new Zo(r, oc('disableProviderPing')));
        }
      }
      var Nc = Object.defineProperty,
        Rc = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? Nc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class kc {
        constructor(e) {
          Rc(this, 'name', 'cip34'),
            Rc(this, 'client'),
            Rc(this, 'httpProviders'),
            Rc(this, 'events'),
            Rc(this, 'namespace'),
            Rc(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = oc('events')),
            (this.client = oc('client')),
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
            this.events.emit(na, `${this.name}:${this.chainId}`);
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
                i = Qa(t);
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
          return new Je(new Zo(r, oc('disableProviderPing')));
        }
      }
      var jc = Object.defineProperty,
        Dc = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? jc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class Uc {
        constructor(e) {
          Dc(this, 'name', 'elrond'),
            Dc(this, 'client'),
            Dc(this, 'httpProviders'),
            Dc(this, 'events'),
            Dc(this, 'namespace'),
            Dc(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = oc('events')),
            (this.client = oc('client')),
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
            this.events.emit(na, `${this.name}:${e}`);
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
              const i = Qa(t);
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
          const r = t || Za(e, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
          return new Je(new Zo(r, oc('disableProviderPing')));
        }
      }
      var Lc = Object.defineProperty,
        Bc = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? Lc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class qc {
        constructor(e) {
          Bc(this, 'name', 'multiversx'),
            Bc(this, 'client'),
            Bc(this, 'httpProviders'),
            Bc(this, 'events'),
            Bc(this, 'namespace'),
            Bc(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = oc('events')),
            (this.client = oc('client')),
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
            this.events.emit(na, `${this.name}:${e}`);
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
              const i = Qa(t);
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
          const r = t || Za(e, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
          return new Je(new Zo(r, oc('disableProviderPing')));
        }
      }
      var Mc = Object.defineProperty,
        $c = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? Mc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class zc {
        constructor(e) {
          $c(this, 'name', 'near'),
            $c(this, 'client'),
            $c(this, 'httpProviders'),
            $c(this, 'events'),
            $c(this, 'namespace'),
            $c(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = oc('events')),
            (this.client = oc('client')),
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
            const r = t || Za(`${this.name}:${e}`, this.namespace);
            if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          this.events.emit(na, `${this.name}:${this.chainId}`);
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
          const r = t || Za(e, this.namespace);
          return typeof r > 'u' ? void 0 : new Je(new Zo(r, oc('disableProviderPing')));
        }
      }
      var Hc = Object.defineProperty,
        Vc = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? Hc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class Kc {
        constructor(e) {
          Vc(this, 'name', 'tezos'),
            Vc(this, 'client'),
            Vc(this, 'httpProviders'),
            Vc(this, 'events'),
            Vc(this, 'namespace'),
            Vc(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = oc('events')),
            (this.client = oc('client')),
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
            const r = t || Za(`${this.name}:${e}`, this.namespace);
            if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          this.events.emit(na, `${this.name}:${this.chainId}`);
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
          const r = t || Za(e, this.namespace);
          return typeof r > 'u' ? void 0 : new Je(new Zo(r));
        }
      }
      var Fc = Object.defineProperty,
        Wc = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? Fc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r))(e, 'symbol' != typeof t ? t + '' : t, r);
      class Gc {
        constructor(e) {
          Wc(this, 'name', ra),
            Wc(this, 'client'),
            Wc(this, 'httpProviders'),
            Wc(this, 'events'),
            Wc(this, 'namespace'),
            Wc(this, 'chainId'),
            (this.namespace = e.namespace),
            (this.events = oc('events')),
            (this.client = oc('client')),
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
            this.events.emit(na, `${this.name}:${e}`);
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
          const r = t || Za(e, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
          return new Je(new Zo(r, oc('disableProviderPing')));
        }
      }
      var Yc = Object.defineProperty,
        Jc = Object.defineProperties,
        Zc = Object.getOwnPropertyDescriptors,
        Qc = Object.getOwnPropertySymbols,
        Xc = Object.prototype.hasOwnProperty,
        eh = Object.prototype.propertyIsEnumerable,
        th = (e, t, r) =>
          t in e
            ? Yc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        rh = (e, t) => {
          for (var r in t || (t = {})) Xc.call(t, r) && th(e, r, t[r]);
          if (Qc) for (var r of Qc(t)) eh.call(t, r) && th(e, r, t[r]);
          return e;
        },
        ih = (e, t) => Jc(e, Zc(t)),
        nh = (e, t, r) => th(e, 'symbol' != typeof t ? t + '' : t, r);
      class sh {
        constructor(e) {
          nh(this, 'client'),
            nh(this, 'namespaces'),
            nh(this, 'optionalNamespaces'),
            nh(this, 'sessionProperties'),
            nh(this, 'scopedProperties'),
            nh(this, 'events', new (n())()),
            nh(this, 'rpcProviders', {}),
            nh(this, 'session'),
            nh(this, 'providerOpts'),
            nh(this, 'logger'),
            nh(this, 'uri'),
            nh(this, 'disableProviderPing', !1),
            (this.providerOpts = e),
            (this.logger =
              typeof e?.logger < 'u' && 'string' != typeof e?.logger
                ? e.logger
                : V()(ae({ level: e?.logger || Xo }))),
            (this.disableProviderPing = e?.disableProviderPing || !1);
        }
        static async init(e) {
          const t = new sh(e);
          return await t.initialize(), t;
        }
        async request(e, t, r) {
          const [i, n] = this.validateChain(t);
          if (!this.session) throw new Error('Please call connect() before request()');
          return await this.getProvider(i).request({
            request: rh({}, e),
            chainId: `${i}:${n}`,
            topic: this.session.topic,
            expiry: r,
          });
        }
        sendAsync(e, t, r, i) {
          const n = new Date().getTime();
          this.request(e, r, i)
            .then((e) => t(null, Ue(n, e)))
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
            const e = ic(this.session.namespaces);
            (this.namespaces = ec(this.namespaces, e)),
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
          const n = ic(i.namespaces);
          return (
            (this.namespaces = ec(this.namespaces, n)),
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
            n.name === ra ? n.setDefaultChain(`${r}:${i}`, t) : n.setDefaultChain(i, t);
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
              (await Bo.init({
                core: this.providerOpts.core,
                logger: this.providerOpts.logger || Xo,
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
          ac('client', this.client),
            ac('events', this.events),
            ac('disableProviderPing', this.disableProviderPing),
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
                r = Xa(t),
                i = ec(this.namespaces, this.optionalNamespaces),
                n = ih(rh({}, i[e]), { accounts: t, chains: r });
              switch (e) {
                case 'eip155':
                  this.rpcProviders[e] = new Ec({ namespace: n });
                  break;
                case 'algorand':
                  this.rpcProviders[e] = new Cc({ namespace: n });
                  break;
                case 'solana':
                  this.rpcProviders[e] = new Sc({ namespace: n });
                  break;
                case 'cosmos':
                  this.rpcProviders[e] = new xc({ namespace: n });
                  break;
                case 'polkadot':
                  this.rpcProviders[e] = new lc({ namespace: n });
                  break;
                case 'cip34':
                  this.rpcProviders[e] = new kc({ namespace: n });
                  break;
                case 'elrond':
                  this.rpcProviders[e] = new Uc({ namespace: n });
                  break;
                case 'multiversx':
                  this.rpcProviders[e] = new qc({ namespace: n });
                  break;
                case 'near':
                  this.rpcProviders[e] = new zc({ namespace: n });
                  break;
                case 'tezos':
                  this.rpcProviders[e] = new Kc({ namespace: n });
                  break;
                default:
                  this.rpcProviders.generic
                    ? this.rpcProviders.generic.updateNamespace(n)
                    : (this.rpcProviders.generic = new Gc({ namespace: n }));
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
                e && (0, Ie.qt8)(e) && this.events.emit('accountsChanged', e.map(rc));
              } else if ('chainChanged' === n.name) {
                const e = r.chainId,
                  t = r.event.data,
                  i = (0, Ie.Maj)(e),
                  n = nc(e) !== nc(t) ? `${i}:${nc(t)}` : e;
                this.onChainChanged(n);
              } else this.events.emit(n.name, n.data);
              this.events.emit('session_event', e);
            }),
            this.client.on('session_update', ({ topic: e, params: t }) => {
              var r, i;
              if (e !== (null == (r = this.session) ? void 0 : r.topic)) return;
              const { namespaces: n } = t,
                s = null == (i = this.client) ? void 0 : i.session.get(e);
              (this.session = ih(rh({}, s), { namespaces: n })),
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
                  ih(rh({}, (0, Ie.D6H)('USER_DISCONNECTED')), { data: e.topic })
                ));
            }),
            this.on(na, (e) => {
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
            const o = s.filter((e) => e.includes(`${r}:`)).map(rc);
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
          await this.client.core.storage.setItem(`${ea}/${e}${i}`, t);
        }
        async getFromStore(e) {
          var t;
          const r = (null == (t = this.session) ? void 0 : t.topic) || '';
          return await this.client.core.storage.getItem(`${ea}/${e}${r}`);
        }
        async deleteFromStore(e) {
          var t;
          const r = (null == (t = this.session) ? void 0 : t.topic) || '';
          await this.client.core.storage.removeItem(`${ea}/${e}${r}`);
        }
        async cleanupStorage() {
          var e;
          try {
            if ((null == (e = this.client) ? void 0 : e.session.length) > 0) return;
            const t = await this.client.core.storage.getKeys();
            for (const e of t) e.startsWith(ea) && (await this.client.core.storage.removeItem(e));
          } catch (qe) {
            this.logger.warn('Failed to cleanup storage', qe);
          }
        }
      }
      const oh = sh;
    },
    72030: function (e) {
      'use strict';
      e.exports = function () {
        throw new Error(
          'ws does not work in the browser. Browser clients must use the native WebSocket object'
        );
      };
    },
    49392: function (e, t, r) {
      'use strict';
      r.d(t, {
        Au: function () {
          return Ir;
        },
        bG: function () {
          return br;
        },
        vf: function () {
          return Pr;
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
          for (let P = 0; P < 80; P++) {
            const e = f.rotrSH(l, u, 14) ^ f.rotrSH(l, u, 18) ^ f.rotrBH(l, u, 41),
              t = f.rotrSL(l, u, 14) ^ f.rotrSL(l, u, 18) ^ f.rotrBL(l, u, 41),
              S = (l & d) ^ (~l & b),
              O = (u & p) ^ (~u & v),
              _ = f.add5L(I, t, O, y[P], w[P]),
              x = f.add5H(_, E, e, S, g[P], m[P]),
              A = 0 | _,
              T = f.rotrSH(r, i, 28) ^ f.rotrBH(r, i, 34) ^ f.rotrBH(r, i, 39),
              C = f.rotrSL(r, i, 28) ^ f.rotrBL(r, i, 34) ^ f.rotrBL(r, i, 39),
              N = (r & n) ^ (r & o) ^ (n & o),
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
            const k = f.add3L(A, C, R);
            (r = f.add3H(k, x, T, N)), (i = 0 | k);
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
        P = BigInt(2);
      function S(e) {
        return (
          e instanceof Uint8Array || (ArrayBuffer.isView(e) && 'Uint8Array' === e.constructor.name)
        );
      }
      function O(e) {
        if (!S(e)) throw new Error('Uint8Array expected');
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
      const C = 48,
        N = 57,
        R = 65,
        k = 70,
        j = 97,
        D = 102;
      function U(e) {
        return e >= C && e <= N
          ? e - C
          : e >= R && e <= k
            ? e - (R - 10)
            : e >= j && e <= D
              ? e - (j - 10)
              : void 0;
      }
      function L(e) {
        if ('string' != typeof e) throw new Error('hex string expected, got ' + typeof e);
        const t = e.length,
          r = t / 2;
        if (t % 2) throw new Error('hex string expected, got unpadded hex of length ' + t);
        const i = new Uint8Array(r);
        for (let n = 0, s = 0; n < r; n++, s += 2) {
          const t = U(e.charCodeAt(s)),
            r = U(e.charCodeAt(s + 1));
          if (void 0 === t || void 0 === r) {
            const t = e[s] + e[s + 1];
            throw new Error('hex string expected, got non-hex character "' + t + '" at index ' + s);
          }
          i[n] = 16 * t + r;
        }
        return i;
      }
      function B(e) {
        return O(e), T(A(Uint8Array.from(e).reverse()));
      }
      function q(e, t) {
        return L(e.toString(16).padStart(2 * t, '0'));
      }
      function M(e, t) {
        return q(e, t).reverse();
      }
      function $(e, t, r) {
        let i;
        if ('string' == typeof t)
          try {
            i = L(t);
          } catch (s) {
            throw new Error(e + ' must be hex string or Uint8Array, cause: ' + s);
          }
        else {
          if (!S(t)) throw new Error(e + ' must be hex string or Uint8Array');
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
      const K = (e) => (P << BigInt(e - 1)) - I,
        F = {
          bigint: (e) => 'bigint' == typeof e,
          function: (e) => 'function' == typeof e,
          boolean: (e) => 'boolean' == typeof e,
          string: (e) => 'string' == typeof e,
          stringOrUint8Array: (e) => 'string' == typeof e || S(e),
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
          toBytes: (e) => (r ? M(e, s) : q(e, s)),
          fromBytes: (e) => {
            if (e.length !== s)
              throw new Error('Field.fromBytes: expected ' + s + ' bytes, got ' + e.length);
            return r
              ? B(e)
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
        Pe = BigInt(8),
        Se = { zip215: !0 };
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
            null == t && (t = o ? Pe : r.inv(s));
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
              P = l(w * v),
              S = l(E * I),
              O = l(w * I),
              _ = l(v * E);
            return new b(P, S, _, O);
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
            (e = $('pointHex', e, o)), _('zip215', i);
            const a = e.slice(),
              c = e[o - 1];
            a[o - 1] = -129 & c;
            const u = B(a),
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
              i = M(t, r.BYTES);
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
        function P(e) {
          return re(e, i);
        }
        function S(e) {
          return P(B(e));
        }
        function O(e) {
          const t = r.BYTES;
          e = $('private key', e, t);
          const i = $('hashed private key', s(e), 2 * t),
            n = p(i.slice(0, t)),
            o = i.slice(t, 2 * t),
            a = S(n),
            c = v.multiply(a),
            h = c.toRawBytes();
          return { head: n, prefix: o, scalar: a, point: c, pointBytes: h };
        }
        function x(e = new Uint8Array(), ...t) {
          const r = z(...t);
          return S(s(f(r, $('context', e), !!n)));
        }
        const T = Se;
        return (
          v._setWindowSize(8),
          {
            CURVE: t,
            getPublicKey: function (e) {
              return O(e).pointBytes;
            },
            sign: function (e, t, s = {}) {
              (e = $('message', e)), n && (e = n(e));
              const { prefix: o, scalar: a, pointBytes: c } = O(t),
                h = x(s.context, o, e),
                l = v.multiply(h).toRawBytes(),
                u = P(h + x(s.context, l, c, e) * a);
              return V('signature.s', u, ve, i), $('result', z(l, M(u, r.BYTES)), 2 * r.BYTES);
            },
            verify: function (e, t, i, s = T) {
              const { context: o, zip215: a } = s,
                c = r.BYTES;
              (e = $('signature', e, 2 * c)),
                (t = $('message', t)),
                (i = $('publicKey', i, c)),
                void 0 !== a && _('zip215', a),
                n && (t = n(t));
              const h = B(e.slice(c, 2 * c));
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
      const Ce = BigInt(5),
        Ne = BigInt(8);
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
              h = (ne(c, Ce, s) * c) % s,
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
          h: Ne,
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
        Ue = 'EdDSA',
        Le = '.',
        Be = 'base64url',
        qe = 'utf8',
        Me = 'utf8',
        $e = 'did',
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
      var Pt = Object.freeze({
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
      const St = tt({
          prefix: 'k',
          name: 'base36',
          alphabet: '0123456789abcdefghijklmnopqrstuvwxyz',
        }),
        Ot = tt({
          prefix: 'K',
          name: 'base36upper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        });
      var _t = Object.freeze({ __proto__: null, base36: St, base36upper: Ot });
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
      const Ct = rt({
          prefix: 'm',
          name: 'base64',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          bitsPerChar: 6,
        }),
        Nt = rt({
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
        base64: Ct,
        base64pad: Nt,
        base64url: Rt,
        base64urlpad: kt,
      });
      const Dt = Array.from(
          '\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42'
        ),
        Ut = Dt.reduce((e, t, r) => ((e[r] = t), e), []),
        Lt = Dt.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []);
      const Bt = et({
        prefix: '\ud83d\ude80',
        name: 'base256emoji',
        encode: function (e) {
          return e.reduce((e, t) => (e += Ut[t]), '');
        },
        decode: function (e) {
          const t = [];
          for (const r of e) {
            const e = Lt[r.codePointAt(0)];
            if (void 0 === e) throw new Error(`Non-base256emoji character: ${r}`);
            t.push(e);
          }
          return new Uint8Array(t);
        },
      });
      var qt = Object.freeze({ __proto__: null, base256emoji: Bt }),
        Mt = function e(t, r, i) {
          r = r || [];
          for (var n = (i = i || 0); t >= $t; ) (r[i++] = (255 & t) | 128), (t /= 128);
          for (; -128 & t; ) (r[i++] = (255 & t) | 128), (t >>>= 7);
          return (r[i] = 0 | t), (e.bytes = i - n + 1), r;
        },
        $t = Math.pow(2, 31);
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
          encode: Mt,
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
      const lr = { ...nt, ...ot, ...ct, ...lt, ...pt, ...Pt, ..._t, ...Tt, ...jt, ...qt };
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
        return (0, n.D)(gr(yr(e, Be), qe));
      }
      function wr(e) {
        return gr(yr((0, n.u)(e), qe), Be);
      }
      function br(e) {
        const t = 'z' + gr(Fe([yr('K36', He), e]), He);
        return [$e, ze, t].join(':');
      }
      function vr(e) {
        return gr(e, Be);
      }
      function Er(e) {
        const t = e.split(Le),
          r = mr(t[0]),
          i = mr(t[1]),
          n = (function (e) {
            return yr(e, Be);
          })(t[2]);
        return { header: r, payload: i, signature: n, data: yr(t.slice(0, 2).join(Le), Me) };
      }
      function Ir(e = l(32)) {
        const t = De.getPublicKey(e);
        return { secretKey: Fe([e, t]), publicKey: t };
      }
      async function Pr(e, t, r, n, s = (0, i.fromMiliseconds)(Date.now())) {
        const o = { alg: Ue, typ: 'JWT' },
          a = { iss: br(n.publicKey), sub: e, aud: t, iat: s, exp: s + r },
          c = (function (e) {
            return yr([wr(e.header), wr(e.payload)].join(Le), Me);
          })({ header: o, payload: a });
        return (function (e) {
          return [wr(e.header), wr(e.payload), vr(e.signature)].join(Le);
        })({ header: o, payload: a, signature: De.sign(c, n.secretKey.slice(0, 32)) });
      }
    },
    85094: function (e, t, r) {
      'use strict';
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
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      const i = r(30004);
      i.__exportStar(r(46869), t), i.__exportStar(r(88033), t);
    },
    46869: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.ONE_THOUSAND = t.ONE_HUNDRED = void 0),
        (t.ONE_HUNDRED = 100),
        (t.ONE_THOUSAND = 1e3);
    },
    88033: function (e, t) {
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
    66736: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      const i = r(30004);
      i.__exportStar(r(44273), t),
        i.__exportStar(r(47001), t),
        i.__exportStar(r(52939), t),
        i.__exportStar(r(36900), t);
    },
    52939: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      r(30004).__exportStar(r(88766), t);
    },
    88766: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.IWatch = void 0);
      t.IWatch = class {};
    },
    83207: function (e, t, r) {
      'use strict';
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
    44273: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      const i = r(30004);
      i.__exportStar(r(83873), t), i.__exportStar(r(83207), t);
    },
    47001: function (e, t) {
      'use strict';
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
      'use strict';
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
            return S;
          },
          __importStar: function () {
            return P;
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
      function P(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      }
      function S(e) {
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
    86138: function (e, t, r) {
      'use strict';
      r.d(t, {
        AWt: function () {
          return Kn;
        },
        $dT: function () {
          return Fn;
        },
        zl_: function () {
          return Wn;
        },
        O6B: function () {
          return po;
        },
        rVF: function () {
          return Yn;
        },
        FpL: function () {
          return Jn;
        },
        E12: function () {
          return xs;
        },
        gn4: function () {
          return nt;
        },
        H1S: function () {
          return Qe;
        },
        IkP: function () {
          return mr;
        },
        hFY: function () {
          return Xe;
        },
        WGe: function () {
          return is;
        },
        xQU: function () {
          return hs;
        },
        peR: function () {
          return as;
        },
        m$A: function () {
          return Xn;
        },
        vBi: function () {
          return us;
        },
        Spz: function () {
          return cs;
        },
        HIp: function () {
          return os;
        },
        E0T: function () {
          return ot;
        },
        P56: function () {
          return Qt;
        },
        GqV: function () {
          return rt;
        },
        wvx: function () {
          return dr;
        },
        $0m: function () {
          return Ge;
        },
        Z42: function () {
          return tt;
        },
        oIp: function () {
          return We;
        },
        Bvr: function () {
          return Is;
        },
        Au2: function () {
          return Zn;
        },
        jdp: function () {
          return Qn;
        },
        guN: function () {
          return Pe;
        },
        rhL: function () {
          return Ve;
        },
        DaH: function () {
          return Fe;
        },
        ouN: function () {
          return Ir;
        },
        bW6: function () {
          return ht;
        },
        NmC: function () {
          return lr;
        },
        kCb: function () {
          return Cs;
        },
        L9d: function () {
          return Ps;
        },
        Y31: function () {
          return Er;
        },
        DJo: function () {
          return hr;
        },
        hA9: function () {
          return Pr;
        },
        cOS: function () {
          return ws;
        },
        _HE: function () {
          return ms;
        },
        D6H: function () {
          return Ns;
        },
        waw: function () {
          return lt;
        },
        HhN: function () {
          return ct;
        },
        YmJ: function () {
          return es;
        },
        rjm: function () {
          return ts;
        },
        DtP: function () {
          return Me;
        },
        jUY: function () {
          return ze;
        },
        gpE: function () {
          return Os;
        },
        rFo: function () {
          return oo;
        },
        BwD: function () {
          return st;
        },
        sa_: function () {
          return $e;
        },
        UGU: function () {
          return Be;
        },
        Ggh: function () {
          return ho;
        },
        xWS: function () {
          return Ms;
        },
        b$m: function () {
          return qe;
        },
        Ih8: function () {
          return Ls;
        },
        h1R: function () {
          return $s;
        },
        h9F: function () {
          return dt;
        },
        Q8x: function () {
          return fs;
        },
        Hs$: function () {
          return gs;
        },
        o8e: function () {
          return js;
        },
        qt8: function () {
          return Rs;
        },
        DdM: function () {
          return zs;
        },
        H4H: function () {
          return Xs;
        },
        nfW: function () {
          return ro;
        },
        Q01: function () {
          return Zs;
        },
        ing: function () {
          return Gs;
        },
        p8o: function () {
          return io;
        },
        B95: function () {
          return so;
        },
        alS: function () {
          return no;
        },
        L5o: function () {
          return ks;
        },
        EJd: function () {
          return Qs;
        },
        Z26: function () {
          return Ys;
        },
        PMr: function () {
          return Js;
        },
        hHR: function () {
          return eo;
        },
        ONw: function () {
          return co;
        },
        naP: function () {
          return Ws;
        },
        JTI: function () {
          return to;
        },
        M_r: function () {
          return Ds;
        },
        jvJ: function () {
          return qs;
        },
        KCv: function () {
          return Je;
        },
        eGA: function () {
          return at;
        },
        qJM: function () {
          return br;
        },
        IPd: function () {
          return Ze;
        },
        DQe: function () {
          return Ie;
        },
        iPz: function () {
          return it;
        },
        Maj: function () {
          return _s;
        },
        heJ: function () {
          return vs;
        },
        WPw: function () {
          return Ke;
        },
        _vH: function () {
          return ft;
        },
        uwg: function () {
          return lo;
        },
        k$y: function () {
          return ut;
        },
        Llj: function () {
          return ds;
        },
        ENt: function () {
          return ps;
        },
        c4l: function () {
          return ur;
        },
        NbI: function () {
          return ys;
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
          ? P(e, t)
          : 'string' === typeof e
            ? (function (e, t = {}) {
                return I(S.encode(e), t);
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
      function P(e, t = {}) {
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
      const S = new TextEncoder();
      const O = new TextEncoder();
      function _(e, t = {}) {
        return 'number' === typeof e || 'bigint' === typeof e
          ? (function (e, t) {
              return j(P(e, t));
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
        C = 70,
        N = 97,
        R = 102;
      function k(e) {
        return e >= x && e <= A
          ? e - x
          : e >= T && e <= C
            ? e - (T - 10)
            : e >= N && e <= R
              ? e - (N - 10)
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
      var U = r(12518);
      const L = BigInt(2 ** 32 - 1),
        B = BigInt(32);
      function q(e, t = !1) {
        return t
          ? { h: Number(e & L), l: Number((e >> B) & L) }
          : { h: 0 | Number((e >> B) & L), l: 0 | Number(e & L) };
      }
      function M(e, t = !1) {
        let r = new Uint32Array(e.length),
          i = new Uint32Array(e.length);
        for (let n = 0; n < e.length; n++) {
          const { h: s, l: o } = q(e[n], t);
          [r[n], i[n]] = [s, o];
        }
        return [r, i];
      }
      const $ = (e, t, r) => (e << r) | (t >>> (32 - r)),
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
      for (let fo = 0, go = J, yo = 1, mo = 0; fo < 24; fo++) {
        ([yo, mo] = [mo, (2 * yo + 3 * mo) % 5]),
          F.push(2 * (5 * mo + yo)),
          W.push((((fo + 1) * (fo + 2)) / 2) % 64);
        let e = Y;
        for (let t = 0; t < 7; t++)
          (go = ((go << J) ^ ((go >> Q) * ee)) % X), go & Z && (e ^= J << ((J << BigInt(t)) - J));
        G.push(e);
      }
      const [te, re] = M(G, !0),
        ie = (e, t, r) => (r > 32 ? H(e, t, r) : $(e, t, r)),
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
            (0, U.k8)(r),
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
          (0, U.$h)(this);
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
          (0, U.$h)(this, !1), (0, U.gk)(e), this.finish();
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
          return (0, U.k8)(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if (((0, U.eB)(e, this), this.finished)) throw new Error('digest() was already called');
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
        ye = r(49392),
        me = r(69391);
      const we = {
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
      var be = r(34155),
        ve = r(48764).Buffer;
      const Ee = ':';
      function Ie(e) {
        const [t, r] = e.split(Ee);
        return { namespace: t, reference: r };
      }
      function Pe(e, t = []) {
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
      function Se(e, t) {
        return e.includes(':') ? [e] : t.chains || [];
      }
      var Oe = Object.defineProperty,
        _e = Object.defineProperties,
        xe = Object.getOwnPropertyDescriptors,
        Ae = Object.getOwnPropertySymbols,
        Te = Object.prototype.hasOwnProperty,
        Ce = Object.prototype.propertyIsEnumerable,
        Ne = (e, t, r) =>
          t in e
            ? Oe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        Re = (e, t) => {
          for (var r in t || (t = {})) Te.call(t, r) && Ne(e, r, t[r]);
          if (Ae) for (var r of Ae(t)) Ce.call(t, r) && Ne(e, r, t[r]);
          return e;
        };
      const ke = 'react-native',
        je = 'node',
        De = 'browser',
        Ue = 'unknown',
        Le = 'js';
      function Be() {
        return typeof be < 'u' && typeof be.versions < 'u' && typeof be.versions.node < 'u';
      }
      function qe() {
        return (
          !(0, s.getDocument)() && !!(0, s.getNavigator)() && 'ReactNative' === navigator.product
        );
      }
      function Me() {
        return (
          qe() &&
          typeof r.g < 'u' &&
          typeof (null == r.g ? void 0 : r.g.Platform) < 'u' &&
          'android' === (null == r.g ? void 0 : r.g.Platform.OS)
        );
      }
      function $e() {
        return (
          qe() &&
          typeof r.g < 'u' &&
          typeof (null == r.g ? void 0 : r.g.Platform) < 'u' &&
          'ios' === (null == r.g ? void 0 : r.g.Platform.OS)
        );
      }
      function ze() {
        return !Be() && !!(0, s.getNavigator)() && !!(0, s.getDocument)();
      }
      function He() {
        return qe() ? ke : Be() ? je : ze() ? De : Ue;
      }
      function Ve() {
        var e;
        try {
          return qe() && typeof r.g < 'u' && typeof (null == r.g ? void 0 : r.g.Application) < 'u'
            ? null == (e = r.g.Application)
              ? void 0
              : e.applicationId
            : void 0;
        } catch {
          return;
        }
      }
      function Ke(e) {
        var t, r;
        const i = Fe();
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
            ((e, t) => _e(e, xe(t)))(Re(Re({}, i), e), {
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
      function Fe() {
        return (0, o.D)() || { name: '', description: '', url: '', icons: [''] };
      }
      function We(e, t, n) {
        const o = (function () {
            if (
              He() === ke &&
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
            const t = He();
            return t === De
              ? [t, (null == (e = (0, s.getLocation)()) ? void 0 : e.host) || 'unknown'].join(':')
              : t;
          })();
        return [[e, t].join('-'), [Le, n].join('-'), o, a].join('/');
      }
      function Ge({
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
            ua: We(e, t, i),
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
      function Ye(e, t) {
        return e.filter((e) => t.includes(e)).length === e.length;
      }
      function Je(e) {
        return Object.fromEntries(e.entries());
      }
      function Ze(e) {
        return new Map(Object.entries(e));
      }
      function Qe(e = n.FIVE_MINUTES, t) {
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
      function Xe(e, t, r) {
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
      function et(e, t) {
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
      function tt(e) {
        return et('topic', e);
      }
      function rt(e) {
        return et('id', e);
      }
      function it(e) {
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
      function nt(e, t) {
        return (0, n.fromMiliseconds)((t || Date.now()) + (0, n.toMiliseconds)(e));
      }
      function st(e) {
        return Date.now() >= (0, n.toMiliseconds)(e);
      }
      function ot(e, t) {
        return `${e}${t ? `:${t}` : ''}`;
      }
      function at(e = [], t = []) {
        return [...new Set([...e, ...t])];
      }
      async function ct({ id: e, topic: t, wcDeepLink: i }) {
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
                  const r = ve.from(e).toString('base64');
                  return t ? r.replace(/[=]/g, '') : r;
                })(i, !0)}`;
              } else n = `${n}/wc?${i}`;
              return n;
            })(o, e, t),
            c = He();
          if (c === De) {
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
            c === ke &&
              typeof (null == r.g ? void 0 : r.g.Linking) < 'u' &&
              (await r.g.Linking.openURL(a));
        } catch (o) {
          console.error(o);
        }
      }
      async function ht(e, t) {
        let r = '';
        try {
          if (ze() && ((r = localStorage.getItem(t)), r)) return r;
          r = await e.getItem(t);
        } catch (i) {
          console.error(i);
        }
        return r;
      }
      function lt(e, t) {
        if (!e.includes(t)) return null;
        const r = e.split(/([&,?,=])/),
          i = r.indexOf(t);
        return r[i + 2];
      }
      function ut() {
        return typeof crypto < 'u' && null != crypto && crypto.randomUUID
          ? crypto.randomUUID()
          : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/gu, (e) => {
              const t = (16 * Math.random()) | 0;
              return ('x' === e ? t : (3 & t) | 8).toString(16);
            });
      }
      function dt() {
        return typeof be < 'u' && 'true' === be.env.IS_VITEST;
      }
      function pt(e) {
        return ve.from(e, 'base64').toString('utf-8');
      }
      function ft(e) {
        return new Promise((t) => setTimeout(t, e));
      }
      function gt(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw new Error('positive integer expected, got ' + e);
      }
      function yt(e, ...t) {
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
      function mt(e) {
        if ('function' != typeof e || 'function' != typeof e.create)
          throw new Error('Hash should be wrapped by utils.wrapConstructor');
        gt(e.outputLen), gt(e.blockLen);
      }
      function wt(e, t = !0) {
        if (e.destroyed) throw new Error('Hash instance has been destroyed');
        if (t && e.finished) throw new Error('Hash#digest() has already been called');
      }
      function bt(e, t) {
        yt(e);
        const r = t.outputLen;
        if (e.length < r)
          throw new Error('digestInto() expects output buffer of length at least ' + r);
      }
      const vt = BigInt(2 ** 32 - 1),
        Et = BigInt(32);
      function It(e, t = !1) {
        return t
          ? { h: Number(e & vt), l: Number((e >> Et) & vt) }
          : { h: 0 | Number((e >> Et) & vt), l: 0 | Number(e & vt) };
      }
      const Pt =
        'object' == typeof globalThis && 'crypto' in globalThis ? globalThis.crypto : void 0;
      function St(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function Ot(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      const _t = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0];
      function xt(e) {
        return (
          ((e << 24) & 4278190080) |
          ((e << 8) & 16711680) |
          ((e >>> 8) & 65280) |
          ((e >>> 24) & 255)
        );
      }
      function At(e) {
        for (let t = 0; t < e.length; t++) e[t] = xt(e[t]);
      }
      function Tt(e) {
        return (
          'string' == typeof e &&
            (e = (function (e) {
              if ('string' != typeof e)
                throw new Error('utf8ToBytes expected string, got ' + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          yt(e),
          e
        );
      }
      class Ct {
        clone() {
          return this._cloneInto();
        }
      }
      function Nt(e) {
        const t = (t) => e().update(Tt(t)).digest(),
          r = e();
        return (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = () => e()), t;
      }
      function Rt(e = 32) {
        if (Pt && 'function' == typeof Pt.getRandomValues)
          return Pt.getRandomValues(new Uint8Array(e));
        if (Pt && 'function' == typeof Pt.randomBytes) return Pt.randomBytes(e);
        throw new Error('crypto.getRandomValues must be defined');
      }
      const kt = [],
        jt = [],
        Dt = [],
        Ut = BigInt(0),
        Lt = BigInt(1),
        Bt = BigInt(2),
        qt = BigInt(7),
        Mt = BigInt(256),
        $t = BigInt(113);
      for (let fo = 0, go = Lt, yo = 1, mo = 0; fo < 24; fo++) {
        ([yo, mo] = [mo, (2 * yo + 3 * mo) % 5]),
          kt.push(2 * (5 * mo + yo)),
          jt.push((((fo + 1) * (fo + 2)) / 2) % 64);
        let e = Ut;
        for (let t = 0; t < 7; t++)
          (go = ((go << Lt) ^ ((go >> qt) * $t)) % Mt),
            go & Bt && (e ^= Lt << ((Lt << BigInt(t)) - Lt));
        Dt.push(e);
      }
      const [zt, Ht] = (function (e, t = !1) {
          let r = new Uint32Array(e.length),
            i = new Uint32Array(e.length);
          for (let n = 0; n < e.length; n++) {
            const { h: s, l: o } = It(e[n], t);
            [r[n], i[n]] = [s, o];
          }
          return [r, i];
        })(Dt, !0),
        Vt = (e, t, r) =>
          r > 32
            ? ((e, t, r) => (t << (r - 32)) | (e >>> (64 - r)))(e, t, r)
            : ((e, t, r) => (e << r) | (t >>> (32 - r)))(e, t, r),
        Kt = (e, t, r) =>
          r > 32
            ? ((e, t, r) => (e << (r - 32)) | (t >>> (64 - r)))(e, t, r)
            : ((e, t, r) => (t << r) | (e >>> (32 - r)))(e, t, r);
      class Ft extends Ct {
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
            gt(r),
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
          _t || At(this.state32),
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
                    a = Vt(s, o, 1) ^ r[t],
                    c = Kt(s, o, 1) ^ r[t + 1];
                  for (let r = 0; r < 50; r += 10) (e[i + r] ^= a), (e[i + r + 1] ^= c);
                }
                let t = e[2],
                  n = e[3];
                for (let r = 0; r < 24; r++) {
                  const i = jt[r],
                    s = Vt(t, n, i),
                    o = Kt(t, n, i),
                    a = kt[r];
                  (t = e[a]), (n = e[a + 1]), (e[a] = s), (e[a + 1] = o);
                }
                for (let i = 0; i < 50; i += 10) {
                  for (let t = 0; t < 10; t++) r[t] = e[i + t];
                  for (let t = 0; t < 10; t++) e[i + t] ^= ~r[(t + 2) % 10] & r[(t + 4) % 10];
                }
                (e[0] ^= zt[i]), (e[1] ^= Ht[i]);
              }
              r.fill(0);
            })(this.state32, this.rounds),
            _t || At(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          wt(this);
          const { blockLen: t, state: r } = this,
            i = (e = Tt(e)).length;
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
          wt(this, !1), yt(e), this.finish();
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
          return gt(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if ((bt(e, this), this.finished)) throw new Error('digest() was already called');
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
            e || (e = new Ft(t, r, i, s, n)),
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
      const Wt = ((e, t, r) => Nt(() => new Ft(t, e, r)))(1, 136, 32),
        Gt = 'https://rpc.walletconnect.org/v1';
      function Yt(e) {
        const t = `\x19Ethereum Signed Message:\n${e.length}`,
          r = new TextEncoder().encode(t + e);
        return '0x' + ve.from(Wt(r)).toString('hex');
      }
      async function Jt(e, t, r, i, n, s) {
        switch (r.t) {
          case 'eip191':
            return await (async function (e, t, r) {
              return (await pe({ hash: Yt(t), signature: r })).toLowerCase() === e.toLowerCase();
            })(e, t, r.s);
          case 'eip1271':
            return await (async function (e, t, r, i, n, s) {
              const o = Ie(i);
              if (!o.namespace || !o.reference)
                throw new Error(
                  `isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${i}`
                );
              try {
                const o = '0x1626ba7e',
                  a = '0000000000000000000000000000000000000000000000000000000000000040',
                  c = '0000000000000000000000000000000000000000000000000000000000000041',
                  h = r.substring(2),
                  l = o + Yt(t).substring(2) + a + c + h,
                  u = await fetch(`${s || Gt}/?chainId=${i}&projectId=${n}`, {
                    method: 'POST',
                    body: JSON.stringify({
                      id: Zt(),
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
      function Zt() {
        return Date.now() + Math.floor(1e3 * Math.random());
      }
      function Qt(e) {
        const t = atob(e),
          r = new Uint8Array(t.length);
        for (let o = 0; o < t.length; o++) r[o] = t.charCodeAt(o);
        const i = r[0];
        if (0 === i) throw new Error('No signatures found');
        const n = 1 + 64 * i;
        if (r.length < n) throw new Error('Transaction data too short for claimed signature count');
        if (r.length < 100) throw new Error('Transaction too short');
        const s = ve.from(e, 'base64').slice(1, 65);
        return ge.encode(s);
      }
      var Xt = Object.defineProperty,
        er = Object.defineProperties,
        tr = Object.getOwnPropertyDescriptors,
        rr = Object.getOwnPropertySymbols,
        ir = Object.prototype.hasOwnProperty,
        nr = Object.prototype.propertyIsEnumerable,
        sr = (e, t, r) =>
          t in e
            ? Xt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (e[t] = r),
        or = (e, t) => {
          for (var r in t || (t = {})) ir.call(t, r) && sr(e, r, t[r]);
          if (rr) for (var r of rr(t)) nr.call(t, r) && sr(e, r, t[r]);
          return e;
        },
        ar = (e, t) => er(e, tr(t));
      const cr = (e) => e?.split(':'),
        hr = (e) => {
          const t = e && cr(e);
          if (t) return t[2] + ':' + t[3];
        },
        lr = (e) => {
          const t = e && cr(e);
          if (t) return t.pop();
        };
      async function ur(e) {
        const { cacao: t, projectId: r } = e,
          { s: i, p: n } = t,
          s = dr(n, n.iss),
          o = lr(n.iss);
        return await Jt(o, s, i, hr(n.iss), r);
      }
      const dr = (e, t) => {
        const r = `${e.domain} wants you to sign in with your Ethereum account:`,
          i = lr(t);
        if (!e.aud && !e.uri)
          throw new Error('Either `aud` or `uri` is required to construct the message');
        let n = e.statement || void 0;
        const s = `URI: ${e.aud || e.uri}`,
          o = `Version: ${e.version}`,
          a = `Chain ID: ${((e) => {
            const t = e && cr(e);
            if (t) return e.includes('did:pkh:') ? t[3] : t[1];
          })(t)}`,
          c = `Nonce: ${e.nonce}`,
          h = `Issued At: ${e.iat}`,
          l = e.exp ? `Expiration Time: ${e.exp}` : void 0,
          u = e.nbf ? `Not Before: ${e.nbf}` : void 0,
          d = e.requestId ? `Request ID: ${e.requestId}` : void 0,
          p = e.resources ? `Resources:${e.resources.map((e) => `\n- ${e}`).join('')}` : void 0,
          f = Pr(e.resources);
        if (f) {
          n = vr(n, yr(f));
        }
        return [r, i, '', n, '', s, o, a, c, h, l, u, d, p].filter((e) => null != e).join('\n');
      };
      function pr(e) {
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
      function fr(e, t, r = {}) {
        t = t?.sort((e, t) => e.localeCompare(t));
        const i = t.map((t) => ({ [`${e}/${t}`]: [r] }));
        return Object.assign({}, ...i);
      }
      function gr(e) {
        return (
          pr(e),
          `urn:recap:${(function (e) {
            return ve.from(JSON.stringify(e)).toString('base64');
          })(e).replace(/=/g, '')}`
        );
      }
      function yr(e) {
        const t = (function (e) {
          return JSON.parse(ve.from(e, 'base64').toString('utf-8'));
        })(e.replace('urn:recap:', ''));
        return pr(t), t;
      }
      function mr(e, t, r) {
        const i = (function (e, t, r, i = {}) {
          return r?.sort((e, t) => e.localeCompare(t)), { att: { [e]: fr(t, r, i) } };
        })(e, t, r);
        return gr(i);
      }
      function wr(e) {
        return e && e.includes('urn:recap:');
      }
      function br(e, t) {
        const r = (function (e, t) {
          pr(e), pr(t);
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
                  i.att[r] = ar(or({}, i.att[r]), {
                    [n]:
                      (null == (s = e.att[r]) ? void 0 : s[n]) ||
                      (null == (o = t.att[r]) ? void 0 : o[n]),
                  });
                });
            }),
            i
          );
        })(yr(e), yr(t));
        return gr(r);
      }
      function vr(e = '', t) {
        pr(t);
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
      function Er(e) {
        var t;
        const r = yr(e);
        pr(r);
        const i = null == (t = r.att) ? void 0 : t.eip155;
        return i ? Object.keys(i).map((e) => e.split('/')[1]) : [];
      }
      function Ir(e) {
        const t = yr(e);
        pr(t);
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
      function Pr(e) {
        if (!e) return;
        const t = e?.[e.length - 1];
        return wr(t) ? t : void 0;
      }
      function Sr(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw new Error('positive integer expected, got ' + e);
      }
      function Or(e) {
        return (
          e instanceof Uint8Array || (ArrayBuffer.isView(e) && 'Uint8Array' === e.constructor.name)
        );
      }
      function _r(e, ...t) {
        if (!Or(e)) throw new Error('Uint8Array expected');
        if (t.length > 0 && !t.includes(e.length))
          throw new Error('Uint8Array expected of length ' + t + ', got length=' + e.length);
      }
      function xr(e, t = !0) {
        if (e.destroyed) throw new Error('Hash instance has been destroyed');
        if (t && e.finished) throw new Error('Hash#digest() has already been called');
      }
      function Ar(e) {
        if ('boolean' != typeof e) throw new Error(`boolean expected, not ${e}`);
      }
      const Tr = (e) => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
      if (!(68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0]))
        throw new Error('Non little-endian hardware is not supported');
      function Cr(e) {
        if ('string' == typeof e)
          e = (function (e) {
            if ('string' != typeof e) throw new Error('string expected');
            return new Uint8Array(new TextEncoder().encode(e));
          })(e);
        else {
          if (!Or(e)) throw new Error('Uint8Array expected, got ' + typeof e);
          e = kr(e);
        }
        return e;
      }
      function Nr(e, t, r = !0) {
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
      function Rr(e, t, r, i) {
        if ('function' == typeof e.setBigUint64) return e.setBigUint64(t, r, i);
        const n = BigInt(32),
          s = BigInt(4294967295),
          o = Number((r >> n) & s),
          a = Number(r & s),
          c = i ? 4 : 0,
          h = i ? 0 : 4;
        e.setUint32(t + c, o, i), e.setUint32(t + h, a, i);
      }
      function kr(e) {
        return Uint8Array.from(e);
      }
      function jr(...e) {
        for (let t = 0; t < e.length; t++) e[t].fill(0);
      }
      const Dr = (e) => Uint8Array.from(e.split('').map((e) => e.charCodeAt(0))),
        Ur = Dr('expand 16-byte k'),
        Lr = Dr('expand 32-byte k'),
        Br = Tr(Ur),
        qr = Tr(Lr);
      function Mr(e, t) {
        return (e << t) | (e >>> (32 - t));
      }
      function $r(e) {
        return e.byteOffset % 4 === 0;
      }
      const zr = 2 ** 32 - 1,
        Hr = new Uint32Array();
      const Vr = (e, t) => (255 & e[t++]) | ((255 & e[t++]) << 8);
      class Kr {
        constructor(e) {
          (this.blockLen = 16),
            (this.outputLen = 16),
            (this.buffer = new Uint8Array(16)),
            (this.r = new Uint16Array(10)),
            (this.h = new Uint16Array(10)),
            (this.pad = new Uint16Array(8)),
            (this.pos = 0),
            (this.finished = !1),
            _r((e = Cr(e)), 32);
          const t = Vr(e, 0),
            r = Vr(e, 2),
            i = Vr(e, 4),
            n = Vr(e, 6),
            s = Vr(e, 8),
            o = Vr(e, 10),
            a = Vr(e, 12),
            c = Vr(e, 14);
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
          for (let h = 0; h < 8; h++) this.pad[h] = Vr(e, 16 + 2 * h);
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
            y = Vr(e, t + 0),
            m = Vr(e, t + 2),
            w = Vr(e, t + 4),
            b = Vr(e, t + 6),
            v = Vr(e, t + 8),
            E = Vr(e, t + 10),
            I = Vr(e, t + 12),
            P = Vr(e, t + 14);
          let S = n[0] + (8191 & y),
            O = n[1] + (8191 & ((y >>> 13) | (m << 3))),
            _ = n[2] + (8191 & ((m >>> 10) | (w << 6))),
            x = n[3] + (8191 & ((w >>> 7) | (b << 9))),
            A = n[4] + (8191 & ((b >>> 4) | (v << 12))),
            T = n[5] + ((v >>> 1) & 8191),
            C = n[6] + (8191 & ((v >>> 14) | (E << 2))),
            N = n[7] + (8191 & ((E >>> 11) | (I << 5))),
            R = n[8] + (8191 & ((I >>> 8) | (P << 8))),
            k = n[9] + ((P >>> 5) | i),
            j = 0,
            D = j + S * o + O * (5 * g) + _ * (5 * f) + x * (5 * p) + A * (5 * d);
          (j = D >>> 13),
            (D &= 8191),
            (D += T * (5 * u) + C * (5 * l) + N * (5 * h) + R * (5 * c) + k * (5 * a)),
            (j += D >>> 13),
            (D &= 8191);
          let U = j + S * a + O * o + _ * (5 * g) + x * (5 * f) + A * (5 * p);
          (j = U >>> 13),
            (U &= 8191),
            (U += T * (5 * d) + C * (5 * u) + N * (5 * l) + R * (5 * h) + k * (5 * c)),
            (j += U >>> 13),
            (U &= 8191);
          let L = j + S * c + O * a + _ * o + x * (5 * g) + A * (5 * f);
          (j = L >>> 13),
            (L &= 8191),
            (L += T * (5 * p) + C * (5 * d) + N * (5 * u) + R * (5 * l) + k * (5 * h)),
            (j += L >>> 13),
            (L &= 8191);
          let B = j + S * h + O * c + _ * a + x * o + A * (5 * g);
          (j = B >>> 13),
            (B &= 8191),
            (B += T * (5 * f) + C * (5 * p) + N * (5 * d) + R * (5 * u) + k * (5 * l)),
            (j += B >>> 13),
            (B &= 8191);
          let q = j + S * l + O * h + _ * c + x * a + A * o;
          (j = q >>> 13),
            (q &= 8191),
            (q += T * (5 * g) + C * (5 * f) + N * (5 * p) + R * (5 * d) + k * (5 * u)),
            (j += q >>> 13),
            (q &= 8191);
          let M = j + S * u + O * l + _ * h + x * c + A * a;
          (j = M >>> 13),
            (M &= 8191),
            (M += T * o + C * (5 * g) + N * (5 * f) + R * (5 * p) + k * (5 * d)),
            (j += M >>> 13),
            (M &= 8191);
          let $ = j + S * d + O * u + _ * l + x * h + A * c;
          (j = $ >>> 13),
            ($ &= 8191),
            ($ += T * a + C * o + N * (5 * g) + R * (5 * f) + k * (5 * p)),
            (j += $ >>> 13),
            ($ &= 8191);
          let z = j + S * p + O * d + _ * u + x * l + A * h;
          (j = z >>> 13),
            (z &= 8191),
            (z += T * c + C * a + N * o + R * (5 * g) + k * (5 * f)),
            (j += z >>> 13),
            (z &= 8191);
          let H = j + S * f + O * p + _ * d + x * u + A * l;
          (j = H >>> 13),
            (H &= 8191),
            (H += T * h + C * c + N * a + R * o + k * (5 * g)),
            (j += H >>> 13),
            (H &= 8191);
          let V = j + S * g + O * f + _ * p + x * d + A * u;
          (j = V >>> 13),
            (V &= 8191),
            (V += T * l + C * h + N * c + R * a + k * o),
            (j += V >>> 13),
            (V &= 8191),
            (j = ((j << 2) + j) | 0),
            (j = (j + D) | 0),
            (D = 8191 & j),
            (j >>>= 13),
            (U += j),
            (n[0] = D),
            (n[1] = U),
            (n[2] = L),
            (n[3] = B),
            (n[4] = q),
            (n[5] = M),
            (n[6] = $),
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
          jr(r);
        }
        update(e) {
          xr(this);
          const { buffer: t, blockLen: r } = this,
            i = (e = Cr(e)).length;
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
          jr(this.h, this.r, this.buffer, this.pad);
        }
        digestInto(e) {
          xr(this),
            (function (e, t) {
              _r(e);
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
      const Fr = (function (e) {
        const t = (t, r) => e(r).update(Cr(t)).digest(),
          r = e(new Uint8Array(32));
        return (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = (t) => e(t)), t;
      })((e) => new Kr(e));
      const Wr = (function (e, t) {
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
            Sr(n),
            Sr(o),
            Ar(s),
            Ar(r),
            (t, a, c, h, l = 0) => {
              _r(t), _r(a), _r(c);
              const u = c.length;
              if ((void 0 === h && (h = new Uint8Array(u)), _r(h), Sr(l), l < 0 || l >= zr))
                throw new Error('arx: counter overflow');
              if (h.length < u)
                throw new Error(`arx: output (${h.length}) is shorter than data (${u})`);
              const d = [];
              let p,
                f,
                g = t.length;
              if (32 === g) d.push((p = kr(t))), (f = qr);
              else {
                if (16 !== g || !r) throw new Error(`arx: invalid 32-byte key, got length=${g}`);
                (p = new Uint8Array(32)), p.set(t), p.set(t, 16), (f = Br), d.push(p);
              }
              $r(a) || d.push((a = kr(a)));
              const y = Tr(p);
              if (i) {
                if (24 !== a.length) throw new Error('arx: extended nonce must be 24 bytes');
                i(f, y, Tr(a.subarray(0, 16)), y), (a = a.subarray(16));
              }
              const m = 16 - n;
              if (m !== a.length) throw new Error(`arx: nonce must be ${m} or 16 bytes`);
              if (12 !== m) {
                const e = new Uint8Array(12);
                e.set(a, s ? 0 : 12 - a.length), (a = e), d.push(a);
              }
              const w = Tr(a);
              return (
                (function (e, t, r, i, n, s, o, a) {
                  const c = n.length,
                    h = new Uint8Array(64),
                    l = Tr(h),
                    u = $r(n) && $r(s),
                    d = u ? Tr(n) : Hr,
                    p = u ? Tr(s) : Hr;
                  for (let f = 0; f < c; o++) {
                    if ((e(t, r, i, l, o, a), o >= zr)) throw new Error('arx: counter overflow');
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
                jr(...d),
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
              P = a,
              S = c,
              O = h,
              _ = l,
              x = u,
              A = d,
              T = p,
              C = f,
              N = g,
              R = y,
              k = m,
              j = w,
              D = b,
              U = v,
              L = E;
            for (let q = 0; q < s; q += 2)
              (I = (I + _) | 0),
                (j = Mr(j ^ I, 16)),
                (C = (C + j) | 0),
                (_ = Mr(_ ^ C, 12)),
                (I = (I + _) | 0),
                (j = Mr(j ^ I, 8)),
                (C = (C + j) | 0),
                (_ = Mr(_ ^ C, 7)),
                (P = (P + x) | 0),
                (D = Mr(D ^ P, 16)),
                (N = (N + D) | 0),
                (x = Mr(x ^ N, 12)),
                (P = (P + x) | 0),
                (D = Mr(D ^ P, 8)),
                (N = (N + D) | 0),
                (x = Mr(x ^ N, 7)),
                (S = (S + A) | 0),
                (U = Mr(U ^ S, 16)),
                (R = (R + U) | 0),
                (A = Mr(A ^ R, 12)),
                (S = (S + A) | 0),
                (U = Mr(U ^ S, 8)),
                (R = (R + U) | 0),
                (A = Mr(A ^ R, 7)),
                (O = (O + T) | 0),
                (L = Mr(L ^ O, 16)),
                (k = (k + L) | 0),
                (T = Mr(T ^ k, 12)),
                (O = (O + T) | 0),
                (L = Mr(L ^ O, 8)),
                (k = (k + L) | 0),
                (T = Mr(T ^ k, 7)),
                (I = (I + x) | 0),
                (L = Mr(L ^ I, 16)),
                (R = (R + L) | 0),
                (x = Mr(x ^ R, 12)),
                (I = (I + x) | 0),
                (L = Mr(L ^ I, 8)),
                (R = (R + L) | 0),
                (x = Mr(x ^ R, 7)),
                (P = (P + A) | 0),
                (j = Mr(j ^ P, 16)),
                (k = (k + j) | 0),
                (A = Mr(A ^ k, 12)),
                (P = (P + A) | 0),
                (j = Mr(j ^ P, 8)),
                (k = (k + j) | 0),
                (A = Mr(A ^ k, 7)),
                (S = (S + T) | 0),
                (D = Mr(D ^ S, 16)),
                (C = (C + D) | 0),
                (T = Mr(T ^ C, 12)),
                (S = (S + T) | 0),
                (D = Mr(D ^ S, 8)),
                (C = (C + D) | 0),
                (T = Mr(T ^ C, 7)),
                (O = (O + _) | 0),
                (U = Mr(U ^ O, 16)),
                (N = (N + U) | 0),
                (_ = Mr(_ ^ N, 12)),
                (O = (O + _) | 0),
                (U = Mr(U ^ O, 8)),
                (N = (N + U) | 0),
                (_ = Mr(_ ^ N, 7));
            let B = 0;
            (i[B++] = (o + I) | 0),
              (i[B++] = (a + P) | 0),
              (i[B++] = (c + S) | 0),
              (i[B++] = (h + O) | 0),
              (i[B++] = (l + _) | 0),
              (i[B++] = (u + x) | 0),
              (i[B++] = (d + A) | 0),
              (i[B++] = (p + T) | 0),
              (i[B++] = (f + C) | 0),
              (i[B++] = (g + N) | 0),
              (i[B++] = (y + R) | 0),
              (i[B++] = (m + k) | 0),
              (i[B++] = (w + j) | 0),
              (i[B++] = (b + D) | 0),
              (i[B++] = (v + U) | 0),
              (i[B++] = (E + L) | 0);
          },
          { counterRight: !1, counterLength: 4, allowShortKeys: !1 }
        ),
        Gr = new Uint8Array(16),
        Yr = (e, t) => {
          e.update(t);
          const r = t.length % 16;
          r && e.update(Gr.subarray(r));
        },
        Jr = new Uint8Array(32);
      function Zr(e, t, r, i, n) {
        const s = e(t, r, Jr),
          o = Fr.create(s);
        n && Yr(o, n), Yr(o, i);
        const a = new Uint8Array(16),
          c = ((e) => new DataView(e.buffer, e.byteOffset, e.byteLength))(a);
        Rr(c, 0, BigInt(n ? n.length : 0), !0), Rr(c, 8, BigInt(i.length), !0), o.update(a);
        const h = o.digest();
        return jr(s, a), h;
      }
      const Qr = ((e, t) => {
        function r(r, ...i) {
          if ((_r(r), void 0 !== e.nonceLength)) {
            const t = i[0];
            if (!t) throw new Error('nonce / iv required');
            e.varSizeNonce ? _r(t) : _r(t, e.nonceLength);
          }
          const n = e.tagLength;
          n && void 0 !== i[1] && _r(i[1]);
          const s = t(r, ...i),
            o = (e, t) => {
              if (void 0 !== t) {
                if (2 !== e) throw new Error('cipher output not supported');
                _r(t);
              }
            };
          let a = !1;
          return {
            encrypt(e, t) {
              if (a) throw new Error('cannot encrypt() twice with same key + nonce');
              return (a = !0), _r(e), o(s.encrypt.length, t), s.encrypt(e, t);
            },
            decrypt(e, t) {
              if ((_r(e), n && e.length < n))
                throw new Error('invalid ciphertext length: smaller than tagLength=' + n);
              return o(s.decrypt.length, t), s.decrypt(e, t);
            },
          };
        }
        return Object.assign(r, e), r;
      })(
        { blockSize: 64, nonceLength: 12, tagLength: 16 },
        ((Xr = Wr),
        (e, t, r) => ({
          encrypt(i, n) {
            const s = i.length;
            (n = Nr(s + 16, n, !1)).set(i);
            const o = n.subarray(0, -16);
            Xr(e, t, o, o, 1);
            const a = Zr(Xr, e, t, o, r);
            return n.set(a, s), jr(a), n;
          },
          decrypt(i, n) {
            n = Nr(i.length - 16, n, !1);
            const s = i.subarray(0, -16),
              o = i.subarray(-16),
              a = Zr(Xr, e, t, s, r);
            if (
              !(function (e, t) {
                if (e.length !== t.length) return !1;
                let r = 0;
                for (let i = 0; i < e.length; i++) r |= e[i] ^ t[i];
                return 0 === r;
              })(o, a)
            )
              throw new Error('invalid tag');
            return n.set(i.subarray(0, -16)), Xr(e, t, n, n, 1), jr(a), n;
          },
        }))
      );
      var Xr;
      class ei extends Ct {
        constructor(e, t) {
          super(), (this.finished = !1), (this.destroyed = !1), mt(e);
          const r = Tt(t);
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
          return wt(this), this.iHash.update(e), this;
        }
        digestInto(e) {
          wt(this),
            yt(e, this.outputLen),
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
      const ti = (e, t, r) => new ei(e, t).update(r).digest();
      ti.create = (e, t) => new ei(e, t);
      const ri = new Uint8Array([0]),
        ii = new Uint8Array();
      const ni = (e, t, r, i, n) =>
        (function (e, t, r, i = 32) {
          if ((mt(e), gt(i), i > 255 * e.outputLen))
            throw new Error('Length should be <= 255*HashLen');
          const n = Math.ceil(i / e.outputLen);
          void 0 === r && (r = ii);
          const s = new Uint8Array(n * e.outputLen),
            o = ti.create(e, t),
            a = o._cloneInto(),
            c = new Uint8Array(o.outputLen);
          for (let h = 0; h < n; h++)
            (ri[0] = h + 1),
              a
                .update(0 === h ? ii : c)
                .update(r)
                .update(ri)
                .digestInto(c),
              s.set(c, e.outputLen * h),
              o._cloneInto(a);
          return o.destroy(), a.destroy(), c.fill(0), ri.fill(0), s.slice(0, i);
        })(
          e,
          (function (e, t, r) {
            return mt(e), void 0 === r && (r = new Uint8Array(e.outputLen)), ti(e, Tt(r), Tt(t));
          })(e, t, r),
          i,
          n
        );
      function si(e, t, r) {
        return (e & t) ^ (~e & r);
      }
      function oi(e, t, r) {
        return (e & t) ^ (e & r) ^ (t & r);
      }
      class ai extends Ct {
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
            (this.view = St(this.buffer));
        }
        update(e) {
          wt(this);
          const { view: t, buffer: r, blockLen: i } = this,
            n = (e = Tt(e)).length;
          for (let s = 0; s < n; ) {
            const o = Math.min(i - this.pos, n - s);
            if (o !== i)
              r.set(e.subarray(s, s + o), this.pos),
                (this.pos += o),
                (s += o),
                this.pos === i && (this.process(t, 0), (this.pos = 0));
            else {
              const t = St(e);
              for (; i <= n - s; s += i) this.process(t, s);
            }
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          wt(this), bt(e, this), (this.finished = !0);
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
          const o = St(e),
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
      const ci = new Uint32Array([
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
        hi = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635,
          1541459225,
        ]),
        li = new Uint32Array(64);
      class ui extends ai {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | hi[0]),
            (this.B = 0 | hi[1]),
            (this.C = 0 | hi[2]),
            (this.D = 0 | hi[3]),
            (this.E = 0 | hi[4]),
            (this.F = 0 | hi[5]),
            (this.G = 0 | hi[6]),
            (this.H = 0 | hi[7]);
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
          for (let l = 0; l < 16; l++, t += 4) li[l] = e.getUint32(t, !1);
          for (let l = 16; l < 64; l++) {
            const e = li[l - 15],
              t = li[l - 2],
              r = Ot(e, 7) ^ Ot(e, 18) ^ (e >>> 3),
              i = Ot(t, 17) ^ Ot(t, 19) ^ (t >>> 10);
            li[l] = (i + li[l - 7] + r + li[l - 16]) | 0;
          }
          let { A: r, B: i, C: n, D: s, E: o, F: a, G: c, H: h } = this;
          for (let l = 0; l < 64; l++) {
            const e = (h + (Ot(o, 6) ^ Ot(o, 11) ^ Ot(o, 25)) + si(o, a, c) + ci[l] + li[l]) | 0,
              t = ((Ot(r, 2) ^ Ot(r, 13) ^ Ot(r, 22)) + oi(r, i, n)) | 0;
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
          li.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      const di = Nt(() => new ui()),
        pi = BigInt(0),
        fi = BigInt(1),
        gi = BigInt(2);
      function yi(e) {
        return (
          e instanceof Uint8Array || (ArrayBuffer.isView(e) && 'Uint8Array' === e.constructor.name)
        );
      }
      function mi(e) {
        if (!yi(e)) throw new Error('Uint8Array expected');
      }
      function wi(e, t) {
        if ('boolean' != typeof t) throw new Error(e + ' boolean expected, got ' + t);
      }
      const bi = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
      function vi(e) {
        mi(e);
        let t = '';
        for (let r = 0; r < e.length; r++) t += bi[e[r]];
        return t;
      }
      function Ei(e) {
        const t = e.toString(16);
        return 1 & t.length ? '0' + t : t;
      }
      function Ii(e) {
        if ('string' != typeof e) throw new Error('hex string expected, got ' + typeof e);
        return '' === e ? pi : BigInt('0x' + e);
      }
      const Pi = 48,
        Si = 57,
        Oi = 65,
        _i = 70,
        xi = 97,
        Ai = 102;
      function Ti(e) {
        return e >= Pi && e <= Si
          ? e - Pi
          : e >= Oi && e <= _i
            ? e - (Oi - 10)
            : e >= xi && e <= Ai
              ? e - (xi - 10)
              : void 0;
      }
      function Ci(e) {
        if ('string' != typeof e) throw new Error('hex string expected, got ' + typeof e);
        const t = e.length,
          r = t / 2;
        if (t % 2) throw new Error('hex string expected, got unpadded hex of length ' + t);
        const i = new Uint8Array(r);
        for (let n = 0, s = 0; n < r; n++, s += 2) {
          const t = Ti(e.charCodeAt(s)),
            r = Ti(e.charCodeAt(s + 1));
          if (void 0 === t || void 0 === r) {
            const t = e[s] + e[s + 1];
            throw new Error('hex string expected, got non-hex character "' + t + '" at index ' + s);
          }
          i[n] = 16 * t + r;
        }
        return i;
      }
      function Ni(e) {
        return Ii(vi(e));
      }
      function Ri(e) {
        return mi(e), Ii(vi(Uint8Array.from(e).reverse()));
      }
      function ki(e, t) {
        return Ci(e.toString(16).padStart(2 * t, '0'));
      }
      function ji(e, t) {
        return ki(e, t).reverse();
      }
      function Di(e, t, r) {
        let i;
        if ('string' == typeof t)
          try {
            i = Ci(t);
          } catch (s) {
            throw new Error(e + ' must be hex string or Uint8Array, cause: ' + s);
          }
        else {
          if (!yi(t)) throw new Error(e + ' must be hex string or Uint8Array');
          i = Uint8Array.from(t);
        }
        const n = i.length;
        if ('number' == typeof r && n !== r)
          throw new Error(e + ' of length ' + r + ' expected, got ' + n);
        return i;
      }
      function Ui(...e) {
        let t = 0;
        for (let i = 0; i < e.length; i++) {
          const r = e[i];
          mi(r), (t += r.length);
        }
        const r = new Uint8Array(t);
        for (let i = 0, n = 0; i < e.length; i++) {
          const t = e[i];
          r.set(t, n), (n += t.length);
        }
        return r;
      }
      const Li = (e) => 'bigint' == typeof e && pi <= e;
      function Bi(e, t, r) {
        return Li(e) && Li(t) && Li(r) && t <= e && e < r;
      }
      function qi(e, t, r, i) {
        if (!Bi(t, r, i))
          throw new Error('expected valid ' + e + ': ' + r + ' <= n < ' + i + ', got ' + t);
      }
      function Mi(e) {
        let t;
        for (t = 0; e > pi; e >>= fi, t += 1);
        return t;
      }
      const $i = (e) => (gi << BigInt(e - 1)) - fi,
        zi = (e) => new Uint8Array(e),
        Hi = (e) => Uint8Array.from(e);
      function Vi(e, t, r) {
        if ('number' != typeof e || e < 2) throw new Error('hashLen must be a number');
        if ('number' != typeof t || t < 2) throw new Error('qByteLen must be a number');
        if ('function' != typeof r) throw new Error('hmacFn must be a function');
        let i = zi(e),
          n = zi(e),
          s = 0;
        const o = () => {
            i.fill(1), n.fill(0), (s = 0);
          },
          a = (...e) => r(n, i, ...e),
          c = (e = zi()) => {
            (n = a(Hi([0]), e)), (i = a()), 0 !== e.length && ((n = a(Hi([1]), e)), (i = a()));
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
            return Ui(...r);
          };
        return (e, t) => {
          let r;
          for (o(), c(e); !(r = t(h())); ) c();
          return o(), r;
        };
      }
      const Ki = {
        bigint: (e) => 'bigint' == typeof e,
        function: (e) => 'function' == typeof e,
        boolean: (e) => 'boolean' == typeof e,
        string: (e) => 'string' == typeof e,
        stringOrUint8Array: (e) => 'string' == typeof e || yi(e),
        isSafeInteger: (e) => Number.isSafeInteger(e),
        array: (e) => Array.isArray(e),
        field: (e, t) => t.Fp.isValid(e),
        hash: (e) => 'function' == typeof e && Number.isSafeInteger(e.outputLen),
      };
      function Fi(e, t, r = {}) {
        const i = (t, r, i) => {
          const n = Ki[r];
          if ('function' != typeof n) throw new Error('invalid validator function');
          const s = e[t];
          if ((!i || void 0 !== s) && !n(s, e))
            throw new Error('param ' + String(t) + ' is invalid. Expected ' + r + ', got ' + s);
        };
        for (const [n, s] of Object.entries(t)) i(n, s, !1);
        for (const [n, s] of Object.entries(r)) i(n, s, !0);
        return e;
      }
      function Wi(e) {
        const t = new WeakMap();
        return (r, ...i) => {
          const n = t.get(r);
          if (void 0 !== n) return n;
          const s = e(r, ...i);
          return t.set(r, s), s;
        };
      }
      var Gi = Object.freeze({
        __proto__: null,
        isBytes: yi,
        abytes: mi,
        abool: wi,
        bytesToHex: vi,
        numberToHexUnpadded: Ei,
        hexToNumber: Ii,
        hexToBytes: Ci,
        bytesToNumberBE: Ni,
        bytesToNumberLE: Ri,
        numberToBytesBE: ki,
        numberToBytesLE: ji,
        numberToVarBytesBE: function (e) {
          return Ci(Ei(e));
        },
        ensureBytes: Di,
        concatBytes: Ui,
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
        inRange: Bi,
        aInRange: qi,
        bitLen: Mi,
        bitGet: function (e, t) {
          return (e >> BigInt(t)) & fi;
        },
        bitSet: function (e, t, r) {
          return e | ((r ? fi : pi) << BigInt(t));
        },
        bitMask: $i,
        createHmacDrbg: Vi,
        validateObject: Fi,
        notImplemented: () => {
          throw new Error('not implemented');
        },
        memoized: Wi,
      });
      const Yi = BigInt(0),
        Ji = BigInt(1),
        Zi = BigInt(2),
        Qi = BigInt(3),
        Xi = BigInt(4),
        en = BigInt(5),
        tn = BigInt(8);
      function rn(e, t) {
        const r = e % t;
        return r >= Yi ? r : t + r;
      }
      function nn(e, t, r) {
        if (t < Yi) throw new Error('invalid exponent, negatives unsupported');
        if (r <= Yi) throw new Error('invalid modulus');
        if (r === Ji) return Yi;
        let i = Ji;
        for (; t > Yi; ) t & Ji && (i = (i * e) % r), (e = (e * e) % r), (t >>= Ji);
        return i;
      }
      function sn(e, t, r) {
        let i = e;
        for (; t-- > Yi; ) (i *= i), (i %= r);
        return i;
      }
      function on(e, t) {
        if (e === Yi) throw new Error('invert: expected non-zero number');
        if (t <= Yi) throw new Error('invert: expected positive modulus, got ' + t);
        let r = rn(e, t),
          i = t,
          n = Yi,
          s = Ji;
        for (; r !== Yi; ) {
          const e = i % r,
            t = n - s * (i / r);
          (i = r), (r = e), (n = s), (s = t);
        }
        if (i !== Ji) throw new Error('invert: does not exist');
        return rn(n, t);
      }
      function an(e) {
        if (e % Xi === Qi) {
          const t = (e + Ji) / Xi;
          return function (e, r) {
            const i = e.pow(r, t);
            if (!e.eql(e.sqr(i), r)) throw new Error('Cannot find square root');
            return i;
          };
        }
        if (e % tn === en) {
          const t = (e - en) / tn;
          return function (e, r) {
            const i = e.mul(r, Zi),
              n = e.pow(i, t),
              s = e.mul(r, n),
              o = e.mul(e.mul(s, Zi), n),
              a = e.mul(s, e.sub(o, e.ONE));
            if (!e.eql(e.sqr(a), r)) throw new Error('Cannot find square root');
            return a;
          };
        }
        return (function (e) {
          const t = (e - Ji) / Zi;
          let r, i, n;
          for (r = e - Ji, i = 0; r % Zi === Yi; r /= Zi, i++);
          for (n = Zi; n < e && nn(n, t, e) !== e - Ji; n++)
            if (n > 1e3) throw new Error('Cannot find square root: likely non-prime P');
          if (1 === i) {
            const t = (e + Ji) / Xi;
            return function (e, r) {
              const i = e.pow(r, t);
              if (!e.eql(e.sqr(i), r)) throw new Error('Cannot find square root');
              return i;
            };
          }
          const s = (r + Ji) / Zi;
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
              const r = e.pow(c, Ji << BigInt(a - t - 1));
              (c = e.sqr(r)), (h = e.mul(h, r)), (l = e.mul(l, c)), (a = t);
            }
            return h;
          };
        })(e);
      }
      const cn = [
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
      function hn(e, t) {
        const r = void 0 !== t ? t : e.toString(2).length;
        return { nBitLength: r, nByteLength: Math.ceil(r / 8) };
      }
      function ln(e, t, r = !1, i = {}) {
        if (e <= Yi) throw new Error('invalid field: expected ORDER > 0, got ' + e);
        const { nBitLength: n, nByteLength: s } = hn(e, t);
        if (s > 2048) throw new Error('invalid field: expected ORDER of <= 2048 bytes');
        let o;
        const a = Object.freeze({
          ORDER: e,
          isLE: r,
          BITS: n,
          BYTES: s,
          MASK: $i(n),
          ZERO: Yi,
          ONE: Ji,
          create: (t) => rn(t, e),
          isValid: (t) => {
            if ('bigint' != typeof t)
              throw new Error('invalid field element: expected bigint, got ' + typeof t);
            return Yi <= t && t < e;
          },
          is0: (e) => e === Yi,
          isOdd: (e) => (e & Ji) === Ji,
          neg: (t) => rn(-t, e),
          eql: (e, t) => e === t,
          sqr: (t) => rn(t * t, e),
          add: (t, r) => rn(t + r, e),
          sub: (t, r) => rn(t - r, e),
          mul: (t, r) => rn(t * r, e),
          pow: (e, t) =>
            (function (e, t, r) {
              if (r < Yi) throw new Error('invalid exponent, negatives unsupported');
              if (r === Yi) return e.ONE;
              if (r === Ji) return t;
              let i = e.ONE,
                n = t;
              for (; r > Yi; ) r & Ji && (i = e.mul(i, n)), (n = e.sqr(n)), (r >>= Ji);
              return i;
            })(a, e, t),
          div: (t, r) => rn(t * on(r, e), e),
          sqrN: (e) => e * e,
          addN: (e, t) => e + t,
          subN: (e, t) => e - t,
          mulN: (e, t) => e * t,
          inv: (t) => on(t, e),
          sqrt: i.sqrt || ((t) => (o || (o = an(e)), o(a, t))),
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
          toBytes: (e) => (r ? ji(e, s) : ki(e, s)),
          fromBytes: (e) => {
            if (e.length !== s)
              throw new Error('Field.fromBytes: expected ' + s + ' bytes, got ' + e.length);
            return r ? Ri(e) : Ni(e);
          },
        });
        return Object.freeze(a);
      }
      function un(e) {
        if ('bigint' != typeof e) throw new Error('field order must be bigint');
        const t = e.toString(2).length;
        return Math.ceil(t / 8);
      }
      function dn(e) {
        const t = un(e);
        return t + Math.ceil(t / 2);
      }
      const pn = BigInt(0),
        fn = BigInt(1);
      function gn(e, t) {
        const r = t.negate();
        return e ? r : t;
      }
      function yn(e, t) {
        if (!Number.isSafeInteger(e) || e <= 0 || e > t)
          throw new Error('invalid window size, expected [1..' + t + '], got W=' + e);
      }
      function mn(e, t) {
        yn(e, t);
        return { windows: Math.ceil(t / e) + 1, windowSize: 2 ** (e - 1) };
      }
      const wn = new WeakMap(),
        bn = new WeakMap();
      function vn(e) {
        return bn.get(e) || 1;
      }
      function En(e, t, r, i) {
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
          s = Mi(BigInt(r.length)),
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
      function In(e) {
        return (
          (function (e) {
            const t = cn.reduce((e, t) => ((e[t] = 'function'), e), {
              ORDER: 'bigint',
              MASK: 'bigint',
              BYTES: 'isSafeInteger',
              BITS: 'isSafeInteger',
            });
            Fi(e, t);
          })(e.Fp),
          Fi(
            e,
            { n: 'bigint', h: 'bigint', Gx: 'field', Gy: 'field' },
            { nBitLength: 'isSafeInteger', nByteLength: 'isSafeInteger' }
          ),
          Object.freeze({ ...hn(e.n, e.nBitLength), ...e, p: e.Fp.ORDER })
        );
      }
      BigInt(0), BigInt(1), BigInt(2), BigInt(8);
      const Pn = BigInt(0),
        Sn = BigInt(1);
      const On = BigInt(
        '57896044618658097711785492504343953926634992332820282019728792003956564819949'
      );
      BigInt(0);
      const _n = BigInt(1),
        xn = BigInt(2),
        An = BigInt(3),
        Tn = BigInt(5);
      BigInt(8);
      const Cn = (function (e) {
        const t = (function (e) {
            return (
              Fi(
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
          i = (e) => rn(e, r),
          n = t.montgomeryBits,
          s = Math.ceil(n / 8),
          o = t.nByteLength,
          a = t.adjustScalarBytes || ((e) => e),
          c = t.powPminus2 || ((e) => nn(e, r - BigInt(2), r));
        function h(e, t, r) {
          const n = i(e * (t - r));
          return [(t = i(t - n)), (r = i(r + n))];
        }
        const l = (t.a - BigInt(2)) / BigInt(4);
        function u(e) {
          return ji(i(e), s);
        }
        function d(e, t) {
          const d = (function (e) {
              const t = Di('u coordinate', e, s);
              return 32 === o && (t[31] &= 127), Ri(t);
            })(t),
            p = (function (e) {
              const t = Di('scalar', e),
                r = t.length;
              if (r !== s && r !== o)
                throw new Error('invalid scalar, expected ' + s + ' or ' + o + ' bytes, got ' + r);
              return Ri(a(t));
            })(e),
            f = (function (e, t) {
              qi('u', e, Pn, r), qi('scalar', t, Pn, r);
              const s = t,
                o = e;
              let a,
                u = Sn,
                d = Pn,
                p = e,
                f = Sn,
                g = Pn;
              for (let r = BigInt(n - 1); r >= Pn; r--) {
                const e = (s >> r) & Sn;
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
          if (f === Pn) throw new Error('invalid private or public key received');
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
        P: On,
        a: BigInt(486662),
        montgomeryBits: 255,
        nByteLength: 32,
        Gu: BigInt(9),
        powPminus2: (e) => {
          const t = On,
            { pow_p_5_8: r, b2: i } = (function (e) {
              const t = BigInt(10),
                r = BigInt(20),
                i = BigInt(40),
                n = BigInt(80),
                s = On,
                o = (((e * e) % s) * e) % s,
                a = (sn(o, xn, s) * o) % s,
                c = (sn(a, _n, s) * e) % s,
                h = (sn(c, Tn, s) * c) % s,
                l = (sn(h, t, s) * h) % s,
                u = (sn(l, r, s) * l) % s,
                d = (sn(u, i, s) * u) % s,
                p = (sn(d, n, s) * d) % s,
                f = (sn(p, n, s) * d) % s,
                g = (sn(f, t, s) * h) % s;
              return { pow_p_5_8: (sn(g, xn, s) * e) % s, b2: o };
            })(e);
          return rn(sn(r, An, t) * i, t);
        },
        adjustScalarBytes: function (e) {
          return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
        },
        randomBytes: Rt,
      });
      function Nn(e) {
        void 0 !== e.lowS && wi('lowS', e.lowS), void 0 !== e.prehash && wi('prehash', e.prehash);
      }
      const { bytesToNumberBE: Rn, hexToBytes: kn } = Gi;
      class jn extends Error {
        constructor(e = '') {
          super(e);
        }
      }
      const Dn = {
          Err: jn,
          _tlv: {
            encode: (e, t) => {
              const { Err: r } = Dn;
              if (e < 0 || e > 256) throw new r('tlv.encode: wrong tag');
              if (1 & t.length) throw new r('tlv.encode: unpadded data');
              const i = t.length / 2,
                n = Ei(i);
              if ((n.length / 2) & 128) throw new r('tlv.encode: long form length too big');
              const s = i > 127 ? Ei((n.length / 2) | 128) : '';
              return Ei(e) + s + n + t;
            },
            decode(e, t) {
              const { Err: r } = Dn;
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
              const { Err: t } = Dn;
              if (e < Un) throw new t('integer: negative integers are not allowed');
              let r = Ei(e);
              if ((8 & Number.parseInt(r[0], 16) && (r = '00' + r), 1 & r.length))
                throw new t('unexpected DER parsing assertion: unpadded hex');
              return r;
            },
            decode(e) {
              const { Err: t } = Dn;
              if (128 & e[0]) throw new t('invalid signature integer: negative');
              if (0 === e[0] && !(128 & e[1]))
                throw new t('invalid signature integer: unnecessary leading zero');
              return Rn(e);
            },
          },
          toSig(e) {
            const { Err: t, _int: r, _tlv: i } = Dn,
              n = 'string' == typeof e ? kn(e) : e;
            mi(n);
            const { v: s, l: o } = i.decode(48, n);
            if (o.length) throw new t('invalid signature: left bytes after parsing');
            const { v: a, l: c } = i.decode(2, s),
              { v: h, l: l } = i.decode(2, c);
            if (l.length) throw new t('invalid signature: left bytes after parsing');
            return { r: r.decode(a), s: r.decode(h) };
          },
          hexFromSig(e) {
            const { _tlv: t, _int: r } = Dn,
              i = t.encode(2, r.encode(e.r)) + t.encode(2, r.encode(e.s));
            return t.encode(48, i);
          },
        },
        Un = BigInt(0),
        Ln = BigInt(1);
      BigInt(2);
      const Bn = BigInt(3);
      function qn(e) {
        const t = (function (e) {
            const t = In(e);
            Fi(
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
          i = ln(t.n, t.nBitLength),
          n =
            t.toBytes ||
            ((e, t, i) => {
              const n = t.toAffine();
              return Ui(Uint8Array.from([4]), r.toBytes(n.x), r.toBytes(n.y));
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
            if ((yi(e) && (e = vi(e)), 'string' != typeof e || !r.includes(e.length)))
              throw new Error('invalid private key');
            e = e.padStart(2 * i, '0');
          }
          let o;
          try {
            o = 'bigint' == typeof e ? e : Ni(Di('private key', e, i));
          } catch {
            throw new Error(
              'invalid private key, expected hex or ' + i + ' bytes, got ' + typeof e
            );
          }
          return n && (o = rn(o, s)), qi('private key', o, Ln, s), o;
        }
        function c(e) {
          if (!(e instanceof u)) throw new Error('ProjectivePoint expected');
        }
        const h = Wi((e, t) => {
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
          l = Wi((e) => {
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
            const t = u.fromAffine(s(Di('pointHex', e)));
            return t.assertValidity(), t;
          }
          static fromPrivateKey(e) {
            return u.BASE.multiply(a(e));
          }
          static msm(e, t) {
            return En(u, i, e, t);
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
              n = r.mul(i, Bn),
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
              g = r.mul(t.b, Bn);
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
            qi('scalar', e, Un, n);
            const s = u.ZERO;
            if (e === Un) return s;
            if (this.is0() || e === Ln) return this;
            if (!i || p.hasPrecomputes(this)) return p.wNAFCachedUnsafe(this, e, u.normalizeZ);
            let { k1neg: o, k1: a, k2neg: c, k2: h } = i.splitScalar(e),
              l = s,
              d = s,
              f = this;
            for (; a > Un || h > Un; )
              a & Ln && (l = l.add(f)),
                h & Ln && (d = d.add(f)),
                (f = f.double()),
                (a >>= Ln),
                (h >>= Ln);
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
            if ((qi('scalar', e, Ln, n), i)) {
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
                t !== Un && t !== Ln && e.equals(i) ? e.multiply(t) : e.multiplyUnsafe(t),
              s = n(this, t).add(n(e, r));
            return s.is0() ? void 0 : s;
          }
          toAffine(e) {
            return h(this, e);
          }
          isTorsionFree() {
            const { h: e, isTorsionFree: r } = t;
            if (e === Ln) return !0;
            if (r) return r(u, this);
            throw new Error('isTorsionFree() has not been declared for the elliptic curve');
          }
          clearCofactor() {
            const { h: e, clearCofactor: r } = t;
            return e === Ln ? this : r ? r(u, this) : this.multiplyUnsafe(t.h);
          }
          toRawBytes(e = !0) {
            return wi('isCompressed', e), this.assertValidity(), n(u, this, e);
          }
          toHex(e = !0) {
            return wi('isCompressed', e), vi(this.toRawBytes(e));
          }
        }
        (u.BASE = new u(t.Gx, t.Gy, r.ONE)), (u.ZERO = new u(r.ZERO, r.ONE, r.ZERO));
        const d = t.nBitLength,
          p = (function (e, t) {
            return {
              constTimeNegate: gn,
              hasPrecomputes: (e) => 1 !== vn(e),
              unsafeLadder(t, r, i = e.ZERO) {
                let n = t;
                for (; r > pn; ) r & fn && (i = i.add(n)), (n = n.double()), (r >>= fn);
                return i;
              },
              precomputeWindow(e, r) {
                const { windows: i, windowSize: n } = mn(r, t),
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
                const { windows: s, windowSize: o } = mn(r, t);
                let a = e.ZERO,
                  c = e.BASE;
                const h = BigInt(2 ** r - 1),
                  l = 2 ** r,
                  u = BigInt(r);
                for (let e = 0; e < s; e++) {
                  const t = e * o;
                  let r = Number(n & h);
                  (n >>= u), r > o && ((r -= l), (n += fn));
                  const s = t,
                    d = t + Math.abs(r) - 1,
                    p = e % 2 !== 0,
                    f = r < 0;
                  0 === r ? (c = c.add(gn(p, i[s]))) : (a = a.add(gn(f, i[d])));
                }
                return { p: a, f: c };
              },
              wNAFUnsafe(r, i, n, s = e.ZERO) {
                const { windows: o, windowSize: a } = mn(r, t),
                  c = BigInt(2 ** r - 1),
                  h = 2 ** r,
                  l = BigInt(r);
                for (let e = 0; e < o; e++) {
                  const t = e * a;
                  if (n === pn) break;
                  let r = Number(n & c);
                  if (((n >>= l), r > a && ((r -= h), (n += fn)), 0 === r)) continue;
                  let o = i[t + Math.abs(r) - 1];
                  r < 0 && (o = o.negate()), (s = s.add(o));
                }
                return s;
              },
              getPrecomputes(e, t, r) {
                let i = wn.get(t);
                return i || ((i = this.precomputeWindow(t, e)), 1 !== e && wn.set(t, r(i))), i;
              },
              wNAFCached(e, t, r) {
                const i = vn(e);
                return this.wNAF(i, this.getPrecomputes(i, e, r), t);
              },
              wNAFCachedUnsafe(e, t, r, i) {
                const n = vn(e);
                return 1 === n
                  ? this.unsafeLadder(e, t, i)
                  : this.wNAFUnsafe(n, this.getPrecomputes(n, e, r), t, i);
              },
              setWindowSize(e, r) {
                yn(r, t), bn.set(e, r), wn.delete(e);
              },
            };
          })(u, t.endo ? Math.ceil(d / 2) : d);
        return {
          CURVE: t,
          ProjectivePoint: u,
          normPrivateKeyToScalar: a,
          weierstrassEquation: o,
          isWithinCurveOrder: function (e) {
            return Bi(e, Ln, t.n);
          },
        };
      }
      function Mn(e) {
        const t = (function (e) {
            const t = In(e);
            return (
              Fi(
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
          return rn(e, i);
        }
        function a(e) {
          return on(e, i);
        }
        const {
            ProjectivePoint: c,
            normPrivateKeyToScalar: h,
            weierstrassEquation: l,
            isWithinCurveOrder: u,
          } = qn({
            ...t,
            toBytes(e, t, i) {
              const n = t.toAffine(),
                s = r.toBytes(n.x),
                o = Ui;
              return (
                wi('isCompressed', i),
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
                const e = Ni(o);
                if (!Bi(e, Ln, r.ORDER)) throw new Error('Point is not on curve');
                const t = l(e);
                let n;
                try {
                  n = r.sqrt(t);
                } catch (a) {
                  const e = a instanceof Error ? ': ' + a.message : '';
                  throw new Error('Point is not on curve' + e);
                }
                return (1 === (1 & i)) !== ((n & Ln) === Ln) && (n = r.neg(n)), { x: e, y: n };
              }
            },
          }),
          d = (e) => vi(ki(e, t.nByteLength));
        function p(e) {
          return e > i >> Ln;
        }
        const f = (e, t, r) => Ni(e.slice(t, r));
        class g {
          constructor(e, t, r) {
            (this.r = e), (this.s = t), (this.recovery = r), this.assertValidity();
          }
          static fromCompact(e) {
            const r = t.nByteLength;
            return (e = Di('compactSignature', e, 2 * r)), new g(f(e, 0, r), f(e, r, 2 * r));
          }
          static fromDER(e) {
            const { r: t, s: r } = Dn.toSig(Di('DER', e));
            return new g(t, r);
          }
          assertValidity() {
            qi('r', this.r, Ln, i), qi('s', this.s, Ln, i);
          }
          addRecoveryBit(e) {
            return new g(this.r, this.s, e);
          }
          recoverPublicKey(e) {
            const { r: i, s: n, recovery: s } = this,
              h = b(Di('msgHash', e));
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
            return Ci(this.toDERHex());
          }
          toDERHex() {
            return Dn.hexFromSig({ r: this.r, s: this.s });
          }
          toCompactRawBytes() {
            return Ci(this.toCompactHex());
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
            const e = dn(t.n);
            return (function (e, t, r = !1) {
              const i = e.length,
                n = un(t),
                s = dn(t);
              if (i < 16 || i < s || i > 1024)
                throw new Error('expected ' + s + '-1024 bytes of input, got ' + i);
              const o = rn(r ? Ri(e) : Ni(e), t - Ji) + Ji;
              return r ? ji(o, n) : ki(o, n);
            })(t.randomBytes(e), t.n);
          },
          precompute: (e = 8, t = c.BASE) => (t._setWindowSize(e), t.multiply(BigInt(3)), t),
        };
        function m(e) {
          const t = yi(e),
            r = 'string' == typeof e,
            i = (t || r) && e.length;
          return t ? i === n || i === s : r ? i === 2 * n || i === 2 * s : e instanceof c;
        }
        const w =
            t.bits2int ||
            function (e) {
              if (e.length > 8192) throw new Error('input is too large');
              const r = Ni(e),
                i = 8 * e.length - t.nBitLength;
              return i > 0 ? r >> BigInt(i) : r;
            },
          b =
            t.bits2int_modN ||
            function (e) {
              return o(w(e));
            },
          v = $i(t.nBitLength);
        function E(e) {
          return qi('num < 2^' + t.nBitLength, e, Un, v), ki(e, t.nByteLength);
        }
        function I(e, i, n = P) {
          if (['recovered', 'canonical'].some((e) => e in n))
            throw new Error('sign() legacy options not supported');
          const { hash: s, randomBytes: l } = t;
          let { lowS: d, prehash: f, extraEntropy: y } = n;
          null == d && (d = !0),
            (e = Di('msgHash', e)),
            Nn(n),
            f && (e = Di('prehashed msgHash', s(e)));
          const m = b(e),
            v = h(i),
            I = [E(v), E(m)];
          if (null != y && !1 !== y) {
            const e = !0 === y ? l(r.BYTES) : y;
            I.push(Di('extraEntropy', e));
          }
          const S = Ui(...I),
            O = m;
          return {
            seed: S,
            k2sig: function (e) {
              const t = w(e);
              if (!u(t)) return;
              const r = a(t),
                i = c.BASE.multiply(t).toAffine(),
                n = o(i.x);
              if (n === Un) return;
              const s = o(r * o(O + n * v));
              if (s === Un) return;
              let h = (i.x === n ? 0 : 2) | Number(i.y & Ln),
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
        const P = { lowS: t.lowS, prehash: !1 },
          S = { lowS: t.lowS, prehash: !1 };
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
            sign: function (e, r, i = P) {
              const { seed: n, k2sig: s } = I(e, r, i),
                o = t;
              return Vi(o.hash.outputLen, o.nByteLength, o.hmac)(n, s);
            },
            verify: function (e, r, i, n = S) {
              const s = e;
              (r = Di('msgHash', r)), (i = Di('publicKey', i));
              const { lowS: h, prehash: l, format: u } = n;
              if ((Nn(n), 'strict' in n)) throw new Error('options.strict was renamed to lowS');
              if (void 0 !== u && 'compact' !== u && 'der' !== u)
                throw new Error('format must be compact or der');
              const d = 'string' == typeof s || yi(s),
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
                    if (!(_ instanceof Dn.Err)) throw _;
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
                P = o(m * E),
                O = c.BASE.multiplyAndAddUnsafe(y, I, P)?.toAffine();
              return !!O && o(O.x) === m;
            },
            ProjectivePoint: c,
            Signature: g,
            utils: y,
          }
        );
      }
      function $n(e) {
        return {
          hash: e,
          hmac: (t, ...r) =>
            ti(
              e,
              t,
              (function (...e) {
                let t = 0;
                for (let i = 0; i < e.length; i++) {
                  const r = e[i];
                  yt(r), (t += r.length);
                }
                const r = new Uint8Array(t);
                for (let i = 0, n = 0; i < e.length; i++) {
                  const t = e[i];
                  r.set(t, n), (n += t.length);
                }
                return r;
              })(...r)
            ),
          randomBytes: Rt,
        };
      }
      BigInt(4);
      const zn = ln(BigInt('0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff')),
        Hn = (function (e, t) {
          const r = (t) => Mn({ ...e, ...$n(t) });
          return { ...r(t), create: r };
        })(
          {
            a: zn.create(BigInt('-3')),
            b: BigInt('0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b'),
            Fp: zn,
            n: BigInt('0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551'),
            Gx: BigInt('0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296'),
            Gy: BigInt('0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5'),
            h: BigInt(1),
            lowS: !1,
          },
          di
        ),
        Vn = 'base10',
        Kn = 'base16',
        Fn = 'base64pad',
        Wn = 'base64url',
        Gn = 'utf8',
        Yn = 1,
        Jn = 2;
      function Zn() {
        const e = Cn.utils.randomPrivateKey(),
          t = Cn.getPublicKey(e);
        return { privateKey: (0, me.BB)(e, Kn), publicKey: (0, me.BB)(t, Kn) };
      }
      function Qn() {
        const e = Rt(32);
        return (0, me.BB)(e, Kn);
      }
      function Xn(e, t) {
        const r = Cn.getSharedSecret((0, me.mL)(e, Kn), (0, me.mL)(t, Kn)),
          i = ni(di, r, void 0, void 0, 32);
        return (0, me.BB)(i, Kn);
      }
      function es(e) {
        const t = di((0, me.mL)(e, Kn));
        return (0, me.BB)(t, Kn);
      }
      function ts(e) {
        const t = di((0, me.mL)(e, Gn));
        return (0, me.BB)(t, Kn);
      }
      function rs(e) {
        return (0, me.mL)(`${e}`, Vn);
      }
      function is(e) {
        return Number((0, me.BB)(e, Vn));
      }
      function ns(e) {
        return e.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
      }
      function ss(e) {
        const t = e.replace(/-/g, '+').replace(/_/g, '/'),
          r = (4 - (t.length % 4)) % 4;
        return t + '='.repeat(r);
      }
      function os(e) {
        const t = rs(typeof e.type < 'u' ? e.type : 0);
        if (is(t) === Yn && typeof e.senderPublicKey > 'u')
          throw new Error('Missing sender public key for type 1 envelope');
        const r = typeof e.senderPublicKey < 'u' ? (0, me.mL)(e.senderPublicKey, Kn) : void 0,
          i = typeof e.iv < 'u' ? (0, me.mL)(e.iv, Kn) : Rt(12),
          n = (0, me.mL)(e.symKey, Kn),
          s = ls({
            type: t,
            sealed: Qr(n, i).encrypt((0, me.mL)(e.message, Gn)),
            iv: i,
            senderPublicKey: r,
          });
        return e.encoding === Wn ? ns(s) : s;
      }
      function as(e) {
        const t = (0, me.mL)(e.symKey, Kn),
          { sealed: r, iv: i } = us({ encoded: e.encoded, encoding: e.encoding }),
          n = Qr(t, i).decrypt(r);
        if (null === n) throw new Error('Failed to decrypt');
        return (0, me.BB)(n, Gn);
      }
      function cs(e, t) {
        const r = rs(Jn),
          i = Rt(12),
          n = ls({ type: r, sealed: (0, me.mL)(e, Gn), iv: i });
        return t === Wn ? ns(n) : n;
      }
      function hs(e, t) {
        const { sealed: r } = us({ encoded: e, encoding: t });
        return (0, me.BB)(r, Gn);
      }
      function ls(e) {
        if (is(e.type) === Jn) return (0, me.BB)((0, me.zo)([e.type, e.sealed]), Fn);
        if (is(e.type) === Yn) {
          if (typeof e.senderPublicKey > 'u')
            throw new Error('Missing sender public key for type 1 envelope');
          return (0, me.BB)((0, me.zo)([e.type, e.senderPublicKey, e.iv, e.sealed]), Fn);
        }
        return (0, me.BB)((0, me.zo)([e.type, e.iv, e.sealed]), Fn);
      }
      function us(e) {
        const t = (e.encoding || Fn) === Wn ? ss(e.encoded) : e.encoded,
          r = (0, me.mL)(t, Fn),
          i = r.slice(0, 1);
        if (is(i) === Yn) {
          const e = 33,
            t = e + 12,
            n = r.slice(1, e),
            s = r.slice(e, t);
          return { type: i, sealed: r.slice(t), iv: s, senderPublicKey: n };
        }
        if (is(i) === Jn) {
          return { type: i, sealed: r.slice(1), iv: Rt(12) };
        }
        const n = r.slice(1, 13);
        return { type: i, sealed: r.slice(13), iv: n };
      }
      function ds(e, t) {
        const r = us({ encoded: e, encoding: t?.encoding });
        return ps({
          type: is(r.type),
          senderPublicKey:
            typeof r.senderPublicKey < 'u' ? (0, me.BB)(r.senderPublicKey, Kn) : void 0,
          receiverPublicKey: t?.receiverPublicKey,
        });
      }
      function ps(e) {
        const t = e?.type || 0;
        if (t === Yn) {
          if (typeof e?.senderPublicKey > 'u') throw new Error('missing sender public key');
          if (typeof e?.receiverPublicKey > 'u') throw new Error('missing receiver public key');
        }
        return {
          type: t,
          senderPublicKey: e?.senderPublicKey,
          receiverPublicKey: e?.receiverPublicKey,
        };
      }
      function fs(e) {
        return (
          e.type === Yn &&
          'string' == typeof e.senderPublicKey &&
          'string' == typeof e.receiverPublicKey
        );
      }
      function gs(e) {
        return e.type === Jn;
      }
      function ys(e, t) {
        const [r, i, n] = e.split('.'),
          s = ve.from(ss(n), 'base64');
        if (64 !== s.length) throw new Error('Invalid signature length');
        const o = s.slice(0, 32),
          a = s.slice(32, 64),
          c = di(`${r}.${i}`),
          h = (function (e) {
            const t = ve.from(e.x, 'base64'),
              r = ve.from(e.y, 'base64');
            return (0, me.zo)([new Uint8Array([4]), t, r]);
          })(t);
        if (!Hn.verify((0, me.zo)([o, a]), c, h)) throw new Error('Invalid signature');
        return (0, ye.xp)(e).payload;
      }
      function ms(e) {
        return e?.relay || { protocol: 'irn' };
      }
      function ws(e) {
        const t = we[e];
        if (typeof t > 'u') throw new Error(`Relay Protocol not supported: ${e}`);
        return t;
      }
      function bs(e, t = '-') {
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
      function vs(e) {
        if (!e.includes('wc:')) {
          const t = pt(e);
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
          topic: Es(n[0]),
          version: parseInt(n[1], 10),
          symKey: a.symKey,
          relay: bs(a),
          methods: c,
          expiryTimestamp: a.expiryTimestamp ? parseInt(a.expiryTimestamp, 10) : void 0,
        };
      }
      function Es(e) {
        return e.startsWith('//') ? e.substring(2) : e;
      }
      function Is(e) {
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
      function Ps(e, t, r) {
        return `${e}?wc_ev=${r}&topic=${t}`;
      }
      Object.defineProperty,
        Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      function Ss(e) {
        const t = [];
        return (
          e.forEach((e) => {
            const [r, i] = e.split(':');
            t.push(`${r}:${i}`);
          }),
          t
        );
      }
      function Os(e) {
        return e.includes(':');
      }
      function _s(e) {
        return Os(e) ? e.split(':')[0] : e;
      }
      function xs(e, t) {
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
          n.methods ? (n.methods = at(n.methods, e)) : (n.methods = e),
            (n.events = ['chainChanged', 'accountsChanged']);
        return r;
      }
      const As = {
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
        Ts = {
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
      function Cs(e, t) {
        const { message: r, code: i } = Ts[e];
        return { message: t ? `${r} ${t}` : r, code: i };
      }
      function Ns(e, t) {
        const { message: r, code: i } = As[e];
        return { message: t ? `${r} ${t}` : r, code: i };
      }
      function Rs(e, t) {
        return !!Array.isArray(e) && (!(typeof t < 'u' && e.length) || e.every(t));
      }
      function ks(e) {
        return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length;
      }
      function js(e) {
        return typeof e > 'u';
      }
      function Ds(e, t) {
        return !(!t || !js(e)) || ('string' == typeof e && !!e.trim().length);
      }
      function Us(e, t) {
        return !(!t || !js(e)) || ('number' == typeof e && !isNaN(e));
      }
      function Ls(e, t) {
        const { requiredNamespaces: r } = t,
          i = Object.keys(e.namespaces),
          n = Object.keys(r);
        let s = !0;
        return (
          !!Ye(n, i) &&
          (i.forEach((t) => {
            const { accounts: i, methods: n, events: o } = e.namespaces[t],
              a = Ss(i),
              c = r[t];
            (!Ye(Se(t, c), a) || !Ye(c.methods, n) || !Ye(c.events, o)) && (s = !1);
          }),
          s)
        );
      }
      function Bs(e) {
        return !(!Ds(e, !1) || !e.includes(':')) && 2 === e.split(':').length;
      }
      function qs(e) {
        function t(e) {
          try {
            return typeof new URL(e) < 'u';
          } catch {
            return !1;
          }
        }
        try {
          if (Ds(e, !1)) {
            if (t(e)) return !0;
            return t(pt(e));
          }
        } catch {}
        return !1;
      }
      function Ms(e) {
        var t;
        return null == (t = e?.proposer) ? void 0 : t.publicKey;
      }
      function $s(e) {
        return e?.topic;
      }
      function zs(e, t) {
        let r = null;
        return (
          Ds(e?.publicKey, !1) ||
            (r = Cs('MISSING_OR_INVALID', `${t} controller public key should be a string`)),
          r
        );
      }
      function Hs(e) {
        let t = !0;
        return Rs(e) ? e.length && (t = e.every((e) => Ds(e, !1))) : (t = !1), t;
      }
      function Vs(e, t, r) {
        let i = null;
        return (
          Object.entries(e).forEach(([e, n]) => {
            if (i) return;
            const s = (function (e, t, r) {
              let i = null;
              return (
                Rs(t) && t.length
                  ? t.forEach((e) => {
                      i ||
                        Bs(e) ||
                        (i = Ns(
                          'UNSUPPORTED_CHAINS',
                          `${r}, chain ${e} should be a string and conform to "namespace:chainId" format`
                        ));
                    })
                  : Bs(e) ||
                    (i = Ns(
                      'UNSUPPORTED_CHAINS',
                      `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`
                    )),
                i
              );
            })(e, Se(e, n), `${t} ${r}`);
            s && (i = s);
          }),
          i
        );
      }
      function Ks(e, t) {
        let r = null;
        return (
          Rs(e)
            ? e.forEach((e) => {
                r ||
                  (function (e) {
                    if (Ds(e, !1) && e.includes(':')) {
                      const t = e.split(':');
                      if (3 === t.length) {
                        const e = t[0] + ':' + t[1];
                        return !!t[2] && Bs(e);
                      }
                    }
                    return !1;
                  })(e) ||
                  (r = Ns(
                    'UNSUPPORTED_ACCOUNTS',
                    `${t}, account ${e} should be a string and conform to "namespace:chainId:address" format`
                  ));
              })
            : (r = Ns(
                'UNSUPPORTED_ACCOUNTS',
                `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`
              )),
          r
        );
      }
      function Fs(e, t) {
        let r = null;
        return (
          Object.values(e).forEach((e) => {
            if (r) return;
            const i = (function (e, t) {
              let r = null;
              return (
                Hs(e?.methods)
                  ? Hs(e?.events) ||
                    (r = Ns(
                      'UNSUPPORTED_EVENTS',
                      `${t}, events should be an array of strings or empty array for no events`
                    ))
                  : (r = Ns(
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
      function Ws(e, t, r) {
        let i = null;
        if (e && ks(e)) {
          const n = Fs(e, t);
          n && (i = n);
          const s = Vs(e, t, r);
          s && (i = s);
        } else i = Cs('MISSING_OR_INVALID', `${t}, ${r} should be an object with data`);
        return i;
      }
      function Gs(e, t) {
        let r = null;
        if (e && ks(e)) {
          const i = Fs(e, t);
          i && (r = i);
          const n = (function (e, t) {
            let r = null;
            return (
              Object.values(e).forEach((e) => {
                if (r) return;
                const i = Ks(e?.accounts, `${t} namespace`);
                i && (r = i);
              }),
              r
            );
          })(e, t);
          n && (r = n);
        } else r = Cs('MISSING_OR_INVALID', `${t}, namespaces should be an object with data`);
        return r;
      }
      function Ys(e) {
        return Ds(e.protocol, !0);
      }
      function Js(e, t) {
        let r = !1;
        return (
          t && !e
            ? (r = !0)
            : e &&
              Rs(e) &&
              e.length &&
              e.forEach((e) => {
                r = Ys(e);
              }),
          r
        );
      }
      function Zs(e) {
        return 'number' == typeof e;
      }
      function Qs(e) {
        return typeof e < 'u' && null !== typeof e;
      }
      function Xs(e) {
        return !(
          !e ||
          'object' != typeof e ||
          !e.code ||
          !Us(e.code, !1) ||
          !e.message ||
          !Ds(e.message, !1)
        );
      }
      function eo(e) {
        return !(js(e) || !Ds(e.method, !1));
      }
      function to(e) {
        return !(js(e) || (js(e.result) && js(e.error)) || !Us(e.id, !1) || !Ds(e.jsonrpc, !1));
      }
      function ro(e) {
        return !(js(e) || !Ds(e.name, !1));
      }
      function io(e, t) {
        return !(
          !Bs(t) ||
          !(function (e) {
            const t = [];
            return (
              Object.values(e).forEach((e) => {
                t.push(...Ss(e.accounts));
              }),
              t
            );
          })(e).includes(t)
        );
      }
      function no(e, t, r) {
        return (
          !!Ds(r, !1) &&
          (function (e, t) {
            const r = [];
            return (
              Object.values(e).forEach((e) => {
                Ss(e.accounts).includes(t) && r.push(...e.methods);
              }),
              r
            );
          })(e, t).includes(r)
        );
      }
      function so(e, t, r) {
        return (
          !!Ds(r, !1) &&
          (function (e, t) {
            const r = [];
            return (
              Object.values(e).forEach((e) => {
                Ss(e.accounts).includes(t) && r.push(...e.events);
              }),
              r
            );
          })(e, t).includes(r)
        );
      }
      function oo(e, t, r) {
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
                  Ss(e[r].accounts)?.forEach((i) => {
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
          c = ao(Object.keys(e)),
          h = ao(Object.keys(t)),
          l = c.filter((e) => !h.includes(e));
        return (
          l.length &&
            (i = Cs(
              'NON_CONFORMING_NAMESPACES',
              `${r} namespaces keys don't satisfy requiredNamespaces.\n      Required: ${l.toString()}\n      Received: ${Object.keys(t).toString()}`
            )),
          Ye(o, a) ||
            (i = Cs(
              'NON_CONFORMING_NAMESPACES',
              `${r} namespaces chains don't satisfy required namespaces.\n      Required: ${o.toString()}\n      Approved: ${a.toString()}`
            )),
          Object.keys(t).forEach((e) => {
            if (!e.includes(':') || i) return;
            const n = Ss(t[e].accounts);
            n.includes(e) ||
              (i = Cs(
                'NON_CONFORMING_NAMESPACES',
                `${r} namespaces accounts don't satisfy namespace accounts for ${e}\n        Required: ${e}\n        Approved: ${n.toString()}`
              ));
          }),
          o.forEach((e) => {
            i ||
              (Ye(n[e].methods, s[e].methods)
                ? Ye(n[e].events, s[e].events) ||
                  (i = Cs(
                    'NON_CONFORMING_NAMESPACES',
                    `${r} namespaces events don't satisfy namespace events for ${e}`
                  ))
                : (i = Cs(
                    'NON_CONFORMING_NAMESPACES',
                    `${r} namespaces methods don't satisfy namespace methods for ${e}`
                  )));
          }),
          i
        );
      }
      function ao(e) {
        return [...new Set(e.map((e) => (e.includes(':') ? e.split(':')[0] : e)))];
      }
      function co(e, t) {
        return Us(e, !1) && e <= t.max && e >= t.min;
      }
      function ho() {
        const e = He();
        return new Promise((t) => {
          switch (e) {
            case De:
              t(ze() && navigator?.onLine);
              break;
            case ke:
              t(
                (async function () {
                  if (qe() && typeof r.g < 'u' && null != r.g && r.g.NetInfo) {
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
      function lo(e) {
        switch (He()) {
          case De:
            !(function (e) {
              !qe() &&
                ze() &&
                (window.addEventListener('online', () => e(!0)),
                window.addEventListener('offline', () => e(!1)));
            })(e);
            break;
          case ke:
            !(function (e) {
              qe() &&
                typeof r.g < 'u' &&
                null != r.g &&
                r.g.NetInfo &&
                r.g?.NetInfo.addEventListener((t) => e(t?.isConnected));
            })(e);
        }
      }
      const uo = {};
      class po {
        static get(e) {
          return uo[e];
        }
        static set(e, t) {
          uo[e] = t;
        }
        static delete(e) {
          delete uo[e];
        }
      }
    },
    62873: function (e, t) {
      'use strict';
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
      'use strict';
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
    54098: function (e, t) {
      var r = 'undefined' !== typeof self ? self : this,
        i = (function () {
          function e() {
            (this.fetch = !1), (this.DOMException = r.DOMException);
          }
          return (e.prototype = r), new e();
        })();
      !(function (e) {
        !(function (t) {
          var r = 'URLSearchParams' in e,
            i = 'Symbol' in e && 'iterator' in Symbol,
            n =
              'FileReader' in e &&
              'Blob' in e &&
              (function () {
                try {
                  return new Blob(), !0;
                } catch (e) {
                  return !1;
                }
              })(),
            s = 'FormData' in e,
            o = 'ArrayBuffer' in e;
          if (o)
            var a = [
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
              c =
                ArrayBuffer.isView ||
                function (e) {
                  return e && a.indexOf(Object.prototype.toString.call(e)) > -1;
                };
          function h(e) {
            if (('string' !== typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)))
              throw new TypeError('Invalid character in header field name');
            return e.toLowerCase();
          }
          function l(e) {
            return 'string' !== typeof e && (e = String(e)), e;
          }
          function u(e) {
            var t = {
              next: function () {
                var t = e.shift();
                return { done: void 0 === t, value: t };
              },
            };
            return (
              i &&
                (t[Symbol.iterator] = function () {
                  return t;
                }),
              t
            );
          }
          function d(e) {
            (this.map = {}),
              e instanceof d
                ? e.forEach(function (e, t) {
                    this.append(t, e);
                  }, this)
                : Array.isArray(e)
                  ? e.forEach(function (e) {
                      this.append(e[0], e[1]);
                    }, this)
                  : e &&
                    Object.getOwnPropertyNames(e).forEach(function (t) {
                      this.append(t, e[t]);
                    }, this);
          }
          function p(e) {
            if (e.bodyUsed) return Promise.reject(new TypeError('Already read'));
            e.bodyUsed = !0;
          }
          function f(e) {
            return new Promise(function (t, r) {
              (e.onload = function () {
                t(e.result);
              }),
                (e.onerror = function () {
                  r(e.error);
                });
            });
          }
          function g(e) {
            var t = new FileReader(),
              r = f(t);
            return t.readAsArrayBuffer(e), r;
          }
          function y(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer;
          }
          function m() {
            return (
              (this.bodyUsed = !1),
              (this._initBody = function (e) {
                var t;
                (this._bodyInit = e),
                  e
                    ? 'string' === typeof e
                      ? (this._bodyText = e)
                      : n && Blob.prototype.isPrototypeOf(e)
                        ? (this._bodyBlob = e)
                        : s && FormData.prototype.isPrototypeOf(e)
                          ? (this._bodyFormData = e)
                          : r && URLSearchParams.prototype.isPrototypeOf(e)
                            ? (this._bodyText = e.toString())
                            : o && n && (t = e) && DataView.prototype.isPrototypeOf(t)
                              ? ((this._bodyArrayBuffer = y(e.buffer)),
                                (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                              : o && (ArrayBuffer.prototype.isPrototypeOf(e) || c(e))
                                ? (this._bodyArrayBuffer = y(e))
                                : (this._bodyText = e = Object.prototype.toString.call(e))
                    : (this._bodyText = ''),
                  this.headers.get('content-type') ||
                    ('string' === typeof e
                      ? this.headers.set('content-type', 'text/plain;charset=UTF-8')
                      : this._bodyBlob && this._bodyBlob.type
                        ? this.headers.set('content-type', this._bodyBlob.type)
                        : r &&
                          URLSearchParams.prototype.isPrototypeOf(e) &&
                          this.headers.set(
                            'content-type',
                            'application/x-www-form-urlencoded;charset=UTF-8'
                          ));
              }),
              n &&
                ((this.blob = function () {
                  var e = p(this);
                  if (e) return e;
                  if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                  if (this._bodyArrayBuffer)
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                  if (this._bodyFormData) throw new Error('could not read FormData body as blob');
                  return Promise.resolve(new Blob([this._bodyText]));
                }),
                (this.arrayBuffer = function () {
                  return this._bodyArrayBuffer
                    ? p(this) || Promise.resolve(this._bodyArrayBuffer)
                    : this.blob().then(g);
                })),
              (this.text = function () {
                var e = p(this);
                if (e) return e;
                if (this._bodyBlob)
                  return (function (e) {
                    var t = new FileReader(),
                      r = f(t);
                    return t.readAsText(e), r;
                  })(this._bodyBlob);
                if (this._bodyArrayBuffer)
                  return Promise.resolve(
                    (function (e) {
                      for (
                        var t = new Uint8Array(e), r = new Array(t.length), i = 0;
                        i < t.length;
                        i++
                      )
                        r[i] = String.fromCharCode(t[i]);
                      return r.join('');
                    })(this._bodyArrayBuffer)
                  );
                if (this._bodyFormData) throw new Error('could not read FormData body as text');
                return Promise.resolve(this._bodyText);
              }),
              s &&
                (this.formData = function () {
                  return this.text().then(v);
                }),
              (this.json = function () {
                return this.text().then(JSON.parse);
              }),
              this
            );
          }
          (d.prototype.append = function (e, t) {
            (e = h(e)), (t = l(t));
            var r = this.map[e];
            this.map[e] = r ? r + ', ' + t : t;
          }),
            (d.prototype.delete = function (e) {
              delete this.map[h(e)];
            }),
            (d.prototype.get = function (e) {
              return (e = h(e)), this.has(e) ? this.map[e] : null;
            }),
            (d.prototype.has = function (e) {
              return this.map.hasOwnProperty(h(e));
            }),
            (d.prototype.set = function (e, t) {
              this.map[h(e)] = l(t);
            }),
            (d.prototype.forEach = function (e, t) {
              for (var r in this.map) this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this);
            }),
            (d.prototype.keys = function () {
              var e = [];
              return (
                this.forEach(function (t, r) {
                  e.push(r);
                }),
                u(e)
              );
            }),
            (d.prototype.values = function () {
              var e = [];
              return (
                this.forEach(function (t) {
                  e.push(t);
                }),
                u(e)
              );
            }),
            (d.prototype.entries = function () {
              var e = [];
              return (
                this.forEach(function (t, r) {
                  e.push([r, t]);
                }),
                u(e)
              );
            }),
            i && (d.prototype[Symbol.iterator] = d.prototype.entries);
          var w = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
          function b(e, t) {
            var r = (t = t || {}).body;
            if (e instanceof b) {
              if (e.bodyUsed) throw new TypeError('Already read');
              (this.url = e.url),
                (this.credentials = e.credentials),
                t.headers || (this.headers = new d(e.headers)),
                (this.method = e.method),
                (this.mode = e.mode),
                (this.signal = e.signal),
                r || null == e._bodyInit || ((r = e._bodyInit), (e.bodyUsed = !0));
            } else this.url = String(e);
            if (
              ((this.credentials = t.credentials || this.credentials || 'same-origin'),
              (!t.headers && this.headers) || (this.headers = new d(t.headers)),
              (this.method = (function (e) {
                var t = e.toUpperCase();
                return w.indexOf(t) > -1 ? t : e;
              })(t.method || this.method || 'GET')),
              (this.mode = t.mode || this.mode || null),
              (this.signal = t.signal || this.signal),
              (this.referrer = null),
              ('GET' === this.method || 'HEAD' === this.method) && r)
            )
              throw new TypeError('Body not allowed for GET or HEAD requests');
            this._initBody(r);
          }
          function v(e) {
            var t = new FormData();
            return (
              e
                .trim()
                .split('&')
                .forEach(function (e) {
                  if (e) {
                    var r = e.split('='),
                      i = r.shift().replace(/\+/g, ' '),
                      n = r.join('=').replace(/\+/g, ' ');
                    t.append(decodeURIComponent(i), decodeURIComponent(n));
                  }
                }),
              t
            );
          }
          function E(e) {
            var t = new d();
            return (
              e
                .replace(/\r?\n[\t ]+/g, ' ')
                .split(/\r?\n/)
                .forEach(function (e) {
                  var r = e.split(':'),
                    i = r.shift().trim();
                  if (i) {
                    var n = r.join(':').trim();
                    t.append(i, n);
                  }
                }),
              t
            );
          }
          function I(e, t) {
            t || (t = {}),
              (this.type = 'default'),
              (this.status = void 0 === t.status ? 200 : t.status),
              (this.ok = this.status >= 200 && this.status < 300),
              (this.statusText = 'statusText' in t ? t.statusText : 'OK'),
              (this.headers = new d(t.headers)),
              (this.url = t.url || ''),
              this._initBody(e);
          }
          (b.prototype.clone = function () {
            return new b(this, { body: this._bodyInit });
          }),
            m.call(b.prototype),
            m.call(I.prototype),
            (I.prototype.clone = function () {
              return new I(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new d(this.headers),
                url: this.url,
              });
            }),
            (I.error = function () {
              var e = new I(null, { status: 0, statusText: '' });
              return (e.type = 'error'), e;
            });
          var P = [301, 302, 303, 307, 308];
          (I.redirect = function (e, t) {
            if (-1 === P.indexOf(t)) throw new RangeError('Invalid status code');
            return new I(null, { status: t, headers: { location: e } });
          }),
            (t.DOMException = e.DOMException);
          try {
            new t.DOMException();
          } catch (O) {
            (t.DOMException = function (e, t) {
              (this.message = e), (this.name = t);
              var r = Error(e);
              this.stack = r.stack;
            }),
              (t.DOMException.prototype = Object.create(Error.prototype)),
              (t.DOMException.prototype.constructor = t.DOMException);
          }
          function S(e, r) {
            return new Promise(function (i, s) {
              var o = new b(e, r);
              if (o.signal && o.signal.aborted)
                return s(new t.DOMException('Aborted', 'AbortError'));
              var a = new XMLHttpRequest();
              function c() {
                a.abort();
              }
              (a.onload = function () {
                var e = {
                  status: a.status,
                  statusText: a.statusText,
                  headers: E(a.getAllResponseHeaders() || ''),
                };
                e.url = 'responseURL' in a ? a.responseURL : e.headers.get('X-Request-URL');
                var t = 'response' in a ? a.response : a.responseText;
                i(new I(t, e));
              }),
                (a.onerror = function () {
                  s(new TypeError('Network request failed'));
                }),
                (a.ontimeout = function () {
                  s(new TypeError('Network request failed'));
                }),
                (a.onabort = function () {
                  s(new t.DOMException('Aborted', 'AbortError'));
                }),
                a.open(o.method, o.url, !0),
                'include' === o.credentials
                  ? (a.withCredentials = !0)
                  : 'omit' === o.credentials && (a.withCredentials = !1),
                'responseType' in a && n && (a.responseType = 'blob'),
                o.headers.forEach(function (e, t) {
                  a.setRequestHeader(t, e);
                }),
                o.signal &&
                  (o.signal.addEventListener('abort', c),
                  (a.onreadystatechange = function () {
                    4 === a.readyState && o.signal.removeEventListener('abort', c);
                  })),
                a.send('undefined' === typeof o._bodyInit ? null : o._bodyInit);
            });
          }
          (S.polyfill = !0),
            e.fetch || ((e.fetch = S), (e.Headers = d), (e.Request = b), (e.Response = I)),
            (t.Headers = d),
            (t.Request = b),
            (t.Response = I),
            (t.fetch = S),
            Object.defineProperty(t, '__esModule', { value: !0 });
        })({});
      })(i),
        (i.fetch.ponyfill = !0),
        delete i.fetch.polyfill;
      var n = i;
      ((t = n.fetch).default = n.fetch),
        (t.fetch = n.fetch),
        (t.Headers = n.Headers),
        (t.Request = n.Request),
        (t.Response = n.Response),
        (e.exports = t);
    },
    85346: function (e) {
      'use strict';
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
      'use strict';
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
      'use strict';
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
      'use strict';
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
    69391: function (e, t, r) {
      'use strict';
      r.d(t, {
        zo: function () {
          return w;
        },
        mL: function () {
          return ze;
        },
        BB: function () {
          return He;
        },
      });
      var i = {};
      r.r(i),
        r.d(i, {
          identity: function () {
            return C;
          },
        });
      var n = {};
      r.r(n),
        r.d(n, {
          base2: function () {
            return N;
          },
        });
      var s = {};
      r.r(s),
        r.d(s, {
          base8: function () {
            return R;
          },
        });
      var o = {};
      r.r(o),
        r.d(o, {
          base10: function () {
            return k;
          },
        });
      var a = {};
      r.r(a),
        r.d(a, {
          base16: function () {
            return j;
          },
          base16upper: function () {
            return D;
          },
        });
      var c = {};
      r.r(c),
        r.d(c, {
          base32: function () {
            return U;
          },
          base32hex: function () {
            return M;
          },
          base32hexpad: function () {
            return z;
          },
          base32hexpadupper: function () {
            return H;
          },
          base32hexupper: function () {
            return $;
          },
          base32pad: function () {
            return B;
          },
          base32padupper: function () {
            return q;
          },
          base32upper: function () {
            return L;
          },
          base32z: function () {
            return V;
          },
        });
      var h = {};
      r.r(h),
        r.d(h, {
          base36: function () {
            return K;
          },
          base36upper: function () {
            return F;
          },
        });
      var l = {};
      r.r(l),
        r.d(l, {
          base58btc: function () {
            return W;
          },
          base58flickr: function () {
            return G;
          },
        });
      var u = {};
      r.r(u),
        r.d(u, {
          base64: function () {
            return Y;
          },
          base64pad: function () {
            return J;
          },
          base64url: function () {
            return Z;
          },
          base64urlpad: function () {
            return Q;
          },
        });
      var d = {};
      r.r(d),
        r.d(d, {
          base256emoji: function () {
            return re;
          },
        });
      var p = {};
      r.r(p),
        r.d(p, {
          sha256: function () {
            return Pe;
          },
          sha512: function () {
            return Se;
          },
        });
      var f = {};
      r.r(f),
        r.d(f, {
          identity: function () {
            return _e;
          },
        });
      var g = {};
      r.r(g),
        r.d(g, {
          code: function () {
            return Ae;
          },
          decode: function () {
            return Ce;
          },
          encode: function () {
            return Te;
          },
          name: function () {
            return xe;
          },
        });
      var y = {};
      function m(e = 0) {
        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe
          ? globalThis.Buffer.allocUnsafe(e)
          : new Uint8Array(e);
      }
      function w(e, t) {
        t || (t = e.reduce((e, t) => e + t.length, 0));
        const r = m(t);
        let i = 0;
        for (const n of e) r.set(n, i), (i += n.length);
        return r;
      }
      r.r(y),
        r.d(y, {
          code: function () {
            return je;
          },
          decode: function () {
            return Ue;
          },
          encode: function () {
            return De;
          },
          name: function () {
            return ke;
          },
        });
      var b = function (e, t) {
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
            if ('string' !== typeof e) throw new TypeError('Expected String');
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
        v = b;
      new Uint8Array(0);
      const E = (e) => {
        if (e instanceof Uint8Array && 'Uint8Array' === e.constructor.name) return e;
        if (e instanceof ArrayBuffer) return new Uint8Array(e);
        if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
        throw new Error('Unknown type, must be binary type');
      };
      class I {
        constructor(e, t, r) {
          (this.name = e), (this.prefix = t), (this.baseEncode = r);
        }
        encode(e) {
          if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
          throw Error('Unknown type, must be binary type');
        }
      }
      class P {
        constructor(e, t, r) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw new Error('Invalid prefix character');
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = r);
        }
        decode(e) {
          if ('string' === typeof e) {
            if (e.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`
              );
            return this.baseDecode(e.slice(this.prefix.length));
          }
          throw Error('Can only multibase decode strings');
        }
        or(e) {
          return O(this, e);
        }
      }
      class S {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return O(this, e);
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
      const O = (e, t) =>
        new S({ ...(e.decoders || { [e.prefix]: e }), ...(t.decoders || { [t.prefix]: t }) });
      class _ {
        constructor(e, t, r, i) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = r),
            (this.baseDecode = i),
            (this.encoder = new I(e, t, r)),
            (this.decoder = new P(e, t, i));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      const x = ({ name: e, prefix: t, encode: r, decode: i }) => new _(e, t, r, i),
        A = ({ prefix: e, name: t, alphabet: r }) => {
          const { encode: i, decode: n } = v(r, t);
          return x({ prefix: e, name: t, encode: i, decode: (e) => E(n(e)) });
        },
        T = ({ name: e, prefix: t, bitsPerChar: r, alphabet: i }) =>
          x({
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
        C = x({
          prefix: '\0',
          name: 'identity',
          encode: (e) => {
            return (t = e), new TextDecoder().decode(t);
            var t;
          },
          decode: (e) => ((e) => new TextEncoder().encode(e))(e),
        }),
        N = T({ prefix: '0', name: 'base2', alphabet: '01', bitsPerChar: 1 }),
        R = T({ prefix: '7', name: 'base8', alphabet: '01234567', bitsPerChar: 3 }),
        k = A({ prefix: '9', name: 'base10', alphabet: '0123456789' }),
        j = T({ prefix: 'f', name: 'base16', alphabet: '0123456789abcdef', bitsPerChar: 4 }),
        D = T({ prefix: 'F', name: 'base16upper', alphabet: '0123456789ABCDEF', bitsPerChar: 4 }),
        U = T({
          prefix: 'b',
          name: 'base32',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567',
          bitsPerChar: 5,
        }),
        L = T({
          prefix: 'B',
          name: 'base32upper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
          bitsPerChar: 5,
        }),
        B = T({
          prefix: 'c',
          name: 'base32pad',
          alphabet: 'abcdefghijklmnopqrstuvwxyz234567=',
          bitsPerChar: 5,
        }),
        q = T({
          prefix: 'C',
          name: 'base32padupper',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=',
          bitsPerChar: 5,
        }),
        M = T({
          prefix: 'v',
          name: 'base32hex',
          alphabet: '0123456789abcdefghijklmnopqrstuv',
          bitsPerChar: 5,
        }),
        $ = T({
          prefix: 'V',
          name: 'base32hexupper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV',
          bitsPerChar: 5,
        }),
        z = T({
          prefix: 't',
          name: 'base32hexpad',
          alphabet: '0123456789abcdefghijklmnopqrstuv=',
          bitsPerChar: 5,
        }),
        H = T({
          prefix: 'T',
          name: 'base32hexpadupper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV=',
          bitsPerChar: 5,
        }),
        V = T({
          prefix: 'h',
          name: 'base32z',
          alphabet: 'ybndrfg8ejkmcpqxot1uwisza345h769',
          bitsPerChar: 5,
        }),
        K = A({ prefix: 'k', name: 'base36', alphabet: '0123456789abcdefghijklmnopqrstuvwxyz' }),
        F = A({
          prefix: 'K',
          name: 'base36upper',
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        }),
        W = A({
          name: 'base58btc',
          prefix: 'z',
          alphabet: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
        }),
        G = A({
          name: 'base58flickr',
          prefix: 'Z',
          alphabet: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ',
        }),
        Y = T({
          prefix: 'm',
          name: 'base64',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          bitsPerChar: 6,
        }),
        J = T({
          prefix: 'M',
          name: 'base64pad',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
          bitsPerChar: 6,
        }),
        Z = T({
          prefix: 'u',
          name: 'base64url',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
          bitsPerChar: 6,
        }),
        Q = T({
          prefix: 'U',
          name: 'base64urlpad',
          alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=',
          bitsPerChar: 6,
        }),
        X = Array.from(
          '\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42'
        ),
        ee = X.reduce((e, t, r) => ((e[r] = t), e), []),
        te = X.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []);
      const re = x({
        prefix: '\ud83d\ude80',
        name: 'base256emoji',
        encode: function (e) {
          return e.reduce((e, t) => (e += ee[t]), '');
        },
        decode: function (e) {
          const t = [];
          for (const r of e) {
            const e = te[r.codePointAt(0)];
            if (void 0 === e) throw new Error(`Non-base256emoji character: ${r}`);
            t.push(e);
          }
          return new Uint8Array(t);
        },
      });
      var ie = function e(t, r, i) {
          r = r || [];
          var n = (i = i || 0);
          for (; t >= ne; ) (r[i++] = (255 & t) | 128), (t /= 128);
          for (; -128 & t; ) (r[i++] = (255 & t) | 128), (t >>>= 7);
          return (r[i] = 0 | t), (e.bytes = i - n + 1), r;
        },
        ne = Math.pow(2, 31);
      var se = function e(t, r) {
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
      var oe = Math.pow(2, 7),
        ae = Math.pow(2, 14),
        ce = Math.pow(2, 21),
        he = Math.pow(2, 28),
        le = Math.pow(2, 35),
        ue = Math.pow(2, 42),
        de = Math.pow(2, 49),
        pe = Math.pow(2, 56),
        fe = Math.pow(2, 63),
        ge = {
          encode: ie,
          decode: se,
          encodingLength: function (e) {
            return e < oe
              ? 1
              : e < ae
                ? 2
                : e < ce
                  ? 3
                  : e < he
                    ? 4
                    : e < le
                      ? 5
                      : e < ue
                        ? 6
                        : e < de
                          ? 7
                          : e < pe
                            ? 8
                            : e < fe
                              ? 9
                              : 10;
          },
        };
      const ye = (e, t, r = 0) => (ge.encode(e, t, r), t),
        me = (e) => ge.encodingLength(e),
        we = (e, t) => {
          const r = t.byteLength,
            i = me(e),
            n = i + me(r),
            s = new Uint8Array(n + r);
          return ye(e, s, 0), ye(r, s, i), s.set(t, n), new be(e, r, t, s);
        };
      class be {
        constructor(e, t, r, i) {
          (this.code = e), (this.size = t), (this.digest = r), (this.bytes = i);
        }
      }
      const ve = ({ name: e, code: t, encode: r }) => new Ee(e, t, r);
      class Ee {
        constructor(e, t, r) {
          (this.name = e), (this.code = t), (this.encode = r);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            const t = this.encode(e);
            return t instanceof Uint8Array ? we(this.code, t) : t.then((e) => we(this.code, e));
          }
          throw Error('Unknown type, must be binary type');
        }
      }
      const Ie = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t)),
        Pe = ve({ name: 'sha2-256', code: 18, encode: Ie('SHA-256') }),
        Se = ve({ name: 'sha2-512', code: 19, encode: Ie('SHA-512') }),
        Oe = E,
        _e = { code: 0, name: 'identity', encode: Oe, digest: (e) => we(0, Oe(e)) },
        xe = 'raw',
        Ae = 85,
        Te = (e) => E(e),
        Ce = (e) => E(e),
        Ne = new TextEncoder(),
        Re = new TextDecoder(),
        ke = 'json',
        je = 512,
        De = (e) => Ne.encode(JSON.stringify(e)),
        Ue = (e) => JSON.parse(Re.decode(e));
      Symbol.toStringTag, Symbol.for('nodejs.util.inspect.custom');
      Symbol.for('@ipld/js-cid/CID');
      const Le = { ...i, ...n, ...s, ...o, ...a, ...c, ...h, ...l, ...u, ...d };
      function Be(e, t, r, i) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: i },
        };
      }
      const qe = Be(
          'utf8',
          'u',
          (e) => 'u' + new TextDecoder('utf8').decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        Me = Be(
          'ascii',
          'a',
          (e) => {
            let t = 'a';
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t;
          },
          (e) => {
            const t = m((e = e.substring(1)).length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          }
        );
      var $e = { utf8: qe, 'utf-8': qe, hex: Le.base16, latin1: Me, ascii: Me, binary: Me, ...Le };
      function ze(e, t = 'utf8') {
        const r = $e[t];
        if (!r) throw new Error(`Unsupported encoding "${t}"`);
        return ('utf8' !== t && 'utf-8' !== t) ||
          null == globalThis.Buffer ||
          null == globalThis.Buffer.from
          ? r.decoder.decode(`${r.prefix}${e}`)
          : globalThis.Buffer.from(e, 'utf8');
      }
      function He(e, t = 'utf8') {
        const r = $e[t];
        if (!r) throw new Error(`Unsupported encoding "${t}"`);
        return ('utf8' !== t && 'utf-8' !== t) ||
          null == globalThis.Buffer ||
          null == globalThis.Buffer.from
          ? r.encoder.encode(e).substring(1)
          : globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString('utf8');
      }
    },
  },
]);
