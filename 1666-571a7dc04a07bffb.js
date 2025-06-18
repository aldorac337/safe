'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1666],
  {
    46783: function (e, t, r) {
      r.d(t, {
        R: function () {
          return s;
        },
        m: function () {
          return a;
        },
      });
      var n = r(29360),
        i = r(92472),
        o = r(30558),
        a = class extends i.F {
          #e;
          #t;
          #r;
          #n;
          constructor(e) {
            super(),
              (this.mutationId = e.mutationId),
              (this.#t = e.defaultOptions),
              (this.#r = e.mutationCache),
              (this.#e = []),
              (this.state = e.state || s()),
              this.setOptions(e.options),
              this.scheduleGc();
          }
          setOptions(e) {
            (this.options = { ...this.#t, ...e }), this.updateGcTime(this.options.gcTime);
          }
          get meta() {
            return this.options.meta;
          }
          addObserver(e) {
            this.#e.includes(e) ||
              (this.#e.push(e),
              this.clearGcTimeout(),
              this.#r.notify({ type: 'observerAdded', mutation: this, observer: e }));
          }
          removeObserver(e) {
            (this.#e = this.#e.filter((t) => t !== e)),
              this.scheduleGc(),
              this.#r.notify({ type: 'observerRemoved', mutation: this, observer: e });
          }
          optionalRemove() {
            this.#e.length ||
              ('pending' === this.state.status ? this.scheduleGc() : this.#r.remove(this));
          }
          continue() {
            return this.#n?.continue() ?? this.execute(this.state.variables);
          }
          async execute(e) {
            let t = 'pending' === this.state.status;
            try {
              if (!t) {
                this.#i({ type: 'pending', variables: e }),
                  await this.#r.config.onMutate?.(e, this);
                let t = await this.options.onMutate?.(e);
                t !== this.state.context && this.#i({ type: 'pending', context: t, variables: e });
              }
              let r = await ((this.#n = (0, o.Mz)({
                fn: () =>
                  this.options.mutationFn
                    ? this.options.mutationFn(e)
                    : Promise.reject(Error('No mutationFn found')),
                onFail: (e, t) => {
                  this.#i({ type: 'failed', failureCount: e, error: t });
                },
                onPause: () => {
                  this.#i({ type: 'pause' });
                },
                onContinue: () => {
                  this.#i({ type: 'continue' });
                },
                retry: this.options.retry ?? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
              })),
              this.#n.promise);
              return (
                await this.#r.config.onSuccess?.(r, e, this.state.context, this),
                await this.options.onSuccess?.(r, e, this.state.context),
                await this.#r.config.onSettled?.(
                  r,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                ),
                await this.options.onSettled?.(r, null, e, this.state.context),
                this.#i({ type: 'success', data: r }),
                r
              );
            } catch (t) {
              try {
                throw (
                  (await this.#r.config.onError?.(t, e, this.state.context, this),
                  await this.options.onError?.(t, e, this.state.context),
                  await this.#r.config.onSettled?.(
                    void 0,
                    t,
                    this.state.variables,
                    this.state.context,
                    this
                  ),
                  await this.options.onSettled?.(void 0, t, e, this.state.context),
                  t)
                );
              } finally {
                this.#i({ type: 'error', error: t });
              }
            }
          }
          #i(e) {
            (this.state = ((t) => {
              switch (e.type) {
                case 'failed':
                  return { ...t, failureCount: e.failureCount, failureReason: e.error };
                case 'pause':
                  return { ...t, isPaused: !0 };
                case 'continue':
                  return { ...t, isPaused: !1 };
                case 'pending':
                  return {
                    ...t,
                    context: e.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: !(0, o.Kw)(this.options.networkMode),
                    status: 'pending',
                    variables: e.variables,
                    submittedAt: Date.now(),
                  };
                case 'success':
                  return {
                    ...t,
                    data: e.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: 'success',
                    isPaused: !1,
                  };
                case 'error':
                  return {
                    ...t,
                    data: void 0,
                    error: e.error,
                    failureCount: t.failureCount + 1,
                    failureReason: e.error,
                    isPaused: !1,
                    status: 'error',
                  };
              }
            })(this.state)),
              n.V.batch(() => {
                this.#e.forEach((t) => {
                  t.onMutationUpdate(e);
                }),
                  this.#r.notify({ mutation: this, type: 'updated', action: e });
              });
          }
        };
      function s() {
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
    92472: function (e, t, r) {
      r.d(t, {
        F: function () {
          return i;
        },
      });
      var n = r(36076),
        i = class {
          #o;
          destroy() {
            this.clearGcTimeout();
          }
          scheduleGc() {
            this.clearGcTimeout(),
              (0, n.PN)(this.gcTime) &&
                (this.#o = setTimeout(() => {
                  this.optionalRemove();
                }, this.gcTime));
          }
          updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ?? (n.sk ? 1 / 0 : 3e5));
          }
          clearGcTimeout() {
            this.#o && (clearTimeout(this.#o), (this.#o = void 0));
          }
        };
    },
    29297: function (e, t, r) {
      r.d(t, {
        D: function () {
          return d;
        },
      });
      var n = r(58854),
        i = r(46783),
        o = r(29360),
        a = r(94699),
        s = r(36076),
        u = class extends a.l {
          #a;
          #s = void 0;
          #u;
          #c;
          constructor(e, t) {
            super(), (this.#a = e), this.setOptions(t), this.bindMethods(), this.#l();
          }
          bindMethods() {
            (this.mutate = this.mutate.bind(this)), (this.reset = this.reset.bind(this));
          }
          setOptions(e) {
            let t = this.options;
            (this.options = this.#a.defaultMutationOptions(e)),
              (0, s.VS)(this.options, t) ||
                this.#a
                  .getMutationCache()
                  .notify({ type: 'observerOptionsUpdated', mutation: this.#u, observer: this }),
              t?.mutationKey &&
              this.options.mutationKey &&
              (0, s.Ym)(t.mutationKey) !== (0, s.Ym)(this.options.mutationKey)
                ? this.reset()
                : this.#u?.setOptions(this.options);
          }
          onUnsubscribe() {
            this.hasListeners() || this.#u?.removeObserver(this);
          }
          onMutationUpdate(e) {
            this.#l(), this.#d(e);
          }
          getCurrentResult() {
            return this.#s;
          }
          reset() {
            this.#u?.removeObserver(this), (this.#u = void 0), this.#l(), this.#d();
          }
          mutate(e, t) {
            return (
              (this.#c = t),
              this.#u?.removeObserver(this),
              (this.#u = this.#a.getMutationCache().build(this.#a, this.options)),
              this.#u.addObserver(this),
              this.#u.execute(e)
            );
          }
          #l() {
            let e = this.#u?.state ?? (0, i.R)();
            this.#s = {
              ...e,
              isPending: 'pending' === e.status,
              isSuccess: 'success' === e.status,
              isError: 'error' === e.status,
              isIdle: 'idle' === e.status,
              mutate: this.mutate,
              reset: this.reset,
            };
          }
          #d(e) {
            o.V.batch(() => {
              if (this.#c && this.hasListeners()) {
                let t = this.#s.variables,
                  r = this.#s.context;
                e?.type === 'success'
                  ? (this.#c.onSuccess?.(e.data, t, r), this.#c.onSettled?.(e.data, null, t, r))
                  : e?.type === 'error' &&
                    (this.#c.onError?.(e.error, t, r), this.#c.onSettled?.(void 0, e.error, t, r));
              }
              this.listeners.forEach((e) => {
                e(this.#s);
              });
            });
          }
        },
        c = r(89721),
        l = r(31370);
      function d(e, t) {
        let r = (0, c.NL)(t),
          [i] = n.useState(() => new u(r, e));
        n.useEffect(() => {
          i.setOptions(e);
        }, [i, e]);
        let a = n.useSyncExternalStore(
            n.useCallback((e) => i.subscribe(o.V.batchCalls(e)), [i]),
            () => i.getCurrentResult(),
            () => i.getCurrentResult()
          ),
          s = n.useCallback(
            (e, t) => {
              i.mutate(e, t).catch(l.Z);
            },
            [i]
          );
        if (a.error && (0, l.L)(i.options.throwOnError, [a.error])) throw a.error;
        return { ...a, mutate: s, mutateAsync: a.mutate };
      }
    },
    72684: function (e, t, r) {
      r.d(t, {
        C: function () {
          return P;
        },
        a: function () {
          return eo;
        },
        b: function () {
          return ei;
        },
        c: function () {
          return en;
        },
        d: function () {
          return ea;
        },
        e: function () {
          return eu;
        },
        f: function () {
          return ev;
        },
        h: function () {
          return Z;
        },
        m: function () {
          return et;
        },
      });
      var n,
        i,
        o = { OPERATION_DEFINITION: 'OperationDefinition' };
      class a extends Error {
        constructor(e, t, r, n, i, o, a) {
          super(e),
            (this.name = 'GraphQLError'),
            (this.message = e),
            i && (this.path = i),
            t && (this.nodes = Array.isArray(t) ? t : [t]),
            r && (this.source = r),
            n && (this.positions = n),
            o && (this.originalError = o);
          var s = a;
          if (!s && o) {
            var u = o.extensions;
            u && 'object' == typeof u && (s = u);
          }
          this.extensions = s || {};
        }
        toJSON() {
          return { ...this, message: this.message };
        }
        toString() {
          return this.message;
        }
        get [Symbol.toStringTag]() {
          return 'GraphQLError';
        }
      }
      function s(e) {
        return new a(`Syntax Error: Unexpected token at ${i} in ${e}`);
      }
      function u(e) {
        if (((e.lastIndex = i), e.test(n))) return n.slice(i, (i = e.lastIndex));
      }
      var c = / +(?=[^\s])/y;
      function l() {
        for (
          var e = 0 | n.charCodeAt(i++);
          9 === e || 10 === e || 13 === e || 32 === e || 35 === e || 44 === e || 65279 === e;
          e = 0 | n.charCodeAt(i++)
        )
          if (35 === e) for (; 10 !== (e = n.charCodeAt(i++)) && 13 !== e; );
        i--;
      }
      var d = /[_A-Za-z]\w*/y;
      function f() {
        var e;
        if ((e = u(d))) return { kind: 'Name', value: e };
      }
      var p = /(?:null|true|false)/y,
        h = /\$[_A-Za-z]\w*/y,
        y = /-?\d+/y,
        v = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y,
        m = /\\/g,
        g = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y,
        b = /"(?:"|[^\r\n]*?[^\\]")/y;
      function x(e) {
        if ((r = u(p)))
          t = 'null' === r ? { kind: 'NullValue' } : { kind: 'BooleanValue', value: 'true' === r };
        else if (!e && (r = u(h)))
          t = { kind: 'Variable', name: { kind: 'Name', value: r.slice(1) } };
        else if ((r = u(y))) {
          var t,
            r,
            o = r;
          t = (r = u(v)) ? { kind: 'FloatValue', value: o + r } : { kind: 'IntValue', value: o };
        } else if ((r = u(d))) t = { kind: 'EnumValue', value: r };
        else if ((r = u(g)))
          t = {
            kind: 'StringValue',
            value: (function (e) {
              for (
                var t = e.split('\n'), r = '', n = 0, i = 0, o = t.length - 1, a = 0;
                a < t.length;
                a++
              )
                (c.lastIndex = 0),
                  c.test(t[a]) &&
                    (a && (!n || c.lastIndex < n) && (n = c.lastIndex), (i = i || a), (o = a));
              for (var s = i; s <= o; s++)
                s !== i && (r += '\n'), (r += t[s].slice(n).replace(/\\"""/g, '"""'));
              return r;
            })(r.slice(3, -3)),
            block: !0,
          };
        else if ((r = u(b)))
          t = { kind: 'StringValue', value: m.test(r) ? JSON.parse(r) : r.slice(1, -1), block: !1 };
        else if (
          (t =
            (function (e) {
              var t;
              if (91 === n.charCodeAt(i)) {
                i++, l();
                for (var r = []; (t = x(e)); ) r.push(t);
                if (93 !== n.charCodeAt(i++)) throw s('ListValue');
                return l(), { kind: 'ListValue', values: r };
              }
            })(e) ||
            (function (e) {
              if (123 === n.charCodeAt(i)) {
                i++, l();
                for (var t, r = []; (t = f()); ) {
                  if ((l(), 58 !== n.charCodeAt(i++))) throw s('ObjectField');
                  l();
                  var o = x(e);
                  if (!o) throw s('ObjectField');
                  r.push({ kind: 'ObjectField', name: t, value: o });
                }
                if (125 !== n.charCodeAt(i++)) throw s('ObjectValue');
                return l(), { kind: 'ObjectValue', fields: r };
              }
            })(e))
        )
          return t;
        return l(), t;
      }
      function w(e) {
        var t = [];
        if ((l(), 40 === n.charCodeAt(i))) {
          for (i++, l(); (r = f()); ) {
            if ((l(), 58 !== n.charCodeAt(i++))) throw s('Argument');
            l();
            var r,
              o = x(e);
            if (!o) throw s('Argument');
            t.push({ kind: 'Argument', name: r, value: o });
          }
          if (!t.length || 41 !== n.charCodeAt(i++)) throw s('Argument');
          l();
        }
        return t;
      }
      function k(e) {
        var t = [];
        for (l(); 64 === n.charCodeAt(i); ) {
          i++;
          var r = f();
          if (!r) throw s('Directive');
          l(), t.push({ kind: 'Directive', name: r, arguments: w(e) });
        }
        return t;
      }
      var S = /on/y;
      function O() {
        if (u(S)) {
          l();
          var e = f();
          if (!e) throw s('NamedType');
          return l(), { kind: 'NamedType', name: e };
        }
      }
      var C = /\.\.\./y;
      function N() {
        var e;
        if ((l(), 123 === n.charCodeAt(i))) {
          i++, l();
          for (
            var t = [];
            (e =
              (function () {
                if (u(C)) {
                  l();
                  var e,
                    t = i;
                  if ((e = f()) && 'on' !== e.value)
                    return { kind: 'FragmentSpread', name: e, directives: k(!1) };
                  i = t;
                  var r = O(),
                    n = k(!1),
                    o = N();
                  if (!o) throw s('InlineFragment');
                  return {
                    kind: 'InlineFragment',
                    typeCondition: r,
                    directives: n,
                    selectionSet: o,
                  };
                }
              })() ||
              (function () {
                var e,
                  t = f();
                if (t) {
                  if ((l(), 58 === n.charCodeAt(i))) {
                    if ((i++, l(), (e = t), !(t = f()))) throw s('Field');
                    l();
                  }
                  return {
                    kind: 'Field',
                    alias: e,
                    name: t,
                    arguments: w(!1),
                    directives: k(!1),
                    selectionSet: N(),
                  };
                }
              })());

          )
            t.push(e);
          if (!t.length || 125 !== n.charCodeAt(i++)) throw s('SelectionSet');
          return l(), { kind: 'SelectionSet', selections: t };
        }
      }
      var E = /fragment/y,
        A = /(?:query|mutation|subscription)/y,
        T = (e) => !(!e || !e.length),
        I = {
          OperationDefinition(e) {
            if ('query' === e.operation && !e.name && !T(e.variableDefinitions) && !T(e.directives))
              return I.SelectionSet(e.selectionSet);
            var t = e.operation;
            return (
              e.name && (t += ' ' + e.name.value),
              T(e.variableDefinitions) &&
                (e.name || (t += ' '),
                (t += '(' + e.variableDefinitions.map(I.VariableDefinition).join(', ') + ')')),
              T(e.directives) && (t += ' ' + e.directives.map(I.Directive).join(' ')),
              t + ' ' + I.SelectionSet(e.selectionSet)
            );
          },
          VariableDefinition(e) {
            var t = I.Variable(e.variable) + ': ' + j(e.type);
            return (
              e.defaultValue && (t += ' = ' + j(e.defaultValue)),
              T(e.directives) && (t += ' ' + e.directives.map(I.Directive).join(' ')),
              t
            );
          },
          Field(e) {
            var t = (e.alias ? e.alias.value + ': ' : '') + e.name.value;
            if (T(e.arguments)) {
              var r = e.arguments.map(I.Argument),
                n = t + '(' + r.join(', ') + ')';
              t = n.length > 80 ? t + '(\n  ' + r.join('\n').replace(/\n/g, '\n  ') + '\n)' : n;
            }
            return (
              T(e.directives) && (t += ' ' + e.directives.map(I.Directive).join(' ')),
              e.selectionSet ? t + ' ' + I.SelectionSet(e.selectionSet) : t
            );
          },
          StringValue: (e) =>
            e.block
              ? '"""\n' + e.value.replace(/"""/g, '\\"""') + '\n"""'
              : JSON.stringify(e.value),
          BooleanValue: (e) => '' + e.value,
          NullValue: (e) => 'null',
          IntValue: (e) => e.value,
          FloatValue: (e) => e.value,
          EnumValue: (e) => e.value,
          Name: (e) => e.value,
          Variable: (e) => '$' + e.name.value,
          ListValue: (e) => '[' + e.values.map(j).join(', ') + ']',
          ObjectValue: (e) => '{' + e.fields.map(I.ObjectField).join(', ') + '}',
          ObjectField: (e) => e.name.value + ': ' + j(e.value),
          Document: (e) => (T(e.definitions) ? e.definitions.map(j).join('\n\n') : ''),
          SelectionSet: (e) =>
            '{\n  ' + e.selections.map(j).join('\n').replace(/\n/g, '\n  ') + '\n}',
          Argument: (e) => e.name.value + ': ' + j(e.value),
          FragmentSpread(e) {
            var t = '...' + e.name.value;
            return T(e.directives) && (t += ' ' + e.directives.map(I.Directive).join(' ')), t;
          },
          InlineFragment(e) {
            var t = '...';
            return (
              e.typeCondition && (t += ' on ' + e.typeCondition.name.value),
              T(e.directives) && (t += ' ' + e.directives.map(I.Directive).join(' ')),
              t + ' ' + j(e.selectionSet)
            );
          },
          FragmentDefinition(e) {
            var t = 'fragment ' + e.name.value;
            return (
              (t += ' on ' + e.typeCondition.name.value),
              T(e.directives) && (t += ' ' + e.directives.map(I.Directive).join(' ')),
              t + ' ' + j(e.selectionSet)
            );
          },
          Directive(e) {
            var t = '@' + e.name.value;
            return T(e.arguments) && (t += '(' + e.arguments.map(I.Argument).join(', ') + ')'), t;
          },
          NamedType: (e) => e.name.value,
          ListType: (e) => '[' + j(e.type) + ']',
          NonNullType: (e) => j(e.type) + '!',
        };
      function j(e) {
        return I[e.kind] ? I[e.kind](e) : '';
      }
      var M = r(58354),
        q = (e) =>
          e && e.message && (e.extensions || 'GraphQLError' === e.name)
            ? e
            : 'object' == typeof e && e.message
              ? new a(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {})
              : new a(e);
      class P extends Error {
        constructor(e) {
          var t = (e.graphQLErrors || []).map(q),
            r = ((e, t) => {
              var r = '';
              if (e) return `[Network] ${e.message}`;
              if (t) for (var n of t) r && (r += '\n'), (r += `[GraphQL] ${n.message}`);
              return r;
            })(e.networkError, t);
          super(r),
            (this.name = 'CombinedError'),
            (this.message = r),
            (this.graphQLErrors = t),
            (this.networkError = e.networkError),
            (this.response = e.response);
        }
        toString() {
          return this.message;
        }
      }
      var R = (e, t) => {
          for (var r = 0 | (t || 5381), n = 0, i = 0 | e.length; n < i; n++)
            r = (r << 5) + r + e.charCodeAt(n);
          return r;
        },
        D = new Set(),
        $ = new WeakMap(),
        V = (e) => {
          if (null === e || D.has(e)) return 'null';
          if ('object' != typeof e) return JSON.stringify(e) || '';
          if (e.toJSON) return V(e.toJSON());
          if (Array.isArray(e)) {
            var t = '[';
            for (var r of e) t.length > 1 && (t += ','), (t += V(r) || 'null');
            return t + ']';
          }
          if ((G !== L && e instanceof G) || (B !== L && e instanceof B)) return 'null';
          var n = Object.keys(e).sort();
          if (
            !n.length &&
            e.constructor &&
            Object.getPrototypeOf(e).constructor !== Object.prototype.constructor
          ) {
            var i = $.get(e) || Math.random().toString(36).slice(2);
            return $.set(e, i), V({ __key: i });
          }
          D.add(e);
          var o = '{';
          for (var a of n) {
            var s = V(e[a]);
            s && (o.length > 1 && (o += ','), (o += V(a) + ':' + s));
          }
          return D.delete(e), o + '}';
        },
        F = (e, t, r) => {
          if (null == r || 'object' != typeof r || r.toJSON || D.has(r));
          else if (Array.isArray(r))
            for (var n = 0, i = r.length; n < i; n++) F(e, `${t}.${n}`, r[n]);
          else if (r instanceof G || r instanceof B) e.set(t, r);
          else for (var o of (D.add(r), Object.keys(r))) F(e, `${t}.${o}`, r[o]);
        },
        _ = (e) => (D.clear(), V(e));
      class L {}
      var G = 'undefined' != typeof File ? File : L,
        B = 'undefined' != typeof Blob ? Blob : L,
        Q = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g,
        J = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g,
        X = (e, t) => (t % 2 == 0 ? e.replace(J, '\n') : e),
        z = (e) => e.split(Q).map(X).join('').trim(),
        U = new Map(),
        W = new Map(),
        Y = (e) => {
          var t;
          return (
            'string' == typeof e
              ? (t = z(e))
              : e.loc && W.get(e.__key) === e
                ? (t = e.loc.source.body)
                : ((t = U.get(e) || z(j(e))), U.set(e, t)),
            'string' == typeof e ||
              e.loc ||
              (e.loc = {
                start: 0,
                end: t.length,
                source: { body: t, name: 'gql', locationOffset: { line: 1, column: 1 } },
              }),
            t
          );
        },
        K = (e) => {
          var t = R(Y(e));
          if (e.definitions) {
            var r = ee(e);
            r &&
              (t = R(
                `
# ${r}`,
                t
              ));
          }
          return t;
        },
        H = (e) => {
          var t, r;
          return (
            'string' == typeof e
              ? ((t = K(e)),
                (r =
                  W.get(t) ||
                  ((n = 'string' == typeof e.body ? e.body : e),
                  (i = 0),
                  (function () {
                    l();
                    for (
                      var e, t = [];
                      (e =
                        (function () {
                          if (u(E)) {
                            l();
                            var e = f();
                            if (!e) throw s('FragmentDefinition');
                            l();
                            var t = O();
                            if (!t) throw s('FragmentDefinition');
                            var r = k(!1),
                              n = N();
                            if (!n) throw s('FragmentDefinition');
                            return {
                              kind: 'FragmentDefinition',
                              name: e,
                              typeCondition: t,
                              directives: r,
                              selectionSet: n,
                            };
                          }
                        })() ||
                        (function () {
                          var e,
                            t,
                            r = [],
                            o = [];
                          (e = u(A)) &&
                            (l(),
                            (t = f()),
                            (r = (function () {
                              var e,
                                t = [];
                              if ((l(), 40 === n.charCodeAt(i))) {
                                for (i++, l(); (e = u(h)); ) {
                                  if ((l(), 58 !== n.charCodeAt(i++)))
                                    throw s('VariableDefinition');
                                  var r = (function e() {
                                      var t;
                                      if ((l(), 91 === n.charCodeAt(i))) {
                                        i++, l();
                                        var r = e();
                                        if (!r || 93 !== n.charCodeAt(i++)) throw s('ListType');
                                        t = { kind: 'ListType', type: r };
                                      } else if ((t = f())) t = { kind: 'NamedType', name: t };
                                      else throw s('NamedType');
                                      return (l(), 33 === n.charCodeAt(i))
                                        ? (i++, l(), { kind: 'NonNullType', type: t })
                                        : t;
                                    })(),
                                    o = void 0;
                                  if (61 === n.charCodeAt(i) && (i++, l(), !(o = x(!0))))
                                    throw s('VariableDefinition');
                                  l(),
                                    t.push({
                                      kind: 'VariableDefinition',
                                      variable: {
                                        kind: 'Variable',
                                        name: { kind: 'Name', value: e.slice(1) },
                                      },
                                      type: r,
                                      defaultValue: o,
                                      directives: k(!0),
                                    });
                                }
                                if (41 !== n.charCodeAt(i++)) throw s('VariableDefinition');
                                l();
                              }
                              return t;
                            })()),
                            (o = k(!1)));
                          var a = N();
                          if (a)
                            return {
                              kind: 'OperationDefinition',
                              operation: e || 'query',
                              name: t,
                              variableDefinitions: r,
                              directives: o,
                              selectionSet: a,
                            };
                        })());

                    )
                      t.push(e);
                    return { kind: 'Document', definitions: t };
                  })())))
              : ((t = e.__key || K(e)), (r = W.get(t) || e)),
            r.loc || Y(r),
            (r.__key = t),
            W.set(t, r),
            r
          );
        },
        Z = (e, t, r) => {
          var n = t || {},
            i = H(e),
            o = _(n),
            a = i.__key;
          return '{}' !== o && (a = R(o, a)), { key: a, query: i, variables: n, extensions: r };
        },
        ee = (e) => {
          for (var t of e.definitions)
            if (t.kind === o.OPERATION_DEFINITION) return t.name ? t.name.value : void 0;
        },
        et = (e, t, r) => {
          if (!('data' in t || ('errors' in t && Array.isArray(t.errors))))
            throw Error('No Content');
          var n = 'subscription' === e.kind;
          return {
            operation: e,
            data: t.data,
            error: Array.isArray(t.errors)
              ? new P({ graphQLErrors: t.errors, response: r })
              : void 0,
            extensions: t.extensions ? { ...t.extensions } : void 0,
            hasNext: null == t.hasNext ? n : t.hasNext,
            stale: !1,
          };
        },
        er = (e, t) => {
          if (
            'object' == typeof e &&
            null != e &&
            (!e.constructor || e.constructor === Object || Array.isArray(e))
          ) {
            for (var r of ((e = Array.isArray(e) ? [...e] : { ...e }), Object.keys(t)))
              e[r] = er(e[r], t[r]);
            return e;
          }
          return t;
        },
        en = (e, t, r, n) => {
          var i = e.error ? e.error.graphQLErrors : [],
            o = !!e.extensions || !!t.extensions,
            a = { ...e.extensions, ...t.extensions },
            s = t.incremental;
          'path' in t && (s = [t]);
          var u = { data: e.data };
          if (s) {
            var c = function (e) {
              Array.isArray(e.errors) && i.push(...e.errors),
                e.extensions && (Object.assign(a, e.extensions), (o = !0));
              var t = 'data',
                r = u,
                s = [];
              if (e.path) s = e.path;
              else if (n) {
                var c = n.find((t) => t.id === e.id);
                s = e.subPath ? [...c.path, ...e.subPath] : c.path;
              }
              for (var l = 0, d = s.length; l < d; t = s[l++])
                r = r[t] = Array.isArray(r[t]) ? [...r[t]] : { ...r[t] };
              if (e.items)
                for (var f = +t >= 0 ? t : 0, p = 0, h = e.items.length; p < h; p++)
                  r[f + p] = er(r[f + p], e.items[p]);
              else void 0 !== e.data && (r[t] = er(r[t], e.data));
            };
            for (var l of s) c(l);
          } else (u.data = t.data || e.data), (i = t.errors || i);
          return {
            operation: e.operation,
            data: u.data,
            error: i.length ? new P({ graphQLErrors: i, response: r }) : void 0,
            extensions: o ? a : void 0,
            hasNext: null != t.hasNext ? t.hasNext : e.hasNext,
            stale: !1,
          };
        },
        ei = (e, t, r) => ({
          operation: e,
          data: void 0,
          error: new P({ networkError: t, response: r }),
          extensions: void 0,
          hasNext: !1,
          stale: !1,
        });
      function eo(e) {
        return {
          query:
            e.extensions && e.extensions.persistedQuery && !e.extensions.persistedQuery.miss
              ? void 0
              : Y(e.query),
          operationName: ee(e.query),
          variables: e.variables || void 0,
          extensions: e.extensions,
        };
      }
      var ea = (e, t) => {
          var r = 'query' === e.kind && e.context.preferGetMethod;
          if (!r || !t) return e.context.url;
          var n = new URL(e.context.url);
          for (var i in t) {
            var o = t[i];
            o && n.searchParams.set(i, 'object' == typeof o ? _(o) : o);
          }
          var a = n.toString();
          return a.length > 2047 && 'force' !== r
            ? ((e.context.preferGetMethod = !1), e.context.url)
            : a;
        },
        es = (e, t) => {
          if (t && !('query' === e.kind && e.context.preferGetMethod)) {
            var r,
              n,
              i = _(t),
              o =
                ((r = t.variables),
                (n = new Map()),
                (G !== L || B !== L) && (D.clear(), F(n, 'variables', r)),
                n);
            if (o.size) {
              var a = new FormData();
              a.append('operations', i), a.append('map', _({ ...[...o.keys()].map((e) => [e]) }));
              var s = 0;
              for (var u of o.values()) a.append('' + s++, u);
              return a;
            }
            return i;
          }
        },
        eu = (e, t) => {
          var r = {
              accept:
                'subscription' === e.kind
                  ? 'text/event-stream, multipart/mixed'
                  : 'application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed',
            },
            n =
              ('function' == typeof e.context.fetchOptions
                ? e.context.fetchOptions()
                : e.context.fetchOptions) || {};
          if (n.headers) for (var i in n.headers) r[i.toLowerCase()] = n.headers[i];
          var o = es(e, t);
          return (
            'string' != typeof o || r['content-type'] || (r['content-type'] = 'application/json'),
            { ...n, method: o ? 'POST' : 'GET', body: o, headers: r }
          );
        },
        ec = 'undefined' != typeof TextDecoder ? new TextDecoder() : null,
        el = /boundary="?([^=";]+)"?/i,
        ed = /data: ?([^\n]+)/,
        ef = (e) => ('Buffer' === e.constructor.name ? e.toString() : ec.decode(e));
      async function* ep(e) {
        if (e.body[Symbol.asyncIterator]) for await (var t of e.body) yield ef(t);
        else {
          var r,
            n = e.body.getReader();
          try {
            for (; !(r = await n.read()).done; ) yield ef(r.value);
          } finally {
            n.cancel();
          }
        }
      }
      async function* eh(e, t) {
        var r,
          n = '';
        for await (var i of e)
          for (n += i; (r = n.indexOf(t)) > -1; ) yield n.slice(0, r), (n = n.slice(r + t.length));
      }
      async function* ey(e, t, r) {
        var n = !0,
          i = null;
        try {
          yield await Promise.resolve();
          var o,
            a,
            s = (o = await (e.context.fetch || fetch)(t, r)).headers.get('Content-Type') || '';
          for await (var u of /multipart\/mixed/i.test(s)
            ? (async function* (e, t) {
                var r,
                  n = e.match(el),
                  i = '--' + (n ? n[1] : '-'),
                  o = !0;
                for await (var a of eh(ep(t), '\r\n' + i)) {
                  if (o) {
                    o = !1;
                    var s = a.indexOf(i);
                    if (!(s > -1)) continue;
                    a = a.slice(s + i.length);
                  }
                  try {
                    yield (r = JSON.parse(a.slice(a.indexOf('\r\n\r\n') + 4)));
                  } catch (e) {
                    if (!r) throw e;
                  }
                  if (r && !1 === r.hasNext) break;
                }
                r && !1 !== r.hasNext && (yield { hasNext: !1 });
              })(s, o)
            : /text\/event-stream/i.test(s)
              ? (async function* (e) {
                  var t;
                  for await (var r of eh(ep(e), '\n\n')) {
                    var n = r.match(ed);
                    if (n) {
                      var i = n[1];
                      try {
                        yield (t = JSON.parse(i));
                      } catch (e) {
                        if (!t) throw e;
                      }
                      if (t && !1 === t.hasNext) break;
                    }
                  }
                  t && !1 !== t.hasNext && (yield { hasNext: !1 });
                })(o)
              : /text\//i.test(s)
                ? (async function* (e) {
                    var t = await e.text();
                    try {
                      var r = JSON.parse(t);
                      yield r;
                    } catch (e) {
                      throw Error(t);
                    }
                  })(o)
                : (async function* (e) {
                    yield JSON.parse(await e.text());
                  })(o))
            u.pending && !i ? (a = u.pending) : u.pending && (a = [...a, ...u.pending]),
              (i = i ? en(i, u, o, a) : et(e, u, o)),
              (n = !1),
              yield i,
              (n = !0);
          i || (yield (i = et(e, {}, o)));
        } catch (t) {
          if (!n) throw t;
          yield ei(
            e,
            o && (o.status < 200 || o.status >= 300) && o.statusText ? Error(o.statusText) : t,
            o
          );
        }
      }
      function ev(e, t, r) {
        var n;
        return (
          'undefined' != typeof AbortController && (r.signal = (n = new AbortController()).signal),
          (0, M.ok)(() => {
            n && n.abort();
          })((0, M.hX)((e) => !!e)((0, M.fY)(ey(e, t, r))))
        );
      }
    },
    23217: function (e, t, r) {
      r.d(t, {
        Ek: function () {
          return l;
        },
        eI: function () {
          return p;
        },
        pV: function () {
          return c;
        },
      });
      var n = r(72684),
        i = r(58354),
        o = (e, t) => {
          if (!e || 'object' != typeof e) return e;
          if (Array.isArray(e)) return e.map((e) => o(e));
          if (!e || 'object' != typeof e || (!t && !('__typename' in e))) return e;
          var r = {};
          for (var n in e)
            '__typename' === n
              ? Object.defineProperty(r, '__typename', { enumerable: !1, value: e.__typename })
              : (r[n] = o(e[n]));
          return r;
        };
      function a(e) {
        var t = (t) => e(t);
        return (
          (t.toPromise = () =>
            (0, i.Vi)((0, i.qn)(1)((0, i.hX)((e) => !e.stale && !e.hasNext)(t)))),
          (t.then = (e, r) => t.toPromise().then(e, r)),
          (t.subscribe = (e) => (0, i.Ld)(e)(t)),
          t
        );
      }
      function s(e, t, r) {
        return { ...t, kind: e, context: t.context ? { ...t.context, ...r } : r || t.context };
      }
      var u = () => {},
        c =
          ({ forwardSubscription: e, enableAllOperations: t, isSubscriptionOperation: r }) =>
          ({ client: o, forward: a }) => {
            var u =
              r ||
              ((e) =>
                'subscription' === e.kind ||
                (!!t && ('query' === e.kind || 'mutation' === e.kind)));
            return (t) => {
              var r = (0, i.zg)((r) => {
                  var a,
                    { key: u } = r,
                    c = (0, i.hX)((e) => 'teardown' === e.kind && e.key === u)(t);
                  return (0, i.Rs)(c)(
                    ((a = e((0, n.a)(r), r)),
                    (0, i.Sy)((e) => {
                      var t,
                        i,
                        u = !1;
                      function c(t) {
                        e.next((i = i ? (0, n.c)(i, t) : (0, n.m)(r, t)));
                      }
                      return (
                        Promise.resolve().then(() => {
                          u ||
                            (t = a.subscribe({
                              next: c,
                              error(t) {
                                Array.isArray(t) ? c({ errors: t }) : e.next((0, n.b)(r, t)),
                                  e.complete();
                              },
                              complete() {
                                u ||
                                  ((u = !0),
                                  'subscription' === r.kind &&
                                    o.reexecuteOperation(s('teardown', r, r.context)),
                                  i && i.hasNext && c({ hasNext: !1 }),
                                  e.complete());
                              },
                            }));
                        }),
                        () => {
                          (u = !0), t && t.unsubscribe();
                        }
                      );
                    }))
                  );
                })((0, i.hX)((e) => 'teardown' !== e.kind && u(e))(t)),
                c = a((0, i.hX)((e) => 'teardown' === e.kind || !u(e))(t));
              return (0, i.TS)([r, c]);
            };
          },
        l =
          ({ forward: e, dispatchDebug: t }) =>
          (t) => {
            var r = (0, i.zg)((e) => {
                var r = (0, n.a)(e),
                  o = (0, n.d)(e, r),
                  a = (0, n.e)(e, r);
                return (0, i.Rs)((0, i.hX)((t) => 'teardown' === t.kind && t.key === e.key)(t))(
                  (0, n.f)(e, o, a)
                );
              })(
                (0, i.hX)(
                  (e) =>
                    'teardown' !== e.kind &&
                    ('subscription' !== e.kind || !!e.context.fetchSubscriptions)
                )(t)
              ),
              o = e(
                (0, i.hX)(
                  (e) =>
                    'teardown' === e.kind ||
                    ('subscription' === e.kind && !e.context.fetchSubscriptions)
                )(t)
              );
            return (0, i.TS)([r, o]);
          },
        d =
          (e) =>
          ({ client: t, forward: r, dispatchDebug: n }) =>
            e.reduceRight(
              (e, r) =>
                r({ client: t, forward: (t) => (0, i.BN)(e((0, i.BN)(t))), dispatchDebug(e) {} }),
              r
            ),
        f =
          ({ dispatchDebug: e }) =>
          (e) =>
            (0, i.hX)((e) => !1)(e),
        p = function e(t) {
          var r = 0,
            c = new Map(),
            l = new Map(),
            p = new Set(),
            h = [],
            y = {
              url: t.url,
              fetchSubscriptions: t.fetchSubscriptions,
              fetchOptions: t.fetchOptions,
              fetch: t.fetch,
              preferGetMethod: t.preferGetMethod,
              requestPolicy: t.requestPolicy || 'cache-first',
            },
            v = (0, i.nN)();
          function m(e) {
            ('mutation' !== e.kind && 'teardown' !== e.kind && p.has(e.key)) ||
              ('teardown' === e.kind ? p.delete(e.key) : 'mutation' !== e.kind && p.add(e.key),
              v.next(e));
          }
          var g = !1;
          function b(e) {
            if ((e && m(e), !g)) {
              for (g = !0; g && (e = h.shift()); ) m(e);
              g = !1;
            }
          }
          var x = (e) => {
              var r = (0, i.Rs)(
                (0, i.hX)((t) => 'teardown' === t.kind && t.key === e.key)(v.source)
              )(
                (0, i.hX)(
                  (t) =>
                    t.operation.kind === e.kind &&
                    t.operation.key === e.key &&
                    (!t.operation.context._instance ||
                      t.operation.context._instance === e.context._instance)
                )(S)
              );
              return (
                t.maskTypename && (r = (0, i.UI)((e) => ({ ...e, data: o(e.data, !0) }))(r)),
                (r =
                  'query' !== e.kind
                    ? (0, i.oE)((e) => !!e.hasNext, !0)(r)
                    : (0, i.wt)((t) => {
                        var r = (0, i._A)(t);
                        return t.stale || t.hasNext
                          ? r
                          : (0, i.TS)([
                              r,
                              (0, i.UI)(() => ((t.stale = !0), t))(
                                (0, i.qn)(1)((0, i.hX)((t) => t.key === e.key)(v.source))
                              ),
                            ]);
                      })(r)),
                (r =
                  'mutation' !== e.kind
                    ? (0, i.ok)(() => {
                        p.delete(e.key), c.delete(e.key), l.delete(e.key), (g = !1);
                        for (var t = h.length - 1; t >= 0; t--)
                          h[t].key === e.key && h.splice(t, 1);
                        m(s('teardown', e, e.context));
                      })(
                        (0, i.Mq)((t) => {
                          if (t.stale) {
                            for (var r of h)
                              if (r.key === t.operation.key) {
                                p.delete(r.key);
                                break;
                              }
                          } else t.hasNext || p.delete(e.key);
                          c.set(e.key, t);
                        })(r)
                      )
                    : (0, i.Hr)(() => {
                        m(e);
                      })(r)),
                (0, i.BN)(r)
              );
            },
            w = Object.assign(this instanceof e ? this : Object.create(e.prototype), {
              suspense: !!t.suspense,
              operations$: v.source,
              reexecuteOperation(e) {
                if ('teardown' === e.kind) b(e);
                else if ('mutation' === e.kind || l.has(e.key)) {
                  for (var t = !1, r = 0; r < h.length; r++) t = t || h[r].key === e.key;
                  t || p.delete(e.key), h.push(e), Promise.resolve().then(b);
                }
              },
              createRequestOperation: (e, t, n) => (
                n || (n = {}),
                s(e, t, {
                  _instance: 'mutation' === e ? (r = (r + 1) | 0) : void 0,
                  ...y,
                  ...n,
                  requestPolicy: n.requestPolicy || y.requestPolicy,
                  suspense: n.suspense || (!1 !== n.suspense && w.suspense),
                })
              ),
              executeRequestOperation: (e) =>
                'mutation' === e.kind
                  ? a(x(e))
                  : a(
                      (0, i.Vo)(() => {
                        var t = l.get(e.key);
                        t || l.set(e.key, (t = x(e))),
                          (t = (0, i.Hr)(() => {
                            b(e);
                          })(t));
                        var r = c.get(e.key);
                        return 'query' === e.kind && r && (r.stale || r.hasNext)
                          ? (0, i.wt)(i._A)(
                              (0, i.TS)([t, (0, i.hX)((t) => t === c.get(e.key))((0, i._A)(r))])
                            )
                          : t;
                      })
                    ),
              executeQuery(e, t) {
                var r = w.createRequestOperation('query', e, t);
                return w.executeRequestOperation(r);
              },
              executeSubscription(e, t) {
                var r = w.createRequestOperation('subscription', e, t);
                return w.executeRequestOperation(r);
              },
              executeMutation(e, t) {
                var r = w.createRequestOperation('mutation', e, t);
                return w.executeRequestOperation(r);
              },
              readQuery(e, t, r) {
                var n = null;
                return (
                  (0, i.Ld)((e) => {
                    n = e;
                  })(w.query(e, t, r)).unsubscribe(),
                  n
                );
              },
              query: (e, t, r) => w.executeQuery((0, n.h)(e, t), r),
              subscription: (e, t, r) => w.executeSubscription((0, n.h)(e, t), r),
              mutation: (e, t, r) => w.executeMutation((0, n.h)(e, t), r),
            }),
            k = d(t.exchanges),
            S = (0, i.BN)(
              k({ client: w, dispatchDebug: u, forward: f({ dispatchDebug: u }) })(v.source)
            );
          return (0, i.nY)(S), w;
        };
    },
    14640: function (e, t, r) {
      function n(e) {
        return null === e ? 'null' : Array.isArray(e) ? 'array' : typeof e;
      }
      function i(e) {
        return 'object' === n(e);
      }
      function o(e, t) {
        return e.length < 124 ? e : t;
      }
      function a(e) {
        if (!i(e)) throw Error(`Message is expected to be an object, but got ${n(e)}`);
        if (!e.type) throw Error("Message is missing the 'type' property");
        if ('string' != typeof e.type)
          throw Error(
            `Message is expects the 'type' property to be a string, but got ${n(e.type)}`
          );
        switch (e.type) {
          case d.ConnectionInit:
          case d.ConnectionAck:
          case d.Ping:
          case d.Pong:
            if (null != e.payload && !i(e.payload))
              throw Error(
                `"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`
              );
            break;
          case d.Subscribe:
            if ('string' != typeof e.id)
              throw Error(
                `"${e.type}" message expects the 'id' property to be a string, but got ${n(e.id)}`
              );
            if (!e.id) throw Error(`"${e.type}" message requires a non-empty 'id' property`);
            if (!i(e.payload))
              throw Error(
                `"${e.type}" message expects the 'payload' property to be an object, but got ${n(e.payload)}`
              );
            if ('string' != typeof e.payload.query)
              throw Error(
                `"${e.type}" message payload expects the 'query' property to be a string, but got ${n(e.payload.query)}`
              );
            if (null != e.payload.variables && !i(e.payload.variables))
              throw Error(
                `"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${n(e.payload.variables)}`
              );
            if (null != e.payload.operationName && 'string' !== n(e.payload.operationName))
              throw Error(
                `"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${n(e.payload.operationName)}`
              );
            if (null != e.payload.extensions && !i(e.payload.extensions))
              throw Error(
                `"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${n(e.payload.extensions)}`
              );
            break;
          case d.Next:
            if ('string' != typeof e.id)
              throw Error(
                `"${e.type}" message expects the 'id' property to be a string, but got ${n(e.id)}`
              );
            if (!e.id) throw Error(`"${e.type}" message requires a non-empty 'id' property`);
            if (!i(e.payload))
              throw Error(
                `"${e.type}" message expects the 'payload' property to be an object, but got ${n(e.payload)}`
              );
            break;
          case d.Error:
            var t;
            if ('string' != typeof e.id)
              throw Error(
                `"${e.type}" message expects the 'id' property to be a string, but got ${n(e.id)}`
              );
            if (!e.id) throw Error(`"${e.type}" message requires a non-empty 'id' property`);
            if (!(Array.isArray((t = e.payload)) && t.length > 0 && t.every((e) => 'message' in e)))
              throw Error(
                `"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`
              );
            break;
          case d.Complete:
            if ('string' != typeof e.id)
              throw Error(
                `"${e.type}" message expects the 'id' property to be a string, but got ${n(e.id)}`
              );
            if (!e.id) throw Error(`"${e.type}" message requires a non-empty 'id' property`);
            break;
          default:
            throw Error(`Invalid message 'type' property "${e.type}"`);
        }
        return e;
      }
      function s(e, t) {
        return a(e), JSON.stringify(e, t);
      }
      r.d(t, {
        eI: function () {
          return h;
        },
      }),
        ((u = l || (l = {}))[(u.InternalServerError = 4500)] = 'InternalServerError'),
        (u[(u.InternalClientError = 4005)] = 'InternalClientError'),
        (u[(u.BadRequest = 4400)] = 'BadRequest'),
        (u[(u.BadResponse = 4004)] = 'BadResponse'),
        (u[(u.Unauthorized = 4401)] = 'Unauthorized'),
        (u[(u.Forbidden = 4403)] = 'Forbidden'),
        (u[(u.SubprotocolNotAcceptable = 4406)] = 'SubprotocolNotAcceptable'),
        (u[(u.ConnectionInitialisationTimeout = 4408)] = 'ConnectionInitialisationTimeout'),
        (u[(u.ConnectionAcknowledgementTimeout = 4504)] = 'ConnectionAcknowledgementTimeout'),
        (u[(u.SubscriberAlreadyExists = 4409)] = 'SubscriberAlreadyExists'),
        (u[(u.TooManyInitialisationRequests = 4429)] = 'TooManyInitialisationRequests'),
        ((c = d || (d = {})).ConnectionInit = 'connection_init'),
        (c.ConnectionAck = 'connection_ack'),
        (c.Ping = 'ping'),
        (c.Pong = 'pong'),
        (c.Subscribe = 'subscribe'),
        (c.Next = 'next'),
        (c.Error = 'error'),
        (c.Complete = 'complete');
      var u,
        c,
        l,
        d,
        f = function (e) {
          return this instanceof f ? ((this.v = e), this) : new f(e);
        },
        p = function (e, t, r) {
          if (!Symbol.asyncIterator) throw TypeError('Symbol.asyncIterator is not defined.');
          var n,
            i = r.apply(e, t || []),
            o = [];
          return (
            (n = {}),
            a('next'),
            a('throw'),
            a('return'),
            (n[Symbol.asyncIterator] = function () {
              return this;
            }),
            n
          );
          function a(e) {
            i[e] &&
              (n[e] = function (t) {
                return new Promise(function (r, n) {
                  o.push([e, t, r, n]) > 1 || s(e, t);
                });
              });
          }
          function s(e, t) {
            try {
              var r;
              (r = i[e](t)).value instanceof f
                ? Promise.resolve(r.value.v).then(u, c)
                : l(o[0][2], r);
            } catch (e) {
              l(o[0][3], e);
            }
          }
          function u(e) {
            s('next', e);
          }
          function c(e) {
            s('throw', e);
          }
          function l(e, t) {
            e(t), o.shift(), o.length && s(o[0][0], o[0][1]);
          }
        };
      function h(e) {
        let t;
        let {
          url: r,
          connectionParams: n,
          lazy: i = !0,
          onNonLazyError: u = console.error,
          lazyCloseTimeout: c = 0,
          keepAlive: h = 0,
          disablePong: v,
          connectionAckWaitTimeout: m = 0,
          retryAttempts: g = 5,
          retryWait: b = async function (e) {
            let t = 1e3;
            for (let r = 0; r < e; r++) t *= 2;
            await new Promise((e) => setTimeout(e, t + Math.floor(2700 * Math.random() + 300)));
          },
          shouldRetry: x = y,
          isFatalConnectionProblem: w,
          on: k,
          webSocketImpl: S,
          generateID: O = function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (e) => {
              let t = (16 * Math.random()) | 0;
              return ('x' == e ? t : (3 & t) | 8).toString(16);
            });
          },
          jsonMessageReplacer: C,
          jsonMessageReviver: N,
        } = e;
        if (S) {
          if (
            !(
              'function' == typeof S &&
              'constructor' in S &&
              'CLOSED' in S &&
              'CLOSING' in S &&
              'CONNECTING' in S &&
              'OPEN' in S
            )
          )
            throw Error('Invalid WebSocket implementation provided');
          t = S;
        } else
          'undefined' != typeof WebSocket
            ? (t = WebSocket)
            : 'undefined' != typeof global
              ? (t = global.WebSocket || global.MozWebSocket)
              : 'undefined' != typeof window && (t = window.WebSocket || window.MozWebSocket);
        if (!t)
          throw Error(
            "WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`"
          );
        let E = t,
          A = (() => {
            let e = (() => {
                let e = {};
                return {
                  on: (t, r) => (
                    (e[t] = r),
                    () => {
                      delete e[t];
                    }
                  ),
                  emit(t) {
                    var r;
                    'id' in t && (null === (r = e[t.id]) || void 0 === r || r.call(e, t));
                  },
                };
              })(),
              t = {
                connecting: (null == k ? void 0 : k.connecting) ? [k.connecting] : [],
                opened: (null == k ? void 0 : k.opened) ? [k.opened] : [],
                connected: (null == k ? void 0 : k.connected) ? [k.connected] : [],
                ping: (null == k ? void 0 : k.ping) ? [k.ping] : [],
                pong: (null == k ? void 0 : k.pong) ? [k.pong] : [],
                message: (null == k ? void 0 : k.message) ? [e.emit, k.message] : [e.emit],
                closed: (null == k ? void 0 : k.closed) ? [k.closed] : [],
                error: (null == k ? void 0 : k.error) ? [k.error] : [],
              };
            return {
              onMessage: e.on,
              on(e, r) {
                let n = t[e];
                return (
                  n.push(r),
                  () => {
                    n.splice(n.indexOf(r), 1);
                  }
                );
              },
              emit(e, ...r) {
                for (let n of [...t[e]]) n(...r);
              },
            };
          })();
        function T(e) {
          let t = [
            A.on('error', (r) => {
              t.forEach((e) => e()), e(r);
            }),
            A.on('closed', (r) => {
              t.forEach((e) => e()), e(r);
            }),
          ];
        }
        let I,
          j = 0,
          M,
          q = !1,
          P = 0,
          R = !1;
        async function D() {
          clearTimeout(M);
          let [e, t] = await (null != I
            ? I
            : (I = new Promise((e, t) =>
                (async () => {
                  let i, u;
                  if (q) {
                    if ((await b(P), !j))
                      return (I = void 0), t({ code: 1e3, reason: 'All Subscriptions Gone' });
                    P++;
                  }
                  A.emit('connecting');
                  let c = new E('function' == typeof r ? await r() : r, 'graphql-transport-ws');
                  function f() {
                    isFinite(h) &&
                      h > 0 &&
                      (clearTimeout(u),
                      (u = setTimeout(() => {
                        c.readyState === E.OPEN &&
                          (c.send(s({ type: d.Ping })), A.emit('ping', !1, void 0));
                      }, h)));
                  }
                  T((e) => {
                    (I = void 0),
                      clearTimeout(i),
                      clearTimeout(u),
                      t(e),
                      y(e) &&
                        4499 === e.code &&
                        (c.close(4499, 'Terminated'), (c.onerror = null), (c.onclose = null));
                  }),
                    (c.onerror = (e) => A.emit('error', e)),
                    (c.onclose = (e) => A.emit('closed', e)),
                    (c.onopen = async () => {
                      try {
                        A.emit('opened', c);
                        let e = 'function' == typeof n ? await n() : n;
                        if (c.readyState !== E.OPEN) return;
                        c.send(
                          s(
                            e ? { type: d.ConnectionInit, payload: e } : { type: d.ConnectionInit },
                            C
                          )
                        ),
                          isFinite(m) &&
                            m > 0 &&
                            (i = setTimeout(() => {
                              c.close(
                                l.ConnectionAcknowledgementTimeout,
                                'Connection acknowledgement timeout'
                              );
                            }, m)),
                          f();
                      } catch (e) {
                        A.emit('error', e),
                          c.close(
                            l.InternalClientError,
                            o(
                              e instanceof Error ? e.message : Error(e).message,
                              'Internal client error'
                            )
                          );
                      }
                    });
                  let p = !1;
                  c.onmessage = ({ data: t }) => {
                    try {
                      let r = a('string' == typeof t ? JSON.parse(t, N) : t);
                      if ((A.emit('message', r), 'ping' === r.type || 'pong' === r.type)) {
                        A.emit(r.type, !0, r.payload),
                          'pong' === r.type
                            ? f()
                            : v ||
                              (c.send(
                                s(
                                  r.payload
                                    ? { type: d.Pong, payload: r.payload }
                                    : { type: d.Pong }
                                )
                              ),
                              A.emit('pong', !1, r.payload));
                        return;
                      }
                      if (p) return;
                      if (r.type !== d.ConnectionAck)
                        throw Error(`First message cannot be of type ${r.type}`);
                      clearTimeout(i),
                        (p = !0),
                        A.emit('connected', c, r.payload),
                        (q = !1),
                        (P = 0),
                        e([c, new Promise((e, t) => T(t))]);
                    } catch (e) {
                      (c.onmessage = null),
                        A.emit('error', e),
                        c.close(
                          l.BadResponse,
                          o(e instanceof Error ? e.message : Error(e).message, 'Bad response')
                        );
                    }
                  };
                })()
              )));
          e.readyState === E.CLOSING && (await t);
          let i = () => {},
            u = new Promise((e) => (i = e));
          return [
            e,
            i,
            Promise.race([
              u.then(() => {
                if (!j) {
                  let t = () => e.close(1e3, 'Normal Closure');
                  isFinite(c) && c > 0
                    ? (M = setTimeout(() => {
                        e.readyState === E.OPEN && t();
                      }, c))
                    : t();
                }
              }),
              t,
            ]),
          ];
        }
        function $(e) {
          var t;
          if (
            y(e) &&
            ((![1e3, 1001, 1006, 1005, 1012, 1013, 1014].includes((t = e.code)) &&
              t >= 1e3 &&
              t <= 1999) ||
              [
                l.InternalServerError,
                l.InternalClientError,
                l.BadRequest,
                l.BadResponse,
                l.Unauthorized,
                l.SubprotocolNotAcceptable,
                l.SubscriberAlreadyExists,
                l.TooManyInitialisationRequests,
              ].includes(e.code))
          )
            throw e;
          if (R) return !1;
          if (y(e) && 1e3 === e.code) return j > 0;
          if (!g || P >= g || !x(e) || (null == w ? void 0 : w(e))) throw e;
          return (q = !0);
        }
        function V(e, t) {
          let r = O(e),
            n = !1,
            i = !1,
            o = () => {
              j--, (n = !0);
            };
          return (
            (async () => {
              for (j++; ; )
                try {
                  let [a, u, c] = await D();
                  if (n) return u();
                  let l = A.onMessage(r, (e) => {
                    switch (e.type) {
                      case d.Next:
                        t.next(e.payload);
                        return;
                      case d.Error:
                        (i = !0), (n = !0), t.error(e.payload), o();
                        return;
                      case d.Complete:
                        (n = !0), o();
                        return;
                    }
                  });
                  a.send(s({ id: r, type: d.Subscribe, payload: e }, C)),
                    (o = () => {
                      n || a.readyState !== E.OPEN || a.send(s({ id: r, type: d.Complete }, C)),
                        j--,
                        (n = !0),
                        u();
                    }),
                    await c.finally(l);
                  return;
                } catch (e) {
                  if (!$(e)) return;
                }
            })()
              .then(() => {
                i || t.complete();
              })
              .catch((e) => {
                t.error(e);
              }),
            () => {
              n || o();
            }
          );
        }
        return (
          i ||
            (async () => {
              for (j++; ; )
                try {
                  let [, , e] = await D();
                  await e;
                } catch (e) {
                  try {
                    if (!$(e)) return;
                  } catch (e) {
                    return null == u ? void 0 : u(e);
                  }
                }
            })(),
          {
            on: A.on,
            subscribe: V,
            iterate(e) {
              let t = [],
                r = { done: !1, error: null, resolve: () => {} },
                n = V(e, {
                  next(e) {
                    t.push(e), r.resolve();
                  },
                  error(e) {
                    (r.done = !0), (r.error = e), r.resolve();
                  },
                  complete() {
                    (r.done = !0), r.resolve();
                  },
                }),
                i = (function () {
                  return p(this, arguments, function* () {
                    for (;;) {
                      for (t.length || (yield f(new Promise((e) => (r.resolve = e)))); t.length; )
                        yield yield f(t.shift());
                      if (r.error) throw r.error;
                      if (r.done) return yield f(void 0);
                    }
                  });
                })();
              return (
                (i.throw = async (e) => (
                  r.done || ((r.done = !0), (r.error = e), r.resolve()), { done: !0, value: void 0 }
                )),
                (i.return = async () => (n(), { done: !0, value: void 0 })),
                i
              );
            },
            async dispose() {
              if (((R = !0), I)) {
                let [e] = await I;
                e.close(1e3, 'Normal Closure');
              }
            },
            terminate() {
              I && A.emit('closed', { code: 4499, reason: 'Terminated', wasClean: !1 });
            },
          }
        );
      }
      function y(e) {
        return i(e) && 'code' in e && 'reason' in e;
      }
    },
    58354: function (e, t, r) {
      r.d(t, {
        BN: function () {
          return y;
        },
        Hr: function () {
          return h;
        },
        Ld: function () {
          return N;
        },
        Mq: function () {
          return p;
        },
        Rs: function () {
          return g;
        },
        Sy: function () {
          return O;
        },
        TS: function () {
          return d;
        },
        UI: function () {
          return c;
        },
        Vi: function () {
          return A;
        },
        Vo: function () {
          return x;
        },
        _A: function () {
          return S;
        },
        fY: function () {
          return w;
        },
        hX: function () {
          return u;
        },
        nN: function () {
          return C;
        },
        nY: function () {
          return E;
        },
        oE: function () {
          return b;
        },
        ok: function () {
          return f;
        },
        qn: function () {
          return m;
        },
        wt: function () {
          return v;
        },
        zg: function () {
          return l;
        },
      });
      var n = () => {};
      function i(e) {
        return { tag: 0, 0: e };
      }
      function o(e) {
        return { tag: 1, 0: e };
      }
      var a = () => ('function' == typeof Symbol && Symbol.asyncIterator) || '@@asyncIterator',
        s = (e) => e;
      function u(e) {
        return (t) => (r) => {
          var i = n;
          t((t) => {
            0 === t ? r(0) : 0 === t.tag ? ((i = t[0]), r(t)) : e(t[0]) ? r(t) : i(0);
          });
        };
      }
      function c(e) {
        return (t) => (r) =>
          t((t) => {
            0 === t || 0 === t.tag ? r(t) : r(o(e(t[0])));
          });
      }
      function l(e) {
        return (t) => (r) => {
          var o = [],
            a = n,
            s = !1,
            u = !1;
          t((t) => {
            if (u);
            else if (0 === t) (u = !0), o.length || r(0);
            else if (0 === t.tag) a = t[0];
            else {
              var i, c;
              (s = !1),
                (i = e(t[0])),
                (c = n),
                i((e) => {
                  if (0 === e) {
                    if (o.length) {
                      var t = o.indexOf(c);
                      t > -1 && (o = o.slice()).splice(t, 1),
                        o.length || (u ? r(0) : s || ((s = !0), a(0)));
                    }
                  } else 0 === e.tag ? (o.push((c = e[0])), c(0)) : o.length && (r(e), c(0));
                }),
                s || ((s = !0), a(0));
            }
          }),
            r(
              i((e) => {
                if (1 === e) {
                  u || ((u = !0), a(1));
                  for (var t = 0, r = o, n = o.length; t < n; t++) r[t](1);
                  o.length = 0;
                } else {
                  u || s ? (s = !1) : ((s = !0), a(0));
                  for (var i = 0, c = o, l = o.length; i < l; i++) c[i](0);
                }
              })
            );
        };
      }
      function d(e) {
        var t;
        return (t = k(e)), l(s)(t);
      }
      function f(e) {
        return (t) => (r) => {
          var n = !1;
          t((t) => {
            if (n);
            else if (0 === t) (n = !0), r(0), e();
            else if (0 === t.tag) {
              var o = t[0];
              r(
                i((t) => {
                  1 === t ? ((n = !0), o(1), e()) : o(t);
                })
              );
            } else r(t);
          });
        };
      }
      function p(e) {
        return (t) => (r) => {
          var n = !1;
          t((t) => {
            if (n);
            else if (0 === t) (n = !0), r(0);
            else if (0 === t.tag) {
              var o = t[0];
              r(
                i((e) => {
                  1 === e && (n = !0), o(e);
                })
              );
            } else e(t[0]), r(t);
          });
        };
      }
      function h(e) {
        return (t) => (r) =>
          t((t) => {
            0 === t ? r(0) : 0 === t.tag ? (r(t), e()) : r(t);
          });
      }
      function y(e) {
        var t = [],
          r = n,
          o = !1;
        return (n) => {
          t.push(n),
            1 === t.length &&
              e((e) => {
                if (0 === e) {
                  for (var n = 0, i = t, a = t.length; n < a; n++) i[n](0);
                  t.length = 0;
                } else if (0 === e.tag) r = e[0];
                else {
                  o = !1;
                  for (var s = 0, u = t, c = t.length; s < c; s++) u[s](e);
                }
              }),
            n(
              i((e) => {
                if (1 === e) {
                  var i = t.indexOf(n);
                  i > -1 && (t = t.slice()).splice(i, 1), t.length || r(1);
                } else o || ((o = !0), r(0));
              })
            );
        };
      }
      function v(e) {
        return (t) => (r) => {
          var o = n,
            a = n,
            s = !1,
            u = !1,
            c = !1,
            l = !1;
          t((t) => {
            if (l);
            else if (0 === t) (l = !0), c || r(0);
            else if (0 === t.tag) o = t[0];
            else {
              var i;
              c && (a(1), (a = n)),
                s ? (s = !1) : ((s = !0), o(0)),
                (i = e(t[0])),
                (c = !0),
                i((e) => {
                  c &&
                    (0 === e
                      ? ((c = !1), l ? r(0) : s || ((s = !0), o(0)))
                      : 0 === e.tag
                        ? ((u = !1), (a = e[0])(0))
                        : (r(e), u ? (u = !1) : a(0)));
                });
            }
          }),
            r(
              i((e) => {
                1 === e
                  ? (l || ((l = !0), o(1)), c && ((c = !1), a(1)))
                  : (l || s || ((s = !0), o(0)), c && !u && ((u = !0), a(0)));
              })
            );
        };
      }
      function m(e) {
        return (t) => (r) => {
          var o = n,
            a = !1,
            s = 0;
          t((t) => {
            a ||
              (0 === t
                ? ((a = !0), r(0))
                : 0 === t.tag
                  ? e <= 0
                    ? ((a = !0), r(0), t[0](1))
                    : (o = t[0])
                  : s++ < e
                    ? (r(t), !a && s >= e && ((a = !0), r(0), o(1)))
                    : r(t));
          }),
            r(
              i((t) => {
                1 !== t || a ? 0 === t && !a && s < e && o(0) : ((a = !0), o(1));
              })
            );
        };
      }
      function g(e) {
        return (t) => (r) => {
          var o = n,
            a = n,
            s = !1;
          t((t) => {
            s ||
              (0 === t
                ? ((s = !0), a(1), r(0))
                : 0 === t.tag
                  ? ((o = t[0]),
                    e((e) => {
                      0 === e || (0 === e.tag ? (a = e[0])(0) : ((s = !0), a(1), o(1), r(0)));
                    }))
                  : r(t));
          }),
            r(
              i((e) => {
                1 !== e || s ? s || o(0) : ((s = !0), o(1), a(1));
              })
            );
        };
      }
      function b(e, t) {
        return (r) => (i) => {
          var o = n,
            a = !1;
          r((r) => {
            a ||
              (0 === r
                ? ((a = !0), i(0))
                : 0 === r.tag
                  ? ((o = r[0]), i(r))
                  : e(r[0])
                    ? i(r)
                    : ((a = !0), t && i(r), i(0), o(1)));
          });
        };
      }
      function x(e) {
        return (t) => e()(t);
      }
      function w(e) {
        return (t) => {
          var r,
            n = (e[a()] && e[a()]()) || e,
            s = !1,
            u = !1,
            c = !1;
          t(
            i(async (e) => {
              if (1 === e) (s = !0), n.return && n.return();
              else if (u) c = !0;
              else {
                for (c = u = !0; c && !s; )
                  if ((r = await n.next()).done) (s = !0), n.return && (await n.return()), t(0);
                  else
                    try {
                      (c = !1), t(o(r.value));
                    } catch (e) {
                      if (n.throw) (s = !!(await n.throw(e)).done) && t(0);
                      else throw e;
                    }
                u = !1;
              }
            })
          );
        };
      }
      var k = function (e) {
        return e[Symbol.asyncIterator]
          ? w(e)
          : (t) => {
              var r,
                n = e[Symbol.iterator](),
                a = !1,
                s = !1,
                u = !1;
              t(
                i((e) => {
                  if (1 === e) (a = !0), n.return && n.return();
                  else if (s) u = !0;
                  else {
                    for (u = s = !0; u && !a; )
                      if ((r = n.next()).done) (a = !0), n.return && n.return(), t(0);
                      else
                        try {
                          (u = !1), t(o(r.value));
                        } catch (e) {
                          if (n.throw) (a = !!n.throw(e).done) && t(0);
                          else throw e;
                        }
                    s = !1;
                  }
                })
              );
            };
      };
      function S(e) {
        return (t) => {
          var r = !1;
          t(
            i((n) => {
              1 === n ? (r = !0) : r || ((r = !0), t(o(e)), t(0));
            })
          );
        };
      }
      function O(e) {
        return (t) => {
          var r = !1,
            n = e({
              next(e) {
                r || t(o(e));
              },
              complete() {
                r || ((r = !0), t(0));
              },
            });
          t(
            i((e) => {
              1 !== e || r || ((r = !0), n());
            })
          );
        };
      }
      function C() {
        var e, t;
        return {
          source: y(O((r) => ((e = r.next), (t = r.complete), n))),
          next(t) {
            e && e(t);
          },
          complete() {
            t && t();
          },
        };
      }
      function N(e) {
        return (t) => {
          var r = n,
            i = !1;
          return (
            t((t) => {
              0 === t ? (i = !0) : 0 === t.tag ? (r = t[0])(0) : i || (e(t[0]), r(0));
            }),
            {
              unsubscribe() {
                i || ((i = !0), r(1));
              },
            }
          );
        };
      }
      function E(e) {
        N((e) => {})(e);
      }
      function A(e) {
        return new Promise((t) => {
          var r,
            i = n;
          e((e) => {
            0 === e ? Promise.resolve(r).then(t) : 0 === e.tag ? (i = e[0])(0) : ((r = e[0]), i(0));
          });
        });
      }
    },
  },
]);
