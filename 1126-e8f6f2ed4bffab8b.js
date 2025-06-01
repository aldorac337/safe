'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1126],
  {
    73198: function (t, e, r) {
      r.d(e, {
        j: function () {
          return i;
        },
      });
      var n = r(94699),
        s = r(36076),
        i = new (class extends n.l {
          #t;
          #e;
          #r;
          constructor() {
            super(),
              (this.#r = (t) => {
                if (!s.sk && window.addEventListener) {
                  let e = () => t();
                  return (
                    window.addEventListener('visibilitychange', e, !1),
                    () => {
                      window.removeEventListener('visibilitychange', e);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#e || this.setEventListener(this.#r);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#e?.(), (this.#e = void 0));
          }
          setEventListener(t) {
            (this.#r = t),
              this.#e?.(),
              (this.#e = t((t) => {
                'boolean' == typeof t ? this.setFocused(t) : this.onFocus();
              }));
          }
          setFocused(t) {
            this.#t !== t && ((this.#t = t), this.onFocus());
          }
          onFocus() {
            let t = this.isFocused();
            this.listeners.forEach((e) => {
              e(t);
            });
          }
          isFocused() {
            return 'boolean' == typeof this.#t
              ? this.#t
              : globalThis.document?.visibilityState !== 'hidden';
          }
        })();
    },
    29360: function (t, e, r) {
      r.d(e, {
        V: function () {
          return n;
        },
      });
      var n = (function () {
        let t = [],
          e = 0,
          r = (t) => {
            t();
          },
          n = (t) => {
            t();
          },
          s = (t) => setTimeout(t, 0),
          i = (n) => {
            e
              ? t.push(n)
              : s(() => {
                  r(n);
                });
          },
          u = () => {
            let e = t;
            (t = []),
              e.length &&
                s(() => {
                  n(() => {
                    e.forEach((t) => {
                      r(t);
                    });
                  });
                });
          };
        return {
          batch: (t) => {
            let r;
            e++;
            try {
              r = t();
            } finally {
              --e || u();
            }
            return r;
          },
          batchCalls:
            (t) =>
            (...e) => {
              i(() => {
                t(...e);
              });
            },
          schedule: i,
          setNotifyFunction: (t) => {
            r = t;
          },
          setBatchNotifyFunction: (t) => {
            n = t;
          },
          setScheduler: (t) => {
            s = t;
          },
        };
      })();
    },
    11996: function (t, e, r) {
      r.d(e, {
        N: function () {
          return i;
        },
      });
      var n = r(94699),
        s = r(36076),
        i = new (class extends n.l {
          #n = !0;
          #e;
          #r;
          constructor() {
            super(),
              (this.#r = (t) => {
                if (!s.sk && window.addEventListener) {
                  let e = () => t(!0),
                    r = () => t(!1);
                  return (
                    window.addEventListener('online', e, !1),
                    window.addEventListener('offline', r, !1),
                    () => {
                      window.removeEventListener('online', e),
                        window.removeEventListener('offline', r);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#e || this.setEventListener(this.#r);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#e?.(), (this.#e = void 0));
          }
          setEventListener(t) {
            (this.#r = t), this.#e?.(), (this.#e = t(this.setOnline.bind(this)));
          }
          setOnline(t) {
            this.#n !== t &&
              ((this.#n = t),
              this.listeners.forEach((e) => {
                e(t);
              }));
          }
          isOnline() {
            return this.#n;
          }
        })();
    },
    53458: function (t, e, r) {
      r.d(e, {
        z: function () {
          return c;
        },
      });
      var n = r(36076),
        s = r(29360),
        i = r(73198),
        u = r(94699),
        o = r(30558),
        c = class extends u.l {
          constructor(t, e) {
            super(),
              (this.options = e),
              (this.#s = t),
              (this.#i = null),
              this.bindMethods(),
              this.setOptions(e);
          }
          #s;
          #u = void 0;
          #o = void 0;
          #c = void 0;
          #h;
          #a;
          #i;
          #l;
          #f;
          #d;
          #p;
          #y;
          #v;
          #b = new Set();
          bindMethods() {
            this.refetch = this.refetch.bind(this);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              (this.#u.addObserver(this),
              h(this.#u, this.options) ? this.#R() : this.updateResult(),
              this.#m());
          }
          onUnsubscribe() {
            this.hasListeners() || this.destroy();
          }
          shouldFetchOnReconnect() {
            return a(this.#u, this.options, this.options.refetchOnReconnect);
          }
          shouldFetchOnWindowFocus() {
            return a(this.#u, this.options, this.options.refetchOnWindowFocus);
          }
          destroy() {
            (this.listeners = new Set()), this.#O(), this.#w(), this.#u.removeObserver(this);
          }
          setOptions(t, e) {
            let r = this.options,
              s = this.#u;
            if (
              ((this.options = this.#s.defaultQueryOptions(t)),
              void 0 !== this.options.enabled && 'boolean' != typeof this.options.enabled)
            )
              throw Error('Expected enabled to be a boolean');
            this.#g(),
              this.#u.setOptions(this.options),
              r._defaulted &&
                !(0, n.VS)(this.options, r) &&
                this.#s
                  .getQueryCache()
                  .notify({ type: 'observerOptionsUpdated', query: this.#u, observer: this });
            let i = this.hasListeners();
            i && l(this.#u, s, this.options, r) && this.#R(),
              this.updateResult(e),
              i &&
                (this.#u !== s ||
                  this.options.enabled !== r.enabled ||
                  this.options.staleTime !== r.staleTime) &&
                this.#E();
            let u = this.#S();
            i &&
              (this.#u !== s || this.options.enabled !== r.enabled || u !== this.#v) &&
              this.#Q(u);
          }
          getOptimisticResult(t) {
            let e = this.#s.getQueryCache().build(this.#s, t),
              r = this.createResult(e, t);
            return (
              (0, n.VS)(this.getCurrentResult(), r) ||
                ((this.#c = r), (this.#a = this.options), (this.#h = this.#u.state)),
              r
            );
          }
          getCurrentResult() {
            return this.#c;
          }
          trackResult(t, e) {
            let r = {};
            return (
              Object.keys(t).forEach((n) => {
                Object.defineProperty(r, n, {
                  configurable: !1,
                  enumerable: !0,
                  get: () => (this.trackProp(n), e?.(n), t[n]),
                });
              }),
              r
            );
          }
          trackProp(t) {
            this.#b.add(t);
          }
          getCurrentQuery() {
            return this.#u;
          }
          refetch({ ...t } = {}) {
            return this.fetch({ ...t });
          }
          fetchOptimistic(t) {
            let e = this.#s.defaultQueryOptions(t),
              r = this.#s.getQueryCache().build(this.#s, e);
            return (r.isFetchingOptimistic = !0), r.fetch().then(() => this.createResult(r, e));
          }
          fetch(t) {
            return this.#R({ ...t, cancelRefetch: t.cancelRefetch ?? !0 }).then(
              () => (this.updateResult(), this.#c)
            );
          }
          #R(t) {
            this.#g();
            let e = this.#u.fetch(this.options, t);
            return t?.throwOnError || (e = e.catch(n.ZT)), e;
          }
          #E() {
            if ((this.#O(), n.sk || this.#c.isStale || !(0, n.PN)(this.options.staleTime))) return;
            let t = (0, n.Kp)(this.#c.dataUpdatedAt, this.options.staleTime);
            this.#p = setTimeout(() => {
              this.#c.isStale || this.updateResult();
            }, t + 1);
          }
          #S() {
            return (
              ('function' == typeof this.options.refetchInterval
                ? this.options.refetchInterval(this.#u)
                : this.options.refetchInterval) ?? !1
            );
          }
          #Q(t) {
            this.#w(),
              (this.#v = t),
              !n.sk &&
                !1 !== this.options.enabled &&
                (0, n.PN)(this.#v) &&
                0 !== this.#v &&
                (this.#y = setInterval(() => {
                  (this.options.refetchIntervalInBackground || i.j.isFocused()) && this.#R();
                }, this.#v));
          }
          #m() {
            this.#E(), this.#Q(this.#S());
          }
          #O() {
            this.#p && (clearTimeout(this.#p), (this.#p = void 0));
          }
          #w() {
            this.#y && (clearInterval(this.#y), (this.#y = void 0));
          }
          createResult(t, e) {
            let r;
            let s = this.#u,
              i = this.options,
              u = this.#c,
              c = this.#h,
              a = this.#a,
              d = t !== s ? t.state : this.#o,
              { state: p } = t,
              { error: y, errorUpdatedAt: v, fetchStatus: b, status: R } = p,
              m = !1;
            if (e._optimisticResults) {
              let r = this.hasListeners(),
                n = !r && h(t, e),
                u = r && l(t, s, e, i);
              (n || u) &&
                ((b = (0, o.Kw)(t.options.networkMode) ? 'fetching' : 'paused'),
                void 0 === p.data && (R = 'pending')),
                'isRestoring' === e._optimisticResults && (b = 'idle');
            }
            if (e.select && void 0 !== p.data) {
              if (u && p.data === c?.data && e.select === this.#l) r = this.#f;
              else
                try {
                  (this.#l = e.select),
                    (r = e.select(p.data)),
                    (r = (0, n.oE)(u?.data, r, e)),
                    (this.#f = r),
                    (this.#i = null);
                } catch (t) {
                  this.#i = t;
                }
            } else r = p.data;
            if (void 0 !== e.placeholderData && void 0 === r && 'pending' === R) {
              let t;
              if (u?.isPlaceholderData && e.placeholderData === a?.placeholderData) t = u.data;
              else if (
                ((t =
                  'function' == typeof e.placeholderData
                    ? e.placeholderData(this.#d?.state.data, this.#d)
                    : e.placeholderData),
                e.select && void 0 !== t)
              )
                try {
                  (t = e.select(t)), (this.#i = null);
                } catch (t) {
                  this.#i = t;
                }
              void 0 !== t && ((R = 'success'), (r = (0, n.oE)(u?.data, t, e)), (m = !0));
            }
            this.#i && ((y = this.#i), (r = this.#f), (v = Date.now()), (R = 'error'));
            let O = 'fetching' === b,
              w = 'pending' === R,
              g = 'error' === R,
              E = w && O,
              S = void 0 !== p.data;
            return {
              status: R,
              fetchStatus: b,
              isPending: w,
              isSuccess: 'success' === R,
              isError: g,
              isInitialLoading: E,
              isLoading: E,
              data: r,
              dataUpdatedAt: p.dataUpdatedAt,
              error: y,
              errorUpdatedAt: v,
              failureCount: p.fetchFailureCount,
              failureReason: p.fetchFailureReason,
              errorUpdateCount: p.errorUpdateCount,
              isFetched: p.dataUpdateCount > 0 || p.errorUpdateCount > 0,
              isFetchedAfterMount:
                p.dataUpdateCount > d.dataUpdateCount || p.errorUpdateCount > d.errorUpdateCount,
              isFetching: O,
              isRefetching: O && !w,
              isLoadingError: g && !S,
              isPaused: 'paused' === b,
              isPlaceholderData: m,
              isRefetchError: g && S,
              isStale: f(t, e),
              refetch: this.refetch,
            };
          }
          updateResult(t) {
            let e = this.#c,
              r = this.createResult(this.#u, this.options);
            if (
              ((this.#h = this.#u.state),
              (this.#a = this.options),
              void 0 !== this.#h.data && (this.#d = this.#u),
              (0, n.VS)(r, e))
            )
              return;
            this.#c = r;
            let s = {};
            t?.listeners !== !1 &&
              (() => {
                if (!e) return !0;
                let { notifyOnChangeProps: t } = this.options,
                  r = 'function' == typeof t ? t() : t;
                if ('all' === r || (!r && !this.#b.size)) return !0;
                let n = new Set(r ?? this.#b);
                return (
                  this.options.throwOnError && n.add('error'),
                  Object.keys(this.#c).some((t) => this.#c[t] !== e[t] && n.has(t))
                );
              })() &&
              (s.listeners = !0),
              this.#C({ ...s, ...t });
          }
          #g() {
            let t = this.#s.getQueryCache().build(this.#s, this.options);
            if (t === this.#u) return;
            let e = this.#u;
            (this.#u = t),
              (this.#o = t.state),
              this.hasListeners() && (e?.removeObserver(this), t.addObserver(this));
          }
          onQueryUpdate() {
            this.updateResult(), this.hasListeners() && this.#m();
          }
          #C(t) {
            s.V.batch(() => {
              t.listeners &&
                this.listeners.forEach((t) => {
                  t(this.#c);
                }),
                this.#s.getQueryCache().notify({ query: this.#u, type: 'observerResultsUpdated' });
            });
          }
        };
      function h(t, e) {
        return (
          (!1 !== e.enabled &&
            void 0 === t.state.data &&
            !('error' === t.state.status && !1 === e.retryOnMount)) ||
          (void 0 !== t.state.data && a(t, e, e.refetchOnMount))
        );
      }
      function a(t, e, r) {
        if (!1 !== e.enabled) {
          let n = 'function' == typeof r ? r(t) : r;
          return 'always' === n || (!1 !== n && f(t, e));
        }
        return !1;
      }
      function l(t, e, r, n) {
        return (
          (t !== e || !1 === n.enabled) && (!r.suspense || 'error' !== t.state.status) && f(t, r)
        );
      }
      function f(t, e) {
        return !1 !== e.enabled && t.isStaleByTime(e.staleTime);
      }
    },
    30558: function (t, e, r) {
      r.d(e, {
        DV: function () {
          return h;
        },
        Kw: function () {
          return o;
        },
        Mz: function () {
          return a;
        },
      });
      var n = r(73198),
        s = r(11996),
        i = r(36076);
      function u(t) {
        return Math.min(1e3 * 2 ** t, 3e4);
      }
      function o(t) {
        return (t ?? 'online') !== 'online' || s.N.isOnline();
      }
      var c = class {
        constructor(t) {
          (this.revert = t?.revert), (this.silent = t?.silent);
        }
      };
      function h(t) {
        return t instanceof c;
      }
      function a(t) {
        let e,
          r,
          h,
          a = !1,
          l = 0,
          f = !1,
          d = new Promise((t, e) => {
            (r = t), (h = e);
          }),
          p = () => !n.j.isFocused() || ('always' !== t.networkMode && !s.N.isOnline()),
          y = (n) => {
            f || ((f = !0), t.onSuccess?.(n), e?.(), r(n));
          },
          v = (r) => {
            f || ((f = !0), t.onError?.(r), e?.(), h(r));
          },
          b = () =>
            new Promise((r) => {
              (e = (t) => {
                let e = f || !p();
                return e && r(t), e;
              }),
                t.onPause?.();
            }).then(() => {
              (e = void 0), f || t.onContinue?.();
            }),
          R = () => {
            let e;
            if (!f) {
              try {
                e = t.fn();
              } catch (t) {
                e = Promise.reject(t);
              }
              Promise.resolve(e)
                .then(y)
                .catch((e) => {
                  if (f) return;
                  let r = t.retry ?? (i.sk ? 0 : 3),
                    n = t.retryDelay ?? u,
                    s = 'function' == typeof n ? n(l, e) : n,
                    o =
                      !0 === r ||
                      ('number' == typeof r && l < r) ||
                      ('function' == typeof r && r(l, e));
                  if (a || !o) {
                    v(e);
                    return;
                  }
                  l++,
                    t.onFail?.(l, e),
                    (0, i._v)(s)
                      .then(() => {
                        if (p()) return b();
                      })
                      .then(() => {
                        a ? v(e) : R();
                      });
                });
            }
          };
        return (
          o(t.networkMode) ? R() : b().then(R),
          {
            promise: d,
            cancel: (e) => {
              f || (v(new c(e)), t.abort?.());
            },
            continue: () => (e?.() ? d : Promise.resolve()),
            cancelRetry: () => {
              a = !0;
            },
            continueRetry: () => {
              a = !1;
            },
          }
        );
      }
    },
    94699: function (t, e, r) {
      r.d(e, {
        l: function () {
          return n;
        },
      });
      var n = class {
        constructor() {
          (this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
        }
        subscribe(t) {
          return (
            this.listeners.add(t),
            this.onSubscribe(),
            () => {
              this.listeners.delete(t), this.onUnsubscribe();
            }
          );
        }
        hasListeners() {
          return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
      };
    },
    36076: function (t, e, r) {
      r.d(e, {
        CN: function () {
          return w;
        },
        Ht: function () {
          return O;
        },
        Kp: function () {
          return o;
        },
        PN: function () {
          return u;
        },
        Rm: function () {
          return a;
        },
        SE: function () {
          return i;
        },
        VS: function () {
          return d;
        },
        VX: function () {
          return m;
        },
        X7: function () {
          return h;
        },
        Ym: function () {
          return l;
        },
        ZT: function () {
          return s;
        },
        _v: function () {
          return b;
        },
        _x: function () {
          return c;
        },
        oE: function () {
          return R;
        },
        sk: function () {
          return n;
        },
        to: function () {
          return f;
        },
      });
      var n = 'undefined' == typeof window || 'Deno' in globalThis;
      function s() {}
      function i(t, e) {
        return 'function' == typeof t ? t(e) : t;
      }
      function u(t) {
        return 'number' == typeof t && t >= 0 && t !== 1 / 0;
      }
      function o(t, e) {
        return Math.max(t + (e || 0) - Date.now(), 0);
      }
      function c(t, e) {
        let { type: r = 'all', exact: n, fetchStatus: s, predicate: i, queryKey: u, stale: o } = t;
        if (u) {
          if (n) {
            if (e.queryHash !== a(u, e.options)) return !1;
          } else if (!f(e.queryKey, u)) return !1;
        }
        if ('all' !== r) {
          let t = e.isActive();
          if (('active' === r && !t) || ('inactive' === r && t)) return !1;
        }
        return (
          ('boolean' != typeof o || e.isStale() === o) &&
          (!s || s === e.state.fetchStatus) &&
          (!i || !!i(e))
        );
      }
      function h(t, e) {
        let { exact: r, status: n, predicate: s, mutationKey: i } = t;
        if (i) {
          if (!e.options.mutationKey) return !1;
          if (r) {
            if (l(e.options.mutationKey) !== l(i)) return !1;
          } else if (!f(e.options.mutationKey, i)) return !1;
        }
        return (!n || e.state.status === n) && (!s || !!s(e));
      }
      function a(t, e) {
        return (e?.queryKeyHashFn || l)(t);
      }
      function l(t) {
        return JSON.stringify(t, (t, e) =>
          y(e)
            ? Object.keys(e)
                .sort()
                .reduce((t, r) => ((t[r] = e[r]), t), {})
            : e
        );
      }
      function f(t, e) {
        return (
          t === e ||
          (typeof t == typeof e &&
            !!t &&
            !!e &&
            'object' == typeof t &&
            'object' == typeof e &&
            !Object.keys(e).some((r) => !f(t[r], e[r])))
        );
      }
      function d(t, e) {
        if (!e || Object.keys(t).length !== Object.keys(e).length) return !1;
        for (let r in t) if (t[r] !== e[r]) return !1;
        return !0;
      }
      function p(t) {
        return Array.isArray(t) && t.length === Object.keys(t).length;
      }
      function y(t) {
        if (!v(t)) return !1;
        let e = t.constructor;
        if (void 0 === e) return !0;
        let r = e.prototype;
        return !!(v(r) && r.hasOwnProperty('isPrototypeOf'));
      }
      function v(t) {
        return '[object Object]' === Object.prototype.toString.call(t);
      }
      function b(t) {
        return new Promise((e) => {
          setTimeout(e, t);
        });
      }
      function R(t, e, r) {
        return 'function' == typeof r.structuralSharing
          ? r.structuralSharing(t, e)
          : !1 !== r.structuralSharing
            ? (function t(e, r) {
                if (e === r) return e;
                let n = p(e) && p(r);
                if (n || (y(e) && y(r))) {
                  let s = n ? e : Object.keys(e),
                    i = s.length,
                    u = n ? r : Object.keys(r),
                    o = u.length,
                    c = n ? [] : {},
                    h = 0;
                  for (let i = 0; i < o; i++) {
                    let o = n ? i : u[i];
                    !n && void 0 === e[o] && void 0 === r[o] && s.includes(o)
                      ? ((c[o] = void 0), h++)
                      : ((c[o] = t(e[o], r[o])), c[o] === e[o] && void 0 !== e[o] && h++);
                  }
                  return i === o && h === i ? e : c;
                }
                return r;
              })(t, e)
            : e;
      }
      function m(t, e, r = 0) {
        let n = [...t, e];
        return r && n.length > r ? n.slice(1) : n;
      }
      function O(t, e, r = 0) {
        let n = [e, ...t];
        return r && n.length > r ? n.slice(0, -1) : n;
      }
      var w = Symbol();
    },
    89721: function (t, e, r) {
      r.d(e, {
        NL: function () {
          return u;
        },
        aH: function () {
          return o;
        },
      });
      var n = r(58854),
        s = r(75040),
        i = n.createContext(void 0),
        u = (t) => {
          let e = n.useContext(i);
          if (t) return t;
          if (!e) throw Error('No QueryClient set, use QueryClientProvider to set one');
          return e;
        },
        o = ({ client: t, children: e }) => (
          n.useEffect(
            () => (
              t.mount(),
              () => {
                t.unmount();
              }
            ),
            [t]
          ),
          (0, s.jsx)(i.Provider, { value: t, children: e })
        );
    },
    89743: function (t, e, r) {
      r.d(e, {
        Ct: function () {
          return n;
        },
        Fb: function () {
          return s;
        },
        SB: function () {
          return i;
        },
        j8: function () {
          return u;
        },
      });
      var n = (t, e) => void 0 === e.state.data,
        s = (t) => {
          t.suspense && 'number' != typeof t.staleTime && (t.staleTime = 1e3);
        },
        i = (t, e) => t?.suspense && e.isPending,
        u = (t, e, r) =>
          e.fetchOptimistic(t).catch(() => {
            r.clearReset();
          });
    },
    31251: function (t, e, r) {
      let n;
      r.d(e, {
        r: function () {
          return v;
        },
      });
      var s = r(58854),
        i = r(29360);
      r(75040);
      var u = s.createContext(
          ((n = !1),
          {
            clearReset: () => {
              n = !1;
            },
            reset: () => {
              n = !0;
            },
            isReset: () => n,
          })
        ),
        o = () => s.useContext(u),
        c = r(89721),
        h = s.createContext(!1),
        a = () => s.useContext(h);
      h.Provider;
      var l = r(31370),
        f = (t, e) => {
          (t.suspense || t.throwOnError) && !e.isReset() && (t.retryOnMount = !1);
        },
        d = (t) => {
          s.useEffect(() => {
            t.clearReset();
          }, [t]);
        },
        p = ({ result: t, errorResetBoundary: e, throwOnError: r, query: n }) =>
          t.isError && !e.isReset() && !t.isFetching && n && (0, l.L)(r, [t.error, n]),
        y = r(89743);
      function v(t, e, r) {
        let n = (0, c.NL)(r),
          u = a(),
          h = o(),
          l = n.defaultQueryOptions(t);
        (l._optimisticResults = u ? 'isRestoring' : 'optimistic'), (0, y.Fb)(l), f(l, h), d(h);
        let [v] = s.useState(() => new e(n, l)),
          b = v.getOptimisticResult(l);
        if (
          (s.useSyncExternalStore(
            s.useCallback(
              (t) => {
                let e = u ? () => void 0 : v.subscribe(i.V.batchCalls(t));
                return v.updateResult(), e;
              },
              [v, u]
            ),
            () => v.getCurrentResult(),
            () => v.getCurrentResult()
          ),
          s.useEffect(() => {
            v.setOptions(l, { listeners: !1 });
          }, [l, v]),
          (0, y.SB)(l, b))
        )
          throw (0, y.j8)(l, v, h);
        if (
          p({
            result: b,
            errorResetBoundary: h,
            throwOnError: l.throwOnError,
            query: n.getQueryCache().get(l.queryHash),
          })
        )
          throw b.error;
        return l.notifyOnChangeProps ? b : v.trackResult(b);
      }
    },
    31370: function (t, e, r) {
      function n(t, e) {
        return 'function' == typeof t ? t(...e) : !!t;
      }
      function s() {}
      r.d(e, {
        L: function () {
          return n;
        },
        Z: function () {
          return s;
        },
      });
    },
  },
]);
