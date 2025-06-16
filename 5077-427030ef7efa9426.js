'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5077],
  {
    3969: (t, e, s) => {
      s.d(e, { $1: () => o, LJ: () => n, wZ: () => a });
      var r = s(7620),
        i = s(7703),
        n = (t, e) => {
          (t.suspense || t.throwOnError || t.experimental_prefetchInRender) &&
            !e.isReset() &&
            (t.retryOnMount = !1);
        },
        a = (t) => {
          r.useEffect(() => {
            t.clearReset();
          }, [t]);
        },
        o = ({ result: t, errorResetBoundary: e, throwOnError: s, query: r, suspense: n }) =>
          t.isError &&
          !e.isReset() &&
          !t.isFetching &&
          r &&
          ((n && void 0 === t.data) || (0, i.GU)(s, [t.error, r]));
    },
    7703: (t, e, s) => {
      s.d(e, {
        BH: () => y,
        Cp: () => f,
        EN: () => p,
        Eh: () => h,
        F$: () => d,
        GU: () => E,
        MK: () => c,
        S$: () => r,
        ZM: () => Q,
        ZZ: () => S,
        Zw: () => n,
        d2: () => u,
        f8: () => v,
        gn: () => a,
        hT: () => w,
        j3: () => o,
        lQ: () => i,
        nJ: () => l,
        pl: () => O,
        y9: () => C,
        yy: () => R,
      });
      var r = 'undefined' == typeof window || 'Deno' in globalThis;
      function i() {}
      function n(t, e) {
        return 'function' == typeof t ? t(e) : t;
      }
      function a(t) {
        return 'number' == typeof t && t >= 0 && t !== 1 / 0;
      }
      function o(t, e) {
        return Math.max(t + (e || 0) - Date.now(), 0);
      }
      function u(t, e) {
        return 'function' == typeof t ? t(e) : t;
      }
      function h(t, e) {
        return 'function' == typeof t ? t(e) : t;
      }
      function c(t, e) {
        let { type: s = 'all', exact: r, fetchStatus: i, predicate: n, queryKey: a, stale: o } = t;
        if (a) {
          if (r) {
            if (e.queryHash !== d(a, e.options)) return !1;
          } else if (!f(e.queryKey, a)) return !1;
        }
        if ('all' !== s) {
          let t = e.isActive();
          if (('active' === s && !t) || ('inactive' === s && t)) return !1;
        }
        return (
          ('boolean' != typeof o || e.isStale() === o) &&
          (!i || i === e.state.fetchStatus) &&
          (!n || !!n(e))
        );
      }
      function l(t, e) {
        let { exact: s, status: r, predicate: i, mutationKey: n } = t;
        if (n) {
          if (!e.options.mutationKey) return !1;
          if (s) {
            if (p(e.options.mutationKey) !== p(n)) return !1;
          } else if (!f(e.options.mutationKey, n)) return !1;
        }
        return (!r || e.state.status === r) && (!i || !!i(e));
      }
      function d(t, e) {
        return (e?.queryKeyHashFn || p)(t);
      }
      function p(t) {
        return JSON.stringify(t, (t, e) =>
          m(e)
            ? Object.keys(e)
                .sort()
                .reduce((t, s) => ((t[s] = e[s]), t), {})
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
            Object.keys(e).every((s) => f(t[s], e[s])))
        );
      }
      function y(t, e) {
        if (t === e) return t;
        let s = b(t) && b(e);
        if (s || (m(t) && m(e))) {
          let r = s ? t : Object.keys(t),
            i = r.length,
            n = s ? e : Object.keys(e),
            a = n.length,
            o = s ? [] : {},
            u = 0;
          for (let i = 0; i < a; i++) {
            let a = s ? i : n[i];
            ((!s && r.includes(a)) || s) && void 0 === t[a] && void 0 === e[a]
              ? ((o[a] = void 0), u++)
              : ((o[a] = y(t[a], e[a])), o[a] === t[a] && void 0 !== t[a] && u++);
          }
          return i === a && u === i ? t : o;
        }
        return e;
      }
      function v(t, e) {
        if (!e || Object.keys(t).length !== Object.keys(e).length) return !1;
        for (let s in t) if (t[s] !== e[s]) return !1;
        return !0;
      }
      function b(t) {
        return Array.isArray(t) && t.length === Object.keys(t).length;
      }
      function m(t) {
        if (!g(t)) return !1;
        let e = t.constructor;
        if (void 0 === e) return !0;
        let s = e.prototype;
        return (
          !!(g(s) && s.hasOwnProperty('isPrototypeOf')) &&
          Object.getPrototypeOf(t) === Object.prototype
        );
      }
      function g(t) {
        return '[object Object]' === Object.prototype.toString.call(t);
      }
      function R(t) {
        return new Promise((e) => {
          setTimeout(e, t);
        });
      }
      function O(t, e, s) {
        return 'function' == typeof s.structuralSharing
          ? s.structuralSharing(t, e)
          : !1 !== s.structuralSharing
            ? y(t, e)
            : e;
      }
      function C(t, e, s = 0) {
        let r = [...t, e];
        return s && r.length > s ? r.slice(1) : r;
      }
      function S(t, e, s = 0) {
        let r = [e, ...t];
        return s && r.length > s ? r.slice(0, -1) : r;
      }
      var w = Symbol();
      function Q(t, e) {
        return !t.queryFn && e?.initialPromise
          ? () => e.initialPromise
          : t.queryFn && t.queryFn !== w
            ? t.queryFn
            : () => Promise.reject(Error(`Missing queryFn: '${t.queryHash}'`));
      }
      function E(t, e) {
        return 'function' == typeof t ? t(...e) : !!t;
      }
    },
    16258: (t, e, s) => {
      s.d(e, { useMutation: () => c });
      var r = s(7620),
        i = s(80589),
        n = s(60494),
        a = s(72327),
        o = s(7703),
        u = class extends a.Q {
          #t;
          #e = void 0;
          #s;
          #r;
          constructor(t, e) {
            super(), (this.#t = t), this.setOptions(e), this.bindMethods(), this.#i();
          }
          bindMethods() {
            (this.mutate = this.mutate.bind(this)), (this.reset = this.reset.bind(this));
          }
          setOptions(t) {
            let e = this.options;
            (this.options = this.#t.defaultMutationOptions(t)),
              (0, o.f8)(this.options, e) ||
                this.#t
                  .getMutationCache()
                  .notify({ type: 'observerOptionsUpdated', mutation: this.#s, observer: this }),
              e?.mutationKey &&
              this.options.mutationKey &&
              (0, o.EN)(e.mutationKey) !== (0, o.EN)(this.options.mutationKey)
                ? this.reset()
                : this.#s?.state.status === 'pending' && this.#s.setOptions(this.options);
          }
          onUnsubscribe() {
            this.hasListeners() || this.#s?.removeObserver(this);
          }
          onMutationUpdate(t) {
            this.#i(), this.#n(t);
          }
          getCurrentResult() {
            return this.#e;
          }
          reset() {
            this.#s?.removeObserver(this), (this.#s = void 0), this.#i(), this.#n();
          }
          mutate(t, e) {
            return (
              (this.#r = e),
              this.#s?.removeObserver(this),
              (this.#s = this.#t.getMutationCache().build(this.#t, this.options)),
              this.#s.addObserver(this),
              this.#s.execute(t)
            );
          }
          #i() {
            let t = this.#s?.state ?? (0, i.$)();
            this.#e = {
              ...t,
              isPending: 'pending' === t.status,
              isSuccess: 'success' === t.status,
              isError: 'error' === t.status,
              isIdle: 'idle' === t.status,
              mutate: this.mutate,
              reset: this.reset,
            };
          }
          #n(t) {
            n.jG.batch(() => {
              if (this.#r && this.hasListeners()) {
                let e = this.#e.variables,
                  s = this.#e.context;
                t?.type === 'success'
                  ? (this.#r.onSuccess?.(t.data, e, s), this.#r.onSettled?.(t.data, null, e, s))
                  : t?.type === 'error' &&
                    (this.#r.onError?.(t.error, e, s), this.#r.onSettled?.(void 0, t.error, e, s));
              }
              this.listeners.forEach((t) => {
                t(this.#e);
              });
            });
          }
        },
        h = s(87606);
      function c(t, e) {
        let s = (0, h.useQueryClient)(e),
          [i] = r.useState(() => new u(s, t));
        r.useEffect(() => {
          i.setOptions(t);
        }, [i, t]);
        let a = r.useSyncExternalStore(
            r.useCallback((t) => i.subscribe(n.jG.batchCalls(t)), [i]),
            () => i.getCurrentResult(),
            () => i.getCurrentResult()
          ),
          c = r.useCallback(
            (t, e) => {
              i.mutate(t, e).catch(o.lQ);
            },
            [i]
          );
        if (a.error && (0, o.GU)(i.options.throwOnError, [a.error])) throw a.error;
        return { ...a, mutate: c, mutateAsync: a.mutate };
      }
    },
    17566: (t, e, s) => {
      s.d(e, { t: () => l });
      var r = s(7620),
        i = s(60494),
        n = s(7703),
        a = s(87606),
        o = s(24199),
        u = s(3969),
        h = s(26388),
        c = s(33444);
      function l(t, e, s) {
        let l = (0, a.useQueryClient)(s),
          d = (0, h.useIsRestoring)(),
          p = (0, o.useQueryErrorResetBoundary)(),
          f = l.defaultQueryOptions(t);
        l.getDefaultOptions().queries?._experimental_beforeQuery?.(f),
          (f._optimisticResults = d ? 'isRestoring' : 'optimistic'),
          (0, c.jv)(f),
          (0, u.LJ)(f, p),
          (0, u.wZ)(p);
        let y = !l.getQueryCache().get(f.queryHash),
          [v] = r.useState(() => new e(l, f)),
          b = v.getOptimisticResult(f),
          m = !d && !1 !== t.subscribed;
        if (
          (r.useSyncExternalStore(
            r.useCallback(
              (t) => {
                let e = m ? v.subscribe(i.jG.batchCalls(t)) : n.lQ;
                return v.updateResult(), e;
              },
              [v, m]
            ),
            () => v.getCurrentResult(),
            () => v.getCurrentResult()
          ),
          r.useEffect(() => {
            v.setOptions(f);
          }, [f, v]),
          (0, c.EU)(f, b))
        )
          throw (0, c.iL)(f, v, p);
        if (
          (0, u.$1)({
            result: b,
            errorResetBoundary: p,
            throwOnError: f.throwOnError,
            query: l.getQueryCache().get(f.queryHash),
            suspense: f.suspense,
          })
        )
          throw b.error;
        if (
          (l.getDefaultOptions().queries?._experimental_afterQuery?.(f, b),
          f.experimental_prefetchInRender && !n.S$ && (0, c.nE)(b, d))
        ) {
          let t = y ? (0, c.iL)(f, v, p) : l.getQueryCache().get(f.queryHash)?.promise;
          t?.catch(n.lQ).finally(() => {
            v.updateResult();
          });
        }
        return f.notifyOnChangeProps ? b : v.trackResult(b);
      }
    },
    21279: (t, e, s) => {
      s.d(e, { II: () => l, v_: () => u, wm: () => c });
      var r = s(51229),
        i = s(71116),
        n = s(22153),
        a = s(7703);
      function o(t) {
        return Math.min(1e3 * 2 ** t, 3e4);
      }
      function u(t) {
        return (t ?? 'online') !== 'online' || i.t.isOnline();
      }
      var h = class extends Error {
        constructor(t) {
          super('CancelledError'), (this.revert = t?.revert), (this.silent = t?.silent);
        }
      };
      function c(t) {
        return t instanceof h;
      }
      function l(t) {
        let e,
          s = !1,
          c = 0,
          l = !1,
          d = (0, n.T)(),
          p = () => r.m.isFocused() && ('always' === t.networkMode || i.t.isOnline()) && t.canRun(),
          f = () => u(t.networkMode) && t.canRun(),
          y = (s) => {
            l || ((l = !0), t.onSuccess?.(s), e?.(), d.resolve(s));
          },
          v = (s) => {
            l || ((l = !0), t.onError?.(s), e?.(), d.reject(s));
          },
          b = () =>
            new Promise((s) => {
              (e = (t) => {
                (l || p()) && s(t);
              }),
                t.onPause?.();
            }).then(() => {
              (e = void 0), l || t.onContinue?.();
            }),
          m = () => {
            let e;
            if (l) return;
            let r = 0 === c ? t.initialPromise : void 0;
            try {
              e = r ?? t.fn();
            } catch (t) {
              e = Promise.reject(t);
            }
            Promise.resolve(e)
              .then(y)
              .catch((e) => {
                if (l) return;
                let r = t.retry ?? 3 * !a.S$,
                  i = t.retryDelay ?? o,
                  n = 'function' == typeof i ? i(c, e) : i,
                  u =
                    !0 === r ||
                    ('number' == typeof r && c < r) ||
                    ('function' == typeof r && r(c, e));
                if (s || !u) {
                  v(e);
                  return;
                }
                c++,
                  t.onFail?.(c, e),
                  (0, a.yy)(n)
                    .then(() => (p() ? void 0 : b()))
                    .then(() => {
                      s ? v(e) : m();
                    });
              });
          };
        return {
          promise: d,
          cancel: (e) => {
            l || (v(new h(e)), t.abort?.());
          },
          continue: () => (e?.(), d),
          cancelRetry: () => {
            s = !0;
          },
          continueRetry: () => {
            s = !1;
          },
          canStart: f,
          start: () => (f() ? m() : b().then(m), d),
        };
      }
    },
    22153: (t, e, s) => {
      s.d(e, { T: () => r });
      function r() {
        let t, e;
        let s = new Promise((s, r) => {
          (t = s), (e = r);
        });
        function r(t) {
          Object.assign(s, t), delete s.resolve, delete s.reject;
        }
        return (
          (s.status = 'pending'),
          s.catch(() => {}),
          (s.resolve = (e) => {
            r({ status: 'fulfilled', value: e }), t(e);
          }),
          (s.reject = (t) => {
            r({ status: 'rejected', reason: t }), e(t);
          }),
          s
        );
      }
    },
    24199: (t, e, s) => {
      s.d(e, { QueryErrorResetBoundary: () => u, useQueryErrorResetBoundary: () => o });
      var r = s(7620),
        i = s(54568);
      function n() {
        let t = !1;
        return {
          clearReset: () => {
            t = !1;
          },
          reset: () => {
            t = !0;
          },
          isReset: () => t,
        };
      }
      var a = r.createContext(n()),
        o = () => r.useContext(a),
        u = ({ children: t }) => {
          let [e] = r.useState(() => n());
          return (0, i.jsx)(a.Provider, { value: e, children: 'function' == typeof t ? t(e) : t });
        };
    },
    26388: (t, e, s) => {
      s.d(e, { IsRestoringProvider: () => a, useIsRestoring: () => n });
      var r = s(7620),
        i = r.createContext(!1),
        n = () => r.useContext(i),
        a = i.Provider;
    },
    26759: (t, e, s) => {
      s.d(e, { k: () => i });
      var r = s(7703),
        i = class {
          #a;
          destroy() {
            this.clearGcTimeout();
          }
          scheduleGc() {
            this.clearGcTimeout(),
              (0, r.gn)(this.gcTime) &&
                (this.#a = setTimeout(() => {
                  this.optionalRemove();
                }, this.gcTime));
          }
          updateGcTime(t) {
            this.gcTime = Math.max(this.gcTime || 0, t ?? (r.S$ ? 1 / 0 : 3e5));
          }
          clearGcTimeout() {
            this.#a && (clearTimeout(this.#a), (this.#a = void 0));
          }
        };
    },
    28592: (t, e, s) => {
      s.d(e, { $: () => h });
      var r = s(51229),
        i = s(60494),
        n = s(42210),
        a = s(72327),
        o = s(22153),
        u = s(7703),
        h = class extends a.Q {
          constructor(t, e) {
            super(),
              (this.options = e),
              (this.#t = t),
              (this.#o = null),
              (this.#u = (0, o.T)()),
              this.options.experimental_prefetchInRender ||
                this.#u.reject(Error('experimental_prefetchInRender feature flag is not enabled')),
              this.bindMethods(),
              this.setOptions(e);
          }
          #t;
          #h = void 0;
          #c = void 0;
          #e = void 0;
          #l;
          #d;
          #u;
          #o;
          #p;
          #f;
          #y;
          #v;
          #b;
          #m;
          #g = new Set();
          bindMethods() {
            this.refetch = this.refetch.bind(this);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              (this.#h.addObserver(this),
              c(this.#h, this.options) ? this.#R() : this.updateResult(),
              this.#O());
          }
          onUnsubscribe() {
            this.hasListeners() || this.destroy();
          }
          shouldFetchOnReconnect() {
            return l(this.#h, this.options, this.options.refetchOnReconnect);
          }
          shouldFetchOnWindowFocus() {
            return l(this.#h, this.options, this.options.refetchOnWindowFocus);
          }
          destroy() {
            (this.listeners = new Set()), this.#C(), this.#S(), this.#h.removeObserver(this);
          }
          setOptions(t) {
            let e = this.options,
              s = this.#h;
            if (
              ((this.options = this.#t.defaultQueryOptions(t)),
              void 0 !== this.options.enabled &&
                'boolean' != typeof this.options.enabled &&
                'function' != typeof this.options.enabled &&
                'boolean' != typeof (0, u.Eh)(this.options.enabled, this.#h))
            )
              throw Error('Expected enabled to be a boolean or a callback that returns a boolean');
            this.#w(),
              this.#h.setOptions(this.options),
              e._defaulted &&
                !(0, u.f8)(this.options, e) &&
                this.#t
                  .getQueryCache()
                  .notify({ type: 'observerOptionsUpdated', query: this.#h, observer: this });
            let r = this.hasListeners();
            r && d(this.#h, s, this.options, e) && this.#R(),
              this.updateResult(),
              r &&
                (this.#h !== s ||
                  (0, u.Eh)(this.options.enabled, this.#h) !== (0, u.Eh)(e.enabled, this.#h) ||
                  (0, u.d2)(this.options.staleTime, this.#h) !== (0, u.d2)(e.staleTime, this.#h)) &&
                this.#Q();
            let i = this.#E();
            r &&
              (this.#h !== s ||
                (0, u.Eh)(this.options.enabled, this.#h) !== (0, u.Eh)(e.enabled, this.#h) ||
                i !== this.#m) &&
              this.#P(i);
          }
          getOptimisticResult(t) {
            var e, s;
            let r = this.#t.getQueryCache().build(this.#t, t),
              i = this.createResult(r, t);
            return (
              (e = this),
              (s = i),
              (0, u.f8)(e.getCurrentResult(), s) ||
                ((this.#e = i), (this.#d = this.options), (this.#l = this.#h.state)),
              i
            );
          }
          getCurrentResult() {
            return this.#e;
          }
          trackResult(t, e) {
            return new Proxy(t, { get: (t, s) => (this.trackProp(s), e?.(s), Reflect.get(t, s)) });
          }
          trackProp(t) {
            this.#g.add(t);
          }
          getCurrentQuery() {
            return this.#h;
          }
          refetch({ ...t } = {}) {
            return this.fetch({ ...t });
          }
          fetchOptimistic(t) {
            let e = this.#t.defaultQueryOptions(t),
              s = this.#t.getQueryCache().build(this.#t, e);
            return s.fetch().then(() => this.createResult(s, e));
          }
          fetch(t) {
            return this.#R({ ...t, cancelRefetch: t.cancelRefetch ?? !0 }).then(
              () => (this.updateResult(), this.#e)
            );
          }
          #R(t) {
            this.#w();
            let e = this.#h.fetch(this.options, t);
            return t?.throwOnError || (e = e.catch(u.lQ)), e;
          }
          #Q() {
            this.#C();
            let t = (0, u.d2)(this.options.staleTime, this.#h);
            if (u.S$ || this.#e.isStale || !(0, u.gn)(t)) return;
            let e = (0, u.j3)(this.#e.dataUpdatedAt, t);
            this.#v = setTimeout(() => {
              this.#e.isStale || this.updateResult();
            }, e + 1);
          }
          #E() {
            return (
              ('function' == typeof this.options.refetchInterval
                ? this.options.refetchInterval(this.#h)
                : this.options.refetchInterval) ?? !1
            );
          }
          #P(t) {
            this.#S(),
              (this.#m = t),
              !u.S$ &&
                !1 !== (0, u.Eh)(this.options.enabled, this.#h) &&
                (0, u.gn)(this.#m) &&
                0 !== this.#m &&
                (this.#b = setInterval(() => {
                  (this.options.refetchIntervalInBackground || r.m.isFocused()) && this.#R();
                }, this.#m));
          }
          #O() {
            this.#Q(), this.#P(this.#E());
          }
          #C() {
            this.#v && (clearTimeout(this.#v), (this.#v = void 0));
          }
          #S() {
            this.#b && (clearInterval(this.#b), (this.#b = void 0));
          }
          createResult(t, e) {
            let s;
            let r = this.#h,
              i = this.options,
              a = this.#e,
              h = this.#l,
              l = this.#d,
              f = t !== r ? t.state : this.#c,
              { state: y } = t,
              v = { ...y },
              b = !1;
            if (e._optimisticResults) {
              let s = this.hasListeners(),
                a = !s && c(t, e),
                o = s && d(t, r, e, i);
              (a || o) && (v = { ...v, ...(0, n.k)(y.data, t.options) }),
                'isRestoring' === e._optimisticResults && (v.fetchStatus = 'idle');
            }
            let { error: m, errorUpdatedAt: g, status: R } = v;
            s = v.data;
            let O = !1;
            if (void 0 !== e.placeholderData && void 0 === s && 'pending' === R) {
              let t;
              a?.isPlaceholderData && e.placeholderData === l?.placeholderData
                ? ((t = a.data), (O = !0))
                : (t =
                    'function' == typeof e.placeholderData
                      ? e.placeholderData(this.#y?.state.data, this.#y)
                      : e.placeholderData),
                void 0 !== t && ((R = 'success'), (s = (0, u.pl)(a?.data, t, e)), (b = !0));
            }
            if (e.select && void 0 !== s && !O) {
              if (a && s === h?.data && e.select === this.#p) s = this.#f;
              else
                try {
                  (this.#p = e.select),
                    (s = e.select(s)),
                    (s = (0, u.pl)(a?.data, s, e)),
                    (this.#f = s),
                    (this.#o = null);
                } catch (t) {
                  this.#o = t;
                }
            }
            this.#o && ((m = this.#o), (s = this.#f), (g = Date.now()), (R = 'error'));
            let C = 'fetching' === v.fetchStatus,
              S = 'pending' === R,
              w = 'error' === R,
              Q = S && C,
              E = void 0 !== s,
              P = {
                status: R,
                fetchStatus: v.fetchStatus,
                isPending: S,
                isSuccess: 'success' === R,
                isError: w,
                isInitialLoading: Q,
                isLoading: Q,
                data: s,
                dataUpdatedAt: v.dataUpdatedAt,
                error: m,
                errorUpdatedAt: g,
                failureCount: v.fetchFailureCount,
                failureReason: v.fetchFailureReason,
                errorUpdateCount: v.errorUpdateCount,
                isFetched: v.dataUpdateCount > 0 || v.errorUpdateCount > 0,
                isFetchedAfterMount:
                  v.dataUpdateCount > f.dataUpdateCount || v.errorUpdateCount > f.errorUpdateCount,
                isFetching: C,
                isRefetching: C && !S,
                isLoadingError: w && !E,
                isPaused: 'paused' === v.fetchStatus,
                isPlaceholderData: b,
                isRefetchError: w && E,
                isStale: p(t, e),
                refetch: this.refetch,
                promise: this.#u,
              };
            if (this.options.experimental_prefetchInRender) {
              let e = (t) => {
                  'error' === P.status ? t.reject(P.error) : void 0 !== P.data && t.resolve(P.data);
                },
                s = () => {
                  e((this.#u = P.promise = (0, o.T)()));
                },
                i = this.#u;
              switch (i.status) {
                case 'pending':
                  t.queryHash === r.queryHash && e(i);
                  break;
                case 'fulfilled':
                  ('error' === P.status || P.data !== i.value) && s();
                  break;
                case 'rejected':
                  ('error' !== P.status || P.error !== i.reason) && s();
              }
            }
            return P;
          }
          updateResult() {
            let t = this.#e,
              e = this.createResult(this.#h, this.options);
            (this.#l = this.#h.state),
              (this.#d = this.options),
              void 0 !== this.#l.data && (this.#y = this.#h),
              !(0, u.f8)(e, t) &&
                ((this.#e = e),
                this.#n({
                  listeners: (() => {
                    if (!t) return !0;
                    let { notifyOnChangeProps: e } = this.options,
                      s = 'function' == typeof e ? e() : e;
                    if ('all' === s || (!s && !this.#g.size)) return !0;
                    let r = new Set(s ?? this.#g);
                    return (
                      this.options.throwOnError && r.add('error'),
                      Object.keys(this.#e).some((e) => this.#e[e] !== t[e] && r.has(e))
                    );
                  })(),
                }));
          }
          #w() {
            let t = this.#t.getQueryCache().build(this.#t, this.options);
            if (t === this.#h) return;
            let e = this.#h;
            (this.#h = t),
              (this.#c = t.state),
              this.hasListeners() && (e?.removeObserver(this), t.addObserver(this));
          }
          onQueryUpdate() {
            this.updateResult(), this.hasListeners() && this.#O();
          }
          #n(t) {
            i.jG.batch(() => {
              t.listeners &&
                this.listeners.forEach((t) => {
                  t(this.#e);
                }),
                this.#t.getQueryCache().notify({ query: this.#h, type: 'observerResultsUpdated' });
            });
          }
        };
      function c(t, e) {
        return (
          (!1 !== (0, u.Eh)(e.enabled, t) &&
            void 0 === t.state.data &&
            ('error' !== t.state.status || !1 !== e.retryOnMount)) ||
          (void 0 !== t.state.data && l(t, e, e.refetchOnMount))
        );
      }
      function l(t, e, s) {
        if (!1 !== (0, u.Eh)(e.enabled, t)) {
          let r = 'function' == typeof s ? s(t) : s;
          return 'always' === r || (!1 !== r && p(t, e));
        }
        return !1;
      }
      function d(t, e, s, r) {
        return (
          (t !== e || !1 === (0, u.Eh)(r.enabled, t)) &&
          (!s.suspense || 'error' !== t.state.status) &&
          p(t, s)
        );
      }
      function p(t, e) {
        return !1 !== (0, u.Eh)(e.enabled, t) && t.isStaleByTime((0, u.d2)(e.staleTime, t));
      }
    },
    33444: (t, e, s) => {
      s.d(e, { EU: () => a, R3: () => r, iL: () => o, jv: () => i, nE: () => n });
      var r = (t, e) => void 0 === e.state.data,
        i = (t) => {
          let e = t.staleTime;
          t.suspense &&
            ((t.staleTime =
              'function' == typeof e ? (...t) => Math.max(e(...t), 1e3) : Math.max(e ?? 1e3, 1e3)),
            'number' == typeof t.gcTime && (t.gcTime = Math.max(t.gcTime, 1e3)));
        },
        n = (t, e) => t.isLoading && t.isFetching && !e,
        a = (t, e) => t?.suspense && e.isPending,
        o = (t, e, s) =>
          e.fetchOptimistic(t).catch(() => {
            s.clearReset();
          });
    },
    42210: (t, e, s) => {
      s.d(e, { X: () => o, k: () => u });
      var r = s(7703),
        i = s(60494),
        n = s(21279),
        a = s(26759),
        o = class extends a.k {
          #F;
          #I;
          #T;
          #t;
          #M;
          #x;
          #U;
          constructor(t) {
            super(),
              (this.#U = !1),
              (this.#x = t.defaultOptions),
              this.setOptions(t.options),
              (this.observers = []),
              (this.#t = t.client),
              (this.#T = this.#t.getQueryCache()),
              (this.queryKey = t.queryKey),
              (this.queryHash = t.queryHash),
              (this.#F = (function (t) {
                let e = 'function' == typeof t.initialData ? t.initialData() : t.initialData,
                  s = void 0 !== e,
                  r = s
                    ? 'function' == typeof t.initialDataUpdatedAt
                      ? t.initialDataUpdatedAt()
                      : t.initialDataUpdatedAt
                    : 0;
                return {
                  data: e,
                  dataUpdateCount: 0,
                  dataUpdatedAt: s ? (r ?? Date.now()) : 0,
                  error: null,
                  errorUpdateCount: 0,
                  errorUpdatedAt: 0,
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                  fetchMeta: null,
                  isInvalidated: !1,
                  status: s ? 'success' : 'pending',
                  fetchStatus: 'idle',
                };
              })(this.options)),
              (this.state = t.state ?? this.#F),
              this.scheduleGc();
          }
          get meta() {
            return this.options.meta;
          }
          get promise() {
            return this.#M?.promise;
          }
          setOptions(t) {
            (this.options = { ...this.#x, ...t }), this.updateGcTime(this.options.gcTime);
          }
          optionalRemove() {
            this.observers.length || 'idle' !== this.state.fetchStatus || this.#T.remove(this);
          }
          setData(t, e) {
            let s = (0, r.pl)(this.state.data, t, this.options);
            return (
              this.#k({ data: s, type: 'success', dataUpdatedAt: e?.updatedAt, manual: e?.manual }),
              s
            );
          }
          setState(t, e) {
            this.#k({ type: 'setState', state: t, setStateOptions: e });
          }
          cancel(t) {
            let e = this.#M?.promise;
            return this.#M?.cancel(t), e ? e.then(r.lQ).catch(r.lQ) : Promise.resolve();
          }
          destroy() {
            super.destroy(), this.cancel({ silent: !0 });
          }
          reset() {
            this.destroy(), this.setState(this.#F);
          }
          isActive() {
            return this.observers.some((t) => !1 !== (0, r.Eh)(t.options.enabled, this));
          }
          isDisabled() {
            return this.getObserversCount() > 0
              ? !this.isActive()
              : this.options.queryFn === r.hT ||
                  this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
          }
          isStale() {
            return (
              !!this.state.isInvalidated ||
              (this.getObserversCount() > 0
                ? this.observers.some((t) => t.getCurrentResult().isStale)
                : void 0 === this.state.data)
            );
          }
          isStaleByTime(t = 0) {
            return (
              this.state.isInvalidated ||
              void 0 === this.state.data ||
              !(0, r.j3)(this.state.dataUpdatedAt, t)
            );
          }
          onFocus() {
            let t = this.observers.find((t) => t.shouldFetchOnWindowFocus());
            t?.refetch({ cancelRefetch: !1 }), this.#M?.continue();
          }
          onOnline() {
            let t = this.observers.find((t) => t.shouldFetchOnReconnect());
            t?.refetch({ cancelRefetch: !1 }), this.#M?.continue();
          }
          addObserver(t) {
            this.observers.includes(t) ||
              (this.observers.push(t),
              this.clearGcTimeout(),
              this.#T.notify({ type: 'observerAdded', query: this, observer: t }));
          }
          removeObserver(t) {
            this.observers.includes(t) &&
              ((this.observers = this.observers.filter((e) => e !== t)),
              this.observers.length ||
                (this.#M && (this.#U ? this.#M.cancel({ revert: !0 }) : this.#M.cancelRetry()),
                this.scheduleGc()),
              this.#T.notify({ type: 'observerRemoved', query: this, observer: t }));
          }
          getObserversCount() {
            return this.observers.length;
          }
          invalidate() {
            this.state.isInvalidated || this.#k({ type: 'invalidate' });
          }
          fetch(t, e) {
            if ('idle' !== this.state.fetchStatus) {
              if (void 0 !== this.state.data && e?.cancelRefetch) this.cancel({ silent: !0 });
              else if (this.#M) return this.#M.continueRetry(), this.#M.promise;
            }
            if ((t && this.setOptions(t), !this.options.queryFn)) {
              let t = this.observers.find((t) => t.options.queryFn);
              t && this.setOptions(t.options);
            }
            let s = new AbortController(),
              i = (t) => {
                Object.defineProperty(t, 'signal', {
                  enumerable: !0,
                  get: () => ((this.#U = !0), s.signal),
                });
              },
              a = {
                fetchOptions: e,
                options: this.options,
                queryKey: this.queryKey,
                client: this.#t,
                state: this.state,
                fetchFn: () => {
                  let t = (0, r.ZM)(this.options, e),
                    s = { client: this.#t, queryKey: this.queryKey, meta: this.meta };
                  return (i(s), (this.#U = !1), this.options.persister)
                    ? this.options.persister(t, s, this)
                    : t(s);
                },
              };
            i(a),
              this.options.behavior?.onFetch(a, this),
              (this.#I = this.state),
              ('idle' === this.state.fetchStatus ||
                this.state.fetchMeta !== a.fetchOptions?.meta) &&
                this.#k({ type: 'fetch', meta: a.fetchOptions?.meta });
            let o = (t) => {
              ((0, n.wm)(t) && t.silent) || this.#k({ type: 'error', error: t }),
                (0, n.wm)(t) ||
                  (this.#T.config.onError?.(t, this),
                  this.#T.config.onSettled?.(this.state.data, t, this)),
                this.scheduleGc();
            };
            return (
              (this.#M = (0, n.II)({
                initialPromise: e?.initialPromise,
                fn: a.fetchFn,
                abort: s.abort.bind(s),
                onSuccess: (t) => {
                  if (void 0 === t) {
                    o(Error(`${this.queryHash} data is undefined`));
                    return;
                  }
                  try {
                    this.setData(t);
                  } catch (t) {
                    o(t);
                    return;
                  }
                  this.#T.config.onSuccess?.(t, this),
                    this.#T.config.onSettled?.(t, this.state.error, this),
                    this.scheduleGc();
                },
                onError: o,
                onFail: (t, e) => {
                  this.#k({ type: 'failed', failureCount: t, error: e });
                },
                onPause: () => {
                  this.#k({ type: 'pause' });
                },
                onContinue: () => {
                  this.#k({ type: 'continue' });
                },
                retry: a.options.retry,
                retryDelay: a.options.retryDelay,
                networkMode: a.options.networkMode,
                canRun: () => !0,
              })),
              this.#M.start()
            );
          }
          #k(t) {
            (this.state = ((e) => {
              switch (t.type) {
                case 'failed':
                  return { ...e, fetchFailureCount: t.failureCount, fetchFailureReason: t.error };
                case 'pause':
                  return { ...e, fetchStatus: 'paused' };
                case 'continue':
                  return { ...e, fetchStatus: 'fetching' };
                case 'fetch':
                  return { ...e, ...u(e.data, this.options), fetchMeta: t.meta ?? null };
                case 'success':
                  return {
                    ...e,
                    data: t.data,
                    dataUpdateCount: e.dataUpdateCount + 1,
                    dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                    error: null,
                    isInvalidated: !1,
                    status: 'success',
                    ...(!t.manual && {
                      fetchStatus: 'idle',
                      fetchFailureCount: 0,
                      fetchFailureReason: null,
                    }),
                  };
                case 'error':
                  let s = t.error;
                  if ((0, n.wm)(s) && s.revert && this.#I)
                    return { ...this.#I, fetchStatus: 'idle' };
                  return {
                    ...e,
                    error: s,
                    errorUpdateCount: e.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: e.fetchFailureCount + 1,
                    fetchFailureReason: s,
                    fetchStatus: 'idle',
                    status: 'error',
                  };
                case 'invalidate':
                  return { ...e, isInvalidated: !0 };
                case 'setState':
                  return { ...e, ...t.state };
              }
            })(this.state)),
              i.jG.batch(() => {
                this.observers.forEach((t) => {
                  t.onQueryUpdate();
                }),
                  this.#T.notify({ query: this, type: 'updated', action: t });
              });
          }
        };
      function u(t, e) {
        return {
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchStatus: (0, n.v_)(e.networkMode) ? 'fetching' : 'paused',
          ...(void 0 === t && { error: null, status: 'pending' }),
        };
      }
    },
    51229: (t, e, s) => {
      s.d(e, { m: () => n });
      var r = s(72327),
        i = s(7703),
        n = new (class extends r.Q {
          #j;
          #q;
          #D;
          constructor() {
            super(),
              (this.#D = (t) => {
                if (!i.S$ && window.addEventListener) {
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
            this.#q || this.setEventListener(this.#D);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#q?.(), (this.#q = void 0));
          }
          setEventListener(t) {
            (this.#D = t),
              this.#q?.(),
              (this.#q = t((t) => {
                'boolean' == typeof t ? this.setFocused(t) : this.onFocus();
              }));
          }
          setFocused(t) {
            this.#j !== t && ((this.#j = t), this.onFocus());
          }
          onFocus() {
            let t = this.isFocused();
            this.listeners.forEach((e) => {
              e(t);
            });
          }
          isFocused() {
            return 'boolean' == typeof this.#j
              ? this.#j
              : globalThis.document?.visibilityState !== 'hidden';
          }
        })();
    },
    60494: (t, e, s) => {
      s.d(e, { jG: () => i });
      var r = (t) => setTimeout(t, 0),
        i = (function () {
          let t = [],
            e = 0,
            s = (t) => {
              t();
            },
            i = (t) => {
              t();
            },
            n = r,
            a = (r) => {
              e
                ? t.push(r)
                : n(() => {
                    s(r);
                  });
            },
            o = () => {
              let e = t;
              (t = []),
                e.length &&
                  n(() => {
                    i(() => {
                      e.forEach((t) => {
                        s(t);
                      });
                    });
                  });
            };
          return {
            batch: (t) => {
              let s;
              e++;
              try {
                s = t();
              } finally {
                --e || o();
              }
              return s;
            },
            batchCalls:
              (t) =>
              (...e) => {
                a(() => {
                  t(...e);
                });
              },
            schedule: a,
            setNotifyFunction: (t) => {
              s = t;
            },
            setBatchNotifyFunction: (t) => {
              i = t;
            },
            setScheduler: (t) => {
              n = t;
            },
          };
        })();
    },
    67933: (t, e, s) => {
      s.d(e, { useQuery: () => n });
      var r = s(28592),
        i = s(17566);
      function n(t, e) {
        return (0, i.t)(t, r.$, e);
      }
    },
    71116: (t, e, s) => {
      s.d(e, { t: () => n });
      var r = s(72327),
        i = s(7703),
        n = new (class extends r.Q {
          #L = !0;
          #q;
          #D;
          constructor() {
            super(),
              (this.#D = (t) => {
                if (!i.S$ && window.addEventListener) {
                  let e = () => t(!0),
                    s = () => t(!1);
                  return (
                    window.addEventListener('online', e, !1),
                    window.addEventListener('offline', s, !1),
                    () => {
                      window.removeEventListener('online', e),
                        window.removeEventListener('offline', s);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#q || this.setEventListener(this.#D);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#q?.(), (this.#q = void 0));
          }
          setEventListener(t) {
            (this.#D = t), this.#q?.(), (this.#q = t(this.setOnline.bind(this)));
          }
          setOnline(t) {
            this.#L !== t &&
              ((this.#L = t),
              this.listeners.forEach((e) => {
                e(t);
              }));
          }
          isOnline() {
            return this.#L;
          }
        })();
    },
    72327: (t, e, s) => {
      s.d(e, { Q: () => r });
      var r = class {
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
    75608: (t, e, s) => {
      s.d(e, { PL: () => i, RQ: () => u, rB: () => o });
      var r = s(7703);
      function i(t) {
        return {
          onFetch: (e, s) => {
            let i = e.options,
              o = e.fetchOptions?.meta?.fetchMore?.direction,
              u = e.state.data?.pages || [],
              h = e.state.data?.pageParams || [],
              c = { pages: [], pageParams: [] },
              l = 0,
              d = async () => {
                let s = !1,
                  d = (t) => {
                    Object.defineProperty(t, 'signal', {
                      enumerable: !0,
                      get: () => (
                        e.signal.aborted
                          ? (s = !0)
                          : e.signal.addEventListener('abort', () => {
                              s = !0;
                            }),
                        e.signal
                      ),
                    });
                  },
                  p = (0, r.ZM)(e.options, e.fetchOptions),
                  f = async (t, i, n) => {
                    if (s) return Promise.reject();
                    if (null == i && t.pages.length) return Promise.resolve(t);
                    let a = {
                      client: e.client,
                      queryKey: e.queryKey,
                      pageParam: i,
                      direction: n ? 'backward' : 'forward',
                      meta: e.options.meta,
                    };
                    d(a);
                    let o = await p(a),
                      { maxPages: u } = e.options,
                      h = n ? r.ZZ : r.y9;
                    return { pages: h(t.pages, o, u), pageParams: h(t.pageParams, i, u) };
                  };
                if (o && u.length) {
                  let t = 'backward' === o,
                    e = { pages: u, pageParams: h },
                    s = (t ? a : n)(i, e);
                  c = await f(e, s, t);
                } else {
                  let e = t ?? u.length;
                  do {
                    let t = 0 === l ? (h[0] ?? i.initialPageParam) : n(i, c);
                    if (l > 0 && null == t) break;
                    (c = await f(c, t)), l++;
                  } while (l < e);
                }
                return c;
              };
            e.options.persister
              ? (e.fetchFn = () =>
                  e.options.persister?.(
                    d,
                    {
                      client: e.client,
                      queryKey: e.queryKey,
                      meta: e.options.meta,
                      signal: e.signal,
                    },
                    s
                  ))
              : (e.fetchFn = d);
          },
        };
      }
      function n(t, { pages: e, pageParams: s }) {
        let r = e.length - 1;
        return e.length > 0 ? t.getNextPageParam(e[r], e, s[r], s) : void 0;
      }
      function a(t, { pages: e, pageParams: s }) {
        return e.length > 0 ? t.getPreviousPageParam?.(e[0], e, s[0], s) : void 0;
      }
      function o(t, e) {
        return !!e && null != n(t, e);
      }
      function u(t, e) {
        return !!e && !!t.getPreviousPageParam && null != a(t, e);
      }
    },
    80589: (t, e, s) => {
      s.d(e, { $: () => o, s: () => a });
      var r = s(60494),
        i = s(26759),
        n = s(21279),
        a = class extends i.k {
          #G;
          #A;
          #M;
          constructor(t) {
            super(),
              (this.mutationId = t.mutationId),
              (this.#A = t.mutationCache),
              (this.#G = []),
              (this.state = t.state || o()),
              this.setOptions(t.options),
              this.scheduleGc();
          }
          setOptions(t) {
            (this.options = t), this.updateGcTime(this.options.gcTime);
          }
          get meta() {
            return this.options.meta;
          }
          addObserver(t) {
            this.#G.includes(t) ||
              (this.#G.push(t),
              this.clearGcTimeout(),
              this.#A.notify({ type: 'observerAdded', mutation: this, observer: t }));
          }
          removeObserver(t) {
            (this.#G = this.#G.filter((e) => e !== t)),
              this.scheduleGc(),
              this.#A.notify({ type: 'observerRemoved', mutation: this, observer: t });
          }
          optionalRemove() {
            this.#G.length ||
              ('pending' === this.state.status ? this.scheduleGc() : this.#A.remove(this));
          }
          continue() {
            return this.#M?.continue() ?? this.execute(this.state.variables);
          }
          async execute(t) {
            let e = () => {
              this.#k({ type: 'continue' });
            };
            this.#M = (0, n.II)({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(t)
                  : Promise.reject(Error('No mutationFn found')),
              onFail: (t, e) => {
                this.#k({ type: 'failed', failureCount: t, error: e });
              },
              onPause: () => {
                this.#k({ type: 'pause' });
              },
              onContinue: e,
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => this.#A.canRun(this),
            });
            let s = 'pending' === this.state.status,
              r = !this.#M.canStart();
            try {
              if (s) e();
              else {
                this.#k({ type: 'pending', variables: t, isPaused: r }),
                  await this.#A.config.onMutate?.(t, this);
                let e = await this.options.onMutate?.(t);
                e !== this.state.context &&
                  this.#k({ type: 'pending', context: e, variables: t, isPaused: r });
              }
              let i = await this.#M.start();
              return (
                await this.#A.config.onSuccess?.(i, t, this.state.context, this),
                await this.options.onSuccess?.(i, t, this.state.context),
                await this.#A.config.onSettled?.(
                  i,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                ),
                await this.options.onSettled?.(i, null, t, this.state.context),
                this.#k({ type: 'success', data: i }),
                i
              );
            } catch (e) {
              try {
                throw (
                  (await this.#A.config.onError?.(e, t, this.state.context, this),
                  await this.options.onError?.(e, t, this.state.context),
                  await this.#A.config.onSettled?.(
                    void 0,
                    e,
                    this.state.variables,
                    this.state.context,
                    this
                  ),
                  await this.options.onSettled?.(void 0, e, t, this.state.context),
                  e)
                );
              } finally {
                this.#k({ type: 'error', error: e });
              }
            } finally {
              this.#A.runNext(this);
            }
          }
          #k(t) {
            (this.state = ((e) => {
              switch (t.type) {
                case 'failed':
                  return { ...e, failureCount: t.failureCount, failureReason: t.error };
                case 'pause':
                  return { ...e, isPaused: !0 };
                case 'continue':
                  return { ...e, isPaused: !1 };
                case 'pending':
                  return {
                    ...e,
                    context: t.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: t.isPaused,
                    status: 'pending',
                    variables: t.variables,
                    submittedAt: Date.now(),
                  };
                case 'success':
                  return {
                    ...e,
                    data: t.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: 'success',
                    isPaused: !1,
                  };
                case 'error':
                  return {
                    ...e,
                    data: void 0,
                    error: t.error,
                    failureCount: e.failureCount + 1,
                    failureReason: t.error,
                    isPaused: !1,
                    status: 'error',
                  };
              }
            })(this.state)),
              r.jG.batch(() => {
                this.#G.forEach((e) => {
                  e.onMutationUpdate(t);
                }),
                  this.#A.notify({ mutation: this, type: 'updated', action: t });
              });
          }
        };
      function o() {
        return {
          context: void 0,
          data: void 0,
          error: null,
          failureCount: 0,
          failureReason: null,
          isPaused: !1,
          status: 'idle',
          variables: void 0,
          submittedAt: 0,
        };
      }
    },
    84007: (t, e, s) => {
      s.d(e, { useQueries: () => y });
      var r = s(7620),
        i = s(60494),
        n = s(28592),
        a = s(72327),
        o = s(7703);
      function u(t, e) {
        return t.filter((t) => !e.includes(t));
      }
      var h = class extends a.Q {
          #t;
          #K;
          #$;
          #_;
          #G;
          #H;
          #N;
          #B;
          #Z = [];
          constructor(t, e, s) {
            super(),
              (this.#t = t),
              (this.#_ = s),
              (this.#$ = []),
              (this.#G = []),
              (this.#K = []),
              this.setQueries(e);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#G.forEach((t) => {
                t.subscribe((e) => {
                  this.#W(t, e);
                });
              });
          }
          onUnsubscribe() {
            this.listeners.size || this.destroy();
          }
          destroy() {
            (this.listeners = new Set()),
              this.#G.forEach((t) => {
                t.destroy();
              });
          }
          setQueries(t, e) {
            (this.#$ = t),
              (this.#_ = e),
              i.jG.batch(() => {
                let t = this.#G,
                  e = this.#z(this.#$);
                (this.#Z = e), e.forEach((t) => t.observer.setOptions(t.defaultedQueryOptions));
                let s = e.map((t) => t.observer),
                  r = s.map((t) => t.getCurrentResult()),
                  i = s.some((e, s) => e !== t[s]);
                if (t.length !== s.length || i)
                  (this.#G = s),
                    (this.#K = r),
                    this.hasListeners() &&
                      (u(t, s).forEach((t) => {
                        t.destroy();
                      }),
                      u(s, t).forEach((t) => {
                        t.subscribe((e) => {
                          this.#W(t, e);
                        });
                      }),
                      this.#n());
              });
          }
          getCurrentResult() {
            return this.#K;
          }
          getQueries() {
            return this.#G.map((t) => t.getCurrentQuery());
          }
          getObservers() {
            return this.#G;
          }
          getOptimisticResult(t, e) {
            let s = this.#z(t),
              r = s.map((t) => t.observer.getOptimisticResult(t.defaultedQueryOptions));
            return [r, (t) => this.#J(t ?? r, e), () => this.#X(r, s)];
          }
          #X(t, e) {
            return e.map((s, r) => {
              let i = t[r];
              return s.defaultedQueryOptions.notifyOnChangeProps
                ? i
                : s.observer.trackResult(i, (t) => {
                    e.forEach((e) => {
                      e.observer.trackProp(t);
                    });
                  });
            });
          }
          #J(t, e) {
            return e
              ? ((this.#H && this.#K === this.#B && e === this.#N) ||
                  ((this.#N = e), (this.#B = this.#K), (this.#H = (0, o.BH)(this.#H, e(t)))),
                this.#H)
              : t;
          }
          #z(t) {
            let e = new Map(this.#G.map((t) => [t.options.queryHash, t])),
              s = [];
            return (
              t.forEach((t) => {
                let r = this.#t.defaultQueryOptions(t),
                  i = e.get(r.queryHash);
                i
                  ? s.push({ defaultedQueryOptions: r, observer: i })
                  : s.push({ defaultedQueryOptions: r, observer: new n.$(this.#t, r) });
              }),
              s
            );
          }
          #W(t, e) {
            let s = this.#G.indexOf(t);
            -1 !== s &&
              ((this.#K = (function (t, e, s) {
                let r = t.slice(0);
                return (r[e] = s), r;
              })(this.#K, s, e)),
              this.#n());
          }
          #n() {
            if (this.hasListeners()) {
              let t = this.#H,
                e = this.#X(this.#K, this.#Z);
              t !== this.#J(e, this.#_?.combine) &&
                i.jG.batch(() => {
                  this.listeners.forEach((t) => {
                    t(this.#K);
                  });
                });
            }
          }
        },
        c = s(87606),
        l = s(26388),
        d = s(24199),
        p = s(3969),
        f = s(33444);
      function y({ queries: t, ...e }, s) {
        let a = (0, c.useQueryClient)(s),
          u = (0, l.useIsRestoring)(),
          y = (0, d.useQueryErrorResetBoundary)(),
          v = r.useMemo(
            () =>
              t.map((t) => {
                let e = a.defaultQueryOptions(t);
                return (e._optimisticResults = u ? 'isRestoring' : 'optimistic'), e;
              }),
            [t, a, u]
          );
        v.forEach((t) => {
          (0, f.jv)(t), (0, p.LJ)(t, y);
        }),
          (0, p.wZ)(y);
        let [b] = r.useState(() => new h(a, v, e)),
          [m, g, R] = b.getOptimisticResult(v, e.combine),
          O = !u && !1 !== e.subscribed;
        r.useSyncExternalStore(
          r.useCallback((t) => (O ? b.subscribe(i.jG.batchCalls(t)) : o.lQ), [b, O]),
          () => b.getCurrentResult(),
          () => b.getCurrentResult()
        ),
          r.useEffect(() => {
            b.setQueries(v, e);
          }, [v, e, b]);
        let C = m.some((t, e) => (0, f.EU)(v[e], t))
          ? m.flatMap((t, e) => {
              let s = v[e];
              if (s) {
                let e = new n.$(a, s);
                if ((0, f.EU)(s, t)) return (0, f.iL)(s, e, y);
                (0, f.nE)(t, u) && (0, f.iL)(s, e, y);
              }
              return [];
            })
          : [];
        if (C.length > 0) throw Promise.all(C);
        let S = m.find((t, e) => {
          let s = v[e];
          return (
            s &&
            (0, p.$1)({
              result: t,
              errorResetBoundary: y,
              throwOnError: s.throwOnError,
              query: a.getQueryCache().get(s.queryHash),
              suspense: s.suspense,
            })
          );
        });
        if (S?.error) throw S.error;
        return g(R());
      }
    },
    87606: (t, e, s) => {
      s.r(e),
        s.d(e, {
          QueryClientContext: () => n,
          QueryClientProvider: () => o,
          useQueryClient: () => a,
        });
      var r = s(7620),
        i = s(54568),
        n = r.createContext(void 0),
        a = (t) => {
          let e = r.useContext(n);
          if (t) return t;
          if (!e) throw Error('No QueryClient set, use QueryClientProvider to set one');
          return e;
        },
        o = ({ client: t, children: e }) => (
          r.useEffect(
            () => (
              t.mount(),
              () => {
                t.unmount();
              }
            ),
            [t]
          ),
          (0, i.jsx)(n.Provider, { value: t, children: e })
        );
    },
  },
]);
