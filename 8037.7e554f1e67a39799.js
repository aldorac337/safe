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
    (e._sentryDebugIds[t] = '984e3015-4893-43f4-ab0c-49a288449fc8'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-984e3015-4893-43f4-ab0c-49a288449fc8'));
} catch (e) {}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8037],
  {
    16422: function (e, t, n) {
      'use strict';
      function r() {
        for (var e, t, n = 0, r = ''; n < arguments.length; )
          (e = arguments[n++]) &&
            (t = (function e(t) {
              var n,
                r,
                i = '';
              if ('string' == typeof t || 'number' == typeof t) i += t;
              else if ('object' == typeof t) {
                if (Array.isArray(t))
                  for (n = 0; n < t.length; n++)
                    t[n] && (r = e(t[n])) && (i && (i += ' '), (i += r));
                else for (n in t) t[n] && (i && (i += ' '), (i += n));
              }
              return i;
            })(e)) &&
            (r && (r += ' '), (r += t));
        return r;
      }
      n.r(t),
        n.d(t, {
          clsx: function () {
            return r;
          },
        }),
        (t.default = r);
    },
    3832: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          Component: function () {
            return C;
          },
          Fragment: function () {
            return E;
          },
          cloneElement: function () {
            return q;
          },
          createContext: function () {
            return z;
          },
          createElement: function () {
            return k;
          },
          createRef: function () {
            return I;
          },
          h: function () {
            return k;
          },
          hydrate: function () {
            return W;
          },
          isValidElement: function () {
            return a;
          },
          options: function () {
            return i;
          },
          render: function () {
            return O;
          },
          toChildArray: function () {
            return function e(t, n) {
              return (
                (n = n || []),
                null == t ||
                  'boolean' == typeof t ||
                  (y(t)
                    ? t.some(function (t) {
                        e(t, n);
                      })
                    : n.push(t)),
                n
              );
            };
          },
        });
      var r,
        i,
        s,
        a,
        o,
        c,
        l,
        u,
        d,
        h,
        p,
        f,
        g,
        m = {},
        _ = [],
        b = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
        y = Array.isArray;
      function w(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      }
      function v(e) {
        e && e.parentNode && e.parentNode.removeChild(e);
      }
      function k(e, t, n) {
        var i,
          s,
          a,
          o = {};
        for (a in t) 'key' == a ? (i = t[a]) : 'ref' == a ? (s = t[a]) : (o[a] = t[a]);
        if (
          (arguments.length > 2 && (o.children = arguments.length > 3 ? r.call(arguments, 2) : n),
          'function' == typeof e && null != e.defaultProps)
        )
          for (a in e.defaultProps) null == o[a] && (o[a] = e.defaultProps[a]);
        return x(e, o, i, s, null);
      }
      function x(e, t, n, r, a) {
        var o = {
          type: e,
          props: t,
          key: n,
          ref: r,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __c: null,
          constructor: void 0,
          __v: null == a ? ++s : a,
          __i: -1,
          __u: 0,
        };
        return null == a && null != i.vnode && i.vnode(o), o;
      }
      function I() {
        return { current: null };
      }
      function E(e) {
        return e.children;
      }
      function C(e, t) {
        (this.props = e), (this.context = t);
      }
      function S(e, t) {
        if (null == t) return e.__ ? S(e.__, e.__i + 1) : null;
        for (var n; t < e.__k.length; t++)
          if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
        return 'function' == typeof e.type ? S(e) : null;
      }
      function M(e) {
        ((!e.__d && (e.__d = !0) && o.push(e) && !A.__r++) || c != i.debounceRendering) &&
          ((c = i.debounceRendering) || l)(A);
      }
      function A() {
        for (var e, t, n, r, s, a, c = 1; o.length; )
          o.length > c && o.sort(u),
            (e = o.shift()),
            (c = o.length),
            e.__d &&
              ((t = void 0),
              (r = (n = e.__v).__e),
              (s = []),
              (a = []),
              e.__P &&
                (((t = w({}, n)).__v = n.__v + 1),
                i.vnode && i.vnode(t),
                R(
                  e.__P,
                  t,
                  n,
                  e.__n,
                  e.__P.namespaceURI,
                  32 & n.__u ? [r] : null,
                  s,
                  null == r ? S(n) : r,
                  !!(32 & n.__u),
                  a
                ),
                (t.__v = n.__v),
                (t.__.__k[t.__i] = t),
                T(s, t, a),
                t.__e != r &&
                  (function e(t) {
                    var n, r;
                    if (null != (t = t.__) && null != t.__c) {
                      for (t.__e = t.__c.base = null, n = 0; n < t.__k.length; n++)
                        if (null != (r = t.__k[n]) && null != r.__e) {
                          t.__e = t.__c.base = r.__e;
                          break;
                        }
                      return e(t);
                    }
                  })(t)));
        A.__r = 0;
      }
      function P(e, t, n, r, s, a, o, c, l, u, d) {
        var h,
          p,
          f,
          g,
          b,
          w,
          k = (r && r.__k) || _,
          I = t.length;
        for (
          l = (function (e, t, n, r, s) {
            var a,
              o,
              c,
              l,
              u,
              d = n.length,
              h = d,
              p = 0;
            for (e.__k = Array(s), a = 0; a < s; a++)
              null != (o = t[a]) && 'boolean' != typeof o && 'function' != typeof o
                ? ((l = a + p),
                  ((o = e.__k[a] =
                    'string' == typeof o ||
                    'number' == typeof o ||
                    'bigint' == typeof o ||
                    o.constructor == String
                      ? x(null, o, null, null, null)
                      : y(o)
                        ? x(E, { children: o }, null, null, null)
                        : null == o.constructor && o.__b > 0
                          ? x(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v)
                          : o).__ = e),
                  (o.__b = e.__b + 1),
                  (c = null),
                  -1 !=
                    (u = o.__i =
                      (function (e, t, n, r) {
                        var i,
                          s,
                          a = e.key,
                          o = e.type,
                          c = t[n];
                        if (
                          (null === c && null == e.key) ||
                          (c && a == c.key && o == c.type && 0 == (2 & c.__u))
                        )
                          return n;
                        if (r > (null != c && 0 == (2 & c.__u) ? 1 : 0))
                          for (i = n - 1, s = n + 1; i >= 0 || s < t.length; ) {
                            if (i >= 0) {
                              if ((c = t[i]) && 0 == (2 & c.__u) && a == c.key && o == c.type)
                                return i;
                              i--;
                            }
                            if (s < t.length) {
                              if ((c = t[s]) && 0 == (2 & c.__u) && a == c.key && o == c.type)
                                return s;
                              s++;
                            }
                          }
                        return -1;
                      })(o, n, l, h)) && (h--, (c = n[u]) && (c.__u |= 2)),
                  null == c || null == c.__v
                    ? (-1 == u && (s > d ? p-- : s < d && p++),
                      'function' != typeof o.type && (o.__u |= 4))
                    : u != l &&
                      (u == l - 1 ? p-- : u == l + 1 ? p++ : (u > l ? p-- : p++, (o.__u |= 4))))
                : (e.__k[a] = null);
            if (h)
              for (a = 0; a < d; a++)
                null != (c = n[a]) &&
                  0 == (2 & c.__u) &&
                  (c.__e == r && (r = S(c)),
                  (function e(t, n, r) {
                    var s, a;
                    if (
                      (i.unmount && i.unmount(t),
                      (s = t.ref) && ((s.current && s.current != t.__e) || U(s, null, n)),
                      null != (s = t.__c))
                    ) {
                      if (s.componentWillUnmount)
                        try {
                          s.componentWillUnmount();
                        } catch (e) {
                          i.__e(e, n);
                        }
                      s.base = s.__P = null;
                    }
                    if ((s = t.__k))
                      for (a = 0; a < s.length; a++)
                        s[a] && e(s[a], n, r || 'function' != typeof t.type);
                    r || v(t.__e), (t.__c = t.__ = t.__e = void 0);
                  })(c, c));
            return r;
          })(n, t, k, l, I),
            h = 0;
          h < I;
          h++
        )
          null != (f = n.__k[h]) &&
            ((p = -1 == f.__i ? m : k[f.__i] || m),
            (f.__i = h),
            (w = R(e, f, p, s, a, o, c, l, u, d)),
            (g = f.__e),
            f.ref && p.ref != f.ref && (p.ref && U(p.ref, null, f), d.push(f.ref, f.__c || g, f)),
            null == b && null != g && (b = g),
            4 & f.__u || p.__k === f.__k
              ? (l = (function e(t, n, r) {
                  var i, s;
                  if ('function' == typeof t.type) {
                    for (i = t.__k, s = 0; i && s < i.length; s++)
                      i[s] && ((i[s].__ = t), (n = e(i[s], n, r)));
                    return n;
                  }
                  t.__e != n &&
                    (n && t.type && !r.contains(n) && (n = S(t)),
                    r.insertBefore(t.__e, n || null),
                    (n = t.__e));
                  do n = n && n.nextSibling;
                  while (null != n && 8 == n.nodeType);
                  return n;
                })(f, l, e))
              : 'function' == typeof f.type && void 0 !== w
                ? (l = w)
                : g && (l = g.nextSibling),
            (f.__u &= -7));
        return (n.__e = b), l;
      }
      function L(e, t, n) {
        '-' == t[0]
          ? e.setProperty(t, null == n ? '' : n)
          : (e[t] = null == n ? '' : 'number' != typeof n || b.test(t) ? n : n + 'px');
      }
      function D(e, t, n, r, i) {
        var s;
        e: if ('style' == t) {
          if ('string' == typeof n) e.style.cssText = n;
          else {
            if (('string' == typeof r && (e.style.cssText = r = ''), r))
              for (t in r) (n && t in n) || L(e.style, t, '');
            if (n) for (t in n) (r && n[t] == r[t]) || L(e.style, t, n[t]);
          }
        } else if ('o' == t[0] && 'n' == t[1])
          (s = t != (t = t.replace(d, '$1'))),
            (t =
              t.toLowerCase() in e || 'onFocusOut' == t || 'onFocusIn' == t
                ? t.toLowerCase().slice(2)
                : t.slice(2)),
            e.l || (e.l = {}),
            (e.l[t + s] = n),
            n
              ? r
                ? (n.u = r.u)
                : ((n.u = h), e.addEventListener(t, s ? f : p, s))
              : e.removeEventListener(t, s ? f : p, s);
        else {
          if ('http://www.w3.org/2000/svg' == i)
            t = t.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
          else if (
            'width' != t &&
            'height' != t &&
            'href' != t &&
            'list' != t &&
            'form' != t &&
            'tabIndex' != t &&
            'download' != t &&
            'rowSpan' != t &&
            'colSpan' != t &&
            'role' != t &&
            'popover' != t &&
            t in e
          )
            try {
              e[t] = null == n ? '' : n;
              break e;
            } catch (e) {}
          'function' == typeof n ||
            (null == n || (!1 === n && '-' != t[4])
              ? e.removeAttribute(t)
              : e.setAttribute(t, 'popover' == t && 1 == n ? '' : n));
        }
      }
      function N(e) {
        return function (t) {
          if (this.l) {
            var n = this.l[t.type + e];
            if (null == t.t) t.t = h++;
            else if (t.t < n.u) return;
            return n(i.event ? i.event(t) : t);
          }
        };
      }
      function R(e, t, n, s, a, o, c, l, u, d) {
        var h,
          p,
          f,
          g,
          _,
          b,
          k,
          x,
          I,
          M,
          A,
          L,
          N,
          R,
          T,
          U,
          O,
          W = t.type;
        if (null != t.constructor) return null;
        128 & n.__u && ((u = !!(32 & n.__u)), (o = [(l = t.__e = n.__e)])), (h = i.__b) && h(t);
        e: if ('function' == typeof W)
          try {
            if (
              ((x = t.props),
              (I = 'prototype' in W && W.prototype.render),
              (M = (h = W.contextType) && s[h.__c]),
              (A = h ? (M ? M.props.value : h.__) : s),
              n.__c
                ? (k = (p = t.__c = n.__c).__ = p.__E)
                : (I
                    ? (t.__c = p = new W(x, A))
                    : ((t.__c = p = new C(x, A)), (p.constructor = W), (p.render = j)),
                  M && M.sub(p),
                  (p.props = x),
                  p.state || (p.state = {}),
                  (p.context = A),
                  (p.__n = s),
                  (f = p.__d = !0),
                  (p.__h = []),
                  (p._sb = [])),
              I && null == p.__s && (p.__s = p.state),
              I &&
                null != W.getDerivedStateFromProps &&
                (p.__s == p.state && (p.__s = w({}, p.__s)),
                w(p.__s, W.getDerivedStateFromProps(x, p.__s))),
              (g = p.props),
              (_ = p.state),
              (p.__v = t),
              f)
            )
              I &&
                null == W.getDerivedStateFromProps &&
                null != p.componentWillMount &&
                p.componentWillMount(),
                I && null != p.componentDidMount && p.__h.push(p.componentDidMount);
            else {
              if (
                (I &&
                  null == W.getDerivedStateFromProps &&
                  x !== g &&
                  null != p.componentWillReceiveProps &&
                  p.componentWillReceiveProps(x, A),
                (!p.__e &&
                  null != p.shouldComponentUpdate &&
                  !1 === p.shouldComponentUpdate(x, p.__s, A)) ||
                  t.__v == n.__v)
              ) {
                for (
                  t.__v != n.__v && ((p.props = x), (p.state = p.__s), (p.__d = !1)),
                    t.__e = n.__e,
                    t.__k = n.__k,
                    t.__k.some(function (e) {
                      e && (e.__ = t);
                    }),
                    L = 0;
                  L < p._sb.length;
                  L++
                )
                  p.__h.push(p._sb[L]);
                (p._sb = []), p.__h.length && c.push(p);
                break e;
              }
              null != p.componentWillUpdate && p.componentWillUpdate(x, p.__s, A),
                I &&
                  null != p.componentDidUpdate &&
                  p.__h.push(function () {
                    p.componentDidUpdate(g, _, b);
                  });
            }
            if (
              ((p.context = A), (p.props = x), (p.__P = e), (p.__e = !1), (N = i.__r), (R = 0), I)
            ) {
              for (
                p.state = p.__s,
                  p.__d = !1,
                  N && N(t),
                  h = p.render(p.props, p.state, p.context),
                  T = 0;
                T < p._sb.length;
                T++
              )
                p.__h.push(p._sb[T]);
              p._sb = [];
            } else
              do
                (p.__d = !1),
                  N && N(t),
                  (h = p.render(p.props, p.state, p.context)),
                  (p.state = p.__s);
              while (p.__d && ++R < 25);
            (p.state = p.__s),
              null != p.getChildContext && (s = w(w({}, s), p.getChildContext())),
              I && !f && null != p.getSnapshotBeforeUpdate && (b = p.getSnapshotBeforeUpdate(g, _)),
              (U = h),
              null != h &&
                h.type === E &&
                null == h.key &&
                (U = (function e(t) {
                  return 'object' != typeof t || null == t || (t.__b && t.__b > 0)
                    ? t
                    : y(t)
                      ? t.map(e)
                      : w({}, t);
                })(h.props.children)),
              (l = P(e, y(U) ? U : [U], t, n, s, a, o, c, l, u, d)),
              (p.base = t.__e),
              (t.__u &= -161),
              p.__h.length && c.push(p),
              k && (p.__E = p.__ = null);
          } catch (e) {
            if (((t.__v = null), u || null != o)) {
              if (e.then) {
                for (t.__u |= u ? 160 : 128; l && 8 == l.nodeType && l.nextSibling; )
                  l = l.nextSibling;
                (o[o.indexOf(l)] = null), (t.__e = l);
              } else for (O = o.length; O--; ) v(o[O]);
            } else (t.__e = n.__e), (t.__k = n.__k);
            i.__e(e, t, n);
          }
        else
          null == o && t.__v == n.__v
            ? ((t.__k = n.__k), (t.__e = n.__e))
            : (l = t.__e =
                (function (e, t, n, s, a, o, c, l, u) {
                  var d,
                    h,
                    p,
                    f,
                    g,
                    _,
                    b,
                    w = n.props,
                    k = t.props,
                    x = t.type;
                  if (
                    ('svg' == x
                      ? (a = 'http://www.w3.org/2000/svg')
                      : 'math' == x
                        ? (a = 'http://www.w3.org/1998/Math/MathML')
                        : a || (a = 'http://www.w3.org/1999/xhtml'),
                    null != o)
                  ) {
                    for (d = 0; d < o.length; d++)
                      if (
                        (g = o[d]) &&
                        'setAttribute' in g == !!x &&
                        (x ? g.localName == x : 3 == g.nodeType)
                      ) {
                        (e = g), (o[d] = null);
                        break;
                      }
                  }
                  if (null == e) {
                    if (null == x) return document.createTextNode(k);
                    (e = document.createElementNS(a, x, k.is && k)),
                      l && (i.__m && i.__m(t, o), (l = !1)),
                      (o = null);
                  }
                  if (null == x) w === k || (l && e.data == k) || (e.data = k);
                  else {
                    if (((o = o && r.call(e.childNodes)), (w = n.props || m), !l && null != o))
                      for (w = {}, d = 0; d < e.attributes.length; d++)
                        w[(g = e.attributes[d]).name] = g.value;
                    for (d in w)
                      if (((g = w[d]), 'children' == d));
                      else if ('dangerouslySetInnerHTML' == d) p = g;
                      else if (!(d in k)) {
                        if (
                          ('value' == d && 'defaultValue' in k) ||
                          ('checked' == d && 'defaultChecked' in k)
                        )
                          continue;
                        D(e, d, null, g, a);
                      }
                    for (d in k)
                      (g = k[d]),
                        'children' == d
                          ? (f = g)
                          : 'dangerouslySetInnerHTML' == d
                            ? (h = g)
                            : 'value' == d
                              ? (_ = g)
                              : 'checked' == d
                                ? (b = g)
                                : (l && 'function' != typeof g) ||
                                  w[d] === g ||
                                  D(e, d, g, w[d], a);
                    if (h)
                      l ||
                        (p && (h.__html == p.__html || h.__html == e.innerHTML)) ||
                        (e.innerHTML = h.__html),
                        (t.__k = []);
                    else if (
                      (p && (e.innerHTML = ''),
                      P(
                        'template' == t.type ? e.content : e,
                        y(f) ? f : [f],
                        t,
                        n,
                        s,
                        'foreignObject' == x ? 'http://www.w3.org/1999/xhtml' : a,
                        o,
                        c,
                        o ? o[0] : n.__k && S(n, 0),
                        l,
                        u
                      ),
                      null != o)
                    )
                      for (d = o.length; d--; ) v(o[d]);
                    l ||
                      ((d = 'value'),
                      'progress' == x && null == _
                        ? e.removeAttribute('value')
                        : null == _ ||
                          (_ === e[d] && ('progress' != x || _) && ('option' != x || _ == w[d])) ||
                          D(e, d, _, w[d], a),
                      (d = 'checked'),
                      null != b && b != e[d] && D(e, d, b, w[d], a));
                  }
                  return e;
                })(n.__e, t, n, s, a, o, c, u, d));
        return (h = i.diffed) && h(t), 128 & t.__u ? void 0 : l;
      }
      function T(e, t, n) {
        for (var r = 0; r < n.length; r++) U(n[r], n[++r], n[++r]);
        i.__c && i.__c(t, e),
          e.some(function (t) {
            try {
              (e = t.__h),
                (t.__h = []),
                e.some(function (e) {
                  e.call(t);
                });
            } catch (e) {
              i.__e(e, t.__v);
            }
          });
      }
      function U(e, t, n) {
        try {
          if ('function' == typeof e) {
            var r = 'function' == typeof e.__u;
            r && e.__u(), (r && null == t) || (e.__u = e(t));
          } else e.current = t;
        } catch (e) {
          i.__e(e, n);
        }
      }
      function j(e, t, n) {
        return this.constructor(e, n);
      }
      function O(e, t, n) {
        var s, a, o, c;
        t == document && (t = document.documentElement),
          i.__ && i.__(e, t),
          (a = (s = 'function' == typeof n) ? null : (n && n.__k) || t.__k),
          (o = []),
          (c = []),
          R(
            t,
            (e = ((!s && n) || t).__k = k(E, null, [e])),
            a || m,
            m,
            t.namespaceURI,
            !s && n ? [n] : a ? null : t.firstChild ? r.call(t.childNodes) : null,
            o,
            !s && n ? n : a ? a.__e : t.firstChild,
            s,
            c
          ),
          T(o, e, c);
      }
      function W(e, t) {
        O(e, t, W);
      }
      function q(e, t, n) {
        var i,
          s,
          a,
          o,
          c = w({}, e.props);
        for (a in (e.type && e.type.defaultProps && (o = e.type.defaultProps), t))
          'key' == a
            ? (i = t[a])
            : 'ref' == a
              ? (s = t[a])
              : (c[a] = null == t[a] && null != o ? o[a] : t[a]);
        return (
          arguments.length > 2 && (c.children = arguments.length > 3 ? r.call(arguments, 2) : n),
          x(e.type, c, i || e.key, s || e.ref, null)
        );
      }
      function z(e) {
        function t(e) {
          var n, r;
          return (
            this.getChildContext ||
              ((n = new Set()),
              ((r = {})[t.__c] = this),
              (this.getChildContext = function () {
                return r;
              }),
              (this.componentWillUnmount = function () {
                n = null;
              }),
              (this.shouldComponentUpdate = function (e) {
                this.props.value != e.value &&
                  n.forEach(function (e) {
                    (e.__e = !0), M(e);
                  });
              }),
              (this.sub = function (e) {
                n.add(e);
                var t = e.componentWillUnmount;
                e.componentWillUnmount = function () {
                  n && n.delete(e), t && t.call(e);
                };
              })),
            e.children
          );
        }
        return (
          (t.__c = '__cC' + g++),
          (t.__ = e),
          (t.Provider =
            t.__l =
            (t.Consumer = function (e, t) {
              return e.children(t);
            }).contextType =
              t),
          t
        );
      }
      (r = _.slice),
        (i = {
          __e: function (e, t, n, r) {
            for (var i, s, a; (t = t.__); )
              if ((i = t.__c) && !i.__)
                try {
                  if (
                    ((s = i.constructor) &&
                      null != s.getDerivedStateFromError &&
                      (i.setState(s.getDerivedStateFromError(e)), (a = i.__d)),
                    null != i.componentDidCatch && (i.componentDidCatch(e, r || {}), (a = i.__d)),
                    a)
                  )
                    return (i.__E = i);
                } catch (t) {
                  e = t;
                }
            throw e;
          },
        }),
        (s = 0),
        (a = function (e) {
          return null != e && null == e.constructor;
        }),
        (C.prototype.setState = function (e, t) {
          var n;
          (n =
            null != this.__s && this.__s != this.state ? this.__s : (this.__s = w({}, this.state))),
            'function' == typeof e && (e = e(w({}, n), this.props)),
            e && w(n, e),
            null != e && this.__v && (t && this._sb.push(t), M(this));
        }),
        (C.prototype.forceUpdate = function (e) {
          this.__v && ((this.__e = !0), e && this.__h.push(e), M(this));
        }),
        (C.prototype.render = E),
        (o = []),
        (l =
          'function' == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (u = function (e, t) {
          return e.__v.__b - t.__v.__b;
        }),
        (A.__r = 0),
        (d = /(PointerCapture)$|Capture$/i),
        (h = 0),
        (p = N(!1)),
        (f = N(!0)),
        (g = 0);
    },
    56251: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          useCallback: function () {
            return E;
          },
          useContext: function () {
            return C;
          },
          useDebugValue: function () {
            return S;
          },
          useEffect: function () {
            return w;
          },
          useErrorBoundary: function () {
            return M;
          },
          useId: function () {
            return A;
          },
          useImperativeHandle: function () {
            return x;
          },
          useLayoutEffect: function () {
            return v;
          },
          useMemo: function () {
            return I;
          },
          useReducer: function () {
            return y;
          },
          useRef: function () {
            return k;
          },
          useState: function () {
            return b;
          },
        });
      var r,
        i,
        s,
        a,
        o = n(3832),
        c = 0,
        l = [],
        u = o.options,
        d = u.__b,
        h = u.__r,
        p = u.diffed,
        f = u.__c,
        g = u.unmount,
        m = u.__;
      function _(e, t) {
        u.__h && u.__h(i, e, c || t), (c = 0);
        var n = i.__H || (i.__H = { __: [], __h: [] });
        return e >= n.__.length && n.__.push({}), n.__[e];
      }
      function b(e) {
        return (c = 1), y(T, e);
      }
      function y(e, t, n) {
        var s = _(r++, 2);
        if (
          ((s.t = e),
          !s.__c &&
            ((s.__ = [
              n ? n(t) : T(void 0, t),
              function (e) {
                var t = s.__N ? s.__N[0] : s.__[0],
                  n = s.t(t, e);
                t !== n && ((s.__N = [n, s.__[1]]), s.__c.setState({}));
              },
            ]),
            (s.__c = i),
            !i.__f))
        ) {
          var a = function (e, t, n) {
            if (!s.__c.__H) return !0;
            var r = s.__c.__H.__.filter(function (e) {
              return !!e.__c;
            });
            if (
              r.every(function (e) {
                return !e.__N;
              })
            )
              return !o || o.call(this, e, t, n);
            var i = s.__c.props !== e;
            return (
              r.forEach(function (e) {
                if (e.__N) {
                  var t = e.__[0];
                  (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (i = !0);
                }
              }),
              (o && o.call(this, e, t, n)) || i
            );
          };
          i.__f = !0;
          var o = i.shouldComponentUpdate,
            c = i.componentWillUpdate;
          (i.componentWillUpdate = function (e, t, n) {
            if (this.__e) {
              var r = o;
              (o = void 0), a(e, t, n), (o = r);
            }
            c && c.call(this, e, t, n);
          }),
            (i.shouldComponentUpdate = a);
        }
        return s.__N || s.__;
      }
      function w(e, t) {
        var n = _(r++, 3);
        !u.__s && R(n.__H, t) && ((n.__ = e), (n.u = t), i.__H.__h.push(n));
      }
      function v(e, t) {
        var n = _(r++, 4);
        !u.__s && R(n.__H, t) && ((n.__ = e), (n.u = t), i.__h.push(n));
      }
      function k(e) {
        return (
          (c = 5),
          I(function () {
            return { current: e };
          }, [])
        );
      }
      function x(e, t, n) {
        (c = 6),
          v(
            function () {
              if ('function' == typeof e) {
                var n = e(t());
                return function () {
                  e(null), n && 'function' == typeof n && n();
                };
              }
              if (e)
                return (
                  (e.current = t()),
                  function () {
                    return (e.current = null);
                  }
                );
            },
            null == n ? n : n.concat(e)
          );
      }
      function I(e, t) {
        var n = _(r++, 7);
        return R(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__;
      }
      function E(e, t) {
        return (
          (c = 8),
          I(function () {
            return e;
          }, t)
        );
      }
      function C(e) {
        var t = i.context[e.__c],
          n = _(r++, 9);
        return (n.c = e), t ? (null == n.__ && ((n.__ = !0), t.sub(i)), t.props.value) : e.__;
      }
      function S(e, t) {
        u.useDebugValue && u.useDebugValue(t ? t(e) : e);
      }
      function M(e) {
        var t = _(r++, 10),
          n = b();
        return (
          (t.__ = e),
          i.componentDidCatch ||
            (i.componentDidCatch = function (e, r) {
              t.__ && t.__(e, r), n[1](e);
            }),
          [
            n[0],
            function () {
              n[1](void 0);
            },
          ]
        );
      }
      function A() {
        var e = _(r++, 11);
        if (!e.__) {
          for (var t = i.__v; null !== t && !t.__m && null !== t.__; ) t = t.__;
          var n = t.__m || (t.__m = [0, 0]);
          e.__ = 'P' + n[0] + '-' + n[1]++;
        }
        return e.__;
      }
      function P() {
        for (var e; (e = l.shift()); )
          if (e.__P && e.__H)
            try {
              e.__H.__h.forEach(D), e.__H.__h.forEach(N), (e.__H.__h = []);
            } catch (t) {
              (e.__H.__h = []), u.__e(t, e.__v);
            }
      }
      (u.__b = function (e) {
        (i = null), d && d(e);
      }),
        (u.__ = function (e, t) {
          e && t.__k && t.__k.__m && (e.__m = t.__k.__m), m && m(e, t);
        }),
        (u.__r = function (e) {
          h && h(e), (r = 0);
          var t = (i = e.__c).__H;
          t &&
            (s === i
              ? ((t.__h = []),
                (i.__h = []),
                t.__.forEach(function (e) {
                  e.__N && (e.__ = e.__N), (e.u = e.__N = void 0);
                }))
              : (t.__h.forEach(D), t.__h.forEach(N), (t.__h = []), (r = 0))),
            (s = i);
        }),
        (u.diffed = function (e) {
          p && p(e);
          var t = e.__c;
          t &&
            t.__H &&
            (t.__H.__h.length &&
              ((1 !== l.push(t) && a === u.requestAnimationFrame) ||
                (
                  (a = u.requestAnimationFrame) ||
                  function (e) {
                    var t,
                      n = function () {
                        clearTimeout(r), L && cancelAnimationFrame(t), setTimeout(e);
                      },
                      r = setTimeout(n, 100);
                    L && (t = requestAnimationFrame(n));
                  }
                )(P)),
            t.__H.__.forEach(function (e) {
              e.u && (e.__H = e.u), (e.u = void 0);
            })),
            (s = i = null);
        }),
        (u.__c = function (e, t) {
          t.some(function (e) {
            try {
              e.__h.forEach(D),
                (e.__h = e.__h.filter(function (e) {
                  return !e.__ || N(e);
                }));
            } catch (n) {
              t.some(function (e) {
                e.__h && (e.__h = []);
              }),
                (t = []),
                u.__e(n, e.__v);
            }
          }),
            f && f(e, t);
        }),
        (u.unmount = function (e) {
          g && g(e);
          var t,
            n = e.__c;
          n &&
            n.__H &&
            (n.__H.__.forEach(function (e) {
              try {
                D(e);
              } catch (e) {
                t = e;
              }
            }),
            (n.__H = void 0),
            t && u.__e(t, n.__v));
        });
      var L = 'function' == typeof requestAnimationFrame;
      function D(e) {
        var t = i,
          n = e.__c;
        'function' == typeof n && ((e.__c = void 0), n()), (i = t);
      }
      function N(e) {
        var t = i;
        (e.__c = e.__()), (i = t);
      }
      function R(e, t) {
        return (
          !e ||
          e.length !== t.length ||
          t.some(function (t, n) {
            return t !== e[n];
          })
        );
      }
      function T(e, t) {
        return 'function' == typeof t ? t(e) : t;
      }
    },
    85848: function (e, t, n) {
      var r = n(87150).Buffer;
      let i = n(77435);
      function s(e) {
        if (e.startsWith('int[')) return 'int256' + e.slice(3);
        if ('int' === e) return 'int256';
        if (e.startsWith('uint[')) return 'uint256' + e.slice(4);
        if ('uint' === e) return 'uint256';
        if (e.startsWith('fixed[')) return 'fixed128x128' + e.slice(5);
        if ('fixed' === e) return 'fixed128x128';
        if (e.startsWith('ufixed[')) return 'ufixed128x128' + e.slice(6);
        else if ('ufixed' === e) return 'ufixed128x128';
        return e;
      }
      function a(e) {
        return Number.parseInt(/^\D+(\d+)$/.exec(e)[1], 10);
      }
      function o(e) {
        var t = /^\D+(\d+)x(\d+)$/.exec(e);
        return [Number.parseInt(t[1], 10), Number.parseInt(t[2], 10)];
      }
      function c(e) {
        var t = e.match(/(.*)\[(.*?)\]$/);
        return t ? ('' === t[2] ? 'dynamic' : Number.parseInt(t[2], 10)) : null;
      }
      function l(e) {
        var t = typeof e;
        if ('string' === t || 'number' === t) return BigInt(e);
        if ('bigint' === t) return e;
        throw Error('Argument is not a number');
      }
      function u(e, t) {
        if ('address' === e) return u('uint160', l(t));
        if ('bool' === e) return u('uint8', t ? 1 : 0);
        if ('string' === e) return u('bytes', new r(t, 'utf8'));
        if ((p = e).lastIndexOf(']') === p.length - 1) {
          if (void 0 === t.length) throw Error('Not an array?');
          if ('dynamic' !== (n = c(e)) && 0 !== n && t.length > n)
            throw Error('Elements exceed array size: ' + n);
          for (h in ((d = []),
          (e = e.slice(0, e.lastIndexOf('['))),
          'string' == typeof t && (t = JSON.parse(t)),
          t))
            d.push(u(e, t[h]));
          if ('dynamic' === n) {
            var n,
              s,
              d,
              h,
              p,
              f = u('uint256', t.length);
            d.unshift(f);
          }
          return r.concat(d);
        }
        if ('bytes' === e)
          return (
            (t = new r(t)),
            (d = r.concat([u('uint256', t.length), t])),
            t.length % 32 != 0 && (d = r.concat([d, i.zeros(32 - (t.length % 32))])),
            d
          );
        if (e.startsWith('bytes')) {
          if ((n = a(e)) < 1 || n > 32) throw Error('Invalid bytes<N> width: ' + n);
          return i.setLengthRight(t, 32);
        } else if (e.startsWith('uint')) {
          if ((n = a(e)) % 8 || n < 8 || n > 256) throw Error('Invalid uint<N> width: ' + n);
          s = l(t);
          let r = i.bitLengthFromBigInt(s);
          if (r > n) throw Error('Supplied uint exceeds width: ' + n + ' vs ' + r);
          if (s < 0) throw Error('Supplied uint is negative');
          return i.bufferBEFromBigInt(s, 32);
        } else if (e.startsWith('int')) {
          if ((n = a(e)) % 8 || n < 8 || n > 256) throw Error('Invalid int<N> width: ' + n);
          s = l(t);
          let r = i.bitLengthFromBigInt(s);
          if (r > n) throw Error('Supplied int exceeds width: ' + n + ' vs ' + r);
          let o = i.twosFromBigInt(s, 256);
          return i.bufferBEFromBigInt(o, 32);
        } else if (e.startsWith('ufixed')) {
          if (((n = o(e)), (s = l(t)) < 0)) throw Error('Supplied ufixed is negative');
          return u('uint256', s * BigInt(2) ** BigInt(n[1]));
        } else if (e.startsWith('fixed'))
          return (n = o(e)), u('int256', l(t) * BigInt(2) ** BigInt(n[1]));
        throw Error('Unsupported or invalid type: ' + e);
      }
      function d(e, t) {
        if (e.length !== t.length) throw Error('Number of types are not matching the values');
        for (var n, o, c = [], u = 0; u < e.length; u++) {
          var d = s(e[u]),
            h = t[u];
          if ('bytes' === d) c.push(h);
          else if ('string' === d) c.push(new r(h, 'utf8'));
          else if ('bool' === d) c.push(new r(h ? '01' : '00', 'hex'));
          else if ('address' === d) c.push(i.setLength(h, 20));
          else if (d.startsWith('bytes')) {
            if ((n = a(d)) < 1 || n > 32) throw Error('Invalid bytes<N> width: ' + n);
            c.push(i.setLengthRight(h, n));
          } else if (d.startsWith('uint')) {
            if ((n = a(d)) % 8 || n < 8 || n > 256) throw Error('Invalid uint<N> width: ' + n);
            o = l(h);
            let e = i.bitLengthFromBigInt(o);
            if (e > n) throw Error('Supplied uint exceeds width: ' + n + ' vs ' + e);
            c.push(i.bufferBEFromBigInt(o, n / 8));
          } else if (d.startsWith('int')) {
            if ((n = a(d)) % 8 || n < 8 || n > 256) throw Error('Invalid int<N> width: ' + n);
            o = l(h);
            let e = i.bitLengthFromBigInt(o);
            if (e > n) throw Error('Supplied int exceeds width: ' + n + ' vs ' + e);
            let t = i.twosFromBigInt(o, n);
            c.push(i.bufferBEFromBigInt(t, n / 8));
          } else throw Error('Unsupported or invalid type: ' + d);
        }
        return r.concat(c);
      }
      e.exports = {
        rawEncode: function (e, t) {
          var n = [],
            i = [],
            a = 32 * e.length;
          for (var o in e) {
            var l = s(e[o]),
              d = u(l, t[o]);
            'string' === l || 'bytes' === l || 'dynamic' === c(l)
              ? (n.push(u('uint256', a)), i.push(d), (a += d.length))
              : n.push(d);
          }
          return r.concat(n.concat(i));
        },
        solidityPack: d,
        soliditySHA3: function (e, t) {
          return i.keccak(d(e, t));
        },
      };
    },
    46006: function (e, t, n) {
      var r = n(87150).Buffer;
      let i = n(77435),
        s = n(85848),
        a = {
          type: 'object',
          properties: {
            types: {
              type: 'object',
              additionalProperties: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: { name: { type: 'string' }, type: { type: 'string' } },
                  required: ['name', 'type'],
                },
              },
            },
            primaryType: { type: 'string' },
            domain: { type: 'object' },
            message: { type: 'object' },
          },
          required: ['types', 'primaryType', 'domain', 'message'],
        },
        o = {
          encodeData(e, t, n, a = !0) {
            let o = ['bytes32'],
              c = [this.hashType(e, n)];
            if (a) {
              let l = (e, t, o) => {
                if (void 0 !== n[t])
                  return [
                    'bytes32',
                    null == o
                      ? '0x0000000000000000000000000000000000000000000000000000000000000000'
                      : i.keccak(this.encodeData(t, o, n, a)),
                  ];
                if (void 0 === o) throw Error(`missing value for field ${e} of type ${t}`);
                if ('bytes' === t) return ['bytes32', i.keccak(o)];
                if ('string' === t)
                  return 'string' == typeof o && (o = r.from(o, 'utf8')), ['bytes32', i.keccak(o)];
                if (t.lastIndexOf(']') === t.length - 1) {
                  let n = t.slice(0, t.lastIndexOf('[')),
                    r = o.map((t) => l(e, n, t));
                  return [
                    'bytes32',
                    i.keccak(
                      s.rawEncode(
                        r.map(([e]) => e),
                        r.map(([, e]) => e)
                      )
                    ),
                  ];
                }
                return [t, o];
              };
              for (let r of n[e]) {
                let [e, n] = l(r.name, r.type, t[r.name]);
                o.push(e), c.push(n);
              }
            } else
              for (let s of n[e]) {
                let e = t[s.name];
                if (void 0 !== e) {
                  if ('bytes' === s.type) o.push('bytes32'), (e = i.keccak(e)), c.push(e);
                  else if ('string' === s.type)
                    o.push('bytes32'),
                      'string' == typeof e && (e = r.from(e, 'utf8')),
                      (e = i.keccak(e)),
                      c.push(e);
                  else if (void 0 !== n[s.type])
                    o.push('bytes32'), (e = i.keccak(this.encodeData(s.type, e, n, a))), c.push(e);
                  else if (s.type.lastIndexOf(']') === s.type.length - 1)
                    throw Error('Arrays currently unimplemented in encodeData');
                  else o.push(s.type), c.push(e);
                }
              }
            return s.rawEncode(o, c);
          },
          encodeType(e, t) {
            let n = '',
              r = this.findTypeDependencies(e, t).filter((t) => t !== e);
            for (let i of (r = [e].concat(r.sort()))) {
              if (!t[i]) throw Error('No type definition specified: ' + i);
              n += i + '(' + t[i].map(({ name: e, type: t }) => t + ' ' + e).join(',') + ')';
            }
            return n;
          },
          findTypeDependencies(e, t, n = []) {
            if (((e = e.match(/^\w*/)[0]), n.includes(e) || void 0 === t[e])) return n;
            for (let r of (n.push(e), t[e]))
              for (let e of this.findTypeDependencies(r.type, t, n)) n.includes(e) || n.push(e);
            return n;
          },
          hashStruct(e, t, n, r = !0) {
            return i.keccak(this.encodeData(e, t, n, r));
          },
          hashType(e, t) {
            return i.keccak(this.encodeType(e, t));
          },
          sanitizeData(e) {
            let t = {};
            for (let n in a.properties) e[n] && (t[n] = e[n]);
            return t.types && (t.types = Object.assign({ EIP712Domain: [] }, t.types)), t;
          },
          hash(e, t = !0) {
            let n = this.sanitizeData(e),
              s = [r.from('1901', 'hex')];
            return (
              s.push(this.hashStruct('EIP712Domain', n.domain, n.types, t)),
              'EIP712Domain' !== n.primaryType &&
                s.push(this.hashStruct(n.primaryType, n.message, n.types, t)),
              i.keccak(r.concat(s))
            );
          },
        };
      e.exports = {
        TYPED_MESSAGE_SCHEMA: a,
        TypedDataUtils: o,
        hashForSignTypedDataLegacy: function (e) {
          return (function (e) {
            let t = Error('Expect argument to be non-empty array');
            if ('object' != typeof e || !e.length) throw t;
            let n = e.map(function (e) {
                return 'bytes' === e.type ? i.toBuffer(e.value) : e.value;
              }),
              r = e.map(function (e) {
                return e.type;
              }),
              a = e.map(function (e) {
                if (!e.name) throw t;
                return e.type + ' ' + e.name;
              });
            return s.soliditySHA3(
              ['bytes32', 'bytes32'],
              [s.soliditySHA3(Array(e.length).fill('string'), a), s.soliditySHA3(r, n)]
            );
          })(e.data);
        },
        hashForSignTypedData_v3: function (e) {
          return o.hash(e.data, !1);
        },
        hashForSignTypedData_v4: function (e) {
          return o.hash(e.data);
        },
      };
    },
    77435: function (e, t, n) {
      var r = n(87150).Buffer;
      let { keccak_256: i } = n(1350);
      function s(e) {
        return r.allocUnsafe(e).fill(0);
      }
      function a(e, t) {
        let n = e.toString(16);
        n.length % 2 != 0 && (n = '0' + n);
        let i = n.match(/.{1,2}/g).map((e) => parseInt(e, 16));
        for (; i.length < t; ) i.unshift(0);
        return r.from(i);
      }
      function o(e, t, n) {
        let r = s(t);
        return ((e = c(e)), n)
          ? e.length < t
            ? (e.copy(r), r)
            : e.slice(0, t)
          : e.length < t
            ? (e.copy(r, t - e.length), r)
            : e.slice(-t);
      }
      function c(e) {
        if (!r.isBuffer(e)) {
          if (Array.isArray(e)) e = r.from(e);
          else if ('string' == typeof e) {
            var t;
            e = l(e) ? r.from((t = u(e)).length % 2 ? '0' + t : t, 'hex') : r.from(e);
          } else if ('number' == typeof e) e = intToBuffer(e);
          else if (null == e) e = r.allocUnsafe(0);
          else if ('bigint' == typeof e) e = a(e);
          else if (e.toArray) e = r.from(e.toArray());
          else throw Error('invalid type');
        }
        return e;
      }
      function l(e) {
        return 'string' == typeof e && e.match(/^0x[0-9A-Fa-f]*$/);
      }
      function u(e) {
        return 'string' == typeof e && e.startsWith('0x') ? e.slice(2) : e;
      }
      e.exports = {
        zeros: s,
        setLength: o,
        setLengthRight: function (e, t) {
          return o(e, t, !0);
        },
        isHexString: l,
        stripHexPrefix: u,
        toBuffer: c,
        bufferToHex: function (e) {
          return '0x' + (e = c(e)).toString('hex');
        },
        keccak: function (e, t) {
          if (((e = c(e)), t || (t = 256), 256 !== t)) throw Error('unsupported');
          return r.from(i(new Uint8Array(e)));
        },
        bitLengthFromBigInt: function (e) {
          return e.toString(2).length;
        },
        bufferBEFromBigInt: a,
        twosFromBigInt: function (e, t) {
          return (e < 0n ? (~e & ((1n << BigInt(t)) - 1n)) + 1n : e) & ((1n << BigInt(t)) - 1n);
        },
      };
    },
    18037: function (e, t, n) {
      'use strict';
      let r;
      n.d(t, {
        createCoinbaseWalletSDK: function () {
          return e6;
        },
      });
      class i {
        constructor(e, t) {
          (this.scope = e), (this.module = t);
        }
        storeObject(e, t) {
          this.setItem(e, JSON.stringify(t));
        }
        loadObject(e) {
          let t = this.getItem(e);
          return t ? JSON.parse(t) : void 0;
        }
        setItem(e, t) {
          localStorage.setItem(this.scopedKey(e), t);
        }
        getItem(e) {
          return localStorage.getItem(this.scopedKey(e));
        }
        removeItem(e) {
          localStorage.removeItem(this.scopedKey(e));
        }
        clear() {
          let e = this.scopedKey(''),
            t = [];
          for (let n = 0; n < localStorage.length; n++) {
            let r = localStorage.key(n);
            'string' == typeof r && r.startsWith(e) && t.push(r);
          }
          t.forEach((e) => localStorage.removeItem(e));
        }
        scopedKey(e) {
          return `-${this.scope}${this.module ? `:${this.module}` : ''}:${e}`;
        }
        static clearAll() {
          new i('CBWSDK').clear(), new i('walletlink').clear();
        }
      }
      let s = {
          rpc: {
            invalidInput: -32e3,
            resourceNotFound: -32001,
            resourceUnavailable: -32002,
            transactionRejected: -32003,
            methodNotSupported: -32004,
            limitExceeded: -32005,
            parse: -32700,
            invalidRequest: -32600,
            methodNotFound: -32601,
            invalidParams: -32602,
            internal: -32603,
          },
          provider: {
            userRejectedRequest: 4001,
            unauthorized: 4100,
            unsupportedMethod: 4200,
            disconnected: 4900,
            chainDisconnected: 4901,
            unsupportedChain: 4902,
          },
        },
        a = {
          '-32700': {
            standard: 'JSON RPC 2.0',
            message:
              'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.',
          },
          '-32600': {
            standard: 'JSON RPC 2.0',
            message: 'The JSON sent is not a valid Request object.',
          },
          '-32601': {
            standard: 'JSON RPC 2.0',
            message: 'The method does not exist / is not available.',
          },
          '-32602': { standard: 'JSON RPC 2.0', message: 'Invalid method parameter(s).' },
          '-32603': { standard: 'JSON RPC 2.0', message: 'Internal JSON-RPC error.' },
          '-32000': { standard: 'EIP-1474', message: 'Invalid input.' },
          '-32001': { standard: 'EIP-1474', message: 'Resource not found.' },
          '-32002': { standard: 'EIP-1474', message: 'Resource unavailable.' },
          '-32003': { standard: 'EIP-1474', message: 'Transaction rejected.' },
          '-32004': { standard: 'EIP-1474', message: 'Method not supported.' },
          '-32005': { standard: 'EIP-1474', message: 'Request limit exceeded.' },
          4001: { standard: 'EIP-1193', message: 'User rejected the request.' },
          4100: {
            standard: 'EIP-1193',
            message: 'The requested account and/or method has not been authorized by the user.',
          },
          4200: {
            standard: 'EIP-1193',
            message: 'The requested method is not supported by this Ethereum provider.',
          },
          4900: { standard: 'EIP-1193', message: 'The provider is disconnected from all chains.' },
          4901: {
            standard: 'EIP-1193',
            message: 'The provider is disconnected from the specified chain.',
          },
          4902: { standard: 'EIP-3085', message: 'Unrecognized chain ID.' },
        },
        o = 'Unspecified error message.';
      function c(e, t = o) {
        if (e && Number.isInteger(e)) {
          let t = e.toString();
          if (u(a, t)) return a[t].message;
          if (e >= -32099 && e <= -32e3) return 'Unspecified server error.';
        }
        return t;
      }
      function l(e) {
        return e && 'object' == typeof e && !Array.isArray(e) ? Object.assign({}, e) : e;
      }
      function u(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function d(e, t) {
        return 'object' == typeof e && null !== e && t in e && 'string' == typeof e[t];
      }
      let h = {
        rpc: {
          parse: (e) => p(s.rpc.parse, e),
          invalidRequest: (e) => p(s.rpc.invalidRequest, e),
          invalidParams: (e) => p(s.rpc.invalidParams, e),
          methodNotFound: (e) => p(s.rpc.methodNotFound, e),
          internal: (e) => p(s.rpc.internal, e),
          server: (e) => {
            if (!e || 'object' != typeof e || Array.isArray(e))
              throw Error('Ethereum RPC Server errors must provide single object argument.');
            let { code: t } = e;
            if (!Number.isInteger(t) || t > -32005 || t < -32099)
              throw Error('"code" must be an integer such that: -32099 <= code <= -32005');
            return p(t, e);
          },
          invalidInput: (e) => p(s.rpc.invalidInput, e),
          resourceNotFound: (e) => p(s.rpc.resourceNotFound, e),
          resourceUnavailable: (e) => p(s.rpc.resourceUnavailable, e),
          transactionRejected: (e) => p(s.rpc.transactionRejected, e),
          methodNotSupported: (e) => p(s.rpc.methodNotSupported, e),
          limitExceeded: (e) => p(s.rpc.limitExceeded, e),
        },
        provider: {
          userRejectedRequest: (e) => f(s.provider.userRejectedRequest, e),
          unauthorized: (e) => f(s.provider.unauthorized, e),
          unsupportedMethod: (e) => f(s.provider.unsupportedMethod, e),
          disconnected: (e) => f(s.provider.disconnected, e),
          chainDisconnected: (e) => f(s.provider.chainDisconnected, e),
          unsupportedChain: (e) => f(s.provider.unsupportedChain, e),
          custom: (e) => {
            if (!e || 'object' != typeof e || Array.isArray(e))
              throw Error('Ethereum Provider custom errors must provide single object argument.');
            let { code: t, message: n, data: r } = e;
            if (!n || 'string' != typeof n) throw Error('"message" must be a nonempty string');
            return new _(t, n, r);
          },
        },
      };
      function p(e, t) {
        let [n, r] = g(t);
        return new m(e, n || c(e), r);
      }
      function f(e, t) {
        let [n, r] = g(t);
        return new _(e, n || c(e), r);
      }
      function g(e) {
        if (e) {
          if ('string' == typeof e) return [e];
          if ('object' == typeof e && !Array.isArray(e)) {
            let { message: t, data: n } = e;
            if (t && 'string' != typeof t) throw Error('Must specify string message.');
            return [t || void 0, n];
          }
        }
        return [];
      }
      class m extends Error {
        constructor(e, t, n) {
          if (!Number.isInteger(e)) throw Error('"code" must be an integer.');
          if (!t || 'string' != typeof t) throw Error('"message" must be a nonempty string.');
          super(t), (this.code = e), void 0 !== n && (this.data = n);
        }
      }
      class _ extends m {
        constructor(e, t, n) {
          if (!(Number.isInteger(e) && e >= 1e3 && e <= 4999))
            throw Error('"code" must be an integer such that: 1000 <= code <= 4999');
          super(e, t, n);
        }
      }
      let b = (e) => e,
        y = (e) => e,
        w = (e) => e;
      function v(e) {
        return Math.floor(e);
      }
      var k,
        x,
        I = n(87150).Buffer;
      let E = /^[0-9]*$/,
        C = /^[a-f0-9]*$/;
      function S(e) {
        return M(crypto.getRandomValues(new Uint8Array(e)));
      }
      function M(e) {
        return [...e].map((e) => e.toString(16).padStart(2, '0')).join('');
      }
      function A(e) {
        return new Uint8Array(e.match(/.{1,2}/g).map((e) => Number.parseInt(e, 16)));
      }
      function P(e, t = !1) {
        let n = e.toString('hex');
        return b(t ? `0x${n}` : n);
      }
      function L(e) {
        return P(q(e), !0);
      }
      function D(e) {
        return w(e.toString(10));
      }
      function N(e) {
        return b(`0x${BigInt(e).toString(16)}`);
      }
      function R(e) {
        return e.startsWith('0x') || e.startsWith('0X');
      }
      function T(e) {
        return R(e) ? e.slice(2) : e;
      }
      function U(e) {
        return R(e) ? `0x${e.slice(2)}` : `0x${e}`;
      }
      function j(e) {
        if ('string' != typeof e) return !1;
        let t = T(e).toLowerCase();
        return C.test(t);
      }
      function O(e, t = !1) {
        let n = (function (e, t = !1) {
          if ('string' == typeof e) {
            let n = T(e).toLowerCase();
            if (C.test(n)) return b(t ? `0x${n}` : n);
          }
          throw h.rpc.invalidParams(`"${String(e)}" is not a hexadecimal string`);
        })(e, !1);
        return n.length % 2 == 1 && (n = b(`0${n}`)), t ? b(`0x${n}`) : n;
      }
      function W(e) {
        if ('string' == typeof e) {
          let t = T(e).toLowerCase();
          if (j(t) && 40 === t.length) return y(U(t));
        }
        throw h.rpc.invalidParams(`Invalid Ethereum address: ${String(e)}`);
      }
      function q(e) {
        if (I.isBuffer(e)) return e;
        if ('string' == typeof e) {
          if (j(e)) {
            let t = O(e, !1);
            return I.from(t, 'hex');
          }
          return I.from(e, 'utf8');
        }
        throw h.rpc.invalidParams(`Not binary data: ${String(e)}`);
      }
      function z(e) {
        if ('number' == typeof e && Number.isInteger(e)) return v(e);
        if ('string' == typeof e) {
          if (E.test(e)) return v(Number(e));
          if (j(e)) return v(Number(BigInt(O(e, !0))));
        }
        throw h.rpc.invalidParams(`Not an integer: ${String(e)}`);
      }
      function K(e) {
        if (
          null !== e &&
          ('bigint' == typeof e ||
            (function (e) {
              if (null == e || 'function' != typeof e.constructor) return !1;
              let { constructor: t } = e;
              return 'function' == typeof t.config && 'number' == typeof t.EUCLID;
            })(e))
        )
          return BigInt(e.toString(10));
        if ('number' == typeof e) return BigInt(z(e));
        if ('string' == typeof e) {
          if (E.test(e)) return BigInt(e);
          if (j(e)) return BigInt(O(e, !0));
        }
        throw h.rpc.invalidParams(`Not an integer: ${String(e)}`);
      }
      async function H() {
        return crypto.subtle.generateKey({ name: 'ECDH', namedCurve: 'P-256' }, !0, ['deriveKey']);
      }
      async function B(e, t) {
        return crypto.subtle.deriveKey(
          { name: 'ECDH', public: t },
          e,
          { name: 'AES-GCM', length: 256 },
          !1,
          ['encrypt', 'decrypt']
        );
      }
      async function F(e, t) {
        let n = crypto.getRandomValues(new Uint8Array(12)),
          r = await crypto.subtle.encrypt(
            { name: 'AES-GCM', iv: n },
            e,
            new TextEncoder().encode(t)
          );
        return { iv: n, cipherText: r };
      }
      async function G(e, { iv: t, cipherText: n }) {
        let r = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: t }, e, n);
        return new TextDecoder().decode(r);
      }
      function $(e) {
        switch (e) {
          case 'public':
            return 'spki';
          case 'private':
            return 'pkcs8';
        }
      }
      async function J(e, t) {
        let n = $(e);
        return M(new Uint8Array(await crypto.subtle.exportKey(n, t)));
      }
      async function V(e, t) {
        let n = $(e),
          r = A(t).buffer;
        return await crypto.subtle.importKey(
          n,
          new Uint8Array(r),
          { name: 'ECDH', namedCurve: 'P-256' },
          !0,
          'private' === e ? ['deriveKey'] : []
        );
      }
      async function Y(e, t) {
        return F(
          t,
          JSON.stringify(e, (e, t) =>
            t instanceof Error
              ? Object.assign(Object.assign({}, t.code ? { code: t.code } : {}), {
                  message: t.message,
                })
              : t
          )
        );
      }
      async function Q(e, t) {
        return JSON.parse(await G(t, e));
      }
      let Z = { storageKey: 'ownPrivateKey', keyType: 'private' },
        X = { storageKey: 'ownPublicKey', keyType: 'public' },
        ee = { storageKey: 'peerPublicKey', keyType: 'public' };
      class et {
        constructor() {
          (this.storage = new i('CBWSDK', 'SCWKeyManager')),
            (this.ownPrivateKey = null),
            (this.ownPublicKey = null),
            (this.peerPublicKey = null),
            (this.sharedSecret = null);
        }
        async getOwnPublicKey() {
          return await this.loadKeysIfNeeded(), this.ownPublicKey;
        }
        async getSharedSecret() {
          return await this.loadKeysIfNeeded(), this.sharedSecret;
        }
        async setPeerPublicKey(e) {
          (this.sharedSecret = null),
            (this.peerPublicKey = e),
            await this.storeKey(ee, e),
            await this.loadKeysIfNeeded();
        }
        async clear() {
          (this.ownPrivateKey = null),
            (this.ownPublicKey = null),
            (this.peerPublicKey = null),
            (this.sharedSecret = null),
            this.storage.removeItem(X.storageKey),
            this.storage.removeItem(Z.storageKey),
            this.storage.removeItem(ee.storageKey);
        }
        async generateKeyPair() {
          let e = await H();
          (this.ownPrivateKey = e.privateKey),
            (this.ownPublicKey = e.publicKey),
            await this.storeKey(Z, e.privateKey),
            await this.storeKey(X, e.publicKey);
        }
        async loadKeysIfNeeded() {
          null === this.ownPrivateKey && (this.ownPrivateKey = await this.loadKey(Z)),
            null === this.ownPublicKey && (this.ownPublicKey = await this.loadKey(X)),
            (null === this.ownPrivateKey || null === this.ownPublicKey) &&
              (await this.generateKeyPair()),
            null === this.peerPublicKey && (this.peerPublicKey = await this.loadKey(ee)),
            null === this.sharedSecret &&
              null !== this.ownPrivateKey &&
              null !== this.peerPublicKey &&
              (this.sharedSecret = await B(this.ownPrivateKey, this.peerPublicKey));
        }
        async loadKey(e) {
          let t = this.storage.getItem(e.storageKey);
          return t ? V(e.keyType, t) : null;
        }
        async storeKey(e, t) {
          let n = await J(e.keyType, t);
          this.storage.setItem(e.storageKey, n);
        }
      }
      let en = '4.3.0',
        er = '@coinbase/wallet-sdk';
      async function ei(e, t) {
        let n = Object.assign(Object.assign({}, e), { jsonrpc: '2.0', id: crypto.randomUUID() }),
          r = await window.fetch(t, {
            method: 'POST',
            body: JSON.stringify(n),
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              'X-Cbw-Sdk-Version': en,
              'X-Cbw-Sdk-Platform': er,
            },
          }),
          { result: i, error: s } = await r.json();
        if (s) throw s;
        return i;
      }
      let es = 'accounts',
        ea = 'activeChain',
        eo = 'availableChains',
        ec = 'walletCapabilities';
      class el {
        constructor(e) {
          var t, n, r;
          (this.metadata = e.metadata),
            (this.communicator = e.communicator),
            (this.callback = e.callback),
            (this.keyManager = new et()),
            (this.storage = new i('CBWSDK', 'SCWStateManager')),
            (this.accounts = null !== (t = this.storage.loadObject(es)) && void 0 !== t ? t : []),
            (this.chain = this.storage.loadObject(ea) || {
              id:
                null !==
                  (r = null === (n = e.metadata.appChainIds) || void 0 === n ? void 0 : n[0]) &&
                void 0 !== r
                  ? r
                  : 1,
            }),
            (this.handshake = this.handshake.bind(this)),
            (this.request = this.request.bind(this)),
            (this.createRequestMessage = this.createRequestMessage.bind(this)),
            (this.decryptResponseMessage = this.decryptResponseMessage.bind(this));
        }
        async handshake(e) {
          var t, n, r, i;
          await (null === (n = (t = this.communicator).waitForPopupLoaded) || void 0 === n
            ? void 0
            : n.call(t));
          let s = await this.createRequestMessage({
              handshake: {
                method: e.method,
                params: Object.assign(
                  {},
                  this.metadata,
                  null !== (r = e.params) && void 0 !== r ? r : {}
                ),
              },
            }),
            a = await this.communicator.postRequestAndWaitForResponse(s);
          if ('failure' in a.content) throw a.content.failure;
          let o = await V('public', a.sender);
          await this.keyManager.setPeerPublicKey(o);
          let c = (await this.decryptResponseMessage(a)).result;
          if ('error' in c) throw c.error;
          if ('eth_requestAccounts' === e.method) {
            let e = c.value;
            (this.accounts = e),
              this.storage.storeObject(es, e),
              null === (i = this.callback) || void 0 === i || i.call(this, 'accountsChanged', e);
          }
        }
        async request(e) {
          var t;
          if (0 === this.accounts.length) {
            if ('wallet_sendCalls' === e.method) return this.sendRequestToPopup(e);
            throw h.provider.unauthorized();
          }
          switch (e.method) {
            case 'eth_requestAccounts':
              return (
                null === (t = this.callback) ||
                  void 0 === t ||
                  t.call(this, 'connect', { chainId: N(this.chain.id) }),
                this.accounts
              );
            case 'eth_accounts':
              return this.accounts;
            case 'eth_coinbase':
              return this.accounts[0];
            case 'net_version':
              return this.chain.id;
            case 'eth_chainId':
              return N(this.chain.id);
            case 'wallet_getCapabilities':
              return this.storage.loadObject(ec);
            case 'wallet_switchEthereumChain':
              return this.handleSwitchChainRequest(e);
            case 'eth_ecRecover':
            case 'personal_sign':
            case 'wallet_sign':
            case 'personal_ecRecover':
            case 'eth_signTransaction':
            case 'eth_sendTransaction':
            case 'eth_signTypedData_v1':
            case 'eth_signTypedData_v3':
            case 'eth_signTypedData_v4':
            case 'eth_signTypedData':
            case 'wallet_addEthereumChain':
            case 'wallet_watchAsset':
            case 'wallet_sendCalls':
            case 'wallet_showCallsStatus':
            case 'wallet_grantPermissions':
              return this.sendRequestToPopup(e);
            default:
              if (!this.chain.rpcUrl) throw h.rpc.internal('No RPC URL set for chain');
              return ei(e, this.chain.rpcUrl);
          }
        }
        async sendRequestToPopup(e) {
          var t, n;
          await (null === (n = (t = this.communicator).waitForPopupLoaded) || void 0 === n
            ? void 0
            : n.call(t));
          let r = await this.sendEncryptedRequest(e),
            i = (await this.decryptResponseMessage(r)).result;
          if ('error' in i) throw i.error;
          return i.value;
        }
        async cleanup() {
          var e, t;
          this.storage.clear(),
            await this.keyManager.clear(),
            (this.accounts = []),
            (this.chain = {
              id:
                null !==
                  (t = null === (e = this.metadata.appChainIds) || void 0 === e ? void 0 : e[0]) &&
                void 0 !== t
                  ? t
                  : 1,
            });
        }
        async handleSwitchChainRequest(e) {
          var t;
          let n = e.params;
          if (!n || !(null === (t = n[0]) || void 0 === t ? void 0 : t.chainId))
            throw h.rpc.invalidParams();
          let r = z(n[0].chainId);
          if (this.updateChain(r)) return null;
          let i = await this.sendRequestToPopup(e);
          return null === i && this.updateChain(r), i;
        }
        async sendEncryptedRequest(e) {
          let t = await this.keyManager.getSharedSecret();
          if (!t)
            throw h.provider.unauthorized(
              'No valid session found, try requestAccounts before other methods'
            );
          let n = await Y({ action: e, chainId: this.chain.id }, t),
            r = await this.createRequestMessage({ encrypted: n });
          return this.communicator.postRequestAndWaitForResponse(r);
        }
        async createRequestMessage(e) {
          let t = await J('public', await this.keyManager.getOwnPublicKey());
          return { id: crypto.randomUUID(), sender: t, content: e, timestamp: new Date() };
        }
        async decryptResponseMessage(e) {
          var t, n;
          let r = e.content;
          if ('failure' in r) throw r.failure;
          let i = await this.keyManager.getSharedSecret();
          if (!i) throw h.provider.unauthorized('Invalid session');
          let s = await Q(r.encrypted, i),
            a = null === (t = s.data) || void 0 === t ? void 0 : t.chains;
          if (a) {
            let e = Object.entries(a).map(([e, t]) => ({ id: Number(e), rpcUrl: t }));
            this.storage.storeObject(eo, e), this.updateChain(this.chain.id, e);
          }
          let o = null === (n = s.data) || void 0 === n ? void 0 : n.capabilities;
          return o && this.storage.storeObject(ec, o), s;
        }
        updateChain(e, t) {
          var n;
          let r = null != t ? t : this.storage.loadObject(eo),
            i = null == r ? void 0 : r.find((t) => t.id === e);
          return (
            !!i &&
            (i !== this.chain &&
              ((this.chain = i),
              this.storage.storeObject(ea, i),
              null === (n = this.callback) ||
                void 0 === n ||
                n.call(this, 'chainChanged', N(i.id))),
            !0)
          );
        }
      }
      var eu = n(46006);
      let ed = 'Addresses';
      function eh(e) {
        return void 0 !== e.errorMessage;
      }
      class ep {
        constructor(e) {
          this.secret = e;
        }
        async encrypt(e) {
          let t = this.secret;
          if (64 !== t.length) throw Error('secret must be 256 bits');
          let n = crypto.getRandomValues(new Uint8Array(12)),
            r = await crypto.subtle.importKey('raw', A(t), { name: 'aes-gcm' }, !1, [
              'encrypt',
              'decrypt',
            ]),
            i = new TextEncoder(),
            s = await window.crypto.subtle.encrypt({ name: 'AES-GCM', iv: n }, r, i.encode(e)),
            a = s.slice(s.byteLength - 16),
            o = s.slice(0, s.byteLength - 16),
            c = new Uint8Array(a),
            l = new Uint8Array(o);
          return M(new Uint8Array([...n, ...c, ...l]));
        }
        async decrypt(e) {
          let t = this.secret;
          if (64 !== t.length) throw Error('secret must be 256 bits');
          return new Promise((n, r) => {
            !(async function () {
              let i = await crypto.subtle.importKey('raw', A(t), { name: 'aes-gcm' }, !1, [
                  'encrypt',
                  'decrypt',
                ]),
                s = A(e),
                a = s.slice(0, 12),
                o = s.slice(12, 28),
                c = new Uint8Array([...s.slice(28), ...o]),
                l = { name: 'AES-GCM', iv: new Uint8Array(a) };
              try {
                let e = await window.crypto.subtle.decrypt(l, i, c),
                  t = new TextDecoder();
                n(t.decode(e));
              } catch (e) {
                r(e);
              }
            })();
          });
        }
      }
      class ef {
        constructor(e, t, n) {
          (this.linkAPIUrl = e), (this.sessionId = t);
          let r = `${t}:${n}`;
          this.auth = `Basic ${btoa(r)}`;
        }
        async markUnseenEventsAsSeen(e) {
          return Promise.all(
            e.map((e) =>
              fetch(`${this.linkAPIUrl}/events/${e.eventId}/seen`, {
                method: 'POST',
                headers: { Authorization: this.auth },
              })
            )
          ).catch((e) => console.error('Unabled to mark event as failed:', e));
        }
        async fetchUnseenEvents() {
          var e;
          let t = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
            headers: { Authorization: this.auth },
          });
          if (t.ok) {
            let { events: n, error: r } = await t.json();
            if (r) throw Error(`Check unseen events failed: ${r}`);
            let i =
              null !==
                (e =
                  null == n
                    ? void 0
                    : n
                        .filter((e) => 'Web3Response' === e.event)
                        .map((e) => ({
                          type: 'Event',
                          sessionId: this.sessionId,
                          eventId: e.id,
                          event: e.event,
                          data: e.data,
                        }))) && void 0 !== e
                ? e
                : [];
            return this.markUnseenEventsAsSeen(i), i;
          }
          throw Error(`Check unseen events failed: ${t.status}`);
        }
      }
      ((k = x || (x = {}))[(k.DISCONNECTED = 0)] = 'DISCONNECTED'),
        (k[(k.CONNECTING = 1)] = 'CONNECTING'),
        (k[(k.CONNECTED = 2)] = 'CONNECTED');
      class eg {
        setConnectionStateListener(e) {
          this.connectionStateListener = e;
        }
        setIncomingDataListener(e) {
          this.incomingDataListener = e;
        }
        constructor(e, t = WebSocket) {
          (this.WebSocketClass = t),
            (this.webSocket = null),
            (this.pendingData = []),
            (this.url = e.replace(/^http/, 'ws'));
        }
        async connect() {
          if (this.webSocket) throw Error('webSocket object is not null');
          return new Promise((e, t) => {
            var n;
            let r;
            try {
              this.webSocket = r = new this.WebSocketClass(this.url);
            } catch (e) {
              t(e);
              return;
            }
            null === (n = this.connectionStateListener) ||
              void 0 === n ||
              n.call(this, x.CONNECTING),
              (r.onclose = (e) => {
                var n;
                this.clearWebSocket(),
                  t(Error(`websocket error ${e.code}: ${e.reason}`)),
                  null === (n = this.connectionStateListener) ||
                    void 0 === n ||
                    n.call(this, x.DISCONNECTED);
              }),
              (r.onopen = (t) => {
                var n;
                e(),
                  null === (n = this.connectionStateListener) ||
                    void 0 === n ||
                    n.call(this, x.CONNECTED),
                  this.pendingData.length > 0 &&
                    ([...this.pendingData].forEach((e) => this.sendData(e)),
                    (this.pendingData = []));
              }),
              (r.onmessage = (e) => {
                var t, n;
                if ('h' === e.data)
                  null === (t = this.incomingDataListener) ||
                    void 0 === t ||
                    t.call(this, { type: 'Heartbeat' });
                else
                  try {
                    let t = JSON.parse(e.data);
                    null === (n = this.incomingDataListener) || void 0 === n || n.call(this, t);
                  } catch (e) {}
              });
          });
        }
        disconnect() {
          var e;
          let { webSocket: t } = this;
          if (t) {
            this.clearWebSocket(),
              null === (e = this.connectionStateListener) ||
                void 0 === e ||
                e.call(this, x.DISCONNECTED),
              (this.connectionStateListener = void 0),
              (this.incomingDataListener = void 0);
            try {
              t.close();
            } catch (e) {}
          }
        }
        sendData(e) {
          let { webSocket: t } = this;
          if (!t) {
            this.pendingData.push(e), this.connect();
            return;
          }
          t.send(e);
        }
        clearWebSocket() {
          let { webSocket: e } = this;
          e &&
            ((this.webSocket = null),
            (e.onclose = null),
            (e.onerror = null),
            (e.onmessage = null),
            (e.onopen = null));
        }
      }
      class em {
        constructor({ session: e, linkAPIUrl: t, listener: n }) {
          (this.destroyed = !1),
            (this.lastHeartbeatResponse = 0),
            (this.nextReqId = v(1)),
            (this._connected = !1),
            (this._linked = !1),
            (this.shouldFetchUnseenEventsOnConnect = !1),
            (this.requestResolutions = new Map()),
            (this.handleSessionMetadataUpdated = (e) => {
              e &&
                new Map([
                  ['__destroyed', this.handleDestroyed],
                  ['EthereumAddress', this.handleAccountUpdated],
                  ['WalletUsername', this.handleWalletUsernameUpdated],
                  ['AppVersion', this.handleAppVersionUpdated],
                  ['ChainId', (t) => e.JsonRpcUrl && this.handleChainUpdated(t, e.JsonRpcUrl)],
                ]).forEach((t, n) => {
                  let r = e[n];
                  void 0 !== r && t(r);
                });
            }),
            (this.handleDestroyed = (e) => {
              var t;
              '1' === e && (null === (t = this.listener) || void 0 === t || t.resetAndReload());
            }),
            (this.handleAccountUpdated = async (e) => {
              var t;
              let n = await this.cipher.decrypt(e);
              null === (t = this.listener) || void 0 === t || t.accountUpdated(n);
            }),
            (this.handleMetadataUpdated = async (e, t) => {
              var n;
              let r = await this.cipher.decrypt(t);
              null === (n = this.listener) || void 0 === n || n.metadataUpdated(e, r);
            }),
            (this.handleWalletUsernameUpdated = async (e) => {
              this.handleMetadataUpdated('walletUsername', e);
            }),
            (this.handleAppVersionUpdated = async (e) => {
              this.handleMetadataUpdated('AppVersion', e);
            }),
            (this.handleChainUpdated = async (e, t) => {
              var n;
              let r = await this.cipher.decrypt(e),
                i = await this.cipher.decrypt(t);
              null === (n = this.listener) || void 0 === n || n.chainUpdated(r, i);
            }),
            (this.session = e),
            (this.cipher = new ep(e.secret)),
            (this.listener = n);
          let r = new eg(`${t}/rpc`, WebSocket);
          r.setConnectionStateListener(async (e) => {
            let t = !1;
            switch (e) {
              case x.DISCONNECTED:
                if (!this.destroyed) {
                  let e = async () => {
                    await new Promise((e) => setTimeout(e, 5e3)),
                      this.destroyed ||
                        r.connect().catch(() => {
                          e();
                        });
                  };
                  e();
                }
                break;
              case x.CONNECTED:
                (t = await this.handleConnected()),
                  this.updateLastHeartbeat(),
                  setInterval(() => {
                    this.heartbeat();
                  }, 1e4),
                  this.shouldFetchUnseenEventsOnConnect && this.fetchUnseenEventsAPI();
              case x.CONNECTING:
            }
            this.connected !== t && (this.connected = t);
          }),
            r.setIncomingDataListener((e) => {
              var t;
              switch (e.type) {
                case 'Heartbeat':
                  this.updateLastHeartbeat();
                  return;
                case 'IsLinkedOK':
                case 'Linked': {
                  let t = 'IsLinkedOK' === e.type ? e.linked : void 0;
                  this.linked = t || e.onlineGuests > 0;
                  break;
                }
                case 'GetSessionConfigOK':
                case 'SessionConfigUpdated':
                  this.handleSessionMetadataUpdated(e.metadata);
                  break;
                case 'Event':
                  this.handleIncomingEvent(e);
              }
              void 0 !== e.id &&
                (null === (t = this.requestResolutions.get(e.id)) || void 0 === t || t(e));
            }),
            (this.ws = r),
            (this.http = new ef(t, e.id, e.key));
        }
        connect() {
          if (this.destroyed) throw Error('instance is destroyed');
          this.ws.connect();
        }
        async destroy() {
          this.destroyed ||
            (await this.makeRequest(
              {
                type: 'SetSessionConfig',
                id: v(this.nextReqId++),
                sessionId: this.session.id,
                metadata: { __destroyed: '1' },
              },
              { timeout: 1e3 }
            ),
            (this.destroyed = !0),
            this.ws.disconnect(),
            (this.listener = void 0));
        }
        get connected() {
          return this._connected;
        }
        set connected(e) {
          this._connected = e;
        }
        get linked() {
          return this._linked;
        }
        set linked(e) {
          var t, n;
          (this._linked = e),
            e && (null === (t = this.onceLinked) || void 0 === t || t.call(this)),
            null === (n = this.listener) || void 0 === n || n.linkedUpdated(e);
        }
        setOnceLinked(e) {
          return new Promise((t) => {
            this.linked
              ? e().then(t)
              : (this.onceLinked = () => {
                  e().then(t), (this.onceLinked = void 0);
                });
          });
        }
        async handleIncomingEvent(e) {
          var t;
          if ('Event' !== e.type || 'Web3Response' !== e.event) return;
          let n = JSON.parse(await this.cipher.decrypt(e.data));
          if ('WEB3_RESPONSE' !== n.type) return;
          let { id: r, response: i } = n;
          null === (t = this.listener) || void 0 === t || t.handleWeb3ResponseMessage(r, i);
        }
        async checkUnseenEvents() {
          if (!this.connected) {
            this.shouldFetchUnseenEventsOnConnect = !0;
            return;
          }
          await new Promise((e) => setTimeout(e, 250));
          try {
            await this.fetchUnseenEventsAPI();
          } catch (e) {
            console.error('Unable to check for unseen events', e);
          }
        }
        async fetchUnseenEventsAPI() {
          (this.shouldFetchUnseenEventsOnConnect = !1),
            (await this.http.fetchUnseenEvents()).forEach((e) => this.handleIncomingEvent(e));
        }
        async publishEvent(e, t, n = !1) {
          let r = await this.cipher.encrypt(
              JSON.stringify(
                Object.assign(Object.assign({}, t), {
                  origin: location.origin,
                  location: location.href,
                  relaySource:
                    'coinbaseWalletExtension' in window && window.coinbaseWalletExtension
                      ? 'injected_sdk'
                      : 'sdk',
                })
              )
            ),
            i = {
              type: 'PublishEvent',
              id: v(this.nextReqId++),
              sessionId: this.session.id,
              event: e,
              data: r,
              callWebhook: n,
            };
          return this.setOnceLinked(async () => {
            let e = await this.makeRequest(i);
            if ('Fail' === e.type) throw Error(e.error || 'failed to publish event');
            return e.eventId;
          });
        }
        sendData(e) {
          this.ws.sendData(JSON.stringify(e));
        }
        updateLastHeartbeat() {
          this.lastHeartbeatResponse = Date.now();
        }
        heartbeat() {
          if (Date.now() - this.lastHeartbeatResponse > 2e4) {
            this.ws.disconnect();
            return;
          }
          try {
            this.ws.sendData('h');
          } catch (e) {}
        }
        async makeRequest(e, t = { timeout: 6e4 }) {
          let n;
          let r = e.id;
          return (
            this.sendData(e),
            Promise.race([
              new Promise((e, i) => {
                n = window.setTimeout(() => {
                  i(Error(`request ${r} timed out`));
                }, t.timeout);
              }),
              new Promise((e) => {
                this.requestResolutions.set(r, (t) => {
                  clearTimeout(n), e(t), this.requestResolutions.delete(r);
                });
              }),
            ])
          );
        }
        async handleConnected() {
          return (
            'Fail' !==
              (
                await this.makeRequest({
                  type: 'HostSession',
                  id: v(this.nextReqId++),
                  sessionId: this.session.id,
                  sessionKey: this.session.key,
                })
              ).type &&
            (this.sendData({
              type: 'IsLinked',
              id: v(this.nextReqId++),
              sessionId: this.session.id,
            }),
            this.sendData({
              type: 'GetSessionConfig',
              id: v(this.nextReqId++),
              sessionId: this.session.id,
            }),
            !0)
          );
        }
      }
      class e_ {
        constructor() {
          (this._nextRequestId = 0), (this.callbacks = new Map());
        }
        makeRequestId() {
          this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
          let e = this._nextRequestId,
            t = U(e.toString(16));
          return this.callbacks.get(t) && this.callbacks.delete(t), e;
        }
      }
      var eb = n(5965);
      class ey extends eb.kb {
        constructor(e, t, n, r) {
          super(),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = n),
            (this.isLE = r),
            (this.buffer = new Uint8Array(e)),
            (this.view = (0, eb.GL)(this.buffer));
        }
        update(e) {
          (0, eb.$h)(this), (e = (0, eb.O0)(e)), (0, eb.gk)(e);
          let { view: t, buffer: n, blockLen: r } = this,
            i = e.length;
          for (let s = 0; s < i; ) {
            let a = Math.min(r - this.pos, i - s);
            if (a === r) {
              let t = (0, eb.GL)(e);
              for (; r <= i - s; s += r) this.process(t, s);
              continue;
            }
            n.set(e.subarray(s, s + a), this.pos),
              (this.pos += a),
              (s += a),
              this.pos === r && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          (0, eb.$h)(this), (0, eb.eB)(e, this), (this.finished = !0);
          let { buffer: t, view: n, blockLen: r, isLE: i } = this,
            { pos: s } = this;
          (t[s++] = 128),
            (0, eb.ru)(this.buffer.subarray(s)),
            this.padOffset > r - s && (this.process(n, 0), (s = 0));
          for (let e = s; e < r; e++) t[e] = 0;
          !(function (e, t, n, r) {
            if ('function' == typeof e.setBigUint64) return e.setBigUint64(t, n, r);
            let i = BigInt(32),
              s = BigInt(4294967295),
              a = Number((n >> i) & s),
              o = Number(n & s),
              c = r ? 4 : 0,
              l = r ? 0 : 4;
            e.setUint32(t + c, a, r), e.setUint32(t + l, o, r);
          })(n, r - 8, BigInt(8 * this.length), i),
            this.process(n, 0);
          let a = (0, eb.GL)(e),
            o = this.outputLen;
          if (o % 4) throw Error('_sha2: outputLen should be aligned to 32bit');
          let c = o / 4,
            l = this.get();
          if (c > l.length) throw Error('_sha2: outputLen bigger than state');
          for (let e = 0; e < c; e++) a.setUint32(4 * e, l[e], i);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let n = e.slice(0, t);
          return this.destroy(), n;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let { blockLen: t, buffer: n, length: r, finished: i, destroyed: s, pos: a } = this;
          return (
            (e.destroyed = s),
            (e.finished = i),
            (e.length = r),
            (e.pos = a),
            r % t && e.buffer.set(n),
            e
          );
        }
        clone() {
          return this._cloneInto();
        }
      }
      let ew = Uint32Array.from([
        1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635,
        1541459225,
      ]);
      var ev = n(2217);
      let ek = Uint32Array.from([
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
        ]),
        ex = new Uint32Array(64);
      class eI extends ey {
        constructor(e = 32) {
          super(64, e, 8, !1),
            (this.A = 0 | ew[0]),
            (this.B = 0 | ew[1]),
            (this.C = 0 | ew[2]),
            (this.D = 0 | ew[3]),
            (this.E = 0 | ew[4]),
            (this.F = 0 | ew[5]),
            (this.G = 0 | ew[6]),
            (this.H = 0 | ew[7]);
        }
        get() {
          let { A: e, B: t, C: n, D: r, E: i, F: s, G: a, H: o } = this;
          return [e, t, n, r, i, s, a, o];
        }
        set(e, t, n, r, i, s, a, o) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | n),
            (this.D = 0 | r),
            (this.E = 0 | i),
            (this.F = 0 | s),
            (this.G = 0 | a),
            (this.H = 0 | o);
        }
        process(e, t) {
          for (let n = 0; n < 16; n++, t += 4) ex[n] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = ex[e - 15],
              n = ex[e - 2],
              r = (0, eb.np)(t, 7) ^ (0, eb.np)(t, 18) ^ (t >>> 3),
              i = (0, eb.np)(n, 17) ^ (0, eb.np)(n, 19) ^ (n >>> 10);
            ex[e] = (i + ex[e - 7] + r + ex[e - 16]) | 0;
          }
          let { A: n, B: r, C: i, D: s, E: a, F: o, G: c, H: l } = this;
          for (let e = 0; e < 64; e++) {
            var u, d, h, p;
            let t =
                (l +
                  ((0, eb.np)(a, 6) ^ (0, eb.np)(a, 11) ^ (0, eb.np)(a, 25)) +
                  (((u = a) & o) ^ (~u & c)) +
                  ek[e] +
                  ex[e]) |
                0,
              f =
                (((0, eb.np)(n, 2) ^ (0, eb.np)(n, 13) ^ (0, eb.np)(n, 22)) +
                  (((d = n) & (h = r)) ^ (d & (p = i)) ^ (h & p))) |
                0;
            (l = c),
              (c = o),
              (o = a),
              (a = (s + t) | 0),
              (s = i),
              (i = r),
              (r = n),
              (n = (t + f) | 0);
          }
          (n = (n + this.A) | 0),
            (r = (r + this.B) | 0),
            (i = (i + this.C) | 0),
            (s = (s + this.D) | 0),
            (a = (a + this.E) | 0),
            (o = (o + this.F) | 0),
            (c = (c + this.G) | 0),
            (l = (l + this.H) | 0),
            this.set(n, r, i, s, a, o, c, l);
        }
        roundClean() {
          (0, eb.ru)(ex);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), (0, eb.ru)(this.buffer);
        }
      }
      let eE = ev.Vl(
        [
          '0x428a2f98d728ae22',
          '0x7137449123ef65cd',
          '0xb5c0fbcfec4d3b2f',
          '0xe9b5dba58189dbbc',
          '0x3956c25bf348b538',
          '0x59f111f1b605d019',
          '0x923f82a4af194f9b',
          '0xab1c5ed5da6d8118',
          '0xd807aa98a3030242',
          '0x12835b0145706fbe',
          '0x243185be4ee4b28c',
          '0x550c7dc3d5ffb4e2',
          '0x72be5d74f27b896f',
          '0x80deb1fe3b1696b1',
          '0x9bdc06a725c71235',
          '0xc19bf174cf692694',
          '0xe49b69c19ef14ad2',
          '0xefbe4786384f25e3',
          '0x0fc19dc68b8cd5b5',
          '0x240ca1cc77ac9c65',
          '0x2de92c6f592b0275',
          '0x4a7484aa6ea6e483',
          '0x5cb0a9dcbd41fbd4',
          '0x76f988da831153b5',
          '0x983e5152ee66dfab',
          '0xa831c66d2db43210',
          '0xb00327c898fb213f',
          '0xbf597fc7beef0ee4',
          '0xc6e00bf33da88fc2',
          '0xd5a79147930aa725',
          '0x06ca6351e003826f',
          '0x142929670a0e6e70',
          '0x27b70a8546d22ffc',
          '0x2e1b21385c26c926',
          '0x4d2c6dfc5ac42aed',
          '0x53380d139d95b3df',
          '0x650a73548baf63de',
          '0x766a0abb3c77b2a8',
          '0x81c2c92e47edaee6',
          '0x92722c851482353b',
          '0xa2bfe8a14cf10364',
          '0xa81a664bbc423001',
          '0xc24b8b70d0f89791',
          '0xc76c51a30654be30',
          '0xd192e819d6ef5218',
          '0xd69906245565a910',
          '0xf40e35855771202a',
          '0x106aa07032bbd1b8',
          '0x19a4c116b8d2d0c8',
          '0x1e376c085141ab53',
          '0x2748774cdf8eeb99',
          '0x34b0bcb5e19b48a8',
          '0x391c0cb3c5c95a63',
          '0x4ed8aa4ae3418acb',
          '0x5b9cca4f7763e373',
          '0x682e6ff3d6b2b8a3',
          '0x748f82ee5defb2fc',
          '0x78a5636f43172f60',
          '0x84c87814a1f0ab72',
          '0x8cc702081a6439ec',
          '0x90befffa23631e28',
          '0xa4506cebde82bde9',
          '0xbef9a3f7b2c67915',
          '0xc67178f2e372532b',
          '0xca273eceea26619c',
          '0xd186b8c721c0c207',
          '0xeada7dd6cde0eb1e',
          '0xf57d4f7fee6ed178',
          '0x06f067aa72176fba',
          '0x0a637dc5a2c898a6',
          '0x113f9804bef90dae',
          '0x1b710b35131c471b',
          '0x28db77f523047d84',
          '0x32caab7b40c72493',
          '0x3c9ebe0a15c9bebc',
          '0x431d67c49c100d4c',
          '0x4cc5d4becb3e42b6',
          '0x597f299cfc657e2a',
          '0x5fcb6fab3ad6faec',
          '0x6c44198c4a475817',
        ].map((e) => BigInt(e))
      );
      eE[0], eE[1];
      let eC = (0, eb.V1)(() => new eI()),
        eS = 'session:id',
        eM = 'session:secret',
        eA = 'session:linked';
      class eP {
        constructor(e, t, n, r = !1) {
          (this.storage = e),
            (this.id = t),
            (this.secret = n),
            (this.key = (0, eb.ci)(eC(`${t}, ${n} WalletLink`))),
            (this._linked = !!r);
        }
        static create(e) {
          return new eP(e, S(16), S(32)).save();
        }
        static load(e) {
          let t = e.getItem(eS),
            n = e.getItem(eA),
            r = e.getItem(eM);
          return t && r ? new eP(e, t, r, '1' === n) : null;
        }
        get linked() {
          return this._linked;
        }
        set linked(e) {
          (this._linked = e), this.persistLinked();
        }
        save() {
          return (
            this.storage.setItem(eS, this.id),
            this.storage.setItem(eM, this.secret),
            this.persistLinked(),
            this
          );
        }
        persistLinked() {
          this.storage.setItem(eA, this._linked ? '1' : '0');
        }
      }
      function eL() {
        var e, t;
        return (
          null !==
            (t =
              null === (e = null == window ? void 0 : window.matchMedia) || void 0 === e
                ? void 0
                : e.call(window, '(prefers-color-scheme: dark)').matches) &&
          void 0 !== t &&
          t
        );
      }
      function eD() {
        let e = document.createElement('style');
        (e.type = 'text/css'),
          e.appendChild(
            document.createTextNode(
              '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}'
            )
          ),
          document.documentElement.appendChild(e);
      }
      var eN = n(16422),
        eR = n(3832),
        eT = n(56251);
      class eU {
        constructor() {
          (this.items = new Map()),
            (this.nextItemKey = 0),
            (this.root = null),
            (this.darkMode = eL());
        }
        attach(e) {
          (this.root = document.createElement('div')),
            (this.root.className = '-cbwsdk-snackbar-root'),
            e.appendChild(this.root),
            this.render();
        }
        presentItem(e) {
          let t = this.nextItemKey++;
          return (
            this.items.set(t, e),
            this.render(),
            () => {
              this.items.delete(t), this.render();
            }
          );
        }
        clear() {
          this.items.clear(), this.render();
        }
        render() {
          this.root &&
            (0, eR.render)(
              (0, eR.h)(
                'div',
                null,
                (0, eR.h)(
                  ej,
                  { darkMode: this.darkMode },
                  Array.from(this.items.entries()).map(([e, t]) =>
                    (0, eR.h)(eO, Object.assign({}, t, { key: e }))
                  )
                )
              ),
              this.root
            );
        }
      }
      let ej = (e) =>
          (0, eR.h)(
            'div',
            { class: (0, eN.clsx)('-cbwsdk-snackbar-container') },
            (0, eR.h)(
              'style',
              null,
              '.-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}'
            ),
            (0, eR.h)('div', { class: '-cbwsdk-snackbar' }, e.children)
          ),
        eO = ({ autoExpand: e, message: t, menuItems: n }) => {
          let [r, i] = (0, eT.useState)(!0),
            [s, a] = (0, eT.useState)(null != e && e);
          return (
            (0, eT.useEffect)(() => {
              let e = [
                window.setTimeout(() => {
                  i(!1);
                }, 1),
                window.setTimeout(() => {
                  a(!0);
                }, 1e4),
              ];
              return () => {
                e.forEach(window.clearTimeout);
              };
            }),
            (0, eR.h)(
              'div',
              {
                class: (0, eN.clsx)(
                  '-cbwsdk-snackbar-instance',
                  r && '-cbwsdk-snackbar-instance-hidden',
                  s && '-cbwsdk-snackbar-instance-expanded'
                ),
              },
              (0, eR.h)(
                'div',
                {
                  class: '-cbwsdk-snackbar-instance-header',
                  onClick: () => {
                    a(!s);
                  },
                },
                (0, eR.h)('img', {
                  src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+',
                  class: '-cbwsdk-snackbar-instance-header-cblogo',
                }),
                ' ',
                (0, eR.h)('div', { class: '-cbwsdk-snackbar-instance-header-message' }, t),
                (0, eR.h)(
                  'div',
                  { class: '-gear-container' },
                  !s &&
                    (0, eR.h)(
                      'svg',
                      {
                        width: '24',
                        height: '24',
                        viewBox: '0 0 24 24',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                      },
                      (0, eR.h)('circle', { cx: '12', cy: '12', r: '12', fill: '#F5F7F8' })
                    ),
                  (0, eR.h)('img', {
                    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=',
                    class: '-gear-icon',
                    title: 'Expand',
                  })
                )
              ),
              n &&
                n.length > 0 &&
                (0, eR.h)(
                  'div',
                  { class: '-cbwsdk-snackbar-instance-menu' },
                  n.map((e, t) =>
                    (0, eR.h)(
                      'div',
                      {
                        class: (0, eN.clsx)(
                          '-cbwsdk-snackbar-instance-menu-item',
                          e.isRed && '-cbwsdk-snackbar-instance-menu-item-is-red'
                        ),
                        onClick: e.onClick,
                        key: t,
                      },
                      (0, eR.h)(
                        'svg',
                        {
                          width: e.svgWidth,
                          height: e.svgHeight,
                          viewBox: '0 0 10 11',
                          fill: 'none',
                          xmlns: 'http://www.w3.org/2000/svg',
                        },
                        (0, eR.h)('path', {
                          'fill-rule': e.defaultFillRule,
                          'clip-rule': e.defaultClipRule,
                          d: e.path,
                          fill: '#AAAAAA',
                        })
                      ),
                      (0, eR.h)(
                        'span',
                        {
                          class: (0, eN.clsx)(
                            '-cbwsdk-snackbar-instance-menu-item-info',
                            e.isRed && '-cbwsdk-snackbar-instance-menu-item-info-is-red'
                          ),
                        },
                        e.info
                      )
                    )
                  )
                )
            )
          );
        };
      class eW {
        constructor() {
          (this.attached = !1), (this.snackbar = new eU());
        }
        attach() {
          if (this.attached) throw Error('Coinbase Wallet SDK UI is already attached');
          let e = document.documentElement,
            t = document.createElement('div');
          (t.className = '-cbwsdk-css-reset'),
            e.appendChild(t),
            this.snackbar.attach(t),
            (this.attached = !0),
            eD();
        }
        showConnecting(e) {
          let t;
          return (
            (t = e.isUnlinkedErrorState
              ? {
                  autoExpand: !0,
                  message: 'Connection lost',
                  menuItems: [
                    {
                      isRed: !1,
                      info: 'Reset connection',
                      svgWidth: '10',
                      svgHeight: '11',
                      path: 'M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z',
                      defaultFillRule: 'evenodd',
                      defaultClipRule: 'evenodd',
                      onClick: e.onResetConnection,
                    },
                  ],
                }
              : {
                  message: 'Confirm on phone',
                  menuItems: [
                    {
                      isRed: !0,
                      info: 'Cancel transaction',
                      svgWidth: '11',
                      svgHeight: '11',
                      path: 'M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z',
                      defaultFillRule: 'inherit',
                      defaultClipRule: 'inherit',
                      onClick: e.onCancel,
                    },
                    {
                      isRed: !1,
                      info: 'Reset connection',
                      svgWidth: '10',
                      svgHeight: '11',
                      path: 'M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z',
                      defaultFillRule: 'evenodd',
                      defaultClipRule: 'evenodd',
                      onClick: e.onResetConnection,
                    },
                  ],
                }),
            this.snackbar.presentItem(t)
          );
        }
      }
      class eq {
        constructor() {
          (this.root = null), (this.darkMode = eL());
        }
        attach() {
          let e = document.documentElement;
          (this.root = document.createElement('div')),
            (this.root.className = '-cbwsdk-css-reset'),
            e.appendChild(this.root),
            eD();
        }
        present(e) {
          this.render(e);
        }
        clear() {
          this.render(null);
        }
        render(e) {
          this.root &&
            ((0, eR.render)(null, this.root),
            e &&
              (0, eR.render)(
                (0, eR.h)(
                  ez,
                  Object.assign({}, e, {
                    onDismiss: () => {
                      this.clear();
                    },
                    darkMode: this.darkMode,
                  })
                ),
                this.root
              ));
        }
      }
      let ez = ({ title: e, buttonText: t, darkMode: n, onButtonClick: r, onDismiss: i }) =>
          (0, eR.h)(
            ej,
            { darkMode: n },
            (0, eR.h)(
              'div',
              { class: '-cbwsdk-redirect-dialog' },
              (0, eR.h)(
                'style',
                null,
                '.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}'
              ),
              (0, eR.h)('div', { class: '-cbwsdk-redirect-dialog-backdrop', onClick: i }),
              (0, eR.h)(
                'div',
                { class: (0, eN.clsx)('-cbwsdk-redirect-dialog-box', n ? 'dark' : 'light') },
                (0, eR.h)('p', null, e),
                (0, eR.h)('button', { onClick: r }, t)
              )
            )
          ),
        eK = 'https://www.walletlink.org';
      class eH {
        constructor() {
          (this.attached = !1), (this.redirectDialog = new eq());
        }
        attach() {
          if (this.attached) throw Error('Coinbase Wallet SDK UI is already attached');
          this.redirectDialog.attach(), (this.attached = !0);
        }
        redirectToCoinbaseWallet(e) {
          let t = new URL('https://go.cb-w.com/walletlink');
          t.searchParams.append(
            'redirect_url',
            (function () {
              try {
                if (
                  (function () {
                    try {
                      return null !== window.frameElement;
                    } catch (e) {
                      return !1;
                    }
                  })() &&
                  window.top
                )
                  return window.top.location;
                return window.location;
              } catch (e) {
                return window.location;
              }
            })().href
          ),
            e && t.searchParams.append('wl_url', e);
          let n = document.createElement('a');
          (n.target = 'cbw-opener'), (n.href = t.href), (n.rel = 'noreferrer noopener'), n.click();
        }
        openCoinbaseWalletDeeplink(e) {
          this.redirectDialog.present({
            title: 'Redirecting to Coinbase Wallet...',
            buttonText: 'Open',
            onButtonClick: () => {
              this.redirectToCoinbaseWallet(e);
            },
          }),
            setTimeout(() => {
              this.redirectToCoinbaseWallet(e);
            }, 99);
        }
        showConnecting(e) {
          return () => {
            this.redirectDialog.clear();
          };
        }
      }
      class eB {
        constructor(e) {
          var t;
          (this.chainCallbackParams = { chainId: '', jsonRpcUrl: '' }),
            (this.isMobileWeb =
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                null === (t = null == window ? void 0 : window.navigator) || void 0 === t
                  ? void 0
                  : t.userAgent
              )),
            (this.linkedUpdated = (e) => {
              this.isLinked = e;
              let t = this.storage.getItem(ed);
              if ((e && (this._session.linked = e), (this.isUnlinkedErrorState = !1), t)) {
                let n = t.split(' '),
                  r = 'true' === this.storage.getItem('IsStandaloneSigning');
                '' === n[0] || e || !this._session.linked || r || (this.isUnlinkedErrorState = !0);
              }
            }),
            (this.metadataUpdated = (e, t) => {
              this.storage.setItem(e, t);
            }),
            (this.chainUpdated = (e, t) => {
              (this.chainCallbackParams.chainId !== e ||
                this.chainCallbackParams.jsonRpcUrl !== t) &&
                ((this.chainCallbackParams = { chainId: e, jsonRpcUrl: t }),
                this.chainCallback && this.chainCallback(t, Number.parseInt(e, 10)));
            }),
            (this.accountUpdated = (e) => {
              this.accountsCallback && this.accountsCallback([e]),
                eB.accountRequestCallbackIds.size > 0 &&
                  (Array.from(eB.accountRequestCallbackIds.values()).forEach((t) => {
                    this.invokeCallback(t, { method: 'requestEthereumAccounts', result: [e] });
                  }),
                  eB.accountRequestCallbackIds.clear());
            }),
            (this.resetAndReload = this.resetAndReload.bind(this)),
            (this.linkAPIUrl = e.linkAPIUrl),
            (this.storage = e.storage),
            (this.metadata = e.metadata),
            (this.accountsCallback = e.accountsCallback),
            (this.chainCallback = e.chainCallback);
          let { session: n, ui: r, connection: i } = this.subscribe();
          (this._session = n),
            (this.connection = i),
            (this.relayEventManager = new e_()),
            (this.ui = r),
            this.ui.attach();
        }
        subscribe() {
          let e = eP.load(this.storage) || eP.create(this.storage),
            { linkAPIUrl: t } = this,
            n = new em({ session: e, linkAPIUrl: t, listener: this }),
            r = this.isMobileWeb ? new eH() : new eW();
          return n.connect(), { session: e, ui: r, connection: n };
        }
        resetAndReload() {
          this.connection
            .destroy()
            .then(() => {
              let e = eP.load(this.storage);
              (null == e ? void 0 : e.id) === this._session.id && i.clearAll(),
                document.location.reload();
            })
            .catch((e) => {});
        }
        signEthereumTransaction(e) {
          return this.sendRequest({
            method: 'signEthereumTransaction',
            params: {
              fromAddress: e.fromAddress,
              toAddress: e.toAddress,
              weiValue: D(e.weiValue),
              data: P(e.data, !0),
              nonce: e.nonce,
              gasPriceInWei: e.gasPriceInWei ? D(e.gasPriceInWei) : null,
              maxFeePerGas: e.gasPriceInWei ? D(e.gasPriceInWei) : null,
              maxPriorityFeePerGas: e.gasPriceInWei ? D(e.gasPriceInWei) : null,
              gasLimit: e.gasLimit ? D(e.gasLimit) : null,
              chainId: e.chainId,
              shouldSubmit: !1,
            },
          });
        }
        signAndSubmitEthereumTransaction(e) {
          return this.sendRequest({
            method: 'signEthereumTransaction',
            params: {
              fromAddress: e.fromAddress,
              toAddress: e.toAddress,
              weiValue: D(e.weiValue),
              data: P(e.data, !0),
              nonce: e.nonce,
              gasPriceInWei: e.gasPriceInWei ? D(e.gasPriceInWei) : null,
              maxFeePerGas: e.maxFeePerGas ? D(e.maxFeePerGas) : null,
              maxPriorityFeePerGas: e.maxPriorityFeePerGas ? D(e.maxPriorityFeePerGas) : null,
              gasLimit: e.gasLimit ? D(e.gasLimit) : null,
              chainId: e.chainId,
              shouldSubmit: !0,
            },
          });
        }
        submitEthereumTransaction(e, t) {
          return this.sendRequest({
            method: 'submitEthereumTransaction',
            params: { signedTransaction: P(e, !0), chainId: t },
          });
        }
        getWalletLinkSession() {
          return this._session;
        }
        sendRequest(e) {
          let t = null,
            n = S(8),
            r = (r) => {
              this.publishWeb3RequestCanceledEvent(n),
                this.handleErrorResponse(n, e.method, r),
                null == t || t();
            };
          return new Promise((i, s) => {
            (t = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: r,
              onResetConnection: this.resetAndReload,
            })),
              this.relayEventManager.callbacks.set(n, (e) => {
                if ((null == t || t(), eh(e))) return s(Error(e.errorMessage));
                i(e);
              }),
              this.publishWeb3RequestEvent(n, e);
          });
        }
        publishWeb3RequestEvent(e, t) {
          let n = { type: 'WEB3_REQUEST', id: e, request: t };
          this.publishEvent('Web3Request', n, !0)
            .then((e) => {})
            .catch((e) => {
              this.handleWeb3ResponseMessage(n.id, { method: t.method, errorMessage: e.message });
            }),
            this.isMobileWeb && this.openCoinbaseWalletDeeplink(t.method);
        }
        openCoinbaseWalletDeeplink(e) {
          if (this.ui instanceof eH)
            switch (e) {
              case 'requestEthereumAccounts':
              case 'switchEthereumChain':
                return;
              default:
                window.addEventListener(
                  'blur',
                  () => {
                    window.addEventListener(
                      'focus',
                      () => {
                        this.connection.checkUnseenEvents();
                      },
                      { once: !0 }
                    );
                  },
                  { once: !0 }
                ),
                  this.ui.openCoinbaseWalletDeeplink();
            }
        }
        publishWeb3RequestCanceledEvent(e) {
          this.publishEvent(
            'Web3RequestCanceled',
            { type: 'WEB3_REQUEST_CANCELED', id: e },
            !1
          ).then();
        }
        publishEvent(e, t, n) {
          return this.connection.publishEvent(e, t, n);
        }
        handleWeb3ResponseMessage(e, t) {
          if ('requestEthereumAccounts' === t.method) {
            eB.accountRequestCallbackIds.forEach((e) => this.invokeCallback(e, t)),
              eB.accountRequestCallbackIds.clear();
            return;
          }
          this.invokeCallback(e, t);
        }
        handleErrorResponse(e, t, n) {
          var r;
          let i =
            null !== (r = null == n ? void 0 : n.message) && void 0 !== r
              ? r
              : 'Unspecified error message.';
          this.handleWeb3ResponseMessage(e, { method: t, errorMessage: i });
        }
        invokeCallback(e, t) {
          let n = this.relayEventManager.callbacks.get(e);
          n && (n(t), this.relayEventManager.callbacks.delete(e));
        }
        requestEthereumAccounts() {
          let { appName: e, appLogoUrl: t } = this.metadata,
            n = { method: 'requestEthereumAccounts', params: { appName: e, appLogoUrl: t } },
            r = S(8);
          return new Promise((e, t) => {
            this.relayEventManager.callbacks.set(r, (n) => {
              if (eh(n)) return t(Error(n.errorMessage));
              e(n);
            }),
              eB.accountRequestCallbackIds.add(r),
              this.publishWeb3RequestEvent(r, n);
          });
        }
        watchAsset(e, t, n, r, i, s) {
          let a = {
              method: 'watchAsset',
              params: {
                type: e,
                options: { address: t, symbol: n, decimals: r, image: i },
                chainId: s,
              },
            },
            o = null,
            c = S(8);
          return (
            (o = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(c),
                  this.handleErrorResponse(c, a.method, e),
                  null == o || o();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(c, (n) => {
                if ((null == o || o(), eh(n))) return t(Error(n.errorMessage));
                e(n);
              }),
                this.publishWeb3RequestEvent(c, a);
            })
          );
        }
        addEthereumChain(e, t, n, r, i, s) {
          let a = {
              method: 'addEthereumChain',
              params: {
                chainId: e,
                rpcUrls: t,
                blockExplorerUrls: r,
                chainName: i,
                iconUrls: n,
                nativeCurrency: s,
              },
            },
            o = null,
            c = S(8);
          return (
            (o = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(c),
                  this.handleErrorResponse(c, a.method, e),
                  null == o || o();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(c, (n) => {
                if ((null == o || o(), eh(n))) return t(Error(n.errorMessage));
                e(n);
              }),
                this.publishWeb3RequestEvent(c, a);
            })
          );
        }
        switchEthereumChain(e, t) {
          let n = {
              method: 'switchEthereumChain',
              params: Object.assign({ chainId: e }, { address: t }),
            },
            r = null,
            i = S(8);
          return (
            (r = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(i),
                  this.handleErrorResponse(i, n.method, e),
                  null == r || r();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(i, (n) =>
                (null == r || r(), eh(n) && n.errorCode)
                  ? t(
                      h.provider.custom({
                        code: n.errorCode,
                        message:
                          'Unrecognized chain ID. Try adding the chain using addEthereumChain first.',
                      })
                    )
                  : eh(n)
                    ? t(Error(n.errorMessage))
                    : void e(n)
              ),
                this.publishWeb3RequestEvent(i, n);
            })
          );
        }
      }
      eB.accountRequestCallbackIds = new Set();
      var eF = n(87150).Buffer;
      let eG = 'DefaultChainId',
        e$ = 'DefaultJsonRpcUrl';
      class eJ {
        constructor(e) {
          (this._relay = null),
            (this._addresses = []),
            (this.metadata = e.metadata),
            (this._storage = new i('walletlink', eK)),
            (this.callback = e.callback || null);
          let t = this._storage.getItem(ed);
          if (t) {
            let e = t.split(' ');
            '' !== e[0] && (this._addresses = e.map((e) => W(e)));
          }
          this.initializeRelay();
        }
        getSession() {
          let { id: e, secret: t } = this.initializeRelay().getWalletLinkSession();
          return { id: e, secret: t };
        }
        async handshake() {
          await this._eth_requestAccounts();
        }
        get selectedAddress() {
          return this._addresses[0] || void 0;
        }
        get jsonRpcUrl() {
          var e;
          return null !== (e = this._storage.getItem(e$)) && void 0 !== e ? e : void 0;
        }
        set jsonRpcUrl(e) {
          this._storage.setItem(e$, e);
        }
        updateProviderInfo(e, t) {
          var n;
          this.jsonRpcUrl = e;
          let r = this.getChainId();
          this._storage.setItem(eG, t.toString(10)),
            z(t) !== r &&
              (null === (n = this.callback) || void 0 === n || n.call(this, 'chainChanged', N(t)));
        }
        async watchAsset(e) {
          let t = Array.isArray(e) ? e[0] : e;
          if (!t.type) throw h.rpc.invalidParams('Type is required');
          if ((null == t ? void 0 : t.type) !== 'ERC20')
            throw h.rpc.invalidParams(`Asset of type '${t.type}' is not supported`);
          if (!(null == t ? void 0 : t.options)) throw h.rpc.invalidParams('Options are required');
          if (!(null == t ? void 0 : t.options.address))
            throw h.rpc.invalidParams('Address is required');
          let n = this.getChainId(),
            { address: r, symbol: i, image: s, decimals: a } = t.options,
            o = this.initializeRelay(),
            c = await o.watchAsset(t.type, r, i, a, s, null == n ? void 0 : n.toString());
          return !eh(c) && !!c.result;
        }
        async addEthereumChain(e) {
          var t, n;
          let r = e[0];
          if ((null === (t = r.rpcUrls) || void 0 === t ? void 0 : t.length) === 0)
            throw h.rpc.invalidParams('please pass in at least 1 rpcUrl');
          if (!r.chainName || '' === r.chainName.trim())
            throw h.rpc.invalidParams('chainName is a required field');
          if (!r.nativeCurrency) throw h.rpc.invalidParams('nativeCurrency is a required field');
          let i = Number.parseInt(r.chainId, 16);
          if (i === this.getChainId()) return !1;
          let s = this.initializeRelay(),
            {
              rpcUrls: a = [],
              blockExplorerUrls: o = [],
              chainName: c,
              iconUrls: l = [],
              nativeCurrency: u,
            } = r,
            d = await s.addEthereumChain(i.toString(), a, l, o, c, u);
          if (eh(d)) return !1;
          if ((null === (n = d.result) || void 0 === n ? void 0 : n.isApproved) === !0)
            return this.updateProviderInfo(a[0], i), null;
          throw h.rpc.internal('unable to add ethereum chain');
        }
        async switchEthereumChain(e) {
          let t = Number.parseInt(e[0].chainId, 16),
            n = this.initializeRelay(),
            r = await n.switchEthereumChain(t.toString(10), this.selectedAddress || void 0);
          if (eh(r)) throw r;
          let i = r.result;
          return i.isApproved && i.rpcUrl.length > 0 && this.updateProviderInfo(i.rpcUrl, t), null;
        }
        async cleanup() {
          (this.callback = null),
            this._relay && this._relay.resetAndReload(),
            this._storage.clear();
        }
        _setAddresses(e, t) {
          var n;
          if (!Array.isArray(e)) throw Error('addresses is not an array');
          let r = e.map((e) => W(e));
          JSON.stringify(r) !== JSON.stringify(this._addresses) &&
            ((this._addresses = r),
            null === (n = this.callback) || void 0 === n || n.call(this, 'accountsChanged', r),
            this._storage.setItem(ed, r.join(' ')));
        }
        async request(e) {
          let t = e.params || [];
          switch (e.method) {
            case 'eth_accounts':
              return [...this._addresses];
            case 'eth_coinbase':
              return this.selectedAddress || null;
            case 'net_version':
              return this.getChainId().toString(10);
            case 'eth_chainId':
              return N(this.getChainId());
            case 'eth_requestAccounts':
              return this._eth_requestAccounts();
            case 'eth_ecRecover':
            case 'personal_ecRecover':
              return this.ecRecover(e);
            case 'personal_sign':
              return this.personalSign(e);
            case 'eth_signTransaction':
              return this._eth_signTransaction(t);
            case 'eth_sendRawTransaction':
              return this._eth_sendRawTransaction(t);
            case 'eth_sendTransaction':
              return this._eth_sendTransaction(t);
            case 'eth_signTypedData_v1':
            case 'eth_signTypedData_v3':
            case 'eth_signTypedData_v4':
            case 'eth_signTypedData':
              return this.signTypedData(e);
            case 'wallet_addEthereumChain':
              return this.addEthereumChain(t);
            case 'wallet_switchEthereumChain':
              return this.switchEthereumChain(t);
            case 'wallet_watchAsset':
              return this.watchAsset(t);
            default:
              if (!this.jsonRpcUrl) throw h.rpc.internal('No RPC URL set for chain');
              return ei(e, this.jsonRpcUrl);
          }
        }
        _ensureKnownAddress(e) {
          let t = W(e);
          if (!this._addresses.map((e) => W(e)).includes(t))
            throw Error('Unknown Ethereum address');
        }
        _prepareTransactionParams(e) {
          let t = e.from ? W(e.from) : this.selectedAddress;
          if (!t) throw Error('Ethereum address is unavailable');
          this._ensureKnownAddress(t);
          let n = e.to ? W(e.to) : null,
            r = null != e.value ? K(e.value) : BigInt(0),
            i = e.data ? q(e.data) : eF.alloc(0),
            s = null != e.nonce ? z(e.nonce) : null,
            a = null != e.gasPrice ? K(e.gasPrice) : null,
            o = null != e.maxFeePerGas ? K(e.maxFeePerGas) : null;
          return {
            fromAddress: t,
            toAddress: n,
            weiValue: r,
            data: i,
            nonce: s,
            gasPriceInWei: a,
            maxFeePerGas: o,
            maxPriorityFeePerGas: null != e.maxPriorityFeePerGas ? K(e.maxPriorityFeePerGas) : null,
            gasLimit: null != e.gas ? K(e.gas) : null,
            chainId: e.chainId ? z(e.chainId) : this.getChainId(),
          };
        }
        async ecRecover(e) {
          let { method: t, params: n } = e;
          if (!Array.isArray(n)) throw h.rpc.invalidParams();
          let r = this.initializeRelay(),
            i = await r.sendRequest({
              method: 'ethereumAddressFromSignedMessage',
              params: {
                message: L(n[0]),
                signature: L(n[1]),
                addPrefix: 'personal_ecRecover' === t,
              },
            });
          if (eh(i)) throw i;
          return i.result;
        }
        getChainId() {
          var e;
          return Number.parseInt(
            null !== (e = this._storage.getItem(eG)) && void 0 !== e ? e : '1',
            10
          );
        }
        async _eth_requestAccounts() {
          var e, t;
          if (this._addresses.length > 0)
            return (
              null === (e = this.callback) ||
                void 0 === e ||
                e.call(this, 'connect', { chainId: N(this.getChainId()) }),
              this._addresses
            );
          let n = this.initializeRelay(),
            r = await n.requestEthereumAccounts();
          if (eh(r)) throw r;
          if (!r.result) throw Error('accounts received is empty');
          return (
            this._setAddresses(r.result),
            null === (t = this.callback) ||
              void 0 === t ||
              t.call(this, 'connect', { chainId: N(this.getChainId()) }),
            this._addresses
          );
        }
        async personalSign({ params: e }) {
          if (!Array.isArray(e)) throw h.rpc.invalidParams();
          let t = e[1],
            n = e[0];
          this._ensureKnownAddress(t);
          let r = this.initializeRelay(),
            i = await r.sendRequest({
              method: 'signEthereumMessage',
              params: { address: W(t), message: L(n), addPrefix: !0, typedDataJson: null },
            });
          if (eh(i)) throw i;
          return i.result;
        }
        async _eth_signTransaction(e) {
          let t = this._prepareTransactionParams(e[0] || {}),
            n = this.initializeRelay(),
            r = await n.signEthereumTransaction(t);
          if (eh(r)) throw r;
          return r.result;
        }
        async _eth_sendRawTransaction(e) {
          let t = q(e[0]),
            n = this.initializeRelay(),
            r = await n.submitEthereumTransaction(t, this.getChainId());
          if (eh(r)) throw r;
          return r.result;
        }
        async _eth_sendTransaction(e) {
          let t = this._prepareTransactionParams(e[0] || {}),
            n = this.initializeRelay(),
            r = await n.signAndSubmitEthereumTransaction(t);
          if (eh(r)) throw r;
          return r.result;
        }
        async signTypedData(e) {
          let { method: t, params: n } = e;
          if (!Array.isArray(n)) throw h.rpc.invalidParams();
          let r = n['eth_signTypedData_v1' === t ? 1 : 0],
            i = n['eth_signTypedData_v1' === t ? 0 : 1];
          this._ensureKnownAddress(r);
          let s = this.initializeRelay(),
            a = await s.sendRequest({
              method: 'signEthereumMessage',
              params: {
                address: W(r),
                message: P(
                  {
                    eth_signTypedData_v1: eu.hashForSignTypedDataLegacy,
                    eth_signTypedData_v3: eu.hashForSignTypedData_v3,
                    eth_signTypedData_v4: eu.hashForSignTypedData_v4,
                    eth_signTypedData: eu.hashForSignTypedData_v4,
                  }[t]({
                    data: (function (e) {
                      if ('string' == typeof e) return JSON.parse(e);
                      if ('object' == typeof e) return e;
                      throw h.rpc.invalidParams(`Not a JSON string or an object: ${String(e)}`);
                    })(i),
                  }),
                  !0
                ),
                typedDataJson: JSON.stringify(i, null, 2),
                addPrefix: !1,
              },
            });
          if (eh(a)) throw a;
          return a.result;
        }
        initializeRelay() {
          return (
            this._relay ||
              (this._relay = new eB({
                linkAPIUrl: eK,
                storage: this._storage,
                metadata: this.metadata,
                accountsCallback: this._setAddresses.bind(this),
                chainCallback: this.updateProviderInfo.bind(this),
              })),
            this._relay
          );
        }
      }
      let eV = 'SignerType',
        eY = new i('CBWSDK', 'SignerConfigurator');
      async function eQ(e) {
        let { communicator: t, metadata: n, handshakeRequest: r, callback: i } = e;
        eZ(t, n, i).catch(() => {});
        let s = {
            id: crypto.randomUUID(),
            event: 'selectSignerType',
            data: Object.assign(Object.assign({}, e.preference), { handshakeRequest: r }),
          },
          { data: a } = await t.postRequestAndWaitForResponse(s);
        return a;
      }
      async function eZ(e, t, n) {
        await e.onMessage(({ event: e }) => 'WalletLinkSessionRequest' === e);
        let r = new eJ({ metadata: t, callback: n });
        e.postMessage({ event: 'WalletLinkUpdate', data: { session: r.getSession() } }),
          await r.handshake(),
          e.postMessage({ event: 'WalletLinkUpdate', data: { connected: !0 } });
      }
      let eX = `Coinbase Wallet SDK requires the Cross-Origin-Opener-Policy header to not be set to 'same-origin'. This is to ensure that the SDK can communicate with the Coinbase Smart Wallet app.

Please see https://www.smartwallet.dev/guides/tips/popup-tips#cross-origin-opener-policy for more information.`,
        { checkCrossOriginOpenerPolicy: e0, getCrossOriginOpenerPolicy: e2 } = {
          getCrossOriginOpenerPolicy: () => (void 0 === r ? 'undefined' : r),
          checkCrossOriginOpenerPolicy: async () => {
            if ('undefined' == typeof window) {
              r = 'non-browser-env';
              return;
            }
            try {
              let e = `${window.location.origin}${window.location.pathname}`,
                t = await fetch(e, { method: 'HEAD' });
              if (!t.ok) throw Error(`HTTP error! status: ${t.status}`);
              let n = t.headers.get('Cross-Origin-Opener-Policy');
              (r = null != n ? n : 'null'), 'same-origin' === r && console.error(eX);
            } catch (e) {
              console.error('Error checking Cross-Origin-Opener-Policy:', e.message), (r = 'error');
            }
          },
        };
      class e1 {
        constructor({ url: e = 'https://keys.coinbase.com/connect', metadata: t, preference: n }) {
          (this.popup = null),
            (this.listeners = new Map()),
            (this.postMessage = async (e) => {
              (await this.waitForPopupLoaded()).postMessage(e, this.url.origin);
            }),
            (this.postRequestAndWaitForResponse = async (e) => {
              let t = this.onMessage(({ requestId: t }) => t === e.id);
              return this.postMessage(e), await t;
            }),
            (this.onMessage = async (e) =>
              new Promise((t, n) => {
                let r = (n) => {
                  if (n.origin !== this.url.origin) return;
                  let i = n.data;
                  e(i) &&
                    (t(i), window.removeEventListener('message', r), this.listeners.delete(r));
                };
                window.addEventListener('message', r), this.listeners.set(r, { reject: n });
              })),
            (this.disconnect = () => {
              var e;
              (e = this.popup) && !e.closed && e.close(),
                (this.popup = null),
                this.listeners.forEach(({ reject: e }, t) => {
                  e(h.provider.userRejectedRequest('Request rejected')),
                    window.removeEventListener('message', t);
                }),
                this.listeners.clear();
            }),
            (this.waitForPopupLoaded = async () =>
              this.popup && !this.popup.closed
                ? (this.popup.focus(), this.popup)
                : ((this.popup = (function (e) {
                    let t = (window.innerWidth - 420) / 2 + window.screenX,
                      n = (window.innerHeight - 540) / 2 + window.screenY;
                    (function (e) {
                      for (let [t, n] of Object.entries({
                        sdkName: er,
                        sdkVersion: en,
                        origin: window.location.origin,
                        coop: e2(),
                      }))
                        e.searchParams.append(t, n.toString());
                    })(e);
                    let r = `wallet_${crypto.randomUUID()}`,
                      i = window.open(e, r, `width=420, height=540, left=${t}, top=${n}`);
                    if ((null == i || i.focus(), !i))
                      throw h.rpc.internal('Pop up window failed to open');
                    return i;
                  })(this.url)),
                  this.onMessage(({ event: e }) => 'PopupUnload' === e)
                    .then(this.disconnect)
                    .catch(() => {}),
                  this.onMessage(({ event: e }) => 'PopupLoaded' === e)
                    .then((e) => {
                      this.postMessage({
                        requestId: e.id,
                        data: {
                          version: en,
                          metadata: this.metadata,
                          preference: this.preference,
                          location: window.location.toString(),
                        },
                      });
                    })
                    .then(() => {
                      if (!this.popup) throw h.rpc.internal();
                      return this.popup;
                    }))),
            (this.url = new URL(e)),
            (this.metadata = t),
            (this.preference = n);
        }
      }
      var e3 = n(66467);
      class e4 extends e3.v {}
      var e5 = function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
          for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            0 > t.indexOf(r[i]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (n[r[i]] = e[r[i]]);
        return n;
      };
      class e8 extends e4 {
        constructor(e) {
          var { metadata: t } = e,
            n = e.preference,
            { keysUrl: r } = n,
            i = e5(n, ['keysUrl']);
          super(),
            (this.signer = null),
            (this.isCoinbaseWallet = !0),
            (this.metadata = t),
            (this.preference = i),
            (this.communicator = new e1({ url: r, metadata: t, preference: i }));
          let s = eY.getItem(eV);
          s && (this.signer = this.initSigner(s));
        }
        async request(e) {
          try {
            if (
              (!(function (e) {
                if (!e || 'object' != typeof e || Array.isArray(e))
                  throw h.rpc.invalidParams({
                    message: 'Expected a single, non-array, object argument.',
                    data: e,
                  });
                let { method: t, params: n } = e;
                if ('string' != typeof t || 0 === t.length)
                  throw h.rpc.invalidParams({
                    message: "'args.method' must be a non-empty string.",
                    data: e,
                  });
                if (void 0 !== n && !Array.isArray(n) && ('object' != typeof n || null === n))
                  throw h.rpc.invalidParams({
                    message: "'args.params' must be an object or array if provided.",
                    data: e,
                  });
                switch (t) {
                  case 'eth_sign':
                  case 'eth_signTypedData_v2':
                  case 'eth_subscribe':
                  case 'eth_unsubscribe':
                    throw h.provider.unsupportedMethod();
                }
              })(e),
              !this.signer)
            )
              switch (e.method) {
                case 'eth_requestAccounts': {
                  let t = await this.requestSignerSelection(e),
                    n = this.initSigner(t);
                  await n.handshake(e), (this.signer = n), eY.setItem(eV, t);
                  break;
                }
                case 'wallet_sendCalls': {
                  let t = this.initSigner('scw');
                  await t.handshake({ method: 'handshake' });
                  let n = await t.request(e);
                  return await t.cleanup(), n;
                }
                case 'wallet_getCallsStatus':
                  return ei(e, 'http://rpc.wallet.coinbase.com');
                case 'net_version':
                  return 1;
                case 'eth_chainId':
                  return N(1);
                default:
                  throw h.provider.unauthorized(
                    "Must call 'eth_requestAccounts' before other methods"
                  );
              }
            return await this.signer.request(e);
          } catch (t) {
            let { code: e } = t;
            return (
              e === s.provider.unauthorized && this.disconnect(),
              Promise.reject(
                (function (e) {
                  let t = (function (e, { shouldIncludeStack: t = !1 } = {}) {
                      var n, r;
                      let i = {};
                      return (
                        e &&
                        'object' == typeof e &&
                        !Array.isArray(e) &&
                        u(e, 'code') &&
                        Number.isInteger((n = e.code)) &&
                        (a[n.toString()] || ((r = n) >= -32099 && r <= -32e3))
                          ? ((i.code = e.code),
                            e.message && 'string' == typeof e.message
                              ? ((i.message = e.message), u(e, 'data') && (i.data = e.data))
                              : ((i.message = c(i.code)), (i.data = { originalError: l(e) })))
                          : ((i.code = s.rpc.internal),
                            (i.message = d(e, 'message') ? e.message : o),
                            (i.data = { originalError: l(e) })),
                        t && (i.stack = d(e, 'stack') ? e.stack : void 0),
                        i
                      );
                    })(
                      (function (e) {
                        var t;
                        if ('string' == typeof e) return { message: e, code: s.rpc.internal };
                        if (eh(e)) {
                          let n = e.errorMessage,
                            r =
                              null !== (t = e.errorCode) && void 0 !== t
                                ? t
                                : n.match(/(denied|rejected)/i)
                                  ? s.provider.userRejectedRequest
                                  : void 0;
                          return Object.assign(Object.assign({}, e), {
                            message: n,
                            code: r,
                            data: { method: e.method },
                          });
                        }
                        return e;
                      })(e),
                      { shouldIncludeStack: !0 }
                    ),
                    n = new URL('https://docs.cloud.coinbase.com/wallet-sdk/docs/errors');
                  return (
                    n.searchParams.set('version', en),
                    n.searchParams.set('code', t.code.toString()),
                    n.searchParams.set('message', t.message),
                    Object.assign(Object.assign({}, t), { docUrl: n.href })
                  );
                })(t)
              )
            );
          }
        }
        async enable() {
          return (
            console.warn(
              '.enable() has been deprecated. Please use .request({ method: "eth_requestAccounts" }) instead.'
            ),
            await this.request({ method: 'eth_requestAccounts' })
          );
        }
        async disconnect() {
          var e;
          await (null === (e = this.signer) || void 0 === e ? void 0 : e.cleanup()),
            (this.signer = null),
            i.clearAll(),
            this.emit('disconnect', h.provider.disconnected('User initiated disconnection'));
        }
        requestSignerSelection(e) {
          return eQ({
            communicator: this.communicator,
            preference: this.preference,
            metadata: this.metadata,
            handshakeRequest: e,
            callback: this.emit.bind(this),
          });
        }
        initSigner(e) {
          return (function (e) {
            let { signerType: t, metadata: n, communicator: r, callback: i } = e;
            switch (t) {
              case 'scw':
                return new el({ metadata: n, callback: i, communicator: r });
              case 'walletlink':
                return new eJ({ metadata: n, callback: i });
            }
          })({
            signerType: e,
            metadata: this.metadata,
            communicator: this.communicator,
            callback: this.emit.bind(this),
          });
        }
      }
      let e7 = { options: 'all' };
      function e6(e) {
        var t;
        new i('CBWSDK').setItem('VERSION', en), e0();
        let n = {
          metadata: {
            appName: e.appName || 'Dapp',
            appLogoUrl: e.appLogoUrl || '',
            appChainIds: e.appChainIds || [],
          },
          preference: Object.assign(e7, null !== (t = e.preference) && void 0 !== t ? t : {}),
        };
        !(function (e) {
          if (e) {
            if (!['all', 'smartWalletOnly', 'eoaOnly'].includes(e.options))
              throw Error(`Invalid options: ${e.options}`);
            if (
              e.attribution &&
              void 0 !== e.attribution.auto &&
              void 0 !== e.attribution.dataSuffix
            )
              throw Error('Attribution cannot contain both auto and dataSuffix properties');
          }
        })(n.preference);
        let r = null;
        return {
          getProvider: () => (
            r ||
              (r = (function (e) {
                var t;
                let n = { metadata: e.metadata, preference: e.preference };
                return null !==
                  (t = (function ({ metadata: e, preference: t }) {
                    var n, r;
                    let { appName: i, appLogoUrl: s, appChainIds: a } = e;
                    if ('smartWalletOnly' !== t.options) {
                      let e = globalThis.coinbaseWalletExtension;
                      if (e)
                        return (
                          null === (n = e.setAppInfo) || void 0 === n || n.call(e, i, s, a, t), e
                        );
                    }
                    let o = (function () {
                      var e, t;
                      try {
                        let n = globalThis;
                        return null !== (e = n.ethereum) && void 0 !== e
                          ? e
                          : null === (t = n.top) || void 0 === t
                            ? void 0
                            : t.ethereum;
                      } catch (e) {
                        return;
                      }
                    })();
                    if (null == o ? void 0 : o.isCoinbaseBrowser)
                      return (
                        null === (r = o.setAppInfo) || void 0 === r || r.call(o, i, s, a, t), o
                      );
                  })(n)) && void 0 !== t
                  ? t
                  : new e8(n);
              })(n)),
            r
          ),
        };
      }
    },
    2217: function (e, t, n) {
      'use strict';
      n.d(t, {
        $p: function () {
          return d;
        },
        EP: function () {
          return h;
        },
        FL: function () {
          return u;
        },
        Fn: function () {
          return b;
        },
        IH: function () {
          return m;
        },
        Iq: function () {
          return o;
        },
        NI: function () {
          return a;
        },
        Ou: function () {
          return l;
        },
        SD: function () {
          return f;
        },
        Vl: function () {
          return s;
        },
        Xb: function () {
          return y;
        },
        ac: function () {
          return _;
        },
        gm: function () {
          return p;
        },
        m_: function () {
          return c;
        },
        mk: function () {
          return g;
        },
        pp: function () {
          return k;
        },
        u8: function () {
          return w;
        },
        zP: function () {
          return v;
        },
      });
      let r = BigInt(4294967296 - 1),
        i = BigInt(32);
      function s(e, t = !1) {
        let n = e.length,
          s = new Uint32Array(n),
          a = new Uint32Array(n);
        for (let o = 0; o < n; o++) {
          let { h: n, l: c } = (function (e, t = !1) {
            return t
              ? { h: Number(e & r), l: Number((e >> i) & r) }
              : { h: 0 | Number((e >> i) & r), l: 0 | Number(e & r) };
          })(e[o], t);
          [s[o], a[o]] = [n, c];
        }
        return [s, a];
      }
      let a = (e, t, n) => e >>> n,
        o = (e, t, n) => (e << (32 - n)) | (t >>> n),
        c = (e, t, n) => (e >>> n) | (t << (32 - n)),
        l = (e, t, n) => (e << (32 - n)) | (t >>> n),
        u = (e, t, n) => (e << (64 - n)) | (t >>> (n - 32)),
        d = (e, t, n) => (e >>> (n - 32)) | (t << (64 - n)),
        h = (e, t, n) => (e << n) | (t >>> (32 - n)),
        p = (e, t, n) => (t << n) | (e >>> (32 - n)),
        f = (e, t, n) => (t << (n - 32)) | (e >>> (64 - n)),
        g = (e, t, n) => (e << (n - 32)) | (t >>> (64 - n));
      function m(e, t, n, r) {
        let i = (t >>> 0) + (r >>> 0);
        return { h: (e + n + ((i / 4294967296) | 0)) | 0, l: 0 | i };
      }
      let _ = (e, t, n) => (e >>> 0) + (t >>> 0) + (n >>> 0),
        b = (e, t, n, r) => (t + n + r + ((e / 4294967296) | 0)) | 0,
        y = (e, t, n, r) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0),
        w = (e, t, n, r, i) => (t + n + r + i + ((e / 4294967296) | 0)) | 0,
        v = (e, t, n, r, i) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0) + (i >>> 0),
        k = (e, t, n, r, i, s) => (t + n + r + i + s + ((e / 4294967296) | 0)) | 0;
    },
    5965: function (e, t, n) {
      'use strict';
      function r(e) {
        if (!Number.isSafeInteger(e) || e < 0) throw Error('positive integer expected, got ' + e);
      }
      function i(e, ...t) {
        if (
          !(
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && 'Uint8Array' === e.constructor.name)
          )
        )
          throw Error('Uint8Array expected');
        if (t.length > 0 && !t.includes(e.length))
          throw Error('Uint8Array expected of length ' + t + ', got length=' + e.length);
      }
      function s(e, t = !0) {
        if (e.destroyed) throw Error('Hash instance has been destroyed');
        if (t && e.finished) throw Error('Hash#digest() has already been called');
      }
      function a(e, t) {
        i(e);
        let n = t.outputLen;
        if (e.length < n) throw Error('digestInto() expects output buffer of length at least ' + n);
      }
      function o(e) {
        return new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
      }
      function c(...e) {
        for (let t = 0; t < e.length; t++) e[t].fill(0);
      }
      function l(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function u(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      n.d(t, {
        $h: function () {
          return s;
        },
        GL: function () {
          return l;
        },
        Jq: function () {
          return o;
        },
        O0: function () {
          return g;
        },
        Ux: function () {
          return d;
        },
        V1: function () {
          return _;
        },
        ci: function () {
          return f;
        },
        eB: function () {
          return a;
        },
        gk: function () {
          return i;
        },
        k8: function () {
          return r;
        },
        kb: function () {
          return m;
        },
        np: function () {
          return u;
        },
        ru: function () {
          return c;
        },
      });
      let d =
          68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0]
            ? (e) => e
            : function (e) {
                for (let n = 0; n < e.length; n++) {
                  var t;
                  e[n] =
                    (((t = e[n]) << 24) & 4278190080) |
                    ((t << 8) & 16711680) |
                    ((t >>> 8) & 65280) |
                    ((t >>> 24) & 255);
                }
                return e;
              },
        h =
          'function' == typeof Uint8Array.from([]).toHex && 'function' == typeof Uint8Array.fromHex,
        p = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, '0'));
      function f(e) {
        if ((i(e), h)) return e.toHex();
        let t = '';
        for (let n = 0; n < e.length; n++) t += p[e[n]];
        return t;
      }
      function g(e) {
        return (
          'string' == typeof e &&
            (e = (function (e) {
              if ('string' != typeof e) throw Error('string expected');
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          i(e),
          e
        );
      }
      class m {}
      function _(e) {
        let t = (t) => e().update(g(t)).digest(),
          n = e();
        return (t.outputLen = n.outputLen), (t.blockLen = n.blockLen), (t.create = () => e()), t;
      }
    },
  },
]);
