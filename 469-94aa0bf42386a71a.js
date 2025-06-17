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
    (e._sentryDebugIds[t] = 'c279f367-f156-44d6-b940-0397ff35d4ff'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-c279f367-f156-44d6-b940-0397ff35d4ff'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [469],
  {
    44982: function (e, t, n) {
      n.d(t, {
        ZP: function () {
          return X;
        },
      });
      var r = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      function o() {
        return 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : void 0;
      }
      var i = function () {
        return (i =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
      function u(e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function u(e) {
            try {
              s(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function a(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value) instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })
                ).then(u, a);
          }
          s((r = r.apply(e, t || [])).next());
        });
      }
      function a(e, t) {
        var n,
          r,
          o,
          i,
          u = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = { next: a(0), throw: a(1), return: a(2) }),
          'function' == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function a(a) {
          return function (s) {
            return (function (a) {
              if (n) throw TypeError('Generator is already executing.');
              for (; i && ((i = 0), a[0] && (u = 0)), u; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (o =
                        2 & a[0]
                          ? r.return
                          : a[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                      !(o = o.call(r, a[1])).done)
                  )
                    return o;
                  switch (((r = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                    case 0:
                    case 1:
                      o = a;
                      break;
                    case 4:
                      return u.label++, { value: a[1], done: !1 };
                    case 5:
                      u.label++, (r = a[1]), (a = [0]);
                      continue;
                    case 7:
                      (a = u.ops.pop()), u.trys.pop();
                      continue;
                    default:
                      if (
                        !(o = (o = u.trys).length > 0 && o[o.length - 1]) &&
                        (6 === a[0] || 2 === a[0])
                      ) {
                        u = 0;
                        continue;
                      }
                      if (3 === a[0] && (!o || (a[1] > o[0] && a[1] < o[3]))) {
                        u.label = a[1];
                        break;
                      }
                      if (6 === a[0] && u.label < o[1]) {
                        (u.label = o[1]), (o = a);
                        break;
                      }
                      if (o && u.label < o[2]) {
                        (u.label = o[2]), u.ops.push(a);
                        break;
                      }
                      o[2] && u.ops.pop(), u.trys.pop();
                      continue;
                  }
                  a = t.call(e, u);
                } catch (e) {
                  (a = [6, e]), (r = 0);
                } finally {
                  n = o = 0;
                }
              if (5 & a[0]) throw a[1];
              return { value: a[0] ? a[1] : void 0, done: !0 };
            })([a, s]);
          };
        }
      }
      function s(e, t) {
        var n = 'function' == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          o,
          i = n.call(e),
          u = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) u.push(r.value);
        } catch (e) {
          o = { error: e };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return u;
      }
      function c(e, t, n) {
        if (n || 2 == arguments.length)
          for (var r, o = 0, i = t.length; o < i; o++)
            (!r && o in t) || (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      'function' == typeof SuppressedError && SuppressedError;
      var l,
        d,
        f,
        h,
        g,
        v,
        y,
        p,
        b,
        w,
        m,
        M,
        C,
        S,
        k,
        R,
        A,
        T = {
          sdkKey: '',
          api: 'https://api.spindl.xyz/v1',
          host: 'https://spindl.link',
          maxRetries: 3,
          debugMode: !1,
        },
        Q = 'Spindl SDK',
        I = 'object' == typeof window,
        P = function () {
          var e;
          return I
            ? null === (e = null == window ? void 0 : window.location) || void 0 === e
              ? void 0
              : e.href
            : void 0;
        },
        K = function () {
          var e;
          return I
            ? null === (e = null == window ? void 0 : window.document) || void 0 === e
              ? void 0
              : e.referrer
            : void 0;
        },
        _ =
          ((C = '1.6.2'),
          (l = { sdkKey: '' }),
          (h = i(i(i({}, T), l), {
            sdkKey:
              null !== (f = null !== (d = l.sdkKey) && void 0 !== d ? d : l.API_KEY) && void 0 !== f
                ? f
                : T.sdkKey,
          })),
          (g = S =
            {
              setConfig: function (e) {
                var t,
                  n,
                  r =
                    null !== (n = null !== (t = e.API_KEY) && void 0 !== t ? t : e.sdkKey) &&
                    void 0 !== n
                      ? n
                      : h.sdkKey;
                h = i(i(i({}, h), e), { sdkKey: r });
              },
              getConfig: function () {
                return h;
              },
            }),
          (R = (function (e, t) {
            function n(e) {
              return u(this, void 0, void 0, function () {
                var n, r;
                return a(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return o.trys.push([0, 2, , 3]), [4, fetch(e.url, e)];
                    case 1:
                      return (n = o.sent()).ok
                        ? [2, n]
                        : (t.error('request failed with http code:', n.status), [2, void 0]);
                    case 2:
                      return 'Failed to fetch' === (r = o.sent()).message
                        ? [2, { stopRetry: !0 }]
                        : (t.error('request failed', r), [2, void 0]);
                    case 3:
                      return [2];
                  }
                });
              });
            }
            function r(t) {
              return u(this, void 0, void 0, function () {
                var n, r;
                return a(this, function (o) {
                  switch (o.label) {
                    case 0:
                      (n = 0), (o.label = 1);
                    case 1:
                      return n < e.getConfig().maxRetries ? [4, t()] : [3, 4];
                    case 2:
                      if (!0 === (null == (r = o.sent()) ? void 0 : r.stopRetry)) return [2];
                      if (null == r ? void 0 : r.ok) return [2, r];
                      o.label = 3;
                    case 3:
                      return n++, [3, 1];
                    case 4:
                      return [2, void 0];
                  }
                });
              });
            }
            return {
              send: n,
              retrySend: function (e) {
                return u(this, void 0, void 0, function () {
                  return a(this, function (t) {
                    return [
                      2,
                      r(function () {
                        return n(e);
                      }),
                    ];
                  });
                });
              },
              retryRequest: r,
            };
          })(
            S,
            (k = {
              info: function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                g.getConfig().debugMode &&
                  console.log.apply(console, c(['['.concat(Q, ']')], s(e), !1));
              },
              warn: function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                g.getConfig().debugMode &&
                  console.warn.apply(console, c(['['.concat(Q, ']')], s(e), !1));
              },
              error: function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                console.error.apply(console, c(['['.concat(Q, ']')], s(e), !1));
              },
            })
          )),
          i(i({}, S), { http: R, logger: k, version: C })),
        E =
          ((A = [
            function () {
              if (void 0 === o() || 'undefined' == typeof sessionStorage)
                return {
                  getValue: function () {
                    return {};
                  },
                };
              var e = 'spindl_session_id',
                t = sessionStorage.getItem(e) || '';
              return (
                t ||
                  ((t =
                    'undefined' == typeof window ||
                    'undefined' == typeof crypto ||
                    void 0 === crypto.getRandomValues
                      ? (function () {
                          for (var e = '', t = 0; t < 32; t++)
                            e += r.charAt(Math.floor(Math.random() * r.length));
                          return e;
                        })()
                      : Array.from(crypto.getRandomValues(new Uint8Array(32)), function (e) {
                          return r[e % r.length];
                        }).join('')),
                  sessionStorage.setItem(e, t)),
                {
                  getValue: function () {
                    return { sessionId: t };
                  },
                }
              );
            },
            function () {
              if (void 0 === o() || 'undefined' == typeof localStorage)
                return {
                  getValue: function () {
                    return {};
                  },
                };
              var e = 'spindl_referrer_code',
                t = localStorage.getItem(e) || '';
              return {
                getValue: function () {
                  return u(this, void 0, void 0, function () {
                    var n;
                    return a(this, function (r) {
                      return (
                        (n = (function () {
                          if ('undefined' != typeof window) {
                            var e = new URL(null == window ? void 0 : window.location.href),
                              t = e.searchParams,
                              n = (function (e) {
                                if ('' !== e) {
                                  var t = e.indexOf('?');
                                  if (!(t < 0 || t >= e.length - 1)) {
                                    var n = e.substring(t + 1),
                                      r = n.indexOf('#');
                                    return (
                                      r >= 0 && (n = n.substring(0, r)), new URLSearchParams(n)
                                    );
                                  }
                                }
                              })(e.hash);
                            return (
                              n &&
                                n.forEach(function (e, n) {
                                  t.has(n) || t.append(n, e);
                                }),
                              t
                            );
                          }
                        })().get('ref')) &&
                          n !== t &&
                          ((t = n), localStorage.setItem(e, t)),
                        t ? [2, { referrerCode: t }] : [2, {}]
                      );
                    });
                  });
                },
              };
            },
            function () {
              return {
                getValue: function () {
                  return { ts: new Date().getTime() };
                },
              };
            },
            function () {
              return {
                getValue: function () {
                  return { restricted: !0 };
                },
              };
            },
          ].map(function (e) {
            return e();
          })),
          {
            getMetadata: function () {
              return u(this, void 0, void 0, function () {
                var e, t, n, r, o, i, u;
                return a(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return [
                        4,
                        Promise.all(
                          A.map(function (e) {
                            return e.getValue();
                          })
                        ),
                      ];
                    case 1:
                      (e = a.sent()), (t = {});
                      try {
                        for (
                          r = (n = (function (e) {
                            var t = 'function' == typeof Symbol && Symbol.iterator,
                              n = t && e[t],
                              r = 0;
                            if (n) return n.call(e);
                            if (e && 'number' == typeof e.length)
                              return {
                                next: function () {
                                  return (
                                    e && r >= e.length && (e = void 0),
                                    { value: e && e[r++], done: !e }
                                  );
                                },
                              };
                            throw TypeError(
                              t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
                            );
                          })(e)).next();
                          !r.done;
                          r = n.next()
                        )
                          (o = r.value), Object.assign(t, o);
                      } catch (e) {
                        i = { error: e };
                      } finally {
                        try {
                          r && !r.done && (u = n.return) && u.call(n);
                        } finally {
                          if (i) throw i.error;
                        }
                      }
                      return [2, t];
                  }
                });
              });
            },
          }),
        D =
          ((y =
            void 0 === o() || 'undefined' == typeof sessionStorage
              ? {
                  length: 0,
                  clear: function () {},
                  getItem: function (e) {
                    return null;
                  },
                  key: function (e) {
                    return null;
                  },
                  removeItem: function (e) {},
                  setItem: function (e, t) {},
                }
              : sessionStorage),
          (p = 'spindl_request_id'),
          (b = parseInt(null !== (v = y.getItem(p)) && void 0 !== v ? v : '0')),
          {
            sendBeacon: function (e) {
              return u(this, void 0, void 0, function () {
                var t, n, r, o, u;
                return a(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (t = { 'X-API-Key': _.getConfig().sdkKey }), [4, E.getMetadata()];
                    case 1:
                      var s;
                      return (
                        (n = a.sent()),
                        (s = b + 1),
                        y.setItem(p, s.toString()),
                        (r = b++),
                        (o = i(i({}, e), {
                          metadata: i(i({ version: _.version }, n), { reqId: r }),
                        })),
                        [
                          4,
                          _.http.retrySend({
                            url: ''.concat(_.getConfig().host, '/events'),
                            headers: i(i({}, t), { 'content-type': 'application/json' }),
                            method: 'POST',
                            credentials: 'include',
                            body: JSON.stringify(o),
                          }),
                        ]
                      );
                    case 2:
                      return (u = a.sent()) && _.logger.info('sent '.concat(o.type)), [2, !!u];
                  }
                });
              });
            },
          }),
        F = (w = (function (e) {
          var t = !1;
          function n() {
            if (
              void 0 !== o() &&
              'undefined' != typeof document &&
              'undefined' != typeof location
            ) {
              var t = P(),
                n = K();
              return e.sendBeacon({ type: 'PAGE_VIEW', data: { sourceUrl: t, referrer: n } });
            }
          }
          return {
            pageView: n,
            enableAutoPageViews: function (e) {
              var r = (e || {}).trackReplaceState,
                i = void 0 !== r && r;
              if (void 0 === o() || 'undefined' == typeof history || !0 === t)
                return function () {};
              (t = !0), n();
              var u = function () {
                  return n();
                },
                a = history.pushState,
                s = history.replaceState;
              return (
                a &&
                  s &&
                  ((history.pushState = function (e, t, n) {
                    a.call(this, e, t, n), u();
                  }),
                  (history.replaceState = function (e, t, n) {
                    s.call(this, e, t, n), i && u();
                  }),
                  addEventListener('popstate', u)),
                function () {
                  a &&
                    ((history.pushState = a),
                    (history.replaceState = s),
                    removeEventListener('popstate', u));
                }
              );
            },
          };
        })(D)).pageView,
        U = w.enableAutoPageViews,
        N = (m = (function (e) {
          function t(t) {
            var n = P(),
              r = K();
            return e.sendBeacon({
              type: 'WALLET_CONNECTED',
              data: { address: t, sourceUrl: n, referrer: r },
            });
          }
          return {
            attribute: t,
            enableAutoWalletConnects: function () {
              var e,
                n,
                r =
                  (null == window ? void 0 : window.ethereum) ||
                  (null === (e = window.web3) || void 0 === e ? void 0 : e.currentProvider),
                o = function () {
                  for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                  var o = e[0];
                  o.length > 0 && o[0] !== n ? (t(o[0]), (n = o[0])) : (n = void 0);
                };
              return (
                null == r || r.on('accountsChanged', o),
                addEventListener('load', function (e) {
                  var r,
                    o,
                    i,
                    u =
                      (null === (r = null == window ? void 0 : window.ethereum) || void 0 === r
                        ? void 0
                        : r.selectedAddress) ||
                      (null ===
                        (i =
                          null === (o = window.web3) || void 0 === o
                            ? void 0
                            : o.currentProvider) || void 0 === i
                        ? void 0
                        : i.selectedAddress);
                  u && n !== u && ((n = u), t(u));
                }),
                function () {
                  r && r.removeListener('accountsChanged', o);
                }
              );
            },
          };
        })(D)).attribute,
        Y = m.enableAutoWalletConnects,
        j = (M = (function (e, t) {
          function n(t) {
            return (
              void 0 === t && (t = {}),
              u(this, void 0, void 0, function () {
                var n, r;
                return a(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return (
                        (n = new URL(''.concat(e.getConfig().api, '/referrer-codes'))),
                        t.address && n.searchParams.set('address', t.address),
                        t.code && n.searchParams.set('code', t.code),
                        [
                          4,
                          e.http.send({
                            url: n.toString(),
                            headers: { 'X-API-Key': e.getConfig().sdkKey },
                            method: 'GET',
                          }),
                        ]
                      );
                    case 1:
                      return (r = o.sent()).ok
                        ? [2, r.json()]
                        : (e.logger.error('request failed with http code:', r.status), [2, []]);
                  }
                });
              })
            );
          }
          return {
            getReferrerAttribution: function (n) {
              return u(this, void 0, void 0, function () {
                var r, o, i;
                return a(this, function (u) {
                  switch (u.label) {
                    case 0:
                      return (
                        (r = new URL(
                          ''.concat(e.getConfig().api, '/referrer-attribution/').concat(n)
                        )),
                        [4, t.getMetadata()]
                      );
                    case 1:
                      return (
                        'string' == typeof (o = u.sent()).referrerCode &&
                          r.searchParams.set('ref', o.referrerCode),
                        [
                          4,
                          e.http.send({
                            url: r.toString(),
                            headers: { 'X-API-Key': e.getConfig().sdkKey },
                            method: 'GET',
                          }),
                        ]
                      );
                    case 2:
                      return (null == (i = u.sent()) ? void 0 : i.ok)
                        ? [4, i.json()]
                        : (e.logger.error('request failed with http code:', i.status), [2, void 0]);
                    case 3:
                      return [2, u.sent().attribution];
                  }
                });
              });
            },
            getReferrerStats: function (t) {
              return u(this, void 0, void 0, function () {
                var n, r;
                return a(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return (
                        (n = new URL(''.concat(e.getConfig().api, '/referrals/stats/').concat(t))),
                        [
                          4,
                          e.http.send({
                            url: n.toString(),
                            headers: { 'X-API-Key': e.getConfig().sdkKey },
                            method: 'GET',
                          }),
                        ]
                      );
                    case 1:
                      return (null == (r = o.sent()) ? void 0 : r.ok)
                        ? [4, r.json()]
                        : (e.logger.error('request failed with http code:', r.status), [2, void 0]);
                    case 2:
                      return [2, o.sent()];
                  }
                });
              });
            },
            getReferrerHistory: function (t) {
              return u(this, void 0, void 0, function () {
                var n, r;
                return a(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return (
                        (n = new URL(
                          ''.concat(e.getConfig().api, '/referrals/history/').concat(t)
                        )),
                        [
                          4,
                          e.http.send({
                            url: n.toString(),
                            headers: { 'X-API-Key': e.getConfig().sdkKey },
                            method: 'GET',
                          }),
                        ]
                      );
                    case 1:
                      return (null == (r = o.sent()) ? void 0 : r.ok)
                        ? [4, r.json()]
                        : (e.logger.error('request failed with http code:', r.status), [2, void 0]);
                    case 2:
                      return [2, o.sent().items];
                  }
                });
              });
            },
            createReferrerCode: function (t, n) {
              return u(this, void 0, void 0, function () {
                var r;
                return a(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return [
                        4,
                        e.http.send({
                          url: ''.concat(e.getConfig().api, '/referrer-codes'),
                          headers: {
                            'X-API-Key': e.getConfig().sdkKey,
                            'content-type': 'application/json',
                          },
                          method: 'POST',
                          body: JSON.stringify({ address: t, code: n }),
                        }),
                      ];
                    case 1:
                      return (r = o.sent()).ok
                        ? [4, r.json()]
                        : (e.logger.error('request failed with http code:', r.status), [2, void 0]);
                    case 2:
                      return [2, o.sent().code];
                  }
                });
              });
            },
            validateReferrerCode: function (e) {
              return 'string' == typeof e && /^([a-z0-9_]){4,20}$/.test(e);
            },
            checkReferrerCode: function (t) {
              return u(this, void 0, void 0, function () {
                var n;
                return a(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [
                        4,
                        e.http.send({
                          url: ''.concat(e.getConfig().api, '/referrer-codes/check-availability'),
                          headers: {
                            'X-API-Key': e.getConfig().sdkKey,
                            'content-type': 'application/json',
                          },
                          method: 'POST',
                          body: JSON.stringify({ code: t }),
                        }),
                      ];
                    case 1:
                      return (n = r.sent()).ok
                        ? [4, n.json()]
                        : (e.logger.error('request failed with http code:', n.status), [2, !1]);
                    case 2:
                      return [2, r.sent().available];
                  }
                });
              });
            },
            getReferrerCode: function (e) {
              return u(this, void 0, void 0, function () {
                var t;
                return a(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return e ? [4, n({ address: e })] : [2];
                    case 1:
                      return (null == (t = r.sent()) ? void 0 : t.length) ? [2, t[0].code] : [2];
                  }
                });
              });
            },
            getReferrerAddress: function (e) {
              return u(this, void 0, void 0, function () {
                var t;
                return a(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return e ? [4, n({ code: e })] : [2];
                    case 1:
                      return (null == (t = r.sent()) ? void 0 : t.length) ? [2, t[0].address] : [2];
                  }
                });
              });
            },
          };
        })(_, E)).checkReferrerCode,
        O = M.createReferrerCode,
        x = M.getReferrerAddress,
        L = M.getReferrerAttribution,
        V = M.getReferrerHistory,
        q = M.getReferrerStats,
        X = Object.freeze({
          __proto__: null,
          attribute: N,
          checkReferrerCode: j,
          configure: function (e) {
            _.setConfig(e);
          },
          createReferrerCode: O,
          enableAutoPageViews: U,
          enableAutoWalletConnects: Y,
          getReferrerAddress: x,
          getReferrerAttribution: L,
          getReferrerCode: M.getReferrerCode,
          getReferrerHistory: V,
          getReferrerStats: q,
          pageView: F,
          track: function (e, t, n) {
            var r = P();
            return D.sendBeacon({
              type: 'CUSTOM',
              data: { name: e, properties: t, sourceUrl: r },
              identity: n,
            });
          },
          validateReferrerCode: M.validateReferrerCode,
        });
    },
    17646: function (e, t, n) {
      n.d(t, {
        u: function () {
          return r;
        },
      });
      function r(e) {
        return (t) => {
          let n = (e ? Math[e] : Math.trunc)(t);
          return 0 === n ? 0 : n;
        };
      }
    },
    62033: function (e, t, n) {
      n.d(t, {
        T: function () {
          return o;
        },
      });
      var r = n(13592);
      function o(e, t) {
        let n = (0, r.Q)(e),
          o = (0, r.Q)(t);
        return 12 * (n.getFullYear() - o.getFullYear()) + (n.getMonth() - o.getMonth());
      }
    },
    84207: function (e, t, n) {
      n.d(t, {
        b: function () {
          return o;
        },
      });
      var r = n(13592);
      function o(e, t) {
        let n = (0, r.Q)(e),
          o = (0, r.Q)(t);
        return n.getFullYear() - o.getFullYear();
      }
    },
    14246: function (e, t, n) {
      n.d(t, {
        A: function () {
          return u;
        },
      });
      var r = n(17646),
        o = n(30518),
        i = n(26229);
      function u(e, t, n) {
        let u = (0, i._)(e, t) / o.vh;
        return (0, r.u)(null == n ? void 0 : n.roundingMethod)(u);
      }
    },
    26229: function (e, t, n) {
      n.d(t, {
        _: function () {
          return o;
        },
      });
      var r = n(13592);
      function o(e, t) {
        return +(0, r.Q)(e) - +(0, r.Q)(t);
      }
    },
    83947: function (e, t, n) {
      n.d(t, {
        X: function () {
          return u;
        },
      });
      var r = n(17646),
        o = n(30518),
        i = n(26229);
      function u(e, t, n) {
        let u = (0, i._)(e, t) / o.yJ;
        return (0, r.u)(null == n ? void 0 : n.roundingMethod)(u);
      }
    },
    77900: function (e, t, n) {
      n.d(t, {
        c: function () {
          return i;
        },
      });
      var r = n(17646),
        o = n(26229);
      function i(e, t, n) {
        let i = (0, o._)(e, t) / 1e3;
        return (0, r.u)(null == n ? void 0 : n.roundingMethod)(i);
      }
    },
    3808: function (e, t, n) {
      n.d(t, {
        s: function () {
          return s;
        },
      });
      var r = n(15864),
        o = n(13592),
        i = n(29382);
      let u = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        a = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      function s(e) {
        let t = (0, o.Q)(e);
        if (!(0, r.J)(t)) throw RangeError('Invalid time value');
        let n = u[t.getUTCDay()],
          s = (0, i.r)(t.getUTCDate(), 2),
          c = a[t.getUTCMonth()],
          l = t.getUTCFullYear(),
          d = (0, i.r)(t.getUTCHours(), 2),
          f = (0, i.r)(t.getUTCMinutes(), 2),
          h = (0, i.r)(t.getUTCSeconds(), 2);
        return ''
          .concat(n, ', ')
          .concat(s, ' ')
          .concat(c, ' ')
          .concat(l, ' ')
          .concat(d, ':')
          .concat(f, ':')
          .concat(h, ' GMT');
      }
    },
    99079: function (e, t, n) {
      n.d(t, {
        K: function () {
          return o;
        },
      });
      var r = n(13592);
      function o(e) {
        return (0, r.Q)(1e3 * e);
      }
    },
    86384: function (e, t, n) {
      n.d(t, {
        y: function () {
          return g;
        },
      });
      var r = n(13592),
        o = n(68536);
      function i(e, t) {
        let {
            years: n = 0,
            months: i = 0,
            weeks: u = 0,
            days: a = 0,
            hours: s = 0,
            minutes: c = 0,
            seconds: l = 0,
          } = t,
          d = (0, r.Q)(e),
          f =
            i || n
              ? (function (e, t) {
                  let n = (0, r.Q)(e);
                  if (isNaN(t)) return (0, o.L)(e, NaN);
                  if (!t) return n;
                  let i = n.getDate(),
                    u = (0, o.L)(e, n.getTime());
                  return (u.setMonth(n.getMonth() + t + 1, 0), i >= u.getDate())
                    ? u
                    : (n.setFullYear(u.getFullYear(), u.getMonth(), i), n);
                })(d, i + 12 * n)
              : d,
          h =
            a || u
              ? (function (e, t) {
                  let n = (0, r.Q)(e);
                  return isNaN(t) ? (0, o.L)(e, NaN) : (t && n.setDate(n.getDate() + t), n);
                })(f, a + 7 * u)
              : f;
        return (0, o.L)(e, h.getTime() + 1e3 * (l + 60 * (c + 60 * s)));
      }
      var u = n(30634);
      function a(e, t) {
        let n =
          e.getFullYear() - t.getFullYear() ||
          e.getMonth() - t.getMonth() ||
          e.getDate() - t.getDate() ||
          e.getHours() - t.getHours() ||
          e.getMinutes() - t.getMinutes() ||
          e.getSeconds() - t.getSeconds() ||
          e.getMilliseconds() - t.getMilliseconds();
        return n < 0 ? -1 : n > 0 ? 1 : n;
      }
      var s = n(14246),
        c = n(83947);
      function l(e, t) {
        let n = (0, r.Q)(e),
          o = (0, r.Q)(t),
          i = n.getTime() - o.getTime();
        return i < 0 ? -1 : i > 0 ? 1 : i;
      }
      var d = n(62033),
        f = n(77900),
        h = n(84207);
      function g(e) {
        let t = (0, r.Q)(e.start),
          n = (0, r.Q)(e.end),
          o = {},
          g = (function (e, t) {
            let n = (0, r.Q)(e),
              o = (0, r.Q)(t),
              i = l(n, o),
              u = Math.abs((0, h.b)(n, o));
            n.setFullYear(1584), o.setFullYear(1584);
            let a = l(n, o) === -i,
              s = i * (u - +a);
            return 0 === s ? 0 : s;
          })(n, t);
        g && (o.years = g);
        let v = i(t, { years: o.years }),
          y = (function (e, t) {
            let n;
            let o = (0, r.Q)(e),
              i = (0, r.Q)(t),
              u = l(o, i),
              a = Math.abs((0, d.T)(o, i));
            if (a < 1) n = 0;
            else {
              1 === o.getMonth() && o.getDate() > 27 && o.setDate(30),
                o.setMonth(o.getMonth() - u * a);
              let t = l(o, i) === -u;
              (function (e) {
                let t = (0, r.Q)(e);
                return (
                  +(function (e) {
                    let t = (0, r.Q)(e);
                    return t.setHours(23, 59, 59, 999), t;
                  })(t) ==
                  +(function (e) {
                    let t = (0, r.Q)(e),
                      n = t.getMonth();
                    return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
                  })(t)
                );
              })((0, r.Q)(e)) &&
                1 === a &&
                1 === l(e, i) &&
                (t = !1),
                (n = u * (a - Number(t)));
            }
            return 0 === n ? 0 : n;
          })(n, v);
        y && (o.months = y);
        let p = i(v, { months: o.months }),
          b = (function (e, t) {
            let n = (0, r.Q)(e),
              o = (0, r.Q)(t),
              i = a(n, o),
              s = Math.abs((0, u.w)(n, o));
            n.setDate(n.getDate() - i * s);
            let c = Number(a(n, o) === -i),
              l = i * (s - c);
            return 0 === l ? 0 : l;
          })(n, p);
        b && (o.days = b);
        let w = i(p, { days: o.days }),
          m = (0, s.A)(n, w);
        m && (o.hours = m);
        let M = i(w, { hours: o.hours }),
          C = (0, c.X)(n, M);
        C && (o.minutes = C);
        let S = i(M, { minutes: o.minutes }),
          k = (0, f.c)(n, S);
        return k && (o.seconds = k), o;
      }
    },
    16102: function (e, t, n) {
      n.d(t, {
        U: function () {
          return y;
        },
      });
      var r = n(30518),
        o = n(30634),
        i = n(62033),
        u = n(13592);
      function a(e) {
        return Math.trunc((0, u.Q)(e).getMonth() / 3) + 1;
      }
      function s(e, t) {
        let n = (0, u.Q)(e),
          r = (0, u.Q)(t);
        return 4 * (n.getFullYear() - r.getFullYear()) + (a(n) - a(r));
      }
      var c = n(971),
        l = n(47211);
      function d(e, t, n) {
        let o = (0, c.z)(e, n),
          i = (0, c.z)(t, n);
        return Math.round((+o - (0, l.D)(o) - (+i - (0, l.D)(i))) / r.jE);
      }
      var f = n(84207),
        h = n(14246),
        g = n(83947),
        v = n(77900);
      function y(e, t, n) {
        let a,
          c = 0,
          l = (0, u.Q)(e),
          y = (0, u.Q)(t);
        if (null == n ? void 0 : n.unit)
          'second' === (a = null == n ? void 0 : n.unit)
            ? (c = (0, v.c)(l, y))
            : 'minute' === a
              ? (c = (0, g.X)(l, y))
              : 'hour' === a
                ? (c = (0, h.A)(l, y))
                : 'day' === a
                  ? (c = (0, o.w)(l, y))
                  : 'week' === a
                    ? (c = d(l, y))
                    : 'month' === a
                      ? (c = (0, i.T)(l, y))
                      : 'quarter' === a
                        ? (c = s(l, y))
                        : 'year' === a && (c = (0, f.b)(l, y));
        else {
          let e = (0, v.c)(l, y);
          Math.abs(e) < r.xx
            ? ((c = (0, v.c)(l, y)), (a = 'second'))
            : Math.abs(e) < r.R3
              ? ((c = (0, g.X)(l, y)), (a = 'minute'))
              : Math.abs(e) < r.gM && 1 > Math.abs((0, o.w)(l, y))
                ? ((c = (0, h.A)(l, y)), (a = 'hour'))
                : Math.abs(e) < r.vr && (c = (0, o.w)(l, y)) && 7 > Math.abs(c)
                  ? (a = 'day')
                  : Math.abs(e) < r.nZ
                    ? ((c = d(l, y)), (a = 'week'))
                    : Math.abs(e) < r.Y2
                      ? ((c = (0, i.T)(l, y)), (a = 'month'))
                      : Math.abs(e) < r.rz && 4 > s(l, y)
                        ? ((c = s(l, y)), (a = 'quarter'))
                        : ((c = (0, f.b)(l, y)), (a = 'year'));
        }
        return new Intl.RelativeTimeFormat(null == n ? void 0 : n.locale, {
          localeMatcher: null == n ? void 0 : n.localeMatcher,
          numeric: (null == n ? void 0 : n.numeric) || 'auto',
          style: null == n ? void 0 : n.style,
        }).format(c, a);
      }
    },
  },
]);
