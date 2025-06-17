(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2947],
  {
    38123: function (e, t, s) {
      var i = s(76896);
      'undefined' != typeof __nccwpck_require__ && (__nccwpck_require__.ab = '//'),
        {
          189: function () {
            !(function (e, t) {
              'use strict';
              if (!e.setImmediate) {
                var s,
                  r,
                  a,
                  n,
                  o,
                  u = 1,
                  h = {},
                  c = !1,
                  l = e.document,
                  d = Object.getPrototypeOf && Object.getPrototypeOf(e);
                ((d = d && d.setTimeout ? d : e),
                '[object process]' === {}.toString.call(e.process))
                  ? (o = function (e) {
                      i.nextTick(function () {
                        p(e);
                      });
                    })
                  : (function () {
                        if (e.postMessage && !e.importScripts) {
                          var t = !0,
                            s = e.onmessage;
                          return (
                            (e.onmessage = function () {
                              t = !1;
                            }),
                            e.postMessage('', '*'),
                            (e.onmessage = s),
                            t
                          );
                        }
                      })()
                    ? ((s = 'setImmediate$' + Math.random() + '$'),
                      (r = function (t) {
                        t.source === e &&
                          'string' == typeof t.data &&
                          0 === t.data.indexOf(s) &&
                          p(+t.data.slice(s.length));
                      }),
                      e.addEventListener
                        ? e.addEventListener('message', r, !1)
                        : e.attachEvent('onmessage', r),
                      (o = function (t) {
                        e.postMessage(s + t, '*');
                      }))
                    : e.MessageChannel
                      ? (((a = new MessageChannel()).port1.onmessage = function (e) {
                          p(e.data);
                        }),
                        (o = function (e) {
                          a.port2.postMessage(e);
                        }))
                      : l && 'onreadystatechange' in l.createElement('script')
                        ? ((n = l.documentElement),
                          (o = function (e) {
                            var t = l.createElement('script');
                            (t.onreadystatechange = function () {
                              p(e), (t.onreadystatechange = null), n.removeChild(t), (t = null);
                            }),
                              n.appendChild(t);
                          }))
                        : (o = function (e) {
                            setTimeout(p, 0, e);
                          }),
                  (d.setImmediate = function (e) {
                    'function' != typeof e && (e = Function('' + e));
                    for (var t = Array(arguments.length - 1), s = 0; s < t.length; s++)
                      t[s] = arguments[s + 1];
                    var i = { callback: e, args: t };
                    return (h[u] = i), o(u), u++;
                  }),
                  (d.clearImmediate = f);
              }
              function f(e) {
                delete h[e];
              }
              function p(e) {
                if (c) setTimeout(p, 0, e);
                else {
                  var t = h[e];
                  if (t) {
                    c = !0;
                    try {
                      !(function (e) {
                        var t = e.callback,
                          s = e.args;
                        switch (s.length) {
                          case 0:
                            t();
                            break;
                          case 1:
                            t(s[0]);
                            break;
                          case 2:
                            t(s[0], s[1]);
                            break;
                          case 3:
                            t(s[0], s[1], s[2]);
                            break;
                          default:
                            t.apply(void 0, s);
                        }
                      })(t);
                    } finally {
                      f(e), (c = !1);
                    }
                  }
                }
              }
            })('undefined' == typeof self ? (void 0 === s.g ? this : s.g) : self);
          },
        }[189](),
        (e.exports = {});
    },
    91960: function (e, t, s) {
      e.exports = s(18377);
    },
    61436: function (e, t, s) {
      'use strict';
      s.d(t, {
        S: function () {
          return y;
        },
      });
      var i = s(36076),
        r = s(29360),
        a = s(30558),
        n = s(92472),
        o = class extends n.F {
          #e;
          #t;
          #s;
          #i;
          #r;
          #a;
          #n;
          constructor(e) {
            super(),
              (this.#n = !1),
              (this.#a = e.defaultOptions),
              this.setOptions(e.options),
              (this.#r = []),
              (this.#s = e.cache),
              (this.queryKey = e.queryKey),
              (this.queryHash = e.queryHash),
              (this.#e =
                e.state ||
                (function (e) {
                  let t = 'function' == typeof e.initialData ? e.initialData() : e.initialData,
                    s = void 0 !== t,
                    i = s
                      ? 'function' == typeof e.initialDataUpdatedAt
                        ? e.initialDataUpdatedAt()
                        : e.initialDataUpdatedAt
                      : 0;
                  return {
                    data: t,
                    dataUpdateCount: 0,
                    dataUpdatedAt: s ? (i ?? Date.now()) : 0,
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
              (this.state = this.#e),
              this.scheduleGc();
          }
          get meta() {
            return this.options.meta;
          }
          setOptions(e) {
            (this.options = { ...this.#a, ...e }), this.updateGcTime(this.options.gcTime);
          }
          optionalRemove() {
            this.#r.length || 'idle' !== this.state.fetchStatus || this.#s.remove(this);
          }
          setData(e, t) {
            let s = (0, i.oE)(this.state.data, e, this.options);
            return (
              this.#o({ data: s, type: 'success', dataUpdatedAt: t?.updatedAt, manual: t?.manual }),
              s
            );
          }
          setState(e, t) {
            this.#o({ type: 'setState', state: e, setStateOptions: t });
          }
          cancel(e) {
            let t = this.#i?.promise;
            return this.#i?.cancel(e), t ? t.then(i.ZT).catch(i.ZT) : Promise.resolve();
          }
          destroy() {
            super.destroy(), this.cancel({ silent: !0 });
          }
          reset() {
            this.destroy(), this.setState(this.#e);
          }
          isActive() {
            return this.#r.some((e) => !1 !== e.options.enabled);
          }
          isDisabled() {
            return this.getObserversCount() > 0 && !this.isActive();
          }
          isStale() {
            return (
              !!this.state.isInvalidated ||
              (this.getObserversCount() > 0
                ? this.#r.some((e) => e.getCurrentResult().isStale)
                : void 0 === this.state.data)
            );
          }
          isStaleByTime(e = 0) {
            return (
              this.state.isInvalidated ||
              void 0 === this.state.data ||
              !(0, i.Kp)(this.state.dataUpdatedAt, e)
            );
          }
          onFocus() {
            let e = this.#r.find((e) => e.shouldFetchOnWindowFocus());
            e?.refetch({ cancelRefetch: !1 }), this.#i?.continue();
          }
          onOnline() {
            let e = this.#r.find((e) => e.shouldFetchOnReconnect());
            e?.refetch({ cancelRefetch: !1 }), this.#i?.continue();
          }
          addObserver(e) {
            this.#r.includes(e) ||
              (this.#r.push(e),
              this.clearGcTimeout(),
              this.#s.notify({ type: 'observerAdded', query: this, observer: e }));
          }
          removeObserver(e) {
            this.#r.includes(e) &&
              ((this.#r = this.#r.filter((t) => t !== e)),
              this.#r.length ||
                (this.#i && (this.#n ? this.#i.cancel({ revert: !0 }) : this.#i.cancelRetry()),
                this.scheduleGc()),
              this.#s.notify({ type: 'observerRemoved', query: this, observer: e }));
          }
          getObserversCount() {
            return this.#r.length;
          }
          invalidate() {
            this.state.isInvalidated || this.#o({ type: 'invalidate' });
          }
          fetch(e, t) {
            if ('idle' !== this.state.fetchStatus) {
              if (void 0 !== this.state.data && t?.cancelRefetch) this.cancel({ silent: !0 });
              else if (this.#i) return this.#i.continueRetry(), this.#i.promise;
            }
            if ((e && this.setOptions(e), !this.options.queryFn)) {
              let e = this.#r.find((e) => e.options.queryFn);
              e && this.setOptions(e.options);
            }
            let s = new AbortController(),
              r = { queryKey: this.queryKey, meta: this.meta },
              n = (e) => {
                Object.defineProperty(e, 'signal', {
                  enumerable: !0,
                  get: () => ((this.#n = !0), s.signal),
                });
              };
            n(r);
            let o = {
              fetchOptions: t,
              options: this.options,
              queryKey: this.queryKey,
              state: this.state,
              fetchFn: () =>
                this.options.queryFn && this.options.queryFn !== i.CN
                  ? ((this.#n = !1), this.options.persister)
                    ? this.options.persister(this.options.queryFn, r, this)
                    : this.options.queryFn(r)
                  : Promise.reject(Error(`Missing queryFn: '${this.options.queryHash}'`)),
            };
            n(o),
              this.options.behavior?.onFetch(o, this),
              (this.#t = this.state),
              ('idle' === this.state.fetchStatus ||
                this.state.fetchMeta !== o.fetchOptions?.meta) &&
                this.#o({ type: 'fetch', meta: o.fetchOptions?.meta });
            let u = (e) => {
              ((0, a.DV)(e) && e.silent) || this.#o({ type: 'error', error: e }),
                (0, a.DV)(e) ||
                  (this.#s.config.onError?.(e, this),
                  this.#s.config.onSettled?.(this.state.data, e, this)),
                this.isFetchingOptimistic || this.scheduleGc(),
                (this.isFetchingOptimistic = !1);
            };
            return (
              (this.#i = (0, a.Mz)({
                fn: o.fetchFn,
                abort: s.abort.bind(s),
                onSuccess: (e) => {
                  if (void 0 === e) {
                    u(Error(`${this.queryHash} data is undefined`));
                    return;
                  }
                  this.setData(e),
                    this.#s.config.onSuccess?.(e, this),
                    this.#s.config.onSettled?.(e, this.state.error, this),
                    this.isFetchingOptimistic || this.scheduleGc(),
                    (this.isFetchingOptimistic = !1);
                },
                onError: u,
                onFail: (e, t) => {
                  this.#o({ type: 'failed', failureCount: e, error: t });
                },
                onPause: () => {
                  this.#o({ type: 'pause' });
                },
                onContinue: () => {
                  this.#o({ type: 'continue' });
                },
                retry: o.options.retry,
                retryDelay: o.options.retryDelay,
                networkMode: o.options.networkMode,
              })),
              this.#i.promise
            );
          }
          #o(e) {
            (this.state = ((t) => {
              switch (e.type) {
                case 'failed':
                  return { ...t, fetchFailureCount: e.failureCount, fetchFailureReason: e.error };
                case 'pause':
                  return { ...t, fetchStatus: 'paused' };
                case 'continue':
                  return { ...t, fetchStatus: 'fetching' };
                case 'fetch':
                  return {
                    ...t,
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                    fetchMeta: e.meta ?? null,
                    fetchStatus: (0, a.Kw)(this.options.networkMode) ? 'fetching' : 'paused',
                    ...(void 0 === t.data && { error: null, status: 'pending' }),
                  };
                case 'success':
                  return {
                    ...t,
                    data: e.data,
                    dataUpdateCount: t.dataUpdateCount + 1,
                    dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
                    error: null,
                    isInvalidated: !1,
                    status: 'success',
                    ...(!e.manual && {
                      fetchStatus: 'idle',
                      fetchFailureCount: 0,
                      fetchFailureReason: null,
                    }),
                  };
                case 'error':
                  let s = e.error;
                  if ((0, a.DV)(s) && s.revert && this.#t)
                    return { ...this.#t, fetchStatus: 'idle' };
                  return {
                    ...t,
                    error: s,
                    errorUpdateCount: t.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: t.fetchFailureCount + 1,
                    fetchFailureReason: s,
                    fetchStatus: 'idle',
                    status: 'error',
                  };
                case 'invalidate':
                  return { ...t, isInvalidated: !0 };
                case 'setState':
                  return { ...t, ...e.state };
              }
            })(this.state)),
              r.V.batch(() => {
                this.#r.forEach((e) => {
                  e.onQueryUpdate();
                }),
                  this.#s.notify({ query: this, type: 'updated', action: e });
              });
          }
        },
        u = s(94699),
        h = class extends u.l {
          constructor(e = {}) {
            super(), (this.config = e), (this.#u = new Map());
          }
          #u;
          build(e, t, s) {
            let r = t.queryKey,
              a = t.queryHash ?? (0, i.Rm)(r, t),
              n = this.get(a);
            return (
              n ||
                ((n = new o({
                  cache: this,
                  queryKey: r,
                  queryHash: a,
                  options: e.defaultQueryOptions(t),
                  state: s,
                  defaultOptions: e.getQueryDefaults(r),
                })),
                this.add(n)),
              n
            );
          }
          add(e) {
            this.#u.has(e.queryHash) ||
              (this.#u.set(e.queryHash, e), this.notify({ type: 'added', query: e }));
          }
          remove(e) {
            let t = this.#u.get(e.queryHash);
            t &&
              (e.destroy(),
              t === e && this.#u.delete(e.queryHash),
              this.notify({ type: 'removed', query: e }));
          }
          clear() {
            r.V.batch(() => {
              this.getAll().forEach((e) => {
                this.remove(e);
              });
            });
          }
          get(e) {
            return this.#u.get(e);
          }
          getAll() {
            return [...this.#u.values()];
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => (0, i._x)(t, e));
          }
          findAll(e = {}) {
            let t = this.getAll();
            return Object.keys(e).length > 0 ? t.filter((t) => (0, i._x)(e, t)) : t;
          }
          notify(e) {
            r.V.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          onFocus() {
            r.V.batch(() => {
              this.getAll().forEach((e) => {
                e.onFocus();
              });
            });
          }
          onOnline() {
            r.V.batch(() => {
              this.getAll().forEach((e) => {
                e.onOnline();
              });
            });
          }
        },
        c = s(46783),
        l = class extends u.l {
          constructor(e = {}) {
            super(), (this.config = e), (this.#h = []), (this.#c = 0);
          }
          #h;
          #c;
          #l;
          build(e, t, s) {
            let i = new c.m({
              mutationCache: this,
              mutationId: ++this.#c,
              options: e.defaultMutationOptions(t),
              state: s,
            });
            return this.add(i), i;
          }
          add(e) {
            this.#h.push(e), this.notify({ type: 'added', mutation: e });
          }
          remove(e) {
            (this.#h = this.#h.filter((t) => t !== e)),
              this.notify({ type: 'removed', mutation: e });
          }
          clear() {
            r.V.batch(() => {
              this.#h.forEach((e) => {
                this.remove(e);
              });
            });
          }
          getAll() {
            return this.#h;
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.#h.find((e) => (0, i.X7)(t, e));
          }
          findAll(e = {}) {
            return this.#h.filter((t) => (0, i.X7)(e, t));
          }
          notify(e) {
            r.V.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          resumePausedMutations() {
            return (
              (this.#l = (this.#l ?? Promise.resolve())
                .then(() => {
                  let e = this.#h.filter((e) => e.state.isPaused);
                  return r.V.batch(() =>
                    e.reduce((e, t) => e.then(() => t.continue().catch(i.ZT)), Promise.resolve())
                  );
                })
                .then(() => {
                  this.#l = void 0;
                })),
              this.#l
            );
          }
        },
        d = s(73198),
        f = s(11996);
      function p(e, { pages: t, pageParams: s }) {
        let i = t.length - 1;
        return e.getNextPageParam(t[i], t, s[i], s);
      }
      var y = class {
        #d;
        #f;
        #a;
        #p;
        #y;
        #m;
        #g;
        #v;
        constructor(e = {}) {
          (this.#d = e.queryCache || new h()),
            (this.#f = e.mutationCache || new l()),
            (this.#a = e.defaultOptions || {}),
            (this.#p = new Map()),
            (this.#y = new Map()),
            (this.#m = 0);
        }
        mount() {
          this.#m++,
            1 === this.#m &&
              ((this.#g = d.j.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), this.#d.onFocus());
              })),
              (this.#v = f.N.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), this.#d.onOnline());
              })));
        }
        unmount() {
          this.#m--,
            0 === this.#m && (this.#g?.(), (this.#g = void 0), this.#v?.(), (this.#v = void 0));
        }
        isFetching(e) {
          return this.#d.findAll({ ...e, fetchStatus: 'fetching' }).length;
        }
        isMutating(e) {
          return this.#f.findAll({ ...e, status: 'pending' }).length;
        }
        getQueryData(e) {
          let t = this.defaultQueryOptions({ queryKey: e });
          return this.#d.get(t.queryHash)?.state.data;
        }
        ensureQueryData(e) {
          let t = this.getQueryData(e.queryKey);
          if (void 0 === t) return this.fetchQuery(e);
          {
            let s = this.defaultQueryOptions(e),
              i = this.#d.build(this, s);
            return (
              e.revalidateIfStale && i.isStaleByTime(s.staleTime) && this.prefetchQuery(s),
              Promise.resolve(t)
            );
          }
        }
        getQueriesData(e) {
          return this.getQueryCache()
            .findAll(e)
            .map(({ queryKey: e, state: t }) => [e, t.data]);
        }
        setQueryData(e, t, s) {
          let r = this.defaultQueryOptions({ queryKey: e }),
            a = this.#d.get(r.queryHash),
            n = a?.state.data,
            o = (0, i.SE)(t, n);
          if (void 0 !== o) return this.#d.build(this, r).setData(o, { ...s, manual: !0 });
        }
        setQueriesData(e, t, s) {
          return r.V.batch(() =>
            this.getQueryCache()
              .findAll(e)
              .map(({ queryKey: e }) => [e, this.setQueryData(e, t, s)])
          );
        }
        getQueryState(e) {
          let t = this.defaultQueryOptions({ queryKey: e });
          return this.#d.get(t.queryHash)?.state;
        }
        removeQueries(e) {
          let t = this.#d;
          r.V.batch(() => {
            t.findAll(e).forEach((e) => {
              t.remove(e);
            });
          });
        }
        resetQueries(e, t) {
          let s = this.#d,
            i = { type: 'active', ...e };
          return r.V.batch(
            () => (
              s.findAll(e).forEach((e) => {
                e.reset();
              }),
              this.refetchQueries(i, t)
            )
          );
        }
        cancelQueries(e = {}, t = {}) {
          let s = { revert: !0, ...t };
          return Promise.all(r.V.batch(() => this.#d.findAll(e).map((e) => e.cancel(s))))
            .then(i.ZT)
            .catch(i.ZT);
        }
        invalidateQueries(e = {}, t = {}) {
          return r.V.batch(() => {
            if (
              (this.#d.findAll(e).forEach((e) => {
                e.invalidate();
              }),
              'none' === e.refetchType)
            )
              return Promise.resolve();
            let s = { ...e, type: e.refetchType ?? e.type ?? 'active' };
            return this.refetchQueries(s, t);
          });
        }
        refetchQueries(e = {}, t) {
          let s = { ...t, cancelRefetch: t?.cancelRefetch ?? !0 };
          return Promise.all(
            r.V.batch(() =>
              this.#d
                .findAll(e)
                .filter((e) => !e.isDisabled())
                .map((e) => {
                  let t = e.fetch(void 0, s);
                  return (
                    s.throwOnError || (t = t.catch(i.ZT)),
                    'paused' === e.state.fetchStatus ? Promise.resolve() : t
                  );
                })
            )
          ).then(i.ZT);
        }
        fetchQuery(e) {
          let t = this.defaultQueryOptions(e);
          void 0 === t.retry && (t.retry = !1);
          let s = this.#d.build(this, t);
          return s.isStaleByTime(t.staleTime) ? s.fetch(t) : Promise.resolve(s.state.data);
        }
        prefetchQuery(e) {
          return this.fetchQuery(e).then(i.ZT).catch(i.ZT);
        }
        fetchInfiniteQuery(e) {
          var t;
          return (
            (e.behavior =
              ((t = e.pages),
              {
                onFetch: (e, s) => {
                  let r = async () => {
                    let s;
                    let r = e.options,
                      a = e.fetchOptions?.meta?.fetchMore?.direction,
                      n = e.state.data?.pages || [],
                      o = e.state.data?.pageParams || [],
                      u = !1,
                      h = (t) => {
                        Object.defineProperty(t, 'signal', {
                          enumerable: !0,
                          get: () => (
                            e.signal.aborted
                              ? (u = !0)
                              : e.signal.addEventListener('abort', () => {
                                  u = !0;
                                }),
                            e.signal
                          ),
                        });
                      },
                      c =
                        e.options.queryFn && e.options.queryFn !== i.CN
                          ? e.options.queryFn
                          : () =>
                              Promise.reject(Error(`Missing queryFn: '${e.options.queryHash}'`)),
                      l = async (t, s, r) => {
                        if (u) return Promise.reject();
                        if (null == s && t.pages.length) return Promise.resolve(t);
                        let a = {
                          queryKey: e.queryKey,
                          pageParam: s,
                          direction: r ? 'backward' : 'forward',
                          meta: e.options.meta,
                        };
                        h(a);
                        let n = await c(a),
                          { maxPages: o } = e.options,
                          l = r ? i.Ht : i.VX;
                        return { pages: l(t.pages, n, o), pageParams: l(t.pageParams, s, o) };
                      };
                    if (a && n.length) {
                      let e = 'backward' === a,
                        t = { pages: n, pageParams: o },
                        i = (
                          e
                            ? function (e, { pages: t, pageParams: s }) {
                                return e.getPreviousPageParam?.(t[0], t, s[0], s);
                              }
                            : p
                        )(r, t);
                      s = await l(t, i, e);
                    } else {
                      s = await l({ pages: [], pageParams: [] }, o[0] ?? r.initialPageParam);
                      let e = t ?? n.length;
                      for (let t = 1; t < e; t++) {
                        let e = p(r, s);
                        s = await l(s, e);
                      }
                    }
                    return s;
                  };
                  e.options.persister
                    ? (e.fetchFn = () =>
                        e.options.persister?.(
                          r,
                          { queryKey: e.queryKey, meta: e.options.meta, signal: e.signal },
                          s
                        ))
                    : (e.fetchFn = r);
                },
              })),
            this.fetchQuery(e)
          );
        }
        prefetchInfiniteQuery(e) {
          return this.fetchInfiniteQuery(e).then(i.ZT).catch(i.ZT);
        }
        resumePausedMutations() {
          return f.N.isOnline() ? this.#f.resumePausedMutations() : Promise.resolve();
        }
        getQueryCache() {
          return this.#d;
        }
        getMutationCache() {
          return this.#f;
        }
        getDefaultOptions() {
          return this.#a;
        }
        setDefaultOptions(e) {
          this.#a = e;
        }
        setQueryDefaults(e, t) {
          this.#p.set((0, i.Ym)(e), { queryKey: e, defaultOptions: t });
        }
        getQueryDefaults(e) {
          let t = [...this.#p.values()],
            s = {};
          return (
            t.forEach((t) => {
              (0, i.to)(e, t.queryKey) && (s = { ...s, ...t.defaultOptions });
            }),
            s
          );
        }
        setMutationDefaults(e, t) {
          this.#y.set((0, i.Ym)(e), { mutationKey: e, defaultOptions: t });
        }
        getMutationDefaults(e) {
          let t = [...this.#y.values()],
            s = {};
          return (
            t.forEach((t) => {
              (0, i.to)(e, t.mutationKey) && (s = { ...s, ...t.defaultOptions });
            }),
            s
          );
        }
        defaultQueryOptions(e) {
          if (e._defaulted) return e;
          let t = {
            ...this.#a.queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0,
          };
          return (
            t.queryHash || (t.queryHash = (0, i.Rm)(t.queryKey, t)),
            void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = 'always' !== t.networkMode),
            void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
            !t.networkMode && t.persister && (t.networkMode = 'offlineFirst'),
            !0 !== t.enabled && t.queryFn === i.CN && (t.enabled = !1),
            t
          );
        }
        defaultMutationOptions(e) {
          return e?._defaulted
            ? e
            : {
                ...this.#a.mutations,
                ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
                ...e,
                _defaulted: !0,
              };
        }
        clear() {
          this.#d.clear(), this.#f.clear();
        }
      };
    },
    44570: function (e, t, s) {
      'use strict';
      s.d(t, {
        c: function () {
          return p;
        },
      });
      var i = s(58854),
        r = s(91960),
        a = s(76896),
        n = () => {
          window.va ||
            (window.va = function (...e) {
              (window.vaq = window.vaq || []).push(e);
            });
        };
      function o() {
        return 'undefined' != typeof window;
      }
      function u() {
        return 'production';
      }
      function h() {
        return 'development' === ((o() ? window.vam : u()) || 'production');
      }
      function c(e) {
        return RegExp(`/${e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?=[/?#]|$)`);
      }
      function l(e) {
        return (
          (0, i.useEffect)(() => {
            var t;
            e.beforeSend && (null == (t = window.va) || t.call(window, 'beforeSend', e.beforeSend));
          }, [e.beforeSend]),
          (0, i.useEffect)(() => {
            !(function (e = { debug: !0 }) {
              var t;
              if (!o()) return;
              (function (e = 'auto') {
                if ('auto' === e) {
                  window.vam = u();
                  return;
                }
                window.vam = e;
              })(e.mode),
                n(),
                e.beforeSend &&
                  (null == (t = window.va) || t.call(window, 'beforeSend', e.beforeSend));
              let s = e.scriptSrc
                ? e.scriptSrc
                : h()
                  ? 'https://va.vercel-scripts.com/v1/script.debug.js'
                  : e.basePath
                    ? `${e.basePath}/insights/script.js`
                    : '/_vercel/insights/script.js';
              if (document.head.querySelector(`script[src*="${s}"]`)) return;
              let i = document.createElement('script');
              (i.src = s),
                (i.defer = !0),
                (i.dataset.sdkn = '@vercel/analytics' + (e.framework ? `/${e.framework}` : '')),
                (i.dataset.sdkv = '1.5.0'),
                e.disableAutoTrack && (i.dataset.disableAutoTrack = '1'),
                e.endpoint
                  ? (i.dataset.endpoint = e.endpoint)
                  : e.basePath && (i.dataset.endpoint = `${e.basePath}/insights`),
                e.dsn && (i.dataset.dsn = e.dsn),
                (i.onerror = () => {
                  let e = h()
                    ? 'Please check if any ad blockers are enabled and try again.'
                    : 'Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.';
                  console.log(`[Vercel Web Analytics] Failed to load script from ${s}. ${e}`);
                }),
                h() && !1 === e.debug && (i.dataset.debug = 'false'),
                document.head.appendChild(i);
            })({
              framework: e.framework || 'react',
              basePath:
                e.basePath ??
                (function () {
                  if (void 0 !== a && void 0 !== a.env)
                    return a.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
                })(),
              ...(void 0 !== e.route && { disableAutoTrack: !0 }),
              ...e,
            });
          }, []),
          (0, i.useEffect)(() => {
            e.route &&
              e.path &&
              (function ({ route: e, path: t }) {
                var s;
                null == (s = window.va) || s.call(window, 'pageview', { route: e, path: t });
              })({ route: e.route, path: e.path });
          }, [e.route, e.path]),
          null
        );
      }
      var d = () => {
        let e = (0, r.useParams)(),
          t = (0, r.useSearchParams)(),
          s = (0, r.usePathname)();
        return e
          ? {
              route: (function (e, t) {
                if (!e || !t) return e;
                let s = e;
                try {
                  let e = Object.entries(t);
                  for (let [t, i] of e)
                    if (!Array.isArray(i)) {
                      let e = c(i);
                      e.test(s) && (s = s.replace(e, `/[${t}]`));
                    }
                  for (let [t, i] of e)
                    if (Array.isArray(i)) {
                      let e = c(i.join('/'));
                      e.test(s) && (s = s.replace(e, `/[...${t}]`));
                    }
                  return s;
                } catch (t) {
                  return e;
                }
              })(s, Object.keys(e).length ? e : Object.fromEntries(t.entries())),
              path: s,
            }
          : { route: null, path: s };
      };
      function f(e) {
        let { route: t, path: s } = d();
        return i.createElement(l, {
          path: s,
          route: t,
          ...e,
          basePath: (function () {
            if (void 0 !== a && void 0 !== a.env)
              return a.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH;
          })(),
          framework: 'next',
        });
      }
      function p(e) {
        return i.createElement(i.Suspense, { fallback: null }, i.createElement(f, { ...e }));
      }
    },
  },
]);
