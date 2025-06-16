var Re = Object.defineProperty,
  Ce = Object.defineProperties;
var Me = Object.getOwnPropertyDescriptors;
var F = Object.getOwnPropertySymbols;
var oe = Object.prototype.hasOwnProperty,
  se = Object.prototype.propertyIsEnumerable;
var re = (e, t, n) =>
    t in e ? Re(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  g = (e, t) => {
    for (var n in t || (t = {})) oe.call(t, n) && re(e, n, t[n]);
    if (F) for (var n of F(t)) se.call(t, n) && re(e, n, t[n]);
    return e;
  },
  R = (e, t) => Ce(e, Me(t));
var P = (e, t) => {
  var n = {};
  for (var r in e) oe.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && F) for (var r of F(e)) t.indexOf(r) < 0 && se.call(e, r) && (n[r] = e[r]);
  return n;
};
import { r as i, j as h, R as T, l as Pe, w as Ee } from './vendor-BCNtwJ5j.js';
import { p as De } from './index-BInJAZZg.js';
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
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = 'ee815360-7320-4587-bf78-9ce17d078995'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-ee815360-7320-4587-bf78-9ce17d078995'));
  } catch (n) {}
})();
function ce(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function O(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented)) return t == null ? void 0 : t(o);
  };
}
function ie(e, t) {
  if (typeof e == 'function') return e(t);
  e != null && (e.current = t);
}
function ae(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = ie(o, t);
      return !n && typeof s == 'function' && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == 'function' ? s() : ie(e[o], null);
        }
      };
  };
}
function I(...e) {
  return i.useCallback(ae(...e), e);
}
function le(e, t = []) {
  let n = [];
  function r(s, c) {
    const a = i.createContext(c),
      u = n.length;
    n = [...n, c];
    const d = (v) => {
      var y;
      const m = v,
        { scope: l, children: f } = m,
        p = P(m, ['scope', 'children']),
        _ = ((y = l == null ? void 0 : l[e]) == null ? void 0 : y[u]) || a,
        S = i.useMemo(() => p, Object.values(p));
      return h.jsx(_.Provider, { value: S, children: f });
    };
    d.displayName = s + 'Provider';
    function b(v, l) {
      var _;
      const f = ((_ = l == null ? void 0 : l[e]) == null ? void 0 : _[u]) || a,
        p = i.useContext(f);
      if (p) return p;
      if (c !== void 0) return c;
      throw new Error('`'.concat(v, '` must be used within `').concat(s, '`'));
    }
    return [d, b];
  }
  const o = () => {
    const s = n.map((c) => i.createContext(c));
    return function (a) {
      const u = (a == null ? void 0 : a[e]) || s;
      return i.useMemo(() => ({ ['__scope'.concat(e)]: R(g({}, a), { [e]: u }) }), [a, u]);
    };
  };
  return (o.scopeName = e), [r, ke(o, ...t)];
}
function ke(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (s) {
      const c = r.reduce((a, { useScope: u, scopeName: d }) => {
        const v = u(s)['__scope'.concat(d)];
        return g(g({}, a), v);
      }, {});
      return i.useMemo(() => ({ ['__scope'.concat(t.scopeName)]: c }), [c]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function ue(e) {
  const t = i.useRef(e);
  return (
    i.useEffect(() => {
      t.current = e;
    }),
    i.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function je({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = Ve({ defaultProp: t, onChange: n }),
    s = e !== void 0,
    c = s ? e : r,
    a = ue(n),
    u = i.useCallback(
      (d) => {
        if (s) {
          const v = typeof d == 'function' ? d(e) : d;
          v !== e && a(v);
        } else o(d);
      },
      [s, e, o, a]
    );
  return [c, u];
}
function Ve({ defaultProp: e, onChange: t }) {
  const n = i.useState(e),
    [r] = n,
    o = i.useRef(r),
    s = ue(t);
  return (
    i.useEffect(() => {
      o.current !== r && (s(r), (o.current = r));
    }, [r, o, s]),
    n
  );
}
var Te = i.createContext(void 0);
function Ie(e) {
  const t = i.useContext(Te);
  return e || t || 'ltr';
}
function Ae(e) {
  const t = i.useRef({ value: e, previous: e });
  return i.useMemo(
    () => (
      t.current.value !== e && ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e]
  );
}
var Ne = globalThis != null && globalThis.document ? i.useLayoutEffect : () => {};
function ze(e) {
  const [t, n] = i.useState(void 0);
  return (
    Ne(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const s = o[0];
          let c, a;
          if ('borderBoxSize' in s) {
            const u = s.borderBoxSize,
              d = Array.isArray(u) ? u[0] : u;
            (c = d.inlineSize), (a = d.blockSize);
          } else (c = e.offsetWidth), (a = e.offsetHeight);
          n({ width: c, height: a });
        });
        return r.observe(e, { box: 'border-box' }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var W = i.forwardRef((e, t) => {
  const c = e,
    { children: n } = c,
    r = P(c, ['children']),
    o = i.Children.toArray(n),
    s = o.find(Be);
  if (s) {
    const a = s.props.children,
      u = o.map((d) =>
        d === s
          ? i.Children.count(a) > 1
            ? i.Children.only(null)
            : i.isValidElement(a)
              ? a.props.children
              : null
          : d
      );
    return h.jsx(
      Z,
      R(g({}, r), { ref: t, children: i.isValidElement(a) ? i.cloneElement(a, void 0, u) : null })
    );
  }
  return h.jsx(Z, R(g({}, r), { ref: t, children: n }));
});
W.displayName = 'Slot';
var Z = i.forwardRef((e, t) => {
  const o = e,
    { children: n } = o,
    r = P(o, ['children']);
  if (i.isValidElement(n)) {
    const s = Le(n);
    return i.cloneElement(n, R(g({}, Ke(r, n.props)), { ref: t ? ae(t, s) : s }));
  }
  return i.Children.count(n) > 1 ? i.Children.only(null) : null;
});
Z.displayName = 'SlotClone';
var Oe = ({ children: e }) => h.jsx(h.Fragment, { children: e });
function Be(e) {
  return i.isValidElement(e) && e.type === Oe;
}
function Ke(e, t) {
  const n = g({}, t);
  for (const r in t) {
    const o = e[r],
      s = t[r];
    /^on[A-Z]/.test(r)
      ? o && s
        ? (n[r] = (...a) => {
            s(...a), o(...a);
          })
        : o && (n[r] = o)
      : r === 'style'
        ? (n[r] = g(g({}, o), s))
        : r === 'className' && (n[r] = [o, s].filter(Boolean).join(' '));
  }
  return g(g({}, e), n);
}
function Le(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, 'ref')) == null ? void 0 : r.get,
    n = t && 'isReactWarning' in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = (o = Object.getOwnPropertyDescriptor(e, 'ref')) == null ? void 0 : o.get),
      (n = t && 'isReactWarning' in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var $e = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'span',
    'svg',
    'ul',
  ],
  Y = $e.reduce((e, t) => {
    const n = i.forwardRef((r, o) => {
      const u = r,
        { asChild: s } = u,
        c = P(u, ['asChild']),
        a = s ? W : t;
      return (
        typeof window < 'u' && (window[Symbol.for('radix-ui')] = !0),
        h.jsx(a, R(g({}, c), { ref: o }))
      );
    });
    return (n.displayName = 'Primitive.'.concat(t)), R(g({}, e), { [t]: n });
  }, {});
function He(e) {
  const t = e + 'CollectionProvider',
    [n, r] = le(t),
    [o, s] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    c = (f) => {
      const { scope: p, children: _ } = f,
        S = T.useRef(null),
        m = T.useRef(new Map()).current;
      return h.jsx(o, { scope: p, itemMap: m, collectionRef: S, children: _ });
    };
  c.displayName = t;
  const a = e + 'CollectionSlot',
    u = T.forwardRef((f, p) => {
      const { scope: _, children: S } = f,
        m = s(a, _),
        y = I(p, m.collectionRef);
      return h.jsx(W, { ref: y, children: S });
    });
  u.displayName = a;
  const d = e + 'CollectionItemSlot',
    b = 'data-radix-collection-item',
    v = T.forwardRef((f, p) => {
      const M = f,
        { scope: _, children: S } = M,
        m = P(M, ['scope', 'children']),
        y = T.useRef(null),
        E = I(p, y),
        x = s(d, _);
      return (
        T.useEffect(() => (x.itemMap.set(y, g({ ref: y }, m)), () => void x.itemMap.delete(y))),
        h.jsx(W, { [b]: '', ref: E, children: S })
      );
    });
  v.displayName = d;
  function l(f) {
    const p = s(e + 'CollectionConsumer', f);
    return T.useCallback(() => {
      const S = p.collectionRef.current;
      if (!S) return [];
      const m = Array.from(S.querySelectorAll('['.concat(b, ']')));
      return Array.from(p.itemMap.values()).sort(
        (x, M) => m.indexOf(x.ref.current) - m.indexOf(M.ref.current)
      );
    }, [p.collectionRef, p.itemMap]);
  }
  return [{ Provider: c, Slot: u, ItemSlot: v }, l, r];
}
var de = ['PageUp', 'PageDown'],
  fe = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'],
  me = {
    'from-left': ['Home', 'PageDown', 'ArrowDown', 'ArrowLeft'],
    'from-right': ['Home', 'PageDown', 'ArrowDown', 'ArrowRight'],
    'from-bottom': ['Home', 'PageDown', 'ArrowDown', 'ArrowLeft'],
    'from-top': ['Home', 'PageDown', 'ArrowUp', 'ArrowLeft'],
  },
  B = 'Slider',
  [J, Fe, Ue] = He(B),
  [pe, Mt] = le(B, [Ue]),
  [We, X] = pe(B),
  he = i.forwardRef((e, t) => {
    const H = e,
      {
        name: n,
        min: r = 0,
        max: o = 100,
        step: s = 1,
        orientation: c = 'horizontal',
        disabled: a = !1,
        minStepsBetweenThumbs: u = 0,
        defaultValue: d = [r],
        value: b,
        onValueChange: v = () => {},
        onValueCommit: l = () => {},
        inverted: f = !1,
        form: p,
      } = H,
      _ = P(H, [
        'name',
        'min',
        'max',
        'step',
        'orientation',
        'disabled',
        'minStepsBetweenThumbs',
        'defaultValue',
        'value',
        'onValueChange',
        'onValueCommit',
        'inverted',
        'form',
      ]),
      S = i.useRef(new Set()),
      m = i.useRef(0),
      E = c === 'horizontal' ? Ye : Xe,
      [x = [], M] = je({
        prop: b,
        defaultProp: d,
        onChange: (w) => {
          var D;
          (D = [...S.current][m.current]) == null || D.focus(), v(w);
        },
      }),
      k = i.useRef(x);
    function K(w) {
      const C = Qe(x, w);
      j(w, C);
    }
    function L(w) {
      j(w, m.current);
    }
    function G() {
      const w = k.current[m.current];
      x[m.current] !== w && l(x);
    }
    function j(w, C, { commit: D } = { commit: !1 }) {
      const A = rt(s),
        q = ot(Math.round((w - r) / s) * s + r, A),
        $ = ce(q, [r, o]);
      M((N = []) => {
        const V = Ze(N, $, C);
        if (nt(V, u * s)) {
          m.current = V.indexOf($);
          const ne = String(V) !== String(N);
          return ne && D && l(V), ne ? V : N;
        } else return N;
      });
    }
    return h.jsx(We, {
      scope: e.__scopeSlider,
      name: n,
      disabled: a,
      min: r,
      max: o,
      valueIndexToChangeRef: m,
      thumbs: S.current,
      values: x,
      orientation: c,
      form: p,
      children: h.jsx(J.Provider, {
        scope: e.__scopeSlider,
        children: h.jsx(J.Slot, {
          scope: e.__scopeSlider,
          children: h.jsx(
            E,
            R(g({ 'aria-disabled': a, 'data-disabled': a ? '' : void 0 }, _), {
              ref: t,
              onPointerDown: O(_.onPointerDown, () => {
                a || (k.current = x);
              }),
              min: r,
              max: o,
              inverted: f,
              onSlideStart: a ? void 0 : K,
              onSlideMove: a ? void 0 : L,
              onSlideEnd: a ? void 0 : G,
              onHomeKeyDown: () => !a && j(r, 0, { commit: !0 }),
              onEndKeyDown: () => !a && j(o, x.length - 1, { commit: !0 }),
              onStepKeyDown: ({ event: w, direction: C }) => {
                if (!a) {
                  const q = de.includes(w.key) || (w.shiftKey && fe.includes(w.key)) ? 10 : 1,
                    $ = m.current,
                    N = x[$],
                    V = s * q * C;
                  j(N + V, $, { commit: !0 });
                }
              },
            })
          ),
        }),
      }),
    });
  });
he.displayName = B;
var [Se, xe] = pe(B, { startEdge: 'left', endEdge: 'right', size: 'width', direction: 1 }),
  Ye = i.forwardRef((e, t) => {
    const E = e,
      {
        min: n,
        max: r,
        dir: o,
        inverted: s,
        onSlideStart: c,
        onSlideMove: a,
        onSlideEnd: u,
        onStepKeyDown: d,
      } = E,
      b = P(E, [
        'min',
        'max',
        'dir',
        'inverted',
        'onSlideStart',
        'onSlideMove',
        'onSlideEnd',
        'onStepKeyDown',
      ]),
      [v, l] = i.useState(null),
      f = I(t, (x) => l(x)),
      p = i.useRef(void 0),
      _ = Ie(o),
      S = _ === 'ltr',
      m = (S && !s) || (!S && s);
    function y(x) {
      const M = p.current || v.getBoundingClientRect(),
        k = [0, M.width],
        L = te(k, m ? [n, r] : [r, n]);
      return (p.current = M), L(x - M.left);
    }
    return h.jsx(Se, {
      scope: e.__scopeSlider,
      startEdge: m ? 'left' : 'right',
      endEdge: m ? 'right' : 'left',
      direction: m ? 1 : -1,
      size: 'width',
      children: h.jsx(
        ge,
        R(g({ dir: _, 'data-orientation': 'horizontal' }, b), {
          ref: f,
          style: R(g({}, b.style), { '--radix-slider-thumb-transform': 'translateX(-50%)' }),
          onSlideStart: (x) => {
            const M = y(x.clientX);
            c == null || c(M);
          },
          onSlideMove: (x) => {
            const M = y(x.clientX);
            a == null || a(M);
          },
          onSlideEnd: () => {
            (p.current = void 0), u == null || u();
          },
          onStepKeyDown: (x) => {
            const k = me[m ? 'from-left' : 'from-right'].includes(x.key);
            d == null || d({ event: x, direction: k ? -1 : 1 });
          },
        })
      ),
    });
  }),
  Xe = i.forwardRef((e, t) => {
    const _ = e,
      {
        min: n,
        max: r,
        inverted: o,
        onSlideStart: s,
        onSlideMove: c,
        onSlideEnd: a,
        onStepKeyDown: u,
      } = _,
      d = P(_, [
        'min',
        'max',
        'inverted',
        'onSlideStart',
        'onSlideMove',
        'onSlideEnd',
        'onStepKeyDown',
      ]),
      b = i.useRef(null),
      v = I(t, b),
      l = i.useRef(void 0),
      f = !o;
    function p(S) {
      const m = l.current || b.current.getBoundingClientRect(),
        y = [0, m.height],
        x = te(y, f ? [r, n] : [n, r]);
      return (l.current = m), x(S - m.top);
    }
    return h.jsx(Se, {
      scope: e.__scopeSlider,
      startEdge: f ? 'bottom' : 'top',
      endEdge: f ? 'top' : 'bottom',
      size: 'height',
      direction: f ? 1 : -1,
      children: h.jsx(
        ge,
        R(g({ 'data-orientation': 'vertical' }, d), {
          ref: v,
          style: R(g({}, d.style), { '--radix-slider-thumb-transform': 'translateY(50%)' }),
          onSlideStart: (S) => {
            const m = p(S.clientY);
            s == null || s(m);
          },
          onSlideMove: (S) => {
            const m = p(S.clientY);
            c == null || c(m);
          },
          onSlideEnd: () => {
            (l.current = void 0), a == null || a();
          },
          onStepKeyDown: (S) => {
            const y = me[f ? 'from-bottom' : 'from-top'].includes(S.key);
            u == null || u({ event: S, direction: y ? -1 : 1 });
          },
        })
      ),
    });
  }),
  ge = i.forwardRef((e, t) => {
    const v = e,
      {
        __scopeSlider: n,
        onSlideStart: r,
        onSlideMove: o,
        onSlideEnd: s,
        onHomeKeyDown: c,
        onEndKeyDown: a,
        onStepKeyDown: u,
      } = v,
      d = P(v, [
        '__scopeSlider',
        'onSlideStart',
        'onSlideMove',
        'onSlideEnd',
        'onHomeKeyDown',
        'onEndKeyDown',
        'onStepKeyDown',
      ]),
      b = X(B, n);
    return h.jsx(
      Y.span,
      R(g({}, d), {
        ref: t,
        onKeyDown: O(e.onKeyDown, (l) => {
          l.key === 'Home'
            ? (c(l), l.preventDefault())
            : l.key === 'End'
              ? (a(l), l.preventDefault())
              : de.concat(fe).includes(l.key) && (u(l), l.preventDefault());
        }),
        onPointerDown: O(e.onPointerDown, (l) => {
          const f = l.target;
          f.setPointerCapture(l.pointerId), l.preventDefault(), b.thumbs.has(f) ? f.focus() : r(l);
        }),
        onPointerMove: O(e.onPointerMove, (l) => {
          l.target.hasPointerCapture(l.pointerId) && o(l);
        }),
        onPointerUp: O(e.onPointerUp, (l) => {
          const f = l.target;
          f.hasPointerCapture(l.pointerId) && (f.releasePointerCapture(l.pointerId), s(l));
        }),
      })
    );
  }),
  be = 'SliderTrack',
  ve = i.forwardRef((e, t) => {
    const s = e,
      { __scopeSlider: n } = s,
      r = P(s, ['__scopeSlider']),
      o = X(be, n);
    return h.jsx(
      Y.span,
      R(g({ 'data-disabled': o.disabled ? '' : void 0, 'data-orientation': o.orientation }, r), {
        ref: t,
      })
    );
  });
ve.displayName = be;
var Q = 'SliderRange',
  _e = i.forwardRef((e, t) => {
    const l = e,
      { __scopeSlider: n } = l,
      r = P(l, ['__scopeSlider']),
      o = X(Q, n),
      s = xe(Q, n),
      c = i.useRef(null),
      a = I(t, c),
      u = o.values.length,
      d = o.values.map((f) => ye(f, o.min, o.max)),
      b = u > 1 ? Math.min(...d) : 0,
      v = 100 - Math.max(...d);
    return h.jsx(
      Y.span,
      R(g({ 'data-orientation': o.orientation, 'data-disabled': o.disabled ? '' : void 0 }, r), {
        ref: a,
        style: R(g({}, e.style), { [s.startEdge]: b + '%', [s.endEdge]: v + '%' }),
      })
    );
  });
_e.displayName = Q;
var ee = 'SliderThumb',
  we = i.forwardRef((e, t) => {
    const n = Fe(e.__scopeSlider),
      [r, o] = i.useState(null),
      s = I(t, (a) => o(a)),
      c = i.useMemo(() => (r ? n().findIndex((a) => a.ref.current === r) : -1), [n, r]);
    return h.jsx(Ge, R(g({}, e), { ref: s, index: c }));
  }),
  Ge = i.forwardRef((e, t) => {
    const y = e,
      { __scopeSlider: n, index: r, name: o } = y,
      s = P(y, ['__scopeSlider', 'index', 'name']),
      c = X(ee, n),
      a = xe(ee, n),
      [u, d] = i.useState(null),
      b = I(t, (E) => d(E)),
      v = u ? c.form || !!u.closest('form') : !0,
      l = ze(u),
      f = c.values[r],
      p = f === void 0 ? 0 : ye(f, c.min, c.max),
      _ = Je(r, c.values.length),
      S = l == null ? void 0 : l[a.size],
      m = S ? et(S, p, a.direction) : 0;
    return (
      i.useEffect(() => {
        if (u)
          return (
            c.thumbs.add(u),
            () => {
              c.thumbs.delete(u);
            }
          );
      }, [u, c.thumbs]),
      h.jsxs('span', {
        style: {
          transform: 'var(--radix-slider-thumb-transform)',
          position: 'absolute',
          [a.startEdge]: 'calc('.concat(p, '% + ').concat(m, 'px)'),
        },
        children: [
          h.jsx(J.ItemSlot, {
            scope: e.__scopeSlider,
            children: h.jsx(
              Y.span,
              R(
                g(
                  {
                    role: 'slider',
                    'aria-label': e['aria-label'] || _,
                    'aria-valuemin': c.min,
                    'aria-valuenow': f,
                    'aria-valuemax': c.max,
                    'aria-orientation': c.orientation,
                    'data-orientation': c.orientation,
                    'data-disabled': c.disabled ? '' : void 0,
                    tabIndex: c.disabled ? void 0 : 0,
                  },
                  s
                ),
                {
                  ref: b,
                  style: f === void 0 ? { display: 'none' } : e.style,
                  onFocus: O(e.onFocus, () => {
                    c.valueIndexToChangeRef.current = r;
                  }),
                }
              )
            ),
          }),
          v &&
            h.jsx(
              qe,
              {
                name: o != null ? o : c.name ? c.name + (c.values.length > 1 ? '[]' : '') : void 0,
                form: c.form,
                value: f,
              },
              r
            ),
        ],
      })
    );
  });
we.displayName = ee;
var qe = (e) => {
  const s = e,
    { value: t } = s,
    n = P(s, ['value']),
    r = i.useRef(null),
    o = Ae(t);
  return (
    i.useEffect(() => {
      const c = r.current,
        a = window.HTMLInputElement.prototype,
        d = Object.getOwnPropertyDescriptor(a, 'value').set;
      if (o !== t && d) {
        const b = new Event('input', { bubbles: !0 });
        d.call(c, t), c.dispatchEvent(b);
      }
    }, [o, t]),
    h.jsx('input', R(g({ style: { display: 'none' } }, n), { ref: r, defaultValue: t }))
  );
};
function Ze(e = [], t, n) {
  const r = [...e];
  return (r[n] = t), r.sort((o, s) => o - s);
}
function ye(e, t, n) {
  const s = (100 / (n - t)) * (e - t);
  return ce(s, [0, 100]);
}
function Je(e, t) {
  return t > 2
    ? 'Value '.concat(e + 1, ' of ').concat(t)
    : t === 2
      ? ['Minimum', 'Maximum'][e]
      : void 0;
}
function Qe(e, t) {
  if (e.length === 1) return 0;
  const n = e.map((o) => Math.abs(o - t)),
    r = Math.min(...n);
  return n.indexOf(r);
}
function et(e, t, n) {
  const r = e / 2,
    s = te([0, 50], [0, r]);
  return (r - s(t) * n) * n;
}
function tt(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function nt(e, t) {
  if (t > 0) {
    const n = tt(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function te(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function rt(e) {
  return (String(e).split('.')[1] || '').length;
}
function ot(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
var st = he,
  it = ve,
  ct = _e,
  at = we;
const lt = '_wrapper_1vrz8_1',
  ut = '_sliderRoot_1vrz8_4',
  dt = '_sliderTrack_1vrz8_15',
  ft = '_sliderRange_1vrz8_52',
  mt = '_sliderThumb_1vrz8_66',
  pt = '_marks_1vrz8_116',
  ht = '_valueMark_1vrz8_127',
  St = '_minMark_1vrz8_131',
  xt = '_maxMark_1vrz8_132',
  gt = '__hide_1vrz8_135',
  bt = '_breakpoint_1vrz8_138',
  U = {
    wrapper: lt,
    sliderRoot: ut,
    sliderTrack: dt,
    '_variant-default': '__variant-default_1vrz8_43',
    '_variant-high': '__variant-high_1vrz8_46',
    '_variant-extreme': '__variant-extreme_1vrz8_49',
    sliderRange: ft,
    sliderThumb: mt,
    marks: pt,
    valueMark: ht,
    minMark: St,
    maxMark: xt,
    _hide: gt,
    breakpoint: bt,
  },
  z = Ee(U),
  { formatPercent: vt } = De,
  Pt = i.memo((l) => {
    var f = l,
      {
        min: e = 0,
        max: t = 0,
        value: n = 0,
        hideAtPerc: r = 0.125,
        className: o,
        onValueChange: s,
        formatter: c = vt,
        step: a,
        breakpoints: u,
        variant: d = 'default',
        snapStep: b,
      } = f,
      v = P(f, [
        'min',
        'max',
        'value',
        'hideAtPerc',
        'className',
        'onValueChange',
        'formatter',
        'step',
        'breakpoints',
        'variant',
        'snapStep',
      ]);
    const [p, _] = i.useState(n);
    i.useEffect(() => {
      _(n);
    }, [n]);
    const [S, m] = i.useMemo(() => {
        const C = (t - e) * r;
        return [e + C, t - C];
      }, [e, t, r]),
      y = i.useMemo(() => (S ? p < S : void 0), [S, p]),
      E = i.useMemo(() => (m ? p > m : void 0), [m, p]),
      x = t - e,
      k = ((Math.min(p, t) - e) / x) * 100,
      K = i.useMemo(
        () =>
          Pe.debounce((w) => {
            s(w);
          }, 100),
        [s]
      ),
      L = i.useCallback(
        (w) => {
          _(w[0]);
          const C = Number(w[0].toFixed(10));
          K(C);
        },
        [K]
      ),
      G = i.useCallback(() => {
        if (b) {
          const C = Math.round(p / b) * b,
            D = Number(C.toFixed(10)),
            A = Math.min(Math.max(D, e), t);
          _(A), s(A);
        }
      }, [p, b, e, t, s]),
      j = (w) => {
        const C = Math.min(Math.max(w, e), t),
          D = t - e;
        return ((C - e) / D) * 100;
      },
      H = i.useMemo(() => [p], [p]);
    return h.jsxs(h.Fragment, {
      children: [
        h.jsxs(
          st,
          R(
            g(
              {
                className: z('sliderRoot', o),
                min: e,
                max: t,
                step: a,
                onValueChange: L,
                value: H,
                onPointerUp: G,
              },
              v
            ),
            {
              children: [
                h.jsx(it, {
                  className: z('sliderTrack', { variant: d }),
                  children: h.jsx(ct, { className: z('sliderRange', { variant: d }) }),
                }),
                u == null
                  ? void 0
                  : u.map((w, C) =>
                      h.jsx(
                        'div',
                        {
                          className: U.breakpoint,
                          style: {
                            left: ''.concat(j(w), '%'),
                            transform: 'translateX(-'.concat(j(w), '%)'),
                          },
                        },
                        C
                      )
                    ),
                h.jsx(at, { className: U.sliderThumb, 'aria-label': 'Volume' }),
              ],
            }
          )
        ),
        h.jsxs('div', {
          className: U.marks,
          children: [
            h.jsx('div', { className: z('minMark', { hide: y }), children: c(e) }),
            h.jsx('div', {
              className: z('valueMark'),
              style: { left: ''.concat(k, '%'), transform: 'translateX(-'.concat(k, '%)') },
              children: c(p),
            }),
            h.jsx('div', { className: z('maxMark', { hide: E }), children: c(t) }),
          ],
        }),
      ],
    });
  });
function _t(e, t) {
  const [n, r] = i.useState(e),
    o = i.useRef(e);
  return (
    i.useEffect(() => {
      o.current = e;
    }, [e]),
    i.useEffect(() => {
      const s = setInterval(() => {
        r(o.current);
      }, t);
      return () => {
        clearInterval(s);
      };
    }, [t]),
    n
  );
}
function wt(e, t) {
  const [n, r] = i.useState(e);
  return (
    i.useEffect(() => {
      const o = setTimeout(() => {
        r(e);
      }, t);
      return () => {
        clearTimeout(o);
      };
    }, [e, t]),
    n
  );
}
const Et = (e, t = 0, n = 200) => {
    const [r, o] = i.useState(t),
      s = wt(r, n);
    i.useEffect(() => {
      e(s);
    }, [s, e]);
    const c = i.useCallback(() => {
      e(t), o(t);
    }, [e, t]);
    return { sliderValue: r, setSliderValue: o, resetSlider: c };
  },
  Dt = (e, t = 0, n = 200) => {
    const [r, o] = i.useState(t),
      s = _t(r, n);
    return (
      i.useEffect(() => {
        e(s);
      }, [s, e]),
      { sliderValue: r, setSliderValue: o }
    );
  };
export { Pt as S, Et as a, Dt as u };
//# sourceMappingURL=index-Cl-BjDg0.js.map
