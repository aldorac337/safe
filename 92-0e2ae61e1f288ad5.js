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
    (e._sentryDebugIds[t] = '45065bf1-39d4-43cf-9afe-75b7fdcbe213'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-45065bf1-39d4-43cf-9afe-75b7fdcbe213'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [92],
  {
    25228: function (e, t, r) {
      r.d(t, {
        R: function () {
          return o;
        },
        YW: function () {
          return d;
        },
        Z0: function () {
          return f;
        },
        ZK: function () {
          return s;
        },
        fF: function () {
          return i;
        },
        vU: function () {
          return u;
        },
      });
      var n = r(58258),
        l = {
          303: 'Multiple adapter contexts detected. This might happen in monorepos.',
          404: 'nuqs requires an adapter to work with your framework.',
          409: 'Multiple versions of the library are loaded. This may lead to unexpected behavior. Currently using `%s`, but `%s` (via the %s adapter) was about to load on top.',
          414: 'Max safe URL length exceeded. Some browsers may not be able to accept this URL. Consider limiting the amount of state stored in the URL.',
          429: 'URL update rate-limited by the browser. Consider increasing `throttleMs` for key(s) `%s`. %O',
          500: "Empty search params cache. Search params can't be accessed in Layouts.",
          501: 'Search params cache already populated. Have you called `parse` twice?',
        };
      function u(e) {
        return `[nuqs] ${l[e]}
  See https://err.47ng.com/NUQS-${e}`;
      }
      function o(e) {
        if (0 === e.size) return '';
        let t = [];
        for (let [r, n] of e.entries()) {
          let e = r
            .replace(/#/g, '%23')
            .replace(/&/g, '%26')
            .replace(/\+/g, '%2B')
            .replace(/=/g, '%3D')
            .replace(/\?/g, '%3F');
          t.push(
            `${e}=${n
              .replace(/%/g, '%25')
              .replace(/\+/g, '%2B')
              .replace(/ /g, '+')
              .replace(/#/g, '%23')
              .replace(/&/g, '%26')
              .replace(/"/g, '%22')
              .replace(/'/g, '%27')
              .replace(/`/g, '%60')
              .replace(/</g, '%3C')
              .replace(/>/g, '%3E')
              .replace(/[\x00-\x1F]/g, (e) => encodeURIComponent(e))}`
          );
        }
        return '?' + t.join('&');
      }
      var a = (function () {
        try {
          if ('undefined' == typeof localStorage) return !1;
          let e = 'nuqs-localStorage-test';
          localStorage.setItem(e, e);
          let t = localStorage.getItem(e) === e;
          if ((localStorage.removeItem(e), !t)) return !1;
        } catch (e) {
          return console.error('[nuqs]: debug mode is disabled (localStorage unavailable).', e), !1;
        }
        return (localStorage.getItem('debug') ?? '').includes('nuqs');
      })();
      function i(e, ...t) {
        if (!a) return;
        let r = (function (e, ...t) {
          return e.replace(/%[sfdO]/g, (e) => {
            let r = t.shift();
            return '%O' === e && r ? JSON.stringify(r).replace(/"([^"]+)":/g, '$1:') : String(r);
          });
        })(e, ...t);
        performance.mark(r);
        try {
          console.log(e, ...t);
        } catch (e) {
          console.log(r);
        }
      }
      function s(e, ...t) {
        a && console.warn(e, ...t);
      }
      var c = (0, n.createContext)({
        useAdapter() {
          throw Error(u(404));
        },
      });
      function f(e) {
        return ({ children: t, ...r }) =>
          (0, n.createElement)(c.Provider, { ...r, value: { useAdapter: e } }, t);
      }
      function d() {
        let e = (0, n.useContext)(c);
        if (!('useAdapter' in e)) throw Error(u(404));
        return e.useAdapter();
      }
      (c.displayName = 'NuqsAdapterContext'),
        a &&
          'undefined' != typeof window &&
          (window.__NuqsAdapterContext &&
            window.__NuqsAdapterContext !== c &&
            console.error(u(303)),
          (window.__NuqsAdapterContext = c));
    },
    90092: function (e, t, r) {
      r.d(t, {
        jx: function () {
          return b;
        },
        v1: function () {
          return O;
        },
        XI: function () {
          return q;
        },
      });
      var n,
        l = r(25228);
      function u(e, t, r) {
        try {
          return e(t);
        } catch (e) {
          return (
            (0, l.ZK)(
              '[nuqs] Error while parsing value `%s`: %O' + (r ? ' (for key `%s`)' : ''),
              t,
              e,
              r
            ),
            null
          );
        }
      }
      var o = (function () {
          if ('undefined' == typeof window || !window.GestureEvent) return 50;
          try {
            let e = navigator.userAgent?.match(/version\/([\d\.]+) safari/i);
            return parseFloat(e[1]) >= 17 ? 120 : 320;
          } catch {
            return 320;
          }
        })(),
        a = new Map(),
        i = { history: 'replace', scroll: !1, shallow: !0, throttleMs: o },
        s = new Set(),
        c = 0,
        f = null;
      function d(e, t, r, n) {
        let u = null === t ? null : r(t);
        return (
          (0, l.fF)('[nuqs queue] Enqueueing %s=%s %O', e, u, n),
          a.set(e, u),
          'push' === n.history && (i.history = 'push'),
          n.scroll && (i.scroll = !0),
          !1 === n.shallow && (i.shallow = !1),
          n.startTransition && s.add(n.startTransition),
          (i.throttleMs = Math.max(
            n.throttleMs ?? o,
            Number.isFinite(i.throttleMs) ? i.throttleMs : 0
          )),
          u
        );
      }
      function p() {
        return new URLSearchParams(location.search);
      }
      function h({ getSearchParamsSnapshot: e = p, updateUrl: t, rateLimitFactor: r = 1 }) {
        return (
          null === f &&
            (f = new Promise((n, u) => {
              if (!Number.isFinite(i.throttleMs)) {
                (0, l.fF)('[nuqs queue] Skipping flush due to throttleMs=Infinity'),
                  n(e()),
                  setTimeout(() => {
                    f = null;
                  }, 0);
                return;
              }
              function d() {
                c = performance.now();
                let [r, d] = (function ({ updateUrl: e, getSearchParamsSnapshot: t }) {
                  let r = t();
                  if (0 === a.size) return [r, null];
                  let n = Array.from(a.entries()),
                    u = { ...i },
                    c = Array.from(s);
                  for (let [e, t] of (a.clear(),
                  s.clear(),
                  (i.history = 'replace'),
                  (i.scroll = !1),
                  (i.shallow = !0),
                  (i.throttleMs = o),
                  (0, l.fF)('[nuqs queue] Flushing queue %O with options %O', n, u),
                  n))
                    null === t ? r.delete(e) : r.set(e, t);
                  try {
                    return (
                      (function (e, t) {
                        let r = (n) => {
                          if (n === e.length) return t();
                          let l = e[n];
                          if (!l) throw Error('Invalid transition function');
                          l(() => r(n + 1));
                        };
                        r(0);
                      })(c, () => {
                        e(r, { history: u.history, scroll: u.scroll, shallow: u.shallow });
                      }),
                      [r, null]
                    );
                  } catch (e) {
                    return console.error((0, l.vU)(429), n.map(([e]) => e).join(), e), [r, e];
                  }
                })({ updateUrl: t, getSearchParamsSnapshot: e });
                null === d ? n(r) : u(r), (f = null);
              }
              setTimeout(function () {
                let e = performance.now() - c,
                  t = i.throttleMs,
                  n = r * Math.max(0, Math.min(t, t - e));
                (0, l.fF)('[nuqs queue] Scheduling flush in %f ms. Throttled at %f ms', n, t),
                  0 === n ? d() : setTimeout(d, n);
              }, 0);
            })),
          f
        );
      }
      var v = r(58258);
      function g(e) {
        function t(t) {
          if (void 0 === t) return null;
          let r = '';
          if (Array.isArray(t)) {
            if (void 0 === t[0]) return null;
            r = t[0];
          }
          return 'string' == typeof t && (r = t), u(e.parse, r);
        }
        return {
          eq: (e, t) => e === t,
          ...e,
          parseServerSide: t,
          withDefault(e) {
            return {
              ...this,
              defaultValue: e,
              parseServerSide(r) {
                var n;
                return null !== (n = t(r)) && void 0 !== n ? n : e;
              },
            };
          },
          withOptions(e) {
            return { ...this, ...e };
          },
        };
      }
      g({ parse: (e) => e, serialize: (e) => ''.concat(e) });
      var m = g({
        parse: (e) => {
          let t = parseInt(e);
          return Number.isNaN(t) ? null : t;
        },
        serialize: (e) => Math.round(e).toFixed(),
      });
      function y(e, t) {
        return e.valueOf() === t.valueOf();
      }
      function b(e) {
        return g({ parse: (t) => (e.includes(t) ? t : null), serialize: (e) => e.toString() });
      }
      g({
        parse: (e) => {
          let t = m.parse(e);
          return null === t ? null : t - 1;
        },
        serialize: (e) => m.serialize(e + 1),
      }),
        g({
          parse: (e) => {
            let t = parseInt(e, 16);
            return Number.isNaN(t) ? null : t;
          },
          serialize: (e) => {
            let t = Math.round(e).toString(16);
            return t.padStart(t.length + (t.length % 2), '0');
          },
        }),
        g({
          parse: (e) => {
            let t = parseFloat(e);
            return Number.isNaN(t) ? null : t;
          },
          serialize: (e) => e.toString(),
        }),
        g({ parse: (e) => 'true' === e, serialize: (e) => (e ? 'true' : 'false') }),
        g({
          parse: (e) => {
            let t = parseInt(e);
            return Number.isNaN(t) ? null : new Date(t);
          },
          serialize: (e) => e.valueOf().toString(),
          eq: y,
        }),
        g({
          parse: (e) => {
            let t = new Date(e);
            return Number.isNaN(t.valueOf()) ? null : t;
          },
          serialize: (e) => e.toISOString(),
          eq: y,
        }),
        g({
          parse: (e) => {
            let t = new Date(e.slice(0, 10));
            return Number.isNaN(t.valueOf()) ? null : t;
          },
          serialize: (e) => e.toISOString().slice(0, 10),
          eq: y,
        });
      var w = {
        all: (n = n || new Map()),
        on: function (e, t) {
          var r = n.get(e);
          r ? r.push(t) : n.set(e, [t]);
        },
        off: function (e, t) {
          var r = n.get(e);
          r && (t ? r.splice(r.indexOf(t) >>> 0, 1) : n.set(e, []));
        },
        emit: function (e, t) {
          var r = n.get(e);
          r &&
            r.slice().map(function (e) {
              e(t);
            }),
            (r = n.get('*')) &&
              r.slice().map(function (r) {
                r(e, t);
              });
        },
      };
      function O(e) {
        var t, r, n;
        let {
            history: i = 'replace',
            shallow: s = !0,
            scroll: c = !1,
            throttleMs: f = o,
            parse: p = (e) => e,
            serialize: g = String,
            eq: m = (e, t) => e === t,
            defaultValue: y,
            clearOnDefault: b = !0,
            startTransition: O,
          } = arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : {
                history: 'replace',
                scroll: !1,
                shallow: !0,
                throttleMs: o,
                parse: (e) => e,
                serialize: String,
                eq: (e, t) => e === t,
                clearOnDefault: !0,
                defaultValue: void 0,
              },
          S = (0, l.YW)(),
          q = S.searchParams,
          j = (0, v.useRef)(
            null !== (t = null == q ? void 0 : q.get(e)) && void 0 !== t ? t : null
          ),
          [N, M] = (0, v.useState)(() => {
            var t;
            let r = a.get(e),
              n =
                void 0 === r
                  ? null !== (t = null == q ? void 0 : q.get(e)) && void 0 !== t
                    ? t
                    : null
                  : r;
            return null === n ? null : u(p, n, e);
          }),
          k = (0, v.useRef)(N);
        (0, l.fF)(
          '[nuqs `%s`] render - state: %O, iSP: %s',
          e,
          N,
          null !== (r = null == q ? void 0 : q.get(e)) && void 0 !== r ? r : null
        ),
          (0, v.useEffect)(() => {
            var t;
            let r = null !== (t = null == q ? void 0 : q.get(e)) && void 0 !== t ? t : null;
            if (r === j.current) return;
            let n = null === r ? null : u(p, r, e);
            (0, l.fF)('[nuqs `%s`] syncFromUseSearchParams %O', e, n),
              (k.current = n),
              (j.current = r),
              M(n);
          }, [null == q ? void 0 : q.get(e), e]),
          (0, v.useEffect)(() => {
            function t(t) {
              let { state: r, query: n } = t;
              (0, l.fF)('[nuqs `%s`] updateInternalState %O', e, r),
                (k.current = r),
                (j.current = n),
                M(r);
            }
            return (
              (0, l.fF)('[nuqs `%s`] subscribing to sync', e),
              w.on(e, t),
              () => {
                (0, l.fF)('[nuqs `%s`] unsubscribing from sync', e), w.off(e, t);
              }
            );
          }, [e]);
        let F = (0, v.useCallback)(
          function (t) {
            var r, n, l, u, o, a, p, v;
            let q = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              j =
                'function' == typeof t
                  ? t(
                      null !== (n = null !== (r = k.current) && void 0 !== r ? r : y) &&
                        void 0 !== n
                        ? n
                        : null
                    )
                  : t;
            (null !== (l = q.clearOnDefault) && void 0 !== l ? l : b) &&
              null !== j &&
              void 0 !== y &&
              m(j, y) &&
              (j = null);
            let N = d(e, j, g, {
              history: null !== (u = q.history) && void 0 !== u ? u : i,
              shallow: null !== (o = q.shallow) && void 0 !== o ? o : s,
              scroll: null !== (a = q.scroll) && void 0 !== a ? a : c,
              throttleMs: null !== (p = q.throttleMs) && void 0 !== p ? p : f,
              startTransition: null !== (v = q.startTransition) && void 0 !== v ? v : O,
            });
            return w.emit(e, { state: j, query: N }), h(S);
          },
          [e, i, s, c, f, O, S.updateUrl, S.getSearchParamsSnapshot, S.rateLimitFactor]
        );
        return [null !== (n = null != N ? N : y) && void 0 !== n ? n : null, F];
      }
      var S = {};
      function q(e) {
        let {
            history: t = 'replace',
            scroll: r = !1,
            shallow: n = !0,
            throttleMs: u = o,
            clearOnDefault: a = !0,
            startTransition: i,
            urlKeys: s = S,
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          c = Object.keys(e).join(','),
          f = (0, v.useMemo)(
            () =>
              Object.fromEntries(
                Object.keys(e).map((e) => {
                  var t;
                  return [e, null !== (t = s[e]) && void 0 !== t ? t : e];
                })
              ),
            [c, JSON.stringify(s)]
          ),
          p = (0, l.YW)(),
          g = p.searchParams,
          m = (0, v.useRef)({}),
          y = (0, v.useMemo)(
            () =>
              Object.fromEntries(
                Object.keys(e).map((t) => {
                  var r;
                  return [t, null !== (r = e[t].defaultValue) && void 0 !== r ? r : null];
                })
              ),
            [
              Object.values(e)
                .map((e) => {
                  let { defaultValue: t } = e;
                  return t;
                })
                .join(','),
            ]
          ),
          [b, O] = (0, v.useState)(() => j(e, s, null != g ? g : new URLSearchParams()).state),
          q = (0, v.useRef)(b);
        if (
          ((0, l.fF)('[nuq+ `%s`] render - state: %O, iSP: %s', c, b, g),
          Object.keys(m.current).join('&') !== Object.values(f).join('&'))
        ) {
          let { state: t, hasChanged: r } = j(e, s, g, m.current, q.current);
          r && ((q.current = t), O(t)),
            (m.current = Object.fromEntries(
              Object.values(f).map((e) => {
                var t;
                return [e, null !== (t = null == g ? void 0 : g.get(e)) && void 0 !== t ? t : null];
              })
            ));
        }
        (0, v.useEffect)(() => {
          let { state: t, hasChanged: r } = j(e, s, g, m.current, q.current);
          r && ((q.current = t), O(t));
        }, [
          Object.values(f)
            .map((e) => ''.concat(e, '=').concat(null == g ? void 0 : g.get(e)))
            .join('&'),
        ]),
          (0, v.useEffect)(() => {
            let t = Object.keys(e).reduce(
              (t, r) => (
                (t[r] = (t) => {
                  var n, u;
                  let { state: o, query: a } = t,
                    { defaultValue: i } = e[r],
                    s = f[r];
                  (q.current = {
                    ...q.current,
                    [r]: null !== (n = null != o ? o : i) && void 0 !== n ? n : null,
                  }),
                    (m.current[s] = a),
                    (0, l.fF)(
                      '[nuq+ `%s`] Cross-hook key sync %s: %O (default: %O). Resolved: %O',
                      c,
                      s,
                      o,
                      i,
                      q.current
                    ),
                    (u = q.current),
                    (0, l.fF)('[nuq+ `%s`] updateInternalState %O', c, u),
                    (q.current = u),
                    O(u);
                }),
                t
              ),
              {}
            );
            for (let r of Object.keys(e)) {
              let e = f[r];
              (0, l.fF)('[nuq+ `%s`] Subscribing to sync for `%s`', c, e), w.on(e, t[r]);
            }
            return () => {
              for (let r of Object.keys(e)) {
                let e = f[r];
                (0, l.fF)('[nuq+ `%s`] Unsubscribing to sync for `%s`', c, e), w.off(e, t[r]);
              }
            };
          }, [c, f]);
        let M = (0, v.useCallback)(
          function (o) {
            var s, v, g, m, b, O, S, j, M, k, F, E, I, x, C;
            let z = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              T = Object.fromEntries(Object.keys(e).map((e) => [e, null])),
              U =
                'function' == typeof o
                  ? null !== (s = o(N(q.current, y))) && void 0 !== s
                    ? s
                    : T
                  : null != o
                    ? o
                    : T;
            for (let [o, s] of ((0, l.fF)('[nuq+ `%s`] setState: %O', c, U), Object.entries(U))) {
              let l = e[o],
                c = f[o];
              if (!l) continue;
              (null !==
                (g = null !== (v = z.clearOnDefault) && void 0 !== v ? v : l.clearOnDefault) &&
              void 0 !== g
                ? g
                : a) &&
                null !== s &&
                void 0 !== l.defaultValue &&
                (null !== (m = l.eq) && void 0 !== m ? m : (e, t) => e === t)(s, l.defaultValue) &&
                (s = null);
              let p = d(c, s, null !== (b = l.serialize) && void 0 !== b ? b : String, {
                history:
                  null !== (S = null !== (O = z.history) && void 0 !== O ? O : l.history) &&
                  void 0 !== S
                    ? S
                    : t,
                shallow:
                  null !== (M = null !== (j = z.shallow) && void 0 !== j ? j : l.shallow) &&
                  void 0 !== M
                    ? M
                    : n,
                scroll:
                  null !== (F = null !== (k = z.scroll) && void 0 !== k ? k : l.scroll) &&
                  void 0 !== F
                    ? F
                    : r,
                throttleMs:
                  null !== (I = null !== (E = z.throttleMs) && void 0 !== E ? E : l.throttleMs) &&
                  void 0 !== I
                    ? I
                    : u,
                startTransition:
                  null !==
                    (C =
                      null !== (x = z.startTransition) && void 0 !== x ? x : l.startTransition) &&
                  void 0 !== C
                    ? C
                    : i,
              });
              w.emit(c, { state: s, query: p });
            }
            return h(p);
          },
          [c, t, n, r, u, i, f, p.updateUrl, p.getSearchParamsSnapshot, p.rateLimitFactor, y]
        );
        return [(0, v.useMemo)(() => N(b, y), [b, y]), M];
      }
      function j(e, t, r, n, l) {
        let o = !1,
          i = Object.keys(e).reduce((i, s) => {
            var c, f, d, p;
            let h = null !== (c = null == t ? void 0 : t[s]) && void 0 !== c ? c : s,
              { parse: v } = e[s],
              g = a.get(h),
              m =
                void 0 === g
                  ? null !== (f = null == r ? void 0 : r.get(h)) && void 0 !== f
                    ? f
                    : null
                  : g;
            if (n && l && (null !== (d = n[h]) && void 0 !== d ? d : null) === m)
              return (i[s] = null !== (p = l[s]) && void 0 !== p ? p : null), i;
            o = !0;
            let y = null === m ? null : u(v, m, s);
            return (i[s] = null != y ? y : null), n && (n[h] = m), i;
          }, {});
        if (!o) {
          let t = Object.keys(e),
            r = Object.keys(null != l ? l : {});
          o = t.length !== r.length || t.some((e) => !r.includes(e));
        }
        return { state: i, hasChanged: o };
      }
      function N(e, t) {
        return Object.fromEntries(
          Object.keys(e).map((r) => {
            var n, l;
            return [
              r,
              null !== (l = null !== (n = e[r]) && void 0 !== n ? n : t[r]) && void 0 !== l
                ? l
                : null,
            ];
          })
        );
      }
    },
  },
]);
