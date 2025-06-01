(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1740],
  {
    62377: function (t, e, r) {
      'use strict';
      r.d(e, {
        Sg: function () {
          return o;
        },
        zt: function () {
          return a;
        },
      });
      var n = r(7523),
        i = r(50357);
      let s = new (r(67214).Yd)('abstract-provider/5.7.0');
      class o extends i.dk {
        static isForkEvent(t) {
          return !!(t && t._isForkEvent);
        }
      }
      class a {
        constructor() {
          s.checkAbstract(new.target, a), (0, i.zG)(this, '_isProvider', !0);
        }
        getFeeData() {
          var t, e, r, s;
          return (
            (t = this),
            (e = void 0),
            (r = void 0),
            (s = function* () {
              let { block: t, gasPrice: e } = yield (0, i.mE)({
                  block: this.getBlock('latest'),
                  gasPrice: this.getGasPrice().catch((t) => null),
                }),
                r = null,
                s = null,
                o = null;
              return (
                t &&
                  t.baseFeePerGas &&
                  ((r = t.baseFeePerGas),
                  (o = n.O$.from('1500000000')),
                  (s = t.baseFeePerGas.mul(2).add(o))),
                { lastBaseFeePerGas: r, maxFeePerGas: s, maxPriorityFeePerGas: o, gasPrice: e }
              );
            }),
            new (r || (r = Promise))(function (n, i) {
              function o(t) {
                try {
                  u(s.next(t));
                } catch (t) {
                  i(t);
                }
              }
              function a(t) {
                try {
                  u(s.throw(t));
                } catch (t) {
                  i(t);
                }
              }
              function u(t) {
                var e;
                t.done
                  ? n(t.value)
                  : ((e = t.value) instanceof r
                      ? e
                      : new r(function (t) {
                          t(e);
                        })
                    ).then(o, a);
              }
              u((s = s.apply(t, e || [])).next());
            })
          );
        }
        addListener(t, e) {
          return this.on(t, e);
        }
        removeListener(t, e) {
          return this.off(t, e);
        }
        static isProvider(t) {
          return !!(t && t._isProvider);
        }
      }
    },
    18833: function (t, e, r) {
      'use strict';
      r.d(e, {
        E: function () {
          return l;
        },
      });
      var n = r(50357),
        i = r(67214),
        s = function (t, e, r, n) {
          return new (r || (r = Promise))(function (i, s) {
            function o(t) {
              try {
                u(n.next(t));
              } catch (t) {
                s(t);
              }
            }
            function a(t) {
              try {
                u(n.throw(t));
              } catch (t) {
                s(t);
              }
            }
            function u(t) {
              var e;
              t.done
                ? i(t.value)
                : ((e = t.value) instanceof r
                    ? e
                    : new r(function (t) {
                        t(e);
                      })
                  ).then(o, a);
            }
            u((n = n.apply(t, e || [])).next());
          });
        };
      let o = new i.Yd('abstract-signer/5.7.0'),
        a = [
          'accessList',
          'ccipReadEnabled',
          'chainId',
          'customData',
          'data',
          'from',
          'gasLimit',
          'gasPrice',
          'maxFeePerGas',
          'maxPriorityFeePerGas',
          'nonce',
          'to',
          'type',
          'value',
        ],
        u = [
          i.Yd.errors.INSUFFICIENT_FUNDS,
          i.Yd.errors.NONCE_EXPIRED,
          i.Yd.errors.REPLACEMENT_UNDERPRICED,
        ];
      class l {
        constructor() {
          o.checkAbstract(new.target, l), (0, n.zG)(this, '_isSigner', !0);
        }
        getBalance(t) {
          return s(this, void 0, void 0, function* () {
            return (
              this._checkProvider('getBalance'),
              yield this.provider.getBalance(this.getAddress(), t)
            );
          });
        }
        getTransactionCount(t) {
          return s(this, void 0, void 0, function* () {
            return (
              this._checkProvider('getTransactionCount'),
              yield this.provider.getTransactionCount(this.getAddress(), t)
            );
          });
        }
        estimateGas(t) {
          return s(this, void 0, void 0, function* () {
            this._checkProvider('estimateGas');
            let e = yield (0, n.mE)(this.checkTransaction(t));
            return yield this.provider.estimateGas(e);
          });
        }
        call(t, e) {
          return s(this, void 0, void 0, function* () {
            this._checkProvider('call');
            let r = yield (0, n.mE)(this.checkTransaction(t));
            return yield this.provider.call(r, e);
          });
        }
        sendTransaction(t) {
          return s(this, void 0, void 0, function* () {
            this._checkProvider('sendTransaction');
            let e = yield this.populateTransaction(t),
              r = yield this.signTransaction(e);
            return yield this.provider.sendTransaction(r);
          });
        }
        getChainId() {
          return s(this, void 0, void 0, function* () {
            return this._checkProvider('getChainId'), (yield this.provider.getNetwork()).chainId;
          });
        }
        getGasPrice() {
          return s(this, void 0, void 0, function* () {
            return this._checkProvider('getGasPrice'), yield this.provider.getGasPrice();
          });
        }
        getFeeData() {
          return s(this, void 0, void 0, function* () {
            return this._checkProvider('getFeeData'), yield this.provider.getFeeData();
          });
        }
        resolveName(t) {
          return s(this, void 0, void 0, function* () {
            return this._checkProvider('resolveName'), yield this.provider.resolveName(t);
          });
        }
        checkTransaction(t) {
          for (let e in t)
            -1 === a.indexOf(e) &&
              o.throwArgumentError('invalid transaction key: ' + e, 'transaction', t);
          let e = (0, n.DC)(t);
          return (
            null == e.from
              ? (e.from = this.getAddress())
              : (e.from = Promise.all([Promise.resolve(e.from), this.getAddress()]).then(
                  (e) => (
                    e[0].toLowerCase() !== e[1].toLowerCase() &&
                      o.throwArgumentError('from address mismatch', 'transaction', t),
                    e[0]
                  )
                )),
            e
          );
        }
        populateTransaction(t) {
          return s(this, void 0, void 0, function* () {
            let e = yield (0, n.mE)(this.checkTransaction(t));
            null != e.to &&
              ((e.to = Promise.resolve(e.to).then((t) =>
                s(this, void 0, void 0, function* () {
                  if (null == t) return null;
                  let e = yield this.resolveName(t);
                  return (
                    null == e &&
                      o.throwArgumentError('provided ENS name resolves to null', 'tx.to', t),
                    e
                  );
                })
              )),
              e.to.catch((t) => {}));
            let r = null != e.maxFeePerGas || null != e.maxPriorityFeePerGas;
            if (
              (null != e.gasPrice && (2 === e.type || r)
                ? o.throwArgumentError(
                    'eip-1559 transaction do not support gasPrice',
                    'transaction',
                    t
                  )
                : (0 === e.type || 1 === e.type) &&
                  r &&
                  o.throwArgumentError(
                    'pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas',
                    'transaction',
                    t
                  ),
              (2 === e.type || null == e.type) &&
                null != e.maxFeePerGas &&
                null != e.maxPriorityFeePerGas)
            )
              e.type = 2;
            else if (0 === e.type || 1 === e.type)
              null == e.gasPrice && (e.gasPrice = this.getGasPrice());
            else {
              let t = yield this.getFeeData();
              if (null == e.type) {
                if (null != t.maxFeePerGas && null != t.maxPriorityFeePerGas) {
                  if (((e.type = 2), null != e.gasPrice)) {
                    let t = e.gasPrice;
                    delete e.gasPrice, (e.maxFeePerGas = t), (e.maxPriorityFeePerGas = t);
                  } else
                    null == e.maxFeePerGas && (e.maxFeePerGas = t.maxFeePerGas),
                      null == e.maxPriorityFeePerGas &&
                        (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas);
                } else
                  null != t.gasPrice
                    ? (r &&
                        o.throwError(
                          'network does not support EIP-1559',
                          i.Yd.errors.UNSUPPORTED_OPERATION,
                          { operation: 'populateTransaction' }
                        ),
                      null == e.gasPrice && (e.gasPrice = t.gasPrice),
                      (e.type = 0))
                    : o.throwError(
                        'failed to get consistent fee data',
                        i.Yd.errors.UNSUPPORTED_OPERATION,
                        { operation: 'signer.getFeeData' }
                      );
              } else
                2 === e.type &&
                  (null == e.maxFeePerGas && (e.maxFeePerGas = t.maxFeePerGas),
                  null == e.maxPriorityFeePerGas &&
                    (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas));
            }
            return (
              null == e.nonce && (e.nonce = this.getTransactionCount('pending')),
              null == e.gasLimit &&
                (e.gasLimit = this.estimateGas(e).catch((t) => {
                  if (u.indexOf(t.code) >= 0) throw t;
                  return o.throwError(
                    'cannot estimate gas; transaction may fail or may require manual gas limit',
                    i.Yd.errors.UNPREDICTABLE_GAS_LIMIT,
                    { error: t, tx: e }
                  );
                })),
              null == e.chainId
                ? (e.chainId = this.getChainId())
                : (e.chainId = Promise.all([Promise.resolve(e.chainId), this.getChainId()]).then(
                    (e) => (
                      0 !== e[1] &&
                        e[0] !== e[1] &&
                        o.throwArgumentError('chainId address mismatch', 'transaction', t),
                      e[0]
                    )
                  )),
              yield (0, n.mE)(e)
            );
          });
        }
        _checkProvider(t) {
          this.provider ||
            o.throwError('missing provider', i.Yd.errors.UNSUPPORTED_OPERATION, {
              operation: t || '_checkProvider',
            });
        }
        static isSigner(t) {
          return !!(t && t._isSigner);
        }
      }
    },
    56805: function (t, e, r) {
      'use strict';
      r.d(e, {
        Kn: function () {
          return c;
        },
        CR: function () {
          return d;
        },
      });
      var n = r(7730),
        i = r(7523),
        s = r(14752),
        o = r(2585);
      let a = new (r(67214).Yd)('address/5.7.0');
      function u(t) {
        (0, n.A7)(t, 20) || a.throwArgumentError('invalid address', 'address', t);
        let e = (t = t.toLowerCase()).substring(2).split(''),
          r = new Uint8Array(40);
        for (let t = 0; t < 40; t++) r[t] = e[t].charCodeAt(0);
        let i = (0, n.lE)((0, s.w)(r));
        for (let t = 0; t < 40; t += 2)
          i[t >> 1] >> 4 >= 8 && (e[t] = e[t].toUpperCase()),
            (15 & i[t >> 1]) >= 8 && (e[t + 1] = e[t + 1].toUpperCase());
        return '0x' + e.join('');
      }
      let l = {};
      for (let t = 0; t < 10; t++) l[String(t)] = String(t);
      for (let t = 0; t < 26; t++) l[String.fromCharCode(65 + t)] = String(10 + t);
      let h = Math.floor(
        Math.log10 ? Math.log10(9007199254740991) : Math.log(9007199254740991) / Math.LN10
      );
      function c(t) {
        let e = null;
        if (
          ('string' != typeof t && a.throwArgumentError('invalid address', 'address', t),
          t.match(/^(0x)?[0-9a-fA-F]{40}$/))
        )
          '0x' !== t.substring(0, 2) && (t = '0x' + t),
            (e = u(t)),
            t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) &&
              e !== t &&
              a.throwArgumentError('bad address checksum', 'address', t);
        else if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
          for (
            t.substring(2, 4) !==
              (function (t) {
                let e = (t = (t = t.toUpperCase()).substring(4) + t.substring(0, 2) + '00')
                  .split('')
                  .map((t) => l[t])
                  .join('');
                for (; e.length >= h; ) {
                  let t = e.substring(0, h);
                  e = (parseInt(t, 10) % 97) + e.substring(t.length);
                }
                let r = String(98 - (parseInt(e, 10) % 97));
                for (; r.length < 2; ) r = '0' + r;
                return r;
              })(t) && a.throwArgumentError('bad icap checksum', 'address', t),
              e = (0, i.g$)(t.substring(4));
            e.length < 40;

          )
            e = '0' + e;
          e = u('0x' + e);
        } else a.throwArgumentError('invalid address', 'address', t);
        return e;
      }
      function d(t) {
        let e = null;
        try {
          e = c(t.from);
        } catch (e) {
          a.throwArgumentError('missing from address', 'transaction', t);
        }
        let r = (0, n.G1)((0, n.lE)(i.O$.from(t.nonce).toHexString()));
        return c((0, n.p3)((0, s.w)((0, o.c)([e, r])), 12));
      }
    },
    94731: function (t, e, r) {
      'use strict';
      r.d(e, {
        eU: function () {
          return o;
        },
      });
      var n = r(7730),
        i = r(50357);
      class s {
        constructor(t) {
          (0, i.zG)(this, 'alphabet', t),
            (0, i.zG)(this, 'base', t.length),
            (0, i.zG)(this, '_alphabetMap', {}),
            (0, i.zG)(this, '_leader', t.charAt(0));
          for (let e = 0; e < t.length; e++) this._alphabetMap[t.charAt(e)] = e;
        }
        encode(t) {
          let e = (0, n.lE)(t);
          if (0 === e.length) return '';
          let r = [0];
          for (let t = 0; t < e.length; ++t) {
            let n = e[t];
            for (let t = 0; t < r.length; ++t)
              (n += r[t] << 8), (r[t] = n % this.base), (n = (n / this.base) | 0);
            for (; n > 0; ) r.push(n % this.base), (n = (n / this.base) | 0);
          }
          let i = '';
          for (let t = 0; 0 === e[t] && t < e.length - 1; ++t) i += this._leader;
          for (let t = r.length - 1; t >= 0; --t) i += this.alphabet[r[t]];
          return i;
        }
        decode(t) {
          if ('string' != typeof t) throw TypeError('Expected String');
          let e = [];
          if (0 === t.length) return new Uint8Array(e);
          e.push(0);
          for (let r = 0; r < t.length; r++) {
            let n = this._alphabetMap[t[r]];
            if (void 0 === n) throw Error('Non-base' + this.base + ' character');
            let i = n;
            for (let t = 0; t < e.length; ++t) (i += e[t] * this.base), (e[t] = 255 & i), (i >>= 8);
            for (; i > 0; ) e.push(255 & i), (i >>= 8);
          }
          for (let r = 0; t[r] === this._leader && r < t.length - 1; ++r) e.push(0);
          return (0, n.lE)(new Uint8Array(e.reverse()));
        }
      }
      new s('abcdefghijklmnopqrstuvwxyz234567');
      let o = new s('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');
    },
    7523: function (t, e, r) {
      'use strict';
      r.d(e, {
        O$: function () {
          return c;
        },
        g$: function () {
          return g;
        },
      });
      var n = r(12261),
        i = r.n(n),
        s = r(7730),
        o = r(67214),
        a = i().BN;
      let u = new o.Yd('bignumber/5.7.0'),
        l = {},
        h = !1;
      class c {
        constructor(t, e) {
          t !== l &&
            u.throwError(
              'cannot call constructor directly; use BigNumber.from',
              o.Yd.errors.UNSUPPORTED_OPERATION,
              { operation: 'new (BigNumber)' }
            ),
            (this._hex = e),
            (this._isBigNumber = !0),
            Object.freeze(this);
        }
        fromTwos(t) {
          return f(p(this).fromTwos(t));
        }
        toTwos(t) {
          return f(p(this).toTwos(t));
        }
        abs() {
          return '-' === this._hex[0] ? c.from(this._hex.substring(1)) : this;
        }
        add(t) {
          return f(p(this).add(p(t)));
        }
        sub(t) {
          return f(p(this).sub(p(t)));
        }
        div(t) {
          return c.from(t).isZero() && m('division-by-zero', 'div'), f(p(this).div(p(t)));
        }
        mul(t) {
          return f(p(this).mul(p(t)));
        }
        mod(t) {
          let e = p(t);
          return e.isNeg() && m('division-by-zero', 'mod'), f(p(this).umod(e));
        }
        pow(t) {
          let e = p(t);
          return e.isNeg() && m('negative-power', 'pow'), f(p(this).pow(e));
        }
        and(t) {
          let e = p(t);
          return (
            (this.isNegative() || e.isNeg()) && m('unbound-bitwise-result', 'and'),
            f(p(this).and(e))
          );
        }
        or(t) {
          let e = p(t);
          return (
            (this.isNegative() || e.isNeg()) && m('unbound-bitwise-result', 'or'), f(p(this).or(e))
          );
        }
        xor(t) {
          let e = p(t);
          return (
            (this.isNegative() || e.isNeg()) && m('unbound-bitwise-result', 'xor'),
            f(p(this).xor(e))
          );
        }
        mask(t) {
          return (this.isNegative() || t < 0) && m('negative-width', 'mask'), f(p(this).maskn(t));
        }
        shl(t) {
          return (this.isNegative() || t < 0) && m('negative-width', 'shl'), f(p(this).shln(t));
        }
        shr(t) {
          return (this.isNegative() || t < 0) && m('negative-width', 'shr'), f(p(this).shrn(t));
        }
        eq(t) {
          return p(this).eq(p(t));
        }
        lt(t) {
          return p(this).lt(p(t));
        }
        lte(t) {
          return p(this).lte(p(t));
        }
        gt(t) {
          return p(this).gt(p(t));
        }
        gte(t) {
          return p(this).gte(p(t));
        }
        isNegative() {
          return '-' === this._hex[0];
        }
        isZero() {
          return p(this).isZero();
        }
        toNumber() {
          try {
            return p(this).toNumber();
          } catch (t) {
            m('overflow', 'toNumber', this.toString());
          }
          return null;
        }
        toBigInt() {
          try {
            return BigInt(this.toString());
          } catch (t) {}
          return u.throwError(
            'this platform does not support BigInt',
            o.Yd.errors.UNSUPPORTED_OPERATION,
            { value: this.toString() }
          );
        }
        toString() {
          return (
            arguments.length > 0 &&
              (10 === arguments[0]
                ? h ||
                  ((h = !0),
                  u.warn('BigNumber.toString does not accept any parameters; base-10 is assumed'))
                : 16 === arguments[0]
                  ? u.throwError(
                      'BigNumber.toString does not accept any parameters; use bigNumber.toHexString()',
                      o.Yd.errors.UNEXPECTED_ARGUMENT,
                      {}
                    )
                  : u.throwError(
                      'BigNumber.toString does not accept parameters',
                      o.Yd.errors.UNEXPECTED_ARGUMENT,
                      {}
                    )),
            p(this).toString(10)
          );
        }
        toHexString() {
          return this._hex;
        }
        toJSON(t) {
          return { type: 'BigNumber', hex: this.toHexString() };
        }
        static from(t) {
          if (t instanceof c) return t;
          if ('string' == typeof t)
            return t.match(/^-?0x[0-9a-f]+$/i)
              ? new c(l, d(t))
              : t.match(/^-?[0-9]+$/)
                ? new c(l, d(new a(t)))
                : u.throwArgumentError('invalid BigNumber string', 'value', t);
          if ('number' == typeof t)
            return (
              t % 1 && m('underflow', 'BigNumber.from', t),
              (t >= 9007199254740991 || t <= -9007199254740991) &&
                m('overflow', 'BigNumber.from', t),
              c.from(String(t))
            );
          if ('bigint' == typeof t) return c.from(t.toString());
          if ((0, s._t)(t)) return c.from((0, s.Dv)(t));
          if (t) {
            if (t.toHexString) {
              let e = t.toHexString();
              if ('string' == typeof e) return c.from(e);
            } else {
              let e = t._hex;
              if (
                (null == e && 'BigNumber' === t.type && (e = t.hex),
                'string' == typeof e &&
                  ((0, s.A7)(e) || ('-' === e[0] && (0, s.A7)(e.substring(1)))))
              )
                return c.from(e);
            }
          }
          return u.throwArgumentError('invalid BigNumber value', 'value', t);
        }
        static isBigNumber(t) {
          return !!(t && t._isBigNumber);
        }
      }
      function d(t) {
        if ('string' != typeof t) return d(t.toString(16));
        if ('-' === t[0])
          return ('-' === (t = t.substring(1))[0] &&
            u.throwArgumentError('invalid hex', 'value', t),
          '0x00' === (t = d(t)))
            ? t
            : '-' + t;
        if (('0x' !== t.substring(0, 2) && (t = '0x' + t), '0x' === t)) return '0x00';
        for (
          t.length % 2 && (t = '0x0' + t.substring(2));
          t.length > 4 && '0x00' === t.substring(0, 4);

        )
          t = '0x' + t.substring(4);
        return t;
      }
      function f(t) {
        return c.from(d(t));
      }
      function p(t) {
        let e = c.from(t).toHexString();
        return '-' === e[0] ? new a('-' + e.substring(3), 16) : new a(e.substring(2), 16);
      }
      function m(t, e, r) {
        let n = { fault: t, operation: e };
        return null != r && (n.value = r), u.throwError(t, o.Yd.errors.NUMERIC_FAULT, n);
      }
      function g(t) {
        return new a(t, 36).toString(16);
      }
    },
    7730: function (t, e, r) {
      'use strict';
      r.d(e, {
        lE: function () {
          return l;
        },
        zo: function () {
          return h;
        },
        xs: function () {
          return v;
        },
        E1: function () {
          return m;
        },
        p3: function () {
          return g;
        },
        $P: function () {
          return y;
        },
        $m: function () {
          return b;
        },
        Dv: function () {
          return p;
        },
        _t: function () {
          return u;
        },
        Zq: function () {
          return o;
        },
        A7: function () {
          return d;
        },
        gV: function () {
          return A;
        },
        N: function () {
          return w;
        },
        G1: function () {
          return c;
        },
      });
      let n = new (r(67214).Yd)('bytes/5.7.0');
      function i(t) {
        return !!t.toHexString;
      }
      function s(t) {
        return (
          t.slice ||
            (t.slice = function () {
              let e = Array.prototype.slice.call(arguments);
              return s(new Uint8Array(Array.prototype.slice.apply(t, e)));
            }),
          t
        );
      }
      function o(t) {
        return (d(t) && !(t.length % 2)) || u(t);
      }
      function a(t) {
        return 'number' == typeof t && t == t && t % 1 == 0;
      }
      function u(t) {
        if (null == t) return !1;
        if (t.constructor === Uint8Array) return !0;
        if ('string' == typeof t || !a(t.length) || t.length < 0) return !1;
        for (let e = 0; e < t.length; e++) {
          let r = t[e];
          if (!a(r) || r < 0 || r >= 256) return !1;
        }
        return !0;
      }
      function l(t, e) {
        if ((e || (e = {}), 'number' == typeof t)) {
          n.checkSafeUint53(t, 'invalid arrayify value');
          let e = [];
          for (; t; ) e.unshift(255 & t), (t = parseInt(String(t / 256)));
          return 0 === e.length && e.push(0), s(new Uint8Array(e));
        }
        if (
          (e.allowMissingPrefix &&
            'string' == typeof t &&
            '0x' !== t.substring(0, 2) &&
            (t = '0x' + t),
          i(t) && (t = t.toHexString()),
          d(t))
        ) {
          let r = t.substring(2);
          r.length % 2 &&
            ('left' === e.hexPad
              ? (r = '0' + r)
              : 'right' === e.hexPad
                ? (r += '0')
                : n.throwArgumentError('hex data is odd-length', 'value', t));
          let i = [];
          for (let t = 0; t < r.length; t += 2) i.push(parseInt(r.substring(t, t + 2), 16));
          return s(new Uint8Array(i));
        }
        return u(t)
          ? s(new Uint8Array(t))
          : n.throwArgumentError('invalid arrayify value', 'value', t);
      }
      function h(t) {
        let e = t.map((t) => l(t)),
          r = e.reduce((t, e) => t + e.length, 0),
          n = new Uint8Array(r);
        return e.reduce((t, e) => (n.set(e, t), t + e.length), 0), s(n);
      }
      function c(t) {
        let e = l(t);
        if (0 === e.length) return e;
        let r = 0;
        for (; r < e.length && 0 === e[r]; ) r++;
        return r && (e = e.slice(r)), e;
      }
      function d(t, e) {
        return (
          'string' == typeof t && !!t.match(/^0x[0-9A-Fa-f]*$/) && (!e || t.length === 2 + 2 * e)
        );
      }
      let f = '0123456789abcdef';
      function p(t, e) {
        if ((e || (e = {}), 'number' == typeof t)) {
          n.checkSafeUint53(t, 'invalid hexlify value');
          let e = '';
          for (; t; ) (e = f[15 & t] + e), (t = Math.floor(t / 16));
          return e.length ? (e.length % 2 && (e = '0' + e), '0x' + e) : '0x00';
        }
        if ('bigint' == typeof t) return (t = t.toString(16)).length % 2 ? '0x0' + t : '0x' + t;
        if (
          (e.allowMissingPrefix &&
            'string' == typeof t &&
            '0x' !== t.substring(0, 2) &&
            (t = '0x' + t),
          i(t))
        )
          return t.toHexString();
        if (d(t))
          return (
            t.length % 2 &&
              ('left' === e.hexPad
                ? (t = '0x0' + t.substring(2))
                : 'right' === e.hexPad
                  ? (t += '0')
                  : n.throwArgumentError('hex data is odd-length', 'value', t)),
            t.toLowerCase()
          );
        if (u(t)) {
          let e = '0x';
          for (let r = 0; r < t.length; r++) {
            let n = t[r];
            e += f[(240 & n) >> 4] + f[15 & n];
          }
          return e;
        }
        return n.throwArgumentError('invalid hexlify value', 'value', t);
      }
      function m(t) {
        if ('string' != typeof t) t = p(t);
        else if (!d(t) || t.length % 2) return null;
        return (t.length - 2) / 2;
      }
      function g(t, e, r) {
        return ('string' != typeof t
          ? (t = p(t))
          : (!d(t) || t.length % 2) && n.throwArgumentError('invalid hexData', 'value', t),
        (e = 2 + 2 * e),
        null != r)
          ? '0x' + t.substring(e, 2 + 2 * r)
          : '0x' + t.substring(e);
      }
      function v(t) {
        let e = '0x';
        return (
          t.forEach((t) => {
            e += p(t).substring(2);
          }),
          e
        );
      }
      function y(t) {
        let e = (function (t) {
          'string' != typeof t && (t = p(t)),
            d(t) || n.throwArgumentError('invalid hex string', 'value', t),
            (t = t.substring(2));
          let e = 0;
          for (; e < t.length && '0' === t[e]; ) e++;
          return '0x' + t.substring(e);
        })(p(t, { hexPad: 'left' }));
        return '0x' === e ? '0x0' : e;
      }
      function b(t, e) {
        for (
          'string' != typeof t
            ? (t = p(t))
            : d(t) || n.throwArgumentError('invalid hex string', 'value', t),
            t.length > 2 * e + 2 &&
              n.throwArgumentError('value out of range', 'value', arguments[1]);
          t.length < 2 * e + 2;

        )
          t = '0x0' + t.substring(2);
        return t;
      }
      function w(t) {
        let e = {
          r: '0x',
          s: '0x',
          _vs: '0x',
          recoveryParam: 0,
          v: 0,
          yParityAndS: '0x',
          compact: '0x',
        };
        if (o(t)) {
          let r = l(t);
          64 === r.length
            ? ((e.v = 27 + (r[32] >> 7)),
              (r[32] &= 127),
              (e.r = p(r.slice(0, 32))),
              (e.s = p(r.slice(32, 64))))
            : 65 === r.length
              ? ((e.r = p(r.slice(0, 32))), (e.s = p(r.slice(32, 64))), (e.v = r[64]))
              : n.throwArgumentError('invalid signature string', 'signature', t),
            e.v < 27 &&
              (0 === e.v || 1 === e.v
                ? (e.v += 27)
                : n.throwArgumentError('signature invalid v byte', 'signature', t)),
            (e.recoveryParam = 1 - (e.v % 2)),
            e.recoveryParam && (r[32] |= 128),
            (e._vs = p(r.slice(32, 64)));
        } else {
          if (
            ((e.r = t.r),
            (e.s = t.s),
            (e.v = t.v),
            (e.recoveryParam = t.recoveryParam),
            (e._vs = t._vs),
            null != e._vs)
          ) {
            let r = (function (t, e) {
              (t = l(t)).length > e &&
                n.throwArgumentError('value out of range', 'value', arguments[0]);
              let r = new Uint8Array(e);
              return r.set(t, e - t.length), s(r);
            })(l(e._vs), 32);
            e._vs = p(r);
            let i = r[0] >= 128 ? 1 : 0;
            null == e.recoveryParam
              ? (e.recoveryParam = i)
              : e.recoveryParam !== i &&
                n.throwArgumentError('signature recoveryParam mismatch _vs', 'signature', t),
              (r[0] &= 127);
            let o = p(r);
            null == e.s
              ? (e.s = o)
              : e.s !== o && n.throwArgumentError('signature v mismatch _vs', 'signature', t);
          }
          if (null == e.recoveryParam)
            null == e.v
              ? n.throwArgumentError('signature missing v and recoveryParam', 'signature', t)
              : 0 === e.v || 1 === e.v
                ? (e.recoveryParam = e.v)
                : (e.recoveryParam = 1 - (e.v % 2));
          else if (null == e.v) e.v = 27 + e.recoveryParam;
          else {
            let r = 0 === e.v || 1 === e.v ? e.v : 1 - (e.v % 2);
            e.recoveryParam !== r &&
              n.throwArgumentError('signature recoveryParam mismatch v', 'signature', t);
          }
          null != e.r && d(e.r)
            ? (e.r = b(e.r, 32))
            : n.throwArgumentError('signature missing or invalid r', 'signature', t),
            null != e.s && d(e.s)
              ? (e.s = b(e.s, 32))
              : n.throwArgumentError('signature missing or invalid s', 'signature', t);
          let r = l(e.s);
          r[0] >= 128 && n.throwArgumentError('signature s out of range', 'signature', t),
            e.recoveryParam && (r[0] |= 128);
          let i = p(r);
          e._vs &&
            (d(e._vs) || n.throwArgumentError('signature invalid _vs', 'signature', t),
            (e._vs = b(e._vs, 32))),
            null == e._vs
              ? (e._vs = i)
              : e._vs !== i &&
                n.throwArgumentError('signature _vs mismatch v and s', 'signature', t);
        }
        return (e.yParityAndS = e._vs), (e.compact = e.r + e.yParityAndS.substring(2)), e;
      }
      function A(t) {
        return p(h([(t = w(t)).r, t.s, t.recoveryParam ? '0x1c' : '0x1b']));
      }
    },
    5469: function (t, e, r) {
      'use strict';
      r.d(e, {
        i: function () {
          return n;
        },
      });
      let n = 'hash/5.7.0';
    },
    57934: function (t, e, r) {
      'use strict';
      r.d(e, {
        id: function () {
          return s;
        },
      });
      var n = r(14752),
        i = r(35321);
      function s(t) {
        return (0, n.w)((0, i.Y0)(t));
      }
    },
    22396: function (t, e, r) {
      'use strict';
      r.d(e, {
        E: function () {
          return x;
        },
      });
      var n = r(56805),
        i = r(7523),
        s = r(7730),
        o = r(14752),
        a = r(50357),
        u = r(67214),
        l = r(5469),
        h = r(57934);
      let c = new u.Yd(l.i),
        d = new Uint8Array(32);
      d.fill(0);
      let f = i.O$.from(-1),
        p = i.O$.from(0),
        m = i.O$.from(1),
        g = i.O$.from('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
        v = (0, s.$m)(m.toHexString(), 32),
        y = (0, s.$m)(p.toHexString(), 32),
        b = {
          name: 'string',
          version: 'string',
          chainId: 'uint256',
          verifyingContract: 'address',
          salt: 'bytes32',
        },
        w = ['name', 'version', 'chainId', 'verifyingContract', 'salt'];
      function A(t) {
        return function (e) {
          return (
            'string' != typeof e &&
              c.throwArgumentError(
                `invalid domain value for ${JSON.stringify(t)}`,
                `domain.${t}`,
                e
              ),
            e
          );
        };
      }
      let _ = {
        name: A('name'),
        version: A('version'),
        chainId: function (t) {
          try {
            return i.O$.from(t).toString();
          } catch (t) {}
          return c.throwArgumentError('invalid domain value for "chainId"', 'domain.chainId', t);
        },
        verifyingContract: function (t) {
          try {
            return (0, n.Kn)(t).toLowerCase();
          } catch (t) {}
          return c.throwArgumentError(
            'invalid domain value "verifyingContract"',
            'domain.verifyingContract',
            t
          );
        },
        salt: function (t) {
          try {
            let e = (0, s.lE)(t);
            if (32 !== e.length) throw Error('bad length');
            return (0, s.Dv)(e);
          } catch (t) {}
          return c.throwArgumentError('invalid domain value "salt"', 'domain.salt', t);
        },
      };
      function E(t) {
        {
          let e = t.match(/^(u?)int(\d*)$/);
          if (e) {
            let r = '' === e[1],
              n = parseInt(e[2] || '256');
            (n % 8 != 0 || n > 256 || (e[2] && e[2] !== String(n))) &&
              c.throwArgumentError('invalid numeric width', 'type', t);
            let o = g.mask(r ? n - 1 : n),
              a = r ? o.add(m).mul(f) : p;
            return function (e) {
              let r = i.O$.from(e);
              return (
                (r.lt(a) || r.gt(o)) &&
                  c.throwArgumentError(`value out-of-bounds for ${t}`, 'value', e),
                (0, s.$m)(r.toTwos(256).toHexString(), 32)
              );
            };
          }
        }
        {
          let e = t.match(/^bytes(\d+)$/);
          if (e) {
            let r = parseInt(e[1]);
            return (
              (0 === r || r > 32 || e[1] !== String(r)) &&
                c.throwArgumentError('invalid bytes width', 'type', t),
              function (e) {
                return (
                  (0, s.lE)(e).length !== r &&
                    c.throwArgumentError(`invalid length for ${t}`, 'value', e),
                  (function (t) {
                    let e = (0, s.lE)(t),
                      r = e.length % 32;
                    return r ? (0, s.xs)([e, d.slice(r)]) : (0, s.Dv)(e);
                  })(e)
                );
              }
            );
          }
        }
        switch (t) {
          case 'address':
            return function (t) {
              return (0, s.$m)((0, n.Kn)(t), 32);
            };
          case 'bool':
            return function (t) {
              return t ? v : y;
            };
          case 'bytes':
            return function (t) {
              return (0, o.w)(t);
            };
          case 'string':
            return function (t) {
              return (0, h.id)(t);
            };
        }
        return null;
      }
      function k(t, e) {
        return `${t}(${e.map(({ name: t, type: e }) => e + ' ' + t).join(',')})`;
      }
      class x {
        constructor(t) {
          (0, a.zG)(this, 'types', Object.freeze((0, a.p$)(t))),
            (0, a.zG)(this, '_encoderCache', {}),
            (0, a.zG)(this, '_types', {});
          let e = {},
            r = {},
            n = {};
          for (let i in (Object.keys(t).forEach((t) => {
            (e[t] = {}), (r[t] = []), (n[t] = {});
          }),
          t)) {
            let n = {};
            t[i].forEach((s) => {
              n[s.name] &&
                c.throwArgumentError(
                  `duplicate variable name ${JSON.stringify(s.name)} in ${JSON.stringify(i)}`,
                  'types',
                  t
                ),
                (n[s.name] = !0);
              let o = s.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
              o === i &&
                c.throwArgumentError(`circular type reference to ${JSON.stringify(o)}`, 'types', t),
                E(o) ||
                  (r[o] || c.throwArgumentError(`unknown type ${JSON.stringify(o)}`, 'types', t),
                  r[o].push(i),
                  (e[i][o] = !0));
            });
          }
          let i = Object.keys(r).filter((t) => 0 === r[t].length);
          for (let s in (0 === i.length
            ? c.throwArgumentError('missing primary type', 'types', t)
            : i.length > 1 &&
              c.throwArgumentError(
                `ambiguous primary types or unused types: ${i.map((t) => JSON.stringify(t)).join(', ')}`,
                'types',
                t
              ),
          (0, a.zG)(this, 'primaryType', i[0]),
          !(function i(s, o) {
            o[s] &&
              c.throwArgumentError(`circular type reference to ${JSON.stringify(s)}`, 'types', t),
              (o[s] = !0),
              Object.keys(e[s]).forEach((t) => {
                r[t] &&
                  (i(t, o),
                  Object.keys(o).forEach((e) => {
                    n[e][t] = !0;
                  }));
              }),
              delete o[s];
          })(this.primaryType, {}),
          n)) {
            let e = Object.keys(n[s]);
            e.sort(), (this._types[s] = k(s, t[s]) + e.map((e) => k(e, t[e])).join(''));
          }
        }
        getEncoder(t) {
          let e = this._encoderCache[t];
          return e || (e = this._encoderCache[t] = this._getEncoder(t)), e;
        }
        _getEncoder(t) {
          {
            let e = E(t);
            if (e) return e;
          }
          let e = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
          if (e) {
            let t = e[1],
              r = this.getEncoder(t),
              n = parseInt(e[3]);
            return (e) => {
              n >= 0 &&
                e.length !== n &&
                c.throwArgumentError(
                  'array length mismatch; expected length ${ arrayLength }',
                  'value',
                  e
                );
              let i = e.map(r);
              return this._types[t] && (i = i.map(o.w)), (0, o.w)((0, s.xs)(i));
            };
          }
          let r = this.types[t];
          if (r) {
            let e = (0, h.id)(this._types[t]);
            return (t) => {
              let n = r.map(({ name: e, type: r }) => {
                let n = this.getEncoder(r)(t[e]);
                return this._types[r] ? (0, o.w)(n) : n;
              });
              return n.unshift(e), (0, s.xs)(n);
            };
          }
          return c.throwArgumentError(`unknown type: ${t}`, 'type', t);
        }
        encodeType(t) {
          let e = this._types[t];
          return e || c.throwArgumentError(`unknown type: ${JSON.stringify(t)}`, 'name', t), e;
        }
        encodeData(t, e) {
          return this.getEncoder(t)(e);
        }
        hashStruct(t, e) {
          return (0, o.w)(this.encodeData(t, e));
        }
        encode(t) {
          return this.encodeData(this.primaryType, t);
        }
        hash(t) {
          return this.hashStruct(this.primaryType, t);
        }
        _visit(t, e, r) {
          if (E(t)) return r(t, e);
          let n = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
          if (n) {
            let t = n[1],
              i = parseInt(n[3]);
            return (
              i >= 0 &&
                e.length !== i &&
                c.throwArgumentError(
                  'array length mismatch; expected length ${ arrayLength }',
                  'value',
                  e
                ),
              e.map((e) => this._visit(t, e, r))
            );
          }
          let i = this.types[t];
          return i
            ? i.reduce((t, { name: n, type: i }) => ((t[n] = this._visit(i, e[n], r)), t), {})
            : c.throwArgumentError(`unknown type: ${t}`, 'type', t);
        }
        visit(t, e) {
          return this._visit(this.primaryType, t, e);
        }
        static from(t) {
          return new x(t);
        }
        static getPrimaryType(t) {
          return x.from(t).primaryType;
        }
        static hashStruct(t, e, r) {
          return x.from(e).hashStruct(t, r);
        }
        static hashDomain(t) {
          let e = [];
          for (let r in t) {
            let n = b[r];
            n ||
              c.throwArgumentError(
                `invalid typed-data domain key: ${JSON.stringify(r)}`,
                'domain',
                t
              ),
              e.push({ name: r, type: n });
          }
          return (
            e.sort((t, e) => w.indexOf(t.name) - w.indexOf(e.name)),
            x.hashStruct('EIP712Domain', { EIP712Domain: e }, t)
          );
        }
        static encode(t, e, r) {
          return (0, s.xs)(['0x1901', x.hashDomain(t), x.from(e).hash(r)]);
        }
        static hash(t, e, r) {
          return (0, o.w)(x.encode(t, e, r));
        }
        static resolveNames(t, e, r, n) {
          var i, o, u, l;
          return (
            (i = this),
            (o = void 0),
            (u = void 0),
            (l = function* () {
              t = (0, a.DC)(t);
              let i = {};
              t.verifyingContract &&
                !(0, s.A7)(t.verifyingContract, 20) &&
                (i[t.verifyingContract] = '0x');
              let o = x.from(e);
              for (let t in (o.visit(
                r,
                (t, e) => ('address' !== t || (0, s.A7)(e, 20) || (i[e] = '0x'), e)
              ),
              i))
                i[t] = yield n(t);
              return (
                t.verifyingContract &&
                  i[t.verifyingContract] &&
                  (t.verifyingContract = i[t.verifyingContract]),
                (r = o.visit(r, (t, e) => ('address' === t && i[e] ? i[e] : e))),
                { domain: t, value: r }
              );
            }),
            new (u || (u = Promise))(function (t, e) {
              function r(t) {
                try {
                  s(l.next(t));
                } catch (t) {
                  e(t);
                }
              }
              function n(t) {
                try {
                  s(l.throw(t));
                } catch (t) {
                  e(t);
                }
              }
              function s(e) {
                var i;
                e.done
                  ? t(e.value)
                  : ((i = e.value) instanceof u
                      ? i
                      : new u(function (t) {
                          t(i);
                        })
                    ).then(r, n);
              }
              s((l = l.apply(i, o || [])).next());
            })
          );
        }
        static getPayload(t, e, r) {
          x.hashDomain(t);
          let n = {},
            o = [];
          w.forEach((e) => {
            let r = t[e];
            null != r && ((n[e] = _[e](r)), o.push({ name: e, type: b[e] }));
          });
          let u = x.from(e),
            l = (0, a.DC)(e);
          return (
            l.EIP712Domain
              ? c.throwArgumentError(
                  'types must not contain EIP712Domain type',
                  'types.EIP712Domain',
                  e
                )
              : (l.EIP712Domain = o),
            u.encode(r),
            {
              types: l,
              domain: n,
              primaryType: u.primaryType,
              message: u.visit(r, (t, e) => {
                if (t.match(/^bytes(\d*)/)) return (0, s.Dv)((0, s.lE)(e));
                if (t.match(/^u?int/)) return i.O$.from(e).toString();
                switch (t) {
                  case 'address':
                    return e.toLowerCase();
                  case 'bool':
                    return !!e;
                  case 'string':
                    return (
                      'string' != typeof e && c.throwArgumentError('invalid string', 'value', e), e
                    );
                }
                return c.throwArgumentError('unsupported type', 'type', t);
              }),
            }
          );
        }
      }
    },
    14752: function (t, e, r) {
      'use strict';
      r.d(e, {
        w: function () {
          return o;
        },
      });
      var n = r(58728),
        i = r.n(n),
        s = r(7730);
      function o(t) {
        return '0x' + i().keccak_256((0, s.lE)(t));
      }
    },
    67214: function (t, e, r) {
      'use strict';
      var n, i, s, o;
      r.d(e, {
        Yd: function () {
          return p;
        },
      });
      let a = !1,
        u = !1,
        l = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 },
        h = 2,
        c = null,
        d = (function () {
          try {
            let t = [];
            if (
              (['NFD', 'NFC', 'NFKD', 'NFKC'].forEach((e) => {
                try {
                  if ('test' !== 'test'.normalize(e)) throw Error('bad normalize');
                } catch (r) {
                  t.push(e);
                }
              }),
              t.length)
            )
              throw Error('missing ' + t.join(', '));
            if (String.fromCharCode(233).normalize('NFD') !== String.fromCharCode(101, 769))
              throw Error('broken implementation');
          } catch (t) {
            return t.message;
          }
          return null;
        })();
      ((s = n || (n = {})).DEBUG = 'DEBUG'),
        (s.INFO = 'INFO'),
        (s.WARNING = 'WARNING'),
        (s.ERROR = 'ERROR'),
        (s.OFF = 'OFF'),
        ((o = i || (i = {})).UNKNOWN_ERROR = 'UNKNOWN_ERROR'),
        (o.NOT_IMPLEMENTED = 'NOT_IMPLEMENTED'),
        (o.UNSUPPORTED_OPERATION = 'UNSUPPORTED_OPERATION'),
        (o.NETWORK_ERROR = 'NETWORK_ERROR'),
        (o.SERVER_ERROR = 'SERVER_ERROR'),
        (o.TIMEOUT = 'TIMEOUT'),
        (o.BUFFER_OVERRUN = 'BUFFER_OVERRUN'),
        (o.NUMERIC_FAULT = 'NUMERIC_FAULT'),
        (o.MISSING_NEW = 'MISSING_NEW'),
        (o.INVALID_ARGUMENT = 'INVALID_ARGUMENT'),
        (o.MISSING_ARGUMENT = 'MISSING_ARGUMENT'),
        (o.UNEXPECTED_ARGUMENT = 'UNEXPECTED_ARGUMENT'),
        (o.CALL_EXCEPTION = 'CALL_EXCEPTION'),
        (o.INSUFFICIENT_FUNDS = 'INSUFFICIENT_FUNDS'),
        (o.NONCE_EXPIRED = 'NONCE_EXPIRED'),
        (o.REPLACEMENT_UNDERPRICED = 'REPLACEMENT_UNDERPRICED'),
        (o.UNPREDICTABLE_GAS_LIMIT = 'UNPREDICTABLE_GAS_LIMIT'),
        (o.TRANSACTION_REPLACED = 'TRANSACTION_REPLACED'),
        (o.ACTION_REJECTED = 'ACTION_REJECTED');
      let f = '0123456789abcdef';
      class p {
        constructor(t) {
          Object.defineProperty(this, 'version', { enumerable: !0, value: t, writable: !1 });
        }
        _log(t, e) {
          let r = t.toLowerCase();
          null == l[r] && this.throwArgumentError('invalid log level name', 'logLevel', t),
            h > l[r] || console.log.apply(console, e);
        }
        debug(...t) {
          this._log(p.levels.DEBUG, t);
        }
        info(...t) {
          this._log(p.levels.INFO, t);
        }
        warn(...t) {
          this._log(p.levels.WARNING, t);
        }
        makeError(t, e, r) {
          if (u) return this.makeError('censored error', e, {});
          e || (e = p.errors.UNKNOWN_ERROR), r || (r = {});
          let n = [];
          Object.keys(r).forEach((t) => {
            let e = r[t];
            try {
              if (e instanceof Uint8Array) {
                let r = '';
                for (let t = 0; t < e.length; t++) r += f[e[t] >> 4] + f[15 & e[t]];
                n.push(t + '=Uint8Array(0x' + r + ')');
              } else n.push(t + '=' + JSON.stringify(e));
            } catch (e) {
              n.push(t + '=' + JSON.stringify(r[t].toString()));
            }
          }),
            n.push(`code=${e}`),
            n.push(`version=${this.version}`);
          let s = t,
            o = '';
          switch (e) {
            case i.NUMERIC_FAULT: {
              o = 'NUMERIC_FAULT';
              let e = t;
              switch (e) {
                case 'overflow':
                case 'underflow':
                case 'division-by-zero':
                  o += '-' + e;
                  break;
                case 'negative-power':
                case 'negative-width':
                  o += '-unsupported';
                  break;
                case 'unbound-bitwise-result':
                  o += '-unbound-result';
              }
              break;
            }
            case i.CALL_EXCEPTION:
            case i.INSUFFICIENT_FUNDS:
            case i.MISSING_NEW:
            case i.NONCE_EXPIRED:
            case i.REPLACEMENT_UNDERPRICED:
            case i.TRANSACTION_REPLACED:
            case i.UNPREDICTABLE_GAS_LIMIT:
              o = e;
          }
          o && (t += ' [ See: https://links.ethers.org/v5-errors-' + o + ' ]'),
            n.length && (t += ' (' + n.join(', ') + ')');
          let a = Error(t);
          return (
            (a.reason = s),
            (a.code = e),
            Object.keys(r).forEach(function (t) {
              a[t] = r[t];
            }),
            a
          );
        }
        throwError(t, e, r) {
          throw this.makeError(t, e, r);
        }
        throwArgumentError(t, e, r) {
          return this.throwError(t, p.errors.INVALID_ARGUMENT, { argument: e, value: r });
        }
        assert(t, e, r, n) {
          t || this.throwError(e, r, n);
        }
        assertArgument(t, e, r, n) {
          t || this.throwArgumentError(e, r, n);
        }
        checkNormalize(t) {
          null == t && (t = 'platform missing String.prototype.normalize'),
            d &&
              this.throwError(
                'platform missing String.prototype.normalize',
                p.errors.UNSUPPORTED_OPERATION,
                { operation: 'String.prototype.normalize', form: d }
              );
        }
        checkSafeUint53(t, e) {
          'number' == typeof t &&
            (null == e && (e = 'value not safe'),
            (t < 0 || t >= 9007199254740991) &&
              this.throwError(e, p.errors.NUMERIC_FAULT, {
                operation: 'checkSafeInteger',
                fault: 'out-of-safe-range',
                value: t,
              }),
            t % 1 &&
              this.throwError(e, p.errors.NUMERIC_FAULT, {
                operation: 'checkSafeInteger',
                fault: 'non-integer',
                value: t,
              }));
        }
        checkArgumentCount(t, e, r) {
          (r = r ? ': ' + r : ''),
            t < e &&
              this.throwError('missing argument' + r, p.errors.MISSING_ARGUMENT, {
                count: t,
                expectedCount: e,
              }),
            t > e &&
              this.throwError('too many arguments' + r, p.errors.UNEXPECTED_ARGUMENT, {
                count: t,
                expectedCount: e,
              });
        }
        checkNew(t, e) {
          (t === Object || null == t) &&
            this.throwError('missing new', p.errors.MISSING_NEW, { name: e.name });
        }
        checkAbstract(t, e) {
          t === e
            ? this.throwError(
                'cannot instantiate abstract class ' +
                  JSON.stringify(e.name) +
                  ' directly; use a sub-class',
                p.errors.UNSUPPORTED_OPERATION,
                { name: t.name, operation: 'new' }
              )
            : (t === Object || null == t) &&
              this.throwError('missing new', p.errors.MISSING_NEW, { name: e.name });
        }
        static globalLogger() {
          return c || (c = new p('logger/5.7.0')), c;
        }
        static setCensorship(t, e) {
          if (
            (!t &&
              e &&
              this.globalLogger().throwError(
                'cannot permanently disable censorship',
                p.errors.UNSUPPORTED_OPERATION,
                { operation: 'setCensorship' }
              ),
            a)
          ) {
            if (!t) return;
            this.globalLogger().throwError(
              'error censorship permanent',
              p.errors.UNSUPPORTED_OPERATION,
              { operation: 'setCensorship' }
            );
          }
          (u = !!t), (a = !!e);
        }
        static setLogLevel(t) {
          let e = l[t.toLowerCase()];
          if (null == e) {
            p.globalLogger().warn('invalid log level - ' + t);
            return;
          }
          h = e;
        }
        static from(t) {
          return new p(t);
        }
      }
      (p.errors = i), (p.levels = n);
    },
    50357: function (t, e, r) {
      'use strict';
      r.d(e, {
        dk: function () {
          return c;
        },
        uj: function () {
          return a;
        },
        p$: function () {
          return h;
        },
        zG: function () {
          return i;
        },
        tu: function () {
          return s;
        },
        mE: function () {
          return o;
        },
        DC: function () {
          return u;
        },
      });
      let n = new (r(67214).Yd)('properties/5.7.0');
      function i(t, e, r) {
        Object.defineProperty(t, e, { enumerable: !0, value: r, writable: !1 });
      }
      function s(t, e) {
        for (let r = 0; r < 32; r++) {
          if (t[e]) return t[e];
          if (!t.prototype || 'object' != typeof t.prototype) break;
          t = Object.getPrototypeOf(t.prototype).constructor;
        }
        return null;
      }
      function o(t) {
        var e, r, n, i;
        return (
          (e = this),
          (r = void 0),
          (n = void 0),
          (i = function* () {
            let e = Object.keys(t).map((e) =>
              Promise.resolve(t[e]).then((t) => ({ key: e, value: t }))
            );
            return (yield Promise.all(e)).reduce((t, e) => ((t[e.key] = e.value), t), {});
          }),
          new (n || (n = Promise))(function (t, s) {
            function o(t) {
              try {
                u(i.next(t));
              } catch (t) {
                s(t);
              }
            }
            function a(t) {
              try {
                u(i.throw(t));
              } catch (t) {
                s(t);
              }
            }
            function u(e) {
              var r;
              e.done
                ? t(e.value)
                : ((r = e.value) instanceof n
                    ? r
                    : new n(function (t) {
                        t(r);
                      })
                  ).then(o, a);
            }
            u((i = i.apply(e, r || [])).next());
          })
        );
      }
      function a(t, e) {
        (t && 'object' == typeof t) || n.throwArgumentError('invalid object', 'object', t),
          Object.keys(t).forEach((r) => {
            e[r] || n.throwArgumentError('invalid object key - ' + r, 'transaction:' + r, t);
          });
      }
      function u(t) {
        let e = {};
        for (let r in t) e[r] = t[r];
        return e;
      }
      let l = { bigint: !0, boolean: !0, function: !0, number: !0, string: !0 };
      function h(t) {
        return (function (t) {
          if (
            (function t(e) {
              if (null == e || l[typeof e]) return !0;
              if (Array.isArray(e) || 'object' == typeof e) {
                if (!Object.isFrozen(e)) return !1;
                let r = Object.keys(e);
                for (let n = 0; n < r.length; n++) {
                  let i = null;
                  try {
                    i = e[r[n]];
                  } catch (t) {
                    continue;
                  }
                  if (!t(i)) return !1;
                }
                return !0;
              }
              return n.throwArgumentError(`Cannot deepCopy ${typeof e}`, 'object', e);
            })(t)
          )
            return t;
          if (Array.isArray(t)) return Object.freeze(t.map((t) => h(t)));
          if ('object' == typeof t) {
            let e = {};
            for (let r in t) {
              let n = t[r];
              void 0 !== n && i(e, r, h(n));
            }
            return e;
          }
          return n.throwArgumentError(`Cannot deepCopy ${typeof t}`, 'object', t);
        })(t);
      }
      class c {
        constructor(t) {
          for (let e in t) this[e] = h(t[e]);
        }
      }
    },
    29672: function (t, e, r) {
      'use strict';
      let n, i;
      r.d(e, {
        c: function () {
          return tU;
        },
      });
      var s,
        o = r(50357),
        a = r(67214);
      let u = 'providers/5.7.2';
      var l = r(18833),
        h = r(7523),
        c = r(7730),
        d = r(22396),
        f = r(35321),
        p = r(31857);
      function m(t) {
        t = atob(t);
        let e = [];
        for (let r = 0; r < t.length; r++) e.push(t.charCodeAt(r));
        return (0, c.lE)(e);
      }
      function g(t) {
        t = (0, c.lE)(t);
        let e = '';
        for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
        return btoa(e);
      }
      let v = new a.Yd('web/5.7.1');
      function y(t) {
        return new Promise((e) => {
          setTimeout(e, t);
        });
      }
      function b(t, e) {
        if (null == t) return null;
        if ('string' == typeof t) return t;
        if ((0, c.Zq)(t)) {
          if (e && ('text' === e.split('/')[0] || 'application/json' === e.split(';')[0].trim()))
            try {
              return (0, f.ZN)(t);
            } catch (t) {}
          return (0, c.Dv)(t);
        }
        return t;
      }
      function w(t, e, r) {
        let n = null;
        if (null != e) {
          n = (0, f.Y0)(e);
          let r = 'string' == typeof t ? { url: t } : (0, o.DC)(t);
          r.headers
            ? 0 !==
                Object.keys(r.headers).filter((t) => 'content-type' === t.toLowerCase()).length ||
              ((r.headers = (0, o.DC)(r.headers)), (r.headers['content-type'] = 'application/json'))
            : (r.headers = { 'content-type': 'application/json' }),
            (t = r);
        }
        return (function (t, e, r) {
          let n;
          let i = 'object' == typeof t && null != t.throttleLimit ? t.throttleLimit : 12;
          v.assertArgument(
            i > 0 && i % 1 == 0,
            'invalid connection throttle limit',
            'connection.throttleLimit',
            i
          );
          let s = 'object' == typeof t ? t.throttleCallback : null,
            u =
              'object' == typeof t && 'number' == typeof t.throttleSlotInterval
                ? t.throttleSlotInterval
                : 100;
          v.assertArgument(
            u > 0 && u % 1 == 0,
            'invalid connection throttle slot interval',
            'connection.throttleSlotInterval',
            u
          );
          let l = 'object' == typeof t && !!t.errorPassThrough,
            h = {},
            d = null,
            p = { method: 'GET' },
            w = !1,
            A = 12e4;
          if ('string' == typeof t) d = t;
          else if ('object' == typeof t) {
            if (
              ((null == t || null == t.url) &&
                v.throwArgumentError('missing URL', 'connection.url', t),
              (d = t.url),
              'number' == typeof t.timeout && t.timeout > 0 && (A = t.timeout),
              t.headers)
            )
              for (let e in t.headers)
                (h[e.toLowerCase()] = { key: e, value: String(t.headers[e]) }),
                  ['if-none-match', 'if-modified-since'].indexOf(e.toLowerCase()) >= 0 && (w = !0);
            if (((p.allowGzip = !!t.allowGzip), null != t.user && null != t.password)) {
              'https:' !== d.substring(0, 6) &&
                !0 !== t.allowInsecureAuthentication &&
                v.throwError(
                  'basic authentication requires a secure https url',
                  a.Yd.errors.INVALID_ARGUMENT,
                  { argument: 'url', url: d, user: t.user, password: '[REDACTED]' }
                );
              let e = t.user + ':' + t.password;
              h.authorization = { key: 'Authorization', value: 'Basic ' + g((0, f.Y0)(e)) };
            }
            null != t.skipFetchSetup && (p.skipFetchSetup = !!t.skipFetchSetup),
              null != t.fetchOptions && (p.fetchOptions = (0, o.DC)(t.fetchOptions));
          }
          let _ = RegExp('^data:([^;:]*)?(;base64)?,(.*)$', 'i'),
            E = d ? d.match(_) : null;
          if (E)
            try {
              var k;
              let t = {
                  statusCode: 200,
                  statusMessage: 'OK',
                  headers: { 'content-type': E[1] || 'text/plain' },
                  body: E[2]
                    ? m(E[3])
                    : ((k = E[3]),
                      (0, f.Y0)(
                        k.replace(/%([0-9a-f][0-9a-f])/gi, (t, e) =>
                          String.fromCharCode(parseInt(e, 16))
                        )
                      )),
                },
                e = t.body;
              return r && (e = r(t.body, t)), Promise.resolve(e);
            } catch (t) {
              v.throwError('processing response error', a.Yd.errors.SERVER_ERROR, {
                body: b(E[1], E[2]),
                error: t,
                requestBody: null,
                requestMethod: 'GET',
                url: d,
              });
            }
          e &&
            ((p.method = 'POST'),
            (p.body = e),
            null == h['content-type'] &&
              (h['content-type'] = { key: 'Content-Type', value: 'application/octet-stream' }),
            null == h['content-length'] &&
              (h['content-length'] = { key: 'Content-Length', value: String(e.length) }));
          let x = {};
          Object.keys(h).forEach((t) => {
            let e = h[t];
            x[e.key] = e.value;
          }),
            (p.headers = x);
          let N =
              ((n = null),
              {
                promise: new Promise(function (t, e) {
                  A &&
                    (n = setTimeout(() => {
                      null != n &&
                        ((n = null),
                        e(
                          v.makeError('timeout', a.Yd.errors.TIMEOUT, {
                            requestBody: b(p.body, x['content-type']),
                            requestMethod: p.method,
                            timeout: A,
                            url: d,
                          })
                        ));
                    }, A));
                }),
                cancel: function () {
                  null != n && (clearTimeout(n), (n = null));
                },
              }),
            M = (function () {
              var t, e, n, o;
              return (
                (t = this),
                (e = void 0),
                (n = void 0),
                (o = function* () {
                  for (let t = 0; t < i; t++) {
                    let e = null;
                    try {
                      if (
                        ((e = yield (function (t, e) {
                          var r, n, i, s;
                          return (
                            (r = this),
                            (n = void 0),
                            (i = void 0),
                            (s = function* () {
                              null == e && (e = {});
                              let r = {
                                method: e.method || 'GET',
                                headers: e.headers || {},
                                body: e.body || void 0,
                              };
                              if (
                                (!0 !== e.skipFetchSetup &&
                                  ((r.mode = 'cors'),
                                  (r.cache = 'no-cache'),
                                  (r.credentials = 'same-origin'),
                                  (r.redirect = 'follow'),
                                  (r.referrer = 'client')),
                                null != e.fetchOptions)
                              ) {
                                let t = e.fetchOptions;
                                t.mode && (r.mode = t.mode),
                                  t.cache && (r.cache = t.cache),
                                  t.credentials && (r.credentials = t.credentials),
                                  t.redirect && (r.redirect = t.redirect),
                                  t.referrer && (r.referrer = t.referrer);
                              }
                              let n = yield fetch(t, r),
                                i = yield n.arrayBuffer(),
                                s = {};
                              return (
                                n.headers.forEach
                                  ? n.headers.forEach((t, e) => {
                                      s[e.toLowerCase()] = t;
                                    })
                                  : n.headers.keys().forEach((t) => {
                                      s[t.toLowerCase()] = n.headers.get(t);
                                    }),
                                {
                                  headers: s,
                                  statusCode: n.status,
                                  statusMessage: n.statusText,
                                  body: (0, c.lE)(new Uint8Array(i)),
                                }
                              );
                            }),
                            new (i || (i = Promise))(function (t, e) {
                              function o(t) {
                                try {
                                  u(s.next(t));
                                } catch (t) {
                                  e(t);
                                }
                              }
                              function a(t) {
                                try {
                                  u(s.throw(t));
                                } catch (t) {
                                  e(t);
                                }
                              }
                              function u(e) {
                                var r;
                                e.done
                                  ? t(e.value)
                                  : ((r = e.value) instanceof i
                                      ? r
                                      : new i(function (t) {
                                          t(r);
                                        })
                                    ).then(o, a);
                              }
                              u((s = s.apply(r, n || [])).next());
                            })
                          );
                        })(d, p)),
                        t < i)
                      ) {
                        if (301 === e.statusCode || 302 === e.statusCode) {
                          let t = e.headers.location || '';
                          if ('GET' === p.method && t.match(/^https:/)) {
                            d = e.headers.location;
                            continue;
                          }
                        } else if (429 === e.statusCode) {
                          let r = !0;
                          if ((s && (r = yield s(t, d)), r)) {
                            let r = 0,
                              n = e.headers['retry-after'];
                            (r =
                              'string' == typeof n && n.match(/^[1-9][0-9]*$/)
                                ? 1e3 * parseInt(n)
                                : u * parseInt(String(Math.random() * Math.pow(2, t)))),
                              yield y(r);
                            continue;
                          }
                        }
                      }
                    } catch (t) {
                      null == (e = t.response) &&
                        (N.cancel(),
                        v.throwError('missing response', a.Yd.errors.SERVER_ERROR, {
                          requestBody: b(p.body, x['content-type']),
                          requestMethod: p.method,
                          serverError: t,
                          url: d,
                        }));
                    }
                    let n = e.body;
                    if (
                      (w && 304 === e.statusCode
                        ? (n = null)
                        : !l &&
                          (e.statusCode < 200 || e.statusCode >= 300) &&
                          (N.cancel(),
                          v.throwError('bad response', a.Yd.errors.SERVER_ERROR, {
                            status: e.statusCode,
                            headers: e.headers,
                            body: b(n, e.headers ? e.headers['content-type'] : null),
                            requestBody: b(p.body, x['content-type']),
                            requestMethod: p.method,
                            url: d,
                          })),
                      r)
                    )
                      try {
                        let t = yield r(n, e);
                        return N.cancel(), t;
                      } catch (r) {
                        if (r.throttleRetry && t < i) {
                          let e = !0;
                          if ((s && (e = yield s(t, d)), e)) {
                            let e = u * parseInt(String(Math.random() * Math.pow(2, t)));
                            yield y(e);
                            continue;
                          }
                        }
                        N.cancel(),
                          v.throwError('processing response error', a.Yd.errors.SERVER_ERROR, {
                            body: b(n, e.headers ? e.headers['content-type'] : null),
                            error: r,
                            requestBody: b(p.body, x['content-type']),
                            requestMethod: p.method,
                            url: d,
                          });
                      }
                    return N.cancel(), n;
                  }
                  return v.throwError('failed response', a.Yd.errors.SERVER_ERROR, {
                    requestBody: b(p.body, x['content-type']),
                    requestMethod: p.method,
                    url: d,
                  });
                }),
                new (n || (n = Promise))(function (r, i) {
                  function s(t) {
                    try {
                      u(o.next(t));
                    } catch (t) {
                      i(t);
                    }
                  }
                  function a(t) {
                    try {
                      u(o.throw(t));
                    } catch (t) {
                      i(t);
                    }
                  }
                  function u(t) {
                    var e;
                    t.done
                      ? r(t.value)
                      : ((e = t.value) instanceof n
                          ? e
                          : new n(function (t) {
                              t(e);
                            })
                        ).then(s, a);
                  }
                  u((o = o.apply(t, e || [])).next());
                })
              );
            })();
          return Promise.race([N.promise, M]);
        })(t, n, (t, e) => {
          let n = null;
          if (null != t)
            try {
              n = JSON.parse((0, f.ZN)(t));
            } catch (e) {
              v.throwError('invalid JSON', a.Yd.errors.SERVER_ERROR, { body: t, error: e });
            }
          return r && (n = r(n, e)), n;
        });
      }
      function A(t, e) {
        return (
          e || (e = {}),
          null == (e = (0, o.DC)(e)).floor && (e.floor = 0),
          null == e.ceiling && (e.ceiling = 1e4),
          null == e.interval && (e.interval = 250),
          new Promise(function (r, n) {
            let i = null,
              s = !1,
              o = () => !s && ((s = !0), i && clearTimeout(i), !0);
            e.timeout &&
              (i = setTimeout(() => {
                o() && n(Error('timeout'));
              }, e.timeout));
            let a = e.retryLimit,
              u = 0;
            !(function i() {
              return t().then(
                function (t) {
                  if (void 0 !== t) o() && r(t);
                  else if (e.oncePoll) e.oncePoll.once('poll', i);
                  else if (e.onceBlock) e.onceBlock.once('block', i);
                  else if (!s) {
                    if (++u > a) {
                      o() && n(Error('retry limit reached'));
                      return;
                    }
                    let t = e.interval * parseInt(String(Math.random() * Math.pow(2, u)));
                    t < e.floor && (t = e.floor),
                      t > e.ceiling && (t = e.ceiling),
                      setTimeout(i, t);
                  }
                  return null;
                },
                function (t) {
                  o() && n(t);
                }
              );
            })();
          })
        );
      }
      var _ = r(62377),
        E = r(94731),
        k = r(14752),
        x = r(5469);
      function N(t, e) {
        null == e && (e = 1);
        let r = [],
          n = r.forEach,
          i = function (t, e) {
            n.call(t, function (t) {
              e > 0 && Array.isArray(t) ? i(t, e - 1) : r.push(t);
            });
          };
        return i(t, e), r;
      }
      function M(t, e) {
        let r = Array(t);
        for (let n = 0, i = -1; n < t; n++) r[n] = i += 1 + e();
        return r;
      }
      function I(t, e) {
        let r = M(t(), t),
          n = t(),
          i = M(n, t),
          s = (function (t, e) {
            let r = Array(t);
            for (let n = 0; n < t; n++) r[n] = 1 + e();
            return r;
          })(n, t);
        for (let t = 0; t < n; t++) for (let e = 0; e < s[t]; e++) r.push(i[t] + e);
        return e ? r.map((t) => e[t]) : r;
      }
      function P(t, e, r) {
        let n = Array(t)
          .fill(void 0)
          .map(() => []);
        for (let i = 0; i < e; i++)
          (function (t, e) {
            let r = Array(t);
            for (let i = 0, s = 0; i < t; i++) {
              var n;
              r[i] = s += 1 & (n = e()) ? ~n >> 1 : n >> 1;
            }
            return r;
          })(t, r).forEach((t, e) => n[e].push(t));
        return n;
      }
      let S =
          ((s = (function (t) {
            let e = 0;
            function r() {
              return (t[e++] << 8) | t[e++];
            }
            let n = r(),
              i = 1,
              s = [0, 1];
            for (let t = 1; t < n; t++) s.push((i += r()));
            let o = r(),
              a = e;
            e += o;
            let u = 0,
              l = 0;
            function h() {
              return 0 == u && ((l = (l << 8) | t[e++]), (u = 8)), (l >> --u) & 1;
            }
            let c = 0;
            for (let t = 0; t < 31; t++) c = (c << 1) | h();
            let d = [],
              f = 0,
              p = 2147483648;
            for (;;) {
              let t = Math.floor(((c - f + 1) * i - 1) / p),
                e = 0,
                r = n;
              for (; r - e > 1; ) {
                let n = (e + r) >>> 1;
                t < s[n] ? (r = n) : (e = n);
              }
              if (0 == e) break;
              d.push(e);
              let o = f + Math.floor((p * s[e]) / i),
                a = f + Math.floor((p * s[e + 1]) / i) - 1;
              for (; ((o ^ a) & 1073741824) == 0; )
                (c = ((c << 1) & 2147483647) | h()),
                  (o = (o << 1) & 2147483647),
                  (a = ((a << 1) & 2147483647) | 1);
              for (; o & ~a & 536870912; )
                (c = (1073741824 & c) | ((c << 1) & 1073741823) | h()),
                  (o = (o << 1) ^ 1073741824),
                  (a = ((1073741824 ^ a) << 1) | 1073741825);
              (f = o), (p = 1 + a - o);
            }
            let m = n - 4;
            return d.map((e) => {
              switch (e - m) {
                case 3:
                  return m + 65792 + ((t[a++] << 16) | (t[a++] << 8) | t[a++]);
                case 2:
                  return m + 256 + ((t[a++] << 8) | t[a++]);
                case 1:
                  return m + t[a++];
                default:
                  return e - 1;
              }
            });
          })(
            m(
              'AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=='
            )
          )),
          (i = 0),
          () => s[i++]),
        C = new Set(I(S)),
        T = new Set(I(S)),
        R = (function (t) {
          let e = [];
          for (;;) {
            let r = t();
            if (0 == r) break;
            e.push(
              (function (t, e) {
                let r = 1 + e(),
                  n = e(),
                  i = (function (t) {
                    let e = [];
                    for (;;) {
                      let r = t();
                      if (0 == r) break;
                      e.push(r);
                    }
                    return e;
                  })(e);
                return N(
                  P(i.length, 1 + t, e).map((t, e) => {
                    let s = t[0],
                      o = t.slice(1);
                    return Array(i[e])
                      .fill(void 0)
                      .map((t, e) => {
                        let i = e * n;
                        return [s + e * r, o.map((t) => t + i)];
                      });
                  })
                );
              })(r, t)
            );
          }
          for (;;) {
            let r = t() - 1;
            if (r < 0) break;
            e.push(P(1 + t(), 1 + r, t).map((t) => [t[0], t.slice(1)]));
          }
          return (function (t) {
            let e = {};
            for (let r = 0; r < t.length; r++) {
              let n = t[r];
              e[n[0]] = n[1];
            }
            return e;
          })(N(e));
        })(S),
        O =
          ((n = I(S).sort((t, e) => t - e)),
          (function t() {
            let e = [];
            for (;;) {
              let r = I(S, n);
              if (0 == r.length) break;
              e.push({ set: new Set(r), node: t() });
            }
            e.sort((t, e) => e.set.size - t.set.size);
            let r = S();
            return {
              branches: e,
              valid: r % 3,
              fe0f: !!(1 & (r = (r / 3) | 0)),
              save: 1 == (r >>= 1),
              check: 2 == r,
            };
          })());
      function B(t) {
        return t.filter((t) => 65039 != t);
      }
      function D(t) {
        for (let e of t.split('.')) {
          let t = (0, f.XL)(e);
          try {
            for (let e = t.lastIndexOf(95) - 1; e >= 0; e--)
              if (95 !== t[e]) throw Error('underscore only allowed at start');
            if (t.length >= 4 && t.every((t) => t < 128) && 45 === t[2] && 45 === t[3])
              throw Error('invalid label extension');
          } catch (t) {
            throw Error(`Invalid label "${e}": ${t.message}`);
          }
        }
        return t;
      }
      let L = new a.Yd(x.i),
        U = new Uint8Array(32);
      function F(t) {
        if (0 === t.length) throw Error('invalid ENS name; empty component');
        return t;
      }
      function G(t) {
        let e = (0, f.Y0)(
            D(
              (function (t, e) {
                let r = (0, f.XL)(t).reverse(),
                  n = [];
                for (; r.length; ) {
                  let t = (function (t, e) {
                    var r;
                    let n, i;
                    let s = O,
                      o = [],
                      a = t.length;
                    for (e && (e.length = 0); a; ) {
                      let u = t[--a];
                      if (
                        !(s =
                          null === (r = s.branches.find((t) => t.set.has(u))) || void 0 === r
                            ? void 0
                            : r.node)
                      )
                        break;
                      if (s.save) i = u;
                      else if (s.check && u === i) break;
                      o.push(u),
                        s.fe0f && (o.push(65039), a > 0 && 65039 == t[a - 1] && a--),
                        s.valid &&
                          ((n = o.slice()),
                          2 == s.valid && n.splice(1, 1),
                          e && e.push(...t.slice(a).reverse()),
                          (t.length = a));
                    }
                    return n;
                  })(r);
                  if (t) {
                    n.push(...e(t));
                    continue;
                  }
                  let i = r.pop();
                  if (C.has(i)) {
                    n.push(i);
                    continue;
                  }
                  if (T.has(i)) continue;
                  let s = R[i];
                  if (s) {
                    n.push(...s);
                    continue;
                  }
                  throw Error(`Disallowed codepoint: 0x${i.toString(16).toUpperCase()}`);
                }
                return D(String.fromCodePoint(...n).normalize('NFC'));
              })(t, B)
            )
          ),
          r = [];
        if (0 === t.length) return r;
        let n = 0;
        for (let t = 0; t < e.length; t++) 46 === e[t] && (r.push(F(e.slice(n, t))), (n = t + 1));
        if (n >= e.length) throw Error('invalid ENS name; empty component');
        return r.push(F(e.slice(n))), r;
      }
      function z(t) {
        'string' != typeof t && L.throwArgumentError('invalid ENS name; not a string', 'name', t);
        let e = U,
          r = G(t);
        for (; r.length; ) e = (0, k.w)((0, c.zo)([e, (0, k.w)(r.pop())]));
        return (0, c.Dv)(e);
      }
      U.fill(0);
      let Z = new a.Yd('networks/5.7.1');
      function Y(t) {
        let e = function (e, r) {
          null == r && (r = {});
          let n = [];
          if (e.InfuraProvider && '-' !== r.infura)
            try {
              n.push(new e.InfuraProvider(t, r.infura));
            } catch (t) {}
          if (e.EtherscanProvider && '-' !== r.etherscan)
            try {
              n.push(new e.EtherscanProvider(t, r.etherscan));
            } catch (t) {}
          if (e.AlchemyProvider && '-' !== r.alchemy)
            try {
              n.push(new e.AlchemyProvider(t, r.alchemy));
            } catch (t) {}
          if (e.PocketProvider && '-' !== r.pocket)
            try {
              let i = new e.PocketProvider(t, r.pocket);
              i.network &&
                -1 === ['goerli', 'ropsten', 'rinkeby', 'sepolia'].indexOf(i.network.name) &&
                n.push(i);
            } catch (t) {}
          if (e.CloudflareProvider && '-' !== r.cloudflare)
            try {
              n.push(new e.CloudflareProvider(t));
            } catch (t) {}
          if (e.AnkrProvider && '-' !== r.ankr)
            try {
              let i = new e.AnkrProvider(t, r.ankr);
              i.network && -1 === ['ropsten'].indexOf(i.network.name) && n.push(i);
            } catch (t) {}
          if (0 === n.length) return null;
          if (e.FallbackProvider) {
            let i = 1;
            return (
              null != r.quorum ? (i = r.quorum) : 'homestead' === t && (i = 2),
              new e.FallbackProvider(n, i)
            );
          }
          return n[0];
        };
        return (
          (e.renetwork = function (t) {
            return Y(t);
          }),
          e
        );
      }
      function q(t, e) {
        let r = function (r, n) {
          return r.JsonRpcProvider ? new r.JsonRpcProvider(t, e) : null;
        };
        return (
          (r.renetwork = function (e) {
            return q(t, e);
          }),
          r
        );
      }
      let j = {
          chainId: 1,
          ensAddress: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
          name: 'homestead',
          _defaultProvider: Y('homestead'),
        },
        H = {
          chainId: 3,
          ensAddress: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
          name: 'ropsten',
          _defaultProvider: Y('ropsten'),
        },
        K = {
          chainId: 63,
          name: 'classicMordor',
          _defaultProvider: q('https://www.ethercluster.com/mordor', 'classicMordor'),
        },
        J = {
          unspecified: { chainId: 0, name: 'unspecified' },
          homestead: j,
          mainnet: j,
          morden: { chainId: 2, name: 'morden' },
          ropsten: H,
          testnet: H,
          rinkeby: {
            chainId: 4,
            ensAddress: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
            name: 'rinkeby',
            _defaultProvider: Y('rinkeby'),
          },
          kovan: { chainId: 42, name: 'kovan', _defaultProvider: Y('kovan') },
          goerli: {
            chainId: 5,
            ensAddress: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
            name: 'goerli',
            _defaultProvider: Y('goerli'),
          },
          kintsugi: { chainId: 1337702, name: 'kintsugi' },
          sepolia: { chainId: 11155111, name: 'sepolia', _defaultProvider: Y('sepolia') },
          classic: {
            chainId: 61,
            name: 'classic',
            _defaultProvider: q('https://www.ethercluster.com/etc', 'classic'),
          },
          classicMorden: { chainId: 62, name: 'classicMorden' },
          classicMordor: K,
          classicTestnet: K,
          classicKotti: {
            chainId: 6,
            name: 'classicKotti',
            _defaultProvider: q('https://www.ethercluster.com/kotti', 'classicKotti'),
          },
          xdai: { chainId: 100, name: 'xdai' },
          matic: { chainId: 137, name: 'matic', _defaultProvider: Y('matic') },
          maticmum: { chainId: 80001, name: 'maticmum' },
          optimism: { chainId: 10, name: 'optimism', _defaultProvider: Y('optimism') },
          'optimism-kovan': { chainId: 69, name: 'optimism-kovan' },
          'optimism-goerli': { chainId: 420, name: 'optimism-goerli' },
          arbitrum: { chainId: 42161, name: 'arbitrum' },
          'arbitrum-rinkeby': { chainId: 421611, name: 'arbitrum-rinkeby' },
          'arbitrum-goerli': { chainId: 421613, name: 'arbitrum-goerli' },
          bnb: { chainId: 56, name: 'bnb' },
          bnbt: { chainId: 97, name: 'bnbt' },
        };
      var Q = r(53319),
        V = r(21032),
        W = r.n(V),
        X = r(56805);
      let $ = new a.Yd(u);
      class tt {
        constructor() {
          this.formats = this.getDefaultFormats();
        }
        getDefaultFormats() {
          let t = {},
            e = this.address.bind(this),
            r = this.bigNumber.bind(this),
            n = this.blockTag.bind(this),
            i = this.data.bind(this),
            s = this.hash.bind(this),
            a = this.hex.bind(this),
            u = this.number.bind(this),
            l = this.type.bind(this);
          return (
            (t.transaction = {
              hash: s,
              type: l,
              accessList: tt.allowNull(this.accessList.bind(this), null),
              blockHash: tt.allowNull(s, null),
              blockNumber: tt.allowNull(u, null),
              transactionIndex: tt.allowNull(u, null),
              confirmations: tt.allowNull(u, null),
              from: e,
              gasPrice: tt.allowNull(r),
              maxPriorityFeePerGas: tt.allowNull(r),
              maxFeePerGas: tt.allowNull(r),
              gasLimit: r,
              to: tt.allowNull(e, null),
              value: r,
              nonce: u,
              data: i,
              r: tt.allowNull(this.uint256),
              s: tt.allowNull(this.uint256),
              v: tt.allowNull(u),
              creates: tt.allowNull(e, null),
              raw: tt.allowNull(i),
            }),
            (t.transactionRequest = {
              from: tt.allowNull(e),
              nonce: tt.allowNull(u),
              gasLimit: tt.allowNull(r),
              gasPrice: tt.allowNull(r),
              maxPriorityFeePerGas: tt.allowNull(r),
              maxFeePerGas: tt.allowNull(r),
              to: tt.allowNull(e),
              value: tt.allowNull(r),
              data: tt.allowNull((t) => this.data(t, !0)),
              type: tt.allowNull(u),
              accessList: tt.allowNull(this.accessList.bind(this), null),
            }),
            (t.receiptLog = {
              transactionIndex: u,
              blockNumber: u,
              transactionHash: s,
              address: e,
              topics: tt.arrayOf(s),
              data: i,
              logIndex: u,
              blockHash: s,
            }),
            (t.receipt = {
              to: tt.allowNull(this.address, null),
              from: tt.allowNull(this.address, null),
              contractAddress: tt.allowNull(e, null),
              transactionIndex: u,
              root: tt.allowNull(a),
              gasUsed: r,
              logsBloom: tt.allowNull(i),
              blockHash: s,
              transactionHash: s,
              logs: tt.arrayOf(this.receiptLog.bind(this)),
              blockNumber: u,
              confirmations: tt.allowNull(u, null),
              cumulativeGasUsed: r,
              effectiveGasPrice: tt.allowNull(r),
              status: tt.allowNull(u),
              type: l,
            }),
            (t.block = {
              hash: tt.allowNull(s),
              parentHash: s,
              number: u,
              timestamp: u,
              nonce: tt.allowNull(a),
              difficulty: this.difficulty.bind(this),
              gasLimit: r,
              gasUsed: r,
              miner: tt.allowNull(e),
              extraData: i,
              transactions: tt.allowNull(tt.arrayOf(s)),
              baseFeePerGas: tt.allowNull(r),
            }),
            (t.blockWithTransactions = (0, o.DC)(t.block)),
            (t.blockWithTransactions.transactions = tt.allowNull(
              tt.arrayOf(this.transactionResponse.bind(this))
            )),
            (t.filter = {
              fromBlock: tt.allowNull(n, void 0),
              toBlock: tt.allowNull(n, void 0),
              blockHash: tt.allowNull(s, void 0),
              address: tt.allowNull(e, void 0),
              topics: tt.allowNull(this.topics.bind(this), void 0),
            }),
            (t.filterLog = {
              blockNumber: tt.allowNull(u),
              blockHash: tt.allowNull(s),
              transactionIndex: u,
              removed: tt.allowNull(this.boolean.bind(this)),
              address: e,
              data: tt.allowFalsish(i, '0x'),
              topics: tt.arrayOf(s),
              transactionHash: s,
              logIndex: u,
            }),
            t
          );
        }
        accessList(t) {
          return (0, p.z7)(t || []);
        }
        number(t) {
          return '0x' === t ? 0 : h.O$.from(t).toNumber();
        }
        type(t) {
          return '0x' === t || null == t ? 0 : h.O$.from(t).toNumber();
        }
        bigNumber(t) {
          return h.O$.from(t);
        }
        boolean(t) {
          if ('boolean' == typeof t) return t;
          if ('string' == typeof t) {
            if ('true' === (t = t.toLowerCase())) return !0;
            if ('false' === t) return !1;
          }
          throw Error('invalid boolean - ' + t);
        }
        hex(t, e) {
          return 'string' == typeof t &&
            (e || '0x' === t.substring(0, 2) || (t = '0x' + t), (0, c.A7)(t))
            ? t.toLowerCase()
            : $.throwArgumentError('invalid hash', 'value', t);
        }
        data(t, e) {
          let r = this.hex(t, e);
          if (r.length % 2 != 0) throw Error('invalid data; odd-length - ' + t);
          return r;
        }
        address(t) {
          return (0, X.Kn)(t);
        }
        callAddress(t) {
          if (!(0, c.A7)(t, 32)) return null;
          let e = (0, X.Kn)((0, c.p3)(t, 12));
          return '0x0000000000000000000000000000000000000000' === e ? null : e;
        }
        contractAddress(t) {
          return (0, X.CR)(t);
        }
        blockTag(t) {
          if (null == t) return 'latest';
          if ('earliest' === t) return '0x0';
          switch (t) {
            case 'earliest':
              return '0x0';
            case 'latest':
            case 'pending':
            case 'safe':
            case 'finalized':
              return t;
          }
          if ('number' == typeof t || (0, c.A7)(t)) return (0, c.$P)(t);
          throw Error('invalid blockTag');
        }
        hash(t, e) {
          let r = this.hex(t, e);
          return 32 !== (0, c.E1)(r) ? $.throwArgumentError('invalid hash', 'value', t) : r;
        }
        difficulty(t) {
          if (null == t) return null;
          let e = h.O$.from(t);
          try {
            return e.toNumber();
          } catch (t) {}
          return null;
        }
        uint256(t) {
          if (!(0, c.A7)(t)) throw Error('invalid uint256');
          return (0, c.$m)(t, 32);
        }
        _block(t, e) {
          null != t.author && null == t.miner && (t.miner = t.author);
          let r = null != t._difficulty ? t._difficulty : t.difficulty,
            n = tt.check(e, t);
          return (n._difficulty = null == r ? null : h.O$.from(r)), n;
        }
        block(t) {
          return this._block(t, this.formats.block);
        }
        blockWithTransactions(t) {
          return this._block(t, this.formats.blockWithTransactions);
        }
        transactionRequest(t) {
          return tt.check(this.formats.transactionRequest, t);
        }
        transactionResponse(t) {
          null != t.gas && null == t.gasLimit && (t.gasLimit = t.gas),
            t.to &&
              h.O$.from(t.to).isZero() &&
              (t.to = '0x0000000000000000000000000000000000000000'),
            null != t.input && null == t.data && (t.data = t.input),
            null == t.to && null == t.creates && (t.creates = this.contractAddress(t)),
            (1 === t.type || 2 === t.type) && null == t.accessList && (t.accessList = []);
          let e = tt.check(this.formats.transaction, t);
          if (null != t.chainId) {
            let r = t.chainId;
            (0, c.A7)(r) && (r = h.O$.from(r).toNumber()), (e.chainId = r);
          } else {
            let r = t.networkId;
            null == r && null == e.v && (r = t.chainId),
              (0, c.A7)(r) && (r = h.O$.from(r).toNumber()),
              'number' != typeof r &&
                null != e.v &&
                ((r = (e.v - 35) / 2) < 0 && (r = 0), (r = parseInt(r))),
              'number' != typeof r && (r = 0),
              (e.chainId = r);
          }
          return e.blockHash && 'x' === e.blockHash.replace(/0/g, '') && (e.blockHash = null), e;
        }
        transaction(t) {
          return (0, p.Qc)(t);
        }
        receiptLog(t) {
          return tt.check(this.formats.receiptLog, t);
        }
        receipt(t) {
          let e = tt.check(this.formats.receipt, t);
          if (null != e.root) {
            if (e.root.length <= 4) {
              let t = h.O$.from(e.root).toNumber();
              0 === t || 1 === t
                ? (null != e.status &&
                    e.status !== t &&
                    $.throwArgumentError('alt-root-status/status mismatch', 'value', {
                      root: e.root,
                      status: e.status,
                    }),
                  (e.status = t),
                  delete e.root)
                : $.throwArgumentError('invalid alt-root-status', 'value.root', e.root);
            } else
              66 !== e.root.length &&
                $.throwArgumentError('invalid root hash', 'value.root', e.root);
          }
          return null != e.status && (e.byzantium = !0), e;
        }
        topics(t) {
          return Array.isArray(t)
            ? t.map((t) => this.topics(t))
            : null != t
              ? this.hash(t, !0)
              : null;
        }
        filter(t) {
          return tt.check(this.formats.filter, t);
        }
        filterLog(t) {
          return tt.check(this.formats.filterLog, t);
        }
        static check(t, e) {
          let r = {};
          for (let n in t)
            try {
              let i = t[n](e[n]);
              void 0 !== i && (r[n] = i);
            } catch (t) {
              throw ((t.checkKey = n), (t.checkValue = e[n]), t);
            }
          return r;
        }
        static allowNull(t, e) {
          return function (r) {
            return null == r ? e : t(r);
          };
        }
        static allowFalsish(t, e) {
          return function (r) {
            return r ? t(r) : e;
          };
        }
        static arrayOf(t) {
          return function (e) {
            if (!Array.isArray(e)) throw Error('not an array');
            let r = [];
            return (
              e.forEach(function (e) {
                r.push(t(e));
              }),
              r
            );
          };
        }
      }
      var te = function (t, e, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function o(t) {
            try {
              u(n.next(t));
            } catch (t) {
              s(t);
            }
          }
          function a(t) {
            try {
              u(n.throw(t));
            } catch (t) {
              s(t);
            }
          }
          function u(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value) instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })
                ).then(o, a);
          }
          u((n = n.apply(t, e || [])).next());
        });
      };
      let tr = new a.Yd(u);
      function tn(t) {
        return null == t
          ? 'null'
          : (32 !== (0, c.E1)(t) && tr.throwArgumentError('invalid topic', 'topic', t),
            t.toLowerCase());
      }
      function ti(t) {
        for (t = t.slice(); t.length > 0 && null == t[t.length - 1]; ) t.pop();
        return t
          .map((t) => {
            if (!Array.isArray(t)) return tn(t);
            {
              let e = {};
              t.forEach((t) => {
                e[tn(t)] = !0;
              });
              let r = Object.keys(e);
              return r.sort(), r.join('|');
            }
          })
          .join('&');
      }
      function ts(t) {
        if ('string' == typeof t) {
          if (((t = t.toLowerCase()), 32 === (0, c.E1)(t))) return 'tx:' + t;
          if (-1 === t.indexOf(':')) return t;
        } else if (Array.isArray(t)) return 'filter:*:' + ti(t);
        else if (_.Sg.isForkEvent(t)) throw (tr.warn('not implemented'), Error('not implemented'));
        else if (t && 'object' == typeof t)
          return 'filter:' + (t.address || '*') + ':' + ti(t.topics || []);
        throw Error('invalid event - ' + t);
      }
      function to() {
        return new Date().getTime();
      }
      function ta(t) {
        return new Promise((e) => {
          setTimeout(e, t);
        });
      }
      let tu = ['block', 'network', 'pending', 'poll'];
      class tl {
        constructor(t, e, r) {
          (0, o.zG)(this, 'tag', t),
            (0, o.zG)(this, 'listener', e),
            (0, o.zG)(this, 'once', r),
            (this._lastBlockNumber = -2),
            (this._inflight = !1);
        }
        get event() {
          switch (this.type) {
            case 'tx':
              return this.hash;
            case 'filter':
              return this.filter;
          }
          return this.tag;
        }
        get type() {
          return this.tag.split(':')[0];
        }
        get hash() {
          let t = this.tag.split(':');
          return 'tx' !== t[0] ? null : t[1];
        }
        get filter() {
          var t;
          let e = this.tag.split(':');
          if ('filter' !== e[0]) return null;
          let r = e[1],
            n =
              '' === (t = e[2])
                ? []
                : t.split(/&/g).map((t) => {
                    if ('' === t) return [];
                    let e = t.split('|').map((t) => ('null' === t ? null : t));
                    return 1 === e.length ? e[0] : e;
                  }),
            i = {};
          return n.length > 0 && (i.topics = n), r && '*' !== r && (i.address = r), i;
        }
        pollable() {
          return this.tag.indexOf(':') >= 0 || tu.indexOf(this.tag) >= 0;
        }
      }
      let th = {
        0: { symbol: 'btc', p2pkh: 0, p2sh: 5, prefix: 'bc' },
        2: { symbol: 'ltc', p2pkh: 48, p2sh: 50, prefix: 'ltc' },
        3: { symbol: 'doge', p2pkh: 30, p2sh: 22 },
        60: { symbol: 'eth', ilk: 'eth' },
        61: { symbol: 'etc', ilk: 'eth' },
        700: { symbol: 'xdai', ilk: 'eth' },
      };
      function tc(t) {
        return (0, c.$m)(h.O$.from(t).toHexString(), 32);
      }
      function td(t) {
        return E.eU.encode((0, c.zo)([t, (0, c.p3)((0, Q.JQ)((0, Q.JQ)(t)), 0, 4)]));
      }
      let tf = RegExp('^(ipfs)://(.*)$', 'i'),
        tp = [
          RegExp('^(https)://(.*)$', 'i'),
          RegExp('^(data):(.*)$', 'i'),
          tf,
          RegExp('^eip155:[0-9]+/(erc[0-9]+):(.*)$', 'i'),
        ];
      function tm(t, e) {
        try {
          return (0, f.ZN)(tg(t, e));
        } catch (t) {}
        return null;
      }
      function tg(t, e) {
        if ('0x' === t) return null;
        let r = h.O$.from((0, c.p3)(t, e, e + 32)).toNumber(),
          n = h.O$.from((0, c.p3)(t, r, r + 32)).toNumber();
        return (0, c.p3)(t, r + 32, r + 32 + n);
      }
      function tv(t) {
        return (
          t.match(/^ipfs:\/\/ipfs\//i)
            ? (t = t.substring(12))
            : t.match(/^ipfs:\/\//i)
              ? (t = t.substring(7))
              : tr.throwArgumentError('unsupported IPFS format', 'link', t),
          `https://gateway.ipfs.io/ipfs/${t}`
        );
      }
      function ty(t) {
        let e = (0, c.lE)(t);
        if (e.length > 32) throw Error('internal; should not happen');
        let r = new Uint8Array(32);
        return r.set(e, 32 - e.length), r;
      }
      function tb(t) {
        let e = [],
          r = 0;
        for (let n = 0; n < t.length; n++) e.push(null), (r += 32);
        for (let n = 0; n < t.length; n++) {
          let i = (0, c.lE)(t[n]);
          (e[n] = ty(r)),
            e.push(ty(i.length)),
            e.push(
              (function (t) {
                if (t.length % 32 == 0) return t;
                let e = new Uint8Array(32 * Math.ceil(t.length / 32));
                return e.set(t), e;
              })(i)
            ),
            (r += 32 + 32 * Math.ceil(i.length / 32));
        }
        return (0, c.xs)(e);
      }
      class tw {
        constructor(t, e, r, n) {
          (0, o.zG)(this, 'provider', t),
            (0, o.zG)(this, 'name', r),
            (0, o.zG)(this, 'address', t.formatter.address(e)),
            (0, o.zG)(this, '_resolvedAddress', n);
        }
        supportsWildcard() {
          return (
            this._supportsEip2544 ||
              (this._supportsEip2544 = this.provider
                .call({
                  to: this.address,
                  data: '0x01ffc9a79061b92300000000000000000000000000000000000000000000000000000000',
                })
                .then((t) => h.O$.from(t).eq(1))
                .catch((t) => {
                  if (t.code === a.Yd.errors.CALL_EXCEPTION) return !1;
                  throw ((this._supportsEip2544 = null), t);
                })),
            this._supportsEip2544
          );
        }
        _fetch(t, e) {
          return te(this, void 0, void 0, function* () {
            let r = {
                to: this.address,
                ccipReadEnabled: !0,
                data: (0, c.xs)([t, z(this.name), e || '0x']),
              },
              n = !1;
            if (yield this.supportsWildcard()) {
              var i;
              (n = !0),
                (r.data = (0, c.xs)([
                  '0x9061b923',
                  tb([
                    ((i = this.name),
                    (0, c.Dv)(
                      (0, c.zo)(
                        G(i).map((t) => {
                          if (t.length > 63)
                            throw Error('invalid DNS encoded entry; length exceeds 63 bytes');
                          let e = new Uint8Array(t.length + 1);
                          return e.set(t, 1), (e[0] = e.length - 1), e;
                        })
                      )
                    ) + '00'),
                    r.data,
                  ]),
                ]));
            }
            try {
              let t = yield this.provider.call(r);
              return (
                (0, c.lE)(t).length % 32 == 4 &&
                  tr.throwError('resolver threw error', a.Yd.errors.CALL_EXCEPTION, {
                    transaction: r,
                    data: t,
                  }),
                n && (t = tg(t, 0)),
                t
              );
            } catch (t) {
              if (t.code === a.Yd.errors.CALL_EXCEPTION) return null;
              throw t;
            }
          });
        }
        _fetchBytes(t, e) {
          return te(this, void 0, void 0, function* () {
            let r = yield this._fetch(t, e);
            return null != r ? tg(r, 0) : null;
          });
        }
        _getAddress(t, e) {
          let r = th[String(t)];
          if (
            (null == r &&
              tr.throwError(`unsupported coin type: ${t}`, a.Yd.errors.UNSUPPORTED_OPERATION, {
                operation: `getAddress(${t})`,
              }),
            'eth' === r.ilk)
          )
            return this.provider.formatter.address(e);
          let n = (0, c.lE)(e);
          if (null != r.p2pkh) {
            let t = e.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);
            if (t) {
              let e = parseInt(t[1], 16);
              if (t[2].length === 2 * e && e >= 1 && e <= 75)
                return td((0, c.zo)([[r.p2pkh], '0x' + t[2]]));
            }
          }
          if (null != r.p2sh) {
            let t = e.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);
            if (t) {
              let e = parseInt(t[1], 16);
              if (t[2].length === 2 * e && e >= 1 && e <= 75)
                return td((0, c.zo)([[r.p2sh], '0x' + t[2]]));
            }
          }
          if (null != r.prefix) {
            let t = n[1],
              e = n[0];
            if (
              (0 === e ? 20 !== t && 32 !== t && (e = -1) : (e = -1),
              e >= 0 && n.length === 2 + t && t >= 1 && t <= 75)
            ) {
              let t = W().toWords(n.slice(2));
              return t.unshift(e), W().encode(r.prefix, t);
            }
          }
          return null;
        }
        getAddress(t) {
          return te(this, void 0, void 0, function* () {
            if ((null == t && (t = 60), 60 === t))
              try {
                let t = yield this._fetch('0x3b3b57de');
                if (
                  '0x' === t ||
                  '0x0000000000000000000000000000000000000000000000000000000000000000' === t
                )
                  return null;
                return this.provider.formatter.callAddress(t);
              } catch (t) {
                if (t.code === a.Yd.errors.CALL_EXCEPTION) return null;
                throw t;
              }
            let e = yield this._fetchBytes('0xf1cb7e06', tc(t));
            if (null == e || '0x' === e) return null;
            let r = this._getAddress(t, e);
            return (
              null == r &&
                tr.throwError(
                  'invalid or unsupported coin data',
                  a.Yd.errors.UNSUPPORTED_OPERATION,
                  { operation: `getAddress(${t})`, coinType: t, data: e }
                ),
              r
            );
          });
        }
        getAvatar() {
          return te(this, void 0, void 0, function* () {
            let t = [{ type: 'name', content: this.name }];
            try {
              let e = yield this.getText('avatar');
              if (null == e) return null;
              for (let r = 0; r < tp.length; r++) {
                let n = e.match(tp[r]);
                if (null == n) continue;
                let i = n[1].toLowerCase();
                switch (i) {
                  case 'https':
                    return t.push({ type: 'url', content: e }), { linkage: t, url: e };
                  case 'data':
                    return t.push({ type: 'data', content: e }), { linkage: t, url: e };
                  case 'ipfs':
                    return t.push({ type: 'ipfs', content: e }), { linkage: t, url: tv(e) };
                  case 'erc721':
                  case 'erc1155': {
                    let r = 'erc721' === i ? '0xc87b56dd' : '0x0e89341c';
                    t.push({ type: i, content: e });
                    let s = this._resolvedAddress || (yield this.getAddress()),
                      o = (n[2] || '').split('/');
                    if (2 !== o.length) return null;
                    let a = yield this.provider.formatter.address(o[0]),
                      u = (0, c.$m)(h.O$.from(o[1]).toHexString(), 32);
                    if ('erc721' === i) {
                      let e = this.provider.formatter.callAddress(
                        yield this.provider.call({ to: a, data: (0, c.xs)(['0x6352211e', u]) })
                      );
                      if (s !== e) return null;
                      t.push({ type: 'owner', content: e });
                    } else if ('erc1155' === i) {
                      let e = h.O$.from(
                        yield this.provider.call({
                          to: a,
                          data: (0, c.xs)(['0x00fdd58e', (0, c.$m)(s, 32), u]),
                        })
                      );
                      if (e.isZero()) return null;
                      t.push({ type: 'balance', content: e.toString() });
                    }
                    let l = { to: this.provider.formatter.address(o[0]), data: (0, c.xs)([r, u]) },
                      d = tm(yield this.provider.call(l), 0);
                    if (null == d) return null;
                    t.push({ type: 'metadata-url-base', content: d }),
                      'erc1155' === i &&
                        ((d = d.replace('{id}', u.substring(2))),
                        t.push({ type: 'metadata-url-expanded', content: d })),
                      d.match(/^ipfs:/i) && (d = tv(d)),
                      t.push({ type: 'metadata-url', content: d });
                    let f = yield w(d);
                    if (!f) return null;
                    t.push({ type: 'metadata', content: JSON.stringify(f) });
                    let p = f.image;
                    if ('string' != typeof p) return null;
                    if (p.match(/^(https:\/\/|data:)/i));
                    else {
                      let e = p.match(tf);
                      if (null == e) return null;
                      t.push({ type: 'url-ipfs', content: p }), (p = tv(p));
                    }
                    return t.push({ type: 'url', content: p }), { linkage: t, url: p };
                  }
                }
              }
            } catch (t) {}
            return null;
          });
        }
        getContentHash() {
          return te(this, void 0, void 0, function* () {
            let t = yield this._fetchBytes('0xbc1c58d1');
            if (null == t || '0x' === t) return null;
            let e = t.match(/^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
            if (e) {
              let t = parseInt(e[3], 16);
              if (e[4].length === 2 * t) return 'ipfs://' + E.eU.encode('0x' + e[1]);
            }
            let r = t.match(/^0xe5010172(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
            if (r) {
              let t = parseInt(r[3], 16);
              if (r[4].length === 2 * t) return 'ipns://' + E.eU.encode('0x' + r[1]);
            }
            let n = t.match(/^0xe40101fa011b20([0-9a-f]*)$/);
            if (n && 64 === n[1].length) return 'bzz://' + n[1];
            let i = t.match(/^0x90b2c605([0-9a-f]*)$/);
            if (i && 68 === i[1].length) {
              let t = { '=': '', '+': '-', '/': '_' };
              return 'sia://' + g('0x' + i[1]).replace(/[=+\/]/g, (e) => t[e]);
            }
            return tr.throwError(
              'invalid or unsupported content hash data',
              a.Yd.errors.UNSUPPORTED_OPERATION,
              { operation: 'getContentHash()', data: t }
            );
          });
        }
        getText(t) {
          return te(this, void 0, void 0, function* () {
            let e = (0, f.Y0)(t);
            (e = (0, c.zo)([tc(64), tc(e.length), e])).length % 32 != 0 &&
              (e = (0, c.zo)([e, (0, c.$m)('0x', 32 - (t.length % 32))]));
            let r = yield this._fetchBytes('0x59d1d43c', (0, c.Dv)(e));
            return null == r || '0x' === r ? null : (0, f.ZN)(r);
          });
        }
      }
      let tA = null,
        t_ = 1;
      class tE extends _.zt {
        constructor(t) {
          if (
            (super(),
            (this._events = []),
            (this._emitted = { block: -2 }),
            (this.disableCcipRead = !1),
            (this.formatter = new.target.getFormatter()),
            (0, o.zG)(this, 'anyNetwork', 'any' === t),
            this.anyNetwork && (t = this.detectNetwork()),
            t instanceof Promise)
          )
            (this._networkPromise = t), t.catch((t) => {}), this._ready().catch((t) => {});
          else {
            let e = (0, o.tu)(new.target, 'getNetwork')(t);
            e
              ? ((0, o.zG)(this, '_network', e), this.emit('network', e, null))
              : tr.throwArgumentError('invalid network', 'network', t);
          }
          (this._maxInternalBlockNumber = -1024),
            (this._lastBlockNumber = -2),
            (this._maxFilterBlockRange = 10),
            (this._pollingInterval = 4e3),
            (this._fastQueryDate = 0);
        }
        _ready() {
          return te(this, void 0, void 0, function* () {
            if (null == this._network) {
              let t = null;
              if (this._networkPromise)
                try {
                  t = yield this._networkPromise;
                } catch (t) {}
              null == t && (t = yield this.detectNetwork()),
                t || tr.throwError('no network detected', a.Yd.errors.UNKNOWN_ERROR, {}),
                null == this._network &&
                  (this.anyNetwork ? (this._network = t) : (0, o.zG)(this, '_network', t),
                  this.emit('network', t, null));
            }
            return this._network;
          });
        }
        get ready() {
          return A(() =>
            this._ready().then(
              (t) => t,
              (t) => {
                if (t.code !== a.Yd.errors.NETWORK_ERROR || 'noNetwork' !== t.event) throw t;
              }
            )
          );
        }
        static getFormatter() {
          return null == tA && (tA = new tt()), tA;
        }
        static getNetwork(t) {
          return (function (t) {
            if (null == t) return null;
            if ('number' == typeof t) {
              for (let e in J) {
                let r = J[e];
                if (r.chainId === t)
                  return {
                    name: r.name,
                    chainId: r.chainId,
                    ensAddress: r.ensAddress || null,
                    _defaultProvider: r._defaultProvider || null,
                  };
              }
              return { chainId: t, name: 'unknown' };
            }
            if ('string' == typeof t) {
              let e = J[t];
              return null == e
                ? null
                : {
                    name: e.name,
                    chainId: e.chainId,
                    ensAddress: e.ensAddress,
                    _defaultProvider: e._defaultProvider || null,
                  };
            }
            let e = J[t.name];
            if (!e)
              return (
                'number' != typeof t.chainId &&
                  Z.throwArgumentError('invalid network chainId', 'network', t),
                t
              );
            0 !== t.chainId &&
              t.chainId !== e.chainId &&
              Z.throwArgumentError('network chainId mismatch', 'network', t);
            let r = t._defaultProvider || null;
            if (null == r && e._defaultProvider) {
              var n;
              r =
                (n = e._defaultProvider) && 'function' == typeof n.renetwork
                  ? e._defaultProvider.renetwork(t)
                  : e._defaultProvider;
            }
            return {
              name: t.name,
              chainId: e.chainId,
              ensAddress: t.ensAddress || e.ensAddress || null,
              _defaultProvider: r,
            };
          })(null == t ? 'homestead' : t);
        }
        ccipReadFetch(t, e, r) {
          return te(this, void 0, void 0, function* () {
            if (this.disableCcipRead || 0 === r.length) return null;
            let n = t.to.toLowerCase(),
              i = e.toLowerCase(),
              s = [];
            for (let t = 0; t < r.length; t++) {
              let e = r[t],
                o = e.replace('{sender}', n).replace('{data}', i),
                u = e.indexOf('{data}') >= 0 ? null : JSON.stringify({ data: i, sender: n }),
                l = yield w(
                  { url: o, errorPassThrough: !0 },
                  u,
                  (t, e) => ((t.status = e.statusCode), t)
                );
              if (l.data) return l.data;
              let h = l.message || 'unknown error';
              if (l.status >= 400 && l.status < 500)
                return tr.throwError(
                  `response not found during CCIP fetch: ${h}`,
                  a.Yd.errors.SERVER_ERROR,
                  { url: e, errorMessage: h }
                );
              s.push(h);
            }
            return tr.throwError(
              `error encountered during CCIP fetch: ${s.map((t) => JSON.stringify(t)).join(', ')}`,
              a.Yd.errors.SERVER_ERROR,
              { urls: r, errorMessages: s }
            );
          });
        }
        _getInternalBlockNumber(t) {
          return te(this, void 0, void 0, function* () {
            if ((yield this._ready(), t > 0))
              for (; this._internalBlockNumber; ) {
                let e = this._internalBlockNumber;
                try {
                  let r = yield e;
                  if (to() - r.respTime <= t) return r.blockNumber;
                  break;
                } catch (t) {
                  if (this._internalBlockNumber === e) break;
                }
              }
            let e = to(),
              r = (0, o.mE)({
                blockNumber: this.perform('getBlockNumber', {}),
                networkError: this.getNetwork().then(
                  (t) => null,
                  (t) => t
                ),
              }).then(({ blockNumber: t, networkError: n }) => {
                if (n)
                  throw (this._internalBlockNumber === r && (this._internalBlockNumber = null), n);
                let i = to();
                return (
                  (t = h.O$.from(t).toNumber()) < this._maxInternalBlockNumber &&
                    (t = this._maxInternalBlockNumber),
                  (this._maxInternalBlockNumber = t),
                  this._setFastBlockNumber(t),
                  { blockNumber: t, reqTime: e, respTime: i }
                );
              });
            return (
              (this._internalBlockNumber = r),
              r.catch((t) => {
                this._internalBlockNumber === r && (this._internalBlockNumber = null);
              }),
              (yield r).blockNumber
            );
          });
        }
        poll() {
          return te(this, void 0, void 0, function* () {
            let t = t_++,
              e = [],
              r = null;
            try {
              r = yield this._getInternalBlockNumber(100 + this.pollingInterval / 2);
            } catch (t) {
              this.emit('error', t);
              return;
            }
            if (
              (this._setFastBlockNumber(r), this.emit('poll', t, r), r === this._lastBlockNumber)
            ) {
              this.emit('didPoll', t);
              return;
            }
            if (
              (-2 === this._emitted.block && (this._emitted.block = r - 1),
              Math.abs(this._emitted.block - r) > 1e3)
            )
              tr.warn(
                `network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${r})`
              ),
                this.emit(
                  'error',
                  tr.makeError('network block skew detected', a.Yd.errors.NETWORK_ERROR, {
                    blockNumber: r,
                    event: 'blockSkew',
                    previousBlockNumber: this._emitted.block,
                  })
                ),
                this.emit('block', r);
            else for (let t = this._emitted.block + 1; t <= r; t++) this.emit('block', t);
            this._emitted.block !== r &&
              ((this._emitted.block = r),
              Object.keys(this._emitted).forEach((t) => {
                if ('block' === t) return;
                let e = this._emitted[t];
                'pending' !== e && r - e > 12 && delete this._emitted[t];
              })),
              -2 === this._lastBlockNumber && (this._lastBlockNumber = r - 1),
              this._events.forEach((t) => {
                switch (t.type) {
                  case 'tx': {
                    let r = t.hash,
                      n = this.getTransactionReceipt(r)
                        .then(
                          (t) => (
                            t &&
                              null != t.blockNumber &&
                              ((this._emitted['t:' + r] = t.blockNumber), this.emit(r, t)),
                            null
                          )
                        )
                        .catch((t) => {
                          this.emit('error', t);
                        });
                    e.push(n);
                    break;
                  }
                  case 'filter':
                    if (!t._inflight) {
                      (t._inflight = !0), -2 === t._lastBlockNumber && (t._lastBlockNumber = r - 1);
                      let n = t.filter;
                      (n.fromBlock = t._lastBlockNumber + 1), (n.toBlock = r);
                      let i = n.toBlock - this._maxFilterBlockRange;
                      i > n.fromBlock && (n.fromBlock = i), n.fromBlock < 0 && (n.fromBlock = 0);
                      let s = this.getLogs(n)
                        .then((e) => {
                          (t._inflight = !1),
                            0 !== e.length &&
                              e.forEach((e) => {
                                e.blockNumber > t._lastBlockNumber &&
                                  (t._lastBlockNumber = e.blockNumber),
                                  (this._emitted['b:' + e.blockHash] = e.blockNumber),
                                  (this._emitted['t:' + e.transactionHash] = e.blockNumber),
                                  this.emit(n, e);
                              });
                        })
                        .catch((e) => {
                          this.emit('error', e), (t._inflight = !1);
                        });
                      e.push(s);
                    }
                }
              }),
              (this._lastBlockNumber = r),
              Promise.all(e)
                .then(() => {
                  this.emit('didPoll', t);
                })
                .catch((t) => {
                  this.emit('error', t);
                });
          });
        }
        resetEventsBlock(t) {
          (this._lastBlockNumber = t - 1), this.polling && this.poll();
        }
        get network() {
          return this._network;
        }
        detectNetwork() {
          return te(this, void 0, void 0, function* () {
            return tr.throwError(
              'provider does not support network detection',
              a.Yd.errors.UNSUPPORTED_OPERATION,
              { operation: 'provider.detectNetwork' }
            );
          });
        }
        getNetwork() {
          return te(this, void 0, void 0, function* () {
            let t = yield this._ready(),
              e = yield this.detectNetwork();
            if (t.chainId !== e.chainId) {
              if (this.anyNetwork)
                return (
                  (this._network = e),
                  (this._lastBlockNumber = -2),
                  (this._fastBlockNumber = null),
                  (this._fastBlockNumberPromise = null),
                  (this._fastQueryDate = 0),
                  (this._emitted.block = -2),
                  (this._maxInternalBlockNumber = -1024),
                  (this._internalBlockNumber = null),
                  this.emit('network', e, t),
                  yield ta(0),
                  this._network
                );
              let r = tr.makeError('underlying network changed', a.Yd.errors.NETWORK_ERROR, {
                event: 'changed',
                network: t,
                detectedNetwork: e,
              });
              throw (this.emit('error', r), r);
            }
            return t;
          });
        }
        get blockNumber() {
          return (
            this._getInternalBlockNumber(100 + this.pollingInterval / 2).then(
              (t) => {
                this._setFastBlockNumber(t);
              },
              (t) => {}
            ),
            null != this._fastBlockNumber ? this._fastBlockNumber : -1
          );
        }
        get polling() {
          return null != this._poller;
        }
        set polling(t) {
          t && !this._poller
            ? ((this._poller = setInterval(() => {
                this.poll();
              }, this.pollingInterval)),
              this._bootstrapPoll ||
                (this._bootstrapPoll = setTimeout(() => {
                  this.poll(),
                    (this._bootstrapPoll = setTimeout(() => {
                      this._poller || this.poll(), (this._bootstrapPoll = null);
                    }, this.pollingInterval));
                }, 0)))
            : !t && this._poller && (clearInterval(this._poller), (this._poller = null));
        }
        get pollingInterval() {
          return this._pollingInterval;
        }
        set pollingInterval(t) {
          if ('number' != typeof t || t <= 0 || parseInt(String(t)) != t)
            throw Error('invalid polling interval');
          (this._pollingInterval = t),
            this._poller &&
              (clearInterval(this._poller),
              (this._poller = setInterval(() => {
                this.poll();
              }, this._pollingInterval)));
        }
        _getFastBlockNumber() {
          let t = to();
          return (
            t - this._fastQueryDate > 2 * this._pollingInterval &&
              ((this._fastQueryDate = t),
              (this._fastBlockNumberPromise = this.getBlockNumber().then(
                (t) => (
                  (null == this._fastBlockNumber || t > this._fastBlockNumber) &&
                    (this._fastBlockNumber = t),
                  this._fastBlockNumber
                )
              ))),
            this._fastBlockNumberPromise
          );
        }
        _setFastBlockNumber(t) {
          (null == this._fastBlockNumber || !(t < this._fastBlockNumber)) &&
            ((this._fastQueryDate = to()),
            (null == this._fastBlockNumber || t > this._fastBlockNumber) &&
              ((this._fastBlockNumber = t), (this._fastBlockNumberPromise = Promise.resolve(t))));
        }
        waitForTransaction(t, e, r) {
          return te(this, void 0, void 0, function* () {
            return this._waitForTransaction(t, null == e ? 1 : e, r || 0, null);
          });
        }
        _waitForTransaction(t, e, r, n) {
          return te(this, void 0, void 0, function* () {
            let i = yield this.getTransactionReceipt(t);
            return (i ? i.confirmations : 0) >= e
              ? i
              : new Promise((i, s) => {
                  let o = [],
                    u = !1,
                    l = function () {
                      return (
                        !!u ||
                        ((u = !0),
                        o.forEach((t) => {
                          t();
                        }),
                        !1)
                      );
                    },
                    h = (t) => {
                      t.confirmations < e || l() || i(t);
                    };
                  if (
                    (this.on(t, h),
                    o.push(() => {
                      this.removeListener(t, h);
                    }),
                    n)
                  ) {
                    let r = n.startBlock,
                      i = null,
                      h = (o) =>
                        te(this, void 0, void 0, function* () {
                          u ||
                            (yield ta(1e3),
                            this.getTransactionCount(n.from).then(
                              (c) =>
                                te(this, void 0, void 0, function* () {
                                  if (!u) {
                                    if (c <= n.nonce) r = o;
                                    else {
                                      {
                                        let e = yield this.getTransaction(t);
                                        if (e && null != e.blockNumber) return;
                                      }
                                      for (
                                        null == i &&
                                        (i = r - 3) < n.startBlock &&
                                        (i = n.startBlock);
                                        i <= o;

                                      ) {
                                        if (u) return;
                                        let r = yield this.getBlockWithTransactions(i);
                                        for (let i = 0; i < r.transactions.length; i++) {
                                          let o = r.transactions[i];
                                          if (o.hash === t) return;
                                          if (o.from === n.from && o.nonce === n.nonce) {
                                            if (u) return;
                                            let r = yield this.waitForTransaction(o.hash, e);
                                            if (l()) return;
                                            let i = 'replaced';
                                            o.data === n.data &&
                                            o.to === n.to &&
                                            o.value.eq(n.value)
                                              ? (i = 'repriced')
                                              : '0x' === o.data &&
                                                o.from === o.to &&
                                                o.value.isZero() &&
                                                (i = 'cancelled'),
                                              s(
                                                tr.makeError(
                                                  'transaction was replaced',
                                                  a.Yd.errors.TRANSACTION_REPLACED,
                                                  {
                                                    cancelled:
                                                      'replaced' === i || 'cancelled' === i,
                                                    reason: i,
                                                    replacement: this._wrapTransaction(o),
                                                    hash: t,
                                                    receipt: r,
                                                  }
                                                )
                                              );
                                            return;
                                          }
                                        }
                                        i++;
                                      }
                                    }
                                    u || this.once('block', h);
                                  }
                                }),
                              (t) => {
                                u || this.once('block', h);
                              }
                            ));
                        });
                    if (u) return;
                    this.once('block', h),
                      o.push(() => {
                        this.removeListener('block', h);
                      });
                  }
                  if ('number' == typeof r && r > 0) {
                    let t = setTimeout(() => {
                      l() ||
                        s(tr.makeError('timeout exceeded', a.Yd.errors.TIMEOUT, { timeout: r }));
                    }, r);
                    t.unref && t.unref(),
                      o.push(() => {
                        clearTimeout(t);
                      });
                  }
                });
          });
        }
        getBlockNumber() {
          return te(this, void 0, void 0, function* () {
            return this._getInternalBlockNumber(0);
          });
        }
        getGasPrice() {
          return te(this, void 0, void 0, function* () {
            yield this.getNetwork();
            let t = yield this.perform('getGasPrice', {});
            try {
              return h.O$.from(t);
            } catch (e) {
              return tr.throwError('bad result from backend', a.Yd.errors.SERVER_ERROR, {
                method: 'getGasPrice',
                result: t,
                error: e,
              });
            }
          });
        }
        getBalance(t, e) {
          return te(this, void 0, void 0, function* () {
            yield this.getNetwork();
            let r = yield (0, o.mE)({
                address: this._getAddress(t),
                blockTag: this._getBlockTag(e),
              }),
              n = yield this.perform('getBalance', r);
            try {
              return h.O$.from(n);
            } catch (t) {
              return tr.throwError('bad result from backend', a.Yd.errors.SERVER_ERROR, {
                method: 'getBalance',
                params: r,
                result: n,
                error: t,
              });
            }
          });
        }
        getTransactionCount(t, e) {
          return te(this, void 0, void 0, function* () {
            yield this.getNetwork();
            let r = yield (0, o.mE)({
                address: this._getAddress(t),
                blockTag: this._getBlockTag(e),
              }),
              n = yield this.perform('getTransactionCount', r);
            try {
              return h.O$.from(n).toNumber();
            } catch (t) {
              return tr.throwError('bad result from backend', a.Yd.errors.SERVER_ERROR, {
                method: 'getTransactionCount',
                params: r,
                result: n,
                error: t,
              });
            }
          });
        }
        getCode(t, e) {
          return te(this, void 0, void 0, function* () {
            yield this.getNetwork();
            let r = yield (0, o.mE)({
                address: this._getAddress(t),
                blockTag: this._getBlockTag(e),
              }),
              n = yield this.perform('getCode', r);
            try {
              return (0, c.Dv)(n);
            } catch (t) {
              return tr.throwError('bad result from backend', a.Yd.errors.SERVER_ERROR, {
                method: 'getCode',
                params: r,
                result: n,
                error: t,
              });
            }
          });
        }
        getStorageAt(t, e, r) {
          return te(this, void 0, void 0, function* () {
            yield this.getNetwork();
            let n = yield (0, o.mE)({
                address: this._getAddress(t),
                blockTag: this._getBlockTag(r),
                position: Promise.resolve(e).then((t) => (0, c.$P)(t)),
              }),
              i = yield this.perform('getStorageAt', n);
            try {
              return (0, c.Dv)(i);
            } catch (t) {
              return tr.throwError('bad result from backend', a.Yd.errors.SERVER_ERROR, {
                method: 'getStorageAt',
                params: n,
                result: i,
                error: t,
              });
            }
          });
        }
        _wrapTransaction(t, e, r) {
          if (null != e && 32 !== (0, c.E1)(e)) throw Error('invalid response - sendTransaction');
          return (
            null != e &&
              t.hash !== e &&
              tr.throwError(
                'Transaction hash mismatch from Provider.sendTransaction.',
                a.Yd.errors.UNKNOWN_ERROR,
                { expectedHash: t.hash, returnedHash: e }
              ),
            (t.wait = (e, n) =>
              te(this, void 0, void 0, function* () {
                let i;
                null == e && (e = 1),
                  null == n && (n = 0),
                  0 !== e &&
                    null != r &&
                    (i = {
                      data: t.data,
                      from: t.from,
                      nonce: t.nonce,
                      to: t.to,
                      value: t.value,
                      startBlock: r,
                    });
                let s = yield this._waitForTransaction(t.hash, e, n, i);
                return null == s && 0 === e
                  ? null
                  : ((this._emitted['t:' + t.hash] = s.blockNumber),
                    0 === s.status &&
                      tr.throwError('transaction failed', a.Yd.errors.CALL_EXCEPTION, {
                        transactionHash: t.hash,
                        transaction: t,
                        receipt: s,
                      }),
                    s);
              })),
            t
          );
        }
        sendTransaction(t) {
          return te(this, void 0, void 0, function* () {
            yield this.getNetwork();
            let e = yield Promise.resolve(t).then((t) => (0, c.Dv)(t)),
              r = this.formatter.transaction(t);
            null == r.confirmations && (r.confirmations = 0);
            let n = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
            try {
              let t = yield this.perform('sendTransaction', { signedTransaction: e });
              return this._wrapTransaction(r, t, n);
            } catch (t) {
              throw ((t.transaction = r), (t.transactionHash = r.hash), t);
            }
          });
        }
        _getTransactionRequest(t) {
          return te(this, void 0, void 0, function* () {
            let e = yield t,
              r = {};
            return (
              ['from', 'to'].forEach((t) => {
                null != e[t] &&
                  (r[t] = Promise.resolve(e[t]).then((t) => (t ? this._getAddress(t) : null)));
              }),
              ['gasLimit', 'gasPrice', 'maxFeePerGas', 'maxPriorityFeePerGas', 'value'].forEach(
                (t) => {
                  null != e[t] &&
                    (r[t] = Promise.resolve(e[t]).then((t) => (t ? h.O$.from(t) : null)));
                }
              ),
              ['type'].forEach((t) => {
                null != e[t] && (r[t] = Promise.resolve(e[t]).then((t) => (null != t ? t : null)));
              }),
              e.accessList && (r.accessList = this.formatter.accessList(e.accessList)),
              ['data'].forEach((t) => {
                null != e[t] &&
                  (r[t] = Promise.resolve(e[t]).then((t) => (t ? (0, c.Dv)(t) : null)));
              }),
              this.formatter.transactionRequest(yield (0, o.mE)(r))
            );
          });
        }
        _getFilter(t) {
          return te(this, void 0, void 0, function* () {
            t = yield t;
            let e = {};
            return (
              null != t.address && (e.address = this._getAddress(t.address)),
              ['blockHash', 'topics'].forEach((r) => {
                null != t[r] && (e[r] = t[r]);
              }),
              ['fromBlock', 'toBlock'].forEach((r) => {
                null != t[r] && (e[r] = this._getBlockTag(t[r]));
              }),
              this.formatter.filter(yield (0, o.mE)(e))
            );
          });
        }
        _call(t, e, r) {
          return te(this, void 0, void 0, function* () {
            r >= 10 &&
              tr.throwError('CCIP read exceeded maximum redirections', a.Yd.errors.SERVER_ERROR, {
                redirects: r,
                transaction: t,
              });
            let n = t.to,
              i = yield this.perform('call', { transaction: t, blockTag: e });
            if (
              r >= 0 &&
              'latest' === e &&
              null != n &&
              '0x556f1830' === i.substring(0, 10) &&
              (0, c.E1)(i) % 32 == 4
            )
              try {
                let s = (0, c.p3)(i, 4),
                  o = (0, c.p3)(s, 0, 32);
                h.O$.from(o).eq(n) ||
                  tr.throwError('CCIP Read sender did not match', a.Yd.errors.CALL_EXCEPTION, {
                    name: 'OffchainLookup',
                    signature: 'OffchainLookup(address,string[],bytes,bytes4,bytes)',
                    transaction: t,
                    data: i,
                  });
                let u = [],
                  l = h.O$.from((0, c.p3)(s, 32, 64)).toNumber(),
                  d = h.O$.from((0, c.p3)(s, l, l + 32)).toNumber(),
                  f = (0, c.p3)(s, l + 32);
                for (let e = 0; e < d; e++) {
                  let r = tm(f, 32 * e);
                  null == r &&
                    tr.throwError(
                      'CCIP Read contained corrupt URL string',
                      a.Yd.errors.CALL_EXCEPTION,
                      {
                        name: 'OffchainLookup',
                        signature: 'OffchainLookup(address,string[],bytes,bytes4,bytes)',
                        transaction: t,
                        data: i,
                      }
                    ),
                    u.push(r);
                }
                let p = tg(s, 64);
                h.O$.from((0, c.p3)(s, 100, 128)).isZero() ||
                  tr.throwError(
                    'CCIP Read callback selector included junk',
                    a.Yd.errors.CALL_EXCEPTION,
                    {
                      name: 'OffchainLookup',
                      signature: 'OffchainLookup(address,string[],bytes,bytes4,bytes)',
                      transaction: t,
                      data: i,
                    }
                  );
                let m = (0, c.p3)(s, 96, 100),
                  g = tg(s, 128),
                  v = yield this.ccipReadFetch(t, p, u);
                null == v &&
                  tr.throwError(
                    'CCIP Read disabled or provided no URLs',
                    a.Yd.errors.CALL_EXCEPTION,
                    {
                      name: 'OffchainLookup',
                      signature: 'OffchainLookup(address,string[],bytes,bytes4,bytes)',
                      transaction: t,
                      data: i,
                    }
                  );
                let y = { to: n, data: (0, c.xs)([m, tb([v, g])]) };
                return this._call(y, e, r + 1);
              } catch (t) {
                if (t.code === a.Yd.errors.SERVER_ERROR) throw t;
              }
            try {
              return (0, c.Dv)(i);
            } catch (r) {
              return tr.throwError('bad result from backend', a.Yd.errors.SERVER_ERROR, {
                method: 'call',
                params: { transaction: t, blockTag: e },
                result: i,
                error: r,
              });
            }
          });
        }
        call(t, e) {
          return te(this, void 0, void 0, function* () {
            yield this.getNetwork();
            let r = yield (0, o.mE)({
              transaction: this._getTransactionRequest(t),
              blockTag: this._getBlockTag(e),
              ccipReadEnabled: Promise.resolve(t.ccipReadEnabled),
            });
            return this._call(r.transaction, r.blockTag, r.ccipReadEnabled ? 0 : -1);
          });
        }
        estimateGas(t) {
          return te(this, void 0, void 0, function* () {
            yield this.getNetwork();
            let e = yield (0, o.mE)({ transaction: this._getTransactionRequest(t) }),
              r = yield this.perform('estimateGas', e);
            try {
              return h.O$.from(r);
            } catch (t) {
              return tr.throwError('bad result from backend', a.Yd.errors.SERVER_ERROR, {
                method: 'estimateGas',
                params: e,
                result: r,
                error: t,
              });
            }
          });
        }
        _getAddress(t) {
          return te(this, void 0, void 0, function* () {
            'string' != typeof (t = yield t) &&
              tr.throwArgumentError('invalid address or ENS name', 'name', t);
            let e = yield this.resolveName(t);
            return (
              null == e &&
                tr.throwError('ENS name not configured', a.Yd.errors.UNSUPPORTED_OPERATION, {
                  operation: `resolveName(${JSON.stringify(t)})`,
                }),
              e
            );
          });
        }
        _getBlock(t, e) {
          return te(this, void 0, void 0, function* () {
            yield this.getNetwork(), (t = yield t);
            let r = -128,
              n = { includeTransactions: !!e };
            if ((0, c.A7)(t, 32)) n.blockHash = t;
            else
              try {
                (n.blockTag = yield this._getBlockTag(t)),
                  (0, c.A7)(n.blockTag) && (r = parseInt(n.blockTag.substring(2), 16));
              } catch (e) {
                tr.throwArgumentError('invalid block hash or block tag', 'blockHashOrBlockTag', t);
              }
            return A(
              () =>
                te(this, void 0, void 0, function* () {
                  let t = yield this.perform('getBlock', n);
                  if (null == t)
                    return (null != n.blockHash && null == this._emitted['b:' + n.blockHash]) ||
                      (null != n.blockTag && r > this._emitted.block)
                      ? null
                      : void 0;
                  if (e) {
                    let e = null;
                    for (let r = 0; r < t.transactions.length; r++) {
                      let n = t.transactions[r];
                      if (null == n.blockNumber) n.confirmations = 0;
                      else if (null == n.confirmations) {
                        null == e &&
                          (e = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval));
                        let t = e - n.blockNumber + 1;
                        t <= 0 && (t = 1), (n.confirmations = t);
                      }
                    }
                    let r = this.formatter.blockWithTransactions(t);
                    return (
                      (r.transactions = r.transactions.map((t) => this._wrapTransaction(t))), r
                    );
                  }
                  return this.formatter.block(t);
                }),
              { oncePoll: this }
            );
          });
        }
        getBlock(t) {
          return this._getBlock(t, !1);
        }
        getBlockWithTransactions(t) {
          return this._getBlock(t, !0);
        }
        getTransaction(t) {
          return te(this, void 0, void 0, function* () {
            yield this.getNetwork(), (t = yield t);
            let e = { transactionHash: this.formatter.hash(t, !0) };
            return A(
              () =>
                te(this, void 0, void 0, function* () {
                  let r = yield this.perform('getTransaction', e);
                  if (null == r) return null == this._emitted['t:' + t] ? null : void 0;
                  let n = this.formatter.transactionResponse(r);
                  if (null == n.blockNumber) n.confirmations = 0;
                  else if (null == n.confirmations) {
                    let t =
                      (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) -
                      n.blockNumber +
                      1;
                    t <= 0 && (t = 1), (n.confirmations = t);
                  }
                  return this._wrapTransaction(n);
                }),
              { oncePoll: this }
            );
          });
        }
        getTransactionReceipt(t) {
          return te(this, void 0, void 0, function* () {
            yield this.getNetwork(), (t = yield t);
            let e = { transactionHash: this.formatter.hash(t, !0) };
            return A(
              () =>
                te(this, void 0, void 0, function* () {
                  let r = yield this.perform('getTransactionReceipt', e);
                  if (null == r) return null == this._emitted['t:' + t] ? null : void 0;
                  if (null == r.blockHash) return;
                  let n = this.formatter.receipt(r);
                  if (null == n.blockNumber) n.confirmations = 0;
                  else if (null == n.confirmations) {
                    let t =
                      (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) -
                      n.blockNumber +
                      1;
                    t <= 0 && (t = 1), (n.confirmations = t);
                  }
                  return n;
                }),
              { oncePoll: this }
            );
          });
        }
        getLogs(t) {
          return te(this, void 0, void 0, function* () {
            yield this.getNetwork();
            let e = yield (0, o.mE)({ filter: this._getFilter(t) }),
              r = yield this.perform('getLogs', e);
            return (
              r.forEach((t) => {
                null == t.removed && (t.removed = !1);
              }),
              tt.arrayOf(this.formatter.filterLog.bind(this.formatter))(r)
            );
          });
        }
        getEtherPrice() {
          return te(this, void 0, void 0, function* () {
            return yield this.getNetwork(), this.perform('getEtherPrice', {});
          });
        }
        _getBlockTag(t) {
          return te(this, void 0, void 0, function* () {
            if ('number' == typeof (t = yield t) && t < 0) {
              t % 1 && tr.throwArgumentError('invalid BlockTag', 'blockTag', t);
              let e = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
              return (e += t) < 0 && (e = 0), this.formatter.blockTag(e);
            }
            return this.formatter.blockTag(t);
          });
        }
        getResolver(t) {
          return te(this, void 0, void 0, function* () {
            let e = t;
            for (;;) {
              if ('' === e || '.' === e || ('eth' !== t && 'eth' === e)) return null;
              let r = yield this._getResolver(e, 'getResolver');
              if (null != r) {
                let n = new tw(this, r, t);
                if (e !== t && !(yield n.supportsWildcard())) return null;
                return n;
              }
              e = e.split('.').slice(1).join('.');
            }
          });
        }
        _getResolver(t, e) {
          return te(this, void 0, void 0, function* () {
            null == e && (e = 'ENS');
            let r = yield this.getNetwork();
            r.ensAddress ||
              tr.throwError('network does not support ENS', a.Yd.errors.UNSUPPORTED_OPERATION, {
                operation: e,
                network: r.name,
              });
            try {
              let e = yield this.call({ to: r.ensAddress, data: '0x0178b8bf' + z(t).substring(2) });
              return this.formatter.callAddress(e);
            } catch (t) {}
            return null;
          });
        }
        resolveName(t) {
          return te(this, void 0, void 0, function* () {
            t = yield t;
            try {
              return Promise.resolve(this.formatter.address(t));
            } catch (e) {
              if ((0, c.A7)(t)) throw e;
            }
            'string' != typeof t && tr.throwArgumentError('invalid ENS name', 'name', t);
            let e = yield this.getResolver(t);
            return e ? yield e.getAddress() : null;
          });
        }
        lookupAddress(t) {
          return te(this, void 0, void 0, function* () {
            t = yield t;
            let e = (t = this.formatter.address(t)).substring(2).toLowerCase() + '.addr.reverse',
              r = yield this._getResolver(e, 'lookupAddress');
            if (null == r) return null;
            let n = tm(yield this.call({ to: r, data: '0x691f3431' + z(e).substring(2) }), 0);
            return (yield this.resolveName(n)) != t ? null : n;
          });
        }
        getAvatar(t) {
          return te(this, void 0, void 0, function* () {
            let e = null;
            if ((0, c.A7)(t)) {
              let r = this.formatter.address(t).substring(2).toLowerCase() + '.addr.reverse',
                n = yield this._getResolver(r, 'getAvatar');
              if (!n) return null;
              e = new tw(this, n, r);
              try {
                let t = yield e.getAvatar();
                if (t) return t.url;
              } catch (t) {
                if (t.code !== a.Yd.errors.CALL_EXCEPTION) throw t;
              }
              try {
                let t = tm(yield this.call({ to: n, data: '0x691f3431' + z(r).substring(2) }), 0);
                e = yield this.getResolver(t);
              } catch (t) {
                if (t.code !== a.Yd.errors.CALL_EXCEPTION) throw t;
                return null;
              }
            } else if (!(e = yield this.getResolver(t))) return null;
            let r = yield e.getAvatar();
            return null == r ? null : r.url;
          });
        }
        perform(t, e) {
          return tr.throwError(t + ' not implemented', a.Yd.errors.NOT_IMPLEMENTED, {
            operation: t,
          });
        }
        _startEvent(t) {
          this.polling = this._events.filter((t) => t.pollable()).length > 0;
        }
        _stopEvent(t) {
          this.polling = this._events.filter((t) => t.pollable()).length > 0;
        }
        _addEventListener(t, e, r) {
          let n = new tl(ts(t), e, r);
          return this._events.push(n), this._startEvent(n), this;
        }
        on(t, e) {
          return this._addEventListener(t, e, !1);
        }
        once(t, e) {
          return this._addEventListener(t, e, !0);
        }
        emit(t, ...e) {
          let r = !1,
            n = [],
            i = ts(t);
          return (
            (this._events = this._events.filter(
              (t) =>
                t.tag !== i ||
                (setTimeout(() => {
                  t.listener.apply(this, e);
                }, 0),
                (r = !0),
                !t.once || (n.push(t), !1))
            )),
            n.forEach((t) => {
              this._stopEvent(t);
            }),
            r
          );
        }
        listenerCount(t) {
          if (!t) return this._events.length;
          let e = ts(t);
          return this._events.filter((t) => t.tag === e).length;
        }
        listeners(t) {
          if (null == t) return this._events.map((t) => t.listener);
          let e = ts(t);
          return this._events.filter((t) => t.tag === e).map((t) => t.listener);
        }
        off(t, e) {
          if (null == e) return this.removeAllListeners(t);
          let r = [],
            n = !1,
            i = ts(t);
          return (
            (this._events = this._events.filter(
              (t) => t.tag !== i || t.listener != e || !!n || ((n = !0), r.push(t), !1)
            )),
            r.forEach((t) => {
              this._stopEvent(t);
            }),
            this
          );
        }
        removeAllListeners(t) {
          let e = [];
          if (null == t) (e = this._events), (this._events = []);
          else {
            let r = ts(t);
            this._events = this._events.filter((t) => t.tag !== r || (e.push(t), !1));
          }
          return (
            e.forEach((t) => {
              this._stopEvent(t);
            }),
            this
          );
        }
      }
      var tk = function (t, e, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function o(t) {
            try {
              u(n.next(t));
            } catch (t) {
              s(t);
            }
          }
          function a(t) {
            try {
              u(n.throw(t));
            } catch (t) {
              s(t);
            }
          }
          function u(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value) instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })
                ).then(o, a);
          }
          u((n = n.apply(t, e || [])).next());
        });
      };
      let tx = new a.Yd(u),
        tN = ['call', 'estimateGas'];
      function tM(t, e) {
        if (null == t) return null;
        if ('string' == typeof t.message && t.message.match('reverted')) {
          let r = (0, c.A7)(t.data) ? t.data : null;
          if (!e || r) return { message: t.message, data: r };
        }
        if ('object' == typeof t) {
          for (let r in t) {
            let n = tM(t[r], e);
            if (n) return n;
          }
          return null;
        }
        if ('string' == typeof t)
          try {
            return tM(JSON.parse(t), e);
          } catch (t) {}
        return null;
      }
      function tI(t, e, r) {
        let n = r.transaction || r.signedTransaction;
        if ('call' === t) {
          let t = tM(e, !0);
          if (t) return t.data;
          tx.throwError(
            'missing revert data in call exception; Transaction reverted without a reason string',
            a.Yd.errors.CALL_EXCEPTION,
            { data: '0x', transaction: n, error: e }
          );
        }
        if ('estimateGas' === t) {
          let r = tM(e.body, !1);
          null == r && (r = tM(e, !1)),
            r &&
              tx.throwError(
                'cannot estimate gas; transaction may fail or may require manual gas limit',
                a.Yd.errors.UNPREDICTABLE_GAS_LIMIT,
                { reason: r.message, method: t, transaction: n, error: e }
              );
        }
        let i = e.message;
        throw (
          (e.code === a.Yd.errors.SERVER_ERROR && e.error && 'string' == typeof e.error.message
            ? (i = e.error.message)
            : 'string' == typeof e.body
              ? (i = e.body)
              : 'string' == typeof e.responseText && (i = e.responseText),
          (i = (i || '').toLowerCase()).match(
            /insufficient funds|base fee exceeds gas limit|InsufficientFunds/i
          ) &&
            tx.throwError(
              'insufficient funds for intrinsic transaction cost',
              a.Yd.errors.INSUFFICIENT_FUNDS,
              { error: e, method: t, transaction: n }
            ),
          i.match(/nonce (is )?too low/i) &&
            tx.throwError('nonce has already been used', a.Yd.errors.NONCE_EXPIRED, {
              error: e,
              method: t,
              transaction: n,
            }),
          i.match(/replacement transaction underpriced|transaction gas price.*too low/i) &&
            tx.throwError('replacement fee too low', a.Yd.errors.REPLACEMENT_UNDERPRICED, {
              error: e,
              method: t,
              transaction: n,
            }),
          i.match(/only replay-protected/i) &&
            tx.throwError(
              'legacy pre-eip-155 transactions not supported',
              a.Yd.errors.UNSUPPORTED_OPERATION,
              { error: e, method: t, transaction: n }
            ),
          tN.indexOf(t) >= 0 &&
            i.match(
              /gas required exceeds allowance|always failing transaction|execution reverted|revert/
            ) &&
            tx.throwError(
              'cannot estimate gas; transaction may fail or may require manual gas limit',
              a.Yd.errors.UNPREDICTABLE_GAS_LIMIT,
              { error: e, method: t, transaction: n }
            ),
          e)
        );
      }
      function tP(t) {
        return new Promise(function (e) {
          setTimeout(e, t);
        });
      }
      function tS(t) {
        if (t.error) {
          let e = Error(t.error.message);
          throw ((e.code = t.error.code), (e.data = t.error.data), e);
        }
        return t.result;
      }
      function tC(t) {
        return t ? t.toLowerCase() : t;
      }
      let tT = {};
      class tR extends l.E {
        constructor(t, e, r) {
          if ((super(), t !== tT))
            throw Error(
              'do not call the JsonRpcSigner constructor directly; use provider.getSigner'
            );
          (0, o.zG)(this, 'provider', e),
            null == r && (r = 0),
            'string' == typeof r
              ? ((0, o.zG)(this, '_address', this.provider.formatter.address(r)),
                (0, o.zG)(this, '_index', null))
              : 'number' == typeof r
                ? ((0, o.zG)(this, '_index', r), (0, o.zG)(this, '_address', null))
                : tx.throwArgumentError('invalid address or index', 'addressOrIndex', r);
        }
        connect(t) {
          return tx.throwError(
            'cannot alter JSON-RPC Signer connection',
            a.Yd.errors.UNSUPPORTED_OPERATION,
            { operation: 'connect' }
          );
        }
        connectUnchecked() {
          return new tO(tT, this.provider, this._address || this._index);
        }
        getAddress() {
          return this._address
            ? Promise.resolve(this._address)
            : this.provider
                .send('eth_accounts', [])
                .then(
                  (t) => (
                    t.length <= this._index &&
                      tx.throwError(
                        'unknown account #' + this._index,
                        a.Yd.errors.UNSUPPORTED_OPERATION,
                        { operation: 'getAddress' }
                      ),
                    this.provider.formatter.address(t[this._index])
                  )
                );
        }
        sendUncheckedTransaction(t) {
          t = (0, o.DC)(t);
          let e = this.getAddress().then((t) => (t && (t = t.toLowerCase()), t));
          if (null == t.gasLimit) {
            let r = (0, o.DC)(t);
            (r.from = e), (t.gasLimit = this.provider.estimateGas(r));
          }
          return (
            null != t.to &&
              (t.to = Promise.resolve(t.to).then((t) =>
                tk(this, void 0, void 0, function* () {
                  if (null == t) return null;
                  let e = yield this.provider.resolveName(t);
                  return (
                    null == e &&
                      tx.throwArgumentError('provided ENS name resolves to null', 'tx.to', t),
                    e
                  );
                })
              )),
            (0, o.mE)({ tx: (0, o.mE)(t), sender: e }).then(({ tx: e, sender: r }) => {
              null != e.from
                ? e.from.toLowerCase() !== r &&
                  tx.throwArgumentError('from address mismatch', 'transaction', t)
                : (e.from = r);
              let n = this.provider.constructor.hexlifyTransaction(e, { from: !0 });
              return this.provider.send('eth_sendTransaction', [n]).then(
                (t) => t,
                (t) => (
                  'string' == typeof t.message &&
                    t.message.match(/user denied/i) &&
                    tx.throwError('user rejected transaction', a.Yd.errors.ACTION_REJECTED, {
                      action: 'sendTransaction',
                      transaction: e,
                    }),
                  tI('sendTransaction', t, n)
                )
              );
            })
          );
        }
        signTransaction(t) {
          return tx.throwError(
            'signing transactions is unsupported',
            a.Yd.errors.UNSUPPORTED_OPERATION,
            { operation: 'signTransaction' }
          );
        }
        sendTransaction(t) {
          return tk(this, void 0, void 0, function* () {
            let e = yield this.provider._getInternalBlockNumber(
                100 + 2 * this.provider.pollingInterval
              ),
              r = yield this.sendUncheckedTransaction(t);
            try {
              return yield A(
                () =>
                  tk(this, void 0, void 0, function* () {
                    let t = yield this.provider.getTransaction(r);
                    if (null !== t) return this.provider._wrapTransaction(t, r, e);
                  }),
                { oncePoll: this.provider }
              );
            } catch (t) {
              throw ((t.transactionHash = r), t);
            }
          });
        }
        signMessage(t) {
          return tk(this, void 0, void 0, function* () {
            let e = 'string' == typeof t ? (0, f.Y0)(t) : t,
              r = yield this.getAddress();
            try {
              return yield this.provider.send('personal_sign', [(0, c.Dv)(e), r.toLowerCase()]);
            } catch (e) {
              throw (
                ('string' == typeof e.message &&
                  e.message.match(/user denied/i) &&
                  tx.throwError('user rejected signing', a.Yd.errors.ACTION_REJECTED, {
                    action: 'signMessage',
                    from: r,
                    messageData: t,
                  }),
                e)
              );
            }
          });
        }
        _legacySignMessage(t) {
          return tk(this, void 0, void 0, function* () {
            let e = 'string' == typeof t ? (0, f.Y0)(t) : t,
              r = yield this.getAddress();
            try {
              return yield this.provider.send('eth_sign', [r.toLowerCase(), (0, c.Dv)(e)]);
            } catch (e) {
              throw (
                ('string' == typeof e.message &&
                  e.message.match(/user denied/i) &&
                  tx.throwError('user rejected signing', a.Yd.errors.ACTION_REJECTED, {
                    action: '_legacySignMessage',
                    from: r,
                    messageData: t,
                  }),
                e)
              );
            }
          });
        }
        _signTypedData(t, e, r) {
          return tk(this, void 0, void 0, function* () {
            let n = yield d.E.resolveNames(t, e, r, (t) => this.provider.resolveName(t)),
              i = yield this.getAddress();
            try {
              return yield this.provider.send('eth_signTypedData_v4', [
                i.toLowerCase(),
                JSON.stringify(d.E.getPayload(n.domain, e, n.value)),
              ]);
            } catch (t) {
              throw (
                ('string' == typeof t.message &&
                  t.message.match(/user denied/i) &&
                  tx.throwError('user rejected signing', a.Yd.errors.ACTION_REJECTED, {
                    action: '_signTypedData',
                    from: i,
                    messageData: { domain: n.domain, types: e, value: n.value },
                  }),
                t)
              );
            }
          });
        }
        unlock(t) {
          return tk(this, void 0, void 0, function* () {
            let e = this.provider,
              r = yield this.getAddress();
            return e.send('personal_unlockAccount', [r.toLowerCase(), t, null]);
          });
        }
      }
      class tO extends tR {
        sendTransaction(t) {
          return this.sendUncheckedTransaction(t).then((t) => ({
            hash: t,
            nonce: null,
            gasLimit: null,
            gasPrice: null,
            data: null,
            value: null,
            chainId: null,
            confirmations: 0,
            from: null,
            wait: (e) => this.provider.waitForTransaction(t, e),
          }));
        }
      }
      let tB = {
        chainId: !0,
        data: !0,
        gasLimit: !0,
        gasPrice: !0,
        nonce: !0,
        to: !0,
        value: !0,
        type: !0,
        accessList: !0,
        maxFeePerGas: !0,
        maxPriorityFeePerGas: !0,
      };
      class tD extends tE {
        constructor(t, e) {
          let r = e;
          null == r &&
            (r = new Promise((t, e) => {
              setTimeout(() => {
                this.detectNetwork().then(
                  (e) => {
                    t(e);
                  },
                  (t) => {
                    e(t);
                  }
                );
              }, 0);
            })),
            super(r),
            t || (t = (0, o.tu)(this.constructor, 'defaultUrl')()),
            'string' == typeof t
              ? (0, o.zG)(this, 'connection', Object.freeze({ url: t }))
              : (0, o.zG)(this, 'connection', Object.freeze((0, o.DC)(t))),
            (this._nextId = 42);
        }
        get _cache() {
          return null == this._eventLoopCache && (this._eventLoopCache = {}), this._eventLoopCache;
        }
        static defaultUrl() {
          return 'http://localhost:8545';
        }
        detectNetwork() {
          return (
            this._cache.detectNetwork ||
              ((this._cache.detectNetwork = this._uncachedDetectNetwork()),
              setTimeout(() => {
                this._cache.detectNetwork = null;
              }, 0)),
            this._cache.detectNetwork
          );
        }
        _uncachedDetectNetwork() {
          return tk(this, void 0, void 0, function* () {
            yield tP(0);
            let t = null;
            try {
              t = yield this.send('eth_chainId', []);
            } catch (e) {
              try {
                t = yield this.send('net_version', []);
              } catch (t) {}
            }
            if (null != t) {
              let e = (0, o.tu)(this.constructor, 'getNetwork');
              try {
                return e(h.O$.from(t).toNumber());
              } catch (e) {
                return tx.throwError('could not detect network', a.Yd.errors.NETWORK_ERROR, {
                  chainId: t,
                  event: 'invalidNetwork',
                  serverError: e,
                });
              }
            }
            return tx.throwError('could not detect network', a.Yd.errors.NETWORK_ERROR, {
              event: 'noNetwork',
            });
          });
        }
        getSigner(t) {
          return new tR(tT, this, t);
        }
        getUncheckedSigner(t) {
          return this.getSigner(t).connectUnchecked();
        }
        listAccounts() {
          return this.send('eth_accounts', []).then((t) => t.map((t) => this.formatter.address(t)));
        }
        send(t, e) {
          let r = { method: t, params: e, id: this._nextId++, jsonrpc: '2.0' };
          this.emit('debug', { action: 'request', request: (0, o.p$)(r), provider: this });
          let n = ['eth_chainId', 'eth_blockNumber'].indexOf(t) >= 0;
          if (n && this._cache[t]) return this._cache[t];
          let i = w(this.connection, JSON.stringify(r), tS).then(
            (t) => (
              this.emit('debug', { action: 'response', request: r, response: t, provider: this }), t
            ),
            (t) => {
              throw (
                (this.emit('debug', { action: 'response', error: t, request: r, provider: this }),
                t)
              );
            }
          );
          return (
            n &&
              ((this._cache[t] = i),
              setTimeout(() => {
                this._cache[t] = null;
              }, 0)),
            i
          );
        }
        prepareRequest(t, e) {
          switch (t) {
            case 'getBlockNumber':
              return ['eth_blockNumber', []];
            case 'getGasPrice':
              return ['eth_gasPrice', []];
            case 'getBalance':
              return ['eth_getBalance', [tC(e.address), e.blockTag]];
            case 'getTransactionCount':
              return ['eth_getTransactionCount', [tC(e.address), e.blockTag]];
            case 'getCode':
              return ['eth_getCode', [tC(e.address), e.blockTag]];
            case 'getStorageAt':
              return ['eth_getStorageAt', [tC(e.address), (0, c.$m)(e.position, 32), e.blockTag]];
            case 'sendTransaction':
              return ['eth_sendRawTransaction', [e.signedTransaction]];
            case 'getBlock':
              if (e.blockTag)
                return ['eth_getBlockByNumber', [e.blockTag, !!e.includeTransactions]];
              if (e.blockHash)
                return ['eth_getBlockByHash', [e.blockHash, !!e.includeTransactions]];
              break;
            case 'getTransaction':
              return ['eth_getTransactionByHash', [e.transactionHash]];
            case 'getTransactionReceipt':
              return ['eth_getTransactionReceipt', [e.transactionHash]];
            case 'call':
              return [
                'eth_call',
                [
                  (0, o.tu)(this.constructor, 'hexlifyTransaction')(e.transaction, { from: !0 }),
                  e.blockTag,
                ],
              ];
            case 'estimateGas':
              return [
                'eth_estimateGas',
                [(0, o.tu)(this.constructor, 'hexlifyTransaction')(e.transaction, { from: !0 })],
              ];
            case 'getLogs':
              return (
                e.filter && null != e.filter.address && (e.filter.address = tC(e.filter.address)),
                ['eth_getLogs', [e.filter]]
              );
          }
          return null;
        }
        perform(t, e) {
          return tk(this, void 0, void 0, function* () {
            if ('call' === t || 'estimateGas' === t) {
              let t = e.transaction;
              if (
                t &&
                null != t.type &&
                h.O$.from(t.type).isZero() &&
                null == t.maxFeePerGas &&
                null == t.maxPriorityFeePerGas
              ) {
                let r = yield this.getFeeData();
                null == r.maxFeePerGas &&
                  null == r.maxPriorityFeePerGas &&
                  (((e = (0, o.DC)(e)).transaction = (0, o.DC)(t)), delete e.transaction.type);
              }
            }
            let r = this.prepareRequest(t, e);
            null == r &&
              tx.throwError(t + ' not implemented', a.Yd.errors.NOT_IMPLEMENTED, { operation: t });
            try {
              return yield this.send(r[0], r[1]);
            } catch (r) {
              return tI(t, r, e);
            }
          });
        }
        _startEvent(t) {
          'pending' === t.tag && this._startPending(), super._startEvent(t);
        }
        _startPending() {
          if (null != this._pendingFilter) return;
          let t = this,
            e = this.send('eth_newPendingTransactionFilter', []);
          (this._pendingFilter = e),
            e
              .then(function (r) {
                return (
                  (function n() {
                    t.send('eth_getFilterChanges', [r])
                      .then(function (r) {
                        if (t._pendingFilter != e) return null;
                        let n = Promise.resolve();
                        return (
                          r.forEach(function (e) {
                            (t._emitted['t:' + e.toLowerCase()] = 'pending'),
                              (n = n.then(function () {
                                return t.getTransaction(e).then(function (e) {
                                  return t.emit('pending', e), null;
                                });
                              }));
                          }),
                          n.then(function () {
                            return tP(1e3);
                          })
                        );
                      })
                      .then(function () {
                        if (t._pendingFilter != e) {
                          t.send('eth_uninstallFilter', [r]);
                          return;
                        }
                        return (
                          setTimeout(function () {
                            n();
                          }, 0),
                          null
                        );
                      })
                      .catch((t) => {});
                  })(),
                  r
                );
              })
              .catch((t) => {});
        }
        _stopEvent(t) {
          'pending' === t.tag &&
            0 === this.listenerCount('pending') &&
            (this._pendingFilter = null),
            super._stopEvent(t);
        }
        static hexlifyTransaction(t, e) {
          let r = (0, o.DC)(tB);
          if (e) for (let t in e) e[t] && (r[t] = !0);
          (0, o.uj)(t, r);
          let n = {};
          return (
            [
              'chainId',
              'gasLimit',
              'gasPrice',
              'type',
              'maxFeePerGas',
              'maxPriorityFeePerGas',
              'nonce',
              'value',
            ].forEach(function (e) {
              if (null == t[e]) return;
              let r = (0, c.$P)(h.O$.from(t[e]));
              'gasLimit' === e && (e = 'gas'), (n[e] = r);
            }),
            ['from', 'to', 'data'].forEach(function (e) {
              null != t[e] && (n[e] = (0, c.Dv)(t[e]));
            }),
            t.accessList && (n.accessList = (0, p.z7)(t.accessList)),
            n
          );
        }
      }
      let tL = new a.Yd(u);
      class tU extends tD {
        detectNetwork() {
          var t, e, r, n;
          let i = Object.create(null, { detectNetwork: { get: () => super.detectNetwork } });
          return (
            (t = this),
            (e = void 0),
            (r = void 0),
            (n = function* () {
              let t = this.network;
              return (
                null == t &&
                  ((t = yield i.detectNetwork.call(this)) ||
                    tL.throwError('no network detected', a.Yd.errors.UNKNOWN_ERROR, {}),
                  null == this._network &&
                    ((0, o.zG)(this, '_network', t), this.emit('network', t, null))),
                t
              );
            }),
            new (r || (r = Promise))(function (i, s) {
              function o(t) {
                try {
                  u(n.next(t));
                } catch (t) {
                  s(t);
                }
              }
              function a(t) {
                try {
                  u(n.throw(t));
                } catch (t) {
                  s(t);
                }
              }
              function u(t) {
                var e;
                t.done
                  ? i(t.value)
                  : ((e = t.value) instanceof r
                      ? e
                      : new r(function (t) {
                          t(e);
                        })
                    ).then(o, a);
              }
              u((n = n.apply(t, e || [])).next());
            })
          );
        }
      }
    },
    2585: function (t, e, r) {
      'use strict';
      r.d(e, {
        J: function () {
          return c;
        },
        c: function () {
          return u;
        },
      });
      var n = r(7730),
        i = r(67214);
      let s = new i.Yd('rlp/5.7.0');
      function o(t) {
        let e = [];
        for (; t; ) e.unshift(255 & t), (t >>= 8);
        return e;
      }
      function a(t, e, r) {
        let n = 0;
        for (let i = 0; i < r; i++) n = 256 * n + t[e + i];
        return n;
      }
      function u(t) {
        return (0, n.Dv)(
          (function t(e) {
            if (Array.isArray(e)) {
              let r = [];
              if (
                (e.forEach(function (e) {
                  r = r.concat(t(e));
                }),
                r.length <= 55)
              )
                return r.unshift(192 + r.length), r;
              let n = o(r.length);
              return n.unshift(247 + n.length), n.concat(r);
            }
            (0, n.Zq)(e) || s.throwArgumentError('RLP object must be BytesLike', 'object', e);
            let r = Array.prototype.slice.call((0, n.lE)(e));
            if (1 === r.length && r[0] <= 127) return r;
            if (r.length <= 55) return r.unshift(128 + r.length), r;
            let i = o(r.length);
            return i.unshift(183 + i.length), i.concat(r);
          })(t)
        );
      }
      function l(t, e, r, n) {
        let o = [];
        for (; r < e + 1 + n; ) {
          let a = h(t, r);
          o.push(a.result),
            (r += a.consumed) > e + 1 + n &&
              s.throwError('child data too short', i.Yd.errors.BUFFER_OVERRUN, {});
        }
        return { consumed: 1 + n, result: o };
      }
      function h(t, e) {
        if (
          (0 === t.length && s.throwError('data too short', i.Yd.errors.BUFFER_OVERRUN, {}),
          t[e] >= 248)
        ) {
          let r = t[e] - 247;
          e + 1 + r > t.length &&
            s.throwError('data short segment too short', i.Yd.errors.BUFFER_OVERRUN, {});
          let n = a(t, e + 1, r);
          return (
            e + 1 + r + n > t.length &&
              s.throwError('data long segment too short', i.Yd.errors.BUFFER_OVERRUN, {}),
            l(t, e, e + 1 + r, r + n)
          );
        }
        if (t[e] >= 192) {
          let r = t[e] - 192;
          return (
            e + 1 + r > t.length &&
              s.throwError('data array too short', i.Yd.errors.BUFFER_OVERRUN, {}),
            l(t, e, e + 1, r)
          );
        }
        if (t[e] >= 184) {
          let r = t[e] - 183;
          e + 1 + r > t.length &&
            s.throwError('data array too short', i.Yd.errors.BUFFER_OVERRUN, {});
          let o = a(t, e + 1, r);
          e + 1 + r + o > t.length &&
            s.throwError('data array too short', i.Yd.errors.BUFFER_OVERRUN, {});
          let u = (0, n.Dv)(t.slice(e + 1 + r, e + 1 + r + o));
          return { consumed: 1 + r + o, result: u };
        }
        if (t[e] >= 128) {
          let r = t[e] - 128;
          e + 1 + r > t.length && s.throwError('data too short', i.Yd.errors.BUFFER_OVERRUN, {});
          let o = (0, n.Dv)(t.slice(e + 1, e + 1 + r));
          return { consumed: 1 + r, result: o };
        }
        return { consumed: 1, result: (0, n.Dv)(t[e]) };
      }
      function c(t) {
        let e = (0, n.lE)(t),
          r = h(e, 0);
        return (
          r.consumed !== e.length && s.throwArgumentError('invalid rlp data', 'data', t), r.result
        );
      }
    },
    53319: function (t, e, r) {
      'use strict';
      r.d(e, {
        Gy: function () {
          return c;
        },
        bP: function () {
          return l;
        },
        JQ: function () {
          return h;
        },
      });
      var n = r(20141),
        i = r.n(n),
        s = r(7730),
        o = r(53106),
        a = r(67214);
      let u = new a.Yd('sha2/5.7.0');
      function l(t) {
        return (
          '0x' +
          i()
            .ripemd160()
            .update((0, s.lE)(t))
            .digest('hex')
        );
      }
      function h(t) {
        return (
          '0x' +
          i()
            .sha256()
            .update((0, s.lE)(t))
            .digest('hex')
        );
      }
      function c(t, e, r) {
        return (
          o.p[t] ||
            u.throwError('unsupported algorithm ' + t, a.Yd.errors.UNSUPPORTED_OPERATION, {
              operation: 'hmac',
              algorithm: t,
            }),
          '0x' +
            i()
              .hmac(i()[t], (0, s.lE)(e))
              .update((0, s.lE)(r))
              .digest('hex')
        );
      }
    },
    53106: function (t, e, r) {
      'use strict';
      var n, i;
      r.d(e, {
        p: function () {
          return n;
        },
      }),
        ((i = n || (n = {})).sha256 = 'sha256'),
        (i.sha512 = 'sha512');
    },
    65653: function (t, e, r) {
      'use strict';
      r.d(e, {
        Et: function () {
          return Z;
        },
        VW: function () {
          return q;
        },
        LO: function () {
          return Y;
        },
      });
      var n = r(12261),
        i = r.n(n),
        s = r(20141),
        o = r.n(s);
      function a(t, e, r) {
        return (
          t(
            (r = {
              path: e,
              exports: {},
              require: function (t, e) {
                return (function () {
                  throw Error(
                    'Dynamic requires are not currently supported by @rollup/plugin-commonjs'
                  );
                })(t, null == e ? r.path : e);
              },
            }),
            r.exports
          ),
          r.exports
        );
      }
      'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
          ? window
          : void 0 !== r.g
            ? r.g
            : 'undefined' != typeof self && self;
      var u = l;
      function l(t, e) {
        if (!t) throw Error(e || 'Assertion failed');
      }
      l.equal = function (t, e, r) {
        if (t != e) throw Error(r || 'Assertion failed: ' + t + ' != ' + e);
      };
      var h = a(function (t, e) {
          function r(t) {
            return 1 === t.length ? '0' + t : t;
          }
          function n(t) {
            for (var e = '', n = 0; n < t.length; n++) e += r(t[n].toString(16));
            return e;
          }
          (e.toArray = function (t, e) {
            if (Array.isArray(t)) return t.slice();
            if (!t) return [];
            var r = [];
            if ('string' != typeof t) {
              for (var n = 0; n < t.length; n++) r[n] = 0 | t[n];
              return r;
            }
            if ('hex' === e) {
              (t = t.replace(/[^a-z0-9]+/gi, '')).length % 2 != 0 && (t = '0' + t);
              for (var n = 0; n < t.length; n += 2) r.push(parseInt(t[n] + t[n + 1], 16));
            } else
              for (var n = 0; n < t.length; n++) {
                var i = t.charCodeAt(n),
                  s = i >> 8,
                  o = 255 & i;
                s ? r.push(s, o) : r.push(o);
              }
            return r;
          }),
            (e.zero2 = r),
            (e.toHex = n),
            (e.encode = function (t, e) {
              return 'hex' === e ? n(t) : t;
            });
        }),
        c = a(function (t, e) {
          (e.assert = u),
            (e.toArray = h.toArray),
            (e.zero2 = h.zero2),
            (e.toHex = h.toHex),
            (e.encode = h.encode),
            (e.getNAF = function (t, e, r) {
              var n = Array(Math.max(t.bitLength(), r) + 1);
              n.fill(0);
              for (var i = 1 << (e + 1), s = t.clone(), o = 0; o < n.length; o++) {
                var a,
                  u = s.andln(i - 1);
                s.isOdd() ? ((a = u > (i >> 1) - 1 ? (i >> 1) - u : u), s.isubn(a)) : (a = 0),
                  (n[o] = a),
                  s.iushrn(1);
              }
              return n;
            }),
            (e.getJSF = function (t, e) {
              var r = [[], []];
              (t = t.clone()), (e = e.clone());
              for (var n = 0, i = 0; t.cmpn(-n) > 0 || e.cmpn(-i) > 0; ) {
                var s,
                  o,
                  a,
                  u = (t.andln(3) + n) & 3,
                  l = (e.andln(3) + i) & 3;
                3 === u && (u = -1),
                  3 === l && (l = -1),
                  (o =
                    (1 & u) == 0
                      ? 0
                      : (3 == (s = (t.andln(7) + n) & 7) || 5 === s) && 2 === l
                        ? -u
                        : u),
                  r[0].push(o),
                  (a =
                    (1 & l) == 0
                      ? 0
                      : (3 == (s = (e.andln(7) + i) & 7) || 5 === s) && 2 === u
                        ? -l
                        : l),
                  r[1].push(a),
                  2 * n === o + 1 && (n = 1 - n),
                  2 * i === a + 1 && (i = 1 - i),
                  t.iushrn(1),
                  e.iushrn(1);
              }
              return r;
            }),
            (e.cachedProperty = function (t, e, r) {
              var n = '_' + e;
              t.prototype[e] = function () {
                return void 0 !== this[n] ? this[n] : (this[n] = r.call(this));
              };
            }),
            (e.parseBytes = function (t) {
              return 'string' == typeof t ? e.toArray(t, 'hex') : t;
            }),
            (e.intFromLE = function (t) {
              return new (i())(t, 'hex', 'le');
            });
        }),
        d = c.getNAF,
        f = c.getJSF,
        p = c.assert;
      function m(t, e) {
        (this.type = t),
          (this.p = new (i())(e.p, 16)),
          (this.red = e.prime ? i().red(e.prime) : i().mont(this.p)),
          (this.zero = new (i())(0).toRed(this.red)),
          (this.one = new (i())(1).toRed(this.red)),
          (this.two = new (i())(2).toRed(this.red)),
          (this.n = e.n && new (i())(e.n, 16)),
          (this.g = e.g && this.pointFromJSON(e.g, e.gRed)),
          (this._wnafT1 = [, , , ,]),
          (this._wnafT2 = [, , , ,]),
          (this._wnafT3 = [, , , ,]),
          (this._wnafT4 = [, , , ,]),
          (this._bitLength = this.n ? this.n.bitLength() : 0);
        var r = this.n && this.p.div(this.n);
        !r || r.cmpn(100) > 0
          ? (this.redN = null)
          : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
      }
      function g(t, e) {
        (this.curve = t), (this.type = e), (this.precomputed = null);
      }
      (m.prototype.point = function () {
        throw Error('Not implemented');
      }),
        (m.prototype.validate = function () {
          throw Error('Not implemented');
        }),
        (m.prototype._fixedNafMul = function (t, e) {
          p(t.precomputed);
          var r,
            n,
            i = t._getDoubles(),
            s = d(e, 1, this._bitLength),
            o = (1 << (i.step + 1)) - (i.step % 2 == 0 ? 2 : 1);
          o /= 3;
          var a = [];
          for (r = 0; r < s.length; r += i.step) {
            n = 0;
            for (var u = r + i.step - 1; u >= r; u--) n = (n << 1) + s[u];
            a.push(n);
          }
          for (
            var l = this.jpoint(null, null, null), h = this.jpoint(null, null, null), c = o;
            c > 0;
            c--
          ) {
            for (r = 0; r < a.length; r++)
              (n = a[r]) === c
                ? (h = h.mixedAdd(i.points[r]))
                : n === -c && (h = h.mixedAdd(i.points[r].neg()));
            l = l.add(h);
          }
          return l.toP();
        }),
        (m.prototype._wnafMul = function (t, e) {
          var r = 4,
            n = t._getNAFPoints(r);
          r = n.wnd;
          for (
            var i = n.points,
              s = d(e, r, this._bitLength),
              o = this.jpoint(null, null, null),
              a = s.length - 1;
            a >= 0;
            a--
          ) {
            for (var u = 0; a >= 0 && 0 === s[a]; a--) u++;
            if ((a >= 0 && u++, (o = o.dblp(u)), a < 0)) break;
            var l = s[a];
            p(0 !== l),
              (o =
                'affine' === t.type
                  ? l > 0
                    ? o.mixedAdd(i[(l - 1) >> 1])
                    : o.mixedAdd(i[(-l - 1) >> 1].neg())
                  : l > 0
                    ? o.add(i[(l - 1) >> 1])
                    : o.add(i[(-l - 1) >> 1].neg()));
          }
          return 'affine' === t.type ? o.toP() : o;
        }),
        (m.prototype._wnafMulAdd = function (t, e, r, n, i) {
          var s,
            o,
            a,
            u = this._wnafT1,
            l = this._wnafT2,
            h = this._wnafT3,
            c = 0;
          for (s = 0; s < n; s++) {
            var p = (a = e[s])._getNAFPoints(t);
            (u[s] = p.wnd), (l[s] = p.points);
          }
          for (s = n - 1; s >= 1; s -= 2) {
            var m = s - 1,
              g = s;
            if (1 !== u[m] || 1 !== u[g]) {
              (h[m] = d(r[m], u[m], this._bitLength)),
                (h[g] = d(r[g], u[g], this._bitLength)),
                (c = Math.max(h[m].length, c)),
                (c = Math.max(h[g].length, c));
              continue;
            }
            var v = [e[m], null, null, e[g]];
            0 === e[m].y.cmp(e[g].y)
              ? ((v[1] = e[m].add(e[g])), (v[2] = e[m].toJ().mixedAdd(e[g].neg())))
              : 0 === e[m].y.cmp(e[g].y.redNeg())
                ? ((v[1] = e[m].toJ().mixedAdd(e[g])), (v[2] = e[m].add(e[g].neg())))
                : ((v[1] = e[m].toJ().mixedAdd(e[g])), (v[2] = e[m].toJ().mixedAdd(e[g].neg())));
            var y = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
              b = f(r[m], r[g]);
            for (
              o = 0, c = Math.max(b[0].length, c), h[m] = Array(c), h[g] = Array(c);
              o < c;
              o++
            ) {
              var w = 0 | b[0][o],
                A = 0 | b[1][o];
              (h[m][o] = y[(w + 1) * 3 + (A + 1)]), (h[g][o] = 0), (l[m] = v);
            }
          }
          var _ = this.jpoint(null, null, null),
            E = this._wnafT4;
          for (s = c; s >= 0; s--) {
            for (var k = 0; s >= 0; ) {
              var x = !0;
              for (o = 0; o < n; o++) (E[o] = 0 | h[o][s]), 0 !== E[o] && (x = !1);
              if (!x) break;
              k++, s--;
            }
            if ((s >= 0 && k++, (_ = _.dblp(k)), s < 0)) break;
            for (o = 0; o < n; o++) {
              var N = E[o];
              0 !== N &&
                (N > 0 ? (a = l[o][(N - 1) >> 1]) : N < 0 && (a = l[o][(-N - 1) >> 1].neg()),
                (_ = 'affine' === a.type ? _.mixedAdd(a) : _.add(a)));
            }
          }
          for (s = 0; s < n; s++) l[s] = null;
          return i ? _ : _.toP();
        }),
        (m.BasePoint = g),
        (g.prototype.eq = function () {
          throw Error('Not implemented');
        }),
        (g.prototype.validate = function () {
          return this.curve.validate(this);
        }),
        (m.prototype.decodePoint = function (t, e) {
          t = c.toArray(t, e);
          var r = this.p.byteLength();
          if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 == 2 * r)
            return (
              6 === t[0] ? p(t[t.length - 1] % 2 == 0) : 7 === t[0] && p(t[t.length - 1] % 2 == 1),
              this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r))
            );
          if ((2 === t[0] || 3 === t[0]) && t.length - 1 === r)
            return this.pointFromX(t.slice(1, 1 + r), 3 === t[0]);
          throw Error('Unknown point format');
        }),
        (g.prototype.encodeCompressed = function (t) {
          return this.encode(t, !0);
        }),
        (g.prototype._encode = function (t) {
          var e = this.curve.p.byteLength(),
            r = this.getX().toArray('be', e);
          return t
            ? [this.getY().isEven() ? 2 : 3].concat(r)
            : [4].concat(r, this.getY().toArray('be', e));
        }),
        (g.prototype.encode = function (t, e) {
          return c.encode(this._encode(e), t);
        }),
        (g.prototype.precompute = function (t) {
          if (this.precomputed) return this;
          var e = { doubles: null, naf: null, beta: null };
          return (
            (e.naf = this._getNAFPoints(8)),
            (e.doubles = this._getDoubles(4, t)),
            (e.beta = this._getBeta()),
            (this.precomputed = e),
            this
          );
        }),
        (g.prototype._hasDoubles = function (t) {
          if (!this.precomputed) return !1;
          var e = this.precomputed.doubles;
          return !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step);
        }),
        (g.prototype._getDoubles = function (t, e) {
          if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
          for (var r = [this], n = this, i = 0; i < e; i += t) {
            for (var s = 0; s < t; s++) n = n.dbl();
            r.push(n);
          }
          return { step: t, points: r };
        }),
        (g.prototype._getNAFPoints = function (t) {
          if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
          for (var e = [this], r = (1 << t) - 1, n = 1 === r ? null : this.dbl(), i = 1; i < r; i++)
            e[i] = e[i - 1].add(n);
          return { wnd: t, points: e };
        }),
        (g.prototype._getBeta = function () {
          return null;
        }),
        (g.prototype.dblp = function (t) {
          for (var e = this, r = 0; r < t; r++) e = e.dbl();
          return e;
        });
      var v = a(function (t) {
          'function' == typeof Object.create
            ? (t.exports = function (t, e) {
                e &&
                  ((t.super_ = e),
                  (t.prototype = Object.create(e.prototype, {
                    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
                  })));
              })
            : (t.exports = function (t, e) {
                if (e) {
                  t.super_ = e;
                  var r = function () {};
                  (r.prototype = e.prototype),
                    (t.prototype = new r()),
                    (t.prototype.constructor = t);
                }
              });
        }),
        y = c.assert;
      function b(t) {
        m.call(this, 'short', t),
          (this.a = new (i())(t.a, 16).toRed(this.red)),
          (this.b = new (i())(t.b, 16).toRed(this.red)),
          (this.tinv = this.two.redInvm()),
          (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
          (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
          (this.endo = this._getEndomorphism(t)),
          (this._endoWnafT1 = [, , , ,]),
          (this._endoWnafT2 = [, , , ,]);
      }
      function w(t, e, r, n) {
        m.BasePoint.call(this, t, 'affine'),
          null === e && null === r
            ? ((this.x = null), (this.y = null), (this.inf = !0))
            : ((this.x = new (i())(e, 16)),
              (this.y = new (i())(r, 16)),
              n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              (this.inf = !1));
      }
      function A(t, e, r, n) {
        m.BasePoint.call(this, t, 'jacobian'),
          null === e && null === r && null === n
            ? ((this.x = this.curve.one), (this.y = this.curve.one), (this.z = new (i())(0)))
            : ((this.x = new (i())(e, 16)),
              (this.y = new (i())(r, 16)),
              (this.z = new (i())(n, 16))),
          this.x.red || (this.x = this.x.toRed(this.curve.red)),
          this.y.red || (this.y = this.y.toRed(this.curve.red)),
          this.z.red || (this.z = this.z.toRed(this.curve.red)),
          (this.zOne = this.z === this.curve.one);
      }
      v(b, m),
        (b.prototype._getEndomorphism = function (t) {
          if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            if (t.beta) e = new (i())(t.beta, 16).toRed(this.red);
            else {
              var e,
                r,
                n,
                s = this._getEndoRoots(this.p);
              e = (e = 0 > s[0].cmp(s[1]) ? s[0] : s[1]).toRed(this.red);
            }
            if (t.lambda) r = new (i())(t.lambda, 16);
            else {
              var o = this._getEndoRoots(this.n);
              0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(e))
                ? (r = o[0])
                : ((r = o[1]), y(0 === this.g.mul(r).x.cmp(this.g.x.redMul(e))));
            }
            return (
              (n = t.basis
                ? t.basis.map(function (t) {
                    return { a: new (i())(t.a, 16), b: new (i())(t.b, 16) };
                  })
                : this._getEndoBasis(r)),
              { beta: e, lambda: r, basis: n }
            );
          }
        }),
        (b.prototype._getEndoRoots = function (t) {
          var e = t === this.p ? this.red : i().mont(t),
            r = new (i())(2).toRed(e).redInvm(),
            n = r.redNeg(),
            s = new (i())(3).toRed(e).redNeg().redSqrt().redMul(r);
          return [n.redAdd(s).fromRed(), n.redSub(s).fromRed()];
        }),
        (b.prototype._getEndoBasis = function (t) {
          for (
            var e,
              r,
              n,
              s,
              o,
              a,
              u,
              l,
              h,
              c = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
              d = t,
              f = this.n.clone(),
              p = new (i())(1),
              m = new (i())(0),
              g = new (i())(0),
              v = new (i())(1),
              y = 0;
            0 !== d.cmpn(0);

          ) {
            var b = f.div(d);
            (l = f.sub(b.mul(d))), (h = g.sub(b.mul(p)));
            var w = v.sub(b.mul(m));
            if (!n && 0 > l.cmp(c)) (e = u.neg()), (r = p), (n = l.neg()), (s = h);
            else if (n && 2 == ++y) break;
            (u = l), (f = d), (d = l), (g = p), (p = h), (v = m), (m = w);
          }
          (o = l.neg()), (a = h);
          var A = n.sqr().add(s.sqr());
          return (
            o.sqr().add(a.sqr()).cmp(A) >= 0 && ((o = e), (a = r)),
            n.negative && ((n = n.neg()), (s = s.neg())),
            o.negative && ((o = o.neg()), (a = a.neg())),
            [
              { a: n, b: s },
              { a: o, b: a },
            ]
          );
        }),
        (b.prototype._endoSplit = function (t) {
          var e = this.endo.basis,
            r = e[0],
            n = e[1],
            i = n.b.mul(t).divRound(this.n),
            s = r.b.neg().mul(t).divRound(this.n),
            o = i.mul(r.a),
            a = s.mul(n.a),
            u = i.mul(r.b),
            l = s.mul(n.b);
          return { k1: t.sub(o).sub(a), k2: u.add(l).neg() };
        }),
        (b.prototype.pointFromX = function (t, e) {
          (t = new (i())(t, 16)).red || (t = t.toRed(this.red));
          var r = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),
            n = r.redSqrt();
          if (0 !== n.redSqr().redSub(r).cmp(this.zero)) throw Error('invalid point');
          var s = n.fromRed().isOdd();
          return ((e && !s) || (!e && s)) && (n = n.redNeg()), this.point(t, n);
        }),
        (b.prototype.validate = function (t) {
          if (t.inf) return !0;
          var e = t.x,
            r = t.y,
            n = this.a.redMul(e),
            i = e.redSqr().redMul(e).redIAdd(n).redIAdd(this.b);
          return 0 === r.redSqr().redISub(i).cmpn(0);
        }),
        (b.prototype._endoWnafMulAdd = function (t, e, r) {
          for (var n = this._endoWnafT1, i = this._endoWnafT2, s = 0; s < t.length; s++) {
            var o = this._endoSplit(e[s]),
              a = t[s],
              u = a._getBeta();
            o.k1.negative && (o.k1.ineg(), (a = a.neg(!0))),
              o.k2.negative && (o.k2.ineg(), (u = u.neg(!0))),
              (n[2 * s] = a),
              (n[2 * s + 1] = u),
              (i[2 * s] = o.k1),
              (i[2 * s + 1] = o.k2);
          }
          for (var l = this._wnafMulAdd(1, n, i, 2 * s, r), h = 0; h < 2 * s; h++)
            (n[h] = null), (i[h] = null);
          return l;
        }),
        v(w, m.BasePoint),
        (b.prototype.point = function (t, e, r) {
          return new w(this, t, e, r);
        }),
        (b.prototype.pointFromJSON = function (t, e) {
          return w.fromJSON(this, t, e);
        }),
        (w.prototype._getBeta = function () {
          if (this.curve.endo) {
            var t = this.precomputed;
            if (t && t.beta) return t.beta;
            var e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
            if (t) {
              var r = this.curve,
                n = function (t) {
                  return r.point(t.x.redMul(r.endo.beta), t.y);
                };
              (t.beta = e),
                (e.precomputed = {
                  beta: null,
                  naf: t.naf && { wnd: t.naf.wnd, points: t.naf.points.map(n) },
                  doubles: t.doubles && { step: t.doubles.step, points: t.doubles.points.map(n) },
                });
            }
            return e;
          }
        }),
        (w.prototype.toJSON = function () {
          return this.precomputed
            ? [
                this.x,
                this.y,
                this.precomputed && {
                  doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1),
                  },
                  naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1),
                  },
                },
              ]
            : [this.x, this.y];
        }),
        (w.fromJSON = function (t, e, r) {
          'string' == typeof e && (e = JSON.parse(e));
          var n = t.point(e[0], e[1], r);
          if (!e[2]) return n;
          function i(e) {
            return t.point(e[0], e[1], r);
          }
          var s = e[2];
          return (
            (n.precomputed = {
              beta: null,
              doubles: s.doubles && {
                step: s.doubles.step,
                points: [n].concat(s.doubles.points.map(i)),
              },
              naf: s.naf && { wnd: s.naf.wnd, points: [n].concat(s.naf.points.map(i)) },
            }),
            n
          );
        }),
        (w.prototype.inspect = function () {
          return this.isInfinity()
            ? '<EC Point Infinity>'
            : '<EC Point x: ' +
                this.x.fromRed().toString(16, 2) +
                ' y: ' +
                this.y.fromRed().toString(16, 2) +
                '>';
        }),
        (w.prototype.isInfinity = function () {
          return this.inf;
        }),
        (w.prototype.add = function (t) {
          if (this.inf) return t;
          if (t.inf) return this;
          if (this.eq(t)) return this.dbl();
          if (this.neg().eq(t) || 0 === this.x.cmp(t.x)) return this.curve.point(null, null);
          var e = this.y.redSub(t.y);
          0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()));
          var r = e.redSqr().redISub(this.x).redISub(t.x),
            n = e.redMul(this.x.redSub(r)).redISub(this.y);
          return this.curve.point(r, n);
        }),
        (w.prototype.dbl = function () {
          if (this.inf) return this;
          var t = this.y.redAdd(this.y);
          if (0 === t.cmpn(0)) return this.curve.point(null, null);
          var e = this.curve.a,
            r = this.x.redSqr(),
            n = t.redInvm(),
            i = r.redAdd(r).redIAdd(r).redIAdd(e).redMul(n),
            s = i.redSqr().redISub(this.x.redAdd(this.x)),
            o = i.redMul(this.x.redSub(s)).redISub(this.y);
          return this.curve.point(s, o);
        }),
        (w.prototype.getX = function () {
          return this.x.fromRed();
        }),
        (w.prototype.getY = function () {
          return this.y.fromRed();
        }),
        (w.prototype.mul = function (t) {
          return ((t = new (i())(t, 16)), this.isInfinity())
            ? this
            : this._hasDoubles(t)
              ? this.curve._fixedNafMul(this, t)
              : this.curve.endo
                ? this.curve._endoWnafMulAdd([this], [t])
                : this.curve._wnafMul(this, t);
        }),
        (w.prototype.mulAdd = function (t, e, r) {
          var n = [this, e],
            i = [t, r];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(n, i)
            : this.curve._wnafMulAdd(1, n, i, 2);
        }),
        (w.prototype.jmulAdd = function (t, e, r) {
          var n = [this, e],
            i = [t, r];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(n, i, !0)
            : this.curve._wnafMulAdd(1, n, i, 2, !0);
        }),
        (w.prototype.eq = function (t) {
          return (
            this === t ||
            (this.inf === t.inf && (this.inf || (0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))))
          );
        }),
        (w.prototype.neg = function (t) {
          if (this.inf) return this;
          var e = this.curve.point(this.x, this.y.redNeg());
          if (t && this.precomputed) {
            var r = this.precomputed,
              n = function (t) {
                return t.neg();
              };
            e.precomputed = {
              naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(n) },
              doubles: r.doubles && { step: r.doubles.step, points: r.doubles.points.map(n) },
            };
          }
          return e;
        }),
        (w.prototype.toJ = function () {
          return this.inf
            ? this.curve.jpoint(null, null, null)
            : this.curve.jpoint(this.x, this.y, this.curve.one);
        }),
        v(A, m.BasePoint),
        (b.prototype.jpoint = function (t, e, r) {
          return new A(this, t, e, r);
        }),
        (A.prototype.toP = function () {
          if (this.isInfinity()) return this.curve.point(null, null);
          var t = this.z.redInvm(),
            e = t.redSqr(),
            r = this.x.redMul(e),
            n = this.y.redMul(e).redMul(t);
          return this.curve.point(r, n);
        }),
        (A.prototype.neg = function () {
          return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
        }),
        (A.prototype.add = function (t) {
          if (this.isInfinity()) return t;
          if (t.isInfinity()) return this;
          var e = t.z.redSqr(),
            r = this.z.redSqr(),
            n = this.x.redMul(e),
            i = t.x.redMul(r),
            s = this.y.redMul(e.redMul(t.z)),
            o = t.y.redMul(r.redMul(this.z)),
            a = n.redSub(i),
            u = s.redSub(o);
          if (0 === a.cmpn(0))
            return 0 !== u.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
          var l = a.redSqr(),
            h = l.redMul(a),
            c = n.redMul(l),
            d = u.redSqr().redIAdd(h).redISub(c).redISub(c),
            f = u.redMul(c.redISub(d)).redISub(s.redMul(h)),
            p = this.z.redMul(t.z).redMul(a);
          return this.curve.jpoint(d, f, p);
        }),
        (A.prototype.mixedAdd = function (t) {
          if (this.isInfinity()) return t.toJ();
          if (t.isInfinity()) return this;
          var e = this.z.redSqr(),
            r = this.x,
            n = t.x.redMul(e),
            i = this.y,
            s = t.y.redMul(e).redMul(this.z),
            o = r.redSub(n),
            a = i.redSub(s);
          if (0 === o.cmpn(0))
            return 0 !== a.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
          var u = o.redSqr(),
            l = u.redMul(o),
            h = r.redMul(u),
            c = a.redSqr().redIAdd(l).redISub(h).redISub(h),
            d = a.redMul(h.redISub(c)).redISub(i.redMul(l)),
            f = this.z.redMul(o);
          return this.curve.jpoint(c, d, f);
        }),
        (A.prototype.dblp = function (t) {
          if (0 === t || this.isInfinity()) return this;
          if (!t) return this.dbl();
          if (this.curve.zeroA || this.curve.threeA) {
            var e,
              r = this;
            for (e = 0; e < t; e++) r = r.dbl();
            return r;
          }
          var n = this.curve.a,
            i = this.curve.tinv,
            s = this.x,
            o = this.y,
            a = this.z,
            u = a.redSqr().redSqr(),
            l = o.redAdd(o);
          for (e = 0; e < t; e++) {
            var h = s.redSqr(),
              c = l.redSqr(),
              d = c.redSqr(),
              f = h.redAdd(h).redIAdd(h).redIAdd(n.redMul(u)),
              p = s.redMul(c),
              m = f.redSqr().redISub(p.redAdd(p)),
              g = p.redISub(m),
              v = f.redMul(g);
            v = v.redIAdd(v).redISub(d);
            var y = l.redMul(a);
            e + 1 < t && (u = u.redMul(d)), (s = m), (a = y), (l = v);
          }
          return this.curve.jpoint(s, l.redMul(i), a);
        }),
        (A.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.zeroA
              ? this._zeroDbl()
              : this.curve.threeA
                ? this._threeDbl()
                : this._dbl();
        }),
        (A.prototype._zeroDbl = function () {
          if (this.zOne) {
            var t,
              e,
              r,
              n = this.x.redSqr(),
              i = this.y.redSqr(),
              s = i.redSqr(),
              o = this.x.redAdd(i).redSqr().redISub(n).redISub(s);
            o = o.redIAdd(o);
            var a = n.redAdd(n).redIAdd(n),
              u = a.redSqr().redISub(o).redISub(o),
              l = s.redIAdd(s);
            (l = (l = l.redIAdd(l)).redIAdd(l)),
              (t = u),
              (e = a.redMul(o.redISub(u)).redISub(l)),
              (r = this.y.redAdd(this.y));
          } else {
            var h = this.x.redSqr(),
              c = this.y.redSqr(),
              d = c.redSqr(),
              f = this.x.redAdd(c).redSqr().redISub(h).redISub(d);
            f = f.redIAdd(f);
            var p = h.redAdd(h).redIAdd(h),
              m = p.redSqr(),
              g = d.redIAdd(d);
            (g = (g = g.redIAdd(g)).redIAdd(g)),
              (t = m.redISub(f).redISub(f)),
              (e = p.redMul(f.redISub(t)).redISub(g)),
              (r = (r = this.y.redMul(this.z)).redIAdd(r));
          }
          return this.curve.jpoint(t, e, r);
        }),
        (A.prototype._threeDbl = function () {
          if (this.zOne) {
            var t,
              e,
              r,
              n = this.x.redSqr(),
              i = this.y.redSqr(),
              s = i.redSqr(),
              o = this.x.redAdd(i).redSqr().redISub(n).redISub(s);
            o = o.redIAdd(o);
            var a = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
              u = a.redSqr().redISub(o).redISub(o);
            t = u;
            var l = s.redIAdd(s);
            (l = (l = l.redIAdd(l)).redIAdd(l)),
              (e = a.redMul(o.redISub(u)).redISub(l)),
              (r = this.y.redAdd(this.y));
          } else {
            var h = this.z.redSqr(),
              c = this.y.redSqr(),
              d = this.x.redMul(c),
              f = this.x.redSub(h).redMul(this.x.redAdd(h));
            f = f.redAdd(f).redIAdd(f);
            var p = d.redIAdd(d),
              m = (p = p.redIAdd(p)).redAdd(p);
            (t = f.redSqr().redISub(m)), (r = this.y.redAdd(this.z).redSqr().redISub(c).redISub(h));
            var g = c.redSqr();
            (g = (g = (g = g.redIAdd(g)).redIAdd(g)).redIAdd(g)),
              (e = f.redMul(p.redISub(t)).redISub(g));
          }
          return this.curve.jpoint(t, e, r);
        }),
        (A.prototype._dbl = function () {
          var t = this.curve.a,
            e = this.x,
            r = this.y,
            n = this.z,
            i = n.redSqr().redSqr(),
            s = e.redSqr(),
            o = r.redSqr(),
            a = s.redAdd(s).redIAdd(s).redIAdd(t.redMul(i)),
            u = e.redAdd(e),
            l = (u = u.redIAdd(u)).redMul(o),
            h = a.redSqr().redISub(l.redAdd(l)),
            c = l.redISub(h),
            d = o.redSqr();
          d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
          var f = a.redMul(c).redISub(d),
            p = r.redAdd(r).redMul(n);
          return this.curve.jpoint(h, f, p);
        }),
        (A.prototype.trpl = function () {
          if (!this.curve.zeroA) return this.dbl().add(this);
          var t = this.x.redSqr(),
            e = this.y.redSqr(),
            r = this.z.redSqr(),
            n = e.redSqr(),
            i = t.redAdd(t).redIAdd(t),
            s = i.redSqr(),
            o = this.x.redAdd(e).redSqr().redISub(t).redISub(n),
            a = (o = (o = (o = o.redIAdd(o)).redAdd(o).redIAdd(o)).redISub(s)).redSqr(),
            u = n.redIAdd(n);
          u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
          var l = i.redIAdd(o).redSqr().redISub(s).redISub(a).redISub(u),
            h = e.redMul(l);
          h = (h = h.redIAdd(h)).redIAdd(h);
          var c = this.x.redMul(a).redISub(h);
          c = (c = c.redIAdd(c)).redIAdd(c);
          var d = this.y.redMul(l.redMul(u.redISub(l)).redISub(o.redMul(a)));
          d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
          var f = this.z.redAdd(o).redSqr().redISub(r).redISub(a);
          return this.curve.jpoint(c, d, f);
        }),
        (A.prototype.mul = function (t, e) {
          return (t = new (i())(t, e)), this.curve._wnafMul(this, t);
        }),
        (A.prototype.eq = function (t) {
          if ('affine' === t.type) return this.eq(t.toJ());
          if (this === t) return !0;
          var e = this.z.redSqr(),
            r = t.z.redSqr();
          if (0 !== this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0)) return !1;
          var n = e.redMul(this.z),
            i = r.redMul(t.z);
          return 0 === this.y.redMul(i).redISub(t.y.redMul(n)).cmpn(0);
        }),
        (A.prototype.eqXToP = function (t) {
          var e = this.z.redSqr(),
            r = t.toRed(this.curve.red).redMul(e);
          if (0 === this.x.cmp(r)) return !0;
          for (var n = t.clone(), i = this.curve.redN.redMul(e); ; ) {
            if ((n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0)) return !1;
            if ((r.redIAdd(i), 0 === this.x.cmp(r))) return !0;
          }
        }),
        (A.prototype.inspect = function () {
          return this.isInfinity()
            ? '<EC JPoint Infinity>'
            : '<EC JPoint x: ' +
                this.x.toString(16, 2) +
                ' y: ' +
                this.y.toString(16, 2) +
                ' z: ' +
                this.z.toString(16, 2) +
                '>';
        }),
        (A.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        });
      var _ = a(function (t, e) {
          (e.base = m), (e.short = b), (e.mont = null), (e.edwards = null);
        }),
        E = a(function (t, e) {
          var r,
            n = c.assert;
          function i(t) {
            'short' === t.type
              ? (this.curve = new _.short(t))
              : 'edwards' === t.type
                ? (this.curve = new _.edwards(t))
                : (this.curve = new _.mont(t)),
              (this.g = this.curve.g),
              (this.n = this.curve.n),
              (this.hash = t.hash),
              n(this.g.validate(), 'Invalid curve'),
              n(this.g.mul(this.n).isInfinity(), 'Invalid curve, G*N != O');
          }
          function s(t, r) {
            Object.defineProperty(e, t, {
              configurable: !0,
              enumerable: !0,
              get: function () {
                var n = new i(r);
                return (
                  Object.defineProperty(e, t, { configurable: !0, enumerable: !0, value: n }), n
                );
              },
            });
          }
          (e.PresetCurve = i),
            s('p192', {
              type: 'short',
              prime: 'p192',
              p: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff',
              a: 'ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc',
              b: '64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1',
              n: 'ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831',
              hash: o().sha256,
              gRed: !1,
              g: [
                '188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012',
                '07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811',
              ],
            }),
            s('p224', {
              type: 'short',
              prime: 'p224',
              p: 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001',
              a: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe',
              b: 'b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4',
              n: 'ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d',
              hash: o().sha256,
              gRed: !1,
              g: [
                'b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21',
                'bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34',
              ],
            }),
            s('p256', {
              type: 'short',
              prime: null,
              p: 'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff',
              a: 'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc',
              b: '5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b',
              n: 'ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551',
              hash: o().sha256,
              gRed: !1,
              g: [
                '6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296',
                '4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5',
              ],
            }),
            s('p384', {
              type: 'short',
              prime: null,
              p: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff',
              a: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc',
              b: 'b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef',
              n: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973',
              hash: o().sha384,
              gRed: !1,
              g: [
                'aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7',
                '3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f',
              ],
            }),
            s('p521', {
              type: 'short',
              prime: null,
              p: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff',
              a: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc',
              b: '00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00',
              n: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409',
              hash: o().sha512,
              gRed: !1,
              g: [
                '000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66',
                '00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650',
              ],
            }),
            s('curve25519', {
              type: 'mont',
              prime: 'p25519',
              p: '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
              a: '76d06',
              b: '1',
              n: '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
              hash: o().sha256,
              gRed: !1,
              g: ['9'],
            }),
            s('ed25519', {
              type: 'edwards',
              prime: 'p25519',
              p: '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
              a: '-1',
              c: '1',
              d: '52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3',
              n: '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
              hash: o().sha256,
              gRed: !1,
              g: [
                '216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a',
                '6666666666666666666666666666666666666666666666666666666666666658',
              ],
            });
          try {
            r = null.crash();
          } catch (t) {
            r = void 0;
          }
          s('secp256k1', {
            type: 'short',
            prime: 'k256',
            p: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f',
            a: '0',
            b: '7',
            n: 'ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141',
            h: '1',
            hash: o().sha256,
            beta: '7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee',
            lambda: '5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72',
            basis: [
              { a: '3086d221a7d46bcde86c90e49284eb15', b: '-e4437ed6010e88286f547fa90abfe4c3' },
              { a: '114ca50f7a8e2f3f657c1108d9d44cfd8', b: '3086d221a7d46bcde86c90e49284eb15' },
            ],
            gRed: !1,
            g: [
              '79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798',
              '483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8',
              r,
            ],
          });
        });
      function k(t) {
        if (!(this instanceof k)) return new k(t);
        (this.hash = t.hash),
          (this.predResist = !!t.predResist),
          (this.outLen = this.hash.outSize),
          (this.minEntropy = t.minEntropy || this.hash.hmacStrength),
          (this._reseed = null),
          (this.reseedInterval = null),
          (this.K = null),
          (this.V = null);
        var e = h.toArray(t.entropy, t.entropyEnc || 'hex'),
          r = h.toArray(t.nonce, t.nonceEnc || 'hex'),
          n = h.toArray(t.pers, t.persEnc || 'hex');
        u(
          e.length >= this.minEntropy / 8,
          'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits'
        ),
          this._init(e, r, n);
      }
      (k.prototype._init = function (t, e, r) {
        var n = t.concat(e).concat(r);
        (this.K = Array(this.outLen / 8)), (this.V = Array(this.outLen / 8));
        for (var i = 0; i < this.V.length; i++) (this.K[i] = 0), (this.V[i] = 1);
        this._update(n), (this._reseed = 1), (this.reseedInterval = 281474976710656);
      }),
        (k.prototype._hmac = function () {
          return new (o().hmac)(this.hash, this.K);
        }),
        (k.prototype._update = function (t) {
          var e = this._hmac().update(this.V).update([0]);
          t && (e = e.update(t)),
            (this.K = e.digest()),
            (this.V = this._hmac().update(this.V).digest()),
            t &&
              ((this.K = this._hmac().update(this.V).update([1]).update(t).digest()),
              (this.V = this._hmac().update(this.V).digest()));
        }),
        (k.prototype.reseed = function (t, e, r, n) {
          'string' != typeof e && ((n = r), (r = e), (e = null)),
            (t = h.toArray(t, e)),
            (r = h.toArray(r, n)),
            u(
              t.length >= this.minEntropy / 8,
              'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits'
            ),
            this._update(t.concat(r || [])),
            (this._reseed = 1);
        }),
        (k.prototype.generate = function (t, e, r, n) {
          if (this._reseed > this.reseedInterval) throw Error('Reseed is required');
          'string' != typeof e && ((n = r), (r = e), (e = null)),
            r && ((r = h.toArray(r, n || 'hex')), this._update(r));
          for (var i = []; i.length < t; )
            (this.V = this._hmac().update(this.V).digest()), (i = i.concat(this.V));
          var s = i.slice(0, t);
          return this._update(r), this._reseed++, h.encode(s, e);
        });
      var x = c.assert;
      function N(t, e) {
        (this.ec = t),
          (this.priv = null),
          (this.pub = null),
          e.priv && this._importPrivate(e.priv, e.privEnc),
          e.pub && this._importPublic(e.pub, e.pubEnc);
      }
      (N.fromPublic = function (t, e, r) {
        return e instanceof N ? e : new N(t, { pub: e, pubEnc: r });
      }),
        (N.fromPrivate = function (t, e, r) {
          return e instanceof N ? e : new N(t, { priv: e, privEnc: r });
        }),
        (N.prototype.validate = function () {
          var t = this.getPublic();
          return t.isInfinity()
            ? { result: !1, reason: 'Invalid public key' }
            : t.validate()
              ? t.mul(this.ec.curve.n).isInfinity()
                ? { result: !0, reason: null }
                : { result: !1, reason: 'Public key * N != O' }
              : { result: !1, reason: 'Public key is not a point' };
        }),
        (N.prototype.getPublic = function (t, e) {
          return ('string' == typeof t && ((e = t), (t = null)),
          this.pub || (this.pub = this.ec.g.mul(this.priv)),
          e)
            ? this.pub.encode(e, t)
            : this.pub;
        }),
        (N.prototype.getPrivate = function (t) {
          return 'hex' === t ? this.priv.toString(16, 2) : this.priv;
        }),
        (N.prototype._importPrivate = function (t, e) {
          (this.priv = new (i())(t, e || 16)), (this.priv = this.priv.umod(this.ec.curve.n));
        }),
        (N.prototype._importPublic = function (t, e) {
          if (t.x || t.y) {
            'mont' === this.ec.curve.type
              ? x(t.x, 'Need x coordinate')
              : ('short' === this.ec.curve.type || 'edwards' === this.ec.curve.type) &&
                x(t.x && t.y, 'Need both x and y coordinate'),
              (this.pub = this.ec.curve.point(t.x, t.y));
            return;
          }
          this.pub = this.ec.curve.decodePoint(t, e);
        }),
        (N.prototype.derive = function (t) {
          return (
            t.validate() || x(t.validate(), 'public point not validated'), t.mul(this.priv).getX()
          );
        }),
        (N.prototype.sign = function (t, e, r) {
          return this.ec.sign(t, this, e, r);
        }),
        (N.prototype.verify = function (t, e) {
          return this.ec.verify(t, e, this);
        }),
        (N.prototype.inspect = function () {
          return (
            '<Key priv: ' +
            (this.priv && this.priv.toString(16, 2)) +
            ' pub: ' +
            (this.pub && this.pub.inspect()) +
            ' >'
          );
        });
      var M = c.assert;
      function I(t, e) {
        if (t instanceof I) return t;
        this._importDER(t, e) ||
          (M(t.r && t.s, 'Signature without r or s'),
          (this.r = new (i())(t.r, 16)),
          (this.s = new (i())(t.s, 16)),
          void 0 === t.recoveryParam
            ? (this.recoveryParam = null)
            : (this.recoveryParam = t.recoveryParam));
      }
      function P() {
        this.place = 0;
      }
      function S(t, e) {
        var r = t[e.place++];
        if (!(128 & r)) return r;
        var n = 15 & r;
        if (0 === n || n > 4) return !1;
        for (var i = 0, s = 0, o = e.place; s < n; s++, o++) (i <<= 8), (i |= t[o]), (i >>>= 0);
        return !(i <= 127) && ((e.place = o), i);
      }
      function C(t) {
        for (var e = 0, r = t.length - 1; !t[e] && !(128 & t[e + 1]) && e < r; ) e++;
        return 0 === e ? t : t.slice(e);
      }
      function T(t, e) {
        if (e < 128) {
          t.push(e);
          return;
        }
        var r = 1 + ((Math.log(e) / Math.LN2) >>> 3);
        for (t.push(128 | r); --r; ) t.push((e >>> (r << 3)) & 255);
        t.push(e);
      }
      (I.prototype._importDER = function (t, e) {
        t = c.toArray(t, e);
        var r = new P();
        if (48 !== t[r.place++]) return !1;
        var n = S(t, r);
        if (!1 === n || n + r.place !== t.length || 2 !== t[r.place++]) return !1;
        var s = S(t, r);
        if (!1 === s) return !1;
        var o = t.slice(r.place, s + r.place);
        if (((r.place += s), 2 !== t[r.place++])) return !1;
        var a = S(t, r);
        if (!1 === a || t.length !== a + r.place) return !1;
        var u = t.slice(r.place, a + r.place);
        if (0 === o[0]) {
          if (!(128 & o[1])) return !1;
          o = o.slice(1);
        }
        if (0 === u[0]) {
          if (!(128 & u[1])) return !1;
          u = u.slice(1);
        }
        return (this.r = new (i())(o)), (this.s = new (i())(u)), (this.recoveryParam = null), !0;
      }),
        (I.prototype.toDER = function (t) {
          var e = this.r.toArray(),
            r = this.s.toArray();
          for (
            128 & e[0] && (e = [0].concat(e)),
              128 & r[0] && (r = [0].concat(r)),
              e = C(e),
              r = C(r);
            !r[0] && !(128 & r[1]);

          )
            r = r.slice(1);
          var n = [2];
          T(n, e.length), (n = n.concat(e)).push(2), T(n, r.length);
          var i = n.concat(r),
            s = [48];
          return T(s, i.length), (s = s.concat(i)), c.encode(s, t);
        });
      var R = function () {
          throw Error('unsupported');
        },
        O = c.assert;
      function B(t) {
        if (!(this instanceof B)) return new B(t);
        'string' == typeof t &&
          (O(Object.prototype.hasOwnProperty.call(E, t), 'Unknown curve ' + t), (t = E[t])),
          t instanceof E.PresetCurve && (t = { curve: t }),
          (this.curve = t.curve.curve),
          (this.n = this.curve.n),
          (this.nh = this.n.ushrn(1)),
          (this.g = this.curve.g),
          (this.g = t.curve.g),
          this.g.precompute(t.curve.n.bitLength() + 1),
          (this.hash = t.hash || t.curve.hash);
      }
      (B.prototype.keyPair = function (t) {
        return new N(this, t);
      }),
        (B.prototype.keyFromPrivate = function (t, e) {
          return N.fromPrivate(this, t, e);
        }),
        (B.prototype.keyFromPublic = function (t, e) {
          return N.fromPublic(this, t, e);
        }),
        (B.prototype.genKeyPair = function (t) {
          t || (t = {});
          for (
            var e = new k({
                hash: this.hash,
                pers: t.pers,
                persEnc: t.persEnc || 'utf8',
                entropy: t.entropy || R(this.hash.hmacStrength),
                entropyEnc: (t.entropy && t.entropyEnc) || 'utf8',
                nonce: this.n.toArray(),
              }),
              r = this.n.byteLength(),
              n = this.n.sub(new (i())(2));
            ;

          ) {
            var s = new (i())(e.generate(r));
            if (!(s.cmp(n) > 0)) return s.iaddn(1), this.keyFromPrivate(s);
          }
        }),
        (B.prototype._truncateToN = function (t, e) {
          var r = 8 * t.byteLength() - this.n.bitLength();
          return (r > 0 && (t = t.ushrn(r)), !e && t.cmp(this.n) >= 0) ? t.sub(this.n) : t;
        }),
        (B.prototype.sign = function (t, e, r, n) {
          'object' == typeof r && ((n = r), (r = null)),
            n || (n = {}),
            (e = this.keyFromPrivate(e, r)),
            (t = this._truncateToN(new (i())(t, 16)));
          for (
            var s = this.n.byteLength(),
              o = e.getPrivate().toArray('be', s),
              a = t.toArray('be', s),
              u = new k({
                hash: this.hash,
                entropy: o,
                nonce: a,
                pers: n.pers,
                persEnc: n.persEnc || 'utf8',
              }),
              l = this.n.sub(new (i())(1)),
              h = 0;
            ;
            h++
          ) {
            var c = n.k ? n.k(h) : new (i())(u.generate(this.n.byteLength()));
            if (!(0 >= (c = this._truncateToN(c, !0)).cmpn(1) || c.cmp(l) >= 0)) {
              var d = this.g.mul(c);
              if (!d.isInfinity()) {
                var f = d.getX(),
                  p = f.umod(this.n);
                if (0 !== p.cmpn(0)) {
                  var m = c.invm(this.n).mul(p.mul(e.getPrivate()).iadd(t));
                  if (0 !== (m = m.umod(this.n)).cmpn(0)) {
                    var g = (d.getY().isOdd() ? 1 : 0) | (0 !== f.cmp(p) ? 2 : 0);
                    return (
                      n.canonical && m.cmp(this.nh) > 0 && ((m = this.n.sub(m)), (g ^= 1)),
                      new I({ r: p, s: m, recoveryParam: g })
                    );
                  }
                }
              }
            }
          }
        }),
        (B.prototype.verify = function (t, e, r, n) {
          (t = this._truncateToN(new (i())(t, 16))), (r = this.keyFromPublic(r, n));
          var s,
            o = (e = new I(e, 'hex')).r,
            a = e.s;
          if (0 > o.cmpn(1) || o.cmp(this.n) >= 0 || 0 > a.cmpn(1) || a.cmp(this.n) >= 0) return !1;
          var u = a.invm(this.n),
            l = u.mul(t).umod(this.n),
            h = u.mul(o).umod(this.n);
          return this.curve._maxwellTrick
            ? !(s = this.g.jmulAdd(l, r.getPublic(), h)).isInfinity() && s.eqXToP(o)
            : !(s = this.g.mulAdd(l, r.getPublic(), h)).isInfinity() &&
                0 === s.getX().umod(this.n).cmp(o);
        }),
        (B.prototype.recoverPubKey = function (t, e, r, n) {
          O((3 & r) === r, 'The recovery param is more than two bits'), (e = new I(e, n));
          var s = this.n,
            o = new (i())(t),
            a = e.r,
            u = e.s,
            l = 1 & r,
            h = r >> 1;
          if (a.cmp(this.curve.p.umod(this.curve.n)) >= 0 && h)
            throw Error('Unable to find sencond key candinate');
          a = h ? this.curve.pointFromX(a.add(this.curve.n), l) : this.curve.pointFromX(a, l);
          var c = e.r.invm(s),
            d = s.sub(o).mul(c).umod(s),
            f = u.mul(c).umod(s);
          return this.g.mulAdd(d, a, f);
        }),
        (B.prototype.getKeyRecoveryParam = function (t, e, r, n) {
          if (null !== (e = new I(e, n)).recoveryParam) return e.recoveryParam;
          for (var i, s = 0; s < 4; s++) {
            try {
              i = this.recoverPubKey(t, e, s);
            } catch (t) {
              continue;
            }
            if (i.eq(r)) return s;
          }
          throw Error('Unable to find valid recovery factor');
        });
      var D = a(function (t, e) {
          (e.version = '6.5.4'),
            (e.utils = c),
            (e.rand = function () {
              throw Error('unsupported');
            }),
            (e.curve = _),
            (e.curves = E),
            (e.ec = B),
            (e.eddsa = null);
        }).ec,
        L = r(7730),
        U = r(50357);
      let F = new (r(67214).Yd)('signing-key/5.7.0'),
        G = null;
      function z() {
        return G || (G = new D('secp256k1')), G;
      }
      class Z {
        constructor(t) {
          (0, U.zG)(this, 'curve', 'secp256k1'),
            (0, U.zG)(this, 'privateKey', (0, L.Dv)(t)),
            32 !== (0, L.E1)(this.privateKey) &&
              F.throwArgumentError('invalid private key', 'privateKey', '[[ REDACTED ]]');
          let e = z().keyFromPrivate((0, L.lE)(this.privateKey));
          (0, U.zG)(this, 'publicKey', '0x' + e.getPublic(!1, 'hex')),
            (0, U.zG)(this, 'compressedPublicKey', '0x' + e.getPublic(!0, 'hex')),
            (0, U.zG)(this, '_isSigningKey', !0);
        }
        _addPoint(t) {
          let e = z().keyFromPublic((0, L.lE)(this.publicKey)),
            r = z().keyFromPublic((0, L.lE)(t));
          return '0x' + e.pub.add(r.pub).encodeCompressed('hex');
        }
        signDigest(t) {
          let e = z().keyFromPrivate((0, L.lE)(this.privateKey)),
            r = (0, L.lE)(t);
          32 !== r.length && F.throwArgumentError('bad digest length', 'digest', t);
          let n = e.sign(r, { canonical: !0 });
          return (0, L.N)({
            recoveryParam: n.recoveryParam,
            r: (0, L.$m)('0x' + n.r.toString(16), 32),
            s: (0, L.$m)('0x' + n.s.toString(16), 32),
          });
        }
        computeSharedSecret(t) {
          let e = z().keyFromPrivate((0, L.lE)(this.privateKey)),
            r = z().keyFromPublic((0, L.lE)(q(t)));
          return (0, L.$m)('0x' + e.derive(r.getPublic()).toString(16), 32);
        }
        static isSigningKey(t) {
          return !!(t && t._isSigningKey);
        }
      }
      function Y(t, e) {
        let r = (0, L.N)(e),
          n = { r: (0, L.lE)(r.r), s: (0, L.lE)(r.s) };
        return (
          '0x' +
          z()
            .recoverPubKey((0, L.lE)(t), n, r.recoveryParam)
            .encode('hex', !1)
        );
      }
      function q(t, e) {
        let r = (0, L.lE)(t);
        if (32 === r.length) {
          let t = new Z(r);
          return e ? '0x' + z().keyFromPrivate(r).getPublic(!0, 'hex') : t.publicKey;
        }
        return 33 === r.length
          ? e
            ? (0, L.Dv)(r)
            : '0x' + z().keyFromPublic(r).getPublic(!1, 'hex')
          : 65 === r.length
            ? e
              ? '0x' + z().keyFromPublic(r).getPublic(!0, 'hex')
              : (0, L.Dv)(r)
            : F.throwArgumentError('invalid public or private key', 'key', '[REDACTED]');
      }
    },
    35321: function (t, e, r) {
      'use strict';
      r.d(e, {
        Uj: function () {
          return s;
        },
        Y0: function () {
          return d;
        },
        XL: function () {
          return p;
        },
        ZN: function () {
          return f;
        },
      });
      var n,
        i,
        s,
        o,
        a = r(7730);
      let u = new (r(67214).Yd)('strings/5.7.0');
      function l(t, e, r, n, i) {
        if (t === o.BAD_PREFIX || t === o.UNEXPECTED_CONTINUE) {
          let t = 0;
          for (let n = e + 1; n < r.length && r[n] >> 6 == 2; n++) t++;
          return t;
        }
        return t === o.OVERRUN ? r.length - e - 1 : 0;
      }
      ((n = s || (s = {})).current = ''),
        (n.NFC = 'NFC'),
        (n.NFD = 'NFD'),
        (n.NFKC = 'NFKC'),
        (n.NFKD = 'NFKD'),
        ((i = o || (o = {})).UNEXPECTED_CONTINUE = 'unexpected continuation byte'),
        (i.BAD_PREFIX = 'bad codepoint prefix'),
        (i.OVERRUN = 'string overrun'),
        (i.MISSING_CONTINUE = 'missing continuation byte'),
        (i.OUT_OF_RANGE = 'out of UTF-8 range'),
        (i.UTF16_SURROGATE = 'UTF-16 surrogate'),
        (i.OVERLONG = 'overlong representation');
      let h = Object.freeze({
        error: function (t, e, r, n, i) {
          return u.throwArgumentError(`invalid codepoint at offset ${e}; ${t}`, 'bytes', r);
        },
        ignore: l,
        replace: function (t, e, r, n, i) {
          return t === o.OVERLONG ? (n.push(i), 0) : (n.push(65533), l(t, e, r, n, i));
        },
      });
      function c(t, e) {
        null == e && (e = h.error), (t = (0, a.lE)(t));
        let r = [],
          n = 0;
        for (; n < t.length; ) {
          let i = t[n++];
          if (i >> 7 == 0) {
            r.push(i);
            continue;
          }
          let s = null,
            a = null;
          if ((224 & i) == 192) (s = 1), (a = 127);
          else if ((240 & i) == 224) (s = 2), (a = 2047);
          else if ((248 & i) == 240) (s = 3), (a = 65535);
          else {
            (192 & i) == 128
              ? (n += e(o.UNEXPECTED_CONTINUE, n - 1, t, r))
              : (n += e(o.BAD_PREFIX, n - 1, t, r));
            continue;
          }
          if (n - 1 + s >= t.length) {
            n += e(o.OVERRUN, n - 1, t, r);
            continue;
          }
          let u = i & ((1 << (8 - s - 1)) - 1);
          for (let i = 0; i < s; i++) {
            let i = t[n];
            if ((192 & i) != 128) {
              (n += e(o.MISSING_CONTINUE, n, t, r)), (u = null);
              break;
            }
            (u = (u << 6) | (63 & i)), n++;
          }
          if (null !== u) {
            if (u > 1114111) {
              n += e(o.OUT_OF_RANGE, n - 1 - s, t, r, u);
              continue;
            }
            if (u >= 55296 && u <= 57343) {
              n += e(o.UTF16_SURROGATE, n - 1 - s, t, r, u);
              continue;
            }
            if (u <= a) {
              n += e(o.OVERLONG, n - 1 - s, t, r, u);
              continue;
            }
            r.push(u);
          }
        }
        return r;
      }
      function d(t, e = s.current) {
        e != s.current && (u.checkNormalize(), (t = t.normalize(e)));
        let r = [];
        for (let e = 0; e < t.length; e++) {
          let n = t.charCodeAt(e);
          if (n < 128) r.push(n);
          else if (n < 2048) r.push((n >> 6) | 192), r.push((63 & n) | 128);
          else if ((64512 & n) == 55296) {
            e++;
            let i = t.charCodeAt(e);
            if (e >= t.length || (64512 & i) != 56320) throw Error('invalid utf-8 string');
            let s = 65536 + ((1023 & n) << 10) + (1023 & i);
            r.push((s >> 18) | 240),
              r.push(((s >> 12) & 63) | 128),
              r.push(((s >> 6) & 63) | 128),
              r.push((63 & s) | 128);
          } else r.push((n >> 12) | 224), r.push(((n >> 6) & 63) | 128), r.push((63 & n) | 128);
        }
        return (0, a.lE)(r);
      }
      function f(t, e) {
        return c(t, e)
          .map((t) =>
            t <= 65535
              ? String.fromCharCode(t)
              : String.fromCharCode((((t -= 65536) >> 10) & 1023) + 55296, (1023 & t) + 56320)
          )
          .join('');
      }
      function p(t, e = s.current) {
        return c(d(t, e));
      }
    },
    31857: function (t, e, r) {
      'use strict';
      r.d(e, {
        z7: function () {
          return E;
        },
        db: function () {
          return b;
        },
        Qc: function () {
          return P;
        },
        qC: function () {
          return M;
        },
      });
      var n,
        i,
        s = r(56805),
        o = r(7523),
        a = r(7730);
      let u = o.O$.from(0);
      var l = r(14752),
        h = r(50357),
        c = r(2585),
        d = r(65653),
        f = r(67214);
      let p = new f.Yd('transactions/5.7.0');
      function m(t) {
        return '0x' === t ? null : (0, s.Kn)(t);
      }
      function g(t) {
        return '0x' === t ? u : o.O$.from(t);
      }
      ((n = i || (i = {}))[(n.legacy = 0)] = 'legacy'),
        (n[(n.eip2930 = 1)] = 'eip2930'),
        (n[(n.eip1559 = 2)] = 'eip1559');
      let v = [
          { name: 'nonce', maxLength: 32, numeric: !0 },
          { name: 'gasPrice', maxLength: 32, numeric: !0 },
          { name: 'gasLimit', maxLength: 32, numeric: !0 },
          { name: 'to', length: 20 },
          { name: 'value', maxLength: 32, numeric: !0 },
          { name: 'data' },
        ],
        y = {
          chainId: !0,
          data: !0,
          gasLimit: !0,
          gasPrice: !0,
          nonce: !0,
          to: !0,
          type: !0,
          value: !0,
        };
      function b(t) {
        let e = (0, d.VW)(t);
        return (0, s.Kn)((0, a.p3)((0, l.w)((0, a.p3)(e, 1)), 12));
      }
      function w(t, e) {
        return b((0, d.LO)((0, a.lE)(t), e));
      }
      function A(t, e) {
        let r = (0, a.G1)(o.O$.from(t).toHexString());
        return (
          r.length > 32 && p.throwArgumentError('invalid length for ' + e, 'transaction:' + e, t), r
        );
      }
      function _(t, e) {
        return {
          address: (0, s.Kn)(t),
          storageKeys: (e || []).map(
            (e, r) => (
              32 !== (0, a.E1)(e) &&
                p.throwArgumentError('invalid access list storageKey', `accessList[${t}:${r}]`, e),
              e.toLowerCase()
            )
          ),
        };
      }
      function E(t) {
        if (Array.isArray(t))
          return t.map((t, e) =>
            Array.isArray(t)
              ? (t.length > 2 &&
                  p.throwArgumentError(
                    'access list expected to be [ address, storageKeys[] ]',
                    `value[${e}]`,
                    t
                  ),
                _(t[0], t[1]))
              : _(t.address, t.storageKeys)
          );
        let e = Object.keys(t).map((e) => {
          let r = t[e].reduce((t, e) => ((t[e] = !0), t), {});
          return _(e, Object.keys(r).sort());
        });
        return e.sort((t, e) => t.address.localeCompare(e.address)), e;
      }
      function k(t) {
        return E(t).map((t) => [t.address, t.storageKeys]);
      }
      function x(t, e) {
        if (null != t.gasPrice) {
          let e = o.O$.from(t.gasPrice),
            r = o.O$.from(t.maxFeePerGas || 0);
          e.eq(r) ||
            p.throwArgumentError('mismatch EIP-1559 gasPrice != maxFeePerGas', 'tx', {
              gasPrice: e,
              maxFeePerGas: r,
            });
        }
        let r = [
          A(t.chainId || 0, 'chainId'),
          A(t.nonce || 0, 'nonce'),
          A(t.maxPriorityFeePerGas || 0, 'maxPriorityFeePerGas'),
          A(t.maxFeePerGas || 0, 'maxFeePerGas'),
          A(t.gasLimit || 0, 'gasLimit'),
          null != t.to ? (0, s.Kn)(t.to) : '0x',
          A(t.value || 0, 'value'),
          t.data || '0x',
          k(t.accessList || []),
        ];
        if (e) {
          let t = (0, a.N)(e);
          r.push(A(t.recoveryParam, 'recoveryParam')),
            r.push((0, a.G1)(t.r)),
            r.push((0, a.G1)(t.s));
        }
        return (0, a.xs)(['0x02', c.c(r)]);
      }
      function N(t, e) {
        let r = [
          A(t.chainId || 0, 'chainId'),
          A(t.nonce || 0, 'nonce'),
          A(t.gasPrice || 0, 'gasPrice'),
          A(t.gasLimit || 0, 'gasLimit'),
          null != t.to ? (0, s.Kn)(t.to) : '0x',
          A(t.value || 0, 'value'),
          t.data || '0x',
          k(t.accessList || []),
        ];
        if (e) {
          let t = (0, a.N)(e);
          r.push(A(t.recoveryParam, 'recoveryParam')),
            r.push((0, a.G1)(t.r)),
            r.push((0, a.G1)(t.s));
        }
        return (0, a.xs)(['0x01', c.c(r)]);
      }
      function M(t, e) {
        if (null == t.type || 0 === t.type)
          return (
            null != t.accessList &&
              p.throwArgumentError(
                'untyped transactions do not support accessList; include type: 1',
                'transaction',
                t
              ),
            (function (t, e) {
              (0, h.uj)(t, y);
              let r = [];
              v.forEach(function (e) {
                let n = t[e.name] || [],
                  i = {};
                e.numeric && (i.hexPad = 'left'),
                  (n = (0, a.lE)((0, a.Dv)(n, i))),
                  e.length &&
                    n.length !== e.length &&
                    n.length > 0 &&
                    p.throwArgumentError(
                      'invalid length for ' + e.name,
                      'transaction:' + e.name,
                      n
                    ),
                  e.maxLength &&
                    (n = (0, a.G1)(n)).length > e.maxLength &&
                    p.throwArgumentError(
                      'invalid length for ' + e.name,
                      'transaction:' + e.name,
                      n
                    ),
                  r.push((0, a.Dv)(n));
              });
              let n = 0;
              if (
                (null != t.chainId
                  ? 'number' != typeof (n = t.chainId) &&
                    p.throwArgumentError('invalid transaction.chainId', 'transaction', t)
                  : e && !(0, a.Zq)(e) && e.v > 28 && (n = Math.floor((e.v - 35) / 2)),
                0 !== n && (r.push((0, a.Dv)(n)), r.push('0x'), r.push('0x')),
                !e)
              )
                return c.c(r);
              let i = (0, a.N)(e),
                s = 27 + i.recoveryParam;
              return (
                0 !== n
                  ? (r.pop(),
                    r.pop(),
                    r.pop(),
                    (s += 2 * n + 8),
                    i.v > 28 &&
                      i.v !== s &&
                      p.throwArgumentError(
                        'transaction.chainId/signature.v mismatch',
                        'signature',
                        e
                      ))
                  : i.v !== s &&
                    p.throwArgumentError(
                      'transaction.chainId/signature.v mismatch',
                      'signature',
                      e
                    ),
                r.push((0, a.Dv)(s)),
                r.push((0, a.G1)((0, a.lE)(i.r))),
                r.push((0, a.G1)((0, a.lE)(i.s))),
                c.c(r)
              );
            })(t, e)
          );
        switch (t.type) {
          case 1:
            return N(t, e);
          case 2:
            return x(t, e);
        }
        return p.throwError(
          `unsupported transaction type: ${t.type}`,
          f.Yd.errors.UNSUPPORTED_OPERATION,
          { operation: 'serializeTransaction', transactionType: t.type }
        );
      }
      function I(t, e, r) {
        try {
          let r = g(e[0]).toNumber();
          if (0 !== r && 1 !== r) throw Error('bad recid');
          t.v = r;
        } catch (t) {
          p.throwArgumentError('invalid v for transaction type: 1', 'v', e[0]);
        }
        (t.r = (0, a.$m)(e[1], 32)), (t.s = (0, a.$m)(e[2], 32));
        try {
          let e = (0, l.w)(r(t));
          t.from = w(e, { r: t.r, s: t.s, recoveryParam: t.v });
        } catch (t) {}
      }
      function P(t) {
        let e = (0, a.lE)(t);
        if (e[0] > 127)
          return (function (t) {
            let e = c.J(t);
            9 !== e.length &&
              6 !== e.length &&
              p.throwArgumentError('invalid raw transaction', 'rawTransaction', t);
            let r = {
              nonce: g(e[0]).toNumber(),
              gasPrice: g(e[1]),
              gasLimit: g(e[2]),
              to: m(e[3]),
              value: g(e[4]),
              data: e[5],
              chainId: 0,
            };
            if (6 === e.length) return r;
            try {
              r.v = o.O$.from(e[6]).toNumber();
            } catch (t) {
              return r;
            }
            if (
              ((r.r = (0, a.$m)(e[7], 32)),
              (r.s = (0, a.$m)(e[8], 32)),
              o.O$.from(r.r).isZero() && o.O$.from(r.s).isZero())
            )
              (r.chainId = r.v), (r.v = 0);
            else {
              (r.chainId = Math.floor((r.v - 35) / 2)), r.chainId < 0 && (r.chainId = 0);
              let n = r.v - 27,
                i = e.slice(0, 6);
              0 !== r.chainId &&
                (i.push((0, a.Dv)(r.chainId)),
                i.push('0x'),
                i.push('0x'),
                (n -= 2 * r.chainId + 8));
              let s = (0, l.w)(c.c(i));
              try {
                r.from = w(s, { r: (0, a.Dv)(r.r), s: (0, a.Dv)(r.s), recoveryParam: n });
              } catch (t) {}
              r.hash = (0, l.w)(t);
            }
            return (r.type = null), r;
          })(e);
        switch (e[0]) {
          case 1:
            return (function (t) {
              let e = c.J(t.slice(1));
              8 !== e.length &&
                11 !== e.length &&
                p.throwArgumentError(
                  'invalid component count for transaction type: 1',
                  'payload',
                  (0, a.Dv)(t)
                );
              let r = {
                type: 1,
                chainId: g(e[0]).toNumber(),
                nonce: g(e[1]).toNumber(),
                gasPrice: g(e[2]),
                gasLimit: g(e[3]),
                to: m(e[4]),
                value: g(e[5]),
                data: e[6],
                accessList: E(e[7]),
              };
              return 8 === e.length || ((r.hash = (0, l.w)(t)), I(r, e.slice(8), N)), r;
            })(e);
          case 2:
            return (function (t) {
              let e = c.J(t.slice(1));
              9 !== e.length &&
                12 !== e.length &&
                p.throwArgumentError(
                  'invalid component count for transaction type: 2',
                  'payload',
                  (0, a.Dv)(t)
                );
              let r = g(e[2]),
                n = g(e[3]),
                i = {
                  type: 2,
                  chainId: g(e[0]).toNumber(),
                  nonce: g(e[1]).toNumber(),
                  maxPriorityFeePerGas: r,
                  maxFeePerGas: n,
                  gasPrice: null,
                  gasLimit: g(e[4]),
                  to: m(e[5]),
                  value: g(e[6]),
                  data: e[7],
                  accessList: E(e[8]),
                };
              return 9 === e.length || ((i.hash = (0, l.w)(t)), I(i, e.slice(9), x)), i;
            })(e);
        }
        return p.throwError(
          `unsupported transaction type: ${e[0]}`,
          f.Yd.errors.UNSUPPORTED_OPERATION,
          { operation: 'parseTransaction', transactionType: e[0] }
        );
      }
    },
    21032: function (t) {
      'use strict';
      for (var e = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l', r = {}, n = 0; n < e.length; n++) {
        var i = e.charAt(n);
        if (void 0 !== r[i]) throw TypeError(i + ' is ambiguous');
        r[i] = n;
      }
      function s(t) {
        var e = t >> 25;
        return (
          ((33554431 & t) << 5) ^
          (996825010 & -((e >> 0) & 1)) ^
          (642813549 & -((e >> 1) & 1)) ^
          (513874426 & -((e >> 2) & 1)) ^
          (1027748829 & -((e >> 3) & 1)) ^
          (705979059 & -((e >> 4) & 1))
        );
      }
      function o(t) {
        for (var e = 1, r = 0; r < t.length; ++r) {
          var n = t.charCodeAt(r);
          if (n < 33 || n > 126) return 'Invalid prefix (' + t + ')';
          e = s(e) ^ (n >> 5);
        }
        for (r = 0, e = s(e); r < t.length; ++r) {
          var i = t.charCodeAt(r);
          e = s(e) ^ (31 & i);
        }
        return e;
      }
      function a(t, e) {
        if (((e = e || 90), t.length < 8)) return t + ' too short';
        if (t.length > e) return 'Exceeds length limit';
        var n = t.toLowerCase(),
          i = t.toUpperCase();
        if (t !== n && t !== i) return 'Mixed-case string ' + t;
        var a = (t = n).lastIndexOf('1');
        if (-1 === a) return 'No separator character for ' + t;
        if (0 === a) return 'Missing prefix for ' + t;
        var u = t.slice(0, a),
          l = t.slice(a + 1);
        if (l.length < 6) return 'Data too short';
        var h = o(u);
        if ('string' == typeof h) return h;
        for (var c = [], d = 0; d < l.length; ++d) {
          var f = l.charAt(d),
            p = r[f];
          if (void 0 === p) return 'Unknown character ' + f;
          (h = s(h) ^ p), d + 6 >= l.length || c.push(p);
        }
        return 1 !== h ? 'Invalid checksum for ' + t : { prefix: u, words: c };
      }
      function u(t, e, r, n) {
        for (var i = 0, s = 0, o = (1 << r) - 1, a = [], u = 0; u < t.length; ++u)
          for (i = (i << e) | t[u], s += e; s >= r; ) a.push((i >> (s -= r)) & o);
        if (n) s > 0 && a.push((i << (r - s)) & o);
        else {
          if (s >= e) return 'Excess padding';
          if ((i << (r - s)) & o) return 'Non-zero padding';
        }
        return a;
      }
      t.exports = {
        decodeUnsafe: function () {
          var t = a.apply(null, arguments);
          if ('object' == typeof t) return t;
        },
        decode: function (t) {
          var e = a.apply(null, arguments);
          if ('object' == typeof e) return e;
          throw Error(e);
        },
        encode: function (t, r, n) {
          if (((n = n || 90), t.length + 7 + r.length > n)) throw TypeError('Exceeds length limit');
          var i = o((t = t.toLowerCase()));
          if ('string' == typeof i) throw Error(i);
          for (var a = t + '1', u = 0; u < r.length; ++u) {
            var l = r[u];
            if (l >> 5 != 0) throw Error('Non 5-bit word');
            (i = s(i) ^ l), (a += e.charAt(l));
          }
          for (u = 0; u < 6; ++u) i = s(i);
          for (i ^= 1, u = 0; u < 6; ++u) {
            var h = (i >> ((5 - u) * 5)) & 31;
            a += e.charAt(h);
          }
          return a;
        },
        toWordsUnsafe: function (t) {
          var e = u(t, 8, 5, !0);
          if (Array.isArray(e)) return e;
        },
        toWords: function (t) {
          var e = u(t, 8, 5, !0);
          if (Array.isArray(e)) return e;
          throw Error(e);
        },
        fromWordsUnsafe: function (t) {
          var e = u(t, 5, 8, !1);
          if (Array.isArray(e)) return e;
        },
        fromWords: function (t) {
          var e = u(t, 5, 8, !1);
          if (Array.isArray(e)) return e;
          throw Error(e);
        },
      };
    },
    12261: function (t, e, r) {
      !(function (t, e) {
        'use strict';
        function n(t, e) {
          if (!t) throw Error(e || 'Assertion failed');
        }
        function i(t, e) {
          t.super_ = e;
          var r = function () {};
          (r.prototype = e.prototype), (t.prototype = new r()), (t.prototype.constructor = t);
        }
        function s(t, e, r) {
          if (s.isBN(t)) return t;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== t &&
              (('le' === e || 'be' === e) && ((r = e), (e = 10)),
              this._init(t || 0, e || 10, r || 'be'));
        }
        'object' == typeof t ? (t.exports = s) : (e.BN = s), (s.BN = s), (s.wordSize = 26);
        try {
          c =
            'undefined' != typeof window && void 0 !== window.Buffer
              ? window.Buffer
              : r(39362).Buffer;
        } catch (t) {}
        function o(t, e) {
          var r = t.charCodeAt(e);
          return r >= 48 && r <= 57
            ? r - 48
            : r >= 65 && r <= 70
              ? r - 55
              : r >= 97 && r <= 102
                ? r - 87
                : void n(!1, 'Invalid character in ' + t);
        }
        function a(t, e, r) {
          var n = o(t, r);
          return r - 1 >= e && (n |= o(t, r - 1) << 4), n;
        }
        function u(t, e, r, i) {
          for (var s = 0, o = 0, a = Math.min(t.length, r), u = e; u < a; u++) {
            var l = t.charCodeAt(u) - 48;
            (s *= i),
              (o = l >= 49 ? l - 49 + 10 : l >= 17 ? l - 17 + 10 : l),
              n(l >= 0 && o < i, 'Invalid character'),
              (s += o);
          }
          return s;
        }
        function l(t, e) {
          (t.words = e.words), (t.length = e.length), (t.negative = e.negative), (t.red = e.red);
        }
        if (
          ((s.isBN = function (t) {
            return (
              t instanceof s ||
              (null !== t &&
                'object' == typeof t &&
                t.constructor.wordSize === s.wordSize &&
                Array.isArray(t.words))
            );
          }),
          (s.max = function (t, e) {
            return t.cmp(e) > 0 ? t : e;
          }),
          (s.min = function (t, e) {
            return 0 > t.cmp(e) ? t : e;
          }),
          (s.prototype._init = function (t, e, r) {
            if ('number' == typeof t) return this._initNumber(t, e, r);
            if ('object' == typeof t) return this._initArray(t, e, r);
            'hex' === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
            var i = 0;
            '-' === (t = t.toString().replace(/\s+/g, ''))[0] && (i++, (this.negative = 1)),
              i < t.length &&
                (16 === e
                  ? this._parseHex(t, i, r)
                  : (this._parseBase(t, e, i),
                    'le' === r && this._initArray(this.toArray(), e, r)));
          }),
          (s.prototype._initNumber = function (t, e, r) {
            t < 0 && ((this.negative = 1), (t = -t)),
              t < 67108864
                ? ((this.words = [67108863 & t]), (this.length = 1))
                : t < 4503599627370496
                  ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]), (this.length = 2))
                  : (n(t < 9007199254740992),
                    (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                    (this.length = 3)),
              'le' === r && this._initArray(this.toArray(), e, r);
          }),
          (s.prototype._initArray = function (t, e, r) {
            if ((n('number' == typeof t.length), t.length <= 0))
              return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(t.length / 3)), (this.words = Array(this.length));
            for (var i, s, o = 0; o < this.length; o++) this.words[o] = 0;
            var a = 0;
            if ('be' === r)
              for (o = t.length - 1, i = 0; o >= 0; o -= 3)
                (s = t[o] | (t[o - 1] << 8) | (t[o - 2] << 16)),
                  (this.words[i] |= (s << a) & 67108863),
                  (this.words[i + 1] = (s >>> (26 - a)) & 67108863),
                  (a += 24) >= 26 && ((a -= 26), i++);
            else if ('le' === r)
              for (o = 0, i = 0; o < t.length; o += 3)
                (s = t[o] | (t[o + 1] << 8) | (t[o + 2] << 16)),
                  (this.words[i] |= (s << a) & 67108863),
                  (this.words[i + 1] = (s >>> (26 - a)) & 67108863),
                  (a += 24) >= 26 && ((a -= 26), i++);
            return this._strip();
          }),
          (s.prototype._parseHex = function (t, e, r) {
            (this.length = Math.ceil((t.length - e) / 6)), (this.words = Array(this.length));
            for (var n, i = 0; i < this.length; i++) this.words[i] = 0;
            var s = 0,
              o = 0;
            if ('be' === r)
              for (i = t.length - 1; i >= e; i -= 2)
                (n = a(t, e, i) << s),
                  (this.words[o] |= 67108863 & n),
                  s >= 18 ? ((s -= 18), (o += 1), (this.words[o] |= n >>> 26)) : (s += 8);
            else
              for (i = (t.length - e) % 2 == 0 ? e + 1 : e; i < t.length; i += 2)
                (n = a(t, e, i) << s),
                  (this.words[o] |= 67108863 & n),
                  s >= 18 ? ((s -= 18), (o += 1), (this.words[o] |= n >>> 26)) : (s += 8);
            this._strip();
          }),
          (s.prototype._parseBase = function (t, e, r) {
            (this.words = [0]), (this.length = 1);
            for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
            n--, (i = (i / e) | 0);
            for (
              var s = t.length - r, o = s % n, a = Math.min(s, s - o) + r, l = 0, h = r;
              h < a;
              h += n
            )
              (l = u(t, h, h + n, e)),
                this.imuln(i),
                this.words[0] + l < 67108864 ? (this.words[0] += l) : this._iaddn(l);
            if (0 !== o) {
              var c = 1;
              for (l = u(t, h, t.length, e), h = 0; h < o; h++) c *= e;
              this.imuln(c), this.words[0] + l < 67108864 ? (this.words[0] += l) : this._iaddn(l);
            }
            this._strip();
          }),
          (s.prototype.copy = function (t) {
            t.words = Array(this.length);
            for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
            (t.length = this.length), (t.negative = this.negative), (t.red = this.red);
          }),
          (s.prototype._move = function (t) {
            l(t, this);
          }),
          (s.prototype.clone = function () {
            var t = new s(null);
            return this.copy(t), t;
          }),
          (s.prototype._expand = function (t) {
            for (; this.length < t; ) this.words[this.length++] = 0;
            return this;
          }),
          (s.prototype._strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; ) this.length--;
            return this._normSign();
          }),
          (s.prototype._normSign = function () {
            return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this;
          }),
          'undefined' != typeof Symbol && 'function' == typeof Symbol.for)
        )
          try {
            s.prototype[Symbol.for('nodejs.util.inspect.custom')] = h;
          } catch (t) {
            s.prototype.inspect = h;
          }
        else s.prototype.inspect = h;
        function h() {
          return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
        }
        var c,
          d = [
            '',
            '0',
            '00',
            '000',
            '0000',
            '00000',
            '000000',
            '0000000',
            '00000000',
            '000000000',
            '0000000000',
            '00000000000',
            '000000000000',
            '0000000000000',
            '00000000000000',
            '000000000000000',
            '0000000000000000',
            '00000000000000000',
            '000000000000000000',
            '0000000000000000000',
            '00000000000000000000',
            '000000000000000000000',
            '0000000000000000000000',
            '00000000000000000000000',
            '000000000000000000000000',
            '0000000000000000000000000',
          ],
          f = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5,
            5, 5, 5, 5, 5, 5, 5, 5, 5,
          ],
          p = [
            0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721,
            1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224,
            47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907,
            17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176,
          ];
        function m(t, e, r) {
          r.negative = e.negative ^ t.negative;
          var n = (t.length + e.length) | 0;
          (r.length = n), (n = (n - 1) | 0);
          var i = 0 | t.words[0],
            s = 0 | e.words[0],
            o = i * s,
            a = 67108863 & o,
            u = (o / 67108864) | 0;
          r.words[0] = a;
          for (var l = 1; l < n; l++) {
            for (
              var h = u >>> 26,
                c = 67108863 & u,
                d = Math.min(l, e.length - 1),
                f = Math.max(0, l - t.length + 1);
              f <= d;
              f++
            ) {
              var p = (l - f) | 0;
              (h += ((o = (i = 0 | t.words[p]) * (s = 0 | e.words[f]) + c) / 67108864) | 0),
                (c = 67108863 & o);
            }
            (r.words[l] = 0 | c), (u = 0 | h);
          }
          return 0 !== u ? (r.words[l] = 0 | u) : r.length--, r._strip();
        }
        (s.prototype.toString = function (t, e) {
          if (((e = 0 | e || 1), 16 === (t = t || 10) || 'hex' === t)) {
            r = '';
            for (var r, i = 0, s = 0, o = 0; o < this.length; o++) {
              var a = this.words[o],
                u = (((a << i) | s) & 16777215).toString(16);
              (s = (a >>> (24 - i)) & 16777215),
                (i += 2) >= 26 && ((i -= 26), o--),
                (r = 0 !== s || o !== this.length - 1 ? d[6 - u.length] + u + r : u + r);
            }
            for (0 !== s && (r = s.toString(16) + r); r.length % e != 0; ) r = '0' + r;
            return 0 !== this.negative && (r = '-' + r), r;
          }
          if (t === (0 | t) && t >= 2 && t <= 36) {
            var l = f[t],
              h = p[t];
            r = '';
            var c = this.clone();
            for (c.negative = 0; !c.isZero(); ) {
              var m = c.modrn(h).toString(t);
              r = (c = c.idivn(h)).isZero() ? m + r : d[l - m.length] + m + r;
            }
            for (this.isZero() && (r = '0' + r); r.length % e != 0; ) r = '0' + r;
            return 0 !== this.negative && (r = '-' + r), r;
          }
          n(!1, 'Base should be between 2 and 36');
        }),
          (s.prototype.toNumber = function () {
            var t = this.words[0];
            return (
              2 === this.length
                ? (t += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                  ? (t += 4503599627370496 + 67108864 * this.words[1])
                  : this.length > 2 && n(!1, 'Number can only safely store up to 53 bits'),
              0 !== this.negative ? -t : t
            );
          }),
          (s.prototype.toJSON = function () {
            return this.toString(16, 2);
          }),
          c &&
            (s.prototype.toBuffer = function (t, e) {
              return this.toArrayLike(c, t, e);
            }),
          (s.prototype.toArray = function (t, e) {
            return this.toArrayLike(Array, t, e);
          }),
          (s.prototype.toArrayLike = function (t, e, r) {
            this._strip();
            var i = this.byteLength(),
              s = r || Math.max(1, i);
            n(i <= s, 'byte array longer than desired length'),
              n(s > 0, 'Requested array length <= 0');
            var o = t.allocUnsafe ? t.allocUnsafe(s) : new t(s);
            return this['_toArrayLike' + ('le' === e ? 'LE' : 'BE')](o, i), o;
          }),
          (s.prototype._toArrayLikeLE = function (t, e) {
            for (var r = 0, n = 0, i = 0, s = 0; i < this.length; i++) {
              var o = (this.words[i] << s) | n;
              (t[r++] = 255 & o),
                r < t.length && (t[r++] = (o >> 8) & 255),
                r < t.length && (t[r++] = (o >> 16) & 255),
                6 === s
                  ? (r < t.length && (t[r++] = (o >> 24) & 255), (n = 0), (s = 0))
                  : ((n = o >>> 24), (s += 2));
            }
            if (r < t.length) for (t[r++] = n; r < t.length; ) t[r++] = 0;
          }),
          (s.prototype._toArrayLikeBE = function (t, e) {
            for (var r = t.length - 1, n = 0, i = 0, s = 0; i < this.length; i++) {
              var o = (this.words[i] << s) | n;
              (t[r--] = 255 & o),
                r >= 0 && (t[r--] = (o >> 8) & 255),
                r >= 0 && (t[r--] = (o >> 16) & 255),
                6 === s
                  ? (r >= 0 && (t[r--] = (o >> 24) & 255), (n = 0), (s = 0))
                  : ((n = o >>> 24), (s += 2));
            }
            if (r >= 0) for (t[r--] = n; r >= 0; ) t[r--] = 0;
          }),
          Math.clz32
            ? (s.prototype._countBits = function (t) {
                return 32 - Math.clz32(t);
              })
            : (s.prototype._countBits = function (t) {
                var e = t,
                  r = 0;
                return (
                  e >= 4096 && ((r += 13), (e >>>= 13)),
                  e >= 64 && ((r += 7), (e >>>= 7)),
                  e >= 8 && ((r += 4), (e >>>= 4)),
                  e >= 2 && ((r += 2), (e >>>= 2)),
                  r + e
                );
              }),
          (s.prototype._zeroBits = function (t) {
            if (0 === t) return 26;
            var e = t,
              r = 0;
            return (
              (8191 & e) == 0 && ((r += 13), (e >>>= 13)),
              (127 & e) == 0 && ((r += 7), (e >>>= 7)),
              (15 & e) == 0 && ((r += 4), (e >>>= 4)),
              (3 & e) == 0 && ((r += 2), (e >>>= 2)),
              (1 & e) == 0 && r++,
              r
            );
          }),
          (s.prototype.bitLength = function () {
            var t = this.words[this.length - 1],
              e = this._countBits(t);
            return (this.length - 1) * 26 + e;
          }),
          (s.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var t = 0, e = 0; e < this.length; e++) {
              var r = this._zeroBits(this.words[e]);
              if (((t += r), 26 !== r)) break;
            }
            return t;
          }),
          (s.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (s.prototype.toTwos = function (t) {
            return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone();
          }),
          (s.prototype.fromTwos = function (t) {
            return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone();
          }),
          (s.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (s.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (s.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (s.prototype.iuor = function (t) {
            for (; this.length < t.length; ) this.words[this.length++] = 0;
            for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
            return this._strip();
          }),
          (s.prototype.ior = function (t) {
            return n((this.negative | t.negative) == 0), this.iuor(t);
          }),
          (s.prototype.or = function (t) {
            return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this);
          }),
          (s.prototype.uor = function (t) {
            return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this);
          }),
          (s.prototype.iuand = function (t) {
            var e;
            e = this.length > t.length ? t : this;
            for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r];
            return (this.length = e.length), this._strip();
          }),
          (s.prototype.iand = function (t) {
            return n((this.negative | t.negative) == 0), this.iuand(t);
          }),
          (s.prototype.and = function (t) {
            return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this);
          }),
          (s.prototype.uand = function (t) {
            return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this);
          }),
          (s.prototype.iuxor = function (t) {
            this.length > t.length ? ((e = this), (r = t)) : ((e = t), (r = this));
            for (var e, r, n = 0; n < r.length; n++) this.words[n] = e.words[n] ^ r.words[n];
            if (this !== e) for (; n < e.length; n++) this.words[n] = e.words[n];
            return (this.length = e.length), this._strip();
          }),
          (s.prototype.ixor = function (t) {
            return n((this.negative | t.negative) == 0), this.iuxor(t);
          }),
          (s.prototype.xor = function (t) {
            return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this);
          }),
          (s.prototype.uxor = function (t) {
            return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this);
          }),
          (s.prototype.inotn = function (t) {
            n('number' == typeof t && t >= 0);
            var e = 0 | Math.ceil(t / 26),
              r = t % 26;
            this._expand(e), r > 0 && e--;
            for (var i = 0; i < e; i++) this.words[i] = 67108863 & ~this.words[i];
            return (
              r > 0 && (this.words[i] = ~this.words[i] & (67108863 >> (26 - r))), this._strip()
            );
          }),
          (s.prototype.notn = function (t) {
            return this.clone().inotn(t);
          }),
          (s.prototype.setn = function (t, e) {
            n('number' == typeof t && t >= 0);
            var r = (t / 26) | 0,
              i = t % 26;
            return (
              this._expand(r + 1),
              e
                ? (this.words[r] = this.words[r] | (1 << i))
                : (this.words[r] = this.words[r] & ~(1 << i)),
              this._strip()
            );
          }),
          (s.prototype.iadd = function (t) {
            if (0 !== this.negative && 0 === t.negative)
              return (
                (this.negative = 0), (e = this.isub(t)), (this.negative ^= 1), this._normSign()
              );
            if (0 === this.negative && 0 !== t.negative)
              return (t.negative = 0), (e = this.isub(t)), (t.negative = 1), e._normSign();
            this.length > t.length ? ((r = this), (n = t)) : ((r = t), (n = this));
            for (var e, r, n, i = 0, s = 0; s < n.length; s++)
              (e = (0 | r.words[s]) + (0 | n.words[s]) + i),
                (this.words[s] = 67108863 & e),
                (i = e >>> 26);
            for (; 0 !== i && s < r.length; s++)
              (e = (0 | r.words[s]) + i), (this.words[s] = 67108863 & e), (i = e >>> 26);
            if (((this.length = r.length), 0 !== i)) (this.words[this.length] = i), this.length++;
            else if (r !== this) for (; s < r.length; s++) this.words[s] = r.words[s];
            return this;
          }),
          (s.prototype.add = function (t) {
            var e;
            return 0 !== t.negative && 0 === this.negative
              ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
              : 0 === t.negative && 0 !== this.negative
                ? ((this.negative = 0), (e = t.sub(this)), (this.negative = 1), e)
                : this.length > t.length
                  ? this.clone().iadd(t)
                  : t.clone().iadd(this);
          }),
          (s.prototype.isub = function (t) {
            if (0 !== t.negative) {
              t.negative = 0;
              var e,
                r,
                n = this.iadd(t);
              return (t.negative = 1), n._normSign();
            }
            if (0 !== this.negative)
              return (this.negative = 0), this.iadd(t), (this.negative = 1), this._normSign();
            var i = this.cmp(t);
            if (0 === i) return (this.negative = 0), (this.length = 1), (this.words[0] = 0), this;
            i > 0 ? ((e = this), (r = t)) : ((e = t), (r = this));
            for (var s = 0, o = 0; o < r.length; o++)
              (s = (n = (0 | e.words[o]) - (0 | r.words[o]) + s) >> 26),
                (this.words[o] = 67108863 & n);
            for (; 0 !== s && o < e.length; o++)
              (s = (n = (0 | e.words[o]) + s) >> 26), (this.words[o] = 67108863 & n);
            if (0 === s && o < e.length && e !== this)
              for (; o < e.length; o++) this.words[o] = e.words[o];
            return (
              (this.length = Math.max(this.length, o)),
              e !== this && (this.negative = 1),
              this._strip()
            );
          }),
          (s.prototype.sub = function (t) {
            return this.clone().isub(t);
          });
        var g = function (t, e, r) {
          var n,
            i,
            s,
            o = t.words,
            a = e.words,
            u = r.words,
            l = 0,
            h = 0 | o[0],
            c = 8191 & h,
            d = h >>> 13,
            f = 0 | o[1],
            p = 8191 & f,
            m = f >>> 13,
            g = 0 | o[2],
            v = 8191 & g,
            y = g >>> 13,
            b = 0 | o[3],
            w = 8191 & b,
            A = b >>> 13,
            _ = 0 | o[4],
            E = 8191 & _,
            k = _ >>> 13,
            x = 0 | o[5],
            N = 8191 & x,
            M = x >>> 13,
            I = 0 | o[6],
            P = 8191 & I,
            S = I >>> 13,
            C = 0 | o[7],
            T = 8191 & C,
            R = C >>> 13,
            O = 0 | o[8],
            B = 8191 & O,
            D = O >>> 13,
            L = 0 | o[9],
            U = 8191 & L,
            F = L >>> 13,
            G = 0 | a[0],
            z = 8191 & G,
            Z = G >>> 13,
            Y = 0 | a[1],
            q = 8191 & Y,
            j = Y >>> 13,
            H = 0 | a[2],
            K = 8191 & H,
            J = H >>> 13,
            Q = 0 | a[3],
            V = 8191 & Q,
            W = Q >>> 13,
            X = 0 | a[4],
            $ = 8191 & X,
            tt = X >>> 13,
            te = 0 | a[5],
            tr = 8191 & te,
            tn = te >>> 13,
            ti = 0 | a[6],
            ts = 8191 & ti,
            to = ti >>> 13,
            ta = 0 | a[7],
            tu = 8191 & ta,
            tl = ta >>> 13,
            th = 0 | a[8],
            tc = 8191 & th,
            td = th >>> 13,
            tf = 0 | a[9],
            tp = 8191 & tf,
            tm = tf >>> 13;
          (r.negative = t.negative ^ e.negative), (r.length = 19);
          var tg =
            (((l + (n = Math.imul(c, z))) | 0) +
              ((8191 & (i = ((i = Math.imul(c, Z)) + Math.imul(d, z)) | 0)) << 13)) |
            0;
          (l = ((((s = Math.imul(d, Z)) + (i >>> 13)) | 0) + (tg >>> 26)) | 0),
            (tg &= 67108863),
            (n = Math.imul(p, z)),
            (i = ((i = Math.imul(p, Z)) + Math.imul(m, z)) | 0),
            (s = Math.imul(m, Z));
          var tv =
            (((l + (n = (n + Math.imul(c, q)) | 0)) | 0) +
              ((8191 & (i = ((i = (i + Math.imul(c, j)) | 0) + Math.imul(d, q)) | 0)) << 13)) |
            0;
          (l = ((((s = (s + Math.imul(d, j)) | 0) + (i >>> 13)) | 0) + (tv >>> 26)) | 0),
            (tv &= 67108863),
            (n = Math.imul(v, z)),
            (i = ((i = Math.imul(v, Z)) + Math.imul(y, z)) | 0),
            (s = Math.imul(y, Z)),
            (n = (n + Math.imul(p, q)) | 0),
            (i = ((i = (i + Math.imul(p, j)) | 0) + Math.imul(m, q)) | 0),
            (s = (s + Math.imul(m, j)) | 0);
          var ty =
            (((l + (n = (n + Math.imul(c, K)) | 0)) | 0) +
              ((8191 & (i = ((i = (i + Math.imul(c, J)) | 0) + Math.imul(d, K)) | 0)) << 13)) |
            0;
          (l = ((((s = (s + Math.imul(d, J)) | 0) + (i >>> 13)) | 0) + (ty >>> 26)) | 0),
            (ty &= 67108863),
            (n = Math.imul(w, z)),
            (i = ((i = Math.imul(w, Z)) + Math.imul(A, z)) | 0),
            (s = Math.imul(A, Z)),
            (n = (n + Math.imul(v, q)) | 0),
            (i = ((i = (i + Math.imul(v, j)) | 0) + Math.imul(y, q)) | 0),
            (s = (s + Math.imul(y, j)) | 0),
            (n = (n + Math.imul(p, K)) | 0),
            (i = ((i = (i + Math.imul(p, J)) | 0) + Math.imul(m, K)) | 0),
            (s = (s + Math.imul(m, J)) | 0);
          var tb =
            (((l + (n = (n + Math.imul(c, V)) | 0)) | 0) +
              ((8191 & (i = ((i = (i + Math.imul(c, W)) | 0) + Math.imul(d, V)) | 0)) << 13)) |
            0;
          (l = ((((s = (s + Math.imul(d, W)) | 0) + (i >>> 13)) | 0) + (tb >>> 26)) | 0),
            (tb &= 67108863),
            (n = Math.imul(E, z)),
            (i = ((i = Math.imul(E, Z)) + Math.imul(k, z)) | 0),
            (s = Math.imul(k, Z)),
            (n = (n + Math.imul(w, q)) | 0),
            (i = ((i = (i + Math.imul(w, j)) | 0) + Math.imul(A, q)) | 0),
            (s = (s + Math.imul(A, j)) | 0),
            (n = (n + Math.imul(v, K)) | 0),
            (i = ((i = (i + Math.imul(v, J)) | 0) + Math.imul(y, K)) | 0),
            (s = (s + Math.imul(y, J)) | 0),
            (n = (n + Math.imul(p, V)) | 0),
            (i = ((i = (i + Math.imul(p, W)) | 0) + Math.imul(m, V)) | 0),
            (s = (s + Math.imul(m, W)) | 0);
          var tw =
            (((l + (n = (n + Math.imul(c, $)) | 0)) | 0) +
              ((8191 & (i = ((i = (i + Math.imul(c, tt)) | 0) + Math.imul(d, $)) | 0)) << 13)) |
            0;
          (l = ((((s = (s + Math.imul(d, tt)) | 0) + (i >>> 13)) | 0) + (tw >>> 26)) | 0),
            (tw &= 67108863),
            (n = Math.imul(N, z)),
            (i = ((i = Math.imul(N, Z)) + Math.imul(M, z)) | 0),
            (s = Math.imul(M, Z)),
            (n = (n + Math.imul(E, q)) | 0),
            (i = ((i = (i + Math.imul(E, j)) | 0) + Math.imul(k, q)) | 0),
            (s = (s + Math.imul(k, j)) | 0),
            (n = (n + Math.imul(w, K)) | 0),
            (i = ((i = (i + Math.imul(w, J)) | 0) + Math.imul(A, K)) | 0),
            (s = (s + Math.imul(A, J)) | 0),
            (n = (n + Math.imul(v, V)) | 0),
            (i = ((i = (i + Math.imul(v, W)) | 0) + Math.imul(y, V)) | 0),
            (s = (s + Math.imul(y, W)) | 0),
            (n = (n + Math.imul(p, $)) | 0),
            (i = ((i = (i + Math.imul(p, tt)) | 0) + Math.imul(m, $)) | 0),
            (s = (s + Math.imul(m, tt)) | 0);
          var tA =
            (((l + (n = (n + Math.imul(c, tr)) | 0)) | 0) +
              ((8191 & (i = ((i = (i + Math.imul(c, tn)) | 0) + Math.imul(d, tr)) | 0)) << 13)) |
            0;
          (l = ((((s = (s + Math.imul(d, tn)) | 0) + (i >>> 13)) | 0) + (tA >>> 26)) | 0),
            (tA &= 67108863),
            (n = Math.imul(P, z)),
            (i = ((i = Math.imul(P, Z)) + Math.imul(S, z)) | 0),
            (s = Math.imul(S, Z)),
            (n = (n + Math.imul(N, q)) | 0),
            (i = ((i = (i + Math.imul(N, j)) | 0) + Math.imul(M, q)) | 0),
            (s = (s + Math.imul(M, j)) | 0),
            (n = (n + Math.imul(E, K)) | 0),
            (i = ((i = (i + Math.imul(E, J)) | 0) + Math.imul(k, K)) | 0),
            (s = (s + Math.imul(k, J)) | 0),
            (n = (n + Math.imul(w, V)) | 0),
            (i = ((i = (i + Math.imul(w, W)) | 0) + Math.imul(A, V)) | 0),
            (s = (s + Math.imul(A, W)) | 0),
            (n = (n + Math.imul(v, $)) | 0),
            (i = ((i = (i + Math.imul(v, tt)) | 0) + Math.imul(y, $)) | 0),
            (s = (s + Math.imul(y, tt)) | 0),
            (n = (n + Math.imul(p, tr)) | 0),
            (i = ((i = (i + Math.imul(p, tn)) | 0) + Math.imul(m, tr)) | 0),
            (s = (s + Math.imul(m, tn)) | 0);
          var t_ =
            (((l + (n = (n + Math.imul(c, ts)) | 0)) | 0) +
              ((8191 & (i = ((i = (i + Math.imul(c, to)) | 0) + Math.imul(d, ts)) | 0)) << 13)) |
            0;
          (l = ((((s = (s + Math.imul(d, to)) | 0) + (i >>> 13)) | 0) + (t_ >>> 26)) | 0),
            (t_ &= 67108863),
            (n = Math.imul(T, z)),
            (i = ((i = Math.imul(T, Z)) + Math.imul(R, z)) | 0),
            (s = Math.imul(R, Z)),
            (n = (n + Math.imul(P, q)) | 0),
            (i = ((i = (i + Math.imul(P, j)) | 0) + Math.imul(S, q)) | 0),
            (s = (s + Math.imul(S, j)) | 0),
            (n = (n + Math.imul(N, K)) | 0),
            (i = ((i = (i + Math.imul(N, J)) | 0) + Math.imul(M, K)) | 0),
            (s = (s + Math.imul(M, J)) | 0),
            (n = (n + Math.imul(E, V)) | 0),
            (i = ((i = (i + Math.imul(E, W)) | 0) + Math.imul(k, V)) | 0),
            (s = (s + Math.imul(k, W)) | 0),
            (n = (n + Math.imul(w, $)) | 0),
            (i = ((i = (i + Math.imul(w, tt)) | 0) + Math.imul(A, $)) | 0),
            (s = (s + Math.imul(A, tt)) | 0),
            (n = (n + Math.imul(v, tr)) | 0),
            (i = ((i = (i + Math.imul(v, tn)) | 0) + Math.imul(y, tr)) | 0),
            (s = (s + Math.imul(y, tn)) | 0),
            (n = (n + Math.imul(p, ts)) | 0),
            (i = ((i = (i + Math.imul(p, to)) | 0) + Math.imul(m, ts)) | 0),
            (s = (s + Math.imul(m, to)) | 0);
          var tE =
            (((l + (n = (n + Math.imul(c, tu)) | 0)) | 0) +
              ((8191 & (i = ((i = (i + Math.imul(c, tl)) | 0) + Math.imul(d, tu)) | 0)) << 13)) |
            0;
          (l = ((((s = (s + Math.imul(d, tl)) | 0) + (i >>> 13)) | 0) + (tE >>> 26)) | 0),
            (tE &= 67108863),
            (n = Math.imul(B, z)),
            (i = ((i = Math.imul(B, Z)) + Math.imul(D, z)) | 0),
            (s = Math.imul(D, Z)),
            (n = (n + Math.imul(T, q)) | 0),
            (i = ((i = (i + Math.imul(T, j)) | 0) + Math.imul(R, q)) | 0),
            (s = (s + Math.imul(R, j)) | 0),
            (n = (n + Math.imul(P, K)) | 0),
            (i = ((i = (i + Math.imul(P, J)) | 0) + Math.imul(S, K)) | 0),
            (s = (s + Math.imul(S, J)) | 0),
            (n = (n + Math.imul(N, V)) | 0),
            (i = ((i = (i + Math.imul(N, W)) | 0) + Math.imul(M, V)) | 0),
            (s = (s + Math.imul(M, W)) | 0),
            (n = (n + Math.imul(E, $)) | 0),
            (i = ((i = (i + Math.imul(E, tt)) | 0) + Math.imul(k, $)) | 0),
            (s = (s + Math.imul(k, tt)) | 0),
            (n = (n + Math.imul(w, tr)) | 0),
            (i = ((i = (i + Math.imul(w, tn)) | 0) + Math.imul(A, tr)) | 0),
            (s = (s + Math.imul(A, tn)) | 0),
            (n = (n + Math.imul(v, ts)) | 0),
            (i = ((i = (i + Math.imul(v, to)) | 0) + Math.imul(y, ts)) | 0),
            (s = (s + Math.imul(y, to)) | 0),
            (n = (n + Math.imul(p, tu)) | 0),
            (i = ((i = (i + Math.imul(p, tl)) | 0) + Math.imul(m, tu)) | 0),
            (s = (s + Math.imul(m, tl)) | 0);
          var tk =
            (((l + (n = (n + Math.imul(c, tc)) | 0)) | 0) +
              ((8191 & (i = ((i = (i + Math.imul(c, td)) | 0) + Math.imul(d, tc)) | 0)) << 13)) |
            0;
          (l = ((((s = (s + Math.imul(d, td)) | 0) + (i >>> 13)) | 0) + (tk >>> 26)) | 0),
            (tk &= 67108863),
            (n = Math.imul(U, z)),
            (i = ((i = Math.imul(U, Z)) + Math.imul(F, z)) | 0),
            (s = Math.imul(F, Z)),
            (n = (n + Math.imul(B, q)) | 0),
            (i = ((i = (i + Math.imul(B, j)) | 0) + Math.imul(D, q)) | 0),
            (s = (s + Math.imul(D, j)) | 0),
            (n = (n + Math.imul(T, K)) | 0),
            (i = ((i = (i + Math.imul(T, J)) | 0) + Math.imul(R, K)) | 0),
            (s = (s + Math.imul(R, J)) | 0),
            (n = (n + Math.imul(P, V)) | 0),
            (i = ((i = (i + Math.imul(P, W)) | 0) + Math.imul(S, V)) | 0),
            (s = (s + Math.imul(S, W)) | 0),
            (n = (n + Math.imul(N, $)) | 0),
            (i = ((i = (i + Math.imul(N, tt)) | 0) + Math.imul(M, $)) | 0),
            (s = (s + Math.imul(M, tt)) | 0),
            (n = (n + Math.imul(E, tr)) | 0),
            (i = ((i = (i + Math.imul(E, tn)) | 0) + Math.imul(k, tr)) | 0),
            (s = (s + Math.imul(k, tn)) | 0),
            (n = (n + Math.imul(w, ts)) | 0),
            (i = ((i = (i + Math.imul(w, to)) | 0) + Math.imul(A, ts)) | 0),
            (s = (s + Math.imul(A, to)) | 0),
            (n = (n + Math.imul(v, tu)) | 0),
            (i = ((i = (i + Math.imul(v, tl)) | 0) + Math.imul(y, tu)) | 0),
            (s = (s + Math.imul(y, tl)) | 0),
            (n = (n + Math.imul(p, tc)) | 0),
            (i = ((i = (i + Math.imul(p, td)) | 0) + Math.imul(m, tc)) | 0),
            (s = (s + Math.imul(m, td)) | 0);
          var tx =
            (((l + (n = (n + Math.imul(c, tp)) | 0)) | 0) +
              ((8191 & (i = ((i = (i + Math.imul(c, tm)) | 0) + Math.imul(d, tp)) | 0)) << 13)) |
            0;
          (l = ((((s = (s + Math.imul(d, tm)) | 0) + (i >>> 13)) | 0) + (tx >>> 26)) | 0),
            (tx &= 67108863),
            (n = Math.imul(U, q)),
            (i = ((i = Math.imul(U, j)) + Math.imul(F, q)) | 0),
            (s = Math.imul(F, j)),
            (n = (n + Math.imul(B, K)) | 0),
            (i = ((i = (i + Math.imul(B, J)) | 0) + Math.imul(D, K)) | 0),
            (s = (s + Math.imul(D, J)) | 0),
            (n = (n + Math.imul(T, V)) | 0),
            (i = ((i = (i + Math.imul(T, W)) | 0) + Math.imul(R, V)) | 0),
            (s = (s + Math.imul(R, W)) | 0),
            (n = (n + Math.imul(P, $)) | 0),
            (i = ((i = (i + Math.imul(P, tt)) | 0) + Math.imul(S, $)) | 0),
            (s = (s + Math.imul(S, tt)) | 0),
            (n = (n + Math.imul(N, tr)) | 0),
            (i = ((i = (i + Math.imul(N, tn)) | 0) + Math.imul(M, tr)) | 0),
            (s = (s + Math.imul(M, tn)) | 0),
            (n = (n + Math.imul(E, ts)) | 0),
            (i = ((i = (i + Math.imul(E, to)) | 0) + Math.imul(k, ts)) | 0),
            (s = (s + Math.imul(k, to)) | 0),
            (n = (n + Math.imul(w, tu)) | 0),
            (i = ((i = (i + Math.imul(w, tl)) | 0) + Math.imul(A, tu)) | 0),
            (s = (s + Math.imul(A, tl)) | 0),
            (n = (n + Math.imul(v, tc)) | 0),
            (i = ((i = (i + Math.imul(v, td)) | 0) + Math.imul(y, tc)) | 0),
            (s = (s + Math.imul(y, td)) | 0);
          var tN =
            (((l + (n = (n + Math.imul(p, tp)) | 0)) | 0) +
              ((8191 & (i = ((i = (i + Math.imul(p, tm)) | 0) + Math.imul(m, tp)) | 0)) << 13)) |
            0;
          (l = ((((s = (s + Math.imul(m, tm)) | 0) + (i >>> 13)) | 0) + (tN >>> 26)) | 0),
            (tN &= 67108863),
            (n = Math.imul(U, K)),
            (i = ((i = Math.imul(U, J)) + Math.imul(F, K)) | 0),
            (s = Math.imul(F, J)),
            (n = (n + Math.imul(B, V)) | 0),
            (i = ((i = (i + Math.imul(B, W)) | 0) + Math.imul(D, V)) | 0),
            (s = (s + Math.imul(D, W)) | 0),
            (n = (n + Math.imul(T, $)) | 0),
            (i = ((i = (i + Math.imul(T, tt)) | 0) + Math.imul(R, $)) | 0),
            (s = (s + Math.imul(R, tt)) | 0),
            (n = (n + Math.imul(P, tr)) | 0),
            (i = ((i = (i + Math.imul(P, tn)) | 0) + Math.imul(S, tr)) | 0),
            (s = (s + Math.imul(S, tn)) | 0),
            (n = (n + Math.imul(N, ts)) | 0),
            (i = ((i = (i + Math.imul(N, to)) | 0) + Math.imul(M, ts)) | 0),
            (s = (s + Math.imul(M, to)) | 0),
            (n = (n + Math.imul(E, tu)) | 0),
            (i = ((i = (i + Math.imul(E, tl)) | 0) + Math.imul(k, tu)) | 0),
            (s = (s + Math.imul(k, tl)) | 0),
            (n = (n + Math.imul(w, tc)) | 0),
            (i = ((i = (i + Math.imul(w, td)) | 0) + Math.imul(A, tc)) | 0),
            (s = (s + Math.imul(A, td)) | 0);
          var tM =
            (((l + (n = (n + Math.imul(v, tp)) | 0)) | 0) +
              ((8191 & (i = ((i = (i + Math.imul(v, tm)) | 0) + Math.imul(y, tp)) | 0)) << 13)) |
            0;
          (l = ((((s = (s + Math.imul(y, tm)) | 0) + (i >>> 13)) | 0) + (tM >>> 26)) | 0),
            (tM &= 67108863),
            (n = Math.imul(U, V)),
            (i = ((i = Math.imul(U, W)) + Math.imul(F, V)) | 0),
            (s = Math.imul(F, W)),
            (n = (n + Math.imul(B, $)) | 0),
            (i = ((i = (i + Math.imul(B, tt)) | 0) + Math.imul(D, $)) | 0),
            (s = (s + Math.imul(D, tt)) | 0),
            (n = (n + Math.imul(T, tr)) | 0),
            (i = ((i = (i + Math.imul(T, tn)) | 0) + Math.imul(R, tr)) | 0),
            (s = (s + Math.imul(R, tn)) | 0),
            (n = (n + Math.imul(P, ts)) | 0),
            (i = ((i = (i + Math.imul(P, to)) | 0) + Math.imul(S, ts)) | 0),
            (s = (s + Math.imul(S, to)) | 0),
            (n = (n + Math.imul(N, tu)) | 0),
            (i = ((i = (i + Math.imul(N, tl)) | 0) + Math.imul(M, tu)) | 0),
            (s = (s + Math.imul(M, tl)) | 0),
            (n = (n + Math.imul(E, tc)) | 0),
            (i = ((i = (i + Math.imul(E, td)) | 0) + Math.imul(k, tc)) | 0),
            (s = (s + Math.imul(k, td)) | 0);
          var tI =
            (((l + (n = (n + Math.imul(w, tp)) | 0)) | 0) +
              ((8191 & (i = ((i = (i + Math.imul(w, tm)) | 0) + Math.imul(A, tp)) | 0)) << 13)) |
            0;
          (l = ((((s = (s + Math.imul(A, tm)) | 0) + (i >>> 13)) | 0) + (tI >>> 26)) | 0),
            (tI &= 67108863),
            (n = Math.imul(U, $)),
            (i = ((i = Math.imul(U, tt)) + Math.imul(F, $)) | 0),
            (s = Math.imul(F, tt)),
            (n = (n + Math.imul(B, tr)) | 0),
            (i = ((i = (i + Math.imul(B, tn)) | 0) + Math.imul(D, tr)) | 0),
            (s = (s + Math.imul(D, tn)) | 0),
            (n = (n + Math.imul(T, ts)) | 0),
            (i = ((i = (i + Math.imul(T, to)) | 0) + Math.imul(R, ts)) | 0),
            (s = (s + Math.imul(R, to)) | 0),
            (n = (n + Math.imul(P, tu)) | 0),
            (i = ((i = (i + Math.imul(P, tl)) | 0) + Math.imul(S, tu)) | 0),
            (s = (s + Math.imul(S, tl)) | 0),
            (n = (n + Math.imul(N, tc)) | 0),
            (i = ((i = (i + Math.imul(N, td)) | 0) + Math.imul(M, tc)) | 0),
            (s = (s + Math.imul(M, td)) | 0);
          var tP =
            (((l + (n = (n + Math.imul(E, tp)) | 0)) | 0) +
              ((8191 & (i = ((i = (i + Math.imul(E, tm)) | 0) + Math.imul(k, tp)) | 0)) << 13)) |
            0;
          (l = ((((s = (s + Math.imul(k, tm)) | 0) + (i >>> 13)) | 0) + (tP >>> 26)) | 0),
            (tP &= 67108863),
            (n = Math.imul(U, tr)),
            (i = ((i = Math.imul(U, tn)) + Math.imul(F, tr)) | 0),
            (s = Math.imul(F, tn)),
            (n = (n + Math.imul(B, ts)) | 0),
            (i = ((i = (i + Math.imul(B, to)) | 0) + Math.imul(D, ts)) | 0),
            (s = (s + Math.imul(D, to)) | 0),
            (n = (n + Math.imul(T, tu)) | 0),
            (i = ((i = (i + Math.imul(T, tl)) | 0) + Math.imul(R, tu)) | 0),
            (s = (s + Math.imul(R, tl)) | 0),
            (n = (n + Math.imul(P, tc)) | 0),
            (i = ((i = (i + Math.imul(P, td)) | 0) + Math.imul(S, tc)) | 0),
            (s = (s + Math.imul(S, td)) | 0);
          var tS =
            (((l + (n = (n + Math.imul(N, tp)) | 0)) | 0) +
              ((8191 & (i = ((i = (i + Math.imul(N, tm)) | 0) + Math.imul(M, tp)) | 0)) << 13)) |
            0;
          (l = ((((s = (s + Math.imul(M, tm)) | 0) + (i >>> 13)) | 0) + (tS >>> 26)) | 0),
            (tS &= 67108863),
            (n = Math.imul(U, ts)),
            (i = ((i = Math.imul(U, to)) + Math.imul(F, ts)) | 0),
            (s = Math.imul(F, to)),
            (n = (n + Math.imul(B, tu)) | 0),
            (i = ((i = (i + Math.imul(B, tl)) | 0) + Math.imul(D, tu)) | 0),
            (s = (s + Math.imul(D, tl)) | 0),
            (n = (n + Math.imul(T, tc)) | 0),
            (i = ((i = (i + Math.imul(T, td)) | 0) + Math.imul(R, tc)) | 0),
            (s = (s + Math.imul(R, td)) | 0);
          var tC =
            (((l + (n = (n + Math.imul(P, tp)) | 0)) | 0) +
              ((8191 & (i = ((i = (i + Math.imul(P, tm)) | 0) + Math.imul(S, tp)) | 0)) << 13)) |
            0;
          (l = ((((s = (s + Math.imul(S, tm)) | 0) + (i >>> 13)) | 0) + (tC >>> 26)) | 0),
            (tC &= 67108863),
            (n = Math.imul(U, tu)),
            (i = ((i = Math.imul(U, tl)) + Math.imul(F, tu)) | 0),
            (s = Math.imul(F, tl)),
            (n = (n + Math.imul(B, tc)) | 0),
            (i = ((i = (i + Math.imul(B, td)) | 0) + Math.imul(D, tc)) | 0),
            (s = (s + Math.imul(D, td)) | 0);
          var tT =
            (((l + (n = (n + Math.imul(T, tp)) | 0)) | 0) +
              ((8191 & (i = ((i = (i + Math.imul(T, tm)) | 0) + Math.imul(R, tp)) | 0)) << 13)) |
            0;
          (l = ((((s = (s + Math.imul(R, tm)) | 0) + (i >>> 13)) | 0) + (tT >>> 26)) | 0),
            (tT &= 67108863),
            (n = Math.imul(U, tc)),
            (i = ((i = Math.imul(U, td)) + Math.imul(F, tc)) | 0),
            (s = Math.imul(F, td));
          var tR =
            (((l + (n = (n + Math.imul(B, tp)) | 0)) | 0) +
              ((8191 & (i = ((i = (i + Math.imul(B, tm)) | 0) + Math.imul(D, tp)) | 0)) << 13)) |
            0;
          (l = ((((s = (s + Math.imul(D, tm)) | 0) + (i >>> 13)) | 0) + (tR >>> 26)) | 0),
            (tR &= 67108863);
          var tO =
            (((l + (n = Math.imul(U, tp))) | 0) +
              ((8191 & (i = ((i = Math.imul(U, tm)) + Math.imul(F, tp)) | 0)) << 13)) |
            0;
          return (
            (l = ((((s = Math.imul(F, tm)) + (i >>> 13)) | 0) + (tO >>> 26)) | 0),
            (tO &= 67108863),
            (u[0] = tg),
            (u[1] = tv),
            (u[2] = ty),
            (u[3] = tb),
            (u[4] = tw),
            (u[5] = tA),
            (u[6] = t_),
            (u[7] = tE),
            (u[8] = tk),
            (u[9] = tx),
            (u[10] = tN),
            (u[11] = tM),
            (u[12] = tI),
            (u[13] = tP),
            (u[14] = tS),
            (u[15] = tC),
            (u[16] = tT),
            (u[17] = tR),
            (u[18] = tO),
            0 !== l && ((u[19] = l), r.length++),
            r
          );
        };
        function v(t, e, r) {
          (r.negative = e.negative ^ t.negative), (r.length = t.length + e.length);
          for (var n = 0, i = 0, s = 0; s < r.length - 1; s++) {
            var o = i;
            i = 0;
            for (
              var a = 67108863 & n,
                u = Math.min(s, e.length - 1),
                l = Math.max(0, s - t.length + 1);
              l <= u;
              l++
            ) {
              var h = s - l,
                c = (0 | t.words[h]) * (0 | e.words[l]),
                d = 67108863 & c;
              (o = (o + ((c / 67108864) | 0)) | 0),
                (a = 67108863 & (d = (d + a) | 0)),
                (i += (o = (o + (d >>> 26)) | 0) >>> 26),
                (o &= 67108863);
            }
            (r.words[s] = a), (n = o), (o = i);
          }
          return 0 !== n ? (r.words[s] = n) : r.length--, r._strip();
        }
        function y(t, e) {
          (this.x = t), (this.y = e);
        }
        Math.imul || (g = m),
          (s.prototype.mulTo = function (t, e) {
            var r,
              n = this.length + t.length;
            return 10 === this.length && 10 === t.length
              ? g(this, t, e)
              : n < 63
                ? m(this, t, e)
                : v(this, t, e);
          }),
          (y.prototype.makeRBT = function (t) {
            for (var e = Array(t), r = s.prototype._countBits(t) - 1, n = 0; n < t; n++)
              e[n] = this.revBin(n, r, t);
            return e;
          }),
          (y.prototype.revBin = function (t, e, r) {
            if (0 === t || t === r - 1) return t;
            for (var n = 0, i = 0; i < e; i++) (n |= (1 & t) << (e - i - 1)), (t >>= 1);
            return n;
          }),
          (y.prototype.permute = function (t, e, r, n, i, s) {
            for (var o = 0; o < s; o++) (n[o] = e[t[o]]), (i[o] = r[t[o]]);
          }),
          (y.prototype.transform = function (t, e, r, n, i, s) {
            this.permute(s, t, e, r, n, i);
            for (var o = 1; o < i; o <<= 1)
              for (
                var a = o << 1,
                  u = Math.cos((2 * Math.PI) / a),
                  l = Math.sin((2 * Math.PI) / a),
                  h = 0;
                h < i;
                h += a
              )
                for (var c = u, d = l, f = 0; f < o; f++) {
                  var p = r[h + f],
                    m = n[h + f],
                    g = r[h + f + o],
                    v = n[h + f + o],
                    y = c * g - d * v;
                  (v = c * v + d * g),
                    (g = y),
                    (r[h + f] = p + g),
                    (n[h + f] = m + v),
                    (r[h + f + o] = p - g),
                    (n[h + f + o] = m - v),
                    f !== a && ((y = u * c - l * d), (d = u * d + l * c), (c = y));
                }
          }),
          (y.prototype.guessLen13b = function (t, e) {
            var r = 1 | Math.max(e, t),
              n = 1 & r,
              i = 0;
            for (r = (r / 2) | 0; r; r >>>= 1) i++;
            return 1 << (i + 1 + n);
          }),
          (y.prototype.conjugate = function (t, e, r) {
            if (!(r <= 1))
              for (var n = 0; n < r / 2; n++) {
                var i = t[n];
                (t[n] = t[r - n - 1]),
                  (t[r - n - 1] = i),
                  (i = e[n]),
                  (e[n] = -e[r - n - 1]),
                  (e[r - n - 1] = -i);
              }
          }),
          (y.prototype.normalize13b = function (t, e) {
            for (var r = 0, n = 0; n < e / 2; n++) {
              var i = 8192 * Math.round(t[2 * n + 1] / e) + Math.round(t[2 * n] / e) + r;
              (t[n] = 67108863 & i), (r = i < 67108864 ? 0 : (i / 67108864) | 0);
            }
            return t;
          }),
          (y.prototype.convert13b = function (t, e, r, i) {
            for (var s = 0, o = 0; o < e; o++)
              (s += 0 | t[o]),
                (r[2 * o] = 8191 & s),
                (s >>>= 13),
                (r[2 * o + 1] = 8191 & s),
                (s >>>= 13);
            for (o = 2 * e; o < i; ++o) r[o] = 0;
            n(0 === s), n((-8192 & s) == 0);
          }),
          (y.prototype.stub = function (t) {
            for (var e = Array(t), r = 0; r < t; r++) e[r] = 0;
            return e;
          }),
          (y.prototype.mulp = function (t, e, r) {
            var n = 2 * this.guessLen13b(t.length, e.length),
              i = this.makeRBT(n),
              s = this.stub(n),
              o = Array(n),
              a = Array(n),
              u = Array(n),
              l = Array(n),
              h = Array(n),
              c = Array(n),
              d = r.words;
            (d.length = n),
              this.convert13b(t.words, t.length, o, n),
              this.convert13b(e.words, e.length, l, n),
              this.transform(o, s, a, u, n, i),
              this.transform(l, s, h, c, n, i);
            for (var f = 0; f < n; f++) {
              var p = a[f] * h[f] - u[f] * c[f];
              (u[f] = a[f] * c[f] + u[f] * h[f]), (a[f] = p);
            }
            return (
              this.conjugate(a, u, n),
              this.transform(a, u, d, s, n, i),
              this.conjugate(d, s, n),
              this.normalize13b(d, n),
              (r.negative = t.negative ^ e.negative),
              (r.length = t.length + e.length),
              r._strip()
            );
          }),
          (s.prototype.mul = function (t) {
            var e = new s(null);
            return (e.words = Array(this.length + t.length)), this.mulTo(t, e);
          }),
          (s.prototype.mulf = function (t) {
            var e = new s(null);
            return (e.words = Array(this.length + t.length)), v(this, t, e);
          }),
          (s.prototype.imul = function (t) {
            return this.clone().mulTo(t, this);
          }),
          (s.prototype.imuln = function (t) {
            var e = t < 0;
            e && (t = -t), n('number' == typeof t), n(t < 67108864);
            for (var r = 0, i = 0; i < this.length; i++) {
              var s = (0 | this.words[i]) * t,
                o = (67108863 & s) + (67108863 & r);
              (r >>= 26), (r += ((s / 67108864) | 0) + (o >>> 26)), (this.words[i] = 67108863 & o);
            }
            return 0 !== r && ((this.words[i] = r), this.length++), e ? this.ineg() : this;
          }),
          (s.prototype.muln = function (t) {
            return this.clone().imuln(t);
          }),
          (s.prototype.sqr = function () {
            return this.mul(this);
          }),
          (s.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (s.prototype.pow = function (t) {
            var e = (function (t) {
              for (var e = Array(t.bitLength()), r = 0; r < e.length; r++) {
                var n = (r / 26) | 0,
                  i = r % 26;
                e[r] = (t.words[n] >>> i) & 1;
              }
              return e;
            })(t);
            if (0 === e.length) return new s(1);
            for (var r = this, n = 0; n < e.length && 0 === e[n]; n++, r = r.sqr());
            if (++n < e.length)
              for (var i = r.sqr(); n < e.length; n++, i = i.sqr()) 0 !== e[n] && (r = r.mul(i));
            return r;
          }),
          (s.prototype.iushln = function (t) {
            n('number' == typeof t && t >= 0);
            var e,
              r = t % 26,
              i = (t - r) / 26,
              s = (67108863 >>> (26 - r)) << (26 - r);
            if (0 !== r) {
              var o = 0;
              for (e = 0; e < this.length; e++) {
                var a = this.words[e] & s,
                  u = ((0 | this.words[e]) - a) << r;
                (this.words[e] = u | o), (o = a >>> (26 - r));
              }
              o && ((this.words[e] = o), this.length++);
            }
            if (0 !== i) {
              for (e = this.length - 1; e >= 0; e--) this.words[e + i] = this.words[e];
              for (e = 0; e < i; e++) this.words[e] = 0;
              this.length += i;
            }
            return this._strip();
          }),
          (s.prototype.ishln = function (t) {
            return n(0 === this.negative), this.iushln(t);
          }),
          (s.prototype.iushrn = function (t, e, r) {
            n('number' == typeof t && t >= 0), (i = e ? (e - (e % 26)) / 26 : 0);
            var i,
              s = t % 26,
              o = Math.min((t - s) / 26, this.length),
              a = 67108863 ^ ((67108863 >>> s) << s);
            if (((i -= o), (i = Math.max(0, i)), r)) {
              for (var u = 0; u < o; u++) r.words[u] = this.words[u];
              r.length = o;
            }
            if (0 === o);
            else if (this.length > o)
              for (this.length -= o, u = 0; u < this.length; u++) this.words[u] = this.words[u + o];
            else (this.words[0] = 0), (this.length = 1);
            var l = 0;
            for (u = this.length - 1; u >= 0 && (0 !== l || u >= i); u--) {
              var h = 0 | this.words[u];
              (this.words[u] = (l << (26 - s)) | (h >>> s)), (l = h & a);
            }
            return (
              r && 0 !== l && (r.words[r.length++] = l),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this._strip()
            );
          }),
          (s.prototype.ishrn = function (t, e, r) {
            return n(0 === this.negative), this.iushrn(t, e, r);
          }),
          (s.prototype.shln = function (t) {
            return this.clone().ishln(t);
          }),
          (s.prototype.ushln = function (t) {
            return this.clone().iushln(t);
          }),
          (s.prototype.shrn = function (t) {
            return this.clone().ishrn(t);
          }),
          (s.prototype.ushrn = function (t) {
            return this.clone().iushrn(t);
          }),
          (s.prototype.testn = function (t) {
            n('number' == typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26;
            return !(this.length <= r) && !!(this.words[r] & (1 << e));
          }),
          (s.prototype.imaskn = function (t) {
            n('number' == typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26;
            return (n(0 === this.negative, 'imaskn works only with positive numbers'),
            this.length <= r)
              ? this
              : (0 !== e && r++,
                (this.length = Math.min(r, this.length)),
                0 !== e && (this.words[this.length - 1] &= 67108863 ^ ((67108863 >>> e) << e)),
                this._strip());
          }),
          (s.prototype.maskn = function (t) {
            return this.clone().imaskn(t);
          }),
          (s.prototype.iaddn = function (t) {
            return (n('number' == typeof t), n(t < 67108864), t < 0)
              ? this.isubn(-t)
              : 0 !== this.negative
                ? (1 === this.length && (0 | this.words[0]) <= t
                    ? ((this.words[0] = t - (0 | this.words[0])), (this.negative = 0))
                    : ((this.negative = 0), this.isubn(t), (this.negative = 1)),
                  this)
                : this._iaddn(t);
          }),
          (s.prototype._iaddn = function (t) {
            this.words[0] += t;
            for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
              (this.words[e] -= 67108864),
                e === this.length - 1 ? (this.words[e + 1] = 1) : this.words[e + 1]++;
            return (this.length = Math.max(this.length, e + 1)), this;
          }),
          (s.prototype.isubn = function (t) {
            if ((n('number' == typeof t), n(t < 67108864), t < 0)) return this.iaddn(-t);
            if (0 !== this.negative)
              return (this.negative = 0), this.iaddn(t), (this.negative = 1), this;
            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var e = 0; e < this.length && this.words[e] < 0; e++)
                (this.words[e] += 67108864), (this.words[e + 1] -= 1);
            return this._strip();
          }),
          (s.prototype.addn = function (t) {
            return this.clone().iaddn(t);
          }),
          (s.prototype.subn = function (t) {
            return this.clone().isubn(t);
          }),
          (s.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (s.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (s.prototype._ishlnsubmul = function (t, e, r) {
            var i,
              s,
              o = t.length + r;
            this._expand(o);
            var a = 0;
            for (i = 0; i < t.length; i++) {
              s = (0 | this.words[i + r]) + a;
              var u = (0 | t.words[i]) * e;
              (s -= 67108863 & u),
                (a = (s >> 26) - ((u / 67108864) | 0)),
                (this.words[i + r] = 67108863 & s);
            }
            for (; i < this.length - r; i++)
              (a = (s = (0 | this.words[i + r]) + a) >> 26), (this.words[i + r] = 67108863 & s);
            if (0 === a) return this._strip();
            for (n(-1 === a), a = 0, i = 0; i < this.length; i++)
              (a = (s = -(0 | this.words[i]) + a) >> 26), (this.words[i] = 67108863 & s);
            return (this.negative = 1), this._strip();
          }),
          (s.prototype._wordDiv = function (t, e) {
            var r,
              n = this.length - t.length,
              i = this.clone(),
              o = t,
              a = 0 | o.words[o.length - 1];
            0 != (n = 26 - this._countBits(a)) &&
              ((o = o.ushln(n)), i.iushln(n), (a = 0 | o.words[o.length - 1]));
            var u = i.length - o.length;
            if ('mod' !== e) {
              ((r = new s(null)).length = u + 1), (r.words = Array(r.length));
              for (var l = 0; l < r.length; l++) r.words[l] = 0;
            }
            var h = i.clone()._ishlnsubmul(o, 1, u);
            0 === h.negative && ((i = h), r && (r.words[u] = 1));
            for (var c = u - 1; c >= 0; c--) {
              var d = (0 | i.words[o.length + c]) * 67108864 + (0 | i.words[o.length + c - 1]);
              for (d = Math.min((d / a) | 0, 67108863), i._ishlnsubmul(o, d, c); 0 !== i.negative; )
                d--, (i.negative = 0), i._ishlnsubmul(o, 1, c), i.isZero() || (i.negative ^= 1);
              r && (r.words[c] = d);
            }
            return (
              r && r._strip(),
              i._strip(),
              'div' !== e && 0 !== n && i.iushrn(n),
              { div: r || null, mod: i }
            );
          }),
          (s.prototype.divmod = function (t, e, r) {
            var i, o, a;
            return (n(!t.isZero()), this.isZero())
              ? { div: new s(0), mod: new s(0) }
              : 0 !== this.negative && 0 === t.negative
                ? ((a = this.neg().divmod(t, e)),
                  'mod' !== e && (i = a.div.neg()),
                  'div' !== e && ((o = a.mod.neg()), r && 0 !== o.negative && o.iadd(t)),
                  { div: i, mod: o })
                : 0 === this.negative && 0 !== t.negative
                  ? ((a = this.divmod(t.neg(), e)),
                    'mod' !== e && (i = a.div.neg()),
                    { div: i, mod: a.mod })
                  : (this.negative & t.negative) != 0
                    ? ((a = this.neg().divmod(t.neg(), e)),
                      'div' !== e && ((o = a.mod.neg()), r && 0 !== o.negative && o.isub(t)),
                      { div: a.div, mod: o })
                    : t.length > this.length || 0 > this.cmp(t)
                      ? { div: new s(0), mod: this }
                      : 1 === t.length
                        ? 'div' === e
                          ? { div: this.divn(t.words[0]), mod: null }
                          : 'mod' === e
                            ? { div: null, mod: new s(this.modrn(t.words[0])) }
                            : { div: this.divn(t.words[0]), mod: new s(this.modrn(t.words[0])) }
                        : this._wordDiv(t, e);
          }),
          (s.prototype.div = function (t) {
            return this.divmod(t, 'div', !1).div;
          }),
          (s.prototype.mod = function (t) {
            return this.divmod(t, 'mod', !1).mod;
          }),
          (s.prototype.umod = function (t) {
            return this.divmod(t, 'mod', !0).mod;
          }),
          (s.prototype.divRound = function (t) {
            var e = this.divmod(t);
            if (e.mod.isZero()) return e.div;
            var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
              n = t.ushrn(1),
              i = t.andln(1),
              s = r.cmp(n);
            return s < 0 || (1 === i && 0 === s)
              ? e.div
              : 0 !== e.div.negative
                ? e.div.isubn(1)
                : e.div.iaddn(1);
          }),
          (s.prototype.modrn = function (t) {
            var e = t < 0;
            e && (t = -t), n(t <= 67108863);
            for (var r = 67108864 % t, i = 0, s = this.length - 1; s >= 0; s--)
              i = (r * i + (0 | this.words[s])) % t;
            return e ? -i : i;
          }),
          (s.prototype.modn = function (t) {
            return this.modrn(t);
          }),
          (s.prototype.idivn = function (t) {
            var e = t < 0;
            e && (t = -t), n(t <= 67108863);
            for (var r = 0, i = this.length - 1; i >= 0; i--) {
              var s = (0 | this.words[i]) + 67108864 * r;
              (this.words[i] = (s / t) | 0), (r = s % t);
            }
            return this._strip(), e ? this.ineg() : this;
          }),
          (s.prototype.divn = function (t) {
            return this.clone().idivn(t);
          }),
          (s.prototype.egcd = function (t) {
            n(0 === t.negative), n(!t.isZero());
            var e = this,
              r = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (
              var i = new s(1), o = new s(0), a = new s(0), u = new s(1), l = 0;
              e.isEven() && r.isEven();

            )
              e.iushrn(1), r.iushrn(1), ++l;
            for (var h = r.clone(), c = e.clone(); !e.isZero(); ) {
              for (var d = 0, f = 1; (e.words[0] & f) == 0 && d < 26; ++d, f <<= 1);
              if (d > 0)
                for (e.iushrn(d); d-- > 0; )
                  (i.isOdd() || o.isOdd()) && (i.iadd(h), o.isub(c)), i.iushrn(1), o.iushrn(1);
              for (var p = 0, m = 1; (r.words[0] & m) == 0 && p < 26; ++p, m <<= 1);
              if (p > 0)
                for (r.iushrn(p); p-- > 0; )
                  (a.isOdd() || u.isOdd()) && (a.iadd(h), u.isub(c)), a.iushrn(1), u.iushrn(1);
              e.cmp(r) >= 0 ? (e.isub(r), i.isub(a), o.isub(u)) : (r.isub(e), a.isub(i), u.isub(o));
            }
            return { a: a, b: u, gcd: r.iushln(l) };
          }),
          (s.prototype._invmp = function (t) {
            n(0 === t.negative), n(!t.isZero());
            var e,
              r = this,
              i = t.clone();
            r = 0 !== r.negative ? r.umod(t) : r.clone();
            for (var o = new s(1), a = new s(0), u = i.clone(); r.cmpn(1) > 0 && i.cmpn(1) > 0; ) {
              for (var l = 0, h = 1; (r.words[0] & h) == 0 && l < 26; ++l, h <<= 1);
              if (l > 0) for (r.iushrn(l); l-- > 0; ) o.isOdd() && o.iadd(u), o.iushrn(1);
              for (var c = 0, d = 1; (i.words[0] & d) == 0 && c < 26; ++c, d <<= 1);
              if (c > 0) for (i.iushrn(c); c-- > 0; ) a.isOdd() && a.iadd(u), a.iushrn(1);
              r.cmp(i) >= 0 ? (r.isub(i), o.isub(a)) : (i.isub(r), a.isub(o));
            }
            return 0 > (e = 0 === r.cmpn(1) ? o : a).cmpn(0) && e.iadd(t), e;
          }),
          (s.prototype.gcd = function (t) {
            if (this.isZero()) return t.abs();
            if (t.isZero()) return this.abs();
            var e = this.clone(),
              r = t.clone();
            (e.negative = 0), (r.negative = 0);
            for (var n = 0; e.isEven() && r.isEven(); n++) e.iushrn(1), r.iushrn(1);
            for (;;) {
              for (; e.isEven(); ) e.iushrn(1);
              for (; r.isEven(); ) r.iushrn(1);
              var i = e.cmp(r);
              if (i < 0) {
                var s = e;
                (e = r), (r = s);
              } else if (0 === i || 0 === r.cmpn(1)) break;
              e.isub(r);
            }
            return r.iushln(n);
          }),
          (s.prototype.invm = function (t) {
            return this.egcd(t).a.umod(t);
          }),
          (s.prototype.isEven = function () {
            return (1 & this.words[0]) == 0;
          }),
          (s.prototype.isOdd = function () {
            return (1 & this.words[0]) == 1;
          }),
          (s.prototype.andln = function (t) {
            return this.words[0] & t;
          }),
          (s.prototype.bincn = function (t) {
            n('number' == typeof t);
            var e = t % 26,
              r = (t - e) / 26,
              i = 1 << e;
            if (this.length <= r) return this._expand(r + 1), (this.words[r] |= i), this;
            for (var s = i, o = r; 0 !== s && o < this.length; o++) {
              var a = 0 | this.words[o];
              (a += s), (s = a >>> 26), (a &= 67108863), (this.words[o] = a);
            }
            return 0 !== s && ((this.words[o] = s), this.length++), this;
          }),
          (s.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (s.prototype.cmpn = function (t) {
            var e,
              r = t < 0;
            if (0 !== this.negative && !r) return -1;
            if (0 === this.negative && r) return 1;
            if ((this._strip(), this.length > 1)) e = 1;
            else {
              r && (t = -t), n(t <= 67108863, 'Number is too big');
              var i = 0 | this.words[0];
              e = i === t ? 0 : i < t ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (s.prototype.cmp = function (t) {
            if (0 !== this.negative && 0 === t.negative) return -1;
            if (0 === this.negative && 0 !== t.negative) return 1;
            var e = this.ucmp(t);
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (s.prototype.ucmp = function (t) {
            if (this.length > t.length) return 1;
            if (this.length < t.length) return -1;
            for (var e = 0, r = this.length - 1; r >= 0; r--) {
              var n = 0 | this.words[r],
                i = 0 | t.words[r];
              if (n !== i) {
                n < i ? (e = -1) : n > i && (e = 1);
                break;
              }
            }
            return e;
          }),
          (s.prototype.gtn = function (t) {
            return 1 === this.cmpn(t);
          }),
          (s.prototype.gt = function (t) {
            return 1 === this.cmp(t);
          }),
          (s.prototype.gten = function (t) {
            return this.cmpn(t) >= 0;
          }),
          (s.prototype.gte = function (t) {
            return this.cmp(t) >= 0;
          }),
          (s.prototype.ltn = function (t) {
            return -1 === this.cmpn(t);
          }),
          (s.prototype.lt = function (t) {
            return -1 === this.cmp(t);
          }),
          (s.prototype.lten = function (t) {
            return 0 >= this.cmpn(t);
          }),
          (s.prototype.lte = function (t) {
            return 0 >= this.cmp(t);
          }),
          (s.prototype.eqn = function (t) {
            return 0 === this.cmpn(t);
          }),
          (s.prototype.eq = function (t) {
            return 0 === this.cmp(t);
          }),
          (s.red = function (t) {
            return new x(t);
          }),
          (s.prototype.toRed = function (t) {
            return (
              n(!this.red, 'Already a number in reduction context'),
              n(0 === this.negative, 'red works only with positives'),
              t.convertTo(this)._forceRed(t)
            );
          }),
          (s.prototype.fromRed = function () {
            return (
              n(this.red, 'fromRed works only with numbers in reduction context'),
              this.red.convertFrom(this)
            );
          }),
          (s.prototype._forceRed = function (t) {
            return (this.red = t), this;
          }),
          (s.prototype.forceRed = function (t) {
            return n(!this.red, 'Already a number in reduction context'), this._forceRed(t);
          }),
          (s.prototype.redAdd = function (t) {
            return n(this.red, 'redAdd works only with red numbers'), this.red.add(this, t);
          }),
          (s.prototype.redIAdd = function (t) {
            return n(this.red, 'redIAdd works only with red numbers'), this.red.iadd(this, t);
          }),
          (s.prototype.redSub = function (t) {
            return n(this.red, 'redSub works only with red numbers'), this.red.sub(this, t);
          }),
          (s.prototype.redISub = function (t) {
            return n(this.red, 'redISub works only with red numbers'), this.red.isub(this, t);
          }),
          (s.prototype.redShl = function (t) {
            return n(this.red, 'redShl works only with red numbers'), this.red.shl(this, t);
          }),
          (s.prototype.redMul = function (t) {
            return (
              n(this.red, 'redMul works only with red numbers'),
              this.red._verify2(this, t),
              this.red.mul(this, t)
            );
          }),
          (s.prototype.redIMul = function (t) {
            return (
              n(this.red, 'redMul works only with red numbers'),
              this.red._verify2(this, t),
              this.red.imul(this, t)
            );
          }),
          (s.prototype.redSqr = function () {
            return (
              n(this.red, 'redSqr works only with red numbers'),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (s.prototype.redISqr = function () {
            return (
              n(this.red, 'redISqr works only with red numbers'),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (s.prototype.redSqrt = function () {
            return (
              n(this.red, 'redSqrt works only with red numbers'),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (s.prototype.redInvm = function () {
            return (
              n(this.red, 'redInvm works only with red numbers'),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (s.prototype.redNeg = function () {
            return (
              n(this.red, 'redNeg works only with red numbers'),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (s.prototype.redPow = function (t) {
            return (
              n(this.red && !t.red, 'redPow(normalNum)'),
              this.red._verify1(this),
              this.red.pow(this, t)
            );
          });
        var b = { k256: null, p224: null, p192: null, p25519: null };
        function w(t, e) {
          (this.name = t),
            (this.p = new s(e, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new s(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function A() {
          w.call(
            this,
            'k256',
            'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f'
          );
        }
        function _() {
          w.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
        }
        function E() {
          w.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
        }
        function k() {
          w.call(
            this,
            '25519',
            '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed'
          );
        }
        function x(t) {
          if ('string' == typeof t) {
            var e = s._prime(t);
            (this.m = e.p), (this.prime = e);
          } else n(t.gtn(1), 'modulus must be greater than 1'), (this.m = t), (this.prime = null);
        }
        function N(t) {
          x.call(this, t),
            (this.shift = this.m.bitLength()),
            this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new s(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (w.prototype._tmp = function () {
          var t = new s(null);
          return (t.words = Array(Math.ceil(this.n / 13))), t;
        }),
          (w.prototype.ireduce = function (t) {
            var e,
              r = t;
            do this.split(r, this.tmp), (e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
            while (e > this.n);
            var n = e < this.n ? -1 : r.ucmp(this.p);
            return (
              0 === n
                ? ((r.words[0] = 0), (r.length = 1))
                : n > 0
                  ? r.isub(this.p)
                  : void 0 !== r.strip
                    ? r.strip()
                    : r._strip(),
              r
            );
          }),
          (w.prototype.split = function (t, e) {
            t.iushrn(this.n, 0, e);
          }),
          (w.prototype.imulK = function (t) {
            return t.imul(this.k);
          }),
          i(A, w),
          (A.prototype.split = function (t, e) {
            for (var r = Math.min(t.length, 9), n = 0; n < r; n++) e.words[n] = t.words[n];
            if (((e.length = r), t.length <= 9)) {
              (t.words[0] = 0), (t.length = 1);
              return;
            }
            var i = t.words[9];
            for (n = 10, e.words[e.length++] = 4194303 & i; n < t.length; n++) {
              var s = 0 | t.words[n];
              (t.words[n - 10] = ((4194303 & s) << 4) | (i >>> 22)), (i = s);
            }
            (i >>>= 22),
              (t.words[n - 10] = i),
              0 === i && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
          }),
          (A.prototype.imulK = function (t) {
            (t.words[t.length] = 0), (t.words[t.length + 1] = 0), (t.length += 2);
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = 0 | t.words[r];
              (e += 977 * n), (t.words[r] = 67108863 & e), (e = 64 * n + ((e / 67108864) | 0));
            }
            return (
              0 === t.words[t.length - 1] &&
                (t.length--, 0 === t.words[t.length - 1] && t.length--),
              t
            );
          }),
          i(_, w),
          i(E, w),
          i(k, w),
          (k.prototype.imulK = function (t) {
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = (0 | t.words[r]) * 19 + e,
                i = 67108863 & n;
              (n >>>= 26), (t.words[r] = i), (e = n);
            }
            return 0 !== e && (t.words[t.length++] = e), t;
          }),
          (s._prime = function (t) {
            var e;
            if (b[t]) return b[t];
            if ('k256' === t) e = new A();
            else if ('p224' === t) e = new _();
            else if ('p192' === t) e = new E();
            else if ('p25519' === t) e = new k();
            else throw Error('Unknown prime ' + t);
            return (b[t] = e), e;
          }),
          (x.prototype._verify1 = function (t) {
            n(0 === t.negative, 'red works only with positives'),
              n(t.red, 'red works only with red numbers');
          }),
          (x.prototype._verify2 = function (t, e) {
            n((t.negative | e.negative) == 0, 'red works only with positives'),
              n(t.red && t.red === e.red, 'red works only with red numbers');
          }),
          (x.prototype.imod = function (t) {
            return this.prime
              ? this.prime.ireduce(t)._forceRed(this)
              : (l(t, t.umod(this.m)._forceRed(this)), t);
          }),
          (x.prototype.neg = function (t) {
            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
          }),
          (x.prototype.add = function (t, e) {
            this._verify2(t, e);
            var r = t.add(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
          }),
          (x.prototype.iadd = function (t, e) {
            this._verify2(t, e);
            var r = t.iadd(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r;
          }),
          (x.prototype.sub = function (t, e) {
            this._verify2(t, e);
            var r = t.sub(e);
            return 0 > r.cmpn(0) && r.iadd(this.m), r._forceRed(this);
          }),
          (x.prototype.isub = function (t, e) {
            this._verify2(t, e);
            var r = t.isub(e);
            return 0 > r.cmpn(0) && r.iadd(this.m), r;
          }),
          (x.prototype.shl = function (t, e) {
            return this._verify1(t), this.imod(t.ushln(e));
          }),
          (x.prototype.imul = function (t, e) {
            return this._verify2(t, e), this.imod(t.imul(e));
          }),
          (x.prototype.mul = function (t, e) {
            return this._verify2(t, e), this.imod(t.mul(e));
          }),
          (x.prototype.isqr = function (t) {
            return this.imul(t, t.clone());
          }),
          (x.prototype.sqr = function (t) {
            return this.mul(t, t);
          }),
          (x.prototype.sqrt = function (t) {
            if (t.isZero()) return t.clone();
            var e = this.m.andln(3);
            if ((n(e % 2 == 1), 3 === e)) {
              var r = this.m.add(new s(1)).iushrn(2);
              return this.pow(t, r);
            }
            for (var i = this.m.subn(1), o = 0; !i.isZero() && 0 === i.andln(1); ) o++, i.iushrn(1);
            n(!i.isZero());
            var a = new s(1).toRed(this),
              u = a.redNeg(),
              l = this.m.subn(1).iushrn(1),
              h = this.m.bitLength();
            for (h = new s(2 * h * h).toRed(this); 0 !== this.pow(h, l).cmp(u); ) h.redIAdd(u);
            for (
              var c = this.pow(h, i),
                d = this.pow(t, i.addn(1).iushrn(1)),
                f = this.pow(t, i),
                p = o;
              0 !== f.cmp(a);

            ) {
              for (var m = f, g = 0; 0 !== m.cmp(a); g++) m = m.redSqr();
              n(g < p);
              var v = this.pow(c, new s(1).iushln(p - g - 1));
              (d = d.redMul(v)), (c = v.redSqr()), (f = f.redMul(c)), (p = g);
            }
            return d;
          }),
          (x.prototype.invm = function (t) {
            var e = t._invmp(this.m);
            return 0 !== e.negative ? ((e.negative = 0), this.imod(e).redNeg()) : this.imod(e);
          }),
          (x.prototype.pow = function (t, e) {
            if (e.isZero()) return new s(1).toRed(this);
            if (0 === e.cmpn(1)) return t.clone();
            var r = Array(16);
            (r[0] = new s(1).toRed(this)), (r[1] = t);
            for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
            var i = r[0],
              o = 0,
              a = 0,
              u = e.bitLength() % 26;
            for (0 === u && (u = 26), n = e.length - 1; n >= 0; n--) {
              for (var l = e.words[n], h = u - 1; h >= 0; h--) {
                var c = (l >> h) & 1;
                if ((i !== r[0] && (i = this.sqr(i)), 0 === c && 0 === o)) {
                  a = 0;
                  continue;
                }
                (o <<= 1),
                  (o |= c),
                  (4 == ++a || (0 === n && 0 === h)) && ((i = this.mul(i, r[o])), (a = 0), (o = 0));
              }
              u = 26;
            }
            return i;
          }),
          (x.prototype.convertTo = function (t) {
            var e = t.umod(this.m);
            return e === t ? e.clone() : e;
          }),
          (x.prototype.convertFrom = function (t) {
            var e = t.clone();
            return (e.red = null), e;
          }),
          (s.mont = function (t) {
            return new N(t);
          }),
          i(N, x),
          (N.prototype.convertTo = function (t) {
            return this.imod(t.ushln(this.shift));
          }),
          (N.prototype.convertFrom = function (t) {
            var e = this.imod(t.mul(this.rinv));
            return (e.red = null), e;
          }),
          (N.prototype.imul = function (t, e) {
            if (t.isZero() || e.isZero()) return (t.words[0] = 0), (t.length = 1), t;
            var r = t.imul(e),
              n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              s = i;
            return (
              i.cmp(this.m) >= 0 ? (s = i.isub(this.m)) : 0 > i.cmpn(0) && (s = i.iadd(this.m)),
              s._forceRed(this)
            );
          }),
          (N.prototype.mul = function (t, e) {
            if (t.isZero() || e.isZero()) return new s(0)._forceRed(this);
            var r = t.mul(e),
              n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              o = i;
            return (
              i.cmp(this.m) >= 0 ? (o = i.isub(this.m)) : 0 > i.cmpn(0) && (o = i.iadd(this.m)),
              o._forceRed(this)
            );
          }),
          (N.prototype.invm = function (t) {
            return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })((t = r.nmd(t)), this);
    },
    20141: function (t, e, r) {
      (e.utils = r(21603)),
        (e.common = r(14984)),
        (e.sha = r(45393)),
        (e.ripemd = r(4643)),
        (e.hmac = r(53624)),
        (e.sha1 = e.sha.sha1),
        (e.sha256 = e.sha.sha256),
        (e.sha224 = e.sha.sha224),
        (e.sha384 = e.sha.sha384),
        (e.sha512 = e.sha.sha512),
        (e.ripemd160 = e.ripemd.ripemd160);
    },
    14984: function (t, e, r) {
      'use strict';
      var n = r(21603),
        i = r(5697);
      function s() {
        (this.pending = null),
          (this.pendingTotal = 0),
          (this.blockSize = this.constructor.blockSize),
          (this.outSize = this.constructor.outSize),
          (this.hmacStrength = this.constructor.hmacStrength),
          (this.padLength = this.constructor.padLength / 8),
          (this.endian = 'big'),
          (this._delta8 = this.blockSize / 8),
          (this._delta32 = this.blockSize / 32);
      }
      (e.BlockHash = s),
        (s.prototype.update = function (t, e) {
          if (
            ((t = n.toArray(t, e)),
            this.pending ? (this.pending = this.pending.concat(t)) : (this.pending = t),
            (this.pendingTotal += t.length),
            this.pending.length >= this._delta8)
          ) {
            var r = (t = this.pending).length % this._delta8;
            (this.pending = t.slice(t.length - r, t.length)),
              0 === this.pending.length && (this.pending = null),
              (t = n.join32(t, 0, t.length - r, this.endian));
            for (var i = 0; i < t.length; i += this._delta32) this._update(t, i, i + this._delta32);
          }
          return this;
        }),
        (s.prototype.digest = function (t) {
          return this.update(this._pad()), i(null === this.pending), this._digest(t);
        }),
        (s.prototype._pad = function () {
          var t = this.pendingTotal,
            e = this._delta8,
            r = e - ((t + this.padLength) % e),
            n = Array(r + this.padLength);
          n[0] = 128;
          for (var i = 1; i < r; i++) n[i] = 0;
          if (((t <<= 3), 'big' === this.endian)) {
            for (var s = 8; s < this.padLength; s++) n[i++] = 0;
            (n[i++] = 0),
              (n[i++] = 0),
              (n[i++] = 0),
              (n[i++] = 0),
              (n[i++] = (t >>> 24) & 255),
              (n[i++] = (t >>> 16) & 255),
              (n[i++] = (t >>> 8) & 255),
              (n[i++] = 255 & t);
          } else
            for (
              s = 8,
                n[i++] = 255 & t,
                n[i++] = (t >>> 8) & 255,
                n[i++] = (t >>> 16) & 255,
                n[i++] = (t >>> 24) & 255,
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = 0;
              s < this.padLength;
              s++
            )
              n[i++] = 0;
          return n;
        });
    },
    53624: function (t, e, r) {
      'use strict';
      var n = r(21603),
        i = r(5697);
      function s(t, e, r) {
        if (!(this instanceof s)) return new s(t, e, r);
        (this.Hash = t),
          (this.blockSize = t.blockSize / 8),
          (this.outSize = t.outSize / 8),
          (this.inner = null),
          (this.outer = null),
          this._init(n.toArray(e, r));
      }
      (t.exports = s),
        (s.prototype._init = function (t) {
          t.length > this.blockSize && (t = new this.Hash().update(t).digest()),
            i(t.length <= this.blockSize);
          for (var e = t.length; e < this.blockSize; e++) t.push(0);
          for (e = 0; e < t.length; e++) t[e] ^= 54;
          for (e = 0, this.inner = new this.Hash().update(t); e < t.length; e++) t[e] ^= 106;
          this.outer = new this.Hash().update(t);
        }),
        (s.prototype.update = function (t, e) {
          return this.inner.update(t, e), this;
        }),
        (s.prototype.digest = function (t) {
          return this.outer.update(this.inner.digest()), this.outer.digest(t);
        });
    },
    4643: function (t, e, r) {
      'use strict';
      var n = r(21603),
        i = r(14984),
        s = n.rotl32,
        o = n.sum32,
        a = n.sum32_3,
        u = n.sum32_4,
        l = i.BlockHash;
      function h() {
        if (!(this instanceof h)) return new h();
        l.call(this),
          (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]),
          (this.endian = 'little');
      }
      function c(t, e, r, n) {
        return t <= 15
          ? e ^ r ^ n
          : t <= 31
            ? (e & r) | (~e & n)
            : t <= 47
              ? (e | ~r) ^ n
              : t <= 63
                ? (e & n) | (r & ~n)
                : e ^ (r | ~n);
      }
      n.inherits(h, l),
        (e.ripemd160 = h),
        (h.blockSize = 512),
        (h.outSize = 160),
        (h.hmacStrength = 192),
        (h.padLength = 64),
        (h.prototype._update = function (t, e) {
          for (
            var r = this.h[0],
              n = this.h[1],
              i = this.h[2],
              l = this.h[3],
              h = this.h[4],
              g = r,
              v = n,
              y = i,
              b = l,
              w = h,
              A = 0;
            A < 80;
            A++
          ) {
            var _,
              E,
              k = o(
                s(
                  u(
                    r,
                    c(A, n, i, l),
                    t[d[A] + e],
                    (_ = A) <= 15
                      ? 0
                      : _ <= 31
                        ? 1518500249
                        : _ <= 47
                          ? 1859775393
                          : _ <= 63
                            ? 2400959708
                            : 2840853838
                  ),
                  p[A]
                ),
                h
              );
            (r = h),
              (h = l),
              (l = s(i, 10)),
              (i = n),
              (n = k),
              (k = o(
                s(
                  u(
                    g,
                    c(79 - A, v, y, b),
                    t[f[A] + e],
                    (E = A) <= 15
                      ? 1352829926
                      : E <= 31
                        ? 1548603684
                        : E <= 47
                          ? 1836072691
                          : E <= 63
                            ? 2053994217
                            : 0
                  ),
                  m[A]
                ),
                w
              )),
              (g = w),
              (w = b),
              (b = s(y, 10)),
              (y = v),
              (v = k);
          }
          (k = a(this.h[1], i, b)),
            (this.h[1] = a(this.h[2], l, w)),
            (this.h[2] = a(this.h[3], h, g)),
            (this.h[3] = a(this.h[4], r, v)),
            (this.h[4] = a(this.h[0], n, y)),
            (this.h[0] = k);
        }),
        (h.prototype._digest = function (t) {
          return 'hex' === t ? n.toHex32(this.h, 'little') : n.split32(this.h, 'little');
        });
      var d = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9,
          5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8,
          12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
        ],
        f = [
          5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15,
          8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3,
          11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9,
          11,
        ],
        p = [
          11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12,
          15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14,
          15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11,
          8, 5, 6,
        ],
        m = [
          8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7,
          12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8,
          11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15,
          13, 11, 11,
        ];
    },
    45393: function (t, e, r) {
      'use strict';
      (e.sha1 = r(28635)),
        (e.sha224 = r(79258)),
        (e.sha256 = r(73270)),
        (e.sha384 = r(47008)),
        (e.sha512 = r(27176));
    },
    28635: function (t, e, r) {
      'use strict';
      var n = r(21603),
        i = r(14984),
        s = r(82085),
        o = n.rotl32,
        a = n.sum32,
        u = n.sum32_5,
        l = s.ft_1,
        h = i.BlockHash,
        c = [1518500249, 1859775393, 2400959708, 3395469782];
      function d() {
        if (!(this instanceof d)) return new d();
        h.call(this),
          (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]),
          (this.W = Array(80));
      }
      n.inherits(d, h),
        (t.exports = d),
        (d.blockSize = 512),
        (d.outSize = 160),
        (d.hmacStrength = 80),
        (d.padLength = 64),
        (d.prototype._update = function (t, e) {
          for (var r = this.W, n = 0; n < 16; n++) r[n] = t[e + n];
          for (; n < r.length; n++) r[n] = o(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
          var i = this.h[0],
            s = this.h[1],
            h = this.h[2],
            d = this.h[3],
            f = this.h[4];
          for (n = 0; n < r.length; n++) {
            var p = ~~(n / 20),
              m = u(o(i, 5), l(p, s, h, d), f, r[n], c[p]);
            (f = d), (d = h), (h = o(s, 30)), (s = i), (i = m);
          }
          (this.h[0] = a(this.h[0], i)),
            (this.h[1] = a(this.h[1], s)),
            (this.h[2] = a(this.h[2], h)),
            (this.h[3] = a(this.h[3], d)),
            (this.h[4] = a(this.h[4], f));
        }),
        (d.prototype._digest = function (t) {
          return 'hex' === t ? n.toHex32(this.h, 'big') : n.split32(this.h, 'big');
        });
    },
    79258: function (t, e, r) {
      'use strict';
      var n = r(21603),
        i = r(73270);
      function s() {
        if (!(this instanceof s)) return new s();
        i.call(this),
          (this.h = [
            3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839,
            3204075428,
          ]);
      }
      n.inherits(s, i),
        (t.exports = s),
        (s.blockSize = 512),
        (s.outSize = 224),
        (s.hmacStrength = 192),
        (s.padLength = 64),
        (s.prototype._digest = function (t) {
          return 'hex' === t
            ? n.toHex32(this.h.slice(0, 7), 'big')
            : n.split32(this.h.slice(0, 7), 'big');
        });
    },
    73270: function (t, e, r) {
      'use strict';
      var n = r(21603),
        i = r(14984),
        s = r(82085),
        o = r(5697),
        a = n.sum32,
        u = n.sum32_4,
        l = n.sum32_5,
        h = s.ch32,
        c = s.maj32,
        d = s.s0_256,
        f = s.s1_256,
        p = s.g0_256,
        m = s.g1_256,
        g = i.BlockHash,
        v = [
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
        ];
      function y() {
        if (!(this instanceof y)) return new y();
        g.call(this),
          (this.h = [
            1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635,
            1541459225,
          ]),
          (this.k = v),
          (this.W = Array(64));
      }
      n.inherits(y, g),
        (t.exports = y),
        (y.blockSize = 512),
        (y.outSize = 256),
        (y.hmacStrength = 192),
        (y.padLength = 64),
        (y.prototype._update = function (t, e) {
          for (var r = this.W, n = 0; n < 16; n++) r[n] = t[e + n];
          for (; n < r.length; n++) r[n] = u(m(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16]);
          var i = this.h[0],
            s = this.h[1],
            g = this.h[2],
            v = this.h[3],
            y = this.h[4],
            b = this.h[5],
            w = this.h[6],
            A = this.h[7];
          for (o(this.k.length === r.length), n = 0; n < r.length; n++) {
            var _ = l(A, f(y), h(y, b, w), this.k[n], r[n]),
              E = a(d(i), c(i, s, g));
            (A = w), (w = b), (b = y), (y = a(v, _)), (v = g), (g = s), (s = i), (i = a(_, E));
          }
          (this.h[0] = a(this.h[0], i)),
            (this.h[1] = a(this.h[1], s)),
            (this.h[2] = a(this.h[2], g)),
            (this.h[3] = a(this.h[3], v)),
            (this.h[4] = a(this.h[4], y)),
            (this.h[5] = a(this.h[5], b)),
            (this.h[6] = a(this.h[6], w)),
            (this.h[7] = a(this.h[7], A));
        }),
        (y.prototype._digest = function (t) {
          return 'hex' === t ? n.toHex32(this.h, 'big') : n.split32(this.h, 'big');
        });
    },
    47008: function (t, e, r) {
      'use strict';
      var n = r(21603),
        i = r(27176);
      function s() {
        if (!(this instanceof s)) return new s();
        i.call(this),
          (this.h = [
            3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360,
            4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839,
            1203062813, 3204075428,
          ]);
      }
      n.inherits(s, i),
        (t.exports = s),
        (s.blockSize = 1024),
        (s.outSize = 384),
        (s.hmacStrength = 192),
        (s.padLength = 128),
        (s.prototype._digest = function (t) {
          return 'hex' === t
            ? n.toHex32(this.h.slice(0, 12), 'big')
            : n.split32(this.h.slice(0, 12), 'big');
        });
    },
    27176: function (t, e, r) {
      'use strict';
      var n = r(21603),
        i = r(14984),
        s = r(5697),
        o = n.rotr64_hi,
        a = n.rotr64_lo,
        u = n.shr64_hi,
        l = n.shr64_lo,
        h = n.sum64,
        c = n.sum64_hi,
        d = n.sum64_lo,
        f = n.sum64_4_hi,
        p = n.sum64_4_lo,
        m = n.sum64_5_hi,
        g = n.sum64_5_lo,
        v = i.BlockHash,
        y = [
          1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573,
          2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579,
          2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278,
          1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113,
          2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774,
          944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
          1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882,
          3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956,
          3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895,
          168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485,
          1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350,
          1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
          3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804,
          1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752,
          506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571,
          3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899,
          1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424,
          442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
          3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606,
          3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270,
          289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851,
          1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948,
          4234509866, 1607167915, 987167468, 1816402316, 1246189591,
        ];
      function b() {
        if (!(this instanceof b)) return new b();
        v.call(this),
          (this.h = [
            1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762,
            1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547,
            1541459225, 327033209,
          ]),
          (this.k = y),
          (this.W = Array(160));
      }
      n.inherits(b, v),
        (t.exports = b),
        (b.blockSize = 1024),
        (b.outSize = 512),
        (b.hmacStrength = 192),
        (b.padLength = 128),
        (b.prototype._prepareBlock = function (t, e) {
          for (var r = this.W, n = 0; n < 32; n++) r[n] = t[e + n];
          for (; n < r.length; n += 2) {
            var i = (function (t, e) {
                var r = o(t, e, 19) ^ o(e, t, 29) ^ u(t, e, 6);
                return r < 0 && (r += 4294967296), r;
              })(r[n - 4], r[n - 3]),
              s = (function (t, e) {
                var r = a(t, e, 19) ^ a(e, t, 29) ^ l(t, e, 6);
                return r < 0 && (r += 4294967296), r;
              })(r[n - 4], r[n - 3]),
              h = r[n - 14],
              c = r[n - 13],
              d = (function (t, e) {
                var r = o(t, e, 1) ^ o(t, e, 8) ^ u(t, e, 7);
                return r < 0 && (r += 4294967296), r;
              })(r[n - 30], r[n - 29]),
              m = (function (t, e) {
                var r = a(t, e, 1) ^ a(t, e, 8) ^ l(t, e, 7);
                return r < 0 && (r += 4294967296), r;
              })(r[n - 30], r[n - 29]),
              g = r[n - 32],
              v = r[n - 31];
            (r[n] = f(i, s, h, c, d, m, g, v)), (r[n + 1] = p(i, s, h, c, d, m, g, v));
          }
        }),
        (b.prototype._update = function (t, e) {
          this._prepareBlock(t, e);
          var r = this.W,
            n = this.h[0],
            i = this.h[1],
            u = this.h[2],
            l = this.h[3],
            f = this.h[4],
            p = this.h[5],
            v = this.h[6],
            y = this.h[7],
            b = this.h[8],
            w = this.h[9],
            A = this.h[10],
            _ = this.h[11],
            E = this.h[12],
            k = this.h[13],
            x = this.h[14],
            N = this.h[15];
          s(this.k.length === r.length);
          for (var M = 0; M < r.length; M += 2) {
            var I = x,
              P = N,
              S = (function (t, e) {
                var r = o(t, e, 14) ^ o(t, e, 18) ^ o(e, t, 9);
                return r < 0 && (r += 4294967296), r;
              })(b, w),
              C = (function (t, e) {
                var r = a(t, e, 14) ^ a(t, e, 18) ^ a(e, t, 9);
                return r < 0 && (r += 4294967296), r;
              })(b, w),
              T = (function (t, e, r, n, i) {
                var s = (t & r) ^ (~t & i);
                return s < 0 && (s += 4294967296), s;
              })(b, 0, A, 0, E, k),
              R = (function (t, e, r, n, i, s) {
                var o = (e & n) ^ (~e & s);
                return o < 0 && (o += 4294967296), o;
              })(0, w, 0, _, 0, k),
              O = this.k[M],
              B = this.k[M + 1],
              D = r[M],
              L = r[M + 1],
              U = m(I, P, S, C, T, R, O, B, D, L),
              F = g(I, P, S, C, T, R, O, B, D, L);
            I = (function (t, e) {
              var r = o(t, e, 28) ^ o(e, t, 2) ^ o(e, t, 7);
              return r < 0 && (r += 4294967296), r;
            })(n, i);
            var G = c(
                I,
                (P = (function (t, e) {
                  var r = a(t, e, 28) ^ a(e, t, 2) ^ a(e, t, 7);
                  return r < 0 && (r += 4294967296), r;
                })(n, i)),
                (S = (function (t, e, r, n, i) {
                  var s = (t & r) ^ (t & i) ^ (r & i);
                  return s < 0 && (s += 4294967296), s;
                })(n, 0, u, 0, f, p)),
                (C = (function (t, e, r, n, i, s) {
                  var o = (e & n) ^ (e & s) ^ (n & s);
                  return o < 0 && (o += 4294967296), o;
                })(0, i, 0, l, 0, p))
              ),
              z = d(I, P, S, C);
            (x = E),
              (N = k),
              (E = A),
              (k = _),
              (A = b),
              (_ = w),
              (b = c(v, y, U, F)),
              (w = d(y, y, U, F)),
              (v = f),
              (y = p),
              (f = u),
              (p = l),
              (u = n),
              (l = i),
              (n = c(U, F, G, z)),
              (i = d(U, F, G, z));
          }
          h(this.h, 0, n, i),
            h(this.h, 2, u, l),
            h(this.h, 4, f, p),
            h(this.h, 6, v, y),
            h(this.h, 8, b, w),
            h(this.h, 10, A, _),
            h(this.h, 12, E, k),
            h(this.h, 14, x, N);
        }),
        (b.prototype._digest = function (t) {
          return 'hex' === t ? n.toHex32(this.h, 'big') : n.split32(this.h, 'big');
        });
    },
    82085: function (t, e, r) {
      'use strict';
      var n = r(21603).rotr32;
      function i(t, e, r) {
        return (t & e) ^ (t & r) ^ (e & r);
      }
      (e.ft_1 = function (t, e, r, n) {
        return 0 === t
          ? (e & r) ^ (~e & n)
          : 1 === t || 3 === t
            ? e ^ r ^ n
            : 2 === t
              ? i(e, r, n)
              : void 0;
      }),
        (e.ch32 = function (t, e, r) {
          return (t & e) ^ (~t & r);
        }),
        (e.maj32 = i),
        (e.p32 = function (t, e, r) {
          return t ^ e ^ r;
        }),
        (e.s0_256 = function (t) {
          return n(t, 2) ^ n(t, 13) ^ n(t, 22);
        }),
        (e.s1_256 = function (t) {
          return n(t, 6) ^ n(t, 11) ^ n(t, 25);
        }),
        (e.g0_256 = function (t) {
          return n(t, 7) ^ n(t, 18) ^ (t >>> 3);
        }),
        (e.g1_256 = function (t) {
          return n(t, 17) ^ n(t, 19) ^ (t >>> 10);
        });
    },
    21603: function (t, e, r) {
      'use strict';
      var n = r(5697),
        i = r(55566);
      function s(t) {
        return ((t >>> 24) | ((t >>> 8) & 65280) | ((t << 8) & 16711680) | ((255 & t) << 24)) >>> 0;
      }
      function o(t) {
        return 1 === t.length ? '0' + t : t;
      }
      function a(t) {
        if (7 === t.length) return '0' + t;
        if (6 === t.length) return '00' + t;
        if (5 === t.length) return '000' + t;
        if (4 === t.length) return '0000' + t;
        if (3 === t.length) return '00000' + t;
        if (2 === t.length) return '000000' + t;
        if (1 === t.length) return '0000000' + t;
        else return t;
      }
      (e.inherits = i),
        (e.toArray = function (t, e) {
          if (Array.isArray(t)) return t.slice();
          if (!t) return [];
          var r = [];
          if ('string' == typeof t) {
            if (e) {
              if ('hex' === e)
                for (
                  (t = t.replace(/[^a-z0-9]+/gi, '')).length % 2 != 0 && (t = '0' + t), i = 0;
                  i < t.length;
                  i += 2
                )
                  r.push(parseInt(t[i] + t[i + 1], 16));
            } else
              for (var n = 0, i = 0; i < t.length; i++) {
                var s,
                  o,
                  a = t.charCodeAt(i);
                a < 128
                  ? (r[n++] = a)
                  : (a < 2048
                      ? (r[n++] = (a >> 6) | 192)
                      : (((s = t),
                        (o = i),
                        (64512 & s.charCodeAt(o)) != 55296 || o < 0 || o + 1 >= s.length
                          ? 1
                          : (64512 & s.charCodeAt(o + 1)) != 56320)
                          ? (r[n++] = (a >> 12) | 224)
                          : ((a = 65536 + ((1023 & a) << 10) + (1023 & t.charCodeAt(++i))),
                            (r[n++] = (a >> 18) | 240),
                            (r[n++] = ((a >> 12) & 63) | 128)),
                        (r[n++] = ((a >> 6) & 63) | 128)),
                    (r[n++] = (63 & a) | 128));
              }
          } else for (i = 0; i < t.length; i++) r[i] = 0 | t[i];
          return r;
        }),
        (e.toHex = function (t) {
          for (var e = '', r = 0; r < t.length; r++) e += o(t[r].toString(16));
          return e;
        }),
        (e.htonl = s),
        (e.toHex32 = function (t, e) {
          for (var r = '', n = 0; n < t.length; n++) {
            var i = t[n];
            'little' === e && (i = s(i)), (r += a(i.toString(16)));
          }
          return r;
        }),
        (e.zero2 = o),
        (e.zero8 = a),
        (e.join32 = function (t, e, r, i) {
          var s,
            o = r - e;
          n(o % 4 == 0);
          for (var a = Array(o / 4), u = 0, l = e; u < a.length; u++, l += 4)
            (s =
              'big' === i
                ? (t[l] << 24) | (t[l + 1] << 16) | (t[l + 2] << 8) | t[l + 3]
                : (t[l + 3] << 24) | (t[l + 2] << 16) | (t[l + 1] << 8) | t[l]),
              (a[u] = s >>> 0);
          return a;
        }),
        (e.split32 = function (t, e) {
          for (var r = Array(4 * t.length), n = 0, i = 0; n < t.length; n++, i += 4) {
            var s = t[n];
            'big' === e
              ? ((r[i] = s >>> 24),
                (r[i + 1] = (s >>> 16) & 255),
                (r[i + 2] = (s >>> 8) & 255),
                (r[i + 3] = 255 & s))
              : ((r[i + 3] = s >>> 24),
                (r[i + 2] = (s >>> 16) & 255),
                (r[i + 1] = (s >>> 8) & 255),
                (r[i] = 255 & s));
          }
          return r;
        }),
        (e.rotr32 = function (t, e) {
          return (t >>> e) | (t << (32 - e));
        }),
        (e.rotl32 = function (t, e) {
          return (t << e) | (t >>> (32 - e));
        }),
        (e.sum32 = function (t, e) {
          return (t + e) >>> 0;
        }),
        (e.sum32_3 = function (t, e, r) {
          return (t + e + r) >>> 0;
        }),
        (e.sum32_4 = function (t, e, r, n) {
          return (t + e + r + n) >>> 0;
        }),
        (e.sum32_5 = function (t, e, r, n, i) {
          return (t + e + r + n + i) >>> 0;
        }),
        (e.sum64 = function (t, e, r, n) {
          var i = t[e],
            s = (n + t[e + 1]) >>> 0;
          (t[e] = ((s < n ? 1 : 0) + r + i) >>> 0), (t[e + 1] = s);
        }),
        (e.sum64_hi = function (t, e, r, n) {
          return (((e + n) >>> 0 < e ? 1 : 0) + t + r) >>> 0;
        }),
        (e.sum64_lo = function (t, e, r, n) {
          return (e + n) >>> 0;
        }),
        (e.sum64_4_hi = function (t, e, r, n, i, s, o, a) {
          var u,
            l = e;
          return (
            (t +
              r +
              i +
              o +
              (0 +
                ((l = (l + n) >>> 0) < e ? 1 : 0) +
                ((l = (l + s) >>> 0) < s ? 1 : 0) +
                ((l = (l + a) >>> 0) < a ? 1 : 0))) >>>
            0
          );
        }),
        (e.sum64_4_lo = function (t, e, r, n, i, s, o, a) {
          return (e + n + s + a) >>> 0;
        }),
        (e.sum64_5_hi = function (t, e, r, n, i, s, o, a, u, l) {
          var h,
            c = e;
          return (
            (t +
              r +
              i +
              o +
              u +
              (0 +
                ((c = (c + n) >>> 0) < e ? 1 : 0) +
                ((c = (c + s) >>> 0) < s ? 1 : 0) +
                ((c = (c + a) >>> 0) < a ? 1 : 0) +
                ((c = (c + l) >>> 0) < l ? 1 : 0))) >>>
            0
          );
        }),
        (e.sum64_5_lo = function (t, e, r, n, i, s, o, a, u, l) {
          return (e + n + s + a + l) >>> 0;
        }),
        (e.rotr64_hi = function (t, e, r) {
          return ((e << (32 - r)) | (t >>> r)) >>> 0;
        }),
        (e.rotr64_lo = function (t, e, r) {
          return ((t << (32 - r)) | (e >>> r)) >>> 0;
        }),
        (e.shr64_hi = function (t, e, r) {
          return t >>> r;
        }),
        (e.shr64_lo = function (t, e, r) {
          return ((t << (32 - r)) | (e >>> r)) >>> 0;
        });
    },
    55566: function (t) {
      'function' == typeof Object.create
        ? (t.exports = function (t, e) {
            e &&
              ((t.super_ = e),
              (t.prototype = Object.create(e.prototype, {
                constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
              })));
          })
        : (t.exports = function (t, e) {
            if (e) {
              t.super_ = e;
              var r = function () {};
              (r.prototype = e.prototype), (t.prototype = new r()), (t.prototype.constructor = t);
            }
          });
    },
    58728: function (t, e, r) {
      var n,
        i = r(76896);
      !(function () {
        'use strict';
        var s = 'input is invalid type',
          o = 'object' == typeof window,
          a = o ? window : {};
        a.JS_SHA3_NO_WINDOW && (o = !1);
        var u = !o && 'object' == typeof self;
        !a.JS_SHA3_NO_NODE_JS && 'object' == typeof i && i.versions && i.versions.node
          ? (a = r.g)
          : u && (a = self);
        var l = !a.JS_SHA3_NO_COMMON_JS && t.exports,
          h = r.amdO,
          c = !a.JS_SHA3_NO_ARRAY_BUFFER && 'undefined' != typeof ArrayBuffer,
          d = '0123456789abcdef'.split(''),
          f = [4, 1024, 262144, 67108864],
          p = [0, 8, 16, 24],
          m = [
            1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0,
            2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0,
            2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648,
            128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896,
            2147483648, 2147483649, 0, 2147516424, 2147483648,
          ],
          g = [224, 256, 384, 512],
          v = [128, 256],
          y = ['hex', 'buffer', 'arrayBuffer', 'array', 'digest'],
          b = { 128: 168, 256: 136 };
        (a.JS_SHA3_NO_NODE_JS || !Array.isArray) &&
          (Array.isArray = function (t) {
            return '[object Array]' === Object.prototype.toString.call(t);
          }),
          c &&
            (a.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) &&
            (ArrayBuffer.isView = function (t) {
              return 'object' == typeof t && t.buffer && t.buffer.constructor === ArrayBuffer;
            });
        for (
          var w = function (t, e, r) {
              return function (n) {
                return new B(t, e, t).update(n)[r]();
              };
            },
            A = function (t, e, r) {
              return function (n, i) {
                return new B(t, e, i).update(n)[r]();
              };
            },
            _ = function (t, e, r) {
              return function (e, n, i, s) {
                return M['cshake' + t].update(e, n, i, s)[r]();
              };
            },
            E = function (t, e, r) {
              return function (e, n, i, s) {
                return M['kmac' + t].update(e, n, i, s)[r]();
              };
            },
            k = function (t, e, r, n) {
              for (var i = 0; i < y.length; ++i) {
                var s = y[i];
                t[s] = e(r, n, s);
              }
              return t;
            },
            x = function (t, e) {
              var r = w(t, e, 'hex');
              return (
                (r.create = function () {
                  return new B(t, e, t);
                }),
                (r.update = function (t) {
                  return r.create().update(t);
                }),
                k(r, w, t, e)
              );
            },
            N = [
              { name: 'keccak', padding: [1, 256, 65536, 16777216], bits: g, createMethod: x },
              { name: 'sha3', padding: [6, 1536, 393216, 100663296], bits: g, createMethod: x },
              {
                name: 'shake',
                padding: [31, 7936, 2031616, 520093696],
                bits: v,
                createMethod: function (t, e) {
                  var r = A(t, e, 'hex');
                  return (
                    (r.create = function (r) {
                      return new B(t, e, r);
                    }),
                    (r.update = function (t, e) {
                      return r.create(e).update(t);
                    }),
                    k(r, A, t, e)
                  );
                },
              },
              {
                name: 'cshake',
                padding: f,
                bits: v,
                createMethod: function (t, e) {
                  var r = b[t],
                    n = _(t, e, 'hex');
                  return (
                    (n.create = function (n, i, s) {
                      return i || s ? new B(t, e, n).bytepad([i, s], r) : M['shake' + t].create(n);
                    }),
                    (n.update = function (t, e, r, i) {
                      return n.create(e, r, i).update(t);
                    }),
                    k(n, _, t, e)
                  );
                },
              },
              {
                name: 'kmac',
                padding: f,
                bits: v,
                createMethod: function (t, e) {
                  var r = b[t],
                    n = E(t, e, 'hex');
                  return (
                    (n.create = function (n, i, s) {
                      return new D(t, e, i).bytepad(['KMAC', s], r).bytepad([n], r);
                    }),
                    (n.update = function (t, e, r, i) {
                      return n.create(t, r, i).update(e);
                    }),
                    k(n, E, t, e)
                  );
                },
              },
            ],
            M = {},
            I = [],
            P = 0;
          P < N.length;
          ++P
        )
          for (var S = N[P], C = S.bits, T = 0; T < C.length; ++T) {
            var R = S.name + '_' + C[T];
            if ((I.push(R), (M[R] = S.createMethod(C[T], S.padding)), 'sha3' !== S.name)) {
              var O = S.name + C[T];
              I.push(O), (M[O] = M[R]);
            }
          }
        function B(t, e, r) {
          (this.blocks = []),
            (this.s = []),
            (this.padding = e),
            (this.outputBits = r),
            (this.reset = !0),
            (this.finalized = !1),
            (this.block = 0),
            (this.start = 0),
            (this.blockCount = (1600 - (t << 1)) >> 5),
            (this.byteCount = this.blockCount << 2),
            (this.outputBlocks = r >> 5),
            (this.extraBytes = (31 & r) >> 3);
          for (var n = 0; n < 50; ++n) this.s[n] = 0;
        }
        function D(t, e, r) {
          B.call(this, t, e, r);
        }
        (B.prototype.update = function (t) {
          if (this.finalized) throw Error('finalize already called');
          var e,
            r = typeof t;
          if ('string' !== r) {
            if ('object' === r) {
              if (null === t) throw Error(s);
              if (c && t.constructor === ArrayBuffer) t = new Uint8Array(t);
              else if (!Array.isArray(t) && (!c || !ArrayBuffer.isView(t))) throw Error(s);
            } else throw Error(s);
            e = !0;
          }
          for (
            var n,
              i,
              o = this.blocks,
              a = this.byteCount,
              u = t.length,
              l = this.blockCount,
              h = 0,
              d = this.s;
            h < u;

          ) {
            if (this.reset)
              for (n = 1, this.reset = !1, o[0] = this.block; n < l + 1; ++n) o[n] = 0;
            if (e) for (n = this.start; h < u && n < a; ++h) o[n >> 2] |= t[h] << p[3 & n++];
            else
              for (n = this.start; h < u && n < a; ++h)
                (i = t.charCodeAt(h)) < 128
                  ? (o[n >> 2] |= i << p[3 & n++])
                  : (i < 2048
                      ? (o[n >> 2] |= (192 | (i >> 6)) << p[3 & n++])
                      : (i < 55296 || i >= 57344
                          ? (o[n >> 2] |= (224 | (i >> 12)) << p[3 & n++])
                          : ((i = 65536 + (((1023 & i) << 10) | (1023 & t.charCodeAt(++h)))),
                            (o[n >> 2] |= (240 | (i >> 18)) << p[3 & n++]),
                            (o[n >> 2] |= (128 | ((i >> 12) & 63)) << p[3 & n++])),
                        (o[n >> 2] |= (128 | ((i >> 6) & 63)) << p[3 & n++])),
                    (o[n >> 2] |= (128 | (63 & i)) << p[3 & n++]));
            if (((this.lastByteIndex = n), n >= a)) {
              for (this.start = n - a, this.block = o[l], n = 0; n < l; ++n) d[n] ^= o[n];
              L(d), (this.reset = !0);
            } else this.start = n;
          }
          return this;
        }),
          (B.prototype.encode = function (t, e) {
            var r = 255 & t,
              n = 1,
              i = [r];
            for (t >>= 8, r = 255 & t; r > 0; ) i.unshift(r), (t >>= 8), (r = 255 & t), ++n;
            return e ? i.push(n) : i.unshift(n), this.update(i), i.length;
          }),
          (B.prototype.encodeString = function (t) {
            var e,
              r = typeof t;
            if ('string' !== r) {
              if ('object' === r) {
                if (null === t) throw Error(s);
                if (c && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                else if (!Array.isArray(t) && (!c || !ArrayBuffer.isView(t))) throw Error(s);
              } else throw Error(s);
              e = !0;
            }
            var n = 0,
              i = t.length;
            if (e) n = i;
            else
              for (var o = 0; o < t.length; ++o) {
                var a = t.charCodeAt(o);
                a < 128
                  ? (n += 1)
                  : a < 2048
                    ? (n += 2)
                    : a < 55296 || a >= 57344
                      ? (n += 3)
                      : ((a = 65536 + (((1023 & a) << 10) | (1023 & t.charCodeAt(++o)))), (n += 4));
              }
            return (n += this.encode(8 * n)), this.update(t), n;
          }),
          (B.prototype.bytepad = function (t, e) {
            for (var r = this.encode(e), n = 0; n < t.length; ++n) r += this.encodeString(t[n]);
            var i = e - (r % e),
              s = [];
            return (s.length = i), this.update(s), this;
          }),
          (B.prototype.finalize = function () {
            if (!this.finalized) {
              this.finalized = !0;
              var t = this.blocks,
                e = this.lastByteIndex,
                r = this.blockCount,
                n = this.s;
              if (((t[e >> 2] |= this.padding[3 & e]), this.lastByteIndex === this.byteCount))
                for (e = 1, t[0] = t[r]; e < r + 1; ++e) t[e] = 0;
              for (t[r - 1] |= 2147483648, e = 0; e < r; ++e) n[e] ^= t[e];
              L(n);
            }
          }),
          (B.prototype.toString = B.prototype.hex =
            function () {
              this.finalize();
              for (
                var t,
                  e = this.blockCount,
                  r = this.s,
                  n = this.outputBlocks,
                  i = this.extraBytes,
                  s = 0,
                  o = 0,
                  a = '';
                o < n;

              ) {
                for (s = 0; s < e && o < n; ++s, ++o)
                  a +=
                    d[((t = r[s]) >> 4) & 15] +
                    d[15 & t] +
                    d[(t >> 12) & 15] +
                    d[(t >> 8) & 15] +
                    d[(t >> 20) & 15] +
                    d[(t >> 16) & 15] +
                    d[(t >> 28) & 15] +
                    d[(t >> 24) & 15];
                o % e == 0 && (L(r), (s = 0));
              }
              return (
                i &&
                  ((a += d[((t = r[s]) >> 4) & 15] + d[15 & t]),
                  i > 1 && (a += d[(t >> 12) & 15] + d[(t >> 8) & 15]),
                  i > 2 && (a += d[(t >> 20) & 15] + d[(t >> 16) & 15])),
                a
              );
            }),
          (B.prototype.arrayBuffer = function () {
            this.finalize();
            var t,
              e = this.blockCount,
              r = this.s,
              n = this.outputBlocks,
              i = this.extraBytes,
              s = 0,
              o = 0,
              a = this.outputBits >> 3;
            t = new ArrayBuffer(i ? (n + 1) << 2 : a);
            for (var u = new Uint32Array(t); o < n; ) {
              for (s = 0; s < e && o < n; ++s, ++o) u[o] = r[s];
              o % e == 0 && L(r);
            }
            return i && ((u[s] = r[s]), (t = t.slice(0, a))), t;
          }),
          (B.prototype.buffer = B.prototype.arrayBuffer),
          (B.prototype.digest = B.prototype.array =
            function () {
              this.finalize();
              for (
                var t,
                  e,
                  r = this.blockCount,
                  n = this.s,
                  i = this.outputBlocks,
                  s = this.extraBytes,
                  o = 0,
                  a = 0,
                  u = [];
                a < i;

              ) {
                for (o = 0; o < r && a < i; ++o, ++a)
                  (t = a << 2),
                    (e = n[o]),
                    (u[t] = 255 & e),
                    (u[t + 1] = (e >> 8) & 255),
                    (u[t + 2] = (e >> 16) & 255),
                    (u[t + 3] = (e >> 24) & 255);
                a % r == 0 && L(n);
              }
              return (
                s &&
                  ((t = a << 2),
                  (e = n[o]),
                  (u[t] = 255 & e),
                  s > 1 && (u[t + 1] = (e >> 8) & 255),
                  s > 2 && (u[t + 2] = (e >> 16) & 255)),
                u
              );
            }),
          (D.prototype = new B()),
          (D.prototype.finalize = function () {
            return this.encode(this.outputBits, !0), B.prototype.finalize.call(this);
          });
        var L = function (t) {
          var e,
            r,
            n,
            i,
            s,
            o,
            a,
            u,
            l,
            h,
            c,
            d,
            f,
            p,
            g,
            v,
            y,
            b,
            w,
            A,
            _,
            E,
            k,
            x,
            N,
            M,
            I,
            P,
            S,
            C,
            T,
            R,
            O,
            B,
            D,
            L,
            U,
            F,
            G,
            z,
            Z,
            Y,
            q,
            j,
            H,
            K,
            J,
            Q,
            V,
            W,
            X,
            $,
            tt,
            te,
            tr,
            tn,
            ti,
            ts,
            to,
            ta,
            tu,
            tl,
            th;
          for (n = 0; n < 48; n += 2)
            (i = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40]),
              (s = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41]),
              (o = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42]),
              (a = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43]),
              (u = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44]),
              (l = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45]),
              (h = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46]),
              (c = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47]),
              (d = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48]),
              (f = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49]),
              (e = d ^ ((o << 1) | (a >>> 31))),
              (r = f ^ ((a << 1) | (o >>> 31))),
              (t[0] ^= e),
              (t[1] ^= r),
              (t[10] ^= e),
              (t[11] ^= r),
              (t[20] ^= e),
              (t[21] ^= r),
              (t[30] ^= e),
              (t[31] ^= r),
              (t[40] ^= e),
              (t[41] ^= r),
              (e = i ^ ((u << 1) | (l >>> 31))),
              (r = s ^ ((l << 1) | (u >>> 31))),
              (t[2] ^= e),
              (t[3] ^= r),
              (t[12] ^= e),
              (t[13] ^= r),
              (t[22] ^= e),
              (t[23] ^= r),
              (t[32] ^= e),
              (t[33] ^= r),
              (t[42] ^= e),
              (t[43] ^= r),
              (e = o ^ ((h << 1) | (c >>> 31))),
              (r = a ^ ((c << 1) | (h >>> 31))),
              (t[4] ^= e),
              (t[5] ^= r),
              (t[14] ^= e),
              (t[15] ^= r),
              (t[24] ^= e),
              (t[25] ^= r),
              (t[34] ^= e),
              (t[35] ^= r),
              (t[44] ^= e),
              (t[45] ^= r),
              (e = u ^ ((d << 1) | (f >>> 31))),
              (r = l ^ ((f << 1) | (d >>> 31))),
              (t[6] ^= e),
              (t[7] ^= r),
              (t[16] ^= e),
              (t[17] ^= r),
              (t[26] ^= e),
              (t[27] ^= r),
              (t[36] ^= e),
              (t[37] ^= r),
              (t[46] ^= e),
              (t[47] ^= r),
              (e = h ^ ((i << 1) | (s >>> 31))),
              (r = c ^ ((s << 1) | (i >>> 31))),
              (t[8] ^= e),
              (t[9] ^= r),
              (t[18] ^= e),
              (t[19] ^= r),
              (t[28] ^= e),
              (t[29] ^= r),
              (t[38] ^= e),
              (t[39] ^= r),
              (t[48] ^= e),
              (t[49] ^= r),
              (p = t[0]),
              (g = t[1]),
              (K = (t[11] << 4) | (t[10] >>> 28)),
              (J = (t[10] << 4) | (t[11] >>> 28)),
              (P = (t[20] << 3) | (t[21] >>> 29)),
              (S = (t[21] << 3) | (t[20] >>> 29)),
              (ta = (t[31] << 9) | (t[30] >>> 23)),
              (tu = (t[30] << 9) | (t[31] >>> 23)),
              (Y = (t[40] << 18) | (t[41] >>> 14)),
              (q = (t[41] << 18) | (t[40] >>> 14)),
              (B = (t[2] << 1) | (t[3] >>> 31)),
              (D = (t[3] << 1) | (t[2] >>> 31)),
              (v = (t[13] << 12) | (t[12] >>> 20)),
              (y = (t[12] << 12) | (t[13] >>> 20)),
              (Q = (t[22] << 10) | (t[23] >>> 22)),
              (V = (t[23] << 10) | (t[22] >>> 22)),
              (C = (t[33] << 13) | (t[32] >>> 19)),
              (T = (t[32] << 13) | (t[33] >>> 19)),
              (tl = (t[42] << 2) | (t[43] >>> 30)),
              (th = (t[43] << 2) | (t[42] >>> 30)),
              (te = (t[5] << 30) | (t[4] >>> 2)),
              (tr = (t[4] << 30) | (t[5] >>> 2)),
              (L = (t[14] << 6) | (t[15] >>> 26)),
              (U = (t[15] << 6) | (t[14] >>> 26)),
              (b = (t[25] << 11) | (t[24] >>> 21)),
              (w = (t[24] << 11) | (t[25] >>> 21)),
              (W = (t[34] << 15) | (t[35] >>> 17)),
              (X = (t[35] << 15) | (t[34] >>> 17)),
              (R = (t[45] << 29) | (t[44] >>> 3)),
              (O = (t[44] << 29) | (t[45] >>> 3)),
              (x = (t[6] << 28) | (t[7] >>> 4)),
              (N = (t[7] << 28) | (t[6] >>> 4)),
              (tn = (t[17] << 23) | (t[16] >>> 9)),
              (ti = (t[16] << 23) | (t[17] >>> 9)),
              (F = (t[26] << 25) | (t[27] >>> 7)),
              (G = (t[27] << 25) | (t[26] >>> 7)),
              (A = (t[36] << 21) | (t[37] >>> 11)),
              (_ = (t[37] << 21) | (t[36] >>> 11)),
              ($ = (t[47] << 24) | (t[46] >>> 8)),
              (tt = (t[46] << 24) | (t[47] >>> 8)),
              (j = (t[8] << 27) | (t[9] >>> 5)),
              (H = (t[9] << 27) | (t[8] >>> 5)),
              (M = (t[18] << 20) | (t[19] >>> 12)),
              (I = (t[19] << 20) | (t[18] >>> 12)),
              (ts = (t[29] << 7) | (t[28] >>> 25)),
              (to = (t[28] << 7) | (t[29] >>> 25)),
              (z = (t[38] << 8) | (t[39] >>> 24)),
              (Z = (t[39] << 8) | (t[38] >>> 24)),
              (E = (t[48] << 14) | (t[49] >>> 18)),
              (k = (t[49] << 14) | (t[48] >>> 18)),
              (t[0] = p ^ (~v & b)),
              (t[1] = g ^ (~y & w)),
              (t[10] = x ^ (~M & P)),
              (t[11] = N ^ (~I & S)),
              (t[20] = B ^ (~L & F)),
              (t[21] = D ^ (~U & G)),
              (t[30] = j ^ (~K & Q)),
              (t[31] = H ^ (~J & V)),
              (t[40] = te ^ (~tn & ts)),
              (t[41] = tr ^ (~ti & to)),
              (t[2] = v ^ (~b & A)),
              (t[3] = y ^ (~w & _)),
              (t[12] = M ^ (~P & C)),
              (t[13] = I ^ (~S & T)),
              (t[22] = L ^ (~F & z)),
              (t[23] = U ^ (~G & Z)),
              (t[32] = K ^ (~Q & W)),
              (t[33] = J ^ (~V & X)),
              (t[42] = tn ^ (~ts & ta)),
              (t[43] = ti ^ (~to & tu)),
              (t[4] = b ^ (~A & E)),
              (t[5] = w ^ (~_ & k)),
              (t[14] = P ^ (~C & R)),
              (t[15] = S ^ (~T & O)),
              (t[24] = F ^ (~z & Y)),
              (t[25] = G ^ (~Z & q)),
              (t[34] = Q ^ (~W & $)),
              (t[35] = V ^ (~X & tt)),
              (t[44] = ts ^ (~ta & tl)),
              (t[45] = to ^ (~tu & th)),
              (t[6] = A ^ (~E & p)),
              (t[7] = _ ^ (~k & g)),
              (t[16] = C ^ (~R & x)),
              (t[17] = T ^ (~O & N)),
              (t[26] = z ^ (~Y & B)),
              (t[27] = Z ^ (~q & D)),
              (t[36] = W ^ (~$ & j)),
              (t[37] = X ^ (~tt & H)),
              (t[46] = ta ^ (~tl & te)),
              (t[47] = tu ^ (~th & tr)),
              (t[8] = E ^ (~p & v)),
              (t[9] = k ^ (~g & y)),
              (t[18] = R ^ (~x & M)),
              (t[19] = O ^ (~N & I)),
              (t[28] = Y ^ (~B & L)),
              (t[29] = q ^ (~D & U)),
              (t[38] = $ ^ (~j & K)),
              (t[39] = tt ^ (~H & J)),
              (t[48] = tl ^ (~te & tn)),
              (t[49] = th ^ (~tr & ti)),
              (t[0] ^= m[n]),
              (t[1] ^= m[n + 1]);
        };
        if (l) t.exports = M;
        else {
          for (P = 0; P < I.length; ++P) a[I[P]] = M[I[P]];
          h &&
            void 0 !==
              (n = function () {
                return M;
              }.call(e, r, e, t)) &&
            (t.exports = n);
        }
      })();
    },
    5697: function (t) {
      function e(t, e) {
        if (!t) throw Error(e || 'Assertion failed');
      }
      (t.exports = e),
        (e.equal = function (t, e, r) {
          if (t != e) throw Error(r || 'Assertion failed: ' + t + ' != ' + e);
        });
    },
    33867: function (t, e, r) {
      'use strict';
      r.d(e, {
        a: function () {
          return s;
        },
      });
      var n = r(53458),
        i = r(31251);
      function s(t, e) {
        return (0, i.r)(t, n.z, e);
      }
    },
    21318: function (t, e, r) {
      'use strict';
      r.d(e, {
        y: function () {
          return n;
        },
      });
      let n = (0, r(71684).a)({
        id: 42161,
        name: 'Arbitrum One',
        nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
        rpcUrls: { default: { http: ['https://arb1.arbitrum.io/rpc'] } },
        blockExplorers: {
          default: {
            name: 'Arbiscan',
            url: 'https://arbiscan.io',
            apiUrl: 'https://api.arbiscan.io/api',
          },
        },
        contracts: {
          multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 7654707,
          },
        },
      });
    },
    62308: function (t, e, r) {
      'use strict';
      r.d(e, {
        u: function () {
          return i;
        },
      });
      var n = r(15612);
      let i = (0, r(71684).a)({
        ...n.i,
        id: 8453,
        name: 'Base',
        nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
        rpcUrls: { default: { http: ['https://mainnet.base.org'] } },
        blockExplorers: {
          default: {
            name: 'Basescan',
            url: 'https://basescan.org',
            apiUrl: 'https://api.basescan.org/api',
          },
        },
        contracts: {
          ...n.i.contracts,
          disputeGameFactory: { 1: { address: '0x43edB88C4B80fDD2AdFF2412A7BebF9dF42cB40e' } },
          l2OutputOracle: { 1: { address: '0x56315b90c40730925ec5485cf004d835058518A0' } },
          multicall3: { address: '0xca11bde05977b3631167028862be2a173976ca11', blockCreated: 5022 },
          portal: {
            1: { address: '0x49048044D57e1C92A77f79988d21Fa8fAF74E97e', blockCreated: 17482143 },
          },
          l1StandardBridge: {
            1: { address: '0x3154Cf16ccdb4C6d922629664174b904d80F2C35', blockCreated: 17482143 },
          },
        },
        sourceId: 1,
      });
    },
    1632: function (t, e, r) {
      'use strict';
      r.d(e, {
        L: function () {
          return i;
        },
      });
      var n = r(15612);
      let i = (0, r(71684).a)({
        ...n.i,
        id: 84532,
        network: 'base-sepolia',
        name: 'Base Sepolia',
        nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
        rpcUrls: { default: { http: ['https://sepolia.base.org'] } },
        blockExplorers: {
          default: {
            name: 'Basescan',
            url: 'https://sepolia.basescan.org',
            apiUrl: 'https://api-sepolia.basescan.org/api',
          },
        },
        contracts: {
          ...n.i.contracts,
          disputeGameFactory: {
            11155111: { address: '0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1' },
          },
          l2OutputOracle: { 11155111: { address: '0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254' } },
          portal: {
            11155111: {
              address: '0x49f53e41452c74589e85ca1677426ba426459e85',
              blockCreated: 4446677,
            },
          },
          l1StandardBridge: {
            11155111: {
              address: '0xfd0Bf71F60660E2f608ed56e1659C450eB113120',
              blockCreated: 4446677,
            },
          },
          multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 1059647,
          },
        },
        testnet: !0,
        sourceId: 11155111,
      });
    },
    9991: function (t, e, r) {
      'use strict';
      r.d(e, {
        A: function () {
          return i;
        },
      });
      var n = r(15612);
      let i = (0, r(71684).a)({
        ...n.i,
        id: 81457,
        name: 'Blast',
        nativeCurrency: { decimals: 18, name: 'Ether', symbol: 'ETH' },
        rpcUrls: { default: { http: ['https://rpc.blast.io'] } },
        blockExplorers: {
          default: {
            name: 'Blastscan',
            url: 'https://blastscan.io',
            apiUrl: 'https://api.blastscan.io/api',
          },
        },
        contracts: {
          ...n.i.contracts,
          multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 212929,
          },
        },
        sourceId: 1,
      });
    },
    25454: function (t, e, r) {
      'use strict';
      r.d(e, {
        R: function () {
          return n;
        },
      });
      let n = (0, r(71684).a)({
        id: 1,
        name: 'Ethereum',
        nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
        rpcUrls: { default: { http: ['https://eth.merkle.io'] } },
        blockExplorers: {
          default: {
            name: 'Etherscan',
            url: 'https://etherscan.io',
            apiUrl: 'https://api.etherscan.io/api',
          },
        },
        contracts: {
          ensRegistry: { address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e' },
          ensUniversalResolver: {
            address: '0xce01f8eee7E479C928F8919abD53E553a36CeF67',
            blockCreated: 19258213,
          },
          multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 14353601,
          },
        },
      });
    },
    46549: function (t, e, r) {
      'use strict';
      r.d(e, {
        v: function () {
          return i;
        },
      });
      var n = r(15612);
      let i = (0, r(71684).a)({
        ...n.i,
        id: 10,
        name: 'OP Mainnet',
        nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
        rpcUrls: { default: { http: ['https://mainnet.optimism.io'] } },
        blockExplorers: {
          default: {
            name: 'Optimism Explorer',
            url: 'https://optimistic.etherscan.io',
            apiUrl: 'https://api-optimistic.etherscan.io/api',
          },
        },
        contracts: {
          ...n.i.contracts,
          disputeGameFactory: { 1: { address: '0xe5965Ab5962eDc7477C8520243A95517CD252fA9' } },
          l2OutputOracle: { 1: { address: '0xdfe97868233d1aa22e815a266982f2cf17685a27' } },
          multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 4286263,
          },
          portal: { 1: { address: '0xbEb5Fc579115071764c7423A4f12eDde41f106Ed' } },
          l1StandardBridge: { 1: { address: '0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1' } },
        },
        sourceId: 1,
      });
    },
    58594: function (t, e, r) {
      'use strict';
      r.d(e, {
        y: function () {
          return n;
        },
      });
      let n = (0, r(71684).a)({
        id: 137,
        name: 'Polygon',
        nativeCurrency: { name: 'POL', symbol: 'POL', decimals: 18 },
        rpcUrls: { default: { http: ['https://polygon-rpc.com'] } },
        blockExplorers: {
          default: {
            name: 'PolygonScan',
            url: 'https://polygonscan.com',
            apiUrl: 'https://api.polygonscan.com/api',
          },
        },
        contracts: {
          multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 25770160,
          },
        },
      });
    },
    712: function (t, e, r) {
      'use strict';
      r.d(e, {
        v: function () {
          return n;
        },
      });
      let n = (0, r(71684).a)({
        id: 80002,
        name: 'Polygon Amoy',
        nativeCurrency: { name: 'POL', symbol: 'POL', decimals: 18 },
        rpcUrls: { default: { http: ['https://rpc-amoy.polygon.technology'] } },
        blockExplorers: {
          default: {
            name: 'PolygonScan',
            url: 'https://amoy.polygonscan.com',
            apiUrl: 'https://api-amoy.polygonscan.com/api',
          },
        },
        contracts: {
          multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 3127388,
          },
        },
        testnet: !0,
      });
    },
    77210: function (t, e, r) {
      'use strict';
      r.d(e, {
        A: function () {
          return n;
        },
      });
      let n = (0, r(71684).a)({
        id: 534352,
        name: 'Scroll',
        nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
        rpcUrls: {
          default: { http: ['https://rpc.scroll.io'], webSocket: ['wss://wss-rpc.scroll.io/ws'] },
        },
        blockExplorers: {
          default: {
            name: 'Scrollscan',
            url: 'https://scrollscan.com',
            apiUrl: 'https://api.scrollscan.com/api',
          },
        },
        contracts: {
          multicall3: { address: '0xca11bde05977b3631167028862be2a173976ca11', blockCreated: 14 },
        },
        testnet: !1,
      });
    },
    54482: function (t, e, r) {
      'use strict';
      r.d(e, {
        F: function () {
          return n;
        },
      });
      let n = (0, r(71684).a)({
        id: 11155111,
        name: 'Sepolia',
        nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
        rpcUrls: { default: { http: ['https://sepolia.drpc.org'] } },
        blockExplorers: {
          default: {
            name: 'Etherscan',
            url: 'https://sepolia.etherscan.io',
            apiUrl: 'https://api-sepolia.etherscan.io/api',
          },
        },
        contracts: {
          multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 751532,
          },
          ensRegistry: { address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e' },
          ensUniversalResolver: {
            address: '0xc8Af999e38273D658BE1b921b88A9Ddf005769cC',
            blockCreated: 5317080,
          },
        },
        testnet: !0,
      });
    },
    28948: function (t, e, r) {
      'use strict';
      r.d(e, {
        D: function () {
          return i;
        },
      });
      var n = r(15612);
      let i = (0, r(71684).a)({
        ...n.i,
        id: 480,
        name: 'World Chain',
        network: 'worldchain',
        nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
        rpcUrls: { default: { http: ['https://worldchain-mainnet.g.alchemy.com/public'] } },
        blockExplorers: {
          default: {
            name: 'Worldscan',
            url: 'https://worldscan.org',
            apiUrl: 'https://api.worldscan.org/api',
          },
          blockscout: {
            name: 'Blockscout',
            url: 'https://worldchain-mainnet.explorer.alchemy.com',
            apiUrl: 'https://worldchain-mainnet.explorer.alchemy.com/api',
          },
        },
        contracts: {
          ...n.i.contracts,
          multicall3: { address: '0xca11bde05977b3631167028862be2a173976ca11', blockCreated: 0 },
          disputeGameFactory: { 1: { address: '0x069c4c579671f8c120b1327a73217D01Ea2EC5ea' } },
          l2OutputOracle: { 1: { address: '0x19A6d1E9034596196295CF148509796978343c5D' } },
          portal: { 1: { address: '0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C' } },
          l1StandardBridge: { 1: { address: '0x470458C91978D2d929704489Ad730DC3E3001113' } },
        },
        testnet: !1,
        sourceId: 1,
      });
    },
    71562: function (t, e, r) {
      'use strict';
      r.d(e, {
        l: function () {
          return s;
        },
      });
      var n = r(71684),
        i = r(41216);
      let s = (0, n.a)({
        ...i.i,
        id: 324,
        name: 'ZKsync Era',
        network: 'zksync-era',
        nativeCurrency: { decimals: 18, name: 'Ether', symbol: 'ETH' },
        rpcUrls: {
          default: {
            http: ['https://mainnet.era.zksync.io'],
            webSocket: ['wss://mainnet.era.zksync.io/ws'],
          },
        },
        blockExplorers: {
          default: {
            name: 'Etherscan',
            url: 'https://era.zksync.network/',
            apiUrl: 'https://api-era.zksync.network/api',
          },
          native: {
            name: 'ZKsync Explorer',
            url: 'https://explorer.zksync.io/',
            apiUrl: 'https://block-explorer-api.mainnet.zksync.io/api',
          },
        },
        contracts: {
          multicall3: { address: '0xF9cda624FBC7e059355ce98a31693d299FACd963' },
          universalSignatureVerifier: {
            address: '0xfB688330379976DA81eB64Fe4BF50d7401763B9C',
            blockCreated: 45659388,
          },
        },
      });
    },
    74088: function (t, e, r) {
      'use strict';
      r.d(e, {
        q: function () {
          return c;
        },
      });
      var n = r(77854),
        i = r(68901),
        s = r(38350),
        o = r(79150);
      let a = new (r(65414).k)(8192);
      var u = r(58905),
        l = r(45679),
        h = r(5929);
      function c(
        {
          key: t,
          methods: e,
          name: r,
          request: c,
          retryCount: d = 3,
          retryDelay: f = 150,
          timeout: p,
          type: m,
        },
        g
      ) {
        return {
          config: {
            key: t,
            methods: e,
            name: r,
            request: c,
            retryCount: d,
            retryDelay: f,
            timeout: p,
            type: m,
          },
          request: (function (t, e = {}) {
            return async (r, h = {}) => {
              let {
                  dedupe: c = !1,
                  methods: d,
                  retryDelay: f = 150,
                  retryCount: p = 3,
                  uid: m,
                } = { ...e, ...h },
                { method: g } = r;
              if (d?.exclude?.includes(g) || (d?.include && !d.include.includes(g)))
                throw new s.gS(Error('method not supported'), { method: g });
              let v = c ? (0, o.$G)(`${m}.${(0, l.P)(r)}`) : void 0;
              return (function (t, { enabled: e = !0, id: r }) {
                if (!e || !r) return t();
                if (a.get(r)) return a.get(r);
                let n = t().finally(() => a.delete(r));
                return a.set(r, n), n;
              })(
                () =>
                  (0, u.J)(
                    async () => {
                      try {
                        return await t(r);
                      } catch (t) {
                        switch (t.code) {
                          case s.s7.code:
                            throw new s.s7(t);
                          case s.B.code:
                            throw new s.B(t);
                          case s.LX.code:
                            throw new s.LX(t, { method: r.method });
                          case s.nY.code:
                            throw new s.nY(t);
                          case s.XS.code:
                            throw new s.XS(t);
                          case s.yR.code:
                            throw new s.yR(t);
                          case s.Og.code:
                            throw new s.Og(t);
                          case s.pT.code:
                            throw new s.pT(t);
                          case s.KB.code:
                            throw new s.KB(t);
                          case s.gS.code:
                            throw new s.gS(t, { method: r.method });
                          case s.Pv.code:
                            throw new s.Pv(t);
                          case s.GD.code:
                            throw new s.GD(t);
                          case s.ab.code:
                            throw new s.ab(t);
                          case s.PE.code:
                            throw new s.PE(t);
                          case s.Ts.code:
                            throw new s.Ts(t);
                          case s.u5.code:
                            throw new s.u5(t);
                          case s.I0.code:
                            throw new s.I0(t);
                          case s.x3.code:
                            throw new s.x3(t);
                          case 5e3:
                            throw new s.ab(t);
                          default:
                            if (t instanceof n.G) throw t;
                            throw new s.ir(t);
                        }
                      }
                    },
                    {
                      delay: ({ count: t, error: e }) => {
                        if (e && e instanceof i.Gg) {
                          let t = e?.headers?.get('Retry-After');
                          if (t?.match(/\d/)) return 1e3 * Number.parseInt(t);
                        }
                        return ~~(1 << t) * f;
                      },
                      retryCount: p,
                      shouldRetry: ({ error: t }) =>
                        'code' in t && 'number' == typeof t.code
                          ? -1 === t.code || t.code === s.Pv.code || t.code === s.XS.code
                          : !(t instanceof i.Gg) ||
                            !t.status ||
                            403 === t.status ||
                            408 === t.status ||
                            413 === t.status ||
                            429 === t.status ||
                            500 === t.status ||
                            502 === t.status ||
                            503 === t.status ||
                            504 === t.status,
                    }
                  ),
                { enabled: c, id: v }
              );
            };
          })(c, { methods: e, retryCount: d, retryDelay: f, uid: (0, h.h)() }),
          value: g,
        };
      }
    },
    15612: function (t, e, r) {
      'use strict';
      r.d(e, {
        i: function () {
          return o;
        },
      });
      var n = r(90682),
        i = r(11031),
        s = r(26463);
      let o = { contracts: n.r, formatters: i.$, serializers: s.fE };
    },
    90682: function (t, e, r) {
      'use strict';
      r.d(e, {
        r: function () {
          return n;
        },
      });
      let n = {
        gasPriceOracle: { address: '0x420000000000000000000000000000000000000F' },
        l1Block: { address: '0x4200000000000000000000000000000000000015' },
        l2CrossDomainMessenger: { address: '0x4200000000000000000000000000000000000007' },
        l2Erc721Bridge: { address: '0x4200000000000000000000000000000000000014' },
        l2StandardBridge: { address: '0x4200000000000000000000000000000000000010' },
        l2ToL1MessagePasser: { address: '0x4200000000000000000000000000000000000016' },
      };
    },
    11031: function (t, e, r) {
      'use strict';
      r.d(e, {
        $: function () {
          return a;
        },
      });
      var n = r(37968),
        i = r(26573),
        s = r(85148),
        o = r(48166);
      let a = {
        block: (0, i.G)({
          format: (t) => ({
            transactions: t.transactions?.map((t) => {
              if ('string' == typeof t) return t;
              let e = s.Tr(t);
              return (
                '0x7e' === e.typeHex &&
                  ((e.isSystemTx = t.isSystemTx),
                  (e.mint = t.mint ? n.y_(t.mint) : void 0),
                  (e.sourceHash = t.sourceHash),
                  (e.type = 'deposit')),
                e
              );
            }),
            stateRoot: t.stateRoot,
          }),
        }),
        transaction: (0, s.y_)({
          format(t) {
            let e = {};
            return (
              '0x7e' === t.type &&
                ((e.isSystemTx = t.isSystemTx),
                (e.mint = t.mint ? (0, n.y_)(t.mint) : void 0),
                (e.sourceHash = t.sourceHash),
                (e.type = 'deposit')),
              e
            );
          },
        }),
        transactionReceipt: (0, o.dI)({
          format: (t) => ({
            l1GasPrice: t.l1GasPrice ? (0, n.y_)(t.l1GasPrice) : null,
            l1GasUsed: t.l1GasUsed ? (0, n.y_)(t.l1GasUsed) : null,
            l1Fee: t.l1Fee ? (0, n.y_)(t.l1Fee) : null,
            l1FeeScalar: t.l1FeeScalar ? Number(t.l1FeeScalar) : null,
          }),
        }),
      };
    },
    26463: function (t, e, r) {
      'use strict';
      r.d(e, {
        DO: function () {
          return l;
        },
        fE: function () {
          return h;
        },
      });
      var n = r(48141),
        i = r(84545),
        s = r(1155),
        o = r(79150),
        a = r(93511),
        u = r(97730);
      function l(t, e) {
        return 'deposit' === t.type || void 0 !== t.sourceHash
          ? (function (t) {
              !(function (t) {
                let { from: e, to: r } = t;
                if (e && !(0, i.U)(e)) throw new n.b({ address: e });
                if (r && !(0, i.U)(r)) throw new n.b({ address: r });
              })(t);
              let {
                  sourceHash: e,
                  data: r,
                  from: u,
                  gas: l,
                  isSystemTx: h,
                  mint: c,
                  to: d,
                  value: f,
                } = t,
                p = [
                  e,
                  u,
                  d ?? '0x',
                  c ? (0, o.NC)(c) : '0x',
                  f ? (0, o.NC)(f) : '0x',
                  l ? (0, o.NC)(l) : '0x',
                  h ? '0x1' : '0x',
                  r ?? '0x',
                ];
              return (0, s.SM)(['0x7e', (0, a.LV)(p)]);
            })(t)
          : (0, u.D)(t, e);
      }
      let h = { transaction: l };
    },
    71684: function (t, e, r) {
      'use strict';
      function n(t) {
        return { formatters: void 0, fees: void 0, serializers: void 0, ...t };
      }
      r.d(e, {
        a: function () {
          return n;
        },
      });
    },
    86324: function (t, e, r) {
      'use strict';
      function n(t, { args: e, eventName: r } = {}) {
        return {
          ...t,
          blockHash: t.blockHash ? t.blockHash : null,
          blockNumber: t.blockNumber ? BigInt(t.blockNumber) : null,
          logIndex: t.logIndex ? Number(t.logIndex) : null,
          transactionHash: t.transactionHash ? t.transactionHash : null,
          transactionIndex: t.transactionIndex ? Number(t.transactionIndex) : null,
          ...(r ? { args: e, eventName: r } : {}),
        };
      }
      r.d(e, {
        U: function () {
          return n;
        },
      });
    },
    48166: function (t, e, r) {
      'use strict';
      r.d(e, {
        dI: function () {
          return l;
        },
        fA: function () {
          return u;
        },
      });
      var n = r(37968),
        i = r(85182),
        s = r(86324),
        o = r(85148);
      let a = { '0x0': 'reverted', '0x1': 'success' };
      function u(t) {
        let e = {
          ...t,
          blockNumber: t.blockNumber ? BigInt(t.blockNumber) : null,
          contractAddress: t.contractAddress ? t.contractAddress : null,
          cumulativeGasUsed: t.cumulativeGasUsed ? BigInt(t.cumulativeGasUsed) : null,
          effectiveGasPrice: t.effectiveGasPrice ? BigInt(t.effectiveGasPrice) : null,
          gasUsed: t.gasUsed ? BigInt(t.gasUsed) : null,
          logs: t.logs ? t.logs.map((t) => (0, s.U)(t)) : null,
          to: t.to ? t.to : null,
          transactionIndex: t.transactionIndex ? (0, n.ly)(t.transactionIndex) : null,
          status: t.status ? a[t.status] : null,
          type: t.type ? o.c8[t.type] || t.type : null,
        };
        return (
          t.blobGasPrice && (e.blobGasPrice = BigInt(t.blobGasPrice)),
          t.blobGasUsed && (e.blobGasUsed = BigInt(t.blobGasUsed)),
          e
        );
      }
      let l = (0, i.$)('transactionReceipt', u);
    },
    58905: function (t, e, r) {
      'use strict';
      r.d(e, {
        J: function () {
          return i;
        },
      });
      var n = r(22836);
      function i(t, { delay: e = 100, retryCount: r = 2, shouldRetry: i = () => !0 } = {}) {
        return new Promise((s, o) => {
          let a = async ({ count: u = 0 } = {}) => {
            let l = async ({ error: t }) => {
              let r = 'function' == typeof e ? e({ count: u, error: t }) : e;
              r && (await (0, n.D)(r)), a({ count: u + 1 });
            };
            try {
              let e = await t();
              s(e);
            } catch (t) {
              if (u < r && (await i({ count: u, error: t }))) return l({ error: t });
              o(t);
            }
          };
          a();
        });
      }
    },
    5929: function (t, e, r) {
      'use strict';
      let n;
      r.d(e, {
        h: function () {
          return s;
        },
      });
      let i = 256;
      function s(t = 11) {
        if (!n || i + t > 512) {
          (n = ''), (i = 0);
          for (let t = 0; t < 256; t++)
            n += ((256 + 256 * Math.random()) | 0).toString(16).substring(1);
        }
        return n.substring(i, i++ + t);
      }
    },
    22836: function (t, e, r) {
      'use strict';
      async function n(t) {
        return new Promise((e) => setTimeout(e, t));
      }
      r.d(e, {
        D: function () {
          return n;
        },
      });
    },
    41216: function (t, e, r) {
      'use strict';
      r.d(e, {
        i: function () {
          return k;
        },
      });
      var n = r(37968),
        i = r(13990),
        s = r(79150),
        o = r(26573),
        a = r(86324),
        u = r(85148),
        l = r(48166),
        h = r(14999),
        c = r(80725);
      let d = {
        block: (0, o.G)({
          format(t) {
            let e = t.transactions?.map((t) => {
              if ('string' == typeof t) return t;
              let e = d.transaction?.format(t);
              return (
                '0x71' === e.typeHex
                  ? (e.type = 'eip712')
                  : '0xff' === e.typeHex && (e.type = 'priority'),
                e
              );
            });
            return {
              l1BatchNumber: t.l1BatchNumber ? (0, n.y_)(t.l1BatchNumber) : null,
              l1BatchTimestamp: t.l1BatchTimestamp ? (0, n.y_)(t.l1BatchTimestamp) : null,
              transactions: e,
            };
          },
        }),
        transaction: (0, u.y_)({
          format(t) {
            let e = {};
            return (
              '0x71' === t.type ? (e.type = 'eip712') : '0xff' === t.type && (e.type = 'priority'),
              {
                ...e,
                l1BatchNumber: t.l1BatchNumber ? (0, n.y_)(t.l1BatchNumber) : null,
                l1BatchTxIndex: t.l1BatchTxIndex ? (0, n.y_)(t.l1BatchTxIndex) : null,
              }
            );
          },
        }),
        transactionReceipt: (0, l.dI)({
          format: (t) => ({
            l1BatchNumber: t.l1BatchNumber ? (0, n.y_)(t.l1BatchNumber) : null,
            l1BatchTxIndex: t.l1BatchTxIndex ? (0, n.y_)(t.l1BatchTxIndex) : null,
            logs: t.logs.map((t) => ({
              ...(0, a.U)(t),
              l1BatchNumber: t.l1BatchNumber ? (0, n.y_)(t.l1BatchNumber) : null,
              transactionLogIndex: (0, n.ly)(t.transactionLogIndex),
              logType: t.logType,
            })),
            l2ToL1Logs: t.l2ToL1Logs.map((t) => ({
              blockNumber: (0, n.y_)(t.blockHash),
              blockHash: t.blockHash,
              l1BatchNumber: t.l1BatchNumber ? (0, n.y_)(t.l1BatchNumber) : null,
              transactionIndex: (0, n.y_)(t.transactionIndex),
              shardId: (0, n.y_)(t.shardId),
              isService: t.isService,
              sender: t.sender,
              key: t.key,
              value: t.value,
              transactionHash: t.transactionHash,
              logIndex: (0, n.y_)(t.logIndex),
            })),
          }),
        }),
        transactionRequest: (0, h.iy)({
          exclude: [
            'customSignature',
            'factoryDeps',
            'gasPerPubdata',
            'paymaster',
            'paymasterInput',
          ],
          format: (t) =>
            t.gasPerPubdata ||
            (t.paymaster && t.paymasterInput) ||
            t.factoryDeps ||
            t.customSignature
              ? {
                  eip712Meta: {
                    ...(t.gasPerPubdata
                      ? { gasPerPubdata: (0, s.NC)(t.gasPerPubdata) }
                      : { gasPerPubdata: (0, s.NC)(c.$9) }),
                    ...(t.paymaster && t.paymasterInput
                      ? {
                          paymasterParams: {
                            paymaster: t.paymaster,
                            paymasterInput: Array.from((0, i.nr)(t.paymasterInput)),
                          },
                        }
                      : {}),
                    ...(t.factoryDeps
                      ? { factoryDeps: t.factoryDeps.map((t) => Array.from((0, i.nr)(t))) }
                      : {}),
                    ...(t.customSignature
                      ? { customSignature: Array.from((0, i.nr)(t.customSignature)) }
                      : {}),
                  },
                  type: '0x71',
                }
              : {},
        }),
      };
      var f = r(1155),
        p = r(93511),
        m = r(97730),
        g = r(48141),
        v = r(77854),
        y = r(22268),
        b = r(84545),
        w = r(85162),
        A = r(35328);
      function _(t) {
        let { chainId: e, to: r, from: n, paymaster: i, paymasterInput: s } = t;
        if (!(0, A.W)(t)) throw new w.l();
        if (!e || e <= 0) throw new y.hJ({ chainId: e });
        if (r && !(0, b.U)(r)) throw new g.b({ address: r });
        if (n && !(0, b.U)(n)) throw new g.b({ address: n });
        if (i && !(0, b.U)(i)) throw new g.b({ address: i });
        if (i && !s) throw new v.G('`paymasterInput` must be provided when `paymaster` is defined');
        if (!i && s) throw new v.G('`paymaster` must be provided when `paymasterInput` is defined');
      }
      var E = r(85465);
      let k = {
        formatters: d,
        serializers: {
          transaction: function (t, e) {
            return (0, A.W)(t)
              ? (function (t) {
                  let {
                    chainId: e,
                    gas: r,
                    nonce: n,
                    to: i,
                    from: o,
                    value: a,
                    maxFeePerGas: u,
                    maxPriorityFeePerGas: l,
                    customSignature: h,
                    factoryDeps: d,
                    paymaster: m,
                    paymasterInput: g,
                    gasPerPubdata: v,
                    data: y,
                  } = t;
                  _(t);
                  let b = [
                    n ? (0, s.NC)(n) : '0x',
                    l ? (0, s.NC)(l) : '0x',
                    u ? (0, s.NC)(u) : '0x',
                    r ? (0, s.NC)(r) : '0x',
                    i ?? '0x',
                    a ? (0, s.NC)(a) : '0x',
                    y ?? '0x0',
                    (0, s.NC)(e),
                    (0, s.NC)(''),
                    (0, s.NC)(''),
                    (0, s.NC)(e),
                    o ?? '0x',
                    v ? (0, s.NC)(v) : (0, s.NC)(c.$9),
                    d ?? [],
                    h ?? '0x',
                    m && g ? [m, g] : [],
                  ];
                  return (0, f.SM)(['0x71', (0, p.LV)(b)]);
                })(t)
              : (0, m.D)(t, e);
          },
        },
        custom: {
          getEip712Domain: (t) => {
            _(t);
            let e = (function (t) {
              let {
                gas: e,
                nonce: r,
                to: n,
                from: i,
                value: o,
                maxFeePerGas: a,
                maxPriorityFeePerGas: u,
                factoryDeps: l,
                paymaster: h,
                paymasterInput: d,
                gasPerPubdata: f,
                data: p,
              } = t;
              return {
                txType: 113n,
                from: BigInt(i),
                to: n ? BigInt(n) : 0n,
                gasLimit: e ?? 0n,
                gasPerPubdataByteLimit: f ?? c.$9,
                maxFeePerGas: a ?? 0n,
                maxPriorityFeePerGas: u ?? 0n,
                paymaster: h ? BigInt(h) : 0n,
                nonce: r ? BigInt(r) : 0n,
                value: o ?? 0n,
                data: p || '0x0',
                factoryDeps: l?.map((t) => s.NC(E.x(t))) ?? [],
                paymasterInput: d || '0x',
              };
            })(t);
            return {
              domain: { name: 'zkSync', version: '2', chainId: t.chainId },
              types: {
                Transaction: [
                  { name: 'txType', type: 'uint256' },
                  { name: 'from', type: 'uint256' },
                  { name: 'to', type: 'uint256' },
                  { name: 'gasLimit', type: 'uint256' },
                  { name: 'gasPerPubdataByteLimit', type: 'uint256' },
                  { name: 'maxFeePerGas', type: 'uint256' },
                  { name: 'maxPriorityFeePerGas', type: 'uint256' },
                  { name: 'paymaster', type: 'uint256' },
                  { name: 'nonce', type: 'uint256' },
                  { name: 'value', type: 'uint256' },
                  { name: 'data', type: 'bytes' },
                  { name: 'factoryDeps', type: 'bytes32[]' },
                  { name: 'paymasterInput', type: 'bytes' },
                ],
              },
              primaryType: 'Transaction',
              message: e,
            };
          },
        },
      };
    },
    80725: function (t, e, r) {
      'use strict';
      r.d(e, {
        $9: function () {
          return i;
        },
        iN: function () {
          return s;
        },
      });
      var n = r(59171);
      let i = 50000n,
        s = 32n * n.rU;
    },
    85162: function (t, e, r) {
      'use strict';
      r.d(e, {
        l: function () {
          return i;
        },
      });
      var n = r(77854);
      class i extends n.G {
        constructor() {
          super(
            'Transaction is not an EIP712 transaction.\n\nTransaction must:\n  - include `type: "eip712"`\n  - include one of the following: `customSignature`, `paymaster`, `paymasterInput`, `gasPerPubdata`, `factoryDeps`',
            { name: 'InvalidEip712TransactionError' }
          );
        }
      }
    },
    85465: function (t, e, r) {
      'use strict';
      r.d(e, {
        x: function () {
          return c;
        },
      });
      var n = r(83254),
        i = r(13990),
        s = r(89226),
        o = r(80725),
        a = r(77854);
      class u extends a.G {
        constructor({ givenLength: t, maxBytecodeSize: e }) {
          super(`Bytecode cannot be longer than ${e} bytes. Given length: ${t}`, {
            name: 'BytecodeLengthExceedsMaxSizeError',
          });
        }
      }
      class l extends a.G {
        constructor({ givenLengthInWords: t }) {
          super(`Bytecode length in 32-byte words must be odd. Given length in words: ${t}`, {
            name: 'BytecodeLengthInWordsMustBeOddError',
          });
        }
      }
      class h extends a.G {
        constructor({ givenLength: t }) {
          super(`The bytecode length in bytes must be divisible by 32. Given length: ${t}`, {
            name: 'BytecodeLengthMustBeDivisibleBy32Error',
          });
        }
      }
      function c(t) {
        let e = (0, i.O0)(t);
        if (e.length % 32 != 0) throw new h({ givenLength: e.length });
        if (e.length > o.iN) throw new u({ givenLength: e.length, maxBytecodeSize: o.iN });
        let r = (0, s.J)(e),
          a = (0, i.O0)(r),
          c = e.length / 32;
        if (c % 2 == 0) throw new l({ givenLengthInWords: c });
        let d = (0, i.O0)(c),
          f = (0, n.vk)(d, { size: 2 }),
          p = new Uint8Array([1, 0]);
        return a.set(p, 0), a.set(f, 2), a;
      }
    },
    35328: function (t, e, r) {
      'use strict';
      function n(t) {
        return (
          'eip712' === t.type ||
          ('customSignature' in t && !!t.customSignature) ||
          ('paymaster' in t && !!t.paymaster) ||
          ('paymasterInput' in t && !!t.paymasterInput) ||
          ('gasPerPubdata' in t && 'bigint' == typeof t.gasPerPubdata) ||
          ('factoryDeps' in t && !!t.factoryDeps)
        );
      }
      r.d(e, {
        W: function () {
          return n;
        },
      });
    },
    23782: function (t, e, r) {
      'use strict';
      let n;
      r.d(e, {
        z: function () {
          return t5;
        },
      }),
        ((t0 = t3 || (t3 = {})).assertEqual = (t) => t),
        (t0.assertIs = function (t) {}),
        (t0.assertNever = function (t) {
          throw Error();
        }),
        (t0.arrayToEnum = (t) => {
          let e = {};
          for (let r of t) e[r] = r;
          return e;
        }),
        (t0.getValidEnumValues = (t) => {
          let e = t0.objectKeys(t).filter((e) => 'number' != typeof t[t[e]]),
            r = {};
          for (let n of e) r[n] = t[n];
          return t0.objectValues(r);
        }),
        (t0.objectValues = (t) =>
          t0.objectKeys(t).map(function (e) {
            return t[e];
          })),
        (t0.objectKeys =
          'function' == typeof Object.keys
            ? (t) => Object.keys(t)
            : (t) => {
                let e = [];
                for (let r in t) Object.prototype.hasOwnProperty.call(t, r) && e.push(r);
                return e;
              }),
        (t0.find = (t, e) => {
          for (let r of t) if (e(r)) return r;
        }),
        (t0.isInteger =
          'function' == typeof Number.isInteger
            ? (t) => Number.isInteger(t)
            : (t) => 'number' == typeof t && isFinite(t) && Math.floor(t) === t),
        (t0.joinValues = function (t, e = ' | ') {
          return t.map((t) => ('string' == typeof t ? `'${t}'` : t)).join(e);
        }),
        (t0.jsonStringifyReplacer = (t, e) => ('bigint' == typeof e ? e.toString() : e)),
        ((t6 || (t6 = {})).mergeShapes = (t, e) => ({ ...t, ...e }));
      let i = t3.arrayToEnum([
          'string',
          'nan',
          'number',
          'integer',
          'float',
          'boolean',
          'date',
          'bigint',
          'symbol',
          'function',
          'undefined',
          'null',
          'array',
          'object',
          'unknown',
          'promise',
          'void',
          'never',
          'map',
          'set',
        ]),
        s = (t) => {
          switch (typeof t) {
            case 'undefined':
              return i.undefined;
            case 'string':
              return i.string;
            case 'number':
              return isNaN(t) ? i.nan : i.number;
            case 'boolean':
              return i.boolean;
            case 'function':
              return i.function;
            case 'bigint':
              return i.bigint;
            case 'symbol':
              return i.symbol;
            case 'object':
              if (Array.isArray(t)) return i.array;
              if (null === t) return i.null;
              if (t.then && 'function' == typeof t.then && t.catch && 'function' == typeof t.catch)
                return i.promise;
              if ('undefined' != typeof Map && t instanceof Map) return i.map;
              if ('undefined' != typeof Set && t instanceof Set) return i.set;
              if ('undefined' != typeof Date && t instanceof Date) return i.date;
              return i.object;
            default:
              return i.unknown;
          }
        },
        o = t3.arrayToEnum([
          'invalid_type',
          'invalid_literal',
          'custom',
          'invalid_union',
          'invalid_union_discriminator',
          'invalid_enum_value',
          'unrecognized_keys',
          'invalid_arguments',
          'invalid_return_type',
          'invalid_date',
          'invalid_string',
          'too_small',
          'too_big',
          'invalid_intersection_types',
          'not_multiple_of',
          'not_finite',
        ]);
      class a extends Error {
        constructor(t) {
          super(),
            (this.issues = []),
            (this.addIssue = (t) => {
              this.issues = [...this.issues, t];
            }),
            (this.addIssues = (t = []) => {
              this.issues = [...this.issues, ...t];
            });
          let e = new.target.prototype;
          Object.setPrototypeOf ? Object.setPrototypeOf(this, e) : (this.__proto__ = e),
            (this.name = 'ZodError'),
            (this.issues = t);
        }
        get errors() {
          return this.issues;
        }
        format(t) {
          let e =
              t ||
              function (t) {
                return t.message;
              },
            r = { _errors: [] },
            n = (t) => {
              for (let i of t.issues)
                if ('invalid_union' === i.code) i.unionErrors.map(n);
                else if ('invalid_return_type' === i.code) n(i.returnTypeError);
                else if ('invalid_arguments' === i.code) n(i.argumentsError);
                else if (0 === i.path.length) r._errors.push(e(i));
                else {
                  let t = r,
                    n = 0;
                  for (; n < i.path.length; ) {
                    let r = i.path[n];
                    n === i.path.length - 1
                      ? ((t[r] = t[r] || { _errors: [] }), t[r]._errors.push(e(i)))
                      : (t[r] = t[r] || { _errors: [] }),
                      (t = t[r]),
                      n++;
                  }
                }
            };
          return n(this), r;
        }
        toString() {
          return this.message;
        }
        get message() {
          return JSON.stringify(this.issues, t3.jsonStringifyReplacer, 2);
        }
        get isEmpty() {
          return 0 === this.issues.length;
        }
        flatten(t = (t) => t.message) {
          let e = {},
            r = [];
          for (let n of this.issues)
            n.path.length > 0
              ? ((e[n.path[0]] = e[n.path[0]] || []), e[n.path[0]].push(t(n)))
              : r.push(t(n));
          return { formErrors: r, fieldErrors: e };
        }
        get formErrors() {
          return this.flatten();
        }
      }
      a.create = (t) => new a(t);
      let u = (t, e) => {
          let r;
          switch (t.code) {
            case o.invalid_type:
              r =
                t.received === i.undefined
                  ? 'Required'
                  : `Expected ${t.expected}, received ${t.received}`;
              break;
            case o.invalid_literal:
              r = `Invalid literal value, expected ${JSON.stringify(t.expected, t3.jsonStringifyReplacer)}`;
              break;
            case o.unrecognized_keys:
              r = `Unrecognized key(s) in object: ${t3.joinValues(t.keys, ', ')}`;
              break;
            case o.invalid_union:
              r = 'Invalid input';
              break;
            case o.invalid_union_discriminator:
              r = `Invalid discriminator value. Expected ${t3.joinValues(t.options)}`;
              break;
            case o.invalid_enum_value:
              r = `Invalid enum value. Expected ${t3.joinValues(t.options)}, received '${t.received}'`;
              break;
            case o.invalid_arguments:
              r = 'Invalid function arguments';
              break;
            case o.invalid_return_type:
              r = 'Invalid function return type';
              break;
            case o.invalid_date:
              r = 'Invalid date';
              break;
            case o.invalid_string:
              'object' == typeof t.validation
                ? 'includes' in t.validation
                  ? ((r = `Invalid input: must include "${t.validation.includes}"`),
                    'number' == typeof t.validation.position &&
                      (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`))
                  : 'startsWith' in t.validation
                    ? (r = `Invalid input: must start with "${t.validation.startsWith}"`)
                    : 'endsWith' in t.validation
                      ? (r = `Invalid input: must end with "${t.validation.endsWith}"`)
                      : t3.assertNever(t.validation)
                : (r = 'regex' !== t.validation ? `Invalid ${t.validation}` : 'Invalid');
              break;
            case o.too_small:
              r =
                'array' === t.type
                  ? `Array must contain ${t.exact ? 'exactly' : t.inclusive ? 'at least' : 'more than'} ${t.minimum} element(s)`
                  : 'string' === t.type
                    ? `String must contain ${t.exact ? 'exactly' : t.inclusive ? 'at least' : 'over'} ${t.minimum} character(s)`
                    : 'number' === t.type
                      ? `Number must be ${t.exact ? 'exactly equal to ' : t.inclusive ? 'greater than or equal to ' : 'greater than '}${t.minimum}`
                      : 'date' === t.type
                        ? `Date must be ${t.exact ? 'exactly equal to ' : t.inclusive ? 'greater than or equal to ' : 'greater than '}${new Date(Number(t.minimum))}`
                        : 'Invalid input';
              break;
            case o.too_big:
              r =
                'array' === t.type
                  ? `Array must contain ${t.exact ? 'exactly' : t.inclusive ? 'at most' : 'less than'} ${t.maximum} element(s)`
                  : 'string' === t.type
                    ? `String must contain ${t.exact ? 'exactly' : t.inclusive ? 'at most' : 'under'} ${t.maximum} character(s)`
                    : 'number' === t.type
                      ? `Number must be ${t.exact ? 'exactly' : t.inclusive ? 'less than or equal to' : 'less than'} ${t.maximum}`
                      : 'bigint' === t.type
                        ? `BigInt must be ${t.exact ? 'exactly' : t.inclusive ? 'less than or equal to' : 'less than'} ${t.maximum}`
                        : 'date' === t.type
                          ? `Date must be ${t.exact ? 'exactly' : t.inclusive ? 'smaller than or equal to' : 'smaller than'} ${new Date(Number(t.maximum))}`
                          : 'Invalid input';
              break;
            case o.custom:
              r = 'Invalid input';
              break;
            case o.invalid_intersection_types:
              r = 'Intersection results could not be merged';
              break;
            case o.not_multiple_of:
              r = `Number must be a multiple of ${t.multipleOf}`;
              break;
            case o.not_finite:
              r = 'Number must be finite';
              break;
            default:
              (r = e.defaultError), t3.assertNever(t);
          }
          return { message: r };
        },
        l = u;
      function h() {
        return l;
      }
      let c = (t) => {
        let { data: e, path: r, errorMaps: n, issueData: i } = t,
          s = [...r, ...(i.path || [])],
          o = { ...i, path: s },
          a = '';
        for (let t of n
          .filter((t) => !!t)
          .slice()
          .reverse())
          a = t(o, { data: e, defaultError: a }).message;
        return { ...i, path: s, message: i.message || a };
      };
      function d(t, e) {
        let r = c({
          issueData: e,
          data: t.data,
          path: t.path,
          errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, h(), u].filter((t) => !!t),
        });
        t.common.issues.push(r);
      }
      class f {
        constructor() {
          this.value = 'valid';
        }
        dirty() {
          'valid' === this.value && (this.value = 'dirty');
        }
        abort() {
          'aborted' !== this.value && (this.value = 'aborted');
        }
        static mergeArray(t, e) {
          let r = [];
          for (let n of e) {
            if ('aborted' === n.status) return p;
            'dirty' === n.status && t.dirty(), r.push(n.value);
          }
          return { status: t.value, value: r };
        }
        static async mergeObjectAsync(t, e) {
          let r = [];
          for (let t of e) r.push({ key: await t.key, value: await t.value });
          return f.mergeObjectSync(t, r);
        }
        static mergeObjectSync(t, e) {
          let r = {};
          for (let n of e) {
            let { key: e, value: i } = n;
            if ('aborted' === e.status || 'aborted' === i.status) return p;
            'dirty' === e.status && t.dirty(),
              'dirty' === i.status && t.dirty(),
              '__proto__' !== e.value &&
                (void 0 !== i.value || n.alwaysSet) &&
                (r[e.value] = i.value);
          }
          return { status: t.value, value: r };
        }
      }
      let p = Object.freeze({ status: 'aborted' }),
        m = (t) => ({ status: 'dirty', value: t }),
        g = (t) => ({ status: 'valid', value: t }),
        v = (t) => 'aborted' === t.status,
        y = (t) => 'dirty' === t.status,
        b = (t) => 'valid' === t.status,
        w = (t) => 'undefined' != typeof Promise && t instanceof Promise;
      ((t1 = t4 || (t4 = {})).errToObj = (t) => ('string' == typeof t ? { message: t } : t || {})),
        (t1.toString = (t) => ('string' == typeof t ? t : null == t ? void 0 : t.message));
      class A {
        constructor(t, e, r, n) {
          (this._cachedPath = []),
            (this.parent = t),
            (this.data = e),
            (this._path = r),
            (this._key = n);
        }
        get path() {
          return (
            this._cachedPath.length ||
              (this._key instanceof Array
                ? this._cachedPath.push(...this._path, ...this._key)
                : this._cachedPath.push(...this._path, this._key)),
            this._cachedPath
          );
        }
      }
      let _ = (t, e) => {
        if (b(e)) return { success: !0, data: e.value };
        if (!t.common.issues.length) throw Error('Validation failed but no issues detected.');
        return {
          success: !1,
          get error() {
            if (this._error) return this._error;
            let e = new a(t.common.issues);
            return (this._error = e), this._error;
          },
        };
      };
      function E(t) {
        if (!t) return {};
        let { errorMap: e, invalid_type_error: r, required_error: n, description: i } = t;
        if (e && (r || n))
          throw Error(
            'Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.'
          );
        return e
          ? { errorMap: e, description: i }
          : {
              errorMap: (t, e) =>
                'invalid_type' !== t.code
                  ? { message: e.defaultError }
                  : void 0 === e.data
                    ? { message: null != n ? n : e.defaultError }
                    : { message: null != r ? r : e.defaultError },
              description: i,
            };
      }
      class k {
        constructor(t) {
          (this.spa = this.safeParseAsync),
            (this._def = t),
            (this.parse = this.parse.bind(this)),
            (this.safeParse = this.safeParse.bind(this)),
            (this.parseAsync = this.parseAsync.bind(this)),
            (this.safeParseAsync = this.safeParseAsync.bind(this)),
            (this.spa = this.spa.bind(this)),
            (this.refine = this.refine.bind(this)),
            (this.refinement = this.refinement.bind(this)),
            (this.superRefine = this.superRefine.bind(this)),
            (this.optional = this.optional.bind(this)),
            (this.nullable = this.nullable.bind(this)),
            (this.nullish = this.nullish.bind(this)),
            (this.array = this.array.bind(this)),
            (this.promise = this.promise.bind(this)),
            (this.or = this.or.bind(this)),
            (this.and = this.and.bind(this)),
            (this.transform = this.transform.bind(this)),
            (this.brand = this.brand.bind(this)),
            (this.default = this.default.bind(this)),
            (this.catch = this.catch.bind(this)),
            (this.describe = this.describe.bind(this)),
            (this.pipe = this.pipe.bind(this)),
            (this.readonly = this.readonly.bind(this)),
            (this.isNullable = this.isNullable.bind(this)),
            (this.isOptional = this.isOptional.bind(this));
        }
        get description() {
          return this._def.description;
        }
        _getType(t) {
          return s(t.data);
        }
        _getOrReturnCtx(t, e) {
          return (
            e || {
              common: t.parent.common,
              data: t.data,
              parsedType: s(t.data),
              schemaErrorMap: this._def.errorMap,
              path: t.path,
              parent: t.parent,
            }
          );
        }
        _processInputParams(t) {
          return {
            status: new f(),
            ctx: {
              common: t.parent.common,
              data: t.data,
              parsedType: s(t.data),
              schemaErrorMap: this._def.errorMap,
              path: t.path,
              parent: t.parent,
            },
          };
        }
        _parseSync(t) {
          let e = this._parse(t);
          if (w(e)) throw Error('Synchronous parse encountered promise.');
          return e;
        }
        _parseAsync(t) {
          return Promise.resolve(this._parse(t));
        }
        parse(t, e) {
          let r = this.safeParse(t, e);
          if (r.success) return r.data;
          throw r.error;
        }
        safeParse(t, e) {
          var r;
          let n = {
              common: {
                issues: [],
                async: null !== (r = null == e ? void 0 : e.async) && void 0 !== r && r,
                contextualErrorMap: null == e ? void 0 : e.errorMap,
              },
              path: (null == e ? void 0 : e.path) || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: t,
              parsedType: s(t),
            },
            i = this._parseSync({ data: t, path: n.path, parent: n });
          return _(n, i);
        }
        async parseAsync(t, e) {
          let r = await this.safeParseAsync(t, e);
          if (r.success) return r.data;
          throw r.error;
        }
        async safeParseAsync(t, e) {
          let r = {
              common: {
                issues: [],
                contextualErrorMap: null == e ? void 0 : e.errorMap,
                async: !0,
              },
              path: (null == e ? void 0 : e.path) || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: t,
              parsedType: s(t),
            },
            n = this._parse({ data: t, path: r.path, parent: r });
          return _(r, await (w(n) ? n : Promise.resolve(n)));
        }
        refine(t, e) {
          let r = (t) =>
            'string' == typeof e || void 0 === e
              ? { message: e }
              : 'function' == typeof e
                ? e(t)
                : e;
          return this._refinement((e, n) => {
            let i = t(e),
              s = () => n.addIssue({ code: o.custom, ...r(e) });
            return 'undefined' != typeof Promise && i instanceof Promise
              ? i.then((t) => !!t || (s(), !1))
              : !!i || (s(), !1);
          });
        }
        refinement(t, e) {
          return this._refinement(
            (r, n) => !!t(r) || (n.addIssue('function' == typeof e ? e(r, n) : e), !1)
          );
        }
        _refinement(t) {
          return new tu({
            schema: this,
            typeName: t8.ZodEffects,
            effect: { type: 'refinement', refinement: t },
          });
        }
        superRefine(t) {
          return this._refinement(t);
        }
        optional() {
          return tl.create(this, this._def);
        }
        nullable() {
          return th.create(this, this._def);
        }
        nullish() {
          return this.nullable().optional();
        }
        array() {
          return j.create(this, this._def);
        }
        promise() {
          return ta.create(this, this._def);
        }
        or(t) {
          return K.create([this, t], this._def);
        }
        and(t) {
          return V.create(this, t, this._def);
        }
        transform(t) {
          return new tu({
            ...E(this._def),
            schema: this,
            typeName: t8.ZodEffects,
            effect: { type: 'transform', transform: t },
          });
        }
        default(t) {
          return new tc({
            ...E(this._def),
            innerType: this,
            defaultValue: 'function' == typeof t ? t : () => t,
            typeName: t8.ZodDefault,
          });
        }
        brand() {
          return new tm({ typeName: t8.ZodBranded, type: this, ...E(this._def) });
        }
        catch(t) {
          return new td({
            ...E(this._def),
            innerType: this,
            catchValue: 'function' == typeof t ? t : () => t,
            typeName: t8.ZodCatch,
          });
        }
        describe(t) {
          return new this.constructor({ ...this._def, description: t });
        }
        pipe(t) {
          return tg.create(this, t);
        }
        readonly() {
          return tv.create(this);
        }
        isOptional() {
          return this.safeParse(void 0).success;
        }
        isNullable() {
          return this.safeParse(null).success;
        }
      }
      let x = /^c[^\s-]{8,}$/i,
        N = /^[a-z][a-z0-9]*$/,
        M = /^[0-9A-HJKMNP-TV-Z]{26}$/,
        I =
          /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
        P = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
        S =
          /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
        C =
          /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
        T = (t) =>
          t.precision
            ? t.offset
              ? RegExp(
                  `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`
                )
              : RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`)
            : 0 === t.precision
              ? t.offset
                ? RegExp('^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$')
                : RegExp('^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$')
              : t.offset
                ? RegExp(
                    '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$'
                  )
                : RegExp('^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$');
      class R extends k {
        _parse(t) {
          let e;
          if ((this._def.coerce && (t.data = String(t.data)), this._getType(t) !== i.string)) {
            let e = this._getOrReturnCtx(t);
            return d(e, { code: o.invalid_type, expected: i.string, received: e.parsedType }), p;
          }
          let r = new f();
          for (let i of this._def.checks)
            if ('min' === i.kind)
              t.data.length < i.value &&
                (d((e = this._getOrReturnCtx(t, e)), {
                  code: o.too_small,
                  minimum: i.value,
                  type: 'string',
                  inclusive: !0,
                  exact: !1,
                  message: i.message,
                }),
                r.dirty());
            else if ('max' === i.kind)
              t.data.length > i.value &&
                (d((e = this._getOrReturnCtx(t, e)), {
                  code: o.too_big,
                  maximum: i.value,
                  type: 'string',
                  inclusive: !0,
                  exact: !1,
                  message: i.message,
                }),
                r.dirty());
            else if ('length' === i.kind) {
              let n = t.data.length > i.value,
                s = t.data.length < i.value;
              (n || s) &&
                ((e = this._getOrReturnCtx(t, e)),
                n
                  ? d(e, {
                      code: o.too_big,
                      maximum: i.value,
                      type: 'string',
                      inclusive: !0,
                      exact: !0,
                      message: i.message,
                    })
                  : s &&
                    d(e, {
                      code: o.too_small,
                      minimum: i.value,
                      type: 'string',
                      inclusive: !0,
                      exact: !0,
                      message: i.message,
                    }),
                r.dirty());
            } else if ('email' === i.kind)
              P.test(t.data) ||
                (d((e = this._getOrReturnCtx(t, e)), {
                  validation: 'email',
                  code: o.invalid_string,
                  message: i.message,
                }),
                r.dirty());
            else if ('emoji' === i.kind)
              n || (n = RegExp('^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$', 'u')),
                n.test(t.data) ||
                  (d((e = this._getOrReturnCtx(t, e)), {
                    validation: 'emoji',
                    code: o.invalid_string,
                    message: i.message,
                  }),
                  r.dirty());
            else if ('uuid' === i.kind)
              I.test(t.data) ||
                (d((e = this._getOrReturnCtx(t, e)), {
                  validation: 'uuid',
                  code: o.invalid_string,
                  message: i.message,
                }),
                r.dirty());
            else if ('cuid' === i.kind)
              x.test(t.data) ||
                (d((e = this._getOrReturnCtx(t, e)), {
                  validation: 'cuid',
                  code: o.invalid_string,
                  message: i.message,
                }),
                r.dirty());
            else if ('cuid2' === i.kind)
              N.test(t.data) ||
                (d((e = this._getOrReturnCtx(t, e)), {
                  validation: 'cuid2',
                  code: o.invalid_string,
                  message: i.message,
                }),
                r.dirty());
            else if ('ulid' === i.kind)
              M.test(t.data) ||
                (d((e = this._getOrReturnCtx(t, e)), {
                  validation: 'ulid',
                  code: o.invalid_string,
                  message: i.message,
                }),
                r.dirty());
            else if ('url' === i.kind)
              try {
                new URL(t.data);
              } catch (n) {
                d((e = this._getOrReturnCtx(t, e)), {
                  validation: 'url',
                  code: o.invalid_string,
                  message: i.message,
                }),
                  r.dirty();
              }
            else if ('regex' === i.kind)
              (i.regex.lastIndex = 0),
                i.regex.test(t.data) ||
                  (d((e = this._getOrReturnCtx(t, e)), {
                    validation: 'regex',
                    code: o.invalid_string,
                    message: i.message,
                  }),
                  r.dirty());
            else if ('trim' === i.kind) t.data = t.data.trim();
            else if ('includes' === i.kind)
              t.data.includes(i.value, i.position) ||
                (d((e = this._getOrReturnCtx(t, e)), {
                  code: o.invalid_string,
                  validation: { includes: i.value, position: i.position },
                  message: i.message,
                }),
                r.dirty());
            else if ('toLowerCase' === i.kind) t.data = t.data.toLowerCase();
            else if ('toUpperCase' === i.kind) t.data = t.data.toUpperCase();
            else if ('startsWith' === i.kind)
              t.data.startsWith(i.value) ||
                (d((e = this._getOrReturnCtx(t, e)), {
                  code: o.invalid_string,
                  validation: { startsWith: i.value },
                  message: i.message,
                }),
                r.dirty());
            else if ('endsWith' === i.kind)
              t.data.endsWith(i.value) ||
                (d((e = this._getOrReturnCtx(t, e)), {
                  code: o.invalid_string,
                  validation: { endsWith: i.value },
                  message: i.message,
                }),
                r.dirty());
            else if ('datetime' === i.kind)
              T(i).test(t.data) ||
                (d((e = this._getOrReturnCtx(t, e)), {
                  code: o.invalid_string,
                  validation: 'datetime',
                  message: i.message,
                }),
                r.dirty());
            else if ('ip' === i.kind) {
              var s, a;
              (s = t.data),
                (('v4' === (a = i.version) || !a) && S.test(s)) ||
                  (('v6' === a || !a) && C.test(s)) ||
                  (d((e = this._getOrReturnCtx(t, e)), {
                    validation: 'ip',
                    code: o.invalid_string,
                    message: i.message,
                  }),
                  r.dirty());
            } else t3.assertNever(i);
          return { status: r.value, value: t.data };
        }
        _regex(t, e, r) {
          return this.refinement((e) => t.test(e), {
            validation: e,
            code: o.invalid_string,
            ...t4.errToObj(r),
          });
        }
        _addCheck(t) {
          return new R({ ...this._def, checks: [...this._def.checks, t] });
        }
        email(t) {
          return this._addCheck({ kind: 'email', ...t4.errToObj(t) });
        }
        url(t) {
          return this._addCheck({ kind: 'url', ...t4.errToObj(t) });
        }
        emoji(t) {
          return this._addCheck({ kind: 'emoji', ...t4.errToObj(t) });
        }
        uuid(t) {
          return this._addCheck({ kind: 'uuid', ...t4.errToObj(t) });
        }
        cuid(t) {
          return this._addCheck({ kind: 'cuid', ...t4.errToObj(t) });
        }
        cuid2(t) {
          return this._addCheck({ kind: 'cuid2', ...t4.errToObj(t) });
        }
        ulid(t) {
          return this._addCheck({ kind: 'ulid', ...t4.errToObj(t) });
        }
        ip(t) {
          return this._addCheck({ kind: 'ip', ...t4.errToObj(t) });
        }
        datetime(t) {
          var e;
          return 'string' == typeof t
            ? this._addCheck({ kind: 'datetime', precision: null, offset: !1, message: t })
            : this._addCheck({
                kind: 'datetime',
                precision:
                  void 0 === (null == t ? void 0 : t.precision)
                    ? null
                    : null == t
                      ? void 0
                      : t.precision,
                offset: null !== (e = null == t ? void 0 : t.offset) && void 0 !== e && e,
                ...t4.errToObj(null == t ? void 0 : t.message),
              });
        }
        regex(t, e) {
          return this._addCheck({ kind: 'regex', regex: t, ...t4.errToObj(e) });
        }
        includes(t, e) {
          return this._addCheck({
            kind: 'includes',
            value: t,
            position: null == e ? void 0 : e.position,
            ...t4.errToObj(null == e ? void 0 : e.message),
          });
        }
        startsWith(t, e) {
          return this._addCheck({ kind: 'startsWith', value: t, ...t4.errToObj(e) });
        }
        endsWith(t, e) {
          return this._addCheck({ kind: 'endsWith', value: t, ...t4.errToObj(e) });
        }
        min(t, e) {
          return this._addCheck({ kind: 'min', value: t, ...t4.errToObj(e) });
        }
        max(t, e) {
          return this._addCheck({ kind: 'max', value: t, ...t4.errToObj(e) });
        }
        length(t, e) {
          return this._addCheck({ kind: 'length', value: t, ...t4.errToObj(e) });
        }
        nonempty(t) {
          return this.min(1, t4.errToObj(t));
        }
        trim() {
          return new R({ ...this._def, checks: [...this._def.checks, { kind: 'trim' }] });
        }
        toLowerCase() {
          return new R({ ...this._def, checks: [...this._def.checks, { kind: 'toLowerCase' }] });
        }
        toUpperCase() {
          return new R({ ...this._def, checks: [...this._def.checks, { kind: 'toUpperCase' }] });
        }
        get isDatetime() {
          return !!this._def.checks.find((t) => 'datetime' === t.kind);
        }
        get isEmail() {
          return !!this._def.checks.find((t) => 'email' === t.kind);
        }
        get isURL() {
          return !!this._def.checks.find((t) => 'url' === t.kind);
        }
        get isEmoji() {
          return !!this._def.checks.find((t) => 'emoji' === t.kind);
        }
        get isUUID() {
          return !!this._def.checks.find((t) => 'uuid' === t.kind);
        }
        get isCUID() {
          return !!this._def.checks.find((t) => 'cuid' === t.kind);
        }
        get isCUID2() {
          return !!this._def.checks.find((t) => 'cuid2' === t.kind);
        }
        get isULID() {
          return !!this._def.checks.find((t) => 'ulid' === t.kind);
        }
        get isIP() {
          return !!this._def.checks.find((t) => 'ip' === t.kind);
        }
        get minLength() {
          let t = null;
          for (let e of this._def.checks)
            'min' === e.kind && (null === t || e.value > t) && (t = e.value);
          return t;
        }
        get maxLength() {
          let t = null;
          for (let e of this._def.checks)
            'max' === e.kind && (null === t || e.value < t) && (t = e.value);
          return t;
        }
      }
      R.create = (t) => {
        var e;
        return new R({
          checks: [],
          typeName: t8.ZodString,
          coerce: null !== (e = null == t ? void 0 : t.coerce) && void 0 !== e && e,
          ...E(t),
        });
      };
      class O extends k {
        constructor() {
          super(...arguments),
            (this.min = this.gte),
            (this.max = this.lte),
            (this.step = this.multipleOf);
        }
        _parse(t) {
          let e;
          if ((this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== i.number)) {
            let e = this._getOrReturnCtx(t);
            return d(e, { code: o.invalid_type, expected: i.number, received: e.parsedType }), p;
          }
          let r = new f();
          for (let n of this._def.checks)
            'int' === n.kind
              ? t3.isInteger(t.data) ||
                (d((e = this._getOrReturnCtx(t, e)), {
                  code: o.invalid_type,
                  expected: 'integer',
                  received: 'float',
                  message: n.message,
                }),
                r.dirty())
              : 'min' === n.kind
                ? (n.inclusive ? t.data < n.value : t.data <= n.value) &&
                  (d((e = this._getOrReturnCtx(t, e)), {
                    code: o.too_small,
                    minimum: n.value,
                    type: 'number',
                    inclusive: n.inclusive,
                    exact: !1,
                    message: n.message,
                  }),
                  r.dirty())
                : 'max' === n.kind
                  ? (n.inclusive ? t.data > n.value : t.data >= n.value) &&
                    (d((e = this._getOrReturnCtx(t, e)), {
                      code: o.too_big,
                      maximum: n.value,
                      type: 'number',
                      inclusive: n.inclusive,
                      exact: !1,
                      message: n.message,
                    }),
                    r.dirty())
                  : 'multipleOf' === n.kind
                    ? 0 !==
                        (function (t, e) {
                          let r = (t.toString().split('.')[1] || '').length,
                            n = (e.toString().split('.')[1] || '').length,
                            i = r > n ? r : n;
                          return (
                            (parseInt(t.toFixed(i).replace('.', '')) %
                              parseInt(e.toFixed(i).replace('.', ''))) /
                            Math.pow(10, i)
                          );
                        })(t.data, n.value) &&
                      (d((e = this._getOrReturnCtx(t, e)), {
                        code: o.not_multiple_of,
                        multipleOf: n.value,
                        message: n.message,
                      }),
                      r.dirty())
                    : 'finite' === n.kind
                      ? Number.isFinite(t.data) ||
                        (d((e = this._getOrReturnCtx(t, e)), {
                          code: o.not_finite,
                          message: n.message,
                        }),
                        r.dirty())
                      : t3.assertNever(n);
          return { status: r.value, value: t.data };
        }
        gte(t, e) {
          return this.setLimit('min', t, !0, t4.toString(e));
        }
        gt(t, e) {
          return this.setLimit('min', t, !1, t4.toString(e));
        }
        lte(t, e) {
          return this.setLimit('max', t, !0, t4.toString(e));
        }
        lt(t, e) {
          return this.setLimit('max', t, !1, t4.toString(e));
        }
        setLimit(t, e, r, n) {
          return new O({
            ...this._def,
            checks: [
              ...this._def.checks,
              { kind: t, value: e, inclusive: r, message: t4.toString(n) },
            ],
          });
        }
        _addCheck(t) {
          return new O({ ...this._def, checks: [...this._def.checks, t] });
        }
        int(t) {
          return this._addCheck({ kind: 'int', message: t4.toString(t) });
        }
        positive(t) {
          return this._addCheck({ kind: 'min', value: 0, inclusive: !1, message: t4.toString(t) });
        }
        negative(t) {
          return this._addCheck({ kind: 'max', value: 0, inclusive: !1, message: t4.toString(t) });
        }
        nonpositive(t) {
          return this._addCheck({ kind: 'max', value: 0, inclusive: !0, message: t4.toString(t) });
        }
        nonnegative(t) {
          return this._addCheck({ kind: 'min', value: 0, inclusive: !0, message: t4.toString(t) });
        }
        multipleOf(t, e) {
          return this._addCheck({ kind: 'multipleOf', value: t, message: t4.toString(e) });
        }
        finite(t) {
          return this._addCheck({ kind: 'finite', message: t4.toString(t) });
        }
        safe(t) {
          return this._addCheck({
            kind: 'min',
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: t4.toString(t),
          })._addCheck({
            kind: 'max',
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: t4.toString(t),
          });
        }
        get minValue() {
          let t = null;
          for (let e of this._def.checks)
            'min' === e.kind && (null === t || e.value > t) && (t = e.value);
          return t;
        }
        get maxValue() {
          let t = null;
          for (let e of this._def.checks)
            'max' === e.kind && (null === t || e.value < t) && (t = e.value);
          return t;
        }
        get isInt() {
          return !!this._def.checks.find(
            (t) => 'int' === t.kind || ('multipleOf' === t.kind && t3.isInteger(t.value))
          );
        }
        get isFinite() {
          let t = null,
            e = null;
          for (let r of this._def.checks) {
            if ('finite' === r.kind || 'int' === r.kind || 'multipleOf' === r.kind) return !0;
            'min' === r.kind
              ? (null === e || r.value > e) && (e = r.value)
              : 'max' === r.kind && (null === t || r.value < t) && (t = r.value);
          }
          return Number.isFinite(e) && Number.isFinite(t);
        }
      }
      O.create = (t) =>
        new O({
          checks: [],
          typeName: t8.ZodNumber,
          coerce: (null == t ? void 0 : t.coerce) || !1,
          ...E(t),
        });
      class B extends k {
        constructor() {
          super(...arguments), (this.min = this.gte), (this.max = this.lte);
        }
        _parse(t) {
          let e;
          if ((this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== i.bigint)) {
            let e = this._getOrReturnCtx(t);
            return d(e, { code: o.invalid_type, expected: i.bigint, received: e.parsedType }), p;
          }
          let r = new f();
          for (let n of this._def.checks)
            'min' === n.kind
              ? (n.inclusive ? t.data < n.value : t.data <= n.value) &&
                (d((e = this._getOrReturnCtx(t, e)), {
                  code: o.too_small,
                  type: 'bigint',
                  minimum: n.value,
                  inclusive: n.inclusive,
                  message: n.message,
                }),
                r.dirty())
              : 'max' === n.kind
                ? (n.inclusive ? t.data > n.value : t.data >= n.value) &&
                  (d((e = this._getOrReturnCtx(t, e)), {
                    code: o.too_big,
                    type: 'bigint',
                    maximum: n.value,
                    inclusive: n.inclusive,
                    message: n.message,
                  }),
                  r.dirty())
                : 'multipleOf' === n.kind
                  ? t.data % n.value !== BigInt(0) &&
                    (d((e = this._getOrReturnCtx(t, e)), {
                      code: o.not_multiple_of,
                      multipleOf: n.value,
                      message: n.message,
                    }),
                    r.dirty())
                  : t3.assertNever(n);
          return { status: r.value, value: t.data };
        }
        gte(t, e) {
          return this.setLimit('min', t, !0, t4.toString(e));
        }
        gt(t, e) {
          return this.setLimit('min', t, !1, t4.toString(e));
        }
        lte(t, e) {
          return this.setLimit('max', t, !0, t4.toString(e));
        }
        lt(t, e) {
          return this.setLimit('max', t, !1, t4.toString(e));
        }
        setLimit(t, e, r, n) {
          return new B({
            ...this._def,
            checks: [
              ...this._def.checks,
              { kind: t, value: e, inclusive: r, message: t4.toString(n) },
            ],
          });
        }
        _addCheck(t) {
          return new B({ ...this._def, checks: [...this._def.checks, t] });
        }
        positive(t) {
          return this._addCheck({
            kind: 'min',
            value: BigInt(0),
            inclusive: !1,
            message: t4.toString(t),
          });
        }
        negative(t) {
          return this._addCheck({
            kind: 'max',
            value: BigInt(0),
            inclusive: !1,
            message: t4.toString(t),
          });
        }
        nonpositive(t) {
          return this._addCheck({
            kind: 'max',
            value: BigInt(0),
            inclusive: !0,
            message: t4.toString(t),
          });
        }
        nonnegative(t) {
          return this._addCheck({
            kind: 'min',
            value: BigInt(0),
            inclusive: !0,
            message: t4.toString(t),
          });
        }
        multipleOf(t, e) {
          return this._addCheck({ kind: 'multipleOf', value: t, message: t4.toString(e) });
        }
        get minValue() {
          let t = null;
          for (let e of this._def.checks)
            'min' === e.kind && (null === t || e.value > t) && (t = e.value);
          return t;
        }
        get maxValue() {
          let t = null;
          for (let e of this._def.checks)
            'max' === e.kind && (null === t || e.value < t) && (t = e.value);
          return t;
        }
      }
      B.create = (t) => {
        var e;
        return new B({
          checks: [],
          typeName: t8.ZodBigInt,
          coerce: null !== (e = null == t ? void 0 : t.coerce) && void 0 !== e && e,
          ...E(t),
        });
      };
      class D extends k {
        _parse(t) {
          if ((this._def.coerce && (t.data = !!t.data), this._getType(t) !== i.boolean)) {
            let e = this._getOrReturnCtx(t);
            return d(e, { code: o.invalid_type, expected: i.boolean, received: e.parsedType }), p;
          }
          return g(t.data);
        }
      }
      D.create = (t) =>
        new D({ typeName: t8.ZodBoolean, coerce: (null == t ? void 0 : t.coerce) || !1, ...E(t) });
      class L extends k {
        _parse(t) {
          let e;
          if ((this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== i.date)) {
            let e = this._getOrReturnCtx(t);
            return d(e, { code: o.invalid_type, expected: i.date, received: e.parsedType }), p;
          }
          if (isNaN(t.data.getTime()))
            return d(this._getOrReturnCtx(t), { code: o.invalid_date }), p;
          let r = new f();
          for (let n of this._def.checks)
            'min' === n.kind
              ? t.data.getTime() < n.value &&
                (d((e = this._getOrReturnCtx(t, e)), {
                  code: o.too_small,
                  message: n.message,
                  inclusive: !0,
                  exact: !1,
                  minimum: n.value,
                  type: 'date',
                }),
                r.dirty())
              : 'max' === n.kind
                ? t.data.getTime() > n.value &&
                  (d((e = this._getOrReturnCtx(t, e)), {
                    code: o.too_big,
                    message: n.message,
                    inclusive: !0,
                    exact: !1,
                    maximum: n.value,
                    type: 'date',
                  }),
                  r.dirty())
                : t3.assertNever(n);
          return { status: r.value, value: new Date(t.data.getTime()) };
        }
        _addCheck(t) {
          return new L({ ...this._def, checks: [...this._def.checks, t] });
        }
        min(t, e) {
          return this._addCheck({ kind: 'min', value: t.getTime(), message: t4.toString(e) });
        }
        max(t, e) {
          return this._addCheck({ kind: 'max', value: t.getTime(), message: t4.toString(e) });
        }
        get minDate() {
          let t = null;
          for (let e of this._def.checks)
            'min' === e.kind && (null === t || e.value > t) && (t = e.value);
          return null != t ? new Date(t) : null;
        }
        get maxDate() {
          let t = null;
          for (let e of this._def.checks)
            'max' === e.kind && (null === t || e.value < t) && (t = e.value);
          return null != t ? new Date(t) : null;
        }
      }
      L.create = (t) =>
        new L({
          checks: [],
          coerce: (null == t ? void 0 : t.coerce) || !1,
          typeName: t8.ZodDate,
          ...E(t),
        });
      class U extends k {
        _parse(t) {
          if (this._getType(t) !== i.symbol) {
            let e = this._getOrReturnCtx(t);
            return d(e, { code: o.invalid_type, expected: i.symbol, received: e.parsedType }), p;
          }
          return g(t.data);
        }
      }
      U.create = (t) => new U({ typeName: t8.ZodSymbol, ...E(t) });
      class F extends k {
        _parse(t) {
          if (this._getType(t) !== i.undefined) {
            let e = this._getOrReturnCtx(t);
            return d(e, { code: o.invalid_type, expected: i.undefined, received: e.parsedType }), p;
          }
          return g(t.data);
        }
      }
      F.create = (t) => new F({ typeName: t8.ZodUndefined, ...E(t) });
      class G extends k {
        _parse(t) {
          if (this._getType(t) !== i.null) {
            let e = this._getOrReturnCtx(t);
            return d(e, { code: o.invalid_type, expected: i.null, received: e.parsedType }), p;
          }
          return g(t.data);
        }
      }
      G.create = (t) => new G({ typeName: t8.ZodNull, ...E(t) });
      class z extends k {
        constructor() {
          super(...arguments), (this._any = !0);
        }
        _parse(t) {
          return g(t.data);
        }
      }
      z.create = (t) => new z({ typeName: t8.ZodAny, ...E(t) });
      class Z extends k {
        constructor() {
          super(...arguments), (this._unknown = !0);
        }
        _parse(t) {
          return g(t.data);
        }
      }
      Z.create = (t) => new Z({ typeName: t8.ZodUnknown, ...E(t) });
      class Y extends k {
        _parse(t) {
          let e = this._getOrReturnCtx(t);
          return d(e, { code: o.invalid_type, expected: i.never, received: e.parsedType }), p;
        }
      }
      Y.create = (t) => new Y({ typeName: t8.ZodNever, ...E(t) });
      class q extends k {
        _parse(t) {
          if (this._getType(t) !== i.undefined) {
            let e = this._getOrReturnCtx(t);
            return d(e, { code: o.invalid_type, expected: i.void, received: e.parsedType }), p;
          }
          return g(t.data);
        }
      }
      q.create = (t) => new q({ typeName: t8.ZodVoid, ...E(t) });
      class j extends k {
        _parse(t) {
          let { ctx: e, status: r } = this._processInputParams(t),
            n = this._def;
          if (e.parsedType !== i.array)
            return d(e, { code: o.invalid_type, expected: i.array, received: e.parsedType }), p;
          if (null !== n.exactLength) {
            let t = e.data.length > n.exactLength.value,
              i = e.data.length < n.exactLength.value;
            (t || i) &&
              (d(e, {
                code: t ? o.too_big : o.too_small,
                minimum: i ? n.exactLength.value : void 0,
                maximum: t ? n.exactLength.value : void 0,
                type: 'array',
                inclusive: !0,
                exact: !0,
                message: n.exactLength.message,
              }),
              r.dirty());
          }
          if (
            (null !== n.minLength &&
              e.data.length < n.minLength.value &&
              (d(e, {
                code: o.too_small,
                minimum: n.minLength.value,
                type: 'array',
                inclusive: !0,
                exact: !1,
                message: n.minLength.message,
              }),
              r.dirty()),
            null !== n.maxLength &&
              e.data.length > n.maxLength.value &&
              (d(e, {
                code: o.too_big,
                maximum: n.maxLength.value,
                type: 'array',
                inclusive: !0,
                exact: !1,
                message: n.maxLength.message,
              }),
              r.dirty()),
            e.common.async)
          )
            return Promise.all(
              [...e.data].map((t, r) => n.type._parseAsync(new A(e, t, e.path, r)))
            ).then((t) => f.mergeArray(r, t));
          let s = [...e.data].map((t, r) => n.type._parseSync(new A(e, t, e.path, r)));
          return f.mergeArray(r, s);
        }
        get element() {
          return this._def.type;
        }
        min(t, e) {
          return new j({ ...this._def, minLength: { value: t, message: t4.toString(e) } });
        }
        max(t, e) {
          return new j({ ...this._def, maxLength: { value: t, message: t4.toString(e) } });
        }
        length(t, e) {
          return new j({ ...this._def, exactLength: { value: t, message: t4.toString(e) } });
        }
        nonempty(t) {
          return this.min(1, t);
        }
      }
      j.create = (t, e) =>
        new j({
          type: t,
          minLength: null,
          maxLength: null,
          exactLength: null,
          typeName: t8.ZodArray,
          ...E(e),
        });
      class H extends k {
        constructor() {
          super(...arguments),
            (this._cached = null),
            (this.nonstrict = this.passthrough),
            (this.augment = this.extend);
        }
        _getCached() {
          if (null !== this._cached) return this._cached;
          let t = this._def.shape(),
            e = t3.objectKeys(t);
          return (this._cached = { shape: t, keys: e });
        }
        _parse(t) {
          if (this._getType(t) !== i.object) {
            let e = this._getOrReturnCtx(t);
            return d(e, { code: o.invalid_type, expected: i.object, received: e.parsedType }), p;
          }
          let { status: e, ctx: r } = this._processInputParams(t),
            { shape: n, keys: s } = this._getCached(),
            a = [];
          if (!(this._def.catchall instanceof Y && 'strip' === this._def.unknownKeys))
            for (let t in r.data) s.includes(t) || a.push(t);
          let u = [];
          for (let t of s) {
            let e = n[t],
              i = r.data[t];
            u.push({
              key: { status: 'valid', value: t },
              value: e._parse(new A(r, i, r.path, t)),
              alwaysSet: t in r.data,
            });
          }
          if (this._def.catchall instanceof Y) {
            let t = this._def.unknownKeys;
            if ('passthrough' === t)
              for (let t of a)
                u.push({
                  key: { status: 'valid', value: t },
                  value: { status: 'valid', value: r.data[t] },
                });
            else if ('strict' === t)
              a.length > 0 && (d(r, { code: o.unrecognized_keys, keys: a }), e.dirty());
            else if ('strip' === t);
            else throw Error('Internal ZodObject error: invalid unknownKeys value.');
          } else {
            let t = this._def.catchall;
            for (let e of a) {
              let n = r.data[e];
              u.push({
                key: { status: 'valid', value: e },
                value: t._parse(new A(r, n, r.path, e)),
                alwaysSet: e in r.data,
              });
            }
          }
          return r.common.async
            ? Promise.resolve()
                .then(async () => {
                  let t = [];
                  for (let e of u) {
                    let r = await e.key;
                    t.push({ key: r, value: await e.value, alwaysSet: e.alwaysSet });
                  }
                  return t;
                })
                .then((t) => f.mergeObjectSync(e, t))
            : f.mergeObjectSync(e, u);
        }
        get shape() {
          return this._def.shape();
        }
        strict(t) {
          return (
            t4.errToObj,
            new H({
              ...this._def,
              unknownKeys: 'strict',
              ...(void 0 !== t
                ? {
                    errorMap: (e, r) => {
                      var n, i, s, o;
                      let a =
                        null !==
                          (s =
                            null === (i = (n = this._def).errorMap) || void 0 === i
                              ? void 0
                              : i.call(n, e, r).message) && void 0 !== s
                          ? s
                          : r.defaultError;
                      return 'unrecognized_keys' === e.code
                        ? { message: null !== (o = t4.errToObj(t).message) && void 0 !== o ? o : a }
                        : { message: a };
                    },
                  }
                : {}),
            })
          );
        }
        strip() {
          return new H({ ...this._def, unknownKeys: 'strip' });
        }
        passthrough() {
          return new H({ ...this._def, unknownKeys: 'passthrough' });
        }
        extend(t) {
          return new H({ ...this._def, shape: () => ({ ...this._def.shape(), ...t }) });
        }
        merge(t) {
          return new H({
            unknownKeys: t._def.unknownKeys,
            catchall: t._def.catchall,
            shape: () => ({ ...this._def.shape(), ...t._def.shape() }),
            typeName: t8.ZodObject,
          });
        }
        setKey(t, e) {
          return this.augment({ [t]: e });
        }
        catchall(t) {
          return new H({ ...this._def, catchall: t });
        }
        pick(t) {
          let e = {};
          return (
            t3.objectKeys(t).forEach((r) => {
              t[r] && this.shape[r] && (e[r] = this.shape[r]);
            }),
            new H({ ...this._def, shape: () => e })
          );
        }
        omit(t) {
          let e = {};
          return (
            t3.objectKeys(this.shape).forEach((r) => {
              t[r] || (e[r] = this.shape[r]);
            }),
            new H({ ...this._def, shape: () => e })
          );
        }
        deepPartial() {
          return (function t(e) {
            if (e instanceof H) {
              let r = {};
              for (let n in e.shape) {
                let i = e.shape[n];
                r[n] = tl.create(t(i));
              }
              return new H({ ...e._def, shape: () => r });
            }
            return e instanceof j
              ? new j({ ...e._def, type: t(e.element) })
              : e instanceof tl
                ? tl.create(t(e.unwrap()))
                : e instanceof th
                  ? th.create(t(e.unwrap()))
                  : e instanceof W
                    ? W.create(e.items.map((e) => t(e)))
                    : e;
          })(this);
        }
        partial(t) {
          let e = {};
          return (
            t3.objectKeys(this.shape).forEach((r) => {
              let n = this.shape[r];
              t && !t[r] ? (e[r] = n) : (e[r] = n.optional());
            }),
            new H({ ...this._def, shape: () => e })
          );
        }
        required(t) {
          let e = {};
          return (
            t3.objectKeys(this.shape).forEach((r) => {
              if (t && !t[r]) e[r] = this.shape[r];
              else {
                let t = this.shape[r];
                for (; t instanceof tl; ) t = t._def.innerType;
                e[r] = t;
              }
            }),
            new H({ ...this._def, shape: () => e })
          );
        }
        keyof() {
          return ti(t3.objectKeys(this.shape));
        }
      }
      (H.create = (t, e) =>
        new H({
          shape: () => t,
          unknownKeys: 'strip',
          catchall: Y.create(),
          typeName: t8.ZodObject,
          ...E(e),
        })),
        (H.strictCreate = (t, e) =>
          new H({
            shape: () => t,
            unknownKeys: 'strict',
            catchall: Y.create(),
            typeName: t8.ZodObject,
            ...E(e),
          })),
        (H.lazycreate = (t, e) =>
          new H({
            shape: t,
            unknownKeys: 'strip',
            catchall: Y.create(),
            typeName: t8.ZodObject,
            ...E(e),
          }));
      class K extends k {
        _parse(t) {
          let { ctx: e } = this._processInputParams(t),
            r = this._def.options;
          if (e.common.async)
            return Promise.all(
              r.map(async (t) => {
                let r = { ...e, common: { ...e.common, issues: [] }, parent: null };
                return {
                  result: await t._parseAsync({ data: e.data, path: e.path, parent: r }),
                  ctx: r,
                };
              })
            ).then(function (t) {
              for (let e of t) if ('valid' === e.result.status) return e.result;
              for (let r of t)
                if ('dirty' === r.result.status)
                  return e.common.issues.push(...r.ctx.common.issues), r.result;
              let r = t.map((t) => new a(t.ctx.common.issues));
              return d(e, { code: o.invalid_union, unionErrors: r }), p;
            });
          {
            let t;
            let n = [];
            for (let i of r) {
              let r = { ...e, common: { ...e.common, issues: [] }, parent: null },
                s = i._parseSync({ data: e.data, path: e.path, parent: r });
              if ('valid' === s.status) return s;
              'dirty' !== s.status || t || (t = { result: s, ctx: r }),
                r.common.issues.length && n.push(r.common.issues);
            }
            if (t) return e.common.issues.push(...t.ctx.common.issues), t.result;
            let i = n.map((t) => new a(t));
            return d(e, { code: o.invalid_union, unionErrors: i }), p;
          }
        }
        get options() {
          return this._def.options;
        }
      }
      K.create = (t, e) => new K({ options: t, typeName: t8.ZodUnion, ...E(e) });
      let J = (t) => {
        if (t instanceof tr) return J(t.schema);
        if (t instanceof tu) return J(t.innerType());
        if (t instanceof tn) return [t.value];
        if (t instanceof ts) return t.options;
        if (t instanceof to) return Object.keys(t.enum);
        if (t instanceof tc) return J(t._def.innerType);
        if (t instanceof F) return [void 0];
        else if (t instanceof G) return [null];
        else return null;
      };
      class Q extends k {
        _parse(t) {
          let { ctx: e } = this._processInputParams(t);
          if (e.parsedType !== i.object)
            return d(e, { code: o.invalid_type, expected: i.object, received: e.parsedType }), p;
          let r = this.discriminator,
            n = e.data[r],
            s = this.optionsMap.get(n);
          return s
            ? e.common.async
              ? s._parseAsync({ data: e.data, path: e.path, parent: e })
              : s._parseSync({ data: e.data, path: e.path, parent: e })
            : (d(e, {
                code: o.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [r],
              }),
              p);
        }
        get discriminator() {
          return this._def.discriminator;
        }
        get options() {
          return this._def.options;
        }
        get optionsMap() {
          return this._def.optionsMap;
        }
        static create(t, e, r) {
          let n = new Map();
          for (let r of e) {
            let e = J(r.shape[t]);
            if (!e)
              throw Error(
                `A discriminator value for key \`${t}\` could not be extracted from all schema options`
              );
            for (let i of e) {
              if (n.has(i))
                throw Error(`Discriminator property ${String(t)} has duplicate value ${String(i)}`);
              n.set(i, r);
            }
          }
          return new Q({
            typeName: t8.ZodDiscriminatedUnion,
            discriminator: t,
            options: e,
            optionsMap: n,
            ...E(r),
          });
        }
      }
      class V extends k {
        _parse(t) {
          let { status: e, ctx: r } = this._processInputParams(t),
            n = (t, n) => {
              if (v(t) || v(n)) return p;
              let a = (function t(e, r) {
                let n = s(e),
                  o = s(r);
                if (e === r) return { valid: !0, data: e };
                if (n === i.object && o === i.object) {
                  let n = t3.objectKeys(r),
                    i = t3.objectKeys(e).filter((t) => -1 !== n.indexOf(t)),
                    s = { ...e, ...r };
                  for (let n of i) {
                    let i = t(e[n], r[n]);
                    if (!i.valid) return { valid: !1 };
                    s[n] = i.data;
                  }
                  return { valid: !0, data: s };
                }
                if (n === i.array && o === i.array) {
                  if (e.length !== r.length) return { valid: !1 };
                  let n = [];
                  for (let i = 0; i < e.length; i++) {
                    let s = t(e[i], r[i]);
                    if (!s.valid) return { valid: !1 };
                    n.push(s.data);
                  }
                  return { valid: !0, data: n };
                }
                return n === i.date && o === i.date && +e == +r
                  ? { valid: !0, data: e }
                  : { valid: !1 };
              })(t.value, n.value);
              return a.valid
                ? ((y(t) || y(n)) && e.dirty(), { status: e.value, value: a.data })
                : (d(r, { code: o.invalid_intersection_types }), p);
            };
          return r.common.async
            ? Promise.all([
                this._def.left._parseAsync({ data: r.data, path: r.path, parent: r }),
                this._def.right._parseAsync({ data: r.data, path: r.path, parent: r }),
              ]).then(([t, e]) => n(t, e))
            : n(
                this._def.left._parseSync({ data: r.data, path: r.path, parent: r }),
                this._def.right._parseSync({ data: r.data, path: r.path, parent: r })
              );
        }
      }
      V.create = (t, e, r) => new V({ left: t, right: e, typeName: t8.ZodIntersection, ...E(r) });
      class W extends k {
        _parse(t) {
          let { status: e, ctx: r } = this._processInputParams(t);
          if (r.parsedType !== i.array)
            return d(r, { code: o.invalid_type, expected: i.array, received: r.parsedType }), p;
          if (r.data.length < this._def.items.length)
            return (
              d(r, {
                code: o.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: 'array',
              }),
              p
            );
          !this._def.rest &&
            r.data.length > this._def.items.length &&
            (d(r, {
              code: o.too_big,
              maximum: this._def.items.length,
              inclusive: !0,
              exact: !1,
              type: 'array',
            }),
            e.dirty());
          let n = [...r.data]
            .map((t, e) => {
              let n = this._def.items[e] || this._def.rest;
              return n ? n._parse(new A(r, t, r.path, e)) : null;
            })
            .filter((t) => !!t);
          return r.common.async
            ? Promise.all(n).then((t) => f.mergeArray(e, t))
            : f.mergeArray(e, n);
        }
        get items() {
          return this._def.items;
        }
        rest(t) {
          return new W({ ...this._def, rest: t });
        }
      }
      W.create = (t, e) => {
        if (!Array.isArray(t)) throw Error('You must pass an array of schemas to z.tuple([ ... ])');
        return new W({ items: t, typeName: t8.ZodTuple, rest: null, ...E(e) });
      };
      class X extends k {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(t) {
          let { status: e, ctx: r } = this._processInputParams(t);
          if (r.parsedType !== i.object)
            return d(r, { code: o.invalid_type, expected: i.object, received: r.parsedType }), p;
          let n = [],
            s = this._def.keyType,
            a = this._def.valueType;
          for (let t in r.data)
            n.push({
              key: s._parse(new A(r, t, r.path, t)),
              value: a._parse(new A(r, r.data[t], r.path, t)),
            });
          return r.common.async ? f.mergeObjectAsync(e, n) : f.mergeObjectSync(e, n);
        }
        get element() {
          return this._def.valueType;
        }
        static create(t, e, r) {
          return new X(
            e instanceof k
              ? { keyType: t, valueType: e, typeName: t8.ZodRecord, ...E(r) }
              : { keyType: R.create(), valueType: t, typeName: t8.ZodRecord, ...E(e) }
          );
        }
      }
      class $ extends k {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(t) {
          let { status: e, ctx: r } = this._processInputParams(t);
          if (r.parsedType !== i.map)
            return d(r, { code: o.invalid_type, expected: i.map, received: r.parsedType }), p;
          let n = this._def.keyType,
            s = this._def.valueType,
            a = [...r.data.entries()].map(([t, e], i) => ({
              key: n._parse(new A(r, t, r.path, [i, 'key'])),
              value: s._parse(new A(r, e, r.path, [i, 'value'])),
            }));
          if (r.common.async) {
            let t = new Map();
            return Promise.resolve().then(async () => {
              for (let r of a) {
                let n = await r.key,
                  i = await r.value;
                if ('aborted' === n.status || 'aborted' === i.status) return p;
                ('dirty' === n.status || 'dirty' === i.status) && e.dirty(),
                  t.set(n.value, i.value);
              }
              return { status: e.value, value: t };
            });
          }
          {
            let t = new Map();
            for (let r of a) {
              let n = r.key,
                i = r.value;
              if ('aborted' === n.status || 'aborted' === i.status) return p;
              ('dirty' === n.status || 'dirty' === i.status) && e.dirty(), t.set(n.value, i.value);
            }
            return { status: e.value, value: t };
          }
        }
      }
      $.create = (t, e, r) => new $({ valueType: e, keyType: t, typeName: t8.ZodMap, ...E(r) });
      class tt extends k {
        _parse(t) {
          let { status: e, ctx: r } = this._processInputParams(t);
          if (r.parsedType !== i.set)
            return d(r, { code: o.invalid_type, expected: i.set, received: r.parsedType }), p;
          let n = this._def;
          null !== n.minSize &&
            r.data.size < n.minSize.value &&
            (d(r, {
              code: o.too_small,
              minimum: n.minSize.value,
              type: 'set',
              inclusive: !0,
              exact: !1,
              message: n.minSize.message,
            }),
            e.dirty()),
            null !== n.maxSize &&
              r.data.size > n.maxSize.value &&
              (d(r, {
                code: o.too_big,
                maximum: n.maxSize.value,
                type: 'set',
                inclusive: !0,
                exact: !1,
                message: n.maxSize.message,
              }),
              e.dirty());
          let s = this._def.valueType;
          function a(t) {
            let r = new Set();
            for (let n of t) {
              if ('aborted' === n.status) return p;
              'dirty' === n.status && e.dirty(), r.add(n.value);
            }
            return { status: e.value, value: r };
          }
          let u = [...r.data.values()].map((t, e) => s._parse(new A(r, t, r.path, e)));
          return r.common.async ? Promise.all(u).then((t) => a(t)) : a(u);
        }
        min(t, e) {
          return new tt({ ...this._def, minSize: { value: t, message: t4.toString(e) } });
        }
        max(t, e) {
          return new tt({ ...this._def, maxSize: { value: t, message: t4.toString(e) } });
        }
        size(t, e) {
          return this.min(t, e).max(t, e);
        }
        nonempty(t) {
          return this.min(1, t);
        }
      }
      tt.create = (t, e) =>
        new tt({ valueType: t, minSize: null, maxSize: null, typeName: t8.ZodSet, ...E(e) });
      class te extends k {
        constructor() {
          super(...arguments), (this.validate = this.implement);
        }
        _parse(t) {
          let { ctx: e } = this._processInputParams(t);
          if (e.parsedType !== i.function)
            return d(e, { code: o.invalid_type, expected: i.function, received: e.parsedType }), p;
          function r(t, r) {
            return c({
              data: t,
              path: e.path,
              errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, h(), u].filter((t) => !!t),
              issueData: { code: o.invalid_arguments, argumentsError: r },
            });
          }
          function n(t, r) {
            return c({
              data: t,
              path: e.path,
              errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, h(), u].filter((t) => !!t),
              issueData: { code: o.invalid_return_type, returnTypeError: r },
            });
          }
          let s = { errorMap: e.common.contextualErrorMap },
            l = e.data;
          if (this._def.returns instanceof ta) {
            let t = this;
            return g(async function (...e) {
              let i = new a([]),
                o = await t._def.args.parseAsync(e, s).catch((t) => {
                  throw (i.addIssue(r(e, t)), i);
                }),
                u = await Reflect.apply(l, this, o);
              return await t._def.returns._def.type.parseAsync(u, s).catch((t) => {
                throw (i.addIssue(n(u, t)), i);
              });
            });
          }
          {
            let t = this;
            return g(function (...e) {
              let i = t._def.args.safeParse(e, s);
              if (!i.success) throw new a([r(e, i.error)]);
              let o = Reflect.apply(l, this, i.data),
                u = t._def.returns.safeParse(o, s);
              if (!u.success) throw new a([n(o, u.error)]);
              return u.data;
            });
          }
        }
        parameters() {
          return this._def.args;
        }
        returnType() {
          return this._def.returns;
        }
        args(...t) {
          return new te({ ...this._def, args: W.create(t).rest(Z.create()) });
        }
        returns(t) {
          return new te({ ...this._def, returns: t });
        }
        implement(t) {
          return this.parse(t);
        }
        strictImplement(t) {
          return this.parse(t);
        }
        static create(t, e, r) {
          return new te({
            args: t || W.create([]).rest(Z.create()),
            returns: e || Z.create(),
            typeName: t8.ZodFunction,
            ...E(r),
          });
        }
      }
      class tr extends k {
        get schema() {
          return this._def.getter();
        }
        _parse(t) {
          let { ctx: e } = this._processInputParams(t);
          return this._def.getter()._parse({ data: e.data, path: e.path, parent: e });
        }
      }
      tr.create = (t, e) => new tr({ getter: t, typeName: t8.ZodLazy, ...E(e) });
      class tn extends k {
        _parse(t) {
          if (t.data !== this._def.value) {
            let e = this._getOrReturnCtx(t);
            return (
              d(e, { received: e.data, code: o.invalid_literal, expected: this._def.value }), p
            );
          }
          return { status: 'valid', value: t.data };
        }
        get value() {
          return this._def.value;
        }
      }
      function ti(t, e) {
        return new ts({ values: t, typeName: t8.ZodEnum, ...E(e) });
      }
      tn.create = (t, e) => new tn({ value: t, typeName: t8.ZodLiteral, ...E(e) });
      class ts extends k {
        _parse(t) {
          if ('string' != typeof t.data) {
            let e = this._getOrReturnCtx(t),
              r = this._def.values;
            return (
              d(e, { expected: t3.joinValues(r), received: e.parsedType, code: o.invalid_type }), p
            );
          }
          if (-1 === this._def.values.indexOf(t.data)) {
            let e = this._getOrReturnCtx(t),
              r = this._def.values;
            return d(e, { received: e.data, code: o.invalid_enum_value, options: r }), p;
          }
          return g(t.data);
        }
        get options() {
          return this._def.values;
        }
        get enum() {
          let t = {};
          for (let e of this._def.values) t[e] = e;
          return t;
        }
        get Values() {
          let t = {};
          for (let e of this._def.values) t[e] = e;
          return t;
        }
        get Enum() {
          let t = {};
          for (let e of this._def.values) t[e] = e;
          return t;
        }
        extract(t) {
          return ts.create(t);
        }
        exclude(t) {
          return ts.create(this.options.filter((e) => !t.includes(e)));
        }
      }
      ts.create = ti;
      class to extends k {
        _parse(t) {
          let e = t3.getValidEnumValues(this._def.values),
            r = this._getOrReturnCtx(t);
          if (r.parsedType !== i.string && r.parsedType !== i.number) {
            let t = t3.objectValues(e);
            return (
              d(r, { expected: t3.joinValues(t), received: r.parsedType, code: o.invalid_type }), p
            );
          }
          if (-1 === e.indexOf(t.data)) {
            let t = t3.objectValues(e);
            return d(r, { received: r.data, code: o.invalid_enum_value, options: t }), p;
          }
          return g(t.data);
        }
        get enum() {
          return this._def.values;
        }
      }
      to.create = (t, e) => new to({ values: t, typeName: t8.ZodNativeEnum, ...E(e) });
      class ta extends k {
        unwrap() {
          return this._def.type;
        }
        _parse(t) {
          let { ctx: e } = this._processInputParams(t);
          return e.parsedType !== i.promise && !1 === e.common.async
            ? (d(e, { code: o.invalid_type, expected: i.promise, received: e.parsedType }), p)
            : g(
                (e.parsedType === i.promise ? e.data : Promise.resolve(e.data)).then((t) =>
                  this._def.type.parseAsync(t, {
                    path: e.path,
                    errorMap: e.common.contextualErrorMap,
                  })
                )
              );
        }
      }
      ta.create = (t, e) => new ta({ type: t, typeName: t8.ZodPromise, ...E(e) });
      class tu extends k {
        innerType() {
          return this._def.schema;
        }
        sourceType() {
          return this._def.schema._def.typeName === t8.ZodEffects
            ? this._def.schema.sourceType()
            : this._def.schema;
        }
        _parse(t) {
          let { status: e, ctx: r } = this._processInputParams(t),
            n = this._def.effect || null,
            i = {
              addIssue: (t) => {
                d(r, t), t.fatal ? e.abort() : e.dirty();
              },
              get path() {
                return r.path;
              },
            };
          if (((i.addIssue = i.addIssue.bind(i)), 'preprocess' === n.type)) {
            let t = n.transform(r.data, i);
            return r.common.issues.length
              ? { status: 'dirty', value: r.data }
              : r.common.async
                ? Promise.resolve(t).then((t) =>
                    this._def.schema._parseAsync({ data: t, path: r.path, parent: r })
                  )
                : this._def.schema._parseSync({ data: t, path: r.path, parent: r });
          }
          if ('refinement' === n.type) {
            let t = (t) => {
              let e = n.refinement(t, i);
              if (r.common.async) return Promise.resolve(e);
              if (e instanceof Promise)
                throw Error(
                  'Async refinement encountered during synchronous parse operation. Use .parseAsync instead.'
                );
              return t;
            };
            if (!1 !== r.common.async)
              return this._def.schema
                ._parseAsync({ data: r.data, path: r.path, parent: r })
                .then((r) =>
                  'aborted' === r.status
                    ? p
                    : ('dirty' === r.status && e.dirty(),
                      t(r.value).then(() => ({ status: e.value, value: r.value })))
                );
            {
              let n = this._def.schema._parseSync({ data: r.data, path: r.path, parent: r });
              return 'aborted' === n.status
                ? p
                : ('dirty' === n.status && e.dirty(),
                  t(n.value),
                  { status: e.value, value: n.value });
            }
          }
          if ('transform' === n.type) {
            if (!1 !== r.common.async)
              return this._def.schema
                ._parseAsync({ data: r.data, path: r.path, parent: r })
                .then((t) =>
                  b(t)
                    ? Promise.resolve(n.transform(t.value, i)).then((t) => ({
                        status: e.value,
                        value: t,
                      }))
                    : t
                );
            {
              let t = this._def.schema._parseSync({ data: r.data, path: r.path, parent: r });
              if (!b(t)) return t;
              let s = n.transform(t.value, i);
              if (s instanceof Promise)
                throw Error(
                  'Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.'
                );
              return { status: e.value, value: s };
            }
          }
          t3.assertNever(n);
        }
      }
      (tu.create = (t, e, r) => new tu({ schema: t, typeName: t8.ZodEffects, effect: e, ...E(r) })),
        (tu.createWithPreprocess = (t, e, r) =>
          new tu({
            schema: e,
            effect: { type: 'preprocess', transform: t },
            typeName: t8.ZodEffects,
            ...E(r),
          }));
      class tl extends k {
        _parse(t) {
          return this._getType(t) === i.undefined ? g(void 0) : this._def.innerType._parse(t);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      tl.create = (t, e) => new tl({ innerType: t, typeName: t8.ZodOptional, ...E(e) });
      class th extends k {
        _parse(t) {
          return this._getType(t) === i.null ? g(null) : this._def.innerType._parse(t);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      th.create = (t, e) => new th({ innerType: t, typeName: t8.ZodNullable, ...E(e) });
      class tc extends k {
        _parse(t) {
          let { ctx: e } = this._processInputParams(t),
            r = e.data;
          return (
            e.parsedType === i.undefined && (r = this._def.defaultValue()),
            this._def.innerType._parse({ data: r, path: e.path, parent: e })
          );
        }
        removeDefault() {
          return this._def.innerType;
        }
      }
      tc.create = (t, e) =>
        new tc({
          innerType: t,
          typeName: t8.ZodDefault,
          defaultValue: 'function' == typeof e.default ? e.default : () => e.default,
          ...E(e),
        });
      class td extends k {
        _parse(t) {
          let { ctx: e } = this._processInputParams(t),
            r = { ...e, common: { ...e.common, issues: [] } },
            n = this._def.innerType._parse({ data: r.data, path: r.path, parent: { ...r } });
          return w(n)
            ? n.then((t) => ({
                status: 'valid',
                value:
                  'valid' === t.status
                    ? t.value
                    : this._def.catchValue({
                        get error() {
                          return new a(r.common.issues);
                        },
                        input: r.data,
                      }),
              }))
            : {
                status: 'valid',
                value:
                  'valid' === n.status
                    ? n.value
                    : this._def.catchValue({
                        get error() {
                          return new a(r.common.issues);
                        },
                        input: r.data,
                      }),
              };
        }
        removeCatch() {
          return this._def.innerType;
        }
      }
      td.create = (t, e) =>
        new td({
          innerType: t,
          typeName: t8.ZodCatch,
          catchValue: 'function' == typeof e.catch ? e.catch : () => e.catch,
          ...E(e),
        });
      class tf extends k {
        _parse(t) {
          if (this._getType(t) !== i.nan) {
            let e = this._getOrReturnCtx(t);
            return d(e, { code: o.invalid_type, expected: i.nan, received: e.parsedType }), p;
          }
          return { status: 'valid', value: t.data };
        }
      }
      tf.create = (t) => new tf({ typeName: t8.ZodNaN, ...E(t) });
      let tp = Symbol('zod_brand');
      class tm extends k {
        _parse(t) {
          let { ctx: e } = this._processInputParams(t),
            r = e.data;
          return this._def.type._parse({ data: r, path: e.path, parent: e });
        }
        unwrap() {
          return this._def.type;
        }
      }
      class tg extends k {
        _parse(t) {
          let { status: e, ctx: r } = this._processInputParams(t);
          if (r.common.async)
            return (async () => {
              let t = await this._def.in._parseAsync({ data: r.data, path: r.path, parent: r });
              return 'aborted' === t.status
                ? p
                : 'dirty' === t.status
                  ? (e.dirty(), m(t.value))
                  : this._def.out._parseAsync({ data: t.value, path: r.path, parent: r });
            })();
          {
            let t = this._def.in._parseSync({ data: r.data, path: r.path, parent: r });
            return 'aborted' === t.status
              ? p
              : 'dirty' === t.status
                ? (e.dirty(), { status: 'dirty', value: t.value })
                : this._def.out._parseSync({ data: t.value, path: r.path, parent: r });
          }
        }
        static create(t, e) {
          return new tg({ in: t, out: e, typeName: t8.ZodPipeline });
        }
      }
      class tv extends k {
        _parse(t) {
          let e = this._def.innerType._parse(t);
          return b(e) && (e.value = Object.freeze(e.value)), e;
        }
      }
      tv.create = (t, e) => new tv({ innerType: t, typeName: t8.ZodReadonly, ...E(e) });
      let ty = (t, e = {}, r) =>
          t
            ? z.create().superRefine((n, i) => {
                var s, o;
                if (!t(n)) {
                  let t = 'function' == typeof e ? e(n) : 'string' == typeof e ? { message: e } : e,
                    a =
                      null === (o = null !== (s = t.fatal) && void 0 !== s ? s : r) ||
                      void 0 === o ||
                      o;
                  i.addIssue({
                    code: 'custom',
                    ...('string' == typeof t ? { message: t } : t),
                    fatal: a,
                  });
                }
              })
            : z.create(),
        tb = { object: H.lazycreate };
      ((t2 = t8 || (t8 = {})).ZodString = 'ZodString'),
        (t2.ZodNumber = 'ZodNumber'),
        (t2.ZodNaN = 'ZodNaN'),
        (t2.ZodBigInt = 'ZodBigInt'),
        (t2.ZodBoolean = 'ZodBoolean'),
        (t2.ZodDate = 'ZodDate'),
        (t2.ZodSymbol = 'ZodSymbol'),
        (t2.ZodUndefined = 'ZodUndefined'),
        (t2.ZodNull = 'ZodNull'),
        (t2.ZodAny = 'ZodAny'),
        (t2.ZodUnknown = 'ZodUnknown'),
        (t2.ZodNever = 'ZodNever'),
        (t2.ZodVoid = 'ZodVoid'),
        (t2.ZodArray = 'ZodArray'),
        (t2.ZodObject = 'ZodObject'),
        (t2.ZodUnion = 'ZodUnion'),
        (t2.ZodDiscriminatedUnion = 'ZodDiscriminatedUnion'),
        (t2.ZodIntersection = 'ZodIntersection'),
        (t2.ZodTuple = 'ZodTuple'),
        (t2.ZodRecord = 'ZodRecord'),
        (t2.ZodMap = 'ZodMap'),
        (t2.ZodSet = 'ZodSet'),
        (t2.ZodFunction = 'ZodFunction'),
        (t2.ZodLazy = 'ZodLazy'),
        (t2.ZodLiteral = 'ZodLiteral'),
        (t2.ZodEnum = 'ZodEnum'),
        (t2.ZodEffects = 'ZodEffects'),
        (t2.ZodNativeEnum = 'ZodNativeEnum'),
        (t2.ZodOptional = 'ZodOptional'),
        (t2.ZodNullable = 'ZodNullable'),
        (t2.ZodDefault = 'ZodDefault'),
        (t2.ZodCatch = 'ZodCatch'),
        (t2.ZodPromise = 'ZodPromise'),
        (t2.ZodBranded = 'ZodBranded'),
        (t2.ZodPipeline = 'ZodPipeline'),
        (t2.ZodReadonly = 'ZodReadonly');
      let tw = R.create,
        tA = O.create,
        t_ = tf.create,
        tE = B.create,
        tk = D.create,
        tx = L.create,
        tN = U.create,
        tM = F.create,
        tI = G.create,
        tP = z.create,
        tS = Z.create,
        tC = Y.create,
        tT = q.create,
        tR = j.create,
        tO = H.create,
        tB = H.strictCreate,
        tD = K.create,
        tL = Q.create,
        tU = V.create,
        tF = W.create,
        tG = X.create,
        tz = $.create,
        tZ = tt.create,
        tY = te.create,
        tq = tr.create,
        tj = tn.create,
        tH = ts.create,
        tK = to.create,
        tJ = ta.create,
        tQ = tu.create,
        tV = tl.create,
        tW = th.create,
        tX = tu.createWithPreprocess,
        t$ = tg.create;
      var t0,
        t1,
        t2,
        t3,
        t6,
        t4,
        t8,
        t5 = Object.freeze({
          __proto__: null,
          defaultErrorMap: u,
          setErrorMap: function (t) {
            l = t;
          },
          getErrorMap: h,
          makeIssue: c,
          EMPTY_PATH: [],
          addIssueToContext: d,
          ParseStatus: f,
          INVALID: p,
          DIRTY: m,
          OK: g,
          isAborted: v,
          isDirty: y,
          isValid: b,
          isAsync: w,
          get util() {
            return t3;
          },
          get objectUtil() {
            return t6;
          },
          ZodParsedType: i,
          getParsedType: s,
          ZodType: k,
          ZodString: R,
          ZodNumber: O,
          ZodBigInt: B,
          ZodBoolean: D,
          ZodDate: L,
          ZodSymbol: U,
          ZodUndefined: F,
          ZodNull: G,
          ZodAny: z,
          ZodUnknown: Z,
          ZodNever: Y,
          ZodVoid: q,
          ZodArray: j,
          ZodObject: H,
          ZodUnion: K,
          ZodDiscriminatedUnion: Q,
          ZodIntersection: V,
          ZodTuple: W,
          ZodRecord: X,
          ZodMap: $,
          ZodSet: tt,
          ZodFunction: te,
          ZodLazy: tr,
          ZodLiteral: tn,
          ZodEnum: ts,
          ZodNativeEnum: to,
          ZodPromise: ta,
          ZodEffects: tu,
          ZodTransformer: tu,
          ZodOptional: tl,
          ZodNullable: th,
          ZodDefault: tc,
          ZodCatch: td,
          ZodNaN: tf,
          BRAND: tp,
          ZodBranded: tm,
          ZodPipeline: tg,
          ZodReadonly: tv,
          custom: ty,
          Schema: k,
          ZodSchema: k,
          late: tb,
          get ZodFirstPartyTypeKind() {
            return t8;
          },
          coerce: {
            string: (t) => R.create({ ...t, coerce: !0 }),
            number: (t) => O.create({ ...t, coerce: !0 }),
            boolean: (t) => D.create({ ...t, coerce: !0 }),
            bigint: (t) => B.create({ ...t, coerce: !0 }),
            date: (t) => L.create({ ...t, coerce: !0 }),
          },
          any: tP,
          array: tR,
          bigint: tE,
          boolean: tk,
          date: tx,
          discriminatedUnion: tL,
          effect: tQ,
          enum: tH,
          function: tY,
          instanceof: (t, e = { message: `Input not instance of ${t.name}` }) =>
            ty((e) => e instanceof t, e),
          intersection: tU,
          lazy: tq,
          literal: tj,
          map: tz,
          nan: t_,
          nativeEnum: tK,
          never: tC,
          null: tI,
          nullable: tW,
          number: tA,
          object: tO,
          oboolean: () => tk().optional(),
          onumber: () => tA().optional(),
          optional: tV,
          ostring: () => tw().optional(),
          pipeline: t$,
          preprocess: tX,
          promise: tJ,
          record: tG,
          set: tZ,
          strictObject: tB,
          string: tw,
          symbol: tN,
          transformer: tQ,
          tuple: tF,
          undefined: tM,
          union: tD,
          unknown: tS,
          void: tT,
          NEVER: p,
          ZodIssueCode: o,
          quotelessJson: (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, '$1:'),
          ZodError: a,
        });
    },
  },
]);
