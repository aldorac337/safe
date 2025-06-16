'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8867],
  {
    11146: (e, t, o) => {
      o.d(t, { A: () => p, I: () => a });
      var r = o(7620),
        n = o(54568);
      let i = r.createContext(),
        a = () => r.useContext(i) ?? !1,
        p = function ({ value: e, ...t }) {
          return (0, n.jsx)(i.Provider, { value: e ?? !0, ...t });
        };
    },
    35861: (e, t, o) => {
      o.d(t, { A: () => r });
      let r = o(61693).A;
    },
    61693: (e, t, o) => {
      o.d(t, { A: () => n });
      var r = o(7620);
      function n({ controlled: e, default: t, name: o, state: n = 'value' }) {
        let { current: i } = r.useRef(void 0 !== e),
          [a, p] = r.useState(t),
          s = r.useCallback((e) => {
            i || p(e);
          }, []);
        return [i ? e : a, s];
      }
    },
    78867: (e, t, o) => {
      o.d(t, { A: () => eJ });
      var r = o(7620),
        n = o(32987),
        i = o(27020),
        a = o(56579),
        p = o(33377),
        s = o(11146),
        l = o(66395),
        c = o(29423),
        f = o(32678),
        u = o(31809),
        d = o(33420),
        m = o(87975),
        h = o(65490),
        g = o(36225),
        v = o(5511),
        y = o(74761),
        b = o(88997);
      function w(e) {
        if (null == e) return window;
        if ('[object Window]' !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function x(e) {
        var t = w(e).Element;
        return e instanceof t || e instanceof Element;
      }
      function O(e) {
        var t = w(e).HTMLElement;
        return e instanceof t || e instanceof HTMLElement;
      }
      function A(e) {
        if ('undefined' == typeof ShadowRoot) return !1;
        var t = w(e).ShadowRoot;
        return e instanceof t || e instanceof ShadowRoot;
      }
      var R = Math.max,
        E = Math.min,
        T = Math.round;
      function j() {
        var e = navigator.userAgentData;
        return null != e && e.brands && Array.isArray(e.brands)
          ? e.brands
              .map(function (e) {
                return e.brand + '/' + e.version;
              })
              .join(' ')
          : navigator.userAgent;
      }
      function P() {
        return !/^((?!chrome|android).)*safari/i.test(j());
      }
      function M(e, t, o) {
        void 0 === t && (t = !1), void 0 === o && (o = !1);
        var r = e.getBoundingClientRect(),
          n = 1,
          i = 1;
        t &&
          O(e) &&
          ((n = (e.offsetWidth > 0 && T(r.width) / e.offsetWidth) || 1),
          (i = (e.offsetHeight > 0 && T(r.height) / e.offsetHeight) || 1));
        var a = (x(e) ? w(e) : window).visualViewport,
          p = !P() && o,
          s = (r.left + (p && a ? a.offsetLeft : 0)) / n,
          l = (r.top + (p && a ? a.offsetTop : 0)) / i,
          c = r.width / n,
          f = r.height / i;
        return { width: c, height: f, top: l, right: s + c, bottom: l + f, left: s, x: s, y: l };
      }
      function k(e) {
        var t = w(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function S(e) {
        return e ? (e.nodeName || '').toLowerCase() : null;
      }
      function L(e) {
        return ((x(e) ? e.ownerDocument : e.document) || window.document).documentElement;
      }
      function W(e) {
        return M(L(e)).left + k(e).scrollLeft;
      }
      function D(e) {
        return w(e).getComputedStyle(e);
      }
      function B(e) {
        var t = D(e),
          o = t.overflow,
          r = t.overflowX,
          n = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(o + n + r);
      }
      function $(e) {
        var t = M(e),
          o = e.offsetWidth,
          r = e.offsetHeight;
        return (
          1 >= Math.abs(t.width - o) && (o = t.width),
          1 >= Math.abs(t.height - r) && (r = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: o, height: r }
        );
      }
      function C(e) {
        return 'html' === S(e)
          ? e
          : e.assignedSlot || e.parentNode || (A(e) ? e.host : null) || L(e);
      }
      function H(e, t) {
        void 0 === t && (t = []);
        var o,
          r = (function e(t) {
            return ['html', 'body', '#document'].indexOf(S(t)) >= 0
              ? t.ownerDocument.body
              : O(t) && B(t)
                ? t
                : e(C(t));
          })(e),
          n = r === (null == (o = e.ownerDocument) ? void 0 : o.body),
          i = w(r),
          a = n ? [i].concat(i.visualViewport || [], B(r) ? r : []) : r,
          p = t.concat(a);
        return n ? p : p.concat(H(C(a)));
      }
      function I(e) {
        return O(e) && 'fixed' !== D(e).position ? e.offsetParent : null;
      }
      function N(e) {
        for (
          var t = w(e), o = I(e);
          o && ['table', 'td', 'th'].indexOf(S(o)) >= 0 && 'static' === D(o).position;

        )
          o = I(o);
        return o && ('html' === S(o) || ('body' === S(o) && 'static' === D(o).position))
          ? t
          : o ||
              (function (e) {
                var t = /firefox/i.test(j());
                if (/Trident/i.test(j()) && O(e) && 'fixed' === D(e).position) return null;
                var o = C(e);
                for (A(o) && (o = o.host); O(o) && 0 > ['html', 'body'].indexOf(S(o)); ) {
                  var r = D(o);
                  if (
                    'none' !== r.transform ||
                    'none' !== r.perspective ||
                    'paint' === r.contain ||
                    -1 !== ['transform', 'perspective'].indexOf(r.willChange) ||
                    (t && 'filter' === r.willChange) ||
                    (t && r.filter && 'none' !== r.filter)
                  )
                    return o;
                  o = o.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      var V = 'bottom',
        F = 'right',
        q = 'left',
        U = 'auto',
        z = ['top', V, F, q],
        _ = 'start',
        X = 'viewport',
        Y = 'popper',
        G = z.reduce(function (e, t) {
          return e.concat([t + '-' + _, t + '-end']);
        }, []),
        J = [].concat(z, [U]).reduce(function (e, t) {
          return e.concat([t, t + '-' + _, t + '-end']);
        }, []),
        K = [
          'beforeRead',
          'read',
          'afterRead',
          'beforeMain',
          'main',
          'afterMain',
          'beforeWrite',
          'write',
          'afterWrite',
        ],
        Q = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
      function Z() {
        for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
        return !t.some(function (e) {
          return !(e && 'function' == typeof e.getBoundingClientRect);
        });
      }
      var ee = { passive: !0 };
      function et(e) {
        return e.split('-')[0];
      }
      function eo(e) {
        return e.split('-')[1];
      }
      function er(e) {
        return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
      }
      function en(e) {
        var t,
          o = e.reference,
          r = e.element,
          n = e.placement,
          i = n ? et(n) : null,
          a = n ? eo(n) : null,
          p = o.x + o.width / 2 - r.width / 2,
          s = o.y + o.height / 2 - r.height / 2;
        switch (i) {
          case 'top':
            t = { x: p, y: o.y - r.height };
            break;
          case V:
            t = { x: p, y: o.y + o.height };
            break;
          case F:
            t = { x: o.x + o.width, y: s };
            break;
          case q:
            t = { x: o.x - r.width, y: s };
            break;
          default:
            t = { x: o.x, y: o.y };
        }
        var l = i ? er(i) : null;
        if (null != l) {
          var c = 'y' === l ? 'height' : 'width';
          switch (a) {
            case _:
              t[l] = t[l] - (o[c] / 2 - r[c] / 2);
              break;
            case 'end':
              t[l] = t[l] + (o[c] / 2 - r[c] / 2);
          }
        }
        return t;
      }
      var ei = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
      function ea(e) {
        var t,
          o,
          r,
          n,
          i,
          a,
          p,
          s = e.popper,
          l = e.popperRect,
          c = e.placement,
          f = e.variation,
          u = e.offsets,
          d = e.position,
          m = e.gpuAcceleration,
          h = e.adaptive,
          g = e.roundOffsets,
          v = e.isFixed,
          y = u.x,
          b = void 0 === y ? 0 : y,
          x = u.y,
          O = void 0 === x ? 0 : x,
          A = 'function' == typeof g ? g({ x: b, y: O }) : { x: b, y: O };
        (b = A.x), (O = A.y);
        var R = u.hasOwnProperty('x'),
          E = u.hasOwnProperty('y'),
          j = q,
          P = 'top',
          M = window;
        if (h) {
          var k = N(s),
            S = 'clientHeight',
            W = 'clientWidth';
          k === w(s) &&
            'static' !== D((k = L(s))).position &&
            'absolute' === d &&
            ((S = 'scrollHeight'), (W = 'scrollWidth')),
            ('top' === c || ((c === q || c === F) && 'end' === f)) &&
              ((P = V),
              (O -= (v && k === M && M.visualViewport ? M.visualViewport.height : k[S]) - l.height),
              (O *= m ? 1 : -1)),
            (c === q || (('top' === c || c === V) && 'end' === f)) &&
              ((j = F),
              (b -= (v && k === M && M.visualViewport ? M.visualViewport.width : k[W]) - l.width),
              (b *= m ? 1 : -1));
        }
        var B = Object.assign({ position: d }, h && ei),
          $ =
            !0 === g
              ? ((t = { x: b, y: O }),
                (o = w(s)),
                (r = t.x),
                (n = t.y),
                { x: T(r * (i = o.devicePixelRatio || 1)) / i || 0, y: T(n * i) / i || 0 })
              : { x: b, y: O };
        return ((b = $.x), (O = $.y), m)
          ? Object.assign(
              {},
              B,
              (((p = {})[P] = E ? '0' : ''),
              (p[j] = R ? '0' : ''),
              (p.transform =
                1 >= (M.devicePixelRatio || 1)
                  ? 'translate(' + b + 'px, ' + O + 'px)'
                  : 'translate3d(' + b + 'px, ' + O + 'px, 0)'),
              p)
            )
          : Object.assign(
              {},
              B,
              (((a = {})[P] = E ? O + 'px' : ''), (a[j] = R ? b + 'px' : ''), (a.transform = ''), a)
            );
      }
      var ep = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
      function es(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return ep[e];
        });
      }
      var el = { start: 'end', end: 'start' };
      function ec(e) {
        return e.replace(/start|end/g, function (e) {
          return el[e];
        });
      }
      function ef(e, t) {
        var o = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (o && A(o)) {
          var r = t;
          do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
          } while (r);
        }
        return !1;
      }
      function eu(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function ed(e, t, o) {
        var r, n, i, a, p, s, l, c, f, u;
        return t === X
          ? eu(
              (function (e, t) {
                var o = w(e),
                  r = L(e),
                  n = o.visualViewport,
                  i = r.clientWidth,
                  a = r.clientHeight,
                  p = 0,
                  s = 0;
                if (n) {
                  (i = n.width), (a = n.height);
                  var l = P();
                  (l || (!l && 'fixed' === t)) && ((p = n.offsetLeft), (s = n.offsetTop));
                }
                return { width: i, height: a, x: p + W(e), y: s };
              })(e, o)
            )
          : x(t)
            ? (((r = M(t, !1, 'fixed' === o)).top = r.top + t.clientTop),
              (r.left = r.left + t.clientLeft),
              (r.bottom = r.top + t.clientHeight),
              (r.right = r.left + t.clientWidth),
              (r.width = t.clientWidth),
              (r.height = t.clientHeight),
              (r.x = r.left),
              (r.y = r.top),
              r)
            : eu(
                ((n = L(e)),
                (a = L(n)),
                (p = k(n)),
                (s = null == (i = n.ownerDocument) ? void 0 : i.body),
                (l = R(a.scrollWidth, a.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0)),
                (c = R(
                  a.scrollHeight,
                  a.clientHeight,
                  s ? s.scrollHeight : 0,
                  s ? s.clientHeight : 0
                )),
                (f = -p.scrollLeft + W(n)),
                (u = -p.scrollTop),
                'rtl' === D(s || a).direction && (f += R(a.clientWidth, s ? s.clientWidth : 0) - l),
                { width: l, height: c, x: f, y: u })
              );
      }
      function em() {
        return { top: 0, right: 0, bottom: 0, left: 0 };
      }
      function eh(e) {
        return Object.assign({}, em(), e);
      }
      function eg(e, t) {
        return t.reduce(function (t, o) {
          return (t[o] = e), t;
        }, {});
      }
      function ev(e, t) {
        void 0 === t && (t = {});
        var o,
          r,
          n,
          i,
          a,
          p,
          s,
          l = t,
          c = l.placement,
          f = void 0 === c ? e.placement : c,
          u = l.strategy,
          d = void 0 === u ? e.strategy : u,
          m = l.boundary,
          h = l.rootBoundary,
          g = l.elementContext,
          v = void 0 === g ? Y : g,
          y = l.altBoundary,
          b = l.padding,
          w = void 0 === b ? 0 : b,
          A = eh('number' != typeof w ? w : eg(w, z)),
          T = e.rects.popper,
          j = e.elements[void 0 !== y && y ? (v === Y ? 'reference' : Y) : v],
          P =
            ((o = x(j) ? j : j.contextElement || L(e.elements.popper)),
            (p = (a = [].concat(
              'clippingParents' === (r = void 0 === m ? 'clippingParents' : m)
                ? ((n = H(C(o))),
                  x((i = ['absolute', 'fixed'].indexOf(D(o).position) >= 0 && O(o) ? N(o) : o))
                    ? n.filter(function (e) {
                        return x(e) && ef(e, i) && 'body' !== S(e);
                      })
                    : [])
                : [].concat(r),
              [void 0 === h ? X : h]
            ))[0]),
            ((s = a.reduce(
              function (e, t) {
                var r = ed(o, t, d);
                return (
                  (e.top = R(r.top, e.top)),
                  (e.right = E(r.right, e.right)),
                  (e.bottom = E(r.bottom, e.bottom)),
                  (e.left = R(r.left, e.left)),
                  e
                );
              },
              ed(o, p, d)
            )).width = s.right - s.left),
            (s.height = s.bottom - s.top),
            (s.x = s.left),
            (s.y = s.top),
            s),
          k = M(e.elements.reference),
          W = en({ reference: k, element: T, strategy: 'absolute', placement: f }),
          B = eu(Object.assign({}, T, W)),
          $ = v === Y ? B : k,
          I = {
            top: P.top - $.top + A.top,
            bottom: $.bottom - P.bottom + A.bottom,
            left: P.left - $.left + A.left,
            right: $.right - P.right + A.right,
          },
          q = e.modifiersData.offset;
        if (v === Y && q) {
          var U = q[f];
          Object.keys(I).forEach(function (e) {
            var t = [F, V].indexOf(e) >= 0 ? 1 : -1,
              o = ['top', V].indexOf(e) >= 0 ? 'y' : 'x';
            I[e] += U[o] * t;
          });
        }
        return I;
      }
      function ey(e, t, o) {
        return R(e, E(t, o));
      }
      function eb(e, t, o) {
        return (
          void 0 === o && (o = { x: 0, y: 0 }),
          {
            top: e.top - t.height - o.y,
            right: e.right - t.width + o.x,
            bottom: e.bottom - t.height + o.y,
            left: e.left - t.width - o.x,
          }
        );
      }
      function ew(e) {
        return ['top', F, V, q].some(function (t) {
          return e[t] >= 0;
        });
      }
      var ex = (function (e) {
          void 0 === e && (e = {});
          var t = e,
            o = t.defaultModifiers,
            r = void 0 === o ? [] : o,
            n = t.defaultOptions,
            i = void 0 === n ? Q : n;
          return function (e, t, o) {
            void 0 === o && (o = i);
            var n,
              a = {
                placement: 'bottom',
                orderedModifiers: [],
                options: Object.assign({}, Q, i),
                modifiersData: {},
                elements: { reference: e, popper: t },
                attributes: {},
                styles: {},
              },
              p = [],
              s = !1,
              l = {
                state: a,
                setOptions: function (o) {
                  var n,
                    s,
                    f,
                    u,
                    d,
                    m = 'function' == typeof o ? o(a.options) : o;
                  c(),
                    (a.options = Object.assign({}, i, a.options, m)),
                    (a.scrollParents = {
                      reference: x(e) ? H(e) : e.contextElement ? H(e.contextElement) : [],
                      popper: H(t),
                    });
                  var h =
                    ((s = Object.keys(
                      (n = [].concat(r, a.options.modifiers).reduce(function (e, t) {
                        var o = e[t.name];
                        return (
                          (e[t.name] = o
                            ? Object.assign({}, o, t, {
                                options: Object.assign({}, o.options, t.options),
                                data: Object.assign({}, o.data, t.data),
                              })
                            : t),
                          e
                        );
                      }, {}))
                    ).map(function (e) {
                      return n[e];
                    })),
                    (f = new Map()),
                    (u = new Set()),
                    (d = []),
                    s.forEach(function (e) {
                      f.set(e.name, e);
                    }),
                    s.forEach(function (e) {
                      u.has(e.name) ||
                        (function e(t) {
                          u.add(t.name),
                            []
                              .concat(t.requires || [], t.requiresIfExists || [])
                              .forEach(function (t) {
                                if (!u.has(t)) {
                                  var o = f.get(t);
                                  o && e(o);
                                }
                              }),
                            d.push(t);
                        })(e);
                    }),
                    K.reduce(function (e, t) {
                      return e.concat(
                        d.filter(function (e) {
                          return e.phase === t;
                        })
                      );
                    }, []));
                  return (
                    (a.orderedModifiers = h.filter(function (e) {
                      return e.enabled;
                    })),
                    a.orderedModifiers.forEach(function (e) {
                      var t = e.name,
                        o = e.options,
                        r = e.effect;
                      if ('function' == typeof r) {
                        var n = r({
                          state: a,
                          name: t,
                          instance: l,
                          options: void 0 === o ? {} : o,
                        });
                        p.push(n || function () {});
                      }
                    }),
                    l.update()
                  );
                },
                forceUpdate: function () {
                  if (!s) {
                    var e,
                      t,
                      o,
                      r,
                      n,
                      i,
                      p,
                      c,
                      f,
                      u,
                      d,
                      m = a.elements,
                      h = m.reference,
                      g = m.popper;
                    if (Z(h, g)) {
                      (a.rects = {
                        reference:
                          ((e = N(g)),
                          (t = 'fixed' === a.options.strategy),
                          (o = O(e)),
                          (p =
                            O(e) &&
                            ((n = T((r = e.getBoundingClientRect()).width) / e.offsetWidth || 1),
                            (i = T(r.height) / e.offsetHeight || 1),
                            1 !== n || 1 !== i)),
                          (c = L(e)),
                          (f = M(h, p, t)),
                          (u = { scrollLeft: 0, scrollTop: 0 }),
                          (d = { x: 0, y: 0 }),
                          (o || (!o && !t)) &&
                            (('body' !== S(e) || B(c)) &&
                              (u = (function (e) {
                                return e !== w(e) && O(e)
                                  ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
                                  : k(e);
                              })(e)),
                            O(e)
                              ? ((d = M(e, !0)), (d.x += e.clientLeft), (d.y += e.clientTop))
                              : c && (d.x = W(c))),
                          {
                            x: f.left + u.scrollLeft - d.x,
                            y: f.top + u.scrollTop - d.y,
                            width: f.width,
                            height: f.height,
                          }),
                        popper: $(g),
                      }),
                        (a.reset = !1),
                        (a.placement = a.options.placement),
                        a.orderedModifiers.forEach(function (e) {
                          return (a.modifiersData[e.name] = Object.assign({}, e.data));
                        });
                      for (var v = 0; v < a.orderedModifiers.length; v++) {
                        if (!0 === a.reset) {
                          (a.reset = !1), (v = -1);
                          continue;
                        }
                        var y = a.orderedModifiers[v],
                          b = y.fn,
                          x = y.options,
                          A = void 0 === x ? {} : x,
                          R = y.name;
                        'function' == typeof b &&
                          (a = b({ state: a, options: A, name: R, instance: l }) || a);
                      }
                    }
                  }
                },
                update: function () {
                  return (
                    n ||
                      (n = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          (n = void 0),
                            e(
                              new Promise(function (e) {
                                l.forceUpdate(), e(a);
                              })
                            );
                        });
                      })),
                    n
                  );
                },
                destroy: function () {
                  c(), (s = !0);
                },
              };
            if (!Z(e, t)) return l;
            function c() {
              p.forEach(function (e) {
                return e();
              }),
                (p = []);
            }
            return (
              l.setOptions(o).then(function (e) {
                !s && o.onFirstUpdate && o.onFirstUpdate(e);
              }),
              l
            );
          };
        })({
          defaultModifiers: [
            {
              name: 'eventListeners',
              enabled: !0,
              phase: 'write',
              fn: function () {},
              effect: function (e) {
                var t = e.state,
                  o = e.instance,
                  r = e.options,
                  n = r.scroll,
                  i = void 0 === n || n,
                  a = r.resize,
                  p = void 0 === a || a,
                  s = w(t.elements.popper),
                  l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                return (
                  i &&
                    l.forEach(function (e) {
                      e.addEventListener('scroll', o.update, ee);
                    }),
                  p && s.addEventListener('resize', o.update, ee),
                  function () {
                    i &&
                      l.forEach(function (e) {
                        e.removeEventListener('scroll', o.update, ee);
                      }),
                      p && s.removeEventListener('resize', o.update, ee);
                  }
                );
              },
              data: {},
            },
            {
              name: 'popperOffsets',
              enabled: !0,
              phase: 'read',
              fn: function (e) {
                var t = e.state,
                  o = e.name;
                t.modifiersData[o] = en({
                  reference: t.rects.reference,
                  element: t.rects.popper,
                  strategy: 'absolute',
                  placement: t.placement,
                });
              },
              data: {},
            },
            {
              name: 'computeStyles',
              enabled: !0,
              phase: 'beforeWrite',
              fn: function (e) {
                var t = e.state,
                  o = e.options,
                  r = o.gpuAcceleration,
                  n = o.adaptive,
                  i = o.roundOffsets,
                  a = void 0 === i || i,
                  p = {
                    placement: et(t.placement),
                    variation: eo(t.placement),
                    popper: t.elements.popper,
                    popperRect: t.rects.popper,
                    gpuAcceleration: void 0 === r || r,
                    isFixed: 'fixed' === t.options.strategy,
                  };
                null != t.modifiersData.popperOffsets &&
                  (t.styles.popper = Object.assign(
                    {},
                    t.styles.popper,
                    ea(
                      Object.assign({}, p, {
                        offsets: t.modifiersData.popperOffsets,
                        position: t.options.strategy,
                        adaptive: void 0 === n || n,
                        roundOffsets: a,
                      })
                    )
                  )),
                  null != t.modifiersData.arrow &&
                    (t.styles.arrow = Object.assign(
                      {},
                      t.styles.arrow,
                      ea(
                        Object.assign({}, p, {
                          offsets: t.modifiersData.arrow,
                          position: 'absolute',
                          adaptive: !1,
                          roundOffsets: a,
                        })
                      )
                    )),
                  (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                    'data-popper-placement': t.placement,
                  }));
              },
              data: {},
            },
            {
              name: 'applyStyles',
              enabled: !0,
              phase: 'write',
              fn: function (e) {
                var t = e.state;
                Object.keys(t.elements).forEach(function (e) {
                  var o = t.styles[e] || {},
                    r = t.attributes[e] || {},
                    n = t.elements[e];
                  O(n) &&
                    S(n) &&
                    (Object.assign(n.style, o),
                    Object.keys(r).forEach(function (e) {
                      var t = r[e];
                      !1 === t ? n.removeAttribute(e) : n.setAttribute(e, !0 === t ? '' : t);
                    }));
                });
              },
              effect: function (e) {
                var t = e.state,
                  o = {
                    popper: { position: t.options.strategy, left: '0', top: '0', margin: '0' },
                    arrow: { position: 'absolute' },
                    reference: {},
                  };
                return (
                  Object.assign(t.elements.popper.style, o.popper),
                  (t.styles = o),
                  t.elements.arrow && Object.assign(t.elements.arrow.style, o.arrow),
                  function () {
                    Object.keys(t.elements).forEach(function (e) {
                      var r = t.elements[e],
                        n = t.attributes[e] || {},
                        i = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : o[e]).reduce(
                          function (e, t) {
                            return (e[t] = ''), e;
                          },
                          {}
                        );
                      O(r) &&
                        S(r) &&
                        (Object.assign(r.style, i),
                        Object.keys(n).forEach(function (e) {
                          r.removeAttribute(e);
                        }));
                    });
                  }
                );
              },
              requires: ['computeStyles'],
            },
            {
              name: 'offset',
              enabled: !0,
              phase: 'main',
              requires: ['popperOffsets'],
              fn: function (e) {
                var t = e.state,
                  o = e.options,
                  r = e.name,
                  n = o.offset,
                  i = void 0 === n ? [0, 0] : n,
                  a = J.reduce(function (e, o) {
                    var r, n, a, p, s, l;
                    return (
                      (e[o] =
                        ((r = t.rects),
                        (a = [q, 'top'].indexOf((n = et(o))) >= 0 ? -1 : 1),
                        (s = (p =
                          'function' == typeof i
                            ? i(Object.assign({}, r, { placement: o }))
                            : i)[0]),
                        (l = p[1]),
                        (s = s || 0),
                        (l = (l || 0) * a),
                        [q, F].indexOf(n) >= 0 ? { x: l, y: s } : { x: s, y: l })),
                      e
                    );
                  }, {}),
                  p = a[t.placement],
                  s = p.x,
                  l = p.y;
                null != t.modifiersData.popperOffsets &&
                  ((t.modifiersData.popperOffsets.x += s), (t.modifiersData.popperOffsets.y += l)),
                  (t.modifiersData[r] = a);
              },
            },
            {
              name: 'flip',
              enabled: !0,
              phase: 'main',
              fn: function (e) {
                var t = e.state,
                  o = e.options,
                  r = e.name;
                if (!t.modifiersData[r]._skip) {
                  for (
                    var n = o.mainAxis,
                      i = void 0 === n || n,
                      a = o.altAxis,
                      p = void 0 === a || a,
                      s = o.fallbackPlacements,
                      l = o.padding,
                      c = o.boundary,
                      f = o.rootBoundary,
                      u = o.altBoundary,
                      d = o.flipVariations,
                      m = void 0 === d || d,
                      h = o.allowedAutoPlacements,
                      g = t.options.placement,
                      v = et(g) === g,
                      y =
                        s ||
                        (v || !m
                          ? [es(g)]
                          : (function (e) {
                              if (et(e) === U) return [];
                              var t = es(e);
                              return [ec(e), t, ec(t)];
                            })(g)),
                      b = [g].concat(y).reduce(function (e, o) {
                        var r, n, i, a, p, s, u, d, g, v, y, b;
                        return e.concat(
                          et(o) === U
                            ? ((n = (r = {
                                placement: o,
                                boundary: c,
                                rootBoundary: f,
                                padding: l,
                                flipVariations: m,
                                allowedAutoPlacements: h,
                              }).placement),
                              (i = r.boundary),
                              (a = r.rootBoundary),
                              (p = r.padding),
                              (s = r.flipVariations),
                              (d = void 0 === (u = r.allowedAutoPlacements) ? J : u),
                              0 ===
                                (y = (v = (g = eo(n))
                                  ? s
                                    ? G
                                    : G.filter(function (e) {
                                        return eo(e) === g;
                                      })
                                  : z).filter(function (e) {
                                  return d.indexOf(e) >= 0;
                                })).length && (y = v),
                              Object.keys(
                                (b = y.reduce(function (e, o) {
                                  return (
                                    (e[o] = ev(t, {
                                      placement: o,
                                      boundary: i,
                                      rootBoundary: a,
                                      padding: p,
                                    })[et(o)]),
                                    e
                                  );
                                }, {}))
                              ).sort(function (e, t) {
                                return b[e] - b[t];
                              }))
                            : o
                        );
                      }, []),
                      w = t.rects.reference,
                      x = t.rects.popper,
                      O = new Map(),
                      A = !0,
                      R = b[0],
                      E = 0;
                    E < b.length;
                    E++
                  ) {
                    var T = b[E],
                      j = et(T),
                      P = eo(T) === _,
                      M = ['top', V].indexOf(j) >= 0,
                      k = M ? 'width' : 'height',
                      S = ev(t, {
                        placement: T,
                        boundary: c,
                        rootBoundary: f,
                        altBoundary: u,
                        padding: l,
                      }),
                      L = M ? (P ? F : q) : P ? V : 'top';
                    w[k] > x[k] && (L = es(L));
                    var W = es(L),
                      D = [];
                    if (
                      (i && D.push(S[j] <= 0),
                      p && D.push(S[L] <= 0, S[W] <= 0),
                      D.every(function (e) {
                        return e;
                      }))
                    ) {
                      (R = T), (A = !1);
                      break;
                    }
                    O.set(T, D);
                  }
                  if (A)
                    for (
                      var B = m ? 3 : 1,
                        $ = function (e) {
                          var t = b.find(function (t) {
                            var o = O.get(t);
                            if (o)
                              return o.slice(0, e).every(function (e) {
                                return e;
                              });
                          });
                          if (t) return (R = t), 'break';
                        },
                        C = B;
                      C > 0 && 'break' !== $(C);
                      C--
                    );
                  t.placement !== R &&
                    ((t.modifiersData[r]._skip = !0), (t.placement = R), (t.reset = !0));
                }
              },
              requiresIfExists: ['offset'],
              data: { _skip: !1 },
            },
            {
              name: 'preventOverflow',
              enabled: !0,
              phase: 'main',
              fn: function (e) {
                var t = e.state,
                  o = e.options,
                  r = e.name,
                  n = o.mainAxis,
                  i = o.altAxis,
                  a = o.boundary,
                  p = o.rootBoundary,
                  s = o.altBoundary,
                  l = o.padding,
                  c = o.tether,
                  f = void 0 === c || c,
                  u = o.tetherOffset,
                  d = void 0 === u ? 0 : u,
                  m = ev(t, { boundary: a, rootBoundary: p, padding: l, altBoundary: s }),
                  h = et(t.placement),
                  g = eo(t.placement),
                  v = !g,
                  y = er(h),
                  b = 'x' === y ? 'y' : 'x',
                  w = t.modifiersData.popperOffsets,
                  x = t.rects.reference,
                  O = t.rects.popper,
                  A =
                    'function' == typeof d
                      ? d(Object.assign({}, t.rects, { placement: t.placement }))
                      : d,
                  T =
                    'number' == typeof A
                      ? { mainAxis: A, altAxis: A }
                      : Object.assign({ mainAxis: 0, altAxis: 0 }, A),
                  j = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                  P = { x: 0, y: 0 };
                if (w) {
                  if (void 0 === n || n) {
                    var M,
                      k = 'y' === y ? 'top' : q,
                      S = 'y' === y ? V : F,
                      L = 'y' === y ? 'height' : 'width',
                      W = w[y],
                      D = W + m[k],
                      B = W - m[S],
                      C = f ? -O[L] / 2 : 0,
                      H = g === _ ? x[L] : O[L],
                      I = g === _ ? -O[L] : -x[L],
                      U = t.elements.arrow,
                      z = f && U ? $(U) : { width: 0, height: 0 },
                      X = t.modifiersData['arrow#persistent']
                        ? t.modifiersData['arrow#persistent'].padding
                        : em(),
                      Y = X[k],
                      G = X[S],
                      J = ey(0, x[L], z[L]),
                      K = v ? x[L] / 2 - C - J - Y - T.mainAxis : H - J - Y - T.mainAxis,
                      Q = v ? -x[L] / 2 + C + J + G + T.mainAxis : I + J + G + T.mainAxis,
                      Z = t.elements.arrow && N(t.elements.arrow),
                      ee = Z ? ('y' === y ? Z.clientTop || 0 : Z.clientLeft || 0) : 0,
                      en = null != (M = null == j ? void 0 : j[y]) ? M : 0,
                      ei = ey(f ? E(D, W + K - en - ee) : D, W, f ? R(B, W + Q - en) : B);
                    (w[y] = ei), (P[y] = ei - W);
                  }
                  if (void 0 !== i && i) {
                    var ea,
                      ep,
                      es = 'x' === y ? 'top' : q,
                      el = 'x' === y ? V : F,
                      ec = w[b],
                      ef = 'y' === b ? 'height' : 'width',
                      eu = ec + m[es],
                      ed = ec - m[el],
                      eh = -1 !== ['top', q].indexOf(h),
                      eg = null != (ep = null == j ? void 0 : j[b]) ? ep : 0,
                      eb = eh ? eu : ec - x[ef] - O[ef] - eg + T.altAxis,
                      ew = eh ? ec + x[ef] + O[ef] - eg - T.altAxis : ed,
                      ex =
                        f && eh
                          ? (ea = ey(eb, ec, ew)) > ew
                            ? ew
                            : ea
                          : ey(f ? eb : eu, ec, f ? ew : ed);
                    (w[b] = ex), (P[b] = ex - ec);
                  }
                  t.modifiersData[r] = P;
                }
              },
              requiresIfExists: ['offset'],
            },
            {
              name: 'arrow',
              enabled: !0,
              phase: 'main',
              fn: function (e) {
                var t,
                  o,
                  r = e.state,
                  n = e.name,
                  i = e.options,
                  a = r.elements.arrow,
                  p = r.modifiersData.popperOffsets,
                  s = et(r.placement),
                  l = er(s),
                  c = [q, F].indexOf(s) >= 0 ? 'height' : 'width';
                if (a && p) {
                  var f = eh(
                      'number' !=
                        typeof (t =
                          'function' == typeof (t = i.padding)
                            ? t(Object.assign({}, r.rects, { placement: r.placement }))
                            : t)
                        ? t
                        : eg(t, z)
                    ),
                    u = $(a),
                    d = 'y' === l ? 'top' : q,
                    m = 'y' === l ? V : F,
                    h = r.rects.reference[c] + r.rects.reference[l] - p[l] - r.rects.popper[c],
                    g = p[l] - r.rects.reference[l],
                    v = N(a),
                    y = v ? ('y' === l ? v.clientHeight || 0 : v.clientWidth || 0) : 0,
                    b = f[d],
                    w = y - u[c] - f[m],
                    x = y / 2 - u[c] / 2 + (h / 2 - g / 2),
                    O = ey(b, x, w);
                  r.modifiersData[n] = (((o = {})[l] = O), (o.centerOffset = O - x), o);
                }
              },
              effect: function (e) {
                var t = e.state,
                  o = e.options.element,
                  r = void 0 === o ? '[data-popper-arrow]' : o;
                null != r &&
                  ('string' != typeof r || (r = t.elements.popper.querySelector(r))) &&
                  ef(t.elements.popper, r) &&
                  (t.elements.arrow = r);
              },
              requires: ['popperOffsets'],
              requiresIfExists: ['preventOverflow'],
            },
            {
              name: 'hide',
              enabled: !0,
              phase: 'main',
              requiresIfExists: ['preventOverflow'],
              fn: function (e) {
                var t = e.state,
                  o = e.name,
                  r = t.rects.reference,
                  n = t.rects.popper,
                  i = t.modifiersData.preventOverflow,
                  a = ev(t, { elementContext: 'reference' }),
                  p = ev(t, { altBoundary: !0 }),
                  s = eb(a, r),
                  l = eb(p, n, i),
                  c = ew(s),
                  f = ew(l);
                (t.modifiersData[o] = {
                  referenceClippingOffsets: s,
                  popperEscapeOffsets: l,
                  isReferenceHidden: c,
                  hasPopperEscaped: f,
                }),
                  (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                    'data-popper-reference-hidden': c,
                    'data-popper-escaped': f,
                  }));
              },
            },
          ],
        }),
        eO = o(97469),
        eA = o(98846),
        eR = o(61829),
        eE = o(75989);
      function eT(e) {
        return (0, eE.Ay)('MuiPopper', e);
      }
      (0, eR.A)('MuiPopper', ['root']);
      var ej = o(54568);
      function eP(e) {
        return 'function' == typeof e ? e() : e;
      }
      let eM = (e) => {
          let { classes: t } = e;
          return (0, a.A)({ root: ['root'] }, eT, t);
        },
        ek = {},
        eS = r.forwardRef(function (e, t) {
          let {
              anchorEl: o,
              children: n,
              direction: i,
              disablePortal: a,
              modifiers: p,
              open: s,
              placement: l,
              popperOptions: c,
              popperRef: f,
              slotProps: u = {},
              slots: d = {},
              TransitionProps: m,
              ownerState: h,
              ...g
            } = e,
            b = r.useRef(null),
            w = (0, v.A)(b, t),
            x = r.useRef(null),
            O = (0, v.A)(x, f),
            A = r.useRef(O);
          (0, y.A)(() => {
            A.current = O;
          }, [O]),
            r.useImperativeHandle(f, () => x.current, []);
          let R = (function (e, t) {
              if ('ltr' === t) return e;
              switch (e) {
                case 'bottom-end':
                  return 'bottom-start';
                case 'bottom-start':
                  return 'bottom-end';
                case 'top-end':
                  return 'top-start';
                case 'top-start':
                  return 'top-end';
                default:
                  return e;
              }
            })(l, i),
            [E, T] = r.useState(R),
            [j, P] = r.useState(eP(o));
          r.useEffect(() => {
            x.current && x.current.forceUpdate();
          }),
            r.useEffect(() => {
              o && P(eP(o));
            }, [o]),
            (0, y.A)(() => {
              if (!j || !s) return;
              let e = (e) => {
                  T(e.placement);
                },
                t = [
                  { name: 'preventOverflow', options: { altBoundary: a } },
                  { name: 'flip', options: { altBoundary: a } },
                  {
                    name: 'onUpdate',
                    enabled: !0,
                    phase: 'afterWrite',
                    fn: ({ state: t }) => {
                      e(t);
                    },
                  },
                ];
              null != p && (t = t.concat(p)),
                c && null != c.modifiers && (t = t.concat(c.modifiers));
              let o = ex(j, b.current, { placement: R, ...c, modifiers: t });
              return (
                A.current(o),
                () => {
                  o.destroy(), A.current(null);
                }
              );
            }, [j, a, p, s, c, R]);
          let M = { placement: E };
          null !== m && (M.TransitionProps = m);
          let k = eM(e),
            S = d.root ?? 'div',
            L = (0, eO.A)({
              elementType: S,
              externalSlotProps: u.root,
              externalForwardedProps: g,
              additionalProps: { role: 'tooltip', ref: w },
              ownerState: e,
              className: k.root,
            });
          return (0, ej.jsx)(S, { ...L, children: 'function' == typeof n ? n(M) : n });
        }),
        eL = r.forwardRef(function (e, t) {
          let o;
          let {
              anchorEl: n,
              children: i,
              container: a,
              direction: p = 'ltr',
              disablePortal: s = !1,
              keepMounted: l = !1,
              modifiers: c,
              open: f,
              placement: u = 'bottom',
              popperOptions: d = ek,
              popperRef: m,
              style: h,
              transition: g = !1,
              slotProps: v = {},
              slots: y = {},
              ...w
            } = e,
            [x, O] = r.useState(!0);
          if (!l && !f && (!g || x)) return null;
          if (a) o = a;
          else if (n) {
            let e = eP(n);
            o = e && void 0 !== e.nodeType ? (0, b.A)(e).body : (0, b.A)(null).body;
          }
          let A = !f && l && (!g || x) ? 'none' : void 0,
            R = g
              ? {
                  in: f,
                  onEnter: () => {
                    O(!1);
                  },
                  onExited: () => {
                    O(!0);
                  },
                }
              : void 0;
          return (0, ej.jsx)(eA.A, {
            disablePortal: s,
            container: o,
            children: (0, ej.jsx)(eS, {
              anchorEl: n,
              direction: p,
              disablePortal: s,
              modifiers: c,
              ref: t,
              open: g ? !x : f,
              placement: u,
              popperOptions: d,
              popperRef: m,
              slotProps: v,
              slots: y,
              ...w,
              style: { position: 'fixed', top: 0, left: 0, display: A, ...h },
              TransitionProps: R,
              children: i,
            }),
          });
        }),
        eW = (0, f.Ay)(eL, {
          name: 'MuiPopper',
          slot: 'Root',
          overridesResolver: (e, t) => t.root,
        })({}),
        eD = r.forwardRef(function (e, t) {
          let o = (0, s.I)(),
            {
              anchorEl: r,
              component: n,
              components: i,
              componentsProps: a,
              container: p,
              disablePortal: l,
              keepMounted: c,
              modifiers: f,
              open: u,
              placement: d,
              popperOptions: h,
              popperRef: g,
              transition: v,
              slots: y,
              slotProps: b,
              ...w
            } = (0, m.b)({ props: e, name: 'MuiPopper' }),
            x = y?.root ?? i?.Root,
            O = {
              anchorEl: r,
              container: p,
              disablePortal: l,
              keepMounted: c,
              modifiers: f,
              open: u,
              placement: d,
              popperOptions: h,
              popperRef: g,
              transition: v,
              ...w,
            };
          return (0, ej.jsx)(eW, {
            as: n,
            direction: o ? 'rtl' : 'ltr',
            slots: { root: x },
            slotProps: b ?? a,
            ...O,
            ref: t,
          });
        });
      var eB = o(59926),
        e$ = o(39600),
        eC = o(62062),
        eH = o(35861),
        eI = o(3723);
      function eN(e) {
        return (0, eE.Ay)('MuiTooltip', e);
      }
      let eV = (0, eR.A)('MuiTooltip', [
          'popper',
          'popperInteractive',
          'popperArrow',
          'popperClose',
          'tooltip',
          'tooltipArrow',
          'touch',
          'tooltipPlacementLeft',
          'tooltipPlacementRight',
          'tooltipPlacementTop',
          'tooltipPlacementBottom',
          'arrow',
        ]),
        eF = (e) => {
          let { classes: t, disableInteractive: o, arrow: r, touch: n, placement: i } = e,
            p = {
              popper: ['popper', !o && 'popperInteractive', r && 'popperArrow'],
              tooltip: [
                'tooltip',
                r && 'tooltipArrow',
                n && 'touch',
                `tooltipPlacement${(0, h.A)(i.split('-')[0])}`,
              ],
              arrow: ['arrow'],
            };
          return (0, a.A)(p, eN, t);
        },
        eq = (0, f.Ay)(eD, {
          name: 'MuiTooltip',
          slot: 'Popper',
          overridesResolver: (e, t) => {
            let { ownerState: o } = e;
            return [
              t.popper,
              !o.disableInteractive && t.popperInteractive,
              o.arrow && t.popperArrow,
              !o.open && t.popperClose,
            ];
          },
        })(
          (0, d.A)(({ theme: e }) => ({
            zIndex: (e.vars || e).zIndex.tooltip,
            pointerEvents: 'none',
            variants: [
              {
                props: ({ ownerState: e }) => !e.disableInteractive,
                style: { pointerEvents: 'auto' },
              },
              { props: ({ open: e }) => !e, style: { pointerEvents: 'none' } },
              {
                props: ({ ownerState: e }) => e.arrow,
                style: {
                  [`&[data-popper-placement*="bottom"] .${eV.arrow}`]: {
                    top: 0,
                    marginTop: '-0.71em',
                    '&::before': { transformOrigin: '0 100%' },
                  },
                  [`&[data-popper-placement*="top"] .${eV.arrow}`]: {
                    bottom: 0,
                    marginBottom: '-0.71em',
                    '&::before': { transformOrigin: '100% 0' },
                  },
                  [`&[data-popper-placement*="right"] .${eV.arrow}`]: {
                    height: '1em',
                    width: '0.71em',
                    '&::before': { transformOrigin: '100% 100%' },
                  },
                  [`&[data-popper-placement*="left"] .${eV.arrow}`]: {
                    height: '1em',
                    width: '0.71em',
                    '&::before': { transformOrigin: '0 0' },
                  },
                },
              },
              {
                props: ({ ownerState: e }) => e.arrow && !e.isRtl,
                style: {
                  [`&[data-popper-placement*="right"] .${eV.arrow}`]: {
                    left: 0,
                    marginLeft: '-0.71em',
                  },
                },
              },
              {
                props: ({ ownerState: e }) => e.arrow && !!e.isRtl,
                style: {
                  [`&[data-popper-placement*="right"] .${eV.arrow}`]: {
                    right: 0,
                    marginRight: '-0.71em',
                  },
                },
              },
              {
                props: ({ ownerState: e }) => e.arrow && !e.isRtl,
                style: {
                  [`&[data-popper-placement*="left"] .${eV.arrow}`]: {
                    right: 0,
                    marginRight: '-0.71em',
                  },
                },
              },
              {
                props: ({ ownerState: e }) => e.arrow && !!e.isRtl,
                style: {
                  [`&[data-popper-placement*="left"] .${eV.arrow}`]: {
                    left: 0,
                    marginLeft: '-0.71em',
                  },
                },
              },
            ],
          }))
        ),
        eU = (0, f.Ay)('div', {
          name: 'MuiTooltip',
          slot: 'Tooltip',
          overridesResolver: (e, t) => {
            let { ownerState: o } = e;
            return [
              t.tooltip,
              o.touch && t.touch,
              o.arrow && t.tooltipArrow,
              t[`tooltipPlacement${(0, h.A)(o.placement.split('-')[0])}`],
            ];
          },
        })(
          (0, d.A)(({ theme: e }) => ({
            backgroundColor: e.vars
              ? e.vars.palette.Tooltip.bg
              : (0, p.X4)(e.palette.grey[700], 0.92),
            borderRadius: (e.vars || e).shape.borderRadius,
            color: (e.vars || e).palette.common.white,
            fontFamily: e.typography.fontFamily,
            padding: '4px 8px',
            fontSize: e.typography.pxToRem(11),
            maxWidth: 300,
            margin: 2,
            wordWrap: 'break-word',
            fontWeight: e.typography.fontWeightMedium,
            [`.${eV.popper}[data-popper-placement*="left"] &`]: { transformOrigin: 'right center' },
            [`.${eV.popper}[data-popper-placement*="right"] &`]: { transformOrigin: 'left center' },
            [`.${eV.popper}[data-popper-placement*="top"] &`]: {
              transformOrigin: 'center bottom',
              marginBottom: '14px',
            },
            [`.${eV.popper}[data-popper-placement*="bottom"] &`]: {
              transformOrigin: 'center top',
              marginTop: '14px',
            },
            variants: [
              { props: ({ ownerState: e }) => e.arrow, style: { position: 'relative', margin: 0 } },
              {
                props: ({ ownerState: e }) => e.touch,
                style: {
                  padding: '8px 16px',
                  fontSize: e.typography.pxToRem(14),
                  lineHeight: `${Math.round((16 / 14) * 1e5) / 1e5}em`,
                  fontWeight: e.typography.fontWeightRegular,
                },
              },
              {
                props: ({ ownerState: e }) => !e.isRtl,
                style: {
                  [`.${eV.popper}[data-popper-placement*="left"] &`]: { marginRight: '14px' },
                  [`.${eV.popper}[data-popper-placement*="right"] &`]: { marginLeft: '14px' },
                },
              },
              {
                props: ({ ownerState: e }) => !e.isRtl && e.touch,
                style: {
                  [`.${eV.popper}[data-popper-placement*="left"] &`]: { marginRight: '24px' },
                  [`.${eV.popper}[data-popper-placement*="right"] &`]: { marginLeft: '24px' },
                },
              },
              {
                props: ({ ownerState: e }) => !!e.isRtl,
                style: {
                  [`.${eV.popper}[data-popper-placement*="left"] &`]: { marginLeft: '14px' },
                  [`.${eV.popper}[data-popper-placement*="right"] &`]: { marginRight: '14px' },
                },
              },
              {
                props: ({ ownerState: e }) => !!e.isRtl && e.touch,
                style: {
                  [`.${eV.popper}[data-popper-placement*="left"] &`]: { marginLeft: '24px' },
                  [`.${eV.popper}[data-popper-placement*="right"] &`]: { marginRight: '24px' },
                },
              },
              {
                props: ({ ownerState: e }) => e.touch,
                style: {
                  [`.${eV.popper}[data-popper-placement*="top"] &`]: { marginBottom: '24px' },
                },
              },
              {
                props: ({ ownerState: e }) => e.touch,
                style: {
                  [`.${eV.popper}[data-popper-placement*="bottom"] &`]: { marginTop: '24px' },
                },
              },
            ],
          }))
        ),
        ez = (0, f.Ay)('span', {
          name: 'MuiTooltip',
          slot: 'Arrow',
          overridesResolver: (e, t) => t.arrow,
        })(
          (0, d.A)(({ theme: e }) => ({
            overflow: 'hidden',
            position: 'absolute',
            width: '1em',
            height: '0.71em',
            boxSizing: 'border-box',
            color: e.vars ? e.vars.palette.Tooltip.bg : (0, p.X4)(e.palette.grey[700], 0.9),
            '&::before': {
              content: '""',
              margin: 'auto',
              display: 'block',
              width: '100%',
              height: '100%',
              backgroundColor: 'currentColor',
              transform: 'rotate(45deg)',
            },
          }))
        ),
        e_ = !1,
        eX = new i.E(),
        eY = { x: 0, y: 0 };
      function eG(e, t) {
        return (o, ...r) => {
          t && t(o, ...r), e(o, ...r);
        };
      }
      let eJ = r.forwardRef(function (e, t) {
        let o = (0, m.b)({ props: e, name: 'MuiTooltip' }),
          {
            arrow: a = !1,
            children: p,
            classes: f,
            components: d = {},
            componentsProps: h = {},
            describeChild: v = !1,
            disableFocusListener: y = !1,
            disableHoverListener: b = !1,
            disableInteractive: w = !1,
            disableTouchListener: x = !1,
            enterDelay: O = 100,
            enterNextDelay: A = 0,
            enterTouchDelay: R = 700,
            followCursor: E = !1,
            id: T,
            leaveDelay: j = 0,
            leaveTouchDelay: P = 1500,
            onClose: M,
            onOpen: k,
            open: S,
            placement: L = 'bottom',
            PopperComponent: W,
            PopperProps: D = {},
            slotProps: B = {},
            slots: $ = {},
            title: C,
            TransitionComponent: H,
            TransitionProps: I,
            ...N
          } = o,
          V = r.isValidElement(p) ? p : (0, ej.jsx)('span', { children: p }),
          F = (0, u.A)(),
          q = (0, s.I)(),
          [U, z] = r.useState(),
          [_, X] = r.useState(null),
          Y = r.useRef(!1),
          G = w || E,
          J = (0, i.A)(),
          K = (0, i.A)(),
          Q = (0, i.A)(),
          Z = (0, i.A)(),
          [ee, et] = (0, eH.A)({ controlled: S, default: !1, name: 'Tooltip', state: 'open' }),
          eo = ee,
          er = (0, eC.A)(T),
          en = r.useRef(),
          ei = (0, eB.A)(() => {
            void 0 !== en.current &&
              ((document.body.style.WebkitUserSelect = en.current), (en.current = void 0)),
              Z.clear();
          });
        r.useEffect(() => ei, [ei]);
        let ea = (e) => {
            eX.clear(), (e_ = !0), et(!0), k && !eo && k(e);
          },
          ep = (0, eB.A)((e) => {
            eX.start(800 + j, () => {
              e_ = !1;
            }),
              et(!1),
              M && eo && M(e),
              J.start(F.transitions.duration.shortest, () => {
                Y.current = !1;
              });
          }),
          es = (e) => {
            (!Y.current || 'touchstart' === e.type) &&
              (U && U.removeAttribute('title'),
              K.clear(),
              Q.clear(),
              O || (e_ && A)
                ? K.start(e_ ? A : O, () => {
                    ea(e);
                  })
                : ea(e));
          },
          el = (e) => {
            K.clear(),
              Q.start(j, () => {
                ep(e);
              });
          },
          [, ec] = r.useState(!1),
          ef = (e) => {
            (0, l.A)(e.target) || (ec(!1), el(e));
          },
          eu = (e) => {
            U || z(e.currentTarget), (0, l.A)(e.target) && (ec(!0), es(e));
          },
          ed = (e) => {
            Y.current = !0;
            let t = V.props;
            t.onTouchStart && t.onTouchStart(e);
          };
        r.useEffect(() => {
          if (eo)
            return (
              document.addEventListener('keydown', e),
              () => {
                document.removeEventListener('keydown', e);
              }
            );
          function e(e) {
            'Escape' === e.key && ep(e);
          }
        }, [ep, eo]);
        let em = (0, e$.A)((0, c.A)(V), z, t);
        C || 0 === C || (eo = !1);
        let eh = r.useRef(),
          eg = {},
          ev = 'string' == typeof C;
        v
          ? ((eg.title = eo || !ev || b ? null : C), (eg['aria-describedby'] = eo ? er : null))
          : ((eg['aria-label'] = ev ? C : null), (eg['aria-labelledby'] = eo && !ev ? er : null));
        let ey = {
            ...eg,
            ...N,
            ...V.props,
            className: (0, n.A)(N.className, V.props.className),
            onTouchStart: ed,
            ref: em,
            ...(E
              ? {
                  onMouseMove: (e) => {
                    let t = V.props;
                    t.onMouseMove && t.onMouseMove(e),
                      (eY = { x: e.clientX, y: e.clientY }),
                      eh.current && eh.current.update();
                  },
                }
              : {}),
          },
          eb = {};
        x ||
          ((ey.onTouchStart = (e) => {
            ed(e),
              Q.clear(),
              J.clear(),
              ei(),
              (en.current = document.body.style.WebkitUserSelect),
              (document.body.style.WebkitUserSelect = 'none'),
              Z.start(R, () => {
                (document.body.style.WebkitUserSelect = en.current), es(e);
              });
          }),
          (ey.onTouchEnd = (e) => {
            V.props.onTouchEnd && V.props.onTouchEnd(e),
              ei(),
              Q.start(P, () => {
                ep(e);
              });
          })),
          b ||
            ((ey.onMouseOver = eG(es, ey.onMouseOver)),
            (ey.onMouseLeave = eG(el, ey.onMouseLeave)),
            G || ((eb.onMouseOver = es), (eb.onMouseLeave = el))),
          y ||
            ((ey.onFocus = eG(eu, ey.onFocus)),
            (ey.onBlur = eG(ef, ey.onBlur)),
            G || ((eb.onFocus = eu), (eb.onBlur = ef)));
        let ew = {
            ...o,
            isRtl: q,
            arrow: a,
            disableInteractive: G,
            placement: L,
            PopperComponentProp: W,
            touch: Y.current,
          },
          ex = 'function' == typeof B.popper ? B.popper(ew) : B.popper,
          eO = r.useMemo(() => {
            let e = [{ name: 'arrow', enabled: !!_, options: { element: _, padding: 4 } }];
            return (
              D.popperOptions?.modifiers && (e = e.concat(D.popperOptions.modifiers)),
              ex?.popperOptions?.modifiers && (e = e.concat(ex.popperOptions.modifiers)),
              { ...D.popperOptions, ...ex?.popperOptions, modifiers: e }
            );
          }, [_, D.popperOptions, ex?.popperOptions]),
          eA = eF(ew),
          eR = 'function' == typeof B.transition ? B.transition(ew) : B.transition,
          eE = {
            slots: {
              popper: d.Popper,
              transition: d.Transition ?? H,
              tooltip: d.Tooltip,
              arrow: d.Arrow,
              ...$,
            },
            slotProps: {
              arrow: B.arrow ?? h.arrow,
              popper: { ...D, ...(ex ?? h.popper) },
              tooltip: B.tooltip ?? h.tooltip,
              transition: { ...I, ...(eR ?? h.transition) },
            },
          },
          [eT, eP] = (0, eI.A)('popper', {
            elementType: eq,
            externalForwardedProps: eE,
            ownerState: ew,
            className: (0, n.A)(eA.popper, D?.className),
          }),
          [eM, ek] = (0, eI.A)('transition', {
            elementType: g.A,
            externalForwardedProps: eE,
            ownerState: ew,
          }),
          [eS, eL] = (0, eI.A)('tooltip', {
            elementType: eU,
            className: eA.tooltip,
            externalForwardedProps: eE,
            ownerState: ew,
          }),
          [eW, eN] = (0, eI.A)('arrow', {
            elementType: ez,
            className: eA.arrow,
            externalForwardedProps: eE,
            ownerState: ew,
            ref: X,
          });
        return (0, ej.jsxs)(r.Fragment, {
          children: [
            r.cloneElement(V, ey),
            (0, ej.jsx)(eT, {
              as: W ?? eD,
              placement: L,
              anchorEl: E
                ? {
                    getBoundingClientRect: () => ({
                      top: eY.y,
                      left: eY.x,
                      right: eY.x,
                      bottom: eY.y,
                      width: 0,
                      height: 0,
                    }),
                  }
                : U,
              popperRef: eh,
              open: !!U && eo,
              id: er,
              transition: !0,
              ...eb,
              ...eP,
              popperOptions: eO,
              children: ({ TransitionProps: e }) =>
                (0, ej.jsx)(eM, {
                  timeout: F.transitions.duration.shorter,
                  ...e,
                  ...ek,
                  children: (0, ej.jsxs)(eS, {
                    ...eL,
                    children: [C, a ? (0, ej.jsx)(eW, { ...eN }) : null],
                  }),
                }),
            }),
          ],
        });
      });
    },
    97469: (e, t, o) => {
      o.d(t, { A: () => p });
      var r = o(5511),
        n = o(85249),
        i = o(79036),
        a = o(68229);
      let p = function (e) {
        let {
            elementType: t,
            externalSlotProps: o,
            ownerState: p,
            skipResolvingSlotProps: s = !1,
            ...l
          } = e,
          c = s ? {} : (0, a.A)(o, p),
          { props: f, internalRef: u } = (0, i.A)({ ...l, externalSlotProps: c }),
          d = (0, r.A)(u, c?.ref, e.additionalProps?.ref);
        return (0, n.A)(t, { ...f, ref: d }, p);
      };
    },
  },
]);
