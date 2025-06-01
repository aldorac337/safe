'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9014],
  {
    40966: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      function r() {
        return (r = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(null, arguments);
      }
    },
    84602: function (e, t, n) {
      n.d(t, {
        Cp: function () {
          return s;
        },
        RR: function () {
          return u;
        },
        cv: function () {
          return p;
        },
        dp: function () {
          return m;
        },
        dr: function () {
          return g;
        },
        oo: function () {
          return i;
        },
        uY: function () {
          return h;
        },
        x7: function () {
          return a;
        },
      });
      var r = n(38027);
      function o(e, t, n) {
        let o,
          { reference: i, floating: l } = e,
          a = (0, r.Qq)(t),
          u = (0, r.Wh)(t),
          c = (0, r.I4)(u),
          f = (0, r.k3)(t),
          s = 'y' === a,
          d = i.x + i.width / 2 - l.width / 2,
          p = i.y + i.height / 2 - l.height / 2,
          h = i[c] / 2 - l[c] / 2;
        switch (f) {
          case 'top':
            o = { x: d, y: i.y - l.height };
            break;
          case 'bottom':
            o = { x: d, y: i.y + i.height };
            break;
          case 'right':
            o = { x: i.x + i.width, y: p };
            break;
          case 'left':
            o = { x: i.x - l.width, y: p };
            break;
          default:
            o = { x: i.x, y: i.y };
        }
        switch ((0, r.hp)(t)) {
          case 'start':
            o[u] -= h * (n && s ? -1 : 1);
            break;
          case 'end':
            o[u] += h * (n && s ? -1 : 1);
        }
        return o;
      }
      let i = async (e, t, n) => {
        let {
            placement: r = 'bottom',
            strategy: i = 'absolute',
            middleware: l = [],
            platform: a,
          } = n,
          u = l.filter(Boolean),
          c = await (null == a.isRTL ? void 0 : a.isRTL(t)),
          f = await a.getElementRects({ reference: e, floating: t, strategy: i }),
          { x: s, y: d } = o(f, r, c),
          p = r,
          h = {},
          g = 0;
        for (let n = 0; n < u.length; n++) {
          let { name: l, fn: m } = u[n],
            {
              x: y,
              y: w,
              data: v,
              reset: x,
            } = await m({
              x: s,
              y: d,
              initialPlacement: r,
              placement: p,
              strategy: i,
              middlewareData: h,
              rects: f,
              platform: a,
              elements: { reference: e, floating: t },
            });
          if (
            ((s = null != y ? y : s),
            (d = null != w ? w : d),
            (h = { ...h, [l]: { ...h[l], ...v } }),
            x && g <= 50)
          ) {
            g++,
              'object' == typeof x &&
                (x.placement && (p = x.placement),
                x.rects &&
                  (f =
                    !0 === x.rects
                      ? await a.getElementRects({ reference: e, floating: t, strategy: i })
                      : x.rects),
                ({ x: s, y: d } = o(f, p, c))),
              (n = -1);
            continue;
          }
        }
        return { x: s, y: d, placement: p, strategy: i, middlewareData: h };
      };
      async function l(e, t) {
        var n;
        void 0 === t && (t = {});
        let { x: o, y: i, platform: l, rects: a, elements: u, strategy: c } = e,
          {
            boundary: f = 'clippingAncestors',
            rootBoundary: s = 'viewport',
            elementContext: d = 'floating',
            altBoundary: p = !1,
            padding: h = 0,
          } = (0, r.ku)(t, e),
          g = (0, r.yd)(h),
          m = u[p ? ('floating' === d ? 'reference' : 'floating') : d],
          y = (0, r.JB)(
            await l.getClippingRect({
              element:
                null == (n = await (null == l.isElement ? void 0 : l.isElement(m))) || n
                  ? m
                  : m.contextElement ||
                    (await (null == l.getDocumentElement
                      ? void 0
                      : l.getDocumentElement(u.floating))),
              boundary: f,
              rootBoundary: s,
              strategy: c,
            })
          ),
          w = 'floating' === d ? { ...a.floating, x: o, y: i } : a.reference,
          v = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(u.floating)),
          x = ((await (null == l.isElement ? void 0 : l.isElement(v))) &&
            (await (null == l.getScale ? void 0 : l.getScale(v)))) || { x: 1, y: 1 },
          b = (0, r.JB)(
            l.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
                  rect: w,
                  offsetParent: v,
                  strategy: c,
                })
              : w
          );
        return {
          top: (y.top - b.top + g.top) / x.y,
          bottom: (b.bottom - y.bottom + g.bottom) / x.y,
          left: (y.left - b.left + g.left) / x.x,
          right: (b.right - y.right + g.right) / x.x,
        };
      }
      let a = (e) => ({
          name: 'arrow',
          options: e,
          async fn(t) {
            let {
                x: n,
                y: o,
                placement: i,
                rects: l,
                platform: a,
                elements: u,
                middlewareData: c,
              } = t,
              { element: f, padding: s = 0 } = (0, r.ku)(e, t) || {};
            if (null == f) return {};
            let d = (0, r.yd)(s),
              p = { x: n, y: o },
              h = (0, r.Wh)(i),
              g = (0, r.I4)(h),
              m = await a.getDimensions(f),
              y = 'y' === h,
              w = y ? 'clientHeight' : 'clientWidth',
              v = l.reference[g] + l.reference[h] - p[h] - l.floating[g],
              x = p[h] - l.reference[h],
              b = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(f)),
              E = b ? b[w] : 0;
            (E && (await (null == a.isElement ? void 0 : a.isElement(b)))) ||
              (E = u.floating[w] || l.floating[g]);
            let R = E / 2 - m[g] / 2 - 1,
              T = (0, r.VV)(d[y ? 'top' : 'left'], R),
              C = (0, r.VV)(d[y ? 'bottom' : 'right'], R),
              k = E - m[g] - C,
              A = E / 2 - m[g] / 2 + (v / 2 - x / 2),
              P = (0, r.uZ)(T, A, k),
              L =
                !c.arrow &&
                null != (0, r.hp)(i) &&
                A != P &&
                l.reference[g] / 2 - (A < T ? T : C) - m[g] / 2 < 0,
              O = L ? (A < T ? A - T : A - k) : 0;
            return {
              [h]: p[h] + O,
              data: { [h]: P, centerOffset: A - P - O, ...(L && { alignmentOffset: O }) },
              reset: L,
            };
          },
        }),
        u = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: 'flip',
              options: e,
              async fn(t) {
                var n, o, i, a, u;
                let {
                    placement: c,
                    middlewareData: f,
                    rects: s,
                    initialPlacement: d,
                    platform: p,
                    elements: h,
                  } = t,
                  {
                    mainAxis: g = !0,
                    crossAxis: m = !0,
                    fallbackPlacements: y,
                    fallbackStrategy: w = 'bestFit',
                    fallbackAxisSideDirection: v = 'none',
                    flipAlignment: x = !0,
                    ...b
                  } = (0, r.ku)(e, t);
                if (null != (n = f.arrow) && n.alignmentOffset) return {};
                let E = (0, r.k3)(c),
                  R = (0, r.k3)(d) === d,
                  T = await (null == p.isRTL ? void 0 : p.isRTL(h.floating)),
                  C = y || (R || !x ? [(0, r.pw)(d)] : (0, r.gy)(d));
                y || 'none' === v || C.push(...(0, r.KX)(d, x, v, T));
                let k = [d, ...C],
                  A = await l(t, b),
                  P = [],
                  L = (null == (o = f.flip) ? void 0 : o.overflows) || [];
                if ((g && P.push(A[E]), m)) {
                  let e = (0, r.i8)(c, s, T);
                  P.push(A[e[0]], A[e[1]]);
                }
                if (((L = [...L, { placement: c, overflows: P }]), !P.every((e) => e <= 0))) {
                  let e = ((null == (i = f.flip) ? void 0 : i.index) || 0) + 1,
                    t = k[e];
                  if (t) return { data: { index: e, overflows: L }, reset: { placement: t } };
                  let n =
                    null ==
                    (a = L.filter((e) => e.overflows[0] <= 0).sort(
                      (e, t) => e.overflows[1] - t.overflows[1]
                    )[0])
                      ? void 0
                      : a.placement;
                  if (!n)
                    switch (w) {
                      case 'bestFit': {
                        let e =
                          null ==
                          (u = L.map((e) => [
                            e.placement,
                            e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0),
                          ]).sort((e, t) => e[1] - t[1])[0])
                            ? void 0
                            : u[0];
                        e && (n = e);
                        break;
                      }
                      case 'initialPlacement':
                        n = d;
                    }
                  if (c !== n) return { reset: { placement: n } };
                }
                return {};
              },
            }
          );
        };
      function c(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function f(e) {
        return r.mA.some((t) => e[t] >= 0);
      }
      let s = function (e) {
        return (
          void 0 === e && (e = {}),
          {
            name: 'hide',
            options: e,
            async fn(t) {
              let { rects: n } = t,
                { strategy: o = 'referenceHidden', ...i } = (0, r.ku)(e, t);
              switch (o) {
                case 'referenceHidden': {
                  let e = c(await l(t, { ...i, elementContext: 'reference' }), n.reference);
                  return { data: { referenceHiddenOffsets: e, referenceHidden: f(e) } };
                }
                case 'escaped': {
                  let e = c(await l(t, { ...i, altBoundary: !0 }), n.floating);
                  return { data: { escapedOffsets: e, escaped: f(e) } };
                }
                default:
                  return {};
              }
            },
          }
        );
      };
      async function d(e, t) {
        let { placement: n, platform: o, elements: i } = e,
          l = await (null == o.isRTL ? void 0 : o.isRTL(i.floating)),
          a = (0, r.k3)(n),
          u = (0, r.hp)(n),
          c = 'y' === (0, r.Qq)(n),
          f = ['left', 'top'].includes(a) ? -1 : 1,
          s = l && c ? -1 : 1,
          d = (0, r.ku)(t, e),
          {
            mainAxis: p,
            crossAxis: h,
            alignmentAxis: g,
          } = 'number' == typeof d
            ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
            : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d };
        return (
          u && 'number' == typeof g && (h = 'end' === u ? -1 * g : g),
          c ? { x: h * s, y: p * f } : { x: p * f, y: h * s }
        );
      }
      let p = function (e) {
          return (
            void 0 === e && (e = 0),
            {
              name: 'offset',
              options: e,
              async fn(t) {
                var n, r;
                let { x: o, y: i, placement: l, middlewareData: a } = t,
                  u = await d(t, e);
                return l === (null == (n = a.offset) ? void 0 : n.placement) &&
                  null != (r = a.arrow) &&
                  r.alignmentOffset
                  ? {}
                  : { x: o + u.x, y: i + u.y, data: { ...u, placement: l } };
              },
            }
          );
        },
        h = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: 'shift',
              options: e,
              async fn(t) {
                let { x: n, y: o, placement: i } = t,
                  {
                    mainAxis: a = !0,
                    crossAxis: u = !1,
                    limiter: c = {
                      fn: (e) => {
                        let { x: t, y: n } = e;
                        return { x: t, y: n };
                      },
                    },
                    ...f
                  } = (0, r.ku)(e, t),
                  s = { x: n, y: o },
                  d = await l(t, f),
                  p = (0, r.Qq)((0, r.k3)(i)),
                  h = (0, r.Rn)(p),
                  g = s[h],
                  m = s[p];
                if (a) {
                  let e = 'y' === h ? 'top' : 'left',
                    t = 'y' === h ? 'bottom' : 'right',
                    n = g + d[e],
                    o = g - d[t];
                  g = (0, r.uZ)(n, g, o);
                }
                if (u) {
                  let e = 'y' === p ? 'top' : 'left',
                    t = 'y' === p ? 'bottom' : 'right',
                    n = m + d[e],
                    o = m - d[t];
                  m = (0, r.uZ)(n, m, o);
                }
                let y = c.fn({ ...t, [h]: g, [p]: m });
                return { ...y, data: { x: y.x - n, y: y.y - o } };
              },
            }
          );
        },
        g = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              options: e,
              fn(t) {
                let { x: n, y: o, placement: i, rects: l, middlewareData: a } = t,
                  { offset: u = 0, mainAxis: c = !0, crossAxis: f = !0 } = (0, r.ku)(e, t),
                  s = { x: n, y: o },
                  d = (0, r.Qq)(i),
                  p = (0, r.Rn)(d),
                  h = s[p],
                  g = s[d],
                  m = (0, r.ku)(u, t),
                  y =
                    'number' == typeof m
                      ? { mainAxis: m, crossAxis: 0 }
                      : { mainAxis: 0, crossAxis: 0, ...m };
                if (c) {
                  let e = 'y' === p ? 'height' : 'width',
                    t = l.reference[p] - l.floating[e] + y.mainAxis,
                    n = l.reference[p] + l.reference[e] - y.mainAxis;
                  h < t ? (h = t) : h > n && (h = n);
                }
                if (f) {
                  var w, v;
                  let e = 'y' === p ? 'width' : 'height',
                    t = ['top', 'left'].includes((0, r.k3)(i)),
                    n =
                      l.reference[d] -
                      l.floating[e] +
                      ((t && (null == (w = a.offset) ? void 0 : w[d])) || 0) +
                      (t ? 0 : y.crossAxis),
                    o =
                      l.reference[d] +
                      l.reference[e] +
                      (t ? 0 : (null == (v = a.offset) ? void 0 : v[d]) || 0) -
                      (t ? y.crossAxis : 0);
                  g < n ? (g = n) : g > o && (g = o);
                }
                return { [p]: h, [d]: g };
              },
            }
          );
        },
        m = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: 'size',
              options: e,
              async fn(t) {
                let n, o;
                let { placement: i, rects: a, platform: u, elements: c } = t,
                  { apply: f = () => {}, ...s } = (0, r.ku)(e, t),
                  d = await l(t, s),
                  p = (0, r.k3)(i),
                  h = (0, r.hp)(i),
                  g = 'y' === (0, r.Qq)(i),
                  { width: m, height: y } = a.floating;
                'top' === p || 'bottom' === p
                  ? ((n = p),
                    (o =
                      h ===
                      ((await (null == u.isRTL ? void 0 : u.isRTL(c.floating))) ? 'start' : 'end')
                        ? 'left'
                        : 'right'))
                  : ((o = p), (n = 'end' === h ? 'top' : 'bottom'));
                let w = y - d[n],
                  v = m - d[o],
                  x = !t.middlewareData.shift,
                  b = w,
                  E = v;
                if (g) {
                  let e = m - d.left - d.right;
                  E = h || x ? (0, r.VV)(v, e) : e;
                } else {
                  let e = y - d.top - d.bottom;
                  b = h || x ? (0, r.VV)(w, e) : e;
                }
                if (x && !h) {
                  let e = (0, r.Fp)(d.left, 0),
                    t = (0, r.Fp)(d.right, 0),
                    n = (0, r.Fp)(d.top, 0),
                    o = (0, r.Fp)(d.bottom, 0);
                  g
                    ? (E = m - 2 * (0 !== e || 0 !== t ? e + t : (0, r.Fp)(d.left, d.right)))
                    : (b = y - 2 * (0 !== n || 0 !== o ? n + o : (0, r.Fp)(d.top, d.bottom)));
                }
                await f({ ...t, availableWidth: E, availableHeight: b });
                let R = await u.getDimensions(c.floating);
                return m !== R.width || y !== R.height ? { reset: { rects: !0 } } : {};
              },
            }
          );
        };
    },
    87447: function (e, t, n) {
      n.d(t, {
        Me: function () {
          return D;
        },
        oo: function () {
          return S;
        },
      });
      var r = n(38027),
        o = n(84602);
      function i(e) {
        return u(e) ? (e.nodeName || '').toLowerCase() : '#document';
      }
      function l(e) {
        var t;
        return (
          (null == e ? void 0 : null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
        );
      }
      function a(e) {
        var t;
        return null == (t = (u(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function u(e) {
        return e instanceof Node || e instanceof l(e).Node;
      }
      function c(e) {
        return e instanceof Element || e instanceof l(e).Element;
      }
      function f(e) {
        return e instanceof HTMLElement || e instanceof l(e).HTMLElement;
      }
      function s(e) {
        return (
          'undefined' != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof l(e).ShadowRoot)
        );
      }
      function d(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: o } = m(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !['inline', 'contents'].includes(o)
        );
      }
      function p(e) {
        let t = h(),
          n = m(e);
        return (
          'none' !== n.transform ||
          'none' !== n.perspective ||
          (!!n.containerType && 'normal' !== n.containerType) ||
          (!t && !!n.backdropFilter && 'none' !== n.backdropFilter) ||
          (!t && !!n.filter && 'none' !== n.filter) ||
          ['transform', 'perspective', 'filter'].some((e) => (n.willChange || '').includes(e)) ||
          ['paint', 'layout', 'strict', 'content'].some((e) => (n.contain || '').includes(e))
        );
      }
      function h() {
        return (
          'undefined' != typeof CSS &&
          !!CSS.supports &&
          CSS.supports('-webkit-backdrop-filter', 'none')
        );
      }
      function g(e) {
        return ['html', 'body', '#document'].includes(i(e));
      }
      function m(e) {
        return l(e).getComputedStyle(e);
      }
      function y(e) {
        return c(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
      }
      function w(e) {
        if ('html' === i(e)) return e;
        let t = e.assignedSlot || e.parentNode || (s(e) && e.host) || a(e);
        return s(t) ? t.host : t;
      }
      function v(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        let o = (function e(t) {
            let n = w(t);
            return g(n)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : f(n) && d(n)
                ? n
                : e(n);
          })(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          a = l(o);
        return i
          ? t.concat(
              a,
              a.visualViewport || [],
              d(o) ? o : [],
              a.frameElement && n ? v(a.frameElement) : []
            )
          : t.concat(o, v(o, [], n));
      }
      function x(e) {
        let t = m(e),
          n = parseFloat(t.width) || 0,
          o = parseFloat(t.height) || 0,
          i = f(e),
          l = i ? e.offsetWidth : n,
          a = i ? e.offsetHeight : o,
          u = (0, r.NM)(n) !== l || (0, r.NM)(o) !== a;
        return u && ((n = l), (o = a)), { width: n, height: o, $: u };
      }
      function b(e) {
        return c(e) ? e : e.contextElement;
      }
      function E(e) {
        let t = b(e);
        if (!f(t)) return (0, r.ze)(1);
        let n = t.getBoundingClientRect(),
          { width: o, height: i, $: l } = x(t),
          a = (l ? (0, r.NM)(n.width) : n.width) / o,
          u = (l ? (0, r.NM)(n.height) : n.height) / i;
        return (
          (a && Number.isFinite(a)) || (a = 1), (u && Number.isFinite(u)) || (u = 1), { x: a, y: u }
        );
      }
      let R = (0, r.ze)(0);
      function T(e) {
        let t = l(e);
        return h() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : R;
      }
      function C(e, t, n, o) {
        var i;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        let a = e.getBoundingClientRect(),
          u = b(e),
          f = (0, r.ze)(1);
        t && (o ? c(o) && (f = E(o)) : (f = E(e)));
        let s = (void 0 === (i = n) && (i = !1), o && (!i || o === l(u)) && i)
            ? T(u)
            : (0, r.ze)(0),
          d = (a.left + s.x) / f.x,
          p = (a.top + s.y) / f.y,
          h = a.width / f.x,
          g = a.height / f.y;
        if (u) {
          let e = l(u),
            t = o && c(o) ? l(o) : o,
            n = e.frameElement;
          for (; n && o && t !== e; ) {
            let e = E(n),
              t = n.getBoundingClientRect(),
              r = m(n),
              o = t.left + (n.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              i = t.top + (n.clientTop + parseFloat(r.paddingTop)) * e.y;
            (d *= e.x),
              (p *= e.y),
              (h *= e.x),
              (g *= e.y),
              (d += o),
              (p += i),
              (n = l(n).frameElement);
          }
        }
        return (0, r.JB)({ width: h, height: g, x: d, y: p });
      }
      function k(e) {
        return C(a(e)).left + y(e).scrollLeft;
      }
      function A(e, t, n) {
        let o;
        if ('viewport' === t)
          o = (function (e, t) {
            let n = l(e),
              r = a(e),
              o = n.visualViewport,
              i = r.clientWidth,
              u = r.clientHeight,
              c = 0,
              f = 0;
            if (o) {
              (i = o.width), (u = o.height);
              let e = h();
              (!e || (e && 'fixed' === t)) && ((c = o.offsetLeft), (f = o.offsetTop));
            }
            return { width: i, height: u, x: c, y: f };
          })(e, n);
        else if ('document' === t)
          o = (function (e) {
            let t = a(e),
              n = y(e),
              o = e.ownerDocument.body,
              i = (0, r.Fp)(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth),
              l = (0, r.Fp)(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight),
              u = -n.scrollLeft + k(e),
              c = -n.scrollTop;
            return (
              'rtl' === m(o).direction && (u += (0, r.Fp)(t.clientWidth, o.clientWidth) - i),
              { width: i, height: l, x: u, y: c }
            );
          })(a(e));
        else if (c(t))
          o = (function (e, t) {
            let n = C(e, !0, 'fixed' === t),
              o = n.top + e.clientTop,
              i = n.left + e.clientLeft,
              l = f(e) ? E(e) : (0, r.ze)(1),
              a = e.clientWidth * l.x;
            return { width: a, height: e.clientHeight * l.y, x: i * l.x, y: o * l.y };
          })(t, n);
        else {
          let n = T(e);
          o = { ...t, x: t.x - n.x, y: t.y - n.y };
        }
        return (0, r.JB)(o);
      }
      function P(e, t) {
        return f(e) && 'fixed' !== m(e).position ? (t ? t(e) : e.offsetParent) : null;
      }
      function L(e, t) {
        let n = l(e);
        if (!f(e)) return n;
        let r = P(e, t);
        for (; r && ['table', 'td', 'th'].includes(i(r)) && 'static' === m(r).position; )
          r = P(r, t);
        return r && ('html' === i(r) || ('body' === i(r) && 'static' === m(r).position && !p(r)))
          ? n
          : r ||
              (function (e) {
                let t = w(e);
                for (; f(t) && !g(t); ) {
                  if (p(t)) return t;
                  t = w(t);
                }
                return null;
              })(e) ||
              n;
      }
      let O = async function (e) {
          let { reference: t, floating: n, strategy: o } = e,
            l = this.getOffsetParent || L,
            u = this.getDimensions;
          return {
            reference: (function (e, t, n) {
              let o = f(t),
                l = a(t),
                u = 'fixed' === n,
                c = C(e, !0, u, t),
                s = { scrollLeft: 0, scrollTop: 0 },
                p = (0, r.ze)(0);
              if (o || (!o && !u)) {
                if ((('body' !== i(t) || d(l)) && (s = y(t)), o)) {
                  let e = C(t, !0, u, t);
                  (p.x = e.x + t.clientLeft), (p.y = e.y + t.clientTop);
                } else l && (p.x = k(l));
              }
              return {
                x: c.left + s.scrollLeft - p.x,
                y: c.top + s.scrollTop - p.y,
                width: c.width,
                height: c.height,
              };
            })(t, await l(n), o),
            floating: { x: 0, y: 0, ...(await u(n)) },
          };
        },
        M = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { rect: t, offsetParent: n, strategy: o } = e,
              l = f(n),
              u = a(n);
            if (n === u) return t;
            let c = { scrollLeft: 0, scrollTop: 0 },
              s = (0, r.ze)(1),
              p = (0, r.ze)(0);
            if ((l || (!l && 'fixed' !== o)) && (('body' !== i(n) || d(u)) && (c = y(n)), f(n))) {
              let e = C(n);
              (s = E(n)), (p.x = e.x + n.clientLeft), (p.y = e.y + n.clientTop);
            }
            return {
              width: t.width * s.x,
              height: t.height * s.y,
              x: t.x * s.x - c.scrollLeft * s.x + p.x,
              y: t.y * s.y - c.scrollTop * s.y + p.y,
            };
          },
          getDocumentElement: a,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: o, strategy: l } = e,
              a = [
                ...('clippingAncestors' === n
                  ? (function (e, t) {
                      let n = t.get(e);
                      if (n) return n;
                      let r = v(e, [], !1).filter((e) => c(e) && 'body' !== i(e)),
                        o = null,
                        l = 'fixed' === m(e).position,
                        a = l ? w(e) : e;
                      for (; c(a) && !g(a); ) {
                        let t = m(a),
                          n = p(a);
                        n || 'fixed' !== t.position || (o = null),
                          (
                            l
                              ? !n && !o
                              : (!n &&
                                  'static' === t.position &&
                                  !!o &&
                                  ['absolute', 'fixed'].includes(o.position)) ||
                                (d(a) &&
                                  !n &&
                                  (function e(t, n) {
                                    let r = w(t);
                                    return (
                                      !(r === n || !c(r) || g(r)) &&
                                      ('fixed' === m(r).position || e(r, n))
                                    );
                                  })(e, a))
                          )
                            ? (r = r.filter((e) => e !== a))
                            : (o = t),
                          (a = w(a));
                      }
                      return t.set(e, r), r;
                    })(t, this._c)
                  : [].concat(n)),
                o,
              ],
              u = a[0],
              f = a.reduce(
                (e, n) => {
                  let o = A(t, n, l);
                  return (
                    (e.top = (0, r.Fp)(o.top, e.top)),
                    (e.right = (0, r.VV)(o.right, e.right)),
                    (e.bottom = (0, r.VV)(o.bottom, e.bottom)),
                    (e.left = (0, r.Fp)(o.left, e.left)),
                    e
                  );
                },
                A(t, u, l)
              );
            return { width: f.right - f.left, height: f.bottom - f.top, x: f.left, y: f.top };
          },
          getOffsetParent: L,
          getElementRects: O,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            return x(e);
          },
          getScale: E,
          isElement: c,
          isRTL: function (e) {
            return 'rtl' === m(e).direction;
          },
        };
      function D(e, t, n, o) {
        let i;
        void 0 === o && (o = {});
        let {
            ancestorScroll: l = !0,
            ancestorResize: u = !0,
            elementResize: c = 'function' == typeof ResizeObserver,
            layoutShift: f = 'function' == typeof IntersectionObserver,
            animationFrame: s = !1,
          } = o,
          d = b(e),
          p = l || u ? [...(d ? v(d) : []), ...v(t)] : [];
        p.forEach((e) => {
          l && e.addEventListener('scroll', n, { passive: !0 }),
            u && e.addEventListener('resize', n);
        });
        let h =
            d && f
              ? (function (e, t) {
                  let n,
                    o = null,
                    i = a(e);
                  function l() {
                    clearTimeout(n), o && o.disconnect(), (o = null);
                  }
                  return (
                    !(function a(u, c) {
                      void 0 === u && (u = !1), void 0 === c && (c = 1), l();
                      let { left: f, top: s, width: d, height: p } = e.getBoundingClientRect();
                      if ((u || t(), !d || !p)) return;
                      let h = (0, r.GW)(s),
                        g = (0, r.GW)(i.clientWidth - (f + d)),
                        m = {
                          rootMargin:
                            -h +
                            'px ' +
                            -g +
                            'px ' +
                            -(0, r.GW)(i.clientHeight - (s + p)) +
                            'px ' +
                            -(0, r.GW)(f) +
                            'px',
                          threshold: (0, r.Fp)(0, (0, r.VV)(1, c)) || 1,
                        },
                        y = !0;
                      function w(e) {
                        let t = e[0].intersectionRatio;
                        if (t !== c) {
                          if (!y) return a();
                          t
                            ? a(!1, t)
                            : (n = setTimeout(() => {
                                a(!1, 1e-7);
                              }, 100));
                        }
                        y = !1;
                      }
                      try {
                        o = new IntersectionObserver(w, { ...m, root: i.ownerDocument });
                      } catch (e) {
                        o = new IntersectionObserver(w, m);
                      }
                      o.observe(e);
                    })(!0),
                    l
                  );
                })(d, n)
              : null,
          g = -1,
          m = null;
        c &&
          ((m = new ResizeObserver((e) => {
            let [r] = e;
            r &&
              r.target === d &&
              m &&
              (m.unobserve(t),
              cancelAnimationFrame(g),
              (g = requestAnimationFrame(() => {
                m && m.observe(t);
              }))),
              n();
          })),
          d && !s && m.observe(d),
          m.observe(t));
        let y = s ? C(e) : null;
        return (
          s &&
            (function t() {
              let r = C(e);
              y &&
                (r.x !== y.x || r.y !== y.y || r.width !== y.width || r.height !== y.height) &&
                n(),
                (y = r),
                (i = requestAnimationFrame(t));
            })(),
          n(),
          () => {
            p.forEach((e) => {
              l && e.removeEventListener('scroll', n), u && e.removeEventListener('resize', n);
            }),
              h && h(),
              m && m.disconnect(),
              (m = null),
              s && cancelAnimationFrame(i);
          }
        );
      }
      let S = (e, t, n) => {
        let r = new Map(),
          i = { platform: M, ...n },
          l = { ...i.platform, _c: r };
        return (0, o.oo)(e, t, { ...i, platform: l });
      };
    },
    50169: function (e, t, n) {
      n.d(t, {
        YF: function () {
          return p;
        },
        x7: function () {
          return a;
        },
      });
      var r = n(84602),
        o = n(87447),
        i = n(58854),
        l = n(52033);
      let a = (e) => ({
        name: 'arrow',
        options: e,
        fn(t) {
          let { element: n, padding: o } = 'function' == typeof e ? e(t) : e;
          if (n && {}.hasOwnProperty.call(n, 'current')) {
            if (null != n.current) return (0, r.x7)({ element: n.current, padding: o }).fn(t);
          } else if (n) return (0, r.x7)({ element: n, padding: o }).fn(t);
          return {};
        },
      });
      var u = 'undefined' != typeof document ? i.useLayoutEffect : i.useEffect;
      function c(e, t) {
        let n, r, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ('function' == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && 'object' == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) != t.length) return !1;
            for (r = n; 0 != r--; ) if (!c(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
          for (r = n; 0 != r--; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = o[r];
            if (('_owner' !== n || !e.$$typeof) && !c(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function f(e) {
        return 'undefined' == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function s(e, t) {
        let n = f(e);
        return Math.round(t * n) / n;
      }
      function d(e) {
        let t = i.useRef(e);
        return (
          u(() => {
            t.current = e;
          }),
          t
        );
      }
      function p(e) {
        void 0 === e && (e = {});
        let {
            placement: t = 'bottom',
            strategy: n = 'absolute',
            middleware: r = [],
            platform: a,
            elements: { reference: p, floating: h } = {},
            transform: g = !0,
            whileElementsMounted: m,
            open: y,
          } = e,
          [w, v] = i.useState({
            x: 0,
            y: 0,
            strategy: n,
            placement: t,
            middlewareData: {},
            isPositioned: !1,
          }),
          [x, b] = i.useState(r);
        c(x, r) || b(r);
        let [E, R] = i.useState(null),
          [T, C] = i.useState(null),
          k = i.useCallback(
            (e) => {
              e != O.current && ((O.current = e), R(e));
            },
            [R]
          ),
          A = i.useCallback(
            (e) => {
              e !== M.current && ((M.current = e), C(e));
            },
            [C]
          ),
          P = p || E,
          L = h || T,
          O = i.useRef(null),
          M = i.useRef(null),
          D = i.useRef(w),
          S = d(m),
          _ = d(a),
          F = i.useCallback(() => {
            if (!O.current || !M.current) return;
            let e = { placement: t, strategy: n, middleware: x };
            _.current && (e.platform = _.current),
              (0, o.oo)(O.current, M.current, e).then((e) => {
                let t = { ...e, isPositioned: !0 };
                V.current &&
                  !c(D.current, t) &&
                  ((D.current = t),
                  l.flushSync(() => {
                    v(t);
                  }));
              });
          }, [x, t, n, _]);
        u(() => {
          !1 === y &&
            D.current.isPositioned &&
            ((D.current.isPositioned = !1), v((e) => ({ ...e, isPositioned: !1 })));
        }, [y]);
        let V = i.useRef(!1);
        u(
          () => (
            (V.current = !0),
            () => {
              V.current = !1;
            }
          ),
          []
        ),
          u(() => {
            if ((P && (O.current = P), L && (M.current = L), P && L)) {
              if (S.current) return S.current(P, L, F);
              F();
            }
          }, [P, L, F, S]);
        let W = i.useMemo(
            () => ({ reference: O, floating: M, setReference: k, setFloating: A }),
            [k, A]
          ),
          H = i.useMemo(() => ({ reference: P, floating: L }), [P, L]),
          z = i.useMemo(() => {
            let e = { position: n, left: 0, top: 0 };
            if (!H.floating) return e;
            let t = s(H.floating, w.x),
              r = s(H.floating, w.y);
            return g
              ? {
                  ...e,
                  transform: 'translate(' + t + 'px, ' + r + 'px)',
                  ...(f(H.floating) >= 1.5 && { willChange: 'transform' }),
                }
              : { position: n, left: t, top: r };
          }, [n, g, H.floating, w.x, w.y]);
        return i.useMemo(
          () => ({ ...w, update: F, refs: W, elements: H, floatingStyles: z }),
          [w, F, W, H, z]
        );
      }
    },
    38027: function (e, t, n) {
      n.d(t, {
        Fp: function () {
          return i;
        },
        GW: function () {
          return a;
        },
        I4: function () {
          return m;
        },
        JB: function () {
          return C;
        },
        KX: function () {
          return E;
        },
        NM: function () {
          return l;
        },
        Qq: function () {
          return y;
        },
        Rn: function () {
          return g;
        },
        VV: function () {
          return o;
        },
        Wh: function () {
          return w;
        },
        gy: function () {
          return x;
        },
        hp: function () {
          return h;
        },
        i8: function () {
          return v;
        },
        k3: function () {
          return p;
        },
        ku: function () {
          return d;
        },
        mA: function () {
          return r;
        },
        pw: function () {
          return R;
        },
        uZ: function () {
          return s;
        },
        yd: function () {
          return T;
        },
        ze: function () {
          return u;
        },
      });
      let r = ['top', 'right', 'bottom', 'left'],
        o = Math.min,
        i = Math.max,
        l = Math.round,
        a = Math.floor,
        u = (e) => ({ x: e, y: e }),
        c = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
        f = { start: 'end', end: 'start' };
      function s(e, t, n) {
        return i(e, o(t, n));
      }
      function d(e, t) {
        return 'function' == typeof e ? e(t) : e;
      }
      function p(e) {
        return e.split('-')[0];
      }
      function h(e) {
        return e.split('-')[1];
      }
      function g(e) {
        return 'x' === e ? 'y' : 'x';
      }
      function m(e) {
        return 'y' === e ? 'height' : 'width';
      }
      function y(e) {
        return ['top', 'bottom'].includes(p(e)) ? 'y' : 'x';
      }
      function w(e) {
        return g(y(e));
      }
      function v(e, t, n) {
        void 0 === n && (n = !1);
        let r = h(e),
          o = w(e),
          i = m(o),
          l =
            'x' === o
              ? r === (n ? 'end' : 'start')
                ? 'right'
                : 'left'
              : 'start' === r
                ? 'bottom'
                : 'top';
        return t.reference[i] > t.floating[i] && (l = R(l)), [l, R(l)];
      }
      function x(e) {
        let t = R(e);
        return [b(e), t, b(t)];
      }
      function b(e) {
        return e.replace(/start|end/g, (e) => f[e]);
      }
      function E(e, t, n, r) {
        let o = h(e),
          i = (function (e, t, n) {
            let r = ['left', 'right'],
              o = ['right', 'left'];
            switch (e) {
              case 'top':
              case 'bottom':
                if (n) return t ? o : r;
                return t ? r : o;
              case 'left':
              case 'right':
                return t ? ['top', 'bottom'] : ['bottom', 'top'];
              default:
                return [];
            }
          })(p(e), 'start' === n, r);
        return o && ((i = i.map((e) => e + '-' + o)), t && (i = i.concat(i.map(b)))), i;
      }
      function R(e) {
        return e.replace(/left|right|bottom|top/g, (e) => c[e]);
      }
      function T(e) {
        return 'number' != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function C(e) {
        return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
      }
    },
    26235: function (e, t, n) {
      n.d(t, {
        f: function () {
          return l;
        },
      });
      var r = n(40966),
        o = n(58854),
        i = n(34704);
      let l = (0, o.forwardRef)((e, t) => {
        let { children: n, width: l = 10, height: a = 5, ...u } = e;
        return (0, o.createElement)(
          i.WV.svg,
          (0, r.Z)({}, u, {
            ref: t,
            width: l,
            height: a,
            viewBox: '0 0 30 10',
            preserveAspectRatio: 'none',
          }),
          e.asChild ? n : (0, o.createElement)('polygon', { points: '0,0 30,0 15,10' })
        );
      });
    },
    72998: function (e, t, n) {
      n.d(t, {
        D7: function () {
          return y;
        },
        Eh: function () {
          return S;
        },
        VY: function () {
          return D;
        },
        ee: function () {
          return M;
        },
        fC: function () {
          return O;
        },
      });
      var r = n(11572),
        o = n(58854),
        i = n(50169),
        l = n(87447),
        a = n(84602),
        u = n(26235),
        c = n(30),
        f = n(42642),
        s = n(34704),
        d = n(74860),
        p = n(1782),
        h = n(6723);
      let g = 'Popper',
        [m, y] = (0, f.b)(g),
        [w, v] = m(g),
        x = (0, o.forwardRef)((e, t) => {
          let { __scopePopper: n, virtualRef: i, ...l } = e,
            a = v('PopperAnchor', n),
            u = (0, o.useRef)(null),
            f = (0, c.e)(t, u);
          return (
            (0, o.useEffect)(() => {
              a.onAnchorChange((null == i ? void 0 : i.current) || u.current);
            }),
            i ? null : (0, o.createElement)(s.WV.div, (0, r.Z)({}, l, { ref: f }))
          );
        }),
        b = 'PopperContent',
        [E, R] = m(b),
        T = (0, o.forwardRef)((e, t) => {
          var n, u, f, g, m, y, w, x;
          let {
              __scopePopper: R,
              side: T = 'bottom',
              sideOffset: C = 0,
              align: k = 'center',
              alignOffset: O = 0,
              arrowPadding: M = 0,
              avoidCollisions: D = !0,
              collisionBoundary: S = [],
              collisionPadding: _ = 0,
              sticky: F = 'partial',
              hideWhenDetached: V = !1,
              updatePositionStrategy: W = 'optimized',
              onPlaced: H,
              ...z
            } = e,
            B = v(b, R),
            [I, Z] = (0, o.useState)(null),
            Y = (0, c.e)(t, (e) => Z(e)),
            [$, N] = (0, o.useState)(null),
            X = (0, h.t)($),
            q = null !== (n = null == X ? void 0 : X.width) && void 0 !== n ? n : 0,
            j = null !== (u = null == X ? void 0 : X.height) && void 0 !== u ? u : 0,
            Q = 'number' == typeof _ ? _ : { top: 0, right: 0, bottom: 0, left: 0, ..._ },
            G = Array.isArray(S) ? S : [S],
            J = G.length > 0,
            K = { padding: Q, boundary: G.filter(A), altBoundary: J },
            {
              refs: U,
              floatingStyles: ee,
              placement: et,
              isPositioned: en,
              middlewareData: er,
            } = (0, i.YF)({
              strategy: 'fixed',
              placement: T + ('center' !== k ? '-' + k : ''),
              whileElementsMounted: (...e) => (0, l.Me)(...e, { animationFrame: 'always' === W }),
              elements: { reference: B.anchor },
              middleware: [
                (0, a.cv)({ mainAxis: C + j, alignmentAxis: O }),
                D &&
                  (0, a.uY)({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: 'partial' === F ? (0, a.dr)() : void 0,
                    ...K,
                  }),
                D && (0, a.RR)({ ...K }),
                (0, a.dp)({
                  ...K,
                  apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
                    let { width: o, height: i } = t.reference,
                      l = e.floating.style;
                    l.setProperty('--radix-popper-available-width', `${n}px`),
                      l.setProperty('--radix-popper-available-height', `${r}px`),
                      l.setProperty('--radix-popper-anchor-width', `${o}px`),
                      l.setProperty('--radix-popper-anchor-height', `${i}px`);
                  },
                }),
                $ && (0, i.x7)({ element: $, padding: M }),
                P({ arrowWidth: q, arrowHeight: j }),
                V && (0, a.Cp)({ strategy: 'referenceHidden', ...K }),
              ],
            }),
            [eo, ei] = L(et),
            el = (0, d.W)(H);
          (0, p.b)(() => {
            en && (null == el || el());
          }, [en, el]);
          let ea = null === (f = er.arrow) || void 0 === f ? void 0 : f.x,
            eu = null === (g = er.arrow) || void 0 === g ? void 0 : g.y,
            ec = (null === (m = er.arrow) || void 0 === m ? void 0 : m.centerOffset) !== 0,
            [ef, es] = (0, o.useState)();
          return (
            (0, p.b)(() => {
              I && es(window.getComputedStyle(I).zIndex);
            }, [I]),
            (0, o.createElement)(
              'div',
              {
                ref: U.setFloating,
                'data-radix-popper-content-wrapper': '',
                style: {
                  ...ee,
                  transform: en ? ee.transform : 'translate(0, -200%)',
                  minWidth: 'max-content',
                  zIndex: ef,
                  '--radix-popper-transform-origin': [
                    null === (y = er.transformOrigin) || void 0 === y ? void 0 : y.x,
                    null === (w = er.transformOrigin) || void 0 === w ? void 0 : w.y,
                  ].join(' '),
                },
                dir: e.dir,
              },
              (0, o.createElement)(
                E,
                {
                  scope: R,
                  placedSide: eo,
                  onArrowChange: N,
                  arrowX: ea,
                  arrowY: eu,
                  shouldHideArrow: ec,
                },
                (0, o.createElement)(
                  s.WV.div,
                  (0, r.Z)({ 'data-side': eo, 'data-align': ei }, z, {
                    ref: Y,
                    style: {
                      ...z.style,
                      animation: en ? void 0 : 'none',
                      opacity:
                        null !== (x = er.hide) && void 0 !== x && x.referenceHidden ? 0 : void 0,
                    },
                  })
                )
              )
            )
          );
        }),
        C = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
        k = (0, o.forwardRef)(function (e, t) {
          let { __scopePopper: n, ...i } = e,
            l = R('PopperArrow', n),
            a = C[l.placedSide];
          return (0, o.createElement)(
            'span',
            {
              ref: l.onArrowChange,
              style: {
                position: 'absolute',
                left: l.arrowX,
                top: l.arrowY,
                [a]: 0,
                transformOrigin: { top: '', right: '0 0', bottom: 'center 0', left: '100% 0' }[
                  l.placedSide
                ],
                transform: {
                  top: 'translateY(100%)',
                  right: 'translateY(50%) rotate(90deg) translateX(-50%)',
                  bottom: 'rotate(180deg)',
                  left: 'translateY(50%) rotate(-90deg) translateX(50%)',
                }[l.placedSide],
                visibility: l.shouldHideArrow ? 'hidden' : void 0,
              },
            },
            (0, o.createElement)(
              u.f,
              (0, r.Z)({}, i, { ref: t, style: { ...i.style, display: 'block' } })
            )
          );
        });
      function A(e) {
        return null !== e;
      }
      let P = (e) => ({
        name: 'transformOrigin',
        options: e,
        fn(t) {
          var n, r, o, i, l;
          let { placement: a, rects: u, middlewareData: c } = t,
            f = (null === (n = c.arrow) || void 0 === n ? void 0 : n.centerOffset) !== 0,
            s = f ? 0 : e.arrowWidth,
            d = f ? 0 : e.arrowHeight,
            [p, h] = L(a),
            g = { start: '0%', center: '50%', end: '100%' }[h],
            m =
              (null !== (r = null === (o = c.arrow) || void 0 === o ? void 0 : o.x) && void 0 !== r
                ? r
                : 0) +
              s / 2,
            y =
              (null !== (i = null === (l = c.arrow) || void 0 === l ? void 0 : l.y) && void 0 !== i
                ? i
                : 0) +
              d / 2,
            w = '',
            v = '';
          return (
            'bottom' === p
              ? ((w = f ? g : `${m}px`), (v = `${-d}px`))
              : 'top' === p
                ? ((w = f ? g : `${m}px`), (v = `${u.floating.height + d}px`))
                : 'right' === p
                  ? ((w = `${-d}px`), (v = f ? g : `${y}px`))
                  : 'left' === p && ((w = `${u.floating.width + d}px`), (v = f ? g : `${y}px`)),
            { data: { x: w, y: v } }
          );
        },
      });
      function L(e) {
        let [t, n = 'center'] = e.split('-');
        return [t, n];
      }
      let O = (e) => {
          let { __scopePopper: t, children: n } = e,
            [r, i] = (0, o.useState)(null);
          return (0, o.createElement)(w, { scope: t, anchor: r, onAnchorChange: i }, n);
        },
        M = x,
        D = T,
        S = k;
    },
    89014: function (e, t, n) {
      n.d(t, {
        Eh: function () {
          return Y;
        },
        VY: function () {
          return Z;
        },
        fC: function () {
          return z;
        },
        h_: function () {
          return I;
        },
        xz: function () {
          return B;
        },
        zt: function () {
          return H;
        },
      });
      var r = n(11572),
        o = n(58854),
        i = n(65727),
        l = n(30),
        a = n(42642),
        u = n(31989),
        c = n(40120),
        f = n(72998),
        s = n(64921),
        d = n(42770),
        p = n(34704),
        h = n(41217),
        g = n(72876),
        m = n(10255);
      let [y, w] = (0, a.b)('Tooltip', [f.D7]),
        v = (0, f.D7)(),
        x = 'tooltip.open',
        [b, E] = y('TooltipProvider'),
        R = 'Tooltip',
        [T, C] = y(R),
        k = 'TooltipTrigger',
        A = (0, o.forwardRef)((e, t) => {
          let { __scopeTooltip: n, ...a } = e,
            u = C(k, n),
            c = E(k, n),
            s = v(n),
            d = (0, o.useRef)(null),
            h = (0, l.e)(t, d, u.onTriggerChange),
            g = (0, o.useRef)(!1),
            m = (0, o.useRef)(!1),
            y = (0, o.useCallback)(() => (g.current = !1), []);
          return (
            (0, o.useEffect)(() => () => document.removeEventListener('pointerup', y), [y]),
            (0, o.createElement)(
              f.ee,
              (0, r.Z)({ asChild: !0 }, s),
              (0, o.createElement)(
                p.WV.button,
                (0, r.Z)(
                  {
                    'aria-describedby': u.open ? u.contentId : void 0,
                    'data-state': u.stateAttribute,
                  },
                  a,
                  {
                    ref: h,
                    onPointerMove: (0, i.M)(e.onPointerMove, (e) => {
                      'touch' === e.pointerType ||
                        m.current ||
                        c.isPointerInTransitRef.current ||
                        (u.onTriggerEnter(), (m.current = !0));
                    }),
                    onPointerLeave: (0, i.M)(e.onPointerLeave, () => {
                      u.onTriggerLeave(), (m.current = !1);
                    }),
                    onPointerDown: (0, i.M)(e.onPointerDown, () => {
                      (g.current = !0), document.addEventListener('pointerup', y, { once: !0 });
                    }),
                    onFocus: (0, i.M)(e.onFocus, () => {
                      g.current || u.onOpen();
                    }),
                    onBlur: (0, i.M)(e.onBlur, u.onClose),
                    onClick: (0, i.M)(e.onClick, u.onClose),
                  }
                )
              )
            )
          );
        }),
        P = 'TooltipPortal',
        [L, O] = y(P, { forceMount: void 0 }),
        M = 'TooltipContent',
        D = (0, o.forwardRef)((e, t) => {
          let n = O(M, e.__scopeTooltip),
            { forceMount: i = n.forceMount, side: l = 'top', ...a } = e,
            u = C(M, e.__scopeTooltip);
          return (0, o.createElement)(
            d.z,
            { present: i || u.open },
            u.disableHoverableContent
              ? (0, o.createElement)(V, (0, r.Z)({ side: l }, a, { ref: t }))
              : (0, o.createElement)(S, (0, r.Z)({ side: l }, a, { ref: t }))
          );
        }),
        S = (0, o.forwardRef)((e, t) => {
          let n = C(M, e.__scopeTooltip),
            i = E(M, e.__scopeTooltip),
            a = (0, o.useRef)(null),
            u = (0, l.e)(t, a),
            [c, f] = (0, o.useState)(null),
            { trigger: s, onClose: d } = n,
            p = a.current,
            { onPointerInTransitChange: h } = i,
            g = (0, o.useCallback)(() => {
              f(null), h(!1);
            }, [h]),
            m = (0, o.useCallback)(
              (e, t) => {
                let n = e.currentTarget,
                  r = { x: e.clientX, y: e.clientY },
                  o = (function (e, t) {
                    let n = Math.abs(t.top - e.y),
                      r = Math.abs(t.bottom - e.y),
                      o = Math.abs(t.right - e.x),
                      i = Math.abs(t.left - e.x);
                    switch (Math.min(n, r, o, i)) {
                      case i:
                        return 'left';
                      case o:
                        return 'right';
                      case n:
                        return 'top';
                      case r:
                        return 'bottom';
                      default:
                        throw Error('unreachable');
                    }
                  })(r, n.getBoundingClientRect());
                f(
                  (function (e) {
                    let t = e.slice();
                    return (
                      t.sort((e, t) =>
                        e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0
                      ),
                      (function (e) {
                        if (e.length <= 1) return e.slice();
                        let t = [];
                        for (let n = 0; n < e.length; n++) {
                          let r = e[n];
                          for (; t.length >= 2; ) {
                            let e = t[t.length - 1],
                              n = t[t.length - 2];
                            if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
                            else break;
                          }
                          t.push(r);
                        }
                        t.pop();
                        let n = [];
                        for (let t = e.length - 1; t >= 0; t--) {
                          let r = e[t];
                          for (; n.length >= 2; ) {
                            let e = n[n.length - 1],
                              t = n[n.length - 2];
                            if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
                            else break;
                          }
                          n.push(r);
                        }
                        return (n.pop(),
                        1 === t.length && 1 === n.length && t[0].x === n[0].x && t[0].y === n[0].y)
                          ? t
                          : t.concat(n);
                      })(t)
                    );
                  })([
                    ...(function (e, t, n = 5) {
                      let r = [];
                      switch (t) {
                        case 'top':
                          r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
                          break;
                        case 'bottom':
                          r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
                          break;
                        case 'left':
                          r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
                          break;
                        case 'right':
                          r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
                      }
                      return r;
                    })(r, o),
                    ...(function (e) {
                      let { top: t, right: n, bottom: r, left: o } = e;
                      return [
                        { x: o, y: t },
                        { x: n, y: t },
                        { x: n, y: r },
                        { x: o, y: r },
                      ];
                    })(t.getBoundingClientRect()),
                  ])
                ),
                  h(!0);
              },
              [h]
            );
          return (
            (0, o.useEffect)(() => () => g(), [g]),
            (0, o.useEffect)(() => {
              if (s && p) {
                let e = (e) => m(e, p),
                  t = (e) => m(e, s);
                return (
                  s.addEventListener('pointerleave', e),
                  p.addEventListener('pointerleave', t),
                  () => {
                    s.removeEventListener('pointerleave', e),
                      p.removeEventListener('pointerleave', t);
                  }
                );
              }
            }, [s, p, m, g]),
            (0, o.useEffect)(() => {
              if (c) {
                let e = (e) => {
                  let t = e.target,
                    n = { x: e.clientX, y: e.clientY },
                    r =
                      (null == s ? void 0 : s.contains(t)) || (null == p ? void 0 : p.contains(t)),
                    o = !(function (e, t) {
                      let { x: n, y: r } = e,
                        o = !1;
                      for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                        let l = t[e].x,
                          a = t[e].y,
                          u = t[i].x,
                          c = t[i].y;
                        a > r != c > r && n < ((u - l) * (r - a)) / (c - a) + l && (o = !o);
                      }
                      return o;
                    })(n, c);
                  r ? g() : o && (g(), d());
                };
                return (
                  document.addEventListener('pointermove', e),
                  () => document.removeEventListener('pointermove', e)
                );
              }
            }, [s, p, c, d, g]),
            (0, o.createElement)(V, (0, r.Z)({}, e, { ref: u }))
          );
        }),
        [_, F] = y(R, { isInside: !1 }),
        V = (0, o.forwardRef)((e, t) => {
          let {
              __scopeTooltip: n,
              children: i,
              'aria-label': l,
              onEscapeKeyDown: a,
              onPointerDownOutside: c,
              ...s
            } = e,
            d = C(M, n),
            p = v(n),
            { onClose: g } = d;
          return (
            (0, o.useEffect)(
              () => (document.addEventListener(x, g), () => document.removeEventListener(x, g)),
              [g]
            ),
            (0, o.useEffect)(() => {
              if (d.trigger) {
                let e = (e) => {
                  let t = e.target;
                  null != t && t.contains(d.trigger) && g();
                };
                return (
                  window.addEventListener('scroll', e, { capture: !0 }),
                  () => window.removeEventListener('scroll', e, { capture: !0 })
                );
              }
            }, [d.trigger, g]),
            (0, o.createElement)(
              u.XB,
              {
                asChild: !0,
                disableOutsidePointerEvents: !1,
                onEscapeKeyDown: a,
                onPointerDownOutside: c,
                onFocusOutside: (e) => e.preventDefault(),
                onDismiss: g,
              },
              (0, o.createElement)(
                f.VY,
                (0, r.Z)({ 'data-state': d.stateAttribute }, p, s, {
                  ref: t,
                  style: {
                    ...s.style,
                    '--radix-tooltip-content-transform-origin':
                      'var(--radix-popper-transform-origin)',
                    '--radix-tooltip-content-available-width':
                      'var(--radix-popper-available-width)',
                    '--radix-tooltip-content-available-height':
                      'var(--radix-popper-available-height)',
                    '--radix-tooltip-trigger-width': 'var(--radix-popper-anchor-width)',
                    '--radix-tooltip-trigger-height': 'var(--radix-popper-anchor-height)',
                  },
                }),
                (0, o.createElement)(h.A4, null, i),
                (0, o.createElement)(
                  _,
                  { scope: n, isInside: !0 },
                  (0, o.createElement)(m.f, { id: d.contentId, role: 'tooltip' }, l || i)
                )
              )
            )
          );
        }),
        W = (0, o.forwardRef)((e, t) => {
          let { __scopeTooltip: n, ...i } = e,
            l = v(n);
          return F('TooltipArrow', n).isInside
            ? null
            : (0, o.createElement)(f.Eh, (0, r.Z)({}, l, i, { ref: t }));
        }),
        H = (e) => {
          let {
              __scopeTooltip: t,
              delayDuration: n = 700,
              skipDelayDuration: r = 300,
              disableHoverableContent: i = !1,
              children: l,
            } = e,
            [a, u] = (0, o.useState)(!0),
            c = (0, o.useRef)(!1),
            f = (0, o.useRef)(0);
          return (
            (0, o.useEffect)(() => {
              let e = f.current;
              return () => window.clearTimeout(e);
            }, []),
            (0, o.createElement)(
              b,
              {
                scope: t,
                isOpenDelayed: a,
                delayDuration: n,
                onOpen: (0, o.useCallback)(() => {
                  window.clearTimeout(f.current), u(!1);
                }, []),
                onClose: (0, o.useCallback)(() => {
                  window.clearTimeout(f.current), (f.current = window.setTimeout(() => u(!0), r));
                }, [r]),
                isPointerInTransitRef: c,
                onPointerInTransitChange: (0, o.useCallback)((e) => {
                  c.current = e;
                }, []),
                disableHoverableContent: i,
              },
              l
            )
          );
        },
        z = (e) => {
          let {
              __scopeTooltip: t,
              children: n,
              open: r,
              defaultOpen: i = !1,
              onOpenChange: l,
              disableHoverableContent: a,
              delayDuration: u,
            } = e,
            s = E(R, e.__scopeTooltip),
            d = v(t),
            [p, h] = (0, o.useState)(null),
            m = (0, c.M)(),
            y = (0, o.useRef)(0),
            w = null != a ? a : s.disableHoverableContent,
            b = null != u ? u : s.delayDuration,
            C = (0, o.useRef)(!1),
            [k = !1, A] = (0, g.T)({
              prop: r,
              defaultProp: i,
              onChange: (e) => {
                e ? (s.onOpen(), document.dispatchEvent(new CustomEvent(x))) : s.onClose(),
                  null == l || l(e);
              },
            }),
            P = (0, o.useMemo)(
              () => (k ? (C.current ? 'delayed-open' : 'instant-open') : 'closed'),
              [k]
            ),
            L = (0, o.useCallback)(() => {
              window.clearTimeout(y.current), (C.current = !1), A(!0);
            }, [A]),
            O = (0, o.useCallback)(() => {
              window.clearTimeout(y.current), A(!1);
            }, [A]),
            M = (0, o.useCallback)(() => {
              window.clearTimeout(y.current),
                (y.current = window.setTimeout(() => {
                  (C.current = !0), A(!0);
                }, b));
            }, [b, A]);
          return (
            (0, o.useEffect)(() => () => window.clearTimeout(y.current), []),
            (0, o.createElement)(
              f.fC,
              d,
              (0, o.createElement)(
                T,
                {
                  scope: t,
                  contentId: m,
                  open: k,
                  stateAttribute: P,
                  trigger: p,
                  onTriggerChange: h,
                  onTriggerEnter: (0, o.useCallback)(() => {
                    s.isOpenDelayed ? M() : L();
                  }, [s.isOpenDelayed, M, L]),
                  onTriggerLeave: (0, o.useCallback)(() => {
                    w ? O() : window.clearTimeout(y.current);
                  }, [O, w]),
                  onOpen: L,
                  onClose: O,
                  disableHoverableContent: w,
                },
                n
              )
            )
          );
        },
        B = A,
        I = (e) => {
          let { __scopeTooltip: t, forceMount: n, children: r, container: i } = e,
            l = C(P, t);
          return (0, o.createElement)(
            L,
            { scope: t, forceMount: n },
            (0, o.createElement)(
              d.z,
              { present: n || l.open },
              (0, o.createElement)(s.h, { asChild: !0, container: i }, r)
            )
          );
        },
        Z = D,
        Y = W;
    },
    6723: function (e, t, n) {
      n.d(t, {
        t: function () {
          return i;
        },
      });
      var r = n(58854),
        o = n(1782);
      function i(e) {
        let [t, n] = (0, r.useState)(void 0);
        return (
          (0, o.b)(() => {
            if (e) {
              n({ width: e.offsetWidth, height: e.offsetHeight });
              let t = new ResizeObserver((t) => {
                let r, o;
                if (!Array.isArray(t) || !t.length) return;
                let i = t[0];
                if ('borderBoxSize' in i) {
                  let e = i.borderBoxSize,
                    t = Array.isArray(e) ? e[0] : e;
                  (r = t.inlineSize), (o = t.blockSize);
                } else (r = e.offsetWidth), (o = e.offsetHeight);
                n({ width: r, height: o });
              });
              return t.observe(e, { box: 'border-box' }), () => t.unobserve(e);
            }
            n(void 0);
          }, [e]),
          t
        );
      }
    },
    10255: function (e, t, n) {
      n.d(t, {
        T: function () {
          return l;
        },
        f: function () {
          return a;
        },
      });
      var r = n(11572),
        o = n(58854),
        i = n(34704);
      let l = (0, o.forwardRef)((e, t) =>
          (0, o.createElement)(
            i.WV.span,
            (0, r.Z)({}, e, {
              ref: t,
              style: {
                position: 'absolute',
                border: 0,
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: 'hidden',
                clip: 'rect(0, 0, 0, 0)',
                whiteSpace: 'nowrap',
                wordWrap: 'normal',
                ...e.style,
              },
            })
          )
        ),
        a = l;
    },
  },
]);
