'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9597],
  {
    89597: function (n, e, t) {
      t.r(e),
        t.d(e, {
          i: function () {
            return f;
          },
        });
      var r = t(48764).Buffer;
      function o(n, e) {
        return (
          e.forEach(function (e) {
            e &&
              'string' !== typeof e &&
              !Array.isArray(e) &&
              Object.keys(e).forEach(function (t) {
                if ('default' !== t && !(t in n)) {
                  var r = Object.getOwnPropertyDescriptor(e, t);
                  Object.defineProperty(
                    n,
                    t,
                    r.get
                      ? r
                      : {
                          enumerable: !0,
                          get: function () {
                            return e[t];
                          },
                        }
                  );
                }
              });
          }),
          Object.freeze(n)
        );
      }
      'undefined' !== typeof globalThis
        ? globalThis
        : 'undefined' !== typeof window
          ? window
          : 'undefined' !== typeof global
            ? global
            : 'undefined' !== typeof self && self;
      function i(n) {
        return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, 'default')
          ? n.default
          : n;
      }
      var a = { exports: {} },
        u = { exports: {} };
      'undefined' != typeof self && self,
        (u.exports = (function (n) {
          var e = {};
          function t(r) {
            if (e[r]) return e[r].exports;
            var o = (e[r] = { i: r, l: !1, exports: {} });
            return n[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
          }
          return (
            (t.m = n),
            (t.c = e),
            (t.d = function (n, e, r) {
              t.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: r });
            }),
            (t.r = function (n) {
              'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(n, '__esModule', { value: !0 });
            }),
            (t.t = function (n, e) {
              if ((1 & e && (n = t(n)), 8 & e)) return n;
              if (4 & e && 'object' == typeof n && n && n.__esModule) return n;
              var r = Object.create(null);
              if (
                (t.r(r),
                Object.defineProperty(r, 'default', { enumerable: !0, value: n }),
                2 & e && 'string' != typeof n)
              )
                for (var o in n)
                  t.d(
                    r,
                    o,
                    function (e) {
                      return n[e];
                    }.bind(null, o)
                  );
              return r;
            }),
            (t.n = function (n) {
              var e =
                n && n.__esModule
                  ? function () {
                      return n.default;
                    }
                  : function () {
                      return n;
                    };
              return t.d(e, 'a', e), e;
            }),
            (t.o = function (n, e) {
              return {}.hasOwnProperty.call(n, e);
            }),
            (t.p = ''),
            t((t.s = 0))
          );
        })([
          function (n, e, t) {
            function o(n) {
              return '[object RegExp]' === {}.toString.call(n);
            }
            t.r(e),
              t.d(e, 'Promise', function () {
                return I;
              }),
              t.d(e, 'TYPES', function () {
                return Vn;
              }),
              t.d(e, 'ProxyWindow', function () {
                return Sn;
              }),
              t.d(e, 'setup', function () {
                return Gn;
              }),
              t.d(e, 'destroy', function () {
                return Qn;
              }),
              t.d(e, 'serializeMessage', function () {
                return Kn;
              }),
              t.d(e, 'deserializeMessage', function () {
                return Yn;
              }),
              t.d(e, 'createProxyWindow', function () {
                return Zn;
              }),
              t.d(e, 'toProxyWindow', function () {
                return $n;
              }),
              t.d(e, 'on', function () {
                return Hn;
              }),
              t.d(e, 'once', function () {
                return Jn;
              }),
              t.d(e, 'send', function () {
                return Un;
              }),
              t.d(e, 'markWindowKnown', function () {
                return vn;
              }),
              t.d(e, 'cleanUpWindow', function () {
                return Xn;
              }),
              t.d(e, 'bridge', function () {});
            var i = 'Call was rejected by callee.\r\n';
            function a(n) {
              return void 0 === n && (n = window), n.location.protocol;
            }
            function u(n) {
              if ((void 0 === n && (n = window), n.mockDomain)) {
                var e = n.mockDomain.split('//')[0];
                if (e) return e;
              }
              return a(n);
            }
            function c(n) {
              return void 0 === n && (n = window), 'about:' === u(n);
            }
            function s(n) {
              if ((void 0 === n && (n = window), n))
                try {
                  if (n.parent && n.parent !== n) return n.parent;
                } catch (e) {}
            }
            function f(n) {
              if ((void 0 === n && (n = window), n && !s(n)))
                try {
                  return n.opener;
                } catch (e) {}
            }
            function d(n) {
              try {
                return !0;
              } catch (e) {}
              return !1;
            }
            function l(n) {
              void 0 === n && (n = window);
              var e = n.location;
              if (!e) throw new Error('Can not read window location');
              var t = a(n);
              if (!t) throw new Error('Can not read window protocol');
              if ('file:' === t) return 'file://';
              if ('about:' === t) {
                var r = s(n);
                return r && d() ? l(r) : 'about://';
              }
              var o = e.host;
              if (!o) throw new Error('Can not read window host');
              return t + '//' + o;
            }
            function h(n) {
              void 0 === n && (n = window);
              var e = l(n);
              return e && n.mockDomain && 0 === n.mockDomain.indexOf('mock:') ? n.mockDomain : e;
            }
            function w(n) {
              if (
                !(function (n) {
                  try {
                    if (n === window) return !0;
                  } catch (t) {}
                  try {
                    var e = Object.getOwnPropertyDescriptor(n, 'location');
                    if (e && !1 === e.enumerable) return !1;
                  } catch (t) {}
                  try {
                    if (c(n) && d()) return !0;
                  } catch (t) {}
                  try {
                    if (
                      (function (n) {
                        return void 0 === n && (n = window), 'mock:' === u(n);
                      })(n) &&
                      d()
                    )
                      return !0;
                  } catch (t) {}
                  try {
                    if (l(n) === l(window)) return !0;
                  } catch (t) {}
                  return !1;
                })(n)
              )
                return !1;
              try {
                if (n === window) return !0;
                if (c(n) && d()) return !0;
                if (h(window) === h(n)) return !0;
              } catch (e) {}
              return !1;
            }
            function p(n) {
              if (!w(n)) throw new Error('Expected window to be same domain');
              return n;
            }
            function v(n, e) {
              if (!n || !e) return !1;
              var t = s(e);
              return t
                ? t === n
                : -1 !==
                    (function (n) {
                      var e = [];
                      try {
                        for (; n.parent !== n; ) e.push(n.parent), (n = n.parent);
                      } catch (t) {}
                      return e;
                    })(e).indexOf(n);
            }
            function m(n) {
              var e,
                t,
                r = [];
              try {
                e = n.frames;
              } catch (c) {
                e = n;
              }
              try {
                t = e.length;
              } catch (c) {}
              if (0 === t) return r;
              if (t) {
                for (var o = 0; o < t; o++) {
                  var i = void 0;
                  try {
                    i = e[o];
                  } catch (c) {
                    continue;
                  }
                  r.push(i);
                }
                return r;
              }
              for (var a = 0; a < 100; a++) {
                var u = void 0;
                try {
                  u = e[a];
                } catch (c) {
                  return r;
                }
                if (!u) return r;
                r.push(u);
              }
              return r;
            }
            var y = [],
              g = [];
            function _(n, e) {
              void 0 === e && (e = !0);
              try {
                if (n === window) return !1;
              } catch (o) {
                return !0;
              }
              try {
                if (!n) return !0;
              } catch (o) {
                return !0;
              }
              try {
                if (n.closed) return !0;
              } catch (o) {
                return !o || o.message !== i;
              }
              if (e && w(n))
                try {
                  if (n.mockclosed) return !0;
                } catch (o) {}
              try {
                if (!n.parent || !n.top) return !0;
              } catch (o) {}
              var t = (function (n, e) {
                for (var t = 0; t < n.length; t++)
                  try {
                    if (n[t] === e) return t;
                  } catch (o) {}
                return -1;
              })(y, n);
              if (-1 !== t) {
                var r = g[t];
                if (
                  r &&
                  (function (n) {
                    if (!n.contentWindow) return !0;
                    if (!n.parentNode) return !0;
                    var e = n.ownerDocument;
                    if (e && e.documentElement && !e.documentElement.contains(n)) {
                      for (var t = n; t.parentNode && t.parentNode !== t; ) t = t.parentNode;
                      if (!t.host || !e.documentElement.contains(t.host)) return !0;
                    }
                    return !1;
                  })(r)
                )
                  return !0;
              }
              return !1;
            }
            function b(n) {
              return void 0 === n && (n = window), f((n = n || window)) || s(n) || void 0;
            }
            function W(n, e) {
              if ('string' == typeof n) {
                if ('string' == typeof e) return '*' === n || e === n;
                if (o(e)) return !1;
                if (Array.isArray(e)) return !1;
              }
              return o(n)
                ? o(e)
                  ? n.toString() === e.toString()
                  : !Array.isArray(e) && Boolean(e.match(n))
                : !!Array.isArray(n) &&
                    (Array.isArray(e)
                      ? JSON.stringify(n) === JSON.stringify(e)
                      : !o(e) &&
                        n.some(function (n) {
                          return W(n, e);
                        }));
            }
            function E(n) {
              try {
                if (n === window) return !0;
              } catch (e) {
                if (e && e.message === i) return !0;
              }
              try {
                if ('[object Window]' === {}.toString.call(n)) return !0;
              } catch (e) {
                if (e && e.message === i) return !0;
              }
              try {
                if (window.Window && n instanceof window.Window) return !0;
              } catch (e) {
                if (e && e.message === i) return !0;
              }
              try {
                if (n && n.self === n) return !0;
              } catch (e) {
                if (e && e.message === i) return !0;
              }
              try {
                if (n && n.parent === n) return !0;
              } catch (e) {
                if (e && e.message === i) return !0;
              }
              try {
                if (n && n.top === n) return !0;
              } catch (e) {
                if (e && e.message === i) return !0;
              }
              try {
                if (n && '__unlikely_value__' === n.__cross_domain_utils_window_check__) return !1;
              } catch (e) {
                return !0;
              }
              try {
                if ('postMessage' in n && 'self' in n && 'location' in n) return !0;
              } catch (e) {}
              return !1;
            }
            function x(n) {
              if (w(n)) return p(n).frameElement;
              for (var e = 0, t = document.querySelectorAll('iframe'); e < t.length; e++) {
                var r = t[e];
                if (r && r.contentWindow && r.contentWindow === n) return r;
              }
            }
            function j(n) {
              if (
                (function (n) {
                  return void 0 === n && (n = window), Boolean(s(n));
                })(n)
              ) {
                var e = x(n);
                if (e && e.parentElement) return void e.parentElement.removeChild(e);
              }
              try {
                n.close();
              } catch (t) {}
            }
            function k(n) {
              try {
                if (!n) return !1;
                if ('undefined' != typeof Promise && n instanceof Promise) return !0;
                if (
                  'undefined' != typeof window &&
                  'function' == typeof window.Window &&
                  n instanceof window.Window
                )
                  return !1;
                if (
                  'undefined' != typeof window &&
                  'function' == typeof window.constructor &&
                  n instanceof window.constructor
                )
                  return !1;
                var e = {}.toString;
                if (e) {
                  var t = e.call(n);
                  if (
                    '[object Window]' === t ||
                    '[object global]' === t ||
                    '[object DOMWindow]' === t
                  )
                    return !1;
                }
                if ('function' == typeof n.then) return !0;
              } catch (r) {
                return !1;
              }
              return !1;
            }
            var S,
              O = [],
              P = [],
              A = 0;
            function D() {
              if (!A && S) {
                var n = S;
                (S = null), n.resolve();
              }
            }
            function C() {
              A += 1;
            }
            function z() {
              (A -= 1), D();
            }
            var I = (function () {
              function n(n) {
                var e = this;
                if (
                  ((this.resolved = void 0),
                  (this.rejected = void 0),
                  (this.errorHandled = void 0),
                  (this.value = void 0),
                  (this.error = void 0),
                  (this.handlers = void 0),
                  (this.dispatching = void 0),
                  (this.stack = void 0),
                  (this.resolved = !1),
                  (this.rejected = !1),
                  (this.errorHandled = !1),
                  (this.handlers = []),
                  n)
                ) {
                  var t,
                    r,
                    o = !1,
                    i = !1,
                    a = !1;
                  C();
                  try {
                    n(
                      function (n) {
                        a ? e.resolve(n) : ((o = !0), (t = n));
                      },
                      function (n) {
                        a ? e.reject(n) : ((i = !0), (r = n));
                      }
                    );
                  } catch (u) {
                    return z(), void this.reject(u);
                  }
                  z(), (a = !0), o ? this.resolve(t) : i && this.reject(r);
                }
              }
              var e = n.prototype;
              return (
                (e.resolve = function (n) {
                  if (this.resolved || this.rejected) return this;
                  if (k(n)) throw new Error('Can not resolve promise with another promise');
                  return (this.resolved = !0), (this.value = n), this.dispatch(), this;
                }),
                (e.reject = function (n) {
                  var e = this;
                  if (this.resolved || this.rejected) return this;
                  if (k(n)) throw new Error('Can not reject promise with another promise');
                  if (!n) {
                    var t =
                      n && 'function' == typeof n.toString ? n.toString() : {}.toString.call(n);
                    n = new Error('Expected reject to be called with Error, got ' + t);
                  }
                  return (
                    (this.rejected = !0),
                    (this.error = n),
                    this.errorHandled ||
                      setTimeout(function () {
                        e.errorHandled ||
                          (function (n, e) {
                            if (-1 === O.indexOf(n)) {
                              O.push(n),
                                setTimeout(function () {
                                  throw n;
                                }, 1);
                              for (var t = 0; t < P.length; t++) P[t](n, e);
                            }
                          })(n, e);
                      }, 1),
                    this.dispatch(),
                    this
                  );
                }),
                (e.asyncReject = function (n) {
                  return (this.errorHandled = !0), this.reject(n), this;
                }),
                (e.dispatch = function () {
                  var e = this.resolved,
                    t = this.rejected,
                    r = this.handlers;
                  if (!this.dispatching && (e || t)) {
                    (this.dispatching = !0), C();
                    for (
                      var o = function (n, e) {
                          return n.then(
                            function (n) {
                              e.resolve(n);
                            },
                            function (n) {
                              e.reject(n);
                            }
                          );
                        },
                        i = 0;
                      i < r.length;
                      i++
                    ) {
                      var a = r[i],
                        u = a.onSuccess,
                        c = a.onError,
                        s = a.promise,
                        f = void 0;
                      if (e)
                        try {
                          f = u ? u(this.value) : this.value;
                        } catch (l) {
                          s.reject(l);
                          continue;
                        }
                      else if (t) {
                        if (!c) {
                          s.reject(this.error);
                          continue;
                        }
                        try {
                          f = c(this.error);
                        } catch (l) {
                          s.reject(l);
                          continue;
                        }
                      }
                      if (f instanceof n && (f.resolved || f.rejected)) {
                        var d = f;
                        d.resolved ? s.resolve(d.value) : s.reject(d.error), (d.errorHandled = !0);
                      } else
                        k(f)
                          ? f instanceof n && (f.resolved || f.rejected)
                            ? f.resolved
                              ? s.resolve(f.value)
                              : s.reject(f.error)
                            : o(f, s)
                          : s.resolve(f);
                    }
                    (r.length = 0), (this.dispatching = !1), z();
                  }
                }),
                (e.then = function (e, t) {
                  if (e && 'function' != typeof e && !e.call)
                    throw new Error('Promise.then expected a function for success handler');
                  if (t && 'function' != typeof t && !t.call)
                    throw new Error('Promise.then expected a function for error handler');
                  var r = new n();
                  return (
                    this.handlers.push({ promise: r, onSuccess: e, onError: t }),
                    (this.errorHandled = !0),
                    this.dispatch(),
                    r
                  );
                }),
                (e.catch = function (n) {
                  return this.then(void 0, n);
                }),
                (e.finally = function (e) {
                  if (e && 'function' != typeof e && !e.call)
                    throw new Error('Promise.finally expected a function');
                  return this.then(
                    function (t) {
                      return n.try(e).then(function () {
                        return t;
                      });
                    },
                    function (t) {
                      return n.try(e).then(function () {
                        throw t;
                      });
                    }
                  );
                }),
                (e.timeout = function (n, e) {
                  var t = this;
                  if (this.resolved || this.rejected) return this;
                  var r = setTimeout(function () {
                    t.resolved ||
                      t.rejected ||
                      t.reject(e || new Error('Promise timed out after ' + n + 'ms'));
                  }, n);
                  return this.then(function (n) {
                    return clearTimeout(r), n;
                  });
                }),
                (e.toPromise = function () {
                  if ('undefined' == typeof Promise) throw new TypeError('Could not find Promise');
                  return Promise.resolve(this);
                }),
                (e.lazy = function () {
                  return (this.errorHandled = !0), this;
                }),
                (n.resolve = function (e) {
                  return e instanceof n
                    ? e
                    : k(e)
                      ? new n(function (n, t) {
                          return e.then(n, t);
                        })
                      : new n().resolve(e);
                }),
                (n.reject = function (e) {
                  return new n().reject(e);
                }),
                (n.asyncReject = function (e) {
                  return new n().asyncReject(e);
                }),
                (n.all = function (e) {
                  var t = new n(),
                    r = e.length,
                    o = [].slice();
                  if (!r) return t.resolve(o), t;
                  for (
                    var i = function (n, e, i) {
                        return e.then(
                          function (e) {
                            (o[n] = e), 0 == (r -= 1) && t.resolve(o);
                          },
                          function (n) {
                            i.reject(n);
                          }
                        );
                      },
                      a = 0;
                    a < e.length;
                    a++
                  ) {
                    var u = e[a];
                    if (u instanceof n) {
                      if (u.resolved) {
                        (o[a] = u.value), (r -= 1);
                        continue;
                      }
                    } else if (!k(u)) {
                      (o[a] = u), (r -= 1);
                      continue;
                    }
                    i(a, n.resolve(u), t);
                  }
                  return 0 === r && t.resolve(o), t;
                }),
                (n.hash = function (e) {
                  var t = {},
                    r = [],
                    o = function (n) {
                      if (e.hasOwnProperty(n)) {
                        var o = e[n];
                        k(o)
                          ? r.push(
                              o.then(function (e) {
                                t[n] = e;
                              })
                            )
                          : (t[n] = o);
                      }
                    };
                  for (var i in e) o(i);
                  return n.all(r).then(function () {
                    return t;
                  });
                }),
                (n.map = function (e, t) {
                  return n.all(e.map(t));
                }),
                (n.onPossiblyUnhandledException = function (n) {
                  return (function (n) {
                    return (
                      P.push(n),
                      {
                        cancel: function () {
                          P.splice(P.indexOf(n), 1);
                        },
                      }
                    );
                  })(n);
                }),
                (n.try = function (e, t, r) {
                  if (e && 'function' != typeof e && !e.call)
                    throw new Error('Promise.try expected a function');
                  var o;
                  C();
                  try {
                    o = e.apply(t, r || []);
                  } catch (i) {
                    return z(), n.reject(i);
                  }
                  return z(), n.resolve(o);
                }),
                (n.delay = function (e) {
                  return new n(function (n) {
                    setTimeout(n, e);
                  });
                }),
                (n.isPromise = function (e) {
                  return !!(e && e instanceof n) || k(e);
                }),
                (n.flush = function () {
                  return (function (n) {
                    var e = (S = S || new n());
                    return D(), e;
                  })(n);
                }),
                n
              );
            })();
            function N(n, e) {
              for (var t = 0; t < n.length; t++)
                try {
                  if (n[t] === e) return t;
                } catch (r) {}
              return -1;
            }
            var M,
              T = (function () {
                function n() {
                  if (
                    ((this.name = void 0),
                    (this.weakmap = void 0),
                    (this.keys = void 0),
                    (this.values = void 0),
                    (this.name = '__weakmap_' + ((1e9 * Math.random()) >>> 0) + '__'),
                    (function () {
                      if ('undefined' == typeof WeakMap) return !1;
                      if (void 0 === Object.freeze) return !1;
                      try {
                        var n = new WeakMap(),
                          e = {};
                        return (
                          Object.freeze(e), n.set(e, '__testvalue__'), '__testvalue__' === n.get(e)
                        );
                      } catch (t) {
                        return !1;
                      }
                    })())
                  )
                    try {
                      this.weakmap = new WeakMap();
                    } catch (n) {}
                  (this.keys = []), (this.values = []);
                }
                var e = n.prototype;
                return (
                  (e._cleanupClosedWindows = function () {
                    for (var n = this.weakmap, e = this.keys, t = 0; t < e.length; t++) {
                      var r = e[t];
                      if (E(r) && _(r)) {
                        if (n)
                          try {
                            n.delete(r);
                          } catch (o) {}
                        e.splice(t, 1), this.values.splice(t, 1), (t -= 1);
                      }
                    }
                  }),
                  (e.isSafeToReadWrite = function (n) {
                    return !E(n);
                  }),
                  (e.set = function (n, e) {
                    if (!n) throw new Error('WeakMap expected key');
                    var t = this.weakmap;
                    if (t)
                      try {
                        t.set(n, e);
                      } catch (c) {
                        delete this.weakmap;
                      }
                    if (this.isSafeToReadWrite(n))
                      try {
                        var r = this.name,
                          o = n[r];
                        return void (o && o[0] === n
                          ? (o[1] = e)
                          : Object.defineProperty(n, r, { value: [n, e], writable: !0 }));
                      } catch (c) {}
                    this._cleanupClosedWindows();
                    var i = this.keys,
                      a = this.values,
                      u = N(i, n);
                    -1 === u ? (i.push(n), a.push(e)) : (a[u] = e);
                  }),
                  (e.get = function (n) {
                    if (!n) throw new Error('WeakMap expected key');
                    var e = this.weakmap;
                    if (e)
                      try {
                        if (e.has(n)) return e.get(n);
                      } catch (o) {
                        delete this.weakmap;
                      }
                    if (this.isSafeToReadWrite(n))
                      try {
                        var t = n[this.name];
                        return t && t[0] === n ? t[1] : void 0;
                      } catch (o) {}
                    this._cleanupClosedWindows();
                    var r = N(this.keys, n);
                    if (-1 !== r) return this.values[r];
                  }),
                  (e.delete = function (n) {
                    if (!n) throw new Error('WeakMap expected key');
                    var e = this.weakmap;
                    if (e)
                      try {
                        e.delete(n);
                      } catch (i) {
                        delete this.weakmap;
                      }
                    if (this.isSafeToReadWrite(n))
                      try {
                        var t = n[this.name];
                        t && t[0] === n && (t[0] = t[1] = void 0);
                      } catch (i) {}
                    this._cleanupClosedWindows();
                    var r = this.keys,
                      o = N(r, n);
                    -1 !== o && (r.splice(o, 1), this.values.splice(o, 1));
                  }),
                  (e.has = function (n) {
                    if (!n) throw new Error('WeakMap expected key');
                    var e = this.weakmap;
                    if (e)
                      try {
                        if (e.has(n)) return !0;
                      } catch (r) {
                        delete this.weakmap;
                      }
                    if (this.isSafeToReadWrite(n))
                      try {
                        var t = n[this.name];
                        return !(!t || t[0] !== n);
                      } catch (r) {}
                    return this._cleanupClosedWindows(), -1 !== N(this.keys, n);
                  }),
                  (e.getOrSet = function (n, e) {
                    if (this.has(n)) return this.get(n);
                    var t = e();
                    return this.set(n, t), t;
                  }),
                  n
                );
              })();
            function R(n) {
              return n.name || n.__name__ || n.displayName || 'anonymous';
            }
            function L(n, e) {
              try {
                delete n.name, (n.name = e);
              } catch (t) {}
              return (n.__name__ = n.displayName = e), n;
            }
            function q() {
              var n = '0123456789abcdef';
              return (
                'uid_' +
                'xxxxxxxxxx'.replace(/./g, function () {
                  return n.charAt(Math.floor(Math.random() * n.length));
                }) +
                '_' +
                (function (n) {
                  if ('function' == typeof btoa)
                    return btoa(
                      encodeURIComponent(n).replace(/%([0-9A-F]{2})/g, function (n, e) {
                        return String.fromCharCode(parseInt(e, 16));
                      })
                    ).replace(/[=]/g, '');
                  if ('undefined' != typeof r)
                    return r.from(n, 'utf8').toString('base64').replace(/[=]/g, '');
                  throw new Error('Can not find window.btoa or Buffer');
                })(new Date().toISOString().slice(11, 19).replace('T', '.'))
                  .replace(/[^a-zA-Z0-9]/g, '')
                  .toLowerCase()
              );
            }
            function F(n) {
              try {
                return JSON.stringify([].slice.call(n), function (n, e) {
                  return 'function' == typeof e
                    ? 'memoize[' +
                        (function (n) {
                          if (
                            ((M = M || new T()),
                            null == n || ('object' != typeof n && 'function' != typeof n))
                          )
                            throw new Error('Invalid object');
                          var e = M.get(n);
                          return e || ((e = typeof n + ':' + q()), M.set(n, e)), e;
                        })(e) +
                        ']'
                    : ('undefined' != typeof window && e instanceof window.Element) ||
                        (null !== e &&
                          'object' == typeof e &&
                          1 === e.nodeType &&
                          'object' == typeof e.style &&
                          'object' == typeof e.ownerDocument)
                      ? {}
                      : e;
                });
              } catch (e) {
                throw new Error('Arguments not serializable -- can not be used to memoize');
              }
            }
            function B() {
              return {};
            }
            var H = 0,
              J = 0;
            function U(n, e) {
              void 0 === e && (e = {});
              var t,
                r,
                o = e.thisNamespace,
                i = void 0 !== o && o,
                a = e.time,
                u = H;
              H += 1;
              var c = function () {
                for (var e = arguments.length, o = new Array(e), c = 0; c < e; c++)
                  o[c] = arguments[c];
                var s, f;
                u < J && ((t = null), (r = null), (u = H), (H += 1)),
                  (s = i ? (r = r || new T()).getOrSet(this, B) : (t = t || {}));
                try {
                  f = F(o);
                } catch (w) {
                  return n.apply(this, arguments);
                }
                var d = s[f];
                if ((d && a && Date.now() - d.time < a && (delete s[f], (d = null)), d))
                  return d.value;
                var l = Date.now(),
                  h = n.apply(this, arguments);
                return (s[f] = { time: l, value: h }), h;
              };
              return (
                (c.reset = function () {
                  (t = null), (r = null);
                }),
                L(c, (e.name || R(n)) + '::memoized')
              );
            }
            function K(n) {
              var e = {};
              function t() {
                for (
                  var t = arguments, r = this, o = arguments.length, i = new Array(o), a = 0;
                  a < o;
                  a++
                )
                  i[a] = arguments[a];
                var u = F(i);
                return (
                  e.hasOwnProperty(u) ||
                    (e[u] = I.try(function () {
                      return n.apply(r, t);
                    }).finally(function () {
                      delete e[u];
                    })),
                  e[u]
                );
              }
              return (
                (t.reset = function () {
                  e = {};
                }),
                L(t, R(n) + '::promiseMemoized')
              );
            }
            function Y() {}
            function Z(n, e) {
              if ((void 0 === e && (e = 1), e >= 3)) return 'stringifyError stack overflow';
              try {
                if (!n) return '<unknown error: ' + {}.toString.call(n) + '>';
                if ('string' == typeof n) return n;
                if (n instanceof Error) {
                  var t = n && n.stack,
                    r = n && n.message;
                  if (t && r) return -1 !== t.indexOf(r) ? t : r + '\n' + t;
                  if (t) return t;
                  if (r) return r;
                }
                return n && n.toString && 'function' == typeof n.toString
                  ? n.toString()
                  : {}.toString.call(n);
              } catch (o) {
                return 'Error while stringifying error: ' + Z(o, e + 1);
              }
            }
            function $(n) {
              return 'string' == typeof n
                ? n
                : n && n.toString && 'function' == typeof n.toString
                  ? n.toString()
                  : {}.toString.call(n);
            }
            function G(n) {
              return '[object RegExp]' === {}.toString.call(n);
            }
            function Q(n, e, t) {
              if (n.hasOwnProperty(e)) return n[e];
              var r = t();
              return (n[e] = r), r;
            }
            function V() {
              var n = document.body;
              if (!n) throw new Error('Body element not found');
              return n;
            }
            function X() {
              return Boolean(document.body) && 'complete' === document.readyState;
            }
            function nn() {
              return Boolean(document.body) && 'interactive' === document.readyState;
            }
            (U.clear = function () {
              J = H;
            }),
              U(function (n) {
                if (Object.values) return Object.values(n);
                var e = [];
                for (var t in n) n.hasOwnProperty(t) && e.push(n[t]);
                return e;
              }),
              U(function () {
                return new I(function (n) {
                  if (X() || nn()) return n();
                  var e = setInterval(function () {
                    if (X() || nn()) return clearInterval(e), n();
                  }, 10);
                });
              });
            var en = 'undefined' != typeof document ? document.currentScript : null,
              tn = U(function () {
                if (en) return en;
                if (
                  (en = (function () {
                    try {
                      var n = (function () {
                          try {
                            throw new Error('_');
                          } catch (n) {
                            return n.stack || '';
                          }
                        })(),
                        e = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(n),
                        t = e && e[1];
                      if (!t) return;
                      for (
                        var r = 0,
                          o = [].slice.call(document.getElementsByTagName('script')).reverse();
                        r < o.length;
                        r++
                      ) {
                        var i = o[r];
                        if (i.src && i.src === t) return i;
                      }
                    } catch (a) {}
                  })())
                )
                  return en;
                throw new Error('Can not determine current script');
              }),
              rn = q();
            function on(n) {
              void 0 === n && (n = window);
              var e = '__post_robot_10_0_46__';
              return n !== window ? n[e] : (n[e] = n[e] || {});
            }
            U(function () {
              var n;
              try {
                n = tn();
              } catch (r) {
                return rn;
              }
              var e = n.getAttribute('data-uid');
              if (e && 'string' == typeof e) return e;
              if ((e = n.getAttribute('data-uid-auto')) && 'string' == typeof e) return e;
              if (n.src) {
                var t = (function (n) {
                  for (var e = '', t = 0; t < n.length; t++) {
                    var r = n[t].charCodeAt(0) * t;
                    n[t + 1] && (r += n[t + 1].charCodeAt(0) * (t - 1)),
                      (e += String.fromCharCode(97 + (Math.abs(r) % 26)));
                  }
                  return e;
                })(JSON.stringify({ src: n.src, dataset: n.dataset }));
                e = 'uid_' + t.slice(t.length - 30);
              } else e = q();
              return n.setAttribute('data-uid-auto', e), e;
            });
            var an = function () {
              return {};
            };
            function un(n, e) {
              return (
                void 0 === n && (n = 'store'),
                void 0 === e && (e = an),
                Q(on(), n, function () {
                  var n = e();
                  return {
                    has: function (e) {
                      return n.hasOwnProperty(e);
                    },
                    get: function (e, t) {
                      return n.hasOwnProperty(e) ? n[e] : t;
                    },
                    set: function (e, t) {
                      return (n[e] = t), t;
                    },
                    del: function (e) {
                      delete n[e];
                    },
                    getOrSet: function (e, t) {
                      return Q(n, e, t);
                    },
                    reset: function () {
                      n = e();
                    },
                    keys: function () {
                      return Object.keys(n);
                    },
                  };
                })
              );
            }
            var cn,
              sn = function () {};
            function fn() {
              var n = on();
              return (n.WINDOW_WILDCARD = n.WINDOW_WILDCARD || new sn()), n.WINDOW_WILDCARD;
            }
            function dn(n, e) {
              return (
                void 0 === n && (n = 'store'),
                void 0 === e && (e = an),
                un('windowStore').getOrSet(n, function () {
                  var t = new T(),
                    r = function (n) {
                      return t.getOrSet(n, e);
                    };
                  return {
                    has: function (e) {
                      return r(e).hasOwnProperty(n);
                    },
                    get: function (e, t) {
                      var o = r(e);
                      return o.hasOwnProperty(n) ? o[n] : t;
                    },
                    set: function (e, t) {
                      return (r(e)[n] = t), t;
                    },
                    del: function (e) {
                      delete r(e)[n];
                    },
                    getOrSet: function (e, t) {
                      return Q(r(e), n, t);
                    },
                  };
                })
              );
            }
            function ln() {
              return un('instance').getOrSet('instanceID', q);
            }
            function hn(n, e) {
              var t = e.domain,
                r = dn('helloPromises'),
                o = r.get(n);
              o && o.resolve({ domain: t });
              var i = I.resolve({ domain: t });
              return r.set(n, i), i;
            }
            function wn(n, e) {
              return (0, e.send)(
                n,
                'postrobot_hello',
                { instanceID: ln() },
                { domain: '*', timeout: -1 }
              ).then(function (e) {
                var t = e.origin,
                  r = e.data.instanceID;
                return hn(n, { domain: t }), { win: n, domain: t, instanceID: r };
              });
            }
            function pn(n, e) {
              var t = e.send;
              return dn('windowInstanceIDPromises').getOrSet(n, function () {
                return wn(n, { send: t }).then(function (n) {
                  return n.instanceID;
                });
              });
            }
            function vn(n) {
              dn('knownWindows').set(n, !0);
            }
            function mn(n) {
              return 'object' == typeof n && null !== n && 'string' == typeof n.__type__;
            }
            function yn(n) {
              return void 0 === n
                ? 'undefined'
                : null === n
                  ? 'null'
                  : Array.isArray(n)
                    ? 'array'
                    : 'function' == typeof n
                      ? 'function'
                      : 'object' == typeof n
                        ? n instanceof Error
                          ? 'error'
                          : 'function' == typeof n.then
                            ? 'promise'
                            : '[object RegExp]' === {}.toString.call(n)
                              ? 'regex'
                              : '[object Date]' === {}.toString.call(n)
                                ? 'date'
                                : 'object'
                        : 'string' == typeof n
                          ? 'string'
                          : 'number' == typeof n
                            ? 'number'
                            : 'boolean' == typeof n
                              ? 'boolean'
                              : void 0;
            }
            function gn(n, e) {
              return { __type__: n, __val__: e };
            }
            var _n,
              bn =
                (((cn = {}).function = function () {}),
                (cn.error = function (n) {
                  return gn('error', {
                    message: n.message,
                    stack: n.stack,
                    code: n.code,
                    data: n.data,
                  });
                }),
                (cn.promise = function () {}),
                (cn.regex = function (n) {
                  return gn('regex', n.source);
                }),
                (cn.date = function (n) {
                  return gn('date', n.toJSON());
                }),
                (cn.array = function (n) {
                  return n;
                }),
                (cn.object = function (n) {
                  return n;
                }),
                (cn.string = function (n) {
                  return n;
                }),
                (cn.number = function (n) {
                  return n;
                }),
                (cn.boolean = function (n) {
                  return n;
                }),
                (cn.null = function (n) {
                  return n;
                }),
                (cn[void 0] = function (n) {
                  return gn('undefined', n);
                }),
                cn),
              Wn = {},
              En =
                (((_n = {}).function = function () {
                  throw new Error(
                    'Function serialization is not implemented; nothing to deserialize'
                  );
                }),
                (_n.error = function (n) {
                  var e = n.stack,
                    t = n.code,
                    r = n.data,
                    o = new Error(n.message);
                  return (o.code = t), r && (o.data = r), (o.stack = e + '\n\n' + o.stack), o;
                }),
                (_n.promise = function () {
                  throw new Error(
                    'Promise serialization is not implemented; nothing to deserialize'
                  );
                }),
                (_n.regex = function (n) {
                  return new RegExp(n);
                }),
                (_n.date = function (n) {
                  return new Date(n);
                }),
                (_n.array = function (n) {
                  return n;
                }),
                (_n.object = function (n) {
                  return n;
                }),
                (_n.string = function (n) {
                  return n;
                }),
                (_n.number = function (n) {
                  return n;
                }),
                (_n.boolean = function (n) {
                  return n;
                }),
                (_n.null = function (n) {
                  return n;
                }),
                (_n[void 0] = function () {}),
                _n),
              xn = {};
            function jn() {
              for (var n = un('idToProxyWindow'), e = 0, t = n.keys(); e < t.length; e++) {
                var r = t[e];
                n.get(r).shouldClean() && n.del(r);
              }
            }
            function kn(n, e) {
              var t = e.send,
                r = e.id,
                o = void 0 === r ? q() : r,
                i = n.then(function (n) {
                  if (w(n)) return p(n).name;
                }),
                a = n.then(function (n) {
                  if (_(n)) throw new Error('Window is closed, can not determine type');
                  return f(n) ? 'popup' : 'iframe';
                });
              i.catch(Y), a.catch(Y);
              var u = function () {
                return n.then(function (n) {
                  if (!_(n)) return w(n) ? p(n).name : i;
                });
              };
              return {
                id: o,
                getType: function () {
                  return a;
                },
                getInstanceID: K(function () {
                  return n.then(function (n) {
                    return pn(n, { send: t });
                  });
                }),
                close: function () {
                  return n.then(j);
                },
                getName: u,
                focus: function () {
                  return n.then(function (n) {
                    n.focus();
                  });
                },
                isClosed: function () {
                  return n.then(function (n) {
                    return _(n);
                  });
                },
                setLocation: function (e, t) {
                  return (
                    void 0 === t && (t = {}),
                    n.then(function (n) {
                      var r = window.location.protocol + '//' + window.location.host,
                        o = t.method,
                        i = void 0 === o ? 'get' : o,
                        a = t.body;
                      if (0 === e.indexOf('/')) e = '' + r + e;
                      else if (!e.match(/^https?:\/\//) && 0 !== e.indexOf(r))
                        throw new Error(
                          'Expected url to be http or https url, or absolute path, got ' +
                            JSON.stringify(e)
                        );
                      if ('post' === i)
                        return u().then(function (n) {
                          if (!n) throw new Error('Can not post to window without target name');
                          !(function (n) {
                            var e = n.url,
                              t = n.target,
                              r = n.body,
                              o = n.method,
                              i = void 0 === o ? 'post' : o,
                              a = document.createElement('form');
                            if (
                              (a.setAttribute('target', t),
                              a.setAttribute('method', i),
                              a.setAttribute('action', e),
                              (a.style.display = 'none'),
                              r)
                            )
                              for (var u = 0, c = Object.keys(r); u < c.length; u++) {
                                var s,
                                  f = c[u],
                                  d = document.createElement('input');
                                d.setAttribute('name', f),
                                  d.setAttribute(
                                    'value',
                                    null == (s = r[f]) ? void 0 : s.toString()
                                  ),
                                  a.appendChild(d);
                              }
                            V().appendChild(a), a.submit(), V().removeChild(a);
                          })({ url: e, target: n, method: i, body: a });
                        });
                      if ('get' !== i) throw new Error('Unsupported method: ' + i);
                      if (w(n))
                        try {
                          if (n.location && 'function' == typeof n.location.replace)
                            return void n.location.replace(e);
                        } catch (c) {}
                      n.location = e;
                    })
                  );
                },
                setName: function (e) {
                  return n.then(function (n) {
                    var t = w(n),
                      r = x(n);
                    if (!t) throw new Error('Can not set name for cross-domain window: ' + e);
                    (p(n).name = e), r && r.setAttribute('name', e), (i = I.resolve(e));
                  });
                },
              };
            }
            new I(function (n) {
              if (window.document && window.document.body) return n(window.document.body);
              var e = setInterval(function () {
                if (window.document && window.document.body)
                  return clearInterval(e), n(window.document.body);
              }, 10);
            });
            var Sn = (function () {
              function n(n) {
                var e = n.send,
                  t = n.win,
                  r = n.serializedWindow;
                (this.id = void 0),
                  (this.isProxyWindow = !0),
                  (this.serializedWindow = void 0),
                  (this.actualWindow = void 0),
                  (this.actualWindowPromise = void 0),
                  (this.send = void 0),
                  (this.name = void 0),
                  (this.actualWindowPromise = new I()),
                  (this.serializedWindow = r || kn(this.actualWindowPromise, { send: e })),
                  un('idToProxyWindow').set(this.getID(), this),
                  t && this.setWindow(t, { send: e });
              }
              var e = n.prototype;
              return (
                (e.getID = function () {
                  return this.serializedWindow.id;
                }),
                (e.getType = function () {
                  return this.serializedWindow.getType();
                }),
                (e.isPopup = function () {
                  return this.getType().then(function (n) {
                    return 'popup' === n;
                  });
                }),
                (e.setLocation = function (n, e) {
                  var t = this;
                  return this.serializedWindow.setLocation(n, e).then(function () {
                    return t;
                  });
                }),
                (e.getName = function () {
                  return this.serializedWindow.getName();
                }),
                (e.setName = function (n) {
                  var e = this;
                  return this.serializedWindow.setName(n).then(function () {
                    return e;
                  });
                }),
                (e.close = function () {
                  var n = this;
                  return this.serializedWindow.close().then(function () {
                    return n;
                  });
                }),
                (e.focus = function () {
                  var n = this,
                    e = this.isPopup(),
                    t = this.getName(),
                    r = I.hash({ isPopup: e, name: t }).then(function (n) {
                      var e = n.name;
                      n.isPopup && e && window.open('', e, 'noopener');
                    }),
                    o = this.serializedWindow.focus();
                  return I.all([r, o]).then(function () {
                    return n;
                  });
                }),
                (e.isClosed = function () {
                  return this.serializedWindow.isClosed();
                }),
                (e.getWindow = function () {
                  return this.actualWindow;
                }),
                (e.setWindow = function (n, e) {
                  var t = e.send;
                  (this.actualWindow = n),
                    this.actualWindowPromise.resolve(this.actualWindow),
                    (this.serializedWindow = kn(this.actualWindowPromise, {
                      send: t,
                      id: this.getID(),
                    })),
                    dn('winToProxyWindow').set(n, this);
                }),
                (e.awaitWindow = function () {
                  return this.actualWindowPromise;
                }),
                (e.matchWindow = function (n, e) {
                  var t = this,
                    r = e.send;
                  return I.try(function () {
                    return t.actualWindow
                      ? n === t.actualWindow
                      : I.hash({
                          proxyInstanceID: t.getInstanceID(),
                          knownWindowInstanceID: pn(n, { send: r }),
                        }).then(function (e) {
                          var o = e.proxyInstanceID === e.knownWindowInstanceID;
                          return o && t.setWindow(n, { send: r }), o;
                        });
                  });
                }),
                (e.unwrap = function () {
                  return this.actualWindow || this;
                }),
                (e.getInstanceID = function () {
                  return this.serializedWindow.getInstanceID();
                }),
                (e.shouldClean = function () {
                  return Boolean(this.actualWindow && _(this.actualWindow));
                }),
                (e.serialize = function () {
                  return this.serializedWindow;
                }),
                (n.unwrap = function (e) {
                  return n.isProxyWindow(e) ? e.unwrap() : e;
                }),
                (n.serialize = function (e, t) {
                  var r = t.send;
                  return jn(), n.toProxyWindow(e, { send: r }).serialize();
                }),
                (n.deserialize = function (e, t) {
                  var r = t.send;
                  return (
                    jn(), un('idToProxyWindow').get(e.id) || new n({ serializedWindow: e, send: r })
                  );
                }),
                (n.isProxyWindow = function (n) {
                  return Boolean(n && !E(n) && n.isProxyWindow);
                }),
                (n.toProxyWindow = function (e, t) {
                  var r = t.send;
                  if ((jn(), n.isProxyWindow(e))) return e;
                  var o = e;
                  return dn('winToProxyWindow').get(o) || new n({ win: o, send: r });
                }),
                n
              );
            })();
            function On(n, e, t, r, o) {
              var i = dn('methodStore'),
                a = un('proxyWindowMethods');
              Sn.isProxyWindow(r)
                ? a.set(n, { val: e, name: t, domain: o, source: r })
                : (a.del(n),
                  (i.getOrSet(r, function () {
                    return {};
                  })[n] = { domain: o, name: t, val: e, source: r }));
            }
            function Pn(n, e) {
              var t = dn('methodStore'),
                r = un('proxyWindowMethods');
              return (
                t.getOrSet(n, function () {
                  return {};
                })[e] || r.get(e)
              );
            }
            function An(n, e, t, r, o) {
              var i, a, u;
              (a = (i = { on: o.on, send: o.send }).on),
                (u = i.send),
                un('builtinListeners').getOrSet('functionCalls', function () {
                  return a('postrobot_method', { domain: '*' }, function (n) {
                    var e = n.source,
                      t = n.origin,
                      r = n.data,
                      o = r.id,
                      i = r.name,
                      a = Pn(e, o);
                    if (!a)
                      throw new Error(
                        "Could not find method '" + i + "' with id: " + r.id + ' in ' + h(window)
                      );
                    var c = a.source,
                      s = a.domain,
                      f = a.val;
                    return I.try(function () {
                      if (!W(s, t))
                        throw new Error(
                          "Method '" +
                            r.name +
                            "' domain " +
                            JSON.stringify(G(a.domain) ? a.domain.source : a.domain) +
                            ' does not match origin ' +
                            t +
                            ' in ' +
                            h(window)
                        );
                      if (Sn.isProxyWindow(c))
                        return c.matchWindow(e, { send: u }).then(function (n) {
                          if (!n)
                            throw new Error(
                              "Method call '" +
                                r.name +
                                "' failed - proxy window does not match source in " +
                                h(window)
                            );
                        });
                    })
                      .then(
                        function () {
                          return f.apply({ source: e, origin: t }, r.args);
                        },
                        function (n) {
                          return I.try(function () {
                            if (f.onError) return f.onError(n);
                          }).then(function () {
                            throw (
                              (n.stack &&
                                (n.stack =
                                  'Remote call to ' +
                                  i +
                                  '(' +
                                  (function (n) {
                                    return (
                                      void 0 === n && (n = []),
                                      ((e = n), [].slice.call(e))
                                        .map(function (n) {
                                          return 'string' == typeof n
                                            ? "'" + n + "'"
                                            : void 0 === n
                                              ? 'undefined'
                                              : null === n
                                                ? 'null'
                                                : 'boolean' == typeof n
                                                  ? n.toString()
                                                  : Array.isArray(n)
                                                    ? '[ ... ]'
                                                    : 'object' == typeof n
                                                      ? '{ ... }'
                                                      : 'function' == typeof n
                                                        ? '() => { ... }'
                                                        : '<' + typeof n + '>';
                                        })
                                        .join(', ')
                                    );
                                    var e;
                                  })(r.args) +
                                  ') failed\n\n' +
                                  n.stack),
                              n)
                            );
                          });
                        }
                      )
                      .then(function (n) {
                        return { result: n, id: o, name: i };
                      });
                  });
                });
              var c = t.__id__ || q();
              n = Sn.unwrap(n);
              var s = t.__name__ || t.name || r;
              return (
                'string' == typeof s &&
                  'function' == typeof s.indexOf &&
                  0 === s.indexOf('anonymous::') &&
                  (s = s.replace('anonymous::', r + '::')),
                Sn.isProxyWindow(n)
                  ? (On(c, t, s, n, e),
                    n.awaitWindow().then(function (n) {
                      On(c, t, s, n, e);
                    }))
                  : On(c, t, s, n, e),
                gn('cross_domain_function', { id: c, name: s })
              );
            }
            function Dn(n, e, t, r) {
              var o,
                i = r.on,
                a = r.send;
              return (function (n, e) {
                void 0 === e && (e = Wn);
                var t = JSON.stringify(n, function (n) {
                  var t = this[n];
                  if (mn(this)) return t;
                  var r = yn(t);
                  if (!r) return t;
                  var o = e[r] || bn[r];
                  return o ? o(t, n) : t;
                });
                return void 0 === t ? 'undefined' : t;
              })(
                t,
                (((o = {}).promise = function (t, r) {
                  return (function (n, e, t, r, o) {
                    return gn('cross_domain_zalgo_promise', {
                      then: An(
                        n,
                        e,
                        function (n, e) {
                          return t.then(n, e);
                        },
                        r,
                        { on: o.on, send: o.send }
                      ),
                    });
                  })(n, e, t, r, { on: i, send: a });
                }),
                (o.function = function (t, r) {
                  return An(n, e, t, r, { on: i, send: a });
                }),
                (o.object = function (n) {
                  return E(n) || Sn.isProxyWindow(n)
                    ? gn('cross_domain_window', Sn.serialize(n, { send: a }))
                    : n;
                }),
                o)
              );
            }
            function Cn(n, e, t, r) {
              var o,
                i = r.send;
              return (function (n, e) {
                if ((void 0 === e && (e = xn), 'undefined' !== n))
                  return JSON.parse(n, function (n, t) {
                    if (mn(this)) return t;
                    var r, o;
                    if ((mn(t) ? ((r = t.__type__), (o = t.__val__)) : ((r = yn(t)), (o = t)), !r))
                      return o;
                    var i = e[r] || En[r];
                    return i ? i(o, n) : o;
                  });
              })(
                t,
                (((o = {}).cross_domain_zalgo_promise = function (n) {
                  return (function (n, e, t) {
                    return new I(t.then);
                  })(0, 0, n);
                }),
                (o.cross_domain_function = function (t) {
                  return (function (n, e, t, r) {
                    var o = t.id,
                      i = t.name,
                      a = r.send,
                      u = function (t) {
                        function r() {
                          var u = arguments;
                          return Sn.toProxyWindow(n, { send: a })
                            .awaitWindow()
                            .then(function (n) {
                              var c = Pn(n, o);
                              if (c && c.val !== r)
                                return c.val.apply({ source: window, origin: h() }, u);
                              var s = [].slice.call(u);
                              return t.fireAndForget
                                ? a(
                                    n,
                                    'postrobot_method',
                                    { id: o, name: i, args: s },
                                    { domain: e, fireAndForget: !0 }
                                  )
                                : a(
                                    n,
                                    'postrobot_method',
                                    { id: o, name: i, args: s },
                                    { domain: e, fireAndForget: !1 }
                                  ).then(function (n) {
                                    return n.data.result;
                                  });
                            })
                            .catch(function (n) {
                              throw n;
                            });
                        }
                        return (
                          void 0 === t && (t = {}),
                          (r.__name__ = i),
                          (r.__origin__ = e),
                          (r.__source__ = n),
                          (r.__id__ = o),
                          (r.origin = e),
                          r
                        );
                      },
                      c = u();
                    return (c.fireAndForget = u({ fireAndForget: !0 })), c;
                  })(n, e, t, { send: i });
                }),
                (o.cross_domain_window = function (n) {
                  return Sn.deserialize(n, { send: i });
                }),
                o)
              );
            }
            var zn = {};
            function In(n, e, t, r) {
              var o = r.on,
                i = r.send;
              return I.try(function () {
                var r = dn().getOrSet(n, function () {
                  return {};
                });
                return (
                  (r.buffer = r.buffer || []),
                  r.buffer.push(t),
                  (r.flush =
                    r.flush ||
                    I.flush().then(function () {
                      if (_(n)) throw new Error('Window is closed');
                      var t,
                        a = Dn(n, e, (((t = {}).__post_robot_10_0_46__ = r.buffer || []), t), {
                          on: o,
                          send: i,
                        });
                      delete r.buffer;
                      for (var u = Object.keys(zn), c = [], s = 0; s < u.length; s++) {
                        var f = u[s];
                        try {
                          zn[f](n, a, e);
                        } catch (d) {
                          c.push(d);
                        }
                      }
                      if (c.length === u.length)
                        throw new Error(
                          'All post-robot messaging strategies failed:\n\n' +
                            c
                              .map(function (n, e) {
                                return e + '. ' + Z(n);
                              })
                              .join('\n\n')
                        );
                    })),
                  r.flush.then(function () {
                    delete r.flush;
                  })
                );
              }).then(Y);
            }
            function Nn(n) {
              return un('responseListeners').get(n);
            }
            function Mn(n) {
              un('responseListeners').del(n);
            }
            function Tn(n) {
              return un('erroredResponseListeners').has(n);
            }
            function Rn(n) {
              var e = n.name,
                t = n.win,
                r = n.domain,
                o = dn('requestListeners');
              if (('*' === t && (t = null), '*' === r && (r = null), !e))
                throw new Error('Name required to get request listener');
              for (var i = 0, a = [t, fn()]; i < a.length; i++) {
                var u = a[i];
                if (u) {
                  var c = o.get(u);
                  if (c) {
                    var s = c[e];
                    if (s) {
                      if (r && 'string' == typeof r) {
                        if (s[r]) return s[r];
                        if (s.__domain_regex__)
                          for (var f = 0, d = s.__domain_regex__; f < d.length; f++) {
                            var l = d[f],
                              h = l.listener;
                            if (W(l.regex, r)) return h;
                          }
                      }
                      if (s['*']) return s['*'];
                    }
                  }
                }
              }
            }
            function Ln(n, e, t, r) {
              var o = r.on,
                i = r.send,
                a = Rn({ name: t.name, win: n, domain: e }),
                u =
                  'postrobot_method' === t.name && t.data && 'string' == typeof t.data.name
                    ? t.data.name + '()'
                    : t.name;
              function c(r, a, c) {
                return I.flush().then(function () {
                  if (!t.fireAndForget && !_(n))
                    try {
                      return In(
                        n,
                        e,
                        {
                          id: q(),
                          origin: h(window),
                          type: 'postrobot_message_response',
                          hash: t.hash,
                          name: t.name,
                          ack: r,
                          data: a,
                          error: c,
                        },
                        { on: o, send: i }
                      );
                    } catch (s) {
                      throw new Error(
                        'Send response message failed for ' + u + ' in ' + h() + '\n\n' + Z(s)
                      );
                    }
                });
              }
              return I.all([
                I.flush().then(function () {
                  if (!t.fireAndForget && !_(n))
                    try {
                      return In(
                        n,
                        e,
                        {
                          id: q(),
                          origin: h(window),
                          type: 'postrobot_message_ack',
                          hash: t.hash,
                          name: t.name,
                        },
                        { on: o, send: i }
                      );
                    } catch (r) {
                      throw new Error(
                        'Send ack message failed for ' + u + ' in ' + h() + '\n\n' + Z(r)
                      );
                    }
                }),
                I.try(function () {
                  if (!a)
                    throw new Error(
                      'No handler found for post message: ' +
                        t.name +
                        ' from ' +
                        e +
                        ' in ' +
                        window.location.protocol +
                        '//' +
                        window.location.host +
                        window.location.pathname
                    );
                  return a.handler({ source: n, origin: e, data: t.data });
                }).then(
                  function (n) {
                    return c('success', n);
                  },
                  function (n) {
                    return c('error', null, n);
                  }
                ),
              ])
                .then(Y)
                .catch(function (n) {
                  if (a && a.handleError) return a.handleError(n);
                  throw n;
                });
            }
            function qn(n, e, t) {
              if (!Tn(t.hash)) {
                var r = Nn(t.hash);
                if (!r)
                  throw new Error(
                    'No handler found for post message ack for message: ' +
                      t.name +
                      ' from ' +
                      e +
                      ' in ' +
                      window.location.protocol +
                      '//' +
                      window.location.host +
                      window.location.pathname
                  );
                try {
                  if (!W(r.domain, e))
                    throw new Error(
                      'Ack origin ' + e + ' does not match domain ' + r.domain.toString()
                    );
                  if (n !== r.win) throw new Error('Ack source does not match registered window');
                } catch (o) {
                  r.promise.reject(o);
                }
                r.ack = !0;
              }
            }
            function Fn(n, e, t) {
              if (!Tn(t.hash)) {
                var r,
                  i = Nn(t.hash);
                if (!i)
                  throw new Error(
                    'No handler found for post message response for message: ' +
                      t.name +
                      ' from ' +
                      e +
                      ' in ' +
                      window.location.protocol +
                      '//' +
                      window.location.host +
                      window.location.pathname
                  );
                if (!W(i.domain, e))
                  throw new Error(
                    'Response origin ' +
                      e +
                      ' does not match domain ' +
                      ((r = i.domain),
                      Array.isArray(r)
                        ? '(' + r.join(' | ') + ')'
                        : o(r)
                          ? 'RegExp(' + r.toString() + ')'
                          : r.toString())
                  );
                if (n !== i.win)
                  throw new Error('Response source does not match registered window');
                Mn(t.hash),
                  'error' === t.ack
                    ? i.promise.reject(t.error)
                    : 'success' === t.ack &&
                      i.promise.resolve({ source: n, origin: e, data: t.data });
              }
            }
            function Bn(n, e) {
              var t = e.on,
                r = e.send,
                o = un('receivedMessages');
              try {
                if (!window || window.closed || !n.source) return;
              } catch (f) {
                return;
              }
              var i = n.source,
                a = n.origin,
                u = (function (n, e, t, r) {
                  var o,
                    i = r.on,
                    a = r.send;
                  try {
                    o = Cn(e, t, n, { on: i, send: a });
                  } catch (f) {
                    return;
                  }
                  if (o && 'object' == typeof o && null !== o) {
                    var u = o.__post_robot_10_0_46__;
                    if (Array.isArray(u)) return u;
                  }
                })(n.data, i, a, { on: t, send: r });
              if (u) {
                vn(i);
                for (var c = 0; c < u.length; c++) {
                  var s = u[c];
                  if (o.has(s.id)) return;
                  if ((o.set(s.id, !0), _(i) && !s.fireAndForget)) return;
                  0 === s.origin.indexOf('file:') && (a = 'file://');
                  try {
                    'postrobot_message_request' === s.type
                      ? Ln(i, a, s, { on: t, send: r })
                      : 'postrobot_message_response' === s.type
                        ? Fn(i, a, s)
                        : 'postrobot_message_ack' === s.type && qn(i, a, s);
                  } catch (f) {
                    setTimeout(function () {
                      throw f;
                    }, 0);
                  }
                }
              }
            }
            function Hn(n, e, t) {
              if (!n) throw new Error('Expected name');
              if (('function' == typeof (e = e || {}) && ((t = e), (e = {})), !t))
                throw new Error('Expected handler');
              var r = (function n(e, t) {
                var r = e.name,
                  o = e.win,
                  i = e.domain,
                  a = dn('requestListeners');
                if (!r || 'string' != typeof r)
                  throw new Error('Name required to add request listener');
                if (o && '*' !== o && Sn.isProxyWindow(o)) {
                  var u = o.awaitWindow().then(function (e) {
                    return n({ name: r, win: e, domain: i }, t);
                  });
                  return {
                    cancel: function () {
                      u.then(function (n) {
                        return n.cancel();
                      }, Y);
                    },
                  };
                }
                var c = o;
                if (Array.isArray(c)) {
                  for (var s = [], f = 0, d = c; f < d.length; f++)
                    s.push(n({ name: r, domain: i, win: d[f] }, t));
                  return {
                    cancel: function () {
                      for (var n = 0; n < s.length; n++) s[n].cancel();
                    },
                  };
                }
                if (Array.isArray(i)) {
                  for (var l = [], h = 0, w = i; h < w.length; h++)
                    l.push(n({ name: r, win: c, domain: w[h] }, t));
                  return {
                    cancel: function () {
                      for (var n = 0; n < l.length; n++) l[n].cancel();
                    },
                  };
                }
                var p = Rn({ name: r, win: c, domain: i });
                (c && '*' !== c) || (c = fn());
                var v = (i = i || '*').toString();
                if (p)
                  throw c && i
                    ? new Error(
                        'Request listener already exists for ' +
                          r +
                          ' on domain ' +
                          i.toString() +
                          ' for ' +
                          (c === fn() ? 'wildcard' : 'specified') +
                          ' window'
                      )
                    : c
                      ? new Error(
                          'Request listener already exists for ' +
                            r +
                            ' for ' +
                            (c === fn() ? 'wildcard' : 'specified') +
                            ' window'
                        )
                      : i
                        ? new Error(
                            'Request listener already exists for ' +
                              r +
                              ' on domain ' +
                              i.toString()
                          )
                        : new Error('Request listener already exists for ' + r);
                var m,
                  y,
                  g = a.getOrSet(c, function () {
                    return {};
                  }),
                  _ = Q(g, r, function () {
                    return {};
                  });
                return (
                  G(i)
                    ? (m = Q(_, '__domain_regex__', function () {
                        return [];
                      })).push((y = { regex: i, listener: t }))
                    : (_[v] = t),
                  {
                    cancel: function () {
                      delete _[v],
                        y && (m.splice(m.indexOf(y, 1)), m.length || delete _.__domain_regex__),
                        Object.keys(_).length || delete g[r],
                        c && !Object.keys(g).length && a.del(c);
                    },
                  }
                );
              })(
                { name: n, win: e.window, domain: e.domain || '*' },
                {
                  handler: t || e.handler,
                  handleError:
                    e.errorHandler ||
                    function (n) {
                      throw n;
                    },
                }
              );
              return {
                cancel: function () {
                  r.cancel();
                },
              };
            }
            function Jn(n, e, t) {
              'function' == typeof (e = e || {}) && ((t = e), (e = {}));
              var r,
                o = new I();
              return (
                (e.errorHandler = function (n) {
                  r.cancel(), o.reject(n);
                }),
                (r = Hn(n, e, function (n) {
                  if ((r.cancel(), o.resolve(n), t)) return t(n);
                })),
                (o.cancel = r.cancel),
                o
              );
            }
            zn.postrobot_post_message = function (n, e, t) {
              0 === t.indexOf('file:') && (t = '*'), n.postMessage(e, t);
            };
            var Un = function n(e, t, r, o) {
              var i = (o = o || {}).domain || '*',
                a = o.timeout || -1,
                u = o.timeout || 5e3,
                c = o.fireAndForget || !1;
              return Sn.toProxyWindow(e, { send: n })
                .awaitWindow()
                .then(function (e) {
                  return I.try(function () {
                    if (
                      ((function (n, e, t) {
                        if (!n) throw new Error('Expected name');
                        if (t && 'string' != typeof t && !Array.isArray(t) && !G(t))
                          throw new TypeError(
                            'Can not send ' +
                              n +
                              '. Expected domain ' +
                              JSON.stringify(t) +
                              ' to be a string, array, or regex'
                          );
                        if (_(e))
                          throw new Error('Can not send ' + n + '. Target window is closed');
                      })(t, e, i),
                      (function (n, e) {
                        var t = b(e);
                        if (t) return t === n;
                        if (e === n) return !1;
                        if (
                          (function (n) {
                            void 0 === n && (n = window);
                            try {
                              if (n.top) return n.top;
                            } catch (o) {}
                            if (s(n) === n) return n;
                            try {
                              if (v(window, n) && window.top) return window.top;
                            } catch (o) {}
                            try {
                              if (v(n, window) && window.top) return window.top;
                            } catch (o) {}
                            for (
                              var e = 0,
                                t = (function n(e) {
                                  for (var t = [], r = 0, o = m(e); r < o.length; r++) {
                                    var i = o[r];
                                    t.push(i);
                                    for (var a = 0, u = n(i); a < u.length; a++) t.push(u[a]);
                                  }
                                  return t;
                                })(n);
                              e < t.length;
                              e++
                            ) {
                              var r = t[e];
                              try {
                                if (r.top) return r.top;
                              } catch (o) {}
                              if (s(r) === r) return r;
                            }
                          })(e) === e
                        )
                          return !1;
                        for (var r = 0, o = m(n); r < o.length; r++) if (o[r] === e) return !0;
                        return !1;
                      })(window, e))
                    )
                      return (function (n, e, t) {
                        void 0 === e && (e = 5e3), void 0 === t && (t = 'Window');
                        var r = (function (n) {
                          return dn('helloPromises').getOrSet(n, function () {
                            return new I();
                          });
                        })(n);
                        return (
                          -1 !== e &&
                            (r = r.timeout(e, new Error(t + ' did not load after ' + e + 'ms'))),
                          r
                        );
                      })(e, u);
                  })
                    .then(function (t) {
                      return (function (n, e, t, r) {
                        var o = r.send;
                        return I.try(function () {
                          return 'string' == typeof e
                            ? e
                            : I.try(function () {
                                return (
                                  t ||
                                  wn(n, { send: o }).then(function (n) {
                                    return n.domain;
                                  })
                                );
                              }).then(function (n) {
                                if (!W(e, e))
                                  throw new Error('Domain ' + $(e) + ' does not match ' + $(e));
                                return n;
                              });
                        });
                      })(e, i, (void 0 === t ? {} : t).domain, { send: n });
                    })
                    .then(function (o) {
                      var i = o,
                        u =
                          'postrobot_method' === t && r && 'string' == typeof r.name
                            ? r.name + '()'
                            : t,
                        s = new I(),
                        f = t + '_' + q();
                      if (!c) {
                        var d = { name: t, win: e, domain: i, promise: s };
                        !(function (n, e) {
                          un('responseListeners').set(n, e);
                        })(f, d);
                        var l = dn('requestPromises').getOrSet(e, function () {
                          return [];
                        });
                        l.push(s),
                          s.catch(function () {
                            !(function (n) {
                              un('erroredResponseListeners').set(n, !0);
                            })(f),
                              Mn(f);
                          });
                        var w = (function (n) {
                            return dn('knownWindows').get(n, !1);
                          })(e)
                            ? 1e4
                            : 2e3,
                          p = a,
                          v = w,
                          m = p,
                          y = (function (n, r) {
                            var o;
                            return (
                              (function n() {
                                o = setTimeout(function () {
                                  _(e)
                                    ? s.reject(
                                        new Error(
                                          'Window closed for ' +
                                            t +
                                            ' before ' +
                                            (d.ack ? 'response' : 'ack')
                                        )
                                      )
                                    : d.cancelled
                                      ? s.reject(
                                          new Error('Response listener was cancelled for ' + t)
                                        )
                                      : ((v = Math.max(v - 500, 0)),
                                        -1 !== m && (m = Math.max(m - 500, 0)),
                                        d.ack || 0 !== v
                                          ? 0 === m &&
                                            s.reject(
                                              new Error(
                                                'No response for postMessage ' +
                                                  u +
                                                  ' in ' +
                                                  h() +
                                                  ' in ' +
                                                  p +
                                                  'ms'
                                              )
                                            )
                                          : s.reject(
                                              new Error(
                                                'No ack for postMessage ' +
                                                  u +
                                                  ' in ' +
                                                  h() +
                                                  ' in ' +
                                                  w +
                                                  'ms'
                                              )
                                            )),
                                    n();
                                }, 500);
                              })(),
                              {
                                cancel: function () {
                                  clearTimeout(o);
                                },
                              }
                            );
                          })();
                        s.finally(function () {
                          y.cancel(), l.splice(l.indexOf(s, 1));
                        }).catch(Y);
                      }
                      return In(
                        e,
                        i,
                        {
                          id: q(),
                          origin: h(window),
                          type: 'postrobot_message_request',
                          hash: f,
                          name: t,
                          data: r,
                          fireAndForget: c,
                        },
                        { on: Hn, send: n }
                      ).then(
                        function () {
                          return c ? s.resolve() : s;
                        },
                        function (n) {
                          throw new Error(
                            'Send request message failed for ' + u + ' in ' + h() + '\n\n' + Z(n)
                          );
                        }
                      );
                    });
                });
            };
            function Kn(n, e, t) {
              return Dn(n, e, t, { on: Hn, send: Un });
            }
            function Yn(n, e, t) {
              return Cn(n, e, t, { on: Hn, send: Un });
            }
            function Zn(n) {
              return new Sn({ send: Un, win: n });
            }
            function $n(n) {
              return Sn.toProxyWindow(n, { send: Un });
            }
            function Gn() {
              var n, e, t, r;
              on().initialized ||
                ((on().initialized = !0),
                (e = (n = { on: Hn, send: Un }).on),
                (t = n.send),
                ((r = on()).receiveMessage =
                  r.receiveMessage ||
                  function (n) {
                    return Bn(n, { on: e, send: t });
                  }),
                (function (n) {
                  var e = n.on,
                    t = n.send;
                  un().getOrSet('postMessageListener', function () {
                    return (
                      (n = window),
                      (r = function (n) {
                        !(function (n, e) {
                          var t = e.on,
                            r = e.send;
                          I.try(function () {
                            var e = n.source || n.sourceElement,
                              o = n.origin || (n.originalEvent && n.originalEvent.origin),
                              i = n.data;
                            if (('null' === o && (o = 'file://'), e)) {
                              if (!o) throw new Error('Post message did not have origin domain');
                              Bn({ source: e, origin: o, data: i }, { on: t, send: r });
                            }
                          });
                        })(n, { on: e, send: t });
                      }),
                      n.addEventListener('message', r),
                      {
                        cancel: function () {
                          n.removeEventListener('message', r);
                        },
                      }
                    );
                    var n, r;
                  });
                })({ on: Hn, send: Un }),
                (function (n) {
                  var e = n.on,
                    t = n.send;
                  un('builtinListeners').getOrSet('helloListener', function () {
                    var n = e('postrobot_hello', { domain: '*' }, function (n) {
                        return hn(n.source, { domain: n.origin }), { instanceID: ln() };
                      }),
                      r = b();
                    return r && wn(r, { send: t }).catch(function (n) {}), n;
                  });
                })({ on: Hn, send: Un }));
            }
            function Qn() {
              var n;
              !(function () {
                for (var n = un('responseListeners'), e = 0, t = n.keys(); e < t.length; e++) {
                  var r = t[e],
                    o = n.get(r);
                  o && (o.cancelled = !0), n.del(r);
                }
              })(),
                (n = un().get('postMessageListener')) && n.cancel(),
                delete window.__post_robot_10_0_46__;
            }
            var Vn = !0;
            function Xn(n) {
              for (var e = 0, t = dn('requestPromises').get(n, []); e < t.length; e++)
                t[e]
                  .reject(
                    new Error('Window ' + (_(n) ? 'closed' : 'cleaned up') + ' before response')
                  )
                  .catch(Y);
            }
            Gn();
          },
        ]));
      var c = u.exports;
      !(function (n) {
        (n.exports = c), (n.exports.default = n.exports);
      })(a);
      var s = a.exports,
        f = o({ __proto__: null, default: i(s) }, [s]);
    },
  },
]);
