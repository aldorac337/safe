(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4512, 5297, 5942],
  {
    17435: function (e, t, n) {
      'use strict';
      n.d(t, {
        u: function () {
          return u;
        },
      });
      var i = n(75040),
        a = n(58854),
        s = n(12432),
        l = n(81289),
        r = n(9486),
        o = n(76440),
        c = n.n(o),
        d = n(81425);
      let u = (e) => {
          let { fallback: t, variant: n = 'default', children: o, childrenClassname: u } = e,
            [p, m] = (0, a.useState)(!0),
            { height: x } = (0, d.i)(),
            f = (function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
              return {
                visible: { opacity: 1, transition: { staggerChildren: Math.min(0.04 * e, 0.175) } },
                hidden: { opacity: 0 },
              };
            })(857 / x);
          return (0, i.jsxs)(s.M, {
            mode: 'popLayout',
            children: [
              p &&
                (0, i.jsx)(
                  l.E.ul,
                  {
                    ...r.baseMotionVariants,
                    className: 'dashboard-item' === n ? c().list : void 0,
                    'data-variant': n,
                    children: t,
                  },
                  'fallback'
                ),
              (0, i.jsx)(a.Suspense, {
                fallback: null,
                children: (0, i.jsx)(
                  l.E.ul,
                  {
                    variants: f,
                    initial: 'hidden',
                    animate: p ? 'hidden' : 'visible',
                    className: [u, 'dashboard-item' === n ? c().list : void 0].join(' '),
                    'data-variant': n,
                    children: (0, i.jsx)(h, { setIsPending: m, children: o }),
                  },
                  'rendered'
                ),
              }),
            ],
          });
        },
        h = (e) => {
          let { setIsPending: t, children: n } = e;
          return (
            (0, a.useEffect)(() => {
              t(!1);
            }, [t]),
            n
          );
        };
    },
    71646: function (e, t, n) {
      'use strict';
      n.d(t, {
        L: function () {
          return w;
        },
      });
      var i = n(75040),
        a = n(58854),
        s = n(19441),
        l = n(7689),
        r = n.n(l),
        o = n(81289),
        c = n(92310),
        d = n(20364),
        u = n.n(d),
        h = n(3256),
        p = n.n(h),
        m = n(31601),
        x = n(75297),
        f = n(81145),
        v = n(26934),
        C = n(68494),
        _ = n(75962),
        y = n(4491),
        j = n(22421),
        g = n(9486);
      let w = (e) => {
        let {
            title: t,
            children: n,
            options: l,
            side: d = 'bottom',
            alignOffset: h = -7,
            align: w = 'start',
            sideOffset: b = 1,
            disabled: L,
            variant: N = 'primary',
            searchLabel: E,
            wide: k = !1,
            modalOnMobile: A = !0,
          } = e,
          [M, S] = a.useState(!1),
          [P, V] = a.useState(!1),
          { isMounted: H, isRendered: I } = (0, c.R)({ open: M, duration: 100 }),
          [F, B] = a.useState(''),
          R = l.filter((e) => !F || e.label.toLowerCase().includes(F.toLowerCase())),
          O = (0, j.d)(),
          Z = (0, y.nJ)();
        return O && A
          ? (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(x.u, {
                  title: null != t ? t : 'Options',
                  open: M,
                  onOpenChange: S,
                  children: (0, i.jsx)('div', {
                    className: u().modal,
                    children: (0, i.jsx)('div', {
                      'data-variant': 'secondary',
                      className: u().content,
                      'data-mobile': !0,
                      children: R.map((e) =>
                        (0, i.jsx)(
                          m.u,
                          {
                            disableHoverableContent: !0,
                            message: e.tooltip,
                            side: 'left',
                            sideOffset: 2,
                            open: !!e.tooltip && void 0,
                            children: (0, i.jsx)(f.x, {
                              as: e.href && !e.disabled ? r() : 'button',
                              href: e.href,
                              target: e.href && e.href.startsWith('http') ? '_blank' : void 0,
                              disabled: e.disabled,
                              className: u().item,
                              onClick: e.disabled
                                ? void 0
                                : async () => {
                                    var t;
                                    await (null === (t = e.onClick) || void 0 === t
                                      ? void 0
                                      : t.call(e)),
                                      S(!1);
                                  },
                              'data-tone': e.tone,
                              children: (0, i.jsxs)('span', {
                                className: u().label,
                                children: [
                                  e.icon &&
                                    (0, i.jsx)('div', {
                                      className: u().icon,
                                      style: { backgroundColor: e.iconBackground },
                                      children: e.icon,
                                    }),
                                  e.label,
                                  e.subLabel &&
                                    (0, i.jsx)('div', {
                                      className: u().subLabel,
                                      children: e.subLabel,
                                    }),
                                  e.href &&
                                    e.href.startsWith('http') &&
                                    (0, i.jsx)('div', {
                                      className: u().externalIcon,
                                      children: (0, i.jsx)(v.J, { name: 'externalLink' }),
                                    }),
                                ],
                              }),
                            }),
                          },
                          e.label
                        )
                      ),
                    }),
                  }),
                }),
                (0, i.jsx)('button', {
                  onClick: () => S(!M),
                  className: n ? u().trigger : u().dots,
                  'data-open': H,
                  'data-wide': k,
                  children:
                    null != n
                      ? n
                      : (0, i.jsxs)('svg', {
                          width: '16',
                          height: '16',
                          viewBox: '0 0 16 16',
                          fill: 'none',
                          xmlns: 'http://www.w3.org/2000/svg',
                          children: [
                            (0, i.jsx)('circle', {
                              cx: '13',
                              cy: '8',
                              r: '1.5',
                              transform: 'rotate(-180 13 8)',
                              fill: 'currentColor',
                            }),
                            (0, i.jsx)('circle', {
                              cx: '8',
                              cy: '8',
                              r: '1.5',
                              transform: 'rotate(-180 8 8)',
                              fill: 'currentColor',
                            }),
                            (0, i.jsx)('circle', {
                              cx: '3',
                              cy: '8',
                              r: '1.5',
                              transform: 'rotate(-180 3 8)',
                              fill: 'currentColor',
                            }),
                          ],
                        }),
                }),
              ],
            })
          : (0, i.jsxs)(s.fC, {
              open: H,
              onOpenChange: S,
              children: [
                (0, i.jsx)(s.xz, {
                  disabled: L,
                  className: ''.concat(u().trigger, ' ').concat(n ? '' : u().dots),
                  'data-open': H,
                  children:
                    null != n
                      ? n
                      : (0, i.jsxs)('svg', {
                          width: '16',
                          height: '16',
                          viewBox: '0 0 16 16',
                          fill: 'none',
                          xmlns: 'http://www.w3.org/2000/svg',
                          children: [
                            (0, i.jsx)('circle', {
                              cx: '13',
                              cy: '8',
                              r: '1.5',
                              transform: 'rotate(-180 13 8)',
                              fill: 'currentColor',
                            }),
                            (0, i.jsx)('circle', {
                              cx: '8',
                              cy: '8',
                              r: '1.5',
                              transform: 'rotate(-180 8 8)',
                              fill: 'currentColor',
                            }),
                            (0, i.jsx)('circle', {
                              cx: '3',
                              cy: '8',
                              r: '1.5',
                              transform: 'rotate(-180 3 8)',
                              fill: 'currentColor',
                            }),
                          ],
                        }),
                }),
                (0, i.jsx)(s.Uv, {
                  container: Z,
                  children: (0, i.jsxs)(s.VY, {
                    align: w,
                    alignOffset: h,
                    side: d,
                    sideOffset: b,
                    'data-variant': N,
                    className: ''
                      .concat(u().content, ' ')
                      .concat(I ? p().contentAnimEnter : p().contentAnimExit),
                    onPointerDownOutside: () => V(!0),
                    onEscapeKeyDown: () => V(!1),
                    onCloseAutoFocus: (e) => P && e.preventDefault(),
                    children: [
                      E &&
                        (0, i.jsx)('div', {
                          className: u().search,
                          children: (0, i.jsx)(C.I, {
                            autoFocus: !0,
                            type: 'search',
                            placeholder: E,
                            value: F,
                            onValueChange: B,
                            inputRight: (0, i.jsx)(o.E.button, {
                              type: 'button',
                              onClick: () => {
                                B('');
                              },
                              'aria-label': 'Clear Input Field',
                              className: u().clearButton,
                              animate: {
                                opacity: F.length > 0 ? 1 : 0,
                                scale: F.length > 0 ? 1 : 0.8,
                              },
                              style: { pointerEvents: 0 === F.length ? 'none' : void 0 },
                              transition: g.transitionSpringSnappy,
                              children: (0, i.jsx)('div', {
                                className: u().clearIcon,
                                children: (0, i.jsx)(v.J, { name: 'close' }),
                              }),
                            }),
                            onKeyDown: (e) => e.stopPropagation(),
                          }),
                        }),
                      E && 0 === R.length
                        ? (0, i.jsx)('div', {
                            className: u().noResults,
                            children: (0, i.jsx)('span', { children: 'No results found' }),
                          })
                        : (0, i.jsx)(_.w, {
                            duration: 400,
                            overflow: !0,
                            children: R.map((e) =>
                              (0, i.jsx)(
                                m.u,
                                {
                                  disableHoverableContent: !0,
                                  message: e.tooltip,
                                  side: 'left',
                                  sideOffset: 2,
                                  open: !!e.tooltip && void 0,
                                  children: (0, i.jsx)(s.ck, {
                                    disabled: e.disabled,
                                    onPointerLeave: (e) => e.preventDefault(),
                                    onPointerMove: (e) => e.preventDefault(),
                                    children: (0, i.jsx)(f.x, {
                                      as: e.href && !e.disabled ? r() : 'button',
                                      href: e.href,
                                      target:
                                        e.href && e.href.startsWith('http') ? '_blank' : void 0,
                                      onClick: e.disabled
                                        ? void 0
                                        : e.href
                                          ? async () => {
                                              var t;
                                              S(!1),
                                                await (null === (t = e.onClick) || void 0 === t
                                                  ? void 0
                                                  : t.call(e));
                                            }
                                          : e.onClick,
                                      disabled: e.disabled,
                                      className: u().item,
                                      'data-tone': e.tone,
                                      children: (0, i.jsxs)(s.__, {
                                        className: u().label,
                                        children: [
                                          e.icon &&
                                            (0, i.jsx)('div', {
                                              className: u().icon,
                                              style: { backgroundColor: e.iconBackground },
                                              children: e.icon,
                                            }),
                                          e.label,
                                          e.subLabel &&
                                            (0, i.jsx)('div', {
                                              className: u().subLabel,
                                              children: e.subLabel,
                                            }),
                                          e.href &&
                                            e.href.startsWith('http') &&
                                            (0, i.jsx)('div', {
                                              className: u().externalIcon,
                                              children: (0, i.jsx)(v.J, { name: 'externalLink' }),
                                            }),
                                        ],
                                      }),
                                    }),
                                  }),
                                },
                                e.label
                              )
                            ),
                          }),
                    ],
                  }),
                }),
              ],
            });
      };
    },
    4808: function (e, t, n) {
      'use strict';
      n.d(t, {
        b: function () {
          return G;
        },
      });
      var i = n(75040),
        a = n(81289),
        s = n(7545),
        l = n.n(s),
        r = n(9486),
        o = n(58854),
        c = n(12432),
        d = n(75325),
        u = n.n(d),
        h = n(46398),
        p = n.n(h),
        m = n(68494),
        x = n(72605),
        f = n(75962),
        v = n(33867);
      let C = async () => (await fetch('/assets/emojis/emoji-datasource.json')).json(),
        _ = () => {
          let e = (0, v.a)({ queryKey: ['emojis'], queryFn: async () => C() }),
            t = e.data
              ? e.data.map((e) => ({
                  emoji: e.emoji,
                  name: e.aliases[0],
                  tags: e.tags,
                  aliases: e.aliases,
                }))
              : [];
          return { ...e, emojis: t };
        };
      var y = n(68779),
        j = n(26934),
        g = n(27865);
      let w = (e) => {
          let { value: t, onValueChange: n } = e,
            a = (0, o.useRef)(null),
            [s, l] = (0, o.useState)(''),
            r = (0, x.N)(s, 300),
            [c, d] = (0, o.useState)(0),
            { emojis: u, isPending: h } = _(),
            v = (0, o.useMemo)(() => {
              if (0 === u.length) return [];
              let e =
                  '' === r
                    ? u
                    : u.filter((e) => {
                        var t, n;
                        return (
                          (null === (t = e.tags) || void 0 === t
                            ? void 0
                            : t.some((e) => e.toLowerCase().includes(r.toLowerCase()))) ||
                          (null === (n = e.aliases) || void 0 === n
                            ? void 0
                            : n.some((e) => e.toLowerCase().includes(r.toLowerCase())))
                        );
                      }),
                t = [],
                n = 0;
              for (; n <= e.length; ) {
                let i = 0 === n ? 71 : 72;
                t.push([...e.slice(n, n + i)]), (n += i);
              }
              return t;
            }, [u, r]);
          return (0, i.jsxs)('div', {
            className: p().container,
            children: [
              (0, i.jsx)(m.I, {
                type: 'search',
                placeholder: 'Search Emojis',
                value: s,
                onValueChange: l,
                className: p().searchInput,
              }),
              (0, i.jsx)(f.w, {
                duration: 400,
                children: h
                  ? (0, i.jsx)('div', {
                      className: p().content,
                      children: (0, i.jsx)('div', {
                        className: p().grid,
                        children: Array.from({ length: 64 }).map((e, t) =>
                          (0, i.jsx)(
                            'div',
                            { children: (0, i.jsx)(y.O, { width: 31, height: 31 }) },
                            t
                          )
                        ),
                      }),
                    })
                  : (0, i.jsx)(i.Fragment, {
                      children:
                        v.length > 0
                          ? (0, i.jsx)('div', {
                              ref: a,
                              className: p().content,
                              children: v.map((e, s) =>
                                (0, i.jsx)(
                                  b,
                                  {
                                    index: s,
                                    data: e,
                                    value: t,
                                    onValueChange: n,
                                    containerRef: a,
                                    chunkHeight: 0 === s ? null : c,
                                    setChunkHeight: 0 === s ? d : null,
                                  },
                                  'chunk:' + s.toString()
                                )
                              ),
                            })
                          : (0, i.jsx)('div', {
                              className: p().noResults,
                              children: (0, i.jsx)('p', { children: 'No results found' }),
                            }),
                    }),
              }),
            ],
          });
        },
        b = (0, o.memo)(function (e) {
          let {
              index: t,
              data: n,
              value: a,
              onValueChange: s,
              containerRef: l,
              chunkHeight: r,
              setChunkHeight: c,
            } = e,
            d = (0, o.useRef)(null),
            [u, h] = (0, o.useState)(0 === t),
            { emojis: m } = _();
          (0, o.useEffect)(() => {
            if (!l.current || !d.current || 0 === t) return;
            let e = l.current,
              n = d.current,
              i = new IntersectionObserver(
                (e) => {
                  e.forEach((e) => {
                    (n.style.contentVisibility = e.isIntersecting ? 'visible' : 'hidden'),
                      h((t) => t || e.isIntersecting);
                  });
                },
                { root: e, rootMargin: '640px', threshold: 1 }
              );
            return (
              i.observe(n),
              () => {
                i.unobserve(n);
              }
            );
          }, [l, t]),
            (0, o.useEffect)(() => {
              if (!d.current || !c) return;
              let e = d.current,
                t = setTimeout(() => {
                  c(e.getBoundingClientRect().height);
                }, 100);
              return () => {
                clearTimeout(t);
              };
            }, [c]);
          let { isApple: x } = (0, g.w)();
          return (0, i.jsxs)('div', {
            ref: d,
            className: p().grid,
            style: {
              minHeight:
                0 === t
                  ? 'auto'
                  : r
                    ? ''.concat(r, 'px')
                    : ''.concat(31.5 * Math.ceil(n.length / 8), 'px'),
              contentVisibility: 0 === t ? 'visible' : 'hidden',
            },
            'data-is-apple': x(),
            children: [
              0 === t &&
                (0, i.jsx)(L, {
                  onValueChange: (e) => (null == s ? void 0 : s(m[e].emoji)),
                  length: m.length,
                }),
              u &&
                n.map((e) =>
                  (0, i.jsx)(
                    'div',
                    {
                      children: (0, i.jsx)('button', {
                        type: 'button',
                        'aria-label': e.name,
                        onClick: () => (null == s ? void 0 : s(e.emoji)),
                        'data-active': e.emoji === a,
                        children: (0, i.jsx)('span', { children: e.emoji }),
                      }),
                    },
                    e.name
                  )
                ),
            ],
          });
        });
      function L(e) {
        let { onValueChange: t, length: n } = e,
          s = (0, o.useRef)(0);
        return (0, i.jsx)('button', {
          className: p().randomButton,
          'aria-label': 'Random',
          onClick: () => {
            t(Math.floor(Math.random() * n)), (s.current += 1);
          },
          children: (0, i.jsx)(a.E.div, {
            transition: { type: 'spring', stiffness: 20, damping: 1.5, mass: 0.1 },
            animate: { rotate: 180 * s.current },
            children: (0, i.jsx)(j.J, { name: 'change' }),
          }),
        });
      }
      var N = n(71646),
        E = n(2259),
        k = n(75297),
        A = n(92310),
        M = n(22421),
        S = n(96499),
        P = n.n(S),
        V = n(63598),
        H = n.n(V),
        I = n(4491);
      let F = (e) => {
        let {
            open: t,
            onOpenChange: n,
            children: a,
            title: s,
            side: l = 'bottom',
            sideOffset: r = 0,
            align: c = 'center',
            alignOffset: d = 0,
            width: u = 420,
            autoFocus: h = !0,
            variant: p = 'primary',
          } = e,
          [m, x] = o.useState(!1),
          f = void 0 !== t,
          v = f ? t : m,
          C = f ? n : x,
          { isMounted: _, isRendered: y } = (0, A.R)({ open: v, duration: 100 }),
          j = (0, M.d)(),
          g = (0, I.nJ)();
        return j
          ? (0, i.jsx)(k.u, { title: s, open: v, onOpenChange: C, width: u, children: a })
          : (0, i.jsxs)(E.fC, {
              open: _,
              onOpenChange: C,
              children: [
                (0, i.jsx)(E.ee, {}),
                (0, i.jsx)(E.h_, {
                  container: g,
                  children: (0, i.jsxs)(E.VY, {
                    side: l,
                    sideOffset: r,
                    align: c,
                    alignOffset: d,
                    className: ''
                      .concat(P().content, ' ')
                      .concat(y ? H().contentAnimEnter : H().contentAnimExit),
                    'data-variant': p,
                    onOpenAutoFocus: (e) => {
                      h || e.preventDefault();
                    },
                    style: { width: u },
                    children: [
                      (0, i.jsx)(E.Eh, {
                        className: P().tail,
                        asChild: !0,
                        children: (0, i.jsx)('div', {
                          children: (0, i.jsx)('svg', {
                            width: '20',
                            height: '9',
                            viewBox: '0 0 20 9',
                            fill: 'none',
                            xmlns: 'http://www.w3.org/2000/svg',
                            children: (0, i.jsx)('path', {
                              d: 'M16.3148 6.73585L11.4591 1.55643C10.6689 0.71361 9.33109 0.713611 8.54094 1.55643L3.68524 6.73585C3.1594 7.29675 2.48842 7.6889 1.75666 7.87577C1.22159 8.0124 0.76709 8.44776 0.76709 9H19.2329C19.2329 8.44776 18.7784 8.0124 18.2434 7.87577C17.5116 7.6889 16.8406 7.29675 16.3148 6.73585Z',
                            }),
                          }),
                        }),
                      }),
                      a,
                    ],
                  }),
                }),
              ],
            });
      };
      var B = n(40028),
        R = n(39790),
        O = n.n(R),
        Z = n(68151);
      let D = (e) => {
        let { value: t, onValueChange: n } = e,
          [a, s] = (0, o.useState)(''),
          l = (0, x.N)(a, 300),
          { icons: r } = (0, Z.y)(),
          c =
            r.length > 0
              ? r.filter((e) => '' === l || e.id.toLowerCase().includes(l.toLowerCase()))
              : [];
        return (0, i.jsxs)('div', {
          className: O().container,
          children: [
            (0, i.jsx)(m.I, {
              type: 'search',
              placeholder: 'Search Icons',
              value: a,
              onValueChange: s,
              className: O().searchInput,
            }),
            (0, i.jsx)(f.w, {
              duration: 400,
              children:
                c.length > 0
                  ? (0, i.jsx)('div', {
                      className: O().content,
                      children: (0, i.jsxs)('div', {
                        className: O().grid,
                        children: [
                          (0, i.jsx)(L, {
                            onValueChange: (e) => (null == n ? void 0 : n(r[e].id)),
                            length: r.length,
                          }),
                          c.map((e) =>
                            (0, i.jsx)(
                              'div',
                              {
                                children: (0, i.jsx)('button', {
                                  type: 'button',
                                  'aria-label': e.id,
                                  onClick: () => (null == n ? void 0 : n(e.id)),
                                  'data-active': e.id === t,
                                  children: (0, i.jsx)('span', {
                                    children: (0, i.jsx)('svg', {
                                      width: '32',
                                      height: '32',
                                      viewBox: '0 0 32 32',
                                      fill: 'none',
                                      xmlns: 'http://www.w3.org/2000/svg',
                                      children: e.src,
                                    }),
                                  }),
                                }),
                              },
                              e.id
                            )
                          ),
                        ],
                      }),
                    })
                  : (0, i.jsx)('div', {
                      className: O().noResults,
                      children: (0, i.jsx)('p', { children: 'No results found' }),
                    }),
            }),
          ],
        });
      };
      var W = n(16488),
        T = n(25674),
        z = n(62182);
      let Y = (e) => {
        let { type: t, value: n, defaultValue: s, onValueChange: l, showReset: d } = e,
          { addToast: h } = (0, T.useToasts)(),
          p = (0, o.useRef)(null),
          { mutateAsync: m, isPending: x } = (0, W.X)(),
          [f, v] = (0, o.useState)(!1),
          [C, _] = (0, o.useState)(!1),
          y = async (e) => {
            var t;
            let n = null === (t = e.target.files) || void 0 === t ? void 0 : t[0];
            n && (await b({ file: n }));
          },
          g = (0, M.d)(),
          b = async (e) => {
            let { emoji: i, icon: a, file: s } = e;
            if (((!g && (n.emoji || n.icon)) || (v(!1), _(!1)), i))
              l({ emoji: i, icon: void 0, picture: void 0, picturePreview: void 0 });
            else if (a) l({ emoji: void 0, icon: a, picture: void 0, picturePreview: void 0 });
            else if (s) {
              let e = await m({ type: t, picture: s });
              e.preview
                ? l({ icon: void 0, emoji: void 0, picture: e.upload, picturePreview: e.preview })
                : h({ type: 'error', message: 'Failed to upload picture, please try again' });
            } else l({ color: void 0, icon: void 0, emoji: void 0, picture: void 0 });
          };
        return (0, i.jsx)(c.M, {
          initial: !1,
          children: x
            ? (0, i.jsx)(
                a.E.div,
                {
                  ...r.baseMotionVariants,
                  children: (0, i.jsx)('div', {
                    className: u().uploading,
                    children: (0, i.jsx)(B.$, { size: 24 }),
                  }),
                },
                'spinner'
              )
            : (0, i.jsxs)(
                a.E.div,
                {
                  ...r.baseMotionVariants,
                  children: [
                    (0, i.jsx)('div', {
                      className: u().container,
                      children: (0, i.jsx)(N.L, {
                        title: 'Change Avatar',
                        modalOnMobile: !1,
                        options: [
                          {
                            label: 'Choose Emoji',
                            icon: (0, i.jsx)(j.J, { name: 'emoji' }),
                            onClick: () => {
                              setTimeout(() => v(!0), 120);
                            },
                          },
                          {
                            label: 'Choose Icon',
                            icon: (0, i.jsx)(j.J, { name: 'star' }),
                            onClick: () => {
                              setTimeout(() => _(!0), 120);
                            },
                          },
                          ...(n.picture
                            ? [
                                {
                                  label: 'Replace Image',
                                  icon: (0, i.jsx)(j.J, { name: 'editSmall' }),
                                  onClick: () => {
                                    p.current && p.current.click();
                                  },
                                },
                              ]
                            : [
                                {
                                  label: 'Upload an Image',
                                  icon: (0, i.jsx)(j.J, { name: 'collectible' }),
                                  onClick: () => {
                                    p.current && p.current.click();
                                  },
                                },
                              ]),
                          ...(d
                            ? [
                                {
                                  label: 'Restore Default',
                                  icon: (0, i.jsx)(j.J, { name: 'reset' }),
                                  onClick: () => b({}),
                                },
                              ]
                            : n.picture
                              ? [
                                  {
                                    label: 'Remove Image',
                                    tone: 'danger',
                                    icon: (0, i.jsx)(j.J, { name: 'close' }),
                                    onClick: () => {
                                      l({
                                        picture: void 0,
                                        picturePreview: void 0,
                                        emoji: (0, z.Zu)(),
                                      });
                                    },
                                  },
                                ]
                              : []),
                        ],
                        children: (0, i.jsx)('div', {
                          'aria-label': 'Change Avatar',
                          className: u().button,
                          children: (0, i.jsxs)('svg', {
                            width: '16',
                            height: '16',
                            viewBox: '0 0 16 16',
                            fill: 'none',
                            xmlns: 'http://www.w3.org/2000/svg',
                            children: [
                              (0, i.jsx)('circle', {
                                cx: '13',
                                cy: '8',
                                r: '1.5',
                                transform: 'rotate(-180 13 8)',
                                fill: 'currentColor',
                              }),
                              (0, i.jsx)('circle', {
                                cx: '8',
                                cy: '8',
                                r: '1.5',
                                transform: 'rotate(-180 8 8)',
                                fill: 'currentColor',
                              }),
                              (0, i.jsx)('circle', {
                                cx: '3',
                                cy: '8',
                                r: '1.5',
                                transform: 'rotate(-180 3 8)',
                                fill: 'currentColor',
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    (0, i.jsx)('div', {
                      className: u().fileInput,
                      children: (0, i.jsx)('input', {
                        type: 'file',
                        accept: 'image/png, image/jpeg, image/jpg, image/gif',
                        ref: p,
                        onChange: y,
                      }),
                    }),
                    (0, i.jsxs)('div', {
                      className: u().popoverContainer,
                      children: [
                        (0, i.jsx)(F, {
                          open: f,
                          onOpenChange: v,
                          side: 'right',
                          sideOffset: 8,
                          width: 306,
                          title: 'Choose an Emoji',
                          children: (0, i.jsx)(w, {
                            label: 'Choose an Emoji',
                            value: n.emoji,
                            defaultValue: s.emoji,
                            onValueChange: (e) => b({ emoji: e }),
                          }),
                        }),
                        (0, i.jsx)(F, {
                          open: C,
                          onOpenChange: _,
                          side: 'right',
                          sideOffset: 8,
                          width: 306,
                          title: 'Choose an Icon',
                          children: (0, i.jsx)(D, {
                            label: 'Choose an Icon',
                            value: n.icon,
                            defaultValue: s.icon,
                            onValueChange: (e) => b({ icon: e }),
                          }),
                        }),
                      ],
                    }),
                  ],
                },
                'picker'
              ),
        });
      };
      var J = n(41954),
        U = n(73153),
        q = n.n(U);
      let K = (e) => {
          let { disabled: t, defaultValue: n, onValueChange: a } = e;
          return (0, i.jsx)('div', {
            className: q().container,
            children: Object.entries(z.z7).map((e) => {
              let [s, l] = e;
              return (0, i.jsxs)(
                'div',
                {
                  children: [
                    (0, i.jsx)('input', {
                      disabled: t,
                      type: 'radio',
                      name: 'background-color',
                      id: 'background-color-'.concat(s),
                      value: l.value,
                      defaultChecked: null == n ? void 0 : n.equals(l),
                      onChange: () => (null == a ? void 0 : a(l)),
                    }),
                    (0, i.jsx)('label', {
                      htmlFor: 'background-color-'.concat(s),
                      style: { background: z.hQ[l.value] },
                      children: (0, i.jsx)('span', { children: s }),
                    }),
                  ],
                },
                s
              );
            }),
          });
        },
        G = (e) => {
          let { pictureType: t, value: n, onValueChange: s, accountId: o, address: c } = e,
            d = !n.picture && (n.emoji || n.icon),
            u = !(n.picture || n.emoji || n.icon);
          return (0, i.jsxs)('div', {
            className: l().customization,
            children: [
              (0, i.jsxs)(a.E.div, {
                className: l().customizationAvatar,
                initial: !1,
                animate: { x: d ? 0 : '75%' },
                transition: { duration: 0.2, ease: r.easeSnappyOut },
                children: [
                  (0, i.jsx)(J.q, {
                    size: 'fill',
                    metadata:
                      n.picturePreview && n.picture ? { ...n, picture: n.picturePreview } : n,
                    editor: !0,
                    accountId: o,
                    address: c,
                  }),
                  (0, i.jsx)('div', {
                    className: l().avatarPicker,
                    children: (0, i.jsx)(Y, {
                      showReset: !!((o || c) && !u),
                      type: t,
                      value: n,
                      defaultValue: n,
                      onValueChange: (e) => {
                        s({ ...n, ...(n.color ? {} : { color: (0, z.pc)() }), ...e });
                      },
                    }),
                  }),
                ],
              }),
              (0, i.jsx)(a.E.div, {
                className: l().customizationColorPicker,
                animate: { x: d ? 0 : 24, opacity: d ? 1 : 0 },
                transition: { duration: 0.2, ease: r.easeSnappyOut },
                children: (0, i.jsx)(K, {
                  disabled: !d,
                  defaultValue: n.color,
                  onValueChange: (e) => s({ ...n, color: e }),
                }),
              }),
            ],
          });
        };
    },
    75297: function (e, t, n) {
      'use strict';
      n.d(t, {
        u: function () {
          return j;
        },
      });
      var i = n(75040),
        a = n(58854),
        s = n(21204),
        l = n(12432),
        r = n(81289),
        o = n(92310),
        c = n(32622),
        d = n.n(c),
        u = n(17372),
        h = n.n(u),
        p = n(97016),
        m = n(2778),
        x = n(81145),
        f = n(75962),
        v = n(40910),
        C = n(22421),
        _ = n(9486),
        y = n(4491);
      function j(e) {
        let {
            title: t,
            children: n,
            width: c = 400,
            height: u,
            contentKey: j,
            autoFocus: w = !0,
            open: b,
            onOpenChange: L,
            onCloseComplete: N,
            onBack: E,
            onMoreInfo: k,
            dismissable: A = !0,
            cancelLabel: M,
            cancelDisabled: S,
            onCancel: P,
            submitLabel: V,
            submitTone: H = 'default',
            submitDisabled: I,
            onSubmit: F,
            scrollBarGutter: B = !1,
            fullscreenOnMobile: R = !1,
            buttonsStackDirection: O = 'column',
            theme: Z,
            bottomFade: D = !1,
          } = e,
          [W, T] = a.useState(!1),
          z = void 0 !== b,
          Y = z ? b : W,
          J = z ? L : T,
          U = (0, C.d)(),
          q = R && U,
          { isMounted: K, isRendered: G } = (0, o.R)({
            open: Y,
            duration: q ? 600 : U ? 200 : 100,
            options: {
              onStateChange: (e) => {
                'unmounted' === e.current.status && (null == N || N());
              },
            },
          });
        (0, m.N)(K);
        let [Q, X] = a.useState(!1),
          [$, ee] = a.useState(!1);
        a.useEffect(() => {
          Y && (X(!1), ee(!1));
        }, [Y]);
        let et = K || Q,
          en = A && !Q,
          ei = a.useRef(null),
          ea = q ? (Y ? h().contentAnimEnterFullscreen : h().contentAnimExitFullscreen) : '',
          es = (0, y.nJ)();
        return (0, i.jsx)(s.fC, {
          open: et,
          onOpenChange: en ? J : void 0,
          children: (0, i.jsx)(s.h_, {
            container: es,
            children: (0, i.jsxs)('div', {
              className: d().modal,
              'data-theme': Z,
              children: [
                !q &&
                  (0, i.jsx)('div', {
                    style: { cursor: en ? 'pointer' : 'auto', animationDuration: '100ms' },
                    className: ''
                      .concat(d().overlay, ' ')
                      .concat(G ? h().overlayAnimEnter : h().overlayAnimExit),
                  }),
                (0, i.jsx)(s.VY, {
                  className: [
                    d().container,
                    q
                      ? G
                        ? h().overlayAnimEnterFullscreen
                        : h().overlayAnimExitfullscreen
                      : G
                        ? h().contentAnimEnter
                        : h().contentAnimExit,
                  ].join(' '),
                  'data-fullscreen': q,
                  style: c ? { maxWidth: c, width: '100%' } : void 0,
                  onOpenAutoFocus: (e) => {
                    w || e.preventDefault();
                  },
                  children: (0, i.jsxs)(f.w, {
                    duration: 400,
                    children: [
                      (0, i.jsx)(l.M, {
                        initial: !1,
                        mode: 'popLayout',
                        children:
                          en &&
                          (0, i.jsx)(s.x8, {
                            asChild: !0,
                            className: [d().closeButton, ea].join(' '),
                            children: (0, i.jsx)(r.E.button, {
                              ..._.baseMotionVariants,
                              'aria-label': 'Close',
                            }),
                          }),
                      }),
                      (0, i.jsx)(l.M, {
                        initial: !1,
                        children:
                          E && !Q
                            ? (0, i.jsx)(
                                r.E.button,
                                {
                                  'aria-label': 'Back',
                                  className: d().backButton,
                                  onClick: E,
                                  disabled: Q,
                                  initial: { opacity: 0 },
                                  animate: { opacity: 1 },
                                  exit: { opacity: 0, pointerEvents: 'none' },
                                  transition: { duration: 0.3, ease: _.easeSnappyOut },
                                },
                                'backButton'
                              )
                            : k
                              ? (0, i.jsx)(
                                  r.E.button,
                                  {
                                    'aria-label': 'More Info',
                                    className: d().infoButton,
                                    onClick: k,
                                    initial: { opacity: 0 },
                                    animate: { opacity: 1 },
                                    exit: { opacity: 0, pointerEvents: 'none' },
                                    transition: { duration: 0.3, ease: _.easeSnappyOut },
                                    children: (0, i.jsx)('svg', {
                                      width: '22',
                                      height: '22',
                                      viewBox: '0 0 22 22',
                                      fill: 'none',
                                      xmlns: 'http://www.w3.org/2000/svg',
                                      children: (0, i.jsx)('path', {
                                        fillRule: 'evenodd',
                                        clipRule: 'evenodd',
                                        d: 'M20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11ZM22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11ZM11.6445 12.7051C11.6445 13.1348 11.3223 13.4678 10.7744 13.4678C10.2266 13.4678 9.92578 13.1885 9.92578 12.6191V12.4795C9.92578 11.4268 10.4951 10.8574 11.2686 10.3203C12.2031 9.67578 12.665 9.32129 12.665 8.59082C12.665 7.76367 12.0205 7.21582 11.043 7.21582C10.3232 7.21582 9.80762 7.57031 9.45312 8.16113C9.38282 8.24242 9.32286 8.32101 9.2667 8.39461C9.04826 8.68087 8.88747 8.8916 8.40039 8.8916C8.0459 8.8916 7.66992 8.62305 7.66992 8.15039C7.66992 7.96777 7.70215 7.7959 7.75586 7.61328C8.05664 6.625 9.27051 5.75488 11.1182 5.75488C12.9336 5.75488 14.5234 6.71094 14.5234 8.50488C14.5234 9.7832 13.7822 10.417 12.7402 11.1045C11.999 11.5986 11.6445 11.9746 11.6445 12.5762V12.7051ZM11.9131 15.5625C11.9131 16.1855 11.376 16.6797 10.7529 16.6797C10.1299 16.6797 9.59277 16.1748 9.59277 15.5625C9.59277 14.9395 10.1191 14.4453 10.7529 14.4453C11.3867 14.4453 11.9131 14.9287 11.9131 15.5625Z',
                                        fill: 'currentColor',
                                      }),
                                    }),
                                  },
                                  'infoButton'
                                )
                              : null,
                      }),
                      (0, i.jsxs)('div', {
                        ref: ei,
                        className: d().content,
                        children: [
                          (0, i.jsx)(l.M, {
                            initial: !1,
                            mode: 'popLayout',
                            children:
                              (en || t) &&
                              (0, i.jsx)(
                                r.E.div,
                                {
                                  initial: { opacity: 0 },
                                  animate: { opacity: 1, x: (E && !A) || k ? 32 : 0 },
                                  exit: { opacity: 0 },
                                  transition: { duration: 0.3, ease: _.easeSnappyOut },
                                  className: d().title,
                                  children: (0, i.jsx)(s.Dx, {
                                    asChild: !0,
                                    className: ea,
                                    children: (0, i.jsx)(v.x, {
                                      as: 'h1',
                                      size: 18,
                                      weight: 600,
                                      children:
                                        null != t
                                          ? t
                                          : (0, i.jsx)(i.Fragment, { children: '\xa0' }),
                                    }),
                                  }),
                                },
                                t
                              ),
                          }),
                          (0, i.jsxs)(x.x, {
                            as: F ? 'form' : 'div',
                            children: [
                              (0, i.jsx)(l.M, {
                                initial: !1,
                                mode: 'popLayout',
                                children: (0, i.jsx)(
                                  r.E.div,
                                  {
                                    initial: { opacity: 0 },
                                    animate: { opacity: 1 },
                                    exit: {
                                      opacity: 0,
                                      transition: { duration: 0.4, ease: _.easeSnappyOut },
                                    },
                                    transition: { duration: 0.3, ease: _.easeSnappyOut },
                                    children: (0, i.jsx)('div', {
                                      className: [
                                        d().inner,
                                        B ? d().scrollBarGutter : void 0,
                                        ea,
                                      ].join(' '),
                                      style: { height: u },
                                      children: n,
                                    }),
                                  },
                                  j
                                ),
                              }),
                              D && (0, i.jsx)(g, {}),
                              (0, i.jsx)(l.M, {
                                initial: !1,
                                mode: 'popLayout',
                                children: (0, i.jsx)(
                                  r.E.div,
                                  {
                                    initial: { opacity: 0, y: -16 },
                                    animate: { opacity: 1, y: 0 },
                                    exit: { opacity: 0, y: 16 },
                                    transition: { duration: 0.3, ease: _.easeSnappyOut },
                                    className: ea,
                                    children:
                                      (P || F) &&
                                      (0, i.jsxs)('div', {
                                        className: d().buttons,
                                        'data-buttons-stack-direction': O,
                                        children: [
                                          F &&
                                            (0, i.jsx)(p.z, {
                                              wide: !0,
                                              type: 'submit',
                                              onClick: async () => {
                                                var e;
                                                X(!0);
                                                let t =
                                                    null === (e = ei.current) || void 0 === e
                                                      ? void 0
                                                      : e.querySelector('form'),
                                                  n =
                                                    t &&
                                                    Array.from(new FormData(t)).reduce((e, t) => {
                                                      let [n, i] = t;
                                                      return { ...e, [n]: '' === i ? void 0 : i };
                                                    }, {});
                                                await F({
                                                  formData: null != n ? n : {},
                                                  closeModal: () => {
                                                    X(!1),
                                                      ee(!0),
                                                      setTimeout(() => {
                                                        null == J || J(!1);
                                                      }, 1e3);
                                                  },
                                                }),
                                                  X(!1);
                                              },
                                              tone: H,
                                              disabled: I,
                                              state: $ ? 'success' : Q ? 'pending' : void 0,
                                              children: null != V ? V : 'Submit',
                                            }),
                                          P &&
                                            (0, i.jsx)(p.z, {
                                              wide: !0,
                                              variant: 'secondary',
                                              type: 'button',
                                              onClick: P,
                                              disabled: S || Q,
                                              children: null != M ? M : 'Cancel',
                                            }),
                                        ],
                                      }),
                                  },
                                  ''
                                    .concat(null != M ? M : 'cancel', '-')
                                    .concat(null != V ? V : 'submit')
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
      }
      function g() {
        return (0, i.jsx)('div', {
          className: d().bottomFadeWrapper,
          children: (0, i.jsx)('div', { className: d().bottomFade }),
        });
      }
    },
    61563: function (e, t, n) {
      'use strict';
      n.d(t, {
        A: function () {
          return p;
        },
      });
      var i = n(75040),
        a = n(69162),
        s = n(76946),
        l = n.n(s);
      let r = (e) => {
          let { testnet: t, ...n } = e,
            a = 'var(--ck-chain-ethereum-01, #25292E)',
            s = 'var(--ck-chain-ethereum-02, #ffffff)';
          return (
            t && ((a = 'linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)'), (s = '#fff')),
            (0, i.jsxs)('svg', {
              ...n,
              'aria-hidden': 'true',
              width: '44',
              height: '44',
              viewBox: '0 0 44 44',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              style: { background: a },
              children: [
                (0, i.jsx)('path', {
                  d: 'M21.9967 6.99621L21.7955 7.67987V27.5163L21.9967 27.7171L31.2044 22.2744L21.9967 6.99621Z',
                  fill: s,
                }),
                (0, i.jsx)('path', {
                  d: 'M21.9957 6.99621L12.7878 22.2744L21.9957 27.7171V18.0891V6.99621Z',
                  fill: s,
                }),
                (0, i.jsx)('path', {
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                  d: 'M21.9959 36.9996L21.9959 36.9997V36.9995L31.2091 24.0243L21.9959 29.4642L12.788 24.0243L21.9957 36.9993L21.9958 36.9997L21.9959 36.9996Z',
                  fill: s,
                }),
                (0, i.jsx)('path', {
                  d: 'M21.996 27.7181L31.2037 22.2753L21.996 18.09V27.7181Z',
                  fill: s,
                }),
                (0, i.jsx)('path', {
                  d: 'M12.7878 22.2753L21.9957 27.7181V18.09L12.7878 22.2753Z',
                  fill: s,
                }),
              ],
            })
          );
        },
        o = (e) => {
          let { testnet: t, ...n } = e;
          return (0, i.jsx)('svg', {
            ...n,
            'aria-hidden': 'true',
            width: '44',
            height: '44',
            viewBox: '0 0 44 44',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            style: {
              background: t ? 'linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)' : '#6F41D8',
            },
            children: (0, i.jsx)('path', {
              d: 'M29.3198 17.2462C28.7894 16.9371 28.1008 16.9371 27.5172 17.2462L23.3786 19.6238L20.5683 21.1734L16.4298 23.5496C15.8993 23.8601 15.2108 23.8601 14.6271 23.5496L11.3381 21.6895C10.8077 21.3804 10.4368 20.8126 10.4368 20.1916V16.5231C10.4368 15.9036 10.7545 15.3357 11.3381 15.0252L14.5725 13.2169C15.1044 12.9064 15.7944 12.9064 16.378 13.2169L19.6124 15.0252C20.1443 15.3357 20.5151 15.9036 20.5151 16.5231V18.9007L23.3255 17.2979V14.9217C23.3286 14.6131 23.246 14.3097 23.0868 14.0452C22.9277 13.7808 22.6983 13.5657 22.4241 13.4239L16.4298 10.0141C15.8993 9.70362 15.2108 9.70362 14.6271 10.0141L8.5264 13.4239C8.25226 13.5657 8.02285 13.7808 7.86372 14.0452C7.70459 14.3097 7.62198 14.6131 7.62508 14.9217V21.793C7.62508 22.414 7.94277 22.9818 8.5264 23.2923L14.6271 26.7021C15.1576 27.0111 15.8476 27.0111 16.4298 26.7021L20.5683 24.3762L23.3786 22.7748L27.5172 20.4504C28.0476 20.1399 28.7362 20.1399 29.3198 20.4504L32.5556 22.2588C33.0875 22.5678 33.457 23.1356 33.457 23.7566V27.4251C33.457 28.0447 33.1407 28.6125 32.5556 28.923L29.3213 30.7831C28.7894 31.0936 28.0994 31.0936 27.5172 30.7831L24.2814 28.9747C23.7495 28.6642 23.3786 28.0964 23.3786 27.4769V25.0993L20.5683 26.7021V29.0782C20.5683 29.6978 20.886 30.2671 21.4696 30.5761L27.5704 33.9859C28.1008 34.2964 28.7894 34.2964 29.373 33.9859L35.4738 30.5761C36.0042 30.2671 36.3751 29.6992 36.3751 29.0782V22.207C36.3782 21.8984 36.2956 21.5949 36.1364 21.3305C35.9773 21.066 35.7479 20.8509 35.4738 20.7091L29.3213 17.2462H29.3198Z',
              fill: 'white',
            }),
          });
        },
        c = (e) => {
          let { testnet: t, ...n } = e;
          return (0, i.jsx)('svg', {
            ...n,
            width: '44',
            height: '44',
            viewBox: '0 0 44 44',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            style: {
              background: t ? 'linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)' : '#0052FF',
            },
            children: (0, i.jsx)('path', {
              d: 'M21.9481 37.4937C30.5045 37.4937 37.441 30.5574 37.441 22.0007C37.441 13.4442 30.5045 6.50781 21.9481 6.50781C13.8306 6.50781 7.17124 12.7506 6.50913 20.697H29.4996V23.2769H6.50684C7.15574 31.2365 13.8211 37.4937 21.9481 37.4937Z',
              fill: 'white',
            }),
          });
        },
        d = (e) => {
          let { testnet: t, ...n } = e;
          return (0, i.jsx)('svg', {
            ...n,
            width: '44',
            height: '44',
            viewBox: '0 0 44 44',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            style: {
              background: t ? 'linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)' : '#2C2D30',
            },
            children: (0, i.jsx)('path', {
              d: 'M30.4076 17.2002C29.1337 17.2002 27.9906 17.6998 27.1194 18.506L27.0299 18.4612C26.8302 15.8187 24.6817 13.7344 21.9891 13.7344C19.2966 13.7344 17.1481 15.8187 16.9484 18.4612L16.8589 18.506C15.9877 17.6998 14.8446 17.2002 13.5706 17.2002C10.7438 17.2002 8.45068 19.4947 8.45068 22.3267C8.45068 24.7727 10.8781 26.8709 11.4807 27.3532C14.3144 29.6098 18.0054 30.9293 21.9891 30.9293C25.9729 30.9293 29.6639 29.6098 32.4976 27.3532C33.1036 26.8709 35.5276 24.7762 35.5276 22.3267C35.5276 19.4947 33.2345 17.2002 30.4042 17.2002H30.4076Z',
              fill: 'white',
            }),
          });
        };
      var u = n(33972);
      let h = {
          ARBITRUM: (0, i.jsx)((e) => {
            let { testnet: t, ...n } = e,
              a = t ? '#ffffff' : '#28A0F0';
            return (0, i.jsxs)('svg', {
              ...n,
              'aria-hidden': 'true',
              width: '44',
              height: '44',
              viewBox: '0 0 44 44',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              style: {
                background: t ? 'linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)' : '#2C364F',
              },
              children: [
                !t &&
                  (0, i.jsx)('path', {
                    d: 'M25.7948 20.5826L28.2683 16.3854L34.9355 26.7696L34.9386 28.7625L34.9168 15.0491C34.9011 14.7137 34.7231 14.407 34.4391 14.2261L22.4357 7.32182C22.1551 7.1838 21.7989 7.18546 21.5187 7.32618C21.4807 7.34524 21.4453 7.36576 21.4113 7.38835L21.3694 7.41467L9.71816 14.1664L9.67298 14.1871C9.61474 14.2137 9.55609 14.2479 9.50076 14.2872C9.27983 14.4456 9.1331 14.68 9.08564 14.9425C9.07859 14.9823 9.0732 15.023 9.07092 15.064L9.08916 26.239L15.2994 16.6138C16.0811 15.3376 17.7847 14.9262 19.3662 14.9488L21.2221 14.9977L10.2862 32.5356L11.5753 33.2778L22.6422 15.0155L27.5338 14.9977L16.4956 33.7209L21.0955 36.3668L21.6451 36.6827C21.8776 36.7772 22.1516 36.7819 22.386 36.6972L34.5581 29.6433L32.2309 30.9918L25.7948 20.5826ZM26.7384 34.175L22.0925 26.8829L24.9287 22.0702L31.0303 31.6876L26.7384 34.175Z',
                    fill: '#2D374B',
                  }),
                (0, i.jsx)('path', {
                  d: 'M22.0924 26.8832L26.7385 34.1751L31.0302 31.6879L24.9286 22.0705L22.0924 26.8832Z',
                  fill: a,
                }),
                (0, i.jsx)('path', {
                  d: 'M34.9387 28.7627L34.9356 26.7698L28.2684 16.3856L25.7949 20.5828L32.2312 30.992L34.5584 29.6435C34.7866 29.4582 34.9248 29.1861 34.9393 28.8926L34.9387 28.7627Z',
                  fill: a,
                }),
                (0, i.jsx)('path', {
                  d: 'M7 30.642L10.2863 32.5356L21.2222 14.9976L19.3663 14.9487C17.785 14.9263 16.0814 15.3375 15.2995 16.6137L9.08927 26.239L7 29.449V30.642V30.642Z',
                  fill: 'white',
                }),
                (0, i.jsx)('path', {
                  d: 'M27.534 14.9977L22.6423 15.0155L11.5754 33.2778L15.4437 35.5049L16.4955 33.7209L27.534 14.9977Z',
                  fill: 'white',
                }),
                (0, i.jsx)('path', {
                  d: 'M37 14.9723C36.9592 13.9493 36.4052 13.013 35.5377 12.4677L23.377 5.47434C22.5187 5.04223 21.4466 5.04161 20.5868 5.47414C20.4852 5.52533 8.76078 12.3251 8.76078 12.3251C8.5985 12.4029 8.44224 12.4955 8.2953 12.6008C7.52081 13.156 7.0487 14.0186 7 14.9661V29.4492L9.08927 26.2392L9.07103 15.0639C9.07352 15.0231 9.0787 14.9827 9.08575 14.9431C9.133 14.6801 9.27994 14.4457 9.50086 14.2872C9.5562 14.2478 21.4806 7.34517 21.5186 7.32611C21.799 7.18538 22.155 7.18373 22.4356 7.32175L34.439 14.226C34.723 14.4069 34.901 14.7137 34.9167 15.049V28.8921C34.9022 29.1856 34.7862 29.4577 34.558 29.643L32.2308 30.9916L31.03 31.6875L26.7383 34.1747L22.3859 36.6969C22.1515 36.7817 21.8773 36.7769 21.645 36.6824L16.4955 33.7206L15.4435 35.5046L20.0713 38.169C20.2243 38.256 20.3607 38.3331 20.4726 38.3961C20.6458 38.4933 20.764 38.5582 20.8056 38.5785C21.1345 38.7383 21.6077 38.8311 22.0342 38.8311C22.4251 38.8311 22.8064 38.7594 23.1672 38.6181L35.8092 31.2971C36.5347 30.7348 36.9617 29.8869 37 28.9686V14.9723Z',
                  fill: t ? '#ffffff' : '#96BEDC',
                }),
              ],
            });
          }, {}),
          BASE: (0, i.jsx)(c, {}),
          BASE_SEPOLIA: (0, i.jsx)(c, { testnet: !0 }),
          BLAST: (0, i.jsx)((e) => {
            let { testnet: t, ...n } = e;
            return (0, i.jsxs)('svg', {
              ...n,
              width: '44',
              height: '44',
              viewBox: '0 0 44 44',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              style: {
                background: t ? 'linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)' : '#000000',
              },
              children: [
                (0, i.jsx)('path', {
                  d: 'M30.4033 21.832L34.9372 19.5753L36.5 14.7838L33.3744 12.5117H12.5623L7.75 16.0822H32.2138L30.914 20.1009H21.1038L20.1599 23.0376H29.9701L27.2158 31.4923L31.8115 29.2202L33.4517 24.1505L30.3724 21.8938L30.4033 21.832Z',
                  fill: t ? 'white' : '#FCFC03',
                }),
                (0, i.jsx)('path', {
                  d: 'M14.7189 27.8602L17.5427 19.0489L14.4103 16.6992L9.7041 31.4929H27.2329L28.4056 27.8602H14.7189Z',
                  fill: t ? 'white' : '#FCFC03',
                }),
              ],
            });
          }, {}),
          ETHEREUM: (0, i.jsx)(r, {}),
          ETHEREUM_SEPOLIA: (0, i.jsx)(r, { testnet: !0 }),
          LENS: (0, i.jsx)(d, {}),
          LENS_TESTNET: (0, i.jsx)(d, { testnet: !0 }),
          OPTIMISM: (0, i.jsx)((e) => {
            let { testnet: t, ...n } = e;
            return (0, i.jsxs)('svg', {
              ...n,
              'aria-hidden': 'true',
              width: '44',
              height: '44',
              viewBox: '0 0 44 44',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              style: {
                background: t ? 'linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)' : '#FF0420',
              },
              children: [
                (0, i.jsx)('path', {
                  d: 'M15.5877 27.8473C14.2777 27.8473 13.2045 27.539 12.3679 26.9226C11.5422 26.2952 11.1294 25.4035 11.1294 24.2477C11.1294 24.0055 11.157 23.7082 11.212 23.356C11.3552 22.5634 11.5588 21.6112 11.823 20.4994C12.5715 17.4722 14.5034 15.9586 17.6187 15.9586C18.4664 15.9586 19.2259 16.1017 19.8974 16.3879C20.5689 16.663 21.0973 17.0814 21.4826 17.6428C21.8678 18.1932 22.0605 18.8537 22.0605 19.6242C22.0605 19.8554 22.033 20.1471 21.9779 20.4994C21.8128 21.4791 21.6146 22.4313 21.3835 23.356C20.9982 24.8641 20.3322 25.9924 19.3855 26.741C18.4388 27.4785 17.1729 27.8473 15.5877 27.8473ZM15.8189 25.4695C16.4354 25.4695 16.9582 25.2879 17.3876 24.9247C17.8279 24.5614 18.1416 24.0055 18.3287 23.257C18.5819 22.2222 18.7746 21.3195 18.9067 20.5489C18.9507 20.3178 18.9727 20.0811 18.9727 19.8389C18.9727 18.8372 18.4498 18.3363 17.4041 18.3363C16.7876 18.3363 16.2592 18.5179 15.8189 18.8812C15.3896 19.2445 15.0813 19.8004 14.8943 20.5489C14.6961 21.2865 14.4979 22.1892 14.2998 23.257C14.2557 23.477 14.2337 23.7082 14.2337 23.9504C14.2337 24.9632 14.7622 25.4695 15.8189 25.4695Z',
                  fill: 'white',
                }),
                (0, i.jsx)('path', {
                  d: 'M22.8188 27.6815C22.6977 27.6815 22.6041 27.6429 22.5381 27.5659C22.483 27.4778 22.4665 27.3788 22.4885 27.2687L24.7672 16.5358C24.7892 16.4147 24.8498 16.3156 24.9489 16.2385C25.0479 16.1615 25.1525 16.1229 25.2626 16.1229H29.6548C30.8767 16.1229 31.8564 16.3761 32.5939 16.8825C33.3426 17.3889 33.7168 18.1209 33.7168 19.0786C33.7168 19.3538 33.6838 19.64 33.6177 19.9372C33.3426 21.2032 32.7867 22.1389 31.95 22.7443C31.1244 23.3498 29.9905 23.6525 28.5485 23.6525H26.3194L25.5598 27.2687C25.5377 27.3898 25.4772 27.4888 25.3782 27.5659C25.2791 27.6429 25.1745 27.6815 25.0645 27.6815H22.8188ZM28.6641 21.3738C29.1264 21.3738 29.5282 21.2472 29.8695 20.994C30.2217 20.7408 30.4529 20.3776 30.563 19.9042C30.596 19.717 30.6125 19.552 30.6125 19.4089C30.6125 19.0896 30.519 18.8474 30.3318 18.6823C30.1446 18.5062 29.8255 18.4182 29.3741 18.4182H27.3926L26.7652 21.3738H28.6641Z',
                  fill: 'white',
                }),
                (0, i.jsx)('rect', {
                  x: '5.5',
                  y: '5.5',
                  width: '33',
                  height: '33',
                  rx: '16.5',
                  fill: 'white',
                }),
                (0, i.jsx)('path', {
                  d: 'M38.5 22C38.5 12.8924 31.0968 5.52416 22 5.5C12.879 5.5 5.5 12.8924 5.5 22C5.5 31.1076 12.9032 38.4758 22 38.5C31.121 38.5 38.5 31.1076 38.5 22ZM21.9758 30.2379V37.7994C15.3226 37.7994 9.92742 32.4122 9.92742 25.7687C9.92742 19.1252 15.3226 13.7379 21.9758 13.7379V6.17643C28.629 6.17643 34.0242 11.5637 34.0242 18.2072C34.0242 24.8507 28.629 30.2379 21.9758 30.2379Z',
                  fill: '#FF0420',
                }),
                (0, i.jsx)('path', {
                  d: 'M22.0239 16.3223H21.9271C20.6691 18.8347 18.8062 20.6949 16.29 21.9511V22.0477C18.8062 23.304 20.6691 25.1641 21.9271 27.6766H22.0239C23.282 25.1641 25.1449 23.304 27.661 22.0477V21.9511C25.1449 20.6949 23.282 18.8347 22.0239 16.3223Z',
                  fill: '#FF0420',
                }),
              ],
            });
          }, {}),
          POLYGON: (0, i.jsx)(o, {}),
          POLYGON_AMOY: (0, i.jsx)(o, { testnet: !0 }),
          SCROLL: (0, i.jsx)((e) => {
            let { testnet: t, ...n } = e;
            return (0, i.jsxs)('svg', {
              ...n,
              width: '44',
              height: '44',
              viewBox: '0 0 44 44',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              style: {
                background: t ? 'linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)' : '#FFEEDA',
              },
              children: [
                (0, i.jsx)('path', {
                  d: 'M33.0415 25.9687V10.9617C33.021 9.70599 32.0206 8.69531 30.7649 8.69531H15.1045C11.7253 8.74636 9.00977 11.513 9.00977 14.9023C9.00977 16.0457 9.31603 17.0258 9.78564 17.8833C10.1838 18.5979 10.8065 19.2717 11.4191 19.7719C11.5926 19.9149 11.5109 19.8536 12.0418 20.1803C12.7768 20.6295 13.614 20.8541 13.614 20.8541L13.6038 29.8277C13.6242 30.2565 13.665 30.6648 13.7773 31.0426C14.1244 32.3085 15.0024 33.2783 16.1968 33.7479C16.697 33.9419 17.2585 34.0746 17.8609 34.0848L30.3667 34.1256C32.8577 34.1256 34.8791 32.1043 34.8791 29.6031C34.8893 28.1228 34.1542 26.7957 33.0415 25.9687Z',
                  fill: '#FFEEDA',
                }),
                (0, i.jsx)('path', {
                  d: 'M33.3477 29.7154C33.2967 31.3182 31.9797 32.6045 30.3667 32.6045L21.7606 32.5739C22.4446 31.7776 22.8632 30.7465 22.8632 29.6235C22.8632 27.8574 21.8117 26.6425 21.8117 26.6425H30.3769C32.0206 26.6425 33.3579 27.9799 33.3579 29.6235L33.3477 29.7154Z',
                  fill: '#EBC28E',
                }),
                (0, i.jsx)('path', {
                  d: 'M12.2358 18.506C11.2455 17.5668 10.5513 16.352 10.5513 14.9125V14.7594C10.633 12.299 12.6543 10.3185 15.1147 10.2471H30.7751C31.1835 10.2675 31.5101 10.5533 31.5101 10.9719V24.223C31.8675 24.2843 32.041 24.3353 32.3881 24.4578C32.6637 24.5599 33.0415 24.7743 33.0415 24.7743V10.9719C33.0211 9.7162 32.0206 8.70552 30.7649 8.70552H15.1045C11.7253 8.75656 9.00977 11.5232 9.00977 14.9125C9.00977 16.8828 9.90815 18.5673 11.3782 19.7515C11.4803 19.8332 11.5722 19.9353 11.8376 19.9353C12.297 19.9353 12.6237 19.5678 12.6033 19.1696C12.5931 18.8327 12.4502 18.7102 12.2358 18.506Z',
                  fill: '#190602',
                }),
                (0, i.jsx)('path', {
                  d: 'M30.3667 25.0908H18.0855C17.2585 25.101 16.595 25.7645 16.595 26.5915V28.3576C16.6154 29.1743 17.3096 29.8685 18.1365 29.8685H19.0451V28.3576H18.1365V26.6323C18.1365 26.6323 18.3611 26.6323 18.6367 26.6323C20.1885 26.6323 21.3319 28.0718 21.3319 29.6133C21.3319 30.9813 20.0864 32.727 18.0038 32.5841C16.156 32.4616 15.1555 30.8179 15.1555 29.6133V14.6471C15.1555 13.9733 14.6042 13.422 13.9304 13.422H12.7054V14.9533H13.614V29.6235C13.5629 32.6045 15.7374 34.1052 18.0038 34.1052L30.3769 34.146C32.8679 34.146 34.8893 32.1247 34.8893 29.6235C34.8893 27.1223 32.8577 25.0908 30.3667 25.0908ZM33.3477 29.7154C33.2967 31.3182 31.9797 32.6045 30.3667 32.6045L21.7606 32.5739C22.4446 31.7776 22.8632 30.7465 22.8632 29.6235C22.8632 27.8574 21.8117 26.6425 21.8117 26.6425H30.3769C32.0206 26.6425 33.3579 27.9799 33.3579 29.6235L33.3477 29.7154Z',
                  fill: '#190602',
                }),
                (0, i.jsx)('path', {
                  d: 'M27.0591 15.229H17.7996V13.6977H27.0591C27.4776 13.6977 27.8248 14.0346 27.8248 14.4633C27.8248 14.8819 27.4879 15.229 27.0591 15.229Z',
                  fill: '#190602',
                }),
                (0, i.jsx)('path', {
                  d: 'M27.0591 22.4365H17.7996V20.9051H27.0591C27.4776 20.9051 27.8248 21.242 27.8248 21.6708C27.8248 22.0893 27.4879 22.4365 27.0591 22.4365Z',
                  fill: '#190602',
                }),
                (0, i.jsx)('path', {
                  d: 'M28.6925 18.8327H17.7996V17.3014H28.6823C29.1009 17.3014 29.448 17.6383 29.448 18.0671C29.4582 18.4856 29.1111 18.8327 28.6925 18.8327Z',
                  fill: '#190602',
                }),
              ],
            });
          }, {}),
          WORLD_CHAIN: (0, i.jsx)((e) => {
            let { testnet: t, ...n } = e;
            return (0, i.jsxs)('svg', {
              ...n,
              width: '44',
              height: '44',
              viewBox: '0 0 44 44',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              style: {
                background: t ? 'linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)' : '#000000',
              },
              children: [
                (0, i.jsx)('path', {
                  d: 'M22 34.25C28.7655 34.25 34.25 28.7655 34.25 22C34.25 15.2345 28.7655 9.75 22 9.75C15.2345 9.75 9.75 15.2345 9.75 22C9.75 28.7655 15.2345 34.25 22 34.25Z',
                  stroke: 'white',
                  strokeWidth: '2.53448',
                }),
                (0, i.jsx)('path', {
                  d: 'M32.5606 15.6641H22.8752C18.802 15.6641 16.0864 18.1985 16.0864 22.0003C16.0864 25.802 18.802 28.3365 22.8752 28.3365H32.5606',
                  stroke: 'white',
                  strokeWidth: '2.53448',
                }),
                (0, i.jsx)('path', {
                  d: 'M10.9399 22H33.0591',
                  stroke: 'white',
                  strokeWidth: '2.53448',
                }),
              ],
            });
          }, {}),
          ZKSYNC: (0, i.jsx)((e) => {
            let { testnet: t, ...n } = e;
            return (0, i.jsxs)('svg', {
              ...n,
              width: '44',
              height: '44',
              viewBox: '0 0 44 44',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              style: {
                background: t ? 'linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)' : '#1F1F1F',
              },
              children: [
                (0, i.jsx)('path', {
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                  d: 'M39.3438 21.9989L29.4856 12.1699V19.3665L19.6982 26.5714L29.4856 26.5797V31.8238L39.3438 21.9989Z',
                  fill: 'white',
                }),
                (0, i.jsx)('path', {
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                  d: 'M4.65918 21.9947L14.5174 31.8196V24.6815L24.3046 17.4182L14.5174 17.4098V12.1699L4.65918 21.9947Z',
                  fill: 'white',
                }),
              ],
            });
          }, {}),
        },
        p = (e) => {
          let t,
            { chain: n, network: s, alt: r, size: o } = e;
          if (s) {
            let e = (0, a.B)(s.chainId);
            e.isSuccess() && (t = h[e.value]);
          } else t = h[n];
          return t
            ? (0, i.jsx)('div', {
                className: l().container,
                style: { width: o, height: o },
                children: t,
              })
            : (0, i.jsx)(u.E, {
                src: '/default-network-icon.svg',
                alt: r,
                width: o,
                height: o,
                radius: o ? Math.floor(o / 4) : o,
              });
        };
    },
    26e3: function (e, t, n) {
      'use strict';
      n.d(t, {
        r: function () {
          return r;
        },
      });
      var i = n(9284),
        a = n(14393),
        s = n(14221),
        l = n(87468);
      let r = () => {
        let { sdk: e } = (0, a.K)(),
          t = (0, s.zS)(),
          { data: n } = (0, l.S)(),
          r = async (t) => {
            await e.wallet.setActiveWallet(t);
          },
          o = n.find((e) => e.walletId.equals(t.activeWallet.id));
        return (0, i.kG)(o, 'No active wallet found'), { activeWallet: o, setActiveWallet: r };
      };
    },
    549: function (e, t, n) {
      'use strict';
      n.d(t, {
        _: function () {
          return o;
        },
      });
      var i = n(89721),
        a = n(29297),
        s = n(14393),
        l = n(87468),
        r = n(14221);
      let o = () => {
        let e = (0, i.NL)(),
          { sdk: t } = (0, s.K)(),
          n = (0, r.zS)();
        return (0, a.D)({
          mutationFn: (e) => t.wallet.createNewWallet({ metadata: e }),
          onSuccess: (i) => {
            e.setQueryData((0, l.h)(t, n.id).queryKey, (e) => {
              if (e) return [...e, i];
            });
          },
          throwOnError: !0,
        });
      };
    },
    16488: function (e, t, n) {
      'use strict';
      n.d(t, {
        C: function () {
          return a;
        },
        X: function () {
          return o;
        },
      });
      var i,
        a,
        s = n(29297),
        l = n(14393);
      ((i = a || (a = {}))[(i.WalletPicture = 0)] = 'WalletPicture'),
        (i[(i.AddressBookPicture = 1)] = 'AddressBookPicture'),
        (i[(i.AccountPicture = 2)] = 'AccountPicture');
      let r = (e) => {
          let t = new URL(e);
          return t.protocol + '//' + t.pathname;
        },
        o = () => {
          let { sdk: e } = (0, l.K)(),
            t = async (t) => {
              let { picture: n, type: i } = t;
              switch (i) {
                case 2: {
                  let t = await e.account.uploadAccountPicture(n);
                  return { upload: t, preview: r(t) };
                }
                case 0: {
                  let t = await e.wallet.uploadWalletPicture(n);
                  return { upload: t, preview: r(t) };
                }
                case 1: {
                  let t = await e.userAddressBook.uploadPicture(n);
                  return { upload: t, preview: r(t) };
                }
              }
            };
          return (0, s.D)({ mutationFn: t, throwOnError: !0 });
        };
    },
    72605: function (e, t, n) {
      'use strict';
      n.d(t, {
        N: function () {
          return a;
        },
      });
      var i = n(58854);
      let a = (e, t) => {
        let [n, a] = (0, i.useState)(e);
        return (
          (0, i.useEffect)(() => {
            let n = setTimeout(() => {
              a(e);
            }, t);
            return () => clearTimeout(n);
          }, [e, t]),
          n
        );
      };
    },
    27865: function (e, t, n) {
      'use strict';
      n.d(t, {
        w: function () {
          return i;
        },
      });
      let i = () =>
        ((e) => {
          let t = () => !!e.match(/Android/i),
            n = () => !!e.match(/iPhone|iPad|iPod/i),
            i = () => !!e.match(/Opera Mini/i),
            a = () => !!e.match(/IEMobile/i),
            s = () => !!e.match(/SSR/i),
            l = () => !!(t() || n() || i() || a());
          return {
            isMobile: l,
            isDesktop: () => !!(!l() && !s()),
            isApple: () => !!e.match(/Mac|iPad|iPod/i),
            isAndroid: t,
            isIos: n,
            isSSR: s,
          };
        })('undefined' == typeof navigator ? 'SSR' : navigator.userAgent);
    },
    52888: function (e, t, n) {
      'use strict';
      n.d(t, {
        M: function () {
          return o;
        },
      });
      var i = n(69488),
        a = n(71736),
        s = n(51034),
        l = n(31078),
        r = n(47044);
      let o = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.NJ,
          { items: n } = (0, a.V)(e, t);
        return n
          ? {
              isPending: !1,
              usdTotalBalance: n.reduce(
                (e, t) => {
                  if (t.priceUsd)
                    switch (t.type) {
                      case l.i.NATIVE:
                        return e.plus(
                          (0, s.Yk)(t.balance, t.network.nativeCurrency.decimals, t.priceUsd)
                        );
                      case l.i.ERC20:
                        return e.plus((0, s.Yk)(t.balance, t.metadata.decimals, t.priceUsd));
                    }
                  return e;
                },
                (0, i.Z)(0)
              ),
              ethBalance: n.reduce(
                (e, t) =>
                  t.type === l.i.NATIVE && 'ETH' === t.network.nativeCurrency.symbol
                    ? e.plus((0, s.ID)(t.balance, t.network.nativeCurrency.decimals))
                    : e,
                (0, i.Z)(0)
              ),
            }
          : { isPending: !0 };
      };
    },
    71108: function (e, t, n) {
      'use strict';
      n.d(t, {
        L: function () {
          return f;
        },
        U: function () {
          return x;
        },
      });
      var i = n(75040),
        a = n(58854),
        s = n(81289),
        l = n(76440),
        r = n.n(l),
        o = n(9486),
        c = n(75962),
        d = n(68779),
        u = n(17435),
        h = n(81425);
      let p = { visible: { opacity: 1 }, hidden: { opacity: 0 } },
        m = { opacity: 0, transition: { duration: 0.075, ease: 'easeOut' } },
        x = (e) => {
          let { children: t } = e,
            { height: n } = (0, h.i)(),
            a = (function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
              return {
                visible: { opacity: 1, transition: { staggerChildren: Math.min(0.04 * e, 0.175) } },
                hidden: { opacity: 0 },
              };
            })(857 / n);
          return (0, i.jsx)('div', {
            className: r().container,
            children: (0, i.jsx)(c.w, {
              duration: 600,
              children: (0, i.jsx)(s.E.ul, {
                className: r().list,
                variants: a,
                initial: 'hidden',
                animate: 'visible',
                children: t,
              }),
            }),
          });
        },
        f = (e) => {
          let {
            fallback: t,
            variant: n = 'default',
            children: a,
            childrenClassname: s,
            hasSuffix: l,
          } = e;
          return (0, i.jsx)('div', {
            className: r().container,
            children: (0, i.jsx)(c.w, {
              duration: 600,
              hasSuffix: l,
              children: (0, i.jsx)(u.u, {
                fallback: t,
                variant: n,
                childrenClassname: s,
                children: a,
              }),
            }),
          });
        },
        v = a.forwardRef(function (e, t) {
          let { children: n, animated: l = !0, onClick: c, hasLayoutAnimation: d = !0 } = e,
            [u, h] = (0, a.useState)(!1);
          return (0, i.jsx)(s.E.li, {
            ref: t,
            layout: !!d && 'position',
            className: r().item,
            variants: l ? p : void 0,
            exit: m,
            onAnimationComplete: () => h(!0),
            transition: {
              default: o.transitionSpringSwift,
              layout: u ? o.transitionSpringSwift : { duration: 0 },
            },
            children: c ? (0, i.jsx)('button', { type: 'button', onClick: c, children: n }) : n,
          });
        });
      (v.displayName = 'DashboardListItem'), (x.Item = v);
      let C = a.forwardRef(function (e, t) {
        let {
            heading: n,
            subheading: l,
            text: c,
            icon: d,
            action: u,
            hasLayoutAnimation: h = !0,
          } = e,
          [x, f] = (0, a.useState)(!1);
        return (0, i.jsx)(s.E.li, {
          ref: t,
          layout: !!h && 'position',
          className: r().item,
          variants: p,
          exit: m,
          onAnimationComplete: () => f(!0),
          transition: {
            default: o.transitionSpringSwift,
            layout: x ? o.transitionSpringSwift : { duration: 0 },
          },
          children: (0, i.jsx)('div', {
            className: r().itemContent,
            children: (0, i.jsxs)('div', {
              className: r().left,
              children: [
                (0, i.jsx)('div', { className: r().icon, children: d }),
                (0, i.jsxs)('div', {
                  className: r().content,
                  children: [
                    (0, i.jsxs)('div', {
                      className: r().info,
                      children: [
                        (0, i.jsx)('h2', { children: n }),
                        (0, i.jsx)('p', { children: l }),
                      ],
                    }),
                    (0, i.jsxs)('div', {
                      className: r().right,
                      children: [
                        (0, i.jsx)('p', { children: c }),
                        (0, i.jsx)('div', { className: r().actions, children: u }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      });
      (C.displayName = 'DashboardListItemInfo'), (x.ItemInfo = C);
      let _ = a.forwardRef(function (e, t) {
        let [n, l] = (0, a.useState)(!1);
        return (0, i.jsx)(s.E.li, {
          ref: t,
          layout: !0,
          className: r().item,
          variants: p,
          exit: m,
          onAnimationComplete: () => l(!0),
          transition: {
            default: o.transitionSpringSwift,
            layout: n ? o.transitionSpringSwift : { duration: 0 },
          },
          children: (0, i.jsxs)('div', {
            className: r().itemContent,
            children: [
              (0, i.jsxs)('div', {
                className: r().left,
                children: [
                  (0, i.jsx)('div', {
                    className: r().icon,
                    children: (0, i.jsx)(d.O, { width: 24, height: 24 }),
                  }),
                  (0, i.jsx)('div', {
                    className: r().content,
                    children: (0, i.jsxs)('div', {
                      className: r().info,
                      children: [
                        (0, i.jsx)(d.O, { width: 100, height: 14 }),
                        (0, i.jsx)(d.O, { width: 60, height: 14 }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)('div', {
                className: r().right,
                children: [
                  (0, i.jsx)(d.O, { width: 100, height: 14 }),
                  (0, i.jsx)('div', {
                    className: r().actions,
                    children: (0, i.jsx)(d.O, { width: 14, height: 14 }),
                  }),
                ],
              }),
            ],
          }),
        });
      });
      (_.displayName = 'DashboardListItemInfoSkeleton'),
        (x.ItemInfoSkeleton = _),
        (x.Empty = (e) => {
          let { children: t } = e;
          return (0, i.jsx)(s.E.div, {
            className: r().empty,
            ...o.baseMotionVariants,
            children: t,
          });
        });
    },
    75947: function (e, t, n) {
      'use strict';
      n.d(t, {
        c: function () {
          return o;
        },
      });
      var i = n(75040),
        a = n(72809),
        s = n.n(a),
        l = n(81145),
        r = n(40028);
      let o = (e) => {
        let { heading: t, subheading: n, children: a, footer: o, disabled: c, loading: d } = e;
        return (0, i.jsx)('section', {
          children: (0, i.jsxs)('div', {
            className: s().container,
            children: [
              (t || n) &&
                (0, i.jsx)(l.x, {
                  as: 'div',
                  flexDirection: 'row',
                  gap: 16,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  children: (0, i.jsxs)('div', {
                    className: s().heading,
                    children: [
                      (0, i.jsx)('h1', { children: t }),
                      n && (0, i.jsx)('p', { children: n }),
                    ],
                  }),
                }),
              (0, i.jsxs)('div', {
                className: s().content,
                'data-disabled': c,
                'data-loading': d,
                children: [
                  (0, i.jsx)('div', {
                    className: s().children,
                    children: d ? (0, i.jsx)(r.$, {}) : a,
                  }),
                  o && (0, i.jsx)('footer', { className: s().footer, children: o }),
                ],
              }),
            ],
          }),
        });
      };
    },
    44876: function (e, t, n) {
      'use strict';
      n.d(t, {
        U: function () {
          return u;
        },
      });
      var i = n(75040),
        a = n(58854),
        s = n(68494),
        l = n(75297),
        r = n(549),
        o = n(62182),
        c = n(4808),
        d = n(16488);
      let u = (e) => {
        let { open: t, onOpenChange: n } = e,
          { mutateAsync: u } = (0, r._)(),
          [h, p] = (0, a.useState)({ emoji: '\uD83E\uDD20', color: o.z7.green });
        return (
          (0, a.useEffect)(() => {
            t && p({ emoji: (0, o.Zu)(), color: (0, o.pc)() });
          }, [t]),
          (0, i.jsxs)(l.u, {
            title: 'New Wallet',
            open: t,
            onOpenChange: n,
            submitLabel: 'Create Wallet',
            onSubmit: async (e) => {
              let { formData: t, closeModal: n } = e,
                { picturePreview: i, ...a } = h;
              await u({ ...a, label: t['wallet-name'] }), n();
            },
            fullscreenOnMobile: !0,
            children: [
              (0, i.jsx)(c.b, { pictureType: d.C.WalletPicture, value: h, onValueChange: p }),
              (0, i.jsx)(s.I, {
                label: 'Wallet Name',
                name: 'wallet-name',
                placeholder: 'Wallet Name',
                maxLength: 100,
                size: 'large',
              }),
            ],
          })
        );
      };
    },
    4221: function (e, t, n) {
      'use strict';
      n.d(t, {
        _j: function () {
          return i;
        },
        jY: function () {
          return a;
        },
        rk: function () {
          return s;
        },
      });
      let i = {
          wallets: { title: 'Wallets', href: '/', layout: 'dashboard' },
          hiddenWallets: {
            title: 'Hidden Wallets',
            href: '/wallets/hidden',
            parentHref: '/',
            layout: 'dashboard-subpage',
          },
          removeWallet: {
            title: 'Remove Wallet',
            href: '/[address]/remove',
            parentHref: '/',
            layout: 'dashboard-subpage',
          },
          sendToken: {
            title: 'Send',
            href: '/[address]/send',
            parentHref: '/',
            layout: 'dashboard-subpage',
          },
          import: {
            title: 'Import Wallet',
            href: '/import',
            parentHref: '/',
            layout: 'dashboard-subpage',
          },
          export: {
            title: 'Secret Keys',
            href: '/export',
            parentHref: '/',
            layout: 'dashboard-subpage',
          },
          exportWallet: {
            title: 'Secret Keys',
            href: '/export/wallet',
            parentHref: '/export',
            layout: 'dashboard-subpage',
          },
          addressBook: { title: 'Address Book', href: '/address-book', layout: 'dashboard' },
          connections: { title: 'Connected Apps', href: '/connections', layout: 'dashboard' },
          account: { title: 'Account', href: '/account', layout: 'dashboard' },
          accountPassword: {
            title: 'Password',
            href: '/account/password',
            parentHref: '/account',
            layout: 'dashboard',
          },
          accountPasswordChange: {
            title: 'Update Password',
            href: '/account/password/new',
            parentHref: '/account/password',
            layout: 'dashboard-subpage',
          },
          accountPasswordRemove: {
            title: 'Remove Password',
            href: '/account/password/remove',
            parentHref: '/account/password',
            layout: 'dashboard-subpage',
          },
          accountIdentity: {
            title: 'Login',
            href: '/account/identity',
            parentHref: '/account',
            layout: 'dashboard',
          },
          accountEmail: {
            title: 'Update Email',
            href: '/account/email',
            parentHref: '/account',
            layout: 'dashboard-subpage',
          },
          accountPasskey: {
            title: 'Passkey',
            href: '/account/passkeys',
            parentHref: '/account',
            layout: 'dashboard',
          },
          accountPasskeyRemove: {
            title: 'Delete Passkey',
            href: '/account/passkeys/remove/[id]/',
            parentHref: '/account/passkeys',
            layout: 'dashboard-subpage',
          },
          accountPhone: {
            title: 'Phone',
            href: '/account/phone',
            parentHref: '/account',
            layout: 'dashboard-subpage',
          },
          accountSecurity: { title: 'Security', href: '/account-security', layout: 'dashboard' },
          accountSecurity2FA: {
            title: 'Setup Authenticator App',
            href: '/account-security/2fa',
            parentHref: '/account-security',
            layout: 'dashboard-subpage',
          },
          accountSecurityBackupCodes: {
            title: 'Account Recovery',
            href: '/account-security/backup-codes',
            parentHref: '/account-security',
            layout: 'dashboard',
          },
          accountSecurityDevices: {
            title: 'Devices',
            href: '/account-security/devices',
            parentHref: '/account-security',
            layout: 'dashboard-subpage',
          },
          accountSecurityDevicesRemove: {
            title: 'Remove Device',
            href: '/account-security/devices/remove/[id]/',
            parentHref: '/account-security',
            layout: 'dashboard-subpage',
          },
          accountSecurityBackupRemove: {
            title: 'Delete Recovery Code',
            href: '/account-security/backup-codes/remove/[id]/',
            parentHref: '/account-security/backup-codes',
            layout: 'dashboard-subpage',
          },
          accountSecurityBackupCodesCreate: {
            title: 'Setup Account Recovery',
            href: '/account-security/backup-codes/new',
            parentHref: '/account-security',
            layout: 'dashboard-subpage',
          },
          devPlayground: { title: 'Dev Playground', href: '/dev-playground', layout: 'dashboard' },
          devUIPlayground: {
            title: 'UI Playground',
            href: '/dev-playground/ui',
            parentHref: '/',
            layout: 'dashboard-subpage',
          },
          devTxPlayground: {
            title: 'Transaction Playground',
            href: '/dev-playground/tx',
            layout: 'dashboard-fullpage',
          },
          devModalPlayground: {
            title: 'Integrated Modal Playground',
            href: '/dev-playground/im',
            parentHref: '/',
            layout: 'dashboard-subpage',
          },
        },
        a = {
          support: 'https://family.co/support',
          developerDocs: 'https://docs.family.co/connectkit/family-accounts',
          downloadIOS: 'https://family.co/download',
          terms: 'https://family.co/terms',
          privacy: 'https://family.co/privacy',
        },
        s = (e) => {
          let t = (e) => e.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
          return Object.values(i).find((n) => {
            let i = n.href
                .replace(/\[.*?\]/g, '')
                .replace('//', '/')
                .replace(/\/$/, ''),
              a = e
                .split('/')
                .filter((e) => !e.startsWith('0x') && !e.startsWith('to-') && !t(e))
                .join('/');
            return '/' === e ? '' === i : i === a;
          });
        };
    },
    69162: function (e, t, n) {
      'use strict';
      n.d(t, {
        B: function () {
          return o;
        },
      });
      var i = n(42716),
        a = n(9284),
        s = n(97137);
      let l = {
        [s.V9.Arbitrum]: new i.a_(42161),
        [s.V9.Base]: new i.a_(8453),
        [s.V9.BaseSepolia]: new i.a_(84532),
        [s.V9.Blast]: new i.a_(81457),
        [s.V9.Ethereum]: i.a_.ethereumMainnet(),
        [s.V9.EthereumSepolia]: new i.a_(11155111),
        [s.V9.Lens]: new i.a_(232),
        [s.V9.LensTestnet]: new i.a_(37111),
        [s.V9.Optimism]: new i.a_(10),
        [s.V9.Polygon]: new i.a_(137),
        [s.V9.PolygonAmoy]: new i.a_(80002),
        [s.V9.Scroll]: new i.a_(534352),
        [s.V9.WorldChain]: new i.a_(480),
        [s.V9.Zksync]: new i.a_(324),
      };
      class r extends Error {
        constructor(e) {
          super("Chain '".concat(e.toHexString(), "' not supported")), (this.chainId = e);
        }
      }
      let o = (e) => {
        let t = Object.entries(l).find((t) => {
          let [n, i] = t;
          return i.equals(e);
        });
        return t ? (0, a.Vp)(t[0]) : (0, a.Rn)(new r(e));
      };
    },
    75325: function (e) {
      e.exports = {
        uploading: 'styles_uploading__CJMnq',
        container: 'styles_container__Texvf',
        popoverContainer: 'styles_popoverContainer__cRTY6',
        button: 'styles_button__Kji33',
        fileInput: 'styles_fileInput__5IPPS',
      };
    },
    73153: function (e) {
      e.exports = { container: 'styles_container__gjFPx' };
    },
    3256: function (e) {
      e.exports = {
        overlayAnimEnter: 'animations_overlayAnimEnter__H0bRY',
        enter: 'animations_enter__MnP7J',
        overlayAnimExit: 'animations_overlayAnimExit__0CmqZ',
        exit: 'animations_exit__mkVbT',
        contentAnimEnter: 'animations_contentAnimEnter__avJVk',
        enterPop: 'animations_enterPop__zEium',
        contentAnimExit: 'animations_contentAnimExit__JfeQ1',
        exitPop: 'animations_exitPop__dIT_o',
      };
    },
    20364: function (e) {
      e.exports = {
        trigger: 'styles_trigger__3Z8YW',
        content: 'styles_content__oNxiN',
        search: 'styles_search__ATXgm',
        title: 'styles_title__oxv_R',
        item: 'styles_item__jGXnr',
        label: 'styles_label__hiYTW',
        subLabel: 'styles_subLabel__71Mso',
        icon: 'styles_icon__xcRje',
        externalIcon: 'styles_externalIcon__3iPIT',
        dots: 'styles_dots__lMqTM',
        modal: 'styles_modal__1Ir1H',
        noResults: 'styles_noResults__tPwMk',
        clearButton: 'styles_clearButton__icJfY',
        clearIcon: 'styles_clearIcon__M9dSG',
      };
    },
    46398: function (e) {
      e.exports = {
        searchInput: 'styles_searchInput___lI0N',
        content: 'styles_content__wYU_K',
        grid: 'styles_grid__WL2wU',
        noResults: 'styles_noResults__uzBvY',
        randomButton: 'styles_randomButton__kR9AZ',
      };
    },
    39790: function (e) {
      e.exports = {
        searchInput: 'styles_searchInput__PE3Lp',
        content: 'styles_content__wM4iN',
        grid: 'styles_grid__2nkz_',
        noResults: 'styles_noResults__rRoMB',
      };
    },
    7545: function (e) {
      e.exports = {
        customization: 'styles_customization__1X_QM',
        customizationAvatar: 'styles_customizationAvatar__ZnGkP',
        avatarPicker: 'styles_avatarPicker__umwT5',
        customizationColorPicker: 'styles_customizationColorPicker__qrlUA',
      };
    },
    17372: function (e) {
      e.exports = {
        overlayAnimEnter: 'animation_overlayAnimEnter__XalQe',
        enter: 'animation_enter__UFWPZ',
        overlayAnimExit: 'animation_overlayAnimExit__lfKpe',
        exit: 'animation_exit__fNaux',
        contentAnimEnter: 'animation_contentAnimEnter__5pW12',
        enterPop: 'animation_enterPop__51Wqd',
        enterPopMobile: 'animation_enterPopMobile__Up6aF',
        contentAnimExit: 'animation_contentAnimExit__a7OVd',
        exitPop: 'animation_exitPop__eMjMI',
        exitPopMobile: 'animation_exitPopMobile__M_TPS',
        overlayAnimEnterFullscreen: 'animation_overlayAnimEnterFullscreen__p0i8i',
        overlayAnimExitfullscreen: 'animation_overlayAnimExitfullscreen__cnKVd',
        contentAnimEnterFullscreen: 'animation_contentAnimEnterFullscreen__vIbmr',
        contentAnimExitFullscreen: 'animation_contentAnimExitFullscreen__lie_M',
      };
    },
    32622: function (e) {
      e.exports = {
        modal: 'styles_modal__cwNm5',
        overlay: 'styles_overlay__ZpyvH',
        container: 'styles_container__hU_1k',
        inner: 'styles_inner___qzDL',
        title: 'styles_title__q85dV',
        closeButton: 'styles_closeButton__2hOt9',
        backButton: 'styles_backButton__dksPZ',
        scrollBarGutter: 'styles_scrollBarGutter__yaj5r',
        buttons: 'styles_buttons__GlGJd',
        infoButton: 'styles_infoButton__qJJDw',
        bottomFadeWrapper: 'styles_bottomFadeWrapper__mP8Rq',
        bottomFade: 'styles_bottomFade__OYpUN',
      };
    },
    76946: function (e) {
      e.exports = { container: 'styles_container__GyRMl' };
    },
    63598: function (e) {
      e.exports = {
        overlayAnimEnter: 'animations_overlayAnimEnter__lOHYN',
        enter: 'animations_enter__3InVs',
        overlayAnimExit: 'animations_overlayAnimExit__sI7QL',
        exit: 'animations_exit__hHiYz',
        contentAnimEnter: 'animations_contentAnimEnter__mgwxK',
        enterPop: 'animations_enterPop__imwdu',
        contentAnimExit: 'animations_contentAnimExit__5KNSG',
        exitPop: 'animations_exitPop__Tsb8Y',
      };
    },
    96499: function (e) {
      e.exports = { content: 'styles_content__nfhT_', tail: 'styles_tail__xNeI0' };
    },
    76440: function (e) {
      e.exports = {
        container: 'styles_container__m7LWj',
        list: 'styles_list__HjADZ',
        empty: 'styles_empty__aBCK0',
        itemContent: 'styles_itemContent__n5ooL',
        left: 'styles_left__aN6eO',
        content: 'styles_content__2YYhJ',
        info: 'styles_info__xItju',
        right: 'styles_right__Zf9wY',
        actions: 'styles_actions__quErr',
        icon: 'styles_icon__EikE4',
      };
    },
    72809: function (e) {
      e.exports = {
        container: 'styles_container__pdYwW',
        heading: 'styles_heading__TMP_r',
        content: 'styles_content__5nn7d',
        children: 'styles_children__GSOJK',
        footer: 'styles_footer__UDFky',
      };
    },
  },
]);
