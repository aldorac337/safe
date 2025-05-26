var Re = Object.defineProperty,
  Ce = Object.defineProperties;
var Me = Object.getOwnPropertyDescriptors;
var F = Object.getOwnPropertySymbols;
var oe = Object.prototype.hasOwnProperty,
  se = Object.prototype.propertyIsEnumerable;
var re = (e, t, n) =>
    t in e ? Re(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  x = (e, t) => {
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
import { r as i, j as h, R as j, l as Pe, w as Ee } from './vendor-S4AjIOSE.js';
import { p as De } from './index-CroKpwmf.js';
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
      (e._sentryDebugIds[t] = '961171dd-4568-4a1e-92a6-58217300df30'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-961171dd-4568-4a1e-92a6-58217300df30'));
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
function T(...e) {
  return i.useCallback(ae(...e), e);
}
function le(e, t = []) {
  let n = [];
  function r(s, c) {
    const a = i.createContext(c),
      u = n.length;
    n = [...n, c];
    const d = (_) => {
      var y;
      const m = _,
        { scope: l, children: f } = m,
        p = P(m, ['scope', 'children']),
        v = ((y = l == null ? void 0 : l[e]) == null ? void 0 : y[u]) || a,
        S = i.useMemo(() => p, Object.values(p));
      return h.jsx(v.Provider, { value: S, children: f });
    };
    d.displayName = s + 'Provider';
    function b(_, l) {
      var v;
      const f = ((v = l == null ? void 0 : l[e]) == null ? void 0 : v[u]) || a,
        p = i.useContext(f);
      if (p) return p;
      if (c !== void 0) return c;
      throw new Error('`'.concat(_, '` must be used within `').concat(s, '`'));
    }
    return [d, b];
  }
  const o = () => {
    const s = n.map((c) => i.createContext(c));
    return function (a) {
      const u = (a == null ? void 0 : a[e]) || s;
      return i.useMemo(() => ({ ['__scope'.concat(e)]: R(x({}, a), { [e]: u }) }), [a, u]);
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
        const _ = u(s)['__scope'.concat(d)];
        return x(x({}, a), _);
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
function Ae({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = Ie({ defaultProp: t, onChange: n }),
    s = e !== void 0,
    c = s ? e : r,
    a = ue(n),
    u = i.useCallback(
      (d) => {
        if (s) {
          const _ = typeof d == 'function' ? d(e) : d;
          _ !== e && a(_);
        } else o(d);
      },
      [s, e, o, a]
    );
  return [c, u];
}
function Ie({ defaultProp: e, onChange: t }) {
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
var je = i.createContext(void 0);
function Te(e) {
  const t = i.useContext(je);
  return e || t || 'ltr';
}
function Ve(e) {
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
      R(x({}, r), { ref: t, children: i.isValidElement(a) ? i.cloneElement(a, void 0, u) : null })
    );
  }
  return h.jsx(Z, R(x({}, r), { ref: t, children: n }));
});
W.displayName = 'Slot';
var Z = i.forwardRef((e, t) => {
  const o = e,
    { children: n } = o,
    r = P(o, ['children']);
  if (i.isValidElement(n)) {
    const s = Ke(n);
    return i.cloneElement(n, R(x({}, Le(r, n.props)), { ref: t ? ae(t, s) : s }));
  }
  return i.Children.count(n) > 1 ? i.Children.only(null) : null;
});
Z.displayName = 'SlotClone';
var Oe = ({ children: e }) => h.jsx(h.Fragment, { children: e });
function Be(e) {
  return i.isValidElement(e) && e.type === Oe;
}
function Le(e, t) {
  const n = x({}, t);
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
        ? (n[r] = x(x({}, o), s))
        : r === 'className' && (n[r] = [o, s].filter(Boolean).join(' '));
  }
  return x(x({}, e), n);
}
function Ke(e) {
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
        h.jsx(a, R(x({}, c), { ref: o }))
      );
    });
    return (n.displayName = 'Primitive.'.concat(t)), R(x({}, e), { [t]: n });
  }, {});
function He(e) {
  const t = e + 'CollectionProvider',
    [n, r] = le(t),
    [o, s] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    c = (f) => {
      const { scope: p, children: v } = f,
        S = j.useRef(null),
        m = j.useRef(new Map()).current;
      return h.jsx(o, { scope: p, itemMap: m, collectionRef: S, children: v });
    };
  c.displayName = t;
  const a = e + 'CollectionSlot',
    u = j.forwardRef((f, p) => {
      const { scope: v, children: S } = f,
        m = s(a, v),
        y = T(p, m.collectionRef);
      return h.jsx(W, { ref: y, children: S });
    });
  u.displayName = a;
  const d = e + 'CollectionItemSlot',
    b = 'data-radix-collection-item',
    _ = j.forwardRef((f, p) => {
      const M = f,
        { scope: v, children: S } = M,
        m = P(M, ['scope', 'children']),
        y = j.useRef(null),
        E = T(p, y),
        g = s(d, v);
      return (
        j.useEffect(() => (g.itemMap.set(y, x({ ref: y }, m)), () => void g.itemMap.delete(y))),
        h.jsx(W, { [b]: '', ref: E, children: S })
      );
    });
  _.displayName = d;
  function l(f) {
    const p = s(e + 'CollectionConsumer', f);
    return j.useCallback(() => {
      const S = p.collectionRef.current;
      if (!S) return [];
      const m = Array.from(S.querySelectorAll('['.concat(b, ']')));
      return Array.from(p.itemMap.values()).sort(
        (g, M) => m.indexOf(g.ref.current) - m.indexOf(M.ref.current)
      );
    }, [p.collectionRef, p.itemMap]);
  }
  return [{ Provider: c, Slot: u, ItemSlot: _ }, l, r];
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
        onValueChange: _ = () => {},
        onValueCommit: l = () => {},
        inverted: f = !1,
        form: p,
      } = H,
      v = P(H, [
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
      [g = [], M] = Ae({
        prop: b,
        defaultProp: d,
        onChange: (w) => {
          var D;
          (D = [...S.current][m.current]) == null || D.focus(), _(w);
        },
      }),
      k = i.useRef(g);
    function L(w) {
      const C = Qe(g, w);
      A(w, C);
    }
    function K(w) {
      A(w, m.current);
    }
    function G() {
      const w = k.current[m.current];
      g[m.current] !== w && l(g);
    }
    function A(w, C, { commit: D } = { commit: !1 }) {
      const V = rt(s),
        q = ot(Math.round((w - r) / s) * s + r, V),
        $ = ce(q, [r, o]);
      M((N = []) => {
        const I = Ze(N, $, C);
        if (nt(I, u * s)) {
          m.current = I.indexOf($);
          const ne = String(I) !== String(N);
          return ne && D && l(I), ne ? I : N;
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
      values: g,
      orientation: c,
      form: p,
      children: h.jsx(J.Provider, {
        scope: e.__scopeSlider,
        children: h.jsx(J.Slot, {
          scope: e.__scopeSlider,
          children: h.jsx(
            E,
            R(x({ 'aria-disabled': a, 'data-disabled': a ? '' : void 0 }, v), {
              ref: t,
              onPointerDown: O(v.onPointerDown, () => {
                a || (k.current = g);
              }),
              min: r,
              max: o,
              inverted: f,
              onSlideStart: a ? void 0 : L,
              onSlideMove: a ? void 0 : K,
              onSlideEnd: a ? void 0 : G,
              onHomeKeyDown: () => !a && A(r, 0, { commit: !0 }),
              onEndKeyDown: () => !a && A(o, g.length - 1, { commit: !0 }),
              onStepKeyDown: ({ event: w, direction: C }) => {
                if (!a) {
                  const q = de.includes(w.key) || (w.shiftKey && fe.includes(w.key)) ? 10 : 1,
                    $ = m.current,
                    N = g[$],
                    I = s * q * C;
                  A(N + I, $, { commit: !0 });
                }
              },
            })
          ),
        }),
      }),
    });
  });
he.displayName = B;
var [Se, ge] = pe(B, { startEdge: 'left', endEdge: 'right', size: 'width', direction: 1 }),
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
      [_, l] = i.useState(null),
      f = T(t, (g) => l(g)),
      p = i.useRef(void 0),
      v = Te(o),
      S = v === 'ltr',
      m = (S && !s) || (!S && s);
    function y(g) {
      const M = p.current || _.getBoundingClientRect(),
        k = [0, M.width],
        K = te(k, m ? [n, r] : [r, n]);
      return (p.current = M), K(g - M.left);
    }
    return h.jsx(Se, {
      scope: e.__scopeSlider,
      startEdge: m ? 'left' : 'right',
      endEdge: m ? 'right' : 'left',
      direction: m ? 1 : -1,
      size: 'width',
      children: h.jsx(
        xe,
        R(x({ dir: v, 'data-orientation': 'horizontal' }, b), {
          ref: f,
          style: R(x({}, b.style), { '--radix-slider-thumb-transform': 'translateX(-50%)' }),
          onSlideStart: (g) => {
            const M = y(g.clientX);
            c == null || c(M);
          },
          onSlideMove: (g) => {
            const M = y(g.clientX);
            a == null || a(M);
          },
          onSlideEnd: () => {
            (p.current = void 0), u == null || u();
          },
          onStepKeyDown: (g) => {
            const k = me[m ? 'from-left' : 'from-right'].includes(g.key);
            d == null || d({ event: g, direction: k ? -1 : 1 });
          },
        })
      ),
    });
  }),
  Xe = i.forwardRef((e, t) => {
    const v = e,
      {
        min: n,
        max: r,
        inverted: o,
        onSlideStart: s,
        onSlideMove: c,
        onSlideEnd: a,
        onStepKeyDown: u,
      } = v,
      d = P(v, [
        'min',
        'max',
        'inverted',
        'onSlideStart',
        'onSlideMove',
        'onSlideEnd',
        'onStepKeyDown',
      ]),
      b = i.useRef(null),
      _ = T(t, b),
      l = i.useRef(void 0),
      f = !o;
    function p(S) {
      const m = l.current || b.current.getBoundingClientRect(),
        y = [0, m.height],
        g = te(y, f ? [r, n] : [n, r]);
      return (l.current = m), g(S - m.top);
    }
    return h.jsx(Se, {
      scope: e.__scopeSlider,
      startEdge: f ? 'bottom' : 'top',
      endEdge: f ? 'top' : 'bottom',
      size: 'height',
      direction: f ? 1 : -1,
      children: h.jsx(
        xe,
        R(x({ 'data-orientation': 'vertical' }, d), {
          ref: _,
          style: R(x({}, d.style), { '--radix-slider-thumb-transform': 'translateY(50%)' }),
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
  xe = i.forwardRef((e, t) => {
    const _ = e,
      {
        __scopeSlider: n,
        onSlideStart: r,
        onSlideMove: o,
        onSlideEnd: s,
        onHomeKeyDown: c,
        onEndKeyDown: a,
        onStepKeyDown: u,
      } = _,
      d = P(_, [
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
      R(x({}, d), {
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
  _e = i.forwardRef((e, t) => {
    const s = e,
      { __scopeSlider: n } = s,
      r = P(s, ['__scopeSlider']),
      o = X(be, n);
    return h.jsx(
      Y.span,
      R(x({ 'data-disabled': o.disabled ? '' : void 0, 'data-orientation': o.orientation }, r), {
        ref: t,
      })
    );
  });
_e.displayName = be;
var Q = 'SliderRange',
  ve = i.forwardRef((e, t) => {
    const l = e,
      { __scopeSlider: n } = l,
      r = P(l, ['__scopeSlider']),
      o = X(Q, n),
      s = ge(Q, n),
      c = i.useRef(null),
      a = T(t, c),
      u = o.values.length,
      d = o.values.map((f) => ye(f, o.min, o.max)),
      b = u > 1 ? Math.min(...d) : 0,
      _ = 100 - Math.max(...d);
    return h.jsx(
      Y.span,
      R(x({ 'data-orientation': o.orientation, 'data-disabled': o.disabled ? '' : void 0 }, r), {
        ref: a,
        style: R(x({}, e.style), { [s.startEdge]: b + '%', [s.endEdge]: _ + '%' }),
      })
    );
  });
ve.displayName = Q;
var ee = 'SliderThumb',
  we = i.forwardRef((e, t) => {
    const n = Fe(e.__scopeSlider),
      [r, o] = i.useState(null),
      s = T(t, (a) => o(a)),
      c = i.useMemo(() => (r ? n().findIndex((a) => a.ref.current === r) : -1), [n, r]);
    return h.jsx(Ge, R(x({}, e), { ref: s, index: c }));
  }),
  Ge = i.forwardRef((e, t) => {
    const y = e,
      { __scopeSlider: n, index: r, name: o } = y,
      s = P(y, ['__scopeSlider', 'index', 'name']),
      c = X(ee, n),
      a = ge(ee, n),
      [u, d] = i.useState(null),
      b = T(t, (E) => d(E)),
      _ = u ? c.form || !!u.closest('form') : !0,
      l = ze(u),
      f = c.values[r],
      p = f === void 0 ? 0 : ye(f, c.min, c.max),
      v = Je(r, c.values.length),
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
                x(
                  {
                    role: 'slider',
                    'aria-label': e['aria-label'] || v,
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
          _ &&
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
    o = Ve(t);
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
    h.jsx('input', R(x({ style: { display: 'none' } }, n), { ref: r, defaultValue: t }))
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
  it = _e,
  ct = ve,
  at = we;
const lt = '_wrapper_1vrz8_1',
  ut = '_sliderRoot_1vrz8_4',
  dt = '_sliderTrack_1vrz8_15',
  ft = '_sliderRange_1vrz8_52',
  mt = '_sliderThumb_1vrz8_66',
  pt = '_marks_1vrz8_116',
  ht = '_valueMark_1vrz8_127',
  St = '_minMark_1vrz8_131',
  gt = '_maxMark_1vrz8_132',
  xt = '__hide_1vrz8_135',
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
    maxMark: gt,
    _hide: xt,
    breakpoint: bt,
  },
  z = Ee(U),
  { formatPercent: _t } = De,
  Pt = i.memo((l) => {
    var f = l,
      {
        min: e = 0,
        max: t = 0,
        value: n = 0,
        hideAtPerc: r = 0.125,
        className: o,
        onValueChange: s,
        formatter: c = _t,
        step: a,
        breakpoints: u,
        variant: d = 'default',
        snapStep: b,
      } = f,
      _ = P(f, [
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
    const [p, v] = i.useState(n);
    i.useEffect(() => {
      v(n);
    }, [n]);
    const [S, m] = i.useMemo(() => {
        const C = (t - e) * r;
        return [e + C, t - C];
      }, [e, t, r]),
      y = i.useMemo(() => (S ? p < S : void 0), [S, p]),
      E = i.useMemo(() => (m ? p > m : void 0), [m, p]),
      g = t - e,
      k = ((Math.min(p, t) - e) / g) * 100,
      L = i.useMemo(
        () =>
          Pe.debounce((w) => {
            s(w);
          }, 100),
        [s]
      ),
      K = i.useCallback(
        (w) => {
          v(w[0]);
          const C = Number(w[0].toFixed(10));
          L(C);
        },
        [L]
      ),
      G = i.useCallback(() => {
        if (b) {
          const C = Math.round(p / b) * b,
            D = Number(C.toFixed(10)),
            V = Math.min(Math.max(D, e), t);
          v(V), s(V);
        }
      }, [p, b, e, t, s]),
      A = (w) => {
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
            x(
              {
                className: z('sliderRoot', o),
                min: e,
                max: t,
                step: a,
                onValueChange: K,
                value: H,
                onPointerUp: G,
              },
              _
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
                            left: ''.concat(A(w), '%'),
                            transform: 'translateX(-'.concat(A(w), '%)'),
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
function vt(e, t) {
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
      s = vt(r, n);
    return (
      i.useEffect(() => {
        e(s);
      }, [s, e]),
      { sliderValue: r, setSliderValue: o }
    );
  },
  kt = 'Estimating Slippage';
export { kt as S, Pt as a, Et as b, Dt as u };
//# sourceMappingURL=labels-BEJSN8ld.js.map
