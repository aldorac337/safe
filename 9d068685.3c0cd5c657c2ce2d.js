'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4501],
  {
    79643: function (t, e, r) {
      r.d(e, {
        A6: function () {
          return C;
        },
        OZ: function () {
          return n.OZ;
        },
        PC: function () {
          return n.PC;
        },
        QA: function () {
          return R;
        },
        Sv: function () {
          return I;
        },
        TG: function () {
          return P;
        },
      });
      var n = r(32524),
        o = r(82449);
      function i(t, e, r, n, o, i, a) {
        try {
          var u = t[i](a),
            c = u.value;
        } catch (s) {
          return void r(s);
        }
        u.done ? e(c) : Promise.resolve(c).then(n, o);
      }
      function a(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, o) {
            var a = t.apply(e, r);
            function u(t) {
              i(a, n, o, u, c, 'next', t);
            }
            function c(t) {
              i(a, n, o, u, c, 'throw', t);
            }
            u(void 0);
          });
        };
      }
      function u() {
        return (
          (u =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }),
          u.apply(this, arguments)
        );
      }
      function c(t) {
        return (
          (c = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          c(t)
        );
      }
      function s(t, e) {
        return (
          (s =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          s(t, e)
        );
      }
      function f() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }
      function l(t, e, r) {
        return (
          (l = f()
            ? Reflect.construct
            : function (t, e, r) {
                var n = [null];
                n.push.apply(n, e);
                var o = new (Function.bind.apply(t, n))();
                return r && s(o, r.prototype), o;
              }),
          l.apply(null, arguments)
        );
      }
      function p(t) {
        var e = 'function' === typeof Map ? new Map() : void 0;
        return (
          (p = function (t) {
            if (null === t || ((r = t), -1 === Function.toString.call(r).indexOf('[native code]')))
              return t;
            var r;
            if ('function' !== typeof t)
              throw new TypeError('Super expression must either be null or a function');
            if ('undefined' !== typeof e) {
              if (e.has(t)) return e.get(t);
              e.set(t, n);
            }
            function n() {
              return l(t, arguments, c(this).constructor);
            }
            return (
              (n.prototype = Object.create(t.prototype, {
                constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 },
              })),
              s(n, t)
            );
          }),
          p(t)
        );
      }
      function h(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = {},
          i = Object.keys(t);
        for (n = 0; n < i.length; n++) (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
        return o;
      }
      function d(t) {
        if (void 0 === t)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }
      var v = { exports: {} };
      !(function (t) {
        var e = (function (t) {
          var e,
            r = Object.prototype,
            n = r.hasOwnProperty,
            o = 'function' === typeof Symbol ? Symbol : {},
            i = o.iterator || '@@iterator',
            a = o.asyncIterator || '@@asyncIterator',
            u = o.toStringTag || '@@toStringTag';
          function c(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            c({}, '');
          } catch (_) {
            c = function (t, e, r) {
              return (t[e] = r);
            };
          }
          function s(t, e, r, n) {
            var o = e && e.prototype instanceof y ? e : y,
              i = Object.create(o.prototype),
              a = new P(n || []);
            return (
              (i._invoke = (function (t, e, r) {
                var n = l;
                return function (o, i) {
                  if (n === h) throw new Error('Generator is already running');
                  if (n === d) {
                    if ('throw' === o) throw i;
                    return j();
                  }
                  for (r.method = o, r.arg = i; ; ) {
                    var a = r.delegate;
                    if (a) {
                      var u = L(a, r);
                      if (u) {
                        if (u === v) continue;
                        return u;
                      }
                    }
                    if ('next' === r.method) r.sent = r._sent = r.arg;
                    else if ('throw' === r.method) {
                      if (n === l) throw ((n = d), r.arg);
                      r.dispatchException(r.arg);
                    } else 'return' === r.method && r.abrupt('return', r.arg);
                    n = h;
                    var c = f(t, e, r);
                    if ('normal' === c.type) {
                      if (((n = r.done ? d : p), c.arg === v)) continue;
                      return { value: c.arg, done: r.done };
                    }
                    'throw' === c.type && ((n = d), (r.method = 'throw'), (r.arg = c.arg));
                  }
                };
              })(t, r, a)),
              i
            );
          }
          function f(t, e, r) {
            try {
              return { type: 'normal', arg: t.call(e, r) };
            } catch (_) {
              return { type: 'throw', arg: _ };
            }
          }
          t.wrap = s;
          var l = 'suspendedStart',
            p = 'suspendedYield',
            h = 'executing',
            d = 'completed',
            v = {};
          function y() {}
          function m() {}
          function g() {}
          var w = {};
          c(w, i, function () {
            return this;
          });
          var x = Object.getPrototypeOf,
            k = x && x(x(T([])));
          k && k !== r && n.call(k, i) && (w = k);
          var b = (g.prototype = y.prototype = Object.create(w));
          function A(t) {
            ['next', 'throw', 'return'].forEach(function (e) {
              c(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function E(t, e) {
            function r(o, i, a, u) {
              var c = f(t[o], t, i);
              if ('throw' !== c.type) {
                var s = c.arg,
                  l = s.value;
                return l && 'object' === typeof l && n.call(l, '__await')
                  ? e.resolve(l.__await).then(
                      function (t) {
                        r('next', t, a, u);
                      },
                      function (t) {
                        r('throw', t, a, u);
                      }
                    )
                  : e.resolve(l).then(
                      function (t) {
                        (s.value = t), a(s);
                      },
                      function (t) {
                        return r('throw', t, a, u);
                      }
                    );
              }
              u(c.arg);
            }
            var o;
            this._invoke = function (t, n) {
              function i() {
                return new e(function (e, o) {
                  r(t, n, e, o);
                });
              }
              return (o = o ? o.then(i, i) : i());
            };
          }
          function L(t, r) {
            var n = t.iterator[r.method];
            if (n === e) {
              if (((r.delegate = null), 'throw' === r.method)) {
                if (
                  t.iterator.return &&
                  ((r.method = 'return'), (r.arg = e), L(t, r), 'throw' === r.method)
                )
                  return v;
                (r.method = 'throw'),
                  (r.arg = new TypeError("The iterator does not provide a 'throw' method"));
              }
              return v;
            }
            var o = f(n, t.iterator, r.arg);
            if ('throw' === o.type)
              return (r.method = 'throw'), (r.arg = o.arg), (r.delegate = null), v;
            var i = o.arg;
            return i
              ? i.done
                ? ((r[t.resultName] = i.value),
                  (r.next = t.nextLoc),
                  'return' !== r.method && ((r.method = 'next'), (r.arg = e)),
                  (r.delegate = null),
                  v)
                : i
              : ((r.method = 'throw'),
                (r.arg = new TypeError('iterator result is not an object')),
                (r.delegate = null),
                v);
          }
          function O(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function S(t) {
            var e = t.completion || {};
            (e.type = 'normal'), delete e.arg, (t.completion = e);
          }
          function P(t) {
            (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(O, this), this.reset(!0);
          }
          function T(t) {
            if (t) {
              var r = t[i];
              if (r) return r.call(t);
              if ('function' === typeof t.next) return t;
              if (!isNaN(t.length)) {
                var o = -1,
                  a = function r() {
                    for (; ++o < t.length; )
                      if (n.call(t, o)) return (r.value = t[o]), (r.done = !1), r;
                    return (r.value = e), (r.done = !0), r;
                  };
                return (a.next = a);
              }
            }
            return { next: j };
          }
          function j() {
            return { value: e, done: !0 };
          }
          return (
            (m.prototype = g),
            c(b, 'constructor', g),
            c(g, 'constructor', m),
            (m.displayName = c(g, u, 'GeneratorFunction')),
            (t.isGeneratorFunction = function (t) {
              var e = 'function' === typeof t && t.constructor;
              return !!e && (e === m || 'GeneratorFunction' === (e.displayName || e.name));
            }),
            (t.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, g)
                  : ((t.__proto__ = g), c(t, u, 'GeneratorFunction')),
                (t.prototype = Object.create(b)),
                t
              );
            }),
            (t.awrap = function (t) {
              return { __await: t };
            }),
            A(E.prototype),
            c(E.prototype, a, function () {
              return this;
            }),
            (t.AsyncIterator = E),
            (t.async = function (e, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new E(s(e, r, n, o), i);
              return t.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            A(b),
            c(b, u, 'Generator'),
            c(b, i, function () {
              return this;
            }),
            c(b, 'toString', function () {
              return '[object Generator]';
            }),
            (t.keys = function (t) {
              var e = [];
              for (var r in t) e.push(r);
              return (
                e.reverse(),
                function r() {
                  for (; e.length; ) {
                    var n = e.pop();
                    if (n in t) return (r.value = n), (r.done = !1), r;
                  }
                  return (r.done = !0), r;
                }
              );
            }),
            (t.values = T),
            (P.prototype = {
              constructor: P,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = e),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = e),
                  this.tryEntries.forEach(S),
                  !t)
                )
                  for (var r in this)
                    't' === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ('throw' === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var r = this;
                function o(n, o) {
                  return (
                    (u.type = 'throw'),
                    (u.arg = t),
                    (r.next = n),
                    o && ((r.method = 'next'), (r.arg = e)),
                    !!o
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var a = this.tryEntries[i],
                    u = a.completion;
                  if ('root' === a.tryLoc) return o('end');
                  if (a.tryLoc <= this.prev) {
                    var c = n.call(a, 'catchLoc'),
                      s = n.call(a, 'finallyLoc');
                    if (c && s) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    } else if (c) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    } else {
                      if (!s) throw new Error('try statement without catch or finally');
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, 'finallyLoc') &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ('break' === t || 'continue' === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i ? ((this.method = 'next'), (this.next = i.finallyLoc), v) : this.complete(a)
                );
              },
              complete: function (t, e) {
                if ('throw' === t.type) throw t.arg;
                return (
                  'break' === t.type || 'continue' === t.type
                    ? (this.next = t.arg)
                    : 'return' === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = 'return'),
                        (this.next = 'end'))
                      : 'normal' === t.type && e && (this.next = e),
                  v
                );
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), S(r), v;
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ('throw' === n.type) {
                      var o = n.arg;
                      S(r);
                    }
                    return o;
                  }
                }
                throw new Error('illegal catch attempt');
              },
              delegateYield: function (t, r, n) {
                return (
                  (this.delegate = { iterator: T(t), resultName: r, nextLoc: n }),
                  'next' === this.method && (this.arg = e),
                  v
                );
              },
            }),
            t
          );
        })(t.exports);
        try {
          regeneratorRuntime = e;
        } catch (r) {
          'object' === typeof globalThis
            ? (globalThis.regeneratorRuntime = e)
            : Function('r', 'regeneratorRuntime = r')(e);
        }
      })(v);
      var y = v.exports,
        m = 'https://api.paraswap.io',
        g = '5';
      var w = function (t) {
          var e,
            r =
              ((e = t),
              Object.entries(e)
                .filter(function (t) {
                  return void 0 !== t[1];
                })
                .map(function (t) {
                  var e = t[0],
                    r = t[1];
                  return [e, String(r)];
                })),
            n = new URLSearchParams(r).toString();
          return n && '?' + n;
        },
        x = (function (t) {
          var e, r;
          function n(e) {
            var r,
              o = e.code,
              i = e.request,
              a = e.response,
              u = e.isAxiosError,
              c = e.message;
            if (
              (((r = t.call(this) || this).code = void 0),
              (r.status = void 0),
              (r.request = void 0),
              (r.response = void 0),
              (r.isAxiosError = !1),
              Error.captureStackTrace && Error.captureStackTrace(d(r), n),
              (r.name = r.constructor.name),
              (r.code = o),
              (r.request = i),
              (r.isAxiosError = u),
              !a)
            )
              return (r.message = c), d(r);
            r.response = a;
            var s = a.data,
              f = a.status;
            return (r.status = f), (r.message = k(s) ? s.error : c), r;
          }
          return (
            (r = t),
            ((e = n).prototype = Object.create(r.prototype)),
            (e.prototype.constructor = e),
            s(e, r),
            n
          );
        })(p(Error));
      function k(t) {
        return !!(e = t) && 'object' === typeof e && 'string' === typeof t.error;
        var e;
      }
      var b = ['options'],
        A = [
          'excludePricingMethods',
          'excludeContractMethods',
          'includeContractMethods',
          'partner',
          'includeDEXS',
          'excludeDEXS',
          'excludePools',
        ];
      function E(t) {
        var e = t.options,
          r = void 0 === e ? {} : e,
          n = h(t, b),
          o = r.excludePricingMethods,
          i = r.excludeContractMethods,
          a = r.includeContractMethods,
          c = r.partner,
          s = void 0 === c ? 'paraswap.io' : c,
          f = r.includeDEXS,
          l = r.excludeDEXS,
          p = r.excludePools,
          d = h(r, A),
          v = [f, l, p, o, i, a].map(function (t) {
            return (null == t ? void 0 : t.join(',')) || void 0;
          }),
          y = v[0],
          m = v[1],
          g = v[2];
        return u(
          {},
          {
            excludePricingMethods: v[3],
            excludeContractMethods: v[4],
            includeContractMethods: v[5],
            partner: s,
            includeDEXS: y,
            excludeDEXS: m,
            excludePools: g,
          },
          d,
          n
        );
      }
      var L,
        O = ['srcToken', 'destToken'],
        S = ['route'];
      !(function (t) {
        (t.megapath = 'megapath'), (t.multipath = 'multipath'), (t.simplepath = 'simplepath');
      })(L || (L = {}));
      var P = function (t) {
        var e = t.apiURL,
          r = void 0 === e ? m : e,
          n = t.version,
          o = void 0 === n ? g : n,
          i = t.chainId,
          c = t.fetcher,
          s = r + '/prices',
          f = (function () {
            var t = a(
              y.mark(function t(e, r) {
                var n, a, f, l, p, d, v;
                return y.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = e.srcToken),
                          (a = e.destToken),
                          (f = h(e, O)),
                          (l = E(f)),
                          (p = w(u({ srcToken: n, destToken: a, network: i, version: o }, l))),
                          (d = s + '/' + p),
                          (t.next = 6),
                          c({ url: d, method: 'GET', signal: r })
                        );
                      case 6:
                        return (v = t.sent), t.abrupt('return', v.priceRoute);
                      case 8:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e, r) {
              return t.apply(this, arguments);
            };
          })(),
          l = (function () {
            var t = a(
              y.mark(function t(e, r) {
                var n, a, f, l, p, d, v;
                return y.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (((n = e.route), (a = h(e, S)), !(n.length < 2))) {
                          t.next = 3;
                          break;
                        }
                        throw new Error('Invalid Route');
                      case 3:
                        return (
                          (f = E(a)),
                          (l = n.join('-')),
                          (p = w(u({ route: l, network: i, version: o }, f))),
                          (d = s + '/' + p),
                          (t.next = 9),
                          c({ url: d, method: 'GET', signal: r })
                        );
                      case 9:
                        return (v = t.sent), t.abrupt('return', v.priceRoute);
                      case 11:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e, r) {
              return t.apply(this, arguments);
            };
          })();
        return { getRate: f, getRateByRoute: l };
      };
      function T(t) {
        return {
          nonceAndMeta: t.nonceAndMeta,
          expiry: t.expiry,
          makerAsset: t.makerAsset,
          takerAsset: t.takerAsset,
          maker: t.maker,
          taker: t.taker,
          makerAmount: t.makerAmount,
          takerAmount: t.takerAmount,
        };
      }
      function j(t, e) {
        return (BigInt(t) + (BigInt(e) << BigInt(160))).toString(10);
      }
      function _(t) {
        var e = t.nonceAndMeta,
          r = t.expiry,
          n = t.makerAsset,
          o = t.takerAsset,
          i = t.maker,
          a = t.taker,
          u = t.makerAmount,
          c = t.takerAmount,
          s = t.makerAssetId,
          f = t.takerAssetId,
          l = t.makerAssetType,
          p = t.takerAssetType;
        return {
          nonceAndMeta: e,
          expiry: r,
          makerAsset: void 0 !== l && n.startsWith('0x') ? j(n, l) : n,
          takerAsset: void 0 !== p && o.startsWith('0x') ? j(o, p) : o,
          maker: i,
          taker: a,
          makerAmount: u,
          takerAmount: c,
          makerAssetId: s,
          takerAssetId: f,
        };
      }
      var R = function (t) {
        var e = t.apiURL,
          r = void 0 === e ? m : e,
          i = t.chainId,
          c = t.fetcher,
          s = r + '/transactions/' + i,
          f = (function () {
            var t = a(
              y.mark(function t(e, r, i) {
                var a, f, l, p, h, d, v, m, g, x;
                return y.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          void 0 === r && (r = {}),
                          'priceRoute' in e &&
                            'destAmount' in e &&
                            !('orders' in e) &&
                            ((f = e.priceRoute),
                            (l = e.priceRoute.side),
                            (p =
                              l === n.PC.SELL
                                ? 'Source Amount Mismatch'
                                : 'Destination Amount Mismatch'),
                            (0, o.assert)(M({ queryParams: e, side: l, priceRoute: f }), p)),
                          (h = w(r)),
                          (d = s + '/' + h),
                          (v =
                            'orders' in e && e.orders.length > 0
                              ? u({}, e, {
                                  orders: e.orders.map(function (t) {
                                    var e = u({}, 'makerAssetId' in t ? _(t) : T(t), {
                                      signature: t.signature,
                                    });
                                    return (
                                      t.permitMakerAsset &&
                                        (e.permitMakerAsset = t.permitMakerAsset),
                                      e
                                    );
                                  }),
                                })
                              : e),
                          (m =
                            null != (a = e.takeSurplus)
                              ? a
                              : void 0 !== e.positiveSlippageToUser
                                ? !e.positiveSlippageToUser
                                : void 0),
                          'positiveSlippageToUser' in v && delete v.positiveSlippageToUser,
                          void 0 !== m && (v.takeSurplus = m),
                          (g = { url: d, method: 'POST', data: v, signal: i }),
                          (t.next = 11),
                          c(g)
                        );
                      case 11:
                        return (x = t.sent), t.abrupt('return', x);
                      case 13:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e, r, n) {
              return t.apply(this, arguments);
            };
          })();
        return { buildTx: f };
      };
      function M(t) {
        var e = t.queryParams,
          r = t.side,
          o = t.priceRoute;
        if (e.slippage)
          return (
            (r === n.PC.BUY && e.destAmount === o.destAmount) ||
            (r === n.PC.SELL && e.srcAmount === o.srcAmount)
          );
        var i = r === n.PC.SELL ? [e.srcAmount, o.srcAmount] : [e.destAmount, o.destAmount];
        return i[0] === i[1];
      }
      var I = function (t, e) {
        return (function () {
          var r = a(
            y.mark(function r(n) {
              var o, i, a, c, s, f, l, p, h;
              return y.wrap(
                function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (r.prev = 0),
                          (o = n.url),
                          (i = n.method),
                          (a = n.signal),
                          (c = 'POST' === i ? JSON.stringify(n.data) : null),
                          (s = 'POST' === i && c ? { 'Content-Type': 'application/json' } : void 0),
                          (f =
                            null != e && e.apiKey
                              ? u({ 'X-API-KEY': e.apiKey }, n.headers)
                              : void 0),
                          (l = s || f || n.headers ? u({}, f, s, n.headers) : void 0),
                          (r.next = 8),
                          t(o, { method: i, body: c, signal: a, headers: l })
                        );
                      case 8:
                        return (p = r.sent), (r.next = 11), p.json();
                      case 11:
                        if (((h = r.sent), p.ok)) {
                          r.next = 14;
                          break;
                        }
                        throw new x({
                          code: String(p.status),
                          response: {
                            data: h,
                            status: p.status,
                            statusText: p.statusText,
                            headers: Object.fromEntries(p.headers.entries()),
                            config: { url: o, method: i },
                          },
                          message: p.statusText,
                          isAxiosError: !1,
                        });
                      case 14:
                        return r.abrupt('return', h);
                      case 17:
                        if (((r.prev = 17), (r.t0 = r.catch(0)), !(r.t0 instanceof x))) {
                          r.next = 21;
                          break;
                        }
                        throw r.t0;
                      case 21:
                        throw new x(r.t0);
                      case 22:
                      case 'end':
                        return r.stop();
                    }
                },
                r,
                null,
                [[0, 17]]
              );
            })
          );
          return function (t) {
            return r.apply(this, arguments);
          };
        })();
      };
      var C = function (t) {
        for (var e, r, n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
          o[i - 1] = arguments[i];
        var a = o.reduce(function (e, r) {
            var n = r(t);
            return Object.assign(e, n);
          }, {}),
          c = u({}, a, {
            apiURL: null != (e = t.apiURL) ? e : m,
            version: null != (r = t.version) ? r : g,
            chainId: t.chainId,
          });
        return c;
      };
    },
  },
]);
