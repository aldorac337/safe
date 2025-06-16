import { R as J, r as j } from './vendor-BCNtwJ5j.js';
(function () {
  try {
    var e =
        typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof globalThis < 'u'
              ? globalThis
              : typeof self < 'u'
                ? self
                : {},
      r = new e.Error().stack;
    r &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[r] = '54604d62-7853-451b-9b85-2848cda36f06'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-54604d62-7853-451b-9b85-2848cda36f06'));
  } catch (t) {}
})();
function se(e, r) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      r.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (t[n[a]] = e[n[a]]);
  return t;
}
var ae;
(function (e) {
  (e.event = 'event'), (e.props = 'prop');
})(ae || (ae = {}));
function U() {}
function _e(e) {
  var r,
    t = void 0;
  return function () {
    for (var n = [], a = arguments.length; a--; ) n[a] = arguments[a];
    return (
      (r &&
        n.length === r.length &&
        n.every(function (i, f) {
          return i === r[f];
        })) ||
        ((r = n), (t = e.apply(void 0, n))),
      t
    );
  };
}
function X(e) {
  return !!(e || '').match(/\d/);
}
function Q(e) {
  return e == null;
}
function Te(e) {
  return typeof e == 'number' && isNaN(e);
}
function ye(e) {
  return Q(e) || Te(e) || (typeof e == 'number' && !isFinite(e));
}
function be(e) {
  return e.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
}
function ke(e) {
  switch (e) {
    case 'lakh':
      return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;
    case 'wan':
      return /(\d)(?=(\d{4})+(?!\d))/g;
    case 'thousand':
    default:
      return /(\d)(?=(\d{3})+(?!\d))/g;
  }
}
function je(e, r, t) {
  var n = ke(t),
    a = e.search(/[1-9]/);
  return (
    (a = a === -1 ? e.length : a), e.substring(0, a) + e.substring(a, e.length).replace(n, '$1' + r)
  );
}
function Pe(e) {
  var r = j.useRef(e);
  r.current = e;
  var t = j.useRef(function () {
    for (var n = [], a = arguments.length; a--; ) n[a] = arguments[a];
    return r.current.apply(r, n);
  });
  return t.current;
}
function ve(e, r) {
  r === void 0 && (r = !0);
  var t = e[0] === '-',
    n = t && r;
  e = e.replace('-', '');
  var a = e.split('.'),
    i = a[0],
    f = a[1] || '';
  return { beforeDecimal: i, afterDecimal: f, hasNegation: t, addNegation: n };
}
function Me(e) {
  if (!e) return e;
  var r = e[0] === '-';
  r && (e = e.substring(1, e.length));
  var t = e.split('.'),
    n = t[0].replace(/^0+/, '') || '0',
    a = t[1] || '';
  return (r ? '-' : '') + n + (a ? '.' + a : '');
}
function xe(e, r, t) {
  for (var n = '', a = t ? '0' : '', i = 0; i <= r - 1; i++) n += e[i] || a;
  return n;
}
function me(e, r) {
  return Array(r + 1).join(e);
}
function we(e) {
  var r = e + '',
    t = r[0] === '-' ? '-' : '';
  t && (r = r.substring(1));
  var n = r.split(/[eE]/g),
    a = n[0],
    i = n[1];
  if (((i = Number(i)), !i)) return t + a;
  a = a.replace('.', '');
  var f = 1 + i,
    d = a.length;
  return (
    f < 0
      ? (a = '0.' + me('0', Math.abs(f)) + a)
      : f >= d
        ? (a = a + me('0', f - d))
        : (a = (a.substring(0, f) || '0') + '.' + a.substring(f)),
    t + a
  );
}
function he(e, r, t) {
  if (['', '-'].indexOf(e) !== -1) return e;
  var n = (e.indexOf('.') !== -1 || t) && r,
    a = ve(e),
    i = a.beforeDecimal,
    f = a.afterDecimal,
    d = a.hasNegation,
    m = parseFloat('0.' + (f || '0')),
    h = f.length <= r ? '0.' + f : m.toFixed(r),
    s = h.split('.'),
    S = i;
  i &&
    Number(s[0]) &&
    (S = i
      .split('')
      .reverse()
      .reduce(function (p, w, v) {
        return p.length > v
          ? (Number(p[0]) + Number(w)).toString() + p.substring(1, p.length)
          : w + p;
      }, s[0]));
  var c = xe(s[1] || '', r, t),
    x = d ? '-' : '',
    l = n ? '.' : '';
  return '' + x + S + l + c;
}
function H(e, r) {
  if (((e.value = e.value), e !== null)) {
    if (e.createTextRange) {
      var t = e.createTextRange();
      return t.move('character', r), t.select(), !0;
    }
    return e.selectionStart || e.selectionStart === 0
      ? (e.focus(), e.setSelectionRange(r, r), !0)
      : (e.focus(), !1);
  }
}
var pe = _e(function (e, r) {
    for (var t = 0, n = 0, a = e.length, i = r.length; e[t] === r[t] && t < a; ) t++;
    for (; e[a - 1 - n] === r[i - 1 - n] && i - n > t && a - n > t; ) n++;
    return { from: { start: t, end: a - n }, to: { start: t, end: i - n } };
  }),
  Le = function (e, r) {
    var t = Math.min(e.selectionStart, r);
    return { from: { start: t, end: e.selectionEnd }, to: { start: t, end: r } };
  };
function Ke(e, r, t) {
  return Math.min(Math.max(e, r), t);
}
function ce(e) {
  return Math.max(e.selectionStart, e.selectionEnd);
}
function $e() {
  return typeof navigator < 'u' && !(navigator.platform && /iPhone|iPod/.test(navigator.platform));
}
function Ve(e) {
  return { from: { start: 0, end: 0 }, to: { start: 0, end: e.length }, lastValue: '' };
}
function Ne(e, r) {
  return e === void 0 && (e = ' '), typeof e == 'string' ? e : e[r] || ' ';
}
function Ue(e) {
  var r = e.currentValue,
    t = e.formattedValue,
    n = e.currentValueIndex,
    a = e.formattedValueIndex;
  return r[n] === t[a];
}
function We(e, r, t, n, a, i, f) {
  f === void 0 && (f = Ue);
  var d = a.findIndex(function (A) {
      return A;
    }),
    m = e.slice(0, d);
  !r && !t.startsWith(m) && ((r = m), (t = m + t), (n = n + m.length));
  for (var h = t.length, s = e.length, S = {}, c = new Array(h), x = 0; x < h; x++) {
    c[x] = -1;
    for (var l = 0, p = s; l < p; l++) {
      var w = f({
        currentValue: t,
        lastValue: r,
        formattedValue: e,
        currentValueIndex: x,
        formattedValueIndex: l,
      });
      if (w && S[l] !== !0) {
        (c[x] = l), (S[l] = !0);
        break;
      }
    }
  }
  for (var v = n; v < h && (c[v] === -1 || !i(t[v])); ) v++;
  var O = v === h || c[v] === -1 ? s : c[v];
  for (v = n - 1; v > 0 && c[v] === -1; ) v--;
  var N = v === -1 || c[v] === -1 ? 0 : c[v] + 1;
  return N > O ? O : n - N < O - n ? N : O;
}
function ie(e, r, t, n) {
  var a = e.length;
  if (((r = Ke(r, 0, a)), n === 'left')) {
    for (; r >= 0 && !t[r]; ) r--;
    r === -1 && (r = t.indexOf(!0));
  } else {
    for (; r <= a && !t[r]; ) r++;
    r > a && (r = t.lastIndexOf(!0));
  }
  return r === -1 && (r = a), r;
}
function Ge(e) {
  for (
    var r = Array.from({ length: e.length + 1 }).map(function () {
        return !0;
      }),
      t = 0,
      n = r.length;
    t < n;
    t++
  )
    r[t] = !!(X(e[t]) || X(e[t - 1]));
  return r;
}
function De(e, r, t, n, a, i) {
  i === void 0 && (i = U);
  var f = Pe(function (l, p) {
      var w, v;
      return (
        ye(l)
          ? ((v = ''), (w = ''))
          : typeof l == 'number' || p
            ? ((v = typeof l == 'number' ? we(l) : l), (w = n(v)))
            : ((v = a(l, void 0)), (w = n(v))),
        { formattedValue: w, numAsString: v }
      );
    }),
    d = j.useState(function () {
      return f(Q(e) ? r : e, t);
    }),
    m = d[0],
    h = d[1],
    s = function (l, p) {
      l.formattedValue !== m.formattedValue &&
        h({ formattedValue: l.formattedValue, numAsString: l.value }),
        i(l, p);
    },
    S = e,
    c = t;
  Q(e) && ((S = m.numAsString), (c = !0));
  var x = f(S, c);
  return (
    j.useMemo(
      function () {
        h(x);
      },
      [x.formattedValue]
    ),
    [m, s]
  );
}
function Ze(e) {
  return e.replace(/[^0-9]/g, '');
}
function qe(e) {
  return e;
}
function Ie(e) {
  var r = e.type;
  r === void 0 && (r = 'text');
  var t = e.displayType;
  t === void 0 && (t = 'input');
  var n = e.customInput,
    a = e.renderText,
    i = e.getInputRef,
    f = e.format;
  f === void 0 && (f = qe);
  var d = e.removeFormatting;
  d === void 0 && (d = Ze);
  var m = e.defaultValue,
    h = e.valueIsNumericString,
    s = e.onValueChange,
    S = e.isAllowed,
    c = e.onChange;
  c === void 0 && (c = U);
  var x = e.onKeyDown;
  x === void 0 && (x = U);
  var l = e.onMouseUp;
  l === void 0 && (l = U);
  var p = e.onFocus;
  p === void 0 && (p = U);
  var w = e.onBlur;
  w === void 0 && (w = U);
  var v = e.value,
    O = e.getCaretBoundary;
  O === void 0 && (O = Ge);
  var N = e.isValidInputCharacter;
  N === void 0 && (N = X);
  var A = e.isCharacterSame,
    T = se(e, [
      'type',
      'displayType',
      'customInput',
      'renderText',
      'getInputRef',
      'format',
      'removeFormatting',
      'defaultValue',
      'valueIsNumericString',
      'onValueChange',
      'isAllowed',
      'onChange',
      'onKeyDown',
      'onMouseUp',
      'onFocus',
      'onBlur',
      'value',
      'getCaretBoundary',
      'isValidInputCharacter',
      'isCharacterSame',
    ]),
    L = De(v, m, !!h, f, d, s),
    K = L[0],
    D = K.formattedValue,
    P = K.numAsString,
    W = L[1],
    M = j.useRef(),
    G = j.useRef({ formattedValue: D, numAsString: P }),
    Z = function (u, o) {
      (G.current = { formattedValue: u.formattedValue, numAsString: u.value }), W(u, o);
    },
    Y = j.useState(!1),
    re = Y[0],
    b = Y[1],
    g = j.useRef(null),
    I = j.useRef({ setCaretTimeout: null, focusTimeout: null });
  j.useEffect(function () {
    return (
      b(!0),
      function () {
        clearTimeout(I.current.setCaretTimeout), clearTimeout(I.current.focusTimeout);
      }
    );
  }, []);
  var R = f,
    F = function (u, o) {
      var y = parseFloat(o);
      return { formattedValue: u, value: o, floatValue: isNaN(y) ? void 0 : y };
    },
    B = function (u, o, y) {
      (u.selectionStart === 0 && u.selectionEnd === u.value.length) ||
        (H(u, o),
        (I.current.setCaretTimeout = setTimeout(function () {
          u.value === y && u.selectionStart !== o && H(u, o);
        }, 0)));
    },
    _ = function (u, o, y) {
      return ie(u, o, O(u), y);
    },
    ee = function (u, o, y) {
      var C = O(o),
        k = We(o, D, u, y, C, N, A);
      return (k = ie(o, k, C)), k;
    },
    fe = function (u) {
      var o = u.formattedValue;
      o === void 0 && (o = '');
      var y = u.input,
        C = u.source,
        k = u.event,
        E = u.numAsString,
        V;
      if (y) {
        var $ = u.inputValue || y.value,
          q = ce(y);
        (y.value = o), (V = ee($, o, q)), V !== void 0 && B(y, V, o);
      }
      o !== D && Z(F(o, E), { event: k, source: C });
    };
  j.useEffect(
    function () {
      var u = G.current,
        o = u.formattedValue,
        y = u.numAsString;
      (D !== o || P !== y) && Z(F(D, P), { event: void 0, source: ae.props });
    },
    [D, P]
  );
  var te = g.current ? ce(g.current) : void 0,
    ne = typeof window < 'u' ? j.useLayoutEffect : j.useEffect;
  ne(
    function () {
      var u = g.current;
      if (D !== G.current.formattedValue && u) {
        var o = ee(G.current.formattedValue, D, te);
        (u.value = D), B(u, o, D);
      }
    },
    [D]
  );
  var oe = function (u, o, y) {
      var C = o.target,
        k = M.current ? Le(M.current, C.selectionEnd) : pe(D, u),
        E = Object.assign(Object.assign({}, k), { lastValue: D }),
        V = d(u, E),
        $ = R(V);
      if (((V = d($, void 0)), S && !S(F($, V)))) {
        var q = o.target,
          z = ce(q),
          de = ee(u, D, z);
        return (q.value = D), B(q, de, D), !1;
      }
      return (
        fe({
          formattedValue: $,
          numAsString: V,
          inputValue: u,
          event: o,
          source: y,
          input: o.target,
        }),
        !0
      );
    },
    le = function (u, o) {
      o === void 0 && (o = 0);
      var y = u.selectionStart,
        C = u.selectionEnd;
      M.current = { selectionStart: y, selectionEnd: C + o };
    },
    Ce = function (u) {
      var o = u.target,
        y = o.value,
        C = oe(y, u, ae.event);
      C && c(u), (M.current = void 0);
    },
    Ee = function (u) {
      var o = u.target,
        y = u.key,
        C = o.selectionStart,
        k = o.selectionEnd,
        E = o.value;
      E === void 0 && (E = '');
      var V;
      y === 'ArrowLeft' || y === 'Backspace'
        ? (V = Math.max(C - 1, 0))
        : y === 'ArrowRight'
          ? (V = Math.min(C + 1, E.length))
          : y === 'Delete' && (V = C);
      var $ = 0;
      y === 'Delete' && C === k && ($ = 1);
      var q = y === 'ArrowLeft' || y === 'ArrowRight';
      if (V === void 0 || (C !== k && !q)) {
        x(u), le(o, $);
        return;
      }
      var z = V;
      if (q) {
        var de = y === 'ArrowLeft' ? 'left' : 'right';
        (z = _(E, V, de)), z !== V && u.preventDefault();
      } else
        y === 'Delete' && !N(E[V])
          ? (z = _(E, V, 'right'))
          : y === 'Backspace' && !N(E[V]) && (z = _(E, V, 'left'));
      z !== V && B(o, z, E), x(u), le(o, $);
    },
    Ae = function (u) {
      var o = u.target,
        y = function () {
          var C = o.selectionStart,
            k = o.selectionEnd,
            E = o.value;
          if ((E === void 0 && (E = ''), C === k)) {
            var V = _(E, C);
            V !== C && B(o, V, E);
          }
        };
      y(),
        requestAnimationFrame(function () {
          y();
        }),
        l(u),
        le(o);
    },
    Be = function (u) {
      u.persist && u.persist();
      var o = u.target,
        y = u.currentTarget;
      (g.current = o),
        (I.current.focusTimeout = setTimeout(function () {
          var C = o.selectionStart,
            k = o.selectionEnd,
            E = o.value;
          E === void 0 && (E = '');
          var V = _(E, C);
          V !== C && !(C === 0 && k === E.length) && B(o, V, E),
            p(Object.assign(Object.assign({}, u), { currentTarget: y }));
        }, 0));
    },
    Oe = function (u) {
      (g.current = null),
        clearTimeout(I.current.focusTimeout),
        clearTimeout(I.current.setCaretTimeout),
        w(u);
    },
    Re = re && $e() ? 'numeric' : void 0,
    ge = Object.assign({ inputMode: Re }, T, {
      type: r,
      value: D,
      onChange: Ce,
      onKeyDown: Ee,
      onMouseUp: Ae,
      onFocus: Be,
      onBlur: Oe,
    });
  if (t === 'text')
    return a
      ? J.createElement(J.Fragment, null, a(D, T) || null)
      : J.createElement('span', Object.assign({}, T, { ref: i }), D);
  if (n) {
    var Fe = n;
    return J.createElement(Fe, Object.assign({}, ge, { ref: i }));
  }
  return J.createElement('input', Object.assign({}, ge, { ref: i }));
}
function Se(e, r) {
  var t = r.decimalScale,
    n = r.fixedDecimalScale,
    a = r.prefix;
  a === void 0 && (a = '');
  var i = r.suffix;
  i === void 0 && (i = '');
  var f = r.allowNegative,
    d = r.thousandsGroupStyle;
  if ((d === void 0 && (d = 'thousand'), e === '' || e === '-')) return e;
  var m = ue(r),
    h = m.thousandSeparator,
    s = m.decimalSeparator,
    S = (t !== 0 && e.indexOf('.') !== -1) || (t && n),
    c = ve(e, f),
    x = c.beforeDecimal,
    l = c.afterDecimal,
    p = c.addNegation;
  return (
    t !== void 0 && (l = xe(l, t, !!n)),
    h && (x = je(x, h, d)),
    a && (x = a + x),
    i && (l = l + i),
    p && (x = '-' + x),
    (e = x + ((S && s) || '') + l),
    e
  );
}
function ue(e) {
  var r = e.decimalSeparator;
  r === void 0 && (r = '.');
  var t = e.thousandSeparator,
    n = e.allowedDecimalSeparators;
  return (
    t === !0 && (t = ','),
    n || (n = [r, '.']),
    { decimalSeparator: r, thousandSeparator: t, allowedDecimalSeparators: n }
  );
}
function ze(e, r) {
  e === void 0 && (e = '');
  var t = new RegExp('(-)'),
    n = new RegExp('(-)(.)*(-)'),
    a = t.test(e),
    i = n.test(e);
  return (e = e.replace(/-/g, '')), a && !i && r && (e = '-' + e), e;
}
function He(e, r) {
  return new RegExp('(^-)|[0-9]|' + be(e), 'g');
}
function Je(e, r, t) {
  return e === ''
    ? !0
    : !(r != null && r.match(/\d/)) &&
        !(t != null && t.match(/\d/)) &&
        typeof e == 'string' &&
        !isNaN(Number(e));
}
function Qe(e, r, t) {
  var n;
  r === void 0 && (r = Ve(e));
  var a = t.allowNegative,
    i = t.prefix;
  i === void 0 && (i = '');
  var f = t.suffix;
  f === void 0 && (f = '');
  var d = t.decimalScale,
    m = r.from,
    h = r.to,
    s = h.start,
    S = h.end,
    c = ue(t),
    x = c.allowedDecimalSeparators,
    l = c.decimalSeparator,
    p = e[S] === l;
  if (X(e) && (e === i || e === f) && r.lastValue === '') return e;
  if (S - s === 1 && x.indexOf(e[s]) !== -1) {
    var w = d === 0 ? '' : l;
    e = e.substring(0, s) + w + e.substring(s + 1, e.length);
  }
  var v = function (g, I, R) {
      var F = !1,
        B = !1;
      i.startsWith('-')
        ? (F = !1)
        : g.startsWith('--')
          ? ((F = !1), (B = !0))
          : f.startsWith('-') && g.length === f.length
            ? (F = !1)
            : g[0] === '-' && (F = !0);
      var _ = F ? 1 : 0;
      return (
        B && (_ = 2),
        _ && ((g = g.substring(_)), (I -= _), (R -= _)),
        { value: g, start: I, end: R, hasNegation: F }
      );
    },
    O = v(e, s, S),
    N = O.hasNegation;
  (n = O), (e = n.value), (s = n.start), (S = n.end);
  var A = v(r.lastValue, m.start, m.end),
    T = A.start,
    L = A.end,
    K = A.value,
    D = e.substring(s, S);
  e.length &&
    K.length &&
    (T > K.length - f.length || L < i.length) &&
    !(D && f.startsWith(D)) &&
    (e = K);
  var P = 0;
  e.startsWith(i) ? (P += i.length) : s < i.length && (P = s), (e = e.substring(P)), (S -= P);
  var W = e.length,
    M = e.length - f.length;
  e.endsWith(f) ? (W = M) : (S > M || S > e.length - f.length) && (W = S),
    (e = e.substring(0, W)),
    (e = ze(N ? '-' + e : e, a)),
    (e = (e.match(He(l)) || []).join(''));
  var G = e.indexOf(l);
  e = e.replace(new RegExp(be(l), 'g'), function (g, I) {
    return I === G ? '.' : '';
  });
  var Z = ve(e, a),
    Y = Z.beforeDecimal,
    re = Z.afterDecimal,
    b = Z.addNegation;
  return (
    h.end - h.start < m.end - m.start && Y === '' && p && !parseFloat(re) && (e = b ? '-' : ''), e
  );
}
function Xe(e, r) {
  var t = r.prefix;
  t === void 0 && (t = '');
  var n = r.suffix;
  n === void 0 && (n = '');
  var a = Array.from({ length: e.length + 1 }).map(function () {
      return !0;
    }),
    i = e[0] === '-';
  a.fill(!1, 0, t.length + (i ? 1 : 0));
  var f = e.length;
  return a.fill(!1, f - n.length + 1, f + 1), a;
}
function Ye(e) {
  var r = ue(e),
    t = r.thousandSeparator,
    n = r.decimalSeparator,
    a = e.prefix;
  a === void 0 && (a = '');
  var i = e.allowNegative;
  if ((i === void 0 && (i = !0), t === n))
    throw new Error(
      "\n        Decimal separator can't be same as thousand separator.\n        thousandSeparator: " +
        t +
        ' (thousandSeparator = {true} is same as thousandSeparator = ",")\n        decimalSeparator: ' +
        n +
        ' (default value for decimalSeparator is .)\n     '
    );
  return (
    a.startsWith('-') &&
      i &&
      (console.error(
        "\n      Prefix can't start with '-' when allowNegative is true.\n      prefix: " +
          a +
          '\n      allowNegative: ' +
          i +
          '\n    '
      ),
      (i = !1)),
    Object.assign(Object.assign({}, e), { allowNegative: i })
  );
}
function er(e) {
  (e = Ye(e)), e.decimalSeparator, e.allowedDecimalSeparators, e.thousandsGroupStyle;
  var r = e.suffix,
    t = e.allowNegative,
    n = e.allowLeadingZeros,
    a = e.onKeyDown;
  a === void 0 && (a = U);
  var i = e.onBlur;
  i === void 0 && (i = U);
  var f = e.thousandSeparator,
    d = e.decimalScale,
    m = e.fixedDecimalScale,
    h = e.prefix;
  h === void 0 && (h = '');
  var s = e.defaultValue,
    S = e.value,
    c = e.valueIsNumericString,
    x = e.onValueChange,
    l = se(e, [
      'decimalSeparator',
      'allowedDecimalSeparators',
      'thousandsGroupStyle',
      'suffix',
      'allowNegative',
      'allowLeadingZeros',
      'onKeyDown',
      'onBlur',
      'thousandSeparator',
      'decimalScale',
      'fixedDecimalScale',
      'prefix',
      'defaultValue',
      'value',
      'valueIsNumericString',
      'onValueChange',
    ]),
    p = ue(e),
    w = p.decimalSeparator,
    v = p.allowedDecimalSeparators,
    O = function (b) {
      return Se(b, e);
    },
    N = function (b, g) {
      return Qe(b, g, e);
    },
    A = Q(S) ? s : S,
    T = c != null ? c : Je(A, h, r);
  Q(S) ? Q(s) || (T = T || typeof s == 'number') : (T = T || typeof S == 'number');
  var L = function (b) {
      return ye(b)
        ? b
        : (typeof b == 'number' && (b = we(b)), T && typeof d == 'number' ? he(b, d, !!m) : b);
    },
    K = De(L(S), L(s), !!T, O, N, x),
    D = K[0],
    P = D.numAsString,
    W = D.formattedValue,
    M = K[1],
    G = function (b) {
      var g = b.target,
        I = b.key,
        R = g.selectionStart,
        F = g.selectionEnd,
        B = g.value;
      if ((B === void 0 && (B = ''), (I === 'Backspace' || I === 'Delete') && F < h.length)) {
        b.preventDefault();
        return;
      }
      if (R !== F) {
        a(b);
        return;
      }
      I === 'Backspace' && B[0] === '-' && R === h.length + 1 && t && H(g, 1),
        d &&
          m &&
          (I === 'Backspace' && B[R - 1] === w
            ? (H(g, R - 1), b.preventDefault())
            : I === 'Delete' && B[R] === w && b.preventDefault()),
        v != null && v.includes(I) && B[R] === w && H(g, R + 1);
      var _ = f === !0 ? ',' : f;
      I === 'Backspace' && B[R - 1] === _ && H(g, R - 1),
        I === 'Delete' && B[R] === _ && H(g, R + 1),
        a(b);
    },
    Z = function (b) {
      var g = P;
      if ((g.match(/\d/g) || (g = ''), n || (g = Me(g)), m && d && (g = he(g, d, m)), g !== P)) {
        var I = Se(g, e);
        M(
          { formattedValue: I, value: g, floatValue: parseFloat(g) },
          { event: b, source: ae.event }
        );
      }
      i(b);
    },
    Y = function (b) {
      return b === w ? !0 : X(b);
    },
    re = function (b) {
      var g = b.currentValue,
        I = b.lastValue,
        R = b.formattedValue,
        F = b.currentValueIndex,
        B = b.formattedValueIndex,
        _ = g[F],
        ee = R[B],
        fe = pe(I, g),
        te = fe.to,
        ne = function (oe) {
          return N(oe).indexOf('.') + h.length;
        };
      return S === 0 && m && d && g[te.start] === w && ne(g) < F && ne(R) > B
        ? !1
        : F >= te.start && F < te.end && v && v.includes(_) && ee === w
          ? !0
          : _ === ee;
    };
  return Object.assign(Object.assign({}, l), {
    value: W,
    valueIsNumericString: !1,
    isValidInputCharacter: Y,
    isCharacterSame: re,
    onValueChange: M,
    format: O,
    removeFormatting: N,
    getCaretBoundary: function (b) {
      return Xe(b, e);
    },
    onKeyDown: G,
    onBlur: Z,
  });
}
function or(e) {
  var r = er(e);
  return J.createElement(Ie, Object.assign({}, r));
}
function rr(e, r) {
  var t = r.format,
    n = r.allowEmptyFormatting,
    a = r.mask,
    i = r.patternChar;
  if ((i === void 0 && (i = '#'), e === '' && !n)) return '';
  for (var f = 0, d = t.split(''), m = 0, h = t.length; m < h; m++)
    t[m] === i && ((d[m] = e[f] || Ne(a, f)), (f += 1));
  return d.join('');
}
function tr(e, r, t) {
  r === void 0 && (r = Ve(e));
  var n = t.format,
    a = t.patternChar;
  a === void 0 && (a = '#');
  var i = r.from,
    f = r.to,
    d = r.lastValue;
  d === void 0 && (d = '');
  var m = function (w) {
      return n[w] === a;
    },
    h = function (w, v) {
      for (var O = '', N = 0; N < w.length; N++) m(v + N) && X(w[N]) && (O += w[N]);
      return O;
    },
    s = function (w) {
      return w.replace(/[^0-9]/g, '');
    };
  if (!n.match(/\d/)) return s(e);
  if ((d === '' || i.end - i.start === d.length) && e.length === n.length) {
    for (var S = '', c = 0; c < e.length; c++)
      if (m(c)) X(e[c]) && (S += e[c]);
      else if (e[c] !== n[c]) return s(e);
    return S;
  }
  var x = d.substring(0, i.start),
    l = e.substring(f.start, f.end),
    p = d.substring(i.end);
  return '' + h(x, 0) + s(l) + h(p, i.end);
}
function ar(e, r) {
  var t = r.format,
    n = r.mask,
    a = r.patternChar;
  a === void 0 && (a = '#');
  var i = Array.from({ length: e.length + 1 }).map(function () {
      return !0;
    }),
    f = 0,
    d = -1,
    m = {};
  t.split('').forEach(function (c, x) {
    var l = void 0;
    c === a && (f++, (l = Ne(n, f - 1)), d === -1 && e[x] === l && (d = x)), (m[x] = l);
  });
  for (
    var h = function (c) {
        return t[c] === a && e[c] !== m[c];
      },
      s = 0,
      S = i.length;
    s < S;
    s++
  )
    i[s] = s === d || h(s) || h(s - 1);
  return (i[t.indexOf(a)] = !0), i;
}
function nr(e) {
  var r = e.mask;
  if (r) {
    var t = r === 'string' ? r : r.toString();
    if (t.match(/\d/g)) throw new Error('Mask ' + r + ' should not contain numeric character;');
  }
}
function ir(e, r) {
  return e === ''
    ? !0
    : !(r != null && r.match(/\d/)) && typeof e == 'string' && (!!e.match(/^\d+$/) || e === '');
}
function ur(e) {
  e.mask, e.allowEmptyFormatting;
  var r = e.format,
    t = e.inputMode;
  t === void 0 && (t = 'numeric');
  var n = e.onKeyDown;
  n === void 0 && (n = U);
  var a = e.patternChar;
  a === void 0 && (a = '#');
  var i = e.value,
    f = e.defaultValue,
    d = e.valueIsNumericString,
    m = se(e, [
      'mask',
      'allowEmptyFormatting',
      'format',
      'inputMode',
      'onKeyDown',
      'patternChar',
      'value',
      'defaultValue',
      'valueIsNumericString',
    ]);
  nr(e);
  var h = function (l) {
      return ar(l, e);
    },
    s = function (l) {
      var p = l.key,
        w = l.target,
        v = w.selectionStart,
        O = w.selectionEnd,
        N = w.value;
      if (v !== O) {
        n(l);
        return;
      }
      var A = v;
      if (p === 'Backspace' || p === 'Delete') {
        var T = 'right';
        if (p === 'Backspace') {
          for (; A > 0 && r[A - 1] !== a; ) A--;
          T = 'left';
        } else {
          for (var L = r.length; A < L && r[A] !== a; ) A++;
          T = 'right';
        }
        A = ie(N, A, h(N), T);
      } else
        r[A] !== a && p !== 'ArrowLeft' && p !== 'ArrowRight' && (A = ie(N, A + 1, h(N), 'right'));
      A !== v && H(w, A), n(l);
    },
    S = Q(i) ? f : i,
    c = d != null ? d : ir(S, r),
    x = Object.assign(Object.assign({}, e), { valueIsNumericString: c });
  return Object.assign(Object.assign({}, m), {
    value: i,
    defaultValue: f,
    valueIsNumericString: c,
    inputMode: t,
    format: function (l) {
      return rr(l, x);
    },
    removeFormatting: function (l, p) {
      return tr(l, p, x);
    },
    getCaretBoundary: h,
    onKeyDown: s,
  });
}
function lr(e) {
  var r = ur(e);
  return J.createElement(Ie, Object.assign({}, r));
}
export { or as N, lr as P };
//# sourceMappingURL=react-number-format.es-D8kq6Zz4.js.map
