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
    (e._sentryDebugIds[t] = 'd0c5953c-3de2-4ba3-9cb1-cced8e2dbe50'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-d0c5953c-3de2-4ba3-9cb1-cced8e2dbe50'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5042],
  {
    44982: function (e, t, n) {
      n.d(t, {
        ZP: function () {
          return W;
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
      function s(e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function s(e) {
            try {
              a(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function u(e) {
            try {
              a(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function a(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value) instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })
                ).then(s, u);
          }
          a((r = r.apply(e, t || [])).next());
        });
      }
      function u(e, t) {
        var n,
          r,
          o,
          i,
          s = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = { next: u(0), throw: u(1), return: u(2) }),
          'function' == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function u(u) {
          return function (a) {
            return (function (u) {
              if (n) throw TypeError('Generator is already executing.');
              for (; i && ((i = 0), u[0] && (s = 0)), s; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (o =
                        2 & u[0]
                          ? r.return
                          : u[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                      !(o = o.call(r, u[1])).done)
                  )
                    return o;
                  switch (((r = 0), o && (u = [2 & u[0], o.value]), u[0])) {
                    case 0:
                    case 1:
                      o = u;
                      break;
                    case 4:
                      return s.label++, { value: u[1], done: !1 };
                    case 5:
                      s.label++, (r = u[1]), (u = [0]);
                      continue;
                    case 7:
                      (u = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (
                        !(o = (o = s.trys).length > 0 && o[o.length - 1]) &&
                        (6 === u[0] || 2 === u[0])
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === u[0] && (!o || (u[1] > o[0] && u[1] < o[3]))) {
                        s.label = u[1];
                        break;
                      }
                      if (6 === u[0] && s.label < o[1]) {
                        (s.label = o[1]), (o = u);
                        break;
                      }
                      if (o && s.label < o[2]) {
                        (s.label = o[2]), s.ops.push(u);
                        break;
                      }
                      o[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  u = t.call(e, s);
                } catch (e) {
                  (u = [6, e]), (r = 0);
                } finally {
                  n = o = 0;
                }
              if (5 & u[0]) throw u[1];
              return { value: u[0] ? u[1] : void 0, done: !0 };
            })([u, a]);
          };
        }
      }
      function a(e, t) {
        var n = 'function' == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          o,
          i = n.call(e),
          s = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value);
        } catch (e) {
          o = { error: e };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return s;
      }
      function c(e, t, n) {
        if (n || 2 == arguments.length)
          for (var r, o = 0, i = t.length; o < i; o++)
            (!r && o in t) || (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      'function' == typeof SuppressedError && SuppressedError;
      var d,
        l,
        f,
        h,
        p,
        g,
        v,
        y,
        w,
        b,
        m,
        C,
        R,
        S,
        k,
        P,
        E,
        A = {
          sdkKey: '',
          api: 'https://api.spindl.xyz/v1',
          host: 'https://spindl.link',
          maxRetries: 3,
          debugMode: !1,
        },
        I = 'Spindl SDK',
        x = 'object' == typeof window,
        K = function () {
          var e;
          return x
            ? null === (e = null == window ? void 0 : window.location) || void 0 === e
              ? void 0
              : e.href
            : void 0;
        },
        _ = function () {
          var e;
          return x
            ? null === (e = null == window ? void 0 : window.document) || void 0 === e
              ? void 0
              : e.referrer
            : void 0;
        },
        j =
          ((R = '1.6.2'),
          (d = { sdkKey: '' }),
          (h = i(i(i({}, A), d), {
            sdkKey:
              null !== (f = null !== (l = d.sdkKey) && void 0 !== l ? l : d.API_KEY) && void 0 !== f
                ? f
                : A.sdkKey,
          })),
          (p = S =
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
          (P = (function (e, t) {
            function n(e) {
              return s(this, void 0, void 0, function () {
                var n, r;
                return u(this, function (o) {
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
              return s(this, void 0, void 0, function () {
                var n, r;
                return u(this, function (o) {
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
                return s(this, void 0, void 0, function () {
                  return u(this, function (t) {
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
                p.getConfig().debugMode &&
                  console.log.apply(console, c(['['.concat(I, ']')], a(e), !1));
              },
              warn: function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                p.getConfig().debugMode &&
                  console.warn.apply(console, c(['['.concat(I, ']')], a(e), !1));
              },
              error: function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                console.error.apply(console, c(['['.concat(I, ']')], a(e), !1));
              },
            })
          )),
          i(i({}, S), { http: P, logger: k, version: R })),
        O =
          ((E = [
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
                  return s(this, void 0, void 0, function () {
                    var n;
                    return u(this, function (r) {
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
              return s(this, void 0, void 0, function () {
                var e, t, n, r, o, i, s;
                return u(this, function (u) {
                  switch (u.label) {
                    case 0:
                      return [
                        4,
                        Promise.all(
                          E.map(function (e) {
                            return e.getValue();
                          })
                        ),
                      ];
                    case 1:
                      (e = u.sent()), (t = {});
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
                          r && !r.done && (s = n.return) && s.call(n);
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
        V =
          ((v =
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
          (y = 'spindl_request_id'),
          (w = parseInt(null !== (g = v.getItem(y)) && void 0 !== g ? g : '0')),
          {
            sendBeacon: function (e) {
              return s(this, void 0, void 0, function () {
                var t, n, r, o, s;
                return u(this, function (u) {
                  switch (u.label) {
                    case 0:
                      return (t = { 'X-API-Key': j.getConfig().sdkKey }), [4, O.getMetadata()];
                    case 1:
                      var a;
                      return (
                        (n = u.sent()),
                        (a = w + 1),
                        v.setItem(y, a.toString()),
                        (r = w++),
                        (o = i(i({}, e), {
                          metadata: i(i({ version: j.version }, n), { reqId: r }),
                        })),
                        [
                          4,
                          j.http.retrySend({
                            url: ''.concat(j.getConfig().host, '/events'),
                            headers: i(i({}, t), { 'content-type': 'application/json' }),
                            method: 'POST',
                            credentials: 'include',
                            body: JSON.stringify(o),
                          }),
                        ]
                      );
                    case 2:
                      return (s = u.sent()) && j.logger.info('sent '.concat(o.type)), [2, !!s];
                  }
                });
              });
            },
          }),
        L = (b = (function (e) {
          var t = !1;
          function n() {
            if (
              void 0 !== o() &&
              'undefined' != typeof document &&
              'undefined' != typeof location
            ) {
              var t = K(),
                n = _();
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
              var s = function () {
                  return n();
                },
                u = history.pushState,
                a = history.replaceState;
              return (
                u &&
                  a &&
                  ((history.pushState = function (e, t, n) {
                    u.call(this, e, t, n), s();
                  }),
                  (history.replaceState = function (e, t, n) {
                    a.call(this, e, t, n), i && s();
                  }),
                  addEventListener('popstate', s)),
                function () {
                  u &&
                    ((history.pushState = u),
                    (history.replaceState = a),
                    removeEventListener('popstate', s));
                }
              );
            },
          };
        })(V)).pageView,
        M = b.enableAutoPageViews,
        T = (m = (function (e) {
          function t(t) {
            var n = K(),
              r = _();
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
                    s =
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
                  s && n !== s && ((n = s), t(s));
                }),
                function () {
                  r && r.removeListener('accountsChanged', o);
                }
              );
            },
          };
        })(V)).attribute,
        U = m.enableAutoWalletConnects,
        q = (C = (function (e, t) {
          function n(t) {
            return (
              void 0 === t && (t = {}),
              s(this, void 0, void 0, function () {
                var n, r;
                return u(this, function (o) {
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
              return s(this, void 0, void 0, function () {
                var r, o, i;
                return u(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return (
                        (r = new URL(
                          ''.concat(e.getConfig().api, '/referrer-attribution/').concat(n)
                        )),
                        [4, t.getMetadata()]
                      );
                    case 1:
                      return (
                        'string' == typeof (o = s.sent()).referrerCode &&
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
                      return (null == (i = s.sent()) ? void 0 : i.ok)
                        ? [4, i.json()]
                        : (e.logger.error('request failed with http code:', i.status), [2, void 0]);
                    case 3:
                      return [2, s.sent().attribution];
                  }
                });
              });
            },
            getReferrerStats: function (t) {
              return s(this, void 0, void 0, function () {
                var n, r;
                return u(this, function (o) {
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
              return s(this, void 0, void 0, function () {
                var n, r;
                return u(this, function (o) {
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
              return s(this, void 0, void 0, function () {
                var r;
                return u(this, function (o) {
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
              return s(this, void 0, void 0, function () {
                var n;
                return u(this, function (r) {
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
              return s(this, void 0, void 0, function () {
                var t;
                return u(this, function (r) {
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
              return s(this, void 0, void 0, function () {
                var t;
                return u(this, function (r) {
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
        })(j, O)).checkReferrerCode,
        D = C.createReferrerCode,
        N = C.getReferrerAddress,
        X = C.getReferrerAttribution,
        z = C.getReferrerHistory,
        G = C.getReferrerStats,
        W = Object.freeze({
          __proto__: null,
          attribute: T,
          checkReferrerCode: q,
          configure: function (e) {
            j.setConfig(e);
          },
          createReferrerCode: D,
          enableAutoPageViews: M,
          enableAutoWalletConnects: U,
          getReferrerAddress: N,
          getReferrerAttribution: X,
          getReferrerCode: C.getReferrerCode,
          getReferrerHistory: z,
          getReferrerStats: G,
          pageView: L,
          track: function (e, t, n) {
            var r = K();
            return V.sendBeacon({
              type: 'CUSTOM',
              data: { name: e, properties: t, sourceUrl: r },
              identity: n,
            });
          },
          validateReferrerCode: C.validateReferrerCode,
        });
    },
    78830: function (e, t, n) {
      n.d(t, {
        M: function () {
          return y;
        },
      });
      var r = n(50256),
        o = n(58258),
        i = n(31270),
        s = n(69036),
        u = n(43),
        a = n(9572);
      class c extends o.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            (e.height = t.offsetHeight || 0),
              (e.width = t.offsetWidth || 0),
              (e.top = t.offsetTop),
              (e.left = t.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function d(e) {
        let { children: t, isPresent: n } = e,
          i = (0, o.useId)(),
          s = (0, o.useRef)(null),
          u = (0, o.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: d } = (0, o.useContext)(a._);
        return (
          (0, o.useInsertionEffect)(() => {
            let { width: e, height: t, top: r, left: o } = u.current;
            if (n || !s.current || !e || !t) return;
            s.current.dataset.motionPopId = i;
            let a = document.createElement('style');
            return (
              d && (a.nonce = d),
              document.head.appendChild(a),
              a.sheet &&
                a.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      i,
                      '"] {\n            position: absolute !important;\n            width: '
                    )
                    .concat(e, 'px !important;\n            height: ')
                    .concat(t, 'px !important;\n            top: ')
                    .concat(r, 'px !important;\n            left: ')
                    .concat(o, 'px !important;\n          }\n        ')
                ),
              () => {
                document.head.removeChild(a);
              }
            );
          }, [n]),
          (0, r.jsx)(c, {
            isPresent: n,
            childRef: s,
            sizeRef: u,
            children: o.cloneElement(t, { ref: s }),
          })
        );
      }
      let l = (e) => {
        let {
            children: t,
            initial: n,
            isPresent: i,
            onExitComplete: a,
            custom: c,
            presenceAffectsLayout: l,
            mode: h,
          } = e,
          p = (0, s.h)(f),
          g = (0, o.useId)(),
          v = (0, o.useCallback)(
            (e) => {
              for (let t of (p.set(e, !0), p.values())) if (!t) return;
              a && a();
            },
            [p, a]
          ),
          y = (0, o.useMemo)(
            () => ({
              id: g,
              initial: n,
              isPresent: i,
              custom: c,
              onExitComplete: v,
              register: (e) => (p.set(e, !1), () => p.delete(e)),
            }),
            l ? [Math.random(), v] : [i, v]
          );
        return (
          (0, o.useMemo)(() => {
            p.forEach((e, t) => p.set(t, !1));
          }, [i]),
          o.useEffect(() => {
            i || p.size || !a || a();
          }, [i]),
          'popLayout' === h && (t = (0, r.jsx)(d, { isPresent: i, children: t })),
          (0, r.jsx)(u.O.Provider, { value: y, children: t })
        );
      };
      function f() {
        return new Map();
      }
      var h = n(6595);
      let p = (e) => e.key || '';
      function g(e) {
        let t = [];
        return (
          o.Children.forEach(e, (e) => {
            (0, o.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      var v = n(18290);
      let y = (e) => {
        let {
            children: t,
            custom: n,
            initial: u = !0,
            onExitComplete: a,
            presenceAffectsLayout: c = !0,
            mode: d = 'sync',
            propagate: f = !1,
          } = e,
          [y, w] = (0, h.oO)(f),
          b = (0, o.useMemo)(() => g(t), [t]),
          m = f && !y ? [] : b.map(p),
          C = (0, o.useRef)(!0),
          R = (0, o.useRef)(b),
          S = (0, s.h)(() => new Map()),
          [k, P] = (0, o.useState)(b),
          [E, A] = (0, o.useState)(b);
        (0, v.L)(() => {
          (C.current = !1), (R.current = b);
          for (let e = 0; e < E.length; e++) {
            let t = p(E[e]);
            m.includes(t) ? S.delete(t) : !0 !== S.get(t) && S.set(t, !1);
          }
        }, [E, m.length, m.join('-')]);
        let I = [];
        if (b !== k) {
          let e = [...b];
          for (let t = 0; t < E.length; t++) {
            let n = E[t],
              r = p(n);
            m.includes(r) || (e.splice(t, 0, n), I.push(n));
          }
          'wait' === d && I.length && (e = I), A(g(e)), P(b);
          return;
        }
        let { forceRender: x } = (0, o.useContext)(i.p);
        return (0, r.jsx)(r.Fragment, {
          children: E.map((e) => {
            let t = p(e),
              o = (!f || !!y) && (b === E || m.includes(t));
            return (0, r.jsx)(
              l,
              {
                isPresent: o,
                initial: (!C.current || !!u) && void 0,
                custom: o ? void 0 : n,
                presenceAffectsLayout: c,
                mode: d,
                onExitComplete: o
                  ? void 0
                  : () => {
                      if (!S.has(t)) return;
                      S.set(t, !0);
                      let e = !0;
                      S.forEach((t) => {
                        t || (e = !1);
                      }),
                        e && (null == x || x(), A(R.current), f && (null == w || w()), a && a());
                    },
                children: e,
              },
              t
            );
          }),
        });
      };
    },
  },
]);
