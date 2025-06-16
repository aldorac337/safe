(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1112, 2873, 4110, 8974, 9612],
  {
    15310: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 75353));
    },
    62942: (e, t, r) => {
      'use strict';
      var a = r(42418);
      r.o(a, 'useParams') &&
        r.d(t, {
          useParams: function () {
            return a.useParams;
          },
        }),
        r.o(a, 'usePathname') &&
          r.d(t, {
            usePathname: function () {
              return a.usePathname;
            },
          }),
        r.o(a, 'useRouter') &&
          r.d(t, {
            useRouter: function () {
              return a.useRouter;
            },
          }),
        r.o(a, 'useSearchParams') &&
          r.d(t, {
            useSearchParams: function () {
              return a.useSearchParams;
            },
          }),
        r.o(a, 'useServerInsertedHTML') &&
          r.d(t, {
            useServerInsertedHTML: function () {
              return a.useServerInsertedHTML;
            },
          });
    },
    73115: (e, t, r) => {
      'use strict';
      r.d(t, { A: () => $ });
      var a = r(7620),
        n = r(32987),
        i = r(56579),
        o = r(33377),
        s = r(66179),
        l = r(32678),
        u = r(33420),
        d = r(87975),
        h = r(61829),
        p = r(75989);
      function c(e) {
        return (0, p.Ay)('MuiSkeleton', e);
      }
      (0, h.A)('MuiSkeleton', [
        'root',
        'text',
        'rectangular',
        'rounded',
        'circular',
        'pulse',
        'wave',
        'withChildren',
        'fitContent',
        'heightAuto',
      ]);
      var f = r(54568);
      let m = (e) => {
          let { classes: t, variant: r, animation: a, hasChildren: n, width: o, height: s } = e;
          return (0, i.A)(
            {
              root: [
                'root',
                r,
                a,
                n && 'withChildren',
                n && !o && 'fitContent',
                n && !s && 'heightAuto',
              ],
            },
            c,
            t
          );
        },
        v = (0, s.i7)`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,
        g = (0, s.i7)`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,
        b =
          'string' != typeof v
            ? (0, s.AH)`
        animation: ${v} 2s ease-in-out 0.5s infinite;
      `
            : null,
        y =
          'string' != typeof g
            ? (0, s.AH)`
        &::after {
          animation: ${g} 2s linear 0.5s infinite;
        }
      `
            : null,
        w = (0, l.Ay)('span', {
          name: 'MuiSkeleton',
          slot: 'Root',
          overridesResolver: (e, t) => {
            let { ownerState: r } = e;
            return [
              t.root,
              t[r.variant],
              !1 !== r.animation && t[r.animation],
              r.hasChildren && t.withChildren,
              r.hasChildren && !r.width && t.fitContent,
              r.hasChildren && !r.height && t.heightAuto,
            ];
          },
        })(
          (0, u.A)(({ theme: e }) => {
            let t = String(e.shape.borderRadius).match(/[\d.\-+]*\s*(.*)/)[1] || 'px',
              r = parseFloat(e.shape.borderRadius);
            return {
              display: 'block',
              backgroundColor: e.vars
                ? e.vars.palette.Skeleton.bg
                : (0, o.X4)(e.palette.text.primary, 'light' === e.palette.mode ? 0.11 : 0.13),
              height: '1.2em',
              variants: [
                {
                  props: { variant: 'text' },
                  style: {
                    marginTop: 0,
                    marginBottom: 0,
                    height: 'auto',
                    transformOrigin: '0 55%',
                    transform: 'scale(1, 0.60)',
                    borderRadius: `${r}${t}/${Math.round((r / 0.6) * 10) / 10}${t}`,
                    '&:empty:before': { content: '"\\00a0"' },
                  },
                },
                { props: { variant: 'circular' }, style: { borderRadius: '50%' } },
                {
                  props: { variant: 'rounded' },
                  style: { borderRadius: (e.vars || e).shape.borderRadius },
                },
                {
                  props: ({ ownerState: e }) => e.hasChildren,
                  style: { '& > *': { visibility: 'hidden' } },
                },
                {
                  props: ({ ownerState: e }) => e.hasChildren && !e.width,
                  style: { maxWidth: 'fit-content' },
                },
                {
                  props: ({ ownerState: e }) => e.hasChildren && !e.height,
                  style: { height: 'auto' },
                },
                {
                  props: { animation: 'pulse' },
                  style: b || { animation: `${v} 2s ease-in-out 0.5s infinite` },
                },
                {
                  props: { animation: 'wave' },
                  style: {
                    position: 'relative',
                    overflow: 'hidden',
                    WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                    '&::after': {
                      background: `linear-gradient(
                90deg,
                transparent,
                ${(e.vars || e).palette.action.hover},
                transparent
              )`,
                      content: '""',
                      position: 'absolute',
                      transform: 'translateX(-100%)',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      top: 0,
                    },
                  },
                },
                {
                  props: { animation: 'wave' },
                  style: y || { '&::after': { animation: `${g} 2s linear 0.5s infinite` } },
                },
              ],
            };
          })
        ),
        $ = a.forwardRef(function (e, t) {
          let r = (0, d.b)({ props: e, name: 'MuiSkeleton' }),
            {
              animation: a = 'pulse',
              className: i,
              component: o = 'span',
              height: s,
              style: l,
              variant: u = 'text',
              width: h,
              ...p
            } = r,
            c = { ...r, animation: a, component: o, variant: u, hasChildren: !!p.children },
            v = m(c);
          return (0, f.jsx)(w, {
            as: o,
            ref: t,
            className: (0, n.A)(v.root, i),
            ownerState: c,
            ...p,
            style: { width: h, height: s, ...l },
          });
        });
    },
    75353: (e, t, r) => {
      'use strict';
      r.d(t, { HashRouterRedirect: () => u });
      var a = r(54568),
        n = r(62942),
        i = r(7620),
        o = r(73115);
      let s = { dex: 'pools', lend: 'markets', crvusd: 'markets', dao: 'proposals' },
        l = ['lend', 'crvusd', 'dao'];
      function u({ app: e, redirects: t }) {
        let { replace: r } = (0, n.useRouter)();
        return (
          (0, i.useEffect)(() => {
            let a = (function ({ search: e, hash: t, origin: r }, a, n) {
              let i = t.replace(/^#\/?/, ''),
                o = a ?? l.find((e) => r.startsWith(e)) ?? 'dex';
              return n?.find((e) => e.startsWith(i))
                ? `/${o}/ethereum/${i}${e}`
                : 'integrations' != i.split('/').filter(Boolean).join('/')
                  ? `/${o}/${i}${e}`
                  : `/${o}/ethereum/${i ?? s[o]}`;
            })(window.location, e, t);
            console.info(`Redirecting from ${window.location.href} to ${a}`), r(a);
          }, [e, r, t]),
          (0, a.jsx)(o.A, {})
        );
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [9335, 587, 8315, 7358], () => t(15310)), (_N_E = e.O());
  },
]);
